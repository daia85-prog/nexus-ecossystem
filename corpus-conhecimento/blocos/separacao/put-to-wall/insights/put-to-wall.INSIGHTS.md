# put-to-wall — Insights

## Padrões Identificados

- **PTW = consolidar por nicho guiado por LED:** o conceito é consistente — um pedido por nicho, LED azul para alocar, LED verde para completo. É um "PTL vertical em parede" para pedidos pequenos/multi-caixa.
- **WCS cuba para dimensionar o nicho:** a cubagem decide nicho grande × pequeno — o PTW depende do cadastro de dimensões ([[integracao-cadastros]]).
- **Sempre desemboca em conferência ou packing:** o fechamento do nicho leva à decisão (por integração) de auditar ou embalar.

## Variações Significativas

- **PTW como destino × PTW como origem:** no Flower o PTW é etapa de consolidação pós-coleta antes de conferência/packing; no NavePark é consolidação do picking cart **antes** da indução na automação. Papéis diferentes no fluxo.
- **Renomeação para PTP (Wild Fork):** o conceito migra de "wall" (parede) para "pallet"; mesma ideia de validação visual, destino diferente.
- **Dimensões e contagem variam muito:** Flower (50 nichos, dois tamanhos) × NavePark (30 nichos, tamanho único) — parametrização obrigatória.

## Lacunas e Inconsistências

- **RAW dominado por desvios — candidatos a Fase 2:**
  - **integracao-pedidos / order-start (cluster grande):** ~10 seções de **"Cancelamento de Pedidos / Missão / OT (CATO)"** (FDBR, BP ×3, Beleza, Beta-Esteio, Guatemala, PTLSP). É um tema coerente e volumoso que merece consolidação própria — possível tópico **"cancelamento-pedidos"**.
  - **conferencia:** "Posto Virtual C1/C2" (PMB) — coleta na conferência via endereços virtuais.
  - **etiquetas / order-start:** "Etiqueta Virtual" (FDBR).
  - **integracao / ptm:** "Retorno de Montagem" (Dia a Dia — granularidade por etiqueta/destino).
  - **dashboards-relatorios:** "Relatório de Backlog de Separação", "Exportação", "Dashboard Rampa Cheia".
  - **sistema:** "Especificação" (arquitetura Reverse, Postgres).
- **Imagens ausentes:** layout das paredes e telas não capturados.
- **Confusão PTW × PTL × PTM × PTP:** os quatro conceitos "Put-To-X" aparecem entrelaçados no corpus; o roteador tem dificuldade de separá-los.

## Inferências

- **Inferência:** Vale criar um tópico dedicado a **cancelamento de pedidos** — o cluster é grande, coerente e repetido em quase todos os projetos, com regras estáveis (antes/depois do Order Start, supervisão por senha, "ANÁLISE" para coletas parciais).
  - **Confiabilidade:** alta
  - **Base:** ~10 seções quase idênticas sobre cancelamento, em projetos distintos, sem relação com PTW.

- **Inferência:** PTW, PTL, PTM e PTP compartilham o mesmo motor de "alocação guiada por sinalização" e diferem apenas no dispositivo/destino (parede, luz, monitor, pallet).
  - **Confiabilidade:** média
  - **Base:** os fluxos são análogos (bipar → sistema indica posição → confirmar); a diferença é a estrutura física, como já observado em [[ptm]].

- **Inferência:** O PTW é majoritariamente para operações com muitos pedidos pequenos (e-commerce/farma), onde consolidar em parede é mais eficiente que caixa a caixa.
  - **Confiabilidade:** média
  - **Base:** o material associa o PTW a "pedidos com poucas unidades" e a divisão de caixas multi-pedido.

---
*Gerado em 2026-06-24*
