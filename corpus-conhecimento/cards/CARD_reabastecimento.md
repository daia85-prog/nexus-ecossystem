# Reabastecimento — Knowledge Card

> CARD abrangente do tópico **Reabastecimento** (ressuprimento das posições de picking/buffer). Fonte: Top 10 (BELEZA, BP, BRF Salvador, Beta, NavePark) + complementares (BR, Guatemala, MASTER, Payless, Peter 2). O ED usa este arquivo para gerar o capítulo de Reabastecimento do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`reabastecimento` `replenishment` `ressuprimento` `abastecimento-de-endereco` `reposicao-de-estoque`
`ponto-de-reabastecimento` `ponto-de-reposicao` `estoque-minimo` `fila-de-reabastecimento`
`reab-por-lotacao` `reab-por-necessidade` `reab-preventivo` `reab-manual` `reab-automatico`
`reab-por-capacidade` `reab-por-demanda` `gatilho-reabastecimento` `transfer` `buffer` `pulmao`
`decanting` `bin` `ilpn` `lpn` `posicao-de-picking` `posicao-de-destino` `posicao-de-origem`
`reab-pelo-sorter` `rampa-1` `reab-flowrack` `segregacao-estoque` `fefo` `controle-de-lote`
`coletor-android` `pbl-sinalizacao` `tord` `zabast` `gestao-de-estoque`

## Metadados
- **Bloco:** estoque
- **Gate:** `es1 = yes` (Tem Gestão de Estoque?) — sem ele o capítulo inteiro de Reabastecimento é omitido.
- **Campos moduladores:** `es2` (Reabastecimento auto?), `es3` (Reab. pelo Sorter?), `pk_es` (WCS gerencia estoque do picking: `wcs`/`wms_only`).
- **Depende de:** [[recebimento-armazenagem]] (popula Transfer/Buffer/pulmão que alimentam o reabastecimento)
- **Cruza com:** [[inventario]] (saldos/ajustes que disparam reposição), [[picking-pbl]] (posição de destino do abastecimento; sinalização PBL), [[integracao-wcs-wms]] (solicitação/retorno de tarefa: TORD/ZABAST/INT-03..05)
- **Influencia:** [[picking-pbl]] · [[picking-cart]] · [[picking-fullcase]] (libera ondas travadas por falta de saldo)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{estoque_tem}}` | `es1` | YN | yes / no / tbd **[GATE]** |
| `{{reab_auto}}` | `es2` | YN | yes=tem reab. automático · no=só manual · tbd |
| `{{reab_sorter}}` | `es3` | YN | yes=caixa de reab. transita pelo sorter · no · tbd |
| `{{picking_estoque_resp}}` | `pk_es` | select | `wcs`=WCS gerencia estoque do picking · `wms_only`=WMS gerencia · tbd |

> `tbd`/vazio nos campos moduladores → omitir a subseção correspondente, mantendo o Texto Padrão base se o gate `es1 = yes`.

---

## Texto Padrão
*(Base detalhada presente nos projetos em que o WCS participa do reabastecimento — gate `es1 = yes`. O ED parte daqui e aplica as condicionais. Quando `pk_es = wms_only`, ver condicional de responsabilidade que reescreve a abertura.)*

O Reabastecimento tem como objetivo garantir que as posições de picking (e, quando aplicável, as posições de buffer/pulmão) mantenham níveis de estoque adequados para atender à demanda operacional, evitando interrupções na separação por ruptura de estoque nas posições de coleta.

O reabastecimento movimenta itens de uma **posição de origem** (Transfer, AC/porta-pallet ou Buffer) para uma **posição de destino** (Buffer ou Picking), repondo o endereço até o nível parametrizado.

**Gatilhos de criação da tarefa (Texto Padrão):**

1. **Por lotação (saldo mínimo / preventivo de ruptura).** O WCS monitora continuamente os saldos das posições e gera tarefa quando o **Saldo Atual ≤ Ponto de Reabastecimento (mínimo)** parametrizado. O cálculo de reposição visa restabelecer a posição ao nível máximo: `Qtd a solicitar = Capacidade Máxima da posição − Saldo Atual`. A reposição só é disparada se couber pelo menos **uma unidade de abastecimento completa** (caixa/master), evitando quebra de volumes. *(NavePark, BP, BELEZA, Payless.)*

2. **Por necessidade (demanda de onda).** Ao preparar/importar uma onda, o WCS executa uma **varredura de estoque** comparando a demanda da onda com o saldo disponível (saldos não reservados das posições + tarefas/OTs de reposição já pendentes). Quando o saldo não atende integralmente a necessidade, é gerada solicitação de reabastecimento com **prioridade elevada**. *(BP, BRF Salvador, NavePark.)*

3. **Manual / preventivo (decisão operacional).** O WCS oferece uma tela/funcionalidade dedicada para criação manual de tarefas, usada em demandas pontuais ou emergenciais: solicitação de um SKU específico (independente dos parâmetros de mínimo), antecipação por decisão da operação, ou ajuste após perda/dano/erro de contagem. *(BELEZA, BP, NavePark, Guatemala.)*

**Fila de reabastecimento.** Todas as tarefas geradas (automáticas ou manuais) são organizadas em uma **fila de reabastecimentos pendentes**, com indicação de prioridade, item (SKU/codInterno), quantidade e endereços de origem/destino. Os operadores logados nos postos responsáveis visualizam as novas tarefas em tempo real e podem iniciá-las pelo coletor. O WCS apresenta uma tela com todos os reabastecimentos pendentes (origem × destino).

**Fluxo de execução padrão (via coletor):** O operador, pelo coletor (tipicamente Android, fornecido pelo cliente):

1. Inicia a tarefa pela fila.
2. **Leitura da posição de origem.**
3. **Leitura da caixa/item** que será movimentado (ILPN, bin ou codInterno) e confirma a quantidade alocada.
4. Transporta o material até o endereço de destino.
5. **Leitura da posição de destino** (picking/buffer), concluindo a movimentação.
6. O WCS **valida**, registra a movimentação, **atualiza os saldos** de estoque e finaliza a tarefa, liberando o operador para o próximo reabastecimento. A rastreabilidade da movimentação é mantida fim a fim.

---

## Condicionais

### Responsabilidade — derivado de `pk_es` (WCS gerencia estoque do picking?)

#### SE `pk_es = wms_only` (ou `es1 = yes` mas estoque do picking é do WMS/ERP) → SUBSTITUI a abertura do Texto Padrão
O reabastecimento (missão de reposição, decisão de **quando** e **o que** repor, FEFO, validação de lote, shelf life) é **responsabilidade exclusiva do WMS/ERP** (SAP, eWM, WMS Spark). O WCS **não gerencia estoque** neste projeto: ele recebe a tarefa de reposição já processada e **coordena apenas o fluxo físico** pela automação. Os blocos de "Gatilhos" automáticos por mínimo/necessidade calculados pelo WCS são omitidos; mantém-se apenas o fluxo físico de execução. *(BR, Payless, MASTER, Peter 2 — ver Insights.)*

#### SE `pk_es = wcs` → MANTÉM o Texto Padrão completo (WCS calcula e gera as tarefas).

### Reabastecimento automático — derivado de `es2`

#### SE `es2 = yes` → ADICIONA detalhe em "Gatilhos (1) e (2)"
O WCS monitora **continuamente** os níveis de estoque e cria tarefas automaticamente quando um critério é atendido (saldo abaixo do mínimo operacional e/ou previsão de consumo de ondas já liberadas). *(BELEZA, BP, NavePark.)*

#### SE `es2 = no` → OMITE os gatilhos automáticos
Mantém apenas o gatilho **manual/preventivo** (item 3 do Texto Padrão); o reabastecimento depende de ação do operador/gestor pela tela dedicada.

### Reabastecimento pelo Sorter — derivado de `es3`

#### SE `es3 = yes` → ADICIONA subseção "Fluxo de Reabastecimento pelo Sorter (Ciclo da Rampa)"
A caixa de reposição **transita pela automação como se fosse um pedido**, garantindo entrega ergonômica na frente do operador de picking. Fluxo típico:
1. **Separação na origem e indução no Sorter.** O WMS/operação separa a caixa (full case ou fracionado) com **um único SKU por caixa de reabastecimento**, etiqueta com LPN/DUN rastreável e induz na linha que leva ao Sorter.
2. **Classificação na Rampa de reposição (buffer de entrada).** O scanner do Sorter lê a etiqueta; o WCS identifica que o LPN é uma reposição (vínculo na integração de retorno) e o **desvia obrigatoriamente para a rampa dedicada** (ex.: Rampa 1), onde um operador dedicado aguarda.
3. **Reindução no Order Start.** O operador leva a caixa ao Order Start; ela é reinduzida na esteira com destino lógico para a **zona de picking** que solicitou o produto.
4. **Abastecimento na zona.** A caixa é desviada à posição de destino; o **display/PBL pisca em cor distinta** ("Entrada de Material" — ex.: amarelo no NavePark, laranja no BR). O operador retira a caixa, abastece o flow rack/posição, lê endereço de destino (+ EAN, quando configurado) e **confirma pelo botão do PBL**.
5. **Finalização.** O WCS envia confirmação ao WMS, atualiza o saldo para "Disponível" e **libera as ondas que estavam travadas** por falta de abastecimento. *(NavePark, BR.)*

#### SE `es3 = no` → OMITE a subseção do Sorter
A reposição é executada diretamente pelo operador via coletor (fluxo padrão de execução), sem trânsito da caixa pela esteira/sorter.

### Origem do reabastecimento (estrutura física) — modular por observação livre

#### SE a origem inclui Transfer (caixas de recebimento) → ADICIONA subseção "Decanting"
Quando a origem é o **Transfer**, é obrigatória a execução do **decanting** antes da movimentação: transferência dos itens de uma ou mais caixas (ILPNs) para **bins** plásticas identificadas com código único, garantindo organização e rastreabilidade. Regras: múltiplas ILPNs em uma bin **só** se mesmo SKU e lote (consolidação); uma ILPN para várias bins exige flag de divisão e informe de quantidade, com atualização automática do estoque do Transfer. *(BELEZA, Beta.)*

#### SE há Buffer/pulmão intermediário → ADICIONA em "posição de origem"
O reabastecimento pode ocorrer em dois saltos: **Transfer → Buffer** e **Buffer → Picking**. Quando a origem é o Buffer, entende-se que o decanting já foi realizado (origem já em bins). *(BELEZA fase 1.)*

### Segregação e controle de lote — modular por observação livre

#### SE o projeto exige segregação lógica de estoque (multiempresa) → ADICIONA em "Gatilhos / validação"
O reabastecimento deve respeitar a **segregação lógica**: posição compartilhada fisicamente mas estoque segregado por empresa; o WCS não pode sugerir/aceitar reposição com produto de empresa diferente, mesmo SKU igual. *(BP.)*

#### SE a posição não admite mistura de lote → ADICIONA em "validação"
O reabastecimento de uma posição ocupada deve usar o **mesmo lote** já presente; sem o mesmo lote, a posição é desconsiderada; não se permite abastecimento parcial que gere múltiplos lotes na mesma posição. *(BP.)*

#### SE há controle de FEFO/shelf life pelo WMS/ERP → ADICIONA cross-ref
A seleção de origem (AC ou Buffer), FEFO, range de data de fabricação e validação de lote são decididos pelo WMS/SAP; o WCS apenas registra e envia/recebe as informações. → ver [[integracao-wcs-wms]]. *(BRF Salvador.)*

### SE `es1 = no` ou `tbd` → OMITE o capítulo inteiro de Reabastecimento.

---

## Observações Livres do Kickoff
Campos relevantes: `es1` (gate), `es2`, `es3`, `pk_es` e qualquer observação livre da seção 12 (Gestão de Estoque) / seção 6 (`pk_es`).

O ED deve:
- **`pk_es = wms_only`** → aplicar a condicional de responsabilidade (texto enxuto, só fluxo físico) e cruzar com [[integracao-wcs-wms]].
- **Observação que cita estrutura específica** (Transfer/Buffer/AC, transelevador, flow rack, módulos PMG) → nomear as origens/destinos reais na subseção de origem.
- **Observação que cita integração nominal** (TORD, ZABAST, INT-03/04/05, ZWMTOCO) → mencionar apenas como referência e remeter o detalhamento a [[integracao-wcs-wms]] (Round 2), sem detalhar payload aqui.
- **Observação que adiciona dashboard/indicadores de reabastecimento** (concluídos vs pendentes, por temperatura) → adicionar como subseção ao final com `[OBS INTERNA]` se precisar de validação da operação.

---

## Regras de Negócio
- **RN-01** (todos com `pk_es = wcs`): o WCS só gera tarefa de reabastecimento se couber **pelo menos uma unidade de abastecimento completa** (caixa/master/palete) na posição de destino, evitando quebra de volume.
- **RN-02** (NavePark, BP): cada **caixa de reabastecimento contém um único SKU** — seja caixa fechada ou parcial.
- **RN-03** (todos): a tarefa só é finalizada após **leitura da posição de origem + item/caixa + posição de destino** e confirmação da quantidade; o WCS atualiza o saldo na conclusão.
- **RN-04** (por necessidade — NavePark): os pedidos dependentes ficam **retidos** ("Aguardando Abastecimento") e não são liberados para a esteira até o ciclo de reposição concluir.
- **RN-05** (segregação — BP, específico de projeto): proibido reabastecer posição com produto de **empresa diferente** (estoque segregado logicamente), ainda que o SKU seja igual.
- **RN-06** (lote — BP, específico de projeto): reabastecimento de posição ocupada deve usar o **mesmo lote**; vedado abastecimento parcial que gere múltiplos lotes na mesma posição.
- **RN-07** (`es3 = yes` — NavePark, BR): o WCS identifica o LPN da caixa de reposição no scanner do Sorter e o **desvia obrigatoriamente** para a rampa de reabastecimento (Rampa 1); a confirmação ocorre via botão do PBL na zona de destino.
- **RN-08** (`pk_es = wms_only` — BR, Payless, MASTER, Peter 2): o WCS **não decide** quando/o que repor; o WMS/ERP envia a tarefa já processada e o WCS coordena **apenas o fluxo físico**.
- **RN-09** (BRF Salvador, específico de projeto): a OT/TORD de reabastecimento deve ter **identificador único** para rastreamento; reabastecimento por demanda usa ZABAST→TORD; por capacidade ocorre em **intervalo cronológico** mantendo posições cheias; flow rack recebe OT **já confirmada** pelo SAP.
- **RN-10** (BRF Salvador, específico de projeto): suporta **reclassificação de prioridade** — palete de OT por capacidade pode ser repriorizado para atender demanda urgente, evitando gerar nova solicitação.

## Insights e Padrões
### Padrões identificados
- **Três gatilhos recorrentes** — lotação/mínimo (preventivo de ruptura), necessidade (demanda de onda) e manual/preventivo — aparecem de forma quase idêntica em NavePark, BP e BELEZA. É o núcleo do tópico quando `pk_es = wcs`.
- **Fila de reabastecimento + execução por coletor** (origem → item → destino → confirma saldo) é o fluxo operacional comum a BELEZA, BP, Beta e NavePark.
- **Repor até a capacidade máxima** e **só repor se cabe 1 unidade completa** é regra repetida (NavePark, BRF por capacidade).

### Variações significativas (cite projetos)
- **WCS gerencia (`pk_es = wcs`):** BELEZA, BP, NavePark, Beta — o WCS calcula necessidade e cria tarefas.
- **WMS/ERP gerencia (`pk_es = wms_only`):** **BR** (WMS Spark coordena, WCS só desvia caixa), **Payless** (eWM-SAP), **MASTER** (responsabilidade exclusiva do WMS; WCS só envia separação/cortes), **Peter 2** (todo o processo é responsabilidade do cliente). Texto fica enxuto.
- **BRF Salvador** é o caso mais complexo: integração profunda com SAP (TORD/ZABAST/ZWMTOCO), reab. **por capacidade** (cronológico) × **por demanda** (onda), transelevador com dupla confirmação, flow rack com OT pré-confirmada, reclassificação de prioridade e dashboards por temperatura (congelado/resfriado).
- **NavePark** e **BR** usam **reab. pelo sorter** (`es3 = yes`) com sinalização PBL colorida (amarelo / laranja).
- **BELEZA** tem o fluxo de **decanting** (Transfer→bins) mais detalhado; **Beta** integra o reabastecimento ao **Order Start Full Case** (coleta unificada, decanting → abastecimento do picking cart → execução do cart de reabastecimento).
- **Guatemala** é minimalista: botão de solicitação onde o operador só informa a **posição** que precisa de reposição (o WCS não conhece o item vinculado à posição) e repassa ao WMS.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- O kickoff tem `es2` (auto) e `es3` (sorter), mas **não distingue os três tipos de gatilho** (lotação/necessidade/preventivo) — hoje inferido do contexto. Candidato a multi-select.
- Não há campo para **"reab. por capacidade × por demanda"** (BRF) — distinção relevante em projetos SAP automatizados.
- Não há campo para **origem do reabastecimento** (Transfer/Buffer/AC) nem para **exigência de decanting** — aparece só em texto livre.
- Não há flag para **segregação multiempresa** (RN-05) nem **bloqueio de mistura de lote** (RN-06) — específicos de projeto, hoje em observação livre.
- `pk_es` cobre a responsabilidade do estoque do picking, mas em projetos sem PBL o gate efetivo é `es1`; convém confirmar a amarração `es1`×`pk_es` no ED. `[OBS INTERNA]`

### Inferências
- **Inferência:** quando `es3 = yes` (reab. pelo sorter), o projeto quase sempre tem Sorter (`st1 = yes`) e sinalização PBL na posição de destino. · **Confiabilidade:** alta · **Base:** NavePark, BR.
- **Inferência:** quando `pk_es = wms_only`, `es2` tende a ser irrelevante (não há cálculo de gatilho no WCS) e o capítulo se resume ao fluxo físico. · **Confiabilidade:** alta · **Base:** BR, Payless, MASTER, Peter 2.
- **Inferência:** decanting (Transfer→bins) só aparece quando a origem é caixa de recebimento (ILPN), não quando a origem já é palete/buffer consolidado. · **Confiabilidade:** média · **Base:** BELEZA, Beta vs BRF.

## Dependências (grafo)
- **Entra depois de:** [[recebimento-armazenagem]] (abastece Transfer/Buffer/AC/pulmão que servem de origem)
- **Sai para / libera:** [[picking-pbl]] · [[picking-cart]] · [[picking-fullcase]] (posições de destino abastecidas; ondas travadas liberadas)
- **Consulta/alimenta:** [[integracao-wcs-wms]] (solicitação e retorno da tarefa — TORD/ZABAST/INT-03..05), [[inventario]] (saldos e ajustes que disparam reposição)
- **Sinalização compartilhada:** [[picking-pbl]] (display PBL pisca em cor de reabastecimento na posição de destino)
