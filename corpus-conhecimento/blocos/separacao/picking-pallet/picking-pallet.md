---
aliases:
  - "Picking Pallet"
  - "Separacao Pallet"
  - "Pallet Picking"
  - "Picking Pallet Direto"
tags:
  - wcs/bloco
  - wcs/separacao
  - pallet
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Separacao]]

# Picking Pallet

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

O **Picking Pallet** é a modalidade de separação destinada a itens que, embora se enquadrem em fluxos convencionais (Fullcase ou Exceção), apresentam **quantidade elevada de um mesmo SKU** para uma única remessa/pedido — o que torna mais eficiente montar diretamente um **pallet** em vez de coletar caixa a caixa. A característica central, comum a todas as variações, é que **o pallet vai direto para a área de expedição (rampa/stage), sem passar pelo sorter nem pelo PTL (Put to Light)** — a alocação já é feita de form...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/picking-pallet.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Separacao]] -- Mapa de Conteudo da categoria separacao
