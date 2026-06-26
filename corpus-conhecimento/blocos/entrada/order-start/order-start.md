---
aliases:
  - "Order Start"
  - "OS"
  - "Disparo de Separacao"
  - "Criacao de Ordem"
tags:
  - wcs/bloco
  - wcs/entrada
  - disparo-separacao
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-24T10:00:00
---

Roteamento Conceptual: [[MOC-Entrada]]

# Order Start

> No de roteamento -- conecta o grafo do vault a documentacao tecnica completa deste bloco WCS. Nao duplique conteudo aqui; consulte o [[DOSSIE]].

## Contexto Latente e Inferencia Inicial

O **Order Start** é o **disparo da separação**: após a integração da onda/pedidos, o WCS **ordena os pedidos** em fila, **gera os volumes** (a partir da cubagem), **imprime as etiquetas** e o operador **induz as caixas** na linha rumo às estações de separação. É o ponto de entrada que distribui o trabalho para os diferentes fluxos de picking. Há um Order Start **por tipo de fluxo**: **Padrão** (linha comum/PBL), **Picking Cart**, **Full Case**, **Coletor (inconformes)** e **Exceção**. Cada um tem sua tela e regras,...

## Documentacao Tecnica

- [[DOSSIE]] -- Dossie tecnico completo: fluxos de processo, regras de negocio e variacoes por projeto
- [[insights/order-start.INSIGHTS]] -- Analise de padroes, insights operacionais e recomendacoes

## Relacoes no Grafo

- [[MOC-Entrada]] -- Mapa de Conteudo da categoria entrada
