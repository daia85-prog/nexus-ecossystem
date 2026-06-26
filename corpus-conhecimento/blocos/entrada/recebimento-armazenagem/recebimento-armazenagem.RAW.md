# recebimento-armazenagem.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Área de Recebimento  
**Score:** — (semantico) | **ID:** f7553bf23e74ce95

Nesta área ficará as caixas que estão prontas para serem induzidas para a esteira e serem triadas para as conferências. O WCS precisa que esses locais estejam devidamente cadastrados com seu código de endereço.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Stage de Pallets  
**Score:** — (nome-topico) | **ID:** 1e7bd123a1b05ef8

Após o fechamento, os pallets serão direcionados para a área de Stage de Pallets, onde permanecerão até que todos os pallets pertencentes ao mesmo pedido estejam finalizados.
Quando um pallet for encerrado, no coletor Android o operador deverá acessar a funcionalidade de Stage de Pallets e realizar a leitura da etiqueta do pallet. No momento dessa leitura, o WCS irá identificar o pedido associado e direcionar automaticamente o pallet para um endereço disponível na área de stage, onde ele aguardará a emissão da nota fiscal.
Na sequência, o operador deverá transportar o pallet até a área de stage e bipar a posição indicada pelo sistema. A partir dessa confirmação, o WCS registrará o vínculo entre o pedido e a posição de stage, garantindo que todos os pallets pertencentes ao mesmo pedido sejam alocados em endereços próximos, facilitando a organização física e a consolidação do pedido.
Esse processo será repetido até que todos os pallets do pedido sejam finalizados e alocados no stage. Após a alocação e transporte de todos os pallets para a área de stage, a liberação da posição não será automática. O operador deverá iniciar o processo de liberação realizando a leitura do endereço do stage, seguida da leitura da etiqueta do pallet pertencente aquela posição, e deve fazer o mesmo processo com todos os outros paletes daquele pedido.
Caso todas as leituras correspondam corretamente aos pallets esperados para o pedido, o coletor exibirá a mensagem “Pallets liberados”, e o WCS efetuará a liberação da área de stage.
Somente após a leitura correta de todos os pallets esperados, o WCS irá:
Confirmar o encerramento do agrupamento de pallets do pedido;
Liberar as posições de stage anteriormente utilizadas;
Tornar a área de stage disponível para a alocação de um novo pedido.
Caso ainda exista algum pallet do pedido na área de PTL, o coletor exibirá imediatamente a mensagem “Pedido incompleto” no momento da leitura do primeiro pallet, impedindo a liberação até que todos os pallets estejam presentes e validados.
Os pontos de stage serão previamente definidos e devidamente identificados fisicamente, assegurando organização operacional, rastreabilidade dos pallets e controle sistêmico adequado durante todo o processo de expedição.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Lógica de Endereçamento Interno (Exceção)  
**Score:** — (semantico) | **ID:** a563eb4c0e2fa64f

O sistema Velox manterá internamente uma cópia espelhada de todos os endereços cadastrados pela operação em um posto virtual sistêmico. Esses endereços de exceção serão diferenciados por meio de um caractere inicial prefixado ao endereço padrão (ex.: [Caractere Inicial] + [Endereço Padrão]), formando uma réplica que o sistema identificará automaticamente como pertencente ao fluxo de exceção.
Essa estrutura de endereçamento interno permite que o WCS redirecione as coletas da linha de automação comum para o Picking Cart, sem impactar a integração com os sistemas externos.
O retorno da integração seguirá o padrão, devolvendo o mesmo endereço originalmente enviado pela operação na integração inicial, ou seja, a mudança de endereço é exclusivamente interna, servindo apenas para direcionar corretamente o fluxo da automação para o Picking Cart.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Tela para Alteração de Itens e Posições  
**Score:** — (semantico) | **ID:** 73f09c52385c408e

Uma tela será criada dentro do WCS que permitirá ao operador ter autonomia para mudar itens de posições/endereços dentro do sistema. Isso é essencial para o ajuste de localizações internas, especialmente quando os produtos precisam ser realocados para otimizar o espaço de armazenamento ou em resposta a erros operacionais.
Esse processo será realizado por meio do coletor de dados, utilizando uma tela específica para movimentação interna de endereços. Nessa tela, o operador deverá iniciar o processo com a leitura da posição de origem, seguida pela leitura do código do item (SKU) presente naquela posição.
Após essas leituras, o sistema WCS exibirá automaticamente a quantidade total disponível naquela posição para o item informado. Em seguida, o operador será instruído a informar ou escanear a posição final de destino, concluindo assim a movimentação interna.
Nessa tela a alteração da quantidade deverá ficar como opcional, pois o registro da tarefa será feito após a conclusão dessa movimentação.
Observação: o num. da tarefa deverá ter um prefixo diferente para identificar movimentação manual.

---
**Origem:** [I24.117] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Consulta Volumes  
**Score:** — (semantico) | **ID:** 9e28e468248dac50

SAP  WCS (GET)
Quando a operação SWIFT achar necessário o recebimento das informações do volumes que passaram no sorter, no sistema do SAP existirá uma funcionalidade que permite a busca dessas informações através de uma requisição GET realizada para o WCS que por sua vez retornará as informações dos volumes e seus respectivos diagnósticos.
A URL que será utilizada para este processo será passada pelo time responsável posteriormente.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Processo operacional  
**Score:** — (semantico) | **ID:** b526b371221db178

O processo operacional se inicia nas dependências do WCS (Invent) após a chegada do pallet no stage onde através de um coletor o operador irá realizar o login no WCS e acessar a tela de recebimento (consumo) de pallet, onde o WCS irá validar o número (ID) do pallet e informar ao operador se o pallet foi consumido com sucesso caso o WCS encontre em sua base de dados as informações sobre o pallet, ou o WCS irá informar que não foi encontrado pallet com o ID informado, indicando que não houve integração desse número de pallet do WMS para o WCS.
Após o consumo do pallet o WCS irá aguardar a indução dos volumes na esteira.
Operador realiza a indução manual de volumes (caixa) na esteira que irá transportar os volumes até o portal de leitura, onde as câmeras identificam o código marcado como mencionado no ite, após o recebimento do volume o WCS irá avaliar em sua base de dados qual o destino do volume, ou seja, para qual rampa esse volume deve ser desviado, sendo assim o WCS informa para a automação (PLC) a direção de desvio.
Após o desvio do volume na rampa correta o operador deverá realizar o login na rampa, sendo assim pode realizar a leitura do volume (caixa) através do scanner da rampa, uma vez que o WCS recebe a informação do código da caixa ele acende o led da posição PTL informando onde o operador deve colocar o volume ou acenderá todos os leds do posto PTL vinculado ao scanner que realizou a leitura na cor vermelha informando que o volume não pertence a nenhuma das posições presentes no posto PTL.
Quando o volume pertence a uma posição do posto o WCS acenderá o led correspondente a posição PTL como informado acima e o operador deve colocar o volume no pallet e em seguida confirmar apertando o botão do led, assim o WCS identifica a alocação e guarda essas informações para enviar posteriormente as informações ao WMS.
No decorrer das alocações de volumes ao pallet o WCS verifica a cubagem e peso como mencionado do item 3.3., indicando que o pallet deve ser fechado ao operador através de uma cor especifica no led, sendo que a cada pallet fechado é retornado uma integração para o WMS.
Após o fechamento de um pallet outro deve ser aberto caso exista volumes para serem alocados na posição.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Recebimento de informações  
**Score:** — (semantico) | **ID:** a38f57abb652c46f

WMS  WCS (DBLINK)
Os dados que devem ser enviados (INSERT e UPDATE) do WMS para o WCS são os dados na tabela abaixo onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tamanhos de campos indicados por * não tem tamanho definido pelo WMS o WCS deve guardar a informação em sua base da mesma maneira que recebeu do WMS
Os dados serão enviados em dois momentos pelo WMS sendo eles no momento de envio da onda de separação realizando o INSERT na tabela e um segundo momento quando o pallet estiver a caminho do stage onde o WMS fará o UPDATE da tabela populado as últimas informações.
Uma vez que os dados são inseridos pelo WMS na tabela transacional “INTERMEDIARIA” do WCS, o WCS terá em procedimentos (rotinas) para buscar as informações nas colunas das tabelas INTERMEDIARIA para popular outras tabelas dentro de sua base de dados, onde essas informações são utilizadas posteriormente para realizações das decisões de desvios no sorter, alocação de volumes nos PTLs e retorno de informações para tabela transacional do WMS Concinco.
Esses processamentos (rotinas) só serão executados quando todos os campos de todas as colunas estiverem populados, ou seja, diferentes de vazio.
As colunas NROEMPRESA, NROCARGA, SEQLOTE, SEQPRODUTO e QTDEMBALAGEM serão UNIQUEs na tabela transacional, garantindo que o WCS nunca aceitará registros com os mesmos valores em todas essas colunas. Isso assegura que não haverá duplicações com os mesmos valores nessas colunas, preservando a integridade dos dados.
Todas as informações serão inicialmente enviadas para as tabelas no banco de dados WCS sem os campos NUM_VOLUME e ID_PALLET.
Posteriormente, quando as colunas NUM_VOLUME e ID_PALLET forem preenchidas, o WMS complementará as informações que já foram enviadas anteriormente, garantindo a integridade dos dados. Portanto, o WMS deve garantir que todas as outras colunas estejam populadas antes de inserir os dados em NUM_VOLUME e ID_PALLET.
As informações de NUM_VOLUME e ID_PALLET nunca serão repetidas nessas bases de dados, e é de responsabilidade do WMS garantir que não haverá informações duplicadas nessas colunas."
O recebimento desses dados deve ocorrer antes do pallet chegar ao Stage onde o mesmo será consumido pelo WCS, caso ocorra da movimentação do pallet ocorrem sem a inserção desses dados na tabela transacional do WCS, na tentativa de consumo de pallet o WCS irá informar ao operador através do coletor manual a informação “Pallet não encontrado”, sendo possível uma nova tentativa de consumo de pallet após o envio das informações.
NOTA: O WMS não poderá realizar deleções na tabela transacional (DELETE), somente inserção de dados, qualquer UPDATE realizado em colunas erradas é de inteira responsabilidade do WMS

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Célula  
**Score:** — (semantico) | **ID:** f91f440d39649785

O projeto contempla quatro células de trabalho, todas estruturadas de forma idêntica, funcionando como espelhos entre si.
Cada célula é composta por:
Dois PDVs, utilizados simultaneamente por dois operadores para realizar a triagem de uma mesma nota fiscal.
Flowrack com 36 posições, destinado ao armazenamento temporário dos itens que serão alocados no estoque.
Seis posições de PTL (Put to Light), direcionadas para os carrinhos que recebem os produtos destinados ao laboratório.
Essa configuração garante padronização entre as células, otimização da triagem e rastreabilidade dos volumes em cada etapa do processo.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Decanting  
**Score:** — (nome-topico) | **ID:** 8e6706eb8261b826

O processo de Decanting consiste em transferir os itens de uma caixa full case original para bins (recipientes individuais), permitindo que os produtos sejam posteriormente alocados nas posições de Picking Fracionado de forma organizada e rastreada.
Fluxo Operacional do Decanting:
Leitura da Caixa Full Case: O operador realiza a leitura (bipa) da etiqueta da caixa full case no ponto de reabastecimento, identificando o volume no WCS.
Informação da Quantidade de Bins: Após a leitura da caixa, o WCS solicita ao operador que informe a quantidade de bins necessária para acomodar os itens da caixa. O operador informa a quantidade diretamente no coletor.
Leitura das Bins: O operador realiza a leitura (bipa) de cada bin, na quantidade informada no passo anterior. O WCS registra a associação entre a caixa full case original e cada bin utilizada.
Transferência dos Itens: O operador retira os itens da caixa full case e distribui nas bins lidas. O WCS mantém a rastreabilidade dos itens, vinculando cada bin à caixa full case de origem e à tarefa de reabastecimento correspondente.
Conclusão do Decanting: Após a leitura de todas as bins e a transferência dos itens, o WCS registra o decanting como concluído para aquela caixa full case. As bins ficam disponíveis para a próxima etapa (Abastecimento do Picking Cart).
Regra: Cada bin corresponde a um único endereço de picking fracionado. A relação é de uma bin para um endereço.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** e82a62a66f5ed7c6

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus respectivos volumes, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS também não interfere na ordem de indução.
O operador deverá levar o pallet próximo a uma área de indução da automação e seguir com os processos de indução do lado do WMS.
O WCS agrupará os volumes provenientes do processo de CrossDocking e do processo de Separação em uma única posição de PTL, segregando apenas por categoria do produto (Alimentício/Não Alimentício) e se necessário Tipo de Embalagem tratados de maneira eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo das operações padrão.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
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
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 68318ea4d6e9f38a

Este documento descreve os requisitos e diretrizes do sistema WCS Velox no contexto da operação logística da MBRF no Centro de Distribuição de Salvador – BA, com foco na automação e no controle dos fluxos intralogísticos.
A solução contempla os processos de recebimento de materiais, armazenagem, movimentação interna, separação de pedidos (picking), controle operacional, gerenciamento de estoque voltado à coleta e classificação de volumes para expedição (sorter).
Adicionalmente, o WCS Velox será responsável pela orquestração e integração entre o WMS da MBRF e os sistemas automatizados, incluindo transelevadores e sorter do tipo crossbelt, garantindo a execução eficiente dos fluxos operacionais, rastreabilidade das operações e aderência às regras de negócio definidas.
Documento esse que rege todas as funcionalidades que serão entregues ao cliente, sendo imutável todas as funcionalidades do WCS e processo operacional após aprovação.
O conteúdo a seguir reflete informações alinhadas e aprovadas pelo time MBRF, com total ciência e concordância do cliente.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Ordem de transporte (OT)  
**Score:** — (semantico) | **ID:** 8a97246f7ad392f6

As OTs são movimentações de materiais onde cada OT está vinculada a uma única movimentação, que podem conter informações como posições de origem e destino, quantidade de caixas, peso, lote, dados do produto entre outras informações relevantes a movimentação de materiais.
Essa movimentação permite que o WM possa gerenciar seu estoque forma maleável buscando o melhor atendimento possível para as necessidades do estoque.
Dentro dos processos que envolvem o WCS as OTs são utilizadas para realizar todos os tipos de procedimentos que envolvem movimentações de saldo.
As solicitações e criações de OTs ocorrem através do envio do IDOC e devem ser confirmadas através de outro IDOC.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Tipos de Posição do Armazém Automatizado (AA)  
**Score:** — (semantico) | **ID:** 4db8bf03fed1dcfc

O reabastecimento contempla os seguintes tipos de posição dentro do Armazém Automatizado (AA):
Canais de Picking dinâmicos (Níveis 1, 2 e 3): Posições fixas de separação de 3 palete, reabastecidas pelo transelevador, destinadas ao atendimento direto da operação de picking.
Canais de Picking dinâmico (Nível 1 – Posição 1): Posições fixas de separação com capacidade para 1 palete, localizadas exclusivamente na posição 1 do primeiro nível de cada câmara.
Canais de Picking comuns (Níveis 1, 2 e 3): Posições fixas de separação com capacidade máxima de 1 paletes, reabastecidas de forma manual por empilhadeiras, sendo elas destinadas a operação de picking.
Buffer (Níveis 4 e 5): Posições ficas que podem atuar como estocagem temporária (pulmão) para agilizar o reabastecimento dos canais de picking, com capacidade máxima de 1 palete por posição.
Porta-Palete: Posições de profundidade simples destinadas ao armazenamento temporário de paletes.
Flow rack: Posições dinâmicas que não comportam palete somente caixa destinadas a produtos oriundos de devolução.
Saida de Paletes: Posições com capacidade máxima de 3 paletes por posição dedicadas a saída dos paletes vazios, sendo gerenciadas pelas movimentações do transelevador.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Regra de Avaliações e Movimentações de paletes  
**Score:** — (semantico) | **ID:** a5175e62f55f631e

As movimentações de paletes por parte do WCS ocorrem em 2 equipamentos, BK25 e transelevador [Equipamentos dos processos automatizados] essas movimentações assim como as regras e avaliações que ocorrem durante essas movimentações são premissas independentemente do tipo de OT [Ordem de transporte (OT)] ou reabastecimento [Reabastecimento], dessa forma o processo movimentações realizadas de forma automática seguem uma sequência de regras e avaliações que determinam os destinos do palete que está sendo movimentado.
Para o correto funcionamento do processo de movimentação de paletes existe a colaboração entre os sistemas WCS e PLC, onde através da troca de telegramas entre eles ocorre as tomadas de decisões que resultam nas movimentações dos palete.
Status de Movimentações:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** BK25  
**Score:** — (semantico) | **ID:** 6303f3b7647afe20

Para indicar qual palete deve ser induzido no portal de entrada do BK25 é necessária uma orientação operacional que segue a ordenação das OTs como referência.
Dessa forma no WCS Velox haverá um monitor (Dashboard) informado os paletes que devem ser induzidos no BK25.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Transelevador  
**Score:** — (semantico) | **ID:** dcd7c4227edd9d43

No transelevador temos 2 possibilidades de posições de origem BK25 e Buffer.
Após a confirmação da chegada do palete ao berço de entrada ou a movimentação prioritária no momento é uma movimentação de origem no buffer o WCS disponibiliza a tarefa na lista de movimentações ao transelevador.
O gerenciamento dessa lista e feito de acordo com a prioridade da movimentação (OT), considerando que paletes aguardados em uma onda ativa devem sempre receber prioridade máxima. A ordenação de execução dessas movimentações segue esse critério de prioridade e como critério de desempate vamos avaliar a data de inicialização da onda para casos de movimentações por necessidade e proximidade, ou seja, em caso de empate de prioridade e data e hora de indico da onda, o sistema vai avaliar o plano cartesiano e identificar a posição mais próxima para realizar a movimentação.
Após a seleção de palete que será movimentado o WCS envia o comando de movimentação para retirada do palete ao PLC, que por sua vez faz a verificação se situação da máquina (transelevador) essas situações gerenciam o momento que a máquina se encontra e pode retornar uma resposta positiva que vai executar o movimento, como pode responder uma resposta de erro indicando o motivo do não cumprimento da ordem.
Os motivos de não atendimento são:
Para os casos de erro a máquina (transelevador) com tratativas manuais o equipamento entrará em falha sendo necessário a intervenção do time de manutenção MBRF para avaliar o ocorrido com o equipamento e executar as tratativas necessárias para liberar o equipamento para voltar a movimentar os paletes, o status da movimentação no WCS é atualizada para ERRO.
Para os casos de erro a máquina (transelevador) com tratativas automáticas o equipamento entrará em falha e ao informar ao WCS a falha ele irá atualizar o status da movimentação para ERRO e irá enviar uma nova movimentação para mesa de saída de paletes vazios.
NOTA: Todos os erros de movimentações serão registrados no relatório de log de erros do transelevador.
Como contingência, haverá na tela de ordens de transportes a funcionalidade de confirmação de OT manual, ao selecionar a opção o WCS solicita usuário e senha. Por meio dessa interface, será possível enviar manualmente um TOCO para confirmar uma movimentação virtual que não foi efetivamente realizada fisicamente. Essa funcionalidade será utilizada em cenários onde o movimento não puder ser concluído e a operação optar por tratar o problema internamente, evitando a permanência de OTs pendentes no sistema ou em casos de falha de equipamento onde o palete foi depositado na posição de destino, mas não houve a confirmação da automação (PLC) porém o saldo na posição não será considerado pelo WCS sendo necessário o ajuste pelo SAP via TORD para incorporar o saldo (essa informação deve ser indicada na tela de ordens de transporte no momento da confirmação manual).
Após a liberação do equipamento o PLC envia uma informação de status ao WCS que informara a situação atual do equipamento, informando se o palete ainda está nele ou não, para os casos onde o palete estiver no transelevador o WCS vai solicitar a última movimentação novamente e o status da movimentação para COLETA indicando que o palete está no transelevador em atividade, já para os casos onde o status do PLC vier sem o palete na máquina o status da movimentação desse transelevador é atualizado para ANALISE e o WCS escolhe outra movimentação para o transelevador executar.
Para o cenário positivo sem erros o PLC informa ao WCS que irá realizar a movimentação do palete e o status da movimentação é alterado para COLETA.
Após a conclusão do movimento de retirada do palete o PLC envia a confirmação de conclusão da movimentação de retirada do palete na posição de origem e com isso o WCS envia a tarefa de deposito do palete para posição de destino alterando o status da movimentação para DEPOSITO.
Para o processo de deposito os cenários de erros são os mesmo para o processo de retirada do palete na posição de origem.
Após a confirmação do PLC do deposito do palete na posição de destino ocorre a alteração do status da movimentação FINALIZADA e o WCS disponibiliza o saldo do palete para coleta atualiza o status da OT para CONFIRMADA envia o IDOC TOCO de confirmação ao SAP.
Exemplo que IDOC TOCO (WCS  SAP) [Confirmação de OT (TOCO)]:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Buffer para Canal de Picking dinâmico  
**Score:** — (semantico) | **ID:** 17662b5e3fe9c810

Movimentação de um palete saindo de uma posição de buffer (AA) para uma posição de picking automatizada, onde ao receber o TORD vindo do SAP o WCS cria uma movimentação no transelevador para retirar o palete da posição de origem.
Após a execução de retirada do palete na posição de origem o WCS envia o comando de depósito de palete na posição de destino e após a confirmação de deposito o WCS Velox envia o TOCO de confirmação ao SAP. [Transelevador]
Para os casos de cancelamento ou estorno de OT o IDOC CATO será disparado do SAP ao WCS que por sua vez inicia os processos de validação de integração e em caso de sucesso o WCS retornara um CATO de confirmação de estorno ao SAP e elimina da fila de execução a movimentação do palete.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Estoque  
**Score:** — (semantico) | **ID:** 80401b0a0db32c31

Após as movimentações e confirmações de OTs o WCS tem disponível para o seu gerenciamento os paletes com seus lotes e saldos disponíveis.
Para ter controle e visibilidade o Velox apresentara uma tela com as informações de estoque, posição, sku, lote, quantidade de caixas, peso, percentual de shelf, palete (UD), sequência, bloqueio de posição, quantidade reservada, quantidade prevista, data de fabricação, data de vencimento, tipo de posição, temperatura, tipo de deposito e ativo.
Podem ocorrer necessidades de bloqueio de posições por vario motivos para isso temos o IDOC de bloqueio de saldo em estoque, que quando recebido pelo WCS faz o bloqueio de toda posição de coleta.
Tanto bloqueio como o desbloqueio são realizados através do IDOC TORD com uma diferença nos campos a serem avaliados, nesse cenário não é feita avaliação de posições ou de produtos e seus saldos, uma vez identificado que a integração se trata de um bloqueio de posição o WCS realiza o bloqueio da posição, porém as tarefas de coleta já geradas serão realizadas normalmente.
NOTA: Todas as posições bloqueadas são excluídas da seleção de lote, ou seja, todo saldo bloqueado é ignorado pelo WCS no momento de selecionar os lotes e posições para coleta, qualquer palete que esteja em processo de abastecimento para uma posição bloqueada não poderá ser usado como abastecimento de necessidade, o saldo deverá ser ignorado também
Os TORDs de bloqueio e desbloqueio serão enviados com a tag <TRART>U</TRART>, sempre com o valor fixo “U”.
Para bloqueio, a tag <BESTQ> será sempre enviada e conterá algum valor, sendo que qualquer conteúdo presente nessa tag deve ser interpretado como indicativo de bloqueio.
Para desbloqueio, a tag <TRART>U</TRART> também será enviada; entretanto, a tag <BESTQ> não estará presente na mensagem.
O desbloqueio sempre será realizado por lote/palete, ou seja, se uma única caixa de um lote estiver bloqueada na posição, toda a posição se mantem bloqueada até que não tenha nenhum lote com bloqueio na posição.
Estrutura do IDOC de Bloqueio de Posição
SAP > VELOX

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Crosscheck Ligado  
**Score:** — (semantico) | **ID:** a523527737cb68a4

O WCS espera receber do portal os dados de ambas as etiquetas (material e expedição).
Skus coincidem: Volume segue para a rampa de destino conforme informações da etiqueta de expedição.
Skus divergem: Volume rejeitado por falha de crosscheck.
NoRead em qualquer etiqueta: Volume entra em recirculação. Após esgotar tentativas, é rejeitado.
Com o crosscheck ligado, a rastreabilidade individual do volume é completa.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** f7a37c22ae04edbc

En el proceso de CrossDocking, la operación informa al palé recibido, junto con sus respectivos volúmenes, para que se desvíen correctamente en el sorter. En este escenario, el WCS tampoco interfiere con la orden de inducción.
El operador debe acercar el palé a un área de inducción de la automatización y continuar con los procesos de inducción en el lado del WMS.
El WCS agrupará los volúmenes del proceso CrossDocking y del proceso de Picking en una única posición PTL, segregando solo por tienda, categoría de producto (Alimentos/No Alimentos) y, si es necesario, tipo de envase tratado de manera eficiente y organizada, con la debida priorización en las posiciones de los PTLs, sin comprometer el flujo de las operaciones estándar.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** bb01a5991b2055d7

En el proceso de CrossDocking, la operación informa el palé recibido, junto con sus respectivos volúmenes, para que sean desviados adecuadamente en el sorter. En este escenario, el WCS tampoco interfiere en el orden de inducción.
El operador deberá llevar el palé cerca de una zona de inducción de la automatización y continuar con los procesos de inducción del lado del WMS.
El WCS agrupará los volúmenes procedentes del proceso de CrossDocking y del proceso de Separación en una única posición de PTL, segregándolos únicamente por categoría de producto ( Alimenticio/No Alimenticio ) y, si es necesario, por Tipo de Embalaje, tratados de manera eficiente y organizada, con la debida priorización en las posiciones de PTL, sin comprometer el flujo de las operaciones estándar.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** a192a6039722f86f

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus respectivos volumes, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS também não interfere na ordem de indução.
O operador deverá levar o pallet próximo a uma área de indução da automação e seguir com os processos de indução do lado do WMS.
O WCS agrupará os volumes provenientes do processo de CrossDocking e do processo de Separação em uma única posição de PTL, segregando apenas por Loja, categoria do produto (Alimentício/Não Alimentício) e se necessário Tipo de Embalagem tratados de maneira eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo das operações padrão.

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** 13a69cdc0947c5c6

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus respectivos volumes e devidamente integrados no sistema, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS também não interfere na ordem de indução.
O operador deverá levar o pallet próximo a uma área de indução da automação e seguir com os processos de indução do lado do WMS.
O WCS agrupará os volumes provenientes do processo de CrossDocking e do processo de Separação, segregando apenas por Loja, categoria do produto (Alimentício/Não Alimentício) e se necessário Tipo de Embalagem tratados de maneira eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo das operações padrão.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Objetivo do Projeto  
**Score:** — (semantico) | **ID:** 9cd9a169ab8dc840

O projeto tem como objetivo a automação dos processos de expedição do Centro de Distribuição da Vedamotors em Navegantes/SC. A operação é caracterizada exclusivamente como CD de Distribuição (sem vínculo fabril no local), operando com recebimento de transferência e expedição fracionada e full case.
O sistema WCS Velox será responsável por orquestrar o fluxo de caixas, integrar com o WMS Spark e controlar os equipamentos de automação (PLC, PTL, Balanças e Sorter), garantindo a separação por curvas de giro e a consolidação final por transportadora.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Conceito de Túnel e Zonas  
**Score:** — (semantico) | **ID:** 0de920cd5a048e8d

A linha de automação atravessa as zonas de armazenagem (Térreo e Mezanino). O WCS envia a caixa de transporte (Tote) apenas para as zonas onde há itens a serem coletados.
Skip Zone: Se um pedido não contém itens no Mezanino — entendendo-se como itens tanto das posições de frente (flow rack) quanto das costas (fracionado G/M/P e fullcase), a caixa será induzida diretamente no Order Start Térreo, otimizando o tempo de ciclo.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** a1232396b24122f3

ESPECIFICAÇÃO DE SOFTWARE
Projeto CDSK
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Tela Tratativas de Pallets Rejeitados.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 700f47a31fd7bba0

ESPECIFICAÇÃO DE SOFTWARE
Tela de Pallets Rejeitados Projeto CDSK
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I23.125] ADITIVO — `I23.125 - PROJETO CRISTAL -  SP e MG - ESPECIFICAÇÃO DE ADITIVO FRACIONADOS.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 68034e9306dc8568

ESPECIFICAÇÃO DE SOFTWARE
PROJETO CRISTAL – ADITIVO - FRACIONADOS
I25.125 Cristal – 23/10/2025
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I23.125] ADITIVO — `I23.125 - PROJETO CRISTAL -  SP e MG - ESPECIFICAÇÃO DE ADITIVO FULL CASE.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** aad7a3234b379c08

ESPECIFICAÇÃO DE SOFTWARE
PROJETO CRISTAL – ADITIVO – FULL CASE
I23.125 Cristal – 23/10/2025
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 95dbef488d441138

ESPECIFICAÇÃO DE SOFTWARE E HARDWARE
PROJETO ESPERANÇA
Agradecemos antecipadamente pela oportunidade e nos colocamos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Comportamento Visual das Barras  
**Score:** — (semantico) | **ID:** 055abe259c069e5a

As barras de progresso serão atualizadas em tempo real conforme os volumes são processados pelo sorter e recebidos na rampa:
Barra de Pendentes: representará o percentual de volumes ainda aguardando recebimento. A barra diminui conforme os volumes são finalizados.
Barra de Finalizados: representará o percentual de volumes já recebidos e confirmados. A barra aumenta conforme os volumes são processados.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ MANHATTAM - Tradução AU06 - Pack ILPN Message.docx`  
**Heading:** Validações  
**Score:** — (semantico) | **ID:** 89b064f3126dec89

SE (IF) – Evento de mensagem MHE PACK ILPN.
E (AND)
inventário do item em “SourceLocationId.PickAllocationZoneId.Zones.AU01PBLZone=True,
Extended.EXT_ASN não é nulo,
ENTÃO (THEN)
❖ WM empacota o iLPN.
❖ WM realiza o Putaway do iLPN
SENÃO (ELSE)
ENTÃO (THEN)
❖ WM não empacota o iLPN.

---
**Origem:** [I17.112] 2021 — `I17.112 - ESPECIFICACAO DE SOFTWARE - PROJETO  DIAMANTE- Adicional PTL Larrus rev3.docx`  
**Heading:** Configurações necessarias.  
**Score:** — (semantico) | **ID:** 43d7031c72b23499

Para o correto funcionamento dos endereçamentos dos PTLs voltados a Larrus o time operacional da Hinode deve realizar os cadastros de UFs faltantes e criar as regiões que irão atender cada UF dentro do MFC assim garantindo que todas as regiões informadas na tela de Onda Larrus estejam condizentes as regiões vinculadas ao PTL.

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Cenário Proposto (desejado)  
**Score:** — (semantico) | **ID:** be6557e92ace316f

Manter o cenário atual e incluir uma integração do MFC com o Protheus para recebimento do emitente Máxima (que podemos identificar como Larrus) e para essa integração o MFC deverá decidir o que deverá ser separado na linha específica Larrus Full e Larrus Pallet (os pedidos da Larrus, não podem ser separados nas mesmas linhas utilizadas pela Máxima e Objetivo). Essa separação deve retornar para o Protheus.
Informações importantes:
- Considerar infra atual do CD reativando esteiras paradas;

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE REV.1 - ZENATUR.docx`  
**Heading:** Alterações posições de buffer  
**Score:** — (semantico) | **ID:** 58d409e9f2a73118

MFC deve adotar a mesma lógica de armazenamento do mezanino no buffer.
Atualmente a operação encontra muitos problemas com materiais não cabendo no buffer. Utilizando a mesma lógica do mezanino, isso deve parar de ocorrer.
Deve ser desenvolvido um parâmetro de quantidade de pedidos por posições buffer diferente do mezanino. Atualmente esse parâmetro é o mesmo para as duas posições, e devem ser separados.
Ponto de atenção:
Necessário rever a alocação e os espaços referente a lógica do buffer.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO BANCO DE DADOS - Rev1.docx`  
**Heading:** TABELAS  
**Score:** — (semantico) | **ID:** 3cd9edc60f202e63

Objetos responsáveis pelo armazenamento das informações no banco de dados.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Mapa de endereçamento dos produtos (PICKMAP)  
**Score:** — (semantico) | **ID:** 052b69f3bdb45841

WMS  MFC
O WMS irá disponibilizar o arquivo de integração via webservice com as informações relativas à localização (endereço) dos produtos. O sistema MFC recebe as informações do mapeamento dos endereços de produtos e as processa para que os usuários realizem a consulta do mapa de produtos e atrele destino as caixas de acordo com os itens que há dentro da caixa. Pode conter 1 ou mais endereços de produtos por integração.
Dúvida: o operador que atrela as caixas a um destino? Que destino? Do PLC ou de picking?
Não entendi essa parte.
Após o processamento de todo arquivo de PICKMAP o MFC passa a direcionar as caixas de acordo com o novo mapeamento.
EV;1850;WMS;20230621115347;WMS;20230621115347;ADD;ARTICLE;01;
PR;1850;79224;2020A307020403;
PR;1850;79224;2020A207020403;
PR;1850;79224;2020A107020403;
PR;1850;1029781;2020B217050101;
PR;1850;1029781;2020B317050101;
PR;1850;1029781;2020B117050101;
PR;1850;1063965;2120C115060302;
PR;1850;1086761;2120C102100205;
PR;1850;1090884;2020B301030104;
PR;1850;1090884;2020B201030104;
PR;1850;1090884;2020B101030104;
PR;1850;1117983;2020B306030101;
PR;1850;1117983;2020B106030101;
PR;1850;1117983;2020B206030101;
PR;1850;1119980;2120C107020102;
Se conseguir detalhar o que é cada campo, por exemplo:

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Linhas A1, A2 e A3 - Picking by ligth e Picking by monitor  
**Score:** — (semantico) | **ID:** 45ea0ce673e6bdc2

Nessas linhas temos o conceito de linhas espelhadas onde temos os mesmos produtos nas mesmas posições das 3 linhas e o endereçamento de picking ocorre na primeira estação de cada uma das 3 linhas.
O picking frente será composto dos conceitos PBL (PICINKG BY LIGTH) e PBM (PICKING BY MONITOR), já no picking costa será como na linha, somente PBM.
A caixa irá passar em frente ao scanner fixo na linha e irá receber a leitura, esses scanners fixos estão conectados diretamente no PBM e funcionam como um coletor de mão, em caso em que temos o NOREAD (a não leitura) nos scanner fixos o operador deve pegar o coletor manual (Responsabilidade do cliente) e realizar a leitura da caixa.
Após a leitura da caixa se o picking for realizado nos endereços a frente do operador, acenderam os leds e nos displays indicaram a quantidade de produtos a serem pegos, em casos de picking nas costas o PBM irá acender com uma cor diferente e as informações de endereço de picking como ocorre na linha C.
Ao finalizar a caixa os todos os leds da estação acenderam na cor verde para informar o fim da separação para aquela caixa na estação.
O WCS envia a mensagem de CTRL para o PLC liberar a caixa para próxima estação.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Mapa de endereçamento dos produtos (PICKMAP)  
**Score:** — (semantico) | **ID:** 81b35fc80c265e35

WMS  WCS
O WMS irá disponibilizar o arquivo de integração via webservice com as informações relativas à localização (endereço) dos produtos. O sistema WCS recebe as informações do mapeamento dos endereços de produtos e as processa para que os usuários realizem a consulta do mapa de produtos e atrele destino as caixas de acordo com os itens que há dentro da caixa. Pode conter 1 ou mais endereços de produtos por integração.
Após o processamento de todo arquivo de PICKMAP o WCS passa a direcionar as caixas de acordo com o novo mapeamento.
EV;1850;WMS;20230621115347;WMS;20230621115347;ADD;ARTICLE;01;
PR;1850;79224;2020A307020403;
PR;1850;79224;2020A207020403;
PR;1850;79224;2020A107020403;
PR;1850;1029781;2020B217050101;
PR;1850;1029781;2020B317050101;
PR;1850;1029781;2020B117050101;
PR;1850;1063965;2120C115060302;
PR;1850;1086761;2120C102100205;
PR;1850;1090884;2020B301030104;
PR;1850;1090884;2020B201030104;
PR;1850;1090884;2020B101030104;
PR;1850;1117983;2020B306030101;
PR;1850;1117983;2020B106030101;
PR;1850;1117983;2020B206030101;
PR;1850;1119980;2120C107020102;

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Linhas A1, A2 e A3 - Picking by ligth e Picking by monitor  
**Score:** — (semantico) | **ID:** 87f6d49c3a4c72e2

Nessas linhas temos o conceito de linhas espelhadas onde temos os mesmos produtos nas mesmas posições das 3 linhas e o endereçamento de picking ocorre na primeira estação de cada uma das 3 linhas.
O picking frente será composto dos conceitos PBL (PICINKG BY LIGTH) e PBM (PICKING BY MONITOR), já no picking costa será como na linha, somente PBM.
A caixa irá passar em frente ao scanner fixo na linha e irá realizar a leitura, esses scanners fixos estão conectados diretamente no PBM e funcionam como um coletor de mão, em caso em que temos o NOREAD (a não leitura) nos scanners fixos o operador deve pegar o coletor manual (Responsabilidade do cliente) e realizar a leitura da caixa.
Após a leitura da caixa se o picking for realizado nos endereços a frente do operador, acenderam os leds e nos displays indicaram a quantidade de produtos a serem pegos, em casos de picking nas costas o PBM irá acender com uma cor diferente e as informações de endereço de picking como ocorre na linha C.
Ao finalizar a caixa os todos os leds da estação acenderam na cor verde para informar o fim da separação para aquela caixa na estação.
O WCS envia a mensagem de CTRL para o PLC liberar a caixa para próxima estação.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 8636ec28244091c7

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema Sequoia/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do WCS necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 5ad648a43ece76fe

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema Sequoia/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do WCS necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 2e29861363439cf4

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema Sequoia/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do WCS necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.131] 2022 — `- Layout Novo - I21.131 - ESPECIFICACAO DE HARDWARE - PMB REV1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** a76df8a72c3db04a

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as rotas das caixas e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema SAP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do MFC necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco)
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE HARDWARE - REV1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** dc60cab525ee85a7

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as rotas das caixas e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema SAP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do MFC necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco)
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I21.131] 2022 — `I22.2505_-_ESPECIFICACAO_DE_SOFTWARE_-_PHILIP_MORRIS_REV1.docx`  
**Heading:** Testes de Integrações  
**Score:** — (semantico) | **ID:** 9187d26748d158e6

-Validação da conectividade e integração com outros sistemas do cliente;
-Validar EndPoints para recebimento e retornos entre os sistemas;
-Validar recebimento de envio de volume (eWM -> MFC)
-Validar retorno da integração “Confirmação de Picking” (MFC -> eWM)

---
**Origem:** [I21.167] 2022 — `I21.167 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV.5.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 046014b61c3db41c

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenara em uma base de dados, tendo como papel fundamental a interface entre o sistema WMS do cliente e automação chão-de-fábrica INVENT.
A aplicação do MFC necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente.
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Dessa forma, se faz necessário o uso de um navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 9d3e2436b843b21f

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema Sequoia/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do WCS necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 5c3e5e8b71d39cb4

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema Sequoia/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do WCS necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 65f4f1a1032e2e27

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema Sequoia/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do WCS necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 91fb36ee01380ec7

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do WCS necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente.
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)
Obs.: O sistema INVENT receberá as informações de todos os pedidos do cliente, incluindo os pedidos da POLLUX. Neste caso o sistema INVENT será o responsável pelo gerenciamento e controle dos pedidos POLLUX e sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** bd44ef9d2f5a395b

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema Sequoia/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do MFC necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco)
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 5891b715f585bd6e

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema JDA/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do WCS necessita de um banco de dados para o correto armazenamento e gerenciamento das informações.
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)
Obs: O sistema INVENT receberá as informações de todos os pedidos do cliente, incluindo os pedidos da POLLUX. Nessa primeira fase, WCS será o responsável por devolver informações de aferição do cubometro/sorter ao JDA/WMS do cliente.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 6dc5833d22b765f0

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do MFC necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente.
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)
Obs: O sistema INVENT receberá as informações de todos os pedidos do cliente, incluindo os pedidos da POLLUX. Neste caso o sistema INVENT será o responsável pelo gerenciamento e controle dos pedidos POLLUX

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 92bc06fcbbd6088e

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do WCS necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente.
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)
Obs.: O sistema INVENT receberá as informações de todos os pedidos do cliente, incluindo os pedidos da POLLUX. Neste caso o sistema INVENT será o responsável pelo gerenciamento e controle dos pedidos POLLUX e sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE(RASC) - FASE.1 VER.1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 05f9b33975d4defd

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema Sequoia/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do MFC necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco)
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** beeeb8fa704763b0

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as rotas das caixas e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação do WCS necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 290a48e90f214a65

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 637a9eea976d5207

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, está aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Indução volumes – Recebimento  
**Score:** — (semantico) | **ID:** 8d390c003f360255

No ponto de indução para recebimento, o operador irá induzir os produtos nesse trecho, os volumes irão subir e teremos os 3 níveis (andares) para distribuição. Em cada nível teremos sempre um ponto de armazenamento e um ponto de expedição, onde tem a transferência é o ponto de armazenamento (somente no térreo teremos 2 pontos de expedição e um de armazenamento).
Na integração, a partir da etiqueta (RFID) que haverá na caixa ou no produto caso fracionado, o sistema recebe a informação de qual nível os volumes serão desviados.
Será determinado onde o pacote será desviado a partir da etiqueta (RFID).
Em caso de produtos fracionados ou noRead, os produtos serão sempre direcionados para o térreo.

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 7b4b6c0e0d984f05

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Calçados Beira Rio (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 1c604a9d78315589

O proposito principal do projeto é criar uma solução WCS Velox para o gerenciamento do armazém automatizado da BR Foods localizado em Rio Verde – Goiás.
O WCS Velox será o sistema responsável por gerenciar a movimentação dos transportadores e transelevadores desse armazém. Essa movimentação será baseada nos pedidos de entrada e saída vindos do ERP (SAP) juntamente com o estado atual do armazém e dos equipamentos.
Para o correto funcionamento do WCS Velox, é necessária uma aplicação que será responsável pelo gerenciamento das informações e dos equipamentos, ou seja, esta aplicação terá como papel fundamental a interface com o sistema SAP.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e SAP através de interface Web (JSON Rest.).
Em cada estação de trabalho, se faz necessário o uso de um navegador web padrão (Google Chrome).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF1 – Recebimento de pallets  
**Score:** — (semantico) | **ID:** 24bb60b9cb320e31

O WCS Velox deve realizar tratamento dos pallets entrantes no portal de identificação de pallets designando o destino do pallet para uma das seguintes posições:
Mesa de entrada, em caso de rejeição de pallet;
Berço de entrada dos transelevadores, a partir dos portais de identificação dos níveis inferior e superior do armazém;
Mesa de saída, a partir dos portais de identificação do nível inferior do armazém.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF1.1.1 – Tipo de conservação  
**Score:** — (semantico) | **ID:** 82f1738ad7ed4a57

O WCS Velox deve segregar os pallets entrantes por tipo de conservação do cadastro de produtos (congelado ou resfriado) para verificar a disponibilidade de posição para armazenamento.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF1.1.2 – Tipo de pallet  
**Score:** — (semantico) | **ID:** 0d1668e5368cc219

O WCS Velox deve segregar os pallets entrantes por tipo (normal ou estendido) para verificar a disponibilidade de posição para armazenamento.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF1.2 – Rejeito de entrada no armazém  
**Score:** — (semantico) | **ID:** a0d6da2f9cfce1cf

O WCS Velox deve rejeitar um pallet para a mesa de entrada após validar as características dimensionais do pallet e peso (recebidas do PLC) e o recebimento de ordem de entrada (recebida do SAP WM) para o pallet entrante.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF1.2.1 – Pallets repetidos  
**Score:** — (semantico) | **ID:** b07739e9ebb68303

O WCS Velox deve rejeitar pallets entrantes cujo código já esteja atribuído a um pallet dentro do armazém.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF1.2.2 – Disponibilidade de transelevadores  
**Score:** — (semantico) | **ID:** a8974971d2d7784b

O WCS Velox deve rejeitar pallets entrantes que não possuam transelevadores disponíveis (seguindo tipo de conservação) para armazená-los.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF1.3 – Crossdocking de entrada  
**Score:** — (semantico) | **ID:** 38d4ddf32ceaa573

O WCS Velox deve ser capaz de realizar Crossdocking de pallets entrantes. Para isso, deve priorizar os movimentos da seguinte maneira:
Reabastecimento de picking;
Expedição;
Armazenamento.
Nota: Crossdocking é uma otimização realizada para atendimento de uma ordem de saída pendente com um pallet entrando no sistema, antes mesmo de armazená-lo.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF1.3.1 – Status do pallet  
**Score:** — (semantico) | **ID:** ffe950447242c1b2

Pallets com status “Bloqueado” no SAP WM não podem ser sujeitados ao processo de Crossdocking. Esses devem ser armazenados.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF1.3.2 – Tolerância de Crossdocking  
**Score:** — (semantico) | **ID:** c5abae89c9cb3039

O WCS Velox deve aplicar uma tolerância (em dias) para a aplicação da regra de Crossdocking. Esta tolerância implica que o pallet entrante pode atender uma ordem de saída excedendo a regra de FEFO pelo úmero de dias especificados na tolerância.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF2 – Armazenagem de pallet  
**Score:** — (semantico) | **ID:** 5ef1ad8c4ef40278

O WCS Velox deve ser capaz de coordenar o processo de armazenamento de pallet nas células dos transelevadores.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF2.1 – Evento de sucesso ao armazenar  
**Score:** — (semantico) | **ID:** 300c23e6832f9c50

O WCS Velox deve ser capaz de interpretar o evento de armazenamento (recebido junto com o identificador da carga pelo PLC do transelevador) e confirmar o armazenamento do pallet internamente.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF2.2 – Evento de erro ao armazenar  
**Score:** — (semantico) | **ID:** 2386be17913b4758

O WCS Velox deve ser capaz de interpretar o evento de erro de armazenamento (recebido junto com o identificador da carga pelo PLC do transelevador) e registrar a causa do erro, bloqueando se necessário a célula na qual o erro ocorreu.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF2.2.1 – Célula ocupada  
**Score:** — (semantico) | **ID:** daa89b1ccb186ba4

O WCS Velox deve tratar eventos de célula bloqueada.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF2.2.2. – Erro de sensor / posicionamento  
**Score:** — (semantico) | **ID:** ecce293511c11d23

O WCS Velox deve tratar eventos de célula com erro de posicionamento ou sensoriamento.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF2.3 – Realocação de entrada  
**Score:** — (semantico) | **ID:** b347d12b53d01890

Em caso de erro ao armazenar, o WCS Velox deve procurar outra célula para armazenamento e informar o transelevador. Caso não exista nova célula para armazenagem, o WCS Velox deve retirar o pallet do transelevador e fazê-lo recircular (ou enviar para o próximo ponto de decisão).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF3 – Retirada de pallets  
**Score:** — (semantico) | **ID:** e7897367dc83cf87

O WCS Velox deve ser capaz de orquestrar a retirada de pallets do armazém.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF3.2 – Retirada com fracionamento de pallet  
**Score:** — (semantico) | **ID:** d05dc104129ee2e2

O WCS Velox deve ser capaz de orquestrar a retirada de pallets com fracionamento do armazém (sem fracionamento). Nesse caso, deve ser capaz de armazenar novamente a sobra de fracionamento (pallet fracionado) no armazém sem a necessidade de nova ordem de entrada de pallet do SAP WM.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF3.3 – Confirmação de retirada de pallets  
**Score:** — (semantico) | **ID:** f06dc0b132e292b8

O WCS Velox deve enviar confirmação de retirada de pallet do armazém para o SAP WM.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF3.5 – Evento de erro ao retirar  
**Score:** — (semantico) | **ID:** ad8d056ab8ef8568

O WCS Velox deve ser capaz de interpretar o evento de erro ao retirar pallets e registrar a causa do erro, bloqueando se necessário a célula na qual o erro ocorreu.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF3.5.1 – Célula vazia  
**Score:** — (semantico) | **ID:** 7a0a6f3829744301

O WCS Velox deve tratar eventos de célula vazia.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF3.5.2 – Erro de sensor/posicionamento  
**Score:** — (semantico) | **ID:** fe4e939819d5dd6b

O WCS Velox deve tratar eventos de célula com erro de posicionamento ou sensoriamento.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF5 – Sincronização de ciclo de entrada e saída  
**Score:** — (semantico) | **ID:** 27140b79e1dbccd8

O WCS Velox deve balancear ciclo de entrada e saída de pallets nos transelevadores.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7 – Algoritmo de escolha de célula para armazenagem  
**Score:** — (semantico) | **ID:** 33ce8ddd9286d2e3

O WCS Velox deve calcular a melhor célula para armazenagem segundo um algoritmo de armazenagem bem definido.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.1 – Sazonalidade  
**Score:** — (semantico) | **ID:** 1ba12d59369c8a5b

O WCS Velox deve considerar a presença de sazonalidade num produto quando da escolha da melhor célula para armazenagem. Caso o produto do pallet sendo armazenado possua sazonalidade e este esteja em baixa estação, deve ser armazenado nas células mais distantes do transelevador.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.2 – Distribuição de produtos  
**Score:** — (semantico) | **ID:** 9b4e6795f16b0a36

O WCS Velox deve considerar a distribuição de produtos e lote de produtos entre transelevadores em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.4 – Utilização dos transelevadores  
**Score:** — (semantico) | **ID:** 0a5dc442b4f3ef9c

O WCS Velox deve considerar a distribuição do uso dos transelevadores em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.5 – Pulmão de entrada  
**Score:** — (semantico) | **ID:** 387ea112235007ff

O WCS Velox deve levar em consideração a capacidade dos pulmões de entrada dos transelevadores em seu algoritmo de armazenagem. Corredores cuja capacidade tenha sido atingida devem ser excluídos ao se escolher a célula de armazenagem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.6 – Carga acumulada por coluna  
**Score:** — (semantico) | **ID:** 697b80b03033d79a

O WCS Velox deve considerar a carga (peso) acumulada por coluna em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.7 – Disponibilidade dos transelevadores  
**Score:** — (semantico) | **ID:** 0ba66ad8853ed5b0

O WCS Velox deve considerar a disponibilidade dos transelevadores em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.9 – Tipo de conservação  
**Score:** — (semantico) | **ID:** 256df187f2165715

O WCS Velox deve segregar os pallets entrantes por tipo de conservação do cadastro de produtos (congelado ou resfriado) para considerar somente os corredores do tipo de conservação em questão em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.10 – Distância de armazenagem  
**Score:** — (semantico) | **ID:** 10e7610fb99fef99

O WCS Velox deve considerar a distância relativa à entrada do transelevador em seu algoritmo de armazenagem. Pallets sem sazonalidade ou em alta estação tem priorizadas as células mais próximas a entrada.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.11 – Controlar capacidade dos corredores de entrada  
**Score:** — (semantico) | **ID:** 28fb7554b9affc6c

O WCS Velox deve ser capaz de controlar a capacidade dos corredores de entrada dos transelevadores (ocupação sinalizada pelo PLC dos transelevadores). O WCS Velox deve parar de enviar pallets para um lado do transelevador quando a capacidade máxima do corredor de entrada dele for atingida.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF8.1 – Tipo de ordem de retirada  
**Score:** — (semantico) | **ID:** fb74c6d054e1ac24

O WCS Velox deve ser capaz de processar diferentemente a saída de pallets segundo o tipo de ordem de entrada proveniente do SAP WM.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF8.2 – Movimentos  
**Score:** — (semantico) | **ID:** b234b7a343a8fc51

O WCS Velox deve ser capaz de aplicar regras especificas para cada tipo de movimento do SAP WM no processamento das ordens de saída de pallets.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF8.2.4 – Venda futura  
**Score:** — (semantico) | **ID:** 582327742724da58

O WCS Velox deve tratar movimentos de venda futura de pallets.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF20 – Gestão de ordens de armazenamento de pallets  
**Score:** — (semantico) | **ID:** f7c487cc5455677b

No WCS Velox deve ser possivel visualizar as ordens de armazenamento que existem no sistema, assim como todos os produtos de cada ordem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF21 – Gestão de ordens de saída de pallets  
**Score:** — (semantico) | **ID:** edb793552e568c38

No WCS Velox deve ser possivel visualizar ar ordens de saída que existem no sistema, assim como todos os produtos de cada ordem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF34 – Criação de zona de armazenagem preferencial  
**Score:** — (semantico) | **ID:** 951466d75f12ca36

O WCS Velox deve permitir a criação de zonas de armazenagem preferencial.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Abreviações  
**Score:** — (semantico) | **ID:** cf842ba97dd2108e

As regras funcionais do WCS estão divididas em três regras distintas:
Regras de Entrada – regras e tratamentos que são aplicados quando o orquestrador identifica a entrada de um pallet novo no armazém;
Regras de Saída – regras e tratamentos que são aplicados quando o orquestrador identifica a necessidade de atender ordens de saída;
Realocação Automática – regras e tratamentos que são aplicados quando o TREL está em modo de realocação automática e o orquestrador identifica a necessidade de processar a realocação de pallets.
A execução das regras implementadas no WCS depende da chamada por parte do orquestrador que é o regente de todas as regras, ele sabe quando cada uma deve ser executada.
Na sequência cada uma das regras será apresentada em detalhes.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Regras de entrada  
**Score:** — (semantico) | **ID:** 8bf83b8035293b2e

A definição das regras funcionais referentes à entrada de pallets no armazém está detalhada neste item do documento.
Na entrada de um pallet, além da orquestração realizada pelo WCS em validar o mesmo no Portal de Entrada, há a aplicação de algumas regras para definir o melhor destino deste pallet, atendendo alguns requisitos definidos pela Brasil Foods de acordo com suas regras de negócio.
Um pallet, ao chegar à entrada do armazém, pode sofrer três tratamentos distintos de acordo com suas características e a situação vigente dos equipamentos e células de armazenamento do armazém. Os tratamentos são os listados abaixo:
Atender alguma ordem de saída;
Realizar o Crossdocking;
Armazenar.
O orquestrador é responsável por definir qual regra deve ser chamada, se será testado a regra de procurar por uma ordem de saída ou crossdocking ou regra de armazenar o pallet.
Na sequência, cada uma dessas regras que podem ser chamadas na entrada de um pallet será apresentada.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Armazenamento  
**Score:** — (semantico) | **ID:** 584dfc07e82ec6ac

A imagem abaixo apresenta as regras para verificar se há uma célula candidata para armazenamento do pallet. Esta regra faz parte da regra de entrada de pallets no caso de identificar a melhor posição para armazenar o pallet no armazém dentre todos os transelevadores disponíveis. O armazenamento pode ser realizado em células de zonas de exportação cadastradas para o produto ou no armazém como um todo.
O algoritmo inicia a busca pelas células candidatas a armazenamento do pallet em questão.
O WCS busca todos os TRELs que estão em funcionamento, que atendam o tipo de conservação e que possuam mesa de entrada disponível.
TREL em funcionamento: status em automático e disponível;
Tipo de conservação: Congelado ou Resfriado;
Mesa de Entrada Disponível: Deve ser inferior ou igual ao número configurado no parâmetro AvailableTablePlaces da tela de configuração de parâmetros do WCS. Para calcular é preciso buscar o número de células com status “Reservado para Entrada” cujos pallets reservados estejam com o status Pallet Location em “ToTranselevatorXEntrance” do nível do TREL em questão, onde X corresponde ao nível do TREL.
Para os TRELs que resultaram da busca é montado a quíntupla TREL, P1, P2, P3, P4;
P1 é o número de missões do TREL.
P2 é a quantidade relativa de produtos deste SKU+Faixa para o corredor atendido pelo TREL comparado ao estoque todo.
P3 é a quantidade relativa de produtos deste SKU+Faixa no corredor atendido pelo TREL comparado ao total de produtos neste corredor.
P4 é a menor/maior distância de uma célula disponível para armazenamento considerando as colunas deste TREL (Excluindo as células das zonas de exportação), ordenando por profundidade z decrescente, depois pela distância crescente/decrescente. P4 contempla a posição no corredor cuja distância é a menor possível e neste cálculo são consideradas as variáveis: altura do pallet, peso do pallet e zona. Caso o produto referente a este pallet tenha alguma relação com determinada zona de exportação criada, esta regra será aplicada para as células pertencentes às zonas de exportação no qual ele pertencer.
Para cada TREL que resultou da pesquisa anterior a quíntupla é montada em uma lista, identificando qual a posição que o TREL atende que possui menor distância para armazenar o pallet. Se o TREL não possuir nenhuma célula disponível ele não entra nesta lista.
Nota: A distância pode ser maior/menor conforme a sazonalidade do produto, ou seja, se for um produto em Baixa Estação será considerada a maior distância de uma célula disponível para armazenamento, porém caso seja um produto de Alta Estação/Normal será considerada a menor distância de uma célula disponível para armazenamento.
Se a lista estiver vazia significa que nenhum TREL está disponível ou possui célula disponível para o armazenamento. Neste caso se o pallet estiver em um ponto de decisão ele deve ser direcionado para circular até o próximo ponto de decisão para aguardar disponibilidade do transelevador/células ou deve ser rejeitado caso se encontre em um portal de entrada.
Uma mensagem deve ser enviada ao PLC para informar que o destino do pallet deve ser o próximo ponto de decisão ou para informar que o pallet deve ser rejeitado.
Caso o produto do pallet que está sendo processado tenha relação com alguma zona de exportação, ele irá verificar o cadastro do produto para identificar a ação que será tomada, poderá executar as duas ações:
Verificar a possibilidade de armazenar em outro local do armazém, desconsiderando a zona de exportação definida e executar a regra de armazenamento novamente;
Atualizar a localização do pallet para ‘Rejeitado’ e registrar no sistema o motivo do rejeito “Não há células disponíveis na zona de exportação definida para o Produto”.
Caso a lista possua pelo menos um TREL, o algoritmo de cálculo de melhor lugar (BP) é chamado para decidir de todos os TRELs com suas células escolhidas qual é a melhor posição para armazenar o pallet. As regras do algoritmo BP estão descritas na seção 4.1.3 Best Place - BP. O algoritmo retorna como resultado a quíntupla do TREL que foi escolhida como melhor posição.
Com o resultado do algoritmo BP, o WCS seta o status do Pallet Location para “ToTranselevatorXEntrance”, onde X é o nível do TREL, indicando que o pallet está se direcionando para o berço de entrada do TREL.
O status da célula escolhida pelo algoritmo é alterado para “Reservado para Entrada”.
O pallet deve ser direcionado para a entrada do TREL escolhido pelo algoritmo BP.
Uma mensagem deve ser enviada ao PLC para informar que o destino do pallet deve ser o berço de entrada do TREL escolhido.
Assim, as regras de armazenamento definem para onde o pallet deve ser direcionado, seja para o berço de entrada do TREL que possui a melhor posição ou para o próximo ponto de decisão caso haja indisponibilidade de TREL ou de células de armazenamento.
Caso o pallet esteja em um ponto de decisão, e há uma célula previamente reservada para entrada ele terá seu status alterado para vazia e uma nova célula será calculada para este pallet.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Detalhes de Crossdocking  
**Score:** — (semantico) | **ID:** 8344b1e59a427587

A regra de Crossdocking é utilizada para avaliar se há algum pallet armazenado disponível para o Crossdocking com o pallet que está entrando. O Crossdocking é a troca de um pallet que estava reservado para saída pelo pallet que está entrando no armazém, desde que este pallet atenda aos mesmos requisitos da ordem que reservou o pallet do armazém para saída. Os requisitos da ordem que deve atender são:
SKU – Mesmo produto;
Faixa – Dentro da mesma faixa de validade solicitada na ordem;
Centro – Mesmo centro de custo do SAP.
Existem outras regras que devem ser checadas para habilitar o pallet que está entrando a fazer o crossdocking com o que estava reservado para saída. A imagem abaixo mostra as regras que regem o crossdocking.
O WCS busca uma lista com todos os pallets que estão reservados para saída no armazém atendendo aos seguintes filtros:
Os pallets devem estar reservados para ordens NT;
Pallets devem ser para movimentos de expedição ou transferência (não podem ser de reabastecimento);
Os pallets são ordenados pela ordem de validade.
A lista de pallets é filtrada novamente, restando apenas os pallets cujas ordens possam ser atendidas pelo pallet que está entrando, ou seja, que possua mesmo SKU, faixa e centro.
Para o pallet que está entrando poder substituir um que já estava reservado também é necessário que a diferença entre as datas de expiração de ambos os pallets esteja dentro de uma tolerância configurada no WCS.
Se a lista resultante tiver pelo menos um item, o primeiro item da lista é o que será retornado, identificando com qual pallet armazenado ocorrerá o crossdocking. Se a lista estiver vazia significa que o pallet que está entrando não pode fazer crossdocking com nenhum que esteja armazenado.
* Existe uma tolerância, em dias, que pode ser especificada no sistema para a realização do crossdocking quando da determinação da faixa (valor padrão é zero dias).
** Só é possível realizar crossdocking de movimentos de expedição (WMTOCO para o SAP), porque a confirmação dos movimentos de reabastecimento deve ocorrer no momento da reserva do pallet para saída.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Regras de saída  
**Score:** — (semantico) | **ID:** 76661615026161af

A definição das regras funcionais referentes à saída de pallets do armazém está detalhada neste item do documento. A escolha dos pallets para saída está diretamente ligada com a ordem de saída enviada pelo SAP, para cada ordem de saída será escolhido o melhor pallet que atende esta ordem.
O tratamento das ordens de saída está dividido de acordo com o tipo de movimento requerido pelo SAP. Para cada um destes movimentos há um tratamento particular a ser dado pelo WCS, considerando regras específicas para o movimento. Os seguintes tipos de movimentos estão previstos:
Expedição – Venda de itens (Venda Campo/Venda Direta);
Transferência de Pallet – Transferência entre centros de distribuição e varia de acordo com a quantidade de itens ou peso dentro do pallet;
Completo – Todo o pallet é considerado;
Incompleto – Apenas alguns itens são considerados, o pallet é fracionado.
Reabastecimento – Abastecimento de alguma área, como por exemplo, a área de picking. O reabastecimento é dividido de acordo com a rotatividade do SKU.
Baixo Giro – produtos que saem com baixa frequência do armazém;
Médio Giro – produtos que saem com média frequência do armazém.
A seguir são listadas algumas regras e conceitos gerais a serem considerados em qualquer tipo de movimento de saída, na sequência será apresentado o fluxo de regras que rege todo o processo de saída de pallets.
As ordens de saída serão processadas uma a uma, procurando pelo melhor pallet que a atenda e, ao encontrar, configurá-lo para processar sua saída.
Cada ordem possui o tipo de movimentação, o SKU, faixa e a quantidade requerida. Assim, o pallet que atenderá a ordem deverá possuir as mesmas características, além de atender a outras validações que variam com o tipo de movimento. A quantidade a ser considerada varia de um SKU para outro, no WCS está definido se o item será contado em unidades ou em peso variável, para este último há uma faixa de tolerância caso o pallet não atenda precisamente o peso requerido pela ordem. Esta é uma característica encontrada no cadastro do produto.
Pallets parciais – Um pallet pode atender parcialmente uma ordem caso esta ordem requeira uma quantidade menor (unidade ou peso variável) do que o pallet possui. A saída do pallet será processada, porém ele retornará para o armazém com a quantidade restante.
Agregação de ordens – Como um pallet pode atender parcialmente uma ordem, ele fica disponível para atender outras ordens com a quantidade de itens restantes. A agregação de ordens pode acontecer enquanto o pallet estiver armazenado (“StoredOnShelf”) ou a caminho da saída (“ToPickingArea”, “ToBeDelivered” ou “Delivering”), ou seja, as ordens podem ser agregadas ao pallet conforme ele se desloca para saída. Para efeitos de otimização do processo de saída para atender uma ordem, se todos os critérios anteriores empatarem será dado prioridade a pallets que já estão destinados a saídas.
Venda Futura – A ordem de saída pode ter uma característica que acarreta a reserva do pallet para venda futura, ou seja, o pallet atende à ordem de saída, porém sua saída só será efetivamente processada no futuro. Mesmo que o pallet possua alguns itens reservados para venda futura poderá atender a outras ordens de saída.
Liberação de Venda Futura – A ordem de saída pode ter uma característica que acarreta na liberação para saída do pallet reservado para venda futura. Deste modo, o WCS procede com a entrega, física, do pallet para o ponto de entrega.
Na imagem abaixo está descrito o fluxo básico da saída de pallets.
Caso haja uma ordem específica para um pallet (OT), ela será processada da seguinte forma:
Caso o pallet esteja armazenado, sua localização será reservada para saída.
O destino será determinado de acordo com o tipo de movimento e conversação do produto.
Os itens da ordem serão deduzidos;
Se for um movimento com característica de venda futura, os itens do pallet serão marcados como tal.
Se for uma ordem com característica de liberação de venda futura, o item de venda futura liberado (baseado no id da OT e no código do pallet) será autorizado a ser entregue pelo WCS; caso o pallet possua itens de ordem de saída sendo entregues, é necessário que o item de venda futura a ser liberado possua o mesmo tipo de movimento dos itens sendo entregues; caso contrário, a OT permanece como pendente;
Nota: A OT continua pendente (não é processada), caso o pallet já esteja atendendo outras ordens (OT ou NT) que possuam tipo de movimento diferentes da OT em questão; neste caso, a OT é processada quando o pallet tiver atendido as outras ordens que precederam esta OT.
Caso não seja uma ordem OT, o movimento da ordem é testado com cada um dos movimentos possíveis e o algoritmo entrará nos detalhes de cada um deles conforme apresentado na imagem abaixo.
Se for de Expedição chamará as regras de expedição (Expedição);
Se for de Transferência de Pallet Completo chamará as regras de (Transferência de Pallets Completos);
Se for de Transferência de Pallet Incompleto chamará as regras de (Transferência de Pallets Incompletos);
Se for de Reabastecimento de Médio Giro chamará as regras (Reabastecimento de Baixo Giro);
Se for de Reabastecimento de Baixo Giro chamará as regras (Reabastecimento de Médio Giro).
Se não for nenhum destes cinco movimentos previstos, trata-se de movimento inválido e a regra é interrompida.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Realocação automatica  
**Score:** — (semantico) | **ID:** 017aa55435e461a5

Esta seção detalha as regras funcionais da realocação automática de pallets no armazém. A realocação consiste em otimizar a ocupação do armazém seguindo algumas regras pré-definidas, ou seja, os pallets são tirados de suas posições e colocados em células que melhor aproveitem a distribuição no armazém e os eventos de entrada e saída de pallets.
Na sequência serão explicados os detalhes das regras para definir quais pallets devem ser realocados e para quais posições os mesmos devem ser direcionados.
A realocação será feita por transelevador e após a escolha do pallet e da nova posição de destino o agendador de missões irá criar missões de realocação para este TREL que foi colocado em modo de realocação automática.
Caso o transelevador possua alguma missão de saída pendente (algum pallet reservado para saída) ele não pode ser colocado em modo de realocação.
O orquestrador será o responsável por definir qual regra de realocação será chamada e ambas as regras retornarão o par (pallet e célula de destino) para o agendador gerar as missões de realocação para o transelevador. O orquestrador deve passar um parâmetro para dizer se a busca deve ser feita para pallets tipo 1 ou tipo 2.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Ações  
**Score:** — (semantico) | **ID:** 613f8da3bbe5642d

Ações, do ponto de vista do WCS Velox, consiste em entidades que encapsulam informações, geralmente fornecidas pelos equipamentos do armazém. Cada ação é qualificada e disparada por eventos gerenciados pelo WCS Velox e equipamentos dentro do armazém (exemplos destes eventos são ‘chegada ao berço de entrada’, ‘chegada ao ponto de entrega’, etc.). Associado a estes eventos, são carregados dados importantes para o tratamento no WCS Velox (código da carga, posição atual da carga etc.).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada ao portal de entrada  
**Score:** — (semantico) | **ID:** 07f017c61417e928

Descreve as regras de orquestração a serem executadas no evento de chegada de um pallet ao portal de entrada.
Neste evento, há seis situações possíveis de ocorrência e, para cada situação, a sequência de ações executadas pelo WCS tem particularidades. As situações possíveis de entrada de pallets estão descritas abaixo.
Situação 1 – Entrada pela fábrica sem rejeito em modo online.
Esse primeiro caso corresponde à entrada de um pallet pela fábrica, em modo de funcionamento online, quando não há rejeito do pallet no portal de entrada, ou seja, o pallet entrará no armazém para ser efetivamente armazenado em alguma célula.
O controlador do transportador da fábrica registra a chegada do pallet no portal de entrada;
O ActionProcessor, ao receber a informação, dispara a regra dos portais de entrada do sistema. Para definir qual o tratamento deve ser dado ao pallet.
Após a decisão da regra de entrada no sistema, com o destino do pallet dentro do armazém (é um caso de entrada sem rejeito), o ActionProcessor dispara o envio de uma mensagem WMTOCO para o SAP para informar que o pallet entrou no armazém e há necessidade de troca contábil no SAP;
O ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga até o berço de entrada.
Situação 2 – Entrada pela fábrica com rejeito em modo online.
Este segundo caso corresponde à entrada de um pallet pela fábrica, em modo de funcionamento online, quando há rejeito do pallet no portal de entrada, ou seja, ao chegar ao portal de entrada, o pallet será rejeitado.
O controlador do transportador da fábrica registra a chegada do pallet no portal de entrada;
O ActionProcessor ao receber a informação dispara a regra dos portais de entrada do sistema. Para definir qual o tratamento deve ser dado ao pallet.
Após a decisão da regra de entrada no sistema, com o rejeito do pallet (é um caso de entrada com rejeito), o ActionProcessor dispara o envio de uma mensagem WMTOCO para o SAP para informar que a ordem de entrada foi cancelada, porque o pallet foi rejeitado;
O ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga de volta para a mesa de entrada.
Situação 3 – Entrada pela transferência/devolução em modo online.
Este terceiro caso corresponde à metade de um pallet pela área de transferência/devolução, em modo de funcionamento online.
O controlador do transportador do nível inferior registra a chegada do pallet no portal de entrada;
O ActionProcessor ao receber a informação dispara a regra dos portais de entrada no sistema. Para definir qual o tratamento deve ser dado ao pallet.
Dependendo da decisão da regra de entrada no sistema, o ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga de volta para a mesa de entrada:
Caso ocorra rejeito do pallet a decisão enviada ao controlador é movimentar a carga de volta para a mesa de entrada;
Caso não ocorra rejeito do pallet a decisão enviada ao controlador é movimentar a carga para o berço de entrada.
Situação 4 – Crossdocking ou saída direta pela entrada de fábrica em modo online.
Este quarto caso corresponde à saída direta de um pallet ou ocorrência de Crossdocking pela entrada da fábrica em modo online, ou seja, não houve rejeito de pallet e ele não será destinado a armazenamento, pois já atendeu a uma ordem de saída.
O controlador do transportador do nível superior registra a chegada do pallet no portal de entrada;
O ActionProcessor ao receber a informação dispara a regra dos portais de entrada do sistema. Para definir qual o tratamento deve ser dado ao pallet.
Após a decisão da regra de entrada no sistema, com o pallet atendendo a uma ordem de saída, o WCS Velox precisa primeiro confirmar ao SAP a entrada deste pallet para depois confirmar a saída por atender a uma ordem de saída. O ActionProcessor dispara o envio de uma mensagem WMTOCO para o SAP para informar de que a ordem de entrada foi validade e para confirmar que a ordem de saída foi atendida pelo pallet;
O ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga para o berço de entrada do nível superior, para, posteriormente, ser destinado a saída pelo nível inferior.
Situação 5 – Crossdocking ou saída direta pela entrada de transferência/devolução em modo online.
Este quinto caso correspondente à saída direta de um pallet ou ocorrência de Crossdocking pela entrada de transferência/devolução em modo online, ou seja, não houve rejeito de pallet e ele não será destinado a armazenamento, pois já atendeu a uma ordem de saída, ficará retido na mesa de entrada.
O controlador do transportador do nível inferior registra a chegada do pallet no portal de entrada;
O ActionProcessor ao receber a informação dispara a regra dos portais de entrada do sistema. Para definir qual o tratamento deve ser dado ao pallet.
Após a decisão da regra de entrada no sistema, com o pallet atendendo a uma ordem de saída, o WCS precisa primeiro confirmar ao SAP a entrada deste pallet para depois confirmar a saída por atender a uma ordem de saída. O ActionProcessor dispara o envio de uma mensagem WMTOCO para o SAP para informar de que a ordem de entrada foi validada, e para confirmar que a ordem de saída foi atendida pelo pallet.
O ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga de volta para a mesa de entrada (rejeitado por atender ordem de saída), para evitar que o pallet entre no armazém só para recircular até a saída.
Situação 6 – Entrada (fábrica, transferência ou devolução) em modo de contingência.
Este sexto caso corresponde á entrada de um pallet pela fábrica, transferência ou devolução em modo de funcionamento em contingência, ou seja, entrada de um pallet quando o WCS está funcionando desconectado do SAP.
O controlador do transportador da fábrica registra a chegada do pallet no portal de entrada;
O ActionProcessor ao receber a informação dispara a regra dos portais de entrada do sistema. Para definir qual o tratamento deve ser dado ao pallet.
Após a decisão da regra de entrada no sistema, com o destino do pallet dentro do armazém, o ActionProcessor dispara o envio de uma mensagem WMTOCO de entrada em contingência para o SAP. Ela ficará represada no WCS até que volte para o modo online, para então ser enviada ao SAP;
O ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga até o berço de entrada.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Regra dos portais de entrada no sistema  
**Score:** — (semantico) | **ID:** 5f897700eef88d19

Apresenta as regras de entrada de pallet no sistema. Esta regra é chamada sempre que o controlador do transportador informar ao ActionProcessor da chegada de um novo pallet.
Essa regra inicial serve apenas para testar os três estados do WCS:
Online;
Em contingência;
Em inventario.
A partir dela cada uma das sub-regras especificas a cada um dos estados do WCS será chamado. Os detalhes desta regra estão detalhados abaixo:
O primeiro estado do WCS a ser testado é o ‘Online’. Caso o WCS esteja neste modo, a sub-regra de entrada online é chamada.
O segundo estado do WCS a ser testado é o ‘Em contingência’. Caso o WCS Velox esteja neste modo, a sub-regra de entrada em contingência é chamada.
O terceiro estado do WCS a ser testado é o ‘Em inventário’. Caso o WCS esteja nesse modo, a sub-regra de entrada em inventário é chamada.
No final da regra é retornado o destino do pallet que foi resultado da sub-regra de entrada que foi chamada de acordo com o estado do WCS.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Regra de entrada online  
**Score:** — (semantico) | **ID:** aeda67fc7fd93164

Apresenta as regras de entrada online. Esta regra é chamada pela regra de entrada no sistema sempre que o WCS Velox estiver operando no modo online. Ele trata o destino de um pallet que chega ao portal de entrada quando o WCS estiver online.
Ao chegar ao portal de entrada o pallet pode possuir os seguintes status de localização (‘PalletLocation’):
Na entrada do sistema (‘InSystemEntrance’) – quando um pallet possui uma ordem de entrada;
Entregue (‘Delivered’) – quando um pallet saiu do armazém, porém retornou por possuir caixas restantes;
Na área de picking (‘InPickingArea’) – quando um pallet foi destinado a área de picking e retornou para ser para ser armazenado novamente.
Rejeitado (‘Rejected’) – quando foi rejeitado previamente por algum motivo.
No portal de entrada ele é testado pelo WCS nas seguintes condições:
Verifica se o pallet está cadastrado no sistema;
Verifica a localização do pallet (InSystemEntrance), InPickingArea);
Verifica se existe ordem de entrada pendente para o pallet (somente para pallets com localização ‘InSystemEntrance’ e ‘Rejected’);
Verifica se o número de caixas disponíveis no pallet é maior que zero;
Verifica se o armazém possui posição disponivel para armazenar o pallet (utiliza as regras funcionais do algoritmo de entrada de pallet para determinar a disponibilidade).
Caso alguma condição falhe, o pallet é rejeitado pelo WCS e o sistema executa as seguintes funções, encerrando a regra:
WCS envia integração WMCATO para alterar o status para cancela, se for entrada pela fábrica;
Envia decisão de rejeito para a mesa de entrada correspondente;
Registra o motivo de rejeito no WCS;
Localização do pallet é marcada como ‘Rejected’;
Se não houver rejeito pelo WCS, é checado se houve rejeito pelo PLC.
Em caso de rejeito pelo PLC, o sistema executa as seguintes funções e encerra a regra:
WCS envia integração WMCATO para alterar o status para cancela, se for entrada pela fábrica;
Envia decisão de rejeito para a mesa de entrada correspondente;
Registra o motivo de rejeito no WCS;
Localização do pallet é marcada como ‘Rejected’;
Caso o motivo de rejeito seja erro de leitura de etiqueta não é gerada a WMCATO.
Não havendo rejeito pelo PLC, o WCS Velox atualiza as informações de temperatura, peso e perfil provenientes do PLC.
O pallet é testado quanto ao seu status, se estiver bloqueado significa que deve ser armazenado. Neste caso o WCS Velox executa as seguintes funções e encerra a regra:
Processa o algoritmo de entrada de pallets;
Se for entrada pela fábrica, WCS envia integração WMTOCO para validar e o SAP realizar a troca contábil.
Envia a decisão com destino ao berço de entrada;
Localização do pallet é marcada como ‘ToFirstTranselevatorEntrance’ (entrada pelo portal inferior) ou ‘ToSecondTranselevatorEntrance’ (entrada pelo portal superior).
Se o pallet não estiver bloqueado, antes de dar entrada no mesmo, a regra de atender diretamente uma ordem de saída ou realizar crossdocking é chamada, para verificar se o pallet que está entrando atende a uma ordem de saída pendente.
Nota: o WCS verifica tambem se o pallet possui itens de ordem de saída não entregues (itens não sendo de venda futura) ou se possui itens de ordem de saída de venda futura liberados; nestes casos, envia o pallet diretamente para o ponto de entrega.
Caso não atenda a nenhuma ordem de saída significa que o pallet deve ser armazenado. Neste caso o WCS executa as seguintes funções e encerra a regra:
Processa o algoritmo de entrada de pallets;
Se for entrada pela fábrica, WCS envia integração WMTOCO para validar e o SAP realizar a troca contábil.
Envia a decisão com destino ao berço de entrada;
Localização do pallet é marcada como ‘ToFirstTranselevatorEntrance’ (entrada pelo portal inferior) ou ‘ToSecondTranselevatorEntrance’ (entrada pelo portal superior).
Se o pallet atender a uma ordem de saída é verificado por onde o mesmo está entrando;
Se não for entrada pela fábrica, o WCS executa as seguintes funções e encerra a regra:
WCS envia integração WMTOCO para confirmar que o pallet entrou no armazém;
A confirmação que a ordem de saída foi atendida pelo pallet, sera enviada pela WMTOCO
Envia decisão com destino mesa de entrega, sinalizando status de retorno de pallet para saída;
Localização do pallet é marcada como ‘ToBeDelivered’.
Se for entrada pela fábrica, o WCS procura pelo transelevador disponivel com menor número de missões do mesmo tipo de conservação do produto, a fim de utilizá-lo para transferir o pallet do nível superior para inferior. O WCS Velox executa as seguintes funções e encerra a regra:
WCS envia integração WMTOCO para validar e o SAP realizar a troca contábil.
A confirmação que o pallet entrou no armazém, sera enviada pela WMTOCO
A confirmação que a ordem de saída foi atendida pelo pallet, sera enviada pela WMTOCO
Envia decisão com destino ao berço de entrada – o pallet deve ser direcionado ao nível de baixo para chegar à saída;
Localização do pallet é marcada como ‘ToBeDelivered’.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Regra de entrada em contingência  
**Score:** — (semantico) | **ID:** 4d35770941604512

Apresenta as regras de entrada em contingência. Esta regra é chamada pela regra de entrada no sistema sempre que o WCS estiver operando no modo contingência. Ela trata o destino de um pallet que chega ao portal de entrada quando o WCS estiver em contingência.
Ao chegar ao portal de entrada o pallet pode possuir os seguintes status de localização (‘PalletLocation’):
Na entrada do sistema (‘InSystemEntrance’) – quando um pallet possui uma ordem de entrada;
Entregue (‘Delivered’) – quando um pallet saiu do armazém, porém retornou por possuir caixas restantes;
Na área de picking (‘InPickingArea’) – quando um pallet foi destinado a área de picking e retornou para ser armazenado novamente;
Rejeitado (‘Rejected’) – Quando um pallet foi rejeitado ao tentar entrar anteriormente.
Primeiramente o pellet e a ordem de armazenamento são criados com campos de contingência do telegrama.
No portal de entrada o pallet é testado pelo WCS nas seguintes condições
Verifica se o número de caixas disponíveis no pallet é maior que zero;
Verifica a localização do pallet (InSystemEntrance, InPickingArea ou Rejected);
Verifica se o armazém possui posição disponivel para armazenar o pallet (utiliza as regras funcionais do algoritmo de entrada de pallet para determinar a disponibilidade).
Caso alguma condição falhe, o pallet é rejeitado pelo WCS e o sistema executa as seguintes funções, encerrando a regra:
Envia decisão de rejeito para a mesa de entrada correspondente;
Registra o motivo de rejeito no WCS;
Localização do pallet é marcada como ‘Rejected’;
Se não houver rejeito pelo WCS Velox, é checado se houve rejeito pelo PLC.
Em caso de rejeito pelo PLC, o sistema executa as seguintes funções e encerra a regra:
Registra o motivo de rejeito no WCS;
Envia decisão de rejeito para a mesa de entrada correspondente;
Localização do pallet é marcada como ‘Rejected’.
Não havendo rejeito pelo PLC, o WCS atualiza as informações de temperatura, peso e perfil provenientes do PLC e processa o algoritmo de entrada de pallets.
O WCS Velox executa as seguintes funções e encerra a regra:
WCS realiza integração WMTOCO para pallet em contingência;
Envia decisão com destino ao berço de entrada;
Localização do pallet é marcada como ‘ToFirstTranselevatorEntrance’ (entrada pelo portal inferior) ou ‘ToSecondTranselevatorEntrance’ (entrada pelo portal superior).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada a um berço de entrada  
**Score:** — (semantico) | **ID:** 3f689a9164e7e646

É disparada quando um pallet chega a um berço de entrada de um transelevador dentro dos transportadores. Estes pontos são as mesas pelas quais as cargas são pegas pelos garfos do transelevador e nas quais o WVS envia decisão de movimentação para o transelevador.
Ao ser notificado de um evento de chegada a um berço de entrada, as seguintes decisões de movimentação podem ser tomadas pelo WCS, dependendo do modo de operação do sistema e das regras funcionais aplicadas:
Direcionamento para célula de armazenamento;
Direcionamento para ponto de entrega.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de armazenar um pallet (decisão tomada pela regra dos berços de entrada). Nesse evento, o WCS direciona a carga para a célula reservada para armazenamento do transelevador.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de Crossdocking de um pallet (decisão tomada pela regra dos berços de entrada). Neste evento, o WCS Velox direciona a carga para o ponto de entrega do pallet.
O fluxo abaixo ilustra a regra dos berços de entrada do sistema. Neste diagrama, o WCS Velox primeiramente verifica se o pallet que chegou ao berço está atendendo uma ordem de saída. Em caso afirmativo, o WCS gera decisão para o transportador levar o pallet até seu ponto de entrega.
Em caso negativo, o status do pallet é verificado. Caso o pallet esteja ‘bloqueado’ (bloqueio SAP), o WCS procura uma célula disponivel para armazená-lo (utilizando o algoritmo de entrada de pallets). Caso não encontre uma célula disponivel, o pallet é destinado ao próximo ponto de decisão.
Caso o pallet não esteja ‘bloqueado’, o modo de operação do sistema é verificado. Caso o sistema esteja em modo diferente de ‘online’, o mesmo processamento de pallet ‘bloqueado’ é executado; caso contrário, o sistema procura por ordens de saída pendentes ou pallets de Crossdocking a fim de verificar se o pallet em questão não pode ser utilizado para atender uma ordem de saída diretamente.
Em caso afirmativo, o WCS Velox processa a saída do pallet; caso contrário, processa o armazenamento do pallet.
Nota: o WCS Velox verifica também se o pallet possui itens de ordem de saída não entregues (itens não sendo de venda futura) ou se possui itens de ordem de saída de venda futura liberados; nestes casos, envia o pallet diretamente para o ponto de entrega.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada a uma célula  
**Score:** — (semantico) | **ID:** a17e4e0a890355dc

Esta ação é disparada quando o transelevador finaliza a ação de armazenamento de uma carga em uma célula de armazenamento. O estado inicial da carga no WCS Velox é ‘Em Armazenamento’. De acordo com o modo de operação atual do WCS, diferentemente ações são tomadas.
Caso o WCS esteja operando em modo online, ele irá enviar a integração WMTOCO para o SAP notificando o armazenamento da carga. Na sequência, o WCS atualiza o status da célula no sistema, passando a mesma para ‘Ocupada’, atualizando o status da carga para ‘Armazenada na Prateleira’.
Caso o WCS Velox esteja operando em qualquer outro modo, o mesmo só irá atualizar o status da célula e da carga. O fluxo abaixo ilustra a sequência de ações realizadas pelo WCS após o recebimento de uma ação ‘Chegada a uma célula’.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alerta de célula ocupada  
**Score:** — (semantico) | **ID:** 9221649d9b78cb79

Esta ação é disparada pelo transelevador quando o mesmo não consegue realizar uma missão de armazenamento devido à célula já estar ocupada. Caso isto aconteça, o WCS deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ocupada dentro do sistema.
Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador. Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula. Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o
armazenamento da carga.
O fluxo completo do processamento desta ação pode ser verificado na imagem abaixo. A carga permanece em estado de “Em armazenamento” durante todo o processamento, uma vez que a mesma ainda está em trânsito. A célula já ocupada tem o seu status atualizado no sistema, e a carga é realocada para uma nova posição ou para um ponto de decisão.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alerta de célula com erro  
**Score:** — (semantico) | **ID:** d8e497cb34ac91d8

Esta ação é disparada pelo transelevador quando ele não consegue realizar uma missão de armazenamento ou retirada de carga, pois a célula apresenta algum erro de estrutura (sensor desalinhado, problemas de dimensionamento da célula etc.). Caso isto aconteça, o WCS deverá tomar uma das seguintes ações:
No caso de estar efetuando um movimento de armazenamento de carga: o sistema deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ‘Célula com Erro’, caracterizando o motivo de acordo com o erro retornado pelo transelevador. Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador.
Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula.
Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
No caso de estar efetuando um movimento de retirada de carga, o sistema deverá verificar qual o seu estado de funcionamento, tomando uma das seguintes ações:
Caso esteja operando em modo “Inventário”, o WCS marca a célula como ‘Célula com Erro’ e com motivo fornecido pela mensagem de erro do transelevador.
Caso esteja operando em modo “Online”, o sistema deverá verificar se o movimento de saída foi realizado para atender uma OS ou transferência. Em caso afirmativo, o sistema deverá realizar o estorno dos itens de OS do pallet e alocar um novo pallet para as OSs. Caso contrário, o sistema gera uma mensagem M2 para o SAP com o status de ‘Cancela’.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Retirada de uma célula  
**Score:** — (semantico) | **ID:** 173852f83e6a47b7

Esta ação é disparada pelo transelevador ao término de uma operação de retirada de um pallet de uma célula de armazenamento. Tal operação ocorre durante um movimento de retirada de um pallet, a partir de uma ordem de saída. Ao concluir a operação, o transelevador deverá encaminhar o pallet para uma nova posição no corredor ou para uma mesa de saída.
O processamento desta ação inicia-se atualizando o status da célula para vazia. Se a ordem de saída for referente a um movimento de expedição ou transferência, o WCS deverá enviar uma integração WMTOCO para o SAP confirmando a operação de retirada da carga da célula de armazenamento. Caso contrário, nada mais é feito.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alerta de célula vazia  
**Score:** — (semantico) | **ID:** be039a3e370aec38

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alerta de falha no transelevador  
**Score:** — (semantico) | **ID:** 0d13fd4bd9d02ea2

Esta ação é disparada pelo transelevador toda vez que algum erro não recuperável acontecer no transelevador. Esta situação só ocorre quando o PLC perde comunicação com o WCS e necessariamente acontece uma intervenção manual no transelevador.
Caso o transelevador esteja com uma carga no carro está será retirada para o berço de saída.
O operador deverá posteriormente corrigir a situação da carga dentro do sistema, e a operação do transelevador deverá ser feita manualmente até que a falha original seja sanada. Uma vez resolvido o problema, o transelevador deverá ser resetado para seu estado inicial, e as ações e decisões devem voltar a ocorrer normalmente entre o WCS e o transelevador.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada a um berço de saída  
**Score:** — (semantico) | **ID:** 3f6c96b231140709

Esta ação é disparada pelo transelevador toda vez que for realizada uma retirada de carga bem-sucedida e a carga tenha sido depositada no berço de saída do transelevador. Neste momento, a carga passa a ser considera como “Em trânsito” no WCS, e o WCS registra no log de transações a entrega da carga pelo transelevador no seu berço de saída.
Tal transação permite a confirmação da entrega da carga pelo transelevador, garantindo a baixa da carga do corredor no qual a carga estava armazenada. Caso o status anterior do pallet seja “A ser entregue”, o novo status do pallet passa a ser “Em trânsito”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Scheduler de missões  
**Score:** — (semantico) | **ID:** 4d937e41ba77d5f9

O scheduler de missões é um processo agendado dentro do WCS que tem por responsabilidade o controle da geração e envio de missões para os transelevadores do armazém.
Dentro de seu fluxo de operação, são verificados os estados dos equipamentos individualmente, assim como o modo de operação do WCS. Desta forma, é possível separar o modo de trabalho de cada transelevador conforme segue:
Operação normal (atendimento de ordens de entrada e saída de pallets do transelevador);
Operação em realocação automática.
A imagem abaixo ilustra o processo principal do scheduler de missões, no qual, em intervalos de 2 segundos (tempo configurável), o WCS procura novas missões para cada um dos transelevadores disponíveis, isto é, em modo de funcionamento automático e ocioso (que não estão executando ordens).
A imagem abaixo ilustra o fluxo principal do scheduler de missões, responsável por encontrar a próxima missão que o transelevador deverá executar. Neste processo, primeiramente o WCS verifica se o transelevador em questão se encontra em modo de realocação automática. Em caso afirmativo, procede-se com a busca de missões de realocação de pallets; caso contrário, o WCS busca missões de entrada ou saída de pallets, num ciclo denominado ciclo duplo de entrada e saída.
Neste processo, o WCS procura de forma alternada missões de entrada de pallets e missões de saída de pallets para cada transelevador, minimizando assim a incidência de congestionamentos nos transportadores.
O fluxo envolvido na busca da próxima missão de descida (saída) para um transelevador é ilustrado na imagem abaixo.
O fluxo envolvido na busca da próxima missão de entrada para um transelevador é ilustrado na imagem acima.
Nota: neste ponto, é importante observar que, em função da existência de duas entradas e uma saída por transelevador, o WCS priorizará as entradas inferiores sobre as superiores para evitar congestionamentos no nível inferior (de saída).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Realocação automática  
**Score:** — (semantico) | **ID:** 4c2def60c4f69418

Realocação automática é um processo acionado manualmente pelo usuário do WCS e que agrega as seguintes características ao sistema:
Capacidade de otimizar a ocupação do armazém segundo regras predeterminadas;
Capacidade realizar tal operação de forma individualizada por transelevador e, portanto, sem a necessidade de parada total de produção;
Utilização de dois critérios de parada para a otimização do armazém: ciclos de realocação (máximo) definidos pelo usuário ou alcance do estado onde não exista mais possibilidade de otimização.
A regra de realocação automática, invocada pelo scheduler de missões para encontrar as missões a serem enviadas para o transelevador em modo de realocação automática as duas buscas mencionadas se resumem conforme segue:
Busca posição para realocar pallet de baixa estação:
Critério de escolha do pallet: busca pallets (com posição com status ocupado) nos primeiros 2/3 das posições do corredor, ordenando por:
- Tipo do pallet: (tipo 1, tipo 2) ou (tipo 2, tipo 1) alternadamente a cada ciclo de busca
- Sazonalidade de produto: baixa estação, normal (exclui os pallets de alta estação)
- Prazo de validade do produto: decrescente (prioriza pallets mais distante do
vencimento)
No mesmo corredor, busca posição vazia mais distante (com relação à origem) do que a posição do pallet que está sendo escolhido para realocar, aplicando os mesmos critérios da regra de escolha de posições de pallet (algoritmo de entrada) aplicada na entrada, com a particularidade que a distância é ordenada de forma decrescente (ver algoritmo de entrada).
Busca posição para realocar pallet de alta estação:
Critério de escolha do pallet: busca pallets (com posição com status ocupado) nos últimos 2/3 das posições do corredor, ordenando por:
- Tipo do pallet: (tipo 1, tipo 2) ou (tipo 2, tipo 1) alternadamente a cada ciclo de busca
- Sazonalidade de produto: alta estação, normal (exclui os pallets de baixa estação)
- Prazo de validade do produto: crescente (prioriza pallets mais próximo do vencimento)
No mesmo corredor, busca posição vazia mais próxima (com relação à origem) do que a posição do pallet que está sendo escolhido para realocar, aplicando os mesmos critérios da regra de escolha de posições de pallet (algoritmo de entrada) aplicada na entrada.
O fluxo envolvido na geração de uma missão de realocação para um transelevador é ilustrado na imagem abaixo:

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Crossdocking e saídas diretas  
**Score:** — (semantico) | **ID:** f9a0f796cd4754f4

Crossdocking, assim como saídas diretas, é uma otimização que o WCS executa durante o processo de recebimento de pallets no armazém em modo de funcionamento online.
Neste processo, antes de tomar a decisão de armazenar um pallet nas células de armazenagem automática, o WCS procura por ordens de saída pendentes ou pallets armazenados e reservados para saída que ainda não foram confirmados para o SAP (ordens de expedição e transferência, que retornem M4 como confirmação para o SAP) para verificar se os pallets entrantes podem atender tais ordens de saída. Em caso afirmativo (viabilidade de atender ordens de saída), o sistema utiliza o pallet entrante para atender a ordem de saída ao invés de retirar um pallet de uma célula de armazenagem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Listagem de ordens de armazenamento  
**Score:** — (semantico) | **ID:** 687dc3be9c566691

Na tela mostrada na imagem abaixo nota-se que os registros filtrados são exibidos em páginas, permitindo um melhor desempenho da aplicação.
O WCS Velox deve permitir filtrar os registros pelas seguintes características da ordem de armazenamento:
Estado
Centro
Sistema de Depósito
Depósitos
Código do Cliente
Código do Pallet
Lote

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Listagem de produtos  
**Score:** — (semantico) | **ID:** 3aaaac66f10f23b2

A Listagem de Produtos permite visualizar os itens cadastrados no armazém, como na imagem abaixo.
O sistema WCS deve possibilitar refinar a busca através dos seguintes filtros:
Código do produto
Faixa do produto
Prazo de validade

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de equipamentos  
**Score:** — (semantico) | **ID:** 68614f0561bf3c9a

Esse modulo contém as funcionalidades que permitem analisar os equipamentos e os transelevadores, além das missões direcionadas aos PLCs.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Status do transelevador  
**Score:** — (semantico) | **ID:** 68f260c3f20bee61

A partir dessa funcionalidade é possivel analisar o status dos transelevadores, como mostrado na imagem abaixo.
As informações contidas na tela são buscadas diretamente da interface com equipamentos do WCS.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Lista de missões  
**Score:** — (semantico) | **ID:** c30328f7d6837f5b

As missões destinadas aos transelevadores podem ser visualizadas através dessa funcionalidade.
A imagem acima mostra que é possível refinar a busca pelos seguintes filtros:
Período em que a missão foi registrada no sistema
Código do Pallet
Equipamento
Tipo de Missão
Status da Missão
Id Transporte

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Histórico de paradas  
**Score:** — (semantico) | **ID:** 267a6dfde8204176

Através dessa funcionalidade é possível analisar os momentos em que cada transelevador esteve parado.
Como mostrado na imagem acima é possível refinar a busca usando os seguintes filtros:
Transelevador – exibe todos os registros de paradas para o transelevador selecionado
Período – exibe eventos de paradas registradas dentro do período dado

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento do armazém  
**Score:** — (semantico) | **ID:** cf7de23e71d9cab0

O módulo de Gerenciamento do Armazém possibilita gerenciar os principais recursos do armazém, detalhados a seguir.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Mapeamento  
**Score:** — (semantico) | **ID:** 3d983051e66a41a1

Para um melhor gerenciamento do armazém este é divido em regiões logicas, descritas nos itens a seguir.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de corredores  
**Score:** — (semantico) | **ID:** 2daffa1125466ebf

Essa funcionalidade permite visualizar, editar, excluir e criar registros novos para corredores das áreas do armazém.
A opção “Detalhes” permite visualizar e alterar as informações do corredor selecionado.
A opção “Novo” na imagem acima, exibe uma tela semelhante a imagem abaixo, porém com os campos vazios e com a opção “excluir” desabilitada.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de zonas  
**Score:** — (semantico) | **ID:** 5278fb3e4828685b

Essa funcionalidade permite visualizar, editar, excluir e criar registros novos para as zonas do armazém.
A opção “Detalhes” permite visualizar e alterar as informações da zona selecionada.
A opção “Novo”, na imagem acima, exibe uma tela semelhando a imagem abaixo, porém com os campos vazios e com a opção “Excluir” desabilitada.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de centros  
**Score:** — (semantico) | **ID:** b5982cc39ff06945

A partir dessa funcionalidade é possível visualizar e editar valores para os centros cadastrados no sistema.
É possivel editar os valores já cadastrados na própria lista. Selecionando a opção “Salvar” o sistema registra as alterações realizadas.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de depósitos  
**Score:** — (semantico) | **ID:** 384cb010e972d2d2

A partir dessa funcionalidade é possivel visualizar e editar valores para os depósitos cadastrados no sistema.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Realocação automática  
**Score:** — (semantico) | **ID:** 510a746271ce4d4e

Caso o transelevador esteja em “Realocação Automática”, o sistema permite parar o processo nas opções “Parar”, como mostrado na imagem abaixo. Caso o transelevador não esteja em Realocação Automática é possível:
Configurar o número de ciclos de realocação para cada transelevador
Iniciar individualmente o processo de realocação automática de cada transelevador a qualquer momento
Visualizar se o processo de realocação está acontecendo ou não no momento através do flag “Iniciado”.
O sistema considera a sazonalidade definida pelo produto, e mostra o status do equipamento na tela.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Fluxo de entrada e saída de pallets  
**Score:** — (semantico) | **ID:** e1b241a89b5bb5c2

É possivel analisar quantos pallets congelados ou resfriados entraram e saíram em cada transelevador do armazém, como mostrado na imagem abaixo.
O sistema WCS Velox deve possibilitar refinar a busca para registros em um determinado período, como mostrado na imagem acima, caso não sejam especificadas datas de inicio e fim, todos os registros encontrados serão considerados.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Modelo  
**Score:** — (semantico) | **ID:** fc1ffc42a11f3966

O WCS possui o módulo de Gerenciamento de Equipamentos responsável por centralizar todas as rotinas e estruturas necessárias para o protocolo de comunicação com os equipamentos do armazém.
O Gerenciador de Equipamentos é responsável por inicializar e carregar todas as configurações existentes para cada tipo de equipamento (transportador e transelevador), as quais irão modelar e mapear as mensagens e TAGs utilizados por cada um dos equipamentos e suas unidades funcionais.
A imagem abaixo ilustra o relacionamento existente entre as classes do modelo do Gerenciador de Equipamentos. A entidade EquipmentManager é a responsável por centralizar todo o gerenciamento dos equipamentos, criando uma entidade OPCEquipmentController para cada um dos equipamentos.
Cada OPCEquipmentController possui um OPCMessageProcessor, capaz de transformar as informações dos TAGs lidos em ações, que serão enviadas ao MainController do WCS capaz de processá-las, gerando decisões.
Cada OPCEquipmentController possui também um IOPCEquipmentIO, responsável por tratar os eventos de alteração de valor de TAG e por utilizar as definições contidas no TAGDictionary para avaliar quais TAGs de dados devem ser consultados em cada evento.
A comunicação com o OPC Client API é feita através da classe OPClientManager, responsável por gerenciar a conexão e por registrar os eventos de alteração de valores de TAGs no OPC Server.
A imagem abaixo ilustra o fluxo de informações durante a troca de mensagens no modelo utilizado pelo WCS.
As próximas sessões irão detalhar as relações entre as classes do modelo e a forma com que cada componente atua na comunicação entre o WCS e os equipamentos.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Leitura e recebimento de alarmes e dados  
**Score:** — (semantico) | **ID:** dcf039573e1c1e21

Uma vez inicializado o WCS e a conexão com o OPC Server (RSLinx) através da OPC Client API, o Gerenciador de Equipamentos cria Subscriptions para cada TAG a ser monitorado. Cada Subscription tem o seu evento “DataChanged” registrado para executar uma rotina no OPCEquipmentIO para o qual ela foi registrada, garantindo assim o processamento das mudanças de dados.
Para cada evento de mudança disparado, o OPCEquipmentIO consulta o mapeamento de TAGs definido nos arquivos de configuração XML do equipamento, verificando quais TAGs de dados são necessários para a criação da mensagem no WCS. Os dados são então lidos e repassados ao OPCEquipmentController em forma de uma mensagem OPCEquipmentMessage, contendo todos os valores de TAGs necessários para o processamento da mensagem pelo WCS. O fluxo completo de recebimento de um evento e leitura de dados está ilustrado na imagem abaixo.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciador de equipamentos  
**Score:** — (semantico) | **ID:** 65f206913bc1d1f6

Esta seção detalha o funcionamento do gerenciador de equipamentos dentro do WCS. O Gerenciador de Equipamentos tem por função controlar toda a comunicação de dados e eventos que ocorrem entre os PLCs, que controlam os transelevadores e transportadores do armazém, e o WCS.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada ao portal de entrada  
**Score:** — (semantico) | **ID:** d4279b08753962d0

Esta ação é gerada toda vez que a chegada de um pallet for detectada em um portal de entrada do armazém. Estão previstos dois portais de entrada inferiores (1 e 2) e dois portais de entrada superiores (3 e 4) no armazém da BR Foods / Rio Verde.
A tabela abaixo detalha os campos e informações consultadas para a geração da ação de “Chegada ao portal de entrada”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada a um berço de entrada  
**Score:** — (semantico) | **ID:** 2ddb7985b57fddd6

Esta ação é gerada toda vez que a chegada de um pallet for detectada em um berço de entrada de um transelevador. Estão previstos um berço de entrada superior e um berço de entrada inferior por transelevador, totalizando sete berços superiores e sete berços inferiores.
A chegada em um berço de entrada permite que o WCS coordene as missões de armazenamento da carga pelo transelevador. A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Chegada a um berço de entrada”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada a uma célula  
**Score:** — (semantico) | **ID:** ec6f460fecd2ed32

Esta ação é gerada toda vez que o transelevador confirmar o posicionamento de um pallet em uma célula de armazenamento com sucesso. Esta ação conclui o armazenamento da carga dentro do WCS, disparando a mudança de status e outras ações dentro do WCS.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Chegada a uma célula”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alerta de célula ocupada  
**Score:** — (semantico) | **ID:** e197a897be187388

Esta ação é gerada toda vez que o transelevador tentar posicionar um pallet em uma célula já previamente ocupada. Tal ação permite ao WCS recalcular uma posição para armazenamento do pallet e marcar a posição atual como já ocupada dentro do WCS, enviando um novo comando de modificação de destino (código 50) para o transelevador.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alerta de Célula Ocupada”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alerta de célula com erro  
**Score:** — (semantico) | **ID:** d4762c58a4a73bf4

Esta ação é gerada toda vez que o transelevador detectar algum tipo de erro de posicionamento da célula ou desalinhamento da estrutura, indicando ao WCS que ele deverá marcar esta célula com erro e realocar a carga caso ela já esteja sobre o garfo ou procurar pela próxima missão caso a missão fosse de retirada.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alerta de Célula com Erro”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alerta no transelevador sem recuperação  
**Score:** — (semantico) | **ID:** dd2eee3130752e2b

Esta ação é gerada toda vez que ocorrer uma falha no transelevador impossível de se recuperar decorrente de uma falha de comunicação com o WCS aliada a uma operação manual. Neste caso a missão pendente do transelevador será retirada e caso possua carga sobre o garfo, esta será retirada para o berço de saída.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alerta de Célula com Erro”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Retirada de uma célula  
**Score:** — (semantico) | **ID:** 884d0836bc3d81da

Esta ação é gerada toda vez que o transelevador confirmar uma retirada de carga bem sucedida de uma célula. O WCS deverá utilizar esta ação para processar a retirada da carga da célula.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Retirada de uma célula”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada a um berço de saída  
**Score:** — (semantico) | **ID:** bdf1cf83b01f5bd8

Esta ação é gerada toda vez que o transelevador confirmar uma retirada de carga bem sucedida de uma célula, colocando-a no berço de saída. O WCS deverá utilizar esta ação para processar a retirada da carga e chegada ao berço de saída.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Chegada a um berço de saída”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alerta de célula vazia  
**Score:** — (semantico) | **ID:** 7ed73be9f92a7f6e

Esta ação é gerada toda vez que o transelevador detectar que não há carga para ser retirada em uma operação de retirada de carga de uma célula. Em tal situação, o WCS deverá reendereçar a retirada e marcar a célula com erro no armazém.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alerta de célula vazia”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada a um ponto de entrega  
**Score:** — (semantico) | **ID:** e6d3bf84f9aa1147

Esta ação é gerada toda vez que uma carga for detectada no ponto de entrega, em condições de seguir em frente. Esta ação deverá ser processada pelo WCS para liberação da carga no sistema. Após liberada, o sistema deverá enviar um sinal de confirmação da entrega da carga ao equipamento, garantindo assim que não haverá duplicidade de registro em caso de falha de comunicação durante o processo de entrega.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Chegada a um ponto de entrega”.
Nota: após processar o TAG CTL_ENTREGA, o WCS deve setar o TAG CTL_CONFIRMA_ENTREGA. Caso haja uma falha na transposição dos dados e o WCS não seja capaz de identificar a carga o WCS irá setar o TAG CTL_CONTINGING_ENTREGA informando ao operador que ele deve inserir o código do pallet manualmente e então disparar novamente o TAG CTL_ENTREGA.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alarme de corredor bloqueado ou ocupado  
**Score:** — (semantico) | **ID:** f028622d4df9e58a

Esta ação é gerada toda vez que uma mesa de transfer de corredor de um transelevador detectar que é impossível movimentar a carga para o próximo destino, pois o corredor ou a linha estão bloqueados ou ocupados. O alarme será disparado após a permanência da carga por mais de 2 minutos (tempo configurável) no transfer do corredor. Para verificar se a parada ocorreu no corredor ou na linha, deverão ser consultados os dados da carga da mesa que gerou o alarme.
Após resetado pelo sistema, o alarme será disparado novamente caso se passe mais dois minutos. O WCS deverá decidir como processar tal ação, gerando as decisões correspondentes.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alarme de corredor bloqueado ou ocupado”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alarme de saída cheia  
**Score:** — (semantico) | **ID:** ca93dc080644e9fc

Esta ação é gerada toda vez que a saída fica congestionada de pallets, impedindo o fluxo de saída e recirculação de pallets. Quando esta ação é disparada todos os transelevadores ficam indisponíveis para a retirada de pallets.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alarme de saída cheia”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Bloqueio do transelevador  
**Score:** — (semantico) | **ID:** 9a1e014361d03745

Esta ação é gerada toda vez que uma das tags de controle mencionas na Tabela 7-15 é disparada. Ao dispara esta ação o transelevador fica indisponível tanto para saída com para entrada de pallets.
A tabela abaixo detalha os TAGs de controle e dados que são lidos para a geração da ação de “Bloqueio do transelevador”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alarme de transelevador sem comunicação  
**Score:** — (semantico) | **ID:** 786b800bb41dd75c

Esta ação é gerada toda vez que o CLP do transportador inferior perde comunicação com o transelevador. Quando esta ação é gerada o transelevador fica indisponível para retirada e armazenamento de pallets.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alarme de transelevador sem comunicação”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alarme de inconsistência de dados  
**Score:** — (semantico) | **ID:** da00c4106176e7b0

Este alarme é gerado toda vez que a missão enviada pelo WCS para o transelevador está inconsistente com o pallet retirado do berço de entrada. Quando ocorrer esta ação o WCS removerá o pallet para o berço de saída.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alarme de transelevador sem comunicação”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Movimento carga  
**Score:** — (semantico) | **ID:** 19c8eefcc443380a

Esta decisão é gerada pelo WCS toda vez que for necessária a movimentação da carga por um transportador ou um transelevador para um movimento de entrada de carga. A decisão indicará ao equipamento qual o movimento a ser efetuado e quais as novas posições de destino do mesmo.
Tal decisão afeta diferentes TAGs de controle e dados no caso de um movimento de carga para um transportador ou para um transelevador. A tabela abaixo detalha as TAGs de controle e dados que são escritos para a decisão de “Movimentar Carga” para os transelevadores.
A tabela abaixo detalha as TAGs de controle e dados escritos para os transportadores.
Para a movimentação de um transelevador, o TAG de comando deverá ser definido por último, somente quando todos os demais TAGs já tiverem sido definidos. Isto garante que o transelevador receberá o comando completo. No caso dos transportadores, o TAG de comando deverá ser resetado para que a unidade de equipamento efetue o movimento enviado.
A ação “Movimentar Carga” será utilizada sempre com o comando 60 do transelevador, conforme indicado na tabela abaixo. Portanto, esta ação sempre representará um movimento completo do transelevador, de um berço de entrada até uma célula de armazenamento.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Realocar destino de carga  
**Score:** — (semantico) | **ID:** bb7a136e94c2ea75

Esta decisão é gerada pelo WCS toda vez que for necessária a modificação de uma movimentação de carga por um transelevador. A decisão indicará ao equipamento o novo destino a ser utilizado para o movimento atual.
A tabela abaixo detalha as TAGs de controle e dados que são escritos para a decisão de “Realocar destino de Carga” para os transelevadores.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Remover carga  
**Score:** — (semantico) | **ID:** fdba0e38700b31d9

Esta decisão é gerada pelo WCS toda vez que for necessária a remoção de uma carga de uma célula de armazenamento para um ponto de entrega, ou de um berço de entrada para um ponto de entrega. Tal decisão é gerada a partir de uma Ordem de Saída, e sempre é executada por um transelevador.
A decisão será utilizada em três situações distintas:
O transelevador recebeu uma missão de armazenamento de uma carga e não foi possível armazená-la na célula alocada. O transelevador deverá remover a carga de volta para seu berço de saída, indicando a próxima mesa de destino. Os TAGs envolvidos para tal situação estão descritos na tabela abaixo.
O transelevador recebeu uma missão de retirada de uma carga de uma célula para um ponto de entrega. Ele deverá ir até a célula, retirar a carga, deixá-la em uma de seus berços de saída já com um próximo destino definido. Os TAGs escritos para a execução de tal situação estão descritos na tabela abaixo.
O transelevador recebeu uma missão de retirada de uma carga de um berço de entrada (superior ou inferior) para um de seus berços de saída. Tal decisão é utilizada freqüentemente para movimentos de cross-docking entre os berços de entrada superior e berços de saída inferior. As TAGs escritos para a execução de tal situação estão descritos na tabela abaixo.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Falha no disparo de ações  
**Score:** — (semantico) | **ID:** 6fbc9abdece0de3f

Esta situação é caracterizada pelo não recebimento de um Evento de transição de TAG de Controle pelo WCS, não sendo detectada queda de Heart Beat. Tal situação fará com que o WCS não processe a ação disparada, fazendo com que a carga permaneça no equipamento indefinidamente, pois o mesmo estará aguardando uma resposta do WCS.
Para esta situação, deverá existir nas telas dos sistemas supervisórios dos Transportadores e Transelevadores controles que permitam o disparo manual de tais eventos de transição, fazendo com que o Evento de transição seja novamente enviado ao WCS. Desta forma, o WCS irá processar a ação correspondente, enviando a decisão de controle ao equipamento.
Tal situação está ilustrada na imagem abaixo.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** e86606883c85c211

O proposito principal do projeto é criar uma solução WCS Velox para o gerenciamento do armazém automatizado da BR Foods localizado em Rio Verde – Goiás.
O WCS Velox será o sistema responsável por gerenciar a movimentação dos transportadores e transelevadores desse armazém. Essa movimentação será baseada nos pedidos de entrada e saída vindos do ERP (SAP) juntamente com o estado atual do armazém e dos equipamentos.
Para o correto funcionamento do WCS Velox, é necessária uma aplicação que será responsável pelo gerenciamento das informações e dos equipamentos, ou seja, esta aplicação terá como papel fundamental a interface com o sistema SAP.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e SAP através de interface Web (JSON Rest.).
Em cada estação de trabalho, se faz necessário o uso de um navegador web padrão (Google Chrome).

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF1 – Recebimento de pallets  
**Score:** — (semantico) | **ID:** 023c870b322755db

O WCS Velox deve realizar tratamento dos pallets entrantes no portal de identificação de pallets designando o destino do pallet para uma das seguintes posições:
Mesa de entrada, em caso de rejeição de pallet;
Berço de entrada dos transelevadores, a partir dos portais de identificação dos níveis inferior e superior do armazém;
Mesa de saída, a partir dos portais de identificação do nível inferior do armazém.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF1.1.1 – Tipo de conservação  
**Score:** — (semantico) | **ID:** f5652a89a496df5f

O WCS Velox deve segregar os pallets entrantes por tipo de conservação do cadastro de produtos (congelado ou resfriado) para verificar a disponibilidade de posição para armazenamento.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF1.1.2 – Tipo de pallet  
**Score:** — (semantico) | **ID:** cf1d691942f1a24e

O WCS Velox deve segregar os pallets entrantes por tipo (normal ou estendido) para verificar a disponibilidade de posição para armazenamento.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF1.2 – Rejeito de entrada no armazém  
**Score:** — (semantico) | **ID:** 48f2927e0214924b

O WCS Velox deve rejeitar um pallet para a mesa de entrada após validar as características dimensionais do pallet e peso (recebidas do PLC) e o recebimento de ordem de entrada (recebida do SAP WM) para o pallet entrante.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF1.2.1 – Pallets repetidos  
**Score:** — (semantico) | **ID:** dc21a407304d41c4

O WCS Velox deve rejeitar pallets entrantes cujo código já esteja atribuído a um pallet dentro do armazém.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF1.2.2 – Disponibilidade de transelevadores  
**Score:** — (semantico) | **ID:** 6d9445b779b33520

O WCS Velox deve rejeitar pallets entrantes que não possuam transelevadores disponíveis (seguindo tipo de conservação) para armazená-los.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF1.3 – Crossdocking de entrada  
**Score:** — (semantico) | **ID:** 46b63f50494f9226

O WCS Velox deve ser capaz de realizar Crossdocking de pallets entrantes. Para isso, deve priorizar os movimentos da seguinte maneira:
Reabastecimento de picking;
Expedição;
Armazenamento.
Nota: Crossdocking é uma otimização realizada para atendimento de uma ordem de saída pendente com um pallet entrando no sistema, antes mesmo de armazená-lo.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF1.3.1 – Status do pallet  
**Score:** — (semantico) | **ID:** 7a11f6d7780baa70

Pallets com status “Bloqueado” no SAP WM não podem ser sujeitados ao processo de Crossdocking. Esses devem ser armazenados.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF1.3.2 – Tolerância de Crossdocking  
**Score:** — (semantico) | **ID:** c6fca16d0a0040df

O WCS Velox deve aplicar uma tolerância (em dias) para a aplicação da regra de Crossdocking. Esta tolerância implica que o pallet entrante pode atender uma ordem de saída excedendo a regra de FEFO pelo úmero de dias especificados na tolerância.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF2 – Armazenagem de pallet  
**Score:** — (semantico) | **ID:** 6e17b4a61cd1f08e

O WCS Velox deve ser capaz de coordenar o processo de armazenamento de pallet nas células dos transelevadores.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF2.1 – Evento de sucesso ao armazenar  
**Score:** — (semantico) | **ID:** f849b029853026ca

O WCS Velox deve ser capaz de interpretar o evento de armazenamento (recebido junto com o identificador da carga pelo PLC do transelevador) e confirmar o armazenamento do pallet internamente.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF2.2 – Evento de erro ao armazenar  
**Score:** — (semantico) | **ID:** e81e5dd62b80c19f

O WCS Velox deve ser capaz de interpretar o evento de erro de armazenamento (recebido junto com o identificador da carga pelo PLC do transelevador) e registrar a causa do erro, bloqueando se necessário a célula na qual o erro ocorreu.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF2.2.1 – Célula ocupada  
**Score:** — (semantico) | **ID:** c878092288f12a46

O WCS Velox deve tratar eventos de célula bloqueada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF2.2.2. – Erro de sensor / posicionamento  
**Score:** — (semantico) | **ID:** 4dda3075a2757e98

O WCS Velox deve tratar eventos de célula com erro de posicionamento ou sensoriamento.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF2.3 – Realocação de entrada  
**Score:** — (semantico) | **ID:** 70767846af155975

Em caso de erro ao armazenar, o WCS Velox deve procurar outra célula para armazenamento e informar o transelevador. Caso não exista nova célula para armazenagem, o WCS Velox deve retirar o pallet do transelevador e fazê-lo recircular (ou enviar para o próximo ponto de decisão).

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF3 – Retirada de pallets  
**Score:** — (semantico) | **ID:** b1a025b5c1d7f1ac

O WCS Velox deve ser capaz de orquestrar a retirada de pallets do armazém.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF3.2 – Retirada com fracionamento de pallet  
**Score:** — (semantico) | **ID:** 6c9d249baca9ac9b

O WCS Velox deve ser capaz de orquestrar a retirada de pallets com fracionamento do armazém (sem fracionamento). Nesse caso, deve ser capaz de armazenar novamente a sobra de fracionamento (pallet fracionado) no armazém sem a necessidade de nova ordem de entrada de pallet do SAP WM.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF3.3 – Confirmação de retirada de pallets  
**Score:** — (semantico) | **ID:** cb386e1902c69724

O WCS Velox deve enviar confirmação de retirada de pallet do armazém para o SAP WM.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF3.5 – Evento de erro ao retirar  
**Score:** — (semantico) | **ID:** a48819f6f3ed85d7

O WCS Velox deve ser capaz de interpretar o evento de erro ao retirar pallets e registrar a causa do erro, bloqueando se necessário a célula na qual o erro ocorreu.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF3.5.1 – Célula vazia  
**Score:** — (semantico) | **ID:** 1a3fbd2e4ff7075f

O WCS Velox deve tratar eventos de célula vazia.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF3.5.2 – Erro de sensor/posicionamento  
**Score:** — (semantico) | **ID:** 415cf9fc0d119ced

O WCS Velox deve tratar eventos de célula com erro de posicionamento ou sensoriamento.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF5 – Sincronização de ciclo de entrada e saída  
**Score:** — (semantico) | **ID:** 284c32e4c4ee7026

O WCS Velox deve balancear ciclo de entrada e saída de pallets nos transelevadores.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7 – Algoritmo de escolha de célula para armazenagem  
**Score:** — (semantico) | **ID:** f6a5bf770de2bd3f

O WCS Velox deve calcular a melhor célula para armazenagem segundo um algoritmo de armazenagem bem definido.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.1 – Sazonalidade  
**Score:** — (semantico) | **ID:** 67321ccbebd66a67

O WCS Velox deve considerar a presença de sazonalidade num produto quando da escolha da melhor célula para armazenagem. Caso o produto do pallet sendo armazenado possua sazonalidade e este esteja em baixa estação, deve ser armazenado nas células mais distantes do transelevador.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.2 – Distribuição de produtos  
**Score:** — (semantico) | **ID:** dfe54943ad0c2d54

O WCS Velox deve considerar a distribuição de produtos e lote de produtos entre transelevadores em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.4 – Utilização dos transelevadores  
**Score:** — (semantico) | **ID:** 6ec7c0fcedf7aca4

O WCS Velox deve considerar a distribuição do uso dos transelevadores em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.5 – Pulmão de entrada  
**Score:** — (semantico) | **ID:** 79db23541cf11363

O WCS Velox deve levar em consideração a capacidade dos pulmões de entrada dos transelevadores em seu algoritmo de armazenagem. Corredores cuja capacidade tenha sido atingida devem ser excluídos ao se escolher a célula de armazenagem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.6 – Carga acumulada por coluna  
**Score:** — (semantico) | **ID:** 6bf6b227b9f37af7

O WCS Velox deve considerar a carga (peso) acumulada por coluna em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.7 – Disponibilidade dos transelevadores  
**Score:** — (semantico) | **ID:** 7f1fba8255116650

O WCS Velox deve considerar a disponibilidade dos transelevadores em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.9 – Tipo de conservação  
**Score:** — (semantico) | **ID:** f8a96e546698e90b

O WCS Velox deve segregar os pallets entrantes por tipo de conservação do cadastro de produtos (congelado ou resfriado) para considerar somente os corredores do tipo de conservação em questão em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.10 – Distância de armazenagem  
**Score:** — (semantico) | **ID:** b6d42b838b59eca5

O WCS Velox deve considerar a distância relativa à entrada do transelevador em seu algoritmo de armazenagem. Pallets sem sazonalidade ou em alta estação tem priorizadas as células mais próximas a entrada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.11 – Controlar capacidade dos corredores de entrada  
**Score:** — (semantico) | **ID:** 3e7dede1ff396bc5

O WCS Velox deve ser capaz de controlar a capacidade dos corredores de entrada dos transelevadores (ocupação sinalizada pelo PLC dos transelevadores). O WCS Velox deve parar de enviar pallets para um lado do transelevador quando a capacidade máxima do corredor de entrada dele for atingida.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF8.1 – Tipo de ordem de retirada  
**Score:** — (semantico) | **ID:** 5cca4f7c6af166e9

O WCS Velox deve ser capaz de processar diferentemente a saída de pallets segundo o tipo de ordem de entrada proveniente do SAP WM.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF8.2 – Movimentos  
**Score:** — (semantico) | **ID:** 54bae807abe0577d

O WCS Velox deve ser capaz de aplicar regras especificas para cada tipo de movimento do SAP WM no processamento das ordens de saída de pallets.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF8.2.4 – Venda futura  
**Score:** — (semantico) | **ID:** 2711891b3a50fd35

O WCS Velox deve tratar movimentos de venda futura de pallets.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF20 – Gestão de ordens de armazenamento de pallets  
**Score:** — (semantico) | **ID:** d45b93a34176a0a7

No WCS Velox deve ser possivel visualizar as ordens de armazenamento que existem no sistema, assim como todos os produtos de cada ordem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF21 – Gestão de ordens de saída de pallets  
**Score:** — (semantico) | **ID:** 30624e1d0ce460f2

No WCS Velox deve ser possivel visualizar ar ordens de saída que existem no sistema, assim como todos os produtos de cada ordem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF34 – Criação de zona de armazenagem preferencial  
**Score:** — (semantico) | **ID:** f1e93a3b7a54ab84

O WCS Velox deve permitir a criação de zonas de armazenagem preferencial.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Abreviações  
**Score:** — (semantico) | **ID:** b3f54af33636b44a

As regras funcionais do WCS estão divididas em três regras distintas:
Regras de Entrada – regras e tratamentos que são aplicados quando o orquestrador identifica a entrada de um pallet novo no armazém;
Regras de Saída – regras e tratamentos que são aplicados quando o orquestrador identifica a necessidade de atender ordens de saída;
Realocação Automática – regras e tratamentos que são aplicados quando o TREL está em modo de realocação automática e o orquestrador identifica a necessidade de processar a realocação de pallets.
A execução das regras implementadas no WCS depende da chamada por parte do orquestrador que é o regente de todas as regras, ele sabe quando cada uma deve ser executada.
Na sequência cada uma das regras será apresentada em detalhes.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Regras de entrada  
**Score:** — (semantico) | **ID:** 68b85004b0456167

A definição das regras funcionais referentes à entrada de pallets no armazém está detalhada neste item do documento.
Na entrada de um pallet, além da orquestração realizada pelo WCS em validar o mesmo no Portal de Entrada, há a aplicação de algumas regras para definir o melhor destino deste pallet, atendendo alguns requisitos definidos pela Brasil Foods de acordo com suas regras de negócio.
Um pallet, ao chegar à entrada do armazém, pode sofrer três tratamentos distintos de acordo com suas características e a situação vigente dos equipamentos e células de armazenamento do armazém. Os tratamentos são os listados abaixo:
Atender alguma ordem de saída;
Realizar o Crossdocking;
Armazenar.
O orquestrador é responsável por definir qual regra deve ser chamada, se será testado a regra de procurar por uma ordem de saída ou crossdocking ou regra de armazenar o pallet.
Na sequência, cada uma dessas regras que podem ser chamadas na entrada de um pallet será apresentada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Armazenamento  
**Score:** — (semantico) | **ID:** d39ebe245df41273

A imagem abaixo apresenta as regras para verificar se há uma célula candidata para armazenamento do pallet. Esta regra faz parte da regra de entrada de pallets no caso de identificar a melhor posição para armazenar o pallet no armazém dentre todos os transelevadores disponíveis. O armazenamento pode ser realizado em células de zonas de exportação cadastradas para o produto ou no armazém como um todo.
O algoritmo inicia a busca pelas células candidatas a armazenamento do pallet em questão.
O WCS busca todos os TRELs que estão em funcionamento, que atendam o tipo de conservação e que possuam mesa de entrada disponível.
TREL em funcionamento: status em automático e disponível;
Tipo de conservação: Congelado ou Resfriado;
Mesa de Entrada Disponível: Deve ser inferior ou igual ao número configurado no parâmetro AvailableTablePlaces da tela de configuração de parâmetros do WCS. Para calcular é preciso buscar o número de células com status “Reservado para Entrada” cujos pallets reservados estejam com o status Pallet Location em “ToTranselevatorXEntrance” do nível do TREL em questão, onde X corresponde ao nível do TREL.
Para os TRELs que resultaram da busca é montado a quíntupla TREL, P1, P2, P3, P4;
P1 é o número de missões do TREL.
P2 é a quantidade relativa de produtos deste SKU+Faixa para o corredor atendido pelo TREL comparado ao estoque todo.
P3 é a quantidade relativa de produtos deste SKU+Faixa no corredor atendido pelo TREL comparado ao total de produtos neste corredor.
P4 é a menor/maior distância de uma célula disponível para armazenamento considerando as colunas deste TREL (Excluindo as células das zonas de exportação), ordenando por profundidade z decrescente, depois pela distância crescente/decrescente. P4 contempla a posição no corredor cuja distância é a menor possível e neste cálculo são consideradas as variáveis: altura do pallet, peso do pallet e zona. Caso o produto referente a este pallet tenha alguma relação com determinada zona de exportação criada, esta regra será aplicada para as células pertencentes às zonas de exportação no qual ele pertencer.
Para cada TREL que resultou da pesquisa anterior a quíntupla é montada em uma lista, identificando qual a posição que o TREL atende que possui menor distância para armazenar o pallet. Se o TREL não possuir nenhuma célula disponível ele não entra nesta lista.
Nota: A distância pode ser maior/menor conforme a sazonalidade do produto, ou seja, se for um produto em Baixa Estação será considerada a maior distância de uma célula disponível para armazenamento, porém caso seja um produto de Alta Estação/Normal será considerada a menor distância de uma célula disponível para armazenamento.
Se a lista estiver vazia significa que nenhum TREL está disponível ou possui célula disponível para o armazenamento. Neste caso se o pallet estiver em um ponto de decisão ele deve ser direcionado para circular até o próximo ponto de decisão para aguardar disponibilidade do transelevador/células ou deve ser rejeitado caso se encontre em um portal de entrada.
Uma mensagem deve ser enviada ao PLC para informar que o destino do pallet deve ser o próximo ponto de decisão ou para informar que o pallet deve ser rejeitado.
Caso o produto do pallet que está sendo processado tenha relação com alguma zona de exportação, ele irá verificar o cadastro do produto para identificar a ação que será tomada, poderá executar as duas ações:
Verificar a possibilidade de armazenar em outro local do armazém, desconsiderando a zona de exportação definida e executar a regra de armazenamento novamente;
Atualizar a localização do pallet para ‘Rejeitado’ e registrar no sistema o motivo do rejeito “Não há células disponíveis na zona de exportação definida para o Produto”.
Caso a lista possua pelo menos um TREL, o algoritmo de cálculo de melhor lugar (BP) é chamado para decidir de todos os TRELs com suas células escolhidas qual é a melhor posição para armazenar o pallet. As regras do algoritmo BP estão descritas na seção 4.1.3 Best Place - BP. O algoritmo retorna como resultado a quíntupla do TREL que foi escolhida como melhor posição.
Com o resultado do algoritmo BP, o WCS seta o status do Pallet Location para “ToTranselevatorXEntrance”, onde X é o nível do TREL, indicando que o pallet está se direcionando para o berço de entrada do TREL.
O status da célula escolhida pelo algoritmo é alterado para “Reservado para Entrada”.
O pallet deve ser direcionado para a entrada do TREL escolhido pelo algoritmo BP.
Uma mensagem deve ser enviada ao PLC para informar que o destino do pallet deve ser o berço de entrada do TREL escolhido.
Assim, as regras de armazenamento definem para onde o pallet deve ser direcionado, seja para o berço de entrada do TREL que possui a melhor posição ou para o próximo ponto de decisão caso haja indisponibilidade de TREL ou de células de armazenamento.
Caso o pallet esteja em um ponto de decisão, e há uma célula previamente reservada para entrada ele terá seu status alterado para vazia e uma nova célula será calculada para este pallet.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Detalhes de Crossdocking  
**Score:** — (semantico) | **ID:** 3bc849929891e18a

A regra de Crossdocking é utilizada para avaliar se há algum pallet armazenado disponível para o Crossdocking com o pallet que está entrando. O Crossdocking é a troca de um pallet que estava reservado para saída pelo pallet que está entrando no armazém, desde que este pallet atenda aos mesmos requisitos da ordem que reservou o pallet do armazém para saída. Os requisitos da ordem que deve atender são:
SKU – Mesmo produto;
Faixa – Dentro da mesma faixa de validade solicitada na ordem;
Centro – Mesmo centro de custo do SAP.
Existem outras regras que devem ser checadas para habilitar o pallet que está entrando a fazer o crossdocking com o que estava reservado para saída. A imagem abaixo mostra as regras que regem o crossdocking.
O WCS busca uma lista com todos os pallets que estão reservados para saída no armazém atendendo aos seguintes filtros:
Os pallets devem estar reservados para ordens NT;
Pallets devem ser para movimentos de expedição ou transferência (não podem ser de reabastecimento);
Os pallets são ordenados pela ordem de validade.
A lista de pallets é filtrada novamente, restando apenas os pallets cujas ordens possam ser atendidas pelo pallet que está entrando, ou seja, que possua mesmo SKU, faixa e centro.
Para o pallet que está entrando poder substituir um que já estava reservado também é necessário que a diferença entre as datas de expiração de ambos os pallets esteja dentro de uma tolerância configurada no WCS.
Se a lista resultante tiver pelo menos um item, o primeiro item da lista é o que será retornado, identificando com qual pallet armazenado ocorrerá o crossdocking. Se a lista estiver vazia significa que o pallet que está entrando não pode fazer crossdocking com nenhum que esteja armazenado.
* Existe uma tolerância, em dias, que pode ser especificada no sistema para a realização do crossdocking quando da determinação da faixa (valor padrão é zero dias).
** Só é possível realizar crossdocking de movimentos de expedição (WMTOCO para o SAP), porque a confirmação dos movimentos de reabastecimento deve ocorrer no momento da reserva do pallet para saída.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Regras de saída  
**Score:** — (semantico) | **ID:** 713de8e995abcff3

A definição das regras funcionais referentes à saída de pallets do armazém está detalhada neste item do documento. A escolha dos pallets para saída está diretamente ligada com a ordem de saída enviada pelo SAP, para cada ordem de saída será escolhido o melhor pallet que atende esta ordem.
O tratamento das ordens de saída está dividido de acordo com o tipo de movimento requerido pelo SAP. Para cada um destes movimentos há um tratamento particular a ser dado pelo WCS, considerando regras específicas para o movimento. Os seguintes tipos de movimentos estão previstos:
Expedição – Venda de itens (Venda Campo/Venda Direta);
Transferência de Pallet – Transferência entre centros de distribuição e varia de acordo com a quantidade de itens ou peso dentro do pallet;
Completo – Todo o pallet é considerado;
Incompleto – Apenas alguns itens são considerados, o pallet é fracionado.
Reabastecimento – Abastecimento de alguma área, como por exemplo, a área de picking. O reabastecimento é dividido de acordo com a rotatividade do SKU.
Baixo Giro – produtos que saem com baixa frequência do armazém;
Médio Giro – produtos que saem com média frequência do armazém.
A seguir são listadas algumas regras e conceitos gerais a serem considerados em qualquer tipo de movimento de saída, na sequência será apresentado o fluxo de regras que rege todo o processo de saída de pallets.
As ordens de saída serão processadas uma a uma, procurando pelo melhor pallet que a atenda e, ao encontrar, configurá-lo para processar sua saída.
Cada ordem possui o tipo de movimentação, o SKU, faixa e a quantidade requerida. Assim, o pallet que atenderá a ordem deverá possuir as mesmas características, além de atender a outras validações que variam com o tipo de movimento. A quantidade a ser considerada varia de um SKU para outro, no WCS está definido se o item será contado em unidades ou em peso variável, para este último há uma faixa de tolerância caso o pallet não atenda precisamente o peso requerido pela ordem. Esta é uma característica encontrada no cadastro do produto.
Pallets parciais – Um pallet pode atender parcialmente uma ordem caso esta ordem requeira uma quantidade menor (unidade ou peso variável) do que o pallet possui. A saída do pallet será processada, porém ele retornará para o armazém com a quantidade restante.
Agregação de ordens – Como um pallet pode atender parcialmente uma ordem, ele fica disponível para atender outras ordens com a quantidade de itens restantes. A agregação de ordens pode acontecer enquanto o pallet estiver armazenado (“StoredOnShelf”) ou a caminho da saída (“ToPickingArea”, “ToBeDelivered” ou “Delivering”), ou seja, as ordens podem ser agregadas ao pallet conforme ele se desloca para saída. Para efeitos de otimização do processo de saída para atender uma ordem, se todos os critérios anteriores empatarem será dado prioridade a pallets que já estão destinados a saídas.
Venda Futura – A ordem de saída pode ter uma característica que acarreta a reserva do pallet para venda futura, ou seja, o pallet atende à ordem de saída, porém sua saída só será efetivamente processada no futuro. Mesmo que o pallet possua alguns itens reservados para venda futura poderá atender a outras ordens de saída.
Liberação de Venda Futura – A ordem de saída pode ter uma característica que acarreta na liberação para saída do pallet reservado para venda futura. Deste modo, o WCS procede com a entrega, física, do pallet para o ponto de entrega.
Na imagem abaixo está descrito o fluxo básico da saída de pallets.
Caso haja uma ordem específica para um pallet (OT), ela será processada da seguinte forma:
Caso o pallet esteja armazenado, sua localização será reservada para saída.
O destino será determinado de acordo com o tipo de movimento e conversação do produto.
Os itens da ordem serão deduzidos;
Se for um movimento com característica de venda futura, os itens do pallet serão marcados como tal.
Se for uma ordem com característica de liberação de venda futura, o item de venda futura liberado (baseado no id da OT e no código do pallet) será autorizado a ser entregue pelo WCS; caso o pallet possua itens de ordem de saída sendo entregues, é necessário que o item de venda futura a ser liberado possua o mesmo tipo de movimento dos itens sendo entregues; caso contrário, a OT permanece como pendente;
Nota: A OT continua pendente (não é processada), caso o pallet já esteja atendendo outras ordens (OT ou NT) que possuam tipo de movimento diferentes da OT em questão; neste caso, a OT é processada quando o pallet tiver atendido as outras ordens que precederam esta OT.
Caso não seja uma ordem OT, o movimento da ordem é testado com cada um dos movimentos possíveis e o algoritmo entrará nos detalhes de cada um deles conforme apresentado na imagem abaixo.
Se for de Expedição chamará as regras de expedição (Expedição);
Se for de Transferência de Pallet Completo chamará as regras de (Transferência de Pallets Completos);
Se for de Transferência de Pallet Incompleto chamará as regras de (Transferência de Pallets Incompletos);
Se for de Reabastecimento de Médio Giro chamará as regras (Reabastecimento de Baixo Giro);
Se for de Reabastecimento de Baixo Giro chamará as regras (Reabastecimento de Médio Giro).
Se não for nenhum destes cinco movimentos previstos, trata-se de movimento inválido e a regra é interrompida.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Realocação automatica  
**Score:** — (semantico) | **ID:** 458e767f9e9d7689

Esta seção detalha as regras funcionais da realocação automática de pallets no armazém. A realocação consiste em otimizar a ocupação do armazém seguindo algumas regras pré-definidas, ou seja, os pallets são tirados de suas posições e colocados em células que melhor aproveitem a distribuição no armazém e os eventos de entrada e saída de pallets.
Na sequência serão explicados os detalhes das regras para definir quais pallets devem ser realocados e para quais posições os mesmos devem ser direcionados.
A realocação será feita por transelevador e após a escolha do pallet e da nova posição de destino o agendador de missões irá criar missões de realocação para este TREL que foi colocado em modo de realocação automática.
Caso o transelevador possua alguma missão de saída pendente (algum pallet reservado para saída) ele não pode ser colocado em modo de realocação.
O orquestrador será o responsável por definir qual regra de realocação será chamada e ambas as regras retornarão o par (pallet e célula de destino) para o agendador gerar as missões de realocação para o transelevador. O orquestrador deve passar um parâmetro para dizer se a busca deve ser feita para pallets tipo 1 ou tipo 2.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Ações  
**Score:** — (semantico) | **ID:** 020c305187b6de82

Ações, do ponto de vista do WCS Velox, consiste em entidades que encapsulam informações, geralmente fornecidas pelos equipamentos do armazém. Cada ação é qualificada e disparada por eventos gerenciados pelo WCS Velox e equipamentos dentro do armazém (exemplos destes eventos são ‘chegada ao berço de entrada’, ‘chegada ao ponto de entrega’, etc.). Associado a estes eventos, são carregados dados importantes para o tratamento no WCS Velox (código da carga, posição atual da carga etc.).

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada ao portal de entrada  
**Score:** — (semantico) | **ID:** beb3e41d8f1cd6fe

Descreve as regras de orquestração a serem executadas no evento de chegada de um pallet ao portal de entrada.
Neste evento, há seis situações possíveis de ocorrência e, para cada situação, a sequência de ações executadas pelo WCS tem particularidades. As situações possíveis de entrada de pallets estão descritas abaixo.
Situação 1 – Entrada pela fábrica sem rejeito em modo online.
Esse primeiro caso corresponde à entrada de um pallet pela fábrica, em modo de funcionamento online, quando não há rejeito do pallet no portal de entrada, ou seja, o pallet entrará no armazém para ser efetivamente armazenado em alguma célula.
O controlador do transportador da fábrica registra a chegada do pallet no portal de entrada;
O ActionProcessor, ao receber a informação, dispara a regra dos portais de entrada do sistema. Para definir qual o tratamento deve ser dado ao pallet.
Após a decisão da regra de entrada no sistema, com o destino do pallet dentro do armazém (é um caso de entrada sem rejeito), o ActionProcessor dispara o envio de uma mensagem WMTOCO para o SAP para informar que o pallet entrou no armazém e há necessidade de troca contábil no SAP;
O ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga até o berço de entrada.
Situação 2 – Entrada pela fábrica com rejeito em modo online.
Este segundo caso corresponde à entrada de um pallet pela fábrica, em modo de funcionamento online, quando há rejeito do pallet no portal de entrada, ou seja, ao chegar ao portal de entrada, o pallet será rejeitado.
O controlador do transportador da fábrica registra a chegada do pallet no portal de entrada;
O ActionProcessor ao receber a informação dispara a regra dos portais de entrada do sistema. Para definir qual o tratamento deve ser dado ao pallet.
Após a decisão da regra de entrada no sistema, com o rejeito do pallet (é um caso de entrada com rejeito), o ActionProcessor dispara o envio de uma mensagem WMTOCO para o SAP para informar que a ordem de entrada foi cancelada, porque o pallet foi rejeitado;
O ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga de volta para a mesa de entrada.
Situação 3 – Entrada pela transferência/devolução em modo online.
Este terceiro caso corresponde à metade de um pallet pela área de transferência/devolução, em modo de funcionamento online.
O controlador do transportador do nível inferior registra a chegada do pallet no portal de entrada;
O ActionProcessor ao receber a informação dispara a regra dos portais de entrada no sistema. Para definir qual o tratamento deve ser dado ao pallet.
Dependendo da decisão da regra de entrada no sistema, o ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga de volta para a mesa de entrada:
Caso ocorra rejeito do pallet a decisão enviada ao controlador é movimentar a carga de volta para a mesa de entrada;
Caso não ocorra rejeito do pallet a decisão enviada ao controlador é movimentar a carga para o berço de entrada.
Situação 4 – Crossdocking ou saída direta pela entrada de fábrica em modo online.
Este quarto caso corresponde à saída direta de um pallet ou ocorrência de Crossdocking pela entrada da fábrica em modo online, ou seja, não houve rejeito de pallet e ele não será destinado a armazenamento, pois já atendeu a uma ordem de saída.
O controlador do transportador do nível superior registra a chegada do pallet no portal de entrada;
O ActionProcessor ao receber a informação dispara a regra dos portais de entrada do sistema. Para definir qual o tratamento deve ser dado ao pallet.
Após a decisão da regra de entrada no sistema, com o pallet atendendo a uma ordem de saída, o WCS Velox precisa primeiro confirmar ao SAP a entrada deste pallet para depois confirmar a saída por atender a uma ordem de saída. O ActionProcessor dispara o envio de uma mensagem WMTOCO para o SAP para informar de que a ordem de entrada foi validade e para confirmar que a ordem de saída foi atendida pelo pallet;
O ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga para o berço de entrada do nível superior, para, posteriormente, ser destinado a saída pelo nível inferior.
Situação 5 – Crossdocking ou saída direta pela entrada de transferência/devolução em modo online.
Este quinto caso correspondente à saída direta de um pallet ou ocorrência de Crossdocking pela entrada de transferência/devolução em modo online, ou seja, não houve rejeito de pallet e ele não será destinado a armazenamento, pois já atendeu a uma ordem de saída, ficará retido na mesa de entrada.
O controlador do transportador do nível inferior registra a chegada do pallet no portal de entrada;
O ActionProcessor ao receber a informação dispara a regra dos portais de entrada do sistema. Para definir qual o tratamento deve ser dado ao pallet.
Após a decisão da regra de entrada no sistema, com o pallet atendendo a uma ordem de saída, o WCS precisa primeiro confirmar ao SAP a entrada deste pallet para depois confirmar a saída por atender a uma ordem de saída. O ActionProcessor dispara o envio de uma mensagem WMTOCO para o SAP para informar de que a ordem de entrada foi validada, e para confirmar que a ordem de saída foi atendida pelo pallet.
O ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga de volta para a mesa de entrada (rejeitado por atender ordem de saída), para evitar que o pallet entre no armazém só para recircular até a saída.
Situação 6 – Entrada (fábrica, transferência ou devolução) em modo de contingência.
Este sexto caso corresponde á entrada de um pallet pela fábrica, transferência ou devolução em modo de funcionamento em contingência, ou seja, entrada de um pallet quando o WCS está funcionando desconectado do SAP.
O controlador do transportador da fábrica registra a chegada do pallet no portal de entrada;
O ActionProcessor ao receber a informação dispara a regra dos portais de entrada do sistema. Para definir qual o tratamento deve ser dado ao pallet.
Após a decisão da regra de entrada no sistema, com o destino do pallet dentro do armazém, o ActionProcessor dispara o envio de uma mensagem WMTOCO de entrada em contingência para o SAP. Ela ficará represada no WCS até que volte para o modo online, para então ser enviada ao SAP;
O ActionProcessor retorna para o controlador do transportador a decisão de movimentar a carga até o berço de entrada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Regra dos portais de entrada no sistema  
**Score:** — (semantico) | **ID:** bff76aae2bda640b

Apresenta as regras de entrada de pallet no sistema. Esta regra é chamada sempre que o controlador do transportador informar ao ActionProcessor da chegada de um novo pallet.
Essa regra inicial serve apenas para testar os três estados do WCS:
Online;
Em contingência;
Em inventario.
A partir dela cada uma das sub-regras especificas a cada um dos estados do WCS será chamado. Os detalhes desta regra estão detalhados abaixo:
O primeiro estado do WCS a ser testado é o ‘Online’. Caso o WCS esteja neste modo, a sub-regra de entrada online é chamada.
O segundo estado do WCS a ser testado é o ‘Em contingência’. Caso o WCS Velox esteja neste modo, a sub-regra de entrada em contingência é chamada.
O terceiro estado do WCS a ser testado é o ‘Em inventário’. Caso o WCS esteja nesse modo, a sub-regra de entrada em inventário é chamada.
No final da regra é retornado o destino do pallet que foi resultado da sub-regra de entrada que foi chamada de acordo com o estado do WCS.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Regra de entrada online  
**Score:** — (semantico) | **ID:** 281677a1f4d0c6a5

Apresenta as regras de entrada online. Esta regra é chamada pela regra de entrada no sistema sempre que o WCS Velox estiver operando no modo online. Ele trata o destino de um pallet que chega ao portal de entrada quando o WCS estiver online.
Ao chegar ao portal de entrada o pallet pode possuir os seguintes status de localização (‘PalletLocation’):
Na entrada do sistema (‘InSystemEntrance’) – quando um pallet possui uma ordem de entrada;
Entregue (‘Delivered’) – quando um pallet saiu do armazém, porém retornou por possuir caixas restantes;
Na área de picking (‘InPickingArea’) – quando um pallet foi destinado a área de picking e retornou para ser para ser armazenado novamente.
Rejeitado (‘Rejected’) – quando foi rejeitado previamente por algum motivo.
No portal de entrada ele é testado pelo WCS nas seguintes condições:
Verifica se o pallet está cadastrado no sistema;
Verifica a localização do pallet (InSystemEntrance), InPickingArea);
Verifica se existe ordem de entrada pendente para o pallet (somente para pallets com localização ‘InSystemEntrance’ e ‘Rejected’);
Verifica se o número de caixas disponíveis no pallet é maior que zero;
Verifica se o armazém possui posição disponivel para armazenar o pallet (utiliza as regras funcionais do algoritmo de entrada de pallet para determinar a disponibilidade).
Caso alguma condição falhe, o pallet é rejeitado pelo WCS e o sistema executa as seguintes funções, encerrando a regra:
WCS envia integração WMCATO para alterar o status para cancela, se for entrada pela fábrica;
Envia decisão de rejeito para a mesa de entrada correspondente;
Registra o motivo de rejeito no WCS;
Localização do pallet é marcada como ‘Rejected’;
Se não houver rejeito pelo WCS, é checado se houve rejeito pelo PLC.
Em caso de rejeito pelo PLC, o sistema executa as seguintes funções e encerra a regra:
WCS envia integração WMCATO para alterar o status para cancela, se for entrada pela fábrica;
Envia decisão de rejeito para a mesa de entrada correspondente;
Registra o motivo de rejeito no WCS;
Localização do pallet é marcada como ‘Rejected’;
Caso o motivo de rejeito seja erro de leitura de etiqueta não é gerada a WMCATO.
Não havendo rejeito pelo PLC, o WCS Velox atualiza as informações de temperatura, peso e perfil provenientes do PLC.
O pallet é testado quanto ao seu status, se estiver bloqueado significa que deve ser armazenado. Neste caso o WCS Velox executa as seguintes funções e encerra a regra:
Processa o algoritmo de entrada de pallets;
Se for entrada pela fábrica, WCS envia integração WMTOCO para validar e o SAP realizar a troca contábil.
Envia a decisão com destino ao berço de entrada;
Localização do pallet é marcada como ‘ToFirstTranselevatorEntrance’ (entrada pelo portal inferior) ou ‘ToSecondTranselevatorEntrance’ (entrada pelo portal superior).
Se o pallet não estiver bloqueado, antes de dar entrada no mesmo, a regra de atender diretamente uma ordem de saída ou realizar crossdocking é chamada, para verificar se o pallet que está entrando atende a uma ordem de saída pendente.
Nota: o WCS verifica tambem se o pallet possui itens de ordem de saída não entregues (itens não sendo de venda futura) ou se possui itens de ordem de saída de venda futura liberados; nestes casos, envia o pallet diretamente para o ponto de entrega.
Caso não atenda a nenhuma ordem de saída significa que o pallet deve ser armazenado. Neste caso o WCS executa as seguintes funções e encerra a regra:
Processa o algoritmo de entrada de pallets;
Se for entrada pela fábrica, WCS envia integração WMTOCO para validar e o SAP realizar a troca contábil.
Envia a decisão com destino ao berço de entrada;
Localização do pallet é marcada como ‘ToFirstTranselevatorEntrance’ (entrada pelo portal inferior) ou ‘ToSecondTranselevatorEntrance’ (entrada pelo portal superior).
Se o pallet atender a uma ordem de saída é verificado por onde o mesmo está entrando;
Se não for entrada pela fábrica, o WCS executa as seguintes funções e encerra a regra:
WCS envia integração WMTOCO para confirmar que o pallet entrou no armazém;
A confirmação que a ordem de saída foi atendida pelo pallet, sera enviada pela WMTOCO
Envia decisão com destino mesa de entrega, sinalizando status de retorno de pallet para saída;
Localização do pallet é marcada como ‘ToBeDelivered’.
Se for entrada pela fábrica, o WCS procura pelo transelevador disponivel com menor número de missões do mesmo tipo de conservação do produto, a fim de utilizá-lo para transferir o pallet do nível superior para inferior. O WCS Velox executa as seguintes funções e encerra a regra:
WCS envia integração WMTOCO para validar e o SAP realizar a troca contábil.
A confirmação que o pallet entrou no armazém, sera enviada pela WMTOCO
A confirmação que a ordem de saída foi atendida pelo pallet, sera enviada pela WMTOCO
Envia decisão com destino ao berço de entrada – o pallet deve ser direcionado ao nível de baixo para chegar à saída;
Localização do pallet é marcada como ‘ToBeDelivered’.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Regra de entrada em contingência  
**Score:** — (semantico) | **ID:** 82d172bdf3ad6c23

Apresenta as regras de entrada em contingência. Esta regra é chamada pela regra de entrada no sistema sempre que o WCS estiver operando no modo contingência. Ela trata o destino de um pallet que chega ao portal de entrada quando o WCS estiver em contingência.
Ao chegar ao portal de entrada o pallet pode possuir os seguintes status de localização (‘PalletLocation’):
Na entrada do sistema (‘InSystemEntrance’) – quando um pallet possui uma ordem de entrada;
Entregue (‘Delivered’) – quando um pallet saiu do armazém, porém retornou por possuir caixas restantes;
Na área de picking (‘InPickingArea’) – quando um pallet foi destinado a área de picking e retornou para ser armazenado novamente;
Rejeitado (‘Rejected’) – Quando um pallet foi rejeitado ao tentar entrar anteriormente.
Primeiramente o pellet e a ordem de armazenamento são criados com campos de contingência do telegrama.
No portal de entrada o pallet é testado pelo WCS nas seguintes condições
Verifica se o número de caixas disponíveis no pallet é maior que zero;
Verifica a localização do pallet (InSystemEntrance, InPickingArea ou Rejected);
Verifica se o armazém possui posição disponivel para armazenar o pallet (utiliza as regras funcionais do algoritmo de entrada de pallet para determinar a disponibilidade).
Caso alguma condição falhe, o pallet é rejeitado pelo WCS e o sistema executa as seguintes funções, encerrando a regra:
Envia decisão de rejeito para a mesa de entrada correspondente;
Registra o motivo de rejeito no WCS;
Localização do pallet é marcada como ‘Rejected’;
Se não houver rejeito pelo WCS Velox, é checado se houve rejeito pelo PLC.
Em caso de rejeito pelo PLC, o sistema executa as seguintes funções e encerra a regra:
Registra o motivo de rejeito no WCS;
Envia decisão de rejeito para a mesa de entrada correspondente;
Localização do pallet é marcada como ‘Rejected’.
Não havendo rejeito pelo PLC, o WCS atualiza as informações de temperatura, peso e perfil provenientes do PLC e processa o algoritmo de entrada de pallets.
O WCS Velox executa as seguintes funções e encerra a regra:
WCS realiza integração WMTOCO para pallet em contingência;
Envia decisão com destino ao berço de entrada;
Localização do pallet é marcada como ‘ToFirstTranselevatorEntrance’ (entrada pelo portal inferior) ou ‘ToSecondTranselevatorEntrance’ (entrada pelo portal superior).

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada a um berço de entrada  
**Score:** — (semantico) | **ID:** 09f7e40665d44b67

É disparada quando um pallet chega a um berço de entrada de um transelevador dentro dos transportadores. Estes pontos são as mesas pelas quais as cargas são pegas pelos garfos do transelevador e nas quais o WVS envia decisão de movimentação para o transelevador.
Ao ser notificado de um evento de chegada a um berço de entrada, as seguintes decisões de movimentação podem ser tomadas pelo WCS, dependendo do modo de operação do sistema e das regras funcionais aplicadas:
Direcionamento para célula de armazenamento;
Direcionamento para ponto de entrega.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de armazenar um pallet (decisão tomada pela regra dos berços de entrada). Nesse evento, o WCS direciona a carga para a célula reservada para armazenamento do transelevador.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de Crossdocking de um pallet (decisão tomada pela regra dos berços de entrada). Neste evento, o WCS Velox direciona a carga para o ponto de entrega do pallet.
O fluxo abaixo ilustra a regra dos berços de entrada do sistema. Neste diagrama, o WCS Velox primeiramente verifica se o pallet que chegou ao berço está atendendo uma ordem de saída. Em caso afirmativo, o WCS gera decisão para o transportador levar o pallet até seu ponto de entrega.
Em caso negativo, o status do pallet é verificado. Caso o pallet esteja ‘bloqueado’ (bloqueio SAP), o WCS procura uma célula disponivel para armazená-lo (utilizando o algoritmo de entrada de pallets). Caso não encontre uma célula disponivel, o pallet é destinado ao próximo ponto de decisão.
Caso o pallet não esteja ‘bloqueado’, o modo de operação do sistema é verificado. Caso o sistema esteja em modo diferente de ‘online’, o mesmo processamento de pallet ‘bloqueado’ é executado; caso contrário, o sistema procura por ordens de saída pendentes ou pallets de Crossdocking a fim de verificar se o pallet em questão não pode ser utilizado para atender uma ordem de saída diretamente.
Em caso afirmativo, o WCS Velox processa a saída do pallet; caso contrário, processa o armazenamento do pallet.
Nota: o WCS Velox verifica também se o pallet possui itens de ordem de saída não entregues (itens não sendo de venda futura) ou se possui itens de ordem de saída de venda futura liberados; nestes casos, envia o pallet diretamente para o ponto de entrega.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada a uma célula  
**Score:** — (semantico) | **ID:** ba4c9b78fc58d03f

Esta ação é disparada quando o transelevador finaliza a ação de armazenamento de uma carga em uma célula de armazenamento. O estado inicial da carga no WCS Velox é ‘Em Armazenamento’. De acordo com o modo de operação atual do WCS, diferentemente ações são tomadas.
Caso o WCS esteja operando em modo online, ele irá enviar a integração WMTOCO para o SAP notificando o armazenamento da carga. Na sequência, o WCS atualiza o status da célula no sistema, passando a mesma para ‘Ocupada’, atualizando o status da carga para ‘Armazenada na Prateleira’.
Caso o WCS Velox esteja operando em qualquer outro modo, o mesmo só irá atualizar o status da célula e da carga. O fluxo abaixo ilustra a sequência de ações realizadas pelo WCS após o recebimento de uma ação ‘Chegada a uma célula’.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alerta de célula ocupada  
**Score:** — (semantico) | **ID:** 533c32b330116e7e

Esta ação é disparada pelo transelevador quando o mesmo não consegue realizar uma missão de armazenamento devido à célula já estar ocupada. Caso isto aconteça, o WCS deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ocupada dentro do sistema.
Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador. Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula. Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o
armazenamento da carga.
O fluxo completo do processamento desta ação pode ser verificado na imagem abaixo. A carga permanece em estado de “Em armazenamento” durante todo o processamento, uma vez que a mesma ainda está em trânsito. A célula já ocupada tem o seu status atualizado no sistema, e a carga é realocada para uma nova posição ou para um ponto de decisão.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alerta de célula com erro  
**Score:** — (semantico) | **ID:** dc8775e5d4ebf787

Esta ação é disparada pelo transelevador quando ele não consegue realizar uma missão de armazenamento ou retirada de carga, pois a célula apresenta algum erro de estrutura (sensor desalinhado, problemas de dimensionamento da célula etc.). Caso isto aconteça, o WCS deverá tomar uma das seguintes ações:
No caso de estar efetuando um movimento de armazenamento de carga: o sistema deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ‘Célula com Erro’, caracterizando o motivo de acordo com o erro retornado pelo transelevador. Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador.
Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula.
Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
No caso de estar efetuando um movimento de retirada de carga, o sistema deverá verificar qual o seu estado de funcionamento, tomando uma das seguintes ações:
Caso esteja operando em modo “Inventário”, o WCS marca a célula como ‘Célula com Erro’ e com motivo fornecido pela mensagem de erro do transelevador.
Caso esteja operando em modo “Online”, o sistema deverá verificar se o movimento de saída foi realizado para atender uma OS ou transferência. Em caso afirmativo, o sistema deverá realizar o estorno dos itens de OS do pallet e alocar um novo pallet para as OSs. Caso contrário, o sistema gera uma mensagem M2 para o SAP com o status de ‘Cancela’.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Retirada de uma célula  
**Score:** — (semantico) | **ID:** 94246cfbb4679124

Esta ação é disparada pelo transelevador ao término de uma operação de retirada de um pallet de uma célula de armazenamento. Tal operação ocorre durante um movimento de retirada de um pallet, a partir de uma ordem de saída. Ao concluir a operação, o transelevador deverá encaminhar o pallet para uma nova posição no corredor ou para uma mesa de saída.
O processamento desta ação inicia-se atualizando o status da célula para vazia. Se a ordem de saída for referente a um movimento de expedição ou transferência, o WCS deverá enviar uma integração WMTOCO para o SAP confirmando a operação de retirada da carga da célula de armazenamento. Caso contrário, nada mais é feito.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alerta de célula vazia  
**Score:** — (semantico) | **ID:** e1b66ca1c43c00c8

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alerta de falha no transelevador  
**Score:** — (semantico) | **ID:** ebe60d6d2e8fd991

Esta ação é disparada pelo transelevador toda vez que algum erro não recuperável acontecer no transelevador. Esta situação só ocorre quando o PLC perde comunicação com o WCS e necessariamente acontece uma intervenção manual no transelevador.
Caso o transelevador esteja com uma carga no carro está será retirada para o berço de saída.
O operador deverá posteriormente corrigir a situação da carga dentro do sistema, e a operação do transelevador deverá ser feita manualmente até que a falha original seja sanada. Uma vez resolvido o problema, o transelevador deverá ser resetado para seu estado inicial, e as ações e decisões devem voltar a ocorrer normalmente entre o WCS e o transelevador.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada a um berço de saída  
**Score:** — (semantico) | **ID:** a7eca32e6d447c1e

Esta ação é disparada pelo transelevador toda vez que for realizada uma retirada de carga bem-sucedida e a carga tenha sido depositada no berço de saída do transelevador. Neste momento, a carga passa a ser considera como “Em trânsito” no WCS, e o WCS registra no log de transações a entrega da carga pelo transelevador no seu berço de saída.
Tal transação permite a confirmação da entrega da carga pelo transelevador, garantindo a baixa da carga do corredor no qual a carga estava armazenada. Caso o status anterior do pallet seja “A ser entregue”, o novo status do pallet passa a ser “Em trânsito”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Scheduler de missões  
**Score:** — (semantico) | **ID:** a203dd5c9954934e

O scheduler de missões é um processo agendado dentro do WCS que tem por responsabilidade o controle da geração e envio de missões para os transelevadores do armazém.
Dentro de seu fluxo de operação, são verificados os estados dos equipamentos individualmente, assim como o modo de operação do WCS. Desta forma, é possível separar o modo de trabalho de cada transelevador conforme segue:
Operação normal (atendimento de ordens de entrada e saída de pallets do transelevador);
Operação em realocação automática.
A imagem abaixo ilustra o processo principal do scheduler de missões, no qual, em intervalos de 2 segundos (tempo configurável), o WCS procura novas missões para cada um dos transelevadores disponíveis, isto é, em modo de funcionamento automático e ocioso (que não estão executando ordens).
A imagem abaixo ilustra o fluxo principal do scheduler de missões, responsável por encontrar a próxima missão que o transelevador deverá executar. Neste processo, primeiramente o WCS verifica se o transelevador em questão se encontra em modo de realocação automática. Em caso afirmativo, procede-se com a busca de missões de realocação de pallets; caso contrário, o WCS busca missões de entrada ou saída de pallets, num ciclo denominado ciclo duplo de entrada e saída.
Neste processo, o WCS procura de forma alternada missões de entrada de pallets e missões de saída de pallets para cada transelevador, minimizando assim a incidência de congestionamentos nos transportadores.
O fluxo envolvido na busca da próxima missão de descida (saída) para um transelevador é ilustrado na imagem abaixo.
O fluxo envolvido na busca da próxima missão de entrada para um transelevador é ilustrado na imagem acima.
Nota: neste ponto, é importante observar que, em função da existência de duas entradas e uma saída por transelevador, o WCS priorizará as entradas inferiores sobre as superiores para evitar congestionamentos no nível inferior (de saída).

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Realocação automática  
**Score:** — (semantico) | **ID:** 946b9b33d677aa41

Realocação automática é um processo acionado manualmente pelo usuário do WCS e que agrega as seguintes características ao sistema:
Capacidade de otimizar a ocupação do armazém segundo regras predeterminadas;
Capacidade realizar tal operação de forma individualizada por transelevador e, portanto, sem a necessidade de parada total de produção;
Utilização de dois critérios de parada para a otimização do armazém: ciclos de realocação (máximo) definidos pelo usuário ou alcance do estado onde não exista mais possibilidade de otimização.
A regra de realocação automática, invocada pelo scheduler de missões para encontrar as missões a serem enviadas para o transelevador em modo de realocação automática as duas buscas mencionadas se resumem conforme segue:
Busca posição para realocar pallet de baixa estação:
Critério de escolha do pallet: busca pallets (com posição com status ocupado) nos primeiros 2/3 das posições do corredor, ordenando por:
- Tipo do pallet: (tipo 1, tipo 2) ou (tipo 2, tipo 1) alternadamente a cada ciclo de busca
- Sazonalidade de produto: baixa estação, normal (exclui os pallets de alta estação)
- Prazo de validade do produto: decrescente (prioriza pallets mais distante do
vencimento)
No mesmo corredor, busca posição vazia mais distante (com relação à origem) do que a posição do pallet que está sendo escolhido para realocar, aplicando os mesmos critérios da regra de escolha de posições de pallet (algoritmo de entrada) aplicada na entrada, com a particularidade que a distância é ordenada de forma decrescente (ver algoritmo de entrada).
Busca posição para realocar pallet de alta estação:
Critério de escolha do pallet: busca pallets (com posição com status ocupado) nos últimos 2/3 das posições do corredor, ordenando por:
- Tipo do pallet: (tipo 1, tipo 2) ou (tipo 2, tipo 1) alternadamente a cada ciclo de busca
- Sazonalidade de produto: alta estação, normal (exclui os pallets de baixa estação)
- Prazo de validade do produto: crescente (prioriza pallets mais próximo do vencimento)
No mesmo corredor, busca posição vazia mais próxima (com relação à origem) do que a posição do pallet que está sendo escolhido para realocar, aplicando os mesmos critérios da regra de escolha de posições de pallet (algoritmo de entrada) aplicada na entrada.
O fluxo envolvido na geração de uma missão de realocação para um transelevador é ilustrado na imagem abaixo:

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Crossdocking e saídas diretas  
**Score:** — (semantico) | **ID:** 231b7992a5825448

Crossdocking, assim como saídas diretas, é uma otimização que o WCS executa durante o processo de recebimento de pallets no armazém em modo de funcionamento online.
Neste processo, antes de tomar a decisão de armazenar um pallet nas células de armazenagem automática, o WCS procura por ordens de saída pendentes ou pallets armazenados e reservados para saída que ainda não foram confirmados para o SAP (ordens de expedição e transferência, que retornem M4 como confirmação para o SAP) para verificar se os pallets entrantes podem atender tais ordens de saída. Em caso afirmativo (viabilidade de atender ordens de saída), o sistema utiliza o pallet entrante para atender a ordem de saída ao invés de retirar um pallet de uma célula de armazenagem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Listagem de ordens de armazenamento  
**Score:** — (semantico) | **ID:** c031839b60d61f93

Na tela mostrada na imagem abaixo nota-se que os registros filtrados são exibidos em páginas, permitindo um melhor desempenho da aplicação.
O WCS Velox deve permitir filtrar os registros pelas seguintes características da ordem de armazenamento:
Estado
Centro
Sistema de Depósito
Depósitos
Código do Cliente
Código do Pallet
Lote

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Listagem de produtos  
**Score:** — (semantico) | **ID:** fdcfa4e68eda9132

A Listagem de Produtos permite visualizar os itens cadastrados no armazém, como na imagem abaixo.
O sistema WCS deve possibilitar refinar a busca através dos seguintes filtros:
Código do produto
Faixa do produto
Prazo de validade

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de equipamentos  
**Score:** — (semantico) | **ID:** 355f0452de31af00

Esse modulo contém as funcionalidades que permitem analisar os equipamentos e os transelevadores, além das missões direcionadas aos PLCs.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Status do transelevador  
**Score:** — (semantico) | **ID:** 51c967222e786294

A partir dessa funcionalidade é possivel analisar o status dos transelevadores, como mostrado na imagem abaixo.
As informações contidas na tela são buscadas diretamente da interface com equipamentos do WCS.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Lista de missões  
**Score:** — (semantico) | **ID:** 799b0d7bfee6be69

As missões destinadas aos transelevadores podem ser visualizadas através dessa funcionalidade.
A imagem acima mostra que é possível refinar a busca pelos seguintes filtros:
Período em que a missão foi registrada no sistema
Código do Pallet
Equipamento
Tipo de Missão
Status da Missão
Id Transporte

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Histórico de paradas  
**Score:** — (semantico) | **ID:** db0b6d876bdfa3e2

Através dessa funcionalidade é possível analisar os momentos em que cada transelevador esteve parado.
Como mostrado na imagem acima é possível refinar a busca usando os seguintes filtros:
Transelevador – exibe todos os registros de paradas para o transelevador selecionado
Período – exibe eventos de paradas registradas dentro do período dado

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento do armazém  
**Score:** — (semantico) | **ID:** e211a524e3665eec

O módulo de Gerenciamento do Armazém possibilita gerenciar os principais recursos do armazém, detalhados a seguir.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Mapeamento  
**Score:** — (semantico) | **ID:** ff905703bd1a3dad

Para um melhor gerenciamento do armazém este é divido em regiões logicas, descritas nos itens a seguir.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de corredores  
**Score:** — (semantico) | **ID:** dcd4a455ad910b4a

Essa funcionalidade permite visualizar, editar, excluir e criar registros novos para corredores das áreas do armazém.
A opção “Detalhes” permite visualizar e alterar as informações do corredor selecionado.
A opção “Novo” na imagem acima, exibe uma tela semelhante a imagem abaixo, porém com os campos vazios e com a opção “excluir” desabilitada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de zonas  
**Score:** — (semantico) | **ID:** 01be2034a4c0f16a

Essa funcionalidade permite visualizar, editar, excluir e criar registros novos para as zonas do armazém.
A opção “Detalhes” permite visualizar e alterar as informações da zona selecionada.
A opção “Novo”, na imagem acima, exibe uma tela semelhando a imagem abaixo, porém com os campos vazios e com a opção “Excluir” desabilitada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de centros  
**Score:** — (semantico) | **ID:** 024a832e971fc34c

A partir dessa funcionalidade é possível visualizar e editar valores para os centros cadastrados no sistema.
É possivel editar os valores já cadastrados na própria lista. Selecionando a opção “Salvar” o sistema registra as alterações realizadas.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de depósitos  
**Score:** — (semantico) | **ID:** 82c14c9b6cb6591d

A partir dessa funcionalidade é possivel visualizar e editar valores para os depósitos cadastrados no sistema.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Realocação automática  
**Score:** — (semantico) | **ID:** 4f4706b99c68415b

Caso o transelevador esteja em “Realocação Automática”, o sistema permite parar o processo nas opções “Parar”, como mostrado na imagem abaixo. Caso o transelevador não esteja em Realocação Automática é possível:
Configurar o número de ciclos de realocação para cada transelevador
Iniciar individualmente o processo de realocação automática de cada transelevador a qualquer momento
Visualizar se o processo de realocação está acontecendo ou não no momento através do flag “Iniciado”.
O sistema considera a sazonalidade definida pelo produto, e mostra o status do equipamento na tela.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Fluxo de entrada e saída de pallets  
**Score:** — (semantico) | **ID:** c6b49a16d130e070

É possivel analisar quantos pallets congelados ou resfriados entraram e saíram em cada transelevador do armazém, como mostrado na imagem abaixo.
O sistema WCS Velox deve possibilitar refinar a busca para registros em um determinado período, como mostrado na imagem acima, caso não sejam especificadas datas de inicio e fim, todos os registros encontrados serão considerados.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Modelo  
**Score:** — (semantico) | **ID:** 1548dd8888e9d900

O WCS possui o módulo de Gerenciamento de Equipamentos responsável por centralizar todas as rotinas e estruturas necessárias para o protocolo de comunicação com os equipamentos do armazém.
O Gerenciador de Equipamentos é responsável por inicializar e carregar todas as configurações existentes para cada tipo de equipamento (transportador e transelevador), as quais irão modelar e mapear as mensagens e TAGs utilizados por cada um dos equipamentos e suas unidades funcionais.
A imagem abaixo ilustra o relacionamento existente entre as classes do modelo do Gerenciador de Equipamentos. A entidade EquipmentManager é a responsável por centralizar todo o gerenciamento dos equipamentos, criando uma entidade OPCEquipmentController para cada um dos equipamentos.
Cada OPCEquipmentController possui um OPCMessageProcessor, capaz de transformar as informações dos TAGs lidos em ações, que serão enviadas ao MainController do WCS capaz de processá-las, gerando decisões.
Cada OPCEquipmentController possui também um IOPCEquipmentIO, responsável por tratar os eventos de alteração de valor de TAG e por utilizar as definições contidas no TAGDictionary para avaliar quais TAGs de dados devem ser consultados em cada evento.
A comunicação com o OPC Client API é feita através da classe OPClientManager, responsável por gerenciar a conexão e por registrar os eventos de alteração de valores de TAGs no OPC Server.
A imagem abaixo ilustra o fluxo de informações durante a troca de mensagens no modelo utilizado pelo WCS.
As próximas sessões irão detalhar as relações entre as classes do modelo e a forma com que cada componente atua na comunicação entre o WCS e os equipamentos.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Leitura e recebimento de alarmes e dados  
**Score:** — (semantico) | **ID:** 2cfb3bee3ac5b867

Uma vez inicializado o WCS e a conexão com o OPC Server (RSLinx) através da OPC Client API, o Gerenciador de Equipamentos cria Subscriptions para cada TAG a ser monitorado. Cada Subscription tem o seu evento “DataChanged” registrado para executar uma rotina no OPCEquipmentIO para o qual ela foi registrada, garantindo assim o processamento das mudanças de dados.
Para cada evento de mudança disparado, o OPCEquipmentIO consulta o mapeamento de TAGs definido nos arquivos de configuração XML do equipamento, verificando quais TAGs de dados são necessários para a criação da mensagem no WCS. Os dados são então lidos e repassados ao OPCEquipmentController em forma de uma mensagem OPCEquipmentMessage, contendo todos os valores de TAGs necessários para o processamento da mensagem pelo WCS. O fluxo completo de recebimento de um evento e leitura de dados está ilustrado na imagem abaixo.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciador de equipamentos  
**Score:** — (semantico) | **ID:** 1f1d45ccf2b255b3

Esta seção detalha o funcionamento do gerenciador de equipamentos dentro do WCS. O Gerenciador de Equipamentos tem por função controlar toda a comunicação de dados e eventos que ocorrem entre os PLCs, que controlam os transelevadores e transportadores do armazém, e o WCS.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada ao portal de entrada  
**Score:** — (semantico) | **ID:** 8304353f787abb7d

Esta ação é gerada toda vez que a chegada de um pallet for detectada em um portal de entrada do armazém. Estão previstos dois portais de entrada inferiores (1 e 2) e dois portais de entrada superiores (3 e 4) no armazém da BR Foods / Rio Verde.
A tabela abaixo detalha os campos e informações consultadas para a geração da ação de “Chegada ao portal de entrada”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada a um berço de entrada  
**Score:** — (semantico) | **ID:** 2c4f5828af95f1ae

Esta ação é gerada toda vez que a chegada de um pallet for detectada em um berço de entrada de um transelevador. Estão previstos um berço de entrada superior e um berço de entrada inferior por transelevador, totalizando sete berços superiores e sete berços inferiores.
A chegada em um berço de entrada permite que o WCS coordene as missões de armazenamento da carga pelo transelevador. A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Chegada a um berço de entrada”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada a uma célula  
**Score:** — (semantico) | **ID:** a4b11865d9c8c323

Esta ação é gerada toda vez que o transelevador confirmar o posicionamento de um pallet em uma célula de armazenamento com sucesso. Esta ação conclui o armazenamento da carga dentro do WCS, disparando a mudança de status e outras ações dentro do WCS.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Chegada a uma célula”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alerta de célula ocupada  
**Score:** — (semantico) | **ID:** f22b9a87b066b999

Esta ação é gerada toda vez que o transelevador tentar posicionar um pallet em uma célula já previamente ocupada. Tal ação permite ao WCS recalcular uma posição para armazenamento do pallet e marcar a posição atual como já ocupada dentro do WCS, enviando um novo comando de modificação de destino (código 50) para o transelevador.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alerta de Célula Ocupada”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alerta de célula com erro  
**Score:** — (semantico) | **ID:** c74fba2303b191dd

Esta ação é gerada toda vez que o transelevador detectar algum tipo de erro de posicionamento da célula ou desalinhamento da estrutura, indicando ao WCS que ele deverá marcar esta célula com erro e realocar a carga caso ela já esteja sobre o garfo ou procurar pela próxima missão caso a missão fosse de retirada.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alerta de Célula com Erro”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alerta no transelevador sem recuperação  
**Score:** — (semantico) | **ID:** 733cce82327352ff

Esta ação é gerada toda vez que ocorrer uma falha no transelevador impossível de se recuperar decorrente de uma falha de comunicação com o WCS aliada a uma operação manual. Neste caso a missão pendente do transelevador será retirada e caso possua carga sobre o garfo, esta será retirada para o berço de saída.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alerta de Célula com Erro”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Retirada de uma célula  
**Score:** — (semantico) | **ID:** 268a7b0ff47813a6

Esta ação é gerada toda vez que o transelevador confirmar uma retirada de carga bem sucedida de uma célula. O WCS deverá utilizar esta ação para processar a retirada da carga da célula.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Retirada de uma célula”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada a um berço de saída  
**Score:** — (semantico) | **ID:** cf942e418ef99585

Esta ação é gerada toda vez que o transelevador confirmar uma retirada de carga bem sucedida de uma célula, colocando-a no berço de saída. O WCS deverá utilizar esta ação para processar a retirada da carga e chegada ao berço de saída.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Chegada a um berço de saída”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alerta de célula vazia  
**Score:** — (semantico) | **ID:** ff2b84f5c6248a87

Esta ação é gerada toda vez que o transelevador detectar que não há carga para ser retirada em uma operação de retirada de carga de uma célula. Em tal situação, o WCS deverá reendereçar a retirada e marcar a célula com erro no armazém.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alerta de célula vazia”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada a um ponto de entrega  
**Score:** — (semantico) | **ID:** 59f1d752e20277e5

Esta ação é gerada toda vez que uma carga for detectada no ponto de entrega, em condições de seguir em frente. Esta ação deverá ser processada pelo WCS para liberação da carga no sistema. Após liberada, o sistema deverá enviar um sinal de confirmação da entrega da carga ao equipamento, garantindo assim que não haverá duplicidade de registro em caso de falha de comunicação durante o processo de entrega.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Chegada a um ponto de entrega”.
Nota: após processar o TAG CTL_ENTREGA, o WCS deve setar o TAG CTL_CONFIRMA_ENTREGA. Caso haja uma falha na transposição dos dados e o WCS não seja capaz de identificar a carga o WCS irá setar o TAG CTL_CONTINGING_ENTREGA informando ao operador que ele deve inserir o código do pallet manualmente e então disparar novamente o TAG CTL_ENTREGA.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alarme de corredor bloqueado ou ocupado  
**Score:** — (semantico) | **ID:** fa6980a04278c401

Esta ação é gerada toda vez que uma mesa de transfer de corredor de um transelevador detectar que é impossível movimentar a carga para o próximo destino, pois o corredor ou a linha estão bloqueados ou ocupados. O alarme será disparado após a permanência da carga por mais de 2 minutos (tempo configurável) no transfer do corredor. Para verificar se a parada ocorreu no corredor ou na linha, deverão ser consultados os dados da carga da mesa que gerou o alarme.
Após resetado pelo sistema, o alarme será disparado novamente caso se passe mais dois minutos. O WCS deverá decidir como processar tal ação, gerando as decisões correspondentes.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alarme de corredor bloqueado ou ocupado”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alarme de saída cheia  
**Score:** — (semantico) | **ID:** a8e45c02bb37602e

Esta ação é gerada toda vez que a saída fica congestionada de pallets, impedindo o fluxo de saída e recirculação de pallets. Quando esta ação é disparada todos os transelevadores ficam indisponíveis para a retirada de pallets.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alarme de saída cheia”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Bloqueio do transelevador  
**Score:** — (semantico) | **ID:** ce164c62ed922f89

Esta ação é gerada toda vez que uma das tags de controle mencionas na Tabela 7-15 é disparada. Ao dispara esta ação o transelevador fica indisponível tanto para saída com para entrada de pallets.
A tabela abaixo detalha os TAGs de controle e dados que são lidos para a geração da ação de “Bloqueio do transelevador”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alarme de transelevador sem comunicação  
**Score:** — (semantico) | **ID:** 2a857395f4aa4893

Esta ação é gerada toda vez que o CLP do transportador inferior perde comunicação com o transelevador. Quando esta ação é gerada o transelevador fica indisponível para retirada e armazenamento de pallets.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alarme de transelevador sem comunicação”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alarme de inconsistência de dados  
**Score:** — (semantico) | **ID:** 56e48e36fa6648a2

Este alarme é gerado toda vez que a missão enviada pelo WCS para o transelevador está inconsistente com o pallet retirado do berço de entrada. Quando ocorrer esta ação o WCS removerá o pallet para o berço de saída.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Alarme de transelevador sem comunicação”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Movimento carga  
**Score:** — (semantico) | **ID:** d7db56d584ecfbf5

Esta decisão é gerada pelo WCS toda vez que for necessária a movimentação da carga por um transportador ou um transelevador para um movimento de entrada de carga. A decisão indicará ao equipamento qual o movimento a ser efetuado e quais as novas posições de destino do mesmo.
Tal decisão afeta diferentes TAGs de controle e dados no caso de um movimento de carga para um transportador ou para um transelevador. A tabela abaixo detalha as TAGs de controle e dados que são escritos para a decisão de “Movimentar Carga” para os transelevadores.
A tabela abaixo detalha as TAGs de controle e dados escritos para os transportadores.
Para a movimentação de um transelevador, o TAG de comando deverá ser definido por último, somente quando todos os demais TAGs já tiverem sido definidos. Isto garante que o transelevador receberá o comando completo. No caso dos transportadores, o TAG de comando deverá ser resetado para que a unidade de equipamento efetue o movimento enviado.
A ação “Movimentar Carga” será utilizada sempre com o comando 60 do transelevador, conforme indicado na tabela abaixo. Portanto, esta ação sempre representará um movimento completo do transelevador, de um berço de entrada até uma célula de armazenamento.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Realocar destino de carga  
**Score:** — (semantico) | **ID:** 9d676da84e572f83

Esta decisão é gerada pelo WCS toda vez que for necessária a modificação de uma movimentação de carga por um transelevador. A decisão indicará ao equipamento o novo destino a ser utilizado para o movimento atual.
A tabela abaixo detalha as TAGs de controle e dados que são escritos para a decisão de “Realocar destino de Carga” para os transelevadores.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Remover carga  
**Score:** — (semantico) | **ID:** 3f71927e231c19a2

Esta decisão é gerada pelo WCS toda vez que for necessária a remoção de uma carga de uma célula de armazenamento para um ponto de entrega, ou de um berço de entrada para um ponto de entrega. Tal decisão é gerada a partir de uma Ordem de Saída, e sempre é executada por um transelevador.
A decisão será utilizada em três situações distintas:
O transelevador recebeu uma missão de armazenamento de uma carga e não foi possível armazená-la na célula alocada. O transelevador deverá remover a carga de volta para seu berço de saída, indicando a próxima mesa de destino. Os TAGs envolvidos para tal situação estão descritos na tabela abaixo.
O transelevador recebeu uma missão de retirada de uma carga de uma célula para um ponto de entrega. Ele deverá ir até a célula, retirar a carga, deixá-la em uma de seus berços de saída já com um próximo destino definido. Os TAGs escritos para a execução de tal situação estão descritos na tabela abaixo.
O transelevador recebeu uma missão de retirada de uma carga de um berço de entrada (superior ou inferior) para um de seus berços de saída. Tal decisão é utilizada freqüentemente para movimentos de cross-docking entre os berços de entrada superior e berços de saída inferior. As TAGs escritos para a execução de tal situação estão descritos na tabela abaixo.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Falha no disparo de ações  
**Score:** — (semantico) | **ID:** 9bf00026e1a56140

Esta situação é caracterizada pelo não recebimento de um Evento de transição de TAG de Controle pelo WCS, não sendo detectada queda de Heart Beat. Tal situação fará com que o WCS não processe a ação disparada, fazendo com que a carga permaneça no equipamento indefinidamente, pois o mesmo estará aguardando uma resposta do WCS.
Para esta situação, deverá existir nas telas dos sistemas supervisórios dos Transportadores e Transelevadores controles que permitam o disparo manual de tais eventos de transição, fazendo com que o Evento de transição seja novamente enviado ao WCS. Desta forma, o WCS irá processar a ação correspondente, enviando a decisão de controle ao equipamento.
Tal situação está ilustrada na imagem abaixo.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Área de Recebimento  
**Score:** — (semantico) | **ID:** 4925f89bd18745ef

Nesta área ficará as caixas que estão prontas para serem induzidas para a esteira e serem triadas para as conferências.
O operador deverá consumir as caixas que estarão neste local e informar ao Velox quando será induzida. O operador terá uma tela dedicada para este processo e realizar a leitura da etiqueta da caixa e confirmar. Velox fara a validação se a caixa pode ser induzida para a esteira ou deveria estar em outro local, por exemplo, setor de análise de corte ou conferência/PTW.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Área de Recebimento  
**Score:** — (semantico) | **ID:** 1f6c5ef3a778524d

Nesta área ficará as caixas que estão prontas para serem induzidas para a esteira e serem triadas para as conferências.
O operador deverá consumir as caixas que estarão neste local e informar ao Velox quando será induzida. O operador terá uma tela dedicada para este processo e realizar a leitura da etiqueta da caixa e confirmar. Velox fara a validação se a caixa pode ser induzida para a esteira ou deveria estar em outro local, por exemplo, setor de análise de corte ou conferência/PTW.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Área de Recebimento  
**Score:** — (semantico) | **ID:** f26651be794f7de9

Nesta área ficará as caixas que estão prontas para serem induzidas para a esteira e serem triadas para as conferências.
O operador deverá consumir as caixas que estarão neste local e informar ao WCS quando será induzida. O operador terá uma tela dedicada para este processo e realizar a leitura da etiqueta da caixa e confirmar. O WCS fara a validação se a caixa pode ser induzida para a esteira ou deveria estar em outro local, por exemplo, setor de análise de corte ou conferência/PTW.

---
**Origem:** [I23.103] 2023 — `I23.103 - PROJETO LOGIN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV.1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 3498aee0e19a401c

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema WMS do cliente e automação chão-de-fábrica INVENT.
A aplicação do VELOX necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente.
O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Dessa forma, se faz necessário o uso de um navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Painel Geral  
**Score:** — (semantico) | **ID:** a334adcaf255e8e0

O sinaleiro do painel geral será visualizado para a operação observar o status geral da automação, com os seguintes status:
Automação funcionando 100%
- Verde acesa
Automação/Sistema em falha
- Verde e amarelo piscante

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Processo operacional  
**Score:** — (semantico) | **ID:** 9a093b3e97a387b2

O processo operacional se inicia nas dependências do Velox (Invent) após a chegada do pallet no stage onde através de um coletor o operador irá realizar o login no Velox e acessar a tela de recebimento (consumo) de pallet, onde o Velox irá validar o número (ID) do pallet e informar ao operador se o pallet foi consumido com sucesso caso o Velox encontre em sua base de dados as informações sobre o pallet, ou o Velox irá informar que não foi encontrado pallet com o ID informado, indicando que não houve integração desse número de pallet do WMS para o Velox.
Após o consumo do pallet o Velox irá aguardar a indução dos volumes na esteira.
Operador realiza a indução manual de volumes (caixa) na esteira que irá transportar os volumes até o portal de leitura, onde as câmeras identificam o código marcado como mencionado no item 3.2., após o recebimento do volume o Velox irá avaliar em sua base de dados qual o destino do volume, ou seja, para qual rampa esse volume deve ser desviado, sendo assim o Velox informa para a automação (PLC) a direção de desvio.
Após o desvio do volume na rampa correta o operador deverá realiza a abertura do PTL, informando a posição do PTL, número do pallet gerado no WMS e número produtivo, uma vez com o pallet já aberto, o operador pode realizar a leitura do volume (caixa) através do scanner da rampa, uma vez que o Velox recebe a informação do código da caixa ele acende o led da posição PTL informando onde o operador deve colocar o volume ou acenderá todos os leds do posto PTL vinculado ao scanner que realizou a leitura na cor vermelha informando que o volume não pertence a nenhuma das posições presentes no posto PTL.
Quando o volume pertence a uma posição do posto o Velox acenderá o led correspondente a posição PTL como informado acima e o operador deve colocar o volume no pallet e em seguida confirmar apertando o botão do led, assim o Velox identifica a alocação e guarda essas informações para enviar posteriormente as informações ao WMS.
No decorrer das alocações de volumes ao pallet o Velox verifica a cubagem e peso como mencionado do item 3.3., indicando que o pallet deve ser fechado ao operador através de uma cor especifica no led, sendo que a cada pallet fechado é retornado uma integração para o WMS.
Após o fechamento de um pallet outro deve ser aberto caso exista volumes para serem alocados na posição, o operador deve fazer os processos de abertura mencionado acima.

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Recebimento de informações  
**Score:** — (semantico) | **ID:** 4ef2c6ffb3309856

WMS  VELOX
Os dados que devem ser enviados (INSERT e UPDATE) do WMS para o Velox são os dados na tabela abaixo onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tamanhos de campos indicados por * não tem tamanho definido pelo WMS o Velox deve guardar a informação em sua base da mesma maneira que recebeu do WMS
Os dados serão enviados em dois momentos pelo WMS sendo eles no momento de envio da onda de separação realizando o INSERT na tabela e um segundo momento quando o pallet estiver a caminho do stage onde o WMS fará o UPDATE da tabela populado as últimas informações.
Uma vez que os dados são inseridos pelo WMS na tabela transacional “INTERMEDIARIA” do Velox, o Velox terá em procedimentos (rotinas) para buscar as informações nas colunas das tabelas INTERMEDIARIA para popular outras tabelas dentro de sua base de dados, onde essas informações são utilizadas posteriormente para realizações das decisões de desvios no sorter, alocação de volumes nos PTLs e retorno de informações para tabela transacional do WMS Concinco.
Esses processamentos (rotinas) só serão executados quando todos os campos de todas as colunas estiverem populados, ou seja, diferentes de vazio.
As colunas NROEMPRESA, NROCARGA, SEQLOTE, SEQPRODUTO e QTDEMBALAGEM serão UNIQUEs na tabela transacional, garantindo que o Velox nunca aceitará registros com os mesmos valores em todas essas colunas. Isso assegura que não haverá duplicações com os mesmos valores nessas colunas, preservando a integridade dos dados.
Todas as informações serão inicialmente enviadas para as tabelas no banco de dados Velox sem os campos NUM_VOLUME e ID_PALLET.
Posteriormente, quando as colunas NUM_VOLUME e ID_PALLET forem preenchidas, o WMS complementará as informações que já foram enviadas anteriormente, garantindo a integridade dos dados. Portanto, o WMS deve garantir que todas as outras colunas estejam populadas antes de inserir os dados em NUM_VOLUME e ID_PALLET.
As informações de NUM_VOLUME e ID_PALLET nunca serão repetidas nessas bases de dados, e é de responsabilidade do WMS garantir que não haverá informações duplicadas nessas colunas."
O recebimento desses dados deve ocorrer antes do pallet chegar ao Stage onde o mesmo será consumido pelo Velox, caso ocorra da movimentação do pallet ocorrem sem a inserção desses dados na tabela transacional do Velox, na tentativa de consumo de pallet o Velox irá informar ao operador através do coletor manual a informação “Pallet não encontrado”, sendo possível uma nova tentativa de consumo de pallet após o envio das informações.
NOTA: O WMS não poderá realizar deleções na tabela transacional (DELETE), somente inserção de dados, qualquer UPDATE realizado em colunas erradas é de inteira responsabilidade do WMS

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR - Etiquetas.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 4d6bab01675a82e2

O proposito principal do projeto é criar uma solução WCS WCS para o gerenciamento do armazém automatizado da BR Foods localizado em Salvador.
O WCS WCS será o sistema responsável por gerenciar a movimentação dos transportadores e trans elevadores desse armazém. Essa movimentação será baseada nos pedidos de entrada e saída vindos do ERP (SAP) juntamente com o estado atual do armazém e dos equipamentos.
Para o correto funcionamento do WCS WCS, é necessária uma aplicação que será responsável pelo gerenciamento das informações e dos equipamentos, ou seja, esta aplicação terá como papel fundamental a interface com o sistema SAP.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e SAP através de interface Web (JSON Rest.). Em cada estação de trabalho, se faz necessário o uso de um navegador web padrão (Google Chrome).

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 68edec263a4ab667

O proposito principal do projeto é criar uma solução WCS WCS para o gerenciamento do armazém automatizado da BR Foods localizado em Salvador.
O WCS WCS será o sistema responsável por gerenciar a movimentação dos transportadores e trans elevadores desse armazém. Essa movimentação será baseada nos pedidos de entrada e saída vindos do ERP (SAP) juntamente com o estado atual do armazém e dos equipamentos.
Para o correto funcionamento do WCS WCS, é necessária uma aplicação que será responsável pelo gerenciamento das informações e dos equipamentos, ou seja, esta aplicação terá como papel fundamental a interface com o sistema SAP.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e SAP através de interface Web (JSON Rest.). Em cada estação de trabalho, se faz necessário o uso de um navegador web padrão (Google Chrome).

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Criação da Onda  
**Score:** — (semantico) | **ID:** 28de34d70c7ae2d6

Para a criação da onda o WCS ficará responsável por todo Picking no AA, Picking no AC e Pallet Cheio.
OBS: Pallet cheio sairá diretamente para a doca de carregamento.
A criação de onda será feita pela operação com base nos transportes, onde o sistema deve permitir o cancelamento do transporte para disponibilizar o mesmo para compra no AC pelo SAP.
Nesta tela deve conter filtros de onda, transporte e uma coluna destinada a atendimento dos transportes.
O usuário poderá excluir a onda por completo, voltando os transportes dessa onda para status livre podendo vincular a uma nova onda. Só poderá excluir uma onda caso ela não tenha iniciado, caso contrário só usuários autorizados podem realizar esta ação.
As ondas não devem se misturar e a menor sempre será a prioridade.
O sistema WCS que nomeia a onda por um sequencial (iniciando por 5000).
A princípio os transportes não terão ordem de prioridade, porém o sistema WCS deve permitir a possibilidade de informar a prioridade de cada transporte assim mesmo como alterar a prioridade de transporte em andamento.  Lembrando que, caso esteja em separação não há intervenção do lado do WCS.
Deve haver um botão que com os transportes selecionados antes da criação da onda seja possível visualizar a demanda que está sendo solicitada com a disposição do estoque no AA, sendo assim fazendo um levantamento para o usuário quantos reabastecimentos serão necessários para aquela respectiva demanda e o usuário realizar a sua tomada de decisão na criação da onda.
O sistema deve solicitar ao gerar a onda, uma previsão de qual turno será realizado aquele transporte. Este dado não terá impacto em nenhuma lógica do WCS, apenas será utilizado para envio ao SAP e relatórios internos.
Outro ponto que deve ser solicitado ao realizar a onda é a temperatura da doca se será realizada de maneira mista ou primeiramente os congelados e depois os resfriados na mesma doca. Caso haja necessidade de alteração, pode ser realizada se não houve start na onda.
Quando for selecionada a opção “mista” o usuário irá escolher quantas docas por transporte e selecionar a temperatura por doca. Neste caso, as caso as docas precisam estar paralelas para atender o mesmo caminhão.
Os caminhões das ondas “primeiro congelado e segundo resfriado” não precisam estar um ao lado do outro(pode ser aleatório).
Com a onda criada, o sistema deve sugerir as docas para cada transporte visando a quantidade de volumes de cada transporte (primeiras docas sendo os menores volumes e as últimas docas os maiores volumes)
Sistema WCS deve conter um cadastro de docas onde permita colocar os veículos autorizados para determinada doca e informar se está disponível ou não (manutenção). No cadastro das docas, para seguir o padrão já utilizado hoje, deve ser composto por 3 digitos.
O Operador terá a opção de “Preparar a onda” onde o sistema já irá disparar (mesmo que o disparo automático para o SAP esteja desativado) previamente as Ordens de Ressuprimentos planejadas para atender aquela onda e caso tenha pallet fechado e separação curva C e D ja irá disparar a necessidade para o Sap. Esta ação não dará início as separações da onda.
O start de cada onda será feito dentro do sistema WCS pelo mesário. Caso o start seja feito sem ter feito a operação de “Preparar a onda” o sistema deve enviar as ordens de ressuprimento no momento do Start.
Neste primeiro momento, o sistema irá apenas sugerir a seleção das docas para cada transporte, porém deve haver possibilidade de alteração caso não tenha iniciado.
Pode ocorrer um complemento na roteirização dos transportes, onde o operador irá precisar acrescentar um transporte em uma onda já em andamento. Neste caso o sistema deve permitir essa ação e colocar como prioridade máxima a separação destes itens para serem expedidos o mais rápido possível.
O WCS não pode incluir docas repetidas e ultrapassar a quantidade de 17 docas disponibilizadas ao sorter
O sistema devera destacar de forma visível (coloração diferente) após a atribuição de docas realizada com sucesso.
O WCS terá que espelhar o AC para que caso a máquina apresente problemas, há possibilidade de operação via AC e não tenha volume alto do aéreo. O Sorter precisa enviar para o SAP a necessidade de separação no AC, seja destino Doca ou mesmo destino Indução (posições ao lado flowrack).
O WCS deve respeitar o cadastro de placa por tipo (estivado ou palletizado)
O sistema deve configurar cada transporte da onda para iniciar a separação de forma simultânea ou na sequência de pesados, leves e frágeis.
Quando a carga for paletizada o sistema deve respeitar a regra de peso seguida pela Brasil Foods, onde segue a seguinte ordem de envio dos itens:
Pesados
Leves
Frágeis
Em casos de carreta TSP terá uma placa onde será feito o agrupamento total das placas existentes no destino, a criação de onda e atribuição da doca deve ser feita com base na placa do agrupamento.
Quando for carreta TSP ou "sob demanda", os produtos deverão descer em mais de uma rampa (devido ser paletizado). Descer CONGELADO e RESFRIADO em rampas diferentes e informando qual é a onda.
Há casos que pode ocorrer o agrupamento de docas diferentes para o mesmo caminhão e esta ação será feita pela operação. O agrupamento só pode ocorrer com docas paralelas a doca selecionada, caso contrário não deve ser permitido.
O operador deve ter visibilidade de possíveis erros e rejeitos por doca, onda, transportadora e remessa.
Outro dashboard seria algo semelhante a uma tela de voos utilizada em aeroporto, com intuito de acompanhar o que está acontecendo ao vivo em cada carregamento/doca. Neste levantamento deve conter: Placas, volume/peso, quantidade, % quantidade de caixas, tempo carregamento por doca (com abertura por tipo de frota), nível de ocupação da esteira de carregamento (se está com rampa cheia)
Gravar em log com o usuário data e hora em cada criação e modificação de onda.
Gravar em log com o usuário data e hora em cada cancelamento de onda e transportes.
Gravar em log com o usuário data, hora e qual solicitação em cada ajuste/cancelamento de abastecimento.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 1e31b46fc03f98b1

O proposito principal do projeto é criar uma solução WCS WCS para o gerenciamento do armazém automatizado da BR Foods localizado em Salvador.
O WCS será o sistema responsável por gerenciar a movimentação dos transportadores e trans elevadores desse armazém. Essa movimentação será baseada nos pedidos de entrada e saída vindos do ERP (SAP) juntamente com o estado atual do armazém e dos equipamentos.
Para o correto funcionamento do WCS WCS, é necessária uma aplicação que será responsável pelo gerenciamento das informações e dos equipamentos, ou seja, esta aplicação terá como papel fundamental a interface com o sistema SAP.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e SAP através de interface Web (JSON Rest.). Em cada estação de trabalho, se faz necessário o uso de um navegador web padrão (Google Chrome).

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 3cee3d0ba96484d2

O proposito principal do projeto é criar uma solução WCS WCS para o gerenciamento do armazém automatizado da BR Foods localizado em Salvador.
O WCS WCS será o sistema responsável por gerenciar a movimentação dos transportadores e trans elevadores desse armazém. Essa movimentação será baseada nos pedidos de entrada e saída vindos do ERP (SAP) juntamente com o estado atual do armazém e dos equipamentos.
Para o correto funcionamento do WCS WCS, é necessária uma aplicação que será responsável pelo gerenciamento das informações e dos equipamentos, ou seja, esta aplicação terá como papel fundamental a interface com o sistema SAP.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e SAP através de interface Web (JSON Rest.). Em cada estação de trabalho, se faz necessário o uso de um navegador web padrão (Google Chrome).

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 7c3615e1da1257b6

O proposito principal do projeto é criar uma solução WCS WCS para o gerenciamento do armazém automatizado da BR Foods localizado em Salvador.
O WCS será o sistema responsável por gerenciar a movimentação dos transportadores e trans elevadores desse armazém. Essa movimentação será baseada nos pedidos de entrada e saída vindos do ERP (SAP) juntamente com o estado atual do armazém e dos equipamentos.
Para o correto funcionamento do WCS WCS, é necessária uma aplicação que será responsável pelo gerenciamento das informações e dos equipamentos, ou seja, esta aplicação terá como papel fundamental a interface com o sistema SAP.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e SAP através de interface Web (JSON Rest.). Em cada estação de trabalho, se faz necessário o uso de um navegador web padrão (Google Chrome).

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Requisitos mínimos – servidor local (on premise)  
**Score:** — (semantico) | **ID:** 18c3d79b595c0c7a

Os servidores de aplicação e banco de dados, são de fornecimento e responsabilidade do cliente.
Servidor único
Servidores separados

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** ARMAZENAGEM DE DADOS  
**Score:** — (semantico) | **ID:** 0ef1ff24d83d3ae6

Todos os dados de pedidos e suas eventuais código de etiqueta, será guardado por um período de 30 dias. Levando em consideração a volumetria mensal de pedidos/caixa. Assim o sistema terá um fluxo sempre limpo e não ocorrendo uma possível lentidão por excesso de dados salvos.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Requisitos mínimos – Servidor local (on premise)  
**Score:** — (semantico) | **ID:** 518c24a2b6256c67

Os servidores são de fornecimento e responsabilidade do cliente.
Servidor único
Servidores separados

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** ARMAZENAGEM DE DADOS  
**Score:** — (semantico) | **ID:** 400f266a75d8ab8b

Todos os dados de pedidos e suas eventuais código de etiqueta, será guardado por um período de 30 dias. Levando em consideração a volumetria mensal de pedidos/caixa. Assim o sistema terá um fluxo sempre limpo e não ocorrendo uma possível lentidão por excesso de dados salvos.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Requisitos mínimos – servidor local (on premise)  
**Score:** — (semantico) | **ID:** 7498b1f5c9ab6aa4

Os servidores de aplicação e banco de dados, são de fornecimento e responsabilidade do cliente.
Servidor único
Servidores separados

---
**Origem:** [POC's] 2024 — `ESPECIFICACAO INTEGRACOES - KUKA.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 6cc83b870f86fe72

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de movimentação do Robô.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Chegada dos pallets nos portais de entrada  
**Score:** — (semantico) | **ID:** c1e779df3e92949b

Após o recebimento das integrações quando o pallet chega no portal de entrada, o pallet pode estar com os seguintes status de localização:
Na entrada do sistema (“INSystemEntrance”) - Quando pallet possui ordem de entrada.
Entregue (“Delivered”) – Quando o pallet saiu do armazém, porém retornou por possuir caixas restantes no pallet.
Area de picking (PickingArea) – Quando o pallet foi destinado a área de picking (saída) e retornou para ser armazenado novamente.
Rejeitado (Rejected) – Quando o pallet foi previamente rejeitado por algum motivo.
A automação faz uma avaliação dimensional para garantir que o pallet está dentro dos conformes mínimos para adentrar na automação (conformes definidos pelo cliente com ajustes mecânicos nos sensores), após a avaliação, a automação encaminha o pallet até o elevador onde ocorrer a leitura da etiqueta (todo processo de leitura de etiquetas, automação e transporte do pallet é de responsabilidade do cliente), nesse momento o WCS Velox avalia as seguintes informações:
Verifica se o pallet está cadastrado no sistema.
Verifica a localização do pallet (InSystemEntrance), InPickingArea).
Verifica se existe ordem de entrada pendente para o pallet (somente para pallets comlocalização ‘InSystemEntrance’ e ‘Rejected’). Verifica se o número de caixas disponíveis no pallet é maior que zero.
Após a realizar a verificação das informações acima o WCS Velox avalia as informações sobre o pallet, definindo se ele pode entrar na automação ou será rejeitado, especificando o motivo de rejeito.
Se houver pallets rejeitados pelo WCS Velox ou pela automação o operador pode identificar na tela do WCS Velox o motivo de rejeito entendendo e tratando o motivo.
Para os pallets aprovados o WCS Velox atualizara as informações de peso, perfil e temperatura de acordo com as informações passadas pelo PLC da automação e realiza a avaliação de regras para armazenagem, como vemos na tabela abaixo:
O status de localização do pallet é alterado para “Em trânsito (In Transit)”, permanecendo até a chegada do pallet no berço de entrada.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Chegada a um berço de entrada  
**Score:** — (semantico) | **ID:** 6a981b4cb3c2a5d1

É disparada quando um pallet chega a um berço de entrada de um transelevador dentro dos transportadores. Estes pontos são as mesas pelas quais as cargas são pegas pelos garfos do transelevador e nas quais o WCS envia decisão de movimentação para o transelevador, nesse mesmo momento o status de localização do pallet é alterado para armazenando (Storing).
Ao ser notificado de um evento de chegada a um berço de entrada, as seguintes decisões de movimentação podem ser tomadas pelo WCS, dependendo do modo de operação do sistema e das regras funcionais aplicadas:
Direcionamento para célula de armazenamento;
Direcionamento para ponto de entrega.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de armazenar um pallet (decisão tomada pela regra dos berços de entrada). Nesse evento, o WCS direciona a carga para a célula reservada para armazenamento do transelevador.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de Crossdocking de um pallet (decisão tomada pela regra dos berços de entrada).
Neste evento, o WCS Velox direciona a carga para o ponto de entrega do pallet.
O WCS Velox primeiramente verifica se o pallet que chegou ao berço está atendendo uma ordem de entrada. Em caso afirmativo, o WCS gera decisão para o transportador levar o pallet até seu ponto de entrega.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Chegada a uma célula  
**Score:** — (semantico) | **ID:** 20c9fd0b9994cc5a

Esta ação é disparada quando o transelevador finaliza a ação de armazenamento de uma carga em uma célula de armazenamento. O status da localização da carga no WCS Velox é alterado para armazenado (Stored).
O WCS Velox irá enviar a integração WMTOCO para o SAP notificando o armazenamento da carga. Na sequência, o WCS atualiza o status da célula no sistema, passando a mesma para ‘Ocupada’.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Alerta de célula ocupada  
**Score:** — (semantico) | **ID:** 740b42d1ad85b109

Esta ação é disparada pelo transelevador quando o mesmo não consegue realizar uma missão de armazenamento devido à célula já estar ocupada. Caso isto aconteça, o WCS deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ocupada dentro do sistema.
Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador. Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula. Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
O fluxo completo do processamento desta ação pode ser verificado na imagem abaixo. A carga permanece em estado de “Em armazenamento” durante todo o processamento, uma vez que ela ainda está em trânsito. A célula já ocupada tem o seu status atualizado no sistema, e a carga é realocada para uma nova posição ou para um ponto de decisão.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Alerta de célula com erro  
**Score:** — (semantico) | **ID:** 2c0111554a241949

Esta ação é disparada pelo transelevador quando ele não consegue realizar uma missão de armazenamento ou retirada de carga, pois a célula apresenta algum erro de estrutura (sensor desalinhado, problemas de dimensionamento da célula etc.).
Caso isto aconteça, o WCS deverá tomar uma das seguintes ações:
No caso de estar efetuando um movimento de armazenamento de carga: o sistema deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ‘Célula com Erro’, caracterizando o motivo de acordo com o erro retornado pelo transelevador. Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador.
Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula.
Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
No caso de estar efetuando um movimento de retirada de carga, o sistema deverá verificar qual o seu estado de funcionamento, tomando uma das seguintes ações:
Caso esteja operando em modo “Inventário”, o WCS marca a célula como ‘Célula com Erro’ e com motivo fornecido pela mensagem de erro do transelevador.
Caso esteja operando em modo “Online”, o sistema deverá verificar se o movimento de saída foi realizado para atender uma OS ou transferência. Em caso afirmativo, o sistema deverá realizar o estorno dos itens de OS do pallet e alocar um novo pallet para as OSs. Caso contrário, o sistema gera uma mensagem M2 para o SAP com o status de ‘Cancela’.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Curva ABC  
**Score:** — (semantico) | **ID:** 6b215f3d93438537

O sistema WCS deve respeitar a curva ABC dos produtos/pallets devendo sempre realizar o balanceamento dos pallets, onde os produtos de maior giro devem estar mais próximos as saídas, distribuindo a armazenagem dos produtos em trans elevadores diferentes, otimizando posições de dupla profundidade para o mesmo produto e lote e otimizando a armazenagem conforme disponibilidade de posições e classe de peso, armazenando um pallet em cada trans lelevador.
O sistema Velox deve permitir a configuração de um item por posição de dupla profundidade (Mistura item e lote).

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Retirada de uma célula  
**Score:** — (semantico) | **ID:** 64e7f48cb46ef80d

Esta ação é disparada pelo transelevador ao término de uma operação de retirada de um pallet de uma célula de armazenamento. Tal operação ocorre durante um movimento de retirada de um pallet, a partir de uma ordem de saída. Ao concluir a operação, o transelevador deverá encaminhar o pallet o berço de saída.
O processamento desta ação inicia-se atualizando o status da célula para vazia. Se a ordem de saída for referente a um movimento de expedição ou transferência, o WCS deverá enviar uma integração WMTOCO para o SAP confirmando a operação de retirada da carga da célula de armazenamento.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Alerta de célula vazia  
**Score:** — (semantico) | **ID:** 50d8aa7542f6ad4a

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Chegada a um berço de saída  
**Score:** — (semantico) | **ID:** 804a5b8ce2b59987

Esta ação é disparada pelo transelevador toda vez que for realizada uma retirada de carga bem-sucedida e a carga tenha sido depositada no berço de saída do transelevador. Neste momento, a carga passa a ser considera como “Em trânsito” no WCS, e o WCS registra no log de transações a entrega da carga pelo transelevador no seu berço de saída.
Tal transação permite a confirmação da entrega da carga pelo transelevador, garantindo a baixa da carga do corredor no qual a carga estava armazenada. Caso o status anterior do pallet seja “A ser entregue”, o novo status do pallet passa a ser “Em trânsito”.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Alarme de corredor bloqueado ou ocupado  
**Score:** — (semantico) | **ID:** dea6c131a81239cb

O corredor do berço de entrada está bloqueado ou atingiu sua capacidade máxima;
A linha do transportador está bloqueada ou ocupada;
Na primeira situação, o sistema deverá direcionar a carga para o próximo ponto de decisão, para que o WCS possa realocar a carga para uma nova célula em um corredor não bloqueado.
Na segunda situação, não há nada a ser feito, pois a linha inteira estará ocupada, impossibilitando a entrega da carga para os corredores à frente ou no ponto de entrega. Nesta situação, os operadores deverão marcar os corredores afetados como bloqueados, para impedir que novas cargas entrem na linha e aumentem o congestionamento. O fluxo de decisões está ilustrado na imagem abaixo.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Scheduler de missões  
**Score:** — (semantico) | **ID:** a3a0bf150da8efd7

O scheduler de missões é um processo agendado dentro do WCS que tem por responsabilidade o controle da geração e envio de missões para os transelevadores do armazém.
Dentro de seu fluxo de operação, são verificados os estados dos equipamentos individualmente, assim como o modo de operação do WCS. Desta forma, é possível separar o modo de trabalho de cada transelevador conforme segue:
Operação normal (atendimento de ordens de entrada e saída de pallets do transelevador);
Operação em realocação automática.
A imagem abaixo ilustra o processo principal do scheduler de missões, no qual, o WCS procura novas missões para cada um dos transelevadores disponíveis, isto é, em modo de funcionamento automático e ocioso (que não estão executando ordens).
A imagem abaixo ilustra o fluxo principal do scheduler de missões, responsável por encontrar a próxima missão que o transelevador deverá executar.
Neste processo, o WCS procura de forma alternada missões de entrada de pallets e missões de saída de pallets para cada transelevador, minimizando assim a incidência de congestionamentos nos transportadores.
O fluxo envolvido na busca da próxima missão de descida (saída) para um transelevador é ilustrado na imagem abaixo.
O fluxo envolvido na busca da próxima missão de entrada para um transelevador é ilustrado na imagem acima.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Alerta de falha no transelevador  
**Score:** — (semantico) | **ID:** 349fa0940ab0649d

Esta ação é disparada pelo transelevador toda vez que algum erro não recuperável acontecer no transelevador. Esta situação só ocorre quando o PLC perde comunicação com o WCS e necessariamente acontece uma intervenção manual no transelevador.
Caso o transelevador esteja com uma carga no carro está será retirada para o berço de saída.
O operador deverá posteriormente corrigir a situação da carga dentro do sistema, e a operação do transelevador deverá ser feita manualmente até que a falha original seja sanada. Uma vez resolvido o problema, o transelevador deverá ser resetado para seu estado inicial, e as ações e decisões devem voltar a ocorrer normalmente entre o WCS e o transelevador.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Saida / Ordens canceladas  
**Score:** — (semantico) | **ID:** 04f7a3398127c490

Tela mostra detalhes de ordens canceladas via interfaces enviadas pelo SAP.
Informações existentes:
- Código pallet;
- Código ordem;
- Transelevador;
- Posição;
- Tipo de missão;
- Produto;
- Data de cancelamento.
Funcionalidades:
- Filtros;
- Exportar Excel.
Tela de referência:

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Zona de exportação  
**Score:** — (semantico) | **ID:** 710a143e202e5544

Tela para parametrizar as zonas de armazenamento, quando existir a necessidade de realizar o zoneamento das posições por produtos.
Operador poderá criar o zoneamento por pallet ou produto.
Informações:
- Zona;
- Pallet;
- Produto;
Funcionalidades:
- Criar zoneamento por pallet e/ou produto;
- Filtros;
- Exportar Excel.
Tela de referência:

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Mapa de posições  
**Score:** — (semantico) | **ID:** d8f5f71f02ddaa00

Tela existente no velox deve apresentar detalhes das posições vazias e alocadas no WCS.
Adicionar na tela existente a funcionalidade:
Campo de busca pelo número pallet UD para realizar a descida manual.
Informações existentes:
- Transelevador;
- Lado;
- Posições X e Y alocadas e vazias;
- ID do Pallet;
- Código do produto;
- Status;
- Motivo.
Funcionalidades:
- Escolha de transelevador;
- Escolha de lado;
- Buscar por posição;
- Seleciona posição e descer pallet.
Tela de referência:

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Ocupação por pilar  
**Score:** — (semantico) | **ID:** 9f5a54a9c6675071

WCS deve ter tela para configuração de armazenagem por peso por pilar, conforme os parâmetros definidos pela operação.
Tela deve ter parâmetro para operador configurar os valores do montante e pilar.
A alteração dos parâmetros deve ser configurada por perfil de usuário.
Informações da tela:
- Pilar;
- Posição X;
- Posição Z;
- Peso Máximo;
- Peso Atual;
- Peso disponível;
- Status.
Tela de referência BRF:

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Chegada dos pallets nos portais de entrada  
**Score:** — (semantico) | **ID:** 2583a0e6b08735a1

Após o recebimento das integrações quando o pallet chega no portal de entrada, o pallet pode estar com os seguintes status de localização:
Na entrada do sistema (“INSystemEntrance”) - Quando pallet possui ordem de entrada.
Entregue (“Delivered”) – Quando o pallet saiu do armazém, porém retornou por possuir caixas restantes no pallet.
Area de picking (PickingArea) – Quando o pallet foi destinado a área de picking (saída) e retornou para ser armazenado novamente.
Rejeitado (Rejected) – Quando o pallet foi previamente rejeitado por algum motivo.
A automação faz uma avaliação dimensional para garantir que o pallet está dentro dos conformes mínimos para adentrar na automação (conformes definidos pelo cliente com ajustes mecânicos nos sensores), após a avaliação, a automação encaminha o pallet até o elevador onde ocorrer a leitura da etiqueta (todo processo de leitura de etiquetas, automação e transporte do pallet é de responsabilidade do cliente), nesse momento o WCS Velox avalia as seguintes informações:
Verifica se o pallet está cadastrado no sistema.
Verifica a localização do pallet (InSystemEntrance), InPickingArea).
Verifica se existe ordem de entrada pendente para o pallet (somente para pallets comlocalização ‘InSystemEntrance’ e ‘Rejected’).
Verifica se o número de caixas disponíveis no pallet é maior que zero.
Após a realizar a verificação das informações acima o WCS Velox avalia as informações sobre o pallet, definindo se o mesmo pode entrar na automação ou será rejeitado, especificando o motivo de rejeito.
Se houver pallets rejeitados pelo WCS Velox ou pela automação o operador pode identificar na tela do WCS Velox o motivo de rejeito entendendo e tratando o motivo.
Para os pallets aprovados o WCS Velox atualizara as informações de peso, perfil e temperatura de acordo com as informações passadas pelo PLC da automação e realiza a avaliação de regras para armazenagem, como vemos na tabela abaixo:
O status de localização do pallet é alterado para Em trânsito (In Transit), permanecendo até a chegada do pallet no berço de entrada.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Chegada a um berço de entrada  
**Score:** — (semantico) | **ID:** cf7d81c74044af00

É disparada quando um pallet chega a um berço de entrada de um transelevador dentro dos transportadores. Estes pontos são as mesas pelas quais as cargas são pegas pelos garfos do transelevador e nas quais o WCS envia decisão de movimentação para o transelevador, nesse mesmo momento o status de localização do pallet é alterado para armazenando (Storing).
Ao ser notificado de um evento de chegada a um berço de entrada, as seguintes decisões de movimentação podem ser tomadas pelo WCS, dependendo do modo de operação do sistema e das regras funcionais aplicadas:
Direcionamento para célula de armazenamento;
Direcionamento para ponto de entrega.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de armazenar um pallet (decisão tomada pela regra dos berços de entrada). Nesse evento, o WCS direciona a carga para a célula reservada para armazenamento do transelevador.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de Crossdocking de um pallet (decisão tomada pela regra dos berços de entrada).
Neste evento, o WCS Velox direciona a carga para o ponto de entrega do pallet.
O WCS Velox primeiramente verifica se o pallet que chegou ao berço está atendendo uma ordem de entrada. Em caso afirmativo, o WCS gera decisão para o transportador levar o pallet até seu ponto de entrega.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Chegada a uma célula  
**Score:** — (semantico) | **ID:** 380021147820c842

Esta ação é disparada quando o transelevador finaliza a ação de armazenamento de uma carga em uma célula de armazenamento. O status da localização da carga no WCS Velox é alterado para armazenado (Stored).
O WCS Velox irá enviar a integração WMTOCO para o SAP notificando o armazenamento da carga. Na sequência, o WCS atualiza o status da célula no sistema, passando a mesma para ‘Ocupada’.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Alerta de célula ocupada  
**Score:** — (semantico) | **ID:** 6e33010a06e93d91

Esta ação é disparada pelo transelevador quando o mesmo não consegue realizar uma missão de armazenamento devido à célula já estar ocupada. Caso isto aconteça, o WCS deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ocupada dentro do sistema.
Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador. Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula. Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
O fluxo completo do processamento desta ação pode ser verificado na imagem abaixo. A carga permanece em estado de “Em armazenamento” durante todo o processamento, uma vez que a mesma ainda está em trânsito. A célula já ocupada tem o seu status atualizado no sistema, e a carga é realocada para uma nova posição ou para um ponto de decisão.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Alerta de célula com erro  
**Score:** — (semantico) | **ID:** 39caa692b8450123

Esta ação é disparada pelo transelevador quando ele não consegue realizar uma missão de armazenamento ou retirada de carga, pois a célula apresenta algum erro de estrutura (sensor desalinhado, problemas de dimensionamento da célula etc.).
Caso isto aconteça, o WCS deverá tomar uma das seguintes ações:
No caso de estar efetuando um movimento de armazenamento de carga: o sistema deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ‘Célula com Erro’, caracterizando o motivo de acordo com o erro retornado pelo transelevador. Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador.
Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula.
Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
No caso de estar efetuando um movimento de retirada de carga, o sistema deverá verificar qual o seu estado de funcionamento, tomando uma das seguintes ações:
Caso esteja operando em modo “Inventário”, o WCS marca a célula como ‘Célula com Erro’ e com motivo fornecido pela mensagem de erro do transelevador.
Caso esteja operando em modo “Online”, o sistema deverá verificar se o movimento de saída foi realizado para atender uma OS ou transferência. Em caso afirmativo, o sistema deverá realizar o estorno dos itens de OS do pallet e alocar um novo pallet para as OSs. Caso contrário, o sistema gera uma mensagem M2 para o SAP com o status de ‘Cancela’.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Retirada de uma célula  
**Score:** — (semantico) | **ID:** 03eb4f759143f9ad

Esta ação é disparada pelo transelevador ao término de uma operação de retirada de um pallet de uma célula de armazenamento. Tal operação ocorre durante um movimento de retirada de um pallet, a partir de uma ordem de saída. Ao concluir a operação, o transelevador deverá encaminhar o pallet o berço de saída.
O processamento desta ação inicia-se atualizando o status da célula para vazia. Se a ordem de saída for referente a um movimento de expedição ou transferência, o WCS deverá enviar uma integração WMTOCO para o SAP confirmando a operação de retirada da carga da célula de armazenamento. Caso contrário, nada mais é feito.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Alerta de célula vazia  
**Score:** — (semantico) | **ID:** c1ff26962c3dc15e

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Alerta de falha no transelevador  
**Score:** — (semantico) | **ID:** e7269f368908ff80

Esta ação é disparada pelo transelevador toda vez que algum erro não recuperável acontecer no transelevador. Esta situação só ocorre quando o PLC perde comunicação com o WCS e necessariamente acontece uma intervenção manual no transelevador.
Caso o transelevador esteja com uma carga no carro está será retirada para o berço de saída.
O operador deverá posteriormente corrigir a situação da carga dentro do sistema, e a operação do transelevador deverá ser feita manualmente até que a falha original seja sanada. Uma vez resolvido o problema, o transelevador deverá ser resetado para seu estado inicial, e as ações e decisões devem voltar a ocorrer normalmente entre o WCS e o transelevador.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Chegada a um berço de saída  
**Score:** — (semantico) | **ID:** 3d165fdc5ac80890

Esta ação é disparada pelo transelevador toda vez que for realizada uma retirada de carga bem-sucedida e a carga tenha sido depositada no berço de saída do transelevador. Neste momento, a carga passa a ser considera como “Em trânsito” no WCS, e o WCS registra no log de transações a entrega da carga pelo transelevador no seu berço de saída.
Tal transação permite a confirmação da entrega da carga pelo transelevador, garantindo a baixa da carga do corredor no qual a carga estava armazenada. Caso o status anterior do pallet seja “A ser entregue”, o novo status do pallet passa a ser “Em trânsito”.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Alarme de corredor bloqueado ou ocupado  
**Score:** — (semantico) | **ID:** 70e54643f5ebaaf8

O corredor do berço de entrada está bloqueado ou atingiu sua capacidade máxima;
A linha do transportador está bloqueada ou ocupada;
Na primeira situação, o sistema deverá direcionar a carga para o próximo ponto de decisão, para que o WCS possa realocar a carga para uma nova célula em um corredor não bloqueado.
Na segunda situação, não há nada a ser feito, pois a linha inteira estará ocupada, impossibilitando a entrega da carga para os corredores à frente ou no ponto de entrega. Nesta situação, os operadores deverão marcar os corredores afetados como bloqueados, para impedir que novas cargas entrem na linha e aumentem o congestionamento. O fluxo de decisões está ilustrado na imagem abaixo.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Scheduler de missões  
**Score:** — (semantico) | **ID:** 85d4716b30c4035e

O scheduler de missões é um processo agendado dentro do WCS que tem por responsabilidade o controle da geração e envio de missões para os transelevadores do armazém.
Dentro de seu fluxo de operação, são verificados os estados dos equipamentos individualmente, assim como o modo de operação do WCS. Desta forma, é possível separar o modo de trabalho de cada transelevador conforme segue:
Operação normal (atendimento de ordens de entrada e saída de pallets do transelevador);
Operação em realocação automática.
A imagem abaixo ilustra o processo principal do scheduler de missões, no qual, o WCS procura novas missões para cada um dos transelevadores disponíveis, isto é, em modo de funcionamento automático e ocioso (que não estão executando ordens).
A imagem abaixo ilustra o fluxo principal do scheduler de missões, responsável por encontrar a próxima missão que o transelevador deverá executar. Neste processo, primeiramente o WCS verifica se o transelevador em questão se encontra em modo de realocação automática. Em caso afirmativo, procede-se com a busca de missões de realocação de pallets; caso contrário, o WCS busca missões de entrada ou saída de pallets, num ciclo denominado ciclo duplo de entrada e saída.
Neste processo, o WCS procura de forma alternada missões de entrada de pallets e missões de saída de pallets para cada transelevador, minimizando assim a incidência de congestionamentos nos transportadores.
O fluxo envolvido na busca da próxima missão de descida (saída) para um transelevador é ilustrado na imagem abaixo.
O fluxo envolvido na busca da próxima missão de entrada para um transelevador é ilustrado na imagem acima.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada dos pallets nos portais de entrada  
**Score:** — (semantico) | **ID:** 0444ca3fbe733a8f

Após o recebimento das integrações quando o pallet chega no portal de entrada, o pallet pode estar com os seguintes status de localização:
Na entrada do sistema (“INSystemEntrance”) - Quando pallet possui ordem de entrada.
Entregue (“Delivered”) – Quando o pallet saiu do armazém, porém retornou por possuir caixas restantes no pallet.
Area de picking (PickingArea) – Quando o pallet foi destinado a área de picking (saída) e retornou para ser armazenado novamente.
Rejeitado (Rejected) – Quando o pallet foi previamente rejeitado por algum motivo.
A automação faz uma avaliação dimensional para garantir que o pallet está dentro dos conformes mínimos para adentrar na automação (conformes definidos pelo cliente com ajustes mecânicos nos sensores), após a avaliação, a automação encaminha o pallet até o elevador onde ocorrer a leitura da etiqueta (todo processo de leitura de etiquetas, automação e transporte do pallet é de responsabilidade do cliente), nesse momento o WCS Velox avalia as seguintes informações:
Verifica se o pallet está cadastrado no sistema.
Verifica a localização do pallet (InSystemEntrance), InPickingArea).
Verifica se existe ordem de entrada pendente para o pallet (somente para pallets comlocalização ‘InSystemEntrance’ e ‘Rejected’).
Verifica se o número de caixas disponíveis no pallet é maior que zero.
Após a realizar a verificação das informações acima o WCS Velox avalia as informações sobre o pallet, definindo se o mesmo pode entrar na automação ou será rejeitado, especificando o motivo de rejeito.
Se houver pallets rejeitados pelo WCS Velox ou pela automação o operador pode identificar na tela do WCS Velox o motivo de rejeito entendendo e tratando o motivo.
Para os pallets aprovados o WCS Velox atualizara as informações de peso, perfil e temperatura de acordo com as informações passadas pelo PLC da automação e realiza a avaliação de regras para armazenagem, como vemos na tabela abaixo:
O status  de localicação do pallet é alterado para Em trânsito (In Transit), permanecendo até a chegada do pallet no berço de entrada.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a um berço de entrada  
**Score:** — (semantico) | **ID:** 46e7c492fcdfcd60

É disparada quando um pallet chega a um berço de entrada de um transelevador dentro dos transportadores. Estes pontos são as mesas pelas quais as cargas são pegas pelos garfos do transelevador e nas quais o WCS envia decisão de movimentação para o transelevador, nesse mesmo momento o status de localização do pallet é alterado para Armazenando (Storing).
Ao ser notificado de um evento de chegada a um berço de entrada, as seguintes decisões de movimentação podem ser tomadas pelo WCS, dependendo do modo de operação do sistema e das regras funcionais aplicadas:
Direcionamento para célula de armazenamento;
Direcionamento para ponto de entrega.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de armazenar um pallet (decisão tomada pela regra dos berços de entrada). Nesse evento, o WCS direciona a carga para a célula reservada para armazenamento do transelevador.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de Crossdocking de um pallet (decisão tomada pela regra dos berços de entrada).
Neste evento, o WCS Velox direciona a carga para o ponto de entrega do pallet.
O WCS Velox primeiramente verifica se o pallet que chegou ao berço está atendendo uma ordem de entrada. Em caso afirmativo, o WCS gera decisão para o transportador levar o pallet até seu ponto de entrega.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a uma célula  
**Score:** — (semantico) | **ID:** 4eeaad80aecc7ad7

Esta ação é disparada quando o transelevador finaliza a ação de armazenamento de uma carga em uma célula de armazenamento. O status da localização da carga no WCS Velox é alterado para Armazenado (Stored).
O WCS Velox irá enviar a integração WMTOCO para o SAP notificando o armazenamento da carga. Na sequência, o WCS atualiza o status da célula no sistema, passando a mesma para ‘Ocupada’.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula ocupada  
**Score:** — (semantico) | **ID:** a1336aad0e1c2476

Esta ação é disparada pelo transelevador quando o mesmo não consegue realizar uma missão de armazenamento devido à célula já estar ocupada. Caso isto aconteça, o WCS deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ocupada dentro do sistema.
Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador. Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula. Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
O fluxo completo do processamento desta ação pode ser verificado na imagem abaixo. A carga permanece em estado de “Em armazenamento” durante todo o processamento, uma vez que a mesma ainda está em trânsito. A célula já ocupada tem o seu status atualizado no sistema, e a carga é realocada para uma nova posição ou para um ponto de decisão.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula com erro  
**Score:** — (semantico) | **ID:** 6d034c1b93b4b339

Esta ação é disparada pelo transelevador quando ele não consegue realizar uma missão de armazenamento ou retirada de carga, pois a célula apresenta algum erro de estrutura (sensor desalinhado, problemas de dimensionamento da célula etc.).
Caso isto aconteça, o WCS deverá tomar uma das seguintes ações:
No caso de estar efetuando um movimento de armazenamento de carga: o sistema deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ‘Célula com Erro’, caracterizando o motivo de acordo com o erro retornado pelo transelevador. Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador.
Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula.
Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
No caso de estar efetuando um movimento de retirada de carga, o sistema deverá verificar qual o seu estado de funcionamento, tomando uma das seguintes ações:
Caso esteja operando em modo “Inventário”, o WCS marca a célula como ‘Célula com Erro’ e com motivo fornecido pela mensagem de erro do transelevador.
Caso esteja operando em modo “Online”, o sistema deverá verificar se o movimento de saída foi realizado para atender uma OS ou transferência. Em caso afirmativo, o sistema deverá realizar o estorno dos itens de OS do pallet e alocar um novo pallet para as OSs. Caso contrário, o sistema gera uma mensagem M2 para o SAP com o status de ‘Cancela’.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Retirada de uma célula  
**Score:** — (semantico) | **ID:** a085bff37943a376

Esta ação é disparada pelo transelevador ao término de uma operação de retirada de um pallet de uma célula de armazenamento. Tal operação ocorre durante um movimento de retirada de um pallet, a partir de uma ordem de saída. Ao concluir a operação, o transelevador deverá encaminhar o pallet o berço de saída.
O processamento desta ação inicia-se atualizando o status da célula para vazia. Se a ordem de saída for referente a um movimento de expedição ou transferência, o WCS deverá enviar uma integração WMTOCO para o SAP confirmando a operação de retirada da carga da célula de armazenamento. Caso contrário, nada mais é feito.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula vazia  
**Score:** — (semantico) | **ID:** 724151795cfc45e2

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de falha no transelevador  
**Score:** — (semantico) | **ID:** 790131aa28cd1e04

Esta ação é disparada pelo transelevador toda vez que algum erro não recuperável acontecer no transelevador. Esta situação só ocorre quando o PLC perde comunicação com o WCS e necessariamente acontece uma intervenção manual no transelevador.
Caso o transelevador esteja com uma carga no carro está será retirada para o berço de saída.
O operador deverá posteriormente corrigir a situação da carga dentro do sistema, e a operação do transelevador deverá ser feita manualmente até que a falha original seja sanada. Uma vez resolvido o problema, o transelevador deverá ser resetado para seu estado inicial, e as ações e decisões devem voltar a ocorrer normalmente entre o WCS e o transelevador.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a um berço de saída  
**Score:** — (semantico) | **ID:** b4411a5d49eb59f2

Esta ação é disparada pelo transelevador toda vez que for realizada uma retirada de carga bem-sucedida e a carga tenha sido depositada no berço de saída do transelevador. Neste momento, a carga passa a ser considera como “Em trânsito” no WCS, e o WCS registra no log de transações a entrega da carga pelo transelevador no seu berço de saída.
Tal transação permite a confirmação da entrega da carga pelo transelevador, garantindo a baixa da carga do corredor no qual a carga estava armazenada. Caso o status anterior do pallet seja “A ser entregue”, o novo status do pallet passa a ser “Em trânsito”.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alarme de corredor bloqueado ou ocupado  
**Score:** — (semantico) | **ID:** 7ff8cf411cb242eb

O corredor do berço de entrada está bloqueado ou atingiu sua capacidade máxima;
A linha do transportador está bloqueada ou ocupada;
Na primeira situação, o sistema deverá direcionar a carga para o próximo ponto de decisão, para que o WCS possa realocar a carga para uma nova célula em um corredor não bloqueado.
Na segunda situação, não há nada a ser feito, pois a linha inteira estará ocupada, impossibilitando a entrega da carga para os corredores à frente ou no ponto de entrega. Nesta situação, os operadores deverão marcar os corredores afetados como bloqueados, para impedir que novas cargas entrem na linha e aumentem o congestionamento. O fluxo de decisões está ilustrado na imagem abaixo.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Scheduler de missões  
**Score:** — (semantico) | **ID:** 033fa34a87672cb9

O scheduler de missões é um processo agendado dentro do WCS que tem por responsabilidade o controle da geração e envio de missões para os transelevadores do armazém.
Dentro de seu fluxo de operação, são verificados os estados dos equipamentos individualmente, assim como o modo de operação do WCS. Desta forma, é possível separar o modo de trabalho de cada transelevador conforme segue:
Operação normal (atendimento de ordens de entrada e saída de pallets do transelevador);
Operação em realocação automática.
A imagem abaixo ilustra o processo principal do scheduler de missões, no qual, o WCS procura novas missões para cada um dos transelevadores disponíveis, isto é, em modo de funcionamento automático e ocioso (que não estão executando ordens).
A imagem abaixo ilustra o fluxo principal do scheduler de missões, responsável por encontrar a próxima missão que o transelevador deverá executar. Neste processo, primeiramente o WCS verifica se o transelevador em questão se encontra em modo de realocação automática. Em caso afirmativo, procede-se com a busca de missões de realocação de pallets; caso contrário, o WCS busca missões de entrada ou saída de pallets, num ciclo denominado ciclo duplo de entrada e saída.
Neste processo, o WCS procura de forma alternada missões de entrada de pallets e missões de saída de pallets para cada transelevador, minimizando assim a incidência de congestionamentos nos transportadores.
O fluxo envolvido na busca da próxima missão de descida (saída) para um transelevador é ilustrado na imagem abaixo.
O fluxo envolvido na busca da próxima missão de entrada para um transelevador é ilustrado na imagem acima.

---
**Origem:** [I22.170] 2025 — `ESPECIFICACAO DE SOFTWARE - ADITIVO - Portal Kognex.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** b7951cbd2922c072

ESPECIFICAÇÃO DE SOFTWARE
ADITIVO PORTAIS COGNEX
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada dos pallets nos portais de entrada  
**Score:** — (semantico) | **ID:** 38e389e14a915fe6

Após o recebimento das integrações quando o pallet chega no portal de entrada, o pallet pode estar com os seguintes status de localização:
Na entrada do sistema (“INSystemEntrance”) - Quando pallet possui ordem de entrada.
Entregue (“Delivered”) – Quando o pallet saiu do armazém, porém retornou por possuir caixas restantes no pallet.
Area de picking (PickingArea) – Quando o pallet foi destinado a área de picking (saída) e retornou para ser armazenado novamente.
Rejeitado (Rejected) – Quando o pallet foi previamente rejeitado por algum motivo.
A automação faz uma avaliação dimensional para garantir que o pallet está dentro dos conformes mínimos para adentrar na automação (conformes definidos pelo cliente com ajustes mecânicos nos sensores), após a avaliação, a automação encaminha o pallet até o elevador onde ocorrer a leitura da etiqueta (todo processo de leitura de etiquetas, automação e transporte do pallet é de responsabilidade do cliente), nesse momento o WCS Velox avalia as seguintes informações:
Verifica se o pallet está cadastrado no sistema.
Verifica a localização do pallet (InSystemEntrance), InPickingArea).
Verifica se existe ordem de entrada pendente para o pallet (somente para pallets comlocalização ‘InSystemEntrance’ e ‘Rejected’).
Verifica se o número de caixas disponíveis no pallet é maior que zero.
Após a realizar a verificação das informações acima o WCS Velox avalia as informações sobre o pallet, definindo se o mesmo pode entrar na automação ou será rejeitado, especificando o motivo de rejeito.
Se houver pallets rejeitados pelo WCS Velox ou pela automação o operador pode identificar na tela do WCS Velox o motivo de rejeito entendendo e tratando o motivo.
Para os pallets aprovados o WCS Velox atualizara as informações de peso, perfil e temperatura de acordo com as informações passadas pelo PLC da automação e realiza a avaliação de regras para armazenagem, como vemos na tabela abaixo:
O status  de localicação do pallet é alterado para Em trânsito (In Transit), permanecendo até a chegada do pallet no berço de entrada.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a um berço de entrada  
**Score:** — (semantico) | **ID:** 6abe6dc0cc67f1fa

É disparada quando um pallet chega a um berço de entrada de um transelevador dentro dos transportadores. Estes pontos são as mesas pelas quais as cargas são pegas pelos garfos do transelevador e nas quais o WCS envia decisão de movimentação para o transelevador, nesse mesmo momento o status de localização do pallet é alterado para Armazenando (Storing).
Ao ser notificado de um evento de chegada a um berço de entrada, as seguintes decisões de movimentação podem ser tomadas pelo WCS, dependendo do modo de operação do sistema e das regras funcionais aplicadas:
Direcionamento para célula de armazenamento;
Direcionamento para ponto de entrega.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de armazenar um pallet (decisão tomada pela regra dos berços de entrada). Nesse evento, o WCS direciona a carga para a célula reservada para armazenamento do transelevador.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de Crossdocking de um pallet (decisão tomada pela regra dos berços de entrada).
Neste evento, o WCS Velox direciona a carga para o ponto de entrega do pallet.
O WCS Velox primeiramente verifica se o pallet que chegou ao berço está atendendo uma ordem de entrada. Em caso afirmativo, o WCS gera decisão para o transportador levar o pallet até seu ponto de entrega.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a uma célula  
**Score:** — (semantico) | **ID:** 712232deb81b8136

Esta ação é disparada quando o transelevador finaliza a ação de armazenamento de uma carga em uma célula de armazenamento. O status da localização da carga no WCS Velox é alterado para Armazenado (Stored).
O WCS Velox irá enviar a integração WMTOCO para o SAP notificando o armazenamento da carga. Na sequência, o WCS atualiza o status da célula no sistema, passando a mesma para ‘Ocupada’.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula ocupada  
**Score:** — (semantico) | **ID:** 51d47bf3493b0298

Esta ação é disparada pelo transelevador quando o mesmo não consegue realizar uma missão de armazenamento devido à célula já estar ocupada. Caso isto aconteça, o WCS deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ocupada dentro do sistema.
Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador. Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula. Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
O fluxo completo do processamento desta ação pode ser verificado na imagem abaixo. A carga permanece em estado de “Em armazenamento” durante todo o processamento, uma vez que a mesma ainda está em trânsito. A célula já ocupada tem o seu status atualizado no sistema, e a carga é realocada para uma nova posição ou para um ponto de decisão.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula com erro  
**Score:** — (semantico) | **ID:** 1697a12f3b6f9c4b

Esta ação é disparada pelo transelevador quando ele não consegue realizar uma missão de armazenamento ou retirada de carga, pois a célula apresenta algum erro de estrutura (sensor desalinhado, problemas de dimensionamento da célula etc.).
Caso isto aconteça, o WCS deverá tomar uma das seguintes ações:
No caso de estar efetuando um movimento de armazenamento de carga: o sistema deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ‘Célula com Erro’, caracterizando o motivo de acordo com o erro retornado pelo transelevador. Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador.
Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula.
Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
No caso de estar efetuando um movimento de retirada de carga, o sistema deverá verificar qual o seu estado de funcionamento, tomando uma das seguintes ações:
Caso esteja operando em modo “Inventário”, o WCS marca a célula como ‘Célula com Erro’ e com motivo fornecido pela mensagem de erro do transelevador.
Caso esteja operando em modo “Online”, o sistema deverá verificar se o movimento de saída foi realizado para atender uma OS ou transferência. Em caso afirmativo, o sistema deverá realizar o estorno dos itens de OS do pallet e alocar um novo pallet para as OSs. Caso contrário, o sistema gera uma mensagem M2 para o SAP com o status de ‘Cancela’.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Retirada de uma célula  
**Score:** — (semantico) | **ID:** f511357caf322bd9

Esta ação é disparada pelo transelevador ao término de uma operação de retirada de um pallet de uma célula de armazenamento. Tal operação ocorre durante um movimento de retirada de um pallet, a partir de uma ordem de saída. Ao concluir a operação, o transelevador deverá encaminhar o pallet o berço de saída.
O processamento desta ação inicia-se atualizando o status da célula para vazia. Se a ordem de saída for referente a um movimento de expedição ou transferência, o WCS deverá enviar uma integração WMTOCO para o SAP confirmando a operação de retirada da carga da célula de armazenamento. Caso contrário, nada mais é feito.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula vazia  
**Score:** — (semantico) | **ID:** b91f9023d53bab5a

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de falha no transelevador  
**Score:** — (semantico) | **ID:** 62cd13768f574790

Esta ação é disparada pelo transelevador toda vez que algum erro não recuperável acontecer no transelevador. Esta situação só ocorre quando o PLC perde comunicação com o WCS e necessariamente acontece uma intervenção manual no transelevador.
Caso o transelevador esteja com uma carga no carro está será retirada para o berço de saída.
O operador deverá posteriormente corrigir a situação da carga dentro do sistema, e a operação do transelevador deverá ser feita manualmente até que a falha original seja sanada. Uma vez resolvido o problema, o transelevador deverá ser resetado para seu estado inicial, e as ações e decisões devem voltar a ocorrer normalmente entre o WCS e o transelevador.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a um berço de saída  
**Score:** — (semantico) | **ID:** 422eb2ddd2a45481

Esta ação é disparada pelo transelevador toda vez que for realizada uma retirada de carga bem-sucedida e a carga tenha sido depositada no berço de saída do transelevador. Neste momento, a carga passa a ser considera como “Em trânsito” no WCS, e o WCS registra no log de transações a entrega da carga pelo transelevador no seu berço de saída.
Tal transação permite a confirmação da entrega da carga pelo transelevador, garantindo a baixa da carga do corredor no qual a carga estava armazenada. Caso o status anterior do pallet seja “A ser entregue”, o novo status do pallet passa a ser “Em trânsito”.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alarme de corredor bloqueado ou ocupado  
**Score:** — (semantico) | **ID:** 3bb1fb9904e57e02

O corredor do berço de entrada está bloqueado ou atingiu sua capacidade máxima;
A linha do transportador está bloqueada ou ocupada;
Na primeira situação, o sistema deverá direcionar a carga para o próximo ponto de decisão, para que o WCS possa realocar a carga para uma nova célula em um corredor não bloqueado.
Na segunda situação, não há nada a ser feito, pois a linha inteira estará ocupada, impossibilitando a entrega da carga para os corredores à frente ou no ponto de entrega. Nesta situação, os operadores deverão marcar os corredores afetados como bloqueados, para impedir que novas cargas entrem na linha e aumentem o congestionamento. O fluxo de decisões está ilustrado na imagem abaixo.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Scheduler de missões  
**Score:** — (semantico) | **ID:** d30439aeb93e995a

O scheduler de missões é um processo agendado dentro do WCS que tem por responsabilidade o controle da geração e envio de missões para os transelevadores do armazém.
Dentro de seu fluxo de operação, são verificados os estados dos equipamentos individualmente, assim como o modo de operação do WCS. Desta forma, é possível separar o modo de trabalho de cada transelevador conforme segue:
Operação normal (atendimento de ordens de entrada e saída de pallets do transelevador);
Operação em realocação automática.
A imagem abaixo ilustra o processo principal do scheduler de missões, no qual, o WCS procura novas missões para cada um dos transelevadores disponíveis, isto é, em modo de funcionamento automático e ocioso (que não estão executando ordens).
A imagem abaixo ilustra o fluxo principal do scheduler de missões, responsável por encontrar a próxima missão que o transelevador deverá executar. Neste processo, primeiramente o WCS verifica se o transelevador em questão se encontra em modo de realocação automática. Em caso afirmativo, procede-se com a busca de missões de realocação de pallets; caso contrário, o WCS busca missões de entrada ou saída de pallets, num ciclo denominado ciclo duplo de entrada e saída.
Neste processo, o WCS procura de forma alternada missões de entrada de pallets e missões de saída de pallets para cada transelevador, minimizando assim a incidência de congestionamentos nos transportadores.
O fluxo envolvido na busca da próxima missão de descida (saída) para um transelevador é ilustrado na imagem abaixo.
O fluxo envolvido na busca da próxima missão de entrada para um transelevador é ilustrado na imagem acima.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada dos pallets nos portais de entrada  
**Score:** — (semantico) | **ID:** ceff48f87ef69080

Após o recebimento das integrações quando o pallet chega no portal de entrada, o pallet pode estar com os seguintes status de localização:
Na entrada do sistema (“INSystemEntrance”) - Quando pallet possui ordem de entrada.
Entregue (“Delivered”) – Quando o pallet saiu do armazém, porém retornou por possuir caixas restantes no pallet.
Area de picking (PickingArea) – Quando o pallet foi destinado a área de picking (saída) e retornou para ser armazenado novamente.
Rejeitado (Rejected) – Quando o pallet foi previamente rejeitado por algum motivo.
A automação faz uma avaliação dimensional para garantir que o pallet está dentro dos conformes mínimos para adentrar na automação (conformes definidos pelo cliente com ajustes mecânicos nos sensores), após a avaliação, a automação encaminha o pallet até o elevador onde ocorrer a leitura da etiqueta (todo processo de leitura de etiquetas, automação e transporte do pallet é de responsabilidade do cliente), nesse momento o WCS Velox avalia as seguintes informações:
Verifica se o pallet está cadastrado no sistema.
Verifica a localização do pallet (InSystemEntrance), InPickingArea).
Verifica se existe ordem de entrada pendente para o pallet (somente para pallets comlocalização ‘InSystemEntrance’ e ‘Rejected’).
Verifica se o número de caixas disponíveis no pallet é maior que zero.
Após a realizar a verificação das informações acima o WCS Velox avalia as informações sobre o pallet, definindo se o mesmo pode entrar na automação ou será rejeitado, especificando o motivo de rejeito.
Se houver pallets rejeitados pelo WCS Velox ou pela automação o operador pode identificar na tela do WCS Velox o motivo de rejeito entendendo e tratando o motivo.
Para os pallets aprovados o WCS Velox atualizara as informações de peso, perfil e temperatura de acordo com as informações passadas pelo PLC da automação e realiza a avaliação de regras para armazenagem, como vemos na tabela abaixo:
O status  de localicação do pallet é alterado para Em trânsito (In Transit), permanecendo até a chegada do pallet no berço de entrada.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a um berço de entrada  
**Score:** — (semantico) | **ID:** 950d457569d74be9

É disparada quando um pallet chega a um berço de entrada de um transelevador dentro dos transportadores. Estes pontos são as mesas pelas quais as cargas são pegas pelos garfos do transelevador e nas quais o WCS envia decisão de movimentação para o transelevador, nesse mesmo momento o status de localização do pallet é alterado para Armazenando (Storing).
Ao ser notificado de um evento de chegada a um berço de entrada, as seguintes decisões de movimentação podem ser tomadas pelo WCS, dependendo do modo de operação do sistema e das regras funcionais aplicadas:
Direcionamento para célula de armazenamento;
Direcionamento para ponto de entrega.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de armazenar um pallet (decisão tomada pela regra dos berços de entrada). Nesse evento, o WCS direciona a carga para a célula reservada para armazenamento do transelevador.
O fluxo abaixo ilustra o comportamento do WCS Velox quando determina a decisão de Crossdocking de um pallet (decisão tomada pela regra dos berços de entrada).
Neste evento, o WCS Velox direciona a carga para o ponto de entrega do pallet.
O WCS Velox primeiramente verifica se o pallet que chegou ao berço está atendendo uma ordem de entrada. Em caso afirmativo, o WCS gera decisão para o transportador levar o pallet até seu ponto de entrega.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a uma célula  
**Score:** — (semantico) | **ID:** aceccb3885135900

Esta ação é disparada quando o transelevador finaliza a ação de armazenamento de uma carga em uma célula de armazenamento. O status da localização da carga no WCS Velox é alterado para Armazenado (Stored).
O WCS Velox irá enviar a integração WMTOCO para o SAP notificando o armazenamento da carga. Na sequência, o WCS atualiza o status da célula no sistema, passando a mesma para ‘Ocupada’.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula ocupada  
**Score:** — (semantico) | **ID:** 0b5e6c1820228ae6

Esta ação é disparada pelo transelevador quando o mesmo não consegue realizar uma missão de armazenamento devido à célula já estar ocupada. Caso isto aconteça, o WCS deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ocupada dentro do sistema.
Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador. Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula. Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
O fluxo completo do processamento desta ação pode ser verificado na imagem abaixo. A carga permanece em estado de “Em armazenamento” durante todo o processamento, uma vez que a mesma ainda está em trânsito. A célula já ocupada tem o seu status atualizado no sistema, e a carga é realocada para uma nova posição ou para um ponto de decisão.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula com erro  
**Score:** — (semantico) | **ID:** d203803bf7ae8749

Esta ação é disparada pelo transelevador quando ele não consegue realizar uma missão de armazenamento ou retirada de carga, pois a célula apresenta algum erro de estrutura (sensor desalinhado, problemas de dimensionamento da célula etc.).
Caso isto aconteça, o WCS deverá tomar uma das seguintes ações:
No caso de estar efetuando um movimento de armazenamento de carga: o sistema deverá realocar a carga em uma nova célula de armazenamento disponível, marcando a célula previamente definida como ‘Célula com Erro’, caracterizando o motivo de acordo com o erro retornado pelo transelevador. Para realocar a carga, o WCS verifica se existe alguma célula livre para armazenamento no corredor atual do transelevador.
Caso exista, o WCS envia uma nova missão de realocação da carga para a nova célula.
Caso contrário, o WCS deverá enviar uma missão de movimentação da carga para o ponto de decisão mais próximo do corredor. Ao chegar ao ponto de decisão, o WCS irá realocar uma nova posição em outro corredor para o armazenamento da carga.
No caso de estar efetuando um movimento de retirada de carga, o sistema deverá verificar qual o seu estado de funcionamento, tomando uma das seguintes ações:
Caso esteja operando em modo “Inventário”, o WCS marca a célula como ‘Célula com Erro’ e com motivo fornecido pela mensagem de erro do transelevador.
Caso esteja operando em modo “Online”, o sistema deverá verificar se o movimento de saída foi realizado para atender uma OS ou transferência. Em caso afirmativo, o sistema deverá realizar o estorno dos itens de OS do pallet e alocar um novo pallet para as OSs. Caso contrário, o sistema gera uma mensagem M2 para o SAP com o status de ‘Cancela’.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Retirada de uma célula  
**Score:** — (semantico) | **ID:** 10522d218f907de7

Esta ação é disparada pelo transelevador ao término de uma operação de retirada de um pallet de uma célula de armazenamento. Tal operação ocorre durante um movimento de retirada de um pallet, a partir de uma ordem de saída. Ao concluir a operação, o transelevador deverá encaminhar o pallet o berço de saída.
O processamento desta ação inicia-se atualizando o status da célula para vazia. Se a ordem de saída for referente a um movimento de expedição ou transferência, o WCS deverá enviar uma integração WMTOCO para o SAP confirmando a operação de retirada da carga da célula de armazenamento. Caso contrário, nada mais é feito.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula vazia  
**Score:** — (semantico) | **ID:** c878c7bf21ad2b75

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de falha no transelevador  
**Score:** — (semantico) | **ID:** 874fc38347fc26c9

Esta ação é disparada pelo transelevador toda vez que algum erro não recuperável acontecer no transelevador. Esta situação só ocorre quando o PLC perde comunicação com o WCS e necessariamente acontece uma intervenção manual no transelevador.
Caso o transelevador esteja com uma carga no carro está será retirada para o berço de saída.
O operador deverá posteriormente corrigir a situação da carga dentro do sistema, e a operação do transelevador deverá ser feita manualmente até que a falha original seja sanada. Uma vez resolvido o problema, o transelevador deverá ser resetado para seu estado inicial, e as ações e decisões devem voltar a ocorrer normalmente entre o WCS e o transelevador.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a um berço de saída  
**Score:** — (semantico) | **ID:** ad605ad8e01897c0

Esta ação é disparada pelo transelevador toda vez que for realizada uma retirada de carga bem-sucedida e a carga tenha sido depositada no berço de saída do transelevador. Neste momento, a carga passa a ser considera como “Em trânsito” no WCS, e o WCS registra no log de transações a entrega da carga pelo transelevador no seu berço de saída.
Tal transação permite a confirmação da entrega da carga pelo transelevador, garantindo a baixa da carga do corredor no qual a carga estava armazenada. Caso o status anterior do pallet seja “A ser entregue”, o novo status do pallet passa a ser “Em trânsito”.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alarme de corredor bloqueado ou ocupado  
**Score:** — (semantico) | **ID:** df8bb63e53c85db6

O corredor do berço de entrada está bloqueado ou atingiu sua capacidade máxima;
A linha do transportador está bloqueada ou ocupada;
Na primeira situação, o sistema deverá direcionar a carga para o próximo ponto de decisão, para que o WCS possa realocar a carga para uma nova célula em um corredor não bloqueado.
Na segunda situação, não há nada a ser feito, pois a linha inteira estará ocupada, impossibilitando a entrega da carga para os corredores à frente ou no ponto de entrega. Nesta situação, os operadores deverão marcar os corredores afetados como bloqueados, para impedir que novas cargas entrem na linha e aumentem o congestionamento. O fluxo de decisões está ilustrado na imagem abaixo.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Scheduler de missões  
**Score:** — (semantico) | **ID:** cbc9b5c7ad0550ad

O scheduler de missões é um processo agendado dentro do WCS que tem por responsabilidade o controle da geração e envio de missões para os transelevadores do armazém.
Dentro de seu fluxo de operação, são verificados os estados dos equipamentos individualmente, assim como o modo de operação do WCS. Desta forma, é possível separar o modo de trabalho de cada transelevador conforme segue:
Operação normal (atendimento de ordens de entrada e saída de pallets do transelevador);
Operação em realocação automática.
A imagem abaixo ilustra o processo principal do scheduler de missões, no qual, o WCS procura novas missões para cada um dos transelevadores disponíveis, isto é, em modo de funcionamento automático e ocioso (que não estão executando ordens).
A imagem abaixo ilustra o fluxo principal do scheduler de missões, responsável por encontrar a próxima missão que o transelevador deverá executar. Neste processo, primeiramente o WCS verifica se o transelevador em questão se encontra em modo de realocação automática. Em caso afirmativo, procede-se com a busca de missões de realocação de pallets; caso contrário, o WCS busca missões de entrada ou saída de pallets, num ciclo denominado ciclo duplo de entrada e saída.
Neste processo, o WCS procura de forma alternada missões de entrada de pallets e missões de saída de pallets para cada transelevador, minimizando assim a incidência de congestionamentos nos transportadores.
O fluxo envolvido na busca da próxima missão de descida (saída) para um transelevador é ilustrado na imagem abaixo.
O fluxo envolvido na busca da próxima missão de entrada para um transelevador é ilustrado na imagem acima.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Processo de Recebimento no Transfer no WCS  
**Score:** — (semantico) | **ID:** d082e746ad94df4f

O WCS disponibiliza uma tela chamada "Recebimento Transfer" para o operador realizar a confirmação dos palets alocados no Transfer. Ao acessar essa tela, o operador verá um campo de input para realizar a leitura do RG do pallet e uma lista de todos os pallets que o WMS enviou no processo de alocação descrito anteriormente.
O fluxo do processo é o seguinte:
O operador acessa a tela "Recebimento Transfer" no WCS e seleciona o pallet na lista exibida.
O operador realiza a leitura do RG do pallet utilizando o coletor Android.
Em seguida, o operador realiza a leitura do endereço no Transfer, que corresponde à posição onde o pallet será alocado dentro do sistema.
Após a confirmação da alocação do endereço no Transfer, o sistema WCS enviará a integração 5.5 Confirmação de Recebimento no Transfer para o WMS.
Com a confirmação enviada, a tarefa é automaticamente fechada no WMS, e o processo de recepção do pallet é finalizado.
O WCS não deve permitir a alocação de mais de um pallet no mesmo endereço de transfer.
O endereçamento do Transfer permite que o Velox coordene de forma mais precisa as tarefas de reabastecimento, fornecendo uma referência exata do local onde os palets estão alocados. Isso facilita a movimentação eficiente dos produtos nas fases subsequentes e assegura a rastreabilidade durante o processo de separação.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Processo de Recebimento no Transfer no WCS  
**Score:** — (semantico) | **ID:** dba7661d36db8ea0

O WCS disponibiliza uma tela chamada "Recebimento Transfer" para o operador realizar a confirmação dos palets alocados no Transfer. Ao acessar essa tela, o operador verá um campo de input para realizar a leitura do RG do pallet e uma lista de todos os pallets que o WMS enviou no processo de alocação descrito anteriormente.
O fluxo do processo é o seguinte:
O operador acessa a tela "Recebimento Transfer" no WCS e seleciona o pallet na lista exibida.
O operador realiza a leitura do RG do pallet utilizando o coletor Android.
Em seguida, o operador realiza a leitura do endereço no Transfer, que corresponde à posição onde o pallet será alocado dentro do sistema.
Após a confirmação da alocação do endereço no Transfer, o sistema WCS enviará a integração 5.5 Confirmação de Recebimento no Transfer para o WMS.
Com a confirmação enviada, a tarefa é automaticamente fechada no WMS, e o processo de recepção do pallet é finalizado.
O WCS não deve permitir a alocação de mais de um pallet no mesmo endereço de transfer.
O endereçamento do Transfer permite que o Velox coordene de forma mais precisa as tarefas de reabastecimento, fornecendo uma referência exata do local onde os palets estão alocados. Isso facilita a movimentação eficiente dos produtos nas fases subsequentes e assegura a rastreabilidade durante o processo de separação.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Processo de Recebimento no Transfer no WCS  
**Score:** — (semantico) | **ID:** d9c86c2079da6d8d

O WCS disponibiliza uma tela chamada "Recebimento Transfer" para o operador realizar a confirmação dos palets alocados no Transfer. Ao acessar essa tela, o operador verá um campo de input para realizar a leitura do RG do pallet e uma lista de todos os pallets que o WMS enviou no processo de alocação descrito anteriormente.
O fluxo do processo é o seguinte:
O operador acessa a tela "Recebimento Transfer" no WCS e seleciona o pallet na lista exibida.
O operador realiza a leitura do RG do pallet utilizando o coletor Android.
Em seguida, o operador realiza a leitura do endereço no Transfer, que corresponde à posição onde o pallet será alocado dentro do sistema.
Após a confirmação da alocação do endereço no Transfer, o sistema WCS enviará a integração 5.6 Confirmação de Recebimento no Transfer para o WMS.
Com a confirmação enviada, a tarefa é automaticamente fechada no WMS, e o processo de recepção do pallet é finalizado.
O endereçamento do Transfer permite que o Velox coordene de forma mais precisa as tarefas de reabastecimento, fornecendo uma referência exata do local onde os palets estão alocados. Isso facilita a movimentação eficiente dos produtos nas fases subsequentes e assegura a rastreabilidade durante o processo de separação.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Simulação de Separação  
**Score:** — (semantico) | **ID:** 783dec0c386e72f6

A Simulação de Separação tem como objetivo calcular e fornecer os dados necessários para planejar e executar as tarefas de separação dentro da operação de Picking e CrossDocking, garantindo a alocação eficiente de recursos e a correta distribuição das tarefas.
A simulação é alimentada com informações de tarefas e volumes provenientes do WMS e ajusta os dados com base nos parâmetros configurados para cada tipo de operação.
Tópicos da Simulação de Separação

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** cc297115c204605e

A parte de CrossDocking da simulação lida com a previsão de volumes a serem movimentados diretamente para as lojas, sem passar pelo processo de armazenagem.
Parâmetros configuráveis:
Tempo para execução de uma tarefa de separação - CrossDocking: Estimativa do tempo necessário para separar um volume no processo de CrossDocking.
Quantidade de horas de pretensão de trabalho - CrossDocking: Total de horas de trabalho que o operador tem disponível para realizar as tarefas.
Resultados fornecidos pela simulação:
Número de caixas e pallets e entregas previstas para o processo de CrossDocking.
Quantidade de operadores necessários para executar as tarefas.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Resumo  
**Score:** — (semantico) | **ID:** 8734e2e6c9a5594a

A Simulação de Separação oferece uma visão completa das operações, incluindo Picking, CrossDocking e distribuição de volumes no sorter. Com base nos parâmetros definidos, o sistema fornece dados cruciais para:
Otimização da alocação de recursos.
Eficiência na separação de produtos.
Melhor desempenho na movimentação no armazém.
Garantia do cumprimento das metas operacionais.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** 767150b36d1c0132

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus respectivos volumes, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS não interfere na ordem de indução, uma vez que o foco é garantir que os volumes sejam direcionados para as posições específicas, conforme a operação de crossdocking.
O operador deverá levar ao pallet próximo a uma área de indução da automação e consumir o pallet para informar ao WCS que os volumes serão induzidos.
Os volumes relacionados à operação de CrossDocking devem ser encaminhados exclusivamente para as posições de PTLs configuradas especificamente para esse tipo de operação, evitando qualquer mistura com os volumes que atendem às lojas normais. Essa separação é essencial para manter a integridade do processo logístico, garantindo que os volumes de crossdocking sejam tratados de forma isolada, conforme as necessidades do processo, e não sejam misturados com os demais volumes destinados ao atendimento regular das lojas.
Dessa forma, o WCS assegura que os volumes de CrossDocking sejam tratados de maneira eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo das operações padrão.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** 19cba0ed5442e69d

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus respectivos volumes, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS também não interfere na ordem de indução.
O operador deverá levar o pallet próximo a uma área de indução da automação e seguir com os processos de indução do lado do WMS.
O WCS agrupará os volumes provenientes do processo de CrossDocking e do processo de Separação em uma única posição de PTL, segregando apenas por categoria do produto (Alimentício/Não Alimentício) e se necessário Tipo de Embalagem tratados de maneira eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo das operações padrão.

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** CrossDocking  
**Score:** — (nome-topico) | **ID:** 62f8e2f0f3b059ee

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus respectivos volumes, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS não interfere na ordem de indução, uma vez que o foco é garantir que os volumes sejam direcionados para as posições específicas, conforme a operação de crossdocking.
O operador deverá levar ao pallet próximo a uma área de indução da automação e consumir o pallet para informar ao WCS que os volumes serão induzidos.
Os volumes relacionados à operação de CrossDocking devem ser encaminhados exclusivamente para as posições de PTLs configuradas especificamente para esse tipo de operação, evitando qualquer mistura com os volumes que atendem às lojas normais. Essa separação é essencial para manter a integridade do processo logístico, garantindo que os volumes de crossdocking sejam tratados de forma isolada, conforme as necessidades do processo, e não sejam misturados com os demais volumes destinados ao atendimento regular das lojas.
Dessa forma, o WCS assegura que os volumes de CrossDocking sejam tratados de maneira eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo das operações padrão.
