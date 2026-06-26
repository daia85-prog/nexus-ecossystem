---
aliases:
  - "PBL"
  - "Picking By Light"
  - "Picking por Luz"
  - "Flow Rack PBL"
  - "PVAR"
tags:
  - wcs/bloco
  - wcs/separacao
  - picking-by-light
  - led
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Separacao]]

# Picking PBL Picking By Light

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

O **Picking By Light (PBL / Pick-by-Light)** é a separação **fracionada guiada por LEDs** em **flow racks**. A caixa de separação percorre a **linha expressa**; ao passar pelo leitor de uma estação, se houver itens a coletar, é **desviada** para o posto correspondente, onde os **LEDs acendem** indicando posição e quantidade. O operador separa, **confirma pressionando o botão** (a posição apaga) e segue até concluir; ao final, induz a caixa de volta à linha rumo à próxima estação. A estrutura típica é uma **estação...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/picking-pbl.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Separacao]] -- Mapa de Conteudo da categoria separacao
