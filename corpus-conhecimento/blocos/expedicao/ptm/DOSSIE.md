# ptm — Dossiê Técnico

**Bloco:** expedicao | **Tópico:** ptm (Put-To-Monitor)
**Seções analisadas:** 62 | **Fonte:** análise direta do RAW (chat)

> **Aviso de cobertura:** este RAW está fortemente contaminado. ~20 seções são repetições de "Estação de Supervisório" (hardware/sistema), e há seções de PTW, auditoria, postos de trabalho e listagem de pallets que pertencem a outros tópicos. O dossiê foi escrito sobre as ~15 seções genuínas de PTM; o restante está listado nos insights como desvios para a Fase 2.

## Visão Geral

O **PTM (Put-To-Monitor)** é o método de **montagem de pallets na saída do sorter**, guiado por **monitor/TV + scanner de mão**. Após o volume ser desviado para a rampa, o operador lê o código de barras (Full Case) ou QR Code (fracionado) do volume; o Velox consulta a base e **indica em uma TV qual posição de pallet** o volume pertence, usando um **sistema de cores** que espelha marcações físicas no chão.

O vínculo pedido/transportadora ↔ posição PTM pode ser **automático** (conforme os volumes passam pelo portal do sorter) ou **manual** (inserção pelo mapa do sorter). O processo tem três momentos: **Abertura** das posições, **Alocação** dos volumes e **Fechamento** do pallet.

## Fluxo do Processo

1. **Abertura de PTM:** antes da operação, o operador abre as posições de pallet que vai usar — lê a etiqueta de abertura, identifica-se e lê o código do pallet. Só operadores cadastrados podem abrir posições.
2. **Vínculo pedido ↔ posição:**
   - **Automático:** conforme os volumes passam no portal do sorter, o Velox identifica a transportadora/rampa e atrela o pedido a uma posição PTM.
   - **Manual:** o supervisor insere o pedido diretamente numa posição via mapa do sorter (1 pedido por posição), com prioridade máxima de saída.
3. **Alocação:** o operador na rampa lê o volume; o monitor indica (por cor) a posição do pallet correspondente; o operador deposita o volume e segue para o próximo.
4. **Fechamento:** ao completar o pedido (ou atingir limite), o pallet é fechado e a posição é liberada para um novo pedido.

### Liberação condicionada à disponibilidade (projeto Gala)
A separação no Full Case/fracionado só é liberada conforme há **posições PTM disponíveis**. Ex.: 10 pedidos para a transportadora "Gala" com 2 rampas (8 posições PTM) → 8 pedidos simultâneos; os demais aguardam em fila até um PTM fechar.

## Telas e Funcionalidades

### Tela PTM (monitor/TV)
- **Estados (cores) das posições:** fechado/sem pallet (borda cinza); aberto (cor específica da marcação de chão); alocado aguardando abertura de pallet (borda em evidência, sem dados); aguardando alocação (quadrado todo preenchido); finalizado (preenchido e **piscando** para chamar atenção).
- **Indicadores (aditivo Heart):** contador **Volumes Alocados / Volumes Esperados** (ex.: 01/10 … 10/10) no canto inferior esquerdo.

### Gerenciar Posições Palete (aditivo Heart — acesso por senha de supervisão)
- **Comportamento:** adicionar, excluir ou **bloquear** endereços de PTM via tela "Posições Palete"; posições com status "Em Aberto" ou vinculadas a pallet ativo **não** podem ser alteradas.

### Editar Template — Agrupar pedidos por PTM (aditivo Beta)
- **Parâmetro:** "Agrupar pedidos por PTM" (Sim/Não, default Não) + "Quantidade de pedidos por PTM". Quando ativo, cada PTM recebe até N pedidos; fila **FIFO** quando não há PTM livre.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A alocação só é permitida após o operador realizar **login na rampa**. |
| RN-02 | O vínculo pedido ↔ PTM pode ser automático (pelo portal do sorter) ou manual (mapa do sorter); na inserção manual, **1 pedido por posição** com prioridade máxima. |
| RN-03 | **Fechamento — Manual:** ler o código de comando (ex.: "FPP001"); a posição pisca aguardando a leitura da **etiqueta do pallet** (obrigatoriamente **6 dígitos**). |
| RN-04 | **Fechamento — Automático:** ao alocar o **último volume esperado** do pedido, fecha sem ação do operador. |
| RN-05 | **Fechamento — Forçado:** quando cubagem/peso atinge o limite definido pela operação (avaliado pelo operador). |
| RN-06 | Ao fechar o pallet, o sistema **abre automaticamente** uma nova posição. |
| RN-07 | A liberação de pedidos para separação é **condicionada à disponibilidade** de posições PTM livres. |
| RN-08 | **(Promofarma)** Não pode haver itens **Full Case e fracionado no mesmo pallet** → dois pallets por loja, segregados por `tipo_volume` (fracionadoproc/fullcase × fracionado). |
| RN-09 | **(Promofarma)** Crachá do operador na rampa deve ter **8 dígitos**; alocação confirmada pela leitura do código da posição física do pallet. |
| RN-10 | **(Heart)** A operação pode abrir até **16 pallets** na mesma saída, parametrizados por rota/transportadora/filial. |
| RN-11 | Parâmetro no Velox habilita/desabilita a **obrigatoriedade** de ler o código do pallet para confirmar a alocação. |
| RN-12 | Volume lido que não pertence à rampa/posição → o PTM avisa e o operador encaminha à **estação de rejeito**. |
| RN-13 | **(Gerenciamento de posições)** Posições "Em Aberto" ou com pallet ativo não podem ser editadas/excluídas. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1739 / I22.3322** (Heart) | Até 16 pallets/saída; gerenciamento de posições por senha de supervisão; indicadores Alocados/Esperados; pendência de 2ª via de etiqueta. |
| **I24.101** (Gala) | Vínculo automático pelo portal; liberação condicionada a PTM disponível; estados de cor detalhados; fechamento manual/automático; inserção manual pelo mapa do sorter. |
| **I24.205** (Promofarma) | Divisão por **loja + tipo_volume**; proibição de misturar full case e fracionado; crachá de 8 dígitos. |
| **I23.3502** (Master) | Três cenários de fechamento (manual/automático/forçado). |
| **I24.203** (Beta) | Agrupamento de múltiplos pedidos por PTM com fila FIFO. |
| **I22.2505** (Automatize) | Abertura de todas as posições pallet no início via PTM; volume fora da rua → rejeito. |
| **I26 Wild Fork** (PTP) | 3 stages por matriz de fragilidade com **safety lock** (mais pesado → mais leve; só libera a próxima matriz ao concluir a anterior). |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Sorter / portal de leitura** | Evento | Cada passagem de volume gera o vínculo automático pedido ↔ posição PTM. |
| **Mapa do sorter** | Configuração | Permite inserir pedido manualmente numa posição PTM e definir parâmetros (rota/transportadora/filial). |
| **WMS** | Recebimento | Informa pedido/transportadora que orienta a divisão das posições. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **PTM (Put-To-Monitor)** | Montagem de pallets na saída do sorter guiada por monitor/TV + scanner de mão. |
| **Posição PTM** | Endereço de pallet, identificado por cor no monitor e marcação no chão. |
| **Abertura de PTM** | Rotina inicial que disponibiliza as posições de pallet para uso. |
| **Fechamento (Manual/Automático/Forçado)** | Encerramento do pallet por comando, por último volume ou por limite de cubagem/peso. |
| **FPP001** | Exemplo de código de comando de fechamento de posição. |
| **tipo_volume** | Atributo (fracionadoproc/fullcase/fracionado) que segrega pallets no PTM (Promofarma). |
| **PTP** | Variante do conceito (Wild Fork): stages por matriz de fragilidade com trava de ordem. |
| **Etiqueta de pallet** | Código de 6 dígitos lido para associar o pallet físico à posição no fechamento. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 62 seções (≈15 efetivas de PTM)*
