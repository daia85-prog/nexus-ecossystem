# integracao.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 5. Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 9886ed541a101afa

Cada integração entre os sistemas mencionados (WMS Cliente e WCS Invent) pode ser
configurada para seguir as regras de negócios da C&A. Elas podem variar de acordo com as
necessidades e particularidades de cada operação, e é importante que as integrações sejam
flexíveis o suficiente para acomodar as diferentes regras.
Ao projetar e implementar uma integração, é importante considerar os seguintes
aspectos:
Configuração de parâmetros: Os parâmetros de integração devem ser configuráveis
para permitir customização de acordo com as regras de negócio. Isso pode envolver a
definição de campos, formatos de dados, validações, mapeamentos e outras
configurações relevantes.
Flexibilidade em formatos de dados: Os formatos de dados utilizados na integração
devem ser adaptáveis para acomodar as necessidades específicas da operação. Por
exemplo, permitir a inclusão de campos personalizados, permitir a exclusão de campos
irrelevantes ou permitir a definição de campos opcionais.
Mapeamento e transformação de dados: A integração deve permitir a definição de
regras de mapeamento e transformação de dados, a fim de adaptar as informações
enviadas de um sistema para outro. Isso pode envolver a conversão de formatos,
reestruturação de dados ou a aplicação de cálculos ou lógica específicos.
Tratamento de exceções: As regras de negócio podem determinar ações específicas
para situações excepcionais. A integração deve ser capaz de lidar com essas exceções,
como erros de validação, discrepâncias de dados ou ações específicas para determinados
cenários.
Controle de fluxo: Algumas regras de negócio podem exigir a definição de fluxos de
processamento específicos. A integração deve permitir o controle desses fluxos, como a
definição de condições de aprovação, etapas de revisão ou notificações para diferentes partes
envolvidas.
Portanto, é essencial que a integração seja flexível e configurável para atender às
regras de negócio específicas da C&A. Isso permitirá que a integração WCS se adapte às
necessidades particulares da organização e facilitará a implementação da solução.
A integração a ser trocada entre os sistemas WCS e WMS C&A será realizada via REST
JSON e a informação será baseada em pedidos, onde basicamente o WMS informa ao WCS o
que deve ser separado para cada pedido. O nosso sistema processa as informações e realiza a
separação dos itens do pedido e, ao final da separação, retorna ao WMS do que foi separado
com sucesso ou se houve algum processo fora da separação desse pedido.
Para o projeto em questão, serão necessárias 16 (dezesseis) integrações para o correto
funcionamento da automação, sendo elas:

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 5.3. Trabalhos – Work (POST)  
**Score:** — (json-no-corpo) | **ID:** 3c0ce0a48e782965

WMS→WCS
Esta integração tem como objetivo a comunicação entre o sistema WMS (Warehouse
Management System) e o WCS (Warehouse Control System) para o envio de pedidos de
separação. O pedido será transmitido por ondas, mas é importante destacar que essas ondas
serão enviadas de maneira fracionada, ou seja, uma única onda será dividida em várias
integrações, conforme a necessidade da operação e o volume a ser separado.
Mensagens Fracionadas: Cada mensagem enviada para o Velox conterá apenas um
pedido (Order ID). O atributo "consolidador" para os pedidos por onda será o
GenerationNumberId, garantindo que os pedidos sejam agrupados corretamente
dentro de cada onda.
Processamento das Mensagens: Não existirá um flag do WMS indicando o término
das integrações de uma onda. Isso significa que o Velox não precisará aguardar
todas as integrações da mesma onda finalizarem para iniciar o picking da
respectiva onda, otimizando a operação.
Mensagens Duplicadas: O Velox ignorará mensagens duplicadas, caso o usuário
reprocesse erroneamente uma mensagem no WMS, prevenindo impactos na separação
e no fluxo de picking.
Exemplo JSON:
{
"MessageType": "PPK_DEI_TaskRelease",
"contextLocation": "10032",
"contextOrg": "CDP32",
"contextUser": "robotUserJobId",
"taskdtls": [
{
"OrderId": "DO00001",
"OrderLineId": "asdjpkt-099-Doline-1",
"OriginalOrderId": "OKORDER806",
"OriginalOrderLineId": null,
"TaskId": "WRPICK0000000253",
"TaskDetailId": "df674b09-0605-4ef3-b813-2cbc6b9b4b4f",
"WorkReleaseBatchId": "20201210-101625810-MANH-MANH",
"GenerationNumberId": "W12102020000000000004",
"ItemId": "GC001",
"Quantity": 1,
"OlpnId": null,
"CreatedTimestamp": "2025-07-31T12:35:04.463"
},
{
"OrderId": "DO00001",
"OrderLineId": "asdawkt-099-Doline-2",
"OriginalOrderId": "OKORDER806",
"OriginalOrderLineId": "002",
"TaskId": "WRPICK0000000253",
"TaskDetailId": "df674b09-0605-4ef3-b813-2cbc6b9b4b4h",
"WorkReleaseBatchId": "20201210-101625810-MANH-MANH",
"GenerationNumberId": "W12102020000000000004",
"ItemId": "GC002",
"Quantity": 1,
"OlpnId": null,
"CreatedTimestamp": "2025-07-31T12:35:04.463"
}
]
}
Campo
Tipo
Exemplo
Observação
MessageType
String
-
PPK_DEI_TaskRelease
Tipo de Mensagem
contextLocation
String
10032
D da instalação/facility
contextOrg
String
CDP32
ID da organização
ContextUser
String
robotUserJobId
Job User ID (usuário ou processo que
envia)
Taskdtls
Array
-
Lista de detalhes de tarefas
OrderId
String
DO00001
Identificador interno do pedido no
WCS
OrderLineId
String
asdjpkt-099-Doline-1
Identificador interno da linha do
pedido
OriginalOrderId
String
OKORDER806
Identificador do pedido original
(ERP/WMS)
OriginalOrderLineId
String
002 ou null
Identificador da linha do pedido
original
TaskId
String
WRPICK0000000253
Referência interna da tarefa
TaskDetailId
String
df674b09-0605-4ef3-b813-
2cbc6b9b4b4f
Referência interna do detalhe da
tarefa
WorkReleaseBatchId
String
20201210-101625810-MANH-MANH
ID do lote de liberação do picking
GenerationNumberId
String
W12102020000000000004
Identificador da execução da onda
(Wave Run)
ItemId
String
GC001
Código do item/SKU
Quantity
Integer
Quantidade do item a coletar
OlpnId
String
Null
ID do LPN (caixa/pallet)
CreatedTimestamp
Date
2025-07-31T12:35:04.463
Data e hora de criação do detalhe da
tarefa

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 5.4.  ET “Entrada no Transfer” (POST)  
**Score:** — (json-no-corpo) | **ID:** 5c67e8deb7125ef1

WMS→WCS
A integração de Entrada no Transfer tem como objetivo informar ao WCS que a operação de
reabastecimento foi iniciada pelo WMS. A interface é enviada após o WMS criar a tarefa de
movimentação para o transfer do seu lado, garantindo que o WCS possa iniciar a tarefa
de recebimento no transfer local.
Observações e regras da integração:
Mensagens por SKU: Para cada integração envolvendo um SKU distinto, o WMS
enviará um “TargetLocationId” diferente para o Velox.
o
Essa posição é apenas uma referência do WMS e não possui significado
operacional para o Velox.
Controle de lotes: O Velox realiza a alocação dos itens no transfer considerando os
lotes (AllocatedBatchNumber) e datas de validade (ExpirationDate)
informados na integração. A lógica garante que itens de lotes diferentes sejam tratados
separadamente, preservando o controle de inventário e evitando misturas indevidas.
Tratamento de inconsistências: Caso o ItemId não corresponda aos dados
registrados no WCS, será gerada uma ação de erro, permitindo que o usuário
reprocessa a solicitação corretamente.
Fluxo resumido:
1. O WMS cria a tarefa de reabastecimento e envia a interface de Entrada no Transfer ao
WCS.
2. O WCS válida os dados recebidos, identifica lotes e quantidades.
3. A tarefa de recebimento no transfer é criada automaticamente no WCS.
4. Em caso de divergência de SKU ou dados inconsistentes, a interface é sinalizada para
reprocessamento.
Exemplo JSON:
{
"MessageType": "PTW_DEI_AllocationCreated",
"contextLocation": "2800",
"contextOrg": "2800",
"contextUser": "UserId",
"PutawayTaskDetails": {
"TaskDetailDTOs": [
{
"CreatedTimestamp": "2025-08-12T15:15:40.322",
"TaskDetailId": "495b3d17-fe2e-4cde-8848-4b7709ba8c07",
"TaskId": "IBPW0000001733",
"Sequence": 1,
"ExpirationDate": "2026-01-08",
"ItemId": "50569010",
"SourceContainerId": "2800123456789012",
"ParentContainerId": "Pallet01",
"AllocatedBatchNumber": "A1PG22",
"TargetLocationId": "Virtual01",
"Quantity": 12
},
{
"CreatedTimestamp": "2025-08-12T15:15:40.322",
"TaskDetailId": "495b3d17-fe2e-4cde-8848-4b7709ba8c08",
"TaskId": "IBPW0000001733",
"Sequence": 2,
"ExpirationDate": "2026-01-08",
"ItemId": "50569010",
"SourceContainerId": "2800123456789013",
"ParentContainerId": "Pallet01",
"AllocatedBatchNumber": "A1PG22",
"TargetLocationId": "Virtual01",
"Quantity": 12
}
]
}
}
Campo
Tipo
Exemplo
Obs
MessageType
String
PTW_DEI_AllocationCreated
Tipo de mensagem enviada.
contextLocation
String
Identificador da instalação / unidade
operacional
contextOrg
String
Identificador da organização
contextUser
String
UserId
Usuário responsável pela criação/execução
da tarefa
PutawayTaskDetails
Object
-
Objeto pai que contém a lista de detalhes
da tarefa
TaskDetailDTOs
Array
-
Lista de detalhes de tarefas
CreatedTimestamp
String
2025-08-12T15:15:40.322
Data e hora de criação do detalhe da
tarefa (ISO 8601)
TaskDetailId
String
495b3d17-fe2e-4cde-8848-
4b7709ba8c07
ID detalhe de tarefas (único por Json)
TaskId
String
WRPICK001
ID tarefa nativa Manhatam
Sequence
Integer
Número sequencial do detalhe dentro da
tarefa
ExpirationDate
Date
2026-01-08
Data de validade do lote / item
ItemId
String
50569010
Identificador único do Item
SourceContainerId
String
ILPN1
Identificador da caixa de armazenagem.
ParentContainerId
String
Pallet01
Identificador do container pai (ex: pallet)
AllocatedBatchNumber String
A1PG22
Número do lote / batch do item
TargetLocationId
String
LocalVirtual2
posição virtual única para cada SKU
Quantity
Integer
Quantidade de itens dentro da caixa

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 5.5. CRT  “Confirmação Recebimento Transfer” (POST)  
**Score:** — (json-no-corpo) | **ID:** 12abd5cfee952aa5

WCS → WMS
A integração de Confirmação de Recebimento Transfer tem como objetivo informar ao WMS
que a operação de movimentação para o Transfer foi concluída com sucesso pelo WCS. Essa
confirmação é enviada após o reabastecimento físico das posições de transfer.
O WMS aguardará a confirmação do WCS para finalizar a tarefa de reabastecimento.
O WCS deve enviar uma mensagem para cada Caixa que compor o pallet.
Exemplo JSON:
{
"MessageType": "IBPUTAWAY",
"WMContextId": "ZHRyaW5kYWRlQG1hbmguY29t",
"TaskId": "IBPW0000001733",
"TransferContainer": {
"InventoryMove": {
"TaskDetailId": "6f3db10b-1d58-49a9-bbac-f41a99c7b127",
"SourceContainerId": "1010101011",
"ItemId": "09500440",
"ToLocationId": "B1-C-08-1-P1",
"Quantity": 1,
"CompletedQuantity": 1,
"CompletionTime": "2022-02-02T10:15:45",
"StartTime": "2022-02-02T09:15:45",
"EndTime": "2022-02-02T10:00:45"
}
}
}
Campo
Tipo
Exemplo
Obs
MessageType
String
IBPUTAWAY
Tipo de mensagem enviada.
WMContextId
String
ZHRyaW5kYWRlQG1hbmguY29t ID do usuário codificado em base64 que
finalizou a operação
TaskId
String
IBPW0000001733
ID da Tarefa enviado na mensagem de
Solicitação de Armazenagem (Putaway)
TransferContainer
Object
-
Referência interna do MAWM para o
objeto
InventoryMove
Object
-
Referência interna do MAWM para o
objeto
TaskDetailId
String
6f3db10b-1d58-49a9-bbac-
f41a99c7b127
ID dos Detalhes da Tarefa enviado na
mensagem de Solicitação de
Armazenagem (Putaway)
SourceContainerId
Integer
1010101011
ID do iLPN ou Pallet
ToLocationId
String
B1-C-08-1-P1
ID da localização virtual informada na
criação da tarefa
Quantity
Integer
Quantidade real alocada durante a
Solicitação de Armazenagem (Putaway)
CompletedQuantity
Integer
Quantidade real alocada durante a
Solicitação de Armazenagem (Putaway)
CompletionTime
Date
2022-02-02T10:15:45
Data e hora de conclusão
StartTime
Date
2022-02-02T09:15:45
Data e hora de início
EndTime
Date
2022-02-02T10:00:45
Data e hora de término

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** Exemplo JSON:  
**Score:** — (json-no-corpo) | **ID:** 4836ab08f0d34bea

{
"OlpnId": "CHEM01HKGHK200000080",
"Message": [
{
"MessageType": "PICKING",
"TaskId": "WRPICK0000000818",
"OlpnId": "CHEM01HKGHK200000080",
"PickedQuantity": 1,
"CloseIndicator": false,
"OlpnCrossReferenceId": "",
"contextUser": "santahirwar@manh.com",
"ShortIndicator": false,
"DestinationContainerId": "CHEM01HKGHK200000080",
"DestinationContainerType": "OLPN",
"contextLocation": "ORGID",
"contextOrg": "ORGID",
"OrderId": "DO0807202500000000097",
"ItemId": "10000834",
"PickingUserId": "santahirwar@manh.com",
"OrderLineId": "7545842642063226764",
"TaskDetailId": "5cb6d8b4-5951-4c56-9764-4201097229d9",
"WMContextId": "c2FudGFoaXJ3YXJAbWFuaC5jb20="
},
{
"MessageType": "PICKING",
"TaskId": "WRPICK0000000818",
"OlpnId": "CHEM01HKGHK200000080",
"PickedQuantity": 1,
"CloseIndicator": false,
"OlpnCrossReferenceId": "",
"contextUser": "santahirwar@manh.com",
"ShortIndicator": false,
"DestinationContainerId": "CHEM01HKGHK200000080",
"DestinationContainerType": "OLPN",
"contextLocation": "ORGID",
"contextOrg": "ORGID",
"OrderId": "DO0807202500000000097",
"ItemId": "10000835",
"PickingUserId": "santahirwar@manh.com",
"OrderLineId": "7545842642063226762",
"TaskDetailId": "5cb6d8b4-5951-4c56-9764-4201097229d8",
"WMContextId": "c2FudGFoaXJ3YXJAbWFuaC5jb20="
},
{
"MessageType": "CLOSEOLPN",
"OlpnId": "CHEM01HKGHK200000080",
"CloseOlpn": true
}
]
}
Campo
Tipo
Exemplo
Obs
OlpnId
String
CHEM01HKGHK200000048
ID do LPN (caixa)
Message
Object
-
Lista de mensagens de picking
MessageType
String
PICKING
Tipo de mensagem
TaskId
String
WRPICK0000000487
Referência interna da tarefa
OlpnId
String
CHEM01HKGHK200000048
ID do LPN (caixa)
PickedQuantity
Integer
Quantidade coletada
CloseIndicator
Boolean False
Indicador de fechamento do LPN
(true/false)
OlpnCrossReferenceId
String
“”
Referência cruzada do LPN (quando
aplicável)
contextUser
String
ID do usuário
ShortIndicator
Boolean False
Indicador de falta de produto (true/false)
DestinationContainerId
String
CHEM01HKGHK200000049
ID do container de destino (LPN)
DestinationContainerType String
OLPN
Tipo do container de destino
contextLocation
String
MANHCDP
ID da instalação/facility
ContextOrg
String
MANHCDP
ID da organização
OrderId
String
DO0807202500000000097
Identificador interno do pedido
ItemId
String
10001609
Código do item/SKU
PickingUserId
ID do usuário que separou o item
OrderLineId
String
7545842642068664760
Identificador interno da linha do pedido
TaskDetailId
String
91c7c96d-19ca-46be-870a-
bf110ba397d5
Referência interna do detalhe da tarefa
WMContextId
String
ZHRyaW5kYWRlQG1hbmguY29 ID do usuário codificado em base64 que
finalizou a operação
MessageType
String
CLOSEOLPN
Tipo de mensagem
OlpnId
String
CHEM01HKGHK200000048
ID do LPN (caixa)
CloseOlpn
Boolean true
Indicador de fechamento do LPN
(true/false)

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** WMS x WCS  
**Score:** — (semantico) | **ID:** a4dff67c446c8258

O Transfer é uma área dedicada no sistema WCS onde os itens são alocados fisicamente e
sistemicamente, com o objetivo de sinalizar o WCS que os produtos estão disponíveis para a
movimentação para as posições de picking ou buffer. A alocação no Transfer é gerenciada pelo
WMS, que envia uma integração 5.4 ET "Entrada no Transfer".
A partir dessa integração, o WMS informa ao WCS sobre a alocação de palets, que contêm
caixas etiquetadas, sendo que cada caixa incluirá apenas um SKU. No entanto, um único
palet pode conter múltiplas caixas, cada uma com seu respectivo SKU. Ao serem alocadas
dentro do Transfer, as caixas e palets têm suas informações detalhadas, tanto no nível do palet
quanto do SKU, garantindo que todos os itens sejam devidamente identificados e organizados
para os processos subsequentes.
O processo de recebimento do Transfer será finalizado por meio de uma funcionalidade
específica do Velox, que confirma a alocação correta dos palets e caixas dentro do Transfer.
Após essa confirmação, os itens estarão prontos para serem movimentados para as próximas
etapas de picking ou buffer, conforme a necessidade da operação.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 12.2. Interface de Reabastecimento no WCS  
**Score:** — (semantico) | **ID:** 5db59581acb574cc

O WCS disponibiliza uma tela para gerenciamento e execução dos reabastecimentos,
apresentando as seguintes informações para cada tarefa:
Item (SKU)
Quantidade (número de caixas)
Endereço de origem
Endereço de destino

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 15.1. Elaboração do software de integração entre PLC e WCS  
**Score:** — (semantico) | **ID:** 93be409465d9443e

O fornecimento de software de integração WCS e PLC será de total responsabilidade da
INVENT, incluindo todo o controle de interface necessários nos pontos de decisão.
Exemplo de Arquitetura:
A liberação das portas e protocolos abaixo se fazem necessário para o correto funcionamento
da automação:
Porta
Protocolo
Descrição de uso
HTTPS
Acesso ao sistema web instalado no servidor de aplicação
Socket TCP
Comunicação com os equipamentos da esteira (PLC)
Socket TCP
Comunicação com os concentradores (displays)
Socket TCP
Comunicação com o PLC pela IDE Tia Portal
TCP
Backend WCS
TCP
Frontend WCS
20 e 21
TCP
FTP
TCP
HTTP
TCP
Porta de comunicação WCS
TCP
Porta de comunicação WCS

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 1a22e2657cfe5f38

Cada integração entre os sistemas mencionados (WMS Cliente e WCS Invent) pode ser configurada para seguir as regras de negócios da C&A. Elas podem variar de acordo com as necessidades e particularidades de cada operação, e é importante que as integrações sejam flexíveis o suficiente para acomodar as diferentes regras.
Ao projetar e implementar uma integração, é importante considerar os seguintes aspectos:
Mapeamento e transformação de dados: A integração deve permitir a definição de regras de mapeamento e transformação de dados, a fim de adaptar as informações enviadas de um sistema para outro. Isso pode envolver a conversão de formatos, reestruturação de dados ou a aplicação de cálculos ou lógica específicos.
Tratamento de exceções: As regras de negócio podem determinar ações específicas para situações excepcionais. A integração deve ser capaz de lidar com essas exceções, como erros de validação, discrepâncias de dados ou ações específicas para determinados cenários.
Controle de fluxo: Algumas regras de negócio podem exigir a definição de fluxos de processamento específicos. A integração deve permitir o controle desses fluxos, como a definição de condições de aprovação, etapas de revisão ou notificações para diferentes partes envolvidas.
Portanto, é essencial que a integração seja elaborada de forma assertiva para atender às regras de negócio específicas da C&A. Isso permitirá que a integração WCS se adapte às necessidades particulares da organização e facilitará a implementação da solução.
A integração a ser trocada entre os sistemas WCS e WMS C&A será realizada via REST JSON e a informação será baseada em missões, onde basicamente o WMS informa ao WCS o que deve ser separado para cada missão. O nosso sistema processa as informações e realiza a separação dos itens da missão e, ao final da separação, retorna ao WMS do que foi separado com sucesso ou se houve algum processo fora da separação dessa missão.
Para o projeto em questão, serão necessárias 16 (dezesseis) integrações para o correto funcionamento da automação, sendo elas:

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Missões (POST)  
**Score:** — (json-no-corpo) | **ID:** 13d73c3de614fde5

WMSWCS
Esta integração tem como objetivo a comunicação entre o sistema WMS (Warehouse Management System) e o WCS (Warehouse Control System) para o envio de missões de separação. A missão será transmitida por ondas, mas é importante destacar que essas ondas serão enviadas de maneira fracionada, ou seja, uma única onda será dividida em várias integrações, conforme a necessidade da operação e o volume a ser separado.
Mensagens Fracionadas: Cada mensagem enviada para o Velox conterá apenas uma missão (Order ID). O atributo "consolidador" para as missões por onda será o GenerationNumberId, garantindo que as missões sejam agrupadas corretamente dentro de cada onda.
Processamento das Mensagens: Não existirá um flag do WMS indicando o término das integrações de uma onda. Isso significa que o Velox não precisará aguardar todas as integrações da mesma onda finalizarem para iniciar o picking da respectiva onda, otimizando a operação.
Mensagens Duplicadas: O Velox ignorará mensagens duplicadas, caso o usuário reprocesse erroneamente uma mensagem no WMS, prevenindo impactos na separação e no fluxo de picking.
Exemplo JSON:
{
"MessageType": "PPK_DEI_TaskRelease",
"contextLocation": "10032",
"contextOrg": "CDP32",
"contextUser": "robotUserJobId",
"taskdtls": [
{
"OrderId": "DO00001",
"OrderLineId": "asdjpkt-099-Doline-1",
"OriginalOrderId": "OKORDER806",
"OriginalOrderLineId": null,
"TaskId": "WRPICK0000000253",
"TaskDetailId": "df674b09-0605-4ef3-b813-2cbc6b9b4b4f",
"WorkReleaseBatchId": "20201210-101625810-MANH-MANH",
"GenerationNumberId": "W12102020000000000004",
"ItemId": "GC001",
"Quantity": 1,
"OlpnId": null,
"CreatedTimestamp": "2025-07-31T12:35:04.463"
},
{
"OrderId": "DO00001",
"OrderLineId": "asdawkt-099-Doline-2",
"OriginalOrderId": "OKORDER806",
"OriginalOrderLineId": "002",
"TaskId": "WRPICK0000000253",
"TaskDetailId": "df674b09-0605-4ef3-b813-2cbc6b9b4b4h",
"WorkReleaseBatchId": "20201210-101625810-MANH-MANH",
"GenerationNumberId": "W12102020000000000004",
"ItemId": "GC002",
"Quantity": 1,
"OlpnId": null,
"CreatedTimestamp": "2025-07-31T12:35:04.463"
}
]
}
Campo | Tipo | Exemplo | Observação
MessageType | - | PPK_DEI_TaskRelease | 
ContextLocation | String | 10032 | 
 | String | CDP32 | 
ContextUser | String | RobotUserJobId | Job User ID (usuário ou processo que envia)
Taskdtls | Array | - | Lista de detalhes de missões
OrderId | String | DO00001 | Identificador interno da missão no WCS
OrderLineId | String | asdjpkt-099-Doline-1 | Identificador interno da linha da missão
OriginalOrderId | String | OKORDER806 | Identificador da missão original (ERP/WMS)
OriginalOrderLineId | String | 002 ou null | Identificador da linha da missão original
TaskId | String | WRPICK0000000253 | Referência interna da missão
TaskDetailId | String | df674b09-0605-4ef3-b813-2cbc6b9b4b4f | Referência interna do detalhe da missão
WorkReleaseBatchId | String | 20201210-101625810-MANH-MANH | ID do lote de liberação do picking
GenerationNumberId | String | W12102020000000000004 | Identificador da execução da onda (Wave Run)
ItemId | String | GC001 | Código do item/SKU
Quantity | Integer | 1 | Quantidade do item a coletar
OlpnId | String | Null | ID do LPN (caixa/pallet)
CreatedTimestamp | Date | 2025-07-31T12:35:04.463 | Data e hora de criação do detalhe da missão

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** ET “Entrada no Transfer” (POST)  
**Score:** — (json-no-corpo) | **ID:** c1fdf5b2b505f617

WMSWCS
A integração de Entrada no Transfer tem como objetivo informar ao WCS que a operação de reabastecimento foi iniciada pelo WMS. A interface é enviada após o WMS criar a tarefa de movimentação para o transfer do seu lado, garantindo que o WCS possa iniciar a tarefa de recebimento no transfer local.
Observações e regras da integração:
Mensagens por SKU: Para cada integração envolvendo um SKU distinto, o WMS enviará um “TargetLocationId” diferente para o Velox.
Essa posição é apenas uma referência do WMS e não possui significado operacional para o Velox.
Controle de lotes: O Velox realiza a alocação dos itens no transfer considerando os lotes (AllocatedBatchNumber) e datas de validade (ExpirationDate) informados na integração. A lógica garante que itens de lotes diferentes sejam tratados separadamente, preservando o controle de inventário e evitando misturas indevidas.
Tratamento de inconsistências: Caso o ItemId não corresponda aos dados registrados no WCS, será gerada uma ação de erro, permitindo que o usuário reprocessa a solicitação corretamente.
Fluxo resumido:
O WMS cria a tarefa de reabastecimento e envia a interface de Entrada no Transfer ao WCS.
O WCS válida os dados recebidos, identifica lotes e quantidades.
A tarefa de recebimento no transfer é criada automaticamente no WCS.
Em caso de divergência de SKU ou dados inconsistentes, a interface é sinalizada para reprocessamento.
Exemplo JSON:
{
"MessageType": "PTW_DEI_AllocationCreated",
"contextLocation": "2800",
"contextOrg": "2800",
"contextUser": "UserId",
"PutawayTaskDetails": {
"TaskDetailDTOs": [
{
"CreatedTimestamp": "2025-08-12T15:15:40.322",
"TaskDetailId": "495b3d17-fe2e-4cde-8848-4b7709ba8c07",
"TaskId": "IBPW0000001733",
"Sequence": 1,
"ExpirationDate": "2026-01-08",
"ItemId": "50569010",
"SourceContainerId": "2800123456789012",
"ParentContainerId": "Pallet01",
"AllocatedBatchNumber": "A1PG22",
"TargetLocationId": "Virtual01",
"Quantity": 12
},
{
"CreatedTimestamp": "2025-08-12T15:15:40.322",
"TaskDetailId": "495b3d17-fe2e-4cde-8848-4b7709ba8c08",
"TaskId": "IBPW0000001733",
"Sequence": 2,
"ExpirationDate": "2026-01-08",
"ItemId": "50569010",
"SourceContainerId": "2800123456789013",
"ParentContainerId": "Pallet01",
"AllocatedBatchNumber": "A1PG22",
"TargetLocationId": "Virtual01",
"Quantity": 12
}
]
}
}
Campo | Tipo | Exemplo | Obs
MessageType | String | PTW_DEI_AllocationCreated | Tipo de mensagem enviada.
ContextLocation | String | 2800 | Identificador da instalação / unidade operacional
ContextOrg | String | 2800 | Identificador da organização
ContextUser | String | UserId | Usuário responsável pela criação/execução da tarefa
PutawayTaskDetails | Object | - | Objeto pai que contém a lista de detalhes da tarefa
TaskDetailDTOs | Array | - | Lista de detalhes de tarefas
CreatedTimestamp | String | 2025-08-12T15:15:40.322 | Data e hora de criação do detalhe da tarefa (ISO 8601)
TaskDetailId | String | 495b3d17-fe2e-4cde-8848-4b7709ba8c07 | ID detalhe de tarefas (único por Json)
TaskId | String | WRPICK001 | ID tarefa nativa Manhatam
Sequence | Integer | 1 | Número sequencial do detalhe dentro da tarefa
ExpirationDate | Date | 2026-01-08 | Data de validade do lote / item
ItemId | String | 50569010 | Identificador único do Item
SourceContainerId | String | ILPN1 | Identificador da caixa de armazenagem.
ParentContainerId | String | Pallet01 | Identificador do container pai (ex: pallet)
AllocatedBatchNumber | String | A1PG22 | Número do lote / batch do item
TargetLocationId | String | LocalVirtual2 | posição virtual única para cada SKU
Quantity | Integer | 10 | Quantidade de itens dentro da caixa

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** CRT  “Confirmação Recebimento Transfer” (POST)  
**Score:** — (json-no-corpo) | **ID:** 4a898ad7621a1807

WCS  WMS
A integração de Confirmação de Recebimento Transfer tem como objetivo informar ao WMS que a operação de movimentação para o Transfer foi concluída com sucesso pelo WCS. Essa confirmação é enviada após o reabastecimento físico das posições de transfer.
O WMS aguardará a confirmação do WCS para finalizar a tarefa de reabastecimento.
O WCS deve enviar uma mensagem para cada Caixa que compor o pallet.
Exemplo JSON:
{
"MessageType": "IBPUTAWAY",
"WMContextId": "ZHRyaW5kYWRlQG1hbmguY29t",
"TaskId": "IBPW0000001733",
"TransferContainer": {
"InventoryMove": {
"TaskDetailId": "6f3db10b-1d58-49a9-bbac-f41a99c7b127",
"SourceContainerId": "1010101011",
"ItemId": "09500440",
"ToLocationId": "B1-C-08-1-P1",
"Quantity": 1,
"CompletedQuantity": 1,
"CompletionTime": "2022-02-02T10:15:45",
"StartTime": "2022-02-02T09:15:45",
"EndTime": "2022-02-02T10:00:45"
}
}
}
Campo | Tipo | Exemplo | Obs
MessageType | String | IBPUTAWAY | Tipo de mensagem enviada.
WMContextId | String | ZHRyaW5kYWRlQG1hbmguY29t | ID do usuário codificado em base64 que finalizou a operação
TaskId | String | IBPW0000001733 | ID da Tarefa enviado na mensagem de Solicitação de Armazenagem (Putaway)
TransferContainer | Object | - | Referência interna do MAWM para o objeto
InventoryMove | Object | - | Referência interna do MAWM para o objeto
TaskDetailId | String | 6f3db10b-1d58-49a9-bbac-f41a99c7b127 | ID dos Detalhes da Tarefa enviado na mensagem de Solicitação de Armazenagem (Putaway)
SourceContainerId | Integer | 1010101011 | ID do iLPN ou Pallet
ToLocationId | String | B1-C-08-1-P1 | ID da localização virtual informada na criação da tarefa
Quantity | Integer | 1 | Quantidade real alocada durante a Solicitação de Armazenagem (Putaway)
CompletedQuantity | Integer | 1 | Quantidade real alocada durante a Solicitação de Armazenagem (Putaway)
CompletionTime | Date | 2022-02-02T10:15:45 | Data e hora de conclusão
StartTime | Date | 2022-02-02T09:15:45 | Data e hora de início
EndTime | Date | 2022-02-02T10:00:45 | Data e hora de término

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** CC “Confirmação de Coleta” (POST)  
**Score:** — (json-no-corpo) | **ID:** 18425e6420c424ad

WCSWMS
Finalização do Picking: A integração de confirmação de picking será enviada pelo Velox somente quando o picking em todas as estações estiver finalizado e a validação indicar que a caixa não contém divergências de coleta. Não haverá envio de mensagens de picking parcial neste fluxo.
Sem necessidade de auditagem: Caso a caixa não precise ser direcionada para a estação de auditagem, a confirmação de picking será enviada assim que o volume passar pelo scanner do portal de RFID, sem qualquer outro processamento adicional.
Necessidade de auditagem: Se a caixa precisar ser direcionada para a estação de auditagem, o fluxo será:
A caixa será enviada para a auditagem.
A divergência será tratada, podendo ser resolvida ou aceita pelo usuário.
Após a resolução da divergência, a mensagem de confirmação de picking será então enviada ao WMS.
• Missões com múltiplos volumes: Quando uma mesma missão for quebrada em mais de um volume, o WCS enviará a integração volume a volume. Cada volume terá sua confirmação transmitida de forma independente quando for finalizado, sem aguardar a conclusão dos demais volumes da missão.
Exemplo JSON:
{
"OlpnId": null,
"Message": [
{
"MessageType": "PICKING",
"TaskId": "WRPICK0000000818",
"OlpnId": "",
"PickedQuantity": 1,
"CloseIndicator": false,
"OlpnCrossReferenceId": "",
"contextUser": "santahirwar@manh.com",
"ShortIndicator": false,
"ReasonCodeId": "IA",
"DestinationContainerId": "CHEM01HKGHK200000080",
"DestinationContainerType": "OLPN",
"contextLocation": "ORGID",
"contextOrg": "ORGID",
"OrderId": "DO0807202500000000097",
"ItemId": "10000834",
"PickingUserId": "santahirwar@manh.com",
"OrderLineId": "7545842642063226764",
"TaskDetailId": "5cb6d8b4-5951-4c56-9764-4201097229d9",
"WMContextId": "c2FudGFoaXJ3YXJAbWFuaC5jb20="
},
{
"MessageType": "PICKING",
"TaskId": "WRPICK0000000818",
"OlpnId": "CHEM01HKGHK200000080",
"PickedQuantity": 1,
"CloseIndicator": false,
"OlpnCrossReferenceId": "",
"contextUser": "santahirwar@manh.com",
"ShortIndicator": false,
"ReasonCodeId": "IA",
"DestinationContainerId": "CHEM01HKGHK200000080",
"DestinationContainerType": "OLPN",
"contextLocation": "ORGID",
"contextOrg": "ORGID",
"OrderId": "DO0807202500000000097",
"ItemId": "10000835",
"PickingUserId": "santahirwar@manh.com",
"OrderLineId": "7545842642063226762",
"TaskDetailId": "5cb6d8b4-5951-4c56-9764-4201097229d8",
"WMContextId": "c2FudGFoaXJ3YXJAbWFuaC5jb20="
"EndCurrentOlpn": True
},
]
}
Campo | Tipo | Exemplo | Obs
OlpnId | String | CHEM01HKGHK200000048 | ID do LPN (caixa)
Message | Object | - | Lista de mensagens de picking
MessageType | String | PICKING | 
TaskId | String | WRPICK0000000487 | 
OlpnId | String | CHEM01HKGHK200000048 | ID do LPN (caixa)
PickedQuantity | Integer | 1 | Quantidade coletada
CloseIndicator | Boolean | False | Indicador de fechamento do LPN (true/false)
OlpnCrossReferenceId | String | “” | Referência cruzada do LPN (quando aplicável)
ContextUser | String |  | ID do usuário
ShortIndicator | Boolean | False | Indicador de falta de produto (true/false)
ReasonCodeId | String | IA | Identificador do tipo de corte
DestinationContainerId | String | CHEM01HKGHK200000049 | ID do container de destino (LPN)
DestinationContainerType | String | OLPN | Tipo do container de destino
ContextLocation | String | MANHCDP | ID da instalação/facility
ContextOrg | String | MANHCDP | ID da organização
OrderId | String | DO0807202500000000097 | Identificador interno da missão
ItemId | String | 10001609 | Código do item/SKU
PickingUserId |  |  | ID do usuário que separou o item
OrderLineId | String | 7545842642068664760 | Identificador interno da linha da missão
TaskDetailId | String | 91c7c96d-19ca-46be-870a-bf110ba397d5 | Referência interna do detalhe da tarefa
WMContextId | String | ZHRyaW5kYWRlQG1hbmguY29 | ID do usuário codificado em base64 que finalizou a operação
EndCurrentOlpn | Boolean | True | Indicador de fechamento do LPN (true/false)

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** AI - Ajuste de Inventário  
**Score:** — (json-no-corpo) | **ID:** 07aa54b7d6a51d52

A integração de Ajuste de Inventário tem como objetivo permitir que o WCS comunique ao WMS variações de estoque detectadas durante o processo de auditoria de estoque.
Essa integração garante que o estoque sistêmico seja sempre atualizado conforme a quantidade real de produtos existente nas posições de picking ou no transfer, mantendo a consistência entre o físico e o lógico.
O payload será enviado pelo WCS ao WMS indicando se houve adição (quando foram encontrados itens a mais em relação ao saldo sistêmico) ou remoção (quando itens foram retirados ou faltantes).
Exemplo de JSON – Adição de Quantidade
{
"SourceContainerID": null,
"SourceContainerType": "LOCATION",
"SourceLocationId": null,
"MessageType": "INVENTORY_ADJUSTMENT",
"ReasonCode": "IA",
"ItemId": "09500441",
"AddItemRemainder": 10,
"RemoveItemRemainder": null,
    "Quantity": 10
"CreatedTimestamp": "2025-12-10T19:38:33.496"
}
Quando o ajuste de inventário representar uma baixa, o campo RemoveItemRemainder será preenchido e o campo AddItemRemainder ficará nulo.
Exemplo de JSON – Remoção de Quantidade
{
"SourceContainerID": null,
"SourceContainerType": "LOCATION",
"SourceLocationId": null,
"MessageType": "INVENTORY_ADJUSTMENT",
"ReasonCode": "IA",
"ItemId": "09500441",
"AddItemRemainder": null,
"RemoveItemRemainder": 5,
    "Quantity": -5
"CreatedTimestamp": "2025-12-10T19:38:33.496"
}
Campo | Tipo | Exemplo | Obs
SourceContainerId | String | W1-A-01-1-D1 | Identificador do container de origem. Deve ser null.
SourceContainerType | String | LOCATION | Tipo do container de origem. Sempre enviar LOCATION.
SourceLocationId | String | W1-A-01-1-D1 | Identificador da localização de origem. Deve ser null.
MessageType | String | INVENTORY_ADJUSTMENT | Tipo da mensagem. Sempre enviar INVENTORY_ADJUSTMENT.
ReasonCode | String | IA | Código do motivo do ajuste (definido pelo WMS).
ItemId | String | 09500441 | Identificador do item/SKU ajustado.
AddItemRemainder | Integer | null | 10 | Quantidade a adicionar ao estoque. Preencher apenas quando houver acréscimo.
RemoveItemRemainder | Integer | null | 10 | Quantidade a remover do estoque. Preencher apenas quando houver baixa.
Quantity | Integer | -10 | Quantidade do Delta sendo positiva para ADD e negativa para Remover
CreatedTimestamp | String | 30 | Data da criação do registro

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Confirmação de Recall  
**Score:** — (json-no-corpo) | **ID:** 66fe32d6a81c365b

WCS  WMS
Exemplo JSON:
{
"ContainerToContainerTransferList": [
{
"SourceContainerId": "Search location based on AU01PBLZone=True",
"SourceContainerType": "LOCATION",
"TransactionType": "Pack iLPN",
"Quantity": 20,
"Batch": "102030",
"ExpirationDate": "20102025",
"ItemId": "11497590",
"IlpnDTO": {
"IlpnId": "102030405060",
"IlpnTypeId": "ILPN"
}
}
]
}
Campo | Tipo | Obrigatório | Exemplo | Obs
ContainerToContainerTransferList | Object | Sim | — | Estrutura principal da transferência
SourceContainerId | String | Sim | AU01PBLZone=True | Localização de origem (zona PBL) Enviar null
SourceContainerType | Fixed | Sim | LOCATION | Tipo fixo de contêiner default “LOCATION”
TransactionType | String | Sim | Pack iLPN | Tipo de transação default “Pack iLPN”
Quantity | Number | Sim | 20 | Quantidade de itens
Batch | String | Sim | 102030 | Lote do item
ExpirationDate | Date | Sim | 20/10/2025 | Data de validade
ItemId | String | Sim | 11497590 | Código do item
IlpnDTO | Object | Sim | — | Objeto do ILPN
IlpnId | String | Sim | 102030405060 | Identificador do ILPN (container de retirada) ou caixa de entrada ao transfer
IlpnTypeId | String | Sim | ILPN | Tipo do ILPN Statico “ILPN”

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** WMS x WCS  
**Score:** — (semantico) | **ID:** 91aeee6b6a9ca24a

O Transfer é uma área dedicada no sistema WCS onde os itens são alocados fisicamente e sistemicamente, com o objetivo de sinalizar o WCS que os produtos estão disponíveis para a movimentação para as posições de picking. A alocação no Transfer é gerenciada pelo WMS, que envia uma integração 5.4 ET "Entrada no Transfer".
A partir dessa integração, o WMS informa ao WCS sobre a alocação de palets, que contêm caixas etiquetadas, sendo que cada caixa incluirá apenas um SKU. No entanto, um único palet pode conter múltiplas caixas, cada uma com seu respectivo SKU. Ao serem alocadas dentro do Transfer, as caixas e palets têm suas informações detalhadas, tanto no nível do palet quanto do SKU, garantindo que todos os itens sejam devidamente identificados e organizados para os processos subsequentes.
O processo de recebimento do Transfer será finalizado por meio de uma funcionalidade específica do Velox, que confirma a alocação correta dos palets e caixas dentro do Transfer. Após essa confirmação, os itens estarão prontos para serem movimentados para as próximas etapas de picking, conforme a necessidade da operação.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Interface de Reabastecimento no WCS  
**Score:** — (semantico) | **ID:** 2c1f36742ec53950

O WCS disponibiliza uma tela para gerenciamento e execução dos reabastecimentos, apresentando as seguintes informações para cada tarefa:
Item (SKU)
Quantidade (número de caixas)
Endereço de origem
Endereço de destino

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Elaboração do software de integração entre PLC e WCS  
**Score:** — (semantico) | **ID:** 87550dc4f05e0ec4

O fornecimento de software de integração WCS e PLC será de total responsabilidade da INVENT, incluindo todo o controle de interface necessários nos pontos de decisão.
Exemplo de Arquitetura:
A liberação das portas e protocolos abaixo se fazem necessário para o correto funcionamento da automação:
Porta | Protocolo | Descrição de uso
443 | HTTPS | Acesso ao sistema web instalado no servidor de aplicação
2000 | Socket TCP | Comunicação com os equipamentos da esteira (PLC)
4660 | Socket TCP | Comunicação com os concentradores (displays)
102 | Socket TCP | Comunicação com o PLC pela IDE Tia Portal
5000 | TCP | Backend WCS
5001 | TCP | Frontend WCS
20 e 21 | TCP | FTP
80 | TCP | HTTP
3000 | TCP | Porta de comunicação WCS
4000 | TCP | Porta de comunicação WCS

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** 6. Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 17ec93f880a56ac6

Cada integração entre os sistemas mencionados (WMS Cliente e WCS Invent) pode ser
configurada para seguir as regras de negócios da Basso Pancotte. Elas podem variar de
acordo com as necessidades e particularidades de cada operação, e é importante que as
integrações sejam flexíveis o suficiente para acomodar as diferentes regras.
Ao projetar e implementar uma integração, é importante considerar os seguintes
aspectos:
Configuração de parâmetros: Os parâmetros de integração devem ser configuráveis
para permitir customização de acordo com as regras de negócio. Isso pode envolver a
definição de campos, formatos de dados, validações, mapeamentos e outras
configurações relevantes.
Flexibilidade em formatos de dados: Os formatos de dados utilizados na integração
devem ser adaptáveis para acomodar as necessidades específicas da operação. Por
exemplo, permitir a inclusão de campos personalizados, permitir a exclusão de campos
irrelevantes ou permitir a definição de campos opcionais.
Mapeamento e transformação de dados: A integração deve permitir a definição de
regras de mapeamento e transformação de dados, a fim de adaptar as informações
enviadas de um sistema para outro. Isso pode envolver a conversão de formatos,
reestruturação de dados ou a aplicação de cálculos ou lógica específicos.
Tratamento de exceções: As regras de negócio podem determinar ações específicas
para situações excepcionais. A integração deve ser capaz de lidar com essas exceções,
como erros de validação, discrepâncias de dados ou ações específicas para determinados
cenários.
Controle de fluxo: Algumas regras de negócio podem exigir a definição de fluxos de
processamento específicos. A integração deve permitir o controle desses fluxos, como a
definição de condições de aprovação, etapas de revisão ou notificações para diferentes
partes envolvidas.
Portanto, é essencial que a integração seja flexível e configurável para atender às
regras de negócio específicas da Basso Pancotte. Isso permitirá que a integração WCS se
adapte às necessidades particulares da organização e facilitará a implementação da solução.
A integração a ser trocada entre os sistemas WCS e WMS Basso Pancotte será
realizada via REST JSON e a informação será baseada em pedidos, onde basicamente o WMS
informa ao WCS o que deve ser separado para cada pedido. O nosso sistema processa as
informações e realiza a separação dos itens do pedido e, ao final da separação, retorna ao WMS
do que foi separado com sucesso ou se houve algum processo fora da separação desse pedido.
Segue as integrações necessárias para o correto funcionamento da automação:
Criação
Apresentação
Envio
Aprovação da ES
Responsável:
Invent
Desenvolvimento de
documentação (ES).
Responsável: Invent
Apresentação de ES
ao cliente para
validação de toda a
documentação.
Responsável:
Invent
Envio do ES para
Aprovação.
Responsável: Cliente
Cliente aprova a proposta para dar
seguimento no processo seguindo
para o desenvolvimento.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Missões – Work (POST)  
**Score:** — (json-no-corpo) | **ID:** ccccac787a80af24

WMS→WCS
Integração para enviar pedidos para serem separados pela automação WCS.
Teremos pedidos que serão coletados com lote ou shelflife específico, para esses casos o
lote ou shelflife será informado no momento da integração, caso os campos vierem como
“null” poderá ser coletado qualquer lote ou shelflife.
Exemplo JSON:
"onda": 1,
"romaneioLista": [
"codRomaneio": 99,
"descRomaneio": "NOME DO ROMANEIO",
"corte": "25/09/2025- 15:00:00",
"placa": "abc9876",
"completo": false,
"transportadora": "propria",
"motorista": "Antonio Carlos",
"pedidos": [
"nunota": 123456789,
"obs": "SEPARAR COLEIRAS DE COR AZUL",
"sequencia": 1,
"cpnjcpf": "00011133344",
"cliente": "João da Silva",
"endCompleto": "Rua 1, n 10",
"Bairro": "Centro",
"cidade": "Nova Santa Rita",
"UF": "RS",
"termolabelEspecial": true,
"codempresa": 1,
"empresa": "Basso Pancotte",
"subArea": "PORTO ALEGRE",
"itens": [
"codInterno": 10,
"ShelfLife": null,
"lote": null,
"quantidade": 10
},
"codInterno": 20,
"lote": null,
"ShelfLife": null,
"quantidade": 12
]
},
"nunota": 987654321,
"obs": "SEPARAR COLEIRAS DE COR AZUL",
"sequencia": 2,
"cpnjcpf": "66677788899",
"cliente": "Central de Rações",
"endCompleto": "Rua 1, n 10",
"Bairro": "Centro",
"cidade": "Nova Santa Rita",
"UF": "RS",
"termolabilEspecial": true,
"codempresa": 5,
"empresa": "Intersul",
"subArea": " PORTO ALEGRE",
"itens": [
"codInterno": 30,
"lote": "ABC001",
"ShelfLife": 700,
"quantidade": 24
},
"codInterno": 40,
"lote": null,
"ShelfLife": 230,
"quantidade": 54
]
]
]
Regras adicionais da integração Missões – Work: (a) Cada envio é considerado uma nova onda,
não há atualização incremental de ondas já integradas; pedidos adicionais devem ser enviados
em nova integração com novo número de onda. (b) O campo sequencia influencia apenas a
ordem de paletização no PTL (sequência de entrega do caminhão); não afeta a ordem de
separação, que segue FIFO/prioridade do romaneio.
Campo
Tipo
Obrigatório
Exemplo
Observação
Onda
Integer
Sim
ONDA_001
Número identificador da onda de pedidos.
romaneioLista
Array
Sim
-
Lista de romaneios
codRomaneio
Integer
Sim
Código identificador do romaneio.
descRomaneio
String
Sim
NOME ROMANEIO
Descrição do romaneio.
Corte
String
Sim
25/09/2025- 15:00:00
Data e Horário de Corte
Placa
String
Sim
PL12XC0
Placa do caminhão vinculado ao romaneio
Completo
Boolean
Sim
False
Informa se o romaneio está completo. Quando
completo=true, o romaneio está fechado: o WCS não
deve aceitar novas integrações de pedidos para esse
romaneio (retornar erro).
Motorista
String
Sim
Antonio Carlos
Nome do motorista
Transportadora
String
Não
Própria
Nome da Transportadora
Pedidos
Array
Não
Lista de itens
Itens pertencentes ao pedido.
Nunota
Integer
Sim
1324562
Número da nota
Obs
String
Não
Separar coleiras de cor Azul
Observações do Pedido). na tabela Sankhya/Oracle é
VARCHAR2(4000) Caso esse tamanho seja problema,
pode ser truncado pelo WCS.
Sequencia
Integer
Sim
Ordem de entrega no carregamento do caminhão.
Obrigatória para romaneios de transportadora própria;
opcional para demais transportadoras (se enviado, não
será considerado pelo WCS).
Cnpjcpf
String
Sim
38948912852
Define se a coleta deve ser conferida antes do envio ao
WCS e serve como Identificação do cliente (CPF ou
CNPJ) para impressão em etiquetas.
Cliente
String
Sim
Lais Laura
Nome do cliente
endCompleto
String
Sim
Rua 1 n
Logradouro + número do cliente
Bairro
String
Sim
Centro
Bairro do cliente
Cidade
String
Sim
Nova Santa Rita
Cidade do cliente
codEmpresa
Integer
Sim
Identificador a que empresa pertence a movimentação
UF
String
Sim
RS
Código UF do cliente
Itens
Array
Sim
-
Lista de itens
codInterno
Integer
Sim
SKU do item
Lote
String
Não
Lote1234
Lote específico para coleta
ShelfLife
Integer
Não
Quantidade de dias para vencer.
Quantidade
Integer
Sim
Unidades a serem separadas.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Integração de Abastecimento do Transfer (WMS → WCS)  
**Score:** — (json-no-corpo) | **ID:** d31026e7051074eb

Objetivo:
Essa integração tem como objetivo abastecer o Transfer com unidades de produtos,
movimentando os itens para o pulmão, com base no recebimento de produtos no estoque.
Estrutura da Integração (JSON):
"itens": [
"codInterno": 123456,
"quantidade": 100,
"lote": "01234567A",
"endDestino": "END001",
"validade": "2024-12-31",
"codEmpresa": 1
},
"codInterno": 789012,
"quantidade": 50,
"lote": "76543210A",
"endDestino": "END002",
"validade": "2024-12-31",
"codEmpresa": 5
]
Campo
Tipo
Obrigatório Exemplo
Obs
Itens
Array
Sim
-
Lista dos itens a serem abastecidos para o Transfer.
codInterno
Integer
Sim
123456
Código identificador do produto.
Quantidade
Integer
Sim
Quantidade a ser movida para o Transfer.
Lote
String
Sim
01234567
Lote do produto.
endDestino
String
Sim
END001
Endereço de destino no pulmão
validade
String
Sim
2024-12-31
Data de validade do produto.
codEmpresa
Integer
Sim
Identificador a que empresa pertence a
movimentação
Observações Finais:
A operação deve garantir que, antes de iniciar qualquer movimentação de produtos
para o transfer, a quantidade necessária esteja validada e disponível para atender à
demanda de reabastecimento. A movimentação unidades será registrada de forma
detalhada, assegurando a rastreabilidade completa do estoque em todas as etapas do
processo. As alocações no pulmão são de responsabilidade do WMS, que gerencia a
alocação eficiente dos itens, garantindo que o espaço de armazenamento seja
otimizado e os produtos movidos conforme a necessidade operacional.
A quantidade enviada nessa integração será agregada ao saldo que já consta no WCS
não sobrescrevendo e sim adicionando a quantidade já existente

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** WCS→WMS  
**Score:** — (json-no-corpo) | **ID:** a541a05974cdc622

Quando a separação dos produtos for concluída para todos os volumes pertencentes ao pedido,
a confirmação de separação será enviada, para que o WMS tenha a informação de que o pedido
foi totalmente separado, e quantos volumes o pedido possuí no final.
Segue exemplo do JSON:
"pedido": 124589,
"pega": ["A102030","A102031"],
"qtdVolumes": 2,
"volumes": [
"idVolume": 1,
"etiqueta":"string",
"itens": [
"codInterno": 1020,
"lote": "string",
"coletar": 20,
"coletado": 20
},
"codInterno": 1020,
"lote": "string",
"coletar": 60,
"coletado": 60
]
},
"idVolume": 2,
"etiqueta":"string",
"itens": [
"codInterno": 1020,
"lote": "string",
"coletar": 10,
"coletado": 10
},
"codInterno": 1020,
"lote": "string",
"coletar": 30,
"coletado": 30
]
]
Campo
Tipo
Obrigatório Exemplo
Obs
Pedido
Integer Sim
Número do pedido
Pega
Array
Sim
-
Lista de pegas vinculado ao pedido
Identificadores das tarefas/volumes vinculados ao pedido
(também chamados de 'tarefa'). Compõem todos os
volumes do pedido independentemente do tipo de picking
(Full Case, Fracionado, Picking Cart). A CC é disparada
uma única vez, somente após todos os volumes
concluídos — não há confirmação parcial.
qtdVolumes
Integer Sim
Quantidades de volumes pertencentes ao pedido.
Volumes
Array
Sim
-
Lista contendo todos os volumes do pedido
idVolume
Integer Sim
Identificador do volume
Etiqueta
String
Sim
12345678
Código da etiqueta do volume
Itens
Array
Sim
-
Lista de itens pertencentes ao volume
CodInterno
Integer Sim
Código do produto
Lote
String
Sim
Lote01234
Lote específico coletado
Coletar
Integer Sim
Quantidade a ser coletada
Coletado
Integer Sim
Quantidade coletada

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Romaneio Pallets  
**Score:** — (json-no-corpo) | **ID:** c021c07da2259bdd

Esta integração tem como objetivo informar ao WMS a relação de pallets pertencentes a um
determinado romaneio, sendo disparada somente quando todos os pallets vinculados estiverem
devidamente fechados. O WCS consolida os dados do romaneio e envia ao WMS a identificação
única do romaneio, a quantidade total de pallets e de volumes, além da data de geração da
informação. Cada pallet é descrito pelo seu código de RG, sua sequência de carregamento no
romaneio e a quantidade de volumes nele contidos.
O envio desses dados permite ao WMS acompanhar com precisão a composição logística do
romaneio, organizar o carregamento na ordem correta e manter a rastreabilidade dos volumes
até a expedição.
Esta integração inclui todos os pallets do romaneio, independentemente do tipo: PTL
convencional, Termolábil (Cofre/Pallet) e Picking Pallet Exceção.
Estrutura da Integração (JSON):
"codromaneio": 123456789,
"placa": "abc9876",
"qtdTotalPallets": 2,
"qtdTotalVolumes": 44,
"createDat": "2025-09-11T16:20:00Z",
"pallets": [
"rg": "RG-PLT-0001",
"sequencia": 1,
"qtdVolumes": 24
},
"rg": "RG-PLT-0002",
"sequencia": 2,
"qtdVolumes": 20
]
Campo
Tipo
Obrigatório Exemplo
Obs
Codromaneio
Integer
Sim
123456789
Código identificador único do romaneio.
Placa
String
Sim
PL12XC0
Placa do caminhão vinculado ao romaneio
qtdTotalPallets
Integer
Sim
Quantidade total de pallets que compõem
o romaneio.
qtdTotalVolumes
Integer
Sim
Quantidade total de volumes agrupados
nos pallets do romaneio.
createDat
Datetime Sim
2025-09-11T16:20:00Z
Data e hora da geração da integração em
formato ISO 8601.
Pallets
Array
Sim
-
Lista de pallets vinculados ao romaneio.
Rg
String
Sim
RG-PLT-0001
Código de identificação único do pallet
(RG).
Sequencia
Integer
Sim
Ordem sequencial de carregamento dos
pallets no romaneio.
qtdVolumes
Integer
Sim
Quantidade de volumes agrupados no
pallet.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Integração de Auditoria de Estoque  
**Score:** — (json-no-corpo) | **ID:** 611d5526101a0c6c

WCS→WMS
A integração de auditoria de estoque entre o WCS e o WMS visa atualizar as quantidades de
itens no WMS conforme os resultados da auditoria. O operador pode realizar uma auditoria
completa, onde todas as posições de estoque são verificadas, ou parcial, onde ele seleciona
os itens a auditar. Após a auditoria, o WCS envia os dados para o WMS, incluindo o SKU, a
quantidade auditada e a operação realizada (Completa ou Parcial).
Estrutura da Integração (JSON):
"idTarefa": 1,
"operacao": "auditoria",
"tipo": "completa",
"itens": [
"ocorrencia": "perda",
"codInterno": 123456,
"endAuditado": "123456",
"tipoEndereco": "Picking",
"qtd": 100,
"lote": "lote1234",
"validade": "2024-12-31",
"codEmpresa": 5
},
"ocorrencia": "perda",
"codInterno": 789012,
"endAuditado": "123456",
"tipoEndereco": "Pulmao",
"qtd": 50,
"lote": "lote1234",
"validade": "2024-12-31",
"codEmpresa": 5
]
Campo
Tipo
Obrigatório Exemplo
Obs
idTarefa
Integer Não
Identificador da tarefa no vellox
Operação
String
Sim
Auditoria
Informa a operação realizada
Tipo
String
Sim
Completa
Modelo do processo (fracionada, completa)
Itens
Array
Sim
{}
Lista de itens envolvidos na operação
Ocorrência
String
Sim
Perda
Informa se houve perda ou sobra ou se
está igual
codInterno
Integer Sim
123456
Código identificador do produto
endAuditado
String
Sim
123456
Endereço auditado
tipoEndereco
String
Sim
Picking
Tipo de endereço onde foi feito a auditoria
podendo ser Picking ou Pulmão.
Qtd
Integer Sim
Quantidade Auditada
Lote
String
Sim
Lote1234
Lote específico do item
validade
String
Sim
2024-12-31
Data de validade do produto.
codEmpresa
Integer Sim
Identificador a que empresa pertence a
movimentação

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Solicitação de Recall (WMS → WCS)  
**Score:** — (json-no-corpo) | **ID:** b35868079029a74d

Quando necessário o recall de um item o WMS enviará ao WCS uma integração visando a
criação da tarefa de recall dentro do WCS, e fornecerá as informações do item, do lote e assim
como a quantidade a ser retirada, garantindo que a tarefa de recall seja registrada
adequadamente.
"operacao": "recall",
"codEmpresa": 5,
"codDocumento": 1001,
"tipo": "Devolução",
"itens": [
"codInterno": 123456,
"loteItem": "01234567A",
"validade": "2024-12-31",
"qtd": 100
},
"codInterno": 123456,
"loteItem": "01234567B",
"validade": "2024-12-31",
"qtd": 100
]
Campo
Tipo
Obrigatório Exemplo
Obs
Operação
String
Sim
recall
Informa a operação realizada
codEmpresa
Integer Sim
Identificador a que empresa pertence a
movimentação
codDocumento
Integer Sim
Identificador da solicitação de recall WMS
Tipo
String
Sim
destruição
Modelo do processo
Itens
Array
Sim
{}
Lista de itens envolvidos na operação
codInterno
Integer Sim
123456
Código identificador do produto
loteItem
String
Sim
01234567B
Lotes a ser retirado
validade
String
Sim
2024-12-31
Data de validade do produto.
Qtd
Integer Sim
Quantidade removida.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** 6.9.1. Confirmação de Recall (WCS → WMS)  
**Score:** — (json-no-corpo) | **ID:** 3152403c4e27d046

Após a execução do processo de recall, o WCS enviará ao WMS a confirmação da retirada dos
itens. O WCS fornecerá as informações do item, do lote e assim como a quantidade retirada,
garantindo que o processo de recall seja registrado e rastreado adequadamente.
"idTarefa": 1,
"codEmpresa": 5,
"codDocumento": 1001,
"operacao": "recall",
"tipo": "Devolução",
"itens": [
"codInterno": 123456,
"loteItem": "01234567A",
"validade": "2024-12-31",
"endColeta": "123456",
"qtd": 100
},
"codInterno": 123456,
"loteItem": "01234567B",
"validade": "2024-12-31",
"endColeta": "123456",
"qtd": 100
]
O WMS aceita a integração mesmo que a quantidade esteja divergente, e atualiza o estoque
conforme integração
Campo
Tipo
Obrigatório Exemplo
Obs
idTarefa
Integer Não
Identificador da tarefa no vellox
codEmpresa
Integer Sim
Identificador a que empresa pertence a
movimentação
codDocumento
Integer Sim
Identificador da solicitação de recall WMS
Operação
String
Sim
recall
Informa a operação realizada
Tipo
String
Sim
destruição
Modelo do processo
Itens
Array
Sim
{}
Lista de itens envolvidos na operação
codInterno
Integer Sim
123456
Código identificador do produto
loteItem
String
Sim
01234567B
Lotes a ser retirado
validade
String
Sim
2024-12-31
Data de validade do produto.
endColeta
String
Sim
01023XPTO
Endereço de retirada
qtd
Integer Sim
Quantidade removida.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Movimentação Forçada de Estoque (WCS → WMS)  
**Score:** — (json-no-corpo) | **ID:** 3f7345b102db8d67

O WCS será responsável por realizar a movimentação forçada de itens do estoque, seja em
posições de picking ou no transfer. Este processo permitirá que a operação movimente
produtos específicos de acordo com a necessidade, O WCS enviará uma integração informando
a movimentação dos itens com o código do item, lote e a quantidade movimentada, endereço
de origem e destino.
Exemplo de Integração (JSON):
"idTarefa": 1,
"operacao": "movimentacao",
"tipo": "movimentacao de itens",
"itens": [
"codInterno": 123456,
"loteItem": "01234567A",
"qtd": 100,
"codEmpresa": 1,
"endOrigem": "123456",
"endDestino": "123456",
]
Campo
Tipo
Obrigatório Exemplo
Obs
idTarefa
Integer Não
Identificador da tarefa no vellox
Operação
String
Sim
Movimentação
Informa a operação realizada
Tipo
String
Sim
Movimentação de itens
Modelo do processo
Itens
Array
Sim
{}
Lista de itens envolvidos na operação
codInterno
Integer Sim
123456
Código identificador do produto
loteItem
String
Sim
01234567B
Lotes a ser retirado
qtd
Integer Sim
Quantidade removida.
codEmpresa
Integer Sim
Identificador a que empresa pertence a
movimentação
endOrigem
String
Sim
0123456
Endereço de origem dos itens Movimentados
endDestino
String
Sim
0123456
Endereço de destino dos itens Movimentados

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** MTP - Mata Trabalhos Pedidos  
**Score:** — (json-no-corpo) | **ID:** 4d9e08484791aff2

WMS → WCS
As integrações de Cancelamento de pedidos são geradas através da necessidade do time Basso
e Pancote e é enviada do WMS ao WCS. Onde o WCS por sua vez toma as ações de acordo com
o status e localidade dos volumes (pega) do pedido cancelado, ou seja, por mais que o
cancelamento é feito, as situações dos volumes (pega) desse pedido determinam qual será a
tratativa desse volume (pega) cancelado junto do pedido.
Temos 4 cenários possíveis no cancelamento de Pedidos:
Volumes (pega) que já tenham finalizadas todas as coletas, o sistema não terá tratativas
a realizar.
Volumes (pega) que estavam sendo separados na linha de FlowRack, não irão entrar em
nenhum posto para coleta e serão direcionados para o setor de conferência informando
que o pedido foi cancelado
Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a
conferência após o final da coleta informando que o pedido foi cancelado.
Volumes (pega) que não saíram do Order Start apenas será removido da lista.
Segue exemplo do JSON:
"pedidos": [
1548789782148,
5789452185478
]
OBS: A restrição de reuso de código depende do tipo de cancelamento. (a) MTP (cancelamento
de pedido individual): o código do pedido NÃO pode ser reutilizado em nova integração. (b) MTR
(cancelamento de romaneio inteiro): os códigos dos pedidos contidos no romaneio cancelado
PODEM ser reutilizados em novo romaneio, pois o cancelamento foi do agrupador (romaneio),
não dos pedidos em si.
Campo
Tipo
Obrigatório Exemplo
Obs
Pedidos
Array
Sim
--
Será enviado como nunota na integração
de missões (Integer) - Pedidos a serem
cancelados

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** MTR - Mata Trabalhos Romaneio  
**Score:** — (json-no-corpo) | **ID:** d92c99ab20b4c9ca

WMS → WCS
As integrações de Cancelamento de Romaneio são geradas através da necessidade do time
Basso e Pancote e é enviada do WMS ao WCS. O WCS só deve aceitar essa integração caso
nenhum volume do romaneio tenha sido iniciado.
Segue exemplo do JSON:
"romaneio": [
101,
102,
]
OBS: O WCS opera com os conceitos de cancelamento de pedidos (MTP) e cancelamento de
romaneios (MTR) — Após o cancelamento de um romaneio (MTR), o número desse romaneio não
será mais aceito pelo WCS; já os códigos dos pedidos que estavam vinculados a ele podem ser
reintegrados em novo romaneio, conforme regra explicitada no item 6.11 (MTP × MTR) o WCS
deve cancelar um romaneio por completo ou recusar a integração caso algum pedido do romaneio
já tenha sido integrado.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Devolução de Cancelados  
**Score:** — (semantico) | **ID:** 3264313a952d97fc

WCS→WMS
A integração de Devolução de Cancelados é gerada no momento da finalização de todas as
tarefas de devolução vinculadas ao pedido. Onde o WCS retorna ao WMS o número do pedido
cancelado para que o WMS considere que o estoque do pedido cancelado está disponível
novamente.
Segue exemplo do JSON:
"pedido":  1548789782148
Obs: O WMS somente prosseguirá após o recebimento da confirmação do WCS. O WCS deverá
enviar essa confirmação sempre que aceitar uma integração de cancelamento,
independentemente do status do pedido. Para pedidos que não chegaram a ser iniciados no
Order Start, o envio será imediato. Para pedidos já iniciados, o WCS enviará a confirmação
somente após a conclusão das tarefas de devolução.
Esta integração sinaliza ao WMS que as tarefas de devolução do pedido foram concluídas,
liberando o estoque correspondente. O rastreio detalhado dos itens e quantidades efetivamente
devolvidos é feito via integração Inbound Sync (item 6.3), que atualiza os saldos das posições de
picking após cada devolução física.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Endereço Inativo/Ativo  
**Score:** — (json-no-corpo) | **ID:** 02cc3479d9faa5fe

WCS→WMS
A integração de Endereço Ativo/Inativo é gerada quando um endereço tem seu status
alterado. Onde o WCS retorna ao WMS o endereço e o estado atual dele para que o WMS não
aloque nenhum produto nesse endereço.
Segue exemplo do JSON:
"endereco": "123456",
"ativo": true,

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Recall  
**Score:** — (semantico) | **ID:** 165235402244cfae

O processo de Recall será utilizado quando a operação decidir remover itens específicos da
linha de separação. A operação pode solicitar a remoção de um lote específico ou todos os lotes.
Fluxo do Processo:
O WMS enviará uma integração de Recall com o código do item e o lote a ser
retirado.
O Velox gerará a tarefa de recall, e o operador, utilizando o coletor Android,
realizará o login no WCS e acessará a tela de Recall.
O operador abrirá a tarefa na tela de recall, e o Velox informará as posições nas quais
os itens do lote em questão estão alocados.
O operador se deslocará até as posições indicadas, realizará a leitura do endereço e
do SKU, e informará a quantidade retirada dessa posição.
Caso haja mais posições com o mesmo lote para o SKU, o operador seguirá para a
próxima posição e repetirá o processo de leitura e retirada.
Após retirar todos os itens do lote na automação, o Velox devolverá as informações,
incluindo o código do item, o lote e a quantidade retirada.
Esse processo garante a rastreabilidade e o controle total sobre a movimentação de itens
removidos da linha de separação, assegurando que todos os itens estejam devidamente
alocados antes da conclusão da tarefa.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Ordem de Transporte – Instrução gerada pelo SAP (via interface TORD) que determina  
**Score:** — (semantico) | **ID:** 59b61dd1142fa3c9

a movimentação de um material de uma origem para um destino dentro do armazém.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** ZSDDAREM  
**Score:** — (semantico) | **ID:** 155a77e53f7bb177

Mensagem de integração entre SAP e WCS utilizada para envio de remessas (SAP →
WCS)

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 7.1. Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** bc7c4c7fc4d2bb4b

As integrações entre os sistemas WMS (SAP) e WCS (Velox) são realizadas através de requisições
API REST, onde os documentos de integrações (IDOCs) são enviados.
Esses documentos seguem o formato XML (eXtensible Markup Language) e serão
responsáveis pelas trocas de informações entre os sistemas.
Para o envio das informações ao SAP será utilizado o método de autenticação BasicAuth.
Diagrama geral de comunicações via IDOC entre WCS e WMS:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 3. A OT somente pode ser cancelada se o status estiver em "Pendente", caso o WCS  
**Score:** — (semantico) | **ID:** 5b2c338577ddbd53

receba um CATO de uma OT já confirmada o WCS retorna o erro ao SAP na integração.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Origem dos Dados  
**Score:** — (semantico) | **ID:** 3d17bd1796fd76df

O cadastro de materiais é recebido pelo WCS exclusivamente por meio da integração com o
SAP, via IDOC de cadastro de material (MATMAS). Não é permitida a criação ou edição manual
de materiais diretamente no WCS.
•
O time MBRF é responsável por garantir que todo material esteja devidamente
cadastrado no WCS antes do envio de qualquer IDOC de remessa que o referencie.
•
Caso um material novo precise ser incluído, o cadastro deve ser realizado e integrado
antes do envio do IDOC de remessa ao WCS.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Inclusão de Material  
**Score:** — (semantico) | **ID:** 31ea5bf613beafcc

•
O WCS deverá aceitar e registrar o material recebido via IDOC, armazenando os
campos uteis contidos na mensagem de integração.
•
A cada novo IDOC recebido, o WCS deverá verificar se o material já existe na base.
Caso não exista, deverá criar o registro. Caso já exista, deverá atualizar os campos
conforme os dados recebidos na nova mensagem.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informação  
**Score:** — (sinal-integracao-forte) | **ID:** f72af163349e4f2b

MATNR
Produtos
Código/SKU
EAN11
Produtos
EAN
MAKTX
Produtos
Descrição/Apresentação
ZCONS_ACAB
Produtos
Temperatura
ZTPPESO
Produtos
Tipo de peso/Matriz fragilidade
MAGRV
Produtos
Categoria de peso
BISMT
Produtos
Sigla (Abreviação)
Caso algum campo obrigatório não seja identificado no recebimento da integração, o WCS irá
retornar um Bad Request (status code 400) informando o campo faltante na integração, os
dados recebidos não serão salvos na base de produtos e o cadastro deverá ser ajustado no SAP
e um novo envio dessa integração deve ocorrer com todos os dados obrigatórios preenchidos
corretamente.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 11. Recebimento de remessa (Pedidos)  
**Score:** — (sinal-integracao-forte) | **ID:** 97d24e9f72dee28e

Para atender a necessidade de separação de remessas (pedidos) o SAP envia para o Velox as
informações pertinentes as necessidades desses pedidos, enviado essas informações através do
IDOC TPSDLS (ZSDDAREM), que compõe as informações que serão utilizadas para criação de
controle de operação e coleta (Onda) assim como o gerenciamento de volumes que será
realizado pelo WCS
Ao receber a integração de pedido o WCS realiza as validações dos campos obrigatórios e em
caso de dados obrigatórios faltante ele recusa a integração salva o payload da requisição no log
de entrada de integrações com status de erro, caso contrário a requisição é aprovada na
validação e o payload é salvo no log de entrada de integração com status concluído e o WCS
salva em sua base de dados as informações de transporte, remessa, cliente e produto (sku,
quantidade e range de data de fabricação aceitável).

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Detalhe  
**Score:** — (semantico) | **ID:** 7304f018f03472f7

Sequência de entrega
Vindo na integração TPSDLS (ZSDDAREM) campo ZSEQENTREGA
Nº de transporte
Vindo na integração TPSDLS (ZSDDAREM) campo SHPID
Nº de remessa
Vindo na integração TPSDLS (ZSDDAREM) campo DELID
Data de impressão da etiqueta
Informado pelo WCS
Doca de expedição
Informado através do WCS (Manutenção de transporte)
Identificador WCS
Criado pelo WCS sendo utilizado os identificadores únicos de remessa (R) e
volume (V) para compor o código único de 16 caracteres EX:
R1234V1234XXXXXX
Nº da entrega (Cliente)
Vindo na integração TPSDLS (ZSDDAREM) campo SHPPTY
Código do produto (SKU)
Vindo na integração ZMATMAS01 campo MATNR
Sigla do material
Vindo na integração ZMATMAS01 campo BISMT
Posto
Informado através do WCS, 1º caractere informa temperatura, 2º informa o
nível e os dois últimos informa o número do posto.
Posição de coleta
Informado através do WCS

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Etiqueta Completa (Padrão GS1)  
**Score:** — (semantico) | **ID:** 34cb4c8ee41b4eb7

É o layout mais completo, contendo todas as informações necessárias codificadas em até 5
zonas de código de barras/2D:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Integração com o WCS  
**Score:** — (semantico) | **ID:** f358e770868ba5b9

O WCS será responsável por centralizar as regras de decisão do sorter, enviando os comandos
de direcionamento conforme os dados da operação e recebendo os retornos necessários para
controle e rastreabilidade do processo.
O sorter opera de forma integrada ao WCS, garantindo visibilidade do status dos volumes, dos
desvios realizados e das ocorrências de erro ao longo da execução.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Regra de Rampa principal para o SAP  
**Score:** — (semantico) | **ID:** 156937774a04c45d

O SAP aceita apenas uma rampa e um SKU por integração de retorno. Portanto,
independentemente de qual rampa física recebeu o volume, o WCS deve informar ao SAP que a
caixa desceu na rampa principal cadastrada para aquele transporte.
O WCS mantém internamente o controle real de qual rampa recebeu cada volume (para
rastreabilidade e relatórios), mas na comunicação com o SAP sempre referência a rampa
principal.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 6 — Registro: O WCS registra internamente a rampa real que recebeu o volume. Para  
**Score:** — (semantico) | **ID:** f9ce2258230c98c7

a integração com o SAP, registra a rampa principal.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** 6. Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 31bc3a2224226eda

Para o correto funcionamento da automação o WCS enviará e receberá dados do EWM/SAP da
INBETTA por meio de APIs REST, utilizando o formato JSON. Os endpoints deverão ser
definidos e compartilhados previamente pelos times da INBETTA e da INVENT, antes do início
do período de Teste de integração, conforme cronograma estabelecido pelo time Invent.
A aplicação WCS Velox utiliza o protocolo HTTPS (Hypertext Transfer Protocol Secure) como
padrão de comunicação para a troca de dados entre o cliente e o servidor. A aplicação WCS não
exige autenticação entre os sistemas integrados, uma vez que a comunicação ocorre dentro de
uma arquitetura local e controlada.
Cada integração entre os sistemas EWM/SAP da INBETTA e o WCS Velox da INVENT pode ser
customizada conforme as regras de negócio da INBETTA, permitindo adequações específicas
para cada operação. Para isso, é essencial que as integrações sejam flexíveis e parametrizáveis.
Os principais aspectos a serem considerados são:
Configuração de parâmetros: Os parâmetros de integração devem ser configuráveis para
permitir customização de acordo com as regras de negócio. Isso pode envolver a definição de
campos, formatos de dados, validações, mapeamentos e outras configurações relevantes.
Flexibilidade em formatos de dados: Os formatos de dados utilizados na integração devem
ser adaptáveis para acomodar as necessidades específicas da operação. Por exemplo, permitir a
inclusão de campos personalizados, permitir a exclusão de campos irrelevantes ou permitir a
definição de campos opcionais.
Mapeamento e transformação de dados: A integração deve permitir a definição de regras
de mapeamento e transformação de dados, a fim de adaptar as informações enviadas de um
sistema para outro. Isso pode envolver a conversão de formatos, reestruturação de dados ou a
aplicação de cálculos ou lógica específicas.
Tratamento de exceções: As regras de negócio podem determinar ações específicas para
situações excepcionais. A integração deve ser capaz de lidar com essas exceções, como erros
de validação, discrepâncias de dados ou ações específicas para determinados cenários.
Controle de fluxo: Algumas regras de negócio podem exigir a definição de fluxos de
processamento específicos. A integração deve permitir o controle desses fluxos, como a
definição de condições de aprovação, etapas de revisão ou notificações para as diferentes
partes envolvidas no processo.
Portanto, é essencial que a integração seja flexível e configurável para atender às regras de
negócio específicas da INBETTA. Isso permitirá que a integração WCS se adapte às
necessidades particulares da organização e facilitará a implementação da solução.
A integração a ser trocada entre os sistemas WCS e EWM/SAP INBETTA será realizada via REST
JSON e a informação será baseada em pedidos, onde basicamente o EWM/SAP informa ao WCS
o que deve ser separado para cada pedido Full Case e Fracionado. O nosso sistema processa as
informações e realiza a separação dos itens do pedido e, ao final da separação, retorna ao
EWM/SAP do que foi separado com sucesso ou se houve algum processo fora da separação
desse pedido.
Para o projeto entre Invent e INBETTA, foram mapeadas 4 (quatro) diferentes integrações que
estão descritas e detalhadas abaixo:
Nº
Nome da Integração
Sentido da
Comunicação
Observações
Integração de Remessa / Pedido
EWM/SAP→ WCS
Inclui pedidos Full Case e Fracionado, base
para geração das tarefas no WCS
Retorno de Picking / Shortpicking
Confirmação de Picking
WCS → EWM/SAP
SAP
Pode conter divergências entre o solicitado
e o executado
Cancelamento de Pedido / Ressuprimento
EWM/SAP↔ WCS
(bidirecional)
Permite reprocessar ou interromper
operações com base na decisão do
EWM/SAP
Reabastecimento dos Fracionados
WCS → EWM/SAP
SAP
WMS envia solicitação de reabastecimento
ao velox
Retorno de Reabastecimento
WCS → EWM/SAP
SAP
Velox efetua a separação da caixa no full
case

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** EMW/SAP → WCS  
**Score:** — (json-no-corpo) | **ID:** 964dce60654768c0

O EWM/SAP envia uma lista de remessas com informações detalhadas como número do pedido,
SKU, quantidade, lote, prioridade, centro, cubagem por unidade (em metros cúbicos - m³),
cubagem total da remessa e dados da etiqueta (romaneio e transportadora).
Os pedidos são apresentados automaticamente na tela do WCS para o operador dar início na
separação. A capacidade de pallets em cada rampa do sorter são 10 pallets, o EWM/SAP deve
enviar uma carga que possa ser comportada nessas posições, levando em consideração a
cubagem parametrizada para pallets de expedição.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"cnpjEmbarcador": "21218719000173",
"lista_remessas": [
{
"num_pedido": "P45001",
"prioridade": "1",
"remessa": "86089815",
"cep": "930025-000",
"loja": "LJ1",
"cod_transp": 1020,
"des_transp": "LARF SUL TRANSPORTES EIRELI",
"cod_cliente": "1",
"des_cliente": "LEROY MERLIM CIA BRA DE BRICOLAGEM SAO
LEOPOLDO/RS - CRISTO REI",
"cidade": "DIADEMA",
"uf": "SP",
"cod_rota": "784",
"des_rota": "Rota01",
"siglaFilalDestino": "GRU",
"itens_fracionados": [
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"ean": "7891000000028",
"ean_dz": "7891000000028",
"qtd_solic": 7,
"cubagem": 0.00164,
"altura": 10,
"largura": 100,
"comprimento": 150,
"qtd_master": 500,
"peso": 150
},
{
"tarefa": "00013",
"tipo_dep": "Deposito 01",
"posicao": "A-01-08",
"sku": "1020",
"ean": "9961000000014",
"ean_dz": "7891000000028",
"qtd_solic": 8,
"cubagem": 0.00164,
"altura": 400,
"largura": 300,
"comprimento": 500,
"qtd_master": 500,
"peso": 150
}
],
"fullcase": [
{
"tarefa": "00012",
"uc": "100000000091227284",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"dun": "49871236547800",
"qtd_solic": 3,
"cubagem": 0.00164,
"altura": 10,
"largura": 100,
"comprimento": 150,
"peso": 150,
"qtd_caixa": 150
},
{
"tarefa": "00012",
"uc": "100000000091227284",
"tipo_dep": "Deposito 01",
"posicao": "A-02-02",
"sku": "5010",
"dun": "23871236546610",
"qtd_solic": 1500,
"cubagem": 0.00164,
"altura": 10,
"largura": 100,
"comprimento": 150,
"peso": 150,
"qtd_caixa": 150
}
]
CAMPO
DESCRIÇÃO
TIPO
OBRIGATÓRIO
TAMANHO
Empresa
Código da empresa responsável pela remessa
Char
Sim
Centro
Código do centro de distribuição
Char
Sim
codDeposito
Código do deposito
Char
Sim
num_pedido
Número identificador único do pedido do cliente
Numc
Não
Prioridade
Nível de prioridade atribuída a remessa/pedido
Char
Não
Lista_remessa
Lista que vai conter as remessas do posto
Array
Sim
-
Remesssa
Número da remessa
Char
Sim
UC
Unidade comercial – Rg do pallet fictício ou real, utilizado
na coleta de pallets.
Char
Sim
Cep
Código de endereço postal do cliente
Char
Sim
Loja
Identificador da loja
Char
Não
cod_transp
Código da transportadora
Char
Sim
cnpjEmbarcador
CNPJ do cliente
Char
Sim
des_transp
Descrição da transportadora
Char
Sim
cod_cliente
Código do cliente
Char
Sim
des_cliente
descrição do cliente
Char
Sim
Cidade
Cidade do destinatário
Char
Sim
UF
Estado do destinatário
Char
Sim
cod_rota
Código da Rota de transporte
Char
Não
des_rota
Descrição da Rota de transporte
Char
Não
siglaFilialDestino
Sigla da filial de destino
Char
Sim
itens_fracionados
Lista de itens fracionados
Array
Sim
-
Tarefa
Nº Tarefa WMS para separação do material
Numc
Sim
tipo_dep
Tipo de Deposito
Char
Sim
Posição
Endereço de coleta do item
Char
Sim
Sku
Código SKU do produto
Char
Sim
Ean
Código EAN do produto (unitário)
Char
Sim
Ean_dz
Código EAN do produto (master)
Char
Sim
qtd_solic
Quantidade solicitada do item (unitário)
Quan
Sim
13,3
Cubagem
Cubagem unitária do item em metros cúbicos
Quan
Sim
15,3
Altura
Altura unitária do item em mm o WCS deve multiplicar pela
caixa fechada, ou master na hora de considerar as dimensões
Numc
Sim
Largura
Largura unitária do item em mm o WCS deve multiplicar pela
caixa fechada, ou master na hora de considerar as dimensões
Numc
Sim
Comprimento
Comprimento unitário do item em mm o WCS deve
multiplicar pela caixa fechada, ou master na hora de considerar
as dimensões
Numc
Sim
Fullcase
Lista de itens fullcase
Array
Sim
-
Tarefa
Nº Tarefa WMS para separação do material
Numc
Sim
tipo_dep
Código do Tipo de Deposito
Char
Sim
Posição
Endereço de coleta do item
Char
Sim
Sku
Código SKU do produto
Char
Sim
DUN
Código DUN do item (para fullcase)
Char
Sim
qtd_solic
Quantidade solicitada do item (unidade)
Quan
Sim
13,3
qtd_pallet
Quantidade que um pallet completo sempre vai ter
Quan
Sim
13,3
qtd_master
Quantidade de unidades que um pacote (display) vai ter, o WCS
deve dividir a quantidade solicitada pela quantidade master para
saber qual valor vai exibir no led da linha de fracionados.
Quan
Sim
13,3
qtd_caixa
Quantidade de unidades que uma caixa fechada vai ter, o WCS
deve dividir a quantidade solicitada pela quantidade caixa
fechada para saber quantas caixas fechadas devem separar. O
wcs deve recusar integração que o valor da divisão for menor
que 1(um)
Quan
Sim
13,3
Peso
Peso unitário do item, o WCS deve multiplicar pela caixa
fechada, ou master na hora de considerar o peso
Numc
Sim
Recusa da Integração de Pedidos
Em caso de recusa da integração de pedidos, o WCS rejeitará a integração de forma total, ou
seja, todos os pedidos contidos na mensagem serão recusados. O WCS não realizará recusa
parcial — se houver qualquer inconsistência que impeça o processamento, nenhum pedido da
integração será aceito. O EWM/SAP deverá corrigir os dados e reenviar a integração completa
para novo processamento.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** WCS → EWM/SAP  
**Score:** — (json-no-corpo) | **ID:** b82a489979e2e673

Após a conclusão do processo de separação, o WCS enviará ao EWM/SAP a confirmação de
picking a nível de tarefa, contendo as quantidades separadas, faltantes (shortpicking),
status da operação (completo ou parcial), SKU e demais dados operacionais por item.
Diferentemente do modelo volume a volume, a integração de confirmação de picking será
disparada somente quando a tarefa, previamente enviada na integração de
remessas/missões, estiver totalmente concluída.
Caso uma mesma tarefa esteja dividida em múltiplos volumes, o WCS deverá:
Monitorar a passagem de todos os volumes associados à tarefa pelo ponto de
confirmação definido (scanner de conferência, portal de leitura, Prix na ponta da rampa
do sorter ou processo de conferência do picking fracionado);
Consolidar as informações de todos os volumes envolvidos;
Disparar a integração apenas uma única vez, a nível de tarefa, somente após
todos os volumes relacionados terem sido confirmados no ponto
especificado.
Esse modelo garante:
Consistência na confirmação das tarefas;
Evita envios parciais ou duplicados;
Alinhamento com o conceito de tarefa do EWM/SAP;
Maior confiabilidade no tratamento de shortpicking.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"completo": true,
"retornos": [
{
"remessa": "123658",
"status": "parcial",
"total_volumes": 30,
}
],
"itens": [
{
"tarefa": "00012",
"uc": "100000000091227284",
"id_caixa": "NUMERODATAREFAWCS",
"posicao": "A-01-02",
"sku": "7891000000011",
"qtd_solic": 10,
"qtd_sep": 2
},        {
"tarefa": "00012",
"uc": "100000000091227284",
"id_caixa": "NUMERODATAREFAWCS",
"posicao": "A-03-01",
"sku": "6421000000221",
"qtd_solic": 5,
"qtd_sep": 2
}
]
}

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** EMW/SAP → WCS  
**Score:** — (json-no-corpo) | **ID:** 8b4f9bc0d921fa69

O EWM/SAP envia ao WCS a ordem de cancelamento de uma remessa. O WCS bloqueia ou
remove esse pedido da operação em andamento.
As integrações de Cancelamento de remessas são geradas através da necessidade do time
INBETTA e é enviada do EWM/SAP ao WCS. Onde o WCS por sua vez toma as ações de acordo
com o status e localidade dos volumes do romaneio cancelado, ou seja, por mais que o
cancelamento é feito, as situações dos volumes desse pedido determinam qual será a tratativa
desse volume cancelado junto do romaneio.
Temos 3 cenários possíveis nos “cancelamentos de Romaneios”:
Volumes que já tenham passados pelo sorter e foram enviados a integração de confirmação
volume, o sistema não terá tratativas a realizar.
Volumes que estavam sendo separados, não irão entrar em nenhum posto para coleta e serão
direcionados para o setor de conferência informando que o pedido foi cancelado
Volumes que não saíram do Order Start apenas será cancelado da lista.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"remessa": "82505263"
"codDeposito": 1234,
}

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** EMW/SAP → WCS  
**Score:** — (json-no-corpo) | **ID:** dc55e8d0d67d1449

No fluxo de reabastecimento, o WMS é responsável por gerar o reabastecimento, enquanto o
WCS realiza a separação dos volumes para o reabastecimento. Após a separação dos itens, o
WMS assume a responsabilidade pelo reabastecimento da posição final de picking.
CAMPO
DESCRIÇÃO
TIPO
OBRIGATÓRIO
TAMANHO
empresa
Código da empresa responsável pela operação
Char
Sim
Centro
Código do centro de distribuição
Char
Sim
remessa
Código da remessa cancelada
Char
Sim
codDeposito
Código do deposito
Char
Sim
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"reabastecimentos": [
{
"tarefa": "00013",
"sku": "3040",
"dun": "49871236547800",
"qt_sug": 2,
"pos_origem": "1N49042030",
"pos_destino": "1N49042031",
"motivo": "reabastecimento",
"qtd_caixa": 150
}
]
}

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** WCS → EMW/SAP  
**Score:** — (json-no-corpo) | **ID:** bdabcf544dacd129

Essa integração tem como objetivo informar ao WMS que o volume está na posição de picking
solicitada. A integração será enviada no momento em que o operador finalizar a alocação dos
produtos na posição final de picking utilizando o sistema do WCS.
Exemplo JSON:
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

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Aloca Pallet (WCS → WMS)  
**Score:** — (json-no-corpo) | **ID:** 28b94721e232853e

Objetivo:
Caso a transportadora esteja com a função de paletização ativa será enviado pelo WCS essa
integração após o fechamento das posições de pallet, confirmação para o WMS, informando
que o pallet foi fechado e quais volumes estão associados a ele.
Estrutura da Integração (JSON):
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"rgPallet": "RG987654321",
"enderecoPallet": "A01-B02-C03",
"volumes": [
{
"remessa": "123456789",
"idVolume": "123456789",
"etiquetaOp": "ABC123456789"
},
{
"remessa": "123456789",
"idVolume": "987654321",
"etiquetaOp": "XYZ987654321"
},
{
"remessa": "123456789",
"idVolume": "456789123",
"etiquetaOp": "DEF456789123"
}
]
}
Campo
Tipo
Obrigatório Exemplo
Obs
Empresa
Char
Sim
Empresa
Centro
Char
Sim
SP0
Centro
codDeposito
Char
Sim
codDeposito
IdPallet
String
Sim
PALLET001
Identificador único do pallet no WCS
RgPallet
String
Sim
RG987654321
Código lido do RG do pallet
enderecoPallet
String
Sim
A01-B02-C03
Endereço físico do pallet informado pelo
operador
Volumes
Array
Sim
—
Lista de volumes alocados no pallet
IdVolume
String
Sim
123456
Identificador único do volume
etiquetaOp
String
Sim
Etiqueta001
Etiqueta que será lida no Sorter

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Integração de Endereços  
**Score:** — (json-no-corpo) | **ID:** d02b3139bb7ce210

O WCS disponibilizará uma integração para recebimento de novos endereços após a
implantação, permitindo o cadastro e mapeamento automático das posições no layout
operacional.
Os endereços recebidos serão classificados por tipo, vinculados ao centro e depósito
correspondentes e imediatamente disponibilizados para uso operacional, sem
necessidade de parametrização manual.
Estrutura da Integração (JSON):
{
"empresa": "0001",
"centro": "0202",
"codDeposito": "1103",
"enderecos": [
{
"endereco": "14.009.101",
"tipo": "picking",
"codTipoDeposito": "0001",
"corredor": "14",
"coluna": "009",
"nivel": 1,
"subnivel": 1
},
{
"endereco": "02.005",
"tipo": "drive-in",
"codTipoDeposito": "0004",
"corredor": "02",
"coluna": "005",
"nivel": null,
"subnivel": null
},
{
"endereco": "13.002.1",
"tipo": "estoque",
"codTipoDeposito": "0002",
"corredor": "13",
"coluna": "002",
"nivel": 1,
"subnivel": null
},
{
"endereco": "13.002.106",
"tipo": "flowrack",
"codTipoDeposito": "0005",
"corredor": "13",
"coluna": "002",
"nivel": 1,
"subnivel": 6
}
]
Campo
Descrição
Tipo
Obrigatório
Tamanho
empresa
Código da empresa requisitante
Char
Sim
centro
Código do centro de distribuição
Char
Sim
codDeposito
Código do depósito
Char
Sim
enderecos
Lista de endereços a serem cadastrados
Array
Sim
-
endereco
Código lógico completo do endereço
Char
Sim
tipo
Tipo do endereço (picking, estoque, flowrack,
drive-in, etc.)
Char
Sim
codTipoDeposito
Código do tipo de depósito
Char
Sim
corredor
Código do corredor
Char
Sim
coluna
Código da coluna
Char
Sim
nivel
Nível do endereço
Num
Não
subnivel
Subnível do endereço
Num
Não

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Conclusão e Integração  
**Score:** — (sinal-integracao-forte) | **ID:** a3f3d94f8646ea5b

O WCS somente enviará a integração de reabastecimento concluído quando
todos os volumes full case da tarefa recebida do WMS para aquele item/SKU
tiverem sido alocados na posição final, ou seja, quando todas as bins de todos os
volumes full case associados à tarefa de reabastecimento do WMS para o respectivo
item estiverem alocadas na posição final.
Enquanto houver volumes full case pendentes de execução (decanting e/ou alocação
de bins) para uma determinada tarefa de reabastecimento do WMS, o WCS manterá a
tarefa em status “em andamento”, sem enviar a integração ao WMS.
A integração de retorno de reabastecimento segue o modelo descrito no tópico 6.5
(Retorno Reabastecimento), garantindo a atualização do saldo e a rastreabilidade do
processo no WMS.
Regra de Integração: A integração de reabastecimento concluído (WCS → EWM/SAP) só é
disparada quando todos os volumes full case da tarefa recebida do WMS para aquele
item/SKU tiverem sido completamente executados (decanting + alocação de todas as bins) e
estiverem na posição final. Isso garante que o WMS receba a confirmação completa do
reabastecimento, evitando atualizações parciais de saldo.
Resumo do Fluxo de Reabastecimento
O fluxo completo de reabastecimento, desde a chegada do volume na área de reabastecimento
até a integração com o WMS, segue a seguinte sequência:
Decanting: Bipa caixa full case → Informa quantidade de bins → Bipa cada bin →
Transfere itens da caixa para as bins.
Abastecimento do Picking Cart: Bipa código do picking cart → Bipa posição do cart
→ Bipa bin → Repete até carregar o carrinho conforme necessidade.
Execução do Picking Cart: Bipa código do picking cart → WCS indica endereço →
Bipa endereço → WCS indica posição do cart → Bipa bin → WCS avalia elegíveis →
Próximo endereço.
Integração: WCS envia retorno de reabastecimento ao WMS somente quando todos
os volumes full case da tarefa do WMS para aquele item/SKU estiverem na posição
final.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Etiqueta Picking Fracionado  
**Score:** — (semantico) | **ID:** f1c7d97c2f5bfd69

Essa etiqueta será utilizada no processo de picking fracionado. O QR Code impresso conterá
informações relevantes para a operação, originadas a partir dos dados recebidos via integração.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Etiqueta Picking Full Case  
**Score:** — (semantico) | **ID:** 473c746a193f73ff

Essa etiqueta será utilizada no processo de separação Full Case. O QR Code (Superior Direito)
impresso conterá as informações necessárias para identificação e rastreabilidade da caixa, com
dados provenientes da integração.
Exemplo de valores que vão conter no QR code:
O QR Code (Superior Direito) presente na etiqueta será composto pela concatenação de
diferentes informações operacionais, formando um único código utilizado para identificação,
rastreabilidade e validação dos volumes, o QR Code aceita apenas como elemento separador os
caracteres - ou / os demais caracteres especiais não podem ser utilizados. A quantidade total
de caracteres deverá estar entre 10 e 40 dígitos.
Modelos de composição de código que podem ser utilizados:
Modelo 1:
0651728-126-89723837000849-0620-0001
0651728 - NF
126 - Série
89723837000849 - CNPJ
0620 - TotalVol
0001 - Vol
0001 - Vol
0620 - TotalVol
O campo nota fiscal, sempre será preenchido com o numero da remessa, pois no momento da
integração não temos essa informação.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 4. Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 80416532169c459f

Para o correto funcionamento de todo o processo da automação o WCS irá enviar e receber dados
do WMS através de API Rest com envio de JSON, os Endpoints deverão ser passados tanto do
time WMS quanto do time Invent antes de iniciar o período de Teste de integração informado no
cronograma disponibilizado pelo time Invent aos times envolvidos (Zaffari e WMS), assim como
as informações pertinentes a todos os detalhes das APIs como por exemplos autenticadores.
Todas as integrações partirão da Invent, sendo “GET” para integrações onde receberemos dados
do WMS e “POST” para as integrações que enviaremos dados.
O Tempo de busca das integrações GET será inicialmente de 5 min para as integrações:
“4.1. Produtivo” e “4.2. Lojas”.
E 1 min para as integrações:
“4.3. Etiquetas”,” 4.4. Produtos das Etiquetas” e “4.5. Cadastro de Produtos”.
Esse tempo pode ser calibrado futuramente de acordo com a necessidade.
Todas as informações das integrações como estrutura, tipo de dados, quantidade de caracteres
devem respeitar as definições descritas abaixo.
Segue as integrações abaixo:

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 4.1.  Produtivo  
**Score:** — (json-no-corpo) | **ID:** 9db39d0878187d73

(GET) WCS→ WMS
A integração de "Produtivo" será utilizada para alimentar o sistema WCS com informações sobre
os operadores, incluindo detalhes como código do produtivo, nome do operador, código RH, entre
outros dados descritos na tabela abaixo. Com essas informações, o WCS identificará qual usuário
operará cada rampa e aplicará o processo de “Login na Rampa”.
Exemplo de JSON:
{
"Codprodutivo": 123456,
"Produtivo": "Pedro Dias",
"CodRH": 525879,
"Nroempresa": 123456,
"Dtahoraalteracao": "25-11-2025",
"Status": "1",
"INDPROCESSADO": "S",
"INDOPERACAO": "I"
}
Segue abaixo tabela com as informações de descrição, tipo do dado, tamanho (quantidade de
caracteres):
NOME
TIPO
ACEITA
NULO
Comentários
Codprodutivo
INTEGER
Não
Código do produtivo
Produtivo
VARCHAR2(40)
Não
Nome do produtivo
CodRH
INTEGER
Sim
Código do RH
Nroempresa
NUMBER(6)
Não
Número da empresa
Dtahoraalteração
DATE
Não
Data/Hora alteração
Status
STATUS
Não
Status produtivo 0 inativo 1 ativo
INDPROCESSADO
VARCHAR2(1)
Não
Estaremos sempre gravando 'N'. Deverá ser alterado para
'S' através de um POST ao ser processado pela API do
Cliente.
INDOPERACAO
VARCHAR(1)
Não
Controla os Insert(I) e Delete(D) realizados no cadastro.
Insert para novos cadastros e Delete para
inativação/exclusão de cadastros

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 4.2. Lojas  
**Score:** — (json-no-corpo) | **ID:** a4e9398983c13884

(GET) WCS→ WMS
A integração de Lojas será utilizada para alimentar o sistema WCS com informações referentes
aos destinos (LOJAS). Com essas informações será possível montar o mapa de Sorter. Onde
atribuiremos a loja a uma rampa do sorter ou posição de PTL.
Exemplo de JSON:
{
"Tipespecie": 123456,
"Nroempresa": 654321,
"Descespecie": "Loja 01",
"Indbraco": 2,
"Indposicaoareabraco": 123,
"dtahoraalteracao": "21/09/2025 18:00:00",
"Indoperacao": "I",
"Indprocessado": "N"
}
NOME
TIPO
ACEITANULO
COMENTÁRIOS
Tipespecie
Varchar2(6)
Não
Número da Loja
Nroempresa
Number(6)
Não
Número da empresa do CD
Descespecie
Varchar2(20)
Não
Descrição da loja que o volume será enviado
Indbraco
Varchar2(5)
SIM
Código do braço (rampa de saída) onde a loja estará
vinculada
Indposicaoareabraco
INTEGER
SIM
Indicará a posição da loja no braço (rampa de saída)
dtahoraalteracao
Datetime
Não
Data e Hora de Inserção ou Atualização das informações
Indoperacao
Varchar(1)
Não
Controla os Insert(I) e Delete(D) realizados na tabela. Caso
haja necessidade de 'Deletar' alguma etiqueta, deverá
considerar apenas as etiquetas com o valor 'I'
Indprocessado
Varchar2(1)
Não
Estaremos sempre gravando 'N'. Deverá ser alterado para 'S'
quando o Software do Sorter receber a informação

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 4.3. Etiquetas  
**Score:** — (json-no-corpo) | **ID:** 0fca9af27394aad4

(GET) WCS→ WMS
A integração de Etiquetas tem como objetivo informar o sistema WCS sobre os pallets que foram
coletados e estão prontos para serem tratados no sorter. Esses pallets, que já passaram pela
triagem e estão prontos para movimentação, são enviados ao WCS antes da indução no sorter.
O WMS fornece ao WCS as informações detalhadas sobre cada item do pallet coletado, incluindo
o código da etiqueta, detalhes de peso e cubagem, e o DUN14/EAN13. Com esses dados, o WCS
deve aguardar esses volumes nas rampas do sorter e posições de PTL.
Exemplo de JSON:
{
"codbarraetq": "12345678901234567890123456789012345678901234567890",
"indbraco": "T30621",
"tipespecie": "123456",
"nrocarga": 987654,
"Seqlote": 1234,
"tipocarga": "E",
"nroempresa": 654321,
"Coddepossepar": "12",
"dtahoralteracao": "21/09/2025 18:00:00",
"etiquetaorigem": 543210,
"seqproduto": 789012,
"Descprod": "ABCDE",
"Embalagem": "AB",
"CodEan13": "7891234567898",
"CodDum14": "17898357410012",
"INDPROCESSADO": "S",
"INDOPERACAO": "I"
}
NOME
TIPO
ACEITANULO
COMENTÁRIO
codbarraetq
VARCHAR2(50)
Não
Código único para cada uma das etiquetas
indbraco
VARCHAR2(5)
Não
Código do braço (rampa de saída) onde a loja será
vinculada – velox ignorará levará em conta o mapa
tipespecie
VARCHAR2(6)
Não
Número da loja
nrocarga
NUMBER
Não
Número da carga (recebimento ou expedição) referente a
etiqueta
Seqlote
NUMBER (4)
Não
Número do Lote
Tipocarga
VARCHAR2(1)
Não
Tipo da carga (R: Recebimento, E: Expedição)
Nroempresa
NUMBER
Não
Número da empresa
Coddepossepar
VARCHAR2(2)
Não
Código do depósito
dtahoralteracao
DATE
Não
Data hora da inserção e alteração das informações
etiquetaorigem
NUMBER
Não
Número da etiqueta de origem do recebimento ou
expedição
Seqproduto
INTEGER
Não
Código do produto da etiqueta
Descprod
VARCHAR (50)
Não
Descrição Completa produto
embalagem
NUMBER
Não
Tipo de Embalagem
CodEan13
VARCHAR (60)
Não
Código EAN
CodDum14
VARCHAR (50)
Não
Código DUM
codlinhasepar
VARCHAR2(2)
Não
Código da linha de separação do produto
OBS: O campo "codbarraetq" deve ser enviado no payload "4.5 - Pallet Montado", conforme
a loja para a qual o volume foi desviado. Este código único é fundamental para identificar de
forma exclusiva a etiqueta associada ao volume, permitindo o correto rastreamento e
movimentação do volume nos próximos passos executados pelo WMS.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 4.4. Produtos das Etiquetas  
**Score:** — (json-no-corpo) | **ID:** 2945f48c49fd01c6

(GET) WCS→ WMS
A integração de Produtos das Etiquetas tem como objetivo informar o sistema WCS sobre os
detalhes de cada produto que foi enviado nas integrações de etiquetas. O WMS fornece ao WCS
as informações detalhadas sobre cada produto coletado, incluindo o código do produto, descrição,
entre outros dados descritos na tabela abaixo.
Exemplo do JSON:
{
"Seqproduto": 123456,
"Nroempresa": 654321,
"Desccompleta": "Produto Exemplo Completo",
"Tiparmazenagem": "Categoria A",
"Pesobruto": 14.4,
"Metroscubicos": 0.000035,
"Pesavel": "S",
"Dtahorageração/alteração": "2025-10-25T14:30:00",
}
NOME
TIPO
ACEITANULO
COMENTÁRIOS
Seqproduto
INTEGER
Não
Código do Produto (Sequencial - Conforme Cadastro do
WMS)
Nroempresa
NUMBER(6)
Não
Número da Empresa do Centro de Distribuição
Desccompleta
VARCHAR2(111)
Sim
Descrição Completa do Produto
Tiparmazenagem
VARCHAR2(5)
Sim
Categoria do Produto (Conforme Cadastro de
Armazenagem do WMS)
Pesobruto
NUMBER(7,3)
Sim
Peso bruto da embalagem, será considerado 3 dígitos
decimais separado por '.' ponto (ex: 14.400)
Metroscubicos
NUMBER(9,6)
Sim
Metragem cúbica da embalagem será considerada 6
dígitos decimais separado por '.' ponto (ex: 0.000035)
Pesavel
VARCHAR2(1)
Sim
Informação se o produto é pesável (S - Sim; N - Não)
Dtahorageração/alteração
Datetime
Não
Data e Hora de inserção ou Atualização das informações
Obs: Tipo armazenagem deve informar o tipo do produto (alimentício / não alimentício)

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 4.5. Cadastro de Produtos  
**Score:** — (json-no-corpo) | **ID:** ee5e6a7f1b8d5a11

(GET) WCS→ WMS
A integração de Cadastro de Produtos tem como objetivo informar o sistema WCS sobre os
detalhes de cada produto que foi alterado ou criado, e também no envio nas integrações de
etiquetas, o WCS deve realizar um get para verificar se teve um novo P. O WMS fornece ao WCS
as informações detalhadas sobre cada produto coletado, incluindo o código do produto, descrição,
entre outros dados descritos na tabela abaixo.
Exemplo do JSON:
{
"nroempresa": 123456,
"seqproduto": 789,
"tipcodigo": "E",
"qtdembalagem": 10.0,
"codacesso": 12345678901234,
"indprocessado": "N",
"indoperacao": "I"
}
NOME
TIPO
ACEITANULO
COMENTÁRIOS
Nroempresa
NUMBER(6)
Não
Número da Empresa do Centro de Distribuição.
Seqproduto
INTEGER
Não
Código do Produto (Sequencial - Conforme Cadastro do
WMS).
Tipcodigo
VARCHAR2(1)
Não
Tipo de código E: EAN D: DUM.
Qtdembalagem
NUMBER(12,6)
Não
Quantidade unid. por Embalagem (exemplo: CX10 = 10,0).
Codacesso
NUMBER(14)
Não
Código de acesso ao produto.
INDPROCESSADO
VARCHAR2(1)
Não
Estaremos sempre gravando 'N'. Deverá ser alterado para 'S'
através de um POST ao ser processado pela API do Cliente.
INDOPERACAO
VARCHAR(1)
Não
Controla os Insert (I) e Delete (D) realizados no cadastro.
Insert para novos cadastros e Delete para
inativação/exclusão de cadastros.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 4.6. Matriz de Fragilidade  
**Score:** — (json-no-corpo) | **ID:** 1cca198eb8c50355

(POST) Zaffari → WCS
A integração de Matriz de Fragilidade tem como objetivo informar o sistema WCS sobre a
categoria de fragilidade de cada produto que foi alterado ou criado.
Exemplo do JSON:
{
"Seqproduto": 123456,
"codMatriz": 654321,
"descMatriz": "Produto Exemplo Completo",
"tipoEmbalagem": "Caixa",
"qtdembalagem": 10.0,
"dtahoralteracao": "21/09/2025 18:00:00"
}
NOME
TIPO
ACEITANULO
COMENTÁRIOS
Seqproduto
INTEGER
Não
Código do Produto
codMatriz
VARCHAR
Não
Identificador Matriz de Fragilidade
descMatriz
VARCHAR
Não
Descrição da Matriz de Fragilidade
tipoEmbalagem
VARCHAR
Não
Tipo da embalagem do produto
Qtdembalagem
NUMBER(12,6)
Não
Quantidade unid. por Embalagem (exemplo: CX10 = 10,0).
dtahoralteracao
DATE
Não
Data hora da inserção e alteração das informações
OBS: caso seja identificado no momento dos testes de integração pode ser
adicionados mais atributos ao payload.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 4.7. Pallet Montado  
**Score:** — (json-no-corpo) | **ID:** 3b656e709f21dd24

WCS → WMS (POST)
A integração de Pallet Montado tem como objetivo informar o sistema WMS sobre os detalhes
de cada volume que foi tratado nos processos de Sorter e PTL. O WCS fornece ao WMS as
informações detalhadas sobre cada volume alocado no pallet. E os pallets fechados no processo
de Ocorrências.
Exemplo do JSON:
{
"Seqpaletecarreg": 987654,
"codbarraetq": "12345678901234567890123456789012345678901234567890",
"nroempresa": 654321,
"tipespecie": "123456",
"codprodutivo": 112233,
"dtahorinimont": "2025-09-21T08:00:00",
"dtahorfinalmont": "2025-09-21T18:00:00",
"dtahoralteracao": "21/09/2025 18:00:00",
"Indoperacao": "I",
"Indprocessado": "X"
}
NOME
TIPO
ACEITANULO
COMENTÁRIOS
Seqpaletecarreg
NUMBER
Não
Código da etiqueta Master
codbarraetq
VARCHAR2(50)
Não
Código único para cada uma das etiquetas
nroempresa
NUMBER
Não
Número da empresa
tipespecie
VARCHAR2(6)
Não
Número da loja
codprodutivo
INTEGER
Não
Código do produtivo que montou o palete
dtahorinimont
DATE
Não
Data/Hora do Início da Montagem de Palete
dtahorfinalmont
DATE
Não
Data/Hora do Final da Montagem de Palete
dtahoralteracao
DATE
Não
Data hora da inserção e alteração das informações
Indoperacao
VARCHAR(1)
Não
Controla os Insert(I) e Delete(D) realizados na tabela
Indprocessado
VARCHAR2(1)
Não
Na inserção das linhas referentes a etiqueta master
(SEQPALETECARREG)
OBS: O campo "codbarraetq" deve ser enviado nesse payload, conforme a loja para a qual o
volume foi desviado e o código recebido na integração 4.3 Etiquetas. Este código único é
fundamental para identificar de forma exclusiva a etiqueta associada ao volume, permitindo o
correto rastreamento e movimentação do volume nos próximos passos executados pelo WMS.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.3. Agrupamento de volumes  
**Score:** — (semantico) | **ID:** 123186a6bb8616be

Existem volumes que precisam ser agrupados antes da indução. Esses volumes serão enviados
na integração padrão, mas o WCS deve identificar que esses volumes precisam ser agrupados
por meio do campo "codlinhasepar" na integração de Etiquetas.
•
Tela de Cadastro: O WCS deve disponibilizar uma tela onde será possível cadastrar os
códigos de linha de separação que passarão pelo processo de agrupamento. O
sistema deve permitir o cadastro de múltiplos códigos de linha de separação, de acordo
com a necessidade operacional.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.4. Conferência de Pallets  
**Score:** — (semantico) | **ID:** 79f7f0c31d54e08a

Existem pallets que podem ser reconferidos antes da indução. Esses pallets serão enviados na
integração padrão, mas o WCS deve identificar que esses pallets precisam ser reconferidos por
meio do campo "codlinhasepar" na integração de Etiquetas.
• Tela de Cadastro: O WCS deve disponibilizar uma tela onde será possível cadastrar
os códigos de linha de separação que passarão pelo processo de reconferência. O
sistema deve permitir o cadastro de múltiplos códigos de linha de separação, de acordo
com a necessidade operacional.
O WCS só irá realizar a reconferência de pallets que sejam provenientes das linhas de
separação previamente cadastradas. Caso a operação deseje parar de reconferir os
pallets dessas linhas o registro da linha deve ser inativado.

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 81442ba1324719d7

Cada integração entre os sistemas mencionados (WMS Cliente e WCS Invent) pode ser configurada para seguir as regras de negócios da Britânia. Elas podem variar de acordo com as necessidades e particularidades de cada operação.
Ao projetar e implementar uma integração, é importante considerar os seguintes aspectos:
Configuração de parâmetros: Os parâmetros de integração devem ser definidos de acordo com as regras de negócio. Isso pode envolver a definição de campos, formatos de dados, validações, mapeamentos e outras configurações relevantes.
Flexibilidade em formatos de dados: Os formatos de dados utilizados na integração devem ser adaptáveis para acomodar as necessidades específicas da operação.
Mapeamento e transformação de dados: A integração deve permitir a definição de regras de mapeamento e transformação de dados, a fim de adaptar as informações enviadas de um sistema para outro. Isso pode envolver a conversão de formatos, reestruturação de dados ou a aplicação de cálculos ou lógica específicos.
Tratamento de exceções: As regras de negócio podem determinar ações específicas para situações excepcionais. A integração deve ser capaz de lidar com essas exceções, como erros de validação, discrepâncias de dados ou ações específicas para determinados cenários.
Portanto, é essencial que a integração seja flexível e configurável para atender às regras de negócio específicas da Britânia. Isso permitirá que a integração WCS se adapte às necessidades particulares da organização e facilitará a implementação da solução.
A integração a ser trocada entre os sistemas WCS e WMS Britânia será realizada via REST JSON baseado em pedidos. As integrações disponibilizadas pelo WMS Britânia utilizarão o padrão de autenticação OAuth 2.0. O WCS deverá realizar as requisições respeitando esse modelo de autenticação para acesso aos endpoints disponibilizados pelo WMS.
Segue as integrações necessárias para o correto funcionamento da automação:

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Integração de Volumes (WMS → WCS)  
**Score:** — (json-no-corpo) | **ID:** fb0fb84f4723858f

O WMS envia informações sobre cada volume para o WCS, permitindo que o WCS determine a rampa correta para desvio, de acordo com o mapa de sorter configurado.
Estrutura da Integração (JSON):
{
"idVolume": "000001234",
"etiquetaOp": "000056487",
"uom": "CX",
"sku": "179145678953",
"codRota": "011",
"codTransportadora": "10",
"nomeTransportadora": "Transportadora_X",
"orderkey": "0000000195",
"chavenota": "123456789123465",
"numserie": "1564789644122",
"numnota": "5687",
"orderlinenumber": "00001",
"lot": "00000000021",
"locfrom": "STAGE2"
}
Campo | Tipo | Obrigatório | Exemplo | Obs
idVolume | String | Sim | 000001234 | Identificador único do volume
etiquetaOp | String | Sim | ABC123456789 | Etiqueta real do volume para leitura no sorter
uom | String | Sim | CX | Código de unidade
sku | String | Sim | 179145678953 | Código identificador do produto (Utilizado no crosscheck) considerar “0” a esquerda. Caso este campo seja enviado vazio (string vazia “ ”) ou como null, o sistema deve entender que não deve realizar o crosscheck para este volume. Ambos os cenários (string vazia ou null) devem desconsiderar o crosscheck.
codRota | String | Sim | 011 | Código da Rota do volume
codTransportadora | String | Sim | 10 | Código da transportadora do volume
nomeTransportadora | String | Sim | Transportadora X | Nome da transportadora do volume
orderkey | String | Sim | 0000000195 | Número do pedido
chavenota | String | Sim | 123456789123465 | Chave da nota
numserie | String | Sim | 1564789644122 | Número de Serie
numnota | String | Sim | 5687 | Número da nota fiscal
orderlinenumber | String | Sim | 00001 | Número da linha do item na ordem
lot | String | Sim | 0000000021 | Lote interno WMS
locfrom | String | Sim | STAGE2 | Local
Obs: Na integração, o campo “SKU” pode ser recebido em formatos diferentes: Cada formato possui uma quantidade específica de caracteres. Exemplo de formatos:
PC (Peça) – 11 caracteres
Exemplo: 103101017PC
CX + Fator (Caixa Fechada) – 13 caracteres
Exemplo: 103101017CX04
CXA (Caixa aberta) – 12 caracteres
Exemplo: 103101017CXA
OUT (Outlet) – 12 caracteres
Exemplo: 103101017OUT
SLD (Saldão) – 12 caracteres
Exemplo: 103101017SLD

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Desvio no Sorter (WCS → WMS)  
**Score:** — (json-no-corpo) | **ID:** 8dadfcb04de29c57

O WCS deverá enviar ao WMS a confirmação de que o volume foi processado no Sorter e desviado fisicamente para a rampa de destino configurada no Mapa de Sorter ativo, garantindo rastreabilidade e atualização operacional em tempo real.
O envio da integração ocorrerá somente após a confirmação efetiva do desvio físico do volume.
Validação de disparo da integração:
Volume lido com sucesso pelo portal (Read).
Volume validado (SKU, rota, transportadora e etiqueta).
Volume desviado corretamente para a rampa configurada no mapa de sorter ativo.
Estrutura da Integração (JSON):
{
"idVolume": "123456789",
"etiquetaOp": "ABC123456789",
"pa": "sim",
"rampaDestino": "R05",
"dataHoraDesvio": "2026-02-26T14:35:22",
"orderkey": "0000000195",
"chavenota": "123456789123465",
"numserie": "1564789644122",
"numnota": "5687",
"orderlinenumber": "00001",
"lot": "00000000021",
"locfrom": "STAGE2"
}
Campo | Tipo | Obrigatório | Exemplo | Obs
idVolume | String | Sim | 123456 | Identificador único do volume
etiquetaOp | String | Sim | Etiqueta001 | Etiqueta que será lida no Sorter
pa | String | Sim | Sim | Posto Avançado (Informado na criação do mapa sorter)
rampaDestino | String | Sim | R05 | Código da rampa conforme mapa ativo
dataHoraDesvio | DateTime | Sim | 2026-02-26T14:35:22 | Data e hora do evento
orderkey | String | Sim | 0000000195 | Número do pedido
chavenota | String | Sim | 123456789123465 | Chave da nota
numserie | String | Sim | 1564789644122 | Número de Serie
numnota | String | Sim | 5687 | Número da nota fiscal
orderlinenumber | String | Sim | 00001 | Número da linha do item na ordem
lot | String | Sim | 0000000021 | Lote interno WMS
locfrom | String | Sim | STAGE2 | Local

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Desvio de Volume  
**Score:** — (sinal-integracao-forte) | **ID:** f5ca1a7f42926a1a

Após a leitura e identificação do volume no Sorter, o WCS (Warehouse Control System) será responsável por conduzir o fluxo operacional até o encerramento da etapa de desvio físico para a respectiva rampa de expedição.
O processo ocorrerá conforme as etapas abaixo:
Processamento do volume no Sorter
O volume será identificado por meio de leitura automática da etiqueta previamente cadastrada e impressa pelo cliente. O WCS validará as informações recebidas, garantindo que o volume esteja apto para roteirização conforme as regras configuradas.
Definição e execução do desvio conforme Mapa de Sorter
Com base no Mapa de Sorter previamente parametrizado, o WCS determinará a rampa de destino correspondente com base no campo codRota na integração de 6.1 Integração de Volumes.
O sistema enviará o comando de desvio ao equipamento, direcionando fisicamente o volume para a rampa correta.
Registro do desvio no WCS
Após a confirmação do desvio, o WCS registrará o evento contendo, no mínimo:
Identificação do volume
Data e hora do desvio
Rampa de destino
Status da operação
Esse registro garante rastreabilidade operacional dentro do escopo do WCS.
Envio imediato de integração ao WMS (conforme item 6.2)
Concluído o desvio físico, o WCS enviará de forma imediata a integração ao WMS informando que o volume foi direcionado para a respectiva rampa.
A responsabilidade pela atualização de estoque, status logístico e demais controles sistêmicos passa a ser do WMS a partir desse momento.
Encerramento do fluxo no WCS
Após o envio da integração, o fluxo do volume será considerado finalizado no WCS.
Não haverá no WCS:
Processo de paletização
Geração de RG
Agrupamento de volumes
Consolidação adicional
Retirada dos volumes pela transportadora
Os volumes permanecerão fisicamente nas rampas até que sejam retirados pela transportadora responsável.
A gestão dessa etapa (controle de carregamento, vinculação a romaneio, baixa de estoque etc.) será tratada exclusivamente pelo WMS.
Paletização e Rastreamento
A paletização será realizada através de coletor Android integrado diretamente ao WMS.
O processo ocorrerá fora do escopo do WCS, sendo que:
A associação de volumes a pallets
A rastreabilidade de estoque
O controle de expedição
A consolidação logística
Serão integralmente gerenciados pelo WMS.
Dessa forma, o WCS atua exclusivamente até a etapa de desvio físico no Sorter, enquanto toda a governança de estoque e expedição permanece sob responsabilidade do WMS.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Obter Token de Acesso  
**Score:** — (json-no-corpo) | **ID:** 022caeb11e2bc8cc

Endpoint: POST /integracao/api/prod/autenticacao
Envie suas credenciais usando Basic Authentication para receber um token de acesso.
Headers Obrigatórios
- Content-Type: application/json
- Authorization: Basic <suas_credenciais_em_base64>
Como Criar o Header Authorization
1. Combine seu usuário e senha: usuario:senha
2. Codifique em Base64: dXN1YXJpbzpzZW5oYQ==
3. Adicione Basic antes: Basic dXN1YXJpbzpzZW5oYQ==
Resposta de Sucesso
{
"mensagem": "Autenticação realizada com sucesso.", "token":
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Exemplos Práticos  
**Score:** — (semantico) | **ID:** 4cad31aff83c86da

JavaScript
const credenciais = btoa('meuusuario:minhasenha');
const response = await fetch('/integracao/api/hml/autenticacao',
{method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Basic ${credenciais}`
}
});
const data = await response.json();
const token = data.token;
// 2. Usar token nas outras requisições
//
const apiResponse = await fetch('/integracao/api/hml/outros-endpoints', {
method: 'GET',
headers: {
'Authorization': `Bearer ${token}`
}
});
cURL
# 1. Obter token
curl -X POST "/integracao/api/hml/autenticacao" \
-H "Content-Type: application/json" \
-H "Authorization: Basic bWV1dXN1YXJpbzptaW5oYXNlbmhh"
# 2. Usar token
curl -X GET "/integracao/api/hml/outros-endpoints" \
-H "Authorization: Bearer <seu_token_aqui>"
Python
import requests
import base64
# 1. Autenticar
credenciais = base64.b64encode(b'meuusuario:minhasenha').decode()
response = requests.post('/integracao/api/hml/autenticacao', headers={
'Content-Type': 'application/json',
'Authorization': f'Basic {credenciais}'
})
token = response.json()['token']
# 2. Usar token
api_response = requests.get('/integracao/api/hml/outros-endpoints', headers={
'Authorization': f'Bearer {token}'
})

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 7d62f1a0a4ac2168

Para o correto funcionamento do processo de automação, o WCS realizará a troca de informações com o WMS por meio de APIs REST, utilizando o padrão de comunicação em JSON.
Os endpoints deverão ser disponibilizados tanto pelo time de WMS quanto pelo time da Invent antes do início do período de Testes de Integração, conforme cronograma previamente compartilhado pela Invent com os times envolvidos (Tottus e WMS).
Também deverão ser fornecidas todas as informações técnicas necessárias para consumo das APIs, incluindo, mas não se limitando a: métodos de autenticação, tokens, headers obrigatórios, certificados (quando aplicável), padrões de retorno e códigos de status.
Todas as informações referentes às integrações incluindo estrutura dos payloads, tipos de dados, obrigatoriedade dos campos e tamanho máximo de caracteres deverão seguir rigorosamente as definições descritas neste documento.
Para o projeto em questão, serão necessárias as seguintes integrações para garantir o correto funcionamento da automação, conforme detalhado a seguir:

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Produtivo (Funcionários)  
**Score:** — (json-no-corpo) | **ID:** ea1dc13ac68e5c1a

(POST) WMS  WCS
A integração de "Produtivo" será utilizada para alimentar o sistema WCS com informações sobre os operadores como contingência, incluindo detalhes como código do produtivo, nome do operador, código RH, entre outros dados descritos na tabela abaixo. Com essas informações, o WCS identificará qual usuário operará cada rampa e aplicará o processo de “Login na Rampa”. Na tela de configuração conseguimos definir informações como expiração de senha, mínimo de caracteres se pode possuir caracteres especiais etc.
Exemplo de JSON:
{
"Codprodutivo": 123456,
"Produtivo": "João Silva",
"CodRH": 525879,
"Nroempresa": 123456,
"Status": "1"
}
Segue abaixo tabela com as informações de descrição, tipo do dado, tamanho (quantidade de caracteres):
NOME | TIPO | ACEITA NULO | Comentários
Codprodutivo | INTEGER | Não | Código do produtivo
Produtivo | VARCHAR2(40) | Não | Nome do produtivo
CodRH | INTEGER | Sim | Código do RH
Nroempresa | INTEGER | Não | Número da empresa
Status | VARCHAR2(1) | Não | Status produtivo 0 inativo 1 ativo

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Lojas  
**Score:** — (json-no-corpo) | **ID:** 4148e173b5cfb58a

(POST) WMS  WCS
A integração de Lojas será utilizada para alimentar o sistema WCS com informações referentes aos destinos (LOJAS) como contingência. Com essas informações será possível montar o mapa de Sorter. Onde atribuiremos a loja a uma rampa do sorter ou posição de PTL.
Exemplo de JSON:
{
"nroloja": "123",
"descloja": "Loja 01"
}
NOME | TIPO | ACEITANULO | COMENTÁRIOS
nroloja | VARCHAR2(6) | Não | Número da Loja
descLoja | VARCHAR2(20) | Sim | Descrição da loja de destino

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Pedidos  
**Score:** — (json-no-corpo) | **ID:** d2d006ca03b32a8b

(POST) WMS  WCS
A integração de Pedidos tem como objetivo informar o sistema WCS sobre os volumes nos pallets que foram coletados e estão prontos para serem tratados no sorter. Esses pallets, que já passaram pela triagem e estão prontos para movimentação, são enviados ao WCS antes da indução no sorter. O WMS fornece ao WCS as informações detalhadas sobre cada item do pallet coletado, incluindo o código da etiqueta e o DUN14/EAN13. Com esses dados, o WCS deve aguardar esses volumes nas rampas do sorter e posições de PTL.
Exemplo de JSON:
{
"ilpnPlt": "123",
"event_message_id": "1554551",
"volumes": [
{
"nroloja": "123",
"OrderlineitemID": "987",
"descloja": "Loja Destino Y",
"descProd": "Nome do Produto X",
"qtdCaixas": 20,
"item_name": "1234589",
"CodEan13": "7891234567898",
"CodDun14": "17898357410012",
"OrderID": "87648",
"provedor": "",
}, {
"nroloja": "897",
"OrderlineitemID": "987",
"descloja": "Loja Destino X",
"descProd": "Nome do Produto X",
"qtdCaixas": 10,
"item_name": "1234589",
"CodEan13": "7891234567898",
"CodDun14": "17898357410012"
"OrderID": "87648",
"provedor": ""
}
]
}
NOME | TIPO | ACEITANULO | COMENTÁRIO
Event_message_id | VARCHAR2(50) | Não | Id da mensagem único, o WCS ignora mensagens repetidas com o mesmo id
ilpnPlt | VARCHAR2(50) | Não | Identificado do pallet de coleta gerado pelo WMS (Cada palete terá apenas 1 SKU)
nroloja | VARCHAR2(6) | Não | Número da loja
OrderlineitemID | VARCHAR2(10) | Não | Id da linha interna do cliente
descloja | VARCHAR2(20) | Sim | Descrição da loja
qtdCaixas | NUMBER | Não | Quantidade de volumes (Caixas)
descProd | VARCHAR (50) | Sim | Descrição Completa produto
Item_name | VARCHAR2(50) | Não | ID interno do item no WMS
CodEan13 | VARCHAR (13) | Sim | EAN-13. *Ao menos EAN ou DUN.
CodDun14 | VARCHAR (14) | Sim | DUN-14. *Ao menos EAN ou DUN.
OrderID | VARCHAR2(10) | Não | Id da ordem interno do cliente
provedor | VARCHAR (20) | Sim | Nome do Provedor
OBS: O campo “ilpnPlt” deve ser enviado no payload "Pallet Montado", conforme a loja para a qual o volume foi desviado. Estes códigos únicos são fundamentais para identificar de forma exclusiva a etiqueta de pallet associada ao volume, permitindo o correto rastreamento e movimentação do volume nos próximos passos executados pelo WMS.
OBS2: Volumes cujo produto não está cadastrado no momento da indução, o WCS irá rejeitar como “Sem Rota”

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Cadastro de Produtos  
**Score:** — (json-no-corpo) | **ID:** 758d68d7a7a5b246

(POST) WMS  WCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, código do produto, nome, quantidade etc. Operador poderá cadastrar, editar e excluir individualmente os produtos no WCS.
Exemplo do JSON:
{
"nroempresa": "123456",
"dtahoraalteracao": "2025-09-21T08:00:00",
"produtos": [
{
"item_name": "1234589",
"tipoProduto": "01",
"descProd": "Nome do Produto",
"qtdembalagem": 2,
"CodEan13": "7891234567898",
"CodDun14": "17898357410012",
"codMatriz": "1",
"tipoEmbalagem": "Fardo",
"pesoBruto": 14.4,
"metrosCubicos": 0.000035
},
{
"item_name": "1234589",
"tipoProduto": "02",
"descProd": "Nome do Produto",
"CodEan13": "7891234567243",
"CodDun14": "17898357410749",
"qtdembalagem": 10,
"codMatriz": "2",
"tipoEmbalagem": "Caixa",
"pesoBruto": 14.4,
"metrosCubicos": 0.000035
}
]
}
NOME | TIPO | ACEITANULO | COMENTÁRIOS
Item_name | VARCHAR2(50) | Não | ID interno do item no WMS
nroempresa | VARCHAR2(6) | Não | Número da empresa
dtahoraalteracao | DATETIME | Não | Data hora da inserção e alteração das informações
tipoProduto | VARCHAR2(2) | Não | 01 alimento 02 não alimento
descProd | VARCHAR2(50) | Sim | Descrição do Produto
Qtembalagem | NUMBER | Sim | Quantidade unid. por Embalagem
CodEan13 | VARCHAR (13) | Sim | Código EAN (É obrigatório mandar pelo menos um EAN ou DUN)
CodDun14 | VARCHAR (14) | Sim | Código DUN (É obrigatório mandar pelo menos um EAN ou DUN)
CodMatriz | VARCHAR2(2) | Não | Identificador Matriz de Fragilidade (1 Base, 2 Meio, 3 Topo)
tipoEmbalagem | VARCHAR2(50) | Não | Tipo da Embalagem (Caixa/Fardo)
pesoBruto | NUMBER | Não | Peso Bruto do Volume
metrosCubicos | NUMBER | Não | Metros Cúbicos do Volume

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Caixa a Caixa  
**Score:** — (json-no-corpo) | **ID:** 99abda1e87efbfdc

WCS  WMS (POST)
A integração de Caixa a Caixa tem como objetivo informar o sistema WMS sobre cada volume alocado no PTL. O WCS irá informar ao WMS assim que o volume for alocado e confirmado no PTL enviando informações detalhadas dos volumes
Exemplo do JSON:
{
"ilpnPlt": "987654321",
"olpnPltSaida": "98765415678",
"nroLoja": "123",
"codprodutivo": 112233,
"orderlineitemID": "987",
"item_name": "112233",
"OrderID": "112233",
"CodEan13": "7891234567898",
"CodDun14": "17898357410012",
"posicaoPtl": "PTL-01",
"provedor": "",
"dtahorfinal": "2025-09-21T10:15:32"
}
NOME | TIPO | ACEITANULO | COMENTÁRIOS
ilpnPlt | VARCHAR2(50) | Não | Identificado do pallet de coleta gerado pelo WMS
olpnPltSaida | VARCHAR2(18) | Não | Código da etiqueta Master
nroLoja | VARCHAR2(6) | Não | Número da loja
codprodutivo | INTEGER | Não | Código do produtivo (Usuário) que montou o palete
OrderlineitemID | VARCHAR2(10) | Não | ID da linha interna do cliente
Item_name | VARCHAR2(50) | Não | ID interno de itens no WMS
OrderID | VARCHAR2(10) | Não | Identificação Interna do pedido do cliente
CodEan13 | VARCHAR (13) | Sim | Código EAN (É obrigatório mandar pelo menos um EAN ou DUN)
CodDun14 | VARCHAR (14) | Sim | Código DUN (É obrigatório mandar pelo menos um EAN ou DUN)
posicaoPtl | VARCHAR2(6) | Não | Nome da posição cadastrada no mapa sorter
provedor | VARCHAR (20) | Sim | Nome do Provedor
dtahorfinal | DATETIME | Não | Data/Hora do Final da Montagem de Palete

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Pallet Montado  
**Score:** — (json-no-corpo) | **ID:** 8d24782d4547b511

WCS  WMS (POST)
A integração de Pallet Montado tem como objetivo informar o sistema WMS sobre os detalhes de cada volume que foi tratado nos processos de Sorter e PTL. O WCS fornece ao WMS as informações detalhadas sobre cada volume alocado no pallet. E os pallets fechados no processo de Ocorrências.
Exemplo do JSON:
{
"olpnPltSaida": 98765415678,
"nroLoja": "123",
"posicaoPtl": "PTL-01",
"codprodutivo": 112233,
"totalvolPallet": 50,
"totalvolEsper": 50,
"dtahorinicial": "2025-09-21T08:00:00",
"dtahorfinal": "2025-09-21T18:00:00",
"items:" [
{
"CodEan13": "7891234567898",
"CodDun14": "17898357410012",
"ilpnPlt": 987654321,
"qtdCaixas": 25,
"orderlineitemID": "987",
"item_name": "112233",
"OrderID": "112233",
"provedor": "",
},
{
"CodEan13": "7891234567898",
"CodDun14": "17898357410012",
"ilpnPlt": 987654321,
"qtdCaixas": 25,
"orderlineitemID": "987",
"item_name": "112233",
"OrderID": "112233",
"provedor": ""
}
]
}
NOME | TIPO | ACEITANULO | COMENTÁRIOS
olpnPltSaida | VARCHAR2(50) | Não | Código da etiqueta Master
nroLoja | VARCHAR2(6) | Não | Número da loja
posicaoPtl | VARCHAR2(6) | Não | Nome da posição cadastrada no mapa sorter
codprodutivo | INTEGER | Não | Código do produtivo (Usuário) que montou o palete
totalvolPallet | NUMBER | Não | Soma total de Volumes no Palete
totalvolEsper | NUMBER | Não | Total de volumes esperados enviado na integração Pedidos
dtahorinicial | DATETIME | Não | Data/Hora do Início da Montagem de Palete
dtahorfinal | DATETIME | Não | Data/Hora do Final da Montagem de Palete
CodEan13 | VARCHAR (13) | Sim | Código EAN (É obrigatório mandar pelo menos um EAN ou DUN)
CodDun14 | VARCHAR (14) | Sim | Código DUN (É obrigatório mandar pelo menos um EAN ou DUN)
ilpnPlt | VARCHAR2(50) | Não | Identificado do pallet de coleta gerado pelo WMS
qtdCaixas | NUMBER | Não | Quantidade de volumes
OrderlineitemID | VARCHAR2(10) | Não | ID da linha interna do cliente
Item_name | VARCHAR2(50) | Não | ID interno do item no WMS
OrderID | VARCHAR2(10) | Não | Identificação Interna do pedido do cliente
provedor | VARCHAR (20) | Sim | Nome do Provedor
OBS: O campo "ilpnPlt" deve ser enviado nesse payload, conforme a loja para a qual o volume foi desviado e o código recebido na integração Pedidos. Este código único é fundamental para identificar de forma exclusiva a etiqueta associada ao volume, permitindo o correto rastreamento e movimentação do volume nos próximos passos executados pelo WMS.
Se caixas com códigos ilpnPlt diferentes forem enviadas para a mesma loja, dois objetos separados serão gerados na integração.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Cancelamento de Volumes (Ocorrências)  
**Score:** — (json-no-corpo) | **ID:** d992517ed1536b86

WCS  WMS (POST)
A integração de Cancelamento de Volume tem como objetivo informar o sistema WMS sobre o cancelamento de volumes que foram previamente tratados nos processos do WCS.
O WCS enviará ao WMS a identificação do pallet de origem através do campo ilpnPlt. Essa estrutura permite que o WMS realize as devidas tratativas como estorno, reprocessamento ou baixa de forma consolidada por lote de cancelamento.
Essa integração será acionada sempre que um ou mais volumes forem cancelados dentro do fluxo operacional do WCS, garantindo a consistência das informações entre os sistemas.
Exemplo do JSON:
{
"codprodutivo": 112233,
"dtahorcancelamento": "2025-09-21T14:32:10",
"volumes": [
{
"CodEan13": "7891234567898",
"CodDun14": "17898357410012",
"orderlineitemID": "987",
"motivo": "AVARIA",
"item_name": "112233",
"OrderID": "112233",
"ilpnPlt": 987654321,
"nroLoja": "123",
"State": "SHORTCOMPLETED",
}, {
"CodEan13": "7891234567905",
"CodDun14": "17898357410029",
"orderlineitemID": "987",
"motivo": "AVARIA",
"item_name": "112233",
"OrderID": "112233",
"ilpnPlt": 987654321,
"nroLoja": "123",
"State": "SHORTCOMPLETED"
}
]
}
NOME | TIPO | ACEITANULO | COMENTÁRIOS
codprodutivo | INTEGER | Não | Código do operador responsável pelo cancelamento
dtahorcancelamento | DATETIME | Não | Data e hora do cancelamento do volume
CodEan13 | VARCHAR(13) | Sim | Código EAN do volume (obrigatório enviar ao menos EAN ou DUN)
CodDun14 | VARCHAR(14) | Sim | Código DUN do volume (obrigatório enviar ao menos EAN ou DUN)
OrderlineitemID | VARCHAR2(10) | Não | ID da linha interna do cliente
motivo | VARCHAR2(50) | Não | Motivo do cancelamento (ex: AVARIA, EXTRAVIO, CANCELAMENTO)
Item_name | VARCHAR2(50) | Não | ID interno de itens no WMS
OrderID | VARCHAR2(10) | Não | Identificação Interna do pedido do cliente
ilpnPlt | VARCHAR2(50) | Não | Identificador do pallet de origem (ILPN PLT) gerado pelo WMS
nroLoja | VARCHAR2(6) | Não | Número da loja associada ao volume cancelado
State | VARCHAR2(14) | Não | Status enviado “SHORTCOMPLETED”.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Indução Volumes  
**Score:** — (semantico) | **ID:** 8f1ee594f6ef6b6a

A indução de volumes será gerenciada e cadenciada pela Operação. O processo começa com o WMS, que realiza o processo de separação e deixa os paletes das tarefas que foram concluídas em uma área chamada “Stage In”, nesse momento é enviado uma integração Pedidos que contém a informação ilpnPlt para cada pallet. Com essas informações, o WCS gera uma listagem orientativa de forma sequencial de indução, onde informa qual pallet deve ser induzido em cada momento, respeitando as condições de disponibilidade e matriz de fragilidade.
A partir da integração dos paletes enviada pelo WMS o WCS já deve permitir que pallets sejam consumidos e induzidos no sorter.
O WCS não monitora o processo de indução, esse processo será controlado pelo Operador, que será responsável por garantir que a indução dos volumes seja realizada de acordo com a matriz de fragilidade previamente fornecida.
A área de indução contará com duas impressoras dedicadas à impressão de etiquetas IVT. Essas etiquetas são utilizadas como contingência nos casos em que o código de barras original da caixa física não é lido corretamente no portal do sorter (NoRead). A etiqueta IVT combina o prefixo "IVT" com o DUN correto da embalagem; uma vez aplicada à caixa, o sorter passa a triá-la considerando apenas o DUN que segue o prefixo "IVT", desconsiderando os demais códigos (conforme a seção de Contingência do Sorter). A disponibilização de duas impressoras visa garantir a continuidade da operação mesmo diante da indisponibilidade de uma delas e absorver a demanda de reetiquetagem sem gerar fila no fluxo de indução.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Sorter  
**Score:** — (sinal-integracao-forte) | **ID:** f7c6c5e2f1a76873

O sorter realizará o desvio dos volumes de forma automática, considerando a disponibilidade dos PTLs para execução das atividades de separação e crossdocking, sempre respeitando a ordem de envio das integrações do WMS.
O agrupamento lógico dos pallets dentro do sorter será determinado com base na loja de destino, categoria do produto (Alimentício/Não Alimentício) e tipo de embalagem, informações estas recebidas via integração.
Para definição do destino de cada volume, o sistema Velox realizará a leitura do código da caixa (padrão ou IVT) e, a partir dessa identificação, executará uma análise dinâmica de cadenciamento entre as rampas disponíveis. Essa análise considera, de forma combinada, quais rampas estão habilitadas para receber o volume, o nível de ocupação atual de cada uma delas e o histórico recente de recebimento, ou seja, quais rampas foram alimentadas mais recentemente.
Com base nesses critérios, o Velox realizará o cadenciamento dos volumes entre as rampas elegíveis, direcionando cada volume para a rampa mais ociosa e que há mais tempo não recebe volumes, promovendo um balanceamento automático da carga e evitando a concentração excessiva de volumes em um único ponto.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 71f588bc2230315b

Para o correto funcionamento do processo de automação, o WCS realizará a troca de informações com o WMS por meio de APIs REST, utilizando o padrão de comunicação em JSON.
Os endpoints deverão ser disponibilizados tanto pelo time de WMS quanto pelo time da Invent antes do início do período de Testes de Integração, conforme cronograma previamente compartilhado pela Invent com os times envolvidos (Tottus e WMS).
Também deverão ser fornecidas todas as informações técnicas necessárias para consumo das APIs, incluindo, mas não se limitando a: métodos de autenticação, tokens, headers obrigatórios, certificados (quando aplicável), padrões de retorno e códigos de status.
Todas as informações referentes às integrações incluindo estrutura dos payloads, tipos de dados, obrigatoriedade dos campos e tamanho máximo de caracteres deverão seguir rigorosamente as definições descritas neste documento.
Para o projeto em questão, serão necessárias as seguintes integrações para garantir o correto funcionamento da automação, conforme detalhado a seguir:

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Produtivo (Funcionários)  
**Score:** — (json-no-corpo) | **ID:** 7d04ba3d46812d12

(POST) WMS  WCS
A integração de "Produtivo" será utilizada para alimentar o sistema WCS com informações sobre os operadores como contingência, incluindo detalhes como código do produtivo, nome do operador, código RH, entre outros dados descritos na tabela abaixo. Com essas informações, o WCS identificará qual usuário operará cada rampa e aplicará o processo de “Login na Rampa”. Na tela de configuração conseguimos definir informações como expiração de senha, mínimo de caracteres se pode possuir caracteres especiais etc.
Exemplo de JSON:
{
"Codprodutivo": 123456,
"Produtivo": "João Silva",
"CodRH": 525879,
"Nroempresa": 123456,
"Status": "1",
}
Segue abaixo tabela com as informações de descrição, tipo do dado, tamanho (quantidade de caracteres):
NOME | TIPO | ACEITA NULO | Comentários
Codprodutivo | INTEGER | Não | Código do produtivo
Produtivo | VARCHAR2(40) | Não | Nome do produtivo
CodRH | INTEGER | Sim | Código do RH
Nroempresa | NUMBER(6) | Não | Número da empresa
Status | STATUS | Não | Status produtivo 0 inativo 1 ativo

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Lojas  
**Score:** — (json-no-corpo) | **ID:** d6af13b762985115

(POST) WMS  WCS
A integração de Lojas será utilizada para alimentar o sistema WCS com informações referentes aos destinos (LOJAS) como contingência. Com essas informações será possível montar o mapa de Sorter. Onde atribuiremos a loja a uma rampa do sorter ou posição de PTL.
Exemplo de JSON:
{
"nroloja": 123,
"descloja": "Loja 01",
}
NOME | TIPO | ACEITANULO | COMENTÁRIOS
nroloja | Varchar2(6) | Não | Número da Loja
DescLoja | Varchar2(20) | Sim | Descrição da loja que o volume será enviado

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Etiquetas  
**Score:** — (json-no-corpo) | **ID:** b8b94ff4ed324d36

(POST) WMS  WCS
A integração de Etiquetas tem como objetivo informar o sistema WCS sobre os volumes nos pallets que foram coletados e estão prontos para serem tratados no sorter. Esses pallets, que já passaram pela triagem e estão prontos para movimentação, são enviados ao WCS antes da indução no sorter. O WMS fornece ao WCS as informações detalhadas sobre cada item do pallet coletado, incluindo o código da etiqueta e o DUN14/EAN13. Com esses dados, o WCS deve aguardar esses volumes nas rampas do sorter e posições de PTL.
Exemplo de JSON:
{
"ilpnPlt": "123",
"event_message_id": "",
"volumes": [
{
"nroloja": "123",
"OrderlineitemID": "987",
"descloja": "Loja Destino Y",
"descProd": "Nome do Produto",
"qtdCaixas": 20,
"item_name": "1234589",
"CodEan13": "7891234567898",
"CodDun14": "17898357410012"
"OrderID": "87648",
"provedor": "",
} {
"nroloja": "897",
"OrderlineitemID": "987",
"descloja": "Loja Destino X",
"descProd": "Nome do Produto X",
"qtdCaixas": 10,
"item_name": "1234589",
"CodEan13": "7891234567898",
"CodDun14": "17898357410012"
"OrderID": "87648",
"provedor": "",
}
]
}
NOME | TIPO | ACEITANULO | COMENTÁRIO
Event_message_id | VARCHAR2(50) | Não | Id da mensagem único
OrderID | VARCHAR2(10) | Não | Id da ordem interno do cliente
OrderlineitemID | VARCHAR2(10) | Não | Id da linha interna do cliente
nroloja | VARCHAR2(6) | Não | Número da loja
descloja | VARCHAR2(50) | Sim | Descrição da loja
ilpnPtl | NUMBER | Não | Identificado do pallet de coleta gerado pelo WMS (Cada palete terá apenas 1 SKU)
qtdCaixas | NUMBER | Não | Quantidade de volumes (Caixas)
descProd | VARCHAR (50) | Sim | Descrição Completa produto
Item_name | VARCHAR2(50) | Não | ID interno do item no WMS
CodEan13 | VARCHAR (13) | Sim | Código EAN (É obrigatório mandar pelo menos um EAN ou DUN)
CodDun14 | VARCHAR (14) | Sim | Código DUN (É obrigatório mandar pelo menos um EAN ou DUN)
provedor | VARCHAR (20) | Sim | Nome do Provedor
OBS: O campo “ilpnPlt” deve ser enviado no payload "5.5 - Pallet Montado", conforme a loja para a qual o volume foi desviado. Estes códigos únicos são fundamentais para identificar de forma exclusiva a etiqueta de pallet associada ao volume, permitindo o correto rastreamento e movimentação do volume nos próximos passos executados pelo WMS.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Cadastro de Produtos  
**Score:** — (json-no-corpo) | **ID:** 8b473ed8dd241909

(POST) WMS  WCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, código do produto, nome, quantidade etc. Operador poderá cadastrar, editar e excluir individualmente os produtos no WCS.
Exemplo do JSON:
{
"nroempresa": 123456,
"dtahoralteracao": "2025-09-21T08:00:00",
"produtos": [
{
"itemname": "1234589",
"tipoProduto": "01",
"descProd": "Nome do Produto",
"qtdembalagem": 2,
"CodEan13": "7891234567898",
"CodDun14": "17898357410012",
"codMatriz": "1",
"tipoEmbalagem": "Fardo",
"pesoBruto": 14.4,
"metrosCubicos": 0.000035
},
{
"item_name": "1234589",
"tipoProduto": "02",
"descProd": "Nome do Produto",
"CodEan13": "7891234567243",
"CodDun14": "17898357410749",
"qtdembalagem": 10,
"codMatriz": "2",
"tipoEmbalagem": "Caixa",
"pesoBruto": 14.4,
"metrosCubicos": 0.000035
}
]
}
NOME | TIPO | ACEITANULO | COMENTÁRIOS
Item_name | VARCHAR2(50) | Não | ID interno do item no WMS
nroempresa | VARCHAR2(6) | Não | Número da empresa
dtahoraalteracao | DateTime | Não | Data hora da inserção e alteração das informações
tipoProduto | VARCHAR2(2) | Não | 01 alimento 02 não alimento
descProd | VARCHAR2(50) | Sim | Descrição do Produto
Qtembalagem | NUMBER | Sim | Quantidade unid. por Embalagem
CodEan13 | VARCHAR (60) | Sim | Código EAN (É obrigatório mandar pelo menos um EAN ou DUN)
CodDun14 | VARCHAR (50) | Sim | Código DUN (É obrigatório mandar pelo menos um EAN ou DUN)
CodMatriz | VARCHAR2(2) | Não | Identificador Matriz de Fragilidade (1 Base, 2 Meio, 3 Topo)
tipoEmbalagem | VARCHAR2(50) | Não | Tipo da Embalagem (Caixa/Fardo)
pesoBruto | VARCHAR2(50) | Não | Peso Bruto do Volume
metrosCubicos | VARCHAR2(50) | Não | Metros Cúbicos do Volume

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Caixa a Caixa  
**Score:** — (json-no-corpo) | **ID:** 79ed49992083c557

WCS  WMS (POST)
A integração de Caixa a Caixa tem como objetivo informar o sistema WMS sobre cada volume alocado no PTL. O WCS irá informar ao WMS assim que o volume for alocado e confirmado no PTL enviando informações detalhadas dos volumes
Exemplo do JSON:
{
"ilpnPlt": 987654321,
"olpnPltSaida": 98765415678,
"nroLoja": "123",
"codprodutivo": 112233,
"orderlineitemID": "987",
"item_name": "112233",
"OrderID": "112233",
"CodEan13": "7891234567898",
"CodDun14": "17898357410012",
"posicaoPtl": "PTL-01",
"provedor": "",
"dtahorfinal": "2025-09-21T10:15:32"
}
NOME | TIPO | ACEITANULO | COMENTÁRIOS
ilpnPlt | NUMBER | Não | Identificado do pallet de coleta gerado pelo WMS
olpnPltSaida | NUMBER | Não | Código da etiqueta Master
nroLoja | VARCHAR2(6) | Não | Número da loja
codprodutivo | INTEGER | Não | Código do produtivo (Usuário) que montou o palete
OrderlineitemID | VARCHAR2(10) | Não | ID da linha interna do cliente
Item_name | VARCHAR2(50) | Não | ID interno de itens no WMS
OrderID | VARCHAR2(10) | Não | Identificação Interna do pedido do cliente
CodEan13 | VARCHAR (60) | Sim | Código EAN (É obrigatório mandar pelo menos um EAN ou DUN)
CodDun14 | VARCHAR (50) | Sim | Código DUN (É obrigatório mandar pelo menos um EAN ou DUN)
posicaoPTL | VARCHAR2(6) | Não | Nome da posição cadastrada no mapa sorter
provedor | VARCHAR (20) | Sim | Nome do Provedor
dtahorfinal | DATETIME | Não | Data/Hora do Final da Montagem de Palete

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Pallet Montado  
**Score:** — (json-no-corpo) | **ID:** 33c9075685fc4ea0

WCS  WMS (POST)
A integração de Pallet Montado tem como objetivo informar o sistema WMS sobre os detalhes de cada volume que foi tratado nos processos de Sorter e PTL. O WCS fornece ao WMS as informações detalhadas sobre cada volume alocado no pallet. E os pallets fechados no processo de Ocorrências.
Exemplo do JSON:
{
"olpnPltSaida": 98765415678,
"nroLoja": "123",
"posicaoPtl": "PTL-01",
"codprodutivo": 112233,
"totalvolPallet": 50,
"totalvolEsper": 50,
"dtahorinicial": "2025-09-21T08:00:00",
"dtahorfinal": "2025-09-21T18:00:00",
"items": [
{
"CodEan13": "7891234567898",
"CodDun14": "17898357410012",
"ilpnPlt": 987654321,
"qtdProduto": "25"
"orderlineitemID": "987",
"item_name": "112233",
"OrderID": "112233",
"provedor": "",
},
{
"CodEan13": "7891234567898",
"CodDun14": "17898357410012",
"ilpnPlt": 987654321,
"qtdProduto": "25"
"orderlineitemID": "987",
"item_name": "112233",
"OrderID": "112233",
"provedor": "",
}
]
}
NOME | TIPO | ACEITANULO | COMENTÁRIOS
olpnPltSaida | NUMBER | Não | Código da etiqueta Master
nroLoja | VARCHAR2(6) | Não | Número da loja
posicaoPTL | VARCHAR2(6) | Não | Nome da posição cadastrada no mapa sorter
codprodutivo | INTEGER | Não | Código do produtivo (Usuário) que montou o palete
totalvolPallet | NUMBER | Não | Soma total de Volumes no Palete
totalvolEsper | NUMBER | Não | Total de volumes esperados enviado na integração 5.3 Etiquetas
dtahorinicial | DATETIME | Não | Data/Hora do Início da Montagem de Palete
dtahorfinal | DATETIME | Não | Data/Hora do Final da Montagem de Palete
CodEan13 | VARCHAR (60) | Sim | Código EAN (É obrigatório mandar pelo menos um EAN ou DUN)
CodDun14 | VARCHAR (50) | Sim | Código DUN (É obrigatório mandar pelo menos um EAN ou DUN)
ilpnPtl | NUMBER | Não | Identificado do pallet de coleta gerado pelo WMS
qtdProduto | NUMBER | Não | Quantidade de volumes
OrderlineitemID | VARCHAR2(10) | Não | ID da linha interna do cliente
itemname | VARCHAR2(50) | Não | ID interno do item no WMS
OrderID | VARCHAR2(10) | Não | Identificação Interna do pedido do cliente
provedor | VARCHAR (20) | Sim | Nome do Provedor
OBS: O campo "ilpnPtl" deve ser enviado nesse payload, conforme a loja para a qual o volume foi desviado e o código recebido na integração 5.3 Etiquetas. Este código único é fundamental para identificar de forma exclusiva a etiqueta associada ao volume, permitindo o correto rastreamento e movimentação do volume nos próximos passos executados pelo WMS.
Se caixas com códigos ilpnPTL diferentes forem enviadas para a mesmo loja, dois objetos separados serão gerados na integração.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Cancelamento de Volumes (Ocorrências)  
**Score:** — (json-no-corpo) | **ID:** 3d3edad6e772198d

WCS  WMS (POST)
A integração de Cancelamento de Volume tem como objetivo informar o sistema WMS sobre o cancelamento de volumes que foram previamente tratados nos processos do WCS.
O WCS enviará ao WMS a identificação do pallet de origem através do campo ilpnPlt. Essa estrutura permite que o WMS realize as devidas tratativas como estorno, reprocessamento ou baixa de forma consolidada por lote de cancelamento.
Essa integração será acionada sempre que um ou mais volumes forem cancelados dentro do fluxo operacional do WCS, garantindo a consistência das informações entre os sistemas.
Exemplo do JSON:
{
"codprodutivo": 112233,
"dtahorcancelamento": "2025-09-21T14:32:10",
"volumes": [
{
"CodEan13": "7891234567898",
"CodDun14": "17898357410012"
"orderlineitemID": "987",
"motivo": "AVARIA",
"item_name": "112233",
"OrderID": "112233",
"ilpnPlt": 987654321,
"nroLoja": "123",
"State": "SHORTCOMPLETED",
}, {
"CodEan13": "7891234567905",
"CodDun14": "17898357410029"
"orderlineitemID": "987",
"motivo": "AVARIA",
"item_name": "112233",
"OrderID": "112233",
"ilpnPlt": 987654321,
"nroLoja": "123",
"State": "SHORTCOMPLETED",
}
]
}
NOME | TIPO | ACEITANULO | COMENTÁRIOS
codprodutivo | INTEGER | Não | Código do operador responsável pelo cancelamento
dtahorcancelamento | DATETIME | Não | Data e hora do cancelamento do volume
CodEan13 | VARCHAR(60) | Sim | Código EAN do volume (obrigatório enviar ao menos EAN ou DUN)
CodDun14 | VARCHAR(50) | Sim | Código DUN do volume (obrigatório enviar ao menos EAN ou DUN)
OrderlineitemID | VARCHAR2(10) | Não | ID da linha interna do cliente
motivo | VARCHAR2(50) | Não | Motivo do cancelamento (ex: AVARIA, EXTRAVIO, CANCELAMENTO)
Item_name | VARCHAR2(50) | Não | ID interno de itens no WMS
OrderID | VARCHAR2(10) | Não | Identificação Interna do pedido do cliente
ilpnPlt | NUMBER | Não | Identificador do pallet de origem (ILPN PLT) gerado pelo WMS
nroLoja | VARCHAR2(6) | Não | Número da loja associada ao volume cancelado
State | VARCHAR2(14) | Não | Status enviado “SHORTCOMPLETED”.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 3.4. Matriz de Responsabilidades (WCS x WMS)  
**Score:** — (semantico) | **ID:** 44ae780c1ff996e0

Ficam estabelecidas as fronteiras de responsabilidade entre os sistemas WMS Spark (Gestão de
Armazém Corporativo) e WCS Velox (Controle da Automação), conforme diretrizes aprovadas
pela equipe de projetos da Vedamotors:
Processo Macro
Responsável
Detalhamento Técnico
Gestão de Pedidos
WMS
O WMS decide "quando" liberar a onda enviando apenas os
itens soltos (SKU x Qtd). O WCS Velox ignora qualquer
pré-definição de volumes do sistema de origem.
Cubagem (Cálculo de Volumes)
WCS
O WCS processa o algoritmo tridimensional (Bin Packing)
para definir a quantidade e o tamanho das caixas plásticas
de transporte, baseando-se no Master Data recebido na INT-
01.
Picking Túnel (A, B, C, D)
WCS
Controle total dos módulos PTL (Luzes) e Displays nos Flow
Racks.
Picking Full Case (Costas)
WCS
O WCS indica no display a retirada da caixa fechada. O
operador etiqueta e coloca na esteira dedicada
Picking Paleteira
WMS
As coletas nos corredores pallet-full ou fullcase é de
responsabilidade WMS.
Picking Cart
WCS
O WCS fica responsável por realizar a coleta de picking cart.
Put to Wall
WCS
O WCS controla a sinalização dos nichos do PTW. Ao bipe de
cada item, o sistema acende o nicho correspondente ao
pedido e gerencia a consolidação até liberação para indução.
Reabastecimento
Ambos
WCS: Monitora o saldo do PTL e gera o pedido (Gatilho).
WMS: Gerencia a missão da empilhadeira para buscar o
pallet no pulmão.
AMR
WCS
O AMR é independente, pois contém rotas programáveis.
Conferência (Audit)
WCS
Validação item a item nas estações de conferência da
automação.
Sorter
WCS
Controle da leitura, decisão de desvio e lógica de fechamento
de pallets nas rampas.
Etiquetagem Fechamento de Pallet
WCS
A etiquetagem da Etiqueta Master é controlada pelo WCS.
Etiquetagem Packing
WCS
A etiquetagem no Packing é controlada pelo WCS.
Etiquetagem Picking Fullcase Costas
WCS
A etiquetagem nas áreas de Picking Fullcase Costas é
controlada pelo WCS.
Etiquetagem Área Dedicada —
Paleteira (grande volume)
WMS
A etiquetagem do full case de grande volume, coletado via
paleteira nas ruas dedicadas, é controlada pelo WMS.
Etiquetagem Área Dedicada — Full
Case Alto Giro (PBL / S20+ / Curva
AA)
WCS
A etiqueta de expedição do full case de alto giro é impressa
pelo WCS no momento da coleta (order start dos volumes).

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4. Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** c357213fa539d467

Cada integração entre os sistemas mencionados (WMS Spark e WCS Velox) deve ser
configurada para seguir as regras de negócios específicas do projeto Navepark. Elas podem
variar de acordo com as necessidades e particularidades da operação de expedição de peças e
kits (Curvas A/B/C/D, Full Case e Fracionado), sendo fundamental que as interfaces sejam
robustas e flexíveis.
Ao projetar e implementar a arquitetura de troca de dados, foram considerados os seguintes
aspectos mandatórios:
Configuração de parâmetros: Os parâmetros de integração (endpoints, timeouts,
retentativas) devem ser configuráveis para permitir customização sem necessidade de
recompilação do código (Deploy). Isso envolve a definição de campos obrigatórios (ex:
dimensões para cubagem), formatos de dados e validações específicas da Vedamotors.
Flexibilidade em formatos de dados: Os payloads (conteúdo das mensagens JSON)
devem ser adaptáveis para acomodar as necessidades específicas da operação. Por
exemplo, permitir a inclusão de campos como "Tipo de Embalagem" (Caixa Plástica vs
Papelão) ou "Prioridade de Rota", que são vitais para a lógica de sequenciamento do
WCS e desvios no Sorter.
Mapeamento e transformação de dados: A integração deve permitir a definição de
regras de mapeamento e transformação de dados, a fim de adaptar as informações
enviadas de um sistema para outro. Isso é crítico na conversão de unidades (ex:
gramas para quilogramas, milímetros para metros) essenciais para a Cubagem do
WCS Velox.
Tratamento de exceções: As regras de negócio podem determinar ações específicas
para situações excepcionais. A integração deve ser capaz de lidar com essas exceções,
como "Produto sem dimensão cadastrada" (gerando bloqueio do pedido),
"Cancelamento de pedido já em separação" (acionando fluxo de estorno/rejeito) ou
"Divergência de Peso" na balança.
Controle de fluxo: Algumas regras de negócio podem exigir a definição de fluxos de
processamento específicos. A integração deve garantir a ordem cronológica e lógica dos
eventos, assegurando, por exemplo, que um pedido só seja liberado para o Order Start
após a confirmação de que todos os seus produtos possuem cadastro ativo e
dimensões válidas.
Portanto, é essencial que a integração seja flexível e configurável para atender às regras de
negócio dinâmicas da Vedamotors. Isso permitirá que a integração WCS se adapte às
necessidades particulares da organização, como a gestão híbrida de Picking Cart e Full Case,
facilitando a implementação da solução.
A integração a ser trocada entre os sistemas WCS Velox e WMS Spark será realizada via
REST JSON e a informação será baseada em eventos (Webhooks/API calls), onde basicamente
o WMS informa ao WCS o que deve ser separado (Ondas/Tarefas) ou movimentado
(Reabastecimento). O nosso sistema processa as informações, realiza a orquestração da
automação e, ao final de cada etapa (Separação, Conferência ou Expedição), retorna ao WMS o
status do que foi executado com sucesso ou as divergências encontradas.
Para o projeto Navepark, foram mapeadas as seguintes integrações necessárias para o correto
funcionamento da automação:
Para garantir a segurança, governança e padronização das trocas de dados, o projeto adotará
uma arquitetura baseada em Middleware (API Manager). Neste cenário, o WCS Velox não
realizará conexões ponto a ponto (diretas), mas sim consumirá e enviará dados através deste
barramento centralizador do cliente.
1. Disponibilização de Documentação (Swagger) A equipe técnica da Invent
disponibilizará o Swagger (OpenAPI) referente a cada endpoint de integração do WCS Velox.
Este material servirá como guia técnico para a configuração das rotas no API Manager.
2. Nota de Leitura (Fluxo Lógico vs. Físico) Para facilitar o entendimento funcional deste
documento por parte das equipes operacionais, os fluxos de dados continuarão descritos
logicamente como trocas entre "WCS" e "WMS".
Importante: Entenda-se que, tecnicamente, toda menção a "envio para o WMS" ou
"consulta ao WMS" implica, na camada física, uma conexão do WCS Velox com o
Middleware, que por sua vez orquestrará a entrega do dado ao sistema de destino.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.1. Cadastro de Produtos  
**Score:** — (json-no-corpo) | **ID:** 425665b957c6094d

Direção
WMS → WCS
Método HTTP
POST
Descrição
Cadastro ou atualização de informações de produtos no WCS
Gatilho
Criação ou alteração de produto no WMS
Descrição Funcional
Esta integração é responsável por manter a base de dados do WCS sincronizada com o WMS. É
o alicerce fundamental para a Cubagem Automática, o roteamento inteligente e os gatilhos
de Reabastecimento.
Para o projeto Navepark é mandatório o envio das dimensões (comprimento, largura, altura) e
peso para cada tipo de embalagem, pois o WCS calculará a volumetria ocupada dentro das
caixas de transporte.
Regras de Negócio:
1. Dados para Cubagem: O preenchimento das dimensões em milímetros é obrigatório
para o cálculo do algoritmo tridimensional de cubagem do WCS.
2. UM de Reabastecimento: O campo quantidade_embalagem e tipo_embalagem
definem o que o sistema considera como uma "unidade completa" para os fluxos de
Reabastecimento por Lotação, Necessidade e Preventivo.
3. Localização e Fluxo: O campo tipo_embalagem orienta se o item será abastecido em
áreas de fracionado (Flow Rack) ou de Full Case (caixas fechadas).
4. Parâmetros de Estoque: Os níveis de Estoque Mínimo e Capacidade Máxima de cada
posição de picking devem ser configurados no WCS — podendo ser enviados via
integração pelo WMS ou configurados manualmente via interface administrativa do
sistema. Esses parâmetros são necessários para habilitar o reabastecimento por
Lotação e Preventivo. O carregamento inicial das posições (go-live) será detalhado em
alinhamento com o time técnico.
Campo
Tipo
Obrigatório Obs
data_evento
String
Sim
Data e hora da geração do evento (ISO 8601).
id_Mensagem
String
Sim
Identificador único da mensagem para rastreabilidade.
sku
String
Sim
Código SKU único do produto.
descricao
String
Sim
Descrição detalhada do item.
status
String
Sim
Estado atual do produto (Ex: ATIVO, INATIVO).
categoria
String
Sim
Categoria de agrupamento do item (Ex: JUNTAS).
familia
String
Sim
Família de produtos para fins logísticos.
tipo_embalagem
String
Sim
Nível da embalagem (UNIT, DISPLAY, FULLCASE).
cod_embalagem
String
Sim
Sigla de unidade de medida (UN, DP, CX).
quantidade_embalagem
Integer
Sim
Fator de conversão (quantidade de itens dentro desta embalagem).
peso_kg
Decimal Sim
Peso bruto da embalagem em quilogramas.
volume_m3
Decimal Sim
Volume cúbico da embalagem.
comprimento_mm
Integer
Sim
Comprimento da embalagem em milímetros.
largura_mm
Integer
Sim
Largura da embalagem em milímetros.
altura_mm
Integer
Sim
Altura da embalagem em milímetros.
barcode
String
Sim
Código de barras (EAN/GTIN) referente ao nível da embalagem.
fragilidade
Integer
Sim
Matriz de fragilidade do SKU (1 a 9). Define a posição de cubagem,
onde 1 = Frágil (Topo) e 9 = Pesado (Base).
Exemplo JSON:
{
"data_evento": "2026-01-14T09:00:00Z",
"id_Mensagem": "PROD-20260115094530",
"produto": {
"sku": "VS99001000160",
"descricao": "JUNTA CABEÇOTE HAO DK 160 / DK 160S (22-)",
"status": "ATIVO",
"categoria": "JUNTAS",
"familia": "MOTOPECA",
"tipos_embalagem": [
{
"tipo_embalagem": "UNIT",
"cod_embalagem": "UN",
"quantidade_embalagem": 1,
"peso_kg": 0.55,
"volume_m3": 0.0012,
"dimensoes": {
"comprimento_mm": 80,
"largura_mm": 60,
"altura_mm": 180
},
"barcode": "7891234567890",
"fragilidade": 9
},
{
"tipo_embalagem": "DISPLAY",
"cod_embalagem": "DP",
"quantidade_embalagem": 12,
"peso_kg": 7.2,
"volume_m3": 0.018,
"dimensoes": {
"comprimento_mm": 320,
"largura_mm": 240,
"altura_mm": 200
},
"barcode": "78912345678901",
"fragilidade": 4
},
{
"tipo_embalagem": "FULLCASE",
"cod_embalagem": "CX",
"quantidade_embalagem": 48,
"peso_kg": 29.5,
"volume_m3": 0.075,
"dimensoes": {
"comprimento_mm": 650,
"largura_mm": 480,
"altura_mm": 420
},
"barcode": "27891234567894",
"fragilidade": 1
}
]
}
}

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.2. Pedido  
**Score:** — (json-no-corpo) | **ID:** 8bb2f53b7f90a9a0

Direção
WMS → WCS
Método HTTP
POST
Descrição
Envio de pedido para separação no WCS
Gatilho
Liberação de pedido para separação no WMS
Descrição Funcional
Esta integração é o motor que inicia a operação. Ao receber os dados brutos, o WCS Velox
executa uma pré-análise crítica: primeiro, valida a disponibilidade física do saldo nas posições
de picking; segundo, realiza a Cubagem Automática para definir os volumes; e terceiro,
organiza a fila de indução no Order Start.
Regras de Negócio Críticas (Lógica NavePark):
1. Detenção da Cubagem (Responsabilidade Exclusiva WCS): no projeto Navepark
o WCS Velox ignorará qualquer pré-definição de volumes do sistema de
origem. O WCS recebe os itens soltos do pedido (SKU x Qtd) e utiliza seu próprio
algoritmo tridimensional para determinar a quantidade ideal de caixas de transporte.
2. Análise de Disponibilidade e Backlog: Antes da cubagem, o WCS verifica se há
saldo suficiente no picking. Se houver ruptura, o sistema retém o pedido em backlog e
dispara automaticamente o Fluxo de Reabastecimento por Necessidade (INT-
03).
3. Agrupamento e Roteamento Mandatório: O campo de Transportadora é
obrigatório para o funcionamento do Sorter. Essa informação define em qual rampa
(Chute) a caixa será classificada na expedição.
4. Segregação por Famílias: O sistema respeita as travas de cadastro para não
misturar famílias incompatíveis (ex: itens pesados de metal com itens frágeis) no
mesmo volume.
Obs: Caso o campo “tipo” venha como “Exportacao” o sistema entenderá que a tratativa
desses itens será diferente, sempre desviando os mesmos na rampa 4 (última rampa de
transporte/expedição, anterior à rampa de rejeito).
Exemplo JSON:
{
"data_evento": "2026-01-14T10:30:00Z",
"id_Mensagem": "PED-20260114103000",
"remetente": "Vedamotors",
"cnpj_remetente": "12.345.678/0001-90",
"pedido": {
"numero_do_pedido": 123456,
"contador_pedido": 1,
"identificador": "PD-123456-001",
"cliente": {
"conf_obrigatoria": true,
"especial": true,   // Define se o cliente será especial, cada SKU embalado.
"embalagem_especial ": “Embalar itens separadamente
Identificar cada item e vira-los para cima”,
"nome": "Yamaha Auto Peças",
"cpf_cnpj": "98.765.432/0001-21",
"endereco": {
"rua": "Av. Exemplo, 123",
"cidade": "São Paulo",
"estado": "SP",
"cep": "01234-567",
"pais": "Brasil"
}
},
"destino": {
"tipo": "Transportadora", // Pode ser definido como Exportacao.
"codigo": "BR-001",
"description": "Braspress"
},
"prioridade": 50,
"data_entrega": "2026-01-15",
"items": [
{
"sku": "PROD-001",
"quantidade": 10,
"fragilidade": 5
},
{
"sku": "PROD-002",
"quantidade": 5,
"fragilidade": 3
},
{
"sku": "PROD-003",
"quantidade": 24,
"fragilidade": 1
}
]
}
}
Campo
Tipo
Obrigatório Obs
data_evento
String
Sim
Data e hora da geração do evento (ISO 8601).
id_Mensagem
String
Sim
Identificador único da mensagem para rastreabilidade.
remetente
String
Sim
Nome da empresa que está enviando a mercadoria.
cnpj_remetente
String
Sim
CNPJ da unidade expedidora.
numero_do_pedido
Integer
Sim
Número oficial do pedido no ERP/WMS.
contador_pedido
Integer
Sim
Sequencial do pedido dentro da mensagem.
identificador
String
Sim
ID único da carga ou onda (Chave de vínculo).
conf_obrigatoria
Boolean Sim
Flag para definir obrigatoriedade da conferência.
especial
Boolean Sim
Define se o cliente será especial e terá cada SKU embalado.
embalagem_especial
String
Não
Instrução para o operador tratar pedidos de clientes especiais.
nome
String
Sim
Nome ou Razão Social do cliente final.
cpf_cnpj
String
Sim
Documento de identificação do cliente.
rua
String
Sim
Endereço de entrega (Logradouro e número).
cidade
String
Sim
Cidade de destino.
estado
String
Sim
UF do destino.
cep
String
Sim
CEP de entrega.
pais
String
Sim
País de destino.
tipo
String
Sim
Tipo de destino (Transportadora).
codigo
String
Sim
Nome da Transportadora
description
String
Sim
Nome da transportadora ou descrição da rota.
prioridade
Integer
Sim
Nível de urgência definido de 0-99. Sendo 0 menos prioritário e
99 mais prioritário.
data_entrega
String
Sim
Data prevista para a entrega (YYYY-MM-DD).
sku
String
Sim
Código do produto a ser separado.
quantidade
Integer
Sim
Quantidade de itens solicitada.
fragilidade
Integer
Sim
Matriz de fragilidade do SKU (1 a 9). Define a posição de coleta,
onde 1 = Frágil (Topo) e 9 = Pesado (Base).

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.3. Solicitação de Reabastecimento  
**Score:** — (json-no-corpo) | **ID:** 73680ba1374a8310

Direção
WCS → WMS
Método HTTP
POST
Descrição
Solicitação de reabastecimento de posições de picking
Gatilho
Análise de estoque por lotação ou necessidade
Descrição Funcional
O WCS Velox atua como o cérebro do estoque de picking através do conceito de Blackbox (o
WCS mantém o saldo por SKU das posições internas da automação para operar de forma
independente da rede ou do banco de dados do WMS). Ele identifica a necessidade de
reposição antes mesmo do WMS e dispara a solicitação para que o pulmão alimente a
automação. A solicitação informa apenas SKU e quantidade em unidades: o WMS resolve
internamente de qual posição de pulmão atender e o WCS define internamente a posição de
picking de destino. Esta integração garante que o picking nunca pare por falta de produto e que
o fluxo de caixas na esteira seja otimizado.
Regras de Negócio e Gatilhos:
1. Reabastecimento por Necessidade:
o
Prioridade: Alta.
o
Lógica: Acionado imediatamente durante o processamento de um pedido
(INT-02) se a demanda for maior que o saldo no picking. O pedido fica retido
em backlog e a solicitação de reabastecimento é enviada com sinalização de
urgência para o WMS.
2. Reabastecimento por Lotação:
o
Prioridade: Média.
o
Lógica: O sistema executa um looping periódico de análise de estoque. O
pedido de abastecimento só é gerado se o saldo atingir o nível mínimo E se
houver espaço físico para receber pelo menos uma UM (Unidade de Medida)
completa do fornecedor (caixa fechada).
3. Reabastecimento Preventivo:
o
Prioridade: Baixa.
o
Lógica: A antecipação parte da operação no Velox: o operador seleciona no
WCS as posições ou itens a abastecer e o WCS dispara a solicitação (INT-03)
ao WMS, sem depender de gatilho de estoque mínimo ou ruptura. O ciclo
segue igual ao dos demais reabastecimentos (resposta via INT-04, classificação
na Rampa 1 e confirmação via INT-05).
4. Identificação e Roteamento (Rampa 1): Todo volume gerado por esta integração
recebe um vínculo lógico. Ao entrar no Sorter, o scanner identifica o código de barras e
o sistema de controle desvia o volume obrigatoriamente para a Rampa 1 (Fluxo
Interno de Reabastecimento).
5. Consolidação de Missões: Para otimizar a separação no pulmão, o WCS pode
agrupar várias necessidades de reabastecimento de uma mesma zona em uma única
mensagem para o WMS.
Nota de Fluxo Físico: Esta solicitação inicia a movimentação física de um volume (caixa
original ou plástica) para a automação, sendo executada pelo WMS até a indução na esteira. O
WCS monitora a entrada deste volume no sistema para garantir o desvio correto. O ciclo só é
oficialmente encerrado com a INT-05 (Confirmação de Reabastecimento), momento em
que o saldo é incrementado e os pedidos em espera são liberados para separação.
Exemplo JSON:
{
"data_evento": "2026-02-15T11:00:00Z",
"id_Mensagem": "SRE-20260215110000",
"movimentacao": {
"identificador": "REAB-5678",
"tipo": "SOLICITACAO",
"reabastecimento": [
{
"id_reabastecimento": "REAB-5678-1",
"sku": "PROD-001",
"quantidade_unitaria": 40
},
{
"id_reabastecimento": "REAB-5678-2",
"sku": "PROD-002",
"quantidade_unitaria": 18
}
]
}
}
Campo
Tipo
Obrigatório
Obs
data_evento
String
Sim
Data e hora da geração do evento (ISO 8601).
id_Mensagem
String
Sim
Identificador único da mensagem para rastreabilidade.
identificador
String
Sim
ID agrupador da solicitação (Onda de Reposição).
tipo
String
Sim
Fixo: SOLICITACAO.
id_reabastecimento
String
Sim
ID único da linha/tarefa. Chave de vínculo com a resposta do WMS.
sku
String
Sim
Código do produto solicitado.
quantidade_unitaria
Integer
Sim
Quantidade de peças solicitadas para abastecer a posição.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.4. Resposta de Reabastecimento  
**Score:** — (json-no-corpo) | **ID:** c42d89c4902a124f

Direção
WMS → WCS
Método HTTP
POST
Descrição
Resposta do WMS à solicitação de reabastecimento (aceito ou rejeitado)
Gatilho
Processamento da solicitação de reabastecimento pelo WMS
Descrição Funcional
Esta integração serve como a confirmação lógica de que o WMS Spark recebeu o pedido de
abastecimento e já providenciou a separação no estoque pulmão. É através desta mensagem
que o WCS toma conhecimento de qual código de barras físico (DUN) deve monitorar na
esteira para realizar o desvio correto no Sorter.
Regras de Negócio Críticas:
Status ACEITO: O WMS confirma que possui o estoque e vincula o produto a um
volume físico. O campo codbarra_caixa torna-se mandatório para que o scanner do
Sorter reconheça o volume ao entrar na automação.
Status REJEITADO: Caso o WMS não possua o saldo no pulmão, ele envia o motivo
(ex: SEM_ESTOQUE). O WCS utiliza essa informação para encerrar a pendência no
saldo do SKU (Estoque) e, se necessário, aplicar o corte em pedidos que aguardavam
esse item.
Quantidade Atendida: O WMS pode enviar uma quantidade diferente da solicitada
(parcial), e o WCS atualizará a expectativa de recebimento com base no campo
quantidade_atendida.
Múltiplos Volumes por Solicitação: Uma mesma solicitação (id_reabastecimento)
pode ser atendida por mais de um volume físico, já que o WMS entrega em
embalagens fechadas (ex: fullcase, display). O WMS responde com o array volumes,
onde cada item traz seu próprio codbarra_caixa, quantidade_atendida, tipo_embalagem
e lote. A soma das quantidades dos volumes compõe o total atendido. O campo
completo indica quando a mensagem encerra a solicitação (último envio); enquanto for
false, o WCS mantém a expectativa de novos volumes para aquele id_reabastecimento.
Quando o WMS não tem como atender toda a quantidade solicitada, envia completo
igual a true no último volume mesmo com o total atendido menor que o solicitado; o
WCS encerra a solicitação e trata a diferença como não atendida.
Vínculo de Lote: Se aplicável, o WMS informa o lote do produto, garantindo que o
WCS mantenha a rastreabilidade correta durante a guarda na posição de picking.
Cenário de Ruptura: Caso o WMS Spark retorne que não há estoque disponível no
pulmão para atender à solicitação, o WCS sinalizará o item com status de 'RUPTURA',
onde o pedido vai aguardar uma liberação manual via dashboard.
Exemplo JSON ACEITO:
{
"data_evento": "2026-02-15T11:15:00Z",
"id_Mensagem": "RSR-20260215111500",
"movimentacao": {
"identificador": "REAB-5678",
"status": "RECEBIDO",
"reabastecimento": [
{
"id_reabastecimento": "REAB-5678-1",
"status_item": "ACEITO",
"sku": "PROD-002",
"completo": true,
"volumes": [
{
"quantidade_atendida": 18,
"tipo_embalagem": "Fracionada",
"posicao_destino": "PA-01-09-05-10",
"lote": "LT202601140P1001",
"codbarra_caixa": "27891234567894"
},
{
"quantidade_atendida": 48,
"tipo_embalagem": "FULLCASE",
"posicao_destino": "PA-01-09-05-10",
"lote": "LT202601140P1001",
"codbarra_caixa": "27891234567895"
}
]
}
]
}

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** }  
**Score:** — (json-no-corpo) | **ID:** c1d137bd02a88e1b

Exemplo JSON REJEITADO:
{
"data_evento": "2026-01-14T11:15:00Z",
"id_Mensagem": "RSR-20260114111500",
"movimentacao": {
"identificador": "REAB-5678",
"status": "RECEBIDO",
"reabastecimento": [
{
"id_reabastecimento": "REAB-5678-3",
"status_item": "REJEITADO",
"motivo_rejeicao": "SEM_ESTOQUE"
}
]
}

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.5. Confirmação de Reabastecimento  
**Score:** — (json-no-corpo) | **ID:** 4b47a87234b1c878

Direção
WCS → WMS
Método HTTP
POST
Descrição
Confirmação de que o reabastecimento foi finalizado no posto
Gatilho
Operador finaliza o reabastecimento da posição
Descrição Funcional
Esta integração encerra oficialmente o ciclo de reposição. Após o volume ter sido desviado para
a Rampa 1 do Sorter, o operador coleta a caixa e realiza a guarda no endereço indicado. O
WCS Velox exige a leitura (bipagem) do código de barras da posição e do produto para garantir
que o item correto está sendo abastecido no local correto, mantendo a integridade da
automação. A confirmação é enviada por volume guardado: quando uma solicitação
(id_reabastecimento) é atendida por múltiplos volumes, cada caixa abastecida gera uma INT-05
vinculada ao mesmo id_reabastecimento. O ciclo da solicitação só é encerrado, com a liberação
dos pedidos em espera, após a guarda de todos os volumes previstos.
Regras de Negócio Críticas:
1. Atualização do Saldo (Blackbox): No momento da confirmação, o WCS incrementa
o saldo do SKU (em unidades) na posição de picking. Sem este evento, o sistema
considera somente o saldo já existente e libera somente as tarefas de picking com
saldo disponível para atender.
2. Ação Crítica no WMS (Sincronismo): Ao receber esta mensagem, o WMS Spark
deve obrigatoriamente realizar a movimentação sistêmica do saldo de "Em Trânsito"
para "Disponível" no endereço de picking correspondente.
3. Desbloqueio Automático de Backlog: Se existiam pedidos retidos aguardando este
item específico, o WCS processa o desbloqueio imediato. O pedido "desce" para a fila
de indução do Order Start ou, se a caixa já estiver na esteira, as luzes de separação
(PBL) serão ativadas assim que o volume chegar ao posto.
4. Tratativa de Sobras e Faltas: Caso a quantidade física confirmada pelo operador
seja diferente da informada na Resposta de Reabastecimento (INT-04), o WCS envia a
quantidade real. O WMS deve tratar essa divergência para não gerar erro de inventário
futuro.
5. Identificação de Origem: A confirmação deve carregar o ID da solicitação original
(vínculo com a INT-03) para fechar o ciclo de rastreabilidade da tarefa.
Obs: Se no ato da guarda o operador identificar que a quantidade física é menor que a
informada na INT-04, o WCS registrará apenas o saldo bipado. Este evento atualizará o saldo
do SKU (Estoque - Blackbox) com o valor real e enviará o alerta de divergência para o WMS
Spark via INT-05 para fins de auditoria de inventário.
Exemplo JSON:
{
"data_evento": "2026-02-15T11:45:00Z",
"id_Mensagem": "MSG-005-20260215114500",
"movimentacao": {
"identificador": "REAB-5678",
"status": "FINALIZADO",
"reabastecimento": [
{
"id_reabastecimento": "REAB-5678-1",
"codbarra_caixa": "27891234567894"
}
]
}
}
Campo
Tipo
Obrigatório
Obs
data_evento
String
Sim
Data e hora da geração do evento (ISO 8601).
id_Mensagem
String
Sim
Identificador único da mensagem.
identificador
String
Sim
ID agrupador da solicitação original (Link com INT-03).
id_reabastecimento
String
Sim
ID único da tarefa. Permite ao WMS dar baixa linha a linha (caso
o operador abasteça um item mas não o outro).
codbarra_caixa
String
Sim
Etiqueta física (LPN/DUN) do volume guardado, conforme
informado na INT-04.
status
String
Sim
Fixo: FINALIZADO. Indica sucesso na operação.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.6. Integração de Ajuste de Inventário (POST)  
**Score:** — (json-no-corpo) | **ID:** 5b0d539dc73984bc

Direção
WCS → WMS
Método HTTP
POST
Descrição
Ajustes de inventário para produtos perdidos, danificados ou divergências
Gatilho
Identificação de divergência de estoque ou avaria em produto
Descrição Funcional
Esta integração é responsável por manter a acuracidade do estoque contábil do WMS Spark
alinhada com a realidade física do WCS Velox. Como o WCS detém a "verdade física" das
posições de picking (PBL/Flow Rack), qualquer ajuste realizado pelo supervisor ou auditor
(devido a avarias, perdas ou sobras) deve ser reportado imediatamente.
Tipos de Movimentação:
PERDA (Perda/Quebra): Quando o saldo físico é menor que o sistêmico. O WMS
deve baixar o estoque da posição.
SOBRA (Sobra/Ganho): Quando o saldo físico é maior que o sistêmico. O WMS
deve realizar uma entrada de ajuste na posição.
Regra de Negócio (Auditoria): Se o parâmetro "Auditoria de Corte" estiver ativo, esta
mensagem só é enviada após a validação de um supervisor (senha/crachá) na posição de
picking.
Obs: O campo posicao_destino indica a natureza do ajuste: PERDA (o WMS baixa o saldo do
SKU) ou SOBRA (o WMS adiciona o saldo do SKU). Cada SKU/lote é enviado em um objeto
próprio no array MOVIMENTOS.
Exemplo JSON:
{
"data_evento": "2026-02-15T14:30:00Z",
"id_Mensagem": "IVE-20260215143000",
"movimentacao": {
"identificador": "IVE-91011",
"MOVIMENTOS": [
{
"sku": "JNT-102030",
"lote": null, // OU INFORMAR O LOTE, SE APLICAVEL
"quantidade": 3,
"posicao_destino": "PERDA"
},
{
"sku": "RET-5050",
"lote": "LOTE-X",
"quantidade": 1,
"posicao_destino": "SOBRA"
}
]
}
}
Campo
Tipo
Obrigatório Obs
data_evento
String
Sim
Data e hora da geração do evento (ISO 8601).
id_Mensagem
String
Sim
Identificador único da mensagem para rastreabilidade.
identificador
String
Sim
ID agrupador da solicitação (Onda de Reposição).
lote
String
Não
Identificador do lote. Enviar null se não for aplicável.
sku
String
Sim
Código do produto solicitado.
quantidade
Integer
Sim
Quantidade total do item, em unidades, a ajustar.
posicao_destino
String
Sim
Indicador da natureza do ajuste: PERDA (baixa de saldo) ou
SOBRA (entrada de saldo).

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.7. Confirmação de Picking Por Posto  
**Score:** — (json-no-corpo) | **ID:** f313f803a40839ef

Direção
WCS → WMS
Método HTTP
POST
Descrição
Confirmação de coleta de produtos por posto de picking
Gatilho
Finalização da coleta de todos os produtos de uma caixa no posto
Descrição Funcional
Esta integração confirma ao WMS Spark que os itens foram fisicamente separados e
depositados na caixa de transporte. No conceito de Picking Tunnel do Navepark, uma mesma
caixa pode passar por múltiplos postos (Zonas). O WCS envia esta confirmação cada vez que a
caixa deixa um posto (ou de forma consolidada, dependendo da parametrização), garantindo
rastreabilidade granular.
[GAP - validar] Validar com o time Spark se a Confirmacao de Picking por Posto e necessaria
para o WMS. Caso nao seja, esta integracao pode ser dispensada e a Confirmacao de
Conferencia assume o papel de confirmacao de coleta.
Regras de Negócio:
1. Confirmação por Posto: A mensagem identifica a estacao_picking. Isso permite ao
WMS saber exatamente onde a caixa está e quais itens já foram bipados/confirmados
no PBL.
2. Shortpicking (Corte): Se houve corte de item, a quantidade confirmada será menor
que a solicitada (ou zero). O WMS deve tratar essa diferença conforme a regra interna
de pedido.
3. Rastreabilidade: Os campos dtaHora_coleta e posicao garantem que o WMS saiba
exatamente quando e de onde o item saiu.
Exemplo JSON:
{
"data_evento": "2026-02-15T11:15:00Z",
"id_Mensagem": "CP-005-20260215111500",
"picking": {
"id_caixa": "00025",
"numero_pedido": 123456,
"estacao_picking": "POSTO-05",
"numero_onda": 45,
"items": [
{
"sku": "JNT-102030",
"quantidade_coletada": 10,
"posicao": "PA-00-05-03-05",
"lote": null, // OU INFORMAR O LOTE, SE APLICAVEL
"dtaHora_coleta": "2026-02-15T11:14:30Z"
},
{
"sku": "RET-5050",
"quantidade_coletada": 5,
"posicao": "PA-00-05-05-01",
"lote": "LOTE-AB",
"dtaHora_coleta": "2026-02-15T11:14:45Z"
}
]
}
}
Campo
Tipo
Obrigatório Obs
data_evento
String
Sim
Data e hora da geração do evento (ISO 8601).
id_Mensagem
String
Sim
Identificador único da mensagem.
id_caixa
String
Sim
Identificador da caixa ou volume onde os itens foram depositados.
numero_pedido
Integer
Sim
Número do pedido associado àquela caixa.
estacao_picking
String
Sim
Identificação da estação ou posto onde o picking foi realizado.
numero_onda
Integer
Sim
Número da onda de separação.
sku
String
Sim
Código do produto separado.
quantidade_coletada
Integer
Sim
Quantidade efetiva inserida na caixa.
posicao
String
Sim
Endereço do PBL de onde o item foi retirado.
lote
String
Não
Identificador do lote coletado. Enviar null se não for aplicável.
dtaHora_coleta
String
Sim
Data e hora exata em que o item foi bipado/coletado.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.8. Confirmação de Conferência  
**Score:** — (json-no-corpo) | **ID:** 5113973e13e8dc00

Direção
WCS → WMS
Método HTTP
POST
Descrição
Confirmação de conferência de volume com validação de peso
Gatilho
Finalização da conferência de um volume
Descrição Funcional
Esta integração ocorre após a caixa passar pela Balança Dinâmica e pela estação de
Conferência Manual. Ela valida se o conteúdo físico da caixa corresponde exatamente ao que
foi solicitado pelo WMS.
[GAP - validar] Caso a Confirmacao de Picking por Posto nao seja necessaria para o WMS,
esta integracao (Confirmacao de Conferencia) sera a confirmacao de coleta enviada ao WMS.
Validar definicao com o time Spark.
Regras de Negócio Críticas:
1. Validação de Peso: O campo peso é preenchido com o valor aferido pela balança de
precisão. O WMS pode usar este dado para cálculo de frete ou dupla checagem de
integridade.
2. Tipo de Verificação:
o
AUTOMATICA: Volume aprovado diretamente pela balança (Peso Teórico x Real
dentro da tolerância).
o
MANUAL: Volume desviado para o operador conferir item a item (Leitura Cega)
devido a divergência de peso ou regra de auditoria aleatória.
3. Status: Se o volume for APROVADO, o WMS deve autorizar a emissão da Nota Fiscal e
Etiqueta de Transportadora. Se REPROVADO (após tentativa manual), inicia-se o fluxo
de divergência.
Exemplo JSON:
{
"data_evento": "2026-01-14T11:20:00Z",
"id_mensagem": "CHO-20260114112000",
"volume": {
"id_volume": "0005",
"numero_pedido": 123456,
"tipo_verificacao": "AUTOMATICA",
"peso": 7.5,
"status": "APROVADO",
"items": [
{
"sku": "PROD-001",
"quantidade_coletada": 10,
"posicao": "PA-00-05-03-05",
"lote": null,
"dtaHora_coleta": "2026-01-14T11:14:30Z"
},
{
"sku": "PROD-002",
"quantidade_coletada": 5,
"posicao": "PA-00-05-05-01",
"lote": null,
"dtaHora_coleta": "2026-01-14T11:14:30Z"
}
]
}
}
Campo
Tipo
Obrigatório Obs
data_evento
String
Sim
Data e hora da geração do evento (ISO 8601).
id_Mensagem
String
Sim
Identificador único da mensagem.
id_volume
String
Sim
Identificador único do volume/caixa conferido.
numero_pedido
Integer
Sim
Número do pedido associado ao volume.
tipo_verificacao
String
Sim
Método de conferência (Ex: AUTOMATICA, MANUAL).
peso
Decimal Sim
Peso real aferido na balança.
status
String
Sim
Resultado da conferência (Ex: APROVADO, REPROVADO).
sku
String
Sim
Código do produto separado.
quantidade_coletada
Integer
Sim
Quantidade efetiva inserida na caixa.
posicao
String
Sim
Endereço de origem de onde o item foi retirado.
lote
String
Não
Identificador do lote coletado. Enviar null se não for aplicável.
dtaHora_coleta
String
Sim
Data e hora exata em que o item foi bipado/coletado.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.9. Volume no Sorter  
**Score:** — (json-no-corpo) | **ID:** 5585545922e4ac8e

Direção
WCS → WMS
Método HTTP
POST
Descrição
Informação de passagem do volume pelo portal de leitura do sorter
Gatilho
Volume passa pelo portal de leitura e é validado
Descrição Funcional
Esta integração comunica ao WMS Spark que o volume físico iniciou o processo de classificação
final. Ao realizar a leitura no portal, o WCS Velox consulta as informações da caixa (vinculado
no Pedido ou no Reabastecimento) e comanda o PLC para realizar o desvio físico para a rampa
(Chute) correspondente à sua transportadora ou processo.
[GAP - validar] Validar a necessidade desta integracao (Volume no Sorter). Alternativa: enviar
a informacao consolidada no Fechamento de Pallet, garantindo que o volume sera efetivamente
expedido. Definir com o time Spark.
Regra de Negócio:
1. Diferenciação de Fluxo (Expedição vs. Reabastecimento):
o
Se o volume for de Expedição (Pedido), o WCS define a rampa com base na
Transportadora.
o
Se o volume for de Reabastecimento, o sistema ignora a transportadora
de destino e comanda o desvio obrigatório para a Rampa 1.
Exemplo JSON:
{
"data_evento": "2026-02-15T12:45:00Z",
"id_mensagem": "VNS-20260215124500",
"volume": {
"id_volume": "VM0078541",
"volume_m3": 0.018,
"peso": 7.5
}
}

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.10. Fechamento de Pallet  
**Score:** — (json-no-corpo) | **ID:** 0628a515eba5dd29

Direção
WCS → WMS
Método HTTP
POST
Descrição
Informação de fechamento de pallet com etiqueta master e volumes
Gatilho
Pallet atinge critério de fechamento (altura, peso ou volumes completos)
Descrição Funcional
Esta integração ocorre no final do fluxo de expedição, após todos os volumes terem passado
pela conferência e pesagem. Ela agrupa os identificadores de volume individuais sob um único
ID de Pallet, permitindo que o WMS processe o carregamento de forma unitizada em vez de
caixa por caixa.
Regras Específicas:
1. Consolidação de Cubagem: O campo volume_m3 deve representar a soma do
volume dos itens mais a ocupação física do pallet (cubagem total da carga).
2. Integridade do Soma: O WMS deve validar se o campo total_volume coincide com a
contagem de itens enviados no array volumes. Divergências indicam falha na
montagem da mensagem ou perda de volume no processo.
3. Rastreabilidade: O id_pallet deve ser único. Se o pallet for reaproveitado, o WMS
deve garantir que o histórico anterior foi baixado antes de aceitar a nova consolidação.
4. Peso Bruto: O campo peso_kg deve ser a soma exata dos pesos aferidos
individualmente na balança dinâmica acrescido do peso da base (madeira/plástico) do
pallet.
Exemplo JSON:
{
"data_evento": "2026-01-14T13:00:00Z",
"id_mensagem": "FP-20260114130000",
"pallet": {
"id_pallet": "0001254",
"volume_m3": 1.55,
"peso_kg": 250,
"volumes": [
{
"id_volume": "VM0078541"
},
{
"id_volume": "VM0078542"
},
{
"id_volume": "VM0078543"
},
{
"id_volume": "VM0078544"
},
{
"id_volume": "VM0078545"
}
],
"total_volume": 5
}
}
Campo
Tipo
Obrigatório
Obs
data_evento
String
Sim
Data e hora da geração do evento (ISO 8601).
id_mensagem
String
Sim
Identificador único da mensagem.
id_volume
String
Sim
Identificador único do volume/caixa validado.
volume_m3
Decimal
Não
Volume cúbico real ou calculado do volume.
peso
Decimal
Sim
Peso real aferido na balança (em kg).
Campo
Tipo
Obrigatório
Obs
data_evento
String
Sim
Data/Hora ISO 8601.
id_mensagem
String
Sim
Identificador único da mensagem.
id_pallet
String
Sim
Identificador único da unidade de carga (Pallet).
id_volume
String
Sim
Identificador único da caixa/volume contido no pallet.
volume_m3
Decimal
Sim
Volume total ocupado pelo pallet.
peso_kg
Decimal
Sim
Peso total bruto do pallet em quilogramas.
total_volume
Integer
Sim
Quantidade total de volumes consolidados.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.11. Cancelamento de Pedidos  
**Score:** — (json-no-corpo) | **ID:** af8003a68869cd0b

Direção
WMS → WCS
Método HTTP
POST
Descrição
Solicitação de cancelamento de um pedido já enviado ao WCS
Gatilho
Decisão do WMS ou cliente de cancelar o pedido
Descrição Funcional
Esta integração permite que o WMS solicite a interrupção do processamento de um pedido
(Total). O comportamento do WCS varia estritamente conforme o estágio (Status) do pedido:
1. Status: INTEGRADO ou PENDENTE (Não iniciado)
o
Ação: O WCS aceita o cancelamento imediatamente.
o
Resultado: O pedido é excluído da onda logicamente. Retorno "OK" para o
WMS.
2. Status: EM ANDAMENTO (Picking Ativo ou Esteira)
o
Ação Física: O WCS finaliza a coleta no posto que está.
o
Desvio: O volume é marcado logicamente como "Cancelado". Ao passar por
qualquer scanner de decisão, a caixa é desviada para a Conferência.
o
Tratativa: O operador deve seguir o fluxo de devolução de itens cancelados
(Retorno ao Picking).
3. Status: FINALIZADO/SORTER (Expedição Concluída)
o
Regra Específica NavePark: Para atender à necessidade de cancelamento
de NF de pedidos já conferidos, o WCS permitirá o Estorno Lógico.
o
Ação: Ao receber o cancelamento (total) de um pedido com status
COMPLETED, o WCS deve invalidar as etiquetas de volume geradas para o
pedido.
o
Saldo: Após a execução do fluxo de devolução, o sistema realiza o crédito do
saldo dos itens de volta para a posição de picking, permitindo que o WMS
"enxergue" o saldo novamente.
o
Alerta: O WCS emite um alerta visual para que o supervisor retire o
pallet/caixa fisicamente da doca de expedição.
Obs: O cancelamento é sempre total. Os volumes pertencentes a um cancelamento têm
tratativas diferentes de acordo com a situação do volume no momento que o WCS recebe o
cancelamento.
Exemplo JSON:
{
"data_evento": "2026-01-14T14:00:00Z",
"id_Mensagem": "CAN-20260114140000",
"cancelamento": {
"pedido": 123456,
"identificador": "PD-123456-001"
}
}
Campo
Tipo
Obrigatório Obs
data_evento
String
Sim
Data/Hora ISO 8601.
id_mensagem
String
Sim
Identificador único da mensagem.
pedido
Integer
Sim
Número do pedido que deve ser cancelado.
identificador
String
Sim
ID único da carga/onda associada ao pedido.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.13. Confirmação de Recall  
**Score:** — (json-no-corpo) | **ID:** 1476cb95003c934a

Direção: WCS → WMS
Método HTTP: POST
Descrição: Confirmação da conclusão de uma tarefa de Recall, informando os itens efetivamente
retirados.
Gatilho: Conclusão da tarefa de Recall (todas as posições previstas visitadas).
Descrição Funcional
Ao concluir a tarefa de Recall, o WCS envia esta integração ao WMS uma única vez, informando
o que foi retirado. Mantendo o princípio de não detalhar a retirada caixa a caixa, a quantidade é
consolidada por lote retirado. Quando o recall abranger todos os lotes do SKU, o array
lotes_retirados conterá um objeto por lote efetivamente recolhido. Quando o item não for
controlado por lote, o WCS retira todos os itens do SKU e retorna um único objeto com lote igual
a null e a quantidade total retirada.
Exemplo JSON:
{
"data_evento": "2026-06-23T14:35:00Z",
"id_mensagem": "RCL-20260623143500",
"recall": {
"id_recall": "RCL-0001",
"sku": "PROD-002",
"status": "FINALIZADO",
"lotes_retirados": [
{
"lote": "LT202601140P1001",
"quantidade": 20
},
{
"lote": "LT202601150P1002",
"quantidade": 5
}
]
}
}
Campo
Tipo
Obrigatório
Obs
data_evento
String
Sim
Data e hora da geração do evento (ISO 8601).
id_mensagem
String
Sim
Identificador único da mensagem.
id_recall
String
Sim
Identificador da tarefa de Recall criada no WCS
Velox.
sku
String
Sim
Código do produto recolhido.
status
String
Sim
Fixo: FINALIZADO. Indica a conclusão da tarefa de
Recall.
lotes_retirados
Array
Sim
Lista consolidada por lote retirado. Cada objeto
contém lote e quantidade.
lote
String
Não
Identificação do lote retirado. Enviar null quando o
item não for controlado por lote.
quantidade
Integer Sim
Quantidade total, em unidades, retirada daquele
lote.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 6.1. Conceito de Estoque (Blackbox)  
**Score:** — (semantico) | **ID:** b860d865e5c09def

O WCS não substitui a gestão de estoque global do WMS. Ele opera sob o conceito de
Blackbox, onde a automação é tratada como uma caixa-preta para o WMS: o WMS deixa de
enxergar as posições internas da automação e passa a enxergar um endereço sistêmico
único por SKU dentro do WCS, com uma entrada (reabastecimento) e uma saída
(picking/ajuste).
Visibilidade (WCS): O WCS detém a “verdade física” das posições internas da
automação (Flow Racks, posições com PBL e pallets de solo do túnel) e mantém o
saldo de cada SKU em unidades. A tradução entre o endereço único do SKU e suas
posições físicas é interna ao Velox (Pick Map), sem integração.
Visibilidade (WMS): O WMS mantém visibilidade e gestão integral do seu estoque de
reserva (Pulmão) e demais áreas externas à automação. Para a automação, o WMS
enxerga apenas o saldo agregado do SKU sob o endereço sistêmico único, não
recebendo as posições internas de picking.
Sincronismo: Toda entrada de saldo no WCS ocorre via Confirmação de
Reabastecimento (WCS → WMS) e toda saída ocorre via Picking ou Ajuste de
Inventário (Auditorias ou Shortpicking). O WMS nunca comanda diretamente uma
posição interna de picking.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 15.3. Integração de Confirmação de Recall  
**Score:** — (semantico) | **ID:** b33f1990b6b13ce8

Ao concluir a tarefa de Recall — quando todas as posições previstas forem visitadas —, o WCS
envia ao WMS a integração de Confirmação de Recall, informando os itens efetivamente retirados
(SKU, lote quando aplicável e quantidade), consolidados por lote. A integração é enviada uma
única vez, ao final da tarefa, e não a cada retirada individual. Quando o item não for controlado
por lote, o WCS retira todos os itens do SKU e retorna um único objeto em lotes_retirados, com
lote igual a null e a quantidade total retirada.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 2.1 Onda  
**Score:** — (json-no-corpo) | **ID:** d6def90f89e216ff

WMS → WCS
O WMS/Reply enviara as informações de cada volume que já foi faturado,
autorizando o desvio do volume no sorter.
Sugestão JSON:
{
"onda": 1,
"volumes": [
{
"etiqueta": "123456789",
"rota": "XYZ"
},
{
"etiqueta": "987654321",
"rota": "ABC"
}
]

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 2.2 Confirmação de Desvio  
**Score:** — (json-no-corpo) | **ID:** 6ecc42392caa37d7

WCS → WMS
Após a execução do desvio no sorter, o WCS enviará ao WMS a confirmação da ação realizada:
Sugestão JSON:
{
"etiqueta": "123456789",
"desviado": true,
"rampa": 3
}
OBS: Essa integração indica o fim do processo do volume dentro do WCS
Campo
Descrição
Tipo
Obrigatório
Tamanho
Etiqueta
Identificador único do volume
varchar
Sim
Desviado
Indica se o volume foi desviado ou não na rampa
Boolean
Sim
-
Rampa
Saída real do volume no sorter
varchar
Sim

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 6.6 Requisitos para Configuração da Integração  
**Score:** — (semantico) | **ID:** c12efdf9eddf8904

Para a configuração da integração SSO via OIDC, a Stellantis deverá fornecer os seguintes
dados, disponíveis nos formulários de preenchimento do protocolo OIDC do Ping Federate:
Client ID
Client Secret
URLs de metadata/endpoints (Authorization, Token, UserInfo)
Tenant ID (se aplicável)
OBS: A definição e o compartilhamento desses dados serão realizados durante a fase de
implementação, conforme alinhamento entre as equipes técnicas da Invent e da Stellantis.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 6. Integrações  
**Score:** — (semantico) | **ID:** 6eeaa64d35fb6cdd

Cada integração entre os sistemas mencionados (WMS Cliente e WCS Invent) pode ser
configurada para seguir as regras de negócios da BR SUPPLY. Elas podem variar de acordo com
as necessidades e particularidades de cada operação, e é importante que as integrações sejam
flexíveis o suficiente para acomodar as diferentes regras.
Ao projetar e implementar uma integração, é importante considerar os seguintes aspectos:
Mapeamento e transformação de dados: A integração deve permitir a definição de
regras de mapeamento e transformação de dados, a fim de adaptar as informações
enviadas de um sistema para outro. Isso pode envolver a conversão de formatos,
reestruturação de dados ou a aplicação de cálculos ou lógica específicos.
Tratamento de exceções: As regras de negócio podem determinar ações específicas
para situações excepcionais. A integração deve ser capaz de lidar com essas exceções,
como erros de validação, discrepâncias de dados ou ações específicas para determinados
cenários.
Controle de fluxo: Algumas regras de negócio podem exigir a definição de fluxos de
processamento específicos. A integração deve permitir o controle desses fluxos, como a
definição de condições de aprovação, etapas de revisão ou notificações para diferentes partes
envolvidas.
Portanto, é essencial que a integração seja elaborada de forma assertiva para atender às regras
de negócio específicas da BR Supply. Isso permitirá que a integração WCS se adapte às
necessidades particulares da organização e facilitará a implementação da solução.
A integração a ser trocada entre os sistemas WCS e WMS será realizada via REST JSON e a
informação será baseada em missões, onde basicamente o WMS informa ao WCS o que deve
ser separado para cada missão. O nosso sistema processa as informações e realiza a separação
dos itens da missão e, ao final da separação, retorna ao WMS do que foi separado com sucesso
ou se houve algum processo fora da separação dessa missão.
Para o projeto em questão, serão necessárias 6 (seis) integrações para o correto funcionamento
da automação, sendo elas:
Nº
Nome da Integração
Sentido da
Comunicação
Observações
Integração de Remessa / Pedido
WMS→ WCS
Inclui pedidos Full Case e Fracionado, base
para geração das tarefas no WCS
Retorno de Picking / Shortpicking
Confirmação de Picking
WCS → WMS
Pode conter divergências entre o solicitado
e o executado
Cancelamento de Remessa/Missão
WMS → WCS
Permite reprocessar ou interromper
operações com base na decisão do WMS
Aloca Pallet
WCS → WMS
Enviada após fechamento do pallet,
informa volumes alocados e posicao PTL
Reabastecimento dos Fracionados
WMS → WCS
WMS envia solicitação de reabastecimento
ao velox
Retorno de Reabastecimento
WCS → WMS
Velox efetua a separação da caixa no full
case

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 6.2. Confirmação de Picking  
**Score:** — (json-no-corpo) | **ID:** c274b40196e72cf9

WCS → WMS
Após a conclusão do processo de separação de cada volume, o WCS enviará ao WMS Spark a
confirmação de picking a nível de volume, contendo as quantidades separadas, faltantes
(shortpicking), status da operação (completo ou parcial), SKU e demais dados operacionais por
item.
A integração será disparada volume a volume, ou seja, cada volume terá sua confirmação
transmitida de forma independente quando for finalizado, sem aguardar a conclusão de outros
volumes do mesmo pedido.
O ponto de disparo da integração é a conclusão da conferência da linha de picking.
Para volumes aprovados diretamente pela balança dinâmica, o disparo ocorre ao passar pelo
ponto de decisão pós-balança. Para volumes desviados à estação de conferência, o disparo
ocorre ao encerrar a conferência.
Obs: Volumes Full Case têm a confirmação disparada na leitura do portal do Sorter.
Exemplo JSON:
{
"num_etiqueta": "P45001-01",
"pedido": "123456",
"completo": true,
"itens": [
{
"sku": "7891000000011",
"posicao": "A-01-02",
"qtd_solic": 10,
"qtd_sep": 10
},
{
"sku": "6421000000221",
"posicao": "A-03-01",
"qtd_solic": 5,
"qtd_sep": 2
}
]
}
CAMPO
DESCRIÇÃO
TIPO
OBRIGATÓRIO
TAMANHO
num_etiqueta
Identificação do volume (etiqueta)
Char
Sim
pedido
Número do pedido
Char
Sim
completo
Informa se o volume foi separado completamente.
Enviar false quando houver shortpicking, true
quando separação completa
Boolean
Sim
—
itens
Lista de itens do volume retornados
Array
Sim
—
sku
Código do produto (SKU/EAN)
Char
Sim
posicao
Endereço de coleta do item (posição no FlowRack)
Char
Sim
qtd_solic
Quantidade solicitada
Quan
Sim
13,3
qtd_sep
Quantidade separada com sucesso
Quan
Sim
13,3

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 6.3. Cancelamento de Remessa / Missão  
**Score:** — (json-no-corpo) | **ID:** a65a819e171ba46b

WMS → WCS
O WMS envia ao WCS a ordem de cancelamento de uma remessa (missão). O WCS bloqueia ou
remove esse pedido da operação em andamento.
As integrações de Cancelamento de remessas são geradas através da necessidade do time BR
SUPPLY e é enviada do WMS ao WCS. Onde o WCS por sua vez toma as ações de acordo com o
status e localidade dos volumes do pedido cancelado, ou seja, por mais que o cancelamento é
feito, as situações dos volumes desse pedido determinam qual será a tratativa desse volume
cancelado junto do pedido.
Temos 3 cenários possíveis nos “cancelamentos de Remessas”:
Volumes que já passaram pelo sorter e tiveram a integração de confirmação enviada: o sistema
não terá tratativas a realizar (volume já expedido).
Volumes em separação (entre Order Start e balança): não entrarão em nenhum posto para
coleta e serão direcionados para a área de conferência com indicação de cancelamento.
Volumes que ainda não saíram do Order Start: serão cancelados da fila de liberação, sem ação
física necessária. Volumes alocados no PTL (pós-sorter, pré-expedição): o WCS sinalizará no
display da posição PTL para que o operador retire o volume e o encaminhe à área de tratativas.
Exemplo JSON:
{
"remessa": "82505263"
}
CAMPO
DESCRIÇÃO
TIPO
OBRIGATÓRIO
TAMANHO
remessa
Código da remessa cancelada
Char
Sim

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 6.4. Aloca Pallet (WCS → WMS)  
**Score:** — (json-no-corpo) | **ID:** 368230675140dfd7

Objetivo:
Após o fechamento do pallet no PTL, o WCS enviará essa integração ao WMS Spark informando
que o pallet foi fechado e quais volumes estão associados a ele.
Estrutura da Integração (JSON):
{
"rgPallet": "RG987654321",
"posicaoPTL": "PTL-05",
"num_pedido": "P45001",
"volumes": [
{
"num_etiqueta": "P45001-01"
},
{
"num_etiqueta": "P45001-02"
},
{
"num_etiqueta": "P45002-01"
}
]
}
Campo
Tipo
Obrigatório Exemplo
Obs
rgPallet
String
Sim
RG987654321
Código lido do RG do pallet
posicaoPTL
String
Sim
PTL-05
Rampa de destino do volume alocado
num_pedido
String
Sim
P45001
Código do pedido
volumes
Array
Sim
—
Lista de volumes alocados no pallet
num_etiqueta
String
Sim
P45001-01
Etiqueta que será lida no Sorter

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 6.5. Reabastecimento dos Fracionados  
**Score:** — (json-no-corpo) | **ID:** 8046748e161cd102

WMS → WCS
No fluxo de reabastecimento, o WMS é responsável por gerar o reabastecimento, e realiza a
separação dos volumes para o reabastecimento. Após a separação dos itens, o WCS assume a
responsabilidade pelo reabastecimento da posição final de picking atráves da automação.
Exemplo JSON:
{
"reabastecimentos": [
{
"num_etiqueta": "00013",
"posicao": "A-01-02",
},
{
"num_etiqueta": "00014",
"posicao": "A-01-02",
}
]
}
Campo
Descrição
Tipo
Obrigatório
Tamanho
reabastecimentos
Lista de tarefas de reabastecimento
Array
Sim
-
num_etiqueta
Identificação do volume (etiqueta)
Char
Sim
posicao
Endereço de coleta do item (posição no
FlowRack)
Char
Sim
6.5.1. Retorno Reabastecimento
WCS → WMS
Essa integração tem como objetivo informar ao WMS que o volume está na posição de picking
solicitada. A integração será enviada no momento em que o operador finalizar a alocação dos
produtos na posição final de picking utilizando o sistema do WCS.
Exemplo JSON:
{
"reabastecimentos": [
{
"num_etiqueta": "00013",
},
{
"num_etiqueta": "00014",
}
]
}
Campo
Descrição
Tipo
Obrigatório
Tamanho
reabastecimentos
Lista de tarefas de reabastecimento
Array
Sim
-
num_etiqueta
Identificação do volume (etiqueta)
Char
Sim

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 7.1. Order Start Fracionado  
**Score:** — (sinal-integracao-forte) | **ID:** 72699ab0fd37e258

Será disponibilizado 1 (um) Order Start no início da linha de separação, cuja finalidade é garantir
o início controlado do processo de separação para cada volume. O Order Start é realizado pelo
WMS Spark, que efetua a liberação dos volumes e envia os dados ao WCS via integração de
Remessa/Pedido.
A separação ocorre na caixa final do cliente. O WMS Spark calcula a cubagem, determina o tipo
de caixa e envia ao WCS os dados do pedido com o ZPL da etiqueta. O WCS imprime a etiqueta,
vincula a caixa ao pedido e controla o fluxo a partir da entrada na linha.
Para garantir a rastreabilidade operacional será necessário realizar login (WMS) e acessar a tela
de Order Start.
Cada operação realizada estará associada ao usuário logado no momento da execução,
garantindo o rastreio individual das ações.
O sistema deverá armazenar essas informações para fins de auditoria, controle de
produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos
pedidos para a operação conforme descrito no item de Integrações — Pedidos/Work.
Como o agrupamento PTL é por transportadora, não há risco de saturação de posições PTL por
pedido. O WCS recebe os volumes integrados pelo WMS Spark e os direciona à linha de separação
conforme a carga atual do FlowRack, evitando sobrecarga nos postos. Caso a linha esteja
saturada para determinada transportadora, o volume permanece na fila aguardando liberação.
Fluxo Operacional:
O operador acessa a tela de Order Start (WMS).
O operador seleciona quantos volumes irá iniciar.
No Order Start o WMS imprime as etiquetas (O WCS não atua nessa etapa) na
impressora automática vinculada ao posto (Zebra ZT230).
O operador aplica a etiqueta na caixa final indicada e realiza a indução na linha.
A caixa passa pela balança estática de tara posicionada no Order Start, onde o WCS
registra o peso da caixa vazia. A caixa é parada momentaneamente sobre a balança
para estabilização da leitura e liberada em seguida. As demais balanças do projeto
(pós-picking e pré-sorter) são dinâmicas.
O WCS registra o vínculo físico e sistêmico entre o volume e a caixa.
O WCS envia integração ao WMS Spark confirmando o início da separação do volume.
O WCS determina o fluxo de separação (quais postos a caixa deve percorrer) e
direciona a caixa à primeira estação de picking.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 20.2 Em caso de Retirada da Carga  
**Score:** — (json-no-corpo) | **ID:** 80d258b5f1c8d82e

Se a falha ocorrer durante um movimento de retirada, o WCS deverá avaliar o modo de
operação do sistema, adotando a seguinte lógica:
Modo "Inventário":
o
A célula deverá ser marcada como “Célula com Erro”, com o motivo informado
pela mensagem de falha do transelevador.
Modo "Online":
o
O WCS deverá verificar se a movimentação de saída estava associada a uma
Ordem de Separação (OS) ou a uma Transferência.
▪
Se afirmativo, o sistema deverá:
▪
Estornar os itens vinculados à OS;
▪
Alocar um novo pallet para atender a(s) OS(s) afetada(s).
Caso não esteja vinculada a uma OS, o WCS deverá gerar uma mensagem M2 para o
SAP com o status ‘Cancela’, sinalizando a impossibilidade de realizar a retirada.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** 4. Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** b6355fb39c1e2389

Para o correto funcionamento de todo o processo da automação o WCS irá enviar e receber dados
do SAP através de API Rest com envio de JSON, os Endpoints deverão ser passados tanto do
time SAP quando do time Invent antes de iniciar o período de Teste de integração informado no
cronograma disponibilizado pelo time Invent aos times envolvidos (Swift e SAP), assim como as
informações pertinentes a todos os detalhes das APIs como por exemplos autenticadores.
Teremos 4 integrações onde 4 (quatro) integrações serão enviadas pelo SAP e um retorno
realizado pelo WCS.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Prévia Transportes  
**Score:** — (json-no-corpo) | **ID:** ceb8308cb9811fe3

SAP→WCS
Ao gerar as Ordens de Transferência (OTs), o SAP enviará ao WCS a previsão dos transportes.
Esta interface suporta o envio de múltiplos registros simultaneamente (processamento em
lote/array), permitindo a integração de diversos transportes em uma única chamada. Esses dados
alimentarão os dashboards de cada rampa/doca.
Nesta etapa, o sistema recebe apenas as informações gerais do transporte. Os detalhes sobre
produtos e quantidades serão processados posteriormente via interface de 'Volumes', à medida
que as separações forem finalizadas.
Nota: Não haverá interface de cancelamento para OTs já integradas. Caso necessário, o operador
deverá realizar a baixa ou ajuste manualmente diretamente no WCS.
Segue exemplo dos JSON:
{
"transportes": [
{
"transporte": "5515478",
"rampaDesvio": "5",
"doca": "15",
"placa": "YBX-12D4",
"loja": "5002",
"descricao": "Alphaville"
},
{
"transporte": "5515478",
"rampaDesvio": "5",
"doca": "15",
"placa": "YBX-12D4",
"loja": "5002",
"descricao": "Alphaville"
}
]
}
CAMPO
DESCRIÇÃO
OBRIGATÓRIO
TIPO
TAMANHO
transporte
Número do transporte
SIM
VARCHAR
rampaDesvio
Qual rampa será feito
o desvio
SIM
VARCHAR
doca
Doca do desvio
SIM
VARCHAR
placa
Placa do transporte
SIM
VARCHAR
loja
Código da loja
SIM
VARCHAR
descricao
Descrição da Loja
NÃO
VARCHAR
Exemplo de Retorno:
{
"sucesso": true,
"mensagem": "Transportes atualizados com sucesso.",
"retorno": {
"transportes": [
{
"transporte": "5515478",
"rampaDesvio": "5",
"doca": "15",
"placa": "YBX-12D4",
"loja": "5002",
"descricao": "Alphaville",
"sucesso": true
},
{
"transporte": "5515478",
"rampaDesvio": "5",
"doca": "15",
"placa": "YBX-12D4",
"loja": null,
"descricao": null,
"sucesso": false,
"mensagem": "Loja não encontrada"
}
]
}
}
CAMPO
DESCRIÇÃO
OBRIGATÓRIO
TIPO
TAMANHO
sucesso
Valida integração
SIM
BOOLEAN
-
mensagem
Descrição do Ocorrido
SIM
VARCHAR
retorno
Array com transportes
SIM
ARRAY
-
transporte
Número do transporte
SIM
VARCHAR
rampaDesvio
Qual rampa será feito
o desvio
SIM
VARCHAR
doca
Doca do desvio
SIM
VARCHAR
placa
Placa do transporte
SIM
VARCHAR
loja
Código da loja
SIM
VARCHAR
descricao
Descrição da Loja
NÃO
VARCHAR

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Volumes  
**Score:** — (json-no-corpo) | **ID:** e069d3b328dfc8be

SAP→WCS
As integrações de pedido serão utilizadas para alimentar o WCS com as informações de rampa
de desvio, carga, onda, produto, entre outras informações que serão citadas no exemplo do JSON
Abaixo:
{
"onda":"4587478854",
"remessa":"154454548",
"loja":"51478",
"descricaoLoja":"Alphaville",
"sku":"102030",
"descriçãoItem":"picanha",
"rgVolume":"1212145874",
"transporte":"1515448",
"placa":"YBX-12D4",
"doca":"15",
"rampaDesvio":"3",
"ultimoVolume":true,
"pesoEsperado":500,
"porcentagemAcima":2,
"porcentagemAbaixo":2,
"pesoBrutoAcima":200,
"pesoBrutoAbaixo":200
}
Segue abaixo a tabela com as especificações dos campos:
CAMPO
DESCRIÇÃO
OBRIGATÓRIO
TIPO
TAMANHO
onda
Número da Onda
SIM
VARCHAR
remessa
Número da
Remessa/Pedido
SIM
VARCHAR
loja
Código da loja
SIM
VARCHAR
descricaoLoja
Descrição da Loja
NÃO
VARCHAR
sku
SKU do item
SIM
VARCHAR
descricaoItem
Descrição do Item
SIM
VARCHAR
rgVolume
RG do volume
(etiqueta lida no
sorter)
SIM
VARCHAR
transporte
Número do
transporte
SIM
VARCHAR
placa
Placa do transporte
SIM
VARCHAR
doca
Doca do desvio
SIM
VARCHAR
rampaDesvio
Qual rampa será
feito o desvio
SIM
VARCHAR
ultimoVolume
Último Volume
separado?
SIM
BOOLEAN
-
pesoEsperado
Peso esperado do
Volume (g)
SIM
NUMBER
5,3
porcentagemAcima
Tolerancia para
mais do peso do
volume  (%)
Sim, se o
campo
“pesoBruto”
não for
informado
NUMBER
5,3
porcentagemAbaixo
Tolerancia para
menos do peso do
volume  (%)
Sim, se o
campo
“pesoBruto”
não for
informado
NUMBER
5,3
pesoBrutoAcima
Tolerancia para
mais do peso do
volume  (Peso
Bruto)
Sim, se o
campo
“porcentagem”
não for
informado
NUMBER
5,3
pesoBrutoAbaixo
Tolerancia para
menos do peso do
volume  (Peso
Bruto)
Sim, se o
campo
“porcentagem”
não for
informado
NUMBER
5,3
Todos os campos exibidos acima são de extrema importância serem recebidos para as rotinas
que serão utilizadas no decorrer do processo que envolve a esteira Invent. Os campos
“rgVolume”,“rampaDesvio”,“pesoEsperado”,“porcentagem”Acima”,”porcentagemAbaixo”,
“pesoBrutoAcima”, “pesoBrutoAbaixo” são essenciais para a questão da lógica dos desvios que
são realizados pelo sistema. Os demais campos tem objetivo auxiliar com os relatórios que serão
exibidos para a operação.
Segue detalhes dos campos:
Onda → Número agrupador das remessas
Remessa → Número do pedido
Loja → Código da loja destino do volume
descricaoLoja → Nome da loja destino do volume
sku → código interno do item
descricaoItem → nome do item
rgVolume → Código que será lido no volume
transporte → Número do transporte do volume
placa → placa do veiculo
doca → doca de saída do volume
rampaDesvio → Rampa que o volume será desviado
ultimoVolume → SAP irá informar quando for o último volume da carga
pesoEsperado → Peso esperado do volume enviado pelo SAP
porcentagemAcima → Tolerância acima em porcentagem
porcentagemAbaixo → Tolerância abaixo em porcentagem
pesoBrutoAcima → Tolerância acima em Peso Bruto
pesoBrutoAbaixo → Tolerância abaixo em Peso Bruto
A cada integração recebida o sistema irá verificar os campos “transporte”, “loja”, e “doca” se já
foram recebidos na integração Prévia Transportes para municiar o monitor que ficará disponível
em cada rampa. Em casos de ainda não ter recebido a prévia do transporte/loja deste volume, o
sistema deve criar uma linha no monitor para o transporte recebido.
Pode acontecer de alguma informação já informada ao WCS, como por exemplo a placa, seja
alterada durante o processo. Essa atualização deve ser informada na integração de volumes,
onde o sistema irá avaliar se já recebeu o campo “transporte” e “loja”, como já mencionado
acima, e verificar se os demais campos estão correspondendo com o que já foi informado, caso
contrário deverá ser atualizado no monitor.
Observação: Os campos “transporte”, “loja” e “doca” por serem a chave do processo não
poderão ser atualizados, qualquer mudança nesses campos será considerado uma nova linha no
monitor.
Outro ponto é que caso for enviado um novo volume para uma linha existente e que já esteja
com algum status finalizado, o WCS deve entender uma reabertura e seguir os processos
novamente, ou seja, esperando retorno novamente do lado SAP de TODOS os processos

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** 4.3.1. Retorno Volumes  
**Score:** — (json-no-corpo) | **ID:** 24f4740041f18dfc

Com a consulta realizada pelo SAP, o WCS irá retornar todos os volumes que passaram pelo
sorter e qual foram seus respectivos diagnósticos.
Segue exemplo do JSON:
{
"volumes": [
{
"dataLeitura": "10/02/2025",
"horaLeitura": "15:10:55",
"remessa": "15445448",
"rgVolume": "1021458748",
"codigoRetorno": "01",
"pesoLido": "500"
},
{
"dataLeitura": "10/02/2025",
"horaLeitura": "15:15:55",
"remessa": "15445448",
"rgVolume": "50304080",
"codigoRetorno": "02",
"pesoLido": "300"
}
]
}
Segue abaixo a tabela com as especificações dos campos:
CAMPO
DESCRIÇÃO
OBRIGATÓRIO
TIPO
TAMANHO
dataLeitura
Data que foi lido no
sorter
SIM
DateTime
-
horaLeitura
Hora que foi lido no
Sorter
SIM
DateTime
-
remessa
Número da remessa
ou pedido
SIM
VARCHAR
rgVolume
Número do volume
que será lido no
Sorter
SIM
VARCHAR
codigoRetorno
Código com o
diagnóstico do
volume
SIM
VARCHAR
pesoLido
Peso do volume em
(g)
SIM
NUMBER
5,3
Para cada diagnostico do volume será enviado um código no campo “codigoRetorno” que o SAP
deve decifrar com a base abaixo:
01 → Divergência de peso
02 → Rampa cheia (recirculação)
03 → Volume sem Integração
04 → Sorter errado
05 → Volume OK
Lembrando que volumes que não forem realizados a leitura , não iremos ter a informação de qual
volume está passando, sendo assim não iremos enviar integração para o SAP.
A partir do momento que for feito o envio daquele respectivo volume e diagnostico, não iremos
mais considerar aquele registro e em uma nova solicitação de consulta será enviado apenas os
volumes que tiveram passagem após este envio.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Aloca Volumes / Finalização de Transporte  
**Score:** — (json-no-corpo) | **ID:** 76fa6da70bebbb80

SAP→WCS
Ao receber o volume na saída das rampas o operador deverá ler cada volume para realizar a
conferência para o carregamento. O SAP irá enviar ao WCS cada volume recebido em sua
respectiva rampa e o WCS deve considerar aquele volume como conferido. Esta interface será
utilizada para evidenciar no Dashboard de cada rampa os volumes que já foram conferidos e
tiveram seus processos no sorter finalizados.
O campo “status” será para determinar se o volume que está sendo informado é o último do
transporte, informando ao WCS que aquele transporte finalizou e não há mais pendencias no
sorter.
Caso for enviado o status “f” sem a informação de volume preenchida, o WCS deve entender que
o transporte deve ser finalizado.
Segue exemplo do JSON:
{
"transporte":"5485747",
"loja":"51478",
"rgVolume":"1212145874",
"status":"v"
}
Segue abaixo a tabela com as especificações dos campos:
Observação: Quando recebermos status “e”, a integração virá com o campo “rgVolume” vazio e
o sistema deve entender que aquele transporte foi finalizado a separação sem mesmo receber o
campo “ultimoVolume” true na integração de volumes.
CAMPO
DESCRIÇÃO
OBRIGATÓRIO
TIPO
TAMANHO
transporte
Número do transporte
SIM
VARCHAR
loja
Código da loja
SIM
VARCHAR
rgVolume
RG do volume (etiqueta
do volume)
NÃO
VARCHAR
status
Status “v” →Volume
Conferido
Status “f” → Para volume
conferido e finalizar
transporte
Status “e” → Encerra a
separação do transporte
sem o envio da integração
de volume
SIM
VARCHAR

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Dashboard Por Rampa  
**Score:** — (sinal-integracao-forte) | **ID:** ee31fd46f27da9b5

Para auxiliar e dar uma visão dos status da operação para os colaboradores que realizarão a
checagem dos volumes na doca será disponibilizado um dashboard por rampa com as
informações dos transportes esperados e/ou realizados.
O operador deverá selecionar qual a rampa está atuando para exibir o dashboard.
Lembrando que será duas docas por rampa.
Segue exemplo do dashboard:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Segue as explicações de cada coluna a respeito do monitor que ficará disponível para cada rampa:
Transporte → Número do transporte informado na integração enviada pelo SAP
Doca → Número da doca destino informado na integração pelo SAP
Placa → Placa do veículo informado na integração pelo SAP
Loja → Loja destino informado na integração pelo SAP
Descrição → descrição da loja destino informado na integração pelo SAP
Status Separação :
Vermelho → Não iniciado a separação. WCS apenas recebeu a integração de Prévia
Transportes
Amarelo → Em andamento. WCS Recebeu a integração de Prévia Transportes e pelo
menos uma integração de volumes
Verde → Finalizada. WCS Recebeu a integração de Prévia Transportes e a marcação
“true” no campo ultimoVolume na integração de volumes ou status “e” na integração de
aloca volumes
Quantidade caixas separação → mostrar quantidade de caixas que recebemos na integração
volumes do respectivo transporte
Status Portal:
Vermelho → Não houve passagem no portal. Não houve leitura de nenhum volume
daquele transporte no portal
Amarelo → Em andamento. Houve pelo menos uma leitura de algum volume do
transporte no portal
Verde → Finalizada. Todos os volumes do transporte foram lidos no portal e enviados
para sua respectiva rampa
Quantidade caixas portal → mostrar quantidade de caixas que foram lidas no portal daquele
respectivo transporte
Status Conferência:
Vermelho → Não houve conferência. Não houve conferência de nenhum volume daquele
transporte na saída das rampas
Amarelo → Em andamento. Houve pelo menos uma conferência de algum volume do
transporte na saídas das rampas
Verde → Finalizada. Todos os volumes do transporte foram conferidos nas saídas das
rampas daquele respectivo transporte
Quantidade caixas Conferidas → mostrar quantidade de caixas que foram conferidas na saída das
rampas daquele respectivo transporte
Pendente conferência → mostrar a diferença entre a quantidade de volumes em separação e
conferidos para o operador ter conhecimento de quantas caixas estão pendentes.
Rejeito → mostrar quantas caixas foram para rejeito do respectivo transporte (lembrando que
este número só será acrescentado quando o rejeito for por algum motivo que o WCS consiga
identificar o transporte/loja. Por exemplo, divergência de peso.)
Status do Transporte:
Vermelho → Não iniciado. WCS apenas recebeu a integração de Prévia Transportes
Amarelo → Em andamento. WCS Recebeu a integração de Prévia Transportes e pelo
menos uma integração de volumes
Verde → Finalizada. WCS recebeu a integração de finalização transporte indicando que
todo o processo referente aquele transporte foi concluído com sucesso
Quando o transporte for concluído, deve permanecer por 10 minutos no Dashboard para
visualização da operação. Após este tempo, deve ser retirado do monitor.
WCS deve disponibilizar uma forma de encerrar manualmente um transporte para casos de falha
do SAP no envio da integração de Prévia Transportes.
O Dashboard deve ser atualizado a cada 1 minuto.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Elaboração do software de integração entre PLC e WCS  
**Score:** — (semantico) | **ID:** de592f4619ef17b8

O fornecimento de software de integração WCS entre o PLC-Invent será de total responsabilidade
Invent, incluindo todo o controle de interface necessários nos pontos de decisão.
Exemplo de arquitetura:
A liberação das portas e protocolos abaixo se fazem necessária para o correto funcionamento da
automação:
Porta
Protocolo
Descrição de uso
HTTPS
Acesso ao sistema web instalado no servidor de aplicação
Socket TCP  Comunicação com o PLC pela IDE Tia Portal
Socket TCP  Comunicação com os equipamentos da esteira (PLC)
Socket TCP  Comunicação com os equipamentos da esteira (PLC)
Socket TCP
Porta do BackEnd
Socket TCP
Porta do BackEnd
Socket TCP
Porta Integração
Socket TCP
Porta Integração
Socket TCP  Comunicação com os concentradores (displays)
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Alguns exemplos de integração:
Desenvolver um sistema integrado de controle de consolidação de pedidos através das
informações recebidas da CONTRATANTE via integração de dados;
Integração será realizada através de troca de dados automática entre os sistemas
INVENT e CONTRATANTE (JSON por exemplo);
As licenças de banco de dados, sistemas operacionais e qualquer outra aplicação a serem
utilizadas serão fornecidas pela CONTRATANTE/CONTRATANTE FINAL;
Os hardwares de TI (desktops, servidores, roteadores etc.) a serem utilizados serão
fornecidos pela CONTRATANTE/CONTRATANTE FINAL;
Controle de saldo da posição e inventario é de responsabilidade CONTRATANTE;
Reabastecimento, controle de lote/número de série é de responsabilidade
CONTRATANTE;
Geração e envio de pedidos é de responsabilidade CONTRATANTE.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** WEBSERVICE  
**Score:** — (semantico) | **ID:** 11144524dcc0f814

(domino internet c/ usuário+senha e
transf. online)

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** XML  
**Score:** — (nome-topico) | **ID:** 8b2e94fb825b5606

(layout tipo tag – campos definidos)

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 6. Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 82d8fcc463ff3295

Para o correto funcionamento da automação o WCS enviará e receberá dados do EWM/SAP da
INBETTA por meio de APIs REST, utilizando o formato JSON. Os endpoints deverão ser
definidos e compartilhados previamente pelos times da INBETTA e da INVENT, antes do início
do período de Teste de integração, conforme cronograma estabelecido pelo time Invent.
As integrações descritas neste capítulo seguem a mesma estrutura, campos e comportamento
já em produção no projeto BETA SP, salvo as exceções pontuais documentadas neste capítulo
(ex.: campos centro/codDeposito específicos do BETA ESTEIO).
A aplicação WCS Velox utiliza o protocolo HTTPS (Hypertext Transfer Protocol Secure) como
padrão de comunicação para a troca de dados entre o cliente e o servidor. A comunicação entre
os sistemas integrados utilizará autenticação, seguindo o mesmo padrão já em produção no
projeto BETA SP: chamadas do WCS para o EWM/SAP utilizam Basic Authentication; chamadas
do EWM/SAP para o WCS utilizam Bearer Token. Os parâmetros de autenticação (usuário,
senha e token) serão acordados entre os times de TI da INBETTA e da INVENT antes do início
do período de Teste de integração.
Cada integração entre os sistemas EWM/SAP da INBETTA e o WCS Velox da INVENT pode ser
customizada conforme as regras de negócio da INBETTA (Projeto Beta Esteio), permitindo
adequações específicas para cada operação. Para isso, é essencial que as integrações sejam
flexíveis e parametrizáveis. Os principais aspectos a serem considerados são:
Configuração de parâmetros: Os parâmetros de integração devem ser configuráveis para
permitir customização de acordo com as regras de negócio. Isso pode envolver a definição de
campos, formatos de dados, validações, mapeamentos e outras configurações relevantes.
Flexibilidade em formatos de dados: Os formatos de dados utilizados na integração devem
ser adaptáveis para acomodar as necessidades específicas da operação. Por exemplo, permitir a
inclusão de campos personalizados, permitir a exclusão de campos irrelevantes ou permitir a
definição de campos opcionais.
Mapeamento e transformação de dados: A integração deve permitir a definição de regras
de mapeamento e transformação de dados, a fim de adaptar as informações enviadas de um
sistema para outro. Isso pode envolver a conversão de formatos, reestruturação de dados ou a
aplicação de cálculos ou lógica específicas.
Tratamento de exceções: As regras de negócio podem determinar ações específicas para
situações excepcionais. A integração deve ser capaz de lidar com essas exceções, como erros
de validação, discrepâncias de dados ou ações específicas para determinados cenários.
Controle de fluxo: Algumas regras de negócio podem exigir a definição de fluxos de
processamento específicos. A integração deve permitir o controle desses fluxos, como a
definição de condições de aprovação, etapas de revisão ou notificações para as diferentes
partes envolvidas no processo.
Portanto, é essencial que a integração seja flexível e configurável para atender às regras de
negócio específicas da INBETTA. Isso permitirá que a integração WCS se adapte às
necessidades particulares da organização e facilitará a implementação da solução.
A integração a ser trocada entre os sistemas WCS e EWM/SAP INBETTA será realizada via REST
JSON e a informação será baseada em pedidos, onde basicamente o EWM/SAP informa ao WCS
o que deve ser separado para cada pedido Full Case e Fracionado. O nosso sistema processa as
informações e realiza a separação dos itens do pedido e, ao final da separação, retorna ao
EWM/SAP do que foi separado com sucesso ou se houve algum processo fora da separação
desse pedido.
Para o projeto entre Invent e Beta Esteio, foram mapeadas 4 (quatro) diferentes integrações
que estão descritas e detalhadas abaixo:
Nº
Nome da Integração
Sentido da
Comunicação
Observações
Integração de Endereços
EWM/SAP → WCS
Cadastro
e
mapeamento
automático
de
posições após implantação
Integração de Remessa / Missões
EWM/SAP → WCS
Inclui missões Full Case e Fracionado, base
para geração das tarefas no WCS
Cancelamento de Remessa / Missão
EWM/SAP → WCS
Bloqueia ou remove a remessa/missão da
operação conforme decisão EWM/SAP
Confirmação de Coleta (Picking)
WCS → EWM/SAP
Confirmação enviada a cada volume separado
(modelo do BETA SP), podendo conter
divergências (shortpicking)

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Integração de Endereços  
**Score:** — (json-no-corpo) | **ID:** 30202afb42457148

O WCS disponibilizará uma integração para recebimento de novos endereços após a
implantação, permitindo o cadastro e mapeamento automático das posições no layout
operacional.
Os endereços recebidos serão classificados por tipo, vinculados ao centro e depósito
correspondentes e imediatamente disponibilizados para uso operacional, sem
necessidade de parametrização manual.
Estrutura da Integração (JSON):
{
"empresa": "0200",
"centro": "0202",
"codDeposito": "1103",
"enderecos": [
{
"endereco": "14.009.101",
"tipo": "picking",
"codTipoDeposito": "0001",
"corredor": "14",
"coluna": "009",
"nivel": 1,
"subnivel": 1
},
{
"endereco": "02.005",
"tipo": "drive-in",
"codTipoDeposito": "0004",
"corredor": "02",
"coluna": "005",
"nivel": null,
"subnivel": null
},
{
"endereco": "13.002.1",
"tipo": "estoque",
"codTipoDeposito": "0002",
"corredor": "13",
"coluna": "002",
"nivel": 1,
"subnivel": null
},
{
"endereco": "13.002.106",
"tipo": "flowrack",
"codTipoDeposito": "0005",
"corredor": "13",
"coluna": "002",
"nivel": 1,
"subnivel": 6
}
]
}
Campo
Descrição
Tipo
Obrigatório
Tamanho
empresa
Código da empresa requisitante
Char
Sim
Centro
Código do centro de distribuição
Char
Sim
codDeposito
Código do depósito
Char
Sim
enderecos
Lista de endereços a serem cadastrados
Array
Sim
-
endereco
Código lógico completo do endereço
Char
Sim
Tipo
Tipo do endereço (picking, estoque, flowrack,
drive-in, etc.)
Char
Sim
codTipoDeposito
Código do tipo de depósito
Char
Sim
corredor
Código do corredor
Char
Sim
Coluna
Código da coluna
Char
Sim
Nível
Nível do endereço
Num
Não
subnivel
Subnível do endereço
Num
Não

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** EMW/SAP → WCS  
**Score:** — (json-no-corpo) | **ID:** 38aff717fadb1b39

O EWM/SAP envia uma lista de remessas com informações detalhadas como número do pedido,
SKU, quantidade, lote, prioridade, centro, cubagem por unidade (em metros cúbicos - m³),
cubagem total da remessa e dados da etiqueta (romaneio e transportadora).
Os pedidos são apresentados automaticamente na tela do WCS para o operador dar início na
separação. Cada remessa pode conter N tarefas do EWM/SAP — cada item dentro dos arrays
itens_fracionados e fullcase carrega seu próprio identificador de tarefa (tarefa). O Velox recebe
e gerencia todas essas tarefas, consolidando-as em uma única tarefa operacional por remessa
no Order Start.
Exemplo JSON:
{
"empresa": "0200",
"codDeposito": "1103",
"centro": "0202",
"cnpjEmbarcador": "89723837000849",
"num_pedido": "01044582",
"prioridade": "00",
"lista_remessas": [
{
"remessa": "0087164289",
"uc": "",
"cep": "22753-053",
"loja": "",
"cod_transp": "0010469468",
"des_transp": "LINOS EXPRESS TRANSPORTES LTDA",
"cod_cliente": "0010047927",
"des_cliente": "FLUZAO ATACADAO DA CONS LTDA EPP",
"cidade": "RIO DE JANEIRO",
"uf": "RJ",
"cod_rota": "RJ",
"des_rota": "RIO DE JANEIRO",
"siglaFilialDestino": "1",
"itens_fracionados": [
{
"tarefa": "100002186126",
"tipo_dep": "0005",
"posicao": "06.011.105",
"sku": "319/3",
"ean": "7896380105328",
"ean_dz": "17896380105325",
"qtd_solic": "12.00000000000000 ",
"cubagem": 0.00008333333333,
"altura": 6.0,
"largura": 10.0,
"comprimento": 190.0,
"peso": 0.028,
"dun": "27896380105322",
"descricao": "TRINCHA MEDIA P/ PINTURA ESMALTE 1",
"qtd_master": "12"
}
],
"fullcase": [
{
"tarefa": "100002186116",
"uc": "",
"tipo_dep": "0001",
"posicao": "03.038.101",
"sku": "AT2014",
"dun": "77896380103187",
"qtd_solic": 36.0,
"qtd_pallet": 1860.0,
"qtd_caixa": 12.0,
"peso": 0.082,
"descricao": "ROLO DE PINT BRASILEIRINHO POLIAMID 23CM",
"cubagem": 0.001,
"altura": 52.0,
"largura": 52.0,
"comprimento": 230.0
}
]
}
]
}
CAMPO
DESCRIÇÃO
TIPO
OBRIGATÓRIO
TAMANHO
Empresa
Código da empresa responsável pela remessa
Char
Sim
Centro
Código do centro de distribuição
Char
Sim
codDeposito
Código do deposito
Char
Sim
num_pedido
Número identificador único do pedido do cliente
Numc
Não
Prioridade
Nível de prioridade atribuída a remessa/pedido
Char
Não
Lista_remessa
Lista que vai conter as remessas do posto
Array
Sim
-
Remesssa
Número da remessa
Char
Sim
Cep
Código de endereço postal do cliente
Char
Sim
Loja
Identificador da loja
Char
Não
cod_transp
Código da transportadora
Char
Sim
cnpjEmbarcador
CNPJ do cliente
Char
Sim
des_transp
Descrição da transportadora
Char
Sim
cod_cliente
Código do cliente
Char
Sim
des_cliente
descrição do cliente
Char
Sim
Cidade
Cidade do destinatário
Char
Sim
UF
Estado do destinatário
Char
Sim
cod_rota
Código da Rota de transporte
Char
Não
des_rota
Descrição da Rota de transporte
Char
Não
siglaFilialDestino
Sigla da filial de destino
Char
Sim
itens_fracionados
Lista de itens fracionados
Array
Sim
-
Tarefa
Nº Tarefa WMS para separação do material
Numc
Sim
tipo_dep
Tipo de Deposito
Char
Sim
Posição
Endereço de coleta do item
Char
Sim
Sku
Código SKU do produto
Char
Sim
Ean
Código EAN do produto (unitário)
Char
Sim
Ean_dz
Código EAN do produto (master)
Char
Sim
qtd_solic
Quantidade solicitada do item (unitário)
Quan
Sim
13,3
Cubagem
Cubagem unitária do item em metros cúbicos
Quan
Sim
15,3
Altura
Altura unitária do item em mm o WCS deve multiplicar pela
caixa fechada, ou master na hora de considerar as dimensões
Numc
Sim
Largura
Largura unitária do item em mm o WCS deve multiplicar pela
caixa fechada, ou master na hora de considerar as dimensões
Numc
Sim
Comprimento
Comprimento unitário do item em mm o WCS deve multiplicar
pela caixa fechada, ou master na hora de considerar as
dimensões
Numc
Sim
Fullcase
Lista de itens fullcase
Array
Sim
-
Tarefa
Nº Tarefa WMS para separação do material
Numc
Sim
UC
Unidade Comercial – RG do pallet associado
Char
Sim
tipo_dep
Código do Tipo de Deposito
Char
Sim
Recusa da Integração de Pedidos:
Em caso de recusa da integração de pedidos, o WCS rejeitará a integração de forma total, ou
seja, todos os pedidos contidos na mensagem serão recusados. O WCS não realizará recusa
parcial — se houver qualquer inconsistência que impeça o processamento, nenhum pedido da
integração será aceito. O EWM/SAP deverá corrigir os dados e reenviar a integração completa
para novo processamento.
Importante: o BETA ESTEIO opera em planta distinta do BETA SP. O WCS deverá aceitar
somente integrações cujos campos centro = "0200" e codDeposito = "0203" estejam
preenchidos com esses valores específicos. Integrações com outros valores deverão ser
rejeitadas.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** WCS → EWM/SAP  
**Score:** — (json-no-corpo) | **ID:** 7695984200fd57ba

Após a conclusão do processo de separação, o WCS enviará ao EWM/SAP a confirmação de
picking a nível de tarefa, contendo as quantidades separadas, faltantes (shortpicking),
status da operação (completo ou parcial), SKU e demais dados operacionais por item.
Conforme alinhamento com o cliente e a estrutura já em produção no projeto BETA SP, a
integração de confirmação de picking será disparada a cada volume separado, e não
consolidada por tarefa. Para uma mesma tarefa, podem ser enviadas múltiplas confirmações
parciais até que a quantidade total da tarefa seja atingida.
Esse modelo garante:
• Alinhamento com a regra já em produção no BETA SP;
• Visibilidade em tempo real da separação para o EWM/SAP;
• Maior confiabilidade no tratamento de shortpicking, pois cada volume é tratado
individualmente.
Posição
Endereço de coleta do item
Char
Sim
Sku
Código SKU do produto
Char
Sim
DUN
Código DUN do item (para fullcase)
Char
Sim
descricao
Descrição do SKU (texto)
Char
Não
qtd_solic
Quantidade solicitada do item (unidade)
Quan
Sim
13,3
qtd_pallet
Quantidade que um pallet completo sempre vai ter
Quan
Sim
13,3
qtd_caixa
Quantidade de unidades que uma caixa fechada vai ter, o WCS
deve dividir a quantidade solicitada pela quantidade caixa
fechada para saber quantas caixas fechadas devem separar. O
wcs deve recusar integração que o valor da divisão for menor
que 1(um)
Quan
Sim
13,3
cubagem
Cubagem unitária do item em metros cúbicos
Quan
Sim
15,3
altura
Altura unitária em mm. O WCS deve multiplicar pela caixa
fechada/master para considerar dimensões
Numc
Sim
largura
Largura unitária em mm. O WCS deve multiplicar pela caixa
fechada/master para considerar dimensões
Numc
Sim
comprimento
Comprimento unitário em mm. O WCS deve multiplicar pela
caixa fechada/master para considerar dimensões
Numc
Sim
Peso
Peso unitário do item, o WCS deve multiplicar pela caixa
fechada, ou master na hora de considerar o peso
Numc
Sim
Exemplo JSON:
{
"empresa": "0200",
"centro": "0202",
"codDeposito": 1103,
"completo": true,
"retornos": [
{
"remessa": "0087164506",
"status": "parcial",
"total_volumes": 209
}
],
"itens": [
{
"tarefa": "100002188659",
"uc": "100000000249349622",
"sku": "AT4066-2",
"qtd_solic": 144,
"qtd_sep": 144
}
]
}
CAMPO
DESCRIÇÃO
TIPO
OBRIGATÓRIO
TAMANHO
empresa
Código da empresa responsável pela remessa
Char
Sim
centro
Código do centro de distribuição
Char
Sim
codDeposito
Código do depósito
Char
Sim
completo
Informa se há mais volumes na remessa. Enviar false para
todos exceto o último, que deve ser true
Boolean
Sim
-
retornos
Lista de retornos
Array
Sim
-
remessa
Número da remessa
Char
Sim
status
Status da separação: "parcial" para shortpicking,
"completo" sem shortpicking
Char
Sim
total_volumes
Número total de volumes da remessa. Enviar null até o
último volume; no último enviar o total
Numc
Sim
itens
Lista de itens do pedido retornados
Array
Não
-
tarefa
Nº Tarefa EWM/SAP para separação do material
Numc
Sim
uc
Unidade Comercial (devolver o mesmo valor recebido)
Char
Sim
sku
Código do produto (SKU/EAN)
Char
Não
qtd_solic
Quantidade Solicitada
Quan
Não
13,3
qtd_sep
Quantidade separada com sucesso
Quan
Não
13,3

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** EMW/SAP → WCS  
**Score:** — (json-no-corpo) | **ID:** e13ad782f37e49e3

O EWM/SAP envia ao WCS a ordem de cancelamento de uma remessa. O WCS bloqueia ou
remove esse pedido da operação em andamento.
As integrações de Cancelamento de remessas são geradas através da necessidade do time
INBETTA e é enviada do EWM/SAP ao WCS. Onde o WCS por sua vez toma as ações de acordo
com o status e localidade dos volumes do romaneio cancelado, ou seja, por mais que o
cancelamento é feito, as situações dos volumes desse pedido determinam qual será a tratativa
desse volume cancelado junto do romaneio.
Temos 3 cenários possíveis nos “cancelamentos de Romaneios”:
Volumes que já tenham passado pela coleta e foram enviados a integração de confirmação
volume, o sistema não terá tratativas a realizar.
Volumes que estavam sendo separados, não irão entrar em nenhum posto para coleta e serão
direcionados para o setor de conferência informando que o pedido foi cancelado
Volumes que não saíram do Order Start apenas será cancelado da lista.
Exemplo JSON:
{
"empresa": "0200",
"centro": "0202",
"remessa": "0086531338",
"codDeposito": 1103
}
Obs: Essa integração de Cancelamento de Remessa deve seguir a mesma estrutura ativa no
BETA SP.
CAMPO
DESCRIÇÃO
TIPO
OBRIGATÓRIO
TAMANHO
empresa
Código da empresa responsável pela operação
Char
Sim
Centro
Código do centro de distribuição
Char
Sim
remessa
Código da remessa cancelada
Char
Sim
codDeposito
Código do deposito
Char
Sim

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Order Start Full Case  
**Score:** — (sinal-integracao-forte) | **ID:** 9e917d50feca4def

Após a integração da onda de pedidos, o WCS identifica as tarefas de Picking Full Case. O Order
Start Full Case é o ponto de início da separação de volumes fechados (caixas de fornecedor)
destinados diretamente ao cliente final.
O Order Start Full Case organiza as tarefas por remessa (pedido completo): uma remessa gera
uma única tarefa operacional no Velox, independentemente da rua ou setor. É importante
destacar que o EWM/SAP pode enviar N tarefas para uma mesma remessa — o Velox é
responsável por agrupar e gerenciar todas essas tarefas recebidas via Integração de Remessa
/ Missões, consolidando-as em uma única tarefa operacional para o operador. O sistema NÃO
realiza quebra automática em sub-tarefas por peso ou cubagem do pallet de coleta. Caso o pallet
de coleta atinja o limite físico antes da conclusão da remessa, a operação é tratada
operacionalmente: o operador parqueia o pallet em área designada, retira um novo pallet vazio
e dá sequência à mesma tarefa, sem geração de tarefa adicional pelo sistema.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 7.6.1. Fluxo Operacional do Order Start Full Case  
**Score:** — (sinal-integracao-forte) | **ID:** 2fad57d1a4fe876f

Escolha do Posto de Impressão:
1. O operador escolhe o posto de impressão onde retirará as etiquetas. Esse posto
representa uma impressora física disponível na área de operação.
Seleção da Remessa:
2. O operador seleciona a remessa completa que deseja trabalhar, visualizando todos os
itens de Full Case do pedido de uma só vez, independentemente das ruas envolvidas.
3. O WCS exibe para cada remessa: número da remessa, quantidade total de caixas a
coletar, ruas envolvidas e parâmetros de peso e cubagem do pallet de coleta.
Obs: Os parâmetros de peso e cubagem exibidos são apenas informativos, servindo
como referência para o operador durante a coleta. O sistema não utiliza esses valores
para quebrar ou dividir a tarefa automaticamente — a decisão de parquear o pallet cheio
e utilizar um novo pallet é inteiramente operacional.
Início da Tarefa:
4. O Velox consolida em uma única tarefa operacional todas as tarefas do EWM/SAP
recebidas via Integração de Remessa / Missões para aquela remessa, contemplando
todos os itens de Full Case. Não há quebra automática com base em peso ou cubagem
— uma remessa equivale sempre a uma tarefa única no Velox.
5. Caso o pallet de coleta atinja seu limite físico antes da conclusão da tarefa, o operador
deverá tratar a situação operacionalmente: parquear o pallet em área designada, retirar
um novo pallet vazio e dar sequência à mesma tarefa. O sistema permanece com a tarefa
única ativa até a conclusão integral da remessa.
Impressão da Etiqueta:
6. A impressão das etiquetas é feita antes da coleta, garantindo que o sistema registre
adequadamente a tarefa de separação.
Ordem de Coleta:
7. A sequência de coleta das posições nas ruas é definida de forma crescente ou decrescente
conforme parametrização da operação no WCS. O coletor refletirá essa ordenação ao
exibir os endereços pendentes durante a coleta.
Hardware Order Start Full Case:
8. Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo
operacional.
Após o Order Start Full Case, o WCS direciona o operador para a tela de coleta no coletor Android.
O operador se desloca até as ruas indicadas pela remessa selecionada.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 7.6.5. Confirmação de Picking Full Case  
**Score:** — (sinal-integracao-forte) | **ID:** 449ef7036a8a2b77

A confirmação de picking para volumes Full Case é enviada ao EWM/SAP via a integração padrão
de Confirmação de Coleta (capítulo 6.3), seguindo a mesma regra do BETA SP: a confirmação é
disparada a cada "pega" (coleta) via Confirmação de Coleta (Picking), com os mesmos
campos da integração já em produção. O Velox envia a confirmação respeitando o granularidade
de tarefas do EWM/SAP — ou seja, cada tarefa recebida via Integração de Remessa / Missões
é confirmada individualmente, mesmo que o operador as visualize como uma única tarefa
operacional no Velox. Não há campo específico para diferenciar Full Case de Fracionado — o
EWM/SAP identifica o tipo pela própria tarefa. A finalização da tarefa Full Case no WCS, contudo,
ocorre apenas após a consolidação descrita na seção 7.6.4 (leitura das etiquetas dos volumes
Fracionados da remessa, quando aplicável).

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Etiqueta Picking Fracionado  
**Score:** — (semantico) | **ID:** 37995bb1b75bce8f

Essa etiqueta será utilizada no processo de picking fracionado. O QR Code impresso conterá
informações relevantes para a operação, originadas a partir dos dados recebidos via integração.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Etiqueta Picking Full Case  
**Score:** — (semantico) | **ID:** bd689c77985eeeda

Essa etiqueta será utilizada no processo de separação Full Case. O QR Code (Superior Direito)
impresso conterá as informações necessárias para identificação e rastreabilidade da caixa, com
dados provenientes da integração.
Exemplo de valores que vão conter no QR code:
O QR Code (Superior Direito) presente na etiqueta será composto pela concatenação de
diferentes informações operacionais, formando um único código utilizado para identificação,
rastreabilidade e validação dos volumes, o QR Code aceita apenas como elemento separador os
caracteres - ou / os demais caracteres especiais não podem ser utilizados. A quantidade total
de caracteres deverá estar entre 10 e 40 dígitos.
O campo nota fiscal, sempre será preenchido com o número da remessa, pois no momento da
integração não temos essa informação.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 47e0b84d0345b260

Para o correto funcionamento da automação o WCS enviará e receberá dados do EWM/SAP da INBETTA por meio de APIs REST, utilizando o formato JSON. Os endpoints deverão ser definidos e compartilhados previamente pelos times da INBETTA e da INVENT, antes do início do período de Teste de integração, conforme cronograma estabelecido pelo time Invent.
A aplicação WCS Velox utiliza o protocolo HTTPS (Hypertext Transfer Protocol Secure) como padrão de comunicação para a troca de dados entre o cliente e o servidor. A aplicação WCS não exige autenticação entre os sistemas integrados, uma vez que a comunicação ocorre dentro de uma arquitetura local e controlada.
Cada integração entre os sistemas EWM/SAP da INBETTA e o WCS Velox da INVENT pode ser customizada conforme as regras de negócio da INBETTA, permitindo adequações específicas para cada operação. Para isso, é essencial que as integrações sejam flexíveis e parametrizáveis. Os principais aspectos a serem considerados são:
Configuração de parâmetros: Os parâmetros de integração devem ser configuráveis para permitir customização de acordo com as regras de negócio. Isso pode envolver a definição de campos, formatos de dados, validações, mapeamentos e outras configurações relevantes.
Flexibilidade em formatos de dados: Os formatos de dados utilizados na integração devem ser adaptáveis para acomodar as necessidades específicas da operação. Por exemplo, permitir a inclusão de campos personalizados, permitir a exclusão de campos irrelevantes ou permitir a definição de campos opcionais.
Mapeamento e transformação de dados: A integração deve permitir a definição de regras de mapeamento e transformação de dados, a fim de adaptar as informações enviadas de um sistema para outro. Isso pode envolver a conversão de formatos, reestruturação de dados ou a aplicação de cálculos ou lógica específicas.
Tratamento de exceções: As regras de negócio podem determinar ações específicas para situações excepcionais. A integração deve ser capaz de lidar com essas exceções, como erros de validação, discrepâncias de dados ou ações específicas para determinados cenários.
Controle de fluxo: Algumas regras de negócio podem exigir a definição de fluxos de processamento específicos. A integração deve permitir o controle desses fluxos, como a definição de condições de aprovação, etapas de revisão ou notificações para as diferentes partes envolvidas no processo.
Portanto, é essencial que a integração seja flexível e configurável para atender às regras de negócio específicas da INBETTA. Isso permitirá que a integração WCS se adapte às necessidades particulares da organização e facilitará a implementação da solução.
A integração a ser trocada entre os sistemas WCS e EWM/SAP INBETTA será realizada via REST JSON e a informação será baseada em pedidos, onde basicamente o EWM/SAP informa ao WCS o que deve ser separado para cada pedido Full Case e Fracionado. O nosso sistema processa as informações e realiza a separação dos itens do pedido e, ao final da separação, retorna ao EWM/SAP do que foi separado com sucesso ou se houve algum processo fora da separação desse pedido.
Para o projeto entre Invent e INBETTA, foram mapeadas 5 (cinco) diferentes integrações que estão descritas e detalhadas abaixo:
Nº | Nome da Integração | Sentido da Comunicação | Observações
1 | Integração de Remessa / Pedido | EWM/SAP WCS | Inclui pedidos Full Case e Fracionado, base para geração das tarefas no WCS
2 | Retorno de Picking / Shortpicking Confirmação de Picking | WCS  EWM/SAP SAP | Pode conter divergências entre o solicitado e o executado
3 | Cancelamento de Pedido / Ressuprimento | EWM/SAP↔ WCS (bidirecional) | Permite reprocessar ou interromper operações com base na decisão do EWM/SAP
4 | Reabastecimento dos Fracionados | WCS  EWM/SAP SAP | WMS envia solicitação de reabastecimento ao velox
5 | Retorno de Reabastecimento | WCS  EWM/SAP SAP | Velox efetua a separação da caixa no full case

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Confirmação de Picking  
**Score:** — (json-no-corpo) | **ID:** 89afe6d3d22fc731

WCS  EWM/SAP
Após a conclusão do processo de separação, o WCS enviará ao EWM/SAP a confirmação de picking a nível de tarefa, contendo as quantidades separadas, faltantes (shortpicking), status da operação (completo ou parcial), SKU e demais dados operacionais por item.
Diferentemente do modelo volume a volume, a integração de confirmação de picking será disparada somente quando a tarefa, previamente enviada na integração de remessas/missões, estiver totalmente concluída.
Caso uma mesma tarefa esteja dividida em múltiplos volumes, o WCS deverá:
Monitorar a passagem de todos os volumes associados à tarefa pelo ponto de confirmação definido (scanner de conferência, portal de leitura, Prix na ponta da rampa do sorter ou processo de conferência do picking fracionado);
Consolidar as informações de todos os volumes envolvidos;
Disparar a integração apenas uma única vez, a nível de tarefa, somente após todos os volumes relacionados terem sido confirmados no ponto especificado.
Esse modelo garante:
Consistência na confirmação das tarefas;
Evita envios parciais ou duplicados;
Alinhamento com o conceito de tarefa do EWM/SAP;
Maior confiabilidade no tratamento de shortpicking.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"completo": true,
"retornos": [
{
"remessa": "123658",
"status": "parcial",
"total_volumes": 30,
}
],
"itens": [
{
"tarefa": "00012",
"uc": "100000000091227284",
"id_caixa": "NUMERODATAREFAWCS",
"posicao": "A-01-02",
"sku": "7891000000011",
"qtd_solic": 10,
"qtd_sep": 2
},        {
"tarefa": "00012",
"uc": "100000000091227284",
"id_caixa": "NUMERODATAREFAWCS",
"posicao": "A-03-01",
"sku": "6421000000221",
"qtd_solic": 5,
"qtd_sep": 2
}
]
}
CAMPO | DESCRIÇÃO | TIPO | OBRIGATÓRIO | TAMANHO
Empresa | Código da empresa responsável pela remessa | Char | Sim | 4
Centro | Código do centro de distribuição | Char | Sim | 4
codDeposito | Código do deposito | Char | Sim | 4
Completo | Informa se há mais volumes na remessa, deve ser enviado false para todos os volumes com exceção do último que deve ser enviado true | Boolean | Sim | -
Retornos | Lista de retornos | Array | Sim | -
Remesssa | Número da remessa | Char | Sim | 10
Status | Status (Completo, parcial) Parcial para shortpicking, completo sem shortpickng. | Char | Sim | 10
Total_volumes | Número total de volumes fracionados, deve ser enviado null até o último volume, no último volume integrado deve ser enviado a quantidade total de volumes | Char | Sim | 10
Itens | Lista de itens do pedido retornados | Array | Não | -
Tarefa | Nº Tarefa WMS para separação do material | Numc | Sim | 12
UC | Unidade Comercial (devolver o que recebeu) | Char | Sim | 20
id_caixa | Será o número da “Tarefa” do WCS | Char | Sim | 100
Posição | Endereço de coleta do item | Char | Sim | 18
Sku | Código do produto (SKU/EAN) | Char | Não | 40
qtd_solic | Quantidade Solicitada | Quan | Não | 13,3
qtd_sep | Quantidade separada com sucesso | Quan | Não | 13,3

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Cancelamento de Remessa / Missão  
**Score:** — (json-no-corpo) | **ID:** 3f59880d8f40a0c9

EMW/SAP  WCS
O EWM/SAP envia ao WCS a ordem de cancelamento de uma remessa. O WCS bloqueia ou remove esse pedido da operação em andamento.
As integrações de Cancelamento de remessas são geradas através da necessidade do time INBETTA e é enviada do EWM/SAP ao WCS. Onde o WCS por sua vez toma as ações de acordo com o status e localidade dos volumes do romaneio cancelado, ou seja, por mais que o cancelamento é feito, as situações dos volumes desse pedido determinam qual será a tratativa desse volume cancelado junto do romaneio.
Temos 3 cenários possíveis nos “cancelamentos de Romaneios”:
Volumes que já tenham passados pelo sorter e foram enviados a integração de confirmação volume, o sistema não terá tratativas a realizar.
Volumes que estavam sendo separados, não irão entrar em nenhum posto para coleta e serão direcionados para o setor de conferência informando que o pedido foi cancelado
Volumes que não saíram do Order Start apenas será cancelado da lista.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"remessa": "82505263"
"codDeposito": 1234,
}
CAMPO | DESCRIÇÃO | TIPO | OBRIGATÓRIO | TAMANHO
empresa | Código da empresa responsável pela operação | Char | Sim | 4
Centro | Código do centro de distribuição | Char | Sim | 4
remessa | Código da remessa cancelada | Char | Sim | 10
codDeposito | Código do deposito | Char | Sim | 4

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Reabastecimento dos Fracionados  
**Score:** — (json-no-corpo) | **ID:** 706a8226be141430

EMW/SAP  WCS
No fluxo de reabastecimento, o WMS é responsável por gerar o reabastecimento, enquanto o WCS realiza a separação dos volumes para o reabastecimento. Após a separação dos itens, o WMS assume a responsabilidade pelo reabastecimento da posição final de picking.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"reabastecimentos": [
{
"tarefa": "00013",
"sku": "3040",
"dun": "49871236547800",
"qt_sug": 2,
"pos_origem": "1N49042030",
"pos_destino": "1N49042031",
"motivo": "reabastecimento",
"qtd_caixa": 150
}
]
}
Campo | Descrição | Tipo | Obrigatório | Tamanho
Empresa | Código da Empresa requisitante | String | Sim | 4
Centro | Código do centro de distribuição | String | Sim | 4
codDeposito | Código do deposito | Char | Sim | 4
reabastecimentos | Lista de tarefas de reabastecimento | Array | Sim | -
Tarefa | Nº Tarefa WMS para separação do material | Numc | Sim | 12
Sku | Código SKU do produto | Char | Sim | 40
DUN | Código DUN do item | Char | Sim | 18
Ean | Código EAN do produto (unitário) | Char | Sim | 18
Ean_dz | Código EAN do produto (master) | Char | Sim | 18
qtd_sug | Quantidade sugerida de ressuprimento | Quan | Sim | 13,3
pos_origem | Posição para onde o SKU será coletado | Char | Sim | 18
pos_destino | Posição para onde o SKU será reabastecido | Char | Sim | 18
qtd_caixa | Quantidade de unidadesque uma caixa fechada vai ter, o WCS deve dividir a quantidade solicitada pela quantidade master para saber quantas caixas fechadas devem separar. O wcs deve recusar integração que o valor da divisão for menor que 1(um) | Quan | Sim | 13,3
Motivo | Motivo da solicitação | Char | Sim | 18

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Aloca Pallet (WCS → WMS)  
**Score:** — (json-no-corpo) | **ID:** d1843b3069985f10

Objetivo:
Caso a transportadora esteja com a função de paletização ativa será enviado pelo WCS essa integração após o fechamento das posições de pallet, confirmação para o WMS, informando que o pallet foi fechado e quais volumes estão associados a ele.
Estrutura da Integração (JSON):
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"rgPallet": "RG987654321",
"enderecoPallet": "A01-B02-C03",
"volumes": [
{
"remessa": "123456789",
"idVolume": "123456789",
"etiquetaOp": "ABC123456789"
},
{
"remessa": "123456789",
"idVolume": "987654321",
"etiquetaOp": "XYZ987654321"
},
{
"remessa": "123456789",
"idVolume": "456789123",
"etiquetaOp": "DEF456789123"
}
]
}
Campo | Tipo | Obrigatório | Exemplo | Obs
Empresa | cs | Sim | 0001 | Empresa
Centro | Char | Sim | SP0 | Centro
codDeposito | Char | Sim | 1234 | codDeposito
IdPallet | String | Sim | PALLET001 | Identificador único do pallet no WCS
RgPallet | String | Sim | RG987654321 | Código lido do RG do pallet
enderecoPallet | String | Sim | A01-B02-C03 | Endereço físico do pallet informado pelo operador
Volumes | Array | Sim | — | Lista de volumes alocados no pallet
IdVolume | String | Sim | 123456 | Identificador único do volume
etiquetaOp | String | Sim | Etiqueta001 | Etiqueta que será lida no Sorter

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Integração de Endereços  
**Score:** — (json-no-corpo) | **ID:** 0d204d10954f2dd8

O WCS disponibilizará uma integração para recebimento de novos endereços após a implantação, permitindo o cadastro e mapeamento automático das posições no layout operacional.
Os endereços recebidos serão classificados por tipo, vinculados ao centro e depósito correspondentes e imediatamente disponibilizados para uso operacional, sem necessidade de parametrização manual.
Estrutura da Integração (JSON):
{
"empresa": "0001",
"centro": "0202",
"codDeposito": "1103",
"enderecos": [
{
"endereco": "14.009.101",
"tipo": "picking",
"codTipoDeposito": "0001",
"corredor": "14",
"coluna": "009",
"nivel": 1,
"subnivel": 1
},
{
"endereco": "02.005",
"tipo": "drive-in",
"codTipoDeposito": "0004",
"corredor": "02",
"coluna": "005",
"nivel": null,
"subnivel": null
},
{
"endereco": "13.002.1",
"tipo": "estoque",
"codTipoDeposito": "0002",
"corredor": "13",
"coluna": "002",
"nivel": 1,
"subnivel": null
},
{
"endereco": "13.002.106",
"tipo": "flowrack",
"codTipoDeposito": "0005",
"corredor": "13",
"coluna": "002",
"nivel": 1,
"subnivel": 6
}
]
Campo | Descrição | Tipo | Obrigatório | Tamanho
empresa | Código da empresa requisitante | Char | Sim | 4
centro | Código do centro de distribuição | Char | Sim | 4
codDeposito | Código do depósito | Char | Sim | 4
enderecos | Lista de endereços a serem cadastrados | Array | Sim | -
endereco | Código lógico completo do endereço | Char | Sim | 18
tipo | Tipo do endereço (picking, estoque, flowrack, drive-in, etc.) | Char | Sim | 20
codTipoDeposito | Código do tipo de depósito | Char | Sim | 4
corredor | Código do corredor | Char | Sim | 4
coluna | Código da coluna | Char | Sim | 4
nivel | Nível do endereço | Num | Não | 2
subnivel | Subnível do endereço | Num | Não | 2

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Etiqueta Picking Full Case  
**Score:** — (semantico) | **ID:** dce57427ca090016

Essa etiqueta será utilizada no processo de separação Full Case. O QR Code (Superior Direito) impresso conterá as informações necessárias para identificação e rastreabilidade da caixa, com dados provenientes da integração.
Exemplo de valores que vão conter no QR code:
O QR Code (Superior Direito) presente na etiqueta será composto pela concatenação de diferentes informações operacionais, formando um único código utilizado para identificação, rastreabilidade e validação dos volumes, o QR Code aceita apenas como elemento separador os caracteres - ou / os demais caracteres especiais não podem ser utilizados. A quantidade total de caracteres deverá estar entre 10 e 40 dígitos.
Modelos de composição de código que podem ser utilizados:
Modelo 1:
0651728-126-89723837000849-0620-0001
0651728 - NF
126 - Série
89723837000849 - CNPJ
0620 - TotalVol
0001 - Vol
0001 - Vol
0620 - TotalVol
O campo nota fiscal, sempre será preenchido com o número da remessa, pois no momento da integração não temos essa informação.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 3. Integrações  
**Score:** — (semantico) | **ID:** c15fa7ae399f41eb

A integrações serão realizadas através de um DBLink onde o Velox irá receber e enviar dados
através de tabelas transacionais, sendo duas tabela transacional do lado do banco de dados Velox
e uma única tabela transacional do lado do banco de dados do WMS.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** WMS → VELOX  
**Score:** — (semantico) | **ID:** c75b577afde37725

Os dados que devem ser enviados (INSERT) do WMS para o Velox são os dados na tabela abaixo
onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tamanhos de campos indicados por * não tem tamanho definido pelo WMS o Velox deve guardar
a informação em sua base da mesma maneira que recebeu do WMS
CAMPO_BANCO_VELOX
CAMPO_BANCO_WMS
DESCRIÇÃO
TIPO
TAMANHO
EMPRESA
EMPRESA
Número da empresa do CD
NUMBER
TIPO_CARGA
TIPO_CARGA
(R) ou (E)
VARCHAR
DESCRICAO_TPO_CARGA
DESCRICAO_TPO_CARGA
Recebimento ou Expedição
VARCHAR
TIPO_PRODUTO
TIPO_PRODUTO
A ou N
VARCHAR
DESCRICAO_TIPO_PRODUTO DESCRICAO_TIPO_PRODUTO
Alimento ou Não alimento
VARCHAR
ONDA
ONDA
Número de carga (onda)
NUMBER
ORDEM_SEPARACAO
ORDEM_SEPARACAO
Ordem da linha de Separação
NUMBER
LOJA
LOJA
Número da loja
NUMBER
ROTA
ROTA
Código Rota
VARCHAR
CODRUA
CODRUA
Código da Rua de Separação
SEQPRODUTO
SEQPRODUTO
Número de sequência produto
NUMBER
CODACESSO
CODACESSO
Código presente na caixa
(DUN14)
NUMBER
QTDEMBALAGEM
QTDEMBALAGEM
Quantidade de unidades na
embalagem
VARCHAR
12,6
QUANTIDADE
QUANTIDADE
Quantidade de Unidades
SEQLOTE
SEQLOTE
Número de Lote
DESCRICAO
DESCRICAO
Descrição do produto
VARCHAR
PESO
PESO
informação de peso
NUMBER
7,3
ALTURA
ALTURA
Informação de altura
NUMBER
9,6
LARGURA
LARGURA
Informação de largura
NUMBER
9,6
COMPRIMENTO
COMPRIMENTO
Informação de comprimento
NUMBER
9,6
COD_PRODUTIVO
COD_PRODUTIVO
Código do produtivo
NUMBER
COD_RH
COD_RH
Código RH do Concinco
VARCHAR
PRODUTIVO
PRODUTIVO
Nome do Produtivo
VARCHAR
Os dados da onda serão enviados realizando o INSERT na tabela Intermediaria com os campos
acima.
Uma vez que os dados são inseridos pelo WMS na tabela transacional “INTERMEDIARIA” do
Velox, o Velox terá em procedimentos (rotinas) para buscar as informações nas colunas das
tabelas INTERMEDIARIA para popular outras tabelas dentro de sua base de dados, onde essas
informações são utilizadas posteriormente para realizações das decisões de desvios no sorter,
alocação de volumes nos PTLs e retorno de informações para tabela transacional do WMS
Consinco.
Esses processamentos (rotinas) só serão executados quando todos os campos de todas as
colunas estiverem populados, ou seja, diferentes de vazio.
As colunas EMPRESA, LOJA, ONDA, SEQLOTE, SEQPRODUTO e QTDEMBALAGEM serão
UNIQUEs na tabela transacional, garantindo que o Velox nunca aceitará registros com os
mesmos valores em todas essas colunas. Isso assegura que não haverá duplicações com os
mesmos valores nessas colunas, preservando a integridade dos dados.
O recebimento desses dados deve ocorrer antes do pallet chegar ao Stage, caso ocorra de os
volume serem induzidos sem o recebimento das informações, todos serão direcionados para o
rejeito por falta de integração.
NOTA: O WMS não poderá realizar deleções na tabela transacional (DELETE), somente inserção
de dados, qualquer UPDATE realizado em colunas erradas é de inteira responsabilidade do WMS

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 6. PROCESSO OPERACIONAL  
**Score:** — (sinal-integracao-forte) | **ID:** 9701d84124afacfc

O processo operacional inicia-se no sistema VELOX após a chegada do pallet na área e o
recebimento da integração com os dados dos volumes necessários. O VELOX aguardará a indução
dos volumes na esteira para dar continuidade ao processamento.
Etapas do Processo:
Indução de Volumes
O operador realiza a indução manual das caixas (volumes) na esteira, que as transportará
até o portal de leitura.
No portal de leitura, as câmeras identificam o código de barras das caixas, conforme
especificado no item Especificação de Volumes Induzidos no Sorter.
Após a leitura do código, o VELOX consulta sua base de dados para determinar o destino
do volume, ou seja, a rampa para a qual o volume deve ser desviado.
O VELOX comunica a direção de desvio à automação (PLC).
Gestão de Desvio
A esteira realiza o desvio dos volumes de forma cadenciada, especialmente quando há
solicitações para mais de uma loja, evitando sobrecarga na mesma rampa e garantindo
eficiência para o operador.
Identificação e Alocação
Após o volume ser desviado para a rampa correta, o operador utiliza o scanner da rampa
para realizar a leitura do código da caixa.
o
Com essa informação, o VELOX:
Acende o LED na posição PTL (Pick-to-Light) correspondente, indicando onde o
operador deve posicionar o volume.
Caso o volume não pertença a nenhuma posição no posto PTL vinculado ao scanner,
todos os LEDs acenderão na cor vermelha, informando o erro.
o
Quando o LED correspondente é acionado, o operador deve:
Posicionar o volume no pallet indicado.
Confirmar a ação pressionando o botão do LED.
Após a confirmação, o VELOX registra a alocação e armazena essas informações para
envio posterior ao WMS.
Monitoramento de Cubagem e Peso
Durante o processo de alocação, o VELOX verifica continuamente a cubagem e o peso
do pallet, conforme descrito no item Cubagem de Pallet.
Quando o pallet atinge sua capacidade, o LED acende em uma cor específica, indicando
ao operador que ele deve fechar o pallet.
Operador deverá realizar a leitura de um código Fantasia para o sistema vincular os
volume alocados a um número de pallet
Após o fechamento do pallet, o VELOX envia uma integração ao WMS.
Caso ainda existam volumes para alocação, o sistema abrirá um novo pallet
automaticamente e o processo irá se repetir.
Gestão de Rejeitos
Em casos de rejeição, o operador terá acesso a uma tela com o diagnóstico do erro.
Caso seja possível, o operador poderá realizar nova indução do volume na esteira.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 6. Integrações  
**Score:** — (semantico) | **ID:** f06dfaa9ee450bdd

As integrações de dados entre os sistemas ocorrerão por meio de comunicação direta entre
bancos de dados PostgreSQL e Oracle (Banco a Banco), utilizando uma tabela
compartilhada como estrutura central de troca de informações. Esse serviço será mantido
ativo no servidor local, permitindo que o sistema WCS da Invent esteja integrado à operação do
WMS do cliente.
A gestão e manutenção da conexão via dblink entre os bancos de dados é de
responsabilidade do time Comercial Esperança.
Criação
Apresentação
Envio
Aprovação da ES
Responsável:
Invent
Desenvolvimento de
documentação (ES).
Responsável: Invent
Apresentação de ES
ao cliente para
validação de toda a
documentação.
Responsável:
Invent
Envio do ES para
Aprovação.
Responsável: Cliente
Cliente aprova a proposta para dar
seguimento no processo seguindo
para o desenvolvimento.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Fluxo geral do processo de integração  
**Score:** — (semantico) | **ID:** 263ef1f7c2e7180d

O envio e o retorno de informações entre WMS e WCS ocorrerão exclusivamente por meio
da tabela compartilhada descrita anteriormente.
WMS
o
Inserirá na tabela todos os pedidos das ondas que envolvam:
▪
Full Case
▪
Pallet Fechado
▪
Fracionado
o
Indicará, quando aplicável:
▪
Prioridade (relacionada à existência de separação fracionada);
▪
Matriz de Fragilidade;
▪
Cancelamento de pedidos, por meio de flag de controle.
WCS
Ao processar os pedidos da tabela, o WCS aplicará as seguintes regras operacionais:
o
OS TIPO 10 (Full Case): A liberação ocorre somente após a impressão e
liberação das etiquetas dos pedidos de Pallet Sorter, garantindo que os pallets
fechados sejam priorizados antes do início da separação Full Case.
o
OS TIPO 22 (Fracionado): podem ser induzidos a qualquer momento;
não são alocados em PTL, apenas desviados.
o
Matriz de Fragilidade: respeitada a ordem de empilhamento (leve →
médio → pesado).
o
Peso mínimo para liberação: a separação ocorrerá apenas quando o
somatório dos pesos atingir o valor parametrizado, considerando também a
disponibilidade de PTLs.
Após a conferência no PTL, o WCS atualizará os dados dos volumes individualmente a nível de
item na mesma tabela, permitindo que o WMS identifique automaticamente os itens
processados.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Integração WMS ⇄ WCS (Tabela Compartilhada)  
**Score:** — (semantico) | **ID:** f35bdc523791e52c

O WMS deverá realizar a inserção e atualização direta dos dados em uma tabela
compartilhada com o WCS. Essa tabela será utilizada de forma bidirecional:
Para o envio dos pedidos ao WCS;
Para o retorno das informações de volumes separados no processo de picking.
Para o retorno das informações de volumes conferidos no processo de
paletização;
E para o cancelamento de pedidos já registrados, através de um campo de controle
específico.
A tabela será monitorada periodicamente pelo WCS em ciclos de 10 minutos (parametrizável
com valor mínimo de 5 minutos).

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 6.2.2. Integrações de Retorno (WCS → WMS)  
**Score:** — (semantico) | **ID:** a014a7a3c63b2d25

a) Integração de Picking Confirm (Separação Finalizada)
Sempre que uma tarefa de separação for concluída (entrega da separação ao
stage), o WCS irá atualizar a tabela compartilhada, sinalizando que os itens
associados à tarefa foram efetivamente separados e estão disponíveis para as próximas
etapas operacionais.
O WMS poderá utilizar essas informações para fins de rastreabilidade, expedição ou
controle interno, com base nos dados já atualizados na estrutura compartilhada.
b) Integração de PTL (Conferência)
Após a conferência do produto no processo de PTL, o WCS atualizará diretamente
a tabela compartilhada, preenchendo os campos relacionados à quantidade
efetivamente conferida e demais dados relevantes dos volumes processados.
Essa atualização será automática, possibilitando ao WMS acessar os registros atualizados
e dar continuidade às etapas logísticas, sem necessidade de mecanismos adicionais de
controle.
Após a alocação do último volume do pedido o WCS irá atualizar a informação da coluna
“datafimconferencia” com a data atual.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** Retorno Volumes  
**Score:** — (semantico) | **ID:** 4a3990cba4f1f51a

WCS (Registro) / WMS (Consulta)
O WCS não realizará o envio/push das informações de Retorno de volta ao WMS.
Em substituição à integração de retorno, o WCS registrará os dados de desvio e diagnóstico dos
volumes processados em uma tabela (Tabela de Leitura) no seu próprio banco de dados. O WMS
da Reval será o responsável por consultar ativamente (pull) essa tabela via DBLINK, garantindo
acesso aos dados atualizados de status dos volumes.
A tabela de Retorno agora representa os dados que o WMS deve buscar para:
•
Receber informações cruciais sobre os volumes processados (desvios e tempos de
operação).
•
Obter o código da rampa para onde o volume foi desviado (RAMPA_DESVIADA) e o
diagnóstico (CODIGO_RETORNO).
Campo
Tipo
Tamanho
Obrigatório
Descrição
ETIQUETA_VOLUME
Varchar
Sim
Código lido no sorter que será
repassado na integração
RAMPA_DESVIADA
Varchar
Sim
Código da rampa para onde o
volume foi desviado.
CODIGO_RETORNO
Varchar
Sim
Código do diagnóstico daquele
volume
DATA_LEITURA
DateTime
N/A
Sim
Data e hora em que o volume foi
lido ou registrado no sistema.
DATA_DESVIO
DateTime
N/A
Sim
Data e hora em que o volume foi
desviado para a rampa
especificada.
Para cada diagnostico do volume será enviado um código no campo “CODIGO_RETORNO” que o
WMS deve decifrar com a base abaixo:
•
01 → rejeito por recirculação
•
02 → Volume sem Integração
•
03 → Rampa inexistente
•
04 → Volume OK
Lembrando que para volumes que não tiverem sua leitura realizada no sorter, o WCS não
registrará dados sobre a sua passagem. Consequentemente, o WMS não encontrará registros
na tabela de busca para este volume.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** Cancelamento de Volumes  
**Score:** — (semantico) | **ID:** 45a514fe884fad88

O cancelamento de volumes será de responsabilidade do WMS. Caso haja necessidade de
cancelar um volume que já foi previamente integrado ao WCS, o WMS deverá realizar um UPDATE
na tabela transacional (Tabela de Envio), sinalizando essa condição ao WCS por meio de um
campo de controle específico.
Essa abordagem garante a rastreabilidade da integração e evita inconsistências decorrentes da
exclusão direta de registros.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** Elaboração do software de integração entre PLC e WCS  
**Score:** — (semantico) | **ID:** 752e1b03c7d75904

O fornecimento de software de integração WCS entre o PLC-Invent será de total responsabilidade
Invent, incluindo todo o controle de interface necessários nos pontos de decisão.
Exemplo de arquitetura:
A liberação das portas e protocolos abaixo se fazem necessária para o correto funcionamento da
automação:
Porta
Protocolo
Descrição de uso
HTTPS
Acesso ao sistema web instalado no servidor de aplicação
Socket TCP  Comunicação com o PLC pela IDE Tia Portal
Socket TCP  Comunicação com os equipamentos da esteira (PLC)
Socket TCP  Comunicação com os equipamentos da esteira (PLC)
Socket TCP
Porta do BackEnd
Socket TCP
Porta do BackEnd
Socket TCP
Porta Integração
Socket TCP
Porta Integração
Socket TCP  Comunicação com os concentradores (displays)
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Alguns exemplos de integração:
•
Desenvolver um sistema integrado de controle de consolidação de pedidos através das
informações recebidas da CONTRATANTE via integração de dados;
•
Integração será realizada através de troca de dados automática entre os sistemas
INVENT e CONTRATANTE (JSON por exemplo);
•
As licenças de banco de dados, sistemas operacionais e qualquer outra aplicação a serem
utilizadas serão fornecidas pela CONTRATANTE/CONTRATANTE FINAL;
•
Os hardwares de TI (desktops, servidores, roteadores etc.) a serem utilizados serão
fornecidos pela CONTRATANTE/CONTRATANTE FINAL;
•
Controle de saldo da posição e inventario é de responsabilidade CONTRATANTE;
•
Reabastecimento,
controle
de
lote/número
de série
é
de
responsabilidade
CONTRATANTE;
•
Geração e envio de pedidos é de responsabilidade CONTRATANTE.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** WEBSERVICE  
**Score:** — (semantico) | **ID:** 8deb4472906dc833

(domino internet c/ usuário+senha e
transf. online)

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** XML  
**Score:** — (nome-topico) | **ID:** da03068439eed663

(layout tipo tag – campos definidos)

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** 4. Integrações  
**Score:** — (semantico) | **ID:** 6cf6aa495b6db093

Para o correto funcionamento da automação, o WCS (Warehouse Control System) da Invent
enviará e receberá dados do sistema WMS da Nestlé. A comunicação será realizada por meio de
APIs REST, onde os documentos de integrações (IDOCs) são enviados.
Os endpoints de comunicação deverão ser definidos e compartilhados previamente pelas equipes
da Nestlé e da Invent, antes do início do período de testes de integração, conforme cronograma
estabelecido.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Controle de fluxo: Algumas regras de negócio podem exigir a definição de fluxos de  
**Score:** — (semantico) | **ID:** 6cb3abf59043c4cb

processamento específicos. A integração deve permitir o controle desses fluxos, como a
definição de condições de aprovação, etapas de revisão ou notificações para diferentes
partes envolvidas. Portanto, é essencial que a integração seja elaborada de forma
assertiva para atender às regras de negócio específicas da Nestlé. Isso permitirá que a
integração WCS se adapte às necessidades particulares da organização e facilitará a
implementação da solução.
Esses documentos seguem o formato XML (eXtensible Markup Language) e serão responsáveis
pelas trocas de informações entre os sistemas.
Para o projeto, foram mapeadas 4 (quatro) diferentes integrações, detalhadas abaixo:

---
**Origem:** [MARA IV] 2025 — `I25.9047 - Especificao de Software - Projeto_Mara IV.pdf`  
**Prioridade:** não  
**Heading:** 3. Integrações  
**Score:** — (semantico) | **ID:** 8a1a3b133504d595

As integrações de dados ocorrerão através de um serviço WEBSERVICE, que permanecerá
ativo no servidor. Desta forma, o cliente poderá enviar os dados a qualquer momento ao sistema
WCS da Invent, as integrações irão se manter conforme o último documento aprovado.

---
**Origem:** [MARA IV] 2025 — `I25.9047 - Especificao de Software - Projeto_Mara IV.pdf`  
**Prioridade:** não  
**Heading:** 6. Mapeamento Lógico e Integração de Software  
**Score:** — (semantico) | **ID:** e9c5ad044effbf3d

A expansão física do sorter com a inclusão de 9 novas rampas requer uma atualização
completa do mapeamento lógico tanto no WCS (Warehouse Control System) quanto na
lógica implementada no PLC, garantindo que todos os novos dispositivos sejam corretamente
reconhecidos, endereçados e integrados ao fluxo operacional.
O objetivo é assegurar que o sistema trate cada nova rampa como uma entidade funcional
completa, capaz de receber volumes, abrir e fechar pallets, acionar LEDs e interagir com
operadores e com o WMS.
Configuração do Mapa (WCS): O sistema deve ser configurado para reconhecer e
operar as 9 novas rampas.
Inclusão dos IDs dos LEDs e seus novos endereços correspondentes no mapeamento.
Os LEDs devem ser numerados sequencialmente conforme o padrão atual do site.

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 49a5f0d380d0bb63

Cada integração entre os sistemas mencionados (WMS e WCS Invent) pode ser configurada para seguir as regras de negócios da Master Higimed. Elas podem variar de acordo com as necessidades e particularidades de cada operação, e é importante que as integrações sejam flexíveis o suficiente para acomodar as diferentes regras.
A integração a ser trocada entre os sistemas WCS e WMS será realizada via REST JSON e a informação será baseada em pedidos, onde basicamente o WMS informa ao WCS o que deve ser separado para cada pedido. O nosso sistema processa as informações e realiza a separação dos itens do pedido e, ao final da separação, retorna ao WMS o que foi separado com sucesso ou se houve algum processo fora da separação desse pedido.
Para o projeto em questão, serão necessárias 4 (quatro) integrações para o correto funcionamento da automação, sendo elas:
Wave – WMS  WCS (POST)
Confirmação – WCS  WMS (POST)
Pallet – WCS  WMS (POST)
Pede Caixa – WCS → WMS (POST)
Campo | Descrição | Responsabilidade
Wave | Envia a onda com os pedidos e volumes a serem separados. | WMS  WCS (POST)
Picking Confirm | Retorno do WCS para o WMS com confirmação da separação (apenas fracionados). | WCS  WMS (POST)
Pallet (Aloca PTL) | Retorno do WCS para o WMS informando o fechamento do pallet. | WCS  WMS (POST)
Pede Caixa | Envio dos itens excedentes quando a caixa não comporta os itens restantes. | WCS → WMS (POST)

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Wave  
**Score:** — (json-no-corpo) | **ID:** 430f9f26470fd374

WMS  WCS
Integração para o WMS enviar para o WCS a onda com os pedidos a serem separados, tanto fracionados quanto full case.
A separação de Full Case é de responsabilidade do cliente. O WCS apenas realiza o desvio correto no sorter, por isso esses volumes devem estar devidamente integrados.
A onda poderá ser integrada com 1 (um) ou N pedidos com 1 (um) ou N volumes de fracionados e full case.
O WCS não faz controle de lote, ficando sob responsabilidade do WMS.
O peso unitário de cada item (em gramas) deve ser enviado para permitir a aferição de peso na balança do sorter.
Sugestão de JSON de Wave:
"onda": 123,
"pedidos": [
{
"num_pedido": 123658,
"rota": "123",
"cod_cliente": "548555",
"fracionados": [
{
"num_volume": 12365801,
"tipo_cx": "GD",
"itens": [
{
"endereco": "475247",
"ean": "1234567890123",
              "sku": "4579654100214",
              "qtde": 6,
"pesoun": 200
}
]
}
],
"fullcase": [
{
"num_volume": "9996521400014"
}
]
}
]
}
Campo | Descrição | Tipo | Obrigatório | Tamanho
onda | Número identificador da onda | Integer | Sim | 10
pedidos | Lista de pedidos contidos na onda | Array | Sim | -
num_pedido | Número do pedido | Integer | Sim | 15
rota | Código da rota | String | Sim | 10
cod_cliente | Código do cliente | String | Sim | 10
fracionados | Lista de volumes fracionados do pedido | Array | Sim | -
num_volume | Número do volume | Integer | Sim | 15
tipo_cx | Tipo da caixa (ex: GD, PQ) | String | Sim | 5
itens | Lista de itens a serem separados | Array | Sim | -
endereco | Endereço de picking (posição de coleta) | String | Sim | 15
sku | Código do produto (SKU) | String | Sim | 20
Ean | Código Ean Produto | String | Sim | 15
qtde | Quantidade solicitada do item | Integer | Sim | 5
pesoun | Peso unitário do item (em gramas) | Integer | Sim | 10
fullcase | Lista de volumes full case do pedido | Array | Sim | -
num_volume | Número do volume full case | String | Sim | 15

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Picking Confirm  
**Score:** — (json-no-corpo) | **ID:** c6edc3073dbe3d81

WCS  WMS
Integração para o WCS enviar ao WMS a confirmação de separação dos volumes fracionados. Essa integração não se aplica a volumes full case, cuja separação é de responsabilidade exclusiva do cliente.
O envio ocorre nos seguintes cenários:
Quando todos os produtos do volume são separados corretamente, a confirmação é enviada ao finalizar a separação na última estação da linha.
Caso o volume seja direcionado à conferência por qualquer motivo, a confirmação será enviada somente ao finalizar todo o processo de conferência.
Em caso de shortpicking, o WCS enviará a quantidade real separada. Exemplo: se foram solicitadas 10 unidades e separadas apenas 8, o WCS informará que 8 itens foram separados.
Sugestão de JSON:
{
"num_volume": 12365801,
"num_pedido": 123658,
"onda": "123",
"tipo_cx": "GD",
"itens": [
{
"endereco": "475247",
"sku": 4579654100214,
"qtde_solicitada": 6,
"qtde_separada": 6
},
{
"endereco": "365412",
"sku": 6541784412364,
"qtde_solicitada": 5,
"qtde_separada": 5
}
]
}
Campo | Descrição | Tipo | Obrigatório | Tamanho
num_volume | Número do volume separado | Integer | Sim | 15
num_pedido | Número do pedido associado ao volume | Integer | Sim | 15
Onda | Número da onda à qual o pedido pertence | String | Sim | 10
tipo_cx | Tipo da caixa (ex: GD, PQ) | String | Sim | 5
Itens | Lista de itens a serem separados | Array | Sim | -
Endereço | Endereço físico de coleta do item | String | Sim | 15
Sku | Código do produto (SKU) separado | Integer | Sim | 20
qtde_solicitada | Quantidade prevista no pedido para o SKU | Integer | Sim | 5
qtde_separada | Quantidade efetivamente separada pelo operador | Integer | Sim | 5

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Aloca PTL  
**Score:** — (json-no-corpo) | **ID:** 8f8e9912ddb3b78f

WCS  WMS
Integração para o WCS enviar ao WMS/KAIZEN a informação dos volumes alocados no pallet fechado. Ao realizar o fechamento do pallet (conforme seção 8.3), o WCS envia as informações de todos os volumes alocados, incluindo número do volume, número do pedido, identificação da onda, tipo da caixa, número sequencial do volume e total de volumes previstos.
Sugestão de JSON:
{
"rg_pallet":"000001",
"rota":"784",
"volumes":[
{
"num_volume":12365801,
"num_pedido":123658,
"onda":"651",
"tipo_caixa":"PQ",
"volume_atual":1,
"volume_total":6
},
{
"num_volume":12365802,
"num_pedido":123658,
"onda":"651",
"tipo_caixa":"GD",
"volume_atual":2,
"volume_total":6
},
{
"num_volume":5755789985201,
"num_pedido":123658,
"onda":"651",
"tipo_caixa":null,
"volume_atual":3,
"volume_total":6
},
{
"num_volume":5755789985201,
"num_pedido":123658,
"onda":"651",
"tipo_caixa":null,
"volume_atual":4,
"volume_total":6
},
{
"num_volume":9996521400014,
"num_pedido":123658,
"onda":"651",
"tipo_caixa":null,
"volume_atual":5,
"volume_total":6
},
{
"num_volume":1400014501401,
"num_pedido":123658,
"onda":"651",
"tipo_caixa":null,
"volume_atual":6,
"volume_total":6
}
]
}
Campo | Descrição | Tipo | Obrigatório | Tamanho
rg_pallet | Registro do pallet (código fixado fisicamente) | String | Sim | 10
Rota | Código da rota associada ao pallet | String | Sim | 10
volumes | Lista de volumes alocados no pallet | Array | Sim | -
num_volume | Número do volume alocado no pallet | Integer | Sim | 15
num_pedido | Número do pedido ao qual o volume pertence | Integer | Sim | 15
Onda | Número da onda relacionada ao pedido | String | Sim | 10
tipo_caixa | Tipo de caixa utilizada (PQ, GD, etc.) | String | Não | 5
volume_atual | Número sequencial do volume dentro do pedido | Integer | Sim | 2
volume_total | Total de volumes previstos para o pedido | Integer | Sim | 2

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Pede Caixa (POST)  
**Score:** — (json-no-corpo) | **ID:** 14480c4c00b42ed3

WCS → WMS
Integração disparada pelo WCS quando o operador aciona o botão "Pede Caixa" no PDV durante a separação. Essa situação ocorre quando o operador identifica que os itens restantes não cabem fisicamente na caixa atual.
Ao acionar essa funcionalidade, o WCS finaliza a separação da caixa atual com os itens já coletados e envia ao WMS as informações dos itens excedentes que não foram separados, para que o WMS gere uma nova etiqueta e um novo volume para os itens restantes. A nova caixa será priorizada no Order Start como próxima a ser enviada para a linha de separação.
Sugestão de JSON:
{
"num_pedido": 123658,
"onda": "123",
"num_volume_origem": 12365801,
"itens_excedentes": [
{
"endereco": "475247",
"sku": "4579654100214",
"qtde_solicitada": 6,
"qtde_separada": 0
},
{
"endereco": "365412",
"sku": "6541784412364",
"qtde_solicitada": 5,
"qtde_separada": 0
}
]
}
Campo | Descrição | Tipo | Obrigatório | Tamanho
num_pedido | Número do pedido | Integer | Sim | 15
onda | Número da onda à qual o pedido pertence | String | Sim | 10
num_volume_origem | Número do volume atual onde ocorreu o overflow | Integer | Sim | 15
itens_excedentes | Lista de itens que não couberam na caixa atual | Array | Sim | -
endereco | Endereço de picking (posição de coleta) | String | Sim | 15
sku | Código do produto (SKU) | String | Sim | 20
qtde_solicitada | Quantidade originalmente prevista para o item | Integer | Sim | 5
qtde_separada | Quantidade já separada na caixa atual (pode ser 0 ou parcial) | Integer | Sim | 5

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** 4.0 Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** b8417849695463a2

Para o correto funcionamento de todo o processo da automação o WCS irá enviar e receber dados
do WMS da C&A através de API Rest com envio de JSON, os Endpoints deverão ser passados
tanto do time WMS quanto do time Invent antes de iniciar o período de Teste de integração
informado no cronograma disponibilizado pelo time Invent aos times envolvidos (C&A e WMS),
assim como as informações pertinentes a todos os detalhes das APIs como por exemplos
autenticadores.
Teremos 2 integrações onde 1 (uma) integrações será enviada pelo WMS, e 1 (uma) enviada
pelo WCS ao WMS.
Todas as informações das integrações como estrutura, tipo de dados, quantidade de caracteres
devem respeitar as definições descritas abaixo.
Segue as integrações abaixo:

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** Tarefas  
**Score:** — (json-no-corpo) | **ID:** b24f29f5d45957a5

WMS → WCS
As integrações de Tarefas serão utilizadas para alimentar o sistema WCS com informações
referentes ao volume, como por exemplo, código de barras, destino, pedido, quantidade de itens
no volume e  entre outros dados descritos na tabela abaixo.
Com estas informações o WCS irá processar as informações e realizar o desvio de cada volume
de maneira correta, seguindo as parametrizações de tipoDestino e codDestino.
Deverá ser informado pelo WMS a quantidade de SKUs presentes na caixa para que o WCS valide
a quantidade de itens presentes dentro do volume via RFID. Caso não tenha a quantidade
informada o WCS deve rejeitar este volume por falta de itens.
Segue exemplo do JSON:
{
"MessageType": "Pack_Complete",
"Olpn": {
"OrgId": "CDS",
"FacilityId": "XXX",
"OlpnId": "1007599550",
"DestinationFacilityId": "LOJA1",
"OrderId": "79444811",
"ShipmentId": "SHIPMENT0001",
"ShipViaId": "ShipVia123",
"ContainerTypeId": "CDW_FLYER_PACKING_OUTBOUND",
"ContainerSizeId": "GG",
"TotalLpnQty": 1,
"Length": 0.22,
"Width": 0.68,
"Height": 0.68,
"StopId": 1,
"CarrierId": "TOTAL EXPRESS",
"ServiceLevelId": "EXPRESSO",
"StaticRouteId": "RotaNordeste",
}
}
Segue abaixo tabela com as informações de descrição, tipo do dado, tamanho (quantidade de
caracteres) :
CAMPO
DESCRIÇÃO
Obrigatório
TIPO
TAMANHO
MessageType
Cabeçalho da reunião
Sim
String
oLPN
lista
Não
Array
-
OrgId
Id do CD
Não
string
FacilityId
Id do CD
Não
String
OlpnId
Código da caixa que será lido no portal
Sim
String
DestinationFacilityId
Código de destino do volume
Sim
String
OrderId
Número do Pedido
Sim
String
ShipmentId
Código de embarque
Não
String
ShipViaId
Código de Embarque
Não
String
ContainerTypeId
Tipo de Volume
Não
String
ContainerSizeId
Tamanho da Caixa
Não
String
TotalLpnQty
Quantidade de itens dentro da caixa
Sim
Number
-
Length
Comprimento
Sim
Number
-
Width
Largura
Sim
Number
-
Height
Altura
Sim
Number
-
StopId
Ordem de entrada no caminhão
Não
Number
-
CarrierId
Transportador
Não
String
ServiceLevelId
Nível de serviço
Não
string
StaticRouteId
Nome da rota
Não
String
Observação: No contexto do WCS, a tarefa é atribuída ao destino dos volumes. Dessa forma, a
conclusão de todos os volumes destinados ao mesmo destino caracteriza o encerramento da
respectiva tarefa.
Os campos de altura, largura e comprimento não serão mandatórios neste primeiro momento
pois não são possíveis de serem enviados pelo WMS do cliente. Porém em caso de ajuste, o
sistema WCS estará preparado para receber essas informações e processa-las.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** Aloca Pallet  
**Score:** — (json-no-corpo) | **ID:** db81fab208d81063

WCS → WMS (POST)
Integração para o envio de confirmação de pallet montado na saída do sorter.
Essa integração será enviada quando o pallet estiver completo e/ou com todos os volumes
previstos antecipadamente na integração de tarefas.
WMS receberá a informação do pallet montado com a tarefa e com os volumes que foram
alocados no pallet.
Observação: O número do pallet (codigoMasterPallet) não deve se repetir.
{
"MessageType": "PalletStatus",
"PalletId": "PLT1000028919",
"PalletizeOlpnCriteriaId": "SEED_PalletizeOlpnCriteria",
"TransactionId": "Palletize Olpn"
"ContainerList": [{
"ContainerId": "1007599550"
}, {
"ContainerId": " 1007599551"
}, {
"ContainerId": " 1007599552"
}
]
}
CAMPO
DESCRIÇÃO
Obrigatório
TIPO
TAMANHO
MessageType
Cabeçalho
sim
Boolean
-
PalletId
Número agrupador do pallet
sim
string
PalletizeOlpnCriteriaId
Tipo de pallet. Informação fixa para o WCS
sim
string
TransactionId
Tipo de Transação. Informação fixa para o WCS
sim
string
ContainerList
Lista dos volumes alocados
Sim
array
-
ContainerId
Código do volume alocado
Sim
String

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** Cubagem de pallet  
**Score:** — (sinal-integracao-forte) | **ID:** 78a56790f493331c

Operador deverá cadastrar previamente no sistema WCS, as cubagens (M³) e quantidade de
caixas máximo suportado no pallet, para que o sistema WCS utilize dessas informações para
realizar a cubagem de pallet.
Deverá ser parametrizado uma cubagem de segurança, para quando o pallet alcançar esse valor
o operador seja notificado (via led) que o pallet está chegando em seu limite.
A operação C&A terá flexibilidade para definir se o pallet será fechado pela
parametrização de quantidade de caixas ou cubagem do pallet.
Por exemplo, foi parametrizado no sistema WCS que o operador deve fechar o pallet ao atingir
80% de sua ocupação de cubagem ou peso.
Sistema WCS ao atingir essa ocupação de 80% informará que o pallet está cheio, e não permitirá
a alocação de volumes sobressalentes.
WCS irá informar que o pallet está cheio notificando ao operador via cor do led que deve ficar
acesso até que o pallet seja lido o código master que será vinculado ao pallet. WCS fará
o cálculo de cubagem com as informações recebidas via integração de dimensões e peso dos
volumes induzidos no sorter. A posição ficará disponível novamente quando o operador reabrir a
posição.
Observação: A operação C&A não está preparada para enviar as medidas via integração de cada
volume para a realização da cubagem do pallet neste primeiro momento, porém o WCS deve
estar preparado para receber as informações e realizar as tratativas necessárias. A solução já
contempla para que assim que o WMS consiga nos informar as medidas precisas dos volumes,
não seja necessário a criação de uma nova integração.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** 9.2 Elaboração do software de integração entre PLC e WCS  
**Score:** — (semantico) | **ID:** 01255a972fc19cf4

O fornecimento de software de integração WCS entre o PLC-Invent será de total responsabilidade
Invent, incluindo todo o controle de interface necessários nos pontos de decisão.
Exemplo de arquitetura:
A liberação das portas e protocolos abaixo se fazem necessária para o correto funcionamento da
automação:
Porta
Protocolo
Descrição de uso
HTTPS
Acesso ao sistema web instalado no servidor de aplicação
Socket TCP  Comunicação com o PLC pela IDE Tia Portal
Socket TCP  Comunicação com os equipamentos da esteira (PLC)
Socket TCP  Comunicação com os equipamentos da esteira (PLC)
Socket TCP
Porta do BackEnd
Socket TCP
Porta do BackEnd
Socket TCP
Porta Integração
Socket TCP
Porta Integração
Socket TCP  Comunicação com os concentradores (displays)
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Socket TCP  Rede de Automação
Alguns exemplos de integração:
•
Desenvolver um sistema integrado de controle de consolidação de tarefas através das
informações recebidas da CONTRATANTE via integração de dados;
•
Integração será realizada através de troca de dados automática entre os sistemas
INVENT e CONTRATANTE (JSON por exemplo);
•
As licenças de banco de dados, sistemas operacionais e qualquer outra aplicação a serem
utilizadas serão fornecidas pela CONTRATANTE/CONTRATANTE FINAL;
•
Os hardwares de TI (desktops, servidores, roteadores etc.) a serem utilizados serão
fornecidos pela CONTRATANTE/CONTRATANTE FINAL;
•
Controle de saldo da posição e inventario é de responsabilidade CONTRATANTE;
•
Reabastecimento, controle de lote/número de série é de responsabilidade
CONTRATANTE;
•
Geração e envio de tarefas é de responsabilidade CONTRATANTE.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** WEBSERVICE  
**Score:** — (semantico) | **ID:** 82be9f38add18fc3

(domino internet c/ usuário+senha e
transf. online)

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** XML  
**Score:** — (nome-topico) | **ID:** 7e354419fea29847

(layout tipo tag – campos definidos)

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Especificação Técnica  
**Score:** — (sinal-integracao-forte) | **ID:** 56e30e6fec569532

O WCS Velox é uma aplicação que opera continuamente, processando em tempo real as informações dos volumes em movimento no armazém. Sua função principal é traduzir as ordens do eWM - SAP em comandos para os equipamentos físicos — e retornar os resultados (o que foi separado, o que foi cortado, o que divergiu) de volta ao sistema do cliente.
O sistema requer um banco de dados relacional dedicado para armazenar e rastrear todas as operações. O ambiente será provisionado pelo cliente com servidor [A DEFINIR], banco de dados [A DEFINIR] com especificações de [A DEFINIR], e [A DEFINIR] terminais de operação distribuídos no chão de fábrica. O acesso ao WCS é feito via navegador Google Chrome — único homologado para garantia de funcionamento correto de todas as telas.
Responsabilidade | Sistema Responsável | Observação
Cubagem | eWM - SAP (WMS) | WMS calcula e envia via integração
Order Start | Não contemplado neste escopo | —
Picking Full Case | eWM - SAP (WMS) coordena | WCS atua no fluxo físico
Reabastecimento | eWM - SAP (WMS) | WCS recebe tarefas prontas
Integração WCS–WMS | [A DEFINIR] | Protocolo e responsável a definir
Hardware (geral) | Cliente (100%) | Todos os equipamentos fornecidos pelo cliente
Infraestrutura de rede e elétrica | Invent | Conforme nota do kickoff
Etiquetas / Impressão | [A DEFINIR] | et_r=tbd — ver Capítulo 21

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Como Autenticar  
**Score:** — (json-no-corpo) | **ID:** 6b9689452c7e26df

Obter Token de Acesso :
Endpoint: POST /integracao/api/prod/autenticacao
Envie suas credenciais usando Basic Authentication para receber um token de acesso.
Headers Obrigatórios
- Content-Type: application/json
- Authorization: Basic <suas_credenciais_em_base64>
Como Criar o Header Authorization
1. Combine seu usuário e senha: usuario:senha
2. Codifique em Base64: dXN1YXJpbzpzZW5oYQ==
3. Adicione Basic antes: Basic dXN1YXJpbzpzZW5oYQ==
Resposta de Sucesso
{
"mensagem": "Autenticação realizada com sucesso.", "token":
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
Usar o Token nas Outras Requisições:
Após obter o token, inclua-o no header Authorization de todas as outras requisições:
Authorization: Bearer <seu_token_aqui>

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Exemplos Práticos  
**Score:** — (semantico) | **ID:** c2c30a75e878bf99

JavaScript:
const credenciais = btoa('meuusuario:minhasenha');
const response = await fetch('/integracao/api/hml/autenticacao',
{method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Basic ${credenciais}`
}});
const data = await response.json();
const token = data.token;
// 2. Usar token nas outras requisições
//
const apiResponse = await fetch('/integracao/api/hml/outros-endpoints', {
method: 'GET',
headers: {
'Authorization': `Bearer ${token}`
}
});
cURL:
# 1. Obter token
curl -X POST "/integracao/api/hml/autenticacao" \
-H "Content-Type: application/json" \
-H "Authorization: Basic bWV1dXN1YXJpbzptaW5oYXNlbmhh"
# 2. Usar token
curl -X GET "/integracao/api/hml/outros-endpoints" \
-H "Authorization: Bearer <seu_token_aqui>"
Python:
import requests
import base64
# 1. Autenticar
credenciais = base64.b64encode(b'meuusuario:minhasenha').decode()
response = requests.post('/integracao/api/hml/autenticacao', headers={
'Content-Type': 'application/json',
'Authorization': f'Basic {credenciais}'
})
token = response.json()['token']
# 2. Usar token
api_response = requests.get('/integracao/api/hml/outros-endpoints', headers={
'Authorization': f'Bearer {token}'
})

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 88edeb143a403f85

O WCS e o eWM - SAP se comunicam de forma bidirecional e contínua. O protocolo de integração utilizado é [A DEFINIR], com timeout máximo de [A DEFINIR] ms por chamada. O desenvolvimento e manutenção da integração são de responsabilidade de [A DEFINIR].
O fluxo principal funciona da seguinte forma: o eWM - SAP envia ao WCS as ordens de separação com todos os dados do pedido (itens, quantidades, destino, transportadora). O WCS processa essas ordens, coordena a separação no chão de fábrica e, ao finalizar cada volume, retorna ao eWM - SAP o resultado — confirmando o que foi separado ou sinalizando divergências (cortes ou shortpicking) para que o estoque seja atualizado.
Nº | Nome da integração | Sentido da comunicação | Observações
1 | Envio de ordens de separação | eWM - SAP → WCS Velox | Disparo por onda/pedido
2 | Retorno de separação / shortpicking | WCS Velox → eWM - SAP | Disparo ao fechar volume
3 | Confirmação de alocação no pallet | WCS Velox → eWM - SAP | Disparo ao fechar pallet no PTL

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Envio de Ordens de Separação  
**Score:** — (json-no-corpo) | **ID:** d10660570e46eba2

eWM - SAP → WCS Velox
O eWM - SAP envia ao WCS as ordens de separação contendo todos os dados necessários para execução no chão de fábrica. O disparo ocorre quando uma onda de separação é liberada pelo operador logístico no eWM - SAP.
Exemplo Payload (JSON):
{
"integracao": "[A DEFINIR] — campos e estrutura a confirmar com equipe eWM-SAP"
}
Campo | Tipo | Obrigatório | Exemplo | Descrição
[A DEFINIR] | [A DEFINIR] | [A DEFINIR] | [A DEFINIR] | [A DEFINIR]

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Retorno de Separação / Shortpicking  
**Score:** — (json-no-corpo) | **ID:** a3bd6e4d54135424

WCS Velox → eWM - SAP
O WCS retorna ao eWM - SAP o resultado de cada volume processado, informando a quantidade efetivamente separada e sinalizando divergências de shortpicking para atualização de estoque. O disparo ocorre quando o volume é finalizado no fluxo de separação (Full Case concluído ou corte registrado).
Exemplo Payload (JSON):
{
"integracao": "[A DEFINIR] — campos e estrutura a confirmar com equipe eWM-SAP"
}
Campo | Tipo | Obrigatório | Exemplo | Descrição
[A DEFINIR] | [A DEFINIR] | [A DEFINIR] | [A DEFINIR] | [A DEFINIR]

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Confirmação de Alocação no Pallet  
**Score:** — (json-no-corpo) | **ID:** 0453710e59559ddc

WCS Velox → eWM - SAP
O WCS notifica o eWM - SAP ao fechar um pallet no PTL, confirmando quais volumes foram alocados e em qual posição de destino. O disparo ocorre quando o pallet é encerrado pelo WCS (por peso, volume ou comando manual do supervisor).
Exemplo Payload (JSON):
{
"integracao": "[A DEFINIR] — campos e estrutura a confirmar com equipe eWM-SAP"
}
Campo | Tipo | Obrigatório | Exemplo | Descrição
[A DEFINIR] | [A DEFINIR] | [A DEFINIR] | [A DEFINIR] | [A DEFINIR]

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Atualização de Status para Na Rampa  
**Score:** — (sinal-integracao-forte) | **ID:** a258f8cac86d9bcc

Quando um volume no rejeito é corrigido e lido com sucesso no scanner fixo da estação, o WCS atualiza o status do LPN para "Na Rampa" e informa ao operador a rampa de destino correta para condução manual. A leitura no scanner fixo garante a atualização do dashboard e o envio da integração ao eWM - SAP.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Pendências a Definir  
**Score:** — (sinal-integracao-forte) | **ID:** 0981d3d06bb7426b

Item | Campo JSON de origem | Onde aparece
Código interno do projeto | ge.g2 ausente | Cap. 1, cabeçalho, filename do .docx
Sistema Operacional do servidor | if.if1 = tbd | Cap. 2
Banco de dados do servidor | if.if2 = tbd | Cap. 2
Especificações técnicas do servidor (CPU, RAM, disco) | if.if7 ausente | Cap. 2
Quantidade de terminais de operação | if.if5 ausente | Cap. 2
Responsável pela integração (Invent / Cliente / Ambos) | in.in_resp ausente | Cap. 6
Protocolo de integração com eWM-SAP | in.in1 ausente | Cap. 6
Timeout máximo das chamadas de integração (ms) | in.in3 ausente | Cap. 6
Campos e estrutura JSON das integrações | Entrevista Cirúrgica | Caps. 6.1, 6.2, 6.3
Peso máximo por pallet (kg) | Campo removido v4.0 | Caps. 7.1, 18
Altura máxima por pallet (mm) | Campo removido v4.0 | Cap. 18
Margem de segurança de cubagem do pallet (%) | Campo removido v4.0 | Cap. 7.1
Quantidade de impressoras no Full Case | Campo removido v4.0 | Cap. 8.3
Quantidade de corredores de Full Case | Campo removido v4.0 | Cap. 9.3
Número de leitores na mesa de rejeito | Sem campo JSON | Cap. 17
Responsabilidade pelas etiquetas (WCS ou WMS) — BLOQUEANTE PARA DESENVOLVIMENTO | et.et_r = tbd | Cap. 21
Quantidade de impressoras térmicas no projeto | et.et1 ausente | Cap. 21
Distribuição física das impressoras no CD | et.et_dist ausente | Cap. 21
Dimensão das etiquetas | Campo removido v4.0 | Cap. 21
Tipo de código de barras | Campo removido v4.0 | Cap. 21
Conteúdo do QR Code nas etiquetas | Campo removido v4.0 | Cap. 21
Formato de exportação dos relatórios | Campo removido v4.0 | Cap. 20
Tipo de display PTL (hardware físico ou tablet) | pt.pt_tipo_disp ausente | Cap. 18
Quantidade de displays/TVs PTL | pt.pt_tvs_ptl ausente | Cap. 18
Impressão de romaneio ao fechar pallet | pt.pt9 = tbd | Cap. 18
Pallet exclusivo para itens perigosos | pt.pt8 = tbd | Cap. 18
Agrupador de palletização | pt.pt_ag ausente | Cap. 18
Critério de desvio para a rampa do Sorter | so.st_criterio ausente | Caps. 15, 16
Agrupador de rampas do Sorter | so.st_ag ausente | Cap. 16
SLA do portal ao primeiro HPD (segundos) | so.st4 ausente | Cap. 15
Sinaleiros luminosos nas rampas (sim/não) | so.st10 ausente | Cap. 17
Cross-check no Sorter (sim/não) | so.st7 ausente | Cap. 15
Lista de rotinas WCS | Sem campo JSON | Cap. 2
Stakeholders (nome, cargo, empresa) | Não declarados | Cap. 4
Responsável da ES na Invent (nome, e-mail, depto, telefone) | Não declarados | Capa do .docx

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 4. Integrações  
**Score:** — (sinal-integracao-forte) | **ID:** 3d5d7019912e5341

As integrações de dados ocorrerão através de um serviço WEBSERVICE (JSON REST), que
permanecerá ativo no servidor. Desta forma, o cliente poderá utilizar a qualquer momento o
sistema WCS da Invent. Fornecendo as informações detalhadas abaixo.
A rota das integrações de envio é dupla, ou seja, o envio das informações ocorre partindo do
sistema WMS do cliente para o sistema WCS da Invent, e vice-versa.
Teremos 8 integrações entre sistemas:
Nº
Nome da Integração
Sentido da Comunicação
Tipo
Produtos
WMS → WCS
POST
Wave
WMS → WCS
POST
Picking Confirm
WCS → WMS
POST
Picking Cart Confirm
WMS → WCS
POST
Pede Caixa
WCS → WMS
POST
Corte de Item em Andamento
WMS → WCS
POST
Conferência WMS
WMS → WCS
POST
Aloca PTL
WCS → WMS
POST

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Produtos  
**Score:** — (json-no-corpo) | **ID:** 28ec8c95dcc12cf1

Essa integração tem como objetivo cadastrar os produtos no WCS, a integração já existia
previamente, porém agora com a adição do “peso_item” fazendo com que tenhamos os dados
previamente para utiliza-los na pesagem tanto no picking_cart (KAIZEN) quando após a linha
de picking A.
Obs: O peso deve ser enviado em gramas (Int).
API que era usada anteriormente: http://192.168.0.5:3010/api/prod/produtos
WMS → WCS - Exemplo Envio JSON:
"cod_item": 262604,
"nome_item ": "BIC (BRINDE) DISPLAY BAN FARMA BIC FL 3PL",
"tipo_item": "FRACIONADO",
"peso_item": 250
Campo
Tipo
Obrigatório
Exemplo
cod_item
Int
Sim
262604
nome_item
String
Sim
BIC (BRINDE) DISPLAY BAN
FARMA BIC FL 3PL",
tipo_item
String
Sim
FRACIONADO
peso_item
Int
Sim
250 (gramas)

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Wave  
**Score:** — (json-no-corpo) | **ID:** c5171bf900aaf169

Integração para o WMS enviar para o WCS a onda com diversos pedidos tanto full case quanto
fracionados.
Lembrando que a separação de Full Case será de responsabilidade do cliente, WCS apenas fará
o desvio correto no sorter, por isso esses volumes Full Case deverão estar devidamente
integrados no WCS.
Volumes full case também deverão ser integrados no sistema WCS.
A onda poderá ser integrada com 1 (um) ou N pedidos com 1 (um) ou N volumes de fracionados
e full case.
Obs.: Para volumes do tipo Picking Cart, o campo "num_volume" será enviado com o código da
caixa plástica utilizada na separação, e o campo "tipo_cx" deverá vir preenchido com o valor "CP"
(Caixa Plástica), permitindo ao WCS identificar e tratar corretamente esses volumes. E quando a
integração de Wave tiver um pedido de Picking Cart, o campo "endereco" será enviado como
"N/A".
WMS → WCS - Exemplo Envio JSON:
"onda": 123,
"pedido": [
"num_pedido": 123658,
"volumes": "",
"rota": "123",
"cod_om": "123456",
"praca": "SAO PAULO",
"agrup_cliente": "ABC",
"cod_cliente": "548555",
"conferencia": "Y",
"cliente_novo": "Y",
"caixas": [
"fracionados": [
"volumes": [
"num_volume": 12365801,
"tipo_cx": "GD",
"itens": [
"endereco": "475247",
"sku": 4579654100214,
"qtde": 6
"endereco": "365412",
"sku": 6541784412364,
"qtde": 5
[
"num_volume": 12365802,
"tipo_cx": "GD",
"itens": [
"endereco": "542010",
"sku": 6360001401500,
"qtde": 21
],
"fullcase": [
"num_volume": 9996521400014,
"qtde": 2
"num_volume": 5755789985201,
"qtde": 2
"num_volume": 1400014501401,
"qtde": 7
"num_pedido": 547204,
"rota": "123",
"cod_om": "123456",
"praca": "SAO PAULO",
"agrup_cliente": "ABC",
"cod_cliente": "564758",
"conferencia": "N",
"cliente_novo": "Y",
"caixas": [
"fracionados": [
"volumes": [
"num_volume": 54720401,
"tipo_cx": "GD",
"itens": [
"endereco": "3214569871",
"sku": 9874103695208,
"qtde": 5
"endereco": "3214569871",
"sku": 5855541223690,
"qtde": 2
],
"fracionados": [
"num_volume": 6366985630014,
"sku": 6366985630014,
"qtde": 2
"num_volume": 3976142540148,
"sku": 3976142540148,
"qtde": 4
"num_volume": 84887455510004,
"sku": 84887455510004,
"qtde": 1
Campo
Tipo
Obrigatório
Exemplo
onda
Int
Sim
12365801
pedido
String
Sim
OK
num_pedido
Int
Sim
547204
rota
String
Sim
cod_om
String
Sim
123456
praca
String
Sim
SAO PAULO
agrup_cliente
String
Sim
ABC
cod_cliente
String
Sim
564758
conferencia
String
Sim
N
cliente_novo
String
Sim
Y
caixas
Array
Sim
-
fracionados
String
Sim
-
fullcase
String
Sim
-
volumes
Array
Sim
-
num_volume
Int
Sim
54720401
tipo_cx
String
Sim
GD
qtde
Int
Sim
itens
Array
Sim
-
endereco
String
Sim
3214569871
sku
Int
Sim
9874103695208

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Picking Confirm  
**Score:** — (json-no-corpo) | **ID:** eea3a50ea486189b

Integração para o WCS enviar para o WMS, a confirmação de picking. Que será enviada as
informações de confirmação de separação do volume fracionado e picking cart do pedido.
Caso o volume tenha 100% dos seus produtos separados, sem shortpicking e nenhuma regra de
conferência seja ativada para esse volume, essa integração será enviada ao finalizar a separação
na última estação de separação.
Caso o volume seja direcionado a conferência por qualquer motivo, essa integração será enviada
ao finalizar todo o processo de conferência. Para volumes full case, não teremos integração de
Picking Confirm.
WCS não envia a confirmação de separação de full case, pois, a separação de full case é de
responsabilidade do cliente.
Obs: Após o recebimento das informações o KAIZEN deverá dar baixa no estoque dos itens
coletados.
WCS → WMS - Exemplo Envio JSON:
"num_volume": 12365801,
"num_pedido": 123658,
"onda": "123",
"tipo_cx": "GD",
"itens": [
"endereco": "475247",
"sku": 4579654100214,
"qtde_solicitada": 6,
"qtde_separada": 6
"endereco": "365412",
"sku": 6541784412364,
"qtde_solicitada": 5,
"qtde_separada": 5
Campo
Tipo
Obrigatório
Exemplo
num_volume
Int
Sim
12365801
num_pedido
Int
Sim
123658
onda
String
Sim
tipo_cx
String
Sim
GD
itens
Array
Sim
-
endereco
String
Sim
475247
sku
Int
Sim
4579654100214
qtde_solicitada
Int
Sim
qtde_separada
Int
Sim

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Picking Cart Confirm  
**Score:** — (json-no-corpo) | **ID:** b32a0d2366e35b63

Esta integração é fundamental para fazer a transição de responsabilidade entre o sistema
KAIZEN (responsável pela coleta dos itens na área A4) e o WCS Velox (responsável pela
Conferência de Peso, Packing e Sorter).
Quando o operador do KAIZEN finaliza a coleta e fecha uma caixa plástica, o sistema KAIZEN
deve enviar esta mensagem para o WCS Velox. O WCS armazenará os dados recebidos (itens,
pedido, quantidades e pesos) vinculados ao número da caixa plástica.
Obs: Um único pedido pode ter mais de um volume vinculado.
Quando esta caixa plástica for lida na balança de Conferência do WCS, o sistema Velox usará
esta informação para calcular o peso esperado total e compará-lo com o peso real aferido na
balança, validando ou rejeitando o volume para conferência manual.
Obs: Após o recebimento das informações o KAIZEN deverá dar baixa no estoque dos itens
coletados.
WMS → WCS - Exemplo Envio JSON:
"num_volume ": "VEN29389232", (Código da Caixa Plástica)
"num_pedido": 123658,
"tipo_cx": "GD", (Caixa Plástica = CP ou Caixa de Papelão que vai para o Sorter = GD)
"caixa_op": "CP000456", (Caixa Plástica Operacional)
"itens": [
"endereco": "A4-01-01",
"sku": "7891000000028",
"qtde_solicitada": 5,
"qtde_separada": 5
"endereco": "A4-01-02",
"sku": "7891000000035",
"qtde_solicitada": 2,
"qtde_separada": 2
Campo
Tipo
Obrigatório
Exemplo
num_volume
String
Sim
ETQ123456
num_pedido
Int
Sim
123658
tipo_cx
String
Sim
CP
caixa_op
String
Sim
CP000456
itens
Array
Sim
-
endereco
String
Sim
A4-01-01
sku
String
Sim
7891000000028
qtde_solicitada
Int
Sim
qtde_separada
Int
Sim

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Conferência WMS  
**Score:** — (json-no-corpo) | **ID:** 36cafcccee31b483

Integração para o WMS enviar ao Velox, informações do volume conferido pelo WMS. Quando o
operador finalizar a conferência via coletor WMS, Velox recebe que o volume foi conferido e
conclui o volume no Velox retirando assim de sua lista de pendência.
WMS → WCS - Exemplo Envio JSON:
"num_volume": 12365801,
"conferencia": "OK"
Campo
Tipo
Obrigatório
Exemplo
num_volume
Int
Sim
12365801
conferencia
String
Sim
OK

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Pede caixa  
**Score:** — (json-no-corpo) | **ID:** f82ede8e0fd2e702

Durante a separação no PBL (nas áreas A2, A3 ou A), caso os itens solicitados para um pedido
não caibam fisicamente no volume (caixa plástica), o operador terá a opção de acionar a
funcionalidade "Pede Caixa" no botão (LED) da estação.
Nesta integração, o WCS informará ao WMS exatamente quais itens e quantidades foram
separados (ex: Solicitado: 10, Separado: 8) e, por consequência, quais ainda estão pendentes
(faltantes: 2).
O WMS, ao receber esta confirmação parcial, será responsável por gerar uma nova tarefa (um
novo volume/Pega) contendo os itens e quantidades faltantes. Esta nova tarefa entrará na fila
de separação do WCS para ser coletada em uma nova caixa, continuando assim o fluxo do
pedido. Após ambas coletadas, imediatamente, o WCS enviará a integração 5.3 Picking
Confirm para este volume.
"numeroOm": "123456",
"num_volume": 12365801,
"itens": [
"endereco": "475247",
"sku": 4579654100214,
"qtde": 6
"endereco": "365412",
"sku": 6541784412364,
"qtde": 5
Campo
Tipo
Obrigatório
Exemplo
numeroOm
String
Sim
123456
num_volume
Int
Sim
12365801
itens
Array
Sim
-
endereco
String
Sim
475247
sku
Int
Sim
4579654100214
qtde
Int
Sim

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Corte de Item em Andamento  
**Score:** — (json-no-corpo) | **ID:** 016465fe0c75c7bc

Esta integração é utilizada quando o WMS (após já ter enviado uma onda) precisa cancelar
itens específicos de um pedido que ainda está em processo de separação no WCS.
Ao receber esta solicitação, o WCS Velox tentará remover os itens solicitados das tarefas de
picking. Se o item já tiver sido coletado ou estiver em uma caixa em transporte, o WCS ignorará
o corte daquele item, e o processo seguirá normalmente, sendo a divergência tratada
posteriormente.
WMS → WCS - Exemplo Envio JSON:
"onda": 12345,
"num_pedido": 123658,
"itens_cortados": [
"sku": "7891000000035",
"motivo": "Cancelamento parcial"
"sku": "7891000000042",
"motivo": "Bloqueio de qualidade"
Campo
Tipo
Obrigatório
Exemplo
onda
Int
Sim
12345
num_pedido
Int
Sim
123658
itens_cortados
Array
Sim
-
sku
String
Sim
7891000000042
motivo
String
Sim
Cancelamento parcial

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Aloca PTL  
**Score:** — (json-no-corpo) | **ID:** fc3f37c3f4b1e1ce

Integração para o WCS enviar para o WMS a informação dos volumes alocados no pallet fechado.
Quando operador verificar fisicamente que o pallet está cheio, deverá realizar a leitura da etiqueta
de fechamento de pallet, e nesse momento é enviado a integração com as informações sugeridas
abaixo.
WCS → WMS - Exemplo Envio JSON:
"rg_pallet": "000001",
"rota": "784",
"volumes": [
"num_volume": 12365801,
"num_pedido": 123658,
"onda": "651",
"tipo_caixa": "PQ",
"volume_atual": 1,
"volume_total": 6
"num_volume": 12365802,
"num_pedido": 123658,
"onda": "651",
"tipo_caixa": "GD",
"volume_atual": 2,
"volume_total": 6
"num_volume": 5755789985201,
"num_pedido": 123658,
"onda": "651",
"tipo_caixa": null,
"volume_atual": 3,
"volume_total": 6
"num_volume": 5755789985201,
"num_pedido": 123658,
"onda": "651",
"tipo_caixa": null,
"volume_atual": 4,
"volume_total": 6
"num_volume": 9996521400014,
"num_pedido": 123658,
"onda": "651",
"tipo_caixa": null,
"volume_atual": 5,
"volume_total": 6
"num_volume": 1400014501401,
"num_pedido": 123658,
"onda": "651",
"tipo_caixa": null,
"volume_atual": 6,
"volume_total": 6
Campo
Tipo
Obrigatório
Exemplo
rg_pallet
Int
Sim
000001
rota
Int
Sim
volumes
Array
Sim
-
num_volume
Int
Sim
1400014501401
num_pedido
Int
Sim
123658
onda
String
Sim
tipo_caixa
String
Sim
null
volume_atual
Sim
volume_total
Sim

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Prioridade:** não  
**Heading:** Confirmação de Fechamento (WCS -> WMS)  
**Score:** — (json-no-corpo) | **ID:** e277cac11767e473

Direção | WCS → WMS
Método HTTP | POST
Descrição | Informação de fechamento de pallet com etiqueta master e volumes
Gatilho | Pallet atinge critério de fechamento (altura, peso ou volumes completos)
Descrição Funcional
Esta integração ocorre no final do fluxo de expedição, após todos os volumes terem passado pela conferência e pesagem. Ela agrupa os identificadores de volume individuais sob um único ID de Pallet, permitindo que o WMS processe o carregamento de forma unitizada em vez de caixa por caixa.
Regras Específicas:
Consolidação de Cubagem: O campo volume_m3 deve representar a soma do volume dos itens mais a ocupação física do pallet (cubagem total da carga).
Integridade do Soma (Trava de Segurança): O WMS deve validar se o campo total_volume coincide com a contagem de itens enviados no array volumes. Divergências indicam falha na montagem da mensagem ou perda de volume no processo.
Rastreabilidade: O id_pallet deve ser único. Se o pallet for reaproveitado, o WMS deve garantir que o histórico anterior foi baixado antes de aceitar a nova consolidação.
Peso Bruto: O campo peso_kg deve ser a soma exata dos pesos aferidos individualmente na balança dinâmica acrescido do peso da base (madeira/plástico) do pallet.
Obs: comentar brevemente sobre matriz de fragilidade
Exemplo JSON:
{
"data_evento": "2026-01-14T13:00:00Z",
"id_mensagem": "FP-20260114130000",
"pallet": {
"id_pallet": "0001254",
"volume_m3": 1.55,
"peso_kg": 250,
"volumes": [
{
"id_volume": "VM0078541"
},
{
"id_volume": "VM0078542"
},
{
"id_volume": "VM0078543"
},
{
"id_volume": "VM0078544"
},
{
"id_volume": "VM0078545"
}
],
"total_volume": 5
}
}
Campo | Tipo | Obrigatório | Obs
data_evento | String | Sim | Data/Hora ISO 8601.
id_mensagem | String | Sim | Identificador único da mensagem.
id_pallet | String | Sim | Identificador único da unidade de carga (Pallet).
id_volume | String | Sim | Identificador único da caixa/volume contido no pallet.
volume_m3 | Decimal | Sim | Volume total ocupado pelo pallet.
peso_kg | Decimal | Sim | Peso total bruto do pallet em quilogramas.
total_volume | Integer | Sim | Quantidade total de volumes consolidados.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Prioridade:** não  
**Heading:** Cancelamento de Pedidos (Fluxo Visual PTM)  
**Score:** — (json-no-corpo) | **ID:** 0bf459909aeb16f5

Esta integração permite que o WMS solicite a interrupção imediata da montagem de uma rota ou cliente específico que já esteja em processo no chão de fábrica. Como não há automação mecânica para desviar volumes, o processo de cancelamento nesta fase é gerido visualmente através do Monitor/TV.
Descrição Funcional:
Recebimento do Cancelamento:
Ao receber a integração INT-CANCELAMENTO, o WCS identifica se o pedido está vinculado a alguma Posição Ativa.
Sinalização Visual (O "X" Vermelho):
Imediatamente, o Monitor/TV altera o status daquela posição específica.
A contagem de volumes é substituída por um "X" Vermelho Gigante com a mensagem "CANCELADO - REMOVER ITENS".
O sistema bloqueia qualquer nova bipagem de itens para aquele destino. Se um operador tentar bipar um item para este pedido, o coletor emitirá um alerta sonoro de bloqueio.
Processo de Limpeza (Logística Reversa):
Início da Retirada (X Amarelo): O operador dirige-se à posição cancelada e realiza a leitura do QR Code da Posição.
Ação Visual: O "X" Vermelho muda para um "X" Amarelo, indicando para a supervisão que a limpeza está Em Andamento.
Finalização: Após retirar fisicamente todos os volumes do pallet e devolvê-los à zona de expedição/devolução (responsabilidade do WMS), o operador realiza uma segunda leitura do QR Code da Posição.
Resultado: O sistema libera a posição, deixando-a "Disponível" para receber uma nova rota/cliente.
Exemplo JSON:
{
"data_evento": "2026-02-25T14:00:00Z",
"id_mensagem": "CAN-20260225140000",
"cancelamento": {
"pedido": 123456,
"identificador": "ROT-ZN-SUL-001",
"motivo": "SOLICITACAO_COMERCIAL"
}
}
Campo | Tipo | Obrigatório | Obs
data_evento | String | Sim | Data/Hora ISO 8601.
id_mensagem | String | Sim | Identificador único da mensagem.
pedido | Integer | Sim | Número do pedido ou ID da Rota que deve ser cancelado.
identificador | String | Sim | ID único da carga/onda associada ao pedido.
motivo | String | Sim | Descritivo do cancelamento (Ex: ERRO_FISCAL, CORTE_TOTAL).

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Prioridade:** não  
**Heading:** Tratamento de Avarias no PTP  
**Score:** — (semantico) | **ID:** 9024170f7257a6e2

Integração de Avaria (OPICIONAL): nesse caso o operador seleciona apenas o item e nosso sistema solicita ao WMS outro mesmo item para completar o pedido, para não travar a posição
Tela especifica para isso, no coletor ele entra nessa tela e bipa o item que avariou e nosso sistema solicita ao wms esse item para completarmos o pedido evitando a trava da posição

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Closing Confirmation (WCS -> WMS)  
**Score:** — (json-no-corpo) | **ID:** 86b306d752db8715

Direction | WCS → WMS
HTTP Method | POST
Description | Pallet closing information with master label and volumes.
Trigger | Pallet reaches closing criteria (height, weight, or complete volumes).
Functional Description
This integration occurs at the end of the shipping flow, after all volumes have passed through checking and weighing. It groups the individual volume identifiers under a single Pallet ID, allowing the WMS to process the loading in a unitized way instead of box by box.
Specific Rules:
Cubing Consolidation: The volume_m3 field must represent the sum of the item volumes plus the physical footprint of the pallet (total cargo cubing).
Sum Integrity (Safety Lock): The WMS must validate if the total_volume field matches the count of items sent in the volumes array. Divergences indicate a failure in the message assembly or volume loss in the process.
Traceability: The id_pallet must be unique. If the pallet is reused, the WMS must ensure that the previous history was cleared before accepting the new consolidation.
Gross Weight: The peso_kg field must be the exact sum of the weights measured individually on the dynamic scale plus the weight of the pallet base (wood/plastic).
JSON Example:
{
"event_date": "2026-01-14T13:00:00Z",
"message_id": "FP-20260114130000",
"pallet": {
"pallet_id": "0001254",
"volume_m3": 1.55,
"weight_kg": 250,
"volumes": [
{
"volume_id": "VM0078541"
},
{
"volume_id": "VM0078542"
},
{
"volume_id": "VM0078543"
},
{
"volume_id": "VM0078544"
},
{
"volume_id": "VM0078545"
}
],
"total_volume": 5
}
}

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Order Cancellation (PTM Visual Flow)  
**Score:** — (json-no-corpo) | **ID:** 783ffb133a7b30d2

This integration allows the WMS to request the immediate interruption of the assembly of a specific route or client that is already in process on the shop floor. As there is no mechanical automation to divert volumes, the cancellation process in this phase is managed visually through the Monitor/TV.
Functional Description:
Cancellation Receipt:
Upon receiving the INT-CANCELLATION integration, the WCS identifies if the order is linked to any Active Position.
Visual Signaling (The Red "X"):
Immediately, the Monitor/TV changes the status of that specific position.
The volume count is replaced by a Giant Red "X" with the message "CANCELLED - REMOVE ITEMS".
The system blocks any new scanning of items for that destination. If an operator tries to scan an item for this order, the collector will emit a blocking sound alert.
Cleaning Process (Reverse Logistics):
Start of Removal (Yellow X): The operator goes to the cancelled position and scans the Position QR Code.
Visual Action: The Red "X" changes to a Yellow "X", indicating to the supervision that the cleaning is In Progress.
Finalization: After physically removing all volumes from the pallet and returning them to the shipping/return zone (WMS responsibility), the operator performs a second scan of the Position QR Code.
Result: The system frees the position, leaving it "Available" to receive a new route/client.
JSON Example:
{
"data_evento": "2026-02-25T14:00:00Z",
"id_mensagem": "CAN-20260225140000",
"cancelamento": {
"pedido": 123456,
"identificador": "ROT-ZN-SUL-001",
"motivo": "SOLICITACAO_COMERCIAL"
}
}

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Damage Handling in PTP  
**Score:** — (json-no-corpo) | **ID:** fcc170715fff4149

This integration aims to solve the problem in case any damage occurs during the shipping process (for example, an operator drops an item and causes damage).
There will be a specific screen for handling damages where the operator will access this screen and must scan the damaged product so that the WCS requests the same product from the WMS and that order continues to be assembled.
Upon receiving the substitute product, the operator scans it and confirms on the damage screen that they received the substitute product, where Velox will release that position so the task can proceed normally.
Obs: That position remains locked until another product replaces the damaged one.
JSON Example:
{
"event_date": "2026-03-01T14:30:00Z",
"message_id": "AVR-20260301-001",
"replacement": {
"order": 880055,
"identifier": "ROUTE-MIAMI-01",
"blocked_position": "POS-05",
"damaged_item": {
"sku": "HW-LIGHT-02",
"quantity": 1,
"reason": "AVARIA_EXPEDICAO"
}
}
}

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Points to Define (Pending Issues)  
**Score:** — (semantico) | **ID:** 1f29b99aab8591ed

Label Printing: Define the printing flow for the Pallet Label (Master). Should the WCS command a Zebra printer directly or will the WMS generate the label after receiving the closing integration?
