---
aliases:
  - "Cadastro de Caixas"
  - "Tipos de Embalagem"
  - "Caixas de Picking"
tags:
  - wcs/bloco
  - wcs/sistema
  - wcs/cadastro-caixas
  - processo-operacional
  - pendente/revisao-humana
  - stub
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Sistema]]

# Cadastro-Caixas

> Stub — tabela de tipos de caixa/embalagem disponíveis no armazém: código, dimensões internas (úteis para cubagem), peso da tara e volume interno. O algoritmo de cubagem seleciona o menor tipo de caixa que comporta todos os volumes do pedido.

## Contexto Latente e Inferencia Inicial

O cadastro de caixas define os tipos de embalagem disponíveis para uso na cubagem e picking. Cada tipo tem código, dimensões internas (usadas pelo algoritmo de cubagem), tara (peso da caixa vazia, usado no Check Weight) e capacidade volumétrica. O algoritmo de [[cubagem]] usa esse cadastro para selecionar o menor tipo de caixa que comporta os itens do pedido, minimizando custo de frete. Alimentado manualmente ou via integração com WMS.

## Documentacao Tecnica

- [[DOSSIE]] -- *a criar*
- [[insights/cadastro-caixas.INSIGHTS]] -- *a criar*

## Relacoes no Grafo

- [[MOC-Sistema]] -- Mapa de Conteúdo da categoria sistema
- [[cubagem]] -- Algoritmo de cubagem consulta o cadastro de caixas para seleção
- [[pesagem]] -- Tara da caixa selecionada é somada ao peso esperado (Check Weight)
- [[etiquetas]] -- Tipo de caixa define o template de etiqueta a emitir
- [[cadastro-produtos]] -- Dimensões do produto × dimensões da caixa é o input da cubagem
