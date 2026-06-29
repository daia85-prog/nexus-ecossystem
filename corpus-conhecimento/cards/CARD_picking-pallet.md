# Picking Pallet — Knowledge Card

> CARD abrangente do tópico **Picking Pallet**. Fonte: Top 10 (BP, Beta) + complementares (Beta Full SP, Wild Fork). O ED usa este arquivo para gerar o capítulo de Picking Pallet do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`picking-pallet` `full-pallet` `separacao-palete` `pallet-picking` `unitizacao`
`agrupador-rampa` `picking-excecao` `picking-fullcase` `aba-pallet` `uc-pallet`
`paletizacao-transportadora` `prix-fixo` `aloca-pallet` `stage` `expedição-direta`
`coletor-android` `etiqueta-pallet` `quantidade-minima-pallet` `matrix-fragilidade`
`picking-por-onda` `rota-picking` `ptp` `pt_gate` `pt1` `pt_ag`

## Metadados
- **Bloco:** separacao
- **Gate:** sem gate exclusivo no kickoff — ocorre em projetos com `pt_gate = yes` e alto volume de full pallet (`pt1` contém `ptl_opt`, `ptm_opt` ou `aloca_opt`), ou quando sinalizado em texto livre como variante de picking fullcase
- **Subtópicos com CARD próprio:** [[paletizacao-ptl]] (displays PTL, gate `pt_tem_ptl`), [[aloca-pallet]] (processo de Aloca Pallet/PTL pós-picking), [[picking-fullcase]] (fluxo pai do qual o picking pallet é variante)
- **Depende de:** [[order-start]] (criação da onda/tarefa), [[picking-fullcase]] (fluxo base de coleta), [[integracao-pedidos]] (recebimento da onda com tarefas pallet)
- **Influencia:** [[aloca-pallet]] (pallet pode ir direto para stage, contornando PTL), [[etiquetas]] (etiqueta única de UC de pallet), [[expedicao]] (rampa de destino direta), [[sorter]] (bypassa o sorter)
- **Cruza com:** [[paletizacao-ptl]] · [[shortpicking]] · [[integracao-pedidos]] (campos de onda com tipo pallet) · [[pesagem]] (matriz de fragilidade, cubagem)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{pt_tem}}` | `pt_gate` | select (YN) | yes / no / tbd |
| `{{pt_tipo}}` | `pt1` | select | `no_pal`=Sem paletização · `ptl_opt`=PTL · `ptm_opt`=PTM · `aloca_opt`=Aloca Pallet · tbd |
| `{{pt_agrupador}}` | `pt_ag` | texto livre | critério de agrupamento por rampa/stage (ex: "por transportadora", "por filial") |
| `{{pt_posicoes}}` | `pt3` | texto livre | número de posições de paletização |
| `{{pt_frag}}` | `pt_frag` | select (YN) | yes=Sim · no=Não · tbd |
| `{{pt_romaneio}}` | `pt9` | select (YN) | yes=Sim · no=Não · tbd |
| `{{st_agrupador}}` | `st_ag` | texto livre | agrupador de rampa do sorter (pode coincidir com `pt_ag`) |

> **Multi-select** usa `|||` como separador no kickoff. `tbd`/vazio → omitir a subseção correspondente. O picking pallet não possui gate próprio: sua presença é inferida do `pt1` + volume de fullcase ou declarada em texto livre do kickoff.

---

## Texto Padrão
*(Base detalhada presente em projetos com alto volume de paletes inteiros destinados a um único pedido/remessa. O ED parte daqui e aplica as condicionais.)*

O Picking Pallet é o processo de separação de paletes completos — unitização de um volume elevado de um mesmo SKU destinado a uma única remessa — diretamente no endereço de armazenagem, sem fracionamento em caixas individuais. É uma variante do Picking Fullcase: quando a quantidade solicitada para um pedido atinge ou supera a **quantidade mínima de pallet** parametrizada no WCS, a tarefa é classificada como Picking Pallet e tratada em fluxo independente.

**Fluxo operacional padrão:**

1. **Acesso à aba de Picking Pallet.** Na tela de Picking Fullcase (ou Picking Exceção, conforme o projeto), o WCS disponibiliza uma **aba exclusiva** para Picking Pallet. O operador seleciona essa aba e visualiza as tarefas cujas quantidades atingem o mínimo configurado para paletização.

2. **Impressão da etiqueta de UC de pallet.** Ao iniciar a tarefa, o WCS gera e imprime uma única **etiqueta de UC (Unidade de Carga) de pallet**, contendo: endereço de alocação, número de caixas a alocar no pallet, ordem do pallet no carregamento e área de expedição de destino. Este comportamento é análogo ao Full Case, com diferenciação para paletes.

3. **Coleta dos itens.** O operador realiza a coleta com **coletor Android**, seguindo a sequência:
   - Leitura do **endereço de picking** (identifica o local de coleta);
   - Coleta física dos itens conforme orientações de quantidade exibidas no coletor;
   - **Etiquetagem** de todos os volumes coletados;
   - **Confirmação da quantidade** no coletor;
   - Leitura da **etiqueta de UC de pallet** (vincula a coleta à unidade de carga).

4. **Direcionamento direto para expedição.** O pallet é conduzido diretamente para a **rampa de destino / área de stage**, sem passar pelo Sorter e sem necessidade de processamento no PTL (Put to Light). O WCS informa ao operador no coletor que o processo de Aloca Pallet/PTL não é necessário. A alocação já é garantida pela etiqueta impressa no início da tarefa.

5. **Encerramento da tarefa.** Ao final da rampa, o operador realiza a leitura da **UC de pallet no PRIX fixo**. O WCS considera todos os volumes vinculados à UC como expedidos e atualiza automaticamente o dashboard operacional. A integração de Aloca Pallet é disparada pelo WCS com todas as etiquetas vinculadas à UC.

---

## Condicionais

### Tipo de Paletização — derivado de `pt1`

#### SE `pt1 = ptl_opt` (PTL) → ADICIONA nota sobre PTL opcional
O projeto possui displays PTL para paletização fracionada; o Picking Pallet **bypassa** esse fluxo. Indicar explicitamente no capítulo que paletes completos não passam pelo PTL. → ver [[paletizacao-ptl]].

#### SE `pt1 = aloca_opt` (Aloca Pallet) → ADICIONA subseção "Parâmetro de Paletização por Transportadora"
O processo de Aloca Pallet pode estar ativo ou inativo por parâmetro:

- **Parâmetro ativo (paletização por transportadora):** o operador **não** realiza o fluxo de Aloca Pallet. Apenas lê a etiqueta de UC no PRIX fixo no final da rampa. O WCS integra automaticamente todas as etiquetas vinculadas à UC na integração de Aloca Pallet.
- **Parâmetro inativo:** o operador é informado no coletor que o Aloca Pallet não será necessário. Apenas a leitura da UC no PRIX é exigida ao final da rampa.

Em ambos os casos o WCS considera os volumes como expedidos e atualiza o dashboard operacional. → ver [[aloca-pallet]].

#### SE `pt1 = no_pal` → OMITE o capítulo de Picking Pallet.

### Agrupador de Rampa — derivado de `pt_ag` e `st_ag`

#### SE `pt_ag` preenchido → ADICIONA subseção "Critério de Agrupamento"
O WCS agrupa os paletes por **`{{pt_agrupador}}`** (ex: transportadora, região, filial) para definir a rampa/stage de destino. Este critério deve ser descrito explicitamente, pois impacta a rotulagem da etiqueta de UC e o direcionamento físico do operador.

#### SE `pt_ag` vazio/tbd → OMITE a subseção de agrupamento; mencionar apenas "rampa de destino definida pela onda".

### Origem da Tarefa — contexto do picking pai

#### SE o picking pallet deriva de **Picking Fullcase** (padrão Beta/Beta Full SP) → FORMULAR como aba dentro da tela de Fullcase
A aba de Picking Pallet aparece dentro da tela de Picking Fullcase. Fluxo pai é o fullcase; o pallet é variante de alto volume.

#### SE o picking pallet deriva de **Picking Exceção** (padrão BP) → FORMULAR como aba dentro da tela de Exceção
A aba de Picking Pallet Exceção aparece dentro da tela de Picking Exceção. Contexto: itens do fluxo de exceção com quantidade elevada de mesmo SKU para um pedido.

#### SE projeto tem picking por **onda com matriz de fragilidade** (padrão Wild Fork) → ADICIONA subseção "Sequência por Matriz de Fragilidade"
As tarefas de picking pallet são divididas em **três passes por matriz de fragilidade**:
- **1º picking:** itens classe 3 (pesados) — posicionados mais próximos ao PTP/stage.
- **2º picking:** itens classe 2 (médios).
- **3º picking:** itens classe 1 (frágeis) — posicionados no topo do pallet.

O WCS calcula a **melhor rota de coleta por corredor/matriz**, considerando cubagem e sequência pesado→frágil, e orienta o operador via coletor. O stage só é liberado para alocação de novo pallet quando **todos os itens** da matriz anterior são removidos. → ver campo `pt_frag`.

### Matriz de Fragilidade — derivado de `pt_frag`

#### SE `pt_frag = yes` → ADICIONA parágrafo sobre matriz de fragilidade
O WCS aplica a **matriz de fragilidade** ao Picking Pallet: itens mais pesados são coletados primeiro e posicionados na base do pallet; itens frágeis ficam no topo. A sequência de coleta gerada pelo WCS já considera esta regra, dispensando orientação manual do operador.

#### SE `pt_frag = no` ou `tbd` → OMITE referência à matriz de fragilidade.

### Romaneio — derivado de `pt9`

#### SE `pt9 = yes` → ADICIONA menção a romaneio
Ao encerrar a montagem do pallet, o WCS gera o **romaneio** com relação de volumes/itens contidos na UC, para acompanhamento físico e conferência na expedição. → ver [[etiquetas]].

### Outras condicionais

#### SE shortpicking ocorre no picking pallet → ver [[shortpicking]]
Tratativa de corte em picking pallet deve ser descrita como variante — geralmente o WCS não faz corte parcial de palete; ou a tarefa é confirmada integralmente ou redirecionada para o fluxo de Picking Exceção fracionado.

#### SE `pt_gate = no` ou `tbd` → OMITE o capítulo de Picking Pallet.

---

## Observações Livres do Kickoff
Campos de texto: `pt_ag` (agrupador), `pt3` (posições), `st_ag` (agrupador de rampa do sorter) e qualquer observação livre.

O ED deve:
- **`pt_ag`** → preencher `{{pt_agrupador}}` na subseção de agrupamento de rampa (ex: "por transportadora", "por filial/destino").
- **`pt3`** → mencionar o número de posições de paletização disponíveis no CD.
- **`st_ag`** → verificar se coincide com `pt_ag`; se divergirem, notar ambos os critérios (picking pallet usa `pt_ag`; sorter usa `st_ag`).
- **Observação que define quantidade mínima de pallet** (ex: "mínimo 10 caixas para virar pallet") → inserir o valor exato como parâmetro nomeado no fluxo, subseção "Acesso à aba de Picking Pallet".
- **Observação que restringe SKUs** (ex: "apenas categoria bebidas") → SUBSTITUIR a abertura do Texto Padrão pela restrição explícita de quais produtos/categorias entram no fluxo de pallet.
- **Observação que adiciona etapa** não coberta pelo padrão → ADICIONAR como subseção nomeada ao final do fluxo, com `[OBS INTERNA]` se precisar de validação da operação.

---

## Regras de Negócio
- **RN-01** (todos): o WCS classifica uma tarefa como Picking Pallet somente quando a quantidade do SKU para o pedido atinge ou supera a **quantidade mínima de pallet** parametrizada no sistema.
- **RN-02** (todos): o pallet é direcionado **diretamente para a rampa/stage de expedição**, sem passar pelo Sorter e sem processamento no PTL.
- **RN-03** (todos): a **etiqueta de UC de pallet** é impressa uma única vez, no início da tarefa, e contém endereço de alocação, número de caixas, ordem de carregamento e área de destino.
- **RN-04** (todos): a confirmação de expedição ocorre pela **leitura da UC no PRIX fixo** ao final da rampa; o WCS marca todos os volumes vinculados à UC como expedidos e dispara a integração.
- **RN-05** (Aloca Pallet ativo): quando o parâmetro de paletização por transportadora está ativo, o processo de Aloca Pallet é **substituído** pela leitura de UC no PRIX — o operador não executa o fluxo de Aloca Pallet.
- **RN-06** (Aloca Pallet inativo): quando o parâmetro está inativo, o fluxo de Aloca Pallet também não é executado; a leitura de UC no PRIX é suficiente.
- **RN-07** (matriz de fragilidade): quando `pt_frag = yes`, a rota de coleta gerada pelo WCS respeita obrigatoriamente a ordem pesado→frágil; o operador não pode reordenar manualmente.
- **RN-08** (Wild Fork / picking por onda): o stage de uma matriz só é liberado para novo pallet **após a remoção de todos os itens** da matriz anterior, controlada pelo WCS.
- **RN-09** (BP — Picking Pallet Exceção): dentro do fluxo de Picking Exceção, o pallet segue para stage sem PTL; o coletor informa explicitamente ao operador que o PTL não será necessário.

---

## Insights e Padrões
### Padrões identificados
- O **bypass de Sorter e PTL** é o denominador comum entre todos os projetos: pallet completo vai direto para stage/rampa, sem processamento adicional de separação. Presente em BP, Beta e Beta Full SP.
- A **aba exclusiva de Picking Pallet** dentro da tela de Fullcase ou Exceção é o padrão de UI consolidado — nunca uma tela separada, sempre uma aba da tela pai.
- A **leitura de UC no PRIX fixo** como gate de expedição aparece nos dois projetos Top 10 (BP e Beta) — é o encerramento padrão do processo.

### Variações significativas
- **BP** denomina "Picking Pallet Exceção" (variante de Picking Exceção); **Beta/Beta Full SP** denominam "Picking Pallet Direto" (variante de Picking Fullcase) — mesma lógica, contextos pais distintos.
- **Wild Fork** (complementar) adiciona camadas de complexidade ausentes nos Top 10: picking por onda (não por pedido), três passes por matriz de fragilidade, rota calculada por corredor, travamento de stage. Indica evolução possível do módulo.
- **BP** tem etiqueta com campo "ordem do pallet no carregamento" — campo específico para sequenciamento de carga, ausente em Beta.
- **Beta/Beta Full SP** explicitam o parâmetro de paletização por transportadora (ativo/inativo), com dois comportamentos distintos — variável de parametrização relevante para o kickoff.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- **Não há campo no kickoff para "quantidade mínima de pallet"** — hoje inferida ou declarada em texto livre. Candidato a campo numérico em `pt` (ex: `pt_qtd_min`).
- **Não há campo para "parâmetro de paletização por transportadora" (ativo/inativo)** — presente no projeto Beta mas sem correspondente no kickoff. Candidato a checkbox em `pt`.
- **Não há distinção explícita entre Picking Pallet Exceção e Picking Pallet Direto** no kickoff — depende do contexto do picking pai. Pode gerar ambiguidade se o projeto tiver os dois fluxos.
- **Picking por onda (Wild Fork)** não tem campos no kickoff — picking route, matrizes de fragilidade para picking e sequenciamento de stage precisam de seção dedicada se esse modelo se tornar recorrente.

### Inferências
- **Inferência:** quando `pt1 = aloca_opt` E o projeto tem sorter (`st1 = yes`), o picking pallet provavelmente bypassa tanto o sorter quanto o aloca pallet — a leitura de UC no PRIX é o único ponto de confirmação. · **Confiabilidade:** alta · **Base:** Beta, Beta Full SP.
- **Inferência:** `picking-pallet` quase sempre coexiste com `picking-fullcase` no mesmo projeto — é sua variante de alto volume, não um módulo independente. · **Confiabilidade:** alta · **Base:** BP, Beta, Beta Full SP.
- **Inferência:** projetos com matriz de fragilidade (`pt_frag = yes`) tendem a precisar de lógica de sequenciamento de picking pallet por corredor — o WCS precisará do cadastro de posições físicas dos SKUs para calcular a rota. · **Confiabilidade:** média · **Base:** Wild Fork (complementar).

## Dependências (grafo)
- **Entra depois de:** [[integracao-pedidos]] (onda com tarefas pallet) → [[order-start]] → [[picking-fullcase]] (fluxo pai) ou [[picking-excecao]] (fluxo pai alternativo)
- **Sai para:** [[expedicao]] (stage/rampa direta) — bypassa [[sorter]] e [[paletizacao-ptl]]
- **Consulta/alimenta:** [[integracao-pedidos]] (integração de Aloca Pallet ao WMS), [[etiquetas]] (etiqueta de UC de pallet + romaneio), [[aloca-pallet]] (parâmetro ativo/inativo)
- **Variante especializada de:** [[picking-fullcase]]
- **Influenciada por:** [[pesagem]] / cubagem (para cálculo de rota quando `pt_frag = yes`)
