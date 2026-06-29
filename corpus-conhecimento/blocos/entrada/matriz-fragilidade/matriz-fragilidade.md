---
aliases:
  - "Matriz de Fragilidade"
  - "Matriz Fragilidade"
  - "Fragilidade de Pallet"
  - "Segregação por Peso"
tags:
  - wcs/bloco
  - wcs/entrada
  - wcs/matriz-fragilidade
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Entrada]]

# Matriz-Fragilidade

> Nó de roteamento — algoritmo de cubagem que ordena a montagem do pallet de 9 (pesado/base) a 1 (leve/topo), garantindo base sólida e proteção de produtos frágeis.

## Contexto Latente e Inferencia Inicial

A Matriz de Fragilidade é um conceito do tópico [[cubagem]] específico do projeto NavePark (I25.4066): o algoritmo de cubagem WCS gradua os volumes de 1 a 9 (9 = mais pesado/robusto, vai para a base; 1 = mais leve/frágil, vai para o topo). O WCS solicita os pallets na ordem decrescente para montar a base sólida primeiro. A matriz da integração de pedidos (WMS) sobrescreve a do cadastro de produtos, permitindo ajuste por pedido. Relaciona-se com o cadastro de produtos ([[integracao-cadastros]]) e com a montagem física do pallet ([[paletizacao]]).

## Documentacao Tecnica

- [[DOSSIE]] -- Dossiê técnico completo
- [[insights/matriz-fragilidade.INSIGHTS]] -- Análise de padrões e lacunas

## Relacoes no Grafo

- [[MOC-Entrada]] -- Mapa de Conteúdo da categoria entrada
- [[cubagem]] -- Tópico pai: cálculo de volumes e seleção de caixas
- [[integracao-cadastros]] -- Fonte do grau de fragilidade por SKU
- [[paletizacao]] -- A matriz ordena a montagem física do pallet
- [[recebimento-armazenagem]] -- Segregação de produtos frágeis começa no recebimento
