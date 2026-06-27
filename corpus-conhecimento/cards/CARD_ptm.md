# PTM (Put-to-Monitor) — Knowledge Card

> CARD do tópico **PTM — Put-to-Monitor**. Fonte: complementares (MASTER, Wild Fork) — nenhum dos Top 10 retornou evidência direta de PTM (os hits semânticos priorizados foram falsos positivos de outros tópicos). O ED usa este arquivo para gerar o capítulo de PTM do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.
>
> **Atenção ao ED:** o RAW deste bloco está raso. Valide os detalhes operacionais com a operação antes de finalizar o documento. Lacunas indicadas explicitamente abaixo.

## Tags
`ptm` `put-to-monitor` `monitor-alocacao` `tv-ptm` `display-monitor` `alocacao-visual`
`paletizacao-monitor` `fechamento-pallet` `pallet-monitor` `posicao-pallet` `mapa-posicoes`
`qr-code-pallet` `stage-fragilidade` `safety-lock` `pt_ptm` `pt_ptm_qtd`
`expedicao` `put-to-light` `alocacao-expedição`

## Metadados
- **Bloco:** expedicao
- **Gate:** `pt_ptm = yes` (campo `pt_ptm` na seção 11 do kickoff — Palletização & PTL)
- **Subtópico relacionado com CARD próprio:** [[ptl-alocacao]] (gate `pt_tem_ptl = yes` — versão com displays físicos/tablet)
- **Depende de:** [[paletizacao]] (contexto geral de paletização), [[sorter]] (volumes chegam do sorter por rampa), [[order-start]] (volumes identificados desde o início do fluxo)
- **Influencia:** [[etiquetas]] (etiqueta de pallet gerada no fechamento), [[integracao-pedidos]] (confirmação de pallet fechado ao WMS)
- **Cruza com:** [[ptl-alocacao]] (alternativas de display — PTL hardware vs. monitor), [[paletizacao]] (critérios de fechamento: peso/cubagem)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{ptm_tem}}` | `pt_ptm` | select | yes / no / tbd |
| `{{ptm_qtd_tvs}}` | `pt_ptm_qtd` | texto livre | quantidade de TVs/monitores PTM |
| `{{ptm_posicoes}}` | `pt3` | texto livre | número de posições de pallet |
| `{{ptm_agrupador}}` | `pt_ag` | texto livre | critério de agrupamento (por transportadora, destino, etc.) |
| `{{ptm_fragilidade}}` | `pt_frag` | select | yes / no / tbd — se usa matriz de fragilidade/stages |

> **Multi-select** usa `|||` como separador no kickoff. `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada para projetos com `pt_ptm = yes`. O ED parte daqui e aplica as condicionais.)*

O PTM (Put-to-Monitor) é o módulo de alocação visual de volumes em posições de pallet, guiado por monitores/TVs posicionados estrategicamente na área de expedição. Diferentemente do [[ptl-alocacao]] — que utiliza displays físicos (hardware LED/tablet) fixados junto a cada posição —, o PTM centraliza a orientação em uma ou mais TVs que exibem o mapa completo das posições e o estado de preenchimento de cada pallet em tempo real. O gate de habilitação é `pt_ptm = yes`.

**Infraestrutura física:**

A operação de PTM requer:
- **Monitores/TVs** (`{{ptm_qtd_tvs}}` unidades) estrategicamente posicionados na área de expedição para cobertura visual de todas as posições de pallet.
- **Identificação de posições** por QR Code (ou código de barras equivalente) fixado no chão/dock de cada posição de pallet, permitindo que o coletor do operador leia e confirme endereços sem depender de hardware dedicado por posição.
- **Coletor RF** (ou Android) portado pelo operador para leitura dos volumes e confirmação de endereço.

**Fluxo operacional padrão:**

1. **Chegada do volume.** O volume chega à área de paletização (vindo do sorter por rampa ou diretamente do picking), já identificado com etiqueta WCS contendo o destino/agrupador.

2. **Consulta ao monitor.** O operador lê o código do volume com o coletor. O WCS processa o agrupador do volume (transportadora, destino, filial ou outro critério configurado em `{{ptm_agrupador}}`) e exibe no monitor a posição de pallet designada, destacando-a no mapa de posições com indicação visual clara (ex: posição piscando, destacada em cor diferente ou com seta).

3. **Localização da posição.** O operador se desloca até a posição indicada no monitor. O QR Code no chão da posição serve de confirmação física: o operador lê o QR Code da posição com o coletor para confirmar que está no local correto antes de alocar o volume.

4. **Alocação do volume.** O operador deposita o volume na posição confirmada. O WCS registra a alocação e atualiza o mapa de posições no monitor em tempo real — o indicador da posição reflete o novo status de preenchimento (volumes alocados vs. esperados).

5. **Fechamento do pallet.** O pallet pode ser fechado em três cenários (ver **RN-03**):
   - **Manual:** o operador lê o código de comando de fechamento da posição (ex: "FPP001"). O PTM destaca a posição preenchida e aguarda a leitura da etiqueta do pallet para associação.
   - **Automático:** quando o último volume esperado do pedido é alocado, o fechamento ocorre sem ação do operador.
   - **Forçado:** quando cubagem ou peso atinge o limite configurado, o próprio operador aciona o fechamento.

6. **Abertura automática de nova posição.** Ao fechar o pallet, o WCS abre automaticamente uma nova posição no mapa para continuidade da operação, sem interrupção do fluxo.

7. **Rastreabilidade e integração.** O fechamento do pallet gera a etiqueta de pallet (ver [[etiquetas]]) e dispara a confirmação ao WMS via integração de pedidos (ver [[integracao-pedidos]]).

---

## Condicionais

### Gate principal

#### SE `pt_ptm = no` ou `tbd` → OMITE o capítulo inteiro de PTM.

#### SE `pt_ptm = yes` E `pt_tem_ptl = yes` → ADICIONA nota de coexistência
O projeto opera com **ambos** PTM e PTL simultaneamente. Verificar com a operação se as tecnologias cobrem áreas/linhas distintas ou se são alternativas configuráveis. Documentar a divisão explicitamente. → ver [[ptl-alocacao]].

---

### Quantidade de TVs — derivado de `pt_ptm_qtd`

#### SE `pt_ptm_qtd` preenchido → ADICIONA em "Infraestrutura física"
A operação conta com `{{ptm_qtd_tvs}}` monitor(es)/TV(s) PTM na área de expedição. `[OBS INTERNA: confirmar disposição física — quantos monitores cobrem quantas posições cada]`

#### SE `pt_ptm_qtd` vazio ou `tbd` → omitir quantidade específica; usar "monitores PTM" genericamente.

---

### Matriz de Fragilidade / Stages — derivado de `pt_frag`

#### SE `pt_frag = yes` → ADICIONA subseção "Stages de Fragilidade"
O PTM opera com **stages** de fragilidade: a área de paletização é dividida em fases (ex: Stage 1 = itens pesados/base, Stage 2 = itens médios, Stage 3 = itens frágeis/topo). O WCS aplica um **safety lock** que obriga o operador a seguir a ordem de stages — somente após completar todos os volumes do stage atual para uma posição é que o próximo stage é liberado. Isso garante que itens mais pesados sejam sempre alocados primeiro, preservando a integridade do pallet. `[OBS INTERNA: confirmar quantos stages, critérios de cada stage e se o safety lock é por posição ou global]`

#### SE `pt_frag = no` ou `tbd` → omitir a subseção de Stages.

---

### Tipo de identificação de posição

#### SE o projeto usa QR Code nas posições → ADICIONA em "Infraestrutura física"
Cada posição de pallet recebe identificação via **QR Code** único fixado no chão/dock, lido pelo coletor do operador para confirmação de endereço antes da alocação.

#### SE o projeto usa código de barras linear → substituir "QR Code" por "código de barras" na descrição.

`[OBS INTERNA: o kickoff atual não tem campo explícito para tipo de identificação de posição PTM — inferir do projeto ou perguntar na reunião de kickoff]`

---

### Agrupador de posições — derivado de `pt_ag`

#### SE `pt_ag` preenchido → ADICIONA em "Fluxo operacional — passo 2"
O agrupador configurado é `{{ptm_agrupador}}` (ex: transportadora, filial/destino, região). O WCS direciona cada volume para a posição de pallet correspondente ao agrupador do pedido.

#### SE `pt_ag` vazio → omitir detalhamento do agrupador; mencionar apenas que o WCS define a posição conforme critério configurado.

---

## Observações Livres do Kickoff
Campos relevantes: `pt3` (posições), `pt_ag` (agrupador), `pt_ptm_qtd` (TVs), `pt_frag` (fragilidade), `pt8` (itens perigosos), `pt9` (romaneio).

O ED deve:
- **`pt3`** → mencionar o número de posições de pallet na abertura do capítulo (ex: "A área de expedição conta com N posições de pallet").
- **`pt_ag`** → descrever o critério de agrupamento no passo 2 do fluxo (ex: "cada pallet corresponde a uma transportadora específica").
- **`pt_ptm_qtd`** → preencher `{{ptm_qtd_tvs}}` na subseção de infraestrutura.
- **`pt8 = yes`** → ADICIONAR nota: "itens perigosos são segregados em posições dedicadas, sinalizadas no mapa PTM". `[OBS INTERNA: confirmar regra com a operação]`
- **`pt9 = yes`** → ADICIONAR subseção "Romaneio": ao fechar o pallet, o WCS gera/imprime o romaneio associado ao pallet. `[OBS INTERNA: confirmar se é impressão automática ou sob demanda]`
- **Observação que restringe posições** (ex: "PTM cobre apenas área A") → inserir como restrição explícita na abertura do capítulo.

---

## Regras de Negócio
- **RN-01** (todos): o gate `pt_ptm = yes` é obrigatório para habilitar o capítulo. Com `pt_ptm = no` ou `tbd`, o capítulo é omitido integralmente.
- **RN-02** (todos): o mapa de posições exibido no monitor é atualizado em tempo real a cada alocação confirmada.
- **RN-03** (todos): o fechamento de pallet ocorre em três modalidades — manual (leitura de código de fechamento + etiqueta de pallet), automático (último volume do pedido alocado) ou forçado (limite de cubagem/peso atingido). As três modalidades são suportadas pelo WCS; a operação define qual(is) usa.
- **RN-04** (todos): ao fechar um pallet, o WCS abre automaticamente uma nova posição para continuidade do fluxo sem interrupção.
- **RN-05** (todos): a etiqueta do pallet associada no fechamento manual deve ter formato padronizado (evidência MASTER: 6 dígitos obrigatórios — `[OBS INTERNA: confirmar se é padrão geral ou específico de MASTER]`).
- **RN-06** (`pt_frag = yes`): o safety lock de stages impede a alocação de volumes de um stage posterior enquanto o stage atual não estiver completo para aquela posição. A posição só é liberada para o próximo stage quando todos os pedidos do stage corrente estiverem alocados.
- **RN-07** (todos): o operador confirma o endereço físico (QR Code/código da posição) com o coletor antes de depositar o volume — evita erros de endereçamento mesmo com o monitor visível.
- **RN-08** (todos): o PTM não requer hardware dedicado por posição (diferentemente do PTL com displays físicos), reduzindo custo de infraestrutura mas exigindo cobertura visual adequada dos monitores.

## Insights e Padrões
### Padrões identificados
- O PTM é a alternativa de menor custo de hardware ao PTL físico: troca displays por posição por TVs centralizadas + QR Codes no chão — padrão confirmado em Wild Fork.
- O fluxo de fechamento em três modalidades (manual/automático/forçado) com abertura automática de nova posição é o núcleo operacional consistente — confirmado em MASTER.
- O uso de coletor RF/Android pelo operador é padrão: o monitor orienta, o coletor confirma. Nenhum projeto dispensou o coletor na alocação PTM.

### Variações significativas
- **Wild Fork** usa **stages de fragilidade** com safety lock — garante paletização da base para o topo por peso/fragilidade. Incomum; a maioria dos projetos sem fragilidade usa alocação direta.
- **MASTER** descreve fechamento manual com código de comando específico (ex: "FPP001") e etiqueta de 6 dígitos — pode ser convenção desse projeto ou padrão geral não documentado nos demais.
- A quantidade de TVs (`pt_ptm_qtd`) impacta diretamente o layout: 1 TV central exige posicionamento privilegiado; múltiplas TVs permitem cobertura de áreas maiores ou zonas separadas.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- **Não há campo no kickoff para tipo de identificação de posição** (QR Code vs. código de barras linear vs. RFID) — hoje inferido do texto livre ou da spec. Candidato a select.
- **Não há campo para "safety lock de stages ativo"** além do `pt_frag` — o comportamento de bloqueio por ordem de stage não está capturado explicitamente. Candidato a checkbox dependente de `pt_frag = yes`.
- **Não há campo para "fechamento automático ativo"** — se o fechamento automático é sempre habilitado ou configurável por projeto não está claro no kickoff.
- **Cobertura de projetos Top 10 é zero para PTM** — nenhum dos Top 10 (BELEZA, Beta, BRF Salvador, CDSK, ELETRO, NavePark) documenta PTM. O único projeto Top 10 com paletização visual é possivelmente CDSK (confirmação necessária). Toda base de conhecimento PTM vem de MASTER e Wild Fork (projetos complementares).
- **Distinção PTM vs. "Aloca Pallet"** (`aloca_opt` em `pt1`) não está documentada. São funcionalidades diferentes? O `aloca_opt` sem monitor seria uma versão sem display?

### Inferências
- **Inferência:** PTM é escolhido quando o custo de hardware PTL (displays físicos por posição) não é viável, mas a operação ainda precisa de guia visual para alocação — ambiente com muitas posições de pallet e alta rotatividade de destinos. · **Confiabilidade:** média · **Base:** estrutura dos campos no kickoff (`ptl_opt` vs. `ptm_opt` vs. `aloca_opt` como alternativas em `pt1`).
- **Inferência:** projetos com `pt_frag = yes` tendem a usar PTM em vez de PTL físico, pois o mapa de stages é mais fácil de exibir num monitor grande do que em displays LED por posição. · **Confiabilidade:** baixa · **Base:** único projeto com fragilidade documentado usa PTM (Wild Fork).
- **Inferência:** `pt_ptm` e `pt_tem_ptl` podem coexistir se o CD tem áreas distintas (ex: PTL para uma linha fracionada, PTM para expedição geral) — mas é incomum. · **Confiabilidade:** média · **Base:** campos independentes no kickoff sem restrição de exclusividade mútua.

## Dependências (grafo)
- **Entra depois de:** [[sorter]] (volumes chegam por rampa) ou [[picking-pbl]]/[[picking-fullcase]] (em layouts sem sorter)
- **Sai para:** [[etiquetas]] (etiqueta de pallet no fechamento) → [[integracao-pedidos]] (confirmação de pallet ao WMS)
- **Alternativa tecnológica:** [[ptl-alocacao]] (mesma função, hardware diferente — displays físicos/tablet vs. monitor central)
- **Contexto pai:** [[paletizacao]] (critérios gerais de paletização: fragilidade, peso, cubagem)
- **Consulta/alimenta:** [[integracao-pedidos]] (confirmação de fechamento), [[etiquetas]] (geração etiqueta pallet)
