#!/usr/bin/env python3
"""
sintetizador.py — Gera DOSSIE.md + insights/ para cada tópico WCS.

FASE 1 — Síntese normal (todos os 30 tópicos):
  1. Lê {sub}.RAW.md e divide em seções pelo separador "---"
  2. Agrupa em chunks por ORÇAMENTO DE TOKENS (respeita rate limit de input)
  3. Chama Opus por chunk -> extrai fatos estruturados (JSON) + desvios de tópico
  4. Consolida fatos se ultrapassarem o orçamento de síntese
  5. Chama Opus com os fatos -> gera DOSSIE.md
  6. Chama Opus com os fatos -> gera insights/
  7. Acumula desvios detectados (seções que pertencem a outro tópico)

FASE 2 — Resolução de desvios (automática após fase 1):
  8. Tópicos EXISTENTES: appenda seções ao RAW + regenera DOSSIE
  9. Tópicos NOVOS: cria bloco/diretório + RAW sintético + topicos.json + DOSSIE
  10. Escreve _REVISAO_TOPICOS.md com relatório

Rate limit: throttle proativo (TPM_LIMIT) + retry do SDK como rede de segurança.
Estado salvo em _estado_sintetizador.json — permite resumir após interrupção.

Uso:
    python sintetizador.py                        # dry-run completo (fases 1+2)
    python sintetizador.py --apply                # aplica fases 1+2
    python sintetizador.py --apply --topico cubagem  # só um tópico, sem fase 2
    python sintetizador.py --apply --force        # reprocessa mesmo se DOSSIE já existe
    python sintetizador.py --apply --so-fase2     # pula fase 1, só resolve desvios
"""

import argparse
import hashlib
import io
import json
import os
import sys
import time
from collections import defaultdict
from datetime import date
from pathlib import Path

# Garante UTF-8 no stdout/stderr no Windows
if sys.platform == "win32":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")

from dotenv import load_dotenv
from tqdm import tqdm
import anthropic

# ─── Caminhos ─────────────────────────────────────────────────────────────────

SCRIPT_DIR    = Path(__file__).parent
RAIZ_COFRE    = SCRIPT_DIR.parent / "corpus-conhecimento" / "blocos"
TOPICOS_JSON  = SCRIPT_DIR / "topicos.json"
ESTADO_JSON   = SCRIPT_DIR / "_estado_sintetizador.json"
REVISAO_MD    = SCRIPT_DIR.parent / "corpus-conhecimento" / "_REVISAO_TOPICOS.md"
ENV_PATH      = SCRIPT_DIR.parent / ".env"

# ─── Parâmetros de rate limit ─────────────────────────────────────────────────
# Tier 1 = 10.000 tokens de input/min. Trabalhamos abaixo disso com margem.

TPM_LIMIT       = 9000   # orçamento de input por janela de 60s (margem p/ os 10k reais)
CHUNK_TK_BUDGET = 6500   # tokens de SEÇÕES por chunk de extração (+ prompt ~800 = ~7300)
SINTESE_TK_MAX  = 6500   # acima disto, consolida fatos antes de sintetizar
CONSOLIDA_LOTE  = 5000   # tokens por lote ao consolidar listas grandes

MODEL = "claude-opus-4-8"

def est_tokens(texto: str) -> int:
    """Estimativa conservadora de tokens (PT-BR ~3 chars/token)."""
    return max(1, len(texto) // 3)


# ─── Throttle proativo (janela fixa de 60s) ───────────────────────────────────

_janela = {"inicio": None, "usado": 0}

def throttle(est: int) -> None:
    """Pausa para manter o input abaixo de TPM_LIMIT na janela de 60s."""
    agora = time.monotonic()
    if _janela["inicio"] is None:
        _janela["inicio"] = agora
    decorrido = agora - _janela["inicio"]
    if decorrido >= 60:
        _janela["inicio"] = agora
        _janela["usado"] = 0
        decorrido = 0
    if _janela["usado"] + est > TPM_LIMIT:
        espera = max(0, 60 - decorrido) + 2
        if espera > 0:
            tqdm.write(f"  [throttle] aguardando {espera:.0f}s (limite TPM)")
            time.sleep(espera)
        _janela["inicio"] = time.monotonic()
        _janela["usado"] = 0
    _janela["usado"] += est


# ─── Prompts — Fase 1 ─────────────────────────────────────────────────────────

EXTRACAO_SYSTEM = """\
Você é um engenheiro de software especialista em sistemas WCS (Warehouse Control System).
Extraia informações técnicas objetivas do texto e retorne SOMENTE JSON válido, sem texto antes ou depois.
"""

EXTRACAO_PROMPT = """\
Tópico WCS: **{sub}** (bloco: {bloco})

Analise as {n} seções abaixo e retorne JSON com esta estrutura exata:
{{
  "fatos": ["fato técnico objetivo 1", ...],
  "telas": [{{"nome": "...", "campos": ["..."], "comportamento": "..."}}],
  "regras_negocio": ["regra explícita 1", ...],
  "integracoes": [{{"sistema": "...", "tipo": "...", "descricao": "..."}}],
  "variacoes_projeto": [{{"projeto": "CÓDIGO", "variacao": "descrição da diferença"}}],
  "terminologia": [{{"termo": "...", "definicao": "..."}}],
  "desvios_topico": [
    {{
      "heading": "heading exato da seção desviada",
      "topico_sugerido": "slug-kebab-case",
      "bloco_sugerido": "nome-bloco",
      "razao": "em 1 linha: por que pertence ao outro tópico",
      "conteudo_chave": "resumo de 3-5 linhas do conteúdo da seção"
    }}
  ]
}}

REGRAS PARA desvios_topico (confiança mínima 90%):
- Inclua SOMENTE seções que descrevem OUTRO processo completamente — não seções relacionadas.
- Teste: se a seção fosse removida deste RAW, o processo "{sub}" ainda ficaria completo e coerente?
- Exemplo VÁLIDO: seção sobre algoritmo de routing de sorter dentro do RAW de "packing".
- Exemplo INVÁLIDO: seção sobre integração dentro de "order-start" (integrações são esperadas em todos).
- Omita o campo se não houver desvios com essa confiança.

Seções para analisar:
{sections}
"""

CONSOLIDA_SYSTEM = """\
Você é um especialista em WCS. Consolide e deduplique listas de fatos técnicos.
Retorne SOMENTE JSON válido, sem texto antes ou depois.
"""

CONSOLIDA_PROMPT = """\
Consolide os itens de **{campo}** abaixo sobre o tópico WCS "{sub}".
Funda duplicatas e variações da mesma informação, mas NÃO perca nenhum fato único.
Retorne JSON: {{"itens": ["item consolidado 1", ...]}}

Itens:
{itens}
"""

DOSSIE_SYSTEM = """\
Você é um consultor técnico sênior em WCS. Gere documentação clara, objetiva e rastreável em Markdown.
Responda APENAS com o conteúdo do arquivo, sem preâmbulo.
"""

DOSSIE_PROMPT = """\
Com base nos fatos técnicos extraídos abaixo sobre **{sub}** (bloco: {bloco}),
gere um DOSSIE.md completo. Use exatamente esta estrutura de seções:

# {sub} — Dossiê Técnico

**Bloco:** {bloco} | **Tópico:** {sub}
**Seções analisadas:** {total_sections} | **Recortes processados:** {n_chunks}
{origem_nota}

## Visão Geral

## Fluxo do Processo

## Telas e Funcionalidades

## Regras de Negócio

## Variações por Projeto

## Integrações

## Terminologia

---
*Gerado em {today} · {n_chunks} recortes · {total_sections} seções*

---

Fatos extraídos (entrada para síntese):
{facts_json}
"""

INSIGHTS_SYSTEM = """\
Você é um analista de sistemas especialista em identificar padrões, lacunas e inferências
a partir de documentação técnica de projetos WCS. Seja crítico e honesto.
Responda APENAS com o conteúdo do arquivo, sem preâmbulo.
"""

INSIGHTS_PROMPT = """\
Com base nos fatos técnicos extraídos sobre **{sub}** (bloco: {bloco}),
gere um arquivo de insights em Markdown:

# {sub} — Insights

## Padrões Identificados
(padrões que se repetem consistentemente entre projetos ou seções)

## Variações Significativas
(comportamentos que diferem entre projetos de forma relevante para implementação)

## Lacunas e Inconsistências
(informações ausentes, contraditórias ou que precisam de clarificação)

## Inferências
Para cada inferência:
- **Inferência:** descrição
- **Confiabilidade:** alta / média / baixa
- **Base:** justificativa breve

---
*Gerado em {today}*

---

Fatos de entrada:
{facts_json}
"""


# ─── Funções utilitárias ───────────────────────────────────────────────────────

def id_secao(texto: str) -> str:
    return hashlib.md5(texto.encode()).hexdigest()[:16]


def extrair_texto_de_mensagem(msg) -> str:
    """Extrai o bloco de texto da mensagem (ignora thinking blocks)."""
    for block in msg.content:
        if hasattr(block, "type") and block.type == "text":
            return block.text
    return ""


def chamar_opus(
    client: anthropic.Anthropic,
    system: str,
    prompt: str,
    max_tokens: int = 8192,
) -> str:
    """Chama Opus com throttle + streaming + adaptive thinking. Retorna só o texto."""
    est = est_tokens(system) + est_tokens(prompt) + 200
    throttle(est)
    with client.messages.stream(
        model=MODEL,
        max_tokens=max_tokens,
        thinking={"type": "adaptive"},
        system=system,
        messages=[{"role": "user", "content": prompt}],
    ) as stream:
        msg = stream.get_final_message()
    return extrair_texto_de_mensagem(msg)


def extrair_json(texto: str) -> dict:
    """Extrai o primeiro JSON da resposta, tolerando texto extra."""
    texto = texto.strip()
    inicio = texto.find("{")
    fim = texto.rfind("}") + 1
    if inicio == -1 or fim == 0:
        return {}
    try:
        return json.loads(texto[inicio:fim])
    except json.JSONDecodeError:
        return {}


# ─── Parsing do RAW ───────────────────────────────────────────────────────────

def parse_secoes(raw_path: Path) -> list:
    """Divide o RAW.md em seções (delimitadas por \\n---\\n)."""
    texto = raw_path.read_text(encoding="utf-8")
    partes = texto.split("\n---\n")
    return [p.strip() for p in partes if p.strip() and "**Origem:**" in p]


def chunkar_por_tokens(secoes: list, budget: int = CHUNK_TK_BUDGET) -> list:
    """Agrupa seções em chunks respeitando um orçamento de tokens por chunk."""
    chunks, atual, atual_tk = [], [], 0
    for sec in secoes:
        tk = est_tokens(sec)
        if atual and atual_tk + tk > budget:
            chunks.append(atual)
            atual, atual_tk = [sec], tk
        else:
            atual.append(sec)
            atual_tk += tk
    if atual:
        chunks.append(atual)
    return chunks


# ─── Mesclagem e consolidação de extrações ────────────────────────────────────

CAMPOS_LISTA = ["fatos", "telas", "regras_negocio", "integracoes", "variacoes_projeto", "terminologia"]

def mesclar_extracoes(lista_extracoes: list) -> tuple:
    """Retorna (fatos_merged: dict, desvios: list)."""
    merged = {campo: [] for campo in CAMPOS_LISTA}
    desvios = []
    for ext in lista_extracoes:
        for campo in CAMPOS_LISTA:
            val = ext.get(campo, [])
            if isinstance(val, list):
                merged[campo].extend(val)
        d = ext.get("desvios_topico", [])
        if isinstance(d, list):
            desvios.extend(d)
    return merged, desvios


def consolidar_lista(client: anthropic.Anthropic, itens: list, campo: str, sub: str) -> list:
    """Deduplica/funde uma lista grande em sub-lotes que cabem no rate limit."""
    resultado = []
    lote, lote_tk = [], 0

    def flush(batch: list) -> list:
        if not batch:
            return []
        prompt = CONSOLIDA_PROMPT.format(
            campo=campo, sub=sub,
            itens=json.dumps(batch, ensure_ascii=False, indent=1),
        )
        resp = chamar_opus(client, CONSOLIDA_SYSTEM, prompt, max_tokens=4096)
        data = extrair_json(resp)
        out = data.get("itens") if isinstance(data, dict) else None
        return out if isinstance(out, list) else batch

    for it in itens:
        tk = est_tokens(json.dumps(it, ensure_ascii=False))
        if lote and lote_tk + tk > CONSOLIDA_LOTE:
            resultado += flush(lote)
            lote, lote_tk = [it], tk
        else:
            lote.append(it)
            lote_tk += tk
    resultado += flush(lote)
    return resultado


def preparar_facts_json(client: anthropic.Anthropic, fatos: dict, sub: str) -> str:
    """Serializa os fatos; se passarem do orçamento de síntese, consolida as listas grandes."""
    facts_json = json.dumps(fatos, ensure_ascii=False, indent=2)
    tentativas = 0
    while est_tokens(facts_json) > SINTESE_TK_MAX and tentativas < 3:
        tentativas += 1
        tqdm.write(f"  [consolida] fatos grandes (~{est_tokens(facts_json)} tk), consolidando (passo {tentativas})")
        for campo in ["fatos", "regras_negocio", "telas", "integracoes"]:
            itens = fatos.get(campo, [])
            if len(itens) > 25:
                fatos[campo] = consolidar_lista(client, itens, campo, sub)
        facts_json = json.dumps(fatos, ensure_ascii=False, indent=2)
    # Rede de segurança: trunca defensivamente se ainda gigante
    if est_tokens(facts_json) > TPM_LIMIT - 1500:
        limite_chars = (TPM_LIMIT - 1500) * 3
        facts_json = facts_json[:limite_chars] + "\n... [truncado para caber no rate limit]"
    return facts_json


# ─── Estado de execução ───────────────────────────────────────────────────────

def carregar_estado() -> dict:
    if ESTADO_JSON.exists():
        try:
            return json.loads(ESTADO_JSON.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {
        "topicos_concluidos": [],
        "topicos_com_erro": [],
        "desvios_coletados": {},
        "novos_topicos_criados": [],
        "fase2_concluida": False,
        "ultima_atualizacao": "",
    }


def salvar_estado(estado: dict) -> None:
    estado["ultima_atualizacao"] = date.today().isoformat()
    ESTADO_JSON.write_text(
        json.dumps(estado, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


# ─── FASE 1 — Processamento de um tópico ──────────────────────────────────────

def processar_topico(
    client: anthropic.Anthropic,
    bloco: str,
    sub: str,
    apply: bool,
    force: bool,
    collect_desvios: bool = True,
    origem_nota: str = "",
) -> tuple:
    """Processa um tópico: extrai fatos, gera DOSSIE + insights. Retorna (sucesso, desvios)."""
    raw_path      = RAIZ_COFRE / bloco / sub / f"{sub}.RAW.md"
    dossie_path   = RAIZ_COFRE / bloco / sub / "DOSSIE.md"
    insights_dir  = RAIZ_COFRE / bloco / sub / "insights"
    insights_path = insights_dir / f"{sub}.INSIGHTS.md"

    if not raw_path.exists():
        print(f"  [SKIP] RAW nao encontrado: {raw_path}")
        return False, []

    if dossie_path.exists() and not force:
        print(f"  [SKIP] DOSSIE ja existe (--force para reprocessar)")
        return False, []

    secoes = parse_secoes(raw_path)
    if not secoes:
        print(f"  [SKIP] Nenhuma secao valida em {raw_path.name}")
        return False, []

    chunks = chunkar_por_tokens(secoes)
    total  = len(secoes)
    n_ch   = len(chunks)
    today  = date.today().isoformat()

    print(f"  -> {total} secoes | {n_ch} chunk(s) por orcamento de tokens")

    if not apply:
        print(f"  [DRY-RUN] Geraria DOSSIE.md + insights/{sub}.INSIGHTS.md")
        return True, []

    # ── Passo 1: extração por chunk ───────────────────────────────────────────
    extracoes = []
    for i, chunk in enumerate(tqdm(chunks, desc=f"  extração [{sub}]", leave=False)):
        sections_text = "\n\n---\n\n".join(chunk)
        prompt = EXTRACAO_PROMPT.format(
            sub=sub, bloco=bloco, n=len(chunk), sections=sections_text
        )
        resposta = chamar_opus(client, EXTRACAO_SYSTEM, prompt, max_tokens=4096)
        dados = extrair_json(resposta)
        if dados:
            extracoes.append(dados)
        else:
            tqdm.write(f"  [WARN] chunk {i+1}/{n_ch}: JSON invalido na extracao")

    if not extracoes:
        print(f"  [ERRO] Nenhum fato extraido")
        return False, []

    fatos, desvios = mesclar_extracoes(extracoes)
    if not collect_desvios:
        desvios = []

    facts_json = preparar_facts_json(client, fatos, sub)

    # ── Passo 2: DOSSIE.md ────────────────────────────────────────────────────
    dossie_prompt = DOSSIE_PROMPT.format(
        sub=sub, bloco=bloco, total_sections=total, n_chunks=n_ch,
        today=today, facts_json=facts_json, origem_nota=origem_nota,
    )
    dossie_texto = chamar_opus(client, DOSSIE_SYSTEM, dossie_prompt)
    dossie_path.write_text(dossie_texto, encoding="utf-8")
    print(f"  [OK] DOSSIE.md ({len(dossie_texto):,} chars)")

    # ── Passo 3: insights ─────────────────────────────────────────────────────
    insights_prompt = INSIGHTS_PROMPT.format(
        sub=sub, bloco=bloco, today=today, facts_json=facts_json
    )
    insights_texto = chamar_opus(client, INSIGHTS_SYSTEM, insights_prompt)
    insights_dir.mkdir(exist_ok=True)
    insights_path.write_text(insights_texto, encoding="utf-8")
    print(f"  [OK] {sub}.INSIGHTS.md ({len(insights_texto):,} chars)")

    if desvios:
        print(f"  [!] {len(desvios)} desvio(s) de topico detectado(s)")

    return True, desvios


# ─── FASE 2 — Resolução de desvios ────────────────────────────────────────────

def criar_raw_sintetico(sub: str, bloco: str, desvios: list, apply: bool) -> Path:
    """Cria RAW.md sintético para um tópico novo a partir dos desvios coletados."""
    raw_dir  = RAIZ_COFRE / bloco / sub
    raw_path = raw_dir / f"{sub}.RAW.md"

    fontes = sorted(set(d.get("fonte", "?") for d in desvios))
    linhas = [
        f"# {sub}.RAW — Evidência Bruta (AUTO-DETECTADO)",
        "",
        f"<!-- AUTO-DETECTADO pelo sintetizador.py em {date.today().isoformat()} -->",
        f"<!-- Fontes: {', '.join(fontes)} -->",
        "<!-- REVISAR: validar se este topico justifica um MD separado -->",
        "",
    ]
    for desvio in desvios:
        heading  = desvio.get("heading", "")
        conteudo = desvio.get("conteudo_chave", "")
        fonte    = desvio.get("fonte", "?")
        sec_id   = id_secao(heading + conteudo)
        linhas += [
            "---",
            f"**Origem:** [AUTO] Extraído de `{fonte}` pelo sintetizador  ",
            f"**Heading:** {heading}  ",
            f"**Score:** — (auto-detectado) | **ID:** {sec_id}",
            "",
            conteudo,
            "",
        ]
    if apply:
        raw_dir.mkdir(parents=True, exist_ok=True)
        raw_path.write_text("\n".join(linhas), encoding="utf-8")
        (raw_dir / "insights").mkdir(exist_ok=True)
        print(f"  [OK] RAW sintetico criado: {raw_path}")
    return raw_path


def append_secoes_raw(raw_path: Path, desvios: list) -> None:
    """Appenda seções ao final de um RAW.md existente."""
    linhas = [f"\n<!-- Secoes adicionadas pelo sintetizador em {date.today().isoformat()} -->"]
    for desvio in desvios:
        heading  = desvio.get("heading", "")
        conteudo = desvio.get("conteudo_chave", "")
        fonte    = desvio.get("fonte", "?")
        sec_id   = id_secao(heading + conteudo)
        linhas += [
            "\n---",
            f"**Origem:** [AUTO] Extraído de `{fonte}` pelo sintetizador  ",
            f"**Heading:** {heading}  ",
            f"**Score:** — (auto-detectado) | **ID:** {sec_id}",
            "",
            conteudo,
            "",
        ]
    with raw_path.open("a", encoding="utf-8") as f:
        f.write("\n".join(linhas))


def fase2_resolver_desvios(
    client: anthropic.Anthropic,
    desvios_por_topico: dict,
    topicos_existentes: dict,
    apply: bool,
    force: bool,
) -> tuple:
    """Resolve desvios. Retorna (novos_topicos: dict, linhas_relatorio: list)."""
    if not desvios_por_topico:
        print("\n[FASE 2] Nenhum desvio detectado. Nada a resolver.")
        return {}, []

    novos_topicos = {}
    linhas_relat = [
        f"# Revisão de Tópicos — {date.today().isoformat()}",
        "",
        "Desvios detectados pela Fase 1 do sintetizador.",
        "",
    ]

    print(f"\n[FASE 2] {len(desvios_por_topico)} topico(s) com desvios:")

    for topico_alvo, desvios in sorted(desvios_por_topico.items()):
        bloco_alvo = desvios[0].get("bloco_sugerido", "sistema")
        existente  = topico_alvo in topicos_existentes
        status     = "EXISTENTE" if existente else "NOVO"

        print(f"\n  [{status}] {bloco_alvo}/{topico_alvo} — {len(desvios)} desvio(s)")

        linhas_relat += [
            f"## {topico_alvo}  ({status})",
            f"**Bloco:** {bloco_alvo} | **Desvios:** {len(desvios)}",
            "",
        ]
        for d in desvios:
            linhas_relat.append(f"- De `{d.get('fonte','?')}`: \"{d.get('heading','')}\" — {d.get('razao','')}")
        linhas_relat.append("")

        if existente:
            bloco_real = topicos_existentes[topico_alvo]["bloco"]
            raw_path   = RAIZ_COFRE / bloco_real / topico_alvo / f"{topico_alvo}.RAW.md"
            if apply and raw_path.exists():
                append_secoes_raw(raw_path, desvios)
                linhas_relat.append(f"> {len(desvios)} seção(ões) appendada(s) ao RAW existente.")
            nota = f"\n> **Nota:** {len(desvios)} seção(ões) adicionada(s) automaticamente pelo sintetizador."
            print(f"    -> Regenerando DOSSIE de {topico_alvo}...")
            processar_topico(client, bloco_real, topico_alvo, apply=apply, force=True,
                             collect_desvios=False, origem_nota=nota)
        else:
            criar_raw_sintetico(topico_alvo, bloco_alvo, desvios, apply)
            novos_topicos[topico_alvo] = {
                "bloco": bloco_alvo, "sub": topico_alvo,
                "auto_detectado": True,
                "detectado_em": sorted(set(d.get("fonte", "?") for d in desvios)),
            }
            linhas_relat.append(f"> Novo topico criado: `{bloco_alvo}/{topico_alvo}.RAW.md`")
            nota = "\n> **Nota:** Tópico criado automaticamente pelo sintetizador (revisão manual recomendada)."
            print(f"    -> Gerando DOSSIE para novo topico {topico_alvo}...")
            if apply:
                processar_topico(client, bloco_alvo, topico_alvo, apply=apply, force=True,
                                 collect_desvios=False, origem_nota=nota)
        linhas_relat.append("")

    return novos_topicos, linhas_relat


def atualizar_topicos_json(novos: dict) -> None:
    with TOPICOS_JSON.open(encoding="utf-8") as f:
        dados = json.load(f)
    dados["topicos"].update(novos)
    with TOPICOS_JSON.open("w", encoding="utf-8") as f:
        json.dump(dados, f, ensure_ascii=False, indent=2)
    print(f"\n[FASE 2] topicos.json atualizado com {len(novos)} novo(s) topico(s)")


# ─── Main ─────────────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument("--apply",    action="store_true", help="Escreve arquivos (default: dry-run)")
    parser.add_argument("--force",    action="store_true", help="Reprocessa mesmo se DOSSIE existe")
    parser.add_argument("--topico",   metavar="SLUG",      help="Processa so este topico (sem fase 2)")
    parser.add_argument("--so-fase2", action="store_true", help="Pula fase 1, so resolve desvios do estado")
    args = parser.parse_args()

    load_dotenv(ENV_PATH)
    api_key = os.environ.get("ANTHROPIC_API_KEY", "").strip()
    if not api_key:
        print(
            f"ERRO: ANTHROPIC_API_KEY ausente.\n"
            f"Adicione em: {ENV_PATH}\n"
            f"  ANTHROPIC_API_KEY=sk-ant-...",
            file=sys.stderr,
        )
        sys.exit(1)

    with TOPICOS_JSON.open(encoding="utf-8") as f:
        todos_topicos: dict = json.load(f)["topicos"]

    estado = carregar_estado()

    if args.force and not args.so_fase2:
        estado = {
            "topicos_concluidos": [], "topicos_com_erro": [],
            "desvios_coletados": {}, "novos_topicos_criados": [],
            "fase2_concluida": False, "ultima_atualizacao": "",
        }

    # max_retries: rede de segurança caso o throttle erre a estimativa (SDK respeita retry-after)
    client = anthropic.Anthropic(api_key=api_key, max_retries=8, timeout=600.0)
    modo   = "APPLY" if args.apply else "DRY-RUN"
    today  = date.today().isoformat()

    # ── FASE 1 ────────────────────────────────────────────────────────────────
    if not args.so_fase2:
        topicos_para_processar = todos_topicos

        if args.topico:
            if args.topico not in todos_topicos:
                print(f"ERRO: topico '{args.topico}' nao encontrado em topicos.json", file=sys.stderr)
                sys.exit(1)
            topicos_para_processar = {args.topico: todos_topicos[args.topico]}

        if not args.force and not args.topico:
            concluidos = set(estado.get("topicos_concluidos", []))
            topicos_para_processar = {
                k: v for k, v in topicos_para_processar.items() if k not in concluidos
            }
            if concluidos:
                print(f"\n[INFO] {len(concluidos)} topico(s) ja concluidos (estado salvo) — pulando.")
                print(f"[INFO] Use --force para reprocessar tudo.\n")

        print(f"\n=== sintetizador.py FASE 1 [{modo}] — {len(topicos_para_processar)} topico(s) ===\n")

        ok = falha = pulados = 0
        desvios_novos: dict = defaultdict(list)

        for nome, info in topicos_para_processar.items():
            bloco, sub = info["bloco"], info["sub"]
            print(f"[{bloco}/{sub}]")
            try:
                sucesso, desvios = processar_topico(
                    client=client, bloco=bloco, sub=sub,
                    apply=args.apply, force=args.force,
                )
                if sucesso:
                    ok += 1
                    if nome not in estado["topicos_concluidos"]:
                        estado["topicos_concluidos"].append(nome)
                    for d in desvios:
                        slug_alvo = d.get("topico_sugerido", "").strip()
                        if slug_alvo and slug_alvo != nome:
                            desvios_novos[slug_alvo].append({**d, "fonte": nome})
                    # Salva estado a cada tópico concluído (resumabilidade fina)
                    if args.apply:
                        for alvo, lista in desvios_novos.items():
                            ja = estado["desvios_coletados"].get(alvo, [])
                            # evita duplicar ao salvar incrementalmente
                            estado["desvios_coletados"][alvo] = ja
                        salvar_estado(estado)
                else:
                    pulados += 1
            except anthropic.APIError as e:
                print(f"  [ERRO API] {e}", file=sys.stderr)
                falha += 1
                if nome not in estado["topicos_com_erro"]:
                    estado["topicos_com_erro"].append(nome)
            except Exception as e:
                print(f"  [ERRO] {e}", file=sys.stderr)
                falha += 1
            print()

        # Mescla desvios coletados nesta execução no estado
        for alvo, lista in desvios_novos.items():
            existentes = estado["desvios_coletados"].get(alvo, [])
            # dedup por (fonte, heading)
            chaves = {(d.get("fonte"), d.get("heading")) for d in existentes}
            for d in lista:
                if (d.get("fonte"), d.get("heading")) not in chaves:
                    existentes.append(d)
            estado["desvios_coletados"][alvo] = existentes

        if args.apply:
            salvar_estado(estado)

        print(f"=== FASE 1: {ok} processados | {pulados} pulados | {falha} erros ===")
        total_desvios = sum(len(v) for v in desvios_novos.values())
        if total_desvios:
            print(f"=== {total_desvios} desvio(s) detectado(s) em {len(desvios_novos)} topico(s) ===")

    # ── FASE 2 ────────────────────────────────────────────────────────────────
    if args.apply and not args.topico:
        desvios_estado = estado.get("desvios_coletados", {})
        novos_topicos, linhas_relat = fase2_resolver_desvios(
            client=client, desvios_por_topico=desvios_estado,
            topicos_existentes=todos_topicos, apply=args.apply, force=args.force,
        )
        if novos_topicos:
            atualizar_topicos_json(novos_topicos)
            estado["novos_topicos_criados"] = sorted(
                set(estado.get("novos_topicos_criados", [])) | set(novos_topicos.keys())
            )
        if linhas_relat:
            REVISAO_MD.write_text("\n".join(linhas_relat), encoding="utf-8")
            print(f"\n[OK] Relatorio escrito: {REVISAO_MD}")
        estado["fase2_concluida"] = True
        salvar_estado(estado)

    elif not args.topico:
        desvios_estado = estado.get("desvios_coletados", {})
        if desvios_estado:
            print(f"\n[DRY-RUN FASE 2] {len(desvios_estado)} topico(s) com desvios pendentes:")
            for alvo, devs in desvios_estado.items():
                existe = "(existente)" if alvo in todos_topicos else "(NOVO)"
                print(f"  - {alvo} {existe}: {len(devs)} desvio(s)")

    print(f"\n=== Concluido em {today} ===")


if __name__ == "__main__":
    main()
