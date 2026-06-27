# Integração WCS–WMS — Knowledge Card

> CARD abrangente do tópico **Integração WCS–WMS** (sincronização bidirecional). Fonte: Top 10 (BP, BELEZA, NavePark, BRF Salvador, Beta, Beta Full SP) + complementares (Beta Esteio, Cougar, BR). O ED usa este arquivo para gerar o capítulo de Integração WCS–WMS do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`integracao-wcs-wms` `sincronizacao-bidirecional` `snap-shot` `inbound-sync`
`confirmacao-picking` `picking-confirm` `retorno-reabastecimento` `reabastecimento-tord`
`devolucao-cancelados` `cancelamento-fracionado` `retorno-reinducao` `recall`
`idoc-sap` `zabast` `tord` `toco` `wmtord` `dblink-estoque`
`rest-json` `json-pasta` `json-api` `payload-json`
`ewm` `erp-sap` `wms-fonte-verdade` `estoque-posicoes`
`cet-confirmacao-entrada-transfer` `pulmao-porta-pallet` `codInterno` `endColeta`
`qtd-zero` `esvaziar-posicao` `inbound-sync-consolidado`

## Metadados
- **Bloco:** integracao
- **Gate:** `in1 != tbd` E módulos de estoque ativos (pelo menos um entre: PBL, full case, reabastecimento)
- **Subtópicos com CARD próprio:** [[integracao-pedidos]] (Wave/pedidos de saída), [[integracao-cadastros]] (produtos/endereços), [[reabastecimento]] (fluxo operacional de reabastecimento), [[inventario]] (Recall e ajuste de inventário)
- **Depende de:** [[order-start]], [[reabastecimento]] (retorno disparo), [[conferencia]] (momento do Picking Confirm para Picking Cart), [[sorter]] (Retorno Reindução)
- **Influencia:** [[picking-pbl]] (estoque disponível via Snap Shot), [[picking-fullcase]], [[picking-cart]] (picking confirm atrasado), [[inventario]] (recall + ajuste)
- **Cruza com:** [[integracao-pedidos]] (Wave de entrada), [[reabastecimento]] (Retorno Reabastecimento), [[inventario]] (Recall e integração de ajuste), [[sorter]] (Retorno Reindução), [[conferencia]] (momento do Picking Confirm)

## Variáveis (slot → campo do kickoff → opções)

| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{in1}}` | `in1` | select | `rest`=REST · `idoc`=IDoc · `dblink`=DBLink · `json_api`=JSON via API · `json_pasta`=JSON em pasta · `outro`=Outro · `tbd`=A definir |
| `{{in1b}}` | `in1b` | select | idem `in1` — segundo protocolo, quando há dois canais distintos |
| `{{endpointBase}}` | `in_endpoint` | texto | URL base da API REST/JSON (ex: `https://wms.cliente.com.br/api/v1`) |
| `{{timeoutMs}}` | `in3` | texto | Timeout em ms (ex: `5000`) |

> `tbd`/vazio → omitir seção de protocolo e deixar placeholder `[A DEFINIR — validar com equipe de integração]`.

---

## Texto Padrão
*(Base detalhada presente em todo projeto com `in1 != tbd` e estoque ativo. O ED parte daqui e aplica as condicionais de variante.)*

A Integração WCS–WMS é o conjunto de contratos que permite ao WCS (Velox) e ao WMS do cliente manterem seus estoques e estados operacionais sincronizados em tempo quase real. O princípio arquitetural é que o **WMS é a fonte de verdade do estoque**: o WCS espelha o estado recebido do WMS e devolve toda movimentação ocorrida dentro do armazém automatizado.

A integração é bidirecional e cobre seis contratos principais:

| Contrato | Sentido | Momento |
|----------|---------|---------|
| **Snap Shot** | WMS → WCS | Startup/carga + equalização sob demanda |
| **Inbound Sync** | WCS → WMS | A cada movimentação em porta-pallets (pulmão) |
| **Confirmação de Separação (Picking Confirm)** | WCS → WMS | Ao final da separação validada (momento varia por tipo de volume) |
| **Retorno de Reabastecimento** | WCS ⇄ WMS | Quando o volume é alocado na posição final de picking |
| **Devolução de Volumes Cancelados** | WMS ↔ WCS | Ao identificar cancelamento de pedido |
| **Retorno de Reindução** | WMS → WCS | Quando um volume precisa ser reintroduzido na esteira |

---

### Snap Shot (WMS → WCS)

O Snap Shot espelha o estado completo do estoque de todas as posições do WMS para o WCS. É disparado em dois momentos:
1. **Startup/carga:** foto inicial ao ativar o WCS, populando todas as posições antes do início da operação.
2. **Equalização sob demanda:** quando identificada divergência entre WMS e WCS — sem frequência fixa.

**Comportamento do WCS ao receber o Snap Shot:**
- Dá baixa nos itens das posições de picking considerando **exclusivamente** os dados recebidos.
- Posição ausente ou vazia no payload → o WCS assume a posição como **desocupada**.
- `qtd = 0` ou `codInterno = null` → o WCS **esvazia a posição** e a libera para novas alocações.
- Os campos `codInterno` e `endColeta` devem estar cadastrados no WCS; integração com campos ausentes é **rejeitada**.

---

### Inbound Sync (WCS → WMS)

O Inbound Sync espelha o estoque em posse do WCS de volta ao WMS. É disparado:
- A cada **movimentação em porta-pallets (pulmão)**;
- Em **movimentações entre porta-pallets**;
- Considerando os recebimentos da **CET (Confirmação Entrada no Transfer)** e as saídas dos itens.

O objetivo é manter o WMS atualizado com o saldo real que está sob controle do WCS.

---

### Confirmação de Separação / Picking Confirm (WCS → WMS)

Ao concluir a separação, o Velox envia a Confirmação de Separação ao WMS com todos os dados do volume e seus itens. O **momento do disparo varia por tipo de volume**:

| Tipo de Volume | Momento do Disparo |
|----------------|--------------------|
| **Fracionado** | Ao finalizar a remessa por completo |
| **Full Case** | Na confirmação da finalização completa da remessa; **sem** `cod_caixa` (não calcula cubagem) |
| **Exceção** | Ao finalizar a remessa do volume no Picking Cart |
| **Picking Cart** | Somente após o ponto de decisão no fim da linha **ou** após a conferência — nunca imediatamente ao fim da coleta física |

> Princípio arquitetural: o WMS só recebe o que foi efetivamente validado. A confirmação de picking para Picking Cart **não** é enviada ao final físico da coleta — aguarda o ponto de decisão/conferência para ter a informação completa.

---

### Retorno de Reabastecimento (WCS ⇄ WMS)

Integração enviada quando o operador finaliza a alocação do volume na **posição final de picking**, informando ao WMS que o SKU está disponível na posição solicitada. Em variantes com PLC, o disparo ocorre quando o desvio é confirmado pelo controlador da automação.

---

### Devolução de Volumes Cancelados

Quando um pedido é cancelado, o WCS identifica os volumes ainda não confirmados ao WMS e executa:

1. **Identificação:** via integração de cancelamento recebida do WMS ou cancelamento interno no WCS.
2. **Criação de tarefa:** o WCS cria automaticamente uma tarefa de devolução por volume do pedido cancelado.
3. **Execução (coletor Android/coletor):** o operador lê o código de barras do volume → vai ao endereço indicado → lê endereço + confirma quantidade + lê código do item.
4. **Repetição:** o operador repete para todos os itens do volume.
5. **Confirmação:** ao concluir todos os volumes do pedido, o WCS envia integração confirmando que os itens foram devolvidos às posições.

**Restrição invariante:** o WCS **não** devolve itens ao Transfer — somente a posições de picking. Sem posição de picking disponível, a tarefa não pode ser finalizada.

O WCS disponibiliza o relatório **"Pedidos Cancelados"**: o operador informa o código do pedido e o sistema lista todos os volumes associados com sua localização atual na automação.

---

### Cancelamento de Volumes Fracionados

Somente volumes **ainda não enviados** na Confirmação de Picking podem ser cancelados. Em cargas parciais (parte dos volumes já confirmada), o WCS cancela apenas os pendentes e mantém os já confirmados.

---

### Retorno de Reindução

Integração WMS → WCS que confirma ou bloqueia a reindução de um volume na esteira:
- `status: "todo"` → o volume pode ser reintroduzido normalmente.
- `status: "blocked"` → o WCS informa ao operador que a caixa não pode ser reinduzida naquele momento.

A mesma caixa pode receber a integração de reindução mais de uma vez; o WCS considera sempre a **última** integração recebida.

---

## Condicionais

### Variante REST / JSON via API — SE `in1 = rest` OU `in1 = json_api`

#### ADICIONA subseção "Protocolo de Comunicação"
A integração opera via **REST/JSON**: todas as chamadas são realizadas por `HTTP POST` para `{{endpointBase}}`, com `Content-Type: application/json` e timeout de `{{timeoutMs}}` ms. A autenticação utiliza **Bearer Token** ou **API Key** no header (validar com equipe de integração do cliente). Respostas de erro com HTTP 4xx/5xx devem ser tratadas com retry configurável.

Os payloads dos contratos principais seguem o formato JSON documentado nos exemplos abaixo (ver cada contrato). Os campos `codInterno` e `endColeta` são obrigatórios em todos os payloads de estoque e devem estar pré-cadastrados no WCS.

**Exemplo — Snap Shot (WMS → WCS), payload aninhado por endereço:**
```json
[
  {
    "endColeta": "001.001.0001.0001",
    "itens": [
      {
        "codInterno": 12345,
        "qtd": 150,
        "lote": "LOTE-A",
        "validade": "2024-12-31",
        "codEmpresa": 1
      }
    ]
  }
]
```

**Exemplo — Snap Shot (variante consolidada/lista plana — BELEZA):**
```json
[
  { "codInterno": "7908052844227", "qtd": 150 },
  { "codInterno": "7908052844228", "qtd": 80 }
]
```

**Exemplo — Inbound Sync (WCS → WMS):**
```json
[
  {
    "codInterno": 7908052844227,
    "qtd": 850,
    "endColeta": "01023XPTO",
    "lote": "LOTE-A",
    "validade": "2024-12-31",
    "codEmpresa": 1
  }
]
```

**Exemplo — Retorno Reabastecimento (WCS → WMS), formato completo:**
```json
{
  "empresa": "0001",
  "centro": "SP01",
  "codDeposito": 1234,
  "reabastecimentos": [
    {
      "tarefa": "00013",
      "pos_destino": "1N49042031",
      "sku": "3040",
      "dun": "49871236547800",
      "qt_sug": 2,
      "qt_reab": 2
    }
  ]
}
```

---

### Variante IDoc SAP — SE `in1 = idoc`

#### ADICIONA subseção "Protocolo IDoc SAP"
A integração opera via **IDocs SAP**. Os principais tipos de IDoc envolvidos nesta sincronização são:

| IDoc | Sentido | Função |
|------|---------|--------|
| **WMTORD** | SAP → WCS | Ordens de transferência (base para ondas/remessas) |
| **TORD** | SAP → WCS | Tarefas de reabastecimento geradas pelo SAP |
| **TOCO** / **CATO** | WCS → SAP | Confirmações de coleta (simples ou dupla) |
| **ZABAST** | WCS → SAP | Retorno de reabastecimento (alocação confirmada na posição) |

Cada IDoc é processado através da RFC/tRFC configurada entre o middleware SAP PI/PO (ou SAP Integration Suite) e o WCS. O WCS atua como destino das ordens (TORD/WMTORD) e como emissor das confirmações (TOCO/CATO/ZABAST).

> Para BRF Salvador: o TOCO é o IDoc de confirmação de movimentação — pode ser simples (uma confirmação) ou duplo (duas confirmações em etapas distintas). A lógica de disparo e sequência deve ser alinhada com o time SAP do cliente.

---

### Variante DBLink — SE `in1 = dblink`

#### ADICIONA subseção "Protocolo DBLink"
A integração opera via **tabelas compartilhadas** (DBLink ou linked server entre o banco do WCS e o banco do WMS). O WCS realiza `INSERT`/`UPDATE`/`SELECT` diretamente nas tabelas de interface acordadas. Não há chamadas HTTP ou mensagens assíncronas — a sincronização é feita por polling ou triggers de banco.

Atenção: nesta variante, a integridade transacional é responsabilidade conjunta das equipes WCS e WMS; conflitos de lock e latência de replicação devem ser monitorados.

---

### Variante JSON em Pasta — SE `in1 = json_pasta`

#### ADICIONA subseção "Protocolo JSON em Pasta"
A integração opera por **arquivos JSON gravados em diretório monitorado**. O WMS grava os arquivos de Snap Shot e pedidos na pasta de entrada; o WCS monitora a pasta (polling ou watcher de sistema operacional), processa o arquivo e o move para a pasta de processados (mecanismo anti-reprocessamento). O WCS grava os retornos (Inbound Sync, Picking Confirm, etc.) na pasta de saída monitorada pelo WMS.

Os nomes de arquivo, encoding (UTF-8) e o intervalo de polling devem ser acordados na fase de integração.

---

### Inbound Sync Consolidado — SE projeto exige saldo somado por item

#### SUBSTITUI comportamento padrão do Inbound Sync
*(Visto em BELEZA — contrato materialmente diferente)*

O WCS soma o saldo de **todos os endereços** em que o item está presente e envia um único registro por `codInterno` com a quantidade total consolidada — em vez de um registro por endereço. Verificar com o WMS do cliente se o contrato exige o formato plano consolidado ou o formato aninhado por `endColeta`.

---

### Recall — SE `es5 = yes` (Recall ativo)

#### ADICIONA subseção "Recall (WCS → WMS)"
O Processo de Recall é utilizado quando a operação precisa remover itens específicos da linha de separação (por lote ou por SKU completo). O fluxo operacional detalhado está em [[inventario]]; do ponto de vista da integração:

- A tarefa de Recall pode ser iniciada no WCS Velox ou, em versões futuras, pelo WMS (GAP a validar por projeto).
- Ao concluir todas as posições visitadas, o WCS envia ao WMS a consolidação: item, lote, container, quantidade retirada.
- Se nenhum lote for informado, o Recall abrange **todos** os itens do SKU (RN-14).
- O WCS não permite alocar itens de lotes diferentes no mesmo container e alerta sobre reuso de container (RN-16).
- No Transfer: somente recolhe itens se a tarefa de recebimento do Transfer estiver concluída (RN-15).

#### SE `es5 = no` ou campo ausente
Registrar: "Recall não está em escopo neste projeto."

---

### Volumes Não Tratáveis — SE projeto tem automação com sorter/portal

#### ADICIONA observação em "Devolução de Volumes Cancelados"
Para volumes **não tratáveis** (duplicidade, excedentes, shelf life, separação não confirmada, onda cancelada), a reimpressão de etiqueta não resolve o problema — a causa é sistêmica. Esses volumes são registrados na estação de rejeito para visibilidade da operação; a tratativa ocorre fora do processo automatizado (realocação manual, devolução ao estoque ou descarte conforme procedimento do cliente). → ver [[sorter-rejeito]].

---

### SE `in1 = tbd` ou campo vazio → OMITE o capítulo inteiro de Integração WCS–WMS
Registrar no documento: "Integração WCS–WMS: protocolo a definir — capítulo será incluído após alinhamento com equipe de TI do cliente."

---

## Observações Livres do Kickoff

Campos de texto: `in_endpoint` (URL base) e `in3` (timeout) e qualquer observação livre sobre a integração.

O ED deve:
- **`in_endpoint`** → preencher `{{endpointBase}}` na subseção de protocolo REST/JSON. Se vazio, usar `[URL A DEFINIR]`.
- **`in3`** → preencher `{{timeoutMs}}` na subseção de protocolo. Se vazio, usar `[TIMEOUT A DEFINIR — recomendação: 5000 ms]`.
- **`in1b`** → se preenchido (segundo protocolo), incluir subseção separada descrevendo o segundo canal de integração (ex: IDoc para reabastecimento + REST para estoque).
- **Observação sobre campo/payload específico** → inserir como nota dentro da subseção correspondente, marcando com `[PROJETO ESPECÍFICO]`.
- **Observação de GAP** (ex: "Recall ainda não definido", "sentido do Retorno Reabastecimento a confirmar") → inserir bloco `[GAP — validar com equipe de integração]` ao final da subseção afetada.
- **Variação de payload entre ambientes HML e PRD** → documentar explicitamente se `in_endpoint` contém duas URLs ou se são configuradas por variável de ambiente.

---

## Regras de Negócio

- **RN-01** (universal): a Confirmação de Separação de volumes **fracionados** é enviada ao WMS ao finalizar a remessa por completo.
- **RN-02** (universal): a Confirmação de Separação de volumes **full case** é enviada na confirmação da finalização completa da remessa; sem `cod_caixa` (full case não calcula cubagem).
- **RN-03** (universal): a Confirmação de Separação de volumes de **exceção** é enviada ao finalizar a remessa no Picking Cart.
- **RN-04** (universal — Picking Cart): a Confirmação de Picking **não** é enviada imediatamente após a finalização física da coleta; só dispara após o ponto de decisão no fim da linha ou após a conferência.
- **RN-05** (universal — Snap Shot): o WCS dá baixa nos itens das posições de picking considerando **exclusivamente** os dados do Snap Shot recebido; posição ausente ou vazia no payload = desocupada.
- **RN-06** (BP Rev12+ / recomendado padrão): `qtd = 0` **ou** `codInterno = null` → esvaziar a posição e liberá-la para novas alocações.
- **RN-07** (universal — Snap Shot): disparado em dois momentos — foto inicial no startup/carga e equalização sob demanda por divergência; **sem** frequência fixa.
- **RN-08** (universal — Snap Shot): `codInterno` e `endColeta` devem estar corretamente cadastrados no WCS; integração com campos ausentes é rejeitada.
- **RN-09** (universal — Inbound Sync): disparado a cada movimentação em porta-pallets (pulmão) e em movimentações entre porta-pallets; considera os recebimentos da CET e as saídas.
- **RN-10** (BELEZA — projeto específico): o Inbound Sync envia de forma **consolidada** a quantidade total do item, somando o saldo de todos os endereços.
- **RN-11** (universal — Retorno Reabastecimento): enviado quando o operador finaliza a alocação na posição final de picking; em variantes com PLC, quando o desvio é confirmado pelo PLC.
- **RN-12** (universal — Cancelamento): só é possível cancelar volumes **ainda não enviados** na Confirmação de Picking; em cargas parciais, cancela apenas os pendentes e mantém os confirmados.
- **RN-13** (universal — Devolução): o WCS **não** devolve itens ao Transfer — somente a posições de picking ou, em projetos com pulmão disponível (NavePark), a posições de pulmão. Sem posição disponível, a tarefa não pode ser finalizada.
- **RN-14** (Recall): se o lote não for informado, o Recall abrange **todos** os itens do SKU.
- **RN-15** (Recall — Transfer): o WCS só recolhe itens no Transfer se a tarefa de recebimento do Transfer estiver concluída.
- **RN-16** (Recall — container): o WCS não permite alocar itens de lotes diferentes no mesmo container e alerta sobre reuso de container.
- **RN-17** (Reindução): a mesma caixa pode receber a integração de reindução mais de uma vez; o WCS considera sempre a **última** integração recebida.
- **RN-18** (Reindução bloqueada): com `status: "blocked"`, o WCS informa ao operador que a caixa não pode ser reinduzida na esteira naquele momento.

---

## Insights e Padrões

### Padrões identificados
- **WMS como fonte de verdade:** o desenho arquitetural assume o WMS soberano em toda a base de projetos analisada (BP, BELEZA, NavePark, Beta, BRF Salvador). O WCS nunca contradiz o Snap Shot — dá baixa "cegamente" pelos dados recebidos.
- **Confirmação de picking atrasada por design:** o padrão de não enviar a Confirmação de Picking no momento físico da coleta (aguardar ponto de decisão/conferência) é consistente em múltiplos projetos — é uma decisão arquitetural deliberada para garantir que o WMS só recebe o que foi validado.
- **Devolução com texto padronizado:** o processo de "Devolução de Volumes Cancelados" se repete quase palavra por palavra entre BP (múltiplas revisões), NavePark e Flower — é um bloco de especificação praticamente reutilizado entre propostas; pode ser incluído no template com mínima customização.
- **Regra invariante:** "não devolver ao Transfer, só a posições de picking" aparece explicitamente em todos os projetos que descrevem o processo de devolução.
- **Snap Shot é idempotente por contrato:** qualquer item não presente no payload deve zerar a posição correspondente — isso garante convergência mesmo após falhas de comunicação.

### Variações significativas
- **Payload do Snap Shot evoluiu entre versões (BP):** versões iniciais usam lista plana (`codInterno`/`qtd`/`endColeta`); a Rev12 migra para estrutura **aninhada por endereço** (`endColeta` + `itens[]`) e adiciona a regra de esvaziar posição com `qtd=0`/`codInterno=null`. A estrutura aninhada suporta melhor posições com múltiplos lotes.
- **Inbound Sync consolidado (BELEZA):** diferentemente dos demais projetos, o BELEZA exige somar o saldo de todos os endereços por item antes de enviar — contrato materialmente diferente; identificar o formato exigido pelo WMS na fase de integração.
- **Retorno Reabastecimento tem 3 formatos:** completo (`empresa`/`centro`/`reabastecimentos[]` com `sku`/`dun`/quantidades — Beta Full SP), simplificado (somente `num_etiqueta` — projeto BR I25.4378) e disparo por PLC (aditivos Dolce Gusto e Beta). Alinhar o formato na fase de integração.
- **Sentido invertido em aditivos:** alguns aditivos descrevem o Retorno Reabastecimento como **EMW/SAP → WCS**, enquanto projetos novos descrevem **WCS → EMW/SAP**. Atenção à direção ao especificar por cliente.
- **NavePark — posição de pulmão como fallback:** quando não há posição de picking disponível para devolução, o NavePark permite usar posições de pulmão (diferentemente do BP, que não prevê essa alternativa).
- **BRF Salvador — IDoc TOCO simples ou duplo:** a confirmação de movimentação pode ocorrer em uma ou duas etapas distintas, dependendo da configuração SAP do cliente.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **formato do payload do Snap Shot** (plano vs aninhado por endereço) — hoje resolvido em texto livre ou inferido pelo projeto. Candidato a radio button.
- Não há campo explícito para **Inbound Sync consolidado vs por endereço** — hoje implícito no cliente WMS. Candidato a checkbox.
- Não há campo para **formato do Retorno Reabastecimento** (completo / simplificado / PLC) — hoje inferido pelo projeto. Candidato a select.
- **Recall iniciado pelo WMS** é um GAP explícito no NavePark (anotado com "?" na spec original) — não há contrato definido; requer validação para cada novo projeto.
- Os payloads no RAW contêm erros de digitação (`codIntenrno`, vírgulas sobrando, setas de sentido perdidas na extração). Nunca copiar literalmente os JSONs do RAW sem revisão — usar os exemplos deste CARD como referência canônica.

### Inferências
- **Inferência:** O WCS deve tratar o Snap Shot como operação idempotente de "verdade absoluta" — qualquer item não presente no payload deve zerar a posição correspondente, sem exceções. · **Confiabilidade:** alta · **Base:** texto explícito de múltiplos projetos (BP, BELEZA) + lógica arquitetural.
- **Inferência:** A migração do payload plano para o aninhado-por-endereço (BP Rev12) foi motivada por posições com múltiplos itens/lotes, que a lista plana não representava adequadamente. · **Confiabilidade:** média · **Base:** estrutura aninhada agrupa `itens[]` sob cada `endColeta`, o que só faz sentido para posições multi-item/multi-lote.
- **Inferência:** Implementar estas integrações exige uma **camada de mapeamento por cliente** — o mesmo contrato lógico tem payloads e sentidos diferentes entre projetos. Não há um único formato universal. · **Confiabilidade:** alta · **Base:** Retorno Reabastecimento e Snap Shot têm 3+ formatos distintos entre BP, BELEZA, BR e aditivos.
- **Inferência:** O formato IDoc (BRF Salvador) implica middleware SAP PI/PO ou SAP Integration Suite entre os sistemas; adiciona complexidade de mapeamento e depende do landscape SAP do cliente. · **Confiabilidade:** alta · **Base:** menção explícita aos IDocs TOCO, TORD, WMTORD em BRF Salvador.

---

## Dependências (grafo)

- **Entra depois de:** [[integracao-pedidos]] (Wave/pedido recebido) → [[order-start]] (volume criado)
- **Alimenta / é acionada por:** [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (picking confirm) · [[reabastecimento]] (retorno reabastecimento) · [[inventario]] (recall + ajuste)
- **Sai para (confirmações):** WMS do cliente (EWM/SAP ou similar)
- **Consulta:** [[conferencia]] (decide momento do Picking Confirm para Picking Cart) · [[sorter]] (Retorno Reindução) · [[sorter-rejeito]] (volumes não tratáveis)
- **Variantes de protocolo:** `in1 = rest/json_api` → REST/JSON · `in1 = idoc` → IDoc SAP · `in1 = dblink` → DBLink/tabelas compartilhadas · `in1 = json_pasta` → arquivo JSON monitorado
