# Inventário — Knowledge Card

> CARD abrangente do tópico **Inventário** (auditoria de estoque). Fonte: Top 10 (BELEZA, BP, BRF Salvador, NavePark) + complementares (BRF Jundiaí, Optimus Prime, Reverse). O ED usa este arquivo para gerar o capítulo de Inventário do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff (gate `es4 = yes`) e absorve as **Observações Livres**.

## Tags
`inventario` `inventário` `es4` `gate-inventario` `auditoria-de-estoque` `contagem-ciclica`
`inventario-ciclico` `inventario-total` `inventario-parcial` `auditoria-total` `auditoria-parcial`
`auditoria-posicoes-vazias` `endereco-vazio` `contagem-fisica` `nao-inducao` `blind-count`
`snapshot-saldo` `saldo-sistemico` `conciliacao` `recontagem` `1a-contagem` `2a-contagem` `3a-contagem`
`divergencia` `tarefa-ocorrencia` `double-check` `ajuste-de-estoque` `recall` `movimentacao-forcada`
`curva-abc` `range-dias` `rastreabilidade` `cancelamento-inventario` `timeout-inventario`
`retencao-logs` `coletor-android` `relatorio-conciliacao` `bipagem-item-a-item` `multiplicador`

## Metadados
- **Bloco:** estoque
- **Gate:** `es4 = yes` (Inventário) — subordinado ao gate-mãe `es1 = yes` (Gestão de Estoque)
- **Subtópicos / flags condicionais no kickoff:** `es5` (Recall) · `es6` (Movimentação Forçada) · `es7` (Curva ABC) + `es8` (range de dias) · `es10` (Double Check)
- **Depende de:** [[integracao-wcs-wms]] (saldo sistêmico de origem, snapshot, conciliação com WMS/SAP)
- **Influencia:** ajuste de saldo no WCS → reflete em [[reabastecimento]] (acuracidade dispara/posterga reabastecimento) e na disponibilidade vista no [[recebimento-armazenagem]]
- **Cruza com:** [[reabastecimento]] · [[recebimento-armazenagem]] · [[integracao-wcs-wms]]

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{inv_tem}}` | `es4` | YN | yes / no / tbd **[GATE]** |
| `{{inv_recall}}` | `es5` | YN | yes=tem Recall · no · tbd |
| `{{inv_mov_forcada}}` | `es6` | YN | yes=tem Movimentação Forçada · no · tbd |
| `{{inv_abc}}` | `es7` | YN | yes=tem Curva ABC · no · tbd |
| `{{inv_abc_range}}` | `es8` | texto livre | range de dias por curva (ex: "A=30, B=60, C=90") [es7:yes] |
| `{{inv_double_check}}` | `es10` | YN | yes=Double Check (2ª validação) · no · tbd |

> `tbd`/vazio nas flags `es5`/`es6`/`es7`/`es10` → **OMITIR** a subseção condicional correspondente. Campo `es8` só é válido quando `es7 = yes`.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com `es4 = yes`. O ED parte daqui e aplica as condicionais.)*

O Inventário (também chamado de **Auditoria de Estoque**) tem como objetivo garantir a **precisão das informações de estoque** mantidas pelo sistema WCS, comparando a contagem física com o saldo sistêmico. O processo é conduzido por **coletor Android** integrado ao WCS e pode ser realizado de forma **total** (todas as posições com itens alocados) ou de forma **parcial/cíclica** (itens, postos ou endereços selecionados pelo operador/supervisor).

**Princípio de não indução da contagem:** o WCS **não** exibe ao operador o SKU esperado nem a quantidade sistêmica da posição auditada. O operador conta fisicamente e informa o resultado; o sistema compara internamente e sinaliza divergências (contagem "às cegas" / blind count).

**Pré-condição de governança:** antes do início de qualquer auditoria é obrigatória a **criação prévia da tarefa por um usuário com perfil de supervisor**. Operadores executam, supervisores criam e parametrizam.

**Fluxo operacional padrão:**

1. **Criação da auditoria (supervisor).** O supervisor cria a tarefa de inventário no WCS, escolhendo a modalidade (Total, Parcial/Cíclica ou de Posições Vazias) e os parâmetros aplicáveis (regra de bipagem, nº de operadores, itens/endereços alvo).

2. **Regra de bipagem.** Antes de iniciar, define-se o método de contagem:
   - **Bipar item a item** (lê cada unidade individualmente); ou
   - **Multiplicador** (bipa o item uma única vez e informa manualmente a quantidade).

3. **Login e seleção (operador).** O operador realiza login no WCS pelo coletor Android, acessa a tela de Inventário de Estoque, seleciona a modalidade e a auditoria criada a ser executada.

4. **Contagem física por posição.** O WCS solicita a leitura de cada **endereço** que possui itens alocados. Para cada posição lida, o operador realiza a leitura do **SKU** dos itens presentes, conta a quantidade real e registra a quantidade auditada — **sem** o sistema exibir o esperado.

5. **Tratamento de posição vazia.** Se o operador encontra uma posição vazia, ele **bipa o endereço três vezes** e o sistema exibe aviso de posição vazia, confirmando o endereço como vazio.

6. **Conciliação e relatório.** Ao final da contagem, o WCS disponibiliza um **relatório de conciliação** comparando contagem física × saldo sistêmico, com opção de **impressão** e **exportação em Excel e PDF**.

7. **Tratamento de divergência.** Havendo divergência em qualquer endereço, o WCS dispara uma **tarefa de Ocorrência** para que um **segundo operador valide** o resultado (ver subseção **Double Check** / recontagem). Não havendo divergências, a auditoria é encerrada e o relatório consolidado é gerado.

8. **Ajuste de saldo.** Confirmada a contagem final, o WCS registra o **ajuste de estoque** (saldo físico passa a ser o oficial), preservando o histórico para rastreabilidade.

---

## Condicionais

### Modalidade de Inventário — sempre presente (núcleo do Texto Padrão)

#### Auditoria / Inventário Total → ADICIONA subseção "Inventário Total"
O operador verifica **todas** as posições de estoque que possuem itens alocados. **Pré-condição:** o Inventário Total só é iniciado com a **operação parada e sem reserva de saldo** nas posições; o WCS sinaliza essa pré-condição ao supervisor na criação. O **snapshot do saldo sistêmico é global** e ocorre no momento da criação do inventário. O supervisor informa **quantos operadores** participarão, e o WCS divide o inventário em **seções** para distribuir as tarefas. *(NavePark, BP, BELEZA.)*

#### Auditoria / Inventário Parcial ou Cíclico → ADICIONA subseção "Inventário Cíclico/Parcial"
O supervisor/operador seleciona **itens, postos ou endereços específicos** a auditar. O WCS apresenta a lista de itens alocados exibindo a **curva ABC** do item, a **data da última movimentação** e a **data da última auditoria**, com **busca** para localizar os alvos. No Inventário Cíclico o **snapshot é por posição**, capturado no momento da leitura do endereço — preservando a precisão da comparação **com a operação ativa** (não exige operação parada). *(NavePark, BP.)*

#### Auditoria de Posições Vazias → ADICIONA subseção "Auditoria de Endereços Vazios"
Garante que endereços sem itens estejam corretamente identificados como vazios ou que alocações incorretas sejam corrigidas. O operador lê o código do endereço; se vazio, confirma em **"Endereço Vazio"** e relê o código para validar; se contiver itens, lê o SKU, conta e registra, gerando tarefa de Ocorrência para validação por segundo operador. *(BP.)*

### Recontagem multi-rodada (NavePark) → ADICIONA em "Tratamento de divergência"
*(Aplica-se a projetos que detalham a recontagem em rodadas; quando `es10 = yes` o double check segue este modelo.)*
- **2ª contagem (recontagem):** contempla **somente os endereços divergentes** entre a contagem física e o saldo sistêmico. Mesmo padrão (leitura de endereço + SKUs, sem exibir saldo). Gera novo relatório de conciliação.
- **3ª contagem (última oficial):** contempla **somente os endereços que permaneceram divergentes** após a 2ª contagem. É a última contagem oficial.
- **Validação final direcionada (opcional):** ao final da 3ª contagem o WCS pergunta ao supervisor se há necessidade de auditoria adicional em endereços específicos. Se **não** → relatório consolidado contemplando todas as contagens; se **sim** → exibe a lista de endereços da 3ª contagem para o supervisor selecionar os que passarão por validação final.

### SE `es10 = yes` (Double Check) → ADICIONA subseção "Double Check"
Toda divergência detectada na contagem aciona obrigatoriamente uma **segunda validação por outro operador** (segregação de funções). O WCS cria uma **tarefa de Ocorrência** e só consolida o ajuste após a confirmação do segundo operador. → quando combinado com a recontagem multi-rodada, materializa-se como 2ª/3ª contagem. *(Presente como padrão de fato em BP e NavePark.)*
*(SE `es10 = no`/`tbd` → OMITE a exigência de segunda validação; a divergência segue tratamento simples de ajuste direto.)*

### SE `es5 = yes` (Recall) → ADICIONA subseção "Recall"
O **Recall** é o recolhimento dirigido de itens/lotes específicos (ex: por defeito, vencimento ou determinação regulatória) das posições de estoque. **Regra de exclusão mútua com Inventário** *(NavePark):*
- Recall e Inventário são **mutuamente exclusivos** sobre o mesmo item/posição.
- Havendo **Inventário Cíclico** em andamento sobre o item, não se inicia Recall para esse item até concluir a contagem (e vice-versa).
- O **Inventário Total** não pode iniciar enquanto houver **qualquer** tarefa de Recall em andamento; nenhum Recall inicia enquanto houver Inventário Total em andamento.
- O WCS **bloqueia** a ação conflitante e sinaliza ao operador/supervisor o motivo do bloqueio.
*(SE `es5 = no`/`tbd` → OMITE esta subseção.)*

### SE `es6 = yes` (Movimentação Forçada) → ADICIONA subseção "Movimentação Forçada"
Operação que permite ao supervisor **transferir/realocar saldo entre endereços de forma manual e dirigida**, fora do fluxo automático, com **rastreabilidade completa**: o sistema permite acompanhar o histórico da movimentação nos relatórios, desde a solicitação até a confirmação ou cancelamento. *(Inferido a partir da rastreabilidade de movimentação descrita em BRF Salvador; ver RN-08.)* `[OBS INTERNA: o detalhe operacional da Movimentação Forçada é fraco na evidência — confirmar com a operação se exige justificativa/autorização de supervisor.]`
*(SE `es6 = no`/`tbd` → OMITE esta subseção.)*

### SE `es7 = yes` (Curva ABC) → ADICIONA subseção "Curva ABC"
A classificação **ABC** (por giro/criticidade) define a **periodicidade de contagem cíclica** de cada item: o range de dias entre auditorias é parametrizado por curva via `{{inv_abc_range}}` (`es8`). A curva do item é exibida na seleção de itens do Inventário Cíclico/Parcial (ver subseção correspondente), orientando o supervisor sobre o que priorizar. *(Curva exibida na lista de auditoria parcial — BP.)*
- **SE `es8` preenchido** → registrar o range de dias por curva exatamente como informado (ex: "Curva A a cada 30 dias, B a cada 60, C a cada 90").
*(SE `es7 = no`/`tbd` → OMITE esta subseção e o slot `{{inv_abc_range}}`.)*

### SE `es4 = no` ou `tbd` → OMITE o capítulo inteiro de Inventário.

---

## Observações Livres do Kickoff
Campo de texto: `es8` (range de dias da curva ABC) e qualquer observação livre.

O ED deve:
- **`es8`** → preencher `{{inv_abc_range}}` na subseção Curva ABC com o valor exato informado.
- **Observação que adiciona integração de conciliação externa** (ex: comparar com WMS/SAP via IDOC) → ADICIONAR como subseção "Conciliação com WMS" referenciando [[integracao-wcs-wms]] *(visto em BRF Jundiaí — IDOC com posições do SAP, tela de divergências, descida de pallets para área de conferência física). Marcar com `[OBS INTERNA]` se a responsabilidade (WCS×WMS) não estiver clara no kickoff.*
- **Observação que restringe escopo** (ex: "só inventário cíclico, sem total") → SUBSTITUIR as modalidades não usadas pela restrição explícita.
- **Observação que adiciona etapa** não coberta → ADICIONAR como subseção nomeada ao final do fluxo, com `[OBS INTERNA]` se precisar de validação.

---

## Regras de Negócio
- **RN-01** (todos): qualquer auditoria exige **criação prévia de tarefa por supervisor**; operador apenas executa. *(BELEZA, NavePark.)*
- **RN-02** (todos): vigora o **princípio de não indução** — o WCS não exibe SKU esperado nem quantidade sistêmica durante a contagem. *(NavePark; padrão de fato.)*
- **RN-03** (todos): toda **divergência** entre contagem física e saldo sistêmico gera **tarefa de Ocorrência** para validação por **segundo operador** (double check). *(BP, NavePark.)*
- **RN-04** (Inventário Total): só inicia com **operação parada e sem reserva de saldo**; snapshot **global** na criação. *(NavePark — específico de projeto, mas coerente com a natureza do total.)*
- **RN-05** (Inventário Cíclico): snapshot **por posição** no momento da leitura do endereço, permitindo contagem **com operação ativa**. *(NavePark — especificidade de projeto.)*
- **RN-06** (todos): **posição vazia** é confirmada bipando o **endereço três vezes** + aviso do sistema. *(NavePark.)*
- **RN-07** (Recall × Inventário): Recall e Inventário são **mutuamente exclusivos** sobre o mesmo item/posição; Inventário Total e Recall são mutuamente exclusivos globalmente; o WCS bloqueia a ação conflitante. *(NavePark — específico, aplicável só se `es5 = yes`.)*
- **RN-08** (movimentação/rastreabilidade): toda movimentação permite acompanhar o **histórico completo** nos relatórios, da solicitação à confirmação/cancelamento. *(BRF Salvador.)*
- **RN-09** (cancelamento): o **cancelamento** de inventário em andamento exige **justificativa obrigatória** (campo livre ou motivos pré-definidos) para rastreabilidade. *(NavePark — específico de projeto.)*
- **RN-10** (timeout): o inventário **não expira automaticamente**; após período sem atividade o WCS gera **alerta visual + e-mail ao supervisor**, mas mantém o inventário aberto. *(NavePark — específico de projeto.)*
- **RN-11** (retenção de logs): os registros do inventário (id, posição, operador, tipo de evento, timestamp, saldo sistêmico e quantidade física) são retidos por **no mínimo 3 anos** a partir da criação. *(NavePark — específico de projeto, candidato a padrão de compliance.)*
- **RN-12** (relatório): toda auditoria, ao concluir, gera **relatório de conciliação** com **impressão** e **exportação Excel/PDF**. *(BP, NavePark.)*

## Insights e Padrões
### Padrões identificados
- **Total × Parcial/Cíclico** é a dicotomia universal: aparece em BELEZA, BP e NavePark com texto quase idêntico ("garantir a precisão das informações de estoque").
- **Coletor Android + login + leitura de endereço → leitura de SKU → contagem → registro** é o núcleo operacional repetido entre BP e NavePark.
- **Divergência → tarefa de Ocorrência → segundo operador** (double check) é recorrente — não é exclusivo do `es10`, é prática de fato.
- **Não indução da contagem** (blind count) é o princípio de qualidade dominante.

### Variações significativas
- **NavePark** é o projeto mais maduro: detalha **snapshot** (global × por posição), **recontagem em 3 rodadas + validação final**, **conflito Recall × Inventário**, **cancelamento com justificativa**, **timeout sem expiração** e **retenção de 3 anos**. É a referência para os campos avançados.
- **BP** detalha as **três modalidades** (Total, Parcial, Posições Vazias) e exibe **curva + última movimentação + última auditoria** na seleção parcial.
- **BELEZA** traz a forma mais enxuta (total/parcial + criação por supervisor).
- **BRF Jundiaí** introduz **conciliação contra o SAP via IDOC** com tela de divergências e descida de pallets para conferência física — variante de **inventário integrado WMS**, não autônomo do WCS.
- **BRF Salvador** centra na **rastreabilidade da movimentação** (solicitação→confirmação/cancelamento).

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo distinguindo **Inventário Total × Cíclico** no kickoff — `es4` é binário. As modalidades são inferidas. Candidato a multi-select.
- **Movimentação Forçada (`es6`)** tem evidência muito rasa no corpus — a subseção é majoritariamente inferida. Risco de texto genérico.
- Não há campo para **conciliação contra WMS/SAP** (BRF Jundiaí) — hoje cai em observação livre. Candidato a checkbox cruzando com [[integracao-wcs-wms]].
- **Retenção de logs (3 anos)** e **timeout/alertas** não têm campo — podem virar parâmetros de compliance/infra.

### Inferências
- **Inferência:** quando `es7 = yes` (Curva ABC), o projeto quase sempre opera **Inventário Cíclico** (a curva dita a periodicidade da contagem). · **Confiabilidade:** alta · **Base:** BP exibe curva na seleção parcial; lógica ABC↔cíclico.
- **Inferência:** `es10 = yes` (Double Check) tende a se materializar como a **recontagem multi-rodada** descrita no NavePark quando o projeto é maduro. · **Confiabilidade:** média · **Base:** RN-03 universal + detalhamento NavePark.
- **Inferência:** projetos com integração SAP/WMS forte tendem a ter inventário **de conciliação** (comparação de saldos) em vez de inventário **autônomo de contagem física**. · **Confiabilidade:** média · **Base:** BRF Jundiaí (IDOC SAP).

## Dependências (grafo)
- **Consulta/alimenta:** [[integracao-wcs-wms]] (saldo sistêmico de origem para o snapshot; conciliação e devolução do ajuste ao WMS/SAP)
- **Influencia:** [[reabastecimento]] (acuracidade do saldo após ajuste muda gatilhos de reabastecimento), [[recebimento-armazenagem]] (correção de posições/saldo reflete na armazenagem)
- **Exclusão mútua:** Recall (`es5`) ⟂ Inventário sobre o mesmo item/posição (RN-07)
- **Subordinado a:** gate-mãe [[reabastecimento]]/Gestão de Estoque (`es1 = yes`)
