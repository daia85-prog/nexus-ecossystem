# Integração WMS-ERP — Knowledge Card

> CARD abrangente do tópico **Integração WMS-ERP**. Fonte: Top 10 (BRF Salvador — único projeto com evidência direta de IDocs SAP WMS↔ERP no corpus). O ED usa este arquivo para gerar o capítulo de Integração WMS-ERP do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**. Cobre as mensagens que trafegam entre o WMS (SAP EWM/WM) e o ERP (SAP) mediadas ou disparadas pelo WCS — WMTORD (TORD), TOCO, CATO, ZSDDAREM/TPSDLS.

## Tags
`integracao-wms-erp` `idoc` `sap` `wmtord` `toco` `cato` `tord` `erp-integration`
`wms-sap` `sap-ewm` `sap-wm` `ordem-transporte` `ot` `confirmacao-ot` `cancelamento-ot`
`tpsdls` `zsddarem` `zsep-parcial` `encerramento-onda` `corte-separacao` `reabastecimento-sap`
`limpeza-canal` `ciclo-idoc` `in1-idoc` `g5-sap`

## Metadados
- **Bloco:** integracao
- **Gate:** `in1 = idoc` OU evidência de integração ERP (SAP) no projeto (campo `g5` contém SAP WM ou SAP EWM)
- **Subtópicos com CARD próprio:** [[integracao-pedidos]] (Wave/remessas WMS→WCS), [[integracao-wcs-wms]] (estoque/confirmação de coleta WCS→WMS)
- **Depende de:** [[order-start]] (criação de volumes/OTs), [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (separação que origina confirmações), [[reabastecimento]] (TORD de reabastecimento SAP→WCS)
- **Influencia:** [[shortpicking]] (corte de separação gera TORD WCS→SAP), [[sorter]] (encerramento de onda dispara TPSDLS), [[cancelamento-pedidos]] (CATO — cancelamento de OT)
- **Cruza com:** [[integracao-pedidos]] (remessas/ondas), [[reabastecimento]] (TORD por capacidade/demanda), [[shortpicking]] (corte reportado ao SAP)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{int_tipo}}` | `in1` | select | `idoc`=IDoc · `rest`=REST · `dblink`=DBLink · `outro`=Outro · tbd |
| `{{int_tipo2}}` | `in1b` | select | idem (canal secundário, se existir) |
| `{{int_endpoint}}` | `in_endpoint` | texto livre | URL/endpoint do middleware SAP (RFC ou ALE) |
| `{{int_timeout}}` | `in3` | texto livre | timeout em ms para envio/recepção de IDocs |
| `{{wms_sistema}}` | `g5` | wms | sistema WMS do cliente (SAP EWM · SAP WM · outro) |

> `tbd`/vazio → omitir seção de IDocs e usar texto genérico de "integração ERP a confirmar".

---

## Texto Padrão
*(Base detalhada presente em projetos SAP com `in1 = idoc` e `g5` contendo SAP EWM/WM. O ED parte daqui e aplica as condicionais.)*

A integração WMS-ERP cobre o conjunto de mensagens trocadas entre o WMS (SAP EWM/WM) e o ERP (SAP) nas quais o WCS atua como executor das ordens ou como originador de confirmações e eventos. O WCS não é parte direta do protocolo ALE/IDoc — ele opera **como parceiro do SAP via camada de middleware** (tipicamente RFC sobre TCP/IP ou fila ALE) — mas o ciclo de vida das Ordens de Transporte (OT) é inteiramente gerenciado por IDocs que passam pelo WCS.

O controle de estoque **final** é de responsabilidade do SAP/ERP. O WCS mantém apenas o **estoque interno sistêmico** (posições de picking, buffers, conveyors). Divergências detectadas pelo WCS são reportadas ao SAP para que este realize a tratativa (cancelamento de faturamento, reprocessamento ou retorno a estoque).

### Ciclo de Vida de uma Ordem de Transporte (OT)

O fluxo padrão de uma OT em projetos SAP segue quatro IDocs principais:

1. **WMTORD (TORD) recebido pelo WCS** — O SAP envia ao WCS um IDoc do tipo WMTORD (segmento TORD) solicitando a execução de uma movimentação. A mensagem contém: posição de origem, posição de destino, SKU, Unidade de Depósito (UD), peso e/ou identificador único da OT. O WCS persiste a OT em banco com status **INTEGRADO** → **DISPONIVEL**.

2. **Execução pelo WCS** — O WCS instrui os operadores/automação a executar a movimentação. Durante a execução, o status da OT evolui: **DISPONIVEL** → **EM ANDAMENTO** → **COLETADO** / **CONCLUIDO**.

3. **TOCO enviado pelo WCS** — Ao concluir a movimentação, o WCS envia ao SAP um IDoc TOCO (Transfer Order Confirmation) confirmando que a etapa da OT foi concluída. Sem o TOCO, o SAP não sabe que a movimentação aconteceu — é o mecanismo de sincronização de estado entre os dois sistemas.

4. **CATO (cancelamento)** — Se a OT for cancelada (pela operação, pelo SAP ou por shortpicking), o WCS envia ou recebe um CATO (Cancel Transfer Order), encerrando o ciclo sem confirmação de execução.

### Status da Onda (ciclo WCS)

| Status | Significado |
|--------|-------------|
| INTEGRADO | IDoc WMTORD recebido, em processamento |
| DISPONIVEL | IDoc processado; informações salvas nas tabelas do WCS |
| EM ANDAMENTO | Onda iniciada |
| ENCERRADA | Encerramento manual de onda (operação crítica — ver RN-05) |
| FINALIZADA | Toda remessa atendida e integrada ao SAP |
| CANCELADA | Cancelamento de remessa |

### Status do Volume (ciclo WCS)

| Status | Significado |
|--------|-------------|
| DISPONIVEL | Volume criado sem vínculo com onda iniciada |
| EM ANDAMENTO | Início da onda |
| COLETADO | Finalização da coleta |
| CONCLUIDO | Desviado na rampa de destino (sorter) |
| ENCERRADO | Encerramento de onda (volume não processado) |
| FINALIZADO | Retorno enviado ao SAP |
| CANCELADO | Cancelamento da remessa |

### TORD bidirecional — usos além da separação

O IDoc WMTORD/TORD é utilizado em **múltiplos sentidos**:

| Direção | Gatilho | Finalidade |
|---------|---------|-----------|
| SAP → WCS | Reabastecimento por **capacidade** | SAP envia TORD com UD específica a movimentar para o canal de picking |
| SAP → WCS | Reabastecimento por **demanda** | WCS sinaliza necessidade de material (SKU + quantidade + shelf life); SAP localiza o palete adequado e responde com TORD de execução |
| SAP → WCS | Limpeza de canal | SAP solicita retirada de palete de posição de picking para devolução ao estoque |
| WCS → SAP | Corte de separação | WCS informa ao SAP que um item foi cortado (não coletado), gerando TORD de ajuste de saldo |

### Encerramento de Onda — IDoc TPSDLS (ZSDDAREM)

O encerramento de onda é um cenário crítico (aplicável apenas a ondas com status **EM ANDAMENTO**). Ao executar o encerramento, o WCS:

1. Interrompe imediatamente todas as coletas em execução nos postos (LEDs apagados).
2. Atualiza o status de todos os volumes ainda em coleta para **ENCERRADO**.
3. Inicia um job de 5 minutos para aguardar o desvio dos volumes já enviados ao sorter.
4. Volumes corretamente desviados durante o job recebem status **NARAMPA** e são considerados atendidos.
5. Volumes não desviados ao final do job recebem status **ENCERRADO**.
6. Ao final, o WCS envia ao SAP um IDoc **TPSDLS (ZSDDAREM)** com todos os volumes das remessas ainda não enviados, contendo:
   - Campo `<QUANT>`: quantidade atendida (pode ser zero).
   - Tag `<ZSEP_PARCIAL>`: preenchida com `"X"` para volumes enviados parcialmente.
7. O SAP interpreta a quantidade informada e realiza as tratativas para itens não atendidos (cancelamento de faturamento, reprocessamento ou retorno a estoque).

---

## Condicionais

### Gate: `in1` (tipo de integração)

#### SE `in1 = idoc` → INCLUIR capítulo completo de Integração WMS-ERP
Contexto SAP: IDocs são o canal padrão de comunicação WMS↔ERP. O texto padrão completo (WMTORD, TOCO, CATO, TPSDLS) aplica-se integralmente.

#### SE `in1 = rest` OU `in1 = dblink` OU `in1 = json_api` E `g5` contém SAP → INCLUIR versão adaptada
A integração pode usar middleware REST/DBLink para encapsular IDocs. Documentar o canal real utilizado, mantendo a semântica das mensagens (confirmação de OT, cancelamento, encerramento). Acrescentar nota: *"Embora o protocolo de transporte seja REST/DBLink, as mensagens seguem a semântica IDoc SAP — TORD, TOCO, CATO."*

#### SE `in1 = tbd` OU vazio → OMITIR capítulo; adicionar placeholder
Inserir nota: *"Integração WMS-ERP: protocolo a confirmar com o cliente. Verificar se o WMS é SAP EWM/WM e se IDocs serão utilizados."*

#### SE `in1b` preenchido (canal secundário) → ADICIONAR subseção "Canal Secundário"
Documentar o segundo canal (`{{int_tipo2}}`): finalidade, direção e mensagens trafegadas.

---

### Variante: `g5` (sistema WMS do cliente)

#### SE `g5` contém SAP EWM ou SAP WM → USAR terminologia IDoc completa
Aplicar integralmente os IDocs WMTORD, TOCO, CATO, TPSDLS/ZSDDAREM descritos no Texto Padrão.

#### SE `g5` é outro WMS (não-SAP) com integração ERP visível → ADAPTAR nomenclatura
Não usar terminologia IDoc. Substituir por:
- WMTORD/TORD → "Ordem de Movimentação" ou equivalente do WMS do cliente
- TOCO → "Confirmação de Movimentação"
- CATO → "Cancelamento de Ordem"
- TPSDLS → "Relatório de Encerramento de Onda"
Documentar os campos equivalentes conforme especificação do projeto.

#### SE `g5` não tem integração ERP (WMS sem ERP acoplado) → OMITIR este CARD
A integração WMS-ERP pressupõe um ERP (SAP ou equivalente) recebendo confirmações do WMS. Se não há ERP no escopo, omitir. Verificar com o cliente se há integração futura prevista.

---

### Fluxo de Reabastecimento SAP

#### SE projeto tem reabastecimento (`es2 = yes` ou `es3 = yes`) E `in1 = idoc` → ADICIONAR subseção "TORD de Reabastecimento"
O SAP pode disparar TORDs de reabastecimento de dois modos:
- **Por capacidade**: o SAP detecta que a posição de picking está abaixo do nível mínimo e envia TORD com a UD a movimentar.
- **Por demanda** (solicitação de necessidade): o WCS informa ao SAP que precisa de um material em determinada quantidade e shelf life; o SAP localiza o palete adequado e responde com TORD de execução.

O WCS executa a movimentação e confirma via TOCO. Ver [[reabastecimento]].

---

### Corte de Separação e Ajuste de Saldo

#### SE projeto tem shortpicking (`s1p` ou `s1c` = yes, ou picking com corte habilitado) E `in1 = idoc` → ADICIONAR subseção "TORD de Corte"
Quando um item é cortado na separação (shortpicking), o WCS gera um TORD de corte para o SAP, informando a quantidade não coletada. O SAP recebe e ajusta o saldo da OT original. Ver [[shortpicking]].

---

## Observações Livres do Kickoff
Campos relevantes: `in_endpoint` (URL/RFC do middleware), `in3` (timeout), `g5` (WMS do cliente).

O ED deve:
- **`in_endpoint`** → mencionar o endpoint/RFC na subseção de configuração técnica (ex: *"A comunicação utiliza o RFC `XXXX` configurado no SAP ALE"*).
- **`in3`** → informar o timeout configurado para envio/recepção de IDocs; se ausente, usar o padrão de mercado (30 000 ms para IDoc síncrono, assíncrono sem timeout fixo).
- **`g5` com versão específica** (ex: SAP EWM 9.5) → mencionar a versão na abertura do capítulo para contextualizar o conjunto de IDocs disponível.
- **Observação que restringe escopo** (ex: "somente TOCO, sem CATO") → SUBSTITUIR a subseção correspondente pela restrição explícita.
- **Observação que adiciona IDoc não listado** → ADICIONAR como subseção nomeada com `[OBS INTERNA]` se precisar de validação.

---

## Regras de Negócio
- **RN-01** (SAP/IDoc): o controle de estoque final é de responsabilidade do SAP/ERP; o WCS mantém apenas o estoque interno sistêmico. Divergências são reportadas ao SAP para tratativa.
- **RN-02** (TOCO): sem o TOCO, o SAP não reconhece a movimentação como concluída. O WCS deve enviar TOCO ao final de **cada etapa** da OT confirmada — não apenas ao final da OT completa.
- **RN-03** (TORD bidirecional): o WMTORD/TORD pode ser originado pelo SAP (reabastecimento, limpeza de canal) ou pelo WCS (corte de separação). O WCS deve suportar ambas as direções.
- **RN-04** (CATO): o cancelamento de OT pode ser disparado pelo SAP (cancelamento de remessa) ou pelo WCS (corte com descarte). Em ambos os casos, a OT entra em status CANCELADA e não gera TOCO.
- **RN-05** (encerramento de onda): o encerramento manual de onda só é permitido para ondas com status EM ANDAMENTO. Ondas com status CRIADA ou PREPARADA devem ser excluídas (não encerradas). Os transportes da onda excluída retornam à tela de transportes para novo vínculo ou cancelamento.
- **RN-06** (TPSDLS/ZSDDAREM): o IDoc de encerramento deve ser enviado para **todos** os volumes das remessas ainda não confirmados, incluindo os com quantidade zero (`<QUANT>=0`). Volumes parcialmente atendidos devem ser marcados com `<ZSEP_PARCIAL>=X`.
- **RN-07** (job de encerramento): o job pós-encerramento tem duração de 5 minutos para aguardar volumes em trânsito no sorter. Volumes não desviados ao final do job recebem status ENCERRADO e são incluídos no TPSDLS com `<QUANT>` igual à quantidade atendida até aquele momento.
- **RN-08** (reabastecimento por demanda): o WCS envia a solicitação de necessidade (SKU + qtd + shelf life) ao SAP antes de aguardar o TORD de execução. O WCS não deve iniciar movimentação de reabastecimento sem o TORD de resposta do SAP.
- **RN-09** (idempotência): o WCS deve ignorar IDocs duplicados (mesmo número de OT) para evitar confirmações duplicadas no SAP. Controle via chave única da OT na tabela de IDocs recebidos.
- **RN-10** (status de OT): a transição de status da OT no WCS deve seguir o ciclo documentado (INTEGRADO → DISPONIVEL → EM ANDAMENTO → COLETADO/CONCLUIDO → FINALIZADO). Transições fora de ordem devem ser rejeitadas com log de erro.

---

## Insights e Padrões

### Padrões identificados
- **BRF Salvador** é o único projeto do Top 10 com evidência direta e detalhada do ciclo IDoc WMS-ERP. O padrão documentado (WMTORD, TOCO, CATO, TPSDLS) é o núcleo consolidado.
- O IDoc TORD é **bidirecional**: tanto o SAP envia TORDs ao WCS (reabastecimento, limpeza de canal) quanto o WCS envia TORDs ao SAP (corte). Essa bidirecionalidade é o ponto de maior complexidade da integração.
- O TOCO é o mecanismo central de sincronização de estado. Falha no envio do TOCO é a causa mais comum de divergência entre SAP e WCS em operações SAP EWM.
- O encerramento de onda com TPSDLS/ZSDDAREM e `<ZSEP_PARCIAL>` é um padrão BRF-específico mas indica a abordagem geral para tratamento de volumes parcialmente atendidos em qualquer projeto SAP.

### Variações significativas
- **Projetos não-SAP**: usam REST/DBLink com semântica equivalente mas sem IDocs formais. A nomenclatura muda, mas o ciclo (ordem → execução → confirmação → cancelamento) é mantido.
- **SAP EWM vs SAP WM**: SAP EWM tem maior granularidade de tarefas (Task Units) dentro de uma OT; SAP WM usa OTs mais simples. O conjunto de IDocs pode variar — confirmar com o cliente qual versão está em uso.
- **Middleware SAP**: alguns projetos usam RFC direto (síncrono), outros usam ALE com filas (assíncrono). O comportamento de timeout e retry difere significativamente entre os dois modos.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **versão do SAP** (EWM 9.x, EWM S/4HANA, WM clássico) — inferido do texto livre de `g5`. Candidato a campo select ou texto guiado.
- Não há campo para **modo de comunicação IDoc** (RFC síncrono vs ALE assíncrono) — impacta timeout e retry. Candidato a select em seção Integração.
- Não há campo para **número de IDocs por tipo** esperados por hora — relevante para sizing do middleware. Candidato a texto livre.
- O campo `in3` (timeout) é único e genérico; projetos SAP podem ter timeouts distintos por tipo de IDoc. Candidato a expansão.

### Inferências
- **Inferência:** quando `g5` contém SAP EWM/WM e `in1 = idoc`, o projeto quase certamente usa TORD + TOCO como par mínimo de integração. CATO e TPSDLS aparecem quando há cancelamento de remessa ou encerramento de onda, respectivamente. · **Confiabilidade:** alta · **Base:** BRF Salvador (Top 10), padrão SAP EWM documentado.
- **Inferência:** projetos com `in1 = rest` e `g5` SAP provavelmente encapsulam IDocs via middleware REST (ex: SAP PI/PO ou BTP Integration Suite). A semântica IDoc é preservada, mas o WCS vê apenas JSON/XML. · **Confiabilidade:** média · **Base:** ausência de evidência direta no corpus — inferência por padrão de mercado.
- **Inferência:** o TORD de reabastecimento por demanda (WCS solicita → SAP responde) pressupõe que o WCS tenha visibilidade do catálogo de paletes do SAP (shelf life, lote). Verificar se o WCS recebe snapshot de estoque SAP via integração separada. · **Confiabilidade:** média · **Base:** BRF Salvador menciona o fluxo mas não detalha a integração de consulta de estoque.

---

## Dependências (grafo)
- **Entra depois de:** [[integracao-pedidos]] (remessa/onda chega antes das OTs de reabastecimento) · [[order-start]] (OT criada quando volume é iniciado)
- **Sai para:** [[reabastecimento]] (TORD SAP→WCS aciona reabastecimento) · [[shortpicking]] (TORD WCS→SAP reporta corte) · [[sorter]] (encerramento de onda dispara TPSDLS) · [[cancelamento-pedidos]] (CATO encerra OT sem confirmação)
- **Consulta/alimenta:** [[integracao-pedidos]] (remessas e ondas, status FINALIZADO) · [[reabastecimento]] (TORD por capacidade/demanda) · [[shortpicking]] (corte de separação → TORD de ajuste)
- **Variante paralela:** [[integracao-wcs-wms]] (estoque WCS→WMS, confirmação de coleta — canal diferente, mesmo projeto SAP)
