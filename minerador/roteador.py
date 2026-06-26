#!/usr/bin/env python3
"""
roteador.py — Etapas C/D: roteamento local (rápido, sobre o jsonl).

Lê corpus-full.jsonl e roteia cada seção com os critérios auditados:
  1. JSON no corpo            → integracao (regra dura)
  2. Sinal forte integração   → integracao
  3. Estrutural / proposta    → INBOX
  4. Semântico (embed+fuzzy)  → tópico
  5. Sem match                → INBOX

Escreve RAWs do zero + INBOX LOSSLESS (texto integral + id) em _inbox.jsonl.
Roda em segundos — sem tocar a rede.

Uso:
    python roteador.py            # relatório (não escreve)
    python roteador.py --apply    # reescreve RAWs + _inbox.jsonl
"""

import argparse
import json
from collections import defaultdict
from pathlib import Path

from tqdm import tqdm

import reclassifier as rc
import auditor as au

JSONL       = rc.RAIZ_COFRE / "corpus-full.jsonl"
INBOX_JSONL = rc.RAIZ_COFRE / "_inbox.jsonl"
INBOX_MD    = rc.RAIZ_COFRE / "_INBOX_REVISAR.md"


def escrever_raw(path: Path, slug: str, registros: list, config: dict):
    rc.garantir_raw(path, slug)
    with path.open("w", encoding="utf-8") as f:
        f.write(f"# {config[slug]['sub']}.RAW — Evidência Bruta\n\n")
        f.write("<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->\n")
        for s, motivo in registros:
            f.write(
                f"\n---\n"
                f"**Origem:** [{s['projeto']}] {s['ano']} — `{s['arquivo']}`  \n"
                f"**Heading:** {s['heading']}  \n"
                f"**Score:** — ({motivo}) | **ID:** {s['id']}\n\n"
                f"{s['texto']}\n"
            )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()

    config = json.loads(rc.TOPICOS_JSON.read_text(encoding="utf-8"))["topicos"]
    secoes = [json.loads(l) for l in JSONL.read_text(encoding="utf-8").splitlines() if l.strip()]
    print(f"Seções no store: {len(secoes)}\n")

    model, termos_dict, embeddings_dict = au.carregar(config)

    destinos = defaultdict(list)
    inbox = []
    n_drop = 0
    motivos = defaultdict(int)

    for s in tqdm(secoes, desc="Roteando", unit="seç"):
        slug, motivo = au.decidir(s, termos_dict, embeddings_dict, model)
        motivos[motivo] += 1
        if motivo == "boilerplate":      # DROP — apagar, sem rastro
            n_drop += 1
            continue
        if slug:
            destinos[slug].append((s, motivo))
        else:
            inbox.append((s, motivo))

    print("\n--- Decisões por critério ---")
    for m, n in sorted(motivos.items(), key=lambda x: -x[1]):
        print(f"  {m:25s}: {n:5d}")

    print(f"\n  BOILERPLATE descartado (apagado): {n_drop}")

    print("\n--- Distribuição por tópico ---")
    for slug in config:
        print(f"  {slug:24s}: {len(destinos.get(slug, [])):5d}")
    print(f"  {'INBOX':24s}: {len(inbox):5d}")

    if not args.apply:
        print("\n(relatório — nada escrito. Rode --apply para gravar.)")
        return

    print("\nReescrevendo RAWs...")
    for slug in config:
        escrever_raw(rc.raw_path_para(slug, config), slug, destinos.get(slug, []), config)

    # INBOX lossless (jsonl) + visão humana (md)
    with INBOX_JSONL.open("w", encoding="utf-8") as f:
        for s, motivo in inbox:
            f.write(json.dumps({**s, "motivo_inbox": motivo}, ensure_ascii=False) + "\n")
    with INBOX_MD.open("w", encoding="utf-8") as f:
        f.write("# _INBOX_REVISAR.md — Quarentena (lossless via _inbox.jsonl)\n\n")
        f.write(f"> {len(inbox)} seções sem tópico confiável. Texto integral em _inbox.jsonl.\n\n")
        for s, motivo in inbox:
            trecho = s["texto"][:220].replace("\n", " ")
            f.write(f"\n[{motivo}] [{s['projeto']}] `{s['arquivo']}` | id:{s['id']}  \n")
            f.write(f"Heading: *{s['heading']}*  \n> {trecho}...\n")

    print(f"  RAWs reescritos | INBOX: {len(inbox)} (lossless em _inbox.jsonl)")


if __name__ == "__main__":
    main()
