---
aliases:
  - "Picking Exceção"
  - "Picking de Exceção"
  - "Exceção de Picking"
  - "Erro de Picking"
tags:
  - wcs/bloco
  - wcs/separacao
  - wcs/picking-excecao
  - processo-operacional
  - pendente/revisao-humana
  - stub
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Separacao]]

# Picking-Excecao

> Stub — tratamento de exceções no processo de picking: produto não encontrado na posição (stockout), produto avariado, quantidade insuficiente, endereço incorreto. O WCS registra a exceção e encaminha para resolução pelo supervisor.

## Contexto Latente e Inferencia Inicial

O picking de exceção cobre os casos onde o processo de separação não pode ser completado normalmente: posição vazia (stockout), produto avariado que não pode ser separado, quantidade física menor que a solicitada, código de barras ilegível ou divergente. O operador registra a exceção no coletor; o WCS interrompe o task de picking e gera uma tarefa de exceção para o supervisor resolver (reabastecimento de emergência, substituição de produto, ajuste de inventário). Impacta diretamente o fill rate do pedido.

## Documentacao Tecnica

- [[DOSSIE]] -- *a criar*
- [[insights/picking-excecao.INSIGHTS]] -- *a criar*

## Relacoes no Grafo

- [[MOC-Separacao]] -- Mapa de Conteúdo da categoria separação
- [[picking-cart]] -- Picking cart pode gerar exceção por posição vazia
- [[picking-pallet]] -- Picking pallet idem; exceção impacta o pallet em montagem
- [[reabastecimento]] -- Stockout no picking dispara reabastecimento de emergência
- [[gestao-estoque]] -- Exceção de picking gera ajuste de inventário
- [[conferencia]] -- Volume com exceção pode ser encaminhado para conferência especial
