# recebimento-armazenagem — Dossiê Técnico

**Bloco:** entrada | **Tópico:** recebimento-armazenagem
**Seções analisadas:** 345 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

Este tópico cobre a **entrada de materiais no WCS** e seu **armazenamento**: o **recebimento de pallets no Transfer**, o **consumo de pallet** (validação contra a base recebida do WMS), a **armazenagem automatizada (AA)** com transelevador, o **Stage de Pallets** (consolidação pós-expedição aguardando NF) e a **movimentação interna** de itens entre posições.

O fluxo típico: o WMS **insere os dados** do pallet (via integração/tabela intermediária) → o operador **confirma o recebimento** no Transfer (RG + endereço) → o pallet é **consumido**/armazenado → fica disponível para reabastecer o picking. Em operações automatizadas (BRF), o transelevador movimenta paletes entre canais de picking, buffer e porta-paletes por **Ordens de Transporte (OT/IDOC)**.

## Fluxo do Processo

### Recebimento no Transfer (Beleza)
1. O WMS envia os pallets a alocar; o WCS exibe a tela **"Recebimento Transfer"**.
2. O operador lê o **RG do pallet** (coletor) → lê o **endereço** do Transfer.
3. O WCS envia a integração **Confirmação de Recebimento no Transfer** ao WMS → a missão é fechada.
4. **Regra:** não permite 2 pallets no mesmo endereço; **não valida** o endereço (cria novos endereços na leitura).

### Consumo de Pallet (Octopus)
1. O operador loga e acessa a tela de **recebimento (consumo) de pallet**; lê o **ID do pallet**.
2. O WCS valida na base: se integrado pelo WMS → **"consumido com sucesso"**; senão → **"Pallet não encontrado"** (faltou a integração).
3. Após o consumo, o WCS aguarda a **indução dos volumes** na esteira.

### Stage de Pallets (consolidação pós-PTL)
1. Pallet encerrado → operador bipa a etiqueta no coletor → o WCS identifica o pedido e direciona a um **endereço de stage** (pallets do mesmo pedido em endereços próximos), aguardando a **emissão da NF**.
2. **Liberação manual:** lê o endereço do stage + a etiqueta de **todos** os pallets do pedido → "Pallets liberados"; se faltar pallet (ainda no PTL) → **"Pedido incompleto"**.

## Telas e Funcionalidades

### Tela "Recebimento Transfer"
- **Campos:** input do RG do pallet + lista de pallets enviados pelo WMS. **Comportamento:** lê RG → endereço → confirma; envia integração 5.5; sem validação de endereço (cria novos).

### Tela de Movimentação Interna (alteração de itens/posições)
- **Comportamento:** lê posição de origem → SKU → exibe quantidade disponível → informa/escaneia posição de destino. Quantidade é opcional; a tarefa recebe **prefixo** identificando movimentação manual.

### Recebimento de dados via Tabela Intermediária (Octopus — DBLINK)
- **Comportamento:** o WMS faz **INSERT/UPDATE** na tabela `INTERMEDIARIA`; o WCS roda rotinas para popular suas tabelas. Campos **UNIQUE** (NROEMPRESA, NROCARGA, SEQLOTE, SEQPRODUTO, QTDEMBALAGEM); dados em 2 momentos (onda + pallet a caminho do stage); `NUM_VOLUME`/`ID_PALLET` preenchidos depois; o WMS **não** faz DELETE.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O recebimento exige que o WMS tenha **inserido os dados** do pallet antes; sem isso, o consumo retorna **"Pallet não encontrado"**. |
| RN-02 | **(Beleza)** Não é permitido alocar mais de um pallet no mesmo endereço de Transfer; o WCS **não valida** o endereço (pode criar novos na leitura). |
| RN-03 | **(Octopus)** As rotinas do WCS só processam quando **todas** as colunas da tabela intermediária estão populadas; chaves UNIQUE evitam duplicação; o WMS não deleta. |
| RN-04 | **Stage:** pallets do mesmo pedido são alocados em **endereços próximos**; a liberação é **manual** e exige ler todos os pallets do pedido. |
| RN-05 | **Stage:** se houver pallet do pedido ainda no PTL, a liberação é bloqueada com **"Pedido incompleto"**. |
| RN-06 | **Movimentação interna:** lê origem → SKU → destino; a tarefa recebe **prefixo** de movimentação manual. |
| RN-07 | **(BRF/AA)** As movimentações de saldo (entrada, armazenagem, reabastecimento) ocorrem por **OT/IDOC**, confirmadas por outro IDOC (ver [[integracao-wms-erp]]). |
| RN-08 | **(BRF/AA)** Tipos de posição: Canais de Picking dinâmicos (níveis 1–3, até 3 paletes), Canais comuns (1 palete, manual), Buffer (níveis 4–5, pulmão), Porta-Palete. |
| RN-09 | **(CDSK — CrossDocking)** O WCS agrupa volumes de CrossDocking + Separação numa única posição de PTL, segregando por categoria; não interfere na ordem de indução. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I25.9043** (Beleza) | Recebimento no Transfer com RG + endereço; integração 5.5; sem validação de endereço. |
| **I25.9022** (Octopus) | Consumo de pallet por ID; recebimento de dados via **tabela intermediária (DBLINK)** com chaves UNIQUE e preenchimento em duas etapas. |
| **I22.1732** (Flower) | Área de recebimento (caixas a induzir); **Stage de Pallets** com consolidação por pedido e liberação manual. |
| **I22.120** (BRF) | **Armazém Automatizado (AA)** com transelevador, tipos de posição (canais/buffer/porta-palete), OTs por IDOC, avaliação no BK25. |
| **I23.1412** (FDBR) | Tela de **movimentação interna** de itens/posições com prefixo de tarefa manual. |
| **I25.3513** (CDSK) | **CrossDocking** agrupado com a separação no PTL por categoria. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **WMS** | Recebimento | Insere dados de pallet (tabela intermediária/integração); recebe a Confirmação de Recebimento no Transfer (5.5). |
| **SAP (OT/IDOC)** | Recebimento/Envio | Movimenta saldo no AA via WMTORD/WMTOCO (ver [[integracao-wms-erp]]). |
| **Transelevador / PLC** | Comando | Executa a armazenagem/retirada nos canais e buffer. |
| **SAP GET (Consulta Volumes)** | Envio | O SAP consulta o WCS sobre os volumes que passaram no sorter. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Transfer** | Área de recebimento/pulmão onde os pallets entram antes do picking. |
| **Consumo de pallet** | Validação do pallet recebido contra a base integrada do WMS. |
| **Stage de Pallets** | Área de consolidação dos pallets do pedido aguardando a NF. |
| **Tabela intermediária (INTERMEDIARIA)** | Tabela transacional onde o WMS insere os dados que o WCS consome (DBLINK). |
| **AA (Armazém Automatizado)** | Estrutura com transelevador e canais/buffer/porta-paletes. |
| **Canal de Picking / Buffer / Porta-Palete** | Tipos de posição do AA (separação / pulmão / armazenamento temporário). |
| **OT (Ordem de Transporte)** | Movimentação de saldo executada via IDOC. |
| **Movimentação interna** | Realocação manual de itens entre posições, com tarefa prefixada. |
| **CrossDocking** | Volume recebido que vai direto à expedição, agrupado no PTL. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 345 seções*
