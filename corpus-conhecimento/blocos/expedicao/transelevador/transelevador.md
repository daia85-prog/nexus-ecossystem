---
aliases:
  - "Transelevador"
  - "Stacker Crane"
  - "AS/RS"
tags:
  - wcs/bloco
  - wcs/expedicao
  - wcs/transelevador
  - processo-operacional
  - pendente/revisao-humana
  - stub
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# Transelevador

> Stub — equipamento automatizado de armazenagem de alta densidade (AS/RS - Automated Storage and Retrieval System). O WCS controla os ciclos de entrada/saída e gerencia a fila de missões do transelevador.

## Contexto Latente e Inferencia Inicial

O transelevador é um sistema AS/RS (Automated Storage and Retrieval System) controlado pelo WCS. Opera em corredores de alta densidade movendo pallets ou caixas entre posições de armazenagem e pontos de transferência (I/O points). O WCS gerencia a fila de missões (entradas de armazenagem, saídas para picking/expedição) e o estado de cada célula de armazenagem. Requer integração com PLC dedicado e protocol industrial (normalmente OPC-UA).

## Documentacao Tecnica

- [[DOSSIE]] -- *a criar*
- [[insights/transelevador.INSIGHTS]] -- *a criar*

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteúdo da categoria expedição
- [[gestao-estoque]] -- Células do transelevador são posições de armazenagem geridas pelo WCS
- [[infraestrutura]] -- PLC do transelevador na rede industrial
