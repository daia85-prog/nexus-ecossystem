# Etiquetas — Knowledge Card

> CARD abrangente do tópico **Etiquetas**. Fonte: Top 10 (BP, BRF Salvador) + complementares (Barbecue, Esperança, Gavião, Guatemala PBL, MASTER, Optimus Prime, Payless, Peter 2, Wild Fork). O ED usa este arquivo para gerar o capítulo de Etiquetas do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff (gate `et_r`) e absorve as **Observações Livres**.

## Tags
`etiqueta` `etiquetas` `et_r` `et1` `et_dist` `layout-de-impressao` `layout-etiqueta`
`etiqueta-de-volume` `etiqueta-de-expedicao` `etiqueta-pvar` `etiqueta-de-pallet` `etiqueta-master`
`etiqueta-de-produto` `etiqueta-de-material` `reimpressao` `reimpressao-etiqueta` `impressora` `impressora-termica` `zebra`
`momento-de-impressao` `impressao-automatica` `impressao-manual` `contingencia-impressora` `fila-de-impressao`
`codigo-de-barras` `code128` `gs1-128` `datamatrix` `qrcode` `dun14` `sscc` `numero-volume` `1-de-n`
`log-impressao` `motivo-reimpressao` `dimensao-etiqueta` `responsabilidade-cliente`

## Metadados
- **Bloco:** expedicao
- **Gate:** `et_r` — `et_r = wcs` → **capítulo COMPLETO** (o WCS gera/imprime as etiquetas) · `et_r = wms_only` → **capítulo ENXUTO** (etiquetas são responsabilidade do cliente; WCS só lê/confirma) · `et_r = tbd` → manter como pendência.
- **Depende de:** [[order-start]] (define a rua/posto, gera o volume e dispara a impressão; etiqueta de OS)
- **Cruza com:** [[packing]] (etiqueta de packing / troca de etiqueta), [[sorter]] (leitura da etiqueta no portal, prioridade de código, rejeito por falha), [[conferencia]] (reimpressão pós-corte), [[paletizacao]] (etiqueta de pallet/master, romaneio)
- **Influencia:** [[sorter]] (código de barras correto → triagem; ausência/erro → rampa de rejeito)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{etq_resp}}` | `et_r` | select | `wcs`=WCS (capítulo completo) · `wms_only`=WMS/Cliente (capítulo enxuto) · `tbd`=A definir |
| `{{etq_impressoras}}` | `et1` | texto livre | nº total de impressoras |
| `{{etq_dist}}` | `et_dist` | texto livre | distribuição física das impressoras (ex: "1 por rua de coleta", "próximas à indução") |

> `tbd`/vazio em `et_r` → não decidir o capítulo; manter como pendência destacada (ver Observações Livres). `et1`/`et_dist` vazios → omitir a frase de quantidade/distribuição.

---

## Texto Padrão
*(Base detalhada para projetos com `et_r = wcs`. O ED parte daqui e aplica as condicionais. Para `et_r = wms_only` ver a condicional que SUBSTITUI por versão enxuta.)*

As etiquetas identificam fisicamente os volumes ao longo de todo o fluxo (separação, conferência, sorter, paletização e expedição) e carregam o código de barras que o WCS e a automação leem para rastrear e rotear cada caixa/volume. Quando a responsabilidade é do WCS (`et_r = wcs`), o sistema é quem gera o layout, comanda a impressora e controla a reimpressão.

**Layout de impressão.** O layout da etiqueta é de responsabilidade Invent. A etiqueta tem dimensão fixa (ex: 100 mm × 50 mm) e adota um padrão de código de barras definido por projeto (Code128, GS1-128, Data Matrix ou QR Code), com módulo mínimo especificado. O conteúdo da etiqueta é montado a partir das informações das integrações (cadastro de produto, manutenção de onda, cubagem) e tipicamente inclui número do volume, identificação do pedido, produto/SKU e dados de roteamento.

**Etiqueta de volume.** É impressa **uma etiqueta por volume**. O número do volume é gerado pela concatenação do número do pedido com o sequencial do volume, exibido no formato `N/N` (ex: um pedido com 3 volumes gera 1/3, 2/3 e 3/3). O operador fixa manualmente cada etiqueta na respectiva caixa conforme indicado na tela e induz a caixa na linha.

**Momento de impressão.** A etiqueta é gerada no momento em que a onda/Order Start é iniciada, com base nas informações de cubagem recebidas via integração. A etiqueta entra em uma **fila de espera** e é efetivamente impressa quando acionada (ex: quando o LED correspondente ao posto/volume acende). Em parte dos projetos, a **impressão das etiquetas é condição obrigatória** para liberar as tarefas: a lista de separação só é exibida ao operador após a conclusão da impressão (ver RN-03).

**Distribuição das impressoras.** A operação conta com `{{etq_impressoras}}` impressoras, distribuídas conforme `{{etq_dist}}` (ex: posicionadas próximas às áreas de indução/coleta ou uma por rua de trabalho). A rua selecionada no Order Start determina automaticamente qual impressora é acionada. Caso uma impressora esteja inoperante, o operador pode utilizar a impressora de uma rua próxima para garantir a continuidade da operação (ver RN-05, contingência).

**Reimpressão.** O WCS permite a reimpressão de etiquetas em caso de etiqueta ilegível, danificada, falha/corte de impressão ou extravio durante o transporte. O usuário seleciona os volumes desejados, escolhe a impressora e informa o **motivo da reimpressão** (apenas motivos ativos previamente cadastrados ficam disponíveis). O evento é registrado em **log**, e ao consultar os detalhes de um volume é apresentada a lista de impressões e reimpressões realizadas, ordenadas por data/hora decrescente (ver RN-06, RN-07).

---

## Condicionais

### Responsabilidade — derivado de `et_r` (GATE principal)

#### SE `et_r = wms_only` → SUBSTITUI todo o Texto Padrão pela versão ENXUTA
A geração e a impressão das etiquetas são de **responsabilidade do cliente** (WMS/eWM-SAP). O WCS **não** desenvolve módulo de emissão de etiquetas; ele apenas **lê e confirma** o código de barras do volume nos portais/estações. Para que a triagem ocorra corretamente, é fundamental que o código de barras do volume seja enviado de forma correta pela integração de Volumes; caso o dado esteja ausente ou incorreto na tabela transacional, o volume é automaticamente direcionado para a **rampa de rejeito por falha de integração**. *(Capítulo reduz-se a: responsabilidade do cliente + regras de leitura/prioridade de código + dependência da integração. Omitir layout, momento de impressão e reimpressão pelo WCS.)* → ver [[sorter]].

#### SE `et_r = wcs` → MANTÉM o Texto Padrão completo (default deste CARD).

#### SE `et_r = tbd` → NÃO decide o capítulo
Manter como pendência destacada: registrar que a responsabilidade pela emissão (WCS Velox ou WMS do cliente) não foi definida e que isso impacta o escopo de desenvolvimento (se WCS → desenvolver módulo de emissão; se WMS → WCS apenas confirma a leitura). `[OBS INTERNA]` ver Payless e Wild Fork.

### Tipos de etiqueta — derivado do escopo do projeto

#### SE há separação fracionada/picking com volume gerado pelo WCS → ADICIONA subseção "Etiqueta de Volume de Separação"
As etiquetas de volume de separação são geradas pelo WCS nos postos de separação e inseridas na caixa de separação. *(Visto em Guatemala PBL, MASTER, Peter 2.)*

#### SE há paletização com fechamento de pallet (`pt_gate = yes`) → ADICIONA subseção "Etiqueta de Pallet / Master"
A impressão do código master vinculado ao pallet é de responsabilidade do WCS. A etiqueta (código prefixado + sequencial de N dígitos, ex: `SRT123456789012`) é disponibilizada previamente aos colaboradores nas saídas das rampas. No fechamento do pallet, o operador lê uma das etiquetas disponibilizadas e confirma no LED aceso; o sistema então vincula o código lido ao pallet fechado. *(Visto em Optimus Prime; pendente de definição de fluxo Zebra vs WMS em Wild Fork.)* → ver [[paletizacao]].

#### SE o projeto lê etiqueta de produto/material no portal (BRF/produtos com lote) → ADICIONA subseção "Etiqueta de Produto / Material"
Além da etiqueta de expedição, o volume traz a etiqueta do **produto/material**, da qual o WCS extrai informações críticas (lote, validade, fabricação, SKU, DUN14, SIF/produtor, peso). A composição do **lote** varia conforme o tipo de produto e o layout de etiqueta; quando o lote ou a data não estão presentes no código, o WCS aplica regra de cálculo/atribuição (ex: lote fixo por SIF, ou cálculo por data de produção × unidade produtora). *(Específico BRF Salvador — múltiplos layouts GS1-128/Datamatrix por tipo de produto.)* → ver [[sorter]].

#### SE há sorter com cross-check de etiquetas (`st7 = yes`) → ADICIONA subseção "Etiqueta de Expedição (PVAR) + Cross-check"
O WCS gera o arquivo de impressão da etiqueta de expedição (PVAR) e a envia, sem controle/confirmação física da impressão (responsabilidade da impressora). Com cross-check ligado, o portal lê **ambas** as etiquetas (material e expedição); divergência entre elas é tratável (ex: etiqueta colada na caixa errada). Com cross-check desligado, o WCS opera só com a etiqueta de material e a rastreabilidade individual do PVAR fica limitada. → tratar a lógica de desvio no CARD de [[sorter]]/[[cross-check]], referenciando aqui.

### Regras de leitura de código de barras — derivado do projeto

#### SE há regra de prioridade/seleção de código (múltiplos códigos na mesma etiqueta) → ADICIONA subseção "Prioridade de Leitura"
O portal segue uma ordem de prioridade por quantidade de caracteres do código (ex: 1ª 10 caracteres, 2ª 22, 3ª 18) e regras de desempate por dígito verificador. Padrão Code128, módulo mínimo ~0,4 mm, altura mínima ~18 mm. Códigos duplicados com mesmo dígito verificador → rejeito; havendo dois códigos de mesma quantidade de caracteres, processa o que tem dígito verificador. *(Específico Barbecue.)*

#### SE o código de barras carrega dígitos a descartar/normalizar → ADICIONA observação na leitura
O sistema pode precisar desconsiderar dígitos do código original (ex: os 2 primeiros caracteres de um código de 14 que definiam rampa, descontinuados; integração já envia com 12). Códigos com tamanho diferente do padrão são considerados na totalidade. *(Específico Gavião.)*

### Romaneio — derivado de `pt9 = yes`

#### SE o projeto tem romaneio (`pt9 = yes`) → ADICIONA subseção "Impressão de Romaneio"
Após todos os volumes do romaneio serem finalizados, o romaneio fica disponível na tela de impressão de romaneio. O operador informa o número do romaneio e o Velox gera a impressão a nível de pedido, indicando em quais pallets ou gaiolas cada volume está alocado. *(Visto em BP.)* → ver [[paletizacao]].

### Outras condicionais

#### SE o projeto tem full case com etiqueta do cliente → ADICIONA observação de exceção
A impressão de etiquetas para volumes **full case** pode não ser responsabilidade do WCS, devendo o cliente etiquetar antes da indução na esteira, mesmo quando o fracionado é etiquetado pelo WCS. *(Visto em MASTER.)*

#### SE há controle de acesso/auditoria à reimpressão → ADICIONA em "Reimpressão"
A reimpressão é restrita a usuários com perfil específico (supervisores/líderes), que autorizam a operação. O log registra usuário solicitante, usuário autorizador, data e hora. *(Visto em Esperança; ver também BRF — log obrigatório de criação/edição/exclusão de postos, colaboradores e impressoras.)*

---

## Observações Livres do Kickoff
Campos de texto: `et1` (total de impressoras), `et_dist` (distribuição) e qualquer observação livre.

O ED deve:
- **`et1`** → preencher `{{etq_impressoras}}` na subseção de distribuição (ex: "A operação conta com 3 impressoras").
- **`et_dist`** → preencher `{{etq_dist}}` com a distribuição física exata (ex: "posicionadas próximas às áreas de indução e coleta" ou "uma por rua de trabalho").
- **Observação de dimensão/layout específico** (ex: "etiqueta 50×50", "Data Matrix módulo 1.1") → SUBSTITUIR os valores genéricos do parágrafo de Layout pelos valores informados.
- **Responsabilidade não definida** (`et_r = tbd` ou nota de kickoff ambígua) → manter PENDÊNCIA destacada com `[OBS INTERNA]`, deixando claro o impacto no escopo de desenvolvimento (módulo de emissão vs. apenas leitura).
- **Observação que adiciona tipo de etiqueta** não coberto → ADICIONAR como subseção nomeada, com `[OBS INTERNA]` se precisar de validação.

---

## Regras de Negócio
- **RN-01** (`et_r = wcs`): o layout da etiqueta é de **responsabilidade Invent** e tem dimensão fixa por projeto (ex: 100 mm × 50 mm; 50 × 50; etc.). *(BRF Salvador, Esperança, MASTER.)*
- **RN-02** (geração de volume): é impressa **1 etiqueta por volume**; o número do volume = concatenação do número do pedido + sequencial, exibido como `N/N`. *(MASTER — específico do padrão de numeração.)*
- **RN-03** (impressão obrigatória): em parte dos projetos, a lista de separação só é liberada ao operador **após** a impressão das etiquetas correspondentes. *(Esperança — marcar como específico de projeto.)*
- **RN-04** (momento/fila): a etiqueta é gerada no início da onda e fica em **fila de espera** até o acionamento (ex: LED aceso). *(BRF Salvador PVAR.)*
- **RN-05** (contingência de impressora): em falha de periférico, é possível ativar contingência para o posto mesmo com a onda em andamento — etiquetas ainda não enviadas vão para a impressora de contingência; as já enviadas mas não impressas são reimpressas manualmente. *(BRF Salvador — específico.)*
- **RN-06** (reimpressão): a reimpressão exige seleção de volumes, escolha da impressora e **motivo obrigatório** (somente motivos ativos cadastrados); tudo registrado em log. *(BRF Salvador.)*
- **RN-07** (rastreabilidade de impressão): o detalhe do volume apresenta a lista de impressões/reimpressões ordenada por data/hora decrescente; criação/edição/exclusão de postos, colaboradores e impressoras é registrada em log e disponibilizada em relatórios. *(BRF Salvador.)*
- **RN-08** (controle de acesso à reimpressão): a reimpressão pode ser restrita a perfis específicos (supervisor/líder) que autorizam; log registra solicitante + autorizador. *(Esperança — específico.)*
- **RN-09** (`et_r = wms_only`): com etiqueta de responsabilidade do cliente, o WCS depende do código de barras correto vindo na integração de Volumes; código ausente/incorreto → **rejeito por falha de integração**. *(Gavião, Barbecue.)*
- **RN-10** (prioridade de leitura): havendo múltiplos códigos, o portal segue ordem por nº de caracteres e desempata por dígito verificador; códigos duplicados com mesmo dígito → rejeito. *(Barbecue — específico.)*
- **RN-11** (etiqueta de pallet/master): a etiqueta master (código prefixado + sequencial) é disponibilizada previamente nas saídas das rampas; vinculada ao pallet por leitura + confirmação no LED no fechamento. *(Optimus Prime — específico.)*
- **RN-12** (cross-check de etiquetas): com cross-check ligado o portal lê material + expedição (PVAR); divergência é tratável e a etiqueta PVAR pode ser reimpressa na estação de rejeito. *(BRF Salvador — específico.)*
- **RN-13** (composição de lote): quando lote/data não estão no código, o WCS calcula/atribui (lote fixo por SIF, ou cálculo por data de produção × unidade produtora). *(BRF Salvador — específico, produtos com rastreabilidade.)*

## Insights e Padrões
### Padrões identificados
- **Momento de impressão = início da onda/Order Start**, a partir da cubagem da integração, é recorrente (MASTER, Peter 2, BRF, Esperança) — núcleo sólido quando `et_r = wcs`.
- **Reimpressão sempre presente** em projetos WCS, sempre acoplada a log/rastreabilidade; motivo e impressora costumam ser obrigatórios.
- **Layout é responsabilidade Invent + dimensão fixa** aparece consistentemente; só os valores (mm e tipo de código) variam por projeto.
- **1 etiqueta por volume com numeração `N/N`** é o padrão de identificação de volume fracionado.

### Variações significativas (por projeto)
- **BRF Salvador**: caso mais complexo — múltiplos **tipos de layout** de etiqueta de produto (GS1-128, Datamatrix, com/sem lote, com/sem SIF), etiqueta de expedição **PVAR** com fila por LED, cross-check material × expedição, contingência de impressora e regras de composição de lote.
- **MASTER**: Data Matrix módulo 1.1; numeração de volume por concatenação pedido+sequencial; full case etiquetado pelo cliente (exceção ao WCS).
- **Optimus Prime / Wild Fork**: foco em **etiqueta de pallet/master** (impressora Zebra), fluxo de vinculação no fechamento; Wild Fork ainda com fluxo Zebra vs WMS a definir.
- **Esperança**: impressão como **pré-condição** para liberar a separação; impressora por rua + fallback de rua próxima; reimpressão restrita a perfil supervisor/líder.
- **Barbecue / Gavião**: `et_r = wms_only` (etiqueta do cliente) — capítulo enxuto centrado em **regras de leitura/prioridade de código** e dependência da integração para evitar rejeito.
- **BP**: ênfase em **romaneio** (impressão por pedido indicando pallet/gaiola) e agrupamento por subárea para PTL.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- O kickoff só tem `et_r`, `et1`, `et_dist`. Não há campo para **tipo de código de barras** (Code128 / GS1-128 / Data Matrix / QR) nem **dimensão da etiqueta** — hoje só vêm em texto livre/observação. Candidatos a select + campo texto.
- Não há campo para **"impressão é pré-condição da separação"** (RN-03) — inferido de texto. Candidato a checkbox.
- Não há distinção explícita de **tipos de etiqueta** (volume × pallet/master × produto/material × expedição/PVAR) no kickoff; o ED precisa inferir a partir de outros blocos (paletização, sorter, full case).
- Não há campo para **controle de acesso à reimpressão** (RN-08) — inferido. Candidato a checkbox.
- Fornecedor da impressora (cliente × Invent) não tem campo dedicado em Etiquetas (aparece em `fc_if`/`pk_imp_f` de outros blocos). Candidato a `et_imp_f`.

### Inferências
- **Inferência:** quando `pt_gate = yes` e há fechamento de pallet, o projeto quase sempre tem **etiqueta de pallet/master** sob responsabilidade do WCS (independente de `et_r`, que governa a etiqueta de volume). · **Confiabilidade:** média · **Base:** Optimus Prime, Wild Fork, BP.
- **Inferência:** projetos com `et_r = wms_only` concentram o capítulo em **leitura no sorter** e raramente descrevem layout/reimpressão pelo WCS. · **Confiabilidade:** alta · **Base:** Barbecue, Gavião.
- **Inferência:** `et1`/`et_dist` preenchidos correlacionam com separação fracionada que imprime na rua (Order Start), não com full case. · **Confiabilidade:** média · **Base:** Esperança, MASTER.

## Dependências (grafo)
- **Entra depois de:** [[order-start]] (rua/posto selecionado, volume criado, cubagem recebida → dispara impressão)
- **Sai para / é lida em:** [[sorter]] (leitura do código no portal; rejeito por falha de integração), [[paletizacao]] (etiqueta de pallet/master, romaneio), [[packing]] (etiqueta/troca de etiqueta no packing)
- **Consulta/alimenta:** [[integracao-pedidos]] (código de barras do volume, dados de cubagem, manutenção de onda, cadastro de produto/lote), [[conferencia]] (reimpressão pós-corte)
- **Variante por gate:** `et_r = wcs` (capítulo completo) ⟷ `et_r = wms_only` (capítulo enxuto)
