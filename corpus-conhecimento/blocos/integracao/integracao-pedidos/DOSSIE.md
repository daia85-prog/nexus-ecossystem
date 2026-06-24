# integracao-pedidos — Dossiê Técnico

**Bloco:** integracao | **Tópico:** integracao-pedidos
**Seções analisadas:** 142 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

A **Integração de Pedidos / Remessas** é o contrato pelo qual o **WMS/EWM/SAP envia ao WCS a lista de pedidos a separar** ("Wave"). É a porta de entrada da operação: a partir dela o WCS exibe os pedidos no Order Start, define rota/transportadora (mapa do sorter), aplica flags de conferência e usa a cubagem para dimensionar os volumes.

O payload é rico e varia por projeto, mas converge em um cabeçalho de **remessa** (pedido, prioridade, rota, transportadora, cliente, loja, CEP, flags) + uma lista de **itens** (tarefa, posição, SKU/EAN/DUN, quantidade, cubagem, dimensões, peso). Projetos mais maduros (Beta) separam **itens fracionados** de **full case**; outros (Esperança) usam uma **tabela compartilhada** em vez de mensagem.

## Fluxo do Processo

1. O **WMS/SAP** envia a lista de remessas (via integração JSON/IDOC ou gravando em **tabela compartilhada**).
2. O WCS **valida** a mensagem; em caso de inconsistência, **recusa de forma total** (sem recusa parcial) — o SAP corrige e reenvia a integração completa.
3. Os pedidos aceitos populam a base interna (ex.: **ORDEMSERVICO**) e são exibidos no **Order Start** para início da separação.
4. Os atributos do pedido alimentam os processos seguintes: **rota/transportadora** → mapa do sorter; **flags** (cliente especial, double_check, cliente novo) → conferência; **cubagem** → dimensionamento de caixas.

## Telas e Funcionalidades

### Payload da Integração de Pedidos (campos principais)
- **Cabeçalho (remessa):** `num_pedido`, `prioridade`, `remessa`, `cep`, `loja`, `cod_transp`/`des_transp`, `cod_cliente`/`des_cliente`, `cidade`/`uf`, `cod_rota`/`des_rota`, `double_check`, `cliente_especial`, `empresa`/`centro`/`codDeposito`, `cnpjEmbarcador`.
- **Itens fracionados:** `tarefa`, `tipo_dep`, `posicao`, `sku`, `ean`, `ean_dz`, `qtd_solic`, `cubagem`, `altura`/`largura`/`comprimento`, `peso`, `qtd_master`.
- **Full case:** `uc`, `sku`, `dun`, `qtd_solic`, `qtd_caixa`, dimensões, peso.

### Fluxo via Tabela Compartilhada (Esperança)
- **Comportamento:** o WMS grava os pedidos na tabela; o WCS lê os registros novos/atualizados por `numos` (chave única), evitando reprocessamento, e alimenta a ORDEMSERVICO. Tipos: Full Case e Pallets Fechados.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A integração de pedidos trafega **WMS/EWM/SAP → WCS** com cabeçalho de remessa + itens. |
| RN-02 | **Recusa total:** qualquer inconsistência recusa **toda** a integração (sem recusa parcial); o SAP corrige e reenvia completa. |
| RN-03 | **(Beta)** O payload separa **itens fracionados** de **full case**; cada item traz cubagem (m³), dimensões e peso. |
| RN-04 | **(Beta)** O EWM/SAP deve enviar carga que caiba nas posições de pallet da rampa (ex.: 10 pallets/rampa), respeitando a cubagem parametrizada. |
| RN-05 | **(Esperança)** Leitura por `numos` (chave única) evita reprocessamento; o WMS deve inserir os pedidos **antes** do início da operação no sorter. |
| RN-06 | **(Octopus/Pereira)** A cubagem é do **WMS**; o WCS recebe as medidas do volume e exige o **cadastro de caixas** (código + medidas) para interpretar a caixa adicionada na conferência (FLAG de caixa única). |
| RN-07 | Os atributos `cod_rota`/`des_rota`/`cod_transp` alimentam o **mapa do sorter** ([[sorter-mapa-rota]]). |
| RN-08 | As flags `cliente_especial`, `double_check`, `conferencia`, `cliente_novo` direcionam o volume à **conferência** ([[conferencia]]). |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) | Payload básico (`num_pedido`, `prioridade`, `remessa`, itens com posição/SKU/qtd). |
| **I24.203** (Beta) | Payload completo com **itens_fracionados** + **fullcase[]**, cubagem por unidade e total, dados de etiqueta (romaneio/transportadora); **recusa total**; limite de pallets por rampa. |
| **I24.215** (BP) | Detalha o **Transfer** (WMS abastece o pulmão antes da integração de ondas). |
| **I25.9022** (Octopus/Pereira) | Cubagem pelo WMS; cadastro de caixas no WCS com FLAG de caixa única. |
| **I25.3515** (Esperança) | Integração via **tabela compartilhada** (`numos`), tipos Full Case e Pallets Fechados; tabela de pendências (Winthor). |
| **I25.3513** (CDSK) | Agrupamento de volumes em pallet com etiqueta unificada antes da indução. |

## Integrações

| Integração | Sentido | Conteúdo-chave |
|-----------|---------|----------------|
| **Integração de Remessa/Pedido (Wave)** | WMS/EWM/SAP → WCS | Lista de remessas + itens (fracionado/full case) com cubagem e flags. |
| **Tabela compartilhada (ORDEMSERVICO / numos)** | WMS → WCS | Alternativa por banco: o WCS lê registros novos por chave única. |
| **Recusa de integração** | WCS → WMS | Rejeição **total** quando há inconsistência. |
| **Tabela de Pendências (Winthor)** | WCS → WMS | Registro de ocorrências/avarias para tratamento pelo WMS. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Remessa / Wave** | Conjunto de pedidos enviado pelo WMS para separação. |
| **Pedido (num_pedido)** | Documento de venda a ser separado e expedido. |
| **Tarefa** | Linha de coleta de um item dentro do pedido. |
| **double_check / cliente_especial** | Flags que disparam conferência adicional. |
| **qtd_master / qtd_caixa** | Quantidade por embalagem master / por caixa fechada. |
| **numos** | Chave única do pedido na tabela compartilhada (Esperança). |
| **ORDEMSERVICO** | Tabela interna do WCS que recebe os pedidos. |
| **Recusa total** | Política de rejeitar toda a integração diante de qualquer inconsistência. |
| **Transfer** | Pulmão abastecido pelo WMS antes da integração de ondas. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 142 seções*
