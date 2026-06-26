# order-start — Dossiê Técnico

**Bloco:** entrada | **Tópico:** order-start
**Seções analisadas:** 285 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Order Start** é o **disparo da separação**: após a integração da onda/pedidos, o WCS **ordena os pedidos** em fila, **gera os volumes** (a partir da cubagem), **imprime as etiquetas** e o operador **induz as caixas** na linha rumo às estações de separação. É o ponto de entrada que distribui o trabalho para os diferentes fluxos de picking.

Há um Order Start **por tipo de fluxo**: **Padrão** (linha comum/PBL), **Picking Cart**, **Full Case**, **Coletor (inconformes)** e **Exceção**. Cada um tem sua tela e regras, mas todos compartilham a lógica de: receber pedidos → priorizar → cubar/gerar volumes → imprimir etiquetas → induzir.

## Fluxo do Processo (Order Start Padrão)

1. O WCS recebe via integração todos os pedidos previstos para a operação.
2. **Ordena** os pedidos conforme recebidos (fila); sem regra automática de prioridade na maioria — **priorização manual** quando necessário; empate por **FIFO**.
3. **Cuba** (ou assume a cubagem do SAP) e **gera os volumes** (controlados/não controlados fracionados, full case).
4. Informa na tela os **tipos de caixa** necessários; o operador **fixa a etiqueta** e **induz** a caixa na esteira.
5. A caixa segue para a **primeira estação** de separação (PBL/cart/etc.).

## Tipos de Order Start

| Tipo | Como funciona |
|------|---------------|
| **Padrão (linha comum)** | 1 no início da linha; gera volumes e imprime etiquetas; não exibe volumes de exceção. |
| **Picking Cart** | Mapeia caixa plástica ↔ posição do carrinho por zona; atrela tarefas por priorização; mapeamento parcial permitido; mesma caixa não pode estar em 2 posições. |
| **Full Case** | Quebra tarefas elegíveis (conforme + dimensão > caixa do cart + qtd ≥ caixa fechada); escolhe posto de impressão + rua + nº de etiquetas; imprime antes da coleta; coleta do **final da rua** (decrescente). |
| **Coletor (inconformes)** | Segrega por zonas; operador informa zona + carrinho; sistema atrela a próxima tarefa. |
| **Exceção** | Tela dedicada a endereços de exceção; **não** mistura com a linha comum; só Picking Cart Exceção. |

## Telas e Funcionalidades

### Tela de Order Start Padrão
- **Comportamento:** lista a fila de pedidos/volumes; gera volumes pela cubagem; informa tipos de caixa; **não** exibe volumes de postos de exceção.

### Troca de Endereço para Exceção (pré-Order Start)
- **Comportamento:** reclassifica itens para o fluxo de exceção **antes** do início; substitui o endereço padrão por um **prefixado**; se o pedido tem ao menos um item comum, **não** converte (mantém no padrão). Deve ser concluído **antes** do início da onda — sem ajuste depois.

### Order Start Full Case (impressão)
- **Comportamento:** escolha de posto de impressão + rua + quantidade de etiquetas; impressão **antecipada** à coleta; ordenação de coleta vinculada à impressora.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O Order Start inicia após a integração da onda; o WCS gera a **fila** de pedidos/volumes a separar. |
| RN-02 | **Priorização** conforme a integração; ajuste **manual** quando necessário; empate por **FIFO**. |
| RN-03 | O WCS gera os volumes a partir da **cubagem** (própria ou do SAP) e imprime as **etiquetas**. |
| RN-04 | **Order Start Padrão não exibe** pedidos/volumes de postos de exceção (e vice-versa). |
| RN-05 | **Full Case elegível:** item Conforme **+** dimensão maior que a caixa do picking cart **+** quantidade ≥ caixa fechada. |
| RN-06 | **Full Case:** impressão **antecipada** da etiqueta; coleta iniciada do **final da rua** (decrescente). |
| RN-07 | **Picking Cart:** o mapeamento vincula caixa ↔ posição; mapeamento **parcial** permitido; a mesma caixa **não** pode ocupar 2 posições. |
| RN-08 | **Exceção:** a reclassificação de endereço (prefixo) ocorre **antes** do Order Start; pedido com item comum **não** vira exceção; a confirmação ao WMS usa o **endereço original** (sem prefixo). |
| RN-09 | Volumes de exceção **nunca** transitam pela linha automatizada comum nem se misturam a produtos comuns. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) | Order Start por fluxo (Cart, Full Case, Coletor); mapeamento caixa↔posição; Full Case por posto de impressão + rua. |
| **I23.125** (Cristal) | 1 Order Start padrão; sem prioridade automática (manual); gera controlados/não controlados/full case; **Order Start Exceção** dedicado; troca de endereço por prefixo. |
| **I23.144** (Automatize/Convocação Ativa) | Order Start Full Case com posto de impressão e coleta por item agrupada. |
| **I25.3515** (Esperança) | Cadenciamento/Matriz por rampa no Order Start (distribuição balanceada entre rampas do sorter). |
| **I24.203** (Beta) | Unificação do Order Start Full Case + Reabastecimento numa única coleta. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Integração de pedidos (onda)** | Recebimento | Fonte dos pedidos que o Order Start enfileira (ver [[integracao-pedidos]]). |
| **Cubagem** | Origem | Gera os volumes e define as caixas (ver [[cubagem]]). |
| **Impressoras** | Saída | Imprimem as etiquetas dos volumes (ver [[etiquetas]]). |
| **Confirmação de Separação** | Envio | Usa o endereço **original** (sem prefixo de exceção) ao confirmar ao WMS. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Order Start** | Etapa que inicia a separação, gerando volumes e etiquetas a partir da onda. |
| **Onda** | Conjunto de pedidos liberado para separação. |
| **Order Start Exceção** | Fluxo dedicado a itens de exceção (endereços prefixados), fora da automação. |
| **Troca de endereço (prefixo)** | Reclassificação de item para exceção antes do início. |
| **Mapeamento (Picking Cart)** | Vínculo caixa plástica ↔ posição do carrinho por zona. |
| **Posto de impressão** | Impressora física selecionada no Order Start Full Case. |
| **Quebra de tarefas** | Separação dos itens do pedido entre os fluxos (fracionado/full case/exceção). |
| **Cadenciamento por rampa** | Distribuição balanceada de volumes entre rampas no Order Start (Esperança). |

---
*Gerado em 2026-06-24 · análise direta do RAW · 285 seções (núcleo do Order Start; detalhes de linha de separação remetem a [[picking-pbl]])*
