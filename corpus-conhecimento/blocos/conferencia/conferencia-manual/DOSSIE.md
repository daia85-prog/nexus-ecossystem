# conferencia-manual — Dossiê Técnico

**Bloco:** conferencia | **Tópico:** conferencia-manual
**Seções analisadas:** 5 | **Recortes processados:** 1


## Visão Geral

A **conferência manual** é a etapa do WCS responsável por validar a integridade dos volumes (caixas) antes do encaminhamento à etapa de **Packing**. A estação de conferência manual recebe **exclusivamente** volumes que foram:

- **Desviados pela balança dinâmica** (por divergência de peso); ou
- **Selecionados por amostragem** através do **Sorteio de Qualidade** (auditoria).

A validação considera a **quantidade de itens** e o **peso real** do volume em conformidade com o pedido. Para isso, o WCS é previamente alimentado com:

- **Peso unitário do SKU** (em gramas);
- **Peso das caixas (tara)** por modelo de caixa;
- **Tolerância de peso** configurável (em gramas ou percentual).

O processo adota o conceito de **conferência cega (Blind Check)**: o sistema não exibe a lista de itens nem as quantidades esperadas, exigindo a bipagem de todos os produtos para garantir a acuracidade da operação.

Adicionalmente, a conferência contempla a **impressão automática de laudos** (obrigatória para determinados volumes conforme indicação do ERP D365 F&O) e um fluxo específico para **Clientes Especiais (KIT SKU)**, com etiqueta de layout Spark e validação de ensacamento.


## Fluxo do Processo

1. **Abertura do processo** — Operador realiza a leitura do **LPN** (caixa). O sistema exibe o **motivo do desvio**:
   - Divergência de Peso;
   - Auditoria de Qualidade;
   - Shortpicking.
2. **Conferência cega item a item** — O sistema não exibe quantidades esperadas; o operador bipa todos os produtos do volume.
3. **Tratamento de divergências:**
   - **Sobra:** o operador retira o excedente da caixa.
   - **Falta:** o operador pode **Completar** a caixa (caso o item esteja disponível no pulmão de tratativa), **Cortar** (com autenticação de supervisor) ou **Coletar** em novo volume futuro.
4. **Corte aprovado** — Após autenticação do supervisor, o WCS registra os itens cortados e envia a informação ao **WMS**.
5. **Impressão automática de laudos** — Ao término da checagem do item/volume, o sistema imprime automaticamente os laudos necessários (sem ação manual do operador) na impressora vinculada à estação. A impressão ocorre **por volume (caixa)**, contendo os laudos conforme os lotes de cada caixa.
6. **Encaminhamento** — Após a validação de todos os itens e o tratamento de sobras/faltas, o volume segue para a etapa de **Packing**.

### Fluxo específico — Clientes Especiais (KIT SKU)

1. Abertura por leitura do **LPN**; o sistema sinaliza visualmente o **Cliente Especial** e exibe instruções de **embalagem_especial**.
2. Conferência cega item a item.
3. Ao atingir a **quantidade total exata prevista para o SKU**, o sistema imprime automaticamente a **etiqueta do kit** (layout Spark).
4. O operador deve **bipar obrigatoriamente** a etiqueta impressa colada no saquinho para confirmar o ensacamento.
5. Tratamento de faltas via **Cortar** (com confirmação parcial via **INT-08**) ou **Completar**.


## Telas e Funcionalidades

### Tela de Conferência (Conferência Manual Padrão)

**Campos exibidos:**
- LPN (caixa)
- Motivo do desvio

**Comportamento:**
O operador realiza a leitura do LPN e o sistema exibe o motivo do desvio (Divergência de Peso, Auditoria de Qualidade ou Shortpicking). A conferência é cega, item a item. A tela trata **sobras** e **faltas**, oferecendo as opções **Cortar** (com autenticação de supervisor) ou **Coletar** em novo volume.

### Tela de Conferência Clientes Especiais (KIT SKU)

**Campos exibidos:**
- LPN
- embalagem_especial
- Alerta de Cliente Especial
- Saldo faltante

**Comportamento:**
Sinaliza visualmente o Cliente Especial e exibe instruções de embalagem. A conferência é cega, item a item. Imprime a etiqueta do kit ao atingir a quantidade exata prevista e valida o ensacamento por bipagem da etiqueta. Trata faltas com **Cortar** (confirmação parcial via INT-08) ou **Completar**.


## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A impressão automática de laudos é **obrigatória** para determinados volumes, conforme exigência de acompanhamento de laudo indicada pelo ERP **D365 F&O**. |
| RN-02 | A estação de conferência manual recebe **apenas** volumes desviados pela balança dinâmica ou selecionados por Sorteio de Qualidade. |
| RN-03 | A conferência exige bipagem de **todos** os produtos (conferência cega), sem exibição de quantidades esperadas. |
| RN-04 | Em caso de **sobra**, o operador deve retirar o excedente da caixa. |
| RN-05 | Em caso de **falta**, o operador pode completar a caixa (se item disponível no pulmão de tratativa) ou encerrar a conferência. |
| RN-06 | O **corte** de itens faltantes exige autenticação de supervisor por senha ou crachá; sem aprovação, o corte não é efetivado. |
| RN-07 | Após corte aprovado, o WCS registra os itens cortados e envia a informação ao **WMS**. |
| RN-08 | A opção **Coletar** registra a necessidade de coletar itens faltantes em um novo volume futuro. |
| RN-09 | Pedido especial é identificado pelo campo **'especial' = TRUE** na integração de pedidos. |
| RN-10 | A **etiqueta do kit** só é impressa quando o operador atinge a quantidade total exata prevista para o SKU. |
| RN-11 | Para clientes especiais, o corte envia **confirmação parcial via INT-08**. |
| RN-12 | Para clientes especiais, o operador deve **bipar obrigatoriamente** a etiqueta impressa colada no saquinho para confirmar o ensacamento. |
| RN-13 | Após validação de todos os itens e tratamento de sobras/faltas, o volume segue para a etapa de **Packing**. |


## Variações por Projeto

### I23.1412
Conferência com **impressão automática de laudos e etiquetas por volume**, baseada no acompanhamento de laudo indicado pelo ERP **D365 F&O**.

### I25.4066
Conferência manual com **auditoria por desvio de balança dinâmica** e **Sorteio de Qualidade**; **conferência cega (Blind Check)**; tratativa de corte com **autenticação de supervisor**; e fluxo específico para **Clientes Especiais (KIT SKU)** com etiqueta de **layout Spark** e validação de ensacamento.


## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **ERP D365 F&O** (Gerenciador de Estoques) | Recebimento de dados | Envia integração que identifica se os itens do volume exigem acompanhamento de laudo na conferência. |
| **WMS** | Envio de dados | Recebe a informação de que itens faltantes foram cortados do pedido, após aprovação do corte. |
| **Integração de pedidos** | Recebimento de dados | Fornece o campo `especial` (TRUE/FALSE) e dados de embalagem especial para identificação de clientes especiais. |
| **INT-08** | Envio de confirmação | Envia confirmação parcial ao registrar corte de itens faltantes na conferência de clientes especiais. |


## Terminologia

| Termo | Definição |
|-------|-----------|
| **Laudo** | Documento de acompanhamento exigido para determinados volumes, impresso automaticamente conforme os lotes de cada caixa. |
| **Conferência Cega (Blind Check)** | Processo em que o sistema não exibe a lista de itens nem quantidades esperadas, exigindo bipagem de todos os produtos para garantir acuracidade. |
| **LPN** | Identificador da caixa/volume lido para abertura do processo de conferência. |
| **Tara** | Peso real cadastrado de cada modelo de caixa de separação utilizado. |
| **Tolerância de Peso** | Margem configurável (em gramas ou percentual) para absorver pequenas variações sem gerar desvios desnecessários. |
| **Sorteio de Qualidade** | Seleção por amostragem de volumes para conferência manual de auditoria. |
| **Cortar** | Ação de remover itens faltantes do pedido, exigindo autenticação de supervisor e registro no WMS. |
| **Coletar (Novo Volume)** | Registro de pendência para coletar itens faltantes em um novo volume futuro. |
| **Pulmão de tratativa** | Local onde itens disponíveis podem ser obtidos para completar caixas com falta. |
| **Cliente Especial (KIT SKU)** | Pedido com campo `especial`=TRUE que exige instruções de embalagem e etiqueta específica do kit (layout Spark). |
| **Shortpicking** | Motivo de desvio indicando separação incompleta de itens. |

---
*Gerado em 2026-06-24 · 1 recortes · 5 seções*