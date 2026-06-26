---
aliases:
  - "Integracao WCS-WMS"
  - "WCS WMS Interface"
  - "Snap Shot"
  - "Inbound Sync"
tags:
  - wcs/bloco
  - wcs/integracao
  - wms
  - snap-shot
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Integracao]]

# Integracao WCS-WMS

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

Este tópico cobre as **integrações entre o WCS (Velox) e o WMS** (EWM/SAP, conforme o cliente). O corpus é fortemente repetitivo: as mesmas integrações se repetem entre projetos (BP, Flower, Beleza, Cougar, NavePark, Beta), com pequenas variações de payload. Os contratos centrais são: **Sincronização de estoque** em ambos os sentidos: **Snap Shot** (WMS → WCS) e **Inbound Sync** (WCS → WMS). **Confirmação de separação** (Picking Confirm) do WCS ao WMS, com regras distintas por tipo de volume. **Retorno de Reabastec...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/integracao-wcs-wms.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Integracao]] -- Mapa de Conteudo da categoria integracao
