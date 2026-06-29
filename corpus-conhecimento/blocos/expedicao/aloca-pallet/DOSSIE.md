# Aloca-Pallet — Dossiê Técnico

**Bloco:** Expedição | **Tópico:** Aloca Pallet (Integração WCS→WMS)
**Seções analisadas:** 4 | **Fonte:** Sintetizado a partir de dossiê de PTL-Alocação e Picking-Pallet (2026-06-29)

## Visão Geral

Aloca Pallet é o nome da integração WCS→WMS disparada ao fechar um pallet (UC), registrando no WMS o conteúdo completo da unidade de carga — todos os volumes, SKUs, quantidades, etiquetas e romaneio. É o ato de "comprometer" o pallet no WMS para fins de expedição e faturamento. Ocorre em dois contextos distintos: (1) paletização convencional/PTL (fechamento ao completar o romaneio ou por ação do operador); (2) picking-pallet (fechamento ao ler o PRIX fixo de saída do pallet para o stage).

## Fluxo do Processo

**Contexto 1 — Paletização Convencional / PTL:**
1. Operador fecha pallet manualmente ou WCS detecta romaneio completo
2. WCS emite etiqueta master de UC
3. WCS dispara integração "Aloca Pallet" ao WMS com payload: UC_id, lista de volumes, romaneio, transportadora, peso total
4. WMS registra pallet como alocado para expedição

**Contexto 2 — Picking-Pallet (PRIX Fixo):**
1. Pallet de picking-pallet bypassa PTL e segue direto ao stage
2. Operador lê PRIX fixo (portal de saída para o stage) com o pallet
3. WCS dispara "Aloca Pallet" com o conteúdo do pallet de picking
4. WMS registra pallet; WCS libera o PRIX para o próximo pallet

## Telas e Funcionalidades

| Tela | Função |
|------|--------|
| Log de Integrações | Histórico de mensagens Aloca Pallet enviadas, com status (OK / Erro / Pendente) |
| Reenvio Manual | Reenvia Aloca Pallet de um pallet específico em caso de falha de comunicação |
| Consulta de Pallets Fechados | Lista de UCs fechadas aguardando ou já integradas ao WMS |

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Aloca Pallet é disparado uma única vez por UC (idempotência deve ser garantida) |
| RN-02 | Falha na integração → pallet fica em estado "pendente de integração"; reenvio manual disponível |
| RN-03 | WCS não avança o pallet para o caminhão sem confirmação de Aloca Pallet bem-sucedido |
| RN-04 | Payload inclui: UC_id, lista de NF/volumes, romaneio_id, transportadora, peso total, data/hora |
| RN-05 | Em picking-pallet, o gatilho é a leitura do PRIX fixo (não o fechamento de romaneio) |
| RN-06 | Pallets com erro de Aloca Pallet são bloqueados para carregamento até resolução |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| Picking-Pallet (NavePark) | Gatilho = leitura PRIX fixo; pallet vai direto ao stage sem PTL |
| Paletização PTL (padrão) | Gatilho = romaneio completo ou fechamento manual pelo operador |
| WMS com retorno assíncrono | WCS aguarda ACK do WMS antes de liberar posição PTL |
| WMS sem retorno | WCS assume sucesso e libera imediatamente (fire-and-forget) |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| WMS | Envio | Aloca Pallet — payload com conteúdo completo da UC |
| [[paletizacao]] | Upstream | Fechamento do pallet convencional aciona Aloca Pallet |
| [[picking-pallet]] | Upstream | Leitura PRIX fixo aciona Aloca Pallet para pallet de picking |
| [[ptl-alocacao]] | Contexto | PTL gerencia posições; Aloca Pallet é a integração gerada ao fechar |
| [[etiquetas]] | Compõe payload | Etiqueta master da UC faz parte do payload Aloca Pallet |

## Terminologia

| Termo | Definição |
|-------|-----------|
| Aloca Pallet | Nome da mensagem/integração WCS→WMS para registrar conteúdo de UC fechada |
| UC | Unidade de Carga — o pallet físico sendo expedido |
| PRIX Fixo | Portal de leitura fixo instalado na saída para o stage; gatilho em picking-pallet |
| Stage | Área de staging (pré-carregamento) onde pallets aguardam o caminhão |
| Fire-and-forget | Modalidade de integração sem espera de ACK; WCS assume sucesso |

---
*Gerado em 2026-06-29 · síntese a partir de dossiês de PTL-Alocação e Picking-Pallet*
