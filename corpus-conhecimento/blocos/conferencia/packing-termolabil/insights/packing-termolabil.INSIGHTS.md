# packing-termolabil — Insights

## Padrões Identificados

- **Etiqueta dedicada como denominador comum:** quatro projetos diferentes (I24.215 em 3 revisões + I22.1732) repetem exatamente o mesmo enunciado de que volumes pós Picking Fracionado/Termolábil usam um layout de etiqueta específico. É o único fato verdadeiramente recorrente do tópico.
- **Acoplamento com a separação por temperatura:** o packing termolábil não é tratado isoladamente — ele herda a lógica de priorização de temperatura definida na separação (congelado/resfriado).

## Variações Significativas

- **Profundidade desigual entre projetos:** os projetos BP e Flower só mencionam o layout de etiqueta, enquanto o BRF–Salvador (I22.120) é o único que detalha a mecânica de separação por temperatura (tipos padrão/mista, multiplicadores, docas). A regra de negócio substantiva vem de um único cliente.
- **Tratamento de docas:** a distinção entre docas principais (vindas do IDOC) e auxiliares (livres, mas com bloqueio de onda se em uso) aparece apenas no BRF.

## Lacunas e Inconsistências

- **Conteúdo majoritariamente vazio:** quatro de cinco seções são apenas a frase introdutória de um layout de etiqueta que **não foi capturado** (a imagem do layout ficou de fora do RAW). Na prática, o tópico tem **uma** seção de conteúdo real.
- **Fronteira difusa com a separação:** a seção sobre tipos de separação e docas descreve mais o **processo de separação por temperatura** do que o **packing** em si. Pode ser um candidato a desvio/realocação para um tópico de separação termolábil ou de docas, caso o material cresça.
- **Sem detalhamento de telas de packing:** não há descrição de campos, validações de peso ou conferência específicos do packing termolábil — apenas a etiqueta.

### Candidatos a desvio / Fase 2
- **separacao (separação por temperatura):** a seção "Tipo de separação" (I22.120 BRF) descreve tipos padrão/mista, multiplicadores de temperatura (congelado=1/resfriado=2) e regra de docas principais × auxiliares — é **processo de separação**, não de packing. Candidata a realocação para um tópico de separação termolábil/docas.
- **Observação:** removidas essas, o tópico fica com pouquíssimo conteúdo próprio (só a etiqueta) — reforça a hipótese de **fusão com [[packing]]** em vez de manter MD autônomo.

## Inferências

- **Inferência:** O Packing Termolábil provavelmente compartilha a maior parte do fluxo com o packing/conferência padrão, diferindo apenas na etiqueta e na herança das regras de temperatura.
  - **Confiabilidade:** média
  - **Base:** o material só destaca a etiqueta específica e a priorização por temperatura; nenhuma etapa de embalagem exclusiva é descrita.

- **Inferência:** A regra de multiplicadores (congelado=1, resfriado=2) serve para ordenar a fila de separação, fazendo o resfriado "esperar" o congelado no modo padrão.
  - **Confiabilidade:** média
  - **Base:** interpretação direta do texto do I22.120, que vincula o multiplicador ao tipo de separação e à ordem de coleta; o mecanismo exato de uso do multiplicador não é detalhado.

- **Inferência:** Este tópico precisará de complemento de fontes (ou fusão com `packing`) para sustentar um dossiê autônomo.
  - **Confiabilidade:** alta
  - **Base:** apenas 1 seção de conteúdo substantivo e forte sobreposição temática com separação/packing.

---
*Gerado em 2026-06-24*
