# shortpicking — Dossiê Técnico

**Bloco:** separacao | **Tópico:** shortpicking
**Seções analisadas:** 68 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Shortpicking** (corte) ocorre quando a quantidade **física disponível** na posição é **inferior** à quantidade solicitada. O operador decrementa a quantidade no dispositivo (display/LED/PDV/coletor), separa o que há disponível e confirma — disparando a **integração de shortpicking** ao WMS, que decide reabastecer, gerar nova onda ou faturar parcial. A caixa com corte é tipicamente **desviada para conferência/auditagem** para tratativa.

Há uma divergência fundamental de política entre clientes:
- **Maioria:** permite o shortpicking (decrementa e segue), tratando a falta na conferência.
- **Cristal (I23.125):** **não** permite shortpicking — na falta física, o operador deve **cancelar o pedido** inteiro no Velox.
- **Toca da Raposa:** a função shortpicking pode ser **ligada/desligada** pelo administrador conforme a operação.

## Fluxo do Processo

1. Durante a separação, o operador identifica que a posição tem menos itens do que o solicitado (ex.: pediu 10, há 8).
2. **Decrementa** a quantidade no dispositivo e separa o disponível; ao confirmar com quantidade menor, dispara a integração de shortpicking.
3. No **ponto de decisão** ao final da linha (após picking fracionado/balança), o WCS valida se houve short → **desvia o volume à conferência/auditagem**.
4. Na **conferência**: leitura do volume → lista de itens + operador que coletou → validação item a item → **Completar** (se o item faltante estiver disponível) ou **Encerrar Conferência** (corte dos itens não lidos).
5. **Coleta posterior** do item cortado: leitura do **EAN/EAN_DZ** atualiza o volume.
6. **Reimpressão automática** da etiqueta do volume considerando apenas os itens efetivamente coletados (substitui a original).

## Telas e Funcionalidades

### Ajuste de quantidade (corte) — múltiplos métodos
- **Corte via LED (sem conferência):** botões dos LEDs decrementam a quantidade coletada na hora.
- **Corte via PDV (com conferência):** corte no PDV ou pressionando a posição de LED acesa (cor de leitura item a item) → pop-up de confirmação.
- **Corte via Picking Cart (PDV):** botão de ajuste → informa qtd real → confirma → lê a posição/caixa no carrinho.
- **Corte via Coletor:** botão de ajuste → qtd real → confirma → lê o volume.
- **Corte via Order Start (Beleza):** missão sem saldo na posição não inicia até reabastecer; exceção: sem saldo em picking **nem** transfer → libera a missão já com o item cortado (tratativa manual no WMS).

### Tela de Conferência (pós-short)
- **Comportamento:** lê o volume, exibe itens e o coletor responsável; botões **Completar**, **Encerrar Conferência**, e (Beta-Esteio) **Cancelar Ação**/**Voltar**.

### Relatório de Shortpicking
- **Comportamento:** tela dedicada que lista as remessas com ocorrência de shortpicking, com filtro por data.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Short = quantidade física < solicitada; o operador decrementa, separa o disponível e dispara a integração de shortpicking ao WMS. |
| RN-02 | **(Cristal)** O sistema **não** permite shortpicking; na falta, o operador **cancela o pedido** no Velox. |
| RN-03 | **(Toca da Raposa)** A função shortpicking pode ser ativada/desativada pelo administrador; com ela desligada, falta é marcada com identificação visual. |
| RN-04 | O volume com shortpicking é **desviado automaticamente para conferência/auditagem** no ponto de decisão. |
| RN-05 | O WCS também desvia para conferência por: **percentual de amostragem**, **parâmetro por cliente** (lista de códigos, carga via Excel) e **peso fora da tolerância** na balança. |
| RN-06 | Ao **Encerrar Conferência**, os itens **não lidos** são registrados como cortados. |
| RN-07 | Havendo itens cortados, a etiqueta do volume é **reimpressa automaticamente** considerando só o que foi coletado. |
| RN-08 | **(NavePark)** Com o parâmetro **"Auditoria de Corte"** ativo, o corte só é efetivado após autenticação de **supervisor** (senha/crachá); sem isso, o volume fica pendente. |
| RN-09 | **(NavePark)** O corte gera **confirmação parcial** ao WMS (INT-008) e uma **tarefa de Inventário/Auditoria automática** (INT-006) para corrigir o saldo. |
| RN-10 | **(Beta-Esteio – Fullcase)** "Finalizar Coleta Parcial" invalida as etiquetas dos volumes não coletados e envia Confirmação de Picking com status **"parcial"**. |
| RN-11 | **(Bug ShortIndicator – Beleza)** Enviar `ShortIndicator=true` por item em volume intermediário fazia o WMS cancelar o saldo do SKU em **todos** os volumes da missão — corrigir para considerar o total de volumes. |
| RN-12 | **(Corte multi)** Em caixa multi, cortar priorizando o pedido de **menor prioridade logística**; desempate por **FIFO** (último pedido enviado). |
| RN-13 | O produto pode ser separado em **2 ou mais lotes** diferentes. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I23.125** (Cristal) | **Proíbe** shortpicking; falta → cancelamento do pedido; permite separação multi-lote. |
| **I22.2232** (Toca da Raposa) | Função shortpicking liga/desliga; WMS decide completar ou enviar parcial; marcação visual quando desligada. |
| **I24.203 / I25.111 / I25.136** (Beta) | Corte via LED (sem conf.) e PDV (com conf.); relatório de shortpicking; conferência com Completar/Encerrar + reimpressão; Fullcase com "Finalizar Coleta Parcial". |
| **I24.215** (BP) | Corte via LED com ajuste de quantidade. |
| **I25.4066** (NavePark) | Auditoria de Corte com aprovação de supervisor; INT-008 (parcial) + INT-006 (inventário automático); motivo (Dano/Falta). |
| **I25.138** (Guatemala) | Integração **WMTOCO** (E1LTCOH/E1LTCOI) com quantidades separadas e faltantes. |
| **I23.1410** (Normandia) | Integração **1.8 Avarias/ShortPicking** ao WMS para reabastecimento/ajuste; cobre também avarias. |
| **I23.1412** (FDBR) | Pedido deve ser sempre completo; short → caixa ao rejeito antes da conferência; corte via Picking Cart/Coletor. |
| **I25.9043** (Beleza) | Corte via Order Start (sem saldo picking/transfer); correção do bug ShortIndicator. |

## Integrações

| Integração | Sentido | Descrição |
|-----------|---------|-----------|
| **Integração de shortpicking / Confirmação de Coleta** | WCS → WMS | Informa quantidades separadas e faltantes; dispara reabastecimento/ajuste no WMS. |
| **WMTOCO (E1LTCOH/E1LTCOI)** | WCS → WMS | Confirmação de ordem de transferência com short (Guatemala). |
| **INT-008** | WCS → WMS | Confirmação parcial do corte (NavePark). |
| **INT-006** | WCS (interno) | Tarefa automática de inventário/auditoria para corrigir o saldo (NavePark). |
| **ShortIndicator** | WCS → WMS | Flag por item na Confirmação de Coleta; sensível ao total de volumes da missão. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Shortpicking / Corte** | Separação de quantidade inferior à solicitada por falta/indisponibilidade física. |
| **Ponto de decisão** | Local ao final da linha onde o WCS decide desviar o volume à conferência (por short, amostragem, peso ou cliente). |
| **Auditoria de Corte** | Parâmetro que exige aprovação de supervisor para efetivar o corte (NavePark). |
| **ShortIndicator** | Flag enviado ao WMS indicando corte de um item em um volume. |
| **EAN_DZ** | Código de barras da dúzia/embalagem, usado na coleta posterior do item cortado. |
| **Finalizar Coleta Parcial** | Ação que invalida etiquetas de volumes não coletados e marca corte de Full Case. |
| **Confirmação parcial** | Retorno ao WMS informando que o pedido foi atendido parcialmente. |
| **Relatório de Shortpicking** | Tela que lista remessas com ocorrência de corte, filtrável por data. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 68 seções*
