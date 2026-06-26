# Integração de Pedidos — Knowledge Card

> CARD abrangente do tópico **Integração de Pedidos/Waves**. Fonte: Top 10 (BP, BRF Salvador, Beta, CDSK, NavePark) + complementares (BR, BRF Jundiaí, Beta Full SP, Beta Esteio, Esperança, Guatemala, Wild Fork). Cobre o fluxo bidirecional: **Inbound** (WMS → WCS: ondas/pedidos) e **Outbound** (WCS → WMS: confirmação de picking, cortes, cancelados). O ED usa este arquivo para gerar o capítulo de Integração do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** por variante de `in1` e absorve as **Observações Livres**.

## Tags
`integracao-pedidos` `integracao` `wave` `onda` `orders` `order-post` `remessa`
`confirmacao-picking` `short-picking-confirmacao` `cancelamento-pedido` `devolucao-cancelados`
`conferencia-flag` `cliente-novo-flag` `transportadora-wave` `prioridade-pedido`
`rest` `json-api` `idoc` `sap-idoc` `wmtord` `dblink` `tabela-compartilhada`
`inbound-wms-wcs` `outbound-wcs-wms` `recusa-integracao` `fifo` `cut-off`
`fracionado` `fullcase` `cubagem-integracao` `ean` `sku` `posicao-coleta`
`os-gate` `order-start` `missao-montagem` `bin-packing` `masterbox`

## Metadados
- **Bloco:** integracao
- **Gate:** `os_gate = yes` AND `in1 != tbd`
- **Subtópicos com CARD próprio:** [[order-start]] (vinculação física/lógica), [[conferencia]] (flags `conferencia`/`cliente_novo`), [[shortpicking]] (cortes reportados ao WMS)
- **Depende de:** [[order-start]] (ponto de entrada da wave no fluxo físico), [[cubagem]] (se `cu1 = yes` e `c1 = wcs`)
- **Influencia:** [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (itens/posições vindos da integração), [[conferencia]] (flags de desvio), [[etiquetas]] (ZPL/etiqueta embutida na wave), [[sorter]] (rota/transportadora para desvio de rampa)
- **Cruza com:** [[conferencia]] (flags `conferencia`/`cliente_novo` na wave → desvio para estação), [[shortpicking]] (quantidade confirmada < solicitada → corte reportado ao WMS)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{integ_tipo}}` | `in1` | select | `rest`=REST · `json_api`=JSON via API · `idoc`=IDoc · `dblink`=DBLink · `excel`=Excel · `json_pasta`=JSON em pasta · `outro`=Outro · `tbd` |
| `{{integ_tipo2}}` | `in1b` | select | idem (canal secundário, se houver) |
| `{{integ_endpoint}}` | `in_endpoint` | texto livre | URL/endpoint do WCS que recebe os pedidos |
| `{{integ_timeout}}` | `in3` | texto livre | Timeout em ms para respostas da integração |
| `{{os_resp}}` | `os_r` | select | `wcs`=WCS · `wms_only`=WMS · `both_wms_wcs`=Ambos |
| `{{cubagem_resp}}` | `c1` | select | `wcs`=WCS (cubagem no WCS) · `wms_only`=WMS (WMS envia cubagem pronta) |

> `tbd`/vazio em `in1` → Gate não atendido → omitir capítulo inteiro. `in1b` preenchido → documentar canal secundário ao final da seção de variante. Multi-select usa `|||` como separador.

---

## Texto Padrão
*(Base presente em todo projeto com `os_gate = yes` e `in1 != tbd`. O ED parte daqui e aplica as condicionais por variante.)*

A integração de pedidos é o canal pelo qual o WMS comunica ao WCS as demandas de separação e pelo qual o WCS devolve ao WMS as confirmações de execução. Ela é o ponto de partida de todo o fluxo operacional: sem a integração de uma onda/pedido, nenhuma caixa é induzida no Order Start.

**Direções do fluxo:**

- **Inbound (WMS → WCS):** O WMS envia ondas de separação contendo os pedidos, volumes e itens a separar. O WCS valida, registra internamente e disponibiliza os pedidos na fila do Order Start para início da operação.
- **Outbound (WCS → WMS):** O WCS reporta ao WMS o resultado da separação — itens coletados, cortes (shortpicking), e eventos de cancelamento/devolução de pedidos.

**Fluxo operacional padrão (Inbound):**

1. **Recebimento da onda.** O WMS envia ao WCS uma mensagem contendo a onda de separação com seus pedidos. Cada pedido contém: identificador do pedido, código do cliente, transportadora/rota, prioridade e a lista de volumes (fracionados e/ou fullcase) com seus respectivos itens, posições de coleta, quantidades e pesos.

2. **Validação e recusa.** O WCS valida os dados recebidos. Em caso de inconsistência, **a recusa é sempre total**: todos os pedidos da mensagem são rejeitados e nenhuma integração parcial é aceita. O WMS deve corrigir e reenviar a mensagem completa.

3. **Disponibilização na fila.** Após validação, os pedidos integrados aparecem automaticamente na tela do Order Start, ordenados por prioridade (ver subseção **Priorização**). O WCS calcula a quantidade de caixas necessárias para cada pedido e exibe essa informação ao operador.

4. **Execução da separação.** O operador induz as caixas no Order Start; o WCS vincula fisicamente cada caixa ao pedido e a conduz pelos postos de picking de acordo com os itens da integração.

5. **Confirmação ao WMS (Outbound).** Ao concluir a separação (conferência → packing → expedição), o WCS reporta ao WMS os itens efetivamente coletados, incluindo cortes (quantidade coletada < solicitada) e timestamps. Ver seção **Outbound — Confirmação de Picking**.

**Priorização de pedidos:**

Por padrão, os pedidos integrados seguem a fila FIFO (First In, First Out) — o mais antigo é processado primeiro. Quando necessário, o supervisor pode aplicar **priorização manual** diretamente no Velox, reordenando a fila por:
- Transportadora (prioriza pedidos de uma transportadora específica)
- Pedido individual (um ou mais pedidos)
- Onda (todos os pedidos de uma onda)
- Horário de corte / cut-off (pedidos com prazo mais próximo)

Projetos com integração de prioridade automática: o WMS envia o campo `priority`/`prioridade` na wave; o WCS ordena automaticamente. Caso o campo não seja enviado, o WCS adota FIFO cronológico.

**Bypass de pedidos Full Pallet (Monocliente):**

O WMS envia ao WCS **apenas** as demandas que devem ser processadas na automação de fracionados. Cargas de pallet completo monocliente (carga fechada / full pallet) **não são enviadas ao WCS** e seguem separação direta pelo WMS. Essa regra de bypass é responsabilidade do WMS.

---

## Condicionais

### Variante `in1 = rest` ou `in1 = json_api` — REST/JSON via API

#### Formato Inbound (WMS → WCS): POST de Onda/Pedidos

O WMS realiza um **HTTP POST** para o endpoint `{{integ_endpoint}}` do WCS. O payload é um objeto JSON com a onda no nível raiz e a lista de pedidos aninhada.

**Estrutura canônica (baseada em BR/NavePark):**
```json
{
  "onda": "<id_onda>",
  "pedidos": [
    {
      "num_pedido": "<id_pedido>",
      "rota": "<cod_rota>",
      "cod_cliente": "<cod_cliente>",
      "priority": 1,
      "conferencia": "Y",
      "cliente_novo": "Y",
      "transportadora": "<cod_transp>",
      "fracionados": [
        {
          "num_etiqueta": "<label>",
          "tipo_cx": "GG",
          "cubagem_total": 0.00328,
          "zpl": "<dados_etiqueta_zpl>",
          "peso_total": 300,
          "itens": [
            {
              "ean": "7891000000028",
              "sku": "3040",
              "posicao": "A-01-02",
              "qtde": 5,
              "pesoun": 150
            }
          ]
        }
      ],
      "fullcase": [
        {
          "num_etiqueta": "<label_fc>",
          "pesocx": 1500
        }
      ]
    }
  ]
}
```

**Campos principais do payload (Inbound — fracionados):**

| Campo | Tipo | Obrig. | Descrição |
|-------|------|--------|-----------|
| `onda` | Char | Sim | Identificador da onda de separação |
| `pedidos` | Array | Sim | Lista de pedidos da onda |
| `num_pedido` | Char | Sim | Número do pedido |
| `rota` | Char | Sim | Código da rota de entrega |
| `cod_cliente` | Char | Sim | Código do cliente |
| `priority` | Integer | Não | Prioridade operacional (1 = maior prioridade) |
| `conferencia` | Char | Não | `"Y"` → 100% dos volumes deste pedido vão para conferência |
| `cliente_novo` | Char | Não | `"Y"` → cliente novo, 100% para conferência |
| `transportadora` | Char | Não | Código/descrição da transportadora (usado em priorização e desvio de rampa) |
| `fracionados` | Array | Não | Lista de volumes fracionados do pedido |
| `num_etiqueta` | Char | Sim | Número da etiqueta do volume (label) |
| `tipo_cx` | Char | Sim | Tamanho da caixa (P/M/G/GG — definido pelo WMS ou WCS) |
| `cubagem_total` | Decimal | Sim | Cubagem total do volume em m³ |
| `zpl` | Char | Sim | Dados da etiqueta ZPL para impressão no Order Start |
| `peso_total` | Decimal | Sim | Peso total esperado do volume em gramas |
| `itens` | Array | Sim | Lista de itens do volume |
| `ean` | Char | Sim | Código EAN do produto (unitário) |
| `sku` | Char | Sim | Código interno do produto |
| `posicao` | Char | Sim | Endereço de coleta no FlowRack/picking |
| `qtde` | Integer | Sim | Quantidade a separar |
| `pesoun` | Decimal | Sim | Peso unitário do item em gramas |
| `fullcase` | Array | Não | Lista de volumes fullcase do pedido |

> **Nota `conferencia`/`cliente_novo`:** Estes flags são lidos pelo WCS no momento da indução. Se `conferencia = "Y"` ou `cliente_novo = "Y"`, o WCS sinaliza internamente que todos os volumes do pedido devem ser desviados para a estação de conferência após o picking. Dependência direta com [[conferencia]] (RN-07 do CARD de Conferência).

> **Nota ZPL:** Quando o WMS envia o ZPL embutido na wave, a impressão da etiqueta ocorre automaticamente no Order Start sem consulta adicional ao WMS. Se o ZPL não vier na wave, o WCS gera a etiqueta com os dados do pedido.

**Campos principais do payload (Inbound — fullcase avançado, baseado em Beta Full SP/EWM):**

Projetos com EWM/SAP e separação fullcase detalhada enviam campos adicionais por item:

| Campo | Tipo | Obrig. | Descrição |
|-------|------|--------|-----------|
| `tarefa` | Numc | Sim | Nº Tarefa WMS para separação do item |
| `ean_dz` | Char | Sim | Código EAN master/dúzia do produto |
| `qtd_solic` | Decimal | Sim | Quantidade solicitada |
| `cubagem` | Decimal | Sim | Cubagem unitária em m³ |
| `altura`/`largura`/`comprimento` | Integer | Sim | Dimensões em mm |
| `qtd_master` | Decimal | Sim | Qtd unid. por display/master; WCS divide `qtd_solic` por `qtd_master` para calcular qtd LED |
| `qtd_caixa` | Decimal | Sim | Qtd unid. por caixa fechada; WCS divide para calcular nº de caixas; recusa se divisão < 1 |
| `dun` | Char | Sim | Código DUN-14 do item (fullcase) |

**Recusa da integração:**
Em caso de qualquer inconsistência, o WCS rejeita a integração de forma **total**. Nenhum pedido parcialmente válido é aceito. O WMS recebe HTTP 400 com o motivo do erro e deve corrigir e reenviar a mensagem completa.

---

#### SE `cu1 = yes` E `c1 = wcs` → Cubagem no WCS (Wild Fork / Mustard)

Nesta variante, o WCS é responsável pelo cálculo de cubagem (bin packing tridimensional). O WMS envia os pedidos com as dimensões e pesos dos itens, e o WCS determina quantos pallets serão necessários e como montá-los:

```json
{
  "data_evento": "2026-03-01T08:00:00Z",
  "wave_id": "WAVE-20260301-X99",
  "wave": {
    "orders": [
      {
        "order_number": 880055,
        "destination": { "code": "RT-FL-05", "description": "SOUTH FLORIDA ROUTE" },
        "items": [
          {
            "sku": "HW-HEAVY-01",
            "position": "01-43-20",
            "masterbox": 0,
            "quantity": 10,
            "fragility": 3,
            "unit_weight_kg": 12.500,
            "dimensions_cm": { "height": 40, "width": 30, "length": 50 }
          }
        ]
      }
    ]
  }
}
```

Campos específicos desta variante: `fragilidade`/`fragility` (1–5: 1=topo/frágil, 3 ou 5=base/pesado), `masterbox` (qtd de unidades no master; se > 0, o WCS contabiliza por master ao bipar), `dimensions_cm`/`dimensoes_cm` (mandatório para bin packing). O campo `codigo`/`destination.code` vincula o pedido à posição física no Sorter Map.

---

#### Formato Outbound (WCS → WMS): Confirmação de Picking

Após a conclusão do picking/conferência/packing, o WCS reporta ao WMS os resultados:

**Confirmação de picking (exemplo canônico REST):**
```json
{
  "onda": "<id_onda>",
  "num_pedido": "<id_pedido>",
  "num_etiqueta": "<label_volume>",
  "status": "CONFIRMADO",
  "itens_coletados": [
    { "ean": "7891000000028", "sku": "3040", "qtde_coletada": 5 },
    { "ean": "9961000000014", "sku": "1020", "qtde_coletada": 6 }
  ],
  "itens_cortados": [
    { "ean": "9961000000014", "sku": "1020", "qtde_cortada": 2, "motivo": "FALTA_ESTOQUE" }
  ],
  "timestamp_coleta": "2026-06-25T14:32:10Z"
}
```

> O payload exato varia por projeto; o padrão mínimo inclui: identificador da onda/pedido, status (confirmado/parcial/cortado), lista de itens coletados com quantidades e lista de cortes com motivo.

**Devolução de pedidos cancelados (NavePark):**
Quando todas as tarefas de devolução vinculadas a um pedido cancelado são finalizadas, o WCS retorna ao WMS o número do pedido para reincorporação de estoque:
```json
{ "pedido": 1548789782148 }
```
> Se o WCS não puder processar o cancelamento, retorna HTTP 400 com o motivo do erro.

---

### Variante `in1 = idoc` — IDocs SAP (BRF Salvador / Beta / Beta Esteio / Beta Full SP)

O WMS SAP/EWM comunica ao WCS via **IDocs** (Intermediate Documents). Ondas são criadas e gerenciadas pelo SAP e comunicadas ao WCS via **WMTORD** (ordens de transferência de armazém).

**Características desta variante:**
- O SAP cria e gerencia as ondas de separação; o WCS **consome** os IDocs recebidos e os processa internamente.
- Cada onda (Onda) é um agrupamento lógico de transportes (cargas diretas ou TSP) de mesmo tipo, processados simultaneamente.
- Cada remessa (Remessa/Entrega/Fornecimento) corresponde a um pedido de cliente registrado no SAP, podendo conter um ou mais paletes a expedir.
- **Remessas canceladas:** podem ser reintegradas ao WCS. Nesse caso, o WCS cria uma **nova missão** — a missão anterior não é substituída (não há sobrescrita).
- A camada de tradução IDoc → estrutura interna do WCS é responsabilidade da integração Invent/cliente.

**Campos rastreados na onda (BRF Salvador):**

| Campo | Descrição |
|-------|-----------|
| Qtd transportes na onda | Total de transportes agrupados na onda |
| Qtd docas da onda | Número de docas de destino |
| Qtd caixas da onda | Total de caixas previstas |
| Qtd caixas desviadas | Caixas desviadas (conferência/rejeito) |
| Qtd caixas cortadas | Caixas com encerramento sem finalização de todos os materiais (shortpicking) |
| Início da onda | Data/hora de início |
| Fim da separação | Data/hora da última compra finalizada com LED concluído (ou horário de encerramento se pendências) |
| Fim da onda | Data/hora de finalização total da onda |

**Outbound (WCS → SAP/EWM):** O WCS reporta confirmações de picking e cortes via interface equivalente (IDoc de resposta ou API REST complementar, a depender da implementação do cliente SAP). Documentar o canal de retorno no campo `in1b` quando houver canal secundário.

---

### Variante `in1 = dblink` — DBLink / Tabela Compartilhada (Esperança/Winthor)

O WMS insere os pedidos diretamente em uma **tabela compartilhada** acessível pelo WCS via DBLink (view ou tabela SQL direta). O WCS faz polling nos registros novos ou atualizados.

**Características desta variante:**
- O WMS registra os pedidos na tabela compartilhada; o WCS lê com base no campo identificador único (ex: coluna `numos`) para detectar registros novos ou atualizados, **evitando reprocessamento**.
- Pedidos suportados: Full Case, Pallets Fechados e fracionados (conforme escopo).
- O WMS deve garantir que os pedidos estejam inseridos na tabela **antes do início da operação** no sorter.
- O WCS grava na tabela interna `ORDEMSERVICO` após processar cada registro.

**Outbound via Tabela de Pendências:**
O WCS realiza **inserções** na Tabela de Pendências (gerenciada pelo WMS) para registrar ocorrências durante a separação: shortpicking, motivos de avaria, volumes rejeitados. O WMS consulta e aprova/reprova cada pendência; o WCS aguarda a decisão antes de liberar o próximo passo operacional (impressão de etiqueta de pendência, continuidade da tarefa).

> O WCS **não executa** bloqueios ou reagendamentos por conta própria — todas as ações subsequentes dependem da decisão do WMS na tabela de pendências.

---

### SE `in1b` preenchido → Canal Secundário

Quando um segundo tipo de integração é configurado (`in1b != tbd`), documentar:
- Qual direção o canal secundário cobre (ex: Inbound para fracionados via REST + Outbound via IDoc de confirmação)
- Se o canal secundário é para um tipo específico de carga (ex: fullcase via REST, pallet fechado via DBLink)
- Timeout separado se configurado

---

### SE `os_gate = no` ou `in1 = tbd` → OMITE o capítulo inteiro de Integração de Pedidos.

---

## Observações Livres do Kickoff

Campos de texto: `in_endpoint` (endpoint/URL), `in3` (timeout ms).

O ED deve:
- **`in_endpoint`** → mencionar a URL do endpoint na abertura do capítulo quando a variante for REST/JSON (ex: "O WCS expõe o endpoint `{{integ_endpoint}}` para recebimento das ondas via HTTP POST").
- **`in3`** → mencionar o timeout configurado na seção de validação/recusa (ex: "O WCS aguarda resposta em até `{{integ_timeout}}` ms antes de considerar timeout na integração").
- **Observação que detalha campos adicionais na wave** (ex: flags extras do WMS) → ADICIONAR como subseção nomeada ao final da variante correspondente, com `[OBS INTERNA]` se precisar de validação.
- **Observação sobre canal de retorno (Outbound) distinto** → ADICIONAR subseção "Canal de Confirmação" com os detalhes do endpoint/tabela de destino.

---

## Regras de Negócio

- **RN-01** (todos): a integração de pedidos é o **pré-requisito** para qualquer operação no Order Start — sem onda integrada, nenhuma caixa pode ser induzida.
- **RN-02** (todos): a recusa da integração é sempre **total** — nenhum pedido parcialmente válido é aceito; o WMS deve corrigir e reenviar a mensagem completa.
- **RN-03** (todos): o WMS é responsável por enviar ao WCS **apenas** demandas de automação de fracionados; pallets completos monocliente (full pallet) são separados diretamente pelo WMS sem passar pelo WCS.
- **RN-04** (rest/json_api): os campos `conferencia = "Y"` e `cliente_novo = "Y"` na wave são as únicas sinalizações que o WCS aceita para forçar desvio de 100% dos volumes do pedido para a estação de conferência; sem esses flags, o WCS aplica as demais regras de desvio configuradas. (Dependência: RN-07 do CARD [[conferencia]].)
- **RN-05** (rest/json_api): o campo `transportadora` na wave é utilizado pelo WCS para dois fins: (a) priorização manual de fila e (b) critério de desvio de rampa no sorter (`st_criterio = transp`).
- **RN-06** (rest/json_api com cubagem WCS): o WCS **ignora** qualquer pré-definição de volumes/cubagem enviada pelo WMS quando `c1 = wcs`; o cálculo tridimensional (bin packing) é executado pelo próprio WCS com base nas dimensões dos itens recebidas na wave.
- **RN-07** (rest/json_api — fullcase): o WCS deve **recusar** a integração se `qtd_solic / qtd_caixa < 1` para qualquer item fullcase — não é possível separar menos de uma caixa fechada.
- **RN-08** (rest/json_api — masterbox): quando `masterbox > 0`, cada bipagem do operador incrementa `masterbox` unidades no contador de coleta (não 1 unidade).
- **RN-09** (idoc — BRF Salvador): remessas canceladas reintegradas **geram nova missão** no WCS; a missão anterior permanece registrada e não é substituída, evitando perda de rastreabilidade.
- **RN-10** (dblink — Esperança): o WCS detecta pedidos novos/atualizados pela coluna identificadora única (`numos`) na tabela compartilhada; reprocessamento é bloqueado para registros já consumidos.
- **RN-11** (dblink — Esperança): o WCS apenas registra ocorrências (shortpicking, avaria) na Tabela de Pendências do WMS; **não age unilateralmente** — toda ação subsequente (bloqueio, reagendamento, continuidade) depende de aprovação explícita do WMS.
- **RN-12** (todos): a fila padrão do Order Start segue FIFO cronológico; prioridade automática sobrepõe FIFO quando enviada pelo WMS; prioridade manual do supervisor sobrepõe ambas.
- **RN-13** (todos): o WMS deve garantir que os produtos estejam **abastecidos nas posições de picking** antes de enviar a onda ao WCS — o WCS assume que a posição enviada está disponível para coleta.

---

## Insights e Padrões

### Padrões identificados
- **REST/JSON é o padrão dominante** nos projetos mais recentes (NavePark, BR, Wild Fork, BRF Jundiaí): todos usam HTTP POST com payload JSON estruturado em onda → pedidos → itens.
- O par `conferencia`/`cliente_novo` na wave aparece como padrão em múltiplos projetos fracionados — é o mecanismo consolidado para forçar desvio de conferência sem parametrização manual no WCS.
- A **recusa total** (sem aceitação parcial) é regra em 100% dos projetos REST documentados (BR, Beta Full SP, NavePark).
- A priorização FIFO com override manual pelo supervisor é o comportamento padrão em todos os projetos; prioridade automática via campo `priority`/`prioridade` aparece como adição incremental.

### Variações significativas
- **BRF Salvador** usa IDoc SAP (WMTORD) — o único projeto Top 10 com essa variante; a onda é criada e gerenciada inteiramente no SAP.
- **Beta / Beta Full SP / Beta Esteio** usam EWM/SAP como WMS, mas a especificação de software descreve a interface como JSON (compatível com `json_api`); o IDoc pode ser a camada subjacente.
- **Esperança (Winthor)** usa DBLink com tabela compartilhada — variante rara, mas relevante para WMS legados sem API REST. O outbound é via tabela de pendências (escrita do WCS na tabela do WMS), não via POST.
- **Wild Fork** é o único projeto onde o WCS executa bin packing tridimensional (`c1 = wcs`); nos demais, a cubagem é responsabilidade do WMS (campo `cubagem_total` ou `cubagem` vem pronto na wave).
- **NavePark** é o único projeto Top 10 com endpoint documentado de **devolução de cancelados** (outbound simples: `{"pedido": <id>}`).
- **BR** é o único projeto com separação explícita de volumes fracionados e fullcase **no mesmo payload** de onda, com campos de peso e ZPL embutidos por volume.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para "**canal de confirmação outbound**" (endpoint, tabela ou IDoc que o WCS usa para confirmar picking ao WMS) — hoje inferido ou documentado em texto livre. Candidato a campo separado.
- Não há campo para "**ZPL embutido na wave**" vs "**WCS gera etiqueta**" — hoje inferido pelo campo `zpl` estar preenchido ou não. Candidato a checkbox no bloco de integração.
- "**Recusa total vs recusa parcial**" não tem campo no kickoff — é comportamento padrão, mas poderia ser parametrizável em projetos futuros.
- O campo `in3` (timeout) raramente é preenchido no kickoff mas é relevante para SLA de integração em ambientes de alta volumetria.

### Inferências
- **Inferência:** quando `in1 = idoc`, o WMS é SAP (ERP SAP com módulo WM/EWM); quando `in1 = rest` ou `json_api`, o WMS pode ser qualquer sistema (Spark, EWM, Winthor, etc.). · **Confiabilidade:** alta · **Base:** 100% dos projetos IDoc são SAP/EWM no corpus.
- **Inferência:** quando `st_criterio = transp` (critério de desvio de rampa por transportadora) está ativo, o campo `transportadora` na wave é mandatório — sem ele o sorter não consegue rotear o volume. · **Confiabilidade:** alta · **Base:** padrão arquitetural do sorter.
- **Inferência:** projetos com `cf_t2` contendo `conf_client` **dependem** dos flags `conferencia`/`cliente_novo` na wave; se o WMS não os enviar, o desvio por cliente não funcionará. · **Confiabilidade:** alta · **Base:** RN-07 CARD conferencia + BR/NavePark.
- **Inferência:** quando `c1 = wms_only` (WMS faz cubagem), o campo `cubagem_total` (volume fracionado) e as dimensões individuais dos itens no payload são mandatórios para o check weight e para o Order Start exibir a quantidade correta de caixas. · **Confiabilidade:** média · **Base:** padrão BR/NavePark.

---

## Dependências (grafo)

- **Entra antes de:** [[order-start]] (a onda integrada alimenta a fila de indução)
- **Alimenta:** [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (itens, posições e quantidades vêm da integração)
- **Sai para (outbound):** WMS/ERP externo (confirmação de picking, cortes, cancelamentos)
- **Consulta/alimenta:** [[conferencia]] (flags `conferencia`/`cliente_novo` → desvio de estação), [[sorter]] (campo `transportadora`/`rota` → critério de desvio de rampa), [[etiquetas]] (ZPL embutido na wave → impressão no OS), [[shortpicking]] (cortes gerados no picking → reportados ao WMS via outbound), [[cubagem]] (se `c1 = wcs`, WCS executa bin packing com dimensões da wave)
- **Variante IDoc:** depende de mapeamento SAP/EWM → WCS gerenciado fora do WCS Velox
- **Variante DBLink:** depende de acesso de rede/view compartilhada entre BD do WMS e BD do WCS
