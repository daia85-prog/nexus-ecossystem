# checklist-carregamento — Insights

## Padrões Identificados

- **Dois pontos de controle (vazio/cheio):** o processo cerca o carregamento com inspeção na entrada e na saída — padrão clássico de controle de qualidade de expedição.
- **SAP no centro:** placa, minuta e encerramento dependem de IDOC SAP — é um processo fortemente integrado ao ERP.

## Variações Significativas

- **Cobertura insuficiente:** apenas uma seção foi capturada (auto-detectada). Não há base para comparar variações por projeto ainda.

## Lacunas e Inconsistências

- **Tópico nasceu de desvio:** estava em `conferencia-manual` mas é carregamento. A realocação é correta, mas o conteúdo é mínimo.
- **Fonte real a confirmar:** o desvio aponta `conferencia-manual` como fonte; o projeto original específico precisa ser rastreado no corpus para reforço.
- **Provável existência de mais material:** temperatura, lacre, minuta e IDOC sugerem um processo maduro em algum projeto (provavelmente frios/BRF) — buscar seções correlatas de "carregamento", "minuta", "doca" no corpus.

## Inferências

- **Inferência:** Existe um processo de **carregamento/expedição final** subrepresentado no corpus atual — checklist é só a ponta visível.
  - **Confiabilidade:** média
  - **Base:** os campos (temperatura, lacre, tipo de pallet, minuta) implicam um fluxo de doca/embarque que não tem tópico próprio hoje.

- **Inferência:** Este tópico deve crescer agregando seções de carregamento hoje dispersas em outros RAWs (ex.: "Saída de material", "doca", "minuta") — candidato a virar um bloco `carregamento` mais robusto.
  - **Confiabilidade:** média
  - **Base:** vários desvios apontados em outros insights tocam carregamento/expedição física (BRF, gaiola/Ship).

---
*Gerado em 2026-06-24 · auto-detectado na Fase 2*
