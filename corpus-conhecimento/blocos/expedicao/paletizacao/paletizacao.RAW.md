# paletizacao.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Cubagem de Pallet/Routeiner  
**Score:** — (nome-topico) | **ID:** ef127c42cedc31b4

Operador deverá cadastrar previamente no sistema WCS, as dimensões (altura, largura e comprimento) e peso máximo suportado nos dois tipos de unidades de carga : Pallet e Routainer,  para que o sistema WCS utilize dessas informações para realizar a cubagem de pallet.
Deverá ser parametrizado uma cubagem de segurança, para quando o pallet e o Routeiner alcancem esse valor o operador seja notificado (via led) que o pallet está chegando em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no sistema WCS que o operador deve fechar o PTL ao atingir 80% de sua ocupação de cubagem ou peso.
Sistema WCS ao atingir essa ocupação de 80% solicitará o fechamento do PTL, e não permitirá a alocação de volumes sobressalentes.
WCS fará a solicitação para fechamento de PTL, operador deve realizar o fechamento e automaticamente será aberto o próximo pallet do PTL
WCS fará o cálculo de cubagem com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 72e95a34cd0c3785

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar esse valor o operador seja notificado após a alocação que o pallet chegou em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS iniciará o processo de fechamento automático do pallet e informará ao operador via coletor que o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Aloca Pallet  
**Score:** — (nome-topico) | **ID:** 5c04350c6ef8b49e

Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de paletização. Esse processo tem como objetivo agrupar os volumes conforme rota e transportadora, garantindo organização e rastreabilidade para expedição.
A paletização é realizada com o auxílio de um coletor Android ou através da TV da rampa, que se comunica diretamente com o WCS.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** d2793d7c8c65918c

O fechamento do pallet poderá ocorrer de forma manual ou automática, conforme os parâmetros de peso e cubagem previamente cadastrados no WCS.
Fechamento Automático:
Quando os limites de peso e/ou cubagem configurados forem atingidos, o WCS realizará automaticamente o fechamento do pallet solicitando a leitura da etiqueta após a alocação do volume.
Fechamento Manual:
Caso os parâmetros de peso e cubagem não sejam atingidos ou a operação opte pelo fechamento manual, o operador deverá:
Realizar a leitura do código da posição (ex.: FPP001) 3 vezes consecutivas.
Após a validação, o coletor solicitará a leitura da etiqueta do pallet, que conterá o identificador único do pallet master (RG).
Após a leitura da etiqueta, o WCS concluirá o fechamento do pallet.
O WCS enviará ao WMS a integração contendo todos os volumes pertencentes ao pallet.
Observações:
A impressão da etiqueta física do pallet é de responsabilidade da operação.
O WCS irá apenas registrar o identificador lido (RG) para fins de rastreabilidade.
Recomenda-se que a etiqueta do pallet siga um padrão de codificação com prefixo, facilitando a identificação visual e o controle do processo.
O desvio no sorter não é obrigatório para a paletização, desde que os volumes estejam devidamente integrados e vinculados ao pallet no WCS.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Controle de Mistura de Categorias no Picking Fracionado  
**Score:** — (semantico) | **ID:** 2cb4d6653a0fd9c0

O WCS disponibilizará uma tela específica para Controle de Mistura de Categorias, destinada a garantir que determinadas categorias de produtos não sejam misturadas dentro do mesmo volume (pega) durante o processo de picking fracionado.
Nessa tela, o operador ou supervisor poderá:
Selecionar uma categoria principal a ser configurada.
Visualizar todas as demais categorias cadastradas no sistema.
Definir quais categorias não podem ser misturadas com a categoria principal selecionada.
Gravar e editar regras de restrição, garantindo que o comportamento sistêmico reflita as necessidades operacionais e de qualidade do cliente.
Essas configurações permitirão que o WCS valide, no momento da cubagem e criação das caixas plásticas, se existe alguma restrição de mistura entre categorias.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Controle de Mistura de Categorias no Picking Fracionado  
**Score:** — (semantico) | **ID:** 9fb322ce55ddb45c

O WCS disponibilizará uma tela específica para Controle de Mistura de Categorias, destinada a garantir que determinadas categorias de produtos não sejam misturadas dentro do mesmo volume (pega) durante o processo de picking fracionado.
Nessa tela, o operador ou supervisor poderá:
Selecionar uma categoria principal a ser configurada.
Visualizar todas as demais categorias cadastradas no sistema.
Definir quais categorias não podem ser misturadas com a categoria principal selecionada.
Gravar e editar regras de restrição, garantindo que o comportamento sistêmico reflita as necessidades operacionais e de qualidade do cliente.
Essas configurações permitirão que o WCS valide, no momento da cubagem e criação das caixas plásticas, se existe alguma restrição de mistura entre categorias.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Controle de Mistura de Categorias no Picking Fracionado  
**Score:** — (semantico) | **ID:** 87d8006f1b38ecef

O WCS disponibilizará uma tela específica para Controle de Mistura de Categorias, destinada a garantir que determinadas categorias de produtos não sejam misturadas dentro do mesmo volume (pega) durante o processo de picking fracionado.
Nessa tela, o operador ou supervisor poderá:
Selecionar uma categoria principal a ser configurada.
Visualizar todas as demais categorias cadastradas no sistema.
Definir quais categorias não podem ser misturadas com a categoria principal selecionada.
Gravar e editar regras de restrição, garantindo que o comportamento sistêmico reflita as necessidades operacionais e de qualidade do cliente.
Essas configurações permitirão que o WCS valide, no momento da cubagem e criação das caixas plásticas, se existe alguma restrição de mistura entre categorias.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** a897c4dad4184891

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar esse valor o operador seja notificado (via led) que o pallet chegou em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS iniciará o processo de fechamento automático do pallet e informará ao operador via cor do led que o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** 6bafab5ebca8ba92

O fechamento do pallet será feito dentro dos processos da Invent e poderá acontecer de 4 formas diferentes:
Cubagem do pallet
Peso do palete
Via tela de fechamento de pallet (forçado)
Diretamente pelo operador nas Rampas (forçado) – Realizando a leitura do código da posição para iniciar o processo de fechamento e após realizando a leitura da master
Em todos os processos após a finalização do pallet enviamos as informações descritas no tópico “4.5 Pallet Montado” para o WMS fazer as tratativas necessárias.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar a leitura de um código master que será vinculado aos volumes que foram alocados a este pallet.
A impressão deste código master é de responsabilidade do WMS.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Critérios Operacionais de Processamento  
**Score:** — (semantico) | **ID:** ac9e10cdb8e12940

Separação de Pedidos Full Case (OS TIPO 10)
A liberação ocorre somente após a impressão e liberação das etiquetas dos pedidos de Pallet Sorter, garantindo que os pallets fechados sejam priorizados antes do início da separação Full Case.
Separação de Pedidos Fracionados (OS TIPO 22)
Podem ser induzidos a qualquer momento. O WCS apenas garante o desvio correto no chute, sem alocação nos PTLs.
Matriz de Fragilidade
Direcionamento dos produtos conforme resistência (leve → médio → pesado).
Tipo de Ordem de Serviço
O campo TIPO OS com valor 22 indica volumes fracionados. Esses não serão alocados nos PTLs, apenas desviados.
Observações:
Os campos a serem consumidos e atualizados pelo WCS serão validados durante os testes de integração.
A centralização de envios, confirmações e cancelamentos em uma única tabela compartilhada otimiza o processo, aumenta a rastreabilidade e reduz a complexidade da integração entre sistemas.
Tabela ORDEMSERVICO WCS:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Dashboard Indução BK25 (MONITOR)  
**Score:** — (semantico) | **ID:** 2a1b3bf150404580

Serão listados os 5 paletes referentes as OTs com maior urgência (prioridade), sendo classificado por cores, os paletes de maior urgência (Corte) apareceram em vermelho, os paletes importantes (Onda iniciada) apareceram em amarelo, os paletes necessários (Ondas preparadas) apareceram em verde e por fim os paletes de ocupação de estoque de picking (capacidade) a apareceram em branco.
Tabela de dados:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Processo (Indução, avaliação, aprovação ou rejeito)  
**Score:** — (semantico) | **ID:** 82a7cc231ec336e5

No BK25 após a indução do palete no portal ocorre uma sequência de avaliações no palete como análise de tombamento por lado (esquerdo, frente, direito e costas), análise por baixo do palete (palete quebrado), altura do palete e peso do palete, com a leitura da etiqueta de palete (UD) o PLC envia ao WCS um telegrama com as informações de avaliação do palete junto com sua UD.
Em casos em que não ocorra a leitura e o tempo de leitura da UD se esgote (timeout) o PLC enviara a informação NOREAD no lugar do número da UD.
Através das informações recebidas do PLC o WCS faz uma análise dos pontos avaliados pelo PLC e determina se o palete está apto para seguir com processo de armazenagem sendo direcionado ao berço de entrada do transelevador ou se ele está fora dos padrões de aceitação e deve ser rejeitado.
Para os casos em que o palete for rejeitado no BK25 a movimentação desse palete recebe o status de REJEITADA [Regras de Movimentação] e o motivo de rejeito é informado no relatório de rejeito do BK25 onde através do número do palete é possível identificar o ou os motivos de rejeito.
O status da OT não é alterado em casos de rejeito, a OT se mante pendente da 2ª confirmação, caso exista a necessidade de cancelar/ estornar a OT (Ex: Excesso de peso) é necessário fazer a confirmação manual do transporte na tela de ordens de transportes onde ao selecionar a confirmação manual e passar pela autenticação de usuário o WCS envia o IDOC TOCO. Caso for necessário a retirada desse saldo do estoque do WCS é necessária criar uma OT para retirada do palete via IDOC enviado pelo SAP e se necessário o WCS deverá aceitar a entrada dele palete com um novo ID de reabastecimento.
Não é possível realizar estornos/cancelamentos em OTs que já sofreram alguma confirmação.
Exemplo que IDOC CATO (SAP  WCS) [Cancelamento de OT]:
Nos casos em que o palete for aprovado e seguir para o transelevador (berço de entrada) o status da movimentação é alterado para INDUZIDA [Regras de Movimentação] e o WCS aguarda a chegada do palete no berço de entrada do transelevador para receber a confirmação (ACKN) de desvio do PLC, que é o gatilho da liberação do palete para iniciar a movimentação com o transelevador.
Para os casos em que uma movimentação (OT) de maior prioridade seja aprovado no BK25 todas as movimentações já existentes no BK25 e mesa de entrada (que não iniciaram) recebem a atualização de prioridade com o mesmo valor da prioridade da movimentação recém aprovada no BK25.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Saida de palete vazios  
**Score:** — (semantico) | **ID:** 3f94336148200f49

A saída de paletes vazio é a movimentação de paletes que são depositados nas posições de saída de paletes onde o PLC ao receber a ativação do sensor de uma posição de saída de palete dispara uma informação ao WCS informando que o palete está disponível para retirada o WCS ao receber essa informação cria uma movimentação de retirada de palete ao transelevador com a prioridade vinda do valor um parâmetro, dessa forma quando for a prioridade designada foi a primeira da fila o WCS envia o comando ao PLC para fazer as movimentações de retirada desse palete.
Os status de movimentações da saída de palete serão PENDENTE (criação da movimentação) e FINALIZADA (quando PLC confirma a entrega do palete na posição de saída).

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Gerenciamento de sequência de paletes  
**Score:** — (semantico) | **ID:** 4683538729180c37

O sequenciamento de paletes é uma ordenação com base no FIFO onde o primeiro palete a entrar na posição de picking recebe sequência 1, o próximo palete a sequência 2 e por fim o ultimo palete a sequência 3, isso para posições de drive-in, já as posições de porta-palete existira somente 1 palete logo haverá somente a sequência 1, o sequenciamento na posição está vinculado ao palete (UD) dessa forma como podem haver vários lotes por palete podemos ter vários lotes com a mesma sequência de paletes.
O gerenciamento de sequência de palete só ocorre em 3 cenários:
Reserva de todos os volumes do palete diminuindo a sequência do palete para 0 e a sequência dos demais paletes da posição recebem o decréscimo de 1, assim disponibilizando os paletes de trás para coleta (atual ou futura).
Ajuste de estoque (inventario) (SAP  Velox) onde todo saldo de um palete (1 ou vários lotes) foram retirados da sua posição de origem, com isso o palete deixa de existir no estoque do WCS e todo as sequencias posteriores (paletes) a sequência eliminada sofrem o decréscimo de 1. A regra deve considerar apenas os paletes que estão após a sequência removida. Por exemplo, se o palete de sequência 2 for eliminado, apenas o palete de sequência 3 terá sua sequência decrementada para 2, enquanto o palete de sequência 1 permanece inalterado. Da mesma forma, a remoção de um palete de uma determinada sequência não impacta os paletes posicionados antes dela
Corte, quando ocorre um corte, o WCS envia um TORD com a quantidade remanescente da posição, após o envio do TORD pelo WCS o SAP retorna com um TORD confirmando, o WCS realiza a limpeza do estoque da posição e libera o endereço para receber novos paletes e dessa forma e gerada uma nova sequência por ordem de chegada (FIFO).

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 3096e6826d860efb

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar esse valor o operador seja notificado após a alocação que o pallet chegou em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS iniciará o processo de fechamento automático do pallet e informará ao operador via coletor que o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Aloca Pallet  
**Score:** — (nome-topico) | **ID:** 4d2d585ced9ac017

Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de paletização. Esse processo tem como objetivo agrupar os volumes conforme rota e transportadora, garantindo organização e rastreabilidade para expedição.
A paletização é realizada com o auxílio de um coletor Android ou através da TV da rampa, que se comunica diretamente com o WCS.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** e05f70739cc6ef0f

O fechamento do pallet poderá ocorrer de forma manual ou automática, conforme os parâmetros de peso e cubagem previamente cadastrados no WCS.
Fechamento Automático:
Quando os limites de peso e/ou cubagem configurados forem atingidos, o WCS realizará automaticamente o fechamento do pallet solicitando a leitura da etiqueta após a alocação do volume.
Fechamento Manual:
Caso os parâmetros de peso e cubagem não sejam atingidos ou a operação opte pelo fechamento manual, o operador deverá:
Realizar a leitura do código da posição (ex.: FPP001) 3 vezes consecutivas.
Após a validação, o coletor solicitará a leitura da etiqueta do pallet, que conterá o identificador único do pallet master (RG).
Após a leitura da etiqueta, o WCS concluirá o fechamento do pallet.
O WCS enviará ao WMS a integração contendo todos os volumes pertencentes ao pallet.
Observações:
A impressão da etiqueta física do pallet é de responsabilidade da operação.
O WCS irá apenas registrar o identificador lido (RG) para fins de rastreabilidade.
Recomenda-se que a etiqueta do pallet siga um padrão de codificação com prefixo, facilitando a identificação visual e o controle do processo.
O desvio no sorter não é obrigatório para a paletização, desde que os volumes estejam devidamente integrados e vinculados ao pallet no WCS.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 3c1449da99cea995

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar esse valor o operador seja notificado (via led) que o pallet chegou em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS iniciará o processo de fechamento automático do pallet e informará ao operador via cor do led que o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** b6a358a734a0a27a

O fechamento do pallet opera em modo configurável por operação:
Modo manual: o operador avalia visualmente e fecha o pallet pelo fluxo de PTL. Não há bloqueio automático por cubagem/peso.
Modo automático por cubagem/peso: o operador cadastra previamente a cubagem (m³) e o peso (kg) máximos do pallet, além de valores de segurança. Ao atingir o valor de segurança, o WCS notifica via LED; ao atingir o limite, solicita o fechamento, bloqueia novas alocações, inicia o fechamento automático e sinaliza via cor do LED.
No modo automático, o cálculo usa as dimensões e o peso dos volumes recebidos via Cadastro de Produtos.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Fechamento de Pallet (Etiqueta Master)  
**Score:** — (nome-topico) | **ID:** 3260b18ec5d08daa

O encerramento do pallet pode ocorrer de três formas:
Automático (Físico): O sistema estima que a altura/peso atingiu o limite configurado.
Lógico (Fim de Transporte): Não há mais volumes previstos para aquele transporte no sistema.
Manual: O operador força o fechamento via botão de função no PTL (ex: Pallet instável ou fim de turno).
Ação:
O sistema imprime automaticamente a Etiqueta Master (contendo os dados da carga consolidada).
O WCS envia a mensagem de fechamento ao WMS.
O operador cola a etiqueta no stretch e libera o pallet para a doca de expedição.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** c0fbbdba37c31dce

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar esse valor o operador seja notificado após a alocação que o pallet chegou em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS iniciará o processo de fechamento automático do pallet e informará ao operador via coletor que o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Fechamento de Pallet  
**Score:** — (nome-topico) | **ID:** 3502ff97a0949f7f

O sistema suporta três formas de fechamento de pallet:
Automático: Quando peso ou cubagem atingem o limite configurado, o WCS realiza automaticamente o fechamento solicitando a leitura da etiqueta do pallet.
Lógico: Quando não há mais volumes previstos para aquela posição.
Manual: O operador realiza a leitura do código da posição. Após a validação, o sistema solicita a leitura da etiqueta do pallet.
Ao fechar, o WCS dispara a impressão da etiqueta master na impressora dedicada instalada na área do PTL, envia integração de expedição ao WMS Spark informando o conteúdo do pallet e libera a posição PTL para novo pedido. A impressora dedicada ao PTL será a Zebra ZT230 (modelo confirmado pela BR Supply). A aquisição do equipamento ficará a cargo da BR Supply.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** Gatilhos de Fechamento de Pallet  
**Score:** — (nome-topico) | **ID:** 840fc2b4505fe1db

O WCS gerencia o encerramento do pallet de forma automática baseada em dois critérios:
Fechamento Físico (Cubagem): O algoritmo do WCS identifica que a soma volumétrica (m³) ou peso dos itens bipados atingiu o limite configurado para aquele pallet físico.
Fechamento Lógico (Fim de Pedido): Todos os itens previstos para aquela rota/cliente foram bipados, não havendo mais pendências.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Conferência Final de Palete  
**Score:** — (semantico) | **ID:** cdfc8507e29c2cb8

Essa etapa tem como objetivo validar se todos os volumes do palete foram corretamente alocados, garantindo a integridade da expedição.
A conferência será realizada por meio de um coletor Android, integrado diretamente ao WCS.
Fluxo Operacional da Conferência do Palete
O operador realiza a leitura da posição que ele deseja conferir (Previamente cadastrada e vinculada à loja).
O operador realiza a leitura da etiqueta do volume gerada pelo WCS.
O WCS valida o volume e alimenta o contador de volumes conferidos.
O operador continua a leitura (bipagem) de todos os volumes do palete.
Após a leitura do último volume, o WCS sinaliza que o endereço foi conferido por completo.

Em caso de erro onde o WCS identifica que aquele volume não pertence ao palete que foi iniciado a conferência ele apresentará mensagem de erro informando que o volume não pertence ao destino iniciado.
Validações de Integridade
Durante a conferência, o WCS executará automaticamente:
Verificação da loja de destino do volume.
Verificação de etiquetas duplicadas.
Garantia de que o volume foi colocado no palete correto.
Volumes que não atenderem às regras serão bloqueados para tratativa operacional.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Benefícios esperados  
**Score:** — (semantico) | **ID:** d5602eff1a2d62de

Redução do tempo de fechamento dos pallets / separação completa dos pedidos.
Eliminação do trânsito do recurso entre múltiplos Order Start para concluir um mesmo pedido.
Melhor aproveitamento dos recursos disponíveis, dado que não há recurso dedicado por Order Start.
Tela atual do Velox:

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Limitação de Paletes em Conferência  
**Score:** — (semantico) | **ID:** 805b351706864244

Para evitar acúmulo excessivo de paletes pendentes, o sistema disporá de parâmetro que define o número máximo de paletes em conferência simultânea:

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Ajustes de sistema Velox  
**Score:** — (semantico) | **ID:** 8596858c0b6d5576

Tela palete:
Incluir na tela “paletes” a informação de onda na grid.
Incluir nos “detalhes do palete” na tela palete uma coluna com a matriz de fragilidade.
Colocar uma opção de corte em Batch(lote), na tela de paletes. Como um sub-acesso a alguns usuários. Utilizar a Aba ações de para colocar a opção de corte de volumes que estão aguardando.
Houve casos em que o Sorter travou e tivemos que cortar volume a volume, para liberar o palete para entrega em situações como essa deve ter uma situação de contorno.
Tela volumes:
Incluir na tela de volumes a data e hora da confirmação de alocação do volume do PTL.
Tela de ocorrências:
Incluir a matriz de fragilidade na tela de ocorrências, não foi solicitado nos deploys anteriores. Mas, com o aumento de volume na separação essa informação se tornou importante para qualidade de vida da gestão.
Cancelamento de palete:
É importante ter uma opção no sistema onde possamos cancelar paletes que ainda não tiveram nenhum volume alocado e impressão não realizada.
Quando o sistema apresenta problemas, não temos um fallback para cancelar os paletes e tratar tudo pelo WMS. É importante, tem a opção de cancelamento para momentos de turbulência.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Indicadores do Dashboard  
**Score:** — (semantico) | **ID:** f5b22e09e2a7d46d

Paletes Previstos: Total de paletes em aberto e criados no sistema, pendentes de finalização.
Paletes Criados Aguardando Abertura: Quantidade de paletes criados no sistema que ainda aguardam abertura formal para início da alocação.
Paletes em Produção: Quantidade de paletes com status aberto e em processo ativo de recebimento de volumes.
Paletes Finalizados: Quantidade de paletes finalizados no sistema ao longo do dia corrente.
Curva de Finalização de Paletes: Gráfico representando a soma acumulada de paletes finalizados por hora ao longo do dia atual. O valor de cada hora acumula sobre a hora anterior, formando uma curva de produção progressiva.
Tempo Médio para Fechar Paletes: Calculado sobre os paletes finalizados no dia corrente. Mede o tempo médio entre a alocação da primeira caixa no palete e o seu fechamento formal no sistema.
Volumes Aguardando Impressão: Somatório de volumes vinculados a paletes no status “criado aguardando abertura” que ainda não tiveram suas etiquetas impressas.
Tabela de Paletes com Maior Tempo em Aberto: Lista os paletes em aberto ordenados de forma decrescente pelo tempo decorrido desde a alocação da primeira caixa. O sistema permitirá o cadastro parametrizável de níveis de urgência baseados no tempo (ex.: até 2h = Atenção; acima de 3h = Urgência), com sinalização visual por cor nas linhas da tabela.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Problema Atual  
**Score:** — (semantico) | **ID:** 7572d5776c578b96

No fluxo atual de Order Start Full Case, quando o operador acessa a tela de “OS fragilidade” seleciona uma rua para impressão, o WCS gera a fila de etiquetas agrupada por missão. Isso significa que, se uma missão possui 20 volumes destinados à Rampa 1, todas as 20 etiquetas são impressas em sequência antes que qualquer etiqueta de outra missão (destinada a outra rampa) seja gerada.
O resultado operacional é que o operador coleta e etiqueta um grande lote de volumes para a mesma rampa. Quando esses volumes chegam ao sorter, eles são todos desviados para a mesma saída, causando acúmulo excessivo em uma única rampa enquanto as demais rampas permanecem ociosas. Isso gera gargalos na expedição e reduz a produtividade geral da operação.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** ae61fa71258a61d2

O processo de fechamento de pallet poderá ser disparado de três maneiras distintas:
Conforme descrito no tópico 3.1.3, os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet, emendando-se também à utilização dos sinaleiros (item 3.1.3), que acenderão em verde e ficarão piscando.
Observação: No momento em que o pallet for fechado, o sistema MFC não irá disparar nenhuma request para o WMS do cliente, será feita apenas a alteração do status do pallet na própria base de dados da Invent, sendo este dado posteriormente consumido por meio de uma interface de integração disponibilizada.
Erro
Na ocasião de realizada a leitura de um volume que não corresponde àquela posição do PTL, o sinaleiro permanecerá com o LED vermelho piscando, indicando que o volume não corresponde à saída correspondente ou o código de barras lido não representa o DUN esperado naquela posição.
Distribuição uniforme
O sistema terá a capacidade de analisar a produção em cada saída, de modo a distribuir os produtos de forma equilibrada, balanceando a produção em cada uma delas.
Em outras palavras, o sistema da Invent será capaz de estabelecer um critério de direcionamento dos itens em função da demanda dos pedidos. Por exemplo: Em uma onda que contêm 2 pedidos com 5 itens de um único SKU, cada passagem de um volume do mesmo SKU sobre o Portal de leitura do sorter será distribuído pelo sistema Invent de forma igual e balanceada.
O objetivo principal desta funcionalidade é aplicar uma regra de balanceamento dos volumes em função das demandas de cada saída, evitando assim uma sobrecarga de desvio de itens/hora em uma única saída (a não ser que a regra não possa ser aplicada para aquela saída em específico).
Rejeito do Sorter
Para a região do rejeito do sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrado etc.)
Cancelamento de volume por falta de produto (Corte)
O sistema Invent deverá respeitar a falta de um produto (quando ocorrer). Neste caso a informação de falta referente ao SKU em específico será recebida pelo sistema da Invent e processada de acordo com uma regra de prioridade definida conforme abaixo:
Item pertence à um pallet que ainda não foi aberto
Remover o item de um lote/pedido que possuir a maior quantidade de itens pendentes
Classificação pela categoria do produto
O sistema Invent vai ignorar as categorias dos produtos e agrupá-las sem respeitar nenhum critério. Este controle deverá permanecer na operação de picking e gerenciamento das ondas que serão disponibilizadas no sistema, responsabilidade do cliente final.
Retirada de volumes devido avaria de produto
O sistema Invent permitirá a retirada de um volume quando ocorrer avaria de produto. Através de uma tela específica, o operador do sistema determinará o volume e respectiva loja que será removido. Esta funcionalidade será aplicada apenas para os pallets que até o momento não foram consumidos pela integração de dados através do sistema WMS/ERP do Tenda Atacado.
OBS: Neste caso, o volume removido não será substituído por um novo, devendo ocorrer o embarque da carga considerando a falta do item.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** 31c210ae6061c713

No momento em que visualmente o operador decidir que a altura do pallet atingiu o limite, fara o processo de fechamento do pallet.
No momento em que o operador fechar o pallet o sistema Velox irá enviar a integração com as caixas alocadas.
As informações necessárias para que seja realizada a integração de finalização de pallet deverão ser enviadas via integração conforme arquivo (Palletize_Container.xml).

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY - INDUCAO SORTER REV1.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** 83ed2cd1a060d892

Metodologia usada para finalizar o pallet e enviar as informações para o WMS de todos os volumes que foram alocados entre a abertura e finalização do pallet.
Conforme necessidade do time Grupo Nós, a abertura e as regras de separação no sorter se mantém, apenas será alterado a regra de fechamento do pallet.
O pallet poderá ser fechado em três cenários :
Altura do pallet (fechamento forçado pelo operador da rampa)
Número máximo de volumes por pallet ( parâmetro que deve ser preenchido no sistema)
Finalização do pedido (finalizado automaticamente pelo sistema)
Para realizar o fechamento forçado do pallet será implementado uma etiqueta por PTL composta por “FP” e o número da posição, por exemplo “FP015”. Quando o comando for lido duas vezes seguidas, o sistema entende que está sendo solicitado o fechamento do pallet e acenderá o LED da posição na cor laranja indicando ao operador o fechamento do pallet, sendo assim o Velox imprime a etiqueta do pallet. Operador deve clicar no LED e automaticamente o sistema irá abrir o próximo pallet.
Será seguido a mesma rotina de LEDs descrita acima para os casos de “Número máximo de volumes por pallet” quando for atingido a quantidade de volumes estipulada por parâmetro preenchido pelo usuário/cliente.
Velox será responsável por gerar a etiqueta de pallet de cada PTL no fechamento.
Sistema deve apresentar uma tela que mostre os pallets gerados e os volumes que compõem esse pallet.
Será enviado para o WMS a relação de todos os volumes e a etiqueta mãe daquele pallet.
Não haverá mudanças nos campos de integração de fechamento de pallet que existem atualmente. Apenas enviaremos o campo “pallet_nbr”  com o código da etiqueta de pallet que o próprio Velox gerou e seus respectivos volumes.
O fechamento automático realizado pelo Velox mantém as rotinas já estabelecidas, porém ao acender o LED na cor azul informará ao operador que aquele pedido em questão está finalizado e o Velox envia para a impressão a etiqueta do respectivo pallet
Será disponibilizado pelo time Grupo Nós 15 impressoras que realizarão as impressões das etiquetas de pallet geradas pelo Velox, contendo uma impressora por rampa de saída e uma no rejeito.
OBS: As impressoras devem estar dentro da rede da automação para uso do sistema Velox.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Reset  
**Score:** — (semantico) | **ID:** 6a0c1b7fce9325f5

Assim como etiquetas de abertura e fechamento de pallet, cada saída também terá a etiqueta de reset.
Essa etiqueta servirá para quando o operador realizar a rotina de abertura de pallet fora da sequência esperada.
Sequência mapeada para abertura de pallet:
1ª Leitura da etiqueta de abertura.
2ª Leitura do código de barras do crachá do operador.
3ª Leitura da etiqueta do pallet.
EX: Caso o operador inicie o processo fora da sequência mencionada acima, o pallet não será aberto e o sinaleiro apresentara a cor vermelha, nesse caso o operador faz a leitura dessa etiqueta de reset, fazendo com que a rotina seja reiniciada.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Caixa Adicional  
**Score:** — (semantico) | **ID:** dcaabfb9d17581e1

Operador realiza a separação do pedido, e ao verificar que a caixa atual não será suficiente para alocar todos os itens, deverá solicitar uma caixa adicional. Para isso ao lado do display principal terá um botão que quando acionado informa ao sistema VELOX que será necessária uma caixa adicional para aquele pedido, e automaticamente essa informação é enviada para o Order Start, para que o operador induza a caixa na linha.
Na tela do Order Start operador receberá a informação que existem caixas adicionais a serem induzidas na linha, e essa caixa será priorizada na tela do order start.
Velox informa ao operador o tipo de caixa que deverá induzir na linha e realiza a impressão da etiqueta.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Atender ordem de saída ou Crossdocking  
**Score:** — (semantico) | **ID:** fbe4361809086b83

Caso o pallet esteja livre, o primeiro tratamento testado é o de atender a alguma ordem de saída.
Se existir alguma OS específica para o pallet em questão (do tipo OT), ele é direcionado para saída.
O status da célula que estava reservado para entrada devido ao pallet que está entrando é desmarcado.
Se não houver ordem específica, as demais OS pendentes (do tipo NT) são testadas.
Para atender as OS pendentes, o pallet deve possuir o mesmo SKU, faixa e centro de custo.
Para cada OS pendentes o algoritmo de saída de pallet é executado para identificar o pallet que esteja armazenado que melhor atende à ordem. A saída do algoritmo é o pallet como resultado.
O pallet retornado do algoritmo é comparado com o pallet que está entrando para verificar se a diferença entre o período de expiração de ambos está dentro da tolerância. Se estiver dentro da tolerância significa que o pallet entrando pode atender à ordem e ele será destinado à saída.
O status da célula que estava reservado para entrada devido ao pallet que está entrando é desmarcado.
Caso nenhuma ordem pendente seja atendida, o pallet é testado para realizar o segundo tratamento, o Crossdocking, realizado com algum pallet armazenado que estivesse reservado para saída. As regras para definir se deve ocorrer Crossdocking estão definidas no item 5.2.4 Detalhes de Crossdocking.
Caso o Crossdocking seja possível o status da célula do pallet que estava reservado para saída é desmarcado e o status da célula que estava reservado para entrada devido ao pallet que está entrando também é desmarcado.
O Crossdocking é processado com o envio de confirmação para o SAP.
Se o Crossdocking não for possível de ser realizado o algoritmo é finalizado e nenhuma ordem pode ser atendida pelo pallet.
Testar ordens de saída ou Crossdocking:

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Transferência de pallets incompletos  
**Score:** — (semantico) | **ID:** 21d70c65393a1c13

A imagem abaixo apresenta as regras funcionais que regem o tratamento de ordens de saída de expedição. Os detalhes são apresentados abaixo.
Dado que há uma ordem saída de TPI, o primeiro passo é buscar os pallets que atendam as características da ordem. Para tal o algoritmo de Busca de Pallets Fracionados (BPF) é chamado e está detalhado no item 4.2.3.1 Busca Pallets Fracionados (BPF).
A partir deste ponto, as regras são as mesmas das apresentadas para os movimentos anteriores. Caso a lista esteja vazia, o algoritmo é finalizado por não haver pallets para atender a ordem.
Caso a lista possua itens, para cada pallet da lista, enquanto o pedido da ordem não for completado (igualar ou ultrapassar a quantidade solicitada) processa o pallet para saída:
A localização do pallet é reservada para saída (se estiver em uma célula). Se já estiver em trânsito para saída, apenas agrega o pallet à ordem de saída;
Destino do pallet: mesa de saída de transferência;
Realizada dedução dos itens na ordem de saída. O tratamento da quantidade pode ser em unidades ou peso variável. No caso de peso variável, se estiver dentro da tolerância, a ordem pode ser considerada como processada;
Se for uma SKU de peso variável, todo o pallet será reservado para saída, não apenas os itens que atendem a ordem. Neste caso o orquestrador irá gerar uma mensagem de confirmação para o SAP de todo o pallet, independentemente da quantidade solicitada na ordem;
Se a ordem for de venda futura, marcar o status dos itens do pallet como venda futura. A posição não será reservada para saída;
Se a ordem for de venda futura, a posição do pallet não será reservada para saída, porém se um pallet possuir itens de venda futura e agregar uma nova ordem que não seja venda futura, a localização será reservada para saída e somente os itens desta última ordem serão retirados na saída, quando o pallet voltar, os itens de venda futura continuarão pendentes.
No que toca a liberação de itens de venda futura em um mesmo pallet, a liberação será feita item a item através de interface M3 do SAP. O WCS liberará os itens na ordem em que forem solicitados pelo SAP.
Ao processar os pallets da lista, caso a ordem ainda possua caixas sem pallets para atender, ela será marcada como pendente.
Se a ordem for atendida completamente ela será marcada como processada.
O resultado é a lista dos pallets a serem retirados e confirmados ao SAP.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Realocação de pallets de baixa estação  
**Score:** — (semantico) | **ID:** 5d2e19d73b33ee93

As regras para baixa estação estão representadas na abaixo.
No início o WCS cria uma lista com todos os pallets de baixa estação que sejam candidatos a serem realocados. Para definir um pallet como candidato algumas regras devem ser seguidas:
O pallet deve ser de um SKU de baixa estação/normal;
Devem ser pallets atendidos pelo TREL que está em modo de realocação automática;
Os pallets devem estar em posições com o status “Ocupado” nos primeiros 2/3 do corredor;
Tipo do pallet – de acordo com o que foi passado como parâmetro, tipo 1 ou tipo 2;
O pallet não deve possuir uma missão de realocação pendente.
A lista dos pallets candidatos é ordenada na seguinte ordem:
Sazonalidade – Baixa estação e na sequência, Normal;
Prazo de Validade – em decrescente.
Se a lista não possuir nenhum pallet, a regra é finalizada e nenhuma missão de baixa estação será gerada;
Para cada pallet que estiver na lista, seguindo a ordem definida, será procurada a melhor posição vazia para ele ser alocado, seguindo os critérios abaixo:
A célula deve estar vazia e no mesmo corredor do TREL;
A célula deve ser mais distante que o pallet da ordem e será escolhida a mais distante de todas. Ela regra usada na escolha do algoritmo de BP para armazenamento será usada para definir a posição que o pallet será realocado. O cálculo considera altura do pallet, peso do pallet e zona, ordenando a distância da célula à origem de forma decrescente;
Se o pallet contiver um produto de paletização ruim será escolhida a posição mais baixa (com menor y).
Se alguma posição for encontrada para o pallet, a regra retornará o par (pallet, célula de destino) para o orquestrador para que a missão seja gerada. A regra sempre retornará um par por vez, seguindo a ordenação de pallets definida anteriormente.
Se nenhuma posição for encontrada para nenhum pallet, a regra é finalizada e nenhuma missão de baixa estação será gerada.
* Baixa Estação – Mesma regra usada na escolha do BP para armazenamento: no cálculo considera altura do pallet, peso do pallet e zona, ordenando a distância da célula à origem de forma decrescente.
Obs.: Se o pallet contiver um produto de paletização ruim será escolhida a posição com menor y (mais baixo).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Realocação de pallets de alta estação  
**Score:** — (semantico) | **ID:** e5de69b490fdd714

As regras para alta estação estão representadas na imagem abaixo
No início o WCS cria uma lista com todos os pallets de alta estação que sejam candidatos a serem realocados. Para definir um pallet como candidato algumas regras devem ser seguidas:
O pallet deve ser de um SKU de alta estação/normal;
Devem ser pallets atendidos pelo TREL que está em modo de realocação automática;
Os pallets devem estar em posições com o status “Ocupado” nos últimos 2/3 do corredor;
Tipo do pallet – de acordo com o que foi passado como parâmetro, tipo 1 ou tipo 2;
O pallet não deve possuir uma missão de realocação pendente.
A lista dos pallets candidatos é ordenada na seguinte ordem:
Sazonalidade – Alta estação e na sequência, Normal;
Prazo de Validade – em decrescente.
Se a lista não possuir nenhum pallet, a regra é finalizada e nenhuma missão de alta estação será gerada;
Para cada pallet que estiver na lista, seguindo a ordem definida, será procurada a melhor posição vazia para ele ser alocado, seguindo os critérios abaixo:
A célula deve estar vazia e no mesmo corredor do TREL;
A célula deve ser mais próxima que o pallet da ordem e será escolhida a mais próxima de todas. A mesma regra usada na escolha do algoritmo de BP para armazenamento será usada para definir a posição que o pallet será realocado. O cálculo considera altura do pallet, peso do pallet e zona, ordenando a distância da célula à origem de forma crescente;
Se o pallet contiver um produto de paletização ruim será escolhida a posição mais baixa (com menor y).
Se alguma posição for encontrada para o pallet, a regra retornará o par (pallet, célula de destino) para o orquestrador para que a missão seja gerada. A regra sempre retornará um par por vez, seguindo a ordenação de pallets definida anteriormente.
Se nenhuma posição for encontrada para nenhum pallet, a regra é finalizada e nenhuma missão de alta estação será gerada.
* Alta Estação – Mesma regra usada na escolha do BP para armazenamento: no cálculo considera altura do pallet, peso do pallet e zona, ordenando a distância da célula à origem de forma crescente.
Obs.: Se o pallet contiver um produto de paletização ruim será escolhida a posição com menor y (mais baixo).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alarme de corredor bloqueado ou ocupado  
**Score:** — (semantico) | **ID:** a3b5b6c4cf823688

Esta ação é disparada toda vez que um pallet permanecer parado em um transfer de berço de entrada por mais de 2 minutos (tempo configurável). Isto pode acontecer por dois motivos:
O corredor do berço de entrada está bloqueado ou atingiu sua capacidade máxima;
A linha do transportador está bloqueada ou ocupada;
Na primeira situação, o sistema deverá direcionar a carga para o próximo ponto de decisão, para que o WCS possa realocar a carga para uma nova célula em um corredor não bloqueado. Na segunda situação, não há nada a ser feito, pois a linha inteira estará ocupada, impossibilitando a entrega da carga para os corredores à frente ou no ponto de entrega. Nesta situação, os operadores deverão marcar os corredores afetados como bloqueados, para impedir que novas cargas entrem na linha e aumentem o congestionamento. O fluxo de decisões está ilustrado na imagem abaixo.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Escrita e notificação de alarmes e dados  
**Score:** — (semantico) | **ID:** 466380b84e0e6ed1

A escrita de dados ocorre toda vez que uma decisão é fornecida pelo WCS e é encaminhada ao Gerenciador de Equipamentos. Este, por sua vez, utiliza o OPCMessageProcessor para converter a decisão em uma mensagem OPCEquipmentMessage, que será utilizada pelo OPCEquipmentIO para a escrita dos dados nos TAGs correspondentes.
O OPCEquipmentIO solicita então ao OPCClientManager a escrita dos valores dos TAGs no OPC Server, utilizando para isso a OPC Client API. O fluxo completo de recebimento de uma decisão e escrita de valores no OPC Server pode ser observado na imagem abaixo.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Atender ordem de saída ou Crossdocking  
**Score:** — (semantico) | **ID:** 775285e3ea513b0c

Caso o pallet esteja livre, o primeiro tratamento testado é o de atender a alguma ordem de saída.
Se existir alguma OS específica para o pallet em questão (do tipo OT), ele é direcionado para saída.
O status da célula que estava reservado para entrada devido ao pallet que está entrando é desmarcado.
Se não houver ordem específica, as demais OS pendentes (do tipo NT) são testadas.
Para atender as OS pendentes, o pallet deve possuir o mesmo SKU, faixa e centro de custo.
Para cada OS pendentes o algoritmo de saída de pallet é executado para identificar o pallet que esteja armazenado que melhor atende à ordem. A saída do algoritmo é o pallet como resultado.
O pallet retornado do algoritmo é comparado com o pallet que está entrando para verificar se a diferença entre o período de expiração de ambos está dentro da tolerância. Se estiver dentro da tolerância significa que o pallet entrando pode atender à ordem e ele será destinado à saída.
O status da célula que estava reservado para entrada devido ao pallet que está entrando é desmarcado.
Caso nenhuma ordem pendente seja atendida, o pallet é testado para realizar o segundo tratamento, o Crossdocking, realizado com algum pallet armazenado que estivesse reservado para saída. As regras para definir se deve ocorrer Crossdocking estão definidas no item 5.2.4 Detalhes de Crossdocking.
Caso o Crossdocking seja possível o status da célula do pallet que estava reservado para saída é desmarcado e o status da célula que estava reservado para entrada devido ao pallet que está entrando também é desmarcado.
O Crossdocking é processado com o envio de confirmação para o SAP.
Se o Crossdocking não for possível de ser realizado o algoritmo é finalizado e nenhuma ordem pode ser atendida pelo pallet.
Testar ordens de saída ou Crossdocking:

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Transferência de pallets incompletos  
**Score:** — (semantico) | **ID:** 312ad26c15ac3ff3

A imagem abaixo apresenta as regras funcionais que regem o tratamento de ordens de saída de expedição. Os detalhes são apresentados abaixo.
Dado que há uma ordem saída de TPI, o primeiro passo é buscar os pallets que atendam as características da ordem. Para tal o algoritmo de Busca de Pallets Fracionados (BPF) é chamado e está detalhado no item 4.2.3.1 Busca Pallets Fracionados (BPF).
A partir deste ponto, as regras são as mesmas das apresentadas para os movimentos anteriores. Caso a lista esteja vazia, o algoritmo é finalizado por não haver pallets para atender a ordem.
Caso a lista possua itens, para cada pallet da lista, enquanto o pedido da ordem não for completado (igualar ou ultrapassar a quantidade solicitada) processa o pallet para saída:
A localização do pallet é reservada para saída (se estiver em uma célula). Se já estiver em trânsito para saída, apenas agrega o pallet à ordem de saída;
Destino do pallet: mesa de saída de transferência;
Realizada dedução dos itens na ordem de saída. O tratamento da quantidade pode ser em unidades ou peso variável. No caso de peso variável, se estiver dentro da tolerância, a ordem pode ser considerada como processada;
Se for uma SKU de peso variável, todo o pallet será reservado para saída, não apenas os itens que atendem a ordem. Neste caso o orquestrador irá gerar uma mensagem de confirmação para o SAP de todo o pallet, independentemente da quantidade solicitada na ordem;
Se a ordem for de venda futura, marcar o status dos itens do pallet como venda futura. A posição não será reservada para saída;
Se a ordem for de venda futura, a posição do pallet não será reservada para saída, porém se um pallet possuir itens de venda futura e agregar uma nova ordem que não seja venda futura, a localização será reservada para saída e somente os itens desta última ordem serão retirados na saída, quando o pallet voltar, os itens de venda futura continuarão pendentes.
No que toca a liberação de itens de venda futura em um mesmo pallet, a liberação será feita item a item através de interface M3 do SAP. O WCS liberará os itens na ordem em que forem solicitados pelo SAP.
Ao processar os pallets da lista, caso a ordem ainda possua caixas sem pallets para atender, ela será marcada como pendente.
Se a ordem for atendida completamente ela será marcada como processada.
O resultado é a lista dos pallets a serem retirados e confirmados ao SAP.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Realocação de pallets de baixa estação  
**Score:** — (semantico) | **ID:** d289f2a07ef3232c

As regras para baixa estação estão representadas na abaixo.
No início o WCS cria uma lista com todos os pallets de baixa estação que sejam candidatos a serem realocados. Para definir um pallet como candidato algumas regras devem ser seguidas:
O pallet deve ser de um SKU de baixa estação/normal;
Devem ser pallets atendidos pelo TREL que está em modo de realocação automática;
Os pallets devem estar em posições com o status “Ocupado” nos primeiros 2/3 do corredor;
Tipo do pallet – de acordo com o que foi passado como parâmetro, tipo 1 ou tipo 2;
O pallet não deve possuir uma missão de realocação pendente.
A lista dos pallets candidatos é ordenada na seguinte ordem:
Sazonalidade – Baixa estação e na sequência, Normal;
Prazo de Validade – em decrescente.
Se a lista não possuir nenhum pallet, a regra é finalizada e nenhuma missão de baixa estação será gerada;
Para cada pallet que estiver na lista, seguindo a ordem definida, será procurada a melhor posição vazia para ele ser alocado, seguindo os critérios abaixo:
A célula deve estar vazia e no mesmo corredor do TREL;
A célula deve ser mais distante que o pallet da ordem e será escolhida a mais distante de todas. Ela regra usada na escolha do algoritmo de BP para armazenamento será usada para definir a posição que o pallet será realocado. O cálculo considera altura do pallet, peso do pallet e zona, ordenando a distância da célula à origem de forma decrescente;
Se o pallet contiver um produto de paletização ruim será escolhida a posição mais baixa (com menor y).
Se alguma posição for encontrada para o pallet, a regra retornará o par (pallet, célula de destino) para o orquestrador para que a missão seja gerada. A regra sempre retornará um par por vez, seguindo a ordenação de pallets definida anteriormente.
Se nenhuma posição for encontrada para nenhum pallet, a regra é finalizada e nenhuma missão de baixa estação será gerada.
* Baixa Estação – Mesma regra usada na escolha do BP para armazenamento: no cálculo considera altura do pallet, peso do pallet e zona, ordenando a distância da célula à origem de forma decrescente.
Obs.: Se o pallet contiver um produto de paletização ruim será escolhida a posição com menor y (mais baixo).

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Realocação de pallets de alta estação  
**Score:** — (semantico) | **ID:** cd0f79667736c03a

As regras para alta estação estão representadas na imagem abaixo
No início o WCS cria uma lista com todos os pallets de alta estação que sejam candidatos a serem realocados. Para definir um pallet como candidato algumas regras devem ser seguidas:
O pallet deve ser de um SKU de alta estação/normal;
Devem ser pallets atendidos pelo TREL que está em modo de realocação automática;
Os pallets devem estar em posições com o status “Ocupado” nos últimos 2/3 do corredor;
Tipo do pallet – de acordo com o que foi passado como parâmetro, tipo 1 ou tipo 2;
O pallet não deve possuir uma missão de realocação pendente.
A lista dos pallets candidatos é ordenada na seguinte ordem:
Sazonalidade – Alta estação e na sequência, Normal;
Prazo de Validade – em decrescente.
Se a lista não possuir nenhum pallet, a regra é finalizada e nenhuma missão de alta estação será gerada;
Para cada pallet que estiver na lista, seguindo a ordem definida, será procurada a melhor posição vazia para ele ser alocado, seguindo os critérios abaixo:
A célula deve estar vazia e no mesmo corredor do TREL;
A célula deve ser mais próxima que o pallet da ordem e será escolhida a mais próxima de todas. A mesma regra usada na escolha do algoritmo de BP para armazenamento será usada para definir a posição que o pallet será realocado. O cálculo considera altura do pallet, peso do pallet e zona, ordenando a distância da célula à origem de forma crescente;
Se o pallet contiver um produto de paletização ruim será escolhida a posição mais baixa (com menor y).
Se alguma posição for encontrada para o pallet, a regra retornará o par (pallet, célula de destino) para o orquestrador para que a missão seja gerada. A regra sempre retornará um par por vez, seguindo a ordenação de pallets definida anteriormente.
Se nenhuma posição for encontrada para nenhum pallet, a regra é finalizada e nenhuma missão de alta estação será gerada.
* Alta Estação – Mesma regra usada na escolha do BP para armazenamento: no cálculo considera altura do pallet, peso do pallet e zona, ordenando a distância da célula à origem de forma crescente.
Obs.: Se o pallet contiver um produto de paletização ruim será escolhida a posição com menor y (mais baixo).

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alarme de corredor bloqueado ou ocupado  
**Score:** — (semantico) | **ID:** 66858933c7294689

Esta ação é disparada toda vez que um pallet permanecer parado em um transfer de berço de entrada por mais de 2 minutos (tempo configurável). Isto pode acontecer por dois motivos:
O corredor do berço de entrada está bloqueado ou atingiu sua capacidade máxima;
A linha do transportador está bloqueada ou ocupada;
Na primeira situação, o sistema deverá direcionar a carga para o próximo ponto de decisão, para que o WCS possa realocar a carga para uma nova célula em um corredor não bloqueado. Na segunda situação, não há nada a ser feito, pois a linha inteira estará ocupada, impossibilitando a entrega da carga para os corredores à frente ou no ponto de entrega. Nesta situação, os operadores deverão marcar os corredores afetados como bloqueados, para impedir que novas cargas entrem na linha e aumentem o congestionamento. O fluxo de decisões está ilustrado na imagem abaixo.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Escrita e notificação de alarmes e dados  
**Score:** — (semantico) | **ID:** 10098f114325529d

A escrita de dados ocorre toda vez que uma decisão é fornecida pelo WCS e é encaminhada ao Gerenciador de Equipamentos. Este, por sua vez, utiliza o OPCMessageProcessor para converter a decisão em uma mensagem OPCEquipmentMessage, que será utilizada pelo OPCEquipmentIO para a escrita dos dados nos TAGs correspondentes.
O OPCEquipmentIO solicita então ao OPCClientManager a escrita dos valores dos TAGs no OPC Server, utilizando para isso a OPC Client API. O fluxo completo de recebimento de uma decisão e escrita de valores no OPC Server pode ser observado na imagem abaixo.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Aloca Pallet  
**Score:** — (nome-topico) | **ID:** d284da6edf157db1

Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de paletização. Esse processo tem como objetivo agrupar os volumes conforme rota e transportadora, garantindo organização e rastreabilidade para expedição.
A paletização é realizada com o auxílio de um coletor Android, que se comunica diretamente com o WCS.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** ab80a2ac507a02fe

O fechamento do pallet vai ocorrer de forma manual.
Quando o fechamento for necessário:
O operador deve realizar a leitura do código da posição (ex.: FPP001) 3 vezes consecutivas.
Após isso, o coletor solicitará a leitura de um RG (identificador único do pallet master).
Após a leitura do RG, o WCS concluirá o fechamento do pallet.
O WCS enviará ao WMS a integração contendo todos os volumes pertencentes ao pallet.
Observação
A impressão da etiqueta física do pallet é responsabilidade da operação.
O WCS apenas armazena o RG informado para rastreabilidade.
Recomenda-se que o código do pallet siga um padrão com prefixo, facilitando sua identificação visual e controle no processo.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Aloca Pallet  
**Score:** — (nome-topico) | **ID:** b4a4a4e3ed0abc89

Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de paletização. Esse processo tem como objetivo agrupar os volumes conforme rota e transportadora, garantindo organização e rastreabilidade para expedição.
A paletização é realizada com o auxílio de um coletor Android, que se comunica diretamente com o WCS.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** de5d1f1d74a338e8

O fechamento do pallet vai ocorrer de forma manual.
Quando o fechamento for necessário:
O operador deve realizar a leitura do código de fechamento da posição (ex.: FPP001) 3 vezes consecutivas.
Após isso, o coletor solicitará a leitura de um RG (identificador único do pallet master).
Após a leitura do RG, o WCS concluirá o fechamento do pallet.
O WCS enviará ao WMS a integração contendo todos os volumes pertencentes ao pallet.
Observação
A impressão da etiqueta física do pallet é responsabilidade da operação.
O WCS apenas armazena o RG informado para rastreabilidade.
Recomenda-se que o código do pallet siga um padrão com prefixo, facilitando sua identificação visual e controle no processo.

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Cubagem de pallet (fora do escopo do projeto)  
**Score:** — (nome-topico) | **ID:** 4e3cc7d1aa0461ef

Operador deverá cadastrar previamente no sistema Velox, as dimensões (altura, largura e comprimento) e peso máximo suportado no pallet, para que o sistema Velox utilize dessas informações para realizar a cubagem de pallet.
Deverá ser parametrizado uma cubagem de segurança, para quando o pallet alcançar esse valor o operador seja notificado (via led) que o pallet está chegando em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no sistema Velox que o operador deve fechar o pallet ao atingir 80% de sua ocupação de cubagem ou peso.
Sistema Velox ao atingir essa ocupação de 80% solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes.
Velox fará a solicitação para fechamento de pallet, operador deve realizar o fechamento e abertura do novo na posição PTL.
Velox fará o cálculo de cubagem com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I23.3917] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Cubagem de pallet (fora do escopo do projeto)  
**Score:** — (nome-topico) | **ID:** aa6c747d9cebbea3

Operador deverá cadastrar previamente no sistema Velox, as dimensões (altura, largura e comprimento) e peso máximo suportado no pallet, para que o sistema Velox utilize dessas informações para realizar a cubagem de pallet.
Deverá ser parametrizado uma cubagem de segurança, para quando o pallet alcançar esse valor o operador seja notificado (via led) que o pallet está chegando em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no sistema Velox que o operador deve fechar o pallet ao atingir 80% de sua ocupação de cubagem ou peso.
Sistema Velox ao atingir essa ocupação de 80% solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes.
Velox fará a solicitação para fechamento de pallet, operador deve realizar o fechamento e abertura do novo na posição PTL.
Velox fará o cálculo de cubagem com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 7aa3ecbe5a22789c

Operador realiza alocação dos volumes no pallet tanto fracionados como full case, até que o pallet atinja seu limite.
A cubagem do pallet será realizada de forma visual, onde o operador ao identificar que o pallet atingiu seu limite de altura, realiza o fechamento de pallet.
Ao realizar o fechamento do pallet, o sistema Velox, realiza a integração de Pallet para o WMS, informando o pallet e os volumes full case e fracionados alocados nele.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** d333b247d3316a16

No momento em que visualmente o operador decidir que a altura do pallet atingiu o limite, fara o processo de fechamento do pallet.
No momento em que o operador fechar o pallet o sistema Velox irá enviar a integração com as caixas alocadas.
As informações necessárias para que seja realizada a integração de finalização de pallet deverão ser enviadas via integração conforme arquivo (Palletize_Container.xml).

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Fechamento de Pallet (VolExp)  
**Score:** — (nome-topico) | **ID:** d70d09e27e54ccd4

Operador ao visualizar que o pallet atingiu seu limite, realiza o fechamento do pallet.
Para isso, com o leitor de código de barras deverá realizar a leitura da etiqueta da posição PTL.
Nesse momento, o Velox deve disparar a integração 3.7. Confirmação de Pallet Expedido no Sorter (VolExp) para o WMS informando os detalhes do pallet que foi montado.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Etiquetas fixas  
**Score:** — (semantico) | **ID:** 16cbdf294c68fc58

Para atender as necessidades do time operacional do cliente, não haverá mais o vínculo automático no Order Start, porém isso não remove os scanners previstos para vínculo automático no projeto.
Para utilização de caixas de papelão a livre demanda no projeto existiram códigos fixos que podem ser impressos pelo Velox que irá ser usando para referenciar o tamanho da caixa de papelão no Order Start no momento de seleção de caixa para impressão. No cadastro das caixas plásticas será solicitado o código da caixa onde esse número será concatenado a sigla “CX” ou seja, no início do código será adicionado sistemicamente de forma automática a sigla “CX”, exemplo:
Caso uma caixa é cadastrada com um código de caixa 0001 o Velox irá salvar em sua base de dados a string “CX0001”.
Essas etiquetas serão únicas e fixas sendo uma para cada tamanho de caixa.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Aloca Pallet  
**Score:** — (nome-topico) | **ID:** ff5f3d806403216c

VELOX → WMS
Integração para o Velox enviar para o WMS a informação dos volumes alocados no pallet fechado com suas dimensões e peso. A unidade de medida referente ao peso sempre será em gramas e das dimensões serão em milímetros.
Quando operador verificar fisicamente que o pallet está cheio, deverá realizar a leitura da etiqueta de fechamento de pallet, e nesse momento é enviado a integração com as informações sugeridas abaixo:

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Aloca Pallet  
**Score:** — (nome-topico) | **ID:** bc57c0fd98a286c6

VELOX → WMS
Integração para o Velox enviar para o WMS a informação dos volumes alocados no pallet fechado com suas dimensões e peso. A unidade de medida referente ao peso sempre será em gramas e das dimensões serão em milímetros.
Quando operador verificar fisicamente que o pallet está cheio, deverá realizar a leitura da etiqueta de fechamento de pallet, e nesse momento é enviado a integração com as informações sugeridas abaixo:

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** Aloca Pallet  
**Score:** — (nome-topico) | **ID:** 4f7bec7d6c09b187

Após o volume ser direcionado para a rampa correta, conforme sua rota previamente cadastrada no sistema MFC. Durante esse processo, cada confirmação de desvio garante que o item está sendo alocado no pallet aberto na posição indicada.
Quando o operador sinaliza o fechamento do pallet, o sistema MFC solicita a leitura do código do pallet (responsabilidade WMS) e executa a integração denominada “aloca pallet”, que envia ao WMS todas as informações necessárias sobre os volumes alocados naquele pallet fechado.
Obs. O sistema MFC terá uma tela de monitoramento de pallet, onde será exibido código do pallet, número total de volumes e quais volume foram enviados ao WMS.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** ALOCA PALLET / TRANSPORTADORA  
**Score:** — (nome-topico) | **ID:** 664cb47188a00139

MFC  WMS
A

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** Aloca Pallet  
**Score:** — (nome-topico) | **ID:** 1bfa45d199e71e1e

Após o volume ser direcionado para a rampa correta, conforme sua rota previamente cadastrada no sistema MFC. Durante esse processo, cada confirmação de desvio garante que o item está sendo alocado no pallet aberto na posição indicada.
Quando o operador sinaliza o fechamento do pallet, o sistema MFC solicita a leitura do código do pallet (responsabilidade WMS) e executa a integração denominada “aloca pallet”, que envia ao WMS todas as informações necessárias sobre os volumes alocados naquele pallet fechado.
Obs. O sistema MFC terá uma tela de monitoramento de pallet, onde será exibido código do pallet, número total de volumes e quais volume foram enviados ao WMS.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** 000738a6a2767c48

O fechamento do Pallet pode ocorrer em dois cenários distintos:
Altura do pallet pré-determinado pela operação Promofarma (Avaliado pelo próprio operador)
Alocação do último volume esperado da loja/tipo fullcase ou fracionado (avaliado sistemicamente)
O operador deverá realizar a leitura do código do comando de fechamento da posição 3 vezes consecutivas, por exemplo “FPP001”, para fechar o pallet conforme a necessidade. O sistema irá mostrar o PTM ficará com sua área preenchida e piscando, desta forma o WCS entende que o pallet está sendo finalizado e enviaremos a integração de “aloca pallet” para o WMS.
O número do pallet será um código interno que será enviado ao WMS para rastreabilidade no WMS e no WCS. Exemplo de código: LBPN1234567789012345.
Caso o último volume daquele respectivo pedido for alocado, o sistema irá solicitar ao operador a leitura do código de fechamento do pallet e será realizado a mesma rotina descrita acima para o fechamento do pallet.
Ao fechar o pallet, a posição será liberada para outra loja ser alocada.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** df60e4e2c5eaee30

Velox  WMS
Tabela SORTER.GPT_RETORNO_MONTAGEM_PALETES
O Velox executará uma rotina que a cada fechamento de pallet essas informações serão enviadas automaticamente, e todas as informações de cada volume (CODACESSO) de um mesmo pallet serão enviadas.
Com a leitura do pallet no fechamento do PTL o Velox irá receber o código, então na coluna “PALLET” o Velox irá salvar a informação de código do pallet para que no momento de retornar as informações para o WMS na coluna.
SORTER
O sorter será responsável pelo desvio dos volumes conforme o mapa de rotas configurado e ativo no sistema Velox. Esse mapa deve ser cadastrado e configurado antecipadamente no sistema para garantir a correta indução dos volumes.
Todos os volumes induzidos no sorter devem estar identificados com um código de barras integrado ao sistema Velox ou, se necessário, devidamente etiquetados. A impressão das etiquetas, quando necessária, é de responsabilidade Invent.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Cubagem de Pallet  
**Score:** — (nome-topico) | **ID:** ce78379cda0aa2b4

O operador deve cadastrar previamente no sistema Velox as cubagens (em m³) e o peso máximo (em gramas) suportado pelo pallet. Essas informações são essenciais para que o sistema Velox realize a cubagem do pallet corretamente.
Quando o pallet alcançar esse limite de cubagem (por exemplo, 80% da capacidade máxima de cubagem ou peso), o sistema Velox solicitará ao operador o fechamento do pallet e não permitirá a alocação de volumes adicionais.
O processo será o seguinte:
O operador configura no sistema Velox o limite de ocupação (80% da cubagem ou peso total).
Quando esse limite for alcançado, o sistema Velox notificará o operador via LED, indicando que o pallet deve ser fechado.
O sistema não permitirá que novos volumes sejam alocados no pallet após atingir o limite configurado.
O Velox fará o fechamento automático do pallet e informará ao operador por meio da cor do LED.
O cálculo de cubagem será realizado automaticamente pelo sistema Velox, com base nas informações de dimensões e peso dos volumes recebidos via integração durante a indução no sorter.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** b8a7e088c1cf4813

O fechamento do pallet nos processos da Invent pode ocorrer de quatro formas distintas:
Por Cubagem e Peso
O pallet é fechado automaticamente ao atingir sua capacidade máxima de cubagem ou peso.
Via Tela de Fechamento
O fechamento é realizado manualmente pelo operador por meio de uma interface específica no sistema.
Diretamente nas Rampas
O operador finaliza o pallet diretamente na área de triagem, utilizando os controles disponíveis.
Finalização de Todos os Pedidos de uma Loja
O pallet é fechado automaticamente após o processamento de todos os pedidos destinados à loja correspondente.
Processo Pós-Fechamento
Após a finalização do pallet em qualquer uma das formas acima, o sistema VELOX enviará as informações descritas no tópico "Aloca Pallet" para o WMS realizar as tratativas necessárias.
A Consinco ficará responsável por gerar e imprimir as etiquetas de pallet, que deve ser lido pelos operadores quando for solicitado o fechamento do pallet. Este processo é descrito no item PROCESSO OPERACIONAL
ACOMPANHAMENTO DE PRODUTIVIDADE
Relatórios
As telas de relatórios deverão ser definidas em conjunto pela Invent e o time DIA A DIA ATACADISTA durante a fase de implementação. O objetivo é alinhar os requisitos e determinar quais dados serão exibidos, de acordo com as necessidades do cliente.
Exemplos de Relatórios
Produtividade por Rampa
Apresenta a quantidade de volumes processados em cada rampa.
Produtividade por Operador (PTL)
Exibe a performance individual de cada operador utilizando o sistema PTL.
Produtividade do Sorter
Fornece uma visão geral do desempenho do sorter, incluindo volumes processados e tempo de operação.
Relatório de Rejeitos
Detalha os volumes rejeitados, indicando causas e frequência.
Relatório de Read e NoRead
Mostra o número de leituras bem-sucedidas (Read) e falhas (NoRead) realizadas pelo portal de leitura.
ESPECIFICAÇÃO DE HARDWARE DE TI
Este documento tem como objetivo estabelecer diretrizes claras e detalhadas para o ambiente de tecnologia da informação (TI).
Nele, são especificadas as características técnicas dos principais dispositivos utilizados, incluindo desktops, servidores, redes e conexões VPN. Cada componente foi selecionado com base em critérios de desempenho, disponibilidade e integridade dos dados, assegurando:
Máxima eficiência operacional.
Continuidade dos negócios.
Estação de Trabalho
Rampas (PTL)
Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
Rejeito
Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
01 (um) Impressora na rede da automação para etiquetas IVT – Ex: Zebra
Abaixo segue a configuração mínima para o desktop para a estação de rejeito
APROVAÇÃO DA PROPOSTA
O Cliente DIA A DIA ATACADISTA está de acordo com a Proposta I25.132 de 11/Agosto/2025.
Nome: ___________________________________________________
Cargo:___________________________________________________
Data:____________________________________________________
Assinatura:_______________________________________________

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** a4beb1c78c1035fe

Velox  WMS
Tabela SORTER.GPT_RETORNO_MONTAGEM_PALETES
O Velox executará uma rotina que a cada fechamento de pallet essas informações serão enviadas automaticamente, e todas as informações de cada volume (CODACESSO) de um mesmo pallet serão enviadas.
Com a leitura do pallet no fechamento do PTL o Velox irá receber o código, então na coluna “PALLET” o Velox irá salvar a informação de código do pallet para que no momento de retornar as informações para o WMS na coluna.
SORTER
O sorter será responsável pelo desvio dos volumes conforme o mapa de rotas configurado e ativo no sistema Velox. Esse mapa deve ser cadastrado e configurado antecipadamente no sistema para garantir a correta indução dos volumes.
Todos os volumes induzidos no sorter devem estar identificados com um código de barras integrado ao sistema Velox ou, se necessário, devidamente etiquetados. A impressão das etiquetas, quando necessária, é de responsabilidade Invent.

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Cubagem de Pallet  
**Score:** — (nome-topico) | **ID:** cf65dd4524a7ac8a

O operador deve cadastrar previamente no sistema Velox as cubagens (em m³) e o peso máximo (em gramas) suportado pelo pallet. Essas informações são essenciais para que o sistema Velox realize a cubagem do pallet corretamente.
Quando o pallet alcançar esse limite de cubagem (por exemplo, 80% da capacidade máxima de cubagem ou peso), o sistema Velox solicitará ao operador o fechamento do pallet e não permitirá a alocação de volumes adicionais.
O processo será o seguinte:
O operador configura no sistema Velox o limite de ocupação (80% da cubagem ou peso total).
Quando esse limite for alcançado, o sistema Velox notificará o operador via LED, indicando que o pallet deve ser fechado.
O sistema não permitirá que novos volumes sejam alocados no pallet após atingir o limite configurado.
O Velox fará o fechamento automático do pallet e informará ao operador por meio da cor do LED.
O cálculo de cubagem será realizado automaticamente pelo sistema Velox, com base nas informações de dimensões e peso dos volumes recebidos via integração durante a indução no sorter.

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** bc8ef5165b36d349

O fechamento do pallet nos processos da Invent pode ocorrer de quatro formas distintas:
Por Cubagem e Peso
O pallet é fechado automaticamente ao atingir sua capacidade máxima de cubagem ou peso.
Via Tela de Fechamento
O fechamento é realizado manualmente pelo operador por meio de uma interface específica no sistema.
Diretamente nas Rampas
O operador finaliza o pallet diretamente na área de triagem, utilizando os controles disponíveis.
Finalização de Todos os Pedidos de uma Loja
O pallet é fechado automaticamente após o processamento de todos os pedidos destinados à loja correspondente.
Processo Pós-Fechamento
Após a finalização do pallet em qualquer uma das formas acima, o sistema VELOX enviará as informações descritas no tópico "Aloca Pallet" para o WMS realizar as tratativas necessárias.
A Consinco ficará responsável por gerar e imprimir as etiquetas de pallet, que deve ser lido pelos operadores quando for solicitado o fechamento do pallet. Este processo é descrito no item PROCESSO OPERACIONAL
ACOMPANHAMENTO DE PRODUTIVIDADE
Relatórios
As telas de relatórios deverão ser definidas em conjunto pela Invent e o time XXXX ATACADISTA durante a fase de implementação. O objetivo é alinhar os requisitos e determinar quais dados serão exibidos, de acordo com as necessidades do cliente.
Exemplos de Relatórios
Produtividade por Rampa
Apresenta a quantidade de volumes processados em cada rampa.
Produtividade por Operador (PTL)
Exibe a performance individual de cada operador utilizando o sistema PTL.
Produtividade do Sorter
Fornece uma visão geral do desempenho do sorter, incluindo volumes processados e tempo de operação.
Relatório de Rejeitos
Detalha os volumes rejeitados, indicando causas e frequência.
Relatório de Read e NoRead
Mostra o número de leituras bem-sucedidas (Read) e falhas (NoRead) realizadas pelo portal de leitura.
ESPECIFICAÇÃO DE HARDWARE DE TI
Este documento tem como objetivo estabelecer diretrizes claras e detalhadas para o ambiente de tecnologia da informação (TI).
Nele, são especificadas as características técnicas dos principais dispositivos utilizados, incluindo desktops, servidores, redes e conexões VPN. Cada componente foi selecionado com base em critérios de desempenho, disponibilidade e integridade dos dados, assegurando:
Máxima eficiência operacional.
Continuidade dos negócios.
Estação de Trabalho
Rampas (PTL)
Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
Rejeito
Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
01 (um) Impressora na rede da automação para etiquetas IVT – Ex: Zebra
Abaixo segue a configuração mínima para o desktop para a estação de rejeito
APROVAÇÃO DA PROPOSTA
O xxxxxxx está de acordo com a Proposta  xxxxx de 26/Agosto/2025.
Nome: ___________________________________________________
Cargo:___________________________________________________
Data:____________________________________________________
Assinatura:_______________________________________________

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 1ec8a236f9c8bf54

Operador deverá cadastrar previamente no sistema WCS, as cubagens (M³) e peso (Kilos) máximo suportado no pallet, para que o sistema WCS utilize dessas informações para realizar a cubagem de pallet.
Deverá ser parametrizado uma cubagem de segurança, para quando o pallet alcançar esse valor o operador seja notificado (via led) que o pallet está chegando em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no sistema WCS que o operador deve fechar o pallet ao atingir 80% de sua ocupação de cubagem ou peso.
Sistema WCS ao atingir essa ocupação de 80% solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes.
WCS fará o fechamento automático do pallet e informando ao operador via cor do led.
WCS fará o cálculo de cubagem com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** 02273bc5dd4735e8

O fechamento do pallet será feito dentro dos processos da Invent e poderá acontecer de 4 formas diferentes:
Cubagem do pallet
Via tela de fechamento de pallet (forçado)
Diretamente pelo operador nas Rampas (forçado)
Finalização de todos os tarefas destinadas para o agrupador do pallet (loja)
Em todos os processos após a finalização do pallet enviamos as informações descritas no tópico “aloca pallet” para o WMS fazer as tratativas necessárias.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar a leitura de um código master que será vinculado aos volumes que foram alocados a este pallet.
A impressão deste código master é de responsabilidade do WMS.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** db54b98ee8028d7f

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar esse valor o operador seja notificado (via led) que o pallet chegou em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS iniciará o processo de fechamento automático do pallet e informará ao operador via cor do led que o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** 451b62abc4c99dbc

O fechamento do pallet será feito dentro dos processos da Invent e poderá acontecer de 4 formas diferentes:
Cubagem do pallet
Peso do palete
Via tela de fechamento de pallet (forçado)
Diretamente pelo operador nas Rampas (forçado) – Realizando a leitura do código da posição para iniciar o processo de fechamento e após realizando a leitura da master
Em todos os processos após a finalização do pallet enviamos as informações descritas no tópico “4.5 Pallet Montado” para o WMS fazer as tratativas necessárias.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar a leitura de um código master que será vinculado aos volumes que foram alocados a este pallet.
A impressão deste código master é de responsabilidade do WMS.

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 7136b9d662218422

Operador deverá cadastrar previamente no sistema WCS, as cubagens (M³) e peso (Kilos) máximo suportado no pallet, para que o sistema WCS utilize dessas informações para realizar a cubagem de pallet.
Deverá ser parametrizado uma cubagem de segurança, para quando o pallet alcançar esse valor o operador seja notificado (via led) que o pallet está chegando em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no sistema WCS que o operador deve fechar o pallet ao atingir 80% de sua ocupação de cubagem ou peso.
Sistema WCS ao atingir essa ocupação de 80% solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes.
WCS fará o fechamento automático do pallet e informando ao operador via cor do led.
WCS fará o cálculo de cubagem com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** 1fb7c0e9e8a847cd

O fechamento do pallet será feito dentro dos processos da Invent e poderá acontecer de 4 formas diferentes:
Cubagem do pallet
Via tela de fechamento de pallet (forçado)
Diretamente pelo operador nas Rampas (forçado)
Finalização de todos os tarefas destinadas para o agrupador do pallet (loja)
Em todos os processos após a finalização do pallet enviamos as informações descritas no tópico “aloca pallet” para o WMS fazer as tratativas necessárias.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar a leitura de um código master que será vinculado aos volumes que foram alocados a este pallet.
A impressão deste código master é de responsabilidade do WMS.
