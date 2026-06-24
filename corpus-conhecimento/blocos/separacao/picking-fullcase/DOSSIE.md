# picking-fullcase — Dossiê Técnico

**Bloco:** separacao | **Tópico:** picking-fullcase
**Seções analisadas:** 61 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Picking Full Case** trata da separação de **caixas/volumes fechados** (unidades inteiras de um SKU), em oposição ao picking fracionado (unidade a unidade). O corpus revela **dois modelos fundamentalmente distintos** de Full Case:

1. **Full Case "Invent" (com Order Start + coleta guiada):** após o Order Start Full Case, o WCS direciona o coletor à tela de coleta; o operador percorre a rua lendo endereço → etiqueta → produto. É o modelo dominante (Flower, BP, Beta, FOX, Dolce Gusto, Automatize).
2. **Full Case "Cliente" (caixas fechadas, sem Order Start):** as caixas já são separadas/etiquetadas pelo cliente (frequentemente via voice picking), **não passam** pelo Order Start nem geram **Picking Confirm**; apenas precisam estar **integradas no WCS/Velox** (via integração Wave) para o desvio correto no sorter (Peter, Master, Monterrey, Toca da Raposa, Automatize).

O denominador comum: o volume Full Case segue, após coletado/induzido, **via sorter** para a rampa de destino da transportadora/rota.

## Fluxo do Processo

### Modelo 1 — Full Case Invent (coleta guiada)
1. Concluído o **Order Start Full Case**, o WCS abre automaticamente a **tela de coleta**; o operador vai à **rua** selecionada.
2. O coletor Android exibe a lista de itens (endereço, produto, quantidade).
3. **Coleta:** leitura do **endereço** → leitura da **etiqueta** (impressa no Order Start) → leitura do **código do produto** (uma leitura por unidade). O WCS atualiza a lista a cada confirmação.
   - **Variante Beta/Beta Full SP:** leitura de endereço → **quantidade** (operador pode reduzir conforme disponível) → **DUN**. A lista pode conter itens Full Case **e** Reabastecimento juntos, diferenciados só na etiqueta.
4. **Troca de endereço:** se faltar produto, o operador lê outro endereço para mudar o item coletado.
5. **Finalizar Coleta / Corte:** em falta de produto, "Finalizar Coleta" abre tela para ler as etiquetas dos itens **não** coletados → o WCS os **corta**. (No BP, recomenda-se sinalizar a **auditoria de estoque** para validar a falta antes do corte.)
6. **Destinação após indução:** Full Case → sorter → rampa da transportadora (checkout + cross-check); Reabastecimento → área de reabastecimento → gera tarefa de reabastecimento.

### Modelo 2 — Full Case Cliente (caixas fechadas)
1. As caixas fechadas são separadas pelo **cliente/WMS** (ex.: voice picking) e etiquetadas (etiqueta na **face superior**).
2. Os volumes são **integrados no Velox** (integração Wave) — **sem** Order Start e **sem** Picking Confirm.
3. As caixas são induzidas no sorter (em alguns projetos, **após** a conferência dos fracionados) e desviadas conforme o mapa; caixas fora da onda atual vão para **rejeito**.

## Telas e Funcionalidades

### Tela de Coleta Full Case (coletor Android)
- **Campos:** endereço, produto, quantidade; identificação do **tipo** de item (Full Case × Reabastecimento) para o operador saber a destinação.
- **Comportamento:** leitura sequencial; opção **Finalizar Coleta** para corte; troca de endereço.

### Order Start Full Case (variante Automatize / Convocação Ativa)
- **Comportamento:** o operador escolhe o **posto de impressão** (impressora física) e a **rua**; o WCS agrupa os pedidos por item (coleta por item) e imprime a etiqueta **antes** da coleta; a **ordem de coleta** (crescente/decrescente) é definida pela **regra configurada na impressora** selecionada.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A leitura do produto é feita **uma vez por unidade** coletada (modelo Invent clássico). |
| RN-02 | **Finalizar Coleta:** ler as etiquetas dos itens não coletados sinaliza ao WCS que serão **cortados**. |
| RN-03 | **(BP)** Antes de cortar por falta, sinalizar a **auditoria de estoque** para validar a falta real do produto. |
| RN-04 | **(Beta)** Itens de Reabastecimento cortados **não** geram tarefa de reabastecimento; o sistema registra a ocorrência para visibilidade. |
| RN-05 | **(FDBR/Cápsulas)** Full Case é válido **exclusivamente** para o Grupo Cápsulas; a quantidade do pedido deve ser **≥ quantidade padrão da embalagem**; e o produto deve ter saldo nas posições de picking fundo. |
| RN-06 | **(FDBR)** Reabastecimento de itens Full Case só é permitido com a **caixa completamente fechada**; caixas abertas/fracionadas/incompletas não podem ser movimentadas como Full Case. |
| RN-07 | **(Modelo Cliente)** Full Case **não** passa por Order Start nem gera **Picking Confirm**; precisa estar integrado no Velox (Wave) para o desvio no sorter. |
| RN-08 | **(Modelo Cliente)** As etiquetas devem estar fixadas na **parte superior** das caixas para leitura no portal do sorter; impressão/fixação é responsabilidade do cliente. |
| RN-09 | **(Monterrey)** Caixa induzida no sorter que não pertence à onda atual segue para **rejeito**. |
| RN-10 | **(FDBR)** Caixas vazias de reabastecimento de FlowRack são identificadas com etiqueta **"RT1000"** e desviadas automaticamente antes da conferência para recirculação. |
| RN-11 | **(Beta)** A coleta de Full Case e de Reabastecimento é idêntica (endereço → quantidade → DUN); só difere na **destinação** após a indução. |
| RN-12 | **(Automatize)** A sequência de coleta na rua (crescente/decrescente) é determinada pela **impressora** selecionada no posto de impressão. |
| RN-13 | Layouts de impressão distintos para **Picking Fullcase/Exceção** e para **Picking Fullcase Perigoso** (produtos perigosos). |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) / **I24.215** (BP) | Modelo Invent clássico (endereço → etiqueta → produto por unidade); BP acrescenta validação por auditoria antes do corte e layouts Fullcase/Perigoso. |
| **I24.203 / I25.111** (Beta) | Lista **unificada** Full Case + Reabastecimento; coleta por DUN com ajuste de quantidade; destinação divergente após indução. |
| **I23.1412** (FDBR) | Full Case restrito a **Cápsulas**; regra de caixa fechada para reabastecimento; caixas vazias **RT1000**. |
| **I23.144** (Automatize/Convocação Ativa) | Order Start Full Case com posto de impressão, coleta por item agrupada e ordenação vinculada à impressora. |
| **I25.4066** (NavePark) | Full Case em dois pontos: esteira dedicada (Térreo) e **costas** do Picking Térreo/Mezanino (36 posições, 1 SKU auto-empilhado por posição). |
| **I23.3502 / I23.1602** (Peter/Master) | Modelo **Cliente**: caixas fechadas, sem Order Start, sem Picking Confirm, integradas via Wave; etiqueta na face superior. |
| **I21.1140 / I22.2232 / I22.2505** (Monterrey/Toca da Raposa/Automatize) | Modelo Cliente: separação por voice picking/fornecedor; indução no sorter após conferência dos fracionados. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Integração Wave / onda de pedidos** | Recebimento | Informa as tarefas/volumes Full Case; no modelo Cliente é o único vínculo do volume com o WCS. |
| **ERP D365 F&O** | Recebimento | (FDBR) Informa a condição de caixa fechada que habilita o reabastecimento Full Case. |
| **Picking Confirm** | Envio | Aplicável só ao modelo Invent; **não** se aplica ao Full Case do cliente. |
| **Sorter / mapa de rotas** | Comando | Desvia o volume Full Case à rampa da transportadora/rota. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Full Case** | Volume/caixa fechada correspondente a uma embalagem inteira de um SKU. |
| **Order Start Full Case** | Etapa que inicia a tarefa de separação Full Case e imprime a etiqueta (modelo Invent). |
| **DUN** | Código de barras da embalagem usado para confirmar a coleta (modelo Beta). |
| **Picking Confirm** | Integração de confirmação de separação; não emitida no Full Case do cliente. |
| **RT1000** | Etiqueta que identifica caixas vazias de reabastecimento de FlowRack para recirculação. |
| **Voice Picking** | Separação por comando de voz (responsabilidade do cliente) que origina o Full Case no modelo Cliente. |
| **Picking Fundo (comum)** | Posição de estoque de onde o Full Case é coletado (FDBR). |
| **Cross-check / Checkout** | Conferência/validação do volume Full Case no fluxo do sorter. |
| **Picking Fullcase Perigoso** | Subfluxo com layout de etiqueta específico para produtos perigosos. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 61 seções*
