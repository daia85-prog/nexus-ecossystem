---
aliases:
  - "Cubagem"
  - "Cubing"
  - "Dimensionamento de Embalagem"
  - "Selecao de Embalagem"
tags:
  - wcs/bloco
  - wcs/entrada
  - dimensionamento
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Entrada]]

# Cubagem

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

A **Cubagem** é o cálculo do **volume total dos itens** de um pedido/missão para determinar **quantas e quais caixas** são necessárias para a separação. É a base do dimensionamento de volumes do WCS: a partir das dimensões e peso dos produtos (do cadastro), o sistema gera os volumes, sugere a caixa e imprime as etiquetas. A **responsabilidade** pelo cálculo varia: **WCS** (Flower, FDBR, Beta, Beleza, NavePark) ou **WMS** (Peter, Master). E há três modelos de seleção de caixa: **caixa plástica padrão única**, **sele...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/cubagem.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Entrada]] -- Mapa de Conteudo da categoria entrada
