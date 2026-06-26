---
aliases:
  - "Reabastecimento"
  - "Replenishment"
  - "Transfer Buffer-Picking"
tags:
  - wcs/bloco
  - wcs/estoque
  - replenishment
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Estoque]]

# Reabastecimento

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

O **Reabastecimento** move produtos de uma **origem** (Transfer ou Buffer/Pulmão) para as **posições finais de picking**, mantendo o estoque adequado para a separação. O WCS monitora continuamente os níveis e gera **tarefas de reabastecimento** (automáticas ou manuais), executadas pelo operador via **coletor Android** com leitura de origem → item → destino. A **responsabilidade** varia: em alguns clientes o reabastecimento é do **cliente/WMS** (Cristal, Peter); em outros é **do WCS** (BP, FDBR, Beleza). As regras d...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/reabastecimento.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Estoque]] -- Mapa de Conteudo da categoria estoque
