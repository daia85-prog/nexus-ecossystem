# Picking PBL / FlowRack — Knowledge Card

> CARD abrangente do tópico **Separação PBL (Pick by Light) / FlowRack**. Fonte: Top 10 (BELEZA Fase 1 e Fase 2, BRF Salvador, NavePark) + complementares (Peter 2, Guatemala, Esperança, Beta Esteio, BRF Jundiaí, Reverse/FlowHack). O ED usa este arquivo para gerar o capítulo de Separação PBL do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff (seção PBL/FlowRack + PBL_Q) e absorve as **Observações Livres**.

## Tags
`picking-pbl` `pbl` `pick by light` `picking by light` `flowrack` `flow rack` `separacao-fracionada`
`led` `display-3-digitos` `display-6-digitos` `led3` `led10` `botao-led` `cor-azul` `cor-verde` `cor-rosa` `cor-laranja`
`picking-frente` `picking-costas` `nichos` `linha-expressa` `leitor-fixo` `scanner-posto` `posto` `estacao`
`giro` `alto-giro` `medio-giro` `baixo-giro` `bipagem-ean` `confirmacao-coleta` `lista-de-coleta`
`corte` `shortpicking` `pede-caixa` `motivo-corte` `supervisor` `pdv` `coletor-android` `login-estacao`
`monitoramento-led` `dashboard-coleta` `led-sem-coleta` `timer` `pvar` `cliente-especial` `picking-map` `tela-enderecos`

## Metadados
- **Bloco:** separacao
- **Gate:** `p1 = yes` (Tem PBL/FlowRack?)
- **Subtópicos relacionados / com CARD próprio:** [[shortpicking]] (corte/quantidade < solicitada), [[ptl-alocacao]] (PTL na consolidação de fracionados)
- **Depende de:** [[order-start]] (cria/imprime a etiqueta do volume "pega" e induz a caixa na linha)
- **Influencia / Sai para:** [[conferencia]] (caixa segue para conferência ao final), [[packing]] (cliente especial → packing), [[etiquetas]] (reimpressão/nova caixa no "Pede Caixa")
- **Cruza com:** [[shortpicking]] · [[conferencia]] · [[ptl-alocacao]] · [[etiquetas]] · [[reabastecimento]] (FlowRack reabastecido sob controle do ERP/WMS) · [[integracao-pedidos]] (lista de coleta, flags de cliente especial, corte)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{pbl_tem}}` | `p1` | YN | yes / no / tbd **[GATE]** |
| `{{pbl_throughput}}` | `pk_tp` | texto livre | throughput da linha em cx/h |
| `{{pbl_estoque}}` | `pk_es` | select | `wcs`=WCS gerencia estoque do picking · `wms_only`=somente WMS · tbd |
| `{{pbl_resp}}` | `p_r` | RS | wcs / wms_only / both_wms_wcs / tbd |
| `{{pbl_sinal}}` | `p_m` | select | `led_mode`=LED (Pick by Light) · `bar_mode`=Código de barras |
| `{{pbl_tipo_led}}` | `p_led` | select | `led3`=LED 3 dígitos · `led10`=LED 10 dígitos [gate `p_m = led_mode`] |
| `{{pbl_giro}}` | `p_g` | select | `both_turn`=Ambos · `high_turn`=Alto · `med_turn`=Médio · `low_turn`=Baixo |
| `{{pbl_estacoes}}` | `p2` | texto livre | nº de estações de picking |
| `{{pbl_tem_pdv}}` | `p_pdv` | YN | tem PDV no posto? |
| `{{pbl_pdv_forn}}` | `p_pdv_f` | FN | quem fornece o PDV |
| `{{pbl_scanner}}` | `p_sct` | select | `sc_hand`=Scanner de mão · `sc_fixed`=Scanner fixo |
| `{{pbl_scanner_forn}}` | `p_sc_f` | FN | quem fornece o scanner |
| `{{pbl_bip_hand}}` | `p3` | select | `bip_yes`=Obrigatória · `bip_no`=Não · `bip_param`=Parametrizável [gate `p_sct = sc_hand`] |
| `{{pbl_bip_fixed}}` | `p3b` | select | idem `p3` [gate `p_sct = sc_fixed`] |
| `{{pbl_pos_frente}}` | `p_pf` | texto livre | nº de posições na frente |
| `{{pbl_tem_costas}}` | `p10` | YN | tem picking nas costas (nichos)? |
| `{{pbl_pos_costas}}` | `p_pc` | texto livre | nº de posições nas costas [gate `p10 = yes`] |
| `{{pbl_costas_led}}` | `p10l` | YN | costas tem LED? [gate `p10 = yes`] |
| `{{pbl_costas_tipo_led}}` | `p10lt` | select | `led3` / `led10` [gate `p10l = yes`] |
| `{{pbl_equip_forn}}` | `p_re` | FN | quem fornece o equipamento PBL |
| `{{pbl_corte_sup}}` | `s1p` | YN | corte exige supervisor? |
| `{{pbl_pede_caixa}}` | `s2p` | YN | tem "Pede Caixa"? |
| `{{pbl_motivo_corte}}` | `s3p` | YN | motivo de corte obrigatório? |

> A seção PBL/FlowRack tem campos extras por linha (PBL_Q) — cada estação/linha pode repetir os campos `p_r`…`s3p`. `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada, recorrente em todo projeto com `p1 = yes`. O ED parte daqui e aplica as condicionais. Núcleo idêntico em BELEZA, NavePark, Peter 2 e Guatemala.)*

A Separação PBL (Pick by Light) é o método de picking **fracionado** (itens soltos) realizado em **FlowRacks** equipados com displays luminosos, sob controle do WCS. A caixa de separação (também chamada "pega", "volume" ou "tarefa") foi criada e teve sua etiqueta impressa/fixada no [[order-start]], onde é induzida na linha de transporte.

**Fluxo operacional padrão:**

1. **Identificação do volume na linha.** A caixa de transporte percorre a **linha expressa** e, ao chegar ao **leitor (scanner) do posto/estação**, sua etiqueta é lida por um leitor fixo. O WCS identifica o volume e verifica se há produtos a serem separados naquele posto.

2. **Desvio para a estação.** Caso existam itens a separar, a automação **desvia** a caixa para dentro da estação de picking, direcionando-a para o lado do posto onde há solicitação de separação. Caso não haja itens no posto, a caixa segue direto pela linha expressa para a próxima estação.

3. **Acendimento dos LEDs (Pick by Light).** Os LEDs/displays das posições que contêm produtos para aquele pedido acendem (cor padrão **azul**). O display numérico de cada posição informa a **quantidade a ser separada**. O WCS controla o acionamento dos LEDs respeitando a **ordem de prioridade** parametrizada (ver RN-05) na geração da [[integracao-pedidos|lista de coleta]].

4. **Execução da coleta.** O operador retira a quantidade indicada da posição do FlowRack e a deposita dentro da caixa de transporte na esteira.

5. **Confirmação posição a posição.** O operador pressiona o **botão luminoso** da posição para confirmar a coleta; o LED apaga. Em seguida, a próxima posição acionada se destaca, e o processo se repete até que todas as posições solicitadas sejam visitadas e os produtos separados.

6. **Conclusão do posto.** Concluída a separação de todas as posições do posto, **todos os LEDs acendem em verde**, indicando ao operador que a separação naquele posto foi finalizada.

7. **Liberação / reindução.** O operador induz (ou a esteira movimenta automaticamente) a caixa de volta à linha expressa, que segue para a próxima estação de picking ou, ao final, para a **[[conferencia|conferência]]** / próximo setor.

---

## Condicionais

### Modo de sinalização — derivado de `p_m`

#### SE `p_m = led_mode` (LED / Pick by Light) → MANTÉM o Texto Padrão (este é o caso base)
O picking é guiado por LEDs no FlowRack. Aplicar o detalhamento de tipo de LED (`p_led`/`p10lt`) e cores.

#### SE `p_m = bar_mode` (Código de barras) → SUBSTITUI passos 3–5
A guia de coleta não é por luz, mas por **leitura de código de barras** (endereço/produto). O operador é direcionado por coletor/PDV, lê o código de barras do endereço de picking, separa a quantidade e confirma por bipagem. *(Variante baixo giro — ver FlowHack/Reverse nos Insights.)* → omitir o detalhamento de cores de LED.

### Tipo de LED — derivado de `p_led` (frente) e `p10lt` (costas)

#### SE `p_led = led3` → ADICIONA em "Acendimento dos LEDs"
Cada posição/produto possui **1 display de 3 dígitos + botão LED** (único por posição), que indica a posição de picking e a quantidade. *(Padrão recorrente: BELEZA, Peter 2, Guatemala.)*

#### SE `p_led = led10` → ADICIONA em "Acendimento dos LEDs"
Os LEDs são de **10 dígitos**, exibindo **endereço + quantidade** da posição. *(Usado nos nichos/costas no Peter 2 para identificar o endereço além da quantidade.)*

#### `[OBS INTERNA]` Display de número da caixa
Em parte dos projetos (BELEZA, Peter 2) há ainda um **display de 6 dígitos** por posto informando o **número da caixa** de separação atual, para o operador confirmar visualmente qual volume está separando. ADICIONAR como observação quando aplicável.

### Picking frente e costas — derivado de `p_pf`, `p10`, `p_pc`, `p10l`, `p10lt`

#### SE `p10 = no` (só frente) → ADICIONA em passo 2/3
A estação possui apenas picking na **frente** (`{{pbl_pos_frente}}` posições). Toda separação ocorre no FlowRack à frente do operador.

#### SE `p10 = yes` (frente + costas / nichos) → ADICIONA subseção "Picking Frente + Costas"
A estação possui picking na **frente** (`{{pbl_pos_frente}}` posições) e nas **costas / nichos** (`{{pbl_pos_costas}}` posições). Quando o volume solicita separação também nas costas, os LEDs da **frente acendem em ROSA**, sinalizando ao operador que existe coleta nas costas. O operador separa primeiro os itens da frente (confirmando posição a posição), depois se vira para os nichos e repete o processo. Concluídas frente e costas, todas as posições acendem em **verde**. *(BELEZA, Peter 2.)*
- SE `p10l = yes` E `p10lt = led10` → os nichos das costas possuem **LED de 10 dígitos** indicando endereço + quantidade.
- SE `p10l = no` → as costas não têm LED próprio; a sinalização das costas se dá pela cor rosa na frente. `[OBS INTERNA]` validar como o operador localiza a posição sem LED.

#### SE o posto exige duas passagens (2 postos na mesma estação) → ADICIONA em "Desvio para a estação"
Quando o volume solicita separação em **dois postos** da mesma estação, a automação para a caixa no posto que antecede o leitor; após concluir, o operador reinduz a caixa, que é **lida novamente pelo mesmo leitor** e direcionada ao posto seguinte. *(BELEZA.)*

### Giro — derivado de `p_g`
#### SE `p_g` define alto/médio/baixo giro → ADICIONA na descrição do layout
As posições do FlowRack são organizadas por curva de giro: **Alto Giro (Curva A e B)** geralmente na frente, **Médio Giro (Curva C)** nas costas/nichos; **Baixo Giro** pode ser tratado em fluxo dedicado (FlowHack/PDV — ver Insights). *(Peter 2: frente = alto giro, costas = médio giro.)*

### Login na estação e PDV — derivado de `p_pdv`, `p_sct`

#### SE `p_pdv = yes` → ADICIONA subseção "Login na Estação"
Para garantir rastreabilidade, é **obrigatório o login do operador na estação** antes de iniciar o picking, feito na tela do **PDV do posto** (usuário e senha). Após login com sucesso, os LEDs do FlowRack acendem em **azul**, indicando que a estação está pronta. SE uma caixa for lida sem operador logado, o sistema **não** inicia a tarefa e sinaliza acendendo **todos os LEDs em laranja**. *(Peter 2.)*

#### SE `p_sct = sc_hand` (scanner de mão) ou `sc_fixed` (scanner fixo) → ADICIONA em passo 1
A leitura da etiqueta do volume no posto é feita por scanner **de mão** (`sc_hand`) ou **fixo** (`sc_fixed`), conforme `{{pbl_scanner}}`. O scanner fixo é o padrão da linha expressa (leitor de posto).

### Bipagem de EAN — derivado de `p3` (sc_hand) / `p3b` (sc_fixed)
#### SE `p3`/`p3b = bip_yes` → ADICIONA em "Execução da coleta"
Além de confirmar pelo botão, o operador deve **bipar o EAN** do produto coletado, validando a identificação do item. *(Obrigatória.)*
#### SE `bip_param` → a bipagem de EAN é **parametrizável** por produto/operação.
#### SE `bip_no` → OMITE a bipagem; a confirmação se dá apenas pelo botão LED.

### Pede Caixa — derivado de `s2p`
#### SE `s2p = yes` → ADICIONA subseção "Funcionalidade Pede Caixa"
Caso o operador identifique que os produtos **não cabem** na caixa atual, aciona "**Pede Caixa**" (via coletor Android / botão no FlowRack). O WCS **finaliza a tarefa de picking da caixa atual** com os itens já coletados, enviando-a para reindução/próximas etapas, e **gera uma nova tarefa de separação** para os itens restantes do pedido, que será retomada no [[order-start|Order Start]] com uma nova caixa priorizada. Mantém rastreabilidade e integridade da separação. *(NavePark, Peter 2.)*
#### SE `s2p = no` → OMITE a subseção.

### Corte / ShortPicking — derivado de `s1p`, `s3p` (e cruza com [[shortpicking]])
#### SE há corte por ruptura → ADICIONA subseção "Corte / ShortPicking"
Quando a quantidade física disponível na posição é **inferior à solicitada**, o operador realiza o **shortpicking**: pelo botão da posição (sinal de menor) reduz a quantidade no sistema até a quantidade real e confirma a separação parcial. O WMS, ao receber a separação, dispara o **reabastecimento**. → ver [[shortpicking]].
#### SE `s3p = yes` (motivo de corte obrigatório) → ADICIONA
O operador deve obrigatoriamente **selecionar o motivo do corte** entre opções pré-configuradas e, dependendo do projeto, **ler o código de barras do endereço**; o WCS registra a pendência (SKU, posição, quantidade coletada, motivo) e a envia ao WMS. *(Esperança.)*
#### SE `s1p = yes` (corte exige supervisor) → ADICIONA
O corte/ajuste de quantidade exige **autenticação de supervisor** (login e senha) antes de ser efetivado. *(Inferido do padrão de descida manual / controle de corte — `[OBS INTERNA]` validar com a operação.)*

### Gestão de estoque do picking — derivado de `pk_es`
#### SE `pk_es = wcs` → ADICIONA
O **WCS gerencia o saldo de estoque** das posições de picking (FlowRack), atualizando-o conforme as coletas confirmadas.
#### SE `pk_es = wms_only` → ADICIONA
O **reabastecimento e o controle do estoque do FlowRack são do WMS/ERP**, executados fora do WCS. Nesse cenário, ao receber a movimentação de reabastecimento (ex.: OT com UD zerada + depósito de FlowRack), o WCS apenas **atualiza seu saldo** da posição de destino, sem aguardar execução física, confirmação adicional ou cancelamento. *(BRF Salvador — FlowRack opera com caixas individuais, sem palete; WCS não salva o número do palete.)* → ver [[reabastecimento]].

### Monitoramento de LED sem coleta — (projeto-específico)
#### SE o projeto tem dashboard de coleta / controle de tempo → ADICIONA subseção "Monitoramento de LED sem Coleta"
Para cada LED aceso, o WCS inicia um **timer**. Se o operador não confirmar a coleta dentro do **tempo limite parametrizável**, a linha do posto na **dashboard de coleta** muda para **vermelho** (alerta), permitindo atuação rápida da operação. O detalhamento (LED, SKU) é obtido por relatórios/telas, não na dashboard. *(BRF Salvador.)*

### Cliente especial / PVAR — (projeto-específico)
#### SE há tratamento de cliente especial → ADICIONA
Pedidos de **cliente especial** acendem o LED em **ROSA** (em vez de azul) a cada coleta, para identificação visual; a embalagem desses pedidos é feita no [[packing|Packing]]. *(NavePark.)* `[OBS INTERNA]` cuidado: rosa também é usado para sinalizar coleta nas costas em outros projetos (BELEZA, Peter 2) — conferir convenção de cor por projeto.
#### SE há produtos PVAR → ADICIONA em "Acendimento dos LEDs"
Produtos do tipo **PVAR** são **sempre a primeira prioridade** de coleta no sequenciamento de acendimento dos LEDs. *(BRF Salvador.)*

### Tela de endereços — (projeto-específico)
#### SE o projeto disponibiliza tela de gestão de endereços → ADICIONA subseção
O WCS disponibiliza uma **tela de endereços/posições** para visualização e administração das localizações de picking (FlowRack, e demais áreas como Museu/Transfer), enviadas no **Picking Map**, com filtros por setor e produto, para apoiar expansão/readequação/manutenção das posições. *(BELEZA.)*

### SE `p1 = no` ou `tbd` → OMITE o capítulo inteiro de Separação PBL/FlowRack.

---

## Observações Livres do Kickoff
Campos de texto: `pk_tp` (throughput), `p2` (estações), `p_pf`/`p_pc` (posições) e quaisquer observações livres.

O ED deve:
- **`pk_tp`** → mencionar o throughput da linha (ex.: "linha dimensionada para N cx/h") na abertura.
- **`p2`** → preencher `{{pbl_estacoes}}` ("A operação conta com N estações de picking, cada uma com frente e costas").
- **`p_pf` / `p_pc`** → detalhar nº de posições frente/costas, e quando disponível módulos × posições/módulo (ex.: Peter 2 "15 módulos × 12 posições = 180 posições por linha").
- **Observação que adiciona Order Start segmentado por linha** (ex.: Peter 2 — 2x Order Start, um por linha A2/A3) → ADICIONAR cruzando com [[order-start]].
- **Observação que adiciona etapa** não coberta pelo padrão → ADICIONAR como subseção nomeada ao final, com `[OBS INTERNA]` se precisar de validação.

---

## Regras de Negócio
- **RN-01** (todos): a caixa só é desviada para a estação se houver produtos a separar naquele posto; caso contrário segue direto pela linha expressa.
- **RN-02** (todos): a confirmação da coleta é **posição a posição**, pelo acionamento do botão LED (que apaga); a conclusão do posto é sinalizada por **todos os LEDs em verde**.
- **RN-03** (todos): a cor padrão de coleta é **azul**; **verde** = posto concluído.
- **RN-04** (BELEZA, Peter 2 / picking frente+costas): quando há separação nas costas/nichos, os LEDs da frente acendem em **rosa** para sinalizar; conclui-se frente antes das costas.
- **RN-05** (BRF Salvador): o WCS controla o acionamento dos LEDs respeitando **ordem de prioridade parametrizada**; **PVAR é sempre a 1ª prioridade**; dentro de cada posto, só acendem LEDs das tarefas atribuídas ao operador logado.
- **RN-06** (BRF Salvador): **monitoramento de LED sem coleta** — timer por LED; estouro do tempo limite parametrizável → linha do posto em **vermelho** na dashboard de coleta.
- **RN-07** (Peter 2): **login obrigatório** na estação (PDV) antes do picking; caixa lida sem operador logado → **todos os LEDs em laranja** e tarefa não inicia.
- **RN-08** (NavePark, Peter 2): **"Pede Caixa"** — finaliza a caixa atual com os itens coletados e gera nova tarefa de separação para o restante, retomada no Order Start com nova caixa priorizada.
- **RN-09** (Peter 2): **ShortPicking** — operador reduz a quantidade pelo botão (sinal de menor) até a quantidade física real e confirma; WMS dispara reabastecimento. → [[shortpicking]].
- **RN-10** (Esperança): no corte por ruptura, o operador **ajusta a quantidade**, **lê o código de barras do endereço** e **seleciona o motivo do corte** (obrigatório); WCS registra pendência (SKU, posição, qtd, motivo) no WMS. O operador **não decide** o corte da tarefa, apenas registra a anomalia.
- **RN-11** (BRF Salvador / `pk_es = wms_only`): FlowRack opera com **caixas individuais** (sem palete); reabastecimento controlado pelo SAP/ERP fora do WCS; OT com UD zerada (`00000000000000000000`) + depósito de FlowRack é processada como confirmada, apenas atualizando saldo. WCS **não salva** o número do palete recebido.
- **RN-12** (NavePark): **cliente especial** → LED em **rosa** por coleta; embalagem no Packing.
- **RN-13** (BELEZA, Peter 2): display de **6 dígitos** por posto informa o número da caixa atual (`[OBS INTERNA]` projeto-específico).
- **RN-14** (BELEZA): tela de endereços para administração das posições do Picking Map (FlowRack/Museu/Transfer), com filtros por setor e produto.

## Insights e Padrões
### Padrões identificados
- O **núcleo operacional** (leitor de posto → desvio → LED azul + quantidade → coleta → botão apaga → próxima posição → verde no fim → reindução para conferência) é praticamente **idêntico** entre BELEZA, NavePark, Peter 2 e Guatemala. É o padrão sólido do PBL.
- **LED de 3 dígitos + botão por posição** é o hardware padrão na frente (BELEZA, Peter 2, Guatemala).
- Cores convencionais: **azul** (coletar), **verde** (concluído), **rosa** (coleta nas costas OU cliente especial), **laranja** (sem operador logado), **vermelho** (alerta de LED não atendido na dashboard).
- A caixa, ao final do picking, **segue para a conferência** na maioria dos projetos (Guatemala, NavePark explicitam).

### Variações significativas
- **BELEZA** detalha o desvio para **2 postos na mesma estação** (caixa lida duas vezes pelo mesmo leitor) e tem **tela de endereços** dedicada (Museu/FlowRack/Transfer).
- **Peter 2** é o mais rico em frente+costas: frente alto giro (Curva A/B, LED 3 díg) + costas/nichos médio giro (Curva C), com **LED de 10 dígitos** nos nichos (endereço + qtd) e **login por PDV** com sinalização laranja. Usa **2 Order Start** segmentados por linha (A2/A3).
- **BRF Salvador** é o único com **monitoramento de LED sem coleta** (timer + dashboard vermelho), **prioridade PVAR**, e estoque do FlowRack **gerido pelo WMS/SAP** (caixas individuais, UD zerada).
- **NavePark** detalha **"Pede Caixa"** (coletor Android) e **cliente especial** (LED rosa → Packing).
- **Guatemala** é a versão mais enxuta: 1 display 3 díg por posição, coleta → verde → conferência (sem costas explícita).
- **Reverse (FlowHack)** é uma variante de **baixo giro guiada por código de barras/MAC + PDV**, não Pick by Light clássico: LED verde para alocar, azul ao fechar caixa, etiqueta com QR de MAC Address, alocação cadenciada e posições de "anomalias". Tratar como `bar_mode` / fluxo paralelo, não como PBL padrão.
- **Beta Esteio** mostra a **interseção full case × fracionado**: ao concluir full case, o WCS verifica se a remessa tem fracionados em PTL e força a retirada via leitura de etiqueta antes de liberar a expedição. → cruza com [[ptl-alocacao]].

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- A convenção de **cor rosa** é ambígua: costas (BELEZA/Peter 2) vs cliente especial (NavePark). Não há campo no kickoff para distinguir — candidato a nota/checkbox.
- **Monitoramento de LED sem coleta** (timer/dashboard) não tem campo próprio — hoje só aparece em texto livre (BRF Salvador).
- **Login obrigatório por PDV** (Peter 2) não tem checkbox dedicado além de `p_pdv = yes`; o comportamento "laranja sem login" é inferido.
- **Order Start segmentado por linha** (Peter 2) não tem representação no kickoff PBL — vive em texto livre.
- **PVAR / produtos prioritários** não têm campo de configuração de prioridade de acendimento.

### Inferências
- **Inferência:** quando `p10 = yes` (costas), o projeto quase sempre usa rosa na frente para sinalizar a coleta traseira. · **Confiabilidade:** alta · **Base:** BELEZA, Peter 2.
- **Inferência:** `p_led = led10` tende a aparecer nos **nichos/costas** (precisa exibir endereço), enquanto `led3` fica na frente. · **Confiabilidade:** média-alta · **Base:** Peter 2.
- **Inferência:** `s1p = yes` (corte exige supervisor) acompanha projetos com controle rígido de corte; não evidenciado diretamente no RAW de PBL — marcado `[OBS INTERNA]`. · **Confiabilidade:** baixa · **Base:** analogia com descida manual de pallet (BRF Jundiaí) e RN-04 de [[conferencia]].
- **Inferência:** se `pk_es = wms_only`, espera-se FlowRack reabastecido pelo ERP com caixas individuais. · **Confiabilidade:** alta · **Base:** BRF Salvador.

## Dependências (grafo)
- **Entra depois de:** [[order-start]] (cria/imprime etiqueta do volume e induz na linha; em Peter 2, OS segmentado por linha)
- **Sai para:** [[conferencia]] (caixa concluída segue para conferência) → [[packing]] (cliente especial / embalagem)
- **Consulta/alimenta:** [[integracao-pedidos]] (lista de coleta, prioridade, flags de cliente especial), [[reabastecimento]] (FlowRack reabastecido sob ERP/WMS quando `pk_es = wms_only`), [[etiquetas]] (nova caixa no "Pede Caixa")
- **Cruza com:** [[shortpicking]] (corte/quantidade < solicitada) · [[ptl-alocacao]] (consolidação fracionado×full case em PTL — Beta Esteio)
- **Variante paralela:** FlowHack/baixo giro guiado por código de barras (Reverse) → tratar como `p_m = bar_mode`
