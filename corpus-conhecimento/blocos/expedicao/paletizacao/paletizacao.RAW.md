# paletizacao.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Controle de Mistura de Categorias no Picking Fracionado  
**Score:** — (semantico) | **ID:** 310019bedcf2a316

O WCS disponibilizará uma tela específica para Controle de Mistura de Categorias,
destinada a garantir que determinadas categorias de produtos não sejam misturadas dentro do
mesmo volume (pega) durante o processo de picking fracionado.
Nessa tela, o operador ou supervisor poderá:
Selecionar uma categoria principal a ser configurada.
Visualizar todas as demais categorias cadastradas no sistema.
Definir quais categorias não podem ser misturadas com a categoria principal
selecionada.
Gravar e editar regras de restrição, garantindo que o comportamento sistêmico
reflita as necessidades operacionais e de qualidade do cliente.
Essas configurações permitirão que o WCS valide, no momento da cubagem e criação das
caixas plásticas, se existe alguma restrição de mistura entre categorias.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 2. A definição da melhor posição de retirada do palete, bem como a validação de qual  
**Score:** — (semantico) | **ID:** 4322c0872896f11e

palete deve ser utilizado para cada necessidade, é de responsabilidade exclusiva do
SAP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Buffer do Transelevador (Níveis 4 e 5): O palete já está dentro do transelevador. O  
**Score:** — (semantico) | **ID:** 1988507afa9db12c

transelevador move o palete internamente do buffer para a posição de picking.
Essa distinção de origem é o que define se a movimentação seguirá pelo fluxo do

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Dashboard Indução BK25 (MONITOR)  
**Score:** — (semantico) | **ID:** a2a86116245a6b97

Serão listados os 5 paletes referentes as OTs com maior urgência (prioridade), sendo classificado
por cores, os paletes de maior urgência (Corte) apareceram em vermelho, os paletes importantes
(Onda iniciada) apareceram em amarelo, os paletes necessários (Ondas preparadas) apareceram
em verde e por fim os paletes de ocupação de estoque de picking (capacidade) a apareceram em
branco.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** rejeito)  
**Score:** — (semantico) | **ID:** 828730f016fd933b

No BK25 após a indução do palete no portal ocorre uma sequência de avaliações no palete como
análise de tombamento por lado (esquerdo, frente, direito e costas), análise por baixo do palete
(palete quebrado), altura do palete e peso do palete, com a leitura da etiqueta de palete (UD)
o PLC envia ao WCS um telegrama com as informações de avaliação do palete junto com sua UD.
Em casos em que não ocorra a leitura e o tempo de leitura da UD se esgote (timeout) o PLC
enviara a informação NOREAD no lugar do número da UD.
Através das informações recebidas do PLC o WCS faz uma análise dos pontos avaliados pelo PLC
e determina se o palete está apto para seguir com processo de armazenagem sendo direcionado
ao berço de entrada do transelevador ou se ele está fora dos padrões de aceitação e deve ser
rejeitado.
Para os casos em que o palete for rejeitado no BK25 a movimentação desse palete recebe o
status de REJEITADA [Regras de Movimentação] e o motivo de rejeito é informado no relatório
de rejeito do BK25 onde através do número do palete é possível identificar o ou os motivos de
rejeito.
O status da OT não é alterado em casos de rejeito, a OT se mante pendente da 2ª confirmação,
caso exista a necessidade de cancelar/ estornar a OT (Ex: Excesso de peso) é necessário fazer
a confirmação manual do transporte na tela de ordens de transportes onde ao selecionar a
confirmação manual e passar pela autenticação de usuário o WCS envia o IDOC TOCO. Caso for
necessário a retirada desse saldo do estoque do WCS é necessária criar uma OT para retirada do
palete via IDOC enviado pelo SAP e se necessário o WCS deverá aceitar a entrada dele palete
com um novo ID de reabastecimento.
Não é possível realizar estornos/cancelamentos em OTs que já sofreram alguma confirmação.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Saida de palete vazios  
**Score:** — (semantico) | **ID:** 1fee3c2cda0c1cd5

A saída de paletes vazio é a movimentação de paletes que são depositados nas posições de saída
de paletes onde o PLC ao receber a ativação do sensor de uma posição de saída de palete dispara
uma informação ao WCS informando que o palete está disponível para retirada o WCS ao receber
essa informação cria uma movimentação de retirada de palete ao transelevador com a prioridade
vinda do valor um parâmetro, dessa forma quando for a prioridade designada foi a primeira da
fila o WCS envia o comando ao PLC para fazer as movimentações de retirada desse palete.
Os status de movimentações da saída de palete serão PENDENTE (criação da movimentação) e

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Gerenciamento de sequência de paletes  
**Score:** — (semantico) | **ID:** 406ab30b149b267e

O sequenciamento de paletes é uma ordenação com base no FIFO onde o primeiro palete a entrar
na posição de picking recebe sequência 1, o próximo palete a sequência 2 e por fim o ultimo
palete a sequência 3, isso para posições de drive-in, já as posições de porta-palete existira
somente 1 palete logo haverá somente a sequência 1, o sequenciamento na posição está
vinculado ao palete (UD) dessa forma como podem haver vários lotes por palete podemos ter
vários lotes com a mesma sequência de paletes.
O gerenciamento de sequência de palete só ocorre em 3 cenários:
1- Reserva de todos os volumes do palete diminuindo a sequência do palete para 0 e
a sequência dos demais paletes da posição recebem o decréscimo de 1, assim
disponibilizando os paletes de trás para coleta (atual ou futura).
2- Ajuste de estoque (inventario) (SAP → Velox) onde todo saldo de um palete (1 ou
vários lotes) foram retirados da sua posição de origem, com isso o palete deixa de existir
no estoque do WCS e todo as sequencias posteriores (paletes) a sequência eliminada
sofrem o decréscimo de 1. A regra deve considerar apenas os paletes que estão após a
sequência removida. Por exemplo, se o palete de sequência 2 for eliminado, apenas o
palete de sequência 3 terá sua sequência decrementada para 2, enquanto o palete de
sequência 1 permanece inalterado. Da mesma forma, a remoção de um palete de uma
determinada sequência não impacta os paletes posicionados antes dela
3- Corte, quando ocorre um corte, o WCS envia um TORD com a quantidade remanescente
da posição, após o envio do TORD pelo WCS o SAP retorna com um TORD confirmando,
o WCS realiza a limpeza do estoque da posição e libera o endereço para receber novos
paletes e dessa forma e gerada uma nova sequência por ordem de chegada (FIFO).

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** MONITOR BK25  
**Score:** — (semantico) | **ID:** 7ff969bde7c80f70

Esse monitor irá exibir as informações dos paletes com status “Pendente BK25”
Quando o palete é confirmado a entrada no BK25 no berço de entrada o item vai para o final da
fila com o status de “Em processamento”, em caso de cancelamento ou finalização do item deverá
sair da lista
Deverá atualizar de tempos em tempos, através de um parâmetro de tempo e mostrar apenas
de 8 em 8 paletes.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** 8. Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 54ad3e4d0926a62f

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo
suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por
cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar
esse valor o operador seja notificado após a alocação que o pallet chegou em seu limite e deve
ser fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de
sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o
fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS
iniciará o processo de fechamento automático do pallet e informará ao operador via coletor que
o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de
dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** 9. Aloca Pallet  
**Score:** — (nome-topico) | **ID:** 8d463e5268fb7429

Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de
paletização. Esse processo tem como objetivo agrupar os volumes conforme rota e
transportadora, garantindo organização e rastreabilidade para expedição.
A paletização é realizada com o auxílio de um coletor Android ou através da TV da rampa, que
se comunica diretamente com o WCS.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** 67dba59f906993a3

O fechamento do pallet poderá ocorrer de forma manual ou automática, conforme os
parâmetros de peso e cubagem previamente cadastrados no WCS.
Fechamento Automático:
Quando os limites de peso e/ou cubagem configurados forem atingidos, o WCS
realizará automaticamente o fechamento do pallet solicitando a leitura da etiqueta após
a alocação do volume.
Fechamento Manual:
Caso os parâmetros de peso e cubagem não sejam atingidos ou a operação opte
pelo fechamento manual, o operador deverá:
1. Realizar a leitura do código da posição (ex.: FPP001) 3 vezes consecutivas.
2. Após a validação, o coletor solicitará a leitura da etiqueta do pallet, que conterá o
identificador único do pallet master (RG).
3. Após a leitura da etiqueta, o WCS concluirá o fechamento do pallet.
4. O WCS enviará ao WMS a integração contendo todos os volumes pertencentes ao
pallet.
Observações:
A impressão da etiqueta física do pallet é de responsabilidade da operação.
O WCS irá apenas registrar o identificador lido (RG) para fins de rastreabilidade.
Recomenda-se que a etiqueta do pallet siga um padrão de codificação com prefixo,
facilitando a identificação visual e o controle do processo.
O desvio no sorter não é obrigatório para a paletização, desde que os volumes
estejam devidamente integrados e vinculados ao pallet no WCS.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.9. Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 763a7363b8bae4f9

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo
suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por
cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar
esse valor o operador seja notificado (via led) que o pallet chegou em seu limite e deve ser
fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de
sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o
fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS
iniciará o processo de fechamento automático do pallet e informará ao operador via cor do led
que o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de
dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.11. Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** 3dbec1b2866021b0

O fechamento do pallet será feito dentro dos processos da Invent e poderá acontecer de 4 formas
diferentes:
•
Cubagem do pallet
•
Peso do palete
•
Via tela de fechamento de pallet (forçado)
•
Diretamente pelo operador nas Rampas (forçado) – Realizando a leitura do código da
posição para iniciar o processo de fechamento e após realizando a leitura da master
Em todos os processos após a finalização do pallet enviamos as informações descritas no tópico
“4.5 Pallet Montado” para o WMS fazer as tratativas necessárias.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar
a leitura de um código master que será vinculado aos volumes que foram alocados a este pallet.
A impressão deste código master é de responsabilidade do WMS.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** b6a358a734a0a27a

O fechamento do pallet opera em modo configurável por operação:
Modo manual: o operador avalia visualmente e fecha o pallet pelo fluxo de PTL. Não há bloqueio automático por cubagem/peso.
Modo automático por cubagem/peso: o operador cadastra previamente a cubagem (m³) e o peso (kg) máximos do pallet, além de valores de segurança. Ao atingir o valor de segurança, o WCS notifica via LED; ao atingir o limite, solicita o fechamento, bloqueia novas alocações, inicia o fechamento automático e sinaliza via cor do LED.
No modo automático, o cálculo usa as dimensões e o peso dos volumes recebidos via Cadastro de Produtos.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 3c1449da99cea995

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar esse valor o operador seja notificado (via led) que o pallet chegou em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS iniciará o processo de fechamento automático do pallet e informará ao operador via cor do led que o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 16.3. Fechamento de Pallet (Etiqueta Master)  
**Score:** — (nome-topico) | **ID:** 9276c5599eb93e40

O encerramento do pallet pode ocorrer de três formas:
1. Automático (Físico): O sistema estima que a altura/peso atingiu o limite configurado.
2. Lógico (Fim de Transporte): Não há mais volumes previstos para aquele transporte
no sistema.
3. Manual: O operador força o fechamento via botão de função no PTL (ex: Pallet
instável ou fim de turno).
Ação:
O sistema imprime automaticamente a Etiqueta Master (contendo os dados da carga
consolidada).
O WCS envia a mensagem de fechamento ao WMS.
O operador cola a etiqueta no stretch e libera o pallet para a doca de expedição.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 9. Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 029ae8d0de5ccc70

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo
suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por
cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar
esse valor o operador seja notificado após a alocação que o pallet chegou em seu limite e deve
ser fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de
sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o
fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS
iniciará o processo de fechamento automático do pallet e informará ao operador via coletor que
o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de
dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 26 Notificação de corredor bloqueado ou ocupado  
**Score:** — (semantico) | **ID:** 9603b17168faf6c5

Esta ação é disparada toda vez que um pallet permanecer parado em um transfer de berço
de entrada por mais de 2 minutos (tempo configurável). Esse cenário pode ocorrer devido a
dois motivos principais:
Corredor do Berço de Entrada Bloqueado ou com Capacidade Máxima:
Quando o corredor do berço de entrada está bloqueado ou atingiu sua
capacidade máxima, o WCS  deverá direcionar o pallet para o próximo ponto
de decisão. Dessa forma, o sistema irá realocar a carga para uma nova célula em
um corredor não bloqueado, garantindo que o pallet continue seu percurso sem
comprometimento da operação.
Linha do Transportador Bloqueada ou Ocupada:
Se a linha do transportador estiver bloqueada ou ocupada, não será possível
movimentar a carga para os corredores seguintes ou para o ponto de entrega. Nesse
caso, o sistema não tomará nenhuma ação automática, já que toda a linha estará
comprometida. Para resolver a situação, os operadores devem marcar os
corredores afetados como bloqueados, impedindo que novas cargas entrem na
linha e contribuam para o congestionamento existente.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Cubagem de pallet  
**Score:** — (nome-topico) | **ID:** 3096e6826d860efb

Operador deverá cadastrar previamente no WCS, a cubagens (M³) e peso (Kilos) máximo suportado no pallet, para que o WCS utilize dessas informações para realizar o fechamento por cubagem ou peso do pallet.
Deverá ser parametrizado uma cubagem e peso de segurança, para quando o pallet alcançar esse valor o operador seja notificado após a alocação que o pallet chegou em seu limite e deve ser fechado.
Por exemplo, foi parametrizado no WCS que o operador deve fechar o pallet ao atingir 1M³ de sua ocupação de cubagem, quando o palete atingir essa ocupação de 1M³ o WCS solicitará o fechamento do pallet, e não permitirá a alocação de volumes sobressalentes neste pallet. O WCS iniciará o processo de fechamento automático do pallet e informará ao operador via coletor que o pallet está fechado.
O WCS fará o cálculo de cubagem e peso com as informações recebidas via integração de dimensões e peso dos volumes induzidos no sorter.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Aloca Pallet  
**Score:** — (nome-topico) | **ID:** 4d2d585ced9ac017

Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de paletização. Esse processo tem como objetivo agrupar os volumes conforme rota e transportadora, garantindo organização e rastreabilidade para expedição.
A paletização é realizada com o auxílio de um coletor Android ou através da TV da rampa, que se comunica diretamente com o WCS.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
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
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** 85fb32830f5a8b47

Velox → WMS
Tabela SORTER.GPT_RETORNO_MONTAGEM_PALETES
CAMPO_BANCO_VELOX
CAMPO_BANCO_WMS
DESCRIÇÃO
TIPO
TAMANHO
EMPRESA
EMPRESA
Número da Empresa do CD
NUMBER
ONDA
ONDA
Número da Carga (onda)
INTEGER
LOJA
LOJA
Número da loja
NUMBER
PALLET
PALLET
Número do pallet informado na
fechamento do PTL
VARCHAR
*
SEQPRODUTO
SEQPRODUTO
número da sequência do produto
INTEGER
CODACESSO
CODACESSO
Código presente na caixa (DUN14)
VARCHAR
QUANTIDADE
QUANTIDADE
Quantidade de Unidades
COD_PRODUTIVO
COD_PRODUTIVO
Código do produtivo
INTEGER
DATA_ABERTURA
DATA_ABERTURA
Data e hora de abertura de pallet
DATETIME
DATA_FECHAMENTO
DATA_FECHAMENTO
Data e hora de fechamento de pallet
DATETIME
DATA_ENVIO
DATA_ENVIO
Data e hora de envio das informações DATETIME
O Velox executará uma rotina que a cada fechamento de pallet essas informações serão enviadas
automaticamente, e todas as informações de cada volume (CODACESSO) de um mesmo pallet
serão enviadas.
Com a leitura do pallet no fechamento do PTL o Velox irá receber o código, então na coluna
“PALLET” o Velox irá salvar a informação de código do pallet para que no momento de retornar
as informações para o WMS na coluna.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 4.1.3. Cubagem de Pallet  
**Score:** — (nome-topico) | **ID:** 0822ae53096731db

O operador deve cadastrar previamente no sistema Velox as cubagens (em m³) e o peso máximo
(em gramas) suportado pelo pallet. Essas informações são essenciais para que o sistema Velox
realize a cubagem do pallet corretamente.
Quando o pallet alcançar esse limite de cubagem (por exemplo, 80% da capacidade máxima de
cubagem ou peso), o sistema Velox solicitará ao operador o fechamento do pallet e não permitirá
a alocação de volumes adicionais.
O processo será o seguinte:
1. O operador configura no sistema Velox o limite de ocupação (80% da cubagem ou peso
total).
2. Quando esse limite for alcançado, o sistema Velox notificará o operador via LED,
indicando que o pallet deve ser fechado.
3. O sistema não permitirá que novos volumes sejam alocados no pallet após atingir o limite
configurado.
4. O Velox fará o fechamento automático do pallet e informará ao operador por meio da cor
do LED.
5. O cálculo de cubagem será realizado automaticamente pelo sistema Velox, com base nas
informações de dimensões e peso dos volumes recebidos via integração durante a
indução no sorter.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** beca9747e57327a7

O fechamento do pallet nos processos da Invent pode ocorrer de quatro formas distintas:
1. Por Cubagem e Peso
O pallet é fechado automaticamente ao atingir sua capacidade máxima de
cubagem ou peso.
2. Via Tela de Fechamento
O fechamento é realizado manualmente pelo operador por meio de uma interface
específica no sistema.
3. Diretamente nas Rampas
O operador finaliza o pallet diretamente na área de triagem, utilizando os
controles disponíveis.
4. Finalização de Todos os Pedidos de uma Loja
O pallet é fechado automaticamente após o processamento de todos os pedidos
destinados à loja correspondente.
Processo Pós-Fechamento
Após a finalização do pallet em qualquer uma das formas acima, o sistema VELOX enviará
as informações descritas no tópico "Aloca Pallet" para o WMS realizar as tratativas
necessárias.
A Consinco ficará responsável por gerar e imprimir as etiquetas de pallet, que deve ser lido
pelos operadores quando for solicitado o fechamento do pallet. Este processo é descrito no
item PROCESSO OPERACIONAL

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 6.2.4. Critérios Operacionais de Processamento  
**Score:** — (semantico) | **ID:** 001545ad26edb42e

Separação de Pedidos Full Case (OS TIPO 10)
A liberação ocorre somente após a impressão e liberação das etiquetas dos pedidos
de Pallet Sorter, garantindo que os pallets fechados sejam priorizados antes do
início da separação Full Case.
Separação de Pedidos Fracionados (OS TIPO 22)
Podem ser induzidos a qualquer momento. O WCS apenas garante o desvio correto
no chute, sem alocação nos PTLs.
Matriz de Fragilidade
Direcionamento dos produtos conforme resistência (leve → médio → pesado).
Tipo de Ordem de Serviço
O campo TIPO OS com valor 22 indica volumes fracionados. Esses não serão
alocados nos PTLs, apenas desviados.
Observações:
Os campos a serem consumidos e atualizados pelo WCS serão validados durante
os testes de integração.
A centralização de envios, confirmações e cancelamentos em uma única tabela
compartilhada otimiza o processo, aumenta a rastreabilidade e reduz a complexidade
da integração entre sistemas.
Tabela ORDEMSERVICO WCS:
CAMPO_BANCO_WCS
DESCRIÇÃO
TIPO
TAMANHO
IDORDEMSERVICO
Indice da tabela (Primary key com autoincremento)
NUMERIC
-
DATAENVIO
Data do evento de registro do dado na view
TIMESTAMPTZ
-
NUMCAR
Número da Carga, utilizado para agrupar diferentes pedidos
NUMERIC
-
NUMPALETE
Número identificador da sequência de palete
NUMERIC
-
BOX
Número de destino no sorter
NUMERIC
-
NUMONDA
Número da onda
NUMERIC
-
NUMPED
Número do pedido
NUMERIC
-
PRIORIDADE
Número de prioridade de execução de separação e triagem
NUMERIC
-
NUMOS
Número da ordem de serviço
NUMERIC
-
TIPOOS
Indica o tipo de separação de itens que será realizado (por
exemplo, fracionados, Full Case, pallet fechado)
NUMERIC
-
NUMTRANS
Número de Transporte no WMS, número único associado ao
transporte no sistema (WMS)
NUMERIC
-
RUA
Endereço da rua itens para separação
VARCHAR
CODENDERECO
Código do endereço
VARCHAR
QUANTIDADE
Quantidade solicitada
NUMERIC
-
SKU
Código único do produto
VARCHAR
CODPROD
Código único do produto
VARCHAR
DUN14
Código de identificação do produto
VARCHAR
DESCRICAO
Nome do produto para visualização e conferência.
VARCHAR
TOTALVOLUMEM3
cubagem do produto em (m³)
NUMERIC (10,3)
-
PESOTOTAL
Informação de peso
NUMERIC
-
CODCLIENTE
Informação do código do cliente
VARCHAR
MATRIZFRAGILIDADE
Classificação da fragilidade dos produtos
NUMERIC
-
STATUSVENDA
Venda para Loja Própria ou Cliente
VARCHAR
CREATEDAT
Data do momento de inserção da linha na tabela
TIMESTAMPTZ

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** Fechamento do Pallet  
**Score:** — (nome-topico) | **ID:** 9c630c0acb246c77

O processo de fechamento do pallet será realizado dentro dos fluxos do WCS e poderá ocorrer
de duas formas distintas:
•
Fechamento Forçado pelo Operador nas Rampas: O operador pode finalizar o pallet
manualmente nas rampas, caso necessário.
•
Cubagem do pallet: Quando a cubagem parametrizada no sistema for ultrapassada, o
pallet será fechado automaticamente.
Quando um pallet atingir sua capacidade máxima, o operador deverá realizar a leitura de
um comando por meio de código de barras, indicando que o pallet será finalizado e o WCS
irá acender o LED na cor laranja, indicando que o operador deve ler o código master que será
vinculado ao respectivo pallet. A partir deste momento, o sistema WCS envia a integração
com a relação deste pallet ao WMS, porém considera que a posição esta ocupada até que a
posição seja aberta novamente pelo código de abertura da posição mencionado no início
do processo de PTL.
Observação: Por se tratar de um equipamento de alta performance, a equipe Invent
sugere máximo de prioridade na retirada destes pallets finalizados para que a posição
seja liberada para a montagem de um novo pallet. Em casos de falta de posições para
um
determinado
destino,
os
volumes
serão
destinados
para
o
rejeito,
independentemente se esses volumes já foram desviados para as rampas de saídas
ou demais volumes que irão passar no portal, até que seja liberado alguma posição
parametrizada para aquele destino.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Cubagem de Pallet  
**Score:** — (nome-topico) | **ID:** ca90e680386745a4

Para garantir que os pallets montados na expedição não excedam os limites físicos suportados, o supervisor parametriza no WCS o peso máximo (até [A DEFINIR] kg) e a altura máxima permitida por pallet. Durante a alocação no PTL, o WCS monitora o acúmulo de caixas em tempo real e aciona o fechamento do pallet automaticamente quando os limites de peso, volume ou quantidade de volumes são atingidos. Um alerta visual é exibido aos operadores quando o pallet estiver próximo do limite — configurado com uma margem de segurança de [A DEFINIR]%.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Prioridade:** não  
**Heading:** Gatilhos de Fechamento de Pallet  
**Score:** — (nome-topico) | **ID:** 840fc2b4505fe1db

O WCS gerencia o encerramento do pallet de forma automática baseada em dois critérios:
Fechamento Físico (Cubagem): O algoritmo do WCS identifica que a soma volumétrica (m³) ou peso dos itens bipados atingiu o limite configurado para aquele pallet físico.
Fechamento Lógico (Fim de Pedido): Todos os itens previstos para aquela rota/cliente foram bipados, não havendo mais pendências.
