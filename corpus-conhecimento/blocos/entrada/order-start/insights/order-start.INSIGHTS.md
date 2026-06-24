# order-start — Insights

## Padrões Identificados

- **Order Start é o orquestrador da separação:** todos os fluxos de picking (cart, full case, PBL, coletor, exceção) começam aqui. É o ponto onde a onda vira tarefas concretas com volumes e etiquetas.
- **Um Order Start por fluxo:** o padrão é segregar telas — Padrão, Cart, Full Case, Coletor, Exceção — cada uma vendo só seus pedidos. Mistura é proibida.
- **Cuba → gera volume → imprime → induz:** a sequência canônica do Order Start é idêntica entre projetos; muda o agrupador e o tipo de caixa.
- **Exceção é radicalmente isolada:** o Order Start Exceção nunca compartilha linha, cubagem ou confirmação com a linha comum — separação total.

## Variações Significativas

- **Prioridade automática × manual:** Cristal não tem prioridade automática (só manual); outros recebem prioridade da integração. Define o quanto o operador interfere na fila.
- **Full Case por posto de impressão (Flower/Automatize):** vincular a coleta à impressora e iniciar do final da rua é uma otimização de deslocamento específica.
- **Troca de endereço por prefixo (Cristal):** mecanismo engenhoso de reclassificar para exceção sem mudar a integração — o prefixo é interno e some na confirmação ao WMS.
- **Cadenciamento por rampa (Esperança):** o Order Start já distribui volumes entre rampas do sorter para balancear a expedição — acopla início e saída.

## Lacunas e Inconsistências

- **RAW grande e disperso (285 seções):** boa parte descreve **as linhas de separação** (Fracionados Controlados/Não Controlados, posições, LEDs) que são, na prática, [[picking-pbl]] — não Order Start.
- **Seções candidatas a desvio / Fase 2:**
  - **picking-pbl / separacao:** "Separação (SP)", "Fracionados Controlados", "Fracionados Não Controlados" e os fluxos detalhados de coleta por estação.
  - **sistema:** "Especificação" (arquitetura WCS, banco, Chrome) — repetida em muitos tópicos.
  - **sorter-inducao / dashboards:** cadenciamento/matriz por rampa (Esperança).
- **Sobreposição com [[cubagem]] e [[etiquetas]]:** o Order Start gera volumes (cubagem) e imprime (etiquetas) — os três descrevem o mesmo momento sob ângulos diferentes.
- **Imagens ausentes:** telas e exemplos de etiqueta referenciados sem captura.

## Inferências

- **Inferência:** O Order Start é a "mesa de comando" da separação — sua qualidade de priorização e geração de volumes determina a eficiência de toda a linha downstream.
  - **Confiabilidade:** alta
  - **Base:** todos os fluxos de picking dependem do que o Order Start gera (volumes, etiquetas, fila).

- **Inferência:** A segregação total da exceção existe por exigência regulatória (controlados, PF, vidros) — misturar comprometeria compliance, não só eficiência.
  - **Confiabilidade:** média
  - **Base:** Cristal trata controlados/PF como exceção isolada; o material enfatiza "em nenhuma hipótese" misturar.

- **Inferência:** O Order Start deveria ser modelado como um motor único com estratégias plugáveis por fluxo, não como cinco telas independentes — a lógica base (fila → cubagem → etiqueta → indução) é a mesma.
  - **Confiabilidade:** média
  - **Base:** as cinco variantes compartilham a sequência canônica; diferem em agrupador e destino.

---
*Gerado em 2026-06-24*
