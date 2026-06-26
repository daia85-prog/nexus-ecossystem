#!/usr/bin/env python3
"""
extrator.py — Etapa A (v2): extração ÚNICA dos documentos-fonte → corpus-full.jsonl.

NOVO MODELO (decisões Raphael, jun/2026):
  • FONTE: APENAS SharePoint, APENAS anos 2025 e 2026. SEM rede, SEM aditivos.
  • REVISÃO: por (projeto, módulo), pega SÓ a revisão mais recente.
      - Existe PDF numerado → vence (regra Raphael: "sempre o PDF numerado").
      - Empate de número entre docx/pdf → prefere docx (extração melhor).
      - Nenhum numerado → usa o não-numerado mais novo (prefere docx).
  • FORMATOS: .docx (estilos de heading) E .pdf (heading por fonte+numeração).
  • PRIORIDADE: projetos do Top 10 são marcados (prioridade=True) — viram a
      "verdade" na síntese; os demais 2025/2026 complementam.

Uso:
    python extrator.py --dry-run   # relatório de seleção de fontes (não extrai)
    python extrator.py             # extrai tudo → corpus-full.jsonl
"""

import argparse
import hashlib
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

import docx
from tqdm import tqdm

# ─── Caminhos ─────────────────────────────────────────────────────────────────

RAIZ_SHAREPOINT = Path(
    r"C:\Users\Raphael.Caveagna\OneDrive - INVENT"
    r"\Documentação _ Software - DOCUMENTAÇÃO - PASTA"
    r"\01 - WCS - DEVOPS (DOCUMENTAÇÃO)"
)

RAIZ_COFRE = Path(__file__).parent.parent / "corpus-conhecimento"
JSONL_PATH = RAIZ_COFRE / "corpus-full.jsonl"

# ─── Filtros ────────────────────────────────────────────────────────────────────

ANOS_ALVO   = {"2025", "2026"}
ANO_DIR_RE  = re.compile(r"especifica[çc][ãa]o funcional\s*-\s*(\d{4})", re.I)

# Top 10 — código do projeto → nome canônico (prioridade = verdade na síntese)
TOP10 = {
    "I24.215":  "BP",
    "I25.9043": "BELEZA",
    "I22.120":  "BRF Salvador",
    "I25.4066": "NavePark",
    "I24.203":  "Beta",
    "I25.8049": "TITANO",
    "I25.3513": "CDSK",
    "I23.3503": "ELETRO",
    "I25.163":  "Market Chile",
    "I25.115":  "Market Peru",
}

# Arquivos a IGNORAR (não são a ES principal): aditivos, cópias, testes, rascunhos.
SKIP_RE = re.compile(
    r"\(old\)|\bold\b|desformatado|teste|c[óo]pia|copia|aditivo|"
    r"pend[êe]ncias|d[úu]vidas|ajuste|controle|base alocac|rascunho|backup",
    re.I,
)

# Só consideramos arquivos de Especificação (ES).
ES_RE = re.compile(r"especifica", re.I)

# ─── Seleção de revisão ──────────────────────────────────────────────────────────

def codigo_projeto(nome_pasta: str) -> str:
    m = re.match(r"^(I\d{2}[._]\d+)", nome_pasta)
    if m:
        return m.group(1).replace("_", ".")
    return nome_pasta.split(" - ")[0].strip()


def cliente_de_pasta(nome_pasta: str) -> str:
    partes = nome_pasta.split(" - ", 1)
    return partes[1].strip() if len(partes) > 1 else nome_pasta


def rev_num(nome: str) -> int:
    """Maior número de revisão no nome (Rev.14, REV .5, Rev12, Rev 8, REV1)."""
    m = re.findall(r"rev[\.\s_]*?(\d+)", nome, re.I)
    return max((int(x) for x in m), default=-1)


_NOISE_BASE = [
    r"\bespecifica[çc][aã]o\b", r"\bespecificac[ao]+\b",
    r"\bespecification\b", r"\bespecificacion\b",
    r"\bde\b", r"\bdel\b", r"\bsoftware\b", r"\be\b", r"\bhardware\b",
    r"\bprojeto\b", r"\bproj\b", r"\bproyecto\b", r"\bdo\b", r"\bda\b",
    r"\brev\.?\s*\d+", r"\brev\b", r"\batt\b", r"\brevisad[oa]\b",
]
_NOISE_RE = [re.compile(p, re.I) for p in _NOISE_BASE]


def modulo_qualificador(nome_arquivo: str, codigo: str, cliente: str) -> str:
    """Extrai o 'módulo' do documento (fase1/fase2/estoque/etc); '' = ES principal."""
    s = re.sub(r"\.(docx|pdf)$", "", nome_arquivo, flags=re.I).lower()
    # separadores → espaço PRIMEIRO (para os \b funcionarem)
    s = re.sub(r"[._\-/]+", " ", s)
    s = re.sub(r"\(\d+\)", " ", s)
    # remove código do projeto (i24 215 / i24215) e tokens do cliente
    s = re.sub(r"\bi\d{2}\s*\d+\b", " ", s)
    for tok in re.split(r"[\s\-_]+", cliente.lower()):
        if len(tok) >= 2:
            s = re.sub(rf"\b{re.escape(tok)}\b", " ", s)
    for rgx in _NOISE_RE:
        s = rgx.sub(" ", s)
    # normaliza "fase 1"/"fase1" → "fase1" ANTES de remover dígitos soltos
    s = re.sub(r"\bfase\s*(\d)", r"fase\1", s)
    # remove ordinais/dígitos soltos (ex: "2-" no início) e tokens de 1 letra
    s = re.sub(r"\b\d{1,3}\b", " ", s)
    s = re.sub(r"\b[a-z]\b", " ", s)
    s = re.sub(r"[^a-z0-9]+", " ", s).strip()
    s = re.sub(r"\s+", " ", s)
    return s


def selecionar_fontes() -> list[dict]:
    """Varre 2025/2026 e devolve a lista de arquivos-fonte selecionados (1 por módulo)."""
    selecionados = []
    if not RAIZ_SHAREPOINT.exists():
        print(f"[ERRO] SharePoint não encontrado: {RAIZ_SHAREPOINT}", file=sys.stderr)
        return selecionados

    for pasta_ano in sorted(RAIZ_SHAREPOINT.iterdir()):
        if not pasta_ano.is_dir():
            continue
        m = ANO_DIR_RE.search(pasta_ano.name)
        if not m or m.group(1) not in ANOS_ALVO:
            continue
        ano = m.group(1)

        for pasta_proj in sorted(pasta_ano.iterdir()):
            if not pasta_proj.is_dir():
                continue
            codigo  = codigo_projeto(pasta_proj.name)
            cliente = cliente_de_pasta(pasta_proj.name)
            prioridade = codigo in TOP10
            nome_canon = TOP10.get(codigo, cliente)

            # coleta candidatos ES (docx/pdf), pulando o que não é a ES principal
            candidatos = []
            for f in pasta_proj.iterdir():
                if not f.is_file():
                    continue
                if f.suffix.lower() not in (".docx", ".pdf"):
                    continue
                if SKIP_RE.search(f.name) or not ES_RE.search(f.name):
                    continue
                if f.name.startswith("~$"):           # lock temp do Word
                    continue
                candidatos.append(f)

            if not candidatos:
                continue

            # agrupa por módulo
            grupos: dict[str, list[Path]] = defaultdict(list)
            for f in candidatos:
                grupos[modulo_qualificador(f.name, codigo, cliente)].append(f)

            for modulo, membros in grupos.items():
                # vencedor: maior rev; empate → docx; tudo -1 → mais novo (docx>pdf)
                def chave(f: Path):
                    rv = rev_num(f.name)
                    is_docx = 1 if f.suffix.lower() == ".docx" else 0
                    try:
                        mt = f.stat().st_mtime
                    except OSError:
                        mt = 0.0
                    return (rv, is_docx, mt)

                membros.sort(key=chave, reverse=True)
                venc = membros[0]
                selecionados.append({
                    "caminho":    venc,
                    "projeto":    codigo,
                    "cliente":    nome_canon,
                    "ano":        ano,
                    "modulo":     modulo or "(principal)",
                    "rev":        rev_num(venc.name),
                    "formato":    venc.suffix.lower().lstrip("."),
                    "prioridade": prioridade,
                })
    return selecionados


# ─── Extração de seções: DOCX ────────────────────────────────────────────────────

_HEADING_PREFIXES = ("heading", "título", "titulo")

def _eh_heading_docx(p) -> bool:
    return any(p.style.name.lower().startswith(pref) for pref in _HEADING_PREFIXES)


def _iter_blocos_docx(doc):
    """Itera parágrafos E tabelas na ordem do documento (paragraphs ignora tabelas)."""
    from docx.document import Document as _Doc
    from docx.oxml.table import CT_Tbl
    from docx.oxml.text.paragraph import CT_P
    from docx.table import Table
    from docx.text.paragraph import Paragraph
    body = doc.element.body
    for child in body.iterchildren():
        if isinstance(child, CT_P):
            yield ("p", Paragraph(child, doc))
        elif isinstance(child, CT_Tbl):
            yield ("tbl", Table(child, doc))


def _tabela_para_texto(tbl) -> str:
    """Serializa uma tabela como linhas 'cel | cel | cel' (preserva mapeamentos/RNs)."""
    linhas = []
    for row in tbl.rows:
        cels = [c.text.strip().replace("\n", " ") for c in row.cells]
        if any(cels):
            linhas.append(" | ".join(cels))
    return "\n".join(linhas)


def extrair_secoes_docx(caminho: Path) -> list[dict]:
    doc = docx.Document(str(caminho))
    secoes, heading_atual, buf = [], "[SEM TÍTULO]", []
    for tipo, bloco in _iter_blocos_docx(doc):
        if tipo == "p":
            t = bloco.text.strip()
            if not t:
                continue
            if _eh_heading_docx(bloco):
                if buf:
                    secoes.append({"heading": heading_atual, "texto": "\n".join(buf)})
                heading_atual, buf = t, []
            else:
                buf.append(t)
        else:  # tabela → anexa ao corpo da seção corrente
            tab = _tabela_para_texto(bloco)
            if tab:
                buf.append(tab)
    if buf:
        secoes.append({"heading": heading_atual, "texto": "\n".join(buf)})
    return secoes


# ─── Extração de seções: PDF (heading por fonte + numeração) ──────────────────────

_NUM_HEAD = re.compile(r"^\d{1,2}(\.\d{1,3}){0,4}\.?\s+\S")   # 1.  3.2.  3.2.1. TÍTULO
_BARE_NUM = re.compile(r"^\d{1,4}$")


def extrair_secoes_pdf(caminho: Path) -> list[dict]:
    import fitz  # PyMuPDF (import tardio: só quando há PDF)

    doc = fitz.open(str(caminho))
    szc = Counter()
    linhas = []  # (pno, size, bold, text)
    for pno, page in enumerate(doc):
        d = page.get_text("dict")
        for blk in d.get("blocks", []):
            for line in blk.get("lines", []):
                spans = line.get("spans", [])
                txt = "".join(s["text"] for s in spans).strip()
                if not txt:
                    continue
                sz = round(max((s["size"] for s in spans), default=0), 1)
                f0 = spans[0]
                bold = bool(f0["flags"] & 16) or "bold" in f0.get("font", "").lower()
                szc[sz] += 1
                linhas.append((pno, sz, bold, txt))
    doc.close()

    if not linhas:
        return []
    body = szc.most_common(1)[0][0]
    n_pages = linhas[-1][0] + 1

    norm = lambda t: re.sub(r"\s+", " ", t.lower()).strip()
    pg = {}
    for pno, _, _, txt in linhas:
        pg.setdefault(norm(txt), set()).add(pno)
    repetidas = {k for k, ps in pg.items() if len(ps) > max(2, n_pages * 0.25)}

    def eh_heading(sz, bold, txt):
        if len(txt) > 130:
            return False
        if _NUM_HEAD.match(txt) and sz >= body + 0.5:
            return True
        if bold and sz >= body + 1.5 and len(txt) < 90:
            return True
        return False

    secoes, heading_atual, buf = [], "[INÍCIO]", []
    for pno, sz, bold, txt in linhas:
        n = norm(txt)
        if n in repetidas or _BARE_NUM.match(txt):
            continue
        if eh_heading(sz, bold, txt):
            if buf:
                secoes.append({"heading": heading_atual, "texto": "\n".join(buf)})
            heading_atual, buf = txt, []
        else:
            buf.append(txt)
    if buf:
        secoes.append({"heading": heading_atual, "texto": "\n".join(buf)})

    # descarta entradas de Sumário (heading seguido só de nº de página → corpo ínfimo)
    return [s for s in secoes if len(s["texto"].strip()) >= 30]


def extrair_secoes(fonte: dict) -> list[dict]:
    if fonte["formato"] == "pdf":
        return extrair_secoes_pdf(fonte["caminho"])
    return extrair_secoes_docx(fonte["caminho"])


# ─── ID estável de seção ──────────────────────────────────────────────────────────

def _section_id(arquivo: str, heading: str, texto: str) -> str:
    base = f"{arquivo}||{heading}||{texto[:120]}"
    return hashlib.md5(base.encode("utf-8")).hexdigest()[:16]


# ─── Main ────────────────────────────────────────────────────────────────────────

def main():
    if sys.platform == "win32":
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")

    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="só relatório de seleção")
    args = ap.parse_args()

    print(f"Varrendo SharePoint (anos {sorted(ANOS_ALVO)})...")
    fontes = selecionar_fontes()

    top = [f for f in fontes if f["prioridade"]]
    out = [f for f in fontes if not f["prioridade"]]
    print(f"  Fontes selecionadas: {len(fontes)}  ({len(top)} Top10 + {len(out)} complementares)\n")

    print("=== TOP 10 (verdade) ===")
    for f in sorted(top, key=lambda x: x["cliente"]):
        rev = f"Rev{f['rev']}" if f["rev"] >= 0 else "s/nº"
        print(f"  [{f['cliente']:14s}] {f['modulo']:14s} {rev:6s} .{f['formato']:4s} ← {f['caminho'].name}")

    print("\n=== COMPLEMENTARES (2025/2026) ===")
    for f in sorted(out, key=lambda x: x["cliente"]):
        rev = f"Rev{f['rev']}" if f["rev"] >= 0 else "s/nº"
        print(f"  [{f['cliente']:18s}] {f['modulo']:12s} {rev:6s} .{f['formato']:4s}")

    if args.dry_run:
        print(f"\n(dry-run — nada extraído. {len(fontes)} arquivos seriam parseados.)")
        return

    print(f"\nExtraindo seções de {len(fontes)} arquivos → {JSONL_PATH.name}\n")
    n_sec = n_err = 0
    vistos = set()
    with JSONL_PATH.open("w", encoding="utf-8") as outf:
        for fonte in tqdm(fontes, desc="Extraindo", unit="doc"):
            try:
                secoes = extrair_secoes(fonte)
            except Exception as e:
                tqdm.write(f"[WARN] {fonte['caminho'].name}: {e}")
                n_err += 1
                continue
            for s in secoes:
                texto = s["texto"].strip()
                if not texto:
                    continue
                sid = _section_id(fonte["caminho"].name, s["heading"], texto)
                if sid in vistos:
                    continue
                vistos.add(sid)
                outf.write(json.dumps({
                    "id":         sid,
                    "projeto":    fonte["projeto"],
                    "cliente":    fonte["cliente"],
                    "ano":        fonte["ano"],
                    "modulo":     fonte["modulo"],
                    "arquivo":    fonte["caminho"].name,
                    "formato":    fonte["formato"],
                    "prioridade": fonte["prioridade"],
                    "heading":    s["heading"],
                    "texto":      texto,
                }, ensure_ascii=False) + "\n")
                n_sec += 1

    print(f"\nExtração completa.")
    print(f"  Seções gravadas : {n_sec}")
    print(f"  Erros de leitura: {n_err}")
    print(f"  Store           : {JSONL_PATH}")


if __name__ == "__main__":
    main()
