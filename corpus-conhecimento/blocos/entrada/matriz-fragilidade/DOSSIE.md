# Matriz-Fragilidade — Dossiê Técnico

**Bloco:** Entrada | **Tópico:** Matriz de Fragilidade
**Seções analisadas:** 2 | **Fonte:** Sintetizado a partir de dossiê de Cubagem (NavePark I25.4066) (2026-06-29)

## Visão Geral

A Matriz de Fragilidade é um componente do algoritmo de [[cubagem]] específico do projeto NavePark (I25.4066). Ela define um grau de fragilidade de 1 a 9 para cada SKU — onde 9 representa produtos mais pesados e robustos (devem compor a base do pallet) e 1 representa produtos frágeis e leves (devem ficar no topo). O algoritmo de cubagem WCS usa esse grau para ordenar a montagem do pallet de forma otimizada, garantindo base sólida e evitando esmagamento de produtos frágeis.

## Fluxo do Processo

1. SKUs são cadastrados com grau de fragilidade 1–9 no cadastro de produtos (WMS/WCS)
2. Ao montar pallet, algoritmo de cubagem consulta grau de fragilidade de cada volume
3. WCS solicita volumes ao picking em ordem decrescente (9 → 1): pesados primeiro, leves por último
4. Operador deposita volumes na posição indicada, formando base sólida
5. Pedido WMS pode sobrescrever o grau de fragilidade do cadastro por exceção
6. Ao fechar o pallet, o romaneio registra a sequência de montagem adotada

## Telas e Funcionalidades

| Tela | Função |
|------|--------|
| Cadastro de Produtos | Campo "Grau de Fragilidade" (1–9) por SKU no cadastro WCS |
| Simulador de Cubagem | Visualização da ordem de montagem do pallet antes de iniciar |
| Log de Cubagem | Registro da sequência de pedidos de volume por grau ao longo da montagem |

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Escala: 9 = mais pesado/robusto (base), 1 = mais leve/frágil (topo) |
| RN-02 | WCS solicita volumes ao picking em ordem decrescente de grau |
| RN-03 | Grau 0 (não configurado) é tratado como grau 5 (médio) pelo algoritmo |
| RN-04 | Sobrescrita por pedido (WMS) tem precedência sobre cadastro de produto |
| RN-05 | Volumes do mesmo grau podem ser montados em qualquer ordem entre si |
| RN-06 | Algoritmo é específico do NavePark; outros projetos usam cubagem sem grau de fragilidade |
| RN-07 | Grau de fragilidade é separado do peso físico: um produto leve pode ter grau alto se for rígido |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| NavePark (I25.4066) | Matriz 1–9 ativa; sobrescrita por pedido disponível |
| Demais projetos | Cubagem por peso/volume físico; sem grau de fragilidade |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| WMS | Integração de pedidos | Pode enviar grau de fragilidade sobrescrito por linha de pedido |
| [[cubagem]] | Algoritmo pai | Matriz de Fragilidade é um parâmetro do algoritmo de cubagem |
| [[integracao-cadastros]] | Fonte | Grau padrão vem do cadastro de produtos (SKU) |
| [[paletizacao]] | Consome | Montagem física do pallet segue a ordem definida pela matriz |

## Terminologia

| Termo | Definição |
|-------|-----------|
| Grau de Fragilidade | Escala 1–9 que define a posição vertical ideal do SKU no pallet |
| Cubagem | Processo de seleção de embalagem e cálculo volumétrico antes do picking |
| Sobrescrita por Pedido | Grau de fragilidade enviado pelo WMS por linha de pedido, sobrepondo o cadastro |
| Base Sólida | Camada inferior do pallet, composta pelos SKUs de maior grau (8–9) |

---
*Gerado em 2026-06-29 · síntese a partir de dossiê de Cubagem — projeto NavePark I25.4066*
