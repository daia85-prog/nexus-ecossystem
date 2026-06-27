# recebimento-armazenagem.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 11.1. Processo de Recebimento no Transfer no WCS  
**Score:** — (semantico) | **ID:** 31a594f4af138ee9

O WCS disponibiliza uma tela chamada "Recebimento Transfer" para o operador realizar a
confirmação dos palets alocados no Transfer. Ao acessar essa tela, o operador verá um campo
de input para realizar a leitura do RG do pallet e uma lista de todos os pallets que o WMS
enviou no processo de alocação descrito anteriormente.
O fluxo do processo é o seguinte:
O operador acessa a tela "Recebimento Transfer" no WCS e seleciona o pallet na lista
exibida.
O operador realiza a leitura do RG do pallet utilizando o coletor Android.
Em seguida, o operador realiza a leitura do endereço no Transfer, que corresponde
à posição onde o pallet será alocado dentro do sistema.
Após a confirmação da alocação do endereço no Transfer, o sistema WCS enviará
a integração 5.5 Confirmação de Recebimento no Transfer para o WMS.
Com a confirmação enviada, a tarefa é automaticamente fechada no WMS, e o processo
de recepção do pallet é finalizado.
O WCS não deve permitir a alocação de mais de um pallet no mesmo endereço de
transfer.
O endereçamento do Transfer permite que o Velox coordene de forma mais precisa as
tarefas de reabastecimento, fornecendo uma referência exata do local onde os palets estão
alocados. Isso facilita a movimentação eficiente dos produtos nas fases subsequentes e assegura
a rastreabilidade durante o processo de separação.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Processo de Recebimento no Transfer no WCS  
**Score:** — (semantico) | **ID:** 8cc67283e1d5163a

O WCS disponibiliza uma tela chamada "Recebimento Transfer" para o operador realizar a confirmação dos palets alocados no Transfer. Ao acessar essa tela, o operador verá um campo de input para realizar a leitura do RG do pallet e uma lista de todos os pallets que o WMS enviou no processo de alocação descrito anteriormente.
O fluxo do processo é o seguinte:
O operador acessa a tela "Recebimento Transfer" no WCS.
O operador realiza a leitura do RG do pallet utilizando o coletor Android do cliente.
Em seguida, o operador realiza a leitura do endereço no Transfer, que corresponde à posição onde o pallet será alocado dentro do sistema.
Após a confirmação da alocação do endereço no Transfer, o sistema WCS enviará a integração 5.5 Confirmação de Recebimento no Transfer para o WMS.
Com a confirmação enviada, a missão é automaticamente fechada no WMS, e o processo de recepção do pallet é finalizado.
O WCS não deve permitir a alocação de mais de um pallet no mesmo endereço de transfer.
O endereçamento do Transfer permite que o Velox coordene de forma mais precisa as tarefas de reabastecimento, fornecendo uma referência exata do local onde os palets estão alocados. Isso facilita a movimentação eficiente dos produtos nas fases subsequentes e assegura a rastreabilidade durante o processo de separação. Porém o WCS não faz validação de endereço, possibilitando a criação de novos endereços ao realizar a leitura no processo.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 2. Especificação  
**Score:** — (semantico) | **ID:** 6b754b9cebe62c55

Este documento descreve os requisitos e diretrizes do sistema WCS Velox no contexto da
operação logística da MBRF no Centro de Distribuição de Salvador – BA, com foco na automação
e no controle dos fluxos intralogísticos.
A solução contempla os processos de recebimento de materiais, armazenagem, movimentação
interna, separação de pedidos (picking), controle operacional, gerenciamento de estoque voltado
à coleta e classificação de volumes para expedição (sorter).
Adicionalmente, o WCS Velox será responsável pela orquestração e integração entre o WMS da
MBRF e os sistemas automatizados, incluindo transelevadores e sorter do tipo crossbelt,
garantindo a execução eficiente dos fluxos operacionais, rastreabilidade das operações e
aderência às regras de negócio definidas.
Documento esse que rege todas as funcionalidades que serão entregues ao cliente, sendo
imutável todas as funcionalidades do WCS e processo operacional após aprovação.
O conteúdo a seguir reflete informações alinhadas e aprovadas pelo time MBRF, com total ciência
e concordância do cliente.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** First In, First Out - Política em que os primeiros itens que entram são os primeiros a  
**Score:** — (semantico) | **ID:** 5abed8a263f9e5d2

sair, priorizando a ordem de entrada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Palete  
**Score:** — (semantico) | **ID:** 8e7b7b41d4c7ccda

Unidade de movimentação e armazenamento composta por múltiplas caixas empilhadas
sobre uma estrutura paletizada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Armazém Automático – Área do centro de distribuição equipada com transelevadores,  
**Score:** — (semantico) | **ID:** 9bb905f4ebc87b7f

posições de coleta, porta paletes e transportadores automatizados. AA ≠ Transelevador

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Armazém Convencional – Área do centro de distribuição operada manualmente  
**Score:** — (semantico) | **ID:** 01f39c350fe9c2e4

(empilhadeiras, operadores) sem automação de transelevadores.
Responsável:
Invent
Desenvolvimento de
documentação (ES)
Responsável: Invent
Apresentação de ES
ao cliente para
validação de toda a
documentação.
Responsável: WCS
Invent
Envio do ES para
aprovação
DATA: 06/04/2026
Responsável: Cliente
Cliente aprova a proposta para dar
seguimento no processo seguindo
para o desenvolvimento.
DATA:
Criação
Apresentação
Envio
Aprovação da ES

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Buffer  
**Score:** — (semantico) | **ID:** 739c148f1b083b3f

Área de armazenamento temporário localizada no 4.º e 5.º nível do AA, com
quantidade de posições parametrizável no sistema. Funciona como reserva para absorver
picos de demanda e otimizar o fluxo de reabastecimento.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Drive – in  
**Score:** — (semantico) | **ID:** adecb0a3be7486c6

Posições fixas de separação com até 3 vagas em profundidade para armazenamento de
paletes do mesmo SKU, respeitando a sequência física de acesso para abastecimento e
retirada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Transelevador  
**Score:** — (semantico) | **ID:** 28e66552ea4e2fca

Equipamento automatizado de movimentação vertical e horizontal que opera dentro dos
corredores do armazém automático (AA). Essa plataforma é equipada com garfos telescópicos ou
dispositivos de extração que permitem inserir e retirar paletes nas posições de armazenagem em
profundidade simples ou múltipla. O transelevador é controlado pelo PLC e opera de forma
totalmente automatizada, recebendo comandos do WCS para executar tarefas de armazenagem
e retirada. O equipamento atende cinco níveis de armazenagem: os três primeiros dedicados a
canais de picking com até três paletes de profundidade, e os dois últimos utilizados como buffer
de estocagem temporária.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** OBS: O Armazém AA refere-se ao armazém completo da operação, englobando todas as áreas  
**Score:** — (semantico) | **ID:** e0fb82fdbfc78f04

e estruturas envolvidas, como posições de coleta, sistema de transelevador e estruturas porta-
paletes. Portanto, não deve ser interpretado como sendo exclusivamente o transelevador, mas
sim todo o conjunto operacional do armazém que ele está localizado.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 5. As posições atendidas pelo transelevador devem estar previamente cadastradas no  
**Score:** — (semantico) | **ID:** 8872779264e170a4

WCS como posições do tipo Picking ou Buffer.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Transição  
**Score:** — (semantico) | **ID:** 2914add1a2fce129

Pendente
OT recebida/criada, aguardando
execução
Estado inicial após recebimento
do TORD
Stage
Palete disponível na área de stage
(Paredão)
TOCO enviado ao WCS
Movimento
Movimentação em execução pelo
transelevador
Transelevador assumiu o palete
Cancelada
OT cancelada
CATO recebido ou enviado
Finalizada
Movimentação/Atualização de saldo
finalizada com sucesso
TOCO enviado ao SAP

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Regra de TORD confirmado: Quando o IDOC TORD é recebido com status de confirmado, o  
**Score:** — (semantico) | **ID:** 85614a6c66b60224

WCS considera a movimentação como já concluída. Nesse caso, não é necessário o recebimento
ou envio de TOCO (a confirmação já está implícita no próprio TORD) e não é possível realizar um
CATO (a OT não pode ser estornada pois já foi efetivada).

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 4. Atualiza o status da necessidade para refletir que um novo palete foi vinculado.  
**Score:** — (semantico) | **ID:** e3e8a862f4111dd5

A partir desse ponto, o fluxo segue normalmente conforme o tipo de movimentação
(transelevador ou convencional), como se fosse a primeira tentativa.
NOTA: O controle das OTs serão realizados por necessidade seja necessidade gerada pelo SAP
(reabastecimento por capacidade) ou necessidade gerada pelo Velox (reabastecimento por
demanda), para ambos os casos o WCS vai aguarda um ZWMTOCO por necessidade e essa
necessidade pode conter um ou mais identificadores únicos e através desses identificadores o
WCS vai confirmar a OT mais nova para a necessidade, mesmo que exista mais de uma OT com
a mesma UD o WCS sempre validará a OT mais recente em relação a necessidade (IDs)

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 9. Regra de Avaliações e Movimentações de paletes  
**Score:** — (semantico) | **ID:** 81c5417d5b737e90

As movimentações de paletes por parte do WCS ocorrem em 2 equipamentos, BK25 e
transelevador [Equipamentos dos processos automatizados] essas movimentações assim como
as regras e avaliações que ocorrem durante essas movimentações são premissas
independentemente do tipo de OT [Ordem de transporte (OT)] ou reabastecimento
[Reabastecimento], dessa forma o processo movimentações realizadas de forma automática
seguem uma sequência de regras e avaliações que determinam os destinos do palete que está
sendo movimentado.
Para o correto funcionamento do processo de movimentação de paletes existe a colaboração
entre os sistemas WCS e PLC, onde através da troca de telegramas entre eles ocorre as tomadas
de decisões que resultam nas movimentações dos palete.
Status de Movimentações:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** MOTIVO  
**Score:** — (semantico) | **ID:** d0b51a146e67c0b5

PENDENTE
TOCO recebido para posições de destinos automatizadas
INDUZIDA
Aprovado no BK25
REJEITADA
Rejeitada no BK25
AGUARDANDO
Palete na posição berço de entrada aguardando transelevador
COLETA
Palete em movimentação de PICK no transelevador
DEPOSITO
Palete em movimentação de DROP no transelevador
ERRO
Erro durante a movimentação do palete
ANÁLISE
Após o erro o transelevador retornou sem palete nele
FINALIZADA
Recebimento de END do DROP do transelevador

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 9.1. BK25  
**Score:** — (semantico) | **ID:** 9b480d1d19042c42

Para indicar qual palete deve ser induzido no portal de entrada do BK25 é necessária uma
orientação operacional que segue a ordenação das OTs como referência.
Dessa forma no WCS Velox haverá um monitor (Dashboard) informado os paletes que devem ser
induzidos no BK25.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 9.2. Transelevador  
**Score:** — (semantico) | **ID:** 9affbc7c1055fb8b

No transelevador temos 2 possibilidades de posições de origem BK25 e Buffer.
Após a confirmação da chegada do palete ao berço de entrada ou a movimentação prioritária no
momento é uma movimentação de origem no buffer o WCS disponibiliza a tarefa na lista de
movimentações ao transelevador.
O gerenciamento dessa lista e feito de acordo com a prioridade da movimentação (OT),
considerando que paletes aguardados em uma onda ativa devem sempre receber prioridade
máxima. A ordenação de execução dessas movimentações segue esse critério de prioridade e
como critério de desempate vamos avaliar a data de inicialização da onda para casos de
movimentações por necessidade e proximidade, ou seja, em caso de empate de prioridade e data
e hora de indico da onda, o sistema vai avaliar o plano cartesiano e identificar a posição mais
próxima para realizar a movimentação.
Após a seleção de palete que será movimentado o WCS envia o comando de movimentação para
retirada do palete ao PLC, que por sua vez faz a verificação se situação da máquina
(transelevador) essas situações gerenciam o momento que a máquina se encontra e pode
retornar uma resposta positiva que vai executar o movimento, como pode responder uma
resposta de erro indicando o motivo do não cumprimento da ordem.
Os motivos de não atendimento são:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** NOTA: Todos os erros de movimentações serão registrados no relatório de log de erros do  
**Score:** — (semantico) | **ID:** 511b5d630d609075

transelevador.
Como contingência, haverá na tela de ordens de transportes a funcionalidade de confirmação de
OT manual, ao selecionar a opção o WCS solicita usuário e senha. Por meio dessa interface, será
possível enviar manualmente um TOCO para confirmar uma movimentação virtual que não foi
efetivamente realizada fisicamente. Essa funcionalidade será utilizada em cenários onde o
movimento não puder ser concluído e a operação optar por tratar o problema internamente,
evitando a permanência de OTs pendentes no sistema ou em casos de falha de equipamento
onde o palete foi depositado na posição de destino, mas não houve a confirmação da automação
(PLC) porém o saldo na posição não será considerado pelo WCS sendo necessário o ajuste pelo
SAP via TORD para incorporar o saldo (essa informação deve ser indicada na tela de ordens de
transporte no momento da confirmação manual).
Após a liberação do equipamento o PLC envia uma informação de status ao WCS que informara
a situação atual do equipamento, informando se o palete ainda está nele ou não, para os casos
onde o palete estiver no transelevador o WCS vai solicitar a última movimentação novamente e
o status da movimentação para COLETA indicando que o palete está no transelevador em
atividade, já para os casos onde o status do PLC vier sem o palete na máquina o status da
movimentação desse transelevador é atualizado para ANALISE e o WCS escolhe outra
movimentação para o transelevador executar.
Para o cenário positivo sem erros o PLC informa ao WCS que irá realizar a movimentação do
palete e o status da movimentação é alterado para COLETA.
Após a conclusão do movimento de retirada do palete o PLC envia a confirmação de conclusão
da movimentação de retirada do palete na posição de origem e com isso o WCS envia a tarefa
de deposito do palete para posição de destino alterando o status da movimentação para

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Buffer para Canal de Picking dinâmico  
**Score:** — (semantico) | **ID:** 4e1db6312d1159ca

Movimentação de um palete saindo de uma posição de buffer (AA) para uma posição de
picking automatizada, onde ao receber o TORD vindo do SAP o WCS cria uma movimentação no
transelevador para retirar o palete da posição de origem.
Após a execução de retirada do palete na posição de origem o WCS envia o comando de
depósito de palete na posição de destino e após a confirmação de deposito o WCS Velox envia
o TOCO de confirmação ao SAP. [Transelevador]
Para os casos de cancelamento ou estorno de OT o IDOC CATO será disparado do SAP ao WCS
que por sua vez inicia os processos de validação de integração e em caso de sucesso o WCS
retornara um CATO de confirmação de estorno ao SAP e elimina da fila de execução a
movimentação do palete.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Estoque  
**Score:** — (semantico) | **ID:** 72cfdfaca9a7ec3a

Após as movimentações e confirmações de OTs o WCS tem disponível para o seu gerenciamento
os paletes com seus lotes e saldos disponíveis.
Para ter controle e visibilidade o Velox apresentara uma tela com as informações de estoque,
posição, sku, lote, quantidade de caixas, peso, percentual de shelf, palete (UD), sequência,
bloqueio de posição, quantidade reservada, quantidade prevista, data de fabricação, data de
vencimento, tipo de posição, temperatura, tipo de deposito e ativo.
Podem ocorrer necessidades de bloqueio de posições por vario motivos para isso temos o IDOC
de bloqueio de saldo em estoque, que quando recebido pelo WCS faz o bloqueio de toda posição
de coleta.
Tanto bloqueio como o desbloqueio são realizados através do IDOC TORD com uma diferença
nos campos a serem avaliados, nesse cenário não é feita avaliação de posições ou de produtos e
seus saldos, uma vez identificado que a integração se trata de um bloqueio de posição o WCS
realiza o bloqueio da posição, porém as tarefas de coleta já geradas serão realizadas
normalmente.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 2 — Registro e enfileiramento: O WCS registra a ordem de limpeza e a insere na fila  
**Score:** — (semantico) | **ID:** 93efe1ad8cdcd5d4

do transelevador com a prioridade correspondente.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 3 — Execução pelo transelevador: O transelevador localiza a posição de origem no  
**Score:** — (semantico) | **ID:** f1a6e9f2b394e21b

seu mapa cartesiano [Transelevador], retira o palete e o direciona para o canal de saída de
paletes. A partir do momento em que o palete chega ao canal de saída [Canal de saída], a
responsabilidade do WCS se encerra, o WCS não controla nem rastreia o destino do palete após
a saída.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 1 — Recebimento do TORD: O SAP envia ao WCS um IDOC do tipo WMTORD  
**Score:** — (semantico) | **ID:** 4412cd209d132808

solicitando o esvaziamento do canal de picking, com tipo de depósito de destino
correspondente ao parâmetro do tipo de depósito cadastrado no WCS para a funcionalidade de
zerar canal.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** NOTA: Para os casos de recebimento de remessa onde não exista o cadastro de produto do ou  
**Score:** — (semantico) | **ID:** e70d8bbdc66a6cb2

dos materiais da remessa o WCS vai criar um produto com as informações de sku, descrição e
com categoria de peso pesado, dessa forma é possível dar seguimento ao processo de coleta,
porém não dará vazão ao processo de sorteamento, pois pela falta de tipo de peso o volume será
rejeitado.
Após o processamento das informações da remessa o WCS disponibilizará na tela volumes
todos os volumes referentes a remessa, dessa mesma forma os dados da remessa na tela de
missões e os dados do transporte na tela de transporte.
A geração de volumes para coleta e para passagem no sorter será gerado nesse mesmo
momento, ou seja, após o processamento do WCS em suas telas será possível verificar toda a
necessidade de cada remessa, mesmo que ela não faça parte de uma onda, os itens destinados
ao sorter não possuem ligação direta com os itens de coleta, porém só poderão ser habilitados
o sorter após sua efetiva separação. A quantidade habilitada será controlada conforme a
configuração de shelf do cliente e o shelf efetivamente separado
Para os volumes do tipo de peso PVAR com cadastro do produto (MATMAS) correto, nesse
mesmo momento de disponibilização dos dados na tela de volumes será informado o
identificador único do WCS para os volumes PVAR.
Para uma análise clara de esforço de movimentação de reabastecimento na tela de transportes
será possível verificar a quantidade de reabastecimento necessário para atender a necessidade
do ou dos transportes sem o envio de integrações nessa etapa, essa lógica segue a mesma
verificação de estoque é realizada no processo de preparação de onda.
Todos os dados seja volume, remessa ou transportes tem um status atribuídos durante os
processos da operação.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Regras de Operação  
**Score:** — (semantico) | **ID:** 80271332206350f2

A alocação e atuação dos operadores nos postos de trabalho devem seguir as seguintes
diretrizes operacionais:
• A substituição ou realocação de operadores poderá ser realizada quando não houver
volumes de PVAR em separação, inclusive durante a execução da onda, sem
necessidade de interrupção do processo.
• Um operador não poderá estar simultaneamente vinculado a postos pertencentes a
câmaras distintas (ex: Resfriado e Congelado), garantindo conformidade com as
restrições operacionais e físicas do ambiente.
• As atividades de coleta direcionadas ao operador devem respeitar o posto de trabalho
ao qual ele está vinculado, assegurando que sejam atribuídas apenas tarefas
relacionadas às posições sob sua responsabilidade.
• Não será permitido que um mesmo colaborador ou impressora esteja vinculado
simultaneamente a mais de um posto de trabalho ativo. O WCS Velox deve validar essa
regra e impedir novos vínculos em caso de conflito.
• Não será possível inativar um posto enquanto existirem coletas pendentes associadas
às posições sob sua responsabilidade.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Regra de tratamento: Como a data de fabricação não está codificada diretamente como  
**Score:** — (semantico) | **ID:** 79dae8600ade7d95

campo estruturado (código de barras), o WCS deverá converter a data juliana composta na
informação do lote (EX: 3227) em data gregoriana (EX:04/10/2023).
Etiqueta sem Lote no Código (Exemplo: margarinas)
Neste layout, o lote não está presente diretamente em nenhum código de barras. O WCS deve

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Regra de extração do SIF: O número do SIF é sempre o valor que aparece após o prefixo  
**Score:** — (semantico) | **ID:** 322436ebdf5e413a

"0760" no AI (7030). Exemplo: código (7030) 0760292 → SIF = 292.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Regra de tratamento: Como não existe código produtor na etiqueta, o WCS deve manter um  
**Score:** — (semantico) | **ID:** ecc2880c0fc54300

cadastro interno de um código de unidade produtora por SIF, o restante do lote deve

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Campo  
**Score:** — (semantico) | **ID:** 5b5c985c80d9d880

Onda
Onda vinculada ao transporte
Transporte
Número do transporte finalizado
Placa
Placa do veículo
Transportador
Transportadora do veículo
Tipo de veículo
Informação com o tipo de veículo
Doca principal
Doca principal do carregamento
Remessa
Remessa será apresentada alinha a linha por material
Cliente
Cliente ligado a remessa/item
Material
Será apresentado cada material por linha
Lote esperado
O lote que foi solicitado separação
Lote desviado
O lote que foi desviado na rampa.
Qtd Remessa
Cx
Irá apresentar a quantidade/item que foi atendido em cada posição,
no caso de ter mais de uma posição de separação deverá mostrar
cada posição em uma linha, no caso de finalizar com corte ou não
separado (Cancelamento da onda) o registro deve vir com a
informação de separação e desvio de acordo com o que foi realizado
de fato.
Qtd atendida
Cx
Quantidade que foi separado para o item por remessa/item/posição.
Qtd separada
Cx
Quantidade de caixas que foram confirmadas no PBL para a
remessa/material/posição.
Qtd Desviada
Cx
Quantidade de caixas desviadas referente a remessa/material/posição
Qtd Corte Cx
Quantidade de caixas cortadas na posição para a compra da
remessa/material/posição.
Posição
Posição do qual foi separado ou teve intenção de compra, mas cortou
Categoria de
peso
Categoria de peso do material (Pesado, leve e frágil)
Shelf DE
Informação que o SAP manda a data de início para determinação do
lote que irá separar.
Shelf Até
Informação que o SAP manda para a data fim de busco para a
determinação.
Data Start
Data e hora do Start da onda
Data Fim
Data e Hora fim da onda

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Decanting  
**Score:** — (nome-topico) | **ID:** a4828142ba3e9ccb

O processo de Decanting consiste em transferir os itens de uma caixa full case original para
bins (recipientes individuais), permitindo que os produtos sejam posteriormente alocados nas
posições de Picking Fracionado de forma organizada e rastreada.
Fluxo Operacional do Decanting:
Leitura da Caixa Full Case: O operador realiza a leitura (bipa) da etiqueta da caixa
full case no ponto de reabastecimento, identificando o volume no WCS.
Informação da Quantidade de Bins: Após a leitura da caixa, o WCS solicita ao
operador que informe a quantidade de bins necessária para acomodar os itens da
caixa. O operador informa a quantidade diretamente no coletor.
Leitura das Bins: O operador realiza a leitura (bipa) de cada bin, na quantidade
informada no passo anterior. O WCS registra a associação entre a caixa full case
original e cada bin utilizada.
Transferência dos Itens: O operador retira os itens da caixa full case e distribui nas
bins lidas. O WCS mantém a rastreabilidade dos itens, vinculando cada bin à caixa full
case de origem e à tarefa de reabastecimento correspondente.
Conclusão do Decanting: Após a leitura de todas as bins e a transferência dos itens,
o WCS registra o decanting como concluído para aquela caixa full case. As bins ficam
disponíveis para a próxima etapa (Abastecimento do Picking Cart).
Regra: Cada bin corresponde a um único endereço de picking fracionado. A relação é de
uma bin para um endereço.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.5. CrossDocking  
**Score:** — (nome-topico) | **ID:** 9df1f2ccc74cfcfc

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus
respectivos volumes, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS
também não interfere na ordem de indução.
O operador deverá levar o pallet próximo a uma área de indução da automação e seguir com os
processos de indução do lado do WMS.
O WCS agrupará os volumes provenientes do processo de CrossDocking e do processo de
Separação em uma única posição de PTL, segregando apenas por categoria do produto
(Alimentício/Não Alimentício) e se necessário Tipo de Embalagem tratados de maneira
eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo
das operações padrão.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** 13a69cdc0947c5c6

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus respectivos volumes e devidamente integrados no sistema, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS também não interfere na ordem de indução.
O operador deverá levar o pallet próximo a uma área de indução da automação e seguir com os processos de indução do lado do WMS.
O WCS agrupará os volumes provenientes do processo de CrossDocking e do processo de Separação, segregando apenas por Loja, categoria do produto (Alimentício/Não Alimentício) e se necessário Tipo de Embalagem tratados de maneira eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo das operações padrão.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** a192a6039722f86f

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus respectivos volumes, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS também não interfere na ordem de indução.
O operador deverá levar o pallet próximo a uma área de indução da automação e seguir com os processos de indução do lado do WMS.
O WCS agrupará os volumes provenientes do processo de CrossDocking e do processo de Separação em uma única posição de PTL, segregando apenas por Loja, categoria do produto (Alimentício/Não Alimentício) e se necessário Tipo de Embalagem tratados de maneira eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo das operações padrão.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 3.1. Objetivo do Projeto  
**Score:** — (semantico) | **ID:** b88f94ecc7c08623

O projeto tem como objetivo a automação dos processos de expedição do Centro de
Distribuição da Vedamotors em Navegantes/SC. A operação é caracterizada exclusivamente
como CD de Distribuição (sem vínculo fabril no local), operando com recebimento de
transferência e expedição fracionada e full case.
O sistema WCS Velox será responsável por orquestrar o fluxo de caixas, integrar com o WMS
Spark e controlar os equipamentos de automação (PLC, PTL, Balanças e Sorter), garantindo a
separação por curvas de giro e a consolidação final por transportadora.
Criação
Apresentação
Envio
Aprovação da ES
Responsável: Invent
Desenvolvimento de
documentação (ES).
Responsável: Invent
Apresentação de ES
ao cliente para
validação de toda a
documentação.
Responsável: Invent
Envio do ES para
Aprovação.
Responsável: Cliente
Cliente aprova a proposta para dar
seguimento no processo seguindo
para o desenvolvimento.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 9.1. Conceito de Túnel e Zonas  
**Score:** — (semantico) | **ID:** f63b56fe74f473f1

A linha de automação atravessa as zonas de armazenagem (Térreo e Mezanino). O WCS envia
a caixa de transporte (Tote) apenas para as zonas onde há itens a serem coletados.
Skip Zone: Se um pedido não contém itens no Mezanino — entendendo-se como itens
tanto das posições de frente (flow rack) quanto das costas (fracionado G/M/P e
fullcase), a caixa será induzida diretamente no Order Start Térreo, otimizando o tempo
de ciclo.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 15 Chegada dos Pallets nos Portais de Entrada  
**Score:** — (semantico) | **ID:** 7b48d81395ad9c63

Após o recebimento das integrações quando o pallet chega no portal de entrada, o pallet pode
estar com os seguintes status de localização:
Na entrada do sistema (“INSystemEntrance”) - Quando pallet possui ordem de entrada.
WCS recebeu o IDOC do SAP.
Area de picking (PickingArea) – Quando o pallet foi destinado a área de picking (saída) e
retornou para ser armazenado novamente. Pallet saiu do AV, mas o pedido foi cancelado, sendo
assim é realizado a troca da etiqueta e alterado o status.
Rejeitado (Rejected) – Quando o pallet foi previamente rejeitado por algum motivo. Pallet com
etiqueta rasurada, torto e etc.
No momento da entrada do pallet na automação, o portal de entrada realiza uma avaliação
dimensional automatizada, com o objetivo de garantir que o pallet está dentro dos padrões
mínimos de conformidade física, conforme critérios definidos pelo cliente. Esses critérios são
ajustados mecanicamente nos sensores instalados no portal, garantindo que apenas pallets
adequados avancem para a próxima etapa do processo.
Durante essa etapa, também ocorre a leitura da etiqueta do pallet, momento em que o
sistema WCS  realiza a avaliação das seguintes informações:
Verifica se o pallet está cadastrado no sistema.
Verifica a localização do pallet (InSystemEntrance), InPickingArea).
Verifica se existe ordem de entrada pendente para o pallet (somente para pallets com
localização ‘InSystemEntrance’ e ‘Rejected’).
Verifica a temperatura dos volumes do respectivo pallet (Congelado ou Resfriado)
Após a execução das validações descritas anteriormente, o WCS  realiza uma análise das TAGs
associadas ao portal de entrada para determinar se o pallet pode ser aceito na automação
ou se deverá ser rejeitado, com a devida identificação do motivo da rejeição.
Caso o pallet seja rejeitado — seja pelo próprio WCS  ou pelos sensores da automação —, ele
será redirecionado automaticamente ao ponto de avaliação dimensional. O operador poderá
visualizar, por meio da interface do WCS , o motivo exato da rejeição, possibilitando o
entendimento da ocorrência e a execução do tratamento necessário.
Além disso, o WCS :
Envia a integração WMCATO para o SAP, informando a rejeição do pallet;
Atualiza a localização do pallet no sistema para o status “Rejected”;
Informa que as tratativas físicas e logísticas relacionadas aos pallets rejeitados
são realizadas no SAP.
Somente quando o rejeito for por erro de leitura (NOREAD) da etiqueta o WCS não envia a
integração WMCATO.
Para os pallets aprovados o WCS  atualizara as informações de peso e perfil de acordo com as
informações passadas pelo PLC da automação e realiza a avaliação de regras para armazenagem,
como vemos na tabela abaixo:
NOME
DESCRIÇÃO
Pallet Bloqueado
Se o Pallet esta bloqueado pelo SAP
Zona de armazenagem Obrigatória
Verifica se para o produto (SKU) do pallet
existe uma zona (área com uma ou mais
células) de alocação obrigatória
Zona de Armazenagem Sugerida
Verifica se para p produto (SKU) do pallet
existe uma zona (área com uma ou mais
células) se sugestão para alocar o pallet
Célula de armazenagem disponivel
Verifica sé há células/posições disponíveis
para recebe a alocação do pallet
Transelevador
Verificar qual transelevador está com menor
número de tarefas do mesmo tipo de
conservação do produto
Tipo de Produto
De acordo com o tipo de produto informado
na integração (congelado ou resfriado), o
WCS irá direcionar o volume para a área dos
transelevadores corretos para este tipo de
armazenagem
Balanceamento do mesmo SKU em diversos
transelevadores
O WCS precisa ter a inteligência de não
deixar o SKU restrito apenas à um único
corredor/transelevador. O WCS deve
balancear 1 para 1, deixando um palete por
corredor. Esta ação visa mitigar possíveis
necessidades de manutenção dos
transelevadores sem que haja prejuízo da
expedição. Importante ter um relatório/tela
para análise de SKUs que poderão ser
elegíveis à este balanceamento.
Após a aplicação da regra de armazenagem, o sistema WCS  atualiza a TAG de destino no
bloco de dados da automação, especificamente no campo DADO_CARGA[XXX].DESTINO. Essa
informação é utilizada para informar à automação qual será o berço de entrada designado
para receber o pallet.
Essa ação garante a correta coordenação entre o sistema de gerenciamento (WCS) e o controle
físico da automação, permitindo que o pallet seja direcionado com precisão ao ponto de
armazenagem previamente definido.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 16 Mapa de Posições  
**Score:** — (semantico) | **ID:** 42d3cf2f782f6c29

WCS deve fornecer uma tela de gestão das posições no Armazém Vertical (AV), exibindo
a relação completa das posições presentes em cada transelevador. Esta tela será uma “foto”
do armazém vertical onde o operador poderá realizar ações como bloqueio/liberação de posições,
consultas através do número do pallet, transelevador, sku entre outros filtros; exportar os dados
desejados em excel ou PDF.
O WCS deverá gerir o palete no destino, garantido que a mesma posição nunca tenha dois paletes
Essa interface permitirá ao operador:
Informar posições especiais: O sistema deverá permitir que o operador marque
posições com características específicas, como altura diferenciada devido à
presença de springles (dispositivos de segurança contra incêndio). O WCS será
responsável por alocar corretamente os pallets nessas posições, levando em
consideração a altura do pallet e a limitação da posição.
Informar posições dedicadas para um único SKU: Cliente poderá marcar um
conjunto de posições (quadrante) que serão estritamente armazenado apenas um único
SKU nestas posições parametrizadas.
Cadastro de Curvas ABC: O WCS também deverá permitir o cadastro dos
quadrantes de cada transelevador para uma curva ABC específica de produtos.
Esse cadastro será utilizado para alocar pallets de acordo com a classificação dos
produtos. Caso não exista um cadastro de curva ABC para uma posição, o sistema
considerará essa posição como capaz de armazenar qualquer tipo de produto,
independentemente da classificação de curva.
Essa funcionalidade proporciona flexibilidade e controle sobre a alocação de produtos,
garantindo que as posições sejam ocupadas de maneira otimizada e de acordo com as restrições
físicas e as necessidades logísticas do armazém.
O WCS deve disponibilizar um log com o usuário, data/hora e qualquer ação que foi feita nesta
tela.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 17 Pallet em um Berço de Entrada  
**Score:** — (semantico) | **ID:** 8c5bcab42043d599

Quando um pallet chega ao berço de entrada de um transelevador, transportado pelos
sistemas automatizados, o sistema WCS  dispara uma integração informando a presença da
carga no ponto de coleta.
Esses berços representam as mesas de transferência, nas quais os garfos do transelevador
realizam a coleta do pallet para início do processo de armazenagem. No exato momento em
que o pallet atinge esse ponto, o WCS  envia o comando de movimentação ao
transelevador, indicando que a carga está pronta para ser armazenada.
Simultaneamente, o sistema altera o status de localização do pallet para “Armazenando”
(Storing), permitindo o rastreamento preciso do processo e a atualização em tempo real das
informações logísticas no sistema.
Ao ser notificado do evento de chegada de um pallet no berço de entrada do
transelevador, o sistema WCS  executará a lógica de direcionamento para a célula de
armazenagem, com base nas seguintes regras operacionais:
Tamanho do Pallet e Disponibilidade de Posições:
O WCS deverá avaliar as dimensões do pallet, conforme informado pelo PLC no
portal de entrada, e alocá-lo em uma posição de armazenagem compatível.
Essa alocação será realizada com base nas regras de parametrização definidas
pelo cliente no sistema. Algumas posições do armazém são classificadas como
especiais, por possuírem restrição de altura devido à presença de dispositivos como
sprinklers (sistemas de combate a incêndio). Nestes casos, o WCS deverá
priorizar a alocação de pallets com menor altura nestas posições.
Observação: Caso todas as posições especiais estejam ocupadas, o WCS deverá
direcionar o pallet para uma posição convencional disponível, respeitando ainda assim
os critérios mínimos de compatibilidade dimensional.
Curva ABC e Quadrantes Parametrizados:
O sistema deverá respeitar a parametrização de quadrantes realizada pela
operação para armazenagem de produtos classificados como curva ABC (que será
informado pelo SAP via IDOC como outras informações pertinentes). Pallets com maior
giro devem ser alocados preferencialmente em áreas de fácil acesso e alta rotatividade,
conforme os critérios logísticos definidos pelo cliente.
Disponibilidade de Posição no Transelevador:
O WCS deve verificar se a posição de destino está ativa e liberada para uso,
desconsiderando posições bloqueadas por manutenção, ocupação ou outras restrições
sistêmicas.
Armazenagem Otimizada por Proximidade de Coleta:
Sempre que possível, o sistema deverá priorizar a armazenagem em posições
próximas da próxima ação esperada, como a retirada ou expedição do pallet,
otimizando os deslocamentos do transelevador e reduzindo o tempo de operação.
Balanceamento de Peso por Transelevador:
O sistema WCS deverá considerar o balanceamento de peso no transelevador,
distribuindo os pallets de forma equilibrada no equipamento. Essa lógica tem como
objetivo evitar sobrecarga de peso em locais específicos do transelevador, promover
maior durabilidade dos componentes mecânicos e otimizar a performance da operação
como um todo.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 18 Chegada a uma Célula  
**Score:** — (semantico) | **ID:** 601bcca647b5928a

A ação é disparada assim que o transelevador conclui o processo de armazenagem de
uma carga em uma célula previamente definida. Nesse momento, o sistema WCS  atualiza o
status de localização da carga para “Armazenado” (Stored), refletindo que o pallet se
encontra corretamente posicionado no armazém.
Em seguida, o WCS  envia a integração WMTOCO ao sistema SAP, notificando a conclusão
da armazenagem da carga. Após o envio da confirmação, o sistema atualiza o status da célula
de armazenagem para “Ocupada”, impedindo que novos pallets sejam direcionados a essa
posição até que ela seja liberada.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 19 Alerta de Célula Ocupada  
**Score:** — (semantico) | **ID:** 4132a575edd90486

Essa ação é disparada quando o transelevador não consegue concluir uma missão de
armazenagem devido à célula de destino estar ocupada no momento da tentativa de
posicionamento. Ao detectar essa situação, o WCS  deverá executar a lógica de realocação da
carga, adotando as seguintes etapas:
Atualização de Status da Célula Original:
A célula inicialmente designada para armazenagem será marcada como “Ocupada” no
sistema, evitando que novas cargas sejam direcionadas a ela.
Verificação de Alternativas no Mesmo Corredor:
O WCS verifica se há outras células livres no mesmo corredor do transelevador
seguindo as mesmas regras já citadas no documento.
Se houver, o sistema envia uma nova missão de realocação da carga para a nova
célula disponível.
Redirecionamento ao Ponto de Decisão:
Caso não existam posições livres no corredor atual, o WCS envia uma missão de
movimentação da carga até o ponto de decisão mais próximo (outro
transelevador)
Ao chegar nesse ponto, o WCS executa uma nova lógica de alocação, buscando uma posição
livre em outro corredor para concluir a armazenagem.
Durante todo esse processo, o status da carga permanece como “Em Armazenamento”
(Storing), uma vez que ela ainda se encontra em trânsito e sob controle do sistema.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 20 Alerta Célula com Erro  
**Score:** — (semantico) | **ID:** c078412acc316078

Essa ação é disparada quando o transelevador não consegue concluir uma missão de
armazenamento ou retirada de carga, devido a um erro estrutural identificado na célula, como
sensor desalinhado, falha mecânica ou problemas de dimensionamento.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 20.1 Em Caso de Armazenagem de Carga  
**Score:** — (semantico) | **ID:** 0e7b9f2f98a2a538

Se a falha ocorrer durante um movimento de armazenamento, o WCS deverá:
Classificar a célula como “Célula com Erro”, registrando o motivo retornado pelo
transelevador.
Iniciar o processo de realocação da carga, de acordo com a disponibilidade de posições:
Se houver posição livre no mesmo corredor, o WCS deverá enviar uma nova
missão de armazenagem para essa célula alternativa.
Se não houver posições disponíveis no corredor atual, o WCS deverá enviar a
carga ao ponto de decisão mais próximo. Ao atingir esse ponto, será executada
nova tentativa de alocação em um corredor diferente.
Durante esse processo, o status da carga permanecerá como "Em Armazenamento"
(Storing).

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 21 Retirada de uma Célula  
**Score:** — (semantico) | **ID:** 3680cf102043b6ac

Essa ação é disparada pelo transelevador ao término de uma operação de retirada de um
pallet de uma célula de armazenagem, normalmente executada em atendimento a uma ordem
de saída enviada pelo SAP ou de forma manual diretamente pelo WCS.
Ao concluir a retirada, o transelevador encaminha o pallet ao berço de saída, dando
continuidade ao fluxo logístico.
O processamento dessa ação se inicia com a atualização do status da célula para
"Vazia", liberando-a para futuras armazenagens. Em seguida, o sistema WCS  verifica o tipo
da ordem de saída associada ao movimento:
Se a ordem estiver relacionada a um processo de expedição ou transferência, o WCS
deverá enviar a integração WMTOCO ao SAP, confirmando a retirada da carga da célula.
Caso contrário, ou seja, se a operação não estiver vinculada a uma OS de expedição ou
transferência, nenhuma integração adicional será enviada, e o processo será encerrado
apenas com a liberação da posição.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 22 Alerta de Célula Vazia  
**Score:** — (semantico) | **ID:** 7c77faa22d935c1f

Essa ação é disparada pelo transelevador quando, ao tentar executar uma operação de retirada
de carga, não encontra nenhum pallet presente na célula de origem. Diante dessa ocorrência, o
sistema WCS  deve processar o erro marcando a célula como “Erro – Deveria estar cheia”,
caracterizando uma inconsistência entre o estoque físico e o lógico do sistema.
A partir disso, o WCS avalia o modo de operação atual. Se estiver operando em modo
"Inventário", nenhuma ação adicional será realizada além da marcação da célula com o referido
erro, uma vez que o foco nesse modo é apenas diagnóstico e validação de inventário. No entanto,
se o sistema estiver em modo "Online", o WCS deverá verificar se a ordem de saída vinculada
à movimentação corresponde a uma operação de expedição ou transferência.
Caso a operação esteja de fato relacionada a uma ordem de saída, o sistema realiza o estorno
de todos os itens associados àquela OS, removendo a vinculação ao pallet inexistente. A
responsabilidade pela realocação de um novo pallet para atendimento da ordem será transferida
ao SAP. Por outro lado, se a operação não estiver associada a uma OS, o WCS deverá enviar
uma integração WMCATO ao SAP, informando o cancelamento da retirada devido à
ausência física do pallet no local esperado, impossibilitando a continuidade da operação.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 23 Alerta de Falha no Transelevador  
**Score:** — (semantico) | **ID:** be20ebf42bbc11ff

Essa ação é disparada sempre que ocorre um erro não recuperável no transelevador, situação
que se caracteriza, principalmente, pela perda de comunicação entre o PLC e o sistema WCS.
Nesses casos, é necessária a intervenção manual do operador para retomar o controle da
operação.
Se o transelevador estiver transportando uma carga no momento da falha, o sistema deverá
retirar automaticamente o pallet para o berço de saída, liberando a estrutura para operação
manual. A partir desse ponto, cabe ao operador corrigir a situação da carga diretamente no
sistema, garantindo que as informações estejam atualizadas e consistentes.
Enquanto a falha persistir, todas as movimentações do transelevador deverão ser realizadas
manualmente. Após a correção do problema técnico, o equipamento deverá ser resetado para
seu estado inicial de operação, permitindo que a comunicação entre o WCS  e o transelevador
seja restabelecida e que o fluxo normal de decisões e comandos automatizados seja retomado.
Em caso de queda de energia ou qualquer problema vinculado a perca de comunicação com o
WCS, assim que reestabilizado a conexão o WCS deve prosseguir com as atividades partindo da
última antes da paralização.
Qualquer ação que seja realizada diretamente no transelevador sem o comando realizado pelo
WCS, o operador deverá realizar a baixa manualmente no sistema nas tarefas realizadas.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 24 Chegada a um Berço de Saída  
**Score:** — (semantico) | **ID:** a264fbab68135264

Essa ação é disparada pelo transelevador sempre que ocorre uma retirada de carga bem-
sucedida, e o pallet é depositado no berço de saída do equipamento. Nesse momento, o sistema
WCS passa a considerar a carga como “Em trânsito”, e registra automaticamente no log de
transações a confirmação da entrega da carga pelo transelevador.
Essa transação garante o encerramento da movimentação dentro do corredor, realizando a baixa
da carga da célula de origem, e consolidando a saída da carga da área de armazenagem. Caso o
status anterior do pallet seja “A ser entregue”, ele será atualizado para “Em trânsito”, refletindo
com precisão o novo estágio operacional da carga dentro do sistema.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 27 Modo Contingência do Transelevador  
**Score:** — (semantico) | **ID:** d9c5e1d05cb5cd4b

A operação na última semana de cada mês passa por um cenário atípico do habitual, onde deve
ser priorizado a saída dos itens do AV do que a armazenagem. Sendo assim o WCS disponibilizará
uma tela que permitirá alterar a configuração padrão do WCS (sempre alocar um pallet já com
base na próxima ação de retirada).
Para esta alteração terá a parametrização em porcentagem de dois tipos de ações que são :
armazenagem e expedição. A operação deverá parametrizar em uma escala de 100%, quantos
porcento deve ser priorizado a armazenagem e a expedição de pallets quando esta ação estiver
acionada.
Por exemplo: em caso do modo contingencia estiver ativado e a parametrização da operação está
em 70% expedição e 30% armazenagem, em uma escala de 10 tarefas deve ser feita 7 de
expedição de pallets e 3 de armazenagem.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 28 Ajuste do AV com o Transelevador Ocioso  
**Score:** — (semantico) | **ID:** cef4569f5e628d41

Quando o transelevador estiver ocioso, ou seja, quando não houver ordens de entrada ou
saída para a automação, e ser acionado a opção manualmente pela operação o WCS
deverá assumir a responsabilidade de organizar o estoque no armazém automatizado,
otimizando o uso das células de armazenagem.
Devido à dinâmica das regras de alocação de pallets no AV (Armazém Vertical), é possível
que os pallets fiquem separados uns dos outros. Essa separação pode ocorrer em função do
fluxo da operação, da configuração dos corredores e das características dos produtos.
Portanto, durante os períodos de ociosidade da máquina, o WCS deverá ordenar a
reorganização dos pallets no AV, promovendo uma distribuição mais eficiente, de forma
que o espaço no armazém seja mais bem aproveitado e os pallets fiquem proximamente
posicionados, respeitando as regras de cada posição parametrizada no WCS.
O WCS deve disponibilizar um log com o usuário, data e hora de início e fim deste ajuste no
estoque.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 29.1 Botão de STOP  
**Score:** — (semantico) | **ID:** 155118b14344a317

O WCS deverá implementar um botão de STOP na interface de controle do transelevador, com
a funcionalidade de pausar imediatamente a descida dos pallets. Este botão permitirá que
os operadores intervenham rapidamente em caso de erro ou movimentações não desejadas,
oferecendo o seguinte comportamento:
Pausa na descida dos pallets: Quando ativado, o botão de STOP interrompe a
movimentação dos pallets durante o processo de descida, impedindo novas
movimentações até que o erro seja tratado.
Cancelamento no SAP: O operador, após pausar a descida, poderá acessar o SAP
para cancelar todas as movimentações errôneas relacionadas à descida dos pallets.
Envio de CATO ao WCS: Após o cancelamento no SAP, o sistema enviará um CATO
(confirmação de cancelamento de operação) para o WCS, garantindo que o impacto das
movimentações incorretas seja minimizado e toda a operação seja reprocessada
corretamente.
Essa funcionalidade contribui para a gestão de erros operacionais, proporcionando maior
controle sobre as movimentações automatizadas e garantindo que o sistema de automação possa
ser ajustado rapidamente em tempo real.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Consulta Volumes  
**Score:** — (semantico) | **ID:** 49687d23f82a0fc7

SAP → WCS (GET)
Quando a operação SWIFT achar necessário o recebimento das informações do
volumes que passaram no sorter, no sistema do SAP existirá uma funcionalidade que permite a
busca dessas informações através de uma requisição GET realizada para o WCS que por sua
vez retornará as informações dos volumes e seus respectivos diagnósticos.
A URL que será utilizada para este processo será passada pelo time
responsável posteriormente.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** 446cfce3b1816895

O crossdocking é um processo logístico que envolve a movimentação de mercadorias
diretamente de um veículo de recebimento para a expedição, com pouca ou nenhuma
armazenagem intermediária. Isso significa que os produtos são recebidos e imediatamente
preparados para o envio, sem ser estocados. O objetivo principal do crossdocking é reduzir o
tempo de armazenamento e acelerar o fluxo de produtos entre os pontos de entrada e saída,
melhorando a eficiência e diminuindo os custos operacionais.
Esta categoria de produtos seguirá as mesmas regras dos produtos CCX já mencionados no
documento.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** Célula  
**Score:** — (semantico) | **ID:** f91f440d39649785

O projeto contempla quatro células de trabalho, todas estruturadas de forma idêntica, funcionando como espelhos entre si.
Cada célula é composta por:
Dois PDVs, utilizados simultaneamente por dois operadores para realizar a triagem de uma mesma nota fiscal.
Flowrack com 36 posições, destinado ao armazenamento temporário dos itens que serão alocados no estoque.
Seis posições de PTL (Put to Light), direcionadas para os carrinhos que recebem os produtos destinados ao laboratório.
Essa configuração garante padronização entre as células, otimização da triagem e rastreabilidade dos volumes em cada etapa do processo.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** 5.0 Célula  
**Score:** — (semantico) | **ID:** 32748100c18ea051

O projeto contempla quatro células de trabalho, todas estruturadas de forma idêntica,
funcionando como espelhos entre si.
Cada célula é composta por:
Dois PDVs, utilizados simultaneamente por dois operadores para realizar a triagem de
uma mesma nota fiscal.
Flowrack com 36 posições, destinado ao armazenamento temporário dos itens que
serão alocados no estoque.
Seis posições de PTL (Put to Light), direcionadas para os carrinhos que recebem os
produtos destinados ao laboratório.
Essa configuração garante padronização entre as células, otimização da triagem e
rastreabilidade dos volumes em cada etapa do processo.
