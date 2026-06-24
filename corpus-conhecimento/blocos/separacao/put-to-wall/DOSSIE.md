# put-to-wall — Dossiê Técnico

**Bloco:** separacao | **Tópico:** put-to-wall (PTW)
**Seções analisadas:** 72 | **Fonte:** análise direta do RAW (chat)

> **Aviso de cobertura:** o conteúdo genuíno de Put To Wall é pequeno (~6 seções). O RAW está dominado por um cluster grande e coerente de **"Cancelamento de Pedidos/Missão/OT"** (~10 seções) que pertence a outro tópico, além de Posto Virtual, retorno de montagem e dashboards. Esses estão sinalizados nos insights como desvios para a Fase 2.

## Visão Geral

O **Put To Wall (PTW)** é uma **parede de nichos** usada para **consolidar pedidos** — especialmente pedidos com **poucas unidades** ou **múltiplas caixas**. Cada pedido é alocado a um nicho; o operador, guiado por **LEDs** (frontais e traseiros), deposita os itens bipados no nicho correto até completar o pedido, então fecha o nicho, vincula a caixa e encaminha à conferência ou ao packing.

O WCS **cuba** os pedidos para escolher entre nichos **grandes** e **pequenos**, e controla a vinculação pedido↔nicho. Variantes recentes chamam o conceito de **Put-To-Pallet (PTP)** (Wild Fork) e usam o PTW como ponto de consolidação antes da indução na automação (NavePark).

## Fluxo do Processo (modelo Flower)

1. O sistema **vincula** automaticamente os pedidos contidos na caixa a uma posição do PTW (se ainda não alocados).
2. O operador **bipa o EAN** do produto → o **LED azul** acende indicando o nicho correto e a quantidade a alocar.
3. O operador deposita os itens no nicho; repete para todos os itens.
4. Quando o pedido está completo, o **LED traseiro acende verde**.
5. O operador: **pressiona o LED** para confirmar o fechamento → **bipa o endereço do nicho** (coletor Android) → **bipa a caixa** a vincular → **retira os itens** para a caixa → leva à **conferência** ou ao **packing**.
6. Por integração, o WCS decide se o pedido vai à conferência ou direto ao packing; o nicho é finalizado.

### Variante NavePark — consolidação pré-indução
- O PTW consolida os itens coletados no **picking cart** ("museu") antes da indução. O operador bipa o item no PDV → o WCS acende o nicho do pedido → ao completar, sinaliza prontidão → o operador induz a caixa na esteira Fullcase do Térreo, seguindo o fluxo padrão.

## Telas e Funcionalidades

### Parede de PTW (LEDs)
- **Comportamento:** LED **azul** indica o nicho de alocação durante a bipagem; LED **traseiro verde** indica pedido completo. O fechamento é confirmado pressionando o LED + leitura do endereço do nicho e da caixa.

### Estrutura física (varia por projeto)
- **Flower:** 50 nichos/parede (15 grandes 600×600×1000, 35 pequenos 340×340×1000); 2 paredes conformes + 1 parede inconformes.
- **NavePark:** 30 nichos (3 níveis × 10 colunas), 400×550×800 mm.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O WCS **cuba** os pedidos do PTW para alocá-los em nichos grandes ou pequenos. |
| RN-02 | **Um pedido por nicho**; o PTW consolida pedidos multi-caixa ou divide caixas que atendem a mais de um pedido. |
| RN-03 | A alocação é guiada por **LED azul** (nicho + quantidade) durante a bipagem do EAN. |
| RN-04 | Pedido completo → **LED traseiro verde**; o fechamento exige confirmar o LED + ler endereço do nicho e a caixa vinculada. |
| RN-05 | Após o fechamento, a **integração** define se o pedido segue para conferência ou direto para o packing. |
| RN-06 | Há paredes dedicadas a pedidos **conformes** e **inconformes** (Flower). |
| RN-07 | **(NavePark)** O PTW é ponto de consolidação **antes** da indução na automação; o pedido é reinduzido no Order Start padrão. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) | PTW com 50 nichos/parede (grandes/pequenos), LEDs frontais/traseiros, cubagem, paredes separadas para conformes/inconformes; fechamento com coletor Android. |
| **I25.4066** (NavePark) | PTW como consolidação do picking cart antes da indução; 30 nichos; libera ao Order Start (esteira Fullcase Térreo). |
| **I26 Wild Fork** | Conceito renomeado **Put-To-Pallet (PTP)**, módulo Velox que substitui listas em papel por validação visual. |
| **I22.2213** (Reverse) | Aplicação gerencia PTW e PTL; banco PostgreSQL dedicado; interface Web (Chrome). |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **WMS** | Recebimento | Fornece os pedidos a consolidar no PTW. |
| **Integração de destino** | Recebimento | Define, ao fechar o nicho, se o pedido vai à conferência ou ao packing. |
| **Coletor Android** | Hardware | Lê endereço do nicho e a caixa vinculada no fechamento. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **PTW (Put To Wall)** | Parede de nichos para consolidação de pedidos guiada por LEDs. |
| **Nicho** | Posição da parede onde um pedido é consolidado; pode ser grande ou pequeno. |
| **PTP (Put-To-Pallet)** | Variante do conceito (Wild Fork) voltada à montagem de pallet. |
| **LED frontal/traseiro** | Sinalização luminosa: azul para alocar (frente), verde para pedido completo (trás). |
| **Pedido conforme/inconforme** | Classificação que define a parede de PTW utilizada (Flower). |
| **Consolidação** | Agrupamento de itens/caixas de um mesmo pedido em um nicho. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 72 seções (≈6 efetivas de PTW)*
