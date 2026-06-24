# shortpicking — Insights

## Padrões Identificados

- **Decrementar é o gesto universal:** em todos os projetos que permitem short, o operador reduz a quantidade no dispositivo e confirma — disparando a integração. O texto "no display informa 10, há 8, decrementa para 8" se repete quase literalmente (Guatemala, Heart, Octopus MS, Beta-Esteio).
- **Short → conferência:** o volume com corte quase sempre é desviado para conferência/auditagem; o short é o principal gatilho de desvio, seguido de amostragem e peso.
- **Dois eixos de corte:** "com conferência" (PDV/pop-up) × "sem conferência" (LED direto). Quase todos os projetos Beta-derivados oferecem ambos.
- **Reimpressão da etiqueta pós-corte:** padrão consistente — a etiqueta é refeita só com os itens coletados, substituindo a original.
- **Bloco de texto fortemente replicado:** o "Shortpicking / Corte via LED" aparece quase idêntico em 10+ projetos (BP ×3, Beta, FOX, Dolce Gusto, Flower, Beta-Esteio, BR).

## Variações Significativas

- **Política oposta (Cristal):** é o único que **proíbe** short — falta vira cancelamento do pedido. Implementar exige um flag de "permite short" por cliente.
- **Liga/desliga (Toca da Raposa):** short como função administrável, com fallback de marcação visual — modelo intermediário entre permitir e proibir.
- **Aprovação de supervisor (NavePark):** introduz autenticação para efetivar o corte + geração automática de inventário — o corte vira evento auditável, não só um decremento.
- **Integrações divergentes:** WMTOCO/E1LTCO* (Guatemala/SAP), INT-008+INT-006 (NavePark), "1.8 Avarias/ShortPicking" (Normandia), ShortIndicator (Beleza). Cada cliente tem contrato próprio.
- **Order Start como ponto de corte (Beleza):** caso único em que o corte pode nascer já no início (sem saldo em picking nem transfer), antes mesmo da coleta.

## Lacunas e Inconsistências

- **Bug documentado no ShortIndicator (Beleza):** a especificação reconhece que o envio por item cancela saldo indevidamente em toda a missão — problema real ainda em correção; atenção ao implementar a Confirmação de Coleta volume a volume.
- **"Avarias" misturadas com short (Normandia):** o mesmo fluxo trata falta e avaria de produto — fronteira conceitual difusa.
- **Seções de outros tópicos roteadas para cá (candidatos a desvio/Fase 2):**
  - **conferencia:** "Processo de Conferência", "Categorias de Conferência", "Conferencia – Checkout" (Reisado), "Registro de Divergências" (CDSK), "Conferência/Auditoria".
  - **etiquetas / conferencia:** "Arquivos laudos" (FDBR).
  - **reabastecimento / estoque:** "Posição de Compra de Palete Vazio" (BRF).
  - **sistema / infra:** "Alta disponibilidade" (Octopus, servidor backup).
  - **dashboards:** "Relatório Resumo por Posto".
  - **integracao:** "Pack ILPN Message" (Manhattan — conteúdo "No required", ruído).
- **Repetição massiva do Cristal:** 6 seções idênticas (Itapira/P.Alegre, várias revisões) inflam a contagem sem agregar conteúdo.

## Inferências

- **Inferência:** O short deve ser modelado como um evento com política configurável por cliente (permite / proíbe / requer aprovação), não como comportamento fixo.
  - **Confiabilidade:** alta
  - **Base:** as três políticas (Cristal proíbe, Toca liga/desliga, NavePark exige supervisor) coexistem no corpus.

- **Inferência:** O shortpicking é o principal acoplador entre separação, conferência ([[conferencia]]), reabastecimento ([[reabastecimento]]) e inventário ([[inventario]]) — um corte propaga efeitos em todos.
  - **Confiabilidade:** alta
  - **Base:** o material liga explicitamente o short ao desvio para conferência, à confirmação parcial ao WMS e à geração de tarefa de inventário (NavePark).

- **Inferência:** A Confirmação de Coleta volume-a-volume com ShortIndicator precisa carregar o contexto de "total de volumes da missão" para o WMS não cancelar saldo prematuramente.
  - **Confiabilidade:** alta
  - **Base:** descrito explicitamente como bug no aditivo ShortIndicator do Beleza.

---
*Gerado em 2026-06-24*
