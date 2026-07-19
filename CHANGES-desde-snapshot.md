# Mudancas desde snapshot de 16/06/2026

> Ultimo sync: 19/07/2026 12:24
> Fork: [daia85-prog/nexus-ecossystem](https://github.com/daia85-prog/nexus-ecossystem)
> Original: [RaphaelCerri/nexus-ecossystem](https://github.com/RaphaelCerri/nexus-ecossystem)

---

## Commits do Raphael desde o snapshot

```
475ac26 .
9aaa380 mta coisa
85dd725 a lot
1abdcf1 muitas alterações
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
 .obsidian/workspace.json                           |    93 +-
 BACKLOG.md                                         |    65 +-
 NEXUS_FEATURES.md                                  |    19 +-
 NEXUS_PLANO.md                                     |     4 +-
 README.md                                          |   134 +-
 ROADMAP_MINERACAO.md                               |   122 +
 Radar_Claude.md                                    |     6 +
 .../login.png                                      |   Bin 0 -> 16696 bytes
 .../signup.png                                     |   Bin 0 -> 18223 bytes
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
 corpus-conhecimento/cards/CARD_autenticacao.md     |   161 +
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
 corpus-conhecimento/cards/CARD_ptl-alocacao.md     |   186 +
 corpus-conhecimento/cards/CARD_ptm.md              |   167 +
 corpus-conhecimento/cards/CARD_put-to-wall.md      |   141 +
 corpus-conhecimento/cards/CARD_reabastecimento.md  |   168 +
 .../cards/CARD_recebimento-armazenagem.md          |   162 +
 corpus-conhecimento/cards/CARD_shortpicking.md     |   162 +
 corpus-conhecimento/cards/CARD_sorter-inducao.md   |   172 +
 corpus-conhecimento/cards/CARD_sorter-mapa-rota.md |   205 +
 corpus-conhecimento/cards/CARD_sorter-rejeito.md   |   214 +
 corpus-conhecimento/cards/CARD_sorter.md           |   202 +
 corpus-conhecimento/cards/JSON_DOCS.md             |   541 +
 corpus-conhecimento/cards/PROMPT_ED.md             |   286 +
 corpus-conhecimento/cards/_AUDITOR.md              |   248 +
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
 package-lock.json                                  |   926 +-
 package.json                                       |     4 +-
 public/ES_PLACEHOLDER_v7.docx                      |   Bin 6904976 -> 6922109 bytes
 src/App.tsx                                        |    53 +-
 src/components/Sidebar.tsx                         |    82 +-
 src/lib/docxBuilder.ts                             |    49 +-
 src/lib/featureRegistry.ts                         |     9 +
 src/lib/kickoffMeta.ts                             |     4 +-
 src/lib/pageCategories.ts                          |     1 -
 src/pages/Admin/index.tsx                          |  1223 +
 src/pages/ComingSoon.tsx                           |     4 +-
 src/pages/ConfigPage.tsx                           |   702 +-
 src/pages/Documentacao/ApontamentoHoras.tsx        |  1376 +
 src/pages/Documentacao/GerarDocumento.tsx          |    18 +-
 src/pages/Documentacao/index.tsx                   |    16 +-
 src/pages/KickoffPage.tsx                          |    27 +-
 src/pages/LoginPage.tsx                            |    14 +-
 undefined/login.png                                |   Bin 0 -> 16696 bytes
 undefined/signup.png                               |   Bin 0 -> 18223 bytes
 vite.config.ts                                     |     7 +
 342 files changed, 149754 insertions(+), 707 deletions(-)
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
index ce815a1..9640689 100644
--- a/src/lib/docxBuilder.ts
+++ b/src/lib/docxBuilder.ts
@@ -71,6 +71,8 @@ function xe(text: unknown): string {
 }
 
 function collapseSplitVars(xml: string): string {
+  xml = xml.replace(/\{(<[^>]*>)+\{/g, '{{');
+  xml = xml.replace(/\}(<[^>]*>)+\}/g, '}}');
   return xml.replace(/\{\{[^{}]{1,60}\}\}/g, (m) => m.replace(/<[^>]+>/g, ''));
 }
 
@@ -278,16 +280,6 @@ function firstNameOf(fullName: string): string {
   return fullName.trim().split(/\s+/)[0] ?? fullName.trim();
 }
 
-// Detecta se uma tabela é a tabela de stakeholders/participantes do projeto
-function isStakeholdersTable(headers: string[]): boolean {
-  const h = headers.join(' ').toLowerCase();
-  return (
-    h.includes('participante') ||
-    h.includes('stakeholder') ||
-    (h.includes('função') && h.includes('empresa'))
-  );
-}
-
 // ─── Body builder ─────────────────────────────────────────────────────────────
 
 // Parágrafo de direção de integração: "Direção: X → Y"
@@ -362,7 +354,6 @@ function estSectionLines(caps: Capitulo[], fromIndex: number): number {
 
 function buildBodyXml(
   capitulos: Capitulo[],
-  userInfo?: UserInfo,
 ): { bodyXml: string; internalsRemoved: string[] } {
   const parts: string[]    = [];
   const internals: string[] = [];
@@ -426,13 +417,10 @@ function buildBodyXml(
         internals.push(headers.join(' | '));
         continue;
       }
-      let rows = allRows.filter(r => {
+      const rows = allRows.filter(r => {
         if (r.some(v => INTERNAL_RE.test(v))) { internals.push(r.join(' | ')); return false; }
         return true;
       });
-      if (isStakeholdersTable(headers) && userInfo) {
-        rows = [[userInfo.name, 'Analista de negócios', 'Invent Smart'], ...rows];
-      }
       if (headers.length || rows.length) {
         parts.push(xmlTable(headers, rows));
         totalLines += 1.5 + rows.length;
@@ -494,7 +482,7 @@ function injectBody(docXml: string, bodyXml: string): string {
   const fim = paraBounds(docXml, ANCHOR_END);
   if (!ini || !fim) throw new Error(`Âncoras ${ANCHOR_START}/${ANCHOR_END} não encontradas no template.`);
   if (ini[0] >= fim[0]) throw new Error('Ordem das âncoras inválida no template.');
-  return docXml.slice(0, ini[0]) + bodyXml + xmlPageBreak() + docXml.slice(fim[1]);
+  return docXml.slice(0, ini[0]) + bodyXml + docXml.slice(fim[1]);
 }
 
 // ─── Public API ───────────────────────────────────────────────────────────────
@@ -516,9 +504,10 @@ export async function generateDocx(
 ): Promise<GenerateResult> {
   const { meta, capa, capitulos } = inputJson;
 
-  // userInfo tem prioridade sobre os campos de capa do JSON
-  const fullName  = userInfo?.name  || capa.nome_responsavel  || '';
-  const userEmail = userInfo?.email || capa.email             || '';
+  // capa do input.json tem prioridade — é o que o ED preencheu a partir do kickoff.
+  // userInfo (usuário logado na sessão) só é usado como fallback quando o input não traz o dado.
+  const fullName  = capa.nome_responsavel || userInfo?.name  || '';
+  const userEmail = capa.email            || userInfo?.email || '';
 
   // Retorna o valor do campo ou o padrão quando o campo está vazio ou é "[A DEFINIR]"
   const fieldVal = (val: string | undefined, def: string) =>
@@ -533,12 +522,14 @@ export async function generateDocx(
     EMAIL_RESPONSAVEL:        userEmail,
     DEPARTAMENTO_RESPONSAVEL: fieldVal(capa.departamento, 'Desenvolvimento de Software'),
     TELEFONE_RESPONSAVEL:     fieldVal(capa.telefone,     '+55 11 2833-0005|0006'),
-    DATA_REVISAO:             new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
+    DATA_REVISAO:             capa.data_revisao || new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
     DESCRICAO_REVISAO:        capa.descricao_revisao ?? 'Emissão inicial',
     // Campo responsável na tabela de revisões usa apenas o primeiro nome
     RESPONSAVEL_REVISAO:      firstNameOf(fullName) || capa.responsavel_revisao || '',
     NOME_CLIENTE:             capa.nome_cliente    ?? '',
-    DATA_APROVACAO:           capa.data_aprovacao  ?? '',
+    // Antes da aprovação, capa.data_aprovacao fica vazio por design — evita o texto
+    // fixo do template ("Rev {{REVISAO}} de {{DATA_APROVACAO}}") ficar pendurado.
+    DATA_APROVACAO:           capa.data_aprovacao || '[aprovação pendente]',
   };
 
   const codigo  = safeName(meta.codigo  ?? '') || 'PROJ';
@@ -568,11 +559,25 @@ export async function generateDocx(
       + docXml.slice(anchorPos);
   }
 
-  const { bodyXml, internalsRemoved } = buildBodyXml(capitulos, userInfo);
+  // O capítulo "Métodos de Autenticação" agora é gerado pelo ED como qualquer outro
+  // tópico (CARD_autenticacao.md, Fase 1) — não há mais extração/injeção fixa do
+  // template aqui. O conteúdo do template entre as âncoras é descartado normalmente.
+  const { bodyXml, internalsRemoved } = buildBodyXml(capitulos);
   docXml = injectBody(docXml, bodyXml);
 
   zip.file('word/document.xml', docXml);
 
+  // Força o Word a recalcular o Sumário e demais campos ao abrir o documento — sem
+  // isso, o TOC pode exibir código de campo cru (#_Toc...) em vez do texto/página.
+  const settingsFile = zip.file('word/settings.xml');
+  if (settingsFile) {
+    let settingsXml = await settingsFile.async('string');
+    if (!settingsXml.includes('<w:updateFields')) {
+      settingsXml = settingsXml.replace(/(<w:settings[^>]*>)/, '$1<w:updateFields w:val="true"/>');
+      zip.file('word/settings.xml', settingsXml);
+    }
+  }
+
   // Remove the top-right anchored image (rId2) from header6.xml — it sits on every body page's top-right corner
   const h6file = zip.file('word/header6.xml');
   if (h6file) {
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
index 0000000..b805a06
--- /dev/null
+++ b/src/pages/Admin/index.tsx
@@ -0,0 +1,1223 @@
+import { useState, useEffect, useCallback } from 'react';
+import Box from '@mui/material/Box';
+import Button from '@mui/material/Button';
+import Chip from '@mui/material/Chip';
+import IconButton from '@mui/material/IconButton';
+import MenuItem from '@mui/material/MenuItem';
+import Checkbox from '@mui/material/Checkbox';
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
+import { FeaturesAdminTab, ROLE_COLOR } from '../ConfigPage';
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
+// ─── Corpus Knowledge Map ────────────────────────────────────────────────────
+
+interface TopicCard {
+  n: number;
+  slug: string;
+  desc: string;
+  approx?: boolean;
+  badge?: 'NOVO' | 'SPLIT';
+  wide?: boolean;
+  ghost?: boolean;
+}
+
+interface BlockSub {
+  label: string;
+  topics: TopicCard[];
+}
+
+interface CorpusBlock {
+  seq: string;
+  label: string;
+  total: string;
+  sys?: boolean;
+  topics?: TopicCard[];
+  sub?: BlockSub[];
+}
+
+const CORPUS_UPDATED = '23 Jun 2026';
+const CORPUS_TOTAL   = 6626;
+const CORPUS_ROUTED  = 5200;
+
+const CORPUS_BLOCKS: CorpusBlock[] = [
+  {
+    seq: '01', label: 'Entrada', total: '~910',
+    topics: [
+      { n: 348, slug: 'order-start',           desc: 'ondas, priorização, cancelamentos, cargas do dia' },
+      { n: 160, slug: 'cubagem',                desc: 'dimensionamento, peso, matrizes de fragilidade' },
+      { n: 402, slug: 'recebimento-armazenagem',desc: 'portais, crossdocking, transelevadores (ASRS), putaway' },
+    ],
+  },
+  {
+    seq: '02', label: 'Separação', total: '~418',
+    sub: [
+      {
+        label: 'Por tipo de mercadoria',
+        topics: [
+          { n: 120, slug: 'picking-cart',      desc: 'picking fracionado via cart+tablet — processo padrão', approx: true },
+          { n: 87,  slug: 'picking-pbl',       desc: 'picking via flowrack + LEDs (Pick by Light)', badge: 'NOVO' },
+          { n: 50,  slug: 'picking-fullcase',  desc: 'caixas fechadas, picking tunnel, fullcase perigoso', approx: true, badge: 'SPLIT' },
+          { n: 20,  slug: 'picking-pallet',    desc: 'pallets inteiros, pallet direto, exceção pallet', approx: true, badge: 'SPLIT' },
+        ],
+      },
+      {
+        label: 'Pós-picking e exceções',
+        topics: [
+          { n: 72, slug: 'put-to-wall',  desc: 'mural de consolidação, posições por pedido', badge: 'NOVO' },
+          { n: 69, slug: 'shortpicking', desc: 'ruptura de estoque, corte, divergência' },
+        ],
+      },
+    ],
+  },
+  {
+    seq: '03', label: 'Conferência', total: '~200',
+    topics: [
+      { n: 105, slug: 'conferencia',        desc: 'scanner automático, auditoria, checkout, peso dinâmico', approx: true },
+      { n: 20,  slug: 'conferencia-manual', desc: 'clientes especiais, Kit SKU, laudo manual, sem scanner', approx: true, badge: 'SPLIT' },
+      { n: 83,  slug: 'packing',            desc: 'embalagem, fechamento de caixa, plástico bolha' },
+    ],
+  },
+  {
+    seq: '04', label: 'Expedição', total: '~1.249',
+    topics: [
+      { n: 790, slug: 'sorter',       desc: 'classificador automático, PLC, câmeras, balança de linha' },
+      { n: 172, slug: 'ptl-alocacao', desc: 'put-to-light, alocação por luz, put-to-pallet' },
+      { n: 70,  slug: 'ptm',          desc: 'put-to-monitor, supervisório, alocação por tela', badge: 'NOVO' },
+      { n: 217, slug: 'etiquetas',    desc: 'SSCC, impressão, etiqueta de pallet e produto' },
+    ],
+  },
+  {
+    seq: '05', label: 'Estoque', total: '~184',
+    topics: [
+      { n: 124, slug: 'reabastecimento', desc: 'abastecimento de posições, replenishment, gatilhos' },
+      { n: 60,  slug: 'inventario',      desc: 'contagem rotativa, rastreabilidade, FEFO, auditoria' },
+    ],
+  },
+  {
+    seq: '06', label: 'Integração', total: '~1.238', sys: true,
+    topics: [
+      { n: 1238, slug: 'integracao', wide: true, desc: 'WMS ↔ WCS · SAP WM (WMTORD / TOCO / CATO) · APIs REST · JSON, XML, YAML · tabelas compartilhadas · mensageria EWM / ERP' },
+    ],
+  },
+  {
+    seq: '07', label: 'Sistema', total: '~968', sys: true,
+    topics: [
+      { n: 470, slug: 'cadastros-acessos',     desc: 'login, SSO, usuários, grupos, níveis de acesso, token, master data' },
+      { n: 498, slug: 'dashboards-relatorios', desc: 'KPIs, produtividade, relatórios, telas de monitoramento' },
+    ],
+  },
+];
+
+const CORPUS_INBOX: TopicCard[] = [
+  { n: 7,   slug: 'infra-WCS',  desc: 'hardware físico WCS (AMR, sinaleiros, etc.) — revisar se algum tem conteúdo de processo', ghost: true },
+  { n: 168, slug: 'sem-match',  desc: 'conteúdo sem similaridade semântica confiável — revisão manual pendente' },
+];
+
+const CORPUS_CSS = `
+@keyframes corpus-convey {
+  0%   { top: -8px; opacity: 0; }
+  4%   { opacity: 1; }
+  88%  { opacity: 0.7; }
+  100% { top: calc(100% + 8px); opacity: 0; }
+}
+.corpus-dot { animation: corpus-convey 3.6s linear infinite; }
+.corpus-dot:nth-child(2) { animation-delay: -1.2s; }
+.corpus-dot:nth-child(3) { animation-delay: -2.4s; }
+`;
+
+function CorpusTopicCard({ t }: { t: TopicCard }) {
+  const badgeColor  = t.badge === 'NOVO' ? '#F59D00' : '#22C55E';
+  const badgeBg     = t.badge === 'NOVO' ? 'rgba(245,157,0,0.1)' : 'rgba(34,197,94,0.1)';
+  const badgeBorder = t.badge === 'NOVO' ? 'rgba(245,157,0,0.25)' : 'rgba(34,197,94,0.25)';
+  const cardBorder  = t.badge === 'SPLIT' ? 'rgba(34,197,94,0.25)' :
+                      t.badge === 'NOVO'  ? 'rgba(245,157,0,0.28)' : '#1F3550';
+  const cardBg      = t.badge === 'SPLIT' ? 'linear-gradient(135deg,#152233 0%,rgba(34,197,94,0.04) 100%)' :
+                      t.badge === 'NOVO'  ? 'linear-gradient(135deg,#152233 0%,rgba(245,157,0,0.04) 100%)' :
+                      '#152233';
+  const countColor  = t.ghost ? '#2E4A68' : t.approx ? '#A36A00' : '#E2EBF5';
+  const slugColor   = t.ghost ? '#3A5A70' : '#4A9EFF';
+
+  return (
+    <div style={{
+      background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 5,
+      padding: '13px 15px', flex: t.wide ? '1 1 280px' : '1 1 130px',
+      maxWidth: t.wide ? 460 : 210, minWidth: 115, position: 'relative',
+    }}>
+      {t.badge && (
+        <span style={{
+          position: 'absolute', top: 7, right: 7,
+          fontSize: 7.5, fontWeight: 800, letterSpacing: '0.18em',
+          color: badgeColor, background: badgeBg, border: `1px solid ${badgeBorder}`,
+          borderRadius: 2, padding: '1px 5px',
+        }}>{t.badge}</span>
+      )}
+      <div style={{
+        fontFamily: "ui-monospace,'Cascadia Code','JetBrains Mono',monospace",
+        fontSize: 28, fontWeight: 700, letterSpacing: '-0.04em',
+        lineHeight: 1, color: countColor, marginBottom: 5,
+      }}>
+        {t.approx ? '~' : ''}{t.n.toLocaleString('pt-BR')}
+      </div>
+      <div style={{
+        fontFamily: 'ui-monospace,monospace', fontSize: 10.5, fontWeight: 700,
+        color: slugColor, marginBottom: 5, letterSpacing: '0.03em',
+      }}>{t.slug}</div>
+      <div style={{ fontSize: 11, color: '#5A7A95', lineHeight: 1.45 }}>{t.desc}</div>
+    </div>
+  );
+}
+
+function CorpusKnowledgeTab() {
+  const coverage = Math.round((CORPUS_ROUTED / CORPUS_TOTAL) * 100);
+
+  return (
+    <div style={{
+      background: '#0D1B2A', borderRadius: 8, overflow: 'hidden',
+      border: '1px solid #1F3550',
+      fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif",
+    }}>
+      <style>{CORPUS_CSS}</style>
+
+      {/* ── Hero Stats ── */}
+      <div style={{ padding: '28px 28px 24px 60px', borderBottom: '1px solid #1F3550', position: 'relative' }}>
+        <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: '#F59D00' }} />
+
+        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#F59D00', marginBottom: 8 }}>
+          Invent Corp · Nexus WCS · {CORPUS_UPDATED}
+        </div>
+        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#E2EBF5', lineHeight: 1.1, marginBottom: 20 }}>
+          Corpus<span style={{ color: '#F59D00' }}>-</span>Conhecimento{' '}
+          <span style={{ color: '#A3BACF', fontWeight: 400 }}>WMS / WCS</span>
+        </div>
+
+        {/* Big numbers */}
+        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 32px', marginBottom: 20 }}>
+          {([
+            { n: CORPUS_TOTAL.toLocaleString('pt-BR'), label: 'seções mineradas',    color: '#E2EBF5' },
+            { n: `~${CORPUS_ROUTED.toLocaleString('pt-BR')}`, label: 'roteadas em tópicos', color: '#F59D00', note: `${coverage}% cobertura` },
+            { n: '21 tópicos',  label: '7 blocos temáticos',  color: '#4A9EFF' },
+            { n: '175',         label: 'em quarentena',        color: '#E2EBF5' },
+            { n: '757',         label: 'boilerplate descartado', color: '#5A7A95' },
+          ] as { n: string; label: string; color: string; note?: string }[]).map((s, i) => (
+            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
+              <div style={{
+                fontFamily: "ui-monospace,'Cascadia Code','JetBrains Mono',monospace",
+                fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: s.color,
+              }}>{s.n}</div>
+              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5A7A95' }}>
+                {s.label}
+              </div>
+              {s.note && (
+                <div style={{ fontSize: 9, color: '#F59D00', fontWeight: 700, letterSpacing: '0.08em' }}>{s.note}</div>
+              )}
+            </div>
+          ))}
+        </div>
+
+        {/* Coverage bar */}
+        <div>
+          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
+            <span style={{ fontSize: 9.5, color: '#5A7A95', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
+              Cobertura do corpus
+            </span>
+            <span style={{ fontSize: 9.5, color: '#F59D00', fontWeight: 700, fontFamily: 'monospace' }}>
+              {coverage}% · {CORPUS_ROUTED.toLocaleString('pt-BR')} / {CORPUS_TOTAL.toLocaleString('pt-BR')} seções
+            </span>
+          </div>
+          <div style={{ height: 5, background: '#1F3550', borderRadius: 3, overflow: 'hidden' }}>
+            <div style={{
+              height: '100%', width: `${coverage}%`,
+              background: 'linear-gradient(90deg,#F59D00 0%,#4A9EFF 100%)',
+              borderRadius: 3,
+            }} />
+          </div>
+        </div>
+      </div>
+
+      {/* ── Blocks ── */}
+      <div style={{ position: 'relative', padding: '0 28px 28px 60px' }}>
+        {/* Animated left track */}
+        <div style={{
+          position: 'absolute', left: 28, top: 0, bottom: 40, width: 2, overflow: 'hidden',
+          background: 'linear-gradient(to bottom,#F59D00 0%,#A36A00 55%,#2E4A68 85%,transparent 100%)',
+        }}>
+          {[0, 1, 2].map(i => (
+            <div key={i} className="corpus-dot" style={{
+              position: 'absolute', left: '50%', transform: 'translateX(-50%)',
+              width: 7, height: 7, borderRadius: '50%',
+              background: '#F59D00', boxShadow: '0 0 8px 3px rgba(245,157,0,0.55)',
+            }} />
+          ))}
+        </div>
+
+        {CORPUS_BLOCKS.map(block => (
+          <div key={block.seq} style={{ paddingTop: 24, paddingBottom: 4 }}>
+            {/* Block header */}
+            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
+              <span style={{
+                fontFamily: 'ui-monospace,monospace', fontSize: 10, fontWeight: 700,
+                color: block.sys ? '#4A9EFF' : '#F59D00', letterSpacing: '0.1em',
+                border: `1px solid ${block.sys ? 'rgba(74,158,255,0.4)' : '#A36A00'}`,
+                borderRadius: 3, padding: '1px 6px', lineHeight: 1.6,
+              }}>{block.seq}</span>
+              <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E2EBF5' }}>
+                {block.label}
+              </span>
+              <span style={{ marginLeft: 'auto', fontFamily: 'ui-monospace,monospace', fontSize: 11, color: '#5A7A95' }}>
+                {block.total} seções
+              </span>
+            </div>
+            <div style={{ height: 1, background: '#1F3550', marginBottom: 12 }} />
+
+            {block.sub ? block.sub.map((sub, si) => (
+              <div key={si}>
+                <div style={{
+                  fontSize: 9.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
+                  color: '#5A7A95', margin: si > 0 ? '14px 0 8px' : '0 0 8px',
+                  paddingBottom: 4, borderBottom: '1px dashed #1F3550',
+                }}>{sub.label}</div>
+                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
+                  {sub.topics.map((t, ti) => <CorpusTopicCard key={ti} t={t} />)}
+                </div>
+              </div>
+            )) : (
+              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
+                {block.topics?.map((t, ti) => <CorpusTopicCard key={ti} t={t} />)}
+              </div>
+            )}
+          </div>
+        ))}
+
+        {/* ── INBOX ── */}
+        <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px dashed #1F3550' }}>
+          <div style={{
+            fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
+            color: '#5A7A95', marginBottom: 12,
+            display: 'flex', alignItems: 'center', gap: 12,
+          }}>
+            Quarentena — INBOX
+            <span style={{ fontFamily: 'ui-monospace,monospace', letterSpacing: 0, color: '#2E4A68' }}>
+              175 seções
+            </span>
+          </div>
+          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
+            {CORPUS_INBOX.map((t, i) => <CorpusTopicCard key={i} t={t} />)}
+          </div>
+        </div>
+      </div>
+
+      {/* ── Footer ── */}
+      <div style={{
+        display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center',
+        padding: '14px 28px', borderTop: '1px solid #1F3550',
+        background: 'rgba(255,255,255,0.015)',
+      }}>
+        <div>
+          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F59D00', marginBottom: 3 }}>
+            Próxima fase
+          </div>
+          <div style={{ fontSize: 12, color: '#5A7A95' }}>
+            Geração de <strong style={{ color: '#E2EBF5' }}>DOSSIE</strong> + insights por tópico ·{' '}
+            modelo <strong style={{ color: '#E2EBF5' }}>Claude Opus</strong>
+          </div>
+        </div>
+        <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
+          {([
+            { badge: 'NOVO',  label: 'novo MD',      color: '#F59D00', bg: 'rgba(245,157,0,0.1)',   border: 'rgba(245,157,0,0.25)' },
+            { badge: 'SPLIT', label: 'desmembrado',  color: '#22C55E', bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.25)' },
+          ] as { badge: string; label: string; color: string; bg: string; border: string }[]).map(l => (
+            <div key={l.badge} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: '#5A7A95' }}>
+              <span style={{
+                fontSize: 7.5, fontWeight: 800, letterSpacing: '0.15em', borderRadius: 2, padding: '1px 5px',
+                color: l.color, background: l.bg, border: `1px solid ${l.border}`,
+              }}>{l.badge}</span>
+              {l.label}
+            </div>
+          ))}
+        </div>
+      </div>
+    </div>
+  );
+}
+
+// ─── Backlog ──────────────────────────────────────────────────────────────────
+
+type BStatus = 'done' | 'pending' | 'unclear';
+type BPriority = 'high' | 'medium' | 'low';
+
+interface BItem {
+  id: string;
+  desc: string;
+  priority: BPriority;
+  status: BStatus;
+  notes?: string;
+}
+
+interface BPhase {
+  id: string;
+  label: string;
+  sub: string;
+  color: string;
+  items: BItem[];
+}
+
+type BItemExt = BItem & { phaseId: string; phaseColor: string };
+
+const BSTATUS_META: Record<BStatus, { label: string; color: string; bg: string }> = {
+  done:    { label: 'Entregue',   color: '#22c55e', bg: 'rgba(34,197,94,0.1)'  },
+  pending: { label: 'Pendente',   color: '#5A7A95', bg: 'rgba(90,122,149,0.1)' },
+  unclear: { label: 'Aguardando', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
+};
+
+const BPRIO_META: Record<BPriority, { label: string; color: string }> = {
+  high:   { label: '🔴 Alta',  color: '#ef4444' },
+  medium: { label: '🟡 Média', color: '#f59e0b' },
+  low:    { label: '🟢 Baixa', color: '#22c55e' },
+};
+
+const BACKLOG_PHASES: BPhase[] = [
+  {
+    id: 'F1', label: 'Fase 1 — Curto prazo', sub: 'Sem backend — melhorias no app atual com localStorage', color: '#22c55e',
+    items: [
+      { id: 'F1-01', desc: 'Nome do cliente e projeto aparecer preenchido no header do kickoff', priority: 'high', status: 'done', notes: 'Strip com cliente + codinome no topo de cada seção; pre-fill automático ao abrir' },
+      { id: 'F1-02', desc: 'Campo "Go-Live" nas Infos Gerais do projeto', priority: 'high', status: 'done', notes: 'Campo g_golive com máscara de data' },
+      { id: 'F1-03', desc: 'Campo "Layout do Projeto Semelhante ao:" nas Infos Gerais', priority: 'medium', status: 'done', notes: 'Campo g_layout_ref adicionado após GoLive' },
+      { id: 'F1-04', desc: 'Retirar validação numérica dos campos de quantidade — aceitar texto livre', priority: 'high', status: 'done' },
+      { id: 'F1-05', desc: 'IA no kickoff não deve ser pergunta opcional', priority: 'high', status: 'done', notes: 'st11 obrigatório dentro do Sorter' },
+      { id: 'F1-06', desc: 'Recirculação e IA no Sorter não devem ser perguntas opcionais', priority: 'medium', status: 'done' },
+      { id: 'F1-07', desc: 'Remover seção Conferência inteira do kickoff', priority: 'high', status: 'done' },
+      { id: 'F1-08', desc: 'Dependências entre funcionalidades: se tem IA → sempre tem TV e IVT/etiqueta', priority: 'medium', status: 'done', notes: 'Trigger laranja se IA=Sim e Etiquetas=Não' },
+      { id: 'F1-09', desc: 'PTM/IA: gerar campos de TV da IA ou TV do PTM e quantidade', priority: 'medium', status: 'done' },
+      { id: 'F1-10', desc: 'Revisar campos fixos padrão: torná-los invisíveis na UI mas manter no JSON', priority: 'medium', status: 'unclear', notes: 'Aguardando definição — quais campos especificamente?' },
+      { id: 'F1-11', desc: 'Integração mover para o início do formulário', priority: 'medium', status: 'done', notes: 'Seção in movida para Phase 0, antes de Order Start' },
+      { id: 'F1-12', desc: 'Notas rápidas (bloco de texto livre) visível no lado esquerdo do kickoff', priority: 'medium', status: 'done', notes: 'Scratchpad no painel esquerdo, auto-save no projeto' },
+      { id: 'F1-13', desc: 'Conta ADM: easter egg — 10 cliques no logo NEXUS + Y para acessar', priority: 'low', status: 'done' },
+      { id: 'F1-14', desc: 'KPIs linkados e visíveis na seção Administração do Config', priority: 'medium', status: 'done' },
+      { id: 'F1-15', desc: 'ADM pode editar os valores de KPI de cada funcionalidade no painel Config', priority: 'medium', status: 'done' },
+      { id: 'F1-16', desc: 'Separar "Nome do Projeto" (codinome) de "Nome do Cliente" como campos distintos', priority: 'high', status: 'done' },
+      { id: 'F1-17', desc: 'Texto com "definir" em qualquer campo → tratado como [A DEFINIR]', priority: 'medium', status: 'done', notes: 'isADefinir() detecta campos com "definir" em texto livre' },
+      { id: 'F1-18', desc: 'Versionamento de input.json por projeto: accordion no Overview, baixar/excluir/gerar por versão', priority: 'high', status: 'done', notes: 'Visível só para papel documentacao; confirmação "ALERTA, TEM CERTEZA?"' },
+    ],
+  },
+  {
+    id: 'F2', label: 'Fase 2 — Médio prazo', sub: 'Requer backend Supabase + autenticação real + integrações externas', color: '#3E87CF',
+    items: [
+      { id: 'F2-01', desc: 'Login automático se já autenticado naquele navegador (session persistente)', priority: 'high', status: 'pending', notes: 'Supabase Auth + localStorage token' },
+      { id: 'F2-02', desc: 'Registro via código enviado por e-mail (magic link / OTP)', priority: 'high', status: 'pending', notes: 'Login não precisa de código, só o registro' },
+      { id: 'F2-03', desc: 'Upload de documentos no projeto: Layout Mecânico, Elétrico, Docs aprovados', priority: 'high', status: 'pending', notes: 'Supabase Storage; vincular ao projeto' },
+      { id: 'F2-04', desc: 'Link do SharePoint por projeto (campo + abertura direta)', priority: 'medium', status: 'done', notes: 'Implementado em localStorage — campo de URL no Overview com botão "Abrir no SharePoint"' },
+      { id: 'F2-05', desc: 'Último Layout Aprovado e Último Documento Aprovado por projeto', priority: 'medium', status: 'pending', notes: 'Requer banco + upload' },
+      { id: 'F2-06', desc: 'Apontamento de Horas: horário inteligente, associação de cliente, export Excel', priority: 'high', status: 'pending', notes: 'Sub-aba já existe como Coming Soon no módulo Documentação' },
+      { id: 'F2-07', desc: 'Aba de Relatório — visualizar lacunas do kickoff e taxa de completude por projeto', priority: 'medium', status: 'pending', notes: 'Ex: campos sem preenchimento, projetos com mais TBDs, seções com menor completude' },
+      { id: 'F2-08', desc: 'Alerta de passagem de bastão entre etapas (Kickoff→Documentação→Implantação→Pós-Vendas)', priority: 'medium', status: 'pending', notes: 'Notificação automática com pendências críticas em cada transição; requer backend' },
+      { id: 'F2-09', desc: 'Dividir perguntas do kickoff: GESTOR vs OPERACIONAL por setor', priority: 'high', status: 'pending', notes: 'Cada setor complementa o projeto com suas próprias perguntas; JSON unificado' },
+      { id: 'F2-10', desc: 'Onboarding novo formato: simples, rápido, contextual por papel', priority: 'medium', status: 'pending', notes: 'Substituir intro screen atual por guia interativo' },
+      { id: 'F2-11', desc: 'Chat por projeto: painel flutuante com Claude API + contexto do JSON do kickoff', priority: 'high', status: 'pending' },
+      { id: 'F2-12', desc: 'Integração com Claude API — usuário traz sua própria API key', priority: 'high', status: 'pending', notes: 'Não aceitar plano gratuito; configurar na tela de config' },
+      { id: 'F2-13', desc: 'Visibilidade de tokens consumidos em tempo real durante uso da IA', priority: 'medium', status: 'pending' },
+      { id: 'F2-14', desc: 'Seletor de provedor IA: LLM On-Premise (gratuita) vs Claude API (alta performance)', priority: 'medium', status: 'pending', notes: 'LLM local elimina custo variável; Claude reservado para tarefas críticas. Depende de F3-01' },
+      { id: 'F2-15', desc: 'Botão "Enviar para revisão" → manda JSON/doc por e-mail para revisor específico', priority: 'medium', status: 'unclear', notes: 'Aguardando definição do fluxo de revisão e do revisor' },
+      { id: 'F2-16', desc: 'NEXUS + Especialista Documentador: botão Gerar Doc puxa JSON kickoff + dados de todos setores', priority: 'high', status: 'pending', notes: 'Unificação total do pipeline de documentação' },
+      { id: 'F2-17', desc: 'DEV precisa ver pontos de decisão e layout do projeto', priority: 'medium', status: 'unclear', notes: 'View específica para o papel Desenvolvimento com decisões técnicas e layouts' },
+      { id: 'F2-18', desc: 'RASTREAR e mapear acesso por papel: quais abas, IAs e cards cada papel vê', priority: 'high', status: 'pending', notes: 'Expansão do featureRegistry para controle granular de UI' },
+      { id: 'F2-19', desc: 'Cards Situacionais por papel: blocos de info contextuais que aparecem só para quem precisa', priority: 'medium', status: 'unclear', notes: 'Ex: PMO vê "Projetos atrasados", Implantação vê "Checklist de comissionamento"' },
+      { id: 'F2-20', desc: 'Ao gerar doc: Claude gera input.json, NEXUS monta .docx e salva no SharePoint automaticamente', priority: 'high', status: 'pending', notes: 'Pipeline totalmente automatizado; download local fica opcional. Requer F2-12 + F2-04' },
+      { id: 'F2-21', desc: 'SSO Invent + login automático via Azure AD (Microsoft Entra ID)', priority: 'high', status: 'unclear', notes: 'Requer chamado ao Jonathan (Infra) para liberação de credenciais Azure AD' },
+      { id: 'F2-22', desc: 'Alerta de Conclusão de Implantação: notificar Pós-Vendas automaticamente no encerramento da fase', priority: 'medium', status: 'pending' },
+      { id: 'F2-23', desc: 'Upload automático do .docx gerado para SharePoint no diretório parametrizado do projeto', priority: 'high', status: 'pending', notes: 'Requer integração SharePoint + F2-04; download local fica secundário' },
+      { id: 'F2-24', desc: 'Abertura imediata do arquivo no OneDrive após conclusão do upload no SharePoint', priority: 'medium', status: 'pending', notes: 'Usa vínculo nativo do OneDrive; depende de F2-23' },
+      { id: 'F2-25', desc: 'Hard rule: projetos com PBL (Pick-to-Light) → sem coletor de dados na funcionalidade Fullcase', priority: 'medium', status: 'pending', notes: 'Validação automática no motor de regras, análoga a F1-08' },
+      { id: 'F2-26', desc: 'Paletização Multi-Tipo: aceitar mais de um modelo de paletização no mesmo projeto simultaneamente', priority: 'medium', status: 'pending', notes: 'Ex: PTL + PTM combinados; hoje o sistema aceita apenas um tipo por vez' },
+      { id: 'F2-27', desc: 'Substituição por Sugestão Inteligente: motor sugere paletização e fluxo PTL otimizados com base nos dados', priority: 'medium', status: 'pending' },
+      { id: 'F2-28', desc: 'Uploads por projeto: vídeos de reuniões, Master-Data (MD), planilhas operacionais e cronogramas', priority: 'medium', status: 'pending', notes: 'Complementa F2-03; Supabase Storage ou SharePoint como destino' },
+    ],
+  },
+  {
+    id: 'F3', label: 'Fase 3 — Longo prazo', sub: 'IA avançada, infraestrutura própria, expansão multi-setor', color: '#C98A22',
+    items: [
+      { id: 'F3-01', desc: 'IA própria no servidor da empresa (LLM open-source On-Premise)', priority: 'high', status: 'pending', notes: 'Ex: Llama, Mistral rodando em servidor dedicado Invent; uso ilimitado sem custo por chamada' },
+      { id: 'F3-02', desc: 'Base de conhecimento vetorial por projeto: "Obsidian que aprende sozinho"', priority: 'high', status: 'pending', notes: 'Vector DB (ex: Qdrant, Pinecone) alimentado pelos JSONs e docs de cada projeto' },
+      { id: 'F3-03', desc: 'MD de roteamento: IA identifica quais fontes de conhecimento consultar e economiza tokens', priority: 'medium', status: 'pending', notes: 'Sistema de RAG com routing — IA decide qual especialista MD chamar' },
+      { id: 'F3-04', desc: 'Sistema de refinamento por peso: IA aprende com resultados aprovados e refina o próprio MD guia', priority: 'medium', status: 'pending', notes: 'Feedback loop — resultados aprovados aumentam peso de certos padrões' },
+      { id: 'F3-05', desc: 'Transcript do kickoff → IA preenche o formulário automaticamente', priority: 'high', status: 'pending', notes: 'Upload de áudio/texto → IA preenche → compara com preenchimento humano → aponta divergências' },
+      { id: 'F3-06', desc: 'Expansão multi-setor: PMO, Implantação e Pós-vendas com IAs especializadas', priority: 'high', status: 'pending', notes: 'Cada setor com suas perguntas específicas alimentando a IA de forma centralizada' },
+      { id: 'F3-07', desc: 'Intensivão por setor: mapear processos, identificar planilhas existentes e migrar para NEXUS', priority: 'medium', status: 'pending', notes: 'Entrevista setor → mapeia dor → constrói módulo' },
+      { id: 'F3-08', desc: 'Transformar planilhas de controle de cada setor em CRUDs dentro do NEXUS com IA específica', priority: 'medium', status: 'pending' },
+      { id: 'F3-09', desc: 'MCP Server: expor dados do NEXUS como ferramentas para IAs externas', priority: 'medium', status: 'pending', notes: 'get_project(code), list_projects(), search_projects(query)' },
+      { id: 'F3-10', desc: 'Domínio próprio: nexus.invent.com.br', priority: 'medium', status: 'pending', notes: 'Requer Netlify/VPS + configuração DNS' },
+      { id: 'F3-11', desc: 'Edição colaborativa em tempo real (Supabase Realtime)', priority: 'low', status: 'pending', notes: 'Múltiplos usuários editando o mesmo projeto simultaneamente' },
+      { id: 'F3-12', desc: 'VEX AI: pesquisa conversacional semântica na base histórica de todos os projetos', priority: 'high', status: 'pending', notes: 'Chat aberto para colaboradores autorizados; busca sobre dados históricos, documentos e JSONs' },
+      { id: 'F3-13', desc: 'VEX AI: Agentes Especialistas por vertical técnica ou cliente', priority: 'medium', status: 'pending', notes: 'Ex: agente de Integração ERP, agente de Picking; relatórios segmentados por área' },
+      { id: 'F3-14', desc: 'VEX AI: Insights preditivos e sugestões de perguntas complementares gerados automaticamente', priority: 'medium', status: 'pending' },
+      { id: 'F3-15', desc: 'Módulo de Arenas: revisão crítica de docs gerados pela LLM + loop de feedback contínuo', priority: 'high', status: 'pending', notes: 'Correções humanas alimentam input.json de feedback → refinamento automático do modelo' },
+      { id: 'F3-16', desc: 'Auditoria de segurança FABLE de todo o ecossistema antes do ganho de escala comercial', priority: 'high', status: 'pending', notes: 'Validação contra vazamento de dados corporativos e vulnerabilidades em nível de código' },
+    ],
+  },
+  {
+    id: 'F4', label: 'Fase 4 — O Auge', sub: 'Automação end-to-end — reduzir até 90% do trabalho braçal de documentação', color: '#8b5cf6',
+    items: [
+      { id: 'F4-01', desc: 'Cowork: envio automático de e-mail institucional com documento + sugestão de agenda após revisão aprovada', priority: 'high', status: 'pending', notes: 'Requer Azure Graph API (F2-21); e-mail enviado pelo NEXUS em nome do responsável' },
+      { id: 'F4-02', desc: 'Skill Reunião Doc Análise: transcrição automática + extração de pontos-chave e decisões', priority: 'high', status: 'pending', notes: 'Input: gravação ou transcript; Output: JSON estruturado de alterações propostas ao documento' },
+      { id: 'F4-03', desc: 'Skill Alterações Inteligentes: aplicar automaticamente mudanças extraídas da reunião ao documento', priority: 'high', status: 'pending', notes: 'Gera nova revisão do .docx com log de alterações; depende de F4-02' },
+      { id: 'F4-04', desc: 'Documento Modular Vivo: qualquer alteração em campo do Nexus gera tarefa automática de atualização no doc vinculado', priority: 'medium', status: 'pending', notes: 'Ex: engenharia muda nº de posições → alerta → confirmado → aplica no SharePoint + gera PDF' },
+      { id: 'F4-05', desc: 'Versionamento Semântico Rev [A].[B].[C] gerado automaticamente com base no tipo de alteração', priority: 'medium', status: 'pending', notes: 'A = escopo/tecnologia macro; B = impacto de outras áreas; C = micro-ajustes textuais. Ex: Rev 7.1.3' },
+      { id: 'F4-06', desc: 'Motor Evolutivo SUPER_MD: cada correção humana alimenta treinamento supervisionado do ecossistema', priority: 'high', status: 'pending', notes: 'NEXUS aprende organicamente a cada projeto; regras do Especialista Documentador se refinam automaticamente' },
+      { id: 'F4-07', desc: 'Etapa de Análise Crítica I.A. Gomes no pipeline de revisão antes do envio da próxima revisão ao cliente', priority: 'medium', status: 'pending', notes: 'Etapa intermediária após alterações aplicadas; aguarda confirmação do analista' },
+    ],
+  },
+];
+
+const BCHECK_KEY = 'nexus_backlog_checks_v1';
+const BDEL_KEY   = 'nexus_backlog_deleted_v1';
+
+function loadSet(key: string): Set<string> {
+  try { return new Set(JSON.parse(localStorage.getItem(key) ?? '[]') as string[]); }
+  catch { return new Set(); }
+}
+function saveSet(key: string, s: Set<string>): void {
+  localStorage.setItem(key, JSON.stringify([...s]));
+}
+
+function BacklogItemRow({
+  item, phaseColor, checked, onToggle, onDelete,
+}: {
+  item: BItem; phaseColor: string; checked: boolean;
+  onToggle: () => void; onDelete: () => void;
+}) {
+  const [confirmDel, setConfirmDel] = useState(false);
+  const prio = BPRIO_META[item.priority];
+  const borderColor = checked ? '#22c55e' : item.status === 'unclear' ? '#f59e0b' : phaseColor;
+
+  return (
+    <Paper elevation={0} sx={{ borderLeft: `3px solid ${borderColor}`, transition: 'border-color .15s' }}>
+      <Box sx={{ p: '8px 10px', display: 'flex', gap: 1, alignItems: 'flex-start' }}>
+        <Checkbox checked={checked} onChange={onToggle} size="small"
+          sx={{ p: '2px', mt: '1px', flexShrink: 0, color: 'text.disabled', '&.Mui-checked': { color: '#22c55e' } }} />
+        <Typography sx={{ fontSize: 9.5, fontFamily: 'monospace', fontWeight: 700, color: 'text.disabled', minWidth: 38, pt: '4px', flexShrink: 0 }}>
+          {item.id}
+        </Typography>
+        <Box sx={{ flex: 1, minWidth: 0 }}>
+          <Typography sx={{ fontSize: 13, fontWeight: 600, color: 'text.primary', lineHeight: 1.5 }}>
+            {item.desc}
+          </Typography>
+          {item.notes && (
+            <Typography sx={{ fontSize: 11.5, color: 'text.disabled', mt: '3px', lineHeight: 1.45 }}>
+              {item.notes}
+            </Typography>
+          )}
+        </Box>
+        <Box sx={{ display: 'flex', gap: 0.75, flexShrink: 0, alignItems: 'center', pt: '4px' }}>
+          <Chip label={prio.label} size="small"
+            sx={{ fontSize: 9.5, height: 18, bgcolor: `${prio.color}14`, color: prio.color, border: `1px solid ${prio.color}35`, fontWeight: 600 }} />
+          {item.status === 'unclear' && (
+            <Chip label="Aguardando" size="small"
+              sx={{ fontSize: 9.5, height: 18, bgcolor: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.35)', fontWeight: 600 }} />
+          )}
+          <Tooltip title="Remover item">
+            <IconButton size="small" onClick={() => setConfirmDel(true)}
+              sx={{ p: '3px', color: 'text.disabled', '&:hover': { color: '#ef4444' } }}>
+              <DeleteRoundedIcon sx={{ fontSize: 14 }} />
+            </IconButton>
+          </Tooltip>
+        </Box>
+      </Box>
+      {confirmDel && (
+        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, py: '8px', borderTop: '1px solid', borderColor: 'divider', bgcolor: 'rgba(239,68,68,0.04)' }}>
+          <Typography sx={{ fontSize: 12, color: '#ef4444', flex: 1 }}>Remover este item do backlog?</Typography>
+          <Button size="small" onClick={() => setConfirmDel(false)}
+            sx={{ fontSize: 11, textTransform: 'none', color: 'text.disabled', minWidth: 0, px: 1.5 }}>
+            Cancelar
+          </Button>
+          <Button size="small" variant="contained" onClick={onDelete}
+            sx={{ fontSize: 11, textTransform: 'none', bgcolor: '#ef4444', '&:hover': { bgcolor: '#dc2626' }, minWidth: 0, px: 1.5 }}>
+            Confirmar
+          </Button>
+        </Box>
+      )}
+    </Paper>
+  );
+}
+
+function BacklogAdminTab() {
+  const [phaseFilter, setPhaseFilter] = useState<string>('all');
+  const [prioFilter,  setPrioFilter]  = useState<BPriority | 'all'>('all');
+  const [checks,  setChecks]  = useState<Set<string>>(() => loadSet(BCHECK_KEY));
+  const [deleted, setDeleted] = useState<Set<string>>(() => loadSet(BDEL_KEY));
+  const [showDone, setShowDone] = useState(false);
+
+  const allItems: BItemExt[] = BACKLOG_PHASES.flatMap(p => p.items.map(i => ({ ...i, phaseId: p.id, phaseColor: p.color })));
+  const alive = allItems.filter(i => !deleted.has(i.id));
+
+  const isDone = (item: BItem) => item.status === 'done' || checks.has(item.id);
+
+  const toggleCheck = (id: string) => {
+    setChecks(prev => {
+      const next = new Set(prev);
+      if (next.has(id)) next.delete(id); else next.add(id);
+      saveSet(BCHECK_KEY, next);
+      return next;
+    });
+  };
+
+  const deleteItem = (id: string) => {
+    setDeleted(prev => {
+      const next = new Set(prev);
+      next.add(id);
+      saveSet(BDEL_KEY, next);
+      return next;
+    });
+  };
+
+  const doneCount    = alive.filter(isDone).length;
+  const pendingCount = alive.filter(i => !isDone(i) && i.status !== 'unclear').length;
+  const unclearCount = alive.filter(i => !isDone(i) && i.status === 'unclear').length;
+
+  const visible = alive.filter(i => {
+    if (!showDone && isDone(i)) return false;
+    const matchPhase = phaseFilter === 'all' || i.phaseId  === phaseFilter;
+    const matchPrio  = prioFilter  === 'all' || i.priority === prioFilter;
+    return matchPhase && matchPrio;
+  });
+
+  const grouped = phaseFilter === 'all'
+    ? BACKLOG_PHASES.map(p => ({ phase: p, items: visible.filter(i => i.phaseId === p.id) })).filter(g => g.items.length > 0)
+    : null;
+
+  const currentPhase = phaseFilter !== 'all' ? BACKLOG_PHASES.find(p => p.id === phaseFilter) : null;
+
+  return (
+    <Box>
+      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1.5 }}>
+        <Box>
+          <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>Backlog NEXUS</Typography>
+          <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>
+            Marque itens como concluídos para ocultá-los. Use o botão de excluir para remover o que não se aplica.
+          </Typography>
+        </Box>
+        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
+          <Chip label={`◌ ${pendingCount} pendentes`} size="small"
+            sx={{ fontSize: 11, fontWeight: 600, bgcolor: 'rgba(90,122,149,0.1)', color: '#7A96B0', border: '1px solid rgba(90,122,149,0.25)' }} />
+          {unclearCount > 0 && (
+            <Chip label={`? ${unclearCount} aguardando`} size="small"
+              sx={{ fontSize: 11, fontWeight: 600, bgcolor: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.25)' }} />
+          )}
+          <Chip
+            label={showDone ? `✓ ${doneCount} entregues · ocultar` : `✓ ${doneCount} entregues`}
+            size="small" onClick={() => setShowDone(v => !v)}
+            sx={{ fontSize: 11, fontWeight: 600, cursor: 'pointer', bgcolor: showDone ? 'rgba(34,197,94,0.12)' : 'rgba(34,197,94,0.05)', color: '#22c55e', border: `1px solid ${showDone ? 'rgba(34,197,94,0.4)' : 'rgba(34,197,94,0.2)'}`, '&:hover': { bgcolor: 'rgba(34,197,94,0.15)' } }} />
+        </Box>
+      </Box>
+
+      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
+        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
+          <Typography sx={{ fontSize: 11, color: 'text.disabled', minWidth: 60 }}>Fase:</Typography>
+          <Chip label="Todas" size="small" onClick={() => setPhaseFilter('all')}
+            sx={{ fontSize: 11, fontWeight: 600, bgcolor: phaseFilter === 'all' ? 'rgba(255,255,255,0.1)' : 'transparent', borderColor: phaseFilter === 'all' ? 'rgba(255,255,255,0.25)' : 'divider', color: phaseFilter === 'all' ? 'text.primary' : 'text.disabled', border: '1px solid' }} />
+          {BACKLOG_PHASES.map(p => (
+            <Chip key={p.id} label={p.id} size="small" onClick={() => setPhaseFilter(phaseFilter === p.id ? 'all' : p.id)}
+              sx={{ fontSize: 11, fontWeight: 700, bgcolor: phaseFilter === p.id ? `${p.color}22` : 'transparent', borderColor: phaseFilter === p.id ? p.color : 'divider', color: phaseFilter === p.id ? p.color : 'text.disabled', border: '1px solid', '&:hover': { borderColor: p.color, color: p.color } }} />
+          ))}
+        </Box>
+        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
+          <Typography sx={{ fontSize: 11, color: 'text.disabled', minWidth: 60 }}>Prioridade:</Typography>
+          <Chip label="Todas" size="small" onClick={() => setPrioFilter('all')}
+            sx={{ fontSize: 11, bgcolor: prioFilter === 'all' ? 'rgba(255,255,255,0.07)' : 'transparent', borderColor: prioFilter === 'all' ? 'rgba(255,255,255,0.2)' : 'divider', color: prioFilter === 'all' ? 'text.secondary' : 'text.disabled', border: '1px solid' }} />
+          {(['high', 'medium', 'low'] as BPriority[]).map(p => (
+            <Chip key={p} label={BPRIO_META[p].label} size="small" onClick={() => setPrioFilter(prioFilter === p ? 'all' : p)}
+              sx={{ fontSize: 11, fontWeight: 600, bgcolor: prioFilter === p ? `${BPRIO_META[p].color}18` : 'transparent', borderColor: prioFilter === p ? BPRIO_META[p].color : 'divider', color: prioFilter === p ? BPRIO_META[p].color : 'text.disabled', border: '1px solid', '&:hover': { borderColor: BPRIO_META[p].color, color: BPRIO_META[p].color } }} />
+          ))}
+        </Box>
+      </Box>
+
+      {visible.length === 0 ? (
+        <Box sx={{ textAlign: 'center', py: 5 }}>
+          <Typography sx={{ fontSize: 13, color: 'text.disabled' }}>
+            {!showDone && doneCount > 0
+              ? `Todos os itens visíveis foram entregues. Clique em "✓ ${doneCount} entregues" para exibi-los.`
+              : 'Nenhum item para os filtros selecionados.'}
+          </Typography>
+        </Box>
+      ) : grouped ? (
+        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
+          {grouped.map(({ phase, items }) => (
+            <Box key={phase.id}>
+              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
+                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: phase.color, flexShrink: 0, mt: '4px' }} />
+                <Box sx={{ flex: 1, minWidth: 0 }}>
+                  <Typography sx={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: phase.color, lineHeight: 1.4 }}>
+                    {phase.label}
+                  </Typography>
+                  <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>{phase.sub}</Typography>
+                </Box>
+                <Typography sx={{ fontSize: 10, color: 'text.disabled', fontFamily: 'monospace', flexShrink: 0 }}>
+                  {items.length} visível{items.length !== 1 ? 'is' : ''}
+                </Typography>
+              </Box>
+              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
+                {items.map(item => (
+                  <BacklogItemRow key={item.id} item={item} phaseColor={phase.color}
+                    checked={isDone(item)} onToggle={() => toggleCheck(item.id)} onDelete={() => deleteItem(item.id)} />
+                ))}
+              </Box>
+            </Box>
+          ))}
+        </Box>
+      ) : (
+        <Box>
+          {currentPhase && (
+            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
+              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: currentPhase.color, flexShrink: 0, mt: '4px' }} />
+              <Box>
+                <Typography sx={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: currentPhase.color }}>
+                  {currentPhase.label}
+                </Typography>
+                <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>{currentPhase.sub}</Typography>
+              </Box>
+            </Box>
+          )}
+          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
+            {visible.map(item => (
+              <BacklogItemRow key={item.id} item={item} phaseColor={item.phaseColor}
+                checked={isDone(item)} onToggle={() => toggleCheck(item.id)} onDelete={() => deleteItem(item.id)} />
+            ))}
+          </Box>
+        </Box>
+      )}
+    </Box>
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
+            '& .Mui-selected': { color: tab === 4 ? '#F59D00 !important' : 'primary.main' },
+            '& .MuiTabs-indicator': { bgcolor: tab === 4 ? '#F59D00' : 'primary.main' },
+          }}
+        >
+          <Tab label="Papéis" />
+          <Tab label="Apresentação" icon={<SlideshowRoundedIcon sx={{ fontSize: 16 }} />} iconPosition="start" />
+          <Tab label="Funcionalidades" />
+          <Tab label="Backlog" />
+          <Tab label="Corpus · IA" sx={{ color: tab === 4 ? '#F59D00 !important' : undefined }} />
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
+        {tab === 3 && <BacklogAdminTab />}
+
+        {/* ── Tab 4: Corpus · IA ── */}
+        {tab === 4 && (
+          <Box sx={{ pb: 2 }}>
+            <Box sx={{ mb: 2 }}>
+              <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'text.primary', mb: '2px' }}>
+                Base de Conhecimento WMS / WCS
+              </Typography>
+              <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>
+                Mapa vivo do corpus minerado — atualizado diretamente no código a cada nova sessão de mineração.
+              </Typography>
+            </Box>
+            <CorpusKnowledgeTab />
+          </Box>
+        )}
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
```

_Diff limitado a 2000 linhas. Para ver tudo: `git diff snapshot/2026-06-16 upstream/main`_
