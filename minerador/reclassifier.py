#!/usr/bin/env python3
"""
reclassifier.py — Reorganiza RAWs existentes com roteamento de alta precisão.

Prioridades (ordem decrescente):
  1. Regra de heading: se o heading menciona "integração com X", vai pra integração — não pra X.
  2. Embedding semântico: cosine similarity contra vocabulários de todos os tópicos.
  3. Fuzzy como desempate final.

Seções sem match claro → _INBOX_REVISAR.md.

Uso:
    python reclassifier.py            # reorganiza todos os RAWs (commit destrutivo)
    python reclassifier.py --dry-run  # só imprime o que mudaria, não toca nos arquivos
"""

import argparse
import json
import re
from collections import defaultdict
from pathlib import Path

from rapidfuzz import fuzz
from sentence_transformers import SentenceTransformer, util
from tqdm import tqdm

# ─── Caminhos ─────────────────────────────────────────────────────────────────

RAIZ_COFRE  = Path(__file__).parent.parent / "corpus-conhecimento"
TOPICOS_JSON = Path(__file__).parent / "topicos.json"
INBOX_PATH  = RAIZ_COFRE / "_INBOX_REVISAR.md"

# ─── Thresholds ───────────────────────────────────────────────────────────────

EMBED_MIN    = 0.52   # score mínimo para aceitar um tópico via embedding
EMBED_MARGEM = 0.04   # vencedor precisa superar o 2º por pelo menos isso
FUZZY_MIN    = 78     # score mínimo para aceitar via fuzzy (tiebreaker)

# ─── Regras de heading ────────────────────────────────────────────────────────
# Ordem IMPORTA: integracao é verificado primeiro.
# "Integração com Sorter" → integracao (não sorter).

HEADING_RULES: list[tuple[str, list[str]]] = [
    ("integracao", [
        "integração", "integracao", "api de", "webservice", "mensageria",
        "edi ", " erp", "interface ", "layout de integração", "retorno de integração",
        "mapeamento de campo",
    ]),
    ("order-start", [
        "order start", "início da separação", "inicio da separacao",
        "liberação do pedido", "liberacao do pedido",
        "geração de wave", "geracao de wave", "criação de wave", "disparo da wave",
        "release de order", "fila de separação", "queue de separação",
    ]),
    ("picking-cart", [
        "picking cart", "cart picking", "pick by cart", "separação por carrinho",
        "separacao por carrinho", "rota de carrinho", "wave de carrinho",
    ]),
    ("shortpicking", [
        "short picking", "shortpicking", "short pick",
        "divergência de estoque", "divergencia de estoque",
        "falta no endereço", "falta no endereco",
        "saldo insuficiente", "ruptura no endereço",
    ]),
    ("conferencia", [
        "conferência de picking", "conferencia de picking",
        "conferência de separação", "mesa de conferência",
        "tela de conferência", "conferência por voz", "conferência por scanner",
        "conferencia de pedido",
    ]),
    ("packing", [
        "packing", "fechamento de caixa", "estação de packing",
        "embalagem do pedido", "embalar separação", "gerar volume",
    ]),
    ("sorter", [
        "sorter", "classificador automático", "classificador automatico",
        "raia de sorter", "chute de sorter", "indução de sorter",
    ]),
    ("ptl-alocacao", [
        "put to light", "alocação de separação", "alocacao de separacao",
        "estação de alocação", "colmeia", "flow rack de alocação",
    ]),
    ("etiquetas", [
        "etiqueta de expedição", "etiqueta de expedicao", "etiqueta de volume",
        "impressão de etiqueta", "geração de etiqueta", "label de expedição",
        "etiqueta de transporte",
    ]),
    ("reabastecimento", [
        "reabastecimento", "replenishment", "abastecimento de endereço",
        "reposição de estoque", "ponto de reabastecimento", "fila de reabastecimento",
    ]),
    ("inventario", [
        "inventário", "inventario", "contagem cíclica", "contagem ciclica",
        "ajuste de estoque", "inventário geral", "dupla contagem",
    ]),
    ("cubagem", [
        "cubagem", "cubar pedido", "cubar order", "cálculo de cubagem",
        "split de order", "partição de order",
    ]),
]

# PTL é ambíguo como substring ("ptl" aparece em "ptlsp" etc) — só match isolado
_PTL_STANDALONE = re.compile(r"\bptl\b")


def heading_override(heading: str) -> str | None:
    h = heading.lower()
    for slug, keywords in HEADING_RULES:
        if slug == "ptl-alocacao":
            if _PTL_STANDALONE.search(h) or any(kw in h for kw in keywords[1:]):
                return slug
        elif any(kw in h for kw in keywords):
            return slug
    return None

# ─── Vocabulário e embeddings ──────────────────────────────────────────────────

def carregar_vocabulario(path: Path) -> list[str]:
    return [
        l.strip().lower()
        for l in path.read_text(encoding="utf-8").splitlines()
        if l.strip() and not l.strip().startswith("#")
    ]

# ─── Parser de RAW ────────────────────────────────────────────────────────────

_RE_ORIGEM  = re.compile(r"\*\*Origem:\*\*\s+\[(.+?)\]\s+(.+?)\s+—\s+`(.+?)`")
_RE_HEADING = re.compile(r"\*\*Heading:\*\*\s+(.+?)(?:  \n|\n|$)")
_RE_SCORE   = re.compile(r"\*\*Score:\*\*")


def parse_raw(path: Path) -> list[dict]:
    content = path.read_text(encoding="utf-8")
    sections = []

    for block in re.split(r"\n---\n|\n---$", content):
        if "**Origem:**" not in block:
            continue

        orig_m    = _RE_ORIGEM.search(block)
        heading_m = _RE_HEADING.search(block)
        score_m   = _RE_SCORE.search(block)

        if not heading_m:
            continue

        # Texto = conteúdo após a linha Score
        texto = ""
        if score_m:
            after = block[score_m.end():]
            linhas = after.split("\n")[1:]           # pula a linha de data
            texto  = "\n".join(l for l in linhas if l.strip()).strip()

        sections.append({
            "heading":         heading_m.group(1).strip(),
            "texto":           texto,
            "raw_block":       "---\n" + block.strip(),
            "origem_proj":     orig_m.group(1).strip() if orig_m else "?",
            "origem_arquivo":  orig_m.group(3).strip() if orig_m else "?",
        })

    return sections

# ─── Roteamento ───────────────────────────────────────────────────────────────

def rotear(secao: dict, termos_dict: dict, embeddings_dict: dict, model) -> str | None:
    heading = secao["heading"]
    texto   = secao["texto"]

    # 1 — Regra de heading (prioridade máxima)
    override = heading_override(heading)
    if override and override in termos_dict:
        return override

    # 2 — Embedding semântico
    alvo = heading + " " + texto[:400]
    emb  = model.encode(alvo, convert_to_tensor=True)

    scores_e = {slug: float(util.cos_sim(emb, embs).max())
                for slug, embs in embeddings_dict.items()}
    ordenados = sorted(scores_e.items(), key=lambda x: x[1], reverse=True)
    melhor_slug, melhor_sc = ordenados[0]
    segundo_sc = ordenados[1][1] if len(ordenados) > 1 else 0.0

    if melhor_sc >= EMBED_MIN and (melhor_sc - segundo_sc) >= EMBED_MARGEM:
        return melhor_slug

    # 3 — Fuzzy tiebreaker
    alvo_lower = (heading + " " + texto[:300]).lower()
    scores_f   = {slug: max(fuzz.partial_ratio(t, alvo_lower) for t in termos)
                  for slug, termos in termos_dict.items()}
    melhor_f   = max(scores_f, key=scores_f.get)
    if scores_f[melhor_f] >= FUZZY_MIN:
        return melhor_f

    return None  # → INBOX

# ─── I/O ──────────────────────────────────────────────────────────────────────

def raw_path_para(slug: str, config: dict) -> Path:
    return RAIZ_COFRE / "blocos" / config[slug]["bloco"] / config[slug]["sub"] / f"{config[slug]['sub']}.RAW.md"


def garantir_raw(path: Path, slug: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    if not path.exists():
        path.write_text(
            f"# {path.stem} — Evidência Bruta\n\n<!-- APPEND-ONLY — gerado pelo minerador -->\n",
            encoding="utf-8"
        )


def append_inbox(secao: dict, motivo: str):
    trecho = secao["texto"][:200].replace("\n", " ")
    linha = (
        f"\n[RECLASSIFY] [{secao['origem_proj']}] `{secao['origem_arquivo']}`  \n"
        f"Heading: *{secao['heading']}* | motivo: {motivo}  \n"
        f"> {trecho}...\n"
    )
    with INBOX_PATH.open("a", encoding="utf-8") as f:
        f.write(linha)

# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    config = json.loads(TOPICOS_JSON.read_text(encoding="utf-8"))["topicos"]

    print("Carregando modelo e vocabulários...")
    model = SentenceTransformer("paraphrase-multilingual-MiniLM-L12-v2")
    termos_dict, embeddings_dict = {}, {}
    for slug in config:
        vpath = RAIZ_COFRE / "vocabulario" / f"{slug}.txt"
        if vpath.exists():
            t = carregar_vocabulario(vpath)
            if t:
                termos_dict[slug]     = t
                embeddings_dict[slug] = model.encode(t, convert_to_tensor=True)
    print(f"Tópicos carregados: {len(termos_dict)}\n")

    # Lê todas as seções de todos os RAWs
    todas: list[dict] = []
    for slug in config:
        path = raw_path_para(slug, config)
        if not path.exists():
            continue
        secoes = parse_raw(path)
        for s in secoes:
            s["slug_atual"] = slug
        todas.extend(secoes)

    print(f"Seções encontradas: {len(todas)}\n")
    if not todas:
        print("Nenhuma seção encontrada. Execute minerador.py primeiro.")
        return

    # Dedup por (heading + arquivo + início do texto) — elimina seções duplicadas de runs paralelos
    vistas: set[tuple] = set()
    unicas: list[dict] = []
    for s in todas:
        chave = (s["heading"], s["origem_arquivo"], s["texto"][:80])
        if chave not in vistas:
            vistas.add(chave)
            unicas.append(s)
    n_dup = len(todas) - len(unicas)
    if n_dup:
        print(f"Duplicatas removidas: {n_dup} (de {len(todas)} → {len(unicas)} únicas)\n")
    todas = unicas

    # Reclassifica
    destinos: dict[str, list] = defaultdict(list)
    n_mantidas = n_movidas = n_inbox = 0

    for secao in tqdm(todas, desc="Reclassificando", unit="seção"):
        novo = rotear(secao, termos_dict, embeddings_dict, model)
        atual = secao["slug_atual"]

        if novo is None:
            n_inbox += 1
            if args.dry_run:
                tqdm.write(f"  [INBOX ] {atual:20s} | {secao['heading'][:55]}")
            else:
                append_inbox(secao, "sem match claro")

        elif novo != atual:
            n_movidas += 1
            destinos[novo].append(secao)
            if args.dry_run:
                tqdm.write(f"  [MOVE  ] {atual:20s} → {novo:20s} | {secao['heading'][:45]}")

        else:
            n_mantidas += 1
            destinos[atual].append(secao)

    if not args.dry_run:
        # Reescreve todos os RAWs que tiveram seções (vindas ou saídas)
        slugs_afetados = set(destinos.keys()) | {s["slug_atual"] for s in todas}
        print("\nReescrevendo RAWs...")
        for slug in slugs_afetados:
            path = raw_path_para(slug, config)
            garantir_raw(path, slug)
            secoes_aqui = destinos.get(slug, [])
            with path.open("w", encoding="utf-8") as f:
                f.write(f"# {config[slug]['sub']}.RAW — Evidência Bruta\n\n")
                f.write("<!-- APPEND-ONLY — gerado pelo minerador -->\n")
                for s in secoes_aqui:
                    f.write(f"\n{s['raw_block']}\n")
            print(f"  {slug:20s}: {len(secoes_aqui):4d} seções")

    # Relatório
    print(f"\n{'='*45}")
    print(f"Mantidas no tópico original : {n_mantidas:4d}")
    print(f"Movidas para outro tópico   : {n_movidas:4d}")
    print(f"Para INBOX (sem match)      : {n_inbox:4d}")
    print(f"{'='*45}")
    if args.dry_run:
        print("(dry-run — nenhum arquivo foi alterado)")


if __name__ == "__main__":
    main()
