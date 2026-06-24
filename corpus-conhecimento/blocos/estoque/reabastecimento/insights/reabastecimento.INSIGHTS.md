# reabastecimento — Insights

## Padrões Identificados

- **Gatilho duplo (mínimo + previsão de onda):** quase todos os projetos do WCS geram tarefa por saldo abaixo do mínimo **ou** por consumo previsto de ondas liberadas — proativo, não só reativo.
- **Execução por tríade de leitura:** origem → item → destino + confirmar quantidade é o padrão universal de rastreabilidade.
- **Lote puro na posição é lei:** "não misturar lotes na mesma posição" aparece em todos os projetos do WCS — regra de acuracidade inegociável.
- **Endereço sugerido com override validado:** o WCS sugere, mas permite escolha manual mediante validação + confirmação — equilíbrio entre automação e flexibilidade.

## Variações Significativas

- **Cliente × WCS:** Cristal/Peter delegam ao cliente; BP/FDBR/Beleza atribuem ao WCS via coletor. Define se o tópico é "processo do WCS" ou "só integração informativa".
- **Origens diferentes:** FDBR é o mais rico (Transfer→Picking, Buffer→Picking, Transfer→Buffer); outros só Transfer→Picking. A topologia de estoque (com/sem buffer) muda o desenho.
- **Decanting (Beta):** caso único em que reabastecer envolve "desmontar" full case em bins — acopla reabastecimento ao picking-fullcase e ao picking-cart.
- **Segregação por empresa (BP):** regra específica de operação multiempresa na mesma área física — não generalizável.
- **worktype "PICK" (FDBR):** estende o reabastecimento para retiradas a pedido do ERP (devolução/segregação/qualidade) — fronteira com movimentação de estoque.

## Lacunas e Inconsistências

- **"Reabastecimento Estoque Velox" repetido literal:** BP traz o mesmo texto em 3 revisões — contagem inflada.
- **Responsabilidade ambígua entre projetos:** "de responsabilidade do cliente" × "de responsabilidade do WCS" coexistem; é preciso o flag por projeto para não assumir o fluxo errado.
- **Seções candidatas a desvio / Fase 2:**
  - **estoque / movimentação:** "worktype PICK" (retirada por solicitação do ERP — devolução/segregação) é mais movimentação de estoque do que reabastecimento de picking.
  - **picking-fullcase / picking-cart:** as três etapas de Decanting (Beta) descrevem preparação de coleta, fronteira com o picking.
  - **integracao-wcs-wms:** "Retorno Reabastecimento" (contrato de integração) já documentado em [[integracao-wcs-wms]] — evitar duplicação.
- **Imagens/telas ausentes:** telas do coletor e de manual preventivo referenciadas sem captura.

## Inferências

- **Inferência:** O reabastecimento é o regulador de ritmo do picking — a previsão por ondas liberadas indica que o WCS antecipa a demanda em vez de só reagir a rupturas.
  - **Confiabilidade:** alta
  - **Base:** o gatilho "previsão de consumo a partir de ondas já liberadas" é explícito em FDBR, BP e Beleza.

- **Inferência:** A regra de lote puro + segregação por empresa torna o reabastecimento dependente de um cadastro de posição rico (lote atual, empresa, mínimo/máximo) — sem ele, o WCS não consegue sugerir corretamente.
  - **Confiabilidade:** alta
  - **Base:** as validações descritas exigem conhecer lote ocupante, empresa e limites da posição (ver [[integracao-cadastros]] e [[inventario]]).

- **Inferência:** O Decanting tende a aparecer só em operações que recebem full case e separam fracionado no mesmo CD; é um padrão de nicho, não universal.
  - **Confiabilidade:** média
  - **Base:** aparece apenas no Beta, vinculado à unificação de coleta no Order Start Full Case.

---
*Gerado em 2026-06-24*
