# Gestao-Estoque — Dossiê Técnico

**Bloco:** Estoque | **Tópico:** Gestão de Estoque
**Seções analisadas:** 4 | **Fonte:** Sintetizado a partir de dossiês de Inventário e Reabastecimento (2026-06-29)

## Visão Geral

A Gestão de Estoque é a camada supervisória do WCS que controla posições, saldos e movimentos de SKUs no armazém. Inclui o gerenciamento de endereços (localizações), bloqueio/desbloqueio de posições, consulta de saldo em tempo real e reconciliação com o WMS. Não é a operação de picking ou reabastecimento em si, mas a superintendência dessas operações: quem pode ver o inventário, quem pode fazer ajustes, quais posições estão ativas ou bloqueadas.

## Fluxo do Processo

1. WCS recebe posição/localização de estoque do WMS na integração de armazenagem
2. WCS mantém saldo interno por endereço (posição de armazenagem)
3. Movimentos de picking, reabastecimento e devolução atualizam saldo WCS
4. Divergências entre saldo WCS e WMS são sinalizadas para inventário
5. Inventário cíclico ou total pode ser acionado pelo supervisor para reconciliação
6. Posições problemáticas podem ser bloqueadas (sem picking nem reposição) até resolução

## Telas e Funcionalidades

| Tela | Função |
|------|--------|
| Consulta de Posição | Exibe saldo atual, SKU, lote e status de cada endereço |
| Gestão de Endereços | Bloqueio/desbloqueio de posições; inativação de endereços |
| Inventário | Contagem cíclica ou total; ajuste de divergências |
| Movimentos de Estoque | Histórico de entradas, saídas, transferências por período |
| Dashboard de Ocupação | Percentual de ocupação por corredor/nível em tempo real |

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Saldo WCS deve espelhar o WMS; divergências são auditadas e reportadas |
| RN-02 | Posição bloqueada não permite picking nem reabastecimento até desbloqueio |
| RN-03 | Inventário cíclico pode ser executado sem parar a operação (zonas rotativas) |
| RN-04 | Inventário total exige parada operacional da área inventariada |
| RN-05 | Ajuste de inventário acima do limite configurado exige aprovação de supervisor |
| RN-06 | WCS não cria posições de armazenagem; posições são herdadas do WMS ou cadastradas pelo admin |
| RN-07 | Posições de picking fixo (endereço dedicado por SKU) são reabastecidas por gatilho min/max |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| Armazém com WMS proprietário | WCS reflete saldo WMS; ajustes feitos no WMS, WCS apenas lê |
| Armazém WCS-centric | WCS é master do estoque; WMS sincroniza do WCS |
| Multi-cliente (3PL) | Gestão de estoque por cliente (tenant isolation) dentro do mesmo armazém |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| WMS | Bidirecional | Sync de saldo, posições, movimentos; ajustes de inventário |
| ERP | Consulta | Dados de SKU (peso, dimensões, tipo de armazenagem) |
| [[reabastecimento]] | Trigger | Posição abaixo do mínimo → dispara tarefa de reabastecimento |
| [[inventario]] | Processo | Contagem física reconcilia saldo WCS vs físico |
| [[picking-separacao]] | Consume | Picking decrementa saldo da posição de armazenagem |

## Terminologia

| Termo | Definição |
|-------|-----------|
| Endereço / Posição | Localização física específica no armazém (corredor-nível-posição) |
| Saldo WCS | Quantidade de SKUs que o WCS registra em uma posição |
| Picking Fixo | Endereço dedicado a um SKU específico (vs. picking volante/caótico) |
| Inventário Cíclico | Contagem parcial de zonas rotativas sem parada da operação |
| Bloqueio de Posição | Status que impede movimentos de entrada/saída na posição |

---
*Gerado em 2026-06-29 · síntese a partir de dossiês de Inventário e Reabastecimento*
