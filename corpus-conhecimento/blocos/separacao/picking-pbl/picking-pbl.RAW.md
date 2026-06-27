# picking-pbl.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 9. Separação PBL (Picking By Light)  
**Score:** — (nome-topico) | **ID:** 0399177cf6981972

Estações de picking:
Ao total são 10 estações, cada estação é composta por picking frente e costas. Cada
posição de picking frente com 1 display de 3 dígitos + botão led, conforme imagens ilustrativas
abaixo:
Cada posto da frente, terá um display de 6 (seis) dígitos informando o número da caixa
de separação atual, conforme imagem ilustrativa abaixo:
Com a leitura correta da etiqueta da caixa no início da linha, a caixa segue pela linha
expressa e ao chegar no leitor da estação, caso tenha produtos a serem separados em algum
posto da estação, a caixa será desviada para dentro da estação de picking e direcionada para o
lado do posto onde solicita separação de itens.
Separação em 1 posto da estação (frente): caso o volume (pega) solicite
separação em 1 dos postos da estação, a automação direciona a caixa para o posto que
solicita separação, os leds das posições solicitadas serão acesos na cor azul e o display
informará a quantidade a ser separada, operador realiza a separação do produto na
posição, aciona o botão para a posição apagar (confirmando a separação do produto),
então segue para a próxima posição acionada e realiza o mesmo processo até que
todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar
toda a separação do posto, todas as posições são acesas na cor verde indicando ao
operador que a separação naquele posto foi concluída e com isso induza a caixa na
linha expressa onde seguirá para a próxima estação picking.
Separação em 2 postos da estação (frente): caso o volume (pega) solicite
separação nos dois postos da estação, a automação direciona a caixa para o posto que
antecede o leitor da estação, os leds das posições solicitadas serão acesos na cor azul e
o display informará a quantidade a ser separada, operador realiza a separação do
produto na posição, aciona o botão para a posição apagar (confirmando a separação),
então segue para a próxima posição acionada e realiza o mesmo processo até que
todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar
toda a separação do posto, todas as posições são acionadas na cor verde indicando ao
operador que a separação naquele posto foi concluída e então operador induz a caixa
na linha expressa onde será lida novamente pelo leitor da mesma estação e ao entrar
na estação, será direcionada para o posto após o leitor e os leds das posições serão
acionados conforme mencionado acima e ao finalizar a separação, todos os leds do
posto serão acesos indicando ao operador que a separação naquele posto foi concluída,
operador induz novamente a caixa na linha expressa onde seguirá para a próxima
estação de picking.
Separação em 1 posto da estação (frente + costas): caso o volume solicite
separação em 1 posto da estação que tenha produtos para serem separados na frente
e costas, os leds das posições (frente e costas) solicitadas serão acesos na cor rosa e o
display informará a quantidade a ser separada, operador realiza a separação do
produto na posição da frente, aciona o botão para a posição apagar (confirmando a
separação do produto), então segue para a próxima posição acionada e realiza o
mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos
separados, ao finalizar toda a separação dos produtos da frente, segue para separar os
produtos com as posições acionadas nas costas do operador, realiza o mesmo processo
de separação mencionado acima, após separar todos os produtos das costas, todas as
posições são acesas na cor verde indicando ao operador que a separação naquele posto
(frente e costas) foi concluída e com isso induz a caixa na linha expressa onde seguirá
para a próxima estação de picking.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 13. Tela de endereços  
**Score:** — (semantico) | **ID:** 503e22c91c0f9491

Será disponibilizada no WCS uma tela específica para visualização, com o objetivo de
oferecer apoio no controle sobre os endereços de separação do museu e permitir a
administração dos endereços do museu e FlowRack e Transfer, conforme aplicável.
Localizações contempladas:
Museu
FlowRack
Transfer
A tela permitirá:
Visualização completa das localizações cadastradas no sistema (enviadas no picking
map), segmentadas por setor
Filtros por setor e produto.
Essa funcionalidade visa facilitar a expansão, readequação ou manutenção das
localizações de picking e transfer, garantindo flexibilidade operacional e controle sobre as
áreas que não fazem parte da automação FlowRack.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Separação PBL (Picking By Light)  
**Score:** — (nome-topico) | **ID:** 5bbbac0a8ae4375d

Estações de picking:
Ao total são 10 estações, cada estação é composta por picking frente e costas. Cada posição de picking frente com 1 display de 3 dígitos + botão led, conforme imagens ilustrativas abaixo:
Cada posto da frente, terá um display de 6 (seis) dígitos informando o número da caixa de separação atual, conforme imagem ilustrativa abaixo:
Com a leitura correta da etiqueta da caixa no início da linha, a caixa segue pela linha expressa e ao chegar no leitor da estação, caso tenha produtos a serem separados em algum posto da estação, a caixa será desviada para dentro da estação de picking e direcionada para o lado do posto onde solicita separação de itens.
Separação em 1 posto da estação (frente): caso o volume (tarefa) solicite separação em 1 dos postos da estação, a automação direciona a caixa para o posto que solicita separação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto foi concluída e com isso induza a caixa na linha expressa onde seguirá para a próxima estação picking.
Separação em 2 postos da estação (frente): caso o volume (tarefa) solicite separação nos dois postos da estação, a automação direciona a caixa para o posto que antecede o leitor da estação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acionadas na cor verde indicando ao operador que a separação naquele posto foi concluída e então operador induz a caixa na linha expressa onde será lida novamente pelo leitor da mesma estação e ao entrar na estação, será direcionada para o posto após o leitor e os leds das posições serão acionados conforme mencionado acima e ao finalizar a separação, todos os leds do posto serão acesos indicando ao operador que a separação naquele posto foi concluída, operador induz novamente a caixa na linha expressa onde seguirá para a próxima estação de picking.
Separação em 1 posto da estação (frente + costas): caso o volume (tarefa) solicite separação em 1 posto da estação que tenha produtos para serem separados na frente e costas, os leds das posições (frente e costas) solicitadas serão acesos na cor rosa e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição da frente, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação dos produtos da frente, segue para separar os produtos com as posições acionadas nas costas do operador, realiza o mesmo processo de separação mencionado acima, após separar todos os produtos das costas, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto (frente e costas) foi concluída e com isso induz a caixa na linha expressa onde seguirá para a próxima estação de picking.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Tela de endereços  
**Score:** — (semantico) | **ID:** 3232e283e9f0d7bf

Será disponibilizada no WCS uma tela específica para visualização, com o objetivo de oferecer apoio no controle sobre os endereços de separação do museu e permitir a administração dos endereços do museu e FlowRack e Transfer, conforme aplicável.
Localizações contempladas:
Museu
FlowRack
Transfer
A tela permitirá:
Visualização completa das localizações cadastradas no sistema, segmentadas por setor
Filtros por setor e produto.
Essa funcionalidade visa facilitar a expansão, readequação ou manutenção das localizações de picking e transfer, garantindo flexibilidade operacional e controle sobre as áreas que não fazem parte da automação FlowRack.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Transportador de Pallets – Sistema de transporte por esteira, roletes ou correntes  
**Score:** — (semantico) | **ID:** fe89a3502e0eb406

dimensionadas para a movimentação de paletes completos entre o armazém automático,
posições de separação e docas de expedição.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** FlowRack  
**Score:** — (nome-topico) | **ID:** 0d60bb5425fbec84

Posições de separação com multi-profundidade para caixas de produtos (congelados e
resfriados), reabastecidas sob controle do ERP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Flow rack: Posições dinâmicas que não comportam palete somente caixa destinadas a  
**Score:** — (nome-topico) | **ID:** 149d22c1c192aaf2

produtos oriundos de devolução.
Saida de Paletes: Posições com capacidade máxima de 3 paletes por posição dedicadas a saída
dos paletes vazios, sendo gerenciadas pelas movimentações do transelevador.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Armazém Convencional (AC): O operador de empilhadeira retira o palete do armazém  
**Score:** — (semantico) | **ID:** b0013910dc21c295

convencional e o coloca na linha ou na área de stage in (Paredão) ou diretamente no porta-
palete na posição de picking.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** UD com valor zerado: O campo de Unidade de Depósito vem com o valor  
**Score:** — (semantico) | **ID:** 7c0d8501bdf4ca87

00000000000000000000, indicando que não há palete físico vinculado à movimentação
(o FlowRack opera com caixas individuais, não com paletes, o WCS não irá salvar o
número do palete recebido em sua base).
•

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Depósito de FlowRack: O campo NLPLA no IDOC TORD identifica o depósito do  
**Score:** — (semantico) | **ID:** b1f663de3f163a2a

FlowRack.
Quando o WCS recebe uma OT com essa combinação (UD zerada + depósito de FlowRack), ele
a processa como confirmada, atualiza o saldo da posição de destino conforme os dados
recebidos, sem aguardar execução física, confirmação adicional ou possibilidade de
cancelamento.
Esse fluxo existe porque o reabastecimento do FlowRack é controlado pelo SAP e executado
operacionalmente fora do controle do WCS. O papel do WCS nesse cenário é apenas manter
seu saldo de estoque atualizado com base na informação que o SAP envia.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Limpeza de Canal de Buffer  
**Score:** — (semantico) | **ID:** 2033d729c31c5a0e

A limpeza de canal de buffer consiste na retirada de paletes cheios armazenados nas posições
de buffer (níveis 4 e 5). Esses paletes estão em estocagem temporária e a operação pode
solicitar sua retirada para a saída a qualquer momento, seja por necessidade de
remanejamento, shelf life, ou qualquer outro motivo operacional.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 2. O WCS identifica as posições de picking onde os itens estão armazenados, com base no  
**Score:** — (semantico) | **ID:** f1919082e8c2c0b3

estoque disponível e nas regras de seleção.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Controle de LEDs (Picking By Light)  
**Score:** — (semantico) | **ID:** 54bc9d4a48b4b558

O WCS será responsável por controlar o acionamento dos LEDs em cada posto respeitando a
configuração de prioridade parametrizada para a geração da lista de coleta [Lista de Coleta].

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Sequência de acendimento:  
**Score:** — (semantico) | **ID:** 3e00c9ddc0f91e69

•
Os LEDs deverão ser acionados conforme a ordem de prioridade definida.
•
Produtos do tipo PVAR sempre serão a primeira prioridade de coleta, as regras de
coleta PVAR estão descritas no tópico seguinte [Coletas PVAR].
•
Dentro de cada posto, apenas os LEDs correspondentes às tarefas atribuídas ao
operador deverão ser acionados.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Monitoramento de LED sem Coleta  
**Score:** — (nome-topico) | **ID:** 3ce2b2ba28041746

O WCS deve realizar o monitoramento contínuo do tempo em que cada LED permanece aceso
sem a confirmação da coleta pelo operador, com o objetivo de identificar desvios operacionais e
garantir fluidez no processo de separação.
Para cada acionamento de LED, será iniciado um timer. Caso o operador não realize a
confirmação dentro do tempo limite configurado o WCS deve disponibilizar essa informação em
tempo real através da dashboard de coleta.
No dashboard, cada posto deve possuir uma linha representando seu status operacional.
Quando um LED ultrapassar o tempo limite sem confirmação, a linha correspondente ao posto
deverá mudar visualmente para uma cor de alerta (vermelha), indicando a existência de
anomalia no processo.
Essa sinalização tem como objetivo permitir uma atuação rápida da operação, que deverá se
deslocar até o posto indicado para verificar e tratar a causa da não execução da coleta.
A identificação detalhada da ocorrência como posição do LED, SKU e demais informações da
coleta não será apresentada diretamente na dashboard, devendo ser obtida através de
relatórios e outras telas do WCS, que permitirão à operação analisar o histórico e identificar o
ponto exato da falha.
O tempo limite para caracterização de LED não atendido deve ser totalmente parametrizável,
permitindo adequação conforme a dinâmica operacional do cliente.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tam.  
**Score:** — (semantico) | **ID:** 63287577de86decd

Posto
Será cadastrado os postos de coleta, os postos
deverão referenciar a câmara, rua e nível onde
será cadastrado as posições DE-ATÉ para controle
de separação e acionamento dos PBLs
Cadastro de
postos
Caixa total
Somatório das caixas nas posições do posto
referenciado com START de separação.
Ordem de
transporte
Coletado
Somatório das caixas nas posições do posto
referenciado do qual foi confirmado a separação
pelo PBL
Ordem de
transporte
Em coleta
Somatório das caixas nas posições do posto
referenciado do qual a coleta está em
processamento (PBL solicitado acendimento).
Ordem de
transporte
Aguard
separação
Somatório das caixas nas posições do posto
referenciado do qual a coleta não foi iniciada,
porém está na fila aguardando uma onda finalizar.
Ordem de
transporte
Corte
Somatório de caixas cortadas durante o processo
de separação para o posto referenciado.
IDOC
Separador
O separador que está cadastrado no posto
Cadastro de
postos
Obs: A linha deve ficar em vermelho quando um led não for apertado dentro de x tempo
parametrizado pela operação [Controle de LED]

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 9.2. Operação de Fracionado (Frente / PBL)  
**Score:** — (semantico) | **ID:** 1b0b3823f85d6139

Este fluxo ocorre nos Flow Racks equipados com displays luminosos (PBL), destinados a itens
soltos (Fracionados).
Passo a Passo:
1. Chegada da Caixa: A caixa de transporte chega via esteira, o scanner do posto lê a
caixa e para na frente do respectivo posto de trabalho.
2. Acendimento (PBL): Imediatamente, os displays das posições que contém produtos
para aquele pedido acendem.
o
Cor: A cor do LED para coleta padrão acende em AZUL
o
Display: O visor numérico indica a quantidade a ser separada (ex: 5).
3. Execução:
o
O operador retira os itens do local indicado (Flow Rack).
o
Deposita os itens dentro da caixa de transporte na esteira.
4. Confirmação: O operador pressiona o botão luminoso do display PBL para confirmar a
tarefa.
o
A luz apaga.
o
Se houver mais itens na mesma zona, a próxima luz se destaca.
5. Liberação: Quando todas as luzes da zona se apagarem, a esteira movimenta a caixa
automaticamente para o próximo setor ou para a conferência.
*Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não
cabem na caixa plástica que está sendo utilizada, ele poderá acionar a
funcionalidade “pede caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa
atual com os itens já coletados, enviando a mesma para reindução e para que
possa seguir os próximos passos do processo.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens
restantes do pedido, que será retomada no processo de Order Start com uma
nova caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual,
mantendo a rastreabilidade e a integridade da separação.
Obs: Quando o pedido for de um cliente especial o LED deve acender em rosa (para cada
coleta), substituindo o comum (azul). Assim o operador facilmente de uma forma visual
consegue identificar que aquele pedido é de um cliente especial. (A embalagem desses pedidos
será feita no Packing).

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 29 Descida de Pallet Manual  
**Score:** — (semantico) | **ID:** 6ccd6d7d1a4fdc25

O WCS permitirá a descida manual de pallets, com a funcionalidade acessível através da tela
de mapa de posições. O operador poderá clicar em uma posição específica ou pesquisar
por ela utilizando os filtros disponíveis na tela.
Ao selecionar a posição desejada para a descida manual do pallet, o WCS  solicitará ao operador
que informe seu login e senha para a verificação das permissões de acesso à funcionalidade de
descida manual. Somente após a validação bem-sucedida, o operador poderá prosseguir com a
operação.
O pallet será direcionado para a saída correspondente (congelado ou resfriado), e o
operador será obrigado a informar para qual depósito o saldo do pallet retirado será
transferido. Caso o depósito não seja informado, o WCS  não permitirá a execução da
descida do pallet. O depósito informado será exibido no leitor presente na saída do BK25
selecionado.
Após a retirada do pallet, o WCS  enviará a integração WMTORD ao WMS, notificando que o
usuário do  realizou a retirada manual do pallet, e indicando para qual depósito o saldo
do pallet será transferido. A responsabilidade pela transferência física do saldo do pallet
para o depósito indicado será do WMS.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 7.6.4. Conclusão da Remessa  
**Score:** — (semantico) | **ID:** fa4eb90a3b714f07

Ao concluir a coleta de todos os volumes Full Case de uma remessa, o WCS verifica
automaticamente se a mesma remessa também possui volumes de Picking Fracionado e direciona
o operador conforme o cenário identificado:
Cenário A — Remessa sem volumes Fracionados:
O sistema indica ao operador que a tarefa Full Case está concluída e direciona-o ao ponto de
expedição dos volumes. Nesse cenário, o operador segue diretamente para o despacho.
Cenário B — Remessa com volumes Fracionados:
O sistema NÃO permite a finalização imediata da tarefa Full Case. Em vez disso, o WCS exibe ao
operador uma lista contendo, para a remessa em questão:
Posição(ões) de PTL onde estão alocados os volumes Fracionados;
Quantidade total de volumes Fracionados a serem retirados;
Identificação (etiqueta) de cada volume Fracionado esperado.
O operador deverá deslocar-se até as posições de PTL indicadas e realizar a leitura da etiqueta
de cada volume Fracionado listado, retirando-os fisicamente das posições. Caso, no momento da
consulta, ainda existam volumes Fracionados pendentes de separação para essa remessa, o
operador deverá aguardar a conclusão do Picking Fracionado antes de prosseguir.
O sistema só liberará a finalização da tarefa Full Case após a leitura de todas as etiquetas
esperadas. Concluída a leitura completa, o WCS direciona o operador ao ponto de expedição,
transportando em conjunto os volumes Full Case e os volumes Fracionados retirados das posições
de PTL.
Importante: as posições de PTL atendidas pela retirada serão automaticamente liberadas pelo
sistema após a leitura de todas as etiquetas associadas àquela remessa.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Separação – Full Case  
**Score:** — (semantico) | **ID:** 389d909a1052e65b

Este método de separação é gerenciado integralmente pelo WCS e é acionado quando o WMS
envia as ordens de serviço (OS) contendo itens do tipo Full Case, ou seja, caixas fechadas. O
WCS recebe as ordens de serviço do WMS, agrupa os pedidos por produto e gera as tarefas de
separação, organizando as coletas caixa a caixa para otimizar a execução.
Após receber as ordens, o WCS realiza a validação da viabilidade da separação, considerando a
roteirização dos pedidos e a matriz de fragilidade, garantindo que as separações sejam feitas de
forma eficiente e sem comprometer a integridade dos produtos. Somente as posições dos
produtos que se enquadram corretamente no processo de separação, de acordo com a
fragilidade e ordenação estabelecidas, e quantidade mínima parametrizada serão liberadas.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 13. Pendência  
**Score:** — (semantico) | **ID:** 608724307160e996

Quando o operador identificar uma ruptura de estoque na posição de picking ou seja,
quando a quantidade física disponível for inferior à solicitada ele deverá, por meio do coletor:
Ajustar a quantidade efetivamente disponível;
Realizar obrigatoriamente a leitura do código de barras do endereço;
Selecionar o motivo do corte entre as opções pré-configuradas no sistema.
Essas informações serão enviadas ao WCS, que realizará a inserção de um registro de
pendência na Tabela de Pendências do WMS, contendo o SKU, posição, quantidade
coletada e motivo da ocorrência. O objetivo é fornecer ao WMS todos os dados necessários
para que o tratamento da pendência ocorra de forma centralizada.
O operador não é responsável por decidir o corte da tarefa. Sua função é registrar
corretamente a anomalia e prosseguir com a separação dos demais itens da tarefa.
Identificação de Pendência no Processo de Tratamento
No processo de tratamento de pendências, o sistema WCS deve considerar exclusivamente os
registros que foram previamente enviados por ele à tabela de pendências do WMS (Winthor),
garantindo que o controle e o fluxo estejam restritos às ocorrências originadas pela operação
automatizada. O sistema garantirá que a gestão de pendências esteja alinhada com as tarefas
geradas pelo WCS, evitando confusão com registros originados por outras fontes.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** 1 (um) display de 3 (três) dígitos por posição/produto;  
**Score:** — (semantico) | **ID:** 72df4beba28a9e5c

Imagem ilustrativa do botão de 3 (três) dígitos:
Cada posição/produto será equipada com 1 botão led com display de 3 dígitos, onde o botão
acende para indicar a posição de picking e o display informa a quantidade.
Conforme imagem ilustrativa abaixo:
Operador ao verificar que existem itens a serem separados no posto, realiza a separação dos
itens conforme Leds acesos e quantidades.
Ao separar um item de uma posição, operador deve apertar o botão led para que ele se apague
e assim confirmar que realizou a separação do item, esse processo deve se repetir até que todos
os itens com leds acesos sejam apagados e seus produtos separados.
Ao finalizar a separação, os leds acenderão na cor verde informando a finalização do picking
naquele posto e a caixa deverá seguir para a área de conferência.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Fracionados (PBL)  
**Score:** — (semantico) | **ID:** 1a5f1f2230c06ff1

Para iniciar o processo, o sistema WCS, deverá receber via integração todas as informações dos
pedidos cubados, previstos para a operação atual.
WCS deverá receber os pedidos cubados pelo WMS, assim como a quantidade e tipos de caixas
que serão utilizados para a separação do pedido.
Com isso, WCS informa na tela do order start, quantas caixas e tamanhos necessários para
atender o pedido, conforme o cálculo realizado pelo WMS.
Operador realiza a impressão das etiquetas necessárias para aquele pedido e fixa as etiquetas
nas caixas conforme a informação na tela do WCS.
Ao realizar o processo de impressão e fixação das etiquetas nas caixas, operador induz as caixas
na linha para seguir para as estações de separação.
Na parte de PBL teremos 2x Order Start posicionados de forma estratégica para aumentar a
eficiência e diminuir fluxo de volumes em postos que não deveriam passar, o primeiro iniciando
na linha A3 que deverão exibir somente os volumes que iniciam a coleta na linha
A3, o segundo Order Start na Linha A2 que não exibirá os volumes que possuem coleta na linha
A3.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Fracionados A2 & A3 (PBL – Linha Única)  
**Score:** — (nome-topico) | **ID:** 7e80af2895a38513

Para garantir a rastreabilidade das coletas, é obrigatório que o operador realize o login na
estação de separação antes de iniciar qualquer atividade de picking. O login será realizado
diretamente na tela do PDV do posto, onde o operador deverá inserir suas credenciais (usuário
e senha) para se identificar no sistema.
Caso uma caixa seja lida no scanner do posto e não haja um operador logado, o sistema não
iniciará a tarefa de separação e sinalizará a pendência acendendo todos os LEDs na cor laranja.
Após o login ser efetuado com sucesso no PDV, os LEDs do flow rack acenderão na cor azul,
indicando que a estação está pronta para operar.
Ao chegar ao ponto de leitura da linha, essa etiqueta será lida por um leitor fixo e o sistema fará
a identificação do volume e verifica se existem produtos a serem separados no posto referente.
Caso exista produtos a serem separados nesse posto de separação a caixa então ficará parada
em frente à estação. o operador terá 2 (Frente e Costas) possíveis locais de separação:
O sistema WCS deverá permitir 1 (uma) ou mais posições com o mesmo SKU.
Flow Rack – A2 Frente Alto Giro – (Curva A e B)
a. 15 módulos de flow rack
b. 12 posições por módulo
c. 180 total de posições
d. 1 (um) led (3 dígitos) por posição
Flow Rack – A3 Frente Alto Giro – (Curva A e B)
e. 15 módulos de flow rack
f.
8 posições por módulo
g. 120 total de posições
h. 1 (um) led (3 dígitos) por posição
Caso tenha produtos a serem separados no flow rack (equipamento que fica na frente do
operador da estação), os leds (3 dígitos) que são únicos por posição de produtos deverão acender
informando ao operador a quantidade de cada item que deverá ser separado para aquele pedido,
operador realiza a separação do item da posição conforme a quantidade indicada, e aperta o
botão aceso da posição informando que aquele item foi separado, e segue para a próxima posição
acesa e repete o processo até que separe todos os itens das posições acesas.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação
foi concluída com sucesso.
Caso tenha produtos a serem separados nos Nichos (Costas), os leds do Flow Rack (Frente)
deverão acender em rosa, conforme descrito nos próximos itens.
Operador poderá confirmar o número da caixa que está sendo separada no display (6 dígitos)
que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão
fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack onde o operador ao
apertar esse botão, automaticamente o sistema WCS gera um novo volume de separação para
esse pedido e será a próxima a ser liberada no order start.
A2 Costas Médio Giro – (Curva C)
a. 15 módulos de flow rack
b. 24 posições por módulo
c. 360 total de posições
d. 1 (um) led (3 dígitos) por posição
A3 Costas Médio Giro – (Curva C)
e. 15 módulos de flow rack
f.
24 posições por módulo
g. 360 total de posições
h. 1 (um) led (3 dígitos) por posição
Caso tenha produtos a serem separados apenas nos nichos (equipamento que fica nas costas do
operador), os leds (3 dígitos) do Flow Rack (Frente) acenderão na cor Rosa, informando
visualmente o operador que existe separação nas costas e os leds (10 dígitos) das posições dos
produtos dos nichos deverão acender informando ao operador o endereço e a quantidade de
cada item que deverá ser separado para aquele pedido, operador realiza a separação do item da
posição conforme a quantidade indicada, e aperta o botão aceso da posição informando que
aquele item foi separado, e segue para a próxima posição acesa e repete o processo até que
separe todos os itens das posições acesas.
Ao finalizar a separação de todos os itens solicitados dos Nichos, todas as posições dos nichos
acenderão cor verde informando que a separação nos nichos foi concluída com sucesso.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação
foi concluída com sucesso. Operador poderá confirmar o número da caixa que está sendo
separada no display (6 dígitos) que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão
fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack (frente) onde o operador
ao apertar esse botão, automaticamente o sistema envia uma nova caixa para esse pedido e será
a próxima a ser liberada no order start.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Fracionados A (PBL - Fila Expressa)  
**Score:** — (nome-topico) | **ID:** 3cb954d3bfc0638b

Para garantir a rastreabilidade das coletas, é obrigatório que o operador realize o login na
estação de separação antes de iniciar qualquer atividade de picking. O login será realizado
diretamente na tela do PDV do posto, onde o operador deverá inserir suas credenciais (usuário
e senha) para se identificar no sistema.
Caso uma caixa seja lida no scanner do posto e não haja um operador logado, o sistema não
iniciará a tarefa de separação e sinalizará a pendência acendendo todos os LEDs na cor laranja.
Após o login ser efetuado com sucesso no PDV, os LEDs do flow rack acenderão na cor azul,
indicando que a estação está pronta para operar.
Ao realizar o login, todos os leds do flow rack acenderão azul, informando que o login foi realizado
com sucesso.
Ao chegar ao ponto de leitura da linha, essa etiqueta será lida por um leitor fixo e o sistema fará
a identificação do volume e verifica se existem produtos a serem separados no posto referente.
Caso exista produtos a serem separados nesse posto de separação a caixa então é desviada para
a estação. Ao ser desviada na estação de separação, o operador terá 2 (Frente e Costas)
possíveis locais de separação:
O sistema WCS deverá permitir 1 (uma) ou mais posições com o mesmo SKU.
Flow Rack – Frente Alto Giro – (Curva A e B)
a. 16 módulos de flow rack
b. 12 posições por módulo
c. 192 total de posições
d. 1 (um) led (3 dígitos) por posição
Caso tenha produtos a serem separados no flow rack (equipamento que fica na frente do
operador da estação), os leds (3 dígitos) que são únicos por posição de produtos deverão acender
informando ao operador a quantidade de cada item que deverá ser separado para aquele pedido,
operador realiza a separação do item da posição conforme a quantidade indicada, e aperta o
botão aceso da posição informando que aquele item foi separado, e segue para a próxima posição
acesa e repete o processo até que separe todos os itens das posições acesas.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação
foi concluída com sucesso.
Caso tenha produtos a serem separados nos Nichos (Costas), os leds do Flow Rack (Frente)
deverão acender em rosa, conforme descrito nos próximos itens.
Operador poderá confirmar o número da caixa que está sendo separada no display (6 dígitos)
que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão
fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack onde o operador ao
apertar esse botão, automaticamente o sistema WCS gera um novo volume de separação para
esse pedido e será a próxima a ser liberada no order start.
Costas Médio Giro – (Curva C)
a. 15 módulos de flow rack
b. 24 posições por módulo
c. 360 total de posições
d. 1 (um) led (3 dígitos) por posição
Caso tenha produtos a serem separados apenas nos nichos (equipamento que fica nas costas do
operador), os leds (3 dígitos) do Flow Rack (Frente) acenderão na cor Rosa, informando
visualmente o operador que existe separação nas costas e os leds (10 dígitos) das posições dos
produtos dos nichos deverão acender informando ao operador o endereço e a quantidade de
cada item que deverá ser separado para aquele pedido, operador realiza a separação do item da
posição conforme a quantidade indicada, e aperta o botão aceso da posição informando que
aquele item foi separado, e segue para a próxima posição acesa e repete o processo até que
separe todos os itens das posições acesas.
Ao finalizar a separação de todos os itens solicitados dos Nichos, todas as posições dos nichos
acenderão cor verde informando que a separação nos nichos foi concluída com sucesso.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação
foi concluída com sucesso. Operador poderá confirmar o número da caixa que está sendo
separada no display (6 dígitos) que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão
fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack (frente) onde o operador
ao apertar esse botão, automaticamente o sistema envia uma nova caixa para esse pedido e será
a próxima a ser liberada no order start.
ShortPicking
Em casos que o operador verifique que a quantidade física do produto solicitado para ser separado
é inferior que a quantidade solicitada pelo sistema no pedido, operador deverá apertar o botão
no led da posição com sinal de menor para diminuir a quantidade no sistema, e realiza a
separação da quantidade real disponível.
Exemplo: Pedido no sistema solicita 10 (dez) unidades do sku ‘XPTO’, operador ao realizar a
separação nota que fisicamente existe apenas 8 (oito) unidades desse sku, operador aperta o
botão para diminuir a quantidade até 8 (oito), realiza a confirmação apertando o botão do led
confirmando a separação de 8 (oito) unidades do sku ‘XPTO’, realizando assim o processo de
ShortPicking.
Com isso, o WMS ao receber as informações de separação realiza a tarefa de reabastecimento.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** FlowHack (Baixo Giro)  
**Score:** — (semantico) | **ID:** ec8b2f97161674a8

Quando o MAC Address for lido no PDV, confirmado visualmente que o SKU está correto e o produto estiver parametrizado para uma posição de FlowHack no Picking Map, o WCS acenderá o LED da posição na cor verde, indicando ao operador em qual posição/caixa o item deve ser colocado. Após colocar o item na caixa, o operador confirmará a ação pressionando o LED.
Em cada posição, haverá uma caixa onde os itens deverão ser depositados conforme a triagem. Seguindo a parametrização informada no Picking Map, ao completar X unidades naquela posição, o WCS acenderá o LED na cor azul após a confirmação de alocação e imprimirá uma etiqueta com o QrCode de todos os MacAdrees que foram alocados nesta caixa, seguindo o layout abaixo:
Com a etiqueta impressa, o operador vincula-a à caixa e confirma a ação pressionando o LED novamente. Após essa confirmação, o operador empurrará a caixa para o outro lado do FlowHack. Haverá um outro parâmetro informado no Picking Map, que indicará o número de caixas que precisam ser formadas para que o operador do outro lado retire as caixas e as coloque no pallet. Quando o número de caixas parametrizado para aquela respectiva posição for alcançado, o LED na parte de trás do FlowHack será aceso, indicando quantas caixas o operador deve retirar e alocar no pallet para posterior transporte ao estoque. Esta é a última etapa que compete ao WCS no que se refere aos produtos de baixo giro (FlowHack).
A alocação dos volumes retirados para o pallet não é de responsabilidade do WCS.
Pode haver casos em que o volume recebido contenha, em seu QR Code, o valor já parametrizado de uma caixa. Neste cenário, após a validação pela operação, o WCS deve apenas indicar a posição onde o volume inteiro deve ser alocado, sem a necessidade de alocar item por item.
O WCS sempre deverá questionar via pop-up se a etiqueta de finalização do volume deve ser impressa ou não. Como já mencionado, em casos em que uma etiqueta já tenha sido impressa, não será necessária a impressão de uma nova.
Observação: O mesmo SKU pode estar em mais de uma posição no FlowHack. Nesses casos, o WCS deverá realizar a alocação de forma cadenciada, considerando a visão de caixas. Ou seja, o sistema formará uma caixa na posição 1, depois formará outra caixa na posição 2 e, em seguida, retornará à posição 1 para completar a alocação.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** Anomalias  
**Score:** — (semantico) | **ID:** c2c5e637561dbde5

No cadastro do Picking Map, a operação separará algumas posições do FlowHack que serão dedicadas exclusivamente para itens considerados "anomalias", ou seja, produtos que apresentem qualquer tipo de erro.
As anomalias possíveis são:
Itens que não estão presentes na base de dados importada pela operação.
Itens que possuem um MAC Address cadastrado, mas que, ao verificar o SKU, o operador constata que não está compatível com o físico.
Caso seja bipado um item e ele esteja na base de dados, mas não pertença à nota fiscal selecionada pelo operador, este item não será considerado uma anomalia. Nesse caso, deve ser informado apenas que o item não pertence àquela nota.
Cada tipo de anomalia deverá conter um código fixo para ser preenchido no picking map e o WCS ter conhecimento de qual posição pertence a cada tipo de erro. Estes códigos deverão ser padronizados durante a implantação do projeto. Segue Exemplo :
Posição 123 = anomalia código 1 – Anomalias que não estão presentes na base.
Posição 124 = anomalia código 2 – Itens que o MacAdress informado não está condizente com o físico.
Nestas posições tambem será padronizado uma quantidade de itens para serem formados uma única caixa e serem impressas as etiquetas com os Mac Adress no QrCode do volume, seguindo as mesmas regras de uma posição padrão de flowhack.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** FlowHack (Baixo Giro)  
**Score:** — (semantico) | **ID:** 82f8b7d692285998

Quando o MAC Address for lido no PDV, confirmado visualmente que o SKU está correto e o
produto estiver parametrizado para uma posição de FlowHack no Picking Map, o WCS acenderá
o LED da posição na cor verde, indicando ao operador em qual posição/caixa o item deve ser
colocado. Após colocar o item na caixa, o operador confirmará a ação pressionando o LED.
Em cada posição, haverá uma caixa onde os itens deverão ser depositados conforme a triagem.
Seguindo a parametrização informada no Picking Map, ao completar X unidades naquela posição,
o WCS acenderá o LED na cor azul após a confirmação de alocação e imprimirá uma etiqueta
com o QrCode de todos os MacAdrees que foram alocados nesta caixa, seguindo o layout abaixo:
Com a etiqueta impressa, o operador vincula-a à caixa e confirma a ação pressionando o LED
novamente. Após essa confirmação, o operador empurrará a caixa para o outro lado do FlowHack.
Haverá um outro parâmetro informado no Picking Map, que indicará o número de caixas que
precisam ser formadas para que o operador do outro lado retire as caixas e as coloque no pallet.
Quando o número de caixas parametrizado para aquela respectiva posição for alcançado, o LED
na parte de trás do FlowHack será aceso, indicando quantas caixas o operador deve retirar e
alocar no pallet para posterior transporte ao estoque. Esta é a última etapa que compete ao WCS
no que se refere aos produtos de baixo giro (FlowHack).
A alocação dos volumes retirados para o pallet não é de responsabilidade do WCS.
Pode haver casos em que o volume recebido contenha, em seu QR Code, o valor já parametrizado
de uma caixa. Neste cenário, após a validação pela operação, o WCS deve apenas indicar a
posição onde o volume inteiro deve ser alocado, sem a necessidade de alocar item por item.
O WCS sempre deverá questionar via pop-up se a etiqueta de finalização do volume deve ser
impressa ou não. Como já mencionado, em casos em que uma etiqueta já tenha sido impressa,
não será necessária a impressão de uma nova.
Observação: O mesmo SKU pode estar em mais de uma posição no FlowHack. Nesses casos, o
WCS deverá realizar a alocação de forma cadenciada, considerando a visão de caixas. Ou seja, o
sistema formará uma caixa na posição 1, depois formará outra caixa na posição 2 e, em seguida,
retornará à posição 1 para completar a alocação.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** Anomalias  
**Score:** — (semantico) | **ID:** 2dd979b227951b5d

No cadastro do Picking Map, a operação separará algumas posições do FlowHack que serão
dedicadas exclusivamente para itens considerados "anomalias", ou seja, produtos que
apresentem qualquer tipo de erro.
As anomalias possíveis são:
Itens que não estão presentes na base de dados importada pela operação.
Itens que possuem um MAC Address cadastrado, mas que, ao verificar o SKU, o operador
constata que não está compatível com o físico.
Caso seja bipado um item e ele esteja na base de dados, mas não pertença à nota fiscal
selecionada pelo operador, este item não será considerado uma anomalia. Nesse caso, deve
ser informado apenas que o item não pertence àquela nota.
Cada tipo de anomalia deverá conter um código fixo para ser preenchido no picking map e o WCS
ter conhecimento de qual posição pertence a cada tipo de erro. Estes códigos deverão ser
padronizados durante a implantação do projeto. Segue Exemplo :
Posição 123 = anomalia código 1 – Anomalias que não estão presentes na base.
Posição 124 = anomalia código 2 – Itens que o MacAdress informado não está condizente
com o físico.
Nestas posições tambem será padronizado uma quantidade de itens para serem formados uma
única caixa e serem impressas as etiquetas com os Mac Adress no QrCode do volume, seguindo
as mesmas regras de uma posição padrão de flowhack.
