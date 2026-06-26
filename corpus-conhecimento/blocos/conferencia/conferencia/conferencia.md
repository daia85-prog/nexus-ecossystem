---
aliases:
  - "Conferencia"
  - "Conferencia WCS"
  - "Modulo de Conferencia"
  - "Check Picking"
tags:
  - wcs/bloco
  - wcs/conferencia
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Conferencia]]

# Conferencia

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

A **Conferência** valida o conteúdo do volume antes da expedição, confrontando o que foi separado com o pedido. Nem todo volume é conferido: o WCS **desvia para a conferência** apenas os volumes que se enquadram em um conjunto de **critérios de desvio** (shortpicking, peso fora da tolerância, amostragem, flag por cliente, cliente novo, categoria, RFID divergente). Os demais seguem direto para packing/sorter. A conferência tem **modos de rigor configuráveis** (de "aprovar sem ler" até "leitura item a item") e culmin...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/conferencia.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Conferencia]] -- Mapa de Conteudo da categoria conferencia
