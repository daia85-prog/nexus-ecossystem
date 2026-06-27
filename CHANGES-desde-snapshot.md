# Mudancas desde snapshot de 16/06/2026

> Ultimo sync: 27/06/2026 13:43
> Fork: [daia85-prog/nexus-ecossystem](https://github.com/daia85-prog/nexus-ecossystem)
> Original: [RaphaelCerri/nexus-ecossystem](https://github.com/RaphaelCerri/nexus-ecossystem)

---

## Commits do Raphael desde o snapshot

```
ed0d885 ED agora faz integrações e teve a ordenação corrigida
378c246 ED 3.0 Cards novos e estrutura nova
b751116 obisidian
dac19d4 obisidian
bd02004 obisidian
fc648a4 obisidian
6aced2d backup
d736c33 Fase 1 - Dossiês
cdcdd7e scraped and organized
6595e70 Mineracao Scrap 1+2 + Automacao Apontamento de Horas
d2afa40 alterações
b8c1bf4 alterações no ED
```

---

## Arquivos modificados desde o snapshot

```
 .gitignore                                         |     6 +
 .netlify/netlify.toml                              |    45 +
 .netlify/state.json                                |     3 +
 .obsidian/graph.json                               |    65 +-
 .obsidian/workspace.json                           |    83 +-
 BACKLOG.md                                         |    65 +-
 NEXUS_FEATURES.md                                  |    19 +-
 README.md                                          |    38 +-
 ROADMAP_MINERACAO.md                               |   122 +
 _VALIDACAO_HEADINGS.txt                            |  2432 +++++
 cadastros-acessos.md                               |     0
 corpus-conhecimento/.obsidian/app.json             |     1 +
 corpus-conhecimento/.obsidian/appearance.json      |     1 +
 corpus-conhecimento/.obsidian/core-plugins.json    |    33 +
 corpus-conhecimento/.obsidian/graph.json           |    35 +
 corpus-conhecimento/.obsidian/workspace.json       |   190 +
 corpus-conhecimento/MOC-Conferencia.md             |    28 +
 corpus-conhecimento/MOC-Entrada.md                 |    26 +
 corpus-conhecimento/MOC-Estoque.md                 |    25 +
 corpus-conhecimento/MOC-Expedicao.md               |    31 +
 corpus-conhecimento/MOC-Integracao.md              |    28 +
 corpus-conhecimento/MOC-Separacao.md               |    30 +
 corpus-conhecimento/_AUDITORIA.md                  |    96 +
 corpus-conhecimento/_ED/_GUIA_ED.md                |    79 +
 corpus-conhecimento/_ED/_ROUTER.json               |   209 +
 corpus-conhecimento/_INBOX_REVISAR.md              |   432 +
 corpus-conhecimento/_REVISAO_TOPICOS.md            |   105 +
 corpus-conhecimento/_ROUTING.md                    |    32 +
 corpus-conhecimento/_inbox.jsonl                   |   107 +
 .../carregamento/checklist-carregamento/DOSSIE.md  |    62 +
 .../carregamento/checklist-carregamento/ED_CARD.md |    91 +
 .../checklist-carregamento.RAW.md                  |    12 +
 .../insights/checklist-carregamento.INSIGHTS.md    |    29 +
 corpus-conhecimento/blocos/conferencia/.gitkeep    |     0
 .../conferencia/conferencia-manual/DOSSIE.md       |   126 +
 .../conferencia/conferencia-manual/ED_CARD.md      |    74 +
 .../conferencia-manual/conferencia-manual.RAW.md   |   115 +
 .../conferencia-manual/conferencia-manual.md       |    33 +
 .../insights/conferencia-manual.INSIGHTS.md        |    64 +
 .../blocos/conferencia/conferencia/DOSSIE.md       |    94 +
 .../blocos/conferencia/conferencia/ED_CARD.md      |    59 +
 .../conferencia/conferencia/conferencia.RAW.md     |   584 ++
 .../blocos/conferencia/conferencia/conferencia.md  |    32 +
 .../conferencia/insights/conferencia.INSIGHTS.md   |    44 +
 .../blocos/conferencia/cross-check/DOSSIE.md       |    73 +
 .../blocos/conferencia/cross-check/ED_CARD.md      |    67 +
 .../conferencia/cross-check/cross-check.RAW.md     |    28 +
 .../blocos/conferencia/cross-check/cross-check.md  |    33 +
 .../cross-check/insights/cross-check.INSIGHTS.md   |    37 +
 .../conferencia/packing-termolabil/DOSSIE.md       |    71 +
 .../conferencia/packing-termolabil/ED_CARD.md      |    62 +
 .../insights/packing-termolabil.INSIGHTS.md        |    38 +
 .../packing-termolabil/packing-termolabil.RAW.md   |   102 +
 .../packing-termolabil/packing-termolabil.md       |    32 +
 .../blocos/conferencia/packing/DOSSIE.md           |    86 +
 .../blocos/conferencia/packing/ED_CARD.md          |    84 +
 .../packing/insights/packing.INSIGHTS.md           |    45 +
 .../blocos/conferencia/packing/packing.RAW.md      |   241 +
 .../blocos/conferencia/packing/packing.md          |    32 +
 corpus-conhecimento/blocos/entrada/.gitkeep        |     0
 .../blocos/entrada/cubagem/DOSSIE.md               |    90 +
 .../blocos/entrada/cubagem/ED_CARD.md              |    55 +
 .../blocos/entrada/cubagem/cubagem.RAW.md          |   461 +
 .../blocos/entrada/cubagem/cubagem.md              |    33 +
 .../entrada/cubagem/insights/cubagem.INSIGHTS.md   |    43 +
 .../blocos/entrada/order-start/DOSSIE.md           |    88 +
 .../blocos/entrada/order-start/ED_CARD.md          |    64 +
 .../order-start/insights/order-start.INSIGHTS.md   |    42 +
 .../blocos/entrada/order-start/order-start.RAW.md  |  1169 +++
 .../blocos/entrada/order-start/order-start.md      |    33 +
 .../entrada/recebimento-armazenagem/DOSSIE.md      |    89 +
 .../entrada/recebimento-armazenagem/ED_CARD.md     |    62 +
 .../insights/recebimento-armazenagem.INSIGHTS.md   |    45 +
 .../recebimento-armazenagem.RAW.md                 |  1103 ++
 .../recebimento-armazenagem.md                     |    34 +
 corpus-conhecimento/blocos/estoque/.gitkeep        |     0
 .../blocos/estoque/inventario/DOSSIE.md            |   101 +
 .../blocos/estoque/inventario/ED_CARD.md           |   109 +
 .../inventario/insights/inventario.INSIGHTS.md     |    40 +
 .../blocos/estoque/inventario/inventario.RAW.md    |   344 +
 .../blocos/estoque/inventario/inventario.md        |    33 +
 .../blocos/estoque/reabastecimento/DOSSIE.md       |    89 +
 .../blocos/estoque/reabastecimento/ED_CARD.md      |    83 +
 .../insights/reabastecimento.INSIGHTS.md           |    43 +
 .../estoque/reabastecimento/reabastecimento.RAW.md |  1110 ++
 .../estoque/reabastecimento/reabastecimento.md     |    32 +
 corpus-conhecimento/blocos/expedicao/.gitkeep      |     0
 .../blocos/expedicao/etiquetas/DOSSIE.md           |    81 +
 .../blocos/expedicao/etiquetas/ED_CARD.md          |    87 +
 .../blocos/expedicao/etiquetas/etiquetas.RAW.md    |   499 +
 .../blocos/expedicao/etiquetas/etiquetas.md        |    33 +
 .../etiquetas/insights/etiquetas.INSIGHTS.md       |    42 +
 .../blocos/expedicao/paletizacao/DOSSIE.md         |    86 +
 .../blocos/expedicao/paletizacao/ED_CARD.md        |    82 +
 .../paletizacao/insights/paletizacao.INSIGHTS.md   |    44 +
 .../expedicao/paletizacao/paletizacao.RAW.md       |   657 ++
 .../blocos/expedicao/paletizacao/paletizacao.md    |    33 +
 .../blocos/expedicao/ptl-alocacao/DOSSIE.md        |    78 +
 .../blocos/expedicao/ptl-alocacao/ED_CARD.md       |    74 +
 .../ptl-alocacao/insights/ptl-alocacao.INSIGHTS.md |    44 +
 .../expedicao/ptl-alocacao/ptl-alocacao.RAW.md     |   839 ++
 .../blocos/expedicao/ptl-alocacao/ptl-alocacao.md  |    33 +
 corpus-conhecimento/blocos/expedicao/ptm/DOSSIE.md |    90 +
 .../blocos/expedicao/ptm/ED_CARD.md                |    89 +
 .../blocos/expedicao/ptm/insights/ptm.INSIGHTS.md  |    48 +
 .../blocos/expedicao/ptm/ptm.RAW.md                |   333 +
 corpus-conhecimento/blocos/expedicao/ptm/ptm.md    |    33 +
 .../blocos/expedicao/sorter-inducao/DOSSIE.md      |   100 +
 .../blocos/expedicao/sorter-inducao/ED_CARD.md     |    91 +
 .../insights/sorter-inducao.INSIGHTS.md            |    44 +
 .../expedicao/sorter-inducao/sorter-inducao.RAW.md |   264 +
 .../expedicao/sorter-inducao/sorter-inducao.md     |    33 +
 .../blocos/expedicao/sorter-mapa-rota/DOSSIE.md    |    82 +
 .../blocos/expedicao/sorter-mapa-rota/ED_CARD.md   |    97 +
 .../insights/sorter-mapa-rota.INSIGHTS.md          |    44 +
 .../sorter-mapa-rota/sorter-mapa-rota.RAW.md       |   373 +
 .../expedicao/sorter-mapa-rota/sorter-mapa-rota.md |    33 +
 .../blocos/expedicao/sorter-rejeito/DOSSIE.md      |    92 +
 .../blocos/expedicao/sorter-rejeito/ED_CARD.md     |   118 +
 .../insights/sorter-rejeito.INSIGHTS.md            |    42 +
 .../expedicao/sorter-rejeito/sorter-rejeito.RAW.md |  1003 ++
 .../expedicao/sorter-rejeito/sorter-rejeito.md     |    34 +
 .../blocos/expedicao/sorter/DOSSIE.md              |    95 +
 .../blocos/expedicao/sorter/ED_CARD.md             |   110 +
 .../expedicao/sorter/insights/sorter.INSIGHTS.md   |    45 +
 .../blocos/expedicao/sorter/sorter.RAW.md          |  2859 ++++++
 .../blocos/expedicao/sorter/sorter.md              |    32 +
 corpus-conhecimento/blocos/integracao/.gitkeep     |     0
 .../integracao/integracao-cadastros/DOSSIE.md      |    92 +
 .../integracao/integracao-cadastros/ED_CARD.md     |   114 +
 .../insights/integracao-cadastros.INSIGHTS.md      |    47 +
 .../integracao-cadastros.RAW.md                    |   452 +
 .../integracao-cadastros/integracao-cadastros.md   |    33 +
 .../blocos/integracao/integracao-pedidos/DOSSIE.md |    77 +
 .../integracao/integracao-pedidos/ED_CARD.md       |    97 +
 .../insights/integracao-pedidos.INSIGHTS.md        |    44 +
 .../integracao-pedidos/integracao-pedidos.RAW.md   |  1009 ++
 .../integracao-pedidos/integracao-pedidos.md       |    34 +
 .../blocos/integracao/integracao-wcs-wms/DOSSIE.md |   114 +
 .../integracao/integracao-wcs-wms/ED_CARD.md       |   100 +
 .../insights/integracao-wcs-wms.INSIGHTS.md        |    39 +
 .../integracao-wcs-wms/integracao-wcs-wms.RAW.md   |   518 +
 .../integracao-wcs-wms/integracao-wcs-wms.md       |    34 +
 .../blocos/integracao/integracao-wms-erp/DOSSIE.md |    95 +
 .../integracao/integracao-wms-erp/ED_CARD.md       |   120 +
 .../insights/integracao-wms-erp.INSIGHTS.md        |    46 +
 .../integracao-wms-erp/integracao-wms-erp.RAW.md   |   284 +
 .../integracao-wms-erp/integracao-wms-erp.md       |    35 +
 .../blocos/integracao/integracao/integracao.RAW.md | 10079 +++++++++++++++++++
 .../blocos/integracao/integracao/integracao.md     |    32 +
 .../separacao/cancelamento-pedidos/DOSSIE.md       |    88 +
 .../separacao/cancelamento-pedidos/ED_CARD.md      |    67 +
 .../cancelamento-pedidos.RAW.md                    |    46 +
 .../cancelamento-pedidos/cancelamento-pedidos.md   |    33 +
 .../insights/cancelamento-pedidos.INSIGHTS.md      |    37 +
 .../blocos/separacao/picking-cart/DOSSIE.md        |    87 +
 .../blocos/separacao/picking-cart/ED_CARD.md       |    82 +
 .../picking-cart/insights/picking-cart.INSIGHTS.md |    45 +
 .../separacao/picking-cart/picking-cart.DOSSIE.md  |    26 +
 .../separacao/picking-cart/picking-cart.RAW.md     |  1030 ++
 .../blocos/separacao/picking-cart/picking-cart.md  |    33 +
 .../blocos/separacao/picking-fullcase/DOSSIE.md    |    94 +
 .../blocos/separacao/picking-fullcase/ED_CARD.md   |    90 +
 .../insights/picking-fullcase.INSIGHTS.md          |    45 +
 .../picking-fullcase/picking-fullcase.RAW.md       |   298 +
 .../separacao/picking-fullcase/picking-fullcase.md |    33 +
 .../blocos/separacao/picking-pallet/DOSSIE.md      |   104 +
 .../blocos/separacao/picking-pallet/ED_CARD.md     |    72 +
 .../insights/picking-pallet.INSIGHTS.md            |    42 +
 .../separacao/picking-pallet/picking-pallet.RAW.md |   141 +
 .../separacao/picking-pallet/picking-pallet.md     |    33 +
 .../blocos/separacao/picking-pbl/DOSSIE.md         |    89 +
 .../blocos/separacao/picking-pbl/ED_CARD.md        |   100 +
 .../picking-pbl/insights/picking-pbl.INSIGHTS.md   |    45 +
 .../separacao/picking-pbl/picking-pbl.RAW.md       |   710 ++
 .../blocos/separacao/picking-pbl/picking-pbl.md    |    35 +
 .../blocos/separacao/put-to-wall/DOSSIE.md         |    76 +
 .../blocos/separacao/put-to-wall/ED_CARD.md        |    59 +
 .../put-to-wall/insights/put-to-wall.INSIGHTS.md   |    42 +
 .../separacao/put-to-wall/put-to-wall.RAW.md       |   246 +
 .../blocos/separacao/put-to-wall/put-to-wall.md    |    35 +
 .../blocos/separacao/shortpicking/DOSSIE.md        |    95 +
 .../blocos/separacao/shortpicking/ED_CARD.md       |    72 +
 .../shortpicking/insights/shortpicking.INSIGHTS.md |    47 +
 .../separacao/shortpicking/shortpicking.RAW.md     |   442 +
 .../blocos/separacao/shortpicking/shortpicking.md  |    34 +
 .../blocos/sistema/cadastros-acessos/DOSSIE.md     |    76 +
 .../blocos/sistema/cadastros-acessos/ED_CARD.md    |   113 +
 .../cadastros-acessos/cadastros-acessos.RAW.md     |  2201 ++++
 .../insights/cadastros-acessos.INSIGHTS.md         |    43 +
 .../blocos/sistema/dashboards-relatorios/DOSSIE.md |    80 +
 .../sistema/dashboards-relatorios/ED_CARD.md       |   132 +
 .../dashboards-relatorios.RAW.md                   |  1678 +++
 .../insights/dashboards-relatorios.INSIGHTS.md     |    41 +
 .../cards/CARD_cadastros-acessos.md                |   218 +
 .../cards/CARD_cancelamento-pedidos.md             |   170 +
 .../cards/CARD_checklist-carregamento.md           |   152 +
 .../cards/CARD_conferencia-manual.md               |   163 +
 corpus-conhecimento/cards/CARD_conferencia.md      |   154 +
 corpus-conhecimento/cards/CARD_cross-check.md      |   159 +
 corpus-conhecimento/cards/CARD_cubagem.md          |   175 +
 .../cards/CARD_dashboards-relatorios.md            |   230 +
 corpus-conhecimento/cards/CARD_etiquetas.md        |   155 +
 .../cards/CARD_integracao-cadastros.md             |   464 +
 .../cards/CARD_integracao-pedidos.md               |   367 +
 .../cards/CARD_integracao-wcs-wms.md               |   350 +
 .../cards/CARD_integracao-wms-erp.md               |   211 +
 corpus-conhecimento/cards/CARD_integracao.md       |   268 +
 corpus-conhecimento/cards/CARD_inventario.md       |   165 +
 corpus-conhecimento/cards/CARD_order-start.md      |   194 +
 .../cards/CARD_packing-termolabil.md               |   158 +
 corpus-conhecimento/cards/CARD_packing.md          |   153 +
 corpus-conhecimento/cards/CARD_paletizacao.md      |   176 +
 corpus-conhecimento/cards/CARD_picking-cart.md     |   209 +
 corpus-conhecimento/cards/CARD_picking-fullcase.md |   204 +
 corpus-conhecimento/cards/CARD_picking-pallet.md   |   174 +
 corpus-conhecimento/cards/CARD_picking-pbl.md      |   226 +
 corpus-conhecimento/cards/CARD_ptl-alocacao.md     |   184 +
 corpus-conhecimento/cards/CARD_ptm.md              |   167 +
 corpus-conhecimento/cards/CARD_put-to-wall.md      |   141 +
 corpus-conhecimento/cards/CARD_reabastecimento.md  |   168 +
 .../cards/CARD_recebimento-armazenagem.md          |   162 +
 corpus-conhecimento/cards/CARD_shortpicking.md     |   162 +
 corpus-conhecimento/cards/CARD_sorter-inducao.md   |   172 +
 corpus-conhecimento/cards/CARD_sorter-mapa-rota.md |   205 +
 corpus-conhecimento/cards/CARD_sorter-rejeito.md   |   214 +
 corpus-conhecimento/cards/CARD_sorter.md           |   202 +
 corpus-conhecimento/cards/JSON_DOCS.md             |   538 +
 corpus-conhecimento/cards/PROMPT_ED.md             |   234 +
 corpus-conhecimento/cards/_AUDITOR.md              |   223 +
 corpus-conhecimento/cards/_KICKOFF_FIELDS.md       |    91 +
 corpus-conhecimento/corpus-full.jsonl              |  1344 +++
 .../ed-knowledge/CARD_cadastros-acessos.md         |   113 +
 .../ed-knowledge/CARD_cancelamento-pedidos.md      |    67 +
 .../ed-knowledge/CARD_checklist-carregamento.md    |    91 +
 .../ed-knowledge/CARD_conferencia-manual.md        |    74 +
 .../ed-knowledge/CARD_conferencia.md               |    59 +
 .../ed-knowledge/CARD_cross-check.md               |    67 +
 corpus-conhecimento/ed-knowledge/CARD_cubagem.md   |    55 +
 .../ed-knowledge/CARD_dashboards-relatorios.md     |   132 +
 corpus-conhecimento/ed-knowledge/CARD_etiquetas.md |    87 +
 .../ed-knowledge/CARD_integracao-cadastros.md      |   114 +
 .../ed-knowledge/CARD_integracao-pedidos.md        |    97 +
 .../ed-knowledge/CARD_integracao-wcs-wms.md        |   100 +
 .../ed-knowledge/CARD_integracao-wms-erp.md        |   120 +
 .../ed-knowledge/CARD_inventario.md                |   109 +
 .../ed-knowledge/CARD_order-start.md               |    64 +
 .../ed-knowledge/CARD_packing-termolabil.md        |    62 +
 corpus-conhecimento/ed-knowledge/CARD_packing.md   |    84 +
 .../ed-knowledge/CARD_paletizacao.md               |    82 +
 .../ed-knowledge/CARD_picking-cart.md              |    82 +
 .../ed-knowledge/CARD_picking-fullcase.md          |    90 +
 .../ed-knowledge/CARD_picking-pallet.md            |    72 +
 .../ed-knowledge/CARD_picking-pbl.md               |   100 +
 .../ed-knowledge/CARD_ptl-alocacao.md              |    74 +
 corpus-conhecimento/ed-knowledge/CARD_ptm.md       |    89 +
 .../ed-knowledge/CARD_put-to-wall.md               |    59 +
 .../ed-knowledge/CARD_reabastecimento.md           |    83 +
 .../ed-knowledge/CARD_recebimento-armazenagem.md   |    62 +
 .../ed-knowledge/CARD_shortpicking.md              |    72 +
 .../ed-knowledge/CARD_sorter-inducao.md            |    91 +
 .../ed-knowledge/CARD_sorter-mapa-rota.md          |    97 +
 .../ed-knowledge/CARD_sorter-rejeito.md            |   118 +
 corpus-conhecimento/ed-knowledge/CARD_sorter.md    |   110 +
 corpus-conhecimento/ed-knowledge/JSON_DOCS.md      |   408 +
 corpus-conhecimento/ed-knowledge/PROMPT_ED.md      |    46 +
 corpus-conhecimento/ed-knowledge/_GUIA_ED.md       |    79 +
 corpus-conhecimento/ed-knowledge/_ROUTER.json      |   209 +
 corpus-conhecimento/manifesto.json                 |   575 ++
 .../relatorio-auditoria-links-resolvidos.md        |    64 +
 .../vocabulario/cadastros-acessos.txt              |    33 +
 .../vocabulario/conferencia-manual.txt             |     8 +
 corpus-conhecimento/vocabulario/conferencia.txt    |    28 +
 corpus-conhecimento/vocabulario/cubagem.txt        |    25 +
 .../vocabulario/dashboards-relatorios.txt          |    34 +
 corpus-conhecimento/vocabulario/etiquetas.txt      |    21 +
 .../vocabulario/integracao-cadastros.txt           |    11 +
 .../vocabulario/integracao-pedidos.txt             |    11 +
 .../vocabulario/integracao-wcs-wms.txt             |    13 +
 .../vocabulario/integracao-wms-erp.txt             |    12 +
 corpus-conhecimento/vocabulario/integracao.txt     |    29 +
 corpus-conhecimento/vocabulario/inventario.txt     |    25 +
 corpus-conhecimento/vocabulario/order-start.txt    |    31 +
 .../vocabulario/packing-termolabil.txt             |     9 +
 corpus-conhecimento/vocabulario/packing.txt        |    20 +
 corpus-conhecimento/vocabulario/paletizacao.txt    |    11 +
 corpus-conhecimento/vocabulario/picking-cart.txt   |    28 +
 .../vocabulario/picking-fullcase.txt               |     8 +
 corpus-conhecimento/vocabulario/picking-pallet.txt |     7 +
 corpus-conhecimento/vocabulario/picking-pbl.txt    |    35 +
 corpus-conhecimento/vocabulario/ptl-alocacao.txt   |    21 +
 corpus-conhecimento/vocabulario/ptm.txt            |    19 +
 corpus-conhecimento/vocabulario/put-to-wall.txt    |    16 +
 .../vocabulario/reabastecimento.txt                |    22 +
 .../vocabulario/recebimento-armazenagem.txt        |    33 +
 corpus-conhecimento/vocabulario/shortpicking.txt   |    26 +
 corpus-conhecimento/vocabulario/sorter-inducao.txt |    12 +
 .../vocabulario/sorter-mapa-rota.txt               |    12 +
 corpus-conhecimento/vocabulario/sorter-rejeito.txt |    12 +
 corpus-conhecimento/vocabulario/sorter.txt         |    42 +
 dashboards-relatorios.md                           |     0
 demos/database.md                                  |     0
 demos/electron.md                                  |     0
 demos/xspreadsheet.md                              |     0
 ed-knowledge/ES_PLACEHOLDER_v7.docx                |   Bin 6904976 -> 6910292 bytes
 ed-knowledge/PROMPT_SISTEMA_v5_7.md                |    38 +-
 ed-knowledge/SUPER_MD_v5_5.md                      |   202 +-
 ed-knowledge/build_docx_v5.py                      |    95 +-
 insights/order-start.INSIGHTS.md                   |     0
 insights/packing.INSIGHTS.md                       |     0
 minerador/__pycache__/auditor.cpython-311.pyc      |   Bin 0 -> 32161 bytes
 minerador/__pycache__/minerador.cpython-311.pyc    |   Bin 0 -> 26651 bytes
 minerador/__pycache__/reclassifier.cpython-311.pyc |   Bin 0 -> 18448 bytes
 minerador/__pycache__/sintetizador.cpython-311.pyc |   Bin 0 -> 33277 bytes
 minerador/_estado_sintetizador.json                |    51 +
 minerador/auditor.py                               |   673 ++
 minerador/descobridor.py                           |    93 +
 minerador/extrator.py                              |   400 +
 minerador/limpar_inbox.py                          |   164 +
 minerador/minerador.py                             |   447 +
 minerador/reclassifier.py                          |   324 +
 minerador/requirements.txt                         |    43 +
 minerador/roteador.py                              |   121 +
 minerador/sintetizador.py                          |   762 ++
 minerador/smoke_test.py                            |    18 +
 minerador/topicos.json                             |    34 +
 package-lock.json                                  |   926 +-
 package.json                                       |     4 +-
 public/ES_PLACEHOLDER_v7.docx                      |   Bin 6904976 -> 6922109 bytes
 src/App.tsx                                        |    50 +-
 src/components/Sidebar.tsx                         |    79 +-
 src/lib/docxBuilder.ts                             |    74 +-
 src/lib/featureRegistry.ts                         |     9 +
 src/lib/kickoffMeta.ts                             |     4 +-
 src/pages/Admin/index.tsx                          |   541 +
 src/pages/ConfigPage.tsx                           |    19 +-
 src/pages/Documentacao/ApontamentoHoras.tsx        |  1376 +++
 src/pages/Documentacao/GerarDocumento.tsx          |    18 +-
 src/pages/Documentacao/index.tsx                   |    16 +-
 src/pages/KickoffPage.tsx                          |    27 +-
 src/pages/LoginPage.tsx                            |    14 +-
 vite.config.ts                                     |     5 +
 342 files changed, 63946 insertions(+), 173 deletions(-)
```

---

## Diff completo (o que mudou no codigo)

```diff
diff --git a/src/App.tsx b/src/App.tsx
index 986cd48..86c4b39 100644
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -14,6 +14,7 @@ import { ComingSoon } from './pages/ComingSoon';
 import { ConfigPage } from './pages/ConfigPage';
 import { SugestoesPage } from './pages/SugestoesPage';
 import { DocumentacaoPage } from './pages/Documentacao';
+import { AdminPage } from './pages/Admin';
 import { ProjetosPage } from './pages/Projetos';
 import { ProjectOverview } from './pages/Projetos/ProjectOverview';
 import { NewKickoffModal } from './components/NewKickoffModal';
@@ -22,7 +23,7 @@ import { IntroScreen } from './components/IntroScreen';
 import type { NexusProject } from './lib/projectStore';
 import { loadProject } from './lib/projectStore';
 
-type Page = 'kickoff' | 'projetos' | 'overview' | 'ferramentas' | 'dashboard' | 'config' | 'sugestoes' | 'documentacao';
+type Page = 'kickoff' | 'projetos' | 'overview' | 'ferramentas' | 'dashboard' | 'config' | 'sugestoes' | 'documentacao' | 'admin';
 
 const PAGE_TITLES: Record<Page, string> = {
   kickoff:       'Kickoff',
@@ -33,18 +34,32 @@ const PAGE_TITLES: Record<Page, string> = {
   config:        'Configurações',
   sugestoes:     'Sugestões',
   documentacao:  'Documentação',
+  admin:         'Administrador',
 };
 
 const SESSION_KEY = 'nexus_session';
 
-function loadSession(): { name: string; role: Role } | null {
+function loadSession(): { name: string; role: Role; email: string } | null {
   try { return JSON.parse(localStorage.getItem(SESSION_KEY) ?? 'null'); }
   catch { return null; }
 }
 
+function recoverEmail(name: string): string {
+  try {
+    const users = JSON.parse(localStorage.getItem('nexus_users') ?? '{}') as Record<string, { name: string }>;
+    const found = Object.entries(users).find(([, u]) => u.name === name);
+    return found ? found[0] : '';
+  } catch { return ''; }
+}
+
 export default function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(() => loadSession() !== null);
   const [userName, setUserName] = useState(() => loadSession()?.name ?? '');
+  const [userEmail, setUserEmail] = useState(() => {
+    const s = loadSession();
+    if (!s) return '';
+    return s.email || recoverEmail(s.name);
+  });
   const [showIntro, setShowIntro] = useState(false);
   const [page, setPage] = useState<Page>('projetos');
   const [role, setRole] = useState<Role>(() => loadSession()?.role ?? 'gestao');
@@ -92,6 +107,17 @@ export default function App() {
     if (session) localStorage.setItem(SESSION_KEY, JSON.stringify({ ...session, role: r }));
   };
 
+  const handleLogout = () => {
+    localStorage.removeItem(SESSION_KEY);
+    setIsAuthenticated(false);
+    setUserName('');
+    setUserEmail('');
+    setRole('gestao');
+    setShowIntro(false);
+    setPage('projetos');
+    setActiveProjectId(null);
+  };;
+
   function renderKickoffLanding() {
     return (
       <Box
@@ -182,35 +208,29 @@ export default function App() {
       case 'dashboard':
         return <ComingSoon iconType="dashboard" title="Dashboard" description="Métricas e indicadores dos projetos: taxa de preenchimento, seções críticas, timeline." />;
       case 'config':
-        return <ConfigPage role={role} />;
+        return <ConfigPage role={role} isAdmin={userEmail === 'raphael.caveagna@invent-corp.com'} />;
       case 'sugestoes':
         return <SugestoesPage role={role} userName={userName} />;
       case 'documentacao':
         return <DocumentacaoPage />;
+      case 'admin':
+        return <AdminPage role={role} onRoleChange={handleRoleChange} />;
     }
   }
 
   const inKickoffFullscreen = isFullscreen && page === 'kickoff' && !!activeProjectId;
 
-  const handleLogout = () => {
-    localStorage.removeItem(SESSION_KEY);
-    setIsAuthenticated(false);
-    setUserName('');
-    setRole('gestao');
-    setShowIntro(false);
-    setPage('projetos');
-    setActiveProjectId(null);
-  };
 
   if (!isAuthenticated) {
     return (
       <LoginPage
-        onLogin={(nome, r) => {
+        onLogin={(nome, r, email) => {
           setUserName(nome);
+          setUserEmail(email);
           setRole(r);
           setIsAuthenticated(true);
           setShowIntro(true);
-          localStorage.setItem(SESSION_KEY, JSON.stringify({ name: nome, role: r }));
+          localStorage.setItem(SESSION_KEY, JSON.stringify({ name: nome, role: r, email }));
         }}
       />
     );
@@ -221,7 +241,7 @@ export default function App() {
       {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
 
       {!inKickoffFullscreen && (
-        <Sidebar current={page as 'kickoff' | 'projetos' | 'ferramentas' | 'dashboard' | 'config'} onNavigate={handleNavigate} role={role} onRoleChange={handleRoleChange} userName={userName} onLogout={handleLogout} />
+        <Sidebar current={page as Parameters<typeof handleNavigate>[0]} onNavigate={handleNavigate} role={role} onRoleChange={handleRoleChange} userName={userName} userEmail={userEmail} onLogout={handleLogout} />
       )}
 
       <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
diff --git a/src/components/Sidebar.tsx b/src/components/Sidebar.tsx
index 8769bd7..16cdd79 100644
--- a/src/components/Sidebar.tsx
+++ b/src/components/Sidebar.tsx
@@ -6,6 +6,7 @@ import MenuItem from '@mui/material/MenuItem';
 import Select from '@mui/material/Select';
 import Tooltip from '@mui/material/Tooltip';
 import Typography from '@mui/material/Typography';
+import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
 import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
 import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
 import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
@@ -17,7 +18,9 @@ import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
 import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
 import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
 
-type Page = 'kickoff' | 'projetos' | 'ferramentas' | 'dashboard' | 'config' | 'sugestoes' | 'documentacao';
+type Page = 'kickoff' | 'projetos' | 'ferramentas' | 'dashboard' | 'config' | 'sugestoes' | 'documentacao' | 'admin';
+
+const ADMIN_EMAIL = 'raphael.caveagna@invent-corp.com';
 
 export const ROLES = [
   { value: 'gestao',          label: 'Gestão' },
@@ -53,10 +56,12 @@ interface SidebarProps {
   role: Role;
   onRoleChange: (role: Role) => void;
   userName: string;
+  userEmail: string;
   onLogout: () => void;
 }
 
-export function Sidebar({ current, onNavigate, role, onRoleChange, userName, onLogout }: SidebarProps) {
+export function Sidebar({ current, onNavigate, role, onRoleChange, userName, userEmail, onLogout }: SidebarProps) {
+  const isAdmin = userEmail === ADMIN_EMAIL;
   const [collapsed, setCollapsed] = useState(false);
   const [admClicks, setAdmClicks] = useState(0);
   const [admHint, setAdmHint] = useState(false);
@@ -90,6 +95,7 @@ export function Sidebar({ current, onNavigate, role, onRoleChange, userName, onL
   const NAV = role === 'documentacao'
     ? [...NAV_DEFAULT, NAV_DOC]
     : NAV_DEFAULT;
+  const NAV_ADMIN: NavItem = { id: 'admin', label: 'Administrador', Icon: AdminPanelSettingsRoundedIcon };
   const roleLabel = ROLES.find(r => r.value === role)?.label ?? role;
   const firstName = userName.split(' ')[0] || 'Usuário';
   const initial = firstName[0]?.toUpperCase() ?? 'U';
@@ -228,6 +234,53 @@ export function Sidebar({ current, onNavigate, role, onRoleChange, userName, onL
           <List dense disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
             {NAV.map(renderNavItem)}
           </List>
+
+          {/* Admin nav item — visible only to raphael.caveagna@invent-corp.com */}
+          {isAdmin && (
+            <Box sx={{ mt: 1.5, pt: 1.5, borderTop: '1px solid rgba(239,68,68,0.15)' }}>
+              {!collapsed && (
+                <Typography sx={{ fontSize: 9.5, color: 'rgba(239,68,68,0.4)', fontWeight: 700, letterSpacing: '1px', px: '6px', pb: '8px', textTransform: 'uppercase' }}>
+                  Acesso Restrito
+                </Typography>
+              )}
+              {(() => {
+                const isActive = current === 'admin';
+                const btn = (
+                  <Box
+                    component="button"
+                    onClick={() => onNavigate('admin')}
+                    sx={{
+                      position: 'relative', borderRadius: '8px', mb: '2px',
+                      pl: collapsed ? 0 : '12px', pr: collapsed ? 0 : '8px',
+                      minHeight: 36, justifyContent: collapsed ? 'center' : 'flex-start',
+                      gap: 1.25, border: 'none', background: 'none', cursor: 'pointer',
+                      display: 'flex', alignItems: 'center', width: '100%',
+                      color: isActive ? '#ef4444' : 'rgba(239,68,68,0.4)',
+                      bgcolor: isActive ? 'rgba(239,68,68,0.08)' : 'transparent',
+                      '&::before': isActive ? {
+                        content: '""', position: 'absolute', left: 0, top: '18%', bottom: '18%',
+                        width: '3px', borderRadius: '0 3px 3px 0', bgcolor: '#ef4444',
+                      } : {},
+                      '&:hover': { bgcolor: 'rgba(239,68,68,0.06)', color: '#ef4444' },
+                      transition: 'background-color 0.15s, color 0.15s',
+                    } as const}
+                  >
+                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: collapsed ? '100%' : 28, height: 36, flexShrink: 0 }}>
+                      <AdminPanelSettingsRoundedIcon sx={{ fontSize: 18 }} />
+                    </Box>
+                    {!collapsed && (
+                      <Typography sx={{ fontSize: 13, fontWeight: isActive ? 600 : 500, lineHeight: 1, whiteSpace: 'nowrap', color: 'inherit' }}>
+                        {NAV_ADMIN.label}
+                      </Typography>
+                    )}
+                  </Box>
+                );
+                return collapsed
+                  ? <Tooltip key="admin" title={NAV_ADMIN.label} placement="right" arrow>{btn}</Tooltip>
+                  : btn;
+              })()}
+            </Box>
+          )}
         </Box>
 
         {/* Bottom section */}
@@ -238,16 +291,18 @@ export function Sidebar({ current, onNavigate, role, onRoleChange, userName, onL
 
           {!collapsed && (
             <>
-              <Select
-                value={role}
-                onChange={(e) => onRoleChange(e.target.value as Role)}
-                fullWidth size="small"
-                sx={{ fontSize: 12 }}
-              >
-                {ROLES.filter(r => r.value !== 'adm' || role === 'adm').map(r => (
-                  <MenuItem key={r.value} value={r.value} sx={{ fontSize: 12 }}>{r.label}</MenuItem>
-                ))}
-              </Select>
+              {isAdmin && (
+                <Select
+                  value={role}
+                  onChange={(e) => onRoleChange(e.target.value as Role)}
+                  fullWidth size="small"
+                  sx={{ fontSize: 12, mb: 1 }}
+                >
+                  {ROLES.map(r => (
+                    <MenuItem key={r.value} value={r.value} sx={{ fontSize: 12 }}>{r.label}</MenuItem>
+                  ))}
+                </Select>
+              )}
 
               <Box
                 sx={{
diff --git a/src/lib/docxBuilder.ts b/src/lib/docxBuilder.ts
index ce815a1..46fd094 100644
--- a/src/lib/docxBuilder.ts
+++ b/src/lib/docxBuilder.ts
@@ -71,6 +71,8 @@ function xe(text: unknown): string {
 }
 
 function collapseSplitVars(xml: string): string {
+  xml = xml.replace(/\{(<[^>]*>)+\{/g, '{{');
+  xml = xml.replace(/\}(<[^>]*>)+\}/g, '}}');
   return xml.replace(/\{\{[^{}]{1,60}\}\}/g, (m) => m.replace(/<[^>]+>/g, ''));
 }
 
@@ -494,7 +496,68 @@ function injectBody(docXml: string, bodyXml: string): string {
   const fim = paraBounds(docXml, ANCHOR_END);
   if (!ini || !fim) throw new Error(`Âncoras ${ANCHOR_START}/${ANCHOR_END} não encontradas no template.`);
   if (ini[0] >= fim[0]) throw new Error('Ordem das âncoras inválida no template.');
-  return docXml.slice(0, ini[0]) + bodyXml + xmlPageBreak() + docXml.slice(fim[1]);
+  return docXml.slice(0, ini[0]) + bodyXml + docXml.slice(fim[1]);
+}
+
+function titulo1Headings(xml: string): Array<{ pStart: number; text: string }> {
+  const out: Array<{ pStart: number; text: string }> = [];
+  const re = /<w:pStyle w:val="Ttulo1"\s*\/>/g;
+  let m: RegExpExecArray | null;
+  while ((m = re.exec(xml)) !== null) {
+    const pStart = Math.max(xml.lastIndexOf('<w:p ', m.index), xml.lastIndexOf('<w:p>', m.index));
+    const pEnd   = xml.indexOf('</w:p>', m.index);
+    if (pStart === -1 || pEnd === -1) continue;
+    const seg  = xml.slice(pStart, pEnd);
+    const text = [...seg.matchAll(/<w:t[^>]*>(.*?)<\/w:t>/g)].map(t => t[1]).join('');
+    out.push({ pStart, text });
+  }
+  return out;
+}
+
+// Extrai byte-a-byte o capítulo "Métodos de Autenticação" do template: do Ttulo1
+// com "Autentica" até (exclusive) o próximo Ttulo1 com "Integra".
+function extractAuthBlock(docXml: string): string {
+  const headings = titulo1Headings(docXml);
+  for (let i = 0; i < headings.length; i++) {
+    if (/autentica/i.test(headings[i].text)) {
+      for (let j = i + 1; j < headings.length; j++) {
+        if (/integra/i.test(headings[j].text)) {
+          return docXml.slice(headings[i].pStart, headings[j].pStart);
+        }
+      }
+      break;
+    }
+  }
+  return '';
+}
+
+function injectAuthBeforeIntegrations(bodyXml: string, authXml: string): string {
+  for (const h of titulo1Headings(bodyXml)) {
+    if (/integra/i.test(h.text)) {
+      return bodyXml.slice(0, h.pStart) + authXml + bodyXml.slice(h.pStart);
+    }
+  }
+  return bodyXml + authXml;
+}
+
+// Remove do JSON o bloco inteiro de autenticação: do capítulo cujo título casa com
+// /autentica/i até (exclusive) o capítulo de Integrações. Tira o heading E as
+// tabelas/warnings/subtópicos filhos.
+//
+// NÃO depende de 'nivel': o ED (IA) gera o JSON de forma não-determinística e o
+// campo 'nivel' do heading de auth varia entre execuções (às vezes ausente).
+// Delimitar por título (autentica → integra) é robusto a essa variação.
+function stripAuthChapters(capitulos: Capitulo[]): Capitulo[] {
+  const titulo = (c: Capitulo) => ('titulo' in c ? c.titulo ?? '' : '');
+  const start = capitulos.findIndex(c => /autentica/i.test(titulo(c)));
+  if (start === -1) return capitulos;
+  let end = capitulos.findIndex((c, i) => i > start && /integra/i.test(titulo(c)));
+  if (end === -1) {
+    // Sem capítulo de Integrações: remove até o próximo heading não-auth.
+    end = capitulos.findIndex((c, i) => i > start && titulo(c) && !/autentica/i.test(titulo(c)));
+    if (end === -1) end = capitulos.length;
+  }
+  return [...capitulos.slice(0, start), ...capitulos.slice(end)];
 }
 
 // ─── Public API ───────────────────────────────────────────────────────────────
@@ -568,7 +631,14 @@ export async function generateDocx(
       + docXml.slice(anchorPos);
   }
 
-  const { bodyXml, internalsRemoved } = buildBodyXml(capitulos, userInfo);
+  // Extrai o capítulo de Métodos de Autenticação byte-a-byte do template (preserva
+  // formatação exata do Word). Remove do JSON o BLOCO inteiro de autenticação
+  // (heading nivel-1 + tabelas/warnings até o próximo nivel-1) p/ não duplicar
+  // nem deixar tabelas órfãs coladas no capítulo anterior.
+  const authBlock = extractAuthBlock(docXml);
+  const caps = stripAuthChapters(capitulos);
+  const { bodyXml: rawBodyXml, internalsRemoved } = buildBodyXml(caps, userInfo);
+  const bodyXml = authBlock ? injectAuthBeforeIntegrations(rawBodyXml, authBlock) : rawBodyXml;
   docXml = injectBody(docXml, bodyXml);
 
   zip.file('word/document.xml', docXml);
diff --git a/src/lib/featureRegistry.ts b/src/lib/featureRegistry.ts
index 84c8f42..3831b94 100644
--- a/src/lib/featureRegistry.ts
+++ b/src/lib/featureRegistry.ts
@@ -41,6 +41,15 @@ export const ROLE_FEATURES: RoleFeature[] = [
     addedAt: '2026-06-10',
     implemented: true,
   },
+  {
+    id: 'doc-apontamento-horas',
+    title: 'Apontamento de Horas',
+    description: 'Documentação lança atividades por dia da semana com pesos, distribui automaticamente em blocos de 30 min respeitando jornada e almoço, permite ajuste manual e exporta planilha Excel no formato padrão Invent (15 colunas, uma linha por bloco).',
+    roles: ['documentacao'],
+    page: 'Documentação',
+    addedAt: '2026-06-19',
+    implemented: true,
+  },
   {
     id: 'doc-gerar-documento',
     title: 'Gerar Documento (Especificação de Software)',
diff --git a/src/lib/kickoffMeta.ts b/src/lib/kickoffMeta.ts
index 06547e0..10b6ed5 100644
--- a/src/lib/kickoffMeta.ts
+++ b/src/lib/kickoffMeta.ts
@@ -16,7 +16,7 @@ export const REQUIRED_FIELDS = new Set([
   // Picking Cart
   'ct1','ct_r','ct_qc','ct2','ct_d','ct_df','ct6','s1c','s2c',
   // Full Case
-  'fc1','fc_r','fc2','fc2b','fc_i','fc_if','fc_re',
+  'fc1','fc_r','fc2','fc2b','fc_i','fc_if','fc_conf','fc_conf_hw','fc_conf_forn',
   // Conferência & Packing
   'cf_gate','cf_t1','cf2','cf_t2','pk1',
   // Sorter
@@ -28,5 +28,5 @@ export const REQUIRED_FIELDS = new Set([
   // Etiquetas (sem gate)
   'et_r','et1',
   // Infraestrutura (sem gate)
-  'if_titul','if_ambiente','if_s','if1','if2','if3','if4','if5','if6',
+  'if_resp_infra','if_resp_srv','if_ambiente','if_s','if1','if2','if3','if4','if5','if6',
 ]);
diff --git a/src/pages/Admin/index.tsx b/src/pages/Admin/index.tsx
new file mode 100644
index 0000000..d1cefd7
--- /dev/null
+++ b/src/pages/Admin/index.tsx
@@ -0,0 +1,541 @@
+import { useState, useEffect, useCallback } from 'react';
+import Box from '@mui/material/Box';
+import Button from '@mui/material/Button';
+import Chip from '@mui/material/Chip';
+import IconButton from '@mui/material/IconButton';
+import MenuItem from '@mui/material/MenuItem';
+import Paper from '@mui/material/Paper';
+import Select from '@mui/material/Select';
+import Tab from '@mui/material/Tab';
+import Tabs from '@mui/material/Tabs';
+import TextField from '@mui/material/TextField';
+import Tooltip from '@mui/material/Tooltip';
+import Typography from '@mui/material/Typography';
+
+import AddRoundedIcon from '@mui/icons-material/AddRounded';
+import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
+import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
+import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
+import EditRoundedIcon from '@mui/icons-material/EditRounded';
+import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
+import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
+
+import { ROLES } from '../../components/Sidebar';
+import type { Role } from '../../components/Sidebar';
+
+// ─── Types ───────────────────────────────────────────────────────────────────
+
+type TagColor = 'gold' | 'blue' | 'green';
+
+interface PSlide {
+  id: string;
+  tag: string;
+  tagColor: TagColor;
+  title: string;
+  body: string;
+}
+
+interface PData {
+  title: string;
+  date: string;
+  slides: PSlide[];
+  missaoTag: string;
+  missaoTitle: string;
+  missaoBody: string;
+}
+
+// ─── Storage ─────────────────────────────────────────────────────────────────
+
+const STORAGE_KEY = 'nexus_presentation_v1';
+
+const DEFAULT_DATA: PData = {
+  title: 'NEXUS — Atualização de Sistema',
+  date: 'Junho 2026',
+  slides: [
+    {
+      id: '1', tag: 'Novas Skills', tagColor: 'gold',
+      title: 'Inteligência Pós-Reunião: duas Skills que fecham o ciclo',
+      body: 'Duas novas habilidades automatizam o ciclo pós-reunião. A primeira converte a transcrição em bullet points organizados; a segunda lê esses pontos com o documento atual e diz exatamente a ação a tomar — inserir, substituir ou excluir. Qualquer definição de reunião vira instrução precisa para o documento, sem margem para interpretação.',
+    },
+    {
+      id: '2', tag: 'Motor de Documentos', tagColor: 'gold',
+      title: 'Gerador de Docs: Métodos de Autenticação integrado com precisão cirúrgica',
+      body: 'O capítulo de Métodos de Autenticação — com formatação rica, JSONs, tabelas e exemplos — agora é extraído diretamente do template e reinjetado na posição exata. Foi resolvido um problema técnico sofisticado: o Word fragmenta internamente os marcadores no XML, causando falhas silenciosas. O motor detecta e reconstrói esses fragmentos, garantindo saída idêntica ao template original.',
+    },
+    {
+      id: '3', tag: 'Stakeholder', tagColor: 'blue',
+      title: 'Arenas acessando o sistema direto do banco de dados',
+      body: 'O Arenas já está operando diretamente contra o banco de dados do NEXUS, visualizando os dados que lhe competem de forma autônoma. A integração está ativa e funcional. A validação ainda está em curso — a cobrança aguarda o aval definitivo.',
+    },
+    {
+      id: '4', tag: 'Integração', tagColor: 'blue',
+      title: 'Azure + Microsoft 365: o NEXUS entra no ecossistema corporativo',
+      body: 'Com o apoio do Gomes, o NEXUS começa a se conectar ao Azure — a camada de IA da Microsoft integrada ao e-mail, Teams, Planner e calendário corporativo. Um leque enorme de automações se abre dentro das ferramentas que a equipe já usa no dia a dia.',
+    },
+    {
+      id: '5', tag: 'Próximo Grande Passo', tagColor: 'gold',
+      title: 'O Scrapper: construindo a Bíblia Suprema do conhecimento operacional',
+      body: 'O próximo passo é o Scrapper — sistema que coleta e organiza o conhecimento real dos processos. O Oráculo passa a responder perguntas das equipes com profundidade genuína. Os dados alimentam a versão definitiva da Base de Conhecimento: insights, problemas comuns por processo (como picking), padrões operacionais e variantes por cliente.',
+    },
+    {
+      id: '6', tag: 'Produtividade', tagColor: 'gold',
+      title: 'Automação de Apontamento de Horas',
+      body: 'Em desenvolvimento junto com o Gu: automação que elimina o processo manual de apontamento. Registros de tempo passam a acontecer de forma automática ou semi-automática, integrados ao fluxo natural de trabalho.',
+    },
+    {
+      id: '7', tag: 'Visão de Futuro', tagColor: 'gold',
+      title: 'Especialista Documentador 3.0 — quando o Scrapper estiver rodando',
+      body: 'Com o Scrapper maduro e a Base de Conhecimento completa, o Especialista Documentador evolui para sua versão mais poderosa. Alimentado por dados reais e variantes de clientes, ele deixa de ser um gerador de documentos e passa a ser um especialista genuíno — capaz de antecipar inconsistências e gerar especificações com precisão inédita.',
+    },
+  ],
+  missaoTag: 'Próxima Missão — Infraestrutura',
+  missaoTitle: 'Igor e o servidor da Invent: o ecossistema precisa de uma casa',
+  missaoBody: 'Para que o NEXUS funcione de forma plena e independente, o próximo passo institucional é instalar o sistema, o banco de dados e o modelo de IA no servidor da Invent. O Igor precisa ser alinhado agora — quanto antes ele entender o escopo, mais rápido a infraestrutura fica disponível e o NEXUS opera com total autonomia dentro da empresa.',
+};
+
+function loadPData(): PData {
+  try {
+    const raw = localStorage.getItem(STORAGE_KEY);
+    if (raw) {
+      const parsed = JSON.parse(raw) as Partial<PData>;
+      return { ...DEFAULT_DATA, ...parsed };
+    }
+  } catch { /* ignore */ }
+  return { ...DEFAULT_DATA, slides: DEFAULT_DATA.slides.map(s => ({ ...s })) };
+}
+
+function savePData(d: PData) {
+  localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
+}
+
+function genId() {
+  return Math.random().toString(36).slice(2, 9);
+}
+
+// ─── Presentation Overlay ─────────────────────────────────────────────────────
+
+function PresentationOverlay({ data, onClose }: { data: PData; onClose: () => void }) {
+  useEffect(() => {
+    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
+    window.addEventListener('keydown', handler);
+    return () => window.removeEventListener('keydown', handler);
+  }, [onClose]);
+
+  const tagColor = (c: TagColor) =>
+    c === 'gold' ? '#C98A22' : c === 'blue' ? '#3E87CF' : '#2DB87A';
+
+  const borderColor = (c: TagColor) =>
+    c === 'blue' ? '#2A5E96' : c === 'green' ? '#1A4033' : '#263347';
+
+  return (
+    <div style={{
+      position: 'fixed', inset: 0,
+      background: '#0F1520',
+      zIndex: 9999,
+      overflowY: 'auto',
+      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
+      WebkitFontSmoothing: 'antialiased',
+    }}>
+      {/* ESC button */}
+      <button
+        onClick={onClose}
+        style={{
+          position: 'fixed', top: 16, right: 20,
+          background: 'rgba(255,255,255,0.06)',
+          border: '1px solid rgba(255,255,255,0.1)',
+          borderRadius: 6, color: '#7A96B0',
+          cursor: 'pointer', padding: '6px 14px',
+          fontSize: 11.5, zIndex: 10000,
+          letterSpacing: '0.06em',
+        }}
+      >
+        ESC · Fechar
+      </button>
+
+      <div style={{ maxWidth: 720, margin: '0 auto', padding: '52px 36px 96px' }}>
+        {/* Header */}
+        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 28, borderBottom: '1px solid #263347', marginBottom: 44 }}>
+          <div>
+            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C98A22' }}>NEXUS</div>
+            <div style={{ fontSize: 12, color: '#7A96B0', letterSpacing: '0.04em', marginTop: 4 }}>Sistema de Inteligência Documental</div>
+          </div>
+          <div style={{ textAlign: 'right', fontSize: 11.5, color: '#3E5268', letterSpacing: '0.06em', lineHeight: 1.8 }}>
+            {data.title}<br />{data.date}
+          </div>
+        </div>
+
+        {/* Lead */}
+        <div style={{ borderLeft: '3px solid #C98A22', padding: '14px 18px', background: 'rgba(201,138,34,0.06)', borderRadius: '0 4px 4px 0', fontFamily: "Georgia, Cambria, serif", fontSize: 14, color: '#7A96B0', lineHeight: 1.8, marginBottom: 52 }}>
+          Resumo das evoluções implementadas. Cada tópico cobre uma entrega ou avanço concreto — do motor de documentos às novas integrações e ao roadmap em andamento.
+        </div>
+
+        {/* Slides */}
+        {data.slides.map((slide, i) => (
+          <div key={slide.id} style={{ padding: '30px 0 30px 24px', borderLeft: `2px solid ${borderColor(slide.tagColor)}`, marginBottom: 4 }}>
+            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', color: '#3E5268', marginBottom: 4 }}>
+              {String(i + 1).padStart(2, '0')}
+            </div>
+            <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: tagColor(slide.tagColor), marginBottom: 8 }}>
+              {slide.tag}
+            </div>
+            <h2 style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: '#DCE8F4', marginBottom: 14, letterSpacing: '-0.01em' }}>
+              {slide.title}
+            </h2>
+            <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: 14.5, lineHeight: 1.82, color: '#A8BDD4', maxWidth: 620, margin: 0 }}>
+              {slide.body}
+            </p>
+          </div>
+        ))}
+
+        {/* Missão callout */}
+        <div style={{ marginTop: 48, background: 'linear-gradient(135deg, #0E1E18 0%, #0D1A22 100%)', border: '1px solid #1E3828', borderLeft: '4px solid #2DB87A', borderRadius: '0 8px 8px 0', padding: 28 }}>
+          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#2DB87A', marginBottom: 10 }}>
+            {data.missaoTag || 'Próxima Missão'}
+          </div>
+          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#DCE8F4', marginBottom: 12, lineHeight: 1.3 }}>
+            {data.missaoTitle}
+          </h2>
+          <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: 14, lineHeight: 1.85, color: '#7AADA0', margin: 0 }}>
+            {data.missaoBody}
+          </p>
+        </div>
+
+        {/* Footer */}
+        <div style={{ marginTop: 72, paddingTop: 24, borderTop: '1px solid #263347', fontSize: 11, color: '#3E5268', display: 'flex', justifyContent: 'space-between' }}>
+          <span>NEXUS · Sistema de Inteligência Documental</span>
+          <span>{data.date}</span>
+        </div>
+      </div>
+    </div>
+  );
+}
+
+// ─── Slide Edit Card ──────────────────────────────────────────────────────────
+
+const TAG_COLOR_OPTIONS: { value: TagColor; label: string; color: string }[] = [
+  { value: 'gold',  label: 'Dourado',  color: '#C98A22' },
+  { value: 'blue',  label: 'Azul',     color: '#3E87CF' },
+  { value: 'green', label: 'Verde',    color: '#2DB87A' },
+];
+
+function SlideCard({
+  slide, index, total,
+  onUpdate, onDelete, onMoveUp, onMoveDown,
+}: {
+  slide: PSlide; index: number; total: number;
+  onUpdate: (s: PSlide) => void;
+  onDelete: () => void;
+  onMoveUp: () => void;
+  onMoveDown: () => void;
+}) {
+  const [open, setOpen] = useState(false);
+  const [draft, setDraft] = useState<PSlide>(slide);
+
+  const handleSave = () => {
+    onUpdate(draft);
+    setOpen(false);
+  };
+
+  const accentColor = TAG_COLOR_OPTIONS.find(o => o.value === slide.tagColor)?.color ?? '#C98A22';
+
+  return (
+    <Paper elevation={0} sx={{ border: '1px solid', borderColor: open ? 'primary.main' : 'divider', borderLeft: `3px solid ${accentColor}`, transition: 'border-color .15s' }}>
+      <Box sx={{ display: 'flex', alignItems: 'center', p: '10px 12px', gap: 1 }}>
+        <Typography sx={{ fontSize: 10, color: 'text.disabled', minWidth: 22, fontFamily: 'monospace', fontWeight: 600 }}>
+          {String(index + 1).padStart(2, '0')}
+        </Typography>
+        <Chip
+          label={slide.tag || '—'}
+          size="small"
+          sx={{ fontSize: 10, height: 18, bgcolor: `${accentColor}18`, color: accentColor, border: `1px solid ${accentColor}44`, fontWeight: 600 }}
+        />
+        <Typography sx={{ fontSize: 13, fontWeight: 600, color: 'text.primary', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
+          {slide.title || <span style={{ color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>Sem título</span>}
+        </Typography>
+        <Box sx={{ display: 'flex', gap: '2px', flexShrink: 0 }}>
+          <Tooltip title="Mover para cima"><span>
+            <IconButton size="small" disabled={index === 0} onClick={onMoveUp} sx={{ color: 'text.disabled', '&:hover': { color: 'text.primary' }, p: '4px' }}>
+              <ArrowUpwardRoundedIcon sx={{ fontSize: 14 }} />
+            </IconButton>
+          </span></Tooltip>
+          <Tooltip title="Mover para baixo"><span>
+            <IconButton size="small" disabled={index === total - 1} onClick={onMoveDown} sx={{ color: 'text.disabled', '&:hover': { color: 'text.primary' }, p: '4px' }}>
+              <ArrowDownwardRoundedIcon sx={{ fontSize: 14 }} />
+            </IconButton>
+          </span></Tooltip>
+          <Tooltip title={open ? 'Fechar' : 'Editar'}>
+            <IconButton size="small" onClick={() => { setDraft({ ...slide }); setOpen(o => !o); }} sx={{ color: open ? 'primary.main' : 'text.disabled', '&:hover': { color: 'text.primary' }, p: '4px' }}>
+              <EditRoundedIcon sx={{ fontSize: 14 }} />
+            </IconButton>
+          </Tooltip>
+          <Tooltip title="Remover slide">
+            <IconButton size="small" onClick={onDelete} sx={{ color: 'text.disabled', '&:hover': { color: '#ef4444' }, p: '4px' }}>
+              <DeleteRoundedIcon sx={{ fontSize: 14 }} />
+            </IconButton>
+          </Tooltip>
+        </Box>
+      </Box>
+
+      {open && (
+        <Box sx={{ p: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
+          <Box sx={{ display: 'flex', gap: 1 }}>
+            <TextField
+              label="Tag" size="small" fullWidth
+              value={draft.tag}
+              onChange={e => setDraft(d => ({ ...d, tag: e.target.value }))}
+              sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
+            />
+            <Select
+              value={draft.tagColor} size="small"
+              onChange={e => setDraft(d => ({ ...d, tagColor: e.target.value as TagColor }))}
+              sx={{ fontSize: 13, minWidth: 110 }}
+            >
+              {TAG_COLOR_OPTIONS.map(o => (
+                <MenuItem key={o.value} value={o.value} sx={{ fontSize: 12 }}>
+                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
+                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: o.color }} />
+                    {o.label}
+                  </Box>
+                </MenuItem>
+              ))}
+            </Select>
+          </Box>
+          <TextField
+            label="Título" size="small" fullWidth
+            value={draft.title}
+            onChange={e => setDraft(d => ({ ...d, title: e.target.value }))}
+            sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
+          />
+          <TextField
+            label="Texto" size="small" fullWidth multiline minRows={3}
+            value={draft.body}
+            onChange={e => setDraft(d => ({ ...d, body: e.target.value }))}
+            sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
+          />
+          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
+            <Button size="small" variant="outlined" onClick={() => setOpen(false)} sx={{ fontSize: 12, textTransform: 'none' }}>Cancelar</Button>
+            <Button size="small" variant="contained" onClick={handleSave} startIcon={<SaveRoundedIcon sx={{ fontSize: 14 }} />} sx={{ fontSize: 12, textTransform: 'none' }}>Salvar</Button>
+          </Box>
+        </Box>
+      )}
+    </Paper>
+  );
+}
+
+// ─── AdminPage ────────────────────────────────────────────────────────────────
+
+interface AdminPageProps {
+  role: Role;
+  onRoleChange: (r: Role) => void;
+}
+
+export function AdminPage({ role, onRoleChange }: AdminPageProps) {
+  const [tab, setTab] = useState(0);
+  const [data, setData] = useState<PData>(loadPData);
+  const [presenting, setPresenting] = useState(false);
+  const [dirty, setDirty] = useState(false);
+
+  const update = useCallback((updater: (d: PData) => PData) => {
+    setData(d => { const next = updater(d); return next; });
+    setDirty(true);
+  }, []);
+
+  const handleSave = () => {
+    savePData(data);
+    setDirty(false);
+  };
+
+  // ── Slide operations
+  const addSlide = () => {
+    update(d => ({
+      ...d,
+      slides: [...d.slides, { id: genId(), tag: 'Nova Feature', tagColor: 'gold', title: '', body: '' }],
+    }));
+  };
+
+  const updateSlide = (id: string, s: PSlide) => {
+    update(d => ({ ...d, slides: d.slides.map(x => x.id === id ? s : x) }));
+  };
+
+  const deleteSlide = (id: string) => {
+    update(d => ({ ...d, slides: d.slides.filter(x => x.id !== id) }));
+  };
+
+  const moveSlide = (index: number, dir: -1 | 1) => {
+    update(d => {
+      const arr = [...d.slides];
+      const target = index + dir;
+      if (target < 0 || target >= arr.length) return d;
+      [arr[index], arr[target]] = [arr[target], arr[index]];
+      return { ...d, slides: arr };
+    });
+  };
+
+  const ROLE_COLOR: Record<Role, string> = {
+    gestao: '#6366f1', engenharia: '#0ea5e9', documentacao: '#8b5cf6',
+    pmo: '#ffc500', desenvolvimento: '#22c55e', eletrica: '#f59e0b', adm: '#ef4444',
+  };
+
+  return (
+    <>
+      {presenting && <PresentationOverlay data={data} onClose={() => setPresenting(false)} />}
+
+      <Box className="page-enter" sx={{ p: 3, flex: 1 }}>
+        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: '4px', flexWrap: 'wrap', gap: 1 }}>
+          <Box>
+            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '4px' }}>
+              <Typography sx={{ fontSize: 20, fontWeight: 800, color: 'text.primary', letterSpacing: '-.3px' }}>
+                Administrador
+              </Typography>
+              <Chip label="ADM" size="small" sx={{ fontSize: 10, fontWeight: 700, bgcolor: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.25)', height: 18 }} />
+            </Box>
+            <Typography sx={{ fontSize: 13, color: 'text.disabled' }}>
+              Acesso exclusivo · raphael.caveagna@invent-corp.com
+            </Typography>
+          </Box>
+          {dirty && (
+            <Button size="small" variant="contained" onClick={handleSave} startIcon={<SaveRoundedIcon sx={{ fontSize: 14 }} />} sx={{ fontSize: 12, textTransform: 'none', fontWeight: 700 }}>
+              Salvar alterações
+            </Button>
+          )}
+        </Box>
+
+        <Tabs
+          value={tab}
+          onChange={(_, v) => setTab(v)}
+          sx={{
+            borderBottom: '1px solid', borderColor: 'divider', mb: 3, mt: 2.5,
+            '& .MuiTab-root': { fontSize: 12, fontWeight: 600, textTransform: 'none', minHeight: 40, px: 2 },
+            '& .Mui-selected': { color: 'primary.main' },
+            '& .MuiTabs-indicator': { bgcolor: 'primary.main' },
+          }}
+        >
+          <Tab label="Apresentação" icon={<SlideshowRoundedIcon sx={{ fontSize: 16 }} />} iconPosition="start" />
+          <Tab label="Papéis" />
+        </Tabs>
+
+        {/* ── Tab 0: Apresentação ── */}
+        {tab === 0 && (
+          <Box>
+            {/* Header fields */}
+            <Box sx={{ display: 'flex', gap: 1.5, mb: 3, flexWrap: 'wrap', alignItems: 'flex-end' }}>
+              <TextField
+                label="Título da apresentação" size="small" sx={{ flex: 2, minWidth: 220, '& .MuiInputBase-root': { fontSize: 13 } }}
+                value={data.title}
+                onChange={e => update(d => ({ ...d, title: e.target.value }))}
+              />
+              <TextField
+                label="Data / Contexto" size="small" sx={{ width: 160, '& .MuiInputBase-root': { fontSize: 13 } }}
+                value={data.date}
+                onChange={e => update(d => ({ ...d, date: e.target.value }))}
+                placeholder="ex: Julho 2026"
+              />
+              <Button
+                variant="contained" size="small"
+                startIcon={<SlideshowRoundedIcon sx={{ fontSize: 16 }} />}
+                onClick={() => setPresenting(true)}
+                sx={{ fontSize: 13, fontWeight: 700, textTransform: 'none', px: 2.5, height: 40, bgcolor: '#C98A22', '&:hover': { bgcolor: '#B07718' }, flexShrink: 0 }}
+              >
+                Modo Apresentação
+              </Button>
+            </Box>
+
+            {/* Slides */}
+            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
+              <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
+                Tópicos · {data.slides.length}
+              </Typography>
+              <Button size="small" startIcon={<AddRoundedIcon sx={{ fontSize: 14 }} />} onClick={addSlide} sx={{ fontSize: 12, textTransform: 'none', color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
+                Novo tópico
+              </Button>
+            </Box>
+
+            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', mb: 3 }}>
+              {data.slides.map((slide, i) => (
+                <SlideCard
+                  key={slide.id}
+                  slide={slide}
+                  index={i}
+                  total={data.slides.length}
+                  onUpdate={s => updateSlide(slide.id, s)}
+                  onDelete={() => deleteSlide(slide.id)}
+                  onMoveUp={() => moveSlide(i, -1)}
+                  onMoveDown={() => moveSlide(i, 1)}
+                />
+              ))}
+            </Box>
+
+            {/* Próxima Missão */}
+            <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 3, mt: 1 }}>
+              <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#2DB87A', textTransform: 'uppercase', letterSpacing: '0.08em', mb: 1.5 }}>
+                Próxima Missão (callout verde)
+              </Typography>
+              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 2, border: '1px solid rgba(45,184,122,0.2)', borderLeft: '3px solid #2DB87A', borderRadius: '0 6px 6px 0', bgcolor: 'rgba(45,184,122,0.04)' }}>
+                <TextField
+                  label="Label da missão" size="small" fullWidth
+                  value={data.missaoTag}
+                  onChange={e => update(d => ({ ...d, missaoTag: e.target.value }))}
+                  sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
+                  placeholder="ex: Próxima Missão — Infraestrutura"
+                />
+                <TextField
+                  label="Título" size="small" fullWidth
+                  value={data.missaoTitle}
+                  onChange={e => update(d => ({ ...d, missaoTitle: e.target.value }))}
+                  sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
+                />
+                <TextField
+                  label="Texto" size="small" fullWidth multiline minRows={3}
+                  value={data.missaoBody}
+                  onChange={e => update(d => ({ ...d, missaoBody: e.target.value }))}
+                  sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
+                />
+              </Box>
+            </Box>
+          </Box>
+        )}
+
+        {/* ── Tab 1: Papéis ── */}
+        {tab === 1 && (
+          <Box sx={{ maxWidth: 480 }}>
+            <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>
+              Papel atual da sessão
+            </Typography>
+            <Typography sx={{ fontSize: 12, color: 'text.disabled', mb: 2.5 }}>
+              Apenas o administrador pode transitar entre funções. Útil para debugar a plataforma e visualizar o sistema como cada perfil.
+            </Typography>
+
+            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
+              {ROLES.map(r => {
+                const active = role === r.value;
+                return (
+                  <Box
+                    key={r.value}
+                    component="button"
+                    onClick={() => onRoleChange(r.value)}
+                    sx={{
+                      width: '100%', display: 'flex', alignItems: 'center', gap: 1.5,
+                      p: '10px 14px', border: '1px solid', borderRadius: 1.5, cursor: 'pointer',
+                      bgcolor: active ? `${ROLE_COLOR[r.value]}12` : 'transparent',
+                      borderColor: active ? ROLE_COLOR[r.value] : 'divider',
+                      transition: '.15s',
+                      '&:hover': { borderColor: ROLE_COLOR[r.value], bgcolor: `${ROLE_COLOR[r.value]}0A` },
+                    }}
+                  >
+                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: ROLE_COLOR[r.value], flexShrink: 0 }} />
+                    <Typography sx={{ fontSize: 13, fontWeight: active ? 700 : 500, color: active ? ROLE_COLOR[r.value] : 'text.secondary', flex: 1, textAlign: 'left' }}>
+                      {r.label}
+                    </Typography>
+                    {active && (
+                      <Chip label="ativo" size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${ROLE_COLOR[r.value]}20`, color: ROLE_COLOR[r.value], border: `1px solid ${ROLE_COLOR[r.value]}44`, fontWeight: 700 }} />
+                    )}
+                  </Box>
+                );
+              })}
+            </Box>
+          </Box>
+        )}
+      </Box>
+    </>
+  );
+}
diff --git a/src/pages/ConfigPage.tsx b/src/pages/ConfigPage.tsx
index eefb6ef..026347f 100644
--- a/src/pages/ConfigPage.tsx
+++ b/src/pages/ConfigPage.tsx
@@ -11,6 +11,7 @@ import TextField from '@mui/material/TextField';
 import Tooltip from '@mui/material/Tooltip';
 import Typography from '@mui/material/Typography';
 import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
+import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
 import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
 import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
 import EditRoundedIcon from '@mui/icons-material/EditRounded';
@@ -34,7 +35,7 @@ const ROLE_COLOR: Record<Role, string> = {
   adm:             '#ef4444',
 };
 
-export function ConfigPage({ role }: { role?: Role }) {
+export function ConfigPage({ role, isAdmin }: { role?: Role; isAdmin?: boolean }) {
   const [tab, setTab] = useState(0);
 
   // ── Administração
@@ -80,6 +81,22 @@ export function ConfigPage({ role }: { role?: Role }) {
   const listaRolesUsed = ROLES.filter(r => lista.some(i => i.role === r.value));
   const donePct = lista.length > 0 ? Math.round((lista.filter(i => i.done).length / lista.length) * 100) : 0;
 
+  if (!isAdmin) {
+    return (
+      <Box className="page-enter" sx={{ p: 3, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
+        <Box sx={{ textAlign: 'center', maxWidth: 320 }}>
+          <SettingsRoundedIcon sx={{ fontSize: 36, color: 'text.disabled', opacity: 0.3, mb: 1.5 }} />
+          <Typography sx={{ fontSize: 14, fontWeight: 600, color: 'text.secondary', mb: '6px' }}>
+            Configurações
+          </Typography>
+          <Typography sx={{ fontSize: 13, color: 'text.disabled', lineHeight: 1.6 }}>
+            Nenhuma configuração disponível para o seu perfil no momento.
+          </Typography>
+        </Box>
+      </Box>
+    );
+  }
+
   return (
     <Box className="page-enter" sx={{ p: 3, flex: 1 }}>
       <Typography sx={{ fontSize: 20, fontWeight: 800, color: 'text.primary', letterSpacing: '-.3px', mb: '4px' }}>
diff --git a/src/pages/Documentacao/ApontamentoHoras.tsx b/src/pages/Documentacao/ApontamentoHoras.tsx
new file mode 100644
index 0000000..ebee4d1
--- /dev/null
+++ b/src/pages/Documentacao/ApontamentoHoras.tsx
@@ -0,0 +1,1376 @@
+import { useState, useEffect } from 'react';
+import Box from '@mui/material/Box';
+import Paper from '@mui/material/Paper';
+import Typography from '@mui/material/Typography';
+import Button from '@mui/material/Button';
+import IconButton from '@mui/material/IconButton';
+import TextField from '@mui/material/TextField';
+import Select from '@mui/material/Select';
+import MenuItem from '@mui/material/MenuItem';
+import Dialog from '@mui/material/Dialog';
+import DialogTitle from '@mui/material/DialogTitle';
+import DialogContent from '@mui/material/DialogContent';
+import DialogActions from '@mui/material/DialogActions';
+import FormControl from '@mui/material/FormControl';
+import InputLabel from '@mui/material/InputLabel';
+import Snackbar from '@mui/material/Snackbar';
+import Alert from '@mui/material/Alert';
+import Tooltip from '@mui/material/Tooltip';
+import ExcelJS from 'exceljs';
+import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
+import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
+import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
+import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
+import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
+import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
+import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
+import AddRoundedIcon from '@mui/icons-material/AddRounded';
+import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
+import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
+import EditRoundedIcon from '@mui/icons-material/EditRounded';
+import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
+import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
+import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
+import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
+import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
+
+// ─── Types ────────────────────────────────────────────────────────────────────
+interface ApontProfile {
+  nome: string;
+  recurso: string;
+  atividade: string;
+  faseControladora: string;
+}
+
+interface ApontProject {
+  id: number;
+  nome: string;
+  ativo: boolean;
+}
+
+interface Bloco { ini: number; fim: number; }
+
+interface Atividade {
+  id: number;
+  projetoId: number;
+  descricao: string;
+  peso: number;
+  ordem: number;
+  blocos: Bloco[];
+  ajustada: boolean;
+}
+
+type DayTipo = 'NORMAL' | 'FERIADO' | 'FERIAS' | 'ATESTADO' | 'FOLGA' | 'CUSTOM';
+
+interface DayData {
+  tipo: DayTipo;
+  cargaCustom?: number;
+  atividades: Atividade[];
+}
+
+interface ApontState {
+  profile: ApontProfile;
+  projects: ApontProject[];
+  nextProjId: number;
+  nextActId: number;
+  days: Record<string, DayData>;
+  exports: Record<string, string>;
+}
+
+interface ApontHistoryEntry {
+  id: string;
+  userName: string;
+  weekKey: string;
+  weekNum: number;
+  weekYear: number;
+  mondayISO: string;
+  weekLabel: string;
+  exportedAt: string;
+  contentHash: string;
+  daysSnapshot: Record<string, DayData>;
+  projectsSnapshot: ApontProject[];
+  profile: ApontProfile;
+}
+
+// ─── Constants ────────────────────────────────────────────────────────────────
+const LUNCH = { ini: 11.5 * 60, fim: 12.5 * 60 };
+const JORNADA: Record<number, { ini: number; fim: number }> = {
+  1: { ini: 480, fim: 1080 }, 2: { ini: 480, fim: 1080 },
+  3: { ini: 480, fim: 1080 }, 4: { ini: 480, fim: 1080 },
+  5: { ini: 480, fim: 1020 },
+};
+const GRAN = 30;
+const TIPOS_OFF: DayTipo[] = ['FERIADO', 'FERIAS', 'ATESTADO', 'FOLGA'];
+const TIPO_LABEL: Record<string, string> = {
+  FERIADO: 'Feriado', FERIAS: 'Férias', ATESTADO: 'Atestado',
+  FOLGA: 'Folga', CUSTOM: 'Jornada customizada',
+};
+const DOW_SHORT = ['SEG', 'TER', 'QUA', 'QUI', 'SEX'];
+const DOW_FULL = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'];
+
+const PROJ_COLORS: [string, string][] = [
+  ['rgba(47,93,138,0.20)', '#7EB3E0'],
+  ['rgba(46,125,91,0.20)', '#6DCCA0'],
+  ['rgba(255,197,0,0.15)', '#FFC500'],
+  ['rgba(138,61,105,0.20)', '#E090C0'],
+  ['rgba(87,79,160,0.20)', '#A89FE0'],
+  ['rgba(92,102,80,0.20)', '#A0B090'],
+  ['rgba(161,78,44,0.20)', '#E09070'],
+  ['rgba(34,112,122,0.20)', '#70C0CA'],
+];
+
+const STATUS_DOT: Record<string, string> = {
+  vazio: '#555', rascunho: '#FFC500', distribuido: '#6DCCA0', ajustado: '#7EB3E0',
+};
+
+// ─── Date helpers ─────────────────────────────────────────────────────────────
+function mondayOf(d: Date): Date {
+  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
+  x.setDate(x.getDate() - (x.getDay() + 6) % 7);
+  return x;
+}
+
+function isoWeek(d: Date): { week: number; year: number } {
+  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
+  const day = (date.getUTCDay() + 6) % 7;
+  date.setUTCDate(date.getUTCDate() - day + 3);
+  const firstThu = new Date(Date.UTC(date.getUTCFullYear(), 0, 4));
+  firstThu.setUTCDate(firstThu.getUTCDate() - (firstThu.getUTCDay() + 6) % 7 + 3);
+  return { week: 1 + Math.round((date.getTime() - firstThu.getTime()) / (7 * 864e5)), year: date.getUTCFullYear() };
+}
+
+function fmtKey(d: Date): string {
+  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
+}
+
+function addDays(d: Date, n: number): Date {
+  const x = new Date(d); x.setDate(x.getDate() + n); return x;
+}
+
+function fmtBR(d: Date): string {
+  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
+}
+
+function fmtShort(d: Date): string {
+  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
+}
+
+function hm(min: number): string {
+  return `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
+}
+
+function hms(min: number): string { return hm(min) + ':00'; }
+
+function durFmt(min: number): string {
+  const h = Math.floor(min / 60), m = min % 60;
+  return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`;
+}
+
+function getInitials(name: string): string {
+  const p = name.trim().split(/\s+/);
+  return p.length === 1 ? p[0].slice(0, 2).toUpperCase() : (p[0][0] + '.' + p[p.length - 1][0]).toUpperCase();
+}
+
+function weekDates(monday: Date): Date[] { return [0, 1, 2, 3, 4].map(i => addDays(monday, i)); }
+function wkKey(monday: Date): string { const w = isoWeek(monday); return `${w.year}-S${w.week}`; }
+
+// ─── Domain helpers ───────────────────────────────────────────────────────────
+function cargaMin(dateObj: Date, day: DayData): number {
+  if (TIPOS_OFF.includes(day.tipo)) return 0;
+  if (day.tipo === 'CUSTOM' && day.cargaCustom) return Math.round(day.cargaCustom * 60);
+  const dw = ((dateObj.getDay() + 6) % 7) + 1;
+  if (dw > 5) return 0;
+  return JORNADA[dw].fim - JORNADA[dw].ini - (LUNCH.fim - LUNCH.ini);
+}
+
+function jornadaFim(dateObj: Date, day: DayData): number {
+  const dw = ((dateObj.getDay() + 6) % 7) + 1;
+  if (day.tipo === 'CUSTOM' && day.cargaCustom) {
+    const total = Math.round(day.cargaCustom * 60);
+    const fim = JORNADA[1].ini + total;
+    return fim > LUNCH.ini ? fim + (LUNCH.fim - LUNCH.ini) : fim;
+  }
+  return dw <= 5 ? JORNADA[dw].fim : 18 * 60;
+}
+
+function dayStatus(day: DayData): { cls: string; label: string } {
+  if (!day.atividades.length) return { cls: 'vazio', label: 'Vazio' };
+  if (day.atividades.some(a => a.ajustada)) return { cls: 'ajustado', label: 'Ajustado' };
+  if (day.atividades.every(a => a.blocos.length)) return { cls: 'distribuido', label: 'Distribuído' };
+  return { cls: 'rascunho', label: 'Rascunho' };
+}
+
+function projColor(id: number): [string, string] { return PROJ_COLORS[id % PROJ_COLORS.length]; }
+
+// ─── Brazilian national holidays ──────────────────────────────────────────────
+// Meeus/Jones/Butcher algorithm — works for Gregorian calendar (1583+)
+function easterDate(year: number): Date {
+  const a = year % 19, b = Math.floor(year / 100), c = year % 100;
+  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
+  const g = Math.floor((b - f + 1) / 3);
+  const h = (19 * a + b - d - g + 15) % 30;
+  const i = Math.floor(c / 4), k = c % 4;
+  const l = (32 + 2 * e + 2 * i - h - k) % 7;
+  const m = Math.floor((a + 11 * h + 22 * l) / 451);
+  const month = Math.floor((h + l - 7 * m + 114) / 31);
+  const day = ((h + l - 7 * m + 114) % 31) + 1;
+  return new Date(year, month - 1, day);
+}
+
+function brazilianHolidays(year: number): Set<string> {
+  const s = new Set<string>();
+  const add = (m: number, d: number) => s.add(fmtKey(new Date(year, m - 1, d)));
+  // Fixed national holidays
+  add(1, 1);   // Confraternização Universal
+  add(4, 21);  // Tiradentes
+  add(5, 1);   // Dia do Trabalho
+  add(9, 7);   // Independência do Brasil
+  add(10, 12); // Nossa Senhora Aparecida
+  add(11, 2);  // Finados
+  add(11, 15); // Proclamação da República
+  add(11, 20); // Consciência Negra (nacional desde 2024)
+  add(12, 25); // Natal
+  // Mobile holidays based on Easter (Páscoa)
+  const easter = easterDate(year);
+  const mobile = (offset: number) => {
+    const d = new Date(easter); d.setDate(d.getDate() + offset); s.add(fmtKey(d));
+  };
+  mobile(-2);  // Sexta-feira Santa (Good Friday)
+  mobile(60);  // Corpus Christi
+  return s;
+}
+
+// ─── Distribution algorithm ───────────────────────────────────────────────────
+function distributeActivities(
+  acts: Atividade[], dateObj: Date, day: DayData,
+  lunch: { ini: number; fim: number } = LUNCH,
+): { ok: boolean; error?: string; result: Atividade[] } {
+  if (TIPOS_OFF.includes(day.tipo)) return { ok: true, result: acts };
+  const carga = cargaMin(dateObj, day);
+  const slots = Math.round(carga / GRAN);
+  if (acts.length > slots) return { ok: false, error: `Há mais atividades (${acts.length}) do que blocos de 30 min (${slots}). Consolide atividades.`, result: acts };
+
+  const sorted = [...acts].sort((a, b) => a.ordem - b.ordem);
+  const somaPesos = sorted.reduce((s, a) => s + Number(a.peso || 1), 0);
+  const raw = sorted.map(a => (Number(a.peso || 1) / somaPesos) * slots);
+  const base = raw.map(r => Math.max(1, Math.floor(r)));
+  let rem = slots - base.reduce((s, b) => s + b, 0);
+
+  if (rem > 0) {
+    const order = raw.map((r, i) => ({ i, frac: r - Math.floor(r), peso: sorted[i].peso }))
+      .sort((a, b) => b.frac - a.frac || b.peso - a.peso);
+    let k = 0;
+    while (rem > 0) { base[order[k % order.length].i]++; rem--; k++; }
+  } else {
+    while (rem < 0) {
+      let idx = -1, best = -1;
+      base.forEach((b, i) => { if (b > 1 && b > best) { best = b; idx = i; } });
+      if (idx < 0) break;
+      base[idx]--; rem++;
+    }
+  }
+
+  const fimJ = jornadaFim(dateObj, day);
+  let cursor = JORNADA[1].ini;
+
+  const newActs = sorted.map((a, i) => {
+    let restante = base[i] * GRAN;
+    const blocos: Bloco[] = [];
+    while (restante > 0 && cursor < fimJ) {
+      if (cursor >= lunch.ini && cursor < lunch.fim) cursor = lunch.fim;
+      const limite = cursor < lunch.ini && lunch.ini < fimJ ? Math.min(lunch.ini, fimJ) : fimJ;
+      const segFim = Math.min(cursor + restante, limite);
+      if (segFim > cursor) { blocos.push({ ini: cursor, fim: segFim }); restante -= segFim - cursor; cursor = segFim; }
+      else break;
+    }
+    return { ...a, blocos, ajustada: false };
+  });
+
+  return { ok: true, result: newActs.sort((a, b) => a.ordem - b.ordem) };
+}
+
+// ─── Excel builder (shared between live export and history re-export) ─────────
+// Only first + last name in the Colaborador column regardless of how many names the user has
+function twoNames(name: string): string {
+  const p = name.trim().split(/\s+/);
+  return p.length <= 2 ? name.trim() : `${p[0]} ${p[p.length - 1]}`;
+}
+
+function buildExcelRows(
+  monday: Date,
+  days: Record<string, DayData>,
+  profile: ApontProfile,
+  w: { week: number; year: number },
+  projects: ApontProject[],
+): (string | number)[][] {
+  const header = ['Colaborador', 'Projeto', 'Data', 'Dia da semana', 'Semana', 'Hora de Início', 'Hora Termino', 'Horas', 'Horas Decimais', 'Fase', 'Atividade', 'Observacao', 'Fase Controladora', 'Setor', 'Recurso'];
+  const rows: (string | number)[][] = [header];
+  weekDates(monday).forEach((d, i) => {
+    const day = getDay(days, fmtKey(d));
+    if (TIPOS_OFF.includes(day.tipo)) return;
+    [...day.atividades].sort((a, b) => a.ordem - b.ordem).forEach(a => {
+      const p = projects.find(x => x.id === a.projetoId);
+      [...a.blocos].sort((x, y) => x.ini - y.ini).forEach(b => {
+        const dur = b.fim - b.ini;
+        rows.push([
+          twoNames(profile.nome), p?.nome ?? '?', fmtBR(d), DOW_FULL[i], w.week,
+          hms(b.ini), hms(b.fim), hms(dur),
+          Number((dur / 60).toFixed(2)),
+          '', profile.atividade, a.descricao, profile.faseControladora,
+          'Documentação', profile.recurso,
+        ]);
+      });
+    });
+  });
+  return rows;
+}
+
+async function writeExcel(rows: (string | number)[][], filename: string): Promise<void> {
+  const wb = new ExcelJS.Workbook();
+  const ws = wb.addWorksheet('SISTEMAS');
+
+  // Column widths (chars)
+  const colWidths = [18, 26, 12, 16, 9, 13, 13, 11, 15, 9, 12, 55, 24, 14, 10];
+  ws.columns = colWidths.map(width => ({ width }));
+
+  // "HH:MM:SS" string → fraction of day (Excel time serial)
+  const toFrac = (v: string | number): number => {
+    const p = String(v).split(':').map(Number);
+    return (p[0] * 3600 + (p[1] || 0) * 60 + (p[2] || 0)) / 86400;
+  };
+
+  // Header row — gold background, WHITE bold Calibri 11, centered
+  const headerRow = ws.addRow(rows[0] as string[]);
+  headerRow.height = 35.27;
+  headerRow.eachCell(cell => {
+    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFC000' } };
+    cell.font = { name: 'Calibri', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
+    cell.alignment = { horizontal: 'center', vertical: 'middle' };
+  });
+
+  // Data rows — alternating white / light gray, centered
+  // Columns with special handling (0-indexed):
+  //   2  Data           → real Date value   (dd/mm/yyyy)
+  //   4  Semana         → formula WEEKNUM   (0)
+  //   5  Hora de Início → time fraction     (hh:mm:ss)
+  //   6  Hora Termino   → time fraction     (hh:mm:ss)
+  //   7  Horas          → formula G-F       ([h]:mm:ss)
+  //   8  Horas Decimais → formula HOUR+MIN  (0.00)
+  rows.slice(1).forEach((row, i) => {
+    const r = i + 2; // 1-indexed Excel row (row 1 = header)
+    const wsRow = ws.addRow([]);
+    const bg = i % 2 === 0 ? 'FFFFFFFF' : 'FFF2F2F2';
+
+    const sc = (ci: number, numFmt?: string) => {
+      const c = wsRow.getCell(ci + 1);
+      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
+      c.font = { name: 'Calibri', size: 10, color: { argb: 'FF000000' } };
+      c.alignment = { horizontal: 'center', vertical: 'middle' };
+      if (numFmt) c.numFmt = numFmt;
+      return c;
+    };
+
+    row.forEach((val, ci) => {
+      switch (ci) {
+        case 2: { // Data — real date value so WEEKNUM formula works
+          const [dd, mm, yy] = String(val).split('/').map(Number);
+          sc(ci, 'dd/mm/yyyy').value = new Date(yy, mm - 1, dd);
+          break;
+        }
+        case 4: // Semana — WEEKNUM formula (type 1 = week starts Sunday, as per original)
+          sc(ci, '0').value = { formula: `IF(C${r}="","",WEEKNUM(C${r},1))`, result: Number(val) };
+          break;
+        case 5: // Hora de Início — real time serial
+        case 6: // Hora Termino
+          sc(ci, 'hh:mm:ss').value = toFrac(val);
+          break;
+        case 7: // Horas — formula: Hora Termino − Hora de Início
+          sc(ci, '[h]:mm:ss').value = { formula: `G${r}-F${r}`, result: toFrac(val) };
+          break;
+        case 8: // Horas Decimais — formula: HOUR(Horas)+MINUTE(Horas)/60
+          sc(ci, '0.00').value = { formula: `HOUR(H${r})+MINUTE(H${r})/60`, result: Number(val) };
+          break;
+        default:
+          sc(ci).value = val === '' ? null : val;
+      }
+    });
+
+    wsRow.height = 35.27; // ExcelJS scales by 18/23 before writing; 35.27 × (18/23) ≈ 27.6 in Excel
+  });
+
+  // Auto-filter dropdowns on header
+  const lastColLetter = String.fromCharCode(64 + (rows[0].length));
+  ws.autoFilter = `A1:${lastColLetter}1`;
+
+  // Download
+  const buffer = await wb.xlsx.writeBuffer();
+  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
+  const url = URL.createObjectURL(blob);
+  const a = document.createElement('a');
+  a.href = url;
+  a.download = filename + '.xlsx';
+  document.body.appendChild(a);
+  a.click();
+  document.body.removeChild(a);
+  URL.revokeObjectURL(url);
+}
+
+// ─── Persistence ──────────────────────────────────────────────────────────────
+const STORAGE_KEY = 'nexus_apontamento_v1';
+const HISTORY_KEY = 'nexus_apontamento_history_v1';
+
+function loadApontState(): ApontState {
+  try {
+    const raw = localStorage.getItem(STORAGE_KEY);
+    if (raw) {
+      const saved = JSON.parse(raw) as ApontState;
+      // If nome is still the default placeholder, sync from active session
+      if (saved.profile.nome === 'Colaborador') {
+        try {
+          const s = JSON.parse(localStorage.getItem('nexus_session') ?? 'null') as { name?: string } | null;
+          if (s?.name) { saved.profile.nome = s.name; saved.profile.recurso = getInitials(s.name); }
+        } catch { /* empty */ }
+      }
+      return saved;
+    }
+  } catch { /* empty */ }
+  return mkInitialState();
+}
+
+function mkInitialState(): ApontState {
+  let nome = 'Colaborador';
+  try {
+    const s = JSON.parse(localStorage.getItem('nexus_session') ?? 'null') as { name?: string } | null;
+    if (s?.name) nome = s.name;
+  } catch { /* empty */ }
+  return {
+    profile: { nome, recurso: getInitials(nome), atividade: 'Execução', faseControladora: 'Fase 09 - Documentação' },
+    projects: [{ id: 1, nome: 'INTERNO', ativo: true }, { id: 2, nome: 'NEXUS', ativo: true }],
+    nextProjId: 3, nextActId: 10,
+    days: {}, exports: {},
+  };
+}
+
+function getDay(days: Record<string, DayData>, key: string): DayData {
+  return days[key] ?? { tipo: 'NORMAL', atividades: [] };
+}
+
+function weekHash(monday: Date, days: Record<string, DayData>): string {
+  return JSON.stringify(weekDates(monday).map(d => {
+    const day = getDay(days, fmtKey(d));
+    return [day.tipo, day.cargaCustom ?? 0, day.atividades.map(a => [a.projetoId, a.descricao, a.peso, a.ordem, a.blocos])];
+  }));
+}
+
+function loadHistory(userName: string): ApontHistoryEntry[] {
+  try {
+    const raw = localStorage.getItem(HISTORY_KEY);
+    const all: ApontHistoryEntry[] = raw ? (JSON.parse(raw) as ApontHistoryEntry[]) : [];
+    return all.filter(e => e.userName === userName);
+  } catch { return []; }
+}
+
+function upsertHistoryEntry(entry: ApontHistoryEntry): void {
+  try {
+    const raw = localStorage.getItem(HISTORY_KEY);
+    const all: ApontHistoryEntry[] = raw ? (JSON.parse(raw) as ApontHistoryEntry[]) : [];
+    // Same week + same content = update date only (dedup)
+    const dupIdx = all.findIndex(e => e.userName === entry.userName && e.weekKey === entry.weekKey && e.contentHash === entry.contentHash);
+    if (dupIdx >= 0) {
+      all[dupIdx].exportedAt = entry.exportedAt;
+    } else {
+      all.push(entry);
+    }
+    localStorage.setItem(HISTORY_KEY, JSON.stringify(all));
+  } catch { /* empty */ }
+}
+
+function deleteHistoryById(id: string): void {
+  try {
+    const raw = localStorage.getItem(HISTORY_KEY);
+    const all: ApontHistoryEntry[] = raw ? (JSON.parse(raw) as ApontHistoryEntry[]) : [];
+    localStorage.setItem(HISTORY_KEY, JSON.stringify(all.filter(e => e.id !== id)));
+  } catch { /* empty */ }
+}
+
+// ─── Profile Modal ────────────────────────────────────────────────────────────
+function ProfileModal({ open, profile, onClose, onSave }: {
+  open: boolean; profile: ApontProfile;
+  onClose: () => void; onSave: (p: ApontProfile) => void;
+}) {
+  const [f, setF] = useState(profile);
+  useEffect(() => { if (open) setF(profile); }, [open, profile]);
+  return (
+    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
+      <DialogTitle>Perfil de apontamento</DialogTitle>
+      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '16px !important' }}>
+        <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
+          Estes valores preenchem as colunas fixas do Excel. Configure uma vez.
+        </Typography>
+        <TextField label="Colaborador" value={f.nome} onChange={e => setF(x => ({ ...x, nome: e.target.value }))} />
+        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
+          <TextField label="Recurso (sigla)" value={f.recurso} onChange={e => setF(x => ({ ...x, recurso: e.target.value }))} helperText='Ex: "R.C"' />
+          <TextField label="Atividade" value={f.atividade} onChange={e => setF(x => ({ ...x, atividade: e.target.value }))} helperText='Padrão: "Execução"' />
+        </Box>
+        <TextField label="Fase Controladora" value={f.faseControladora} onChange={e => setF(x => ({ ...x, faseControladora: e.target.value }))} helperText='Ex: "Fase 09 - Documentação"' />
+        <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>Setor: <strong>Documentação</strong> · preenchido automaticamente</Typography>
+      </DialogContent>
+      <DialogActions>
+        <Button onClick={onClose} color="inherit">Cancelar</Button>
+        <Button variant="contained" onClick={() => onSave(f)}>Salvar</Button>
+      </DialogActions>
+    </Dialog>
+  );
+}
+
+// ─── Projects Modal ───────────────────────────────────────────────────────────
+function ProjectsModal({ open, projects, onClose, onAdd, onToggle }: {
+  open: boolean; projects: ApontProject[];
+  onClose: () => void; onAdd: (nome: string) => void; onToggle: (id: number) => void;
+}) {
+  const [newNome, setNewNome] = useState('');
+  const handleAdd = () => {
+    const nome = newNome.trim();
+    if (!nome) return;
+    if (projects.some(p => p.nome.toLowerCase() === nome.toLowerCase())) { alert('Já existe um projeto com este nome.'); return; }
+    onAdd(nome); setNewNome('');
+  };
+  return (
+    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
+      <DialogTitle>Projetos</DialogTitle>
+      <DialogContent sx={{ pt: '8px !important' }}>
+        <Typography sx={{ fontSize: 12, color: 'text.secondary', mb: 2 }}>
+          Projetos inativos não aparecem em novos apontamentos, mas permanecem no histórico.
+        </Typography>
+        <Paper sx={{ maxHeight: 280, overflow: 'auto', mb: 2 }}>
+          {projects.map(p => (
+            <Box key={p.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1.25, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { borderBottom: 'none' } }}>
+              <Typography sx={{ fontSize: 13, fontWeight: 600, color: p.ativo ? 'text.primary' : 'text.disabled', textDecoration: p.ativo ? 'none' : 'line-through' }}>
+                {p.nome}
+              </Typography>
+              <Button size="small" color="inherit" onClick={() => onToggle(p.id)} sx={{ fontSize: 11, minWidth: 0 }}>
+                {p.ativo ? 'Inativar' : 'Reativar'}
+              </Button>
+            </Box>
+          ))}
+        </Paper>
+        <Box sx={{ display: 'flex', gap: 1 }}>
+          <TextField size="small" fullWidth placeholder='Ex.: I25.201 - NOVO CLIENTE' value={newNome}
+            onChange={e => setNewNome(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') handleAdd(); }} />
+          <Button variant="contained" onClick={handleAdd} sx={{ whiteSpace: 'nowrap' }}>Adicionar</Button>
+        </Box>
+      </DialogContent>
+      <DialogActions><Button onClick={onClose} color="inherit">Fechar</Button></DialogActions>
+    </Dialog>
+  );
+}
+
+// ─── DayType Modal ────────────────────────────────────────────────────────────
+function DayTypeModal({ open, dayKey, tipo, cargaCustom, onClose, onSave }: {
+  open: boolean; dayKey: string; tipo: DayTipo; cargaCustom?: number;
+  onClose: () => void; onSave: (tipo: DayTipo, cargaCustom?: number) => void;
+}) {
+  const [selTipo, setSelTipo] = useState<DayTipo>(tipo);
+  const [selCarga, setSelCarga] = useState(cargaCustom ?? 4);
+  useEffect(() => { if (open) { setSelTipo(tipo); setSelCarga(cargaCustom ?? 4); } }, [open, tipo, cargaCustom]);
+  const d = new Date(dayKey + 'T12:00:00');
+  return (
+    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
+      <DialogTitle>Tipo de dia · {DOW_FULL[(d.getDay() + 6) % 7]} {fmtShort(d)}</DialogTitle>
+      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '16px !important' }}>
+        <FormControl fullWidth size="small">
+          <InputLabel>Tipo</InputLabel>
+          <Select label="Tipo" value={selTipo} onChange={e => setSelTipo(e.target.value as DayTipo)}>
+            <MenuItem value="NORMAL">Normal (jornada padrão)</MenuItem>
+            <MenuItem value="FERIADO">Feriado</MenuItem>
+            <MenuItem value="FERIAS">Férias</MenuItem>
+            <MenuItem value="ATESTADO">Atestado</MenuItem>
+            <MenuItem value="FOLGA">Folga</MenuItem>
+            <MenuItem value="CUSTOM">Jornada customizada</MenuItem>
+          </Select>
+        </FormControl>
+        {selTipo === 'CUSTOM' && (
+          <TextField label="Carga líquida do dia (horas)" type="number" size="small" value={selCarga}
+            onChange={e => setSelCarga(Number(e.target.value))} inputProps={{ min: 0.5, max: 14, step: 0.5 }}
+            helperText="Começa às 08:00, respeita almoço se necessário" />
+        )}
+      </DialogContent>
+      <DialogActions>
+        <Button onClick={onClose} color="inherit">Cancelar</Button>
+        <Button variant="contained" onClick={() => onSave(selTipo, selTipo === 'CUSTOM' ? selCarga : undefined)}>Salvar</Button>
+      </DialogActions>
+    </Dialog>
+  );
+}
+
+// ─── Adjust Modal ─────────────────────────────────────────────────────────────
+interface AdjRow { actId: number; nome: string; desc: string; ini: number; fim: number; }
+
+const LUNCH_OPTIONS = [
+  { label: '11:00', ini: 11 * 60 },
+  { label: '11:30', ini: 11 * 60 + 30 },
+  { label: '12:00', ini: 12 * 60 },
+  { label: '12:30', ini: 12 * 60 + 30 },
+  { label: '13:00', ini: 13 * 60 },
+];
+
+function AdjustModal({ open, dayKey, day, projects, onClose, onSave }: {
+  open: boolean; dayKey: string; day: DayData; projects: ApontProject[];
+  onClose: () => void; onSave: (updated: Atividade[]) => void;
+}) {
+  const [rows, setRows] = useState<AdjRow[]>([]);
+  const [lunchIni, setLunchIni] = useState(LUNCH.ini);
+
+  useEffect(() => {
+    if (!open) return;
+    setLunchIni(LUNCH.ini);
+    const r: AdjRow[] = [];
+    [...day.atividades].sort((a, b) => a.ordem - b.ordem).forEach(a => {
+      const p = projects.find(x => x.id === a.projetoId);
+      a.blocos.forEach(b => r.push({ actId: a.id, nome: p?.nome ?? '?', desc: a.descricao, ini: b.ini, fim: b.fim }));
+    });
+    setRows(r);
+  }, [open, day, projects]);
+
+  const d = new Date(dayKey + 'T12:00:00');
+  const carga = cargaMin(d, day);
+  const lunchFim = lunchIni + 60;
+  const customLunch = { ini: lunchIni, fim: lunchFim };
+
+  const sorted = [...rows].sort((a, b) => a.ini - b.ini);
+  const total = rows.reduce((s, r) => s + Math.max(0, r.fim - r.ini), 0);
+
+  const errs = new Set<string>();
+  sorted.forEach((r, i) => {
+    if (r.fim <= r.ini) errs.add('Bloco com término antes do início.');
+    if (r.ini < JORNADA[1].ini) errs.add('Bloco antes das 08:00.');
+    if (r.ini < lunchFim && r.fim > lunchIni) errs.add(`Bloco sobrepõe o almoço (${hm(lunchIni)}–${hm(lunchFim)}).`);
+    if (i > 0 && r.ini < sorted[i - 1].fim) errs.add('Blocos sobrepostos.');
+  });
+  const hasErr = errs.size > 0;
+
+  const setField = (origIdx: number, field: 'ini' | 'fim', val: string) => {
+    const [h, m] = val.split(':').map(Number);
+    const min = Math.round((h * 60 + m) / GRAN) * GRAN;
+    setRows(prev => prev.map((r, i) => i === origIdx ? { ...r, [field]: min } : r));
+  };
+
+  const handleRedistribute = () => {
+    const { ok, error, result } = distributeActivities(day.atividades, d, day, customLunch);
+    if (!ok) { alert(error); return; }
+    const r: AdjRow[] = [];
+    [...result].sort((a, b) => a.ordem - b.ordem).forEach(a => {
+      const p = projects.find(x => x.id === a.projetoId);
+      a.blocos.forEach(b => r.push({ actId: a.id, nome: p?.nome ?? '?', desc: a.descricao, ini: b.ini, fim: b.fim }));
+    });
+    setRows(r);
+  };
+
+  const handleSave = () => {
+    if (hasErr) return;
+    if (total !== carga && !confirm(`Total alocado (${durFmt(total)}) difere da carga (${durFmt(carga)}). Pode ser hora extra. Salvar?`)) return;
+    const updated = day.atividades.map(a => {
+      const aRows = rows.filter(r => r.actId === a.id).sort((x, y) => x.ini - y.ini);
+      return aRows.length ? { ...a, blocos: aRows.map(r => ({ ini: r.ini, fim: r.fim })), ajustada: true } : a;
+    });
+    onSave(updated);
+  };
+
+  const timeInput = (val: number, onChange: (v: string) => void) => (
+    <input type="time" step={1800} value={hm(val)} onChange={e => onChange(e.target.value)}
+      style={{ fontFamily: 'monospace', fontSize: 12, padding: '4px 6px', background: '#1a1a1a', border: '1px solid #3a3a3a', borderRadius: 6, color: '#e0e0e0', width: '100%' }} />
+  );
+
+  return (
+    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
+      <DialogTitle>Ajustar horas · {DOW_FULL[(d.getDay() + 6) % 7]} {fmtShort(d)}</DialogTitle>
+      <DialogContent sx={{ pt: '8px !important' }}>
+        {/* Lunch time picker */}
+        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, p: 1.25, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 1.5, border: '1px solid', borderColor: 'divider' }}>
+          <Typography sx={{ fontSize: 12, color: 'text.secondary', flexShrink: 0 }}>Horário do almoço:</Typography>
+          <Box sx={{ display: 'flex', gap: 0.5 }}>
+            {LUNCH_OPTIONS.map(opt => (
+              <Button key={opt.ini} size="small" variant={lunchIni === opt.ini ? 'contained' : 'outlined'}
+                color={lunchIni === opt.ini ? 'primary' : 'inherit'}
+                onClick={() => setLunchIni(opt.ini)}
+                sx={{ fontSize: 11, py: 0.3, px: 1, minWidth: 0 }}>
+                {opt.label}
+              </Button>
+            ))}
+          </Box>
+          <Button size="small" variant="outlined" color="primary" onClick={handleRedistribute}
+            sx={{ fontSize: 11, py: 0.3, ml: 'auto', whiteSpace: 'nowrap' }}>
+            Redistribuir
+          </Button>
+        </Box>
+
+        <Typography sx={{ fontSize: 12, color: 'text.secondary', mb: 1.5 }}>
+          Passos de 30 min. Almoço ({hm(lunchIni)}–{hm(lunchFim)}) bloqueado.
+        </Typography>
+
+        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
+          {sorted.map((r, i) => {
+            const origIdx = rows.indexOf(r);
+            const showLunch = r.ini >= lunchFim && (i === 0 || sorted[i - 1].ini < lunchFim);
+            const hasRowErr = r.fim <= r.ini || r.ini < JORNADA[1].ini || (r.ini < lunchFim && r.fim > lunchIni) || (i > 0 && r.ini < sorted[i - 1].fim);
+            return (
+              <Box key={origIdx}>
+                {showLunch && (
+                  <Box sx={{ textAlign: 'center', fontSize: 11, color: 'text.disabled', py: 0.5, mb: 0.75, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 1 }}>
+                    Almoço · {hm(lunchIni)} – {hm(lunchFim)}
+                  </Box>
+                )}
+                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 88px auto 88px 52px', gap: 1, alignItems: 'center', p: 1, border: '1px solid', borderColor: hasRowErr ? 'error.main' : 'divider', borderRadius: 1.5, bgcolor: hasRowErr ? 'rgba(220,38,38,0.06)' : 'transparent' }}>
+                  <Box sx={{ overflow: 'hidden' }}>
+                    <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.primary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.nome}</Typography>
+                    <Typography sx={{ fontSize: 10, color: 'text.disabled', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.desc}</Typography>
+                  </Box>
+                  {timeInput(r.ini, v => setField(origIdx, 'ini', v))}
+                  <Typography sx={{ fontSize: 11, color: 'text.disabled', textAlign: 'center' }}>→</Typography>
+                  {timeInput(r.fim, v => setField(origIdx, 'fim', v))}
+                  <Typography sx={{ fontSize: 11, color: 'text.secondary', textAlign: 'right', fontFamily: 'monospace' }}>
+                    {durFmt(Math.max(0, r.fim - r.ini))}
+                  </Typography>
+                </Box>
+              </Box>
+            );
+          })}
+        </Box>
+        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
+          <Typography sx={{ fontSize: 12, color: total !== carga ? 'warning.main' : 'text.secondary' }}>Total alocado</Typography>
+          <Typography sx={{ fontSize: 13, fontFamily: 'monospace', color: total !== carga ? 'warning.main' : 'success.main', fontWeight: 700 }}>
+            {durFmt(total)} / {durFmt(carga)} {total !== carga ? '⚠' : '✓'}
+          </Typography>
+        </Box>
+        {[...errs].map((e, i) => <Alert key={i} severity="error" sx={{ mt: 1, fontSize: 11 }}>{e}</Alert>)}
+      </DialogContent>
+      <DialogActions>
+        <Button onClick={onClose} color="inherit">Cancelar</Button>
+        <Button variant="contained" disabled={hasErr} onClick={handleSave}>Salvar ajustes</Button>
+      </DialogActions>
+    </Dialog>
+  );
+}
+
+// ─── History Modal ────────────────────────────────────────────────────────────
+function HistoryModal({ open, userName, onClose }: {
+  open: boolean; userName: string; onClose: () => void;
+}) {
+  const [entries, setEntries] = useState<ApontHistoryEntry[]>([]);
+
+  useEffect(() => {
+    if (open) {
+      setEntries(
+        loadHistory(userName).sort((a, b) => b.exportedAt.localeCompare(a.exportedAt))
+      );
+    }
+  }, [open, userName]);
+
+  const handleDelete = (id: string) => {
+    if (!confirm('Excluir esta entrada do histórico?')) return;
+    deleteHistoryById(id);
+    setEntries(prev => prev.filter(e => e.id !== id));
+  };
+
+  const handleDownloadExcel = async (entry: ApontHistoryEntry) => {
+    const monday = new Date(entry.mondayISO + 'T12:00:00');
+    const w = { week: entry.weekNum, year: entry.weekYear };
+    const rows = buildExcelRows(monday, entry.daysSnapshot, entry.profile, w, entry.projectsSnapshot);
+    if (rows.length <= 1) { alert('Esta entrada não tem blocos distribuídos.'); return; }
+    const fname = `Apontamento de Horas - Semana ${entry.weekNum} - ${entry.profile.nome} - ${entry.weekYear}`;
+    await writeExcel(rows, fname);
+  };
+
+  const handleDownloadJSON = (entry: ApontHistoryEntry) => {
+    const data = { weekKey: entry.weekKey, exportedAt: entry.exportedAt, profile: entry.profile, days: entry.daysSnapshot };
+    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
+    const a = document.createElement('a');
+    a.href = URL.createObjectURL(blob);
+    a.download = `Apontamento_S${entry.weekNum}_${entry.weekYear}_${entry.profile.nome.replace(/\s+/g, '')}.json`;
+    document.body.appendChild(a); a.click(); document.body.removeChild(a);
+    URL.revokeObjectURL(a.href);
+  };
+
+  const btnSx = { p: 0.75, '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' } };
+
+  return (
+    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
+      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
+        <HistoryRoundedIcon sx={{ fontSize: 20, color: 'primary.main' }} />
+        Histórico de Exportações
+        <Box component="span" sx={{ ml: 'auto', fontSize: 11, fontWeight: 700, bgcolor: 'primary.main', color: '#1a1a1a', px: 1, py: 0.25, borderRadius: 1 }}>
+          {entries.length}
+        </Box>
+      </DialogTitle>
+      <DialogContent sx={{ p: 0 }}>
+        {entries.length === 0 ? (
+          <Typography sx={{ color: 'text.disabled', fontSize: 13, textAlign: 'center', py: 5 }}>
+            Nenhuma exportação registrada ainda.<br />
+            <span style={{ fontSize: 11 }}>As exportações aparecem aqui automaticamente ao clicar em "Exportar Excel".</span>
+          </Typography>
+        ) : (
+          <Box>
+            {entries.map((entry, i) => (
+              <Box key={entry.id} sx={{
+                display: 'flex', alignItems: 'center', gap: 1,
+                px: 2.5, py: 1.5,
+                borderBottom: i < entries.length - 1 ? '1px solid' : 'none',
+                borderColor: 'divider',
+                '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' },
+              }}>
+                <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: 'rgba(255,197,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
+                  <TableChartRoundedIcon sx={{ fontSize: 17, color: 'primary.main' }} />
+                </Box>
+                <Box sx={{ flex: 1, overflow: 'hidden', ml: 0.5 }}>
+                  <Typography sx={{ fontSize: 13, fontWeight: 600, color: 'text.primary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
+                    {entry.weekLabel}
+                  </Typography>
+                  <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>
+                    {new Date(entry.exportedAt).toLocaleString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
+                    {' · '}{entry.profile.nome}
+                  </Typography>
+                </Box>
+                <Tooltip title="Baixar Excel (.xlsx)">
+                  <IconButton size="small" onClick={() => handleDownloadExcel(entry)} sx={btnSx}>
+                    <FileDownloadRoundedIcon sx={{ fontSize: 17, color: 'success.main' }} />
+                  </IconButton>
+                </Tooltip>
+                <Tooltip title="Baixar dados em JSON">
+                  <IconButton size="small" onClick={() => handleDownloadJSON(entry)} sx={btnSx}>
+                    <CodeRoundedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
+                  </IconButton>
+                </Tooltip>
+                <Tooltip title="Excluir do histórico">
+                  <IconButton size="small" onClick={() => handleDelete(entry.id)} sx={{ ...btnSx, '&:hover': { bgcolor: 'rgba(220,38,38,0.1)' } }}>
+                    <DeleteRoundedIcon sx={{ fontSize: 16, color: 'error.main' }} />
+                  </IconButton>
+                </Tooltip>
+              </Box>
+            ))}
+          </Box>
+        )}
+      </DialogContent>
+      <DialogActions sx={{ px: 2.5 }}>
+        <Typography sx={{ flex: 1, fontSize: 11, color: 'text.disabled' }}>
+          Exportações com o mesmo conteúdo atualizam a data em vez de criar duplicatas.
+        </Typography>
+        <Button onClick={onClose} color="inherit">Fechar</Button>
+      </DialogActions>
+    </Dialog>
+  );
+}
+
+// ─── Activity Form ────────────────────────────────────────────────────────────
+function ActivityForm({ projects, initial, onSave, onCancel }: {
+  projects: ApontProject[]; initial?: Atividade;
+  onSave: (projetoId: number, descricao: string, peso: number) => void;
+  onCancel: () => void;
+}) {
+  const activeProjs = projects.filter(p => p.ativo || p.id === initial?.projetoId);
+  const [projetoId, setProjetoId] = useState(initial?.projetoId ?? activeProjs[0]?.id ?? 0);
+  const [descricao, setDescricao] = useState(initial?.descricao ?? '');
+  const [peso, setPeso] = useState(initial?.peso ?? 1);
+
+  const handleSave = () => {
+    if (!projetoId) { alert('Selecione um projeto.'); return; }
+    if (!descricao.trim()) { alert('A descrição é obrigatória — vira a coluna Observação do Excel.'); return; }
+    if (!(peso > 0)) { alert('O peso deve ser maior que zero.'); return; }
+    onSave(projetoId, descricao.trim(), peso);
+  };
+
+  const infoTip = (title: string) => (
+    <Tooltip title={title} placement="top">
+      <InfoOutlinedIcon sx={{ fontSize: 12, color: 'text.disabled', cursor: 'help', flexShrink: 0 }} />
+    </Tooltip>
+  );
+  const fsm = { '& .MuiInputLabel-root': { fontSize: 11 }, '& .MuiInputBase-input': { fontSize: 12 } };
+
+  return (
+    <Paper sx={{ p: 1.25, border: '1px solid', borderColor: 'primary.main', bgcolor: 'rgba(255,197,0,0.03)', display: 'flex', flexDirection: 'column', gap: 1.25 }}>
+      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
+        <FormControl fullWidth size="small" sx={fsm}>
+          <InputLabel sx={{ fontSize: 11 }}>Projeto</InputLabel>
+          <Select label="Projeto" value={projetoId} onChange={e => setProjetoId(Number(e.target.value))}
+            sx={{ fontSize: 12 }}>
+            {activeProjs.map(p => <MenuItem key={p.id} value={p.id} sx={{ fontSize: 12 }}>{p.nome}{p.ativo ? '' : ' (inativo)'}</MenuItem>)}
+          </Select>
+        </FormControl>
+        {infoTip('Projeto que receberá o apontamento no Excel.')}
+      </Box>
+      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
+        <TextField label="Descrição" size="small" fullWidth multiline rows={1}
+          value={descricao} onChange={e => setDescricao(e.target.value)} autoFocus
+          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSave(); } }}
+          sx={fsm} />
+        <Box sx={{ mt: 1 }}>{infoTip('Vira a coluna Observação no Excel. Descreva a atividade realizada.')}</Box>
+      </Box>
+      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
+        <TextField label="Peso" type="number" size="small" value={peso}
+          onChange={e => setPeso(Number(e.target.value))} inputProps={{ min: 0.5, step: 0.5 }}
+          sx={{ width: 68, ...fsm }} />
+        {infoTip('Peso relativo de tempo. Peso 2 recebe o dobro de blocos que peso 1.')}
+      </Box>
+      <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end' }}>
+        <Button size="small" color="inherit" onClick={onCancel} sx={{ fontSize: 11, py: 0.3 }}>Cancelar</Button>
+        <Button size="small" variant="contained" onClick={handleSave} sx={{ fontSize: 11, py: 0.3 }}>{initial ? 'Salvar' : 'Adicionar'}</Button>
+      </Box>
+    </Paper>
+  );
+}
+
+// ─── Main Component ───────────────────────────────────────────────────────────
+export function ApontamentoHoras() {
+  const [state, setState] = useState<ApontState>(() => loadApontState());
+  const [monday, setMonday] = useState<Date>(() => mondayOf(new Date()));
+  const [editing, setEditing] = useState<{ dayKey: string; actId: number | null } | null>(null);
+  const [snack, setSnack] = useState<string | null>(null);
+  const [profileOpen, setProfileOpen] = useState(false);
+  const [projectsOpen, setProjectsOpen] = useState(false);
+  const [historyOpen, setHistoryOpen] = useState(false);
+  const [dayTypeKey, setDayTypeKey] = useState<string | null>(null);
+  const [adjustKey, setAdjustKey] = useState<string | null>(null);
+
+  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }, [state]);
+
+  // Auto-mark Brazilian national holidays on first visit to a week
+  // Only triggers when the day key doesn't yet exist in state (never touched by user)
+  useEffect(() => {
+    const wd = weekDates(monday);
+    const years = new Set(wd.map(d => d.getFullYear()));
+    const holidays = new Set<string>();
+    years.forEach(y => brazilianHolidays(y).forEach(k => holidays.add(k)));
+    setState(prev => {
+      let changed = false;
+      const newDays = { ...prev.days };
+      wd.forEach(d => {
+        const key = fmtKey(d);
+        if (holidays.has(key) && !prev.days[key]) {
+          newDays[key] = { tipo: 'FERIADO', atividades: [] };
+          changed = true;
+        }
+      });
+      return changed ? { ...prev, days: newDays } : prev;
+    });
+  }, [monday]); // eslint-disable-line react-hooks/exhaustive-deps
+
+  const toast = (msg: string) => setSnack(msg);
+  const dates = weekDates(monday);
+  const todayKey = fmtKey(new Date());
+  const w = isoWeek(monday);
+  const isDirty = (() => { const exp = state.exports[wkKey(monday)]; return exp ? exp !== weekHash(monday, state.days) : false; })();
+
+  const projById = (id: number) => state.projects.find(p => p.id === id);
+
+  const updateDay = (key: string, updater: (d: DayData) => DayData) => {
+    setState(prev => ({ ...prev, days: { ...prev.days, [key]: updater(getDay(prev.days, key)) } }));
+  };
+
+  // ── Navigation
+  const shiftWeek = (n: number) => { setEditing(null); setMonday(d => addDays(d, n * 7)); };
+  const goToday = () => { setEditing(null); setMonday(mondayOf(new Date())); };
+
+  // ── Distribution
+  const distributeDaySafe = (key: string, dateObj: Date) => {
+    const day = getDay(state.days, key);
+    if (day.atividades.some(a => a.ajustada) && !confirm('Este dia tem ajustes manuais. Redistribuir descarta os ajustes. Continuar?')) return;
+    const { ok, error, result } = distributeActivities(day.atividades, dateObj, day);
+    if (!ok) { alert(error); return; }
+    updateDay(key, () => ({ ...day, atividades: result }));
+    toast('Dia distribuído.');
+  };
+
+  const distributeWeek = () => {
+    const hasManual = dates.some(d => getDay(state.days, fmtKey(d)).atividades.some(a => a.ajustada));
+    if (hasManual && !confirm('Há dias com ajustes manuais. Redistribuir descarta os ajustes. Continuar?')) return;
+    const newDays = { ...state.days };
+    let ok = true;
+    dates.forEach(d => {
+      const key = fmtKey(d);
+      const day = getDay(newDays, key);
+      if (TIPOS_OFF.includes(day.tipo) || !day.atividades.length) return;
+      const { ok: dayOk, error, result } = distributeActivities(day.atividades, d, day);
+      if (!dayOk) { alert(error); ok = false; return; }
+      newDays[key] = { ...day, atividades: result };
+    });
+    setState(prev => ({ ...prev, days: newDays }));
+    if (ok) toast('Semana distribuída.');
+  };
+
+  // ── Copy prev week
+  const copyPrevWeek = () => {
+    const prev = addDays(monday, -7);
+    let copied = 0;
+    let nextId = state.nextActId;
+    const newDays = { ...state.days };
+    for (let i = 0; i < 5; i++) {
+      const srcKey = fmtKey(addDays(prev, i));
+      const dstKey = fmtKey(addDays(monday, i));
+      const src = newDays[srcKey];
+      const dst = getDay(newDays, dstKey);
+      if (!src?.atividades.length || dst.atividades.length) continue;
+      newDays[dstKey] = { ...dst, atividades: src.atividades.map(a => ({ ...a, id: nextId++, blocos: [], ajustada: false })) };
+      copied += src.atividades.length;
```

_Diff limitado a 2000 linhas. Para ver tudo: `git diff snapshot/2026-06-16 upstream/main`_
