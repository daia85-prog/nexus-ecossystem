# sorter.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** ecc6141190a4be26

O O Sorter é projetado para processar até 4.000 volumes por hora, com base na eficiência da
separação (Full Case, Fracionado, Picking Cart). Ele é composto por um portal de leitura com 2
faces de leitura (lateral) e topo, que garantem a leitura dos volumes, desde que as etiquetas
estejam posicionadas nas lateral correta das caixas ou topo. Essas faces de leitura permitem
que o WCS realize o checkout para pedidos do tipo Full Case e Fracionado.
O Sorter conta com 8 rampas de saída para o transporte dos volumes e 1 rampa exclusiva para
rejeito, totalizando 9 rampas. Cada uma das rampas de saída de transporte é equipada com um
leitor de código de barras e um conversor, totalizando 8 leitores e 8 conversores, responsáveis
por capturar as informações das etiquetas e fazer a comunicação com o sistema WCS.
O processo no Sorter inicia com a leitura da caixa no portal de leitura. O sistema captura a
etiqueta da caixa, que é enviada para o Controlador Lógico Programável (CLP). O CLP, então,
encaminha as informações para o WCS, que realiza a verificação dos dados do pedido associado
à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, informando em qual
rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme os PTLs ativos e os respectivos pedidos, com
volumes sendo desviados automaticamente para as rampas corretas. Para garantir a
rastreabilidade e a precisão do processo, todos os volumes induzidos no sorter devem conter
uma etiqueta gerada pelo WCS, que inclui um QR Code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão
direcionados automaticamente para o rejeito ou reprocessamento, de acordo com as regras de
operação definidas.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 15.5. BALANCEAMENTO ENTRE RAMPAS DE UMA MESMA TRANSPORTADORA (NÍVEL  
**Score:** — (nome-topico) | **ID:** c5e6bb3df8559de1

MICRO) .......................................................................................................... 103

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Transportador de Caixas – Sistema de transporte por esteira ou roletes dimensionado  
**Score:** — (semantico) | **ID:** e2c47abb8fcf6366

para a movimentação de caixas de papelão (unidades de venda) dentro do armazém
automatizado.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Transporte  
**Score:** — (semantico) | **ID:** 761b4fc79d966d2a

Agrupamento de remessas vinculadas a um mesmo veículo e rota. Possui informações
como placa, perfil e transportadora, sendo a unidade utilizada para formação de ondas,
definição de docas e tratativa de temperatura.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** TORD  
**Score:** — (semantico) | **ID:** d93f9abc9c5e74c3

Interface de criação de Ordem de Transporte – mensagem enviada do SAP ao WCS
contendo os dados necessários para iniciar uma movimentação ou do WCS para o SAP
para solicitar uma movimentação

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** CATO  
**Score:** — (semantico) | **ID:** 17e6251c7c1e250b

Interface de estorno de Ordem de Transporte – mensagem enviada para reverter
uma movimentação iniciada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** ZSDCANCELEXPRE  
**Score:** — (semantico) | **ID:** ec973ef30150d85a

Cancelamento de Expedição — Mensagem enviada pelo SAP ao WCS para solicitar o
cancelamento de uma remessa ou transporte que já foi integrado ao sistema.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** ZPRIO  
**Score:** — (semantico) | **ID:** 9fd9cb2fed8178a0

Mensagem utilizada para comunicar ou alterar a prioridade de uma Ordem de Transporte
(OT) entre SAP e WCS.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** ZABAST  
**Score:** — (semantico) | **ID:** 1f94dfe0ac5b99ec

Mensagem enviada pelo WCS ao SAP para solicitar reabastecimento por demanda.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** BK10 — Transportador de Caixas  
**Score:** — (semantico) | **ID:** 8424d1e6047555f4

Sistema de transporte composto por esteiras e roletes dimensionados para a movimentação de
caixas (unidades de venda). Possui estrutura mais compacta e velocidade de operação adequada
ao fluxo da operação. O equipamento interliga fisicamente a zona de picking ao sorter, realizando
o transporte das caixas coletadas pelos operadores até o ponto de entrada do sistema de
classificação. Pode contar com trechos de acúmulo (buffers de esteira) para regulação do fluxo
de entrada no sorter.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Sorter — Cross Belt  
**Score:** — (semantico) | **ID:** fc721595e50e1e70

Equipamento de classificação automática de volumes de alta velocidade, composto por um
circuito fechado de transportadores individuais (carros) montados sobre uma esteira de tração
contínua. Cada carro possui uma mini esteira transversal (cross belt) independente, acionada
individualmente por motor próprio. O sistema é composto por: zona de indução (entrada dos
volumes no circuito), portal de leitura, circuito de transporte (loop contínuo onde os carros
circulam em alta velocidade) e pontos de descarga (chutes). No momento da descarga, a cross
belt do carro é acionada lateralmente, transferindo o volume para a rampa de destino designada.
O equipamento possui capacidade de recirculação e rampas de rejeito para volumes não
identificados ou sem destino válido.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 7.3. Ordem de transporte (OT)  
**Score:** — (semantico) | **ID:** c92070f9b4754956

As OTs são movimentações de materiais onde cada OT está vinculada a uma única
movimentação, que podem conter informações como posições de origem e destino, quantidade
de caixas, peso, lote, dados do produto entre outras informações relevantes a movimentação de
materiais.
Essa movimentação permite que o WM possa gerenciar seu estoque forma maleável buscando o
melhor atendimento possível para as necessidades do estoque.
Dentro dos processos que envolvem o WCS as OTs são utilizadas para realizar todos os tipos de
procedimentos que envolvem movimentações de saldo.
As solicitações e criações de OTs ocorrem através do envio do IDOC e devem ser confirmadas
através de outro IDOC.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 8. Regras Ordem de Transporte (OT)  
**Score:** — (semantico) | **ID:** 4b77bd2e618216db

A Ordem de Transporte (OT) é a instrução que determina a movimentação de um material de
uma posição de origem para uma posição de destino dentro do armazém. É o mecanismo pelo
qual o SAP e o WCS se comunicam para solicitar, executar e confirmar movimentações
(transportes de saldos).
Toda movimentação no centro de distribuição seja abastecimento de posição, retirada de
palete, entrega de palete, inventário, limpeza de canal ou estorno de OT é formalizada por meio
de IDOC. Sem uma OT, nenhuma movimentação é executada pelo WCS.
A comunicação de OTs entre SAP e WCS utiliza quatro tipos de IDOC, cada um com uma função
específica no ciclo de vida da ordem:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Identificador Único  
**Score:** — (semantico) | **ID:** 7cff513a332a85a8

Toda OT de reabastecimento possui um identificador único que a acompanha ao longo de todo
o processo. Esse identificador é o elo que conecta a necessidade de movimentação ao palete
designado para atendê-la.
O identificador único é essencial para três cenários:
•

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 8.1. TORD  
**Score:** — (semantico) | **ID:** 24b450e7d4e6490b

O TORD é o IDOC que materializa a Ordem de Transporte. É a mensagem que cria formalmente
a OT no sistema. O TORD é utilizado para comunicar a criação de uma OT entre o SAP e WCS e
pode trafegar e duas direções:
SAP → WCS: O SAP cria a OT e envia ao WCS para execução. Utilizado em todas as
movimentações de produtos em estoque.
WCS → SAP: O WCS solicita uma movimentação ao SAP. Utilizado durante a separação de
materiais quando acontecem cortes. Nesse caso, o WCS envia um TORD de solicitação e o SAP
responde com um TORD confirmado, realizando a equiparação de estoques.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informação  
**Score:** — (semantico) | **ID:** c59d161f2300578b

LGNUM
Ordem de transporte
Número do Deposito (WM)
TANUM
Ordem de transporte
Número da OT
BWLVS
Ordem de transporte
Tipo de movimento (WM)
TRART
Ordem de transporte
Tipo de operação (U = bloqueio e desbloqueio)
TAPOS
Ordem de transporte
Número do item da OT
MATNR
Produtos
Código do produto (SKU)
MAKTX
Produtos
Descrição de material
WERKS
Ordem de transporte / Lote / Palete
Centro (planta)
CHARG
Lotes
Lote
MEINS
Ordem de transporte / Lote / Palete
Unidade de medida
VLTYP
Ordem de transporte / Estoque
Tipo de deposito de origem
VLPLA
Ordem de transporte / Estoque
Posição de origem
VSOLM
Lotes / Palete
Quantidade de caixas origem
VLENR
Palete
Número do palete de origem
NLTYP
Ordem de transporte / Estoque
Tipo de deposito de destino
NLPLA
Ordem de transporte / Estoque
Posição de destino
NSOLM
Lotes / Palete
Quantidade de caixas no destino
NLENR
Palete
Nº do palete de destino
HOMVE
Ordem de transporte
Movimentação de palete completo
LGORT
Lotes / Palete
Deposito
VOLUM
Lotes / Palete
Metros cúbicos
LENUM
Palete
Nº do palete
ZPESOL
Lotes / Palete
Peso líquido
MGEWI
Lotes / Palete
Peso bruto
ZSIGLA
Produtos
Descrição antiga (Abreviação)
COND_TEMP
Produtos
Temperatura
HSDAT
Lotes
Data fabricação
ZVFDAT
Lotes
Data Vencimento
NSOLA
Lotes / Palete
Quantidade de caixas

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informação  
**Score:** — (semantico) | **ID:** cf0db3ff7244d3b6

TANUM
Ordem de Transporte
Un. Deposito (Palete)

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informação  
**Score:** — (semantico) | **ID:** 22daf45f5788d759

LENUM
Ordem de Transporte
Número do palete

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informação  
**Score:** — (semantico) | **ID:** 0e2085aa69605863

TANUM
Ordem de Transporte
Número da OT
LENUM
Ordem de Transporte
Número do palete

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informação  
**Score:** — (semantico) | **ID:** 1a20d50c0999fa2d

TANUM
Ordem de transporte
Número da OT
VLENR
Palete
Número do palete de origem

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tamanho  
**Score:** — (semantico) | **ID:** e5c888fe414041d3

Palete
Nº do palete (UD)
Ordens de transportes
Sku
Código do produto
Produtos (Materiais)
Sigla
Descrição antiga do produto
Produtos (Materiais)
Prioridade
Prioridade da OT
Ordens de transportes

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** DEPOSITO.  
**Score:** — (semantico) | **ID:** cd80bc45fcb56db0

Para o processo de deposito os cenários de erros são os mesmo para o processo de retirada do
palete na posição de origem.
Após a confirmação do PLC do deposito do palete na posição de destino ocorre a alteração do
status da movimentação FINALIZADA e o WCS disponibiliza o saldo do palete para coleta
atualiza o status da OT para CONFIRMADA envia o IDOC TOCO de confirmação ao SAP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Cadastro de produtos (Materiais)  
**Score:** — (semantico) | **ID:** 55ff2e93a6ba5a09

O cadastro mestre de materiais tem como objetivo centralizar no WCS todas as informações
técnicas dos materiais movimentados no centro de distribuição, garantindo que o sistema
possua os dados necessários para execução dos processos de reabastecimento, separação,
sorteamento e expedição.
O WCS não é proprietário das informações de material. Todo o ciclo de cadastro (inclusão e
alteração) é de responsabilidade exclusiva do SAP, que atua como fonte única para os dados de
materiais. Toda manutenção (inclusão de novo material e atualização de atributos) deve ser
realizada no SAP e enviada ao WCS por meio do envio de um novo IDOC.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tamanho  
**Score:** — (semantico) | **ID:** 6590928fd1daf03c

Palete Totais
Total de paletes no dia
Ordens de transportes
Palete Executado
Paletes realizados no dia
Ordens de transportes
Palete Pendente
Paletes pendentes no dia
Ordens de transportes
Congelado Total
Total de paletes congelados
Ordens de transportes
Resfriado Total
Total de paletes resfriados
Ordens de transportes
Necessidade Total
Paletes solicitados pelo Velox
Ordens de transportes
Necessidade Pendente
Solicitações Velox pendentes
Ordens de transportes
Necessidade
Executado
Solicitações Velox executadas
Ordens de transportes
Congelado Pendente
Necessidades pendentes –
congelado
Ordens de transportes
Resfriado Pendente
Necessidades pendentes –
resfriado
Ordens de transportes
Capacidade Total
Paletes solicitados pelo SAP
Ordens de transportes
Capacidade Pendente
Solicitações SAP pendentes
Ordens de transportes
Capacidade Realizado
Solicitações SAP realizadas
Ordens de transportes
Congelado Pendente
Capacidade pendente –
congelado
Ordens de transportes
Resfriado Pendente
Capacidade pendente –
resfriado
Ordens de transportes

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informação  
**Score:** — (semantico) | **ID:** 8fea784375e0f8b2

DELID
Missão
ID da remessa
SHPID
Missão
ID do Transporte
ZUNAME
Missão
Nome do Usuário
ZDT
Missão
Data de Cancelamento
ZHR
Missão
Hora de Cancelamento

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Doca Principal  
**Score:** — (semantico) | **ID:** ff6d5af6387391eb

Cada transporte possui obrigatoriamente uma doca principal, definida via IDOC TPSDLS
(ZSDDAREM) por meio do campo ZDOCA enviado pelo SAP. A doca principal é fixa e imutável
no WCS, preservando a integridade da informação. O WCS não permite alteração da doca
principal apenas por meio de um IDOC, em complemento do IDOC iremos receber a prioridade
que será usada para ordenação na tela.
É obrigatório o recebimento de pelo menos uma doca principal pelo SAP para que o transporte
possa ser incluído em uma onda a atualização da doca só será possível por meio de um IDOC e
com status da onda PREPARADA ou CRIADA.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Docas Auxiliares  
**Score:** — (semantico) | **ID:** 6011c8e462e39245

O WCS permite a configuração complementar de docas secundárias de apoio operacional, com
o objetivo de proporcionar flexibilidade e balanceamento de fluxo.
A inclusão de novas docas no transporte é restrita a funcionalidade manutenção de transporte.
As docas secundárias são utilizadas pelo WCS no balanceamento de desvio do sorter, conforme
descrito na seção de sorter [Balanceamento].

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Seleção de docas  
**Score:** — (semantico) | **ID:** 0d2f4f2769166028

O WCS irá listar somente as docas disponíveis para vínculo dentro da onda, ou seja, uma doca já
utilizada em outro transporte dentro da mesma onda não irá aparecer na opção de seleção de
docas para um outro transporte.
O WCS controlará as docas por onda onde para cada doca primária ou auxiliar (secundaria) será
possível atribuir somente 1 transporte, sempre que uma doca for utilizada dentro da onda e exista
a necessidade de mudar para uma doca em uso, será necessário acessar o transporte pertencente
a doca e retirar a seleção dessa doca necessária, assim deixando-a disponível para atribuir essa
doca ao novo transporte.
NOTA: Caso exista mais de um transporte com a doca principal ou secundário não será permitido
o início da onda por duplicidade de doca, com isso será necessário a exclusão da onda ou
transporte e cancelamento de remessa e a correção da doca primaria deve ser feita dentro do
SAP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Inclusão de ondas preparadas  
**Score:** — (semantico) | **ID:** 2dae9f72974c4818

Ao realizar a inclusão de transporte em uma onda com status preparada o WCS atribui esse novo
transporte a onda selecionada e inicia a rotina de preparação de onda para as remessas (missões)
do transporte incluído [Preparação da Onda].

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Exclusão de transporte  
**Score:** — (semantico) | **ID:** 331f8ca7133dbbd5

A operação pode realizar a exclusão de transportes de uma onda desde que a onda tenha o status
criada ou preparada, dessa forma toda onda que ainda não foi iniciada pode sofrer um decréscimo
de transporte e os materiais em reserva serão liberados.
Todos os transportes excluídos da onda retornaram para a tela de transportes para serem
vinculados a uma nova onda [Criação de onda] ou serem cancelados através do cancelamento
de remessa [Cancelamento de remessa].

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Obri  
**Score:** — (semantico) | **ID:** 4a2ecd57b721d98e

ZHSDONDA
DELID
NUM
ID da Remessa
(Delivery)
ZHSDONDA
SHPID
NUM
ID do Transporte
(Shipment)
ZHSDONDA
ZUNAME
Nome do Usuário
ZHSDONDA
ZACAO
Código da Ação (Ex:
S-Separação)
ZHSDONDA
ZDT
DATE
Data da Onda
(AAAAMMDD)
ZHSDONDA
ZHR
TIME
Hora da Onda
(HH:MM:SS)
ZHSDONDA
ZNUM_ONDA
NUM
Número da Onda de
Separação
ZHSDONDA
ZPLVC
Placa do Veículo
ZHSDONDA
ZTURNO
NUM
Turno de Trabalho
ZHSDONDA
ZDOCA
Doca de
Carregamento
ZHSDONDA
ZPRIORIDADE
NUM
Nível de Prioridade
<ZSDONDA01>
<IDOC BEGIN="1">
<EDI_DC40 SEGMENT="1">
<TABNAM>EDI_DC40</TABNAM>
<DIRECT>2</DIRECT>
<IDOCTYP>ZSDONDA01</IDOCTYP>
<MESTYP>ZSDONDA</MESTYP>
<SNDPOR>ZSDONDA_SVD</SNDPOR>
<SNDPRT>LS</SNDPRT>
<SNDPRN>WCS_CDSVD</SNDPRN>
<RCVPOR>ZSDONDA_SVD</RCVPOR>
<RCVPRT>LS</RCVPRT>
<RCVPRN>PRD</RCVPRN>
</EDI_DC40>
<ZHSDONDA SEGMENT="1">
<DELID>0343305202</DELID>
<SHPID>0128761052</SHPID>
<ZUNAME>Jackson Silva</ZUNAME>
<ZACAO>S</ZACAO>
<ZDT>20260326</ZDT>
<ZHR>12:29:28</ZHR>
<ZNUM_ONDA>1000093</ZNUM_ONDA>
<ZPLVC>RDM5J21</ZPLVC>
<ZTURNO>01</ZTURNO>
<ZDOCA>033</ZDOCA>
<ZPRIORIDADE>001</ZPRIORIDADE>
</ZHSDONDA>
</IDOC>
</ZSDONDA01>

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informação  
**Score:** — (semantico) | **ID:** e215540d8a5e8707

DELID
Missão
ID da remessa
SHPID
Missão
ID do Transporte
ZNUM_ONDA
Missão
ID da onda
ZDT
Missão
Data de Envio
ZHR
Missão
Hora de Envio

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tam.  
**Score:** — (semantico) | **ID:** 0617f8f8ac1b08b9

Total de Volumes
Quantidade total de volumes no
período
Volumes /
Tarefas
Total de Ondas
Quantidade total de ondas
geradas
Volumes /
Tarefas
Total de Transportes
Quantidade de transportes
envolvidos
Volumes /
Tarefas
Volumes Processados
Quantidade de volumes já
processados
Volumes /
Tarefas
Volumes Pendentes
Quantidade de volumes ainda
não processados
Volumes /
Tarefas

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tam.  
**Score:** — (semantico) | **ID:** dee43ebf0b903cb7

Operação
Total
Todas as caixas com onda criada levando em
consideração o range.
Ordens de
transportes
Congelado
Total
Total de caixas que temos com onda criada para
materiais congelados
Ordens de
transportes
Resfriado Total
Somatório de caixas que temos onda criada para
materiais resfriados
Ordens de
transportes
Operação
Coletado
Somatório das caixas que foi confirmado separação
através do PBL
Ordens de
transportes
Congelado
Coletado
Somatório das caixas que foi confirmado separação
na câmara de congelado através do PBL
Ordens de
transportes
Resfriado
Coletado
Somatório das caixas que foi confirmado separação
na câmara de resfriado através do PBL
Ordens de
transportes
Operação
Pendente
Somatório de caixas que foram realizadas start da
onda e ainda não foram confirmadas separação no
PBL
Ordens de
transportes
Congelado
Pendente
Somatório de caixas que foram realizadas o start e
ainda não foram confirmadas separação no PBL no
congelado.
Ordens de
transportes
Resfriado
Pendente
Somatório de caixas que foram realizadas o start e
ainda não foram confirmadas separação no PBL no
resfriado
Ordens de
transportes
Operação Não
Gerado
Somatório das caixas que ainda não foram iniciadas
o Starts da onda
Ordens de
transportes
Congelado Não
Gerado
Somatório das caixas que ainda não foram iniciadas
os Starts da onda com temperatura congelada
Ordens de
transportes
Resfriado Não
Gerado
Somatório das caixas que ainda não foram iniciadas
os Starts da onda com temperatura Resfriado.
Ordens de
transportes

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Interpretação  
**Score:** — (semantico) | **ID:** fb78d258b5f5def2

A etiqueta de produto é o principal meio de identificação dos volumes durante o processo de
sorteamento. Quando uma caixa passa pelo portal de leitura do sorter, o WCS precisa extrair
das etiquetas as informações essenciais para tomar decisões de desvio, qual é o produto (SKU),
qual é o lote, qual é a data de fabricação e para produtos rastreáveis, qual é o SSCC da caixa.
O projeto MBRF Salvador possui diversos tipos de layouts, com variações significativas na
forma como as informações são codificadas. Alguns layouts trazem todas as informações em
código de barras, outros omitem o lote ou a data de fabricação, e outros utilizam formatos
proprietários que exigem interpretação específica pelo WCS.
Por isso, o WCS deve ser capaz de interpretar todos os layouts, extrair as informações de cada
um conforme as regras descritas nesta seção e, quando uma informação não estiver disponível
na etiqueta, buscar a informação complementar via cadastro interno ou IDOC do SAP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informações Extraídas da Etiqueta  
**Score:** — (semantico) | **ID:** 76d08bffc01517a7

Independentemente do layout, o WCS precisa obter as seguintes informações de cada volume
que passa pelo portal de leitura:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Uso no WCS  
**Score:** — (semantico) | **ID:** 7ebca4834dfbac02

SKU ou DUN14
Obrigatório
Identificação do produto para desvio no sorter
Lote
Condicional
Utilizado para rastreabilidade e retorno da
separação ao SAP. Em alguns casos, a etiqueta
pode não conter a informação de lote.
Data de
fabricação
Condicional
Utilizada para validação de FEFO e controle de
shelf life. Em alguns casos, a etiqueta pode não
conter a data de fabricação
Código
produtor
Quanto disponível
Informação da unidade produtora do produto,
quando não houver lote é obrigatório ter o
código, ou no caso de produtos terceiros ter o
código cadastrado na tabela de itens terceiros.
Peso líquido
Obrigatório
Decremento de saldo de estoque
SSCC
Somente rastreável
Identificação única da caixa para rastreabilidade

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Lote Padrão (maioria dos itens)  
**Score:** — (semantico) | **ID:** c163387173f26d71

Composto por 7 caracteres, formados por:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** disponível  
**Score:** — (semantico) | **ID:** 844100dca571d238

—
—
WCS usa cadastro
de lote fixo por SIF
extraído do (7030)
Fornecedor
terceiro
No código DUN14
No código
(10) parcial
—
—
WCS forma lote
como Código
Produtor +
conteúdo do AI
(11)

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 15. Sorter  
**Score:** — (nome-topico) | **ID:** d6210b55a6b7635a

O sorter será responsável por realizar o direcionamento automático dos volumes ao longo do
fluxo, conforme as definições operacionais e regras de destino configuradas no WCS.
Durante a execução da onda, o WCS deverá enviar ao sorter as informações necessárias para
identificação e desvio dos volumes, garantindo que cada item siga para o destino correto dentro
do processo.
A identificação dos volumes no sorter será realizada por meio da leitura dos códigos presentes
na caixa [Etiquetas]. A partir dessa leitura, o WCS será responsável por interpretar as informações
recebidas e determinar o destino do volume, com base nos dados recebidos na criação da
remessa [Remessa].
O funcionamento do sorter deverá considerar as validações de leitura, regras de destino e
tratativas de exceção, de forma a assegurar a continuidade da operação e a correta segregação
dos volumes.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Regras Operacionais do Sorter  
**Score:** — (semantico) | **ID:** ef883e75f33a4657

O sorter deverá executar os desvios conforme os dados recebidos do WCS e de acordo com o
cadastro de destinos configurado para a operação.
Sempre que um volume for identificado corretamente, o sistema deverá comandar seu
direcionamento para a saída correspondente.
Caso ocorra alguma inconsistência durante a leitura, ausência de cadastro, falha de comunicação
ou impossibilidade de definição do destino, o volume deverá ser encaminhado para o fluxo de
rejeito para a rampa de rejeitos tratáveis ou não tratáveis.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tratativas de Exceção  
**Score:** — (semantico) | **ID:** 43522442e9556658

Os cenários de exceção do sorter deverão ser tratados pelo WCS de acordo com o tipo de falha
identificado no processo.
Entre os principais cenários de exceção, podem ser considerados:
•
falha de leitura do volume;
•
ausência de destino configurado;
•
divergência de cadastro;
•
indisponibilidade de rota;
•
parada do equipamento;
•
Erro ou falha do desvio pelo Sorter;
•
envio para rejeito.
As ações de reprocesso, rejeito ou intervenção operacional deverão seguir as regras definidas
para cada cenário. [Rejeito]

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Crosscheck — Validação Cruzada PVAR no Sorter  
**Score:** — (semantico) | **ID:** 70370fdeee681252

Cada caixa passa a ter duas etiquetas: a etiqueta de material (do fabricante) e a etiqueta

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** NoRead em qualquer etiqueta: Volume entra em recirculação. Após esgotar  
**Score:** — (semantico) | **ID:** 274a98559385d373

tentativas, é rejeitado.
Com o crosscheck ligado, a rastreabilidade individual do volume é completa.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Balanceamento de Desvio no Sorter  
**Score:** — (semantico) | **ID:** f0dc01567c1c7563

O balanceamento de desvio é a lógica que o WCS utiliza para decidir para qual rampa um
volume deve ser direcionado quando existem múltiplas opções válidas de destino. O objetivo é
distribuir os volumes de forma equilibrada, evitando que uma rampa ou transportadora fique
sobrecarregada enquanto outras ficam ociosas.
Essa lógica opera em dois níveis distintos e complementares:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 1. Balanceamento entre transportadoras (nível macro): Quando o mesmo SKU com  
**Score:** — (nome-topico) | **ID:** d249d41814d3296e

shelf life é elegível para mais de uma transportadora, o WCS distribui os volumes entre
todas as transportadoras aptas, priorizando sempre a mais ociosa.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 2. Balanceamento entre rampas de uma mesma transportadora (nível micro):  
**Score:** — (nome-topico) | **ID:** 5b7b6e481b90156f

Quando uma transportadora possui mais de uma rampa vinculada, o WCS distribui os
SKU entre as rampas daquela transportadora.
Os dois níveis atuam em sequência: primeiro o WCS decide qual transportadora receberá o
volume, depois decide qual rampa daquela transportadora será utilizada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Macro)  
**Score:** — (semantico) | **ID:** d15e525c81b9b7fe

Quando um volume passa pelo portal de leitura do sorter, o WCS identifica o SKU e o shelf life
do produto. Com essas informações, o WCS busca todas as transportadoras (docas) que
estão elegíveis para receber aquele volume, ou seja, todas as transportadoras cujos transportes
na onda possuem aquele SKU com aquele shelf life em suas remessas.
O WCS aplica um balanceamento 1 para 1 entre as transportadoras elegíveis, direcionando
cada volume para a transportadora que estiver mais ociosa naquele momento.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Lote fora do esperado: o WCS aplica a regra de aceitação por remessa, direcionando  
**Score:** — (semantico) | **ID:** 405f2d576e518256

o volume para a remessa/transporte que necessita deste material e a data de
fabricação é compatível com esperado, priorizando o FEFO onde em caos de mais de
uma remessa aceitar o material e shelf, a remessa onde o shelf de for o mais próximo
da data de fabricação será contemplada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tam.  
**Score:** — (semantico) | **ID:** 592723e2f8cf49e7

Docas em Operação
Doca
Informação do número da doca com o status
online/Offline
Ordens de
transportes
Placa
Placa do veículo informado pelo SAP
Ordens de
transportes
Perfil
Perfil do veículo informado pelo SAP
Ordens de
transportes
Transportador
Informação do transporte informado pelo
SAP
Ordens de
transportes
Embarque
Número do embarque informado pelo SAP
Peso Total
Peso total que aquela doca irá receber
considerando toda a onda
Missão
Peso por temperatura
(Congelado/Resfriado)
Soma do peso dos volumes esperados para
aquela doca
Missão
Caixas por
temperatura
(Congelado/Resfriado)
Soma dos volumes esperados para aquela
doca separados por temperatura
Missão
Caixas
Total
Soma dos volumes de congelado e resfriado
Missão
Separadas
Todos os volumes que foi efetuada a
separação (Saida da doca)
Missão
Pendentes
Todos os volumes que não foram desviados
na doca
Missão
Próximo Carregamento
Placa
Placa do próximo veículo informado pelo SAP
Ordens de
transportes
Perfil
Perfil do próximo veículo informado pelo SAP
Ordens de
transportes
Transp
Informação do próximo transporte informado
pelo SAP
Ordens de
transportes

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** cheia  
**Score:** — (semantico) | **ID:** 705f76697ba6e2e8

Tratável
O volume foi direcionado para a rampa de destino,
porém ela encontrava-se sem capacidade
disponível, fazendo com que o sorter realize a
recirculação do volume até que haja liberação de
espaço ou atinja o limite configurado de tentativas.
Acúmulo de volumes na rampa, atraso
na retirada pelos operadores ou
desbalanceamento no fluxo de
separação, fazendo com que o volume
ultrapasse a quantidade definida de
recirculação por rampa cheia.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Duplicidade  
**Score:** — (semantico) | **ID:** cfeb45c510000710

Tratável
Um volume cujo identificador WCS já possui status
"No sorter", "Na rampa" ou "Finalizado" é
identificado novamente pelos portais de leitura.
Isso significa que duas caixas físicas estão
circulando com a mesma identificação.
Reimpressão de etiqueta (contingência
ou reimpressão manual) onde a etiqueta
original não foi descartada e ambas as
caixas entraram no sorter.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** excedentes  
**Score:** — (semantico) | **ID:** 78bb1ebe925bcbc4

Não
tratável
O WCS separou mais volumes do que o transporte
necessita para aquele SKU. As caixas excedentes
não têm destino válido dentro da onda e são
direcionadas ao rejeito.
Divergência entre quantidade coletada e
quantidade solicitada, possivelmente por
erro operacional ou reindução de
volume já contabilizado.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** cancelada  
**Score:** — (semantico) | **ID:** c6a611fd8da9f23f

Não
tratável
A onda foi cancelada enquanto havia volumes em
trânsito no circuito do sorter. Todos os volumes
pendentes que ainda não foram desviados para
rampas são direcionados ao rejeito.
Cancelamento de onda durante
expedição

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Recirculação antes do Rejeito  
**Score:** — (semantico) | **ID:** 297f2ce0fc603526

Antes de rejeitar um volume, o WCS aplica a lógica de recirculação. Quando o portal de leitura
não consegue identificar o volume (NoRead) ou quando ocorre alguma falha pontual de leitura,
o volume não é rejeitado imediatamente — ele é mantido no circuito do sorter e passa
novamente pelo portal para uma nova tentativa de leitura.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 4. Após a reimpressão, o operador cola a nova etiqueta na caixa e pode reinduzir o  
**Score:** — (semantico) | **ID:** 6ea89c0884d9a758

volume na esteira do sorter para uma nova tentativa de desvio.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Regra de detecção: Sempre que um volume com status "No sorter", "Na rampa" ou  
**Score:** — (semantico) | **ID:** 283e24542f88b3dc

"Finalizado" for identificado novamente pelos portais de leitura do sorter, o WCS rejeita o
volume imediatamente por duplicidade, sem recirculação.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Análise Caixas SORTER  
**Score:** — (semantico) | **ID:** 9a4a2541a158bdbd

Esse relatório irá informar por hora/dia/mês as informações pertinentes ao SORTER. Para os
seguimentos abaixo deve ser informado a quantidade geral, e por portal
Para os seguimentos abaixo deve ser informado a quantidade geral, e por portal
Informar um agrupador no formato hora/dia/mês e quando selecionado uma das opções o
relatório deverá informar o campo primário conforme. Em horas deverá mostrar os dados de
ocorrência hora a hora de acordo com a seleção. Em dias deverá mostrar a informação dia a dia
de acordo com a seleção

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Campo  
**Score:** — (semantico) | **ID:** 2356d923019b761d

Quantidade
Caixas
A quantidade de caixas que passamos no SORTER de acordo com a
seleção informada.
Caixas Lidas
Quantidade de caixas que foi lida
% Cx Lidas
Percentual de caixas lidas do montante total
Caixas não lida
total
Caixas que não tivemos leitura de nenhuma informação.
% Caixas não
lida total
Percentual das caixas que não tiveram nenhuma identificação
comparado ao total
Cx não leitura
parcial
Caixas que tivemos leitura, porém não foi suficiente para identificar o
material/lote/peso
% Cx não
leitura parcial
Percentual que tivemos de não leitura parcial comprado ao total.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Campos  
**Score:** — (semantico) | **ID:** 79260af6af489746

Modelo de etiqueta lida
Portal que identificou a etiqueta
Carro do sorter

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Produtividade por Rampa  
**Score:** — (semantico) | **ID:** 92e8c3b48564f613

Informação de desvio das rampas do SORTER. O relatório deverá aparecer por filtro de
Hora/dia/Mês e conforme selecionado irá mostrar a informação das rampas

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Campo  
**Score:** — (semantico) | **ID:** 1731e66eb2bb3b45

Nº da compra
Nº da compra
Posto
Posto da posição do material.
Onda
Informação do número da onda da compra
Transporte
Transporte ca compra
Remessa
Remessa a qual foi realizada a compra
Posição
Posição em que a separação foi realizada
Material
Material separado
Lote
Informação do qual estava programada para sair
Tipo de
Material
Tipo de material – (PPAD, PFIX, PVAR)
Categoria de
peso
Categoria de peso – (Pesado, Leve, Frágil)
Qtd caixas
solicitdas
Quantidade estimada de compra na posição -
Qtd caixas
separadas
Quantidade real de caixas compradas na posição
Kg solicitado
Volume estimado de compra na posição.
Kg separado
Estimativa de peso do item
Qtd cortada
Quantidade de caixas cortada na compra de acordo com a informação
da compra
Kg Cortado
Volume que foi sinalizado corte na posição esse é o volume passeado
na compra e não o valor que tinha na posição
Separador
Gravar o separador que realizou a coleta de acordo com o colaborador
que estava cadastrado no posto no momento da separação.
Data compra
Data e hora da realização da compra
Data Geração
da compra
Data e hora de quando foi gerado as informações de compra

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 2563999a51d7faa1

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma
superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS
realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
Ao longo de toda a extensão do sorter, haverá 5 rampas de saída destinadas à separação de
pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 6 rampas.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador
Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes
do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo
no WCS, que define, para cada tipo de volume, a rampa de saída correspondente baseado na
transportadora e rota.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar
devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão
direcionados para o rejeito ou reprocessamento, conforme regras operacionais.
Fica sob responsabilidade do contratado disponibilizar uma TV em cada rampa para exibição do
dashboard operacional da rampa, ou para que seja feito o processo de paletização

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 2. Especificação  
**Score:** — (semantico) | **ID:** 47e5cfa65f1b99bd

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável
pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta
aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os
sistemas WMS (Zaffari) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto
armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente
(instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface
Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de
trabalho (Google Chrome).

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.2.1. Orientação de indução  
**Score:** — (nome-topico) | **ID:** e954c556e027b4ce

Descrição:
A orientação de indução no WCS será responsável por sugerir a ordem de indução dos
pallets no stage-in, levando em consideração a matriz de fragilidade de cada item alocado
no pallet, bem como a disponibilidade dos produtos. O objetivo é garantir que os itens sejam
induzidos de forma otimizada, priorizando a segurança e a eficiência do processo. Porém a
orientação não é restritiva dando flexibilidade da operação decidir qual pallet vai induzir.
Funcionalidade:
•
Exibição na Tela de Indução:
A tela de indução exibirá as seguintes informações essenciais para os operadores:
o
Ordem de indução: Indica a sequência na qual os pallets devem ser
induzidos para o processo, com base na prioridade e na fragilidade dos
itens.
o
RG do pallet: Apresenta a identificação única de cada pallet, permitindo o
rastreamento e controle durante o processo de indução.
o
Matriz de fragilidade: Exibe a categoria de fragilidade do pallet, com base
nos itens que estão alocados nele. Isso determina a posição dos itens no pallet
e a ordem de indução.
•
Indução de Pallets:
O WCS irá utilizar a ordem de indução para determinar qual pallet será induzido a
seguir. O processo será baseado nos seguintes critérios:
o
A disponibilidade dos itens no pallet, assegurando que o processo de indução
ocorra sem interrupções ou falta de produtos.
o
A matriz de fragilidade de cada item no pallet, que será um fator crucial na
priorização da indução. Itens mais frágeis podem ser induzidos em uma
sequência que minimize o risco de danos durante o processo.
o
Status dos volumes: Um pallet sairá da lista de indução somente quando todos
os volumes pertencentes ao pallet estiverem com status finalizado. Caso algum
volume fique travado ou pendente por algum motivo operacional, o pallet
permanecerá como pendente na lista.
•
Objetivo:
O objetivo da orientação de indução é garantir que a indução dos pallets seja
realizada de maneira otimizada, respeitando as prioridades dos itens, sua fragilidade e
a disponibilidade no stage-in. Esse processo ajudará a evitar danos aos produtos,
aproveitar melhor o espaço disponível e garantir a eficiência operacional
durante a movimentação dos pallets.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.6. Sorter  
**Score:** — (nome-topico) | **ID:** 446b903a5ad7e76e

O sorter fará o desvio dos volumes de maneira automática conforme a disponibilidade dos PTLs
para a separação de tarefas e crossdocking, seguindo as prioridades informadas na integração.
O agrupador de todos os pallets presentes no sorter será a loja destino, categoria do
produto (Alimentício/Não Alimentício) e tipo de embalagem que será informada via
integração pelo WMS na disponibilização no final da coleta dos pallets.
A esteira deverá realizar o desvio do mesmo item que solicite em mais de uma loja de maneira
cadenciada para não ocorrer sobrecarga de volumes na mesma rampa prejudicando o operador.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.12. Ocorrências  
**Score:** — (semantico) | **ID:** 98b5feee1a5e07ca

Em caso de avaria, extravio e necessidade de cancelamento, para que o Sorter pare de
aguardá-lo e para que o WMS realize a tratativa necessária, o processo de abertura e
tratamento de ocorrências será realizado conforme o fluxo descrito abaixo.
Para iniciar o processo, o operador deve acessar a tela de "Volumes" no sistema WCS. A partir
daí, o operador deve filtrar por um dos códigos do produto ou descrição e selecionar um dos
volumes na lista que estiver com o status diferente de finalizado. Ao clicar em abrir
ocorrência, o WCS exibirá um pop-up solicitando que o operador informe o motivo da
ocorrência.
Caso haja mais de um volume a ser tratado, o operador pode realizar esse processo para todos
os volumes necessários. Após a abertura da ocorrência, os volumes que precisam ser tratados
devem ser acessados na tela de Ocorrências, onde o WCS exibirá uma lista de todos os volumes
com ocorrência aberta, ordenada por Destino (LOJA).
O operador pode selecionar um ou mais volumes para aprovar ou não a ocorrência. Caso ele
selecione Cancelar, o WCS desconsiderará essas ocorrências selecionadas e finalizará o registro
delas internamente. Se o operador selecionar Aprovar, ele deverá filtrar e selecionar apenas
volumes do mesmo destino por vez. Após selecionar todos os volumes que deseja aprovar a
ocorrência (cancelamento), o WCS solicitará a leitura de uma master.
Após a leitura da master e confirmação o WCS irá disparar a integração dos volumes
agrupados pela master lida para o WMS, sinalizando o cancelamento dos volumes e
permitindo o prosseguimento do processo com a devida tratativa. O WCS deve permitir que o
operador utilize uma master que já foi utilizada no processo de Ocorrências e o WMS deve aceitar
a mesma master mais de uma vez.
Esse processo garante a precisão na identificação e controle dos volumes que necessitam de
cancelamento, permitindo que o WMS tome as ações necessárias, como o tratamento do volume
ou ajuste nas movimentações logísticas.

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Legenda  
**Score:** — (semantico) | **ID:** 5bb2537684c500d1

Informação | Descrição
WCS | Warehouse Control System
Velox | Sistema WCS Invent
WMS | Warehouse Management System
- | Sistema WMS Basso Pancotte
ES | Especificação de Software
Sorter | Automação de sorteamento de volumes
HTTPS | Protocolo de transferência de informações com segurança
Chute | Desviador de volumes no sorter

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 23fa47f85a13d069

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executará as rotinas de separação de volumes, utilizando o Sorter.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Processo de Operação do Sorter  
**Score:** — (semantico) | **ID:** ae881e4b92153d3e

O Sorter foi projetado para processar até 5.000 volumes por hora, com base na eficiência da indução, a Invent ficará responsável em apresentar qual a melhor prática a ser aplicado para alcançar o fluxo de 5 mil caixas hora. Ele conta com um portal de leitura com 3 faces de leitura (laterais e topo), garantindo que as etiquetas posicionadas nas laterais e topo das caixas sejam lidas corretamente. Essas faces de leitura permitem ao WCS realizar o checkout dos volumes induzidos.
O sistema do Sorter é composto por 12 rampas
11 rampas destinadas ao transporte dos volumes.
1 rampa exclusiva para rejeito.
O processo no Sorter inicia quando o volume passa pelo portal de leitura. A câmera captura a etiqueta do volume fornecida e impressa pelo cliente, que é então enviada ao Controlador Lógico Programável (PLC). O PLC encaminha as informações ao WCS, que realiza a verificação dos dados do pedido associado à etiqueta do cliente. Com base nessa verificação, o WCS envia a instrução ao PLC, indicando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme o mapa de sorter ativo, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos devem ter uma etiqueta, que inclui um código de barras ou QR code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão automaticamente direcionados para o rejeito ou reprocessamento, conforme as regras de operação definidas.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 79fce05cb2b631b7

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Orientação de indução  
**Score:** — (nome-topico) | **ID:** 8bdf64fffc2eca64

A orientação de indução no WCS será responsável por sugerir a ordem de indução dos pallets no stage-in, levando em consideração a matriz de fragilidade de cada item alocado no pallet, bem como a disponibilidade dos produtos. O objetivo é garantir que os itens sejam induzidos de forma otimizada, priorizando a segurança e a eficiência do processo. Porém a orientação não é restritiva dando flexibilidade da operação decidir qual pallet vai induzir.
Exibição na Tela de Indução: A tela de indução exibirá as seguintes informações essenciais para os operadores:
Ordem de indução: Indica a sequência na qual os pallets devem ser induzidos para o processo, com base na fragilidade dos itens.
RG do pallet (ilpnPtl): Apresenta a identificação única de cada pallet, permitindo o rastreamento e controle durante o processo de indução.
Matriz de fragilidade: Exibe a categoria de fragilidade do pallet, com base nos itens que estão alocados nele. Isso determina a posição dos itens no pallet e a ordem de indução.
Indução de Pallets: O WCS irá utilizar a ordem de indução para determinar qual pallet será induzido a seguir. O processo será baseado nos seguintes critérios:
A disponibilidade dos itens no pallet, assegurando que o processo de indução ocorra sem interrupções ou falta de produtos.
A matriz de fragilidade de cada item no pallet, que será um fator crucial na priorização da indução. Itens mais frágeis podem ser induzidos em uma sequência que minimize o risco de danos durante o processo.
Objetivo: O objetivo da orientação de indução é garantir que a indução dos pallets seja realizada de maneira otimizada, respeitando a fragilidade e a disponibilidade no stage-in. Esse processo ajudará a evitar danos aos produtos, aproveitar melhor o espaço disponível e garantir a eficiência operacional durante a movimentação dos pallets.
Tela exemplo de indução:

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Ocorrências  
**Score:** — (semantico) | **ID:** 2870bfa65dca441a

Em caso de avaria, extravio e necessidade de cancelamento, para que o Sorter pare de aguardá-lo e para que o WMS realize a tratativa necessária, o processo de abertura e tratamento de ocorrências será realizado conforme o fluxo descrito abaixo.
Para iniciar o processo, o operador deve acessar a tela de "Volumes" no sistema WCS. A partir daí, o operador deve filtrar por um dos códigos do produto ou descrição e selecionar um dos volumes na lista que estiver com o status diferente de finalizado. Ao clicar em abrir ocorrência, o WCS exibirá um pop-up solicitando que o operador informe o motivo da ocorrência.
Caso haja mais de um volume a ser tratado, o operador pode realizar esse processo para todos os volumes necessários. Após a abertura da ocorrência, os volumes que precisam ser tratados devem ser acessados na tela de Ocorrências, onde o WCS exibirá uma lista de todos os volumes com ocorrência aberta, ordenada por Destino (LOJA).
O operador pode selecionar um ou mais volumes para aprovar ou não a ocorrência. Caso ele selecione Cancelar, o WCS desconsiderará essas ocorrências selecionadas e finalizará o registro delas internamente. Se o operador selecionar Aprovar, ele deverá filtrar e selecionar apenas volumes do mesmo destino por vez. Após selecionar todos os volumes que deseja aprovar a ocorrência (cancelamento), o WCS irá disparar a integração dos volumes para o WMS, sinalizando o cancelamento dos volumes e permitindo o prosseguimento do processo com a devida tratativa.
Esse processo garante a precisão na identificação e controle dos volumes que necessitam de cancelamento, permitindo que o WMS tome as ações necessárias, como o tratamento do volume ou ajuste nas movimentações logísticas.
Tela exemplo de ocorrências:
Importante: Será necessário adicionar na tela de ocorrências e volumes o campo IlpnPlt para identificação da operação do palete de origem

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** be9c1cc97fefb841

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Orientação de indução  
**Score:** — (nome-topico) | **ID:** aef13f8dbbabac50

A orientação de indução no WCS será responsável por sugerir a ordem de indução dos pallets no stage-in, levando em consideração a matriz de fragilidade de cada item alocado no pallet, bem como a disponibilidade dos produtos. O objetivo é garantir que os itens sejam induzidos de forma otimizada, priorizando a segurança e a eficiência do processo. Porém a orientação não é restritiva dando flexibilidade da operação decidir qual pallet vai induzir.
Funcionalidade:
Exibição na Tela de Indução:
A tela de indução exibirá as seguintes informações essenciais para os operadores:
Ordem de indução: Indica a sequência na qual os pallets devem ser induzidos para o processo, com base na fragilidade dos itens.
RG do pallet (ilpnPtl): Apresenta a identificação única de cada pallet, permitindo o rastreamento e controle durante o processo de indução.
Matriz de fragilidade: Exibe a categoria de fragilidade do pallet, com base nos itens que estão alocados nele. Isso determina a posição dos itens no pallet e a ordem de indução.
Indução de Pallets:
O WCS irá utilizar a ordem de indução para determinar qual pallet será induzido a seguir. O processo será baseado nos seguintes critérios:
A disponibilidade dos itens no pallet, assegurando que o processo de indução ocorra sem interrupções ou falta de produtos.
A matriz de fragilidade de cada item no pallet, que será um fator crucial na priorização da indução. Itens mais frágeis podem ser induzidos em uma sequência que minimize o risco de danos durante o processo.
Objetivo:
O objetivo da orientação de indução é garantir que a indução dos pallets seja realizada de maneira otimizada, respeitando a fragilidade e a disponibilidade no stage-in. Esse processo ajudará a evitar danos aos produtos, aproveitar melhor o espaço disponível e garantir a eficiência operacional durante a movimentação dos pallets.
Tela exemplo de indução:

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 7686367aad4903a0

O sorter realizará o desvio dos volumes de forma automática, considerando a disponibilidade dos PTLs para execução das atividades de separação e crossdocking, sempre respeitando as prioridades definidas na integração com o WMS.
O agrupamento lógico dos pallets dentro do sorter será determinado com base na loja de destino, categoria do produto (Alimentício/Não Alimentício) e tipo de embalagem, informações estas recebidas via integração.
Para definição do destino de cada volume, o sistema Velox realizará a leitura do código da caixa (padrão ou IVT) e, a partir dessa identificação, executará uma análise dinâmica de cadenciamento entre as rampas disponíveis. Essa análise considera, de forma combinada, quais rampas estão habilitadas para receber o volume, o nível de ocupação atual de cada uma delas e o histórico recente de recebimento, ou seja, quais rampas foram alimentadas mais recentemente.
Com base nesses critérios, o Velox realizará o cadenciamento dos volumes entre as rampas elegíveis, direcionando cada volume para a rampa mais ociosa e que há mais tempo não recebe volumes, promovendo um balanceamento automático da carga e evitando a concentração excessiva de volumes em um único ponto.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Ocorrências  
**Score:** — (semantico) | **ID:** 43fa3658608c8636

Em caso de avaria, extravio e necessidade de cancelamento, para que o Sorter pare de aguardá-lo e para que o WMS realize a tratativa necessária, o processo de abertura e tratamento de ocorrências será realizado conforme o fluxo descrito abaixo.
Para iniciar o processo, o operador deve acessar a tela de "Volumes" no sistema WCS. A partir daí, o operador deve filtrar por um dos códigos do produto ou descrição e selecionar um dos volumes na lista que estiver com o status diferente de finalizado. Ao clicar em abrir ocorrência, o WCS exibirá um pop-up solicitando que o operador informe o motivo da ocorrência.
Caso haja mais de um volume a ser tratado, o operador pode realizar esse processo para todos os volumes necessários. Após a abertura da ocorrência, os volumes que precisam ser tratados devem ser acessados na tela de Ocorrências, onde o WCS exibirá uma lista de todos os volumes com ocorrência aberta, ordenada por Destino (LOJA).
O operador pode selecionar um ou mais volumes para aprovar ou não a ocorrência. Caso ele selecione Cancelar, o WCS desconsiderará essas ocorrências selecionadas e finalizará o registro delas internamente. Se o operador selecionar Aprovar, ele deverá filtrar e selecionar apenas volumes do mesmo destino por vez. Após selecionar todos os volumes que deseja aprovar a ocorrência (cancelamento), o WCS irá disparar a integração dos volumes para o WMS, sinalizando o cancelamento dos volumes e permitindo o prosseguimento do processo com a devida tratativa.
Esse processo garante a precisão na identificação e controle dos volumes que necessitam de cancelamento, permitindo que o WMS tome as ações necessárias, como o tratamento do volume ou ajuste nas movimentações logísticas.
Tela exemplo de ocorrências:
Importante: Será necessário adicionar na tela de ocorrências e volumes o campo IlpnPlt para identificação da operação do palete de origem

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** Regra de Contingência para Volumes em Esteira  
**Score:** — (nome-topico) | **ID:** 717371ba0b4a680e

Caso o cancelamento ocorra para um pedido que já possui volumes físicos (LPNs) circulando, o
WCS marcará esses volumes como BLOQUEADOS. Na próxima leitura de scanner, o sistema
comandará o desvio automático para a Rampa de Rejeito.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 12.3. Identidade do operador entre contagens  
**Score:** — (semantico) | **ID:** 09fa0fdf68109fba

O bloqueio do mesmo operador entre contagens é configurável por parâmetro. O comportamento
padrão recomendado é impedir que a 2ª contagem de uma posição seja feita por quem realizou
a 1ª, reduzindo o viés; quando não houver operadores suficientes, o parâmetro permite flexibilizar
essa regra.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 16. Sorter e Expedição  
**Score:** — (semantico) | **ID:** 28ee54ed1ced4d32

O Sorter é projetado para processar até 3.000 volumes por hora, com base na eficiência da
separação (Full Case, Fracionado, Picking Cart). Ele é composto por um portal de leitura com 2
faces de leitura (lateral) e topo, que garantem a leitura dos volumes, desde que as etiquetas
estejam posicionadas na lateral correta das caixas ou topo. Essas faces de leitura permitem que
o WCS realize o checkout para pedidos do tipo Full Case e Fracionado.
O Sorter conta com 5 rampas de saída, sendo 4 para o transporte dos volumes e 1 rampa
exclusiva para rejeito. Cada uma das rampas de saída de transporte é equipada com um leitor
de código de barras e um conversor, totalizando 4 leitores e 4 conversores, responsáveis por
capturar as informações das etiquetas e fazer a comunicação com o sistema WCS.
O processo no Sorter inicia com a leitura da caixa no portal de leitura. O sistema captura a
etiqueta da caixa, que é enviada para o Controlador Lógico Programável (CLP). O CLP, então,
encaminha as informações para o WCS, que realiza a verificação dos dados do pedido associado
à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, informando em qual
rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme os PTLs ativos e os respectivos pedidos, com
volumes sendo desviados automaticamente para as rampas corretas. Para garantir a
rastreabilidade e a precisão do processo, todos os volumes induzidos no sorter devem conter
uma etiqueta gerada pelo WCS, que inclui um QR Code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão
direcionados automaticamente para o rejeito ou reprocessamento, de acordo com as regras de
operação definidas.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** rota: número da rampa de saída no sorter.  
**Score:** — (semantico) | **ID:** 262768986ca79670

Volumes não integrados: Caso o volume não esteja integrado, o WCS direcionará o volume
para recirculação.
Essa recirculação ocorrerá até atingir a quantidade máxima de voltas parametrizada
previamente. Ultrapassado esse limite, o volume será enviado para o rejeito.
O WMS deve enviar somente os volumes que já foram faturados
Campo
Descrição
Tipo
Obrigatório
Tamanho
Onda
Identificador da onda
varchar
Sim
Volumes
Lista de volumes
Array
Sim
-
Etiqueta
Identificador único do volume
varchar
Sim
Rota
Orientação de direção para desvio (rampa)
varchar
Sim

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 3 Processo de Operação do Sorter  
**Score:** — (semantico) | **ID:** 3f52376dc96aea77

O Sorter foi projetado para processar até 2500 volumes por hora, com base na eficiência da
indução. Ele conta com um portal de leitura que garante que as etiquetas sejam lidas
corretamente permitindo ao WCS realizar o checkout dos volumes induzidos.
O sistema do Sorter é composto por 7 rampas
6 rampas destinadas ao transporte dos volumes.
1 rampa exclusiva para rejeito.
O processo no Sorter inicia quando o volume passa pelo portal de leitura. A câmera captura a
etiqueta do volume, que é então enviada ao Controlador Lógico Programável (CLP). O CLP
encaminha as informações ao WCS, que realiza a verificação dos dados do volume associado à
etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, indicando em qual
rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme a rota enviada na integração, com volumes sendo
desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a
precisão do processo, todos os volumes induzidos devem ter uma etiqueta, que inclui um
código de barras ou QR code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão
automaticamente direcionados para o rejeito ou reprocessamento, conforme as regras de
operação definidas.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 8.4. Sorter  
**Score:** — (nome-topico) | **ID:** 7570dba33bf629e9

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma
superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS
realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador
Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes
do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo
no WCS, que define, para cada tipo de volume, a rampa de saída correspondente. O
agrupador principal (master) do mapa do Sorter é a transportadora. O segundo nível de
agrupamento é o pedido.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar
devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão
direcionados para o rejeito ou reprocessamento, conforme regras operacionais.
Fica sob responsabilidade do contratado disponibilizar uma TV no sorter.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** 2. Especificação  
**Score:** — (semantico) | **ID:** 6f1fe99fc27a266b

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável
pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta
aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os
sistemas SAP (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto
armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente
(licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface
Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de
trabalho (Google Chrome).

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** 5. Sorter  
**Score:** — (nome-topico) | **ID:** f2e604efec54269d

Na indução de volumes, operador induz o volume na esteira e com base nas informações
recebidas via integrações, realiza o desvio para a rampa das docas.
O sistema identifica cada volume pelo seu RG (código único por volume em formato QrCode),
realizando uma busca nas integrações recebidas para o desvio ser feito corretamente.
Programação de rotas: O sistema WCS deve receber em qual rampa deve realizar o desvio via
Integração.
Todo volume será enviado o peso esperado e uma margem de tolerância (em porcentagem ou
peso bruto) para que o WCS avalie na pesagem da balança se aquele volume está ou não
dentro do peso.
O sorter deverá realizar um check out de peso em todos os volumes que forem induzidos no
sorter, sem exceção. Caso algum volume siga sem as informações de peso ou fora da tolerância
estabelecida, o volume deverá seguir para rejeito com motivo “sem peso” ou “peso incorreto”,
sendo necessário repassar no sorter para aferir essas informações.
Além de realizar o check out, o sistema irá armazenar o valor adquirido na pesagem de cada
volume para consulta posterior do time Swift no sistema WCS.
O Volume pode ser induzido diversas vezes. WCS sempre deve considerar a última integração
referente aquele RG do volume que está sendo lido no portal e realizar as tratativas
mencionadas.
Pode acontecer em cenários de devolução (processo Swift) que o RG do volume receba um
novo número de remessa, onda etc. Neste caso deve haver um novo disparo da integração
mencionada no item Volumes pelo SAP.
Caso exista duas integrações com o mesmo RG de volume, porém de remessas diferentes
sempre deve ser considerado a última informação enviada.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Regras de Contingência do Sorter  
**Score:** — (semantico) | **ID:** ac53ef5315df3776

Time Swift terá algumas regras de contingência que serão parametrizadas pelo Sistema do WCS
para que a operação não fique prejudicada em diversos tipos de cenários que a operação
apresenta.
Segue as regras de contingência:
Possibilidade de desconsiderar a checagem de peso na balança pelas categorias de  SKU,
RG do volume ou todos os volumes. Neste caso, não iremos validar se o peso está ou
não dentro da tolerância enviada na integração, apenas iremos validar se o volume foi
lido. Mesmo não realizando a validação na balança, o sistema deve guardar o peso para
consulta do time Swift. Este caso será utilizado para problemas na balança.
Possibilidade de desconsiderarmos o destino enviado na integração e ser configurado
pelo time Swift, manualmente pelo WCS, qual rampa aquela determinado transporte deve
ser desviado. Esta regra será utilizada em casos de “reentrega” e decisão operacional
após o envio da interface.
OBS: Acionando a regra de destinar todos os volumes de um transporte para uma rampa, não
haverá mais possibilidade de cancelar esta regra e o sistema voltar a considerar o valor da
integração. Qualquer necessidade de alteração será feita manualmente no WCS.
Qualquer adição ou alteração dessas regras de contingência deve possuir um Log com usuários,
data de ativação e desativação (se possuir).
Cada volume que passar por essas regras deve ter registrado sua liberação como “manualmente”
e o usuário que realizou a ação.
Nestes cenários mencionados acima não haverá necessidade de uma nova integração com o SAP.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Cancelamento de Volumes  
**Score:** — (semantico) | **ID:** 3ce2f5a250de825c

Sistema WCS deve disponibilizar uma tela com a funcionalidade de excluir volumes que estão
sendo esperados nas saídas do sorter.
Esta função será necessária em casos de avarias com a caixa, problemas de leitura e divergências
de peso onde este item será devolvido ao estoque e excluído dos registros do WCS.
Não teremos integrações com o SAP para esta ação dentro do sistema.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** b582824ea4e5709b

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
Ao longo de toda a extensão do sorter, haverá 5 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 6 rampas.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume, a rampa de saída correspondente baseado na transportadora e rota.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.
Fica sob responsabilidade do contratado disponibilizar uma TV em cada rampa para exibição do dashboard operacional da rampa, ou para que seja feito o processo de paletização

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 2. ESPECIFICAÇÃO  
**Score:** — (semantico) | **ID:** 08725f4b7e7bf460

Para o pleno funcionamento da automação, é imprescindível a utilização de uma aplicação
dedicada ao gerenciamento das informações relacionadas aos equipamentos utilizados na
operação. Essa aplicação será responsável por executar as rotinas do Sorter, atuando como a
principal interface entre o sistema WMS do cliente e o sistema Velox da Invent.
O sistema Velox requer um banco de dados exclusivo para garantir o correto armazenamento e
gerenciamento das informações processadas. Esse banco de dados, cuja licença e instalação
são de responsabilidade do cliente, é essencial para o funcionamento da solução.
A comunicação entre o sistema Velox e as estações de trabalho ocorrerá por meio de uma
interface Web. Portanto, cada estação deve contar com um navegador web padrão
(preferencialmente Google Chrome) para viabilizar o acesso à aplicação.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** Cancelamento de Remessas  
**Score:** — (semantico) | **ID:** 06e65d6ba4fbfce0

Velox → WMS
Os dados que devem ser enviados (INSERT) do WMS para o Velox são os dados nas tabelas
abaixo onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tabela SORTER.GPT_CANCELAMENTO_REMESSAS
CAMPO_BANCO_VELOX
CAMPO_BANCO_WMS
DESCRIÇÃO
TIPO
TAMANHO
EMPRESA
EMPRESA
Número da empresa do CD
NUMBER
ONDA
ONDA
Número da carga (onda)
INTEGER
LOJA
LOJA
Número da Loja
NUMBER
CODRUA
CODRUA
Código da Rua de Separação
VARCHAR
SEQPRODUTO
SEQPRODUTO
Número da sequência produto
INTEGER
CODACESSO
CODACESSO
Código da caixa presente (DUN14)
VARCHAR
QTDEMBALAGEM
QTDEMBALAGEM
Quantidade de unidades na
embalagem
NUMBER
12,6
QUANTIDADE
QUANTIDADE
Quantidade de unidades cancelada
INTEGER
COD_USUARIO
COD_USUARIO
Código usuário/login
VARCHAR
DATA_CANCELAMENTO
DATA_CANCELAMENTO
Data de cancelamento
DATE
OBSERVAÇÃO
OBSERVAÇÃO
Observação de Cancelamento
VARCHAR
Com esses dados o Velox realiza o cancelamento do volume e o sistema desconsidera este volume
das pendencias de separação da esteira Invent.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 4. SORTER  
**Score:** — (nome-topico) | **ID:** 23158c2e37d98ab2

O sorter será responsável pelo desvio dos volumes conforme o mapa de rotas configurado e ativo
no sistema Velox. Esse mapa deve ser cadastrado e configurado antecipadamente no sistema
para garantir a correta indução dos volumes.
Todos os volumes induzidos no sorter devem estar identificados com um código de barras
integrado ao sistema Velox ou, se necessário, devidamente etiquetados. A impressão das
etiquetas, quando necessária, é de responsabilidade Invent.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 4.1.5. Cancelamento de Volumes (Avarias)  
**Score:** — (semantico) | **ID:** 03fc753965cd0997

O sistema VELOX deve oferecer uma tela específica com a funcionalidade de excluir volumes
que estão aguardando processamento pelo sorter. Essa funcionalidade será essencial em
situações como:
Avarias na caixa.
Problemas de leitura que impeçam o processamento adequado.
Nesses casos, o volume será devolvido ao estoque e excluído dos registros do VELOX.
Para realizar o cancelamento, será necessário autenticar um usuário com as permissões
adequadas para executar essa ação. Após a conclusão do cancelamento, o sistema deve enviar
a integração mencionada no item Cancelamento de Remessas, permitindo que o WMS execute
os processos subsequentes.
Na tela só deve apresentar volumes que não foram alocados nos pallets (volumes que foram
lidos no scanner da saídas das rampas)

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 3. Especificação  
**Score:** — (semantico) | **ID:** 183c081f87e35e37

Para o correto funcionamento da automação, é necessária uma aplicação que será
responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja,
esta aplicação executara as rotinas de separação de volumes, Sorter e PTL (Put-To-Light) nas
saídas do sorter, tendo como papel fundamental a interface entre os sistemas WMS (Winthor)
com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto
armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente
(licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de
uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão
em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 8. Métodos de separação  
**Score:** — (semantico) | **ID:** 8323497783e1eec6

Existem 4 métodos de separação utilizados no processo: Pallet Box, Pallet Sorter, Full Case e
Fracionados.
Pallet Box (OS TIPO 17/23): É gerenciado exclusivamente pelo WMS.
Pallet Sorter: Por sua vez, é controlado pelo WCS.
Full Case (OS TIPO 10):  Também é gerido pelo WCS, que recebe ordens de serviço do
WMS contendo caixas fechadas (Full Case).
Fracionados (OS TIPO 22): É gerenciado exclusivamente pelo WMS, A responsabilidade
do WCS no caso dos pedidos fracionados Tipo 22 é apenas garantir que os volumes
sejam desviados para o chute correto.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Pallet Sorter  
**Score:** — (semantico) | **ID:** 77a40da79fe25a9a

O WMS gerencia o envio dos pedidos (OS TIPO 10) e as ordens de serviço, enquanto o WCS é
responsável pela separação dos pedidos, quando a quantidade solicitada de mais de um pedido
for igual ou maior a de um pallet. Nesse caso, o pallet será coletado e etiquetado de acordo
com a prioridade das cargas definidas pelo WMS.
Importante: A impressão das etiquetas é obrigatória e deve ocorrer antes do início da coleta.
Somente após a impressão das etiquetas o sistema libera a tarefa de separação.
Esse processo de coleta e separação ocorrerá após o reabastecimento da posição realizado pelo
WMS. Ou seja, após o WCS coletar o pallet da posição, ele informará ao WMS que a coleta foi
realizada, e o WMS gerará o reabastecimento conforme necessidade, seja para um novo pallet
fechado ou para a coleta de caixas FullCase.
Nota: O WCS não será responsável pelo reabastecimento ou controle de posições e
suas quantidades, sendo essas funções exclusivas do WMS.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** c448eb4ef8bb66de

Método de separação será gerido pelo WMS ordem de serviço (OS TIPO 22), os produtos são
coletados e alocados em uma caixa plástica, indicada para itens com volumes menores ou de
alta variedade. A caixa recebe uma etiqueta com dados de destino, e, após a separação, é
induzida no sorter. O WCS recebe uma flag indicando que o produto é fracionado e, ao
identificar essa informação, ao receber essa caixa no sorter realiza apenas o desvio no chute,
sem realizar mais nenhuma operação no processo.
Nota: Nesse processo, a única responsabilidade do WCS é realizar o desvio da caixa
no CHUTE.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Separação Pallet Fechado (Pallet Sorter)  
**Score:** — (semantico) | **ID:** 43f24c9459e1b75d

Esse método de separação é utilizado quando uma única onda ou tarefa contém múltiplos
pedidos com o mesmo produto, e a quantidade total demandada é igual ou superior a um pallet
fechado.
O WCS é responsável por coordenar a coleta do pallet e gerar automaticamente as tarefas de
separação e etiquetagem, considerando a prioridade das cargas determinada com base na
onda mais antiga. Dessa forma, o sistema garante que os pedidos pendentes há mais tempo
sejam processados primeiro, respeitando a criticidade operacional.
O operador, utilizando o coletor do cliente, acessa o sistema WCS, realiza o login e inicia a
leitura da posição de picking. Em seguida realiza a leitura do DUN-14 do produto. Durante
essa etapa, pode utilizar a funcionalidade de Multiplicador, que permite definir, no coletor, a
quantidade de caixas a serem coletadas com base em uma única leitura do DUN. Isso é
especialmente útil em cenários com grande volume, otimizando o tempo de coleta ao permitir
que várias caixas sejam processadas simultaneamente.
Após finalizar a coleta, o operador leva o pallet até a área de stage, um espaço físico
intermediário e obrigatório, com endereçamento sistêmico, utilizado para controle e
organização dos volumes antes da indução no sorter.
Na área de stage, outro operador assume a tarefa de etiquetagem individual, aplicando em
cada caixa a etiqueta gerada automaticamente pelo WCS e registrando no coletor o
endereço da posição de stage, garantindo rastreabilidade completa antes do próximo
estágio da operação.
Ao encerrar a tarefa, o operador registra no coletor a finalização da separação. Nesse
momento, o WCS atualiza a tabela compartilhada com o WMS, sinalizando que o pallet foi
consumido. Com base nesse retorno, o WMS pode gerar automaticamente uma nova tarefa de
reabastecimento, desde que exista saldo disponível na posição de pulmão. Se a demanda
remanescente for inferior à capacidade de um pallet completo, o WCS converte o processo
automaticamente para o modo Full Case, iniciando um novo ciclo pela tela de Order Start.
Essa conversão somente ocorre após a impressão e liberação das etiquetas dos pedidos de
Pallet Sorter no Order Start.
Fluxo Operacional:

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Entrega fracionada do pallet na área de Stage: Alternativamente, o operador  
**Score:** — (semantico) | **ID:** 523e8bec87c6edb6

poderá realizar a entrega parcial do pallet na área de Stage, conforme a capacidade
física de transporte. A tela do coletor permitirá o registro de múltiplas movimentações
para a mesma tarefa, e cada entrega parcial será registrada com endereço e hora,
assegurando rastreabilidade e controle do fluxo.
A definição do comportamento será baseada nos parâmetros de volume máximo por tarefa e
peso total por pallet, parametrizáveis no sistema conforme as diretrizes operacionais do
Comercial Esperança.
Impressão Prévia das Etiquetas: A impressão é obrigatória e realizada antes do operador
iniciar a separação. O operador deve sair da mesa de operações com a tira de etiquetas
impressa, contendo a quantidade necessária conforme a rua e a quantidade de itens. O WCS
imprime automaticamente essas etiquetas com base nos dados recebidos do WMS.
Com as etiquetas em mãos, o operador chega na posição, verifica a quantidade solicitada no
coletor, realiza a leitura (bipagem) da posição de picking e lê o DUN do produto para confirmar
os itens a serem separados. O operador realiza a separação conforme indicado, coletando os
produtos caixa por caixa, seguindo na ordem indicada pelo sistema e em direção ao final da
rua, no sentido da indução para o Sorter.
Cada volume separado é etiquetado individualmente e colocado em um pallet de separação.
Após finalizar a separação e etiquetagem dos volumes, o operador confirma a conclusão da
tarefa no coletor e libera o pallet para ser levado à área de Stage
Definição de Ordem de Separação de Prédios
Para otimizar o processo de separação, o sistema WCS permitirá a configuração da ordem de
separação dos prédios de forma crescente ou decrescente. Esta configuração será
parametrizável, permitindo que o cliente defina o comportamento operacional de acordo com as
necessidades específicas de sua operação. O sistema garantirá que os volumes sejam alocados
de forma eficiente e otimizada, com base na ordem configurada.
Fluxo Operacional
1. Recebimento das Ordens: O WMS envia ao WCS as ordens de serviço com os itens
Full Case, incluindo informações detalhadas sobre os pedidos, quantidades e
prioridades.
2. Agrupamento por Produto: O WCS agrupa as ordens por produto, facilitando a
organização e otimização das tarefas de separação.
Geração das Tarefas: Com base no agrupamento, o WCS gera as tarefas para os
operadores, indicando as caixas a serem coletadas, suas localizações e quantidades.
3. Execução pelo Operador:
O operador acessa o WCS através do coletor portátil.
Recebe a tarefa de separação com as instruções detalhadas.
Desloca-se até a posição indicada e realiza a coleta caixa a caixa, conforme as
ordens de serviço.
Confirma a coleta no sistema, garantindo a rastreabilidade dos volumes.
4. Monitoramento da Demanda Remanescente:
Conforme as tarefas são finalizadas, o WCS monitora a demanda restante de
cada produto.
Se a demanda remanescente for menor que um pallet completo, o WCS
mantém o método Full Case para concluir a separação eficiente dessas
quantidades menores.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 19. Sorter  
**Score:** — (nome-topico) | **ID:** dd3108cc7ff782f9

O Sorter terá capacidade de produzir 6.000 volumes/hora com indução de 3.000 caixas de cada
lado.
O Sorter será composto por 2 (duas) rampas de indução e 1 (um) portal de leitura com 3 (três)
faces (lados) de leitura, uma superior (topo) e duas laterais. Essas três faces garantem a leitura
completa dos volumes, permitindo que o WCS realize o processo de checkout para pedidos do
tipo Full Case. Durante esse processo, o sistema compara automaticamente o DUN ou EAN lido
na caixa com o código da etiqueta do pedido, validando se o volume realmente corresponde ao
produto solicitado no pedido.
Em toda a extensão do sorter, haverá 20 rampas de saída destinadas à separação de pedidos e
1 rampa exclusiva para volumes rejeitados, totalizando 21 rampas ao todo.
As 20 rampas de saída estarão organizadas da seguinte forma:
17 rampas com 8 posições PTL (Put-To-Light).
2 rampas com 10 posições PTL (Put-To-Light).
1 rampa com 12 posições PTL (Put-To-Light).
Ao todo, o sistema contará com 168 posições PTL distribuídas entre as rampas em toda extensão
do sorter. Cada posição será equipada com um display eletrônico de três dígitos com LED,
permitindo a identificação visual e precisa do ponto de alocação do volume.
Além disso, uma única rampa poderá atender de 2 a 3 rotas diferentes, conforme a roteirização
da carga. Isso será visualmente identificado no display da posição PTL, pois cada rota poderá
ocupar dois ou três posições pallets (PTL´s) distintas, possibilitando a separação e organização
de pedidos por rota diretamente na saída.
Cada rampa de saída do sorter será equipada com um leitor de código de barras e um
conversor, totalizando 21 leitores de código de barras e 21 conversores, correspondentes às 21
rampas existentes (20 de saída e 1 de rejeito). Esses dispositivos são responsáveis por fazer a
comunicação e capturar as informações de leitura ao sistema WCS.
O processo do sorter consiste na leitura da caixa no portal de leitura, que envia a etiqueta lida
ao Controlador Lógico (CLP). O CLP encaminha essa informação ao WCS, que consulta sua base
de dados para verificar os dados do pedido associado àquela etiqueta. Após essa verificação, o
WCS envia ao CLP a instrução de desvio, informando em qual rampa a caixa deve ser desviada.
O sorter realizará o desvio dos volumes com base no mapa de rotas cadastrado e ativo no
sistema WCS. Esse mapa deve ser configurado previamente no WCS, definindo para cada tipo
de volume ou pedido a rampa de saída correspondente.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido pelo sistema
WCS ou estar devidamente etiquetados. Volumes que estiverem sem identificação ou etiquetas
inválidas serão direcionados para rejeito ou reprocessamento, conforme as regras definidas
pela operação.
Para as Ordens de Separação (OS) do tipo 22 (flowrack), o processo segue uma lógica
diferente. Essas caixas são induzidas normalmente no sorter, porém não são alocadas em
posições PTL. Nesses casos, o sistema WCS realiza apenas o desvio para a saída correta, sem
acendimento de posições ou validação adicional. A tratativa dos volumes após o desvio na saída
correta é de responsabilidade do cliente, conforme os procedimentos definidos em sua
operação.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Sinaleiro  
**Score:** — (semantico) | **ID:** 96ee33959d71b4ad

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem
ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação
e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Piscante: Indica que o botão de emergência foi acionado
em algum ponto ao longo da automação, nesse caso
todos os sinaleiros da automação irão piscar, até que
o botão acionado seja revertido.
AMARELO
Piscante: Indica que a rampa já está cheia e não pode
receber mais caixas. Neste caso, o sinaleiro irá piscar
até que a situação seja resolvida pelo operador.
VERDE
Aceso: Indica que a rampa está aberta e
pronta para receber os volumes.
VERDE, AMARELO E VERMELHO
Piscante: Sem comunicação com o sistema Velox.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de
fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a
qualidade no processo.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Cancelamento de volumes (avarias)  
**Score:** — (semantico) | **ID:** 5db5ea90e0143d2c

Sistema WCS deve disponibilizar uma tela com a funcionalidade de excluir volumes que estão
sendo esperados pelo sorter. Nesta tela só deve apresentar os volumes que ainda não foram
alocados no pallet (realizado a leitura no scanner das saídas do sorter)
Esta função será necessária em casos de avarias com a caixa ou problemas de leitura, onde
este item será devolvido ao estoque e excluído dos registros do WCS.
Para o cancelamento ser efetuado deverá ser informado o “Status” (motivo pré-definido dentro
do WCS) e um usuário com as permissões necessárias para esta funcionalidade. O operador
deve informar o status da avaria para que a integração seja enviada. As opções disponíveis
para seleção serão: Consumo, Qualidade e Descarte.
Com o cancelamento concluído o sistema WCS deve enviar a integração mencionada no item
Cancelamento de volumes para o WMS.
Especificação de volumes induzidos no sorter (IA)
Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no
sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os
desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:
Conforme a imagem acima, o código deve estar integrado no sistema Velox.
Processo de IA no Sorter para Volumes Induzidos
O sistema WCS utiliza recursos avançados de Inteligência Artificial (IA) para garantir a correta
identificação, validação e direcionamento dos volumes no sorter. Este processo é fundamental
para que a automação funcione com precisão e eficiência, minimizando erros e otimizando o
fluxo operacional.
Integração dos Volumes no Sistema WCS
Antes da indução no sorter, todos os volumes (caixas) devem estar completamente registrados
e integrados no sistema WCS. Essa integração contempla o cadastro detalhado de cada volume,
incluindo informações essenciais, como:
Códigos de barras vinculados ao volume;
Dados de destino;
Informações sobre a etiqueta impressa;
Eventuais múltiplos códigos de barras por volume.
Leitura e Validação no Portal do Sorter
Durante a passagem no sorter, o portal de leitura captura os códigos de barras das caixas. Para
volumes que possuam múltiplos códigos de barras, o sistema é capaz de identificar e relacionar
todos eles ao mesmo volume registrado no WCS.
A IA realiza uma comparação entre os dados lidos e as informações previamente integradas
para validar:
Se o volume está correto;
Se a etiqueta corresponde ao conteúdo e ao destino;
Se existem inconsistências ou divergências nos códigos.
Direcionamento e Desvio Automático
Com base na validação realizada pela IA, o sistema WCS determina o destino correto do
volume. A automação do sorter, então, recebe essa informação para realizar o desvio físico do
volume para a posição adequada, garantindo a continuidade do fluxo.
Tratamento de Exceções
Se a IA identificar algum problema, como:
Códigos não reconhecidos;
Etiquetas incorretas;
Volumes duplicados;
O sistema pode executar as seguintes ações:
Acionar alertas para intervenção manual;
Bloquear o volume para evitar erros na distribuição;
Registrar a ocorrência para análise futura.
Benefícios do Processo de IA no Sorter
Garantia de alta acuracidade na separação e direcionamento dos volumes;
Redução de erros operacionais causados por leituras incorretas ou etiquetas duplicadas;
Otimização do fluxo de materiais, com menor necessidade de retrabalho;
Maior rastreabilidade e controle em tempo real dos volumes.
Contingência do Sorter (IA)
A operação de Contingência Sorter é um procedimento previsto no sistema WCS, destinado a
tratar volumes que apresentem problemas na triagem automática realizada pela IA, como por
exemplo, códigos de barras de má qualidade impressos pelo fornecedor.
A impressão dessas etiquetas de contingência (formato IVT+DUN) será responsabilidade da
Invent.
A equipe operacional será treinada para identificar e aplicar essas etiquetas em volumes com
falha de leitura repetida. Essas etiquetas devem ser fixadas de forma visível e seguir o padrão
fornecido pela Invent para garantir que a IA do sorter reconheça corretamente o volume.
Para evitar impacto na operação, o WCS está preparado para esse cenário por meio do
processo de contingência, que consiste na impressão de uma etiqueta especial para o produto,
conforme descrito abaixo:
A etiqueta de contingência concatena os caracteres “IVT” com o DUN correto da caixa.
Exemplo do formato correto da etiqueta de contingência:
IVT + [DUN da caixa]
Quando o sorter identifica uma etiqueta neste formato vinculada à caixa, ele ignora os demais
códigos presentes e realiza a triagem considerando apenas o DUN após os caracteres “IVT”.
A impressão dessas etiquetas de contingência é de responsabilidade da Invent.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Separação Pallet Sorter  
**Score:** — (semantico) | **ID:** 7eef8f2a09f5a2bc

Esse método é adotado quando múltiplos pedidos resultam em volumes equivalentes a um
pallet fechado.
Fluxo:
1. Recebimento da OS
O WMS identifica o cenário e envia ao WCS a ordem de serviço (OS).
2. Tarefas e Coleta
O WCS gera a tarefa de coleta do pallet, informando posição de estoque e quantidade.
O operador realiza a leitura da posição, coleta o pallet, etiqueta individualmente cada
caixa ou utiliza a funcionalidade de multiplicador para otimizar leituras de grandes
volumes.
3. Etiquetagem e Stage
Cada caixa é etiquetada individualmente com etiquetas geradas automaticamente.
O operador transporta o pallet à área de stage, informando no coletor o endereço
sistêmico para rastreabilidade.
4. Conversão Automática para Full Case
Caso a demanda restante seja inferior a um pallet completo, o processo é
automaticamente convertido para modo Full Case, respeitando o fluxo normal do
Order Start.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** 2. Especificação  
**Score:** — (semantico) | **ID:** f5ee84087868ec8d

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável
pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta
aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre o
WMS (cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto
armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente
(licença + instalação do banco Oracle DB).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface
Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de
trabalho (Google Chrome).

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** Finalização do volume  
**Score:** — (semantico) | **ID:** 5db6a6ea951997d2

WCS (Registro) / WMS (Consulta)
O WCS não realizará o envio/push da informação de Finalização do Volume ao WMS. O objetivo
da informação é registrar a conclusão do volume no processo de conferência após o desvio no
sorter.
Em substituição à integração de finalização, o WCS registrará esses dados em uma tabela (Tabela
de Leitura) no seu próprio banco de dados. O WMS da Reval será o responsável por consultar
ativamente (pull) essa tabela via DBLINK, permitindo que o WMS realize o encerramento do
ciclo logístico do volume com base em dados precisos.
A tabela de Finalização agora representa os dados que o WMS deve buscar, contendo:
Campo
Tipo
Tamanho
Obrigatório
Descrição
ETIQUETA_VOLUME
Varchar
Sim
Código lido pelo coletor do WMS
na saída das rampas do sorter
DATA_CONFERENCIA
DateTime
N/A
Sim
Data e hora que foi feito a
conferência do volume
STATUS_VOLUME
Varchar
Sim
Status “OK”
CONSUMIDO
NUMBER
Sim
Indica se o item foi consumido (1
= sim, 0 = não). Valor padrão: 0.
Apenas os valores 0 ou 1 são
permitidos.
Esta integração tem como objetivo incrementar a rastreabilidade de cada processo que o
volume realiza dentro da automação. O sistema WCS deve registrar e disponibilizar a
informação da finalização de um volume em uma tabela de busca, que será consultada pelo
WMS.
Observação: Esta informação não deve ser um impeditivo para que o mesmo volume seja
induzido novamente.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** 5. Sorter  
**Score:** — (nome-topico) | **ID:** 3625aa6ae694b8bf

Na indução de volumes, operador induz o volume na esteira e com base nas informações
recebidas via integrações, realiza o desvio para a rampa das docas.
O sistema identifica cada volume pelo seu código de barras (código único por volume em formato
Code128), realizando uma busca na tabela transacional para o desvio ser feito corretamente.
Programação de rotas: O sistema WCS deve receber em qual rampa deve realizar o desvio via
Integração.
O Volume pode ser induzido diversas vezes. WCS sempre deve enviar a integração de retorno
quando o volume tiver seu desvio confirmado pela automação independente de quantas vezes
isso ocorrer.
Pode acontecer em alguns cenários da operação a necessidade de alterar a rampa que foi
enviada na integração. Sendo assim o WMS deverá realizar um UPDATE na tabela para alterar a
informação já enviada previamente.
Durante a operação, podem ocorrer cenários em que dois volumes distintos compartilham o
mesmo código de barras. Nesses casos, ambos os volumes serão sempre destinados à mesma
rampa de desvio. Dessa forma, haverá apenas uma única integração de entrada referente ao
volume, mas o WCS deverá processar e enviar dois retornos distintos ao WMS, um para cada
volume movimentado. O sistema WCS deve estar devidamente preparado para lidar com esse
tipo de situação, garantindo a rastreabilidade e consistência das informações.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** Relatórios e Consultas  
**Score:** — (semantico) | **ID:** c1351ddf42f3ecc3

Segue exemplos de relatórios proposto pela equipe Invent ao projeto Gavião:
1- Relatório de produtividade por rampa;
2- Relatório de produtividade do sorter;
3- Rastreio por Código do volume
4- Rastreio por Números de Carga
5- Relatório de rejeito;
6- Relatórios de Read  e NoRead
Todos os relatórios devem conter esses campos abaixo:
•
Número do Código da caixa
•
Número da carga
•
Rampa desviada (se houver necessidade)
•
Data e hora do registro
Será necessário um dashboard com atualização automática com os números de READ e NOREAD
para acompanhamento da operação e ter um tempo de resposta rápido para qualquer problema
referente a leitura nos portais.
Os relatórios devem ter possibilidade de extrair as informações em arquivo Excel ou PDF.
Qualquer adição ou alteração dos relatórios deverá ser feito via formalização por e-mail para
análise da equipe Invent.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Descrição  
**Score:** — (semantico) | **ID:** 6db3b3a1eac6c92c

E1LSUMX
LGNUM
Número de almacén / Complejo
de almacén
E1LSUMX
LENUM
Número de unidad de
almacenamiento
E1LSUMX
BWLVS
Tipo de movimiento EM
E1LSUMX
LETYP
Tipo Uno. Depósito (PL)
E1LSUMX
LZNUM
Número adicional de ref. a
transporte
E1LSUMX
BNAME
Nombre de usuario
E1LSUMX
KZQUI
Indicación de confirmación
E1LSUMX
VLTYP
Tipo de depósito
<?xml version="1.0" encoding="UTF-8"?>
<IDOC_INBOUND_IN_QUEUE Description="">
<TABLES>
<IDOC_CONTROL_REC_40>
<TABNAM>EDI_DC40</TABNAM>
<DOCREL>700</DOCREL>
<STATUS/>
<DIRECT>2</DIRECT>
<OUTMOD/>
<EXPRSS/>
<TEST/>
<IDOCTYP>WMSUID01</IDOCTYP>
<CIMTYP/>
<MESTYP>WMSUMO</MESTYP>
E1LSUMX
VLBER
Área de origen
E1LSUMX
VLPLA
Ubicación de origen
E1LSUMX
VPPOS
Posición en la ubicación de
procedencia
E1LSUMX
NLTYP
Tipo de depósito de destino
E1LSUMX
NLBER
Zona de destino
E1LSUMX
NLPLA
Ubicación de destino
E1LSUMX
NPPOS
Posición en la ubicación de
destino
E1LSUMX
STATU
Estado de procesamiento
E1LSUMX
REFNR
Grupo
E1LSUMX
PERNR
Número de personal del usuario
E1LSUMX
SOLEX
Tiempo teórico externo
<MESCOD/>
<MESFCT/>
<STD/>
<STDVRS/>
<STDMES/>
<SNDPOR>MII_IDOC</SNDPOR>
<SNDPRT>LS</SNDPRT>
<SNDPFC/>
<SNDPRN>FREMIIZ202</SNDPRN>
<SNDSAD/>
<SNDLAD/>
<RCVPOR/>
<RCVPRT>LS</RCVPRT>
<RCVPFC/>
<RCVPRN>RD7DVR3152</RCVPRN>
<RCVSAD/>
<RCVLAD>21571524</RCVLAD>
<CREDAT/>
<CRETIM/>
<REFINT/>
<REFGRP/>
<REFMES/>
<ARCKEY/>
<SERIAL/>
</IDOC_CONTROL_REC_40>
<IDOC_DATA_QUEUE>
<SEGNAM>E1LSUMX</SEGNAM>
<SEGNUM>000001</SEGNUM>
<PSGNUM>000000</PSGNUM>
<HLEVEL>01</HLEVEL>
<LGNUM/>
<LENUM/>
<BWLVS/>
<LETYP/>
<LZNUM/>
<BNAME/>
<KZQUI/>
<VLTYP/>
<VLBER/>
<VLPLA/>
<VPPOS/>
<NLTYP/>
<NLBER/>
<NLPLA/>
<NPPOS/>
<STATU/>
<REFNR/>
<PERNR/>
<SOLEX/>
</IDOC_DATA_QUEUE>
</TABLES>
<INPUT>
<QNAME>SAP_ALE_FREMIIZ202</QNAME>
</INPUT>
</IDOC_INBOUND_IN_QUEUE>

---
**Origem:** [MARA IV] 2025 — `I25.9047 - Especificao de Software - Projeto_Mara IV.pdf`  
**Prioridade:** não  
**Heading:** 2. Especificação  
**Score:** — (semantico) | **ID:** d78b373f6c190fb9

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo
gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Put-
to-Light e Sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do
cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e
gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do
banco). As informações são trocadas entre a aplicação e as estações de trabalho através de
interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada
estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [MARA IV] 2025 — `I25.9047 - Especificao de Software - Projeto_Mara IV.pdf`  
**Prioridade:** não  
**Heading:** 4. Alterações na Configuração Sorter/PTL  
**Score:** — (semantico) | **ID:** ba598a21e953662e

A expansão do projeto envolve a adição física de 9 novas rampas ao sorter, o que exige a
inclusão de novos dispositivos de Put-to-Light (PTL) e seus componentes de comunicação e
conversão.
Rampas Adicionais: Serão adicionadas 9 novas rampas à estrutura existente do
sorter.
Configuração de PTL por Rampa:
o
Cada uma das 9 novas rampas será equipada com 8 Novos PTLs (4 do lado
direito e 4 do lado esquerdo da rampa).
o
Contemplando um total somando todas as rampas de 72 novos LEDs.
Para cada uma das 9 novas rampas será instalado o seguinte conjunto:
1 scanner fixo (Prix)
Este scanner será responsável por capturar o código dos volumes ao chegarem na
rampa.
Sua finalidade é disparar os comandos de automação. O uso do scanner fixo
elimina etapas manuais, aumenta a acuracidade do processo e reduz o tempo de
operação.
1 conversor por rampa
Dispositivo responsável por realizar a conversão e comunicação entre os módulos PTL e
o sistema WCS, garantindo que todos os comandos e retornos de estado sejam
transmitidos de forma estável e sincronizada.
1 sinaleiro por saída
Cada rampa contará ainda com 01 sinaleiro adicional, instalado como recurso de
comunicação visual. A função do sinaleiro será exibir o estado operacional da rampa.
Este recurso aumenta a clareza do processo operacional, reduz falhas e contribui para
uma execução mais fluida das atividades.
Total do conjunto instalado:
9 scanners Prix
9 conversores
9 Sinaleiros
Layout Atualizado: Inclusão do layout físico atualizado para refletir a nova disposição das
9 rampas.

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 9580f59814c9eada

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas das Linhas de Separação e Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com WCS Invent.
Linhas de separação:
Frente
Costas
Sorter:
Fracionados
Full Case
Conferência
Sorter
A aplicação WCS da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Crosscheck  
**Score:** — (semantico) | **ID:** a6d4cd70807e66cf

Antes do portal de leitura do sorter, cada volume passa obrigatoriamente por uma balança que realiza a aferição do peso real da caixa. O WCS calcula o peso estimado do volume com base no peso unitário de cada item recebido via integração e compara automaticamente com o peso aferido fisicamente.
O WCS disponibilizará uma tela específica para cadastro de tolerâncias de peso, permitindo a configuração de faixas aceitáveis de variação. Caso o peso aferido esteja fora da faixa de tolerância configurada, o volume será automaticamente desviado para a área de rejeito.
Os volumes rejeitados e seus respectivos motivos poderão ser consultados através da tela "Rejeitos Sorter", onde o operador ou gestor poderá realizar a análise e tratativa necessária.

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** a19beafe0ad267c6

O sorter é responsável por direcionar os volumes aos seus destinos corretos conforme o mapa de desvio ativo no WCS.
O portal de leitura é composto por duas faces — uma superior e uma lateral — que fazem a leitura do código de barras da caixa, além de balança e dimensionador para verificação de peso e cubagem. A balança realiza o Crosscheck conforme descrito na seção 7.
O fluxo de desvio ocorre em tempo real: o CLP da esteira comunica ao WCS qual volume está passando no portal, o WCS consulta sua base de dados e retorna ao CLP a rampa de destino, e o CLP realiza fisicamente o desvio.
O sorter possui 5 (cinco) rampas: 4 (quatro) para saída de volumes vinculados a clientes e 1 (uma) exclusiva para rejeitos. Cada rampa conta com 1 PDV e pode operar com até 4 (quatro) clientes simultaneamente, sendo 1 (um) pallet por posição PTM, totalizando 16 posições de pallet nas 4 saídas do sorter.

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** PTM (Put to Monitor)  
**Score:** — (semantico) | **ID:** 666ca412a2d6c16a

De acordo com o mapa de sorter ativo, o WCS realiza automaticamente a abertura das posições de PTM.
Após o desvio dos volumes nas rampas, o operador posicionado na ponta da rampa realiza a leitura do código de barras da caixa com o scanner. O WCS verifica em sua base qual cliente está vinculado ao volume e exibe no PDV a posição do pallet correspondente, destacando a área com a cor padrão daquela posição. Marcações no chão com as mesmas cores serão disponibilizadas pelo cliente para facilitar a identificação pelo time operacional.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** 2.0 Especificação  
**Score:** — (semantico) | **ID:** b951338088ea74a3

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável
pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta
aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os
sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto
armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente
(licença + instalação do banco Postgres).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface
Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de
trabalho (Google Chrome).

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** 6 Sorter  
**Score:** — (nome-topico) | **ID:** 8cb7bb6901cd4d53

O sorter é capaz de realizar o desvio de volumes conforme duas regras distintas, as quais são
parametrizadas pela operação C&A:
•
Configuração do Mapa do Sorter:
A operação pode configurar o mapa do sorter, permitindo a parametrização das rampas
com tipos de destinos específicos e/ou múltiplos destinos, bem como os PTLs com seus
respectivos destinos.
•
Desvios Dinâmicos pelo WCS:
O WCS realiza desvios dinâmicos, sempre priorizando os tipos de destinos predefinidos
para as rampas e atribuindo um único destino para cada PTL.
O WMS irá sempre informar a loja final de destino de uma caixa, porém podem existir transit
points na malha logística, por onde esta caixa passará até chegar até o destino final (loja)
Além disso, todos os volumes induzidos no sorter devem conter o código 128, juntamente com a
quantidade de itens prevista na integração, a fim de garantir a validação correta no portal de
RFID.
O agrupador de todos os pallets presentes no sorter será o destino que é informado
via integração pelo WMS volume a um volume.
O sorter será composto 2 (duas) rampas de indução, 1 (um) portal de leitura de 3 faces (topo e
lateral) para a leitura de code128 presente no volume e outro portal com antenas para captação
do sinal das Tags RFIDs dos volumes.
O sorter possui 8 (oito) rampas saídas em toda a sua extensão mais uma rampa destinada ao
rejeito no final do sorter.
Cada saída será equipada com 12 (doze) posições PTL (Put-To-Light) e cada posição será
identificada com um display de 3 (três) dígitos com led, nesse caso 1 (uma) saída poderá ter até
12 Lojas diferentes.
Totalizando 96 (noventa e seis) posições PTL em toda extensão do sorter.
Cada saída do sorter deve conter um scanner de mão + conversor RS232.
Totalizando 12 (doze) scanner fixo  e 12 (doze) conversores RS232.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** Desvio Dinâmico  
**Score:** — (semantico) | **ID:** 2ba4d32054ccabcd

O desvio dinâmico consiste no WCS realizar a triagem dos volumes de forma automática, assim
que o volume for lido no portal, seguindo as duas regras de agrupamento previamente definidas
pelo time C&A. Este método será ativado sempre que não haja nenhum mapa de sorter ATIVO
no WCS.
O WCS utiliza os seguintes agrupadores para direcionar os volumes:
•
Agrupador por Rampa: O tipo de destino cadastrado no WCS é utilizado para agrupar
os volumes na rampa correspondente.
•
Agrupador do PTL: O destino informado na integração é utilizado para agrupar os
volumes no PTL.
Caso todas as rampas já possuam um tipo de destinos alocados e um novo volume com um tipo
de destino diferente seja lido, e haja posições PTL disponíveis, o WCS deve alocar este novo
volume em uma posição PTL disponível, compartilhando a rampa com volumes de destino similar.
Exemplo:
•
Configuração Inicial:
o
Rampa 1: Loja
o
Rampa 2: HUB
o
PTL Rampa 1: Destino A
o
PTL Rampa 2: Destino B
•
Leitura de Volume: Um novo volume com tipo de destino = Loja e Destino = A é lido.
o
O WCS aloca o volume na Rampa 1 e no PTL 1, pois ambos estão configurados
para o Destino A.
•
Novo Volume com Tipo Destino = CD e Destino = C: Um novo volume com tipo de
destino e destino é lido.
o
Como todas as rampas já estão ocupadas com outros destinos, o WCS aloca o
volume na mesma rampa que o volume com Destino A, mas em um PTL
disponível (caso haja uma posição PTL livre).
Observação: Caso não haja PTL disponível o volume será rejeitado por “SEM PTL DISPONIVEL”
Neste cenário, sempre teremos apenas UM pallet por destino.
Esse processo garante a alocação eficiente de volumes, mesmo quando há volumes com destinos
diferentes.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 27815d922e9fb1cf

O Sorter é o equipamento de classificação automática responsável por direcionar cada volume para a rampa de destino correta, de acordo com a transportadora ou rota cadastrada. O equipamento lê o código de cada volume ao passar pelo portal de leitura e comanda o desvio para a rampa correspondente. O projeto conta com 16 rampas de saída, 2 ponto(s) de indução e 2 portal(is) de leitura, com capacidade de classificação de 7.000 volumes por hora.
O Sorter deste projeto utiliza câmera com IA para leitura de múltiplos códigos. Está prevista a instalação de 1 TV de dashboard no portal do Sorter para acompanhamento operacional em tempo real.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Sem Leitura (NoRead)  
**Score:** — (semantico) | **ID:** ddd058f6a1fc6814

O portal de leitura não consegue identificar o código do volume — por ausência de etiqueta, código de barras danificado, deformação da embalagem ou posicionamento inadequado da etiqueta. O operador corrige a etiqueta ou reposiciona o volume e o reinsere no Sorter antes do portal de leitura. Alternativamente, conduz o volume manualmente à rampa de destino correta e realiza a leitura no scanner fixo da estação de rejeito para atualizar o dashboard e disparar a integração ao eWM - SAP.
Com a esteira de recirculação ativa, o volume com NoRead é automaticamente recirculado para uma nova tentativa de leitura. Somente após esgotar o número de tentativas configurado no WCS o volume é direcionado à rampa de rejeito.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Sem Rota  
**Score:** — (semantico) | **ID:** 4bf5a26ca198b052

A leitura é realizada com sucesso, mas o WCS não encontra nenhuma rota cadastrada para o código identificado. O operador cadastra a rota no sistema e a vincula ao Mapa do Sorter, depois reinsere o volume. Alternativamente, conduz o volume manualmente à rampa correta e realiza a leitura no scanner fixo.
Com recirculação ativa, o volume aguarda na malha enquanto o operador realiza o cadastro da rota. Após o vínculo ser criado, o volume é classificado normalmente na próxima passagem pelo portal.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Cancelamento  
**Score:** — (semantico) | **ID:** 9f3fecdea2ee00d2

O pedido associado ao volume foi cancelado pelo eWM - SAP durante o trânsito na linha. O WCS identifica o LPN como cancelado e o desvia para o rejeito. O volume não deve retornar ao Sorter. O tratamento correto é o desmonte do volume e retorno dos itens ao estoque.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Perda de Tracking  
**Score:** — (semantico) | **ID:** e3cf1e510506bbf8

Após a leitura no portal, o sistema perde a referência da posição física do volume dentro do Sorter — o controlador lógico (CLP) deixa de rastrear onde o volume está na linha. Isso ocorre geralmente por enroscos mecânicos, volume fora das especificações de dimensão ou peso, ou falha de comunicação entre o CLP e o WCS. Sem a referência posicional, o Sorter não consegue acionar o desvio correto e direciona o volume ao rejeito. O operador reinsere o volume antes do portal ou o conduz manualmente à rampa de destino com leitura no scanner fixo.
Com recirculação ativa, o volume é recirculado para tentar reestabelecer o rastreio posicional. Se o tracking for recuperado durante o percurso, o volume é classificado normalmente. Se a perda persistir, o volume vai ao rejeito para tratamento manual.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 9. Sorter  
**Score:** — (nome-topico) | **ID:** e26057818ebcdd1b

O sorter fará o desvio dos volumes conforme o mapa ativo no WCS.
O sorter é composto por 8 (oito) saídas no total e as 4 saídas da esquerda compõem 16 (quatro)
posições PTL (Put-To-Light) e as 4 saídas da direita compõem 32 (oito) posições PTL (Put-To-
Light). Cada posição PTL terá 1 (um) led 3 (três) dígitos sendo assim cada saída pode ter até 4
(quatro) rotas de destino diferentes.
Cada saída deve conter um leitor de código de barras.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Fluxo de Operação da Saída do Sorter ( PTL )  
**Score:** — (semantico) | **ID:** f4b06f6c7f0329a6

A abertura das 48 posições de pallets (PTL) ocorrerá de forma manual, assim que os volumes
forem integrados pelo WMS de acordo com o mapa de sorter ativo. Cada uma das 48 posições
possui um LED com um botão de confirmação.
Ao iniciar a operação, o operador da saída do sorter deverá estar logado em seu posto de trabalho
para mapear e alocar os volumes nas posições indicadas.
Após o volume (caixa) ser desviado para a rampa correta, o operador deve realizar a leitura do
seu código de barras com o scanner. Neste momento, o sistema acenderá o LED correspondente
à transportadora ou loja, indicando a posição de pallet em que a caixa deve ser alocada.
•
Se o volume estiver correto: O operador coloca a caixa no pallet indicado e, em
seguida, pressiona o botão do LED aceso para confirmar sistemicamente a alocação. O
sistema armazenará a informação de que a caixa está nesse pallet.
•
Se o volume estiver incorreto: Caso um volume diferente daquele previsto para
qualquer uma das posições da rampa seja lido, o LED acenderá na cor vermelha. Isso
indica que a caixa não pertence àquela saída. O operador deverá então mover
manualmente o volume para a estação de rejeito para o seu devido tratamento.
O operador visualiza fisicamente o limite do pallet. Ao atingir a capacidade máxima, ele inicia o
processo de fechamento, realizando a leitura de uma etiqueta específica de "fechamento de
pallet" com o scanner de mão.
Após a leitura desta etiqueta, o sistema WCS enviará, por meio da integração (Aloca PTL), todas
as informações das caixas que foram alocadas naquele pallet para o WMS.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** Nota Fiscal  
**Score:** — (semantico) | **ID:** cbd55401f13ce15c

Será importada durante a operação , diversas planilhas segregadas que representam a nota fiscal, itens e Mac Adress do equipamento.
O WCS deve absorver esta planilha e quando o operador selecionar esta nota fiscal via sistema, será validado os itens esperados por essa nota fiscal e fazer o levantamento do que foi recebido/conferido e o que não foi.
Segue exemplo da planilha que será importada para o WCS:
Serial EPO = Mac Adress do equipamento
Item = SKU do equipamento
Nota fiscal =  Nota fiscal que está sendo importada
Origem = Origem da nota
Código Fornecedor = Código do Parceiro Cliente
Chave de Acesso = Código que será lido para inicio da nota

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** Célula  
**Score:** — (semantico) | **ID:** 2e2748d69529ab65

Em cada célula deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do itens recebidos.
Quantidades abaixo, por rampa.
02 (dois) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
02 (dois) PDVs
01 (uma) impressora de etiquetas Zebra portátil com IP fixo, sendo uma por operador– Ex: Zebra.
No caso do projeto Reverse, onde teremos 4 células, será necessário 8 (oito) unidades de leitores de código de barras, 8 (oito) PDVs e 4 (quatro) impressoras Zebra portáteis, conforme mencionado acima.
As impressoras de etiquetas serão do modelo Zebra portátil e deverão operar com IP fixo na rede da automação. O cadastro das impressoras no sistema WCS poderá ser realizado conforme a necessidade da operação, permitindo flexibilidade no gerenciamento dos equipamentos.
Todos os periféricos precisam estar na rede da automação para que se comunique com o sistema WCS.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** Nota Fiscal  
**Score:** — (semantico) | **ID:** ffa34a0da53c51b2

Será importada durante a operação , diversas planilhas segregadas que representam a nota fiscal,
itens e Mac Adress do equipamento.
O WCS deve absorver esta planilha e quando o operador selecionar esta nota fiscal via sistema,
será validado os itens esperados por essa nota fiscal e fazer o levantamento do que foi
recebido/conferido e o que não foi.
Segue exemplo da planilha que será importada para o WCS:
Serial EPO = Mac Adress do equipamento
Item = SKU do equipamento
Nota fiscal =  Nota fiscal que está sendo importada
Origem = Origem da nota
Código Fornecedor = Código do Parceiro Cliente
Chave de Acesso = Código que será lido para inicio da nota

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** Célula  
**Score:** — (semantico) | **ID:** 69ab3015c94661ba

Em cada célula deverá conter os equipamentos listados abaixo, para que o operador consiga
realizar a leitura do itens recebidos.
Quantidades abaixo, por rampa.
 02 (dois) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
 02 (dois) PDVs
 01 (uma) impressora de etiquetas Zebra portátil com IP fixo, sendo uma por operador–
Ex: Zebra.
No caso do projeto Reverse, onde teremos 4 células, será necessário 8 (oito) unidades de
leitores de código de barras, 8 (oito) PDVs e 4 (quatro) impressoras Zebra portáteis, conforme
mencionado acima.
As impressoras de etiquetas serão do modelo Zebra portátil e deverão operar com IP fixo na
rede da automação. O cadastro das impressoras no sistema WCS poderá ser realizado conforme
a necessidade da operação, permitindo flexibilidade no gerenciamento dos equipamentos.
Todos os periféricos precisam estar na rede da automação para que se comunique com o sistema
WCS.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** f27f52673cd2ab37

SOFTWARE SPECIFICATION
WILD FORK PROJECT
Name: | Raphael Cerri Caveagna
E-Mail: | raphael.caveagna@invent-corp.com
Deptnt: | Desenvolvimento de Software
Phone: | +55 11 2833-0005|0006
We hereby present our proposal and general conditions of supply for the referenced MFC system.
We thank you in advance for the opportunity and remain at your disposal for any further clarifications that may be required.
Rev. | Date | Description | Responsible
1 | 27/02/2026 | Software Specification | Raphael Cerri
