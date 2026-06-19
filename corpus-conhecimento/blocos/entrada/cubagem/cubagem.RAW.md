# cubagem.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo minerador -->

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIF REV2.docx`  
**Heading:** Pedido Misto com uma caixa Pollux / Venus  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Quando um volume de um pedido que se encaixa nesse cenário chegar na estação ORDER STARTER PTW, através de um Leitor Fixo na linha, ocorrerá a leitura do código de barras da caixa e será informado na tela do Order Starter, a CAIXA MASTER que deve ser montada para aquele pedido.
O Led da posição onde o volume deve ser alocado no PTW devera acender em AZUL.
PLC: O volume na esteira deverá parar no próximo sensor após o ponto de leitura. Caso não ocorra a leitura1’, o volume deverá permanecer também no sensor seguinte ao do Leitor Fixo na linha e nenhum Led do PTW acenderá.
O colaborador deverá montar a CAIXA MASTER e realizar a leitura do QR Code da caixa pelo Leitor Móvel instalado no PC.
Nesse instante, ocorrerá a impressão da etiqueta e os Leds acenderão em ROSA indicando onde o operador deve realizar o picking daquele volume alocado no início do processo.
Nesse instante, todos os Leds acenderão em VERDE indicando o fim do picking daquele volume alocado.
O operador deverá colar a etiqueta na caixa montada, inserir na caixa o volume que está na esteira e acionar o Led VERDE do PTW.
PLC: após acionar o led VERDE, a esteira deverá avançar, trazendo o próximo volume para tratamento.
PLC: Ao ser retirado o volume da linha, a esteira deve permanecer imóvel até que sejam dados os comandos conforme previstos acima.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Pedido Misto com uma caixa Pollux / Venus  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Quando um volume de um pedido que se encaixa nesse cenário chegar na estação ORDER STARTER PTW, através de um Leitor Fixo na linha, ocorrerá a leitura do código de barras da caixa e será informado na tela do Order Starter, a CAIXA MASTER que deve ser montada para aquele pedido.
O Led da posição onde o volume deve ser alocado no PTW devera acender em ROXO.
PLC: O volume na esteira deverá parar no próximo sensor após o ponto de leitura. Caso não ocorra a leitura, o volume deverá permanecer também no sensor seguinte ao do Leitor Fixo na linha e nenhum Led do PTW acenderá.
O colaborador deverá montar a CAIXA MASTER e realizar a leitura do QR Code da caixa pelo Leitor Móvel instalado no PC.
Nesse instante, ocorrerá a impressão da etiqueta e os Leds acenderão em ROXO indicando onde o operador deve realizar o picking daquele volume alocado no início do processo.
Nesse instante, todos os Leds acenderão em VERDE indicando o fim do picking daquele volume alocado.
O operador deverá colar a etiqueta na caixa montada, inserir na caixa o volume que está na esteira e acionar o Led VERDE do PTW.
PLC: após acionar o led VERDE, a esteira deverá avançar, trazendo o próximo volume para tratamento.
PLC: Ao ser retirado o volume da linha, a esteira deve permanecer imóvel até que sejam dados os comandos conforme previstos acima.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Pedido Misto com uma caixa Pollux / Venus  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Quando um volume de um pedido que se encaixa nesse cenário chegar na estação ORDER STARTER PTW, através de um Leitor Fixo na linha, ocorrerá a leitura do código de barras da caixa e será informado na tela do Order Starter, a CAIXA MASTER que deve ser montada para aquele pedido.
O Led da posição onde o volume deve ser alocado no PTW devera acender em AZUL.
PLC: O volume na esteira deverá parar no próximo sensor após o ponto de leitura. Caso não ocorra a leitura1’, o volume deverá permanecer também no sensor seguinte ao do Leitor Fixo na linha e nenhum Led do PTW acenderá.
O colaborador deverá montar a CAIXA MASTER e realizar a leitura do QR Code da caixa pelo Leitor Móvel instalado no PC.
Nesse instante, ocorrerá a impressão da etiqueta e os Leds acenderão em ROSA indicando onde o operador deve realizar o picking daquele volume alocado no início do processo.
Nesse instante, todos os Leds acenderão em VERDE indicando o fim do picking daquele volume alocado.
O operador deverá colar a etiqueta na caixa montada, inserir na caixa o volume que está na esteira e acionar o Led VERDE do PTW.
PLC: após acionar o led VERDE, a esteira deverá avançar, trazendo o próximo volume para tratamento.
PLC: Ao ser retirado o volume da linha, a esteira deve permanecer imóvel até que sejam dados os comandos conforme previstos acima.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Caixa Adicional  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Operador ao realizar a separação do pedido, verifica que a caixa atual não será suficiente para alocar todos os itens e deverá solicitar uma caixa adicional. Para isso ao lado do display principal terá um botão que quando acionado informa ao sistema VELOX que será necessária uma caixa adicional para aquele pedido, e automaticamente essa informação é enviada para o Order Start, para que o operador induza a caixa na linha.
Na tela do Order Start operador receberá a informação que existem caixas adicionais a serem induzidas na linha.
Operador seleciona o tipo de caixa que irá induzir na linha e realiza a impressão da etiqueta.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Caixa Adicional  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Operador ao realizar a separação do pedido, verifica que a caixa atual não será suficiente para alocar todos os itens e deverá solicitar uma caixa adicional. Para isso ao lado do display principal terá um botão que quando acionado informa ao sistema VELOX que será necessária uma caixa adicional para aquele pedido, e automaticamente essa informação é enviada para o Order Start, para que o operador induza a caixa na linha.
Na tela do Order Start operador receberá a informação que existem caixas adicionais a serem induzidas na linha, e esse caixa será priorizada na tela do order start.
Velox informa ao operador o tipo de caixa que deverá induzir na linha e realiza a impressão da etiqueta.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Caixa Adicional  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Operador ao realizar a separação do pedido, verifica que a caixa atual não será suficiente para alocar todos os itens e deverá solicitar uma caixa adicional. Para isso ao lado do display principal terá um botão que quando acionado informa ao sistema VELOX que será necessária uma caixa adicional para aquele pedido, e automaticamente essa informação é enviada para o Order Start, para que o operador induza a caixa na linha.
Na tela do Order Start operador receberá a informação que existem caixas adicionais a serem induzidas na linha.
Operador seleciona o tipo de caixa que irá induzir na linha e realiza a impressão da etiqueta.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.3.docx`  
**Heading:** Priorização de pedidos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de pedidos está presente a função de priorização de pedidos, sendo possível selecionar um ou mais volumes para priorizar, sendo prioridade 1 a prioridade máxima e a prioridade 5 a prioridade mínima. Em casos de mais de um volume selecionado a Velox irá seguir com um segundo critério de priorização utilizando a fila já existente no Order Start, ou seja, quando 2 (dois) ou mais pedimos forem priorizados com o mesmo número de prioridade, o primeiro a ficar disponível para sair do Order Start, será o que estiver mais próximo ao topo da lista.
A funcionalidade conta com filtros por, ordem de separação, loja e tipo de caixa.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Priorização de pedidos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de pedidos está presente a função de priorização de pedidos, sendo possível realizar a priorização de mais de uma loja desde que o valor priorização não seja o mesmo. A prioridade segue a seguinte classificação, prioridade 1 a prioridade máxima e a prioridade 5 a prioridade mínima. No caso dos volumes o Velox irá seguir com um critério de priorização utilizando a fila já existente no Order Start, ou seja, quando 2 (dois) ou mais pedimos forem priorizados com o mesmo número de prioridade, o primeiro a ficar disponível para sair do Order Start, será o que estiver mais próximo ao topo da lista.
A funcionalidade conta com filtros por, ordem de separação, loja e tipo de caixa.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Fechamento do Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Fechamento do Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O fechamento do pallet será feito dentro dos processos da Invent e poderá acontecer de 4 formas diferentes:
Cubagem do pallet
Peso do palete
Via tela de fechamento de pallet (forçado)
Diretamente pelo operador nas Rampas (forçado) – Realizando a leitura do código da posição para iniciar o processo de fechamento e após realizando a leitura da master
Em todos os processos após a finalização do pallet enviamos as informações descritas no tópico “4.5 Pallet Montado” para o WMS fazer as tratativas necessárias.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar a leitura de um código master que será vinculado aos volumes que foram alocados a este pallet.
A impressão deste código master é de responsabilidade do WMS.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Fechamento do Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Regra de "Bypass" (Pallets Monocliente)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme definido no escopo, o WCS aplica um filtro na entrada para identificar cargas que não devem passar pela automação de fracionados.
Critério: Se a cubagem identificar que o volume total do pedido equivale a um ou mais pallets completos para um único cliente (Carga Fechada).
Ação: O WCS não gera onda para a esteira e marca o pedido como "Atendimento Manual/Doca", instruindo o WMS a seguir com a separação de Pallet Fechado (Full Pallet).
Objetivo: Evitar o retrabalho de desmontar um pallet fechado para colocar em caixas plásticas, passar no sorter e remontar o mesmo pallet na rampa.
Obs: Pedidos que tenham a quantidade necessária equivalente a um pallet inteiro, não terão a coleta enviada ao WCS. Essa coleta passa a ser de responsabilidade do WMS por se tratar de um pedido que supre um pallet completo.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Indução de Pedidos Fracionados (Fluxo Padrão)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Este fluxo aplica-se a pedidos que serão separados nas zonas automatizadas (PBL no Térreo ou PBL no Mezanino). É o momento onde o planejamento lógico se torna um volume físico rastreável.
Passo a Passo:
Visualização e Cubagem (Inteligência WCS): O operador visualiza na interface do WCS a fila de pedidos pendentes, já ordenada por prioridade e transportadora. O sistema exibe a listagem de tarefas a serem executadas, indicando a quantidade exata de caixas necessárias as tarefas integradas.
Vinculação (Casamento Lógico):
O operador acessa a tela de Order Start (desktop ou PDV/Tablet), onde o WCS exibe a fila de pedidos prontos para indução naquela área (Mezanino ou Térreo), já com a quantidade de caixas necessárias calculada. O operador induz fisicamente cada caixa plástica na esteira — o WCS lê a etiqueta burra da caixa e registra automaticamente o vínculo entre aquela caixa física e o pedido sistêmico. A partir desse momento, o WCS sabe exatamente por quais postos aquela caixa deve passar para completar a separação. Será exibido o total de caixas necessárias para finalizar os pedidos integrados disponíveis para aquela área.
O operador realiza a indução da caixa plástica no Order Start Principal e o sistema WCS registra o vínculo físico e sistêmico do pedido automaticamente.
O volume seguirá automaticamente para a os postos de picking, onde nosso sistema vai ler a “Etiqueta Burra” da caixa plástica (etiqueta que pode ser usada para vários pedidos pois quando concluída é resetada ao pedido for conferido, embalado e enviado para expedição, possibilitando a reutilização dessa caixa plástica para outros pedidos), nosso sistema vincula a caixa plástica ao pedido que por sua vez entende que aquela caixa especifica deve desviar nos respectivos postos para que a coleta seja realizada.
Bypass: Se o pedido não possuir itens em áreas automatizadas, o sistema roteia a caixa diretamente para a Conferência/Balança.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Tela de Gestão de Volumes do Pedido  
**Score:** 93.8 (fuzzy) | **Data:** 2026-06-19

Objetivo: Disponibilizar uma interface de supervisão para auditoria e cancelamento granular de volumes de um pedido antes do faturamento. O foco principal é mitigar erros operacionais de quantidade (ex: erro de digitação onde 350 unidades foram solicitadas ao invés de 35) sem a necessidade de cancelamento total e reprocessamento do pedido.
Funcionamento da Interface:
Busca e Identificação:
O supervisor realiza a busca pelo Número do Pedido.
O sistema exibe o status global do pedido e libera as opções de edição conforme o estágio atual.
Cenário A: Pedido em Separação ou Finalizado (Grid de Volumes)
O sistema carrega uma grid listando todos os volumes (LPNs/Etiquetas) gerados para o pedido.
Colunas: ID do Volume | Status (Picking / Sorteado / Expedição) | Itens/Qtd no Volume | Seleção (Checkbox).
Ação Operacional: O supervisor seleciona os volumes excedentes (no exemplo de 350 para 35, seleciona-se os volumes que contêm as 315 unidades excedentes) e aciona a função "CANCELAR VOLUMES SELECIONADOS".
Resultado: Os volumes não selecionados (corretos) seguem o fluxo normal de expedição.
Lógica de Retorno Interno (Fluxo de Exceção):
Os volumes cancelados nesta tela assumem imediatamente o status lógico de "RETORNO AO PICKING".
Diferencial WCS: O sistema não envia estes volumes para o fluxo fiscal de "Devolução de Venda" (que exigiria NF de entrada). O WCS trata como um estorno interno.
Físico: O sistema direciona estes volumes para uma rampa de exceção ou emite alerta no ponto de leitura, instruindo o abastecedor a devolver os itens fisicamente para a prateleira de Picking (estoque sombra), agilizando a recomposição do saldo.
Cenário B: Pedido Não Iniciado (Aguardando Separação)
Caso o pedido ainda não possua volumes gerados (Status: Aguardando Separação), a tela habilita a edição direta no cabeçalho.
Ação: O supervisor altera o campo "Quantidade Solicitada" (ex: de 350 para 35) e salva.
Resultado: O WCS recalcula a meta da onda instantaneamente. Quando o operador iniciar a tarefa, o sistema solicitará apenas a nova quantidade corrigida.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** Gatilhos de Fechamento de Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS gerencia o encerramento do pallet de forma automática baseada em dois critérios:
Fechamento Físico (Cubagem): O algoritmo do WCS identifica que a soma volumétrica (m³) ou peso dos itens bipados atingiu o limite configurado para aquele pallet físico.
Fechamento Lógico (Fim de Pedido): Todos os itens previstos para aquela rota/cliente foram bipados, não havendo mais pendências.

---
**Origem:** [I24.117] 2024 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Recirculação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito. Essa quantidade de recirculação é parametrizável no sistema WCS. Em caso de noread continuo para evitar o looping desse volume o cliente pode definir um limite de vezes que esse volume pode dar noread e recircular, após chegar nesse limite o volume é desviado para rejeito.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Cubagem + Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O cálculo de cubagem para os pedidos, será de responsabilidade do WCS, que fará o cálculo de cubagem a cada integração recebida do WMS, para isso deverá receber todas as informações de dimensões e peso dos produtos para realizar esse cálculo. Com isso, realizará o cálculo de cubagem, totalizando as dimensões dos itens, gerando os volumes e informando a quantidade de caixas necessárias para atender o pedido.
Um pedido poderá ser coletado por um ou mais Picking Carts simultaneamente, sendo suas tarefas de separação distribuídas para as zonas correspondentes de acordo com os produtos do pedido. Após a separação, seguem para a conferência e, após validados, são encaminhados ao Put To Light (PTL), onde os volumes são consolidados por pedido para finalização da expedição.
Poderá ter mais de 01 (um) volume, de um mesmo pedido, no mesmo Picking cart, caso a coleta seja na mesma zona de separação.
O sistema contará com parâmetros de ocupação mínima e máxima de volume, definidos em tela. Quando um pedido apresentar poucos itens e não atingir a ocupação mínima configurada, o WCS identificará automaticamente outros pedidos com a mesma característica e os agrupará na mesma caixa (galeia), a fim de otimizar o espaço e evitar volumes com pouca ocupação. Esses pedidos agrupados serão posteriormente separados no PTW, caracterizando o método de separação multi.
OBS: O WCS só consolidará pedidos que tenham posições disponíveis para alocação no PTW.
O sistema também contará com parâmetros de ocupação máxima de volume, garantindo que as caixas (galeias) não ultrapassem um nível de preenchimento que possa comprometer a integridade dos produtos ou a eficiência operacional. Recomenda-se que esse limite não seja configurado em 100%, considerando a diversidade de dimensões e formatos dos itens, evitando, assim, excesso de compactação e dificuldades no manuseio.
As caixas(galeias) utilizadas para realizar a separação dos pedidos, serão caixas plásticas com o mesmo padrão de medida para o Picking cart (800 x 600 x 450).
Picking Coletor – Itens Inconformes (Carrinhos e Regra de Cubagem)
No processo de Picking Coletor (itens inconformes), a separação será realizada utilizando carrinhos já adquiridos pela Florarte, cujas dimensões são:
Carrinho 1 (C1): Altura 168 cm | Largura 89 cm | Comprimento 165 cm
Carrinho 2 (C2): Altura 183 cm | Largura 89 cm | Comprimento 153 cm
Carrinho 3 (C3): Altura 98 cm | Largura 75 cm | Comprimento 113 cm
Carrinho 4 (C4): Altura 168 cm | Largura 69 cm | Comprimento 165 cm
Como se trata de itens inconformes, podem ocorrer cenários em que uma das dimensões do item exceda a dimensão do carrinho. Para esses casos, o WCS adotará a seguinte regra:
O item poderá ser alocado para separação no carrinho desde que pelo menos 2 (duas) dimensões do item caibam dentro das dimensões máximas do carrinho.
Caso a 3ª dimensão exceda, o WCS deverá limitar (capar) essa dimensão para fins de cálculo, considerando como valor máximo a maior dimensão do carrinho (entre altura, largura e comprimento do carrinho selecionado).
OBS: Essa regra tem como objetivo padronizar o cálculo de ocupação/cubagem para determinar quantos itens podem ser alocados em um carrinho, mesmo quando houver excedente em uma dimensão.
Após a conferência será realizado o Packing (embalagem) dos itens recebidos nas caixas de papelão.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** 2 – WCS calcula cubagem e informa ao SAP caixas necessárias por remessa  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Ao receber o dados do item acima, WCS deve retornar ao SAP as caixas necessárias por remessa com base na cubagem.
Obs: Quantidade de caixa por tamanho e o tamanho das caixas.
Onde o campo "N° Material da caixa (390000010)" é destinado ao tamanho da caixa, e o campo "Qtd cx por tamanho" a quantidade.
WCS  SAP
As integrações 2 e 3 do GAP 04. Serão de envio/resposta na mesma chamada, ocorrerá de forma síncrona, onde o WCS envia a necessidade de caixas e o SAP retorna com a quantidade de caixas criadas.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Pesagem e Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Etapa de pesagem e cubagem (Click06), o operador irá bipar a etiqueta de pallet e realizar a pesagem do pallet, desta maneira será feita a pesagem do pallet por completo.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Cubagem de ULDs  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nesta etapa operador registra o peso e as medidas da ULD, da seguinte maneira:
Na aba (cadastro cubagem) O operador precisa bipar a etiqueta da ULD, informar qual seria o peso em quilos, altura (em centímetros), opcionalmente informar o contorno da ULD, e uma observação.
Na aba (edição cubagem) O operador precisa bipar a etiqueta da ULD, clicar no ícone de pesquisa, o sistema VELOX irá carregar as informações de cubagem anteriores da ULD, então o operador altera o que for pertinente e salva as modificações.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Cubagem de ULDs  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nesta etapa operador registra o peso e as medidas da ULD, da seguinte maneira:
Na aba (cadastro cubagem) O operador precisa bipar a etiqueta da ULD, informar qual seria o peso em quilos, altura (em centímetros), opcionalmente informar o contorno da ULD, e uma observação.
Na aba (edição cubagem) O operador precisa bipar a etiqueta da ULD, clicar no ícone de pesquisa, o sistema VELOX irá carregar as informações de cubagem anteriores da ULD, então o operador altera o que for pertinente e salva as modificações.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Cubagem de ULDs  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nesta etapa operador registra o peso e as medidas da ULD, da seguinte maneira:
Na aba (cadastro cubagem) O operador precisa bipar a etiqueta da ULD, informar qual seria o peso em quilos, altura (em centímetros), opcionalmente informar o contorno da ULD, e uma observação.
Na aba (edição cubagem) O operador precisa bipar a etiqueta da ULD, clicar no ícone de pesquisa, o sistema VELOX irá carregar as informações de cubagem anteriores da ULD, então o operador altera o que for pertinente e salva as modificações.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Cubagem de ULDs  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nesta etapa operador registra o peso e as medidas da ULD, da seguinte maneira:
Na aba (cadastro cubagem) O operador precisa bipar a etiqueta da ULD, informar qual seria o peso em quilos, altura (em centímetros), opcionalmente informar o contorno da ULD, e uma observação.
Na aba (edição cubagem) O operador precisa bipar a etiqueta da ULD, clicar no ícone de pesquisa, o sistema VELOX irá carregar as informações de cubagem anteriores da ULD, então o operador altera o que for pertinente e salva as modificações.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Cubagem de ULDs  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nesta etapa operador registra o peso e as medidas da ULD, da seguinte maneira:
Na aba (cadastro cubagem) O operador precisa informar qual é o usuário responsável pela cubagem da ULD, bipar a etiqueta da ULD, informar qual seria o peso em quilos, altura (em centímetros), opcionalmente informar o contorno da ULD, e uma observação.
Na aba (edição cubagem) O operador precisa bipar a etiqueta da ULD, clicar no ícone de pesquisa, o sistema VELOX irá carregar as informações de cubagem anteriores da ULD, então o operador altera o que for pertinente e salva as modificações.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Cubagem + Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do WMS, para isso deverá receber todas as informações de dimensões e peso dos produtos para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens gerando os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizara as informações dos itens, recebidas na integração de order recebida do WMS. Nesse caso, Velox não armazenará o cadastro dos itens no sistema Velox.
A cubagem será realizada visando as zonas de separação que serão determinadas pelo próprio cliente.
Um pedido pode ser coletado por um ou mais Picking cart(s) ao mesmo tempo, sendo uma ou mais tarefas de separação destinadas para as zonas de acordo com os produtos do pedido, serão unificados posteriormente no PTL.
Poderá ter mais de um volume de um pedido no mesmo Picking cart em casos de coleta na mesma zona de separação.
O sistema terá parâmetros de ocupações mínimas com o intuito de caso não serem alcançados, deverá ser acrescentado mais pedidos e coletados em conjunto, sendo separados posteriormente no PTW, método de separação multi.
O sistema terá parâmetros de ocupações máximas para termos o controle da caixa não ficar extremamente cheia a ponto de prejudicar a operação. Recomendamos que este parâmetro específico seja diferente de 100% devido as dimensões de cada produto onde existe uma grande variedade.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas plásticas com o mesmo padrão de medida, sendo dois tipos de caixas: Picking cart (800 x 600 x 450) e Picking coletor (XXXX)
Após a conferência será realizado o Packing dos itens recebidos para caixas de papelão. Será de responsabilidade do time operacional informar ao Velox qual caixa será utilizada no Packing na tela de Conferência.
É de responsabilidade do cliente, o cadastro de todas as caixas de papelão com as informações de peso, dimensão e  código da caixa, que será que serão utilizadas na área de Packing.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Cubagem + Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do WMS, para isso deverá receber todas as informações de dimensões e peso dos produtos para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens gerando os volumes e informa a quantidade de caixas que necessitará para atender o pedido.
Velox utilizara as informações dos itens, recebidas na integração de order recebida do WMS. Nesse caso, Velox não armazenará o cadastro dos itens no sistema Velox.
A cubagem será realizada visando as zonas de separação que serão determinadas pelo próprio cliente.
Um pedido pode ser coletado por um ou mais Picking cart(s) ao mesmo tempo, sendo uma ou mais tarefas de separação destinadas para as zonas de acordo com os produtos do pedido, serão unificados posteriormente no PTL.
Poderá ter mais de um volume de um pedido no mesmo Picking cart em casos de coleta na mesma zona de separação.
O sistema terá parâmetros de ocupações mínimas com o intuito de caso não serem alcançados, deverá ser acrescentado mais pedidos e coletados em conjunto, sendo separados posteriormente no PTW, método de separação multi.
O sistema terá parâmetros de ocupações máximas para termos o controle da caixa não ficar extremamente cheia a ponto de prejudicar a operação. Recomendamos que este parâmetro específico seja diferente de 100% devido as dimensões de cada produto onde existe uma grande variedade.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas plásticas com o mesmo padrão de medida para o Picking cart: (800 x 600 x 450) e Picking coletor (inconformes) será utilizado o carrinho que tem a medida: (pode ser que não seja utilizado a cubagem)
Após a conferência será realizado o Packing dos itens recebidos para caixas de papelão. Será de responsabilidade do time operacional informar ao Velox qual caixa será utilizada no Packing na tela de Conferência.
É de responsabilidade do cliente, o cadastro de todas as caixas de papelão com as informações de peso, dimensão e código da caixa, que serão utilizadas na área de Packing.
O WCS deve informar qual é o melhor modelo de caixa para atender o pedido, porém a operação terá a flexibilidade de seguir ou não a sugestão de caixa.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Cubagem + Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O cálculo de cubagem para os pedidos, será de responsabilidade do WCS, onde fará o cálculo de cubagem a cada integração recebida do WMS, para isso deverá receber todas as informações de dimensões e peso dos produtos para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens gerando os volumes e informa a quantidade de caixas que necessitará para atender o pedido.
O WCS utilizara as informações dos itens, recebidas na integração de order recebida do WMS. Nesse caso, não armazenará o cadastro dos itens no sistema WCS.
A cubagem será realizada visando as zonas de separação que serão determinadas pelo próprio cliente.
Um pedido pode ser coletado por um ou mais Picking cart(s) ao mesmo tempo, sendo uma ou mais tarefas de separação destinadas para as zonas de acordo com os produtos do pedido, serão unificados posteriormente no PTL.
Poderá ter mais de um volume de um pedido no mesmo Picking cart em casos de coleta na mesma zona de separação.
O sistema terá parâmetros de ocupações mínimas com o intuito de caso não serem alcançados, deverá ser acrescentado mais pedidos e coletados em conjunto, sendo separados posteriormente no PTW, método de separação multi.
O sistema terá parâmetros de ocupações máximas para termos o controle da caixa não ficar extremamente cheia a ponto de prejudicar a operação. Recomendamos que este parâmetro específico seja diferente de 100% devido as dimensões de cada produto onde existe uma grande variedade.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas plásticas com o mesmo padrão de medida para o Picking cart: (800 x 600 x 450) e Picking coletor (inconformes) será utilizado o carrinho que tem a medida: (pode ser que não seja utilizado a cubagem)
Após a conferência será realizado o Packing dos itens recebidos para caixas de papelão. Será de responsabilidade do time operacional informar ao WCS qual caixa será utilizada no Packing na tela de Conferência.
É de responsabilidade do cliente, o cadastro de todas as caixas de papelão com as informações de peso, dimensão e código da caixa, que serão utilizadas na área de Packing.
O WCS deve informar qual é o melhor modelo de caixa para atender o pedido, porém a operação terá a flexibilidade de seguir ou não a sugestão de caixa.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Cubagem + Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do EWM, para isso deverá receber todas as informações de dimensões e peso dos produtos fracionados para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens com as dimensões das caixas previamente cadastradas no Velox, com isso gera os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizará as informações dos itens recebidos a cada integração de order recebida do EWM. Com isso, Velox não realiza o cadastro de dimensões dos produtos.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema Velox, com as informações de dimensões de cada caixa.
As caixas utilizadas para realizar a separação dos itens fracionados, serão caixas finais de papelão, ou seja, não serão trocadas.
Full case (caixa fechada) sempre será tratado como volume, sendo 1 (uma) caixa fechada 1 (um) volume. Exemplo: o pedido solicita 2 (duas) caixas fechadas do mesmo produto, serão tratados como 2 (dois) volumes e impresso 2 (duas) etiquetas de full case (caixa fechada).
Teremos 5 (cinco) opções de caixas cadastradas no sistema:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Cubagem + Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do EWM, para isso deverá receber todas as informações de dimensões e peso dos produtos fracionados para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens com as dimensões das caixas previamente cadastradas no Velox, com isso gera os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizará as informações dos itens recebidos a cada integração de order recebida do EWM. Com isso, Velox não realiza o cadastro de dimensões dos produtos.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema Velox, com as informações de dimensões de cada caixa.
As caixas utilizadas para realizar a separação dos itens fracionados, serão caixas finais de papelão, ou seja, não serão trocadas.
Full case (caixa fechada) sempre será tratado como volume, sendo 1 (uma) caixa fechada 1 (um) volume. Exemplo: o pedido solicita 2 (duas) caixas fechadas do mesmo produto, serão tratados como 2 (dois) volumes e impresso 2 (duas) etiquetas de full case (caixa fechada).
Teremos 5 (cinco) opções de caixas cadastradas no sistema:

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Cubagem  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O processo de cubagem será feito nos dois sorters.
No ponto de cubagem, serão instalados uma balança, um cubômetro e uma câmera no topo de cada nível. Esses dispositivos trabalham em conjunto para registrar o peso, as dimensões e a forma dos volumes, permitindo uma determinação da cubagem de forma mais precisa e eficiente, assim, reduzindo os erros e aumentando a eficiência da operação.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Cubagem  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O processo de cubagem será feito nos dois sorters.
No ponto de cubagem, serão instalados uma balança, um cubômetro e uma câmera no topo de cada nível. Esses dispositivos trabalham em conjunto para registrar o peso, as dimensões e a forma dos volumes, permitindo uma determinação da cubagem de forma mais precisa e eficiente, assim, reduzindo os erros e aumentando a eficiência da operação.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Cubagem  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O processo de cubagem será feito nos dois sorters.
No ponto de cubagem, serão instalados uma balança, um cubômetro e uma câmera no topo de cada nível. Esses dispositivos trabalham em conjunto para registrar o peso, as dimensões e a forma dos volumes, permitindo uma determinação da cubagem de forma mais precisa e eficiente, assim, reduzindo os erros e aumentando a eficiência da operação.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 5.docx`  
**Heading:** Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 6.docx`  
**Heading:** Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 7.docx`  
**Heading:** Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1.docx`  
**Heading:** Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 2.docx`  
**Heading:** Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 3.docx`  
**Heading:** Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 4.docx`  
**Heading:** Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Produção x Volume  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar as informações de produção de volume por rampa.
Campos:
Código da etiqueta;
Destino;
Rampa;
Peso;
Altura;
Largura;
Comprimento;
Data/hora de aferição da balança;
Data/hora de aferição de cubagem;
Data/hora desvio rampa;
Portal balança;
Portal dimensionador;
Quantidade de recirculação;
Rejeito.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivo desvio;
Rampa;
Balança;
Motivo rejeito;
Motivo recirculação;
Rota.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produção x Volume  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar as informações de produção de volume por rampa.
Campos:
Código da etiqueta;
Destino;
Rampa;
Peso;
Altura;
Largura;
Comprimento;
Data/hora de aferição da balança;
Data/hora de aferição de cubagem;
Data/hora desvio rampa;
Portal balança;
Portal dimensionador;
Quantidade de recirculação;
Rejeito.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivo desvio;
Rampa;
Balança;
Motivo rejeito;
Motivo recirculação;
Rota.

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `ESPECIFICACAO DE SOFTWARE - Caixas porTipos de pedidos - Caixas exclusivas.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

ESPECIFICAÇÃO DE SOFTWARE
ADITIVO CAIXAS E CUBAGEM
Apresentamos nossa proposta e condições gerais de fornecimento do sistema MFC em referência.
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `ESPECIFICACAO DE SOFTWARE - Caixas porTipos de pedidos - Caixas exclusivas.docx`  
**Heading:** Objetivo do documento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Este documento tem como objetivo formalizar o escopo do aditivo acordado com a Hinode, incluindo o detalhamento técnico das alterações no cadastro de caixas e nas regras de cubagem, com a implementação da especificação do tipo de pedido (Franquia ou E-comm, etc) para cada modelo de caixa, a adequação da lógica de cubagem para considerar essa especificação e a implementação da funcionalidade de "Caixa Exclusiva"

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `ESPECIFICACAO DE SOFTWARE - Caixas porTipos de pedidos - Caixas exclusivas.docx`  
**Heading:** Alteração nas Regras de Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Inclusão da Especificação de Tipo de Pedido na Lógica de Cubagem:
A regra de cubagem será modificada para levar em consideração o tipo de pedido ao realizar a cubagem do pedido.
Quando o sistema realizar a cubagem do pedido, ele deve verificar se a caixa é compatível com o tipo de pedido especificado. Caso contrário, a cubagem deve sugerir ou realizar o processo de distribuição para outra caixa válida.
Exemplo: Se um modelo de caixa foi designado exclusivamente para pedidos E-comm, o sistema só poderá alocar itens de pedidos E-comm nessa caixa.
Impacto no Fluxo de Cubagem
Caixa por tipo de pedido: Durante o processo de cubagem, o sistema deve garantir que as caixas adequadas ao tipo de pedido (Franquia ou E-comm) sejam alocadas corretamente, sem sobrecarregar ou desviar itens de tipos diferentes para caixas erradas.
Caixa Exclusiva: Durante o processo de cubagem, caso um pedido contenha itens que estejam associados à "Caixa Exclusiva", o sistema deverá priorizar essa caixa para esses itens. Caso a caixa cadastrada não tenha capacidade para acomodar todos os itens, o restante dos itens do pedido será alocado a outras caixas.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV1.docx`  
**Heading:** Cubagem das caixas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará o Velox a quantidade de caixas geradas para o pedido.
A informação de caixas calculadas na cubagem considera os volumes de fullcase.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV2.docx`  
**Heading:** Cubagem das caixas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará o Velox a quantidade de caixas geradas para o pedido.
A informação de caixas calculadas na cubagem considera os volumes de fullcase.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV3.docx`  
**Heading:** Cubagem das caixas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará o Velox a quantidade de caixas geradas para o pedido.
A informação de caixas calculadas na cubagem considera os volumes de fullcase.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV4.docx`  
**Heading:** Cubagem das caixas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará o Velox a quantidade de caixas geradas para o pedido.
A informação de caixas calculadas na cubagem considera os volumes de fullcase.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV6.docx`  
**Heading:** Cubagem das caixas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará o Velox a quantidade de caixas geradas para o pedido.
A informação de caixas calculadas na cubagem considera os volumes de fullcase.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV7.docx`  
**Heading:** Cubagem das caixas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará o Velox a quantidade de caixas geradas para o pedido.
A informação de caixas calculadas na cubagem considera os volumes de fullcase.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Cubagem das caixas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará o Velox a quantidade de caixas geradas para o pedido.
A informação de caixas calculadas na cubagem considera os volumes de fullcase.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.2.docx`  
**Heading:** Cubagem – Dimensões dos produtos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cliente irá realizar os cadastros dos produtos de forma com que as dimensões (Comprimento, Altura e Largura) estejam de acordo com as disposições físicas de cada produto.
No Velox estará disponível para consultas a uma tela onde o time do cliente pode ver as informações de casa produto com suas dimensões.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.3.docx`  
**Heading:** Percentual de ocupação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na mesma tela de configuração da caixa o operador pode definir o percentual de ocupação da cubagem, onde o Velox irá usar como referência para gerar a quantidade de caixas/volumes por pedido, inclusive quando for necessário realizar a cubagem novamente após desabilitar um tipo de caixa.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.3.docx`  
**Heading:** Cubagem – Dimensões dos produtos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cliente irá realizar os cadastros dos produtos de forma com que as dimensões (Comprimento, Altura e Largura) estejam de acordo com as disposições físicas de cada produto.
No Velox estará disponível para consultas a uma tela onde o time do cliente pode ver as informações de casa produto com suas dimensões.
O processo de cubagem é realizado no momento do recebimento dos produtos no CD antes dos mesmos serem dispostos nas posições para separação na automação.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Percentual de ocupação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na mesma tela de configuração da caixa o operador pode definir o percentual de ocupação da cubagem, onde o Velox irá usar como referência para gerar a quantidade de caixas/volumes por pedido, inclusive quando for necessário realizar a cubagem novamente após desabilitar um tipo de caixa.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Cubagem – Dimensões dos produtos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cliente irá realizar os cadastros dos produtos de forma com que as dimensões (Comprimento, Altura e Largura) estejam de acordo com as disposições físicas de cada produto.
No Velox estará disponível para consultas a uma tela onde o time do cliente pode ver as informações de casa produto com suas dimensões.
O processo de cubagem é realizado no momento do recebimento dos produtos no CD antes dos mesmos serem dispostos nas posições para separação na automação.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Velox será responsável pelas cubagens dos produtos (SKU), das caixas full case assim como dos percentuais de ocupação das caixas que serão utilizadas nas linhas.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Produtos (SKU)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Todos os produtos que serão processados através da automação dever ser cubados. O processo de cubagem consiste em um cubômetro que terá uma interface de comunicação com o Velox (API rest) como mencionado acima.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 01.docx`  
**Heading:** Cubagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Velox será responsável pelas cubagens dos produtos (SKU), das caixas full case assim como dos percentuais de ocupação das caixas que serão utilizadas nas linhas.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 01.docx`  
**Heading:** Produtos (SKU)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Todos os produtos que serão processados através da automação dever ser cubados. O processo de cubagem consiste em um cubômetro que terá uma interface de comunicação com o Velox (API rest) como mencionado acima.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES -.docx`  
**Heading:** CUBAGEM  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema WMS será responsável pelo cálculo de cubagem dos pedidos para alocação nas caixas pedidos (papelão).

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 1.docx`  
**Heading:** CUBAGEM  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema WMS será responsável pelo cálculo de cubagem dos pedidos para alocação nas caixas pedidos (papelão).

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** CUBAGEM  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema WMS será responsável pelo cálculo de cubagem dos pedidos para alocação nas caixas pedidos (papelão).

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 3.docx`  
**Heading:** 4.1.2.	Cubagem das caixas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará ao WCS o volume e quais itens serão coletados nesse volume.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** 4.1.2.	Cubagem das caixas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará ao WCS o volume e quais itens serão coletados nesse volume.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Fechamento do Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Heading:** Fechamento do Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Heading:** Fechamento do Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Heading:** Fechamento do Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O fechamento do pallet será feito dentro dos processos da Invent e poderá acontecer de 4 formas diferentes:
Cubagem do pallet
Via tela de fechamento de pallet (forçado)
Diretamente pelo operador nas Rampas (forçado)
Finalização de todos os tarefas destinadas para o agrupador do pallet (loja)
Em todos os processos após a finalização do pallet enviamos as informações descritas no tópico “aloca pallet” para o WMS fazer as tratativas necessárias.
Quando for solicitado o fechamento do pallet nas saídas das rampas, o operador deverá realizar a leitura de um código master que será vinculado aos volumes que foram alocados a este pallet.
A impressão deste código master é de responsabilidade do WMS.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Recirculação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito. Essa quantidade de recirculação é parametrizável no sistema Velox.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV2.docx`  
**Heading:** Recirculação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito.
Essa quantidade de recirculação é parametrizável no sistema Velox.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Recirculação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito.
Essa quantidade de recirculação é parametrizável no sistema Velox.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV4.docx`  
**Heading:** Recirculação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito. Essa quantidade de recirculação é parametrizável no sistema Velox, assim como a rampa de rejeito para os volumes recirculados, podendo ou não ser a mesma rampa de rejeito já definida para o sorter

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Dimensões e peso  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para as rampas de entrada 2 (dois) a entrada 7 (sete) os volumes que serão induzidos e tratados pelo sorter devem obedecer aos parâmetros máximos e mínimos de dimensões e peso como apresenta a tabela abaixo:
Para os itens de comprimento > 900mm e/ou largura 600mm, até o limite máximo da tabela acima, deverão ser transportados pela entrada 1 (um) (imagem abaixo).
Essa entrada receberá volumes maiores do que 900mm x 600mm e volumes provenientes do rejeito.
Caso o volume exceda o tamanho da balança, deverá ser enviado um sinal de erro e não um peso aleatório (Invent avaliar possibilidade pós go live)
É de responsabilidade do cliente que os volumes induzidos estejam dentro das especificações citadas nesse documento.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Recirculação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito. Essa quantidade de recirculação é parametrizável no sistema Velox, assim como a rampa de rejeito para os volumes recirculados, podendo ou não ser a mesma rampa de rejeito já definida para o sorter.
Em casos de restrição de fluxo, onde a rampa tiver 2 ou mais volumes seguidos direcionados sequencialmente, o segundo volume deve recircular para assim evitar o gargalo na rampa, evitando que a rampa fique cheia.
Essa quantidade de volumes sequenciais será parametrizável via PLC.
(Invent avaliar possibilidade)

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Dimensões e peso  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para as rampas de entrada 2 (dois) a entrada 7 (sete) os volumes que serão induzidos e tratados pelo sorter devem obedecer aos parâmetros máximos e mínimos de dimensões e peso como apresenta a tabela abaixo:
Para os itens de comprimento > 900mm e/ou largura 600mm, até o limite máximo da tabela acima, deverão ser transportados pela entrada 1 (um) (imagem abaixo).
Essa entrada receberá volumes maiores do que 900mm x 600mm e volumes provenientes do rejeito.
Caso o volume exceda o tamanho da balança, deverá ser enviado um sinal de erro e não um peso aleatório (Invent avaliar possibilidade)
É de responsabilidade do cliente que os volumes induzidos estejam dentro das especificações citadas nesse documento.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Recirculação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito. Essa quantidade de recirculação é parametrizável no sistema Velox, assim como a rampa de rejeito para os volumes recirculados, podendo ou não ser a mesma rampa de rejeito já definida para o sorter.
Em casos de restrição de fluxo, onde a rampa tiver 2 ou mais volumes seguidos direcionados sequencialmente, o segundo volume deve recircular para assim evitar o gargalo na rampa, evitando que a rampa fique cheia.
Essa quantidade de volumes sequenciais será parametrizável via PLC.
(Invent avaliar possibilidade)
Em casos de o carrier do sorter entrar em falha, o volume presente nesse carrier deve recircular.
(Invent avaliar possibilidade)

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Recirculação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular pela quantidade de vezes na esteira determinada pelo usuário (parametrizável no sistema Velox), e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Tipo de volumes  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para atender as necessidades do time Beira Rio os transportadores serão utilizados para o transporte de caixas plásticas e caixas de papelão, sendo que as dimensões mínimas delas pode ser de até 400mm Comprimento, 250mm Largura e 250mm Altura, já as suas dimensões máximas devem ter 800mm Comprimento, 660mm Largura e 660mm Altura, assim como os parâmetros dimensionais teremos o peso mínimo de 500G e o peso máximo de 30KG.
Todos os volumes tratados no Sorter devem obedecer às especificações acima.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Multi-Volumes  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Quando pedido for “multivolumes” e for composto somente por produtos Venus com mais de 4 premades (120 pods/capsulas) as caixas serão enviadas da mesma forma que os pedidos mono porém, com mais de um volume.
São considerados Multi-Volumes quando:
Caso o pedido contenha produtos de Geração 1 (Pollux Fase C) e Geração 2 (Pollux Venus Fase D)
Caso o pedido contenha produtos de Pollux Venus e produtos a serem separados no PTL.
Caso o pedido tenha mais de 4 premades, nesse caso seja gerado mais de 1 caixa para o mesmo pedido, visto que cada caixa comporta 4 volumes.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.2.docx`  
**Heading:** Pedido Unitizado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Quando, no pedido iniciado pela POLLUX, existir mais de 1 volume no mesmo pedido, operador recebe o primeiro volume, e na tela visualiza a informação que nesse pedido existem mais caixas para que seja concluído. A próxima caixa da sequencia deve fazer parte do mesmo pedido para que então o operador realize a conclusão do processo. Neste caso operador unifica as caixas em um envelope de papelão e realiza a impressão de etiqueta de expedição, fixando no exterior do envelope.
Caso nesse pedido ainda exista produtos para serem separados no posto de picking, o processo seguirá o fluxo considerado como pedido Misto.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20.docx`  
**Heading:** Deleta Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para deletar uma ordem de produção da Pollux, a ordem de produção para ser deletada deve estar com todas as caixas com o status “Criado”.
Origem: MFC (Invent)
Destino: Pollux
Metodo: POST
Json:
{
"order_number": "ABC36450 "
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20.docx`  
**Heading:** Pausar Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para pausar uma ordem de produção da Pollux, deixa a ordem de produção (não processada) em estado de aguardo a continuar a produção, ou seja, pausa ordens que possuam todas suas caixas no estado “Criado”. Múltiplas ordens podem ser pausadas.
Origem: MFC (Invent)
Destino: Pollux
Metodo: POST
Json:
{
" production_orders ": [
{
" order_number ": " 0000000001 "
},
{
" order_number ": " 0000000002 "
},
{
" order_number ": " 0000000003 "
},
{
" order_number ": " 0000000004 "
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20.docx`  
**Heading:** Continuar Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para continuar ordem de produção da Pollux, retorna uma ordem de produção ao estado de apto a continuar a produção. Múltiplas ordens podem ser continuadas.
Origem: MFC (Invent)
Destino: Pollux
Metodo: POST
Json:
{
" production_orders ": [
{
" order_number ": " 0000000001 "
},
{
" order_number ": " 0000000002 "
},
{
" order_number ": " 0000000003 "
},
{
" order_number ": " 0000000004 "
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV1.docx`  
**Heading:** Deleta Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para deletar uma ordem de produção da Pollux, a ordem de produção para ser deletada deve estar com todas as caixas com o status “Criado”.
Origem: MFC (Invent)
Destino: Pollux
Metodo: POST
Json:
{
"order_number": "ABC36450 "
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV1.docx`  
**Heading:** Pausar Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para pausar uma ordem de produção da Pollux, deixa a ordem de produção (não processada) em estado de aguardo a continuar a produção, ou seja, pausa ordens que possuam todas suas caixas no estado “Criado”. Múltiplas ordens podem ser pausadas.
Origem: MFC (Invent)
Destino: Pollux
Metodo: POST
Json:
{
" production_orders ": [
{
" order_number ": " 0000000001 "
},
{
" order_number ": " 0000000002 "
},
{
" order_number ": " 0000000003 "
},
{
" order_number ": " 0000000004 "
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV1.docx`  
**Heading:** Continuar Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para continuar ordem de produção da Pollux, retorna uma ordem de produção ao estado de apto a continuar a produção. Múltiplas ordens podem ser continuadas.
Origem: MFC (Invent)
Destino: Pollux
Metodo: POST
Json:
{
" production_orders ": [
{
" order_number ": " 0000000001 "
},
{
" order_number ": " 0000000002 "
},
{
" order_number ": " 0000000003 "
},
{
" order_number ": " 0000000004 "
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV2.docx`  
**Heading:** Deleta Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para deletar uma ordem de produção da Pollux, a ordem de produção para ser deletada deve estar com todas as caixas com o status “Criado”.
Origem: MFC (Invent)
Destino: Pollux
Metodo: POST
Json:
{
"order_number": "ABC36450 "
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV2.docx`  
**Heading:** Pausar Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para pausar uma ordem de produção da Pollux, deixa a ordem de produção (não processada) em estado de aguardo a continuar a produção, ou seja, pausa ordens que possuam todas suas caixas no estado “Criado”. Múltiplas ordens podem ser pausadas.
Origem: MFC (Invent)
Destino: Pollux
Metodo: POST
Json:
{
" production_orders ": [
{
" order_number ": " 0000000001 "
},
{
" order_number ": " 0000000002 "
},
{
" order_number ": " 0000000003 "
},
{
" order_number ": " 0000000004 "
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV2.docx`  
**Heading:** Continuar Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para continuar ordem de produção da Pollux, retorna uma ordem de produção ao estado de apto a continuar a produção. Múltiplas ordens podem ser continuadas.
Origem: MFC (Invent)
Destino: Pollux
Metodo: POST
Json:
{
" production_orders ": [
{
" order_number ": " 0000000001 "
},
{
" order_number ": " 0000000002 "
},
{
" order_number ": " 0000000003 "
},
{
" order_number ": " 0000000004 "
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Deleta Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para deletar uma ordem de produção da Pollux, a ordem de produção para ser deletada deve estar com todas as caixas com o status “Criado”.
Origem: MFC (Invent)
Destino: Pollux
Método: POST
Json:
{
"order_number": "ABC36450 "
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Pausar Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para pausar uma ordem de produção da Pollux, deixa a ordem de produção (não processada) em estado de aguardo a continuar a produção, ou seja, pausa ordens que possuam todas suas caixas no estado “Criado”. Múltiplas ordens podem ser pausadas.
Origem: MFC (Invent)
Destino: Pollux
Método: POST
Json:
{
" production_orders ": [
{
" order_number ": " 0000000001 "
},
{
" order_number ": " 0000000002 "
},
{
" order_number ": " 0000000003 "
},
{
" order_number ": " 0000000004 "
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Continuar Production Order Pollux  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Integração para continuar ordem de produção da Pollux, retorna uma ordem de produção ao estado de apto a continuar a produção. Múltiplas ordens podem ser continuadas.
Origem: MFC (Invent)
Destino: Pollux
Método: POST
Json:
{
" production_orders ": [
{
" order_number ": " 0000000001 "
},
{
" order_number ": " 0000000002 "
},
{
" order_number ": " 0000000003 "
},
{
" order_number ": " 0000000004 "
}
]
}

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Aloca Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

VELOX → WMS
Integração para o Velox enviar para o WMS a informação dos volumes alocados no pallet fechado com suas dimensões e peso. A unidade de medida referente ao peso sempre será em gramas e das dimensões serão em milímetros.
Quando operador verificar fisicamente que o pallet está cheio, deverá realizar a leitura da etiqueta de fechamento de pallet, e nesse momento é enviado a integração com as informações sugeridas abaixo:

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Aloca Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

VELOX → WMS
Integração para o Velox enviar para o WMS a informação dos volumes alocados no pallet fechado com suas dimensões e peso. A unidade de medida referente ao peso sempre será em gramas e das dimensões serão em milímetros.
Quando operador verificar fisicamente que o pallet está cheio, deverá realizar a leitura da etiqueta de fechamento de pallet, e nesse momento é enviado a integração com as informações sugeridas abaixo:
