# Cancelamento de Pedidos — Knowledge Card

> CARD abrangente do tópico **Cancelamento de Pedidos**. Fonte: Top 10 complementares (FDBR, BP ×3, Beleza, Beta-Esteio, Guatemala, NavePark, BRF/Esperança, Gemini/BCP). O ED usa este arquivo para gerar o capítulo de Cancelamento do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`cancelamento` `cancel-pedido` `estorno` `devolucao-estoque` `pedido-em-aberto`
`cancelamento-ot` `cato` `wmcato` `wmtoco` `retorno-picking` `pedido-cancelado`
`coleta-parcial` `volume-cancelado` `analise-localizacao` `status-cancelada`
`cancelamento-granular` `cancelamento-manual` `senha-supervisor` `pop-up-cancelado`
`devolucao-volume` `integracao-cancelamento` `rejeito-cancelamento`

## Metadados
- **Bloco:** separacao
- **Gate:** sem gate dedicado — ocorre em todos os projetos
- **Subtópicos com CARD próprio:** nenhum (fluxo transversal)
- **Depende de:** [[order-start]] (estágio do pedido no momento do cancelamento), [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (origem do volume em andamento)
- **Influencia:** [[conferencia]] (volumes em andamento desviados para conferência), [[integracao-pedidos]] (comunicação de cancelamento/estorno ao WMS)
- **Cruza com:** [[integracao-pedidos]] (CATO/IDOC/tabela compartilhada), [[sorter]] (exclusão de volume esperado na rampa), [[shortpicking]] (coletas parciais)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{cancel_integracao}}` | `in1` | select | `rest`=REST · `idoc`=IDoc · `dblink`=DBLink · `excel`=Excel · `json_api`=JSON via API · `json_pasta`=JSON em pasta · `tbd` |
| `{{cancel_supervisor}}` | *(inferido do projeto)* | texto livre | se cancelamento manual exige autenticação de supervisor |
| `{{cancel_localizacao_analise}}` | *(texto livre / obs kickoff)* | texto livre | nome da localização de análise para coletas parciais (ex: "ANÁLISE", "RETORNO AO PICKING") |

> Não há campos de gate exclusivos para cancelamento no kickoff atual. O comportamento é inferido pelo tipo de integração (`in1`/`in1b`) e pelas observações livres do projeto. Candidatos a campo futuro: ver **Lacunas** em Insights e Padrões.

---

## Texto Padrão
*(Presente em praticamente todos os projetos. O ED parte daqui e aplica as condicionais conforme o estágio de cancelamento e o tipo de integração.)*

O cancelamento de pedidos no WCS trata da interrupção de um pedido que já foi iniciado (ou está na fila de início), garantindo a consistência do estoque físico, o descarte seguro dos volumes em andamento e a comunicação ao WMS/ERP do novo status. O WCS **não deleta** o pedido — ele atualiza o status internamente para "Cancelado/Cancelada" e dispara as ações específicas de cada estágio.

**Fluxo operacional padrão — por estágio do cancelamento:**

1. **Antes do Order Start (pedido na fila de pendentes).**
   O cancelamento é recebido pelo WCS (via integração do WMS ou ação manual do supervisor). O pedido é removido da fila de pendentes sem nenhuma ação sobre produtos ou caixas. Nenhum operador é impactado. O WCS atualiza o status internamente e registra o evento.

2. **Após o Order Start — FlowRack/PBL.**
   A coleta em andamento é interrompida imediatamente. A caixa vinculada ao pedido não segue para as próximas estações; o WCS direciona o volume ao **rejeito** ou à **conferência** (conforme parametrização do projeto). O operador no coletor/PDV recebe pop-up informando "Pedido Cancelado".

3. **Após o Order Start — Picking Cart.**
   Os volumes em separação no cart continuam sendo coletados até o fim da operação (não há interrupção abrupta da coleta). Ao término, os volumes são direcionados à **conferência** para tratativa. O WCS registra o cancelamento e aguarda a saída do cart para executar o desvio.

4. **Tratativa de coletas parciais.**
   Quando parte dos itens do pedido já foi coletada no momento do cancelamento, os produtos fisicamente coletados são movidos para a localização `{{cancel_localizacao_analise}}` (ex: "ANÁLISE"). O WCS bloqueia novas coletas para aquele pedido. O restante dos itens (ainda não coletados) é desconsiderado sem ação física.

5. **Devolução de estoque (volumes cancelados).**
   O WCS identifica o volume cancelado e cria automaticamente uma **tarefa de devolução** por volume. O operador (coletor) lê o volume → o endereço de destino → o item, devolvendo fisicamente o produto à posição de picking (ou pulmão, conforme o projeto). O WCS **não devolve ao Transfer** — apenas a posições de picking ou pulmão. Ao concluir todas as devoluções, o WCS envia integração ao WMS confirmando que os itens foram restituídos ao estoque.

6. **Comunicação ao WMS/ERP.**
   O WCS informa o cancelamento via integração (ver tipo em `{{cancel_integracao}}`). A comunicação inclui o identificador do pedido/OT e o novo status. Em cenários IDoc (SAP), o WCS recebe o IDOC de estorno (CATO) e responde com confirmação. Em cenários de tabela compartilhada, o WMS sinaliza o campo de cancelamento e o WCS descarta automaticamente. Ver [[integracao-pedidos]].

7. **Registro e rastreabilidade.**
   O WCS emite **Relatório de Pedidos Cancelados** com os volumes afetados, operadores envolvidos, estágio no momento do cancelamento e destino dos itens. Supervisores têm acesso à tela de gestão de volumes para acompanhamento em tempo real.

---

## Condicionais

### Integração de Cancelamento — derivado de `in1` / tipo de projeto

#### SE integração é `idoc` (SAP/IDoc — CATO) → ADICIONA subseção "Cancelamento via IDOC (CATO)"
O WMS/SAP envia ao WCS um **IDOC de estorno** (mensagem CATO) referenciando a OT pelo identificador `TANUM`. O WCS processa o IDOC e atualiza o status da OT para "Cancelada". **Restrição:** o WCS só cancela OTs em status **Pendente**; OTs já confirmadas (em andamento) retornam erro ao WMS, que deve tratar o estorno no próprio SAP. Em cenários BCP (picking via RF no WMS), a retirada massiva de ordens do WCS pode exigir mensagens complementares (`WMCATO`/`WMTOCO` — avaliar com a operação).

#### SE integração é `dblink` (tabela compartilhada — ex: Esperança) → ADICIONA subseção "Cancelamento via Tabela Compartilhada"
O WMS atualiza um campo específico na tabela compartilhada sinalizando cancelamento. O WCS monitora esse campo e descarta automaticamente o pedido, mesmo que já esteja presente na `ORDEMSERVICO`. Não há mensagem explícita de integração — o cancelamento é por polling/trigger na tabela. O tratamento varia por status do volume (ver condicionais por estágio abaixo).

#### SE integração é `rest` ou `json_api` → ADICIONA nota em "Comunicação ao WMS/ERP"
O cancelamento é enviado por chamada REST/JSON ao endpoint configurado. O WCS aguarda confirmação (HTTP 200/201) antes de dar o pedido como cancelado internamente. Timeout conforme `in3`.

### Estágio do Cancelamento — derivado de status do volume (Esperança / padrão avançado)

#### SE o projeto documenta cancelamento granular por estágio → ADICIONA subseção "Tratativa por Status do Volume"
Cada status do volume tem uma tratativa distinta:

| Status do volume | Tratativa no WCS |
|---|---|
| **Integrado** (aguardando fila) | Remove da fila; nenhuma ação física |
| **Disponível** (OS não iniciado) | Marca cancelado; não inicia OS |
| **Em andamento** (OS iniciado) | Interrompe coleta; direciona ao rejeito/conferência |
| **Indução** (na esteira/sorter) | Marca para rejeito; volume é desviado na próxima leitura |
| **Na rampa** (aguardando no sorter) | Exclui da saída esperada; volume vai para rampa de rejeito |
| **Alocado** (pallet montado) | Cancelamento apenas no WMS; WCS não atua |

> Após o estágio **Alocado**, o WCS não tem mais controle sobre o volume — o cancelamento deve ser tratado exclusivamente no WMS/ERP.

### Cancelamento Manual com Supervisor — inferido do projeto

#### SE o cancelamento manual (Via Pedido) exige supervisor → ADICIONA em "Fluxo operacional padrão"
O cancelamento acionado manualmente pela tela do WCS exige **autenticação de supervisor** (senha de autorização). Sem a credencial válida, a operação é bloqueada. `{{cancel_supervisor}}` identifica quem autoriza (gestor de turno, supervisora de expedição etc.).

### Cancelamento Granular de Volume — NavePark e equivalentes

#### SE o projeto permite cancelamento de volumes específicos (sem cancelar o pedido todo) → ADICIONA subseção "Cancelamento Granular de Volume"
A tela de supervisão permite cancelar **volumes individuais** de um pedido sem cancelar os demais (ex: erro de digitação em quantidade — 350 → 35). O volume cancelado assume status **"RETORNO AO PICKING"** (estorno interno); o operador devolve fisicamente o produto à prateleira. **Não há NF de devolução** nesse fluxo — é um estorno interno ao WCS. A tela do sorter (ex: Barbecue/Cougar) também permite excluir volumes esperados nas saídas (avaria, leitura inválida, peso fora do padrão), **sem integração ao SAP/WMS**.

### Pedido em Andamento no Picking Cart — tratativa especial

#### SE o projeto tem Picking Cart (`ct1 = yes`) → ADICIONA em "Após o Order Start — Picking Cart"
Ao contrário do FlowRack (interrupção imediata), o Picking Cart **não interrompe a coleta em andamento**. O operador termina o ciclo do cart normalmente; ao apresentar o cart para finalização, o WCS identifica os volumes de pedidos cancelados e os desvia automaticamente para a conferência. O operador na conferência realiza a devolução física dos itens.

### Projetos sem integração de cancelamento

#### SE não há integração de cancelamento com WMS → ADICIONA nota em "Comunicação ao WMS/ERP"
O cancelamento no WCS é **interno**: remove o pedido da fila e atualiza o status, mas **não comunica** a outros sistemas. O ajuste de estoque no WMS/ERP deve ser feito manualmente. Exibir pop-up "Pedido Cancelado" ao operador para ciência. *(Padrão observado em FDBR, BP, Beleza, Beta-Esteio, Guatemala — sem integração bidirecional de cancelamento.)*

---

## Observações Livres do Kickoff
O cancelamento de pedidos não tem seção dedicada no kickoff atual. O ED deve:
- **`in1` / `in1b`** → determinar o mecanismo de integração do cancelamento (IDoc CATO, tabela compartilhada, REST, ou sem integração).
- **Observação que menciona "cancelamento"** em texto livre → aplicar a condicional de estágio correspondente (pré-OS, pós-OS FlowRack, pós-OS Cart, coleta parcial, volume granular).
- **Observação que menciona "supervisor" ou "senha"** → ativar a condicional de autenticação e preencher `{{cancel_supervisor}}`.
- **Observação que menciona localização "ANÁLISE" ou "RETORNO AO PICKING"** → preencher `{{cancel_localizacao_analise}}` com o nome exato da localização usada no projeto.
- **Projetos SAP com IDoc** → verificar com o time se WMCATO/WMTOCO é necessário para cenários BCP antes de omitir a nota.

---

## Regras de Negócio
- **RN-01** (todos): o WCS **não deleta** o registro do pedido — marca como "Cancelado/Cancelada" para manter rastreabilidade e histórico.
- **RN-02** (todos): pedido cancelado antes do Order Start não gera nenhuma ação física; apenas a fila de pendentes é atualizada.
- **RN-03** (todos): pedido cancelado após Order Start no FlowRack/PBL tem a coleta interrompida imediatamente; a caixa é desviada ao rejeito ou à conferência.
- **RN-04** (Picking Cart): a coleta no cart **não é interrompida** no momento do cancelamento; o desvio ocorre ao final do ciclo, na apresentação do cart para finalização.
- **RN-05** (coletas parciais): itens fisicamente coletados vão para `{{cancel_localizacao_analise}}`; nenhuma nova coleta é permitida para aquele pedido.
- **RN-06** (devolução de estoque): o WCS cria tarefas de devolução por volume; devolve apenas a posições de picking ou pulmão — **nunca** ao Transfer.
- **RN-07** (IDoc/SAP): o WCS cancela via CATO apenas OTs em status **Pendente**; OTs confirmadas retornam erro e o estorno é responsabilidade do WMS/SAP.
- **RN-08** (tabela compartilhada): o WCS descarta automaticamente pedidos sinalizados na tabela, mesmo que já presentes na `ORDEMSERVICO`; a monitoração é contínua.
- **RN-09** (cancelamento manual): quando configurado com autenticação, o cancelamento via tela de gestão exige senha de supervisor; sem credencial válida a operação é bloqueada.
- **RN-10** (cancelamento granular): cancelar um volume individual não cancela os demais volumes do mesmo pedido; o estorno é interno ao WCS e não gera NF de devolução.
- **RN-11** (sorter): volumes cancelados que já estão em rampa são excluídos da saída esperada e desviados para rampa de rejeito; a exclusão na tela do sorter não integra ao WMS/SAP.
- **RN-12** (estágio Alocado): após a alocação em pallet, o WCS não atua no cancelamento — responsabilidade exclusiva do WMS/ERP.

---

## Insights e Padrões

### Padrões identificados
- O **cancelamento pré-Order Start** é universal e idêntico em todos os projetos analisados: remove da fila, sem ação física. É o caminho de menor risco.
- O **desvio para conferência** como destino padrão de volumes cancelados em andamento aparece em FDBR, BP, Beleza, Beta-Esteio e Guatemala — é o núcleo padrão mais recorrente.
- **Sem integração bidirecional de cancelamento** é a situação majoritária nos projetos fracionados analisados; o WCS age de forma autônoma e o WMS é atualizado manualmente ou por outro mecanismo.

### Variações significativas
- **BRF/Esperança** tem o modelo mais granular: tabela de status por estágio do volume (Integrado → Disponível → Em andamento → Indução → Na rampa → Alocado), com tratativa específica para cada um — é o padrão de referência para projetos de alta complexidade.
- **NavePark** introduz cancelamento granular de volume (sem cancelar o pedido) e exclusão de volumes no sorter — amplia o controle operacional além do cancelamento total.
- **Gemini/BCP** evidencia a distinção entre "deletar" e "marcar cancelada": deletar falha quando a ordem está em processo; o padrão correto é sempre marcar como cancelada e deixar o fluxo terminar.
- **SAP/IDoc** (BRF) é o único cenário com protocolo formal (CATO/WMCATO/WMTOCO) — projetos sem SAP tratam o cancelamento de forma mais livre.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **"cancelamento exige supervisor"** — hoje inferido de texto livre. Candidato a checkbox.
- Não há campo para **"localização de análise de coletas parciais"** — o nome da localização varia por projeto. Candidato a campo texto.
- Não há campo para **"integração bidirecional de cancelamento"** (o campo `in1` é genérico; não diferencia se o mecanismo cobre cancelamentos). Candidato a checkbox/select dedicado.
- O **cancelamento por estágio** (modelo Esperança) não tem representação explícita no kickoff — hoje é capturado apenas em texto livre ou inferido por tipo de projeto.
- **Cancelamento granular de volume vs. cancelamento total de pedido** não tem distinção no kickoff. Candidato a checkbox.

### Inferências
- **Inferência:** projetos com Picking Cart (`ct1 = yes`) quase sempre têm tratativa diferenciada para cancelamento (coleta não interrompida + desvio na conferência). · **Confiabilidade:** alta · **Base:** FDBR, BP, Guatemala.
- **Inferência:** projetos com IDoc (`in1 = idoc`) têm protocolo CATO formal e restrição de cancelamento apenas para OTs pendentes. · **Confiabilidade:** alta · **Base:** BRF.
- **Inferência:** quando o projeto menciona "localização ANÁLISE" em texto livre, há coletas parciais no escopo do cancelamento. · **Confiabilidade:** média · **Base:** BP, Beleza.
- **Inferência:** projetos sem integração de cancelamento tendem a ter cancelamento manual com supervisor, para compensar a ausência de controle sistêmico. · **Confiabilidade:** média · **Base:** ausência de integração nos projetos fracionados menores.

---

## Dependências (grafo)
- **Entra depois de:** [[order-start]] (pedido iniciado) · [[picking-pbl]] / [[picking-fullcase]] / [[picking-cart]] (coleta em andamento)
- **Sai para:** [[conferencia]] (volumes em andamento desviados) · [[integracao-pedidos]] (comunicação de cancelamento/estorno ao WMS)
- **Consulta/alimenta:** [[integracao-pedidos]] (CATO/tabela compartilhada/REST), [[sorter]] (exclusão de volume esperado na rampa), [[shortpicking]] (coletas parciais e itens não coletados)
- **Paralelo / contingência:** [[conferencia]] (destino padrão de volumes cancelados em andamento)
