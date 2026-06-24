# cancelamento-pedidos — Dossiê Técnico

**Bloco:** separacao | **Tópico:** cancelamento-pedidos
**Seções analisadas:** 5 (consolidadas) | **Fonte:** Fase 2 — desvios de put-to-wall, integracao-wcs-wms, integracao-wms-erp, cubagem, packing

> **Tópico AUTO-DETECTADO na Fase 2.** Consolida um cluster grande e coerente de regras de cancelamento que estavam **dispersas** em vários tópicos (notadamente `put-to-wall`). Recomenda-se rastrear as seções originais nos RAWs de origem para enriquecer este dossiê.

## Visão Geral

O **Cancelamento de Pedidos** é o processo de **retirar do fluxo** um pedido/volume/missão, com tratativa que **depende do estágio** em que o item se encontra (antes do Order Start, em separação, na esteira, na rampa, alocado). É um processo **transversal** — toca separação, expedição (sorter/PTL) e integração (WMS/SAP) — por isso aparecia fragmentado.

A regra-mestra: **quanto mais avançado o estágio, mais restrito o cancelamento** — antes do Order Start é trivial (remove da fila); após a alocação no pallet, só o WMS resolve. O cancelamento exige **autorização de supervisão** e, em coletas parciais, joga os itens já coletados para a localização **"ANÁLISE"**.

## Fluxo do Processo (cancelamento por estágio)

| Estágio | Tratativa |
|---------|-----------|
| **Antes do Order Start** (Integrado) | Pedido removido da fila de pendentes; sem ação nos produtos. |
| **Disponível** (pronto para imprimir) | Retirado da lista de impressão; não é coletado. |
| **Após Order Start — FlowRack** (Em andamento) | Coleta interrompida; caixa **não** segue às estações → rejeito/conferência. |
| **Após Order Start — Picking Cart** | Volumes em separação seguem à conferência **após** o fim da coleta. |
| **Indução** (no stage) | Volumes induzidos no sorter → desviados ao **rejeito** com motivo cancelamento. |
| **Na rampa** | Ao ler o volume, todos os LEDs do PTL acendem **azul** sinalizando cancelado; operador envia ao rejeito (suporte). |
| **Alocado** (no PTL/pallet) | **Não** é mais cancelável pelo WCS — tratativa exclusiva no WMS. |

### Devolução de volumes cancelados
O WCS cria tarefa de devolução por volume; o operador lê volume → endereço → item. **Não** devolve ao Transfer (só a posições de picking ou pulmão). Relatório de "Pedidos Cancelados"; ao fim, integração informando a devolução.

## Telas e Funcionalidades

### Tela de Cancelamento (por pedido/missão)
- **Comportamento:** cancela pedido enviado pelo WMS; exige **senha de supervisão**; exibe pop-up "pedido cancelado" no PDV/coletor.

### Tela de Devolução de Volumes Cancelados (coletor)
- **Comportamento:** lista itens a devolver (qtd, endereço); leitura sequencial volume → endereço → item.

### Tela de Gestão de Volumes (cancelamento granular — NavePark)
- **Comportamento:** cancela **volumes específicos** de um pedido sem cancelar o todo (ex.: 350→35); volumes cancelados viram **"RETORNO AO PICKING"** (estorno interno, sem NF de devolução).

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A tratativa do cancelamento **depende do estágio** do volume (ver tabela). |
| RN-02 | Cancelamento via pedido exige **autorização de supervisão** (senha). |
| RN-03 | **Coletas parciais:** itens já coletados vão para a localização **"ANÁLISE"**, bloqueando novas coletas; o restante é desconsiderado. |
| RN-04 | O cancelamento no WCS, em geral, **não** é integrado a outros sistemas (só remove e atualiza status interno) — exceto a integração de devolução. |
| RN-05 | **Devolução:** não retorna ao Transfer; só a posições de picking (ou pulmão no NavePark); a tarefa não finaliza sem posição disponível. |
| RN-06 | **CATO (SAP→WCS):** só cancela OT em status **"Pendente"**; OT já confirmada retorna **erro**. |
| RN-07 | **(Esperança)** O WMS sinaliza o cancelamento na **tabela compartilhada**; o WCS desconsidera o pedido mesmo já presente na ORDEMSERVICO. |
| RN-08 | **Após alocação no PTL/pallet**, o cancelamento só pode ser tratado no **WMS**. |
| RN-09 | **(BCP/PTLSP)** O MFC seta status **"CANCELADA"** em vez de deletar; ordem em andamento termina o fluxo e é desviada à conferência. |
| RN-10 | Volume cancelado nas saídas do sorter (avaria/leitura/peso) é **excluído** e devolvido ao estoque, **sem** integração ao SAP. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **FDBR / BP / Beleza / Beta-Esteio / Guatemala** | Cenários por estágio (antes/depois do Order Start, cart), supervisão, "ANÁLISE", pop-up no coletor. |
| **BP / Flower / NavePark** | Devolução de volumes cancelados com tarefa por volume; NavePark usa pulmão. |
| **BRF (CATO)** | Cancelamento de OT via IDOC, só em status Pendente. |
| **Esperança** | Cancelamento via tabela compartilhada; tratativa detalhada por status (Integrado→Alocado). |
| **NavePark** | Cancelamento **granular** de volumes (RETORNO AO PICKING, estorno interno). |
| **PTLSP/Gemini (BCP)** | Status "CANCELADA" no MFC; retirada massiva em contingência. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **WMS** | Recebimento | Envia a integração de cancelamento; identifica volumes cancelados. |
| **SAP (CATO/WMCATO)** | Recebimento | IDOC de estorno de OT (ver [[integracao-wms-erp]]). |
| **Integração de devolução** | Envio | Informa ao WMS que os itens cancelados foram devolvidos às posições. |
| **Tabela compartilhada (ORDEMSERVICO)** | Recebimento | Sinalização de cancelamento por campo (Esperança). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Cancelamento por estágio** | Tratativa que varia conforme o ponto do fluxo em que o volume está. |
| **ANÁLISE** | Localização para onde vão os itens de coletas parciais canceladas. |
| **Devolução de volumes cancelados** | Processo de retornar fisicamente os itens às posições de picking. |
| **CATO / WMCATO** | IDOC de estorno/cancelamento de OT (SAP). |
| **RETORNO AO PICKING** | Status do volume cancelado granularmente (estorno interno, NavePark). |
| **BCP** | Contingência (Business Continuity Plan) — picking via RF no WMS. |
| **Cancelamento granular** | Cancelar volumes específicos sem cancelar o pedido inteiro. |

---
*Gerado em 2026-06-24 · auto-detectado na Fase 2 · 5 seções consolidadas (REVISAR contra os RAWs de origem)*
