# Recebimento e Armazenagem — Knowledge Card

> CARD abrangente do tópico **Recebimento e Armazenagem**. Fonte: Top 10 (BELEZA Fase 1, BELEZA Fase 2, BRF Salvador, Market Chile, Market Peru, NavePark, CDSK, Beta) + complementares (BRF Jundiaí, Barbecue, Optimus Prime, Reverse). O ED usa este arquivo para gerar o capítulo de Recebimento e Armazenagem do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`recebimento` `armazenagem` `putaway` `recebimento-transfer` `recebimento-palete`
`ilpn` `rg-pallet` `ud` `asrs` `transelevador` `armazem-automatico` `armazem-convencional`
`transfer` `buffer` `pulmão` `berco-entrada` `berco-saida` `canal-picking`
`bk25` `portal-entrada` `avaliacao-dimensional` `curva-abc` `balanceamento-sku`
`tord` `toco` `cato` `wmtord` `wmtoco` `wmcato` `idoc` `plc-armazenagem`
`decanting` `crossdocking` `drive-in` `posicao-especial` `sprinkler`
`mapa-posicoes` `celula-ocupada` `celula-erro` `modo-contingencia` `ajuste-av`
`fifo` `shelf` `lote` `data-fabricacao` `data-vencimento` `temperatura`
`gestao-estoque` `es1` `bloqueio-posicao` `confirmacao-ot-manual`

## Metadados
- **Bloco:** entrada
- **Gate:** `es1 = yes` (Gestão de Estoque)
- **Subtópicos com CARD próprio:** [[integracao-wcs-wms]] (mensagens TORD/TOCO/CATO), [[integracao-cadastros]] (cadastro de posições, SKU, lote)
- **Depende de:** [[integracao-wcs-wms]] (recebimento dos IDOCs/REST de entrada), [[integracao-cadastros]] (posições cadastradas, produtos com lote/shelf)
- **Influencia:** [[reabastecimento]] (buffer → picking), [[picking-pbl]] · [[picking-fullcase]] (estoque disponível para coleta), [[inventario]] (consistência posição × saldo WCS)
- **Cruza com:** [[gestao-estoque]] (tela de estoque, bloqueio de posições), [[conferencia]] (conferência de recebimento, quando aplicável)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{es_gate}}` | `es1` | select | yes / no / tbd |
| `{{rec_tipo_infra}}` | `if9` | texto livre | PLC / equipamentos de automação (ex: "BK25, transelevador") |
| `{{rec_mezanino}}` | `l3` | select | yes / no / tbd |
| `{{rec_amr}}` | `l6` | select | yes / no / tbd |
| `{{rec_tipo_caixa}}` | `l1` / `l1_m` | select / multi | tote_plastic=Tote/Plástica · cardboard=Papelão · fardo=Fardo · misto_box=Misto |
| `{{rec_integracao}}` | `in1` | select | rest · idoc · dblink · excel · json_api · json_pasta · outro |

> `tbd`/vazio → omitir a subseção correspondente. Multi-select usa `|||` como separador no kickoff.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com `es1 = yes`. O ED parte daqui e aplica as condicionais.)*

O módulo de Recebimento e Armazenagem é a porta de entrada do estoque gerenciado pelo WCS. Engloba o recebimento físico de paletes/caixas no CD, a validação e conferência desses itens, a decisão de endereço de armazenagem (putaway), a movimentação até a posição definitiva e o registro de saldo disponível para as etapas subsequentes (reabastecimento e picking).

**Fluxo operacional padrão — Recebimento:**

1. **Recebimento da ordem de entrada (TORD).** O WMS/ERP envia ao WCS uma ordem de transporte de entrada (via integração — ver [[integracao-wcs-wms]]) contendo os dados do palete: identificador único (RG/UD/ILPN), SKU, lote, quantidade de caixas, peso, validade e, quando aplicável, tipo de conservação (ex: congelado, resfriado) e temperatura. O WCS registra a OT com status **Pendente** e a exibe nas filas de operação.

2. **Chegada física do palete — portal de entrada (quando há automação).** Ao chegar no portal de entrada da automação, o palete passa por avaliação dimensional automatizada: sensores verificam se está dentro dos padrões físicos mínimos (altura, largura, integridade). Simultaneamente, o WCS realiza a leitura da etiqueta do palete e executa as validações de negócio (ver **RN-01**). Paletes aprovados avançam para armazenagem; paletes rejeitados são redirecionados ao ponto de avaliação e o WCS envia o cancelamento (CATO) ao WMS/ERP.

3. **Recebimento manual no Transfer (operações sem automação total).** Para operações com área de Transfer (zona de armazenagem temporária de paletes recebidos), o operador acessa a tela **"Recebimento Transfer"** no WCS. Visualiza a lista de paletes que o WMS disponibilizou para alocação. Realiza a leitura do RG do palete com o coletor Android e, em seguida, a leitura do endereço físico no Transfer onde o palete será posicionado. O WCS confirma a alocação e envia a integração de **Confirmação de Recebimento** ao WMS. A missão/tarefa é automaticamente encerrada no WMS.

4. **Decisão de armazenagem (putaway).** Após a chegada do palete ao berço de entrada do transelevador (ASRS) ou à posição de stage (paredão), o WCS executa a lógica de direcionamento: avalia zona obrigatória por SKU, zona sugerida, disponibilidade de célula, balanceamento de SKU entre corredores e curva ABC parametrizada. O destino é atualizado nos dados da automação (campo de destino do PLC). O WCS envia o comando de movimentação ao transelevador e atualiza o status do palete para **Armazenando** (Storing).

5. **Movimentação pelo transelevador.** O WCS envia o comando de PICK (retirada da posição de origem) ao PLC. O PLC retorna confirmação de execução ou erro. Havendo sucesso no PICK, o WCS envia o comando de DROP (deposito na posição de destino) e altera o status para **Deposito**. Ao receber a confirmação de DROP do PLC, o WCS atualiza o status para **Finalizada** e envia o TOCO ao WMS/ERP.

6. **Chegada à célula — registro de saldo.** Ao concluir a armazenagem, o WCS atualiza o status da carga para **Armazenado** (Stored) e marca a célula como **Ocupada**. O saldo do palete (SKU, lote, quantidade, validade, posição, peso, temperatura) fica disponível para consulta na tela de estoque e para as regras de reabastecimento e picking.

7. **Visibilidade de estoque.** O WCS disponibiliza tela de gestão de estoque com as seguintes informações por posição: posição, SKU, lote, quantidade de caixas, peso, percentual de shelf, palete (UD), sequência, bloqueio de posição, quantidade reservada, quantidade prevista, data de fabricação, data de vencimento, tipo de posição, temperatura, tipo de depósito e status ativo.

---

## Condicionais

### Tipo de armazenagem — derivado de `if9` (PLC) e `es1`

#### SE `if9` está preenchido (há PLC / automação) → ADICIONA subseção "Armazenagem Automatizada (ASRS)"
O WCS orquestra transelevadores via troca de telegramas com o PLC. O fluxo inclui: portal de entrada com avaliação dimensional, berço de entrada (mesa de transferência), movimentação de PICK e DROP, berço de saída e ciclo de confirmação TOCO ao WMS/ERP. Erros de movimentação (célula ocupada, célula com erro, falha no transelevador) ativam lógicas de realocação automática (ver **RN-07**, **RN-08**, **RN-09**). Dashboard/Monitor exibe os paletes a serem induzidos no portal de entrada (ex: BK25) com priorização por OT ativa.

#### SE `if9` está vazio ou sem ASRS → SUBSTITUI subseção de armazenagem automatizada por "Armazenagem Convencional"
O CD opera com empilhadeiras e operadores sem transelevadores. A armazenagem é registrada manualmente no WCS: o operador lê o RG do palete e o endereço de destino (posição no porta-paletes ou floor), o WCS confirma a posição e envia o TOCO ao WMS/ERP. Não há troca de telegramas com PLC para movimentação.

#### SE `l3 = yes` (tem mezanino) → ADICIONA subseção "Armazenagem em Mezanino"
O WCS gerencia posições de armazenagem no(s) nível(is) de mezanino, complementando as posições do térreo. As regras de putaway (curva ABC, zona, balanceamento) se aplicam igualmente. O campo `l5` (quantos níveis) define a abrangência do mapa de posições.

#### SE `l6 = yes` (tem AMR) → ADICIONA referência a movimentação por AMR
AMRs (Autonomous Mobile Robots) participam da movimentação de paletes/caixas entre zonas. O WCS orquestra as missões de transporte para os AMRs da mesma forma que para operadores manuais (tarefa de transporte com origem e destino). Detalhe de integração com o sistema de frota AMR → ver [[integracao-wcs-wms]].

#### SE operação tem Transfer explícito (identificado por texto livre ou campo) → ADICIONA subseção "Transfer"
O Transfer é uma zona de armazenagem temporária de paletes, frequentemente anterior ao ASRS ou ao picking. O WCS controla o endereçamento do Transfer com regra de unicidade: **um palete por endereço** (ver **RN-03**). Em BELEZA Fase 2, o WCS não valida o endereço, permitindo criação de novos endereços pela leitura — comportamento parametrizável.

#### SE operação tem Buffer explícito (ex: BRF Salvador — níveis 4 e 5 do AA) → ADICIONA subseção "Buffer"
Buffer é área de armazenamento temporário no ASRS (posições de níveis superiores), usado como reserva para absorver picos de demanda e otimizar o reabastecimento dos canais de picking. Quantidade de posições é parametrizável. Movimentação Buffer → Canal de Picking é acionada por TORD do ERP e executada pelo transelevador (ver [[reabastecimento]]).

#### SE operação tem Decanting (ex: Beta) → ADICIONA subseção "Decanting"
O Decanting é a transferência de itens de caixas full case originais para bins individuais, viabilizando o abastecimento do picking fracionado. Fluxo: leitura da caixa FC → informar quantidade de bins → leitura de cada bin → transferência física dos itens. Cada bin corresponde a um único endereço de picking fracionado (relação 1:1).

#### SE operação tem CrossDocking (CDSK, Market Chile, Market Peru, Optimus Prime) → ADICIONA subseção "CrossDocking"
No CrossDocking o palete recebido não passa por armazenagem: os volumes são informados ao WCS (integrados pelo WMS) e direcionados diretamente para a indução no sorter/expedição. O WCS não interfere na ordem de indução — o operador leva o palete à área de indução e o WMS conduz o processo. O WCS agrupa volumes de CrossDocking com volumes de separação nas posições de PTL, segregando por critérios como loja, categoria (Alimentício/Não Alimentício) e tipo de embalagem. Volumes de CrossDocking recebem priorização nas posições de PTL sem comprometer o fluxo padrão.

#### SE `es1 = no` ou `tbd` → OMITE o capítulo inteiro de Recebimento e Armazenagem.

---

## Observações Livres do Kickoff
Campos relevantes: `if9` (PLC/equipamentos), `g3` (local do CD), `g5` (WMS/ERP parceiro), `in1`/`in1b` (tipo de integração).

O ED deve:
- **`if9`** → mencionar os equipamentos de automação presentes (ex: "transelevador modelo X", "BK25") na subseção de Armazenagem Automatizada.
- **`g5` + `in1`** → determinar o protocolo de integração para as mensagens de entrada/confirmação (TORD/TOCO/CATO se IDoc, REST se API, etc.) e referenciar [[integracao-wcs-wms]].
- **Observação sobre tipo de conservação** (resfriado, congelado) → ADICIONAR regra de separação por temperatura na lógica de putaway, impedindo mistura de tipos em corredores/transelevadores incompatíveis.
- **Observação sobre Drive-in** → ADICIONAR subseção "Posições Drive-in" descrevendo posições fixas com até 3 vagas em profundidade para o mesmo SKU, com sequência física de acesso controlada pelo WCS.
- **Observação sobre leitura de lote por código de barras** (ex: BRF Salvador — data juliana, SIF) → ADICIONAR subseção "Regras de Extração de Lote" especificando a conversão de data juliana para gregoriana e a extração do SIF a partir do AI (7030).
- **Observação que restringe putaway** (ex: SKU dedicado a quadrante específico) → SUBSTITUIR o trecho de regra de alocação pela restrição explícita, documentando o quadrante/área dedicados.

---

## Regras de Negócio
- **RN-01** (todos com portal automático): no portal de entrada o WCS valida (a) se o palete está cadastrado; (b) se a localização é compatível com o status esperado (InSystemEntrance, Rejected, InPickingArea); (c) se existe OT de entrada pendente; (d) se o tipo de conservação é compatível com o corredor destino. Palete reprovado em qualquer critério é rejeitado com motivo registrado e CATO enviado ao ERP.
- **RN-02** (todos): ao receber TORD com status **confirmado** (ex: IDoc TORD confirmado), o WCS trata a movimentação como já concluída — não emite TOCO e não permite CATO (estorno inviável).
- **RN-03** (Transfer): o WCS não permite a alocação de mais de um palete no mesmo endereço de Transfer.
- **RN-04** (ASRS — BRF Salvador): as posições atendidas pelo transelevador devem estar previamente cadastradas no WCS como tipo Picking ou Buffer.
- **RN-05** (ASRS): o transelevador gerencia lista de movimentações por prioridade: paletes de onda ativa têm prioridade máxima; desempate por data/hora de início da onda; segundo desempate por proximidade no plano cartesiano.
- **RN-06** (ASRS — balanceamento): o WCS deve distribuir paletes do mesmo SKU entre diferentes corredores/transelevadores (1 palete por corredor), evitando que o SKU fique restrito a um único corredor — mitigação de risco de manutenção. Exceção: quadrantes parametrizados como dedicados a SKU específico (sobrepõe balanceamento).
- **RN-07** (ASRS — célula ocupada): ao receber alerta de célula ocupada, o WCS tenta realocação no mesmo corredor; sem posição no corredor, envia palete ao ponto de decisão (outro transelevador) para nova tentativa. Status permanece Storing durante todo o processo.
- **RN-08** (ASRS — célula com erro): comportamento idêntico à RN-07; adicionalmente a célula é marcada como "Célula com Erro" com o motivo retornado pelo transelevador.
- **RN-09** (ASRS — falha de transelevador): perda de comunicação WCS × PLC dispara contingência: palete é movido ao berço de saída, movimentações subsequentes passam a ser manuais até reset do equipamento. Ao reestabelecer conexão, o WCS retoma da última ação antes da paralisação.
- **RN-10** (ASRS — confirmação manual): há funcionalidade de confirmação de OT manual (requer usuário e senha) para enviar TOCO virtual quando a movimentação física ocorreu mas a confirmação do PLC não chegou. O saldo na posição não é atualizado automaticamente nesse caso — ajuste requer intervenção do ERP via novo TORD.
- **RN-11** (Buffer → Picking — BRF Salvador): movimentação de palete do buffer para canal de picking ativo é acionada por TORD do ERP; o WCS executa PICK do buffer, DROP no canal de picking e envia TOCO ao ERP. Cancelamento via CATO do ERP elimina a movimentação da fila.
- **RN-12** (produto sem cadastro — BRF Salvador): ao receber remessa com SKU não cadastrado, o WCS cria o produto automaticamente com as informações disponíveis (SKU, descrição, categoria de peso pesado), possibilitando o recebimento; contudo o volume não passará no sorter por falta de tipo de peso.
- **RN-13** (bloqueio de posição): IDOCs de bloqueio de saldo fazem o WCS bloquear toda posição de coleta associada. Tarefas de coleta já geradas para posições bloqueadas são executadas normalmente (bloqueio não é retroativo).
- **RN-14** (FIFO): o WCS respeita a política FIFO na determinação da ordem de saída dos paletes — os primeiros a entrar são os primeiros a ser retirados para abastecimento/picking.
- **RN-15** (modo contingência — BRF Jundiaí): parâmetro configurável pela operação define proporção percentual entre armazenagem e expedição de paletes durante períodos atípicos (ex: última semana do mês com prioridade de saída). Exemplo: 70% expedição / 30% armazenagem.
- **RN-16** (ajuste AV com transelevador ocioso — BRF Jundiaí): quando acionado manualmente pela operação durante ociosidade, o WCS reorganiza os paletes no armazém vertical para otimizar aproveitamento de espaço, respeitando as regras de cada posição parametrizada. Log de usuário, data/hora de início e fim é gerado.
- **RN-17** (Decanting — Beta): cada bin corresponde a um único endereço de picking fracionado; relação 1:1 bin × endereço.

---

## Insights e Padrões

### Padrões identificados
- O fluxo **TORD → putaway → TOCO** é o núcleo universal do recebimento com WCS: presente em BRF Salvador, BRF Jundiaí, BELEZA, NavePark. A semântica das mensagens varia por integração (IDoc SAP vs REST), mas o padrão lógico é idêntico.
- A regra de **unicidade de endereço no Transfer** (um palete por posição) aparece em 100% dos projetos com Transfer — é uma invariante do produto.
- O **mapa de posições** (tela de gestão do armazém com filtros e exportação) é entregue em todos os projetos com ASRS.
- **Confirmação manual de OT** (bypass com autenticação) é entregue em 100% dos projetos com transelevador — necessidade operacional recorrente de contingência.

### Variações significativas
- **BRF Salvador** usa IDoc SAP (TORD/TOCO/CATO) com transelevador + BK25; integração é bidirecional e síncrona por telegrama PLC. Modelo mais complexo da base.
- **BELEZA** usa Transfer com coletor Android; sem ASRS; recebimento é inteiramente manual via tela "Recebimento Transfer". Modelo mais simples da base.
- **BRF Jundiaí** adiciona funcionalidades avançadas de gestão do AV: modo contingência, ajuste com transelevador ocioso, posições especiais (sprinkler), posições dedicadas por SKU, curva ABC por quadrante.
- **Beta** adiciona **Decanting** como etapa intermediária entre o recebimento de full case e o abastecimento do picking fracionado.
- **CDSK / Market Chile / Market Peru** adicionam **CrossDocking** como variante de recebimento sem armazenagem.
- **NavePark** destaca a separação por curvas de giro e o conceito de túnel/zonas (térreo vs mezanino) com Skip Zone — relevante para a lógica de roteamento na armazenagem por zona.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **tipo de armazém automático** (transelevador unidade simples vs multiprofundidade vs miniload) — hoje inferido pelo texto livre de `if9`.
- Não há campo para **CrossDocking** como modalidade distinta de recebimento — aparece em texto livre e não aciona condicionais automaticamente. Candidato a checkbox.
- Não há campo para **Decanting** — candidato a checkbox vinculado ao Full Case (`fc1`).
- Não há campo para **Transfer vs armazenagem direta** — importante para determinar qual fluxo de recebimento usar. Candidato a select.
- **Tipo de conservação** (congelado/resfriado/seco) não tem campo dedicado no kickoff — impacta diretamente as regras de putaway por corredor/temperatura.

### Inferências
- **Inferência:** quando `if9` menciona "transelevador" ou "ASRS", o projeto quase sempre tem tela de mapa de posições, confirmação manual de OT e gestão de erros de célula. · **Confiabilidade:** alta · **Base:** BRF Salvador, BRF Jundiaí.
- **Inferência:** quando `in1 = idoc`, o protocolo de recebimento segue o padrão TORD/TOCO/CATO do SAP. · **Confiabilidade:** alta · **Base:** BRF Salvador, BRF Jundiaí.
- **Inferência:** projetos com mezanino (`l3 = yes`) tendem a ter Skip Zone ou lógica equivalente de roteamento condicional de caixas por nível — mesmo quando não explicitado. · **Confiabilidade:** média · **Base:** NavePark.

---

## Dependências (grafo)
- **Entra depois de:** [[integracao-wcs-wms]] (OT de entrada / TORD), [[integracao-cadastros]] (posições, SKU, lote cadastrados)
- **Sai para:** [[reabastecimento]] (buffer → canal picking), [[picking-pbl]] · [[picking-fullcase]] (estoque disponível)
- **Sai para (CrossDocking):** [[sorter]] (volumes induzidos diretamente)
- **Consulta/alimenta:** [[gestao-estoque]] (saldo, bloqueios), [[inventario]] (consistência física × lógica), [[integracao-wcs-wms]] (TOCO de confirmação, CATO de rejeição)
- **Variante paralela:** [[conferencia]] (conferência de recebimento, quando aplicável no fluxo de entrada)
