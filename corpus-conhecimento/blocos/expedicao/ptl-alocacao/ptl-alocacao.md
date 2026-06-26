---
aliases:
  - "PTL"
  - "Put To Light"
  - "Alocacao PTL"
tags:
  - wcs/bloco
  - wcs/expedicao
  - ptl
  - put-to-light
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# PTL Alocacao Put To Light

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

O **PTL (Put To Light)** é a **alocação dos volumes em posições de pallet na expedição**, guiada por **luz (LED)**. Diferente do PTM (monitor/TV), o PTL usa um **display/LED por posição** que acende ao ler o volume, indicando onde alocá-lo. A gestão das posições é **dinâmica**: elas começam vazias e, ao integrar a onda, o WCS **vincula cada pedido a uma posição livre** (1 pedido por posição), respeitando **prioridade** e, no empate, **FIFO**. O WCS reserva o lugar de cada volume no pallet **antes** dele chegar à ra...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/ptl-alocacao.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteudo da categoria expedicao
