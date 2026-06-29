# Recirculacao — Dossiê Técnico

**Bloco:** Expedição | **Tópico:** Recirculação no Sorter
**Seções analisadas:** 4 | **Fonte:** Sintetizado a partir de dossiês de Sorter, Sorter-Rejeito e Sorter-Rampas (2026-06-29)

## Visão Geral

A recirculação é o mecanismo de recuperação do sorter para volumes que não puderam ser desviados para a rampa de destino. Quando uma rampa está cheia ou o PLC perde o tracking do volume, em vez de enviar o volume imediatamente ao [[sorter-rejeito]], o WCS configura o sorter para que o volume complete N voltas adicionais na esteira, aguardando a rampa liberar. O limite de recirculações é parametrizável (padrão: 3 voltas). Ao esgotar o limite, o volume é desviado ao rejeito e fica disponível para análise do supervisor.

## Fluxo do Processo

1. Sorter tenta desviar volume para a rampa de destino
2. Rampa cheia (sinaleiro vermelho) → PLC não executa o desvio
3. WCS contabiliza 1 recirculação para o volume (volta na esteira sem reindução)
4. Sinaleiro da rampa pisca amarelo indicando que há volumes aguardando
5. Se rampa liberar antes do limite → sorter desvia o volume na próxima passagem
6. Se limite atingido (ex.: 3 voltas) → volume é desviado ao [[sorter-rejeito]]
7. Supervisor processa volumes no rejeito (reinduz manualmente ou descarta)

## Telas e Funcionalidades

| Tela | Função |
|------|--------|
| Monitor de Recirculação | Lista de volumes em circulação com contador de voltas restantes |
| Configuração de Parâmetros | Limite máximo de recirculações por volume (padrão 3) |
| Dashboard Sorter | Gráfico de volumes recirculados por rampa, por turno |
| Log de Eventos Sorter | Histórico de recirculações, desvios e reinduções |

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Limite de recirculações configurável; padrão = 3 voltas |
| RN-02 | Cada volta que o volume passa sem ser desviado incrementa o contador WCS |
| RN-03 | Ao atingir o limite → sorter desvia volume para rampa de rejeito |
| RN-04 | Sinaleiro da rampa destino pisca amarelo enquanto há volumes em recirculação aguardando |
| RN-05 | Perda de tracking pelo PLC (volume não identificado na leitura) também aciona recirculação |
| RN-06 | Volume desviado ao rejeito por excesso de recirculação recebe flag "CIRC_LIMIT" para análise |
| RN-07 | Supervisor pode reinduzir volume do rejeito manualmente sem criar nova ordem de separação |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| Sorter com esteira circular | Recirculação nativa (volume literalmente dá a volta); configuração de N voltas |
| Sorter linear sem retorno | Recirculação não aplicável; desvio direto ao rejeito ao não encontrar destino |
| Projetos com múltiplas rampas por destino | WCS tenta rampa alternativa antes de iniciar recirculação |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| PLC / Controlador Sorter | Bidirecional | PLC confirma desvio realizado ou falha; WCS conta recirculações |
| [[sorter-rampas]] | Dependência | Rampa cheia é o principal gatilho da recirculação |
| [[sorter-rejeito]] | Destino final | Rampa de rejeito recebe volumes que excederam o limite |
| [[dashboards-relatorios]] | Monitoramento | Métricas de recirculação em tempo real e por turno |

## Terminologia

| Termo | Definição |
|-------|-----------|
| Recirculação | Volta adicional do volume na esteira do sorter aguardando rampa liberar |
| Limite de Recirculações | Número máximo de voltas permitido antes do desvio ao rejeito |
| CIRC_LIMIT | Flag aplicada ao volume que atingiu o limite e foi ao rejeito |
| Tracking | Rastreamento do volume pelo PLC ao longo da esteira (leitura de código) |
| Perda de Tracking | Falha do PLC em identificar o volume na esteira (código ilegível ou ausente) |

---
*Gerado em 2026-06-29 · síntese a partir de dossiês de Sorter, Sorter-Rejeito e Sorter-Rampas*
