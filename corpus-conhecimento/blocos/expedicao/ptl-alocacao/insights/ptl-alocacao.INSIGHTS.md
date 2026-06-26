# ptl-alocacao — Insights

## Padrões Identificados

- **Posições dinâmicas, não parametrizadas:** o princípio central (posições vazias, vinculadas por onda, 1 pedido por posição, prioridade + FIFO) é consistente entre Flower, BP e Octopus. O PTL é alocação por demanda, não por mapa fixo.
- **Luz guia, botão confirma:** ler QR → LED acende → confirmar por botão é o gesto universal; idêntico em estrutura ao [[ptm]] e ao [[picking-pbl]] (muda o dispositivo).
- **Fechar integra ao WMS:** o fechamento do pallet (com master) é o evento que dispara a expedição/faturamento — o PTL é a fronteira final WCS→WMS na saída.
- **Reserva antecipada por sequência de entrega:** o WCS aloca o lugar antes do volume chegar — otimização de carregamento recorrente.

## Variações Significativas

- **Agrupamento romaneio × subárea (BP):** quando a transportadora não é própria, o agrupador muda para subárea — flexibilidade importante para transportadoras parceiras.
- **PTL com rota vinculada não integra (Octopus):** caso em que o PTL é só organização física, sem efeito sistêmico no WMS.
- **Segregações especiais (BP):** perigosos (pallet exclusivo, último a carregar) e PTL Exclusivo por flag (penúltimo) — regras de sequenciamento de carga sofisticadas.
- **Capacidades distintas:** Flower 28, BP 192 (24×8), Reverse 6 — parametrização física pesada.

## Lacunas e Inconsistências

- **Sobreposição forte com [[ptm]] e [[paletizacao]]:** fechamento por cubagem, etiqueta master, LED laranja e reserva de posição aparecem nos três. PTL, PTM e paletização são facetas da consolidação de saída — risco de triplicar conteúdo.
- **Seções candidatas a desvio / Fase 2:**
  - **estoque / cadastros (slotting):** "Sugestão de alocação curva ABC" (FDBR) é **slotting de entrada** (posicionar produto no picking), não alocação de saída no PTL — desvio claro.
  - **picking-pbl / order-start:** "Balanceamento 1×1" (Cristal — cadenciar item entre estações).
  - **separacao / picking-fullcase:** "Processo de Picking Exceção" (BP — coleta manual que termina no PTL).
  - **paletizacao / sorter-mapa-rota:** "Parâmetros por transportadora" (realiza paletização? Sim/Não).
  - **etiquetas:** "PTL e Pallets Termolábeis" (layout de impressão).
  - **cadastros / picking:** "Picking Map" (Reverse).
- **"Curva ABC" mal roteada:** é o desvio mais evidente — é estratégia de posicionamento de estoque, não Put To Light.

## Inferências

- **Inferência:** PTL, PTM e paletização compartilham o mesmo motor de consolidação de saída; diferem só no dispositivo de sinalização (luz × monitor) e no nível de automação. Deveriam ser implementados sobre uma base comum.
  - **Confiabilidade:** alta
  - **Base:** fechamento, master, cubagem, agrupamento por destino e reserva de posição são idênticos entre [[ptm]], [[paletizacao]] e este tópico.

- **Inferência:** O sequenciamento de carga (perigosos último, PTL exclusivo penúltimo, sequência de entrega) indica que o PTL já incorpora lógica de **ordem de carregamento do caminhão**, não só de montagem do pallet.
  - **Confiabilidade:** média
  - **Base:** BP descreve explicitamente "programado para ser o último/penúltimo a carregar" e "respeitando a sequência de entrega".

- **Inferência:** O PTL é o ponto onde o WCS devolve o controle ao WMS (integração de expedição = faturamento); falhas de integração aqui travam o faturamento.
  - **Confiabilidade:** alta
  - **Base:** o fechamento do pallet dispara a integração de expedição que o WMS usa para faturar.

---
*Gerado em 2026-06-24*
