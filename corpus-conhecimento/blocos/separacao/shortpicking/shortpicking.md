---
aliases:
  - "Short Picking"
  - "Corte"
  - "Falta de Estoque"
  - "Divergencia de Estoque"
tags:
  - wcs/bloco
  - wcs/separacao
  - corte
  - falta-estoque
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Separacao]]

# Short Picking

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

O **Shortpicking** (corte) ocorre quando a quantidade **física disponível** na posição é **inferior** à quantidade solicitada. O operador decrementa a quantidade no dispositivo (display/LED/PDV/coletor), separa o que há disponível e confirma — disparando a **integração de shortpicking** ao WMS, que decide reabastecer, gerar nova onda ou faturar parcial. A caixa com corte é tipicamente **desviada para conferência/auditagem** para tratativa. Há uma divergência fundamental de política entre clientes: **Maioria:** perm...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/shortpicking.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Separacao]] -- Mapa de Conteudo da categoria separacao
