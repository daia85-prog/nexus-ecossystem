---
aliases:
  - "Pesagem"
  - "Check Weight"
  - "Balança Dinâmica"
  - "Aferição de Peso"
tags:
  - wcs/bloco
  - wcs/conferencia
  - wcs/pesagem
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Conferencia]]

# Pesagem

> Nó de roteamento — aferição de peso real × esperado como filtro de qualidade antes da expedição. Transversal a conferência, sorter e cubagem.

## Contexto Latente e Inferencia Inicial

A pesagem (Check Weight) é o primeiro filtro automático de qualidade do WCS: volumes que saem da separação passam pela balança dinâmica antes do sorter; se o peso real divergir do esperado (soma dos pesos cadastrais + tara) além da tolerância configurável, o volume é desviado para conferência manual. O cadastro de produtos é a fonte do peso esperado — cadastro incompleto degrada diretamente a acurácia da balança.

## Documentacao Tecnica

- [[DOSSIE]] -- Dossiê técnico completo (regras, variações, tolerâncias por projeto)
- [[insights/pesagem.INSIGHTS]] -- Análise de padrões e lacunas

## Relacoes no Grafo

- [[MOC-Conferencia]] -- Mapa de Conteúdo da categoria conferência
- [[conferencia]] -- Destino dos volumes reprovados pela balança
- [[sorter-inducao]] -- Balança dinâmica posicionada antes do portal de indução
- [[sorter-rejeito]] -- Volumes sem check-out de peso vão ao rejeito
- [[integracao-cadastros]] -- Fonte do peso esperado (cadastro de produtos/embalagens)
- [[cubagem]] -- Matriz de fragilidade relaciona-se com peso/dimensão
