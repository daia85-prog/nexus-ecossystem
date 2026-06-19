# order-start.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo minerador -->

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Separação (SP)  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Teremos 2 (duas) linhas de separação de fracionados, linha de separação de produtos controlados e a linha de separação de produtos não controlados.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Separação Cristal MG  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Teremos 1 (uma) linha de separação de produtos.
Linha de separação (Frente e Posterior (costas))
1 (um) operador por estação
4 (quatro) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Posições frente e posteriores (costas) não terá leds, todas as informações sobre a separação serão mostradas na tela do PDV de cada estação.
Operador ao receber a caixa na estação, realiza a leitura da etiqueta do volume, com isso o PDV informará as posições/locais de separação para que o operador realize as separações nos locais indicados, ao realizar a separação a tela do PDV é atualizada, ao finalizar a separação, a tela do PDV informará ao operador que finalizou a separação daquela estação.
Para iniciar a separação dos itens na posição, operador deverá realizar a leitura da etiqueta de "produção" do produto solicitado, nessa etiqueta contém as informações do produto e lote, ao realizar a leitura dessa etiqueta de "produção" o sistema Velox válida a informação de Lote, se a informação do lote lido for compatível com a informação do lote solicitado, o sistema Velox então inicia o picking desse produto, operador deve realizar a leitura de todos os itens, item a item, por exemplo: caso no pedido, esteja solicitando a separação de 10 (dez) unidades do mesmo produto, o operador deverá fazer a leitura dos 10 (dez) itens para concluir a separação desse item.
Durante a separação, caso a quantidade solicitada de um lote termine, o operador terá que alterar o lote via sistema Velox, informando o novo lote que será separado daquele produto e iniciar a separação da quantidade restante do produto com o novo lote.
A troca de lote deverá ser autorizada por um usuário com o nível de usuário elevado específico, cadastrado para essa operação/autorização.
Essa etiqueta de "produção" estará disponivel na caixa do produto a ser separado na posição.
Na integração de confirmação, o sistema Velox deve informar os lotes que foram separados para o produto. No caso, quando o produto for separado em 2 (dois) lotes diferentes, Velox deverá informar a quantidade separada de cada lote.
Ao finalizar o picking dos itens da frente da estação, caso exista produtos a serem separados na área posterior (costas) do operador, a tela do PDV será atualizada informando o operador que existe itens pendentes separação na área posterior (costas), e informará na tela do PDV o local e a quantidade a ser separada.
O processo de bipagem da etiqueta de "produção" para validar o lote, se aplica para a separação na frente e área posterior (costas)
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
Descrição do processo operacional de separação:
Realizar a leitura do volume da caixa recebida;
Verificar o PDV quais posições e quantidades solicitando separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade solicitada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todas as posições de separação frente, caso tenha itens a serem separados na área posterior (costas), PDV será atualizado informando quais locais e quantidades;
Operador visualiza no PDV, o local e quantidade de produtos a serem separados na área posterior (costas);
Ao chegar na posição posterior (costas) que irá separar, realizar a leitura da etiqueta de "produção";
Operador deve checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade informada no PDV;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição informada pelo PDV e realiza o mesmo procedimento;
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade física de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas, caso necessário, e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Será disponibilizado um (1) Order Start no início da linha de separação, cuja finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Composição da Estação Order Start
A estação de Order Start será composta por:
Um computador com interface WCS
Uma impressora de etiquetas
Scanner para vínculo das caixas já etiquetadas
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
No processo de separação, existem dois cenários distintos quanto à identificação das caixas utilizadas. Para os pedidos que utilizam caixas plásticas reutilizáveis, não haverá necessidade de impressão de etiquetas no Order Start. Nesse caso, cada caixa plástica já possui uma etiqueta fixa com identificação única, cuja responsabilidade de manutenção e visibilidade é do cliente. Durante a indução no Order Start, o operador realiza a leitura dessa etiqueta fixa, e o sistema WCS realiza o vínculo entre o identificador da caixa e o pedido recebido. Esse vínculo permanece ativo ao longo de todo o processo de separação, garantindo a rastreabilidade do pedido associado àquela caixa.
Para os pedidos que não utilizam caixas padrão, como é o caso de itens de grande volume, geladeiras ou pedidos do tipo full case, será necessária a impressão de uma etiqueta virtual por volume. Essa etiqueta será gerada e impressa diretamente pelo WCS na estação de Order Start, sendo de responsabilidade do operador realizar a colagem da etiqueta no item ou volume correspondente durante a separação. A etiqueta conterá informações essenciais para a rastreabilidade, como identificador do pedido, código de barras. Dessa forma, o sistema garante que todos os volumes envolvidos no processo de separação estejam corretamente identificados e rastreáveis, independentemente do tipo de embalagem utilizada.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de separação, o WCS deverá disponibilizar uma tela específica de mapeamento de postos Flowrack. Essa funcionalidade permitirá o vínculo entre usuários (logins) e os postos de separação ativos na linha.
A tela apresentará os postos disponíveis e os usuários vinculados a cada um deles, com possibilidade de visualização em tempo real.
O vínculo poderá ser feito manualmente por um supervisor.
Por exigência da Fagron, um mesmo usuário poderá estar vinculado a múltiplos postos simultaneamente, ou seja, não haverá limitação de exclusividade por posto.
Nos demais pontos de separação fora do Flowrack (Picking Fundo), a rastreabilidade será realizada por meio do login utilizado no coletor ou PDV.
Cada operação realizada no coletor estará associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Antes de iniciar os pedidos, WCS deve validar se a quantidade de saldo nas posições é suficiente para atender os pedidos, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender o pedido, o mesmo não poderá ser iniciado e o WCS deverá seguir a operação de reabastecimento.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
No processo de separação, o ponto de Order Start em que o volume será iniciado depende da menor curva de giro presente no armazém. Isso significa que o WCS deve identificar, entre todos os endereços de picking do volume, qual pertence à curva de menor giro (por exemplo, picking fundou ou order start do flowrack), e a partir disso determinar o ponto inicial de separação.
Se o volume possuir itens que devem ser coletados no picking fundo, o início do processo deverá ocorrer no Order Start específico daquela área. Nessa etapa, o operador realizará a associação do pedido com a caixa plástica via coletor do cliente ou PDV (Picking Cart) e iniciará a coleta a partir da área de menor giro.
Somente após a separação na área de picking fundo, caso o volume possua itens destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do processo de separação no flowrack. Esse fluxo garante que todas as coletas nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de retrabalho ou retorno de caixas já em processo de automação.
Caso o volume inicie no order start do flowrack, o vínculo entre caixa e pedido será feito de maneira automática através do primeiro scanner da linha.
Esse critério visa otimizar o fluxo operacional, evitando que o operador tenha que retornar a áreas distantes depois de já ter passado por setores de maior giro, e garantindo que o trajeto da separação respeite uma lógica eficiente baseada na disposição física e na criticidade do picking.
Observação: A área de Marketing deixará de ser segregada dos demais processos, e será unificada com as tarefas de picking fundo, sendo realizada pelo PDV (Picking Cart).
Funcionalidades na Tela do Order Start:
Priorizar Pedidos: Na tela do Order Start, o operador terá acesso a recursos que facilitam a gestão e execução das separações. Será possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante agilidade na seleção e maior controle sobre o que deve ser iniciado no momento.
Além disso, a tela apresentará uma visualização prévia da previsão de volumes por pedido, permitindo que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico. Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela do Order Start será possível filtrar os pedidos por tipo de picking Flowrack, Picking Cart e Mobile Device. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Na tela do Order Start, será disponibilizada uma funcionalidade de visualização por tipo de separação, por exemplo: Geladeira, Polícia, Picking Fundo etc. permitindo ao operador ou supervisor filtrar os pedidos com base na categoria de cada volume. Cada tipo será representado com uma identificação visual clara, facilitando a leitura e tomada de decisão em tempo real.
Além do filtro, a tela apresentará de forma consolidada o total de volumes previstos por tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o planejamento da linha de separação e a atuação mais estratégica por parte da liderança operacional.
Funcionalidades na Tela de Pedidos
Adicionar Coluna de Status e Quantidade: Na tela de pedidos deverá conter uma coluna adicional para status e quantidade, permitindo que o operador visualize rapidamente o estado e o número de itens de cada pedido.
Filtro ou (Checkbox) para Mostrar Somente Pedidos em Aberto: Será implementado na tela de pedidos do Order Start um filtro do tipo checkbox com o rótulo "Mostrar apenas pedidos em aberto". Quando esse filtro estiver ativo, a interface exibirá exclusivamente os pedidos que ainda não foram finalizados, ou seja, aqueles com status como "pendente", "em processamento", "não iniciado" ou outros que se enquadrem na definição operacional de pedido "em aberto".
Essa funcionalidade tem como objetivo facilitar a visualização e seleção de pedidos ainda ativos, otimizando o trabalho do operador e evitando a indução acidental de volumes já finalizados. O filtro poderá ser ativado ou desativado a qualquer momento, proporcionando flexibilidade na consulta conforme a necessidade do usuário.
Categoria para Agrupar Pedidos: Na tela de pedidos, o usuário poderá agrupar os pedidos com base em diferentes categorias disponíveis no sistema. As opções de agrupamento incluirão critérios como Status do Pedido, Tipo de Cliente, Tipo de Picking e filtros personalizados relevantes à operação, como Estado (UF), ou transportadora.
Ao selecionar uma dessas categorias, o sistema automaticamente agrupará e exibirá os pedidos organizados conforme o filtro escolhido, permitindo ao operador ou supervisor ter uma visão consolidada e contextualizada da carga de trabalho.
Esse recurso facilitará:
A priorização por região ou transportadora.
O direcionamento estratégico de volumes conforme recursos disponíveis.
A análise rápida de concentração de pedidos em determinado perfil operacional.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Layout de etiqueta order start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Dimensões da etiqueta será de ALTURA 5 X 10 LARGURA

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Opções de cancelamento que teremos no WCS:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start: Caso o pedido seja cancelado após o início do Order Start, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito antes conferência.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.
Gerenciamento de produtos coletados:
Pedidos Não Iniciados: Caso o pedido esteja com status “não iniciado”, ele poderá ser cancelado diretamente e não teremos ação nos produtos referentes a este pedido.
Pedidos com Coletas Parciais: Se o pedido já tiver itens coletados, esses produtos serão direcionados automaticamente para a localização "ANÁLISE", impedindo novas coletas. Assim, o restante dos itens do pedido será automaticamente desconsiderado para coleta, evitando inconsistências no processo.
O WCS deverá disponibilizar uma tela específica para o processo de devolução de itens que estejam com status e localização marcados como “Em Análise”. Essa funcionalidade terá como objetivo permitir o retorno seguro e controlado desses produtos ao estoque, garantindo rastreabilidade e conformidade com as regras operacionais já estabelecidas.
Durante esse processo, o operador deverá realizar a leitura do código do item a ser devolvido. A partir dessa leitura, o sistema WCS deverá identificar o item e, com base nas regras previamente definidas (como tipo de produto, lote, curva de giro, ou canal de separação), informar automaticamente o local de devolução apropriado.
Essa tela deverá seguir a mesma lógica de segurança e validação utilizada nos demais fluxos de separação, garantindo que a devolução ocorra de forma padronizada, auditável e sem riscos de quebra de acuracidade no estoque.
Tela de gerenciamento: Uma tela será disponibilizada para gerenciar os produtos dos pedidos cancelados, permitindo a organização por zonas, volumes e status.
Observação: Para os casos de separação via picking cart
(PDV) e coletor deve exibir um pop-up com a informação que o pedido está cancelado.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Order Start Fracionado  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos previstos, incluindo os dados de cubagem e quantidade de cada item. 	O WCS identifica os pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In, First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados, a ordenação inicial será agrupada por Remessa. Com base nas informações recebidas, o WCS realiza o cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada missão (pedido). O sistema calcula quantos volumes serão necessários para cada missão.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start, onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada missão com base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o processo de separação do pedido.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será disponibilizado um (1) Order Start no início da linha de separação de cada nível, cuja finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Os volumes (pega) a serem transportados na esteira, serão caixas plásticas com etiqueta fixa, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de separação será necessário realizar login e acessar a tela de order start.
Cada operação realizada estará associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item 3.3 Trabalhos – Work  acima.
Antes de iniciar os pedidos, o WCS deve validar se a quantidade de saldo nas posições é suficiente para atender as tarefas, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender as tarefas, a mesma não poderá ser iniciada e o WCS deverá seguir com o reabastecimento via transfer.
O WCS exibirá um alerta na tela de Order Start quando identificar que as posições de picking disponíveis não são suficientes para atender todas as tarefas de ressuprimento geradas. Nesse caso a operação deverá realizar uma movimentação forçada de estoque liberando uma posição para esse ressuprimento pendente.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, o WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
No processo de separação, o ponto de Order Start em que o volume (pega) será iniciado depende da menor curva de giro presente no armazém. Isso significa que o WCS deve identificar, entre todos os endereços de picking do volume (pega), qual pertence à curva de menor giro (por exemplo, museu ou Order Start do FlowRack), e a partir disso determinar o ponto inicial de separação.
Se o volume (pega) possuir itens que devem ser coletados no museu, o início do processo deverá ocorrer no Order Start específico daquela área (Picking cart). Nessa etapa, o operador realizará a associação do volume (pega) com a caixa plástica via PDV (Picking Cart) e iniciará a coleta a partir da área de menor giro.
Somente após a separação na área do museu, caso o volume (pega) possua itens destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do processo de separação no FlowRack. Esse fluxo garante que todas as coletas nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de retrabalho ou retorno de caixas já em processo de automação.
O WCS disponibiliza uma tela de Order Start que serve para visualizar os próximos volumes (Pega) que serão vinculados de acordo com a ordem de prioridade enviada na integração.
Priorizar Pedidos: Na tela de “Tarefas”, o operador terá acesso a recursos onde Será possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante agilidade na seleção e maior controle sobre o que deve ser iniciado no momento. Além disso, a tela apresentará uma visualização prévia da previsão de volumes (pega) por pedido, permitindo que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico. Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela “Resumo Pega” será possível filtrar os pedidos por tipo de picking FlowRack, Picking Cart, Full Case, exceção, Brinde. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Além do filtro, a tela apresentará de forma consolidada o total de volumes (pega) previstos por tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o planejamento da linha de separação e a atuação mais estratégica por parte da liderança operacional.
Hardware Order Start: 
O WCS oferecerá suporte em desktops e Tablets/PDV para as telas de Order Start no picking fracionado, garantindo uma visualização mais ampla e eficiente do processo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Order Start Brindes  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O Order Start dos Brindes será utilizado quando o produto tiver no cadastro o campo “tipo” = “Brinde”.
Fluxo Operacional:
O operador acessa o Order Start Brindes, onde são exibidos apenas os volumes que tem coleta nesse setor.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido e direciona o coletor para a tela de coleta fracionada.
Após o término, o volume estará pronto para realizar a leitura da caixa plástica no packing.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Nível 3  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O Order Start no 3º Nível será utilizado quando a coleta do item iniciar neste nível, podendo ou não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas os volumes que iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Nível 2  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no 2º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Nível 1  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no 1º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Order Start Fracionado Térreo  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis 1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo (desktop ou PDV/Tablet), onde são exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2 ou 3.(Somente par consulta)
Será exibido o total de caixas necessárias para finalizar os pedidos integrados.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido automaticamente.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será disponibilizado um (1) Order Start no início da linha de separação de cada nível, cuja finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Os volumes (pega) a serem transportados na esteira, serão caixas plásticas com etiqueta fixa, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de separação será necessário realizar login e acessar a tela de order start.
Cada operação realizada estará associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item 3.3 Trabalhos – Work  acima.
Antes de iniciar os pedidos, o WCS deve validar se a quantidade de saldo nas posições é suficiente para atender as tarefas, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender as tarefas, a mesma não poderá ser iniciada e o WCS deverá seguir com o reabastecimento via transfer.
O WCS exibirá um alerta na tela de Order Start quando identificar que as posições de picking disponíveis não são suficientes para atender todas as tarefas de ressuprimento geradas. Nesse caso a operação deverá realizar uma movimentação forçada de estoque liberando uma posição para esse ressuprimento pendente.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, o WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
No processo de separação, o ponto de Order Start em que o volume (pega) será iniciado depende da menor curva de giro presente no armazém. Isso significa que o WCS deve identificar, entre todos os endereços de picking do volume (pega), qual pertence à curva de menor giro (por exemplo, museu ou Order Start do FlowRack), e a partir disso determinar o ponto inicial de separação.
Se o volume (pega) possuir itens que devem ser coletados no museu, o início do processo deverá ocorrer no Order Start específico daquela área (Picking cart). Nessa etapa, o operador realizará a associação do volume (pega) com a caixa plástica via PDV (Picking Cart) e iniciará a coleta a partir da área de menor giro.
Somente após a separação na área do museu, caso o volume (pega) possua itens destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do processo de separação no FlowRack. Esse fluxo garante que todas as coletas nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de retrabalho ou retorno de caixas já em processo de automação.
O WCS disponibiliza uma tela de Order Start que serve para visualizar os próximos volumes (Pega) que serão vinculados de acordo com a ordem de prioridade enviada na integração.
Priorizar Pedidos: Na tela de “Tarefas”, o operador terá acesso a recursos onde Será possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante agilidade na seleção e maior controle sobre o que deve ser iniciado no momento. Além disso, a tela apresentará uma visualização prévia da previsão de volumes (pega) por pedido, permitindo que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico. Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela “Resumo Pega” será possível filtrar os pedidos por tipo de picking FlowRack, Picking Cart, Full Case, exceção, Brinde. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Além do filtro, a tela apresentará de forma consolidada o total de volumes (pega) previstos por tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o planejamento da linha de separação e a atuação mais estratégica por parte da liderança operacional.
Hardware Order Start: 
O WCS oferecerá suporte em desktops e Tablets/PDV para as telas de Order Start no picking fracionado, garantindo uma visualização mais ampla e eficiente do processo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Order Start Brindes  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O Order Start dos Brindes será utilizado quando o produto tiver no cadastro o campo “tipo” = “Brinde”.
Fluxo Operacional:
O operador acessa o Order Start Brindes, onde são exibidos apenas os volumes que tem coleta nesse setor.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido e direciona o coletor para a tela de coleta fracionada.
Após o término, o volume estará pronto para realizar a leitura da caixa plástica no packing.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Nível 3  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O Order Start no 3º Nível será utilizado quando a coleta do item iniciar neste nível, podendo ou não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas os volumes que iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Nível 2  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no 2º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Nível 1  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no 1º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Order Start Fracionado Térreo  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis 1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo (desktop ou PDV/Tablet), onde são exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2 ou 3.(Somente par consulta)
Será exibido o total de caixas necessárias para finalizar os pedidos integrados.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido automaticamente.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será disponibilizado um (1) Order Start no início da linha de separação de cada nível, cuja finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Os volumes (pega) a serem transportados na esteira, serão caixas plásticas com etiqueta fixa, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de separação será necessário realizar login e acessar a tela de order start.
Cada operação realizada estará associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item 3.3 Trabalhos – Work  acima.
Antes de iniciar os pedidos, o WCS deve validar se a quantidade de saldo nas posições é suficiente para atender as tarefas, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender as tarefas, a mesma não poderá ser iniciada e o WCS deverá seguir com o reabastecimento via transfer.
O WCS exibirá um alerta na tela de Order Start quando identificar que as posições de picking disponíveis não são suficientes para atender todas as tarefas de ressuprimento geradas. Nesse caso a operação deverá realizar uma movimentação forçada de estoque liberando uma posição para esse ressuprimento pendente.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, o WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
No processo de separação, o ponto de Order Start em que o volume (pega) será iniciado depende da menor curva de giro presente no armazém. Isso significa que o WCS deve identificar, entre todos os endereços de picking do volume (pega), qual pertence à curva de menor giro (por exemplo, museu ou Order Start do FlowRack), e a partir disso determinar o ponto inicial de separação.
Se o volume (pega) possuir itens que devem ser coletados no museu, o início do processo deverá ocorrer no Order Start específico daquela área (Picking cart). Nessa etapa, o operador realizará a associação do volume (pega) com a caixa plástica via PDV (Picking Cart) e iniciará a coleta a partir da área de menor giro.
Somente após a separação na área do museu, caso o volume (pega) possua itens destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do processo de separação no FlowRack. Esse fluxo garante que todas as coletas nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de retrabalho ou retorno de caixas já em processo de automação.
O WCS disponibiliza uma tela de Order Start que serve para visualizar os próximos volumes (Pega) que serão vinculados de acordo com a ordem de prioridade enviada na integração.
Critério de priorização: (1) ordem de liberação dos romaneios pela operação (FIFO de início); (2) quando não houver posição de PTL disponível para os próximos romaneios da fila, o sistema considera a data/hora de corte como critério de desempate; (3) FIFO como desempate final.
Priorizar Pedidos: Na tela de “Tarefas”, o operador terá acesso a recursos onde Será possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante agilidade na seleção e maior controle sobre o que deve ser iniciado no momento. Além disso, a tela apresentará uma visualização prévia da previsão de volumes (pega) por pedido, permitindo que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico. Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela “Resumo Pega” será possível filtrar os pedidos por tipo de picking FlowRack, Picking Cart, Full Case, exceção, Brinde. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Além do filtro, a tela apresentará de forma consolidada o total de volumes (pega) previstos por tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o planejamento da linha de separação e a atuação mais estratégica por parte da liderança operacional.
Hardware Order Start: 
O WCS oferecerá suporte em desktops e Tablets/PDV para as telas de Order Start no picking fracionado, garantindo uma visualização mais ampla e eficiente do processo.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Order Start Brindes  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O Order Start dos Brindes será utilizado quando o produto tiver no cadastro o campo “tipo” = “Brinde”.
Fluxo Operacional:
O operador acessa o Order Start Brindes, onde são exibidos apenas os volumes que tem coleta nesse setor.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido e direciona o coletor para a tela de coleta fracionada.
Após o término, o volume estará pronto para realizar a leitura da caixa plástica no packing.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Nível 3  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O Order Start no 3º Nível será utilizado quando a coleta do item iniciar neste nível, podendo ou não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas os volumes que iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Nível 2  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no 2º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Nível 1  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no 1º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Order Start Fracionado Térreo  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis 1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo (desktop ou PDV/Tablet), onde são exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2 ou 3.(Somente par consulta)
Será exibido o total de caixas necessárias para finalizar os pedidos integrados.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido automaticamente.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [I25.3515] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA.docx`  
**Heading:** Order Start A  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Após o login, o operador acessa a tela de Order Start, onde são centralizadas as operações de início da separação.
Fluxo:
1. Seleção de Tarefa
O operador seleciona o tipo de separação: Full Case, Pallet Sorter ou Pendências.
Define a rua de trabalho (quando aplicável) e, dependendo da lógica de impressão ativa (ver item 3), poderá selecionar a Faixa da Matriz de Fragilidade.
2. Peso Mínimo para Liberação
A liberação das tarefas respeita o parâmetro de peso mínimo configurado, garantindo que apenas volumes que atinjam ou superem esse limite sejam liberados, considerando também a disponibilidade de PTLs.
3. Impressão de Etiquetas e Lógica de Fragilidade
As impressoras estão alocadas em ponto centralizado, próximo ao setor de indução.
A impressão é obrigatória para liberação das tarefas.
Ordenação por Matriz de Fragilidade: Para evitar avarias, a impressão das etiquetas deve respeitar obrigatoriamente a ordem de empilhamento: dos itens mais pesados (Base) para os mais leves (Topo).
O sistema operará conforme uma das três lógicas de ordenação abaixo (a ser definida pela equipe de desenvolvimento):
Opção 1 (Fluxo Guiado/Implícito):
Posto de Impressão.
Rua: O sistema exibe na lista apenas as ruas que possuem a camada da matriz atualmente liberada (Ex: Mostra apenas "Rua 10 - Base"). As camadas superiores (Meio/Topo) ficam ocultas até que a inferior seja impressa.
Imprime.
Opção 2 (Seleção com Bloqueio):
Posto de Impressão.
Matriz: O operador seleciona a matriz que deseja imprimir (Ex: Botão "Topo").
Rua: O operador seleciona a rua.
Bloqueio: O sistema não permite imprimir uma rua/matriz (Ex: Topo) caso ainda existam itens de uma matriz inferior (Ex: Base) pendentes de impressão para aquela mesma rua.
Imprime.
Opção 3 (Múltipla Seleção com Separadores):
Posto de Impressão.
Matriz: O operador pode selecionar mais de uma matriz (Ex: Base + Meio).
Rua: O operador pode selecionar mais de uma rua.
Impressão Ordenada: O sistema gera as etiquetas ordenadas primeiramente por Rua (Endereçamento) e internamente por Matriz (Base $\to$ Topo).
Separadores: Serão impressas etiquetas de identificação (cabeçalhos) entre cada mudança de rua ou matriz para segregação física visual.
4. Controle de Reimpressão
A reimpressão de etiquetas é restrita a supervisores ou líderes e registrada em log, com dados do solicitante, autorizador, data e hora, garantindo rastreabilidade e evitando impressões indevidas.
5. Lista de Tarefas
A lista exibida no Order Start é composta apenas por volumes que podem ser imediatamente alocados no PTL.
6. Order Start de Pendências
Pendências são tratadas em Order Start específico, liberado somente após aprovação do WMS.
As etiquetas de pendência são geradas apenas para volumes autorizados, mantendo rastreabilidade.

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de fracionados, sendo o ponto de partida para a indução das caixas no sistema.
Para iniciar o processo, o WCS deverá receber via integração todas as informações dos pedidos a serem processados, incluindo ondas, volumes, tipos de caixas e informações de cubagem. O sistema permite que até 16 clientes sejam operados simultaneamente, organizando os pedidos em fila conforme a ordem de chegada das integrações.
Observação: Deverão ser integrados apenas os pedidos de clientes ativos na saída do sorter. Pedidos fora desse critério serão direcionados para rejeito.
A operação no sorter deve ser feita por ondas, sendo necessário finalizar toda a onda de clientes para iniciar a próxima.
Não existe regra de prioridade automatizada para os pedidos recebidos. Caso seja necessário priorizar um pedido específico, o operador deverá fazê-lo manualmente na tela do Order Start.
O operador terá disponível fisicamente um buffer de caixas montadas próximo ao Order Start. O WCS disponibiliza ao operador a lista de caixas necessárias, o operador realiza a impressão das etiquetas, fixa cada uma na caixa correspondente e induz as caixas na linha de separação. A caixa informada pelo WCS será a embalagem final utilizada em todos os processos da esteira até a entrega ao cliente, não havendo necessidade de reembalagem no setor de packing.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Order Start Fracionado  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos previstos, incluindo os dados de cubagem e quantidade de cada item. 	O WCS identifica os pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In, First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados, a ordenação inicial será agrupada por Remessa. Com base nas informações recebidas, o WCS realiza o cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada missão (pedido). O sistema calcula quantos volumes serão necessários para cada missão.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start, onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada missão com base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o processo de separação do pedido.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As regras de cancelamento descritas neste capítulo seguem o mesmo comportamento já em produção no projeto BETA SP, salvo as adaptações específicas documentadas a seguir.
Opções de cancelamento que teremos no WCS:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start: Caso o pedido seja cancelado após o início do Order Start, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito antes conferência.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.
Gerenciamento de produtos coletados:
Pedidos Não Iniciados: Caso o pedido esteja com status “não iniciado”, ele poderá ser cancelado diretamente e não teremos ação nos produtos referentes a este pedido.
Pedidos com Coletas Parciais: Se o pedido já tiver itens coletados, esses produtos serão direcionados automaticamente para a localização "ANÁLISE", impedindo novas coletas. Assim, o restante dos itens do pedido será automaticamente desconsiderado para coleta, evitando inconsistências no processo.
O WCS deverá disponibilizar uma tela específica para o processo de devolução de itens que estejam com status e localização marcados como “Em Análise”. Essa funcionalidade terá como objetivo permitir o retorno seguro e controlado desses produtos ao estoque, garantindo rastreabilidade e conformidade com as regras operacionais já estabelecidas.
Durante esse processo, o operador deverá realizar a leitura do código do item a ser devolvido. A partir dessa leitura, o sistema WCS deverá identificar o item e, com base nas regras previamente definidas (como tipo de produto, lote, curva de giro, ou canal de separação), informar automaticamente o local de devolução apropriado.
Essa tela deverá seguir a mesma lógica de segurança e validação utilizada nos demais fluxos de separação, garantindo que a devolução ocorra de forma padronizada, auditável e sem riscos de quebra de acuracidade no estoque.
Tela de gerenciamento: Uma tela será disponibilizada para gerenciar os produtos dos pedidos cancelados, permitindo a organização por zonas, volumes e status.
Observação: Para os casos de separação via picking cart
(PDV) e coletor deve exibir um pop-up com a informação que o pedido está cancelado.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

El proceso de inicio de pedido se realizará de forma independiente para cada estación. Cada estación de inicio de pedido contará con un PDV y una impresora proporcionados por el cliente, así como un escáner proporcionado por Invent, además de su propia pantalla exclusiva de inicio de pedido, que estará separada por estación.
Para iniciar el proceso, el sistema WCS debe recibir toda la información del pedido para la operación mediante la integración, tal como se describe en el punto Integración de la misión. El operario deberá indicar en qué estación de trabajo trabajará.
A través de esta pantalla, el operario deberá seleccionar el número de etiquetas que desea imprimir para el pedido. Esta selección será obligatoria para iniciar el proceso. Las etiquetas serán generadas por WCS y corresponderán a los volúmenes de picking del pedido, garantizando la identificación individual de cada volumen.
Tras la impresión, el operario deberá retirar las etiquetas de la estación para comenzar el picking. La liberación de los pedidos debe respetar el orden FIFO (primero en entrar, primero en salir); WCS debe generar un volumen por estación, incluso si los artículos del pedido caben en una sola caja, de modo que una caja nunca pase por dos estaciones diferentes.
En la estación de preparación de pedidos, se leerá la etiqueta y el sistema WCS reconocerá el artículo, continuando el flujo operativo de acuerdo con las reglas definidas para la etapa de preparación.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O processo de Order Start será realizado por posto separadamente. Cada posto de Order Start contará com PDV e impressora fornecida pelo cliente além de um scanner fornecido pela Invent, além de possuir sua própria tela exclusiva de Order Start que será segregada por postos.
Para iniciar o processo, o sistema WCS deve receber todas as informações do pedido para a operação por meio da integração, conforme descrito na seção Integração da Missão. O operador deve indicar em qual estação de trabalho estará operando.
Por meio dessa tela, o operador deverá selecionar a quantidade de etiquetas que deseja imprimir para o pedido. Essa seleção será obrigatória para o início do processo. As etiquetas serão geradas pelo WCS e corresponderão aos volumes de separação do pedido, garantindo a identificação individual de cada volume.
Após a impressão, as etiquetas deverão ser retiradas pelo operador do posto para início da coleta. A liberação dos pedidos deverá respeitar a ordem FIFO (First In, First Out), o WCS deverá gerar um volume por posto mesmo que os itens do pedido caibam em uma única caixa, dessa forma uma caixa nunca passará em dois postos diferentes.
No posto de picking, a etiqueta será lida e o volume será reconhecido pelo sistema WCS, dando continuidade ao fluxo operacional conforme as regras definidas para a etapa de picking.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O processo de Order Start é o ponto de partida físico da automação. É nesta etapa que o WCS transforma o planejamento lógico (Onda de Pedidos) em Volumes Físicos rastreáveis, garantindo que cada caixa saiba exatamente por quais zonas de picking deve passar.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Priorização  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Por padrão, todos os pedidos integrados pelo WMS Spark entram na fila do Order Start com a mesma prioridade, sendo processados por ordem de chegada (FIFO). O WCS não aplica diferenciação automática de prioridade entre os pedidos integrados.
Quando necessário, o supervisor pode aplicar uma priorização manual diretamente no Velox, reordenando a fila de indução conforme um dos critérios abaixo:
Transportadora: prioriza os pedidos de uma transportadora específica.
Pedido: prioriza um ou mais pedidos individuais.
Onda: prioriza os pedidos de uma onda específica.
Horário de corte: prioriza os pedidos com horário de corte (cut-off) mais próximo.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Encerramento de onda  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Este cenário representa um estado crítico da operação, sendo aplicável apenas para onda com status “EM ANDAMENTO”, onde já existem atividade em execução, como coletas em andamento e volumes em diferentes estágios no sorter.
Ao executar o encerramento da onda, o WCS deve executar as seguintes tratativas:
Todas as coletas em execução nos postos devem ser imediatamente interrompidas, os LEDs ativos devem ser apagados.
Todos os volumes ainda pertencentes a lista de coleta devem ter seu status atualizado para “ENCERRADO”, independentemente de já terem sido iniciados ou não.
Após o encerramento da coleta, o WCS deve tratar os volumes que já foram enviados para o sorter:
Deve ser iniciado um job com duração de 5 minutos, responsável por aguardar o desvio dos volumes ainda em trânsito no sorter.
Durante esse período os volumes que forem corretamente identificados e desviados para suas respectivas docas devem ter seu status atualizado para “NARAMPA”. Esses volumes devem ser considerados como atendidos e enviado na interação ao SAP, volumes que não desviaram durante o tempo do job mudaram seu status para “ENCERRADO”.
Ao final desse processo o WCS deve enviar ao SAP um IDOC (TPSDLS - ZSDDAREM) de todos os volumes das remessas que ainda não foram enviados, contendo a quantidade atendida no campo <QUANT> independentemente do volume processado, podendo inclusive ser igual a zero, garantindo que a operação identifique os volumes que foram enviados de forma parcial com a tag <ZSEP_PARCIAL> com a informação “X”.
Dessa forma, o SAP será responsável por interpretar a quantidade informada e realizar as tratativas necessárias para os itens não atendidos, como cancelamento de faturamento, reprocessamento ou retorno ao estoque.
Estrutura do IDOC de Encerramento de Onda
Velox > SAP
Utilização dos dados (Velox):

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Order Start Fracionado  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos previstos, incluindo os dados de cubagem e quantidade de cada item. O WCS identifica os pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In, First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados. Com base nas informações recebidas, o WCS realiza o cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada tarefa (pedido). O sistema calcula quantos volumes serão necessários para cada tarefa.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start, onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada tarefa com base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o processo de separação do pedido.

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivos Projeto Andreani - Multiplos Aditivos.docx`  
**Heading:** Tela Order Start Multiline  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Foi solicitado um aprimoramento na tela de Order Start Multiline. Abaixo do OS linha, o cliente deseja visualizar também a quantidade de caixas que devem ser induzidas na fila. Essa informação adicional tem como objetivo melhorar o controle operacional, facilitar a tomada de decisão e garantir que o operador sempre saiba o volume exato a ser direcionado para o processo.
Detalhamento técnico:
Exibição da quantidade: A interface será ajustada para apresentar, logo abaixo da identificação de OS linha, o número total de caixas previstas para indução.
Suporte ao planejamento: Com essa informação visível, o operador consegue ajustar ritmo, prever gargalos e manter o fluxo contínuo da linha.
Apoio à rastreabilidade: A exibição da quantidade planejada reforça o acompanhamento do processo e reduz erros de indução.
Tela Oder Start Multiline atual Velox:

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Sequência de liberação de caixas no Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS calculará, para cada Order Start, o total de caixas necessárias para atender todos os volumes da tarefa, determinando também a ordem de liberação das caixas por loja.
Liberação sequencial por loja: As caixas de cada loja deverão ser liberadas pelo operador exatamente na sequência e nas quantidades calculadas pelo WCS. O operador deverá bipar as caixas respeitando os tipos e quantidades definidos, por exemplo, uma loja que exija 4 caixas CP e 2 caixas M (papelão) deverá ter todas as caixas bipadas nessa composição.
Validação de tipo de caixa na bipagem: O WCS validará o tipo de cada caixa bipada em tempo real. Caso o operador bipe uma caixa de tipo diferente do esperado para aquela posição na sequência, o sistema não realizará a liberação e exibirá um alerta ao operador indicando o tipo de caixa correto a ser utilizado.
Validação da etiqueta na bipagem: além da validação de tipo, o Velox não aceitará a bipagem da etiqueta quando identificar:
Tamanho não cadastrado: o tamanho lido na etiqueta não corresponde a nenhum tamanho cadastrado no sistema.
Peso zerado: a etiqueta não contém tara válida (peso igual a zero).
Nesses casos, o sistema exibe a mensagem de erro da caixa e bloqueia a liberação até que uma etiqueta válida seja bipada.
Indisponibilidade de caixa: Caso o operador não possua mais caixas do tipo solicitado pelo sistema, deverá acionar o fluxo de recubagem descrito na seção [4.4. Recubagem por Indisponibilidade de Caixa], onde será possível recalcular a distribuição dos volumes com os tipos de caixa disponíveis.
Exemplo de Alerta:

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Configuração de Tara de Caixas no Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O processo de configuração de tara de caixas no Order Start permitirá que o operador informe ao WCS o peso da caixa de papelão que será utilizada durante a separação dos pedidos.
Essa funcionalidade será utilizada para garantir maior precisão nos controles de peso operacional, considerando o peso próprio da embalagem utilizada no processo de coleta.
Fluxo Operacional de Configuração de Tara:
• O operador realizará o login no WCS.
• Na tela de Order Start, o operador poderá selecionar a opção de operação utilizando caixas de papelão.
• Após selecionar essa opção, o sistema apresentará os modelos de caixas disponíveis para utilização no processo.
• Os tamanhos de caixas disponíveis serão:P, M, G e X.
• O operador deverá selecionar o tamanho da caixa que será utilizado na operação.
• Após selecionar o modelo da caixa, o operador deverá informar manualmente o peso da tara da embalagem.
• O peso informado deverá corresponder ao peso real da caixa vazia, previamente validado em balança disponibilizada pelo cliente.
• O WCS utilizará o peso informado como tara padrão durante a execução da tarefa operacional.
Validações Operacionais:
• O sistema poderá validar limites mínimos e máximos de peso permitidos para preenchimento da tara.
• A tara informada ficará associada à sessão operacional iniciada pelo operador.
• Caso necessário, o operador poderá realizar uma nova configuração de tara antes do início de uma nova tarefa.
• Todas as informações de tara registradas no processo permanecerão armazenadas no WCS para fins de rastreabilidade operacional.
O processo de configuração de tara no Order Start garante maior precisão nas validações de peso da operação, reduzindo divergências relacionadas ao peso das embalagens utilizadas durante a separação dos pedidos.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Contexto / Situação atual  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Hoje a separação Fullcase está distribuída em treze Order Start individuais (Fullcase 01 a 13), além do Order Start Fracionado, conforme tela atual de regras.
Como não há recurso dedicado para cada Order Start, os operadores precisam acessar um a um, o que gera atraso na separação completa dos pedidos, agravado pelo fato de os pedidos possuírem volumes em todas as ruas.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Justificativa  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A fragmentação atual obriga o recurso a transitar entre múltiplos Order Start para concluir um mesmo pedido, aumentando o tempo total de fechamento do pallet. A consolidação reduz esse trânsito entre filas de tarefas e tende a melhorar de forma relevante o tempo de fechamento dos pedidos/pallets.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Escopo da melhoria  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Estão contempladas neste aditivo duas alterações, descritas abaixo. As demais regras (Fullcase 01 a 06 e Order Start Fracionado) permanecem inalteradas.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Premissas e considerações  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A melhoria depende da entrada em produção da alocação em pallets por pedido no Velox.
Fullcase 01 a 06, bem como o Order Start Fracionado, não fazem parte deste escopo e seguem com a configuração atual.
Os Order Start consolidados devem preservar a rastreabilidade e o comportamento funcional já validados (sem regra de transportadora no Fullcase; agrupamento por rampa no Exceção).

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Benefícios esperados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Redução do tempo de fechamento dos pallets / separação completa dos pedidos.
Eliminação do trânsito do recurso entre múltiplos Order Start para concluir um mesmo pedido.
Melhor aproveitamento dos recursos disponíveis, dado que não há recurso dedicado por Order Start.
Tela atual do Velox:

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Problema Atual  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No fluxo atual de Order Start Full Case, quando o operador acessa a tela de “OS fragilidade” seleciona uma rua para impressão, o WCS gera a fila de etiquetas agrupada por missão. Isso significa que, se uma missão possui 20 volumes destinados à Rampa 1, todas as 20 etiquetas são impressas em sequência antes que qualquer etiqueta de outra missão (destinada a outra rampa) seja gerada.
O resultado operacional é que o operador coleta e etiqueta um grande lote de volumes para a mesma rampa. Quando esses volumes chegam ao sorter, eles são todos desviados para a mesma saída, causando acúmulo excessivo em uma única rampa enquanto as demais rampas permanecem ociosas. Isso gera gargalos na expedição e reduz a produtividade geral da operação.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Copia.docx`  
**Heading:** Regras de Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Validação de Continuidade: O sistema deve validar no momento do cadastro se existem "lacunas" entre os ranges. O Peso Final de uma faixa deve ser igual ao Peso Inicial da faixa seguinte.
Por obrigatoriedade o sistema deve exigir que exista ao menos um range de peso cadastrado, caso tenha apenas um range o modo “default” deve ser que sempre se inicie com o peso inicial = 0 e finalize em peso final = 999,999, caso existam dois ou mais ranges cadastrados, a soma deles deve cobrir integralmente o intervalo de 0 a 999,999, para assim evitar que haja alguma lacuna na matriz de fragilidade.
Obs: Nosso sistema não integra valores inválidos (null), pois a soma das matrizes não funciona se um dos campos for nulo, o que causaria um problema na regra de conferir essas matrizes através da soma.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Copia.docx`  
**Heading:** Alteração no Processo Operacional: Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para garantir que o operador físico respeite a montagem do pallet, a tela de Order Start (Full Case) terá sua lógica de impressão alterada. O sistema deverá implementar as seguintes lógicas de ordenação:
Opção 01: Fluxo Guiado (Visão Restrita): Nesta modalidade, o operador não vê o que não pode separar.
Seleção: Operador escolhe o Posto de Impressão.
Filtro Automático: O grid de "Ruas" exibe na coluna de status apenas a camada da matriz atualmente liberada.
Exemplo: Se a Rua 10 tem itens de "Base" e "Topo" pendentes, o sistema exibe apenas: Rua 10 - Aguardando BASE.
Liberação Sequencial: Somente após a impressão de todas as etiquetas de "Base" daquela rua, o sistema libera a visualização da linha Rua 10 - Aguardando MEIO, e assim sucessivamente.
Opção 02: Seleção com Bloqueio de Dependência: Nesta modalidade, o operador tem visão do todo, mas é impedido de cometer erros.
Filtros: Operador seleciona Posto de Impressão e clica no botão da Matriz desejada (Ex: Botão "Topo").
Bloqueio Ativo: Ao tentar selecionar uma Rua para imprimir o "Topo", o sistema verifica no banco de dados se existem itens de prioridade inferior (Base/Meio) pendentes.
Ação: Se houver pendência, o sistema exibe popup: "BLOQUEADO: Realize a impressão dos itens de BASE antes de avançar para o TOPO nesta rua."
Opção 03: Múltipla Seleção com Separadores Físicos: Nesta modalidade, permite-se agilidade na seleção em massa, com organização na saída.
Seleção: Operador utiliza checkbox para selecionar múltiplas Matrizes (Ex: Base + Meio) e múltiplas Ruas de uma vez.
Ordenação da Fila: O WCS processa a fila de impressão organizando obrigatoriamente nesta hierarquia:
1º: Agrupamento por Rua (Caminho de picking).
2º: Ordenação interna por Prioridade (Crescente: 1, 2, 3...).
Etiqueta Separadora: O sistema deve imprimir automaticamente uma etiqueta de cabeçalho (layout distinto/invertido) a cada troca de grupo, contendo o texto: "INÍCIO RUA X - FAIXA: BASE", para que o operador saiba visualmente onde termina uma categoria e começa outra na bobina.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Regras de Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Validação de Continuidade: O sistema deve validar no momento do cadastro se existem "lacunas" entre os ranges. O Peso Final de uma faixa deve ser igual ao Peso Inicial da faixa seguinte.
Regra de Consistência de Cadastros (Anti-Gaps): Para garantir a robustez do sistema e evitar que produtos fiquem "sem categoria", o sistema aplicará as seguintes validações no cadastro de faixas:
É obrigatório existir ao menos um range cadastrado.
Se houver apenas um range, ele deve cobrir de 0,000 a 999.999,999.
A soma dos ranges deve cobrir integralmente o intervalo de peso, não permitindo "buracos" (lacunas) entre o peso final de uma faixa e o peso inicial da próxima. O sistema alertará o usuário caso tente salvar uma configuração com lacunas.
Obs: Nosso sistema não integra valores inválidos (null), pois a soma das matrizes não funciona se um dos campos for nulo, o que causaria um problema na regra de conferir essas matrizes através da soma.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Alteração no Processo Operacional: Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O processo de impressão e liberação de ondas será alterado para respeitar a hierarquia de peso (Base, Meio, Topo) de forma visual e automatizada, reduzindo a necessidade de múltiplas interações manuais do operador.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Filtros e Seleção Inicial  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O operador acessará a tela do Order Start.
Filtro de Ruas (Range): O operador poderá informar um intervalo de ruas para trabalho (Ex: Rua 01 até Rua 10), sem a necessidade de selecionar rua a rua individualmente.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA.docx`  
**Heading:** Regras de Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Validação de Continuidade: O sistema deve validar no momento do cadastro se existem "lacunas" entre os ranges. O Peso Final de uma faixa deve ser igual ao Peso Inicial da faixa seguinte.
Por obrigatoriedade o sistema deve exigir que exista ao menos um range de peso cadastrado, caso tenha apenas um range o modo “default” deve ser que sempre se inicie com o peso inicial = 0 e finalize em peso final = 999,999, caso existam dois ou mais ranges cadastrados, a soma deles deve cobrir integralmente o intervalo de 0 a 999,999, para assim evitar que haja alguma lacuna na matriz de fragilidade.
Obs: Nosso sistema não integra valores inválidos (null), pois a soma das matrizes não funciona se um dos campos for nulo, o que causaria um problema na regra de conferir essas matrizes através da soma.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA.docx`  
**Heading:** Alteração no Processo Operacional: Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para garantir que o operador físico respeite a montagem do pallet, a tela de Order Start (Full Case) terá sua lógica de impressão alterada. O sistema deverá implementar as seguintes lógicas de ordenação:
Opção 01: Fluxo Guiado (Visão Restrita): Nesta modalidade, o operador não vê o que não pode separar.
Seleção: Operador escolhe o Posto de Impressão.
Filtro Automático: O grid de "Ruas" exibe na coluna de status apenas a camada da matriz atualmente liberada.
Exemplo: Se a Rua 10 tem itens de "Base" e "Topo" pendentes, o sistema exibe apenas: Rua 10 - Aguardando BASE.
Liberação Sequencial: Somente após a impressão de todas as etiquetas de "Base" daquela rua, o sistema libera a visualização da linha Rua 10 - Aguardando MEIO, e assim sucessivamente.
Opção 02: Seleção com Bloqueio de Dependência: Nesta modalidade, o operador tem visão do todo, mas é impedido de cometer erros.
Filtros: Operador seleciona Posto de Impressão e clica no botão da Matriz desejada (Ex: Botão "Topo").
Bloqueio Ativo: Ao tentar selecionar uma Rua para imprimir o "Topo", o sistema verifica no banco de dados se existem itens de prioridade inferior (Base/Meio) pendentes.
Ação: Se houver pendência, o sistema exibe popup: "BLOQUEADO: Realize a impressão dos itens de BASE antes de avançar para o TOPO nesta rua."
Opção 03: Múltipla Seleção com Separadores Físicos: Nesta modalidade, permite-se agilidade na seleção em massa, com organização na saída.
Seleção: Operador utiliza checkbox para selecionar múltiplas Matrizes (Ex: Base + Meio) e múltiplas Ruas de uma vez.
Ordenação da Fila: O WCS processa a fila de impressão organizando obrigatoriamente nesta hierarquia:
1º: Agrupamento por Rua (Caminho de picking).
2º: Ordenação interna por Prioridade (Crescente: 1, 2, 3...).
Etiqueta Separadora: O sistema deve imprimir automaticamente uma etiqueta de cabeçalho (layout distinto/invertido) a cada troca de grupo, contendo o texto: "INÍCIO RUA X - FAIXA: BASE", para que o operador saiba visualmente onde termina uma categoria e começa outra na bobina.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Order Start Fracionado  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos previstos, incluindo os dados de cubagem e quantidade de cada item. O WCS identifica os pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In, First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados. Com base nas informações recebidas, o WCS realiza o cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada tarefa (pedido). O sistema calcula quantos volumes serão necessários para cada tarefa.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start, onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada tarefa com base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o processo de separação do pedido.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Fase 2 - Melhorias.docx`  
**Heading:** Relatório de Conferência por Onda  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Ao selecionar uma onda na tela de conferência, o sistema deverá disponibilizar a opção de geração de relatório da onda selecionada, com foco em auditoria operacional e rastreabilidade.
Características do Relatório
O relatório será gerado a nível de linha, exibindo o detalhamento individual de cada tarefa associada à onda.
As informações apresentadas no relatório devem refletir o estado atual da conferência no ponto final da triagem.
Informações Exibidas
Para cada tarefa da onda, o relatório deverá apresentar, no mínimo, os seguintes campos:
Número da caixa plástica
Status da tarefa (Pendente / Conferida)
Número da OLPN
Número do Lacre 1
Número do Lacre 2
Premissas do Relatório
O relatório possui caráter exclusivamente informativo, sem impacto operacional ou logístico.
A geração do relatório não altera status, integrações ou fluxos já homologados.
As informações exibidas devem ser compatíveis com os registros de rastreabilidade armazenados pelo sistema.
Premissas e Restrições
As funcionalidades descritas atuam exclusivamente no âmbito operacional e de controle.
Não há alteração de status logístico nem interferência nos fluxos já homologados.
Todas as ações realizadas devem ser registradas para fins de rastreabilidade, incluindo:
  o Usuário
  o Data e hora
  o Identificadores lidos (caixa, etiqueta Manhattan e lacres)

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ BELEZA - ESPECIFICACAO DE SOFTWARE ADOTOVO - MELHORIAS.docx`  
**Heading:** Relatório de Conferência por Onda  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Ao selecionar uma onda na tela de conferência, o sistema deverá disponibilizar a opção de geração de relatório da onda selecionada, com foco em auditoria operacional e rastreabilidade.
Características do Relatório
• O relatório será gerado a nível de linha, exibindo o detalhamento individual de cada tarefa associada à onda.
• As informações apresentadas no relatório devem refletir o estado atual da conferência no ponto final da triagem.
Informações Exibidas
Para cada tarefa da onda, o relatório deverá apresentar, no mínimo, os seguintes campos:
• Número da caixa plástica
• Status da tarefa (Pendente / Conferida)
• Número da OLPN
• Número do Lacre 1
• Número do Lacre 2
Premissas do Relatório
• O relatório possui caráter exclusivamente informativo, sem impacto operacional ou logístico.
• A geração do relatório não altera status, integrações ou fluxos já homologados.
• As informações exibidas devem ser compatíveis com os registros de rastreabilidade armazenados pelo sistema.
Premissas e Restrições
• As funcionalidades descritas atuam exclusivamente no âmbito operacional e de controle.
• Não há alteração de status logístico nem interferência nos fluxos já homologados.
• Todas as ações realizadas devem ser registradas para fins de rastreabilidade, incluindo:
  o Usuário
  o Data e hora
  o Identificadores lidos (caixa, etiqueta Manhattan e lacres)
Adequação do Dashboard – Relatório Coleta/Posto
Adequação do dashboard Relatório Coleta/Posto para ampliar a visibilidade operacional e garantir maior confiabilidade das informações apresentadas.
Escopo da Adequação
Inclusão de uma nova seção no relatório para exibir apenas os itens cujos volumes foram efetivamente finalizados.
A nova seção deverá considerar o status de finalização da tarefa, e não apenas os itens separados nos postos.
Regra de Exibição
Atualmente, o relatório apresenta os itens separados nos postos de coleta, independentemente da finalização da tarefa.
Com a adequação proposta, o relatório deverá:
Manter a visualização atual dos itens separados;
Incluir uma seção adicional que exiba exclusivamente os itens pertencentes a volumes com tarefa finalizada.
Objetivo da Evolução
Garantir que o relatório reflita a real condição operacional da coleta.
Evitar divergências de informação entre itens separados e tarefas efetivamente concluídas.
Apoiar análises gerenciais e operacionais com base em dados consolidados.
Premissas
A inclusão da nova seção não altera regras de negócio existentes.
Não há impacto nos fluxos operacionais ou no envio de integrações.
A funcionalidade atua exclusivamente no âmbito de visualização e controle gerencial.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV14.docx`  
**Heading:** 3.5.1 ORDER START  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema Manhattan enviara um batch de pedidos múltiplos correspondentes aos casulos das estações de PTW, seguindo a quebra por OLPN, o código do batch enviado na interface deverá ser usado pelo WCS para realizar os desvios das estações. Primeiro batch criada com a capacidade das posições da primeira estação do PTW, será enviado para o primeiro destino. Segunda batch para o segundo e assim sequencialmente.
Quando enviar o último lote do batch, o WCS libera o primeiro desvio do PTW para a entrada da próxima batch.
Os pedidos do PTW são todos multi e podem iniciar no picking line ou picking tunnel, independentemente de onde o mesmo se inicia fará o vínculo pelo número do batch no PTW assim que for integrada a onda.
Um tote pode ocupar mais de uma posição no PTW, MFC fará a cubagem dos volumes com as posições.
A alocação das posições no Manhattan ocorre conforme a quantidade de OLPN dos pedidos, conforme imagem abaixo:
BATCH #1009
No exemplo acima, os 4 pedidos geraram 6 OLPN, devido a cubagem e estratégia de embalagem configurada, logo teríamos a alocação de 6 posições no PTW. A finalização dos pedidos que tem mais de uma OLPN precisa ser sinalizada quando a última posição de cada estiver com a consolidação completa. OLPN corresponde ao pacote que temos atualmente no BOSS.
O código batch é gerado pelo sistema Manhattan, é um código sequencial. Nesse caso o mapeamento das posições do PTW no WCS deverá considerar a finalização de cada batch para mapear o próximo que será enviado na próxima onda, e assim sucessivamente.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV16.docx`  
**Heading:** 3.5.1 ORDER START  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema Manhattan enviara um batch de pedidos múltiplos correspondentes aos casulos das estações de PTW, seguindo a quebra por OLPN, o código do batch enviado na interface deverá ser usado pelo WCS para realizar os desvios das estações. Primeiro batch criada com a capacidade das posições da primeira estação do PTW, será enviado para o primeiro destino. Segunda batch para o segundo e assim sequencialmente.
Quando enviar o último lote do batch, o WCS libera o primeiro desvio do PTW para a entrada da próxima batch.
Os pedidos do PTW são todos multi e podem iniciar no picking line ou picking tunnel, independentemente de onde o mesmo se inicia fará o vínculo pelo número do batch no PTW assim que for integrada a onda.
Um tote pode ocupar mais de uma posição no PTW, MFC fará a cubagem dos volumes com as posições.
A alocação das posições no Manhattan ocorre conforme a quantidade de OLPN dos pedidos, conforme imagem abaixo:
BATCH #1009
No exemplo acima, os 4 pedidos geraram 6 OLPN, devido a cubagem e estratégia de embalagem configurada, logo teríamos a alocação de 6 posições no PTW. A finalização dos pedidos que tem mais de uma OLPN precisa ser sinalizada quando a última posição de cada estiver com a consolidação completa. OLPN corresponde ao pacote que temos atualmente no BOSS.
O código batch é gerado pelo sistema Manhattan, é um código sequencial. Nesse caso o mapeamento das posições do PTW no WCS deverá considerar a finalização de cada batch para mapear o próximo que será enviado na próxima onda, e assim sucessivamente.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.5.1 ORDER START  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema Manhattan enviara um batch de pedidos múltiplos correspondentes aos casulos das estações de PTW, seguindo a quebra por OLPN, o código do batch enviado na interface deverá ser usado pelo WCS para realizar os desvios das estações. Primeiro batch criada com a capacidade das posições da primeira estação do PTW, será enviado para o primeiro destino. Segunda batch para o segundo e assim sequencialmente.
Quando enviar o último lote do batch, o WCS libera o primeiro desvio do PTW para a entrada da próxima batch.
Os pedidos do PTW são todos multi e podem iniciar no picking line ou picking tunnel, independentemente de onde o mesmo se inicia fará o vínculo pelo número do batch no PTW assim que for integrada a onda.
Um tote pode ocupar mais de uma posição no PTW, MFC fará a cubagem dos volumes com as posições.
A alocação das posições no Manhattan ocorre conforme a quantidade de OLPN dos pedidos, conforme imagem abaixo:
BATCH #1009
No exemplo acima, os 4 pedidos geraram 6 OLPN, devido a cubagem e estratégia de embalagem configurada, logo teríamos a alocação de 6 posições no PTW. A finalização dos pedidos que tem mais de uma OLPN precisa ser sinalizada quando a última posição de cada estiver com a consolidação completa. OLPN corresponde ao pacote que temos atualmente no BOSS.
O código batch é gerado pelo sistema Manhattan, é um código sequencial. Nesse caso o mapeamento das posições do PTW no WCS deverá considerar a finalização de cada batch para mapear o próximo que será enviado na próxima onda, e assim sucessivamente.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Estação de Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No order start deverá ter uma estação de trabalho, 01 (um) Desktop + 1 (um) scanner auxiliará o Operador com os principais recursos necessários para a operação.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Estação de Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No order start deverá ter uma estação de trabalho, 01 (um) Desktop + 1 (um) scanner auxiliará o Operador com os principais recursos necessários para a operação.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Estação de Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No order start deverá ter uma estação de trabalho, 01 (um) Desktop + 1 (um) scanner auxiliará o Operador com os principais recursos necessários para a operação.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No início da linha operador fara a leitura do código de barras da caixa plástica, nesse momento o sistema VELOX fará o vínculo com um pedido.
Na tela de order start irá informar a quantidade de caixas necessárias para atender esse pedido, caso a quantidade de caixas seja maior que 1, a próxima caixa lida será vinculada no mesmo pedido até atingir a quantidade necessária informada para o pedido.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Iremos associar a caixa plástica com o pedido a ser expedido, conforme o cálculo de cubagem realizado pelo sistema Velox, essa caixa plástica já tem etiquetas fixas que não alteram, a loja pode receber várias caixas de um único pedido.
Após o vínculo da caixa plástica com o pedido, ela seguirá pela esteira expressa para ser realizado o picking em cada posto da estação.
Caso a quantidade física não atenda a quantidade solicitada, o operador seleciona em um led que ficará no canto do posto a quantidade real separada, solicitando assim uma nova caixa adicional para esse pedido.
Todos os pedidos que foram realizados shortpicking seguirão para conferência, onde os itens de alta relevância serão tratados individualmente, para os demais itens, o pedido seguirá normalmente com o shortpicking. Essa validação será feita na própria estação de conferência.
Os tipos de “Famílias de produtos” que o sistema irá distinguir são:
Tabaco
Higiene e Limpeza
DPH
Alimentos
Bazar
Bazar e Alimentos podem ser separados na mesma caixa.
DPH e Higiene podem ser separados na mesma caixa.
Tabaco – Somente Tabaco na caixa.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No início da linha operador fara a leitura do código de barras da caixa plástica, nesse momento o sistema VELOX fará o vínculo com um pedido.
Na tela de order start irá informar a quantidade de caixas necessárias para atender esse pedido, caso a quantidade de caixas seja maior que 1, a próxima caixa lida será vinculada no mesmo pedido até atingir a quantidade necessária informada para o pedido.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Iremos associar a caixa plástica com o pedido a ser expedido, conforme o cálculo de cubagem realizado pelo sistema Velox, essa caixa plástica já tem etiquetas fixas que não alteram, a loja pode receber várias caixas de um único pedido.
Após o vínculo da caixa plástica com o pedido, ela seguirá pela esteira expressa para ser realizado o picking em cada posto da estação.
Caso a quantidade física não atenda a quantidade solicitada, o operador seleciona em um led que ficará no canto do posto a quantidade real separada, solicitando assim uma nova caixa adicional para esse pedido.
Todos os pedidos que foram realizados shortpicking seguirão para conferência, onde os itens de alta relevância serão tratados individualmente, para os demais itens, o pedido seguirá normalmente com o shortpicking. Essa validação será feita na própria estação de conferência.
Os tipos de “Famílias de produtos” que o sistema irá distinguir são:
Tabaco
Higiene e Limpeza
DPH
Alimentos
Bazar
Bazar e Alimentos podem ser separados na mesma caixa.
DPH e Higiene podem ser separados na mesma caixa.
Tabaco – Somente Tabaco na caixa.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY -ADITIVO BAUS_REV1.docx`  
**Heading:** Baús Aceitos pela Automação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Atualmente, o sistema permite a vinculação de pedidos a caixas plásticas que iniciem seus códigos com “78”.
Para suprir a necessidade da operação, será necessário adicionar uma regra no Order Start que aceite a vinculação de caixas plásticas que iniciem seus códigos com “80”.
Sendo assim, as caixas plásticas que iniciarem os códigos com “78” ou “80” serão aceitas para o uso na automação.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Será disponibilizado apenas 1(um) Order Start para o cliente, onde o sistema de gestão Invent ficará disponível para que o operador selecione o mapa correto para cada tipo de operação.
O sistema deverá permitir que o operador realize a importação de uma tabela de CEPs a qualquer momento da operação, ficando ativa a última tabela importada.
O operador deverá editar essa tabela conforme necessidade por rota, range de cep e saída e então importar no sistema.
Ao importar a tabela o sistema irá roteirizar os volumes passados no sorter.
Operador irá colar etiqueta em todos os volumes com etiquetas internas, e induzi-los no sorter onde o leitor irá fazer a leitura e recolher a informação do cep e buscar a rota correta para fazer o sorteamento.
Ao fazer o processo de separação, o volume será direcionado a uma saída, onde cada saída dispõe de uma saca e um sensor que indicará quando esta saca estiver cheia, quando a saca encher o sensor é acionado, com esse sensor acionado, faz com que a automação pare de desviar volumes naquela saída que estiver com a saca cheia.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0-.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será disponibilizado apenas 1(um) Order Start para o cliente, onde o sistema de gestão Invent ficará disponível para que o operador selecione o mapa correto para cada tipo de operação. O sistema deverá permitir que o operador altere o mapa a qualquer momento da operação. O operador poderá criar diversos tipos de mapas e ativá-los conforme necessidade da operação.
O operador deverá criar cada rota por range de cep e vincular cada rota em uma das 120(cento e vinte) saídas disponíveis no sorter.
Ao ativar o mapa desejado o sistema irá roteirizar os volumes passados no sorter.
Operador irá colar etiqueta em todos os volumes com etiquetas internas, e induzi-los no sorter onde o leitor irá fazer a leitura e recolher a informação do cep e buscar a rota correta para fazer o sorteamento.
Ao fazer o processo de separação, o volume será direcionado a uma saída, onde cada saída dispõe de uma saca e um sensor que indicará quando esta saca estiver cheia, quando a saca encher o sensor é acionado, com esse sensor acionado, faz com que a automação pare de desviar volumes naquela saída que estiver com a saca cheia.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será disponibilizado apenas 1(um) Order Start para o cliente, onde o sistema de gestão Invent ficará disponível para que o operador selecione o mapa correto para cada tipo de operação. O sistema deverá permitir que o operador altere o mapa a qualquer momento da operação. O operador poderá criar diversos tipos de mapas e ativá-los conforme necessidade da operação.
O operador deverá criar cada rota por range de cep e vincular cada rota em uma das 120(cento e vinte) saídas disponíveis no sorter.
Ao ativar o mapa desejado o sistema irá roteirizar os volumes passados no sorter.
Operador irá colar etiqueta em todos os volumes com etiquetas internas, e induzi-los no sorter onde o leitor irá fazer a leitura e recolher a informação do cep e buscar a rota correta para fazer o sorteamento.
Ao fazer o processo de separação, o volume será direcionado a uma saída, onde cada saída dispõe de uma saca e um sensor que indicará quando esta saca estiver cheia, quando a saca encher o sensor é acionado, com esse sensor acionado, faz com que a automação pare de desviar volumes naquela saída que estiver com a saca cheia.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Será disponibilizado apenas 1(um) Order Start para o cliente, onde o sistema de gestão Invent ficará disponível para que o operador selecione o mapa correto para cada tipo de operação.
O sistema deverá permitir que o operador realize a importação de uma tabela de CEPs a qualquer momento da operação, ficando ativa a ultima tabela importada.
O operador deverá editar essa tabela conforme necessidade por rota, range de cep e saida e então importar no sistema.
Ao importar a tabela o sistema irá roteirizar os volumes passados no sorter.
Operador irá colar etiqueta em todos os volumes com etiquetas internas, e induzi-los no sorter onde o leitor irá fazer a leitura e recolher a informação do cep e buscar a rota correta para fazer o sorteamento.
Ao fazer o processo de separação, o volume será direcionado a uma saída, onde cada saída dispõe de uma saca e um sensor que indicará quando esta saca estiver cheia, quando a saca encher o sensor é acionado, com esse sensor acionado, faz com que a automação pare de desviar volumes naquela saída que estiver com a saca cheia.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

POST
REQUEST:
WMS (Cliente)  MFC (Invent)

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIF REV2.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Funcionará com as funções de um Order Starter Padrão com o adicional da interface com o PUT TO WALL.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Funcionará com as funções de um Order Starter Padrão com o adicional da interface com o PUT TO WALL.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Funcionará com as funções de um Order Starter Padrão com o adicional da interface com o PUT TO WALL.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Order start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na estação de Order Start o operador irá selecionar a onda que será expedida.
Essa onda deverá ser integrada previamente no sistema com as informações necessárias conforme descrito no item de integrações (Item 7).

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Teremos 08 bipagens ao todo ao longo do processo.
Teremos duas formas de recebimento da carga no início do processo: Cão farejador ou raio x (linha)

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Teremos 1 Order Start por nível.
O sistema VELOX fará distribuição da seguinte forma:
Pedidos que contenham tipos de produtos Controlados/Psicotrópicos, baixo giro e ou alto giro.
Order Start Controlados
Pedidos que contenham tipos de produtos Baixo Giro e Alto Giro.
Order Start Baixo Giro
Pedidos que contenham somente tipo de produtos Alto Giro.
Order Start Alto Giro
Cada Order Start mostrará os pedidos conforme detalhado acima, por exemplo no Order Start Alto Giro o operador não visualizará os pedidos que contém produtos classificados como Controlados ou Baixo Giro.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.2.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Teremos 1 Order Start por nível.
O sistema VELOX fará distribuição da seguinte forma:
Pedidos que contenham tipos de produtos Controlados/Psicotrópicos, baixo giro e ou alto giro.
Order Start Controlados - Piso 02
Pedidos que contenham tipos de produtos Baixo Giro e Alto Giro.
Order Start Baixo Giro - Piso 01
Pedidos que contenham somente tipo de produtos Alto Giro.
Order Start Alto Giro - Térreo
Cada Order Start mostrará os pedidos conforme detalhado acima, por exemplo no Order Start Alto Giro o operador não visualizará os pedidos que contém produtos classificados como Controlados ou Baixo Giro e vice-versa.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Teremos 1 Order Start por nível.
O sistema VELOX fará distribuição da seguinte forma:
Pedidos que contenham tipos de produtos Controlados/Psicotrópicos, baixo giro e ou alto giro.
Order Start Controlados - Piso 02
Pedidos que contenham tipos de produtos Baixo Giro e Alto Giro.
Order Start Baixo Giro - Piso 01
Pedidos que contenham somente tipo de produtos Alto Giro.
Order Start Alto Giro - Térreo
Cada Order Start mostrará os pedidos conforme detalhado acima, por exemplo no Order Start Alto Giro o operador não visualizará os pedidos que contém produtos classificados como Controlados ou Baixo Giro e vice-versa.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Teremos 3 níveis de separação com 1 Order Start por nível.
O sistema VELOX fará distribuição da seguinte forma:
2º Nível – Order Start com pedidos que contenham tipos de produtos Controlados/Psicotrópicos
1º Nível – Order Start com pedidos que contenham tipos de produtos Baixo Giro e Alto Giro.
Térreo – Order Start com pedidos que contenham somente tipos de produtos Alto Giro.
Cada Order Start mostrará os pedidos conforme detalhado acima, por exemplo, no Order Start Alto Giro o operador não visualizará os pedidos que contém produtos classificados como Controlados ou Baixo Giro e vice-versa.
O sistema VELOX fará a priorização e ordenação conforme recebido na integração, ou seja, o primeiro integrado será o primeiro a ser separado.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente, selecionando o pedido a ser separado.
As etiquetas do pedido serão impressas no início da operação em cada nível, operador imprime a etiqueta do pedido, lê a etiqueta da caixa e depois lê a etiqueta do pedido, realizando assim o vínculo do pedido à caixa.
A impressão da etiqueta de pedido será realizada pelo sistema WMS.
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.
Em caso de Noread no início da linha, a caixa será desviada na primeira estação, e o operador entrega essa caixa para ser verificada. (Estação serve como se fosse um rejeito da etiquetadora).
Após o vínculo da caixa com o pedido, a mesma seguirá para a linha para ser realizado o processo de separação dos produtos em cada posto de separação.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Baixo Giro (1º Andar/Nível)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A caixa seguirá pela linha expressa e a leitura da etiqueta será realizada através de um scanner fixo, para identificar se tem pedido a ser separado neste posto.
Em caso de haver separação, a caixa será desviada para este posto.
Em caso de não haver separação, a caixa seguirá reto.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente na tela.
Nesse Order Start o operador conseguirá iniciar somente pedidos que contém tipos de produtos baixo giro e ou alto giro, por exemplo:
Pedidos com produtos do tipo baixo giro.
Pedidos com produtos dos tipos baixo giro e alto giro.
Obs: Pedidos que não tiverem nenhum produto do tipo baixo giro não será visível nesse Order Start.
O picking será por PDV, teremos um PDV por posto, este PDV deverá indicar na mesma tela quando tiver picking nas costas neste mesmo monitor.
Estações de picking:
Teremos 04 estações de picking, 1 PDV por posto.
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido, e ao ser lida na linha expressa será identificado se existe item a ser separado nesta estação, e desviado caso exista.
Após a caixa passar pelo scanner fixo e ser desviada para o posto, no PDV apresentará em qual estante, coluna e posição está o SKU e a quantidade a ser separada, ao finalizar a separação operador confirma no PDV, (Neste momento o sistema MFC enviará para o WMS, a confirmação de picking), e a caixa está pronta para seguir para a próxima estação.
Em caso de falta de produto, o operador irá realizar o shortpicking, diminuindo a quantidade no pdv através da seta para baixo, e informar a quantidade que está sendo separada.
Essa caixa que teve o shortpiciking, quando chegar na conferência será verificada se será expedida com item faltante ou será corrigida nessa estação de conferência, na tela do PDV irá aparecer qual o item faltante.
Após finalizado o picking em todas as estações, todas as caixas seguirão para a conferência.
Picking Frente: Teremos 16 postos de separação.
Picking Costas: Teremos 66 postos de separação.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Teremos 1 Order Start por nível.
Pedidos que contenham tipos de produtos Controlados/Psicotrópicos, baixo giro e ou alto giro, serão distribuídos da seguinte forma:
2º Andar/Nível – Order Start pedidos que contenham tipos de produtos Controlados/Psicotrópicos.
1º Andar/Nível – Order Start pedidos que contenham tipos de produtos Baixo Giro e Alto Giro.
Térreo – Order Start pedidos que contenham somente tipo de produtos Alto Giro.
Cada Order Start mostrará os pedidos conforme detalhado acima, por exemplo no Order Start Alto Giro o operador não visualizará os pedidos que contém produtos classificados como “Controlados” ou Baixo Giro e vice-versa.
Sistema VELOX fará a priorização e ordenação conforme recebido na integração, ou seja, o primeiro integrado será o primeiro a ser separado.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente, selecionando o pedido a ser separado.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Teremos 1 Order Start por nível.
Pedidos que contenham tipos de produtos Controlados/Psicotrópicos, baixo giro e ou alto giro, serão distribuídos da seguinte forma:
2º Andar/Nível – Order Start pedidos que contenham tipos de produtos Controlados/Psicotrópicos.
1º Andar/Nível – Order Start pedidos que contenham tipos de produtos Baixo Giro e Alto Giro.
Térreo – Order Start pedidos que contenham somente tipo de produtos Alto Giro.
Cada Order Start mostrará os pedidos conforme detalhado acima, por exemplo no Order Start Alto Giro o operador não visualizará os pedidos que contém produtos dos setores “Controlados” e/ou Baixo Giro e vice-versa.
Sistema VELOX fará a priorização e ordenação conforme recebido na integração, ou seja, o primeiro integrado será o primeiro a ser expedido.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente, selecionando o pedido a ser separado.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Estação de Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No order start deverá ter uma estação de trabalho, 01 (um) Desktop + 1 (um) scanner + 1 (uma) impressora que auxiliará o Operador com os principais recursos necessários para a operação. (Responsabilidade EMIS).

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Estações de trabalho (DESKTOP)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As estações de trabalho serão distribuídas ao longo das seguintes regiões:
Order Start de Curva A (Responsabilidade do Cliente)
Order Start de Curva B (Responsabilidade do Cliente)
Order Start de Curva C (Responsabilidade do Cliente)
Estação de impressão (FullCase) (Responsabilidade do Cliente)
Estação de rejeito (Responsabilidade do Cliente)
Estação Cubômetro (1 computador por cubômetro) (Responsabilidade do Cliente)
Estação PTM (1 computador por tela) (Responsabilidade do Cliente)
Estação de Order Start;
Cada order start deverá ter uma estação de trabalho, 01 (um) Desktop + 1 (um) scanner + 1 (uma) impressora de etiquetas que auxiliará o Operador com os principais recursos necessários para a operação.
Estação de Impressão Full Case;
Na indução de caixas Full Case, 01 (um) Desktop + 1 (um) scanner + 1 (uma) impressora de etiqueta que auxiliará o Operador com os principais recursos necessários para a operação ( de pedidos, tratativa de rejeito, etc.)
Rejeito;
Para a região do rejeito, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrado, etc.)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Estações de trabalho (DESKTOP)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As estações de trabalho serão distribuídas ao longo das seguintes regiões:
Order Start de Curva A (Responsabilidade do Cliente)
Order Start de Curva B (Responsabilidade do Cliente)
Order Start de Curva C (Responsabilidade do Cliente)
Estação de impressão (FullCase) (Responsabilidade do Cliente)
Estação de rejeito (Responsabilidade do Cliente)
Estação Cubômetro (1 computador por cubômetro) (Responsabilidade do Cliente)
Estação PTM (1 computador por tela) (Responsabilidade do Cliente)
Estação de Order Start;
Cada order start deverá ter uma estação de trabalho, 01 (um) Desktop + 1 (um) scanner + 1 (uma) impressora de etiquetas que auxiliará o Operador com os principais recursos necessários para a operação.
Estação de Impressão Full Case;
Na indução de caixas Full Case, 01 (um) Desktop + 1 (um) scanner + 1 (uma) impressora de etiqueta que auxiliará o Operador com os principais recursos necessários para a operação ( de pedidos, tratativa de rejeito, etc.)
Rejeito;
Para a região do rejeito, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrado, etc.)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Estações de trabalho (DESKTOP)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As estações de trabalho serão distribuídas ao longo das seguintes regiões:
Order Start de Curva A (Responsabilidade do Cliente)
Order Start de Curva B (Responsabilidade do Cliente)
Order Start de Curva C (Responsabilidade do Cliente)
Estação de impressão (FullCase) (Responsabilidade do Cliente)
Estação de rejeito (Responsabilidade do Cliente)
Estação Cubômetro (1 computador por cubômetro) (Responsabilidade do Cliente)
Estação PTM (1 computador por tela) (Responsabilidade do Cliente)
Estação de Order Start;
Cada order start deverá ter uma estação de trabalho, 01 (um) Desktop + 1 (um) scanner + 1 (uma) impressora de etiquetas que auxiliará o Operador com os principais recursos necessários para a operação.
Estação de Impressão Full Case;
Na indução de caixas Full Case, 01 (um) Desktop + 1 (um) scanner + 1 (uma) impressora de etiqueta que auxiliará o Operador com os principais recursos necessários para a operação ( de pedidos, tratativa de rejeito, etc.)
Rejeito;
Para a região do rejeito, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrado, etc.)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Estações de trabalho (DESKTOP)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As estações de trabalho serão distribuídas ao longo das seguintes regiões:
Order Start de Curva A (Responsabilidade do Cliente)
Order Start de Curva B (Responsabilidade do Cliente)
Order Start de Curva C (Responsabilidade do Cliente)
Estação de impressão (FullCase) (Responsabilidade do Cliente)
Estação de rejeito (Responsabilidade do Cliente)
Estação Cubômetro (1 computador por cubômetro) (Responsabilidade do Cliente)
Estação PTM (1 computador por tela) (Responsabilidade do Cliente)
Estação de Order Start;
Cada order start deverá ter uma estação de trabalho, 01 (um) Desktop + 1 (um) scanner + 1 (uma) impressora de etiquetas que auxiliará o Operador com os principais recursos necessários para a operação.
Estação de Impressão Full Case;
Na indução de caixas Full Case, 01 (um) Desktop + 1 (um) scanner + 1 (uma) impressora de etiqueta que auxiliará o Operador com os principais recursos necessários para a operação ( de pedidos, tratativa de rejeito, etc.)
Rejeito;
Para a região do rejeito, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrado, etc.)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Será disponibilizado apenas 1(um) Order Start para o cliente, onde o sistema de gestão Invent ficará disponível para que o operador selecione o mapa correto para cada tipo de operação.
O sistema deverá permitir que o operador realize a importação de uma tabela de CEPs a qualquer momento da operação, ficando ativa a última tabela importada.
O operador deverá editar essa tabela conforme necessidade por rota, range de cep, Put to Bag, saída e então importar no sistema.
Ao importar a tabela o sistema irá roteirizar os volumes passados no sorter.
Operador irá colar etiqueta em todos os volumes com etiquetas internas, e induzi-los no sorter onde o leitor irá fazer a leitura e ler a informação do cep e buscar a rota correta para fazer o sorteamento.
Ao fazer o processo de separação, o volume será direcionado a uma saída, onde cada saída dispõe de uma saca e um sensor que indicará quando esta saca estiver cheia, quando a saca encher, o sensor é acionado, com esse sensor acionado, faz com que a automação pare de desviar volumes naquela saída que estiver com a saca cheia.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será disponibilizado um (1) Order Start no início da linha de separação de cada nível, cuja finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Os volumes (pega) a serem transportados na esteira, serão caixas plásticas com etiqueta fixa, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de separação deverão realizar login e acessar a tela de order start.
Cada operação realizada estará associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item 3.3 Trabalhos – Work  acima.
Antes de iniciar os pedidos, o WCS deve validar se a quantidade de saldo nas posições é suficiente para atender as tarefas, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender as tarefas, a mesma não poderá ser iniciada e o WCS deverá seguir com o reabastecimento via transfer.
O WCS exibirá um alerta na tela de Order Start quando identificar que as posições de picking disponíveis não são suficientes para atender todas as tarefas de ressuprimento geradas. Nesse caso a operação deverá realizar uma movimentação forçada de estoque liberando uma posição para esse ressuprimento pendente.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, o WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
No processo de separação, o ponto de Order Start em que o volume (pega) será iniciado depende da menor curva de giro presente no armazém. Isso significa que o WCS deve identificar, entre todos os endereços de picking do volume (pega), qual pertence à curva de menor giro (por exemplo, museu ou Order Start do FlowRack), e a partir disso determinar o ponto inicial de separação.
Se o volume (pega) possuir itens que devem ser coletados no museu, o início do processo deverá ocorrer no Order Start específico daquela área. Nessa etapa, o operador realizará a associação do volume (pega) com a caixa plástica via PDV (Picking Cart) e iniciará a coleta a partir da área de menor giro.
Somente após a separação na área do museu, caso o volume (pega) possua itens destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do processo de separação no FlowRack. Esse fluxo garante que todas as coletas nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de retrabalho ou retorno de caixas já em processo de automação. O vínculo das caixas com o volume (pega) é feito automaticamente no primeiro ponto de decisão da linha de FlowRack.
O WCS disponibiliza uma tela de Order Start que serve para visualizar os próximos volumes (Pega) que serão vinculados de acordo com a ordem de prioridade enviada na integração.
Priorizar Pedidos: Na tela de “Tarefas”, o operador terá acesso a recursos onde Será possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante agilidade na seleção e maior controle sobre o que deve ser iniciado no momento. Além disso, a tela apresentará uma visualização prévia da previsão de volumes (pega) por pedido, permitindo que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico. Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela “Resumo Pega” será possível filtrar os pedidos por tipo de picking FlowRack, Picking Cart, Full Case, exceção. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Além do filtro, a tela apresentará de forma consolidada o total de volumes (pega) previstos por tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o planejamento da linha de separação e a atuação mais estratégica por parte da liderança operacional.
Hardware Order Start: 
O WCS oferecerá suporte em desktops para as telas de Order Start no picking fracionado, garantindo uma visualização mais ampla e eficiente do processo.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Nível 3  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O Order Start no 3º Nível será utilizado quando a coleta do item iniciar neste nível, podendo ou não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas os volumes que iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Nível 2  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no 2º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Nível 1  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no 1º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Order Start Fracionado Térreo  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start no Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis 1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo (desktop), onde são exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2 ou 3.(Somente par consulta)
Será exibido o total de caixas necessárias para finalizar os pedidos integrados.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido automáticamente.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Separação  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Teremos 1 (uma) linha de separação de produtos.
Linha de separação (Frente e Posterior (costas))
1 (um) operador por estação
4 (quatro) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Posições frente e posteriores (costas) não terá leds, todas as informações sobre a separação serão mostradas na tela do PDV de cada estação.
Operador ao receber a caixa na estação, realiza a leitura da etiqueta do volume, com isso o PDV informará as posições/locais de separação para que o operador realize as separações nos locais indicados, ao realizar a separação a tela do PDV é atualizada, ao finalizar a separação, a tela do PDV informará ao operador que finalizou a separação daquela estação.
Para iniciar a separação dos itens na posição, operador deverá realizar a leitura da etiqueta de "produção" do produto solicitado, nessa etiqueta contém as informações do produto e lote, ao realizar a leitura dessa etiqueta de "produção" o sistema Velox valida a informação de Lote, se a informação do lote lido for compatível com a informação do lote solicitado, o sistema Velox então inicia o picking desse produto, operador deve realizar a leitura de todos os itens, item a item, por exemplo: caso no pedido, esteja solicitando a separação de 10 (dez) unidades do mesmo produto, o operador deverá fazer a leitura dos 10 (dez) itens para concluir a separação desse item.
Durante a separação, caso a quantidade solicitada de um lote termine, o operador terá que alterar o lote via sistema Velox, informando o novo lote que será separado daquele produto e iniciar a separação da quantidade restante do produto com o novo lote.
A troca de lote deverá ser autorizada por um usuário com o nível de usuário elevado específico, cadastrado para essa operação/autorização.
Essa etiqueta de "produção" estará disponivel na caixa do produto a ser separado na posição.
Na integração de confirmação, o sistema Velox deve informar os lotes que foram separados para o produto. No caso, quando o produto for separado em 2 (dois) lotes diferentes, Velox deverá informar a quantidade separada de cada lote.
Ao finalizar o picking dos itens da frente da estação, caso exista produtos a serem separados na área posterior (costas) do operador, a tela do PDV será atualizada informando o operador que existe itens pendentes separação na área posterior (costas), e informará na tela do PDV o local e a quantidade a ser separada.
O processo de bipagem da etiqueta de "produção" para validar o lote, se aplica para a separação na frente e área posterior (costas)
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
Descrição do processo operacional de separação:
Realizar a leitura do volume da caixa recebida;
Verificar o PDV quais posições e quantidades solicitando separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade solicitada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todas as posições de separação frente, caso tenha itens a serem separados na área posterior (costas), PDV será atualizado informando quais locais e quantidades;
Operador visualiza no PDV, o local e quantidade de produtos a serem separados na área posterior (costas);
Ao chegar na posição posterior (costas) que irá separar, realizar a leitura da etiqueta de "produção";
Operador deve checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade informada no PDV;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição informada pelo PDV e realiza o mesmo procedimento;
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Separação  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Teremos 1 (uma) linha de separação de produtos.
Linha de separação (Frente e Posterior (costas))
1 (um) operador por estação
4 (quatro) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Posições frente e posteriores (costas) não terá leds, todas as informações sobre a separação serão mostradas na tela do PDV de cada estação.
Operador ao receber a caixa na estação, realiza a leitura da etiqueta do volume, com isso o PDV informará as posições/locais de separação para que o operador realize as separações nos locais indicados, ao realizar a separação a tela do PDV é atualizada, ao finalizar a separação, a tela do PDV informará ao operador que finalizou a separação daquela estação.
Para iniciar a separação dos itens na posição, operador deverá realizar a leitura da etiqueta de "produção" do produto solicitado, nessa etiqueta contém as informações do produto e lote, ao realizar a leitura dessa etiqueta de "produção" o sistema Velox valida a informação de Lote, se a informação do lote lido for compatível com a informação do lote solicitado, o sistema Velox então inicia o picking desse produto, operador deve realizar a leitura de todos os itens, item a item, por exemplo: caso no pedido, esteja solicitando a separação de 10 (dez) unidades do mesmo produto, o operador deverá fazer a leitura dos 10 (dez) itens para concluir a separação desse item.
Durante a separação, caso a quantidade solicitada de um lote termine, o operador terá que alterar o lote via sistema Velox, informando o novo lote que será separado daquele produto e iniciar a separação da quantidade restante do produto com o novo lote.
A troca de lote deverá ser autorizada por um usuário com o nível de usuário elevado específico, cadastrado para essa operação/autorização.
Essa etiqueta de "produção" estará disponivel na caixa do produto a ser separado na posição.
Na integração de confirmação, o sistema Velox deve informar os lotes que foram separados para o produto. No caso, quando o produto for separado em 2 (dois) lotes diferentes, Velox deverá informar a quantidade separada de cada lote.
Ao finalizar o picking dos itens da frente da estação, caso exista produtos a serem separados na área posterior (costas) do operador, a tela do PDV será atualizada informando o operador que existe itens pendentes separação na área posterior (costas), e informará na tela do PDV o local e a quantidade a ser separada.
O processo de bipagem da etiqueta de "produção" para validar o lote, se aplica para a separação na frente e área posterior (costas)
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
Descrição do processo operacional de separação:
Realizar a leitura do volume da caixa recebida;
Verificar o PDV quais posições e quantidades solicitando separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade solicitada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todas as posições de separação frente, caso tenha itens a serem separados na área posterior (costas), PDV será atualizado informando quais locais e quantidades;
Operador visualiza no PDV, o local e quantidade de produtos a serem separados na área posterior (costas);
Ao chegar na posição posterior (costas) que irá separar, realizar a leitura da etiqueta de "produção";
Operador deve checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade informada no PDV;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição informada pelo PDV e realiza o mesmo procedimento;
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Separação  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Teremos 1 (uma) linha de separação de produtos.
Linha de separação (Frente e Posterior (costas))
1 (um) operador por estação
4 (quatro) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Posições frente e posteriores (costas) não terá leds, todas as informações sobre a separação serão mostradas na tela do PDV de cada estação.
Operador ao receber a caixa na estação, realiza a leitura da etiqueta do volume, com isso o PDV informará as posições/locais de separação para que o operador realize as separações nos locais indicados, ao realizar a separação a tela do PDV é atualizada, ao finalizar a separação, a tela do PDV informará ao operador que finalizou a separação daquela estação.
Para iniciar a separação dos itens na posição, operador deverá realizar a leitura da etiqueta de "produção" do produto solicitado, nessa etiqueta contém as informações do produto e lote, ao realizar a leitura dessa etiqueta de "produção" o sistema Velox valida a informação de Lote, se a informação do lote lido for compatível com a informação do lote solicitado, o sistema Velox então inicia o picking desse produto, operador deve realizar a leitura de todos os itens, item a item, por exemplo: caso no pedido, esteja solicitando a separação de 10 (dez) unidades do mesmo produto, o operador deverá fazer a leitura dos 10 (dez) itens para concluir a separação desse item.
Durante a separação, caso a quantidade solicitada de um lote termine, o operador terá que alterar o lote via sistema Velox, informando o novo lote que será separado daquele produto e iniciar a separação da quantidade restante do produto com o novo lote.
A troca de lote deverá ser autorizada por um usuário com o nível de usuário elevado específico, cadastrado para essa operação/autorização.
Essa etiqueta de "produção" estará disponivel na caixa do produto a ser separado na posição.
Na integração de confirmação, o sistema Velox deve informar os lotes que foram separados para o produto. No caso, quando o produto for separado em 2 (dois) lotes diferentes, Velox deverá informar a quantidade separada de cada lote.
Ao finalizar o picking dos itens da frente da estação, caso exista produtos a serem separados na área posterior (costas) do operador, a tela do PDV será atualizada informando o operador que existe itens pendentes separação na área posterior (costas), e informará na tela do PDV o local e a quantidade a ser separada.
O processo de bipagem da etiqueta de "produção" para validar o lote, se aplica para a separação na frente e área posterior (costas)
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
Descrição do processo operacional de separação:
Realizar a leitura do volume da caixa recebida;
Verificar o PDV quais posições e quantidades solicitando separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade solicitada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todas as posições de separação frente, caso tenha itens a serem separados na área posterior (costas), PDV será atualizado informando quais locais e quantidades;
Operador visualiza no PDV, o local e quantidade de produtos a serem separados na área posterior (costas);
Ao chegar na posição posterior (costas) que irá separar, realizar a leitura da etiqueta de "produção";
Operador deve checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade informada no PDV;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição informada pelo PDV e realiza o mesmo procedimento;
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Separação  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Teremos 2 (duas) linhas de separação de fracionados, linha de separação de produtos controlados e a linha de separação de produtos não controlados.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Fracionados  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Teremos 2 (duas) linhas de separação de fracionados, linha de separação de produtos controlados e a linha de separação de produtos não controlados.
Linha Controlados (Frente e Posterior (costas))
1 (um) operador por estação
1 (uma) linha de separação com 148 (cento e quarenta e oito) posições/sku.
1 (um) led 3 (dígitos) com botão por posição/sku.
5 (cinco) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Cada posição frente será composta por:
1 (um) led 3 (dígitos) com botão por posição/sku.
Posições posteriores (costas) não terá leds, as posições serão informadas na tela do PDV da estação.
Linha Não Controlados (Frente e Posterior (costas))
1 (um) operador por estação
1 (uma) linha de separação com 180 (cento e oitenta) posições/sku.
1 (um) led 3 (dígitos) com botão por posição/sku.
5 (cinco) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Cada posição frente será composta por:
1 (um) led 3 (dígitos) com botão por posição/sku.
Posições posteriores (costas) não terá leds, as posições serão informadas na tela do PDV da estação.
Operador ao receber a caixa na estação, realiza a leitura da etiqueta do volume, com isso os leds e quantidades da estação são acesos, informando ao operador quais posições e quantidades devem ser separadas naquele volume.
Na tela do PDV também informará a separação que o operador está realizando, ao realizar a separação a tela do PDV é atualizada.
Para iniciar a separação dos itens na posição, operador deverá realizar a leitura da etiqueta de "produção" do produto solicitado, nessa etiqueta contém as informações do produto e lote, ao realizar a leitura dessa etiqueta de "produção" o sistema Velox valida a informação de Lote, se a informação do lote lido for compatível com a informação do lote solicitado, o sistema Velox então inicia o picking desse produto, operador deve realizar a leitura de todos os itens, item a item, por exemplo: caso no pedido, esteja solicitando a separação de 10 (dez) unidades do mesmo produto, o operador deverá fazer a leitura dos 10 (dez) itens para concluir a separação desse item.
Durante a separação, caso a quantidade solicitada de um lote termine, o operador terá que alterar o lote via sistema Velox, informando o novo lote que será separado daquele produto e iniciar a separação da quantidade restante do produto com o novo lote.
A troca de lote deverá ser autorizada por um usuário com o nível de usuário elevado específico, cadastrado para essa operação/autorização.
Essa etiqueta de "produção" estará disponivel na caixa do produto a ser separado na posição.
Na integração de confirmação, o sistema Velox deve informar os lotes que foram separados para o produto. No caso, quando o produto for separado em 2 (dois) lotes diferentes, Velox deverá informar a quantidade separada de cada lote.
Ao finalizar o picking dos itens da frente da estação, caso exista produtos a serem separados na área posterior (costas) do operador, a tela do PDV será atualizada informando o operador que existe itens pendentes separação na área posterior (costas), e informará o local e a quantidade a ser separada.
O processo de bipagem da etiqueta de "produção" para validar o lote, se aplica para a separação na frente e área posterior (costas)
Ao finalizar toda a separação na estação frente e posterior (costas), todos os leds da frente da estação acenderão na cor verde informando ao operador que toda a separação daquela estação foi finalizada.
Descrição do processo operacional de separação:
Realizar a leitura do volume da caixa recebida;
Verificar os leds acesos na are de picking frente, solicitando quantidade de separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade solicitada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todas as posições de separação frente, caso tenha itens a serem separados na área posterior (costas) todos os leds da frente acenderão na cor "rosa";
Operador visualiza no PDV, o local e quantidade de produtos a serem separados na área posterior (costas);
Ao chegar na posição posterior (costas) que irá separar, realizar a leitura da etiqueta de "produção";
Operador deve checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade informada no PDV;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição informada pelo PDV e realiza o mesmo procedimento;
Ao finalizar a separação de todas as posições de separação posteriores (costas), todos os leds da frente acenderão na cor "Verde", informando ao usuário que o picking foi concluído 100%.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Separação  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Teremos 2 (duas) linhas de separação de fracionados, linha de separação de produtos controlados e a linha de separação de produtos não controlados.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na estação de Order Start deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) impressora etiquetadora
Abaixo segue a configuração mínima para o desktop para a estação de Order Start:

---
**Origem:** [I23.3917] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O order start será automatico, assim, para iniciar o processo, o sistema Velox fará o vínculo de pedidos e caixas a serem liberadas no order start, e quando a caixa for liberada e lida no order start a mesma será vinculada com um pedido.
A caixa a ser liberada pelo order start deve conter um código de barras único de identificação.

---
**Origem:** [I23.418] 2023 — `I21.103-Projeto Reisado - ESPECIFICACAO DE SOFTWARE.docx`  
**Heading:** Tela de reimpressão/impressão  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Apenas o colaborador que tiver acesso no grupo "FULL CASE" será permitido realizar a reimpressão
(1ª via) Impressão qualquer usuário/grupo pode realizar, seja do Order Start ou full case através da tela consulta geral. Caso ela já tenha sido impressa, deve subir um pop-up notificando que essa impressão já foi realizada anteriormente.
(2ª via) Quando o usuário realizar a reimpressão, deve subir um pop-up apresentando os motivos de reimpressão para que ele possa selecionar 1 motivo, será possível conceder a impressão após isso.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No início da linha operador irá induzir a caixa na esteira, cada caixa terá uma etiqueta de cada lado com um QR Code, onde o sistema irá de forma automática vincular um pedido ou parte dele à este QR Code.
Na tela de order start o sistema Velox irá informar a quantidade de caixas necessárias para atender esse pedido, caso a quantidade de caixas seja maior que 1, a próxima caixa lida será vinculada no mesmo pedido até atingir a quantidade necessária informada para o pedido.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Iremos associar a caixa plástica com o pedido a ser expedido, conforme o cálculo de cubagem realizado pelo sistema Velox, essa caixa plástica já tem etiquetas fixas que não alteram, a loja pode receber várias caixas de um único pedido.
Após o vínculo da caixa plástica com o pedido, ela seguirá pela esteira expressa para ser realizado o picking em cada posto da estação.
Caso a quantidade física não atenda a quantidade solicitada, o operador seleciona em um led que ficará no canto do posto a quantidade real separada, solicitando assim uma nova caixa adicional para esse pedido.
Todos os pedidos que foram realizados shortpicking seguirão para conferência, onde os itens de alta relevância serão tratados individualmente, para os demais itens, o pedido seguirá normalmente com o shortpicking. Essa validação será feita na própria estação de conferência.
Os tipos de “Famílias de produtos” que o sistema irá distinguir são:
Tabaco
Higiene e Limpeza
DPH
Alimentos
Bazar
Bazar e Alimentos podem ser separados na mesma caixa.
DPH e Higiene podem ser separados na mesma caixa.
Tabaco – Somente Tabaco na caixa.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 1.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Para iniciar o processo, o sistema Velox deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plasticas de picking, Velox realiza a cubagem dos produtos e determina quantas caixas plasticas serão necessárias para atender a separação do pedido.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plastica, e induzir a caixa na linha de separação, leitor do inicio da linha ao realizar a leitura dessa etiqueta faz o vinculo com o primeiro volume do pedido integrado, caso não realize a leitura do codigo de barras da caixa, a caixa é rejeitada no inicio da linha.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Opções de cancelamento que teremos no WCS:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start: Caso o pedido seja cancelado após o início do Order Start, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito antes conferência.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.
Gerenciamento de produtos coletados:
Pedidos Não Iniciados: Caso o pedido esteja com status “não iniciado”, ele poderá ser cancelado diretamente e não teremos ação nos produtos referentes a este pedido.
Pedidos com Coletas Parciais: Se o pedido já tiver itens coletados, esses produtos serão direcionados automaticamente para a localização "ANÁLISE", impedindo novas coletas. Assim, o restante dos itens do pedido será automaticamente desconsiderado para coleta, evitando inconsistências no processo.
O WCS DEVE CRIAR UMA TELA QUE PERMITA A DEVOLUÇÃO DOS ITENS QUE ESTARÃO COM STATUS E LOCALIZAÇÃO “EM ANÁLISE”. NESTE PROCESSO SERÁ NECESSÁRIO REALIZAR A LEITURA DO ITEM E O WCS INFORMAR O LOCAL DE DEVOLUÇÃO SEGUINDO AS MESMAS REGRAS JÁ DESCRITAS NO DOCUMENTO.
PARA ESSE PROCESSO SEGUIR AS REGRAS DE SEGURANÇA DO ESTOQUE DEVERÁ REALIZAR A BAIXA NA COLETA DE PICKING E NÃO NA CONFERENCIA.
Tela de gerenciamento: Uma tela será disponibilizada para gerenciar os produtos dos pedidos cancelados, permitindo a organização por zonas, volumes e status.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas, caso necessário, e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Será disponibilizado um (1) Order Start no início da linha de separação, cuja finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Composição da Estação Order Start
A estação de Order Start será composta por:
Um computador com interface WCS
Uma impressora de etiquetas
Scanner para vínculo das caixas já etiquetadas
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
No processo de separação, existem dois cenários distintos quanto à identificação das caixas utilizadas. Para os pedidos que utilizam caixas plásticas reutilizáveis, não haverá necessidade de impressão de etiquetas no Order Start. Nesse caso, cada caixa plástica já possui uma etiqueta fixa com identificação única, cuja responsabilidade de manutenção e visibilidade é do cliente. Durante a indução no Order Start, o operador realiza a leitura dessa etiqueta fixa, e o sistema WCS realiza o vínculo entre o identificador da caixa e o pedido recebido. Esse vínculo permanece ativo ao longo de todo o processo de separação, garantindo a rastreabilidade do pedido associado àquela caixa.
Para os pedidos que não utilizam caixas padrão, como é o caso de itens de grande volume, geladeiras ou pedidos do tipo full case, será necessária a impressão de uma etiqueta virtual por volume. Essa etiqueta será gerada e impressa diretamente pelo WCS na estação de Order Start, sendo de responsabilidade do operador realizar a colagem da etiqueta no item ou volume correspondente durante a separação. A etiqueta conterá informações essenciais para a rastreabilidade, como identificador do pedido, código de barras. Dessa forma, o sistema garante que todos os volumes envolvidos no processo de separação estejam corretamente identificados e rastreáveis, independentemente do tipo de embalagem utilizada.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de separação, o WCS deverá disponibilizar uma tela específica de mapeamento de postos Flowrack. Essa funcionalidade permitirá o vínculo entre usuários (logins) e os postos de separação ativos na linha.
A tela apresentará os postos disponíveis e os usuários vinculados a cada um deles, com possibilidade de visualização em tempo real.
O vínculo poderá ser feito manualmente por um supervisor.
Por exigência da Fagron, um mesmo usuário poderá estar vinculado a múltiplos postos simultaneamente, ou seja, não haverá limitação de exclusividade por posto.
Nos demais pontos de separação fora do Flowrack (Picking Fundo), a rastreabilidade será realizada por meio do login utilizado no coletor ou PDV.
Cada operação realizada no coletor estará associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Antes de iniciar os pedidos, WCS deve validar se a quantidade de saldo nas posições é suficiente para atender os pedidos, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender o pedido, o mesmo não poderá ser iniciado e o WCS deverá seguir a operação de reabastecimento.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
No processo de separação, o ponto de Order Start em que o volume será iniciado depende da menor curva de giro presente no pedido. Isso significa que o WCS deve identificar, entre todos os endereços de picking do volume, qual pertence à curva de menor giro (por exemplo, picking fundou ou order start do flowrack), e a partir disso determinar o ponto inicial de separação.
Se o volume possuir itens que devem ser coletados no picking fundo, o início do processo deverá ocorrer no Order Start específico daquela área. Nessa etapa, o operador realizará a associação do pedido com a caixa plástica via coletor do cliente ou PDV (Picking Cart) e iniciará a coleta a partir da área de menor giro.
Somente após a separação na área de picking fundo, caso o volume possua itens destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do processo de separação no flowrack. Esse fluxo garante que todas as coletas nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de retrabalho ou retorno de caixas já em processo de automação.
Caso o volume inicie no order start do flowrack, o vínculo entre caixa e pedido será feito de maneira automática através do primeiro scanner da linha.
Esse critério visa otimizar o fluxo operacional, evitando que o operador tenha que retornar a áreas distantes depois de já ter passado por setores de maior giro, e garantindo que o trajeto da separação respeite uma lógica eficiente baseada na disposição física e na criticidade do picking.
Observação: A área de Marketing deixará de ser segregada dos demais processos, e será unificada com as tarefas de picking fundo, sendo realizada pelo PDV (Picking Cart).
Funcionalidades na Tela do Order Start:
Priorizar Pedidos: Na tela do Order Start, o operador terá acesso a recursos que facilitam a gestão e execução das separações. Será possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante agilidade na seleção e maior controle sobre o que deve ser iniciado no momento.
Além disso, a tela apresentará uma visualização prévia da previsão de volumes por pedido, permitindo que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico. Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela do Order Start será possível filtrar os pedidos por tipo de picking Flowrack, Picking Cart e Mobile Device. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Na tela do Order Start, será disponibilizada uma funcionalidade de visualização por tipo de separação, por exemplo: Geladeira, Polícia, Picking Fundo etc. permitindo ao operador ou supervisor filtrar os pedidos com base na categoria de cada volume. Cada tipo será representado com uma identificação visual clara, facilitando a leitura e tomada de decisão em tempo real.
Além do filtro, a tela apresentará de forma consolidada o total de volumes previstos por tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o planejamento da linha de separação e a atuação mais estratégica por parte da liderança operacional.
Funcionalidades na Tela de Pedidos
Adicionar Coluna de Status e Quantidade: Na tela de pedidos deverá conter uma coluna adicional para status e quantidade, permitindo que o operador visualize rapidamente o estado e o número de itens de cada pedido.
Filtro ou (Checkbox) para Mostrar Somente Pedidos em Aberto: Será implementado na tela de pedidos do Order Start um filtro do tipo checkbox com o rótulo "Mostrar apenas pedidos em aberto". Quando esse filtro estiver ativo, a interface exibirá exclusivamente os pedidos que ainda não foram finalizados, ou seja, aqueles com status como "pendente", "em processamento", "não iniciado" ou outros que se enquadrem na definição operacional de pedido "em aberto".
Essa funcionalidade tem como objetivo facilitar a visualização e seleção de pedidos ainda ativos, otimizando o trabalho do operador e evitando a indução acidental de volumes já finalizados. O filtro poderá ser ativado ou desativado a qualquer momento, proporcionando flexibilidade na consulta conforme a necessidade do usuário.
Categoria para Agrupar Pedidos: Na tela de pedidos, o usuário poderá agrupar os pedidos com base em diferentes categorias disponíveis no sistema. As opções de agrupamento incluirão critérios como Status do Pedido, Tipo de Cliente, Tipo de Picking e filtros personalizados relevantes à operação, como Estado (UF), ou transportadora.
Ao selecionar uma dessas categorias, o sistema automaticamente agrupará e exibirá os pedidos organizados conforme o filtro escolhido, permitindo ao operador ou supervisor ter uma visão consolidada e contextualizada da carga de trabalho.
Esse recurso facilitará:
A priorização por região ou transportadora.
O direcionamento estratégico de volumes conforme recursos disponíveis.
A análise rápida de concentração de pedidos em determinado perfil operacional.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10.docx`  
**Heading:** Layout de etiqueta order start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Dimensões da etiqueta será de ALTURA 5 X 10 LARGURA

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Opções de cancelamento que teremos no WCS:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start: Caso o pedido seja cancelado após o início do Order Start, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito antes conferência.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.
Gerenciamento de produtos coletados:
Pedidos Não Iniciados: Caso o pedido esteja com status “não iniciado”, ele poderá ser cancelado diretamente e não teremos ação nos produtos referentes a este pedido.
Pedidos com Coletas Parciais: Se o pedido já tiver itens coletados, esses produtos serão direcionados automaticamente para a localização "ANÁLISE", impedindo novas coletas. Assim, o restante dos itens do pedido será automaticamente desconsiderado para coleta, evitando inconsistências no processo.
O WCS deverá disponibilizar uma tela específica para o processo de devolução de itens que estejam com status e localização marcados como “Em Análise”. Essa funcionalidade terá como objetivo permitir o retorno seguro e controlado desses produtos ao estoque, garantindo rastreabilidade e conformidade com as regras operacionais já estabelecidas.
Durante esse processo, o operador deverá realizar a leitura do código do item a ser devolvido. A partir dessa leitura, o sistema WCS deverá identificar o item e, com base nas regras previamente definidas (como tipo de produto, lote, curva de giro, ou canal de separação), informar automaticamente o local de devolução apropriado.
Essa tela deverá seguir a mesma lógica de segurança e validação utilizada nos demais fluxos de separação, garantindo que a devolução ocorra de forma padronizada, auditável e sem riscos de quebra de acuracidade no estoque.
Tela de gerenciamento: Uma tela será disponibilizada para gerenciar os produtos dos pedidos cancelados, permitindo a organização por zonas, volumes e status.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 2.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Para iniciar o processo, o sistema Velox deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, Velox realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plástica, e induzir a caixa na linha de separação, leitor do início da linha ao realizar a leitura dessa etiqueta faz o vínculo com o primeiro volume do pedido integrado, caso não realize a leitura do código de barras da caixa, a caixa é rejeitada no início da linha.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 3.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Para iniciar o processo, o sistema Velox deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, Velox realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plástica, e induzir a caixa na linha de separação, leitor do início da linha ao realizar a leitura dessa etiqueta faz o vínculo com o primeiro volume do pedido integrado, caso não realize a leitura do código de barras da caixa, a caixa é rejeitada no início da linha.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 4.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Para iniciar o processo, o sistema MFC deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, MFC realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plástica, e induzir a caixa na linha de separação, leitor do início da linha ao realizar a leitura dessa etiqueta faz o vínculo com o primeiro volume do pedido integrado, caso não realize a leitura do código de barras da caixa, a caixa é rejeitada no início da linha.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 5.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Para iniciar o processo, o sistema MFC deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, MFC realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plástica, e induzir a caixa na linha de separação, leitor do início da linha ao realizar a leitura dessa etiqueta faz o vínculo com o primeiro volume do pedido integrado, caso não realize a leitura do código de barras da caixa, a caixa é rejeitada no início da linha.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 6.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Para iniciar o processo, o sistema MFC deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, MFC realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plástica, e induzir a caixa na linha de separação, leitor do início da linha ao realizar a leitura dessa etiqueta faz o vínculo com o primeiro volume do pedido integrado, caso não realize a leitura do código de barras da caixa, a caixa é rejeitada no início da linha.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 7.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Para iniciar o processo, o sistema MFC deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, MFC realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plástica, e induzir a caixa na linha de separação, leitor do início da linha ao realizar a leitura dessa etiqueta faz o vínculo com o primeiro volume do pedido integrado, caso não realize a leitura do código de barras da caixa, a caixa é rejeitada no início da linha.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 8.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Para iniciar o processo, o sistema MFC deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Antes de iniciar os pedidos, Velox deve validar se a quantidade de saldo nas posições é suficiente para atender os pedidos, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender o pedido, o mesmo não poderá ser iniciado e o Velox deverá seguir a operação de reabastecimento.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, MFC realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plástica, e induzir a caixa na linha de separação, leitor do início da linha ao realizar a leitura dessa etiqueta faz o vínculo com o primeiro volume do pedido integrado, caso não realize a leitura do código de barras da caixa, a caixa é rejeitada no início da linha.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Antes de iniciar os pedidos, WCS deve validar se a quantidade de saldo nas posições são suficientes para atender os pedidos, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender o pedido, o mesmo não poderá ser iniciado e o WCS deverá seguir a operação de reabastecimento.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plástica, e induzir a caixa na linha de separação, leitor do início da linha ao realizar a leitura dessa etiqueta faz o vínculo com o primeiro volume do pedido integrado, caso não realize a leitura do código de barras da caixa, a caixa é rejeitada no início da linha.
Funcionalidades na Tela do Order Start:
Priorizar Pedidos: Na tela do Order Start será possível organizar os pedidos de acordo com sua prioridade, permitindo que o operador visualize somente os pedidos em aberto por exemplo e tenha acesso rápido ao status e à quantidade de itens.
Visualização por tipo de Picking: Na tela do Order Sserá possível filtrar os pedidos por tipo de picking Flowrack, Picking Cart e Mobile Device. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Visualizar apenas Pedidos em Aberto: Haverá um filtro ou flag para mostrar somente os pedidos em aberto, o que permitirá ao operador focar nos pedidos que ainda não foram iniciados ou que estão pendentes.
Adicionar Coluna de Status e Quantidade: A tela de Order Start exibirá uma coluna adicional para status e quantidade, permitindo que o operador visualize rapidamente o estado e o número de itens de cada pedido.
Priorizar o Maior Pedido: A integração do WCS com o WMS deve garantir que o maior pedido da fila seja identificado e removido automaticamente da fila para ser processado primeiro.
Filtro ou (Checkbox) para Mostrar Somente Pedidos em Aberto: Será criado na tela de pedidos um filtro ou checkbox chamado "Mostrar apenas pedidos em aberto". Para permitir ao usuário visualizar apenas os pedidos em aberto, quando o filtro estiver ativo, a tela exibirá somente os pedidos que ainda estão em aberto, ou seja, com o status pendente, em processamento, não iniciado, ou conforme o critério de "aberto" definido pela operação.
Categoria para Agrupar Pedidos: Na tela de pedidos, o usuário pode selecionar a categoria pela qual deseja agrupar os pedidos. Por um menu lateral por exemplo, onde o usuário escolhe "Agrupar por Status", "Agrupar por Tipo de Cliente", etc.
O sistema exibirá os pedidos agrupados de acordo com a categoria selecionada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9_Old.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
Para iniciar o processo, o sistema MFC deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Antes de iniciar os pedidos, Velox (MFC) deve validar se a quantidade de saldo nas posiçoes são suficientes para atender os pedidos, com isso faz a liberaçao para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender o pedido, o mesmo não poderá ser iniciado e o Velox (MFC) deverá seguir a operação de reabastecimento.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, MFC realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plástica, e induzir a caixa na linha de separação, leitor do início da linha ao realizar a leitura dessa etiqueta faz o vínculo com o primeiro volume do pedido integrado, caso não realize a leitura do código de barras da caixa, a caixa é rejeitada no início da linha.
Funcionalidades na Tela do Order Start:
Priorizar Pedidos: A tela de Order Start será responsável por organizar os pedidos de acordo com sua prioridade, permitindo que o operador visualize pedidos em aberto e tenha acesso rápido às informações sobre status e quantidade de itens.
Visualizar Apenas Pedidos em Aberto: Haverá um filtro ou flag para mostrar somente os pedidos em aberto, o que permitirá ao operador focar nos pedidos que ainda não foram iniciados ou que estão pendentes.
Priorizar o Maior Pedido: A integração do MFC com o WMS deve garantir que o maior pedido da fila seja identificado e removido automaticamente da fila para ser processado primeiro.
Adicionar Coluna de Status e Quantidade: A tela de Order Start exibirá uma coluna adicional para status e quantidade, permitindo que o operador visualize rapidamente o estado e o número de itens de cada pedido.
Filtro ou (Checkbox) para Mostrar Somente Pedidos em Aberto: Será criado na tela de pedidos um filtro ou checkbox chamado "Mostrar apenas pedidos em aberto". Para permitir ao usuário visualizar apenas os pedidos em aberto, quando o filtro estiver ativo, a tela exibirá somente os pedidos que ainda estão em aberto, ou seja, com o status pendente, em processamento, não iniciado, ou conforme o critério de "aberto" definido pela operação.
Categoria para Agrupar Pedidos: Na tela de pedidos, o usuário pode selecionar a categoria pela qual deseja agrupar os pedidos. Por um menu lateral por exemplo, onde o usuário escolhe "Agrupar por Status", "Agrupar por Tipo de Cliente", etc.
O sistema exibirá os pedidos agrupados de acordo com a categoria selecionada.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.1.docx`  
**Heading:** Estações de trabalho (DESKTOP)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As estações de trabalho serão distribuídas ao longo das seguintes regiões:
Order Start de Curva A (Responsabilidade do Cliente)
Order Start de Curva B (Responsabilidade do Cliente)
Order Start de Curva C (Responsabilidade do Cliente)
Estação de impressão (FullCase) (Responsabilidade do Cliente)
Estação de rejeito (Responsabilidade do Cliente)
Estação Cubômetro (1 computador por cubômetro) (Responsabilidade do Cliente)
Estação PTM (1 computador por tela) (Responsabilidade do Cliente)

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.2.docx`  
**Heading:** Priorização de pedidos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada Order Start terá disposto na tela a função de priorização de pedidos, sendo possível selecionar um ou mais volumes para priorizar, sendo prioridade 1 a prioridade máxima e a prioridade 5 a prioridade mínima. Em casos de mais de um volume selecionado a Velox ira seguir com um segundo critério de priorização utilizando a fila já existente no Order Start, ou seja, quando 2 (dois) ou mais pedimos forem priorizados com o mesmo numero de prioridade, o primeiro a ficar disponível para sair do Order Start, será o que estiver mais próximo ao topo da lista.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.2.docx`  
**Heading:** Estações de trabalho (DESKTOP)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As estações de trabalho serão distribuídas ao longo das seguintes regiões:
Order Start de Curva A (Responsabilidade do Cliente)
Order Start de Curva B (Responsabilidade do Cliente)
Order Start de Curva C (Responsabilidade do Cliente)
Estação de impressão (FullCase) (Responsabilidade do Cliente)
Estação de rejeito (Responsabilidade do Cliente)
Estação Cubômetro (1 computador por cubômetro) (Responsabilidade do Cliente)
Estação PTM (1 computador por tela) (Responsabilidade do Cliente)

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.3.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O início de todo processo de separação ocorre no Order Start, cada método de separação tem suas particularidades, porém em todos eles contêm uma tabela (lista) de pedidos segue abaixo os Order Start de cada método:

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.3.docx`  
**Heading:** Telas de Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para atender a necessidade solicitada pelo time do cliente algumas funcionalidades já citadas acima serão adicionadas nas telas de Order Starts, segue abaixo o esboço do layout dessa tela:

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.3.docx`  
**Heading:** Estações de trabalho (DESKTOP)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As estações de trabalho serão distribuídas ao longo das seguintes regiões:
Order Start de Curva A (Responsabilidade do Cliente)
Order Start de Curva B (Responsabilidade do Cliente)
Order Start de Curva C (Responsabilidade do Cliente)
Estação de impressão (Full Case) (Responsabilidade do Cliente)
Estação de rejeito (Responsabilidade do Cliente)
Estação Cubômetro (1 computador por cubômetro) (Responsabilidade do Cliente)
Estação PTM (1 computador por tela) (Responsabilidade do Cliente)

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Processo operacional  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O operador após de realizar o processo de login no Velox através do desktop do Order Start deve selecionar o Order Start correspondente corredor e nível, após essa seleção o operador irá visualizar os volumes que estão aguardando para serem liberados, após esse processo o operador pode se orientar através das informações compostas na tabela (Ordem, Volume, Qtd itens, Loja, Tipo de caixa).
O Velox irá aguardar uma informação de leitura que deve informar um código de caixa plástica ou caixa de papelão, nesse momento não será avaliado o cadastro de loja, ficando a decisão inteiramente ao operador se o volume será separado em uma caixa plástica ou uma caixa de papelão.
O Velox irá obedecer a ordem de integração FIFO ou a ordem de priorização para realizar o vínculo dos pedidos a cada código de caixa informado no Order Star.
Segue abaixo as duas formas de separação:
Caixa plástica: Ao indicar um código presente no range de caixa plástica (reutilizável como informado no item 5.) o Velox fará o vinculo do volume a etiqueta da caixa plástica e também emitirá a etiqueta WISPL do volume, para que o operador insira a etiqueta dentro da caixa para que no setor de Packing a mesma seja colada nas dependências da caixa ou nos lacres dos volumes, o Velox sempre informará um volume por vez e irá aguardar a informação da caixa plástica, ou seja, mesmo que o operador informe 5 volumes o Velox irá informar um volume por vez pedido o numero da caixa plástica, enquanto o número da caixa plástica não é informado para que o Velox realize o vinculo do volume, caixa plástica e etiqueta WISPL o Velox não libera a próximo volume para o vinculo de caixa e etiqueta.
Caixa de papelão: Ao indicar um código através da etiqueta fixa impressa reservada no Order Start, o Velox irá identificar qual o tamanho da caixa que irá transportar os volumes do pedido em questão, o Velox não fará validação em relação ao tamanho da caixa, caso exista um erro operacional a funcionalidade de pedir caixa deve ser acionada no processo de picking.
Velox fará a impressão da etiqueta WISPL onde  o operador deve colar a etiqueta em uma área onde os scanners das automações possam realizar a leitura do código dessa etiqueta. O valor do código da etiqueta WISPL será utilizado pelo Velox para realizar todo o processo de separação e alocação no PTL.
NOTA: É de responsabilidade da operação (Cliente) a informação correta no momento do vínculo de caixa, o Velox não fará validações sobre os vínculos de tipo de caixa no processo descrito acima.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Telas de Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para atender a necessidade solicitada pelo time do cliente algumas funcionalidades já citadas acima serão adicionadas nas telas de Order Starts, segue abaixo o esboço do layout dessa tela:

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na estação de Order Start deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) impressora etiquetadora (Ex: Zebra)
Abaixo segue a configuração mínima para o desktop para a estação de Order Start:

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na estação de Order Start deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) impressora etiquetadora (Ex: Zebra)
Abaixo segue a configuração mínima para o desktop para a estação de Order Start:

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV1.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o Order start será composto com uma estação de trabalho com desktop para realizar as possíveis buscas de remessas já disponíveis para serem separadas, com isso o operador fará a leitura do código de barras da caixa plástica para que o sistema faça o vínculo da caixa a uma remessa, com isso induz a caixa plástica na linha de separação, para que a caixa seja lida no próximo leitor fixo de código de barras da linha de separação.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV2.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o Order start será composto com uma estação de trabalho com desktop para realizar as possíveis buscas de remessas já disponíveis para serem separadas, com isso o operador fará a leitura do código de barras da caixa plástica para que o sistema faça o vínculo da caixa a uma remessa, com isso induz a caixa plástica na linha de separação, para que a caixa seja lida no próximo leitor fixo de código de barras da linha de separação.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV3.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o Order start será composto com uma estação de trabalho com desktop para realizar as possíveis buscas de remessas já disponíveis para serem separadas, com isso o operador fará a leitura do código de barras da caixa plástica para que o sistema faça o vínculo da caixa a uma remessa, com isso induz a caixa plástica na linha de separação, para que a caixa seja lida no próximo leitor fixo de código de barras da linha de separação.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV4.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o Order start será composto com uma estação de trabalho com desktop para realizar as possíveis buscas de remessas já disponíveis para serem separadas, com isso o operador fará a leitura do código de barras da caixa plástica para que o sistema faça o vínculo da caixa a uma remessa/pedido, com isso induz a caixa plástica na linha de separação, para que a caixa seja lida no próximo leitor fixo de código de barras da linha de separação.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV5.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o Order start será composto com uma estação de trabalho com desktop para realizar as possíveis buscas de remessas já disponíveis para serem separadas, com isso o operador fará a leitura do código de barras da caixa plástica para que o sistema faça o vínculo da caixa a uma remessa/pedido, com isso induz a caixa plástica na linha de separação, para que a caixa seja lida no próximo leitor fixo de código de barras da linha de separação.
Antes de iniciar a operação no order start, operador deverá acessar a tela de cadastro de IO e nomear o campo de impressora, que será integrado ao WMS no momento da conferência.
Com isso, quando o usuário nomear a impressora, na integração de confirmação será enviado essa informação cadastrada no campo “PRINTER”.
Para que assim, WMS saiba em qual impressora deverá realizar a impressão da etiqueta.
Em casos que não tenha nenhuma impressora nomeada no Velox, operador receberá mensagem de erro ao tentar confirmar a conferência.
Operador terá que realizar o cadastro da impressora, e realizar a conferencia novamente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o Order start será composto com uma estação de trabalho com desktop para realizar as possíveis buscas de remessas já disponíveis para serem separadas, com isso o operador fará a leitura do código de barras da caixa plástica para que o sistema faça o vínculo da caixa a uma remessa/pedido, com isso induz a caixa plástica na linha de separação, para que a caixa seja lida no próximo leitor fixo de código de barras da linha de separação.
Antes de iniciar a operação no order start, operador deverá acessar a tela de cadastro de IO e nomear o campo de impressora, que será integrado ao WMS no momento da conferência.
Com isso, quando o usuário nomear a impressora, na integração de confirmação será enviado essa informação cadastrada no campo “PRINTER”.
Para que assim, WMS saiba em qual impressora deverá realizar a impressão da etiqueta.
Em casos que não tenha nenhuma impressora nomeada no Velox, operador receberá mensagem de erro ao tentar confirmar a conferência.
Operador terá que realizar o cadastro da impressora, e realizar a conferencia novamente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA.docx`  
**Heading:** Order Start  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será 1 (um) Order Start no início da linha de separação, o Order start será composto com uma estação de trabalho com desktop para realizar as possíveis buscas de remessas já disponíveis para serem separadas, com isso o operador fará a leitura do código de barras da caixa plástica para que o sistema faça o vínculo da caixa a uma remessa, com isso induz a caixa plástica na linha de separação, para que a caixa seja lida no próximo leitor fixo de código de barras da linha de separação.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** ORDER START  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O início de todo processo de separação ocorre no Order Start.
Cada Order Start tem suas particularidades para processamento, ou seja, processo que ocorre no Térreo será diferente do que ocorre no 1º nível.
Teremos dois níveis de separação:
Térreo - Full Case e Reabastecimento
1º Nível: Separação dos itens Fracionados.
Térreo Full Case e Reabastecimento:
Full case com vários pedidos que irá diretamente para o Sorter,
Full case para reabastecimento. No final da linha haverá  um desviador para encaminhar as caixas para reabastecimento dos flowracks.
Full case irá para o 1º nível para separação dos itens fracionados. A separação será por lotes de pedidos, operador pega 1 item e coloca em outra caixa, misturando vários itens para o mesmo pedido.
Fracionados:  será iniciado em um Order Start, localizado no início da linha de separação, teremos 3 tamanhos de caixa: P,M,G. Este ponto contará com:
Estação de trabalho equipada com computador e impressora de etiquetas.
Funções principais do operador:
Alocar as etiquetas nas caixas de transporte .
Tratamento de erros de leitura de etiquetas, permitindo a impressão de novas etiquetas e a reinserção manual da caixa no Order Start.
Linha interna com transferência, o picking seria via led pbl, 1 led por posição.
Diagrama da área:
Integração e Recebimento de Pedidos
O sistema MFC receberá, via integração, apenas as informações necessárias para a separação dos itens na operação, conforme detalhado no item 3. Pedido Separação. Com base nesses dados, o sistema executará a separação pré-determinada:
A quantidade necessária de caixas para atender a separação de cada pedido.
A referência dos tamanhos das caixas pedido (papelão), nos tamanhos PP, P, M e G.
A fila de trabalho, exibida na tela do Order Start, onde o operador poderá consultar os pedidos e as caixas associadas, gerenciadas conforme a volumetria calculada pelo WMS.
O order start terá uma tarefa automatizada para que o operador não tenha necessidade de consultar a tela de order start. A liberação da caixa na  linha, será de responsabilidade do sistema MFC, seguindo a order de prioridade de pedido.
Terá um sensor em cada linha, onde enviara uma mensagem ao sistema MFC se há caixa nas linhas (P-M-G). Liberando o sistema MFC a enviar uma mensagem de confirmação de liberação de caixa para vinculação de pedidos. Sendo assim a ordem de impressão de etiqueta seguirá conforme o disparo das caixa na linha.
Tipos de Caixas e Transporte
Os volumes a serem transportados nas esteiras serão caixas de papelão:
Disponíveis em três tamanhos: P, M e G.
São induzidas individualmente em suas respectivas linhas de separação e direcionadas para a esteira expressa (única).
Obrigatório que todos os produtos estejam totalmente acomodados dentro das caixas de papelão antes do transporte.
3. Processo de Impressão de Etiquetas
À medida que acontece a integração, o colaborador já pode solicitar a impressão, para gerar as etiquetas.
Existem dois layouts principais de etiquetas:
MATRIZ e FILIAL.
Cinco layouts específicos para marketplaces.
4. Vinculação e Tratamento de Erros
A definir.
Priorização
Teremos uma tela controle de pedidos, onde o operador poderá priorizar a sequência do disparo dos pedidos no order start em dois módulos:
Por ordem de prioridade
Onde terá uma sequência numérica de 1 a 5 decrescente, onde o número 5 está em primeira ordem.
Por tamanho de caixa
Onde a sequência será priorizada pelo tipo de caixa, se o tipo de caixa foi selecionado M, o sistema MFC fará todos os volumes com caixa M ate ser finalizada.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Order Start Fracionado  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos previstos, incluindo os dados de cubagem e quantidade de cada item. O WCS identifica os pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In, First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados. Com base nas informações recebidas, o WCS realiza o cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada tarefa (pedido). O sistema calcula quantos volumes serão necessários para cada tarefa.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start, onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada tarefa com base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o processo de separação do pedido.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na estação de Order Start deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) impressora etiquetadora (Ex: Zebra)
01 (um) Leitor de código de barras – Ex: Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de Order Start:

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 3.docx`  
**Heading:** 4.1.6.		Reindução pós Conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O operador após receber o volume no setor do “Hospital” deverá realizar as tratativas necessárias no WMS para realizar a consulta no WCS se o volume pode ser reinduzido na automação.
Os volumes que serão consultados se podem ou não serem induzidos novamente devem ser direcionados para o order start. O operador deverá realizar a leitura de volume a volume para obter o retorno.
O WCS irá consultar cada volume lido no WMS através da URL abaixo:
https://replyservername.com/api/putOnBelt?shuCode=SHU0000001

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 3.docx`  
**Heading:** Estações de trabalho  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As estações de trabalho serão distribuídas ao longo das seguintes regiões:
Order Start (01) (WMS)
01 (um) Desktop
01 (um) Impressora
Abaixo segue a configuração mínima para os desktops para as estações de trabalho:

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** 4.1.6.		Reindução pós Conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O operador após receber o volume no setor do “Hospital” deverá realizar as tratativas necessárias no WMS para realizar a consulta no WCS se o volume pode ser reinduzido na automação.
Os volumes que serão consultados se podem ou não serem induzidos novamente devem ser direcionados para o order start. O operador deverá realizar a leitura de volume a volume para obter o retorno.
O WCS realizará a consulta de cada volume lido no WMS utilizando uma URL conforme o exemplo abaixo:
https://replyservername.com/api/putOnBelt?shuCode=SHU0000001

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Estações de trabalho  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As estações de trabalho serão distribuídas ao longo das seguintes regiões:
Order Start (01) (WMS)
01 (um) Desktop
01 (um) Impressora
Abaixo segue a configuração mínima para os desktops para as estações de trabalho:

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Order Start  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema WCS deve permitir a opção de usar qualquer Order Start presente na linha seja no início da automação ou dos mezaninos conforme as necessidades de fluxo de trabalho, prioridades ou contingência.
Nos demais andares, o Order Start dos níveis devem exibir apenas volumes que irão passar nos postos subsequentes daquele ponto.
A operação deve organizar as caixas próximas ao Order Start para indução.
Teremos dois tipos de Order Start segregados:
Caixas Plásticas Pedidos B2C: Cada caixa plástica já possui uma etiqueta fixa (RG da Caixa). Cada caixa será vinculada a uma Service HU gerada pelo WMS. Essa associação entre a caixa plástica e Service HU será realizada diretamente no order start do WCS, que informará ao WMS o RG da caixa plástica a ser utilizada durante a separação nos níveis.
Após esse vínculo poderá realizar a indução do volume na automação.
Caixas de Papelão B2B: Cada caixa de papelão recebe etiquetas aplicadas no momento da indução no Order Start, processo controlado diretamente pelo WCS. Cada etiqueta impressa corresponde a uma tarefa de picking gerada pelo WMS, na qual o operador pode alterar as prioridades de saída. O operador define a quantidade de etiquetas a serem impressas, aplica-as nas caixas correspondentes e realiza a indução na linha.
Informações que precisamos ter nas telas do Order Start:
No Order Start deve ser possível priorizar os volumes pelas características abaixo:
Por Onda: As caixas são ordenadas da maior para a menor quantidade de pedidos.
Por Tamanho de Caixa: Etiquetas são ordenadas de acordo com o tamanho das caixas, da maior para a menor.
Por Pedido: Selecionando o número do pedido necessário.
Indicador de Total de Caixas: Integrado e Em Separação
A tela de OS (Order Start) deve exibir um indicador visual que mostre o total de caixas que estão apenas integradas no sistema e quantas caixas já estão sendo separadas na automação. Este indicador ajuda os operadores a monitorarem o progresso da impressão e a identificar quando o processo de impressão está completo.
O contador será atualizado automaticamente à medida que os pedidos forem integrados, as caixas forem induzidas na automação e finalizadas por meio da integração ou do processo PTW.
Controle de Prioridade: O WCS deve permitir a operação ajustar as prioridades para os pedidos dentro de uma onda, direcionando os itens mais urgentes ou com prazos mais curtos para que sejam processados primeiro. Após a alteração da prioridade a informação de “priority” enviada na integração de pedidos pelo WMS será descartada.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Controle de Liberação de Ondas B2C Multi (Order Start)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Por escolha dos times TPC/Puma e Reply, a criação das ondas de pedidos B2C Multi será realizada de forma manual, sem a aplicação de regras automáticas de controle ou validação de capacidade do PTW (Put to Wall).
Os volumes poderão ser iniciados livremente no Order Start, e o WMS continuará responsável pelo envio das integrações de separação e liberação dos volumes conforme o fluxo padrão estabelecido.
Observação: A liberação de ondas que excedam a capacidade do PTW representa um risco operacional relevante, podendo ocasionar travamentos nas estações e impacto direto na eficiência do processo.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Order Start - Portais de entrada  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Existem portais de entrada na automação, onde a operação pode utilizar quaisquer portais de entrada para qualquer produto.
Antes da indução de pallets no portal de entrada é necessário realizar as integrações SAP 
WCS Velox.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Order Start -  Portais de entrada  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Existem portais de entrada na automação, onde a operação pode utilizar quaisquer portais de entrada para qualquer produto.
Antes da indução de pallets no portal de entrada é necessário realizar as integrações SAP 
WCS Velox.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Order Start -  Portais de entrada  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Existem portais de entrada na automação, onde a operação pode utilizar quaisquer portais de entrada para qualquer produto.
Antes da indução de pallets no portal de entrada é necessário realizar as integrações SAP 
WCS Velox.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Order Start -  Portais de entrada  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Existem portais de entrada na automação, onde a operação pode utilizar quaisquer portais de entrada para qualquer produto.
Antes da indução de pallets no portal de entrada é necessário realizar as integrações SAP 
WCS Velox.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Nível 3  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O Order Start Nível 3 será utilizado quando a coleta do item iniciar neste nível, podendo ou não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas as tarefas de separação que iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Nível 2  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start Nível 2 será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Nível 1  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start Nível 1 será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Térreo  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Order Start Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis 1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo, onde são exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2 ou 3.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO BANCO DE DADOS - Rev1.docx`  
**Heading:** PROCEDURE: SP_INTEG_ONDA  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Objetivo:
Integrar as novas ondas para serem tratadas pelo SORTER.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20.docx`  
**Heading:** Tarefa Venus (Recebimento Venus)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Envio de uma tarefa(pedido) para o sistema MFC (Invent), nesse caso a separação pode ocorrer na operação de Venus e apenas nos flowracks da automação Invent de produtos designados em Venus.
Origem: WMS (JDA)
Destino: MFC (Invent)
Metodo: POST
Json:
{
"pedido": "8418692726",
"origem": "0",
"forcarConferencia": "True",
"habilitaConferenciaDePeso": "True",
"habilitaConferenciaDeVolume": "True",
"ponumber": "BRB3444014",
"datapagamento": "27072022",
"tipopedido": "PTL",
"servico": "SEQUOIA",
"canal": "WEBSITE",
"notafiscal": "002367723",
"serienf": "001",
"dataemissao": "20220525",
"chaveacesso": "35200960409075054082550050000183061634387040",
"vlrtotal": 27.15,
"cpfcnpjdest": "33103504870",
"iedest": "ISENTO",
"nomedest": "Priscilla Rodrigues de Almeida Tana",
"enderdest": "Rua Oswaldo Cruz,282",
"complementodest": "Casa 1",
"referenciadest": "Prox. a Praia",
"bairrodest": "Boqueirao",
"cidadedest": "Santos",
"cepdest": "11045-100",
"zip_code_complementdest": "00000",
"zip_code_validatordest": "0",
"zip_code_idvdest": "51",
"ufdest": "SP",
"cpfcnpjrem": "60409075054082",
"ierem": "734030112115",
"nomerem": "NESTLE BRASIL LTDA - DOLCE GUSTO",
"enderrem": "Rodovia Presidente Castello Branco 3355 Galpão 300 Bloco A Setor 1 / Estiva",
"complementorem": "Casa 1",
"referenciarem": "",
"bairrorem": "Estiva I",
"cidaderem": "ARACARIGUAMA",
"ceprem": "18147903",
"zip_code_complement_rem": "00000",
"ufrem": "SP",
"protocolo": "135220684373965",
"dataautorizacao": "20220525230856",
"volumetotal": 5,
"dataintegracaosap": "20220525143300",
"complementos": [
{
"tiposep": "POLLUX VENUS",
"polluxvenusdetail": {
"box": [
{
"box_id": "SHP001",
"volumeatual": 1,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924965",
"barcode": "0004924965001002",
"tipoDaCaixa": "P30",
"tipo": "MONO",
"traceability_code": "OK234755567BR",
"customized_message": "Pollux Cx 4 Premades",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924965",
"iata": "CCM",
"iata_route": "003"
},
"premades": [
{
"premade_id": "8418692725-1",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-2",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-3",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-4",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
}
]
},
{
"box_id": "SHP002",
"volumeatual": 2,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924966",
"barcode": "0004924966001003",
"tipoDaCaixa": "P30",
"tipo": "MONO",
"traceability_code": "OK234755598BR",
"customized_message": "Pollux Cx 2 Premades",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924966",
"iata": "CCM",
"iata_route": "003"
},
"premades": [
{
"premade_id": "8418692725-5",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-6",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
}
]
}
]
}
},
{
"tiposep": "POLLUX DEGUSTA",
"polluxdetail": [
{
"box": [
{
"box_id": "SHP003",
"volumeatual": 3,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"traceability_code": "OK234755995BR",
"caixa_pollux": [
{
"tarefa": "0004924967",
"complementary_bar": "0004924967001001",
"barcode": "0000000332488",
"tipo": "MONO",
"tipocaixa": "50",
"traceability_code": "OK234755995BR",
"customized_message": "DEGUSTA MONO",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924967",
"iata": "CCM",
"iata_route": "003"
},
"products": [
{
"sku": "12353804",
"quantidade": 15
}
]
}
]
},
{
"box_id": "SHP004",
"volumeatual": 4,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"traceability_code": "OK234755888BR",
"barcode": "0004924971001001",
"caixa_pollux": [
{
"tarefa": "0004924969",
"complementary_bar": "0004924971001001",
"barcode": "0000004924968",
"tipo": "UNITIZA",
"tipocaixa": "50",
"traceability_code": "0000004924969",
"customized_message": "DEGUSTA UNITIZA CX1",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924967",
"iata": "CCM",
"iata_route": "003"
},
"products": [
{
"sku": "12353804",
"quantidade": 15
}
]
},
{
"tarefa": "0004924969",
"complementary_bar": "0004924971001001",
"barcode": "0000004924970",
"tipo": "UNITIZA",
"tipocaixa": "50",
"traceability_code": "0000004924969",
"customized_message": "DEGUSTA UNITIZA CX2",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924967",
"iata": "CCM",
"iata_route": "003"
},
"products": [
{
"sku": "12353804",
"quantidade": 15
}
]
}
]
}
]
}
]
},
{
"tiposep": "PTL",
"ptldetail": [
{
"box": [
{
"box_id": "SHP005",
"volumeatual": 5,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924970",
"barcode": "0004924970001003",
"tipoDaCaixa": "D12",
"traceability_code": "OK234755599BR",
"complementary_bar": "0004924970001001",
"itens": [
{
"referencia": "12486111",
"quantidade": 25
},
{
"referencia": "12516372",
"quantidade": 25
},
{
"referencia": "12487892",
"quantidade": 1
}
]
},
{
"box_id": "SHP003",
"volumeatual": 3,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924970",
"barcode": "0004924970001005",
"tipoDaCaixa": "D12",
"traceability_code": "OK234755599BR",
"complementary_bar": "0004924967001001",
"itens": [
{
"referencia": "12486111",
"quantidade": 25
},
{
"referencia": "12516372",
"quantidade": 25
},
{
"referencia": "12487892",
"quantidade": 1
}
]
}
]
}
]
},
{
"tiposep": "PTW",
"ptwalldetail": [
{
"box": [
{
"box_id": "SHP006",
"volumeatual": 6,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924977",
"barcode": "0004924977001001",
"tipoDaCaixa": "D12",
"traceability_code": "OK234755577BR",
"complementary_bar": "0004924977001001",
"itens": [
{
"referencia": "12486111",
"quantidade": 1
}
]
}
]
}
]
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV1.docx`  
**Heading:** Tarefa Venus (Recebimento Venus)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Envio de uma tarefa(pedido) para o sistema MFC (Invent), nesse caso a separação pode ocorrer na operação de Venus e apenas nos flowracks da automação Invent de produtos designados em Venus.
Origem: WMS (JDA)
Destino: MFC (Invent)
Metodo: POST
Json:
{
"pedido": "8418692726",
"origem": "0",
"forcarConferencia": "True",
"habilitaConferenciaDePeso": "True",
"habilitaConferenciaDeVolume": "True",
"ponumber": "BRB3444014",
"datapagamento": "27072022",
"tipopedido": "PTL",
"servico": "SEQUOIA",
"canal": "WEBSITE",
"notafiscal": "002367723",
"serienf": "001",
"dataemissao": "20220525",
"chaveacesso": "35200960409075054082550050000183061634387040",
"vlrtotal": 27.15,
"cpfcnpjdest": "33103504870",
"iedest": "ISENTO",
"nomedest": "Priscilla Rodrigues de Almeida Tana",
"enderdest": "Rua Oswaldo Cruz,282",
"complementodest": "Casa 1",
"referenciadest": "Prox. a Praia",
"bairrodest": "Boqueirao",
"cidadedest": "Santos",
"cepdest": "11045-100",
"zip_code_complementdest": "00000",
"zip_code_validatordest": "0",
"zip_code_idvdest": "51",
"ufdest": "SP",
"cpfcnpjrem": "60409075054082",
"ierem": "734030112115",
"nomerem": "NESTLE BRASIL LTDA - DOLCE GUSTO",
"enderrem": "Rodovia Presidente Castello Branco 3355 Galpão 300 Bloco A Setor 1 / Estiva",
"complementorem": "Casa 1",
"referenciarem": "",
"bairrorem": "Estiva I",
"cidaderem": "ARACARIGUAMA",
"ceprem": "18147903",
"zip_code_complement_rem": "00000",
"ufrem": "SP",
"protocolo": "135220684373965",
"dataautorizacao": "20220525230856",
"volumetotal": 5,
"dataintegracaosap": "20220525143300",
"complementos": [
{
"tiposep": "POLLUX VENUS",
"polluxvenusdetail": {
"box": [
{
"box_id": "SHP001",
"volumeatual": 1,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924965",
"barcode": "0004924965001002",
"tipoDaCaixa": "P30",
"tipo": "MONO",
"traceability_code": "OK234755567BR",
"customized_message": "Pollux Cx 4 Premades",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924965",
"iata": "CCM",
"iata_route": "003"
},
"premades": [
{
"premade_id": "8418692725-1",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-2",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-3",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-4",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
}
]
},
{
"box_id": "SHP002",
"volumeatual": 2,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924966",
"barcode": "0004924966001003",
"tipoDaCaixa": "P30",
"tipo": "MONO",
"traceability_code": "OK234755598BR",
"customized_message": "Pollux Cx 2 Premades",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924966",
"iata": "CCM",
"iata_route": "003"
},
"premades": [
{
"premade_id": "8418692725-5",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-6",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
}
]
}
]
}
},
{
"tiposep": "POLLUX DEGUSTA",
"polluxdetail": [
{
"box": [
{
"box_id": "SHP003",
"volumeatual": 3,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"traceability_code": "OK234755995BR",
"caixa_pollux": [
{
"tarefa": "0004924967",
"complementary_bar": "0004924967001001",
"barcode": "0000000332488",
"tipo": "MONO",
"tipocaixa": "50",
"traceability_code": "OK234755995BR",
"customized_message": "DEGUSTA MONO",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924967",
"iata": "CCM",
"iata_route": "003"
},
"products": [
{
"sku": "12353804",
"quantidade": 15
}
]
}
]
},
{
"box_id": "SHP004",
"volumeatual": 4,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"traceability_code": "OK234755888BR",
"barcode": "0004924971001001",
"caixa_pollux": [
{
"tarefa": "0004924969",
"complementary_bar": "0004924971001001",
"barcode": "0000004924968",
"tipo": "UNITIZA",
"tipocaixa": "50",
"traceability_code": "0000004924969",
"customized_message": "DEGUSTA UNITIZA CX1",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924967",
"iata": "CCM",
"iata_route": "003"
},
"products": [
{
"sku": "12353804",
"quantidade": 15
}
]
},
{
"tarefa": "0004924969",
"complementary_bar": "0004924971001001",
"barcode": "0000004924970",
"tipo": "UNITIZA",
"tipocaixa": "50",
"traceability_code": "0000004924969",
"customized_message": "DEGUSTA UNITIZA CX2",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924967",
"iata": "CCM",
"iata_route": "003"
},
"products": [
{
"sku": "12353804",
"quantidade": 15
}
]
}
]
}
]
}
]
},
{
"tiposep": "PTL",
"ptldetail": [
{
"box": [
{
"box_id": "SHP005",
"volumeatual": 5,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924970",
"barcode": "0004924970001003",
"tipoDaCaixa": "D12",
"traceability_code": "OK234755599BR",
"complementary_bar": "0004924970001001",
"itens": [
{
"referencia": "12486111",
"quantidade": 25
},
{
"referencia": "12516372",
"quantidade": 25
},
{
"referencia": "12487892",
"quantidade": 1
}
]
},
{
"box_id": "SHP003",
"volumeatual": 3,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924970",
"barcode": "0004924970001005",
"tipoDaCaixa": "D12",
"traceability_code": "OK234755599BR",
"complementary_bar": "0004924967001001",
"itens": [
{
"referencia": "12486111",
"quantidade": 25
},
{
"referencia": "12516372",
"quantidade": 25
},
{
"referencia": "12487892",
"quantidade": 1
}
]
}
]
}
]
},
{
"tiposep": "PTW",
"ptwalldetail": [
{
"box": [
{
"box_id": "SHP006",
"volumeatual": 6,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924977",
"barcode": "0004924977001001",
"tipoDaCaixa": "D12",
"traceability_code": "OK234755577BR",
"complementary_bar": "0004924977001001",
"itens": [
{
"referencia": "12486111",
"quantidade": 1
}
]
}
]
}
]
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV2.docx`  
**Heading:** Tarefa Venus (Recebimento Venus)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Envio de uma tarefa(pedido) para o sistema MFC (Invent), nesse caso a separação pode ocorrer na operação de Venus e apenas nos flowracks da automação Invent de produtos designados em Venus.
Origem: WMS (JDA)
Destino: MFC (Invent)
Metodo: POST
Json:
{
"pedido": "8418692726",
"origem": "0",
"forcarConferencia": "True",
"habilitaConferenciaDePeso": "True",
"habilitaConferenciaDeVolume": "True",
"ponumber": "BRB3444014",
"datapagamento": "27072022",
"tipopedido": "PTL",
"servico": "SEQUOIA",
"canal": "WEBSITE",
"notafiscal": "002367723",
"serienf": "001",
"dataemissao": "20220525",
"chaveacesso": "35200960409075054082550050000183061634387040",
"vlrtotal": 27.15,
"cpfcnpjdest": "33103504870",
"iedest": "ISENTO",
"nomedest": "Priscilla Rodrigues de Almeida Tana",
"enderdest": "Rua Oswaldo Cruz,282",
"numero": "282",
"complementodest": "Casa 1",
"referenciadest": "Prox. a Praia",
"bairrodest": "Boqueirao",
"cidadedest": "Santos",
"cepdest": "11045-100",
"zip_code_complementdest": "00000",
"zip_code_validatordest": "0",
"zip_code_idvdest": "51",
"ufdest": "SP",
"cpfcnpjrem": "60409075054082",
"ierem": "734030112115",
"nomerem": "NESTLE BRASIL LTDA - DOLCE GUSTO",
"enderrem": "Rodovia Presidente Castello Branco 3355 Galpão 300 Bloco A Setor 1 / Estiva",
"complementorem": "Casa 1",
"referenciarem": "",
"bairrorem": "Estiva I",
"cidaderem": "ARACARIGUAMA",
"ceprem": "18147903",
"zip_code_complementrem": "00000",
"zip_code_validatorrem": "0",
"zip_code_idvrem": "51",
"ufrem": "SP",
"protocolo": "135220684373965",
"dataautorizacao": "20220525230856",
"volumetotal": 5,
"dataintegracaosapStr": "20220525143300",
"situacaoPtw": "0",
"complementos": [
{
"tiposep": "POLLUX VENUS",
"polluxvenusdetail": {
"box": [
{
"box_id": "SHP001",
"volumeatual": 1,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924965",
"barcode": "0004924965001002",
"tipoDaCaixa": "P30",
"tipo": "MONO",
"traceability_code": "OK234755567BR",
"customized_message": "Pollux Cx 4 Premades",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924965",
"iata": "CCM",
"iata_route": "003"
},
"premades": [
{
"premade_id": "8418692725-1",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-2",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-3",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-4",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
}
]
},
{
"box_id": "SHP002",
"volumeatual": 2,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924966",
"barcode": "0004924966001003",
"tipoDaCaixa": "P30",
"tipo": "MONO",
"traceability_code": "OK234755598BR",
"customized_message": "Pollux Cx 2 Premades",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924966",
"iata": "CCM",
"iata_route": "003"
},
"premades": [
{
"premade_id": "8418692725-5",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
},
{
"premade_id": "8418692725-6",
"customized_message": "Pollux Cx 4 Premades",
"products": [
{
"sku": "12353804",
"quantidade": 30
}
]
}
]
}
]
}
},
{
"tiposep": "POLLUX DEGUSTA",
"polluxdetail": [
{
"box": [
{
"box_id": "SHP003",
"volumeatual": 3,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"traceability_code": "OK234755995BR",
"caixa_pollux": [
{
"tarefa": "0004924967",
"complementary_bar": "0004924967001001",
"barcode": "0000000332488",
"tipo": "MONO",
"tipocaixa": "50",
"traceability_code": "OK234755995BR",
"customized_message": "DEGUSTA MONO",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924967",
"iata": "CCM",
"iata_route": "003"
},
"products": [
{
"sku": "12353804",
"quantidade": 15
}
]
}
]
},
{
"box_id": "SHP004",
"volumeatual": 4,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"traceability_code": "OK234755888BR",
"barcode": "0004924971001001",
"caixa_pollux": [
{
"tarefa": "0004924969",
"complementary_bar": "0004924971001001",
"barcode": "0000004924968",
"tipo": "UNITIZA",
"tipocaixa": "50",
"traceability_code": "0000004924969",
"customized_message": "DEGUSTA UNITIZA CX1",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924967",
"iata": "CCM",
"iata_route": "003"
},
"products": [
{
"sku": "12353804",
"quantidade": 15
}
]
},
{
"tarefa": "0004924969",
"complementary_bar": "0004924971001001",
"barcode": "0000004924970",
"tipo": "UNITIZA",
"tipocaixa": "50",
"traceability_code": "0000004924969",
"customized_message": "DEGUSTA UNITIZA CX2",
"shipping_company": {
"identifier": 64,
"card_number": "9912287011",
"carton": "0004924967",
"iata": "CCM",
"iata_route": "003"
},
"products": [
{
"sku": "12353804",
"quantidade": 15
}
]
}
]
}
]
}
]
},
{
"tiposep": "PTL",
"complementoPtl": {
"box": [
{
"box_id": "SHP005",
"volumeatual": 5,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924970",
"barcode": "0004924970001003",
"tipoDaCaixa": "D12",
"traceability_code": "OK234755599BR",
"complementary_bar": "0004924970001001",
"shippingCompany": {
"identifier": 96,
"card_number": "9912287011",
"regionalCode": "GCCAP/CTE JAGUARE"
},
"itens": [
{
"referencia": "12486111",
"quantidade": 25
},
{
"referencia": "12516372",
"quantidade": 25
},
{
"referencia": "12487892",
"quantidade": 1
}
]
},
{
"box_id": "SHP003",
"volumeatual": 3,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924970",
"barcode": "0004924970001005",
"tipoDaCaixa": "D12",
"traceability_code": "OK234755599BR",
"complementary_bar": "0004924967001001",
"shippingCompany": {
"identifier": 96,
"card_number": "9912287011",
"regionalCode": "GCCAP/CTE JAGUARE"
},
"itens": [
{
"referencia": "12486111",
"quantidade": 25
},
{
"referencia": "12516372",
"quantidade": 25
},
{
"referencia": "12487892",
"quantidade": 1
}
]
}
]
}
},
{
"tiposep": "PTW",
"ptwalldetail": [
{
"box": [
{
"box_id": "SHP006",
"volumeatual": 6,
"pesoMiminoEsperado": 1402,
"pesoMaximoEsperado": 1402,
"volumeMinimoEsperado": 26676,
"volumeMaximoEsperado": 26676,
"tarefa": "0004924977",
"barcode": "0004924977001001",
"tipoDaCaixa": "D12",
"traceability_code": "OK234755577BR",
"complementary_bar": "0004924977001001",
"itens": [
{
"referencia": "12486111",
"quantidade": 1
}
]
}
]
}
]
}
]
}

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO BANCO DE DADOS - Rev1.docx`  
**Heading:** PROCEDURE: SP_INTEG_PRODUTO_ALTERNATIVO  
**Score:** 80.0 (fuzzy) | **Data:** 2026-06-19

Objetivo:
Integrar os produtos com códigos alternativos da onda.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Wave – Onda com diversos pedidos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WIS à VELOX
Integração para o sistema Velox receber onda de pedidos a serem processados, nessa integração deveremos saber de todos os itens que serão passados pela automação, mesmo que seja somente no dimensionador, produtos fora do padrão de tamanho de caixa e full case.
• Onda
• Pedido
• Produto
• Classe do produto
• Quantidade
• Full Case
• Endereço
• Transportadora
• Cliente (filial destino)

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** IDOC - Criação/Deleção Ondas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WCS  SAP
Integração responsável por informar que uma onda foi criada e/ou deletada dentro do sistema WCS.
Segue exemplos dos campos:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** IDOC - Criação/Deleção Ondas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WCS  SAP
Integração responsável por informar que uma onda foi criada e/ou deletada dentro do sistema WCS.
Segue exemplos dos campos:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** IDOC - Criação/Deleção Ondas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WCS  SAP
Integração responsável por informar que uma onda foi criada e/ou deletada dentro do sistema WCS.
Segue exemplos dos campos:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** IDOC - Criação/Deleção Ondas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WCS  SAP
Integração responsável por informar que uma onda foi criada e/ou deletada dentro do sistema WCS.
Segue exemplos dos campos:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** IDOC - Criação/Deleção Ondas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WCS  SAP
Integração responsável por informar que uma onda foi criada e/ou deletada dentro do sistema WCS.
Segue exemplos dos campos:

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Início de Onda  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Objetivo:
Permitir que a operação inicie ondas manualmente no Velox. O sistema só dispara as tarefas para execução interna após a operação confirmar o início da onda, garantindo que nenhuma onda seja processada automaticamente sem validação.
Fluxo de Funcionamento:
O WCS Velox recebe a criação da onda via integração.
A onda fica disponível na tela Consulta de Ondas, onde a operação pode:
Visualizar os detalhes da onda (status, json, etc).
Validar se terá necessidade de alteração antes de iniciar o processamento.
Antes do início, é possível alterar a mesma onda enviando uma nova integração para sobrescrever os dados anteriores.
Quando a operação aciona Iniciar Onda, o WCS:
Atualiza o status da onda para “Iniciada”.
Gera e dispara todas as tarefas correspondentes internamente para o módulo de separação.
Após o início da onda, novas alterações na onda não serão permitidas, garantindo consistência das tarefas já disparadas.
