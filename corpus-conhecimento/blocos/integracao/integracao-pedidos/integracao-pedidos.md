---
aliases:
  - "Integracao Pedidos"
  - "Order Integration"
  - "Wave Integration"
  - "Remessa WCS"
tags:
  - wcs/bloco
  - wcs/integracao
  - pedidos
  - wave
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Integracao]]

# Integracao Pedidos

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

A **Integração de Pedidos / Remessas** é o contrato pelo qual o **WMS/EWM/SAP envia ao WCS a lista de pedidos a separar** ("Wave"). É a porta de entrada da operação: a partir dela o WCS exibe os pedidos no Order Start, define rota/transportadora (mapa do sorter), aplica flags de conferência e usa a cubagem para dimensionar os volumes. O payload é rico e varia por projeto, mas converge em um cabeçalho de **remessa** (pedido, prioridade, rota, transportadora, cliente, loja, CEP, flags) + uma lista de **itens** (taref...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/integracao-pedidos.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Integracao]] -- Mapa de Conteudo da categoria integracao
