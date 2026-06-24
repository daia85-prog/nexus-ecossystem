# picking-cart — Dossiê Técnico

**Bloco:** separacao | **Tópico:** picking-cart
**Seções analisadas:** 149 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Picking Cart** é a separação por **prateleira/carrinho móvel** equipado com **posições (caixas) + LEDs + PDV + leitor**. É usado para coletar itens (em geral de menor giro, "picking fundo", ou itens que atendem múltiplos volumes) percorrendo os endereços apontados no PDV, alocando cada item na caixa correta do carrinho. Ao final, as caixas são encaminhadas à **análise de corte** (com pendências) ou à **área de recebimento** (completas) para indução na esteira.

A separação é organizada por **zonas** (compostas por ruas) e prioriza o **preenchimento da caixa** — pedidos pequenos podem ser agrupados (separação **multi**, segregada depois no PTW). O **Picking Coletor** é a variante de contingência / itens inconformes que não passam na esteira.

## Fluxo do Processo

1. **Order Start Picking Cart:** o operador loga, vê os volumes a iniciar e ajusta prioridade se necessário.
2. **Mapeamento:** lê a **caixa plástica** + a **posição do carrinho** para vincular; finaliza o mapeamento.
3. **Coleta (PDV + LEDs):** o PDV lista endereços/SKU/qtd (ordenados, ex.: endereço decrescente). O operador **lê o endereço** → **lê o EAN/DUN** → os **LEDs azuis** acendem nas caixas/posições que pedem o SKU com a quantidade → **pressiona o LED** para confirmar.
   - **Múltiplos volumes na mesma posição:** escanear a caixa (posição do carrinho) antes de alocar; confirmar o volume relendo a posição da caixa.
   - **Coleta picada:** item/lote em várias posições → o WCS distribui a coleta entre posições.
4. **Pular endereço:** endereço não atendível → pula (envia **uma** integração de ressuprimento, **sem** bloquear).
5. **Corte:** informa a quantidade real → a caixa vai à **análise de corte**; a posição/item é **bloqueada** para as demais levas.
6. **Finalização:** "Finalizar Coleta" transfere as caixas — **Análise de Corte** (pendências) ou **Recebimento** (completas) — via leitura da etiqueta da caixa + posição de destino; ao esgotar a zona, o WCS realoca o operador.

## Telas e Funcionalidades

### Tela de Mapeamento do Picking Cart
- **Comportamento:** vincula caixa plástica ↔ posição do carrinho; botão "Finalizar Mapeamento".

### Tela de Coleta (PDV)
- **Exibe:** posição (endereço), número/nome do produto, lote, unidade de medida, quantidade; linha fica **verde** ao concluir o endereço.

### Tela de Finalização de Tarefa
- **Comportamento:** duas colunas (qual caixa vai para Análise de Corte × Recebimento); valida destino na leitura.

### Confirmação de Picking Cart (tela separada — Cristal)
- **Campos obrigatórios:** Etiqueta + Lote + EAN (volume a volume). **Travas:** validação do tipo de código, validação cruzada etiqueta×lote×EAN, bloqueio/alerta em divergência; registra o operador.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A coleta exige leitura do **endereço** → **EAN/DUN** → confirmação por **LED/posição da caixa**. |
| RN-02 | **Frágeis × Não Frágeis** não podem ser misturados na mesma caixa; **conformes × inconformes** são separados em tarefas distintas. |
| RN-03 | O sistema prioriza o **preenchimento da caixa**; pedidos pequenos podem ser agrupados (separação **multi**) e segregados no **PTW**. |
| RN-04 | **Pular endereço:** permitido sem bloquear o processo; dispara **uma** integração de ressuprimento para aquele endereço. |
| RN-05 | **Corte:** a caixa com pendência vai obrigatoriamente à **análise de corte**; a posição/item é bloqueada para as próximas levas. |
| RN-06 | **Coleta picada:** quando não há saldo concentrado, o WCS instrui coletar o item/lote em **múltiplas posições**. |
| RN-07 | **(Flower)** O WCS **não** é responsável pelo balanceamento nem pelo controle de estoque das posições de picking. |
| RN-08 | Ao concluir a zona, o WCS **realoca** o operador para outra zona (cálculo de tarefas por carrinho). |
| RN-09 | **Múltiplos volumes na mesma posição:** escanear o número da caixa (posição no carrinho) antes de alocar o item. |
| RN-10 | **(Peter/Kaizen)** Quando o Picking Cart é responsabilidade do cliente, o WCS apenas **cadastra as caixas**; o campo `endereco` da Wave vem como **"N/A"**. |
| RN-11 | Do ponto de vista do operador, o fim do Picking Cart é sempre **o destino da caixa no início da esteira**; o WCS trata o roteamento subsequente. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) | 12 carts × 4 posições (48 caixas); zonas/ruas; frágeis × não frágeis; análise de corte × recebimento; Picking Coletor de contingência. |
| **I23.1412** (FDBR) | Cart com 9 posições; mapeamento caixa↔posição; coleta por endereço decrescente; coleta picada; Marketing unificado ao picking fundo. |
| **I23.125** (Cristal) | Tela separada de **Confirmação de Picking Cart** (etiqueta+lote+EAN) com travas de leitura. |
| **I24.203** (Beta) | Picking fracionado por **PBL** (LEDs frente/costas); "Pede Caixa"; Picking Cart de **reabastecimento** (bins). |
| **I23.3502** (Peter) | Picking Cart de **responsabilidade do cliente** (Kaizen); WCS só cadastra caixas; `endereco`="N/A"; conferência do volume pelo WCS. |
| **I22.2213** (Reverse) | **Picking Map** define posições/itens por carrinho (PTL) e flowhack/anomalias. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Integração de Pedidos (Wave)** | Recebimento | Define as tarefas do Picking Cart; `endereco`="N/A" quando o cart é do cliente (ver [[integracao-pedidos]]). |
| **Integração de ressuprimento** | Envio | Disparada ao pular um endereço sem saldo. |
| **Confirmação de Picking (Picking Confirm)** | Envio | Confirmada após o ponto de decisão/conferência, não na finalização do cart (ver [[integracao-wcs-wms]]). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Picking Cart** | Prateleira/carrinho móvel com posições, LEDs, PDV e leitor para coleta. |
| **Picking Coletor** | Variante de contingência / itens inconformes que não passam na esteira. |
| **Zona / Rua** | Agrupamento de posições de coleta; uma rua não pertence a duas zonas. |
| **Análise de Corte** | Área que recebe caixas com pendências/short para decidir o corte. |
| **Área de Recebimento** | Área que recebe caixas completas, prontas para indução. |
| **Coleta picada** | Coleta do mesmo item/lote distribuída entre múltiplas posições. |
| **Separação multi** | Agrupamento de pedidos pequenos na mesma caixa, segregados no PTW. |
| **Mapeamento** | Vínculo caixa plástica ↔ posição do carrinho. |
| **Pular endereço** | Avançar a coleta deixando um endereço pendente (dispara ressuprimento). |

---
*Gerado em 2026-06-24 · análise direta do RAW · 149 seções*
