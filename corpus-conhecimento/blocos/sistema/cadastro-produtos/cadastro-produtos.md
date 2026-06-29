---
aliases:
  - "Cadastro de Produtos"
  - "Cadastro SKU"
  - "Master de Produtos"
tags:
  - wcs/bloco
  - wcs/sistema
  - wcs/cadastro-produtos
  - processo-operacional
  - pendente/revisao-humana
  - stub
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Sistema]]

# Cadastro-Produtos

> Stub — master data de SKUs no WCS: código, dimensões (comprimento × largura × altura), peso, grau de fragilidade, tipo de embalagem e regras de cubagem. Base para seleção de caixa, pesagem e montagem de pallet.

## Contexto Latente e Inferencia Inicial

O cadastro de produtos é a base de dados de SKUs do WCS. Contém dimensões físicas, peso, grau de fragilidade (para [[matriz-fragilidade]]) e regras de embalagem (caixa padrão, múltiplos de embalagem). É alimentado pelo WMS ou ERP via integração de cadastros ([[integracao-cadastros]]) ou mantido manualmente. Dados incorretos aqui impactam cubagem, pesagem (Check Weight) e montagem de pallet.

## Documentacao Tecnica

- [[DOSSIE]] -- *a criar*
- [[insights/cadastro-produtos.INSIGHTS]] -- *a criar*

## Relacoes no Grafo

- [[MOC-Sistema]] -- Mapa de Conteúdo da categoria sistema
- [[integracao-cadastros]] -- Fonte primária: WMS/ERP envia cadastros ao WCS
- [[cubagem]] -- Dimensões e peso do SKU alimentam o algoritmo de cubagem
- [[pesagem]] -- Peso cadastrado é o peso esperado para Check Weight
- [[matriz-fragilidade]] -- Grau de fragilidade por SKU vem do cadastro de produtos
