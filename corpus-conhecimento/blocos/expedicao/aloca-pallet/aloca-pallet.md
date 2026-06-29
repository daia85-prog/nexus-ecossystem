---
aliases:
  - "Aloca Pallet"
  - "Alocação de Pallet"
  - "Aloca-Pallet"
tags:
  - wcs/bloco
  - wcs/expedicao
  - wcs/aloca-pallet
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# Aloca-Pallet

> Nó de roteamento — processo de vinculação e alocação dos volumes ao pallet de destino, integrado ao WMS após o fechamento.

## Contexto Latente e Inferencia Inicial

O Aloca Pallet é o processo pelo qual o WCS vincula cada volume a um pallet de rota/transportadora específica e integra o conteúdo ao WMS ao fechar. É distinto do [[paletizacao]] (que cobre a lógica de cubagem e fechamento) e do [[ptl-alocacao]] (que cobre o display LED guiado). Aqui o foco é na integração de Aloca Pallet disparada pelo WCS com todas as etiquetas vinculadas à UC — especialmente no contexto do [[picking-pallet]], onde o pallet bypassa PTL e vai direto ao stage, e o WCS dispara a integração de Aloca Pallet com a leitura do PRIX fixo.

## Documentacao Tecnica

- [[DOSSIE]] -- Dossiê técnico completo
- [[insights/aloca-pallet.INSIGHTS]] -- Análise de padrões e lacunas

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteúdo da categoria expedição
- [[paletizacao]] -- Cubagem, fechamento, etiqueta master
- [[ptl-alocacao]] -- Aloca Pallet via display LED nas posições de PTL
- [[picking-pallet]] -- Picking pallet bypassa PTL; Aloca Pallet é disparado pelo PRIX fixo
- [[integracao-wcs-wms]] -- Integração de expedição com conteúdo do pallet ao WMS
- [[etiquetas]] -- Etiqueta de UC de pallet + romaneio vinculados à alocação
- [[sorter]] -- Volumes desviados às rampas antes da alocação
