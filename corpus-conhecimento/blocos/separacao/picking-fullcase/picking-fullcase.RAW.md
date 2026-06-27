# picking-fullcase.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** b5feadc8ea087279

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS
direciona o coletor automaticamente para a tela de coleta, e o operador se desloca até a rua
selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações
detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o
endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item
correspondente.
Após a leitura do endereço, o operador realiza a leitura da etiqueta impressa no Order Start e,
em seguida, faz a leitura do código do produto para confirmar a separação. Esse processo de
leitura é repetido para todos os itens pertencentes àquela posição (endereço), ou seja, o
operador realiza a leitura do código do produto uma vez para cada unidade coletada. O WCS
atualiza a lista de tarefas à medida que o operador confirma as leituras.
Após a coleta de todos os itens de um endereço, o operador pode então seguir para o próximo
endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador
não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir
para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item
que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar
Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas
dos itens que não serão coletados, após a leitura dessas etiquetas o WCS entende que aqueles
itens serão cortados. Quando se deparar com esse cenário o indicado é sinalizar para o setor de
auditoria de estoque para validar a falta real do produto. Se realmente for constado a falta de
itens ele seguirá com o processo de corte acima.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Picking Fullcase e Picking Exceção  
**Score:** — (nome-topico) | **ID:** fae553f085ae6ffe

Para os volumes coletados nos processos de Picking Fullcase e Picking Exceção, será utilizado o
seguinte layout de impressão:

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Picking Fullcase Perigoso  
**Score:** — (nome-topico) | **ID:** ffa2a988e155759b

Para os volumes coletados no processo de Picking Fullcase que se enquadrem na categoria de
produtos perigosos, será utilizado o seguinte layout de impressão:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Canais de Picking dinâmicos (Níveis 1, 2 e 3): Posições fixas de separação de 3 palete,  
**Score:** — (semantico) | **ID:** 2c55e2a3a5c6aa5c

reabastecidas pelo transelevador, destinadas ao atendimento direto da operação de picking.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Canais de Picking comuns (Níveis 1, 2 e 3): Posições fixas de separação com capacidade  
**Score:** — (semantico) | **ID:** 2da542691dc576b0

máxima de 1 paletes, reabastecidas de forma manual por empilhadeiras, sendo elas destinadas
a operação de picking.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 13. Separação (Coleta)  
**Score:** — (semantico) | **ID:** aced9c13e90a2443

A coleta é o processo físico de separação caixa a caixa realizado na zona de picking. Os paletes
saem do armazém e são direcionados para a zona de picking, onde os operadores coletam as
caixas conforme indicado pelo sistema Picking to Light (LED/PBL). As caixas coletadas são
colocadas na esteira [BK10] que as direciona ao sorter.
A zona de picking é dividida em postos. Cada posto é uma zona no sistema que agrupa um
conjunto de posições de coleta. Cada operador é vinculado a um posto e trabalha exclusivamente
nas posições daquele posto, garantindo que nunca fique ocioso enquanto houver demanda.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Campos  
**Score:** — (semantico) | **ID:** 9f21c8ac16c45543

Rampa
Designação (Carregamento/Rejeito
Caixas desviadas
Peso desviado
Caixas pesadas
Volume pesado
Caixas leves
Volume de caixas leves
Caixas frágeis
Volume de caixas frágeis
% das caixas pesadas de acordo com o total
% das caixas leves de acordo com o total
% das caixas frágeis de acordo com o total
Quantidade de transporte (Considerar até o transporte que
está em desvio no momento)
Caixas desviadas por temperatura

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Picking Fullcase  
**Score:** — (nome-topico) | **ID:** e0614f8cf67aa6ad

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona
automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações
detalhadas sobre endereço, produto e quantidade a ser coletada. A lista de coleta poderá
conter tanto itens de Full Case quanto itens de Reabastecimento. Conforme definido
no tópico Order Start Full Case [OS Full Case], esses itens serão agrupados em uma
única lista de coleta, sendo diferenciados apenas na etiqueta impressa.
Execução da Coleta
O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para
indicar a separação do item correspondente. O WCS informa a quantidade total que está sendo
coletada, permitindo ao operador diminuir de acordo com a quantidade real disponível no
endereço. Após selecionar a quantidade, o operador deve realizar a leitura do DUN do produto.
Após a coleta e etiquetagem de todos os itens de um endereço, o operador pode então seguir
para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes.
O processo de coleta (leitura de endereço → quantidade → leitura do DUN) é idêntico
para itens Full Case e itens de Reabastecimento. A diferença entre eles ocorre apenas
na destinação após a indução na esteira, conforme descrito no tópico 7.7.
Troca de Endereço Durante a Coleta
Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele
pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar
o item que está coletando.
Finalizar Coleta e Corte de Itens
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção “Finalizar
Coleta”. Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas
dos itens que não serão coletados. Após a leitura dessas etiquetas, o WCS entende que aqueles
itens serão cortados.
O fluxo de “Finalizar Coleta” se aplica tanto a itens Full Case quanto a itens de
Reabastecimento. Itens de Reabastecimento que forem cortados não gerarão tarefa de
reabastecimento no WCS, e o sistema deverá registrar a ocorrência para visibilidade operacional.
Destinação dos Volumes Após a Coleta
Após a conclusão da coleta na rua, o operador induz os volumes na esteira. O WCS direciona
cada volume conforme o seu tipo:
Volumes Full Case: direcionados via sorter para a rampa de destino correspondente à
transportadora/rota, seguindo o fluxo padrão de checkout e cross-check.
Volumes de Reabastecimento: direcionados para a área específica de
reabastecimento. Após o desvio no ponto de reabastecimento, o WCS gera
automaticamente a tarefa de reabastecimento para movimentação até a posição final
de Picking Fracionado, conforme descrito no tópico 7.11.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 3.2.1. Picking Túnel (Térreo)  
**Score:** — (nome-topico) | **ID:** a398a52419abbb2e

Picking Túnel Térreo:
Lados Esquerda e Direita Térreo (Frente): Estações de Flow Rack com PBL de 10
dígitos para itens fracionados — 540 posições FR3 + 180 posições FR4.
Costas Térreo (Fracionado): Posições de fracionado de maior cubagem, compostas
por 108 posições Mini Pallet e 36 posições Pallet Inteiro, destinadas a SKUs que serão
transferidos em quantidades menores para a caixa plástica. A sinalização de picking
nessas posições segue o mesmo padrão de PBL das posições de frente. A caixa plástica
da automação aguarda na frente enquanto o operador se desloca até a posição de
costas para realizar a coleta.
Nota: As posições de costas do Térreo operam de forma mista entre itens Full Case (caixas
fechadas) e Fracionados de maior cubagem, conforme as quantidades de Mini Pallets e Pallets
Inteiros estabelecidas.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 3.2.2. Picking Túnel (Mezanino)  
**Score:** — (nome-topico) | **ID:** ead95141f20874db

Acesso via elevador/transferência vertical.
Picking Túnel Mezanino: Composto por 5 postos de trabalho de cada lado.
Lados Esquerda e Direita Mezanino (Frente): Estações de Flow Rack com PBL
para itens fracionados — 540 posições FR3 + 180 posições FR4.
Costas Mezanino (Fracionado): 36 posições G/M/P de fracionado (lado esquerdo,
sentido do fluxo), sinalizadas por PBL. O operador coleta o item nas posições de costas
e retorna para depositar na caixa plástica posicionada na frente (na esteira). Não há
desvio da caixa plástica para as costas.
Costas Mezanino (Full Case): 36 posições de caixa fechada (lado direito, sentido do
fluxo). O full case não possui diferenciação por tamanho — cada posição recebe
um único SKU auto-empilhado. A diferenciação por tamanho G/M/P aplica-se
exclusivamente às posições de fracionado. O WCS indica no display a retirada da
caixa fechada; o operador etiqueta e deposita na Esteira Expressa (Túnel).
Nota sobre "itens no Mezanino" (Skip Zone): para fins de roteamento, considera-se que
um pedido possui itens no Mezanino sempre que houver coleta em qualquer posição do
mezanino — frente (flow rack) ou costas (fracionado G/M/P ou fullcase). A lógica de Skip Zone
descrita na seção 8.2 permanece válida com essa definição ampliada.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 9.3. Operação de Full Case Automação  
**Score:** — (semantico) | **ID:** 9d9c22bef05cb1e0

A operação de Itens Fullcase será feita em dois pontos diferentes da automação, o primeiro e
principal com maiores demandas estarão na área dedicada a fullcases, onde serão induzidos na
esteira de Fullcase do Térreo e o segundo serião itens com menos demanda que estarão
localizados nas costas do Picking Térreo e Mezanino.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** 8e5bb131194fa104

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS
direciona o coletor automaticamente para a tela de coleta e os leds irão acender sinalizando a
quantidade de caixas a serem retiradas, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações
detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o
endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item
correspondente.
Após a leitura do endereço, o operador realiza a leitura da etiqueta impressa no Order Start e,
em seguida, faz a leitura do código do produto para confirmar a separação. Esse processo de
leitura é repetido para todos os itens pertencentes àquela posição (endereço), ou seja, o
operador realiza a leitura do código do produto uma vez para cada unidade coletada. O WCS
atualiza a lista de tarefas à medida que o operador confirma as leituras.
Após a coleta de todos os itens de um endereço, o operador apaga o led e pode então seguir
para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes.
Caso o operador não encontre produtos suficientes para completar a coleta de um endereço,
ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para
mudar o item que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar
Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas
dos itens que não serão coletados, após a leitura dessas etiquetas o WCS entende que aqueles
itens serão cortados. Quando se deparar com esse cenário o indicado é sinalizar para o setor de
auditoria de estoque para validar a falta real do produto. Se realmente for constado a falta de
itens ele seguirá com o processo de corte acima.
Os pedidos dessa área dedicada serão induzidos na esteira de Fullcase do Térreo que ficará ao
lado onde esses pedidos pularam toda a automação seguindo diretamente para área de
Expedição.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Picking Fullcase  
**Score:** — (nome-topico) | **ID:** d5c846a14146a0fb

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. A lista de coleta poderá conter tanto itens de Full Case quanto itens de Reabastecimento. Conforme definido no tópico Order Start Full Case [OS Full Case], esses itens serão agrupados em uma única lista de coleta, sendo diferenciados apenas na etiqueta impressa.
Execução da Coleta
O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para indicar a separação do item correspondente. O WCS informa a quantidade total que está sendo coletada, permitindo ao operador diminuir de acordo com a quantidade real disponível no endereço. Após selecionar a quantidade, o operador deve realizar a leitura do DUN do produto.
Após a coleta e etiquetagem de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes.
O processo de coleta (leitura de endereço → quantidade → leitura do DUN) é idêntico para itens Full Case e itens de Reabastecimento. A diferença entre eles ocorre apenas na destinação após a indução na esteira, conforme descrito no tópico 7.7.
Troca de Endereço Durante a Coleta
Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Finalizar Coleta e Corte de Itens
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção “Finalizar Coleta”. Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas dos itens que não serão coletados. Após a leitura dessas etiquetas, o WCS entende que aqueles itens serão cortados.
O fluxo de “Finalizar Coleta” se aplica tanto a itens Full Case quanto a itens de Reabastecimento. Itens de Reabastecimento que forem cortados não gerarão tarefa de reabastecimento no WCS, e o sistema deverá registrar a ocorrência para visibilidade operacional.
Destinação dos Volumes Após a Coleta
Após a conclusão da coleta na rua, o operador induz os volumes na esteira. O WCS direciona cada volume conforme o seu tipo:
Volumes Full Case: direcionados via sorter para a rampa de destino correspondente à transportadora/rota, seguindo o fluxo padrão de checkout e cross-check.
Volumes de Reabastecimento: direcionados para a área específica de reabastecimento. Após o desvio no ponto de reabastecimento, o WCS gera automaticamente a tarefa de reabastecimento para movimentação até a posição final de Picking Fracionado, conforme descrito no tópico 7.11.

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Fullcase  
**Score:** — (semantico) | **ID:** fa32f39bac7a4fbd

Os volumes full case são compostos por caixas fechada (Fracionadas ou não), separadas diretamente pelo WMS, e não passam pelo processo de separação nem pelo Order Start do WCS.
Para que o desvio seja realizado corretamente no sorter, os volumes full case devem estar devidamente integrados no WCS via integração Wave. A integração de Picking Confirm não se aplica a esses volumes.
A impressão e fixação das etiquetas é de responsabilidade do cliente. As etiquetas devem estar fixadas na parte superior das caixas para garantir a leitura correta no portal do sorter.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** b615533a48cd21f9

O Full Case é a separação de caixas fechadas, sem abertura ou fracionamento. O operador utiliza um coletor de dados RF (Android) — fornecido pelo Cliente — e percorre os [A DEFINIR] corredores dedicados a esse tipo de separação.
A coleta é validada em três etapas:
1. O operador bipa o código da posição (fixado no piso ou na longarina) para confirmar que está no corredor correto.
2. Bipa a etiqueta Master da coleta que está em sua posse, chamando o contexto do pedido.
3. Bipa o código da caixa fechada a ser coletada (DUN14 ou EAN da embalagem).
Somente com as três leituras validadas a coleta é registrada no sistema. Se o pallet estiver zerado antes de completar o romaneio, o operador aciona "Finalizar Coleta Parcial" no coletor — os itens não coletados são registrados como corte.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** 9ad312c4a844da20

O processo de Full Case trata do manuseio de caixas fechadas, cuja separação e impressão de
etiquetas são de responsabilidade do cliente.
Para garantir o desvio correto no sorter, é fundamental que os volumes já estejam integrados
ao sistema WCS e que as etiquetas de identificação estejam fixadas na parte superior de cada
caixa.
Fisicamente, as caixas de Full Case seguirão um fluxo direto, passando por cima da área de
Picking (Área A) até o sorter. É importante destacar que este processo não inclui a etapa de
"order start" pela Invent nem a integração de confirmação de separação (Picking Confirm).
