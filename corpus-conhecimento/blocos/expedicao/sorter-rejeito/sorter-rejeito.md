---
aliases:
  - "Rejeito Sorter"
  - "Sorter Reject"
  - "NoRead"
  - "MultiRead"
tags:
  - wcs/bloco
  - wcs/expedicao
  - wcs/sorter
  - rejeito
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# Sorter Rejeito

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

O **Rejeito no Sorter** é o tratamento dos volumes que **não puderam ser desviados** para a rampa de destino. A **rampa de rejeito** ao final do sorter funciona como **ponto de auditagem e tratativa**: o volume é separado do fluxo, o operador identifica o **motivo do rejeito** (em uma tela dedicada) e o **reinduz** no sorter (antes do portal) ou o leva manualmente à rampa de destino, lendo-o no scanner fixo. O rejeito **não encerra** o ciclo do volume — é uma etapa de recuperação. Antes do rejeito definitivo, há a...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/sorter-rejeito.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteudo da categoria expedicao
