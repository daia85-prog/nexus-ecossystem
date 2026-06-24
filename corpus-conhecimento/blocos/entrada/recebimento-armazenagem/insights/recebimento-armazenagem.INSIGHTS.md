# recebimento-armazenagem — Insights

## Padrões Identificados

- **"Dados antes do físico":** o invariante do recebimento é que o WMS deve inserir os dados do pallet antes da chegada física; sem isso, o consumo falha ("Pallet não encontrado"). A integração precede a operação.
- **Confirmação por dupla leitura:** RG do pallet + endereço é o gesto padrão de recebimento/alocação no Transfer — mesma lógica de rastreabilidade vista no resto do WCS.
- **Stage consolida por pedido:** os pallets do mesmo pedido ficam juntos e só liberam quando todos chegam — controle de integridade do pedido na saída.
- **Endereçamento flexível:** vários projetos permitem criar endereços na leitura (sem validação prévia) — pragmatismo operacional.

## Variações Significativas

- **Integração por mensagem × tabela intermediária (Octopus):** o recebimento de dados via DBLINK com chaves UNIQUE e preenchimento em 2 etapas é um modelo de baixo acoplamento distinto da integração por mensagem.
- **AA automatizado (BRF) × recebimento manual:** BRF usa transelevador + OTs/IDOC (canais, buffer, porta-palete); outros projetos recebem manualmente no Transfer. Topologias opostas.
- **CrossDocking (CDSK):** recebimento que pula a armazenagem e vai direto à expedição, agrupado no PTL — fluxo de exceção.
- **Stage pós-PTL (Flower) × Transfer pré-picking:** "recebimento-armazenagem" mistura entrada (Transfer) e saída (Stage de pallets prontos) — dois extremos do fluxo no mesmo tópico.

## Lacunas e Inconsistências

- **Tópico heterogêneo:** junta recebimento (entrada), armazenagem (AA), movimentação interna e stage (saída). São fases distintas do ciclo do material agrupadas por afinidade de "endereço/posição".
- **Forte sobreposição com [[integracao-wms-erp]], [[reabastecimento]] e [[ptl-alocacao]]:** OTs/transelevador (= integracao-wms-erp), Transfer→Picking (= reabastecimento), Stage pós-PTL (= expedição) — fronteiras muito porosas.
- **Seções candidatas a desvio / Fase 2:**
  - **order-start:** "Lógica de Endereçamento Interno (Exceção)" (Cristal — prefixo de endereço).
  - **reabastecimento:** "Decanting" (Beta).
  - **integracao-wms-erp:** "Ordem de Transporte (OT)", avaliação BK25, portais de entrada.
  - **integracao:** "Consulta Volumes" (SAP GET).
  - **expedicao:** "Stage de Pallets" e "CrossDocking" (consolidação de saída).
  - **sistema / picking:** "Célula" (Reverse), "Especificação" (arquitetura).
- **Imagens/tabelas ausentes:** layout de tabela intermediária, telas e endereços referenciados sem captura.

## Inferências

- **Inferência:** "recebimento-armazenagem" é um tópico guarda-chuva que provavelmente deveria ser dividido em **recebimento (Transfer)**, **armazenagem (AA)** e **stage de expedição** — três fases com regras próprias.
  - **Confiabilidade:** alta
  - **Base:** as seções cobrem entrada, estocagem e consolidação de saída, com pouca relação direta entre si além de "envolvem endereços".

- **Inferência:** O modelo de tabela intermediária com preenchimento em duas etapas (Octopus) reflete a realidade de que o pallet ganha NUM_VOLUME/ID_PALLET só quando está a caminho do stage — o dado amadurece ao longo do fluxo físico.
  - **Confiabilidade:** alta
  - **Base:** o material descreve explicitamente INSERT na onda + UPDATE quando o pallet vai ao stage.

- **Inferência:** O Stage e o consumo de pallet são os pontos onde o WCS sincroniza o físico com o WMS na entrada e na saída — falhas aqui geram "pallet não encontrado" ou "pedido incompleto", travando o fluxo.
  - **Confiabilidade:** alta
  - **Base:** ambos os processos bloqueiam a operação quando a integração/consolidação não está completa.

---
*Gerado em 2026-06-24*
