# picking-pallet — Insights

## Padrões Identificados

- **Bypass da expedição automatizada:** em 100% das variações, o pallet contorna o sorter e/ou o PTL e vai direto ao stage. O Picking Pallet existe justamente para evitar fragmentar em volumes pequenos um SKU que vem em grande quantidade.
- **Aba acoplada a uma tela-mãe:** nas variantes Direto e Exceção, o Picking Pallet não é uma tela isolada — é uma **aba dentro** da tela de picking correspondente (Fullcase ou Exceção), reaproveitando o fluxo de coleta já conhecido pelo operador.
- **Validação tripla na coleta:** a variante Exceção padroniza a sequência leitura de endereço → etiqueta de pallet → código de produto, garantindo que local, pallet e item estão corretos antes da coleta.
- **Repetição idêntica entre revisões:** as 3 revisões do projeto I24.215 (BP) trazem o texto de Picking Pallet Exceção **literalmente igual**, indicando estabilidade da especificação ao longo das revisões.

## Variações Significativas

- **Duas gerações de design coexistem no corpus.** A geração "clássica" (I24.203, I24.215, I25.111, I22.1732) trata Picking Pallet como subcaso de Fullcase/Exceção, coletado por tarefa/pedido. A geração "nova" (projetos I26: Mustard e Wild Fork) reinventa o processo como **picking por onda com matriz de fragilidade** — uma mudança de paradigma, não um ajuste incremental.
- **Critério de disparo difere:** na variante Direto o gatilho é "alta quantidade de um SKU para uma remessa"; na Exceção é atingir a "quantidade mínima de pallet cadastrada"; na variante por onda é a divisão da onda em classes de fragilidade.
- **Parâmetro de paletização por transportadora** muda materialmente o encerramento: com ele ativo, elimina-se o Aloca Pallet e o fechamento é só a leitura de UC no PRIX.
- **Idioma/região:** a especificação do Wild Fork está em inglês, sugerindo cliente/operação internacional — possível indício de que o paradigma "por onda + matriz" nasceu de demanda externa.

## Lacunas e Inconsistências

- **Layouts de etiqueta ausentes:** várias seções dizem "será utilizado o seguinte layout de impressão/etiqueta:" mas o layout em si (imagem) não foi capturado no RAW. Os campos da etiqueta de pallet só são conhecidos pela descrição textual (endereço, nº de caixas, ordem no carregamento, área de expedição).
- **Matriz de fragilidade não cadastrada em detalhe:** os projetos I26 citam classes 1/2/3 mas não definem como a classe é atribuída a cada SKU (cadastro? regra automática?).
- **"Aloca Pallet" vs "Alloca Pallet":** grafia inconsistente no material-fonte (provável erro de digitação na especificação original).
- **PTP citado sem definição formal:** aparece como área/stage na variante Mustard sem glossário no documento original.

### Candidatos a desvio / Fase 2
- **Nenhum desvio relevante detectado:** todas as seções do RAW são genuinamente de picking-pallet (Direto, Exceção e por onda). Referências a PTL/PTP/sorter são menções de contexto, não conteúdo de outro tópico. Tópico limpo do ponto de vista de roteamento.

## Inferências

- **Inferência:** O paradigma "por onda + matriz de fragilidade" tende a se tornar o padrão futuro do Picking Pallet, substituindo as abas Direto/Exceção.
  - **Confiabilidade:** média
  - **Base:** os dois projetos mais recentes (I26, datados de 2026) adotam exclusivamente esse modelo, enquanto os projetos clássicos são de 2023–2025.

- **Inferência:** A implementação deve tratar Picking Pallet como uma estratégia de roteamento sobre o mesmo motor de coleta, não como módulos completamente separados.
  - **Confiabilidade:** alta
  - **Base:** as variantes Direto e Exceção são explicitamente "abas" das telas existentes e reaproveitam o fluxo de coleta do Fullcase/Exceção.

- **Inferência:** O cálculo de rota da variante por onda exige integração de cadastro de produtos com posições e atributos de cubagem/peso por SKU.
  - **Confiabilidade:** alta
  - **Base:** o texto do Wild Fork afirma que o Velox usa a integração de cadastro do WMS para saber onde cada item está e calcular a sequência considerando cubagem.

---
*Gerado em 2026-06-24*
