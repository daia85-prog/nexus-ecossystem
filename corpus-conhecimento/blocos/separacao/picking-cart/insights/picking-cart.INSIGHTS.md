# picking-cart — Insights

## Padrões Identificados

- **Carrinho = N volumes em uma viagem:** a essência é coletar para várias caixas simultaneamente, otimizando o deslocamento. Mapear caixa↔posição é o passo que habilita isso.
- **Leitura tripla:** endereço → item (EAN/DUN) → posição da caixa é o padrão de rastreabilidade; confirma que o item certo foi à caixa certa.
- **Pendência sempre vira análise de corte:** caixas incompletas nunca seguem direto — vão para tratativa, com bloqueio da posição. Consistente com [[shortpicking]].
- **Preenchimento prioritário + multi:** agrupar pedidos pequenos e segregar no PTW é recorrente (Flower) — eficiência de caixa.

## Variações Significativas

- **WCS × Cliente (Kaizen):** Peter delega o Picking Cart ao Kaizen (WCS só cadastra caixas, `endereco`=N/A). Define se o WCS comanda ou apenas reconhece o volume depois.
- **Picking Cart de coleta × de reabastecimento (Beta):** o mesmo equipamento serve para coletar pedidos **e** para transportar bins no reabastecimento (Decanting) — dois usos distintos no mesmo nome.
- **Número de posições varia:** Flower 4, FDBR 9, Reverse 6 (PTL) — parametrização física.
- **Confirmação em tela separada (Cristal):** valida etiqueta+lote+EAN fora da automação, com travas anti-erro — rigor extra para coleta de exceção.
- **Coleta picada (FDBR):** distribuir um item/lote entre posições é uma flexibilidade que evita bloqueio por saldo fragmentado.

## Lacunas e Inconsistências

- **Forte sobreposição com [[picking-pbl]]:** "Picking Fracionado" (Beta) descrito aqui é, na prática, PBL (LEDs frente/costas, Pede Caixa) — o mesmo conteúdo aparece em ambos os tópicos.
- **Sobreposição com [[reabastecimento]]:** "Abastecimento do Picking Cart" e "Execução do Picking Cart de Reabastecimento" (Beta) são o fluxo de Decanting — pertencem a reabastecimento.
- **Seções candidatas a desvio / Fase 2:**
  - **picking-pbl:** "Picking Fracionado" (Beta — LEDs frente/costas).
  - **reabastecimento:** "Abastecimento / Execução do Picking Cart de Reabastecimento" (bins/Decanting).
  - **integracao-cadastros / picking:** "Picking Map" (Reverse — mapeamento de posições/itens).
  - **sistema:** "Especificação" (arquitetura WCS Velox).
  - **separacao (possível tópico):** "Picking Brindes" (BP) — coleta de brindes, fluxo próprio.
- **"Finalização e Confirmação" duplicado:** o bloco aparece também em [[integracao-wcs-wms]] (Picking Confirm disparado após decisão/conferência).

## Inferências

- **Inferência:** Picking Cart e PBL são duas modalidades do mesmo motor de coleta guiada — cart é móvel (operador leva as caixas), PBL é fixo (a caixa vem ao operador na esteira). A escolha depende do layout do CD.
  - **Confiabilidade:** alta
  - **Base:** ambos usam endereço→EAN→LED→confirmação; o cart adiciona o mapeamento caixa↔posição móvel.

- **Inferência:** O fim do cart "no início da esteira" indica que o WCS unifica o roteamento pós-coleta (cart, PBL, fullcase) num único fluxo de esteira/sorter.
  - **Confiabilidade:** alta
  - **Base:** o material afirma que o operador sempre encerra entregando a caixa à esteira e o Velox trata o roteamento subsequente.

- **Inferência:** A ausência de controle de estoque/balanceamento pelo WCS (Flower) implica que o reabastecimento e a acuracidade dependem do WMS — o cart é "burro" quanto a saldo.
  - **Confiabilidade:** média
  - **Base:** nota explícita de que o WCS não controla saldo das posições nesse projeto; outros projetos atribuem o controle ao WCS.

---
*Gerado em 2026-06-24*
