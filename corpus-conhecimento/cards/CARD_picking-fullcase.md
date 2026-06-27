# Picking Full Case — Knowledge Card

> CARD abrangente do tópico **Picking Full Case**. Fonte: Top 10 (BP, Beta, NavePark, BRF Salvador) + complementares (Beta Full SP, MASTER, Payless, Peter 2). O ED usa este arquivo para gerar o capítulo de Picking Full Case do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`fullcase` `full-case` `picking-fullcase` `separacao-caixa` `caixa-fechada` `fc1`
`coletor-android` `fc-coletor` `etiqueta-led` `fc-etiq-led` `etiqueta-simples` `fc-etiq`
`order-start-fullcase` `os-fullcase` `dun14` `dun` `ean-embalagem`
`corte-fullcase` `finalizar-coleta` `coleta-parcial` `shortpicking-fc`
`cross-check` `portal-leitura` `conferencia-fullcase` `fc-conf`
`wms-only` `both-wms-wcs` `wcs-fc` `responsabilidade-separacao`
`reabastecimento` `indução-esteira` `sorter-fullcase` `rampa-destino`
`produto-perigoso` `etiqueta-fc` `impressora-fc`

## Metadados
- **Bloco:** separacao
- **Gate:** `fc1 = yes`
- **Subtópicos com CARD próprio:** [[cross-check]] (gate `st7`), [[conferencia-manual]]
- **Depende de:** [[order-start]] (Order Start Full Case cria a tarefa e imprime etiqueta mestre), [[integracao-pedidos]] (Wave com volumes FC já integrados)
- **Influencia:** [[conferencia]] (se `fc_conf = yes`), [[sorter]] (indução na esteira → desvio por rampa), [[reabastecimento]] (Beta/Beta Full SP: lista mista FC + reab), [[etiquetas]] (layout de impressão FC e FC perigoso)
- **Cruza com:** [[shortpicking]] (corte de FC), [[packing]] (se FC passa por conferência antes), [[integracao-pedidos]] (Picking Confirm — pode não se aplicar ao FC wms_only)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{fc_tem}}` | `fc1` | select | yes / no / tbd |
| `{{fc_resp}}` | `fc_r` | select | `wcs`=WCS · `wms_only`=WMS · `both_wms_wcs`=Ambos · `tbd` |
| `{{fc_metodo_wcs}}` | `fc2` | select | `fc_coletor`=Coletor · `fc_etiq_led`=Etiq+LED · `fc_etiq`=Etiqueta · `tbd` |
| `{{fc_metodo_both}}` | `fc2b` | select | `fc_coletor`=Coletor · `fc_etiq_led`=Etiq+LED · `fc_etiq`=Etiqueta · `tbd` |
| `{{fc_impressora}}` | `fc_i` | select | yes / no |
| `{{fc_imp_forn}}` | `fc_if` | select | `invent`=Invent · `client`=Cliente · `both_resp`=Ambos · `tbd` |
| `{{fc_conf}}` | `fc_conf` | select | yes / no / tbd — espelha `cf_gate` |
| `{{fc_conf_hw}}` | `fc_conf_hw` | select | `fc_hw_col`=Coletor Android · `fc_hw_pdv`=PDV+Scanner de Mão |
| `{{fc_conf_forn}}` | `fc_conf_forn` | select | `invent`=Invent · `client`=Cliente · `both_resp`=Ambos · `tbd` |

> **Atenção:** `fc2` só aparece quando `fc_r = wcs`; `fc2b` só aparece quando `fc_r = both_wms_wcs`. `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada presente quando `fc_r = wcs` ou `fc_r = both_wms_wcs`. O ED parte daqui e aplica as condicionais. Para `fc_r = wms_only`, usar apenas a subseção reduzida — ver Condicionais.)*

O Picking Full Case é a etapa de separação de **caixas fechadas** (não fracionadas), executada após o [[order-start]] Full Case. Diferentemente do picking fracionado (PBL/FlowRack), o operador coleta a caixa inteira, sem abri-la ou fracionar o conteúdo.

**Fluxo operacional padrão (fc_r = wcs, método coletor):**

1. **Direcionamento automático.** Ao concluir o Order Start Full Case, o WCS direciona o coletor Android automaticamente para a tela de coleta. O operador se desloca até a rua (corredor) selecionada pelo sistema.

2. **Lista de coleta.** Na tela do coletor é exibida a lista de itens a coletar, com informações detalhadas de endereço, produto e quantidade. O WCS atualiza a lista à medida que o operador confirma as leituras.

3. **Execução da coleta por endereço.** Para cada endereço da lista:
   - O operador se dirige ao endereço indicado e realiza a **leitura do código do endereço** para iniciar a separação do item correspondente.
   - Em seguida, realiza a **leitura da etiqueta impressa no Order Start** (etiqueta mestre da coleta).
   - Por fim, realiza a **leitura do código do produto** (DUN14 ou EAN da embalagem) para confirmar a separação. Esse processo de leitura é repetido para cada unidade coletada no endereço.
   - Após concluir as leituras do endereço, o operador segue para o próximo endereço da lista e repete o processo.

4. **Troca de endereço.** Caso o operador não encontre produtos suficientes em um endereço, ele pode avançar para o próximo endereço e realizar a leitura do código correspondente, mudando o item em coleta sem interromper o processo.

5. **Finalizar Coleta e Corte de Itens.** Em caso de falta de produtos, o operador aciona **"Finalizar Coleta"** na tela do coletor. O WCS exibe uma tela onde o operador deve realizar a **leitura das etiquetas dos itens que não serão coletados**; após essas leituras, o WCS registra os itens como **cortados**. Recomenda-se acionar o setor de auditoria de estoque para validar a falta real antes de confirmar o corte.

6. **Indução na esteira e destinação.** Ao concluir a coleta na rua, o operador induz os volumes na esteira. O WCS direciona cada volume para a rampa de destino correspondente (transportadora/rota) via sorter, seguindo o fluxo padrão de checkout. *(Quando aplicável, o cross-check é realizado no portal de leitura — ver [[cross-check]].)*

---

## Condicionais

### Responsabilidade da Separação — derivado de `fc_r`

#### SE `fc_r = wcs` → USAR Texto Padrão completo, com método derivado de `fc2`
O WCS é responsável por toda a operação de separação Full Case: Order Start, direcionamento, coleta guiada, corte e indução. Usar o fluxo operacional completo descrito acima. O método de coleta é definido por `fc2` (ver condicionais de método abaixo).

#### SE `fc_r = both_wms_wcs` → USAR Texto Padrão adaptado, com método derivado de `fc2b`
WCS e WMS compartilham a responsabilidade. O WCS gerencia o fluxo de coleta (Order Start FC, tela de coletor, confirmações, corte e indução), mas parte da lógica de pedido ou confirmação pode estar no WMS. O método de coleta é definido por `fc2b`. Verificar com a operação quais etapas cabem a cada sistema.

#### SE `fc_r = wms_only` → SUBSTITUIR Texto Padrão pelo bloco reduzido abaixo
O WMS é responsável pela separação e etiquetagem dos volumes Full Case. **O WCS não participa do processo de coleta.** Os volumes chegam já etiquetados e integrados via Wave; o WCS apenas os recebe na esteira para desvio no sorter. A integração de Picking Confirm **não se aplica** a esses volumes. As etiquetas de identificação devem estar fixadas na **parte superior** das caixas para garantia de leitura correta no portal do sorter. *(Ver também [[cross-check]] para desvio automático por rampa.)*

#### SE `fc_r = tbd` → OMITIR o detalhamento do método; manter apenas parágrafo introdutório com gate pendente.

---

### Método de Coleta (fc_r = wcs) — derivado de `fc2`

#### SE `fc2 = fc_coletor` (Coletor) → USAR fluxo padrão detalhado acima
Coleta guiada por **coletor Android**: leitura de endereço → leitura da etiqueta Order Start → leitura do DUN/EAN do produto, repetida por unidade. É o método mais detalhado e com maior validação passo a passo. *(Padrão de BP, Beta e NavePark.)*

#### SE `fc2 = fc_etiq_led` (Etiqueta + LED) → SUBSTITUIR subitem 3 do fluxo padrão
O endereço de coleta é sinalizado por **LED** aceso no display da posição. O operador segue a sinalização luminosa, retira a(s) caixa(s) indicada(s), **apaga o LED** ao confirmar a coleta e afixa a etiqueta do Order Start no volume. O coletor Android é usado apenas para navegação e corte; a validação primária é feita pelo LED. *(Visto em NavePark — "os leds irão acender sinalizando a quantidade de caixas a serem retiradas … o operador apaga o led".)*

#### SE `fc2 = fc_etiq` (Etiqueta simples) → ADAPTAR subitem 3 do fluxo padrão
Não há LED nem leitura de DUN obrigatória por unidade. O operador localiza o endereço pela lista do coletor (ou instrução impressa), retira a quantidade indicada e **afixa a etiqueta** do Order Start no volume. A confirmação é feita manualmente pelo operador ou pela leitura da própria etiqueta.

#### SE `fc2 = tbd` → OMITIR detalhamento do método; registrar como "a definir".

---

### Método de Coleta (fc_r = both_wms_wcs) — derivado de `fc2b`
Aplicar as mesmas condicionais de `fc2` (coletor / etiq+led / etiq), porém sinalizando que a responsabilidade é compartilhada e que etapas do WMS podem sobrepor partes do fluxo WCS. Verificar divisão exata com o cliente.

---

### Impressora Full Case — derivado de `fc_i` e `fc_if`

#### SE `fc_i = yes` → ADICIONAR subseção "Impressão de Etiquetas Full Case"
A operação conta com impressora dedicada ao Full Case para impressão das etiquetas geradas no Order Start FC. O fornecimento da impressora é de responsabilidade de `{{fc_imp_forn}}`. O layout de impressão segue o padrão definido para Full Case (e, quando aplicável, layout especial para **produtos perigosos** — ver RN-05).

#### SE `fc_i = no` → OMITIR subseção de impressão; mencionar apenas que etiquetas são geradas no Order Start sem impressora dedicada.

---

### Conferência Full Case — derivado de `fc_conf` e `fc_conf_hw`

#### SE `fc_conf = yes` → ADICIONAR subseção "Conferência de Full Case" e referenciar [[conferencia]] e [[cross-check]]
Os volumes Full Case passam por conferência após a coleta. O hardware utilizado é `{{fc_conf_hw}}`:
- **`fc_hw_col` (Coletor Android):** conferência realizada via coletor, seguindo o fluxo descrito em [[conferencia]].
- **`fc_hw_pdv` (PDV + Scanner de Mão):** conferência realizada em estação PDV com scanner manual, seguindo o fluxo descrito em [[conferencia]].
Quando o projeto tem sorter/portal de leitura, o cross-check no portal substitui ou complementa a conferência manual — ver [[cross-check]] (gate `st7`).

#### SE `fc_conf = no` → MENCIONAR ausência de conferência dedicada; volumes seguem direto para sorter após indução.
O fornecimento do coletor mencionado em `fc_conf_forn` é de responsabilidade de `{{fc_conf_forn}}` *(campo preenchido quando `fc_conf = no`, indicando fornecedor do hardware caso exista equipamento legado ou planejado)*.

#### SE `fc_conf = tbd` → OMITIR subseção; registrar como pendente de definição.

---

### Lista Mista FC + Reabastecimento — variante identificada em Beta / Beta Full SP

#### SE o projeto usa lista mista (FC + reabastecimento na mesma tarefa) → ADICIONAR subseção "Lista Mista de Coleta"
A lista de coleta pode conter tanto itens de Full Case quanto itens de **Reabastecimento**, agrupados em uma única lista e diferenciados apenas pela etiqueta impressa. O processo de coleta (leitura de endereço → quantidade → leitura do DUN) é idêntico para ambos os tipos. A diferença ocorre na destinação após a indução na esteira:
- **Volumes Full Case:** direcionados via sorter para a rampa de destino (transportadora/rota).
- **Volumes de Reabastecimento:** direcionados para a área de reabastecimento; o WCS gera automaticamente a tarefa de reabastecimento para movimentação até a posição final de Picking Fracionado. Itens de Reabastecimento cortados **não** geram tarefa de reabastecimento no WCS, mas o sistema registra a ocorrência para visibilidade operacional. *(Ver [[reabastecimento]].)*

---

### Validação em Três Etapas (Payless) — variante com bipagem tripla

#### SE o projeto exige validação tripla (posição + etiqueta mestre + DUN) → SUBSTITUIR subitem 3 do fluxo padrão
A coleta é validada em três etapas sequenciais obrigatórias:
1. Leitura do **código da posição** (fixado no piso ou na longarina) — confirma corredor correto.
2. Leitura da **etiqueta Master** da coleta — chama o contexto do pedido.
3. Leitura do **código da caixa fechada** (DUN14 ou EAN da embalagem) — confirma o produto.
Somente com as três leituras validadas a coleta é registrada. Se o pallet zerar antes de completar o romaneio, o operador aciona **"Finalizar Coleta Parcial"** — os itens restantes são registrados como corte.

---

## Observações Livres do Kickoff
Campos de texto relevantes para Full Case: qualquer observação em `fc_r`, `fc2`, `fc2b`, `fc_if`, `fc_conf_forn` e campos de texto livre do bloco FC.

O ED deve:
- **Observação sobre corredores dedicados** (ex: "N corredores FC", "área dedicada FC no térreo") → mencionar na abertura do capítulo ou no subitem 1 do fluxo.
- **Observação sobre produtos perigosos** → ADICIONAR subseção "Full Case Perigoso" com layout de impressão específico (ver RN-05).
- **Observação sobre integração Wave** (ex: "FC já chega integrado via Wave antes do OS") → mencionar na subseção de integração e referenciar [[integracao-pedidos]].
- **Observação que restringe escopo** (ex: "FC só para produtos de alto giro") → SUBSTITUIR abertura do capítulo com a restrição explícita.
- **Observação que adiciona etapa** não coberta pelo padrão → ADICIONAR como subseção nomeada ao final do fluxo, com `[OBS INTERNA]` se precisar de validação da operação.

---

## Regras de Negócio
- **RN-01** (todos com `fc_r = wcs` ou `both_wms_wcs`): o WCS direciona o coletor automaticamente para a tela de coleta ao término do Order Start Full Case — o operador não precisa navegar manualmente.
- **RN-02** (todos): ao acionar "Finalizar Coleta", o operador deve realizar a leitura das etiquetas dos itens não coletados antes que o WCS registre o corte — o corte não é automático por omissão, é confirmado por leitura.
- **RN-03** (todos): recomenda-se acionar o setor de auditoria de estoque para validar a falta real do produto antes de confirmar o corte — o corte deve refletir a indisponibilidade física confirmada.
- **RN-04** (`fc_r = wms_only`): a integração de Picking Confirm **não se aplica** aos volumes Full Case gerenciados pelo WMS; o WCS apenas processa o desvio via sorter com base na Wave.
- **RN-05** (projetos com produtos perigosos): volumes Full Case enquadrados como perigosos recebem layout de impressão de etiqueta específico, diferente do layout padrão FC.
- **RN-06** (lista mista FC + reabastecimento): itens de Reabastecimento cortados durante o "Finalizar Coleta" **não** geram tarefa de reabastecimento no WCS; o sistema registra a ocorrência apenas para visibilidade operacional.
- **RN-07** (`fc_r = wms_only`): as etiquetas de identificação devem estar fixadas na **parte superior** das caixas para garantia de leitura correta no portal do sorter — etiqueta em posição incorreta pode causar não-leitura e desvio para rejeito.
- **RN-08** (NavePark — full case em mezanino): posições de costas do mezanino operam de forma mista (Full Case + fracionado de maior cubagem). O WCS indica no display a retirada da caixa fechada; o operador etiqueta e deposita na Esteira Expressa (Túnel). A lógica de Skip Zone considera item no mezanino sempre que houver coleta em qualquer posição mezanino.
- **RN-09** (Beta / Beta Full SP): o processo de coleta (leitura de endereço → quantidade → leitura do DUN) é **idêntico** para itens Full Case e Reabastecimento na lista mista; a diferença está apenas na destinação pós-indução.

---

## Insights e Padrões

### Padrões identificados
- O **núcleo operacional** (Order Start FC → coletor → leitura endereço → leitura etiqueta OS → leitura DUN → indução na esteira) é consistente em BP, Beta e NavePark — é o fluxo canônico para `fc_r = wcs` com método coletor.
- "Finalizar Coleta" + leitura das etiquetas dos itens não coletados + corte aparece em 100% dos projetos com `fc_r = wcs` — é o mecanismo padrão de shortpicking para Full Case.
- O Full Case gerenciado pelo WMS (`wms_only`) **não** tem Order Start no WCS e **não** usa Picking Confirm — recorrente em Peter 2 e MASTER; a entrada no WCS é exclusivamente via Wave e sorter.

### Variações significativas
- **NavePark** usa **LED** (display) para sinalizar a posição, combinado com coletor — variante `fc_etiq_led`; o operador apaga o LED ao confirmar a coleta. Único caso observado com LED em Full Case.
- **Beta / Beta Full SP** têm **lista mista FC + Reabastecimento** na mesma tarefa de coletor — incomum; a separação entre os dois fluxos é feita apenas pela etiqueta impressa e pela destinação pós-esteira.
- **Payless** usa **validação tripla** (posição + etiqueta mestre + DUN) com "Finalizar Coleta Parcial" — maior rigor de rastreabilidade; coletor fornecido pelo Cliente.
- **MASTER / Peter 2** têm Full Case **100% wms_only**: WCS não participa da coleta, apenas recebe os volumes no sorter via Wave; sem Order Start e sem Picking Confirm pelo WCS.
- **BP** menciona layout de impressão específico para **produtos perigosos** em Full Case — diferenciação de etiqueta não usual em outros projetos.
- **NavePark** tem **área dedicada de Full Case** no térreo (demanda principal) + posições de Full Case nas costas do térreo e mezanino (demanda menor) — divisão por volume de demanda no layout físico.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **"lista mista FC + Reabastecimento"** — hoje inferido pelo contexto do projeto. Candidato a checkbox.
- Não há campo para **"validação tripla"** (posição + etiqueta mestre + DUN) — hoje tratado como variante em texto livre. Candidato a checkbox ou campo de método avançado.
- Não há campo explícito para **"produtos perigosos no FC"** — a existência de layout especial de etiqueta não é capturada pelo kickoff atual. Candidato a checkbox dependente de `fc1 = yes`.
- O campo `fc_conf_forn` tem nome ambíguo: é preenchido quando `fc_conf = no`, sugerindo hardware existente mesmo sem conferência WCS — semântica confusa; candidato a renomeação ou documentação de uso.

### Inferências
- **Inferência:** quando `fc_r = wcs` e `fc2 = fc_coletor`, o projeto quase sempre tem sorter com cross-check no portal (gate `st7 = yes`). · **Confiabilidade:** alta · **Base:** BP, Beta, NavePark — todos têm sorter + portal.
- **Inferência:** `fc_r = wms_only` implica ausência de Order Start FC no WCS e ausência de Picking Confirm FC. · **Confiabilidade:** alta · **Base:** Peter 2, MASTER — padrão explícito nos dois documentos.
- **Inferência:** projetos com `fc_r = both_wms_wcs` tendem a ter integração mais complexa (Wave + confirmação parcial no WCS). · **Confiabilidade:** média · **Base:** ausência de casos puros documentados; inferência estrutural.

---

## Dependências (grafo)
- **Entra depois de:** [[order-start]] (Order Start Full Case gera tarefa e imprime etiqueta mestre) → [[integracao-pedidos]] (Wave com volumes FC integrados)
- **Sai para:** [[sorter]] (indução na esteira → portal → rampa de destino) → *(quando `fc_conf = yes`)* [[conferencia]] / [[cross-check]]
- **Consulta/alimenta:** [[integracao-pedidos]] (Wave; Picking Confirm — ausente em `wms_only`), [[etiquetas]] (layout FC e FC perigoso), [[shortpicking]] (corte por "Finalizar Coleta")
- **Variante paralela:** [[reabastecimento]] (lista mista FC + reab em Beta/Beta Full SP)
- **Variante de conferência:** [[cross-check]] (gate `st7`) · [[conferencia]] (gate `fc_conf = yes`)
