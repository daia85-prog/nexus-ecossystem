---
aliases:
  - "Integracao WMS-ERP"
  - "WMS ERP Interface"
  - "IDOC Integration"
  - "SAP WMS"
tags:
  - wcs/bloco
  - wcs/integracao
  - erp
  - sap
  - idoc
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Integracao]]

# Integracao WMS-ERP

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

Este tópico cobre a **integração do WCS (Velox) com o SAP WM/ERP via IDOC**, predominante em operações de **armazém automatizado de pallets** (transelevador, HB) — fortemente representada pelos projetos **BRF** (Salvador, Embu, Uberlândia, Jundiaí). Diferente da [[integracao-wcs-wms]] (REST/JSON com WMS de e-commerce), aqui o transporte é **IDOC-SAP em XML/SOAP sobre HTTP (SSL/TLS)**. As integrações centrais formam o ciclo de **Ordem de Transporte (OT)**: **WMTORD / TORD** — criação da OT (armazenar/retirar); **WMT...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/integracao-wms-erp.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Integracao]] -- Mapa de Conteudo da categoria integracao
