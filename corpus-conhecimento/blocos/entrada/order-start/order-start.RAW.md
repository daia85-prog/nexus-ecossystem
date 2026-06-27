# order-start.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 8. Order Start FlowRack  
**Score:** — (semantico) | **ID:** 30fa2f9fdf3f3240

Será disponibilizado um (1) Order Start no início da linha de separação, cuja finalidade
é garantir o início controlado do processo de separação para cada caixa de picking.
Os volumes (pega) a serem transportados na esteira, serão caixas plásticas com
etiqueta fixa, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de
separação, o WCS deverá disponibilizar uma tela específica de mapeamento de postos
FlowRack. Essa funcionalidade permitirá o vínculo entre usuários (logins) e os postos de
separação ativos na linha.
A tela apresentará os postos disponíveis e os usuários vinculados a cada um deles.
O vínculo deverá ser feito manualmente por um supervisor.
Um mesmo usuário poderá estar vinculado a múltiplos postos simultaneamente de
mesma categoria, ou seja, não haverá limitação de exclusividade por posto.
Na separação realizada no museu, a rastreabilidade será realizada por meio do login utilizado
no PDV do Picking Cart.
Cada operação realizada no PDV estará associada ao usuário logado no momento da
execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de
produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as
informações dos pedidos para a operação conforme descrito no item 3.3 Trabalhos – Work
acima.
Antes de iniciar os pedidos, o WCS deve validar se a quantidade de saldo nas posições
é suficiente para atender as tarefas, com isso faz a liberação para ser iniciado no order start,
em casos que a quantidade não seja o suficiente para atender as tarefas, a mesma não poderá
ser iniciada e o WCS deverá seguir com o reabastecimento via transfer.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, o WCS
realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para
atender a separação do pedido.
No processo de separação, o ponto de Order Start em que o volume (pega) será
iniciado depende da menor curva de giro presente no armazém. Isso significa que o WCS deve
identificar, entre todos os endereços de picking do volume (pega), qual pertence à curva de
menor giro (por exemplo, museu ou Order Start do FlowRack), e a partir disso determinar o
ponto inicial de separação.
Se o volume (pega) possuir itens que devem ser coletados no museu, o início do
processo deverá ocorrer no Order Start específico daquela área. Nessa etapa, o operador
realizará a associação do volume (pega) com a caixa plástica via PDV (Picking Cart) e iniciará a
coleta a partir da área de menor giro.
Somente após a separação na área do museu, caso o volume (pega) possua itens
destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a
continuidade do processo de separação no FlowRack. Esse fluxo garante que todas as coletas
nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a
necessidade de retrabalho ou retorno de caixas já em processo de automação. O vínculo das
caixas com o volume (pega) é feito automaticamente no primeiro ponto de decisão da linha de
FlowRack.
O WCS disponibiliza uma tela de Order Start que serve para visualizar os próximos
volumes (Pega) que serão vinculados de acordo com a ordem de prioridade enviada na
integração.
Priorizar Pedidos: Na tela de “Tarefas”, o operador terá acesso a recursos onde Será
possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios
como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante
agilidade na seleção e maior controle sobre o que deve ser iniciado no momento. Além disso, a
tela apresentará uma visualização prévia da previsão de volumes (pega) por pedido, permitindo
que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico.
Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento
do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela “Resumo Pega” será possível filtrar os pedidos
por tipo de picking FlowRack, Picking Cart. Cada tipo será identificado visualmente,
facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias
disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Além do filtro, a tela apresentará de forma consolidada o total de volumes (pega) previstos por
tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por
modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o
planejamento da linha de separação e a atuação mais estratégica por parte da liderança
operacional.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Order Start FlowRack  
**Score:** — (semantico) | **ID:** 275dee9d3b8a104c

Será disponibilizado um (1) Order Start no início da linha de separação, cuja finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Os volumes (tarefa) a serem transportados na esteira, serão caixas plásticas com etiqueta fixa, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de separação, o WCS deverá disponibilizar uma tela específica de mapeamento de postos FlowRack. Essa funcionalidade permitirá o vínculo entre usuários (logins) e os postos de separação ativos na linha.
A tela apresentará os postos disponíveis e os usuários vinculados a cada um deles.
O vínculo deverá ser feito manualmente por um supervisor.
Um mesmo usuário poderá estar vinculado a múltiplos postos simultaneamente de mesma categoria, ou seja, não haverá limitação de exclusividade por posto.
Na separação realizada no museu, a rastreabilidade será realizada por meio do login utilizado no PDV do Picking Cart.
Cada operação realizada no PDV estará associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações das missões para a operação conforme descrito no item 3.3 Missões acima.
Antes de iniciar as missões, o WCS deve validar se a quantidade de saldo nas posições é suficiente para atender as missões, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender as missões, a mesma não poderá ser iniciada e o WCS deverá seguir com o reabastecimento via transfer. Caso não haja saldo no transfer, o WCS permitirá o início desta missão com os itens em questão cortados.
Com o recebimento das missões e baseado nas caixas plásticas de picking, o WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação das missões.
No processo de separação, o ponto de Order Start em que o volume (tarefa) será iniciado depende da menor curva de giro presente no armazém. Isso significa que o WCS deve identificar, entre todos os endereços de picking do volume (tarefa), qual pertence à curva de menor giro (por exemplo, museu ou Order Start do FlowRack), e a partir disso determinar o ponto inicial de separação.
Se o volume (tarefa) possuir itens que devem ser coletados no museu, o início do processo deverá ocorrer no Order Start específico daquela área. Nessa etapa, o operador realizará a associação do volume (tarefa) com a caixa plástica via PDV (Picking Cart) e iniciará a coleta a partir da área de menor giro.
Somente após a separação na área do museu, caso o volume (tarefa) possua itens destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do processo de separação no FlowRack. Esse fluxo garante que todas as coletas nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de retrabalho ou retorno de caixas já em processo de automação. O vínculo das caixas com o volume (tarefa) é feito automaticamente no primeiro ponto de decisão da linha de FlowRack.
O WCS disponibiliza uma tela de Order Start que serve para visualizar os próximos volumes (tarefa) que serão vinculados de acordo com a ordem de prioridade enviada na integração.
Priorizar Missões: Na tela de “Missões”, o operador terá acesso a recursos onde Será possível organizar e priorizar das missões, permitindo que sejam listados com base em critérios como prioridade operacional, status (ex: apenas missões em aberto). Essa filtragem garante agilidade na seleção e maior controle sobre o que deve ser iniciado no momento. Além disso, a tela apresentará uma visualização prévia da previsão de volumes (tarefa) por missão, permitindo que o operador saiba quantas caixas serão necessárias para atender aquela missão específico. Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela “Resumo Tarefas” será possível filtrar as missões por tipo de picking FlowRack, Picking Cart. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar as missões conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Além do filtro, a tela apresentará de forma consolidada o total de volumes (tarefa) previstos por tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o planejamento da linha de separação e a atuação mais estratégica por parte da liderança operacional.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 0942bed6c4bb559b

Será disponibilizado um (1) Order Start no início da linha de separação de cada nível, cuja
finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Os volumes (pega) a serem transportados na esteira, serão caixas plásticas com etiqueta fixa,
teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de
separação será necessário realizar login e acessar a tela de order start.
Cada operação realizada estará associada ao usuário logado no momento da execução,
garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de
produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos
pedidos para a operação conforme descrito no item 3.3 Trabalhos – Work  acima.
Antes de iniciar os pedidos, o WCS deve validar se a quantidade de saldo nas posições é
suficiente para atender as tarefas, com isso faz a liberação para ser iniciado no order start, em
casos que a quantidade não seja o suficiente para atender as tarefas, a mesma não poderá ser
iniciada e o WCS deverá seguir com o reabastecimento via transfer.
O WCS exibirá um alerta na tela de Order Start quando identificar que as posições de picking
disponíveis não são suficientes para atender todas as tarefas de ressuprimento geradas. Nesse
caso a operação deverá realizar uma movimentação forçada de estoque liberando uma posição
para esse ressuprimento pendente.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, o WCS realiza a
cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a
separação do pedido.
No processo de separação, o ponto de Order Start em que o volume (pega) será iniciado
depende da menor curva de giro presente no armazém. Isso significa que o WCS deve
identificar, entre todos os endereços de picking do volume (pega), qual pertence à curva de
menor giro (por exemplo, museu ou Order Start do FlowRack), e a partir disso determinar o
ponto inicial de separação.
Se o volume (pega) possuir itens que devem ser coletados no museu, o início do processo
deverá ocorrer no Order Start específico daquela área (Picking cart). Nessa etapa, o operador
realizará a associação do volume (pega) com a caixa plástica via PDV (Picking Cart) e iniciará a
coleta a partir da área de menor giro.
Somente após a separação na área do museu, caso o volume (pega) possua itens destinados a
essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do
processo de separação no FlowRack. Esse fluxo garante que todas as coletas nos endereços
mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de
retrabalho ou retorno de caixas já em processo de automação.
O WCS disponibiliza uma tela de Order Start que serve para visualizar os próximos volumes
(Pega) que serão vinculados de acordo com a ordem de prioridade enviada na integração.
Critério de priorização: (1) ordem de liberação dos romaneios pela operação (FIFO de início); (2)
quando não houver posição de PTL disponível para os próximos romaneios da fila, o sistema
considera a data/hora de corte como critério de desempate; (3) FIFO como desempate final.
Priorizar Pedidos: Na tela de “Tarefas”, o operador terá acesso a recursos onde Será
possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios
como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante
agilidade na seleção e maior controle sobre o que deve ser iniciado no momento. Além disso, a
tela apresentará uma visualização prévia da previsão de volumes (pega) por pedido, permitindo
que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico.
Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento
do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela “Resumo Pega” será possível filtrar os pedidos
por tipo de picking FlowRack, Picking Cart, Full Case, exceção, Brinde. Cada tipo será
identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme
os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de
tarefas.
Além do filtro, a tela apresentará de forma consolidada o total de volumes (pega) previstos por
tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por
modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o
planejamento da linha de separação e a atuação mais estratégica por parte da liderança
operacional.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Hardware Order Start:  
**Score:** — (semantico) | **ID:** a942916a774d72da

O WCS oferecerá suporte em desktops e Tablets/PDV para as telas de Order Start no picking
fracionado, garantindo uma visualização mais ampla e eficiente do processo.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Order Start Brindes  
**Score:** — (semantico) | **ID:** c13da7094350b6c5

O Order Start dos Brindes será utilizado quando o produto tiver no cadastro o campo “tipo” =
“Brinde”.
Fluxo Operacional:
O operador acessa o Order Start Brindes, onde são exibidos apenas os volumes que
tem coleta nesse setor.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial
com o scanner de mão.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume
sistêmico do pedido e direciona o coletor para a tela de coleta fracionada.
Após o término, o volume estará pronto para realizar a leitura da caixa plástica no
packing.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** 7.6.1. Nível 3  
**Score:** — (semantico) | **ID:** 5d891bb792e1ecc2

O Order Start no 3º Nível será utilizado quando a coleta do item iniciar neste nível, podendo ou
não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente
volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas os volumes que
iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial
com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume
sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja
mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no
Nível Térreo.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** 7.6.2. Nível 2  
**Score:** — (semantico) | **ID:** 9cd8ab3ece496607

O Order Start no 2º Nível será utilizado quando a operação iniciar neste nível. Somente volumes
que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses
volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes
que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes
que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial
com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume
sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja
mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no
Nível Térreo.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** 7.6.3. Nível 1  
**Score:** — (semantico) | **ID:** 5c3edd9eb5cb4e2b

O Order Start no 1º Nível será utilizado quando a operação iniciar neste nível. Somente volumes
que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para
esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir
volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes
que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial
com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume
sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja
mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível
Térreo.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Order Start Fracionado Térreo  
**Score:** — (semantico) | **ID:** 14534f38b9e10fdf

O Order Start no Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis
1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da
caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando
diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo (desktop ou PDV/Tablet), onde são
exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2
ou 3.(Somente par consulta)
Será exibido o total de caixas necessárias para finalizar os pedidos integrados.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o
vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido
automaticamente.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Fluxo Operacional de Picking Térreo  
**Score:** — (semantico) | **ID:** a0ab515656917c28

O processo de Picking no Térreo ocorre após a leitura da caixa plástica no Order Start, onde
o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação
dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é
fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de
separação.
Order Start e Leitura da Caixa Plástica:
O operador induz o volume na esteira, e o processo de Order Start ocorre após a
passagem da caixa plástica pelo primeiro ponto de decisão (Scanner).
O WCS verifica automaticamente se há uma tarefa de coleta liberada e associa ao
volume. Caso haja coleta, o volume será desviado automaticamente para o posto
correspondente. Caso não haja o volume será desviado no primeiro posto e será
informado nos leds e pdv o motivo do rejeito (falha de leitura da etiqueta/ Falta de
pedidos integrados).
PBL (Picking by Light):
O após o desvio o WCS acende os LEDs de frente no posto de separação, sinalizando o
local e a quantidade de itens a serem coletados. Os LEDs de frente exibirão 3 dígitos
para identificar a quantidade de itens a serem coletados e serão únicos por posição.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um
PDV para auxiliar o operador na coleta.
Exibição da Lista de Itens no PDV:
O PDV exibirá a lista de itens a serem coletados de acordo com o volume desviado e a
quantidade de itens prevista, e se houver a observação do pedido também será
exibido.
O operador realiza a coleta física do item e confirma a coleta pressionando o LED
correspondente. Após pressionar o LED, o WCS confirma a coleta do item e a linha
correspondente é pintada de verde no PDV.
Coleta de Itens nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das
costas, o WCS acende os LEDs da frente em rosa para sinalizar a coleta na parte de
picking costas, e também acende os LEDs de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente: o WCS irá informar o
endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender
a várias posições de picking, permitindo que o operador colete de maneira eficiente e
sem confusão.
O operador realiza a coleta de acordo com a indicação dos LEDs.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem
na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede
caixa” através do PDV.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com
os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens
restantes do pedido, que será retomada no processo de Order Start com uma nova
caixa plástica.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa
atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde para indicar que o volume
foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o
próximo posto de separação, onde o processo se repete até que todos os itens sejam
coletados e o volume esteja completo.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 39d279ff104360d6

Após a integração do romaneio, o WCS identifica e quebra as tarefas, de forma que o que pode
ser separado sem a necessidade de abrir a caixa seja direcionado ao processo de Picking Full
Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O
operador deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse
posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são
configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo
com a quantidade de caixas que serão separadas. Essa etapa permite ao operador
decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre
adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura
que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do lado oposto da indução:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para
coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de
forma que o operador inicie a coleta a partir do ponto mais longe da indução. Isso
otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao
ponto de indução de forma mais eficiente. Isso será feito atráves do cadastro de ruas
que deve informar se seguira a ordenação de endereço de forma crescente ou
decrescente.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo
operacional.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** ad5a176c2deddaf7

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de
volumes sistêmicos nas posições dos Picking Carts. Cada Picking Cart terá seu próprio
Order Start, e a posição do Picking Cart será vinculada a uma caixa plástica específica.
Existem dois tipos de Order Start para o Picking Cart:
Controlado: Neste modelo, a tarefa de picking é realizada em uma área com controle
de acesso. O sistema monitora o tipo de produto para definir a qual Order Start a
tarefa pertence, garantindo que somente pessoas autorizadas possam iniciar a tarefa
na área controlada.
Não Controlado: Neste modelo, o processo de picking ocorre em uma área comum,
onde não é necessário permissão de acesso, permitindo que qualquer operador
inicie a tarefa de picking sem restrições.
A distinção entre os tipos de Order Start permite direcionar o picking controlado para
operadores específicos, garantindo maior controle e segurança nas operações.
Mapeamento da Posição de Picking Cart:
Vinculação Inicial da Posição de Picking Cart à Caixa Plástica:
Antes de alocar o volume sistêmico, é necessário realizar o mapeamento da posição de
Picking Cart. Neste primeiro passo, a posição de Picking Cart será associada a uma
caixa plástica, mas ainda não haverá vínculo com o volume sistêmico. O mapeamento é
realizado através de um leitor de mão integrado ao PDV, onde o operador escaneia a
caixa plástica e associa essa caixa a uma posição específica do Picking Cart. Após
finalizar o mapeamento, o operador deve clicar no botão “FINALIZAR
MAPEAMENTO”.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart
de uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a
disponibilidade de caixas plásticas.
Exibição da Lista no PDV:
Exibição das Tarefas no PDV:
Após o mapeamento da caixa plástica com a posição de Picking Cart, o PDV exibirá a
lista de tarefas de separação que devem ser realizadas. A lista será organizada de
acordo com a regra de prioridade ou FIFO (First In, First Out), conforme as
configurações definidas no sistema.
Leitura e Alocação da Posição de Picking Cart ao Volume Sistêmico:
Leitura da Posição de Picking:
O operador deve realizar a leitura da posição de Picking cart no PDV, onde as
informações sobre as tarefas de separação estarão disponíveis. Na tela do PDV, o
operador deverá confirmar a alocação da posição de Picking Cart ao volume sistêmico
que está sendo separado, clicando na opção correspondente.
Repetição do Processo:
Repetir para Outras Posições de Picking Cart:
O operador deve repetir o processo de leitura e alocação para todas as outras posições
de Picking Cart que possuam caixas plásticas vinculadas. Ele não pode ir para a tela de
coleta até que todas as posições que tenham caixas vinculadas sejam atribuídas a uma
tarefa de separação. Caso contrário, ele só poderá avançar quando todas as tarefas de
separação forem vinculadas às respectivas caixas plásticas ou até que as tarefas
acabem.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Hardware no Termolábil:  
**Score:** — (semantico) | **ID:** 0855864fc39d3e81

Order Start – PDV
Coleta - PDV
Conferência / Packing – Desktop
Paletização – Coletor Android

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Canais de Picking dinâmico (Nível 1 – Posição 1): Posições fixas de separação com  
**Score:** — (semantico) | **ID:** 52deeda13eec7c8b

capacidade para 1 palete, localizadas exclusivamente na posição 1 do primeiro nível de cada
câmara.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Cancelamento de remessa  
**Score:** — (nome-topico) | **ID:** f88281a50ff1a702

Para atender as necessidades operacionais é possível realizar o cancelamento de remessa no
WCS através da tela missão.
Nesse processo de cancelamento de remessa só pode ser realizado nas remessas (Missões)
com status DISPONIVEL, os demais status não permitiram o cancelamento da remessa.
Informando que o status da remessa é invalido para essa operação
O usuário com perfil de autorização pode selecionar uma ou mais remessas com status

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Geração da Lista de Coleta  
**Score:** — (semantico) | **ID:** 6bf4f763943464ff

A lista de coleta é gerada com base na onda, sendo composta pela consolidação de todos os
itens necessários para seu atendimento. O WCS organiza essa lista aplicando as regras de
seleção de lote e critérios de prioridade definidos.
A Criação das tarefas de coleta também ocorre por onda, e a sequência entre ondas segue a
ordem de criação, de forma que ondas mais antigas são as primeiras a serem processadas
(FIFO). Esse comportamento não representa uma priorização operacional, mas sim uma
ordenação cronológica de processamento.
Para produtos do tipo PVAR, o WCS não deve aplicar qualquer tipo de randomização, devendo
respeitar integralmente a sequência definida pelas regras de coleta

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Order Start Fracionado  
**Score:** — (semantico) | **ID:** 8c9ae0cd4d666875

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos
previstos, incluindo os dados de cubagem e quantidade de cada item.  O WCS identifica os
pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In,
First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados, a ordenação
inicial será agrupada por Remessa. Com base nas informações recebidas, o WCS realiza o
cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada missão
(pedido). O sistema calcula quantos volumes serão necessários para cada missão.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start,
onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo
de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada missão com
base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e
quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a
impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a
etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o
processo de separação do pedido.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 23c655aa68a92576

Após a integração da onda de pedidos, o WCS identifica as tarefas de Picking Full Case e as
tarefas de Reabastecimento para coleta. O Order Start Full Case é utilizado quando a
separação envolve caixas fechadas, englobando tanto os itens destinados ao picking full case
quanto os itens de reabastecimento das posições de Picking Fracionado.
O operador deve seguir os passos descritos abaixo para iniciar a tarefa de separação, que agora
contempla de forma unificada ambos os tipos de coleta em um único fluxo operacional.
Fluxo Operacional do Order Start Full Case
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse
posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são
configuradas de acordo com o layout do armazém e o fluxo de picking.
Início da Tarefa:
O WCS determina automaticamente a quantidade de itens a coletar na leva,
considerando tanto os itens de Full Case quanto os itens de Reabastecimento
presentes na rua selecionada, respeitando os parâmetros de:
○
peso máximo do pallet de coleta; e
○
cubagem máxima do pallet de coleta.
O WCS irá compor a leva de coleta mesclando os itens de Full Case e Reabastecimento
da rua selecionada, de modo que o operador realize a coleta de ambos os tipos em
uma única passagem pela rua.
O operador realiza a separação e consolida os itens no pallet correspondente à Tarefa.
O peso e cubagem máxima será cadastrada em uma tela de parâmetros do WCS.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre
adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura
que as caixas sejam corretamente identificadas e registradas no sistema.
As etiquetas serão diferenciadas visualmente conforme o tipo de item: etiqueta de
Picking Full Case para itens destinados ao sorter, e etiqueta de Reabastecimento
para itens destinados às posições de Picking Fracionado, conforme layouts descritos no
tópico 12 (Layouts de Impressão).
Ordem de Coleta Vinculada à Impressora do Posto de Impressão:
Na operação de Order Start Full Case, a sequência de coleta das posições na rua
(crescente ou decrescente) será definida com base na impressora selecionada pelo
operador no posto de impressão.
Cada impressora deverá estar previamente configurada no WCS com uma regra
específica de ordenação de coleta (crescente ou decrescente).
Ao selecionar a impressora no momento da impressão das etiquetas, o WCS deverá
aplicar automaticamente a sequência correspondente, direcionando o operador a iniciar
a coleta a partir do início ou do final da rua, conforme a configuração associada à
impressora. O coletor deve refletir também essa ordenação para exibir os endereços
pendentes.
Essa abordagem permite maior flexibilidade operacional, adequando o fluxo de
separação ao layout físico, ponto de indução e estratégia logística de cada área.
A ordenação unificada se aplica tanto aos itens de Full Case quanto aos itens
de Reabastecimento, garantindo que o operador percorra a rua uma única
vez para coletar ambos os tipos.
Identificação dos Itens na Tela de Coleta:
Na tela de coleta do coletor Android, o WCS deve agrupar as tarefas, distinguindo
apenas pela etiqueta impressa.
Os itens de Full Case seguirão o fluxo normal de indução no sorter após a coleta.
Os itens de Reabastecimento serão induzidos na esteira e o WCS direcionará cada
volume para a área específica de reabastecimento, mantendo a rastreabilidade e a
organização dos volumes para posterior utilização nas posições de Picking Fracionado.
Destinação dos Volumes Após Coleta:
Volumes Full Case: Após a coleta e etiquetagem, o operador induz os volumes na
esteira. O WCS direciona cada volume via sorter para a rampa de destino
correspondente à transportadora/rota.
Volumes de Reabastecimento: Após a coleta, o operador induz o volume na esteira
e o WCS direciona cada volume para a área específica de reabastecimento. Após o
desvio do volume no ponto de reabastecimento, o WCS gera automaticamente uma
tarefa de reabastecimento para movimentação da caixa fechada até a posição final de
Picking Fracionado.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo
operacional.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** 11. Dashboard Operacional – Monitoramento de Order Start  
**Score:** — (semantico) | **ID:** 39bab48cb1c2cade

O WCS disponibilizará um Dashboard Operacional de Order Start, com o objetivo de
fornecer visibilidade em tempo real da carga de trabalho por posto de Order Start,
permitindo melhor balanceamento operacional e a identificação de gargalos nas ruas de
separação.
Informações Apresentadas no Dashboard
O dashboard apresentará, de forma consolidada, as seguintes informações:
Visão por Order Start
Para cada posto de Order Start, serão exibidos:
Identificação do Order Start
Quantidade de pedidos pendentes
Indicativo de Carga por Rua
O dashboard também apresentará um indicador de concentração de tarefas por rua,
destacando:
Ruas com maior volume de tarefas pendentes
Quantidade de tarefas pendentes por rua
Esse indicativo poderá ser apresentado por ranking, destaque visual ou alerta, auxiliando o
time operacional na tomada de decisão para redistribuição de atividades ou priorização

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 5. Parametrizações Gerais e Regras de Negócio  
**Score:** — (semantico) | **ID:** 62bfabf7784ab62f

Esta seção descreve as configurações lógicas e algoritmos que governam o processamento dos
pedidos no WCS Velox. Antes da liberação para o chão de fábrica, cada onda passa por este
cálculo para definir a estratégia de separação.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 7. Order Start PBL  
**Score:** — (semantico) | **ID:** 572d36f670abd43f

O processo de Order Start é o ponto de partida físico da automação. É nesta etapa que o WCS
transforma o planejamento lógico (Onda de Pedidos) em Volumes Físicos rastreáveis,
garantindo que cada caixa saiba exatamente por quais zonas de picking deve passar.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 7.1. Corte por Falta de Saldo no Order Start  
**Score:** — (semantico) | **ID:** 074b6b4ef77753c9

Quando a demanda de uma onda supera o saldo disponível nas posições de picking e a reposição
não é viável ou desejada, o WCS Velox permite o corte do SKU ainda no Order Start, antes de
o volume entrar na linha. O corte é realizado por uma tela administrativa, que lista os SKUs
bloqueados por falta de saldo e permite o tratamento em lote.
Natureza do corte (lógico). O corte é uma remoção de demanda, e não uma movimentação
de estoque:
Não altera o saldo das posições de picking — a posição permanece com o saldo real
(insuficiente ou zerado).
Não dispara nem cancela as regras de reabastecimento por mínimo de canal, que seguem
independentes.
Encerra a demanda daquele SKU naquela missão, liberando a missão para prosseguir
com os itens atendidos.
Aprovação. Assim como na separação e na conferência, o corte por falta de saldo no Order Start
exige a autenticação de um supervisor (senha ou crachá). Sem essa aprovação, o corte não
é efetivado.
Integração com o WMS. O WCS notifica o Spark pela mesma mensagem de
corte/divergência já utilizada no shortpicking — informando SKU, pedido e quantidade
efetivamente atendida —, registrando o motivo "Corte por falta de saldo no Order Start". O
Spark decide o faturamento parcial ou a geração de nova onda para o saldo restante. A diferença
em relação ao shortpicking é apenas o momento (no Order Start, antes da indução) e o motivo
do corte.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 8.2. Order Start Picking Cart  
**Score:** — (semantico) | **ID:** d01e1f5b85cecdc6

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de
volumes sistêmicos nas posições dos Picking Carts. Cada Picking Cart terá seu próprio Order
Start, e a posição do Picking Cart será vinculada a uma caixa plástica específica.
Mapeamento da Posição de Picking Cart:
• Vinculação Inicial da Posição de Picking Cart à Caixa Plástica: Antes de alocar o volume
sistêmico, é necessário realizar o mapeamento da posição de Picking Cart. Neste primeiro
passo, a posição de Picking Cart será associada a uma caixa plástica, mas ainda não haverá
vínculo com o volume sistêmico. O mapeamento é realizado através de um leitor de mão
integrado ao PDV, onde o operador escaneia a caixa plástica e associa essa caixa a uma
posição específica do Picking Cart. Após finalizar o mapeamento, o operador deve clicar no
botão “FINALIZAR MAPEAMENTO”.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart de
uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a
disponibilidade de caixas plásticas.
Alocação da Posição de Picking Cart ao Volume Sistêmico:
Ao clicar em finalizar mapeamento todas as outras posições de Picking Cart que possuam caixas
plásticas vinculadas, então o sistema direciona o tablet para a tela de coleta.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 50816d3ddeda1529

O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador
deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse
posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são
configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo
com a quantidade de caixas que serão separadas. Essa etapa permite ao operador
decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre
adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura
que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do lado oposto da indução:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para
coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de
forma que o operador inicie a coleta a partir do ponto mais longe da indução. Isso
otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao
ponto de indução de forma mais eficiente. Isso será feito atráves do cadastro de ruas
que deve informar se seguira a ordenação de endereço de forma crescente ou
decrescente.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo
operacional.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 8.2. Order Start Full Case  
**Score:** — (semantico) | **ID:** 0bcafb90d4c41d99

Os volumes full case são compostos por caixas fechadas (fracionadas ou não), separadas
diretamente pelo WMS, e não passam pelo processo de separação nem pelo Order Start do
WCS.
Para que o desvio seja realizado corretamente no sorter, os volumes full case devem estar
devidamente integrados no WCS via Integração de Remessa / Pedido. A integração de Picking
Confirm não se aplica a esses volumes.
A conferência do Full Case ocorre pela balança dinâmica pré-portal do sorter (crosscheck por
peso). Full Case não passa pela conferência de fracionado.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 11. Layouts de Impressão  
**Score:** — (semantico) | **ID:** d8db29c14e1c579b

O projeto utilizará uma etiqueta única para todos os tipos de volume (fracionado, full case e
exceção). O campo Nota Fiscal (NF) não constará na etiqueta pois ela nasce no Order Start. O
identificador único do volume na automação será o DataMatrix.
Responsabilidade de impressão: WMS Spark é responsável pela montagem e envio do ZPL
via integração de remessa. O WCS recebe o ZPL e comanda a impressão nas impressoras físicas
vinculadas a cada posto (Zebra ZT230). WMS também será responsável pela impressão da
Etiqueta de Reabastecimento.
Teremos duas variações do resultado que vem nesse datamatrix:
O Fullcase vem com 5 informações, sempre separadas por ponto e vírgula e em
formato de texto (mesmo sendo numérico) e a informação que precisamos é a quarta,
que segue o formato:
o
Formato: “coditem;fator;endcoleta;COD;id”.
o
Exemplo: “030770;1;CA09-19-01-02;63759024;6521775”.
No Fracionado a única informação que chega no Datamatrix é a que precisamos.
Obs: Foi informado que essa que esse código do item pode variar de tamanho, então devemos
considerar as regras acima para identificação.
Exemplo da Etiqueta:

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 14.2 Priorização Manual  
**Score:** — (nome-topico) | **ID:** ff5108be7ccf975f

A priorização manual é aplicada quando, durante a operação, os usuários do sistema WCS
identificam a necessidade de antecipar a retirada ou expedição de determinados pallets,
independentemente da ordem automática previamente estabelecida. Nesses casos, o operador
poderá atribuir uma prioridade manual, utilizando uma escala de 1 (prioridade máxima) a
5 (prioridade mínima) diretamente na interface do sistema.
As tarefas com prioridade manual têm precedência sobre as tarefas com prioridade
automática. Ou seja, se houver uma tarefa automática com prioridade 1 aguardando execução
e um operador definir manualmente outra tarefa também com prioridade 1, o WCS deverá
executar primeiro a tarefa com prioridade manual.
Esta prioridade poderá ser feita pelo número do pallet ou priorizar todas as ordens para
determinada saída.
Essa funcionalidade garante flexibilidade operacional para lidar com situações não previstas pela
lógica automatizada, assegurando agilidade e controle em decisões críticas da rotina logística.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 14.3 Order Start  
**Score:** — (nome-topico) | **ID:** 452a2ab032ad7fc3

A automação conta com dois portais de entrada, que podem ser utilizados indistintamente
para qualquer tipo de produto, seja ele congelado ou resfriado. Não há restrição operacional
quanto à associação de um tipo específico de produto a um portal específico, permitindo maior
flexibilidade na operação.
Entretanto, antes da indução de qualquer pallet em um dos portais de entrada, é
imprescindível que a integração entre o SAP e o WCS tenha sido realizada com sucesso,
garantindo que o sistema possua as informações necessárias para validar e direcionar
corretamente o pallet.
A integração do pallet que é enviada pelo SAP ao WCS deve ser disparada apenas quando a
conferência do pallet for totalmente realizada.
Sempre o SAP enviará o palete para a posição AENTR_AV, e o WCS irá retirar o palete do
AENTR_AV e destinar para a posição de destino. Após o pallet ser alocado no destino, o WCS
deverá informar o SAP a posição final do pallet.
O WCS deverá estar preparado para receber paletes de dois ou mais centros. Esta informação é
enviada via IDOC pelo SAP a cada pallet.
Atualmente é utilizado dois centros "1610 e 1611" e o sistema deve garantir o
recebimento/abastecimento para este dois centros, oriundos de uma mesma carreta (10 paletes
centro 1610 e 10 paletes centro 1611) e de carretas diferentes. Os dois centros não alteram em
nenhuma tratativa sistêmica realizada pelo WCS, porém deve ser exibidos o centro de cada pallet
em tela para auxilio e visibilidade da operação.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 7. Fluxo Operacional  
**Score:** — (semantico) | **ID:** 7366f203ac5e92e8

O Order Start de Fracionado(PBL e Picking Cart) e o Order Start de Full Case são liberados
simultaneamente pelo WCS. O operador pode iniciar tarefas em ambas as frentes em paralelo,
sem necessidade de aguardar o término de uma para começar a outra. Cada modalidade segue
seu próprio fluxo, descrito nas seções a seguir, e a consolidação entre Fracionado e Full Case da
mesma remessa ocorre no fim do processo de coleta Full Case.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Order Start Fracionado  
**Score:** — (semantico) | **ID:** 3aaaf6425b83b8ba

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos
previstos, incluindo os dados de cubagem e quantidade de cada item.  O WCS identifica os
pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In,
First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados, a ordenação
inicial será agrupada por Remessa. Com base nas informações recebidas, o WCS realiza o
cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada missão
(pedido). O sistema calcula quantos volumes serão necessários para cada missão.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start,
onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo
de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada missão com
base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e
quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a
impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a
etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o
processo de separação do pedido.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Order Start – Picking Cart  
**Score:** — (semantico) | **ID:** 82bc583c92f2be22

O processo de Order Start do Picking Cart segue a mesma lógica já em produção no projeto BETA
SP para o Picking by Light: o operador mapeia as posições do carrinho antes de iniciar a
separação, garantindo o vínculo entre cada caixa e seu respectivo slot físico. Como regra crítica,
uma mesma caixa/volume nunca conterá itens de mais de uma remessa — o WCS é responsável
por garantir essa segregação durante a alocação dos volumes no carrinho.
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
Ao acessar a tela, o operador visualizará a lista de tarefas disponíveis para início, organizadas
conforme a prioridade definida na integração com o sistema Velox. Caso necessário, será possível
realizar o ajuste manual da prioridade diretamente no WCS.
Para dar início ao processo de Order Start, o operador deverá informar a quantidade de etiquetas
a serem impressas, sendo o valor padrão o máximo suportado pelo Picking Cart. Após a
confirmação, o sistema realizará a impressão das etiquetas de acordo com a prioridade definida,
respeitando o limite de capacidade do Picking Cart.
Após a impressão das etiquetas, o processo seguirá para a etapa de mapeamento das posições
do Picking Cart, onde cada etiqueta será associada a uma posição física do carrinho.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 4f0f8342aa32c317

Após a integração da onda de pedidos, o WCS identifica as tarefas de Picking Full Case e as tarefas de Reabastecimento para coleta. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas, englobando tanto os itens destinados ao picking full case quanto os itens de reabastecimento das posições de Picking Fracionado.
O operador deve seguir os passos descritos abaixo para iniciar a tarefa de separação, que agora contempla de forma unificada ambos os tipos de coleta em um único fluxo operacional.
Fluxo Operacional do Order Start Full Case
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Início da Tarefa:
O WCS determina automaticamente a quantidade de itens a coletar na leva, considerando tanto os itens de Full Case quanto os itens de Reabastecimento presentes na rua selecionada, respeitando os parâmetros de:
peso máximo do pallet de coleta; e
cubagem máxima do pallet de coleta.
O WCS irá compor a leva de coleta mesclando os itens de Full Case e Reabastecimento da rua selecionada, de modo que o operador realize a coleta de ambos os tipos em uma única passagem pela rua.
O operador realiza a separação e consolida os itens no pallet correspondente à Tarefa.
O peso e cubagem máxima será cadastrada em uma tela de parâmetros do WCS.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
As etiquetas serão diferenciadas visualmente conforme o tipo de item: etiqueta de Picking Full Case para itens destinados ao sorter, e etiqueta de Reabastecimento para itens destinados às posições de Picking Fracionado, conforme layouts descritos no tópico 12 (Layouts de Impressão).
Ordem de Coleta Vinculada à Impressora do Posto de Impressão:
Na operação de Order Start Full Case, a sequência de coleta das posições na rua (crescente ou decrescente) será definida com base na impressora selecionada pelo operador no posto de impressão.
Cada impressora deverá estar previamente configurada no WCS com uma regra específica de ordenação de coleta (crescente ou decrescente).
Ao selecionar a impressora no momento da impressão das etiquetas, o WCS deverá aplicar automaticamente a sequência correspondente, direcionando o operador a iniciar a coleta a partir do início ou do final da rua, conforme a configuração associada à impressora. O coletor deve refletir também essa ordenação para exibir os endereços pendentes.
Essa abordagem permite maior flexibilidade operacional, adequando o fluxo de separação ao layout físico, ponto de indução e estratégia logística de cada área.
A ordenação unificada se aplica tanto aos itens de Full Case quanto aos itens de Reabastecimento, garantindo que o operador percorra a rua uma única vez para coletar ambos os tipos.
Identificação dos Itens na Tela de Coleta:
Na tela de coleta do coletor Android, o WCS deve agrupar as tarefas, distinguindo apenas pela etiqueta impressa.
Os itens de Full Case seguirão o fluxo normal de indução no sorter após a coleta.
Os itens de Reabastecimento serão induzidos na esteira e o WCS direcionará cada volume para a área específica de reabastecimento, mantendo a rastreabilidade e a organização dos volumes para posterior utilização nas posições de Picking Fracionado.
Destinação dos Volumes Após Coleta:
Volumes Full Case: Após a coleta e etiquetagem, o operador induz os volumes na esteira. O WCS direciona cada volume via sorter para a rampa de destino correspondente à transportadora/rota.
Volumes de Reabastecimento: Após a coleta, o operador induz o volume na esteira e o WCS direciona cada volume para a área específica de reabastecimento. Após o desvio do volume no ponto de reabastecimento, o WCS gera automaticamente uma tarefa de reabastecimento para movimentação da caixa fechada até a posição final de Picking Fracionado.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo operacional.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Dashboard Operacional – Monitoramento de Order Start  
**Score:** — (semantico) | **ID:** b2d7eab60a8fc371

O WCS disponibilizará um Dashboard Operacional de Order Start, com o objetivo de fornecer visibilidade em tempo real da carga de trabalho por posto de Order Start, permitindo melhor balanceamento operacional e a identificação de gargalos nas ruas de separação.
Informações Apresentadas no Dashboard
O dashboard apresentará, de forma consolidada, as seguintes informações:
Visão por Order Start
Para cada posto de Order Start, serão exibidos:
Identificação do Order Start
Quantidade de pedidos pendentes
Indicativo de Carga por Rua
O dashboard também apresentará um indicador de concentração de tarefas por rua, destacando:
Ruas com maior volume de tarefas pendentes
Quantidade de tarefas pendentes por rua
Esse indicativo poderá ser apresentado por ranking, destaque visual ou alerta, auxiliando o time operacional na tomada de decisão para redistribuição de atividades ou priorização de reabastecimento.
Objetivo do Controle
Esse dashboard tem como finalidade:
Monitorar a distribuição de pedidos por Order Start
Evidenciar ruas críticas com maior concentração de tarefas
Apoiar decisões de balanceamento de fluxo e recursos

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 8d32531c9947c2cc

Será definido um parâmetro de peso mínimo para liberação da separação de pedidos. Esse
valor será utilizado para avaliar se o pedido pode seguir para o processo de separação,
considerando a soma do peso dos itens e a disponibilidade de PTLs. A liberação ocorrerá
apenas quando o pedido atingir ou ultrapassar esse peso mínimo. O parâmetro será
configurado conforme as necessidades do cliente.
O operador deve acessar o sistema WCS através do desktop, autenticando-se com suas
credenciais para iniciar o turno e garantir o registro correto de suas atividades.
NOTA: O usuário pode acessar somente um equipamento por vez, Caso no momento
do login no WCS, já exista outro equipamento conectado com as mesmas
credenciais, o WCS irá deslogar a conta da máquina antiga. É permitido somente um
equipamento por vez para o usuário.
Após realizar o login, o operador deverá acessar a tela do Order Start, que concentra as
operações de início das tarefas de separação, nessa tela ele escolhe o tipo de separação a ser
realizada (Full Case ou Pallet/Sorter) e, em seguida, clica no botão imprimir. A impressão das
etiquetas deve ser realizada antes de iniciar a separação, a impressão das etiquetas será
gerada automaticamente na impressora previamente configurada para uso naquele Order Start.
Após realizar o login no sistema WCS, o operador deve acessar a tela do Order Start,
responsável por iniciar as tarefas de separação. Nessa tela, o operador seleciona o tipo de
separação a ser realizada (Full Case ou Pallet Sorter) e, em seguida, deve clicar no botão
Imprimir para gerar as etiquetas correspondentes aos volumes.
A impressão é obrigatória para liberar qualquer processo de separação e ocorre
automaticamente na impressora previamente configurada para aquele Order Start. As
impressoras estarão alocadas em um ponto centralizado próximo ao setor de indução,
facilitando o acesso de todos os operadores e otimizando o fluxo de trabalho.
Somente após a impressão das etiquetas o sistema libera as tarefas de separação para o
operador. Nesse momento, as informações correspondentes são sincronizadas e
disponibilizadas no coletor portátil, permitindo que o operador inicie as coletas com todas as
instruções corretamente carregadas.
Controle de Reimpressão no Order Start
O acesso à reimpressão de etiquetas no Order Start será restrito a usuários com perfil
específico (supervisores ou líderes). Operadores comuns não poderão realizar reimpressões
diretamente.
A reimpressão, quando necessária, exigirá autorização de um desses usuários habilitados,
garantindo maior controle do processo e evitando reimpressões indevidas.
O sistema manterá o registro completo em log, incluindo o usuário que solicitou, o usuário que
autorizou a reimpressão, bem como data e hora do evento.
A lista de tarefas de separação disponível no Order Start será composta somente pelos itens
onde será possível realizar a alocação no PTL do sorter de imediato, ou seja, somente as
tarefas de separação em que os volumes possam ser alocados no PTL estarão disponíveis para
impressão e execução.
Order Start para caixas Full Case: O sistema libera a separação unitária (caixa a caixa) nas
posições de picking. As etiquetas correspondentes a essas caixas já serão previamente
impressas, e o operador realiza a coleta e etiquetação caixa a caixa, seguindo a orientação
fornecida pelo sistema, garantindo a rastreabilidade e organização dos volumes.
Order Start pallets fechados:  O método de separação será gerenciado pelo WCS e ativado
quando, em uma única onda de separação, a quantidade solicitada de um mesmo produto, para
múltiplos pedidos, atingir ou superar a quantidade equivalente a um pallet fechado.
Será impressa previamente uma etiqueta identificadora (master), que será um número
sequencial gerenciado pelo WCS. Essa etiqueta será utilizada para referenciar a tarefa de
separação (pega), e juntas a essa etiqueta serão impressas todas as etiquetas de volumes,
baseadas na quantidade de caixas que o pallet contém. Como o WMS envia a quantidade de
volumes por lastro e a quantidade de níveis, o WCS terá a informação de quantos volumes
poderão ser separados no pallet de uma única vez.
Order Start para Pendências: Este tipo de Order Start será utilizado exclusivamente para
tratar volumes com pendência de separação, como nos casos de short picking ou avarias
registradas. O WCS, ao detectar essas ocorrências durante a operação, registra a pendência
na tabela específica do WMS. Após validação e aprovação por parte do WMS, será liberado um
novo Order Start com o tipo "Pendência".
Neste Order Start, o operador receberá a nova tarefa contendo as quantidades aprovadas para
separação. As etiquetas poderão ser reimpressas pelo sistema, garantindo que apenas os
volumes autorizados sejam coletados e processados.
A separação ocorre normalmente nas posições de picking, com a rastreabilidade mantida em
todos os momentos. Esse processo garante que pendências não interfiram nas tarefas regulares
de separação e possam ser tratadas com controle operacional adequado.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 71a835d58a4f9743

Após o login, o operador acessa a tela de Order Start, onde são centralizadas as operações de
início da separação.
Fluxo:
1. Seleção de Tarefa
O operador seleciona o tipo de separação: Full Case, Pallet Sorter ou Pendências.
Define a rua de trabalho (quando aplicável).
2. Peso Mínimo para Liberação
A liberação das tarefas respeita o parâmetro de peso mínimo configurado, garantindo
que apenas volumes que atinjam ou superem esse limite sejam liberados, considerando
também a disponibilidade de PTLs.
3. Impressão de Etiquetas
As impressoras estão alocadas em ponto centralizado, próximo ao setor de indução,
otimizando o fluxo de trabalho.
A impressão é obrigatória para liberação das tarefas de separação.
O processo ocorre automaticamente em uma impressora previamente configurada para
aquele Order Start.
4. Controle de Reimpressão
A reimpressão de etiquetas é restrita a supervisores ou líderes e registrada em log, com
dados do solicitante, autorizador, data e hora, garantindo rastreabilidade e evitando
impressões indevidas.
5. Lista de Tarefas
A lista exibida no Order Start é composta apenas por volumes que podem ser
imediatamente alocados no PTL.
6. Order Start de Pendências
Pendências são tratadas em Order Start específico, liberado somente após aprovação
do WMS.
As etiquetas de pendência são geradas apenas para volumes autorizados, mantendo
rastreabilidade.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** 2. Especificação  
**Score:** — (semantico) | **ID:** b9d86e579f788226

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável
pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta
aplicação executará as rotinas de Order Start, Picking e Conferência, tendo como papel
fundamental a interface entre os sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto
armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente
(licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface
Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de
trabalho (Google Chrome).

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 4099cac508a1af96

O processo de Order Start será realizado por posto separadamente. Cada posto de Order Start
contará com PDV e impressora fornecida pelo cliente além de um scanner fornecido pela
Invent, além de possuir sua própria tela exclusiva de Order Start que será segregada por
postos.
Para iniciar o processo, o sistema WCS deve receber todas as informações do pedido para a
operação por meio da integração, conforme descrito na seção Integração da Missão. O
operador deve indicar em qual estação de trabalho estará operando.
Por meio dessa tela, o operador deverá selecionar a quantidade de etiquetas que deseja
imprimir para o pedido. Essa seleção será obrigatória para o início do processo. As etiquetas
serão geradas pelo WCS e corresponderão aos volumes de separação do pedido, garantindo a
identificação individual de cada volume.
Após a impressão, as etiquetas deverão ser retiradas pelo operador do posto para início da
coleta. A liberação dos pedidos deverá respeitar a ordem FIFO (First In, First Out), o WCS
deverá gerar um volume por posto mesmo que os itens do pedido caibam em uma única caixa,
dessa forma uma caixa nunca passará em dois postos diferentes.
No posto de picking, a etiqueta será lida e o volume será reconhecido pelo sistema WCS, dando
continuidade ao fluxo operacional conforme as regras definidas para a etapa de picking.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Separação no Posto  
**Score:** — (semantico) | **ID:** b5b8463bf6c07f27

O processo de picking será realizado utilizando tecnologia Pick-to-Light (PTL). Para iniciar a coleta,
o operador deverá realizar a leitura da etiqueta do volume impressa na etapa de Order Start. A
partir dessa leitura, o WCS acionará automaticamente os LEDs correspondentes aos endereços
de coleta, exibindo a quantidade de itens a ser coletada em cada posição.
Os volumes serão estruturados de forma a evitar que exista itens a serem coletados em mais de
um posto. Todo o conteúdo de um volume deverá ser separado integralmente dentro de um
único posto de picking, garantindo a segregação física e sistêmica do processo. Os postos de
separação serão fisicamente contínuos e posicionados lado a lado. Para evitar confusão
operacional, cada posto será identificado por cores alternadas exemplo, sendo o Posto 1 na cor
azul, o Posto 2 na cor laranja, o Posto 3 novamente na cor azul, e assim sucessivamente,
garantindo diferenciação visual clara entre os postos.
Os LEDs da posição acenderão, indicando as coletas a serem realizadas nessa face. O operador
deverá coletar o item conforme indicado no display do LED e confirmar a coleta pressionando o
botão do próprio dispositivo. Esse procedimento deverá ser repetido até que todos os LEDs sejam
atendidos.
Após a coleta de todos os itens do volume, os LEDs acenderão na cor verde, indicando o
encerramento da atividade de picking daquele volume. Com isso, o operador estará apto para
induzir a caixa novamente aos roletes livres e a realizar a leitura da próxima etiqueta de volume
e repetir o processo de coleta.
Cada posto de separação terá:
•

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no  
**Score:** — (semantico) | **ID:** 4e64dcc4153f7f35

Order Start, ele será removido da fila de pedidos pendentes para início.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Cancelamento após o Order Start: Caso o pedido seja cancelado após o início do Order  
**Score:** — (semantico) | **ID:** bfb221a372c055cb

Start, a coleta será interrompida. O operador ao bipar a etiqueta os leds acenderam em
vermelho indicando que não tem coleta vinculada àquele pedido.

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** e72161b074c481f4

Será 1 (um) Order Start no início da linha de fracionados, sendo o ponto de partida para a indução das caixas no sistema.
Para iniciar o processo, o WCS deverá receber via integração todas as informações dos pedidos a serem processados, incluindo ondas, volumes, tipos de caixas e informações de cubagem. O sistema permite que até 16 clientes sejam operados simultaneamente, organizando os pedidos em fila conforme a ordem de chegada das integrações.
Observação: Deverão ser integrados apenas os pedidos de clientes ativos na saída do sorter. Pedidos fora desse critério serão direcionados para rejeito.
A operação no sorter deve ser feita por ondas, sendo necessário finalizar toda a onda de clientes para iniciar a próxima.
Não existe regra de prioridade automatizada para os pedidos recebidos. Caso seja necessário priorizar um pedido específico, o operador deverá fazê-lo manualmente na tela do Order Start.
O operador terá disponível fisicamente um buffer de caixas montadas próximo ao Order Start. O WCS disponibiliza ao operador a lista de caixas necessárias, o operador realiza a impressão das etiquetas, fixa cada uma na caixa correspondente e induz as caixas na linha de separação. A caixa informada pelo WCS será a embalagem final utilizada em todos os processos da esteira até a entrega ao cliente, não havendo necessidade de reembalagem no setor de packing.

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** 9293253825d70c47

Após o WCS realizar os processos de Order Start, as caixas devidamente etiquetadas seguem para a linha de separação.
Cada posto terá:
1 (um) operador por posto.
1 (um) PDV por posto.
1 (um) Scanner de mão por posto.
O WCS não permitirá que o mesmo SKU esteja cadastrado em 2 postos diferentes, garantindo que não ocorra duplicidade de tarefas entre operadores.
Login: O operador deverá realizar o login na estação antes de iniciar a operação, por meio da leitura do código de barras do crachá no leitor fixo da linha. Caso a caixa chegue ao posto e não haja operador logado, o sistema bloqueia o início do picking e exibe mensagem de aviso no PDV.
Fluxo de separação: Ao chegar ao ponto de leitura, a etiqueta do volume é lida pelo scanner fixo e o WCS verifica se existem produtos a serem separados naquele posto. Se houver, a caixa para automaticamente e o PDV exibe os itens a serem coletados, incluindo: endereço de coleta, EAN esperado, quantidade solicitada e descrição.
O operador realiza a leitura do EAN de cada unidade individualmente. A cada leitura, o WCS decrementa a quantidade solicitada em tempo real na tela do PDV. Caso a separação seja de 10 (dez) itens do mesmo código, deverão ser lidos/bipados os 10 (dez) itens. O controle de lote é responsabilidade exclusiva do WMS— o WCS não realiza nenhum controle de lote.
Picking Costas: Após a separação dos itens da frente, caso existam itens a serem coletados na parte traseira, o PDV sinaliza os itens restantes com destaque na cor amarela, identificando a coleta como "Picking Costas".
As linhas dos itens na tela do PDV serão diferenciadas por cores:
Transparente: item em separação.
Verde: separação finalizada (completa ou com shortpicking).
Vermelho: item com corte realizado pelo operador.
Caso seja lido um item não solicitado, o sistema emitirá mensagem de aviso alertando que o item não deve ser separado.
Ao finalizar toda a coleta, o operador confirma no PDV e a caixa é liberada para seguir na esteira. O envio das informações de separação ao WMS será realizado a cada posto, para otimizar o processo de reabastecimento em casos de corte.
Pede Caixa: Caso o operador identifique que os itens solicitados não caberão fisicamente na caixa atual, poderá pressionar o botão "Pede Caixa" no PDV. O WCS finaliza a separação da caixa atual com os itens já coletados, a caixa segue para o final da linha, e o WCS envia ao WMS a integração de Pede Caixa (seção 4.4) com as informações dos itens excedentes para que o WMS gere uma nova etiqueta e volume. No Order Start, a caixa adicional desse pedido será priorizada como próxima a ser enviada para a linha. O operador fará a separação somente dos itens que não couberam na caixa anterior.
Shortpicking: Caso o operador identifique que a quantidade física disponível é menor que a solicitada, deverá pressionar o botão "Finalizar Picking" no PDV. O sistema registra o shortpicking e envia ao WMS apenas a quantidade efetivamente separada. Exemplo: pedido solicita 10 unidades, operador encontra apenas 8 — bipa as 8 unidades e finaliza o picking.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** fdd91cd8c829da1f

Order Start fracionado e Picking Cart não contemplados neste escopo. Apenas o fluxo de Order Start Full Case é aplicável a este projeto.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 715f63d701904c7b

O Order Start Full Case é feito em um posto de gestão central (desktop). O operador seleciona a rua ou setor a separar e o WCS gera e imprime em lote as etiquetas Master nas [A DEFINIR] impressoras dedicadas ao setor — fornecido pelo Cliente. O operador precisa ter as etiquetas em mãos antes de ir aos corredores, garantindo continuidade na separação sem precisar retornar ao terminal.
Nota operacional: a impressora é utilizada para emissão de etiquetas IVT na fase anterior à implantação da IA. Após a implantação, o fluxo de etiquetagem será revisado conforme o novo processo.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 5. Order Start  
**Score:** — (nome-topico) | **ID:** 06b0e07bbddd2562

Para iniciar o processo, o sistema WCS, deverá receber via integração todas as informações dos
pedidos para separação de fracionados e desvios corretos de full case, previstos para a operação
atual.
