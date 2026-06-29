---
aliases:
  - "Romaneio"
  - "Manifesto de Carga"
  - "Romaneio de Pallet"
tags:
  - wcs/bloco
  - wcs/expedicao
  - wcs/romaneio
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# Romaneio

> Nó de roteamento — documento de romaneio que lista volumes/itens de um pallet, controlando a liberação de posições PTL e o acompanhamento físico na expedição.

## Contexto Latente e Inferencia Inicial

O romaneio é o manifesto de carga gerado pelo WCS (ou WMS) ao fechar um pallet/unidade de carga. Serve como documento de acompanhamento físico e controle na expedição. No contexto do PTL (BP), o agrupamento por romaneio é o padrão para pallets com transportadora "Própria", determinando quais posições PTL são atribuídas ao pallet. Na picking-pallet, o WCS gera o romaneio com a relação de volumes/itens contidos na UC ao encerrar a montagem. A tela de romaneios (pt9) controla a liberação de posições PTL nas rampas.

## Documentacao Tecnica

- [[DOSSIE]] -- Dossiê técnico completo
- [[insights/romaneio.INSIGHTS]] -- Análise de padrões e lacunas

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteúdo da categoria expedição
- [[ptl-alocacao]] -- Romaneio é o agrupador padrão das posições PTL (BP)
- [[paletizacao]] -- Fechamento do pallet gera o romaneio final
- [[picking-pallet]] -- WCS gera romaneio ao encerrar montagem do pallet
- [[etiquetas]] -- Etiqueta de UC + romaneio acompanham o pallet
- [[checklist-carregamento]] -- Romaneio é conferido no carregamento final
