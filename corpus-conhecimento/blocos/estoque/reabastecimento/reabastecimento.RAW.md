# reabastecimento.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 12. Reabastecimento – Estoque Velox  
**Score:** — (semantico) | **ID:** fdb86a10c4efb717

O processo de reabastecimento no WCS Velox tem como objetivo garantir que as posições de
picking e buffer mantenham níveis de estoque adequados para atender à demanda operacional,
evitando interrupções nas atividades de separação.
O reabastecimento pode ocorrer a partir de duas origens:
Transfer → Buffer ou Picking
Buffer → Picking
A gestão e execução deste processo são de responsabilidade do WCS, utilizando coletores
disponibilizados pelo cliente.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 12.1. Gatilhos para Criação da Tarefa de Reabastecimento  
**Score:** — (semantico) | **ID:** e4aa52f5e8a7f4cd

A geração de tarefas de reabastecimento pode ocorrer de duas formas: automática ou manual.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** Manual:  
**Score:** — (semantico) | **ID:** 47dff468dc4f4f40

Além do disparo automático, o WCS oferece uma tela dedicada para criação manual de
tarefas de reabastecimento. Essa funcionalidade é utilizada principalmente para demandas
pontuais ou emergenciais, como:
Solicitação de reabastecimento de um SKU específico, independentemente dos
parâmetros de estoque mínimo ou previsão de consumo.
Antecipação de reabastecimentos por decisão operacional.
Ajuste rápido em posições que tiveram perda, dano ou erro de contagem.
Fluxo da Criação Manual:
1. O operador ou gestor acessa a tela "Criação Manual de Reabastecimento".
2. Na tela, é possível filtrar e selecionar:
o
Item (SKU)
o
Origem (Transfer ou Buffer)
o
Destino (Buffer ou Picking)
3. Após preencher os campos obrigatórios, o usuário confirma a criação da tarefa.
4. O WCS registra a solicitação e insere a nova tarefa na fila de reabastecimentos
pendentes, com indicação de prioridade e tipo de origem.
5. Os operadores logados nos postos responsáveis pelo reabastecimento visualizam a nova
tarefa em tempo real e podem iniciá-la pelo coletor.
Esse processo garante que a operação tenha flexibilidade para agir de forma proativa, sem
depender exclusivamente das regras automáticas, mantendo o controle e rastreabilidade de todas
as movimentações.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 12.3. Fluxo de Reabastecimento com Origem no Transfer  
**Score:** — (semantico) | **ID:** b3d2c599ff3a7923

Quando a origem do reabastecimento é o Transfer, é obrigatória a execução do processo de
decanting antes da movimentação.
Etapas do Decanting
O decanting consiste na transferência dos itens de uma ou mais caixas (ILPNs) do Transfer para
bins, garantindo organização e rastreabilidade. O processo contempla as seguintes regras e
ações:
Adicionar múltiplas ILPNs a uma única bin
o
Permitido apenas se todas as ILPNs forem do mesmo SKU e lote.
o
Garante consolidação correta dos itens.
Adicionar uma única ILPN a duas ou mais bins
o
Necessário acionar a flag de divisão no sistema.
o
O operador informa a quantidade a ser migrada para a nova bin.
o
O estoque do Transfer é atualizado automaticamente.
Regras de Consolidação
o
Somente ILPNs com mesmo SKU e lote podem ser consolidadas na mesma bin.
Identificação Única das Bins
o
Cada bin possui código único, garantindo controle e rastreabilidade.
Execução do Reabastecimento (Transfer → Buffer ou Picking)
Após o decanting, o operador executa o reabastecimento seguindo o fluxo:
1. Leitura da posição de origem (Transfer).
2. Leitura de todas as caixas plásticas (bins) que serão movimentadas.
3. Leitura da posição de destino (Buffer ou Picking).

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 12.4. Fluxo de Reabastecimento com Origem no Buffer  
**Score:** — (semantico) | **ID:** 9b170b0c3bda6eac

Quando a origem é o Buffer, entende-se que o processo de decanting já foi realizado.
O operador executa o reabastecimento seguindo o fluxo:
1. Leitura da posição de origem (Buffer).
2. Leitura de todas as caixas plásticas (bins) que serão movimentadas.
3. Leitura da posição de destino (Picking).

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Reabastecimento – Estoque Velox  
**Score:** — (semantico) | **ID:** 42dbf6e430836708

O processo de reabastecimento no WCS Velox tem como objetivo garantir que as posições de picking mantenham níveis de estoque adequados para atender à demanda operacional, evitando interrupções nas atividades de separação.
O reabastecimento pode ocorrer da seguinte forma:
Transfer → Picking
A gestão e execução deste processo são de responsabilidade do WCS, utilizando coletores disponibilizados pelo cliente.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Gatilhos para Criação da Tarefa de Reabastecimento  
**Score:** — (semantico) | **ID:** 813be6dd9e46f2c4

A geração de tarefas de reabastecimento pode ocorrer de duas formas: automática ou manual.
Automática:
O WCS monitora continuamente os níveis de estoque e cria tarefas de reabastecimento de forma automática quando um dos critérios abaixo for atendido:
Saldo abaixo do mínimo operacional: Quando a posição de destino atinge ou fica abaixo do estoque mínimo parametrizado no sistema.
Manual:
Além do disparo automático, o WCS oferece uma tela dedicada para criação manual de tarefas de reabastecimento. Essa funcionalidade é utilizada principalmente para demandas pontuais ou emergenciais, como:
Solicitação de reabastecimento de um SKU específico, independentemente dos parâmetros de estoque mínimo.
Antecipação de reabastecimentos por decisão operacional.
Fluxo da Criação Manual:
O operador acessa a funcionalidade de Reabastecimento no coletor.
O operador realiza a leitura da caixa do item (ILPN).
O sistema:
Identifica o SKU associado à ILPN
Exibe a quantidade total disponível na ILPN lida
O operador informa ou seleciona a quantidade de unidades da ILPN que será utilizada no reabastecimento.
Para confirmar a movimentação, o operador realiza a leitura do endereço de picking onde os itens serão abastecidos.
O WCS valida as informações e:
Registra a movimentação no sistema
Atualiza os saldos de estoque
Finaliza o processo de reabastecimento
Após a conclusão, o operador fica automaticamente liberado para iniciar um novo reabastecimento.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Fluxo de Reabastecimento  
**Score:** — (semantico) | **ID:** 9bbfc8b9aebc2330

Execução do Reabastecimento (Transfer → Picking)
O operador executa o reabastecimento seguindo o fluxo:
Leitura da posição de origem (Transfer).
Leitura da caixa (ILPN) que será movimentada.
Leitura da posição de destino (Picking).

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Reabastecimento Estoque Velox  
**Score:** — (semantico) | **ID:** c438e6d26065ab5a

Este processo movimenta itens do Transfer para as posições finais de picking, conforme
necessidade operacional. A funcionalidade responsável por criar as tarefas de reabastecimento
atua monitorando continuamente os níveis de estoque nas posições de picking e identificando
necessidades com base em dois principais critérios: saldo abaixo do mínimo operacional e
previsão de consumo a partir de ondas de separação já liberadas.
Quando uma dessas condições é atendida, o sistema avalia a disponibilidade de produtos no
Transfer.
A geração da tarefa pode ser disparada de forma automática, com base em regras configuradas
no sistema, ou de forma manual, preventivo ou por meio de uma interface onde o operador ou
gestor pode solicitar o reabastecimento de itens ou posições específicas. Todas as tarefas geradas
são organizadas em uma fila e ficam disponíveis para execução pelos operadores logados nos
postos responsáveis pela atividade.
Durante a execução, o operador utiliza coletor para iniciar a tarefa, realiza a coleta na posição de
origem, transporta o item até o endereço de destino e conclui a operação com a leitura da posição
de destino, garantindo o controle e rastreabilidade completa da movimentação.
Este tipo de reabastecimento é de responsabilidade do WCS que será feito via coletor android.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Reabastecimento Manual preventivo:  
**Score:** — (semantico) | **ID:** bca722e4570dc4b0

O operador deverá selecionar a rua (para operações de Picking Cart ou Fullcase) ou o nível de
separação (para operações em Flowrack). Após a seleção, o operador informará a
porcentagem mínima de estoque desejada para monitoramento.
Com base nessa parametrização, o WCS deverá:
1. Monitorar continuamente o nível de estoque das posições associadas,
identificando aquelas que tiverem um valor abaixo da porcentagem mínima
configurada.
2. Gerar automaticamente as tarefas de reabastecimento para cada posição que
necessitar de reposição, garantindo que o endereço seja restabelecido ao nível máximo
permitido.
3. Respeitar as regras de segregação de estoque, considerando que:
o
As duas empresas compartilham a mesma área física, porém o estoque é
segregado logicamente, devendo ser reabastecido sempre com produtos da
mesma empresa.
o
O WCS não poderá sugerir ou aceitar reabastecimento de empresas
diferentes para uma mesma posição, mesmo que o SKU seja igual.
4. Impedir qualquer mistura de lotes dentro da posição de picking ou flowrack:
o
Caso a posição esteja ocupada com um lote específico, o reabastecimento
deverá utilizar o mesmo lote.
o
Se não encontrar o mesmo lote a posição deve ser desconsiderada para este
reabastecimento
o
O WCS não deve permitir o abastecimento parcial que resulte em
múltiplos lotes na mesma posição.
Fluxo do Processo:
O WCS apresenta uma tela com todos os reabastecimentos pendentes entre posições
de origem e posições de destino.
As informações exibidas incluem:
Item (codInterno);
Quantidade(qtd);
Endereço de destino(endColeta).
Caso a origem for de um item com endereço vinculado
O operador realiza, na sequência:
Leitura da posição de origem;
Leitura do item (codInterno);
Leitura da posição de destino).
Confirma quantidade alocada

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 7.4. Reabastecimento  
**Score:** — (nome-topico) | **ID:** e46e39979aaa1eb7

O processo de reabastecimento tem como objetivo garantir a disponibilidade contínua de
produtos nas posições de picking, com intensão de assegurar uma operação de separação sem
interrupções por falta de estoque nas posições de coleta.
O gerenciamento de estoque como as regras de materiais por posição, ranges de percentuais
de vida (shelf life), dias de diferença nas datas de fabricação e a lógica de seleção da melhor
posição de retirada (FEFO e validação de lote) são de responsabilidade exclusiva do SAP o WCS
apenas registra e envia informações.
O WCS Velox é responsável pelas solicitações de abastecimentos de paletes por demanda,
sendo responsável pela verificação de estoque no momento da preparação de onda e início a
coleta, porém ele não faz validações de espaços livres nas posições de coleta na área de
picking, essa responsabilidade é do SAP.
Para os processes de reabastecimento o WCS empenhará os seguintes papeis:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 7.5. Premissas  
**Score:** — (semantico) | **ID:** 7b5cf7336208ce98

Para o correto funcionamento do processo de reabastecimento, devem ser consideradas as
seguintes premissas:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 3. O WCS deve solicitar o reabastecimento informando os dados necessários para  
**Score:** — (semantico) | **ID:** 91d3bf3b0b9ee113

atendimento da demanda como código do produto, prioridade, quantidade de caixas,
range de data de fabricação aceitável (shelf de e shelf até), unidade de medidas
(sempre caixas) e identificador único (ID).

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 6. O processo de reabastecimento poderá ser acionado tanto por necessidade identificada  
**Score:** — (semantico) | **ID:** 98de05d405c5d4b2

pelo WCS com base em ondas quanto por ordens enviadas diretamente pelo SAP para
abastecimento por capacidade.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 7. No TORD de reabastecimento deverá existir um código identificador único para permitir  
**Score:** — (semantico) | **ID:** c5267f6feb8912a6

o rastreamento da solicitação ao longo de todo o processo.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 9. Para os paletes válidos, o processo de reabastecimento no transelevador deverá  
**Score:** — (semantico) | **ID:** 28d198882930395c

trabalhar com dupla confirmação via ZWMTOCO confirmando a primeira etapa e
WMTOCO na segunda.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 10. Reabastecimento do porta-palete para a posição de picking não automatizadas utilizam  
**Score:** — (semantico) | **ID:** cf21eb6496e3e61c

o método confirmação simples via ZWMTOCO.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 11. Reabastecimento do buffer para posição de picking automatizadas utilizam o método de  
**Score:** — (semantico) | **ID:** 1a79c837b745363a

confirmação em uma etapa, sendo confirmado pelo WCS com envio do WMTOCO.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** (AA)  
**Score:** — (semantico) | **ID:** f8807834b88f07b7

O reabastecimento contempla os seguintes tipos de posição dentro do Armazém Automatizado
(AA):

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Buffer (Níveis 4 e 5): Posições ficas que podem atuar como estocagem temporária (pulmão)  
**Score:** — (semantico) | **ID:** d25ab7363f1cf38d

para agilizar o reabastecimento dos canais de picking, com capacidade máxima de 1 palete por
posição.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Origens do Palete  
**Score:** — (semantico) | **ID:** fc292527911fec76

Independentemente do cenário de reabastecimento (capacidade ou demanda), o palete pode
vir de duas origens (AC ou Buffer). A decisão de qual origem será utilizada é sempre do SAP,
que avalia disponibilidade, FEFO e regras de shelf life.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 8.2. Solicitação de Demanda (ZABAST)  
**Score:** — (semantico) | **ID:** 08bbe00f0755933b

O ZABAST é o IDOC utilizado pelo WCS para solicitar reabastecimento ao SAP. Diferente do
TORD que carrega uma OT completa com palete, origem e destino definidos o ZABAST é uma

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 8.7. Reclassificação de Prioridade  
**Score:** — (semantico) | **ID:** 37324d289c3a56f4

O processo deverá prever a reclassificação de prioridade quando houver reaproveitamento ou
urgência de uma movimentação já existente. Caso o WCS identifique que um palete
originalmente vinculado a uma OT de reabastecimento por capacidade pode atender também
uma necessidade de reabastecimento por demanda, esse palete deverá ter sua prioridade
alterada, passando a receber tratamento prioritário para suprir a onda que está por vir, ou nos
casos de inicialização da onda onde a necessidade da OT existente passa a ser urgente,
passando a ter uma das maiores prioridades de movimentação.
Essa alteração de prioridade tem como objetivo evitar a geração desnecessária de novas
solicitações, aproveitando movimentações já existentes para atendimento mais rápido da
demanda operacional.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informação  
**Score:** — (semantico) | **ID:** b8a7d6a6899138f2

ID_ABASTEC
Necessidade
ID do Abastecimento
PRIO
Necessidade
Prioridade
ZDT
Necessidade
Data da Operação
ZHR
Necessidade
Hora da Operação

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 8.8. Reabastecimento de Flowrack  
**Score:** — (semantico) | **ID:** e298aea0b240cc6d

O reabastecimento de posições de FlowRack segue uma lógica diferente dos demais tipos de
OT. Não há solicitação prévia por parte do WCS, o SAP envia a OT diretamente com
confirmação já inclusa, ou seja, a OT chega ao WCS como já confirmada.
O WCS identifica que se trata de uma OT de FlowRack por meio de duas informações presentes
na OT:
•

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Reabastecimento por Capacidade  
**Score:** — (semantico) | **ID:** 7ca4ab85f41b6360

O reabastecimento por capacidade é uma funcionalidade que ocorrem de forma cronológica
seguindo um intervalo de tempo padrão onde sempre que essa funcionalidade é executada
ocorre uma avaliação no estoque das posições de picking ou buffer com o objetivo de manter
as posições sempre cheias, levando em consideração a capacidade de paletes de cada posição
sendo premissa o abastecimento por palete, ou seja, um abastecimento só ocorre quando cabe
pelo menos 1 palete na posição.
A criação de OT para atender o reabastecimento por capacidade só ocorre quando o SAP
identifica que existe uma posição vazia ou com possibilidade de receber 1 palete, após localizar
um palete correspondente com os parâmetros da posição (Sku, Range de data de fabricação e
diferença de dias de fabricação) o SAP decide preenchê-la com intuito de minimizar ou evitar a
necessidade de reabastecimento por necessidade de separação.
Com a geração da OT o SAP envia ao WCS um IDOC TORD que contêm todas as informações
necessárias para o gerenciamento dessa movimentação de palete, com isso o WCS registra os
dados da OT e mantem o seu status como pendente, aguardando compra e movimentação
desse material por parte do SAP.
Após envio da OT ao WCS são possíveis 3 cenários:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Reabastecimento por Demanda  
**Score:** — (semantico) | **ID:** cde47ac83ad6565a

O reabastecimento por demanda é uma funcionalidade que ocorrem por meio do acionamento
de um gatilho, após o processo de criação de onda ao seleciona a opção de preparação de
onda o WCS inicia uma verificação de estoque (Varredura) de todas as necessidades para o
atendimento completo da onda, quando o saldo disponível nas sequência 1 das posições de
coleta e nas OTs pendentes no momento não atende toda necessidade é gerada a solicitação
de reabastecimento por demanda, quando o WCS envia a integração ZABAST ao SAP  [ZABAST]
A solicitação desse abastecimento visa atender por completo a necessidade da onda com suas
remessas.
O WCS gera um identificador único e envia ao SAP com as informações de Sku, prioridade,
quantidade de caixas e range de data de fabricação aceitável.
A criação de OT para atender o reabastecimento por demanda só ocorre quando o SAP
identifica um palete dentro dos parâmetros de aceitação para atender a necessidade (Sku,
range de data de fabricação, todos os lotes do palete atendem a necessidade e existe uma
posição vazia ou com possibilidade de receber o palete), após a aprovação de todas as
validações o SAP gera a OT e envia ao WCS com intuito de atender a necessidade de
reabastecimento por necessidade de separação.
Com a geração da OT o SAP envia ao WCS um IDOC TORD que contêm todas as informações
necessárias para o gerenciamento dessa movimentação de palete, com isso o WCS registra os
dados da OT e mantem o seu status como pendente, aguardando compra e movimentação
desse material por parte do SAP.
Após envio da OT ao WCS são possíveis 3 cenários:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 6 — Confirmação: Após o encerramento ou finalização da onda WCS envia um  
**Score:** — (semantico) | **ID:** 6774b9cff9be6520

ZTOCO01 ao SAP com as quantidades solicitadas para o esvaziamento da posição e o que
realmente foi retirado da posição, isso por meio do segmento ZTOCOPERC [TOCO] confirmando
a conclusão da limpeza. O saldo da posição é zerado e ela fica disponível para futuro
reabastecimento.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Verificar reabastecimento  
**Score:** — (semantico) | **ID:** 5c31a87ada9c4a87

Ao clicar na opção de verificação de reabastecimento o WCS vai realizar a verificação do estoque
atual. Essa verificação segue as seguintes premissas:
•
Considerar saldo disponível (não reservado)
•
Posição desbloqueada
•
Deposito (LOGT) igual a 88 ou deposito 16
•
Sequência do palete igual a 1 [Gerenciamento de sequência de paletes]
•
Todos os lotes dentro do palete atende a necessidade de shelf de e até
•
Tipo de posição picking ou flowrack
•
Considerar saldo de Ots pendentes com posição de destino do tipo picking ou flowrack
Após realizar a verificação o WCS retorna um relatório na tela mostrando por transportes a
quantidade de caixas que são necessárias reabastecer para atender totalmente a necessidade
das remessas dentro desses transportes, sendo as informações segregadas por temperatura e
total, nesse mesmo relatório será apresentado o percentual de atendimento de cada transporte
com base na situação atual do estoque.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Preparação da Onda  
**Score:** — (semantico) | **ID:** beb27aabc42c17b0

A funcionalidade “Preparar a Onda” permite que o operador antecipe validações e possíveis
necessidades de reabastecimento antes do início efetivo da separação, sem iniciar a execução
da onda.
Ao acionar essa opção, o WCS realiza uma análise completa do estoque atual, considerando
tanto o estoque físico disponível nas posições de picking quanto as OTs pendentes. Com base
nessas informações, o sistema executa uma verificação de disponibilidade para identificar se o
saldo atual é suficiente para atender integralmente a demanda da onda. [Verificação de
reabastecimento]
Essa ação tem como objetivo garantir que, antes do start, a operação já tenha visibilidade clara
sobre a capacidade de atendimento, permitindo atuar de forma preventiva e reduzir impactos
durante a execução.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 57362b06ab7f1b5b

Caso a análise de disponibilidade identifique que o saldo existente disponível (considerando
saldos não reservados das posições de picking + OTs pendentes) não é suficiente para atender
a demanda da onda, o WCS irá gerar automaticamente solicitações de reabastecimento por
demanda ZABAST [Reabastecimento por Demanda].
Nessa solicitação, o WCS enviará ao SAP as informações necessárias para atendimento,
contemplando obrigatoriamente:
•
SKU
•
Quantidade necessária
•
Shelf life requerido
•
Identificador único da necessidade
•
Prioridade
A partir desses dados, o SAP será responsável por definir a melhor origem de abastecimento
buffer ou AC e retornar um IDOC do tipo TORD [TORD] para seguir com fluxo de
reabastecimento definido [Reabastecimento por Demanda].
Essa tratativa garante que, ao iniciar a onda, os itens já estejam em processo de movimentação
ou disponíveis, reduzindo o tempo de espera e aumentando a eficiência da operação.
Após o retorno do SAP com a OT criada para atender a necessidade enviada o WCS irá priorizá-
la de acordo com os parâmetros de priorização [Classificação de prioridade].

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Inclusão em ondas criadas  
**Score:** — (semantico) | **ID:** 0afa437f2b403644

Ao realizar a inclusão de transporte em uma onda com status criada o WCS somente atribui esse
novo transporte a onda selecionada sem necessidade de verificação de estoque ou
abastecimento.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Start de Onda  
**Score:** — (semantico) | **ID:** f31e5059abdc02ed

O start da onda é a ação que dá início efetivo ao processo de separação. Ao acionar o start, o
WCS realiza uma reavaliação da demanda com base no estoque disponível nas posições de
picking e estoque em movimentação, eleva a prioridade de todas as OTs de reabastecimento
[Reclassificação de Prioridade] vinculadas àquela onda e gera a lista de coleta que será
executada pelos separadores.
A partir do start, O WCS ainda aceitará as integrações de remessa para remessas pertencentes
ao transporte da onda iniciada e atualizará somente o número da placa, transportador e tipo de
veículo, os demais dados serão ignorados.
Caso o WCS receba uma nova integração de remessa de uma remessa nova (inexistente em
sua base de dados ou remessa que foi canelada no passado) e ela pertença a um transporte da
onda já iniciada, a integração será negada e o WCS retornará o Bad Request ao SAP.
No momento do start da onda, o WCS deverá validar se existem materiais com cadastro
incompleto (ex.: ausência de peso) [Mestre de Materiais]. Caso sejam identificados itens nessa
condição, o sistema deverá exibir uma mensagem de alerta ao operador, informando a existência
desses materiais e listando-os para conferência.
O operador poderá, então, optar por não iniciar a onda e realizar os ajustes necessários no
cadastro, ou prosseguir com a execução assumindo o risco operacional.
Devido a necessidade de separação dos materiais do tipo de peso PVAR será aplicada algumas
validações que poder não permitir o start da onda, essas validações verificam o mínimo necessário
para poder prosseguir com o processo de coleta.
O WCS irá realizar as seguintes validações:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Pedidos de Reabastecimento – Concluídos vs pendentes (Congelado)  
**Score:** — (semantico) | **ID:** 4c0f58a0a165dfb7

Quantidade Concluída
Total de reabastecimentos
finalizados (congelado)
Volumes /
Tarefas
Quantidade Pendente
Total de reabastecimentos
pendentes (congelado)
Volumes /
Tarefas
Percentual (%)
Percentual de pendência em
relação ao total
Volumes /
Tarefas

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Pedidos de Reabastecimento – Concluídos vs pendentes (Resfriado)  
**Score:** — (semantico) | **ID:** ab68c302c4863641

Quantidade Concluída
Total de reabastecimentos
finalizados (resfriado)
Volumes /
Tarefas
Quantidade Pendente
Total de reabastecimentos
pendentes (resfriado)
Volumes /
Tarefas
Percentual (%)
Percentual de pendência em
relação ao total
Volumes /
Tarefas

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Campo  
**Score:** — (semantico) | **ID:** 4ef52d19e9d98f93

OT
A informação da OT que vem do SAP
ID
Id de abastecimento
Data e Hora
Sinalizar em campos separados a data de início com a hora e a data
fim com a hora finalizada.
SKU
Código do item
Sigla
Informação do texto breve do material
Informação da descrição do material
UD
Unidade de deposito
Quantidade
Quantidade de caixas que irá abastecer
Peso
Peso – Peso abastecido
Lote
Lote abastecido no processo (Quando o item tiver mais de um lote a
informação de cada lote deverá vir em uma linha diferente com todas
as informações pertinentes ao lote)
Prioridade
Prioridade que está sendo tratado o ressuprimento.
Prioridade
alterada
Caso tenha sido alterada a prioridade.
Temperatura
Conservação do item
Posição de
Origem
Posição do qual o palete irá sair
Posição de
destino
Posição que será armazenada.
Status do
palete
“Pendente” quando o palete é enviado para o VELOX, “Pendente
BK25” quando o SAP envia o WMTOCO e o palete vai para uma
posição administrada pelo transelevador e “Confirmado” quando o
palete vai para a posição de destino, lembrando que os paletes que
não são administrados pelo transelevador só teremos status
“Pendente” e “Confirmado”.
Criação Palete
Data de criação do palete
Confirmação
Palete
Data de confirmação do palete

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Tipo Obrigatório Tamanho  
**Score:** — (semantico) | **ID:** 33867c56fbb86eb3

Empresa
Código da Empresa requisitante
String
Sim
Centro
Código do centro de distribuição
String
Sim
codDeposito
Código do deposito
Char
Sim
reabastecimentos
Lista de tarefas de reabastecimento
Array
Sim
-
Tarefa
Nº Tarefa WMS para separação do material
Numc
Sim
Sku
Código SKU do produto
Char
Sim
DUN
Código DUN do item
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
qtd_sug
Quantidade sugerida de ressuprimento
Quan
Sim
13,3
pos_origem
Posição para onde o SKU será coletado
Char
Sim
pos_destino
Posição para onde o SKU será reabastecido
Char
Sim
qtd_caixa
Quantidade de unidadesque uma caixa
fechada vai ter, o WCS deve dividir a
quantidade solicitada pela quantidade
master para saber quantas caixas fechadas
devem separar. O wcs deve recusar
integração que o valor da divisão for menor
que 1(um)
Quan
Sim
13,3
Motivo
Motivo da solicitação
Char
Sim

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Tipo Obrigatório Tamanho  
**Score:** — (semantico) | **ID:** 452480ff8e51458a

Empresa
Código da Empresa requisitante
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
reabastecimentos
Lista de tarefas de reabastecimento
Array
Sim
-
Tarefa
Nº Tarefa WMS para separação do material
Numc
Sim
pos_destino
Posição para onde o SKU será reabastecido
Char
Sim
Sku
Código SKU do produto
Char
Sim
DUN
Código DUN do item
Char
Sim
qtd_sug
Quantidade sugerida de ressuprimento
Quant
Sim
13,3
qtd_reab
Quantidade real de ressuprimento
Quant
Sim
13,3

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 2f683288dd533043

O processo de Reabastecimento tem como objetivo abastecer as posições de Picking Fracionado
com produtos provenientes de caixas fechadas (full case) coletadas durante o Order Start Full
Case (tópico 7.7).
Com a unificação da coleta no Order Start Full Case, os volumes de reabastecimento são
coletados juntamente com os volumes de picking full case e direcionados pelo sorter até a área
específica de reabastecimento. A partir desse ponto, o operador executa as etapas descritas a
seguir para concluir o reabastecimento das posições de picking fracionado.
O fluxo de reabastecimento é composto por três etapas sequenciais: Decanting,
Abastecimento do Picking Cart e Execução do Picking Cart de Reabastecimento.
Navegação e Estrutura de Telas no Coletor
O WCS disponibilizará no coletor Android uma estrutura de telas organizada para o processo de
reabastecimento, permitindo que o operador navegue entre as funções de forma simples e sem
necessidade de trocar de módulo. A estrutura é composta por duas telas principais:
Tela 1 – Preparação (Decanting / Abastecimento do Picking Cart):
Ao acessar o módulo de Reabastecimento, o operador é direcionado para a tela de
preparação, que apresenta duas opções de ação:
○
Decanting — para realizar o processo de transferência dos itens da caixa full
case para bins.
○
Abastecimento do Picking Cart — para alocar as bins já preparadas nas
posições do carrinho.
O operador seleciona a função desejada e executa o processo correspondente. Após
concluir a operação, o operador pode utilizar o botão “Voltar” para retornar à tela de
preparação e alternar entre Decanting e Abastecimento do Picking Cart conforme a
necessidade operacional, sem necessidade de sair do módulo ou trocar de tela.
Essa flexibilidade permite que o operador realize múltiplos decantings seguidos e depois
abasteça o picking cart, ou alterne entre as duas funções livremente conforme o ritmo
da operação.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** de reabastecimento.  
**Score:** — (semantico) | **ID:** b39df77f3c580dfd

Objetivo do Controle
Esse dashboard tem como finalidade:
Monitorar a distribuição de pedidos por Order Start
Evidenciar ruas críticas com maior concentração de tarefas
Apoiar decisões de balanceamento de fluxo e recursos

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 3.2.3. Área de Full Case e Reabastecimento (WMS/Híbrido)  
**Score:** — (semantico) | **ID:** db31c830da12bfe0

Área onde ocorrem processos mistos de responsabilidade WMS e Invent:
Fullcase Picking by Light (PBL): 20 posições de pallet no solo controladas pela
Invent (WCS) para itens de altíssimo giro (Curva AA).
Picking Manual/Cart (Museu): Corredores de separação localizados no museu (área
externa à automação, a nível chão), com picking carts controlados inteiramente pelo
WCS para coleta de itens de baixo giro. O fluxo de separação segue o conceito
consolidado: o operador realiza picking de múltiplos pedidos simultaneamente e
transporta os itens coletados ao Put to Wall (PTW) para consolidação por pedido antes
da indução na automação.
Esteira Expressa de Full Case (Túnel): Linha expressa que passa por dentro da
estrutura porta-pallet (altura aprox. 1.80m/1.90m), transportando os volumes fechados
que descem do mezanino. É exclusiva para saída de volumes full case e não possui
ponto de inserção/indução de produtos — as induções de caixas (full case da área
dedicada e caixas plásticas do PTW/picking cart) ocorrem na esteira de Full Case do
térreo, não nesta.
Módulos PMG no Térreo (WCS): 11 módulos G + 1 módulo M (150 posições).
Localizados na área de porta-paletes 'duplos' (sem corredor de picking dedicado),
atendendo itens de Full Case Curva C. Esta área fica fora do fluxo principal da esteira
de automação, e seu reabastecimento é executado diretamente pelo WMS via paleteira.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** }  
**Score:** — (semantico) | **ID:** ae5d4953a834f184

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
ID agrupador da solicitação original (Link com INT-
03).
id_reabastecimento
String
Sim
ID da linha/tarefa original. Garante que a resposta
seja casada com a solicitação correta.
status_item
String
Sim
ACEITO ou REJEITADO.
completo
Boolean Não
Indica se a mensagem encerra a solicitação (último
envio). false enquanto houver mais volumes a
caminho; true no último envio, inclusive quando o
atendimento é encerrado parcial (total atendido
menor que o solicitado).
sku
String
Sim (se aceito)
Código do produto reabastecido, associado ao
id_reabastecimento.
quantidade_atendida
Integer
Sim
Quantidade efetiva que o WMS está enviando (pode
ser parcial).
tipo_embalagem
String
Sim
Identificação do tipo de caixa a ser utilizada para
aquele reabastecimento específico.
posicao_destino
String
Sim
Posição física da automação onde o produto será
guardado, definida pelo WCS (Pick Map + cadastro
de endereços do WCS). A posição virtual do WMS
não trafega nesta integração.
lote
String
Não
Identificação do lote enviado (se aplicável).
codbarra_caixa
String
Sim (se aceito)
Campo Crítico: Código de barras da etiqueta física
do volume (LPN/DUN) que será lido pelo scanner do
Sorter.
motivo_rejeicao
String
Não
Obrigatório apenas se status for REJEITADO (Ex:
SEM_ESTOQUE).
OBS: O WMS Ainda não deve considerar o estoque na automação, somente após a próxima
integração

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 6. Gestão de Estoque e Reabastecimento  
**Score:** — (semantico) | **ID:** b4773ec840f7967c

A eficiência do sistema de separação em túnel depende diretamente da disponibilidade de
produtos nas posições de Picking. O WCS Velox atua ativamente na monitorização dos saldos e
na geração de demandas de reposição para o WMS Spark.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 6.2. Gatilhos de Reabastecimento  
**Score:** — (semantico) | **ID:** 4a365f5cd3247893

O WCS dispara solicitações ao WMS (INT-03) baseadas em três cenários distintos:

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 6.2.1. Reabastecimento por Lotação  
**Score:** — (semantico) | **ID:** 43b668eee9096ae9

Visa manter as posições cheias antes que ocorra a ruptura.
Gatilho: O sistema verifica periodicamente se Saldo Atual <= Ponto de Reposição
(Mínimo).
Cálculo: Qtd Solicitar = Capacidade Máxima do Bin - Saldo Atual.
Regra: O sistema só solicita se a funcionalidade estiver ativa e couber pelo menos uma
unidade de abastecimento completa (Caixa ou Master), evitando quebra de volumes no
pulmão. Cada caixa de reabastecimento contém sempre um único SKU.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 6.2.2. Reabastecimento por Necessidade  
**Score:** — (semantico) | **ID:** 01e1e23b5d4225ca

Acionado quando uma onda de pedidos é importada e não há saldo suficiente.
Gatilho: Demanda da Onda > Saldo Disponível.
Ação: Gera uma solicitação como prioridade máxima.
Bloqueio: Os pedidos dependentes ficam retidos no status "Aguardando
Abastecimento" e não são liberados para a esteira até que o ciclo de reposição seja
concluído.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 6.2.3. Reabastecimento Preventivo  
**Score:** — (semantico) | **ID:** 57a02bf2cacc2d31

Neste fluxo, a antecipação do reabastecimento parte da própria operação no Velox: o WCS
disponibiliza uma funcionalidade em que a operação seleciona as posições ou itens a serem
abastecidos e o WCS dispara a solicitação de reabastecimento (INT-03) ao WMS, seguindo o
mesmo ciclo dos demais reabastecimentos.
Gatilho: Seleção manual de posições ou itens a abastecer, feita pela operação na tela
do Velox.
Ação Sistêmica: O WCS gera a solicitação de reabastecimento (INT-03) para os itens
selecionados e o ciclo segue igual ao dos demais reabastecimentos (resposta via INT-
04, classificação na Rampa 1 e confirmação via INT-05).

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 6.2.4. Fluxo Operacional de Reabastecimento (Ciclo da Rampa 1)  
**Score:** — (semantico) | **ID:** a63fdaad2f0946a2

O fluxo físico de abastecimento no Navepark possui uma particularidade: a caixa de reposição
transita pelo Sorter e pela linha principal como se fosse um pedido, garantindo entrega
ergonômica na frente do operador.
Passo 1: Separação WMS e Indução Sorter
1. O WMS recebe a solicitação e gera a missão de separação no Pulmão.
2. O operador do WMS separa a caixa (Full Case ou Fracionado) contendo sempre um
único SKU por caixa de reabastecimento — seja caixa fechada ou parcial —,
etiqueta com um LPN rastreável e a induz na linha que leva ao Sorter.
Passo 2: Classificação na Rampa 1 (Buffer de Entrada)
1. O scanner do Sorter lê a etiqueta da caixa de reposição.
2. O WCS identifica que aquele LPN é uma reposição (vínculo feito na INT-04) e a desvia
obrigatoriamente para a Rampa 1.
3. PTL 3: Um operador dedicado na Rampa 1 coleta a caixa e aguarda o momento de
indução.
Passo 3: Reindução no Order Start
1. O operador da Rampa 1 leva a caixa até o Order Start (localizado ao lado).
2. A caixa é induzida na esteira principal, agora com destino lógico definido para a Zona
de Picking que solicitou o produto (ex: Mezanino Posto 1).
Passo 4: Abastecimento na Zona
1. A caixa navega pela esteira e é desviada automaticamente para a zona de destino (ex:
Posto 05).
2. Sinalização: Ao chegar a vez dela no posto, o display/PBL da posição de destino pisca
em uma cor distinta, nesse caso foi definido o Amarelo indicando "Entrada de Material".
3. Execução: O operador do picking retira a caixa da esteira, abre a embalagem e
abastece o Flow Rack.
4. Confirmação: O operador pressiona o botão do PBL para confirmar.
5. Finalização: O WCS envia a confirmação para o WMS (INT-05), atualiza o saldo para
"Disponível" e libera as ondas que estavam travadas.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 8.3. Reabastecimento  
**Score:** — (nome-topico) | **ID:** 053fcacff29fc0d6

O reabastecimento é controlado pelo WMS Spark (missão de reposição, decisão de quando e o
que repor). O WCS não gerencia estoque neste projeto. Porém, a operação física de
reabastecimento transita pela automação controlada pelo WCS.
Integração de Reabastecimento (WMS Spark → WCS):
O WMS Spark envia ao WCS a integração de reabastecimento contendo o número da etiqueta da
caixa de reposição e a posição de destino (endereço do FlowRack a ser abastecido). Com essas
informações o WCS controla o desvio automático da caixa na esteira até a estação correta.
Fluxo Operacional:
A caixa de reposição, etiquetada pelo WMS Spark, é induzida no Order Start de
reabastecimento.
O operador realiza a leitura da etiqueta da caixa.
O WCS identifica a posição de destino conforme integração recebida do WMS Spark.
A caixa navega pela esteira e o WCS desvia automaticamente para a estação de destino.
O PBL pisca em cor de reabastecimento (laranja) sinalizando ao operador.
O operador abastece o FlowRack, lê o endereço de destino + EAN do produto e confirma.
O WCS finaliza a tarefa e envia confirmação ao WMS Spark.
8.3.1. Conclusão e Integração
O WCS enviará a integração de reabastecimento concluído ao WMS Spark assim que o
operador confirmar a alocação da caixa de reabastecimento na posição de destino do
Picking Fracionado.
A integração de retorno de reabastecimento segue o modelo descrito no tópico de
Integrações (Retorno Reabastecimento), garantindo a atualização do saldo e a
rastreabilidade do processo no WMS Spark.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 12034ea3c8647d05

O sistema WCS disponibilizará um botão para Solicitação de Reabastecimento. Ao acionar o
botão, o operador deverá informar a posição de picking que necessita de reabastecimento.
Após a confirmação, o WCS enviará ao WMS uma solicitação contendo os dados do local
informado, para que o WMS crie uma tarefa de reabastecimento para a posição informada.
OBS: O WCS não tem controle de qual item está vinculado a cada posição, portanto só iremos
sinalizar a posição que necessita de reabastecimento.

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** e0ff2699c30f0e60

O processo de reabastecimento é de responsabilidade exclusiva do WMS. O WCS se limita ao envio das informações de separação (incluindo cortes/shortpicking) para que o WMS avalie e determine as ações necessárias de reposição nas posições de picking.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 10de996b17f43447

O reabastecimento garante que as posições de picking nunca fiquem zeradas durante a operação. Quando o saldo de um canal cai abaixo do mínimo configurado, o sistema aciona o processo de reposição antes que a posição esvazie completamente.
Neste projeto, o controle de reabastecimento é feito pelo eWM - SAP. O WCS recebe a tarefa de reposição já processada e coordena apenas o fluxo físico — desviando a caixa de reposição para a rampa ou posição de destino indicada.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 8. Reabastecimento  
**Score:** — (nome-topico) | **ID:** f7e47e16f45a32fa

O sistema WCS informa o WMS referente a separação, com isso o WMS administra essas
informações para tratativas de reabastecimento.
Todo o processo de reabastecimento é de responsabilidade do cliente.
