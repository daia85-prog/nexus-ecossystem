---
aliases:
  - "Integracao Cadastros"
  - "Cadastros WCS"
  - "Master Data Integration"
tags:
  - wcs/bloco
  - wcs/integracao
  - master-data
  - cadastros
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Integracao]]

# Integracao Cadastros

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

Este tópico cobre as **integrações e telas de cadastro mestre** que alimentam o WCS (Velox): **Produto**, **Embalagens**, **Endereço** e os cadastros das controladoras de PTL (**Pollux** e **Vênus**). O cadastro de produto é o contrato mais importante — o WMS (ou ERP) envia os detalhes do item (dimensões, peso, códigos, curva, categoria, quantidades por embalagem) e o WCS usa esses dados para **validações, exibição em telas, cálculo de cubagem, regras operacionais e roteamento** (ex.: decidir Full Case). O corpus m...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/integracao-cadastros.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Integracao]] -- Mapa de Conteudo da categoria integracao
