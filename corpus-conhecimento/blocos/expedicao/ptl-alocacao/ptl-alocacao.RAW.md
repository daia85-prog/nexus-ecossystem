# ptl-alocacao.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 14.2. Sugestão alocação de curva ABC  
**Score:** — (semantico) | **ID:** 7d3b3f614d5d1cae

O sistema WCS será responsável pela sugestão de alocação de curva ABC.
O principal objetivo da sugestão de alocação de curva ABC é otimizar a eficiência
operacional no CD C&A, determinar as prioridades de posições e organizar os produtos nas
posições de picking. O Conceito será por PEGA.
Administração PEGA: O sistema WCS será responsável por gerenciar o ciclo completo de
pega, desde a definição de critérios até a execução das alocações. Esse processo será iniciado
automaticamente a partir do primeiro mês de operação, sendo configurável conforme as
necessidades da operação.
Parâmetro para definir o range de data para Sugestão de Alocação: Será necessário
incluir um parâmetro de configuração no sistema WCS para definir o range de data a ser
considerado ao gerar sugestões de alocação.
Definição do Range de Data: O range de data será configurável, permitindo que o
administrador do sistema defina intervalos de tempo para quando a sugestão de
alocação deverá ser gerada. Por exemplo, o parâmetro pode ser ajustado para sugerir
alocações para uma janela de 7, 15 ou 30 dias, conforme as necessidades.
Função do Parâmetro: Este parâmetro será utilizado para gerar automaticamente
sugestões de alocação dentro do intervalo de datas selecionado, considerando dados
históricos de vendas, demanda, e outras variáveis relevantes.
Interface de Configuração: O administrador do sistema WCS terá acesso a uma
interface de fácil utilização para configurar e ajustar esse parâmetro.
Exibição na tela Quantidade de PEGAS por Produto: A quantidade de pegas por
produto será exibida em uma tela de dashboard ou relatório, com filtros para
visualizar por produto, categoria ou data.
Para facilitar o acompanhamento e o controle, a tela do sistema WCS deverá mostrar a
quantidade de PEGAS por produto. Essa exibição permitirá aos operadores e gestores
visualizarem rapidamente a alocação de cada item, o que melhora a tomada de decisão.
Exemplo de Exibição:
Produto
Quantidade de
PEGAS
Status da
Alocação
Código do Produto
Data de Alocação
Produto A
Alocado
2025-04-30
Produto B
Em processo
2025-04-30
Produto C
Concluído
2025-04-29
Itens curva A – Itens de alta prioridade devem ficar alocados nas áreas de picking
mais acessíveis e próximas ao ponto de saída. Com isso, reduzimos o tempo de
deslocamento dos operadores, aumentando a eficiência dos responsáveis pela
separação.
Itens curva B – Itens de prioridade intermediaria, devem ficar alocados em áreas de
facil acesso, mas não necessariamente tão próximas quanto os itens de curva A.
Itens curva C – Itens de baixa prioridade, devem ficar alocados nas áreas mais
distantes dos pontos de saída, onde a visita nesses endereços é menos frequente.
O sistema WCS, baseado nos índices de produtos por separação, fará a sugestão de
alocação de curva ABC, operador assim terá a possibilidade de verificar a sugestão do
sistema WCS, e caso seja necessário realizar alteração, deverá alterar o posicionamento dos
produtos nos endereços sugeridos pelo WCS.
A sugestão de alocação será no sistema do WCS, a decisão de alterar o mapeamento
dos produtos, será da operação.
O sistema WCS deverá gerar um relatório para analisar os itens que mais vendem e
suas classificações para revisão operacional e rebalanceamento.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Sugestão alocação de curva ABC  
**Score:** — (semantico) | **ID:** dd56dc946ea307c1

O sistema WCS será responsável pela sugestão de alocação de curva ABC.
O principal objetivo da sugestão de alocação de curva ABC é otimizar a eficiência operacional no CD C&A, determinar as prioridades de posições e organizar os produtos nas posições de picking. O Conceito será por PEGA.
Administração PEGA: O sistema WCS será responsável por gerenciar o ciclo completo de pega, desde a definição de critérios até a execução das alocações. Esse processo será iniciado automaticamente a partir do primeiro mês de operação, sendo configurável conforme as necessidades da operação.
Parâmetro para definir o range de data para Sugestão de Alocação: Será necessário incluir um parâmetro de configuração no sistema WCS para definir o range de data a ser considerado ao gerar sugestões de alocação.
Definição do Range de Data: O range de data será configurável, permitindo que o administrador do sistema defina intervalos de tempo para quando a sugestão de alocação deverá ser gerada. Por exemplo, o parâmetro pode ser ajustado para sugerir alocações para uma janela de 7, 15 ou 30 dias, conforme as necessidades.
Função do Parâmetro: Este parâmetro será utilizado para gerar automaticamente sugestões de alocação dentro do intervalo de datas selecionado, considerando dados históricos de vendas, demanda, e outras variáveis relevantes.
Interface de Configuração: O administrador do sistema WCS terá acesso a uma interface de fácil utilização para configurar e ajustar esse parâmetro.
Exibição na tela Quantidade de PEGAS por Produto: A quantidade de pegas por produto será exibida em uma tela de dashboard ou relatório, com filtros para visualizar por produto, categoria ou data.
Para facilitar o acompanhamento e o controle, a tela do sistema WCS deverá mostrar a quantidade de PEGAS por produto. Essa exibição permitirá aos operadores e gestores visualizarem rapidamente a alocação de cada item, o que melhora a tomada de decisão.
Sugestão de Exibição:
Produto | Quantidade de PEGAS | Status da Alocação | Código do Produto | Data de Alocação
Produto A | 100 | Alocado | 10 | 2025-04-30
Produto B | 50 | Em processo | 20 | 2025-04-30
Produto C | 200 | Concluído | 30 | 2025-04-29
Itens curva A – Itens de alta prioridade devem ficar alocados nas áreas de picking mais acessíveis e próximas ao ponto de saída. Com isso, reduzimos o tempo de deslocamento dos operadores, aumentando a eficiência dos responsáveis pela separação.
Itens curva B – Itens de prioridade intermediaria, devem ficar alocados em áreas de facil acesso, mas não necessariamente tão próximas quanto os itens de curva A.
Itens curva C – Itens de baixa prioridade, devem ficar alocados nas áreas mais distantes dos pontos de saída, onde a visita nesses endereços é menos frequente.
O sistema WCS, baseado nos índices de produtos por separação, fará a sugestão de alocação de curva ABC, operador assim terá a possibilidade de verificar a sugestão do sistema WCS, e caso seja necessário realizar alteração, deverá alterar o posicionamento dos produtos nos endereços sugeridos pelo WCS.
A sugestão de alocação será no sistema do WCS, a decisão de alterar o mapeamento dos produtos, será da operação.
O sistema WCS deverá gerar um relatório para analisar os itens que mais vendem e suas classificações para revisão operacional e rebalanceamento.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Tela de Romaneios  
**Score:** — (semantico) | **ID:** a813dfec568ed6f1

A tela de Romaneios permite que a operação visualize e inicie os romaneios que terão suas
tarefas de separação liberadas, garantindo controle sobre quais serão processados no Order
Start e alocados no PTL. O WCS exibe todos os romaneios recebidos, ordenados por data de
integração, mostrando informações como número do romaneio e status (Pendente, Iniciado ou
Finalizado). A tela também oferece funcionalidades de busca por romaneio específico e filtros
por data ou status, facilitando a gestão e priorização dos romaneios a serem processados.
Para iniciar o processamento, o operador seleciona um ou mais romaneios, e o WCS reserva
automaticamente as posições de PTL e libera as tarefas de separação correspondentes nos
Order Start. Romaneios não iniciados nesta tela não terão suas tarefas liberadas, garantindo
autonomia da operação para definir quais volumes irão processar. Após a execução, o sistema
confirma ao operador que as tarefas foram liberadas e as posições de PTL foram reservadas
corretamente.
OBS: na tela de romaneio deve ser exibido a previsão de posições de PTL a serem utilizadas
para que a operação possa cadastrar o mapa de sorter de forma assertiva.
Comportamento de capacidade: o sistema permite o início de romaneios sem limite numérico.
Romaneios cuja previsão de PTL exceda a capacidade disponível (192 posições — 24 por rampa
× 8 rampas) entram em fila natural — os volumes são liberados para coleta no Order Start
conforme as posições de PTL vão sendo desocupadas (fechamento de pallets em andamento).

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Agrupamento por Subárea  
**Score:** — (semantico) | **ID:** ce7ecdda359e48d9

Para pedidos cuja transportadora seja diferente de “Própria”, o agrupamento dos pallets
no PTL não será realizado com base no romaneio, e sim na subárea informada na integração
de Trabalhos – Work (item 6.4).
Essa mudança garante que o agrupamento dos volumes e pallets siga a lógica operacional de
transporte do cliente, refletindo com precisão a divisão logística estabelecida no WMS.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Processo de Picking Exceção  
**Score:** — (semantico) | **ID:** 67f7294e5c7634b7

O Picking Exceção será utilizado para itens que não se enquadram nos parâmetros da
automação, mas que devem ser alocados manualmente no processo de PTL (Put to
Light). O fluxo operacional será semelhante ao processo de Full Case, mas com a
diferença de que os itens não farão parte da automação e serão direcionados manualmente
para a alocação no PTL.
Fluxo Operacional de Picking Exceção:
O operador realiza o login no WCS utilizando o coletor Android.
O operador seleciona a tela de Picking Exceção, onde escolhe o posto de impressão
em que está fisicamente para retirar as etiquetas.
Após selecionar o posto de impressão, o operador escolhe a rua da qual ele irá fazer o
Picking Exceção. O sistema exibirá a lista de tarefas de separação de acordo com a
rua selecionada e os volumes disponíveis.
As tarefas de Picking Exceção serão segregadas por rampa do Sorter, permitindo
que o operador saiba para qual rampa deve levar os itens após a coleta.
O operador seleciona quantas tarefas deseja iniciar.
O WCS imprime a quantidade selecionada, seguindo a lógica de impressão do processo
de Full Case.
O coletor é direcionado para a tela de coleta, onde o operador deve se deslocar até o
endereço especificado no coletor.
O operador realiza a leitura do endereço para iniciar a coleta do item.
O operador realiza a leitura da etiqueta impressa e depois realiza a leitura do código do
item, colocando o item no carrinho.
O operador se desloca para o próximo endereço e repete o processo até concluir todas
as coletas.
Alocação no PTL:
Após finalizar todas as coletas, o WCS informa em qual rampa do sorter os itens
coletados devem ser alocados.
Ele deixará o os volumes a disposição do operador de PTL responsável a rampa onde
ele fará o processo de PTL
Cada volume será associado à sua respectiva posição de PTL, e o operador deverá
alocar os itens manualmente, confirmando a alocação no PTL.
Esse processo de Picking Exceção garante que itens que não se enquadram no processo
automatizado sejam tratados manualmente de forma eficiente e organizada, mantendo a
rastreabilidade e a precisão durante a separação dos volumes e a alocação nas posições de
PTL.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Put To Light (PTL)  
**Score:** — (semantico) | **ID:** 4b673cb653282012

O sistema WCS realiza a abertura automática das posições PTL no momento em que os
romaneios são iniciados na tela de romaneios, o WCS irá distribuir os romaneios para as
posições de ptl de forma dinâmica priorizando manter um romaneio em uma única rampa
sempre que for possível.
Para iniciar a operação do PTL, o operador da rampa deve realizar login no sistema, realizando
a leitura do código de usuário, possibilitando o mapeamento e a alocação correta dos volumes.
Ao receber uma caixa na rampa, o operador realiza a leitura do QR code da etiqueta do volume.
Em seguida, o display da posição PTL correspondente acende, indicando o local (posição do
pallet) onde o volume deve ser alocado um mesmo led será utilizado para dois endereços, no
led deve exibir o final do código do endereço para que o operador saiba em qual posição
colocar. O operador aloca o volume na posição indicada e confirma o posicionamento
pressionando o botão do display, encerrando a tarefa daquele volume.
O LED do PTL possui display numérico de 3 dígitos. Serão exibidos os 3 últimos caracteres do
código da posição de PTL para identificação pelo operador.
A cada confirmação de alocação, o WCS registra a quantidade conferida e atualiza essas
informações no sistema. Após a alocação e confirmação no display, o operador retorna à rampa
para processar o próximo volume.
Cada rampa do sorter conta com 24 posições de PTL, totalizando 192 posições no total. Cada
posição é equipada com um LED que fará a sinalização visual do local correto para alocação do
volume.
A cubagem do pallet será realizada pelo WCS previamente, através do cadastro de parâmetros.
O fechamento do PTL poderá ocorrer por peso ou cubagem atingida, ou ainda pela totalidade
do pedido. O operador poderá realizar o fechamento do pallet manualmente, caso julgue
necessário. No entanto, o WCS não permitirá o fechamento do pallet quando ainda houver
volumes pendentes, conforme a quantidade parametrizada, garantindo que não seja aberto um
novo pallet para a alocação de poucos volumes.
Após o fechamento do pallet é impresso uma etiqueta na rampa do sorter para que o operador
identifique o pallet e confirme o fechamento, tornando a posição disponível novamente nesse
momento é enviado a integração de expedição informando o conteúdo do pallet para que o
wms siga com o faturamento. O WCS reserva o lugar de cada volume nos pallets antes mesmo
do volume chegar na rampa, sendo possível assim colocar os volumes no pallet respectivo
respeitando a sequência de entrega.
Tratamento de Volumes com Itens Perigosos
Para volumes que contenham itens classificados como perigosos, o WCS deve aplicar uma
regra específica de manuseio e agrupamento. Esses volumes não podem ser misturados aos
demais e deverão ser agrupados em um pallet exclusivo, segregado dos pallets comuns.
Além disso, o sistema deve garantir que esse pallet com itens perigosos seja identificado de
forma distinta e programado para ser o último a ser carregado
PTL Exclusivo para Produtos Específicos
Será incluído um campo no cadastro de produtos para identificar quais itens exigem PTL
exclusivo durante o processo de alocação. Quando um produto for marcado com essa flag, o
sistema WCS irá automaticamente reservar uma posição de PTL exclusiva para ele, garantindo
que os volumes contendo esses itens sejam alocados de forma segregada. Este pallet deve ser
programado para ser o penúltimo a ser carregado.
Essa configuração será aplicada a todos os produtos pertencentes ao mesmo romaneio, desde
que esses produtos tenham a flag de PTL exclusivo ativada no cadastro. Ao receber um pedido
contendo produtos com essa característica, o sistema realizará a alocação de forma a garantir
que todos os volumes relacionados a esses itens sejam direcionados para as posições de PTL
previamente reservadas, sem misturá-los com outros volumes no processo de alocação.
Para produtos com a flag de PTL exclusivo ativa que ultrapassem qualquer uma das dimensões
do pallet o WCS deve considerar uma cubagem mínima sendo possível alocalos ao pallet
Agrupamento por Subárea (Transportadoras Diferentes de “Própria”)
Para pedidos cuja transportadora seja diferente de “Própria”, o agrupamento dos pallets no
PTL não será realizado com base no romaneio, mas sim na subárea informada na integração
de Trabalhos – Work (item 6.4).
O campo subArea enviado na integração será utilizado pelo WCS como agrupador logístico
principal, permitindo que os volumes sejam separados fisicamente por destino final, para
transportadoras parceiras.
Regras operacionais:
Quando transportadora ≠ “Própria”, o WCS deve agrupar os volumes e pallets por
subárea, ignorando o agrupamento por romaneio.
Cada subárea será considerada uma entidade independente de agrupamento,
possuindo sua própria posição de PTL na rampa correspondente.
O fechamento dos pallets ocorrerá de forma individual por subárea, seguindo as
mesmas regras de cubagem e peso.
O sistema deve permitir que múltiplas subáreas coexistam em uma mesma rampa,
desde que cada uma possua posição reservada exclusiva.
Exemplo:
Se um romaneio contiver volumes destinados às subáreas “Porto Alegre”, “Canoas” e “Esteio”, o
WCS criará três agrupamentos distintos no PTL, um para cada subárea, alocando os volumes em
posições exclusivas de acordo com o destino logístico.
Essa regra assegura rastreabilidade por destino, e atende da melhor forma o trabalho das
transportadoras parceiras, auxiliando na segregação dos volumes que hoje é feita manualmente.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** PTL, e Pallets Termolábeis  
**Score:** — (semantico) | **ID:** cde1091295e9fc94

Para os pallets gerados nos processos de PTL e Picking Termolábil, será utilizado o seguinte
layout de impressão:

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Parâmetros por transportadora  
**Score:** — (semantico) | **ID:** 42ee1b8faf89475c

Campo de Configuração Principal
Realiza Paletização? (Sim / Não)
Não → O WCS atualiza o status do volume imediatamente após o volume ser desviado
na rampa.
Sim → O WCS realiza o fluxo completo de alocação, atualizando o status do volume
somente após a alocação.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.10. PTL  
**Score:** — (nome-topico) | **ID:** 82b30de5cf210401

Ao iniciar a operação, o operador da saída do sorter deverá realizar o login na rampa para que
consiga mapear e alocar os volumes nas posições indicadas.
Após o desvio do volume na rampa correta o operador pode realizar a leitura do volume (caixa)
através do scanner da rampa, uma vez que o WCS recebe a informação do código da caixa ele
acende o led da posição de PTL informando onde o operador deve colocar o volume ou acenderá
todos os leds do posto de PTL vinculado ao scanner que realizou a leitura na cor vermelha
informando que o volume não pertence a nenhuma das posições presentes no posto PTL.
Quando o volume pertence a uma posição do posto o WCS acenderá o led correspondente a
posição PTL como informado acima e o operador deve colocar o volume no pallet e em seguida
confirmar apertando o botão do led, assim o WCS identifica a alocação e guarda essas
informações para enviar posteriormente ao WMS.
No decorrer das alocações de volumes ao pallet o WCS verifica a cubagem e peso como
mencionado do item Cubagem de pallet, indicando que o pallet deve ser fechado ao operador
através de uma cor especifica no led, sendo que a cada pallet fechado é retornado uma integração
para o WMS.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar
a leitura de um código master impresso previamente pelo WMS que será vinculado aos volumes
que foram alocados a este pallet. A master (Avulsa) é impressa sem um destino definido
(LOJA).
O WCS não deve permitir a reutilização desses códigos.
A disponibilização desta etiqueta master será de responsabilidade do cliente.
Em caso de rejeito, o operador terá uma tela que irá exibir o diagnóstico de erro deste volume e
poderá induzir novamente caso for necessário.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 981c6294d088f2a0

Ao iniciar a operação, o operador da saída do sorter deverá realizar o login na rampa por meio da leitura de um código de produtivo para que consiga mapear e alocar os volumes nas posições indicadas.
Etiquetas utilizadas no processo PTL:
Etiqueta PTL: QR Code fixo instalado em cada posição da estação PTL. Utilizada para abertura e fechamento do palete.
Etiqueta OLPN: Gerada pelo WMS, contém um código único de 15 a 18 dígitos. Identifica de forma única cada palete de saída e garante a rastreabilidade.
Abertura do palete (obrigatória antes de iniciar a indução): O operador faz duas leituras sequenciais — primeiro a Etiqueta PTL (QR Code) da posição, depois uma Etiqueta OLPN (15 a 18 dígitos) — criando o vínculo OLPN ↔ posição PTL. Só então o sistema permite a alocação.
Alocação de volumes — Dupla Confirmação (configurável): O sistema possui uma opção na tela de configuração chamada Dupla Confirmação de Bipagem:
Ativada: Primeiro a etiqueta do volume (IVT) — LED laranja (aguarda 2ª confirmação); depois o código da caixa (DUN/EAN) — LED azul (vínculo completo).
Desativada: Apenas uma leitura é necessária. O operador escaneia a etiqueta IVT ou o DUN do volume e o LED acende diretamente em azul.
Em ambos os modos, caso o volume não pertença a nenhuma das posições da estação PTL, o WCS acenderá todos os LEDs da estação em vermelho.
Quando o LED está em azul e o volume pertence à posição, o operador deve depositar a caixa no palete e confirmar apertando o botão do LED azul. Nesse momento, o WCS registra a alocação e envia a integração caixa a caixa ao WMS.
Fechamento do palete (manual): O fechamento do palete é realizado manualmente pelo operador, que avalia visualmente quando o palete atinge um tamanho adequado. Para fechar, o operador escaneia a Etiqueta PTL (QR Code) os LEDs acendem em laranja e em seguida escaneia a Etiqueta OLPN, o LED muda para azul confirmando o fechamento. O operador cola a etiqueta OLPN no palete físico e aperta o botão. Nesse momento, o WCS envia a integração de palete montado ao WMS.
Continuação da operação (reabertura): Se após o fechamento ainda houver caixas pendentes para aquela posição PTL, o operador deve abrir um novo palete escaneando novamente a Etiqueta PTL (QR Code) e uma nova Etiqueta OLPN (novo código de 15 a 18 dígitos gerado pelo WMS), criando um novo vínculo. O fluxo de alocação segue normalmente.
O WCS não deve permitir a reutilização de códigos OLPN. A disponibilidade das etiquetas OLPN é de responsabilidade do cliente (WMS).
Em caso de rejeição, o sistema exibirá uma tela mostrando o diagnóstico de erros para esse volume, permitindo ao operador tentar recuperá-lo novamente, se necessário.
Etiqueta de PTL:
Em todos os processos após a finalização do pallet enviamos as informações descritas no tópico “Pallet Montado” para o WMS fazer as tratativas necessárias.
A impressão da etiqueta OLPN é de responsabilidade do WMS.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Exceções do PTL  
**Score:** — (semantico) | **ID:** a97653ff6aebbd01

Reativação do PTL e janela de fechamento/reabertura
Após o fechamento de um pallet, o PTL só volta ao estado ativo após ação manual do operador:
Etapa | Ação | Estado do PTL
(0) Fechamento do pallet | Operador fecha o pallet; o WCS envia a integração Pallet Montado. | Inativo
(1) Ativação manual do PTL | Operador ativa manualmente o PTL. | Em ativação
(2) Associação do Olpn | Operador associa manualmente uma nova etiqueta de pallet (OLPN). | Ativo
Princípio do desvio: a decisão de desvio é tomada quando a caixa passa pelo portal do sorter. Definida a rampa de destino, a decisão fica vinculada à caixa e não muda, mesmo que o operador feche temporariamente o pallet para trocar o Olpn e reabrir o PTL.
Critério de elegibilidade e prioridade: ao passar pelo portal, o WCS avalia todas as rampas elegíveis para o SKU/destino. Prioriza as rampas com PTL ativo e distribui as caixas de forma balanceada entre elas; uma rampa com PTL fechado continua sendo opção válida, porém com menor prioridade. Esgotada a capacidade das opções de maior prioridade, o WCS desvia para a rampa de PTL ainda não reativado, desde que haja capacidade física.
Durante o intervalo entre fechamento (0) e reabertura (1)/(2):
Caixas já analisadas pelo portal com destino àquela rampa continuam sendo desviadas para ela.
Caixas que já estão na rampa permanecem nela, aguardando a reabertura do PTL para continuar a operação normal.
Integração de Pedidos recebidas do WMS para a loja associada seguem a mesma regra, desde que exista posição válida para o destino.
Capacidade física e elegibilidade da rampa
Quando a caixa vai ao rejeito:
A rampa possui um sensor de rampa cheia. Enquanto a caixa não atinge esse sensor, há “capacidade física disponível” e a rampa permanece elegível. Quando o sensor é acionado, a rampa fica inelegível e as caixas destinadas a ela são enviadas ao rejeito pelo motivo “Rampa Cheia”.
A rampa só se torna inelegível quando está cheia (sensor acionado). O PTL estar fechado não a torna inelegível e não há tempo máximo (timeout) de PTL fechado, a rampa segue elegível até encher.
A caixa é enviada ao rejeito somente quando, ao passar pelo portal, não há nenhuma rampa elegível com capacidade disponível para o destino. O PTL estar temporariamente fechado, por si só, não envia a caixa ao rejeito.
Situação no momento do portal | Direcionamento da caixa
Rampa elegível com PTL ativo e capacidade | Rampa correspondente (prioridade alta), com balanceamento.
Só rampa elegível com PTL fechado, com capacidade | Rampa correspondente (prioridade baixa); caixas aguardam a reabertura.
Rampa de destino cheia (sensor acionado) | Rejeito por “Rampa Cheia”.
Nenhuma rampa elegível com capacidade | Rejeito (rampa de rejeito), correlato a “Sem Rota” / sem destino válido.
Demais exceções do PTL
Etiqueta inválida: ao bipar uma etiqueta inválida (incluindo OLPN repetida ou fora do comprimento válido), o LED do PTL que o operador está tentando vincular acende em vermelho.
Falta de OLPN para abrir/reabrir: o comportamento não muda, o pallet permanece fechado até a chegada de novas etiquetas OLPN.
Validação da OLPN: feita por comprimento, código de 15 a 18 dígitos.
Pallet incompleto (short pick): o WCS nunca bloqueia o fechamento manual do pallet. Se o operador fechar faltando itens, a integração Pallet Montado é enviada com a quantidade efetivamente montada (totalvolPallet < totalvolEsper). Não há alerta do sistema, mas o operador visualiza que o esperado era X e o pallet foi fechado com Y.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Indução Volumes  
**Score:** — (semantico) | **ID:** 9ee775468763acd7

A indução de volumes será gerenciada e cadenciada pela Operação. O processo começa com o WMS, que realiza o processo de separação e deixa os paletes das tarefas que foram concluídas em uma área chamada “Stage In”, nesse momento é enviado uma integração Etiquetas (5.3) que contém a informação ilpnPtl para cada pallet. Com essas informações, o WCS gera uma listagem orientativa de forma sequencial de indução, onde informa qual pallet deve ser induzido em cada momento, respeitando as condições de disponibilidade e matriz de fragilidade.
A partir da integração dos paletes enviada pelo WMS o WCS já deve permitir que pallets sejam consumidos e induzidos no sorter.
O WCS não monitora o processo de indução; a pedido do cliente, esse processo será controlado pelo Operador, que será responsável por garantir que a indução dos volumes seja realizada de acordo com a matriz de fragilidade previamente fornecida.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** d24eebb815c13b41

Ao iniciar a operação, o operador da saída do sorter deverá realizar o login na rampa para que consiga mapear e alocar os volumes nas posições indicadas.
Etiquetas utilizadas no processo PTL:
Etiqueta PTL: QR Code fixo instalado em cada posição da estação PTL. Utilizada para abertura e fechamento do palete.
Etiqueta OLPN: Gerada pelo WMS, contém um código único de 18 dígitos. Identifica de forma única cada palete de saída e garante a rastreabilidade.
Abertura do palete (obrigatória antes de iniciar a indução): Antes que as caixas comecem a ser induzidas no sorter, o operador deve abrir o palete realizando duas leituras sequenciais: primeiro escaneia a Etiqueta PTL (QR Code) da posição e em seguida escaneia uma Etiqueta OLPN (18 dígitos). Isso cria o vínculo entre a OLPN e a posição PTL. Somente após esse processo o sistema permitirá a alocação de volumes.
Alocação de volumes — Dupla Confirmação (configurável): O sistema possui uma opção na tela de configuração chamada Dupla Confirmação de Bipagem:
Ativada: O processo de alocação exige duas leituras. Na primeira, o operador escaneia a etiqueta do volume (IVT) e o LED acende em laranja (primeira leitura aceita, aguarda segunda confirmação). Na segunda, escaneia o código da caixa (DUN/EAN) e o LED muda para azul (vinculação completa).
Desativada: Apenas uma leitura é necessária. O operador escaneia a etiqueta IVT ou o DUN do volume e o LED acende diretamente em azul.
Em ambos os modos, caso o volume não pertença a nenhuma das posições da estação PTL, o WCS acenderá todos os LEDs da estação em vermelho.
Quando o LED está em azul e o volume pertence à posição, o operador deve depositar a caixa no palete e confirmar apertando o botão do LED azul. Nesse momento, o WCS registra a alocação e envia a integração caixa a caixa ao WMS.
Fechamento do palete (manual): O fechamento do palete é realizado manualmente pelo operador, que avalia visualmente quando o palete atinge um tamanho adequado. Não há controle automático de cubagem nem peso. Para fechar, o operador escaneia a Etiqueta PTL (QR Code) os LEDs acendem em laranja e em seguida escaneia a Etiqueta OLPN, o LED muda para azul confirmando o fechamento. O operador cola a etiqueta OLPN no palete físico e aperta o botão. Nesse momento, o WCS envia a integração de palete montado ao WMS.
Continuação da operação (reabertura): Se após o fechamento ainda houver caixas pendentes para aquela posição PTL, o operador deve abrir um novo palete escaneando novamente a Etiqueta PTL (QR Code) e uma nova Etiqueta OLPN (novo código de 18 dígitos gerado pelo WMS), criando um novo vínculo. O fluxo de alocação segue normalmente.
O WCS não deve permitir a reutilização de códigos OLPN. A disponibilidade das etiquetas OLPN é de responsabilidade do cliente (WMS).
Em caso de rejeição, o sistema exibirá uma tela mostrando o diagnóstico de erros para esse volume, permitindo ao operador tentar recuperá-lo novamente, se necessário.
Etiqueta de PTL:
Em todos os processos após a finalização do pallet enviamos as informações descritas no tópico “5.5 Pallet Montado” para o WMS fazer as tratativas necessárias.
A impressão da etiqueta OLPN é de responsabilidade do WMS.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 7.4. Sugestão de Alocação  
**Score:** — (semantico) | **ID:** 4ebc854f3865f192

O WCS Velox é responsável pela sugestão de alocação por Curva ABC. O objetivo é otimizar a
eficiência operacional do CD, definir as prioridades das posições e organizar os produtos nas
posições de picking. O conceito é baseado em Tarefas: o número de tarefas de separação que
passam por cada produto no período é o índice que define sua curva.
Administração de Tarefas. O WCS gerencia o ciclo completo, da definição dos critérios à
execução das alocações. O processo é iniciado automaticamente a partir do primeiro mês de
operação e é configurável conforme a necessidade.
Range de data para a sugestão. O WCS possui um parâmetro configurável que define a
janela de dados históricos considerada ao gerar as sugestões (ex.: 7, 15 ou 30 dias). O
administrador define o intervalo por meio de tela própria, e o sistema usa esse intervalo para
gerar as sugestões automaticamente, considerando o histórico de separações e a demanda no
período.
Classificação por curva. Com base no número de tarefas por produto no período, o WCS
classifica os itens e sugere o posicionamento:
Curva A — itens de alta frequência; alocados nas posições de picking mais acessíveis e
próximas ao ponto de saída, reduzindo o deslocamento do operador.
Curva B — itens de frequência intermediária; alocados em posições de fácil acesso,
não necessariamente tão próximas quanto as da Curva A.
Curva C — itens de baixa frequência; alocados nas posições mais distantes do ponto
de saída, de visita menos frequente.
Respeito à Matriz de Fragilidade. A sugestão de alocação respeita obrigatoriamente a
Matriz de Fragilidade: independentemente da curva, os itens mais pesados são posicionados
nos primeiros postos da sequência de coleta, garantindo que sejam coletados primeiro no
picking fracionado (caixa plástica) e protegendo os itens frágeis.
Sugestão x decisão. A sugestão é gerada pelo WCS; a decisão de alterar o mapeamento é da
operação. O operador verifica a sugestão e, se necessário, ajusta o posicionamento dos
produtos nos endereços indicados. O WCS exibe a quantidade de tarefas por produto em tela
de acompanhamento (com filtros por produto, categoria ou data) e gera relatório dos itens de
maior saída e suas classificações, para revisão e rebalanceamento periódico.
Exemplo da tela de Tarefas por Produto:
Código
Produto
Unidade
Qtd. De
Tarefas
Status da Alocação
Produto A
Un
Alocado
Produto B
Un
Em processo
Produto C
Un
Concluído

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 16.2. Rampas de Expedição (Fluxo Padrão com PTL)  
**Score:** — (semantico) | **ID:** cfbba2a671ac4715

As demais rampas são agrupadas logicamente por Transportadora. Opcionalmente, uma mesma
rampa pode agrupar até duas transportadoras, conforme configuração do Mapa do Sorter —
não é obrigatório, sendo o padrão uma transportadora por rampa. O processo de paletização é
assistido por Put-to-Light (PTL), garantindo que o operador monte o pallet correto sem
precisar ler etiquetas.
Passo a Passo:
1. Descida: A caixa desliza pela rampa e para na mesa de acumulação.
2. Identificação: O operador pega a caixa e realiza a leitura do LPN com um scanner de
mão.
3. Sinalização (PTL):
o
Imediatamente, o display PTL posicionado acima do pallet correspondente
acende.
o
O display mostra a quantidade acumulada ou apenas confirma o local.
4. Montagem: O operador deposita a caixa sobre o pallet indicado pela luz.
5. Confirmação: O operador pressiona o botão do PTL para confirmar que a caixa foi
alocada.
o
Erro: Se o operador bipar uma caixa e tentar colocar no pallet errado (não
confirmar o botão ou bipar local errado), o sistema emite alerta sonoro.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 9.1. Put to Light (PTL) / Aloca Pallet  
**Score:** — (semantico) | **ID:** 9794233b8877aca0

O Put to Light é o processo de alocação de volumes nos pallets de expedição. O WCS controla
as posições PTL de forma exclusiva. A expedição é compartilhada entre WCS e WMS.
O projeto possui 28 posições PTL com displays dedicados. O agrupamento principal (master)
é por transportadora. Dentro de cada transportadora, o WCS aplica um sub-agrupamento por
pedido, buscando concentrar os volumes de um mesmo pedido no menor número de pallets
possível, evitando dispersão entre posições PTL. A abertura das posições PTL disponíveis é
automática.
Para iniciar a operação do PTL, o operador da rampa realiza login bipando o crachá no leitor da
posição. O WCS registra o vínculo entre o operador e a posição PTL, possibilitando o
mapeamento, a alocação correta dos volumes e a rastreabilidade das operações realizadas.
Para encerrar a sessão, o operador bipa o crachá novamente no mesmo leitor, e o WCS registra
o horário de saída e libera o vínculo com a posição.
Fluxo Operacional:
Ao receber uma caixa na rampa, o operador realiza a leitura da etiqueta do volume.
O display da posição PTL correspondente acende, indicando a posição do pallet onde o
volume deve ser alocado.
O operador aloca o volume na posição indicada e confirma pressionando o botão do
display, encerrando a tarefa daquele volume.
A cada confirmação de alocação, o WCS registra a quantidade conferida e atualiza o
sistema.
O operador retorna à rampa para processar o próximo volume.
Abertura de Posição PTL:
A abertura da posição PTL é automática quando o primeiro volume de uma transportadora sai
do Order Start. O WCS prioriza alocar volumes do mesmo pedido na mesma posição PTL,
abrindo nova posição somente quando a atual atingir o limite de cubagem ou peso. O WCS
reserva o lugar de cada volume nos pallets antes mesmo do volume chegar na rampa, sendo
possível colocar os volumes no pallet respectivo respeitando a sequência de entrega.
Otimização de Alocação por Tamanho de Caixa:
O WCS deverá realizar a alocação dos volumes no pallet com base na melhor otimização de
espaço, considerando os tamanhos de caixa (P, M, G) definidos pelo WMS Spark na cubagem.
O sistema organizará a distribuição dos volumes visando o melhor aproveitamento da cubagem
e peso do pallet, priorizando a estabilidade e o empilhamento adequado.
Cubagem e Peso do Pallet:
A cubagem do pallet será realizada pelo WCS previamente, através do cadastro de parâmetros.
O operador deverá cadastrar no WCS a cubagem (m³) e peso (kg) máximo suportado no pallet.
9.1.1. Fechamento de Pallet
O sistema suporta três formas de fechamento de pallet:
Automático: Quando peso ou cubagem atingem o limite configurado, o WCS realiza
automaticamente o fechamento solicitando a leitura da etiqueta do pallet.
Lógico: Quando não há mais volumes previstos para aquela posição.
Manual: O operador realiza a leitura do código da posição. Após a validação, o sistema
solicita a leitura da etiqueta do pallet.
Ao fechar, o WCS dispara a impressão da etiqueta master na impressora dedicada instalada na
área do PTL, envia integração de expedição ao WMS Spark informando o conteúdo do pallet e
libera a posição PTL para novo pedido. A impressora dedicada ao PTL será a Zebra ZT230
(modelo confirmado pela BR Supply). A aquisição do equipamento ficará a cargo da BR Supply.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 10. PTL (Put to Light) – Consolidação Fracionado e Fullcase  
**Score:** — (semantico) | **ID:** 8cec3c5ab47d9af3

O PTL atua como vínculo lógico de remessa: cada posição de PTL recebe os volumes Fracionados
e Fullcase de uma mesma remessa, garantindo que os volumes do mesmo pedido fiquem
agrupados antes da expedição.
Embora os volumes Full Case nunca sejam depositados em posições de PTL, o operador
responsável pela coleta Full Case acessa as posições de PTL ao final da sua tarefa para retirar os
volumes Fracionados da mesma remessa, conforme detalhado na seção 7.6.4.
Nesse contexto, o PTL exerce duas funções complementares no fluxo:
depósito (entrada): realizado pelos operadores de Picking Fracionado, conforme o fluxo
padrão do PTL descrito a seguir;
retirada (saída): realizada pelo operador de Full Case ao consolidar a remessa para
expedição.
Operação no PTL:
1. Ao iniciar a operação, o operador da saída realiza login no WCS para mapear e alocar os
volumes nas posições indicadas pelo sistema.
2. O operador realiza a leitura de cada volume Fracionado através do scanner. O WCS acende o
LED da posição PTL correspondente, indicando onde depositar o volume.
3. Caso o volume não pertença a nenhuma posição do posto (cenários típicos: volume não
integrado, volume movido erroneamente para a área, volume com etiqueta inválida ou de outra
remessa), todos os LEDs acendem em vermelho, sinalizando o erro. O operador deverá tratar a
exceção conforme procedimento operacional.
4. Quando o volume pertence a uma posição, o operador deposita o volume no pallet e confirma
com o botão do LED.
5. Após a finalização do agrupamento de uma remessa, a posição PTL é liberada automaticamente
para receber a próxima remessa.
6. Quando a remessa que ocupa uma posição de PTL também possui volumes Full Case, o
operador da coleta Full Case se dirige ao PTL ao concluir sua tarefa e realiza a leitura das etiquetas
dos volumes Fracionados conforme lista exibida pelo WCS. Após a leitura de todas as etiquetas
esperadas, a posição de PTL é liberada automaticamente, e os volumes Fracionados acompanham
o operador até o ponto de expedição em conjunto com os Full Case daquela remessa.
Obs: Não há fechamento sistêmico de pallet, integração de Aloca Pallet com o EWM/SAP, nem
cálculo automático de cubagem/peso por pallet — o agrupamento físico é feito pela operação. A
liberação de cada posição de PTL ocorre automaticamente após a retirada de todos os volumes
pelo operador da coleta Full Case, em casos com consolidação.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Parâmetros por transportadora  
**Score:** — (semantico) | **ID:** 19854851d861a77f

Campo de Configuração Principal
Realiza Paletização? (Sim / Não)
Não → O WCS atualiza o status do volume imediatamente após o volume ser desviado na rampa.
Sim → O WCS realiza o fluxo completo de alocação, atualizando o status do volume somente após a alocação.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 4.1.1. PTL  
**Score:** — (nome-topico) | **ID:** ad4e991768427735

Ao iniciar a operação, o operador responsável pelas saídas do sorter deve realizar o login na
rampa para mapear e alocar os volumes nas posições indicadas.
Quando o operador recebe um volume na rampa de saída, ele realiza a leitura do código de barras
do volume desviado. O display da posição PTL correspondente acenderá, indicando o local do
pallet onde o volume deve ser alocado.
Após alocar o volume no local indicado, o operador deve pressionar o botão do display para
confirmar que o volume foi alocado. O operador, então, prossegue para o próximo volume.
Fechamento do Pallet:
O sistema Velox realiza a cubagem do pallet, e o operador deve verificar fisicamente o
status do LED. Se o pallet estiver cheio, o LED acenderá em laranja como indicação.
Nesse momento, o operador deve proceder com o fechamento do pallet realizando a
leitura de um código fantasia para ser feito a associação de todos os volumes alocados
a um pallet e o sistema abrirá automaticamente o próximo pallet.
Além disso, o operador tem a opção de forçar o fechamento do pallet. Para isso, ele deve realizar
a leitura de um comando pré-definido em cada posição PTL, permitindo o fechamento do pallet
antes que a cubagem definida no Velox seja atingida. O processo de leitura de um código fantasia
se mantém o mesmo nestes casos.
Com isso realizamos o envio da integração de Fechamento do Pallet para a Consinco.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 8.1.1. Rampas (PTL)  
**Score:** — (semantico) | **ID:** ff0320aa2fef871b

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o
operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
 01 (um) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
 01 (um) Conversor RS232 – Modelo HF5111B

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 17. Sugestão de Alocação  
**Score:** — (semantico) | **ID:** 1f49b6b2d4294c0c

O sistema WCS é responsável por sugerir a alocação estratégica dos produtos (CD) Comercial
Esperança, utilizando como base a análise da curva ABC e outras características operacionais
relevantes. Essa alocação visa maximizar a eficiência operacional e otimizar o fluxo de trabalho.
Nota: Para garantir a organização e facilitar o manuseio, o sistema impede a mistura de
famílias de produtos em posições próximas.
Benefícios esperados
Com a alocação sugerida pelo WCS, o Comercial Esperança pode:
Maximizar a produtividade dos operadores;
Minimizar os deslocamentos internos;
Melhorar o fluxo operacional do CD;
Reduzir os tempos de separação e a ocorrência de erros.
Estratégia de Alocação por Zona
Produtos de Higiene, Limpeza e Bazar: Alocados nas extremidades do CD, ocupando
cerca de 15% da área de picking em cada lado, devido à menor rotatividade ou
características específicas de manuseio desses produtos.
Produtos Alimentícios: Serão alocados na área central do CD, correspondendo a cerca
de 70% da área de picking, devido à sua alta rotatividade e prioridade no processo de
separação.
Critérios de Alocação com base na Curva ABC
A curva ABC é uma técnica que classifica os produtos conforme seu impacto na movimentação,
baseada em dados históricos de coleta e separação:
Itens da Curva A:
Produtos de alta rotatividade e maior valor em volume de movimentação. Serão
alocados nas posições mais acessíveis, próximas aos pontos de indução, para reduzir
tempo e distância na separação.
Itens da Curva B:
Produtos com média rotatividade. Serão alocados em posições de acessibilidade e
ocupação intermediárias.
Itens da Curva C:
Produtos de baixa rotatividade. Serão posicionados em áreas menos prioritárias e mais
distantes, otimizando o uso do espaço para itens de maior demanda.
Funcionamento do Sistema de Sugestão de Alocação
O WCS realiza uma análise contínua dos índices de movimentação e frequência de separação
para atualizar a classificação da curva ABC e ajustar as sugestões de alocação.
As sugestões são integradas ao planejamento operacional, permitindo a realocação estratégica
conforme a demanda e sazonalidade.
Essa abordagem contribui para um fluxo de trabalho mais eficiente, redução de custos
operacionais, minimizando desperdícios.
Nota: O WCS baseia suas sugestões exclusivamente em dados de movimentação e coleta dos
SKUs, não considerando a quantidade física em estoque.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** dde6e8316e7427f7

O sistema WCS realiza a abertura automática das posições PTL no momento em que o volume
é desviado para a rampa de saída. Para iniciar a operação, o operador da rampa deve realizar
login no sistema, possibilitando o mapeamento e a alocação correta dos volumes.
Ao receber uma caixa na rampa, o operador realiza a leitura do código de barras da etiqueta do
volume. Em seguida, o display da posição PTL correspondente acende, indicando o local
(posição do pallet) onde o volume deve ser alocado. O operador aloca o volume na posição
indicada e confirma o posicionamento pressionando o botão do display, encerrando a tarefa
daquele volume.
A cada confirmação de alocação, o WCS registra a quantidade conferida e atualiza essas
informações diretamente no WMS, volume a volume a nível de item, caracterizando o processo
de conferência. Esse mecanismo garante que todos os itens que compõem o volume sejam
corretamente marcados como conferidos no sistema do WMS.
Nota: Enquanto a inteligência artificial (IA) não estiver plenamente implantada no processo, o
sistema exigirá uma conferência dupla, com leitura do código de barras da etiqueta do volume
e do produto. Essa exigência será controlada por um parâmetro de sistema, podendo ser
ativado ou desativado conforme a necessidade operacional. A regra de aplicação será definida
pelo time Invent durante o período de testes e implantação.
Após a alocação e confirmação no display, o operador retorna à rampa para processar o
próximo volume.
A cubagem do pallet não será realizada pelo WCS, pois os dados de roteirização e
definição de pallet já são informados no início da operação pelo WMS. O fechamento do PTL
será realizado manualmente pelo operador, conforme instruções operacionais do cliente.
Cada loja ou cliente configurado no mapa do sorter terá duas posições PTL associadas,
respeitando a matriz de fragilidade previamente definida.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Alocação via PTL  
**Score:** — (semantico) | **ID:** e37972bfe9fea9dd

As 20 rampas totalizam 168 posições PTL, processo realizado após o volume ser desviado no
chute:
O operador com coletor em mãos realiza a leitura da etiqueta da caixa, display PTL
acende imediatamente após a leitura do volume, indicando a posição correta.
O operador deposita a caixa na posição, confirma pressionando o botão do display, e o
WCS atualiza os dados de conferência no WMS.
O controle de cubagem do pallet é feito pelo WMS
Cada rota pode ocupar 2 a 3 posições PTL, respeitando a matriz de fragilidade.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Sinaleiros  
**Score:** — (nome-topico) | **ID:** 025cb5d9259ebd0d

Indicam status das rampas:
Verde: rampa disponível
Amarelo piscando: rampa cheia
Vermelho piscando: emergência
Todas piscando simultaneamente: falha de comunicação com o sistema WCS

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Sugestão de Alocação no Picking  
**Score:** — (semantico) | **ID:** 50c227115fbdf41c

O WCS sugere alocação estratégica conforme curva ABC, mantendo separação entre produtos
alimentícios e não alimentícios, maximizando eficiência.
Curva A: posições centrais e mais acessíveis
Curva B: posições intermediárias
Curva C: extremidades

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Sugestão de Alocação  
**Score:** — (semantico) | **ID:** 959e78069ece9efc

O WCS possui uma funcionalidade inteligente que armazena e analisa o histórico de separações realizadas pela automação, considerando a quantidade de unidades coletadas por item e a frequência de visitas a cada endereço de picking. Com base nesses dados, o sistema gera uma sugestão otimizada de alocação dos produtos dentro dos postos de separação.
O princípio da sugestão consiste em alocar os itens com maiores números de coletas e visitas nas posições mais próximas ao operador, distribuindo os itens de menor movimentação nas extremidades de cada posto. Essa reorganização tem como objetivo aumentar a produtividade da linha de picking, reduzindo deslocamentos e otimizando o tempo de separação.
Para gerar a sugestão, o usuário informa o período desejado de análise, com data inicial e final. O sistema então apresenta um relatório com o ranking de coleta de todos os itens da base, contendo: código do produto, descrição, endereço atual e posto sugerido. Essa funcionalidade permite que a operação reorganize periodicamente o layout dos postos de forma estratégica, com base em dados reais da própria operação.
As informações geradas pela sugestão de alocação podem ser exportadas via Excel, facilitando a análise e a implementação prática das melhorias sugeridas.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 09a96f021efff76c

Ao iniciar a operação, o operador da saída do sorter deverá realizar o login na rampa para que
consiga mapear e alocar os volumes nas posições indicadas e abrir todas cada posição de pallet
que deseja operar.
Após o desvio do volume na rampa correta o operador pode realizar a leitura do volume (caixa)
através do scanner da rampa, uma vez que o WCS recebe a informação do código da caixa ele
acende o led da posição PTL informando onde o operador deve colocar o volume ou acenderá
todos os leds do posto PTL vinculado ao scanner que realizou a leitura na cor vermelha
informando que o volume não pertence a nenhuma das posições presentes no posto PTL.
Quando o volume pertence a uma posição do posto o WCS acenderá o led correspondente a
posição PTL como informado acima e o operador deve colocar o volume no pallet e em seguida
confirmar apertando o botão do led, assim o WCS identifica a alocação e guarda essas
informações para enviar posteriormente as informações ao WMS.
No decorrer das alocações de volumes ao pallet o WCS verifica a cubagem e peso como
mencionado do item Cubagem de pallet, indicando que o pallet está cheio ao operador através
de uma cor especifica no led e o operador deverá ler o código master do pallet e pressionar o
LED para finalizar o pallet.
Devido ao tempo que será necessário para a retirada do pallet ser variável, o operador assim
que o pallet for retirado da posição, ou seja, do PTL deve ler o comando de abrir pallet
para o sistema considerar aquela posição acessível novamente.
Quando for solicitado pelo operador o fechamento do pallet nas saídas das rampas, o operador
deverá realizar a leitura de um código master que será vinculado aos volumes que foram alocados
a este pallet e será retornado uma integração ao WMS a cada pallet fechado com as relações dos
volumes alocados no respectivo pallet. A regra de abertura e fechamento do pallet mencionados
acima se repetem da mesma forma no cenário de fechamento de pallet forçado pelo operador.
A disponibilização desta etiqueta master será de responsabilidade do WCS.
Em caso de rejeito, o operador terá uma tela que irá exibir o diagnóstico de erro deste volume e
poderá induzir novamente caso for possível.
Para a posição do PTL que for dedicada aos volumes rejeitados, quando o volume for lido será
aceso o led na cor rosa e para esta posição em especifico. O WCS não fara o controle de cubagem
de pallet, sendo assim será de responsabilidade da operação tirar os volumes da posição e tratar
individualmente cada um deles e induzi-los novamente.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** 8.1.1 Rampas (PTL)  
**Score:** — (semantico) | **ID:** ed61f65a6fe7da03

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o
operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
 01 (um) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
 01 (um) Conversor RS232 – Modelo HF5111B
No caso do projeto Opitimus Prime , onde o sorter terá 8 (oito) rampas de saída, será necessário
8 (oito) unidades de leitores de código de barras e 8 (oito) conversores RS232, mencionados
acima.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** PTL / Alocação  
**Score:** — (semantico) | **ID:** 12f0ac3143045d24

O PTL (Put-to-Light) é o processo de alocação final dos volumes nos pallets de expedição, realizado nas docas do armazém. O operador bipa cada volume que desce do Sorter e o sistema indica imediatamente onde alocá-lo — em qual pallet e em qual posição — por meio de displays luminosos ou monitor central.
O WCS monitora em tempo real o peso e o volume acumulado em cada pallet. Quando os limites parametrizados são atingidos (altura máxima de [A DEFINIR] mm ou peso máximo de [A DEFINIR] kg), o sistema encerra automaticamente o pallet, aciona os displays de alerta e comanda a impressão da etiqueta master de fechamento na impressora da doca.
O projeto utiliza displays PTL individuais por posição de pallet — um total de 192 posições. O operador bipa o volume, o display da posição correta acende e indica a quantidade a alocar. Após alocar, o operador confirma no botão do display.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** PTL (Alto Giro)  
**Score:** — (semantico) | **ID:** 2c4571c5088d4cf5

Nesta parte da célula, contamos com 6 posições de PTL, onde cada uma representa um carrinho/pallet individual destinado ao laboratório do CD para tratamento dos equipamentos.
Cada carrinho possui uma posição exclusiva no WCS com seu respectivo PTL. O picking map definirá quais SKUs devem ser direcionados para cada carrinho/pallet, sendo importante destacar que uma mesma posição poderá receber mais de um SKU, conforme o mapeamento estabelecido.
Quando o MAC Address for lido no PDV e o SKU validado visualmente pelo operador, o WCS acenderá na cor verde o LED da posição de PTL correspondente ao carrinho indicado no picking map, direcionando o operador para a alocação correta. Após depositar o item, o operador confirmará a ação pressionando o LED, e o status do item será automaticamente alterado para "alocado".

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** PTL (Alto Giro)  
**Score:** — (semantico) | **ID:** 4d7bb78276449961

Nesta parte da célula, contamos com 6 posições de PTL, onde cada uma representa um
carrinho/pallet individual destinado ao laboratório do CD para tratamento dos equipamentos.
Cada carrinho possui uma posição exclusiva no WCS com seu respectivo PTL. O picking map
definirá quais SKUs devem ser direcionados para cada carrinho/pallet, sendo importante destacar
que uma mesma posição poderá receber mais de um SKU, conforme o mapeamento estabelecido.
Quando o MAC Address for lido no PDV e o SKU validado visualmente pelo operador, o WCS
acenderá na cor verde o LED da posição de PTL correspondente ao carrinho indicado no picking
map, direcionando o operador para a alocação correta. Após depositar o item, o operador
confirmará a ação pressionando o LED, e o status do item será automaticamente alterado para
"alocado".
