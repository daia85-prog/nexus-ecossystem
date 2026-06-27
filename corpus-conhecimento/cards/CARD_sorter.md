# Sorter — Knowledge Card

> CARD abrangente do tópico **Sorter** (classificador automático de volumes). Fonte: Top 10 (BP, BRF Salvador, Beta, CDSK, ELETRO, Market Chile, Market Peru, NavePark, TITANO) + complementares (BR, Barbecue, Beta Full SP, DIA, Esperança, Gavião, MARA IV, MASTER, Optimus Prime, Payless, Peter 2, Reverse). O ED usa este arquivo para gerar o capítulo de Sorter do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.
>
> **Escopo deste CARD = núcleo do sorter** (fluxo de comunicação WCS↔PLC/MFC, portal de leitura/câmera, capacidade, balanceamento, IA). Os subtópicos com CARD próprio — [[sorter-inducao]], [[sorter-rejeito]], [[sorter-mapa-rota]] — são apenas **referenciados aqui**, não detalhados (Round 2).

## Tags
`sorter` `classificador` `sorteamento` `cross-belt` `chute` `rampa` `rampa-saida`
`portal-de-leitura` `portal-de-camera` `faces-de-leitura` `leitura-codigo-barras` `qr-code` `code128` `dun14`
`plc` `clp` `mfc` `controlador-logico` `comunicacao-wcs-plc` `conversor` `scanner-fixo`
`induções` `indução` `balanceamento` `balanceamento-rampas` `cadenciamento` `mapa-de-rota` `mapa-de-destinos`
`desvio` `desvio-dinamico` `transportadora` `rota` `loja-destino` `agrupador`
`capacidade-vol-h` `sla` `recirculacao` `rejeito` `noread` `read` `checkout` `crosscheck`
`ia` `inteligencia-artificial` `camera-ia` `multiplos-codigos` `tv-dashboard` `sinaleiro`

## Metadados
- **Bloco:** expedicao
- **Gate:** `st1 = yes`
- **Subtópicos com CARD próprio (NÃO detalhar aqui — só referenciar):** [[sorter-inducao]] (`st5`), [[sorter-rejeito]] (`st3` / `st_rc`), [[sorter-mapa-rota]] (`st_criterio` / `st_ag`)
- **Depende de:** [[order-start]] · [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (origem dos volumes induzidos) · [[etiquetas]] (volume precisa de etiqueta WCS válida) · [[integracao-pedidos]] (rota/destino do volume)
- **Influencia:** [[paletizacao]] (PTL/PTM nas saídas das rampas) · [[expedicao]]/docas
- **Cruza com:** [[cross-check]] (gate `st7` — validação SKU×pedido no portal) · [[paletizacao]] · [[etiquetas]] · [[integracao-wcs-wms]] · [[conferencia]] (volume aprovado segue p/ sorter)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{sorter_tem}}` | `st1` | YN | yes / no / tbd **[GATE]** |
| `{{sorter_rampas_saida}}` | `st2` | texto livre | nº de rampas de saída |
| `{{sorter_rejeito}}` | `st3` | texto livre | rampa(s) de rejeito → ver [[sorter-rejeito]] |
| `{{sorter_capacidade}}` | `st_cap` | texto livre | capacidade em volumes/hora |
| `{{sorter_sla}}` | `st4` | texto livre | SLA Portal → 1º HPD |
| `{{sorter_inducao}}` | `st5` | texto livre | nº/tipo de pontos de indução → ver [[sorter-inducao]] |
| `{{sorter_portal_faces}}` | `st6` | texto livre | nº de faces do portal de leitura |
| `{{sorter_criterio}}` | `st_criterio` | select | `regiao`=Região · `transp`=Transportadora · `filial`=Filial/Destino · outro · tbd → ver [[sorter-mapa-rota]] |
| `{{sorter_crosscheck}}` | `st7` | YN | **[GATE cross-check]** → ver [[cross-check]] |
| `{{sorter_sinaleiro}}` | `st10` | select | yes / no / tbd |
| `{{sorter_ia}}` | `st11` | YN | IA no portal? |
| `{{sorter_tvs_ia}}` | `st11_tvs` | texto livre | qtd de TVs IA [st11:yes] |
| `{{sorter_recirculacao}}` | `st_rc` | YN | recirculação antes do rejeito → ver [[sorter-rejeito]] |
| `{{sorter_agrupador}}` | `st_ag` | texto livre | agrupador da rampa → ver [[sorter-mapa-rota]] |

> Campos `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com `st1 = yes`. O ED parte daqui e aplica as condicionais. Estrutura recorrente e quase idêntica entre BP, ELETRO, TITANO, NavePark, Beta, BR, Beta Full SP.)*

O Sorter é o equipamento de **classificação automática** que direciona cada volume (caixa) para a rampa de saída correta, conforme a transportadora, rota ou destino cadastrado no WCS. O WCS atua como a **interface entre o sistema do cliente (WMS/ERP/SAP) e a automação de chão de fábrica**, executando as rotinas de sorteamento. A aplicação requer banco de dados exclusivo (PostgreSQL/Oracle/SQL Server, conforme projeto) e comunicação via interface Web (HTTPS) nas estações de trabalho.

**Capacidade e composição física** *(valores variam por projeto — preencher com `{{sorter_capacidade}}`, `{{sorter_portal_faces}}`, `{{sorter_rampas_saida}}`, `{{sorter_inducao}}`):*
- **Capacidade:** projetado para processar até `{{sorter_capacidade}}` volumes/hora, com base na eficiência de indução/separação (Full Case, Fracionado, Picking Cart).
- **Pontos de indução:** `{{sorter_inducao}}` (entrada dos volumes no circuito) → detalhe em [[sorter-inducao]].
- **Portal de leitura:** composto por `{{sorter_portal_faces}}` faces de leitura (tipicamente topo + laterais), que garantem a leitura das etiquetas posicionadas no topo ou nas laterais das caixas. As faces permitem ao WCS realizar o **checkout** dos volumes induzidos (Full Case e Fracionado).
- **Rampas:** `{{sorter_rampas_saida}}` rampas de saída para transporte dos volumes + rampa(s) exclusiva(s) de rejeito (→ [[sorter-rejeito]]). Cada rampa de saída costuma ser equipada com **leitor de código de barras + conversor**, responsáveis por capturar a leitura e comunicar ao WCS.

**Fluxo de comunicação WCS ↔ PLC/MFC (núcleo do processo):**

1. **Leitura no portal.** O processo inicia quando o volume passa pelo portal de leitura. A câmera/leitor captura a etiqueta da caixa (código de barras ou QR Code).
2. **Envio ao Controlador Lógico (PLC/CLP).** A etiqueta lida é enviada ao **Controlador Lógico Programável (PLC/CLP)** da esteira.
3. **Consulta do WCS.** O PLC encaminha a informação ao WCS, que consulta sua base de dados para verificar os dados do pedido/volume associado à etiqueta e determinar o destino.
4. **Instrução de desvio.** Com base na verificação, o WCS retorna ao PLC a instrução informando **em qual rampa o volume deve ser desviado**. O PLC executa fisicamente o desvio (no caso de cross-belt, a mini-esteira transversal do carro é acionada lateralmente, transferindo o volume para o chute/rampa de destino).
5. **Desvio conforme o mapa.** A separação ocorre conforme o **mapa de rotas/destinos ativo** no WCS (ou rota recebida na integração), que define, para cada tipo de volume/pedido, a rampa de saída correspondente → detalhe em [[sorter-mapa-rota]].

**Identificação obrigatória e tratativa de exceção:**
- Todos os volumes induzidos devem possuir **etiqueta válida** gerada/reconhecida pelo WCS (código de barras ou QR Code). → [[etiquetas]].
- Volumes **sem identificação ou com etiqueta inválida** são direcionados automaticamente para o **rejeito ou reprocessamento**, conforme as regras de operação. Os principais cenários de exceção tratados pelo WCS: falha de leitura (NoRead), ausência de destino configurado, divergência de cadastro, indisponibilidade de rota, parada do equipamento, falha do desvio. → detalhe completo em [[sorter-rejeito]].

**Rastreabilidade.** O WCS registra a passagem de cada volume pelos portais e rampas (status "No sorter", "Na rampa", "Finalizado") e disponibiliza relatórios de Read/NoRead, produtividade por rampa e análise de caixas do sorter.

---

## Condicionais

### Critério de desvio — derivado de `st_criterio` (núcleo do mapa; detalhe em [[sorter-mapa-rota]])

#### SE `st_criterio = transp` (Transportadora) → ADICIONA em "Desvio conforme o mapa"
O agrupador principal (master) do mapa do Sorter é a **transportadora**; o segundo nível de agrupamento costuma ser o **pedido/rota**. *(Visto em BR, Beta, Beta Full SP, Payless.)*

#### SE `st_criterio = regiao` (Região) → ADICIONA em "Desvio conforme o mapa"
O desvio é orientado por **região/rota** de entrega cadastrada.

#### SE `st_criterio = filial` (Filial/Destino — loja) → ADICIONA em "Desvio conforme o mapa"
O agrupador dos volumes no sorter é a **loja de destino** (e eventualmente categoria do produto e tipo de embalagem), informada via integração pelo WMS. *(Visto em CDSK, Market Chile, Market Peru, Optimus Prime.)*

### Balanceamento / cadenciamento entre rampas

#### SE há mais de uma rampa/transportadora elegível para o mesmo volume → ADICIONA subseção "Balanceamento de Desvio"
O WCS aplica lógica de **balanceamento** para distribuir os volumes de forma equilibrada, evitando sobrecarga de uma rampa enquanto outras ficam ociosas. *(BRF Salvador — opera em dois níveis: **macro** = entre transportadoras elegíveis, priorizando a mais ociosa em balanceamento 1-para-1; **micro** = entre rampas de uma mesma transportadora. Os dois níveis atuam em sequência.)* Em projetos de loja (Market Peru), o WCS faz **cadenciamento dinâmico** considerando rampas habilitadas, ocupação atual e histórico recente de recebimento, direcionando o volume para a rampa mais ociosa e que há mais tempo não recebe.

#### SE `st_ag` preenchido (agrupador da rampa) → ADICIONA em "Desvio conforme o mapa"
O agrupador da rampa (ex.: loja+categoria+embalagem, ou destino volume-a-volume) define como os volumes são consolidados na rampa. → detalhe em [[sorter-mapa-rota]].

### Capacidade, SLA, indução e portal (campos de texto)

#### `st_cap` (capacidade vol/h) → preenche `{{sorter_capacidade}}` na abertura.
#### `st4` (SLA Portal → 1º HPD) → ADICIONA frase de SLA na abertura (ex.: "tempo máximo entre leitura no portal e o 1º desvio").
#### `st5` (indução) → preenche `{{sorter_inducao}}`; se há orientação de indução por matriz de fragilidade/stage-in, **referenciar** [[sorter-inducao]] (NÃO detalhar aqui).
#### `st6` (portal: faces) → preenche `{{sorter_portal_faces}}`.

### Cross-check no portal — derivado de `st7`

#### SE `st7 = yes` (Cross-check) → ADICIONA referência e OMITE detalhamento
Para validação cruzada SKU/DUN/EAN × pedido no portal (com desvio automático para rejeito em falha), o fluxo é tratado em [[cross-check]]. Aqui apenas mencionar que "o portal realiza cross-check conforme [[cross-check]]". *(Visto em BRF Salvador — PVAR, MASTER, Esperança.)*

### IA no portal — derivado de `st11` + `st11_tvs`

#### SE `st11 = yes` (IA) → ADICIONA subseção "Leitura por IA / Câmera"
O sorter utiliza **câmera com IA** para leitura de **múltiplos códigos** por volume. A IA identifica e relaciona todos os códigos de barras ao mesmo volume registrado no WCS, compara dados lidos × integrados (volume correto, etiqueta corresponde ao destino, divergências) e determina o desvio. Em exceção (códigos não reconhecidos, etiqueta incorreta, duplicidade) aciona alerta/bloqueio/registro. *(Visto em Payless e Esperança.)*
> **Contingência de IA:** etiqueta especial formato **`IVT + DUN`** impressa pela Invent; quando o portal identifica esse formato, ignora os demais códigos e tria considerando apenas o DUN após "IVT". *(Esperança.)*

#### SE `st11 = yes` E `st11_tvs` preenchido → ADICIONA
Instalar `{{sorter_tvs_ia}}` TV(s) de dashboard no portal para acompanhamento operacional em tempo real (Read/NoRead).

### Recirculação — derivado de `st_rc` (detalhe em [[sorter-rejeito]])

#### SE `st_rc = yes` (Recirculação) → ADICIONA em "Identificação obrigatória"
Antes de rejeitar, o WCS aplica **recirculação**: em NoRead ou falha pontual, o volume é mantido no circuito e passa novamente pelo portal para nova tentativa. Só após esgotar o nº de voltas/tentativas parametrizado o volume vai ao rejeito. → detalhe em [[sorter-rejeito]]. *(BRF Salvador, TITANO, Payload/Payless, NavePark.)*

#### SE `st_rc = no` → volume sem leitura/destino vai direto ao rejeito (sem recirculação).

### Sinaleiro nas rampas — derivado de `st10`

#### SE `st10 = yes` (Sinaleiro) → ADICIONA subseção "Sinaleiros das Rampas"
Cada rampa recebe um **sinaleiro** (comunicação visual de status): VERDE aceso = aberta/pronta; AMARELO piscante = rampa cheia; VERMELHO piscante = emergência acionada; as 3 cores piscando = sem comunicação com o WCS; apagado = rampa fechada. *(Esperança, MARA IV.)*

### Outras condicionais

#### SE o projeto tem PTL/PTM nas saídas das rampas → ADICIONA referência a [[paletizacao]]
As saídas das rampas podem ter posições PTL (Put-To-Light) ou PTM (Put-to-Monitor) para alocação/paletização dos volumes. Tratar em [[paletizacao]], referenciando aqui. *(Esperança, Optimus Prime, Peter 2, MASTER, MARA IV.)*

#### SE o WMS envia a rota pronta por volume (não há mapa local) → SUBSTITUI "Desvio conforme o mapa"
O WCS recebe na integração o campo **Rota/rampa** por volume e apenas executa o desvio (não decide destino). *(TITANO, Gavião, Barbecue, Esperança OS Tipo 22 — fracionado: única responsabilidade do WCS é desviar no chute.)*

#### SE há check-out de peso no sorter (balança antes do portal) → ADICIONA subseção "Check-out de Peso"
Balança afere o peso real antes do portal; WCS compara com peso esperado (soma dos pesos unitários da integração) e desvia para rejeito se fora da tolerância. *(Barbecue — "sem peso"/"peso incorreto"; MASTER — crosscheck por balança+dimensionador.)* → relaciona-se a [[cross-check]] e [[pesagem]].

#### SE `st1 = no` ou `tbd` → OMITE o capítulo inteiro de Sorter.

---

## Observações Livres do Kickoff
Campos de texto: `st2`, `st3`, `st_cap`, `st4`, `st5`, `st6`, `st11_tvs`, `st_ag` e qualquer observação livre.

O ED deve:
- **`st_cap` / `st2` / `st6` / `st5`** → preencher os slots numéricos na abertura (capacidade, rampas, faces, indução). Se a contagem de rampas distingue saída × rejeito, explicitar (ex.: "9 rampas: 8 de saída + 1 de rejeito").
- **`st4`** → inserir o SLA explícito (Portal → 1º HPD), se informado.
- **Observação sobre tipo de equipamento** (ex.: cross-belt, esteira/roletes) → mencionar na composição física. `[OBS INTERNA]` se ambíguo.
- **Observação que adiciona regra de contingência** (ex.: forçar rampa manual por transporte, desconsiderar peso) → ADICIONAR subseção nomeada com `[OBS INTERNA]` para validação da operação. *(Barbecue: regras de contingência com log de usuário/data; alteração irreversível.)*
- **Observação sobre cancelamento de volumes/ocorrências** (avaria/extravio) → ADICIONAR subseção "Cancelamento/Ocorrências de Volumes" (tela de exclusão de volumes esperados, autenticação de usuário, integração ao WMS). *(CDSK, DIA, Market Chile/Peru, Esperança, Barbecue, NavePark.)*

---

## Regras de Negócio
- **RN-01** (todos): a decisão de destino é do **WCS**; o **PLC/CLP** apenas executa o desvio físico. A comunicação é portal→PLC→WCS→PLC→desvio.
- **RN-02** (todos): todo volume induzido deve ter **etiqueta válida** (código de barras/QR Code) reconhecida pelo WCS; sem identificação válida → rejeito/reprocessamento.
- **RN-03** (todos): o desvio segue o **mapa de rotas/destinos ativo** no WCS (ou rota recebida na integração). → [[sorter-mapa-rota]].
- **RN-04** (BRF Salvador): balanceamento em **dois níveis** — macro (entre transportadoras, prioriza a mais ociosa, 1-para-1) e micro (entre rampas da mesma transportadora), atuando em sequência.
- **RN-05** (Market Peru — específico de loja): cadenciamento **dinâmico** combina rampas habilitadas + ocupação atual + histórico recente; direciona para a mais ociosa e que há mais tempo não recebe.
- **RN-06** (BRF Salvador): **duplicidade** — volume com status "No sorter"/"Na rampa"/"Finalizado" relido nos portais é rejeitado **imediatamente, sem recirculação**.
- **RN-07** (recirculação — projetos com `st_rc=yes`): NoRead/falha pontual → recircula até esgotar o nº de voltas parametrizado, só então rejeita. → [[sorter-rejeito]].
- **RN-08** (Gavião/Barbecue — específico de projeto): o **mesmo RG/código de barras** pode reaparecer; o volume pode ser **induzido várias vezes** e o WCS sempre considera a **última integração** daquele RG. Em Gavião, dois volumes com mesmo código vão à mesma rampa e geram **dois retornos** distintos ao WMS.
- **RN-09** (Esperança — específico de projeto): para OS Tipo 22 (fracionado/flowrack), o volume é induzido mas **não** alocado em PTL; o WCS realiza **apenas o desvio no chute**, sem validação adicional.
- **RN-10** (Optimus Prime — específico de projeto): no **desvio dinâmico** (sem mapa ativo), se todas as rampas estão ocupadas e chega novo destino, o WCS aloca em PTL livre compartilhando rampa; se não houver PTL livre → rejeito por "SEM PTL DISPONÍVEL".
- **RN-11** (Barbecue — específico de projeto): check-out de **peso** obrigatório em todos os volumes; fora da tolerância → rejeito "sem peso"/"peso incorreto". Regras de contingência (ignorar peso, forçar rampa) exigem **log** de usuário/data e podem ser irreversíveis.
- **RN-12** (cancelamento de volume — vários): exclusão de volume avariado/extraviado exige **usuário autenticado** com permissão e dispara integração de cancelamento ao WMS; só aplicável a volumes ainda não alocados em pallet.

## Insights e Padrões
### Padrões identificados
- O **fluxo de comunicação** (portal lê → PLC/CLP → WCS consulta → WCS instrui rampa → PLC desvia) é praticamente **idêntico** em BP, ELETRO, TITANO, NavePark, Beta, BR, Beta Full SP — núcleo sólido e estável.
- A composição típica é **N rampas de saída + 1 rampa de rejeito**, cada rampa de saída com leitor de código + conversor.
- Capacidade declarada varia bastante: **2.500** (TITANO), **3.000** (Beta, BR, Beta Full SP, NavePark), **4.000** (BP), **5.000** (ELETRO), **6.000** (Esperança, dupla indução), **7.000** (Payless). É sempre um campo a preencher (`st_cap`), nunca fixo.
- Portal com **3 faces (topo + 2 laterais)** é o mais comum; 2 faces aparece em BP/NavePark/MASTER.

### Variações significativas
- **BRF Salvador** é o caso mais rico: cross-belt, balanceamento macro/micro, recirculação, taxonomia de rejeito tratável/não-tratável, FEFO por shelf life. Bom modelo para [[sorter-rejeito]] e [[sorter-mapa-rota]].
- **CDSK / Market Chile / Market Peru** (mercado/lojas): agrupador = loja+categoria+embalagem, desvio por disponibilidade de PTL, cadenciamento anti-sobrecarga; integração WMS-céntrica.
- **Optimus Prime** usa **desvio dinâmico** (sem mapa ativo) + portal RFID adicional além do code128.
- **Esperança / Peter 2 / MARA IV** centram nas **saídas PTL** (até 168/96/48 posições) → mais sobre [[paletizacao]] que sobre o núcleo.
- **Payless / Esperança** usam **IA/câmera** para múltiplos códigos + contingência IVT+DUN.
- **MASTER** mistura sorter com **PTM** (Put to Monitor) e crosscheck por balança+dimensionador.
- **TITANO / Gavião / Barbecue** recebem a **rota pronta na integração** (WCS só executa desvio), modelo oposto ao mapa local.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo para **tipo de sorter** (cross-belt × esteira/roletes × tilt-tray) — hoje só em texto livre.
- Não há campo para **check-out de peso no sorter** (balança pré-portal) — aparece em Barbecue/MASTER em texto livre; candidato a checkbox (relaciona-se a [[cross-check]]/[[pesagem]]).
- Não há campo para **PTL/PTM nas saídas** vinculado ao sorter — hoje só via [[paletizacao]]; gera ambiguidade de escopo.
- "**Mapa local × rota na integração**" não tem distinção explícita no kickoff — muda radicalmente a responsabilidade do WCS.
- Não há campo para **número de portais** (Payless tem 2; Optimus 2) — só faces (`st6`).

### Inferências
- **Inferência:** quando o critério é loja/filial e o WMS é o dono dos pedidos, o sorter quase sempre desvia por **disponibilidade de PTL + cadenciamento**, não por mapa estático. · **Confiabilidade:** alta · **Base:** CDSK, Market Chile, Market Peru.
- **Inferência:** `st11=yes` (IA) coocorre com cenários de **múltiplos códigos por caixa / etiquetas do fornecedor** (qualidade ruim). · **Confiabilidade:** média-alta · **Base:** Payless, Esperança.
- **Inferência:** recirculação (`st_rc=yes`) tende a coexistir com portal IA e rejeito tratável/não-tratável estruturado. · **Confiabilidade:** média · **Base:** BRF Salvador, Payless, TITANO.

## Dependências (grafo)
- **Entra depois de:** [[order-start]] → [[picking-pbl]]/[[picking-fullcase]]/[[picking-cart]] → (opcional [[conferencia]]/[[cross-check]]) → indução no sorter
- **Núcleo deste CARD:** comunicação WCS↔PLC/MFC · portal/câmera · capacidade · balanceamento · IA
- **Subtópicos próprios (Round 2):** [[sorter-inducao]] (`st5`) · [[sorter-rejeito]] (`st3`/`st_rc`) · [[sorter-mapa-rota]] (`st_criterio`/`st_ag`)
- **Sai para:** rampas → [[paletizacao]] (PTL/PTM) → docas/[[expedicao]]
- **Consulta/alimenta:** [[integracao-pedidos]]/[[integracao-wcs-wms]] (rota, destino, cancelamento), [[etiquetas]] (etiqueta WCS/QR/contingência IVT+DUN)
- **Variante paralela / cruzamento:** [[cross-check]] (gate `st7`, validação no portal), [[pesagem]] (check-out de peso pré-portal)
