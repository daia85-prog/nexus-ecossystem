#!/usr/bin/env python3
"""
extrator.py — Etapa A: extração ÚNICA dos .docx para um store local.

Separa EXTRAÇÃO (lenta, rede, 1×) de ROTEAMENTO (rápido, local, N×).
Lê todos os docx, colapsa revisões (mantém só a mais recente por doc-base),
e grava CADA seção com TEXTO INTEGRAL em corpus-full.jsonl.

Depois disso, roteador/auditor rodam em cima do jsonl em segundos.

Uso:
    python extrator.py --dry-run   # só relatório do colapso de revisões (sem parsear docx)
    python extrator.py             # extrai tudo → corpus-full.jsonl
"""

import argparse
import hashlib
import json
import re
from collections import defaultdict
from pathlib import Path

from tqdm import tqdm

from minerador import (
    descobrir_docx, extrair_secoes, RAIZ_SHAREPOINT, RAIZ_REDE,
)

RAIZ_COFRE = Path(__file__).parent.parent / "corpus-conhecimento"
JSONL_PATH = RAIZ_COFRE / "corpus-full.jsonl"

# ─── Colapso de revisões ────────────────────────────────────────────────────────

_REV_PATTERNS = [
    r"[-–_\s]*\brev[\.\s]*\d+(?:[._]\d+)?\b",   # Rev.1, REV 1.3, rev_2
    r"[-–_\s]*\bvers[ãa]o[\.\s]*\d+\b",
    r"\s*\(\d+\)",                               # (1)
    r"[-–_\s]*\bc[óo]pia\b",                     # copia
    r"[-–_\s]*[-–]\s*b\b",                       # sufixo " - B"
    r"[-–_\s]*\bfinal\b",
]

def _normalizar_base(nome: str) -> str:
    s = re.sub(r"\.docx$", "", nome, flags=re.I).lower()
    for p in _REV_PATTERNS:
        s = re.sub(p, " ", s, flags=re.I)
    s = re.sub(r"[^a-z0-9]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()

def _rev_num(nome: str) -> float:
    revs = re.findall(r"\brev[\.\s]*(\d+(?:[._]\d+)?)", nome, re.I)
    vals = []
    for r in revs:
        try:
            vals.append(float(r.replace("_", ".")))
        except ValueError:
            pass
    return max(vals) if vals else 0.0

def colapsar_revisoes(arquivos: list[dict]) -> tuple[list[dict], list[dict]]:
    """Mantém só a revisão mais recente por (projeto, doc-base). Descarta _Old."""
    grupos: dict[tuple, list[dict]] = defaultdict(list)
    descartados = []

    for a in arquivos:
        nome = a["caminho"].name
        if re.search(r"_old\b|\(old\)", nome, re.I):
            descartados.append({**a, "motivo": "marcado _Old"})
            continue
        base = _normalizar_base(nome)
        chave = (a["projeto"], base)
        a["_rev"] = _rev_num(nome)
        try:
            a["_mtime"] = a["caminho"].stat().st_mtime
        except OSError:
            a["_mtime"] = 0.0
        grupos[chave].append(a)

    mantidos = []
    for chave, membros in grupos.items():
        # vencedor: maior (rev, mtime)
        membros.sort(key=lambda x: (x["_rev"], x["_mtime"]), reverse=True)
        mantidos.append(membros[0])
        for m in membros[1:]:
            descartados.append({**m, "motivo": f"revisão antiga de '{chave[1][:40]}'"})

    return mantidos, descartados

# ─── ID estável de seção ────────────────────────────────────────────────────────

def _section_id(arquivo: str, heading: str, texto: str) -> str:
    base = f"{arquivo}||{heading}||{texto[:120]}"
    return hashlib.md5(base.encode("utf-8")).hexdigest()[:16]

# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="só relatório do colapso")
    args = ap.parse_args()

    print("Descobrindo docx (SharePoint local + Rede)...")
    arquivos = descobrir_docx(RAIZ_SHAREPOINT, RAIZ_REDE)
    por_fonte = defaultdict(int)
    for a in arquivos:
        por_fonte[a["fonte"]] += 1
    print(f"  Total bruto: {len(arquivos)}  ({dict(por_fonte)})\n")

    print("Colapsando revisões...")
    mantidos, descartados = colapsar_revisoes(arquivos)
    print(f"  Mantidos : {len(mantidos)}")
    print(f"  Descartados: {len(descartados)} (revisões antigas / _Old)\n")

    if args.dry_run:
        print("--- Amostra de descartes (primeiros 30) ---")
        for d in descartados[:30]:
            print(f"  [{d['motivo'][:35]:35s}] {d['caminho'].name}")
        print(f"\n(dry-run — nada extraído. {len(mantidos)} docs seriam parseados.)")
        return

    print(f"Extraindo seções de {len(mantidos)} docs → {JSONL_PATH.name}\n")
    n_sec = 0
    n_err = 0
    vistos_id = set()
    with JSONL_PATH.open("w", encoding="utf-8") as out:
        for arq in tqdm(mantidos, desc="Extraindo", unit="doc"):
            try:
                secoes = extrair_secoes(arq["caminho"])
            except Exception as e:
                tqdm.write(f"[WARN] {arq['caminho'].name}: {e}")
                n_err += 1
                continue
            for s in secoes:
                texto = s["texto"].strip()
                if not texto:
                    continue
                sid = _section_id(arq["caminho"].name, s["heading"], texto)
                if sid in vistos_id:        # dedup global de seções idênticas
                    continue
                vistos_id.add(sid)
                rec = {
                    "id": sid,
                    "projeto": arq["projeto"],
                    "ano": arq["ano"],
                    "arquivo": arq["caminho"].name,
                    "fonte": arq["fonte"],
                    "heading": s["heading"],
                    "texto": texto,
                }
                out.write(json.dumps(rec, ensure_ascii=False) + "\n")
                n_sec += 1

    print(f"\nExtração completa.")
    print(f"  Seções gravadas: {n_sec}")
    print(f"  Erros de leitura: {n_err}")
    print(f"  Store: {JSONL_PATH}")


if __name__ == "__main__":
    main()
