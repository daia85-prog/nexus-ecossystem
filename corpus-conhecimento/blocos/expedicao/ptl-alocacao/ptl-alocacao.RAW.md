# ptl-alocacao.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Put To Light  
**Score:** — (nome-topico) | **ID:** a5b53b0746060126

O sistema WCS realizará a gestão das posições de PTL (Put to Light) de forma totalmente dinâmica, sem qualquer parametrização prévia que vincule a posição de PTL a pedidos, ondas ou transportadoras. Todas as posições de PTL iniciarão o processo com paletes vazios, sem pedidos associados.
Quando uma onda de pedidos for integrada ao sistema, o WCS iniciará automaticamente o processo de alocação, identificando as posições de PTL que estão livres (sem pedido associado). Para cada pedido pertencente à onda recebida, o sistema irá reservar sequencialmente uma posição disponível, cada posição de PTL será associada a apenas um pedido por vez. Caso o pedido necessite de mais de um palete, a posição permanecerá ativa até a finalização do último palete. Os paletes que forem sendo concluídos ao longo do processo serão encaminhados para a área de stage, enquanto a posição de PTL continua disponível para a continuidade do mesmo pedido.
Esse processo ocorre da seguinte forma:
A onda de pedidos é recebida via integração.
O sistema identifica as posições de PTL disponíveis.
O WCS vincula o pedido a uma posição de PTL vazia, respeitando a prioridade definida; em caso de empate de prioridade, a vinculação ocorre seguindo o critério FIFO (First In, First Out) para cada pedido da onda.
Cada posição passa a representar exclusivamente um único pedido, garantindo rastreabilidade durante todo o fluxo de expedição.
O ambiente contará com um total de 28 posições de PTL disponíveis para a etapa de expedição após a conferência e o packing, podendo estar organizadas em zonas físicas distintas apenas para fins operacionais e físicos, sem impacto na lógica de alocação sistêmica.
Ao término da alocação de uma onda, os paletes que já estiverem reservados permanecerão associados aos seus respectivos pedidos até a conclusão do processo. Quando uma nova onda de pedidos for integrada, o WCS executará novamente a verificação das posições de PTL e reservará exclusivamente os paletes que estiverem livres naquele momento, repetindo o processo de forma incremental e contínua.
Durante a operação, quando um palete atingir sua capacidade máxima, o operador poderá encerrá-lo e substituí-lo por um novo palete na mesma posição de PTL. O palete encerrado será direcionado para o stage de pré-expedição. Caso o pedido ainda não esteja finalizado, o sistema manterá a reserva da posição ativa e permitirá que um novo palete vazio seja automaticamente associado ao mesmo pedido, assegurando a continuidade do processo sem perda de rastreabilidade ou interrupção do fluxo operacional.
Fluxo Operacional
Abertura das Posições
Assim que o pedido é integrado, o WCS abre automaticamente uma posição de PTL.
O pedido permanece vinculado à posição até que todos os volumes daquele pedido sejam alocados e confirmados.
Login do Operador
Para iniciar o processo, o operador da zona realiza login no sistema, escaneando o seu código de identificação.
Esse login permite o mapeamento correto das ações executadas por operador.
Alocação dos Volumes
Ao receber uma caixa na zona correspondente, o operador realiza a leitura do QR Code da etiqueta do volume.
Imediatamente o display da posição PTL acende, indicando o local onde o volume deve ser alocado.
O operador posiciona o volume e confirma a alocação pressionando o botão físico do display.
Registro e Controle
Cada confirmação é registrada pelo WCS, atualizando a quantidade conferida e vinculando o volume à posição de PTL
Fechamento da Posição
Quando o último volume do pedido for alocado e confirmado:
O sistema encerra automaticamente o pedido naquela posição acendendo a cor laranja no led (fechamento normal).
Alternativamente, o operador poderá realizar um fechamento manual, caso seja necessário (fechamento forçado).
Após o fechamento, o operador deve ler uma etiqueta de identificação do pallet/expedição.
Exemplo etiqueta de pallet:
A posição retorna imediatamente ao estado livre, sendo reaberta pelo WCS para um próximo pedido assim que um novo volume da zona for reconhecido.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Balanceamento (1 x 1)  
**Score:** — (semantico) | **ID:** a9ade72c91794be5

O sistema Velox estará preparado, caso exista a necessidade de alocação de 1 (um) mesmo item cadastrado em estações diferente.
Mesmo item cadastrado nas 5 (cinco) estações de separação:
Velox fará o balanceamento cadenciando as caixas, realizando a separação de 1 (um) volume por posto, ou seja, se tivermos 3 (três) volumes solicitando a separação do mesmo item que está cadastrado nas 5 (cinco) estações, o Velox irá realizar a separação da primeira caixa na estação 5 (cinco) no final da linha, o segundo volume será separado na estação 4 (quatro), o terceiro volume será separado na estação 3 (três), o segundo volume será separado na estação 2 (dois) e o primeiro volume será separado na estação 1 (um) no início da linha, com isso a linha de separação segue com máxima fluidez.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Sugestão alocação de curva ABC  
**Score:** — (semantico) | **ID:** edcb8ce25a31b4ef

O sistema WCS será responsável pela sugestão de alocação de curva ABC.
O principal objetivo da sugestão de alocação de curva ABC é otimizar a eficiência operacional no CD Fagron, determinar as prioridades de posições e organizar os produtos nas posições de picking. O Conceito será por PEGA
Administração PEGA: O sistema WCS será responsável por gerenciar o ciclo completo de pega, desde a definição de critérios até a execução das alocações. Esse processo será iniciado automaticamente a partir do primeiro mês de operação, sendo configurável conforme as necessidades da operação.
Parâmetro para definir o range de data para Sugestão de Alocação: Será necessário incluir um parâmetro de configuração no sistema WCS para definir o range de data a ser considerado ao gerar sugestões de alocação.
Definição do Range de Data: O range de data será configurável, permitindo que o administrador do sistema defina intervalos de tempo para quando a sugestão de alocação deverá ser gerada. Por exemplo, o parâmetro pode ser ajustado para sugerir alocações para uma janela de 7, 15 ou 30 dias, conforme as necessidades.
Função do Parâmetro: Este parâmetro será utilizado para gerar automaticamente sugestões de alocação dentro do intervalo de datas selecionado, considerando dados históricos de vendas, demanda, e outras variáveis relevantes.
Interface de Configuração: O administrador do sistema WCS terá acesso a uma interface de fácil utilização para configurar e ajustar esse parâmetro.
Exibição na tela Quantidade de PEGAS por Produto: A quantidade de pegas por produto será exibida em uma tela de dashboard ou relatório, com filtros para visualizar por produto, categoria ou data.
Para facilitar o acompanhamento e o controle, a tela do sistema WCS deverá mostrar a quantidade de PEGAS por produto. Essa exibição permitirá aos operadores e gestores visualizarem rapidamente a alocação de cada item, o que melhora a tomada de decisão.
Exemplo de Exibição:
Incluir código do produto, descrição do produto, unidade de medida.
Qual objetivo de visualizar o status e data de alocação nessa tela?
Itens curva A – Itens de alta prioridade devem ficar alocados nas áreas de picking mais acessíveis e próximas ao ponto de saída. Com isso, reduzimos o tempo de deslocamento dos operadores, aumentando a eficiência dos responsáveis pela separação.
Itens curva B – Itens de prioridade intermediaria, devem ficar alocados em áreas de facil acesso, mas não necessariamente tão próximas quanto os itens de curva A.
Itens curva C – Itens de baixa prioridade, devem ficar alocados nas áreas mais distantes dos pontos de saída, onde a visita nesses endereços é menos frequente.
O sistema WCS, baseado nos índices de produtos por separação, fará a sugestão de alocação de curva ABC, operador assim terá a possibilidade de verificar a sugestão do sistema WCS, e caso seja necessário realizar alteração, deverá alterar o posicionamento dos produtos nos endereços sugeridos pelo WCS.
A sugestão de alocação será no sistema do WCS, a decisão de alterar o mapeamento dos produtos, será da operação.
O sistema WCS deverá gerar um relatório para analisar os itens que mais vendem e suas classificações para revisão operacional e rebalanceamento.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 98c8db050e5a4f02

Ao iniciar a operação, o operador deverá realizar o login na respectiva rampa que será realizada a separação, para que consiga mapear e alocar os volumes nas posições indicadas. Caso esse login não seja realizado o operador não conseguirá alocar os volumes.
O operador ao receber a caixa na rampa de saída, realiza a leitura do volume desviado, o display da posição PTL deverá acender indicando o local pallet onde o volume deve ser alocado.
Operador aloca o volume no local indicado, aperta o botão do display confirmando que o volume foi alocado e segue para o próximo volume.
Conforme a cubagem de pallet realizada pelo sistema WCS, operador verifica fisicamente o status do led, se o pallet está cheio fisicamente o led acenderá na cor “Ex: Laranja” e o operador deve realizar a leitura de uma etiqueta Master e acionar o LED para realizar o fechamento desse pallet e abrir um novo.
Caso necessário, o operador poderá forçar o fechamento do pallet realizando a leitura do código único da posição e após isso o LED acenderá na cor laranja e será solicitado a master do pallet/routeiner para conclusão do fechamento.
Quando a posição do PTL estiver com uma ROTA vinculada, o sistema deve realizar os processos de cubagem e alocação dos volumes fracionados no pallet/routeiner normalmente, porém ao fechar o PTL, o WCS não deve enviar integrações ao WMS pois não será utilizada nos processos posteriores.
Será de responsabilidade do WMS disponibilizar as etiquetas Masters para a Operação.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** PTL (Alto Giro)  
**Score:** — (semantico) | **ID:** 2c4571c5088d4cf5

Nesta parte da célula, contamos com 6 posições de PTL, onde cada uma representa um carrinho/pallet individual destinado ao laboratório do CD para tratamento dos equipamentos.
Cada carrinho possui uma posição exclusiva no WCS com seu respectivo PTL. O picking map definirá quais SKUs devem ser direcionados para cada carrinho/pallet, sendo importante destacar que uma mesma posição poderá receber mais de um SKU, conforme o mapeamento estabelecido.
Quando o MAC Address for lido no PDV e o SKU validado visualmente pelo operador, o WCS acenderá na cor verde o LED da posição de PTL correspondente ao carrinho indicado no picking map, direcionando o operador para a alocação correta. Após depositar o item, o operador confirmará a ação pressionando o LED, e o status do item será automaticamente alterado para "alocado".

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Parâmetros por transportadora  
**Score:** — (semantico) | **ID:** d31528d47dcbacdd

Campo de Configuração Principal
Realiza Paletização? (Sim / Não)
Não → O WCS atualiza o status do volume imediatamente após o volume ser desviado na rampa.
Sim → O WCS realiza o fluxo completo de alocação, atualizando o status do volume somente após a alocação.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Agrupamento por Subárea  
**Score:** — (semantico) | **ID:** 7489976c495552a3

Para pedidos cuja transportadora seja diferente de “Própria”, o agrupamento dos pallets no PTL não será realizado com base no romaneio, e sim na subárea informada na integração de Trabalhos – Work (item 6.4).
Essa mudança garante que o agrupamento dos volumes e pallets siga a lógica operacional de transporte do cliente, refletindo com precisão a divisão logística estabelecida no WMS.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Processo de Picking Exceção  
**Score:** — (semantico) | **ID:** f55bd6853dd077f3

O Picking Exceção será utilizado para itens que não se enquadram nos parâmetros da automação, mas que devem ser alocados manualmente no processo de PTL (Put to Light). O fluxo operacional será semelhante ao processo de Full Case, mas com a diferença de que os itens não farão parte da automação e serão direcionados manualmente para a alocação no PTL.
Fluxo Operacional de Picking Exceção:
O operador realiza o login no WCS utilizando o coletor Android.
O operador seleciona a tela de Picking Exceção, onde escolhe o posto de impressão em que está fisicamente para retirar as etiquetas.
Após selecionar o posto de impressão, o operador escolhe a rua da qual ele irá fazer o Picking Exceção. O sistema exibirá a lista de tarefas de separação de acordo com a rua selecionada e os volumes disponíveis.
As tarefas de Picking Exceção serão segregadas por rampa do Sorter, permitindo que o operador saiba para qual rampa deve levar os itens após a coleta.
O operador seleciona quantas tarefas deseja iniciar.
O WCS imprime a quantidade selecionada, seguindo a lógica de impressão do processo de Full Case.
O coletor é direcionado para a tela de coleta, onde o operador deve se deslocar até o endereço especificado no coletor.
O operador realiza a leitura do endereço para iniciar a coleta do item.
O operador realiza a leitura da etiqueta impressa e depois realiza a leitura do código do item, colocando o item no carrinho.
O operador se desloca para o próximo endereço e repete o processo até concluir todas as coletas.
Alocação no PTL:
Após finalizar todas as coletas, o WCS informa em qual rampa do sorter os itens coletados devem ser alocados.
Ele deixará o os volumes a disposição do operador de PTL responsável a rampa onde ele fará o processo de PTL
Cada volume será associado à sua respectiva posição de PTL, e o operador deverá alocar os itens manualmente, confirmando a alocação no PTL.
Esse processo de Picking Exceção garante que itens que não se enquadram no processo automatizado sejam tratados manualmente de forma eficiente e organizada, mantendo a rastreabilidade e a precisão durante a separação dos volumes e a alocação nas posições de PTL.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Put To Light (PTL)  
**Score:** — (semantico) | **ID:** 85a3a7a86ae3e188

O sistema WCS realiza a abertura automática das posições PTL no momento em que os romaneios são iniciados na tela de romaneios, o WCS irá distribuir os romaneios para as posições de ptl de forma dinâmica priorizando manter um romaneio em uma única rampa sempre que for possível. 

Para iniciar a operação do PTL, o operador da rampa deve realizar login no sistema, realizando a leitura do código de usuário, possibilitando o mapeamento e a alocação correta dos volumes.
Ao receber uma caixa na rampa, o operador realiza a leitura do QR code da etiqueta do volume. Em seguida, o display da posição PTL correspondente acende, indicando o local (posição do pallet) onde o volume deve ser alocado um mesmo led será utilizado para dois endereços, no led deve exibir o final do código do endereço para que o operador saiba em qual posição colocar. O operador aloca o volume na posição indicada e confirma o posicionamento pressionando o botão do display, encerrando a tarefa daquele volume.
A cada confirmação de alocação, o WCS registra a quantidade conferida e atualiza essas informações no sistema. Após a alocação e confirmação no display, o operador retorna à rampa para processar o próximo volume.
Cada rampa do sorter conta com 24 posições de PTL, totalizando 192 posições no total. Cada posição é equipada com um LED que fará a sinalização visual do local correto para alocação do volume.
A cubagem do pallet será realizada pelo WCS previamente, através do cadastro de parâmetros. O fechamento do PTL poderá ocorrer por peso ou cubagem atingida, ou ainda pela totalidade do pedido. O operador poderá realizar o fechamento do pallet manualmente, caso julgue necessário. No entanto, o WCS não permitirá o fechamento do pallet quando ainda houver volumes pendentes, conforme a quantidade parametrizada, garantindo que não seja aberto um novo pallet para a alocação de poucos volumes.
Após o fechamento do pallet é impresso uma etiqueta na rampa do sorter para que o operador identifique o pallet e confirme o fechamento, tornando a posição disponível novamente nesse momento é enviado a integração de expedição informando o conteúdo do pallet para que o wms siga com o faturamento. O WCS reserva o lugar de cada volume nos pallets antes mesmo do volume chegar na rampa, sendo possível assim colocar os volumes no pallet respectivo respeitando a sequência de entrega.


Tratamento de Volumes com Itens Perigosos
Para volumes que contenham itens classificados como perigosos, o WCS deve aplicar uma regra específica de manuseio e agrupamento. Esses volumes não podem ser misturados aos demais e deverão ser agrupados em um pallet exclusivo, segregado dos pallets comuns.
Além disso, o sistema deve garantir que esse pallet com itens perigosos seja identificado de forma distinta e programado para ser o último a ser carregado

PTL Exclusivo para Produtos Específicos
Será incluído um campo no cadastro de produtos para identificar quais itens exigem PTL exclusivo durante o processo de alocação. Quando um produto for marcado com essa flag, o sistema WCS irá automaticamente reservar uma posição de PTL exclusiva para ele, garantindo que os volumes contendo esses itens sejam alocados de forma segregada. Este pallet deve ser programado para ser o penúltimo a ser carregado.
Essa configuração será aplicada a todos os produtos pertencentes ao mesmo romaneio, desde que esses produtos tenham a flag de PTL exclusivo ativada no cadastro. Ao receber um pedido contendo produtos com essa característica, o sistema realizará a alocação de forma a garantir que todos os volumes relacionados a esses itens sejam direcionados para as posições de PTL previamente reservadas, sem misturá-los com outros volumes no processo de alocação.
Para produtos com a flag de PTL exclusivo ativa que ultrapassem qualquer uma das dimensões do pallet o WCS deve considerar uma cubagem mínima sendo possível alocalos ao pallet
Agrupamento por Subárea (Transportadoras Diferentes de “Própria”)
Para pedidos cuja transportadora seja diferente de “Própria”, o agrupamento dos pallets no PTL não será realizado com base no romaneio, mas sim na subárea informada na integração de Trabalhos – Work (item 6.4).
O campo subArea enviado na integração será utilizado pelo WCS como agrupador logístico principal, permitindo que os volumes sejam separados fisicamente por destino final, para transportadoras parceiras.
Regras operacionais:
Quando transportadora ≠ “Própria”, o WCS deve agrupar os volumes e pallets por subárea, ignorando o agrupamento por romaneio.
Cada subárea será considerada uma entidade independente de agrupamento, possuindo sua própria posição de PTL na rampa correspondente.
O fechamento dos pallets ocorrerá de forma individual por subárea, seguindo as mesmas regras de cubagem e peso.
O sistema deve permitir que múltiplas subáreas coexistam em uma mesma rampa, desde que cada uma possua posição reservada exclusiva.
Exemplo:
Se um romaneio contiver volumes destinados às subáreas “Porto Alegre”, “Canoas” e “Esteio”, o WCS criará três agrupamentos distintos no PTL, um para cada subárea, alocando os volumes em posições exclusivas de acordo com o destino logístico.
Essa regra assegura rastreabilidade por destino, e atende da melhor forma o trabalho das transportadoras parceiras, auxiliando na segregação dos volumes que hoje é feita manualmente.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** PTL, e Pallets Termolábeis  
**Score:** — (semantico) | **ID:** 76c8e37b5166a128

Para os pallets gerados nos processos de PTL e Picking Termolábil, será utilizado o seguinte layout de impressão:

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Agrupamento por Subárea  
**Score:** — (semantico) | **ID:** 7b9aa429d5b6f892

Para pedidos cuja transportadora seja diferente de “Própria”, o agrupamento dos pallets no PTL não será realizado com base no romaneio, e sim na subárea informada na integração de Trabalhos – Work (item 6.4).
Essa mudança garante que o agrupamento dos volumes e pallets siga a lógica operacional de transporte do cliente, refletindo com precisão a divisão logística estabelecida no WMS.
Regras Operacionais:
Quando o campo transportadora da integração de Trabalhos – Work vier com valor diferente de “Própria”, o WCS deve utilizar o campo subArea como agrupador logístico principal.
O agrupamento dos pallets passará a ocorrer por subárea, e não mais por romaneio, permitindo a separação física e lógica dos volumes conforme o destino final.
Cada subárea será considerada uma entidade independente de agrupamento, possuindo suas próprias posições de PTL.
O WCS deve reservar uma posição de PTL para cada subárea ativa alocada à rampa correspondente no sorter, assegurando que os volumes sejam direcionados e alocados corretamente.
O fechamento de cada pallet ocorrerá de forma individual por subárea, respeitando as mesmas regras de cubagem e peso configuradas para o processo de PTL.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Processo de Picking Exceção  
**Score:** — (semantico) | **ID:** fe72d732c1df4dfc

O Picking Exceção será utilizado para itens que não se enquadram nos parâmetros da automação, mas que devem ser alocados manualmente no processo de PTL (Put to Light). O fluxo operacional será semelhante ao processo de Full Case, mas com a diferença de que os itens não farão parte da automação e serão direcionados manualmente para a alocação no PTL.
Fluxo Operacional de Picking Exceção:
O operador realiza o login no WCS utilizando o coletor Android.
O operador seleciona a tela de Picking Exceção, onde escolhe o posto de impressão em que está fisicamente para retirar as etiquetas.
Após selecionar o posto de impressão, o operador escolhe a rua da qual ele irá fazer o Picking Exceção. O sistema exibirá a lista de tarefas de separação de acordo com a rua selecionada e os volumes disponíveis.
As tarefas de Picking Exceção serão segregadas por rampa do Sorter, permitindo que o operador saiba para qual rampa deve levar os itens após a coleta.
O operador seleciona quantas tarefas deseja iniciar.
O WCS imprime a quantidade selecionada, seguindo a lógica de impressão do processo de Full Case.
O coletor é direcionado para a tela de coleta, onde o operador deve se deslocar até o endereço especificado no coletor.
O operador realiza a leitura do endereço para iniciar a coleta do item.
O operador realiza a leitura da etiqueta impressa e depois realiza a leitura do código do item, colocando o item no carrinho.
O operador se desloca para o próximo endereço e repete o processo até concluir todas as coletas.
Alocação no PTL:
Após finalizar todas as coletas, o WCS informa em qual rampa do sorter os itens coletados devem ser alocados.
Ele deixará o os volumes a disposição do operador de PTL responsável a rampa onde ele fará o processo de PTL
Cada volume será associado à sua respectiva posição de PTL, e o operador deverá alocar os itens manualmente, confirmando a alocação no PTL.
Esse processo de Picking Exceção garante que itens que não se enquadram no processo automatizado sejam tratados manualmente de forma eficiente e organizada, mantendo a rastreabilidade e a precisão durante a separação dos volumes e a alocação nas posições de PTL.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Put To Light (PTL)  
**Score:** — (semantico) | **ID:** 0d441507701ead23

O sistema WCS realiza a abertura automática das posições PTL no momento em que os romaneios são iniciados na tela de romaneios, o WCS irá distribuir os romaneios para as posições de ptl de forma dinâmica priorizando manter um romaneio em uma única rampa sempre que for possível. 

Para iniciar a operação do PTL, o operador da rampa deve realizar login no sistema, realizando a leitura do código de usuário, possibilitando o mapeamento e a alocação correta dos volumes.
Ao receber uma caixa na rampa, o operador realiza a leitura do QR code da etiqueta do volume. Em seguida, o display da posição PTL correspondente acende, indicando o local (posição do pallet) onde o volume deve ser alocado. O operador aloca o volume na posição indicada e confirma o posicionamento pressionando o botão do display, encerrando a tarefa daquele volume.
A cada confirmação de alocação, o WCS registra a quantidade conferida e atualiza essas informações no sistema. Após a alocação e confirmação no display, o operador retorna à rampa para processar o próximo volume.
Cada rampa do sorter conta com 24 posições de PTL, totalizando 192 posições no total. Cada posição é equipada com um LED que fará a sinalização visual do local correto para alocação do volume.
A cubagem do pallet será realizada pelo WCS previamente, através do cadastro de parâmetros. O fechamento do PTL poderá ocorrer por peso ou cubagem atingida, ou ainda pela totalidade do pedido. O operador poderá realizar o fechamento do pallet manualmente, caso julgue necessário. No entanto, o WCS não permitirá o fechamento do pallet quando ainda houver volumes pendentes, conforme a quantidade parametrizada, garantindo que não seja aberto um novo pallet para a alocação de poucos volumes.
Após o fechamento do pallet é impresso uma etiqueta na rampa do sorter para que o operador identifique o pallet e confirme o fechamento, tornando a posição disponível novamente nesse momento é enviado a integração de expedição informando o conteúdo do pallet para que o wms siga com o faturamento. O WCS reserva o lugar de cada volume nos pallets antes mesmo do volume chegar na rampa, sendo possível assim colocar os volumes no pallet respectivo respeitando a sequência de entrega.


Tratamento de Volumes com Itens Perigosos
Para volumes que contenham itens classificados como perigosos, o WCS deve aplicar uma regra específica de manuseio e agrupamento. Esses volumes não podem ser misturados aos demais e deverão ser agrupados em um pallet exclusivo, segregado dos pallets comuns.
Além disso, o sistema deve garantir que esse pallet com itens perigosos seja identificado de forma distinta e programado para ser o último a ser carregado

PTL Exclusivo para Produtos Específicos
Será incluído um campo no cadastro de produtos para identificar quais itens exigem PTL exclusivo durante o processo de alocação. Quando um produto for marcado com essa flag, o sistema WCS irá automaticamente reservar uma posição de PTL exclusiva para ele, garantindo que os volumes contendo esses itens sejam alocados de forma segregada. Este pallet deve ser programado para ser o penúltimo a ser carregado.
Essa configuração será aplicada a todos os produtos pertencentes ao mesmo romaneio, desde que esses produtos tenham a flag de PTL exclusivo ativada no cadastro. Ao receber um pedido contendo produtos com essa característica, o sistema realizará a alocação de forma a garantir que todos os volumes relacionados a esses itens sejam direcionados para as posições de PTL previamente reservadas, sem misturá-los com outros volumes no processo de alocação.
Para produtos com a flag de PTL exclusivo ativa que ultrapassem qualquer uma das dimensões do pallet o WCS deve considerar uma cubagem mínima sendo possível alocalos ao pallet
Agrupamento por Subárea (Transportadoras Diferentes de “Própria”)
Para pedidos cuja transportadora seja diferente de “Própria”, o agrupamento dos pallets no PTL não será realizado com base no romaneio, mas sim na subárea informada na integração de Trabalhos – Work (item 6.4).
O campo subArea enviado na integração será utilizado pelo WCS como agrupador logístico principal, permitindo que os volumes sejam separados fisicamente por destino final, para transportadoras parceiras.
Regras operacionais:
Quando transportadora ≠ “Própria”, o WCS deve agrupar os volumes e pallets por subárea, ignorando o agrupamento por romaneio.
Cada subárea será considerada uma entidade independente de agrupamento, possuindo sua própria posição de PTL na rampa correspondente.
O fechamento dos pallets ocorrerá de forma individual por subárea, seguindo as mesmas regras de cubagem e peso.
O sistema deve permitir que múltiplas subáreas coexistam em uma mesma rampa, desde que cada uma possua posição reservada exclusiva.
Exemplo:
Se um romaneio contiver volumes destinados às subáreas “Porto Alegre”, “Canoas” e “Esteio”, o WCS criará três agrupamentos distintos no PTL, um para cada subárea, alocando os volumes em posições exclusivas de acordo com o destino logístico.
Essa regra assegura rastreabilidade por destino, e atende da melhor forma o trabalho das transportadoras parceiras, auxiliando na segregação dos volumes que hoje é feita manualmente.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** PTL, e Pallets Termolábeis  
**Score:** — (semantico) | **ID:** 1e86d1865a8c3614

Para os pallets gerados nos processos de PTL e Picking Termolábil, será utilizado o seguinte layout de impressão:

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Agrupamento por Subárea  
**Score:** — (semantico) | **ID:** a23724e6c9c6bc40

Para pedidos cuja transportadora seja diferente de “Própria”, o agrupamento dos pallets no PTL não será realizado com base no romaneio, e sim na subárea informada na integração de Trabalhos – Work (item 6.4).
Essa mudança garante que o agrupamento dos volumes e pallets siga a lógica operacional de transporte do cliente, refletindo com precisão a divisão logística estabelecida no WMS.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Processo de Picking Exceção  
**Score:** — (semantico) | **ID:** 4f232965b4a99c5a

O Picking Exceção será utilizado para itens que não se enquadram nos parâmetros da automação, mas que devem ser alocados manualmente no processo de PTL (Put to Light). O fluxo operacional será semelhante ao processo de Full Case, mas com a diferença de que os itens não farão parte da automação e serão direcionados manualmente para a alocação no PTL.
Fluxo Operacional de Picking Exceção:
O operador realiza o login no WCS utilizando o coletor Android.
O operador seleciona a tela de Picking Exceção, onde escolhe o posto de impressão em que está fisicamente para retirar as etiquetas.
Após selecionar o posto de impressão, o operador escolhe a rua da qual ele irá fazer o Picking Exceção. O sistema exibirá a lista de tarefas de separação de acordo com a rua selecionada e os volumes disponíveis.
As tarefas de Picking Exceção serão segregadas por rampa do Sorter, permitindo que o operador saiba para qual rampa deve levar os itens após a coleta.
O operador seleciona quantas tarefas deseja iniciar.
O WCS imprime a quantidade selecionada, seguindo a lógica de impressão do processo de Full Case.
O coletor é direcionado para a tela de coleta, onde o operador deve se deslocar até o endereço especificado no coletor.
O operador realiza a leitura do endereço para iniciar a coleta do item.
O operador realiza a leitura da etiqueta impressa e depois realiza a leitura do código do item, colocando o item no carrinho.
O operador se desloca para o próximo endereço e repete o processo até concluir todas as coletas.
Alocação no PTL:
Após finalizar todas as coletas, o WCS informa em qual rampa do sorter os itens coletados devem ser alocados.
Ele deixará o os volumes a disposição do operador de PTL responsável a rampa onde ele fará o processo de PTL
Cada volume será associado à sua respectiva posição de PTL, e o operador deverá alocar os itens manualmente, confirmando a alocação no PTL.
Esse processo de Picking Exceção garante que itens que não se enquadram no processo automatizado sejam tratados manualmente de forma eficiente e organizada, mantendo a rastreabilidade e a precisão durante a separação dos volumes e a alocação nas posições de PTL.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Put To Light (PTL)  
**Score:** — (semantico) | **ID:** 9e3b309fee4f3e61

O sistema WCS realiza a abertura automática das posições PTL no momento em que os romaneios são iniciados na tela de romaneios, o WCS irá distribuir os romaneios para as posições de ptl de forma dinâmica priorizando manter um romaneio em uma única rampa sempre que for possível. 

Para iniciar a operação do PTL, o operador da rampa deve realizar login no sistema, realizando a leitura do código de usuário, possibilitando o mapeamento e a alocação correta dos volumes.
Ao receber uma caixa na rampa, o operador realiza a leitura do QR code da etiqueta do volume. Em seguida, o display da posição PTL correspondente acende, indicando o local (posição do pallet) onde o volume deve ser alocado um mesmo led será utilizado para dois endereços, no led deve exibir o final do código do endereço para que o operador saiba em qual posição colocar. O operador aloca o volume na posição indicada e confirma o posicionamento pressionando o botão do display, encerrando a tarefa daquele volume.
O LED do PTL possui display numérico de 3 dígitos. Serão exibidos os 3 últimos caracteres do código da posição de PTL para identificação pelo operador.
A cada confirmação de alocação, o WCS registra a quantidade conferida e atualiza essas informações no sistema. Após a alocação e confirmação no display, o operador retorna à rampa para processar o próximo volume.
Cada rampa do sorter conta com 24 posições de PTL, totalizando 192 posições no total. Cada posição é equipada com um LED que fará a sinalização visual do local correto para alocação do volume.
A cubagem do pallet será realizada pelo WCS previamente, através do cadastro de parâmetros. O fechamento do PTL poderá ocorrer por peso ou cubagem atingida, ou ainda pela totalidade do pedido. O operador poderá realizar o fechamento do pallet manualmente, caso julgue necessário. No entanto, o WCS não permitirá o fechamento do pallet quando ainda houver volumes pendentes, conforme a quantidade parametrizada, garantindo que não seja aberto um novo pallet para a alocação de poucos volumes.
Após o fechamento do pallet é impresso uma etiqueta na rampa do sorter para que o operador identifique o pallet e confirme o fechamento, tornando a posição disponível novamente nesse momento é enviado a integração de expedição informando o conteúdo do pallet para que o wms siga com o faturamento. O WCS reserva o lugar de cada volume nos pallets antes mesmo do volume chegar na rampa, sendo possível assim colocar os volumes no pallet respectivo respeitando a sequência de entrega.


Tratamento de Volumes com Itens Perigosos
Para volumes que contenham itens classificados como perigosos, o WCS deve aplicar uma regra específica de manuseio e agrupamento. Esses volumes não podem ser misturados aos demais e deverão ser agrupados em um pallet exclusivo, segregado dos pallets comuns.
Além disso, o sistema deve garantir que esse pallet com itens perigosos seja identificado de forma distinta e programado para ser o último a ser carregado

PTL Exclusivo para Produtos Específicos
Será incluído um campo no cadastro de produtos para identificar quais itens exigem PTL exclusivo durante o processo de alocação. Quando um produto for marcado com essa flag, o sistema WCS irá automaticamente reservar uma posição de PTL exclusiva para ele, garantindo que os volumes contendo esses itens sejam alocados de forma segregada. Este pallet deve ser programado para ser o penúltimo a ser carregado.
Essa configuração será aplicada a todos os produtos pertencentes ao mesmo romaneio, desde que esses produtos tenham a flag de PTL exclusivo ativada no cadastro. Ao receber um pedido contendo produtos com essa característica, o sistema realizará a alocação de forma a garantir que todos os volumes relacionados a esses itens sejam direcionados para as posições de PTL previamente reservadas, sem misturá-los com outros volumes no processo de alocação.
Para produtos com a flag de PTL exclusivo ativa que ultrapassem qualquer uma das dimensões do pallet o WCS deve considerar uma cubagem mínima sendo possível alocalos ao pallet
Agrupamento por Subárea (Transportadoras Diferentes de “Própria”)
Para pedidos cuja transportadora seja diferente de “Própria”, o agrupamento dos pallets no PTL não será realizado com base no romaneio, mas sim na subárea informada na integração de Trabalhos – Work (item 6.4).
O campo subArea enviado na integração será utilizado pelo WCS como agrupador logístico principal, permitindo que os volumes sejam separados fisicamente por destino final, para transportadoras parceiras.
Regras operacionais:
Quando transportadora ≠ “Própria”, o WCS deve agrupar os volumes e pallets por subárea, ignorando o agrupamento por romaneio.
Cada subárea será considerada uma entidade independente de agrupamento, possuindo sua própria posição de PTL na rampa correspondente.
O fechamento dos pallets ocorrerá de forma individual por subárea, seguindo as mesmas regras de cubagem e peso.
O sistema deve permitir que múltiplas subáreas coexistam em uma mesma rampa, desde que cada uma possua posição reservada exclusiva.
Exemplo:
Se um romaneio contiver volumes destinados às subáreas “Porto Alegre”, “Canoas” e “Esteio”, o WCS criará três agrupamentos distintos no PTL, um para cada subárea, alocando os volumes em posições exclusivas de acordo com o destino logístico.
Essa regra assegura rastreabilidade por destino, e atende da melhor forma o trabalho das transportadoras parceiras, auxiliando na segregação dos volumes que hoje é feita manualmente.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** PTL, e Pallets Termolábeis  
**Score:** — (semantico) | **ID:** 5c84be8acd22436f

Para os pallets gerados nos processos de PTL e Picking Termolábil, será utilizado o seguinte layout de impressão:

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 02861a0a50f8409a

Ao iniciar a operação, o operador da saída do sorter deverá realizar o login na rampa para que consiga mapear e alocar os volumes nas posições indicadas.
Após o desvio do volume na rampa correta o operador pode realizar a leitura do volume (caixa) através do scanner da rampa, uma vez que o WCS recebe a informação do código da caixa ele acende o led da posição de PTL informando onde o operador deve colocar o volume ou acenderá todos os leds do posto de PTL vinculado ao scanner que realizou a leitura na cor vermelha informando que o volume não pertence a nenhuma das posições presentes no posto PTL.
Quando o volume pertence a uma posição do posto o WCS acenderá o led correspondente a posição PTL como informado acima e o operador deve colocar o volume no pallet e em seguida confirmar apertando o botão do led, assim o WCS identifica a alocação e guarda essas informações para enviar posteriormente ao WMS.
No decorrer das alocações de volumes ao pallet o WCS verifica a cubagem e peso como mencionado do item Cubagem de pallet, indicando que o pallet deve ser fechado ao operador através de uma cor especifica no led, sendo que a cada pallet fechado é retornado uma integração para o WMS.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar a leitura de um código master impresso previamente pelo WMS que será vinculado aos volumes que foram alocados a este pallet. A master (Avulsa) é impressa sem um destino definido (LOJA).
O WCS não deve permitir a reutilização desses códigos.
A disponibilização desta etiqueta master será de responsabilidade do cliente.
Em caso de rejeito, o operador terá uma tela que irá exibir o diagnóstico de erro deste volume e poderá induzir novamente caso for necessário.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Sugestão de Alocação  
**Score:** — (semantico) | **ID:** 694250084b346d62

O sistema WCS é responsável por sugerir a alocação estratégica dos produtos (CD) Comercial Esperança, utilizando como base a análise da curva ABC e outras características operacionais relevantes. Essa alocação visa maximizar a eficiência operacional e otimizar o fluxo de trabalho.
Nota: Para garantir a organização e facilitar o manuseio, o sistema impede a mistura de famílias de produtos em posições próximas.
Benefícios esperados
Com a alocação sugerida pelo WCS, o Comercial Esperança pode:
Maximizar a produtividade dos operadores;
Minimizar os deslocamentos internos;
Melhorar o fluxo operacional do CD;
Reduzir os tempos de separação e a ocorrência de erros.
Estratégia de Alocação por Zona
Produtos de Higiene, Limpeza e Bazar: Alocados nas extremidades do CD, ocupando cerca de 15% da área de picking em cada lado, devido à menor rotatividade ou características específicas de manuseio desses produtos.
Produtos Alimentícios: Serão alocados na área central do CD, correspondendo a cerca de 70% da área de picking, devido à sua alta rotatividade e prioridade no processo de separação.
Critérios de Alocação com base na Curva ABC
A curva ABC é uma técnica que classifica os produtos conforme seu impacto na movimentação, baseada em dados históricos de coleta e separação:
Itens da Curva A:
Produtos de alta rotatividade e maior valor em volume de movimentação. Serão alocados nas posições mais acessíveis, próximas aos pontos de indução, para reduzir tempo e distância na separação.
Itens da Curva B:
Produtos com média rotatividade. Serão alocados em posições de acessibilidade e ocupação intermediárias.
Itens da Curva C:
Produtos de baixa rotatividade. Serão posicionados em áreas menos prioritárias e mais distantes, otimizando o uso do espaço para itens de maior demanda.
Funcionamento do Sistema de Sugestão de Alocação
O WCS realiza uma análise contínua dos índices de movimentação e frequência de separação para atualizar a classificação da curva ABC e ajustar as sugestões de alocação.
As sugestões são integradas ao planejamento operacional, permitindo a realocação estratégica conforme a demanda e sazonalidade.
Essa abordagem contribui para um fluxo de trabalho mais eficiente, redução de custos operacionais, minimizando desperdícios.
Nota: O WCS baseia suas sugestões exclusivamente em dados de movimentação e coleta dos SKUs, não considerando a quantidade física em estoque.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** f078bd7436466e7a

O sistema WCS realiza a abertura automática das posições PTL no momento em que o volume é desviado para a rampa de saída. Para iniciar a operação, o operador da rampa deve realizar login no sistema, possibilitando o mapeamento e a alocação correta dos volumes.
Ao receber uma caixa na rampa, o operador realiza a leitura do código de barras da etiqueta do volume. Em seguida, o display da posição PTL correspondente acende, indicando o local (posição do pallet) onde o volume deve ser alocado. O operador aloca o volume na posição indicada e confirma o posicionamento pressionando o botão do display, encerrando a tarefa daquele volume.
A cada confirmação de alocação, o WCS registra a quantidade conferida e atualiza essas informações diretamente no WMS, volume a volume a nível de item, caracterizando o processo de conferência. Esse mecanismo garante que todos os itens que compõem o volume sejam corretamente marcados como conferidos no sistema do WMS.
Nota: Enquanto a inteligência artificial (IA) não estiver plenamente implantada no processo, o sistema exigirá uma conferência dupla, com leitura do código de barras da etiqueta do volume e do produto. Essa exigência será controlada por um parâmetro de sistema, podendo ser ativado ou desativado conforme a necessidade operacional. A regra de aplicação será definida pelo time Invent durante o período de testes e implantação.
Após a alocação e confirmação no display, o operador retorna à rampa para processar o próximo volume.
A cubagem do pallet não será realizada pelo WCS, pois os dados de roteirização e definição de pallet já são informados no início da operação pelo WMS. O fechamento do PTL será realizado manualmente pelo operador, conforme instruções operacionais do cliente.
Cada loja ou cliente configurado no mapa do sorter terá duas posições PTL associadas, respeitando a matriz de fragilidade previamente definida.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Alocação via PTL  
**Score:** — (semantico) | **ID:** 1b2048978a556f4a

As 20 rampas totalizam 168 posições PTL, processo realizado após o volume ser desviado no chute:
O operador com coletor em mãos realiza a leitura da etiqueta da caixa, display PTL acende imediatamente após a leitura do volume, indicando a posição correta.
O operador deposita a caixa na posição, confirma pressionando o botão do display, e o WCS atualiza os dados de conferência no WMS.
O controle de cubagem do pallet é feito pelo WMS
Cada rota pode ocupar 2 a 3 posições PTL, respeitando a matriz de fragilidade.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Sinaleiros  
**Score:** — (nome-topico) | **ID:** e3958b47db77ae16

Indicam status das rampas:
Verde: rampa disponível
Amarelo piscando: rampa cheia
Vermelho piscando: emergência
Todas piscando simultaneamente: falha de comunicação com o sistema WCS

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Sugestão de Alocação no Picking  
**Score:** — (semantico) | **ID:** b3a5b0e7067c5302

O WCS sugere alocação estratégica conforme curva ABC, mantendo separação entre produtos alimentícios e não alimentícios, maximizando eficiência.
Curva A: posições centrais e mais acessíveis
Curva B: posições intermediárias
Curva C: extremidades

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
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
Itens curva A – Itens de alta prioridade devem ficar alocados nas áreas de picking mais acessíveis e próximas ao ponto de saída. Com isso, reduzimos o tempo de deslocamento dos operadores, aumentando a eficiência dos responsáveis pela separação.
Itens curva B – Itens de prioridade intermediaria, devem ficar alocados em áreas de facil acesso, mas não necessariamente tão próximas quanto os itens de curva A.
Itens curva C – Itens de baixa prioridade, devem ficar alocados nas áreas mais distantes dos pontos de saída, onde a visita nesses endereços é menos frequente.
O sistema WCS, baseado nos índices de produtos por separação, fará a sugestão de alocação de curva ABC, operador assim terá a possibilidade de verificar a sugestão do sistema WCS, e caso seja necessário realizar alteração, deverá alterar o posicionamento dos produtos nos endereços sugeridos pelo WCS.
A sugestão de alocação será no sistema do WCS, a decisão de alterar o mapeamento dos produtos, será da operação.
O sistema WCS deverá gerar um relatório para analisar os itens que mais vendem e suas classificações para revisão operacional e rebalanceamento.

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Sugestão de Alocação  
**Score:** — (semantico) | **ID:** 959e78069ece9efc

O WCS possui uma funcionalidade inteligente que armazena e analisa o histórico de separações realizadas pela automação, considerando a quantidade de unidades coletadas por item e a frequência de visitas a cada endereço de picking. Com base nesses dados, o sistema gera uma sugestão otimizada de alocação dos produtos dentro dos postos de separação.
O princípio da sugestão consiste em alocar os itens com maiores números de coletas e visitas nas posições mais próximas ao operador, distribuindo os itens de menor movimentação nas extremidades de cada posto. Essa reorganização tem como objetivo aumentar a produtividade da linha de picking, reduzindo deslocamentos e otimizando o tempo de separação.
Para gerar a sugestão, o usuário informa o período desejado de análise, com data inicial e final. O sistema então apresenta um relatório com o ranking de coleta de todos os itens da base, contendo: código do produto, descrição, endereço atual e posto sugerido. Essa funcionalidade permite que a operação reorganize periodicamente o layout dos postos de forma estratégica, com base em dados reais da própria operação.
As informações geradas pela sugestão de alocação podem ser exportadas via Excel, facilitando a análise e a implementação prática das melhorias sugeridas.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Parâmetros por transportadora  
**Score:** — (semantico) | **ID:** 19854851d861a77f

Campo de Configuração Principal
Realiza Paletização? (Sim / Não)
Não → O WCS atualiza o status do volume imediatamente após o volume ser desviado na rampa.
Sim → O WCS realiza o fluxo completo de alocação, atualizando o status do volume somente após a alocação.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 4020850e212eb0ce

Al iniciar la operación, el operador de salida del sorter deberá iniciar sesión en la rampa para poder mapear y asignar los volúmenes en las posiciones indicadas.
Etiquetas utilizadas en el proceso PTL:
Etiqueta PTL: QR Code fijo instalado en cada posición de la estación PTL. Utilizada para la apertura y cierre del palet.
Etiqueta OLPN: Generada por el WMS, contiene un código único de 18 dígitos. Identifica de forma única cada palet de salida y garantiza la trazabilidad.
Apertura del palet (obligatoria antes de iniciar la inducción): Antes de que las cajas comiencen a ser inducidas en el sorter, el operador debe abrir el palet realizando dos lecturas secuenciales: primero escanea la Etiqueta PTL (QR Code) de la posición y luego escanea una Etiqueta OLPN (18 dígitos). Esto crea el vínculo entre la OLPN y la posición PTL. Solo después de este proceso el sistema permitirá la asignación de volúmenes.
Asignación de volúmenes — Doble Confirmación (configurable): El sistema dispone de una opción en la pantalla de configuración llamada Doble Confirmación de Escaneo:
Activada: El proceso de asignación requiere dos lecturas. En la primera, el operador escanea la etiqueta del volumen (IVT) y el LED se enciende en naranja (primera lectura aceptada, espera segunda confirmación). En la segunda, escanea el código de la caja (DUN/EAN) y el LED cambia a azul (vinculación completa).
Desactivada: Solo se requiere una lectura. El operador escanea la etiqueta IVT/DUN y el LED se enciende directamente en azul.
En ambos modos, si el volumen no pertenece a ninguna de las posiciones de la estación PTL, el WCS encenderá todos los LEDs de la estación en rojo.
Cuando el LED está en azul y el volumen pertenece a la posición, el operador debe depositar la caja en el palet y confirmar presionando el botón del LED azul. En ese momento, el WCS registra la asignación y envía la integración caja a caja al WMS.
Cierre del palet (manual): El cierre del palet es realizado manualmente por el operador, quien evalúa visualmente cuándo el palet alcanza un tamaño adecuado. No hay control automático de cubaje ni peso. Para cerrar, el operador escanea la Etiqueta PTL (QR Code) — los LEDs se encienden en naranja — y luego escanea la Etiqueta OLPN — el LED cambia a azul confirmando el cierre. El operador pega la etiqueta OLPN en el palet físico y presiona el botón. En ese momento, el WCS envía la integración de palet montado al WMS.
Continuación de la operación (reapertura): Si después del cierre aún hay cajas pendientes para esa posición PTL, el operador debe abrir un nuevo palet escaneando nuevamente la Etiqueta PTL (QR Code) y una nueva Etiqueta OLPN (nuevo código de 18 dígitos generado por el WMS), creando un nuevo vínculo. El flujo de asignación continúa normalmente.
El WCS no debe permitir la reutilización de códigos OLPN. La disponibilidad de las etiquetas OLPN es responsabilidad del cliente (WMS).
En caso de rechazo, el sistema mostrará una pantalla con el diagnóstico del error de ese volumen, permitiendo al operador intentar recuperarlo nuevamente si es necesario.
Etiqueta de PTL:
En todos los procesos, una vez finalizado el palet, enviamos la información descrita en el apartado "5.6 Palet Montado" al WMS para que realice las gestiones necesarias.
La impresión de la etiqueta OLPN es responsabilidad del WMS.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** d3a5fc7eef2a78c2

Al iniciar la operación, el operador de la salida del sorter deberá iniciar sesión en la rampa para poder mapear y asignar los volúmenes en las posiciones indicadas.
Después de desviar el volumen a la rampa correcta, el operador puede leer el volumen (caja) con el escáner de la rampa, una vez que el WCS recibe la información del código de la caja, enciende el led de la posición PTL indicando dónde debe colocar el operador el volumen o encenderá todos los leds del puesto PTL vinculado al escáner que realizó la lectura en color rojo indicando que el volumen no pertenece a ninguna de las posiciones presentes en el puesto PTL.
Cuando el volumen pertenece a una posición del puesto, el WCS encenderá el led correspondiente a la posición PTL como se ha indicado anteriormente y el operador deberá colocar el volumen en el palé y, a continuación, confirmar pulsando el botón del led, de modo que el WCS identifique la asignación y guarde esta información para enviarla posteriormente al WMS.
Durante la asignación de volúmenes al palé, el WCS verifica el volumen y el peso, tal y como se menciona en el apartado «Volumen del palé», indicando al operador que debe cerrar el palé mediante un color específico en el led, y cada palé cerrado se devuelve al WMS.
Cuando se solicite el cierre del palé en las salidas de las rampas, el operador deberá leer un código maestro impreso previamente por el WMS que se vinculará a los volúmenes que se han asignado a este palé. El maestro (suelto) se imprime sin un destino definido (TIENDA).
El WCS no debe permitir la reutilización de estos códigos.
La disponibilidad de esta etiqueta maestra será responsabilidad del cliente.
En caso de rechazo, el operador verá una pantalla que mostrará el diagnóstico de error de este volumen y podrá volver a introducirlo si es necesario.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Indução Volumes  
**Score:** — (semantico) | **ID:** 9ee775468763acd7

A indução de volumes será gerenciada e cadenciada pela Operação. O processo começa com o WMS, que realiza o processo de separação e deixa os paletes das tarefas que foram concluídas em uma área chamada “Stage In”, nesse momento é enviado uma integração Etiquetas (5.3) que contém a informação ilpnPtl para cada pallet. Com essas informações, o WCS gera uma listagem orientativa de forma sequencial de indução, onde informa qual pallet deve ser induzido em cada momento, respeitando as condições de disponibilidade e matriz de fragilidade.
A partir da integração dos paletes enviada pelo WMS o WCS já deve permitir que pallets sejam consumidos e induzidos no sorter.
O WCS não monitora o processo de indução; a pedido do cliente, esse processo será controlado pelo Operador, que será responsável por garantir que a indução dos volumes seja realizada de acordo com a matriz de fragilidade previamente fornecida.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
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
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** PTL (Put to Light) – Consolidação Fracionado e Fullcase  
**Score:** — (semantico) | **ID:** 054d144b41586ce0

O PTL atua como vínculo lógico de remessa: cada posição de PTL recebe os volumes Fracionados e Fullcase de uma mesma remessa, garantindo que os volumes do mesmo pedido fiquem agrupados antes da expedição.
Embora os volumes Full Case nunca sejam depositados em posições de PTL, o operador responsável pela coleta Full Case acessa as posições de PTL ao final da sua tarefa para retirar os volumes Fracionados da mesma remessa, conforme detalhado na seção 7.6.4.
Nesse contexto, o PTL exerce duas funções complementares no fluxo:
depósito (entrada): realizado pelos operadores de Picking Fracionado, conforme o fluxo padrão do PTL descrito a seguir;
retirada (saída): realizada pelo operador de Full Case ao consolidar a remessa para expedição.
Operação no PTL:
1. Ao iniciar a operação, o operador da saída realiza login no WCS para mapear e alocar os volumes nas posições indicadas pelo sistema.
2. O operador realiza a leitura de cada volume Fracionado através do scanner. O WCS acende o LED da posição PTL correspondente, indicando onde depositar o volume.
3. Caso o volume não pertença a nenhuma posição do posto (cenários típicos: volume não integrado, volume movido erroneamente para a área, volume com etiqueta inválida ou de outra remessa), todos os LEDs acendem em vermelho, sinalizando o erro. O operador deverá tratar a exceção conforme procedimento operacional.
4. Quando o volume pertence a uma posição, o operador deposita o volume no pallet e confirma com o botão do LED.
5. Após a finalização do agrupamento de uma remessa, a posição PTL é liberada automaticamente para receber a próxima remessa.
6. Quando a remessa que ocupa uma posição de PTL também possui volumes Full Case, o operador da coleta Full Case se dirige ao PTL ao concluir sua tarefa e realiza a leitura das etiquetas dos volumes Fracionados conforme lista exibida pelo WCS. Após a leitura de todas as etiquetas esperadas, a posição de PTL é liberada automaticamente, e os volumes Fracionados acompanham o operador até o ponto de expedição em conjunto com os Full Case daquela remessa.
Obs: Não há fechamento sistêmico de pallet, integração de Aloca Pallet com o EWM/SAP, nem cálculo automático de cubagem/peso por pallet — o agrupamento físico é feito pela operação. A liberação de cada posição de PTL ocorre automaticamente após a retirada de todos os volumes pelo operador da coleta Full Case, em casos com consolidação.

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
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
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Exceções do PTL  
**Score:** — (semantico) | **ID:** a97653ff6aebbd01

Reativação do PTL e janela de fechamento/reabertura
Após o fechamento de um pallet, o PTL só volta ao estado ativo após ação manual do operador:
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
Demais exceções do PTL
Etiqueta inválida: ao bipar uma etiqueta inválida (incluindo OLPN repetida ou fora do comprimento válido), o LED do PTL que o operador está tentando vincular acende em vermelho.
Falta de OLPN para abrir/reabrir: o comportamento não muda, o pallet permanece fechado até a chegada de novas etiquetas OLPN.
Validação da OLPN: feita por comprimento, código de 15 a 18 dígitos.
Pallet incompleto (short pick): o WCS nunca bloqueia o fechamento manual do pallet. Se o operador fechar faltando itens, a integração Pallet Montado é enviada com a quantidade efetivamente montada (totalvolPallet < totalvolEsper). Não há alerta do sistema, mas o operador visualiza que o esperado era X e o pallet foi fechado com Y.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Sugestão de Alocação  
**Score:** — (semantico) | **ID:** 64b4fb556a0b4f63

O WCS Velox é responsável pela sugestão de alocação por Curva ABC. O objetivo é otimizar a eficiência operacional do CD, definir as prioridades das posições e organizar os produtos nas posições de picking. O conceito é baseado em Tarefas: o número de tarefas de separação que passam por cada produto no período é o índice que define sua curva.
Administração de Tarefas. O WCS gerencia o ciclo completo, da definição dos critérios à execução das alocações. O processo é iniciado automaticamente a partir do primeiro mês de operação e é configurável conforme a necessidade.
Range de data para a sugestão. O WCS possui um parâmetro configurável que define a janela de dados históricos considerada ao gerar as sugestões (ex.: 7, 15 ou 30 dias). O administrador define o intervalo por meio de tela própria, e o sistema usa esse intervalo para gerar as sugestões automaticamente, considerando o histórico de separações e a demanda no período.
Classificação por curva. Com base no número de tarefas por produto no período, o WCS classifica os itens e sugere o posicionamento:
Curva A — itens de alta frequência; alocados nas posições de picking mais acessíveis e próximas ao ponto de saída, reduzindo o deslocamento do operador.
Curva B — itens de frequência intermediária; alocados em posições de fácil acesso, não necessariamente tão próximas quanto as da Curva A.
Curva C — itens de baixa frequência; alocados nas posições mais distantes do ponto de saída, de visita menos frequente.
Respeito à Matriz de Fragilidade. A sugestão de alocação respeita obrigatoriamente a Matriz de Fragilidade: independentemente da curva, os itens mais pesados são posicionados nos primeiros postos da sequência de coleta, garantindo que sejam coletados primeiro no picking fracionado (caixa plástica) e protegendo os itens frágeis.
Sugestão x decisão. A sugestão é gerada pelo WCS; a decisão de alterar o mapeamento é da operação. O operador verifica a sugestão e, se necessário, ajusta o posicionamento dos produtos nos endereços indicados. O WCS exibe a quantidade de tarefas por produto em tela de acompanhamento (com filtros por produto, categoria ou data) e gera relatório dos itens de maior saída e suas classificações, para revisão e rebalanceamento periódico.
Exemplo da tela de Tarefas por Produto:

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Rampas de Expedição (Fluxo Padrão com PTL)  
**Score:** — (semantico) | **ID:** 82bac9ea92ad12bc

As demais rampas são agrupadas logicamente por Transportadora. Opcionalmente, uma mesma rampa pode agrupar até duas transportadoras, conforme configuração do Mapa do Sorter — não é obrigatório, sendo o padrão uma transportadora por rampa. O processo de paletização é assistido por Put-to-Light (PTL), garantindo que o operador monte o pallet correto sem precisar ler etiquetas.
Passo a Passo:
Descida: A caixa desliza pela rampa e para na mesa de acumulação.
Identificação: O operador pega a caixa e realiza a leitura do LPN com um scanner de mão.
Sinalização (PTL):
Imediatamente, o display PTL posicionado acima do pallet correspondente acende.
O display mostra a quantidade acumulada ou apenas confirma o local.
Montagem: O operador deposita a caixa sobre o pallet indicado pela luz.
Confirmação: O operador pressiona o botão do PTL para confirmar que a caixa foi alocada.
Erro: Se o operador bipar uma caixa e tentar colocar no pallet errado (não confirmar o botão ou bipar local errado), o sistema emite alerta sonoro.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Put to Light (PTL) / Aloca Pallet  
**Score:** — (semantico) | **ID:** b0b9d829f01941c3

O Put to Light é o processo de alocação de volumes nos pallets de expedição. O WCS controla as posições PTL de forma exclusiva. A expedição é compartilhada entre WCS e WMS.
O projeto possui 28 posições PTL com displays dedicados. O agrupamento principal (master) é por transportadora. Dentro de cada transportadora, o WCS aplica um sub-agrupamento por pedido, buscando concentrar os volumes de um mesmo pedido no menor número de pallets possível, evitando dispersão entre posições PTL. A abertura das posições PTL disponíveis é automática.
Para iniciar a operação do PTL, o operador da rampa realiza login bipando o crachá no leitor da posição. O WCS registra o vínculo entre o operador e a posição PTL, possibilitando o mapeamento, a alocação correta dos volumes e a rastreabilidade das operações realizadas. Para encerrar a sessão, o operador bipa o crachá novamente no mesmo leitor, e o WCS registra o horário de saída e libera o vínculo com a posição.
Fluxo Operacional:
Ao receber uma caixa na rampa, o operador realiza a leitura da etiqueta do volume.
O display da posição PTL correspondente acende, indicando a posição do pallet onde o volume deve ser alocado.
O operador aloca o volume na posição indicada e confirma pressionando o botão do display, encerrando a tarefa daquele volume.
A cada confirmação de alocação, o WCS registra a quantidade conferida e atualiza o sistema.
O operador retorna à rampa para processar o próximo volume.
Abertura de Posição PTL:
A abertura da posição PTL é automática quando o primeiro volume de uma transportadora sai do Order Start. O WCS prioriza alocar volumes do mesmo pedido na mesma posição PTL, abrindo nova posição somente quando a atual atingir o limite de cubagem ou peso. O WCS reserva o lugar de cada volume nos pallets antes mesmo do volume chegar na rampa, sendo possível colocar os volumes no pallet respectivo respeitando a sequência de entrega.
Otimização de Alocação por Tamanho de Caixa:
O WCS deverá realizar a alocação dos volumes no pallet com base na melhor otimização de espaço, considerando os tamanhos de caixa (P, M, G) definidos pelo WMS Spark na cubagem. O sistema organizará a distribuição dos volumes visando o melhor aproveitamento da cubagem e peso do pallet, priorizando a estabilidade e o empilhamento adequado.
Cubagem e Peso do Pallet:
A cubagem do pallet será realizada pelo WCS previamente, através do cadastro de parâmetros. O operador deverá cadastrar no WCS a cubagem (m³) e peso (kg) máximo suportado no pallet.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Crosscheck, Alocação Automatica, Pedidos, Dashboard e Ajustes Impressão.docx`  
**Heading:** Alocação Automática de Pallet sem confirmação de Posição  
**Score:** — (semantico) | **ID:** 5b05efac51e21545

Será criado um novo parâmetro para reduzir o tempo de operação no aloca pallet eliminando a etapa de confirmação física da posição. A proposta é que, após a bipagem da caixa, o sistema apresente automaticamente o pallet de destino na tela e libere o volume para ser levado até o local, sem que o operador precise bipar o endereço da posição.
Comportamento Atual (sem o aditivo)
O operador bipa a caixa.
O sistema indica a posição do pallet de destino.
O operador se desloca até a posição e bipa o endereço da posição para confirmar (double check).
Apenas após essa confirmação a alocação é registrada.
Comportamento Proposto
O operador bipa a caixa.
O sistema apresenta o pallet de destino na tela.
A alocação é registrada automaticamente, sem exigir bipagem da posição.
O operador se desloca até o local e deposita o volume.
Exemplo de texto na TV ao bipar o volume:
Tratamento de Bipagem Duplicada
Caso o operador bipe novamente, por engano, uma caixa que já foi alocada, o sistema exibirá em tela uma mensagem informativa diferenciada (não bloqueante), indicando que aquele produto já está alocado e qual é a posição de destino. Isso permite que o operador, mesmo bipando por engano, visualize rapidamente onde a caixa deve ser depositada.
Exemplo tela:
Parametrização
Esta funcionalidade será parametrizável (ligar/desligar) por cliente. Quando desligada, o sistema mantém o fluxo atual com double check (bipagem da caixa + bipagem da posição). Quando ligada, opera no fluxo proposto, sem exigência de confirmação da posição.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Classificação do Resultado  
**Score:** — (semantico) | **ID:** 59f12616866ecf78

Compatível — quando a identificação da etiqueta e da IA convergem para a mesma loja/produto. Caixa segue para a rampa/PTL prevista.
Suspeita de Divergência — quando há desacordo entre as duas leituras. Caixa entra na regra de decisão por prioridade.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Ação em Caso de Divergência  
**Score:** — (semantico) | **ID:** 739cf2b60d6c48cb

Parâmetro complementar que define se, ao identificar uma divergência, a caixa será encaminhada à PTL determinada pela prioridade ou à rampa de rejeito:
Direcionar à PTL correspondente — segue o destino calculado pela informação prioritária.
Direcionar a Rejeito — segrega a caixa para tratamento manual, independentemente da informação prioritária.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Atualização e Conferência Operacional  
**Score:** — (semantico) | **ID:** dfe8ccf742ab6e05

O painel deverá atualizar as informações a cada 1 minuto, com a opção de atualizar as informações ao pressionar um botão a qualquer momento. A interface permitirá que o operador identifique rapidamente em qual rampa ou PTL está localizada uma caixa marcada como Suspeita de Divergência, possibilitando o deslocamento até a posição indicada para validação visual e tratativa da ocorrência.
Exemplo do Painel KPI:

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Necessidade Operacional  
**Score:** — (semantico) | **ID:** 201056713f388e4b

O processo atual de fechamento de paletes na PTL realiza a leitura do código da etiqueta master e dispara imediatamente a integração de aloca pallet ao WMS. Não existe etapa intermediária de conferência que valide se todos os volumes vinculados logicamente ao palete master estão fisicamente presentes no momento do fechamento.
A ausência dessa etapa permite que paletes finalizados sejam enviados à etapa seguinte do processo logístico contendo, eventualmente, divergências entre a quantidade sistêmica e a quantidade física, sem que haja registro auditável dessa diferença. A presente evolução introduz uma camada de auditoria opcional, baseada na leitura do código produtivo do conferente, que substitui o disparo imediato da integração por uma atividade de conferência subsequente.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Alteração da Lógica de Fechamento da PTL Manual  
**Score:** — (semantico) | **ID:** 18711f67207eddcd

A lógica de fechamento da PTL Manual será alterada para reconhecer dois caminhos possíveis após a leitura do código de endereço da PTL:
Leitura do código da etiqueta master — mantém o comportamento atual (fechamento direto, com integração imediata ao WMS).
Leitura do código produtivo do conferente — ativa o caminho de conferência, no qual a posição é liberada, porém a integração ao WMS é retida até que a conferência seja confirmada.
A escolha do caminho é feita pelo próprio operador no momento da leitura, sem necessidade de seleção em tela adicional.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Identificação Visual via LED  
**Score:** — (semantico) | **ID:** 5fd8f9bd5df2b3df

Quando o caminho de conferência for ativado, o LED da posição PTL deverá alterar de cor para rosa e começara a piscar indicando visualmente que aquela posição não está em fechamento normal, e sim em fluxo de auditoria, o operador deve apertar o botão e bipar a master do palete para que seja feito o vínculo de conferência com a master de fechamento do palete.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Tela Tratativas de Pallets Rejeitados.docx`  
**Heading:** Informações exibidas na tela  
**Score:** — (semantico) | **ID:** 150bd0f627dd0a07

Para cada pallet rejeitado, a tela deverá exibir obrigatoriamente:
Código da Master vinculada
Loja (Tipespecie) associada ao pallet no momento do fechamento
Mensagem detalhada do erro
Posição de PTL onde o pallet foi montado.
Essa visibilidade permitirá análise rápida do problema.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Relatório de Produtividade no PTL por Operador — Nível PTL  
**Score:** — (semantico) | **ID:** eb352797c09bcfd9

Objetivo: Mensurar a produtividade individual dos operadores no nível de posição PTL, considerando volume alocado e tempo médio entre o desvio no Sorter e a efetiva alocação.
Colunas: Rampa | PTL | Operador | Volumes Alocados por PTL | Tempo Médio (seg) | Produtividade (vol/h).
Tempo médio por volume = média (hora alocação − hora desvio no Sorter). Produtividade = volumes alocados / tempo trabalhado. Troca de operador: dividir volumes automaticamente respeitando login/logout.
Estrutura do relatório:

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Relatório de Produtividade no PTL por Operador — Nível Rampa  
**Score:** — (semantico) | **ID:** 87f1f45fdb72d2d9

Objetivo: Mensurar a produtividade por rampa de saída do Sorter, consolidando todos os PTLs da rampa em uma única linha por operador.
Colunas: Rampa | Operador | Volumes Alocados | Tempo Médio (seg) | Produtividade (vol/h). Mesmas regras de cálculo e troca de operador do relatório 5.4.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Projeto Esperanca - Pontos de Melhorias.docx`  
**Heading:** Bloqueio de Alocação sem Operador Logado no PTL  
**Score:** — (semantico) | **ID:** fd5417dd12731806

Implementar regra sistêmica que impeça a realização de alocações nos PTLs quando não houver operador devidamente autenticado no dispositivo. A medida tem como finalidade garantir rastreabilidade das ações executadas, assegurar responsabilidade operacional e evitar registros de alocação sem vínculo a um usuário identificado no sistema.
Escopo Técnico
Implementar validação obrigatória de login ativo.
Criar bloqueio sistêmico caso não haja operador logado.
Acender leds em vermelho indicando de erro.
Ajustar controle de sessão por dispositivo.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Projeto Esperanca - Pontos de Melhorias.docx`  
**Heading:** Inclusão na Tela “Paletes”  
**Score:** — (semantico) | **ID:** a1b6bbed497f4da1

Incluir novos indicadores visuais e informativos na tela “Paletes” que permitam à operação acompanhar a evolução do palete, possibilitando identificação antecipada de paletes com baixa movimentação ou próximos da conclusão. O objetivo é evitar retenção indevida de PTLs por volumes residuais e apoiar a tomada de decisão operacional com base em dados atualizados.
Escopo Técnico
Criar cálculo de percentual concluído (volumes alocados / total previsto).
Criar campo com data e hora da última alocação.
Ajustar consulta e performance.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX 2025.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 5c8c2f861959ceb0

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará a rotina de PTL (Put-To-Light), tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web. Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox) para acessar a aplicação.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX 2025.docx`  
**Heading:** Put To Light (PTL)  
**Score:** — (semantico) | **ID:** 95585f52909c2118

O processo de Put to Light será realizado nas saídas do sorter pelo operador para separação dos volumes. O sistema conta com 3 rampas, cada uma com 8 posições de PTL, totalizando 24 posições de PTL disponíveis para alocação.
Cada posição de PTL é equipada com 1 LED de 3 dígitos para sinalização visual. As rampas que possuem PTL terão um scanner de responsabilidade da DellaVolpe para leitura dos códigos dos volumes.
A abertura do pallet ocorre de forma automática quando o primeiro produto é bipado em um pallet não iniciado. O sistema WCS controla a sequência de código de pallets, atribuindo os códigos sequencialmente aos PTLs.
Para o fechamento, o sistema realiza o encerramento automaticamente quando todos os volumes da nota fiscal são alocados na posição PTL correspondente. Quando todos os itens de todas as notas fiscais atribuídas à rota vinculada ao PTL são alocados, o WCS fecha o pallet automaticamente.
Os leitores de código de barras (Honeywell) para o sistema de Put-To-Light serão de responsabilidade do cliente.

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - OTIMIZAÇÃO DE COLETA - ADITIVO.docx`  
**Heading:** Visão Geral do Fluxo  
**Score:** — (semantico) | **ID:** 720dd34c489706cc

O WCS realiza a abertura automática das posições PTL, definindo as posições ativas e, consequentemente, quais produtos/romaneios deverão ser separados na operação.
O WCS mantém as tarefas bloqueadas enquanto a Matriz de Fragilidade estiver pendente de liberação (quando aplicável ao processo).
Após a liberação da matriz, o WCS realiza a liberação completa da coleta, disponibilizando todas as tarefas elegíveis para execução.
Os pallets finalizados (tanto empenhados quanto provenientes do PBL) são alocados em Stage, garantindo rastreabilidade, organização e melhor fluidez operacional.
No Posto de Indução, o WCS executa a impressão automática das etiquetas necessárias, conforme os pallets vinculados e o Stage de origem.
Antes do início da indução, o WCS realiza o consumo da Master (validação e lock operacional do agrupamento), assegurando consistência e impedindo processamento duplicado.
Somente após a confirmação de sucesso nas etapas anteriores, o WCS libera a indução, habilitando o desvio no sorter e a alocação para o destino conforme parametrização do processo.

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - OTIMIZAÇÃO DE COLETA - ADITIVO.docx`  
**Heading:** Liberação total de coleta para Matriz Liberada  
**Score:** — (semantico) | **ID:** 187af9aadb5efbd4

Regra principal:
Uma vez que a Matriz de Fragilidade esteja liberada em uma posição PTL aberta, o WCS deverá liberar a coleta de todos os itens/ tarefas vinculados à matriz em questão, independentemente do momento de alocação nas posições PTL.
O controle operacional será realizado na Indução, não mais no Order Start.
Fluxo
O WCS identifica as posições PTL abertas e as Matrizes de Fragilidade atualmente solicitados para essas posições.
Ao confirmar que a matriz está liberada, o WCS realiza a liberação total de coleta:
libera todas as tarefas de separação vinculadas à matriz em questão;
não restringe a liberação somente às tarefas já aptas/visíveis para alocação imediata nas posições PTL abertas.
O operador executa a separação normalmente e, ao concluir a formação dos pallets correspondentes, disponibiliza os pallets no Stage de Indução, mantendo-os rastreáveis e prontos para a etapa posterior.
Resultado esperado
Tarefas vinculadas à matriz ficam liberadas para coleta assim que a matriz estiver liberada e demandada pelo PTL.
A indução passa a ser o ponto de controle para validações e consumo (substituindo o papel anterior do Order Start nesse aspecto).

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - PROJ NORMANDIA - ESPECIFICACAO DE SOFTWARE - ADITIVO 2 2025.docx`  
**Heading:** Gestão de Ativação de Rampas e Lógica de Abertura PTL  
**Score:** — (semantico) | **ID:** 8e6e0fe560bd1796

Diferente do modelo tradicional de ondas estáticas (onde se processa uma onda por vez), o WCS Velox operará com Integração de Ondas Dinâmicas. Isso significa que o WMS poderá enviar novas ondas de pedidos a qualquer momento, sem a necessidade de aguardar a finalização da onda anterior. O WCS receberá e acumulará essas demandas em uma fila única de processamento.
Lógica de Controle e Liberação (Start da Onda)
Para garantir que a operação flua sem gargalos e que a etiqueta do volume contenha a informação correta do destino, o controle de fluxo será realizado no momento do Start da Onda (quando o operador ou o sistema coloca a onda "Em Andamento"):
Fila de Espera (Backlog): Todos os pedidos integrados entram em um backlog ordenado por prioridade e ordem de chegada.
Validação de Capacidade: Antes de efetivar o início da onda, o WCS verifica em tempo real se há uma posição de PTL disponível na rampa de destino (seguindo a regra de distribuição alternada/sequencial).
Reserva Antecipada:
Se houver PTL livre: O sistema reserva imediatamente a posição no momento do Start. Dessa forma, quando o operador solicitar a impressão, a etiqueta já será gerada com o Número do PTL correto.
Se não houver PTL livre: A onda (ou o pedido específico) permanece em stand-by na fila com status de "Aguardando Posição". O sistema não permite o Start efetivo, evitando que volumes sejam liberados para separação sem destino definido.
Liberação Automática: Assim que uma posição de PTL é finalizada e esvaziada na expedição, o WCS identifica automaticamente o próximo pedido da fila que pode ocupar aquela vaga, executa o Start e libera o pedido para impressão instantaneamente.
Essa lógica assegura uma operação contínua, onde a capacidade do Sorter é utilizada ao máximo (100% dos PTLs ocupados), sem o risco de gerar volumes "órfãos" na linha ou etiquetas sem informação de destino.

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Wave 2.docx`  
**Heading:** Priorização de Pedidos para Rampas Específicas no PTL  
**Score:** — (semantico) | **ID:** 85938dd9c6c2691a

Atualmente, cerca de 95% dos pedidos estão vinculados à mesma transportadora (“Gala/Transap”), responsável por volumes destinados à redistribuição. Dentro desse mesmo grupo, porém, existem pedidos com características logísticas distintas — como cargas para Zona Franca (Suframa) e cargas que exigem carregamento imediato diretamente nos caminhões.
Devido à limitação física de rampas de expedição no PTM (Put to Monitor), tornou-se necessário segregar e priorizar o direcionamento desses pedidos. Para atender essa necessidade, o WCS deverá permitir a configuração de prioridades de rampa por pedido, garantindo que determinados volumes sejam sempre enviados para as Rampas com o agrupador especial alocado, enquanto os demais pedidos seguem o fluxo padrão do agrupamento de redistribuição.
Regras de Negócio
1. Segregação de Fluxo
O WCS deverá disponibilizar uma tela contendo a listagem dos pedidos pertencentes à transportadora “Gala/Transap”.
Nessa tela, o operador poderá selecionar os pedidos que deverão receber tratamento prioritário, garantindo que sejam agrupados nas posições especiais.
2. Direcionamento Prioritário
Quando pedidos forem marcados como prioritários:
O algoritmo de distribuição do WCS deverá alocá-los preferencialmente nas posições com o agrupador especial.
Essa priorização deve ocorrer imediatamente após o fechamento do pedido atualmente vinculado à posição.
3. Objetivo Operacional
A priorização visa evitar travamentos na operação, garantindo que:
Pedidos de carregamento rápido não disputem espaço com pedidos de redistribuição;
Pedidos com características fiscais específicas (ex.: Suframa) não misturem seus fluxos;
A ocupação das rampas seja otimizada de acordo com a criticidade de cada carga.
4. Agrupador Especial
Para a transportadora “Gala/Transap”, será criado um agrupador especial que terá o seguinte comportamento:
Primeira prioridade: alocar os pedidos selecionados na tela de priorização.
Na ausência de pedidos prioritários: utilizar o agrupador padrão, mantendo o fluxo regular da operação.
Observação:
Pedidos priorizados na tela mencionada só podem desviar em posições especiais, caso não haja posições disponíveis eles devem entrar na fila até que a posição seja liberada.

---
**Origem:** [I17.112] 2021 — `I17.112 - ESPECIFICACAO DE SOFTWARE - PROJETO  DIAMANTE- Adicional PTL Larrus rev3.docx`  
**Heading:** Processo de abertura e fechamento de pallets  
**Score:** — (semantico) | **ID:** bbc5a20ad6647574

Os processos de abertura e fechamento dos pallets não sofreram mudanças, serão exatamente como é hoje, porém para os PTLs que atenderam os pedidos da filial Larrus, o operador pode realizar o fechamento do pallet a qualquer momento, para realizar esse fechamento o mesmo deve fazer a leitura do código de barras da posição do PTL e em seguida realizar a leitura do código do pallet, como já é realizado hoje.
Após o fechamento o MFC irá verificar se existe volumes pendente para o pedido que estava alocado no PTL em questão, se for o caso o pedido será vinculado ao PLT novamente para que o operador realize a abertura do PLT vinculando um novo pallet e seguindo assim o processo até que todos os volumes do pedido sejam alocados, assim nenhum pedido pode entrar no PTL até que o pedido Larrus seja totalmente finalizado.

---
**Origem:** [I17.112] 2021 — `I17.112 - ESPECIFICACAO DE SOFTWARE - PROJETO  DIAMANTE- Adicional PTL Larrus rev3.docx`  
**Heading:** Priorização de pedidos  
**Score:** — (semantico) | **ID:** c5ce1a78bc680ea9

Devido a necessidade de o pedido permanecer no mesmo PTL a regra de priorização de pedidos não se aplicam aos pedidos da filial Larrus, que sempre será prioridade máxima na ocupação do PLT até que todos os volumes de todos os pedidos destinados ao PTL sejam finalizados, ou seja, se houver um pedido franquia ou e-commerce a ser alocado na mesma posição do PLT onde há um pedido da filial Larrus, esses pedidos só serão alocados após o término de todos os pedidos Larrus para o PTL.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** GAP 02 – Envia posição SKU  
**Score:** — (semantico) | **ID:** 703eb7531ab61d93

Existe uma tabela de cadastro no SAP, onde preenchem qual a estação, sku e se é pick by light ou não. Lembrando que a estação será os 2(dois) primeiros números e os 3(tres) últimos a posição.
Exemplo: 10001 – estação 10 e posição 001.
Nessa interface é definido a identificação do material que estará alocado em cada estação, serão até 9(nove) posições por estação. Estação 10001 a 10009.
SAP  WCS

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.11 Put-to-Light (PTL)  
**Score:** — (semantico) | **ID:** 3ec782cb38a45700

O PTL deve ser cadastrado por box, com o controle dos paletes dentro do sistema WCS, sem interface com o WMS nessa fase.
A etiqueta do palete deverá ser emitida pela Invent que deverá ter a identificação visual do box/loja.
Uma mesma posição de PTL pode conter mais de um box cadastrado.
Cada saída, terá um PDV onde o operador ao realizar a leitura do volume, terá a informação da posição PTL onde deve ser alocado o volume, além disso o led da posição tambem será aceso. O operador ao alocar o volume e apertar o botão do PTL, apaga o led da posição e da tela do PDV.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.11 Put-to-Light (PTL)  
**Score:** — (semantico) | **ID:** b2185698a1a8b63a

O PTL deve ser cadastrado por box, com o controle dos paletes dentro do sistema WCS, sem interface com o WMS nessa fase.
A etiqueta do palete deverá ser emitida pela Invent que deverá ter a identificação visual do box/loja.
Uma mesma posição de PTL pode conter mais de um box cadastrado.
Cada saída, terá um PDV onde o operador ao realizar a leitura do volume, terá a informação da posição PTL onde deve ser alocado o volume, além disso o led da posição tambem será aceso. O operador ao alocar o volume e apertar o botão do PTL, apaga o led da posição e da tela do PDV.

---
**Origem:** [I20.1406] 2021 — `I20.1406  - ESPECIFICACAO SOFTWARE - Rev1.docx`  
**Heading:** Put-to-light (PTL)  
**Score:** — (semantico) | **ID:** fdff818e44d9933c

PTL
Cada uma das 12 saídas irá referenciar suas praças correspondentes, às quais conterão cada uma 28 posições, totalizando 336 posições para alocação de produtos.
Scanners
Cada estação de Put-to-Light possuirá 02 (dois) scanners (de fornecimento/responsabilidade do cliente).  A função deste dispositivo será realizar a leitura do volume, acendendo o LED da posição do PTL correspondente para alocação.
Rejeito do Sorter
Para a região do rejeito do sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, volume não encontrado etc.)
Cancelamento de volume por falta de produto (Corte)
O sistema Invent deverá respeitar a falta de um produto (quando ocorrer). Neste caso a informação de falta referente ao SKU em específico será recebida pelo sistema da Invent e processada de acordo com uma regra de prioridade definida conforme abaixo:
Item pertence à um pallet que ainda não foi aberto
Remover o item de um lote/pedido que possuir a maior quantidade de itens pendentes

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Put-to-light (PTL)  
**Score:** — (semantico) | **ID:** 7af23648a4a50466

PTL
As 04 (quatro) primeiras saídas do sorter alocarão 04 (quatro) pallets em cada posição do Put-to-Light (segregados cada um por um LED).
Todas as outras 36 (trinta e seis) saídas possuirão apenas uma única posição-pallet, sem identificação por LED.
OBS: Apresentaremos o layout executivo considerando todos os pontos de rede e alimentação elétrica necessários para compor a infraestrutura de 4 LEDs para cada uma das 40 saídas do sistema. Desta forma, caso o Tenda Atacado realize uma ampliação futura, basta adquirir o hardware de LED’s com os respectivos acessórios e a parametrização do software contemplando os novos endereços de IP dos componentes.
Scanners
Cada estação de Put-to-light possuirá 01 (um) scanner (de fornecimento/responsabilidade do cliente).  A função deste dispositivo será disparar os comandos de abertura e fechamento de pallet.
Sinaleiros
Cada saída contará 01 (um) sinaleiro, que servirá como ponte na interação entre o sistema MFC e os operadores, indicando de maneira visual o que foi retornado pelo sistema quando ao estado atual do pallet (aberto, fechado ou pendente de finalização), funcionando assim como um recurso orientativo para a operação.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Mesa Compartilhada  
**Score:** — (semantico) | **ID:** 606b498a9db4f971

Na estação de picking, existe uma mesa compartilhada, onde os operadores utilizam a mesma mesa/posto de picking.
Visando maior flexibilidade, será disponibilizada a configuração do equipamento PTL para que haja a possibilidade de compartilhamento de mesas, este compartilhamento visa aumento da capacidade de armazenagem de SKU’s para atendimento de demandas especificas.
O equipamento deverá dispor de funcionalidade de separação como estação única ou compartilhada com as estações vizinhas.
Como o formato é compartilhado, a estação de trabalho deverá ter a capacidade de acender diferentes cores de forma aos pickers das mesas vizinhas identificarem que o produto destacado na mesa central corresponde a um item dentro do pedido em separação, e por caixa e sub-caixa.
Nesse caso, quando o operador 1 realizar a leitura da etiqueta, ele terá a prioridade na separação de produtos na mesa compartilhada.
Operador 2 terá que aguardar o operador 1 concluir a separação, para conseguir prosseguir e concluir a sua separação.
Ao final do processo de picking, existe uma integração de retorno para o WMS informando que o picking foi concluído, e quais produtos e quantidades foram separados, onde o WCS disponibiliza as informações para o WMS realizar a expedição.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** 5ab0848f7a9c0ad7

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo MFC. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** bc465cdc03b6ca05

DESCRITIVO
OPERAÇÃO
PROJETO
PTL 2.0 DG   RIO GRANDE DO SUL/RS
CONFIDENCIAL © 2022, INVENT COMÉRCIO E SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL CONFIDENCIAL, PROIBIDA SUA REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS SEM PRÉVIA AUTORIZAÇÃO.
Por que Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Mesa Compartilhada  
**Score:** — (semantico) | **ID:** fe4461015576b3e5

Na estação de picking, existe uma mesa compartilhada, onde os operadores utilizam a mesma mesa/posto de picking.
Visando maior flexibilidade, será disponibilizada a configuração do equipamento PTL para que haja a possibilidade de compartilhamento de mesas, este compartilhamento visa aumento da capacidade de armazenagem de SKU’s para atendimento de demandas especificas.
O equipamento deverá dispor de funcionalidade de separação como estação única ou compartilhada com as estações vizinhas.
Como o formato é compartilhado, a estação de trabalho deverá ter a capacidade de acender diferentes cores de forma aos pickers das mesas vizinhas identificarem que o produto destacado na mesa central corresponde a um item dentro do pedido em separação, e por caixa e sub-caixa.
Nesse caso, quando o operador 1 realizar a leitura da etiqueta, ele terá a prioridade na separação de produtos na mesa compartilhada.
Operador 2 terá que aguardar o operador 1 concluir a separação, para conseguir prosseguir e concluir a sua separação.
Ao final do processo de picking, existe uma integração de retorno para o WMS informando que o picking foi concluído, e quais produtos e quantidades foram separados, onde o WCS disponibiliza as informações para o WMS realizar a expedição.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** 55dde45f008cacd7

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo MFC. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Mesa Compartilhada  
**Score:** — (semantico) | **ID:** 11126dfeb0e82f18

Na estação de picking, existe uma mesa compartilhada, onde os operadores utilizam a mesma mesa/posto de picking.
Visando maior flexibilidade, será disponibilizada a configuração do equipamento PTL para que haja a possibilidade de compartilhamento de mesas, este compartilhamento visa aumento da capacidade de armazenagem de SKU’s para atendimento de demandas especificas.
O equipamento deverá dispor de funcionalidade de separação como estação única ou compartilhada com as estações vizinhas.
Como o formato é compartilhado, a estação de trabalho deverá ter a capacidade de acender diferentes cores de forma aos pickers das mesas vizinhas identificarem que o produto destacado na mesa central corresponde a um item dentro do pedido em separação, e por caixa e sub-caixa.
Nesse caso, quando o operador 1 realizar a leitura da etiqueta, ele terá a prioridade na separação de produtos na mesa compartilhada.
Operador 2 terá que aguardar o operador 1 concluir a separação, para conseguir prosseguir e concluir a sua separação.
Ao final do processo de picking, existe uma integração de retorno para o WMS informando que o picking foi concluído, e quais produtos e quantidades foram separados, onde o WCS disponibiliza as informações para o WMS realizar a expedição.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** 984292bd9e6167a2

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo MFC. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Estações  
**Score:** — (semantico) | **ID:** 090ab2dc0ebcf6ad

Na estação existe um display que indica o número da caixa e a quantidade de posições picking que estão faltando.
MFC também será disponibilizado caso haja a necessidade de realocação dos endereços de picking
Ao todo são 12 estações, sendo:
 9 - Curva A
 2 - Curva B
 1 - Curva C

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Estações  
**Score:** — (semantico) | **ID:** 44695a787606102f

Na estação existe um display que indica o número da caixa e a quantidade de posições picking que estão faltando.
MFC também será disponibilizado caso haja a necessidade de realocação dos endereços de picking
Ao todo são 12 estações, sendo:
 9 - Curva A
 2 - Curva B
 1 - Curva C

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Estações  
**Score:** — (semantico) | **ID:** b6e95047cdced28c

Na estação existe um display que indica o número da caixa e a quantidade de posições picking que estão faltando.
MFC também será disponibilizado caso haja a necessidade de realocação dos endereços de picking
Ao todo são 13 estações, sendo:
 9 - Curva A
 3 - Curva B
 1 - Curva C

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Estações  
**Score:** — (semantico) | **ID:** 6786189dba34c661

Na estação existe um display que indica o número da caixa e a quantidade de posições picking que estão faltando.
MFC também será disponibilizado caso haja a necessidade de realocação dos endereços de picking
Ao todo são 12 estações, sendo:
 9 - Curva A
 2 - Curva B
 1 - Curva C

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 98a0715838900d47

DESCRITIVO
OPERAÇÃO
PROJETO
PTL 2.0 DG   RIO DE JANEIRO/RJ
CONFIDENCIAL © 2022, INVENT COMÉRCIO E SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL CONFIDENCIAL, PROIBIDA SUA REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS SEM PRÉVIA AUTORIZAÇÃO.
Por que Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Mesa Compartilhada  
**Score:** — (semantico) | **ID:** 7191b77017394ca3

Na estação de picking, existe uma mesa compartilhada, onde os operadores utilizam a mesma mesa/posto de picking.
Visando maior flexibilidade, será disponibilizada a configuração do equipamento PTL para que haja a possibilidade de compartilhamento de mesas, este compartilhamento visa aumento da capacidade de armazenagem de SKU’s para atendimento de demandas especificas.
O equipamento deverá dispor de funcionalidade de separação como estação única ou compartilhada com as estações vizinhas.
Como o formato é compartilhado, a estação de trabalho deverá ter a capacidade de acender diferentes cores de forma aos pickers das mesas vizinhas identificarem que o produto destacado na mesa central corresponde a um item dentro do pedido em separação, e por caixa e sub-caixa.
Nesse caso, quando o operador 1 realizar a leitura da etiqueta, ele terá a prioridade na separação de produtos na mesa compartilhada.
Operador 2 terá que aguardar o operador 1 concluir a separação, para conseguir prosseguir e concluir a sua separação.
Ao final do processo de picking, existe uma integração de retorno para o WMS informando que o picking foi concluído, e quais produtos e quantidades foram separados, onde o WCS disponibiliza as informações para o WMS realizar a expedição.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** d2f5a0a5e4403b20

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo MFC. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 7b7043eab9dccd79

DESCRITIVO
OPERAÇÃO
PROJETO
PTL 2.0 DG   RIO DE JANEIRO/RJ
CONFIDENCIAL © 2022, INVENT COMÉRCIO E SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL CONFIDENCIAL, PROIBIDA SUA REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS SEM PRÉVIA AUTORIZAÇÃO.
Por que Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Mesa Compartilhada  
**Score:** — (semantico) | **ID:** 2ac7c0f8cf8a5af1

Na estação de picking, existe uma mesa compartilhada, onde os operadores utilizam a mesma mesa/posto de picking.
Visando maior flexibilidade, será disponibilizada a configuração do equipamento PTL para que haja a possibilidade de compartilhamento de mesas, este compartilhamento visa aumento da capacidade de armazenagem de SKU’s para atendimento de demandas especificas.
O equipamento deverá dispor de funcionalidade de separação como estação única ou compartilhada com as estações vizinhas.
Como o formato é compartilhado, a estação de trabalho deverá ter a capacidade de acender diferentes cores de forma aos pickers das mesas vizinhas identificarem que o produto destacado na mesa central corresponde a um item dentro do pedido em separação, e por caixa e sub-caixa.
Nesse caso, quando o operador 1 realizar a leitura da etiqueta, ele terá a prioridade na separação de produtos na mesa compartilhada.
Operador 2 terá que aguardar o operador 1 concluir a separação, para conseguir prosseguir e concluir a sua separação.
Ao final do processo de picking, existe uma integração de retorno para o WMS informando que o picking foi concluído, e quais produtos e quantidades foram separados, onde o WCS disponibiliza as informações para o WMS realizar a expedição.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** 81aa59392003e14f

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo MFC. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Mesa Compartilhada  
**Score:** — (semantico) | **ID:** 45a7534e07273fda

Na estação de picking, existe uma mesa compartilhada, onde os operadores utilizam a mesma mesa/posto de picking.
Visando maior flexibilidade, será disponibilizada a configuração do equipamento PTL para que haja a possibilidade de compartilhamento de mesas, este compartilhamento visa aumento da capacidade de armazenagem de SKU’s para atendimento de demandas especificas.
O equipamento deverá dispor de funcionalidade de separação como estação única ou compartilhada com as estações vizinhas.
Como o formato é compartilhado, a estação de trabalho deverá ter a capacidade de acender diferentes cores de forma aos pickers das mesas vizinhas identificarem que o produto destacado na mesa central corresponde a um item dentro do pedido em separação, e por caixa e sub-caixa.
Nesse caso, quando o operador 1 realizar a leitura da etiqueta, ele terá a prioridade na separação de produtos na mesa compartilhada.
Operador 2 terá que aguardar o operador 1 concluir a separação, para conseguir prosseguir e concluir a sua separação.
Ao final do processo de picking, existe uma integração de retorno para o WMS informando que o picking foi concluído, e quais produtos e quantidades foram separados, onde o WCS disponibiliza as informações para o WMS realizar a expedição.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** 005cb83f914fecc2

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo MFC. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 0302562dbb4c0cde

DESCRITIVO
OPERAÇÃO
PROJETO
DG – Dolce Gusto PTL 2.0
CONFIDENCIAL © 2022, INVENT COMÉRCIO E SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL CONFIDENCIAL, PROIBIDA SUA REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS SEM PRÉVIA AUTORIZAÇÃO.
Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Pedido PTL  
**Score:** — (semantico) | **ID:** c1fa1ce00d8c7db1

No pedido PTL, operador visualiza na tela do order start quantos pedidos e tamanhos de caixas deverá soltar na linha de picking, leitor fixo ao realizar a leitura do tamanho de caixa o sistema WCS irá fazer a associação dessa caixa com o primeiro pedido a ser expedido por aquele tamanho, realiza a impressão da etiqueta do pedido associado através de uma impressora do cliente, fixa essa etiqueta na caixa e a caixa segue para o posto de PTL, caso tenha produtos a serem separados nesse posto, as posições de picking irão acender com suas respectivas quantidades.
Em cada posto de picking haverá um scanner automático para leitura dos códigos de barras das caixas. Caso o volume lido possuir picking a ser feito no posto, o sistema INVENT inicia o processo acendendo os LEDS nas posições e quantidades de itens daquele posto de picking.
Após passar por todos os postos PTL da estação, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** 4a045fd879f3b7f5

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo MFC. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Pedido PTL  
**Score:** — (semantico) | **ID:** 3f36d1345f151dc2

No pedido PTL, operador visualiza na tela do order start quantos pedidos e tamanhos de caixas deverá soltar na linha de picking, leitor fixo ao realizar a leitura do tamanho de caixa o sistema WCS irá fazer a associação dessa caixa com o primeiro pedido a ser expedido por aquele tamanho, realiza a impressão da etiqueta do pedido associado através de uma impressora do cliente, fixa essa etiqueta na caixa e a caixa segue para o posto de PTL, caso tenha produtos a serem separados nesse posto, as posições de picking irão acender com suas respectivas quantidades.
Em cada posto de picking haverá um scanner automático para leitura dos códigos de barras das caixas. Caso o volume lido possuir picking a ser feito no posto, o sistema INVENT inicia o processo acendendo os LEDS nas posições e quantidades de itens daquele posto de picking.
Após passar por todos os postos PTL da estação, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** f8e9a96644f072bc

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo MFC. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Pedido PTL  
**Score:** — (semantico) | **ID:** 222a1ea532c5bfa4

No pedido PTL, operador visualiza na tela do order start quantos pedidos e tamanhos de caixas deverá soltar na linha de picking, leitor fixo ao realizar a leitura do tamanho de caixa o sistema WCS irá fazer a associação dessa caixa com o primeiro pedido a ser expedido por aquele tamanho, realiza a impressão da etiqueta do pedido associado através de uma impressora do cliente, fixa essa etiqueta na caixa e a caixa segue para o posto de PTL, caso tenha produtos a serem separados nesse posto, as posições de picking irão acender com suas respectivas quantidades.
Em cada posto de picking haverá um scanner automático para leitura dos códigos de barras das caixas. Caso o volume lido possuir picking a ser feito no posto, o sistema INVENT inicia o processo acendendo os LEDS nas posições e quantidades de itens daquele posto de picking.
Após passar por todos os postos PTL da estação, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Separação PTL  
**Score:** — (semantico) | **ID:** ee5037e9712a3ad9

É considerado um pedido Separação PTL para Venus quando tivermos premades de 10 e/ou máquina de café. Desta forma o operador ao realizar a leitura da caixa recebe a informação do tipo de caixa para aquele pedido, realiza a leitura do QR Code do tamanho da caixa, onde o sistema irá vincular o tamanho da caixa com o pedido, realiza a impressão da etiqueta de expedição do pedido, fixa na nova caixa e solta para o posto de PTL, no posto PTL leitor fixo realiza a leitura da caixa de expedição e caso tenha produtos a serem separados nesse posto, as posições de picking irão acender com suas respectivas quantidades.
Caso a caixa de expedição a ser induzida seja de tamanho diferente da sugestão, operador terá que selecionar manualmente na tela, uma opção(DE>PARA) de troca de caixa e informar o tamanho da caixa que será colocado para atender aquele pedido, operador deverá realizar esse processo de troca de caixa quando houver a necessidade, devido a falta fisica de caixas.
Após passar por todos os postos da estação PTL, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.
Para caixas Venus, serão incluídas proteções dentro das caixas, para evitar que os premades sejam danificados.
O peso dessas proteções deverão ser cadastradas juntamente com a caixa, para que seja considerado no cubometro.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** e4d3215638fc84fb

O pedido que houver produtos das posições cadastradas de Flow Rack e Picking Rack, serão iniciados no Picking Rack;
Com o leitor de dedo (Ring Scan), operador realiza a leitura do QR Code da caixa, conforme sugestão de caixa por pedidos
MFC realiza o vínculo com o primeiro pedido com o tamanho da caixa sugerido/lido
MFC realiza a impressão da etiqueta de expedição do pedido
MFC disponibiliza na tela informações do pedido para separação
Operador se desloca até os endereços indicados pelo sistema
Operador realiza a separação dos itens
Operador confirma a separação dos itens na tela do Picking Rack
Confirmação feita manual por item separado
Ao confirmar separação do item, item terá o status alterado na tela
Ao finalizar toda a separação do pedido, operador confirma a separação
Ao confirmar a separação do pedido, pedido é ocultado da tela de Picking Rack
Após realizar a separação dos produtos de Picking Rack, operador irá induzir manualmente a caixa no Order Start da PTL para finalização da separação do restante dos itens cadastrados nos Flow Racks PTL. No order start da PTL, inicia o processo de separação padrão de pedido PTL.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Separação PTL  
**Score:** — (semantico) | **ID:** 1d996ba2f9ed5a9c

É considerado um pedido Separação PTL para Venus quando tivermos premades de 10 e/ou máquina de café. Desta forma o operador ao realizar a leitura da caixa recebe a informação do tipo de caixa para aquele pedido, realiza a leitura do QR Code do tamanho da caixa, onde o sistema irá vincular o tamanho da caixa com o pedido, realiza a impressão da etiqueta de expedição do pedido, fixa na nova caixa e solta para o posto de PTL, no posto PTL leitor fixo realiza a leitura da caixa de expedição e caso tenha produtos a serem separados nesse posto, as posições de picking irão acender com suas respectivas quantidades.
Caso a caixa de expedição a ser induzida seja de tamanho diferente da sugestão, operador terá que selecionar manualmente na tela, uma opção(DE>PARA) de troca de caixa e informar o tamanho da caixa que será colocado para atender aquele pedido, operador deverá realizar esse processo de troca de caixa quando houver a necessidade, devido a falta fisica de caixas
[Tela DE>PARA em desenvolvimento por Invent]
Após passar por todos os postos da estação PTL, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.
Para caixas Venus, serão incluídas proteções dentro das caixas, para evitar que os premades sejam danificados.
O peso dessas proteções deverão ser cadastradas juntamente com a caixa, para que seja considerado no cubometro.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** a7e1377f9cff9fa3

O pedido que houver produtos das posições cadastradas de Flow Rack e Picking Rack, serão iniciados no Picking Rack;
Operador realiza a leitura do QR Code da caixa, conforme sugestão de caixa por pedidos
MFC realiza o vínculo com o primeiro pedido com o tamanho da caixa sugerido/lido
MFC realiza a impressão da etiqueta de expedição do pedido
MFC disponibiliza na tela informações do pedido para separação
Operador se desloca até os endereços indicados pelo sistema
Operador realiza a separação dos itens
Operador confirma a separação dos itens na tela do Picking Rack
Confirmação feita manual por item separado
Ao confirmar separação do item, item terá o status alterado na tela
Ao finalizar toda a separação do pedido, operador confirma a separação
Ao confirmar a separação do pedido, pedido é ocultado da tela de Picking Rack
Após realizar a separação dos produtos de Picking Rack, operador irá induzir manualmente a caixa no Order Start da PTL para finalização da separação do restante dos itens cadastrados nos Flow Racks PTL. No order start da PTL, inicia o processo de separação padrão de pedido PTL.

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.11.docx`  
**Heading:** Put To Light  
**Score:** — (nome-topico) | **ID:** 8dc4668df5662556

O operador irá pegar a caixa da rampa e bipar a etiqueta com scanner fixo da rampa, na rampa haverá 2 leds onde o 1º led será referente a rua 1 de PTL e o 2º led referente a rua 2 de PTL.
Ao bipar essa caixa e acender o led na cor verde, o operador irá colocar essa caixa no pallet indicado pelo led, após isso ele irá confirmar apertando o botão do led.
Ao chegar no limite do pallet outro operador irá retirar esse pallet e levará até a rua correspondente, e com o scanner de mão irá bipar caixa por caixa, onde a cada caixa bipada irá acender um led correspondente a sua posição.
Antes de alocar uma caixa a um pallet o operador deverá realizar o processo de abertura de pallet através do scanner de mão, realizando a leitura da etiqueta de posição PTL e bipar uma etiqueta sequencial (Impressa pelo MFC) que será a etiqueta de pallet.
Este operador irá alocar a caixa na posição através do scanner de mão e confirmar no led do PTL.
No caso de ter mais de uma caixa para o mesmo representante/pedido, as demais caixas devem estar no mesmo pallet, para que o transporte seja único.
Operador visualiza fisicamente o limite do pallet, ao atingir o limite, o operador realiza o processo de fechamento de pallet. Realizando a leitura da etiqueta de fechamento com o scanner de mão.
Serão 24 posições de PTL contendo 1 led com 3 dígitos para cada posição.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Put-to-light (PTL)  
**Score:** — (semantico) | **ID:** 7bdd9deba06b1014

As 06 (seis) saídas do sorter alocarão 04 (quatro) pallets em cada posição do Put-to-Light (segregados cada um por um LED).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Sinaleiros  
**Score:** — (nome-topico) | **ID:** 0e8ff8bf91b544c4

Cada saída contará com 01 (um) sinaleiro, que servirá como ponte na interação entre o sistema VELOX e os operadores, indicando de maneira visual o que foi retornado pelo sistema quando ao estado atual do pallet (aberto, fechado ou pendente de finalização), funcionando assim como um recurso orientativo para a operação.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** e60766786c57deb0

Na ocasião de realizar a leitura de um volume que não corresponde àquela posição do PTL, o sinaleiro permanecerá com o LED vermelho, indicando que o volume não pertence à saída correspondente ou o código de barras lido não representa um volume esperado naquela posição.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Put-to-light (PTL)  
**Score:** — (semantico) | **ID:** bcd19e9005a630d4

As 06 (seis) saídas do sorter alocarão 06 (seis) pallets em cada posição do Put-to-Light (segregados cada um por um LED).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Sinaleiros  
**Score:** — (nome-topico) | **ID:** 3f8e30fbe6de5d97

Cada saída contará com 01 (um) sinaleiro, que servirá como ponte na interação entre o sistema VELOX e os operadores, indicando de maneira visual o que foi retornado pelo sistema quando ao estado atual do pallet (aberto, fechado ou pendente de finalização), funcionando assim como um recurso orientativo para a operação.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** 33dfdb2f90468e41

Na ocasião de realizar a leitura de um volume que não corresponde àquela posição do PTL, o sinaleiro permanecerá com o LED vermelho, indicando que o volume não pertence à saída correspondente ou o código de barras lido não representa um volume esperado naquela posição.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Put-to-light (PTL)  
**Score:** — (semantico) | **ID:** 85f8149903b36467

As 06 (seis) saídas do sorter alocarão 06 (seis) pallets em cada posição do Put-to-Light (segregados cada um por um LED).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Sinaleiros  
**Score:** — (nome-topico) | **ID:** 5c2f357c238c23ed

Cada saída contará com 01 (um) sinaleiro, que servirá como ponte na interação entre o sistema VELOX e os operadores, indicando de maneira visual o que foi retornado pelo sistema quando ao estado atual do pallet (aberto, fechado ou pendente de finalização), funcionando assim como um recurso orientativo para a operação.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** 246c5d9ff5211e8a

Na ocasião de realizar a leitura de um volume que não corresponde àquela posição do PTL, o sinaleiro permanecerá com o LED vermelho, indicando que o volume não pertence à saída correspondente ou o código de barras lido não representa um volume esperado naquela posição.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Put-to-light (PTL)  
**Score:** — (semantico) | **ID:** 6db8310a9fa13968

As 06 (seis) saídas do sorter alocarão 06 (seis) pallets em cada posição do Put-to-Light (segregados cada um por um LED).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Sinaleiros  
**Score:** — (nome-topico) | **ID:** 87dfeb432e172650

Cada saída contará com 01 (um) sinaleiro, que servirá como ponte na interação entre o sistema VELOX e os operadores, indicando de maneira visual o que foi retornado pelo sistema quando ao estado atual do pallet (aberto, fechado ou pendente de finalização), funcionando assim como um recurso orientativo para a operação.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** 6a1f021ef53e999a

Na ocasião de realizar a leitura de um volume que não corresponde àquela posição do PTL, o sinaleiro permanecerá com o LED vermelho, indicando que o volume não pertence à saída correspondente ou o código de barras lido não representa um volume esperado naquela posição.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Put-to-light (PTL)  
**Score:** — (semantico) | **ID:** 3584ad444cd85f96

As 06 (seis) saídas do sorter alocarão 06 (seis) pallets em cada posição do Put-to-Light (segregados cada um por um LED).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Sinaleiros  
**Score:** — (nome-topico) | **ID:** 384132d0f742a69e

Cada saída contará com 01 (um) sinaleiro, que servirá como ponte na interação entre o sistema VELOX e os operadores, indicando de maneira visual o que foi retornado pelo sistema quando ao estado atual do pallet (aberto, fechado ou pendente de finalização), funcionando assim como um recurso orientativo para a operação.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** 32b17a37b061e32f

Na ocasião de realizar a leitura de um volume que não corresponde àquela posição do PTL, o sinaleiro permanecerá com o LED vermelho, indicando que o volume não pertence à saída correspondente ou o código de barras lido não representa um volume esperado naquela posição.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de movimentos  
**Score:** — (semantico) | **ID:** 1d2ac742a3d11989

É possivel visualizar e editar movimentos cadastrados no sistema, assim como criar novos, através da tela exibida na imagem abaixo.
A partir da imagem abaixo pode-se criar um novo registro, selecionando a opção “Novo”, ou visualizar e editar detalhes do movimento, na opção “Detalhes”.
A tela de criação de um novo registro é idêntica a imagem acima, com os campos em branco e com a opção “Excluir” desabilitada.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de áreas  
**Score:** — (semantico) | **ID:** b0e327b6f7602f31

A divisão em áreas do armazém pode ser gerenciada pela tela na imagem abaixo.
Nessa imagem acima, é possivel criar uma área ou visualizar e editar uma já existente.
A criação de uma nova área exibe uma tela semelhante a imagem acima, porém com os campos em branco.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Módulo de contingência  
**Score:** — (semantico) | **ID:** e37f61d35a897b24

Essa funcionalidade, chamada a partir da imagem mostrada abaixo, permite atualizar a localização do pallet em contingência, seguindo as regras descritas a seguir.
A opção “Entrada” permite atualizar a localização para “Entrada no sistema”, para pallets com localização:
Indo para a entrada do transelevador
Armazenado
A opção “Saida” atualiza a localização do pallet seguindo as regras da tabela abaixo:
Quando a localização for atualizada, o sistema irá atualizar o status de todos os itens de ordens de vendas (autorizados a serem entregues) associados ao pallet para “Entregue”.
A opção “Cancelar” permite cancelar os itens de ordens de saída relacionadas com o pallet, além de atualizar a localização para “Cancelado”. Somente pallets com as seguintes localizações podem ser cancelados por essa opção:
Armazenando
Indo para a entrada do transelevador
Rejeitado
Nota: esta funcionalidade só é habilitada se o sistema estiver em modo de operação “Online”

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de movimentos  
**Score:** — (semantico) | **ID:** 9d5f0bc426a5b385

É possivel visualizar e editar movimentos cadastrados no sistema, assim como criar novos, através da tela exibida na imagem abaixo.
A partir da imagem abaixo pode-se criar um novo registro, selecionando a opção “Novo”, ou visualizar e editar detalhes do movimento, na opção “Detalhes”.
A tela de criação de um novo registro é idêntica a imagem acima, com os campos em branco e com a opção “Excluir” desabilitada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de áreas  
**Score:** — (semantico) | **ID:** d40267fcd5b30b2e

A divisão em áreas do armazém pode ser gerenciada pela tela na imagem abaixo.
Nessa imagem acima, é possivel criar uma área ou visualizar e editar uma já existente.
A criação de uma nova área exibe uma tela semelhante a imagem acima, porém com os campos em branco.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Módulo de contingência  
**Score:** — (semantico) | **ID:** 90f4a90513fd64ba

Essa funcionalidade, chamada a partir da imagem mostrada abaixo, permite atualizar a localização do pallet em contingência, seguindo as regras descritas a seguir.
A opção “Entrada” permite atualizar a localização para “Entrada no sistema”, para pallets com localização:
Indo para a entrada do transelevador
Armazenado
A opção “Saida” atualiza a localização do pallet seguindo as regras da tabela abaixo:
Quando a localização for atualizada, o sistema irá atualizar o status de todos os itens de ordens de vendas (autorizados a serem entregues) associados ao pallet para “Entregue”.
A opção “Cancelar” permite cancelar os itens de ordens de saída relacionadas com o pallet, além de atualizar a localização para “Cancelado”. Somente pallets com as seguintes localizações podem ser cancelados por essa opção:
Armazenando
Indo para a entrada do transelevador
Rejeitado
Nota: esta funcionalidade só é habilitada se o sistema estiver em modo de operação “Online”

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Put To Light  
**Score:** — (nome-topico) | **ID:** 5f9d36935873e843

Para o processo de Put to Light serão destinados 28 posições para a expedição dos produtos após a conferência e Packing que são divididas em duas zonas separadas: Transportadora Jamef com 18 posições e as demais transportadoras com 10 posições.
Com as informações enviadas nas integrações, o sistema realizara a triagem das caixas que serão expedidas pela transportadora Jamef (lado direita) e para as demais transportadoras (lado esquerdo). É obrigatório que os operadores abram as posições para que o sistema permita alocar as caixas de acordo com sua rota.
Para realizar a abertura de uma posição será necessário que o operador realize a leitura de uma etiqueta identificadora da posição, etiqueta do pallet e código de identificação do operador. Será aceso o LED na cor verde para informar o sucesso na abertura da posição ou em vermelho em caso de erro na sequência da leitura das etiquetas. Operador deve pressionar o Led para confirmar a abertura da posição.
Independente da transportadora será um pedido por posição e sempre que for alocado o último volume do pedido, acenderá o LED na cor azul para informar ao operador que aquele pedido finalizou e ficará disponível para o próximo pedido da fila. Operador deve pressionar o Led para o fechamento da posição.
Em casos que houver a necessidade de fechar um pallet manulmente, basta o operador realizar a leitura de uma etiqueta padrão daquela posição com o comando de fechar o pallet e o operador poderá retirar a carga. Lembrando que o operador deve realizar novamente o processo de abertura para prosseguir alocando outras caixas do mesmo pedido que estarão no Order Start ou realizando os processos da esteira.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Agrupamento por Subárea  
**Score:** — (semantico) | **ID:** 7200291bd744199e

Para pedidos cuja transportadora seja diferente de “Própria”, o agrupamento dos pallets no PTL não será realizado com base no romaneio, e sim na subárea informada na integração de Trabalhos – Work (item 6.4).
Essa mudança garante que o agrupamento dos volumes e pallets siga a lógica operacional de transporte do cliente, refletindo com precisão a divisão logística estabelecida no WMS.
Regras Operacionais:
Quando o campo transportadora da integração de Trabalhos – Work vier com valor diferente de “Própria”, o WCS deve utilizar o campo subArea como agrupador logístico principal.
O agrupamento dos pallets passará a ocorrer por subárea, e não mais por romaneio, permitindo a separação física e lógica dos volumes conforme o destino final.
Cada subárea será considerada uma entidade independente de agrupamento, possuindo suas próprias posições de PTL.
O WCS deve reservar uma posição de PTL para cada subárea ativa alocada à rampa correspondente no sorter, assegurando que os volumes sejam direcionados e alocados corretamente.
O fechamento de cada pallet ocorrerá de forma individual por subárea, respeitando as mesmas regras de cubagem e peso configuradas para o processo de PTL.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Processo de Picking Exceção  
**Score:** — (semantico) | **ID:** 713717c73db22a6a

O Picking Exceção será utilizado para itens que não se enquadram nos parâmetros da automação, mas que devem ser alocados manualmente no processo de PTL (Put to Light). O fluxo operacional será semelhante ao processo de Full Case, mas com a diferença de que os itens não farão parte da automação e serão direcionados manualmente para a alocação no PTL.
Fluxo Operacional de Picking Exceção:
O operador realiza o login no WCS utilizando o coletor Android.
O operador seleciona a tela de Picking Exceção, onde escolhe o posto de impressão em que está fisicamente para retirar as etiquetas.
Após selecionar o posto de impressão, o operador escolhe a rua da qual ele irá fazer o Picking Exceção. O sistema exibirá a lista de tarefas de separação de acordo com a rua selecionada e os volumes disponíveis.
As tarefas de Picking Exceção serão segregadas por rampa do Sorter, permitindo que o operador saiba para qual rampa deve levar os itens após a coleta.
O operador seleciona quantas tarefas deseja iniciar.
O WCS imprime a quantidade selecionada, seguindo a lógica de impressão do processo de Full Case.
O coletor é direcionado para a tela de coleta, onde o operador deve se deslocar até o endereço especificado no coletor.
O operador realiza a leitura do endereço para iniciar a coleta do item.
O operador realiza a leitura da etiqueta impressa e depois realiza a leitura do código do item, colocando o item no carrinho.
O operador se desloca para o próximo endereço e repete o processo até concluir todas as coletas.
Alocação no PTL:
Após finalizar todas as coletas, o WCS informa em qual rampa do sorter os itens coletados devem ser alocados.
Ele deixará o os volumes a disposição do operador de PTL responsável a rampa onde ele fará o processo de PTL
Cada volume será associado à sua respectiva posição de PTL, e o operador deverá alocar os itens manualmente, confirmando a alocação no PTL.
Esse processo de Picking Exceção garante que itens que não se enquadram no processo automatizado sejam tratados manualmente de forma eficiente e organizada, mantendo a rastreabilidade e a precisão durante a separação dos volumes e a alocação nas posições de PTL.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Put To Light (PTL)  
**Score:** — (semantico) | **ID:** bf922a9f1925fc96

O sistema WCS realiza a abertura automática das posições PTL no momento em que os romaneios são iniciados na tela de romaneios, o WCS irá distribuir os romaneios para as posições de ptl de forma dinâmica priorizando manter um romaneio em uma única rampa sempre que for possível. 

Para iniciar a operação do PTL, o operador da rampa deve realizar login no sistema, realizando a leitura do código de usuário, possibilitando o mapeamento e a alocação correta dos volumes.
Ao receber uma caixa na rampa, o operador realiza a leitura do QR code da etiqueta do volume. Em seguida, o display da posição PTL correspondente acende, indicando o local (posição do pallet) onde o volume deve ser alocado. O operador aloca o volume na posição indicada e confirma o posicionamento pressionando o botão do display, encerrando a tarefa daquele volume.
A cada confirmação de alocação, o WCS registra a quantidade conferida e atualiza essas informações no sistema. Após a alocação e confirmação no display, o operador retorna à rampa para processar o próximo volume.
Cada rampa do sorter conta com 12 posições de PTL, totalizando 96 posições no total. Cada posição é equipada com um LED que fará a sinalização visual do local correto para alocação do volume.
A cubagem do pallet será realizada pelo WCS previamente, através do cadastro de parâmetros. O fechamento do PTL poderá ocorrer por peso ou cubagem atingida, ou ainda pela totalidade do pedido. O operador poderá realizar o fechamento do pallet manualmente, caso julgue necessário. No entanto, o WCS não permitirá o fechamento do pallet quando ainda houver volumes pendentes, conforme a quantidade parametrizada, garantindo que não seja aberto um novo pallet para a alocação de poucos volumes.
Após o fechamento do pallet é colado uma etiqueta pode ser impressa uma etiqueta na rampa do sorter para que o operador identifique o pallet e confirme o fechamento, tornando a posição disponível novamente nesse momento é enviado a integração de expedição informando o conteúdo do pallet para que o wms siga com o faturamento. O WCS reserva o lugar de cada volume nos pallets antes mesmo do volume chegar na rampa, sendo possível assim colocar os volumes no pallet respectivo respeitando a sequência de entrega.

Tratamento de Volumes com Itens Perigosos
Para volumes que contenham itens classificados como perigosos, o WCS deve aplicar uma regra específica de manuseio e agrupamento. Esses volumes não podem ser misturados aos demais e deverão ser agrupados em um pallet exclusivo, segregado dos pallets comuns.
Além disso, o sistema deve garantir que esse pallet com itens perigosos seja identificado de forma distinta e programado para ser o último a ser carregado

PTL Exclusivo para Produtos Específicos
Será incluído um campo no cadastro de produtos para identificar quais itens exigem PTL exclusivo durante o processo de alocação. Quando um produto for marcado com essa flag, o sistema WCS irá automaticamente reservar uma posição de PTL exclusiva para ele, garantindo que os volumes contendo esses itens sejam alocados de forma segregada. Este pallet deve ser programado para ser o penúltimo a ser carregado.
Essa configuração será aplicada a todos os produtos pertencentes ao mesmo romaneio, desde que esses produtos tenham a flag de PTL exclusivo ativada no cadastro. Ao receber um pedido contendo produtos com essa característica, o sistema realizará a alocação de forma a garantir que todos os volumes relacionados a esses itens sejam direcionados para as posições de PTL previamente reservadas, sem misturá-los com outros volumes no processo de alocação.
Agrupamento por Subárea (Transportadoras Diferentes de “Própria”)
Para pedidos cuja transportadora seja diferente de “Própria”, o agrupamento dos pallets no PTL não será realizado com base no romaneio, mas sim na subárea informada na integração de Trabalhos – Work (item 6.4).
O campo subArea enviado na integração será utilizado pelo WCS como agrupador logístico principal, permitindo que os volumes sejam separados fisicamente por destino final, para transportadoras parceiras.
Regras operacionais:
Quando transportadora ≠ “Própria”, o WCS deve agrupar os volumes e pallets por subárea, ignorando o agrupamento por romaneio.
Cada subárea será considerada uma entidade independente de agrupamento, possuindo sua própria posição de PTL na rampa correspondente.
O fechamento dos pallets ocorrerá de forma individual por subárea, seguindo as mesmas regras de cubagem e peso.
O sistema deve permitir que múltiplas subáreas coexistam em uma mesma rampa, desde que cada uma possua posição reservada exclusiva.
Exemplo:
Se um romaneio contiver volumes destinados às subáreas “Porto Alegre”, “Canoas” e “Esteio”, o WCS criará três agrupamentos distintos no PTL, um para cada subárea, alocando os volumes em posições exclusivas de acordo com o destino logístico.
Essa regra assegura rastreabilidade por destino, e atende da melhor forma o trabalho das transportadoras parceiras, auxiliando na segregação dos volumes que hoje é feita manualmente.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** PTL, e Pallets Termolábeis  
**Score:** — (semantico) | **ID:** fa98f2486e48a2cb

Para os pallets gerados nos processos de PTL e Picking Termolábil, será utilizado o seguinte layout de impressão:

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Put To Light  
**Score:** — (nome-topico) | **ID:** 32223a4c466e7e29

Para o processo de Put to Light serão destinados 28 posições para a expedição dos produtos após a conferência e Packing que são divididas em duas zonas separadas: Transportadora Jamef com 18 posições e as demais transportadoras com 10 posições.
Com as informações enviadas nas integrações, o sistema realizara a triagem das caixas que serão expedidas pela transportadora Jamef (lado direita) e para as demais transportadoras (lado esquerdo). É obrigatório que os operadores abram as posições para que o sistema permita alocar as caixas de acordo com sua rota.
Para realizar a abertura de uma posição será necessário que o operador realize a leitura de uma etiqueta identificadora da posição, etiqueta do pallet e código de identificação do operador. Será aceso o LED na cor verde para informar o sucesso na abertura da posição ou em vermelho em caso de erro na sequência da leitura das etiquetas. Operador deve pressionar o Led para confirmar a abertura da posição.
Independente da transportadora será um pedido por posição e sempre que for alocado o último volume do pedido, acenderá o LED na cor azul para informar ao operador que aquele pedido finalizou e ficará disponível para o próximo pedido da fila. Operador deve pressionar o Led para o fechamento da posição.
Em casos que houver a necessidade de fechar um pallet manulmente, basta o operador realizar a leitura de uma etiqueta padrão daquela posição com o comando de fechar o pallet e o operador poderá retirar a carga. Lembrando que o operador deve realizar novamente o processo de abertura para prosseguir alocando outras caixas do mesmo pedido que estarão no Order Start ou realizando os processos da esteira.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Put To Light  
**Score:** — (nome-topico) | **ID:** bd52a83b2b9bc4a5

O sistema WCS realiza a abertura automática das posições de PTL no momento da recepção dos pedidos via integração. Com base nas informações recebidas, o WCS irá distribuir automaticamente os pedidos entre as posições de PTL, considerando a transportadora responsável por sua expedição.
Serão destinadas 28 posições de PTL para a etapa de expedição após a conferência e o packing, sendo divididas em duas zonas físicas distintas:
18 posições dedicadas à Transportadora Jamef (lado direito).
10 posições destinadas às demais transportadoras (lado esquerdo).
A triagem dos volumes entre as zonas será realizada automaticamente pelo WCS, conforme a transportadora informada na integração do pedido. Cada posição de PTL corresponde a um único pedido, garantindo rastreabilidade e controle no processo de expedição.
Fluxo Operacional
Abertura das Posições
Assim que o pedido é integrado, o WCS abre automaticamente uma posição de PTL conforme a transportadora do pedido.
O pedido permanece vinculado à posição até que todos os volumes daquele pedido sejam alocados e confirmados.
Login do Operador
Para iniciar o processo, o operador da zona realiza login no sistema, escaneando o seu código de identificação.
Esse login permite o mapeamento correto das ações executadas por operador.
Alocação dos Volumes
Ao receber uma caixa na zona correspondente, o operador realiza a leitura do QR Code da etiqueta do volume.
Imediatamente o display da posição PTL acende, indicando o local onde o volume deve ser alocado.
O operador posiciona o volume e confirma a alocação pressionando o botão físico do display.
Registro e Controle
Cada confirmação é registrada pelo WCS, atualizando a quantidade conferida e vinculando o volume à
Fechamento da Posição
Quando o último volume do pedido for alocado e confirmado:
O sistema encerra automaticamente o pedido naquela posição (fechamento normal).
Alternativamente, o operador poderá realizar um fechamento manual, caso seja necessário (fechamento forçado).
Após o fechamento, o operador deve ler uma etiqueta de identificação do pallet/expedição.
A posição retorna imediatamente ao estado livre, sendo reaberta pelo WCS para um próximo pedido assim que um novo volume da zona for reconhecido.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Put To Light  
**Score:** — (nome-topico) | **ID:** c33d2a9f1c06ec48

Antes de alocar uma caixa a um pallet o operador deverá realizar o processo de abertura de pallet através do scanner de mão, realizando a leitura da etiqueta de posição PTL e bipar uma etiqueta sequencial (Impressa pelo VELOX) que será a etiqueta de pallet.
Serão 25 posições de PTL contendo 1 led com botão para cada posição.
Após a caixa ser desviada, o operador deve ler o código de barras e, nesse momento, o LED correspondente à transportadora/loja deve acender, indicando o local (pallet) em que a caixa deve ser alocada. Após alocar a caixa, o operador deve pressionar o botão (LED) para apagá-lo e confirmar que a caixa está nesse palete.
Se um volume diferente daquele previsto para a posição do PTL for lido, o LED acenderá em vermelho, indicando que o volume não corresponde àquela saída. Nesse caso, o operador deve mover manualmente a caixa para a estação de rejeito para tratamento.
Após o operador realizar o processo de fechamento do pallet, realizando a leitura da etiqueta de fechamento de pallet, o sistema Velox enviará por meio da integração (Aloca PTL), as informações das caixas alocadas no pallet.
Operador visualiza fisicamente o limite do pallet, ao atingir o limite, o operador realiza o processo de fechamento de pallet. Realizando a leitura da etiqueta de fechamento com o scanner de mão.
Reabertura de pallet
O sistema Velox deverá permitir a reabertura de pallet, para casos de fechamento indevido.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Put To Light  
**Score:** — (nome-topico) | **ID:** d805f81ce65fa7e9

Antes de alocar uma caixa a um pallet o operador deverá realizar o processo de abertura de pallet através do scanner de mão, realizando a leitura da etiqueta de posição PTL e bipar uma etiqueta sequencial (Impressa pelo MFC) que será a etiqueta de pallet.
Após a caixa ser desviada, o operador deve ler o código de barras e, nesse momento, o LED correspondente à transportadora/loja deve acender, indicando o local (pallet) em que a caixa deve ser alocada. Após alocar a caixa, o operador deve pressionar o botão (LED) para apagá-lo e confirmar que a caixa está nesse palete.
Se um volume diferente daquele previsto para a posição do PTL for lido, o LED acenderá em vermelho, indicando que o volume não corresponde àquela saída. Nesse caso, o operador deve mover manualmente a caixa para a estação de rejeição para tratamento.
Após o operador realizar o processo de fechamento do pallet, realizando a leitura da etiqueta de fechamento de pallet, o sistema Velox enviará por meio da integração (Aloca PTL), as informações das caixas alocadas no pallet.
Operador visualiza fisicamente o limite do pallet, ao atingir o limite, o operador realiza o processo de fechamento de pallet. Realizando a leitura da etiqueta de fechamento com o scanner de mão.
O sistema Velox fará a cubagem do pallet, e o operador somente conseguirá fechar o pallet caso todos os volumes de todos os pedidos iniciados no pallet, garantindo assim que todos os pedidos estejam completos no mesmo pallet.
Serão 25 posições de PTL contendo 1 led com botão para cada posição.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Balanceamento (1 x 1)  
**Score:** — (semantico) | **ID:** 93ea0e7a8e7e848d

O sistema Velox estará preparado, caso exista a necessidade de alocação de 1 (um) mesmo item cadastrado em estações diferente.
Mesmo item cadastrado nas 5 (cinco) estações de separação:
Velox fará o balanceamento cadenciando as caixas, realizando a separação de 1 (um) volume por posto, ou seja, se tivermos 3 (três) volumes solicitando a separação do mesmo item que está cadastrado nas 5 (cinco) estações, o Velox irá realizar a separação da primeira caixa na estação 5 (cinco) no final da linha, o segundo volume será separado na estação 4 (quatro), o terceiro volume será separado na estação 3 (três), o segundo volume será separado na estação 2 (dois) e o primeiro volume será separado na estação 1 (um) no inicio da linha, com isso a linha de separação segue com máxima fluidez.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Balanceamento (1 x 1)  
**Score:** — (semantico) | **ID:** 48abf91e85c814a6

O sistema Velox estará preparado, caso exista a necessidade de alocação de 1 (um) mesmo item cadastrado em estações diferente.
Mesmo item cadastrado nas 5 (cinco) estações de separação:
Velox fará o balanceamento cadenciando as caixas, realizando a separação de 1 (um) volume por posto, ou seja, se tivermos 3 (três) volumes solicitando a separação do mesmo item que está cadastrado nas 5 (cinco) estações, o Velox irá realizar a separação da primeira caixa na estação 5 (cinco) no final da linha, o segundo volume será separado na estação 4 (quatro), o terceiro volume será separado na estação 3 (três), o segundo volume será separado na estação 2 (dois) e o primeiro volume será separado na estação 1 (um) no início da linha, com isso a linha de separação segue com máxima fluidez.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Balanceamento (1 x 1)  
**Score:** — (semantico) | **ID:** ef476c810cb57070

O sistema Velox estará preparado, caso exista a necessidade de alocação de 1 (um) mesmo item cadastrado em estações diferente.
Mesmo item cadastrado nas 5 (cinco) estações de separação:
Velox fará o balanceamento cadenciando as caixas, realizando a separação de 1 (um) volume por posto, ou seja, se tivermos 3 (três) volumes solicitando a separação do mesmo item que está cadastrado nas 5 (cinco) estações, o Velox irá realizar a separação da primeira caixa na estação 5 (cinco) no final da linha, o segundo volume será separado na estação 4 (quatro), o terceiro volume será separado na estação 3 (três), o segundo volume será separado na estação 2 (dois) e o primeiro volume será separado na estação 1 (um) no início da linha, com isso a linha de separação segue com máxima fluidez.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Balanceamento (1 x 1)  
**Score:** — (semantico) | **ID:** 3bf9ae157e6a291d

O sistema Velox estará preparado, caso exista a necessidade de alocação de 1 (um) mesmo item cadastrado em estações diferente.
Mesmo item cadastrado nas 5 (cinco) estações de separação:
Velox fará o balanceamento cadenciando as caixas, realizando a separação de 1 (um) volume por posto, ou seja, se tivermos 3 (três) volumes solicitando a separação do mesmo item que está cadastrado nas 5 (cinco) estações, o Velox irá realizar a separação da primeira caixa na estação 5 (cinco) no final da linha, o segundo volume será separado na estação 4 (quatro), o terceiro volume será separado na estação 3 (três), o segundo volume será separado na estação 2 (dois) e o primeiro volume será separado na estação 1 (um) no início da linha, com isso a linha de separação segue com máxima fluidez.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Balanceamento (1 x 1)  
**Score:** — (semantico) | **ID:** 826149a7edd42a90

O sistema Velox estará preparado, caso exista a necessidade de alocação de 1 (um) mesmo item cadastrado em estações diferente.
Mesmo item cadastrado nas 5 (cinco) estações de separação:
Velox fará o balanceamento cadenciando as caixas, realizando a separação de 1 (um) volume por posto, ou seja, se tivermos 3 (três) volumes solicitando a separação do mesmo item que está cadastrado nas 5 (cinco) estações, o Velox irá realizar a separação da primeira caixa na estação 5 (cinco) no final da linha, o segundo volume será separado na estação 4 (quatro), o terceiro volume será separado na estação 3 (três), o segundo volume será separado na estação 2 (dois) e o primeiro volume será separado na estação 1 (um) no início da linha, com isso a linha de separação segue com máxima fluidez.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Balanceamento (1 x 1)  
**Score:** — (semantico) | **ID:** d78a84b53682d2fb

O sistema Velox estará preparado, caso exista a necessidade de alocação de 1 (um) mesmo item cadastrado em estações diferente.
Mesmo item cadastrado nas 5 (cinco) estações de separação:
Velox fará o balanceamento cadenciando as caixas, realizando a separação de 1 (um) volume por posto, ou seja, se tivermos 3 (três) volumes solicitando a separação do mesmo item que está cadastrado nas 5 (cinco) estações, o Velox irá realizar a separação da primeira caixa na estação 5 (cinco) no final da linha, o segundo volume será separado na estação 4 (quatro), o terceiro volume será separado na estação 3 (três), o segundo volume será separado na estação 2 (dois) e o primeiro volume será separado na estação 1 (um) no início da linha, com isso a linha de separação segue com máxima fluidez.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 4697e0d44ca7c979

Antes de alocar uma caixa a um pallet o operador deverá realizar o processo de abertura de pallet através do scanner de mão, realizando a leitura da etiqueta de posição PTL e bipar uma etiqueta sequencial (Impressa pelo VELOX) que será a etiqueta de pallet.
Serão 32 posições de PTL contendo 1 led com botão para cada posição.
Após a caixa ser desviada, o operador deve ler o código de barras e, nesse momento, o LED correspondente à transportadora/loja deve acender, indicando o local (pallet) em que a caixa deve ser alocada. Após alocar a caixa, o operador deve pressionar o botão (LED) para apagá-lo e confirmar que a caixa está nesse palete.
Se um volume diferente daquele previsto para a posição do PTL for lido, o LED acenderá em vermelho, indicando que o volume não corresponde àquela saída. Nesse caso, o operador deve mover manualmente a caixa para a estação de rejeito para tratamento.
Após o operador realizar o processo de fechamento do pallet, realizando a leitura da etiqueta de fechamento de pallet, o sistema Velox enviará por meio da integração (Aloca PTL), as informações das caixas alocadas no pallet.
Operador visualiza fisicamente o limite do pallet, ao atingir o limite, o operador realiza o processo de fechamento de pallet. Realizando a leitura da etiqueta de fechamento com o scanner de mão.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Abertura de PTL  
**Score:** — (semantico) | **ID:** ba5e5fee9568048e

Para abrir a posição PTL no pallet, operado deve realizar uma rotina de abertura na seguinte sequência:
1° Realiza a leitura do código de barras da posição PTL.
Código sequencial sendo posição 1 (um) código de barras "AP0001", posição 2 (dois) código de barras "AP0002" e assim por diante.
Exemplo de etiqueta, fixada próximo ao botão da posição PTL, 1 (uma) etiqueta por posição PTL:
2° Realiza a leitura do código de barras do crachá do operador que irá operar naquela saída.
Exemplo de etiqueta, fixada no crachá do operador:
Responsabilidade cliente.
3° Realiza a leitura do código de barras da etiqueta do RG do pallet.
Exemplo de etiqueta sequencial, fixada no próprio pallet.
Obs.: Etiqueta posição PTL ficará fixada na barra do PTL, 1 (uma) etiqueta em cada posição com seu respectivo número, próximo ao botão. Etiqueta RG Pallet será sequencial e impressa conforme a operação.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Reset de abertura de PTL  
**Score:** — (semantico) | **ID:** 37456c749991e43f

Caso o operador ao realizar a rotina acima, faça o processo invertido o pallet não será aberto e ocasionara erro na rotina, com isso o operador poderá fazer a leitura de reset para reiniciar a rotina de abertura.
Código sequencial sendo posição 1 (um) código de barras "RP0001", posição 2 (dois) código de barras "RP0002" e assim por diante.
Exemplo de etiqueta, fixada próximo ao botão da posição PTL, 1 (uma) etiqueta por posição PTL:
Obs.: Etiqueta reset PTL ficará fixada na barra do PTL, próximo ao botão.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Fechamento de PTL  
**Score:** — (semantico) | **ID:** d5e3ae7d28b4df25

Quando o operado verificar fisicamente o tamanho do pallet e entender que o mesmo poderá ser fechado deverá realizar a leitura de fechamento de pallet.
Código sequencial sendo posição 1 (um) código de barras "FP0001", posição 2 (dois) código de barras "FP0002" e assim por diante.
Exemplo de etiqueta, fixada próximo ao botão da posição PTL, 1 (uma) etiqueta por posição PTL:
Operador poderá realizar o fechamento do pallet a qualquer momento.
Sistema Velox não controla a cubagem de pallet.
Obs.: Etiqueta fechar PTL ficará fixada na barra do PTL, próximo ao botão.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1[1].docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 14271058f4b4950b

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará a rotina de PTL tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1[1].docx`  
**Heading:** Put To Light  
**Score:** — (nome-topico) | **ID:** f4f7e5f7ca34fa70

O processo de Put to Light será realizado nas saídas do sorter pelo operador para que seja possível separar os volumes.
Ao bipar essa caixa e acender o led na cor verde, o operador irá colocar essa caixa no pallet indicado pelo led, após isso ele irá confirmar apertando o botão do led.
Ao chegar no limite do pallet outro operador irá retirar esse pallet e levará até a rua correspondente, e com o scanner de mão irá bipar caixa por caixa, onde a cada caixa bipada irá acender um led correspondente a sua posição.
Antes de alocar uma caixa a um pallet o operador deverá realizar o processo de abertura de pallet através do scanner de mão, realizando a leitura da etiqueta de posição PTL e bipar uma etiqueta sequencial (Impressa pelo MFC) que será a etiqueta de pallet.
Este operador irá alocar a caixa na posição através do scanner de mão e confirmar no led do PTL.
No caso de ter mais de uma caixa para o mesmo representante/pedido, as demais caixas devem estar no mesmo pallet, para que o transporte seja único.
Operador visualiza fisicamente o limite do pallet, ao atingir o limite, o operador realiza o processo de fechamento de pallet. Realizando a leitura da etiqueta de fechamento com o scanner de mão.
Serão 24 posições de PTL contendo 1 led com 3 dígitos para cada posição.
Os leitores de código de barras (Honeywell) para o sistema de Put-To-Light serão de responsabilidade do cliente.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1[1].docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** df2e170315d719ca

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de  PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS da DellaVolpe e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados dedicado, para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo DellaVolpe (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** e589a53fc2f3df2f

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará a rotina de PTL tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Put To Light  
**Score:** — (nome-topico) | **ID:** 40483ec2a05ac41a

O processo de Put to Light será realizado nas saídas do sorter pelo operador para que seja possível separar os volumes.
A abertura do pallet ocorre de forma automática ao bipar o primeiro produto destinado a um pallet não iniciado. Assim que o processo de fechamento de pallet é concluído o sistema MFC realiza a abertura de pallet de acordo com o número sequencial de pallet, ou seja o sistema MFC controla a sequência de código de pallets, assim atribuindo os códigos aos PTLs.
Para o fechamento, ele é realizado logo ao finalizar toda a separação esperada para um determinado pallet/nf. Nesse ponto da separação, o WCS recebe a informação que todos os volumes foram finalizados e nos envia a etiqueta única. Quando todos os itens de todas as notas fiscais atribuídas a rota que está vinculada ao PTL são alocados, o sistema MFC fecha o pallet automaticamente.
Disposição física:
O Sorter possui 3 (três) rampas com 8 (oito) posições PTL cada rampa e 1 (uma) rampa para rejeito e ou stage.
Disposição sistêmica:
O Sorter possui 2 (duas) rampas com 12 (doze) posições PTL cada rampa, 1 (uma) rampa para rejeito e 1 (uma) rampa de stage.
Para o processo operacional no caso da disposição sistêmica quando o operador realizar a leitura do código de barras do volume e a posição (PTL) onde esse volume deve ser alocado não está nas 8 (oito) posições dispostas fisicamente em frente a rampa, todas as 8 posições deve acender na cor rosa para informar ao operador que o volume deve ser alocado em uma posição que esta fisicamente em frente a outra rampa e o led a posição correspondente deve acender na cor verde para que o operador possa identificar a posição onde ele deve alocar o volume.
Após a alocação do volume na posição e a confirmação no led, todas as 8 (oito) posições que estão com o led acesso na cor rosa devem apagar.
Serão 24 posições de PTL contendo 1 led com 3 dígitos para cada posição.
Os leitores de código de barras (Honeywell) para o sistema de Put-To-Light serão de responsabilidade do cliente.

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS 1.docx`  
**Heading:** Rampas (PTL) – Octopus SC  
**Score:** — (semantico) | **ID:** 9b0372a4ba8527a4

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
No caso do projeto do CD de Santa Catarina, onde o sorter terá 18 (dezoito) rampas de saída, será necessário 18 (dezoito) unidades de leitores de código de barras e 18 (dezoito) conversores RS232, mencionados acima.
Obs.: pendente definição se seguiremos com leitor fixo ou de gatilho, caso seja fixo os equipamentos acima, não serão necessários.
Leitores de código de barras e conversores RS232 citados acima, responsabilidade Invent.

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS 1.docx`  
**Heading:** Rampas (PTL) – Octopus MS  
**Score:** — (semantico) | **ID:** a533c36292096ef2

O sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, para serem distribuídos nas rampas do sorter.
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
No caso do projeto do CD de Santa Catarina, onde o sorter terá 18 (dezoito) rampas de saída, será necessário 10 (dez) unidades de leitores de código de barras e 10 (dez) conversores RS232, mencionados acima.
Obs.: pendente definição se seguiremos com leitor fixo ou de gatilho, caso seja fixo os equipamentos acima, não serão necessários.
Leitores de código de barras e conversores RS232 citados acima, responsabilidade Invent.

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS.docx`  
**Heading:** Rampas (PTL)  
**Score:** — (semantico) | **ID:** d64bd22da61d1e80

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
No caso do projeto do CD de Santa Catarina, onde o sorter terá 18 (dezoito) rampas de saída, será necessário 18 (dezoito) unidades de leitores de código de barras e 18 (dezoito) conversores RS232, mencionados acima.
Leitores de código de barras e conversores RS232 citados acima, responsabilidade Invent.

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 83bf1804b72f42d5

Ao iniciar a operação, o operador da saída do sorter deverá abrir as posições PTL que deseja utilizar na operação atual, para que consiga mapear e alocar os volumes nas posições indicadas.
Com isso, o operador ao receber a caixa na rampa de saída, ao realizar a leitura do volume desviado, o display da posição PTL deverá acender indicando o local pallet onde o volume deve ser alocado.
Operador aloca o volume no local indicado, aperta o botão do display confirmando que o volume foi alocado e segue para o próximo volume.
Conforme a cubagem de pallet realizada pelo sistema Velox, operador verifica fisicamente o status do led, se o pallet está cheio fisicamente o led acenderá na cor “Ex: Laranja” e o operador deve realizar o fechamento desse pallet e abrir um novo.

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Rampas (PTL)  
**Score:** — (semantico) | **ID:** f1fb662c4186e9d0

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
No caso do projeto do CD de Santa Catarina, onde o sorter terá 18 (dezoito) rampas de saída, será necessário 18 (dezoito) unidades de leitores de código de barras e 18 (dezoito) conversores RS232, mencionados acima.

---
**Origem:** [I23.3917] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 94218c01d4f13447

Ao iniciar a operação, o operador da saída do sorter deverá abrir as posições PTL que deseja utilizar na operação atual, para que consiga mapear e alocar os volumes nas posições indicadas.
Com isso, o operador ao receber a caixa na rampa de saída, ao realizar a leitura do volume desviado, o display da posição PTL deverá acender indicando o local pallet onde o volume deve ser alocado.
Operador aloca o volume no local indicado, aperta o botão do display confirmando que o volume foi alocado e segue para o próximo volume.
Conforme a cubagem de pallet realizada pelo sistema Velox, operador verifica fisicamente o status do led, se o pallet está cheio fisicamente o led acenderá na cor “Ex: Laranja” e o operador deve realizar o fechamento desse pallet e abrir um novo.

---
**Origem:** [I23.3917] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Rampas (PTL)  
**Score:** — (semantico) | **ID:** 70e06918d349b77b

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
No caso do projeto do CD de Santa Catarina, onde o sorter terá 18 (dezoito) rampas de saída, será necessário 18 (dezoito) unidades de leitores de código de barras e 18 (dezoito) conversores RS232, mencionados acima.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Abertura de Pallet (VolExp)  
**Score:** — (semantico) | **ID:** e25b653b5de4fcc3

Operador para abrir um novo pallet na posição PTL, com o leitor de código de barras deverá realizar a leitura do código da posição PTL, com isso o Velox consulta o WMS para gerar um novo número VolExp (3.10.	Consulta Número VolExp), e utiliza o número informado pelo WMS para atrelar ao VolExp aberto.
Com isso o pallet está apto a receber novas caixas vindas do sorter.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Sugestão alocação de curva ABC  
**Score:** — (semantico) | **ID:** 4d4c2119970b235f

O sistema WCS será responsável pela sugestão de alocação de curva ABC.
O principal objetivo da sugestão de alocação de curva ABC é otimizar a eficiência operacional no CD Fagron, determinar as prioridades de posições e organizar os produtos nas posições de picking. O Conceito será por PEGA
Administração PEGA: O sistema WCS será responsável por gerenciar o ciclo completo de pega, desde a definição de critérios até a execução das alocações. Esse processo será iniciado automaticamente a partir do primeiro mês de operação, sendo configurável conforme as necessidades da operação.
Parâmetro para definir o range de data para Sugestão de Alocação: Será necessário incluir um parâmetro de configuração no sistema WCS para definir o range de data a ser considerado ao gerar sugestões de alocação.
Definição do Range de Data: O range de data será configurável, permitindo que o administrador do sistema defina intervalos de tempo para quando a sugestão de alocação deverá ser gerada. Por exemplo, o parâmetro pode ser ajustado para sugerir alocações para uma janela de 7, 15 ou 30 dias, conforme as necessidades.
Função do Parâmetro: Este parâmetro será utilizado para gerar automaticamente sugestões de alocação dentro do intervalo de datas selecionado, considerando dados históricos de vendas, demanda, e outras variáveis relevantes.
Interface de Configuração: O administrador do sistema WCS terá acesso a uma interface de fácil utilização para configurar e ajustar esse parâmetro.
Exibição na tela Quantidade de PEGAS por Produto: A quantidade de pegas por produto será exibida em uma tela de dashboard ou relatório, com filtros para visualizar por produto, categoria ou data.
Para facilitar o acompanhamento e o controle, a tela do sistema WCS deverá mostrar a quantidade de PEGAS por produto. Essa exibição permitirá aos operadores e gestores visualizarem rapidamente a alocação de cada item, o que melhora a tomada de decisão.
Exemplo de Exibição:
Itens curva A – Itens de alta prioridade devem ficar alocados nas áreas de picking mais acessíveis e próximas ao ponto de saída. Com isso, reduzimos o tempo de deslocamento dos operadores, aumentando a eficiência dos responsáveis pela separação.
Itens curva B – Itens de prioridade intermediaria, devem ficar alocados em áreas de facil acesso, mas não necessariamente tão próximas quanto os itens de curva A.
Itens curva C – Itens de baixa prioridade, devem ficar alocados nas áreas mais distantes dos pontos de saída, onde a visita nesses endereços é menos frequente.
O sistema WCS, baseado nos índices de produtos por separação, fará a sugestão de alocação de curva ABC, operador assim terá a possibilidade de verificar a sugestão do sistema WCS, e caso seja necessário realizar alteração, deverá alterar o posicionamento dos produtos nos endereços sugeridos pelo WCS.
A sugestão de alocação será no sistema do WCS, a decisão de alterar o mapeamento dos produtos, será da operação.
O sistema WCS deverá gerar um relatório para analisar os itens que mais vendem e suas classificações para revisão operacional e rebalanceamento.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Sugestão de Alocação  
**Score:** — (semantico) | **ID:** d1d4b038a668b07d

O Velox possui uma inteligência que armazena os registros das separações realizadas pela automação Invent e faz uma análise dos itens de acordo com a quantidade de unidades coletadas deste item e quantas visitas no endereço é feita para a separação.
Com essa análise feita, o Velox apresenta uma relação com sugestões de alocação dos itens de acordo com o levantamento realizado da própria operação do cliente.
Nesta apresentação o Velox solicita a data inicial e final que a base deve ser analisada, informando o ranking de coleta de todos os itens possuídos na base e mostrando a sugestão para posto, endereço, código do produto e descrição.
A sugestão tem como princípio alocar os itens com maiores números de coletas e visitas próximos ao operador e os demais dispersarem nas extremidades de cada posto de coleta. Sendo assim, otimizando o processo de separação ganhando em performance na linha de picking.
Velox permitirá que esses dados sejam exportados via Excel.
Pendente de análise

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Sugestão de Alocação  
**Score:** — (semantico) | **ID:** adbd81ac0b86089b

O Velox possui uma inteligência que armazena os registros das separações realizadas pela automação Invent e faz uma análise dos itens de acordo com a quantidade de unidades coletadas deste item e quantas visitas no endereço é feita para a separação.
Com essa análise feita, o Velox apresenta uma relação com sugestões de alocação dos itens de acordo com o levantamento realizado da própria operação do cliente.
Nesta apresentação o Velox solicita a data inicial e final que a base deve ser analisada, informando o ranking de coleta de todos os itens possuídos na base e mostrando a sugestão para posto, endereço, código do produto e descrição.
A sugestão tem como princípio alocar os itens com maiores números de coletas e visitas próximos ao operador e os demais dispersarem nas extremidades de cada posto de coleta. Sendo assim, otimizando o processo de separação ganhando em performance na linha de picking.
Velox permitirá que esses dados sejam exportados via Excel.
Pendente de análise

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO_POSTOS_ESPELHOS -_REV1.docx`  
**Heading:** Postos Espelhos no Baixo Giro  
**Score:** — (semantico) | **ID:** 0d44b621d9bea200

Atualmente a linha de separação de baixo giro possuem 4 estações no sistema WCS. Será necessario replicar cada estação 3 vezes, sendo assim cada endereço será repetido nas 4 estações espelho.
Com o espelhamento dos postos será possivel 4 operadores coletarem simultanemanete caixas diferentes no mesmo posto físico. O WCS não será responsavél por realizar o balanceamento dos volumes nos postos, este processo será feito manualmente pela operação.
O processo de separação nos postos espelhos serão realizados via coletor. Os dados necessarios para as telas dedicadas para a separação no coletor são: Posto atual, campo de leitura do código de barras, Endereço, EAN, quantidade esperada/coletada, Botão que abra a opção de selecionar a quantidade separada (mais ou menos) e o botão de confirmação de separação.
As telas de separação que serão disponibilizadas para o coletor devem ser responsivas.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Put-to-light (PTL)  
**Score:** — (semantico) | **ID:** d7f8bfc0af03b464

As 06 (seis) saídas do sorter alocarão 06 (seis) pallets em cada posição do Put-to-Light (segregados cada um por um LED).

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Sinaleiros  
**Score:** — (nome-topico) | **ID:** c5c9d71348201d56

Cada saída contará com 01 (um) sinaleiro, que servirá como ponte na interação entre o sistema VELOX e os operadores, indicando de maneira visual o que foi retornado pelo sistema quando ao estado atual do pallet (aberto, fechado ou pendente de finalização), funcionando assim como um recurso orientativo para a operação.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** 4c8ba6f62c1b2618

Na ocasião de realizar a leitura de um volume que não corresponde àquela posição do PTL, o sinaleiro permanecerá com o LED vermelho, indicando que o volume não pertence à saída correspondente ou o código de barras lido não representa um volume esperado naquela posição.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Put-to-light (PTL)  
**Score:** — (semantico) | **ID:** 8dcc725952c5213e

As 06 (seis) saídas do sorter alocarão 06 (seis) pallets em cada posição do Put-to-Light (segregados cada um por um LED).

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Sinaleiros  
**Score:** — (nome-topico) | **ID:** f1ae34e04228d27e

Cada saída contará com 01 (um) sinaleiro, que servirá como ponte na interação entre o sistema VELOX e os operadores, indicando de maneira visual o que foi retornado pelo sistema quando ao estado atual do pallet (aberto, fechado ou pendente de finalização), funcionando assim como um recurso orientativo para a operação.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** e61d509ee1e1addd

Na ocasião de realizar a leitura de um volume que não corresponde àquela posição do PTL, o sinaleiro permanecerá com o LED vermelho, indicando que o volume não pertence à saída correspondente ou o código de barras lido não representa um volume esperado naquela posição.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Put To Light (PTL)  
**Score:** — (semantico) | **ID:** a7e0d6eefa1bf71a

Após a conclusão do processo no PTW (Put to Wall), os volumes serão encaminhados para a área de packing, onde o WMS imprimirá uma nova etiqueta para cada volume. O WCS depende dessa etiqueta para que o sistema de PTL (Pick to Light) possa agrupar os volumes conforme a transportadora responsável pelo frete.
Fluxo Operacional – Alocação PTL após Finalização do packing
Encaminhamento do volume do packing para o PTL
Após a finalização do pedido no PTW (Put to Wall), o volume é automaticamente direcionado para a área de packing e em sequência para área de alocação do PTL.
Leitura do código de barras do volume
O operador realiza a leitura (bipagem) da etiqueta do volume com um coletor android.
Sinalização da posição de alocação via LED
Com base na transportadora associada ao volume, o WCS aciona o LED correspondente à posição de pallet onde o volume deve ser agrupado.
Alocação física do volume
O operador identifica o LED aceso, desloca-se até a posição sinalizada e deposita fisicamente o volume.
Confirmação da alocação
Após posicionar o volume, o operador pressiona o botão do PTL para confirmar a conclusão da alocação. Nesse momento é disparado a integração informando o volume e a gaiola vinculada
Repetição do processo
O sistema está apto a processar o próximo volume em sequência, repetindo o ciclo descrito acima até o encerramento do lote.
OBS: A operação poderá utilizar a mesma etiqueta ou prisma para o parcelContainer (gaiola) desde que não seja na mesma onda de separação ou outra transportadora da mesma onda, quando for realizada a leitura de um volume de outra onda o WCS entenderá que a gaiola está livre e começará a armazenar os volumes dessa nova onda, realizando assim automaticamente o fechamento da gaiola.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** de4eb33421a341da

Ao iniciar a operação, o operador responsável pelas saídas do sorter deve realizar o login na rampa para mapear e alocar os volumes nas posições indicadas.
Quando o operador recebe um volume na rampa de saída, ele realiza a leitura do código de barras do volume desviado. O display da posição PTL correspondente acenderá, indicando o local do pallet onde o volume deve ser alocado.
Após alocar o volume no local indicado, o operador deve pressionar o botão do display para confirmar que o volume foi alocado. O operador, então, prossegue para o próximo volume.
Fechamento do Pallet:
O sistema Velox realiza a cubagem do pallet, e o operador deve verificar fisicamente o status do LED. Se o pallet estiver cheio, o LED acenderá em laranja como indicação. Nesse momento, o operador deve proceder com o fechamento do pallet realizando a leitura de um código fantasia para ser feito a associação de todos os volumes alocados a um pallet e o sistema abrirá automaticamente o próximo pallet.
Além disso, o operador tem a opção de forçar o fechamento do pallet. Para isso, ele deve realizar a leitura de um comando pré-definido em cada posição PTL, permitindo o fechamento do pallet antes que a cubagem definida no Velox seja atingida. O processo de leitura de um código fantasia se mantém o mesmo nestes casos.
Com isso realizamos o envio da integração de Fechamento do Pallet para a Consinco.

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 1c03bc5b5bab7a9b

Ao iniciar a operação, o operador responsável pelas saídas do sorter deve realizar o login na rampa para mapear e alocar os volumes nas posições indicadas.
Quando o operador recebe um volume na rampa de saída, ele realiza a leitura do código de barras do volume desviado. O display da posição PTL correspondente acenderá, indicando o local do pallet onde o volume deve ser alocado.
Após alocar o volume no local indicado, o operador deve pressionar o botão do display para confirmar que o volume foi alocado. O operador, então, prossegue para o próximo volume.
Fechamento do Pallet:
O sistema Velox realiza a cubagem do pallet, e o operador deve verificar fisicamente o status do LED. Se o pallet estiver cheio, o LED acenderá em laranja como indicação. Nesse momento, o operador deve proceder com o fechamento do pallet realizando a leitura de um código fantasia para ser feito a associação de todos os volumes alocados a um pallet e o sistema abrirá automaticamente o próximo pallet.
Além disso, o operador tem a opção de forçar o fechamento do pallet. Para isso, ele deve realizar a leitura de um comando pré-definido em cada posição PTL, permitindo o fechamento do pallet antes que a cubagem definida no Velox seja atingida. O processo de leitura de um código fantasia se mantém o mesmo nestes casos.
Com isso realizamos o envio da integração de Fechamento do Pallet para a Consinco.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Put To Light (PTL)  
**Score:** — (semantico) | **ID:** 89532ca25623064f

O sistema WCS realiza a abertura automática das posições PTL no momento em que recebe a integração dos pedidos baseado. O WCS só libera para picking pedidos que tenham posição de PTL garantida para expedição. Para iniciar a operação, o operador da rampa deve realizar login no sistema, realizando a leitura do código de usuário, possibilitando o mapeamento e a alocação correta dos volumes.
Ao receber uma caixa na rampa, o operador realiza a leitura do QR code da etiqueta do volume. Em seguida, o display da posição PTL correspondente acende, indicando o local (posição do pallet) onde o volume deve ser alocado. O operador aloca o volume na posição indicada e confirma o posicionamento pressionando o botão do display, encerrando a tarefa daquele volume.
A cada confirmação de alocação, o WCS registra a quantidade conferida e atualiza essas informações no sistema. Após a alocação e confirmação no display, o operador retorna à rampa para processar o próximo volume.
Cada rampa do sorter conta com 12 posições de PTL, totalizando 96 posições no total. Cada posição é equipada com um LED que fará a sinalização visual do local correto para alocação do volume.
A cubagem do pallet será realizada pelo WCS previamente, através do cadastro de parâmetros. O fechamento do PTL poderá ocorrer por peso ou cubagem atingida, ou ainda pela totalidade do pedido. O operador poderá realizar o fechamento do pallet manualmente, caso julgue necessário. No entanto, o WCS não permitirá o fechamento do pallet quando ainda houver volumes pendentes, conforme a quantidade parametrizada, garantindo que não seja aberto um novo pallet para a alocação de poucos volumes.
O WCS não permitirá o fechamento do pallet caso ainda haja poucos volumes pendentes, conforme a quantidade parametrizada, garantindo que não seja aberto um novo pallet para alocação de poucos volumes.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Sugestão alocação de curva ABC  
**Score:** — (semantico) | **ID:** 264230c923d276fe

O sistema WCS será responsável pela sugestão de alocação de curva ABC.
O principal objetivo da sugestão de alocação de curva ABC é otimizar a eficiência operacional no CD C&A, determinar as prioridades de posições e organizar os produtos nas posições de picking. O Conceito será por PEGA.
Administração PEGA: O sistema WCS será responsável por gerenciar o ciclo completo de pega, desde a definição de critérios até a execução das alocações. Esse processo será iniciado automaticamente a partir do primeiro mês de operação, sendo configurável conforme as necessidades da operação.
Parâmetro para definir o range de data para Sugestão de Alocação: Será necessário incluir um parâmetro de configuração no sistema WCS para definir o range de data a ser considerado ao gerar sugestões de alocação.
Definição do Range de Data: O range de data será configurável, permitindo que o administrador do sistema defina intervalos de tempo para quando a sugestão de alocação deverá ser gerada. Por exemplo, o parâmetro pode ser ajustado para sugerir alocações para uma janela de 7, 15 ou 30 dias, conforme as necessidades.
Função do Parâmetro: Este parâmetro será utilizado para gerar automaticamente sugestões de alocação dentro do intervalo de datas selecionado, considerando dados históricos de vendas, demanda, e outras variáveis relevantes.
Interface de Configuração: O administrador do sistema WCS terá acesso a uma interface de fácil utilização para configurar e ajustar esse parâmetro.
Exibição na tela Quantidade de PEGAS por Produto: A quantidade de pegas por produto será exibida em uma tela de dashboard ou relatório, com filtros para visualizar por produto, categoria ou data.
Para facilitar o acompanhamento e o controle, a tela do sistema WCS deverá mostrar a quantidade de PEGAS por produto. Essa exibição permitirá aos operadores e gestores visualizarem rapidamente a alocação de cada item, o que melhora a tomada de decisão.
Exemplo de Exibição:
Itens curva A – Itens de alta prioridade devem ficar alocados nas áreas de picking mais acessíveis e próximas ao ponto de saída. Com isso, reduzimos o tempo de deslocamento dos operadores, aumentando a eficiência dos responsáveis pela separação.
Itens curva B – Itens de prioridade intermediaria, devem ficar alocados em áreas de facil acesso, mas não necessariamente tão próximas quanto os itens de curva A.
Itens curva C – Itens de baixa prioridade, devem ficar alocados nas áreas mais distantes dos pontos de saída, onde a visita nesses endereços é menos frequente.
O sistema WCS, baseado nos índices de produtos por separação, fará a sugestão de alocação de curva ABC, operador assim terá a possibilidade de verificar a sugestão do sistema WCS, e caso seja necessário realizar alteração, deverá alterar o posicionamento dos produtos nos endereços sugeridos pelo WCS.
A sugestão de alocação será no sistema do WCS, a decisão de alterar o mapeamento dos produtos, será da operação.
O sistema WCS deverá gerar um relatório para analisar os itens que mais vendem e suas classificações para revisão operacional e rebalanceamento.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Sugestão alocação de curva ABC  
**Score:** — (semantico) | **ID:** aae8885f100f7dde

O sistema WCS será responsável pela sugestão de alocação de curva ABC.
O principal objetivo da sugestão de alocação de curva ABC é otimizar a eficiência operacional no CD C&A, determinar as prioridades de posições e organizar os produtos nas posições de picking. O Conceito será por PEGA.
Administração PEGA: O sistema WCS será responsável por gerenciar o ciclo completo de pega, desde a definição de critérios até a execução das alocações. Esse processo será iniciado automaticamente a partir do primeiro mês de operação, sendo configurável conforme as necessidades da operação.
Parâmetro para definir o range de data para Sugestão de Alocação: Será necessário incluir um parâmetro de configuração no sistema WCS para definir o range de data a ser considerado ao gerar sugestões de alocação.
Definição do Range de Data: O range de data será configurável, permitindo que o administrador do sistema defina intervalos de tempo para quando a sugestão de alocação deverá ser gerada. Por exemplo, o parâmetro pode ser ajustado para sugerir alocações para uma janela de 7, 15 ou 30 dias, conforme as necessidades.
Função do Parâmetro: Este parâmetro será utilizado para gerar automaticamente sugestões de alocação dentro do intervalo de datas selecionado, considerando dados históricos de vendas, demanda, e outras variáveis relevantes.
Interface de Configuração: O administrador do sistema WCS terá acesso a uma interface de fácil utilização para configurar e ajustar esse parâmetro.
Exibição na tela Quantidade de PEGAS por Produto: A quantidade de pegas por produto será exibida em uma tela de dashboard ou relatório, com filtros para visualizar por produto, categoria ou data.
Para facilitar o acompanhamento e o controle, a tela do sistema WCS deverá mostrar a quantidade de PEGAS por produto. Essa exibição permitirá aos operadores e gestores visualizarem rapidamente a alocação de cada item, o que melhora a tomada de decisão.
Exemplo de Exibição:
Itens curva A – Itens de alta prioridade devem ficar alocados nas áreas de picking mais acessíveis e próximas ao ponto de saída. Com isso, reduzimos o tempo de deslocamento dos operadores, aumentando a eficiência dos responsáveis pela separação.
Itens curva B – Itens de prioridade intermediaria, devem ficar alocados em áreas de facil acesso, mas não necessariamente tão próximas quanto os itens de curva A.
Itens curva C – Itens de baixa prioridade, devem ficar alocados nas áreas mais distantes dos pontos de saída, onde a visita nesses endereços é menos frequente.
O sistema WCS, baseado nos índices de produtos por separação, fará a sugestão de alocação de curva ABC, operador assim terá a possibilidade de verificar a sugestão do sistema WCS, e caso seja necessário realizar alteração, deverá alterar o posicionamento dos produtos nos endereços sugeridos pelo WCS.
A sugestão de alocação será no sistema do WCS, a decisão de alterar o mapeamento dos produtos, será da operação.
O sistema WCS deverá gerar um relatório para analisar os itens que mais vendem e suas classificações para revisão operacional e rebalanceamento.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Sugestão alocação de curva ABC  
**Score:** — (semantico) | **ID:** 67215745157dc7ac

O sistema WCS será responsável pela sugestão de alocação de curva ABC.
O principal objetivo da sugestão de alocação de curva ABC é otimizar a eficiência operacional no CD C&A, determinar as prioridades de posições e organizar os produtos nas posições de picking. O Conceito será por PEGA.
Administração PEGA: O sistema WCS será responsável por gerenciar o ciclo completo de pega, desde a definição de critérios até a execução das alocações. Esse processo será iniciado automaticamente a partir do primeiro mês de operação, sendo configurável conforme as necessidades da operação.
Parâmetro para definir o range de data para Sugestão de Alocação: Será necessário incluir um parâmetro de configuração no sistema WCS para definir o range de data a ser considerado ao gerar sugestões de alocação.
Definição do Range de Data: O range de data será configurável, permitindo que o administrador do sistema defina intervalos de tempo para quando a sugestão de alocação deverá ser gerada. Por exemplo, o parâmetro pode ser ajustado para sugerir alocações para uma janela de 7, 15 ou 30 dias, conforme as necessidades.
Função do Parâmetro: Este parâmetro será utilizado para gerar automaticamente sugestões de alocação dentro do intervalo de datas selecionado, considerando dados históricos de vendas, demanda, e outras variáveis relevantes.
Interface de Configuração: O administrador do sistema WCS terá acesso a uma interface de fácil utilização para configurar e ajustar esse parâmetro.
Exibição na tela Quantidade de PEGAS por Produto: A quantidade de pegas por produto será exibida em uma tela de dashboard ou relatório, com filtros para visualizar por produto, categoria ou data.
Para facilitar o acompanhamento e o controle, a tela do sistema WCS deverá mostrar a quantidade de PEGAS por produto. Essa exibição permitirá aos operadores e gestores visualizarem rapidamente a alocação de cada item, o que melhora a tomada de decisão.
Exemplo de Exibição:
Itens curva A – Itens de alta prioridade devem ficar alocados nas áreas de picking mais acessíveis e próximas ao ponto de saída. Com isso, reduzimos o tempo de deslocamento dos operadores, aumentando a eficiência dos responsáveis pela separação.
Itens curva B – Itens de prioridade intermediaria, devem ficar alocados em áreas de facil acesso, mas não necessariamente tão próximas quanto os itens de curva A.
Itens curva C – Itens de baixa prioridade, devem ficar alocados nas áreas mais distantes dos pontos de saída, onde a visita nesses endereços é menos frequente.
O sistema WCS, baseado nos índices de produtos por separação, fará a sugestão de alocação de curva ABC, operador assim terá a possibilidade de verificar a sugestão do sistema WCS, e caso seja necessário realizar alteração, deverá alterar o posicionamento dos produtos nos endereços sugeridos pelo WCS.
A sugestão de alocação será no sistema do WCS, a decisão de alterar o mapeamento dos produtos, será da operação.
O sistema WCS deverá gerar um relatório para analisar os itens que mais vendem e suas classificações para revisão operacional e rebalanceamento.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Sugestão alocação de curva ABC  
**Score:** — (semantico) | **ID:** 37727c7ea6d4417f

O sistema WCS será responsável pela sugestão de alocação de curva ABC.
O principal objetivo da sugestão de alocação de curva ABC é otimizar a eficiência operacional no CD C&A, determinar as prioridades de posições e organizar os produtos nas posições de picking. O Conceito será por PEGA.
Administração PEGA: O sistema WCS será responsável por gerenciar o ciclo completo de pega, desde a definição de critérios até a execução das alocações. Esse processo será iniciado automaticamente a partir do primeiro mês de operação, sendo configurável conforme as necessidades da operação.
Parâmetro para definir o range de data para Sugestão de Alocação: Será necessário incluir um parâmetro de configuração no sistema WCS para definir o range de data a ser considerado ao gerar sugestões de alocação.
Definição do Range de Data: O range de data será configurável, permitindo que o administrador do sistema defina intervalos de tempo para quando a sugestão de alocação deverá ser gerada. Por exemplo, o parâmetro pode ser ajustado para sugerir alocações para uma janela de 7, 15 ou 30 dias, conforme as necessidades.
Função do Parâmetro: Este parâmetro será utilizado para gerar automaticamente sugestões de alocação dentro do intervalo de datas selecionado, considerando dados históricos de vendas, demanda, e outras variáveis relevantes.
Interface de Configuração: O administrador do sistema WCS terá acesso a uma interface de fácil utilização para configurar e ajustar esse parâmetro.
Exibição na tela Quantidade de PEGAS por Produto: A quantidade de pegas por produto será exibida em uma tela de dashboard ou relatório, com filtros para visualizar por produto, categoria ou data.
Para facilitar o acompanhamento e o controle, a tela do sistema WCS deverá mostrar a quantidade de PEGAS por produto. Essa exibição permitirá aos operadores e gestores visualizarem rapidamente a alocação de cada item, o que melhora a tomada de decisão.
Exemplo de Exibição:
Itens curva A – Itens de alta prioridade devem ficar alocados nas áreas de picking mais acessíveis e próximas ao ponto de saída. Com isso, reduzimos o tempo de deslocamento dos operadores, aumentando a eficiência dos responsáveis pela separação.
Itens curva B – Itens de prioridade intermediaria, devem ficar alocados em áreas de facil acesso, mas não necessariamente tão próximas quanto os itens de curva A.
Itens curva C – Itens de baixa prioridade, devem ficar alocados nas áreas mais distantes dos pontos de saída, onde a visita nesses endereços é menos frequente.
O sistema WCS, baseado nos índices de produtos por separação, fará a sugestão de alocação de curva ABC, operador assim terá a possibilidade de verificar a sugestão do sistema WCS, e caso seja necessário realizar alteração, deverá alterar o posicionamento dos produtos nos endereços sugeridos pelo WCS.
A sugestão de alocação será no sistema do WCS, a decisão de alterar o mapeamento dos produtos, será da operação.
O sistema WCS deverá gerar um relatório para analisar os itens que mais vendem e suas classificações para revisão operacional e rebalanceamento.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 78068b333c1316d0

Ao iniciar a operação, o operador da saída do sorter deverá realizar o login na rampa para que consiga mapear e alocar os volumes nas posições indicadas.
Após o desvio do volume na rampa correta o operador pode realizar a leitura do volume (caixa) através do scanner da rampa, uma vez que o WCS recebe a informação do código da caixa ele acende o led da posição PTL informando onde o operador deve colocar o volume ou acenderá todos os leds do posto PTL vinculado ao scanner que realizou a leitura na cor vermelha informando que o volume não pertence a nenhuma das posições presentes no posto PTL.
Quando o volume pertence a uma posição do posto o WCS acenderá o led correspondente a posição PTL como informado acima e o operador deve colocar o volume no pallet e em seguida confirmar apertando o botão do led, assim o WCS identifica a alocação e guarda essas informações para enviar posteriormente as informações ao WMS.
No decorrer das alocações de volumes ao pallet o WCS verifica a cubagem e peso como mencionado do item Cubagem de pallet, indicando que o pallet deve ser fechado ao operador através de uma cor especifica no led, sendo que a cada pallet fechado é retornado uma integração para o WMS.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar a leitura de um código master que será vinculado aos volumes que foram alocados a este pallet.
A disponibilização desta etiqueta master será de responsabilidade do cliente.
Em caso de rejeito, o operador terá uma tela que irá exibir o diagnóstico de erro deste volume e poderá induzir novamente caso for possível.
Para a posição do PTL que for dedicada aos volumes rejeitados, quando o volume for lido será acesso o led na cor rosa e para esta posição em especifico. O WCS não fara o controle de cubagem de pallet, sendo assim será de responsabilidade da operação tirar os volumes da posição e tratar individualmente cada um deles e induzi-los novamente.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** 075b81b8a34dcfe1

Ao iniciar a operação, o operador da saída do sorter deverá realizar o login na rampa para que consiga mapear e alocar os volumes nas posições indicadas.
Após o desvio do volume na rampa correta o operador pode realizar a leitura do volume (caixa) através do scanner da rampa, uma vez que o WCS recebe a informação do código da caixa ele acende o led da posição de PTL informando onde o operador deve colocar o volume ou acenderá todos os leds do posto de PTL vinculado ao scanner que realizou a leitura na cor vermelha informando que o volume não pertence a nenhuma das posições presentes no posto PTL.
Quando o volume pertence a uma posição do posto o WCS acenderá o led correspondente a posição PTL como informado acima e o operador deve colocar o volume no pallet e em seguida confirmar apertando o botão do led, assim o WCS identifica a alocação e guarda essas informações para enviar posteriormente ao WMS.
No decorrer das alocações de volumes ao pallet o WCS verifica a cubagem e peso como mencionado do item Cubagem de pallet, indicando que o pallet deve ser fechado ao operador através de uma cor especifica no led, sendo que a cada pallet fechado é retornado uma integração para o WMS.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar a leitura de um código master impresso previamente pelo WMS que será vinculado aos volumes que foram alocados a este pallet. A master (Avulsa) é impressa sem um destino definido (LOJA).
O WCS não deve permitir a reutilização desses códigos.
A disponibilização desta etiqueta master será de responsabilidade do cliente.
Em caso de rejeito, o operador terá uma tela que irá exibir o diagnóstico de erro deste volume e poderá induzir novamente caso for necessário.

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** PTL  
**Score:** — (nome-topico) | **ID:** e7ac72f917af86cb

Ao iniciar a operação, o operador da saída do sorter deverá realizar o login na rampa para que consiga mapear e alocar os volumes nas posições indicadas.
Após o desvio do volume na rampa correta o operador pode realizar a leitura do volume (caixa) através do scanner da rampa, uma vez que o WCS recebe a informação do código da caixa ele acende o led da posição PTL informando onde o operador deve colocar o volume ou acenderá todos os leds do posto PTL vinculado ao scanner que realizou a leitura na cor vermelha informando que o volume não pertence a nenhuma das posições presentes no posto PTL.
Quando o volume pertence a uma posição do posto o WCS acenderá o led correspondente a posição PTL como informado acima e o operador deve colocar o volume no pallet e em seguida confirmar apertando o botão do led, assim o WCS identifica a alocação e guarda essas informações para enviar posteriormente as informações ao WMS.
No decorrer das alocações de volumes ao pallet o WCS verifica a cubagem e peso como mencionado do item Cubagem de pallet, indicando que o pallet deve ser fechado ao operador através de uma cor especifica no led, sendo que a cada pallet fechado é retornado uma integração para o WMS.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar a leitura de um código master que será vinculado aos volumes que foram alocados a este pallet.
A disponibilização desta etiqueta master será de responsabilidade do cliente.
Em caso de rejeito, o operador terá uma tela que irá exibir o diagnóstico de erro deste volume e poderá induzir novamente caso for possível.
Para a posição do PTL que for dedicada aos volumes rejeitados, quando o volume for lido será acesso o led na cor rosa e para esta posição em especifico. O WCS não fara o controle de cubagem de pallet, sendo assim será de responsabilidade da operação tirar os volumes da posição e tratar individualmente cada um deles e induzi-los novamente.
