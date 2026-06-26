# reabastecimento — Dossiê Técnico

**Bloco:** estoque | **Tópico:** reabastecimento
**Seções analisadas:** 119 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Reabastecimento** move produtos de uma **origem** (Transfer ou Buffer/Pulmão) para as **posições finais de picking**, mantendo o estoque adequado para a separação. O WCS monitora continuamente os níveis e gera **tarefas de reabastecimento** (automáticas ou manuais), executadas pelo operador via **coletor Android** com leitura de origem → item → destino.

A **responsabilidade** varia: em alguns clientes o reabastecimento é do **cliente/WMS** (Cristal, Peter); em outros é **do WCS** (BP, FDBR, Beleza). As regras de negócio mais críticas são a **não mistura de lotes** e a **segregação por empresa** na posição de picking.

## Fluxo do Processo

1. **Geração da tarefa** (ver gatilhos):
   - **Automática:** saldo abaixo do mínimo operacional **ou** previsão de consumo de ondas liberadas.
   - **Manual:** tela dedicada para demandas pontuais/emergenciais; **manual preventivo** (seleciona rua/nível + % mínima → monitora → gera tarefas até o nível máximo).
2. A tarefa contém: **SKU, lote, quantidade, posição de origem e posição de destino**.
3. **Execução (coletor):** o operador inicia a tarefa → **lê a posição de origem** → **lê o item (SKU/codInterno)** → **lê a posição de destino** → **confirma a quantidade** alocada.
4. **Endereço sugerido:** o WCS sugere o destino (regras de alocação); o operador pode escolher outro, com **validação de elegibilidade** + **pop-up de confirmação**.

## Tipos de Movimentação

| Movimentação | Quando | Observações |
|--------------|--------|-------------|
| **Transfer → Picking** | Saldo de picking baixo e há saldo no Transfer | Tipo mais comum; responsabilidade do WCS na maioria. |
| **Buffer (Pulmão) → Picking** | Saldo de picking baixo e há saldo no Buffer | Reposição rápida a partir da retaguarda próxima. |
| **Transfer → Buffer** | Posição de picking cheia, mas há saldo no Transfer | Antecipa a reposição; aloca no **buffer mais próximo** da posição de picking. |

## Telas e Funcionalidades

### Tela de Reabastecimentos Pendentes (coletor)
- **Exibe:** item (SKU/codInterno), lote, quantidade, endereço de destino. **Comportamento:** leitura sequencial origem → item → destino + confirmação de quantidade; opção de visualizar tarefas abertas e fechadas.

### Reabastecimento Manual Preventivo (BP)
- **Comportamento:** seleciona rua (Picking Cart/Fullcase) ou nível (Flowrack) + % mínima de estoque → o WCS monitora e gera tarefas para repor até o nível máximo.

### Módulo de Reabastecimento por Decanting (Beta)
- **Tela 1 – Preparação:** **Decanting** (transferir itens da caixa full case para **bins**) + **Abastecimento do Picking Cart** (alocar bins no carrinho), alternáveis via "Voltar".
- **Tela 2 – Execução:** Picking Cart de Reabastecimento (dedicada ao deslocamento/alocação nos endereços de picking fracionado).

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A tarefa de reabastecimento é gerada por **saldo abaixo do mínimo** ou **previsão de consumo** de ondas liberadas. |
| RN-02 | A geração pode ser **automática** (regras) ou **manual** (tela dedicada / preventivo por % mínima). |
| RN-03 | A execução exige leitura de **origem → item → destino** + confirmação de quantidade (rastreabilidade completa). |
| RN-04 | **Não misturar lotes na posição:** se a posição já tem o lote X, reabastecer com o mesmo lote; sem o mesmo lote, a posição é **desconsiderada**; **não** se permite abastecimento parcial que gere múltiplos lotes. |
| RN-05 | **Segregação por empresa:** duas empresas compartilham a área física com estoque **logicamente segregado**; o WCS **não** sugere/aceita reabastecer com produto de empresa diferente, mesmo SKU igual. |
| RN-06 | Ao escolher um endereço diferente do sugerido, o WCS **valida a elegibilidade** e exige **confirmação manual** (pop-up). |
| RN-07 | A movimentação respeita **compatibilidade** de tipo de produto e tipo de picking. |
| RN-08 | **Transfer → Buffer:** o estoque é alocado no **buffer mais próximo** da posição de picking correspondente. |
| RN-09 | **(FDBR — worktype "PICK")** O ERP pode solicitar retirada da posição do WCS (devolução, transferência, segregação para ajuste/qualidade); o WCS cria a tarefa (SKU/lote/qtd) e o operador escolhe um endereço válido validado por leitura. |
| RN-10 | **Responsabilidade variável:** o reabastecimento pode ser do **cliente/WMS** ou do **WCS** (via coletor Android), conforme o projeto. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I23.125** (Cristal) / **I23.3502** (Peter) | Reabastecimento de **responsabilidade do cliente**; o WCS apenas informa a separação ao WMS. |
| **I23.1412** (FDBR) | Três fluxos (Transfer→Picking, Buffer→Picking, Transfer→Buffer); endereço sugerido + escolha manual validada; worktype "PICK" para retiradas solicitadas pelo ERP. |
| **I24.215** (BP) | "Reabastecimento Estoque Velox" (Transfer→Picking) sob responsabilidade do WCS; manual preventivo por % mínima; segregação por empresa e por lote. |
| **I25.9043** (Beleza) | Transfer→Picking gerido pelo WCS; gatilhos automático (mínimo) e manual (pontual/emergencial). |
| **I24.203** (Beta) | Reabastecimento por **Decanting** (full case → bins → picking cart), integrado ao Order Start Full Case. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **WMS / ERP (D365)** | Recebimento/Envio | Informa separação/consumo; solicita retiradas (worktype "PICK"); recebe confirmação do reabastecimento (ver [[integracao-wcs-wms]]). |
| **Coletor Android** | Hardware | Executa as tarefas com leitura origem → item → destino. |
| **Cadastro de posições/produtos** | Recebimento | Define mínimos, máximos, compatibilidade e regras de alocação. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Reabastecimento** | Movimentação de produto para repor as posições de picking. |
| **Transfer** | Área de recebimento/retaguarda, origem comum do reabastecimento. |
| **Buffer / Pulmão** | Estoque de retaguarda próximo às posições de picking. |
| **Mínimo operacional** | Nível de estoque que dispara a tarefa automática. |
| **Manual preventivo** | Modo que monitora por % mínima e repõe até o nível máximo. |
| **Decanting** | Transferência dos itens de uma caixa full case para bins (Beta). |
| **Bin** | Recipiente intermediário usado no Decanting. |
| **worktype "PICK"** | Retirada da posição do WCS solicitada pelo ERP (devolução/segregação). |
| **Segregação por empresa** | Regra que impede reabastecer uma posição com produto de outra empresa. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 119 seções*
