---
aliases:
  - "Recirculação"
  - "Recirculacao Sorter"
  - "Volta na Esteira"
tags:
  - wcs/bloco
  - wcs/expedicao
  - wcs/recirculacao
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# Recirculacao

> Nó de roteamento — mecanismo de recuperação de volumes que não puderam ser desviados (rampa cheia / perda de tracking): voltam a circular na esteira sem reindução até esgotar o limite parametrizável.

## Contexto Latente e Inferencia Inicial

A recirculação é a primeira camada de recuperação do sorter: quando a rampa de destino está cheia ou o PLC perde o tracking do volume, em vez de enviá-lo imediatamente ao rejeito, o WCS permite que o volume complete N voltas na esteira aguardando a rampa liberar. O limite é parametrizável (padrão: 3 voltas). Esgotado o limite, o volume vai ao [[sorter-rejeito]]. O sinaleiro da rampa cheia pisca amarelo durante a recirculação. Este mecanismo é monitorado no [[dashboards-relatorios]] (saturação de rampas, volumes recirculados).

## Documentacao Tecnica

- [[DOSSIE]] -- Dossiê técnico completo
- [[insights/recirculacao.INSIGHTS]] -- Análise de padrões e lacunas

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteúdo da categoria expedição
- [[sorter]] -- Contexto do sorter automatizado
- [[sorter-rejeito]] -- Destino após esgotar o limite de recirculações
- [[sorter-rampas]] -- Rampas cheias são o gatilho mais comum
- [[dashboards-relatorios]] -- Monitoramento de saturação e volumes recirculados
