# picking-pallet — Dossiê Técnico

**Bloco:** separacao | **Tópico:** picking-pallet
**Seções analisadas:** 12 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Picking Pallet** é a modalidade de separação destinada a itens que, embora se enquadrem em fluxos convencionais (Fullcase ou Exceção), apresentam **quantidade elevada de um mesmo SKU** para uma única remessa/pedido — o que torna mais eficiente montar diretamente um **pallet** em vez de coletar caixa a caixa.

A característica central, comum a todas as variações, é que **o pallet vai direto para a área de expedição (rampa/stage), sem passar pelo sorter nem pelo PTL (Put to Light)** — a alocação já é feita de forma completa pelo operador durante a coleta.

O material analisado revela **dois paradigmas distintos** de Picking Pallet:

1. **Derivado de telas existentes** (projetos I24.203, I24.215, I25.111, I22.1732): uma **aba exclusiva** dentro da tela de Picking Fullcase (variante "Direto") ou de Picking Exceção (variante "Exceção"). A coleta é por tarefa/pedido.
2. **Por onda com matriz de fragilidade** (projetos I26 Mustard e Wild Fork): paradigma mais novo, em que a separação é **por onda e não por pedido**, dividida em até 3 matrizes por classe de fragilidade, com roteamento de picking otimizado por cubagem e peso.

## Fluxo do Processo

### Variante A — Picking Pallet Direto (derivado do Fullcase)
1. Na tela de **Picking Fullcase**, o operador acessa a **aba exclusiva de Picking Pallet**.
2. O WCS exibe as tarefas enviadas para esse processo via integração.
3. Coleta semelhante ao Fullcase: leitura do **endereço de picking** → coleta dos itens → **etiquetagem de todos os volumes** → confirmação da quantidade → **leitura da UC do pallet**.
4. O pallet é direcionado **diretamente para a expedição (rampa de destino), sem passar pelo sorter**.

### Variante B — Picking Pallet Exceção (derivado do Picking Exceção)
1. Na tela de **Picking Exceção**, o operador acessa a **aba exclusiva de Picking Pallet Exceção**.
2. O WCS exibe as tarefas que atingem a **quantidade mínima de pallet cadastrada**.
3. O sistema gera **uma única etiqueta** para o pallet (semelhante ao Full Case, com diferenciação para pallets), contendo: endereço de alocação, número de caixas, ordem do pallet no carregamento e área de expedição de destino.
4. Operador: leitura do **endereço** → leitura da **etiqueta de pallet** (impressa no início da tarefa) → leitura do **código de produto** (validação) → coleta dos itens conforme a quantidade orientada.
5. O pallet vai **direto para a expedição, sem passar pelo PTL** — o coletor informa que o PTL não será necessário e o pallet segue para o stage.

### Variante C — Picking Pallet por Onda + Matriz de Fragilidade (I26)
1. O WCS (Velox) recebe a integração com as **ondas de pedidos**.
2. As ondas são divididas em **3 tarefas de picking por matriz de fragilidade**, uma por operador:
   - **1ª coleta:** itens classe 3 (pesados);
   - **2ª coleta:** itens classe 2 (médios);
   - **3ª coleta:** itens classe 1 (frágeis).
3. Com a integração de cadastro de produtos do WMS, o Velox calcula a **melhor rota/sequência de picking**, considerando produtividade e **cubagem** dos itens para caber no pallet da matriz.
4. O operador percorre cada posição bipando os itens solicitados na tela do Velox.
5. Ao coletar tudo, o Velox notifica o operador a levar o pallet ao **stage da respectiva matriz**.
6. A posição de stage só é liberada quando **todos os itens nela são removidos**, liberando-a automaticamente para um novo pallet daquela matriz.

## Telas e Funcionalidades

### Aba de Picking Pallet (dentro do Picking Fullcase)
- **Comportamento:** aba exclusiva que permite ao operador selecionar o tipo de picking de forma independente. Exibe as tarefas enviadas pela integração. Fluxo de coleta idêntico ao Fullcase, encerrado com a leitura da UC do pallet.

### Aba de Picking Pallet Exceção (dentro do Picking Exceção)
- **Comportamento:** exibe tarefas que atingem a quantidade mínima de pallet cadastrada. Gera etiqueta única de pallet. Exige leitura de endereço + etiqueta de pallet + código de produto antes da coleta.

### Tela de Picking Pallet por Onda (Velox — I26)
- **Comportamento:** apresenta ao operador a demanda de picking de uma matriz específica; guia a rota otimizada por posição; bipagem item a item; ao final, direciona ao stage da matriz.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O Picking Pallet aplica-se a itens com **quantidade elevada de um mesmo SKU** destinada a uma única remessa/pedido, justificando alocação em pallet. |
| RN-02 | Em **todas** as variações, o pallet segue **direto para a expedição**, sem passar pelo sorter (variante Direto) nem pelo PTL (variante Exceção). |
| RN-03 | Na variante Exceção, o sistema gera **uma única etiqueta** por pallet, contendo endereço de alocação, nº de caixas, ordem no carregamento e área de expedição. |
| RN-04 | Na variante Exceção, a tarefa só aparece quando atinge a **quantidade mínima de pallet cadastrada**. |
| RN-05 | **Parâmetro "Paletização por Transportadora" ATIVO:** o operador **não** executa o Aloca Pallet; faz apenas a leitura da etiqueta de UC no PRIX fixo no final da rampa; o WCS considera todos os volumes como expedidos e atualiza o dashboard automaticamente; integra todas as etiquetas vinculadas à UC na integração de aloca pallet. |
| RN-06 | **Parâmetro "Paletização por Transportadora" INATIVO:** o operador é informado no coletor de que o Aloca Pallet não é necessário; faz apenas a leitura da UC do pallet no PRIX ao final da rampa; o WCS considera todos os volumes expedidos e atualiza o dashboard. |
| RN-07 | Na variante por onda (I26), o picking é **por onda, não por pedido**, dividido em até 3 matrizes por classe de fragilidade (1=frágil, 2=médio, 3=pesado). |
| RN-08 | Na variante por onda, a rota de picking é calculada considerando **peso (mais pesados primeiro)** e **cubagem** dos itens. |
| RN-09 | Na variante por onda, a **posição de stage só é liberada** quando todos os itens contidos nela são removidos. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I24.203** (Beta-ATT) | Picking Pallet **Direto**, derivado do Fullcase, com parâmetro de paletização por transportadora. |
| **I25.111** (Beta Full SP) | Picking Pallet **Direto**, idêntico ao I24.203 (mesma especificação). |
| **I24.215** (BP, múltiplas revisões) | Picking Pallet **Exceção**, derivado do Picking Exceção, com etiqueta única de pallet e bypass do PTL. |
| **I22.1732** (Flower) | Picking Pallet **Exceção**, mesma especificação do I24.215. |
| **I26 Mustard** | Picking Pallet **por onda** com matriz (até 3), coleta dos mais pesados primeiro, área PTP, picking map por corredores e matriz de fragilidade. |
| **I26 Wild Fork** | Picking Pallet **por onda** controlado pelo Velox, 3 tarefas por classe de fragilidade (1 por operador), rota otimizada por cubagem; especificação redigida em inglês. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Integração de tarefas de picking** | Recebimento | O WCS recebe as tarefas destinadas ao Picking Pallet (variantes Direto/Exceção). |
| **Integração de Aloca Pallet** | Envio | Quando a paletização por transportadora está ativa, o WCS integra todas as etiquetas vinculadas à UC. |
| **Integração de ondas de pedidos** | Recebimento | Na variante I26, o Velox recebe as ondas que originam as tarefas de picking pallet. |
| **Cadastro de produtos (WMS)** | Recebimento | Na variante I26, fornece a localização de cada item para o Velox calcular a rota de picking. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Picking Pallet Direto** | Variante derivada do Fullcase para alto volume de um SKU em uma remessa; pallet vai direto à expedição sem sorter. |
| **Picking Pallet Exceção** | Variante derivada do Picking Exceção; gera etiqueta única de pallet e ignora o PTL. |
| **UC (Unidade de Carga)** | Identificador do pallet, lido no fim do processo / na rampa (PRIX). |
| **PRIX** | Ponto fixo de leitura no final da rampa onde a UC do pallet é bipada. |
| **Aloca Pallet** | Processo de alocação de pallet; pode ser dispensado conforme o parâmetro de paletização por transportadora. |
| **Paletização por Transportadora** | Parâmetro que, quando ativo, dispensa o Aloca Pallet e exige apenas a leitura da UC no PRIX. |
| **PTL (Put to Light)** | Processo de separação assistida por luz; dispensado no Picking Pallet Exceção. |
| **PTP** | Área de stage onde os pallets são posicionados (variante por onda I26). |
| **Matriz de Fragilidade** | Classificação dos itens em 3 classes (1=frágil, 2=médio, 3=pesado) que define a ordem e a divisão das tarefas de picking por onda. |
| **Onda** | Agrupamento de pedidos processados em conjunto; base do picking na variante I26 (em vez do picking por pedido). |

---
*Gerado em 2026-06-24 · análise direta do RAW · 12 seções*
