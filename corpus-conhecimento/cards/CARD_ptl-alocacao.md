# PTL-Alocação — Knowledge Card

> CARD abrangente do tópico **PTL-Alocação (Put-to-Light)**. Fonte: Top 10 (BP, CDSK, Market Chile, Market Peru, NavePark) + complementares (BR, Beta Esteio, DIA, Esperança, Optimus Prime, Payless, Reverse). O ED usa este arquivo para gerar o capítulo de PTL-Alocação do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`ptl` `put-to-light` `display-ptl` `display-luminoso` `alocacao-palete` `alocacao-pallet`
`tablet-ptl` `ptl-hardware` `ptl-hw` `posicao-ptl` `led-ptl` `rampa-ptl`
`fechamento-pallet` `cubagem-pallet` `romaneio-ptl` `olpn` `etiqueta-master`
`dupla-confirmacao` `bipagem-ptl` `fragilidade-ptl` `perigosos-ptl`
`agrupador-ptl` `subarea-ptl` `ptl-opt` `aloca-opt` `pt-tem-ptl`

## Metadados
- **Bloco:** expedicao
- **Gate:** `pt_tem_ptl = yes`
- **Subtópicos com CARD próprio:** [[paletizacao]] (gate `pt_gate`), [[ptm]] (gate `pt_ptm`)
- **Depende de:** [[sorter]] (desvio do volume para a rampa), [[paletizacao]] (gestão de cubagem/peso e abertura de posições), [[order-start]] (libera as tarefas / reserva posições PTL ao iniciar romaneio), [[integracao-pedidos]] (integração Pallet Montado / Aloca Pallet ao WMS)
- **Influencia:** [[integracao-pedidos]] (envia Pallet Montado a cada fechamento de pallet), [[etiquetas]] (impressão de etiqueta master/OLPN no fechamento)
- **Cruza com:** [[romaneio]] (`pt9` — tela de romaneios controla liberação de posições PTL), [[conferencia]] (em alguns projetos a confirmação PTL equivale a uma conferência de volumes), [[picking-pbl]] / [[picking-fullcase]] (volumes chegam pelo sorter após picking)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{ptl_tem}}` | `pt_tem_ptl` | select (YN) | yes / no / tbd |
| `{{ptl_tipo_disp}}` | `pt_tipo_disp` | select | `ptl_hw`=PTL (displays físicos) · `tablet_ptl`=Tablet · `outro` |
| `{{ptl_tvs}}` | `pt_tvs_ptl` | texto livre | qtd de TVs/monitores PTL (ex: "8 rampas × 24 posições = 192") |
| `{{ptl_tipo_pal}}` | `pt1` | select | `ptl_opt`=PTL · `aloca_opt`=Aloca Pallet |
| `{{ptl_posicoes}}` | `pt3` | texto livre | total de posições PTL |
| `{{ptl_frag}}` | `pt_frag` | select (YN) | yes / no / tbd |
| `{{ptl_ag}}` | `pt_ag` | texto livre | agrupador das posições (ex: transportadora, romaneio, subárea) |
| `{{ptl_perigosos}}` | `pt8` | select (YN) | yes / no / tbd |
| `{{ptl_romaneio}}` | `pt9` | select (YN) | yes / no / tbd |

> **Multi-select** usa `|||` como separador no kickoff. `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com `pt_tem_ptl = yes`. O ED parte daqui e aplica as condicionais.)*

O PTL (Put-to-Light) é o sistema de displays luminosos instalados nas rampas/saídas do sorter que guiam o operador na alocação dos volumes (caixas) nos pallets de expedição corretos. Cada display acende individualmente para indicar a posição exata onde o volume deve ser depositado, eliminando a necessidade de leitura visual de etiquetas durante a montagem do pallet. O WCS controla todas as posições PTL de forma exclusiva.

**Pré-requisito: login na rampa.** Antes de iniciar a operação, o operador da saída do sorter realiza login na rampa — geralmente por leitura do crachá/código de usuário no leitor da posição. O WCS registra o vínculo entre o operador e as posições PTL da rampa, habilitando o mapeamento correto dos volumes e garantindo rastreabilidade das operações.

**Abertura automática das posições PTL.** As posições PTL são abertas automaticamente pelo WCS quando os romaneios são iniciados (ver [[romaneio]]). O WCS distribui os romaneios para as posições de forma dinâmica, priorizando manter um mesmo romaneio em uma única rampa sempre que possível. O sistema reserva o lugar de cada volume nos pallets antes mesmo do volume chegar na rampa, permitindo a alocação respeitando a sequência de entrega e os critérios de agrupamento configurados.

**Fluxo operacional padrão:**

1. **Recebimento do volume na rampa.** A caixa desce pelo chute/rampa do sorter e o operador a recebe na mesa de acumulação.

2. **Leitura do volume.** O operador realiza a leitura do código de barras (ou QR code) da etiqueta do volume por meio do scanner da rampa (ou coletor, conforme `pt_tipo_disp`).

3. **Sinalização do display PTL.** Imediatamente após a leitura, o WCS acende o display da posição PTL correspondente ao pallet de destino do volume, indicando o local exato de alocação. O display exibe os últimos 3 caracteres do código da posição (identificação visual para o operador).
   - Se o volume **não pertencer** a nenhuma posição da estação PTL associada ao scanner, o WCS acende **todos os LEDs da estação em vermelho**, sinalizando erro. O operador encaminha o volume para tratativa (tela de diagnóstico de rejeito).

4. **Alocação do volume.** O operador deposita a caixa sobre o pallet indicado pela luz.

5. **Confirmação no display.** O operador pressiona o botão do display PTL correspondente. O WCS registra a alocação, atualiza a quantidade conferida no sistema e envia a integração volume a volume ao WMS.

6. **Próximo volume.** O operador retorna à rampa para processar o próximo volume.

**Fechamento do pallet.** O fechamento da posição PTL pode ocorrer de três formas:
- **Automático:** quando o peso ou a cubagem configurados são atingidos, o WCS sinaliza no display (LED em cor específica — geralmente laranja) e solicita a leitura da etiqueta master/OLPN.
- **Lógico:** quando não há mais volumes previstos para aquela posição (pallet completo pelo pedido/romaneio).
- **Manual:** o operador realiza a leitura do código da posição PTL (ou código fantasia) para forçar o fechamento antes de atingir os limites de cubagem/peso.

Ao fechar o pallet, o WCS imprime a etiqueta master na impressora dedicada instalada na área do PTL, envia a integração de expedição ao WMS informando o conteúdo completo do pallet e libera a posição PTL para novo pedido/romaneio.

---

## Condicionais

### Tipo de Display — derivado de `pt_tipo_disp`

#### SE `pt_tipo_disp = ptl_hw` (PTL Hardware — displays físicos) → Texto Padrão padrão
O processo segue o fluxo descrito no Texto Padrão: scanner de rampa realiza a leitura do volume e o display físico (LED numérico de 3 dígitos) acende indicando a posição. O botão do próprio display é pressionado para confirmar. Esta é a configuração mais comum nos projetos com `pt_tem_ptl = yes`.

#### SE `pt_tipo_disp = tablet_ptl` (Tablet PTL) → SUBSTITUI "Sinalização do display PTL"
Em vez de displays físicos individuais por posição, um monitor/tablet centralizado na rampa exibe a posição de destino do volume após a leitura. A confirmação é realizada via toque na tela ou leitura de código da posição no tablet, e não por botão físico no LED. O número de TVs/monitores é informado em `{{ptl_tvs}}`.

### Variante de Paletização — derivado de `pt1`

#### SE `pt1 = aloca_opt` (Aloca Pallet) → ADICIONA subseção "Abertura de Posição"
A abertura das posições PTL é automática: quando o primeiro volume de um agrupador (transportadora, romaneio ou subárea) sai do Order Start, o WCS já reserva a posição correspondente. O sistema prioriza alocar volumes do mesmo pedido/romaneio na mesma posição PTL, abrindo nova posição somente quando a atual atingir o limite de cubagem ou peso.

#### SE `pt1 = ptl_opt` (PTL com abertura manual via OLPN) → ADICIONA subseção "Abertura do Palete com OLPN"
Antes de iniciar a indução de volumes, o operador deve **abrir o palete manualmente** com dupla leitura sequencial: primeiro a Etiqueta PTL (QR Code fixo da posição) e depois a Etiqueta OLPN (código único de 15 a 18 dígitos gerado pelo WMS), criando o vínculo OLPN ↔ posição PTL. Somente após esse procedimento o sistema permite a alocação de volumes. O WCS não permite reutilização de códigos OLPN.

O fechamento manual segue o mesmo procedimento inverso: operador escaneia a Etiqueta PTL (LEDs acendem em laranja) e depois a Etiqueta OLPN (LED muda para azul confirmando o fechamento). O operador cola a etiqueta OLPN no palete físico e pressiona o botão.

### Romaneio — derivado de `pt9`

#### SE `pt9 = yes` → ADICIONA subseção "Tela de Romaneios"
A operação do PTL é precedida pela **Tela de Romaneios**: o operador seleciona quais romaneios serão processados e o WCS reserva automaticamente as posições de PTL correspondentes e libera as tarefas de separação no Order Start. Romaneios não iniciados nesta tela não terão suas tarefas liberadas. A tela exibe a previsão de posições PTL a serem utilizadas por romaneio (auxiliando no cadastro do mapa do sorter). Romaneios que excedam a capacidade de posições disponíveis entram em fila natural: os volumes são liberados conforme posições vão sendo desocupadas pelo fechamento de pallets em andamento.

### Fragilidade — derivado de `pt_frag`

#### SE `pt_frag = yes` → ADICIONA subseção "Matriz de Fragilidade"
O WCS aplica a **Matriz de Fragilidade** na alocação PTL: cada rota/pedido pode ocupar 2 ou mais posições PTL, separadas por nível de fragilidade (ex: itens pesados na posição base, frágeis na posição superior). O sistema garante que volumes frágeis não sejam alocados sob volumes pesados, respeitando a sequência definida na matriz. → ver também [[paletizacao]].

### Itens Perigosos — derivado de `pt8`

#### SE `pt8 = yes` → ADICIONA subseção "Pallet Exclusivo para Itens Perigosos"
Volumes contendo itens classificados como perigosos **não podem ser misturados** aos demais. O WCS automaticamente segrega esses volumes em um pallet exclusivo, identificado de forma distinta. Regra operacional: o pallet de itens perigosos deve ser programado para ser o **último a ser carregado** no veículo.

### Agrupador — derivado de `pt_ag`

#### SE `pt_ag` está preenchido → ADICIONA subseção "Critério de Agrupamento das Posições PTL"
O agrupador define a lógica pela qual o WCS distribui os volumes nas posições PTL. Agrupadores típicos:
- **Por romaneio:** cada romaneio ocupa uma ou mais posições; padrão quando `pt9 = yes`.
- **Por transportadora:** pedidos da mesma transportadora compartilham posições na rampa correspondente. Padrão em projetos sem romaneio.
- **Por subárea:** quando a transportadora é diferente de "Própria", o WCS usa o campo `subArea` da integração como agrupador logístico principal, ignorando o agrupamento por romaneio. Cada subárea possui posição reservada exclusiva. Múltiplas subáreas podem coexistir em uma mesma rampa.
- **Por pedido:** sub-agrupamento dentro da transportadora, concentrando volumes do mesmo pedido no menor número possível de pallets.

### Dupla Confirmação de Bipagem (configurável)

#### SE o projeto adota dupla confirmação → ADICIONA em "Leitura do volume"
O sistema possui parâmetro **Dupla Confirmação de Bipagem** (ativado/desativado na tela de configuração):
- **Ativada:** primeiro o operador escaneia a etiqueta do volume (IVT) → LED acende em **laranja** (aguarda 2ª leitura); depois escaneia o código da caixa (DUN/EAN) → LED muda para **azul** (vínculo completo).
- **Desativada:** apenas uma leitura (etiqueta IVT ou DUN) → LED acende diretamente em **azul**.

Em ambos os modos, volume não pertencente à estação acende todos os LEDs em **vermelho**.

### SE `pt_tem_ptl = no` ou `tbd` → OMITE o capítulo inteiro de PTL-Alocação.

---

## Observações Livres do Kickoff
Campos de texto: `pt3` (posições), `pt_tvs_ptl` (qtd TVs PTL), `pt_ag` (agrupador) e qualquer observação livre.

O ED deve:
- **`pt3`** → mencionar o número total de posições PTL (ex: "A operação conta com N posições PTL distribuídas em M rampas").
- **`pt_tvs_ptl`** → preencher `{{ptl_tvs}}` com a quantidade de monitores/TVs PTL (ex: "8 displays por rampa").
- **`pt_ag`** → selecionar o agrupador correto nas Condicionais (romaneio, transportadora, subárea ou pedido).
- **Observação que restringe escopo** (ex: "PTL apenas para fracionado; fullcase vai direto") → registrar como restrição explícita na abertura do capítulo, indicando o que está fora do escopo PTL.
- **Observação que adiciona variante** não coberta pelo padrão (ex: "posição PTL dedicada a rejeito com LED rosa") → ADICIONAR como subseção nomeada ao final do fluxo, com `[OBS INTERNA]` se precisar de validação da operação.

---

## Regras de Negócio
- **RN-01** (todos): o WCS não permite reutilização de códigos de pallet (master/OLPN) já fechados.
- **RN-02** (todos): volume lido que não pertence a nenhuma posição da estação PTL do scanner acende **todos os LEDs em vermelho**; o operador deve tratar via tela de rejeito.
- **RN-03** (todos): a cada confirmação de alocação (botão do display), o WCS envia integração de alocação volume a volume ao WMS.
- **RN-04** (todos): ao fechar o pallet (automático, lógico ou manual), o WCS envia a integração Pallet Montado ao WMS com a relação completa dos volumes alocados.
- **RN-05** (fechamento automático): o WCS não permite o fechamento do pallet quando ainda houver volumes pendentes abaixo da quantidade mínima parametrizada, evitando abertura de novo pallet para poucos volumes.
- **RN-06** (pallet incompleto / short pick): o WCS nunca bloqueia o fechamento manual do pallet; se o operador fechar com itens faltando, a integração Pallet Montado é enviada com a quantidade efetivamente montada (`totalvolPallet < totalvolEsper`).
- **RN-07** (`pt8 = yes`): volumes com itens perigosos devem ser segregados em pallet exclusivo, identificado de forma distinta e programado para ser o **último** a ser carregado.
- **RN-08** (`pt_frag = yes`): a sugestão/alocação respeita obrigatoriamente a Matriz de Fragilidade — volumes mais pesados são alocados na base e frágeis na parte superior.
- **RN-09** (subárea): quando `pt_ag = subarea` (transportadora ≠ "Própria"), o WCS ignora o agrupamento por romaneio e usa o campo `subArea` da integração como agrupador principal; cada subárea possui posição PTL exclusiva e fechamento individual.
- **RN-10** (capacidade): quando a previsão de posições PTL excede a capacidade disponível, os volumes entram em fila natural — liberados para coleta no Order Start conforme posições vão sendo desocupadas.
- **RN-11** (rejeito): a rampa fica inelegível para receber novos volumes somente quando o sensor de rampa cheia é acionado (capacidade física esgotada); PTL fechado temporariamente não torna a rampa inelegível.
- **RN-12** (OLPN): etiqueta OLPN inválida (comprimento fora do range configurado ou código já utilizado) acende o LED em vermelho; o pallet permanece fechado até a chegada de nova etiqueta válida.

## Insights e Padrões
### Padrões identificados
- O **fluxo operacional núcleo** (login → ler volume → LED acende → depositar → confirmar botão → integrar) é idêntico entre BP, CDSK, Market Chile, Market Peru, NavePark, DIA e Esperança — é o padrão sólido e universal.
- **Confirmação por botão físico no display** aparece em 100% dos projetos com `ptl_hw`; é o mecanismo central de rastreabilidade da alocação.
- **Fechamento automático por cubagem/peso** é regra padrão para `pt1 = ptl_opt`/`aloca_opt`; o fechamento manual é sempre possível como exceção operacional.
- **LED vermelho = erro** (volume errado na estação) é padrão universal; outros estados de cor variam por projeto (laranja = pallet cheio / aguardando 2ª leitura; azul = alocação confirmada; verde = posição disponível — Reverse/Esperança).

### Variações significativas
- **Market Chile e Market Peru** adotam abertura/fechamento manual via dupla leitura (Etiqueta PTL QR Code + OLPN), com parâmetro de Dupla Confirmação de Bipagem configurável — fluxo mais complexo que o padrão de hardware.
- **Beta Esteio** usa PTL como **vínculo lógico de remessa** (sem fechamento sistêmico de pallet e sem cubagem WCS): a posição é liberada apenas quando o operador de Full Case retira todos os volumes fracionados; ausência de integração Aloca Pallet com EWM/SAP.
- **Esperança** tem o WMS controlando a cubagem do pallet (não o WCS) — exceção ao padrão onde o WCS gerencia cubagem/peso.
- **BR** usa sub-agrupamento por pedido dentro da transportadora, com otimização de alocação por tamanho de caixa (P/M/G) para melhor aproveitamento de cubagem.
- **Reverse** usa PTL em contexto de **célula de logística reversa** (não expedição): posições representam carrinhos individuais para laboratório, com identificação visual por MAC Address — caso atípico, não repetível como padrão.
- **BP** introduz conceito de **Picking Exceção** com alocação manual no PTL para itens fora da automação.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para "**Dupla Confirmação de Bipagem**" (ativada/desativada) — hoje inferido por observação livre ou padrão do projeto. Candidato a checkbox.
- Não há campo para "**abertura de pallet manual via OLPN vs automática**" — hoje mapeado apenas pelo `pt1` (ptl_opt vs aloca_opt), o que pode não ser suficiente para distinguir todos os casos.
- Não há campo para "**cubagem controlada pelo WCS vs WMS**" — Esperança é exceção, mas não há trava no kickoff para capturar esse desvio.
- Quantidade de posições por rampa (`pt3`) é texto livre — candidato a campo estruturado (`posicoes_por_rampa` × `qtd_rampas`) para cálculo automático do total.

### Inferências
- **Inferência:** quando `pt_tem_ptl = yes` e `pt9 = yes`, o projeto quase sempre tem Tela de Romaneios como ponto de controle de liberação das posições PTL. · **Confiabilidade:** alta · **Base:** BP, CDSK, Market Chile, Market Peru.
- **Inferência:** `ptl_hw` (displays físicos) é o hardware padrão; `tablet_ptl` aparece em projetos com menor número de posições ou restrição de custo de hardware. · **Confiabilidade:** média · **Base:** maioria dos projetos Top 10 usa hardware físico.
- **Inferência:** projetos com `pt_frag = yes` invariavelmente têm múltiplas posições PTL por rota/destino (2 a 3), uma por nível de fragilidade. · **Confiabilidade:** alta · **Base:** Esperança, NavePark.

## Dependências (grafo)
- **Entra depois de:** [[sorter]] (desvio do volume para a rampa correta) → [[picking-pbl]] / [[picking-fullcase]] / [[picking-cart]] (origem dos volumes)
- **Disparado por:** [[romaneio]] (liberação de tarefas e reserva de posições PTL) ou [[order-start]] (quando sem romaneio)
- **Sai para:** [[integracao-pedidos]] (Pallet Montado a cada fechamento → WMS segue com faturamento/expedição)
- **Consulta/alimenta:** [[paletizacao]] (cubagem/peso parametrizados, critérios de fechamento), [[etiquetas]] (impressão etiqueta master/OLPN no fechamento do pallet), [[integracao-pedidos]] (envio volume a volume e Pallet Montado)
- **Variante funcional:** [[ptm]] (Put-to-Monitor — gate `pt_ptm`; mesma lógica de sinalização visual, mas por monitor central em vez de display individual)
