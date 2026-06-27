# Sorter — Mapa de Rota — Knowledge Card

> CARD abrangente do tópico **Sorter — Mapa de Rota (Route Map)**. Fonte: Top 10 (BP, BRF Salvador, Beta, CDSK, ELETRO, Market Chile, Market Peru, TITANO, + 2 evidências semânticas) + complementares (Beta Full SP, DIA, Esperança, MARA IV, Optimus Prime, Payless, Peter 2, Wild Fork). O ED usa este arquivo para gerar o capítulo de Mapa de Rota do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`mapa-rota` `route-map` `rota-sorter` `rampa` `ot` `ordem-transporte`
`transportadora` `sinaleiro` `agrupador` `criterio-desvio` `layout-sorter`
`desvio-rampa` `rejeito` `sem-rota` `balanceamento-rampa` `cadenciamento`
`layout-predefinido` `troca-layout` `posto-avancado` `pa` `filial`
`regiao` `loja` `categoria-produto` `tipo-embalagem` `coringa-ptl`
`recirculacao` `rampa-cheia` `mapa-ativo` `kickoff-sorter`

---

## Metadados
- **Bloco:** expedicao
- **Gate:** `st1 = yes` (Tem Sorter?)
- **Subtópicos com CARD próprio:** [[sorter]] (fluxo geral de indução e desvio), [[cross-check]] (gate `st7`), [[paletizacao-ptl]] (gate `pt_gate`)
- **Depende de:** [[sorter]] (infraestrutura de rampas, PLC, integração de desvio), [[integracao-pedidos]] (rota/destino do volume informado via integração)
- **Influencia:** [[sorter]] (o mapa ativo dita para qual rampa cada volume é desviado), [[paletizacao-ptl]] (PTLs vinculados ao mapa em operações com PTL), [[etiquetas]] (em TITANO, o desvio passou a ser dinâmico via número do volume em vez de código fixo na etiqueta)
- **Cruza com:** [[conferencia]] (volumes aprovados chegam ao sorter já com rota definida), [[order-start]] (pedido carrega o destino que alimenta o mapa)

---

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{sorter_tem}}` | `st1` | select | yes / no / tbd |
| `{{sorter_rampas}}` | `st2` | texto livre | número de rampas de saída |
| `{{sorter_rejeito}}` | `st3` | texto livre | descrição da rampa/área de rejeito |
| `{{sorter_cap}}` | `st_cap` | texto livre | capacidade em vol/h |
| `{{sorter_sla}}` | `st4` | texto livre | SLA Portal→1º HPD |
| `{{sorter_criterio}}` | `st_criterio` | select | `regiao`=Região · `transp`=Transportadora · `filial`=Filial/Destino · `outro`=Outro · `tbd` |
| `{{sorter_ag}}` | `st_ag` | texto livre | agrupador da rampa (ex: loja, transportadora, SKU) |
| `{{sorter_sinaleiro}}` | `st10` | select | yes / no / tbd |
| `{{sorter_crosscheck}}` | `st7` | select | yes / no (gate do [[cross-check]]) |

> **Multi-select** não aplicável nesta seção — todos os campos `st_criterio` são select único. `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada presente em todo projeto com `st1 = yes`. O ED parte daqui e aplica as condicionais.)*

O Mapa de Rota (Mapa de Sorter) é a configuração central que determina para qual rampa física cada volume deve ser desviado pelo sorter. Ele vincula um **agrupador** (transportadora, região, filial/loja, tipo de produto ou combinação desses critérios) a uma **rampa de saída**, garantindo que os volumes sejam direcionados automaticamente ao destino correto sem intervenção manual.

**Fluxo de configuração e operação:**

1. **Cadastro inicial do mapa.** O primeiro cadastro das rampas e do mapa de rotas é realizado pela equipe Invent durante o go-live. As alterações posteriores ficam sob responsabilidade da operação do cliente. O acesso à tela de configuração é restrito a usuários com permissão (supervisão ou equipe técnica).

2. **Definição do vínculo agrupador → rampa.** Na tela de Mapa de Sorter, a operação vincula cada agrupador (ver `{{sorter_ag}}` e `{{sorter_criterio}}`) a uma rampa específica. O critério de desvio determina qual atributo do volume/pedido é utilizado para identificar o agrupador (ver Condicionais). Cada vínculo garante que, ao passar pelo portal de leitura, o WCS consulte o mapa ativo e instrua o PLC a desviar o volume para a rampa correta.

3. **Criação de layouts pré-definidos.** O sistema permite salvar múltiplos layouts de mapa de sorter. Cada layout contém os vínculos agrupador→rampa para um cenário operacional específico (ex: turno da manhã, dia de pico, troca de transportadora). Os layouts ficam salvos e visíveis na tela de configuração do mapa.

4. **Troca de layout ativo.** A operação pode alternar entre layouts salvos de forma rápida. A Invent orienta que a troca seja realizada com a operação parada (esteira sem volumes em trânsito), pois volumes em circulação no momento da troca serão desviados para o **rejeito** com motivo "SEM ROTA".

5. **Desvio em operação.** Durante a operação, cada volume que passa pelo portal de leitura tem sua rota identificada pelo WCS com base no mapa ativo. O WCS instrui o PLC a acionar o mecanismo de desvio para a rampa correspondente. O status do volume e o dashboard da rampa são atualizados em tempo real. A transportadora (ou a operação de paletização/PTL) retira os volumes diretamente na rampa de destino.

6. **Tratamento de situações de exceção.** Quando o WCS não encontra rampa para a rota de um volume (sem vínculo no mapa ativo), o volume é enviado para o **rejeito** com motivo "SEM ROTA". O operador deve vincular a rota a uma rampa no mapa e reinserir o volume no sorter (ou conduzi-lo manualmente à rampa e realizar a leitura no scanner fixo). Quando a rampa de destino está cheia (sensor de acúmulo disparado), o volume também é desviado para o rejeito e o sinaleiro da rampa é acionado (ver Condicional `st10`).

---

## Condicionais

### Critério de Desvio — derivado de `st_criterio`

#### SE `st_criterio = transp` (Transportadora) → TEXTO PADRÃO com "transportadora" como agrupador
O vínculo é definido por **transportadora**: cada transportadora é associada a uma ou mais rampas. O WCS lê o atributo de transportadora do volume (informado via integração) e desvia para a rampa correspondente. Quando uma transportadora possui mais de uma rampa associada, o WCS realiza **balanceamento de desvio** entre as docas, considerando a quantidade de volumes por SKU e o histórico recente de utilização, para evitar concentração em uma única rampa. *(Base: ELETRO, BRF Salvador, Peter 2, BP.)*

Variação ELETRO: a rampa pode ser configurada como **PA (Posto Avançado)**. Essa informação é retornada ao WMS na integração de desvio (campo `PA`), permitindo destinos distintos para a mesma loja (ex: "BRASPRESS" e "BRASPRESS PA"). O agrupador **não** pode ser vinculado a mais de uma rampa simultaneamente; ao vincular a uma nova rampa, o vínculo anterior é removido automaticamente.

#### SE `st_criterio = regiao` (Região) → TEXTO PADRÃO com "região" como agrupador
O vínculo é definido por **região geográfica de destino**: cada região (ex: Zona Sul, Centro-Oeste) é associada a uma rampa. O WCS lê o atributo de região do volume e desvia conforme o mapa. *(Base: Peter 2 — destino por cidade/estado; Wild Fork — rota por zona.)*

#### SE `st_criterio = filial` (Filial/Destino) → TEXTO PADRÃO com "loja/filial" como agrupador
O vínculo é definido por **loja ou filial de destino**: cada loja/filial é associada a uma rampa (ou PTL). O WCS lê o código de destino do volume e desvia conforme o mapa. *(Base: CDSK, DIA, Market Chile, Market Peru, Esperança, Optimus Prime.)*

Variação CDSK: o agrupador **pode** ser vinculado a mais de uma rampa simultaneamente. Quando isso ocorre, o WCS **cadencia** os volumes entre as rampas vinculadas ao mesmo destino, evitando sobrecarga em uma única rampa.

Variação Optimus Prime: alguns destinos são agrupados em **HUBs ou CDs** intermediários; a operação cadastra esses agrupamentos no WCS para que a triagem seja feita corretamente. Posições **coringa** (sem destino fixo) podem ser configuradas para receber overflow; se todas estiverem ocupadas, o volume vai para rejeito com motivo "sem PTL disponível".

#### SE `st_criterio = outro` ou `tbd` → OMITIR subseção de critério / levantar na reunião de kickoff
Critério não definido ou atípico. Registrar como lacuna e verificar com a operação antes de redigir a especificação.

---

### Agrupador da Rampa — derivado de `st_ag`

#### SE `st_ag` preenchido → ADICIONA caracterização do agrupador no Texto Padrão
O campo `st_ag` descreve o(s) atributo(s) que compõem o agrupador (ex: "loja + categoria de produto", "transportadora", "tipo de embalagem"). Mencionar explicitamente no capítulo qual é o agrupador utilizado e se há combinação de atributos (ex: loja × categoria × tipo de embalagem como em CDSK, Market Chile e Market Peru).

#### SE `st_ag` vazio/tbd → usar o critério de `st_criterio` como agrupador único
Quando não há agrupador composto, o critério de desvio (`st_criterio`) é o próprio agrupador.

---

### Sinaleiro nas Rampas — derivado de `st10`

#### SE `st10 = yes` → ADICIONA subseção "Sinaleiro"
Cada rampa possui um **sinaleiro** (dispositivo de sinalização luminosa/sonora) que indica o estado da rampa em tempo real. O sinaleiro é acionado quando a rampa está cheia (sensor de acúmulo disparado), alertando o operador para esvaziá-la antes de o sorter enviar novos volumes. Enquanto o sinaleiro está ativo, volumes destinados àquela rampa são desviados para o rejeito. *(Base: Payless — sinaleiro acionado em rampa cheia.)*

#### SE `st10 = no` ou `tbd` → OMITIR subseção de sinaleiro

---

### SLA Portal → 1º HPD — derivado de `st4`

#### SE `st4` preenchido → ADICIONA subseção "SLA de Processamento"
O SLA de `{{sorter_sla}}` define o tempo máximo entre a leitura do volume no portal do sorter e o primeiro HPD (Hora Prevista de Despacho) registrado no sistema. Esse parâmetro é monitorado pelo WCS e pode acionar alertas quando violado. Registrar o valor exato informado no kickoff.

#### SE `st4` vazio/tbd → OMITIR subseção de SLA

---

### Recirculação — derivado de `st_rc`

#### SE `st_rc = yes` → ADICIONA nota de recirculação no tratamento de exceção
Quando a recirculação está ativa, volumes sem rota ou destinados a rampa cheia **não são imediatamente rejeitados**: eles aguardam na malha do sorter enquanto o operador resolve a pendência (vincula a rota no mapa ou esvazia a rampa). Após a resolução, o volume é classificado na próxima passagem pelo portal. Se a recirculação não resolver dentro de um número configurável de voltas, o volume é então enviado ao rejeito.

#### SE `st_rc = no` ou `tbd` → volumes sem rota vão direto ao rejeito (comportamento padrão)

---

### Desvio Dinâmico via Número do Volume (TITANO) — condicional de projeto específico

#### SE o projeto migra de etiqueta com rampa fixa para rota dinâmica via WMS → ADICIONA subseção "Desvio Dinâmico"
Em substituição ao modelo de código de barras fixo (que informava diretamente a rampa na etiqueta), o WCS passa a utilizar o **número do volume** para consultar a rota enviada pelo WMS. O sorter lê o número do volume no portal e o WCS retorna a rampa de destino em tempo real. Isso elimina a etiqueta com rampa pré-impressa e torna o desvio dinâmico e controlado pelo WMS, aumentando rastreabilidade e flexibilidade operacional. *(Base: TITANO.)*

---

## Observações Livres do Kickoff

O ED deve:

- **`st2`** → mencionar o número total de rampas de saída na abertura do capítulo (ex: "O sorter conta com N rampas de saída"). Detalhar se houver rampas dedicadas a tipos de carga específicos.
- **`st3`** → descrever a rampa/área de rejeito e quando ela é acionada (sem rota, rampa cheia, falha de leitura).
- **`st_cap`** → mencionar a capacidade de throughput (vol/h) como dado de dimensionamento, não como regra de negócio.
- **`st4`** → preencher `{{sorter_sla}}` com o valor exato e adicionar a subseção de SLA conforme a condicional.
- **`st_ag`** → se o agrupador for composto (ex: loja + categoria), descrever a combinação no texto e nas RNs.
- **Observação que restringe a troca de layout** (ex: "só pode trocar com operação parada") → INSERIR como advertência explícita na subseção de troca de layout, com destaque.
- **Observação sobre posição PA** (ex: "algumas rampas são PA") → INSERIR como variação dentro do critério `transp`, conforme padrão ELETRO.
- **Observação sobre posição coringa** → INSERIR como variação dentro do critério `filial`, conforme padrão Optimus Prime.

---

## Regras de Negócio

- **RN-01** (todos): o mapa ativo determina para qual rampa cada volume é desviado; sem vínculo ativo para o agrupador do volume, o WCS envia o volume para o rejeito com motivo **"SEM ROTA"**.
- **RN-02** (todos): a troca de layout deve preferencialmente ser realizada com a operação parada; volumes em trânsito no momento da troca são desviados para rejeito com motivo "SEM ROTA".
- **RN-03** (todos): o acesso à tela de configuração do Mapa de Sorter é restrito a usuários com permissão (supervisão/técnico).
- **RN-04** (todos): o primeiro cadastro de rampas e mapa é de responsabilidade da Invent; alterações posteriores são de responsabilidade da operação do cliente.
- **RN-05** (`st_criterio = transp`, múltiplas rampas por transportadora): quando uma transportadora possui mais de uma rampa, o WCS realiza **balanceamento de desvio** entre elas, considerando volume por SKU e histórico de utilização das docas.
- **RN-06** (ELETRO e similares — agrupador exclusivo): o agrupador **não** pode estar vinculado a mais de uma rampa simultaneamente; ao vincular a uma nova rampa, o vínculo anterior é removido automaticamente.
- **RN-07** (CDSK, Market Chile, Market Peru e similares — agrupador múltiplo): o agrupador **pode** ser vinculado a mais de uma rampa; o WCS **cadencia** os volumes entre as rampas vinculadas ao mesmo destino para evitar sobrecarga.
- **RN-08** (`st10 = yes`): rampa com sensor de acúmulo disparado tem o sinaleiro acionado; volumes destinados a ela são desviados para rejeito enquanto o sinaleiro está ativo.
- **RN-09** (`st_rc = yes`): com recirculação ativa, volumes sem rota aguardam na malha e são reclassificados na próxima passagem; o envio ao rejeito ocorre após o esgotamento do número de recirculações configurado.
- **RN-10** (Optimus Prime): posições **coringa** recebem overflow de destinos sobrecarregados; se a coringa também estiver ocupada, o volume vai para rejeito com motivo "sem PTL disponível".
- **RN-11** (TITANO — desvio dinâmico): o desvio via número do volume elimina a rampa pré-impressa na etiqueta; a rota é consultada pelo WCS em tempo real junto ao WMS no momento da leitura no portal.
- **RN-12** (Payless): a vinculação de rota a rampa pode ser feita em tempo real pelo operador durante a operação, sem necessidade de parar a esteira; alterações têm efeito imediato.

---

## Insights e Padrões

### Padrões identificados

- O **núcleo funcional** (cadastrar mapa, vincular agrupador→rampa, criar layouts, trocar layout, desviar em operação, tratar rejeito) é idêntico em BP, CDSK, ELETRO, Market Chile, Market Peru, DIA, Esperança, Optimus Prime e Peter 2 — é o padrão consolidado do produto.
- A **advertência de troca com operação parada** aparece literalmente em ELETRO, Market Chile e Market Peru — é um padrão editorial que deve sempre estar presente.
- A tela de mapa é **sempre** de acesso restrito por permissão — sem exceção nos projetos observados.
- "SEM ROTA" como motivo de rejeito aparece em ELETRO e Payless, mas o comportamento é universal.

### Variações significativas

- **ELETRO**: agrupador exclusivo (1 rampa por agrupador, troca automática); diferenciação de **Posto Avançado (PA)** retornada ao WMS.
- **CDSK / Market Chile / Market Peru**: agrupador múltiplo (cadenciamento entre rampas); critério composto (loja + categoria + tipo de embalagem).
- **BRF Salvador**: balanceamento de desvio por SKU e histórico de docas — lógica mais sofisticada que o simples round-robin.
- **TITANO**: migração de desvio fixo (código na etiqueta) para **desvio dinâmico via WMS** — inversão do modelo de controle.
- **Optimus Prime**: posição **coringa** como buffer de overflow; cadastro de HUBs/CDs como agrupadores intermediários.
- **Payless**: alteração do mapa **em tempo real sem parar a esteira** — exceção à regra RN-02; compatível com recirculação.
- **Wild Fork**: denominação "Sorter Map" / "docas virtuais"; vínculo por QR Code de posição física — terminologia e UI distintas.
- **Peter 2**: critério múltiplo no mesmo layout (transportadora, pedido, destino) — flexibilidade atípica de agrupadores.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)

- Não há campo no kickoff para "**agrupador exclusivo vs múltiplo**" (RN-06 vs RN-07) — hoje inferido pelo projeto. Candidato a checkbox ou select em `st_ag`.
- Não há campo para "**troca de layout com operação ativa**" (Payless) — hoje tratado como exceção sem registro formal. Candidato a checkbox.
- Não há campo para "**posição coringa**" (Optimus Prime) — aparece em texto livre. Candidato a checkbox.
- O campo `st_ag` é texto livre — não há validação de combinação de atributos (loja × categoria × tipo de embalagem). Candidato a multi-select estruturado.
- Não há campo para **número máximo de recirculações** — quando `st_rc = yes`, o threshold fica indefinido no kickoff.

### Inferências

- **Inferência:** quando `st_criterio = filial` e o cliente opera com múltiplas categorias de produto, o agrupador quase sempre é composto (loja + categoria). **Confiabilidade:** alta. **Base:** CDSK, DIA, Market Chile, Market Peru.
- **Inferência:** projetos com `st_rc = yes` tendem a aceitar troca de mapa com operação ativa (Payless). **Confiabilidade:** média. **Base:** 1 projeto explícito; não confirmado nos demais com recirculação.
- **Inferência:** quando `st_criterio = transp` e há mais de 1 rampa por transportadora, o balanceamento de desvio (RN-05) é implícito mesmo sem menção explícita no kickoff. **Confiabilidade:** média. **Base:** BRF Salvador; ausência de contra-evidência.

---

## Dependências (grafo)

- **Entra depois de:** [[integracao-pedidos]] (rota/destino do volume), [[sorter]] (infraestrutura de rampas e PLC pronta)
- **Sai para:** [[sorter]] (mapa ativo alimenta o motor de desvio), [[paletizacao-ptl]] (rampas com PTL usam o mapa para direcionar volumes às posições de pallet)
- **Consulta/alimenta:** [[integracao-pedidos]] (atributo PA retornado ao WMS em ELETRO), [[etiquetas]] (em TITANO, o número do volume substitui o código de rampa na etiqueta)
- **Variante paralela:** [[cross-check]] (gate `st7`, validação de SKU no portal antes do desvio)
- **Conflito potencial:** [[sorter]] — a troca de mapa com volumes em trânsito gera rejeito; coordenar com o fluxo operacional do [[sorter]]
