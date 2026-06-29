---
aliases:
  - "Paletização PTL"
  - "PTL Paletizacao"
  - "Put To Light Paletizacao"
tags:
  - wcs/bloco
  - wcs/expedicao
  - wcs/paletizacao-ptl
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# Paletizacao-PTL

> Nó de roteamento — processo de alocação de volumes em posições de pallet via displays PTL após o desvio no sorter.

## Contexto Latente e Inferencia Inicial

A Paletização PTL é a camada de expedição que conecta o desvio no sorter à montagem física do pallet: volumes chegam às rampas de saída e são alocados em posições PTL (display/LED por posição), organizados por rota/transportadora. Difere do tópico pai [[paletizacao]] (que cobre a lógica de cubagem e fechamento do pallet) e do [[ptl-alocacao]] (que cobre o fluxo operacional do PTL em detalhes). Este tópico cobre a integração entre a classificação automatizada e a construção do pallet via PTL.

## Documentacao Tecnica

- [[DOSSIE]] -- Dossiê técnico completo
- [[insights/paletizacao-ptl.INSIGHTS]] -- Análise de padrões e lacunas

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteúdo da categoria expedição
- [[paletizacao]] -- Tópico pai: cubagem, fechamento, etiqueta master
- [[ptl-alocacao]] -- Detalhe operacional do PTL (LED, botão, posições dinâmicas)
- [[sorter]] -- Origem dos volumes que chegam às rampas PTL
- [[sorter-mapa-rota]] -- Define qual rampa/posição PTL cada volume vai
- [[checklist-carregamento]] -- Pallet montado → sequenciado no carregamento
- [[picking-pallet]] -- Picking pallet bypassa PTL e vai direto ao stage
