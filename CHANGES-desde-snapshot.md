# Mudancas desde snapshot de 16/06/2026

> Ultimo sync: 29/06/2026 18:01
> Fork: [daia85-prog/nexus-ecossystem](https://github.com/daia85-prog/nexus-ecossystem)
> Original: [RaphaelCerri/nexus-ecossystem](https://github.com/RaphaelCerri/nexus-ecossystem)

---

## Commits do Raphael desde o snapshot

```
2927ebf arrumação geral das infos
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
 .obsidian/app.json                                 |     4 +-
 .obsidian/bookmarks.json                           |   151 +
 .obsidian/community-plugins.json                   |     3 +
 .obsidian/graph.json                               |    72 +-
 .../plugins/obsidian-local-rest-api/data.json      |    11 +
 .obsidian/plugins/obsidian-local-rest-api/main.js  | 87229 +++++++++++++++++++
 .../plugins/obsidian-local-rest-api/manifest.json  |    10 +
 .../plugins/obsidian-local-rest-api/styles.css     |    55 +
 .obsidian/workspace.json                           |    88 +-
 BACKLOG.md                                         |    65 +-
 NEXUS_FEATURES.md                                  |    19 +-
 NEXUS_PLANO.md                                     |     4 +-
 README.md                                          |   134 +-
 ROADMAP_MINERACAO.md                               |   122 +
 Radar_Claude.md                                    |    12 +
 _VALIDACAO_HEADINGS.txt                            |  2432 +
 corpus-conhecimento/.obsidian/app.json             |     1 +
 corpus-conhecimento/.obsidian/appearance.json      |     1 +
 corpus-conhecimento/.obsidian/core-plugins.json    |    33 +
 corpus-conhecimento/.obsidian/graph.json           |    35 +
 corpus-conhecimento/.obsidian/workspace.json       |   190 +
 corpus-conhecimento/MOC-Carregamento.md            |    26 +
 corpus-conhecimento/MOC-Conferencia.md             |    28 +
 corpus-conhecimento/MOC-Entrada.md                 |    26 +
 corpus-conhecimento/MOC-Estoque.md                 |    25 +
 corpus-conhecimento/MOC-Expedicao.md               |    31 +
 corpus-conhecimento/MOC-Integracao.md              |    28 +
 corpus-conhecimento/MOC-Separacao.md               |    30 +
 corpus-conhecimento/MOC-Sistema.md                 |    30 +
 corpus-conhecimento/_AUDITORIA.md                  |    96 +
 corpus-conhecimento/_INBOX_REVISAR.md              |   432 +
 corpus-conhecimento/_REVISAO_TOPICOS.md            |   105 +
 corpus-conhecimento/_ROUTING.md                    |   119 +
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
 .../conferencia/conferencia/conferencia.RAW.md     |   584 +
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
 .../blocos/conferencia/pesagem/DOSSIE.md           |    67 +
 .../pesagem/insights/pesagem.INSIGHTS.md           |    32 +
 .../blocos/conferencia/pesagem/pesagem.md          |    38 +
 corpus-conhecimento/blocos/entrada/.gitkeep        |     0
 .../blocos/entrada/cubagem/DOSSIE.md               |    90 +
 .../blocos/entrada/cubagem/ED_CARD.md              |    55 +
 .../blocos/entrada/cubagem/cubagem.RAW.md          |   461 +
 .../blocos/entrada/cubagem/cubagem.md              |    33 +
 .../entrada/cubagem/insights/cubagem.INSIGHTS.md   |    43 +
 .../blocos/entrada/matriz-fragilidade/DOSSIE.md    |    65 +
 .../insights/matriz-fragilidade.INSIGHTS.md        |    31 +
 .../matriz-fragilidade/matriz-fragilidade.md       |    37 +
 .../blocos/entrada/order-start/DOSSIE.md           |    88 +
 .../blocos/entrada/order-start/ED_CARD.md          |    64 +
 .../order-start/insights/order-start.INSIGHTS.md   |    42 +
 .../blocos/entrada/order-start/order-start.RAW.md  |  1169 +
 .../blocos/entrada/order-start/order-start.md      |    33 +
 .../entrada/recebimento-armazenagem/DOSSIE.md      |    89 +
 .../entrada/recebimento-armazenagem/ED_CARD.md     |    62 +
 .../insights/recebimento-armazenagem.INSIGHTS.md   |    45 +
 .../recebimento-armazenagem.RAW.md                 |  1103 +
 .../recebimento-armazenagem.md                     |    34 +
 corpus-conhecimento/blocos/estoque/.gitkeep        |     0
 .../blocos/estoque/gestao-estoque/DOSSIE.md        |    70 +
 .../estoque/gestao-estoque/gestao-estoque.md       |    37 +
 .../insights/gestao-estoque.INSIGHTS.md            |    32 +
 .../blocos/estoque/inventario/DOSSIE.md            |   101 +
 .../blocos/estoque/inventario/ED_CARD.md           |   109 +
 .../inventario/insights/inventario.INSIGHTS.md     |    40 +
 .../blocos/estoque/inventario/inventario.RAW.md    |   344 +
 .../blocos/estoque/inventario/inventario.md        |    33 +
 .../blocos/estoque/reabastecimento/DOSSIE.md       |    89 +
 .../blocos/estoque/reabastecimento/ED_CARD.md      |    83 +
 .../insights/reabastecimento.INSIGHTS.md           |    43 +
 .../estoque/reabastecimento/reabastecimento.RAW.md |  1110 +
 .../estoque/reabastecimento/reabastecimento.md     |    32 +
 corpus-conhecimento/blocos/expedicao/.gitkeep      |     0
 .../blocos/expedicao/aloca-pallet/DOSSIE.md        |    73 +
 .../blocos/expedicao/aloca-pallet/aloca-pallet.md  |    38 +
 .../aloca-pallet/insights/aloca-pallet.INSIGHTS.md |    32 +
 .../blocos/expedicao/etiquetas/DOSSIE.md           |    81 +
 .../blocos/expedicao/etiquetas/ED_CARD.md          |    87 +
 .../blocos/expedicao/etiquetas/etiquetas.RAW.md    |   499 +
 .../blocos/expedicao/etiquetas/etiquetas.md        |    33 +
 .../etiquetas/insights/etiquetas.INSIGHTS.md       |    42 +
 .../blocos/expedicao/paletizacao-ptl/DOSSIE.md     |    70 +
 .../insights/paletizacao-ptl.INSIGHTS.md           |    32 +
 .../expedicao/paletizacao-ptl/paletizacao-ptl.md   |    38 +
 .../blocos/expedicao/paletizacao/DOSSIE.md         |    86 +
 .../blocos/expedicao/paletizacao/ED_CARD.md        |    82 +
 .../paletizacao/insights/paletizacao.INSIGHTS.md   |    44 +
 .../expedicao/paletizacao/paletizacao.RAW.md       |   657 +
 .../blocos/expedicao/paletizacao/paletizacao.md    |    33 +
 .../blocos/expedicao/ptl-alocacao/DOSSIE.md        |    78 +
 .../blocos/expedicao/ptl-alocacao/ED_CARD.md       |    74 +
 .../ptl-alocacao/insights/ptl-alocacao.INSIGHTS.md |    44 +
 .../expedicao/ptl-alocacao/ptl-alocacao.RAW.md     |   839 +
 .../blocos/expedicao/ptl-alocacao/ptl-alocacao.md  |    33 +
 corpus-conhecimento/blocos/expedicao/ptm/DOSSIE.md |    90 +
 .../blocos/expedicao/ptm/ED_CARD.md                |    89 +
 .../blocos/expedicao/ptm/insights/ptm.INSIGHTS.md  |    48 +
 .../blocos/expedicao/ptm/ptm.RAW.md                |   333 +
 corpus-conhecimento/blocos/expedicao/ptm/ptm.md    |    33 +
 .../blocos/expedicao/recirculacao/DOSSIE.md        |    69 +
 .../recirculacao/insights/recirculacao.INSIGHTS.md |    32 +
 .../blocos/expedicao/recirculacao/recirculacao.md  |    36 +
 .../blocos/expedicao/romaneio/DOSSIE.md            |    69 +
 .../romaneio/insights/romaneio.INSIGHTS.md         |    32 +
 .../blocos/expedicao/romaneio/romaneio.md          |    37 +
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
 .../blocos/expedicao/sorter-rampas/DOSSIE.md       |    70 +
 .../insights/sorter-rampas.INSIGHTS.md             |    32 +
 .../expedicao/sorter-rampas/sorter-rampas.md       |    39 +
 .../blocos/expedicao/sorter-rejeito/DOSSIE.md      |    92 +
 .../blocos/expedicao/sorter-rejeito/ED_CARD.md     |   118 +
 .../insights/sorter-rejeito.INSIGHTS.md            |    42 +
 .../expedicao/sorter-rejeito/sorter-rejeito.RAW.md |  1003 +
 .../expedicao/sorter-rejeito/sorter-rejeito.md     |    34 +
 .../blocos/expedicao/sorter/DOSSIE.md              |    95 +
 .../blocos/expedicao/sorter/ED_CARD.md             |   110 +
 .../expedicao/sorter/insights/sorter.INSIGHTS.md   |    45 +
 .../blocos/expedicao/sorter/sorter.RAW.md          |  2859 +
 .../blocos/expedicao/sorter/sorter.md              |    32 +
 .../expedicao/transelevador/transelevador.md       |    35 +
 corpus-conhecimento/blocos/integracao/.gitkeep     |     0
 .../integracao/integracao-cadastros/DOSSIE.md      |    92 +
 .../integracao/integracao-cadastros/ED_CARD.md     |   114 +
 .../insights/integracao-cadastros.INSIGHTS.md      |    47 +
 .../integracao-cadastros.RAW.md                    |   452 +
 .../integracao-cadastros/integracao-cadastros.md   |    33 +
 .../blocos/integracao/integracao-pedidos/DOSSIE.md |    77 +
 .../integracao/integracao-pedidos/ED_CARD.md       |    97 +
 .../insights/integracao-pedidos.INSIGHTS.md        |    44 +
 .../integracao-pedidos/integracao-pedidos.RAW.md   |  1009 +
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
 .../integracao/insights/integracao.INSIGHTS.md     |    27 +
 .../blocos/integracao/integracao/integracao.RAW.md | 10079 +++
 .../blocos/integracao/integracao/integracao.md     |    32 +
 .../separacao/cancelamento-pedidos/DOSSIE.md       |    88 +
 .../separacao/cancelamento-pedidos/ED_CARD.md      |    67 +
 .../cancelamento-pedidos.RAW.md                    |    46 +
 .../cancelamento-pedidos/cancelamento-pedidos.md   |    33 +
 .../insights/cancelamento-pedidos.INSIGHTS.md      |    37 +
 .../blocos/separacao/picking-cart/DOSSIE.md        |    87 +
 .../blocos/separacao/picking-cart/ED_CARD.md       |    82 +
 .../picking-cart/insights/picking-cart.INSIGHTS.md |    45 +
 .../separacao/picking-cart/picking-cart.RAW.md     |  1030 +
 .../blocos/separacao/picking-cart/picking-cart.md  |    33 +
 .../separacao/picking-excecao/picking-excecao.md   |    39 +
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
 .../separacao/picking-pbl/picking-pbl.RAW.md       |   710 +
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
 .../sistema/cadastro-caixas/cadastro-caixas.md     |    37 +
 .../sistema/cadastro-produtos/cadastro-produtos.md |    37 +
 .../blocos/sistema/cadastros-acessos/DOSSIE.md     |    76 +
 .../blocos/sistema/cadastros-acessos/ED_CARD.md    |   113 +
 .../cadastros-acessos/cadastros-acessos.RAW.md     |  2201 +
 .../insights/cadastros-acessos.INSIGHTS.md         |    43 +
 .../blocos/sistema/dashboards-relatorios/DOSSIE.md |    80 +
 .../sistema/dashboards-relatorios/ED_CARD.md       |   132 +
 .../dashboards-relatorios.RAW.md                   |  1678 +
 .../insights/dashboards-relatorios.INSIGHTS.md     |    41 +
 .../blocos/sistema/infraestrutura/DOSSIE.md        |    71 +
 .../sistema/infraestrutura/infraestrutura.md       |    38 +
 .../insights/infraestrutura.INSIGHTS.md            |    32 +
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
 corpus-conhecimento/corpus-full.jsonl              |  1344 +
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
 ed-knowledge/ES_PLACEHOLDER_v7.docx                |   Bin 6904976 -> 6910292 bytes
 ed-knowledge/PROMPT_SISTEMA_v5_7.md                |    38 +-
 ed-knowledge/SUPER_MD_v5_5.md                      |   202 +-
 ed-knowledge/build_docx_v5.py                      |    95 +-
 minerador/_estado_sintetizador.json                |    51 +
 minerador/auditor.py                               |   673 +
 minerador/descobridor.py                           |    93 +
 minerador/extrator.py                              |   400 +
 minerador/limpar_inbox.py                          |   164 +
 minerador/minerador.py                             |   447 +
 minerador/reclassifier.py                          |   324 +
 minerador/requirements.txt                         |    43 +
 minerador/roteador.py                              |   121 +
 minerador/sintetizador.py                          |   762 +
 minerador/smoke_test.py                            |    18 +
 minerador/topicos.json                             |    34 +
 nexus.md                                           |     0
 .../blocos/conferencia/conferencia/DOSSIE.md       |     0
 .../conferencia/insights/conferencia.INSIGHTS.md   |     0
 .../blocos/conferencia/pesagem/DOSSIE.md           |     0
 .../pesagem/insights/pesagem.INSIGHTS.md           |     0
 .../blocos/conferencia/pesagem/pesagem.md          |     0
 .../blocos/entrada/cubagem/DOSSIE.md               |     0
 .../blocos/entrada/matriz-fragilidade/DOSSIE.md    |     0
 .../insights/matriz-fragilidade.INSIGHTS.md        |     0
 .../matriz-fragilidade/matriz-fragilidade.md       |     0
 .../blocos/estoque/gestao-estoque/DOSSIE.md        |     0
 .../estoque/gestao-estoque/gestao-estoque.md       |     0
 .../insights/gestao-estoque.INSIGHTS.md            |     0
 .../blocos/estoque/inventario/DOSSIE.md            |     0
 .../blocos/estoque/reabastecimento/DOSSIE.md       |     0
 .../blocos/expedicao/aloca-pallet/DOSSIE.md        |     0
 .../blocos/expedicao/aloca-pallet/aloca-pallet.md  |     0
 .../aloca-pallet/insights/aloca-pallet.INSIGHTS.md |     0
 .../blocos/expedicao/paletizacao-ptl/DOSSIE.md     |     0
 .../insights/paletizacao-ptl.INSIGHTS.md           |     0
 .../expedicao/paletizacao-ptl/paletizacao-ptl.md   |     0
 .../blocos/expedicao/paletizacao/DOSSIE.md         |     0
 .../blocos/expedicao/ptl-alocacao/DOSSIE.md        |     0
 .../blocos/expedicao/recirculacao/DOSSIE.md        |     0
 .../recirculacao/insights/recirculacao.INSIGHTS.md |     0
 .../blocos/expedicao/recirculacao/recirculacao.md  |     0
 .../blocos/expedicao/romaneio/DOSSIE.md            |     0
 .../romaneio/insights/romaneio.INSIGHTS.md         |     0
 .../blocos/expedicao/romaneio/romaneio.md          |     0
 .../blocos/expedicao/sorter-inducao/DOSSIE.md      |     0
 .../blocos/expedicao/sorter-rampas/DOSSIE.md       |     0
 .../insights/sorter-rampas.INSIGHTS.md             |     0
 .../expedicao/sorter-rampas/sorter-rampas.md       |     0
 .../blocos/expedicao/sorter-rejeito/DOSSIE.md      |     0
 .../blocos/expedicao/sorter/DOSSIE.md              |     0
 .../blocos/expedicao/sorter/sorter.md              |     0
 .../blocos/sistema/cadastros-acessos/DOSSIE.md     |     0
 .../blocos/sistema/infraestrutura/DOSSIE.md        |     0
 .../sistema/infraestrutura/infraestrutura.md       |     0
 .../insights/infraestrutura.INSIGHTS.md            |     0
 .../cards/CARD_dashboards-relatorios.md            |     0
 nexus/corpus-conhecimento/cards/CARD_integracao.md |     0
 .../corpus-conhecimento/cards/CARD_picking-cart.md |     0
 .../cards/CARD_picking-pallet.md                   |     0
 package-lock.json                                  |   926 +-
 package.json                                       |     4 +-
 public/ES_PLACEHOLDER_v7.docx                      |   Bin 6904976 -> 6922109 bytes
 src/App.tsx                                        |    53 +-
 src/components/Sidebar.tsx                         |    82 +-
 src/lib/docxBuilder.ts                             |    74 +-
 src/lib/featureRegistry.ts                         |     9 +
 src/lib/kickoffMeta.ts                             |     4 +-
 src/lib/pageCategories.ts                          |     1 -
 src/pages/Admin/index.tsx                          |   528 +
 src/pages/ComingSoon.tsx                           |     4 +-
 src/pages/ConfigPage.tsx                           |   702 +-
 src/pages/Documentacao/ApontamentoHoras.tsx        |  1376 +
 src/pages/Documentacao/GerarDocumento.tsx          |    18 +-
 src/pages/Documentacao/index.tsx                   |    16 +-
 src/pages/KickoffPage.tsx                          |    27 +-
 src/pages/LoginPage.tsx                            |    14 +-
 vite.config.ts                                     |     5 +
 380 files changed, 148863 insertions(+), 684 deletions(-)
```

---

## Diff completo (o que mudou no codigo)

```diff
diff --git a/src/App.tsx b/src/App.tsx
index 986cd48..a6eee31 100644
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
@@ -22,29 +23,42 @@ import { IntroScreen } from './components/IntroScreen';
 import type { NexusProject } from './lib/projectStore';
 import { loadProject } from './lib/projectStore';
 
-type Page = 'kickoff' | 'projetos' | 'overview' | 'ferramentas' | 'dashboard' | 'config' | 'sugestoes' | 'documentacao';
+type Page = 'kickoff' | 'projetos' | 'overview' | 'ferramentas' | 'config' | 'sugestoes' | 'documentacao' | 'admin';
 
 const PAGE_TITLES: Record<Page, string> = {
   kickoff:       'Kickoff',
   projetos:      'Projetos',
   overview:      'Projeto',
   ferramentas:   'Ferramentas I.A',
-  dashboard:     'Dashboard',
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
@@ -92,6 +106,17 @@ export default function App() {
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
@@ -179,38 +204,30 @@ export default function App() {
         );
       case 'ferramentas':
         return <ComingSoon iconType="config" title="Ferramentas I.A" description="Automações, assistente de kickoff, geração de documentos com I.A e muito mais em breve." />;
-      case 'dashboard':
-        return <ComingSoon iconType="dashboard" title="Dashboard" description="Métricas e indicadores dos projetos: taxa de preenchimento, seções críticas, timeline." />;
       case 'config':
-        return <ConfigPage role={role} />;
+        return <ConfigPage role={role} userName={userName} />;
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
@@ -221,7 +238,7 @@ export default function App() {
       {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
 
       {!inKickoffFullscreen && (
-        <Sidebar current={page as 'kickoff' | 'projetos' | 'ferramentas' | 'dashboard' | 'config'} onNavigate={handleNavigate} role={role} onRoleChange={handleRoleChange} userName={userName} onLogout={handleLogout} />
+        <Sidebar current={page as Parameters<typeof handleNavigate>[0]} onNavigate={handleNavigate} role={role} onRoleChange={handleRoleChange} userName={userName} userEmail={userEmail} onLogout={handleLogout} />
       )}
 
       <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
diff --git a/src/components/Sidebar.tsx b/src/components/Sidebar.tsx
index 8769bd7..24bbf7a 100644
--- a/src/components/Sidebar.tsx
+++ b/src/components/Sidebar.tsx
@@ -6,18 +6,20 @@ import MenuItem from '@mui/material/MenuItem';
 import Select from '@mui/material/Select';
 import Tooltip from '@mui/material/Tooltip';
 import Typography from '@mui/material/Typography';
+import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
 import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
 import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
 import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
 import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
 import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
-import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
 import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
 import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
 import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
 import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
 
-type Page = 'kickoff' | 'projetos' | 'ferramentas' | 'dashboard' | 'config' | 'sugestoes' | 'documentacao';
+type Page = 'kickoff' | 'projetos' | 'ferramentas' | 'config' | 'sugestoes' | 'documentacao' | 'admin';
+
+const ADMIN_EMAIL = 'raphael.caveagna@invent-corp.com';
 
 export const ROLES = [
   { value: 'gestao',          label: 'Gestão' },
@@ -37,8 +39,6 @@ const NAV_DEFAULT: NavItem[] = [
   { id: 'projetos',    label: 'Projetos',       Icon: FolderRoundedIcon },
   { id: 'kickoff',     label: 'Kickoff',         Icon: AssignmentTurnedInRoundedIcon },
   { id: 'ferramentas', label: 'Ferramentas I.A', Icon: BuildRoundedIcon },
-  { id: 'dashboard',   label: 'Dashboard',       Icon: DashboardRoundedIcon },
-  { id: 'sugestoes',   label: 'Sugestões',       Icon: TipsAndUpdatesRoundedIcon },
 ];
 
 const NAV_DOC: NavItem = { id: 'documentacao', label: 'Documentação', Icon: ArticleRoundedIcon };
@@ -53,10 +53,12 @@ interface SidebarProps {
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
@@ -90,6 +92,7 @@ export function Sidebar({ current, onNavigate, role, onRoleChange, userName, onL
   const NAV = role === 'documentacao'
     ? [...NAV_DEFAULT, NAV_DOC]
     : NAV_DEFAULT;
+  const NAV_ADMIN: NavItem = { id: 'admin', label: 'Administrador', Icon: AdminPanelSettingsRoundedIcon };
   const roleLabel = ROLES.find(r => r.value === role)?.label ?? role;
   const firstName = userName.split(' ')[0] || 'Usuário';
   const initial = firstName[0]?.toUpperCase() ?? 'U';
@@ -228,6 +231,53 @@ export function Sidebar({ current, onNavigate, role, onRoleChange, userName, onL
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
@@ -238,16 +288,18 @@ export function Sidebar({ current, onNavigate, role, onRoleChange, userName, onL
 
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
diff --git a/src/lib/pageCategories.ts b/src/lib/pageCategories.ts
index 622d592..dfb9a50 100644
--- a/src/lib/pageCategories.ts
+++ b/src/lib/pageCategories.ts
@@ -11,7 +11,6 @@ export const PAGE_CATEGORIES: PageCategory[] = [
   { value: 'projetos',     label: 'Projetos',       color: '#6366f1' },
   { value: 'kickoff',      label: 'Kickoff',         color: '#0ea5e9' },
   { value: 'ferramentas',  label: 'Ferramentas I.A', color: '#a855f7' },
-  { value: 'dashboard',    label: 'Dashboard',       color: '#22c55e' },
   { value: 'config',       label: 'Configurações',   color: '#f59e0b' },
   { value: 'sugestoes',    label: 'Sugestões',       color: '#ec4899' },
   { value: 'login',        label: 'Login / Acesso',  color: '#14b8a6' },
diff --git a/src/pages/Admin/index.tsx b/src/pages/Admin/index.tsx
new file mode 100644
index 0000000..a56c078
--- /dev/null
+++ b/src/pages/Admin/index.tsx
@@ -0,0 +1,528 @@
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
+import { FeaturesAdminTab, PendenciasTab, ROLE_COLOR } from '../ConfigPage';
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
+          <Tab label="Papéis" />
+          <Tab label="Apresentação" icon={<SlideshowRoundedIcon sx={{ fontSize: 16 }} />} iconPosition="start" />
+          <Tab label="Funcionalidades" />
+          <Tab label="Backlog" />
+        </Tabs>
+
+        {/* ── Tab 0: Papéis ── */}
+        {tab === 0 && (
+          <Box sx={{ maxWidth: 480 }}>
+            <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>Papel atual da sessão</Typography>
+            <Typography sx={{ fontSize: 12, color: 'text.disabled', mb: 2.5 }}>
+              Apenas o administrador pode transitar entre funções. Útil para debugar a plataforma e visualizar o sistema como cada perfil.
+            </Typography>
+            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
+              {ROLES.map(r => {
+                const active = role === r.value;
+                return (
+                  <Box key={r.value} component="button" onClick={() => onRoleChange(r.value)}
+                    sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1.5, p: '10px 14px', border: '1px solid', borderRadius: 1.5, cursor: 'pointer', bgcolor: active ? `${ROLE_COLOR[r.value]}12` : 'transparent', borderColor: active ? ROLE_COLOR[r.value] : 'divider', transition: '.15s', '&:hover': { borderColor: ROLE_COLOR[r.value], bgcolor: `${ROLE_COLOR[r.value]}0A` } }}>
+                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: ROLE_COLOR[r.value], flexShrink: 0 }} />
+                    <Typography sx={{ fontSize: 13, fontWeight: active ? 700 : 500, color: active ? ROLE_COLOR[r.value] : 'text.secondary', flex: 1, textAlign: 'left' }}>{r.label}</Typography>
+                    {active && <Chip label="ativo" size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${ROLE_COLOR[r.value]}20`, color: ROLE_COLOR[r.value], border: `1px solid ${ROLE_COLOR[r.value]}44`, fontWeight: 700 }} />}
+                  </Box>
+                );
+              })}
+            </Box>
+          </Box>
+        )}
+
+        {/* ── Tab 1: Apresentação ── */}
+        {tab === 1 && (
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
+        {/* ── Tab 2: Funcionalidades ── */}
+        {tab === 2 && <FeaturesAdminTab />}
+
+        {/* ── Tab 3: Backlog ── */}
+        {tab === 3 && <PendenciasTab />}
+      </Box>
+    </>
+  );
+}
diff --git a/src/pages/ComingSoon.tsx b/src/pages/ComingSoon.tsx
index 7b17bf7..51416c6 100644
--- a/src/pages/ComingSoon.tsx
+++ b/src/pages/ComingSoon.tsx
@@ -4,15 +4,13 @@ import Paper from '@mui/material/Paper';
 import Typography from '@mui/material/Typography';
 import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
 import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
-import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
 import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
 
-type IconType = 'projetos' | 'pendencias' | 'dashboard' | 'config';
+type IconType = 'projetos' | 'pendencias' | 'config';
 
 const ICONS: Record<IconType, React.ElementType> = {
   projetos:   FolderRoundedIcon,
   pendencias: WarningAmberRoundedIcon,
-  dashboard:  DashboardRoundedIcon,
   config:     SettingsRoundedIcon,
 };
 
diff --git a/src/pages/ConfigPage.tsx b/src/pages/ConfigPage.tsx
index eefb6ef..f701512 100644
--- a/src/pages/ConfigPage.tsx
+++ b/src/pages/ConfigPage.tsx
@@ -5,12 +5,9 @@ import Checkbox from '@mui/material/Checkbox';
 import Chip from '@mui/material/Chip';
 import IconButton from '@mui/material/IconButton';
 import Paper from '@mui/material/Paper';
-import Tab from '@mui/material/Tab';
-import Tabs from '@mui/material/Tabs';
 import TextField from '@mui/material/TextField';
 import Tooltip from '@mui/material/Tooltip';
 import Typography from '@mui/material/Typography';
-import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
 import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
 import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
 import EditRoundedIcon from '@mui/icons-material/EditRounded';
@@ -18,13 +15,14 @@ import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBullete
 import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
 import { ROLES } from '../components/Sidebar';
 import type { Role } from '../components/Sidebar';
-import type { RoleFeature, KpiEntry } from '../lib/featureRegistry';
+import type { RoleFeature } from '../lib/featureRegistry';
 import { loadFeatures, saveFeature } from '../lib/featuresStore';
 import { PAGE_CATEGORIES, getCategoryColor, getCategoryLabel } from '../lib/pageCategories';
 import { loadLista, toggleListaItem, removeFromLista } from '../lib/listaStore';
 import type { ListaItem } from '../lib/listaStore';
+import { SugestoesPage } from './SugestoesPage';
 
-const ROLE_COLOR: Record<Role, string> = {
+export const ROLE_COLOR: Record<Role, string> = {
   gestao:          '#6366f1',
   engenharia:      '#0ea5e9',
   documentacao:    '#8b5cf6',
@@ -34,554 +32,119 @@ const ROLE_COLOR: Record<Role, string> = {
   adm:             '#ef4444',
 };
 
-export function ConfigPage({ role }: { role?: Role }) {
-  const [tab, setTab] = useState(0);
+// ─── ConfigPage: Sugestões para todos ────────────────────────────────────────
 
-  // ── Administração
-  const [features, setFeatures] = useState<RoleFeature[]>(() => loadFeatures());
-  const [roleFilter, setRoleFilter] = useState<Role | 'all'>('all');
-  const [pageFilter, setPageFilter] = useState<string | 'all'>('all');
-
-  const refreshFeatures = () => setFeatures(loadFeatures());
-
-  const handleSaveFeature = (updated: RoleFeature) => {
-    saveFeature(updated);
-    refreshFeatures();
-  };
-
-  const usedPages = new Set(features.map(f => f.page));
-  const pagePages = PAGE_CATEGORIES.filter(c => usedPages.has(c.label));
-
-  const filtered = features.filter(f => {
-    const matchRole = roleFilter === 'all' || f.roles.includes(roleFilter);
-    const matchPage = pageFilter === 'all' || f.page === pageFilter;
-    return matchRole && matchPage;
-  });
-
-  const byRole = ROLES.map(r => ({
-    ...r,
-    features: features.filter(f => f.roles.includes(r.value)),
-  })).filter(r => r.features.length > 0);
-
-  // ── Pendências
-  const [lista, setLista] = useState<ListaItem[]>(() => loadLista());
-  const [listaRoleFilter, setListaRoleFilter] = useState<Role | 'all'>('all');
-  const [listaCatFilter, setListaCatFilter] = useState<string | 'all'>('all');
-
-  const refreshLista = () => setLista(loadLista());
-
-  const listaFiltrada = lista.filter(i => {
-    const matchRole = listaRoleFilter === 'all' || i.role === listaRoleFilter;
-    const matchCat = listaCatFilter === 'all' || i.categoria === listaCatFilter;
-    return matchRole && matchCat;
-  });
-
-  const listaUsedCategories = PAGE_CATEGORIES.filter(c => lista.some(i => i.categoria === c.value));
-  const listaRolesUsed = ROLES.filter(r => lista.some(i => i.role === r.value));
-  const donePct = lista.length > 0 ? Math.round((lista.filter(i => i.done).length / lista.length) * 100) : 0;
-
-  return (
-    <Box className="page-enter" sx={{ p: 3, flex: 1 }}>
-      <Typography sx={{ fontSize: 20, fontWeight: 800, color: 'text.primary', letterSpacing: '-.3px', mb: '4px' }}>
-        Configurações
-      </Typography>
-      <Typography sx={{ fontSize: 13, color: 'text.disabled', mb: 3 }}>
-        Gerencie preferências, integrações e administração da plataforma.
-      </Typography>
-
-      <Tabs
-        value={tab}
-        onChange={(_, v) => setTab(v)}
-        sx={{
-          borderBottom: '1px solid',
-          borderColor: 'divider',
-          mb: 3,
-          '& .MuiTab-root': { fontSize: 12, fontWeight: 600, textTransform: 'none', minHeight: 40, px: 2 },
-          '& .Mui-selected': { color: 'primary.main' },
-          '& .MuiTabs-indicator': { bgcolor: 'primary.main' },
-        }}
-      >
-        <Tab label="Administração" icon={<AdminPanelSettingsRoundedIcon sx={{ fontSize: 16 }} />} iconPosition="start" />
-        <Tab
-          label={`Pendências${lista.length > 0 ? ` (${lista.length})` : ''}`}
-          icon={<FormatListBulletedRoundedIcon sx={{ fontSize: 16 }} />}
-          iconPosition="start"
-        />
-      </Tabs>
-
-      {/* ── Tab 0: Administração ── */}
-      {tab === 0 && (
-        <Box>
-          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1.5 }}>
-            <Box>
-              <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>
-                Funcionalidades por Função
-              </Typography>
-              <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>
-                Lista de recursos exclusivos ou diferenciados por setor. Clique em editar para ajustar título, descrição, funções ou página.
-              </Typography>
-            </Box>
-            <Chip
-              label={`${features.filter(f => f.implemented).length} / ${features.length} implementadas`}
-              size="small"
-              sx={{ bgcolor: 'rgba(255,197,0,0.08)', color: '#ffc500', border: '1px solid rgba(255,197,0,0.2)', fontSize: 11, fontWeight: 600 }}
-            />
-          </Box>
-
-          {/* Filters */}
-          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
-            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
-              <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Função:</Typography>
-              <Chip
-                label="Todas"
-                size="small"
-                onClick={() => setRoleFilter('all')}
-                sx={{
-                  fontSize: 11, fontWeight: 600,
-                  bgcolor: roleFilter === 'all' ? 'rgba(255,255,255,0.1)' : 'transparent',
-                  borderColor: roleFilter === 'all' ? 'rgba(255,255,255,0.3)' : 'divider',
-                  color: roleFilter === 'all' ? 'text.primary' : 'text.disabled',
-                  border: '1px solid',
-                }}
-              />
-              {ROLES.map(r => (
-                <Chip
-                  key={r.value}
-                  label={r.label}
-                  size="small"
-                  onClick={() => setRoleFilter(roleFilter === r.value ? 'all' : r.value)}
-                  sx={{
-                    fontSize: 11, fontWeight: 600,
-                    bgcolor: roleFilter === r.value ? `${ROLE_COLOR[r.value]}22` : 'transparent',
-                    borderColor: roleFilter === r.value ? ROLE_COLOR[r.value] : 'divider',
-                    color: roleFilter === r.value ? ROLE_COLOR[r.value] : 'text.disabled',
-                    border: '1px solid',
-                    '&:hover': { borderColor: ROLE_COLOR[r.value], color: ROLE_COLOR[r.value] },
-                  }}
-                />
-              ))}
-            </Box>
-
-            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
-              <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Categoria:</Typography>
-              <Chip
-                label="Todas"
-                size="small"
-                onClick={() => setPageFilter('all')}
-                sx={{
-                  fontSize: 11,
-                  bgcolor: pageFilter === 'all' ? 'rgba(255,255,255,0.07)' : 'transparent',
-                  borderColor: pageFilter === 'all' ? 'rgba(255,255,255,0.2)' : 'divider',
-                  color: pageFilter === 'all' ? 'text.secondary' : 'text.disabled',
-                  border: '1px solid',
-                }}
-              />
-              {pagePages.map(cat => (
-                <Chip
-                  key={cat.value}
-                  label={cat.label}
-                  size="small"
-                  onClick={() => setPageFilter(pageFilter === cat.label ? 'all' : cat.label)}
-                  sx={{
-                    fontSize: 11, fontWeight: 600,
-                    bgcolor: pageFilter === cat.label ? `${cat.color}20` : 'transparent',
-                    borderColor: pageFilter === cat.label ? cat.color : 'divider',
-                    color: pageFilter === cat.label ? cat.color : 'text.disabled',
-                    border: '1px solid',
-                    '&:hover': { borderColor: cat.color, color: cat.color },
-                  }}
-                />
-              ))}
-            </Box>
-          </Box>
-
-          {/* Feature list */}
-          {filtered.length === 0 ? (
-            <Typography sx={{ fontSize: 13, color: 'text.disabled', fontStyle: 'italic' }}>
-              Nenhuma funcionalidade encontrada para os filtros selecionados.
-            </Typography>
-          ) : roleFilter === 'all' ? (
-            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
-              {byRole
-                .filter(r => pageFilter === 'all' || r.features.some(f => f.page === pageFilter))
-                .map(r => (
-                  <Box key={r.value}>
-                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
-                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: ROLE_COLOR[r.value], flexShrink: 0 }} />
-                      <Typography sx={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: ROLE_COLOR[r.value] }}>
-                        {r.label}
-                      </Typography>
-                      <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>
-                        · {r.features.filter(f => pageFilter === 'all' || f.page === pageFilter).length} item(s)
-                      </Typography>
-                    </Box>
-                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
-                      {r.features
-                        .filter(f => pageFilter === 'all' || f.page === pageFilter)
-                        .map(f => <FeatureCard key={f.id} feature={f} onSave={handleSaveFeature} isAdm={role === 'adm'} />)}
-                    </Box>
-                  </Box>
-                ))}
-            </Box>
-          ) : (
-            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
-              {filtered.map(f => <FeatureCard key={f.id} feature={f} onSave={handleSaveFeature} isAdm={role === 'adm'} />)}
-            </Box>
-          )}
-        </Box>
-      )}
-
-      {/* ── Tab 1: Pendências ── */}
-      {tab === 1 && (
-        <Box>
-          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1.5 }}>
-            <Box>
-              <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>
-                Lista de Pendências
-              </Typography>
-              <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>
-                Sugestões marcadas para acompanhamento. Marque como concluídas conforme forem implementadas.
-              </Typography>
-            </Box>
-            {lista.length > 0 && (
-              <Chip
-                label={`${lista.filter(i => i.done).length} / ${lista.length} concluídas (${donePct}%)`}
-                size="small"
-                sx={{ bgcolor: 'rgba(34,197,94,0.08)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)', fontSize: 11, fontWeight: 600 }}
-              />
-            )}
-          </Box>
-
-          {lista.length > 0 && (
-            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
-              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
-                <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Função:</Typography>
-                <Chip
-                  label={`Todas (${lista.length})`}
-                  size="small"
-                  onClick={() => setListaRoleFilter('all')}
-                  sx={{
-                    fontSize: 11, fontWeight: 600,
-                    bgcolor: listaRoleFilter === 'all' ? 'rgba(255,255,255,0.1)' : 'transparent',
-                    borderColor: listaRoleFilter === 'all' ? 'rgba(255,255,255,0.25)' : 'divider',
-                    color: listaRoleFilter === 'all' ? 'text.primary' : 'text.disabled',
-                    border: '1px solid',
-                  }}
-                />
-                {listaRolesUsed.map(r => (
-                  <Chip
-                    key={r.value}
-                    label={`${r.label} (${lista.filter(i => i.role === r.value).length})`}
-                    size="small"
-                    onClick={() => setListaRoleFilter(listaRoleFilter === r.value ? 'all' : r.value)}
-                    sx={{
-                      fontSize: 11, fontWeight: 600,
-                      bgcolor: listaRoleFilter === r.value ? `${ROLE_COLOR[r.value]}20` : 'transparent',
-                      borderColor: listaRoleFilter === r.value ? ROLE_COLOR[r.value] : 'divider',
-                      color: listaRoleFilter === r.value ? ROLE_COLOR[r.value] : 'text.disabled',
-                      border: '1px solid',
-                      '&:hover': { borderColor: ROLE_COLOR[r.value], color: ROLE_COLOR[r.value] },
-                    }}
-                  />
-                ))}
-              </Box>
-
-              {listaUsedCategories.length > 0 && (
-                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
-                  <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Categoria:</Typography>
-                  <Chip
-                    label="Todas"
-                    size="small"
-                    onClick={() => setListaCatFilter('all')}
-                    sx={{
-                      fontSize: 11,
-                      bgcolor: listaCatFilter === 'all' ? 'rgba(255,255,255,0.07)' : 'transparent',
-                      borderColor: listaCatFilter === 'all' ? 'rgba(255,255,255,0.2)' : 'divider',
-                      color: listaCatFilter === 'all' ? 'text.secondary' : 'text.disabled',
-                      border: '1px solid',
-                    }}
-                  />
-                  {listaUsedCategories.map(c => (
-                    <Chip
-                      key={c.value}
-                      label={c.label}
-                      size="small"
-                      onClick={() => setListaCatFilter(listaCatFilter === c.value ? 'all' : c.value)}
-                      sx={{
-                        fontSize: 11, fontWeight: 600,
-                        bgcolor: listaCatFilter === c.value ? `${c.color}20` : 'transparent',
-                        borderColor: listaCatFilter === c.value ? c.color : 'divider',
-                        color: listaCatFilter === c.value ? c.color : 'text.disabled',
-                        border: '1px solid',
-                        '&:hover': { borderColor: c.color, color: c.color },
-                      }}
-                    />
-                  ))}
-                </Box>
-              )}
-            </Box>
-          )}
-
-          {listaFiltrada.length === 0 ? (
-            <Box sx={{ textAlign: 'center', py: 6 }}>
-              <FormatListBulletedRoundedIcon sx={{ fontSize: 36, color: 'text.disabled', mb: 1.5, opacity: 0.4 }} />
-              <Typography sx={{ fontSize: 13, color: 'text.disabled' }}>
-                {lista.length === 0
-                  ? 'Nenhuma pendência ainda. Marque sugestões com o bookmark na aba Sugestões.'
-                  : 'Nenhum item para esse filtro.'}
-              </Typography>
-            </Box>
-          ) : (
-            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
-              {listaFiltrada.map(item => {
-                const rl = ROLES.find(r => r.value === item.role);
-                const catColor = item.categoria ? getCategoryColor(item.categoria) : null;
-                const catLabel = item.categoria ? getCategoryLabel(item.categoria) : null;
-                const date = new Date(item.addedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
-                return (
-                  <Paper
-                    key={item.id}
-                    elevation={0}
-                    sx={{ p: '12px 16px', display: 'flex', gap: 1.5, alignItems: 'flex-start', opacity: item.done ? 0.5 : 1, transition: 'opacity .2s' }}
-                  >
-                    <Checkbox
-                      checked={item.done}
-                      onChange={() => { toggleListaItem(item.id); refreshLista(); }}
-                      size="small"
-                      sx={{ p: '2px', mt: '1px', flexShrink: 0, color: 'text.disabled', '&.Mui-checked': { color: '#22c55e' } }}
-                    />
-                    <Box sx={{ flex: 1, minWidth: 0 }}>
-                      {item.title && (
-                        <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'text.primary', mb: '4px', textDecoration: item.done ? 'line-through' : 'none' }}>
-                          {item.title}
-                        </Typography>
-                      )}
-                      <Typography sx={{ fontSize: 13, color: item.title ? 'text.secondary' : 'text.primary', lineHeight: 1.7, whiteSpace: 'pre-wrap', wordBreak: 'break-word', textDecoration: item.done ? 'line-through' : 'none' }}>
-                        {item.texto}
-                      </Typography>
-                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: '6px', flexWrap: 'wrap' }}>
-                        <Chip label={rl?.label ?? item.role} size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${ROLE_COLOR[item.role]}18`, color: ROLE_COLOR[item.role], border: `1px solid ${ROLE_COLOR[item.role]}44`, fontWeight: 600 }} />
-                        {catLabel && catColor && (
-                          <Chip label={catLabel} size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${catColor}18`, color: catColor, border: `1px solid ${catColor}44`, fontWeight: 600 }} />
-                        )}
-                        {item.userName && <Typography sx={{ fontSize: 11, fontWeight: 600, color: 'text.secondary' }}>{item.userName}</Typography>}
-                        <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>{date}</Typography>
-                      </Box>
-                    </Box>
-                    <Tooltip title="Remover da lista">
-                      <IconButton size="small" onClick={() => { removeFromLista(item.id); refreshLista(); }} sx={{ color: 'text.disabled', '&:hover': { color: '#ef4444' }, flexShrink: 0, mt: '2px' }}>
-                        <DeleteRoundedIcon sx={{ fontSize: 15 }} />
-                      </IconButton>
-                    </Tooltip>
-                  </Paper>
-                );
-              })}
-            </Box>
-          )}
-        </Box>
-      )}
-    </Box>
-  );
+export function ConfigPage({ role, userName }: { role?: Role; userName?: string }) {
+  return <SugestoesPage role={role ?? 'gestao'} userName={userName ?? ''} />;
 }
 
-function FeatureCard({ feature, onSave, isAdm }: { feature: RoleFeature; onSave: (f: RoleFeature) => void; isAdm?: boolean }) {
+// ─── FeatureCard ─────────────────────────────────────────────────────────────
+
+export function FeatureCard({ feature, onSave, isAdm }: { feature: RoleFeature; onSave: (f: RoleFeature) => void; isAdm?: boolean }) {
   const [editing, setEditing] = useState(false);
   const [draft, setDraft] = useState<RoleFeature>({ ...feature });
 
-  const handleEdit = () => {
-    setDraft({ ...feature });
-    setEditing(true);
-  };
-
+  const handleEdit = () => { setDraft({ ...feature }); setEditing(true); };
   const handleSave = () => {
     if (!draft.title.trim()) return;
     onSave({ ...draft, title: draft.title.trim(), description: draft.description.trim() });
     setEditing(false);
   };
-
   const toggleRole = (r: Role) => {
-    setDraft(d => ({
-      ...d,
-      roles: d.roles.includes(r) ? d.roles.filter(x => x !== r) : [...d.roles, r],
-    }));
+    setDraft(d => ({ ...d, roles: d.roles.includes(r) ? d.roles.filter(x => x !== r) : [...d.roles, r] }));
   };
 
   if (editing) {
     return (
       <Paper elevation={0} sx={{ p: '16px', display: 'flex', flexDirection: 'column', gap: 2, border: '1px solid', borderColor: 'primary.main' }}>
-        {/* Title */}
-        <TextField
-          label="Título"
-          size="small"
-          fullWidth
-          value={draft.title}
+        <TextField label="Título" size="small" fullWidth value={draft.title}
           onChange={e => setDraft(d => ({ ...d, title: e.target.value }))}
-          sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
-        />
-
-        {/* Description */}
-        <TextField
-          label="Descrição"
-          size="small"
-          fullWidth
-          multiline
-          minRows={2}
-          value={draft.description}
+          sx={{ '& .MuiInputBase-root': { fontSize: 13 } }} />
+        <TextField label="Descrição" size="small" fullWidth multiline minRows={2} value={draft.description}
           onChange={e => setDraft(d => ({ ...d, description: e.target.value }))}
-          sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
-        />
-
-        {/* Page */}
+          sx={{ '& .MuiInputBase-root': { fontSize: 13 } }} />
         <Box>
           <Typography sx={{ fontSize: 11, color: 'text.disabled', mb: '6px' }}>Página</Typography>
           <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
             {PAGE_CATEGORIES.map(c => {
               const selected = draft.page === c.label;
               return (
-                <Chip
-                  key={c.value}
-                  label={c.label}
-                  size="small"
-                  onClick={() => setDraft(d => ({ ...d, page: c.label }))}
-                  sx={{
-                    fontSize: 10, height: 20, fontWeight: 600,
-                    bgcolor: selected ? `${c.color}22` : 'transparent',
-                    borderColor: selected ? c.color : 'divider',
-                    color: selected ? c.color : 'text.disabled',
-                    border: '1px solid',
-                    '&:hover': { borderColor: c.color, color: c.color },
-                  }}
-                />
+                <Chip key={c.value} label={c.label} size="small" onClick={() => setDraft(d => ({ ...d, page: c.label }))}
+                  sx={{ fontSize: 10, height: 20, fontWeight: 600, bgcolor: selected ? `${c.color}22` : 'transparent', borderColor: selected ? c.color : 'divider', color: selected ? c.color : 'text.disabled', border: '1px solid', '&:hover': { borderColor: c.color, color: c.color } }} />
               );
             })}
           </Box>
         </Box>
-
-        {/* Roles */}
         <Box>
           <Typography sx={{ fontSize: 11, color: 'text.disabled', mb: '6px' }}>
             Funções
-            {draft.roles.length === ROLES.length && (
-              <Box component="span" sx={{ color: '#22c55e', ml: '6px' }}>· Todas selecionadas (disponível para todos)</Box>
-            )}
+            {draft.roles.length === ROLES.length && <Box component="span" sx={{ color: '#22c55e', ml: '6px' }}>· Todas selecionadas</Box>}
           </Typography>
           <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
             {ROLES.map(r => {
               const selected = draft.roles.includes(r.value);
               return (
-                <Chip
-                  key={r.value}
-                  label={r.label}
-                  size="small"
-                  onClick={() => toggleRole(r.value)}
-                  sx={{
-                    fontSize: 10, height: 20, fontWeight: 600,
-                    bgcolor: selected ? `${ROLE_COLOR[r.value]}22` : 'transparent',
-                    borderColor: selected ? ROLE_COLOR[r.value] : 'divider',
-                    color: selected ? ROLE_COLOR[r.value] : 'text.disabled',
-                    border: '1px solid',
-                    '&:hover': { borderColor: ROLE_COLOR[r.value], color: ROLE_COLOR[r.value] },
-                  }}
-                />
+                <Chip key={r.value} label={r.label} size="small" onClick={() => toggleRole(r.value)}
+                  sx={{ fontSize: 10, height: 20, fontWeight: 600, bgcolor: selected ? `${ROLE_COLOR[r.value]}22` : 'transparent', borderColor: selected ? ROLE_COLOR[r.value] : 'divider', color: selected ? ROLE_COLOR[r.value] : 'text.disabled', border: '1px solid', '&:hover': { borderColor: ROLE_COLOR[r.value], color: ROLE_COLOR[r.value] } }} />
               );
             })}
           </Box>
         </Box>
-
-        {/* Implemented toggle */}
         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
           <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Status:</Typography>
-          <Chip
-            label={draft.implemented ? 'Implementado' : 'Planejado'}
-            size="small"
+          <Chip label={draft.implemented ? 'Implementado' : 'Planejado'} size="small"
             onClick={() => setDraft(d => ({ ...d, implemented: !d.implemented }))}
-            sx={{
-              fontSize: 11, fontWeight: 600, cursor: 'pointer',
-              bgcolor: draft.implemented ? 'rgba(34,197,94,0.1)' : 'rgba(255,197,0,0.06)',
-              color: draft.implemented ? '#22c55e' : '#ffc500',
-              border: `1px solid ${draft.implemented ? 'rgba(34,197,94,0.3)' : 'rgba(255,197,0,0.2)'}`,
-            }}
-          />
+            sx={{ fontSize: 11, fontWeight: 600, cursor: 'pointer', bgcolor: draft.implemented ? 'rgba(34,197,94,0.1)' : 'rgba(255,197,0,0.06)', color: draft.implemented ? '#22c55e' : '#ffc500', border: `1px solid ${draft.implemented ? 'rgba(34,197,94,0.3)' : 'rgba(255,197,0,0.2)'}` }} />
         </Box>
-
-        {/* KPIs — ADM only */}
         {isAdm && (
           <Box>
             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '6px' }}>
               <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>KPIs <Box component="span" sx={{ color: '#ef4444', ml: '4px', fontSize: 10 }}>ADM</Box></Typography>
-              <Button
-                size="small" variant="text"
-                onClick={() => setDraft(d => ({ ...d, kpis: [...(d.kpis ?? []), { label: '', value: '', unit: '' }] }))}
-                sx={{ fontSize: 11, p: '2px 6px', minWidth: 0, color: 'text.disabled', '&:hover': { color: 'primary.main' } }}
-              >
+              <Button size="small" variant="text" onClick={() => setDraft(d => ({ ...d, kpis: [...(d.kpis ?? []), { label: '', value: '', unit: '' }] }))}
+                sx={{ fontSize: 11, p: '2px 6px', minWidth: 0, color: 'text.disabled', '&:hover': { color: 'primary.main' } }}>
                 + KPI
               </Button>
             </Box>
-            {(draft.kpis ?? []).length === 0 && (
-              <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>Nenhum KPI cadastrado.</Typography>
-            )}
+            {(draft.kpis ?? []).length === 0 && <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>Nenhum KPI cadastrado.</Typography>}
             {(draft.kpis ?? []).map((k, i) => (
               <Box key={i} sx={{ display: 'flex', gap: 0.75, mb: 0.75, alignItems: 'center' }}>
-                <TextField
-                  size="small" placeholder="Métrica"
-                  value={k.label}
+                <TextField size="small" placeholder="Métrica" value={k.label}
                   onChange={e => setDraft(d => ({ ...d, kpis: (d.kpis ?? []).map((x, j) => j === i ? { ...x, label: e.target.value } : x) }))}
-                  sx={{ flex: 2, '& .MuiInputBase-root': { fontSize: 12 } }}
-                />
-                <TextField
-                  size="small" placeholder="Valor"
-                  value={k.value}
+                  sx={{ flex: 2, '& .MuiInputBase-root': { fontSize: 12 } }} />
+                <TextField size="small" placeholder="Valor" value={k.value}
                   onChange={e => setDraft(d => ({ ...d, kpis: (d.kpis ?? []).map((x, j) => j === i ? { ...x, value: e.target.value } : x) }))}
-                  sx={{ flex: 1, '& .MuiInputBase-root': { fontSize: 12 } }}
-                />
-                <TextField
-                  size="small" placeholder="Unid."
-                  value={k.unit ?? ''}
+                  sx={{ flex: 1, '& .MuiInputBase-root': { fontSize: 12 } }} />
+                <TextField size="small" placeholder="Unid." value={k.unit ?? ''}
                   onChange={e => setDraft(d => ({ ...d, kpis: (d.kpis ?? []).map((x, j) => j === i ? { ...x, unit: e.target.value } : x) }))}
-                  sx={{ width: 64, '& .MuiInputBase-root': { fontSize: 12 } }}
-                />
-                <IconButton
-                  size="small"
-                  onClick={() => setDraft(d => ({ ...d, kpis: (d.kpis ?? []).filter((_, j) => j !== i) }))}
-                  sx={{ color: 'text.disabled', '&:hover': { color: '#ef4444' }, flexShrink: 0 }}
-                >
+                  sx={{ width: 64, '& .MuiInputBase-root': { fontSize: 12 } }} />
+                <IconButton size="small" onClick={() => setDraft(d => ({ ...d, kpis: (d.kpis ?? []).filter((_, j) => j !== i) }))}
+                  sx={{ color: 'text.disabled', '&:hover': { color: '#ef4444' }, flexShrink: 0 }}>
                   <DeleteRoundedIcon sx={{ fontSize: 14 }} />
                 </IconButton>
               </Box>
             ))}
           </Box>
         )}
-
-        {/* Actions */}
         <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
-          <Button size="small" variant="outlined" onClick={() => setEditing(false)} sx={{ fontSize: 12, textTransform: 'none' }}>
-            Cancelar
-          </Button>
-          <Button size="small" variant="contained" onClick={handleSave} disabled={!draft.title.trim()} sx={{ fontSize: 12, textTransform: 'none' }}>
-            Salvar
-          </Button>
+          <Button size="small" variant="outlined" onClick={() => setEditing(false)} sx={{ fontSize: 12, textTransform: 'none' }}>Cancelar</Button>
+          <Button size="small" variant="contained" onClick={handleSave} disabled={!draft.title.trim()} sx={{ fontSize: 12, textTransform: 'none' }}>Salvar</Button>
         </Box>
       </Paper>
     );
   }
 
-  // ── View mode ──
   return (
     <Paper elevation={0} sx={{ p: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: 2 }}>
       <Box sx={{ mt: '2px', flexShrink: 0 }}>
         {feature.implemented
           ? <CheckCircleRoundedIcon sx={{ fontSize: 16, color: '#22c55e' }} />
-          : <RadioButtonUncheckedRoundedIcon sx={{ fontSize: 16, color: 'text.disabled' }} />
-        }
+          : <RadioButtonUncheckedRoundedIcon sx={{ fontSize: 16, color: 'text.disabled' }} />}
       </Box>
-
       <Box sx={{ flex: 1, minWidth: 0 }}>
         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: '4px' }}>
           <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'text.primary' }}>{feature.title}</Typography>
           <Chip label={feature.page} size="small" sx={{ fontSize: 10, height: 16, bgcolor: 'rgba(255,255,255,0.05)', color: 'text.disabled', border: 'none' }} />
-          {!feature.implemented && (
-            <Chip label="Planejado" size="small" sx={{ fontSize: 10, height: 16, bgcolor: 'rgba(255,197,0,0.06)', color: 'rgba(255,197,0,0.5)', border: '1px solid rgba(255,197,0,0.15)' }} />
-          )}
+          {!feature.implemented && <Chip label="Planejado" size="small" sx={{ fontSize: 10, height: 16, bgcolor: 'rgba(255,197,0,0.06)', color: 'rgba(255,197,0,0.5)', border: '1px solid rgba(255,197,0,0.15)' }} />}
         </Box>
         <Typography sx={{ fontSize: 12, color: 'text.secondary', lineHeight: 1.6 }}>{feature.description}</Typography>
         {(feature.kpis?.length ?? 0) > 0 && (
@@ -590,9 +153,7 @@ function FeatureCard({ feature, onSave, isAdm }: { feature: RoleFeature; onSave:
             {feature.kpis!.map((k, i) => (
               <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '3px' }}>
                 <Typography sx={{ fontSize: 12, color: 'text.secondary', flex: 1 }}>{k.label}</Typography>
-                <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'primary.main', fontFamily: 'monospace' }}>
-                  {k.value}{k.unit ? ` ${k.unit}` : ''}
-                </Typography>
+                <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'primary.main', fontFamily: 'monospace' }}>{k.value}{k.unit ? ` ${k.unit}` : ''}</Typography>
               </Box>
             ))}
           </Box>
@@ -600,16 +161,13 @@ function FeatureCard({ feature, onSave, isAdm }: { feature: RoleFeature; onSave:
         <Box sx={{ display: 'flex', gap: 0.75, mt: 1, flexWrap: 'wrap', alignItems: 'center' }}>
           {feature.roles.map(r => {
             const rl = ROLES.find(x => x.value === r)?.label ?? r;
-            return (
-              <Chip key={r} label={rl} size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${ROLE_COLOR[r]}18`, color: ROLE_COLOR[r], border: `1px solid ${ROLE_COLOR[r]}44` }} />
-            );
+            return <Chip key={r} label={rl} size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${ROLE_COLOR[r]}18`, color: ROLE_COLOR[r], border: `1px solid ${ROLE_COLOR[r]}44` }} />;
           })}
           <Typography sx={{ fontSize: 10, color: 'text.disabled', ml: 'auto' }}>
             {new Date(feature.addedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
           </Typography>
         </Box>
       </Box>
-
       <Tooltip title="Editar">
         <IconButton size="small" onClick={handleEdit} sx={{ color: 'text.disabled', '&:hover': { color: 'text.primary' }, flexShrink: 0, mt: '2px' }}>
           <EditRoundedIcon sx={{ fontSize: 14 }} />
@@ -618,3 +176,185 @@ function FeatureCard({ feature, onSave, isAdm }: { feature: RoleFeature; onSave:
     </Paper>
   );
 }
+
+// ─── FeaturesAdminTab ─────────────────────────────────────────────────────────
+
+export function FeaturesAdminTab() {
+  const [features, setFeatures] = useState<RoleFeature[]>(() => loadFeatures());
+  const [roleFilter, setRoleFilter] = useState<Role | 'all'>('all');
+  const [pageFilter, setPageFilter] = useState<string | 'all'>('all');
+
+  const refreshFeatures = () => setFeatures(loadFeatures());
+  const handleSaveFeature = (updated: RoleFeature) => { saveFeature(updated); refreshFeatures(); };
+
+  const usedPages = new Set(features.map(f => f.page));
+  const pagePages = PAGE_CATEGORIES.filter(c => usedPages.has(c.label));
+  const filtered = features.filter(f => {
+    const matchRole = roleFilter === 'all' || f.roles.includes(roleFilter);
+    const matchPage = pageFilter === 'all' || f.page === pageFilter;
+    return matchRole && matchPage;
+  });
+  const byRole = ROLES.map(r => ({ ...r, features: features.filter(f => f.roles.includes(r.value)) })).filter(r => r.features.length > 0);
+
+  return (
+    <Box>
+      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1.5 }}>
+        <Box>
+          <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>Funcionalidades por Função</Typography>
+          <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>Lista de recursos exclusivos ou diferenciados por setor. Clique em editar para ajustar.</Typography>
+        </Box>
+        <Chip label={`${features.filter(f => f.implemented).length} / ${features.length} implementadas`} size="small"
+          sx={{ bgcolor: 'rgba(255,197,0,0.08)', color: '#ffc500', border: '1px solid rgba(255,197,0,0.2)', fontSize: 11, fontWeight: 600 }} />
+      </Box>
+
+      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
+        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
+          <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Função:</Typography>
+          <Chip label="Todas" size="small" onClick={() => setRoleFilter('all')}
+            sx={{ fontSize: 11, fontWeight: 600, bgcolor: roleFilter === 'all' ? 'rgba(255,255,255,0.1)' : 'transparent', borderColor: roleFilter === 'all' ? 'rgba(255,255,255,0.3)' : 'divider', color: roleFilter === 'all' ? 'text.primary' : 'text.disabled', border: '1px solid' }} />
+          {ROLES.map(r => (
+            <Chip key={r.value} label={r.label} size="small" onClick={() => setRoleFilter(roleFilter === r.value ? 'all' : r.value)}
+              sx={{ fontSize: 11, fontWeight: 600, bgcolor: roleFilter === r.value ? `${ROLE_COLOR[r.value]}22` : 'transparent', borderColor: roleFilter === r.value ? ROLE_COLOR[r.value] : 'divider', color: roleFilter === r.value ? ROLE_COLOR[r.value] : 'text.disabled', border: '1px solid', '&:hover': { borderColor: ROLE_COLOR[r.value], color: ROLE_COLOR[r.value] } }} />
+          ))}
+        </Box>
+        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
+          <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Categoria:</Typography>
+          <Chip label="Todas" size="small" onClick={() => setPageFilter('all')}
+            sx={{ fontSize: 11, bgcolor: pageFilter === 'all' ? 'rgba(255,255,255,0.07)' : 'transparent', borderColor: pageFilter === 'all' ? 'rgba(255,255,255,0.2)' : 'divider', color: pageFilter === 'all' ? 'text.secondary' : 'text.disabled', border: '1px solid' }} />
+          {pagePages.map(cat => (
+            <Chip key={cat.value} label={cat.label} size="small" onClick={() => setPageFilter(pageFilter === cat.label ? 'all' : cat.label)}
+              sx={{ fontSize: 11, fontWeight: 600, bgcolor: pageFilter === cat.label ? `${cat.color}20` : 'transparent', borderColor: pageFilter === cat.label ? cat.color : 'divider', color: pageFilter === cat.label ? cat.color : 'text.disabled', border: '1px solid', '&:hover': { borderColor: cat.color, color: cat.color } }} />
+          ))}
+        </Box>
+      </Box>
+
+      {filtered.length === 0 ? (
+        <Typography sx={{ fontSize: 13, color: 'text.disabled', fontStyle: 'italic' }}>Nenhuma funcionalidade encontrada para os filtros selecionados.</Typography>
+      ) : roleFilter === 'all' ? (
+        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
+          {byRole.filter(r => pageFilter === 'all' || r.features.some(f => f.page === pageFilter)).map(r => (
+            <Box key={r.value}>
+              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
+                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: ROLE_COLOR[r.value], flexShrink: 0 }} />
+                <Typography sx={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: ROLE_COLOR[r.value] }}>{r.label}</Typography>
+                <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>· {r.features.filter(f => pageFilter === 'all' || f.page === pageFilter).length} item(s)</Typography>
+              </Box>
+              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
+                {r.features.filter(f => pageFilter === 'all' || f.page === pageFilter).map(f => <FeatureCard key={f.id} feature={f} onSave={handleSaveFeature} isAdm={true} />)}
+              </Box>
+            </Box>
+          ))}
+        </Box>
+      ) : (
+        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
+          {filtered.map(f => <FeatureCard key={f.id} feature={f} onSave={handleSaveFeature} isAdm={true} />)}
+        </Box>
+      )}
+    </Box>
+  );
+}
+
+// ─── PendenciasTab ────────────────────────────────────────────────────────────
+
+export function PendenciasTab() {
+  const [lista, setLista] = useState<ListaItem[]>(() => loadLista());
+  const [listaRoleFilter, setListaRoleFilter] = useState<Role | 'all'>('all');
+  const [listaCatFilter, setListaCatFilter] = useState<string | 'all'>('all');
+
+  const refreshLista = () => setLista(loadLista());
+
+  const listaFiltrada = lista.filter(i => {
+    const matchRole = listaRoleFilter === 'all' || i.role === listaRoleFilter;
+    const matchCat = listaCatFilter === 'all' || i.categoria === listaCatFilter;
+    return matchRole && matchCat;
+  });
+  const listaUsedCategories = PAGE_CATEGORIES.filter(c => lista.some(i => i.categoria === c.value));
+  const listaRolesUsed = ROLES.filter(r => lista.some(i => i.role === r.value));
+  const donePct = lista.length > 0 ? Math.round((lista.filter(i => i.done).length / lista.length) * 100) : 0;
+
+  return (
+    <Box>
+      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1.5 }}>
+        <Box>
+          <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>Backlog de Pendências</Typography>
+          <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>Sugestões marcadas para acompanhamento. Marque como concluídas conforme forem implementadas.</Typography>
+        </Box>
+        {lista.length > 0 && (
+          <Chip label={`${lista.filter(i => i.done).length} / ${lista.length} concluídas (${donePct}%)`} size="small"
+            sx={{ bgcolor: 'rgba(34,197,94,0.08)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)', fontSize: 11, fontWeight: 600 }} />
+        )}
+      </Box>
+
+      {lista.length > 0 && (
+        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
+          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
+            <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Função:</Typography>
+            <Chip label={`Todas (${lista.length})`} size="small" onClick={() => setListaRoleFilter('all')}
+              sx={{ fontSize: 11, fontWeight: 600, bgcolor: listaRoleFilter === 'all' ? 'rgba(255,255,255,0.1)' : 'transparent', borderColor: listaRoleFilter === 'all' ? 'rgba(255,255,255,0.25)' : 'divider', color: listaRoleFilter === 'all' ? 'text.primary' : 'text.disabled', border: '1px solid' }} />
+            {listaRolesUsed.map(r => (
+              <Chip key={r.value} label={`${r.label} (${lista.filter(i => i.role === r.value).length})`} size="small"
+                onClick={() => setListaRoleFilter(listaRoleFilter === r.value ? 'all' : r.value)}
+                sx={{ fontSize: 11, fontWeight: 600, bgcolor: listaRoleFilter === r.value ? `${ROLE_COLOR[r.value]}20` : 'transparent', borderColor: listaRoleFilter === r.value ? ROLE_COLOR[r.value] : 'divider', color: listaRoleFilter === r.value ? ROLE_COLOR[r.value] : 'text.disabled', border: '1px solid', '&:hover': { borderColor: ROLE_COLOR[r.value], color: ROLE_COLOR[r.value] } }} />
+            ))}
+          </Box>
+          {listaUsedCategories.length > 0 && (
+            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
+              <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Categoria:</Typography>
+              <Chip label="Todas" size="small" onClick={() => setListaCatFilter('all')}
+                sx={{ fontSize: 11, bgcolor: listaCatFilter === 'all' ? 'rgba(255,255,255,0.07)' : 'transparent', borderColor: listaCatFilter === 'all' ? 'rgba(255,255,255,0.2)' : 'divider', color: listaCatFilter === 'all' ? 'text.secondary' : 'text.disabled', border: '1px solid' }} />
+              {listaUsedCategories.map(c => (
+                <Chip key={c.value} label={c.label} size="small" onClick={() => setListaCatFilter(listaCatFilter === c.value ? 'all' : c.value)}
+                  sx={{ fontSize: 11, fontWeight: 600, bgcolor: listaCatFilter === c.value ? `${c.color}20` : 'transparent', borderColor: listaCatFilter === c.value ? c.color : 'divider', color: listaCatFilter === c.value ? c.color : 'text.disabled', border: '1px solid', '&:hover': { borderColor: c.color, color: c.color } }} />
+              ))}
+            </Box>
+          )}
+        </Box>
+      )}
+
+      {listaFiltrada.length === 0 ? (
+        <Box sx={{ textAlign: 'center', py: 6 }}>
+          <FormatListBulletedRoundedIcon sx={{ fontSize: 36, color: 'text.disabled', mb: 1.5, opacity: 0.4 }} />
+          <Typography sx={{ fontSize: 13, color: 'text.disabled' }}>
+            {lista.length === 0 ? 'Nenhuma pendência ainda. Marque sugestões com o bookmark na aba Sugestões.' : 'Nenhum item para esse filtro.'}
+          </Typography>
+        </Box>
+      ) : (
+        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
+          {listaFiltrada.map(item => {
+            const rl = ROLES.find(r => r.value === item.role);
+            const catColor = item.categoria ? getCategoryColor(item.categoria) : null;
+            const catLabel = item.categoria ? getCategoryLabel(item.categoria) : null;
+            const date = new Date(item.addedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
+            return (
+              <Paper key={item.id} elevation={0} sx={{ p: '12px 16px', display: 'flex', gap: 1.5, alignItems: 'flex-start', opacity: item.done ? 0.5 : 1, transition: 'opacity .2s' }}>
+                <Checkbox checked={item.done} onChange={() => { toggleListaItem(item.id); refreshLista(); }} size="small"
+                  sx={{ p: '2px', mt: '1px', flexShrink: 0, color: 'text.disabled', '&.Mui-checked': { color: '#22c55e' } }} />
+                <Box sx={{ flex: 1, minWidth: 0 }}>
+                  {item.title && (
+                    <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'text.primary', mb: '4px', textDecoration: item.done ? 'line-through' : 'none' }}>
+                      {item.title}
+                    </Typography>
+                  )}
+                  <Typography sx={{ fontSize: 13, color: item.title ? 'text.secondary' : 'text.primary', lineHeight: 1.7, whiteSpace: 'pre-wrap', wordBreak: 'break-word', textDecoration: item.done ? 'line-through' : 'none' }}>
+                    {item.texto}
+                  </Typography>
+                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: '6px', flexWrap: 'wrap' }}>
+                    <Chip label={rl?.label ?? item.role} size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${ROLE_COLOR[item.role]}18`, color: ROLE_COLOR[item.role], border: `1px solid ${ROLE_COLOR[item.role]}44`, fontWeight: 600 }} />
+                    {catLabel && catColor && <Chip label={catLabel} size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${catColor}18`, color: catColor, border: `1px solid ${catColor}44`, fontWeight: 600 }} />}
+                    {item.userName && <Typography sx={{ fontSize: 11, fontWeight: 600, color: 'text.secondary' }}>{item.userName}</Typography>}
+                    <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>{date}</Typography>
+                  </Box>
+                </Box>
+                <Tooltip title="Remover da lista">
+                  <IconButton size="small" onClick={() => { removeFromLista(item.id); refreshLista(); }} sx={{ color: 'text.disabled', '&:hover': { color: '#ef4444' }, flexShrink: 0, mt: '2px' }}>
+                    <DeleteRoundedIcon sx={{ fontSize: 15 }} />
+                  </IconButton>
+                </Tooltip>
+              </Paper>
+            );
+          })}
+        </Box>
+      )}
+    </Box>
+  );
+}
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
```

_Diff limitado a 2000 linhas. Para ver tudo: `git diff snapshot/2026-06-16 upstream/main`_
