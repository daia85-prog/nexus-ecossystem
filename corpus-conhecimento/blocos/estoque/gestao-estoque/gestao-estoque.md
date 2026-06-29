---
aliases:
  - "Gestão de Estoque"
  - "Gerenciamento de Estoque"
  - "Supervisão de Estoque"
tags:
  - wcs/bloco
  - wcs/estoque
  - wcs/gestao-estoque
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Estoque]]

# Gestao-Estoque

> Nó de roteamento — camada de supervisão, auditoria e ajuste do estoque no WCS. Distinto dos processos operacionais de inventário e reabastecimento.

## Contexto Latente e Inferencia Inicial

A Gestão de Estoque é a camada supervisória do WCS que engloba: visibilidade em tempo real do saldo por posição, movimentações forçadas (recall, ajuste, transferência entre empresas), e integração de ajuste com o WMS. É referenciada pelos módulos de Cadastros/Acessos (controle de permissão para movimentações sensíveis), Integração (recall e auditoria disparados pelo WMS/ERP), e Recebimento/Armazenagem (endereçamento e regras de alocação). Os tópicos [[inventario]] e [[reabastecimento]] cobrem os processos operacionais específicos; este tópico cobre a visão integrada de supervisão.

## Documentacao Tecnica

- [[DOSSIE]] -- Dossiê técnico completo
- [[insights/gestao-estoque.INSIGHTS]] -- Análise de padrões e lacunas

## Relacoes no Grafo

- [[MOC-Estoque]] -- Mapa de Conteúdo da categoria estoque
- [[inventario]] -- Contagem física e ajuste de divergências
- [[reabastecimento]] -- Movimentação Transfer → Picking → Buffer
- [[cadastros-acessos]] -- Permissões para ajuste manual, movimentação forçada
- [[integracao-wms-erp]] -- Integração de ajuste de estoque ao WMS/ERP
- [[recebimento-armazenagem]] -- Endereçamento e regras de alocação na entrada
