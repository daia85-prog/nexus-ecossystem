# order-start.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 2da8d3463e25a9d0

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Controle de pedidos, Order Start, Picking Cart, Picking Coletor, Conferência, PTW e PTL, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** b75fd9efd1fded5d

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de volumes sistêmicos nas caixas plásticas. Cada Picking Cart terá seu próprio Order Start, e a caixa plástica será vinculada a uma posição do Picking Cart específica.
Mapeamento da Posição de Picking Cart:
Vinculação Inicial da Posição de Picking Cart à Caixa Plástica:
É necessário realizar o mapeamento da posição de Picking Cart. Neste primeiro passo, o operador deve selecionar a zona que irá atuar, e então associar a posição de Picking Cart a uma caixa plástica. O mapeamento é realizado através de um leitor de mão integrado ao PDV, onde o operador escaneia a caixa plástica e associa essa caixa a uma posição específica do Picking Cart realizando a leitura do código do endereço do picking cart. Após finalizar o mapeamento, o operador deve clicar no botão “FINALIZAR MAPEAMENTO”.
OBS: Com as caixas definidas em suas respectivas posições, o sistema automaticamente irá atrelar as tarefas de coleta, de acordo com as regras de priorização de pedidos para todas as caixas vinculadas ao Picking cart. O WCS não permitirá que a mesma caixa seja utilizada em mais de uma posição do Picking cart.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart de uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a disponibilidade de caixas plásticas.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 988ebc3345ecf53e

Após a integração da onda de pedidos, o WCS identifica e realiza a quebra das tarefas de separação, direcionando para o processo de Picking Full Case os itens que podem ser separados sem a necessidade de abertura da caixa. O Order Start Full Case é utilizado quando a separação envolve exclusivamente caixas fechadas.
Um item é considerado elegível para o processo de Full Case quando atende, de forma simultânea, aos seguintes critérios:
O item deve pertencer à categoria Conforme;
As dimensões da caixa devem ser superiores às dimensões máximas suportadas pela caixa do picking cart;
A quantidade solicitada no pedido deve ser igual ou superior à quantidade contida na caixa fechada, permitindo a separação sem fracionamento.
Atendidos esses critérios, o operador deve seguir os passos descritos a seguir para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão: O operador escolhe o posto de impressão onde ele retirará as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação: O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas: O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo com a quantidade de caixas que serão separadas. Essa etapa permite ao operador decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta: A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Exemplo etiqueta Full Case:
Coleta Iniciada do Final da Rua: Para evitar que o operador precise percorrer grandes distâncias até o final da rua para coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de forma que o operador inicie a coleta a partir do final da rua, de forma decrescente. Isso otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao ponto de indução de forma mais eficiente.
Hardware Order Start Full Case: Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo operacional.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Order Start Coletor (Inconformes)  
**Score:** — (semantico) | **ID:** 410b157d2408bb54

O Sistema irá segregar a coleta dos pedidos seguindo os cadastros das zonas realizado pela operação, gerando ordens de separação pelas áreas que os coletores irão atuar.
O operador deverá informar qual será sua zona de separação e qual carrinho está sendo utilizado.
Com o carrinho definido, o sistema automaticamente irá atrelar a próxima tarefa de coleta, de acordo com as regras de priorização de pedidos para o carrinho informado.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 44ea634b04223b8a

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes e produtos separados nas estações de picking, ou seja, esta aplicação executara a rotina de SEPARAÇÃO, tendo como papel fundamental a interface entre os sistemas VELOX e EWM, com chão de fábrica Invent.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre os sistemas Velox e EWM, com as estações de trabalho, através de interface Web (Rest JSON), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 22380eb0df74d969

Será 1 (um) order padrão start no início da linha.
Para iniciar o processo, o sistema Velox deverá receber via integração [Order] todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade, para os pedidos recebidos, caso seja necessário priorizar um pedido específico ou uma onda especifica, deverá ser feito manualmente no sistema Velox.
Quando o sistema Velox receber essas informações, assume as informações recebidas pelo SAP que faz o processo de cubagem e gera os volumes necessários para cada pedido a ser separado.
O Velox realiza a impressão das etiquetas dos volumes gerados e deverá assumir as informações recebidas pelo SAP da cubagem dos produtos do pedido e gerar volumes separados:
Controlados (Separação Fracionada)
Não Controlados (Separação Fracionada)
Caixa Fechada (Separação Full Case)
Conforme a cubagem realizada, informará na tela do order start os tipos de caixas solicitados para atender os volumes daquele pedido.
Operador então, fixa a etiqueta do volume conforme o tipo de caixa solicitado conforme a cubagem, e induz a caixa na esteira para seguir para a primeira estação de separação.
Importante: A tela de Order Start Padrão não deve exibir pedidos/volumes vinculados a postos de exceção. Produtos alocados em postos de exceção são gerenciados exclusivamente pela tela de [Ordem Start Exceção]. Da mesma forma, produtos de exceção não devem aparecer na sugestão de alocação da linha comum.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Troca de Endereço para Exceção  
**Score:** — (semantico) | **ID:** cf9ffbd6dcc8e40f

Antes do início do Order Start, a operação poderá, por meio da tela de Order’s Starts, reclassificar itens para o fluxo de exceção durante a criação da onda. Ao realizar essa troca, o WCS internamente substituirá o endereço padrão pelo endereço prefixado ([Caractere Inicial] + [Endereço Padrão]), garantindo que as coletas desses itens sejam retiradas da automação e direcionadas exclusivamente para o Picking Cart. Entretanto, caso o pedido possua mais de um item e ao menos um deles esteja associado a um endereço comum (não exceção), o sistema Velox não realizará a conversão do pedido para o fluxo de exceção. Nessa situação, o pedido será mantido integralmente no Order Start padrão, sem alteração de endereços para o padrão de exceção.
Importante: Todo o processo de reclassificação de endereços e definição de exceção deve ser concluído antes do início do Order Start, não sendo permitido qualquer ajuste após o início do processamento da onda.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Order Start – Picking Cart (Exceção)  
**Score:** — (semantico) | **ID:** 3c30ff0bee6d4e06

Após realizar o login no sistema WCS, o operador deverá acessar a tela de Order Start Exceção, responsável por iniciar a separação de volumes classificados como exceção.
Essa tela é dedicada exclusivamente ao tratamento de pedidos/volumes vinculados aos endereços de exceção, não sendo exibidos, em nenhuma hipótese, volumes pertencentes à linha comum.
O Order Start de exceção considera apenas os endereços exceção previamente cadastrados no sistema, sendo responsável por apresentar ao operador os volumes que deverão ser processados via Picking Cart de exceção.
Ao acessar a tela, o operador visualizará a lista de volumes disponíveis para início, organizados conforme a prioridade definida na integração com o sistema Velox.
Para dar início ao processo de Order Start, o operador deverá informar a quantidade de etiquetas a serem impressas [Impressão de Etiquetas], após a confirmação, o sistema realizará a impressão das etiquetas.
A separação desses volumes será realizada exclusivamente através do fluxo de Picking Cart Exceção, não passando em nenhum momento pela linha de automação comum.
O fluxo de exceção deve respeitar as seguintes regras operacionais:
O sistema deverá exibir apenas pedidos e volumes vinculados a endereços de exceção, não permitindo a visualização ou seleção de pedidos da linha comum nessa tela.
O WCS deve considerar exclusivamente os endereços de exceção no processo de Order Start, ignorando qualquer configuração relacionada à linha padrão de separação.
Os volumes classificados como exceção não devem, em nenhuma etapa do processo, transitar pela linha automatizada comum, sendo sua separação realizada integralmente via Picking Cart.
Não é permitido, em nenhuma hipótese, o agrupamento ou mistura de produtos de exceção com produtos da linha comum, seja nas etapas de cubagem, geração de volumes, separação ou confirmação.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Resumo do Fluxo Operacional  
**Score:** — (semantico) | **ID:** 470b7e315d5c9bd0

Pré-Order Start: A operação realiza a troca de endereço dos itens de exceção via tela dedicada, reclassificando-os para o fluxo de Picking Cart.
Impressão de Etiquetas: Etiquetas são impressas em tela separada, respeitando a segregação por tipo (controlado/não controlado) conforme a filial.
Separação: Coleta dos volumes de exceção via Picking Cart, seguindo a ordenação por endereço.
Confirmação: Operador confirma cada volume na tela de Confirmação de Picking Cart (Etiqueta + Lote + EAN), com rastreabilidade e travas sistêmicas.
Integração: Ao finalizar a separação, o Velox envia a confirmação ao EWM [Confirmação de Separação] utilizando o endereço original da integração (sem o prefixo interno).

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Separação (SP)  
**Score:** — (semantico) | **ID:** 24ec88bfec0f99ef

Teremos 2 (duas) linhas de separação de fracionados, linha de separação de produtos controlados e a linha de separação de produtos não controlados.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Fracionados Controlados  
**Score:** — (semantico) | **ID:** 3909d94debeee7ed

Linha Controlados (Frente e Posterior (costas))
1 (um) operador por estação.
1 (uma) linha de separação frente e costas;
Frente com 148 (cento e quarenta e oito) posições/sku.
Frente com 1 (um) led 3 (dígitos) com botão por posição/sku.
Posterior (Costas) com 160 (cento e sessenta) posições/sku.
5 (cinco) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Cada posição frente será composta por:
1 (um) led 3 (dígitos) com botão por posição/sku.
Posições posteriores (costas) não terá leds, as posições serão informadas na tela do PDV da estação.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Fracionados Não Controlados  
**Score:** — (semantico) | **ID:** 82cdbb1aa222be2d

Linha Não Controlados (Frente e Posterior (costas))
1 (um) operador por estação.
1 (uma) linha de separação frente e costas;
Frente com 180 (cento e oitenta) posições/sku.
Frente com 1 (um) led 3 (dígitos) com botão por posição/sku.
Posterior (Costas) com 160 (cento e sessenta) posições/sku.
5 (cinco) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Cada posição frente será composta por:
1 (um) led 3 (dígitos) com botão por posição/sku.
Posições posteriores (costas) não terá leds, as posições serão informadas na tela do PDV da estação.
Operador ao receber a caixa na estação, realiza a leitura da etiqueta do volume, com isso os leds e quantidades da estação são acesos, informando ao operador quais posições e quantidades devem ser separadas naquele volume.
Na tela do PDV também informará a separação que o operador está realizando, ao realizar a separação a tela do PDV é atualizada.
Para iniciar a separação dos itens na posição, operador deverá realizar a leitura da etiqueta de "produção" do produto solicitado, nessa etiqueta contém as informações do produto e lote, ao realizar a leitura dessa etiqueta de "produção" o sistema Velox válida a informação de Lote, se a informação do lote lido for compatível com a informação do lote solicitado, o sistema Velox então inicia o picking desse produto, operador deve realizar a leitura de todos os itens, item a item, por exemplo: caso no pedido, esteja solicitando a separação de 10 (dez) unidades do mesmo produto, o operador deverá fazer a leitura dos 10 (dez) itens para concluir a separação desse item.
Durante a separação, caso a quantidade solicitada de um lote termine, o operador terá que alterar o lote via sistema Velox, informando o novo lote que será separado daquele produto e iniciar a separação da quantidade restante do produto com o novo lote.
A troca de lote deverá ser autorizada por um usuário com o nível de usuário elevado específico, cadastrado para essa operação/autorização.
Essa etiqueta de "produção" estará disponível na caixa do produto a ser separado na posição.
Na integração de confirmação, o sistema Velox deve informar os lotes que foram separados para o produto. No caso, quando o produto for separado em 2 (dois) lotes diferentes, Velox deverá informar a quantidade separada de cada lote.
Ao finalizar o picking dos itens da frente da estação, caso exista produtos a serem separados na área posterior (costas) do operador, a tela do PDV será atualizada informando o operador que existe itens pendentes separação na área posterior (costas), e informará o local e a quantidade a ser separada.
O processo de bipagem da etiqueta de "produção" para validar o lote, se aplica para a separação na frente e área posterior (costas)
Ao finalizar toda a separação na estação frente e posterior (costas), todos os leds da frente da estação acenderão na cor verde informando ao operador que toda a separação daquela estação foi finalizada.
Descrição do processo operacional de separação:
Realizar a leitura do volume da caixa recebida;
Caso não tenha nenhum produto a ser separado na estação atual, os leds devem acender na cor vermelho;
Verificar os leds acesos na are de picking frente, solicitando quantidade de separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso seja validado, tela do PDV fica verde;
Caso não seja validado, tela do PDV fica vermelho;
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
Ao finalizar a separação de todas as posições de separação posteriores (costas), todos os leds da frente acenderão na cor "Verde", informando ao usuário que o picking foi concluído 100%;
Operador deve apertar qualquer dos botões acesos em verde, para que se apague os leds.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade física de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Separação Cristal MG  
**Score:** — (semantico) | **ID:** 816431569b96a291

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
**Score:** — (nome-topico) | **ID:** ee960800fbb4c4b5

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
**Heading:** Etiqueta order start  
**Score:** — (semantico) | **ID:** 9250b5d723449b73

O sistema WCS será o responsável pela impressão de etiquetas de caixa no order start se o pedido for da categoria geladeira, full case e grandes volumes, essa etiqueta será sequencial e fará o vínculo entre etiqueta e pedido.
Os demais pedidos, as caixas plásticas já estarão identificadas pelo cliente, portanto não será necessário imprimir as etiquetas a cada pedido.
Com o objetivo de garantir maior rastreabilidade, controle e acuracidade nas etapas de separação, especialmente para grandes volumes, full case e itens armazenados em geladeiras ou outras condições especiais, será obrigatória a implementação da etiqueta virtual de separação.
Na etiqueta virtual destinada aos produtos que exijam vínculo com a etiqueta, deverão constar obrigatoriamente as seguintes informações, apresentadas de forma clara e destacada para auxílio operacional durante as etapas de separação, conferência e expedição:
Estado de destino (UF) do pedido: facilita a roteirização e agrupamento por região de entrega.
Categoria do produto: identificando que se trata de um item do tipo Geladeira, Full Case ou Grandes Volumes, contribuindo para o correto manuseio e tratamento logístico.
Número do pedido vinculado: garante rastreabilidade e conferência precisa com os dados do sistema.
Código da caixa com o prefixo “FR”: permite a identificação visual e padronizada dos volumes, sendo fundamental para controle e acompanhamento na linha de separação.
Impressão da Etiqueta
A impressão da etiqueta virtual deverá ocorrer automaticamente no Order Start da linha de Flowrack sempre que o volume estiver relacionado a categorias que exigem identificação, como Geladeira, Grandes Volumes ou Full Case. Nesse processo, assim que o operador realiza o vínculo entre a caixa e o pedido na estação de Order Start, o sistema WCS identifica a necessidade de etiqueta, gera automaticamente o layout com as informações obrigatórias incluindo o estado de destino (UF), categoria do produto, número do pedido vinculado e o código da caixa com o prefixo “FR”, e envia o comando de impressão para a impressora da estação. Dessa forma, a etiqueta é disponibilizada imediatamente para o operador no início da separação, garantindo que o volume já esteja devidamente identificado desde sua entrada no fluxo automatizado. Esse processo evita atrasos, elimina a necessidade de ações manuais e assegura a rastreabilidade e o correto direcionamento dos volumes ao longo de toda a operação.
A impressora utilizada para a impressão da etiqueta deve ser posicionada de forma estratégica no início do fluxo de separação, permitindo que a etiqueta seja colada na caixa antes do início do processo de picking.
Bipagem da Localização Física: O operador deverá bipar a localização física (Endereço) onde o produto está armazenado, garantindo que a posição de onde o item será retirado está corretamente identificada no sistema. Independente da categoria, sempre será necessário realizar essa ação para efetivar a coleta do produto.
Observação: Para produtos das categorias 344 e Polícia Federal será necessário realizar a leitura da posição e também apenas uma única vez do código do produto. Na tela deve estar evidenciado o endereço, número do lote, produto e quantidade.
Observação: Para as demais categorias de produto fora do Flowrack, será necessário para efetivar a separação a leitura apenas da posição (Endereço) do item.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Layout de etiqueta order start  
**Score:** — (semantico) | **ID:** 203dd649eb688435

Dimensões da etiqueta será de ALTURA 5 X 10 LARGURA

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Coletor de Dados  
**Score:** — (semantico) | **ID:** 21364e112a0aca3a

A separação de produtos realizados nas categorias: Geladeira, Polícia Federal e 344 será realizada utilizando coletores de dados (dispositivos móveis). Cada categoria de produto terá uma abordagem de separação distinta, garantindo que sejam tratadas adequadamente conforme suas especificações de segurança, controle e operação.
O mapeamento da separação será realizado caixa a caixa, garantindo que cada volume seja acompanhado individualmente ao longo de todo o processo operacional. Isso significa que, desde o início da separação até a finalização na conferência ou expedição, o sistema WCS manterá o rastreio completo e detalhado de cada caixa, vinculando-a ao seu respectivo pedido, itens, rota de picking e operador responsável.
Na separação realizada por meio de coletor de dados, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar, para cada item a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Lote: garantindo rastreabilidade e controle de validade quando aplicável;
Quantidade a ser coletada: número exato de unidades a retirar naquele endereço;
Unidade de medida: para indicar se a coleta será feita em unidades, caixas, frascos, pacotes, entre outros.
Produtos Controlados e Termolábeis: Geladeira, Policia Federal e 344
Todos esses produtos serão separados via coletor. O coletor identificará as localizações e os produtos a serem separados, guiando o operador de forma eficiente.
Após a separação, esses itens serão conferidos e embalados no local designado. Este local será específico para cada categoria de produto, garantindo que os procedimentos de conferência e embalagem atendam aos requisitos de segurança e rastreabilidade exigidos.
A separação das categorias: Geladeira, Polícia Federal e 344 deverá ser ordenada por ordem crescente de endereço, ou seja, os endereços de picking serão apresentados ao operador seguindo uma sequência lógica do menor para o maior, conforme a estrutura física do armazém. Essa ordenação visa otimizar o percurso de coleta, reduzindo deslocamentos desnecessários, aumentando a eficiência operacional e proporcionando um fluxo contínuo durante o processo de separação. Essa lógica de roteirização deverá ser aplicada tanto nas operações com Picking Cart quanto nas coletas via coletor de dados.
A conferência dos produtos, especialmente os controlados e Termolábeis, será feita por bipagem do endereço (posição) e somente uma unidade do produto daquele endereço (posição), garantindo que a separação esteja conforme o pedido.
Haverá um setor de conferência dentro dessas áreas dedicada para essas categorias.
Essa conferência seguirá as mesmas regras e propriedades das demais conferências existentes no projeto.
Operador ao finalizar a separação dos volumes realizados no coletor, induz a caixa diretamente no Sorter.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** c52d3fde383c2efe

O processo de separação, tem início no Order Start. Esse processo é composto por um posto de trabalho equipado com um desktop, um leitor de código de barras e uma impressora que será de responsabilidade do cliente. Para garantir eficiência operacional, a linha contará com um posto de Order Start localizado no mezanino.
Os volumes serão exibidos no Order Start correspondente à sua área de separação, conforme o mapeamento dos produtos e endereços. A ordem das tarefas seguirá a prioridade definida na integração, respeitando a sequência de rotas estabelecida para a operação. Caso necessário, o sistema WCS permitirá a alteração dessas prioridades.
O WCS irá ordenar os itens no Order Start seguindo a prioridade enviada na integração. Caso seja necessário alterar essa prioridade no WCS disponibilizara uma tela que permita alterar a prioridade do volume ou da carga em uma faixa de 1 a 5. Ao ser alterado dentro do WCS, o volume/carga terá prioridade máxima para ser realizado comparado com pedidos que possuem apenas a prioridade recebida na integração.
Após alterar a prioridade do volume no sistema, não será avaliado a prioridade recebida na integração para aquele respectivo pedido.
O operador poderá selecionar quantas etiquetas deseja imprimir e o sistema irá enviar a ordem de impressão automaticamente. Com a etiqueta impressa, o operador realiza a etiquetagem no modelo de caixa correto exibido tanto na tela de Orde Start ou informado na própria etiqueta e pode induzir o volume na esteira.
A tela de Order Start contará com a listagem dos volumes que serão impressos já respeitando as regras de prioridade citadas acima, e uma relação de quantos volumes de cada modelo de caixa já foram enviados pelo WMS e estão na nossa base de dados.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Nova Priorização Manual por Carga  
**Score:** — (nome-topico) | **ID:** 89333943f1ab1960

O sistema disponibilizará uma funcionalidade de priorização manual de carga durante a operação, permitindo que uma carga específica seja elevada na fila de processamento sem necessidade de interrupção da operação em andamento.
A priorização será realizada com base no campo NROCARGA, recebido através da integração de Separação Fracionado, sendo este o identificador principal utilizado para definição da prioridade operacional.
Quando uma determinada carga for priorizada, todos os volumes vinculados ao mesmo NROCARGA passarão automaticamente a assumir prioridade de processamento dentro do fluxo operacional.
Regras da Funcionalidade
A priorização será executada manualmente através da interface operacional do sistema;
A funcionalidade poderá ser utilizada com a operação em andamento, sem necessidade de parada do fluxo;
O campo NROCARGA será utilizado como agrupador principal da carga;
Todos os volumes pertencentes ao mesmo NROCARGA herdarão a prioridade aplicada;
Após priorizada, a carga seguirá o fluxo operacional respeitando a nova ordem de processamento definida pelo sistema.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 082623d28e67900f

Cada uma das duas estações de Order Start deverá contar com uma estação de trabalho disponibilizada pelo cliente, conforme descrito a seguir:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
01(um) impressora de etiquetas
Abaixo segue a configuração mínima para o desktop para a estação de Order Start:

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Listagem de Anomalias  
**Score:** — (semantico) | **ID:** 0dbe13eb769e7f77

Relatório que exibe todas as anomalias registradas no período selecionado, de forma individual por item. Cada linha representa um produto que passou pela triagem e foi alocado em uma posição de anomalia. Permite filtrar por número da nota fiscal e tipo de anomalia. Disponível nas visualizações Tabela, Gráfico e Resumo.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** bc16662496a54815

Para iniciar o processo, o sistema WCS, deverá receber via integração todas as informações dos pedidos para separação de fracionados e desvios corretos de full case, previstos para a operação atual.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Order Start Fracionado  
**Score:** — (semantico) | **ID:** c88e1d84ca3943e0

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos previstos, incluindo os dados de cubagem e quantidade de cada item. 	O WCS identifica os pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In, First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados, a ordenação inicial será agrupada por Remessa. Com base nas informações recebidas, o WCS realiza o cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada missão (pedido). O sistema calcula quantos volumes serão necessários para cada missão.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start, onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada missão com base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o processo de separação do pedido.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 38a163bef1c32ba1

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
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Dashboard Operacional – Monitoramento de Order Start  
**Score:** — (semantico) | **ID:** 33b9680317961e01

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
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Tela de Romaneios  
**Score:** — (semantico) | **ID:** 652cab69aab68123

A tela de Romaneios permite que a operação visualize e inicie os romaneios que terão suas tarefas de separação liberadas, garantindo controle sobre quais serão processados no Order Start e alocados no PTL. O WCS exibe todos os romaneios recebidos, ordenados por data de integração, mostrando informações como número do romaneio e status (Pendente, Iniciado ou Finalizado). A tela também oferece funcionalidades de busca por romaneio específico e filtros por data ou status, facilitando a gestão e priorização dos romaneios a serem processados.
Para iniciar o processamento, o operador seleciona um ou mais romaneios, e o WCS reserva automaticamente as posições de PTL e libera as tarefas de separação correspondentes nos Order Start. Romaneios não iniciados nesta tela não terão suas tarefas liberadas, garantindo autonomia da operação para definir quais volumes irão processar. Após a execução, o sistema confirma ao operador que as tarefas foram liberadas e as posições de PTL foram reservadas corretamente.

OBS: na tela de romaneio deve ser exibido a previsão de posições de PTL a serem utilizadas para que a operação possa cadastrar o mapa de sorter de forma assertiva.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 7833d5e334abdc40

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
**Score:** — (semantico) | **ID:** 826770669278df73

O Order Start dos Brindes será utilizado quando o produto tiver no cadastro o campo “tipo” = “Brinde”.
Fluxo Operacional:
O operador acessa o Order Start Brindes, onde são exibidos apenas os volumes que tem coleta nesse setor.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido e direciona o coletor para a tela de coleta fracionada.
Após o término, o volume estará pronto para realizar a leitura da caixa plástica no packing.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Nível 3  
**Score:** — (semantico) | **ID:** b633fee81a57454c

O Order Start no 3º Nível será utilizado quando a coleta do item iniciar neste nível, podendo ou não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas os volumes que iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Nível 2  
**Score:** — (semantico) | **ID:** 8293a0ebc6191568

O Order Start no 2º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Nível 1  
**Score:** — (semantico) | **ID:** cbdb2d0ee84b8f03

O Order Start no 1º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Order Start Fracionado Térreo  
**Score:** — (semantico) | **ID:** 851554e275950f28

O Order Start no Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis 1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo (desktop ou PDV/Tablet), onde são exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2 ou 3.(Somente par consulta)
Será exibido o total de caixas necessárias para finalizar os pedidos integrados.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido automaticamente.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Fluxo Operacional de Picking Térreo  
**Score:** — (semantico) | **ID:** fa5ae81458300347

O processo de Picking no Térreo ocorre após a leitura da caixa plástica no Order Start, onde o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Order Start e Leitura da Caixa Plástica:
O operador induz o volume na esteira, e o processo de Order Start ocorre após a passagem da caixa plástica pelo primeiro ponto de decisão (Scanner).
O WCS verifica automaticamente se há uma tarefa de coleta liberada e associa ao volume. Caso haja coleta, o volume será desviado automaticamente para o posto correspondente. Caso não haja o volume será desviado no primeiro posto e será informado nos leds e pdv o motivo do rejeito (falha de leitura da etiqueta/ Falta de pedidos integrados).
PBL (Picking by Light):
O após o desvio o WCS acende os LEDs de frente no posto de separação, sinalizando o local e a quantidade de itens a serem coletados. Os LEDs de frente exibirão 3 dígitos para identificar a quantidade de itens a serem coletados e serão únicos por posição.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um PDV para auxiliar o operador na coleta.
Exibição da Lista de Itens no PDV:
O PDV exibirá a lista de itens a serem coletados de acordo com o volume desviado e a quantidade de itens prevista, e se houver a observação do pedido também será exibido.
O operador realiza a coleta física do item e confirma a coleta pressionando o LED correspondente. Após pressionar o LED, o WCS confirma a coleta do item e a linha correspondente é pintada de verde no PDV.
Coleta de Itens nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas, o WCS acende os LEDs da frente em rosa para sinalizar a coleta na parte de picking costas, e também acende os LEDs de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente: o WCS irá informar o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking, permitindo que o operador colete de maneira eficiente e sem confusão.
O operador realiza a coleta de acordo com a indicação dos LEDs.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do PDV.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde para indicar que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** cf615085987f6d7f

Após a integração do romaneio, o WCS identifica e quebra as tarefas, de forma que o que pode ser separado sem a necessidade de abrir a caixa seja direcionado ao processo de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo com a quantidade de caixas que serão separadas. Essa etapa permite ao operador decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do lado oposto da indução:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de forma que o operador inicie a coleta a partir do ponto mais longe da indução. Isso otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao ponto de indução de forma mais eficiente. Isso será feito atráves do cadastro de ruas que deve informar se seguira a ordenação de endereço de forma crescente ou decrescente.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo operacional.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** 7d7e0e6dc0b11e6a

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de volumes sistêmicos nas posições dos Picking Carts. Cada Picking Cart terá seu próprio Order Start, e a posição do Picking Cart será vinculada a uma caixa plástica específica.
Existem dois tipos de Order Start para o Picking Cart:
Controlado: Neste modelo, a tarefa de picking é realizada em uma área com controle de acesso. O sistema monitora o tipo de produto para definir a qual Order Start a tarefa pertence, garantindo que somente pessoas autorizadas possam iniciar a tarefa na área controlada.
Não Controlado: Neste modelo, o processo de picking ocorre em uma área comum, onde não é necessário permissão de acesso, permitindo que qualquer operador inicie a tarefa de picking sem restrições.
A distinção entre os tipos de Order Start permite direcionar o picking controlado para operadores específicos, garantindo maior controle e segurança nas operações.
Mapeamento da Posição de Picking Cart:
Vinculação Inicial da Posição de Picking Cart à Caixa Plástica:
Antes de alocar o volume sistêmico, é necessário realizar o mapeamento da posição de Picking Cart. Neste primeiro passo, a posição de Picking Cart será associada a uma caixa plástica, mas ainda não haverá vínculo com o volume sistêmico. O mapeamento é realizado através de um leitor de mão integrado ao PDV, onde o operador escaneia a caixa plástica e associa essa caixa a uma posição específica do Picking Cart. Após finalizar o mapeamento, o operador deve clicar no botão “FINALIZAR MAPEAMENTO”.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart de uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a disponibilidade de caixas plásticas.
Exibição da Lista no PDV:
Exibição das Tarefas no PDV:
Após o mapeamento da caixa plástica com a posição de Picking Cart, o PDV exibirá a lista de tarefas de separação que devem ser realizadas. A lista será organizada de acordo com a regra de prioridade ou FIFO (First In, First Out), conforme as configurações definidas no sistema.
Leitura e Alocação da Posição de Picking Cart ao Volume Sistêmico:
Leitura da Posição de Picking:
O operador deve realizar a leitura da posição de Picking cart no PDV, onde as informações sobre as tarefas de separação estarão disponíveis. Na tela do PDV, o operador deverá confirmar a alocação da posição de Picking Cart ao volume sistêmico que está sendo separado, clicando na opção correspondente.
Repetição do Processo:
Repetir para Outras Posições de Picking Cart:
O operador deve repetir o processo de leitura e alocação para todas as outras posições de Picking Cart que possuam caixas plásticas vinculadas. Ele não pode ir para a tela de coleta até que todas as posições que tenham caixas vinculadas sejam atribuídas a uma tarefa de separação. Caso contrário, ele só poderá avançar quando todas as tarefas de separação forem vinculadas às respectivas caixas plásticas ou até que as tarefas acabem.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Tela de Romaneios  
**Score:** — (semantico) | **ID:** e0e8bb69bc186af3

A tela de Romaneios permite que a operação visualize e inicie os romaneios que terão suas tarefas de separação liberadas, garantindo controle sobre quais serão processados no Order Start e alocados no PTL. O WCS exibe todos os romaneios recebidos, ordenados por data de integração, mostrando informações como número do romaneio e status (Pendente, Iniciado ou Finalizado). A tela também oferece funcionalidades de busca por romaneio específico e filtros por data ou status, facilitando a gestão e priorização dos romaneios a serem processados.
Para iniciar o processamento, o operador seleciona um ou mais romaneios, e o WCS reserva automaticamente as posições de PTL e libera as tarefas de separação correspondentes nos Order Start. Romaneios não iniciados nesta tela não terão suas tarefas liberadas, garantindo autonomia da operação para definir quais volumes irão processar. Após a execução, o sistema confirma ao operador que as tarefas foram liberadas e as posições de PTL foram reservadas corretamente.

OBS: na tela de romaneio deve ser exibido a previsão de posições de PTL a serem utilizadas para que a operação possa cadastrar o mapa de sorter de forma assertiva.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** ef064839091fd452

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
**Score:** — (semantico) | **ID:** 5bd919c728985c27

O Order Start dos Brindes será utilizado quando o produto tiver no cadastro o campo “tipo” = “Brinde”.
Fluxo Operacional:
O operador acessa o Order Start Brindes, onde são exibidos apenas os volumes que tem coleta nesse setor.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido e direciona o coletor para a tela de coleta fracionada.
Após o término, o volume estará pronto para realizar a leitura da caixa plástica no packing.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Nível 3  
**Score:** — (semantico) | **ID:** 5c44ba979f2ae624

O Order Start no 3º Nível será utilizado quando a coleta do item iniciar neste nível, podendo ou não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas os volumes que iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Nível 2  
**Score:** — (semantico) | **ID:** 51a24a070633036d

O Order Start no 2º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Nível 1  
**Score:** — (semantico) | **ID:** 77a281e70383663a

O Order Start no 1º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Order Start Fracionado Térreo  
**Score:** — (semantico) | **ID:** 58628ca2e0df3150

O Order Start no Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis 1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo (desktop ou PDV/Tablet), onde são exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2 ou 3.(Somente par consulta)
Será exibido o total de caixas necessárias para finalizar os pedidos integrados.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido automaticamente.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Fluxo Operacional de Picking Térreo  
**Score:** — (semantico) | **ID:** c5d7403885f186bd

O processo de Picking no Térreo ocorre após a leitura da caixa plástica no Order Start, onde o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Order Start e Leitura da Caixa Plástica:
O operador induz o volume na esteira, e o processo de Order Start ocorre após a passagem da caixa plástica pelo primeiro ponto de decisão (Scanner).
O WCS verifica automaticamente se há uma tarefa de coleta liberada e associa ao volume. Caso haja coleta, o volume será desviado automaticamente para o posto correspondente. Caso não haja o volume será desviado no primeiro posto e será informado nos leds e pdv o motivo do rejeito (falha de leitura da etiqueta/ Falta de pedidos integrados).
PBL (Picking by Light):
O após o desvio o WCS acende os LEDs de frente no posto de separação, sinalizando o local e a quantidade de itens a serem coletados. Os LEDs de frente exibirão 3 dígitos para identificar a quantidade de itens a serem coletados e serão únicos por posição.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um PDV para auxiliar o operador na coleta.
Exibição da Lista de Itens no PDV:
O PDV exibirá a lista de itens a serem coletados de acordo com o volume desviado e a quantidade de itens prevista, e se houver a observação do pedido também será exibido.
O operador realiza a coleta física do item e confirma a coleta pressionando o LED correspondente. Após pressionar o LED, o WCS confirma a coleta do item e a linha correspondente é pintada de verde no PDV.
Coleta de Itens nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas, o WCS acende os LEDs da frente em rosa para sinalizar a coleta na parte de picking costas, e também acende os LEDs de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente: o WCS irá informar o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking, permitindo que o operador colete de maneira eficiente e sem confusão.
O operador realiza a coleta de acordo com a indicação dos LEDs.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do PDV.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde para indicar que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** bf43a4757ffb3e28

Após a integração do romaneio, o WCS identifica e quebra as tarefas, de forma que o que pode ser separado sem a necessidade de abrir a caixa seja direcionado ao processo de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo com a quantidade de caixas que serão separadas. Essa etapa permite ao operador decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do lado oposto da indução:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de forma que o operador inicie a coleta a partir do ponto mais longe da indução. Isso otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao ponto de indução de forma mais eficiente. Isso será feito atráves do cadastro de ruas que deve informar se seguira a ordenação de endereço de forma crescente ou decrescente.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo operacional.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** 54ef480b7a066de2

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de volumes sistêmicos nas posições dos Picking Carts. Cada Picking Cart terá seu próprio Order Start, e a posição do Picking Cart será vinculada a uma caixa plástica específica.
Existem dois tipos de Order Start para o Picking Cart:
Controlado: Neste modelo, a tarefa de picking é realizada em uma área com controle de acesso. O sistema monitora o tipo de produto para definir a qual Order Start a tarefa pertence, garantindo que somente pessoas autorizadas possam iniciar a tarefa na área controlada.
Não Controlado: Neste modelo, o processo de picking ocorre em uma área comum, onde não é necessário permissão de acesso, permitindo que qualquer operador inicie a tarefa de picking sem restrições.
A distinção entre os tipos de Order Start permite direcionar o picking controlado para operadores específicos, garantindo maior controle e segurança nas operações.
Mapeamento da Posição de Picking Cart:
Vinculação Inicial da Posição de Picking Cart à Caixa Plástica:
Antes de alocar o volume sistêmico, é necessário realizar o mapeamento da posição de Picking Cart. Neste primeiro passo, a posição de Picking Cart será associada a uma caixa plástica, mas ainda não haverá vínculo com o volume sistêmico. O mapeamento é realizado através de um leitor de mão integrado ao PDV, onde o operador escaneia a caixa plástica e associa essa caixa a uma posição específica do Picking Cart. Após finalizar o mapeamento, o operador deve clicar no botão “FINALIZAR MAPEAMENTO”.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart de uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a disponibilidade de caixas plásticas.
Exibição da Lista no PDV:
Exibição das Tarefas no PDV:
Após o mapeamento da caixa plástica com a posição de Picking Cart, o PDV exibirá a lista de tarefas de separação que devem ser realizadas. A lista será organizada de acordo com a regra de prioridade ou FIFO (First In, First Out), conforme as configurações definidas no sistema.
Leitura e Alocação da Posição de Picking Cart ao Volume Sistêmico:
Leitura da Posição de Picking:
O operador deve realizar a leitura da posição de Picking cart no PDV, onde as informações sobre as tarefas de separação estarão disponíveis. Na tela do PDV, o operador deverá confirmar a alocação da posição de Picking Cart ao volume sistêmico que está sendo separado, clicando na opção correspondente.
Repetição do Processo:
Repetir para Outras Posições de Picking Cart:
O operador deve repetir o processo de leitura e alocação para todas as outras posições de Picking Cart que possuam caixas plásticas vinculadas. Ele não pode ir para a tela de coleta até que todas as posições que tenham caixas vinculadas sejam atribuídas a uma tarefa de separação. Caso contrário, ele só poderá avançar quando todas as tarefas de separação forem vinculadas às respectivas caixas plásticas ou até que as tarefas acabem.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Tela de Romaneios  
**Score:** — (semantico) | **ID:** e71c8f1ce7635a9c

A tela de Romaneios permite que a operação visualize e inicie os romaneios que terão suas tarefas de separação liberadas, garantindo controle sobre quais serão processados no Order Start e alocados no PTL. O WCS exibe todos os romaneios recebidos, ordenados por data de integração, mostrando informações como número do romaneio e status (Pendente, Iniciado ou Finalizado). A tela também oferece funcionalidades de busca por romaneio específico e filtros por data ou status, facilitando a gestão e priorização dos romaneios a serem processados.
Para iniciar o processamento, o operador seleciona um ou mais romaneios, e o WCS reserva automaticamente as posições de PTL e libera as tarefas de separação correspondentes nos Order Start. Romaneios não iniciados nesta tela não terão suas tarefas liberadas, garantindo autonomia da operação para definir quais volumes irão processar. Após a execução, o sistema confirma ao operador que as tarefas foram liberadas e as posições de PTL foram reservadas corretamente.

OBS: na tela de romaneio deve ser exibido a previsão de posições de PTL a serem utilizadas para que a operação possa cadastrar o mapa de sorter de forma assertiva.
Comportamento de capacidade: o sistema permite o início de romaneios sem limite numérico. Romaneios cuja previsão de PTL exceda a capacidade disponível (192 posições — 24 por rampa × 8 rampas) entram em fila natural — os volumes são liberados para coleta no Order Start conforme as posições de PTL vão sendo desocupadas (fechamento de pallets em andamento).

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** a2b2f7ee709f59b0

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
**Score:** — (semantico) | **ID:** 1fc0cacfde9d84b7

O Order Start dos Brindes será utilizado quando o produto tiver no cadastro o campo “tipo” = “Brinde”.
Fluxo Operacional:
O operador acessa o Order Start Brindes, onde são exibidos apenas os volumes que tem coleta nesse setor.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido e direciona o coletor para a tela de coleta fracionada.
Após o término, o volume estará pronto para realizar a leitura da caixa plástica no packing.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Nível 3  
**Score:** — (semantico) | **ID:** 2ee059210a7b3cd4

O Order Start no 3º Nível será utilizado quando a coleta do item iniciar neste nível, podendo ou não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas os volumes que iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Nível 2  
**Score:** — (semantico) | **ID:** f5ed07f843274dc3

O Order Start no 2º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Nível 1  
**Score:** — (semantico) | **ID:** 79196dcd8d1193d8

O Order Start no 1º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Order Start Fracionado Térreo  
**Score:** — (semantico) | **ID:** 49d2b4d2a76fd9ff

O Order Start no Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis 1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo (desktop ou PDV/Tablet), onde são exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2 ou 3.(Somente par consulta)
Será exibido o total de caixas necessárias para finalizar os pedidos integrados.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido automaticamente.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Fluxo Operacional de Picking Térreo  
**Score:** — (semantico) | **ID:** 6b20bbae376b35ac

O processo de Picking no Térreo ocorre após a leitura da caixa plástica no Order Start, onde o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Order Start e Leitura da Caixa Plástica:
O operador induz o volume na esteira, e o processo de Order Start ocorre após a passagem da caixa plástica pelo primeiro ponto de decisão (Scanner).
O WCS verifica automaticamente se há uma tarefa de coleta liberada e associa ao volume. Caso haja coleta, o volume será desviado automaticamente para o posto correspondente. Caso não haja o volume será desviado no primeiro posto e será informado nos leds e pdv o motivo do rejeito (falha de leitura da etiqueta/ Falta de pedidos integrados).
PBL (Picking by Light):
O após o desvio o WCS acende os LEDs de frente no posto de separação, sinalizando o local e a quantidade de itens a serem coletados. Os LEDs de frente exibirão 3 dígitos para identificar a quantidade de itens a serem coletados e serão únicos por posição.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um PDV para auxiliar o operador na coleta.
Exibição da Lista de Itens no PDV:
O PDV exibirá a lista de itens a serem coletados de acordo com o volume desviado e a quantidade de itens prevista, e se houver a observação do pedido também será exibido.
O operador realiza a coleta física do item e confirma a coleta pressionando o LED correspondente. Após pressionar o LED, o WCS confirma a coleta do item e a linha correspondente é pintada de verde no PDV.
Coleta de Itens nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas, o WCS acende os LEDs da frente em rosa para sinalizar a coleta na parte de picking costas, e também acende os LEDs de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente: o WCS irá informar o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking, permitindo que o operador colete de maneira eficiente e sem confusão.
O operador realiza a coleta de acordo com a indicação dos LEDs.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do PDV.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde para indicar que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** af3d771a68ed7b58

Após a integração do romaneio, o WCS identifica e quebra as tarefas, de forma que o que pode ser separado sem a necessidade de abrir a caixa seja direcionado ao processo de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo com a quantidade de caixas que serão separadas. Essa etapa permite ao operador decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do lado oposto da indução:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de forma que o operador inicie a coleta a partir do ponto mais longe da indução. Isso otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao ponto de indução de forma mais eficiente. Isso será feito atráves do cadastro de ruas que deve informar se seguira a ordenação de endereço de forma crescente ou decrescente.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo operacional.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** 1155695b299e47a0

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de volumes sistêmicos nas posições dos Picking Carts. Cada Picking Cart terá seu próprio Order Start, e a posição do Picking Cart será vinculada a uma caixa plástica específica.
Existem dois tipos de Order Start para o Picking Cart:
Controlado: Neste modelo, a tarefa de picking é realizada em uma área com controle de acesso. O sistema monitora o tipo de produto para definir a qual Order Start a tarefa pertence, garantindo que somente pessoas autorizadas possam iniciar a tarefa na área controlada.
Não Controlado: Neste modelo, o processo de picking ocorre em uma área comum, onde não é necessário permissão de acesso, permitindo que qualquer operador inicie a tarefa de picking sem restrições.
A distinção entre os tipos de Order Start permite direcionar o picking controlado para operadores específicos, garantindo maior controle e segurança nas operações.
Mapeamento da Posição de Picking Cart:
Vinculação Inicial da Posição de Picking Cart à Caixa Plástica:
Antes de alocar o volume sistêmico, é necessário realizar o mapeamento da posição de Picking Cart. Neste primeiro passo, a posição de Picking Cart será associada a uma caixa plástica, mas ainda não haverá vínculo com o volume sistêmico. O mapeamento é realizado através de um leitor de mão integrado ao PDV, onde o operador escaneia a caixa plástica e associa essa caixa a uma posição específica do Picking Cart. Após finalizar o mapeamento, o operador deve clicar no botão “FINALIZAR MAPEAMENTO”.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart de uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a disponibilidade de caixas plásticas.
Exibição da Lista no PDV:
Exibição das Tarefas no PDV:
Após o mapeamento da caixa plástica com a posição de Picking Cart, o PDV exibirá a lista de tarefas de separação que devem ser realizadas. A lista será organizada de acordo com a regra de prioridade ou FIFO (First In, First Out), conforme as configurações definidas no sistema.
Leitura e Alocação da Posição de Picking Cart ao Volume Sistêmico:
Leitura da Posição de Picking:
O operador deve realizar a leitura da posição de Picking cart no PDV, onde as informações sobre as tarefas de separação estarão disponíveis. Na tela do PDV, o operador deverá confirmar a alocação da posição de Picking Cart ao volume sistêmico que está sendo separado, clicando na opção correspondente.
Repetição do Processo:
Repetir para Outras Posições de Picking Cart:
O operador deve repetir o processo de leitura e alocação para todas as outras posições de Picking Cart que possuam caixas plásticas vinculadas. Ele não pode ir para a tela de coleta até que todas as posições que tenham caixas vinculadas sejam atribuídas a uma tarefa de separação. Caso contrário, ele só poderá avançar quando todas as tarefas de separação forem vinculadas às respectivas caixas plásticas ou até que as tarefas acabem.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 4df83616f0e50b73

Será definido um parâmetro de peso mínimo para liberação da separação de pedidos. Esse valor será utilizado para avaliar se o pedido pode seguir para o processo de separação, considerando a soma do peso dos itens e a disponibilidade de PTLs. A liberação ocorrerá apenas quando o pedido atingir ou ultrapassar esse peso mínimo. O parâmetro será configurado conforme as necessidades do cliente.
O operador deve acessar o sistema WCS através do desktop, autenticando-se com suas credenciais para iniciar o turno e garantir o registro correto de suas atividades.
NOTA: O usuário pode acessar somente um equipamento por vez, Caso no momento do login no WCS, já exista outro equipamento conectado com as mesmas credenciais, o WCS irá deslogar a conta da máquina antiga. É permitido somente um equipamento por vez para o usuário.
Após realizar o login, o operador deverá acessar a tela do Order Start, que concentra as operações de início das tarefas de separação, nessa tela ele escolhe o tipo de separação a ser realizada (Full Case ou Pallet/Sorter) e, em seguida, clica no botão imprimir. A impressão das etiquetas deve ser realizada antes de iniciar a separação, a impressão das etiquetas será gerada automaticamente na impressora previamente configurada para uso naquele Order Start.
Após realizar o login no sistema WCS, o operador deve acessar a tela do Order Start, responsável por iniciar as tarefas de separação. Nessa tela, o operador seleciona o tipo de separação a ser realizada (Full Case ou Pallet Sorter) e, em seguida, deve clicar no botão Imprimir para gerar as etiquetas correspondentes aos volumes.
A impressão é obrigatória para liberar qualquer processo de separação e ocorre automaticamente na impressora previamente configurada para aquele Order Start. As impressoras estarão alocadas em um ponto centralizado próximo ao setor de indução, facilitando o acesso de todos os operadores e otimizando o fluxo de trabalho.
Somente após a impressão das etiquetas o sistema libera as tarefas de separação para o operador. Nesse momento, as informações correspondentes são sincronizadas e disponibilizadas no coletor portátil, permitindo que o operador inicie as coletas com todas as instruções corretamente carregadas.
Controle de Reimpressão no Order Start
O acesso à reimpressão de etiquetas no Order Start será restrito a usuários com perfil específico (supervisores ou líderes). Operadores comuns não poderão realizar reimpressões diretamente.
A reimpressão, quando necessária, exigirá autorização de um desses usuários habilitados, garantindo maior controle do processo e evitando reimpressões indevidas.
O sistema manterá o registro completo em log, incluindo o usuário que solicitou, o usuário que autorizou a reimpressão, bem como data e hora do evento.
A lista de tarefas de separação disponível no Order Start será composta somente pelos itens onde será possível realizar a alocação no PTL do sorter de imediato, ou seja, somente as tarefas de separação em que os volumes possam ser alocados no PTL estarão disponíveis para impressão e execução.
Order Start para caixas Full Case: O sistema libera a separação unitária (caixa a caixa) nas posições de picking. As etiquetas correspondentes a essas caixas já serão previamente impressas, e o operador realiza a coleta e etiquetação caixa a caixa, seguindo a orientação fornecida pelo sistema, garantindo a rastreabilidade e organização dos volumes.
Order Start pallets fechados:  O método de separação será gerenciado pelo WCS e ativado quando, em uma única onda de separação, a quantidade solicitada de um mesmo produto, para múltiplos pedidos, atingir ou superar a quantidade equivalente a um pallet fechado.
Será impressa previamente uma etiqueta identificadora (master), que será um número sequencial gerenciado pelo WCS. Essa etiqueta será utilizada para referenciar a tarefa de separação (pega), e juntas a essa etiqueta serão impressas todas as etiquetas de volumes, baseadas na quantidade de caixas que o pallet contém. Como o WMS envia a quantidade de volumes por lastro e a quantidade de níveis, o WCS terá a informação de quantos volumes poderão ser separados no pallet de uma única vez.
Order Start para Pendências: Este tipo de Order Start será utilizado exclusivamente para tratar volumes com pendência de separação, como nos casos de short picking ou avarias registradas. O WCS, ao detectar essas ocorrências durante a operação, registra a pendência na tabela específica do WMS. Após validação e aprovação por parte do WMS, será liberado um novo Order Start com o tipo "Pendência".
Neste Order Start, o operador receberá a nova tarefa contendo as quantidades aprovadas para separação. As etiquetas poderão ser reimpressas pelo sistema, garantindo que apenas os volumes autorizados sejam coletados e processados.
A separação ocorre normalmente nas posições de picking, com a rastreabilidade mantida em todos os momentos. Esse processo garante que pendências não interfiram nas tarefas regulares de separação e possam ser tratadas com controle operacional adequado.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Processo Separação  
**Score:** — (semantico) | **ID:** a77fa2b23f7865a7

Os processos de separação sob responsabilidade do WCS são Pallet/Sorter e Full Case. Ambos os métodos de separação dependem das etapas iniciais do Order Start, especialmente da impressão obrigatória das etiquetas, que é o gatilho para que as tarefas de separação sejam liberadas no sistema e sincronizadas com os coletores, bem como a indução dos volumes no sorter e o agrupamento dos volumes nos PTLs.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Separação – Full Case  
**Score:** — (semantico) | **ID:** 0b37556d20b8df31

Este método de separação é gerenciado integralmente pelo WCS e é acionado quando o WMS envia as ordens de serviço (OS) contendo itens do tipo Full Case, ou seja, caixas fechadas. O WCS recebe as ordens de serviço do WMS, agrupa os pedidos por produto e gera as tarefas de separação, organizando as coletas caixa a caixa para otimizar a execução.
Após receber as ordens, o WCS realiza a validação da viabilidade da separação, considerando a roteirização dos pedidos e a matriz de fragilidade, garantindo que as separações sejam feitas de forma eficiente e sem comprometer a integridade dos produtos. Somente as posições dos produtos que se enquadram corretamente no processo de separação, de acordo com a fragilidade e ordenação estabelecidas, e quantidade mínima parametrizada serão liberadas.
Quebra de Pallet por Volume ou Peso no Full Case
Durante o processo de separação Full Case, caso o lote gerado pelo WCS ultrapasse os limites operacionais de volume ou peso previamente cadastrados, o sistema permitirá a quebra automática da tarefa de separação, contemplando as seguintes possibilidades:
Divisão da tarefa entre dois ou mais operadores: O sistema fragmentará o lote em subtarefas equilibradas, mantendo a rastreabilidade dos volumes e garantindo que cada operador realize a coleta de parte dos volumes de forma coordenada. Cada subtarefa manterá vinculação ao mesmo pedido e lote original, porém com controle individual de execução e finalização.
Entrega fracionada do pallet na área de Stage: Alternativamente, o operador poderá realizar a entrega parcial do pallet na área de Stage, conforme a capacidade física de transporte. A tela do coletor permitirá o registro de múltiplas movimentações para a mesma tarefa, e cada entrega parcial será registrada com endereço e hora, assegurando rastreabilidade e controle do fluxo.
A definição do comportamento será baseada nos parâmetros de volume máximo por tarefa e peso total por pallet, parametrizáveis no sistema conforme as diretrizes operacionais do Comercial Esperança.
Impressão Prévia das Etiquetas: A impressão é obrigatória e realizada antes do operador iniciar a separação. O operador deve sair da mesa de operações com a tira de etiquetas impressa, contendo a quantidade necessária conforme a rua e a quantidade de itens. O WCS imprime automaticamente essas etiquetas com base nos dados recebidos do WMS.
Com as etiquetas em mãos, o operador chega na posição, verifica a quantidade solicitada no coletor, realiza a leitura (bipagem) da posição de picking e lê o DUN do produto para confirmar os itens a serem separados. O operador realiza a separação conforme indicado, coletando os produtos caixa por caixa, seguindo na ordem indicada pelo sistema e em direção ao final da rua, no sentido da indução para o Sorter.
Cada volume separado é etiquetado individualmente e colocado em um pallet de separação. Após finalizar a separação e etiquetagem dos volumes, o operador confirma a conclusão da tarefa no coletor e libera o pallet para ser levado à área de Stage
Definição de Ordem de Separação de Prédios
Para otimizar o processo de separação, o sistema WCS permitirá a configuração da ordem de separação dos prédios de forma crescente ou decrescente. Esta configuração será parametrizável, permitindo que o cliente defina o comportamento operacional de acordo com as necessidades específicas de sua operação. O sistema garantirá que os volumes sejam alocados de forma eficiente e otimizada, com base na ordem configurada.
Fluxo Operacional
Recebimento das Ordens: O WMS envia ao WCS as ordens de serviço com os itens Full Case, incluindo informações detalhadas sobre os pedidos, quantidades e prioridades.
Agrupamento por Produto: O WCS agrupa as ordens por produto, facilitando a organização e otimização das tarefas de separação.
Geração das Tarefas: Com base no agrupamento, o WCS gera as tarefas para os operadores, indicando as caixas a serem coletadas, suas localizações e quantidades.
Execução pelo Operador:
O operador acessa o WCS através do coletor portátil.
Recebe a tarefa de separação com as instruções detalhadas.
Desloca-se até a posição indicada e realiza a coleta caixa a caixa, conforme as ordens de serviço.
Confirma a coleta no sistema, garantindo a rastreabilidade dos volumes.
Monitoramento da Demanda Remanescente:
Conforme as tarefas são finalizadas, o WCS monitora a demanda restante de cada produto.
Se a demanda remanescente for menor que um pallet completo, o WCS mantém o método Full Case para concluir a separação eficiente dessas quantidades menores.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** d5b8017480712a08

Após o login, o operador acessa a tela de Order Start, onde são centralizadas as operações de início da separação.
Fluxo:
Seleção de Tarefa
O operador seleciona o tipo de separação: Full Case, Pallet Sorter ou Pendências.
Define a rua de trabalho (quando aplicável).
Peso Mínimo para Liberação
A liberação das tarefas respeita o parâmetro de peso mínimo configurado, garantindo que apenas volumes que atinjam ou superem esse limite sejam liberados, considerando também a disponibilidade de PTLs.
Impressão de Etiquetas
As impressoras estão alocadas em ponto centralizado, próximo ao setor de indução, otimizando o fluxo de trabalho.
A impressão é obrigatória para liberação das tarefas de separação.
O processo ocorre automaticamente em uma impressora previamente configurada para aquele Order Start.
Controle de Reimpressão
A reimpressão de etiquetas é restrita a supervisores ou líderes e registrada em log, com dados do solicitante, autorizador, data e hora, garantindo rastreabilidade e evitando impressões indevidas.
Lista de Tarefas
A lista exibida no Order Start é composta apenas por volumes que podem ser imediatamente alocados no PTL.
Order Start de Pendências
Pendências são tratadas em Order Start específico, liberado somente após aprovação do WMS.
As etiquetas de pendência são geradas apenas para volumes autorizados, mantendo rastreabilidade.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
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
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Cancelamento de remessa  
**Score:** — (nome-topico) | **ID:** f758eabc42e72b9f

Para atender as necessidades operacionais é possível realizar o cancelamento de remessa no WCS através da tela missão.
Nesse processo de cancelamento de remessa só pode ser realizado nas remessas (Missões) com status DISPONIVEL, os demais status não permitiram o cancelamento da remessa. Informando que o status da remessa é invalido para essa operação
O usuário com perfil de autorização pode selecionar uma ou mais remessas com status DISPONIVEL e selecionar a opção de cancelamento de remessa, o WCS irá exibir uma caixa de confirmação solicitando usuário e senha para confirmar a operação de cancelamento.
Após a validação do usuário o cancelamento interno é realizado e os status das informações relacionada a remessa são atualizados [Status possíveis para cada informação no WCS] o WCS realiza o envio da integração de cancelamento de remessa ao SAP.
Estrutura do IDOC de Cancelamento de Remessa
Velox  SAP
Utilização dos dados (Velox):
NOTA: As remessas canceladas podem ser integradas ao WCS novamente e quando esse evento ocorrer o WCS irá criar uma missão nova, a anterior não será substituída.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Geração da Lista de Coleta  
**Score:** — (semantico) | **ID:** ee8513d99f438683

A lista de coleta é gerada com base na onda, sendo composta pela consolidação de todos os itens necessários para seu atendimento. O WCS organiza essa lista aplicando as regras de seleção de lote e critérios de prioridade definidos.
A Criação das tarefas de coleta também ocorre por onda, e a sequência entre ondas segue a ordem de criação, de forma que ondas mais antigas são as primeiras a serem processadas (FIFO). Esse comportamento não representa uma priorização operacional, mas sim uma ordenação cronológica de processamento.
Para produtos do tipo PVAR, o WCS não deve aplicar qualquer tipo de randomização, devendo respeitar integralmente a sequência definida pelas regras de coleta
Fluxo:
No start da onda, o WCS consolida toda a demanda da onda, considerando SKU, shelf de, shelf até e quantidade.
O WCS identifica as posições de picking onde os itens estão armazenados, com base no estoque disponível e nas regras de seleção.
Com base no mapa de postos, o WCS distribui as coletas para cada posto, respeitando a estrutura operacional definida.
Dentro de cada posto, o WCS ordena as coletas conforme regras de validação de lote.
As coletas são enviadas ao operador do posto via Picking by Light (LED).

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** e72161b074c481f4

Será 1 (um) Order Start no início da linha de fracionados, sendo o ponto de partida para a indução das caixas no sistema.
Para iniciar o processo, o WCS deverá receber via integração todas as informações dos pedidos a serem processados, incluindo ondas, volumes, tipos de caixas e informações de cubagem. O sistema permite que até 16 clientes sejam operados simultaneamente, organizando os pedidos em fila conforme a ordem de chegada das integrações.
Observação: Deverão ser integrados apenas os pedidos de clientes ativos na saída do sorter. Pedidos fora desse critério serão direcionados para rejeito.
A operação no sorter deve ser feita por ondas, sendo necessário finalizar toda a onda de clientes para iniciar a próxima.
Não existe regra de prioridade automatizada para os pedidos recebidos. Caso seja necessário priorizar um pedido específico, o operador deverá fazê-lo manualmente na tela do Order Start.
O operador terá disponível fisicamente um buffer de caixas montadas próximo ao Order Start. O WCS disponibiliza ao operador a lista de caixas necessárias, o operador realiza a impressão das etiquetas, fixa cada uma na caixa correspondente e induz as caixas na linha de separação. A caixa informada pelo WCS será a embalagem final utilizada em todos os processos da esteira até a entrega ao cliente, não havendo necessidade de reembalagem no setor de packing.

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
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
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
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
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
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
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Cierre del palé  
**Score:** — (nome-topico) | **ID:** afdb09df29ed963b

El cierre del palé se realizará dentro de los procesos de Invent y podrá realizarse de 4 formas diferentes:
Cubicación del palé
Peso del palé
A través de la pantalla de cierre del palé (forzado)
Directamente por el operador en las rampas (forzado): leyendo el código de la posición para iniciar el proceso de cierre y, a continuación, leyendo el maestro.
En todos los procesos, tras la finalización del palé, enviamos la información descrita en el apartado «5.5 Palé montado» al WMS para que realice los trámites necesarios.
Cuando se solicite el cierre del palé en las salidas de las rampas, el operador deberá leer un código maestro (olpnPtlSaida) que se vinculará a los volúmenes que se han asignado a este palé.
La impresión de este código maestro (olpnPtlSaida) es responsabilidad del WMS.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Fluxo Operacional  
**Score:** — (semantico) | **ID:** 738dcfecee3c3212

O Order Start de Fracionado(PBL e Picking Cart) e o Order Start de Full Case são liberados simultaneamente pelo WCS. O operador pode iniciar tarefas em ambas as frentes em paralelo, sem necessidade de aguardar o término de uma para começar a outra. Cada modalidade segue seu próprio fluxo, descrito nas seções a seguir, e a consolidação entre Fracionado e Full Case da mesma remessa ocorre no fim do processo de coleta Full Case.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Order Start Fracionado  
**Score:** — (semantico) | **ID:** 917a49d8bc133a68

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos previstos, incluindo os dados de cubagem e quantidade de cada item. 	O WCS identifica os pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In, First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados, a ordenação inicial será agrupada por Remessa. Com base nas informações recebidas, o WCS realiza o cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada missão (pedido). O sistema calcula quantos volumes serão necessários para cada missão.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start, onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada missão com base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o processo de separação do pedido.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Order Start – Picking Cart  
**Score:** — (semantico) | **ID:** bac6302f6eaaf146

O processo de Order Start do Picking Cart segue a mesma lógica já em produção no projeto BETA SP para o Picking by Light: o operador mapeia as posições do carrinho antes de iniciar a separação, garantindo o vínculo entre cada caixa e seu respectivo slot físico. Como regra crítica, uma mesma caixa/volume nunca conterá itens de mais de uma remessa — o WCS é responsável por garantir essa segregação durante a alocação dos volumes no carrinho.
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart. Ao acessar a tela, o operador visualizará a lista de tarefas disponíveis para início, organizadas conforme a prioridade definida na integração com o sistema Velox. Caso necessário, será possível realizar o ajuste manual da prioridade diretamente no WCS.
Para dar início ao processo de Order Start, o operador deverá informar a quantidade de etiquetas a serem impressas, sendo o valor padrão o máximo suportado pelo Picking Cart. Após a confirmação, o sistema realizará a impressão das etiquetas de acordo com a prioridade definida, respeitando o limite de capacidade do Picking Cart.
Após a impressão das etiquetas, o processo seguirá para a etapa de mapeamento das posições do Picking Cart, onde cada etiqueta será associada a uma posição física do carrinho.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 2bb4b318c8b29088

El proceso de inicio de pedido se realizará de forma independiente para cada estación. Cada estación de inicio de pedido contará con un PDV y una impresora proporcionados por el cliente, así como un escáner proporcionado por Invent, además de su propia pantalla exclusiva de inicio de pedido, que estará separada por estación.
Para iniciar el proceso, el sistema WCS debe recibir toda la información del pedido para la operación mediante la integración, tal como se describe en el punto Integración de la misión. El operario deberá indicar en qué estación de trabajo trabajará.
A través de esta pantalla, el operario deberá seleccionar el número de etiquetas que desea imprimir para el pedido. Esta selección será obligatoria para iniciar el proceso. Las etiquetas serán generadas por WCS y corresponderán a los volúmenes de picking del pedido, garantizando la identificación individual de cada volumen.
Tras la impresión, el operario deberá retirar las etiquetas de la estación para comenzar el picking. La liberación de los pedidos debe respetar el orden FIFO (primero en entrar, primero en salir); WCS debe generar un volumen por estación, incluso si los artículos del pedido caben en una sola caja, de modo que una caja nunca pase por dos estaciones diferentes.
En la estación de preparación de pedidos, se leerá la etiqueta y el sistema WCS reconocerá el artículo, continuando el flujo operativo de acuerdo con las reglas definidas para la etapa de preparación.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Cancelación del pedido  
**Score:** — (nome-topico) | **ID:** f8eab95a8a046b4d

WCS debería proporcionar una pantalla para cancelar los pedidos enviados por el WMS. Al cancelar un pedido, se producen las siguientes situaciones:
Cancelación antes del inicio del pedido: Si el pedido se cancela antes de que comience en Início del pedido, se eliminará de la cola de pedidos pendientes.
Cancelación después del inicio del pedido: Si el pedido se cancela después del inicio del pedido, se interrumpirá la recogida. Cuando el operador escanee la etiqueta, los LED se iluminarán en rojo, lo que indica que no hay ninguna recogida vinculada a ese pedido.
Permiso de cancelación: La cancelación de pedidos en WCS requiere cierta supervisión y se requiere una contraseña para la autorización.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 1452fe4ec86f3d0d

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executará as rotinas de Order Start, Picking e Conferência, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Cancelamento de Pedido  
**Score:** — (nome-topico) | **ID:** 4d62d2807f679f15

WMS ↔ WCS (WMCATO)
O WMS pode enviar uma ordem de cancelamento de um pedido ao WCS, que por sua vez bloqueia ou remove o pedido da operação em andamento. A ação exata dependerá do status do pedido no momento do cancelamento (se já foi separado, se está em separação ou se ainda não foi iniciado).
E1LTCAH Cancellation/cancellation request transfer order IDoc header
E1LTCAI Cancellation/cancellation request transfer order IDoc item

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 9a6875d5dc8eae6c

O processo de Order Start será realizado por posto separadamente. Cada posto de Order Start contará com PDV e impressora fornecida pelo cliente além de um scanner fornecido pela Invent, além de possuir sua própria tela exclusiva de Order Start que será segregada por postos.
Para iniciar o processo, o sistema WCS deve receber todas as informações do pedido para a operação por meio da integração, conforme descrito na seção Integração da Missão. O operador deve indicar em qual estação de trabalho estará operando.
Por meio dessa tela, o operador deverá selecionar a quantidade de etiquetas que deseja imprimir para o pedido. Essa seleção será obrigatória para o início do processo. As etiquetas serão geradas pelo WCS e corresponderão aos volumes de separação do pedido, garantindo a identificação individual de cada volume.
Após a impressão, as etiquetas deverão ser retiradas pelo operador do posto para início da coleta. A liberação dos pedidos deverá respeitar a ordem FIFO (First In, First Out), o WCS deverá gerar um volume por posto mesmo que os itens do pedido caibam em uma única caixa, dessa forma uma caixa nunca passará em dois postos diferentes.
No posto de picking, a etiqueta será lida e o volume será reconhecido pelo sistema WCS, dando continuidade ao fluxo operacional conforme as regras definidas para a etapa de picking.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Separação no Posto  
**Score:** — (semantico) | **ID:** dd525d82a0364f08

O processo de picking será realizado utilizando tecnologia Pick-to-Light (PTL). Para iniciar a coleta, o operador deverá realizar a leitura da etiqueta do volume impressa na etapa de Order Start. A partir dessa leitura, o WCS acionará automaticamente os LEDs correspondentes aos endereços de coleta, exibindo a quantidade de itens a ser coletada em cada posição.
Os volumes serão estruturados de forma a evitar que exista itens a serem coletados em mais de um posto. Todo o conteúdo de um volume deverá ser separado integralmente dentro de um único posto de picking, garantindo a segregação física e sistêmica do processo. Os postos de separação serão fisicamente contínuos e posicionados lado a lado. Para evitar confusão operacional, cada posto será identificado por cores alternadas exemplo, sendo o Posto 1 na cor azul, o Posto 2 na cor laranja, o Posto 3 novamente na cor azul, e assim sucessivamente, garantindo diferenciação visual clara entre os postos.
Os LEDs da posição acenderão, indicando as coletas a serem realizadas nessa face. O operador deverá coletar o item conforme indicado no display do LED e confirmar a coleta pressionando o botão do próprio dispositivo. Esse procedimento deverá ser repetido até que todos os LEDs sejam atendidos.
Após a coleta de todos os itens do volume, os LEDs acenderão na cor verde, indicando o encerramento da atividade de picking daquele volume. Com isso, o operador estará apto para induzir a caixa novamente aos roletes livres e a realizar a leitura da próxima etiqueta de volume e repetir o processo de coleta.
Cada posto de separação terá:
1 (um) leitor de código de barras;
1 (um) display de 3 (três) dígitos por posição/produto;
Imagem ilustrativa do botão de 3 (três) dígitos:
Cada posição/produto será equipada com 1 botão led com display de 3 dígitos, onde o botão acende para indicar a posição de picking e o display informa a quantidade.
Conforme imagem ilustrativa abaixo:
Operador ao verificar que existem itens a serem separados no posto, realiza a separação dos itens conforme Leds acesos e quantidades.
Ao separar um item de uma posição, operador deve apertar o botão led para que ele se apague e assim confirmar que realizou a separação do item, esse processo deve se repetir até que todos os itens com leds acesos sejam apagados e seus produtos separados.
Ao finalizar a separação, os leds acenderão na cor verde informando a finalização do picking naquele posto e a caixa deverá seguir para a área de conferência.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 72057a88887c91cd

O processo de Order Start é o ponto de partida físico da automação. É nesta etapa que o WCS transforma o planejamento lógico (Onda de Pedidos) em Volumes Físicos rastreáveis, garantindo que cada caixa saiba exatamente por quais zonas de picking deve passar.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Corte por Falta de Saldo no Order Start  
**Score:** — (semantico) | **ID:** 1d2189f0400be8cd

Quando a demanda de uma onda supera o saldo disponível nas posições de picking e a reposição não é viável ou desejada, o WCS Velox permite o corte do SKU ainda no Order Start, antes de o volume entrar na linha. O corte é realizado por uma tela administrativa, que lista os SKUs bloqueados por falta de saldo e permite o tratamento em lote.
Natureza do corte (lógico). O corte é uma remoção de demanda, e não uma movimentação de estoque:
Não altera o saldo das posições de picking — a posição permanece com o saldo real (insuficiente ou zerado).
Não dispara nem cancela as regras de reabastecimento por mínimo de canal, que seguem independentes.
Encerra a demanda daquele SKU naquela missão, liberando a missão para prosseguir com os itens atendidos.
Aprovação. Assim como na separação e na conferência, o corte por falta de saldo no Order Start exige a autenticação de um supervisor (senha ou crachá). Sem essa aprovação, o corte não é efetivado.
Integração com o WMS. O WCS notifica o Spark pela mesma mensagem de corte/divergência já utilizada no shortpicking — informando SKU, pedido e quantidade efetivamente atendida —, registrando o motivo "Corte por falta de saldo no Order Start". O Spark decide o faturamento parcial ou a geração de nova onda para o saldo restante. A diferença em relação ao shortpicking é apenas o momento (no Order Start, antes da indução) e o motivo do corte.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** 8b39a475e924b2d7

O processo de separação é realizado com base no conceito de picking consolidado, onde o operador coleta itens de múltiplos pedidos simultaneamente e os leva ao Put to Wall (PTW) para consolidação por pedido.
Local:
O Picking Cart ficará localizado nos corredores do museu (área de baixo giro, fora da automação, a nível chão).
Fluxo no PDV:
- Exibição das Tarefas no PDV:
O PDV exibirá a lista de tarefas de separação consolidadas, organizadas por prioridade ou FIFO (First In, First Out), conforme configurações do sistema. O operador coleta itens de múltiplos pedidos em uma única rota pelo museu, depositando-os no picking cart.
- Leitura da Posição de Picking:
O operador realiza a leitura do código do endereço e do item no PDV. O WCS informa a quantidade a ser coletada. Ao confirmar a quantidade separada, a tarefa é atualizada na lista.
Caso o operador não consiga coletar toda a quantidade de um endereço, poderá acionar o botão "Finalizar Coleta" para registrar corte e prosseguir.
Após concluir a rota de coleta, o operador se dirige ao Put to Wall (PTW) para consolidação dos itens por pedido.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** 1d6534f318eeeab1

Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
O operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade diretamente no WCS.
Impressão das Etiquetas:
O operador seleciona quantos volumes irá iniciar, limitado à quantidade de posições disponíveis no Picking Cart.
O WCS imprime as etiquetas (ZPL recebido do WMS Spark) na impressora automática vinculada ao posto (Zebra ZT230).
O operador aplica as etiquetas nas caixas finais correspondentes.
Mapeamento da Posição de Picking Cart:
Após a impressão e aplicação das etiquetas, o operador realiza o mapeamento da posição do Picking Cart à caixa final do pedido.
O operador realiza a leitura da etiqueta da caixa final e associa essa caixa a uma posição específica do Picking Cart através do leitor de mão integrado ao PDV.
Após finalizar o mapeamento, o operador deve clicar no botão "FINALIZAR MAPEAMENTO".
Não será necessário vincular todas as posições de uma vez, permitindo mapeamento parcial conforme a disponibilidade de caixas.
Alocação da Posição ao Volume Sistêmico:
Após o mapeamento, o PDV exibirá a lista de tarefas de separação organizada por prioridade ou FIFO.
O operador realiza a leitura da posição do Picking Cart no PDV e confirma a alocação da posição ao volume sistêmico correspondente.
O operador deve repetir o processo para todas as posições que possuam caixas vinculadas. Ele não poderá avançar para a tela de coleta até que todas as posições mapeadas sejam atribuídas a uma tarefa de separação.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** a34decdda4ecffb7

Os volumes full case são compostos por caixas fechadas (fracionadas ou não), separadas diretamente pelo WMS, e não passam pelo processo de separação nem pelo Order Start do WCS.
Para que o desvio seja realizado corretamente no sorter, os volumes full case devem estar devidamente integrados no WCS via Integração de Remessa / Pedido. A integração de Picking Confirm não se aplica a esses volumes.
A conferência do Full Case ocorre pela balança dinâmica pré-portal do sorter (crosscheck por peso). Full Case não passa pela conferência de fracionado.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Layouts de Impressão  
**Score:** — (semantico) | **ID:** 5966d9ec2ef03c29

O projeto utilizará uma etiqueta única para todos os tipos de volume (fracionado, full case e exceção). O campo Nota Fiscal (NF) não constará na etiqueta pois ela nasce no Order Start. O identificador único do volume na automação será o DataMatrix.
Responsabilidade de impressão: WMS Spark é responsável pela montagem e envio do ZPL via integração de remessa. O WCS recebe o ZPL e comanda a impressão nas impressoras físicas vinculadas a cada posto (Zebra ZT230). WMS também será responsável pela impressão da Etiqueta de Reabastecimento.
Teremos duas variações do resultado que vem nesse datamatrix:
O Fullcase vem com 5 informações, sempre separadas por ponto e vírgula e em formato de texto (mesmo sendo numérico) e a informação que precisamos é a quarta, que segue o formato:
Formato: “coditem;fator;endcoleta;COD;id”.
Exemplo: “030770;1;CA09-19-01-02;63759024;6521775”.
No Fracionado a única informação que chega no Datamatrix é a que precisamos.
Obs: Foi informado que essa que esse código do item pode variar de tamanho, então devemos considerar as regras acima para identificação.
Exemplo da Etiqueta:

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Order Start Fracionado  
**Score:** — (semantico) | **ID:** 9dae7f2a6b8dcc92

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos previstos, incluindo os dados de cubagem e quantidade de cada item. O WCS identifica os pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In, First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados. Com base nas informações recebidas, o WCS realiza o cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada tarefa (pedido). O sistema calcula quantos volumes serão necessários para cada tarefa.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start, onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada tarefa com base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o processo de separação do pedido.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 17693627197485e4

Após a integração da onda de pedidos, o WCS identifica as tarefas de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo com a quantidade de caixas que serão separadas. Essa etapa permite ao operador decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do Final da Rua:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de forma que o operador inicie a coleta a partir do final da rua, de forma decrescente. Isso otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao ponto de indução de forma mais eficiente.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo operacional

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - GEMINI.docx`  
**Heading:** Pesagem sem Order Start - Pendente  
**Score:** — (semantico) | **ID:** 6702f31ea0c2966a

Problema: Atualmente, o processo de pesagem (cubômetro) é acionado (trigger) pela impressão da etiqueta no Order Start. Existem cenários operacionais onde a pesagem é necessária sem que uma etiqueta seja impressa naquele momento.
Complexidade:
A regra de negócio atual do WCS é estritamente dependente do Order Start.
É necessário criar um gatilho alternativo para iniciar o processo de pesagem e obter os dados do cubômetro.
Ações:
Ação IT (SAP): Mapear e detalhar todos os cenários onde o trigger de pesagem será diferente da impressão da etiqueta.
[Ação > Falar com Dev/Cliente] Ação INVENT: Com base nos cenários enviados pelo time de TI, analisar a complexidade e estimar o esforço para o desenvolvimento de um gatilho alternativo no WCS.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - REV 0.docx`  
**Heading:** Pesagem sem Order Start – Pendente de Infos  
**Score:** — (semantico) | **ID:** 10361b7f0fefb75f

O processo de pesagem é acionado (trigger) pela impressão da etiqueta no Order Start. Existem cenários operacionais onde a pesagem é necessária sem que uma etiqueta seja impressa naquele momento.
Complexidade:
A regra de negócio atual do WCS é estritamente dependente do Order Start.
É necessário criar um gatilho alternativo para iniciar o processo de pesagem e obter os dados do cubômetro.
Ações:
Ação IT (SAP): Mapear e detalhar OS CENÁRIOS onde o trigger de pesagem será diferente da impressão da etiqueta.
Ação INVENT: Com base nos cenários enviados pelo time de TI, analisar a complexidade e estimar o esforço para o desenvolvimento de um gatilho alternativo no WCS.
PRECISA DA ATIVAÇÃO DO CUBOMETRO

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivos Projeto Andreani - Multiplos Aditivos.docx`  
**Heading:** Tela Order Start Multiline  
**Score:** — (semantico) | **ID:** 11b542b17c0dd317

Foi solicitado um aprimoramento na tela de Order Start Multiline. Abaixo do OS linha, o cliente deseja visualizar também a quantidade de caixas que devem ser induzidas na fila. Essa informação adicional tem como objetivo melhorar o controle operacional, facilitar a tomada de decisão e garantir que o operador sempre saiba o volume exato a ser direcionado para o processo.
Detalhamento técnico:
Exibição da quantidade: A interface será ajustada para apresentar, logo abaixo da identificação de OS linha, o número total de caixas previstas para indução.
Suporte ao planejamento: Com essa informação visível, o operador consegue ajustar ritmo, prever gargalos e manter o fluxo contínuo da linha.
Apoio à rastreabilidade: A exibição da quantidade planejada reforça o acompanhamento do processo e reduz erros de indução.
Tela Oder Start Multiline atual Velox:

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Configuração de Tara de Caixas no Order Start  
**Score:** — (semantico) | **ID:** 3e2a5def99f15b97

Será desenvolvida uma nova funcionalidade que permite ao operador configurar, por Order Start, quais tipos de caixa estarão disponíveis para a expedição. Com base nessa configuração, o WCS realizará a cubagem dos volumes considerando múltiplos tipos de caixa, priorizando a caixa padrão CP e utilizando caixas de menor dimensão para aproveitar volumes residuais.
A solução contempla dois grupos de caixas, com tratamentos de tara distintos:
Caixas plásticas (CP padrão e nova CP de menor dimensão (CPP)): tara fixa cadastrada por tipo de caixa na tela de configuração (itens 4.1 a 4.4);
Caixas de papelão (tamanhos P, M e G): tara individual por unidade, obtida por pesagem no cubometro no momento da geração da etiqueta (item 4.5), uma vez que o peso varia entre caixas.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Tela de Configuração de Caixas por Order Start  
**Score:** — (semantico) | **ID:** e8a42c428906d22b

Será criada uma tela na qual o operador acessa e seleciona o Order Start desejado e define o conjunto de caixas disponíveis para ele. A tela contempla as seguintes funções:
Seleção do Order Start: o operador acessa a tela e seleciona o Order Start sobre o qual deseja atuar.
Configuração das novas caixas: ao habilitar uma nova caixa no sistema, o operador informa seus dados e as dimensões de cada tipo de caixa, necessários para o cálculo de cubagem. Será adicionada ao cadastro uma nova caixa plástica CP de dimensão inferior à CP padrão.
Habilitação de caixas via flag: o operador seleciona, por meio de flags, quais tipos de caixa estarão disponíveis para aquele Order Start. A caixa CP permanece como caixa padrão e prioritária (pode ser desabilitada caso necessário e a caixa de maior dimensão passa a ser a prioritária).
Tara das caixas plásticas: o operador deverá selecionar o tipo de caixa plástica previamente cadastrado no sistema, contendo suas respectivas dimensões, e informar o peso (tara) da caixa selecionada. Esse valor será utilizado durante a passagem da caixa pela balança (cliente), permitindo que o sistema considere a tara informada para o cálculo do peso líquido do produto.
Obs.: como a cubagem depende do volume disponível em cada caixa, a configuração precisa contemplar as dimensões (C × L × A) além do peso. Caso essas dimensões já existam em cadastro prévio, a tela apenas exibirá os dados e habilitará a seleção via flag, sendo sempre possível alterar o peso da caixa após flagar um tipo de caixa.
Obs. 2: a tara fixa descrita neste item aplica-se exclusivamente às caixas plásticas. Para as caixas de papelão, a tara é individual e obtida conforme o fluxo descrito no item 4.5.
Tela exemplo:

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Pré-requisito para Execução da Onda  
**Score:** — (semantico) | **ID:** 338f3ad275548eb4

A seleção das caixas disponíveis deverá ser realizada pelo operador/cliente antes de rodar a onda. Essa definição prévia é obrigatória para que o WCS execute o cálculo de cubagem de todos os volumes integrados ao Order Start com o conjunto correto de caixas habilitadas.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Leitura da Etiqueta no Order Start  
**Score:** — (semantico) | **ID:** 8a80ad32bd03224c

No Order Start, ao bipar a etiqueta da caixa de papelão, o sistema lê a tara contida na própria etiqueta (ex.: P-950 → tara de 950 g) e a vincula ao volume em processamento, permitindo o cálculo correto do peso líquido dos produtos. Como a tara está impressa na própria etiqueta, não há consulta a registro prévio — a leitura é suficiente para obter o valor.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Sequência de liberação de caixas no Order Start  
**Score:** — (semantico) | **ID:** c5e342a63ed4ca0d

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
**Heading:** Coluna de % Ocupação nas Telas de Order Start  
**Score:** — (semantico) | **ID:** df7e16fb640ec42e

Em todas as telas de Order Start Fracionado do WCS será adicionada uma nova coluna exibindo o percentual de ocupação das caixas nos volumes disponíveis para início de separação.
O objetivo desta funcionalidade é fornecer ao operador e à liderança operacional uma visão imediata de quanto da capacidade da caixa plástica está sendo aproveitada para cada volume (tarefa), auxiliando no planejamento e balanceamento da linha de separação.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Configuração de Tara de Caixas no Order Start  
**Score:** — (semantico) | **ID:** b035ea94ee3b5eb3

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
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Crosscheck, Alocação Automatica, Pedidos, Dashboard e Ajustes Impressão.docx`  
**Heading:** Dashboard de Gargalos por Posto de Trabalho  
**Score:** — (semantico) | **ID:** ef26f5655b9bb79d

Disponibilizar à gestão visibilidade dos gargalos nos postos de trabalho, permitindo a realocação ágil de recursos para finalizar cada onda de separação completamente. A finalidade é reduzir o tempo em que pallets permanecem alocados na doca aguardando por volumes presos em filas de postos de trabalho engargalados, o que hoje atrasa o fechamento dos pedidos.
Componentes do Dashboard
KPIs operacionais: ondas ativas, pallets na doca, postos em gargalo e volumes em fila.
Lista de postos de trabalho com indicador de capacidade utilizada, fila de volumes, operador e status (Gargalo / Atenção / Normal / Ocioso).
Acompanhamento das ondas de separação, com percentual de conclusão e identificação do posto que está bloqueando a onda.
Pallets aguardando na doca, com tempo de espera destacado quando (> 2h).
Exemplo Dashboard:
Postos de Trabalho
Capacidade Configurável por Posto: A capacidade de cada posto não é fixa, ela é definida pela operação do cliente através de cadastro parametrizável. Isso garante que o dashboard reflita a realidade do galpão, respeitando diferenças entre tipos de posto, perfis de operadores e variações de demanda.
Remessas hora a hora
Pallets na Doca
Exemplo tela Dashboard Pallets na Doca:

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Picking Cart.docx`  
**Heading:** Order Start – Picking Cart  
**Score:** — (semantico) | **ID:** 78c5a2c585ee71ca

O processo de Order Start do Picking Cart segue a mesma lógica já em produção no projeto BETA SP para o Picking by Light: o operador mapeia as posições do carrinho antes de iniciar a separação, garantindo o vínculo entre cada caixa e seu respectivo slot físico. Como regra crítica, uma mesma caixa/volume nunca conterá itens de mais de uma remessa — o WCS é responsável por garantir essa segregação durante a alocação dos volumes no carrinho.
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart. Ao acessar a tela, o operador visualizará a lista de tarefas disponíveis para início, organizadas conforme a prioridade definida na integração com o sistema Velox. Caso necessário, será possível realizar o ajuste manual da prioridade diretamente no WCS.
Para dar início ao processo de Order Start, o operador deverá informar a quantidade de etiquetas a serem impressas, sendo o valor padrão o máximo suportado pelo Picking Cart. Após a confirmação, o sistema realizará a impressão das etiquetas de acordo com a prioridade definida, respeitando o limite de capacidade do Picking Cart.
Após a impressão das etiquetas, o processo seguirá para a etapa de mapeamento das posições do Picking Cart, onde cada etiqueta será associada a uma posição física do carrinho.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Contexto / Situação atual  
**Score:** — (semantico) | **ID:** 98f2978d0789b9f0

Hoje a separação Fullcase está distribuída em treze Order Start individuais (Fullcase 01 a 13), além do Order Start Fracionado, conforme tela atual de regras.
Como não há recurso dedicado para cada Order Start, os operadores precisam acessar um a um, o que gera atraso na separação completa dos pedidos, agravado pelo fato de os pedidos possuírem volumes em todas as ruas.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Justificativa  
**Score:** — (semantico) | **ID:** 9d338b443d90965d

A fragmentação atual obriga o recurso a transitar entre múltiplos Order Start para concluir um mesmo pedido, aumentando o tempo total de fechamento do pallet. A consolidação reduz esse trânsito entre filas de tarefas e tende a melhorar de forma relevante o tempo de fechamento dos pedidos/pallets.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Consolidação dos Order Start Fullcase (Normal)  
**Score:** — (semantico) | **ID:** 8bf663cc61303dd2

Unificar os Order Start Fullcase 07, 08, 09, 10, 11, 12 e 13 em um único Order Start (Fullcase BG) sem regra de transportadora (mantendo o comportamento já existente hoje para esse tipo de OS). Os volumes serão direcionados a esteira e divididos pelo sorter.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Consolidação dos Order Start OS Exceção  
**Score:** — (semantico) | **ID:** dbf2203582908499

Os Order Start de Exceção 07, 08, 09, 10, 11, 12 e 13 deverão ser consolidados em um único Order Start denominado OS FC Exceção BG.
A regra de agrupamento atualmente aplicada deverá ser mantida, realizando a consolidação das tarefas por rampa de destino. Para isso, o Velox deverá respeitar a ordem de processamento definida pela fila de integração e garantir que uma mesma tarefa aceita contenha volumes destinados exclusivamente à mesma rampa.
Não será permitido o agrupamento, em uma única tarefa aceita, de volumes com rampas de destino distintas.
Esta alteração tem como objetivo reduzir o tempo de separação dos pedidos completos, simplificando o fluxo operacional e aumentando a eficiência na execução das atividades de picking.
Resumo do antes x depois

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Premissas e considerações  
**Score:** — (semantico) | **ID:** 9b30d0709dca72a2

A melhoria depende da entrada em produção da alocação em pallets por pedido no Velox.
Fullcase 01 a 06, bem como o Order Start Fracionado, não fazem parte deste escopo e seguem com a configuração atual.
Os Order Start consolidados devem preservar a rastreabilidade e o comportamento funcional já validados (sem regra de transportadora no Fullcase; agrupamento por rampa no Exceção).

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Regras de Ordenação e Exibição  
**Score:** — (semantico) | **ID:** ec9ba50570bd822f

As matrizes pendentes permanecerão no topo da lista, respeitando a ordenação definida pelo WCS.
Ao ser finalizada, a matriz:
Permanecerá visível na lista com status verde por um tempo parametrizável.
Após o tempo configurado, será automaticamente deslocada para o final da lista, mantendo seu histórico visual.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Intercalação de Etiquetas por Rampa de Destino – Order Start Full Case  
**Score:** — (semantico) | **ID:** 775dd2409a7295a8

O processo atual de Order Start Full Case gera a fila de impressão de etiquetas agrupada por missão, o que resulta na impressão de grandes lotes de volumes consecutivos destinados à mesma rampa de saída do sorter. Esse comportamento causa acumulo excessivo de volumes em uma única rampa, gerando gargalos operacionais enquanto as demais rampas permanecem ociosas.
Para solucionar esse problema, o WCS deverá implementar um algoritmo de intercalação Round-Robin por rampa de destino na geração da fila de impressão, distribuindo as etiquetas de forma alternada entre as missões com base no mapa de sorter ativo, garantindo que os volumes cheguem de forma balanceada às rampas de expedição.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Lógica de Intercalação Round-Robin  
**Score:** — (semantico) | **ID:** 24b17cdca23fca18

Ao iniciar o processo de Order Start Full Case, o WCS deverá avaliar todas as missões disponíveis na rua selecionada e gerar a fila de impressão intercalando as etiquetas uma para cada missão/rampa de destino, considerando o mapa de sorter ativo. A proporção de intercalação deve ser de 1 para 1 (uma etiqueta por rampa a cada ciclo).
O algoritmo deverá seguir as seguintes regras:
Consulta de Missões: O WCS consulta todas as missões integradas e pendentes para a rua selecionada pelo operador.
Identificação das Rampas de Destino: Com base no mapa de sorter ativo, o WCS identifica a rampa de destino de cada missão e agrupa os volumes por rampa.
Geração da Fila Intercalada: O WCS percorre ciclicamente as rampas com volumes pendentes, imprimindo 1 etiqueta por rampa a cada rodada.
Eliminação de Rampas Esgotadas: Quando todos os volumes de uma rampa forem impressos, a rampa é removida do ciclo e o sistema continua intercalando apenas entre as rampas que ainda possuem volumes pendentes.
Finalização: O processo se encerra quando todas as missões/rampas tiverem seus volumes totalmente impressos.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Regras de Order Start  
**Score:** — (semantico) | **ID:** 1a9e028edd878d06

Validação de Continuidade: O sistema deve validar no momento do cadastro se existem "lacunas" entre os ranges. O Peso Final de uma faixa deve ser igual ao Peso Inicial da faixa seguinte.
Regra de Consistência de Cadastros (Anti-Gaps): Para garantir a robustez do sistema e evitar que produtos fiquem "sem categoria", o sistema aplicará as seguintes validações no cadastro de faixas:
É obrigatório existir ao menos um range cadastrado.
Se houver apenas um range, ele deve cobrir de 0,000 a 999.999,999.
A soma dos ranges deve cobrir integralmente o intervalo de peso, não permitindo "buracos" (lacunas) entre o peso final de uma faixa e o peso inicial da próxima. O sistema alertará o usuário caso tente salvar uma configuração com lacunas.
Obs: Nosso sistema não integra valores inválidos (null), pois a soma das matrizes não funciona se um dos campos for nulo, o que causaria um problema na regra de conferir essas matrizes através da soma.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Alteração no Processo Operacional: Order Start  
**Score:** — (semantico) | **ID:** b91119501bb93e86

O processo de impressão e liberação de ondas será alterado para respeitar a hierarquia de peso (Base, Meio, Topo) de forma visual e automatizada, reduzindo a necessidade de múltiplas interações manuais do operador.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Filtros e Seleção Inicial  
**Score:** — (semantico) | **ID:** 94df7701a0ecda8a

O operador acessará a tela do Order Start.
Filtro de Ruas (Range): O operador poderá informar um intervalo de ruas para trabalho (Ex: Rua 01 até Rua 10), sem a necessidade de selecionar rua a rua individualmente.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Order Start Fracionado  
**Score:** — (semantico) | **ID:** fa4d5d47a77ff191

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos previstos, incluindo os dados de cubagem e quantidade de cada item. O WCS identifica os pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In, First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados. Com base nas informações recebidas, o WCS realiza o cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada tarefa (pedido). O sistema calcula quantos volumes serão necessários para cada tarefa.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start, onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada tarefa com base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o processo de separação do pedido.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 70401362d6d09a22

Após a integração da onda de pedidos, o WCS identifica as tarefas de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo com a quantidade de caixas que serão separadas. Essa etapa permite ao operador decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do Final da Rua:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de forma que o operador inicie a coleta a partir do final da rua, de forma decrescente. Isso otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao ponto de indução de forma mais eficiente.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo operacional

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - OTIMIZAÇÃO DE COLETA - ADITIVO.docx`  
**Heading:** Coleta PBL – Alteração de Etiquetagem e Formação da Pega  
**Score:** — (semantico) | **ID:** 6ca6c9b925f89280

Objetivo:
ajustar o fluxo do PBL para que o WCS deixe de imprimir etiquetas de volume no Order Start e passe a controlar a coleta via Etiqueta de Pega, mantendo o comportamento operacional do PBL (LEDs) e garantindo a formação de pallets conforme limites de peso e cubagem.
Regra principal
O WCS não imprimirá mais as etiquetas dos volumes no momento do Order Start para as coletas PBL.
O WCS passará a imprimir uma Etiqueta de Pega, vinculada diretamente à tarefa de separação (leva de coleta).
Fluxo operacional
O operador inicia a coleta do PBL conforme demanda do sistema.
O WCS realiza a impressão da Etiqueta de Pega (identificador único da leva/tarefa de separação).
Após a impressão da etiqueta, o WCS mantém o comportamento padrão do PBL:
acende os LEDs das posições que deverão ser coletadas naquela leva;
orienta a coleta dos itens conforme a lógica já definida para o PBL.
O WCS determina automaticamente a quantidade de itens a coletar na leva, respeitando os parâmetros de:
peso máximo do pallet de coleta; e
cubagem máxima do pallet de coleta.
O operador realiza a separação e consolida os itens no pallet correspondente à Pega.
Finalização / direcionamento
Ao concluir a coleta da Pega, o operador deve se dirigir ao Stage de Indução e executar o processo de alocação do pallet ao Stage, conforme detalhado na seção subsequente.
Resultado esperado
A rastreabilidade do processo passa a ser conduzida pela Pega (tarefa/leva), e a etiquetagem de volumes ocorre posteriormente, conforme o fluxo de indução/expedição definido no processo.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Dashboard Conferência de Pallets - Rev.docx`  
**Heading:** Informações Disponíveis por Bica  
**Score:** — (semantico) | **ID:** 517e6e55eb4f773a

Ao clicar em qualquer card de bica, o conferente acessa o painel de detalhe daquela bica, contendo:
Lista de volumes ativos com tempo decorrido desde o ACKN de desvio.
Volumes vermelhos (timer estourado) e laranjos (bica errada) em destaque no topo da lista.
Para volumes laranjos: nome da bica onde foi bipado e operador logado naquele momento.
Lista de pallets fechados no dia para aquela bica, com seus RGs.
RG do último pallet fechado em destaque, com lista de volumes bipados naquele pallet.
Alerta de pallet com pendência: exibido quando um pallet foi fechado enquanto havia volumes vermelhos pendentes naquela bica.
Log de ocorrências: histórico com horário, operador, tipo de tratativa aplicada e resultado.
Ex Tela:

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Processo de Order Start  
**Score:** — (semantico) | **ID:** c502fab5f5f3a70f

O sistema MFC receberá os pedidos do sistema WMS do cliente, onde processará as quantidades de volumes através de um algorítmo de Cubagem. Determinando as quantidades de 3 tamanhos diferentes de caixa de picking (Pequena, média ou grande). Necessário que uma tela no MFC permita ao usuário alterar o tamanho das 3 caixas de picking.
Ao finalizar o processo de cubagem, o sistema MFC enviará ao cliente os respectivos detalhes do processamento e sinalizará através da tela de DASHBOARD as quantidades e respectivos tamanhos de caixas de picking que o Operador do order start deverá induzir na automação.
O operador escolhe a caixa de picking e insere na automação, que por sua vez identifica o código de barras do tamanho da caixa e decrementa do saldo total pendente de induzir no equipamento.
Com a informação da caixa, o MFC associa o próximo pedido e envia as informações de impressão para um equipamento VIDEOJET (2351/2361) presente na automação. Esse equipamento imprime um código de barras na caixa que servirá de referência para a identificação na automação (Tanto para caixas de reabastecimento, quanto para caixas de picking).
OBS: As caixas de reabastecimento serão inseridas na automação sem qualquer demanda gerenciada pela tela de Dashboard.

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.1. Order Start  
**Score:** — (nome-topico) | **ID:** a8e4eab72c4f0820

Manhattan gera onda de separação, a onda é composta por tarefas e as tarefas possuem os seguintes tipos de pedidos: MONO, MULTI ou LOJA, tendo como limitador a cubagem da caixa tote. Para os pedidos MULTI, será um item por tarefa, logo também um item por tote.
Operador seleciona a caixa (tote) de picking, lê o código do tote (MONO, MULTI ou LOJA) e lê o número do pacote da etiqueta, caso o item não pertença àquele tote ele não será aceito pelo sistema.
Para cada código de etiqueta lido, o sistema WCS calcula a cubagem do item a ser inserido no tote, sendo que dentro de cada tote deve conter a quantidade limite de cubagem. Enquanto couber na cubagem do Tote as etiquetas devem continuar sendo adicionadas no mesmo Tote. Após isto, segue para fracionados e separados os pedidos mono, multi e loja.
Pedidos Mono: São pedidos que contém 1 único item (1 item de quantidade 1 unitária), neste caso o MFC deve respeitar vários pedidos MONO dentro do mesmo tote, sendo que o limite é a cubagem do tote. Após separado no fracionado, o tote deverá seguir direto para a estação de packing (mesas de conferência), onde será embalado e após isto, seguir para o Sorter. OBS: 1 Pedido com 1 SKU em quantidade acima de 2 peças é considerado PEDIDO MULTI
Pedidos Multi: São pedidos com mais de um item, podendo estar dentro do mesmo Tote, após separado no fracionado, deverá ser desviado no PTW, onde será separado por pedido e lido através de um leitor do cliente. Após a passagem pelo processo de Put-to-wall, os itens serão embalados pelo cliente e seguirão para o Sorter. Neste caso o cliente sinaliza na integração que o pedido tem a característica de MULTI, sendo necessário o envio ao PTW.
Cada etiqueta de picking lida, o Operador deve inserí-la no TOTE para que ela seja aplicada pelo separador da estação de picking.
Totes de picking line e picking tunnel terão cubagens diferentes.
Quando atingir o limite de cubagem ou a próxima etiqueta lida pertence à um pedido multi/mono/loja diferente daquele que já foi associado na caixa (por exemplo: associou inicialmente um pedido mono na caixa e a próxima etiqueta lida no Order Start é um pedido Multi), o sistema WCS indicará ao operador que a caixa pode ser liberada na esteira.
Quando os itens de um pacote não couberem no mesmo tote, o sistema deverá emitir uma etiqueta que faça a identificação visual de que aquele tote precisa de outro, para compor aquele pacote, os totes devem ser atrelados no sistema.
Esse processo é repetido até finalizarem todos os pedidos.
Em cada onda integrada o sistema irá calcular quantos totes serão necessários para esta onda.
Para os itens que não couberem no tote e que tenham mais de 1(um) volume na mesma etiqueta de picking, o WCS deve emitir a etiqueta de identificação desses volumes sobressalentes.
Este caso se faz necessário pois o cliente imprime apenas uma etiqueta para cada SKU (Por exemplo: se um pedido contém 10 unidades de um mesmo SKU, o cliente vai imprimir apenas 1 etiqueta, entretanto se as 10 unidades cabem em 3 totes, o MFC deve emitir uma etiqueta de código de barras para cada TOTE indicando referente à qual pedido pertencem àqueles TOTES, caso contrário o operador da estação de picking não conseguirá identificar as associações dos TOTES para a etiqueta de picking do cliente )

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.5.1 ORDER START  
**Score:** — (nome-topico) | **ID:** 26d893a04d50d7b5

O sistema Manhattan enviara um batch de pedidos múltiplos correspondentes aos casulos das estações de PTW, seguindo a quebra por OLPN, o código do batch enviado na interface deverá ser usado pelo WCS para gravar a correspondência do PTW para aplicar o desvio no sorter.
Os pedidos do PTW são todos multi e podem iniciar no picking line ou picking tunnel, independentemente de onde o mesmo se inicia fará o vínculo com a posição no PTW assim que for integrada a onda.
Um tote pode ocupar mais de uma posição no PTW, MFC fará a cubagem dos volumes com as posições.
A alocação das posições no Manhattan ocorre conforme a quantidade de OLPN dos pedidos, conforme imagem abaixo:
BATCH #1009
No exemplo acima, os 4 pedidos geraram 6 OLPN, devido a cubagem e estratégia de embalagem configurada, logo teríamos a alocação de 6 posições no PTW. A finalização dos pedidos que tem mais de uma OLPN precisa ser sinalizada quando a última posição de cada estiver com a consolidação completa. OLPN corresponde ao pacote que temos atualmente no BOSS.
O código batch é gerado pelo sistema Manhattan, é um código sequencial. Nesse caso o mapeamento das posições do PTW no WCS deverá considerar a finalização de cada batch para mapear o próximo que será enviado na próxima onda, e assim sucessivamente.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.1. Order Start  
**Score:** — (nome-topico) | **ID:** c68dfe8ef88e563e

Manhattan gera onda de separação, a onda é composta por tarefas e as tarefas possuem os seguintes tipos de pedidos: MONO, MULTI ou LOJA, tendo como limitador a cubagem da caixa tote. Para os pedidos MULTI, será um item por tarefa, logo também um item por tote lido.
Tarefa será o agrupador do picking, operador terá somente o número da tarefa impresso. Poderá ocorrer de termos N pedidos com o mesmo número de tarefa.
Operador realiza impressão das etiquetas de tarefas no sistema Manhattan.
Operador seleciona a caixa (tote) de picking, lê o código do tote (MONO, MULTI ou LOJA) e lê o número da etiqueta de tarefa, vinculando ao tote lido.
O Manhattan gerará as tarefas de acordo com a capacidade do tote. Vinculando uma etiqueta de tarefa de picking a um tote.
Após isto, segue para fracionados e separados os pedidos mono, multi e loja.
Pedidos Mono: São pedidos que contém 1 único item (1 item de quantidade 1 unitária), neste caso o MFC deve respeitar vários pedidos MONO dentro do mesmo tote, sendo que o limite é a cubagem do tote. Após separado no fracionado, o tote deverá seguir direto para a estação de packing (mesas de conferência), onde será embalado e após isto, seguir para o Sorter.
Para cada SKU é gerado 1 OLPN.
Quando a tarefa for direcionada para a sua estação, a mesma tarefa não poderá ser direcionada para outra estação de trabalho.
Pedidos Multi: São pedidos com mais de um item, após separado no fracionado, deverá ser desviado no PTW, onde será separado por OLPN e lido através de um leitor do cliente. As tarefas de Multi serão geradas com 1 SKU por tote, nesse caso teremos apenas 1 SKU por estação de trabalho, sempre respeitando a cubagem dos totes tanto para picking line quanto para picking tunel. Após a passagem pelo processo de Put-to-wall, os itens serão embalados pelo cliente e seguirão para o Sorter. Neste caso o cliente sinaliza na integração que o pedido tem a característica de MULTI, sendo necessário o envio ao PTW.
Cada etiqueta de tarefa lida, o Operador deve inseri-la no TOTE para que ela seja aplicada pelo separador da estação de picking.
O processo ocorrerá de maneira que, após associada uma tarefa ao tote, o sistema WCS indicará ao operador que a caixa pode ser liberada na esteira, pois
as tarefas enviadas pelo Manhattan serão no formato de uma tarefa por tote.
Em cada onda integrada, Manhattan calcula quantos totes serão necessários, e
gera a mesma quantidade de tarefas.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.5.1 ORDER START  
**Score:** — (nome-topico) | **ID:** bce008b89ee6c314

O sistema Manhattan enviara um batch de pedidos múltiplos correspondentes aos casulos das estações de PTW, seguindo a quebra por OLPN, o código do batch enviado na interface deverá ser usado pelo WCS para realizar os desvios das estações. Primeiro batch criada com a capacidade das posições da primeira estação do PTW, será enviado para o primeiro destino. Segunda batch para o segundo e assim sequencialmente.
Quando enviar o último lote do batch, o WCS libera o primeiro desvio do PTW para a entrada da próxima batch.
Os pedidos do PTW são todos multi e podem iniciar no picking line ou picking tunnel, independentemente de onde o mesmo se inicia fará o vínculo pelo número do batch no PTW assim que for integrada a onda.
Um tote pode ocupar mais de uma posição no PTW, MFC fará a cubagem dos volumes com as posições.
A alocação das posições no Manhattan ocorre conforme a quantidade de OLPN dos pedidos, conforme imagem abaixo:
BATCH #1009
No exemplo acima, os 4 pedidos geraram 6 OLPN, devido a cubagem e estratégia de embalagem configurada, logo teríamos a alocação de 6 posições no PTW. A finalização dos pedidos que tem mais de uma OLPN precisa ser sinalizada quando a última posição de cada estiver com a consolidação completa. OLPN corresponde ao pacote que temos atualmente no BOSS.
O código batch é gerado pelo sistema Manhattan, é um código sequencial. Nesse caso o mapeamento das posições do PTW no WCS deverá considerar a finalização de cada batch para mapear o próximo que será enviado na próxima onda, e assim sucessivamente.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** f4712ab67e454812

Os volumes a serem transportados no sistema são caixas de papelão, teremos três tipos de caixas, temos pedidos OFFILINE e FULLCASE, que não serão transportados pela automação.
A cubagem para ocupação da caixa será realizada pelo sistema MFC, e existe uma tela onde pode ser alterado a ocupação da caixa.
O sistema MFC receberá do WMS integração com o cadastro de produtos e suas dimensões, assim como a informação de qual caixa usar para os pedidos.
Para esse processo existem 4 etiquetadoras automáticas e 4 formadoras de caixas – Responsabilidade do cliente.
Após a formação da caixa a mesma cai na esteira automática e segue para os processos de Order Start.
O MFC enviará a mensagem CTRL quando a caixa estiver no ponto de decisão ORD (sendo 4 OrderStart e a numeração é atribuída após a sigla de acordo com seu OrderStart, EX: ORD01 referente ao 1° Order Start) a cada 2 segundo para o PLC solicitando as caixas, o PLC informa EDIR para quando não houver caixa no ponto de partida ou ACKN para confirmar o envio da caixa no ponto de partida. O ponto de partida está no sensor antes do marge de cada braço do OrderStart
Após a confirmação do PLC a caixa segue até o ponto (sensor) de identificação de tamanho da caixa, sendo caixas pequenas de 14L e 18L e grandes 22L e 26L.
As caixas pequenas recebem a letra A (EX: ETQ1A) no final da mensagem enviada pelo PLC e as caixas grandes recebem a letra B (EX: ETQ1B), dessa maneira o sistema WCS entende qual etiqueta deve ser atribuída a caixa. No processo de etiquetagem assim que o MFC recebe a informação com o tamanho da caixa ele envia a informação para etiquetadora automática e ela gera a etiqueta e a cola na caixa, nesse momento o PLC informa a mensagem ETQ mais o número do Order que solicitou a caixa (EX: Order (ORD) 01 a mensagem de confirmação de impressão e colagem retornara como ETQ01).
Em caso em que a caixa que foi solicitada pelo CTRL do WCS não corresponda a altura esperada ou não tenha pedidos para aquele tamanho de caixa, a caixa será liberada e uma etiqueta "Dummy" será impressa com a informação "CAIXA SEM PEDIDO".

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 327646d6eaf3f27c

Os volumes a serem transportados no sistema são caixas de papelão, teremos três tipos de caixas. temos pedidos OFFILINE e FULLCASE, que não serão transportados pela automação.
A cubagem para ocupação da caixa será realizada pelo sistema WCS, e existe uma tela onde pode ser alterado a ocupação da caixa.
O sistema WCS receberá do WMS integração com o cadastro de produtos e suas dimensões, assim como a informação de qual caixa usar para os pedidos.
Para esse processo existem 4 etiquetadoras automáticas e 4 formadoras de caixas – Responsabilidade do cliente.
Após a formação da caixa a mesma sai na esteira automática e segue para os processos de Order Start.
O WCS enviará a mensagem CTRL quando a caixa estiver no ponto de decisão ORD (sendo 4 OrderStart e a numeração é atribuída após a sigla de acordo com seu OrderStart, EX: ORD01 referente ao 1° Order Start) a cada 2 segundos para o PLC solicitando as caixas, o PLC informa EDIR para quando não houver caixa no ponto de partida ou ACKN para confirmar o envio da caixa no ponto de partida. O ponto de partida está no sensor antes do merge de cada braço do OrderStart.
Após a confirmação do PLC a caixa segue até o ponto (sensor) de identificação de tamanho da caixa, sendo caixas pequenas de 14L e 18L e grandes 22L e 26L.
As caixas pequenas recebem a letra A (EX: ETQ1A) no final da mensagem enviada pelo PLC e as caixas grandes recebem a letra B (EX: ETQ1B), dessa maneira o sistema WCS entende qual etiqueta deve ser atribuída a caixa. No processo de etiquetagem assim que o WCS recebe a informação com o tamanho da caixa ele envia a informação para etiquetadora automática e ela gera a etiqueta e a cola na caixa, nesse momento o PLC informa a mensagem ETQ mais o número do Order que solicitou a caixa (EX: Order (ORD) 01 a mensagem de confirmação de impressão e colagem retornara como ETQ01).
Em caso em que a caixa que foi solicitada pelo CTRL do WCS não corresponda a altura esperada ou não tenha pedidos para aquele tamanho de caixa, a caixa será liberada e uma etiqueta "Dummy" será impressa com a informação "CAIXA SEM PEDIDO".

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** cc0a7dedc29c897a

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
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY -INTEGRAÇÃO POSTO A POSTO_REV1.docx`  
**Heading:** Cancelamento de Pedido  
**Score:** — (nome-topico) | **ID:** cc31df81857fee4f

O sistema deve disponibilizar uma tela que permita o cancelamento do pedido em qualquer etapa do processo de separação.
Esta funcionalidade será utilizada quando o pedido precisa ser expedido naquele exato momento e há volumes sendo processados na Automação.
Ao cancelar um pedido, devem acontecer os seguintes cenários :
Todos os volumes que estiverem na linha expressa e possuírem picking pendente devem ser cancelados e direcionados ao sorter para desvio na respectiva rampa.
Os volumes que tiverem em algum posto devem realizar apenas o picking nesta estação e seguir ao sorter.
Os volumes que estão no Order Start devem ser cancelados.
A integração deve considerar que tudo que não foi coletado é corte e enviar a integração da mesma forma mencionada no tópico "Integração Posto a Posto" do documento.
OBS: Nenhum volume deste pedido cancelado deve parar na conferência.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** b94cfa5192f6cd51

No Order Start deverá existir um painel/monitor informando os pedidos e tamanho das caixas, fazendo assim um balanceamento entre pedidos e caixas.
Nesse painel/monitor será necessário que o cliente envie a quantidade com casa decimal onde precisaremos mostrar exatamente no mesmo formato que o cliente enviou.
Por exemplo: cliente enviou a quantidade = 2.5. É necessário indicar exatamente esse valor.
Operador fica responsável pelo abastecimento da linha de acordo com as informações mostradas no painel/monitor, a etiqueta colocada dentro da caixa será associada a etiqueta que será impressa e colada na caixa automaticamente por uma etiquetadora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** ec425732e3ea127b

No Order Start deverá existir um painel/monitor informando os pedidos e tamanho das caixas, fazendo assim um balanceamento entre pedidos e caixas.
Nesse painel/monitor será necessário que o cliente envie a quantidade com casa decimal onde precisaremos mostrar exatamente no mesmo formato que o cliente enviou.
Por exemplo: cliente enviou a quantidade = 2.5. É necessário indicar exatamente esse valor.
Operador fica responsável pelo abastecimento da linha de acordo com as informações mostradas no painel/monitor, a etiqueta colocada dentro da caixa será associada a etiqueta que será impressa e colada na caixa automaticamente por uma etiquetadora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** b3d84369996da685

No Order Start deverá existir um painel/monitor informando os pedidos e tamanho das caixas, fazendo assim um balanceamento entre pedidos e caixas.
Nesse painel/monitor será necessário que o cliente envie a quantidade com casa decimal onde precisaremos mostrar exatamente no mesmo formato que o  cliente enviou.
Por exemplo: cliente enviou a quantidade = 2.5.
É necessário indicar exatamente esse valor.
Operador fica responsável pelo abastecimento da linha de acordo com as informações mostradas no painel/monitor, a etiqueta colocada dentro da caixa será associada a etiqueta que será impressa e colada na caixa automaticamente  por uma etiquetadora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 49c31daa80710f08

No Order Start deverá existir um painel/monitor informando os pedidos e tamanho das caixas, fazendo assim um balanceamento entre pedidos e caixas.
Nesse painel/monitor será necessário que o cliente envie a quantidade com casa decimal onde precisaremos mostrar exatamente no mesmo formato que o cliente enviou.
Por exemplo: cliente enviou a quantidade = 2.5. É necessário indicar exatamente esse valor.
Operador fica responsável pelo abastecimento da linha de acordo com as informações mostradas no painel/monitor, a etiqueta colocada dentro da caixa será associada a etiqueta que será impressa e colada na caixa automaticamente por uma etiquetadora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Aditivo_Integracao_JSON_REV.1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 34598fe088edce6a

Não haverá mais a presença da nota com o roteiro dos pickings dentro da caixa. O processo de verificação da caixa com o pedido integrado passa a ser feito através de uma etiqueta que tambem ficará dentro da caixa que será enviada através do campo “hu” da integração de Envio de Volumes.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** ba4a3090a063b7ad

Será disponibilizado apenas 1(um) Order Start para o cliente, onde o sistema de gestão Invent ficará disponível para que o operador selecione o mapa correto para cada tipo de operação.
O sistema deverá permitir que o operador realize a importação de uma tabela de CEPs a qualquer momento da operação, ficando ativa a última tabela importada.
O operador deverá editar essa tabela conforme necessidade por rota, range de cep e saída e então importar no sistema.
Ao importar a tabela o sistema irá roteirizar os volumes passados no sorter.
Operador irá colar etiqueta em todos os volumes com etiquetas internas, e induzi-los no sorter onde o leitor irá fazer a leitura e recolher a informação do cep e buscar a rota correta para fazer o sorteamento.
Ao fazer o processo de separação, o volume será direcionado a uma saída, onde cada saída dispõe de uma saca e um sensor que indicará quando esta saca estiver cheia, quando a saca encher o sensor é acionado, com esse sensor acionado, faz com que a automação pare de desviar volumes naquela saída que estiver com a saca cheia.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** ddb85d0fab086c6a

Será disponibilizado apenas 1(um) Order Start para o cliente, onde o sistema de gestão Invent ficará disponível para que o operador selecione o mapa correto para cada tipo de operação.
O sistema deverá permitir que o operador realize a importação de uma tabela de CEPs a qualquer momento da operação, ficando ativa a ultima tabela importada.
O operador deverá editar essa tabela conforme necessidade por rota, range de cep e saida e então importar no sistema.
Ao importar a tabela o sistema irá roteirizar os volumes passados no sorter.
Operador irá colar etiqueta em todos os volumes com etiquetas internas, e induzi-los no sorter onde o leitor irá fazer a leitura e recolher a informação do cep e buscar a rota correta para fazer o sorteamento.
Ao fazer o processo de separação, o volume será direcionado a uma saída, onde cada saída dispõe de uma saca e um sensor que indicará quando esta saca estiver cheia, quando a saca encher o sensor é acionado, com esse sensor acionado, faz com que a automação pare de desviar volumes naquela saída que estiver com a saca cheia.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Início da operação  
**Score:** — (semantico) | **ID:** 445ea5dd6f87d9c4

Se no pedido houver produto da maquina Venus, WMS(JDA) deverá enviar uma API (Tarefas-FaseD) com as informações dos pedidos, após esse processo, MFC recebe API com os pedidos e organiza e gera uma “fila de separação” e aguarda a API de Batch/Lote, quando MFC recebe a API de Batch, repassa para a Pollux, após isso realiza integração da API Production Order para a maquina Pollux, quando tiver recebido todas as informações de Batch.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Order Start (PTL)  
**Score:** — (semantico) | **ID:** 4f72c5844bb8d537

Cliente realiza a integração de pedidos do WMS para o WCS, onde o WCS irá consolidar as informações recebidas e mostrará na tela a informação de quantos pedidos e tipos de pedidos foram integrados para o WCS e a quantidade de caixas. Essa informação será apresentada na tela de Order Start. A quantidade de pedidos expedidos pelo WCS será controlada gradativamente.
Tela de Order Start informando os tamanhos e quantidades de caixas pendentes:
Operador induz uma caixa vazia na esteira de acordo com os tamanhos solicitados na tela, scanner fixo realiza a leitura do QRCode do tamanho da caixa induzida e realiza a impressão da etiqueta de expedição de um pedido que aquele tamanho de caixa consiga atender, o sistema WCS irá associar o pedido impresso com o tamanho da respectiva caixa sugerida.
Em casos de falta fisicamente de caixas, no sistema existira a opção para o operador realizar o (De-Para) para que o sistema reconsidere o tamanho informado pelo operador.
Com os pedidos integrados no WCS, usuário terá a opção de priorizar pedidos, quando o operador realizar essa priorização manual, esse pedido deverá ser executado a frente dos demais mostrando a sugestão de caixa para esse pedido.
Tela de exemplo de priorização de pedidos:
O código de tamanho de caixa será único e estará impresso na caixa (Através de QRCode)
OBS: O critério para atender as prioridades de picking será a data de pagamento.
Caso na integração recebida pelo WMS, esse campo (data de pagamento) esteja “Null” (em branco), o WCS irá considerar a data/hora em que o pedido foi integrado no sistema WCS.
Layout de Etiqueta de pedido PTL e em vermelho o código de barras que usaremos na automação (Sorter/Cubometro):

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Order Start (Misto)  
**Score:** — (semantico) | **ID:** 6621ad103c413c6d

Cliente realiza a integração de pedidos do WMS para o WCS, onde o WCS irá consolidar as informações, e os pedidos Misto, Mono e Unitiza serão enviados para a máquina POLLUX expedir.
Ao realizar a separação do pedido, a POLLUX irá fixar uma etiqueta na caixa que foi expedida.
Quando a máquina POLLUX finalizar a separação dos pedidos, a caixa seguirá para a linha de automação.
Caso o pedido expedido pela POLLUX seja tipo MONO, ele seguirá diretamente para o sorter e quando esse volume passar pelo portal de leitura, automação fará o desvio conforme a transportadora e nesse momento WCS devolve integração de aferição/confirmação desse pedido.
Caso o pedido expedido pela POLLUX seja tipo MISTO, ele será desviado para estação PTL.
Volume ao chegar no início da estação de PTL, leitor fixo fara a leitura do código de barras da etiqueta impressa pela POLLUX, sistema dará a sugestão de tamanho de caixa para aquele pedido, operador ira alocar a caixa expedida pela POLLUX dentro da nova caixa e realizar a leitura do QR Code do tamanho da caixa, onde o sistema irá vincular o tamanho da caixa com o pedido, realiza a impressão da etiqueta de expedição do pedido, fixa na nova caixa e solta para o posto de PTL, no posto PTL leitor fixo realiza a leitura da caixa de expedição e caso tenha produtos a serem separados nesse posto, as posições de picking irão acender com suas respectivas quantidades.
Caso a caixa de expedição induzida seja de tamanho diferente da sugestão, operador terá que selecionar manualmente na tela, uma opção de troca de caixa e informar o tamanho da caixa que será colocado para atender aquele pedido.
Após passar por todos os postos PTL da estação, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.
Pedidos que são iniciados pela POLLUX e não necessitam de outros produtos da estação de picking são considerados MONO, nesse caso vão diretamente para o sorter, sem a necessidade de passar pelo packing.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 7f5c4715933d25d3

Cliente realiza a integração de pedidos para o sistema MFC, onde ele irá consolidar as informações recebidas e mostrará na tela a informação de quantas caixas e tamanhos o operador deverá induzir na esteira.
Leitor fixo na esteira realiza a leitura do QR code do tamanho da caixa e operador realiza a impressão da etiqueta de expedição, o sistema irá associar o pedido impresso com o tamanho da respectiva caixa.
O código de tamanho de caixa já virá fixada na caixa.
Caso o tamanho da caixa induzida não esteja de acordo com o tamanho da caixa solicitada no pedido, o sistema não irá realizar a associação e a caixa não seguirá para o processo de picking.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 709fc64e0f79cefe

POST
REQUEST:
WMS (Cliente)  MFC (Invent)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Order Start (PTL)  
**Score:** — (semantico) | **ID:** f15e167fb37afdb4

Cliente realiza a integração de pedidos do WMS para o WCS, onde o WCS irá consolidar as informações recebidas e mostrará na tela a informação de quantos pedidos e tipos de pedidos foram integrados para o WCS e a quantidade de caixas. Essa informação será apresentada na tela de Order Start. A quantidade de pedidos expedidos pelo WCS será controlada gradativamente.
Tela de Order Start informando os tamanhos e quantidades de caixas pendentes:
Operador induz uma caixa vazia na esteira de acordo com os tamanhos solicitados na tela, scanner fixo realiza a leitura do QRCode do tamanho da caixa induzida e realiza a impressão da etiqueta de expedição de um pedido que aquele tamanho de caixa consiga atender, o sistema WCS irá associar o pedido impresso com o tamanho da respectiva caixa sugerida.
Em casos de falta fisicamente de caixas, no sistema existira a opção para o operador realizar o (De-Para) para que o sistema reconsidere o tamanho informado pelo operador.
Com os pedidos integrados no WCS, usuário terá a opção de priorizar pedidos, quando o operador realizar essa priorização manual, esse pedido deverá ser executado a frente dos demais mostrando a sugestão de caixa para esse pedido.
Tela de exemplo de priorização de pedidos:
O código de tamanho de caixa será único e estará impresso na caixa (Através de QRCode)
OBS: O critério para atender as prioridades de picking será a data de pagamento.
Caso na integração recebida pelo WMS, esse campo (data de pagamento) esteja “Null” (em branco), o WCS irá considerar a data/hora em que o pedido foi integrado no sistema WCS.
Layout de Etiqueta de pedido PTL e em vermelho o código de barras que usaremos na automação (Sorter/Cubometro):

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Order Start (Misto)  
**Score:** — (semantico) | **ID:** a30e31b68c5dc4ed

Cliente realiza a integração de pedidos do WMS para o WCS, onde o WCS irá consolidar as informações, e os pedidos Misto, Mono e Unitiza serão enviados para a máquina POLLUX expedir.
Ao realizar a separação do pedido, a POLLUX irá fixar uma etiqueta na caixa que foi expedida.
Quando a máquina POLLUX finalizar a separação dos pedidos, a caixa seguirá para a linha de automação.
Caso o pedido expedido pela POLLUX seja tipo MONO, ele seguirá diretamente para o sorter e quando esse volume passar pelo portal de leitura, automação fará o desvio conforme a transportadora e nesse momento WCS devolve integração de aferição/confirmação desse pedido.
Caso o pedido expedido pela POLLUX seja tipo MISTO, ele será desviado para estação PTL.
Volume ao chegar no início da estação de PTL, leitor fixo fara a leitura do código de barras da etiqueta impressa pela POLLUX, sistema dará a sugestão de tamanho de caixa para aquele pedido, operador ira alocar a caixa expedida pela POLLUX dentro da nova caixa e realizar a leitura do QR Code do tamanho da caixa, onde o sistema irá vincular o tamanho da caixa com o pedido, realiza a impressão da etiqueta de expedição do pedido, fixa na nova caixa e solta para o posto de PTL, no posto PTL leitor fixo realiza a leitura da caixa de expedição e caso tenha produtos a serem separados nesse posto, as posições de picking irão acender com suas respectivas quantidades.
Caso a caixa de expedição induzida seja de tamanho diferente da sugestão, operador terá que selecionar manualmente na tela, uma opção de troca de caixa e informar o tamanho da caixa que será colocado para atender aquele pedido.
Após passar por todos os postos PTL da estação, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.
Pedidos que são iniciados pela POLLUX e não necessitam de outros produtos da estação de picking são considerados MONO, nesse caso vão diretamente para o sorter, sem a necessidade de passar pelo packing.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Pedido Mono Máquina  
**Score:** — (semantico) | **ID:** e68701ffddee5ee2

Quando operador visualizar na tela de Order Start, que existem pedidos mono maquina, o mesmo fará a impressão das etiquetas e irá verificar na própria etiqueta a estação que deverá seguir para realizar a separação, operador ao chegar no posto de picking, fará a leitura da etiqueta no inicio da estação para iniciar a separação do pedido e depois realizar a leitura no posto onde foi indicado pela etiqueta e assim realiza a separação do produto (Máquina), cola a etiqueta na própria caixa da maquina e induz na esteira para seguir para packing ou sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Order Start (PTL)  
**Score:** — (semantico) | **ID:** 68395435bef19e3f

Cliente realiza a integração de pedidos do WMS para o WCS, onde o WCS irá consolidar as informações recebidas e mostrará na tela a informação de quantos pedidos e tipos de pedidos foram integrados para o WCS e a quantidade de caixas. Essa informação será apresentada na tela de Order Start. A quantidade de pedidos expedidos pelo WCS será controlada gradativamente.
Tela de Order Start informando os tamanhos e quantidades de caixas pendentes:
Operador induz uma caixa vazia na esteira de acordo com os tamanhos solicitados na tela, scanner fixo realiza a leitura do QRCode do tamanho da caixa induzida e realiza a impressão da etiqueta de expedição de um pedido que aquele tamanho de caixa consiga atender, o sistema WCS irá associar o pedido impresso com o tamanho da respectiva caixa sugerida.
Em casos de falta fisicamente de caixas, no sistema existira a opção para o operador realizar o (De-Para) para que o sistema reconsidere o tamanho informado pelo operador.
Com os pedidos integrados no WCS, usuário terá a opção de priorizar pedidos, quando o operador realizar essa priorização manual, esse pedido deverá ser executado a frente dos demais mostrando a sugestão de caixa para esse pedido.
Tela de exemplo de priorização de pedidos:
O código de tamanho de caixa será único e estará impresso na caixa (Através de QRCode)
OBS: O critério para atender as prioridades de picking será a data de pagamento.
Caso na integração recebida pelo WMS, esse campo (data de pagamento) esteja “Null” (em branco), o WCS irá considerar a data/hora em que o pedido foi integrado no sistema WCS.
Layout de Etiqueta de pedido PTL e em vermelho o código de barras que usaremos na automação (Sorter/Cubometro):

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Order Start (Misto)  
**Score:** — (semantico) | **ID:** 7f96affd240b44d8

Cliente realiza a integração de pedidos do WMS para o WCS, onde o WCS irá consolidar as informações, e os pedidos Misto, Mono e Unitiza serão enviados para a máquina POLLUX expedir.
Ao realizar a separação do pedido, a POLLUX irá fixar uma etiqueta na caixa que foi expedida.
Quando a máquina POLLUX finalizar a separação dos pedidos, a caixa seguirá para a linha de automação.
Caso o pedido expedido pela POLLUX seja tipo MONO, ele seguirá diretamente para o sorter e quando esse volume passar pelo portal de leitura, automação fará o desvio conforme a transportadora e nesse momento WCS devolve integração de aferição/confirmação desse pedido.
Caso o pedido expedido pela POLLUX seja tipo MISTO, ele será desviado para estação PTL.
Volume ao chegar no início da estação de PTL, leitor fixo fara a leitura do código de barras da etiqueta impressa pela POLLUX, sistema dará a sugestão de tamanho de caixa para aquele pedido, operador ira alocar a caixa expedida pela POLLUX dentro da nova caixa e realizar a leitura do QR Code do tamanho da caixa, onde o sistema irá vincular o tamanho da caixa com o pedido, realiza a impressão da etiqueta de expedição do pedido, fixa na nova caixa e solta para o posto de PTL, no posto PTL leitor fixo realiza a leitura da caixa de expedição e caso tenha produtos a serem separados nesse posto, as posições de picking irão acender com suas respectivas quantidades.
Caso a caixa de expedição induzida seja de tamanho diferente da sugestão, operador terá que selecionar manualmente na tela, uma opção de troca de caixa e informar o tamanho da caixa que será colocado para atender aquele pedido.
Após passar por todos os postos PTL da estação, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.
Pedidos que são iniciados pela POLLUX e não necessitam de outros produtos da estação de picking são considerados MONO, nesse caso vão diretamente para o sorter, sem a necessidade de passar pelo packing.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE(RASC) - FASE.1 VER.1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 56690dabc7990ab7

Cliente realiza a integração de pedidos para o sistema MFC, onde ele irá consolidar as informações recebidas e mostrará a informação de quantas caixas e tamanhos o operador deverá induzir na esteira, após indução das caixas conforme os tamanhos e quantidades solicitados, deverá fazer a impressão da etiqueta de expedição que será usada para realizar o picking, essa impressão será feita manual,
O código de tamanho de caixa já virá fixada do fabricante.
Quando realizar a leitura do código de tamanho de caixa, o sistema deverá associar o pedido que foi impressa etiqueta ao tamanho da caixa. Caso o tamanho da caixa induzida não esteja de acordo com o tamanho da caixa solicitada no pedido, O sistema não irá associar esse tamanho de caixa no pedido e a caixa não seguirá para o processo de picking.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Início da operação  
**Score:** — (semantico) | **ID:** a43f1913dc404282

WMS(DHL) Deverá enviar uma API (tarefas) com as informações dos pedidos, após esse processo, MFC recebe API com os pedidos e organiza e gera uma “fila de separação” e integra api para a maquina Pollux, quando tiver recebido todas as informações de batch e premade, conforme citado nos itens 3.2/3.3/3.4 e 3.5.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 156044d779314001

Após WMS(JDA) realizar a integração de pedidos/tarefas para o MFC. Operador deverá realizar a impressão das etiquetas pelo sistema MFC, e após isso inicia o processo de picking manual através da impressão da etiqueta.
Todas as informações (incluindo informações da Danfe Simp.) que compõem as etiquetas a serem impressas, deverão ser integradas do WMS(JDA) para o MFC, com isso, MFC repassa as informações de pedidos via integração para a Pollux após a confirmação de separação do WMS com a API de order_production.
Exemplo de tela MFC
Exemplo de Etiqueta (Venus) a ser impressa pelo MFC:

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** f406a5db53499644

A tela de Order Start do Picking Rack, será semelhante as outras telas de Order Start da PTL 1 e 2, na tela do MFC mostrara apenas os pedidos que se encaixam nesse cenário, nesse caso o sistema irá verificar todos os produtos do pedido, caso algum produto do pedido esteja cadastrado no Picking Rack, o pedido então se encaixa nesse tipo de separação.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** dab82e29df60818c

Após a rotina do Order Start ser concluída, a página do MFC então mostrará as informações do pedido que está sendo separado no momento, como número do pedido, caixa sugerida(confirmada), endereços, produtos e quantidades a serem separados fora das posições de Flow Rack.
Nesse caso, todos os produtos que solicitarem separação estarão em posições físicas nos endereços cadastrados no sistema.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Misto  
**Score:** — (semantico) | **ID:** e2f913b92e6abcbb

Para pedidos do tipo Misto, que existe produtos a serem separados fora das posições de PTL e contenham produtos da máquina Pollux, estes iniciarão na Pollux e ao chegar no order start da PTL;
MFC informará o operador o tipo de caixa sugerida para aquele pedido
MFC realiza a impressão da etiqueta
Operador fixa etiqueta na caixa sugerida
Operador aloca a caixa da Pollux na caixa sugerida
Order Start informa que a separação Picking Rack ainda está pendente de separação
Operador deverá seguir manualmente com a caixa sugerida e caixa da Pollux até o Picking Rack;
No Picking Rack, operador realiza a leitura do código de barras da caixa Pollux via leitor de dedo (Ring Scan)
MFC informa tipo de caixa sugerida
Operador realiza a leitura do QR Code da caixa sugerida
MFC disponibiliza na tela informações do pedido
Operador se desloca até os endereços indicados pelo sistema
Operador realiza a separação dos itens
Operador confirma a separação dos itens na tela do Picking Rack
Confirmação feita manual por item separado
Ao finalizar a separação de todos os itens, o pedido não estará mais disponível no Order Start do Picking Rack
Após realizar a separação dos produtos de Picking Rack, operador irá induzir manualmente a caixa no Order Start da PTL para finalização da separação do restante dos itens cadastrados nos Flow Racks PTL. No order start da PTL, inicia o processo de separação padrão de pedido Misto na PTL.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** PTW (Put – To – Wall)  
**Score:** — (semantico) | **ID:** 91792709bfe3f36d

O descritivo abaixo refere-se às regras de negócio para as soluções previstas para o item ORDER START PTW que é responsável pelo tratamento dos PEDIDOS MISTOS e UNITIZA do PROJETO PTL 2.0 e VENUS em Araçariguama - SP.
Contém informações sobre as necessidades físicas e soluções sistêmicas, do ponto de vista de usuário Final. Mais detalhes sobre o fluxo de sistema e físico destes cenários encontram-se detalhados no link indicado no Documento de referência:
Documento de referencia:
https://miro.com/app/board/uXjVOlQwG7U=/#tpicker-content

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** b185bfb3f4ea5479

Funcionará com as funções de um Order Starter Padrão com o adicional da interface com o PUT TO WALL.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Telas do Sistema  
**Score:** — (semantico) | **ID:** 8eca1dbe2ab935bf

A tela abaixo é uma sugestão para a visualização dos endereços na tela do posto de trabalho (monitor). Ela deverá ser dividida com a tela de ORDER START já prevista para o ORDER START padrão.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Início da operação  
**Score:** — (semantico) | **ID:** 71b010425f9fd8f9

WMS(DHL) Deverá enviar uma API (tarefas) com as informações dos pedidos, após esse processo, MFC recebe API com os pedidos e organiza e gera uma “fila de separação” e integra api para a maquina Pollux, quando tiver recebido todas as informações de batch e premade, conforme citado nos itens 3.2/3.3/3.4 e 3.5.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 361b2a0719d97cc1

Após WMS(DHL) realizar a integração de pedidos/tarefas para o MFC. Operador deverá realizar a impressão dos cartons pelo sistema MFC, e após isso inicia o processo de picking manual através da impressão do carton.
Todas as informações (incluindo informações da Danfe Simp.) que compõem as etiquetas a serem impressas, deverão ser integradas do WMS(DHL) para o MFC, com isso, MFC repassa as informações de pedidos e impressão via integração para a Pollux após a confirmação de separação do WMS com a API de order_production.
Exemplo de tela de Order Start MFC
Exemplo de Etiqueta (Venus) a ser impressa pelo MFC:

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 533e54a90494060a

A tela de Order Start do Picking Rack, será semelhante as outras telas de Order Start da PTL 1 e 2, na tela do MFC mostrara apenas os pedidos que se encaixam nesse cenário, nesse caso o sistema irá verificar todos os produtos do pedido, caso algum produto do pedido esteja cadastrado no Picking Rack, o pedido então se encaixa nesse tipo de separação.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** 8e28d7a0eba2a60d

Após a rotina do Order Start ser concluída, a página do MFC então mostrará as informações do pedido que está sendo separado no momento, como número do pedido, caixa sugerida(confirmada), endereços, produtos e quantidades a serem separados fora das posições de Flow Rack.
Nesse caso, todos os produtos que solicitarem separação estarão em posições físicas nos endereços cadastrados no sistema.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Misto  
**Score:** — (semantico) | **ID:** 8b086ad31ff7e6fa

Para pedidos do tipo Misto, que existe produtos a serem separados fora das posições de PTL e contenham produtos da máquina Pollux, estes iniciarão na Pollux e ao chegar no order start da PTL;
MFC informará o operador o tipo de caixa sugerida para aquele pedido
MFC realiza a impressão da etiqueta
Operador fixa etiqueta na caixa sugerida
Operador aloca a caixa da Pollux na caixa sugerida
Order Start informa que a separação Picking Rack ainda está pendente de separação
Operador deverá seguir manualmente com a caixa sugerida e caixa da Pollux até o Picking Rack;
No Picking Rack, operador realiza a leitura do código de barras da caixa Pollux
MFC informa tipo de caixa sugerida
Operador realiza a leitura do QR Code da caixa sugerida
MFC disponibiliza na tela informações do pedido
Operador se desloca até os endereços indicados pelo sistema
Operador realiza a separação dos itens
Operador confirma a separação dos itens na tela do Picking Rack
Confirmação feita manual por item separado
Ao finalizar a separação de todos os itens, o pedido não estará mais disponível no Order Start do Picking Rack
Após realizar a separação dos produtos de Picking Rack, operador irá induzir manualmente a caixa no Order Start da PTL para finalização da separação do restante dos itens cadastrados nos Flow Racks PTL. No order start da PTL, inicia o processo de separação padrão de pedido Misto na PTL.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** PTW (Put – To – Wall)  
**Score:** — (semantico) | **ID:** 380022854096ac24

O descritivo abaixo refere-se às regras de negócio para as soluções previstas para o item ORDER START PTW que é responsável pelo tratamento dos PEDIDOS MISTOS e UNITIZA do PROJETO PTL 2.0 e VENUS em Araçariguama - SP.
Contém informações sobre as necessidades físicas e soluções sistêmicas, do ponto de vista de usuário Final. Mais detalhes sobre o fluxo de sistema e físico destes cenários encontram-se detalhados no link indicado no Documento de referência:
Documento de referencia:
https://miro.com/app/board/uXjVOlQwG7U=/#tpicker-content

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** a1220347ad23a9d8

Funcionará com as funções de um Order Starter Padrão com o adicional da interface com o PUT TO WALL.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Telas do Sistema  
**Score:** — (semantico) | **ID:** a7d0f598f4078889

A tela abaixo é uma sugestão para a visualização dos endereços na tela do posto de trabalho (monitor). Ela deverá ser dividida com a tela de ORDER START já prevista para o ORDER START padrão.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Order start  
**Score:** — (nome-topico) | **ID:** 7243958fbbeff96d

Na estação de Order Start o operador irá selecionar a onda que será expedida.
Essa onda deverá ser integrada previamente no sistema com as informações necessárias conforme descrito no item de integrações (Item 7).

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Consulta de Cargas Rejeitadas ou em Análise  
**Score:** — (nome-topico) | **ID:** ef2b71395ff55568

Esta tela serve para o operador conseguir consultar todas as cargas que foram postas em análise ou que foram simplesmente rejeitadas.
Aqui o operador poderá ter as informações que permitem identificar quais são as cargas, e qual é o motivo delas estarem nessa situação.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Registro de Cargas Rejeitadas ou em Análise  
**Score:** — (nome-topico) | **ID:** b5320a5411ab7b0e

Esta etapa está dividida em duas abas.
Na aba (Rejeito/Análise) o operador vai poder informar para o sistema VELOX que uma carga precisa ser rejeitada ou simplesmente ficar em analise temporariamente.
O operador seleciona se ele quer rejeitar a carga ou colocar em análise, bipa o código identificador da carga e escolhe se ele pretende aplicar esta ação se baseando no MAWB ou HAWB da carga.
OBS: Se o operador selecionar HAWB, a carga que será alterada será apenas a que corresponde ao código identificador que o operador bipou, se ele selecionar MAWB, o sistema VELOX irá aplicar essa alteração a todas as cargas que possuem o MAWB da carga que foi bipada.
Na aba (Tirar da Análise) O operador vai poder informar para o sistema VELOX que uma carga antes posta em análise não se encontra mais nessa situação fazendo com que ela possa prosseguir nas etapas normalmente.
O operador bipa o código identificador da carga e decide se ele quer aplicar esta ação se baseando no MAWB ou no HAWB da carga bipada.
OBS: Se o operador selecionar HAWB, a carga que será alterada será apenas a que corresponde ao código identificador que o operador bipou, se ele selecionar MAWB, o sistema VELOX irá aplicar esta alteração a todas as cargas que possuem o MAWB da carga que foi bipada.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Consulta de Cargas do Dia  
**Score:** — (nome-topico) | **ID:** 38939c681df01765

Nesta tela o gestor consegue consultar as listas de puxe registradas e as cargas de cada uma delas.
Nesta tela temos duas abas.
Na aba (Consulta de Puxes) O gestor seleciona o voo desejado para que o sistema VELOX possa carregar as listas de puxe relacionadas.
OBS: Por padrão com a opção “Exibir apenas os puxes em atividade” marcada, o sistema irá retornar apenas as listas de puxe que ainda não venceram, caso seja necessário consultar todas as listas, basta desmarcar essa opção e o sistema retornará tudo que foi feito.
Na aba (Consulta das Cargas) O gestor seleciona uma lista de puxe para que o sistema VELOX possa listar as cargas vinculadas a ela.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Cadastro das Cargas do Dia  
**Score:** — (nome-topico) | **ID:** b8d1b7bb7a61d43f

Nesta tela o gestor registra listas de puxe e a relação de cargas que cada uma delas terá.
Esta tela está dividida em duas abas.
Na aba (Cadastro de Puxe) o gestor deve preencher as informações referentes a lista de puxe em si, que são:
Voo
Inspeção
Código da lista
Escalas/Rotas
Nome do operador que está fazendo a lista
Matrícula do operador
Data de Saída do Voo
Previsão do Puxe
Situação da Lista (Se será ativa ou inativa)
Na aba (Cadastro de Cargas) o gestor deve preencher as informações de cada carga, esse preenchimento pode ocorrer para duas situações:
Cargas de Master Puro e Cargas que possuem uma ou mais HAWBS, no caso de registrar uma carga de master pura, só é necessário preencher as informações abaixo
MAWB
Código DUE (Opcional)
Quantidade de peças da Master
Peso em Quilos
Volume em metros cúbicos
Destino
Agente de Carga (Opcional)
Descrição (Opcional)
Specials (Opcional)
Caso ele tenha que registrar uma carga com uma ou mais HAWBS, ele preenche uma vez só os dados da Master que são:
MAWB
Quantidade de peças da Master
Volume em metros cúbicos
Destino
Agente
E para cada HAWB ele terá que ir preenchendo as informações abaixo:
Número do HAWB
DUE
Quantidade de peças do HAWB
Peso em Quilos
Descrição
Specials

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** bfa013afb56e5426

Teremos 1 Order Start por nível.
Após o vínculo da caixa plástica com o pedido, Velox deverá enviar a integração para o WMS informando que o volume foi iniciado, a caixa então seguirá pela linha expressa e a leitura da caixa será feita através de um scanner fixo, para identificar se tem produto a ser separado neste posto.
Pedidos que contenham tipos de produtos Controlados/Psicotrópicos, baixo giro e ou alto giro, serão distribuídos da seguinte forma:
2º Andar/Nível – Order Start pedidos que contenham tipos de produtos Controlados/Psicotrópicos.
1º Andar/Nível – Order Start pedidos que contenham tipos de produtos Baixo Giro e Alto Giro.
Térreo – Order Start pedidos que contenham somente tipo de produtos Alto Giro.
Cada Order Start mostrará os pedidos conforme detalhado acima, por exemplo no Order Start Alto Giro o operador não visualizará os pedidos que contém produtos dos setores “Controlados” e/ou Baixo Giro e vice-versa.
Sistema VELOX fará a priorização e ordenação conforme recebido na integração, ou seja, o primeiro integrado será o primeiro a ser expedido.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente, selecionando o pedido a ser separado.
Obs.: Tela de order start deve ser adicionada a informação da coluna de numero do volume para que o operador tenha referência.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Estação de Order Start  
**Score:** — (semantico) | **ID:** 6d214ed39bcf8918

No order start deverá ter 1 (uma) impressora que realizará a impressão de etiqueta da caixa plástica lida vinculada ao pedido. (Responsabilidade EMIS).

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** b23ff4bb52fb85f8

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
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Etiqueta de Pedidos  
**Score:** — (semantico) | **ID:** a58cae1d3a815ec6

As etiquetas serão impressas pelo sistema WMS do cliente.
As etiquetas do pedido serão impressas no início da operação, operador deverá realizar a impressão conforme as regras dos Order Start.

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.11.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** fed78c9149614c75

Os volumes a serem transportados no sistema são caixas de papelão, teremos três tipos de caixas, e não teremos produtos fora da caixa.
A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.
O sistema MFC receberá do WMS integração com o cadastro de produtos e suas dimensões.
O sistema MFC realiza o cálculo de cubagem e solicita o tamanho de caixa e a quantidade necessária.
Na caixa haverá um QRCODE indicando o tamanho da caixa (Responsabilidade Eurofarma).
Antes da etiquetadora automática haverá um scanner que fará a leitura desse QRCODE, identificando o tamanho da caixa e vinculando à um pedido referente a este tamanho de caixa.
No caso de uma caixa reutilizada, o operador deverá imprimir este QRCODE (Responsabilidade Eurofarma) em uma etiquetadora zebra e colar na caixa, indicando qual o tamanho dela.
Os tamanhos de caixa serão: P, M, G.
Operador configura fisicamente a formadora de caixas para o tamanho de caixa selecionado, e a formadora irá liberar caixas na linha.
O sistema irá enviar as etiquetas referentes a este tamanho de caixa para a etiquetadora.
A impressão da etiqueta de pedido será realizada pelo sistema MFC.
Em caso de Noread no início da linha, a caixa será desviada na primeira estação, e o operador entrega essa caixa para ser verificada. (Estação serve como se fosse um rejeito da etiquetadora)
Em caso de uma caixa ser etiquetada e levar mais de 2 minutos para passar no primeiro scanner, ela será desconsiderada e iniciaremos uma nova caixa para esse pedido (Sistema entenderá que essa caixa foi retirada da linha)
Após o vínculo da caixa com o pedido, a mesma seguirá para a linha para ser realizado o processo de separação dos produtos em cada posto de separação.
Tipos de produtos:
Produtos Oncológicos
Produtos Hospitalares
Promocionais
Amostra Grátis

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 54fc7d68ef4eff9d

Teremos 3 níveis de separação com produtos mistos: Moda Feminina, Moda Masculina, Infantil, Cosméticos e Cama Mesa e Banho.
O sistema VELOX deverá distribuir os pedidos conforme os tipos de produto recebido na onda (Distribuição conforme produtos no endereço, por pedido), teremos 1 Order Start por nível.
Podemos ter produtos de Curva A,B ou C por posição em todos os níveis / Order Start.
O sistema VELOX fará a priorização e ordenação conforme recebido na integração, ou seja, o primeiro integrado será o primeiro a ser separado.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente, selecionando o pedido a ser separado.
Operador realiza a impressão das etiquetas do pedido conforme a quantidade de caixas calculada pelo sistema VELOX para aquele pedido.
O sistema VELOX recebe as informações dos pedidos realiza a cubagem dos itens e realiza o cálculo de quantas caixas serão necessárias para atender o pedido, e as processa para que os usuários realizem a separação através das estações de picking.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** e5acca04826ae27f

Será disponibilizado apenas 1(um) Order Start para o cliente, onde o sistema de gestão Invent ficará disponível para que o operador selecione o mapa correto para cada tipo de operação.
O sistema deverá permitir que o operador realize a importação de uma tabela de CEPs a qualquer momento da operação, ficando ativa a última tabela importada.
O operador deverá editar essa tabela conforme necessidade por rota, range de cep, Put to Bag, saída e então importar no sistema.
Ao importar a tabela o sistema irá roteirizar os volumes passados no sorter.
Operador irá colar etiqueta em todos os volumes com etiquetas internas, e induzi-los no sorter onde o leitor irá fazer a leitura e ler a informação do cep e buscar a rota correta para fazer o sorteamento.
Ao fazer o processo de separação, o volume será direcionado a uma saída, onde cada saída dispõe de uma saca e um sensor que indicará quando esta saca estiver cheia, quando a saca encher, o sensor é acionado, com esse sensor acionado, faz com que a automação pare de desviar volumes naquela saída que estiver com a saca cheia.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** c53ec57d6069c324

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Controle de pedidos, Order Start, Picking Cart, Picking Coletor, Conferência, PTW e PTL, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** 3266fb7c16ab47d5

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de volumes sistêmicos nas caixas plásticas. Cada Picking Cart terá seu próprio Order Start, e a caixa plástica será vinculada a uma posição do Picking Cart específica.
Mapeamento da Posição de Picking Cart:
Vinculação Inicial da Posição de Picking Cart à Caixa Plástica:
É necessário realizar o mapeamento da posição de Picking Cart. Neste primeiro passo, o operador deve selecionar a zona que irá atuar, e então associar a posição de Picking Cart a uma caixa plástica. O mapeamento é realizado através de um leitor de mão integrado ao PDV, onde o operador escaneia a caixa plástica e associa essa caixa a uma posição específica do Picking Cart realizando a leitura do código do endereço do picking cart. Após finalizar o mapeamento, o operador deve clicar no botão “FINALIZAR MAPEAMENTO”.
OBS: Com as caixas definidas em suas respectivas posições, o sistema automaticamente irá atrelar as tarefas de coleta, de acordo com as regras de priorização de pedidos (mencionado no item 4.1) para todas as caixas vinculadas ao Picking cart.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart de uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a disponibilidade de caixas plásticas.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Order Start Coletor  
**Score:** — (semantico) | **ID:** 87eba149764a5dd2

O Sistema irá segregar a coleta dos pedidos seguindo os cadastros das zonas realizado pela operação, gerando ordens de separação pelas áreas que os coletores irão atuar.
O operador deverá informar qual será sua zona de separação e qual carrinho está sendo utilizado.
Com o carrinho definido, o sistema automaticamente irá atrelar a próxima tarefa de coleta, de acordo com as regras de priorização de pedidos (mencionado no item 3.1) para o carrinho informado.

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 960457254bf065d1

Será 1 (um) Order Start no início da linha.
Para iniciar o processo, o sistema Velox, deverá receber via integração todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade para os pedidos recebidos, caso seja necessário priorizar um pedido em específico, deverá ser feito manualmente na tela do order start.
No momento em que o sistema Velox receber essas informações, realiza o processo de cubagem e gera os volumes necessários para cada volume gerado do pedido a ser separado.
Operador terá disponivel fisicamente, um buffer de caixas de reuso montadas e disponíveis para serem reutilizadas, próximo ao order start.
Baseado no cálculo de cubagem, o sistema Velox gera a quantidade de volumes necessários para o pedido e informa na tela do order start, quais os tipos de caixas e a quantidade necessária para atender aquele pedido.
VELOX realiza a impressão da etiqueta dos volumes gerados para o pedido, operador fixa a etiqueta na caixa solicitada, e induz a caixa na linha para seguir para a separação.
Exemplo sugestão de tela de order start:

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Balanceamento (1 x 1)  
**Score:** — (semantico) | **ID:** 1eee864a57648583

Sistema Velox estará preparado para caso exista a necessidade de alocação de 1 (um) mesmo item cadastrado em diferentes postos.
Mesmo item cadastrado nos 3 (três) postos de separação:
VELOX fará o balanceamento cadenciando as caixas, realizando a separação de 1 (uma) volume por posto, ou seja, se tivermos 3 (três) volumes solicitando a separação do mesmo item que existe nos 3 (três) postos, o VELOX irá realizar a separação da primeira caixa no posto 3 (três) no final da linha, a segunda caixa será separada no posto 2 (dois) e a terceira caixa será separada no posto 1 (um) no início da linha, com isso a linha de separação segue com máxima fluidez.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Tela de Romaneios  
**Score:** — (semantico) | **ID:** d033caa781f85b7b

A tela de Romaneios permite que a operação visualize e inicie os romaneios que terão suas tarefas de separação liberadas, garantindo controle sobre quais serão processados no Order Start e alocados no PTL. O WCS exibe todos os romaneios recebidos, ordenados por data de integração, mostrando informações como número do romaneio e status (Pendente, Iniciado ou Finalizado). A tela também oferece funcionalidades de busca por romaneio específico e filtros por data ou status, facilitando a gestão e priorização dos romaneios a serem processados.
Para iniciar o processamento, o operador seleciona um ou mais romaneios, e o WCS reserva automaticamente as posições de PTL e libera as tarefas de separação correspondentes nos Order Start. Romaneios não iniciados nesta tela não terão suas tarefas liberadas, garantindo autonomia da operação para definir quais volumes processar. Após a execução, o sistema confirma ao operador que as tarefas foram liberadas e as posições de PTL foram reservadas corretamente.
OBS: Somente romaneios com transportadora “Propria” deverão ser iniciados manualmente.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 57673270fe29ca0b

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
**Score:** — (semantico) | **ID:** 455ee191dc56401c

O Order Start no 3º Nível será utilizado quando a coleta do item iniciar neste nível, podendo ou não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas os volumes que iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Nível 2  
**Score:** — (semantico) | **ID:** 11b409ac5b95d190

O Order Start no 2º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Nível 1  
**Score:** — (semantico) | **ID:** e753753f97de1e3e

O Order Start no 1º Nível será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Order Start Fracionado Térreo  
**Score:** — (semantico) | **ID:** 654a29bb18a501fd

O Order Start no Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis 1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo (desktop), onde são exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2 ou 3.(Somente par consulta)
Será exibido o total de caixas necessárias para finalizar os pedidos integrados.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido automáticamente.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Fluxo Operacional de Picking Térreo  
**Score:** — (semantico) | **ID:** 70e966d9ef6b2940

O processo de Picking no Térreo ocorre após a leitura da caixa plástica no Order Start, onde o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Order Start e Leitura da Caixa Plástica:
O operador induz o volume na esteira, e o processo de Order Start ocorre após a passagem da caixa plástica pelo primeiro ponto de decisão (Scanner).
O WCS verifica automaticamente se há uma tarefa de coleta liberada e associa ao volume. Caso haja coleta, o volume será desviado automaticamente para o posto correspondente. Caso não haja o volume será desviado no primeiro posto e será informado nos leds e pdv o motivo do rejeito (falha de leitura da etiqueta/ Falta de pedidos integrados).
PBL (Picking by Light):
O após o desvio o WCS acende os LEDs de frente no posto de separação, sinalizando o local e a quantidade de itens a serem coletados. Os LEDs de frente exibirão 3 dígitos para identificar a quantidade de itens a serem coletados e serão únicos por posição.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um PDV para auxiliar o operador na coleta.
Exibição da Lista de Itens no PDV:
O PDV exibirá a lista de itens a serem coletados de acordo com o volume desviado e a quantidade de itens prevista, e se houver a observação do pedido também será exibido.
O operador realiza a coleta física do item e confirma a coleta pressionando o LED correspondente. Após pressionar o LED, o WCS confirma a coleta do item e a linha correspondente é pintada de verde no PDV.
Coleta de Itens nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas, o WCS acende os LEDs da frente em rosa para sinalizar a coleta na parte de picking costas, e também acende os LEDs de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente: o WCS irá informar o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking, permitindo que o operador colete de maneira eficiente e sem confusão.
O operador realiza a coleta de acordo com a indicação dos LEDs.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do PDV.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde para indicar que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** b697e5077051c4b6

Após a integração da onda de pedidos, o WCS identifica e quebra as tarefas, de forma que o que pode ser separado sem a necessidade de abrir a caixa seja direcionado ao processo de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo com a quantidade de caixas que serão separadas. Essa etapa permite ao operador decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do Final da Rua:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de forma que o operador inicie a coleta a partir do final da rua, de forma decrescente. Isso otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao ponto de indução de forma mais eficiente.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo operacional.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** 728f51d74b13d283

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de volumes sistêmicos nas posições dos Picking Carts. Cada Picking Cart terá seu próprio Order Start, e a posição do Picking Cart será vinculada a uma caixa plástica específica.
Existem dois tipos de Order Start para o Picking Cart:
Controlado: Neste modelo, a tarefa de picking é realizada em uma área com controle de acesso. O sistema monitora o tipo de produto para definir a qual Order Start a tarefa pertence, garantindo que somente pessoas autorizadas possam iniciar a tarefa na área controlada.
Não Controlado: Neste modelo, o processo de picking ocorre em uma área comum, onde não é necessário permissão de acesso, permitindo que qualquer operador inicie a tarefa de picking sem restrições.
A distinção entre os tipos de Order Start permite direcionar o picking controlado para operadores específicos, garantindo maior controle e segurança nas operações.
Mapeamento da Posição de Picking Cart:
Vinculação Inicial da Posição de Picking Cart à Caixa Plástica:
Antes de alocar o volume sistêmico, é necessário realizar o mapeamento da posição de Picking Cart. Neste primeiro passo, a posição de Picking Cart será associada a uma caixa plástica, mas ainda não haverá vínculo com o volume sistêmico. O mapeamento é realizado através de um leitor de mão integrado ao PDV, onde o operador escaneia a caixa plástica e associa essa caixa a uma posição específica do Picking Cart. Após finalizar o mapeamento, o operador deve clicar no botão “FINALIZAR MAPEAMENTO”.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart de uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a disponibilidade de caixas plásticas.
Exibição da Lista no PDV:
Exibição das Tarefas no PDV:
Após o mapeamento da caixa plástica com a posição de Picking Cart, o PDV exibirá a lista de tarefas de separação que devem ser realizadas. A lista será organizada de acordo com a regra de prioridade ou FIFO (First In, First Out), conforme as configurações definidas no sistema.
Leitura e Alocação da Posição de Picking Cart ao Volume Sistêmico:
Leitura da Posição de Picking:
O operador deve realizar a leitura da posição de Picking cart no PDV, onde as informações sobre as tarefas de separação estarão disponíveis. Na tela do PDV, o operador deverá confirmar a alocação da posição de Picking Cart ao volume sistêmico que está sendo separado, clicando na opção correspondente.
Repetição do Processo:
Repetir para Outras Posições de Picking Cart:
O operador deve repetir o processo de leitura e alocação para todas as outras posições de Picking Cart que possuam caixas plásticas vinculadas. Ele não pode ir para a tela de coleta até que todas as posições que tenham caixas vinculadas sejam atribuídas a uma tarefa de separação. Caso contrário, ele só poderá avançar quando todas as tarefas de separação forem vinculadas às respectivas caixas plásticas ou até que as tarefas acabem.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 601af7d94f713238

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Controle de pedidos, Order Start, Picking Cart, Picking Coletor, Conferência, PTW e PTL, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** c0a9ebc45ecefdb4

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de volumes sistêmicos nas caixas plásticas. Cada Picking Cart terá seu próprio Order Start, e a caixa plástica será vinculada a uma posição do Picking Cart específica.
Mapeamento da Posição de Picking Cart:
Vinculação Inicial da Posição de Picking Cart à Caixa Plástica:
É necessário realizar o mapeamento da posição de Picking Cart. Neste primeiro passo, o operador deve selecionar a zona que irá atuar, e então associar a posição de Picking Cart a uma caixa plástica. O mapeamento é realizado através de um leitor de mão integrado ao PDV, onde o operador escaneia a caixa plástica e associa essa caixa a uma posição específica do Picking Cart realizando a leitura do código do endereço do picking cart. Após finalizar o mapeamento, o operador deve clicar no botão “FINALIZAR MAPEAMENTO”.
OBS: Com as caixas definidas em suas respectivas posições, o sistema automaticamente irá atrelar as tarefas de coleta, de acordo com as regras de priorização de pedidos (mencionado no item 4.1) para todas as caixas vinculadas ao Picking cart.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart de uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a disponibilidade de caixas plásticas.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Order Start Coletor  
**Score:** — (semantico) | **ID:** 5627a0b0a9c82ba1

O Sistema irá segregar a coleta dos pedidos seguindo os cadastros das zonas realizado pela operação, gerando ordens de separação pelas áreas que os coletores irão atuar.
O operador deverá informar qual será sua zona de separação e qual carrinho está sendo utilizado.
Com o carrinho definido, o sistema automaticamente irá atrelar a próxima tarefa de coleta, de acordo com as regras de priorização de pedidos (mencionado no item 3.1) para o carrinho informado.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 5a661ffec307ce08

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Controle de pedidos, Order Start, Picking Cart, Picking Coletor, Conferência, PTW e PTL, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** 798bd06aac7a51f7

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de volumes sistêmicos nas caixas plásticas. Cada Picking Cart terá seu próprio Order Start, e a caixa plástica será vinculada a uma posição do Picking Cart específica.
Mapeamento da Posição de Picking Cart:
Vinculação Inicial da Posição de Picking Cart à Caixa Plástica:
É necessário realizar o mapeamento da posição de Picking Cart. Neste primeiro passo, o operador deve selecionar a zona que irá atuar, e então associar a posição de Picking Cart a uma caixa plástica. O mapeamento é realizado através de um leitor de mão integrado ao PDV, onde o operador escaneia a caixa plástica e associa essa caixa a uma posição específica do Picking Cart realizando a leitura do código do endereço do picking cart. Após finalizar o mapeamento, o operador deve clicar no botão “FINALIZAR MAPEAMENTO”.
OBS: Com as caixas definidas em suas respectivas posições, o sistema automaticamente irá atrelar as tarefas de coleta, de acordo com as regras de priorização de pedidos (mencionado no item 4.1) para todas as caixas vinculadas ao Picking cart.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart de uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a disponibilidade de caixas plásticas.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Order Start Coletor  
**Score:** — (semantico) | **ID:** 8250dd8aa8df2bfd

O Sistema irá segregar a coleta dos pedidos seguindo os cadastros das zonas realizado pela operação, gerando ordens de separação pelas áreas que os coletores irão atuar.
O operador deverá informar qual será sua zona de separação e qual carrinho está sendo utilizado.
Com o carrinho definido, o sistema automaticamente irá atrelar a próxima tarefa de coleta, de acordo com as regras de priorização de pedidos (mencionado no item 3.1) para o carrinho informado.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Order Start / Operação  
**Score:** — (semantico) | **ID:** 39df1e628c4436eb

O processo de separação dos pedidos começa no Order Start (Responsabilidade TPC), onde o operador emite uma etiqueta (Responsabilidade TPC) identificando a caixa que será transportada pela linha.
Se a etiqueta estiver ilegível, posicionada no lado oposto ao do scanner ou de qualquer outra forma que impeça sua identificação, a caixa seguirá diretamente para as estações de conferência, e a tratativa dessa caixa será realizada (Dentro do sistema TPC).
Os volumes a serem transportados serão 6 tipos de caixas de papelão, e não teremos produtos fora da caixa, caso seja necessária uma reimpressão de etiqueta, será de (Responsabilidade TPC). As caixas devem ser posicionadas sempre com a etiqueta do mesmo lado para garantir a leitura correta.
MODELOS DE CAIXAS: Embalagens para transporte de papelão conforme detalhamento técnico abaixo, (TPC).
CX PAPELAO 320 X 200 X 175MM (PP)
CX PAPELAO 400 X 320 X 175MM (P)
CX PAPELAO 500 X 300 X 300MM (M)
CX PAPELAO 650 X 400 X 300MM (G)
CX PAPELAO 350 X 240 X 140MM (MT)
CX PAPELAO 500 X 300 X 175MM (ME)
OBS: Os tamanhos EP, GG e GM ficam fora da especificação dos transportadores.
A cubagem dos pedidos e a ordem de inserção das caixas no sistema será realizada pelo WMS do cliente, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Order Start / Operação  
**Score:** — (semantico) | **ID:** 5f1de38d1c36683b

O processo de separação dos pedidos começa no Order Start (responsabilidade TPC), onde o operador emite uma etiqueta (responsabilidade TPC) identificando a caixa que será transportada pela linha.
Se a etiqueta estiver ilegível, posicionada no lado oposto ao dos scanners ou de qualquer outra forma que impeça sua identificação, a caixa seguirá diretamente para as estações de conferência, e a tratativa dessa caixa será realizada (dentro do sistema TPC).
Os volumes a serem transportados serão 4 tipos de caixas de papelão, e não teremos produtos fora da caixa, caso seja necessária uma reimpressão de etiqueta, será de (responsabilidade TPC). As caixas devem ser posicionadas sempre com a etiqueta do mesmo lado para garantir a leitura correta.
A cubagem dos pedidos e a ordem de inserção das caixas no sistema será realizada pelo WMS do cliente, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Estações de Separação  
**Score:** — (semantico) | **ID:** d1a6e0c83d8ae505

Após a caixa ser iniciada no order start, será encaminhada para o 2º Nível do mezanino, a leitura da etiqueta será realizada através de um scanner fixo, para identificar se tem pedido a ser separado neste nível.
Após a caixa ser iniciada no order start, a caixa será encaminhada para o 2º Nível do mezanino, a leitura da etiqueta será realizada através de um scanner fixo, para identificar se tem pedido a ser separado neste nível.  caso haja algum SKU para ser separado neste nível, a caixa será desviada, se não houver nenhuma ordem de separação para o nível atual ela seguirá pela linha expressa para o 01º nível do mezanino, caso haja algum SKU para ser separado neste nível, a caixa será desviada, se não houver nenhuma ordem de separação para o nível atual ela seguirá pela linha expressa para o Térreo.
Após a separação dos produtos, o operador deve inserir a caixa novamente na linha em qualquer posição. Dessa forma, se a caixa for inserida antes do scanner de leitura, o sistema reconhecerá que ela já passou pela estação e a encaminhará diretamente para a próxima, evitando que a caixa passe pela mesma estação mais de uma vez.
É importante destacar que o sistema VELOX é responsável apenas pelo transporte e desvio das caixas nas estações. Portanto, toda a operação de separação, ressuprimento e verificação de falta de itens/SKUs nas estações é de (responsabilidade TPC).

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** bfc3ad1ac54113bb

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes e produtos separados nas estações de picking, ou seja, esta aplicação executara a rotina de SEPARAÇÃO, tendo como papel fundamental a interface entre os sistemas VELOX e EWM, com chão de fábrica Invent.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre os sistemas Velox e EWM, com as estações de trabalho, através de interface Web (Rest JSON), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** ff5a08eadb78c5e3

Será 1 (um) order start no início da linha.
Para iniciar o processo, o sistema Velox deverá receber via integração (Order) todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade, para os pedidos recebidos, caso seja necessário priorizar um pedido específico ou uma onda especifica, deverá ser feito manualmente no sistema Velox.
No momento em que o sistema Velox receber essas informações, realiza o processo de cubagem e gera os volumes necessários para cada pedido a ser separado.
Ao realizar a cubagem do pedido, o sistema Velox fará o cálculo da quantidade dos produtos solicitados para separação recebida na integração com a informação da quantidade de embalagem do produto, com esse cálculo o sistema Velox fará a distinção do que o operador deverá separar fracionado e full case (caixa fechada).
Ao realizar a cubagem do pedido, sistema Velox realiza a impressão das etiquetas dos volumes gerados, tanto fracionados quanto full case (caixa fechada).
Conforme a cubagem realizada pelo sistema Velox, informará na tela do order start os tipos de caixas solicitados para atender os volumes daquele pedido.
Operador então, fixa a etiqueta do volume conforme o tipo de caixa solicitado conforme a cubagem, e induz a caixa na esteira para seguir para a primeira estação de separação.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** f1a510c9fd9b8fb6

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes e produtos separados nas estações de picking, ou seja, esta aplicação executara a rotina de SEPARAÇÃO, tendo como papel fundamental a interface entre os sistemas VELOX e EWM, com chão de fábrica Invent.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre os sistemas Velox e EWM, com as estações de trabalho, através de interface Web (Rest JSON), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** b6aa1eb287b1ade5

Será 1 (um) order start no início da linha.
Para iniciar o processo, o sistema Velox deverá receber via integração (Order) todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade, para os pedidos recebidos, caso seja necessário priorizar um pedido específico ou uma onda especifica, deverá ser feito manualmente no sistema Velox.
No momento em que o sistema Velox receber essas informações, realiza o processo de cubagem e gera os volumes necessários para cada pedido a ser separado.
Ao realizar a cubagem do pedido, o sistema Velox fará o cálculo da quantidade dos produtos solicitados para separação recebida na integração com a informação da quantidade de embalagem do produto cadastrado no sistema Velox, com esse cálculo o sistema Velox fará a distinção do que o operador deverá separar fracionado e full case (caixa fechada).
Ao realizar a cubagem do pedido, sistema Velox realiza a impressão das etiquetas dos volumes gerados, Velox deverá realizar a cubagem dos produtos do pedido e gerar volumes separados:
Controlados (Separação Fracionada)
Não Controlados (Separação Fracionada)
Caixa Fechada (Separação Full Case)
Conforme a cubagem realizada pelo sistema Velox, informará na tela do order start os tipos de caixas solicitados para atender os volumes daquele pedido.
Operador então, fixa a etiqueta do volume conforme o tipo de caixa solicitado conforme a cubagem, e induz a caixa na esteira para seguir para a primeira estação de separação.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 06c3f63d66940fc8

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes e produtos separados nas estações de picking, ou seja, esta aplicação executara a rotina de SEPARAÇÃO, tendo como papel fundamental a interface entre os sistemas VELOX e EWM, com chão de fábrica Invent.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre os sistemas Velox e EWM, com as estações de trabalho, através de interface Web (Rest JSON), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** b0a8d867258b6a36

Será 1 (um) order start no início da linha.
Para iniciar o processo, o sistema Velox deverá receber via integração (Order) todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade, para os pedidos recebidos, caso seja necessário priorizar um pedido específico ou uma onda especifica, deverá ser feito manualmente no sistema Velox.
No momento em que o sistema Velox receber essas informações, realiza o processo de cubagem e gera os volumes necessários para cada pedido a ser separado.
Ao realizar a cubagem do pedido, o sistema Velox fará o cálculo da quantidade dos produtos solicitados para separação recebida na integração com a informação da quantidade de embalagem do produto cadastrado no sistema Velox, com esse cálculo o sistema Velox fará a distinção do que o operador deverá separar fracionado e full case (caixa fechada).
Ao realizar a cubagem do pedido, sistema Velox realiza a impressão das etiquetas dos volumes gerados, Velox deverá realizar a cubagem dos produtos do pedido e gerar volumes separados:
Controlados (Separação Fracionada)
Não Controlados (Separação Fracionada)
Caixa Fechada (Separação Full Case)
Conforme a cubagem realizada pelo sistema Velox, informará na tela do order start os tipos de caixas solicitados para atender os volumes daquele pedido.
Operador então, fixa a etiqueta do volume conforme o tipo de caixa solicitado conforme a cubagem, e induz a caixa na esteira para seguir para a primeira estação de separação.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 57e8fd535f8b4ff0

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes e produtos separados nas estações de picking, ou seja, esta aplicação executara a rotina de SEPARAÇÃO, tendo como papel fundamental a interface entre os sistemas VELOX e EWM, com chão de fábrica Invent.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre os sistemas Velox e EWM, com as estações de trabalho, através de interface Web (Rest JSON), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 7a25869dc9b768f4

Será 1 (um) order start no início da linha.
Para iniciar o processo, o sistema Velox deverá receber via integração (Order) todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade, para os pedidos recebidos, caso seja necessário priorizar um pedido específico ou uma onda especifica, deverá ser feito manualmente no sistema Velox.
No momento em que o sistema Velox receber essas informações, realiza o processo de cubagem e gera os volumes necessários para cada pedido a ser separado.
Ao realizar a cubagem do pedido, o sistema Velox fará o cálculo da quantidade dos produtos solicitados para separação recebida na integração com a informação da quantidade de embalagem do produto cadastrado no sistema Velox, com esse cálculo o sistema Velox fará a distinção do que o operador deverá separar fracionado e full case (caixa fechada).
Ao realizar a cubagem do pedido, sistema Velox realiza a impressão das etiquetas dos volumes gerados, Velox deverá realizar a cubagem dos produtos do pedido e gerar volumes separados:
Controlados (Separação Fracionada)
Não Controlados (Separação Fracionada)
Caixa Fechada (Separação Full Case)
Conforme a cubagem realizada pelo sistema Velox, informará na tela do order start os tipos de caixas solicitados para atender os volumes daquele pedido.
Operador então, fixa a etiqueta do volume conforme o tipo de caixa solicitado conforme a cubagem, e induz a caixa na esteira para seguir para a primeira estação de separação.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Fracionados Controlados  
**Score:** — (semantico) | **ID:** 5f7293a2f28f66c7

Linha Controlados (Frente e Posterior (costas))
1 (um) operador por estação.
1 (uma) linha de separação frente e costas;
Frente com 148 (cento e quarenta e oito) posições/sku.
Frente com 1 (um) led 3 (dígitos) com botão por posição/sku.
Posterior (Costas) com 160 (cento e sessenta) posições/sku.
5 (cinco) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Cada posição frente será composta por:
1 (um) led 3 (dígitos) com botão por posição/sku.
Posições posteriores (costas) não terá leds, as posições serão informadas na tela do PDV da estação.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Fracionados Não Controlados  
**Score:** — (semantico) | **ID:** 3b7b22d8cb419758

Linha Não Controlados (Frente e Posterior (costas))
1 (um) operador por estação.
1 (uma) linha de separação frente e costas;
Frente com 180 (cento e oitenta) posições/sku.
Frente com 1 (um) led 3 (dígitos) com botão por posição/sku.
Posterior (Costas) com 160 (cento e sessenta) posições/sku.
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
Caso não tenha nenhum produto a ser separado na estação atual, os leds devem acender na cor vermelho;
Verificar os leds acesos na are de picking frente, solicitando quantidade de separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso seja validado, tela do PDV fica verde;
Caso não seja validado, tela do PDV fica vermelho;
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
Ao finalizar a separação de todas as posições de separação posteriores (costas), todos os leds da frente acenderão na cor "Verde", informando ao usuário que o picking foi concluído 100%;
Operador deve apertar qualquer dos botões acesos em verde, para que se apague os leds.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 1c58623d6df42069

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes e produtos separados nas estações de picking, ou seja, esta aplicação executara a rotina de SEPARAÇÃO, tendo como papel fundamental a interface entre os sistemas VELOX e EWM, com chão de fábrica Invent.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre os sistemas Velox e EWM, com as estações de trabalho, através de interface Web (Rest JSON), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 4daea880e1cefe27

Será 1 (um) order start no início da linha.
Para iniciar o processo, o sistema Velox deverá receber via integração (Order) todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade, para os pedidos recebidos, caso seja necessário priorizar um pedido específico ou uma onda especifica, deverá ser feito manualmente no sistema Velox.
No momento em que o sistema Velox receber essas informações, realiza o processo de cubagem e gera os volumes necessários para cada pedido a ser separado.
Ao realizar a cubagem do pedido, o sistema Velox fará o cálculo da quantidade dos produtos solicitados para separação recebida na integração com a informação da quantidade de embalagem do produto, com esse cálculo o sistema Velox fará a distinção do que o operador deverá separar fracionado e full case (caixa fechada).
Ao realizar a cubagem do pedido, sistema Velox realiza a impressão das etiquetas dos volumes gerados, tanto fracionados quanto full case (caixa fechada).
Conforme a cubagem realizada pelo sistema Velox, informará na tela do order start os tipos de caixas solicitados para atender os volumes daquele pedido.
Operador então, fixa a etiqueta do volume conforme o tipo de caixa solicitado conforme a cubagem, e induz a caixa na esteira para seguir para a primeira estação de separação.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** 4b9d813dbe191089

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
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 3bd06c61b48f7d15

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes e produtos separados nas estações de picking, ou seja, esta aplicação executara a rotina de SEPARAÇÃO, tendo como papel fundamental a interface entre os sistemas VELOX e EWM, com chão de fábrica Invent.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre os sistemas Velox e EWM, com as estações de trabalho, através de interface Web (Rest JSON), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 2bda073065d46c0c

Será 1 (um) order start no início da linha.
Para iniciar o processo, o sistema Velox deverá receber via integração (Order) todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade, para os pedidos recebidos, caso seja necessário priorizar um pedido específico ou uma onda especifica, deverá ser feito manualmente no sistema Velox.
No momento em que o sistema Velox receber essas informações, realiza o processo de cubagem e gera os volumes necessários para cada pedido a ser separado.
Ao realizar a cubagem do pedido, o sistema Velox fará o cálculo da quantidade dos produtos solicitados para separação recebida na integração com a informação da quantidade de embalagem do produto cadastrado no sistema Velox, com esse cálculo o sistema Velox fará a distinção do que o operador deverá separar fracionado e full case (caixa fechada).
Ao realizar a cubagem do pedido, sistema Velox realiza a impressão das etiquetas dos volumes gerados, Velox deverá realizar a cubagem dos produtos do pedido e gerar volumes separados:
Controlados (Separação Fracionada)
Não Controlados (Separação Fracionada)
Caixa Fechada (Separação Full Case)
Conforme a cubagem realizada pelo sistema Velox, informará na tela do order start os tipos de caixas solicitados para atender os volumes daquele pedido.
Operador então, fixa a etiqueta do volume conforme o tipo de caixa solicitado conforme a cubagem, e induz a caixa na esteira para seguir para a primeira estação de separação.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Fracionados Controlados  
**Score:** — (semantico) | **ID:** 20ad2b727870314a

Linha Controlados (Frente e Posterior (costas))
1 (um) operador por estação.
1 (uma) linha de separação frente e costas;
Frente com 148 (cento e quarenta e oito) posições/sku.
Frente com 1 (um) led 3 (dígitos) com botão por posição/sku.
Posterior (Costas) com 160 (cento e sessenta) posições/sku.
5 (cinco) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Cada posição frente será composta por:
1 (um) led 3 (dígitos) com botão por posição/sku.
Posições posteriores (costas) não terá leds, as posições serão informadas na tela do PDV da estação.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Fracionados Não Controlados  
**Score:** — (semantico) | **ID:** 26f2e6d42fa08fab

Linha Não Controlados (Frente e Posterior (costas))
1 (um) operador por estação.
1 (uma) linha de separação frente e costas;
Frente com 180 (cento e oitenta) posições/sku.
Frente com 1 (um) led 3 (dígitos) com botão por posição/sku.
Posterior (Costas) com 160 (cento e sessenta) posições/sku.
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
Caso não tenha nenhum produto a ser separado na estação atual, os leds devem acender na cor vermelho;
Verificar os leds acesos na are de picking frente, solicitando quantidade de separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso seja validado, tela do PDV fica verde;
Caso não seja validado, tela do PDV fica vermelho;
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
Ao finalizar a separação de todas as posições de separação posteriores (costas), todos os leds da frente acenderão na cor "Verde", informando ao usuário que o picking foi concluído 100%;
Operador deve apertar qualquer dos botões acesos em verde, para que se apague os leds.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido devido à falta de produto.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 3a84a481dc67d436

Para iniciar o processo, o sistema Velox, deverá receber via integração todas as informações dos pedidos para separação de fracionados e desvios corretos de full case, previstos para a operação atual.

---
**Origem:** [I23.1602] 2023 — `I23.1602 - DOCUMENTO DE ESPECIFICAÇÃO REV1- SEPARAÇÕES ET.VELOX - PETER.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** bee7317600809f60

Na estação de order start deverá conter uma impressora de etiqueta e um leitor de código de barras, para que no sistema Kaizen, operador deverá realizar o vínculo da caixa plástica (VID) com o volume do pedido (VEN).
Após o vínculo da caixa ao volume do pedido, Kaizen envia a integração do pedido vinculado a caixa VID para o Velox.

---
**Origem:** [I23.1602] 2023 — `I23.1602 - DOCUMENTO DE ESPECIFICAÇÃO REV1- SEPARAÇÕES ET.VELOX - PETER.docx`  
**Heading:** Conferência ET  
**Score:** — (semantico) | **ID:** f033e6f4bea8279d

Próximo a estação de Order start da automação Invent, terá uma estação de conferência ET para os volumes que forem separados pelo Picking Cart ET da Kaizen, por algum motivo necessitem passar pela conferência.
Operador ao finalizar a separação no ET, caso haja a necessidade de passar por conferência, operador do picking cart, aloca a caixa plástica na estação de conferência, e após conferência realizada, transfere manualmente a caixa para a estação de packing.
Caso o volume não tenha necessidade de passar pela conferência, operador aloca a caixa na estação de packing.

---
**Origem:** [I23.1615] 2023 — `I24.114-ESPECIFICACAO DE SOFTWARE - ADITIVO - IMPRESSÃO BOLETO.docx`  
**Heading:** Regra de Impressão do Order Start  
**Score:** — (semantico) | **ID:** d6f58f30bae63f03

Pedidos com flag "boleto" = true (precisa de boleto):
Para o primeiro volume de todos os pedidos com essa flag, o WCS deverá imprimir duas etiquetas: uma para o boleto e outra para o volume do pedido.
Pedidos com flag "boleto" = false (não precisa de boleto):
Somente a etiqueta de volume será impressa para todos os volumes do pedido.
Considerações Finais:
A alteração no payload de pedidos inclui agora os dados do boleto através do campo metadata.
O WCS irá verificar o campo "boleto" e processar a impressão das etiquetas de boleto e volume conforme necessário, garantindo que os pedidos com boleto recebam as etiquetas correspondentes.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 4cbb8601204aff4c

Será 1 (um) Order Start no início da linha.
Para iniciar o processo, o sistema Velox, deverá receber via integração todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade para os pedidos recebidos, caso seja necessário priorizar um pedido em específico, deverá ser feito manualmente na tela do order start.
No momento em que o sistema Velox receber essas informações, realiza o processo de cubagem e gera os volumes necessários para cada volume gerado do pedido a ser separado.
Operador terá disponivel fisicamente, um buffer de caixas de reuso montadas e disponíveis para serem reutilizadas, próximo ao order start.
Baseado no cálculo de cubagem, o sistema Velox gera a quantidade de volumes necessários para o pedido e informa na tela do order start, quais os tipos de caixas e a quantidade necessária para atender aquele pedido.
VELOX realiza a impressão da etiqueta dos volumes gerados para o pedido, operador fixa a etiqueta na caixa solicitada, e induz a caixa na linha para seguir para a separação.
Exemplo sugestão de tela de order start:

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Balanceamento (1 x 1)  
**Score:** — (semantico) | **ID:** 7094a17bd4abb786

Sistema Velox estará preparado para caso exista a necessidade de alocação de 1 (um) mesmo item cadastrado em diferentes postos.
Mesmo item cadastrado nos 3 (três) postos de separação:
VELOX fará o balanceamento cadenciando as caixas, realizando a separação de 1 (uma) volume por posto, ou seja, se tivermos 3 (três) volumes solicitando a separação do mesmo item que existe nos 3 (três) postos, o VELOX irá realizar a separação da primeira caixa no posto 3 (três) no final da linha, a segunda caixa será separada no posto 2 (dois) e a terceira caixa será separada no posto 1 (um) no início da linha, com isso a linha de separação segue com máxima fluidez.
O algoritmo de balanceamento será sempre executado quando iniciar um volume no Order Start, assim, montará a melhor rota possível para o pedido.
Após a verificação se algum dos postos atende o pedido por completo, caso tenha mais de um que consiga atender, o algoritmo irá verificar a ordem de priorização de postos.
Ordem de priorização de postos:
Priorizar o posto que não foi usado por último
Priorizar o posto menos usado até o momento
Após consenso dos postos a serem utilizados, o VELOX devolverá o algoritmo para quem solicitou a relação de postos para atender o pedido, indicando itens que devem ser separados em cada posto, já na ordem para passar pela linha.

---
**Origem:** [I23.1701] 2023 — `I23.1701 - PROJ OLIMPO - ESPECIFICACAO DE SOFTWARE - ADITIVO.docx`  
**Heading:** Tela – Consulta de histórico de caixas plástica (3)  
**Score:** — (semantico) | **ID:** cc8208bb039a460a

Ajuste para incluir a informação do QR Code ou EAN lido no momento da separação, na coluna adicional deve disponibilizar a informação do conteúdo lido.
Conforme exemplo abaixo:
Obs.: Atualmente só é possível consultar na tela de log: WS X MFC.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1[1].docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 32fccf824bae3909

Os volumes a serem transportados no sistema são caixas de papelão ou caixas plásticas, não teremos produtos fora da caixa.
A capacidade nominal da linha será de até 2500 caixas por hora.
O sistema MFC receberá do WMS – FL a integração com o cadastro de produtos e suas dimensões.
Na caixa haverá um QRCODE indicando o tamanho da caixa.
Em caso de Noread no início da linha, a caixa será desviada na primeira estação, e o operador entrega essa caixa para ser verificada. (Primeira saída será para rejeito).
Tipos de produtos:
- Variados (Transportadora)

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 6d2a247a2abdf9c5

Os volumes a serem transportados no sistema são caixas de papelão ou caixas plásticas, não teremos produtos fora da caixa.
O sistema MFC receberá do sistema da Dellavolpe a informação do que será passado pelo portal de leitura do sorter, não teremos cadastro de produtos.
Em caso de Noread no portal de leitura do sorter, a caixa será desviada na primeira saída e o operador realiza a tratativa do rejeito e induz novamente no sorter (antes do portal de leitura).
Tipos de produtos:
- Variados (Transportadora)

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 866d8767c75cb191

Será 1 (um) Order Start no início da linha.
Para iniciar o processo, o sistema WCS, deverá receber via integração todas as informações dos pedidos para separação. WCS separa até 16 clientes de maneira simultânea.
Sistema WCS fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Observação: Deverá ser integrado os pedidos que estão com os clientes ativos na saída do sorter, caso contrário será direcionado para rejeito.
A operação realizada no sorter deve ser feita por ondas, sendo assim deverá ser finalizada toda a onda de clientes para iniciar a próxima.
Não existe regra de prioridade para os pedidos recebidos, caso seja necessário priorizar um pedido em específico, deverá ser feito manualmente na tela do Order Start.
Operador terá disponível fisicamente, um buffer de caixas de reuso montadas e disponíveis para serem reutilizadas, próximo ao Order Start.
WCS realiza a impressão da etiqueta dos volumes gerados para o pedido, operador fixa a etiqueta na caixa solicitada, e induz a caixa na linha para seguir com a separação. A caixa informada pelo WCS será a caixa final utilizada por todos os processos realizados na esteira Invent até a entrega ao cliente final.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 31aaee5bff38d9ad

Será 1 (um) Order Start no início da linha.
Para iniciar o processo, o sistema WCS, deverá receber via integração todas as informações dos pedidos para separação. WCS separa até 16 clientes de maneira simultânea.
Sistema WCS fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Observação: Deverá ser integrado os pedidos que estão com os clientes ativos na saída do sorter, caso contrário será direcionado para rejeito.
A operação realizada no sorter deve ser feita por ondas, sendo assim deverá ser finalizada toda a onda de clientes para iniciar a próxima.
Não existe regra de prioridade para os pedidos recebidos, caso seja necessário priorizar um pedido em específico, deverá ser feito manualmente na tela do Order Start.
Operador terá disponível fisicamente, um buffer de caixas de reuso montadas e disponíveis para serem reutilizadas, próximo ao Order Start.
WCS realiza a impressão da etiqueta dos volumes gerados para o pedido, operador fixa a etiqueta na caixa solicitada, e induz a caixa na linha para seguir com a separação. A caixa informada pelo WCS será a caixa final utilizada por todos os processos realizados na esteira Invent até a entrega ao cliente final.
O processo de Order Start é iniciado no início da linha de separação e é o ponto de partida para a indução das caixas no sistema. Neste momento, o WCS já deve ter recebido via integração todos os dados dos pedidos a serem processados, incluindo suas respectivas ondas, volumes, tipos de caixas e informações de cubagem. O sistema WCS permite que até 16 clientes sejam operados simultaneamente, gerando uma fila organizada com base na ordem de chegada das integrações.
Ao receber a integração, o WCS organiza os pedidos em fila e disponibiliza ao operador uma lista com as caixas que deverão ser impressas e preparadas. O operador então realiza a impressão das etiquetas, fixa cada uma na caixa correspondente, e induz essas caixas na linha de separação. Cada caixa informada pelo WCS representa a embalagem final que será utilizada até a entrega ao cliente, não havendo necessidade de reembalagem no setor de packing.
É importante observar que não há regra de prioridade automatizada entre os pedidos. Caso seja necessário priorizar algum volume específico, o operador deve realizar essa ação manualmente através da interface da tela do Order Start. Além disso, o sistema só deve receber pedidos de clientes que estejam ativos na saída do sorter; pedidos fora desse critério não serão exibidos na tela de Order Start.
As caixas utilizadas no processo são montadas previamente e posicionadas em buffer físico próximo ao Order Start, permitindo que o operador as selecione de forma rápida conforme a demanda apresentada na tela. Ao concluir a preparação, o operador induz as caixas na esteira, dando início à jornada dos volumes até os postos de separação.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** cf4c84032c0551b8

Será 1 (um) Order Start no início da linha.
Para iniciar o processo, o sistema WCS, deverá receber via integração todas as informações dos pedidos para separação. WCS separa até 16 clientes de maneira simultânea.
Sistema WCS fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Observação: Deverá ser integrado os pedidos que estão com os clientes ativos na saída do sorter, caso contrário será direcionado para rejeito.
A operação realizada no sorter deve ser feita por ondas, sendo assim deverá ser finalizada toda a onda de clientes para iniciar a próxima.
Não existe regra de prioridade para os pedidos recebidos, caso seja necessário priorizar um pedido em específico, deverá ser feito manualmente na tela do Order Start.
Operador terá disponível fisicamente, um buffer de caixas de reuso montadas e disponíveis para serem reutilizadas, próximo ao Order Start.
WCS realiza a impressão da etiqueta dos volumes gerados para o pedido, operador fixa a etiqueta na caixa solicitada, e induz a caixa na linha para seguir com a separação. A caixa informada pelo WCS será a caixa final utilizada por todos os processos realizados na esteira Invent até a entrega ao cliente final.

---
**Origem:** [I23.3917] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 1b2dd35ea65ddb3b

O order start será automatico, assim, para iniciar o processo, o sistema Velox fará o vínculo de pedidos e caixas a serem liberadas no order start, e quando a caixa for liberada e lida no order start a mesma será vinculada com um pedido.
A caixa a ser liberada pelo order start deve conter um código de barras único de identificação.

---
**Origem:** [I23.418] 2023 — `I21.103-Projeto Reisado - ESPECIFICACAO DE SOFTWARE.docx`  
**Heading:** Tela de reimpressão/impressão  
**Score:** — (semantico) | **ID:** 3636e5b443db3b58

Apenas o colaborador que tiver acesso no grupo "FULL CASE" será permitido realizar a reimpressão
(1ª via) Impressão qualquer usuário/grupo pode realizar, seja do Order Start ou full case através da tela consulta geral. Caso ela já tenha sido impressa, deve subir um pop-up notificando que essa impressão já foi realizada anteriormente.
(2ª via) Quando o usuário realizar a reimpressão, deve subir um pop-up apresentando os motivos de reimpressão para que ele possa selecionar 1 motivo, será possível conceder a impressão após isso.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Contingência  
**Score:** — (nome-topico) | **ID:** 4be659cdcbbc027c

No sistema Velox, terá o parâmetro de “Contingência” que o operador poderá ativar/desativar conforma a necessidade da operação.
Ao ativar a operação em “Contingência” no sistema Velox, o Velox passa a validar apenas a informação do campo de “destino”, pois nesse caso, poderá acontecer de o campo “valida” vir com a informação “false”, nesse caso irá desconsiderar as informações que receber nesse campo de “valida”.
Ao desativar a operação em “Contingência” no sistema Velox, o Velox passa a validar as informações dos campos “destino” e “valida” conforme operação Normal descrita no item 4.10.1.
A contingência será ativada/desativada apenas com nível de usuario específico superior.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Order Start (WMS)  
**Score:** — (semantico) | **ID:** fc82c760ef887316

Será 1 order start no início da esteira de indução, o order start será controlado pelo WMS, o operador deverá imprimir a etiqueta (gerada pelo WMS) do volume de separação, após imprimir a etiqueta, operador deverá fixar a etiqueta no local correto da caixa de separação, e induzir na esteira para seguir para os postos de separação.
Ao chegar no leitor (fixo) de código de barras (QR Code) na esteira, a caixa será lida e reconhecida pelo sistema Velox, caso tenha produtos a serem separados naquele posto, a caixa será desviada para o posto de separação, os Leds das posições daquele posto serão acesos na cor azul, com as quantidades solicitadas para separação e o PDV também auxiliara na identificação das posições e produtos devem ser separados.
Caso não exista itens a serem separados no posto, a caixa não será desviada e seguirá automaticamente para o próximo posto.
Equipamentos estação de trabalho order start:
1 Desktop
1 Impressora de etiquetas

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 3a54e0effa9a0428

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
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** b0f82fb5920b8e58

CRIAR UMA TELA FAZENDO O VÍNCULO DE USUARIO E POSTO FLOWRACK E TER A RASTREABILIDADE DOS USUARIOS NOS DEMAIS POSTOS FORA DO FLOWRACK
TER UMA FORMA DE TRIAGEM DO OPERADOR POR ESTAÇÃO/POSTO/SETOR NESTA TRIAGEM SERA FEITA POR USUARIO, HORARIO INICIO, HORARIO FINAL E POSTO.
Será 1 (um) Order Start no início da linha de separação, o order start será composto com uma estação de trabalho com computador e impressora de etiquetas para que o operador realize a impressão de etiquetas e cole na caixa de separação, e para que, caso não ocorra a leitura da etiqueta da caixa no order start, consiga tratar a caixa que houve o erro, imprimindo uma nova etiqueta e induzindo novamente no order start.
NO PROCESSO DE COLETA DE FRACIONADO NA LINHA DE FLOWRACK NÃO SERÁ NECESSÁRIO A IMPRESSÃO DE UMA ETIQUETA POR CAIXA, POIS JÁ ESTARAÃO IDENTIFICADAS, SERA APENAS NECESSÁRIO REALIZAR O VÍNCULO DE PEDIDO E CAIXA.
PARA A COLETA DE FULL CASE, GRANDES VOLUMES E GELADEIRAS, SERÁ NECESSÁRIA A IMPRESSÃO DE ETIQUETA POR VOLUME.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item de integração de pedido acima.
Antes de iniciar os pedidos, WCS deve validar se a quantidade de saldo nas posições é suficiente para atender os pedidos, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender o pedido, o mesmo não poderá ser iniciado e o WCS deverá seguir a operação de reabastecimento.
Os volumes a serem transportados na esteira, serão caixas plásticas, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
O ORDER START QUE O VOLUME IRÁ INICIAR DEPENDE DA MENOR CURVA DE GIRO PRESENTE NO VOLUME, OU SEJA SE O VOLUME INICIAR COM O PICKING FUNDO E MARKETING DEVE SE INICIAR EM SEUS RESPECTIVOS ORDER START E POSTERIORMENTE SER INDUZIDO NA ESTEIRA.
CASO O VOLUME NÃO POSSUA SEPARAÇÃO NO PICKING FUNDO E MARKETING SERÁ DIRETAMENTE INICIADO NO ORDER START DO FLOWRACK.
SEPARAÇÃO DE GRANDES VOLUMES, FULL CASE E GELADEIRA SERÃO INICIADOS NO ORDER START DO FLOWRACK POIS É NECESSÁRIO A IMPRESSÃO DE ETIQUETAS POR VOLUME.
Operador no order start deverá realizar a impressão (caso necessário) da etiqueta de caixa picking e fixar na caixa plástica, e induzir a caixa na linha de separação, leitor do início da linha ao realizar a leitura dessa etiqueta faz o vínculo com o primeiro volume do pedido integrado, caso não realize a leitura do código de barras da caixa, a caixa é rejeitada no início da linha.
Funcionalidades na Tela do Order Start:
Priorizar Pedidos: Na tela do Order Start será possível organizar os pedidos de acordo com sua prioridade, permitindo que o operador visualize somente os pedidos em aberto por exemplo e tenha acesso rápido ao status e à quantidade de itens.
VISUALIZAÇÃO PRÉVIA DE QUANTOS VOLUMES DO PEDIDO ESTÁ SENDO PREVISTO.
Visualização por tipo de Picking: Na tela do Order Start será possível filtrar os pedidos por tipo de picking Flowrack, Picking Cart e Mobile Device. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
NESTA FUNÇÃO DE VISUALIZAÇÃO DE PICKING DEVE SER POSSIVEL VER O TOTAL DE VOLUMES GERADOS POR CADA TIPO NA TELA DE ORDER START.
Adicionar Coluna de Status e Quantidade: A tela de Order Start exibirá uma coluna adicional para status e quantidade, permitindo que o operador visualize rapidamente o estado e o número de itens de cada pedido.
Filtro ou (Checkbox) para Mostrar Somente Pedidos em Aberto: Será criado na tela de pedidos um filtro ou checkbox chamado "Mostrar apenas pedidos em aberto". Para permitir ao usuário visualizar apenas os pedidos em aberto, quando o filtro estiver ativo, a tela exibirá somente os pedidos que ainda estão em aberto, ou seja, com o status pendente, em processamento, não iniciado, ou conforme o critério de "aberto" definido pela operação.
Categoria para Agrupar Pedidos: Na tela de pedidos, o usuário pode selecionar a categoria pela qual deseja agrupar os pedidos. Por um menu lateral por exemplo, onde o usuário escolhe "Agrupar por Status", "Agrupar por Tipo de Cliente", etc.
ESTE PROCESSO DE AGRUPAR PEDIDO DEVE SER FEITO POR FILTROS POSSIVEIS NO ORDER START. COMO POR EXEMPLO POR ESTADO.
O sistema exibirá os pedidos agrupados de acordo com a categoria selecionada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Etiqueta order start  
**Score:** — (semantico) | **ID:** bafa88abb03a6d7d

O sistema WCS será o responsável pela impressão de etiquetas de caixa no order start se o pedido for da categoria geladeira, full case e grandes volumes, essa etiqueta será sequencial e até ser lido no primeiro leitor de código de barras, não terá vínculo com nenhum pedido.
Os demais pedidos as caixas serão identificadas, portanto não será necessário imprimir as etiquetas a cada pedido.
Com o objetivo de garantir maior rastreabilidade, controle e acuracidade nas etapas de separação, especialmente para grandes volumes e itens armazenados em geladeiras ou outras condições especiais, será obrigatória a implementação da etiqueta virtual de separação. Essa exigência está prevista no item 2.17 do Plano Invent e foi acordada como parte fundamental do modelo operacional.
NA ETIQUETA DESTINADA PARA PRODUTOS DE GELADEIRA DEVERÁ INFORMAR O ESTADO DESTINO DO PEDIDO PARA AUXILIO OPERACIONAL.
Geração Etiqueta Virtual
Antes da etapa de separação física, o sistema WCS deverá gerar uma etiqueta virtual de separação, associada a uma caixa virtual. Essa etiqueta virtual desempenha um papel essencial durante o processo de conferência e picking, fornecendo uma base para o rastreamento individualizado de volumes.
A etiqueta virtual será usada para rastrear cada volume individualmente, oferecendo uma camada adicional de controle, especialmente para volumes armazenados em ambientes com controle térmico, como geladeiras, onde a separação deve ser feita de forma precisa para garantir a integridade dos produtos.
Layout da Etiqueta
O layout da etiqueta deverá obrigatoriamente conter as seguintes informações essenciais para o controle e rastreamento dos volumes:
Código de barras da caixa virtual - (Gerado automaticamente pelo sistema no momento do Order Start. Este código será utilizado para fins de conferência e etapas subsequentes (como sorter, roteirização etc.).
Número do pedido associado - Indica o número do pedido relacionado àquela etiqueta, facilitando a rastreabilidade e a associação entre os produtos e os pedidos.
Estado (UF) de destino da carga - O estado de destino para onde a carga será enviada.
Impressão da Etiqueta
A impressão da etiqueta deve ocorrer automaticamente no Order Start, garantindo que a etiqueta seja criada e disponibilizada para o operador no início da separação.
A impressora utilizada para a impressão da etiqueta deve ser posicionada de forma estratégica no início do fluxo de separação, permitindo que a etiqueta seja colada na caixa antes do início do processo de picking.
Confirmação da Localização (Bipagem)
O processo de confirmação da localização será mantido por meio da bipagem durante a separação. Este processo é fundamental para garantir que os produtos sejam retirados da posição correta e que a operação seja realizada de forma precisa e segura.
Bipagem da Localização Física: O operador deverá bipar a localização física onde o produto está armazenado, garantindo que a posição de onde o item será retirado está corretamente identificada no sistema.
A geração e uso da etiqueta virtual, que é integrada ao processo de Order Start, será um dos pilares de controle para volumes sensíveis e pedidos com alto volume de picking.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Layout de etiqueta order start  
**Score:** — (semantico) | **ID:** 2bf5dbc83ce9fd5b

CRIAR PREFIXO PARA OS TIPOS DE VOLUME QUE NECESSITEM A IMPRESSÃO DE ETIQUETA ACRESCENTAR AS INFORMAÇÕES DOS VOLUMES DE GELADEIRA E A AREA DE SEPARAÇÃO (GELADEIRA,FULL CASE E GRANDES VOLUMES) ALTURA 5 X 10 LARGURA
ESTADO, LOCAL DE SEPARAÇÃO, NUMERO DO PEDIDO E CODIGO DA CAIXA COM PREFIXO.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** f496df75604eb9fc

O início de todo processo de separação ocorre no Order Start, cada método de separação tem suas particularidades, porém em todos eles contêm uma tabela (lista) de pedidos, as funcionalidades de organização das tabelas nativas do Velox não estarão disponíveis no projeto de acordo com a solicitação do cliente, para necessidades de busca existira somente a funcionalidade de filtro disponíveis nas telas de Order Star.
Segue abaixo os Order Start de cada método:

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Processo operacional  
**Score:** — (semantico) | **ID:** a314521e070df5da

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
**Heading:** Processo operacional  
**Score:** — (semantico) | **ID:** 6e44881101963bfa

O operador após de realizar o processo de login no Velox através do PDV da sua estação de picking deve selecionar o Order Start correspondente corredor e nível, após essa seleção o operador irá visualizar os volumes que estão aguardando para serem liberados, após esse processo o operador pode se orientar através das informações compostas na tabela (Ordem, Volume, Qtd itens, Loja, Tipo de caixa), para o processo de separação do Full case o operador irá selecionar a quantidade de etiquetas que ele deseja imprimir e clicar no botão de impressão de volumes, o Velox irá enviar os arquivos para impressora uma a uma em sequência, nas telas de configurações do Velox existira o parâmetros de “liberação simultânea” onde o time de supervisão pode selecionar quantas lojas serão processadas de forma simultâneas no disparar de etiquetas nos Order Starts e a impressão de etiquetas serão feitas em ordem de endereços para que o operador siga em uma única direção do início ao fim do posto coletando todos os produtos solicitados, ou seja, se 4 (quatro) lojas estiverem configuradas no parâmetro “liberação simultânea”, o Velox irá ordenar a impressão de etiquetas por endereço e não irá validar a priorização ou a ordem de chegada das integrações, o Velox irá validar a sequência de endereços i ira imprimir os volumes dos pedidos de maneira em que todos os volumes a ser separados de todos os 4 (quatro) pedidos sejam separados juntos, o Velox irá indicar a posição e quantidade de volumes a ser separado na posição (nicho) de acordo com a soma de caixas (SKU) de todos os pedidos e irá separa-los de uma só vez, otimizando a separação, o operador separará muito volumes em uma única ida a posição para mais de um pedido, caso tenha separação daquele SKU em mais de um pedido.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Telas de Order Start  
**Score:** — (semantico) | **ID:** a8518cb9a7dd67c5

Para atender a necessidade solicitada pelo time do cliente algumas funcionalidades já citadas acima serão adicionadas nas telas de Order Starts, segue abaixo o esboço do layout dessa tela:

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Priorização de pedidos  
**Score:** — (semantico) | **ID:** 1d2262d376171b8f

Na tela de pedidos está presente a função de priorização de pedidos, sendo possível realizar a priorização de mais de uma loja desde que o valor priorização não seja o mesmo. A prioridade segue a seguinte classificação, prioridade 1 a prioridade máxima e a prioridade 5 a prioridade mínima. No caso dos volumes o Velox irá seguir com um critério de priorização utilizando a fila já existente no Order Start, ou seja, quando 2 (dois) ou mais pedimos forem priorizados com o mesmo número de prioridade, o primeiro a ficar disponível para sair do Order Start, será o que estiver mais próximo ao topo da lista.
A funcionalidade conta com filtros por, ordem de separação, loja e tipo de caixa.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Estação de Order Start – Fracionado e Full case  
**Score:** — (semantico) | **ID:** 0e98180c281cd27a

Cada Order start deverá ter uma estação de trabalho, 01 (um) PDV + 1 (um) scanner + 1 (uma) impressora de etiquetas que auxiliará o Operador com os principais recursos necessários para a operação.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 2a370d9804e4fec8

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executara as rotinas de Cubagem, Order Start, Linha de Picking e Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizados pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 2d491d6c645fe8c9

Será 1 (um) Order Start no início da linha.
Para iniciar o processo, o sistema Velox, deverá receber via integração todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade para os pedidos recebidos, caso seja necessário priorizar um pedido em específico, deverá ser feito manualmente na tela do Order Start.
O Order Start será dinâmico, sendo assim os pedidos serão liberados de acordo com a disponibilidades das rampas no Sorter. Em casos em que todas as rampas estiverem com algum pedido alocado, o Order Start não irá exibir mais pedidos e só voltará ao normal quando finalizado algum dos pedidos que estão em processo de separação nas rampas.
Operador terá disponível fisicamente, um buffer de caixas de reuso montadas e disponíveis para serem reutilizadas, próximo ao Order Start.
Essas caixas reutilizadas, não devem ter nenhum tipo de Data Matrix exposto, pois no portal de leitura do sorter, poderá ler a etiqueta errada, essa tratativa de garantir que a caixa siga apenas com o Data Matrix pertencente ao volume é de responsabilidade da operação Higimed.
Baseado no cálculo de cubagem feito pelo WMS, o sistema Velox gera a quantidade de volumes necessários para o pedido e informa na tela do Order Start, quais os tipos de caixas e a quantidade necessária para atender aquele pedido.
VELOX realiza a impressão da etiqueta dos volumes gerados para o pedido, operador fixa a etiqueta na caixa solicitada, e induz a caixa na linha para seguir com a separação. A caixa informada pelo Velox será a caixa final utilizada por todos os processos realizados na esteira Invent até a entrega ao cliente final.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Linha de separação  
**Score:** — (semantico) | **ID:** 2f1394a817ea1895

Separação dos itens fracionados será de responsabilidade exclusiva da Invent.
Teremos 1 (uma) linha de separação, contendo 4 (quatro) postos de separação.
Cada posto terá:
• 1 (um) operador por posto.
• 1 (um) PDV por posto.
• 1 (um) Scanner de mão por posto.
Velox não permitirá que o mesmo item seja cadastrado em 2 postos diferentes.
Operador ao receber a caixa no posto de separação, terá 2 (dois) possíveis locais para realizar a separação do pedido no respectivo posto.
Frente - 45 (Quarenta e Cinco) posições
Costas – 100 (Cem) Posições
Totalizando – 145 (Cento e Quarenta e cinco) posições/itens em cada posto.
Todas as posições de separação devem estar identificadas para melhor visualização do operador em qual local será feito a coleta.
O PDV irá informar as posições de coleta, EAN esperado e quantidade para auxílio do operador.
Em caso de Picking Costas, será mostrado no PDV indicado com o fundo na cor amarela a posição, EAN esperado e quantidade.
De acordo com a regra do sistema Velox, sempre será prioridade a coleta do Picking Frente em casos que houver coleta Frente e Costas.
A conferência do produto será realizada durante a coleta. O operador deverá realizar a leitura da etiqueta da caixa (Code – 128) que terá as informações do EAN e lote para o sistema decrementar visualmente no PDV a cada unidade coletada. Velox irá realizar a validação apenas do EAN do produto, lote será apenas usado para registro que será enviado ao WMS.
Esta etiqueta será colada na caixa quando for realizado o reabastecimento do item na posição nos flowhacks.
O envio ao WMS das informações a respeito da separação será realizado a cada posto para otimizar o processo de reabastecimento em casos de corte.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** fdd39f6c8506cb61

A separação e a impressão de etiquetas de pedidos Full Case não serão de responsabilidade Velox. Todos os itens devem ser etiquetados com a identificação do item (na lateral da caixa).
O tipo de código que deve ser utilizado para as etiquetas de full case e realizados na esteira será o Data Matrix com módulo de 1.1.
Os itens Full Cases serão induzidos na esteira e terão as mesmas rotinas de pesagem, cubagem e triagem nas rampas.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 79a9ed65176cedb0

Na estação de Order Start deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) impressora etiquetadora (Ex: Zebra)
Abaixo segue a configuração mínima para o desktop para a estação de Order Start:

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 46c9939dc383b251

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Cubagem, Order Start, Linha de Picking e Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizados pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 82ee181f37cd2736

Será 1 (um) Order Start no início da linha.
Para iniciar o processo, o sistema Velox, deverá receber via integração todas as informações dos pedidos previstos para a operação atual.
Sistema VELOX fará a ordenação dos pedidos integrados conforme recebe a integração, gerando uma fila de pedidos e volumes a serem expedidos.
Não existe regra de prioridade para os pedidos recebidos, caso seja necessário priorizar um pedido em específico, deverá ser feito manualmente na tela do Order Start.
O Order Start será dinâmico, sendo assim os pedidos serão liberados de acordo com a disponibilidades das rampas no Sorter. Em casos em que todas as rampas estiverem com algum pedido alocado, o Order Start não irá exibir mais pedidos e só voltará ao normal quando finalizado algum dos pedidos que estão em processo de separação nas rampas.
Operador terá disponível fisicamente, um buffer de caixas de reuso montadas e disponíveis para serem reutilizadas, próximo ao Order Start.
Baseado no cálculo de cubagem feito pelo WMS, o sistema Velox gera a quantidade de volumes necessários para o pedido e informa na tela do Order Start, quais os tipos de caixas e a quantidade necessária para atender aquele pedido.
VELOX realiza a impressão da etiqueta dos volumes gerados para o pedido, operador fixa a etiqueta na caixa solicitada, e induz a caixa na linha para seguir com a separação. A caixa informada pelo Velox será a caixa final utilizada por todos os processos realizados na esteira Invent até a entrega ao cliente final.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Linha de separação  
**Score:** — (semantico) | **ID:** 35a87bde02554dab

Separação dos itens fracionados será de responsabilidade exclusiva da Invent.
Teremos 1 (uma) linha de separação, contendo 4 (quatro) postos de separação.
Cada posto terá:
• 1 (um) operador por posto.
• 1 (um) PDV por posto.
• 1 (um) Scanner de mão por posto.
Velox não permitirá que o mesmo item seja cadastrado em 2 postos diferentes.
Operador ao receber a caixa no posto de separação, terá 2 (dois) possíveis locais para realizar a separação do pedido no respectivo posto.
Frente - 45 (Quarenta e Cinco) posições
Costas – 100 (Cem) Posições
Totalizando – 145 (Cento e Quarenta e cinco) posições/itens em cada posto.
Todas as posições de separação devem estar identificadas para melhor visualização do operador em qual local será feito a coleta.
O PDV irá informar as posições de coleta, EAN esperado e quantidade para auxílio do operador.
Em caso de Picking Costas, será mostrado no PDV indicado com o fundo na cor amarela a posição, EAN esperado e quantidade.
De acordo com a regra do sistema Velox, sempre será prioridade a coleta do Picking Frente em casos que houver coleta Frente e Costas.
A conferência do produto será realizada durante a coleta. O operador deverá realizar a leitura da etiqueta da caixa (Code – 128) que terá as informações do EAN e lote para o sistema decrementar visualmente no PDV a cada unidade coletada. Velox irá realizar a validação apenas do EAN do produto, lote será apenas usado para registro que será enviado ao WMS.
Esta etiqueta será colada na caixa quando for realizado o reabastecimento do item na posição nos flowhacks.
O envio ao WMS das informações a respeito da separação será realizado a cada posto para otimizar o processo de reabastecimento em casos de corte.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** 76860b05fb8efdb5

A separação e a impressão de etiquetas de pedidos Full Case não serão de responsabilidade Velox. Todos os itens devem ser etiquetados com a identificação do item (na lateral da caixa).
O tipo de código que deve ser utilizado para as etiquetas de full case e realizados na esteira será o Data Matrix com módulo de 1.1.
Os itens Full Cases serão induzidos na esteira e terão as mesmas rotinas de pesagem, cubagem e triagem nas rampas.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 62cbf448f19d7a07

Na estação de Order Start deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) impressora etiquetadora (Ex: Zebra)
Abaixo segue a configuração mínima para o desktop para a estação de Order Start:

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** e7deac043390b82f

Todo o processo de separação independentemente do tipo de separação (Unidade, Full Case e Pallet) se inicia no OrderStart, ele é composto de um posto de trabalho que contém um desktop  e uma impressora, devendo haver um posto de Order Start por rua (corredor) de picking (separação) e em cada área dos fracionados (Picking Cart, Médio Giro, Alto Giro).
Os pedidos serão exibidos no Order Start da sua respectiva área de acordo com o mapeamento dos produtos nas ruas/corredores e endereços dos fracionados enviados na integração.
A ordem das tarefas seguirão a ordenação de integração (FIFO) ou podendo alterar a prioridade de cada tarefa dentro do Velox.
A distribuição do Order Start dos Full Case será por corredor/rua, sendo assim o operador deverá informar em qual rua será efetuado a separação para o sistema mostrar apenas as tarefas destinadas naquela rua.
A distribuição do Order Start dos fracionados será por curva de giro. Exceção (picking cart), médio giro (primeiro Order Start da linha de picking), alto giro (segundo Order Start da linha de Picking). O Velox fará a análise de qual a menor curva de coleta que cada volume possui e insere aquele pedido/volume no seu respectivo Order Start.
A liberação das tarefas no Order Start será de acordo com a disponibilidade das posições no PTM. Caso o pedido não houver nenhum PTM disponível de acordo com o mapa, o Velox para de exibir no Order Start até finalização de qualquer nota da mesma transportadora, consequentemente liberando a posição.
NOTA: Todos os insumos dos equipamentos assim com a disponibilização dos mesmos e manutenções, são de responsabilidades do time do cliente.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Etiqueta início do Volume  
**Score:** — (semantico) | **ID:** 13933eb4c0ff721e

Em todos os Order Starts destinados a separação de fracionados será impresso uma etiqueta “burra” no começo da separação que deve ser colada na caixa. Posteriormente, no processo de packing será impresso a etiqueta final desse volume e deve ser colada por cima da etiqueta burra.
Esta etiqueta deve conter 8 dígitos.
Segue exemplo:

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Separação Fracionado  
**Score:** — (semantico) | **ID:** bb2cb68f3477b398

As áreas de picking cart (exceção) e separação de fracionado (médio e alto giro) são destinados a coleta de itens fracionados.
Quando o sistema recebe qualquer pedido que possui coleta em endereços fracionados, O sistema deve realizar a triagem em qual Order Start o volume deve iniciar sua separação. A prioridade é sempre a menor curva de fracionado que aquele volume possui.
Na linha de separação fracionado, operador irá imprimir a etiqueta “burra” e vincular caixa a caixa permitindo a indução do volume na linha.
Separação dos itens fracionados será de responsabilidade exclusiva da Invent.
Teremos 1 (uma) linha de separação, contendo 7 (sete) postos com LEDs, sendo 2 (dois) postos para Médio Giro e 5 (cinco) postos para alto giro.
Cada posto terá:
1 (um) operador por posto.
1 (um) PDV por posto.
1 (um) Scanner de mão por posto.
O PDV irá informar as posições de coleta, imagem do produto, EAN esperado e quantidade para auxílio do operador.
A conferência do produto será realizado durante a coleta. O operador deverá realizar a leitura do EAN do produto a cada unidade coletada. Velox irá realizar a validação apenas do EAN do produto. O operador poderá realizar o corte acionando o LED da posição que está sendo coletada ou diretamente no PDV. Caso ele coletar uma parte dos itens, apenas a parte pendente deve ser considerada corte.
Se ocorrer a leitura de algum item que não esteja solicitando separação, a tela mostrará mensagem que o item não deve ser separado, pois não foi solicitado.
Se houver a necessidade de solicitar uma caixa adicional devido a alguma falha de cubagem, no próprio PDV o colaborador poderá tomar essa ação. Ao pedir uma nova caixa, o volume atual não coletará mais nenhum item e os pickings pendentes serão coletados na próxima caixa que será exibida no Order Start com prioridade máxima.
Com a coleta de todos os endereços do posto realizada, todos os LEDs daquele posto irão ser acesos em verde para informar a finalização da separação do volume.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Order Start e Packing  
**Score:** — (semantico) | **ID:** 275dbe33e01ea88a

Na estação de Order Start e Packing  deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) impressora etiquetadora (Ex: Zebra)
01 (um) Leitor de código de barras – Ex: Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de Order Start:
É recomendado que possua um Order Start por corredor de separação de Full Cases e 3 Order Starts dedicados a cada separação de fracionado (Picking cart, Linha de médio e alto giro).

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** ORDER START  
**Score:** — (nome-topico) | **ID:** 0b9318d16ae59216

O processo de separação será iniciado em um Order Start, localizado no início da linha de separação. Este ponto contará com:
Estação de trabalho equipada com computador e impressora de etiquetas.
Funções principais do operador:
Alocar as etiquetas nas caixas de transporte (PVC).
Tratamento de erros de leitura de etiquetas, permitindo a impressão de novas etiquetas e a reinserção manual da caixa no Order Start.
Acomodar as caixas pedido (papelão) nas caixas de transporte (PVC)
Nas quatro (4) linhas (esteiras), terá que induzir as caixas transporte (PVC), respeitando cada linha (esteira) a cada tamanho de caixa pedido (papelão)
Diagrama da área:
Integração e Recebimento de Pedidos
O sistema MFC receberá, via integração, apenas as informações necessárias para a separação dos itens na operação, conforme detalhado no item 3. Pedido Separação. Com base nesses dados, o sistema executará a separação pré-determinada:
A quantidade necessária de caixas para atender a separação de cada pedido.
A referência dos tamanhos das caixas pedido (papelão), nos tamanhos PP, P, M e G.
A fila de trabalho, exibida na tela do Order Start, onde o operador poderá consultar os pedidos e as caixas associadas, gerenciadas conforme a volumetria calculada pelo WMS.
O order start terá uma tarefa automatizada para o operador não tenha necessidade de consultar a tela de order start. A liberação de cada caixa na sua respectiva linha, será de responsabilidade do sistema MFC, seguindo a order de prioridade de pedido.
Terá um sensor em cada linha, onde enviara uma mensagem ao sistema MFC se ha caixa nas linhas (PP-P-M-G). Liberando o sistema MFC a enviar uma mensagem de confirmação de liberação de caixa para vinculação de pedidos. Sendo assim a ordem de impressão de etiqueta seguirá conforme o disparo das caixa na linha expressa.
Tipos de Caixas e Transporte
Os volumes a serem transportados nas esteiras serão compostos pelos seguintes tipos de caixas:
1. Caixa Padrão de PVC
Utilizada exclusivamente nos transportadores INVENT.
Facilita o manuseio e a acomodação das caixas de papelão durante o transporte.
2. Caixas de Papelão
Disponíveis em quatro tamanhos: PP, P, M e G.
São induzidas individualmente em suas respectivas esteiras e direcionadas para a esteira expressa (única).
Obrigatório que todos os produtos estejam totalmente acomodados dentro das caixas de papelão antes do transporte.
3. Processo de Impressão de Etiquetas
À medida que as caixas de papelão passam pelos leitores, a impressora é acionada automaticamente para gerar as etiquetas.
Existem dois layouts principais de etiquetas:
MATRIZ e FILIAL.
Cinco layouts específicos para marketplaces.
4. Vinculação e Tratamento de Erros
As caixas de papelão são acomodadas na caixa de transporte (PVC), que recebe uma etiqueta identificadora.
Ao passar pelo leitor no início da linha, a leitura da etiqueta vincula o volume à primeira unidade do pedido integrado.
Caso a leitura não seja bem-sucedida, a caixa será rejeitada e deverá ser reinserida manualmente na esteira após a correção do erro.
5. Balança
Uma balança estará posicionada no início da esteira para verificação da tara da caixa de transporte (PVC).
Priorização
Teremos uma tela controle de pedidos, onde o operador poderá priorizar a sequência do disparo dos pedidos no order start em dois módulos:
Por ordem de prioridade
Onde terá uma sequência numérica de 1 a 5 decrescente, onde o número 5 está em primeira ordem.
Por tamanho de caixa
Onde a sequência será priorizada pelo tipo de caixa, se o tipo de caixa foi selecionado M, o sistema MFC fará todos os volumes com caixa M ate ser finalizada.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** Etiqueta Order Start  
**Score:** — (semantico) | **ID:** 9795af94d21d8c07

O sistema MFC será responsável pela geração e impressão das etiquetas no Order Start, abrangendo:
Etiquetas para caixas pedidas (papelão):
Geradas com base nos pedidos integrados, vinculadas diretamente ao pedido correspondente.
Etiquetas para caixas de transporte (PVC):
Criadas de forma sequencial.
Estas etiquetas serão utilizadas durante todo o processo de separação e vinculadas ao pedido apenas após a leitura no primeiro leitor de código de barras.
Ao final do processo, na etapa de conferência, a etiqueta será desassociada do pedido e a caixa de transporte será liberada para uso em uma nova onda de pedidos.
Observação Importante
Até que a etiqueta da caixa de transporte (PVC) seja lida pelo primeiro leitor de código de barras, não haverá vínculo entre a etiqueta e qualquer pedido.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** Layout de Etiqueta Order Start  Caixa Pedido  
**Score:** — (semantico) | **ID:** 9faa001e5a01189f

MATRIZ
Sigla da transportadora, existente no cadastro da transportadora
Rota da transportadora e pedido
Nome da Transportadora
Volume
Número da onda
Quantidade de volumes total da onda
Nome do Cliente
Código pessoa do cliente
Registro numérico de 30 posições, concatenados número do pedido + número do volume + CEP, acrescentando de 0 (zeros) à esquerda
Registro numérico de 12 posições, concatenados número do pedido + número do volume acrescentado 0 (zero) à esquerda
Quantidade de itens do volume
FILIAL
Informações relacionadas a nota fiscal: tipo de nota, número, série, data de emissão e data de saída e valor
Emitente: Dados da Jequiti, neste caso da Filial – endereço completo, CNPJ e inscrição estadual
Destinatário: Nome completo, Endereço completo com complemente e referência
Transportadora, rota, onda de faturamento, caixas, número do pedido sistema original/delage / previsão de entrega/ Canal de Venda
Chave de acesso – NF
Registro numérico (30 posições) do pedido, caixa e CEP, com zeros a esquerda complementado
Registro numérico do pedido, caixa e quantidade de itens

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** Contingência Pallet  
**Score:** — (nome-topico) | **ID:** 0a395931c5fd2045

Esse recurso é utilizado para uma segurança maior na triagem dos pallets, consistindo na leitura obrigatória de todos os volumes. O operador deverá informar a rampa está sendo montado o pallet e realizar a leitura volume a um volume. Na necessidade de finalizar o pallet, haverá na tela um botão de finalização de pallet, que solicitara o código do pallet para o envio da relação de todos os volumes do pallet ao WMS.
Este processo exigirá um coletor de dados por rampa, disponibilizados pela Andreani que esteja obrigatoriamente dentro da rede da automação.
Obs. Neste recurso devemos armazenar o login do usuário que realizou a coleta.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** cef69ba7009f0309

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação, conferência e controle das posições de picking, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao Velox, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** cb1ce8653faf4cad

Será 1 (um) Order Start no início da linha de separação, o Order start será composto com uma estação de trabalho com desktop para realizar as possíveis buscas de remessas já disponíveis para serem separadas, com isso o operador fará a leitura do código de barras da caixa plástica para que o sistema faça o vínculo da caixa a uma remessa/pedido, com isso induz a caixa plástica na linha de separação, para que a caixa seja lida no próximo leitor fixo de código de barras da linha de separação.
Antes de iniciar a operação no order start, operador deverá acessar a tela de cadastro de IO e nomear o campo de impressora, que será integrado ao WMS no momento da conferência.
Com isso, quando o usuário nomear a impressora, na integração de confirmação será enviado essa informação cadastrada no campo “PRINTER”.
Para que assim, WMS saiba em qual impressora deverá realizar a impressão da etiqueta.
Em casos que não tenha nenhuma impressora nomeada no Velox, operador receberá mensagem de erro ao tentar confirmar a conferência.
Operador terá que realizar o cadastro da impressora, e realizar a conferencia novamente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Rede  
**Score:** — (semantico) | **ID:** 0db5d33ab99358b3

Caso o cliente compartilhe uma mesma rede de dados existente, recomendamos a criação de uma VLAN segregada para os equipamentos de automação INVENT, garantindo assim uma melhor robustez do equipamento.
A figura ilustra a arquitetura proposta:

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Indução  
**Score:** — (semantico) | **ID:** 5f111f955f273b01

A indução dos volumes na esteira assim como todo processo de etiquetagem e movimentação será realizada pelo time Beira Rio, o Velox não terá tratativas de inicialização de separação desses volumes (Order Start).

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** ORDER START  
**Score:** — (nome-topico) | **ID:** 539ccc99c839190d

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
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** Etiqueta Order Start  
**Score:** — (semantico) | **ID:** 2baa8056ba80ab48

O sistema MFC será responsável pela geração e impressão das etiquetas no Order Start, abrangendo:
Etiquetas para caixas pedidas (papelão):
Geradas com base nos pedidos integrados, vinculadas diretamente ao pedido correspondente.
Estas etiquetas serão utilizadas durante todo o processo de separação, abastecimento e expedição.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** Contingência Pallet  
**Score:** — (nome-topico) | **ID:** 9b56a62d2ee1b732

Esse recurso é utilizado para uma segurança maior na triagem dos pallets, consistindo na leitura obrigatória de todos os volumes. O operador deverá informar a rampa está sendo montado o pallet e realizar a leitura volume a um volume. Na necessidade de finalizar o pallet, haverá na tela um botão de finalização de pallet, que solicitara o código do pallet para o envio da relação de todos os volumes do pallet ao WMS.
Este processo exigirá um coletor de dados por rampa, disponibilizados pela Andreani que esteja obrigatoriamente dentro da rede da automação.
Obs. Neste recurso devemos armazenar o login do usuário que realizou a coleta.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Order Start Fracionado  
**Score:** — (semantico) | **ID:** 0a6cf8ebcfd2e301

O processo começa no Order Start, onde o WCS recebe todas as informações dos pedidos previstos, incluindo os dados de cubagem e quantidade de cada item. O WCS identifica os pedidos de fracionado e organiza os pedidos conforme o critério definido, seja FIFO (First In, First Out) ou por Prioridade, e gera uma fila de volumes a serem iniciados. Com base nas informações recebidas, o WCS realiza o cálculo de cubagem para determinar o melhor modelo de caixa a ser alocado para cada tarefa (pedido). O sistema calcula quantos volumes serão necessários para cada tarefa.
O operador deverá ter à disposição um buffer de caixas, localizado próximo ao Order Start, onde as caixas para coleta fracionada ficam armazenadas para fácil acesso durante o processo de separação. O WCS define o tipo e a quantidade de caixas necessárias para cada tarefa com base no cálculo de cubagem, e a tela do Order Start exibe as caixas de diferentes tamanhos e quantidades previstas.
O operador escolhe quantos volumes irá iniciar de uma vez. O WCS, então, realiza a impressão das etiquetas dos volumes conforme a quantidade selecionada. O operador fixa a etiqueta na caixa solicitada e induz a caixa na linha de separação. A caixa segue então para o processo de separação do pedido.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 78aac79a03dc5834

Após a integração da onda de pedidos, o WCS identifica as tarefas de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo com a quantidade de caixas que serão separadas. Essa etapa permite ao operador decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do Final da Rua:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de forma que o operador inicie a coleta a partir do final da rua, de forma decrescente. Isso otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao ponto de indução de forma mais eficiente.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo operacional

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** 79d5156f243dba17

O processo de separação, independentemente do local de execução (FlowHack ou Picking Cart), tem início no Order Start. Esse processo é composto por um posto de trabalho equipado com um desktop, um leitor de código de barras e uma impressora. Para garantir eficiência operacional, cada linha de FlowHack contará com um posto de Order Start em seu início, enquanto os mezaninos destinados ao Picking Cart possuirão um posto por andar.
Os pedidos serão exibidos no Order Start correspondente à sua área de separação, conforme o mapeamento dos produtos nos FlowHacks e mezaninos. A ordem das tarefas seguirá a prioridade definida na integração, respeitando a sequência de rotas estabelecida para a operação. Caso necessário, o sistema WCS permitirá a alteração dessas prioridades.
O WCS irá ordenar os itens no Order Start seguindo a prioridade enviada na integração. Caso seja necessário alterar essa prioridade no WCS disponibilizara uma tela que permita alterar a prioridade do pedido em uma faixa de 1 a 5. Ao ser alterado dentro do WCS, o pedido terá prioridade máxima para ser realizado comparado com pedidos que possuem apenas a prioridade recebida na integração.
Após alterar a prioridade do pedido no sistema, não será avaliado a prioridade recebida na integração para aquele respectivo pedido.
A distribuição dos postos de Order Start nos FlowHacks será realizada por categoria de itens, sendo estas "Perfumaria" e "Medicamentos". Já os mezaninos do Picking Cart serão segmentados em "Perfumaria", "Medicamentos" e "Medicamentos Controlados".
O sistema WCS analisará a menor curva de coleta e a categoria de cada volume, alocando automaticamente o pedido ou volume ao Order Start correspondente.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Separação Fracionado (FlowHacks)  
**Score:** — (semantico) | **ID:** 1f9083a54e7a55d5

Para realizar a vinculação entre o pedido, o volume e a caixa plástica, o operador deverá acessar a tela de Order Start da sua respectiva linha e efetuar a leitura da etiqueta “fantasia” da caixa. Após essa leitura, o sistema WCS imprimirá automaticamente a etiqueta do primeiro pedido da fila, que deverá ser colada na respectiva caixa.
A separação dos itens fracionados será dividida em duas linhas por categoria:
Medicamentos
Perfumaria (demais categorias sem ser medicamento)
As categorias não podem ser misturadas no mesmo volume, o WMS enviara os pedidos com os volumes já com as categorias separadas e cubados.
A separação de itens fracionados que estiverem localizados nos flowhack e mezaninos será de responsabilidade exclusiva da Invent. Os demais serão de responsabilidade do WMS.
Estrutura dos Postos de Separação
Cada posto de separação contará com os seguintes recursos:
Um operador por posto
Um PDV por posto
Um scanner de mão por posto
Um display de LED de 3 dígitos
O PDV exibirá as seguintes informações para auxiliar o operador:
A caixa que está sendo separada
As posições de coleta
O EAN esperado
A quantidade solicitada
Botão de solicitação de caixa adicional
Além disso, o PDV atuará como assistente do operador, atualizando as coletas à medida que forem realizadas.
Processo de Coleta
Quando solicitado na integração, o operador deverá escanear o EAN do produto a cada unidade coletada. O sistema WCS realizará a validação apenas do EAN do produto.
Os itens que exigirem leitura durante a separação terão seus LEDs acesos na cor rosa para indicar essa necessidade.
Pode ser enviado na integração que o produto será um display, sendo assim o LED deve acender na cor laranja. O item não pode ser coletado em unidade e display, sempre será apenas um fator de medida. Esta função será apenas visual para auxiliar a operação. Não teremos validação Sistêmica.
Em caso de as duas regras estarem ativas, a definição maior sempre será a leitura do EAN, sendo assim será aceso o LED em rosa.
A caixa plástica será lida pelo scanner da linha expressa e desviada para o posto de separação correspondente. O sistema WCS acenderá automaticamente os LEDs na cor azul para indicar as posições de coleta dentro do posto.
O operador deverá coletar a quantidade solicitada e pressionar o LED para confirmar a coleta.
Caso seja necessário realizar um ShortPicking, o operador deverá selecionar no LED a quantidade real coletada e pressionar o botão de confirmação. Nesse caso, o volume será obrigatoriamente desviado para o setor de conferência.
Solicitação de Caixa Adicional
Caso o operador perceba que a caixa plástica não será suficiente para alocar todos os itens solicitados, conforme o cálculo de cubagem, ele deverá solicitar uma caixa adicional na tela do PDV. Com isso, a separação será interrompida, e o operador deverá seguir para a próxima separação.
No Order Start, essa caixa adicional terá prioridade máxima e será a próxima enviada para a linha de separação. Quando o operador receber essa caixa adicional, ele deverá concluir a separação apenas dos itens que não couberam na caixa anterior.
Observação: todos os itens que forem cortados no volume que for solicitado uma caixa adicional, serão solicitados novamente no próximo volume.
Finalização da Separação
Após a conclusão da separação de todas as posições do posto, os LEDs serão acesos na cor verde, indicando que o operador deve induzir novamente o volume para a linha expressa, permitindo que ele seja direcionado ao próximo posto.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** c05a3cf046e3ace7

Na estação de Order Start deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) impressora etiquetadora (Ex: Zebra)
01 (um) Leitor de código de barras – Ex: Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de Order Start:

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Order Start  
**Score:** — (nome-topico) | **ID:** a4a990f90511b37f

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
**Heading:** Localização Order Start (OS)  
**Score:** — (semantico) | **ID:** 77a06a311fda3ea2

O Order Start estará distribuído da seguinte forma:
Térreo (Padrão): Será utilizado como responsável pelo fluxo principal de impressão, para todos os pedidos gerados que indicam o início do processo de picking e a geração das etiquetas.
Equipamentos:
1 PDV para visualização e confirmação das ondas de pedidos, tipo e tamanho de caixa.
1 impressora automática de etiquetas.
3 níveis do mezanino outros andares (Contingência): Estes Order Start serão utilizados somente em momentos de contingência ou para priorização de pedidos específicos ou até mesmo quando surgir a necessidade de realizar uma reimpressão de etiqueta.
Os Order Start dos níveis devem exibir apenas volumes que irão passar nos postos subsequentes daquele ponto.
Equipamentos:
1 PDV para visualização das ondas e pedidos, priorização e reimpressão de etiquetas.
1 impressora automática de etiquetas.
Após operador selecionar na tela do WCS qual tipo de operação será iniciado (B2B ou B2C), será iniciado o processo de Order Start.
As caixas plásticas já devem conter etiquetas fixas, enquanto as caixas de papelão recebem as etiquetas no momento da indução. Nas caixas plásticas o vínculo do Parcel Container com o volume será feito realizando a leitura do RG de caixa(SHU) por caixa no Order Start do B2C no WCS.
O WMS envia para o WCS a roteirização de cada Service HU e o WCS terá a responsabilidade de transportar cada volume para os postos informados no mapeamento.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Controle de Liberação de Ondas B2C Multi (Order Start)  
**Score:** — (semantico) | **ID:** 574410e7a7d1055a

Por escolha dos times TPC/Puma e Reply, a criação das ondas de pedidos B2C Multi será realizada de forma manual, sem a aplicação de regras automáticas de controle ou validação de capacidade do PTW (Put to Wall).
Os volumes poderão ser iniciados livremente no Order Start, e o WMS continuará responsável pelo envio das integrações de separação e liberação dos volumes conforme o fluxo padrão estabelecido.
Observação: A liberação de ondas que excedam a capacidade do PTW representa um risco operacional relevante, podendo ocasionar travamentos nas estações e impacto direto na eficiência do processo.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Priorização Manual  
**Score:** — (nome-topico) | **ID:** 3b3a801e81fb13ca

A priorização manual ocorre quando no decorrer do dia a dia da operação os usuários do WCS Velox e automação identificam a necessidade de realizar uma tarefa de retirada/expedição de pallets antes das demais tarefas recebidas pelo WCS Velox, sendo assim o operador pode definir a prioridade manual sendo 1 como prioridade máxima e 5 como prioridade mínima.
As prioridades manuais têm preferência na execução em relação as prioridades automáticas, ou seja, se houver uma prioridade 1 automática aguardando para ser a próxima tarefa de saída a ser realizada e um operador usar o WCS Velox para definir ou outro pallet como prioridade 1 (prioridade manual), o pallet da prioridade manual será retirado primeiro que o pallet da prioridade automática.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Priorização Manual  
**Score:** — (nome-topico) | **ID:** 125ef66260b744dc

A priorização manual ocorre quando no decorrer do dia a dia da operação os usuários do WCS Velox e automação identificam a necessidade de realizar uma tarefa de retirada/expedição de pallets antes das demais tarefas recebidas pelo WCS Velox, sendo assim o operador pode definir a prioridade manual sendo 1 como prioridade máxima e 5 como prioridade mínima.
As prioridades manuais têm preferência na execução em relação as prioridades automáticas, ou seja, se houver uma prioridade 1 automática aguardando para ser a próxima tarefa de saída a ser realizada e um operador usar o WCS Velox para definir ou outro pallet como prioridade 1 (prioridade manual), o pallet da prioridade manual será retirado primeiro que o pallet da prioridade automática.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Order Start - Portais de entrada  
**Score:** — (semantico) | **ID:** 11aaf94ef27e3a7b

Existem portais de entrada na automação, onde a operação pode utilizar quaisquer portais de entrada para qualquer produto.
Antes da indução de pallets no portal de entrada é necessário realizar as integrações SAP 
WCS Velox.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Priorização Manual  
**Score:** — (nome-topico) | **ID:** d57ed77b69e2ed1e

A priorização manual ocorre quando no decorrer do dia a dia da operação os usuários do WCS Velox e automação identificam a necessidade de realizar uma tarefa de retirada/expedição de pallets antes das demais tarefas recebidas pelo WCS Velox, sendo assim o operador pode definir a prioridade manual sendo 1 como prioridade máxima e 5 como prioridade mínima.
As prioridades manuais têm preferência na execução em relação as prioridades automáticas, ou seja, se houver uma prioridade 1 automática aguardando para ser a próxima tarefa de saída a ser realizada e um operador usar o WCS Velox para definir ou outro pallet como prioridade 1 (prioridade manual), o pallet da prioridade manual será retirado primeiro que o pallet da prioridade automática.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Order Start -  Portais de entrada  
**Score:** — (semantico) | **ID:** 9967d2bf056d5da1

Existem portais de entrada na automação, onde a operação pode utilizar quaisquer portais de entrada para qualquer produto.
Antes da indução de pallets no portal de entrada é necessário realizar as integrações SAP 
WCS Velox.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Priorização Manual  
**Score:** — (nome-topico) | **ID:** 7da5ede03f61845e

A priorização manual ocorre quando no decorrer do dia a dia da operação os usuários do WCS Velox e automação identificam a necessidade de realizar uma tarefa de retirada/expedição de pallets antes das demais tarefas recebidas pelo WCS Velox, sendo assim o operador pode definir a prioridade manual sendo 1 como prioridade máxima e 5 como prioridade mínima.
As prioridades manuais têm preferência na execução em relação as prioridades automáticas, ou seja, se houver uma prioridade 1 automática aguardando para ser a próxima tarefa de saída a ser realizada e um operador usar o WCS Velox para definir ou outro pallet como prioridade 1 (prioridade manual), o pallet da prioridade manual será retirado primeiro que o pallet da prioridade automática.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Order Start -  Portais de entrada  
**Score:** — (semantico) | **ID:** 6f3bf5182dc08eb1

Existem portais de entrada na automação, onde a operação pode utilizar quaisquer portais de entrada para qualquer produto.
Antes da indução de pallets no portal de entrada é necessário realizar as integrações SAP 
WCS Velox.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Priorização Manual  
**Score:** — (nome-topico) | **ID:** 85a2a280c7eb8367

A priorização manual ocorre quando no decorrer do dia a dia da operação os usuários do WCS Velox e automação identificam a necessidade de realizar uma tarefa de retirada/expedição de pallets antes das demais tarefas recebidas pelo WCS Velox, sendo assim o operador pode definir a prioridade manual sendo 1 como prioridade máxima e 5 como prioridade mínima.
As prioridades manuais têm preferência na execução em relação as prioridades automáticas, ou seja, se houver uma prioridade 1 automática aguardando para ser a próxima tarefa de saída a ser realizada e um operador usar o WCS Velox para definir ou outro pallet como prioridade 1 (prioridade manual), o pallet da prioridade manual será retirado primeiro que o pallet da prioridade automática.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Order Start -  Portais de entrada  
**Score:** — (semantico) | **ID:** ff3da981932d5335

Existem portais de entrada na automação, onde a operação pode utilizar quaisquer portais de entrada para qualquer produto.
Antes da indução de pallets no portal de entrada é necessário realizar as integrações SAP 
WCS Velox.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Nível 3  
**Score:** — (semantico) | **ID:** 4bdd48d865f99716

O Order Start Nível 3 será utilizado quando a coleta do item iniciar neste nível, podendo ou não ter itens a serem coletados nos níveis inferiores. Nesse Order Start, serão exibidos somente volumes que possuam itens a serem coletados no Nível 3.
Fluxo Operacional:
O operador acessa o Order Start Nível 3, onde são exibidos apenas as tarefas de separação que iniciam a coleta no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 3.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Nível 2  
**Score:** — (semantico) | **ID:** 60b6b366e6407fc1

O Order Start Nível 2 será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 2, e o sistema não deve exibir volumes que iniciem sua coleta no Nível 1 ou no Térreo.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 2, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 2.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes ou, caso não haja mais itens a serem coletados nos níveis inferiores, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Nível 1  
**Score:** — (semantico) | **ID:** 824a5deaffa19777

O Order Start Nível 1 será utilizado quando a operação iniciar neste nível. Somente volumes que não tenham itens a coletar no Nível 2 ou no Nível 3 serão exibidos neste Order Start. Para esses volumes, o primeiro endereço de coleta será no Nível 1, e o sistema não deve exibir volumes que iniciem sua coleta no Térreo, Nível 2 ou Nível 3.
Fluxo Operacional:
O operador acessa a tela de Order Start Nível 1, onde são exibidos apenas os volumes que não possuem itens a serem coletados no Nível 2 ou no Nível 3.
O operador realiza a leitura da caixa plástica que possuí uma etiqueta fixa sequencial com o scanner de mão no Nível 1.
O sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume será direcionado para as estações de picking subsequentes, ou caso não haja mais itens a serem coletados no nível térreo, o volume seguirá para a balança no Nível Térreo.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Térreo  
**Score:** — (semantico) | **ID:** 9d8a015039110b0b

O Order Start Térreo será utilizado para volumes que não possuam itens a coletar nos Níveis 1, 2 ou 3. A alocação desses volumes será feita automaticamente pelo WCS, onde a leitura da caixa será feita diretamente no primeiro ponto de decisão (Scanner Fixo) da linha, vinculando diretamente o volume físico ao volume sistêmico.
Fluxo Operacional:
O operador acessa a tela de Order Start Térreo, onde são exibidos apenas os volumes que não possuem itens a serem coletados nos Níveis 1, 2 ou 3.
O operador realiza a indução da caixa plástica no Térreo e o sistema WCS registra o vínculo físico e sistêmico entre o volume físico e o volume sistêmico do pedido.
O volume seguirá automaticamente para a os postos de picking

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Fluxo Operacional de Picking Térreo  
**Score:** — (semantico) | **ID:** 376684107eb1a99b

O processo de Picking no Térreo ocorre após a leitura da caixa plástica no Order Start, onde o WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Order Start e Leitura da Caixa Plástica:
O operador induz o volume na esteira, e o processo de Order Start ocorre após a passagem da caixa plástica pelo primeiro ponto de decisão (Scanner).
O WCS verifica automaticamente se há uma tarefa de coleta liberada e associa o volume a um posto de separação. Caso haja coleta, o volume será desviado automaticamente para o posto correspondente. Caso não haja o volume será desviado no primeiro posto e será informado nos leds e pdv.
PBL (Picking by Light):
O após o desvio o WCS acende os LEDs de frente no posto de separação, sinalizando o local e a quantidade de itens a serem coletados. Os LEDs de frente exibirão 3 dígitos para identificar a quantidade de itens a serem coletados e serão únicos por posição.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um PDV para auxiliar o operador na coleta e conferência dos itens.
Exibição da Lista de Itens no PDV:
O PDV exibirá a lista de itens a serem coletados de acordo com o volume desviado e a quantidade de itens prevista.
O operador realiza a coleta física do item e confirma a coleta pressionando o LED correspondente. Após pressionar o LED, o WCS confirma a coleta do item e a linha correspondente é pintada de azul no PDV.
Conferência no PDV:
Após a coleta física do item, o operador realiza a leitura item a item do código de barras para garantir que o item e a quantidade correta foi coletada.
O WCS atualiza a lista de coleta, com as linhas começando em cinza. Ao confirmar a coleta no LED, a linha do item fica azul, e o contador de coleta vai sendo incrementado conforme o número de unidades lidas.
Quando a quantidade total do item for atingida, a linha do item fica verde, indicando que a coleta foi concluída.
Alertas de Coleta Inadequada:
Caso o operador realize a leitura de um item não esperado, o WCS irá transmitir um alerta no PDV, indicando que a coleta do item não foi prevista.
Se o operador coletar uma quantidade superior à esperada, o WCS também irá alertar no PDV para garantir que a quantidade coletada esteja conforme o esperado.
Coleta de Itens nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas, o WCS acende os LEDs da frente em rosa para sinalizar a coleta na parte de picking costas, e também acende os LEDs de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente: o WCS irá informar o endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias posições de picking, permitindo que o operador colete de maneira eficiente e sem confusão.
O operador realiza a coleta de acordo com a indicação dos LEDs e realiza a conferência no PDV, conforme o processo de coleta dos itens da frente.
Finalização da Coleta e Reindução para o Próximo Posto:
Após a coleta de todos os itens e a conferência dos mesmos, os LEDs acendem em verde para indicar que o volume foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para o próximo posto de separação, onde o processo se repete até que todos os itens sejam coletados e o volume esteja completo.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** aacb60ead4bdfc9b

Após a integração da onda de pedidos, o WCS identifica e quebra as tarefas, de forma que o que pode ser separado sem a necessidade de abrir a caixa seja direcionado ao processo de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo com a quantidade de caixas que serão separadas. Essa etapa permite ao operador decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do Final da Rua:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de forma que o operador inicie a coleta a partir do final da rua, de forma decrescente. Isso otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao ponto de indução de forma mais eficiente.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Order Start Picking Cart  
**Score:** — (semantico) | **ID:** a1374611f887ec5b

No Order Start Picking Cart, o processo de separação é realizado com base na alocação de volumes sistêmicos nas posições dos Picking Carts. Cada Picking Cart terá seu próprio Order Start e a posição de Picking Cart será vinculada a uma caixa plástica específica.
Mapeamento da Posição de Picking Cart:
Vinculação Inicial da Posição de Picking Cart à Caixa Plástica:
Antes de alocar o volume sistêmico, é necessário realizar o mapeamento da posição de Picking Cart. Neste primeiro passo, a posição de Picking Cart será associada a uma caixa plástica, mas ainda não haverá vínculo com o volume sistêmico. O mapeamento é realizado através de um leitor de mão integrado ao PDV, onde o operador escaneia a caixa plástica e associa essa caixa a uma posição específica do Picking Cart. Após finalizar o mapeamento, o operador deve clicar no botão “FINALIZAR MAPEAMENTO”.
Importante: Nesse processo, não será necessário vincular todas as posições de Picking Cart de uma vez, permitindo que o operador realize o mapeamento de forma parcial, conforme a disponibilidade de caixas plásticas.
Exibição da Lista no PDV:
Exibição das Tarefas no PDV:
Após o mapeamento da caixa plástica com a posição de Picking Cart, o PDV exibirá a lista de tarefas de separação que devem ser realizadas. A lista será organizada de acordo com a regra de prioridade ou FIFO (First In, First Out), conforme as configurações definidas no sistema.
Leitura e Alocação da Posição de Picking Cart ao Volume Sistêmico:
Leitura da Posição de Picking:
O operador deve realizar a leitura da posição de Picking cart no PDV, onde as informações sobre as tarefas de separação estarão disponíveis. Na tela do PDV, o operador deverá confirmar a alocação da posição de Picking Cart ao volume sistêmico que está sendo separado, clicando na opção correspondente.
Repetição do Processo:
Repetir para Outras Posições de Picking Cart:
O operador deve repetir o processo de leitura e alocação para todas as outras posições de Picking Cart que possuam caixas plásticas vinculadas. Ele não pode ir para a tela de coleta até que todas as posições que tenham caixas vinculadas sejam atribuídas a uma tarefa de separação. Caso contrário, ele só poderá avançar quando todas as tarefas de separação forem vinculadas às respectivas caixas plásticas ou até que as tarefas acabem.

---
**Origem:** [I25.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Order Start Full Case  
**Score:** — (semantico) | **ID:** 8f5217daf0c44015

Após a integração da onda de pedidos, o WCS identifica e quebra as tarefas, de forma que o que pode ser separado sem a necessidade de abrir a caixa seja direcionado ao processo de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os seguintes passos para iniciar a tarefa de separação.
Fluxo Operacional do Order Start Full Case:
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele estará retirando as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Seleção do Número de Etiquetas:
O operador poderá selecionar o número de etiquetas que deseja imprimir, de acordo com a quantidade de caixas que serão separadas. Essa etapa permite ao operador decidir a quantidade de volumes que irá coletar.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Coleta Iniciada do Final da Rua:
Para evitar que o operador precise percorrer grandes distâncias até o final da rua para coletar apenas alguns volumes, a operação de Order Start Full Case é configurada de forma que o operador inicie a coleta a partir do final da rua, de forma decrescente. Isso otimiza o fluxo de separação e garante que o operador recolha volumes próximos ao ponto de indução de forma mais eficiente.
Hardware Order Start Full Case:
Será utilizado coletor Android, garantindo maior fluidez e eficiência no processo operacional.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Order Start FlowRack  
**Score:** — (semantico) | **ID:** 270d721d9ba55964

Será disponibilizado um (1) Order Start no início da linha de separação, cuja finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Os volumes (pega) a serem transportados na esteira, serão caixas plásticas com etiqueta fixa, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de separação, o WCS deverá disponibilizar uma tela específica de mapeamento de postos FlowRack. Essa funcionalidade permitirá o vínculo entre usuários (logins) e os postos de separação ativos na linha.
A tela apresentará os postos disponíveis e os usuários vinculados a cada um deles.
O vínculo deverá ser feito manualmente por um supervisor.
Um mesmo usuário poderá estar vinculado a múltiplos postos simultaneamente de mesma categoria, ou seja, não haverá limitação de exclusividade por posto.
Na separação realizada no museu, a rastreabilidade será realizada por meio do login utilizado no PDV do Picking Cart.
Cada operação realizada no PDV estará associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item 3.3 Trabalhos – Work  acima.
Antes de iniciar os pedidos, o WCS deve validar se a quantidade de saldo nas posições é suficiente para atender as tarefas, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender as tarefas, a mesma não poderá ser iniciada e o WCS deverá seguir com o reabastecimento via transfer.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, o WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
No processo de separação, o ponto de Order Start em que o volume (pega) será iniciado depende da menor curva de giro presente no armazém. Isso significa que o WCS deve identificar, entre todos os endereços de picking do volume (pega), qual pertence à curva de menor giro (por exemplo, museu ou Order Start do FlowRack), e a partir disso determinar o ponto inicial de separação.
Se o volume (pega) possuir itens que devem ser coletados no museu, o início do processo deverá ocorrer no Order Start específico daquela área. Nessa etapa, o operador realizará a associação do volume (pega) com a caixa plástica via PDV (Picking Cart) e iniciará a coleta a partir da área de menor giro.
Somente após a separação na área do museu, caso o volume (pega) possua itens destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do processo de separação no FlowRack. Esse fluxo garante que todas as coletas nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de retrabalho ou retorno de caixas já em processo de automação. O vínculo das caixas com o volume (pega) é feito automaticamente no primeiro ponto de decisão da linha de FlowRack.
O WCS disponibiliza uma tela de Order Start que serve para visualizar os próximos volumes (Pega) que serão vinculados de acordo com a ordem de prioridade enviada na integração.
Priorizar Pedidos: Na tela de “Tarefas”, o operador terá acesso a recursos onde Será possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante agilidade na seleção e maior controle sobre o que deve ser iniciado no momento. Além disso, a tela apresentará uma visualização prévia da previsão de volumes (pega) por pedido, permitindo que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico. Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela “Resumo Pega” será possível filtrar os pedidos por tipo de picking FlowRack, Picking Cart. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Além do filtro, a tela apresentará de forma consolidada o total de volumes (pega) previstos por tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o planejamento da linha de separação e a atuação mais estratégica por parte da liderança operacional.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Order Start FlowRack  
**Score:** — (semantico) | **ID:** 897db1f052d8df61

Será disponibilizado um (1) Order Start no início da linha de separação, cuja finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Os volumes (pega) a serem transportados na esteira, serão caixas plásticas com etiqueta fixa, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de separação, o WCS deverá disponibilizar uma tela específica de mapeamento de postos FlowRack. Essa funcionalidade permitirá o vínculo entre usuários (logins) e os postos de separação ativos na linha.
A tela apresentará os postos disponíveis e os usuários vinculados a cada um deles.
O vínculo deverá ser feito manualmente por um supervisor.
Um mesmo usuário poderá estar vinculado a múltiplos postos simultaneamente de mesma categoria, ou seja, não haverá limitação de exclusividade por posto.
Na separação realizada no museu, a rastreabilidade será realizada por meio do login utilizado no PDV do Picking Cart.
Cada operação realizada no PDV estará associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item 3.3 Trabalhos – Work  acima.
Antes de iniciar os pedidos, o WCS deve validar se a quantidade de saldo nas posições é suficiente para atender as tarefas, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender as tarefas, a mesma não poderá ser iniciada e o WCS deverá seguir com o reabastecimento via transfer. Caso não haja saldo no transfer, o WCS permitirá o início desta tarefa com os item em questão cortados.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, o WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
No processo de separação, o ponto de Order Start em que o volume (pega) será iniciado depende da menor curva de giro presente no armazém. Isso significa que o WCS deve identificar, entre todos os endereços de picking do volume (pega), qual pertence à curva de menor giro (por exemplo, museu ou Order Start do FlowRack), e a partir disso determinar o ponto inicial de separação.
Se o volume (pega) possuir itens que devem ser coletados no museu, o início do processo deverá ocorrer no Order Start específico daquela área. Nessa etapa, o operador realizará a associação do volume (pega) com a caixa plástica via PDV (Picking Cart) e iniciará a coleta a partir da área de menor giro.
Somente após a separação na área do museu, caso o volume (pega) possua itens destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do processo de separação no FlowRack. Esse fluxo garante que todas as coletas nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de retrabalho ou retorno de caixas já em processo de automação. O vínculo das caixas com o volume (pega) é feito automaticamente no primeiro ponto de decisão da linha de FlowRack.
O WCS disponibiliza uma tela de Order Start que serve para visualizar os próximos volumes (Pega) que serão vinculados de acordo com a ordem de prioridade enviada na integração.
Priorizar Pedidos: Na tela de “Tarefas”, o operador terá acesso a recursos onde Será possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante agilidade na seleção e maior controle sobre o que deve ser iniciado no momento. Além disso, a tela apresentará uma visualização prévia da previsão de volumes (pega) por pedido, permitindo que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico. Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela “Resumo Pega” será possível filtrar os pedidos por tipo de picking FlowRack, Picking Cart. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Além do filtro, a tela apresentará de forma consolidada o total de volumes (pega) previstos por tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o planejamento da linha de separação e a atuação mais estratégica por parte da liderança operacional.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Order Start FlowRack  
**Score:** — (semantico) | **ID:** 42908446122a799c

Será disponibilizado um (1) Order Start no início da linha de separação, cuja finalidade é garantir o início controlado do processo de separação para cada caixa de picking.
Os volumes (pega) a serem transportados na esteira, serão caixas plásticas com etiqueta fixa, teremos somente um tipo de caixa plástica, e não teremos produtos fora da caixa.
Para garantir a rastreabilidade operacional dos colaboradores envolvidos no processo de separação, o WCS deverá disponibilizar uma tela específica de mapeamento de postos FlowRack. Essa funcionalidade permitirá o vínculo entre usuários (logins) e os postos de separação ativos na linha.
A tela apresentará os postos disponíveis e os usuários vinculados a cada um deles.
O vínculo deverá ser feito manualmente por um supervisor.
Um mesmo usuário poderá estar vinculado a múltiplos postos simultaneamente de mesma categoria, ou seja, não haverá limitação de exclusividade por posto.
Na separação realizada no museu, a rastreabilidade será realizada por meio do login utilizado no PDV do Picking Cart.
Cada operação realizada no PDV estará associada ao usuário logado no momento da execução, garantindo o rastreio individual das coletas.
O sistema deverá armazenar essas informações para fins de auditoria, controle de produtividade e acompanhamento de processos.
Para iniciar o processo, o sistema WCS deverá receber via integração todas as informações dos pedidos para a operação conforme descrito no item 3.3 Trabalhos – Work  acima.
Antes de iniciar os pedidos, o WCS deve validar se a quantidade de saldo nas posições é suficiente para atender as tarefas, com isso faz a liberação para ser iniciado no order start, em casos que a quantidade não seja o suficiente para atender as tarefas, a mesma não poderá ser iniciada e o WCS deverá seguir com o reabastecimento via transfer.
Com o recebimento dos pedidos e baseado nas caixas plásticas de picking, o WCS realiza a cubagem dos produtos e determina quantas caixas plásticas serão necessárias para atender a separação do pedido.
No processo de separação, o ponto de Order Start em que o volume (pega) será iniciado depende da menor curva de giro presente no armazém. Isso significa que o WCS deve identificar, entre todos os endereços de picking do volume (pega), qual pertence à curva de menor giro (por exemplo, museu ou Order Start do FlowRack), e a partir disso determinar o ponto inicial de separação.
Se o volume (pega) possuir itens que devem ser coletados no museu, o início do processo deverá ocorrer no Order Start específico daquela área. Nessa etapa, o operador realizará a associação do volume (pega) com a caixa plástica via PDV (Picking Cart) e iniciará a coleta a partir da área de menor giro.
Somente após a separação na área do museu, caso o volume (pega) possua itens destinados a essa região, é que o mesmo poderá ser induzido na esteira, permitindo a continuidade do processo de separação no FlowRack. Esse fluxo garante que todas as coletas nos endereços mais distantes ou com menor giro sejam realizadas previamente, evitando a necessidade de retrabalho ou retorno de caixas já em processo de automação. O vínculo das caixas com o volume (pega) é feito automaticamente no primeiro ponto de decisão da linha de FlowRack.
O WCS disponibiliza uma tela de Order Start que serve para visualizar os próximos volumes (Pega) que serão vinculados de acordo com a ordem de prioridade enviada na integração.
Priorizar Pedidos: Na tela de “Tarefas”, o operador terá acesso a recursos onde Será possível organizar e priorizar os pedidos, permitindo que sejam listados com base em critérios como prioridade operacional, status (ex: apenas pedidos em aberto). Essa filtragem garante agilidade na seleção e maior controle sobre o que deve ser iniciado no momento. Além disso, a tela apresentará uma visualização prévia da previsão de volumes (pega) por pedido, permitindo que o operador saiba quantas caixas serão necessárias para atender àquele pedido específico. Essa informação auxilia tanto no planejamento físico da separação quanto no acompanhamento do processo, contribuindo para maior eficiência e controle na linha.
Visualização por tipo de Picking: Na tela “Resumo Pega” será possível filtrar os pedidos por tipo de picking FlowRack, Picking Cart. Cada tipo será identificado visualmente, facilitando ao operador ou supervisor direcionar os pedidos conforme os recursos e estratégias disponíveis. Essa filtragem otimiza a separação e a alocação de tarefas.
Além do filtro, a tela apresentará de forma consolidada o total de volumes (pega) previstos por tipo de picking, permitindo ao operador ter uma visão geral da carga de trabalho por modalidade. Isso proporciona uma base sólida para o balanceamento de recursos, o planejamento da linha de separação e a atuação mais estratégica por parte da liderança operacional.
