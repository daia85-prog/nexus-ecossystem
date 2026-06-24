# etiquetas — Insights

## Padrões Identificados

- **Divisão de responsabilidade clara:** WCS imprime etiquetas de volume/expedição; cliente imprime etiqueta de produção. Essa fronteira se repete em quase todos os projetos.
- **Numeração pedido+volume (X/Y):** o esquema de concatenação e o formato fracionário (0001/0003) é padrão — base da rastreabilidade do volume.
- **Reimpressão sempre controlada:** exige liderança e registra usuário/motivo; vários projetos bloqueiam a 2ª via. Controle antifraude consistente.
- **Etiqueta como chave de leitura:** a etiqueta do volume é o que o sorter e o PTL leem; suas especificações físicas (Code128, dimensões, ANSI) são requisito de operação.

## Variações Significativas

- **WCS imprime × cliente imprime tudo:** a maioria divide; Barbecue/Master colocam 100% no cliente. Define quanto do layout o WCS controla.
- **Padrão × especial (FDBR):** dois layouts conforme o pedido seja "special" — acréscimo de item/lote/nome/qtd.
- **Regras de leitura por caracteres (Barbecue):** priorizar 10 > 22 > 18 e usar dígito verificador é um protocolo de desambiguação específico de múltiplos códigos.
- **DataMatrix com GS1 (Cristal):** identificadores (90/10/30/92) estruturam a etiqueta de produção; o UC (92) é o único reenviado ao WMS.

## Lacunas e Inconsistências

- **Layouts ausentes (crônico):** quase todas as seções dizem "Layout sugerido"/"Exemplo"/"Segue etiqueta" sem a imagem — o tópico é muito visual e o RAW capturou só texto.
- **Sobreposição com [[packing]], [[conferencia]] e [[cubagem]]:** a etiqueta final nasce na cubagem, é impressa no packing/conferência e descrita em todos eles — conteúdo distribuído.
- **Seções candidatas a desvio / Fase 2:**
  - **ptl-alocacao / expedicao:** "Regras Operacionais" e "Impressão de Romaneio" por subárea (BP) — pertencem ao PTL/expedição.
  - **integracao-cadastros:** "Cadastro de impressoras" (quando aparece) e specs de impressora.
  - **conferencia:** "String DataMatrix" e validação na conferência.
- **Reimpressão repetida:** o tema "reimpressão por liderança" aparece também em [[ptm]] e [[conferencia]] — regra transversal, não exclusiva deste tópico.

## Inferências

- **Inferência:** A etiqueta de volume é a "chave primária física" do WCS — tudo (sorter, PTL, conferência, packing) gira em torno de lê-la; sua qualidade de impressão é crítica para todo o fluxo.
  - **Confiabilidade:** alta
  - **Base:** sorter, PTL e conferência todos dependem da leitura da etiqueta do volume; falha de leitura gera rejeito.

- **Inferência:** O sequencial fixo por tipo de caixa existe para reaproveitar etiquetas plásticas reutilizáveis (cart/coletor), reduzindo consumo de insumo.
  - **Confiabilidade:** média
  - **Base:** o material liga o range de sequencial à "reutilização das etiquetas do Picking Cart e do Coletor".

- **Inferência:** As regras de leitura por dígito verificador/caracteres (Barbecue) são uma camada de defesa contra MultiRead — etiquetas mal projetadas geram rejeito evitável.
  - **Confiabilidade:** alta
  - **Base:** as regras explicitam rejeito quando há ambiguidade de código, conectando etiqueta a [[sorter-rejeito]].

---
*Gerado em 2026-06-24*
