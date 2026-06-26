#!/usr/bin/env python3
"""
descobridor.py — Etapa B: descoberta de tópicos órfãos.

Lê corpus-full.jsonl, clusteriza TODAS as seções por similaridade semântica
(community detection) e mostra, por cluster: tamanho, tópico-dominante atual
(via roteamento) e headings de amostra. Clusters grandes cujo destino é INBOX
ou que não casam bem com nenhum tópico = candidatos a tópico NOVO.

Uso:
    python descobridor.py                 # relatório de clusters
    python descobridor.py --min 8 --thr 0.55
"""

import argparse
import json
from collections import Counter, defaultdict
from pathlib import Path

from sentence_transformers import SentenceTransformer, util

import reclassifier as rc
import auditor as au

JSONL = rc.RAIZ_COFRE / "corpus-full.jsonl"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--min", type=int, default=8, help="tamanho mínimo de cluster")
    ap.add_argument("--thr", type=float, default=0.55, help="threshold de similaridade")
    args = ap.parse_args()

    config = json.loads(rc.TOPICOS_JSON.read_text(encoding="utf-8"))["topicos"]

    secoes = [json.loads(l) for l in JSONL.read_text(encoding="utf-8").splitlines() if l.strip()]
    print(f"Seções no store: {len(secoes)}\n")

    print("Carregando modelo + vocabulários...")
    model, termos_dict, embeddings_dict = au.carregar(config)

    print("Embeddando seções (heading + trecho)...")
    alvos = [s["heading"] + " " + s["texto"][:300] for s in secoes]
    embs = model.encode(alvos, convert_to_tensor=True, show_progress_bar=True,
                        batch_size=64)

    print(f"\nClusterizando (min={args.min}, thr={args.thr})...")
    clusters = util.community_detection(embs, threshold=args.thr,
                                        min_community_size=args.min)
    print(f"Clusters encontrados: {len(clusters)}\n")

    # Para cada cluster: tópico dominante via roteamento + headings
    relatorio = []
    cobertas = set()
    for ci, idxs in enumerate(clusters):
        cobertas.update(idxs)
        destinos = Counter()
        headings = Counter()
        for i in idxs:
            slug = rc.rotear(secoes[i], termos_dict, embeddings_dict, model)
            destinos[slug or "INBOX"] += 1
            headings[secoes[i]["heading"][:45]] += 1
        dom_topico, dom_n = destinos.most_common(1)[0]
        pureza = dom_n / len(idxs)
        relatorio.append({
            "cluster": ci, "tam": len(idxs),
            "dominante": dom_topico, "pureza": pureza,
            "destinos": dict(destinos.most_common(4)),
            "headings": [h for h, _ in headings.most_common(6)],
        })

    # Ordena: órfãos (dominante=INBOX) e baixa-pureza primeiro
    relatorio.sort(key=lambda r: (r["dominante"] != "INBOX", r["pureza"], -r["tam"]))

    print("="*70)
    print("CLUSTERS — candidatos a tópico novo no topo (dominante=INBOX / baixa pureza)")
    print("="*70)
    for r in relatorio:
        flag = "🆕 ÓRFÃO" if r["dominante"] == "INBOX" else ("⚠ MISTO" if r["pureza"] < 0.6 else "ok")
        print(f"\n[c{r['cluster']:02d}] tam={r['tam']:4d} | dom={r['dominante']:15s} "
              f"pureza={r['pureza']:.0%} | {flag}")
        print(f"      destinos: {r['destinos']}")
        for h in r["headings"]:
            print(f"        · {h}")

    fora = len(secoes) - len(cobertas)
    print(f"\n{'='*70}")
    print(f"Seções fora de qualquer cluster (singletons/raras): {fora}")
    print(f"{'='*70}")


if __name__ == "__main__":
    main()
