# Sorter — Indução — Knowledge Card

> CARD abrangente do tópico **Sorter — Estação de Indução**. Fonte: Top 10 (BP, BRF Salvador, CDSK, Market Chile, Market Peru) + complementares (Barbecue, DIA, Esperança, Gavião, Peter 2). O ED usa este arquivo para gerar o capítulo de Indução do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`sorter-inducao` `inducao` `induction` `estacao-inducao` `camera` `balanca-linha`
`portal-leitura` `faces-leitura` `ia-sorter` `ler-barcode` `rfid-inducao`
`volume-integrado` `velox` `plc-inducao` `ean-inducao` `dun14`
`rejeito-inducao` `triagem-volumes` `etiqueta-ivt` `stage-inducao`
`multiplos-barcodes` `contingencia-leitura` `capacidade-sorter`

---

## Metadados
- **Bloco:** expedicao
- **Gate:** `st1 = yes` (Tem Sorter? → Sim)
- **Subtópicos com CARD próprio:** [[sorter]] (visão geral), [[cross-check]] (gate `st7`), [[sorter-rampas]] (rampas de saída e rejeito)
- **Depende de:** [[order-start]] (cria e etiqueta o volume), [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (geram os volumes que chegam à indução), [[conferencia]] (volumes aprovados seguem para indução), [[packing]] (volumes embalados seguem para indução)
- **Influencia:** [[sorter]] (recebe o volume identificado e aciona o PLC), [[sorter-rampas]] (desvio para rampa correta ou rejeito), [[etiquetas]] (reimpressão de etiqueta IVT+DUN em contingência)
- **Cruza com:** [[integracao-pedidos]] (volume deve estar integrado no Velox antes da indução), [[pesagem]] (balança de linha na indução captura peso real)

---

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{sorter_tem}}` | `st1` | select | yes / no / tbd |
| `{{sorter_indutores}}` | `st5` | texto livre | nº de indutores / estações de indução (ex: "2 indutores — esquerdo e direito") |
| `{{sorter_faces}}` | `st6` | texto livre | nº de faces do portal de leitura (ex: "3 faces", "5 faces") |
| `{{sorter_ia}}` | `st11` | YN | yes = tem IA de leitura · no = sem IA |
| `{{sorter_ia_tvs}}` | `st11_tvs` | texto livre | qtd de TVs/monitores do painel de IA [gate: st11:yes] |
| `{{sorter_capacidade}}` | `st_cap` | texto livre | capacidade em volumes/hora (ex: "6.000 vol/h") |
| `{{sorter_sla}}` | `st4` | texto livre | SLA portal → 1º HPD |

> `tbd`/vazio → omitir a subseção correspondente. `st5` descreve quantos e como são os pontos de indução (pode ser 1 único indutor, 2 paralelos, etc.).

---

## Texto Padrão
*(Base detalhada presente em todo projeto com `st1 = yes`. O ED parte daqui e aplica as condicionais.)*

A **Estação de Indução** é o ponto de entrada dos volumes na esteira do sorter. É nessa estação que o WCS realiza a leitura de identificação do volume, associa as informações ao pedido no sistema Velox e libera o sinal para o PLC (CLP) acionar o desvio correto na automação.

**Pré-requisito de integração:** para que a indução funcione corretamente, o volume deve estar devidamente integrado no sistema Velox antes de passar pelo portal de leitura. Sem essa integração, o WCS não consegue validar o destino e o volume é encaminhado para a rampa de rejeito (ver [[sorter-rampas]]).

**Fluxo operacional padrão:**

1. **Posicionamento do volume.** O operador posiciona o volume (caixa, tote ou fardo) na esteira de entrada da indução. Em operações com múltiplos indutores, o volume pode ser colocado em qualquer indutor disponível (ver **Condicionais — Quantidade de Indutores**).

2. **Leitura do código de identificação.** O portal de leitura captura automaticamente o código de barras (EAN ou DUN-14) ou a etiqueta do volume por meio de câmeras fixas posicionadas em múltiplas faces. O número de faces determina a capacidade de leitura sem reposicionamento manual (ver **Condicionais — Faces de Leitura**).
   - Volumes com **mais de um código de barras** (ex.: EAN do produto + código WCS/IVT) são reconhecidos corretamente, pois o Velox prioriza o código associado ao volume cadastrado na onda.
   - A câmera de linha pode estar associada a uma **balança dinâmica**, que registra o peso real do volume no momento da passagem (ver [[pesagem]]).

3. **Validação no Velox (WCS).** Após a leitura, o WCS valida as informações do volume: confirma se o volume está integrado na onda ativa, verifica o destino (rampa de saída) conforme o critério configurado (`st_criterio`: região, transportadora ou filial) e aciona o sinal para o PLC.

4. **Sinal ao PLC e desvio.** O WCS envia o comando ao PLC (CLP) indicando a rampa de destino. O PLC executa o desvio físico na esteira. A partir desse ponto, o controle do fluxo físico é da automação; o WCS registra o evento de passagem com data e hora.

5. **Falha de leitura — rejeito.** Se o portal não conseguir ler o código do volume (barcode ilegível, etiqueta danificada, volume fora da posição), o WCS não envia destino ao PLC e o volume é direcionado para a **rampa de rejeito**. O operador na estação de rejeito trata o volume (reimprime etiqueta, reinduz manualmente ou descarta da onda). → ver [[sorter-rampas]].

6. **Registro e rastreabilidade.** O WCS registra cada passagem pela indução (data/hora, código lido, destino, resultado). Volumes que passam múltiplas vezes pelo sorter acumulam registros individuais, permitindo diagnóstico completo via tela de Triagem (ver **Observações Livres**).

---

## Condicionais

### Quantidade de Indutores — derivado de `st5`

#### SE `st5` está preenchido → ADICIONA parágrafo em "Posicionamento do volume"
A operação conta com `{{sorter_indutores}}` estação(ões) de indução. *(Ex: "2 indutores paralelos — esquerdo e direito — com capacidade combinada de `{{sorter_capacidade}}` vol/h.")*

#### SE `st5` = tbd/vazio → omitir referência ao número de indutores; manter texto genérico.

---

### Faces de Leitura do Portal — derivado de `st6`

#### SE `st6` = "1 face" → ADICIONA nota em "Leitura do código"
O portal de leitura possui **1 face** (superior). Volumes que chegam com o código de barras na face inferior ou lateral precisam ser reposicionados manualmente antes da indução.

#### SE `st6` = "3 faces" → ADICIONA nota em "Leitura do código"
O portal de leitura possui **3 faces** (superior e duas laterais), eliminando a necessidade de reposicionamento para a maioria dos volumes. O EAN ou DUN-14 é capturado independentemente de como o volume é orientado na esteira.

#### SE `st6` = "5 faces" ou "6 faces" → ADICIONA nota em "Leitura do código"
O portal de leitura possui `{{sorter_faces}}` faces, cobrindo superior, laterais e frentes. É a configuração de maior cobertura, indicada para operações com alto mix de embalagens ou volumes com etiquetas em posições variadas.

#### SE `st6` = tbd/vazio → omitir referência ao número de faces; manter texto genérico.

---

### IA de Leitura — derivado de `st11`

#### SE `st11 = yes` → ADICIONA subseção "Contingência com IA"

**Contingência com IA de Leitura**

Quando o portal de leitura falha na captura do código (barcode danificado, etiqueta deformada ou ausente), o WCS aciona o módulo de **IA de reconhecimento visual**. O sistema exibe a imagem do volume em `{{sorter_ia_tvs}}` TV(s)/monitor(es) na estação de indução para que um operador identifique o volume manualmente ou confirme o código sugerido pela IA.

Volumes com falha recorrente de leitura — mesmo após a intervenção da IA — recebem uma nova **etiqueta IVT + DUN** impressa pelo operador na área de rejeito. Essa etiqueta garante a identificação correta na próxima indução.

#### SE `st11 = no` ou tbd → omitir a subseção de IA; manter apenas o fluxo de rejeito padrão.

---

### Área de Stage pré-indução — condicional por observação livre

#### SE o kickoff ou observação livre mencionar "stage" ou "área de stage" → ADICIONA subseção "Área de Stage"

**Área de Stage (pré-indução)**

Antes de induzir na esteira, os volumes (caixas full case, pallets fechados) são depositados em uma **área de Stage** dividida em posições físicas endereçadas. O operador lê ou digita o endereço no coletor para garantir rastreabilidade. O WCS registra o endereço sistêmico, mas **não controla automaticamente** a ocupação da área — o gerenciamento físico é responsabilidade da operação. Quando a área de stage está cheia, o operador confirma a alocação e segrega o pallet próximo ao stage informado.

---

## Observações Livres do Kickoff
Campos de texto: `st5` (indutores), `st6` (faces), `st11_tvs` (TVs IA) e qualquer observação livre relacionada ao sorter.

O ED deve:
- **`st5`** → mencionar o número e layout dos indutores na abertura do fluxo (ex: "2 indutores paralelos").
- **`st6`** → especificar o número de faces do portal na subseção de leitura.
- **`st11_tvs`** → preencher `{{sorter_ia_tvs}}` na subseção de IA com o valor exato.
- **`st_cap`** → mencionar a capacidade em vol/h ao descrever o dimensionamento da indução.
- **`st4`** → incluir o SLA portal → 1º HPD como parâmetro de desempenho, se preenchido.
- **Observação sobre tela de Triagem** → ADICIONAR como subseção nomeada: o WCS disponibiliza tela de Triagem de Volumes filtrada pelo código/RG do volume, exibindo histórico de passagens pelo sorter (data/hora, peso, desvio realizado). Volumes que passam 3 ou mais vezes acumulam registros individuais para diagnóstico. *(Padrão identificado em Barbecue e Gavião — confirmar se está no escopo do projeto.)*
- **Observação que restringe tipos de volume aceitos na indução** (ex: "somente fracionados") → SUBSTITUIR a abertura do fluxo pela restrição explícita.
- **Observação que adiciona etapa** não coberta pelo padrão → ADICIONAR como subseção nomeada ao final do fluxo, com `[OBS INTERNA]` se precisar de validação da operação.

---

## Regras de Negócio
- **RN-01** (todos): o volume deve estar integrado no sistema Velox (onda ativa) **antes** de passar pelo portal de leitura; volumes não integrados são direcionados ao rejeito.
- **RN-02** (todos): a leitura no portal é automática (câmeras fixas); não há leitura manual por operador como etapa padrão de indução.
- **RN-03** (todos): o WCS valida o destino e envia o comando ao PLC; o controle físico do desvio é responsabilidade do PLC/automação após o envio do sinal.
- **RN-04** (todos): volumes com falha de leitura (código não capturado) são encaminhados para rampa de rejeito — nunca ficam parados na esteira sem destino definido.
- **RN-05** (st11:yes): volumes com falha recorrente de leitura, mesmo após intervenção da IA, recebem reimpressão de etiqueta IVT + DUN antes de nova indução.
- **RN-06** (portais multi-face): a priorização de leitura em volumes com múltiplos barcodes segue a hierarquia do Velox: código IVT (gerado pelo WCS) > EAN/DUN-14 do produto.
- **RN-07** (todos com rastreabilidade): cada passagem pelo portal é registrada individualmente com data, hora, código lido e resultado — passagens múltiplas do mesmo volume são registros distintos, não sobrescrevem o anterior.
- **RN-08** (stage): o WCS registra o endereço sistêmico do stage, mas não controla automaticamente a ocupação física; volumes excedentes são segregados operacionalmente.

---

## Insights e Padrões

### Padrões identificados
- O **fluxo núcleo** (posicionar → portal lê → Velox valida → PLC desvia) é idêntico em BRF Salvador, CDSK, Market Chile, Market Peru e DIA — é o padrão sólido da indução.
- A exigência de **integração prévia no Velox** antes da indução aparece textualmente em 4 das 5 fontes Top 10 que descrevem o processo (CDSK, Market Chile, Market Peru, DIA) — é invariante.
- Portais de **3 faces** (superior + 2 laterais) são a configuração mais recorrente nos projetos com capacidade >= 6.000 vol/h (Esperança).

### Variações significativas
- **BRF Salvador** descreve a indução na esteira BK10 como parte do fluxo full case: o operador coleta os volumes e os "induz na esteira" — indução manual, não automática por conveyor.
- **Esperança** tem **2 indutores paralelos** (esquerdo e direito) com portal de 3 faces e contingência explícita com etiqueta IVT+DUN; também possui área de Stage mapeada como etapa pré-indução.
- **Barbecue / Gavião** adicionam **tela de Triagem de Volumes** para diagnóstico de volumes que passam pelo sorter múltiplas vezes — não é padrão em todos os projetos, mas é recorrente em operações de alto volume.
- **BP / Peter 2** não descrevem a indução de forma isolada; tratam o sorter como componente do sistema geral sem detalhar o portal de leitura — ausência de evidência, não ausência do processo.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **tipo de código lido na indução** (EAN vs. DUN-14 vs. código IVT exclusivo) — hoje inferido por texto livre ou ausência de menção.
- Não há campo para **balança de linha na indução** (separado de `pesagem` geral) — a associação câmera+balança aparece em projetos mas não tem campo dedicado no kickoff.
- **Tela de Triagem de Volumes** (Barbecue/Gavião) não tem gate/campo no kickoff — hoje tratada em texto livre. Candidata a checkbox `st_triagem`.
- **Área de Stage pré-indução** (Esperança) não tem campo dedicado — candidata a YN `st_stage`.

### Inferências
- **Inferência:** quando `st6` descreve 3 ou mais faces, o projeto quase sempre tem capacidade >= 4.000 vol/h e opera com full case + fracionado simultâneos. · **Confiabilidade:** média · **Base:** Esperança (6.000 vol/h, 3 faces).
- **Inferência:** quando `st11 = yes`, o projeto tem rampa de rejeito dedicada com impressora para etiqueta IVT+DUN. · **Confiabilidade:** alta · **Base:** Esperança, padrão de contingência de leitura.
- **Inferência:** projetos com 2 indutores paralelos geralmente têm `st_cap` >= 5.000 vol/h. · **Confiabilidade:** baixa · **Base:** único projeto com esse layout (Esperança).

---

## Dependências (grafo)
- **Entra depois de:** [[order-start]] → [[picking-pbl]] / [[picking-fullcase]] / [[picking-cart]] → [[conferencia]] / [[packing]]
- **Sai para:** [[sorter]] (PLC recebe sinal e executa desvio) → [[sorter-rampas]] (destino final: rampa correta ou rejeito)
- **Consulta/alimenta:** [[integracao-pedidos]] (validação de integração do volume na onda), [[pesagem]] (balança de linha na indução), [[etiquetas]] (reimpressão IVT+DUN em contingência)
- **Variante paralela:** [[cross-check]] (gate `st7` — validação SKU × pedido para full case antes da indução)
- **Pertence a:** [[sorter]] (módulo pai — a indução é o ponto de entrada do fluxo do sorter)
