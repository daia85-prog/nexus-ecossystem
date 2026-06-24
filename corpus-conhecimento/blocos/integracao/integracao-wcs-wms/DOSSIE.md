# integracao-wcs-wms — Dossiê Técnico

**Bloco:** integracao | **Tópico:** integracao-wcs-wms
**Seções analisadas:** 39 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

Este tópico cobre as **integrações entre o WCS (Velox) e o WMS** (EWM/SAP, conforme o cliente). O corpus é fortemente repetitivo: as mesmas integrações se repetem entre projetos (BP, Flower, Beleza, Cougar, NavePark, Beta), com pequenas variações de payload. Os contratos centrais são:

- **Sincronização de estoque** em ambos os sentidos: **Snap Shot** (WMS → WCS) e **Inbound Sync** (WCS → WMS).
- **Confirmação de separação** (Picking Confirm) do WCS ao WMS, com regras distintas por tipo de volume.
- **Retorno de Reabastecimento** informando que o volume chegou à posição de picking.
- Processos operacionais com contrato de integração: **Devolução de Volumes Cancelados**, **Cancelamento de Volumes Fracionados**, **Recall** e **Retorno de Reindução**.

O princípio recorrente é que o **WMS é a fonte de verdade do estoque** e o WCS espelha/equaliza seu estado, devolvendo movimentações em tempo quase real.

## Fluxo do Processo

### Sincronização de estoque (ciclo de vida)
1. **Startup/carga:** o WMS envia o **Snap Shot** com a foto inicial do estoque de todas as posições; o WCS popula seu estado.
2. **Operação:** a cada movimentação em porta-pallets (pulmão) ou entre posições, o WCS dispara o **Inbound Sync** para manter o WMS atualizado.
3. **Equalização sob demanda:** quando se identifica divergência WMS×WCS, um novo Snap Shot é enviado (não há frequência fixa).

### Confirmação de separação
- Ao final da separação na última estação de picking, o Velox envia a **Confirmação de Separação** ao EWM, contendo todos os dados do volume e seus itens — com momento de disparo dependente do tipo de volume (ver Regras).

### Devolução de volumes cancelados
1. WCS identifica o volume cancelado (via integração de cancelamento do WMS ou cancelamento no próprio WCS).
2. Cria automaticamente **tarefa de devolução** por volume do pedido cancelado.
3. Operador loga no coletor Android, lê o código de barras do volume, vai ao endereço indicado, lê endereço + quantidade + código do item.
4. Repete para todos os itens; ao concluir, WCS confirma a devolução.
5. Ao final de todas as devoluções do pedido, o WCS envia integração informando que os itens foram devolvidos às posições.

## Telas e Funcionalidades

### Tela de Devolução de Volumes Cancelados (coletor Android)
- **Comportamento:** exibe a lista de itens a devolver com quantidade e endereço. Exige leitura sequencial de volume → endereço → item. Encerra com mensagem de conclusão.

### Tela de Recall (coletor Android — projeto Beleza)
- **Campos:** SKU (obrigatório), lote (opcional). **Comportamento:** exibe posições onde o lote/SKU está alocado; operador lê endereço + container e informa a quantidade retirada; valida reuso de container e impede lotes diferentes no mesmo container.

### Relatório "Pedidos Cancelados"
- **Comportamento:** operador informa o código do pedido; o sistema lista todos os volumes associados e em qual local da automação cada um está alocado.

### Consulta Geral — campo "Data de Finalização" (aditivo EURO)
- **Comportamento:** nova coluna/filtro com a data/hora de finalização do volume/remessa, formato DD/MM/AAAA HH:MM:SS, preenchida automaticamente na confirmação de finalização.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | **Confirmação de Separação — fracionados:** enviada ao finalizar a remessa por completo. |
| RN-02 | **Confirmação de Separação — full case (caixa fechada):** enviada no momento da confirmação da separação na finalização completa da remessa; **não** calcula cubagem, logo **não** envia `cod_caixa`. |
| RN-03 | **Confirmação de Separação — exceção:** enviada ao finalizar a remessa do volume no Picking Cart. |
| RN-04 | **Picking Cart:** a Confirmação de Picking **não** é enviada imediatamente após a finalização; só dispara após o ponto de decisão no fim da linha ou após a conferência, quando o WCS tem a informação completa e validada. |
| RN-05 | **Snap Shot:** o WCS dá baixa nos itens das posições de picking considerando **exclusivamente** os dados do Snap Shot. Posição vazia no payload → desocupada. |
| RN-06 | **Snap Shot (regra adicional BP Rev12):** `qtd=0` **ou** `codInterno=null` → esvaziar a posição e liberá-la para novas alocações. |
| RN-07 | **Snap Shot:** disparado em dois momentos — foto inicial no startup/carga e equalização sob demanda por divergência; **sem** frequência fixa. |
| RN-08 | **Snap Shot:** os campos `codInterno` e `endColeta` devem estar corretamente cadastrados no WCS, senão a integração é rejeitada. |
| RN-09 | **Inbound Sync:** disparado a cada movimentação em porta-pallets (pulmão) e em movimentação entre porta-pallets; considera os recebimentos da CET (Confirmação Entrada no Transfer) e as saídas. |
| RN-10 | **Inbound Sync (Beleza):** enviar de forma **consolidada** a quantidade total do item somando o saldo de todos os endereços. |
| RN-11 | **Retorno Reabastecimento:** enviado quando o operador finaliza a alocação na posição final de picking; em variantes com PLC, quando o desvio é confirmado pelo PLC. |
| RN-12 | **Cancelamento de Volumes Fracionados:** só é possível cancelar volumes **ainda não enviados** na confirmação de picking; em cargas parciais, cancela só os pendentes e mantém os confirmados. |
| RN-13 | **Devolução:** o WCS **não** devolve itens ao Transfer — apenas a posições de picking (ou pulmão, no NavePark). Sem posição disponível, a tarefa **não** pode ser finalizada. |
| RN-14 | **Recall:** se o lote não for informado, o recall abrange todos os itens do SKU. |
| RN-15 | **Recall — Transfer:** só recolhe itens no Transfer se a tarefa de recebimento do Transfer estiver concluída. |
| RN-16 | **Recall — container:** o WCS não permite alocar itens de lotes diferentes no mesmo container e alerta sobre reuso de container. |
| RN-17 | **Retorno Reindução:** a mesma caixa pode receber a integração de pedidos mais de uma vez; o WCS deve sempre considerar a **última** integração recebida. |
| RN-18 | **Retorno Reindução bloqueada (`status: "blocked"`):** o WCS informa ao operador que a caixa não pode ser reinduzida na esteira naquele momento. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I24.215** (BP, 3 revisões) | Snap Shot, Inbound Sync e Devolução de Cancelados. A Rev12 acrescenta a regra de `qtd=0`/`codInterno=null` → esvaziar posição e o payload aninhado por `endColeta`+`itens[]`. |
| **I25.9043** (Beleza, várias fases) | Inbound Sync **consolidado** por item; processo de **Recall**; Snap Shot com `loteItem`. |
| **I24.210** (Cougar B2C) | **Retorno Reindução** com payload de separação (label, wave, priority, channel, level) e tratamento de `blocked`. |
| **I25.4066** (NavePark) | Devolução de cancelados pode usar **posição de pulmão** quando não há posição de picking. |
| **I24.203 / I25.111 / I25.136** (Beta) | Retorno Reabastecimento; etiqueta Picking Pallet/Exceção com QR Code; finalização do Picking Cart. |
| **I25.4378** (BR) | Retorno Reabastecimento **simplificado**, payload apenas com `num_etiqueta`. |
| **I21.177 / I24.203** (aditivos) | Retorno Reabastecimento disparado na confirmação do desvio pelo **PLC** (sentido EMW/SAP → WCS). |
| **EURO** (aditivo) | Campo **Data de Finalização** na Consulta Geral. |
| **I22.120** (BRF Salvador) | Execução/continuidade de coletas guiada por lista de onda, segmentada por posto; volumes não tratáveis. |

## Integrações

| Integração | Sentido | Objetivo / Payload-chave |
|-----------|---------|--------------------------|
| **Confirmação de Separação (Picking Confirm)** | Velox → EWM | Confirma separação do volume com todos os itens; momento varia por tipo (fracionado/full case/exceção). |
| **Snap Shot (POST)** | WMS → WCS | Espelha o estoque das posições; baixa exclusiva pelos dados recebidos. Campos: `codInterno`, `qtd`, `endColeta`, `lote`/`loteItem`, `validade`, `codEmpresa`. |
| **Inbound Sync (POST)** | WCS → WMS | Espelha o estoque em posse do WCS ao WMS; dispara em movimentações de pulmão. |
| **Retorno Reabastecimento** | WCS ⇄ EWM/SAP | Informa que o volume está na posição de picking. Campos: `empresa`, `centro`, `codDeposito`, `reabastecimentos[]` (`tarefa`, `pos_destino`, `sku`, `dun`, `qt_sug`, `qt_reab`). |
| **Cancelamento / Devolução de Volumes Cancelados** | WMS ⇄ WCS | Identifica cancelamento e gera tarefas de devolução; confirma a devolução às posições. |
| **Retorno Reindução** | WMS → WCS | Confirma ou bloqueia a reindução de um volume na esteira (`status: todo`/`blocked`). |
| **Recall** | WCS → WMS | Consolida itens removidos da linha (item, lote, container, quantidade). |
| **CET – Confirmação Entrada no Transfer (POST)** | (referenciada) | Base de recebimentos considerada pelo Inbound Sync. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **WMS / EWM / SAP** | Sistema de gestão de armazém; fonte de verdade do estoque com o qual o WCS se integra. |
| **Snap Shot** | Integração WMS → WCS que espelha o estado completo do estoque das posições. |
| **Inbound Sync** | Integração WCS → WMS que reflete o estoque em posse do WCS. |
| **CET (Confirmação Entrada no Transfer)** | Integração de recebimento de itens no Transfer, considerada no cálculo do Inbound Sync. |
| **Transfer** | Área de recebimento/transferência; o WCS não devolve itens cancelados a ela. |
| **Pulmão / Porta-pallet** | Posição de estoque de retaguarda; movimentações nele disparam o Inbound Sync. |
| **Reindução** | Reenvio de um volume à esteira; o WMS confirma (`todo`) ou bloqueia (`blocked`). |
| **Recall** | Retirada controlada de itens (lote/SKU) da linha de separação. |
| **DUN** | Código de agrupamento/embalagem do item presente no payload de reabastecimento. |
| **PLC** | Controlador da automação; em algumas variantes confirma o desvio que dispara o Retorno Reabastecimento. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 39 seções*
