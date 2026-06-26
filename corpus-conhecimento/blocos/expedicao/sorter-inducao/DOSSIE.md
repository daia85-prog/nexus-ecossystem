# sorter-inducao — Dossiê Técnico

**Bloco:** expedicao | **Tópico:** sorter-inducao
**Seções analisadas:** 45 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

A **Indução no Sorter** é a etapa em que os volumes entram na esteira de classificação automatizada e são lidos no **portal de leitura** para que o WCS (Velox) valide o destino e comande os desvios. O princípio fundamental, repetido em praticamente todos os projetos, é:

> Para a correta leitura no portal, os volumes devem estar **devidamente integrados no WCS/Velox**; com base nas informações recebidas, o sistema valida o destino e aciona o CLP/PLC para realizar os desvios na automação.

A indução cobre tanto **caixas fracionadas** (etiquetadas pelo operador no momento da indução) quanto **Full Case** (já etiquetadas na origem). Há cenários especiais — Slim Sorter (Correios), grandes volumes que não passam pelo sorter, e tratamento de falhas de leitura (NOREAD/MULTIREAD) — além de uma **área de Stage** que antecede a indução.

> **Nota de cobertura:** parte do material roteado para este tópico pertence, na verdade, a **dashboards/relatórios** (painel de chutes, saturação de rampas, produtividade de balanças/portais) e a **sorter-rejeito**. Esses pontos estão registrados nos insights como candidatos a realocação.

## Fluxo do Processo

1. **Pré-requisito:** o volume é integrado no WCS/Velox com as informações de destino.
2. **Indução física:** o operador coloca o volume na esteira (1 por vez no Slim Sorter), com a **etiqueta voltada para cima**. Fracionados são etiquetados pelo operador; Full Case já chegam etiquetados.
3. **Leitura no portal:** o portal (três faces — superior e laterais) captura o código de barras (**EAN** ou **DUN-14**).
4. **Validação e desvio:** o WCS valida os dados contra o **mapa do sorter ativo** e aciona o **CLP/PLC** para desviar o volume à rampa de destino.
5. **Aptidão (variante Titano):** após a leitura, o WCS dispara automaticamente a solicitação de **aptidão ao WMS/Reply**.
6. **Falha de leitura (NOREAD/MULTIREAD):** o volume segue para tratamento; em contingência, recebe etiqueta **IVT+DUN** impressa pelo operador na área de rejeito.

### Área de Stage (pré-indução — projeto Esperança)
- A área de Stage é dividida em **posições físicas (endereços)** para rastreabilidade.
- O operador deposita os volumes (pallet fechado para indução ou caixas Full Case) e **lê/insere o endereço** da posição no coletor.
- O WCS registra o endereçamento sistêmico, mas **não controla automaticamente a ocupação**; o gerenciamento físico do stage é operacional.

## Telas e Funcionalidades

### Ponto de Indução
- **Comportamento:** recebe o volume etiquetado; o portal lê o código e o WCS decide o desvio. No Slim Sorter, indução unitária (1 volume por vez).

### Tela de Triagem do Volume (projeto Barbecue B2B)
- **Filtro:** RG da caixa. **Exibe:** diagnóstico do volume — quando foi integrado, RG, passagem pela balança, peso, e quando ocorreu o desvio, com data/hora em cada ponto de decisão. Se o volume passar 3 vezes pelo sorter, exibe **3 registros** com data/hora de cada passagem.

### Área de Stage (coletor — projeto Esperança)
- **Comportamento:** exige leitura/inserção do endereço da posição; exibe mensagem orientando a direcionar volumes à área de Stage próxima à indução; sem controle automático de ocupação.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O volume só é lido corretamente no portal se estiver **integrado** no WCS/Velox; o sistema usa esses dados para validar destino e desviar. |
| RN-02 | A etiqueta deve estar **voltada para cima** no ponto de indução para leitura do código de barras. |
| RN-03 | O portal de três faces captura **EAN** ou **DUN-14**; o WCS valida e aciona o CLP conforme o **mapa do sorter ativo**. |
| RN-04 | Caixas com **mais de um código de barras**: o código integrado no WCS é o que deve ser lido/validado no portal. |
| RN-05 | **Full Case** chegam etiquetadas na origem; em alguns projetos a etiqueta não possui código de barras legível no portal e precisa ser readequada (responsabilidade do cliente). |
| RN-06 | **Fracionados ou NOREAD** (projeto Minuano) são sempre direcionados ao térreo. |
| RN-07 | **Contingência de leitura:** volumes com falha recorrente recebem etiqueta **IVT+DUN** impressa na área de rejeito. |
| RN-08 | **Grandes volumes** que não passam fisicamente pelo sorter seguem fluxo tipo Full Case: etiqueta impressa no Order Start do FlowRack e transporte direto à conferência, **sem** sorter nem armazenagem intermediária. |
| RN-09 | **Identificação arqueável × não arqueável (Promofarma):** volumes `tipo_volume = fracionado` são arqueáveis (passam pela arqueadora, rampas 02/03); `fullcase`, fraldas e BINs são não arqueáveis e o WCS **força o desvio para a Rampa 01** antes da arqueadora, independentemente da rota. |
| RN-10 | **Stage (Esperança):** o WCS registra o endereço informado para rastreabilidade, mas **não** controla ocupação/capacidade — quando cheio, exige tratativa operacional (confirmar alocação e segregar próximo ao stage). |
| RN-11 | **Triagem (Barbecue):** um volume pode ser induzido várias vezes; a tela de triagem deve registrar cada passagem com data/hora nos pontos de decisão. |
| RN-12 | **Métodos de triagem (projeto BAR):** o cliente pode usar até 4 métodos — por rota de destino, distribuição e remessa. |
| RN-13 | **Leitura de lote no portal (Diamante):** scanner do portal lê o código de lote da caixa para vincular caixa+lote e enviar ao WMS (Protheus) no retorno da integração — exige alteração no software PLC e WCS. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I25.3515** (Esperança) | Indução em rampas esquerda/direita, **6.000 vol/h**, portal de 3 faces (EAN/DUN-14), CLP por mapa ativo; contingência IA + etiqueta IVT+DUN; **área de Stage** endereçada sem controle de ocupação. |
| **I23.1412** (FDBR) | Operação de **grandes volumes** que não passam pelo sorter; etiqueta no Order Start, direto à conferência. |
| **I24.117** (Barbecue B2B) | Tela de **Triagem** por RG com diagnóstico e registro de múltiplas passagens (até 3). |
| **I24.205** (Promofarma) | Identificação **arqueável/não arqueável** via `tipo_volume`, forçando rampa 01 para não arqueáveis. |
| **I22.2247** (Minuano) | Indução para sorter sem armazenagem; fracionados/NOREAD direcionados ao térreo. |
| **I22.402 / I24.1417** (Maravilha) | Full Case chegam etiquetados, mas etiqueta sem código legível no portal (readequação pelo cliente). |
| **Correios** (Slim Sorter) | Indução **unitária** (1 volume por vez), etiqueta voltada para cima. |
| **I25.8049** (Titano) | Após leitura, dispara solicitação de **aptidão ao WMS/Reply**. |
| **I17.112** (Diamante) | Leitura de **lote** no portal para envio ao WMS (Protheus). |
| **Octopus, Market Peru/Chile, DIA, Consinco, Flower, Beta-Esteio** | Repetem a regra base de "volume integrado antes da leitura no portal". |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **WMS (Kaizen/Protheus/Reply/etc.)** | Recebimento/Envio | Fornece os dados de destino do volume; recebe aptidão (Titano) e lote lido no portal (Diamante). |
| **CLP / PLC** | Comando | Acionado pelo WCS para executar o desvio físico conforme o mapa do sorter ativo. |
| **Portal de leitura** | Hardware/leitura | Captura EAN/DUN-14 em três faces; origem dos eventos NOREAD/MULTIREAD. |
| **Integração de expedição/pedidos** | Recebimento | Informa quais volumes serão induzidos e seus destinos. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Indução** | Ato de colocar o volume na esteira do sorter para leitura e classificação. |
| **Portal de leitura** | Conjunto de scanners (3 faces) que lê o código de barras do volume na entrada do sorter. |
| **EAN / DUN-14** | Padrões de código de barras capturados no portal. |
| **CLP / PLC** | Controlador lógico programável que executa o desvio físico comandado pelo WCS. |
| **Mapa do sorter** | Configuração ativa que associa destinos a rampas; base da validação do desvio. |
| **NOREAD / MULTIREAD** | Falha de leitura (nenhuma leitura / múltiplas leituras) no portal. |
| **IVT+DUN** | Etiqueta de contingência impressa na área de rejeito para volumes com falha recorrente de leitura. |
| **Arqueável / Não arqueável** | Classificação do volume quanto à resistência à pressão da arqueadora (define a rampa). |
| **Área de Stage** | Área endereçada que antecede a indução, onde pallets/Full Case são depositados com leitura de endereço. |
| **RG da caixa** | Identificador do volume usado para filtrar a tela de triagem. |
| **Aptidão** | Solicitação ao WMS (Titano) que valida se o volume pode prosseguir após a leitura. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 45 seções*
