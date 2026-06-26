# Order Start — Knowledge Card

> CARD abrangente do tópico **Order Start** (início controlado da separação). Fonte: Top 10 (BELEZA, BP, BRF Salvador, Beta, NavePark) + complementares (BR, BRF Jundiaí, Beta Esteio, Beta Full SP, Esperança, Guatemala, MASTER, Payless, Peter 2). O ED usa este arquivo para gerar o capítulo de Order Start do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`order-start` `order start` `os` `order-start-flowrack` `order-start-fracionado` `order-start-full-case`
`order-start-picking-cart` `order-start-nivel` `order-start-brindes` `order-start-pendencias`
`inicio-separacao` `induzir-caixa` `inducao` `pega` `volume-sistemico` `volume-fisico` `vinculo-volume`
`amarracao-caixa` `vinculacao-caixa` `etiqueta-fixa` `etiqueta-sequencial` `scanner-fixo` `scanner-de-mao`
`primeiro-ponto-de-decisao` `impressao-etiqueta-os` `imprimir-etiquetas` `buffer-de-caixas` `cubagem-os`
`fila-de-volumes` `priorizar-pedidos` `priorizacao-manual` `fifo` `prioridade` `menor-giro` `curva-de-giro`
`museu` `posto-de-impressao` `rua-de-separacao` `ordenacao-rua` `corte-por-falta-de-saldo` `validacao-saldo`
`reabastecimento-via-transfer` `mapeamento-posto` `mapeamento-picking-cart` `dashboard-order-start`

## Metadados
- **Bloco:** entrada
- **Gate:** `os_gate = yes`
- **Subtópicos / variantes:** Order Start Fracionado/PBL · Order Start Full Case · Order Start Picking Cart · Order Start por Nível/Mezanino · Order Start de Brindes/Pendências (variantes específicas)
- **Depende de:** [[cubagem]] (define o nº e tipo de caixas por pedido antes da indução)
- **Cruza com:** [[integracao-pedidos]] (recebe pedidos/ondas/missões, prioridade e dados de cubagem; notifica corte ao WMS) · [[etiquetas]] (impressão/reimpressão da etiqueta do volume no OS) · [[picking-pbl]] · [[picking-cart]] · [[picking-fullcase]] (o volume iniciado é entregue à modalidade de coleta)
- **Sai para:** [[picking-pbl]] / [[picking-cart]] / [[picking-fullcase]] (e, no fim, [[conferencia]]/[[packing]]/[[sorter]])

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{os_tem}}` | `os_gate` | select | yes / no / tbd |
| `{{os_resp}}` | `os_r` | select | `wcs`=WCS · `wms_only`=WMS · `both_wms_wcs`=Ambos · tbd |
| `{{os_qtd}}` | `os1` | texto livre | quantos Order Starts existem na operação |
| `{{os_imprime_etq}}` | `os_imp_etq` | YN | yes=imprime etiqueta no OS · no=etiqueta fixa/pré-existente · tbd |
| `{{os_vinc_caixa}}` | `os4` | select | `scan_fix`=Vínculo automático no scanner fixo (1º ponto de decisão) · `scan_man`=Vínculo manual por scanner de mão · tbd |
| `{{os_por_nivel}}` | `os5` | YN | yes=há um Order Start por nível/mezanino · no=OS único no térreo · tbd |

> `tbd`/vazio → omitir a subseção correspondente. `os_gate = no`/`tbd` → omitir o capítulo inteiro.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com `os_gate = yes`. Núcleo consistente nos Top 10 — BELEZA, BP, Beta, NavePark. O ED parte daqui e aplica as condicionais.)*

O **Order Start** é o ponto de partida físico da automação: a etapa em que o WCS transforma o planejamento lógico (a Onda/Remessa de pedidos recebida do WMS) em **volumes físicos rastreáveis**, garantindo que cada caixa "saiba" exatamente por quais zonas de picking deverá passar. Em regra, é disponibilizado **um (1) Order Start no início da linha de separação**, com a finalidade de garantir o início controlado da separação para cada caixa de picking.

**Fluxo operacional padrão:**

1. **Recebimento dos pedidos via integração.** Para iniciar o processo, o WCS recebe via integração todas as informações dos pedidos/ondas/missões previstos para a operação, incluindo os dados de **cubagem** e a quantidade de cada item (ver [[integracao-pedidos]]). Com base nas caixas de picking e nos dados recebidos, o WCS realiza o **cálculo de cubagem** e determina **quantas caixas (volumes) serão necessárias** para atender cada pedido, bem como o melhor modelo de caixa (ver [[cubagem]]).

2. **Organização da fila e priorização.** O WCS organiza os pedidos conforme o critério definido — **FIFO** (ordem de chegada/liberação) ou por **Prioridade** — e gera uma **fila de volumes** a serem iniciados (a ordenação inicial costuma ser agrupada por Remessa). O WCS disponibiliza uma **tela de Order Start** para visualizar os próximos volumes ("pega"/tarefa) que serão vinculados, na ordem de prioridade enviada na integração. Na tela, o operador pode **organizar e priorizar** os pedidos por critérios como prioridade operacional e status (ex.: apenas pedidos em aberto), além de ver uma **prévia da previsão de volumes por pedido** (quantas caixas serão necessárias).

3. **Autenticação e rastreabilidade.** O operador realiza login no WCS e acessa a tela de Order Start. Cada operação fica associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas; o sistema armazena essas informações para auditoria, controle de produtividade e acompanhamento de processos.

4. **Disponibilização das caixas e impressão/identificação do volume.** O operador conta com um **buffer de caixas** próximo ao Order Start. Conforme a configuração do projeto, ou (a) a etiqueta do volume é **impressa no próprio Order Start** e fixada pelo operador na caixa, ou (b) trabalha-se com **caixas de etiqueta fixa sequencial** já identificadas. A tela do OS exibe os tipos e quantidades de caixas previstas pela cubagem.

5. **Vínculo físico × sistêmico (amarração da caixa).** O WCS registra o **vínculo entre o volume físico (caixa) e o volume sistêmico (pedido)**. Esse vínculo é feito pela leitura da caixa — manualmente com **scanner de mão / PDV**, ou automaticamente no **primeiro ponto de decisão (scanner fixo)** da linha quando a caixa é induzida na esteira.

6. **Indução na linha.** Após o vínculo, o operador **induz a caixa na esteira** (ou inicia a coleta no dispositivo). O volume segue então para o processo de separação (ver [[picking-pbl]] / [[picking-cart]] / [[picking-fullcase]]), onde a etiqueta é lida no posto e o WCS dá continuidade ao fluxo.

> Em projetos sem fila automatizada, o WCS gera **um volume por posto/Order Start** mesmo que os itens caibam em uma única caixa, garantindo que **uma caixa nunca passe por dois postos diferentes** e que um volume não misture itens de remessas distintas. *(Guatemala, Beta Esteio.)*

---

## Condicionais

### Responsabilidade do Order Start — derivado de `os_r`

#### SE `os_r = wcs` (WCS) → mantém o Texto Padrão integral
O Order Start é executado e gerenciado pelo WCS (cálculo de cubagem, fila, vínculo, indução). É o caso da maioria dos Top 10.

#### SE `os_r = wms_only` (WMS) → SUBSTITUI o Texto Padrão por versão enxuta
A separação/início é feita diretamente pelo WMS; o WCS apenas recebe os volumes já integrados para desvio/transporte e **não executa o Order Start**. *(Caso BR: "volumes full case são separados diretamente pelo WMS e não passam pelo Order Start do WCS".)*

#### SE `os_r = both_wms_wcs` (Ambos) → ADICIONA nota de divisão de responsabilidade
Parte das modalidades é iniciada no WCS e parte no WMS (ex.: fracionado no WCS, full case no WMS). O ED deve explicitar a divisão com base na observação livre.

### Quantidade de Order Starts — derivado de `os1`

#### SE `os1` informado → ADICIONA na abertura
O ED preenche `{{os_qtd}}` na abertura (ex.: "A operação conta com N postos de Order Start"). O padrão recorrente é **um (1) Order Start no início da linha**; quando há mais de um, geralmente é por modalidade (Fracionado/Full Case/Picking Cart) ou por nível (ver `os5`). *(Guatemala: OS segregado por posto, cada posto com PDV, impressora e scanner próprios.)*

### Impressão de etiqueta no Order Start — derivado de `os_imp_etq`

#### SE `os_imp_etq = yes` → ADICIONA subseção "Impressão de Etiquetas no Order Start"
O operador seleciona na tela **quantos volumes/etiquetas deseja imprimir** (no Picking Cart o default costuma ser a capacidade máxima do carrinho). O WCS imprime as etiquetas dos volumes; o operador **fixa cada etiqueta na caixa correspondente** e induz na linha. A impressão pode ser **obrigatória para liberar a separação**. *(Beta, Beta Esteio, Guatemala, MASTER, Esperança.)*

#### SE `os_imp_etq = no` → ADICIONA nota de etiqueta fixa
Os volumes usam **caixas plásticas de etiqueta fixa sequencial** já identificadas; não há impressão no OS — o operador apenas lê a etiqueta fixa para criar o vínculo. *(BELEZA, BP.)*

### Vinculação da caixa — derivado de `os4`

#### SE `os4 = scan_fix` (Fixo / 1º ponto de decisão) → SUBSTITUI o passo 5 do Texto Padrão
O vínculo físico × sistêmico é feito **automaticamente** quando a caixa passa pelo **primeiro ponto de decisão (scanner fixo)** da linha — o WCS verifica se há tarefa de coleta liberada e associa ao volume. Não há leitura manual. *(BP Térreo: "leitura da caixa feita diretamente no primeiro ponto de decisão"; BELEZA: vínculo automático no primeiro ponto de decisão do FlowRack.)*

#### SE `os4 = scan_man` (Manual / scanner de mão) → SUBSTITUI o passo 5 do Texto Padrão
O operador realiza a **leitura manual da caixa plástica** com scanner de mão / PDV no posto de Order Start, e o WCS registra o vínculo físico × sistêmico antes da indução. *(BP Brindes/Níveis, Picking Cart, Guatemala.)*

### Order Start por nível / mezanino — derivado de `os5`

#### SE `os5 = yes` (OS por nível) → ADICIONA subseção "Order Start por Nível"
Há **um Order Start por nível** do mezanino. Cada OS exibe **somente os volumes que iniciam a coleta naquele nível** (o WCS define o nível inicial pela menor curva de giro / endereços do volume). O operador lê a caixa de etiqueta fixa no nível correspondente, o WCS registra o vínculo e o volume é direcionado aos postos subsequentes; quando não há mais itens em níveis inferiores, segue para a balança/térreo. *(BP: Order Start Nível 3, Nível 2, Nível 1 e Térreo — o Térreo é alocado automaticamente no 1º ponto de decisão.)*

#### SE `os5 = no` (OS único no térreo) → mantém o Texto Padrão (OS único no início da linha)

### Outras condicionais

#### SE o projeto tem Picking Cart (gate `ct1 = yes`) → ADICIONA subseção "Order Start Picking Cart"
A separação se baseia na **alocação de volumes sistêmicos nas posições do carrinho**. Antes de iniciar, o operador faz o **mapeamento das posições**: escaneia a caixa plástica e a associa a uma posição do carrinho (vínculo posição→caixa, ainda sem volume sistêmico), e clica em **"FINALIZAR MAPEAMENTO"** (mapeamento pode ser parcial). Depois, o PDV exibe as tarefas (por prioridade/FIFO) e o operador lê a posição para alocar o volume sistêmico. Regra crítica: **uma mesma caixa nunca conterá itens de mais de uma remessa**. *(BP, NavePark, Beta Esteio.)* → ver [[picking-cart]]. BP distingue ainda OS **Controlado** (área com controle de acesso, operadores autorizados) × **Não Controlado** (área comum, qualquer operador).

#### SE o projeto tem Full Case (gate `fc1 = yes`) → ADICIONA subseção "Order Start Full Case"
Usado quando a separação envolve **caixas fechadas**. Fluxo: (1) o operador **escolhe o posto de impressão**; (2) **seleciona a rua** de separação; (3) seleciona o **nº de etiquetas** a imprimir; (4) a **etiqueta é impressa antes da coleta** (impressão antecipada); (5) a **coleta inicia do lado oposto à indução**, com ordenação crescente/decrescente definida pelo cadastro da rua **ou pela impressora selecionada**. Hardware típico: **coletor Android**. *(BP, Beta, NavePark, Beta Full SP, Payless.)* → ver [[picking-fullcase]].

#### SE o projeto tem mezanino e itens de "menor giro"/museu → ADICIONA subseção "Ponto de início por menor giro"
O WCS identifica, entre todos os endereços de picking do volume, qual pertence à **curva de menor giro** (ex.: museu, OS do FlowRack) e define ali o **ponto inicial de separação**. Itens de menor giro são coletados primeiro (no OS específico daquela área, via PDV/Picking Cart), e só depois o volume é induzido na esteira para continuar no FlowRack — evitando retrabalho/retorno de caixas. *(BELEZA, BP.)*

#### SE há validação de saldo antes de iniciar → ADICIONA subseção "Validação de Saldo / Corte no Order Start"
Antes de iniciar um pedido, o WCS **valida se o saldo nas posições de picking é suficiente**. Se não for, a tarefa não é iniciada e o WCS segue com **reabastecimento via transfer**; o WCS pode exibir **alerta** quando as posições não atendem o ressuprimento (exigindo movimentação forçada de estoque). *(BP, BELEZA.)* Quando a reposição não é viável, parte dos projetos permite o **Corte por Falta de Saldo no Order Start**: corte **lógico** (remove a demanda do SKU, não altera o saldo da posição nem dispara reabastecimento), exige **autenticação de supervisor** e é notificado ao WMS pela mesma mensagem de corte/divergência do shortpicking, com motivo "Corte por falta de saldo no Order Start". *(NavePark; BELEZA permite iniciar com itens cortados quando não há saldo no transfer.)* → ver [[integracao-pedidos]], [[shortpicking]].

#### SE há peso mínimo para liberação → ADICIONA subseção "Peso Mínimo para Liberação"
A liberação da separação respeita um **parâmetro de peso mínimo** configurável e a disponibilidade de PTLs; só pedidos que atinjam/superem o limite são liberados. *(Esperança.)* `[OBS INTERNA]` projeto complementar — não há campo dedicado no kickoff.

#### SE há controle de reimpressão restrito → ADICIONA nota
A **reimpressão de etiquetas no OS** é restrita a supervisores/líderes, exige autorização e fica registrada em log (solicitante, autorizador, data/hora). *(Esperança.)*

#### SE há dashboard de monitoramento → ADICIONA subseção "Dashboard Operacional de Order Start"
Painel em tempo real com a carga por posto de OS (identificação, pedidos pendentes) e indicador de concentração de tarefas por rua (ranking/alerta), para balanceamento operacional e identificação de gargalos. *(Beta, Beta Full SP.)*

#### SE o WMS sinaliza tipo de produto especial → ADICIONA variantes de OS dedicado
Order Starts específicos por tipo: **Brindes** (acionado quando cadastro do produto tem `tipo = "Brinde"`) e **Pendências** (tratamento de shortpicking/avarias, liberado só após aprovação do WMS). *(BP — Brindes; Esperança — Pendências.)*

#### SE `os_gate = no` ou `tbd` → OMITE o capítulo inteiro de Order Start.

---

## Observações Livres do Kickoff
Campos de texto: `os1` (quantos Order Starts) e qualquer observação livre.

O ED deve:
- **`os1`** → preencher `{{os_qtd}}` na abertura (ex.: "A operação conta com N postos de Order Start"); se houver OS por modalidade/nível, listá-los.
- **Observação sobre hardware** (desktop/PDV/Tablet/coletor por modalidade) → ADICIONAR nota de hardware ao final da subseção correspondente. *(BP: desktop e Tablet/PDV no fracionado; coletor Android no Full Case.)*
- **Observação que restringe escopo** (ex.: "apenas Full Case neste projeto") → SUBSTITUIR o Texto Padrão pela restrição explícita. *(Payless: "Order Start fracionado e Picking Cart não contemplados; apenas Full Case".)*
- **Observação que adiciona etapa** não coberta → ADICIONAR como subseção nomeada, com `[OBS INTERNA]` se precisar de validação.

---

## Regras de Negócio
- **RN-01** (todos `os_gate=yes`): o WCS só inicia um volume após receber via integração as informações do pedido (onda/missão), incluindo cubagem; sem integração não há indução.
- **RN-02** (BELEZA, BP): antes de iniciar, o WCS valida se o saldo nas posições de picking é suficiente; insuficiente → tarefa não inicia e segue reabastecimento via transfer.
- **RN-03** (BP): o WCS exibe alerta no OS quando as posições não atendem o ressuprimento gerado, exigindo movimentação forçada de estoque.
- **RN-04** (NavePark): o **corte por falta de saldo no Order Start** é lógico (não altera saldo da posição nem dispara reabastecimento) e **exige autenticação de supervisor**; é notificado ao WMS pela mesma mensagem do shortpicking.
- **RN-05** (BELEZA, fase 2): não havendo saldo no transfer, o WCS permite iniciar a missão com os itens em falta **cortados**.
- **RN-06** (todos): o WCS registra o **vínculo físico × sistêmico** (caixa ↔ volume do pedido) — manual (scanner de mão/PDV) ou automático (scanner fixo no 1º ponto de decisão).
- **RN-07** (BELEZA, BP): o ponto de início do volume é determinado pela **menor curva de giro** entre os endereços do volume (museu/FlowRack coletados primeiro).
- **RN-08** (Guatemala): o WCS gera **um volume por posto** mesmo que os itens caibam numa única caixa — uma caixa nunca passa por dois postos.
- **RN-09** (Beta Esteio): uma mesma caixa/volume **nunca conterá itens de mais de uma remessa** (segregação garantida pelo WCS na alocação).
- **RN-10** (BP, NavePark): no Picking Cart, o **mapeamento posição→caixa** precede a alocação do volume sistêmico e pode ser parcial; o operador só avança para coleta após vincular as posições com caixa.
- **RN-11** (BP, Beta, NavePark, Beta Full SP, Payless): no Full Case a **etiqueta é impressa antes da coleta**; a ordenação da rua (crescente/decrescente) vem do cadastro da rua ou da impressora selecionada.
- **RN-12** (Esperança): a separação só é liberada quando o pedido atinge o **peso mínimo** configurado e há PTL disponível; **reimpressão** no OS é restrita a supervisor/líder e registrada em log.
- **RN-13** (MASTER): a impressão da etiqueta é obrigatória para liberar a separação; a caixa informada no OS é a embalagem final (sem reembalagem no packing).
- **RN-14** (Guatemala): cancelamento **antes** do OS remove o pedido da fila; cancelamento **após** o OS interrompe a coleta (LEDs acendem em vermelho ao bipar a etiqueta).
- **RN-15** (BP): no OS por nível, cada nível só exibe volumes cujo **primeiro endereço de coleta** seja daquele nível (não exibe volumes de níveis inferiores).

## Insights e Padrões
### Padrões identificados
- O **núcleo** (receber integração → cubagem define nº de caixas → fila por FIFO/prioridade → vincular caixa físico×sistêmico → induzir) é praticamente idêntico em BELEZA, BP, Beta, NavePark, MASTER, Guatemala — é o padrão sólido.
- **Cubagem é pré-requisito universal**: todo OS consulta a cubagem para decidir tipo e quantidade de caixas. Forte dependência de [[cubagem]].
- **Dois modos de vínculo** recorrem: automático no scanner fixo (linha de esteira/FlowRack) vs. manual por scanner de mão/PDV (Picking Cart, Brindes, postos segregados) — exatamente o que `os4` captura.
- **Full Case** segue um sub-fluxo próprio e estável (posto de impressão → rua → nº etiquetas → imprime antes → coleta do lado oposto → coletor Android) repetido quase literalmente em BP, Beta, NavePark, Beta Full SP.

### Variações significativas
- **BP** é o caso mais rico em **OS por nível** (Nível 3/2/1 + Térreo) e em variantes dedicadas (Brindes, Picking Cart Controlado×Não Controlado).
- **BELEZA/BP** introduzem o conceito de **menor curva de giro / museu** definindo o ponto de início — incomum nos demais.
- **NavePark** formaliza o **corte por falta de saldo no Order Start** como tela administrativa com aprovação de supervisor — os outros tratam falta de saldo só via transfer/reabastecimento.
- **Beta/Beta Esteio/Beta Full SP** trazem **impressão de etiquetas no OS** (operador escolhe quantas) + **buffer de caixas** + **Dashboard de OS** — modelo "imprime no OS" oposto ao "etiqueta fixa" de BELEZA/BP.
- **Esperança** acrescenta **peso mínimo para liberação**, **OS de Pendências** e **controle de reimpressão** com log/autorização — mais granular que os Top 10.
- **Guatemala** segrega o OS **por posto** (cada posto com PDV/impressora/scanner) e garante 1 volume por posto; também detalha cancelamento antes/depois do OS.
- **MASTER** define a caixa do OS como **embalagem final** (sem packing) e opera por ondas com até 16 clientes simultâneos.
- **BR/Payless** restringem escopo: BR faz full case **direto no WMS** (não passa pelo OS do WCS); Payless contempla **só Full Case**.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo para **"imprime no OS" vs "etiqueta fixa sequencial"** explícito — hoje inferido por `os_imp_etq`, mas a semântica "caixa de etiqueta fixa" (BELEZA/BP) não é distinguida de "etiqueta dinâmica impressa" de forma limpa. Candidato a refino de `os_imp_etq`.
- Não há campo para **"corte por falta de saldo no OS exige supervisor"** (RN-04) — hoje inferido. Candidato a checkbox (paralelo a `s1p`/`s1c`).
- Não há campo para **"peso mínimo para liberação"** (Esperança) nem para **OS de Pendências** — aparecem só em texto livre.
- Não há campo para **OS Controlado × Não Controlado** (BP Picking Cart) — controle de acesso por área.
- Não há campo para **critério de início por menor curva de giro / museu** (BELEZA/BP) — pode gerar ambiguidade em projetos com mezanino.
- `os1` (quantos OS) é texto livre; a relação "OS por modalidade vs OS por nível" (governada parcialmente por `os5`) poderia ser estruturada.

### Inferências
- **Inferência:** quando `os5 = yes` (OS por nível), o projeto tem mezanino (`l3 = yes`) e usa caixas de etiqueta fixa lidas por nível. · **Confiabilidade:** alta · **Base:** BP (único caso completo de OS por nível) + coerência com `l3`/`l5`.
- **Inferência:** quando `os_imp_etq = yes`, há **buffer de caixas** próximo ao OS e o operador escolhe a quantidade de volumes/etiquetas. · **Confiabilidade:** alta · **Base:** Beta, Beta Esteio, Guatemala, MASTER.
- **Inferência:** quando `os4 = scan_fix`, o projeto tem esteira com primeiro ponto de decisão (FlowRack/sorter) — vínculo automático. · **Confiabilidade:** média-alta · **Base:** BP Térreo, BELEZA.
- **Inferência:** o critério de fila default, quando não informado, é **FIFO** (ordem de chegada da integração). · **Confiabilidade:** média · **Base:** BRF Salvador, Guatemala, MASTER (FIFO explícito); Beta/BP citam FIFO ou Prioridade como alternativas.

## Dependências (grafo)
- **Entra depois de:** [[integracao-pedidos]] (recebe onda/missão e prioridade) → [[cubagem]] (define nº/tipo de caixas)
- **Sai para:** [[picking-pbl]] / [[picking-cart]] / [[picking-fullcase]] (o volume iniciado entra na coleta) → posteriormente [[conferencia]] / [[packing]] / [[sorter]]
- **Consulta/alimenta:** [[integracao-pedidos]] (notifica corte por falta de saldo ao WMS), [[etiquetas]] (impressão/reimpressão da etiqueta do volume), [[shortpicking]] (corte lógico no OS reusa a mensagem de divergência)
- **Variantes internas:** Order Start Fracionado/PBL · Full Case · Picking Cart · por Nível · Brindes · Pendências
