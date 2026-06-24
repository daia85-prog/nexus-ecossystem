# packing — Dossiê Técnico

**Bloco:** conferencia | **Tópico:** packing
**Seções analisadas:** 64 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Packing** é a etapa de **embalagem final** do volume: o operador transfere os itens da **caixa plástica** (de separação) para a **caixa de expedição** (papelão), fecha/lacra a caixa, fixa a **etiqueta final** impressa pelo WCS e reinduz o volume na esteira rumo ao **sorter**. É o ponto em que o volume ganha a identidade definitiva de expedição.

O packing pode ocorrer na **própria estação de conferência** (mesmo operador) ou em **estações de packing dedicadas** ao final da linha. O gatilho é sempre uma **validação prévia**: aferição de peso positiva na balança **ou** conferência manual aprovada — o WCS **só imprime a etiqueta final de volumes aprovados**.

A profundidade da intervenção sistêmica varia muito: de "packing 100% controlado pelo WCS com impressão de etiqueta" até "área de packing sem intervenção sistêmica do Velox" (apenas fechamento físico).

## Fluxo do Processo (modelo canônico — BP/Flower)

1. Após **peso positivo** na balança (ou conferência manual aprovada), o volume é direcionado **obrigatoriamente** ao packing.
2. O operador acessa a **tela de packing** (WCS desktop) e seleciona o **posto** em que está.
3. Lê a **caixa plástica** que contém os itens; o WCS reconhece a caixa e **imprime a etiqueta final**.
4. O operador transfere os itens para a **caixa de expedição**, fecha/lacra e **fixa a etiqueta final**.
5. O volume é reinduzido na esteira → segue para o **sorter** (desvio) e, quando aplicável, para o **PTL** (alocação).
6. A **caixa plástica** vazia retorna ao ciclo de separação (em alguns projetos, transportada por **AMR**).

## Telas e Funcionalidades

### Tela de Packing (WCS desktop)
- **Comportamento:** seleção do posto → leitura da caixa plástica ("etiqueta burra") → impressão da etiqueta final. Imprime **etiqueta complementar** se os itens não couberem no layout padrão (Toys).
- **Sinalização por cor (aditivo Toys):** a tela muda a cor de fundo conforme o **PTL/rampa de destino** do volume, para reduzir erro de mistura de pedidos no PTM.

### Etiqueta Final do Volume
- **Conteúdo (NavePark):** endereço, número do pedido, transportadora, número do volume e peso. **Comportamento:** lida no sorter (desvio) e no PTL (alocação); layout fornecido pelo cliente (ex.: Spark).
- **Numeração de volume (aditivo Toys):** campo legível "Volume: X de Y", recalculado dinamicamente pela funcionalidade **"Pede Caixa"** quando uma caixa enche e o pedido ganha um volume extra.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O WCS **só permite imprimir a etiqueta final** de volumes aprovados na validação de peso ou conferidos manualmente. |
| RN-02 | Após peso positivo na balança, todos os volumes de picking fracionado/picking cart vão **obrigatoriamente** ao packing. |
| RN-03 | A **etiqueta final** é lida tanto no sorter (desvio na rampa) quanto no PTL (alocação no destino). |
| RN-04 | A **caixa plástica** é reutilizável: após o packing, retorna ao ciclo de separação. |
| RN-05 | **(Toys – "Pede Caixa")** Ao dividir uma caixa cheia, o WCS recalcula o total de volumes do pedido e **reemite** a numeração de todos os volumes ainda não impressos (ex.: 10/20 → 10/21, novo volume 21/21). |
| RN-06 | **(Toys – cor)** A cor da tela de Full Case/Packing reflete o PTL de destino; **só funciona** se a impressão for "pega por pega" (sem misturar destinos no mesmo lote). |
| RN-07 | **(NavePark)** Volume aprovado na auditoria/packing é reinduzido e segue ao sorter **sem ser desviado novamente** para conferência. |
| RN-08 | **(Master)** Em alguns projetos a área de packing **não tem intervenção sistêmica** do Velox — apenas fechamento físico das caixas. |
| RN-09 | **(Octopus SC)** Pode não haver estação de packing/conferência, dependendo do CD. |
| RN-10 | Etiquetas que passam pelo sorter seguem especificação mínima (ex.: 1D Code 128 0,38/21mm, 2D DataMatrix 1mm, ANSI A/B). |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I24.215** (BP) / **I22.1732** (Flower) | Modelo canônico: tela de packing, leitura da caixa plástica, impressão da etiqueta final só de aprovados, reuso da caixa plástica. |
| **I23.1412** (FDBR) | Packing feito na **estação de conferência** pelo mesmo operador (troca plástica→papelão + etiqueta + esteira). |
| **I24.101** (Toys) | Packing sem conferência; etiqueta "burra" → etiqueta final; numeração "Volume X de Y" com "Pede Caixa"; cor de tela por PTL. |
| **I25.4066** (NavePark) | Balança dinâmica + 12 estações manuais; packing = lacre + etiqueta Spark + reindução; AMR transporta caixas plásticas vazias. |
| **I25.4378** (BR) | **Seladora automática** (Cetro) acoplada à esteira; lacre automatizado. |
| **I23.3502** (Master) | Packing **sem** intervenção sistêmica do Velox (só fechamento). |
| **I23.3801** (Octopus) | SC sem estação de packing; MS com 8 postos de packing/conferência. |
| **I22.1739** (Heart) / **I21.177** | Packing = fechamento de caixa e indução ao sorter no fim da linha. |
| **I23.1602** (Peter ET) | Estação de **Packing ET** troca a caixa plástica pela de expedição após a conferência. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Balança / validação de peso** | Evento | Aprovação que habilita a impressão da etiqueta final no packing. |
| **Sorter** | Saída | Lê a etiqueta final para desviar o volume à rampa. |
| **PTL** | Saída | Lê a etiqueta final para alocar o volume no destino. |
| **Spark / cliente** | Layout | Fornece o layout das etiquetas finais impressas pelo WCS (NavePark). |
| **AMR** | Logística | Transporta caixas plásticas vazias do packing de volta ao Order Start (NavePark). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Packing** | Embalagem final: troca da caixa plástica pela caixa de expedição, fechamento e etiquetagem. |
| **Caixa plástica** | Recipiente de separação reutilizável; substituído pela caixa de papelão no packing. |
| **Etiqueta final / de expedição** | Etiqueta definitiva do volume, lida no sorter e no PTL. |
| **Etiqueta "burra"** | Identificação simples da caixa plástica, lida no packing para gerar a etiqueta final. |
| **Pede Caixa** | Funcionalidade que cria um volume extra quando a caixa enche, recalculando a numeração. |
| **Seladora automática** | Equipamento que lacra a caixa automaticamente na esteira (projeto BR). |
| **Etiqueta complementar** | Segunda etiqueta impressa quando os itens não cabem no layout padrão. |
| **Balança dinâmica** | Pesagem em linha que aprova o volume para o packing/sorter. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 64 seções*
