# Conferência — Knowledge Card

> CARD abrangente do tópico **Conferência**. Fonte: Top 10 (BELEZA, Beta, BRF Salvador, CDSK, ELETRO, NavePark) + complementares (BR, Peter 2, Beta Esteio, Beta Full SP, Guatemala). O ED usa este arquivo para gerar o capítulo de Conferência do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`conferencia` `conferência` `cf_gate` `cf_t1` `cf_t2` `conferencia-cega` `blind-check`
`item-a-item` `multiplicador` `bipa-ean` `check-weight` `balanca-dinamica` `tolerancia-peso`
`rfid` `antena-rfid` `amostragem` `flag-cliente` `cliente-novo` `desvio-conferencia`
`corte` `encerrar-conferencia` `coleta-posterior` `reimpressao-etiqueta` `consolidacao-volumes`
`tela-conferencia` `estacao-conferencia` `mesa-conferencia` `auditoria-volume`

## Metadados
- **Bloco:** conferencia
- **Gate:** `cf_gate = yes` (sinônimo: `fc_conf = yes` — os dois campos são espelhados no kickoff)
- **Subtópicos com CARD próprio:** [[cross-check]] (gate `st7`), [[conferencia-manual]] (amostragem/auditoria), [[packing]]
- **Depende de:** [[order-start]] (cria o volume/pega), [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (origem do shortpicking)
- **Influencia:** [[etiquetas]] (reimpressão pós-corte), [[packing]] (etiqueta de packing), [[sorter]] (volume aprovado segue p/ sorter)
- **Cruza com:** [[pesagem]] · [[shortpicking]] · [[integracao-pedidos]] (flags `conferencia`/`cliente_novo` na wave)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{conf_tem}}` | `cf_gate` | select | yes / no / tbd |
| `{{conf_tipo}}` | `cf_t1` | multi | `conf_blind`=Cega · `conf_item`=Item a Item · `conf_multi`=Multiplicador · `conf_ean`=Bipa EAN · tbd |
| `{{conf_estacoes}}` | `cf2` | texto livre | nº de estações de conferência |
| `{{conf_desvio}}` | `cf_t2` | multi | `conf_weight`=Balança · `conf_rfid`=RFID · `conf_sample`=Amostragem · `conf_client`=Por cliente · `conf_product`=Por produto · `conf_100`=100% itens · tbd |
| `{{conf_tolerancia}}` | `cf4` | texto livre | tolerância da balança (ex: "260g, múltiplo de 20g") |

> **Multi-select** usa `|||` como separador no kickoff. `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com `cf_gate = yes`. O ED parte daqui e aplica as condicionais.)*

A Conferência é a estação onde o WCS valida o conteúdo de um volume (caixa/"pega") antes de seguir para packing/expedição. Nem todo volume é conferido: o WCS desvia para a conferência apenas os volumes que atendem aos critérios configurados (ver subseção **Motivos de Desvio**). Os volumes aprovados seguem direto para o fluxo de saída (packing/sorter) sem passar pela estação.

**Fluxo operacional padrão:**

1. **Abertura da tela de conferência.** O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura da etiqueta do volume desviado para iniciar o processo. O WCS exibe a lista de itens que compõem o volume e o operador responsável pela coleta (a nível de item), além do motivo pelo qual o volume foi desviado para a conferência. Itens que sofreram corte ficam evidenciados na tela.

2. **Validação dos itens.** O operador valida o conteúdo da caixa conforme o método configurado (ver **Condicionais — Método de Conferência**). Durante a validação, o operador pode:
   - **Completar a caixa**, caso o item faltante esteja disponível; ou
   - **Finalizar com itens faltantes**, acionando o botão **"Encerrar Conferência"**.

3. **Corte de itens faltantes.** Ao acionar **"Encerrar Conferência"**, o operador seleciona a opção de **corte**. O WCS entende que os itens não lidos foram cortados e registra essa informação no sistema. *(Em parte dos projetos o corte exige autenticação de um supervisor — ver RN-04.)*

4. **Coleta posterior de itens cortados.** Caso o operador realize a coleta complementar do item faltante, ele lê o EAN (ou EAN_DZ) do produto; o WCS reconhece o item como coletado e atualiza o volume. Alternativamente, o volume pode ser reenviado ao Order Start para coleta por outro operador.

5. **Reimpressão de etiqueta.** Caso haja itens cortados, o WCS reimprime automaticamente a etiqueta do volume ao finalizar a conferência, considerando apenas os itens efetivamente coletados. A nova etiqueta substitui a original.

6. **Registro e rastreabilidade.** O WCS registra os operadores que realizaram cada conferência. Ao final, a relação de itens conferidos é enviada ao WMS para confirmação (ver [[integracao-pedidos]]).

---

## Condicionais

### Método de Conferência — derivado de `cf_t1` (multi-select)

#### SE `cf_t1` contém `conf_item` (Item a Item) → ADICIONA em "Validação dos itens"
Cada item é lido individualmente para contabilizar a quantidade e depositado em uma nova caixa. É o método mais comum e o default quando `cf_t1 = tbd`.

#### SE `cf_t1` contém `conf_blind` (Conferência Cega / Blind Check) → ADICIONA em "Validação dos itens"
A conferência é **cega**: o WCS **não** exibe ao conferente as quantidades esperadas do pedido. O operador conta fisicamente e informa a quantidade encontrada; o sistema compara internamente com o esperado e sinaliza divergências. Reduz viés de confirmação do conferente.

#### SE `cf_t1` contém `conf_multi` (Multiplicador) → ADICIONA em "Validação dos itens"
O operador lê **uma unidade por SKU** e informa manualmente a quantidade correspondente (multiplicador), em vez de bipar item a item. Acelera a conferência de volumes com muitas unidades do mesmo SKU.

#### SE `cf_t1` contém `conf_ean` (Bipa EAN) → ADICIONA em "Validação dos itens"
A validação é feita pela leitura do código **EAN** (ou EAN_DZ para caixas/dúzias) de cada item, garantindo identificação do produto além da contagem.

### Motivos de Desvio para Conferência — derivado de `cf_t2` (multi-select)
*(Subseção "Motivos de Desvio": o WCS desvia o volume para a conferência quando.)*

#### SE `cf_t2` contém `conf_weight` (Balança / Check Weight) → ADICIONA subseção "Aferição de Peso"
Após o picking, o volume passa por uma **balança dinâmica** no final da linha, onde o peso real é comparado ao peso esperado (soma dos pesos cadastrais dos itens + tara). Se a diferença exceder a **tolerância** configurada (`{{conf_tolerancia}}`), o volume é desviado para conferência. *(O peso unitário vem do cadastro de produtos, parâmetro `peso_item`; a tara, do Order Start.)*

#### SE `cf_t2` contém `conf_rfid` (RFID) → ADICIONA subseção "Portal RFID"
Após a linha de picking há um **portal com antena RFID** que detecta os itens presentes na caixa. Se a quantidade detectada pela antena for diferente da esperada, o volume é desviado para conferência. *(Visto no BELEZA.)*

#### SE `cf_t2` contém `conf_sample` (Amostragem) → ADICIONA subseção "Amostragem por Percentual"
O WCS desvia para conferência um **percentual** configurável dos volumes, de forma **randômica** (não sequencial). O parâmetro é ajustável pela operação. *(Regra aplicada apenas a fracionados; full case não entra no cálculo. Volumes já desviados por outra regra não entram na amostragem.)* → ver também [[conferencia-manual]].

#### SE `cf_t2` contém `conf_client` (Por Cliente) → ADICIONA subseção "Flag por Cliente"
Clientes específicos têm 100% dos pedidos direcionados à conferência. O WMS sinaliza na integração de Wave o campo `conferencia = "Y"`. Inclui também o caso de **clientes novos** (`cliente_novo = "Y"`), direcionados 100% para conferência. → ver [[integracao-pedidos]].

#### SE `cf_t2` contém `conf_product` (Por Produto) → ADICIONA subseção "Por Categoria/Produto"
Categorias/produtos parametrizados pela operação acionam o desvio (ex: itens de alto valor, frágeis ou regulados).

#### SE `cf_t2` contém `conf_100` (100% itens) → SUBSTITUI a abertura do Texto Padrão
**Todos** os volumes passam obrigatoriamente pela conferência após o picking (não há desvio seletivo). A subseção "Motivos de Desvio" é omitida.

### Outras condicionais

#### SE shortpicking está em escopo (qualquer picking com corte) → ADICIONA em "Motivos de Desvio"
Volumes que sofreram **shortpicking** (quantidade separada < solicitada) são desviados para conferência para análise e tratativa. → ver [[shortpicking]].

#### SE `fc_conf = yes` E o projeto tem sorter/portal (fullcase) → ver [[cross-check]]
Para pedidos full case, a validação pode ocorrer como **Cross-Check** no portal de leitura (SKU × pedido), com desvio automático para rampa de rejeito em caso de falha. Tratar no CARD de [[cross-check]], referenciando aqui.

#### SE o projeto consolida volumes do mesmo pedido → ADICIONA em "Validação dos itens"
O operador pode ler um ou mais volumes (caixas) do mesmo pedido e consolidá-los em uma única caixa final, finalizada com a impressão da etiqueta de packing. *(Visto em Guatemala, BELEZA.)*

#### SE `cf_gate = no` ou `tbd` → OMITE o capítulo inteiro de Conferência.

---

## Observações Livres do Kickoff
Campos de texto: `cf2` (estações), `cf4` (tolerância) e qualquer observação livre.

O ED deve:
- **`cf2`** → mencionar o número de estações de conferência na abertura do capítulo (ex: "A operação conta com N estações de conferência").
- **`cf4`** → preencher `{{conf_tolerancia}}` na subseção de Aferição de Peso com o valor exato (ex: "tolerância de 260g, arredondada ao múltiplo de 20g mais próximo").
- **Observação que restringe escopo** (ex: "conferência só para itens de vidro") → SUBSTITUIR o trecho de "Motivos de Desvio" pela restrição explícita, deixando claro que só os itens/categorias citados são conferidos.
- **Observação que adiciona etapa** não coberta pelo padrão → ADICIONAR como subseção nomeada ao final do fluxo, com `[OBS INTERNA]` se precisar de validação da operação.

---

## Regras de Negócio
- **RN-01** (todos): apenas volumes que atendem aos critérios configurados são desviados para conferência; os demais seguem direto para packing/expedição.
- **RN-02** (todos): ao encerrar a conferência com itens não lidos, o WCS registra os itens como **cortados**.
- **RN-03** (todos): havendo corte, a etiqueta do volume é **reimpressa** considerando apenas os itens efetivamente coletados, substituindo a original.
- **RN-04** (BELEZA e projetos com controle de corte): o corte de item exige **autenticação de supervisor**.
- **RN-05** (check weight): a comparação peso real × esperado usa tolerância configurável em gramas; balanças da automação medem em passos de 20g.
- **RN-06** (amostragem): o cálculo de percentual considera **apenas fracionados** e ignora volumes já desviados por outra regra; envio randômico, não sequencial.
- **RN-07** (flag cliente): o desvio por cliente/cliente novo depende dos campos `conferencia`/`cliente_novo` virem preenchidos na integração de Wave.
- **RN-08** (CDSK / conferência por pallet): quando a conferência é por pallet e **opcional**, ela **não** se vincula a sorter/PTL e pode ser disparada para qualquer pallet lido, mesmo fora da linha de separação cadastrada.

## Insights e Padrões
### Padrões identificados
- O **fluxo operacional** (abrir tela → ler volume → validar → encerrar/cortar → coletar → reimprimir) é praticamente idêntico entre BELEZA, Beta, BR, Peter 2, Beta Esteio e Guatemala — é o núcleo padrão sólido.
- "Encerrar Conferência" + corte + reimpressão de etiqueta aparece em 100% dos projetos fracionados.

### Variações significativas
- **BELEZA** usa **portal RFID** (antena) como gatilho de desvio — incomum; a maioria usa balança/check weight.
- **Beta/ELETRO/Beta Full SP** tratam a validação como **Cross-Check** no portal de leitura para full case (desvio por PLC para rampa de rejeito) — é um fluxo distinto do item-a-item manual. → [[cross-check]].
- **CDSK** faz conferência **por pallet**, opcional e desacoplada do sorter/PTL.
- **Guatemala** permite conferência **flexível**: aprovar sem leitura, item a item, ou 1-por-SKU (multiplicador) — mistura de métodos numa mesma operação.
- **Peter 2 / BR** centram o desvio em **check weight** (balança) + shortpicking + flag cliente + % amostragem + 100% clientes novos.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para "**corte exige supervisor**" (RN-04) — hoje inferido. Candidato a checkbox.
- Não há campo para "**consolidação de volumes do mesmo pedido**" — aparece em texto livre. Candidato a checkbox.
- "**Conferência por pallet vs por caixa/volume**" (CDSK) não tem distinção explícita no kickoff — pode gerar ambiguidade.

### Inferências
- **Inferência:** quando `cf_t2` inclui `conf_weight`, o projeto quase sempre tem balança dinâmica na linha de picking fracionado. · **Confiabilidade:** alta · **Base:** BR, Peter 2, padrão recorrente.
- **Inferência:** `conf_blind` e `conf_100` raramente coexistem (cega pressupõe desvio seletivo). · **Confiabilidade:** média · **Base:** ausência de coocorrência nos Top 10.

## Dependências (grafo)
- **Entra depois de:** [[order-start]] → [[picking-pbl]]/[[picking-fullcase]]/[[picking-cart]]
- **Sai para:** [[packing]] → [[sorter]]/[[etiquetas]]
- **Consulta/alimenta:** [[integracao-pedidos]] (flags de desvio, confirmação ao WMS), [[pesagem]] (check weight), [[shortpicking]] (corte)
- **Variante paralela:** [[cross-check]] (fullcase, gate `st7`)
