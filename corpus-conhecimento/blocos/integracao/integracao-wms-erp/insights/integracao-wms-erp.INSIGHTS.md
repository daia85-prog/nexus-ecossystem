# integracao-wms-erp — Insights

## Padrões Identificados

- **Tríade OT é o coração:** WMTORD (criar) → WMTOCO (confirmar) → WMCATO (cancelar) é o ciclo repetido em todos os projetos BRF. Quem entende esses três entende a integração SAP do Velox.
- **Confirmação sincroniza estado:** o material é explícito — "sem o TOCO o sistema que aguarda não sabe que a movimentação aconteceu". A confirmação é o que mantém SAP e WCS coerentes.
- **NLTYP × VLTYP por toda parte:** a distinção origem/destino e SAP/WCS via esses dois campos é o mecanismo de roteamento das confirmações.
- **IDOC/XML-SOAP é o transporte padrão SAP:** contrasta com o REST/JSON da [[integracao-wcs-wms]] — duas pilhas tecnológicas para dois tipos de WMS.

## Variações Significativas

- **SAP (este tópico) × WMS REST ([[integracao-wcs-wms]]):** a separação é tecnológica e de domínio — aqui é armazém automatizado de pallets (transelevador, frio BRF); lá é e-commerce/farma com JSON. Implementações praticamente disjuntas.
- **Cancelamento condicionado à TAG (BRF):** o WMCATO só vale antes da alteração de TAG que dispara o transelevador — regra de corrida (race condition) explícita que precisa de tratamento cuidadoso.
- **Encerramento de onda com job temporizado (Salvador):** os 5 minutos de espera de desvio + marcação NARAMPA/ENCERRADO é uma lógica sofisticada de "fechamento gracioso" ausente nos outros.
- **Abastecimento FEFO (Salvador):** varredura AA+AC pelo lote mais velho priorizando Buffer — regra de negócio rica que vai além de simples transporte.

## Lacunas e Inconsistências

- **Duplicação extrema:** WMTORD/WMTOCO/WMCATO aparecem **idênticos** em ~6 sites BRF (Salvador, Embu ×2, Uberlândia, Jundiaí) e ~4 sprints do Salvador. A contagem de 71 seções é inflada; o conteúdo único é ~15.
- **Estruturas de IDOC sem corpo:** quase todas as seções dizem "Estrutura do IDOC... Utilização dos dados (Velox):" mas **não trazem os campos** — as tabelas de campos ficaram fora do RAW.
- **Setas de sentido perdidas:** "SAP  VELOX", "WCSSAP", "VELOX  SAP" — o caractere "→" sumiu na extração; atenção ao interpretar o sentido.
- **Seções de outros tópicos roteadas para cá (candidatos a desvio/Fase 2):**
  - **integracao-cadastros:** "GAP 01 – Envio SKU", "SAP cria caixas e informa números" (Swift).
  - **conferencia:** "WCS envia conferência da balança OK/NOK" (Swift).
  - **estoque:** "Gestão de Estoque" (espelho AC), "Abastecimento" FEFO.
  - **order-start / onda:** "Skus pendentes", "Exclusão de onda", "Criação de Onda".
  - **recebimento-armazenagem:** "Portais de entrada", "Confirmação de entrada no armazém".
  - **infra/sistema:** "PROCEDURES" (banco de dados).
- **Erros de digitação no material-fonte:** "memento" (momento), "infomrando", "ou sejá" — copiados das especificações originais.

## Inferências

- **Inferência:** A implementação deve ter um adaptador SAP-IDOC separado do adaptador WMS-REST; tentar unificar os dois contratos seria contraproducente.
  - **Confiabilidade:** alta
  - **Base:** transporte (IDOC/SOAP × REST/JSON), domínio (pallet automatizado × e-commerce) e vocabulário (TORD/TOCO × Snap Shot/Inbound) são completamente distintos.

- **Inferência:** O WMCATO precisa de um lock/estado que reflita se a TAG já foi alterada, para decidir se o cancelamento é aceitável.
  - **Confiabilidade:** alta
  - **Base:** a regra "só executa se enviado antes da alteração de TAG" é explícita e repetida em todos os sites BRF.

- **Inferência:** Os campos reais dos IDOCs (ausentes no RAW) são pré-requisito crítico para implementar; sem eles, o dossiê cobre o "o quê" mas não o "como".
  - **Confiabilidade:** alta
  - **Base:** todas as seções de estrutura terminam sem listar campos; o contrato detalhado está nas tabelas/imagens não capturadas.

---
*Gerado em 2026-06-24*
