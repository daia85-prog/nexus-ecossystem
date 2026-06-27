# Paletização — Knowledge Card

> CARD abrangente do tópico **Paletização** (Aloca Pallet / fechamento de pallet na expedição). Fonte: Top 10 (BP, BRF Salvador, Beta, CDSK, Market Chile, Market Peru, NavePark) + complementares (BR, BRF Jundiaí, Beta Full SP, DIA, Esperança, Optimus Prime, Payless, Wild Fork). O ED usa este arquivo para gerar o capítulo de Paletização do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.
> **Escopo deste CARD:** o fechamento geral de pallet e a alocação por coletor/TV (`aloca_opt`). Quando `pt1 = ptl_opt` o detalhamento da alocação por displays físicos vai em [[ptl-alocacao]]; quando `pt1 = ptm_opt`, em [[ptm]]. Aqui referenciamos esses dois sem detalhar.

## Tags
`paletizacao` `paletização` `pt_gate` `aloca-pallet` `aloca_opt` `fechamento-de-pallet`
`fechamento-pallet` `cubagem-de-pallet` `cubagem-pallet` `peso-maximo-pallet` `cubagem-seguranca`
`gatilho-fechamento` `fechamento-automatico` `fechamento-manual` `fechamento-logico` `fim-de-transporte`
`etiqueta-master` `pallet-master` `codigo-master` `rg-pallet` `leitura-posicao` `romaneio` `pt9`
`agrupador` `pt_ag` `rota-transportadora` `matriz-de-fragilidade` `pt_frag` `itens-perigosos` `pt8`
`pallet-montado` `coletor-android` `tv-rampa` `led-pallet` `integracao-wms-pallet`

## Metadados
- **Bloco:** expedicao
- **Gate:** `pt_gate = yes` (Tem Palletização & PTL?)
- **Subtópicos com CARD próprio:** [[ptl-alocacao]] (gate `pt_tem_ptl = yes` — displays físicos PTL), [[ptm]] (gate `pt_ptm = yes` — Put to Monitor)
- **Depende de:** [[sorter]] (desvio dos volumes para as rampas), [[cubagem]] (dimensões/peso por volume que alimentam o cálculo), [[integracao-pedidos]] (rota/transportadora/transporte na wave)
- **Influencia:** [[etiquetas]] (impressão da etiqueta master, quando do WCS), [[integracao-pedidos]] (envio do "Pallet Montado" ao WMS)
- **Cruza com:** [[sorter]] · [[etiquetas]] · [[cubagem]]

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{pt_tem}}` | `pt_gate` | YN | yes / no / tbd |
| `{{pt_tipo}}` | `pt1` | select | `no_pal`=Sem paletização · `ptl_opt`=PTL → [[ptl-alocacao]] · `ptm_opt`=PTM → [[ptm]] · `aloca_opt`=Aloca Pallet · tbd |
| `{{pt_posicoes}}` | `pt3` | texto livre | nº de posições de paletização/rampa |
| `{{pt_frag}}` | `pt_frag` | YN | matriz de fragilidade |
| `{{pt_agrupador}}` | `pt_ag` | texto livre | critério de agrupamento (rota, transportadora, loja, destino) |
| `{{pt_perigosos}}` | `pt8` | YN | itens perigosos |
| `{{pt_romaneio}}` | `pt9` | YN | romaneio |

> `tbd`/vazio → omitir a subseção correspondente. `pt1 = no_pal` → omitir o capítulo inteiro de Paletização.

---

## Texto Padrão
*(Base detalhada presente em todo projeto com `pt_gate = yes` e `pt1` ≠ `no_pal`. O ED parte daqui e aplica as condicionais. O detalhamento por displays físicos PTL / PTM fica nos CARDs próprios.)*

A Paletização é a etapa de expedição em que os volumes já triados são **agrupados em pallets** conforme rota e transportadora, garantindo organização e rastreabilidade até a doca. Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de **alocação de pallet (Aloca Pallet)**, realizado com auxílio de um **coletor Android** ou da **TV da rampa**, que se comunicam diretamente com o WCS. *(O desvio no Sorter não é obrigatório para a paletização, desde que os volumes estejam devidamente integrados e vinculados ao pallet no WCS — ver RN-07.)*

**Fluxo operacional padrão:**

1. **Abertura/alocação do pallet.** A cada volume direcionado à rampa/posição, o operador (via coletor ou TV) aloca o volume ao pallet em montagem para aquele agrupamento (rota/transportadora). O WCS acumula, em tempo real, a cubagem (m³), o peso (kg) e a quantidade de volumes do pallet.

2. **Cubagem do pallet.** O operador cadastra previamente no WCS a **cubagem (m³) e o peso (kg) máximos** suportados pelo pallet, além de uma **cubagem e peso de segurança**. O WCS calcula a ocupação usando as dimensões e o peso de cada volume recebidos via integração (induzidos no Sorter / Cadastro de Produtos). Ao atingir o valor de **segurança**, o operador é **notificado** (via coletor ou cor do LED) de que o pallet se aproxima do limite e deve ser fechado.

3. **Gatilho de fechamento.** Ao atingir o **limite** configurado de cubagem e/ou peso, o WCS **não permite mais alocar volumes** naquele pallet e dispara o fechamento (ver **Condicionais — Gatilhos de Fechamento**). O fechamento pode ser **automático** (limite físico atingido), **lógico** (fim de transporte/pedido — sem mais volumes previstos para aquele destino) ou **manual/forçado** pelo operador.

4. **Fechamento e leitura da master.** No fechamento, o WCS solicita a **leitura da etiqueta master** do pallet — o identificador único do pallet master (RG / código master). No fechamento manual, o operador realiza a **leitura do código da posição** (ex.: `FPP001`) **3 vezes consecutivas** e, após a validação, o coletor solicita a leitura da etiqueta master; após a leitura, o WCS conclui o fechamento. A impressão da etiqueta master física é, na maioria dos projetos, responsabilidade da **operação/WMS**; o WCS apenas registra o RG lido para rastreabilidade (ver RN-06 e a condicional de etiqueta master pelo WCS).

5. **Pallet Montado — integração com o WMS.** Concluído o fechamento, o WCS envia ao WMS a integração de **"Pallet Montado"**, contendo a relação de todos os volumes pertencentes ao pallet (código do pallet/RG, volumes/CODACESSO, quantidades, datas de abertura e fechamento). O WMS realiza as tratativas necessárias.

6. **Liberação da posição.** Após o fechamento, o pallet é liberado para a doca de expedição (operador cola a etiqueta no stretch e libera). A posição/rampa permanece **ocupada** até ser reaberta pelo código de abertura de posição, liberando-a para montar um novo pallet.

---

## Condicionais

### Tipo de Paletização — derivado de `pt1`

#### SE `pt1 = aloca_opt` (Aloca Pallet) → mantém o Texto Padrão como está
Alocação por **coletor Android** ou **TV da rampa**; agrupamento por rota/transportadora; fechamento por cubagem/peso/manual. É o cenário-base deste CARD.

#### SE `pt1 = ptl_opt` (PTL) → SUBSTITUI a etapa de alocação → ver [[ptl-alocacao]]
A alocação ocorre por **displays físicos PTL** (ou tablet), com o operador guiado por posição/LED. O fechamento por cubagem/peso e o "Pallet Montado" permanecem como no Texto Padrão, mas a mecânica da alocação é detalhada em [[ptl-alocacao]] (gate `pt_tem_ptl`). *(Não detalhar aqui — apenas cross-ref.)*

#### SE `pt1 = ptm_opt` (PTM — Put to Monitor) → SUBSTITUI a etapa de alocação → ver [[ptm]]
A alocação é guiada por **monitor (Put to Monitor)** em vez de displays/coletor. Detalhamento em [[ptm]] (gate `pt_ptm`). *(Apenas cross-ref.)*

#### SE `pt1 = no_pal` ou `pt_gate ≠ yes` → OMITE o capítulo inteiro de Paletização.

### Gatilhos de Fechamento — derivado da evidência (default: cubagem + peso + manual)
*(Subseção "Gatilhos de Fechamento". O default é cubagem/peso automático + forçado manual; adicionar os demais conforme o projeto.)*

#### Gatilho — Cubagem/Peso (Automático Físico) → SEMPRE presente (default)
Ao atingir o limite de m³ e/ou kg configurado, o WCS bloqueia novas alocações e fecha automaticamente, solicitando a leitura da etiqueta após a alocação do volume. Notificação prévia ao atingir a margem de segurança (LED/coletor).

#### Gatilho — Manual/Forçado nas Rampas → SEMPRE presente (default)
O operador força o fechamento (pallet instável, fim de turno, avaliação visual). No fluxo padrão: leitura do código da posição 3×, depois leitura da master. *(Em projetos PTL, força via botão de função no display — NavePark.)*

#### Gatilho — Via Tela de Fechamento (forçado por interface) → ADICIONA se o projeto tiver tela de fechamento
Fechamento manual por uma interface específica do WCS (não no coletor/rampa). *(CDSK, DIA.)*

#### SE há fechamento Lógico / Fim de Transporte → ADICIONA gatilho "Fechamento Lógico"
O pallet é fechado automaticamente quando **não há mais volumes previstos** para aquele transporte/rota/cliente. *(NavePark — "Fim de Transporte"; Wild Fork — "Fim de Pedido"; DIA — "Finalização de todos os pedidos de uma loja".)*

### Agrupador — derivado de `pt_ag` (texto livre)

#### SE `pt_ag` preenchido → ADICIONA/ESPECIFICA o critério de agrupamento na etapa 1
Substituir "rota e transportadora" pelo critério informado (ex.: rota, transportadora, **loja**, filial/destino). Em projetos de varejo o agrupamento por **loja** é comum (DIA). → cruza com critério de desvio de rampa do [[sorter]] (`st_criterio`).

### Matriz de Fragilidade — derivado de `pt_frag`

#### SE `pt_frag = yes` → ADICIONA subseção "Matriz de Fragilidade"
O empilhamento/direcionamento dos volumes no pallet respeita a **resistência do produto** (leve → médio → pesado), evitando esmagamento de itens frágeis. A classificação chega na integração (campo `MATRIZFRAGILIDADE` / `MATRIZ DE FRAGILIDADE` por volume). *(Esperança; também aparece como restrição de mistura de categorias no picking — BP, ver RN-08.)* `[OBS INTERNA]` confirmar se a matriz atua na ordem de alocação no pallet ou apenas na separação a montante.

### Itens Perigosos — derivado de `pt8`

#### SE `pt8 = yes` → ADICIONA subseção "Itens Perigosos"
Itens perigosos têm regra de agrupamento/segregação específica no pallet. `[OBS INTERNA]` não há descrição detalhada na evidência bruta deste tópico; tratar como subseção a validar com a operação (regra de não-mistura e/ou pallet dedicado).

### Romaneio — derivado de `pt9`

#### SE `pt9 = yes` → ADICIONA subseção "Romaneio"
Ao fechar o pallet/carga, o WCS gera/disponibiliza o **romaneio** (relação consolidada dos volumes/pallets por transporte) para conferência e expedição. `[OBS INTERNA]` a evidência bruta deste tópico não detalha o layout do romaneio; o "Pallet Montado" (relação de volumes ao WMS) é o insumo natural. Validar formato (impresso vs. integração) com a operação.

### Posições — derivado de `pt3`

#### SE `pt3` preenchido → mencionar o nº de posições de paletização/rampa
Na abertura do capítulo (ex.: "A operação conta com N posições de paletização").

### Etiqueta Master / Responsabilidade de Impressão

#### SE a impressão da etiqueta master é do WCS → ADICIONA em "Fechamento e leitura da master"
O WCS **imprime automaticamente** a etiqueta master ao fechar (dados da carga consolidada), e o operador a cola no stretch. *(NavePark.)* Caso contrário (default), a impressão é da operação/WMS e o WCS só registra o RG lido.

---

## Observações Livres do Kickoff
Campos de texto: `pt3` (posições), `pt_ag` (agrupador) e qualquer observação livre.

O ED deve:
- **`pt3`** → preencher `{{pt_posicoes}}` na abertura do capítulo.
- **`pt_ag`** → preencher `{{pt_agrupador}}` e ajustar o critério de agrupamento da etapa 1.
- **Observação sobre limites** (peso/altura máximos, % de segurança — ex.: Payless "peso máx [A DEFINIR] kg, margem [A DEFINIR]%") → preencher os parâmetros de cubagem/peso e segurança na etapa 2, mantendo `[OBS INTERNA]` para valores ainda a definir.
- **Observação que adiciona gatilho** (ex.: fechamento por fim de loja/transporte) → ADICIONAR como gatilho nomeado na subseção "Gatilhos de Fechamento".
- **Observação que adiciona etapa** não coberta pelo padrão → ADICIONAR como subseção nomeada, com `[OBS INTERNA]` se precisar de validação.

---

## Regras de Negócio
- **RN-01** (todos): a paletização agrupa os volumes por rota/transportadora (ou critério de `pt_ag`); o WCS acumula cubagem, peso e quantidade do pallet em tempo real.
- **RN-02** (todos com cubagem): ao atingir a **cubagem/peso de segurança**, o WCS notifica o operador (coletor ou cor do LED); ao atingir o **limite máximo**, bloqueia novas alocações e fecha o pallet.
- **RN-03** (todos): o cálculo de cubagem/peso usa dimensões e peso dos volumes recebidos via integração (induzidos no Sorter / Cadastro de Produtos). → [[cubagem]].
- **RN-04** (fechamento manual padrão — Beta, Beta Full SP, CDSK): fechamento manual exige leitura do **código da posição 3×** consecutivas e, em seguida, leitura da **etiqueta master (RG)**.
- **RN-05** (todos): concluído o fechamento, o WCS envia ao WMS a integração **"Pallet Montado"** com a relação de todos os volumes do pallet.
- **RN-06** (maioria — Beta, Beta Full SP, CDSK, DIA): a **impressão** da etiqueta master é responsabilidade da **operação/WMS/Consinco**; o WCS apenas registra o RG lido. **Exceção (NavePark):** o WCS imprime a etiqueta master automaticamente.
- **RN-07** (Beta, Beta Full SP): o **desvio no Sorter não é obrigatório** para a paletização, desde que os volumes estejam integrados e vinculados ao pallet no WCS.
- **RN-08** (BP — específico de projeto): controle de **mistura de categorias** no picking fracionado — tela que define categorias que não podem coexistir no mesmo volume; validado na cubagem/criação das caixas. *(Especificidade BP; precursor lógico da matriz de fragilidade.)*
- **RN-09** (Optimus Prime — específico de projeto): posição permanece **ocupada** após o fechamento até ser reaberta pelo código de abertura; em falta de posição para um destino, volumes vão ao **rejeito** até liberar posição. PTL é equipamento de alta performance → prioridade máxima na retirada de pallets finalizados.
- **RN-10** (DIA — específico de projeto): gatilho extra de fechamento por **finalização de todos os pedidos de uma loja**; retorno ao WMS via tabela `SORTER.GPT_RETORNO_MONTAGEM_PALETES`.
- **RN-11** (BRF Salvador — específico de projeto, fluxo de armazenagem/transelevador): o **BK25** avalia o pallet no portal (tombamento por lado, palete quebrado, altura, peso) e decide armazenagem × rejeito; sequenciamento FIFO de paletes em posição (drive-in 1–3, porta-palete só 1). *(Cenário de movimentação/estoque, não de paletização de expedição — ver Lacunas.)*

## Insights e Padrões
### Padrões identificados
- **Cubagem de pallet é o núcleo mais estável** do tópico: o texto "Operador deverá cadastrar previamente no WCS a cubagem (m³) e peso (kg) máximo... fechar ao atingir 1M³..." é **praticamente idêntico** em Beta, CDSK, Market Peru, BR e Beta Full SP — texto-modelo reutilizável quase literalmente.
- **Três gatilhos recorrem**: Automático (cubagem/peso), Lógico (fim de transporte/pedido/loja) e Manual/Forçado. NavePark e Wild Fork verbalizam os três; DIA e CDSK listam quatro (somando "via tela" e "nas rampas").
- **Notificação por LED/coletor** ao atingir a segurança é universal; varia só o meio (coletor Android vs. cor do LED).
- **"Pallet Montado" → WMS** ao fechar é invariante.

### Variações significativas
- **Meio de notificação/alocação:** Beta/BR/Beta Full SP usam **coletor Android / TV da rampa**; CDSK/Market Peru/DIA enfatizam **LED** (cor). Market Chile explicita **modo configurável** (manual via PTL vs. automático por cubagem/peso).
- **Origem das dimensões para cubagem:** maioria diz "volumes induzidos no Sorter"; **Market Chile** diz **Cadastro de Produtos** — divergência de fonte do dado.
- **Etiqueta master:** **NavePark** imprime pelo WCS; demais deixam para operação/WMS.
- **Limite por altura:** **NavePark e Payless** citam **altura** como gatilho (além de peso/cubagem); a maioria usa só cubagem/peso.
- **DIA** usa agrupamento por **loja** e retorno por tabela dedicada de banco.
- **BRF Salvador** é um outlier: o "pallet" aparece no contexto de **armazenagem/transelevador/BK25**, não de expedição — vocabulário sobreposto, fluxo distinto.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- **`pt8` (itens perigosos)** e **`pt9` (romaneio)** não têm evidência descritiva neste tópico — os textos são inferidos. Candidatos a coleta de descrição-base em projeto real.
- **`pt_frag` (matriz de fragilidade)**: a evidência (Esperança, BP) é sobre **separação/mistura**, não sobre ordem de empilhamento no pallet — ambiguidade de escopo.
- Não há campo no kickoff distinguindo **gatilho lógico (fim de transporte/loja)** de gatilho físico — hoje some no texto livre. Candidato a multi-select de gatilhos.
- **Altura máxima** como parâmetro de fechamento não tem campo próprio (só peso/cubagem implícitos em `pt1`).
- Fluxo de **armazenagem por transelevador/BK25** (BRF Salvador) não pertence a este gate — sugere CARD separado de [[armazenagem]]/[[transelevador]].

### Inferências
- **Inferência:** quando `pt1 = aloca_opt`, o fechamento por cubagem/peso está quase sempre presente (é o default do texto-modelo). · **Confiabilidade:** alta · **Base:** Beta, BR, Beta Full SP, Market Peru, CDSK.
- **Inferência:** projetos com `pt_tem_ptl = yes` tendem a usar fechamento lógico por fim de transporte (alta performance, retirada rápida). · **Confiabilidade:** média · **Base:** NavePark, Optimus Prime.
- **Inferência:** `pt9 = yes` (romaneio) reaproveita o payload do "Pallet Montado" como insumo. · **Confiabilidade:** baixa · **Base:** ausência de evidência dedicada; inferido do fluxo de integração.

## Dependências (grafo)
- **Entra depois de:** [[sorter]] (volumes desviados às rampas) ← [[cubagem]] (dimensões/peso por volume)
- **Sai para:** [[etiquetas]] (etiqueta master, quando WCS imprime) → doca de expedição
- **Consulta/alimenta:** [[integracao-pedidos]] (rota/transportadora/transporte na wave; envio do "Pallet Montado" ao WMS)
- **Variantes de alocação:** [[ptl-alocacao]] (gate `pt_tem_ptl`, `pt1=ptl_opt`) · [[ptm]] (gate `pt_ptm`, `pt1=ptm_opt`)
