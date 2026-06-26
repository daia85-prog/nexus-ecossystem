# etiquetas — Dossiê Técnico

**Bloco:** expedicao | **Tópico:** etiquetas
**Seções analisadas:** 189 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O tópico **Etiquetas** cobre a **impressão, o layout, a reimpressão e a leitura** das etiquetas que circulam no WCS. A regra-mestra: o **WCS imprime** as etiquetas dos **volumes** (picking, full case, expedição), geradas a partir da **cubagem**, enquanto a **etiqueta de produção** (do produto) é, em geral, **responsabilidade do cliente**. A etiqueta final de expedição é impressa na **conferência/packing** e é lida no **sorter** (desvio) e no **PTL** (alocação).

A **numeração do volume** concatena o número do pedido com o número do volume (ex.: pedido 557788 → `5577880001`), no formato **X/Y** (`0001/0003`). A **reimpressão** é controlada por **permissão de liderança** e rastreada.

## Fluxo do Processo

1. Com a integração e a **cubagem** (ver [[cubagem]]), o WCS imprime **1 etiqueta por volume** (X/Y), por pedido.
2. O operador **fixa** a etiqueta na caixa conforme o tipo solicitado e induz na linha.
3. Na **conferência/packing**, o WCS imprime a **etiqueta final de expedição** (padrão ou especial).
4. A etiqueta é **lida** no portal do sorter (regras de prioridade/validação) e no PTL.
5. **Reimpressão:** tela dedicada exige login/senha de **liderança**; registra usuário, motivo e (Reisado) bloqueia a partir da 2ª via.

## Telas e Funcionalidades

### Tela de Reimpressão de Etiquetas
- **Acesso:** restrito a perfil de **liderança** (supervisor/coordenador/gerente), com autenticação por login/senha.
- **Filtros:** número do pedido, código do volume, data da conferência. **Comportamento:** cada linha = todas as etiquetas de um volume; registra o usuário e o motivo; bloqueio a partir da 2ª via (Reisado).

### Tela de Impressão de Etiquetas de Exceção
- **Comportamento:** fluxo segregado; imprime N etiquetas de uma vez; CD SP separa controlados × não controlados, CD MG imprime conjunto.

### Tela de Impressão de Romaneio
- **Comportamento:** após todos os volumes do romaneio finalizados, imprime a nível de pedido indicando em quais **pallets/gaiolas** cada volume está alocado.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O **WCS imprime** as etiquetas de volume (picking/full case/expedição); a **etiqueta de produção** é responsabilidade do cliente (em alguns projetos, todas são do cliente). |
| RN-02 | A numeração do volume = **pedido + volume**, no formato **X/Y** (ex.: `0001/0003`). |
| RN-03 | Há **sequencial fixo por tipo de caixa** (ranges) para permitir o **reuso** das etiquetas do Picking Cart/Coletor. |
| RN-04 | A **etiqueta final de expedição** é impressa na **conferência/packing**; há layout **padrão** e **especial** (a especial acrescenta item, lote, nome e quantidade). |
| RN-05 | **Reimpressão:** exige autenticação de **liderança**; registra usuário e motivo; (Reisado) bloqueia a partir da **2ª via** com mensagem de orientação. |
| RN-06 | **Leitura no portal (Barbecue):** prioridade por nº de caracteres (10 → 22 → 18); **Code128**, módulo mín. 0,4mm, altura mín. 18mm; só um código deve estar integrado. |
| RN-07 | **Múltiplos códigos com o mesmo dígito verificador → rejeito**; havendo dois de mesmo tamanho, processa o que tem dígito verificador. |
| RN-08 | **Etiqueta de produção (DataMatrix):** códigos identificadores — Material (90), Lote (10), Quantidade (30, não usado), **UC (92, enviado ao WMS)**; o WCS filtra e busca produto+lote. |
| RN-09 | Etiquetas que passam pelo sorter seguem especificação mínima (ex.: 1D Code128 0,38/21mm, 2D DataMatrix 1mm, ANSI A/B). |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) | WCS imprime tudo; sequencial fixo por tipo de caixa; reimpressão com login/senha; etiqueta de expedição na conferência. |
| **I23.125** (Cristal) | Numeração pedido+volume (X/Y); etiqueta de produção do cliente com DataMatrix (90/10/30/92); etiquetas de exceção em tela separada (controlados × não). |
| **I23.1412** (FDBR) | Reimpressão por volume restrita à liderança; etiqueta de volume **padrão × especial**; validação de string DataMatrix (EAN13+lote+sequencial). |
| **I24.117** (Barbecue) | **Todas** as etiquetas são do cliente; regras de prioridade de leitura (10/22/18) e rejeito por dígito verificador duplicado. |
| **I24.215** (BP) | **Impressão de Romaneio** a nível de pedido (pallets/gaiolas); agrupamento por subárea no PTL. |
| **I25.4066** (NavePark) | Especificação técnica das etiquetas (Code128/DataMatrix, ANSI), layout fornecido pela Spark. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Cubagem** | Origem | Define quantas etiquetas/volumes imprimir (ver [[cubagem]]). |
| **WMS** | Envio | Recebe o campo **UC (92)** lido na etiqueta de produção (confirmação de separação). |
| **Sorter / PTL** | Leitura | Consomem a etiqueta final para desvio e alocação. |
| **Impressoras (ZPL/TCP-IP)** | Saída | Recebem os comandos de impressão por posto (ver [[ptm]]/cadastro de impressoras). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Etiqueta de volume** | Identifica o volume (X/Y), impressa pelo WCS a partir da cubagem. |
| **Etiqueta de expedição/final** | Etiqueta definitiva impressa na conferência/packing, lida no sorter e PTL. |
| **Etiqueta de produção** | Etiqueta do produto (DataMatrix), responsabilidade do cliente. |
| **Etiqueta especial** | Variante que acrescenta item, lote, nome e quantidade. |
| **Sequencial fixo por caixa** | Range de numeração que permite reusar etiquetas do cart/coletor. |
| **UC (92)** | Código da unidade de carga na etiqueta de produção, enviado ao WMS. |
| **Dígito verificador** | Critério de desempate/validação na leitura de múltiplos códigos. |
| **Romaneio** | Documento impresso indicando a alocação dos volumes em pallets/gaiolas. |
| **Reimpressão (2ª via)** | Reemissão controlada por liderança, bloqueada a partir da segunda. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 189 seções*
