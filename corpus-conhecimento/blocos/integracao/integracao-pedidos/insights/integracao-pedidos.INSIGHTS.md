# integracao-pedidos — Insights

## Padrões Identificados

- **É a porta de entrada de tudo:** o pedido integrado carrega os dados que alimentam Order Start, mapa do sorter, conferência e cubagem. Quase todos os outros tópicos consomem campos definidos aqui.
- **Cabeçalho + itens:** a estrutura remessa (cabeçalho) + itens é universal; o que varia é a riqueza dos campos por item (cubagem, dimensões, EAN/DUN).
- **Recusa total como política de integridade:** o WCS não aceita pedido pela metade — ou processa tudo, ou nada. Padrão de consistência forte.
- **Flags dirigem o roteamento:** `prioridade`, `cod_rota`, `cliente_especial`, `double_check` não são informativos — eles decidem desvio, conferência e ordem de separação.

## Variações Significativas

- **Mensagem × tabela compartilhada:** a maioria usa integração por mensagem (JSON/IDOC); Esperança usa **tabela compartilhada** lida por `numos`. Mecanismos de transporte distintos para o mesmo conteúdo.
- **Fracionado + full case no mesmo payload (Beta):** separar os dois tipos de item na integração é uma evolução; projetos antigos têm só uma lista de itens.
- **Cubagem no payload × cubagem no WCS:** alguns pedidos já trazem a cubagem por item (Beta); outros delegam ao WCS calcular (NavePark) ou ao WMS (Octopus). Define onde mora a inteligência de dimensionamento.
- **Limite físico no payload (Beta):** exigir que a carga caiba nas posições de pallet da rampa acopla a integração à topologia física do sorter.

## Lacunas e Inconsistências

- **Forte sobreposição com [[integracao-wcs-wms]] e [[integracao-cadastros]]:** "Transfer", "Cadastro de Caixas" e flags de produto aparecem aqui e nos outros tópicos de integração — o roteador divide mal o bloco integração.
- **"Transfer" repetido literal:** BP traz o mesmo bloco em 3 revisões — contagem inflada.
- **Seções candidatas a desvio / Fase 2:**
  - **sistema:** "Especificação" (arquitetura WCS Velox, banco, Chrome).
  - **integracao-cadastros:** "Cadastro de Caixas" (Octopus/Pereira).
  - **reabastecimento / estoque:** "Transfer" (responsabilidade do WMS no abastecimento).
  - **shortpicking / integracao-wms-erp:** "Tabela de Pendência no WMS" (Winthor).
  - **paletizacao / ptl-alocacao:** "Processo de agrupamento" (CDSK).
- **JSONs de exemplo com inconsistências:** `ean_dz` repetindo o `ean`, vírgulas e fechamento de array faltando no payload Beta — não copiar literalmente.

## Inferências

- **Inferência:** A integração de pedidos é o contrato mais importante do WCS — erros aqui propagam para todo o fluxo; merece o schema mais rigoroso e versionado.
  - **Confiabilidade:** alta
  - **Base:** todos os processos downstream (order-start, sorter, conferência, cubagem) leem campos desta integração.

- **Inferência:** A política de recusa total existe porque o WCS trata a remessa como unidade atômica de separação — aceitar parcial deixaria pedidos órfãos no fluxo.
  - **Confiabilidade:** média
  - **Base:** a regra é explícita no Beta, mas a justificativa é interpretação.

- **Inferência:** O modelo de tabela compartilhada (Esperança) tende a aparecer onde o WMS é legado (Winthor) e a integração por mensagem é custosa — alternativa pragmática de baixo acoplamento técnico.
  - **Confiabilidade:** baixa
  - **Base:** um único projeto; extrapolação a partir do contexto Winthor.

---
*Gerado em 2026-06-24*
