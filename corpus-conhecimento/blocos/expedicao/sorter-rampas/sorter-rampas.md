---
aliases:
  - "Rampas do Sorter"
  - "Saídas do Sorter"
  - "Chutes"
tags:
  - wcs/bloco
  - wcs/expedicao
  - wcs/sorter-rampas
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# Sorter-Rampas

> Nó de roteamento — rampas de saída (chutes) do sorter: destinos físicos do desvio, incluindo rampas de transporte, PTL, rejeito e PIN.

## Contexto Latente e Inferencia Inicial

As rampas (saídas/chutes) são os destinos físicos dos volumes após o desvio no sorter. Cada rampa corresponde a: uma transportadora/rota (fracionado/fullcase), uma posição PTL, a rampa de rejeito, ou a saída PIN (pedidos com aprovação pendente). O mapa do sorter ([[sorter-mapa-rota]]) vincula cada destino lógico a uma rampa física. A saturação das rampas dispara recirculação ([[recirculacao]]) e por fim rejeito ([[sorter-rejeito]]). O dashboard de saturação de rampas é coberto por [[dashboards-relatorios]].

## Documentacao Tecnica

- [[DOSSIE]] -- Dossiê técnico completo
- [[insights/sorter-rampas.INSIGHTS]] -- Análise de padrões e lacunas

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteúdo da categoria expedição
- [[sorter]] -- Guarda-chuva do sorter; arquitetura e comunicação PLC
- [[sorter-mapa-rota]] -- Define o vínculo lógico destino → rampa física
- [[sorter-inducao]] -- Volumes entram pelo portal e são desviados para as rampas
- [[sorter-rejeito]] -- Rampa especial para volumes não processados
- [[recirculacao]] -- Volumes com rampa cheia recirculam antes do rejeito
- [[ptl-alocacao]] -- Posições PTL ficam nas rampas de saída
- [[paletizacao]] -- Volumes nas rampas são alocados em pallets
