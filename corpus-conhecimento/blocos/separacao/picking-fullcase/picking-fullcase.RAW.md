# picking-fullcase.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** 8087aed5ad105151

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Após a leitura do endereço, o operador realiza a leitura da etiqueta impressa no Order Start e, em seguida, faz a leitura do código do produto para confirmar a separação. Esse processo de leitura é repetido para todos os itens pertencentes àquela posição (endereço), ou seja, o operador realiza a leitura do código do produto uma vez para cada unidade coletada. O WCS atualiza a lista de tarefas à medida que o operador confirma as leituras.
Após a coleta de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Operação para Full Case  
**Score:** — (semantico) | **ID:** 21822cbcb4556381

A operação Full Case será aplicada conforme as seguintes regras:
Válido exclusivamente para produtos do Grupo Cápsulas;
A quantidade solicitada no pedido deve ser igual ou superior à quantidade padrão da embalagem do respectivo produto;
O produto deve possuir saldo disponível nas posições de picking fundo (comum).
Essa lógica visa otimizar a separação de volumes inteiros, reduzindo o tempo de manuseio e aumentando a eficiência operacional.
Na operação de separação Full Case, voltada principalmente para o Grupo Cápsulas, a etiqueta do pedido é impressa no Order Start do FlowRack destinado especificamente a essa modalidade. O operador acessa uma tela dedicada no sistema, utilizando o coletor de dados, e realiza a leitura da etiqueta. Após essa leitura, o sistema exibe as informações necessárias para a coleta: endereço de picking fundo (comum), produto, lote e a quantidade a ser coletada, que será sempre uma unidade correspondente a um volume fechado. Em seguida, o operador se dirige ao endereço informado, realiza a coleta do item e finaliza o processo lendo o endereço de origem, confirmando a separação e colando a etiqueta ao volume full case. O produto coletado deve ser levado diretamente para a área de conferência. Esse fluxo garante agilidade, rastreabilidade e eficiência na separação de volumes fechados.
O sistema WCS só deverá permitir o reabastecimento de itens classificados como Full Case quando a caixa estiver completamente fechada, conforme informações recebidas do ERP D365 F&O (GERENCIADOR DE ESTOQUES) via integração.
Caixas abertas, fracionadas ou incompletas não podem ser movimentadas como Full Case.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Retorno de caixas vazias das posições de FlowRack  
**Score:** — (semantico) | **ID:** b9c789caa70c4581

As caixas vazias que serão utilizadas no abastecimento dos flowracks devem ser previamente identificadas com uma etiqueta contendo a informação “RT1000”. Essas caixas seguirão o fluxo padrão da esteira, passando por todos os postos do sistema, como se fossem volumes normais. No entanto, ao chegarem na transferência anterior à conferência, essas caixas serão automaticamente desviadas por meio de uma lógica implementada no WCS. Esse desvio tem como objetivo separar as caixas vazias do restante da operação, evitando que avancem para a conferência. Após o desvio, as caixas RT1000 serão recolhidas pela operação, podendo então ser redistribuídas ou alocadas para uso conforme a demanda. Esse processo garante a circulação controlada das caixas reutilizáveis e otimizando o reaproveitamento dos recursos logísticos.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** 9cc7090b9c470480

O processo de Full Case trata do manuseio de caixas fechadas, cuja separação e impressão de etiquetas são de responsabilidade do cliente.
Para garantir o desvio correto no sorter, é fundamental que os volumes já estejam integrados ao sistema WCS e que as etiquetas de identificação estejam fixadas na parte superior de cada caixa.
Fisicamente, as caixas de Full Case seguirão um fluxo direto, passando por cima da área de Picking (Área A) até o sorter. É importante destacar que este processo não inclui a etapa de "order start" pela Invent nem a integração de confirmação de separação (Picking Confirm).

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Picking Fullcase  
**Score:** — (nome-topico) | **ID:** 7bf2cfaf9add23b0

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
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** 8ccba4fcf1c46a87

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona o coletor automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Após a leitura do endereço, o operador realiza a leitura da etiqueta impressa no Order Start e, em seguida, faz a leitura do código do produto para confirmar a separação. Esse processo de leitura é repetido para todos os itens pertencentes àquela posição (endereço), ou seja, o operador realiza a leitura do código do produto uma vez para cada unidade coletada. O WCS atualiza a lista de tarefas à medida que o operador confirma as leituras.
Após a coleta de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas dos itens que não serão coletados, após a leitura dessas etiquetas o WCS entende que aqueles itens serão cortados. Quando se deparar com esse cenário o indicado é sinalizar para o setor de auditoria de estoque para validar a falta real do produto. Se realmente for constado a falta de itens ele seguirá com o processo de corte acima.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Picking Fullcase e Picking Exceção  
**Score:** — (nome-topico) | **ID:** 0a8e64bf4640600d

Para os volumes coletados nos processos de Picking Fullcase e Picking Exceção, será utilizado o seguinte layout de impressão:

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Picking Fullcase Perigoso  
**Score:** — (nome-topico) | **ID:** 26f400046d427bdd

Para os volumes coletados no processo de Picking Fullcase que se enquadrem na categoria de produtos perigosos, será utilizado o seguinte layout de impressão:

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** 335152b4b6df5640

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona o coletor automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Após a leitura do endereço, o operador realiza a leitura da etiqueta impressa no Order Start e, em seguida, faz a leitura do código do produto para confirmar a separação. Esse processo de leitura é repetido para todos os itens pertencentes àquela posição (endereço), ou seja, o operador realiza a leitura do código do produto uma vez para cada unidade coletada. O WCS atualiza a lista de tarefas à medida que o operador confirma as leituras.
Após a coleta de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas dos itens que não serão coletados, após a leitura dessas etiquetas o WCS entende que aqueles itens serão cortados. Quando se deparar com esse cenário o indicado é sinalizar para o setor de auditoria de estoque para validar a falta real do produto. Se realmente for constado a falta de itens ele seguirá com o processo de corte acima.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Picking Fullcase e Picking Exceção  
**Score:** — (nome-topico) | **ID:** 5c30ef24bc1760d8

Para os volumes coletados nos processos de Picking Fullcase e Picking Exceção, será utilizado o seguinte layout de impressão:

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Picking Fullcase Perigoso  
**Score:** — (nome-topico) | **ID:** 5239ff33982174c0

Para os volumes coletados no processo de Picking Fullcase que se enquadrem na categoria de produtos perigosos, será utilizado o seguinte layout de impressão:

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** 24c7323f59a3be37

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona o coletor automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Após a leitura do endereço, o operador realiza a leitura da etiqueta impressa no Order Start e, em seguida, faz a leitura do código do produto para confirmar a separação. Esse processo de leitura é repetido para todos os itens pertencentes àquela posição (endereço), ou seja, o operador realiza a leitura do código do produto uma vez para cada unidade coletada. O WCS atualiza a lista de tarefas à medida que o operador confirma as leituras.
Após a coleta de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas dos itens que não serão coletados, após a leitura dessas etiquetas o WCS entende que aqueles itens serão cortados. Quando se deparar com esse cenário o indicado é sinalizar para o setor de auditoria de estoque para validar a falta real do produto. Se realmente for constado a falta de itens ele seguirá com o processo de corte acima.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Picking Fullcase e Picking Exceção  
**Score:** — (nome-topico) | **ID:** 350a9ac5b1508b07

Para os volumes coletados nos processos de Picking Fullcase e Picking Exceção, será utilizado o seguinte layout de impressão:

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Picking Fullcase Perigoso  
**Score:** — (nome-topico) | **ID:** d6c55e1c618b9b75

Para os volumes coletados no processo de Picking Fullcase que se enquadrem na categoria de produtos perigosos, será utilizado o seguinte layout de impressão:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Separação (Coleta)  
**Score:** — (semantico) | **ID:** 02ec913c6ac21815

A coleta é o processo físico de separação caixa a caixa realizado na zona de picking. Os paletes saem do armazém e são direcionados para a zona de picking, onde os operadores coletam as caixas conforme indicado pelo sistema Picking to Light (LED/PBL). As caixas coletadas são colocadas na esteira [BK10] que as direciona ao sorter.
A zona de picking é dividida em postos. Cada posto é uma zona no sistema que agrupa um conjunto de posições de coleta. Cada operador é vinculado a um posto e trabalha exclusivamente nas posições daquele posto, garantindo que nunca fique ocioso enquanto houver demanda.

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Fullcase  
**Score:** — (semantico) | **ID:** fa32f39bac7a4fbd

Os volumes full case são compostos por caixas fechada (Fracionadas ou não), separadas diretamente pelo WMS, e não passam pelo processo de separação nem pelo Order Start do WCS.
Para que o desvio seja realizado corretamente no sorter, os volumes full case devem estar devidamente integrados no WCS via integração Wave. A integração de Picking Confirm não se aplica a esses volumes.
A impressão e fixação das etiquetas é de responsabilidade do cliente. As etiquetas devem estar fixadas na parte superior das caixas para garantir a leitura correta no portal do sorter.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
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
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Picking Túnel (Térreo)  
**Score:** — (nome-topico) | **ID:** 82aedd994ec40966

Picking Túnel Térreo:
Lados Esquerda e Direita Térreo (Frente): Estações de Flow Rack com PBL de 10 dígitos para itens fracionados — 540 posições FR3 + 180 posições FR4.
Costas Térreo (Fracionado): Posições de fracionado de maior cubagem, compostas por 108 posições Mini Pallet e 36 posições Pallet Inteiro, destinadas a SKUs que serão transferidos em quantidades menores para a caixa plástica. A sinalização de picking nessas posições segue o mesmo padrão de PBL das posições de frente. A caixa plástica da automação aguarda na frente enquanto o operador se desloca até a posição de costas para realizar a coleta.
Nota: As posições de costas do Térreo operam de forma mista entre itens Full Case (caixas fechadas) e Fracionados de maior cubagem, conforme as quantidades de Mini Pallets e Pallets Inteiros estabelecidas.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Picking Túnel (Mezanino)  
**Score:** — (nome-topico) | **ID:** 3fd016cbed9b9c2e

Acesso via elevador/transferência vertical.
Picking Túnel Mezanino: Composto por 5 postos de trabalho de cada lado.
Lados Esquerda e Direita Mezanino (Frente): Estações de Flow Rack com PBL para itens fracionados — 540 posições FR3 + 180 posições FR4.
Costas Mezanino (Fracionado): 36 posições G/M/P de fracionado (lado esquerdo, sentido do fluxo), sinalizadas por PBL. O operador coleta o item nas posições de costas e retorna para depositar na caixa plástica posicionada na frente (na esteira). Não há desvio da caixa plástica para as costas.
Costas Mezanino (Full Case): 36 posições de caixa fechada (lado direito, sentido do fluxo). O full case não possui diferenciação por tamanho — cada posição recebe um único SKU auto-empilhado. A diferenciação por tamanho G/M/P aplica-se exclusivamente às posições de fracionado. O WCS indica no display a retirada da caixa fechada; o operador etiqueta e deposita na Esteira Expressa (Túnel).
Nota sobre "itens no Mezanino" (Skip Zone): para fins de roteamento, considera-se que um pedido possui itens no Mezanino sempre que houver coleta em qualquer posição do mezanino — frente (flow rack) ou costas (fracionado G/M/P ou fullcase). A lógica de Skip Zone descrita na seção 8.2 permanece válida com essa definição ampliada.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Operação de Full Case  
**Score:** — (semantico) | **ID:** 6b18495564dafe4e

A operação de Itens Fullcase será feita em dois pontos diferentes da automação, o primeiro e principal com maiores demandas estarão na área dedicada a fullcases, onde serão induzidos na esteira de Fullcase do Térreo e o segundo serião itens com menos demanda que estarão localizados nas costas do Picking Térreo e Mezanino.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** c012061b6f7c45cb

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para indicar a separação do item correspondente.
Após a coleta e etiquetagem de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas dos itens que não serão coletados, após a leitura dessas etiquetas o WCS entende que aqueles itens serão cortados.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Etiqueta Picking Full Case  
**Score:** — (semantico) | **ID:** d6463c0e56906e8b

Essa etiqueta será utilizada no processo de picking Full Case.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Coleta Full case (Ruas) Velox  
**Score:** — (semantico) | **ID:** bba82a7d8688f54c

Após a integração da onda de pedidos, o WCS identifica as tarefas de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os passos descritos abaixo para iniciar a tarefa de separação, que agora contempla de forma unificada ambos os tipos de coleta dentro do sistema do WCS.
Fluxo Operacional do Order Start Full Case
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele retirará as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Início da Tarefa:
O WCS determina automaticamente a quantidade de itens a coletar na tarefa, considerando os itens de Full Case presentes na rua selecionada, respeitando a coleta por item. A separação é realizada por item, ou seja, ao iniciar a coleta de um determinado item, o sistema agrupa todos os pedidos que possuem esse mesmo item para que sejam coletados de uma única vez, reduzindo deslocamentos desnecessários do operador e otimizando a operação.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Ordem de Coleta Vinculada à Impressora do Posto de Impressão:
Na operação de Order Start Full Case, a sequência de coleta das posições na rua (crescente ou decrescente) será definida com base na impressora selecionada pelo operador no posto de impressão.
Cada impressora deverá estar previamente configurada no WCS com uma regra específica de ordenação de coleta (crescente ou decrescente).
Ao selecionar a impressora no momento da impressão das etiquetas, o WCS deverá aplicar automaticamente a sequência correspondente, direcionando o operador a iniciar a coleta a partir do início ou do final da rua, conforme a configuração associada à impressora. O coletor deve refletir também essa ordenação para exibir os endereços pendentes.
Essa abordagem permite maior flexibilidade operacional, adequando o fluxo de separação ao layout físico, ponto de indução e estratégia logística de cada área.
Identificação dos Itens na Tela de Coleta:
Na tela de coleta do coletor Android, o WCS deverá apresentar de forma clara a identificação do tipo de cada item (Full Case), para que o operador saiba a destinação de cada volume coletado.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Coleta Full case Velox  
**Score:** — (semantico) | **ID:** efd578bbd5e6bcfd

Após a integração da onda de pedidos, o WCS identifica as tarefas de Picking Full Case. O Order Start Full Case é utilizado quando a separação envolve caixas fechadas. O operador deve seguir os passos descritos abaixo para iniciar a tarefa de separação, que agora contempla de forma unificada ambos os tipos de coleta dentro do sistema do WCS.
Fluxo Operacional do Order Start Full Case
Escolha do Posto de Impressão:
O operador escolhe o posto de impressão onde ele retirará as etiquetas. Esse posto de impressão representa uma impressora que estará à disposição fisicamente.
Seleção da Rua de Separação:
O operador escolhe a rua onde deseja iniciar a tarefa de separação. As ruas são configuradas de acordo com o layout do armazém e o fluxo de picking.
Início da Tarefa:
O WCS determina automaticamente a quantidade de itens a coletar na leva, considerando os itens de Full Case presentes na rua selecionada, respeitando a coleta por item. A separação é realizada por item, ou seja, ao iniciar a coleta de um determinado item, o sistema agrupa todos os pedidos que possuem esse mesmo item para que sejam coletados de uma única vez, reduzindo deslocamentos desnecessários do operador e otimizando a operação.
Impressão da Etiqueta:
A impressão da etiqueta será feita antes da coleta, garantindo que o sistema registre adequadamente a tarefa de separação. A impressão antecipada da etiqueta assegura que as caixas sejam corretamente identificadas e registradas no sistema.
Ordem de Coleta Vinculada à Impressora do Posto de Impressão:
Na operação de Order Start Full Case, a sequência de coleta das posições na rua (crescente ou decrescente) será definida com base na impressora selecionada pelo operador no posto de impressão.
Cada impressora deverá estar previamente configurada no WCS com uma regra específica de ordenação de coleta (crescente ou decrescente).
Ao selecionar a impressora no momento da impressão das etiquetas, o WCS deverá aplicar automaticamente a sequência correspondente, direcionando o operador a iniciar a coleta a partir do início ou do final da rua, conforme a configuração associada à impressora. O coletor deve refletir também essa ordenação para exibir os endereços pendentes.
Essa abordagem permite maior flexibilidade operacional, adequando o fluxo de separação ao layout físico, ponto de indução e estratégia logística de cada área.
Identificação dos Itens na Tela de Coleta:
Na tela de coleta do coletor Android, o WCS deverá apresentar de forma clara a identificação do tipo de cada item (Full Case), para que o operador saiba a destinação de cada volume coletado.
Os itens de Full Case seguirão o fluxo normal de indução no sorter após a coleta.
Destinação dos Volumes Após Coleta:
Volumes Full Case: Após a coleta e etiquetagem, o operador induz os volumes na esteira. O WCS direciona cada volume via sorter para a rampa de destino correspondente à transportadora/rota.

---
**Origem:** [I25.3515] ADITIVO — `I25_3515 - Aditivo Dashboard de Previsão Próximos Volumes por Rampa - Projeto Esperança - Rev.1_2.docx`  
**Heading:** Conceito – Picking Full Case e Tarefas  
**Score:** — (nome-topico) | **ID:** e676244d47f59522

Os volumes exibidos neste dashboard são provenientes do picking Full Case. O picking Full Case possui o conceito de agrupar vários volumes dentro de uma única tarefa.
Regra de ativação da tarefa: quando uma caixa de uma tarefa passar (for lida) no Sorter, todos os volumes daquela tarefa passam a ser considerados e exibidos no dashboard, contabilizados como volumes previstos nas suas respectivas rampas de destino.
Ou seja, a leitura da primeira caixa da tarefa é o gatilho que ativa a previsão de todos os demais volumes da mesma tarefa no painel.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** 57979fcc3d124f9e

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para indicar a separação do item correspondente.
Após a coleta e etiquetagem de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas dos itens que não serão coletados, após a leitura dessas etiquetas o WCS entende que aqueles itens serão cortados.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Etiqueta Picking Full Case  
**Score:** — (semantico) | **ID:** 21358e404a8ebfd5

Essa etiqueta será utilizada no processo de picking Full Case.

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.3. Picking Túnel  
**Score:** — (nome-topico) | **ID:** 964138452bcc94fe

Seguir mapa de leds e concentradores informado pelo cliente.
Utilizar a mesma etiqueta de caixa TOTE, pois deverá ser desviada no Mezanino 1.
As regras de destino seguem iguais às do fracionados: Pedidos Mono, Multi e Loja.
Deverá respeitar a cubagem da caixa Tote azul com tampa, diferente da que tem no fracionado e o MFC só deverá permitir pedidos com limite de 30kg.
Alguns itens que não cabem na caixa tote, deverão seguir direto com a etiqueta aplicada na própria embalagem do produto.
Haverá um ORDER START em cada nível do picking túnel, onde o operador irá associar as etiquetas nas caixas TOTE, no mesmo cenário que hoje está configurado para o fracionado (Operador lê o código de barras do picking, o WCS calcula a cubagem e libera o TOTE após as regras de negócio: atinge a cubagem do TOTE ou encerra o tipo de picking). A diferença neste caso é que o tamanho do TOTE é maior que o utilizado no Fracionado.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.3. Picking Túnel  
**Score:** — (nome-topico) | **ID:** a5e1d1da8a3f8319

Seguir mapa de leds e concentradores informado pelo cliente.
Utilizar a mesma etiqueta de caixa TOTE, pois deverá ser desviada no Mezanino 1.
As regras de destino seguem iguais às do fracionados: Pedidos Mono, Multi e Loja.
Deverá respeitar a cubagem da caixa Tote azul com tampa, diferente da que tem no fracionado e o MFC só deverá permitir pedidos com limite de 30kg.
Alguns itens que não cabem na caixa tote, deverão seguir direto com a etiqueta aplicada na própria embalagem do produto.
Haverá um ORDER START em cada nível do picking túnel, onde o operador irá associar as etiquetas de tarefas nas caixas TOTE, no mesmo cenário que hoje está configurado para o fracionado.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Full Case - Caixa fechada  
**Score:** — (semantico) | **ID:** 71e365cb09ceba24

Para o processo de full case cliente etiqueta manualmente todas as caixas fechadas, separadas pelo voice picking (Responsabilidade do Cliente), seguindo diretamente para o sorter.
Caso seja induzido no sorter caixas que não pertencem a onda atual a mesma seguirá para rejeito.
OBS: Processo de voice picking não está no escopo deste projeto, por parte da Invent.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Full Case - Caixa fechada  
**Score:** — (semantico) | **ID:** ea3844ddf9c6d043

Separação de Full Case será de responsabilidade EMIS Minas.
A indução dessas caixas no Sorter será após a etapa de conferência dos produtos fracionados.
VELOX deve receber via integração os volumes full case que serão induzidos no sorter para realizar o correto desvio.
Caixa já será induzida no sorter com etiqueta do fornecedor, na maioria dos casos essa etiqueta é mantida.
Caso a etiqueta seja de um laboratório que não será possível reutilizar, a EMIS Minas etiqueta essa caixa com uma nova etiqueta na entrada.
A impressão de etiquetas Full case é de responsabilidade EMIS Minas.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Conferência e Fechamento das Caixas  
**Score:** — (semantico) | **ID:** c0a6c94de03ae6e9

Na estação de conferência serão direcionados 100% dos pedidos.
Será uma linha tripla distribuída da seguinte forma:
1º (primeira linha) linha expressa - Caixas plásticas vindas da linha de separação dos 3 níveis.
2º (segunda linha) (Pós Picking) - Linha onde os conferentes irão fazer a conferência de 100% dos pedidos e substituição da caixa plástica para caixa de papelão, que será definida de acordo com a cubagem do pedido, e ao finalizar sela a caixa e coloca a caixa na linha expressa para ir até o sorter.
WMS - Quando o pedido não cabe na caixa de papelão que foi informada no início da operação, o operador gera uma nova etiqueta, imprime e fixa na caixa adicional.
VELOX – Operador deverá vincular essa nova caixa no pedido que está sendo conferido no momento.
3º (terceira linha - Caixas Vazias) que retornam para toda a operação novamente.
Após finalizar o processo de conferência, a caixa vazia deve retornar para cada nível de separação.
Scanner fixo faz a leitura do código de barras da caixa plástica, e o sistema automaticamente já identifica para onde essa caixa deverá ser desviada.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Full Case - Caixa fechada  
**Score:** — (semantico) | **ID:** bdb41e5d39c05b5f

Separação de Full Case será de responsabilidade do cliente.
Caixa já vem com etiqueta do fornecedor, na maioria dos casos essa etiqueta é mantida.
Caso a etiqueta seja de um laboratório que não será possível reutilizar, a Emis Minas etiqueta essa caixa com uma nova etiqueta na entrada.
A indução dessas caixas no Sorter será após a etapa de conferência dos produtos fracionados.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Produtos de Curva A  
**Score:** — (semantico) | **ID:** dbe28c2e7a358b71

Operador verifica na tela o tipo de caixa que será utilizada para aquele pedido, fixa a etiqueta na caixa e a caixa segue na linha de separação, onde existirá um leitor fixo para cada posto de separação. Após a leitura caso tenha produtos a serem separados no posto correspondente a caixa então é desviada.
Caso não tenha produtos a serem separados no posto, a caixa segue na linha de separação para o próximo posto.
Caso o operador precise priorizar um pedido, deverá selecionar o pedido na tela, com isso o sistema VELOX realiza a impressão da etiqueta daquele pedido.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Produtos de Curva B  
**Score:** — (semantico) | **ID:** dad9b1858d1e99ce

Operador verifica na tela o tipo de caixa que será utilizada para aquele pedido, fixa a etiqueta na caixa e a caixa segue na linha de separação, onde existirá um leitor fixo para cada posto de separação. Após a leitura caso tenha produtos a serem separados no posto correspondente a caixa então é desviada.
Caso não tenha produtos a serem separados no posto a caixa segue na linha de separação para o próximo posto.
Caso o operador precise priorizar um pedido, deverá selecionar o pedido na tela, com isso o sistema VELOX realiza a impressão da etiqueta daquele pedido.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Produtos de Curva C  
**Score:** — (semantico) | **ID:** 27a7314e921f6d42

Operador verifica na tela o tipo de caixa que será utilizada para aquele pedido, fixa a etiqueta na caixa e a caixa segue na linha de separação, onde existirá um leitor fixo para cada posto de separação. Após a leitura caso tenha produtos a serem separados no posto correspondente a caixa então é desviada.
Caso não tenha produtos a serem separados no posto a caixa segue na linha de separação para o próximo posto.
Caso o operador precise priorizar um pedido, deverá selecionar o pedido na tela, com isso o sistema VELOX realiza a impressão da etiqueta daquele pedido.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Full Case - Caixa fechada  
**Score:** — (semantico) | **ID:** 27c323b070586a17

Separação de Full Case será de responsabilidade do cliente.
Caixa já vem com etiqueta do fornecedor, na maioria dos casos essa etiqueta é mantida, caso seja necessária uma reimpressão de etiqueta, será de responsabilidade do cliente.
A indução dessas caixas na esteira será depois da linha de separação dos 3 níveis, seguindo assim direto para o Sorter.
Esses volumes deverão estar integrados no sistema VELOX para que seja feita a distribuição correta conforme configuração atual do Sorter.
Teremos um Porta Pallets com produtos mais volumosos, produtos que será necessário expedir a caixa inteira, ou até mesmo a grade inteira para a loja, e por esse motivo não seria necessário ter esses produtos nas posições de picking, produtos como: calçados, cama mesa e banho, produtos com um armazenamento e distribuição sem quebra desse produto.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** 248b8d8e70087032

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Após a leitura do endereço, o operador realiza a leitura da etiqueta impressa no Order Start e, em seguida, faz a leitura do código do produto para confirmar a separação. Esse processo de leitura é repetido para todos os itens pertencentes àquela posição (endereço), ou seja, o operador realiza a leitura do código do produto uma vez para cada unidade coletada. O WCS atualiza a lista de tarefas à medida que o operador confirma as leituras.
Após a coleta de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas dos itens que não serão coletados, após a leitura dessas etiquetas o WCS entende que aqueles itens serão cortados.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Picking Fullcase e Picking Exceção  
**Score:** — (nome-topico) | **ID:** 558283b2ed976731

Para os volumes coletados nos processos de Picking Fullcase e Picking Exceção, será utilizado o seguinte layout de impressão:

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Picking Fullcase Perigoso  
**Score:** — (nome-topico) | **ID:** 14893b03a48d0fe8

Para os volumes coletados no processo de Picking Fullcase que se enquadrem na categoria de produtos perigosos, será utilizado o seguinte layout de impressão:

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Estações de Separação  
**Score:** — (semantico) | **ID:** a1ed589c6d207282

Após a caixa ser iniciada no order start, a caixa será encaminhada para o 2º Nível do mezanino, a leitura da etiqueta será realizada através de um scanner fixo, para identificar se tem pedido a ser separado neste nível. Caso haja algum SKU para ser separado neste nível a caixa será desviada, se não houver nenhuma ordem de separação para o nível atual, ela seguirá pela linha expressa para o 01º nível do mezanino, caso haja algum SKU para ser separado neste nível a caixa será desviada, se não houver nenhuma ordem de separação para o nível atual ela seguirá pela linha expressa para o Térreo.
Após a separação dos produtos, o operador deve inserir a caixa novamente na linha em qualquer posição. Dessa forma, se a caixa for inserida antes do scanner de leitura, o sistema reconhecerá que ela já passou pela estação e a encaminhará diretamente para a próxima, evitando que a caixa passe pela mesma estação mais de uma vez.
É importante destacar que o sistema VELOX é responsável apenas pelo transporte e desvio das caixas nas estações. Portanto, toda a operação de separação, ressuprimento e verificação de falta de itens/SKUs nas estações é de (responsabilidade TPC).

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** 423cd1d0ed9e6486

Para full case, serão caixas fechadas e não existirá order start.
A separação de full case, é de responsabilidade do cliente.
Não existe integração de confirmação de separação (Picking Confirm).
Os volumes de full case devem estar devidamente integrados no sistema Velox, para que seja desviado corretamente no sorter.
As caixas de full case, devem estar com as etiquetas fixadas na parte superior da caixa.
A impressão de etiquetas de full case é de responsabilidade do cliente.

---
**Origem:** [I23.1602] 2023 — `I23.1602 - DOCUMENTO DE ESPECIFICAÇÃO REV1- SEPARAÇÕES ET.VELOX - PETER.docx`  
**Heading:** Separações  
**Score:** — (semantico) | **ID:** 0da5995422cff9e4

A separação de fracionados, passará a ser feita em caixas plásticas identificadas com código de barras único de identificação (VID) por caixa.
As separações serão divididas em 2, separação Velox e separação Kaizen denominado como ET – Picking Cart, o sistema Velox será o responsável pela separação dos produtos das posições da frente e das costas do operador da estação de picking controlada pela Invent.
As separações tanto via Kaizen quanto Velox, serão separadas em caixas plásticas.
As posições de separação da frente do operador não terão alterações físicas.
As posições de separação das costas do operador, serão compostas por 1 display de 10 dígitos por nível/módulo, onde no display informará o endereço, posição e quantidade a ser separada, conforme acontece atualmente na separação dos corredores.
Os módulos de picking costas serão instalados fisicamente.
Atualmente onde existem os corredores, o picking será controlado pelo sistema de picking cart da Kaizen (ET), com coletor e sistema do cliente (Kaizen), serão 10 equipamentos de picking cart.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Fullcase  
**Score:** — (semantico) | **ID:** e10b86082dd78948

Para full case, serão caixas fechadas e não existirá order start.
A separação de full case, é de responsabilidade do cliente.
Não existe integração de confirmação de separação (Picking Confirm).
Os volumes de full case devem estar devidamente integrados no WCS, para que seja desviado corretamente no sorter.
As caixas de full case, devem estar com as etiquetas fixadas na parte superior da caixa.
A impressão de etiquetas de full case é de responsabilidade do cliente.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Fullcase  
**Score:** — (semantico) | **ID:** 912c9f3754908e53

Para full case, serão caixas fechadas e não existirá order start.
A separação de full case, é de responsabilidade do cliente.
Não existe integração de confirmação de separação (Picking Confirm).
Os volumes de full case devem estar devidamente integrados no WCS, para que seja desviado corretamente no sorter.
As caixas de full case, devem estar com as etiquetas fixadas na parte superior da caixa.
A impressão de etiquetas de full case é de responsabilidade do cliente.
Os pedidos do tipo full case são compostos por caixas fechadas e não passam pelo processo de separação dentro do WCS. Nesses casos, não há Order Start, pois a separação dos volumes é feita diretamente pelo WMS/KAIZEN. A única exigência para que o processo funcione corretamente é que os volumes estejam integrados no WCS, permitindo que o sistema direcione corretamente o desvio desses volumes no sorter.
A confirmação da separação (Picking Confirm) não se aplica aos volumes full case, pois o WCS não realiza esse controle. Além disso, a impressão das etiquetas desses volumes também é de responsabilidade do cliente. As etiquetas devem estar fixadas na parte superior das caixas para garantir que sejam lidas corretamente ao passarem pelo portal do sorter.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Fullcase  
**Score:** — (semantico) | **ID:** 2797e59801fd2028

Para full case, serão caixas fechadas e não existirá order start.
A separação de full case, é de responsabilidade do cliente.
Não existe integração de confirmação de separação (Picking Confirm).
Os volumes de full case devem estar devidamente integrados no WCS, para que seja desviado corretamente no sorter.
As caixas de full case, devem estar com as etiquetas fixadas na parte superior da caixa.
A impressão de etiquetas de full case é de responsabilidade do cliente.

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `ESPECIFICACAO DE SOFTWARE - Caixas porTipos de pedidos - Caixas exclusivas.docx`  
**Heading:** Caixa Exclusiva  
**Score:** — (semantico) | **ID:** 4867f81120e41ab0

Regras de Funcionamento:
• Cadastro de Caixa Exclusiva:
No cadastro de caixa, será possível associar um ou mais SKUs à caixa, criando uma "Caixa Exclusiva" para esses itens.
• Prioridade de Alocação de Caixa:
Se o pedido contiver um item presente na lista de SKUs vinculados a uma "Caixa Exclusiva", o sistema deverá obrigatoriamente sugerir essa caixa para o item, independentemente do espaço disponível em outras caixas.
• Ajustes na Alocação de Itens:
Caso o pedido possua itens adicionais que não caibam na "Caixa Exclusiva", ou que não sejam compatíveis, o sistema deve sugerir a alocação dos itens restantes em outra caixa que melhor atenda ao volume.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Caixas de separação  
**Score:** — (semantico) | **ID:** 25f17e5865121c03

As caixas de separação, serão caixas reutilizadas de fornecedores, nesse caso não serão caixas padronizadas, sendo assim o WMS deverá realizar a impressão da etiqueta do pedido no order start. O operador deverá colar a etiqueta na caixa de separação e induzir a caixa na linha.
Todas as caixas induzidas na linha de separação devem estar devidamente identificadas com etiqueta para que o Velox consiga realizar a separação correta conforme pedido.
As caixas de separação devem conter apenas 1 (um) QR Code de identificação, pois como são caixas reutilizadas, terá diversos outros códigos de barras, e deverá contém apenas 1 (um) QR Code, caso tenha mais de um QR Code na mesma caixa, leitor corre o risco de ler o código errado e não identificar o pedido daquele volume, causando assim, erro operacional.
Ao separar o produto no endereço, deverá realizar a leitura do código de barras do produto conforme quantidade solicitada, ao realizar a leitura do código de barras do produto a quantidade é decrementada até finalizar a separação.
Ao realizar a separação do produto solicitado no display o operador deve apertar o botão do display para confirmar a separação do produto solicitado, caso haja outro produto a ser separado, o display irá acender novamente com as informações do novo produto a ser separado e o operador repete o processo descrito acima.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Solicitar nova caixa  
**Score:** — (semantico) | **ID:** e21d76f433ce512c

No momento da separação, caso o operador identifique que a caixa de separação não será o suficiente para separar todos os produtos solicitados, no PDV de cada posto de separação, haverá um botão disponivel para solicitar uma nova caixa.
Operador ao pressionar o botão, o sistema Velox adiciona enviará a integração de nova caixa para o WMS, informando o volume com os itens que ficaram pendentes de separação dessa remessa, com isso, WMS deverá integrar novamente o mesmo pedido com o volume adicional para o Velox.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Picking Full Case com IA (Caixa fechada)  
**Score:** — (nome-topico) | **ID:** f8bb07241b516a19

Cada posição/produto de caixa fechada terá:
1 (um) display de 3 (três) dígitos por posição/produto;
Imagem ilustrativa do botão de 3 (três) dígitos:
Ao receber a integração dos pedidos a serem separados, Velox deverá acender as posições que solicitam a separação com as quantidades solicitadas, operador deverá realizar a separação das caixas conforme quantidade solicitada no display da posição, ao realizar a separação da quantidade correta, operador aperta o botão confirmando a separação daquele produto naquela posição, o mesmo produto poderá ser separado para diversos pedidos diferentes que estejam solicitando o mesmo produto, com isso, ao induzir os volumes na esteira de indução de caixa fechada, o sorter fará o desvio conforme o pedido nas rampas do sorter.
As caixas fechadas, serão caixas de fornecedores com diversos tipos de códigos de barras, com isso, o Velox no sorter, usará inteligência artificial para identificar o código de barras correto a ser considerado.
Exemplos de caixas de códigos de barras a serem lidos no sorter para utilização de inteligência artificial:
Temos os exemplos acima, onde existem diversos tipos de código de barras, porém apenas 1 (um) é o código correspondente do produto.
Nos casos acima, a inteligência artificial desenvolvida pela Invent deve buscar o código de brras correto através dessa marcação que existe no código correto.
Todas as caixas nesse perfil devem ter o código correto demarcado com algum tipo de informação, seja ele um “check” ou conforme imagens acima.
O que deve ser integrado no sistema Velox deve ser o código de barras que o sistema deve considerar na leitura na passagem no portal do sorter, nos exemplos acima, para esses volumes o Velox deve ter recebido a integração desses pedidos com os códigos de barras demarcados.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Full Case - Caixa fechada  
**Score:** — (semantico) | **ID:** f713208e9eeb25f7

Para o processo de full case cliente etiqueta manualmente todas as caixas fechadas, separadas pelo voice picking (Responsabilidade do Cliente), seguindo diretamente para o sorter.
Caso seja induzido no sorter caixas que não pertencem a onda atual a mesma seguirá para rejeito.
OBS: Processo de voice picking não está no escopo deste projeto, por parte da Invent.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Fracionado - Picking By Light/Picking To Monitor e Picking Tunnel  
**Score:** — (semantico) | **ID:** 72160ae371f418ee

Teremos 5 níveis de separação de itens fracionado por mezanino, sendo os 3 níveis no mezanino de separação de fracionados e 2 no mezanino do picking tunnel.
O sistema VELOX deverá distribuir os pedidos conforme os tipos de produto recebido na onda (Distribuição conforme produtos no endereço, por pedido), teremos 1 Order Start por nível.
Podemos ter produtos de Curva A,B ou C por posição em todos os níveis / Order Start.
O sistema VELOX fará a ordenação conforme recebido na integração, ou seja, o primeiro integrado será o primeiro a ser separado.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente através do Velox (Referência 5.3. Priorização de pedidos).
O sistema VELOX recebe as informações dos pedidos realiza a cubagem dos itens e realiza o cálculo de quantas caixas serão necessárias para atender o pedido, e as processa para que os usuários realizem a separação através das estações de picking.
Exceções: Existiram casos em que as caixas de papelão podem acabar, para esse caso teremos o seguinte cenário:
Caixas acabaram: Quando um determinado tamanho de caixa acabarem e o operador não identificou que as caixas acabaram e existem pedidos pendentes nos Order Starts, o operador deverá desabilitar o tamanho de caixa onde o Velox irá questionar se o operador tem certeza de que deseja realizar a alteração nos cadastros de caixa e logo e seguida o Velox questiona o operador se ele deseja refazer a cubagem dos pedidos pendentes nos Order Starts.
Para os casos em que as caixas não acabaram mas para próxima loja a ser integrada (onda) utiliza caixa de papelão o operador pode desabilitar a caixa que esta preste a acabar para que na próxima onda todos os pedidos/volumes sejam cubados para as caixas que estão habilitadas.
Os OrderStart destinados a confecções terão somente um tamanho de caixa de papelão que equivale ao tamanho da caixa de plástico.
Para o OrderStart destinado a calçados e somente para ele haverá 3 tipos de caixa (P, M e G) onde o Velox irá cubar os volumes de acordo com o percentual de ocupação cadastrado a cada caixa.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Full Case - Picking Tunnel  
**Score:** — (semantico) | **ID:** 4d0e43cf4de0c5fa

Teremos 1 nível de separação full case no mezanino de picking tunnel.
O sistema VELOX deverá distribuir os pedidos conforme os tipos de produto recebido na onda (Distribuição conforme produtos no endereço, por pedido), teremos 4 Order Start e a distribuição será realiza por zona, terá um Order start responsável por cada uma das zonas.
Todos os postos serão um Order Start com scanner impressora e PDV.
NOTA: Para os Order Start destinados a separação do Full Case será possível realizar a reimpressão de etiqueta através da tela de volume.
Na necessidade de reimpressão o led não deve acender, deve acender somente na impressão automática após selecionar o posto.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Picking Tunnel – Separação de  Full Case  
**Score:** — (nome-topico) | **ID:** 39eff9d720403254

Os volumes a serem transportados na esteira serão caixas de papelão como citado no item 4. Caixas.
Após a realização de todo processo citado no item 6.2.1. Processo operacional, os displays (leds) correspondente a posição de picking acenderá após a impressão das etiquetas, o operador poderá se referenciar através do PDV ou dos displays para realizar o processo de picking, após realizar a seleção do produto na posição indicada o operador deve colar a etiqueta impressa pelo Velox na embalagem do produto e irá realizar a leitura do código de barras da etiqueta impressa pelo Velox e do código EAN já presente na embalagem com um scanner de mão, com essas informações o Velox fará a checagem para avaliar se a etiqueta (pedido) corresponde ao produto (EAN) informado, caso exista coerência nas informações o operador deve seguir com o processo de separação, caso não exista coerência das informações enviadas pelo scanner de mão o Velox irá informar no PDV a mensagem “Produto não corresponde ao pedido” e toda a tela do PDV estará acesa na cor vermelha e nos displays será apresentado a mensagem “Errr” informando erro, após o operador apertar o botão do display (led) que é obrigatório, o Velox irá aguardar o operador realizar a leitura do produto correto não é necessário realizar a leitura da etiqueta do volume, somente a etiqueta de EAN. Após o caso perfeito onde as informações coincidem ou o caso corrigido onde as informações não coincidem e o operador precisa indicar o produto correto, ele deve seguir com o processo de separação até concluir todas as etiquetas impressas pelo Velox assim o processo de separação e conferência no setor de Full Case.
É possível realizar o processo de reimpressão através da tela de volumes como mencionado no irem 6.2. Full Case - Picking Tunnel.
Em casos de Shortpicking o operador através da tela do monitor deve diminuir a quantidade de itens separados para a quantidade que está disponível no momento e clicar no botão de confirmação de picking, ou seja, sempre que houver um corte uma etiqueta WISPL será descartada, o sistema Velox fará a comparação do valor de quantidade esperada e quantidade separada, quando for identificado que o valor de separação é menor que o valor esperado, após a confirmação de finalização de picking do operador o Velox irá questionar o operador se ele tem certeza de que deseja realizar o corte da quantidade faltante na separação, esse questionamento surge na tela logo após a confirmação e aguarda uma nova confirmação do operador para seguir com o processo de finalização de picking assim liberando o posto para realizar uma nova leva de impressão de etiquetas.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** bc1b46d0eb4cad5e

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para indicar a separação do item correspondente.
Após a coleta e etiquetagem de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas dos itens que não serão coletados, após a leitura dessas etiquetas o WCS entende que aqueles itens serão cortados.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Etiqueta Picking Full Case  
**Score:** — (semantico) | **ID:** 31e563639b804797

Essa etiqueta será utilizada no processo de picking Full Case.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** 4.1.1.	Caixas de separação  
**Score:** — (semantico) | **ID:** a6ef885115e435c8

No início da operação, será utilizada uma formadora de caixas, que será responsável pela criação das caixas necessárias para o processo de separação. Essas caixas podem ser de plástico ou papelão, variando em tamanhos conforme a necessidade de cada pedido. (Responsabilidade do Cliente).

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Zonas de Picking  
**Score:** — (semantico) | **ID:** d7837018e561e96e

Definição de Lado da Esteira para Picking:
O WMS será responsável por definir de forma dinâmica em qual lado da esteira (posto) de picking, a caixa deverá ser desviada para direita ou esquerda de acordo com a integração enviada pelo WMS. Isso dará flexibilidade para estruturar a divisão do mapa de alocação de produtos a depender da necessidade da operação
O WCS direciona as caixas para as estações de picking conforme as instruções do WMS.
Em caso de falha de leitura (Noread) durante o percurso do volume na linha, o sistema de automação realizará automaticamente o desvio do volume para o posto correspondente onde a falha ocorreu.
Nessa situação, o operador deverá consultar o WMS para verificar se existe picking associado àquela caixa naquele posto. Após essa verificação, e conforme o resultado (com ou sem necessidade de picking), o operador executará a tratativa necessária. Finalizado o tratamento, o volume será reinduzido na linha para que o processo continue normalmente.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** 4a651f6c04626a83

Após a realização do Order Start Full Case, o processo de separação é iniciado. O operador realiza é direcionado para tela de coleta Full Case, onde será exibido a lista de coleta para a qual as etiquetas foram impressas. Em seguida, o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Após a leitura do endereço, o operador realiza a leitura da etiqueta impressa no Order Start e, em seguida, faz a leitura do código do produto para confirmar a separação. Esse processo de leitura é repetido para todos os itens pertencentes àquela posição (endereço), ou seja, o operador realiza a leitura do código do produto uma vez para cada unidade coletada. O WCS atualiza a lista de tarefas à medida que o operador confirma as leituras.
Após a coleta de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas dos itens que não serão coletados, após a leitura dessas etiquetas o wcs entende que aqueles itens serão cortados.

---
**Origem:** [I25.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Picking Full Case  
**Score:** — (nome-topico) | **ID:** ee2ae4cb54d9520f

Após a realização do Order Start Full Case, o processo de separação é iniciado. O WCS direciona automaticamente para a tela de coleta, e o operador se desloca até a rua selecionada.
Uma vez na rua, será exibida uma lista de itens no coletor Android, contendo informações detalhadas sobre endereço, produto e quantidade a ser coletada. O operador se dirige até o endereço indicado e realiza a leitura do código do endereço para iniciar a separação do item correspondente.
Após a leitura do endereço, o operador realiza a leitura da etiqueta impressa no Order Start e, em seguida, faz a leitura do código do produto para confirmar a separação. Esse processo de leitura é repetido para todos os itens pertencentes àquela posição (endereço), ou seja, o operador realiza a leitura do código do produto uma vez para cada unidade coletada. O WCS atualiza a lista de tarefas à medida que o operador confirma as leituras.
Após a coleta de todos os itens de um endereço, o operador pode então seguir para o próximo endereço na lista de coleta e repetir o processo para os próximos volumes. Caso o operador não encontre produtos suficientes para completar a coleta de um endereço, ele pode seguir para o próximo endereço e realizar a leitura do endereço correspondente, para mudar o item que está coletando.
Em caso de falta de produtos, o operador pode selecionar na tela de coleta a opção "Finalizar Coleta". Nesse caso, o WCS abre uma tela para que o operador realize a leitura das etiquetas dos itens que não serão coletados, após a leitura dessas etiquetas o WCS entende que aqueles itens serão cortados.

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** Picking de caixas FullCase  
**Score:** — (nome-topico) | **ID:** 759bf82cf91322ea

No processo de indução de volumes empenhados no modelo FullCase, o operador inicia sua tarefa na tela de Order Start do WCS, onde seleciona a rua a ser separada e define quantos volumes serão coletados por "pega". Essa configuração é fundamental para que o WCS organize e defina a sequência de coleta, alinhada com as regras de prioridade e matriz de fragilidade dos produtos.
Na tela de Order Start, o WCS exibe exclusivamente as tarefas que podem ser coletadas, levando em consideração a matriz de fragilidade, prioridade dos tarefas e a disponibilidade das posições de PTLs presentes na saída do sorter. Esse filtro assegura que o operador tenha acesso apenas aos volumes que podem ser separados naquele momento, de acordo com as diretrizes previamente estabelecidas, de forma análoga ao processo de coleta de pallets empenhados.
Após essa configuração inicial, o WCS direciona o operador para a rua correspondente e indica os endereços e itens que precisam ser coletados nas posições de picking empenhadas. Via coletor do cliente, cada endereço o operador realiza a leitura do endereço, do DUN14 da caixa e informa a quantidade de itens coletados para confirmar a separação. Esse procedimento garante que a coleta seja realizada corretamente e que as informações de cada item coletado sejam registradas de maneira precisa.
Neste ponto, o WCS dispara a integração para a confirmação de separação, que envia a notificação de que o item foi coletado com sucesso. O operador, então, segue para o próximo endereço e repete o processo de coleta até que todos os volumes tenham sido separados.
A integração de confirmação de picking será enviada a cada endereço de coleta.
Após a conclusão desse ciclo de coleta, o operador pode induzir os volumes coletados na esteira, conforme as orientações fornecidas pelo WCS e retornar ao Order Start para repetir este ciclo novamente. Esse fluxo automatizado garante a eficiência da separação, a precisão na confirmação da coleta e a continuidade do processo de indução, mantendo a integridade do controle de estoque e a rastreabilidade dos volumes empenhados.
Em caso de corte ou avaria da posição, será informado durante a separação e automaticamente será disparado uma integração do WCS para o WMS para manter o estoque atualizado e realizar reabastecimento.
