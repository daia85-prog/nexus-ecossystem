---
aliases:
  - "Mapa de Rota"
  - "Route Map Sorter"
  - "Mapa Agrupador"
tags:
  - wcs/bloco
  - wcs/expedicao
  - wcs/sorter
  - roteamento
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# Sorter Mapa de Rota

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

O **Mapa de Sorter** é a funcionalidade do WCS que **vincula rampas (ou PTLs) a agrupadores** — definindo para onde cada volume é desviado na expedição. O agrupador varia por projeto: **transportadora, romaneio, loja, categoria de produto, tipo de embalagem, rota ou cliente**. A funcionalidade permite criar **layouts pré-definidos** e **alterná-los rapidamente** conforme a necessidade operacional (por turno, cliente, tipo de carga), com **autonomia do cliente** e **acesso restrito por permissão**. É a peça que torn...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/sorter-mapa-rota.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteudo da categoria expedicao
