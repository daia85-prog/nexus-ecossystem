# picking-cart.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** 9502c94ab2d18055

Serão utilizados 12 Picking Carts na separação dos pedidos, cada um deles possui a capacidade de 4 (Quatro) posições com LEDs e um PDV com acesso ao sistema WCS para auxílio do operador na coleta dos itens.
Serão no total 48 caixas com identificação para serem utilizadas nos processos Picking cart simultaneamente.
Para a coleta realizada pelo Picking Cart a operação possui dois tipos de itens: Frágeis e Não Frágeis. Os dois tipos não podem ser misturados na mesma caixa.
A separação será organizada por zonas, cadastradas pelo usuário conforme a necessidade operacional. As zonas serão compostas por ruas, não sendo permitido que uma mesma rua pertença a duas zonas distintas. Em um mesmo corredor poderão existir produtos conformes e não conformes misturados; entretanto, a separação de ambos ocorrerá em processos distintos, não sendo possível coletar conformes e inconformes na mesma tarefa de separação.
O sistema sempre irá priorizar o preenchimento da caixa, podendo ocorrer a separação de 2 ou mais pedidos na mesma caixa em casos que o pedido não ocupar o espaço mínimo exigido, sendo segregado posteriormente no Put to Wall, o que caracteriza a separação multi.
O processo de separação no Picking cart será realizado através de uma lista exibida no PDV com os endereços que serão visitados, quantidade e o SKU. Ao realizar a leitura do código do endereço e o EAN, irá acender os LEDs na cor azul e quantas unidades deve ser coletada para as caixas/posição que possuírem aquele SKU. O operador deve pressionar o LED para indicar ao sistema a coleta do item. O WCS também irá exibir uma lista de separação de produtos no PDV com a posição do LED e quantidade que deve ser coletada.
Caso não tenha ou tenha apenas parte do produto para coleta, o operador deve informar a quantidade que for coletada, através da unidade indicada nos Leds ou PDV, e o sistema mudará o status daquela caixa para obrigatoriamente ser passada para a área de análise de corte. A posição/item que for confirmada o corte será bloqueada para as demais levas e as tratativas serão feitas pelo time de análise de corte.
O operador deverá seguir a ordem de endereços apresentada na lista de separação. Entretanto, caso algum endereço não possa ser atendido no momento, o operador poderá utilizar a funcionalidade de pular endereço, permitindo avançar na atividade sem bloqueio do processo.
Nesse momento será enviada uma única integração de solicitação de ressuprimento para o endereço em questão, para que se possível o ressuprimento ocorra antes da finalização da coleta dos demais itens, porém não será bloqueado o endereço em questão.
Com todos os endereços visitados e realizados suas respectivas coletas, os pedidos que tiveram itens pendentes vão ter um botão de “finalizar coleta”. que terá a função de transferir as caixas para a Área de análise de corte e bloquear os endereços onde houve cortes, quando as tarefas de uma zona forem finalizadas, o WCS deverá alocar o operador em outra zona com base no cálculo de quantidade de tarefas por carrinhos operando.
Área de análise de corte (Específico para os itens conformes) será direcionada para todas as caixas que possuírem pendências de coletas (itens pendentes de separação e ShortPicking) e serão verificadas se o corte será aceito ou não.
Área de Recebimento será para colocar todas as caixas que tiveram todos os seus itens coletados e estão prontos para serem induzidos na linha. Apesar de ter muitas posições de consolidação, não haverá balanceamento por parte do WCS.
A tela de Finalização de tarefa terá duas colunas, mostrando qual caixa irá para cada área. O processo de transferência será realizado através da leitura da etiqueta da caixa e da posição final de transferência. O WCS deve validar se o destino está correto com o esperado e mostrar de maneira otimizada qual caixa está sendo realizada a transferência a cada leitura.
NOTA: o WCS não será responsável pelo balanceamento e controle de estoque das posições de Picking.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Picking Coletor  
**Score:** — (nome-topico) | **ID:** baab6e9517bdb546

O Picking coletor poderá ser realizado em qualquer rua da operação atuando como contingência, porém ele sempre será utilizado nas zonas que possuem os produtos inconformes que não são possíveis de serem passados na esteira.
O WCS deverá exibir as ruas/zonas que possuem itens inconformes, porém deve ter um botão para que as ruas com itens conformes (Picking Cart) para coleta no coletor como contingência.
Com o carrinho vinculado no Order start o coletor exibirá uma lista com endereço, quantidade e SKU para validação do WCS.
O processo para coletar o item é: realizar a leitura do endereço, então realizar a leitura do código do item (EAN/ DUN) e finaliza confirmando a quantidade coletada e realizando a leitura do número do carrinho. O WCS deve atualizar de maneira otimizada as linhas da tabela durante e após coleta dos itens. Em caso de corte nas unidades que deveriam ser coletadas, a posição/item que for confirmada o corte será bloqueada e as tratativas serão feitas pelo time de análise de corte.
O operador deverá seguir a ordem de endereços apresentada na lista de separação. Entretanto, caso algum endereço não possa ser atendido no momento, o operador poderá utilizar a funcionalidade de pular endereço, permitindo avançar na atividade sem bloqueio do processo.
Nesse momento será enviada uma única integração de solicitação de ressuprimento para o endereço em questão, para que se possível o ressuprimento ocorra antes da finalização da coleta dos demais itens, porém não será bloqueado o endereço em questão.
Com todos os endereços visitados e realizados suas respectivas coletas, os pedidos que tiveram itens pendentes vão ter um botão de “finalizar coleta”. que terá a função de transferir as caixas para a Área de análise de corte e bloquear os endereços onde houve cortes.
NOTA: o WCS não será responsável pelo balanceamento e controle de estoque das posições de Picking.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Confirmação de Picking Cart (Tela Separada)  
**Score:** — (semantico) | **ID:** 7a462e4e2be65bf6

Será disponibilizada uma tela de Confirmação de Picking Cart, separada da automação, destinada exclusivamente à confirmação das coletas realizadas fora da linha automatizada.
A tela conterá 3 campos obrigatórios para validação:
Etiqueta – Leitura do código da etiqueta do volume.
Lote – Leitura/validação do lote do produto.
EAN – Leitura do código de barras (EAN) do produto.
Ao realizar a bipagem dos 3 campos, o sistema confirmará automaticamente a coleta daquele volume fora da automação, a operação deve bipar volume a volume, a esteira da automação não é acionada ao confirmar a coleta para endereços de exceção.
A tela de confirmação deverá garantir a rastreabilidade completa do operador que está executando a leitura das caixas. O operador estará logado a tela de picking exceção correspondente, e o sistema registrará a identificação do operador vinculada a cada confirmação realizada.
O sistema deverá implementar travas sistêmicas para evitar leituras incorretas durante o processo de confirmação, incluindo:
Validação do tipo de código de barras lido (ex.: rejeitar leitura de EAN-14 quando o esperado é EAN-13).
Validação cruzada entre etiqueta, lote e EAN para garantir a correspondência correta do volume.
Bloqueio e alerta (snackbars) ao operador em caso de divergência em qualquer um dos campos, impedindo a confirmação até que a leitura correta seja realizada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 8e97de52e633a485

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação, conferência, reabastecimento, controle de saldo das posições de picking, picking cart e sorter tendo como papel fundamental a interface entre os sistemas ERP/ERP D365 F&O (GERENCIADOR DE ESTOQUES) do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o ERP D365 F&O (GERENCIADOR DE ESTOQUES) do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** fe59700ef69a843c

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes de acordo com as posições informadas no PDV.
Cada picking cart será composto com 9 posições, 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart. Nesta tela será exibido os volumes que serão iniciados no picking cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá acionar o botão Finalizar Mapeamento e seguir para a etapa de separação.
A separação dos pedidos no picking fundo deverá ser executada de forma ordenada por endereço de picking em ordem decrescente, garantindo um fluxo lógico e eficiente para o deslocamento dos operadores durante a coleta. Essa ordenação facilita a navegação pelos corredores e otimiza o percurso, reduzindo o tempo de separação.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Lote: garantindo rastreabilidade e controle de validade quando aplicável;
Unidade de medida: Para indicar quantidade a ser separada, unidade de medida do produto e se a coleta será feita em unidades, caixas, frascos, pacotes, entre outros.
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item esteja alocado para múltiplos volumes posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá, antes de alocar o item coletado, escanear o número da caixa (posição no carrinho) correspondente ao volume que está sendo separado, garantindo que a destinação correta do item seja feita.
Ao final da coleta de cada volume, o operador confirmará a separação escaneando novamente somente o código da posição da caixa no carrinho, assegurando que a separação foi concluída corretamente para aquele volume específico.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume, mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço do picking cart.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume até o order start do flowrack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.
No setor de Picking Cart que fará a separação no picking fundo, será possível que um mesmo item/lote esteja armazenado em mais de uma posição simultaneamente. Diante dessa configuração, o sistema WCS deverá ser capaz de identificar todas as posições disponíveis com o item/lote solicitado e, se necessário, distribuir a coleta entre essas posições para atender à quantidade total demandada pelo pedido.
Em situações de corte de estoque ou quando não houver quantidade suficiente em uma única posição, o WCS deverá instruir o operador a realizar uma coleta “picada”, ou seja, passando por duas ou mais posições para completar a separação daquele item/lote. Essa lógica garante maior flexibilidade no uso do estoque disponível e evita bloqueios operacionais por falta de saldo concentrado em um único endereço, mantendo a acuracidade e fluidez do processo de separação.
Além disso, o setor de Marketing será unificado ao picking fundo, ou seja, todas as posições relacionadas aos itens de Marketing serão tratadas como parte integrante do mesmo setor logístico. A separação desses itens será realizada utilizando o mesmo modelo operacional de Picking Cart, seguindo os mesmos critérios de roteirização, agrupamento por pedido e controle de coleta, centralizando a gestão de estoque e a execução das tarefas em uma única lógica de operação.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Picking Map  
**Score:** — (nome-topico) | **ID:** a9bef02ac3cbc0fd

A operação TPC será responsável por mapear as posições e itens que deverão ser alocados em cada área da célula.
Flowrack: deverá ser informado o endereço final da posição. Além disso, será necessário configurar a quantidade de unidades que compõem uma caixa, bem como o número de caixas que devem ser finalizadas para que o sistema acione o LED traseiro do flowrack, indicando a retirada de X caixas para o pallet.
Carrinho: Carrinho: Serão 6 endereços informados no picking map, cada um referente a uma posição/PTL de carrinho (pallet). Cada carrinho terá sua própria identificação de posição com PTL. Importante: nessas posições poderá haver mais de um SKU por posição, de acordo com o informado no picking map. O sistema deverá acender o LED correspondente à posição do carrinho conforme o mapeamento.
Duas posições da planilha de Picking Map devem ser mapeadas como posições de anomalias no flowhack, sendo assim deve ser preenchido apenas o campo QTD-CAIXA, QTD-RETIRADA, ENDERECO_CELULA e COD SAP (informando se é anomalia 1 ou 2) conforme mencionado no decorrer do documento.
Segue exemplo da planilha que será importada no WCS:
TECNOLOGIA SD = Tecnologia do equipamento
COD SAP = código do produto no SAP
MODELO = Descrição do produto
FAMILIA = Família do produto
QTD – CAIXAS = Quantidade de unidades deste SKU para formar uma caixa
QTD – RETIRADA = Quantidade de caixas que deve ser formada para o WCS informar a retirada , via LED, na parte de traseira do flowhack
QTD – PALLET = Quantidade que forma um pallet
ENDERECO_CELULA = Código do endereço do flowrack ou código da posição do carrinho/PTL. Para posições de carrinho, cada endereço representa um carrinho/pallet distinto, podendo conter mais de um SKU por posição conforme mapeamento.
KIT – CODIGO + Sim Card =  Informa se o produto deve solicitar a leitura de um Sim Card ou não.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** 9bbb460438c72eff

O processo de início de separação (Order Start) para a área A4 (Picking Cart) é de responsabilidade do cliente e será executado integralmente através do sistema interno KAIZEN.
Nesta etapa, não haverá uma integração específica para que o WCS comande ou gerencie as tarefas de coleta. A função do WCS se limitará a ter o cadastro prévio das caixas plásticas utilizadas na operação. É fundamental que o número de identificação de cada caixa esteja cadastrado na base de dados do WCS para que o volume possa ser devidamente reconhecido nas etapas posteriores do fluxo, como a Conferência e o Sorter.
Obs: Quando a integração de Wave tiver um pedido de Picking Cart, o campo "endereco" será enviado como "N/A".

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Fracionados A4 ( Picking Cart )  
**Score:** — (semantico) | **ID:** cfd83884fa329168

O processo de Picking Cart será de responsabilidade do cliente, onde será utilizado o “KAIZEN”.
Após finalizar o processo de coleta de todos os itens. O operador então deverá se dirigir à indução de volumes na Área de Conferência de Picking Cart, o volume seguirá para a balança e posteriormente para o packing e será induzido na esteira de Fullcase, caso seja desviado para a estação de conferência, passará por um processo de validação adicional ou correção.
Obs: A área de conferência será de responsabilidade do WCS Velox.
Referência do pedido alocado na caixa específica e não no carrinho KAIZEN

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Picking Fracionado  
**Score:** — (nome-topico) | **ID:** d49a76911867f3f6

O processo de Picking Fracionado ocorre após a impressão dos volumes no Order Start, e o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Início do Processo:
O operador induz o volume já etiquetado na esteira, e após a passagem da de papelão pelos pontos de decisão (scanner), o WCS verifica automaticamente se há algum item esperando coleta naquele posto.
Se houver coleta, o volume será desviado automaticamente para o posto correspondente. Caso contrário, o volume segue para o próximo ponto de decisão até ser identificado que a coleta deve ocorrer em algum posto específico.
Indicação Visual para Coleta:
Após o desvio, o WCS acende os LEDs de frente no posto de separação, sinalizando o local e a quantidade de itens a serem coletados.
Os LEDs de frente exibem 3 dígitos para identificar a quantidade de itens a serem coletados, sendo esses LEDs exclusivos para cada posição.
Coleta dos Itens:
O operador deve coletar fisicamente os itens solicitados, conforme indicado pelos LEDs, e realizar a leitura do EAN de cada item para validar a coleta. (a regra de bipar pode ser desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada com o apertar do LED.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um PDV para auxiliar o operador na coleta.
Coleta nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas, o WCS acende os LEDs da frente em rosa, sinalizando que a coleta será feita na parte de picking costas, além de acender os LEDs nas posições de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente, onde o WCS informa o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking, permitindo que o operador colete de maneira eficiente e sem confusão.
Finalização da Coleta:
O operador realiza a coleta de acordo com as indicações dos LEDs e valida cada item coletado através da leitura do EAN. (a regra de bipar pode ser desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada com o apertar do LED.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do PDV.
Ao acionar essa funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do volume, que será retomada no processo de Order Start com uma nova caixa.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde, indicando que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Abastecimento do Picking Cart  
**Score:** — (semantico) | **ID:** f5229e2a4a8caa11

O Picking Cart de Reabastecimento é um carrinho com múltiplas posições, configuradas previamente no WCS, que permite ao operador transportar diversas bins de uma só vez até os endereços de Picking Fracionado. O objetivo é otimizar o deslocamento do operador, levando múltiplas bins em uma única viagem.
Fluxo Operacional do Abastecimento do Picking Cart:
Identificação do Picking Cart: O operador realiza a leitura (bipa) do código identificador do picking cart. Esse código é o identificador único do carrinho no sistema WCS, e deve estar previamente cadastrado. A leitura do código vincula todas as operações subsequentes de abastecimento ao picking cart selecionado.
Leitura da Posição do Picking Cart: O operador realiza a leitura (bipa) da posição do picking cart onde deseja alocar a bin.
Leitura da Bin: O operador realiza a leitura (bipa) da bin que será alocada naquela posição do carrinho. O WCS valida se não há uma bin alocada e registra o vínculo entre a posição do picking cart e a bin.
Repetição para Próximas Posições: O operador repete o processo (bipa posição → bipa bin) para cada posição adicional que deseja abastecer no picking cart.
Flexibilidade Operacional: O operador tem flexibilidade para abastecer o picking cart de acordo com o número de endereços que pretende atender na viagem. Não é obrigatório preencher todas as posições do carrinho — o operador pode voltar para a tela inicial assim que considerar o carrinho adequadamente carregado.
Regra: Cada posição do picking cart comporta uma bin, e cada bin corresponde a um endereço de picking fracionado. O número máximo de posições do picking cart será configurável em tela de parâmetros do WCS.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Execução do Picking Cart de Reabastecimento  
**Score:** — (semantico) | **ID:** 451f3d165c6100b7

Após o abastecimento do picking cart, o operador inicia a execução do reabastecimento, deslocando-se com o carrinho até os endereços de Picking Fracionado indicados pelo WCS. O WCS otimiza automaticamente o trajeto do operador, ordenando os endereços de reabastecimento de forma crescente a partir do endereço mais próximo da impressora, minimizando o deslocamento e garantindo maior eficiência operacional.
A sequência de atendimento deverá respeitar a lógica de endereçamento por “apartamento”, priorizando primeiro todos os endereços ímpares e, em seguida, os endereços pares exemplo “06.002.101”.
Fluxo Operacional da Execução:
Identificação do Picking Cart: O operador realiza a leitura (bipa) do código identificador do picking cart para iniciar o processo de execução do reabastecimento. O WCS valida o código, carrega as informações das bins alocadas e calcula a rota otimizada de reabastecimento, ordenando os endereços de forma crescente a partir do endereço mais próximo da impressora.
Indicação do Primeiro Endereço: O WCS indica no coletor o primeiro endereço de Picking Fracionado a ser reabastecido, seguindo a ordenação otimizada (endereço mais próximo da impressora).
Leitura do Endereço: O operador se desloca até o endereço indicado e realiza a leitura do endereço de picking para confirmar sua localização.
Indicação da Posição do Picking Cart: Após a confirmação do endereço, o WCS indica qual posição do picking cart contém a bin correspondente àquele endereço.
Leitura da Bin: O operador realiza a leitura da bin indicada pelo WCS e realiza a transferência dos itens da bin para a posição de Picking Fracionado.
Avaliação de Bins Elegíveis para o Endereço: Após a leitura da bin, o WCS avalia se há mais alguma bin no picking cart que também seja elegível para o mesmo endereço:
Se sim: o WCS indica a próxima posição do picking cart que contém a bin elegível. O operador realiza a leitura e abastece o endereço com a bin adicional.
Se não: o WCS indica o próximo endereço de Picking Fracionado a ser reabastecido, e o operador repete o processo (leitura do endereço → indicação da posição → leitura da bin → avaliação).
Repetição até a Conclusão: O operador repete o fluxo até que todas as bins do picking cart tenham sido alocadas nos respectivos endereços de Picking Fracionado.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Picking Brindes  
**Score:** — (nome-topico) | **ID:** 97e6fe325aad391b

No setor de Brindes não há esteira. Portanto, o processo de separação será realizado manualmente, com a utilização de um coletor Android e a tela do WCS (Coleta Fracionada).
Fluxo Operacional de Picking Brindes:
Coleta dos Itens:
O WCS irá exibir os endereços a serem visitados e quantidade de itens a retirar.
O operador realiza a leitura do endereço solicitado.
Em seguida, o operador seleciona a quantidade de itens a ser retirada e realiza a leitura do código do item. O WCS atualiza a lista de itens à medida que o operador faz a coleta.
Atualização do Status do Item no WCS:
A linha do item começa em cinza.
Após a leitura do endereço, ela fica em azul.
O operador seleciona a quantidade real coletada.
Após selecionar a quantidade, o operador deve realizar a leitura do código do produto assim confirmando a coleta, após a confirmação da coleta a linha sumirá, e o operador pode seguir para coletar o próximo item.
Caso o operador decida coletar outro item, já tendo realizado a leitura do endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Funcionalidade “Pede Caixa”
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, podendo iniciar o packing dessa caixa.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta de um Item:
O WCS leva em consideração apenas a quantidade coletada. Considerando a quantidade faltante como um shortpicking (Corte).
Após concluir a coleta de todos os itens o operador deve destinar a caixa a área de packing.
O WCS não deve realizar validação de peso ou conferência para itens do tipo “Brinde”

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Picking Fracionado Níveis  
**Score:** — (nome-topico) | **ID:** 45d0ac13f23ed232

Nos níveis não há esteira automatizada, apenas roletes livres. Portanto, o processo de separação será realizado manualmente, com a utilização de um coletor Android e a tela do WCS (Coleta Fracionada).
Fluxo Operacional de Picking Fracionado Níveis:
Login e Seleção da Tela de Picking:
O operador realiza o login no WCS.
O operador seleciona a tela de picking correspondente ao nível em que está.
O operador escolhe o posto de trabalho onde realizará a separação dos volumes.
Leitura do Volume e Verificação de Itens a Separar:
O operador realiza a leitura do volume utilizando o coletor Android.
O WCS verifica se há itens a serem separados naquele posto. Caso existam itens para coleta, o sistema informa o endereço e as informações do item (quantidade e código).
Coleta dos Itens:
O operador realiza a leitura do endereço solicitado.
Em seguida, o operador seleciona a quantidade a ser retirada e realiza a leitura do código do item. O WCS atualiza a lista de itens à medida que o operador faz a coleta.
Atualização do Status do Item no WCS:
A linha do item começa em cinza.
Após a leitura do endereço, ela fica em azul.
O operador seleciona a quantidade real coletada.
Após selecionar a quantidade, o operador deve realizar a leitura do código do produto assim confirmando a coleta, após a confirmação da coleta a linha é ocultada, e o operador pode seguir para coletar o próximo item.
Caso o operador decida coletar outro item, já tendo realizado a leitura do endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Funcionalidade “Pede Caixa”
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e para que possa seguir os próximos passos do processo.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta de um Item:
O WCS leva em consideração apenas a quantidade coletada. Considerando a quantidade faltante como um shortpicking (Corte) que serão tratados na estação de conferência
Após concluir a coleta de todos os itens no posto atual, o operador direciona a caixa para o próximo posto de picking.
O processo de coleta será repetido até que todos os itens do pedido sejam coletados.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Coleta Picking Cart  
**Score:** — (semantico) | **ID:** 235f1460cac3ba55

Após o processo de Order Start do Picking Cart, será exibida uma lista de itens no PDV, contendo informações detalhadas sobre endereço, produto, quantidade a ser coletada e observações do pedido. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Em seguida, o operador realiza a leitura do código do item. O WCS informa a quantidade e em qual posição do Picking Cart o item deverá ser alocado. O operador, então, confirma a quantidade real separada e realiza a leitura da caixa plástica para confirmar a separação daquele item. A lista de itens no PDV será atualizada à medida que a quantidade esperada for coletada. Quando a quantidade necessária for atingida, o WCS informa que a coleta para aquele item foi concluída, permitindo que o operador siga para o próximo endereço na lista.
Caso o operador não consiga coletar todos os itens do endereço, haverá a opção de clicar no botão "Finalizar Coleta". Ao acionar esse botão, o WCS entenderá que apenas a quantidade lida foi separada e registrará o corte do restante da quantidade, garantindo que o processo seja finalizado corretamente e permitindo o prosseguimento da operação.
Após finalizar o processo de coleta de todos os itens, o WCS informará que a separação foi concluída. O operador então deverá se dirigir à indução de volumes (fullcase) para que a caixa seja direcionada a linha de Picking Fracionado do Nível Térreo. Caso existam itens a serem coletados no Picking Fracionado do Nível Térreo, o volume seguirá o processo de separação especificado para esse fluxo.
Caso não haja itens a serem coletados, o volume seguirá para a balança, sendo então desviado para a estação de conferência, se necessário, para validação adicional ou correção.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** 2c5a4d4aab7f2909

Após a realização do Picking (Níveis, Térreo, Picking Cart), o volume obrigatoriamente passará por uma balança onde será aferido o peso real em comparação com o peso esperado. Este processo de conferência garante que a quantidade de itens e o peso do volume estejam de acordo com o especificado.
Pré-requisitos para a Conferência:
Para o processo de conferência ser realizado corretamente, o WCS precisa ser abastecido com as informações sobre o peso unitário de cada item. Além disso, a caixa de separação deve estar devidamente cadastrada no sistema com o peso real, o que permite a comparação entre o peso esperado e o peso real.
O WCS também deve possibilitar o cadastro de uma tolerância de peso em gramas, que será considerada em caso de diferença entre o peso real e o peso esperado. Caso a diferença seja superior à tolerância ou ocorra algum processo de shortpicking, o volume será desviado para conferência para que o operador realize uma análise e a tratativa do volume.
Fluxo Operacional da Conferência:
Abertura da Tela de Conferência:
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume (caixa) para iniciar o processo de conferência. O WCS então exibe uma lista de itens previsto no volume e quantidade real separada, além do operador que efetuou a coleta a nível de item.
Validação dos Itens:
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante essa validação, o operador pode:
Completar a caixa, caso um item faltante esteja disponível, ou
Finalizar a conferência com itens faltantes através do botão "Encerrar Conferência".
Corte de Itens Faltantes:
Ao clicar no botão "Encerrar Conferência" e o operador deve selecionar cortar, então o WCS entenderá que os itens faltantes foram cortados, e o sistema registrará essa informação.

Coletar os itens cortados:
Ao clicar no botão "Encerrar Conferência" o operador deve selecionar coletar, o WCS cria um novo volume para coletar os itens faltantes, e o sistema registrará essa informação.
O sistema considerará a tolerância de peso previamente configurada para garantir que pequenas variações entre o peso esperado e o real não resultem em falhas no processo.
Caso o peso real seja significativamente diferente do esperado e fora da tolerância configurada, o volume será desviado para a conferência para análise do operador.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Picking Termolábil (Área Resfriada)  
**Score:** — (nome-topico) | **ID:** 4004d3b1c94c4e52

O Picking Termolábil utiliza Picking Cart em área refrigerada e replica integralmente os fluxos de 7.13 (Order Start Picking Cart) e 7.14 (Coleta Picking Cart).
A diferenciação ocorre apenas no pós-coleta, durante Conferência + Packing.
Regras Específicas
Identificação pela Integração (Trabalhos – Work)
Quando o campo termoLabilEspecial vier true, o WCS exibe mensagem orientativa ao operador para que seja utilizado a caixa de isopor no início do packing.
Conferência obrigatória dentro do Packing
100% dos volumes Termolábil passam por conferência item a item (SKU, quantidade) durante o packing. (está sendo previsto uma balança estática e caso essa opção seja validada a conferência item a item só deve ser feita se for identificado alguma divergência na validação de peso)
Ao finalizar a conferência, o WCS imprime a etiqueta final do volume, Será informado o destino (rota) do volume para que o operador se oriente no momento da paletização.
Vinculação a RG (Cofre/Pallet)
Após o packing, o operador acessa a tela “Aloca Pallet” no coletor para relacionar os volumes Termolábil a um RG (Cofre/Pallet).
O WCS não diferencia RG Cofre e RG Pallet: trata-se do mesmo código RG, sem tipagem.
O uso operacional do RG (cofre para volumes a vácuo em “saquinhos” ou pallet para caixas de isopor) é definido fora do sistema e não altera o cadastro/validação do RG no WCS.
Regras de validação do RG (formato/unicidade) permanecem idênticas independentemente do destino operacional.
O operador realiza a leitura da etiqueta do volume 
Após isso, o WCS verifica se já existe um pallet ativo associado ao mesmo romaneio daquele volume.
Se já existir pallet para aquele romaneio:
O coletor exibirá a posição o RG do pallet onde o volume deve ser alocado.
Se ainda não existir pallet para aquele romaneio:
O coletor solicitará ao operador que informe um RG de pallet para esse volume.
Após leitura desse RG, ele passa a ser utilizado para todos os próximos volumes do mesmo romaneio.
Alerta após alocação.
O WCS deve exibir a quantidade faltante de volumes do termolábil para o romaneio referente ao volume lido sempre que um volume for alocado.
Fluxo operacional do Aloca Pallet:
Coletar o volume na estação de packing.
Ler a etiqueta do volume impressa.
O WCS indicará no coletor o RG do pallet.
O operador deposita o volume no pallet.
O operador realiza a leitura do código de barras do RG de pallet para confirmar a alocação.
O WCS informa quantos volumes faltam para o Romaneio.
Caso o operador informe uma posição diferente da indicada pelo sistema, o WCS apresentará mensagem de erro, orientando o operador a informar a posição correta.
Após a vinculação do RG aos volumes Termolábil, o WCS mantém o controle desses volumes e considera o respectivo pallet como um dos últimos a serem carregados no romaneio, o sistema deve garantir que se tivermos mais um pallet garantindo que os itens embalados em isopor e no cofre permaneçam o maior tempo possível em ambiente refrigerado antes da expedição.
Hardware no Termolábil:
Order Start – PDV
Coleta - PDV
Conferência / Packing – Desktop
Paletização – Coletor Android

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Picking Brindes  
**Score:** — (nome-topico) | **ID:** 02c9fa568469640f

No setor de Brindes não há esteira. Portanto, o processo de separação será realizado manualmente, com a utilização de um coletor Android e a tela do WCS (Coleta Fracionada).
Fluxo Operacional de Picking Brindes:
Coleta dos Itens:
O WCS irá exibir os endereços a serem visitados e quantidade de itens a retirar.
O operador realiza a leitura do endereço solicitado.
Em seguida, o operador seleciona a quantidade de itens a ser retirada e realiza a leitura do código do item. O WCS atualiza a lista de itens à medida que o operador faz a coleta.
Atualização do Status do Item no WCS:
A linha do item começa em cinza.
Após a leitura do endereço, ela fica em azul.
O operador seleciona a quantidade real coletada.
Após selecionar a quantidade, o operador deve realizar a leitura do código do produto assim confirmando a coleta, após a confirmação da coleta a linha sumirá, e o operador pode seguir para coletar o próximo item.
Caso o operador decida coletar outro item, já tendo realizado a leitura do endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Funcionalidade “Pede Caixa”
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, podendo iniciar o packing dessa caixa.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta de um Item:
O WCS leva em consideração apenas a quantidade coletada. Considerando a quantidade faltante como um shortpicking (Corte).
Após concluir a coleta de todos os itens o operador deve destinar a caixa a área de packing.
O WCS não deve realizar validação de peso ou conferência para itens do tipo “Brinde”

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Picking Fracionado Níveis  
**Score:** — (nome-topico) | **ID:** 4bc65e9f7bb1bf7e

Nos níveis não há esteira automatizada, apenas roletes livres. Portanto, o processo de separação será realizado manualmente, com a utilização de um coletor Android e a tela do WCS (Coleta Fracionada).
Fluxo Operacional de Picking Fracionado Níveis:
Login e Seleção da Tela de Picking:
O operador realiza o login no WCS.
O operador seleciona a tela de picking correspondente ao nível em que está.
O operador escolhe o posto de trabalho onde realizará a separação dos volumes.
Leitura do Volume e Verificação de Itens a Separar:
O operador realiza a leitura do volume utilizando o coletor Android.
O WCS verifica se há itens a serem separados naquele posto. Caso existam itens para coleta, o sistema informa o endereço e as informações do item (quantidade e código).
Coleta dos Itens:
O operador realiza a leitura do endereço solicitado.
Em seguida, o operador seleciona a quantidade a ser retirada e realiza a leitura do código do item. O WCS atualiza a lista de itens à medida que o operador faz a coleta.
Atualização do Status do Item no WCS:
A linha do item começa em cinza.
Após a leitura do endereço, ela fica em azul.
O operador seleciona a quantidade real coletada.
Após selecionar a quantidade, o operador deve realizar a leitura do código do produto assim confirmando a coleta, após a confirmação da coleta a linha é ocultada, e o operador pode seguir para coletar o próximo item.
Caso o operador decida coletar outro item, já tendo realizado a leitura do endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Funcionalidade “Pede Caixa”
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e para que possa seguir os próximos passos do processo.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta de um Item:
O WCS leva em consideração apenas a quantidade coletada. Considerando a quantidade faltante como um shortpicking (Corte) que serão tratados na estação de conferência
Após concluir a coleta de todos os itens no posto atual, o operador direciona a caixa para o próximo posto de picking.
O processo de coleta será repetido até que todos os itens do pedido sejam coletados.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Coleta Picking Cart  
**Score:** — (semantico) | **ID:** 74ebc0bcc0c819fd

Após o processo de Order Start do Picking Cart, será exibida uma lista de itens no PDV, contendo informações detalhadas sobre endereço, produto, quantidade a ser coletada e observações do pedido. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Em seguida, o operador realiza a leitura do código do item. O WCS informa a quantidade e em qual posição do Picking Cart o item deverá ser alocado. O operador, então, confirma a quantidade real separada e realiza a leitura da caixa plástica para confirmar a separação daquele item. A lista de itens no PDV será atualizada à medida que a quantidade esperada for coletada. Quando a quantidade necessária for atingida, o WCS informa que a coleta para aquele item foi concluída, permitindo que o operador siga para o próximo endereço na lista.
Caso o operador não consiga coletar todos os itens do endereço, haverá a opção de clicar no botão "Finalizar Coleta". Ao acionar esse botão, o WCS entenderá que apenas a quantidade lida foi separada e registrará o corte do restante da quantidade, garantindo que o processo seja finalizado corretamente e permitindo o prosseguimento da operação.
Após finalizar o processo de coleta de todos os itens, o WCS informará que a separação foi concluída. O operador então deverá se dirigir à indução de volumes (fullcase) para que a caixa seja direcionada a linha de Picking Fracionado do Nível Térreo. Caso existam itens a serem coletados no Picking Fracionado do Nível Térreo, o volume seguirá o processo de separação especificado para esse fluxo.
Caso não haja itens a serem coletados, o volume seguirá para a balança, sendo então desviado para a estação de conferência, se necessário, para validação adicional ou correção.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** 1d6f2613b6f684cc

Após a realização do Picking (Níveis, Térreo, Picking Cart), o volume obrigatoriamente passará por uma balança onde será aferido o peso real em comparação com o peso esperado. Este processo de conferência garante que a quantidade de itens e o peso do volume estejam de acordo com o especificado.
Pré-requisitos para a Conferência:
Para o processo de conferência ser realizado corretamente, o WCS precisa ser abastecido com as informações sobre o peso unitário de cada item. Além disso, a caixa de separação deve estar devidamente cadastrada no sistema com o peso real, o que permite a comparação entre o peso esperado e o peso real.
O WCS também deve possibilitar o cadastro de uma tolerância de peso em gramas, que será considerada em caso de diferença entre o peso real e o peso esperado. Caso a diferença seja superior à tolerância ou ocorra algum processo de shortpicking, o volume será desviado para conferência para que o operador realize uma análise e a tratativa do volume.
Fluxo Operacional da Conferência:
Abertura da Tela de Conferência:
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume (caixa) para iniciar o processo de conferência. O WCS então exibe uma lista de itens previsto no volume e quantidade real separada, além do operador que efetuou a coleta a nível de item.
Validação dos Itens:
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante essa validação, o operador pode:
Completar a caixa, caso um item faltante esteja disponível, ou
Finalizar a conferência com itens faltantes através do botão "Encerrar Conferência".
Corte de Itens Faltantes:
Ao clicar no botão "Encerrar Conferência" e o operador deve selecionar cortar, então o WCS entenderá que os itens faltantes foram cortados, e o sistema registrará essa informação.

Coletar os itens cortados:
Ao clicar no botão "Encerrar Conferência" o operador deve selecionar coletar, o WCS cria um novo volume para coletar os itens faltantes, e o sistema registrará essa informação.
O sistema considerará a tolerância de peso previamente configurada para garantir que pequenas variações entre o peso esperado e o real não resultem em falhas no processo.
Caso o peso real seja significativamente diferente do esperado e fora da tolerância configurada, o volume será desviado para a conferência para análise do operador.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Picking Termolábil (Área Resfriada)  
**Score:** — (nome-topico) | **ID:** 1aa6499b577f8985

O Picking Termolábil utiliza Picking Cart em área refrigerada e replica integralmente os fluxos de 7.13 (Order Start Picking Cart) e 7.14 (Coleta Picking Cart).
A diferenciação ocorre apenas no pós-coleta, durante Conferência + Packing.
Regras Específicas
Identificação pela Integração (Trabalhos – Work)
Quando o campo termoLabilEspecial vier true, o WCS exibe mensagem orientativa ao operador para que seja utilizado a caixa de isopor no início do packing.
Conferência obrigatória dentro do Packing
100% dos volumes Termolábil passam por conferência item a item (SKU, quantidade) durante o packing. (está sendo previsto uma balança estática e caso essa opção seja validada a conferência item a item só deve ser feita se for identificado alguma divergência na validação de peso)
Ao finalizar a conferência, o WCS imprime a etiqueta final do volume, Será informado o destino (rota) do volume para que o operador se oriente no momento da paletização.
Vinculação a RG (Cofre/Pallet)
Após o packing, o operador acessa a tela “Aloca Pallet” no coletor para relacionar os volumes Termolábil a um RG (Cofre/Pallet).
O WCS não diferencia RG Cofre e RG Pallet: trata-se do mesmo código RG, sem tipagem.
O uso operacional do RG (cofre para volumes a vácuo em “saquinhos” ou pallet para caixas de isopor) é definido fora do sistema e não altera o cadastro/validação do RG no WCS.
Regras de validação do RG (formato/unicidade) permanecem idênticas independentemente do destino operacional.
O operador realiza a leitura da etiqueta do volume 
Após isso, o WCS verifica se já existe um pallet ativo associado ao mesmo romaneio daquele volume.
Se já existir pallet para aquele romaneio:
O coletor exibirá a posição o RG do pallet onde o volume deve ser alocado.
Se ainda não existir pallet para aquele romaneio:
O coletor solicitará ao operador que informe um RG de pallet para esse volume.
Após leitura desse RG, ele passa a ser utilizado para todos os próximos volumes do mesmo romaneio.
Alerta após alocação.
O WCS deve exibir a quantidade faltante de volumes do termolábil para o romaneio referente ao volume lido sempre que um volume for alocado.
Fluxo operacional do Aloca Pallet:
Coletar o volume na estação de packing.
Ler a etiqueta do volume impressa.
O WCS indicará no coletor o RG do pallet.
O operador deposita o volume no pallet.
O operador realiza a leitura do código de barras do RG de pallet para confirmar a alocação.
O WCS informa quantos volumes faltam para o Romaneio.
Caso o operador informe uma posição diferente da indicada pelo sistema, o WCS apresentará mensagem de erro, orientando o operador a informar a posição correta.
Após a vinculação do RG aos volumes Termolábil, o WCS mantém o controle desses volumes e considera o respectivo pallet como um dos últimos a serem carregados no romaneio, o sistema deve garantir que se tivermos mais um pallet garantindo que os itens embalados em isopor e no cofre permaneçam o maior tempo possível em ambiente refrigerado antes da expedição.
Hardware no Termolábil:
Order Start – PDV
Coleta - PDV
Conferência / Packing – Desktop
Paletização – Coletor Android

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Picking Brindes  
**Score:** — (nome-topico) | **ID:** baf35de1b056d681

No setor de Brindes não há esteira. Portanto, o processo de separação será realizado manualmente, com a utilização de um coletor Android e a tela do WCS (Coleta Fracionada).
Fluxo Operacional de Picking Brindes:
Coleta dos Itens:
O WCS irá exibir os endereços a serem visitados e quantidade de itens a retirar.
O operador realiza a leitura do endereço solicitado.
Em seguida, o operador seleciona a quantidade de itens a ser retirada e realiza a leitura do código do item. O WCS atualiza a lista de itens à medida que o operador faz a coleta.
Atualização do Status do Item no WCS:
A linha do item começa em cinza.
Após a leitura do endereço, ela fica em azul.
O operador seleciona a quantidade real coletada.
Após selecionar a quantidade, o operador deve realizar a leitura do código do produto assim confirmando a coleta, após a confirmação da coleta a linha sumirá, e o operador pode seguir para coletar o próximo item.
Caso o operador decida coletar outro item, já tendo realizado a leitura do endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Funcionalidade “Pede Caixa”
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, podendo iniciar o packing dessa caixa.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta de um Item:
O WCS leva em consideração apenas a quantidade coletada. Considerando a quantidade faltante como um shortpicking (Corte).
Após concluir a coleta de todos os itens o operador deve destinar a caixa a área de packing.
O WCS não deve realizar validação de peso ou conferência para itens do tipo “Brinde”

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Picking Fracionado Níveis  
**Score:** — (nome-topico) | **ID:** fd2cd0f697919c96

Estrutura de postos por nível: Nível 3 = 2 postos; Nível 2 = 2 postos; Nível 1 = 2 postos. Nos níveis com múltiplos postos, os endereços são divididos igualmente entre eles no cadastro de postos, respeitando o equilíbrio de carga. Não há fila sistêmica nos postos: a fila é física — os roletes livres acomodam os volumes em sequência, e o operador atende um volume por vez via leitura no coletor.
Nos níveis não há esteira automatizada, apenas roletes livres. Portanto, o processo de separação será realizado manualmente, com a utilização de um coletor Android e a tela do WCS (Coleta Fracionada).
Fluxo Operacional de Picking Fracionado Níveis:
Login e Seleção da Tela de Picking:
O operador realiza o login no WCS.
O operador seleciona a tela de picking correspondente ao nível em que está.
O operador escolhe o posto de trabalho onde realizará a separação dos volumes.
Leitura do Volume e Verificação de Itens a Separar:
O operador realiza a leitura do volume utilizando o coletor Android.
O WCS verifica se há itens a serem separados naquele posto. Caso existam itens para coleta, o sistema informa o endereço e as informações do item (quantidade e código).
Coleta dos Itens:
O operador realiza a leitura do endereço solicitado.
Em seguida, o operador seleciona a quantidade a ser retirada e realiza a leitura do código do item. O WCS atualiza a lista de itens à medida que o operador faz a coleta.
Atualização do Status do Item no WCS:
A linha do item começa em cinza.
Após a leitura do endereço, ela fica em azul.
O operador seleciona a quantidade real coletada.
Após selecionar a quantidade, o operador deve realizar a leitura do código do produto assim confirmando a coleta, após a confirmação da coleta a linha é ocultada, e o operador pode seguir para coletar o próximo item.
Caso o operador decida coletar outro item, já tendo realizado a leitura do endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Funcionalidade “Pede Caixa”
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e para que possa seguir os próximos passos do processo.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta de um Item:
O WCS leva em consideração apenas a quantidade coletada. Considerando a quantidade faltante como um shortpicking (Corte) que serão tratados na estação de conferência
Após concluir a coleta de todos os itens no posto atual, o operador direciona a caixa para o próximo posto de picking.
O processo de coleta será repetido até que todos os itens do pedido sejam coletados.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Coleta Picking Cart  
**Score:** — (semantico) | **ID:** 2b0bb5e986a82ac1

Após o processo de Order Start do Picking Cart, será exibida uma lista de itens no PDV, contendo informações detalhadas sobre endereço, produto, quantidade a ser coletada e observações do pedido. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Em seguida, o operador realiza a leitura do código do item. O WCS informa a quantidade e em qual posição do Picking Cart o item deverá ser alocado. O operador, então, confirma a quantidade real separada e realiza a leitura da caixa plástica para confirmar a separação daquele item. A lista de itens no PDV será atualizada à medida que a quantidade esperada for coletada. Quando a quantidade necessária for atingida, o WCS informa que a coleta para aquele item foi concluída, permitindo que o operador siga para o próximo endereço na lista.
Caso o operador não consiga coletar todos os itens do endereço, haverá a opção de clicar no botão "Finalizar Coleta". Ao acionar esse botão, o WCS entenderá que apenas a quantidade lida foi separada e registrará o corte do restante da quantidade, garantindo que o processo seja finalizado corretamente e permitindo o prosseguimento da operação.
Após finalizar o processo de coleta de todos os itens, o WCS informará que a separação foi concluída. O operador então deverá se dirigir à indução de volumes (fullcase) para que a caixa seja direcionada a linha de Picking Fracionado do Nível Térreo. Caso existam itens a serem coletados no Picking Fracionado do Nível Térreo, o volume seguirá o processo de separação especificado para esse fluxo.
Caso não haja itens a serem coletados, o volume seguirá para a balança, sendo então desviado para a estação de conferência, se necessário, para validação adicional ou correção.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** fa2215e7ad6406e7

Após a realização do Picking (Níveis, Térreo, Picking Cart), o volume obrigatoriamente passará por uma balança onde será aferido o peso real em comparação com o peso esperado. Este processo de conferência garante que a quantidade de itens e o peso do volume estejam de acordo com o especificado.
Pré-requisitos para a Conferência:
Para o processo de conferência ser realizado corretamente, o WCS precisa ser abastecido com as informações sobre o peso unitário de cada item. Além disso, a caixa de separação deve estar devidamente cadastrada no sistema com o peso real, o que permite a comparação entre o peso esperado e o peso real.
O WCS também deve possibilitar o cadastro de uma tolerância de peso em gramas, que será considerada em caso de diferença entre o peso real e o peso esperado. Caso a diferença seja superior à tolerância ou ocorra algum processo de shortpicking, o volume será desviado para conferência para que o operador realize uma análise e a tratativa do volume.
Definição: a tolerância de peso é parametrizada em valor absoluto (gramas), para evitar arredondamentos em produtos de peso pequeno. O valor inicial será definido pela operação via tela de parâmetros e pode ser ajustado a qualquer tempo. Tratativa para item incorreto/trocado: não há fluxo sistêmico — o operador remove o item e o devolve manualmente à posição de origem, sem movimentação de saldo no WCS (o item nunca foi registrado como coletado naquele volume), o sistema deve registrar as informações dos itens sobressalentes ou trocados.
Fluxo Operacional da Conferência:
Abertura da Tela de Conferência:
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume (caixa) para iniciar o processo de conferência. O WCS então exibe uma lista de itens previsto no volume e quantidade real separada, além do operador que efetuou a coleta a nível de item.
Validação dos Itens:
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante essa validação, o operador pode:
Completar a caixa, caso um item faltante esteja disponível, ou
Finalizar a conferência com itens faltantes através do botão "Encerrar Conferência".
Corte de Itens Faltantes:
Ao clicar no botão "Encerrar Conferência" e o operador deve selecionar cortar, então o WCS entenderá que os itens faltantes foram cortados, e o sistema registrará essa informação.
Coletar os itens cortados:
Ao clicar no botão "Encerrar Conferência" o operador deve selecionar coletar, o WCS cria um novo volume para coletar os itens faltantes, e o sistema registrará essa informação.
O sistema considerará a tolerância de peso previamente configurada para garantir que pequenas variações entre o peso esperado e o real não resultem em falhas no processo.
Caso o peso real seja significativamente diferente do esperado e fora da tolerância configurada, o volume será desviado para a conferência para análise do operador.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Picking Termolábil (Área Resfriada)  
**Score:** — (nome-topico) | **ID:** 100672783dedf983

O Picking Termolábil utiliza Picking Cart em área refrigerada e replica integralmente os fluxos de 7.13 (Order Start Picking Cart) e 7.14 (Coleta Picking Cart).
A diferenciação ocorre apenas no pós-coleta, durante Conferência + Packing.
Regras Específicas
Identificação pela Integração (Trabalhos – Work)
Quando o campo termoLabilEspecial vier true, o WCS exibe mensagem orientativa ao operador para que seja utilizado a caixa de isopor no início do packing.
Conferência obrigatória dentro do Packing
100% dos volumes Termolábil passam por conferência item a item (SKU, quantidade) durante o packing. (está sendo previsto uma balança estática e caso essa opção seja validada a conferência item a item só deve ser feita se for identificado alguma divergência na validação de peso)
Ao finalizar a conferência, o WCS imprime a etiqueta final do volume, Será informado o destino (rota) do volume para que o operador se oriente no momento da paletização.
Vinculação a RG (Cofre/Pallet)
Após o packing, o operador acessa a tela “Aloca Pallet” no coletor para relacionar os volumes Termolábil a um RG (Cofre/Pallet).
O WCS não diferencia RG Cofre e RG Pallet: trata-se do mesmo código RG, sem tipagem.
O uso operacional do RG (cofre para volumes a vácuo em “saquinhos” ou pallet para caixas de isopor) é definido fora do sistema e não altera o cadastro/validação do RG no WCS.
Regras de validação do RG (formato/unicidade) permanecem idênticas independentemente do destino operacional.
O operador realiza a leitura da etiqueta do volume 
Após isso, o WCS verifica se já existe um pallet ativo associado ao mesmo romaneio daquele volume.
Se já existir pallet para aquele romaneio:
O coletor exibirá a posição o RG do pallet onde o volume deve ser alocado.
Se ainda não existir pallet para aquele romaneio:
O coletor solicitará ao operador que informe um RG de pallet para esse volume.
Após leitura desse RG, ele passa a ser utilizado para todos os próximos volumes do mesmo romaneio.
Alerta após alocação.
O WCS deve exibir a quantidade faltante de volumes do termolábil para o romaneio referente ao volume lido sempre que um volume for alocado.
Fluxo operacional do Aloca Pallet:
Coletar o volume na estação de packing.
Ler a etiqueta do volume impressa.
O WCS indicará no coletor o RG do pallet.
O operador deposita o volume no pallet.
O operador realiza a leitura do código de barras do RG de pallet para confirmar a alocação.
O WCS informa quantos volumes faltam para o Romaneio.
Caso o operador informe uma posição diferente da indicada pelo sistema, o WCS apresentará mensagem de erro, orientando o operador a informar a posição correta.
Após a vinculação do RG aos volumes Termolábil, o WCS mantém o controle desses volumes e considera o respectivo pallet como o ÚLTIMO a ser carregado no romaneio, garantindo que os itens embalados em isopor e no cofre permaneçam o maior tempo possível em ambiente refrigerado antes da expedição. Ordem definitiva de carregamento (do primeiro para o último a ser carregado): (1) Pallets normais por sequência de entrega; (2) Pallets PTL Exclusivo; (3) Pallets de produtos Perigosos; (4) Pallet Termolábil (último).
Hardware no Termolábil:
Order Start – PDV
Coleta - PDV
Conferência / Packing – Desktop
Paletização – Coletor Android

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 563c49dd2d7670d3

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação, conferência, reabastecimento, controle de saldo das posições de picking, e picking cart tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** d1dc9b79edc5904d

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do tablet.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
Após essa seleção, o operador visualizará uma lista de missões de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada missão diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Apresentação da Posição (endereço de picking): onde o produto deve ser coletado;
E a Apresentação do Produto: Apresentação configurada pela operação na tela de parametros.
Quantidade a coletar: quantidade solicitada de acordo com a missão
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (tarefa) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (tarefa) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (tarefa) que está sendo separado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (tarefa), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será ocultada da lista, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço da caixa plástica.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (tarefa) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as missões destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Limpeza de Canal de Picking  
**Score:** — (semantico) | **ID:** 7b135b5a41eabc93

A limpeza de canal de picking é significativamente mais complexa porque envolve posições que podem estar sendo ativamente utilizadas para separação no momento da solicitação. Quando o SAP solicita a remoção de um palete de uma posição de picking, o WCS não pode simplesmente retirar o palete, ele precisa garantir que nenhuma coleta em andamento seja interrompida.
Por isso, o WCS implementa um protocolo que segue uma sequência rígida: verificar → aguardar → sinalizar → retirar.
Passo 1 — Recebimento do TORD: O SAP envia ao WCS um IDOC do tipo WMTORD solicitando o esvaziamento do canal de picking, com tipo de depósito de destino correspondente ao parâmetro do tipo de depósito cadastrado no WCS para a funcionalidade de zerar canal.
Passo 2 — Verificação de separação em andamento: Imediatamente após o recebimento, o WCS verifica se existe alguma coleta em andamento na posição solicitada (LED aceso, operador coletando). Duas situações podem ocorrer:
Situação A — Não há coleta em andamento: O WCS avança diretamente para o Passo 4.
Situação B — Há coleta em andamento: O WCS executa o Passo 3 antes de prosseguir.
Passo 3 — Retirada da lista de coleta e aguardo de finalização: O WCS não direciona novas coletas para a posição. Porém, a coleta que já está em andamento (LED já aceso ou pendentes de acendimento, operador já sinalizado) não é interrompida. O WCS aguarda que o operador finalize a separação normalmente, colete as caixas, etiquete se PVAR [Coleta PVAR], induza na esteira e confirme no display LED. Somente após a confirmação do operador o WCS prossegue para o próximo passo.
Passo 4 — Sinalização de posição desativada: Após a conclusão da coleta pendente (ou imediatamente, se não havia coleta), o WCS sinaliza ocorrência indicando que ela foi desativada. Essa sinalização é uma indicação visual (999) para que a operação saiba que a posição está fora de uso e será esvaziada.
Passo 5 — Coleta de todos os volumes: Operador realizar a coleta de todos os volumes e os induzem na esteira BK10 e seguem para o sorter.
Passo 6 — Confirmação: Após o encerramento ou finalização da onda WCS envia um ZTOCO01 ao SAP com as quantidades solicitadas para o esvaziamento da posição e o que realmente foi retirado da posição, isso por meio do segmento ZTOCOPERC [TOCO] confirmando a conclusão da limpeza. O saldo da posição é zerado e ela fica disponível para futuro reabastecimento.
Estrutura de retorno de confirmação de limpeza do canal de picking
Velox > SAP (ZTOCOPERC)

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** SSCC — Identificação Única para produto Rastreável  
**Score:** — (semantico) | **ID:** 141d75a4094cba8c

O SSCC (Serial Shipping Container Code) funciona como o identificador único de cada caixa, equivalente a um "CPF da caixa". Está presente apenas em etiquetas de produtos rastreáveis (Etiqueta 4.0) e é utilizado na separação e rastreabilidade individual dos volumes.
Estrutura do SSCC:
AI (00) no código de barras
8 digitos após o prefixo 00
9 dígitos sequenciais
1 dígito verificador
Total: 18 caracteres
O SSCC é utilizado pelo WCS para compor o identificador único do volume (campo ZCOD_CAIXA no retorno de separação ao SAP).

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Picking Fracionado  
**Score:** — (nome-topico) | **ID:** d57c9ff54a0ef2fd

O processo de Picking Fracionado ocorre após a impressão dos volumes no Order Start, e o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Início do Processo:
O operador induz o volume já etiquetado na esteira, e após a passagem da caixa de papelão pelos pontos de decisão (scanner), o WCS verifica automaticamente se há algum item esperando coleta naquele posto.
Se houver coleta, o volume será desviado automaticamente para o posto correspondente. Caso contrário, o volume segue para o próximo ponto de decisão até ser identificado que a coleta deve ocorrer em algum posto específico.
Indicação Visual para Coleta:
Após o desvio, o WCS acende os LEDs de frente no posto de separação, sinalizando o local e a quantidade de itens a serem coletados.
Os LEDs de frente exibem 3 dígitos para identificar a quantidade de itens a serem coletados, sendo esses LEDs exclusivos para cada posição e um PDV por estação.
Coleta dos Itens:
O operador deve coletar fisicamente os itens solicitados, conforme indicado pelos LEDs, e realizar a leitura do EAN de cada item para validar a coleta. (a regra de bipar pode ser desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada com o apertar do LED.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um PDV para auxiliar o operador na coleta (Esse PDV será o mesmo da frente, sendo um por estação).
Modalidade adicional (BETA SP): bipar 1 unidade por SKU/EAN para validação do produto, e em seguida confirmar a quantidade tanto pelo PDV quanto pelo botão do LED. Essa modalidade equilibra segurança da coleta com produtividade.
Coleta nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas, o WCS acende os LEDs da frente em rosa, sinalizando que a coleta será feita na parte de picking costas, além de acender os LEDs nas posições de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente, onde o WCS informa o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking, permitindo que o operador colete de maneira eficiente e sem confusão.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do PDV.
Ao acionar essa funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do volume, que será retomada no processo de Order Start com uma nova caixa.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde, indicando que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** 67a40d34c69da30e

Para atender as demandas da operação visando os itens com menor curva, teremos o conceito de separação por Picking Cart. Esse conceito consiste em um modelo de prateleira móvel com auxílio do PDV, que é utilizado para fazer as coletas dos volumes de acordo com as posições informadas no sistema.
Como regra crítica, uma mesma caixa/volume nunca conterá itens de mais de uma remessa. O WCS é responsável por garantir essa segregação durante a alocação dos volumes no carrinho.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Estrutura do Picking Cart  
**Score:** — (semantico) | **ID:** a702570122126a9a

Cada Picking Cart será composto por:
1x PDV (terminais), 1x carrinho apenas.
1x leitor de código de barras sem fio QuickScan Imager 2D QR Code com mira (USB), com gatilho.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Mapeamento do Picking Cart  
**Score:** — (semantico) | **ID:** 22327bcfa9391294

Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da etiqueta impressa e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá acionar o botão Finalizar Mapeamento e seguir para a etapa de separação.
Após o mapeamento, o sistema libera as tarefas de coleta e o operador visualizará a lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Separação no Picking Cart  
**Score:** — (semantico) | **ID:** 3c6e14a6a9808ef0

Na separação, a interface exibirá de forma clara e objetiva as informações essenciais para a coleta. O sistema WCS apresentará num primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado.
SKU: código identificador do produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual.
Unidade de medida: para indicar a quantidade a ser separada, a unidade de medida do produto e se a coleta será feita em unidades, caixas, frascos, pacotes, entre outros.
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Picking Map  
**Score:** — (nome-topico) | **ID:** 2902922fc81da65e

O Pick Map é a estrutura interna do WCS Velox que mapeia cada SKU às suas posições físicas de picking dentro da automação (FlowRack de frente e de costas, módulos PBL e posições de solo do túnel). É a partir desse mapa que o sistema determina, para cada item de um pedido, em qual(is) endereço(s) o produto deve ser coletado e por quais zonas a caixa precisa transitar.
Sem integração — internalizado no Velox: o Pick Map não depende de integração com o WMS Spark. O WMS enxerga um único endereço sistêmico por SKU (uma entrada e uma saída na automação, Museu, rua fullcase de alto giro), enquanto o WCS mantém internamente o detalhamento de quais posições físicas de picking abrigam cada SKU. O cadastro e a manutenção do Pick Map são realizados no próprio Velox. O cadastro dos endereços/posições pode ser feito de forma individual ou por importação em massa, permitindo a carga inicial e a atualização de grandes volumes de endereços em uma única operação, sem necessidade de cadastro manual posição a posição.
O Pick Map é a base do roteamento do Order Start: ao receber a onda de pedidos (SKU × quantidade), o WCS consulta o Pick Map para definir o roteiro de cada caixa antes da indução na esteira.
Obs: O Picking Map deve ser realizado baseando-se na Matriz de Fragilidade, para garantir uma melhor eficiência da operação os itens mais pesados devem sempre estar nos primeiros postos, garantindo que os itens mais pesados sejam pegos primeiro no formado de picking fracionado (caixa plástica).

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** a0aeeafb6f74ad23

Após o processo de Order Start do Picking Cart, será exibida uma lista de itens no PDV, contendo informações detalhadas sobre endereço, produto, quantidade a ser coletada e observações do pedido. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
O Picking Cart opera por coleta consolidada multi: numa única passagem pelos corredores do museu, o operador coleta itens de múltiplos pedidos (multi-pedido) e múltiplos itens (multi-item), alocando-os nas posições do carrinho até atingir a sua capacidade máxima. O objetivo é maximizar a quantidade de itens coletados por deslocamento, reduzindo o número de rotas. Todos os volumes coletados nessa passagem são destinados ao Put to Wall (PTW), onde serão consolidados por pedido (conforme seção 7.4) antes da indução na automação.
Em seguida, o operador realiza a leitura do código do item. O WCS informa a quantidade e em qual posição do Picking Cart o item deverá ser alocado. O operador, então, confirma a quantidade real separada e realiza a leitura da caixa plástica (que contém uma etiqueta burra) para confirmar a separação daquele item. A lista de itens no PDV será atualizada à medida que a quantidade esperada for coletada. Quando a quantidade necessária for atingida, o WCS informa que a coleta para aquele item foi concluída, permitindo que o operador siga para o próximo endereço na lista.
Caso o operador não consiga coletar todos os itens do endereço, haverá a opção de clicar no botão "Finalizar Coleta". Ao acionar esse botão, o WCS entenderá que apenas a quantidade lida foi separada e registrará o corte do restante da quantidade, garantindo que o processo seja finalizado corretamente e permitindo o prosseguimento da operação.
Após finalizar o processo de coleta de todos os itens da rota, o WCS informará que a separação foi concluída. O operador se dirige ao Put to Wall (PTW) para realizar a bipagem e consolidação dos itens por pedido, conforme descrito na seção 7.4.
Após a consolidação no PTW, a caixa plástica é induzida na esteira de Fullcase do Térreo e segue diretamente ao sorter, que desviará na rampa 1 para reindução no Order Start padrão. A partir desse ponto, o pedido passa pelo fluxo comum (Picking Mezanino → Picking Térreo → Conferência → Expedição).
Em casos em que o pedido do picking cart não possua outros itens além do baixo giro, o fluxo permanece o mesmo descrito acima, pois o pedido precisará passar pela área de conferência/packing como todos os outros.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Área Dedicada  
**Score:** — (semantico) | **ID:** a9ce55cca2f71923

ODER START
FLUXO
COLETOR DE DADOS
Terá uma área com 9 ruas dedicadas a volumes maiores de Fullcase, sendo coletas via Paleteira de responsabilidade do WMS (A impressão dessas etiquetas também).
Nessa mesma área as últimas duas ruas serão destinadas ao Picking Cart como especificado acima e terão postos específicos de PBL (curva AA), que por sua vez são controlados pelo WCS. A etiqueta de expedição dos volumes de full case de alto giro (PBL / S20+) é impressa pelo WCS no momento da coleta, no order start dos volumes — não pelo WMS.
Ambos os tipos de pedidos dessa área dedicada serão induzidos na esteira de Fullcase do Térreo que ficará ao lado onde esses pedidos pularam toda a automação seguindo diretamente para área de Expedição.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Posições de Picking  
**Score:** — (semantico) | **ID:** b902549304086018

No processo de auditoria, haverá dois tipos de posições com características distintas:
Posição de Picking
Sempre terá somente um SKU por posição.
Pode estar localizada na linha dos flowracks ou no museu (corredores de baixo giro, a nível chão, onde opera o picking cart e o Put to Wall).
É a posição onde são executadas as coletas.
Posição de Transfer
Pode agrupar mais de um SKU na mesma posição.
É a posição onde os itens ficam disponíveis para reabastecimento das posições de picking.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Picking Fracionado  
**Score:** — (nome-topico) | **ID:** 4f296ddc85d5f1fe

Estações de Picking:
O CD possui 10 postos de separação. Cada operador cuida de 1 posto por vez. Cada posto possui 162 posições distribuídas em 72 LEDs e posições na frente e 15 LEDS e 90 posições nas costas. As posições de frente possuem displays LED de 3 dígitos com botão LED integrado. As posições de costas possuem displays de 10 dígitos (1 display por nível). Cada estação é equipada com 1 PDV e 1 scanner (fornecimento invent).
3 dígitos:
10 dígitos:
Identificação do Operador:
Antes de iniciar a coleta, o operador realiza login na estação pelo PDV (usuário/senha). O WCS registra o vínculo entre o operador e a estação, permitindo rastreabilidade das coletas realizadas naquele posto. O supervisor pode acompanhar em tempo real quais operadores estão ativos em cada estação (relatórios).
Em situações excepcionais, mais de um operador pode estar logado na mesma estação simultaneamente. Nesse cenário, o WCS registra todos os operadores presentes, porém a rastreabilidade individual por item coletado não é garantida — o sistema identifica quais operadores estiveram na estação, sem distinção de qual realizou cada coleta específica.
Ao encerrar seu turno ou deixar a estação, o operador realiza logout pelo PDV. O WCS registra o horário de saída e encerra o vínculo com a estação. Caso o operador troque de estação sem realizar logout, o supervisor pode forçar o encerramento da sessão anterior remotamente pelo painel de gestão.
Início do Processo:
Após a indução no Order Start, a caixa segue pela linha expressa.
Ao chegar no leitor da estação, caso tenha produtos a serem separados naquele posto, a caixa será desviada para dentro da estação de picking e direcionada para o lado do posto onde solicita separação de itens.
Caso não haja itens a separar naquela estação, a caixa segue direto pela linha expressa para a próxima estação ou saída.
Quando não há itens automatizados no pedido (Bypass), a caixa segue direto para conferência/balança.
Separação somente na Frente:
O WCS acende os LEDs das posições solicitadas na cor azul e o display informará a quantidade a ser separada.
O operador realiza a leitura do EAN do produto na coleta (bipagem obrigatória — regra parametrizável) e pressiona o botão LED para confirmar a separação.
O operador segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições sejam visitadas.
Ao finalizar toda a separação do posto, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto foi concluída.
O operador reinduz a caixa na linha expressa onde seguirá para a próxima estação de picking.
Separação Frente + Costas:
Quando o pedido também requer itens das costas, os LEDs acendem na cor rosa indicando coleta simultânea frente e costas.
O operador realiza primeiro a coleta dos itens da frente conforme descrito acima.
Após a finalização da coleta da frente, o operador segue para separar os itens nas posições acionadas nas costas.
Os LEDs de picking costas possuem dinâmica diferente: o WCS informa o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking.
Após separar todos os itens (frente e costas), todas as posições são acesas na cor verde indicando conclusão, e o operador reinduz a caixa na linha expressa.
Exibição no PDV:
O PDV exibirá a lista de itens a serem coletados de acordo com o volume desviado, a quantidade de itens prevista e observação do pedido quando houver.
Após o operador pressionar o LED confirmando a coleta, a linha correspondente é pintada de verde no PDV.
Padrão de Cores nos LEDs:
Azul — separação (coleta na frente)
Verde — finalização do posto
Rosa — coleta frente + costas
Laranja — reabastecimento
Bipagem Obrigatória:
A bipagem é obrigatória neste projeto: o operador deve realizar a leitura do EAN do produto na coleta, além de pressionar o botão LED para confirmar a separação. Essa regra é parametrizável no sistema para futuros ajustes.
Bipagem Pós-Reabastecimento:
Sempre que uma posição de picking receber reabastecimento, o primeiro item coletado daquela posição deverá obrigatoriamente passar por bipagem do EAN, independentemente da regra geral de bipagem parametrizada. O objetivo é validar que o produto abastecido corresponde ao SKU cadastrado na posição, prevenindo erros de abastecimento. Após a primeira coleta validada, a posição retorna ao comportamento padrão de bipagem configurado.
Reindução pelo Operador:
O WCS orienta o separador pelo PDV quando for necessário reinduzir a caixa na linha.
Finalização e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde, indicando que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.
Pede Caixa: Caso o operador identifique que os itens solicitados não caberão fisicamente na caixa atual, poderá pressionar o botão "Pede Caixa" no PDV. O WCS finaliza a separação da caixa atual com os itens já coletados e a caixa segue para o final da linha. O WCS assume internamente a geração da caixa-filha, informando ao operador no Order Start o tamanho de caixa necessário para os itens excedentes. A caixa adicional será priorizada como próxima a ser enviada para a linha. O operador fará a separação somente dos itens que não couberam na caixa anterior. O WCS enviará ao WMS a confirmação de picking de ambas as caixas (original e filha) normalmente ao final da separação.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** 522e80c51379ad77

O Picking Cart é uma prateleira móvel equipada com 1 PDV (tablet) e 1 leitor de código de barras (mão com gatilho). É utilizado para itens de menor giro que não estão no FlowRack.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Coleta Picking Cart  
**Score:** — (semantico) | **ID:** bf930165cff0325b

Após o Order Start, será exibida uma lista de itens no PDV contendo endereço, produto, quantidade a ser coletada.
O operador se dirige até o endereço indicado e realiza a leitura do código do endereço.
O operador realiza a leitura do código do item.
O WCS informa a quantidade e em qual posição do Picking Cart o item deverá ser alocado.
O operador realiza a leitura do EAN de cada item coletado (bipagem item a item — regra parametrizável no WCS). Após bipar o item, o operador confirma a alocação na posição do Picking Cart correspondente. Caso a bipagem item a item esteja desativada, o operador informa a quantidade coletada e realiza apenas a leitura da etiqueta da caixa final para confirmar a separação.
A lista de itens no PDV será atualizada à medida que a quantidade for coletada. Quando a quantidade necessária for atingida, o WCS informa que a coleta para aquele item foi concluída.
Caso o operador não consiga coletar todos os itens do endereço, haverá a opção de clicar no botão "Finalizar Coleta". Com a bipagem item a item ativa, o WCS considera como separada apenas a quantidade de itens efetivamente bipados e registra o restante como corte (shortpicking). Com a bipagem desativada, o operador decrementa manualmente a quantidade no PDV e realiza a leitura da etiqueta da caixa para confirmar; a diferença entre o solicitado e o informado é registrada como shortpicking.
Após finalizar a coleta de todos os itens, o WCS informará que a separação foi concluída. O operador deverá se dirigir à indução na linha do FlowRack para que a caixa siga o fluxo normal. Caso existam itens a serem coletados no FlowRack, o volume seguirá o processo de separação PBL. Caso não haja itens no FlowRack, o volume seguirá direto para conferência/balança dinâmica.
Obs: Apenas a balança do Order Start será estática, as demais serão dinâmicas.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Picking Fracionado  
**Score:** — (nome-topico) | **ID:** 22b823268c639918

O processo de Picking Fracionado ocorre após a impressão dos volumes no Order Start, e o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Início do Processo:
O operador induz o volume na esteira, e, após a passagem da caixa plástica pelos pontos de decisão (scanner), o WCS verifica automaticamente se há algum item esperando coleta naquele posto.
Se houver coleta, o volume será desviado automaticamente para o posto correspondente. Caso contrário, o volume segue para o próximo ponto de decisão até ser identificado que a coleta deve ocorrer em algum posto específico.
Indicação Visual para Coleta:
Após o desvio, o WCS acende os LEDs de frente no posto de separação, sinalizando o local e a quantidade de itens a serem coletados.
Os LEDs de frente exibem 3 dígitos para identificar a quantidade de itens a serem coletados, sendo esses LEDs exclusivos para cada posição.
Coleta dos Itens:
O operador deve coletar fisicamente os itens solicitados, conforme indicado pelos LEDs, e realizar a leitura do EAN de cada item para validar a coleta. (a regra de bipar pode ser desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada com o apertar do LED.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um PDV para auxiliar o operador na coleta.
Coleta nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas, o WCS acende os LEDs da frente em rosa, sinalizando que a coleta será feita na parte de picking costas, além de acender os LEDs nas posições de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente, onde o WCS informa o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking, permitindo que o operador colete de maneira eficiente e sem confusão.
Finalização da Coleta:
O operador realiza a coleta de acordo com as indicações dos LEDs e valida cada item coletado através da leitura do EAN. (a regra de bipar pode ser desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada com o apertar do LED.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do PDV.
Ao acionar essa funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde, indicando que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário - Formulário.docx`  
**Heading:** Posições de Picking  
**Score:** — (semantico) | **ID:** 527e04a7111e423a

No processo de auditoria, haverá dois tipos de posições com características distintas:
Posição de Picking
Sempre terá somente um SKU por posição.
Pode estar localizada na linha dos flowracks ou no museu (picking cart).
É a posição onde são executadas as coletas.
Posição de Transfer
Pode agrupar mais de um SKU na mesma posição.
É a posição onde os itens ficam disponíveis para reabastecimento das posições de picking.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário1.docx`  
**Heading:** Posições de Picking  
**Score:** — (semantico) | **ID:** 72b665480754fe0e

No processo de auditoria, haverá dois tipos de posições com características distintas:
Posição de Picking
Sempre terá somente um SKU por posição.
Pode estar localizada na linha dos flowracks ou no museu (picking cart).
É a posição onde são executadas as coletas.
Posição de Transfer
Pode agrupar mais de um SKU na mesma posição.
É a posição onde os itens ficam disponíveis para reabastecimento das posições de picking.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Tipos de Posições  
**Score:** — (semantico) | **ID:** 8cd0f793e947475a

No processo de auditoria, haverá dois tipos de posições com características distintas: posições de picking e posições de transfer.
Posição de Picking
Sempre terá somente um SKU por posição.
Pode estar localizada na linha dos flowracks ou no museu (picking cart).
É a posição onde são executadas as coletas.
Posição de Transfer
Pode agrupar mais de um SKU na mesma posição.
É a posição onde os itens ficam disponíveis para reabastecimento das posições de picking.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Picking Cart.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** 5f7b95d8c03821c4

Para atender as demandas da operação visando os itens com menor curva, teremos o conceito de separação por Picking Cart. Esse conceito consiste em um modelo de prateleira móvel com auxílio do PDV, que é utilizado para fazer as coletas dos volumes de acordo com as posições informadas no sistema.
Como regra crítica, uma mesma caixa/volume nunca conterá itens de mais de uma remessa. O WCS é responsável por garantir essa segregação durante a alocação dos volumes no carrinho.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Picking Cart.docx`  
**Heading:** Estrutura do Picking Cart  
**Score:** — (semantico) | **ID:** 519969b3d967478e

Cada Picking Cart será composto por:
1x PDV (terminais), 1x carrinho apenas.
1x leitor de código de barras sem fio QuickScan Imager 2D QR Code com mira (USB), com gatilho.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Picking Cart.docx`  
**Heading:** Mapeamento do Picking Cart  
**Score:** — (semantico) | **ID:** 2ba6afac7961bd7d

Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da etiqueta impressa e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá acionar o botão Finalizar Mapeamento e seguir para a etapa de separação.
Após o mapeamento, o sistema libera as tarefas de coleta e o operador visualizará a lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Picking Cart.docx`  
**Heading:** Separação no Picking Cart  
**Score:** — (semantico) | **ID:** de1f8c7cf97b79d9

Na separação, a interface exibirá de forma clara e objetiva as informações essenciais para a coleta. O sistema WCS apresentará num primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado.
SKU: código identificador do produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual.
Unidade de medida: para indicar a quantidade a ser separada, a unidade de medida do produto e se a coleta será feita em unidades, caixas, frascos, pacotes, entre outros.
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.

---
**Origem:** [I23.125] ADITIVO — `I23.125 - PROJETO CRISTAL -  SP e MG - ESPECIFICAÇÃO DE ADITIVO - PERECIVEIS.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 6ead8253d3d5b213

ESPECIFICAÇÃO DE SOFTWARE
PROJETO CRISTAL – ADITIVO – NOVA AREA DE PICKING
I25.125 Cristal – 23/10/2025
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I23.125] ADITIVO — `I23.125 - PROJETO CRISTAL -  SP e MG - ESPECIFICAÇÃO DE ADITIVO - PERECIVEIS.docx`  
**Heading:** Nova Area de Separação  
**Score:** — (semantico) | **ID:** a9bd198ffa629861

O WCS deve estar preparado para atuar em mais uma área de separação além das já existentes: (Controlado e Não Controlado), essa nova área atenderá o setor de Perecíveis
Maturar a ideia
1. Cenário Atual e Desafios Principais
A operação de perecíveis possui particularidades que a diferenciam do fluxo padrão do armazém. O principal desafio é definir a melhor forma de incorporar essa operação ao WCS, considerando que:
A separação de caixas fechadas e fracionados ocorre na mesma célula de trabalho, muitas vezes para o mesmo pedido.
Não há uma distinção física ou sistêmica entre posições de picking (fração) e de caixa fechada; o mesmo local de armazenagem é usado para ambos os fins.
O processo envolve embalagens especiais (isopor e gelo), e a mudança não pode impactar a funcionalidade do sistema SAP de cubagem e peso.
2. Pontos em Aberto e Próximos Passos
A solução para este aditivo não está definida e requer mais discussões técnicas e processuais. As principais pendências a serem resolvidas são:
Definição do Fluxo Operacional: A maior questão é decidir se a operação no WCS será tratada inteiramente como um processo de "fracionado" (o que simplificaria a tela, mas dificultaria a captura da UC da caixa fechada) ou se serão criados dois processos distintos (Full Case e Fracionado) dentro da mesma estação de trabalho.
Impacto na Integração: Será necessário um estudo para avaliar se a integração via JSON existente é suficiente ou se precisará de alterações para suportar as particularidades do processo de perecíveis.
Viabilidade Física vs. Virtual: A solução deve ser aplicável a ambos os CDs, considerando as restrições de espaço físico em Pouso Alegre, que podem exigir uma configuração de "piquizinho" mais virtual do que física.
O tema foi colocado em standby para amadurecimento. A equipe Cristália irá detalhar melhor os requisitos, enquanto a equipe Invent consultará seus especialistas técnicos para uma próxima rodada de conversa.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Picking Fracionado  
**Score:** — (nome-topico) | **ID:** 7f3d1bbe44ac6022

O processo de Picking Fracionado ocorre após a impressão dos volumes no Order Start, e o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Início do Processo:
O operador induz o volume na esteira, e, após a passagem da caixa plástica pelos pontos de decisão (scanner), o WCS verifica automaticamente se há algum item esperando coleta naquele posto.
Se houver coleta, o volume será desviado automaticamente para o posto correspondente. Caso contrário, o volume segue para o próximo ponto de decisão até ser identificado que a coleta deve ocorrer em algum posto específico.
Indicação Visual para Coleta:
Após o desvio, o WCS acende os LEDs de frente no posto de separação, sinalizando o local e a quantidade de itens a serem coletados.
Os LEDs de frente exibem 3 dígitos para identificar a quantidade de itens a serem coletados, sendo esses LEDs exclusivos para cada posição.
Coleta dos Itens:
O operador deve coletar fisicamente os itens solicitados, conforme indicado pelos LEDs, e realizar a leitura do EAN de cada item para validar a coleta. (a regra de bipar pode ser desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada com o apertar do LED.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um PDV para auxiliar o operador na coleta.
Coleta nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas, o WCS acende os LEDs da frente em rosa, sinalizando que a coleta será feita na parte de picking costas, além de acender os LEDs nas posições de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente, onde o WCS informa o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking, permitindo que o operador colete de maneira eficiente e sem confusão.
Finalização da Coleta:
O operador realiza a coleta de acordo com as indicações dos LEDs e valida cada item coletado através da leitura do EAN. (a regra de bipar pode ser desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada com o apertar do LED.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do PDV.
Ao acionar essa funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde, indicando que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE REV.1 - ZENATUR.docx`  
**Heading:** Ajuste no processo de Picking Cart (PC)  
**Score:** — (semantico) | **ID:** 514919eac22d8474

Atualmente o processo de separação pelo Picking Cart, são separadas em itens frágeis e não frágeis, nesse caso o operador perde produtividade tendo a necessidade de um trajeto que pode se tornar repetitivo.
Para ganho de produtividade, MFC deve remover essa validação de item frágil ou não, e deverá separar tanto produtos considerados frágeis como normais em um único trajeto, ignorando quaisquer alterações anteriormente causadas por itens frágeis.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 95e4c1f4d0be298a

O sistema MFC receberá os pedidos, armazenando-os no banco de dados para posterior consulta. O operador, por sua vez, libera a quantidade de caixas no Order Start necessárias para atender a onda de separação daquele momento.
A automação realizará a leitura do código de barras com a informação do tamanho da caixa e imprimirá o código de barras na caixa referente aos dados de picking, automaticamente.
A automação enviará então as caixas para cada estação de picking correspondente. Em caso de Estação cheia, a caixa receberá um novo destino para a próxima estação que contem o mesmo SKU. Em caso de existir o SKU em somente uma estação, a caixa de picking então recircula no sistemaate retornar novamente àquela respectiva estação.

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.2. Picking Fracionados  
**Score:** — (nome-topico) | **ID:** 974a86333e20f687

Na linha automática, os totes devem ser desviados nas estações em que há local para ser realizado picking, lendo a etiqueta TOTE, vinculada ao pedido, no momento do desvio, o led da posição deverá acender e mostrar a quantidade, para que o operador saiba que deve fazer o picking naquela estação. Para os itens transportáveis fora da caixa, o sistema WCS deverá emitir uma etiqueta tote para identificação de cada volume. A regra para controlar o acender dos displays, deverá ser através de um parâmetro (flag) no sistema MFC/WCS, que habilitará ou desabilitará a função dos Leds. Permitindo assim que o operador controle a função no momento desejado.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.2. Picking Fracionados  
**Score:** — (nome-topico) | **ID:** 756b61f45b4554be

Na linha automática, os totes devem ser desviados nas estações em que há local para ser realizado picking, lendo a etiqueta TOTE, vinculada a tarefa, no momento do desvio, o led da posição deverá acender e mostrar a quantidade, para que o operador saiba que deve fazer o picking naquela estação. Para os itens transportáveis fora da caixa, o sistema WCS deverá emitir uma etiqueta tote para identificação de cada volume. A regra para controlar o acender dos displays, deverá ser através de um parâmetro (flag) no sistema MFC/WCS, que habilitará ou desabilitará a função dos Leds. Permitindo assim que o operador controle a função no momento desejado.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 7cc524b1823a6d95

O processo se inicia com o WMS(Sequoia) enviando para o MFC(Invent) os requerimentos do pedido a serem separados na estação de picking e a sugestão de tamanho de caixa e sub-caixa(caixa filha), operador realiza a impressão das etiquetas a serem expedidas, as impressões de etiquetas serão realizadas pelo WMS(Sequoia), e ao realizar a leitura do código de barras da etiqueta, visualiza em um display (12 dígitos) as informações descritas abaixo:
Para iniciar o picking, operador precisa realizar o Login no posto de picking, realizando a leitura do código de barras do crachá no leitor fixo.
O sistema não irá permitir iniciar o picking, caso não tenha nenhum operador logado no posto.
Pedidos SEM Sub-Caixa
Bipa etiqueta:
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar a descrição da caixa(master) e o total de volumes que o mesmo precisa separar.
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
Enquanto o operador realiza a separação, a quantidade de volumes mostradas no display é subtraída.
Quando o operador finalizar o picking daquele posto, todas as posições do posto acendem em verde.
Caso o pedido esteja parcialmente separado e precise seguir para outro posto, no display irá mostrar qual o posto seguinte.
Ao chegar no posto mostrado no display, realizar o mesmo procedimento do início do picking.
Nesse momento é enviada a integração com as informações de pedido/itens separados.
Operador induz a caixa na esteira, e operador realiza a expedição/conferência do pedido pelo WMS.
Pedidos COM Sub-Caixa
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar a descrição da caixa(master) e o total de volumes que o mesmo precisa separar.
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
Enquanto o operador realiza a separação, a quantidade de volumes mostradas no display é subtraída.
Quando o operador finalizar o picking daquele posto, todas as posições do posto acendem em verde.
Caso o pedido esteja parcialmente separado, o mesmo display irá mostrar qual o posto seguinte.
Ao chegar no posto mostrado no display, realizar o mesmo procedimento do início do picking.
Realiza a separação do restante dos itens do pedido, e ao finalizar todos os leds do posto acendem em verde indicando que foi finalizado o picking.
No caso de Sub-Caixa, o display irá mostrar o próximo posto onde irá separar os itens que irão compor a Sub-Caixa
No posto indicado, operador realiza a leitura da etiqueta.
No display: mostrar a descrição da Sub-Caixa e o total de volumes que o mesmo precisa separar.
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
Enquanto o operador realiza a separação, a quantidade de volumes mostradas no display é subtraída.
Quando o operador finalizar o picking daquele posto, todas as posições do posto acendem em verde.
Nesse momento é enviada a integração com todas as informações de pedido/itens separados.
Operador induz a caixa na esteira, e operador realiza a expedição/conferência do pedido pelo WMS.
Modelo do display:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Picking (Coringa/Especial)  
**Score:** — (nome-topico) | **ID:** 3201acc9d012f9d9

Uma mesa denominada como “Especial”, que terá produtos Starbucks e Nescafé, essa mesa será de uso exclusivo para esses produtos. Onde o operador ao realizar a leitura do código de barras, irá visualizar as informações no display, e fará a separação desse pedido nessa estação.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** eacbf49fcc3e2b3c

POST
REQUEST:
WMS (Cliente)  MFC (Invent)

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** 37209416fa5a154b

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** bc13ddd8881e2c29

POST
REQUEST: http://10.21.71.80:9090/webservice_mfc/ptl20_rj/wave
WMS (Cliente)  MFC (Invent)

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** fa5a001272d902b6

O processo se inicia com o WMS (cliente) enviando para o MFC (Invent) os requerimentos do pedido a serem separados na estação de picking e a sugestão de tamanho de caixa e sub-caixa, operador realiza a impressão das etiquetas a serem expedidas, as impressões de etiquetas serão realizadas pelo WMS, e ao realizar a leitura do código de barras da etiqueta, visualiza em um display (12 dígitos) as informações descritas abaixo:
Para iniciar o picking, operador precisa realizar o Login no posto de picking, realizando a leitura do código de barras do crachá no leitor fixo.
O sistema não irá permitir iniciar o picking, caso não tenha nenhum operador logado no posto.
Pedidos SEM Sub-Caixa
Bipa etiqueta:
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar número do pedido (3 últimos dígitos) + código da caixa sugerida + quantidade de volumes e o próximo passo da caixa (Confirma no botão do display).
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
Operador efetua picking (ao finalizar, confirma no botão)
Caso o pedido esteja parcialmente separado e precise seguir para outra estação, no display mostrar qual a estação seguinte.
Ao chegar estação mostrada no display, realizar o mesmo procedimento do início do picking.
Ao finalizar toda a separação(picking) em todos os postos, display mostra informação que finalizou o picking.
Operador solta a caixa na esteira, e operador realiza a expedição/conferência do pedido pelo WMS.
Caso ocorra algum erro, mostrar mensagem no display.
Pedidos COM Sub-Caixa
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar número do pedido (3 últimos dígitos) + código da caixa sugerida + quantidade de volumes e o próximo passo da caixa (Confirma no botão do display).
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
As cores dos leds, devem distinguir o que é para ser separado na caixa master e outra cor para o tipo de sub-caixa. Por exemplo:
Caixa Master (Led Azul)
Sub-caixa 1 (Led Laranja)
Sub-caixa 2 (Led Verde)
Sub-caixa 3 (Led Rosa)
Sub-caixa 4 (Led Ciano)
Sub-caixa 5 (Led Vermelho)
Operador efetua picking (ao finalizar, confirma no botão)
Caso o pedido esteja parcialmente separado e precise seguir para outra estação, no display mostrar qual a estação seguinte.
Ao chegar estação mostrada no display, realizar o mesmo procedimento do início do picking.
Ao finalizar toda a separação(picking) em todos os postos, display mostra informação que finalizou o picking.
Operador induz a caixa na esteira, e no final da esteira operador realiza a expedição/conferência do pedido pelo WMS.
Caso ocorra algum erro, mostrar mensagem no display.
Modelo do display:

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Picking (Coringa/Especial)  
**Score:** — (nome-topico) | **ID:** 1e965bc30fe9f0f9

Uma mesa denominada como “Especial”, que terá produtos Starbucks e Nescafé, essa mesa será de uso exclusivo para esses produtos. Onde o operador ao realizar a leitura do código de barras, irá visualizar as informações no display, e fará a separação desse pedido nessa estação.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** b5765755c4162038

POST
REQUEST:
WMS (Cliente)  MFC (Invent)

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** 0693143038f2b0b8

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE INTEGRACOES - PTL RJ.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** dbc92b1042b52e94

POST
REQUEST: http://10.21.71.80:9090/webservice_mfc/ptl20_rj/wave
WMS (Cliente)  MFC (Invent)

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 236d6050b92e53bc

O processo se inicia com o WMS (cliente) enviando para o MFC (Invent) os requerimentos do pedido a serem separados na estação de picking e a sugestão de tamanho de caixa e sub-caixa, operador realiza a impressão das etiquetas a serem expedidas, as impressões de etiquetas serão realizadas pelo WMS, e ao realizar a leitura do código de barras da etiqueta, visualiza em um display (12 dígitos) as informações descritas abaixo:
Para iniciar o picking, operador precisa realizar o Login no posto de picking, realizando a leitura do código de barras do crachá no leitor fixo.
O sistema não irá permitir iniciar o picking, caso não tenha nenhum operador logado no posto.
Pedidos SEM Sub-Caixa
Bipa etiqueta:
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar número do pedido (3 últimos dígitos) + código da caixa sugerida + quantidade de volumes e o próximo passo da caixa (Confirma no botão do display).
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
Operador efetua picking (ao finalizar, confirma no botão)
Caso o pedido esteja parcialmente separado e precise seguir para outra estação, no display mostrar qual a estação seguinte.
Ao chegar estação mostrada no display, realizar o mesmo procedimento do início do picking.
Ao finalizar toda a separação(picking) em todos os postos, display mostra informação que finalizou o picking.
Operador solta a caixa na esteira, e operador realiza a expedição/conferência do pedido pelo WMS.
Caso ocorra algum erro, mostrar mensagem no display.
Pedidos COM Sub-Caixa
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar número do pedido (3 últimos dígitos) + código da caixa sugerida + quantidade de volumes e o próximo passo da caixa (Confirma no botão do display).
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
As cores dos leds, devem distinguir o que é para ser separado na caixa master e outra cor para o tipo de sub-caixa. Por exemplo:
Caixa Master (Led Azul)
Sub-caixa 1 (Led Laranja)
Sub-caixa 2 (Led Verde)
Sub-caixa 3 (Led Rosa)
Sub-caixa 4 (Led Ciano)
Sub-caixa 5 (Led Vermelho)
Operador efetua picking (ao finalizar, confirma no botão)
Caso o pedido esteja parcialmente separado e precise seguir para outra estação, no display mostrar qual a estação seguinte.
Ao chegar estação mostrada no display, realizar o mesmo procedimento do início do picking.
Ao finalizar toda a separação(picking) em todos os postos, display mostra informação que finalizou o picking.
Operador induz a caixa na esteira, e no final da esteira operador realiza a expedição/conferência do pedido pelo WMS.
Caso ocorra algum erro, mostrar mensagem no display.
Modelo do display:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Picking (Coringa/Especial)  
**Score:** — (nome-topico) | **ID:** 432c109c94ff7872

Uma mesa denominada como “Especial”, que terá produtos Starbucks e Nescafé, essa mesa será de uso exclusivo para esses produtos. Onde o operador ao realizar a leitura do código de barras, irá visualizar as informações no display, e fará a separação desse pedido nessa estação.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 0860492c5df90072

POST
REQUEST:
WMS (Cliente)  MFC (Invent)

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** 77cb13eaf91f5cab

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY - DPH.HIGIENE.LIMPEZA REV1.docx`  
**Heading:** Agrupamento de categorias  
**Score:** — (semantico) | **ID:** 57dcd614115578f1

O Velox deve permitir que os operadores ajustem parâmetros de acordo com as necessidades operacionais. Esse para visa editar o agrupamento de categorias de produtos dentro da caixa de separação. Este recurso permite que os operadores organizem e reagrupem categorias de produtos de maneira eficiente, conforme as demandas de acordo com a regra de negócio do cliente. Esse agrupamento deve valer para todas as caixas.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Picking – Separação  
**Score:** — (nome-topico) | **ID:** 3efdc5abf3da1170

Estações de picking:
Teremos 54 módulos de flowracks, 27 postos de picking de cada lado, cada posto pode ter entre 15 e 35 posições/SKU.
Caixa plástica segue pela esteira expressa, leitor fixo faz a leitura do código da caixa, e caso exista produtos a serem separados no posto, a caixa é desviada automaticamente para o posto de separação.
Operador ao receber a caixa plástica no posto fara a separação dos produtos de acordo com a visualização dos leds e quantidades necessárias.
Para posições de itens/produtos unitários os leds serão acesos na cor amarela (para isso é preciso que em algum campo na integração, venha distinguindo o que é unitário e o que é display)
Para posições de itens/display os leds serão acesos na cor azul. (para isso é preciso que em algum campo na integração, venha distinguindo o que é unitário e o que é display)
Em cada posto de separação, terá 1 display de 12 dígitos (AT70C) que informará os 12 últimos dígitos da caixa que está em processo de separação do momento, ao finalizar a separação dos itens o display mostrara o número da próxima caixa que está aguardando a separação, o operador que está realizando a separação então confirma se o número mostrado no display é o mesmo da caixa que está realizando plástica, e inicia o processo de separação.
Ao finalizar a separação no posto requisitado, serão acesos todos os leds na cor verde, operador confirma através de qualquer botão aceso e induz a caixa manualmente na esteira expressa, seguindo assim para o próximo posto.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Aditivo_Integracao_JSON_REV.1.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 2e83abe4a9af386c

Não haverá alterações sistêmicas no processo de picking.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** bc90816e3f072183

O processo se inicia com o WMS (cliente) enviando para o MFC (Invent) os requerimentos do pedido a serem separados na estação de picking e a sugestão de tamanho de caixa e sub-caixa, operador realiza a impressão das etiquetas a serem expedidas, as impressões de etiquetas serão realizadas pelo WMS, e ao realizar a leitura do código de barras da etiqueta, visualiza em um display (12 dígitos) as informações descritas abaixo:
Para iniciar o picking, operador precisa realizar o Login no posto de picking, realizando a leitura do código de barras do crachá no leitor fixo.
O sistema não irá permitir iniciar o picking, caso não tenha nenhum operador logado no posto.
Pedidos SEM Sub-Caixa
Bipa etiqueta:
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar número do pedido (3 últimos dígitos) + código da caixa sugerida + quantidade de volumes e o próximo passo da caixa (Confirma no botão do display).
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
Operador efetua picking (ao finalizar, confirma no botão)
Caso o pedido esteja parcialmente separado e precise seguir para outra estação, no display mostrar qual a estação seguinte.
Ao chegar estação mostrada no display, realizar o mesmo procedimento do início do picking.
Ao finalizar toda a separação(picking) em todos os postos, display mostra informação que finalizou o picking.
Operador solta a caixa na esteira, e operador realiza a expedição/conferência do pedido pelo WMS.
Caso ocorra algum erro, mostrar mensagem no display.
Pedidos COM Sub-Caixa
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar número do pedido (3 últimos dígitos) + código da caixa sugerida + quantidade de volumes e o próximo passo da caixa (Confirma no botão do display).
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
As cores dos leds, devem distinguir o que é para ser separado na caixa master e outra cor para o tipo de sub-caixa. Por exemplo:
Caixa Master (Led Azul)
Sub-caixa 1 (Led Laranja)
Sub-caixa 2 (Led Verde)
Sub-caixa 3 (Led Rosa)
Sub-caixa 4 (Led Ciano)
Sub-caixa 5 (Led Vermelho)
Operador efetua picking (ao finalizar, confirma no botão)
Caso o pedido esteja parcialmente separado e precise seguir para outra estação, no display mostrar qual a estação seguinte.
Ao chegar estação mostrada no display, realizar o mesmo procedimento do início do picking.
Ao finalizar toda a separação(picking) em todos os postos, display mostra informação que finalizou o picking.
Operador induz a caixa na esteira, e no final da esteira operador realiza a expedição/conferência do pedido pelo WMS.
Caso ocorra algum erro, mostrar mensagem no display.
Modelo do display:

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Picking (Coringa/Especial)  
**Score:** — (nome-topico) | **ID:** d832c5fbea75016e

Uma mesa denominada como “Especial”, que terá produtos Starbucks e Nescafé, essa mesa será de uso exclusivo para esses produtos. Onde o operador ao realizar a leitura do código de barras, irá visualizar as informações no display, e fará a separação desse pedido nessa estação.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 38718dd53dc5e734

POST
REQUEST:
WMS (Cliente)  MFC (Invent)

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** 7cd48f8caef9e638

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 3779e8d2395cb092

O processo se inicia com o WMS (cliente) enviando para o MFC (Invent) os requerimentos do pedido a serem separados na estação de picking e a sugestão de tamanho de caixa e sub-caixa, operador realiza a impressão das etiquetas a serem expedidas, as impressões de etiquetas serão realizadas pelo WMS, e ao realizar a leitura do código de barras da etiqueta, visualiza em um display (12 dígitos) as informações descritas abaixo:
Para iniciar o picking, operador precisa realizar o Login no posto de picking, realizando a leitura do código de barras do crachá no leitor fixo.
O sistema não irá permitir iniciar o picking, caso não tenha nenhum operador logado no posto.
Pedidos SEM Sub-Caixa
Bipa etiqueta:
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar número do pedido (3 últimos dígitos) + código da caixa sugerida + quantidade de volumes e o próximo passo da caixa (Confirma no botão do display).
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
Operador efetua picking (ao finalizar, confirma no botão)
Caso o pedido esteja parcialmente separado e precise seguir para outra estação, no display mostrar qual a estação seguinte.
Ao chegar estação mostrada no display, realizar o mesmo procedimento do início do picking.
Ao finalizar toda a separação(picking) em todos os postos, display mostra informação que finalizou o picking.
Operador solta a caixa na esteira, e operador realiza a expedição/conferência do pedido pelo WMS.
Caso ocorra algum erro, mostrar mensagem no display.
Pedidos COM Sub-Caixa
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar número do pedido (3 últimos dígitos) + código da caixa sugerida + quantidade de volumes e o próximo passo da caixa (Confirma no botão do display).
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
As cores dos leds, devem distinguir o que é para ser separado na caixa master e outra cor para o tipo de sub-caixa. Por exemplo:
Caixa Master (Led Azul)
Sub-caixa 1 (Led Laranja)
Sub-caixa 2 (Led Verde)
Sub-caixa 3 (Led Rosa)
Sub-caixa 4 (Led Ciano)
Sub-caixa 5 (Led Vermelho)
Operador efetua picking (ao finalizar, confirma no botão)
Caso o pedido esteja parcialmente separado e precise seguir para outra estação, no display mostrar qual a estação seguinte.
Ao chegar estação mostrada no display, realizar o mesmo procedimento do início do picking.
Ao finalizar toda a separação(picking) em todos os postos, display mostra informação que finalizou o picking.
Operador induz a caixa na esteira, e no final da esteira operador realiza a expedição/conferência do pedido pelo WMS.
Caso ocorra algum erro, mostrar mensagem no display.
Modelo do display:

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Picking (Coringa/Especial)  
**Score:** — (nome-topico) | **ID:** abfdf2eb3e7e9ef9

Uma mesa denominada como “Especial”, que terá produtos Starbucks e Nescafé, essa mesa será de uso exclusivo para esses produtos. Onde o operador ao realizar a leitura do código de barras, irá visualizar as informações no display, e fará a separação desse pedido nessa estação.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 60faee3570ffb8f7

POST
REQUEST:
WMS (Cliente)  MFC (Invent)

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** 9f3f5a466ea59464

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 5b5efa295c5efd20

O processo se inicia com o WMS (cliente) enviando para o MFC (Invent) os requerimentos do pedido a serem separados na estação de picking e a sugestão de tamanho de caixa e sub-caixa, operador realiza a impressão das etiquetas a serem expedidas, as impressões de etiquetas serão realizadas pelo WMS, e ao realizar a leitura do código de barras da etiqueta, visualiza em um display (12 dígitos) as informações descritas abaixo:
Para iniciar o picking, operador precisa realizar o Login no posto de picking, realizando a leitura do código de barras do crachá no leitor fixo.
O sistema não irá permitir iniciar o picking, caso não tenha nenhum operador logado no posto.
Pedidos SEM Sub-Caixa
Bipa etiqueta:
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar a descrição da caixa(master) e operador deverá apertar o botão do display e com isso devemos mostrar número do pedido (3 últimos dígitos) + quantidade de volumes e o próximo passo da caixa (Confirma no botão do display).
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
Operador efetua picking (ao finalizar, confirma no botão)
Caso o pedido esteja parcialmente separado e precise seguir para outra estação, no display mostrar qual a estação seguinte.
Ao chegar estação mostrada no display, realizar o mesmo procedimento do início do picking.
Ao finalizar toda a separação(picking) em todos os postos, display mostra informação que finalizou o picking.
Operador solta a caixa na esteira, e operador realiza a expedição/conferência do pedido pelo WMS.
Caso ocorra algum erro, mostrar mensagem no display.
Pedidos COM Sub-Caixa
Operador realiza a leitura do código de barras da etiqueta.
No display: mostrar a descrição da caixa(master) e operador deverá apertar o botão do display e com isso devemos mostrar número do pedido (3 últimos dígitos) + quantidade de volumes e o próximo passo da caixa (Confirma no botão do display).
Após isso, leds devem acender indicando as posições e quantidades a serem separadas no posto de picking.
As cores dos leds, devem distinguir o que é para ser separado na caixa master e outra cor para o tipo de sub-caixa. Por exemplo:
Caixa Master (Led Azul)
Sub-caixa 1 (Led Laranja)
Sub-caixa 2 (Led Verde)
Sub-caixa 3 (Led Rosa)
Sub-caixa 4 (Led Ciano)
Sub-caixa 5 (Led Vermelho)
Operador efetua picking (ao finalizar, confirma no botão)
Caso o pedido esteja parcialmente separado e precise seguir para outra estação, no display mostrar qual a estação seguinte.
Ao chegar estação mostrada no display, realizar o mesmo procedimento do início do picking.
Ao finalizar toda a separação(picking) em todos os postos, display mostra informação que finalizou o picking.
Operador induz a caixa na esteira, e no final da esteira operador realiza a expedição/conferência do pedido pelo WMS.
Caso ocorra algum erro, mostrar mensagem no display.
Modelo do display:

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Picking (Coringa/Especial)  
**Score:** — (nome-topico) | **ID:** 6166b75b3f4925a3

Uma mesa denominada como “Especial”, que terá produtos Starbucks e Nescafé, essa mesa será de uso exclusivo para esses produtos. Onde o operador ao realizar a leitura do código de barras, irá visualizar as informações no display, e fará a separação desse pedido nessa estação.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** b2a14846f8455f7b

POST
REQUEST:
WMS (Cliente)  MFC (Invent)

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** ca14e7a11fbf43c8

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** 28c85e75d2017696

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 1c49c421bec4a0da

O processo de picking será realizado a partir do momento em que a caixa for lida por um leitor fixo e parar na frente da posição de picking e seu respectivo posto. Quando a caixa parar no posto, irá acender as posições nos leds laterais e/ou frontal e a quantidade a ser separada.
Operador localiza esses endereços visualmente e assim irá realizar o picking do produto na quantidade que está aparecendo no led.
Caso não tenha a quantidade solicitada, operador irá apertar um botão ao lado do led, informando a quantidade real que foi separada, realizando assim o short picking.
Após o operador realizar o picking dos produtos ele apertara o led do endereço significando que ele já efetuou o picking.
Quando finalizar todo o picking do posto, o sistema irá acender todos os led’s com a cor verde, informando que o picking daquele posto foi finalizado, assim o operador irá apertar qualquer botão para dar sequência da caixa na esteira, que será encaminhada para o próximo posto ou seguir para o packing.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** 60c427acbf63ed3a

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** a024a3d46ab0de5f

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** fe30aa1f900523d6

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Picking pendentes  
**Score:** — (nome-topico) | **ID:** 5bf3a7d7f095e721

Na tela Picking pendentes, mostra as caixas plásticas com separação pendente. A figura mostra essa tela que tem os seguintes dados:
Número Caixa Plástica: Número de identificação da caixa plástica.
Número Picking: Número de identificação do picking.
Quantidade Postos: Quantidade de postos em que as caixas plásticas estão pendentes de separação.
Quantidade Itens: Quantidade de itens que estão pendentes.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE(RASC) - FASE.1 VER.1.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 64e1d6a4cf97104c

O processo de picking será realizado a partir do momento em que a caixa para na frente da posição de picking e seu respectivo posto. Quando a caixa parar no posto, irá acender as posições nos leds laterais e/ou frontal e a quantidade a ser separada.
Operador localiza esses endereços visualmente e assim irá realizar o picking do produto na quantidade que está aparecendo no led.
Caso não tenha a quantidade solicitada, operador irá apertar um botão ao lado do led, informando a quantidade real que foi separada, realizando assim o short picking.
Após o operador realizar o picking dos produtos ele apertara o led do endereço significando que ele já efetuou o picking.
Quando finalizar todo o picking do posto, o sistema irá acender todos os led’s com a cor verde, informando que o picking daquele posto foi finalizado, assim o operador irá apertar qualquer botão para dar sequência da caixa na esteira, que será encaminhada para o próximo posto ou seguir para o packing.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Picking Rack  
**Score:** — (nome-topico) | **ID:** e9031ae537223432

O descritivo abaixo refere-se as regras de negócio para a solução prevista para o cenário operacional Picking Rack que será o responsavel pelo tratamento de separação dos produtos/itens sem posições cadastradas nos Flow Racks do projeto PTL 2.0 em Araçariguama – SP.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Picking Rack  
**Score:** — (nome-topico) | **ID:** cf80fac8dccf62e0

O descritivo abaixo refere-se as regras de negócio para a solução prevista para o cenário operacional Picking Rack que será o responsavel pelo tratamento de separação dos produtos/itens sem posições cadastradas nos Flow Racks do projeto PTL 2.0 em Araçariguama – SP.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Picking – Separação  
**Score:** — (nome-topico) | **ID:** 324e10d1686dcf18

Os volumes a serem transportados na esteira, serão caixas plásticas.
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido, e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.
Em caso de não haver separação, a caixa seguirá reto para o próximo posto.
Em caso de haver separação, a caixa será desviada para o posto.
Em cada estação de todos os níveis, haverá um display de 06 caracteres onde deverá aparecer o número da caixa em separação no momento.
Em cada estação frente de separação, terá 1 display de 06 dígitos (AT706) que informará o número da caixa que está em processo de separação no momento, ao finalizar a separação dos itens dos postos do picking frente, caso tenha itens a ser separados no picking costas, no mesmo display informará o operador a rua que deve seguir, caso não tenha picking costas, o mesmo display mostrará o número da próxima caixa que está aguardando a separação, o operador então confirma visualmente se o número mostrado no display é o mesmo da caixa plástica, e inicia o processo de separação.
Durante o processo de separação do pedido, os postos com leds 3 (três) Dígitos + botão por posição acenderão na cor azul, informando a posição e quantidade a ser separada, e os postos com  display 10 (dez) Dígitos + botão por posto acenderá informando o endereço e quantidade do item a ser separado, o operador realiza a separação e ao finalizar pressiona o botão para confirmar, caso tenha outro item a ser separado nesse posto, a informação no display será atualizada informando o endereço e quantidade do próximo item.
Ao finalizar a separação de todos os postos da estação, todos os displays/led serão acesos informando ao operador que não existe mais picking, com isso o operador aperta qualquer botão e a caixa está pronta para seguir para a próxima estação. Operador induz a caixa manualmente na esteira, seguindo assim para a próxima estação.
O mesmo SKU poderá estar em mais de uma posição, desde que não seja no mesmo posto.
Caso a quantidade física não atenda a quantidade solicitada, o operador seleciona no próprio display a quantidade real separada, realizando assim o processo de shortpicking.
Pedidos que ocorreram shortpicking serão tratados individualmente na conferência.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Picking – Separação  
**Score:** — (nome-topico) | **ID:** 5a305e873d2aa091

Após o vínculo da caixa plástica com o pedido, ela segue pela linha expressa, onde existirá um leitor fixo para cada estação de separação. Após a leitura, caso tenha produtos a serem separados no posto correspondente a caixa então é desviada.
Os Leds das posições serão acesos informando a quantidade que deve ser separada naquela posição do Led. Ao realizar a separação o operador aperta o botão confirmando a separação daquela posição.
Uma vez finalizada a separação dos produtos daquele posto, todos os Leds acenderão indicando o fim do picking daquele posto.
Caso exista produtos a serem separados no picking costas, será mostrada a informação nos Leds da frente, e os Leds das posições do picking costas acenderão informando a quantidade a ser separada naquela posição, o operador realiza a separação de todos os produtos, ao finalizar todos os leds do posto acenderão na cor verde, indicando o fim do picking naquele posto.
Caso não tenha produtos a serem separados na estação a caixa segue na linha expressa para a próxima estação.
Shortpicking
Caso a quantidade física do produto, não atenda a quantidade solicitada, o operador seleciona no próprio display a quantidade real separada, realizando assim o processo de shortpicking.
Para esse tipo de pedido o operador da estação de conferência fara o tratamento deste pedido, essa definição deverá ser tomada pelo operador, que deverá tomar a decisão de enviar o pedido somente com as quantidades que foram separadas, ou ele completa o pedido.
Somente após esse tratamento, VELOX envia integração de confirmação de separação.

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.11.docx`  
**Heading:** Picking – Separação  
**Score:** — (nome-topico) | **ID:** 1073f3106a06f985

A caixa seguirá pela linha expressa e fará leitura da etiqueta através de um scanner fixo, para identificar se tem pedido a ser separado neste posto.
Em caso de não haver separação, a caixa seguirá reto.
Em caso de haver separação, a caixa será desviada para este posto.
Estações de picking:
Teremos 14 postos de picking, 48 displays por estação.
A caixa após sair da linha expressa deverá desviar para esquerda ou direita para realizar o picking. Respeitando a ordem, se houver separação dos dois lados, iniciar sempre do lado direito do posto, e quando retornar para a linha em caso de necessidade de separação no posto da esquerda, a caixa deverá ser desviada novamente.
Operador separa a quantidade solicitada no display e aperta o led para confirmar a separação.
Em cada estação haverá um display de 12 caracteres onde deverá aparecer os 12 últimos dígitos da caixa.
O mesmo SKU poderá estar em mais de uma posição, desde que não seja no mesmo posto.
Se não houver mais separação para ser realizada nessa estação, uma linha de leds irá acender na cor verde. Operador irá confirmar em um dos leds verdes (Neste momento o sistema MFC enviará para o SAP, a confirmação de picking), e a caixa está pronta para seguir para a próxima estação.
Em caso de falta de produto, o operador irá realizar o shortpicking, através da seta para baixo ao lado do led e informar a quantidade que está sendo separada.
Essa caixa que teve o shortpiciking, quando chegar no final da linha antes da seladora, haverá um scanner e 1 led onde será verificado se houve o shortpicking, caso sim o led acende vermelho, essa caixa é retirada e volta para o início da linha após a etiquetadora, onde deverá ser desviada na estação que teve o corte para completar a separação.
Caso o pedido esteja separado completamente, ao chegar no final da linha antes da seladora, acenderá o led em verde, e o volume seguirá para seladora.
Após finalizado o picking em todas as estações, a caixa seguirá para a fechadora.
Controle de quantidade de produtos por flowrack, será por cadastro de produtos.
Família de produtos:
Produtos Oncológicos
Produtos Hospitalares
Promocionais
Amostra Grátis
Em cada caixa poderá ir mais de um tipo de produto, respeitando a regra de família de produtos, onde não pode ser misturado duas famílias na mesma caixa.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Picking – Separação  
**Score:** — (nome-topico) | **ID:** de724e6e32eae8ca

Os volumes a serem transportados na esteira serão caixas de papelão e caixas plásticas, para essa operação teremos (4 Tipos de Caixas de papelão e somente um tipo de caixa plástica)
Para a filial de Porto Alegre o pedido é separado na caixa plástica e essa mesma caixa segue até o destino final, retornando posteriormente, esse controle será feito no cadastro da caixa pela filial.
Caso exista a necessidade de outra filial também utilizar caixa plástica, o sistema VELOX será capaz de incluir a filial nesse cenário via tela de cadastro.
Para o restante das filiais o pedido é separado em caixas de papelão, e caso necessário essa caixa é trocada por outra de papelão na estação de conferência.
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido, e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.
Durante o processo de separação do pedido, os leds das posições acenderão na cor verde, informando a posição e quantidade a ser separada, e o display da linha acenderá informando o número da caixa que está sendo separada no momento, o operador realiza a separação e ao finalizar pressiona o botão para confirmar, o número da próxima caixa é mostrado no mesmo display e os leds das posições acenderá para que o processo seja repetido até que se encerrem as separações daquele posto.
Uma vez finalizada a separação dos produtos daquele posto, caso exista produtos a serem separados no picking costas (gradeado), será mostrada a informação nos displays da frente, o operador ao apertar o botão no picking costas (gradeado) os displays das linhas acenderão informando a posição e a quantidade a ser separada, o operador realiza a separação e ao finalizar pressiona o botão novamente, o próximo endereço/quantidade é mostrado no mesmo display que acenderá para que o processo seja repetido até que se encerrem as separações daquele pedido, o display informará o fim da separação.
Caso a quantidade física não atenda a quantidade solicitada, o operador seleciona no próprio display a quantidade real separada, realizando assim o processo de shortpicking.
Pedidos que ocorreram shortpicking serão tratados individualmente na conferência.
Caso o operador no momento da separação identifique que a caixa não será suficiente para atender aquela separação por completa, deverá realizar o processo de solicitar caixa adicional.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** fbda091762673eb1

Serão utilizados 8 Picking Carts na separação dos pedidos, cada um deles possui a capacidade de 6 (Seis) posições com LEDs e um PDV com acesso ao sistema Velox para auxílio do operador na coleta dos itens.
Serão no total 48 caixas com identificação para serem utilizadas nos processos Picking cart simultaneamente.
Para a coleta realizada pelo Picking Cart a operação possui dois tipos de itens: Frágeis e Não Frágeis. Os dois tipos não podem ser misturados na mesma caixa.
A separação será segregada por zonas que serão cadastradas pelo usuário da maneira que melhor atender suas necessidades. As zonas serão compostas por ruas, não sendo permitido uma rua possuir duas zonas distintas. Responsabilidade do cliente informar se a zona é destinada para produtos que podem ou não passar na esteira (Picking coletor) através do cadastro de zona no Velox.
O sistema sempre irá priorizar o preenchimento da caixa, podendo ocorrer a separação de 2 ou mais pedidos na mesma caixa em casos que o pedido não ocupar o espaço mínimo exigido, sendo segregado posteriormente no Put to Wall.
Outra possibilidade é a separação de vários pedidos que são compostos por apenas um item na mesma caixa, otimizando o tempo e a quantidade de movimentação para coleta desses pedidos. Esta caixa será sinalizada posteriormente na conferência que se trata de pedidos MONO, onde o operador realizará a leitura de cada um dos itens pertencentes a caixa e o sistema irá gerar a etiqueta de expedição para cada item/pedido e ser vinculada após a conferência/Packing.
O processo de separação no Picking cart será realizado através de uma lista exibida no PDV com os endereços que serão visitados, quantidade e o SKU. Ao realizar a leitura do código do endereço e o EAN, irá acender os LEDs na cor verde e quantas unidades deve ser coletada para as caixas/posição que possuírem aquele SKU. O operador deve pressionar o LED para indicar ao sistema a coleta do item. O Velox também irá exibir uma lista de separação de produtos no PDV com a posição do LED e quantidade que deve ser coletada.
Caso não tenha ou tenha apenas parte do produto para coleta, o operador deve informar a quantidade que for coletada, através da unidade indicada nos Leds ou PDV, e o sistema mudará o status daquela caixa para obrigatoriamente ser passada para a área de análise de corte. A posição/item que for confirmada o corte será bloqueada para as demais levas e as tratativas serão feitas pelo time de análise de corte.
O operador será obrigado a visitar todos os endereços da lista exibida pela ordem de separação, caso contrário não conseguira seguir com a próxima etapa do processo.
Com todos os endereços visitados e realizados suas respectivas coletas, terá um botão de “finalizar coleta” que terá a função de transferir as caixas para duas áreas: Área de análise de corte e Área de recebimento.
Área de análise de corte (Específico para os itens conformes) será direcionada para todas as caixas que possuírem pendências de coletas (itens pendentes de separação e ShortPicking) e serão verificadas se o corte será aceito ou não.
Área de Recebimento será para colocar todas as caixas que tiveram todos os seus itens coletados e estão prontos para serem induzidos na linha. Apesar de ter muitas posições de consolidação, não haverá balanceamento por parte do Velox.
A tela de Finalização de tarefa terá duas colunas, mostrando qual caixa irá para cada área. O processo de transferência será realizado através da leitura da etiqueta da caixa e da posição final de transferência. Velox deve validar se o destino está correto com o esperado e mostrar de maneira otimizada qual caixa está sendo realizada a transferência a cada leitura.
NOTA: o Velox não será responsável pelo balanceamento e controle de estoque das posições de Picking.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Picking Coletor  
**Score:** — (nome-topico) | **ID:** 03410cada43a435d

O Picking coletor poderá  ser realizado em qualquer rua da operação atuando como contingencia, porém ele sempre será utilizado nas zonas que possuem os produtos que não são possíveis de serem passados na esteira.
O WCS deverá exibir as ruas/zonas que são exclusivas do coletor primeiro, porém deve exibir as demais ruas / zonas
Com o carrinho vinculado no Order start o coletor exibirá uma lista com endereço, quantidade e SKU para validação do Velox. Após a leitura do endereço de Picking e EAN do item a ser separado.
O processo para coletar o item é: realizar a leitura do endereço, então realizar a leitura do código do item (EAN) e finaliza confirmando a quantidade coletada e realizando a leitura do número do carrinho. O velox deve atualizar de maneira otimizada as linhas da tabela durante e após coleta dos itens. Em caso de corte nas unidades que deveriam ser coletadas, a posição/item que for confirmada o corte será bloqueada e as tratativas serão feitas pelo time de análise de corte.
O operador será obrigado a visitar todos os endereços da lista exibida pela ordem de separação. Caso contrário não conseguira seguir com a próxima etapa do processo.
Com todos os endereços visitados e realizados suas respectivas coletas, terá um botão de “finalizar coleta” onde o sistema irá informar se o carrinho deve ser transferido para a análise de corte (destinado para os não conformes) ou estarão liberadas para serem levadas a conferência/PTL.
NOTA: o Velox não será responsável pelo balanceamento e controle de estoque das posições de Picking.

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** PDV  
**Score:** — (semantico) | **ID:** e5d88836fd5b9560

Cada posto de separação contará com o auxílio de 1 (um) PDV no posto, que também orientará na separação e conferência dos produtos separados, informando o tipo de separação (Fracionado, Fardo ou Full Case) que deve ser feita para cada posição.
Operador ao receber a caixa no posto de separação, fará a leitura do código de barras do volume com o Finger Scanner, com isso o PDV mostrará o número daquele volume que iniciará a separação.
Operador deverá realizar a leitura do item da posição acesa, com isso a tela do PDV será atualizada com os detalhes do item, como quantidade, tipo de separação, descrição e outros detalhes, com isso o operador fara a separação da quantidade solicitada e realizara a leitura 100% dos itens.
As linhas dos itens serão diferenciadas por cores, onde:
Verde indicará o operador que ele finalizou a separação daquele item, seja separado por completo ou com shortpicking.
Vermelho, indicará que o item está sendo separado, ao finalizar, será atualizado para verde.
A tela do PDV será atualizada em tempo real a cada separação leitura de itens.
Caso seja lido algum item que não esteja solicitando separação, a tela mostrará mensagem que o item não deve ser separado, pois não foi solicitado.
Operador deverá realizar a leitura de todos os itens separados, garantindo a separação dos itens e quantidades corretas. Caso a separação seja de 10 (dez) itens do mesmo código, deverá ser lido/bipado os 10 (dez) itens.
Exemplo sugestão de tela de separação:

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Picking Fracionado Níveis  
**Score:** — (nome-topico) | **ID:** a949f05a28e163ea

Nos níveis não há esteira automatizada, apenas roletes livres. Portanto, o processo de separação será realizado manualmente, com a utilização de um coletor Android e a tela do WCS (Coleta Fracionada).
Fluxo Operacional de Picking Fracionado Níveis:
Login e Seleção da Tela de Picking:
O operador realiza o login no WCS.
O operador seleciona a tela de picking correspondente ao nível em que está.
O operador escolhe o posto de trabalho onde realizará a separação dos volumes.
Leitura do Volume e Verificação de Itens a Separar:
O operador realiza a leitura do volume utilizando o coletor Android.
O WCS verifica se há itens a serem separados naquele posto. Caso existam itens para coleta, o sistema informa o endereço e as informações do item (quantidade e código).
Coleta dos Itens:
O operador realiza a leitura do endereço solicitado.
Em seguida, o operador seleciona a quantidade retirada e realiza a leitura do código do item. O WCS atualiza a lista de itens à medida que o operador faz a coleta.
Atualização do Status do Item no WCS:
A linha do item começa em cinza.
Após a leitura do endereço, ela fica em azul.
O operador seleciona a quantidade real coletada.
Após selecionar a quantidade, o operador deve realizar a leitura do código do produto assim confirmando a coleta, após a confirmação da coleta a linha fica em verde, e o operador pode seguir para coletar o próximo item.
Caso o operador decida coletar outro item, já tendo realizado a leitura do endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Funcionalidade “Pede Caixa”
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e para que possa seguir os próximos passos do processo.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta de um Item:
O WCS leva em consideração apenas a quantidade coletada. Considerando a quantidade faltante como um shortpicking (Corte) que serão tratados na estação de conferência
Após concluir a coleta de todos os itens no posto atual, o operador direciona a caixa para o próximo posto de picking.
O processo de coleta será repetido até que todos os itens do pedido sejam coletados.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Coleta Picking Cart  
**Score:** — (semantico) | **ID:** 5786417414ecabd1

Após o processo de Order Start do Picking Cart, será exibida uma lista de itens no PDV, contendo informações detalhadas sobre endereço, produto, quantidade a ser coletada e observações do pedido. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Em seguida, o operador realiza a leitura do código do item. O WCS informa em qual posição do Picking Cart o item deverá ser alocado. O operador, então, realiza a leitura da caixa plástica para confirmar a separação daquele item. A lista de itens no PDV será atualizada à medida que a quantidade esperada for coletada. Quando a quantidade necessária for atingida, o WCS informa que a coleta para aquele item foi concluída, permitindo que o operador siga para o próximo endereço na lista.
Caso o operador não consiga coletar todos os itens do endereço, haverá a opção de clicar no botão "Finalizar Coleta". Ao acionar esse botão, o WCS entenderá que apenas a quantidade lida foi separada e registrará o corte do restante da quantidade, garantindo que o processo seja finalizado corretamente e permitindo o prosseguimento da operação.
Após finalizar o processo de coleta de todos os itens, o WCS informará que a separação foi concluída. O operador então deverá se dirigir à indução de volumes no Picking Fracionado do Nível Térreo e induzir o volume. Caso existam itens a serem coletados no Picking Fracionado do Nível Térreo, o volume seguirá o processo de separação especificado para esse fluxo.
Caso não haja itens a serem coletados, o volume seguirá para a balança, sendo então desviado para a estação de conferência, se necessário, para validação adicional ou correção.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** aa31de0c6a086046

Após a realização do Picking (Níveis, Térreo, Picking Cart), o volume obrigatoriamente passará por uma balança onde será aferido o peso real em comparação com o peso esperado. Este processo de conferência garante que a quantidade de itens e o peso do volume estejam de acordo com o especificado.
Pré-requisitos para a Conferência:
Para o processo de conferência ser realizado corretamente, o WCS precisa ser abastecido com as informações sobre o peso unitário de cada item. Além disso, a caixa de separação deve estar devidamente cadastrada no sistema com o peso real do volume, o que permite a comparação entre o peso esperado e o peso real.
O WCS também deve possibilitar o cadastro de uma tolerância de peso em gramas, que será considerada em caso de diferença entre o peso real e o peso esperado. Caso a diferença seja superior à tolerância ou ocorra algum processo de shortpicking, o volume será desviado para conferência para que o operador realize uma análise e a tratativa do volume.
Fluxo Operacional da Conferência:
Abertura da Tela de Conferência:
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume (caixa) para iniciar o processo de conferência. O WCS então exibe uma lista de itens presentes no volume, além do operador que efetuou a coleta a nível de item.
Validação dos Itens:
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante essa validação, o operador pode:
Completar a caixa, caso um item faltante esteja disponível, ou
Finalizar a conferência com itens faltantes através do botão "Encerrar Conferência".
Corte de Itens Faltantes:
Ao clicar no botão "Encerrar Conferência" e o operador deve selecionar cortar, então o WCS entenderá que os itens faltantes foram cortados, e o sistema registrará essa informação.

Coletar os itens cortados:
Ao clicar no botão "Encerrar Conferência" o operador deve selecionar coletar, o WCS cria um novo volume para coletar os itens faltantes, e o sistema registrará essa informação.
O sistema considerará a tolerância de peso previamente configurada para garantir que pequenas variações entre o peso esperado e o real não resultem em falhas no processo.
Caso o peso real seja significativamente diferente do esperado e fora da tolerância configurada, o volume será desviado para a conferência para análise do operador.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Picking Termolábil (Área Resfriada)  
**Score:** — (nome-topico) | **ID:** bed4662c932744ce

O Picking Termolábil utiliza Picking Cart em área refrigerada e replica integralmente os fluxos de 7.9 (Order Start Picking Cart) e 7.10 (Coleta Picking Cart).
A diferenciação ocorre apenas no pós-coleta, durante Conferência + Packing.
Regras Específicas
Identificação pela Integração (Trabalhos – Work)
Quando o campo termoLabilEspecial vier true, o WCS exibe mensagem orientativa ao operador para que seja utilizado a caixa de isopor no início do packing.
Conferência obrigatória dentro do Packing
100% dos volumes Termolábil passam por conferência item a item (SKU, quantidade) durante o packing. (está sendo previsto uma balança estática e caso essa opção seja validada a conferência item a item só deve ser feita se for identificado alguma divergência na validação de peso)
Ao finalizar a conferência, o WCS imprime a etiqueta final do volume, Será informado o destino (rota) do volume para que o operador se oriente no momento da paletização.
Vinculação a RG (Cofre/Pallet)
Após o packing, o operador acessa uma tela no coletor para relacionar os volumes Termolábil a um RG (Cofre/Pallet).
O WCS não diferencia RG Cofre e RG Pallet: trata-se do mesmo código RG, sem tipagem.
O uso operacional do RG (cofre para volumes a vácuo em “saquinhos” ou pallet para caixas de isopor) é definido fora do sistema e não altera o cadastro/validação do RG no WCS.
Regras de validação do RG (formato/unicidade) permanecem idênticas independentemente do destino operacional.
Após a vinculação do RG aos volumes Termolábil, o WCS mantém o controle desses volumes e considera o respectivo pallet como um dos últimos a serem carregados no romaneio, o sistema deve garantir que se tivermos mais um pallet garantindo que os itens embalados em isopor e no cofre permaneçam o maior tempo possível em ambiente refrigerado antes da expedição.
Hardware no Termolábil:
Order Start – PDV
Coleta - PDV
Conferência – Desktop
Paletização – Coletor Android

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** c9ce2bba07a027f8

Serão utilizados 8 Picking Carts na separação dos pedidos, cada um deles possui a capacidade de 6 (Seis) posições com LEDs e um PDV com acesso ao sistema Velox para auxílio do operador na coleta dos itens.
Serão no total 48 caixas com identificação para serem utilizadas nos processos Picking cart simultaneamente.
Para a coleta realizada pelo Picking Cart a operação possui dois tipos de itens: Frágeis e Não Frágeis. Os dois tipos não podem ser misturados na mesma caixa.
A separação será segregada por zonas que serão cadastradas pelo usuário da maneira que melhor atender suas necessidades. As zonas serão compostas por ruas, não sendo permitido uma rua possuir duas zonas distintas. Responsabilidade do cliente informar se a zona é destinada para produtos que podem ou não passar na esteira (Picking coletor) através do cadastro de zona no Velox.
O sistema sempre irá priorizar o preenchimento da caixa, podendo ocorrer a separação de 2 ou mais pedidos na mesma caixa em casos que o pedido não ocupar o espaço mínimo exigido, sendo segregado posteriormente no Put to Wall.
Outra possibilidade é a separação de vários pedidos que são compostos por apenas um item na mesma caixa, otimizando o tempo e a quantidade de movimentação para coleta desses pedidos. Esta caixa será sinalizada posteriormente na conferência que se trata de pedidos MONO, onde o operador realizará a leitura de cada um dos itens pertencentes a caixa e o sistema irá gerar a etiqueta de expedição para cada item/pedido e ser vinculada após a conferência/Packing.
O processo de separação no Picking cart será realizado através de uma lista exibida no PDV com os endereços que serão visitados, quantidade e o SKU. Ao realizar a leitura do código do endereço e o EAN, irá acender os LEDs na cor verde e quantas unidades deve ser coletada para as caixas/posição que possuírem aquele SKU. O operador deve pressionar o LED para indicar ao sistema a coleta do item. O Velox também irá exibir uma lista de separação de produtos no PDV com a posição do LED e quantidade que deve ser coletada.
Caso não tenha ou tenha apenas parte do produto para coleta, o operador deve informar a quantidade que for coletada, através da unidade indicada nos Leds ou PDV, e o sistema mudará o status daquela caixa para obrigatoriamente ser passada para a área de análise de corte. A posição/item que for confirmada o corte será bloqueada para as demais levas e as tratativas serão feitas pelo time de análise de corte.
O operador será obrigado a visitar todos os endereços da lista exibida pela ordem de separação, caso contrário não conseguira seguir com a próxima etapa do processo.
Com todos os endereços visitados e realizados suas respectivas coletas, terá um botão de “finalizar coleta” que terá a função de transferir as caixas para duas áreas: Área de análise de corte e Área de recebimento.
Área de análise de corte (Específico para os itens conformes) será direcionada para todas as caixas que possuírem pendências de coletas (itens pendentes de separação e ShortPicking) e serão verificadas se o corte será aceito ou não.
Área de Recebimento será para colocar todas as caixas que tiveram todos os seus itens coletados e estão prontos para serem induzidos na linha. Apesar de ter muitas posições de consolidação, não haverá balanceamento por parte do Velox.
A tela de Finalização de tarefa terá duas colunas, mostrando qual caixa irá para cada área. O processo de transferência será realizado através da leitura da etiqueta da caixa e da posição final de transferência. Velox deve validar se o destino está correto com o esperado e mostrar de maneira otimizada qual caixa está sendo realizada a transferência a cada leitura.
NOTA: o Velox não será responsável pelo balanceamento e controle de estoque das posições de Picking.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Picking Coletor  
**Score:** — (nome-topico) | **ID:** a9876c001c64958b

O Picking coletor poderá  ser realizado em qualquer rua da operação atuando como contingencia, porém ele sempre será utilizado nas zonas que possuem os produtos que não são possíveis de serem passados na esteira.
O WCS deverá exibir as ruas/zonas que são exclusivas do coletor primeiro, porém deve exibir as demais ruas / zonas
Com o carrinho vinculado no Order start o coletor exibirá uma lista com endereço, quantidade e SKU para validação do Velox. Após a leitura do endereço de Picking e EAN do item a ser separado.
O processo para coletar o item é: realizar a leitura do endereço, então realizar a leitura do código do item (EAN) e finaliza confirmando a quantidade coletada e realizando a leitura do número do carrinho. O velox deve atualizar de maneira otimizada as linhas da tabela durante e após coleta dos itens. Em caso de corte nas unidades que deveriam ser coletadas, a posição/item que for confirmada o corte será bloqueada e as tratativas serão feitas pelo time de análise de corte.
O operador será obrigado a visitar todos os endereços da lista exibida pela ordem de separação. Caso contrário não conseguira seguir com a próxima etapa do processo.
Com todos os endereços visitados e realizados suas respectivas coletas, terá um botão de “finalizar coleta” onde o sistema irá informar se o carrinho deve ser transferido para a análise de corte (destinado para os não conformes) ou estarão liberadas para serem levadas a conferência/PTL.
NOTA: o Velox não será responsável pelo balanceamento e controle de estoque das posições de Picking.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** 552c141576260a76

Serão utilizados 8 Picking Carts na separação dos pedidos, cada um deles possui a capacidade de 6 (Seis) posições com LEDs e um PDV com acesso ao sistema WCS para auxílio do operador na coleta dos itens.
Serão no total 48 caixas com identificação para serem utilizadas nos processos Picking cart simultaneamente.
Para a coleta realizada pelo Picking Cart a operação possui dois tipos de itens: Frágeis e Não Frágeis. Os dois tipos não podem ser misturados na mesma caixa.
A separação será segregada por zonas que serão cadastradas pelo usuário da maneira que melhor atender suas necessidades. As zonas serão compostas por ruas, não sendo permitido uma rua possuir duas zonas distintas. Responsabilidade do cliente informar se a zona é destinada para produtos que podem ou não passar na esteira (Picking coletor) através do cadastro de zona no WCS.
O sistema sempre irá priorizar o preenchimento da caixa, podendo ocorrer a separação de 2 ou mais pedidos na mesma caixa em casos que o pedido não ocupar o espaço mínimo exigido, sendo segregado posteriormente no Put to Wall.
Outra possibilidade é a separação de vários pedidos que são compostos por apenas um item na mesma caixa, otimizando o tempo e a quantidade de movimentação para coleta desses pedidos. Esta caixa será sinalizada posteriormente na conferência que se trata de pedidos MONO, onde o operador realizará a leitura de cada um dos itens pertencentes a caixa e o sistema irá gerar a etiqueta de expedição para cada item/pedido e ser vinculada após a conferência/Packing.
O processo de separação no Picking cart será realizado através de uma lista exibida no PDV com os endereços que serão visitados, quantidade e o SKU. Ao realizar a leitura do código do endereço e o EAN, irá acender os LEDs na cor verde e quantas unidades deve ser coletada para as caixas/posição que possuírem aquele SKU. O operador deve pressionar o LED para indicar ao sistema a coleta do item. O WCS também irá exibir uma lista de separação de produtos no PDV com a posição do LED e quantidade que deve ser coletada.
Caso não tenha ou tenha apenas parte do produto para coleta, o operador deve informar a quantidade que for coletada, através da unidade indicada nos Leds ou PDV, e o sistema mudará o status daquela caixa para obrigatoriamente ser passada para a área de análise de corte. A posição/item que for confirmada o corte será bloqueada para as demais levas e as tratativas serão feitas pelo time de análise de corte.
O operador será obrigado a visitar todos os endereços da lista exibida pela ordem de separação, caso contrário não conseguira seguir com a próxima etapa do processo.
Com todos os endereços visitados e realizados suas respectivas coletas, terá um botão de “finalizar coleta” que terá a função de transferir as caixas para duas áreas: Área de análise de corte e Área de recebimento.
Área de análise de corte (Específico para os itens conformes) será direcionada para todas as caixas que possuírem pendências de coletas (itens pendentes de separação e ShortPicking) e serão verificadas se o corte será aceito ou não.
Área de Recebimento será para colocar todas as caixas que tiveram todos os seus itens coletados e estão prontos para serem induzidos na linha. Apesar de ter muitas posições de consolidação, não haverá balanceamento por parte do WCS.
A tela de Finalização de tarefa terá duas colunas, mostrando qual caixa irá para cada área. O processo de transferência será realizado através da leitura da etiqueta da caixa e da posição final de transferência. O WCS deve validar se o destino está correto com o esperado e mostrar de maneira otimizada qual caixa está sendo realizada a transferência a cada leitura.
NOTA: o WCS não será responsável pelo balanceamento e controle de estoque das posições de Picking.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Picking Coletor  
**Score:** — (nome-topico) | **ID:** 4b389dedda736675

O Picking coletor poderá ser realizado em qualquer rua da operação atuando como contingencia, porém ele sempre será utilizado nas zonas que possuem os produtos que não são possíveis de serem passados na esteira.
O WCS deverá exibir as ruas/zonas que são exclusivas do coletor primeiro, porém deve exibir as demais ruas / zonas
Com o carrinho vinculado no Order start o coletor exibirá uma lista com endereço, quantidade e SKU para validação do WCS. Após a leitura do endereço de Picking e EAN do item a ser separado.
O processo para coletar o item é: realizar a leitura do endereço, então realizar a leitura do código do item (EAN) e finaliza confirmando a quantidade coletada e realizando a leitura do número do carrinho. O WCS deve atualizar de maneira otimizada as linhas da tabela durante e após coleta dos itens. Em caso de corte nas unidades que deveriam ser coletadas, a posição/item que for confirmada o corte será bloqueada e as tratativas serão feitas pelo time de análise de corte.
O operador será obrigado a visitar todos os endereços da lista exibida pela ordem de separação. Caso contrário não conseguira seguir com a próxima etapa do processo.
Com todos os endereços visitados e realizados suas respectivas coletas, terá um botão de “finalizar coleta” onde o sistema irá informar se o carrinho deve ser transferido para a análise de corte (destinado para os não conformes) ou estarão liberadas para serem levadas a conferência/PTL.
NOTA: o WCS não será responsável pelo balanceamento e controle de estoque das posições de Picking.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** PDV  
**Score:** — (semantico) | **ID:** 8842d7bc07b34deb

Cada posto de separação contará com o auxílio de 1 (um) PDV no posto, que também orientará na separação e conferência dos produtos separados, informando o tipo de separação (Fracionado, Fardo ou Full Case) que deve ser feita para cada posição.
Operador ao receber a caixa no posto de separação, fará a leitura do código de barras do volume com o Finger Scanner, com isso o PDV mostrará o número daquele volume que iniciará a separação.
Operador deverá realizar a leitura do item da posição acesa, com isso a tela do PDV será atualizada com os detalhes do item, como quantidade, tipo de separação, descrição e outros detalhes, com isso o operador fara a separação da quantidade solicitada e realizara a leitura 100% dos itens.
As linhas dos itens serão diferenciadas por cores, onde:
Verde indicará o operador que ele finalizou a separação daquele item, seja separado por completo ou com shortpicking.
Vermelho, indicará que o item está sendo separado, ao finalizar, será atualizado para verde.
A tela do PDV será atualizada em tempo real a cada separação leitura de itens.
Caso seja lido algum item que não esteja solicitando separação, a tela mostrará mensagem que o item não deve ser separado, pois não foi solicitado.
Operador deverá realizar a leitura de todos os itens separados, garantindo a separação dos itens e quantidades corretas. Caso a separação seja de 10 (dez) itens do mesmo código, deverá ser lido/bipado os 10 (dez) itens.
Exemplo sugestão de tela de separação:

---
**Origem:** [I23.3917] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** 6c68f81a84e5f88a

Ao chegar no posto de separação e ser lida pelo leitor da automação, o sistema Velox verifica se existe produtos para serem separados naquele posto, com isso caso tenha separação o volume é desviado para a estação ao chegar na estação seguirá o processo de separação descrito abaixo.

---
**Origem:** [Vegas 2] 2023 — `I23.1714-0  -  PROJETO VEGAS - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.03.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 536a2ece70c05b59

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Picking e Expedição, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, já disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** e3ddffe24e2a2734

Ao clicar em "Start da Onda", o sistema Velox/WCS deverá:
Gerar a demanda de separação conforme a necessidade especificada (SKU, quantidade, faixa etc.), aplicando a regra FEFO e realizando a limpeza do canal, consolidando os itens por onda. Nesta etapa, o WCS apenas irá selecionar as posições/itens conforme as especificações e regras citadas.
Ao passar pelo portal, o sistema deverá registrar as informações de peso de cada caixa. Ao término do processamento do material/remessa, o WCS deverá enviar ao SAP o IDOC de ajuste, e a criação das OTs deverá respeitar os valores de peso informados individualmente.
Por conta de termos recebimento durante a separação, o WCS irá exibir um monitor com a quantidade atendida e a quantidade indisponível no AA, permitindo as tratativas necessárias, tais como:
Reabastecimento do buffer para o canal;
Reabastecimento do buffer para a posição De-Para (quando não houver produto cadastrado);
Reabastecimento do AC.
Estas tratativas devem ser realizadas automaticamente pelo sistema WCS e exibidas para a operação.
As verificações acima devem ser realizadas em um intervalo de tempo, que será parametrizável, após o inicio da onda. Ao iniciar a separação da onda , as indisponibilidades devem aparecer com o status:
Indisponível - Não possui estoque tanto no AA quanto no AC para a demanda
Em reabastecimento - possui estoque no AC, mas não possui no AA e deve ser reabastecido
Disponível - A quantidade solicitada possui no AA.
Avaliar as posições De-Para (duas) utilizando a inteligência do sistema, determinando se é viável remover o item da posição dinâmica, considerando as ondas e transportes subsequentes.
Regras para Geração da Separação
A geração da separação deverá seguir as seguintes regras:
Aplicação das regras de percentual de aceitação de shelf life, respeitando o intervalo de datas informado pelo SAP (data de produção, data de vencimento ou percentual de vida útil restante).
O SAP enviará o percentual mínimo e máximo permitido para cada material e nunca devemos sair desse range.
A separação deverá sempre priorizar os itens mais antigos dentro do percentual mínimo estabelecido.
Gestão de Cortes na Posição
Sempre que houver um corte na posição, o sistema deverá localizar automaticamente outra posição disponível para completar a remessa.
Caso a posição alternativa não esteja disponível no AA, o sistema deverá verificar no AC se possui este item para abastecimento da posição
Se não houver disponibilidade desse item no AC, será possível cancelar apenas o item da remessa, a remessa por completo ou transporte completo. Lembrando que não pode ter iniciado o transporte para realizar esta ação. Apenas usuários Master podem fugir desta regra
Regra para Determinação do Lote para Remessa
O WCS deverá coletar o range das caixas programadas para a compra da remessa, conforme o planejamento.
Caso haja um lote não previsto na separação, o WCS deverá abaixar o saldo do estoque da posição retirada e enviar ao SAP  o lote real do produto (que foi lido no sorter)
Se isso ocorrer, o WCS deverá aguardar a finalização da onda para identificar a posição de separação do material.
Caso o material tenha sido separado apenas de uma única posição, deverá ser considerada a sequência de passagem no sorter
O WCS somente poderá atender os materiais dentro do range informado na integração das remessas.
Caso não haja material/lote disponível, o WCS deverá buscar no AC para reabastecer o AA.
Se ainda assim não houver disponibilidade, o WCS deverá aguardar a finalização da onda para informar ao SAP o não atendimento, possibilitando o corte da remessa.
Siga exemplo abaixo sobre lotes inesperados:
Caso seja coletado um lote diferente do lote B (lote solicitado), o sistema deverá interpretar que houve uma divergência em relação ao lote esperado na posição. Nesse cenário, o sistema deverá ajustar o estoque considerando o local que foi solicitado a separação e informar ao SAP o lote lido no portal.
Entrada e Saída de cada Tipo de volume
Entrada:
PPAD: Cálculo do peso médio da caixa.
PFIX: Peso obtido a partir dos três últimos dígitos do lote.
PVAR: Valor informado pelo SAP ou peso médio da caixa.
Saída:
Sempre baseada na leitura do código no portal do sorter que informa o peso da caixa.
Modalidades de Separação (ordem de separação)
Na criação da onda, será informado qual modalidade de separação sera efetuada durante a operação. Esta modalidade impacta diretamente na ordem que iremos seguir na separação da lista de itens que mencionamos ao gerar a demanda.
As modalidades de separação devem seguir as configurações definidas para o transporte/placas no momento da criação da onda. As modalidades serão escolhidas através de flags:
Mistura de temperatura
Mistura de peso
Observação: Se o usuário flegar os campos, será feito a “Mistura de Temperatura” e/ou “Mistura de Peso” nas sequências de acendimento do PBL
Observação: A sequência do acionamento do PBL será da Primeira posição para a Última.
A operação terá a opção de cadastrar mapas dos operadores que irão realizar a separação por nível, quantidade de canais e a sua impressora (PVAR) . Este mapa irá impactar na quantidade de pickings que serão acesos por nível simultaneamente.
MFC deve exibir um relatório desses mapas de operadores trazendo os nomes, Ids e nível de cada colaborador.
O sistema deve permitir criar vários mapas e apenas a operação selecionar e iniciar o que sera usado quando não houver separação. Não deve ser permitido trocar este mapa enquanto estiver ocorrendo a separação.
Fixo por faixa (PFIX)
O processo deve separar a quantidade de caixas e retornar as informações ao sistema SAP, incluindo quantidade, lote, peso (calculado a partir dos três últimos dígitos do lote), SIF, entre outros dados relevantes.
A quantidade de caixas será determinada com base no peso do pallet, enquanto o peso individual de cada caixa será obtido pelos três últimos dígitos do lote. A identificação de um item como PFIX ocorrerá por meio do cadastro do item.
É importante ressaltar que a principal referência para esse processo é a quantidade de caixas, e não o peso total. Além disso, o procedimento deve seguir as regras de Shelf Life, FEFO (First Expired, First Out)
Separação do PFIX Não Rastreável
O tipo de material PFIX diferencia-se pela composição do lote, que inclui três dígitos adicionais para indicar a variação do peso da caixa.
O lote do PFIX é formado por 10 caracteres, conforme o seguinte formato:
Exemplo: 3315007070
331 → Código da fábrica/filial (UP)
5 → Ano de fabricação (2025)
007 → Data Juliana (07 de janeiro)
070 → Faixa de peso da caixa (7 kg)
Para o PFIX, o sistema deverá considerar o peso do pallet, de acordo com o lote, para determinar a quantidade de caixas disponíveis na posição.
Separação do PPAD
No processo de separação de materiais PPAD, o sistema deverá controlar a saída em caixas, garantindo que não haja variação de peso por material.
A confirmação dos materiais PPAD deverá ocorrer no ultimo volume da remessa for desviado na doca
Envio de IDOC e Processamento de OTs
O IDOC deve ser enviado sempre na última caixa do material para atendimento da remessa, exceto no caso de cancelamento da onda. Nesse cenário, o sistema deverá enviar as informações das caixas que foram desviadas na doca.
Se acontecer o cancelamento da onda será enviado apenas os itens que tiveram os seus desvios para a doca com sucesso e o restante será considerado corte.
O WCS deverá transmitir as informações ao SAP quando a última caixa for desviada/entregue na doca. O SAP será responsável por criar e confirmar as OTs, conforme os dados enviados pelo WCS, ajustando os lotes na posição conforme necessário.
No SAP, deve existir um monitor para acompanhamento das confirmações das OTs (ZWM0261), permitindo ajustes caso necessário. Estoques negativos e bloqueados impedirão a confirmação das OTs.
Observação: O sistema deverá enviar um IDOC de confirmação para lotes distintos dentro da mesma remessa/material.
Observação: Quando o separador confirmar quantidade a menor, WCS deve enviar IDOC para SAP enviar a diferença para 999 Perdidos (exemplo de posição no SAP, a mesma será alinhada com time Invent posteriormente) para ajuste da posição. A diferença para o 999 (perdidos) será enviada, quando o colaborador confirmar no PBL.
As caixas serão controladas no desvio da esteira de descida, onde o sistema deverá gerar o status de finalização ou pendência de carregamento. Essas informações deverão ser exibidas no tablet/monitor localizado na ponta da esteira.
Os status exibidos no monitor de carregamento e em demais monitores que apresentam informações de carregamento devem ser atualizados quando a caixa for desviada.
Rejeito
O processo de Rejeito deve incluir duas rampas, com a seguinte distinção:
Primeira Rampa de Rejeito: Destinada a todos os SKUs que o portal não conseguiu ler, como no caso de ausência de etiqueta, falha na leitura do QR Code ou código de barras.
Segunda Rampa de Rejeito: Destinada a todos os SKUs que foram lidos, mas encaminhados para o rejeito devido a alguma falha, como sobras na esteira, SKU que não atende ao shelf do cliente, SKU com lote vencido, entre outros.
As rampas destinadas ao rejeito devem ser parametrizadas para direcionar todos os rejeitos para uma única rampa, assim como permitir a mudança de rampa para qualquer outra existente.
Quando ocorrer uma falta e o SKU não chegar à doca nem ao rejeito, o monitor de separação do WMS deverá disponibilizar uma opção de botão "SKUs Faltantes" no transporte, acionando o Picking to Light para esses SKUs.
Observação: Este botão somente poderá ser utilizado quando não houver picking pendentes na onda. O uso inadequado desse botão pela operação poderá ocasionar rejeito de volumes duplicados.
A quantidade de vezes que o material irá girar no carrossel deverá ser parametrizável, levando em consideração situações de rampa cheia.
O WCS deverá disponibilizar um relatório online contendo os motivos de rejeito, como:
Hora do rejeito
Número da rampa
Motivos do rejeito (sobra na esteira, SKU não atende o shelf do cliente, sem etiqueta etc.).
Esse relatório deve ficar disponível para o operador do rejeito por meio de um monitor de rejeito, para que possam ser feitas as devidas tratativas.
A estação de rejeito deve ser capaz de reimprimir etiquetas de entrega com peso variável ou faixa, utilizando uma balança, permitindo o reenvio rápido dos materiais.
Posição Dinâmica De-Para
Quando não houver disponibilidade do item e uma posição fixa no AA, o WCS deverá selecionar o pallet da posição e direcioná-lo para as posições especiais, que possuem a capacidade de posicionar o pallet e retorná-lo à posição original. Essas posições especiais estão localizadas na posição 1 do primeiro nível de cada câmara.
Quando o separador confirmar a operação no PBL, o sistema deverá devolver o pallet à posição de origem.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** 32a21959328e3fa9

Gerar a demanda de separação conforme a necessidade especificada (SKU, quantidade, faixa etc.), aplicando a regra FEFO (realizando o FEFO do primeiro palete das posições Picking) e realizando a limpeza do canal, consolidando os itens por onda. Nesta etapa, o WCS apenas irá selecionar as posições/itens conforme as especificações e regras citadas.
Será possível controlar o pallet por UD. Esta decisão será parametrizável no sistema.
Segue exemplo de separação / abastecimento:

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Picking – Separação  
**Score:** — (nome-topico) | **ID:** 8f98dedffa1d8739

Estações de picking:
Teremos 54 módulos de flowracks, 27 postos de picking de cada lado, cada posto pode ter entre 15 e 35 posições/SKU.
Caixa plástica segue pela esteira expressa, leitor fixo faz a leitura do código da caixa, e caso exista produtos a serem separados no posto, a caixa é desviada automaticamente para o posto de separação.
Operador ao receber a caixa plástica no posto fara a separação dos produtos de acordo com a visualização dos leds e quantidades necessárias.
Para posições de itens/produtos unitários os leds serão acesos na cor amarela (para isso é preciso que em algum campo na integração, venha distinguindo o que é unitário e o que é display)
Para posições de itens/display os leds serão acesos na cor azul. (para isso é preciso que em algum campo na integração, venha distinguindo o que é unitário e o que é display)
Em cada posto de separação, terá 1 display de 12 dígitos (AT70C) que informará os 12 últimos dígitos da caixa que está em processo de separação do momento, ao finalizar a separação dos itens o display mostrara o número da próxima caixa que está aguardando a separação, o operador que está realizando a separação então confirma se o número mostrado no display é o mesmo da caixa que está realizando plástica, e inicia o processo de separação.
Ao finalizar a separação no posto requisitado, serão acesos todos os leds na cor verde, operador confirma através de qualquer botão aceso e induz a caixa manualmente na esteira expressa, seguindo assim para o próximo posto.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 3b4ad5d1bdafd176

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação, conferência, reabastecimento, controle de saldo das posições de picking, picking cart e sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** 2d2e49ab07dab882

NO SETOR DE PICKING CART (PICKING FUNDO) SERÁ POSSÍVEL TER MAIS DE UMA POSIÇÃO COM O MESMO ITEM/LOTE E O SISTEMA WCS DEVE SOLICITAR COLETA EM TODAS AS POSIÇÕES SE NECESSÁRIO. EM CASO DE CORTE OU COLETA “PICADA” DEVE PASSAR EM MAIS DE UMA POSIÇÃO COM O MESMO ITEM/LOTE.
A SEPARAÇÃO DO PICKING FUNDO DEVE SER ORDENADA POR PICKING DECRESCENTE.
O SETOR DE MARKETING SERÁ UNIFICADO COM TODAS AS POSIÇÕES DE PICKING FUNDO SENDO REALIZADO PELO PICKING CART.
A automação contará com o apoio de 4 equipamentos picking cart com PDV, para apoiar na separação de produtos fora dos flowracks da automação como por exemplo, produtos que ficam armazenados na área de picking fundo.
Cada picking cart será composto com 9 posições, 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
O WCS, ao receber a integração dos pedidos realiza a análise e cubagem dos produtos que serão separados via flowrack Invent e de quais irão ser separados via picking cart.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** e8314676bc510f0d

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de separação, PBL, PDV, Picking Túnel, Picking Cart, Sorter e PTM, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão- de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Picking – Separação de fracionados  
**Score:** — (nome-topico) | **ID:** 5d4d6f6564019546

Os volumes a serem transportados na esteira serão caixas de papelão e caixas plásticas, como citado do item 4. Caixas e no item 5.1. Fracionado - Picking By Light/Picking To Monitor e Picking Tunnel.
Para a filial de Porto Alegre o pedido é separado na caixa plástica e essa mesma caixa segue até o destino, retornando posteriormente, esse controle será feito no cadastro da caixa pela filial.
Caso exista a necessidade de outra filial também utilizar caixa plástica, o sistema VELOX será capaz de incluir a filial nesse cenário via tela de cadastro.
Para o restante das filiais o pedido é separado em caixas de papelão, e caso necessário essa caixa é trocada por outra de papelão na estação de Packing (Embalagem).
A caixa plástica ou de papelão deveram ter uma etiqueta única com o código de barras ou QRCode de identificação, essa identificação será necessária para ser vinculada a um pedido, e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.
Haverá casos em que serão utilizadas as etiquetas WISPL que serão enviadas para o Velox via API rest como mencionado no item 3. Integrações.
Para cada transferência na automação terão 4 postos de picking, sendo 2 (dois) postos para cada lado.
Teremos 1 métodos de separação no setor de fracionados, com o uso dos picking to monitor (PDVs), scanners, displays e leds.
Durante o processo de separação do pedido, a caixa será desviada para um posto de separação somente quando houver picking em alguma das 2 (duas) estações, onde o Velox irá criar um buffer (fila) de acendimento de leds de acordo com as confirmações de desvios vindas do da automação (ACNK), com isso junto do acendimento dos displays (leds) o Velox irá informar no monitor (PDV) as posições de picking juntos com a quantidade esperada de separação para cada produto.
Quando houver picking na estação o Velox irá dar o comando para acender o led que indicará a posição do produto e a quantidade a ser separada, as mesmas informações estarão dispostas no monitor (PDV), as informações apareceram nos 2 (dois) PDVs do mesmo lado de uma única vez, sendo a mesma informação em ambos os monitors , após a separação dos produtos o operador deve usar o scanner fixo para ler o código de cada item, assim a informação de quantidade a ser separada dispostas no monitor vão diminuindo até chegar em 0 (zero), após a separação e leitura de todos os produtos o sistema Velox encerra automaticamente o picking sem a necessidade da confirmação manual no botão de led, informando ao operador acendendo todos os displays com a informação “00000” nos mesmos.
Caso o operador tente finalizar a separação sem informar a quantidade esperada para separação dos itens para a caixa plástica em questão o Velox irá questionar ao operador se o mesmo tem certeza de que deseja finalizar a caixa cometendo o corte nos itens faltantes de separação e conferência (cenário de Shortpicking)
NOTA: No Velox irá conter uma funcionalidade (parâmetro) onde será possível unificar as informações para 2 (dois) postos (PDV) onde para quando a funcionalidade não estiver habilitada o Velox só irá acender os displays e PDV para a separação no segundo posto quando a separação do primeiro posto terminar.
Em casos de Shortpicking o operador através da tela do monitor deve diminuir a quantidade de itens separados para a quantidade que está disponível no momento e clicar no botão de confirmação de picking, o sistema Velox fará a comparação do valor de quantidade esperada e quantidade separada, quando for identificado que o valor de separação é menor que o valor esperado, após a confirmação de finalização de picking do operador o Velox irá questionar o operador se ele tem certeza de que deseja realizar o corte da quantidade faltante na separação, esse questionamento surge na tela logo após a confirmação e aguarda uma nova confirmação do operador para seguir com o processo de finalização de picking assim liberando o posto para receber uma nova caixa.
Em casos de queda de energia ou falta de conexão de rede com os monitors (PDVs) durante o processo de picking, após restabelecer a conexão de rede ou de energia o operador deve logar novamente no sistema Velox e iniciar o processo de separação do 0 (zero), refazendo o passo a passo de ler o código da caixa, para informar o sistema que a mesma se encontra na estação de picking e fazer a leitura de item a item até que todos os produtos estejam dentro da caixa novamente e toda a tarefa de coleta e leitura dos códigos dos produtos sejam finalizadas, o Velox irá finalizar o processo da caixa e voltar a rotina normal.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Picking Map  
**Score:** — (nome-topico) | **ID:** b7224442587471a7

WMS → VELOX
Integração para o WMS enviar para o Velox quais produtos deverão estar alocados em qual endereço.
Essa integração será enviada ao Velox a qualquer momento que houver algum tipo de alteração no WMS referente ao código do produto ou endereço, com isso o Velox atualiza o endereço do sku recebido na integração sistemicamente, e fisicamente operador deverá realizar essa atualização.
Caso o endereço já esteja sendo ocupado por outro sku, ao receber essa integração, o sku será sobreposto pelo novo recebido e o endereço será atualizado com o novo sku.
Para retirar um sku de um endereço, o campo ‘endereço’ deverá ser enviado vazio ou nulo.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Posto de Separação  
**Score:** — (semantico) | **ID:** 092580166ae673fb

Em cada posto de separação deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume que haverá a coleta.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
01 (um) PDV – Ex: JetWay
No caso do projeto do CD de São Paulo, onde a linha de picking terá 4 (Quatro) postos, será necessário 4 (Quatro) unidades de leitores de código de barras e 4 (Quatro) PDVs, mencionados acima.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Picking Map  
**Score:** — (nome-topico) | **ID:** 7327d18cd5e0debb

WMS → VELOX
Integração para o WMS enviar para o Velox quais produtos deverão estar alocados em qual endereço.
Essa integração será enviada ao Velox a qualquer momento que houver algum tipo de alteração no WMS referente ao código do produto ou endereço, com isso o Velox atualiza o endereço do sku recebido na integração sistemicamente, e fisicamente operador deverá realizar essa atualização.
Caso o endereço já esteja sendo ocupado por outro sku, ao receber essa integração, o sku será sobreposto pelo novo recebido e o endereço será atualizado com o novo sku.
Para retirar um sku de um endereço, o campo ‘endereço’ deverá ser enviado vazio ou nulo.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Posto de Separação  
**Score:** — (semantico) | **ID:** 5ae20477f7c098a7

Em cada posto de separação deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume que haverá a coleta.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
01 (um) PDV – Ex: JetWay
No caso do projeto do CD de São Paulo, onde a linha de picking terá 4 (Quatro) postos, será necessário 4 (Quatro) unidades de leitores de código de barras e 4 (Quatro) PDVs, mencionados acima.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** db8d82bd7586d9d9

Para o correto funcionamento da automação é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de etiquetagem, separação de pedidos de forma fracionada (picking cart e picking by ligth), separação através de caixas fechadas (Full Case) e expedição (Sorter e Put To Monitor) tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Picking cart  
**Score:** — (nome-topico) | **ID:** 0e1436312f41d28a

Para atender as demandas da operação visando os pedidos nomeados como exceção teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com PDV(Monitor) e scanner de dedo, o picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes de acordo com as posições informadas no PDV (picking list).
Após o login no Velox o operador irá acessar o modo de operação “Versão PDV” onde ele irá selecionar a opção Picking Cart para operar na separação picking fracionada, onde o operador irá se deparar com uma lista de tarefas de separação que seguiram a ordenação de integração (FIFO) ou podendo alterar a prioridade de cada tarefa dentro do Velox.
O operador deverá informar quantos etiquetas serão impressas para serem vinculadas aos volumes. Operador terá disponível fisicamente, um buffer de caixas disponíveis para serem utilizadas, próximo ao Order Start.
Deve ser avaliado o espaço físico das caixas que serão utilizadas pela operação e o picking cart para a avaliação de quantos volumes serão permitidos a separação simultaneamente.
Obs: No Order Start será impresso uma etiqueta “burra” para ser realizado a separação e posteriormente, no packing, será impresso a etiqueta final.
O operador deverá informar pela tela do Velox qual caixa está em cada posição do picking cart realizando a leitura da etiqueta “burra” e da posição.  Com o picking cart mapeado, o operador deve acionar o botão “finalizar mapeamento” para seguir para a separação. Caso o colaborador deseje separar um número menor do que o picking cart suporta, basta acionar o botão apenas com a quantidade desejada.
O Velox informa para o operador todos os endereços que devem ser visitados para realizarem a separação em seus respectivos volumes. Deve ser lido o código do endereço e o EAN/DUM do produto para validação sistêmica. Com a garantia que o operador está coletando o item correto, o PDV exibe todas as posições que solicitam aquele item. O operador deverá coletar a quantidade solicitada, ler o EAN e o código da posição do picking cart item a item. Após realizado todas as coletas solicitadas daquele endereço, será informado pela linha daquele coleta na cor verde para informar a finalização de coleta no endereço.
Caso aconteça a necessidade de realizar um corte, o colaborador deve coletar apenas o que for possível e acionar o botão no PDV informando o corte no restante das unidades daquele endereço.
Este ciclo deve ser repetido em todos os endereços de coleta informados pelo Velox. Ao visitar todos os endereços, o colaborador será informado que a separação está finalizada e pode induzir os volumes no início da linha dos fracionados.
Colaborador pode retornar o picking cart ao Order Start e realizar o mesmo processo de separação até finalizar todas as tarefas destinadas a área de picking cart.
Se houver a necessidade de solicitar uma caixa adicional devido a alguma falha de cubagem, no próprio PDV o colaborador poderá tomar essa ação. Ao pedir uma nova caixa, o volume atual não coletará mais nenhum item e os pickings pendentes serão coletados na próxima caixa que será exibida no Order Start com prioridade máxima.
NOTA: O time do cliente deve definir antes da data de teste in loco qual sequência de separação será mais benéfica para a operação.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** ca82ed34868707ac

No Picking Cart deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) PDV – Ex: Jetway
01 (um) Leitor de código de barras – Ex: Honeywell 1470g

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Posto de separação  
**Score:** — (semantico) | **ID:** 66d39301a9402051

Em cada posto de separação deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume que haverá a coleta.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
01 (um) PDV – Ex: JetWay
No caso do projeto, onde a linha de picking terá 7 (Sete) postos, será necessário 7 (Sete) unidades de leitores de código de barras e 7 (Sete) PDVs, mencionados acima.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Frente  
**Score:** — (semantico) | **ID:** e33324dae1017d2b

Operador ao realizar a leitura da caixa no posto de separação, Velox realiza as buscas necessárias para avaliar se existem produtos a serem separados naquele posto, caso haja produtos a serem separados, o PDV irá informar o operador se devem ser lidos item a item e as posições dos produtos que devem ser separados naquele posto acenderão na cor azul e informando a quantidade a ser separada desse produto, conforme ilustração abaixo, devem ser separados e lidos 10 unidades do produto dessa posição:
Operador ao realizar a separação da quantidade do produto na posição realiza a leitura de item a item confirmando a separação do produto, deverá pressionar o botão/led aceso, confirmando assim que realizou a separação daquele produto, o led se apagará e operador segue para a próxima posição acesa e repete o processo.
Caso não tenha produtos a serem separados nas posições das costas, no PDV informará o fim da separação e todos os leds da frente acenderão na cor verde, informando ao operador que a separação naquele posto (frente e costas) foi finalizado e a caixa já poderá ser lida no próximo posto.
Caso tenha produtos a serem separados nas costas, o PDV informará e os leds da frente acenderão na cor rosa, informando que existem produtos pendentes de separação nas posições das costas.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Solicitar nova caixa  
**Score:** — (semantico) | **ID:** 11f016b6cf242d76

No momento da separação, caso o operador identifique que a caixa plástica não será o suficiente para separar todos os produtos solicitados, no PDV de cada posto de separação, haverá um botão disponivel para solicitar uma nova caixa.
Operador ao pressionar o botão, o sistema Velox adiciona 1 volume com os itens que ficaram pendentes de separação dessa remessa, no order start esse volume adicional será criado com prioridade máxima e será o primeiro da fila, para concluir a separação dessa remessa.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Picking Fracionado  
**Score:** — (nome-topico) | **ID:** b746db08a566fb41

O processo de Picking Fracionado ocorre após a impressão dos volumes no Order Start, e o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Início do Processo:
O operador induz o volume na esteira, e, após a passagem da caixa plástica pelos pontos de decisão (scanner), o WCS verifica automaticamente se há algum item esperando coleta naquele posto.
Se houver coleta, o volume será desviado automaticamente para o posto correspondente. Caso contrário, o volume segue para o próximo ponto de decisão até ser identificado que a coleta deve ocorrer em algum posto específico.
Indicação Visual para Coleta:
Após o desvio, o WCS acende os LEDs de frente no posto de separação, sinalizando o local e a quantidade de itens a serem coletados.
Os LEDs de frente exibem 3 dígitos para identificar a quantidade de itens a serem coletados, sendo esses LEDs exclusivos para cada posição.
Coleta dos Itens:
O operador deve coletar fisicamente os itens solicitados, conforme indicado pelos LEDs, e realizar a leitura do EAN de cada item para validar a coleta. (a regra de bipar pode ser desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada com o apertar do LED.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um PDV para auxiliar o operador na coleta.
Coleta nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas, o WCS acende os LEDs da frente em rosa, sinalizando que a coleta será feita na parte de picking costas, além de acender os LEDs nas posições de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente, onde o WCS informa o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking, permitindo que o operador colete de maneira eficiente e sem confusão.
Finalização da Coleta:
O operador realiza a coleta de acordo com as indicações dos LEDs e valida cada item coletado através da leitura do EAN. (a regra de bipar pode ser desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada com o apertar do LED.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do PDV.
Ao acionar essa funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do volume, que será retomada no processo de Order Start com uma nova caixa.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde, indicando que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 2fcc3cc5d9da5fbb

Para o correto funcionamento da automação é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de etiquetagem, separação de pedidos de forma fracionada (picking cart e picking by ligth), Conferência, Reabastecimento e expedição (Sorter e Put To Monitor) tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** 622a66b856dde075

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV. O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes de acordo com as posições informadas no PDV.
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart. Nessa etapa, será necessário informar qual mezanino será utilizado para a separação.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Deve ser avaliado o espaço físico das caixas que serão utilizadas pela operação e o picking cart para a avaliação de quantos volumes serão permitidos a separação simultaneamente.
O operador deverá selecionar, no Order Start Picking Cart, a quantidade de etiquetas a serem impressas para a realização da separação. Deverá ter uma trava onde o operador consiga imprimir apenas a quantidade máxima que o picking cart suporta.
Ao imprimir a etiqueta no Order Start, aquele pedido mudará o status e será desconsiderado desta tela. Caso aconteça qualquer problema ela deverá ser reimpressa no WCS
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura das etiquetas do pedido, da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá acionar o botão Finalizar Mapeamento e seguir para a etapa de separação.
O sistema WCS informará ao operador todos os endereços que devem ser visitados para a separação dos respectivos volumes. Para validação sistêmica, o operador deverá ler o código do endereço e o EAN/DUM do produto. Após essa confirmação, o PDV exibirá todas as posições do Picking Cart que solicitaram aquele item. O operador deverá coletar a quantidade indicada, escanear o EAN do produto e o código da posição do Picking Cart item por item.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá coletar apenas as unidades disponíveis e acionar a opção de corte no PDV, informando a quantidade não coletada daquele endereço.
No mezanino dedicado aos Controlados, deverá ser lido uma etiqueta que conterá um código fantasia do lote/validade, o WCS receberá via integração todos os códigos fantasia e o sku, lote e validade a qual ele pertence. O sistema deverá verificar se a data do produto não está vencida e validar se a validade lida é igual ou superior do que está sendo esperado na integração de romaneios. Caso a validade lida não for o esperada, deve apresentar um alerta solicitando login e senha do supervisor para continuar.
Se esta ação ocorrer, todos os lotes pendentes ao que foi trocado devem ser ajustados pelo novo. Haverá um relatório com a relação de todos os lotes que foram ajustados.
O WCS deve permitir uma flag, onde a trava de validação de lote pare de ser feita. Todos os produtos que estão sendo separados seguirão as mesmas regras, apenas os próximos volumes que saírem do Order Start (impressão)
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume até o final do mezanino para a descida através do espiral.
Após isso, o operador poderá retornar o Picking Cart ao Order Start e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.
Se houver necessidade de solicitar uma caixa adicional devido a uma falha de cubagem, o operador poderá tomar essa ação diretamente no PDV. Nesse caso, o volume atual não receberá mais itens, e os produtos pendentes serão coletados na próxima caixa, que será exibida no Order Start novamente.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Transferência de Caixas  
**Score:** — (semantico) | **ID:** 529c5714468028be

Quando os volumes que foram realizados a separação no picking cart chegarem no térreo pelo caracol, o operador deverá realizar a transferência do volume para o sorter ou induzir no início da linha de picking.
Via coletor do cliente com o sistema WCS, o sistema solicitará um mapeamento do que o operador estará transportando e informar qual é o endereço de destino de cada volume. Será lido cada volume para realizar o mapeamento.
Quando for finalizado o mapeamento o sistema deve mostrar o destino de cada volume mapeado e o operador deve realizar a leitura do volume e um código fixo em cada indução: Sorter, Order Start dos medicamentos e perfumaria (FlowHack)

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Posto de separação  
**Score:** — (semantico) | **ID:** 749419436b672b1d

Em cada posto de separação deverá conter os equipamentos listados abaixo:
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
01 (um) PDV – Ex: JetWay

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** fb19561168c1d5ff

A caixa induzida no OS segue até a primeira estação de picking mapeada pelo WMS.
Operador deve ler a etiqueta da caixa e colocar os produtos indicados pelo WMS. Após o preenchimento da caixa, ela deve ser reinduzida manualmente antes da transferência do respectivo posto para a automação direcionar para a próxima estação de picking necessária.
Cada transferência será composta por 2 scanner sendo eles um do lado direito e outro do lado esquerdo. O WCS realiza a leitura da etiqueta da caixa e direciona para as estações subsequentes até que a caixa tenha passado por todas as zonas/estações de picking solicitadas pelo WMS.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Picking Fracionado Níveis  
**Score:** — (nome-topico) | **ID:** 8609e5899c20c769

Nos níveis não há esteira automatizada, apenas roletes livres. Portanto, o processo de separação será realizado manualmente, com a utilização de um coletor Android e a tela do WCS (Coleta Fracionada).
Fluxo Operacional de Picking Fracionado Níveis:
Login e Seleção da Tela de Picking:
O operador realiza o login no WCS.
O operador seleciona a tela de picking correspondente ao nível em que está.
O operador escolhe o posto de trabalho onde estará realizando a separação dos volumes.
Leitura do Volume e Verificação de Itens a Separar:
O operador realiza a leitura do volume utilizando o coletor Android.
O WCS verifica se há itens a serem separados naquele posto. Caso existam itens para coleta, o sistema informa o endereço e as informações do item (quantidade e código).
Coleta dos Itens:
O operador realiza a leitura do endereço solicitado.
Em seguida, o operador realiza a leitura do código do item, uma vez para cada unidade retirada. O WCS atualiza a lista de itens à medida que o operador faz a coleta.
Atualização do Status do Item no WCS:
A linha do item começa em cinza.
Após a leitura do endereço, ela fica em azul e o contador de coleta é atualizado: 1/5, 2/5, 3/5, até que a quantidade total do item seja atingida.
Quando a quantidade total for atingida, a linha fica em verde, e o operador pode seguir para coletar o próximo item.
Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Finalização da Coleta de um Item:
A coleta não será finalizada automaticamente até que todos os itens esperados sejam coletados.
Caso haja falta de itens o operador pode forçar a finalização da coleta clicando no botão “Finalizar Coleta”.
O WCS leva em consideração apenas a quantidade coletada. Considerando a quantidade faltante como um shortpicking (Corte) que serão tratados na estação de conferência
Após concluir a coleta de todos os itens no posto atual, o operador direciona a caixa para o próximo posto de picking.
O processo de coleta será repetido até que todos os itens do pedido sejam coletados.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Coleta Picking Cart  
**Score:** — (semantico) | **ID:** e2706c332203f639

Após o processo de Order Start do Picking Cart, será exibida uma lista de itens no PDV, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Em seguida, o operador realiza a leitura do código do item. O WCS informa em qual posição do Picking Cart e caixa plástica que o item deverá ser alocado. O operador, então, realiza a leitura da caixa plástica para confirmar a separação daquele item. A lista de itens no PDV será atualizada à medida que a quantidade esperada for coletada. Quando a quantidade necessária for atingida, o WCS informa que a coleta para aquele item foi concluída, permitindo que o operador siga para o próximo endereço na lista.
Caso o operador não consiga coletar todos os itens do endereço, haverá a opção de clicar no botão "Finalizar Coleta". Ao acionar esse botão, o WCS entenderá que apenas a quantidade lida foi separada e registrará o corte do restante da quantidade, garantindo que o processo seja finalizado corretamente e permitindo o prosseguimento da operação.
Após finalizar o processo de coleta de todos os itens, o WCS informará que a separação foi concluída. O operador então deverá se dirigir à indução de volumes no Picking Fracionado do Nível Térreo e induzir o volume. Caso existam itens a serem coletados no Picking Fracionado do Nível Térreo, o volume seguirá o processo de separação especificado para esse fluxo.
Caso não haja itens a serem coletados, o volume seguirá para a balança, sendo então desviado para a estação de conferência, se necessário, para validação adicional ou correção.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** 6534f8605442a3f9

Após a realização do Picking (Níveis, Térreo, Picking Cart), o volume obrigatoriamente passará por uma balança onde será aferido o peso real em comparação com o peso esperado. Este processo de conferência garante que a quantidade de itens e o peso do volume estejam de acordo com o especificado.
Pré-requisitos para a Conferência:
Para o processo de conferência ser realizado corretamente, o WCS precisa ser abastecido com as informações sobre o peso unitário de cada item. Além disso, a caixa de separação deve estar devidamente cadastrada no sistema com o peso real do volume, o que permite a comparação entre o peso esperado e o peso real.
O WCS também deve possibilitar o cadastro de uma tolerância de peso em gramas, que será considerada em caso de diferença entre o peso real e o peso esperado. Caso a diferença seja superior à tolerância ou ocorra algum processo de shortpicking, o volume será desviado para conferência para que o operador realize uma análise e a tratativa do volume.
Fluxo Operacional da Conferência:
Abertura da Tela de Conferência:
O operador acessa a tela de conferência do WCS e realiza a leitura do volume (caixa) para iniciar o processo de conferência. O WCS então exibe uma lista de itens presentes no volume.
Validação dos Itens:
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante essa validação, o operador pode:
Completar a caixa, caso um item faltante esteja disponível, ou
Finalizar a conferência com itens faltantes através do botão "Encerrar Conferência".
Corte de Itens Faltantes:
Ao clicar no botão "Encerrar Conferência", o WCS entenderá que os itens faltantes foram cortados, e o sistema registrará essa informação.
Envio da Integração de Conferência:
Após a finalização da conferência, o WCS enviará a integração de conferência, informando ao WMS o conteúdo real do volume.
O sistema considerará a tolerância de peso previamente configurada para garantir que pequenas variações entre o peso esperado e o real não resultem em falhas no processo.
Caso o peso real seja significativamente diferente do esperado e fora da tolerância configurada, o volume será desviado para a conferência para análise do operador.

---
**Origem:** [I25.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Picking Termolábil (Área Resfriada)  
**Score:** — (nome-topico) | **ID:** 119f2453a56a20b2

O Picking Termolábil utiliza Picking Cart em área refrigerada e replica integralmente os fluxos de 7.9 (Order Start Picking Cart) e 7.10 (Coleta Picking Cart).
A diferenciação ocorre apenas no pós-coleta, durante Conferência + Packing.
Regras Específicas
Identificação pela Integração (Trabalhos – Work)
Quando o campo termoLabilEspecial vier true, o WCS exibe mensagem orientativa ao operador para que seja utilizado a caixa de isopor no início do packing.
Conferência obrigatória dentro do Packing
100% dos volumes Termolábil passam por conferência item a item (SKU, quantidade) durante o packing. (está sendo previsto uma balança estática e caso essa opção seja validada a conferência item a item só deve ser feita se for identificado alguma divergência na validação de peso)
Ao finalizar a conferência, o WCS imprime a etiqueta final do volume, Será informado o destino (rota) do volume para que o operador se oriente no momento da paletização.
Vinculação a RG (Cofre/Pallet)
Após o packing, o operador acessa uma tela no coletor para relacionar os volumes Termolábil a um RG (Cofre/Pallet).
O WCS não diferencia RG Cofre e RG Pallet: trata-se do mesmo código RG, sem tipagem.
O uso operacional do RG (cofre para volumes a vácuo em “saquinhos” ou pallet para caixas de isopor) é definido fora do sistema e não altera o cadastro/validação do RG no WCS.
Regras de validação do RG (formato/unicidade) permanecem idênticas independentemente do destino operacional.
Após a vinculação do RG aos volumes Termolábil, o WCS mantém o controle desses volumes e considera o respectivo pallet como um dos últimos a serem carregados no romaneio, o sistema deve garantir que se tivermos mais um pallet garantindo que os itens embalados em isopor e no cofre permaneçam o maior tempo possível em ambiente refrigerado antes da expedição.
Hardware no Termolábil:
Order Start – PDV
Coleta - PDV
Conferência – Desktop
Paletização – Coletor Android

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 2493b44d9d7c14f4

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação, conferência, reabastecimento, controle de saldo das posições de picking, e picking cart tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** 889c51e082b040bc

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Quantidade a coletar: quantidade solicitada de acordo com a tarefa
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (pega) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (pega) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (pega) que está sendo separado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (pega), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço da caixa plástica.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (pega) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** f0af5ee15c46d383

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação, conferência, reabastecimento, controle de saldo das posições de picking, e picking cart tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** a3a27bc2210988a9

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Quantidade a coletar: quantidade solicitada de acordo com a tarefa
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (pega) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (pega) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (pega) que está sendo separado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (pega), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço da caixa plástica.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (pega) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 290dd31a8d5f3842

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação, conferência, reabastecimento, controle de saldo das posições de picking, e picking cart tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** cf002741b7d07cb4

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Quantidade a coletar: quantidade solicitada de acordo com a tarefa
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (pega) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (pega) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (pega) que está sendo separado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (pega), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço da caixa plástica.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (pega) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** abcc22bce2310954

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação, conferência, reabastecimento, controle de saldo das posições de picking, e picking cart tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** 035fb61b4816b4c1

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart. Nesta tela será exibido os volumes (pega) que serão iniciados no picking cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Quantidade a coletar: quantidade solicitada de acordo com a tarefa
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (pega) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (pega) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (pega) que está sendo separado, após alocar o item coletado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (pega), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço do picking cart.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (pega) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** fdbbecb9463037f3

Dentro da Simulação de Separação, a parte referente ao Picking envolve a previsão de tempo e recursos necessários para realizar a separação dos produtos, além de identificar itens com maior saída em ruas de separação, de acordo com os parâmetros fornecidos.
Parâmetros configuráveis:
Tempo para execução de uma tarefa de separação - Picking: Estimativa do tempo necessário para separar uma unidade de produto no processo de Picking.
Quantidade de horas de pretensão de trabalho - Picking: Total de horas de trabalho que o operador tem disponível para a execução das tarefas de Picking.
Percentual de ocupação da tarefa por item: Percentual cadastrado para identificar quando um item ocupa um número significativo de coletas dentro da linha de separação.
Resultados fornecidos pela simulação:
Número de tarefas de separação e caixas a serem manipuladas, além de quantidade de acessos(visitas ao endereço) por linha de separação e pavilhão.
Quantidade de operadores necessários para realizar as tarefas dentro das horas informadas.
Identificação dos itens que atingem o percentual de coleta cadastrado, permitindo a melhor distribuição desses itens na operação.
