---
aliases:
  - "PTM"
  - "Put To Monitor"
  - "Monitor de Expedicao"
tags:
  - wcs/bloco
  - wcs/expedicao
  - ptm
  - monitor
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# PTM Put To Monitor

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

O **PTM (Put-To-Monitor)** é o método de **montagem de pallets na saída do sorter**, guiado por **monitor/TV + scanner de mão**. Após o volume ser desviado para a rampa, o operador lê o código de barras (Full Case) ou QR Code (fracionado) do volume; o Velox consulta a base e **indica em uma TV qual posição de pallet** o volume pertence, usando um **sistema de cores** que espelha marcações físicas no chão. O vínculo pedido/transportadora ↔ posição PTM pode ser **automático** (conforme os volumes passam pelo portal d...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/ptm.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteudo da categoria expedicao
