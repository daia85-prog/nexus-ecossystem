# Integração — Knowledge Card

> CARD abrangente do tópico **Integração (visão geral)**. Fonte: Top 10 (BELEZA Fase1+2, BP, BRF Salvador, Beta, CDSK, ELETRO, Market Chile) + complementares. O ED usa este arquivo para gerar o capítulo de Integração do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.
> Este CARD é o **overview**: explica o modelo geral Gate+Variante, os tipos de integração suportados e aponta para os sub-CARDs específicos por fluxo.

## Tags
`integracao` `integração` `in1` `in1b` `rest` `idoc` `dblink` `excel` `json_api` `json_pasta`
`outro` `endpoint` `timeout` `wcs-wms` `wcs-erp` `wcs-sap` `ewm-sap` `manhattan`
`api-rest` `json` `xml` `idoc-sap` `matmas` `tord` `zsddarem` `basicauth` `oauth2`
`bearer-token` `get-polling` `post` `confirmacao-picking` `confirmacao-separacao`
`cancelamento-pedido` `cancelamento-romaneio` `reabastecimento` `ajuste-inventario`
`recall` `movimentacao-forcada` `cadastro-produtos` `cadastro-enderecos` `pallet-montado`
`mtp` `mtr` `shortpicking` `wave` `onda` `remessa` `mission`

## Metadados
- **Bloco:** integracao
- **Gate:** `in1 != tbd` (há tipo de integração definido)
- **Sub-CARDs com escopo próprio:** [[integracao-wcs-wms]] · [[integracao-pedidos]] · [[integracao-wms-erp]] · [[integracao-cadastros]]
- **Depende de:** [[order-start]] (recebe pedidos/remessas) · [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (geram confirmações) · [[conferencia]] (dispara CC após conferência) · [[sorter]] (desvio de volume) · [[ptl-alocacao]] (pallet montado) · [[gestao-estoque]] (auditoria, recall, mov. forçada)
- **Influencia:** todos os fluxos operacionais — integração é o eixo que conecta WCS ao WMS/ERP
- **Cruza com:** [[etiquetas]] (dados de etiqueta vêm na integração) · [[cubagem]] (campos de dimensão no payload) · [[shortpicking]] (ShortIndicator / qtd_coletado) · [[cancelamento-pedidos]] (MTP/MTR)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{in_tipo}}` | `in1` | select | `rest`=REST · `idoc`=IDoc SAP · `dblink`=DBLink · `excel`=Excel · `json_api`=JSON via API · `json_pasta`=JSON em pasta · `outro`=Outro · `tbd`=A definir |
| `{{in_tipo2}}` | `in1b` | select | idem — segundo protocolo quando há dois sistemas integrados |
| `{{in_endpoint}}` | `in_endpoint` | texto livre | URL/endpoint da integração (ex: `https://api.cliente.com/wcs`) |
| `{{in_timeout}}` | `in3` | texto livre | Timeout em ms (ex: `5000`) |

> `tbd`/vazio → omitir capítulo de Integração. `in1b` preenchido → WCS tem dois protocolos de integração (ex: REST para pedidos + DBLink para cadastros); ambos devem ser descritos.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com `in1 != tbd`. O ED parte daqui e aplica as condicionais.)*

A integração é o mecanismo pelo qual o WCS Velox troca informações com o sistema de gestão do cliente (WMS, ERP ou outro). Toda a operação do WCS depende de integrações: o WMS instrui o WCS sobre o que separar (pedidos/remessas/missões), e o WCS retorna ao WMS o resultado de cada operação (coletas, cortes, ajustes de estoque, palletes montados).

**Modelo geral de integração WCS:**

O WCS atua como **servidor** (recebe chamadas do WMS) e como **cliente** (dispara chamadas ao WMS). A direção de cada integração — WMS→WCS ou WCS→WMS — é definida por fluxo. Os protocolos e formatos variam conforme o campo `in1` do kickoff (ver **Condicionais**).

**Fluxos que geram integrações** (mapeamento geral):

| Fluxo | Direção | Integração | Momento de disparo |
|-------|---------|------------|--------------------|
| Recebimento de pedidos/remessas/missões | WMS → WCS | Pedidos (Wave/Work) | Antes do picking |
| Confirmação de picking/separação | WCS → WMS | CC / Confirmação de Coleta | Ao finalizar todos os volumes do pedido (ou por tarefa) |
| Reabastecimento (abastecimento do transfer) | WMS → WCS | ET / Abastecimento Transfer | Antes do reabastecimento físico |
| Confirmação de reabastecimento | WCS → WMS | CRT / Retorno Reabastecimento | Ao finalizar movimentação para posição de picking |
| Ajuste de inventário / auditoria | WCS → WMS | AI / Auditoria Estoque | Ao finalizar auditoria ou detectar divergência |
| Recall | WMS → WCS e WCS → WMS | Solicitação de Recall + Confirmação | Sob demanda operacional |
| Movimentação forçada | WCS → WMS | Movimentação Forçada | Ao finalizar movimentação manual |
| Cancelamento de pedido (MTP) | WMS → WCS | Mata Trabalho Pedido | Sob demanda do WMS |
| Cancelamento de romaneio (MTR) | WMS → WCS | Mata Trabalho Romaneio | Sob demanda do WMS |
| Cadastro de produtos | WMS → WCS | MATMAS / Cadastro Produtos | Antes do uso operacional do produto |
| Cadastro de endereços | WMS → WCS | Integração de Endereços | Antes da operação ou expansão de layout |
| Pallet montado / desvio sorter | WCS → WMS | Pallet Montado / Desvio Sorter | Ao fechar pallet no PTL ou ao desviar no sorter |
| Devolução de cancelados | WCS → WMS | Devolução Cancelados | Após conclusão de tarefas de devolução |
| Status de endereço (ativo/inativo) | WCS → WMS | Endereço Ativo/Inativo | Ao alterar status de posição |

> O conjunto exato de integrações varia por projeto. O número total documentado nas ESs varia entre **4** (Beta — integração mínima) e **16** (BELEZA Fase 1 e 2). Cada ES lista as integrações com número, nome, sentido e observações.

**Princípios que se repetem em todos os projetos:**

1. **Configurabilidade:** parâmetros, campos, mapeamentos e validações são configuráveis por projeto — não há payload universal fixo.
2. **Flexibilidade de formatos:** campos opcionais, campos personalizados e variações de tipo são acomodados por parametrização.
3. **Mapeamento e transformação:** o WCS realiza conversões entre o modelo de dados do WMS e seu modelo interno (ex: `OriginalOrderId` → `OrderId` interno; `nunota` → identificador do pedido).
4. **Tratamento de exceções:** campos obrigatórios ausentes → retorno `400 Bad Request` com descrição do erro; payload salvo no log de integrações com status `erro`; o WMS deve corrigir e reenviar.
5. **Deduplicação:** mensagens duplicadas (mesmo ID/payload) são ignoradas pelo WCS, sem efeito colateral na operação.
6. **Log de integrações:** o WCS registra todo payload recebido/enviado com status (concluído / erro), permitindo rastreabilidade e reprocessamento.

---

## Condicionais

### Tipo de Integração — derivado de `in1`

#### SE `in1 = rest` (REST JSON) → Texto Padrão base
O WCS e o WMS comunicam-se via **HTTP/HTTPS com payloads JSON**. O WCS pode atuar como servidor (recebe POSTs do WMS) e como cliente (dispara POSTs/GETs ao WMS). Os endpoints, headers obrigatórios, autenticação e estruturas de payload são acordados entre os times antes do período de Testes de Integração.

Implicações no `input_json`:
- `in_endpoint` → URL base das APIs (ex: `https://api.cliente.com/wcs`)
- `in3` → timeout em ms para cada chamada
- Cada integração individual tem seu próprio endpoint, método HTTP (POST/GET) e estrutura JSON descrita na ES
- O protocolo de autenticação varia por projeto (sem auth, BasicAuth, OAuth 2.0, Bearer Token JWT) — deve ser detalhado na ES e no `input_json`

Projetos com `in1 = rest`: BELEZA (Manhattan MAWM), BP (Sankhya), Beta (EWM/SAP), CDSK (WMS próprio Zaffari), ELETRO (Britânia), Market Chile (Tottus).

---

#### SE `in1 = idoc` (IDoc SAP) → ADICIONA subseção "Modelo IDoc"
As integrações são realizadas via **API REST transportando documentos IDoc (SAP)** em formato **XML**. O WCS recebe e envia IDocs conforme os tipos definidos (ex: `MATMAS` para cadastro de material, `TPSDLS`/`ZSDDAREM` para remessas). A autenticação para envio ao SAP usa **BasicAuth**.

Implicações no `input_json`:
- Cada IDoc tem um tipo de mensagem SAP (`MessageType` ou `IDOC_TYPE`) e campos com nomenclatura SAP (ex: `MATNR`, `EAN11`, `MAKTX`, `SHPID`, `DELID`, `ZSEQENTREGA`)
- O WCS não permite criação/edição manual de materiais — cadastro vem exclusivamente via IDoc `MATMAS`
- Campos obrigatórios ausentes → `400 Bad Request`; material não salvo; SAP deve reenviar após correção
- O WCS pode retornar apenas **uma rampa e um SKU por integração de retorno** ao SAP (restrição do SAP) — para sorter com múltiplas rampas físicas, o WCS informa sempre a rampa principal cadastrada para o transporte

Projetos com `in1 = idoc`: BRF Salvador (SAP EWM via IDocs TORD, MATMAS, ZSDDAREM).

---

#### SE `in1 = dblink` (DBLink) → ADICIONA subseção "Modelo DBLink"
A integração ocorre via **acesso direto a tabelas compartilhadas** entre os bancos de dados do WCS e do WMS. Não há chamadas HTTP; os dados são lidos/escritos diretamente em tabelas acordadas.

Implicações no `input_json`:
- `in_endpoint` → string de conexão ou nome do DBLink configurado
- Estrutura de dados definida por esquema de tabelas (não por JSON)
- Menor latência, maior acoplamento; requer VLAN/VPN entre os servidores dos dois sistemas
- Polling de leitura configurável (intervalo em segundos/minutos)

---

#### SE `in1 = excel` (Excel) → ADICIONA subseção "Modelo Excel"
A integração usa **arquivos Excel (.xlsx/.csv)** como formato de troca. O WCS lê arquivos depositados em pasta de rede ou FTP, processa e escreve resultados em outro arquivo/pasta.

Implicações no `input_json`:
- `in_endpoint` → caminho de rede ou endereço FTP da pasta de entrada/saída
- `in3` → intervalo de polling (ms)
- Menor automação; risco de erro humano no depósito/leitura dos arquivos
- Geralmente usado em projetos de menor porte ou como fallback

---

#### SE `in1 = json_api` (JSON via API) → equivalente funcional de `rest`
Subconjunto do padrão REST: payloads JSON via chamadas HTTP/HTTPS. Sem distinção prática em relação a `rest` no contexto do WCS — tratar como `rest` para geração do texto.

---

#### SE `in1 = json_pasta` (JSON em pasta) → ADICIONA subseção "Modelo JSON em Pasta"
O WCS lê arquivos JSON depositados em pasta de rede/FTP e grava os retornos também como arquivos JSON. Sem chamadas HTTP diretas.

Implicações no `input_json`:
- `in_endpoint` → caminho de rede da pasta de entrada/saída
- `in3` → intervalo de polling (ms)
- Padrão comum em integrações legadas ou parceiros sem API REST

---

#### SE `in1b` preenchido e `in1b != tbd` → ADICIONA subseção "Segundo Protocolo de Integração"
O projeto possui **dois sistemas integrados ao WCS** com protocolos distintos (ex: REST para pedidos + DBLink para cadastros de produtos). Cada protocolo deve ser descrito separadamente. Os fluxos que usam cada protocolo devem ser explicitados.

---

#### SE `in1 = tbd` ou vazio → OMITE o capítulo de Integração
Integração ainda não definida — omitir completamente até revisão do kickoff.

---

### Autenticação — derivada de texto livre no kickoff ou na ES

| Padrão | Projetos | Como documentar |
|--------|----------|-----------------|
| Sem autenticação (rede local controlada) | Beta (EWM/SAP), padrão Invent | "A comunicação ocorre dentro de arquitetura local controlada; autenticação entre sistemas não é exigida." |
| BasicAuth | BRF Salvador (envio ao SAP) | "O WCS autentica as requisições ao SAP via BasicAuth (usuário:senha em Base64)." |
| OAuth 2.0 | ELETRO (Britânia) | "O WCS realiza requisições aos endpoints do WMS respeitando autenticação OAuth 2.0." |
| Bearer Token (JWT) | Market Chile (Tottus) | "O WCS obtém um token JWT via POST de autenticação (Basic→Bearer) e usa-o nas demais chamadas." |

---

### Polling GET vs. Push POST — derivado do tipo de integração e projeto

**Modelo Push (padrão):** o WMS envia dados ao WCS via POST quando há evento (ex: novo pedido, solicitação de recall). O WCS também envia via POST ao WMS quando há evento (ex: confirmação de picking concluída).

**Modelo Pull (GET polling):** o WCS consulta periodicamente endpoints do WMS para verificar novos registros. Padrão CDSK (Zaffari): todos os recebimentos de dados são GET com `INDPROCESSADO = 'N'`; após processar, o WCS sinaliza `INDPROCESSADO = 'S'` via POST de confirmação. Intervalos: 5 min para pedidos e lojas; 1 min para etiquetas, produtos e cadastros.

---

### Granularidade da Confirmação de Picking — deriva do modelo do WMS

| Modelo | Projetos | Regra |
|--------|----------|-------|
| Confirmação por **tarefa** | Beta (EWM/SAP) | WCS aguarda todos os volumes da tarefa serem confirmados no ponto de saída; dispara uma única integração por tarefa |
| Confirmação **volume a volume** | BELEZA Fase 1 (Manhattan) | WCS envia uma integração por OlpnId assim que o volume finaliza picking (com `CloseOlpn = true`) |
| Confirmação por **pedido completo** | BP (Sankhya) | CC disparada uma única vez, somente após todos os volumes (pega) do pedido concluídos — sem confirmação parcial |
| Confirmação por **volume tratado no sorter** | ELETRO (Britânia), CDSK (Zaffari) | WCS envia ao WMS após desvio físico no sorter; paletização é responsabilidade do WMS |

---

### Cancelamento — MTP vs. MTR

Presente quando o projeto tem cancelamento de pedidos (BP, Beta confirmado na ES):

- **MTP (Mata Trabalho Pedido):** cancela pedido individual. O código `nunota`/`OrderId` **não pode ser reutilizado** em nova integração.
- **MTR (Mata Trabalho Romaneio):** cancela o romaneio inteiro. O WCS só aceita se nenhum volume do romaneio foi iniciado. Os códigos dos pedidos **podem ser reutilizados** em novo romaneio.

Após o cancelamento, o WCS dispara **Devolução de Cancelados** ao WMS para liberar o estoque. Para pedidos não iniciados, o envio é imediato. Para pedidos em andamento, o WCS envia após conclusão das tarefas de devolução.

---

## Observações Livres do Kickoff
Campos de texto: `in_endpoint` (URL) e `in3` (timeout) e observação livre.

O ED deve:
- **`in_endpoint`** → citar o endpoint base na abertura do capítulo de Integração (ex: "Os endpoints do WMS serão disponibilizados em `{{in_endpoint}}`").
- **`in3`** → mencionar o timeout configurado (ex: "O timeout padrão configurado é de {{in3}} ms por chamada").
- **Observação que define ambientes (HML/PRD)** → ADICIONAR subseção "Ambientes de Integração" com as URLs distintas para homologação e produção.
- **Observação que lista o número total de integrações** → mencionar na abertura (ex: "Para este projeto foram mapeadas N integrações").
- **Observação sobre restrições de campo** (ex: "SAP aceita apenas uma rampa por retorno") → ADICIONAR como RN numerada.

---

## Regras de Negócio

- **RN-01** (todos): toda integração recebida pelo WCS passa por validação de campos obrigatórios; payload com campo ausente retorna HTTP 400 com descrição do erro e é registrado no log de integrações com status `erro` — nenhum dado parcial é salvo.
- **RN-02** (todos): mensagens duplicadas (mesmo ID de mensagem/pedido já processado) são **ignoradas** pelo WCS sem efeito colateral — previne reprocessamento acidental pelo WMS.
- **RN-03** (todos): todo payload recebido ou enviado é registrado no log de integrações do WCS com status (`concluído` / `erro`), timestamp e conteúdo, garantindo rastreabilidade para auditoria e reprocessamento.
- **RN-04** (REST, todos): endpoints, headers, autenticação e estruturas de payload devem ser definidos e compartilhados **antes** do início do período de Testes de Integração, conforme cronograma da Invent.
- **RN-05** (confirmação picking): a confirmação de separação ao WMS é disparada **somente após** todos os volumes/tarefas concluídos no ponto de confirmação — nunca de forma parcial (exceto projetos com confirmação volume a volume explicitamente definida).
- **RN-06** (cancelamento MTP): o código de pedido cancelado via MTP **não pode ser reutilizado** em nova integração de missões/pedidos.
- **RN-07** (cancelamento MTR): o código do romaneio cancelado via MTR **não é mais aceito** pelo WCS; os pedidos vinculados podem ser reutilizados em novo romaneio.
- **RN-08** (IDoc/SAP — BRF Salvador): o WCS **não permite criação ou edição manual de materiais** — cadastro ocorre exclusivamente via IDoc MATMAS. Qualquer material novo deve ser integrado antes do envio de IDocs de remessa que o referenciem.
- **RN-09** (IDoc/SAP — BRF Salvador): para o retorno ao SAP após sorter, o WCS sempre informa a **rampa principal** cadastrada para o transporte — independentemente da rampa física real que recebeu o volume. O controle real de rampa é mantido internamente para rastreabilidade.
- **RN-10** (GET polling — CDSK): o WCS sinaliza o processamento de cada registro GET gravando `INDPROCESSADO = 'S'` via POST de confirmação; o WMS não deve reenviar registros já processados.
- **RN-11** (reabastecimento — Beta): a integração de reabastecimento concluído (WCS→WMS) é disparada apenas quando **todos** os volumes full case da tarefa estiverem na posição final (decanting + alocação de todas as bins) — sem confirmação parcial.
- **RN-12** (pedidos com lote/shelflife): quando `lote` e `ShelfLife` vêm como `null` na integração de pedidos, o WCS pode coletar qualquer lote ou shelflife disponível. Se preenchidos, a coleta deve respeitar os valores recebidos.
- **RN-13** (full case — Beta): o WCS recusa integrações de pedido full case onde a divisão `qtd_solic / qtd_caixa` resulte em valor menor que 1 (quantidade de caixas inteiras inviável).
- **RN-14** (recusa total — Beta): em caso de recusa de integração de pedidos, o WCS rejeita **toda a mensagem** — não há recusa parcial por remessa ou item; o EWM/SAP corrige e reenvia a integração completa.
- **RN-15** (abastecimento transfer — BP): a quantidade enviada na integração de abastecimento do transfer é **adicionada** ao saldo já existente no WCS — nunca sobrescreve.

> RNs **01–04** são universais (todos os projetos). RNs **05–15** têm escopo identificado (projeto ou conjunto de projetos).

---

## Insights e Padrões

### Padrões identificados
- **O texto de apresentação do capítulo de Integrações é quase idêntico** em todos os projetos (BELEZA, BP, Beta, ELETRO): princípios de configurabilidade, flexibilidade de formatos, mapeamento, tratamento de exceções e controle de fluxo. É um boilerplate Invent — pode ser gerado como texto padrão sem dependência de kickoff.
- **REST JSON é o protocolo dominante** (6 de 7 projetos Top 10 com integração definida); IDoc/XML aparece apenas no BRF Salvador (SAP EWM). DBLink, Excel e JSON pasta não aparecem nos projetos Top 10 — são opções para projetos legados ou menores.
- **O fluxo mínimo de integração** (presente em todos os projetos com separação WCS): (1) recebimento de pedidos/remessas → (2) confirmação de picking. Os demais fluxos são adicionais conforme escopo.
- **Log de integrações com status/payload** aparece explicitamente no BRF Salvador e BP; está implícito nos demais como prática padrão Velox.
- **Deduplicação de mensagens** é mencionada explicitamente em BELEZA (Manhattan), CDSK e Market Chile; inferida como padrão para os demais.

### Variações significativas
- **BELEZA (Manhattan MAWM):** estrutura de payload mais complexa; campos com nomenclatura Manhattan (`OlpnId`, `WMContextId` em Base64, `GenerationNumberId`, `TaskDetailId`); confirmação de picking volume a volume com `CLOSEOLPN`; 16 integrações no total.
- **BP (Sankhya):** payload orientado a romaneio/pedido com campos logísticos completos (placa, motorista, transportadora, sequência de carregamento, termolábil); confirmação de pedido completo (não por volume); conceito MTP/MTR explícito.
- **BRF Salvador (SAP EWM):** único com IDoc/XML; vocabulário SAP (SHPID, DELID, MATNR, BISMT); restrição de uma rampa/SKU por retorno ao SAP; material exclusivamente via integração.
- **Beta (EWM/SAP):** confirmação por tarefa (não por volume); reabastecimento com decanting + alocação de bins; integração de endereços via API; 4 integrações mapeadas (mínimo do corpus).
- **CDSK (Zaffari):** único com modelo GET polling + `INDPROCESSADO`; integrações de produtivo e lojas para sorter/PTL; sem separação — apenas sorter recebedor de pallets externos.
- **ELETRO (Britânia):** OAuth 2.0; escopo WCS limitado ao sorter (desvio físico); paletização 100% no WMS via coletor Android; integração de Volumes (WMS→WCS) + Desvio Sorter (WCS→WMS).
- **Market Chile (Tottus):** autenticação JWT (Basic→Bearer); integração de Caixa a Caixa (volume a volume no PTL) + Pallet Montado + Cancelamento de Volumes por ocorrência; campo `provedor` específico do cliente.

### Lacunas conhecidas (candidatas a novo campo no kickoff)
- Não há campo para **autenticação** (`none` / `basicauth` / `oauth2` / `bearer`) — hoje inferido do texto livre ou da ES. Candidato a select.
- Não há campo para **modelo de confirmação de picking** (`por_tarefa` / `por_volume` / `por_pedido`) — crítico para geração do texto correto. Candidato a select.
- Não há campo para **número total de integrações** — mencionado em texto livre. Candidato a campo numérico.
- Não há campo para **ambientes HML/PRD** (URLs distintas) — hoje no texto livre.
- Não há campo para **polling vs. push** — hoje inferido de `in1`.

### Inferências
- **Inferência:** quando `in1 = rest` e o WMS é SAP/EWM, é comum o uso de campos com nomenclatura SAP no payload (empresa, centro, codDeposito). · **Confiabilidade:** alta · **Base:** Beta, BRF Salvador, Market Chile.
- **Inferência:** projetos com sorter tendem a ter integração de "Pallet Montado" ou "Desvio Sorter" como retorno ao WMS. · **Confiabilidade:** alta · **Base:** CDSK, ELETRO, Market Chile, BP.
- **Inferência:** `in1b` preenchido indica projeto multi-sistema (ex: WMS + ERP separados) — raro nos Top 10 mas presente em projetos mais complexos. · **Confiabilidade:** média.

---

## Dependências (grafo)
- **Recebe dados de:** [[order-start]] (cria pedido/wave no WCS com dados da integração) · [[gestao-estoque]] (auditoria, recall, mov. forçada disparam integrações de saída)
- **Alimenta:** [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (dados de pedido vêm da integração de entrada) · [[conferencia]] (flags `conferencia` / `cliente_novo` vêm na wave) · [[sorter]] (mapa de sorter alimentado por integração de lojas/volumes) · [[ptl-alocacao]] (integração de lojas/posições PTL) · [[etiquetas]] (dados de etiqueta vêm no payload de pedido)
- **Retorna para:** [[integracao-pedidos]] (confirmação de coleta/shortpicking ao WMS) · [[integracao-wcs-wms]] (desvio sorter, pallet montado) · [[integracao-wms-erp]] (ajuste inventário, recall, mov. forçada) · [[integracao-cadastros]] (produtos, endereços, produtivos, lojas)
- **Sub-CARDs específicos por fluxo:**
  - [[integracao-pedidos]] — recebimento de pedidos/remessas/missões + confirmação de picking + cancelamento MTP/MTR
  - [[integracao-wcs-wms]] — pallet montado, desvio sorter, caixa a caixa, devolução cancelados, endereço ativo/inativo
  - [[integracao-wms-erp]] — reabastecimento (ET/CRT), ajuste de inventário (AI), recall, movimentação forçada
  - [[integracao-cadastros]] — cadastro de produtos (MATMAS/REST), cadastro de endereços, produtivos, lojas, matriz de fragilidade
