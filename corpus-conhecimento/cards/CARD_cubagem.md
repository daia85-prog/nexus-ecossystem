# Cubagem — Knowledge Card

> CARD abrangente do tópico **Cubagem**. Fonte: Top 10 (BELEZA Fase 1, BELEZA Fase 2, BRF Salvador, Beta, NavePark) + complementares (Beta Esteio, DIA, MASTER, Payless, Peter 2, Wild Fork). O ED usa este arquivo para gerar o capítulo de Cubagem do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`cubagem` `cu1` `cu_gate` `c1` `bin-packing` `selecao-caixa` `caixa-automatica`
`volume-total` `cubagem-wcs` `cubagem-wms` `caixa-plastica` `caixa-papelao`
`validacao-dimensoes` `altura-largura-comprimento` `cubagem-m3`
`segregacao-familias` `incompatibilidade-familias` `matriz-incompatibilidade`
`matriz-fragilidade` `classe-fragilidade` `cubagem-pallet` `algoritmo-tridimensional`
`validacao-peso-pallet` `tara-pallet` `limite-peso` `bin-packing-3d`
`cadastro-caixas` `tipo-caixa` `multiplos-tipos-caixa`

## Metadados
- **Bloco:** cubagem
- **Gate:** `cu1 = yes` (seção 3 do kickoff: Cubagem)
- **Subtópicos com CARD próprio:** [[matriz-fragilidade]] (segregação por peso/fragilidade em pallet), [[order-start]] (onde a caixa é fisicamente vinculada ao volume)
- **Depende de:** [[integracao-pedidos]] (SKU × Qtd recebidos; dimensões dos itens no cadastro de produtos)
- **Influencia:** [[order-start]] (caixa selecionada disponível para picking), [[picking-pbl]] · [[picking-cart]] (tipo de caixa determina posicionamento no fluxo), [[packing]] (caixa não muda após cubagem), [[sorter]] (LPN/volume gerado pela cubagem é lido no sorter)
- **Cruza com:** [[pesagem]] (check weight usa dimensões/peso dos itens calculados na cubagem), [[paletizacao]] (cubagem de pallet, matriz de fragilidade)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{cub_tem}}` | `cu1` | select | yes / no / tbd |
| `{{cub_resp}}` | `c1` | select | `wcs`=WCS · `wms_only`=WMS · `tbd`=A definir |
| `{{cub_tipo_caixa}}` | `l1` / `l1_m` | select/multi | `tote_plastic`=Tote/Plástica · `cardboard`=Papelão · `fardo`=Fardo · `misto_box`=Misto · `plastic`=Plástica · `tote`=Tote |
| `{{cub_mult_caixas}}` | `c2` | select | yes / no |

> `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com `cu1 = yes` e `c1 = wcs`. O ED parte daqui e aplica as condicionais.)*

A Cubagem é o processo pelo qual o WCS determina, antes ou no momento da separação, quais caixas de transporte serão utilizadas para cada pedido, com base no volume total (m³) e, opcionalmente, nas dimensões individuais (altura, largura, comprimento) dos itens. O objetivo é garantir que cada caixa seja preenchida de forma adequada — sem desperdício de espaço nem risco de exceder os limites físicos da embalagem — e que a caixa correta esteja disponível desde o início da separação, sem necessidade de intervenção manual do operador.

**Fluxo operacional padrão (WCS como responsável pela cubagem):**

1. **Recebimento dos itens do pedido.** O WCS recebe da integração com o WMS a relação de itens do pedido (linha × SKU × quantidade). As dimensões volumétricas de cada SKU (altura, largura, comprimento e peso) devem estar previamente cadastradas no sistema.

2. **Cálculo do volume total da missão.** O WCS soma o volume individual (m³) de todos os itens que compõem a missão/pedido, obtendo o volume total necessário para acomodação.

3. **Seleção automática da caixa.** Com base no volume total calculado, o WCS seleciona automaticamente a caixa mais adequada dentre os tipos cadastrados, seguindo a lógica:
   - Se o projeto opera com **tipo de caixa único**, o WCS sempre associa a caixa padrão definida para a operação, sem variação.
   - Se o projeto opera com **múltiplos tipos de caixa**, o WCS seleciona o menor tipo que acomoda o volume da missão. Caso uma dimensão individual exceda os limites da caixa selecionada (parâmetro ativo — ver **Condicionais**), o sistema eleva automaticamente para a caixa alternativa compatível.

4. **Associação da caixa ao volume.** O WCS vincula a caixa selecionada ao volume (tarefa/pega) antes do início da separação. Essa associação é registrada no sistema e orienta o [[order-start]] sobre qual tipo de caixa o operador deverá utilizar.

5. **Início da separação.** O operador recebe a instrução no Order Start já com a caixa correta associada. A separação ocorre diretamente na caixa definida pela cubagem, sem necessidade de triagem posterior.

6. **Rastreabilidade do volume.** A caixa selecionada pela cubagem é a embalagem final do pedido (exceto nos casos em que há troca no packing). O WCS assegura a rastreabilidade do volume ao longo de todo o fluxo, do Order Start ao Sorter/Expedição.

---

## Condicionais

### Responsável pela cubagem — derivado de `c1`

#### SE `c1 = wcs` (WCS faz a cubagem) → USAR Texto Padrão completo
O WCS é o detentor da inteligência de cubagem: recebe os itens brutos do pedido e executa o cálculo de seleção de caixa autonomamente. Aplicar todas as subseções do Texto Padrão.

#### SE `c1 = wms_only` (WMS faz a cubagem) → SUBSTITUIR Texto Padrão por versão enxuta
O cálculo de cubagem é de responsabilidade do WMS. O WCS recebe os pedidos já com a embalagem definida (tipo de caixa e LPN atribuído) e passa a controlar apenas o fluxo físico do volume na linha a partir da primeira leitura no [[order-start]]. Os tipos de caixas disponíveis devem estar cadastrados no WCS com suas dimensões e peso — esse cadastro é de responsabilidade do cliente.

#### SE `c1 = tbd` → OMITIR o capítulo de Cubagem e sinalizar como pendente.

---

### Tipo de caixa — derivado de `c2` + `l1` / `l1_m`

#### SE `c2 = no` (tipo único) → ADICIONA em "Seleção automática da caixa"
A operação utiliza um único tipo de caixa padrão para todos os pedidos. O WCS associa sempre essa caixa a cada volume gerado, garantindo padronização total do processo logístico. O cadastro das medidas da caixa plástica é de responsabilidade do cliente.

#### SE `c2 = yes` (múltiplos tipos) → ADICIONA em "Seleção automática da caixa"
O WCS seleciona, dentre os tipos de caixas cadastrados no sistema, a menor opção que acomoda o volume total da missão. O cadastro de tipos de caixas — incluindo dimensões (altura, largura, comprimento) e peso de cada tipo — é de responsabilidade do cliente. Caso nenhum tipo cadastrado acomode o pedido, o WCS sinaliza exceção para tratativa operacional.

---

### Validação de dimensões físicas — parâmetro de configuração (Beta / Beta Esteio)

#### SE validação de dimensões está ATIVA → ADICIONA subseção "Validação de Dimensões"
O WCS valida se qualquer uma das dimensões individuais do item ou da composição da missão (altura, largura ou comprimento) ultrapassa os limites dimensionais da caixa selecionada, além de validar a cubagem total (m³). Caso alguma dimensão exceda o limite, o sistema seleciona automaticamente uma caixa alternativa compatível.

#### SE validação de dimensões está INATIVA → ADICIONA nota em "Seleção automática da caixa"
O WCS considera exclusivamente a cubagem total (m³) da missão para a seleção da caixa, desprezando a validação individual das dimensões (altura, largura e comprimento).

---

### Segregação por família de produtos — derivado de evidência NavePark

#### SE o projeto tem regras de incompatibilidade de famílias → ADICIONA subseção "Segregação por Família"
Para garantir a integridade da carga, a cubagem respeita a compatibilidade entre famílias de produtos (campo `categoria` recebido na integração de pedidos). O WCS não mistura, no mesmo volume, famílias definidas como incompatíveis entre si. A configuração de quais famílias não podem coexistir no mesmo volume é parametrizável pelo cliente na **Tela de Matriz de Incompatibilidade de Famílias** no WCS. A regra é bidirecional: se a família A é incompatível com a família B, a família B também é incompatível com a família A. Pedidos com itens de famílias incompatíveis geram volumes separados automaticamente durante a cubagem. *(Visto em NavePark; também presente em MASTER para famílias higiene/alimentícios/hospitalares — tratado no WMS nesse caso.)*

---

### Cubagem de pallet (bin packing tridimensional) — derivado de evidência NavePark / Wild Fork

#### SE o projeto inclui cubagem de pallet (WCS como detentor do bin packing) → ADICIONA subseção "Cubagem de Pallet"
Para operações em que o WCS é responsável pela montagem de pallets de expedição, o sistema utiliza um **algoritmo tridimensional (bin packing)** para determinar a quantidade ideal de pallets e a composição de cada um, a partir dos itens brutos do pedido. O algoritmo considera:
- Volume e dimensões dos itens.
- Matriz de fragilidade dos SKUs para sequenciamento de indução (itens pesados na base, frágeis no topo). → ver [[matriz-fragilidade]].
- Compatibilidade entre famílias de produtos (se aplicável).

---

### Validação de peso do pallet — derivado de evidência BRF Salvador

#### SE o projeto tem validação de peso máximo de pallet → ADICIONA subseção "Validação de Peso do Pallet"
Antes de disponibilizar o pallet para etapas operacionais, o WCS executa a validação de peso: soma o peso informado no pedido (TORD) para cada lote com a tara configurada no Velox (peso do pallet vazio + stretch) e compara o resultado com o limite máximo aceitável configurado no sistema. Caso o peso calculado ultrapasse o limite, o WCS indica erro de processamento na tela de ordem e transporte. O erro não é retornado ao sistema de gestão (ex: SAP) via integração. Somente pallets que atendem à validação de peso seguem no fluxo. *(Visto em BRF Salvador — limite inicial de 1.200 kg, ajustável via chamado.)*

---

### Gate

#### SE `cu1 = no` ou `tbd` → OMITIR o capítulo inteiro de Cubagem.

---

## Observações Livres do Kickoff
Campos de texto: `c1` (responsável) e observações abertas.

O ED deve:
- **`c1 = wcs`** → utilizar o Texto Padrão completo; mencionar o tipo de caixa conforme `l1`/`l1_m`.
- **`c1 = wms_only`** → substituir por versão enxuta; manter apenas o parágrafo de cadastro de caixas no WCS e a referência ao LPN recebido na integração.
- **Observação que define caixa única padrão** → mencionar explicitamente que "a caixa plástica será sempre a mesma" e que o cadastro das medidas é de responsabilidade do cliente.
- **Observação que descreve restrição de segregação** (ex: "produtos de higiene não podem misturar com alimentícios") → ADICIONAR como restrição explícita na subseção "Segregação por Família", com `[OBS INTERNA]` se não houver confirmação de parametrização via tela de matriz.
- **Observação sobre código de barras no volume** → ADICIONAR nota ao final do capítulo: "Para garantir a leitura correta dos volumes no sorter, cada caixa deve ter apenas um código de barras visível e legível. Múltiplos códigos de barras podem causar erros de leitura. (Peter 2 / MASTER)."

---

## Regras de Negócio
- **RN-01** (todos com `c1 = wcs`): o WCS é o responsável pelo cálculo de cubagem; o cadastro de dimensões/medidas das caixas e dos itens é de responsabilidade do cliente.
- **RN-02** (todos com `c1 = wcs`): a seleção da caixa é automática — o operador **não** define manualmente o tipo de embalagem durante a separação.
- **RN-03** (todos com `c1 = wms_only`): o WCS recebe o pedido já cubado (caixa + LPN definidos pelo WMS) e controla apenas o fluxo físico; os tipos de caixas devem estar cadastrados no WCS mesmo assim.
- **RN-04** (Beta / Beta Esteio — parâmetro ativo): quando a validação de dimensões está ativa, qualquer dimensão individual (altura, largura ou comprimento) que exceder o limite da caixa força a seleção de caixa alternativa, independentemente do volume total em m³.
- **RN-05** (Beta / Beta Esteio — parâmetro inativo): quando a validação de dimensões está inativa, apenas o volume total (m³) é utilizado para seleção da caixa; dimensões individuais são desprezadas.
- **RN-06** (NavePark): a incompatibilidade de famílias é **bidirecional** — se A é incompatível com B, B também é incompatível com A; a configuração é feita pelo cliente na Matriz de Incompatibilidade de Famílias.
- **RN-07** (NavePark / Wild Fork): em cubagem de pallet, o algoritmo sequencia a indução em ordem decrescente de fragilidade/peso (classe mais pesada = base, classe mais leve = topo).
- **RN-08** (BRF Salvador): a validação de peso de pallet é pré-condição para liberação do fluxo; falha **não** é enviada ao sistema de gestão externo (SAP) via integração — é registrada apenas na tela interna do WCS.
- **RN-09** (BELEZA Fase 1 e 2): quando a operação usa caixa plástica única, o WCS não realiza seleção entre tipos — apenas associa o padrão definido ao volume.
- **RN-10** (Peter 2 / MASTER): para correta leitura no sorter, cada caixa deve conter apenas um código de barras legível. Múltiplos códigos podem causar leituras incorretas — restrição operacional a ser comunicada ao cliente.

## Insights e Padrões
### Padrões identificados
- A **divisão de responsabilidade WCS vs. WMS** é o principal bifurcador do capítulo: quando `c1 = wcs`, o capítulo é extenso (algoritmo, seleção, segregação, validação); quando `c1 = wms_only`, o capítulo é enxuto (recebe pronto, cadastra caixas).
- **Caixa única plástica** (BELEZA Fase 1 e 2) é o cenário mais simples: WCS cubage = associação direta ao padrão, sem lógica de seleção.
- **Múltiplos tipos de caixa com seleção automática** (Beta, Beta Esteio, NavePark) é o cenário mais completo e exige cadastro detalhado de tipos com dimensões.
- O **cadastro de caixas e produtos** (dimensões, peso) ser responsabilidade do cliente é constante em 100% dos projetos — ponto de atenção no kickoff.

### Variações significativas
- **NavePark** é o único Top 10 com **algoritmo tridimensional de bin packing** explícito para caixas de transporte + **segregação por família** parametrizável via tela de Matriz de Incompatibilidade.
- **BRF Salvador** traz uma dimensão incomum: **validação de peso máximo de pallet** antes de liberar o fluxo — mais próxima de um gate de picking do que de cubagem clássica.
- **Wild Fork** e **NavePark** estendem a cubagem para o nível de **pallet de expedição** (bin packing), enquanto os demais projetos Top 10 tratam cubagem apenas a nível de caixa de picking.
- **MASTER / Peter 2** delegam a cubagem ao WMS — o WCS é passivo; padrão recorrente em projetos com WMS SAP/WMS robusto.
- **DIA**: matriz de fragilidade é totalmente responsabilidade do WMS (não do WCS).

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **"validação de dimensões ativa/inativa"** (parâmetro de configuração Beta/Beta Esteio) — hoje inferido por texto livre. Candidato a checkbox ou select.
- Não há campo para **"segregação por família de produtos"** — aparece em texto livre (NavePark, MASTER). Candidato a checkbox.
- Não há campo para **"cubagem de pallet" vs "cubagem de caixa"** — projetos com bin packing de pallet (NavePark, Wild Fork) usam o mesmo `cu1` de cubagem de caixa. Candidato a select adicional.
- O campo `c1` (responsável pela cubagem) tem apenas `wcs`/`wms_only`/`tbd` — não captura cenários híbridos (ex: WCS faz caixa, WMS faz pallet).

### Inferências
- **Inferência:** quando `c1 = wcs` e `c2 = yes` (múltiplos tipos de caixa), o projeto quase sempre tem parâmetro de validação de dimensões configurável. · **Confiabilidade:** alta · **Base:** Beta, Beta Esteio.
- **Inferência:** quando `c1 = wms_only`, o WCS ainda precisa do cadastro de tipos de caixas para rastreabilidade no sorter. · **Confiabilidade:** alta · **Base:** MASTER, Peter 2, Payless.
- **Inferência:** projetos com bin packing de pallet (NavePark, Wild Fork) tendem a ter matriz de fragilidade obrigatória. · **Confiabilidade:** alta · **Base:** NavePark, Wild Fork, Payless.

## Dependências (grafo)
- **Entra depois de:** [[integracao-pedidos]] (recebe SKU × Qtd + dimensões dos produtos)
- **Sai para:** [[order-start]] (caixa selecionada disponível ao operador)
- **Consulta/alimenta:** [[cadastro-produtos]] (dimensões/peso por SKU), [[cadastro-caixas]] (tipos, dimensões, tara)
- **Influencia:** [[picking-pbl]] · [[picking-cart]] (operador recebe caixa pré-definida), [[packing]] (caixa não é trocada após cubagem, exceto exceção), [[sorter]] (LPN/código de barras único por volume)
- **Variante de pallet:** [[matriz-fragilidade]] (sequenciamento de indução), [[paletizacao]] (bin packing de pallet — NavePark, Wild Fork)
