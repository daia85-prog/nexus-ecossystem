# Sorter-Rampas — Dossiê Técnico

**Bloco:** Expedição | **Tópico:** Rampas do Sorter
**Seções analisadas:** 5 | **Fonte:** Sintetizado a partir de dossiês de Sorter, Sorter-Indução e Sorter-Rejeito (2026-06-29)

## Visão Geral

As rampas (chutes) são as saídas físicas do sorter, cada uma representando um destino de expedição (rota, transportadora, romaneio ou zona de paletização). O WCS gerencia a alocação dinâmica de destinos às rampas, controla o estado de capacidade (livre / parcialmente cheio / cheio) e opera o sinaleiro (verde / amarelo / vermelho) para orientar os operadores. Quando uma rampa fica cheia, os volumes destinados a ela entram em [[recirculacao]] até a rampa liberar ou o limite de voltas ser esgotado.

## Fluxo do Processo

1. WCS recebe pedido de roteamento do sorter (volume ID → destino)
2. WCS mapeia destino → número de rampa ativa
3. Sorter desvia o volume para a rampa mapeada
4. Sinaleiro da rampa indica estado: verde (livre), amarelo (em enchimento), vermelho (cheia)
5. Operador coleta volumes da rampa e realiza paletização (PTL ou convencional)
6. Ao esvaziar a rampa → WCS atualiza estado e pode reatribuir destinos

## Telas e Funcionalidades

| Tela | Função |
|------|--------|
| Mapa de Rampas | Visão gráfica de todas as rampas com estado atual e destino |
| Gestão de Destinos | Alocação manual de destino (rota/transportadora) por rampa |
| Fila de Recirculação | Volumes aguardando rampa liberar (voltas restantes) |
| Log de Eventos | Histórico de abertura/fechamento/saturação por rampa |

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Cada rampa comporta N volumes (capacidade configurada por projeto) |
| RN-02 | Rampa cheia dispara sinaleiro vermelho e inicia recirculação dos volumes destinados a ela |
| RN-03 | Sinaleiro amarelo indica que a rampa está acima de X% da capacidade (parâmetro configurável) |
| RN-04 | WCS pode realocar um destino para outra rampa quando a original satura (overflow automático) |
| RN-05 | Abertura de rampa (esvaziamento pelo operador) atualiza estado em tempo real via PLC |
| RN-06 | Rampas de rejeito têm prioridade de esvaziamento; WCS alerta quando rejeito satura |
| RN-07 | Destino "sem rampa ativa" desvia volume direto para rejeito (rampa não alocada) |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| Sorter cross-belt | Rampas físicas em gôndola; capacidade por nível de gôndola |
| Sorter de sapatas | Rampas laterais (chutes); capacidade linear em metros |
| Sorter dupla face | Rampas em ambos os lados da esteira; WCS gerencia lado A e lado B independentemente |
| Projetos sem sorter | Rampas inexistentes; paletização manual por operador de separação |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| PLC / Controlador Sorter | Bidirecional | WCS envia destino; PLC confirma desvio e informa estado da rampa |
| [[sorter-inducao]] | Upstream | Indução é o ponto de entrada; rampa é o ponto de saída |
| [[sorter-rejeito]] | Fallback | Rampa de rejeito recebe volumes sem destino ou após limite de recirculação |
| [[recirculacao]] | Mecanismo | Volumes aguardam N voltas na esteira quando rampa está cheia |
| [[dashboards-relatorios]] | Monitoramento | Saturação de rampas em tempo real |

## Terminologia

| Termo | Definição |
|-------|-----------|
| Rampa / Chute | Saída física do sorter para um destino específico |
| Sinaleiro | Display de status (verde/amarelo/vermelho) indicando capacidade da rampa |
| Capacidade de Rampa | Número máximo de volumes que a rampa comporta antes de sinalizar "cheia" |
| Destino | Associação rampa → rota/transportadora/romaneio configurada no WCS |
| Overflow | Saturação de rampa que força recirculação ou realocação |

---
*Gerado em 2026-06-29 · síntese a partir de dossiês de Sorter, Sorter-Indução e Sorter-Rejeito*
