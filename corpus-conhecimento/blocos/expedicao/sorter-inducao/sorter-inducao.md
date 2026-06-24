---
aliases:
  - "Inducao Sorter"
  - "Sorter Induction"
  - "Portal de Inducao"
tags:
  - wcs/bloco
  - wcs/expedicao
  - wcs/sorter
  - inducao
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Expedicao]]

# Sorter Inducao

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

A **Indução no Sorter** é a etapa em que os volumes entram na esteira de classificação automatizada e são lidos no **portal de leitura** para que o WCS (Velox) valide o destino e comande os desvios. O princípio fundamental, repetido em praticamente todos os projetos, é: > Para a correta leitura no portal, os volumes devem estar **devidamente integrados no WCS/Velox**; com base nas informações recebidas, o sistema valida o destino e aciona o CLP/PLC para realizar os desvios na automação. A indução cobre tanto **caix...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/sorter-inducao.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Expedicao]] -- Mapa de Conteudo da categoria expedicao
