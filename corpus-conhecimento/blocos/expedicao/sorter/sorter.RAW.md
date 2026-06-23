# sorter.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Separação de itens controlados  
**Score:** — (semantico) | **ID:** 611f588d3306d202

Os produtos de categoria P 344, Polícia Federal/Civil e Geladeira serão separados e conferidos individualmente nos locais designados para esses produtos, através do coletor e serão induzidos no sorter como caixa fechada.
Na separação desses itens, o processo deverá seguir uma sequência de validações obrigatórias para garantir precisão e rastreabilidade. O operador deverá iniciar a coleta realizando a leitura do endereço (posição de picking), validando que está no local correto. Em seguida, o sistema WCS irá exibir a quantidade a ser coletada, sendo essa informação apenas para visualização, sem necessidade de digitação ou confirmação manual da quantidade. Por fim, o operador deverá realizar a leitura do código do item (produto) para concluir a coleta naquele endereço.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 6512d1834a58dea8

O sorter é composto por 1 portal de leitura que fará o reconhecimento dos volumes e 6 saídas, sendo elas 5 saídas para transporte e 1 saída de rejeito.
Saídas:
O Sorter possuí 6 saídas, sendo elas 4 para transporte, uma rampa destinada para PIN e 1 para rejeito (Lado Esquerdo).
Saída PIN: Destinada para pedidos que precisam de aprovação ou documentos adicionais. Quando um pedido não for processado automaticamente devido a requisitos específicos (por exemplo, necessidade de aprovação manual ou documentação adicional), ele será direcionado para esta saída.
Cliente tem 4 transportadoras atualmente
O portal de leitura do sorter não possui balança e dimensionador, apenas leitor de código de barras.
O sistema WCS fará a validação do campo “autoBilling” da integração de pedido. Esse campo informará o WCS que o pedido é classificado como Faturamento Automático, e caso seja recebido como falso, segue reto no sorter os volumes desse pedido deverão ser destinados a uma saída especifica determinada pelo cliente e deve estar cadastrada no mapa do sorter no WCS.
Após todos os volumes do pedido, serem lidos no portal do sorter, WCS deverá enviar a integração de “Mensagem de Status” com a informação de “Container Completo” no campo “message” e a quantidade de volumes(caixas) total do pedido para que o ERP D365 F&O (GERENCIADOR DE ESTOQUES) realize o faturamento do pedido.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Tela para agrupamento de volumes para Expedição  
**Score:** — (semantico) | **ID:** eaf3e9402a345ecd

Após o desvio do volume em sua respectiva saída do sorter, o operador deverá realizar a leitura da caixa via coletor do cliente. A partir dessa leitura, o sistema WCS executará uma avaliação automática do status de alocação do pedido associado àquele volume.
Regras de Alocação
Se o volume for o primeiro daquele pedido a ser alocado:
O WCS solicitará ao operador que informe a nomenclatura da posição onde o volume será armazenado.
A partir desse momento, todos os volumes subsequentes do mesmo pedido serão automaticamente direcionados para a mesma posição.
Essa posição passa a ser considerada como alocação padrão do pedido até sua finalização.
Se o volume pertencer a um pedido que já possui volumes alocados, o WCS informará diretamente a posição de destino previamente definida, sem necessidade de nova escolha.
Não haverá validação da alocação, ou seja, o sistema não verificará se a posição informada é válida ou compatível a responsabilidade é do cliente.
Finalização do Pedido
Quando o último volume do pedido for alocado na posição designada, o WCS irá informar automaticamente a finalização da alocação do pedido.
A partir dessa confirmação, a operação poderá seguir com as demais tratativas logísticas (expedição, agrupamento por rota, etc.).
Observação: Nesta etapa não teremos nenhuma troca de integrações.
O WCS deve disponibilizar uma tela para gerenciar as posições e seus respectivos volumes alocados.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 17b1fcca8836df78

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I24.117] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 8b7f7264ede644b6

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas SAP (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.117] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Regras de Contingência do Sorter  
**Score:** — (semantico) | **ID:** bee94cce9c885b03

Time Swift terá algumas regras de contingência que serão parametrizadas pelo Sistema do WCS para que a operação não fique prejudicada em diversos tipos de cenários que a operação apresenta.
Segue as regras de contingência:
Possibilidade de desconsiderar a checagem de peso na balança pelas categorias de  SKU, RG do volume ou todos os volumes. Neste caso, não iremos validar se o peso está ou não dentro da tolerância enviada na integração, apenas iremos validar se o volume foi lido. Mesmo não realizando a validação na balança, o sistema deve guardar o peso para consulta do time Swift. Este caso será utilizado para problemas na balança.
Possibilidade de desconsiderarmos o destino enviado na integração e ser configurado pelo time Swift, manualmente pelo WCS, qual rampa aquela determinado transporte deve ser desviado. Esta regra será utilizada em casos de “reentrega” e decisão operacional após o envio da interface.
OBS: Acionando a regra de destinar todos os volumes de um transporte para uma rampa, não haverá mais possibilidade de cancelar esta regra e o sistema voltar a considerar o valor da integração. Qualquer necessidade de alteração será feita manualmente no WCS.
Qualquer adição ou alteração dessas regras de contingência deve possuir um Log com usuários, data de ativação e desativação (se possuir).
Cada volume que passar por essas regras deve ter registrado sua liberação como “manualmente” e o usuário que realizou a ação.
Nestes cenários mencionados acima não haverá necessidade de uma nova integração com o SAP.

---
**Origem:** [I24.117] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Cancelamento de Volumes  
**Score:** — (semantico) | **ID:** a62ecfb9c8944757

Sistema WCS deve disponibilizar uma tela com a funcionalidade de excluir volumes que estão sendo esperados nas saídas do sorter.
Esta função será necessária em casos de avarias com a caixa, problemas de leitura e divergências de peso onde este item será devolvido ao estoque e excluído dos registros do WCS.
Não teremos integrações com o SAP para esta ação dentro do sistema.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 2844254f0feb4bf3

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Picking e Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 47bcee9517133a51

O sorter fará o desvio dos volumes conforme o mapa cadastrado e ativo no sistema WCS.
O mapa deve ser cadastrado e configurado previamente no sistema WCS. O cadastro do mapa é de responsabilidade do cliente.
O WCS deve permitir o cadastro tanto de ROTAS (Fracionado) quanto LOJAS (Fullcase)
O cliente deve informar no mapa de sorter qual unidade de carga será utilizado para cada posição, ou seja, deverá informar se o PTL será agrupado em um pallet ou routainer para o cálculo de cubagem correto.
Todos os volumes induzidos no sorter, devem conter código de barras integrado no sistema WCS ou estar devidamente etiquetados.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto 2 (duas) rampas de indução, 1 (um) portal de leitura com 3 (três) equipamentos de leitura de código de barras.
18 (dezoito) rampas saídas em toda a sua extensão.
Totalizando 54 (cinquenta e quatro) posições PTL em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras.
Quando um o mesmo SKU for solicitado para diversas lojas diferentes, o WCS terá responsabilidade de realizar os desvios de maneira cadenciada para não sobrecarregar nenhuma rampa.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Envio de informações  
**Score:** — (semantico) | **ID:** 5f003deff2fe10bc

WCS  WMS (DBLINK)
Os dados que devem ser enviados (INSERT) do WCS para o WMS são os dados nas tabelas abaixo onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tabela SORTER.GPT_RETORNO_STATUS_INDUZIDO
Nessa tabela o WCS deve retornar o valor do código da etiqueta do pallet “ID_PALLET” após a confirmação de consumo de pallet na tela do WCS, onde o retorno da segunda coluna sempre será S (Sim) ou seja será uma constante, sempre que o operador confirmar um consumo de pallet no Stage através da tela de consumo de pallet do WCS essa informação será inserida na tabela transacional SORTER.GPT_RETORNO_STATUS_INDUZIDO.
Tabela SORTER.GPT_RETORNO_MONTAGEM_PALETES
Nessa tabela o WCS irá retornar as informações dos volumes (caixas) dentro de um mesmo pallet, ou seja, sempre que um pallet for finalizado em um PTL o WCS irá disparas as informações acima, as informações serão inseridas por linha tendo informações repetidas em quase todas as colunas, salva somente a coluna de “CODBARRAETQ” que será a primary key (PK) dessa tabela, onde os valores dessa coluna não poderão se repetir.
Para os dados que devem ser imputados na coluna “CODBARRAETQ” a PK sempre haverá a letra “V” no início do código e o WCS deve devolver a informação exatamente como recebeu na integração (INSERT na tabela INTERMEDIARIA)
O WCS executará uma rotina que a cada fechamento de pallet essas informações serão enviadas automaticamente, e todas as informações de cada volume (CODBARRAETQ) de um mesmo pallet serão enviadas juntas com a flag da coluna “INDOPERACAO” sempre será I indicando um INSERT na tabela, o WCS não realizará atualizações ou exclusão de dados na tabela transacional e na flag da coluna “INDPROCESSADO” sempre será N indicando que todos os volumes do pallet foram enviados para tabela transacional.
Com a leitura do pallet na abertura do PTL o WCS irá receber a letra M no início do código, então na coluna “PALLET” o WCS irá salvar a informação de código do pallet sem a letra M no início do código para que no momento de retornar as informações para o WMS na coluna SEQPALETECAR REG.
NOTA: Todas as informações acima estão comtempladas na documentação enviada pelo time Concinco (PC-Estruturas de Tabelas Transacionais de Retorno _ INVENT → C5-250724-183941).

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
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
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
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
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** ea0d3f4f29133f4f

O sorter fará o desvio dos volumes conforme o mapa ativo no WCS.
O sorter é composto por 8 (oito) saídas no total e as 4 saídas da esquerda compõem 16 (quatro) posições PTL (Put-To-Light) e as 4 saídas da direita compõem 32 (oito) posições PTL (Put-To-Light). Cada posição PTL terá 1 (um) led 3 (três) dígitos sendo assim cada saída pode ter até 4 (quatro) rotas de destino diferentes.
Cada saída deve conter um leitor de código de barras.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Fluxo de Operação da Saída do Sorter ( PTL )  
**Score:** — (semantico) | **ID:** 00f127d8cfde9850

A abertura das 48 posições de pallets (PTL) ocorrerá de forma manual, assim que os volumes forem integrados pelo WMS de acordo com o mapa de sorter ativo. Cada uma das 48 posições possui um LED com um botão de confirmação.
Ao iniciar a operação, o operador da saída do sorter deverá estar logado em seu posto de trabalho para mapear e alocar os volumes nas posições indicadas.
Após o volume (caixa) ser desviado para a rampa correta, o operador deve realizar a leitura do seu código de barras com o scanner. Neste momento, o sistema acenderá o LED correspondente à transportadora ou loja, indicando a posição de pallet em que a caixa deve ser alocada.
Se o volume estiver correto: O operador coloca a caixa no pallet indicado e, em seguida, pressiona o botão do LED aceso para confirmar sistemicamente a alocação. O sistema armazenará a informação de que a caixa está nesse pallet.
Se o volume estiver incorreto: Caso um volume diferente daquele previsto para qualquer uma das posições da rampa seja lido, o LED acenderá na cor vermelha. Isso indica que a caixa não pertence àquela saída. O operador deverá então mover manualmente o volume para a estação de rejeito para o seu devido tratamento.
O operador visualiza fisicamente o limite do pallet. Ao atingir a capacidade máxima, ele inicia o processo de fechamento, realizando a leitura de uma etiqueta específica de "fechamento de pallet" com o scanner de mão.
Após a leitura desta etiqueta, o sistema WCS enviará, por meio da integração (Aloca PTL), todas as informações das caixas que foram alocadas naquele pallet para o WMS.

---
**Origem:** [I23.3503] 2025 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV ..docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 1d636e0e924dcc39

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executará as rotinas de separação de volumes, utilizando o Sorter.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [I23.3503] 2025 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV ..docx`  
**Heading:** Processo de Operação do Sorter  
**Score:** — (semantico) | **ID:** 2b740db643fe9aa2

O Sorter foi projetado para processar até 5.000 volumes por hora, com base na eficiência da indução, a Invent ficará responsável em apresentar qual a melhor prática a ser aplicado para alcançar o fluxo de 5 mil caixas hora. Ele conta com um portal de leitura com 3 faces de leitura (laterais e topo), garantindo que as etiquetas posicionadas nas laterais e topo das caixas sejam lidas corretamente. Essas faces de leitura permitem ao WCS realizar o checkout dos volumes induzidos.
O sistema do Sorter é composto por 12 rampas
11 rampas destinadas ao transporte dos volumes.
1 rampa exclusiva para rejeito.
O processo no Sorter inicia quando o volume passa pelo portal de leitura. A câmera captura a etiqueta do volume fornecida e impressa pelo cliente, que é então enviada ao Controlador Lógico Programável (PLC). O PLC encaminha as informações ao WCS, que realiza a verificação dos dados do pedido associado à etiqueta do cliente. Com base nessa verificação, o WCS envia a instrução ao PLC, indicando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme o mapa de sorter ativo, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos devem ter uma etiqueta, que inclui um código de barras ou QR code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão automaticamente direcionados para o rejeito ou reprocessamento, conforme as regras de operação definidas.

---
**Origem:** [I23.3503] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 23fa47f85a13d069

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executará as rotinas de separação de volumes, utilizando o Sorter.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [I23.3503] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
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
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** b5dcec10be50d756

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
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 73ddff3bddfffe1e

O O Sorter é projetado para processar até 4.000 volumes por hora, com base na eficiência da separação (Full Case, Fracionado, Picking Cart). Ele é composto por um portal de leitura com 2 faces de leitura (lateral) e topo, que garantem a leitura dos volumes, desde que as etiquetas estejam posicionadas nas lateral correta das caixas ou topo. Essas faces de leitura permitem que o WCS realize o checkout para pedidos do tipo Full Case e Fracionado.
O Sorter conta com 8 rampas de saída para o transporte dos volumes e 1 rampa exclusiva para rejeito, totalizando 9 rampas. Cada uma das rampas de saída de transporte é equipada com um leitor de código de barras e um conversor, totalizando 8 leitores e 8 conversores, responsáveis por capturar as informações das etiquetas e fazer a comunicação com o sistema WCS.
O processo no Sorter inicia com a leitura da caixa no portal de leitura. O sistema captura a etiqueta da caixa, que é enviada para o Controlador Lógico Programável (CLP). O CLP, então, encaminha as informações para o WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, informando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme os PTLs ativos e os respectivos pedidos, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos no sorter devem conter uma etiqueta gerada pelo WCS, que inclui um QR Code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão direcionados automaticamente para o rejeito ou reprocessamento, de acordo com as regras de operação definidas.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 0de60bdcb4a7a7cd

O O Sorter é projetado para processar até 4.000 volumes por hora, com base na eficiência da separação (Full Case, Fracionado, Picking Cart). Ele é composto por um portal de leitura com 2 faces de leitura (lateral) e topo, que garantem a leitura dos volumes, desde que as etiquetas estejam posicionadas nas lateral correta das caixas ou topo. Essas faces de leitura permitem que o WCS realize o checkout para pedidos do tipo Full Case e Fracionado.
O Sorter conta com 8 rampas de saída para o transporte dos volumes e 1 rampa exclusiva para rejeito, totalizando 9 rampas. Cada uma das rampas de saída de transporte é equipada com um leitor de código de barras e um conversor, totalizando 8 leitores e 8 conversores, responsáveis por capturar as informações das etiquetas e fazer a comunicação com o sistema WCS.
O processo no Sorter inicia com a leitura da caixa no portal de leitura. O sistema captura a etiqueta da caixa, que é enviada para o Controlador Lógico Programável (CLP). O CLP, então, encaminha as informações para o WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, informando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme os PTLs ativos e os respectivos pedidos, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos no sorter devem conter uma etiqueta gerada pelo WCS, que inclui um QR Code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão direcionados automaticamente para o rejeito ou reprocessamento, de acordo com as regras de operação definidas.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 369611dcbfec1715

O O Sorter é projetado para processar até 4.000 volumes por hora, com base na eficiência da separação (Full Case, Fracionado, Picking Cart). Ele é composto por um portal de leitura com 2 faces de leitura (lateral) e topo, que garantem a leitura dos volumes, desde que as etiquetas estejam posicionadas nas lateral correta das caixas ou topo. Essas faces de leitura permitem que o WCS realize o checkout para pedidos do tipo Full Case e Fracionado.
O Sorter conta com 8 rampas de saída para o transporte dos volumes e 1 rampa exclusiva para rejeito, totalizando 9 rampas. Cada uma das rampas de saída de transporte é equipada com um leitor de código de barras e um conversor, totalizando 8 leitores e 8 conversores, responsáveis por capturar as informações das etiquetas e fazer a comunicação com o sistema WCS.
O processo no Sorter inicia com a leitura da caixa no portal de leitura. O sistema captura a etiqueta da caixa, que é enviada para o Controlador Lógico Programável (CLP). O CLP, então, encaminha as informações para o WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, informando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme os PTLs ativos e os respectivos pedidos, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos no sorter devem conter uma etiqueta gerada pelo WCS, que inclui um QR Code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão direcionados automaticamente para o rejeito ou reprocessamento, de acordo com as regras de operação definidas.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 223658948bb0c9c2

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Zaffari) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Orientação de indução  
**Score:** — (nome-topico) | **ID:** 2d0629315567d97d

Descrição:
A orientação de indução no WCS será responsável por sugerir a ordem de indução dos pallets no stage-in, levando em consideração a matriz de fragilidade de cada item alocado no pallet, bem como a disponibilidade dos produtos. O objetivo é garantir que os itens sejam induzidos de forma otimizada, priorizando a segurança e a eficiência do processo. Porém a orientação não é restritiva dando flexibilidade da operação decidir qual pallet vai induzir.
Funcionalidade:
Exibição na Tela de Indução:
A tela de indução exibirá as seguintes informações essenciais para os operadores:
Ordem de indução: Indica a sequência na qual os pallets devem ser induzidos para o processo, com base na prioridade e na fragilidade dos itens.
RG do pallet: Apresenta a identificação única de cada pallet, permitindo o rastreamento e controle durante o processo de indução.
Matriz de fragilidade: Exibe a categoria de fragilidade do pallet, com base nos itens que estão alocados nele. Isso determina a posição dos itens no pallet e a ordem de indução.
Indução de Pallets:
O WCS irá utilizar a ordem de indução para determinar qual pallet será induzido a seguir. O processo será baseado nos seguintes critérios:
A disponibilidade dos itens no pallet, assegurando que o processo de indução ocorra sem interrupções ou falta de produtos.
A matriz de fragilidade de cada item no pallet, que será um fator crucial na priorização da indução. Itens mais frágeis podem ser induzidos em uma sequência que minimize o risco de danos durante o processo.
Status dos volumes: Um pallet sairá da lista de indução somente quando todos os volumes pertencentes ao pallet estiverem com status finalizado. Caso algum volume fique travado ou pendente por algum motivo operacional, o pallet permanecerá como pendente na lista.
Objetivo:
O objetivo da orientação de indução é garantir que a indução dos pallets seja realizada de maneira otimizada, respeitando as prioridades dos itens, sua fragilidade e a disponibilidade no stage-in. Esse processo ajudará a evitar danos aos produtos, aproveitar melhor o espaço disponível e garantir a eficiência operacional durante a movimentação dos pallets.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 37226c4649f8fced

O sorter fará o desvio dos volumes de maneira automática conforme a disponibilidade dos PTLs para a separação de tarefas e crossdocking, seguindo as prioridades informadas na integração.
O agrupador de todos os pallets presentes no sorter será a loja destino, categoria do produto (Alimentício/Não Alimentício) e tipo de embalagem que será informada via integração pelo WMS na disponibilização no final da coleta dos pallets.
A esteira deverá realizar o desvio do mesmo item que solicite em mais de uma loja de maneira cadenciada para não ocorrer sobrecarga de volumes na mesma rampa prejudicando o operador.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Ocorrências  
**Score:** — (semantico) | **ID:** ce709f33d45cf6f4

Em caso de avaria, extravio e necessidade de cancelamento, para que o Sorter pare de aguardá-lo e para que o WMS realize a tratativa necessária, o processo de abertura e tratamento de ocorrências será realizado conforme o fluxo descrito abaixo.
Para iniciar o processo, o operador deve acessar a tela de "Volumes" no sistema WCS. A partir daí, o operador deve filtrar por um dos códigos do produto ou descrição e selecionar um dos volumes na lista que estiver com o status diferente de finalizado. Ao clicar em abrir ocorrência, o WCS exibirá um pop-up solicitando que o operador informe o motivo da ocorrência.
Caso haja mais de um volume a ser tratado, o operador pode realizar esse processo para todos os volumes necessários. Após a abertura da ocorrência, os volumes que precisam ser tratados devem ser acessados na tela de Ocorrências, onde o WCS exibirá uma lista de todos os volumes com ocorrência aberta, ordenada por Destino (LOJA).
O operador pode selecionar um ou mais volumes para aprovar ou não a ocorrência. Caso ele selecione Cancelar, o WCS desconsiderará essas ocorrências selecionadas e finalizará o registro delas internamente. Se o operador selecionar Aprovar, ele deverá filtrar e selecionar apenas volumes do mesmo destino por vez. Após selecionar todos os volumes que deseja aprovar a ocorrência (cancelamento), o WCS solicitará a leitura de uma master.
Após a leitura da master e confirmação o WCS irá disparar a integração dos volumes agrupados pela master lida para o WMS, sinalizando o cancelamento dos volumes e permitindo o prosseguimento do processo com a devida tratativa. O WCS deve permitir que o operador utilize uma master que já foi utilizada no processo de Ocorrências e o WMS deve aceitar a mesma master mais de uma vez.
Esse processo garante a precisão na identificação e controle dos volumes que necessitam de cancelamento, permitindo que o WMS tome as ações necessárias, como o tratamento do volume ou ajuste nas movimentações logísticas.
4.1.2. Especificação de Volumes Induzidos no Sorter
Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:
4.1.4. Contingência do Sorter (IA)
A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá disponibilizar a tela para caso se faça necessária.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** a5d9abe32a18c8b9

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executara as rotinas de separação de volumes, Sorter e PTL (Put-To-Light) nas saídas do sorter, tendo como papel fundamental a interface entre os sistemas WMS (Winthor) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Métodos de separação  
**Score:** — (semantico) | **ID:** 5944f142f32e76bd

Existem 4 métodos de separação utilizados no processo: Pallet Box, Pallet Sorter, Full Case e Fracionados.
Pallet Box (OS TIPO 17/23): É gerenciado exclusivamente pelo WMS.
Pallet Sorter: Por sua vez, é controlado pelo WCS.
Full Case (OS TIPO 10):  Também é gerido pelo WCS, que recebe ordens de serviço do WMS contendo caixas fechadas (Full Case).
Fracionados (OS TIPO 22): É gerenciado exclusivamente pelo WMS, A responsabilidade do WCS no caso dos pedidos fracionados Tipo 22 é apenas garantir que os volumes sejam desviados para o chute correto.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Pallet Sorter  
**Score:** — (semantico) | **ID:** 3db80a0d9669789e

O WMS gerencia o envio dos pedidos (OS TIPO 10) e as ordens de serviço, enquanto o WCS é responsável pela separação dos pedidos, quando a quantidade solicitada de mais de um pedido for igual ou maior a de um pallet. Nesse caso, o pallet será coletado e etiquetado de acordo com a prioridade das cargas definidas pelo WMS.
Importante: A impressão das etiquetas é obrigatória e deve ocorrer antes do início da coleta. Somente após a impressão das etiquetas o sistema libera a tarefa de separação.
Esse processo de coleta e separação ocorrerá após o reabastecimento da posição realizado pelo WMS. Ou seja, após o WCS coletar o pallet da posição, ele informará ao WMS que a coleta foi realizada, e o WMS gerará o reabastecimento conforme necessidade, seja para um novo pallet fechado ou para a coleta de caixas FullCase.
Nota: O WCS não será responsável pelo reabastecimento ou controle de posições e suas quantidades, sendo essas funções exclusivas do WMS.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** 25daba62b19a0c14

Método de separação será gerido pelo WMS ordem de serviço (OS TIPO 22), os produtos são coletados e alocados em uma caixa plástica, indicada para itens com volumes menores ou de alta variedade. A caixa recebe uma etiqueta com dados de destino, e, após a separação, é induzida no sorter. O WCS recebe uma flag indicando que o produto é fracionado e, ao identificar essa informação, ao receber essa caixa no sorter realiza apenas o desvio no chute, sem realizar mais nenhuma operação no processo.
Nota: Nesse processo, a única responsabilidade do WCS é realizar o desvio da caixa no CHUTE.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Separação Pallet Fechado (Pallet Sorter)  
**Score:** — (semantico) | **ID:** ed912c9a0b4e7a14

Esse método de separação é utilizado quando uma única onda ou tarefa contém múltiplos pedidos com o mesmo produto, e a quantidade total demandada é igual ou superior a um pallet fechado.
O WCS é responsável por coordenar a coleta do pallet e gerar automaticamente as tarefas de separação e etiquetagem, considerando a prioridade das cargas determinada com base na onda mais antiga. Dessa forma, o sistema garante que os pedidos pendentes há mais tempo sejam processados primeiro, respeitando a criticidade operacional.
O operador, utilizando o coletor do cliente, acessa o sistema WCS, realiza o login e inicia a leitura da posição de picking. Em seguida realiza a leitura do DUN-14 do produto. Durante essa etapa, pode utilizar a funcionalidade de Multiplicador, que permite definir, no coletor, a quantidade de caixas a serem coletadas com base em uma única leitura do DUN. Isso é especialmente útil em cenários com grande volume, otimizando o tempo de coleta ao permitir que várias caixas sejam processadas simultaneamente.
Após finalizar a coleta, o operador leva o pallet até a área de stage, um espaço físico intermediário e obrigatório, com endereçamento sistêmico, utilizado para controle e organização dos volumes antes da indução no sorter.
Na área de stage, outro operador assume a tarefa de etiquetagem individual, aplicando em cada caixa a etiqueta gerada automaticamente pelo WCS e registrando no coletor o endereço da posição de stage, garantindo rastreabilidade completa antes do próximo estágio da operação.
Ao encerrar a tarefa, o operador registra no coletor a finalização da separação. Nesse momento, o WCS atualiza a tabela compartilhada com o WMS, sinalizando que o pallet foi consumido. Com base nesse retorno, o WMS pode gerar automaticamente uma nova tarefa de reabastecimento, desde que exista saldo disponível na posição de pulmão. Se a demanda remanescente for inferior à capacidade de um pallet completo, o WCS converte o processo automaticamente para o modo Full Case, iniciando um novo ciclo pela tela de Order Start.
Essa conversão somente ocorre após a impressão e liberação das etiquetas dos pedidos de Pallet Sorter no Order Start.
Fluxo Operacional:
O WMS envia ao WCS as ordens de serviço contendo pedidos, produtos, quantidades e prioridade. O WCS gera a tarefa de coleta do pallet, informando ao operador a posição de estoque e a quantidade a ser coletada.
O WCS gera a tarefa de coleta do pallet, indicando ao operador a posição de estoque e a quantidade a ser coletada.
O operador, utilizando o coletor, acessa o sistema WCS, realiza o login, lê a posição de picking, em seguida a etiqueta identificadora do pallet (master) e, por fim, o DUN-14 do produto. Durante esse processo, pode utilizar a função Multiplicador para ajustar a quantidade de caixas coletadas com uma única leitura do DUN.
O operador coleta o pallet completo, aplica a etiqueta sequencial gerada pelo WCS (vinculada à tarefa de separação) e transporta o pallet até a área de stage, juntamente com as etiquetas que serão aplicadas individualmente.
Na área de stage, um segundo operador aplica, caixa a caixa, as etiquetas geradas automaticamente pelo sistema, garantindo a identificação e rastreabilidade dos volumes.
Ao finalizar, o WCS informa ao WMS que o pallet foi consumido. Com base nessa informação
O ciclo se repete para novos pallets completos. Se a demanda remanescente for menor que a capacidade de um pallet, o WCS converte automaticamente o processo para o modo Full Case, iniciando um novo fluxo na tela do Order Start.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 3fd7c815c9d8484e

O Sorter terá capacidade de produzir 6.000 volumes/hora com indução de 3.000 caixas de cada lado.
O Sorter será composto por 2 (duas) rampas de indução e 1 (um) portal de leitura com 3 (três) faces (lados) de leitura, uma superior (topo) e duas laterais. Essas três faces garantem a leitura completa dos volumes, permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case. Durante esse processo, o sistema compara automaticamente o DUN ou EAN lido na caixa com o código da etiqueta do pedido, validando se o volume realmente corresponde ao produto solicitado no pedido.
Em toda a extensão do sorter, haverá 20 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 21 rampas ao todo.
As 20 rampas de saída estarão organizadas da seguinte forma:
17 rampas com 8 posições PTL (Put-To-Light).
2 rampas com 10 posições PTL (Put-To-Light).
1 rampa com 12 posições PTL (Put-To-Light).
Ao todo, o sistema contará com 168 posições PTL distribuídas entre as rampas em toda extensão do sorter. Cada posição será equipada com um display eletrônico de três dígitos com LED, permitindo a identificação visual e precisa do ponto de alocação do volume.
Além disso, uma única rampa poderá atender de 2 a 3 rotas diferentes, conforme a roteirização da carga. Isso será visualmente identificado no display da posição PTL, pois cada rota poderá ocupar dois ou três posições pallets (PTL´s) distintas, possibilitando a separação e organização de pedidos por rota diretamente na saída.
Cada rampa de saída do sorter será equipada com um leitor de código de barras e um conversor, totalizando 21 leitores de código de barras e 21 conversores, correspondentes às 21 rampas existentes (20 de saída e 1 de rejeito). Esses dispositivos são responsáveis por fazer a comunicação e capturar as informações de leitura ao sistema WCS.
O processo do sorter consiste na leitura da caixa no portal de leitura, que envia a etiqueta lida ao Controlador Lógico (CLP). O CLP encaminha essa informação ao WCS, que consulta sua base de dados para verificar os dados do pedido associado àquela etiqueta. Após essa verificação, o WCS envia ao CLP a instrução de desvio, informando em qual rampa a caixa deve ser desviada.
O sorter realizará o desvio dos volumes com base no mapa de rotas cadastrado e ativo no sistema WCS. Esse mapa deve ser configurado previamente no WCS, definindo para cada tipo de volume ou pedido a rampa de saída correspondente.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido pelo sistema WCS ou estar devidamente etiquetados. Volumes que estiverem sem identificação ou etiquetas inválidas serão direcionados para rejeito ou reprocessamento, conforme as regras definidas pela operação.
Para as Ordens de Separação (OS) do tipo 22 (flowrack), o processo segue uma lógica diferente. Essas caixas são induzidas normalmente no sorter, porém não são alocadas em posições PTL. Nesses casos, o sistema WCS realiza apenas o desvio para a saída correta, sem acendimento de posições ou validação adicional. A tratativa dos volumes após o desvio na saída correta é de responsabilidade do cliente, conforme os procedimentos definidos em sua operação.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Sinaleiro  
**Score:** — (semantico) | **ID:** 8a92472ae6719fe2

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
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
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Cancelamento de volumes (avarias)  
**Score:** — (semantico) | **ID:** e2ab184edd1301a4

Sistema WCS deve disponibilizar uma tela com a funcionalidade de excluir volumes que estão sendo esperados pelo sorter. Nesta tela só deve apresentar os volumes que ainda não foram alocados no pallet (realizado a leitura no scanner das saídas do sorter)
Esta função será necessária em casos de avarias com a caixa ou problemas de leitura, onde este item será devolvido ao estoque e excluído dos registros do WCS.
Para o cancelamento ser efetuado deverá ser informado o “Status” (motivo pré-definido dentro do WCS) e um usuário com as permissões necessárias para esta funcionalidade. O operador deve informar o status da avaria para que a integração seja enviada. As opções disponíveis para seleção serão: Consumo, Qualidade e Descarte.
Com o cancelamento concluído o sistema WCS deve enviar a integração mencionada no item Cancelamento de volumes para o WMS.
Especificação de volumes induzidos no sorter (IA)
Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:
Conforme a imagem acima, o código deve estar integrado no sistema Velox.
Processo de IA no Sorter para Volumes Induzidos
O sistema WCS utiliza recursos avançados de Inteligência Artificial (IA) para garantir a correta identificação, validação e direcionamento dos volumes no sorter. Este processo é fundamental para que a automação funcione com precisão e eficiência, minimizando erros e otimizando o fluxo operacional.
Integração dos Volumes no Sistema WCS
Antes da indução no sorter, todos os volumes (caixas) devem estar completamente registrados e integrados no sistema WCS. Essa integração contempla o cadastro detalhado de cada volume, incluindo informações essenciais, como:
Códigos de barras vinculados ao volume;
Dados de destino;
Informações sobre a etiqueta impressa;
Eventuais múltiplos códigos de barras por volume.
Leitura e Validação no Portal do Sorter
Durante a passagem no sorter, o portal de leitura captura os códigos de barras das caixas. Para volumes que possuam múltiplos códigos de barras, o sistema é capaz de identificar e relacionar todos eles ao mesmo volume registrado no WCS.
A IA realiza uma comparação entre os dados lidos e as informações previamente integradas para validar:
Se o volume está correto;
Se a etiqueta corresponde ao conteúdo e ao destino;
Se existem inconsistências ou divergências nos códigos.
Direcionamento e Desvio Automático
Com base na validação realizada pela IA, o sistema WCS determina o destino correto do volume. A automação do sorter, então, recebe essa informação para realizar o desvio físico do volume para a posição adequada, garantindo a continuidade do fluxo.
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
A operação de Contingência Sorter é um procedimento previsto no sistema WCS, destinado a tratar volumes que apresentem problemas na triagem automática realizada pela IA, como por exemplo, códigos de barras de má qualidade impressos pelo fornecedor.
A impressão dessas etiquetas de contingência (formato IVT+DUN) será responsabilidade da Invent.
A equipe operacional será treinada para identificar e aplicar essas etiquetas em volumes com falha de leitura repetida. Essas etiquetas devem ser fixadas de forma visível e seguir o padrão fornecido pela Invent para garantir que a IA do sorter reconheça corretamente o volume.
Para evitar impacto na operação, o WCS está preparado para esse cenário por meio do processo de contingência, que consiste na impressão de uma etiqueta especial para o produto, conforme descrito abaixo:
A etiqueta de contingência concatena os caracteres “IVT” com o DUN correto da caixa.
Exemplo do formato correto da etiqueta de contingência:
IVT + [DUN da caixa]
Quando o sorter identifica uma etiqueta neste formato vinculada à caixa, ele ignora os demais códigos presentes e realiza a triagem considerando apenas o DUN após os caracteres “IVT”.
A impressão dessas etiquetas de contingência é de responsabilidade da Invent.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Separação Pallet Sorter  
**Score:** — (semantico) | **ID:** 02dfaa275830531c

Esse método é adotado quando múltiplos pedidos resultam em volumes equivalentes a um pallet fechado.
Fluxo:
Recebimento da OS
O WMS identifica o cenário e envia ao WCS a ordem de serviço (OS).
Tarefas e Coleta
O WCS gera a tarefa de coleta do pallet, informando posição de estoque e quantidade.
O operador realiza a leitura da posição, coleta o pallet, etiqueta individualmente cada caixa ou utiliza a funcionalidade de multiplicador para otimizar leituras de grandes volumes.
Etiquetagem e Stage
Cada caixa é etiquetada individualmente com etiquetas geradas automaticamente.
O operador transporta o pallet à área de stage, informando no coletor o endereço sistêmico para rastreabilidade.
Conversão Automática para Full Case
Caso a demanda restante seja inferior a um pallet completo, o processo é automaticamente convertido para modo Full Case, respeitando o fluxo normal do Order Start.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Processo de Operação do Sorter  
**Score:** — (semantico) | **ID:** 9eae105311c698b1

O Sorter foi projetado para processar até 2500 volumes por hora, com base na eficiência da indução. Ele conta com um portal de leitura que garante que as etiquetas sejam lidas corretamente permitindo ao WCS realizar o checkout dos volumes induzidos.
O sistema do Sorter é composto por 7 rampas
6 rampas destinadas ao transporte dos volumes.
1 rampa exclusiva para rejeito.
O processo no Sorter inicia quando o volume passa pelo portal de leitura. A câmera captura a etiqueta do volume, que é então enviada ao Controlador Lógico Programável (CLP). O CLP encaminha as informações ao WCS, que realiza a verificação dos dados do volume associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, indicando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme a rota enviada na integração, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos devem ter uma etiqueta, que inclui um código de barras ou QR code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão automaticamente direcionados para o rejeito ou reprocessamento, conforme as regras de operação definidas.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Regras Ordem de Transporte (OT)  
**Score:** — (semantico) | **ID:** 13b346f2c7da606e

A Ordem de Transporte (OT) é a instrução que determina a movimentação de um material de uma posição de origem para uma posição de destino dentro do armazém. É o mecanismo pelo qual o SAP e o WCS se comunicam para solicitar, executar e confirmar movimentações (transportes de saldos).
Toda movimentação no centro de distribuição seja abastecimento de posição, retirada de palete, entrega de palete, inventário, limpeza de canal ou estorno de OT é formalizada por meio de IDOC. Sem uma OT, nenhuma movimentação é executada pelo WCS.
A comunicação de OTs entre SAP e WCS utiliza quatro tipos de IDOC, cada um com uma função específica no ciclo de vida da ordem:
Identificador Único
Toda OT de reabastecimento possui um identificador único que a acompanha ao longo de todo o processo. Esse identificador é o elo que conecta a necessidade de movimentação ao palete designado para atendê-la.
O identificador único é essencial para três cenários:
Substituição de palete: Quando o SAP envia um novo TORD com o mesmo identificador, o WCS identifica que se trata de uma troca de palete para a mesma necessidade, e não de uma nova necessidade.
Rastreabilidade: Permite acompanhar o histórico completo de uma movimentação nos relatórios, desde a solicitação até a confirmação ou cancelamento.
Priorização de OT: Permite o WCS definir uma nova prioridade a OT garantindo melhor eficiência na execução das tarefas.
Status da OT:
Status OT status dentro do WCS:
Validação de peso OT com destino BK25: O WCS executa imediatamente a validação de peso do palete, antes de disponibilizá-lo para qualquer etapa operacional no BK25. A validação considera o peso informado no TORD para cada lote, soma todos esses pesos com a tara (Peso do palete vazio e stretch) configurada no Velox. O valor resultante é comparado com o limite máximo aceitável, inicialmente definido em 1.200 kg (Pode ser alterado via chamado com o time da Invent).
Peso informado no TORD + tara configurada no Velox ≤ 1.200 kg
Caso o peso calculado ultrapasse o limite permitido, o WCS indica um erro no processamento dessa necessidade em uma tela de ordem e transporte. Não é retornado erro ao SAP via integração. Somente paletes que atenderem à validação de peso podem seguir no fluxo.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** TORD  
**Score:** — (semantico) | **ID:** d9057af15a585548

O TORD é o IDOC que materializa a Ordem de Transporte. É a mensagem que cria formalmente a OT no sistema. O TORD é utilizado para comunicar a criação de uma OT entre o SAP e WCS e pode trafegar e duas direções:
SAP → WCS: O SAP cria a OT e envia ao WCS para execução. Utilizado em todas as movimentações de produtos em estoque.
WCS → SAP: O WCS solicita uma movimentação ao SAP. Utilizado durante a separação de materiais quando acontecem cortes. Nesse caso, o WCS envia um TORD de solicitação e o SAP responde com um TORD confirmado, realizando a equiparação de estoques.
Estrutura do IDOC TORD
SAP > VELOX (TORD)
Utilização dos dados (Velox):
Regra de TORD confirmado: Quando o IDOC TORD é recebido com status de confirmado, o WCS considera a movimentação como já concluída. Nesse caso, não é necessário o recebimento ou envio de TOCO (a confirmação já está implícita no próprio TORD) e não é possível realizar um CATO (a OT não pode ser estornada pois já foi efetivada).
OBS: No caso do TORD de limpeza de canal o campo NLPLA vem com a informação “ZERARCANAL”

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Status possíveis para cada informação no WCS  
**Score:** — (semantico) | **ID:** fd1b3563d74bfe93

Missões (Remessa):
Volumes:
Volumes para coleta:
Volumes para sorter:
Objetivo da atualização desse status é a identificação da situação do volume e consequentemente remessa, onde ao visualizar o status em qualquer uma desses funcionalidade existirá a informação assertiva da situação geral do volume.
NOTA: Podem ocorrer atualizações de remessa feitas pelo SAP ao WCS, onde enquanto o status da remessa (Missão) for DISPONIVEL todos os dados editáveis podem ser atualizados, após o início da onda (status EM ANDAMENTO), somente os dados de transportadora, placa e tipo de veículo serão atualizados, todas as demais informações serão ignoradas pelo WCS e em caso de tentativa de atualização de informações para uma remessa encerrada o WCS retornará o Bad Request ao SAP.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Doca Principal  
**Score:** — (semantico) | **ID:** eb7f37957ebde867

Cada transporte possui obrigatoriamente uma doca principal, definida via IDOC TPSDLS (ZSDDAREM) por meio do campo ZDOCA enviado pelo SAP. A doca principal é fixa e imutável no WCS, preservando a integridade da informação. O WCS não permite alteração da doca principal apenas por meio de um IDOC, em complemento do IDOC iremos receber a prioridade que será usada para ordenação na tela.
É obrigatório o recebimento de pelo menos uma doca principal pelo SAP para que o transporte possa ser incluído em uma onda a atualização da doca só será possível por meio de um IDOC e com status da onda PREPARADA ou CRIADA.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Docas Auxiliares  
**Score:** — (semantico) | **ID:** 4209cf1e694dda57

O WCS permite a configuração complementar de docas secundárias de apoio operacional, com o objetivo de proporcionar flexibilidade e balanceamento de fluxo.
A inclusão de novas docas no transporte é restrita a funcionalidade manutenção de transporte.
As docas secundárias são utilizadas pelo WCS no balanceamento de desvio do sorter, conforme descrito na seção de sorter [Balanceamento].

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Seleção de docas  
**Score:** — (semantico) | **ID:** abd9489caeb25347

O WCS irá listar somente as docas disponíveis para vínculo dentro da onda, ou seja, uma doca já utilizada em outro transporte dentro da mesma onda não irá aparecer na opção de seleção de docas para um outro transporte.
O WCS controlará as docas por onda onde para cada doca primária ou auxiliar (secundaria) será possível atribuir somente 1 transporte, sempre que uma doca for utilizada dentro da onda e exista a necessidade de mudar para uma doca em uso, será necessário acessar o transporte pertencente a doca e retirar a seleção dessa doca necessária, assim deixando-a disponível para atribuir essa doca ao novo transporte.
NOTA: Caso exista mais de um transporte com a doca principal ou secundário não será permitido o início da onda por duplicidade de doca, com isso será necessário a exclusão da onda ou transporte e cancelamento de remessa e a correção da doca primaria deve ser feita dentro do SAP.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Inclusão de ondas preparadas  
**Score:** — (semantico) | **ID:** 4304b771bb11b9bf

Ao realizar a inclusão de transporte em uma onda com status preparada o WCS atribui esse novo transporte a onda selecionada e inicia a rotina de preparação de onda para as remessas (missões) do transporte incluído [Preparação da Onda].

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Exclusão de transporte  
**Score:** — (semantico) | **ID:** 41a5fd82a63ba7fd

A operação pode realizar a exclusão de transportes de uma onda desde que a onda tenha o status criada ou preparada, dessa forma toda onda que ainda não foi iniciada pode sofrer um decréscimo de transporte e os materiais em reserva serão liberados.
Todos os transportes excluídos da onda retornaram para a tela de transportes para serem vinculados a uma nova onda [Criação de onda] ou serem cancelados através do cancelamento de remessa [Cancelamento de remessa].

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Etiquetas de Produto — Regras de Leitura e Interpretação  
**Score:** — (semantico) | **ID:** 4f76fe06585b95c4

A etiqueta de produto é o principal meio de identificação dos volumes durante o processo de sorteamento. Quando uma caixa passa pelo portal de leitura do sorter, o WCS precisa extrair das etiquetas as informações essenciais para tomar decisões de desvio, qual é o produto (SKU), qual é o lote, qual é a data de fabricação e para produtos rastreáveis, qual é o SSCC da caixa.
O projeto MBRF Salvador possui diversos tipos de layouts, com variações significativas na forma como as informações são codificadas. Alguns layouts trazem todas as informações em código de barras, outros omitem o lote ou a data de fabricação, e outros utilizam formatos proprietários que exigem interpretação específica pelo WCS.
Por isso, o WCS deve ser capaz de interpretar todos os layouts, extrair as informações de cada um conforme as regras descritas nesta seção e, quando uma informação não estiver disponível na etiqueta, buscar a informação complementar via cadastro interno ou IDOC do SAP.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Informações Extraídas da Etiqueta  
**Score:** — (semantico) | **ID:** c0bfba377cdcc569

Independentemente do layout, o WCS precisa obter as seguintes informações de cada volume que passa pelo portal de leitura:
Regra DE/PARA entre SKU e DUN14: O WCS deve manter em seus cadastros uma tabela de correspondência (DE/PARA) entre SKU e DUN14 do produto, pois cada layout de etiqueta pode informar um ou outro e até os dois. O sistema deve interpretar corretamente o que receber, convertendo DUN14 para SKU quando necessário para manter consistência interna.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 64faca7c99a9e67e

O sorter será responsável por realizar o direcionamento automático dos volumes ao longo do fluxo, conforme as definições operacionais e regras de destino configuradas no WCS.
Durante a execução da onda, o WCS deverá enviar ao sorter as informações necessárias para identificação e desvio dos volumes, garantindo que cada item siga para o destino correto dentro do processo.
A identificação dos volumes no sorter será realizada por meio da leitura dos códigos presentes na caixa [Etiquetas]. A partir dessa leitura, o WCS será responsável por interpretar as informações recebidas e determinar o destino do volume, com base nos dados recebidos na criação da remessa [Remessa].
O funcionamento do sorter deverá considerar as validações de leitura, regras de destino e tratativas de exceção, de forma a assegurar a continuidade da operação e a correta segregação dos volumes.
Regras Operacionais do Sorter
O sorter deverá executar os desvios conforme os dados recebidos do WCS e de acordo com o cadastro de destinos configurado para a operação.
Sempre que um volume for identificado corretamente, o sistema deverá comandar seu direcionamento para a saída correspondente.
Caso ocorra alguma inconsistência durante a leitura, ausência de cadastro, falha de comunicação ou impossibilidade de definição do destino, o volume deverá ser encaminhado para o fluxo de rejeito para a rampa de rejeitos tratáveis ou não tratáveis.
Estrutura de retorno de Separação com etiqueta Rastreável
Velox  SAP TPSDLS (Ext: ZSDDAREM)
Tratativas de Exceção
Os cenários de exceção do sorter deverão ser tratados pelo WCS de acordo com o tipo de falha identificado no processo.
Entre os principais cenários de exceção, podem ser considerados:
falha de leitura do volume;
ausência de destino configurado;
divergência de cadastro;
indisponibilidade de rota;
parada do equipamento;
Erro ou falha do desvio pelo Sorter;
envio para rejeito.
As ações de reprocesso, rejeito ou intervenção operacional deverão seguir as regras definidas para cada cenário. [Rejeito]
Integração com o WCS
O WCS será responsável por centralizar as regras de decisão do sorter, enviando os comandos de direcionamento conforme os dados da operação e recebendo os retornos necessários para controle e rastreabilidade do processo.
O sorter opera de forma integrada ao WCS, garantindo visibilidade do status dos volumes, dos desvios realizados e das ocorrências de erro ao longo da execução.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Crosscheck — Validação Cruzada PVAR no Sorter  
**Score:** — (semantico) | **ID:** 400822242c07ebad

Cada caixa passa a ter duas etiquetas: a etiqueta de material (do fabricante) e a etiqueta de expedição PVAR (impressa pelo WCS na coleta). O crosscheck é a comparação entre as duas para garantir que o produto da caixa corresponde ao que a etiqueta de expedição indica.
O WCS disponibiliza um parâmetro para ligar ou desligar a obrigatoriedade do crosscheck, alterável a qualquer momento durante a operação, essa funcionalidade é acessada apenas por usuários de nível de acesso permitido. A etiqueta de material sempre precisa ser lida, independentemente do estado do parâmetro. O que muda é a obrigatoriedade de leitura da etiqueta de expedição.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Crosscheck Desligado  
**Score:** — (semantico) | **ID:** e22f6603b948f89a

O WCS ignora as informações do QRcode e opera exclusivamente com a etiqueta de material.
NoRead na etiqueta de material: Recirculação → rejeito.
NoRead na etiqueta de expedição: Ignorado. Volume segue normalmente.
Com o crosscheck desligado, a rastreabilidade individual do volume PVAR fica limitada.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Balanceamento de Desvio no Sorter  
**Score:** — (semantico) | **ID:** 8f808a0c663415d8

O balanceamento de desvio é a lógica que o WCS utiliza para decidir para qual rampa um volume deve ser direcionado quando existem múltiplas opções válidas de destino. O objetivo é distribuir os volumes de forma equilibrada, evitando que uma rampa ou transportadora fique sobrecarregada enquanto outras ficam ociosas.
Essa lógica opera em dois níveis distintos e complementares:
Balanceamento entre transportadoras (nível macro): Quando o mesmo SKU com shelf life é elegível para mais de uma transportadora, o WCS distribui os volumes entre todas as transportadoras aptas, priorizando sempre a mais ociosa.
Balanceamento entre rampas de uma mesma transportadora (nível micro): Quando uma transportadora possui mais de uma rampa vinculada, o WCS distribui os SKU entre as rampas daquela transportadora.
Os dois níveis atuam em sequência: primeiro o WCS decide qual transportadora receberá o volume, depois decide qual rampa daquela transportadora será utilizada.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Balanceamento entre Transportadoras (Nível Macro)  
**Score:** — (nome-topico) | **ID:** d933f21c62284cf8

Quando um volume passa pelo portal de leitura do sorter, o WCS identifica o SKU e o shelf life do produto. Com essas informações, o WCS busca todas as transportadoras (docas) que estão elegíveis para receber aquele volume, ou seja, todas as transportadoras cujos transportes na onda possuem aquele SKU com aquele shelf life em suas remessas.
O WCS aplica um balanceamento 1 para 1 entre as transportadoras elegíveis, direcionando cada volume para a transportadora que estiver mais ociosa naquele momento.
Fluxo de decisão:
O volume é lido no portal do sorter. O WCS identifica SKU e shelf life.
O WCS consulta todas as transportadoras elegíveis para aquele SKU + shelf life na onda em processamento.
Entre as transportadoras elegíveis, o WCS identifica qual está mais ociosa, ou seja, qual recebeu menos volumes até o momento em relação à sua demanda total.
O volume é direcionado para essa transportadora.
O próximo volume dele SKU + shelf life passará pelo mesmo processo, e como a transportadora anterior acabou de receber um volume, agora outra pode estar mais ociosa, garantindo a alternância.
Exemplo prático:
Situação: SKU 719287 (Bacon Inteiro Sadia) com shelf life compatível aparece nos pedidos de 3 transportadoras:
O próximo volume do SKU 719287 será direcionado para a Transportadora C (mais ociosa). O volume seguinte será reavaliado com os novos números, e assim por diante.
Objetivo
O objetivo desse balanceamento é evitar que uma única transportadora concentre todos os volumes de um SKU popular enquanto outras ficam paradas esperando. Ao distribuir de forma equilibrada, o WCS garante que:
Todas as transportadoras progridam simultaneamente no carregamento.
Nenhuma doca fique sobrecarregada com filas de volumes enquanto outras estão vazias.
O tempo total de expedição de todas as transportadoras seja reduzido, pois o carregamento ocorre em paralelo.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Balanceamento entre Rampas de uma Mesma Transportadora (Nível Micro)  
**Score:** — (nome-topico) | **ID:** 2a5bf4e671ea0a03

Quando uma transportadora possuir mais de uma rampa associada, o WCS deve realizar o balanceamento de desvio entre essas docas, com o objetivo de evitar concentração de demanda em apenas uma delas e garantir melhor distribuição operacional ao longo da execução das ondas.
O balanceamento deve considerar a quantidade de volumes por SKU e o histórico recente de utilização das docas, promovendo uma distribuição progressiva e equilibrada.
Lógica de Distribuição
Na primeira análise de distribuição, o WCS deve realizar o direcionamento dos skus considerando a quantidade de volumes de forma decrescente e respeitando o número de docas disponíveis para a transportadora.
Para isso, o sistema deve:
Identificar a quantidade de docas cadastradas para a transportadora;
Identificar a quantidade de skus previstos na onda para aquela doca.
Com base nessas informações, a distribuição deve seguir a seguinte lógica:
O SKU com maior quantidade de volumes deve ser direcionado para a primeira rampa disponível;
O segundo SKU com maior volume deve ser direcionado para a próxima doca;
O processo deve continuar de forma sequencial até que todas as docas sejam utilizadas.
Balanceamento entre skus para desvio
Para os skus subsequentes, o WCS deve considerar o histórico de carga já direcionada para cada doca na primeira análise, aplicando uma lógica de compensação, onde:
Docas que receberam maior volume anteriormente devem ter menor prioridade no próximo direcionamento
Docas mais ociosas devem ser priorizadas para recebimento de maiores volumes
Exemplo de Aplicação
Análise 1:
SKU X: 80 volumes → direcionado para Doca 01
SKU Y: 10 volumes → direcionado para Doca 02
Análise 2:
SKU Z: 80 volumes → direcionado para Doca 02 (doca com menor carga na onda anterior)
SKU W: 10 volumes → direcionado para Doca 01
Essa estratégia tem como objetivo garantir que, ao final da execução da separação, todas as docas da mesma transportadora apresentem um nível de carga equilibrado, evitando ociosidade ou sobrecarga pontual no sorter.
Regra de produto por doca da mesma transportadora: Uma vez que um SKU começa a ser desviado para uma determinada doca, todas as caixas daquele mesmo SKU devem continuar sendo enviadas para a mesma doca. Não é permitido dividir o mesmo produto entre docas diferentes da mesma transportadora.

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
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
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Crosscheck  
**Score:** — (semantico) | **ID:** a6d4cd70807e66cf

Antes do portal de leitura do sorter, cada volume passa obrigatoriamente por uma balança que realiza a aferição do peso real da caixa. O WCS calcula o peso estimado do volume com base no peso unitário de cada item recebido via integração e compara automaticamente com o peso aferido fisicamente.
O WCS disponibilizará uma tela específica para cadastro de tolerâncias de peso, permitindo a configuração de faixas aceitáveis de variação. Caso o peso aferido esteja fora da faixa de tolerância configurada, o volume será automaticamente desviado para a área de rejeito.
Os volumes rejeitados e seus respectivos motivos poderão ser consultados através da tela "Rejeitos Sorter", onde o operador ou gestor poderá realizar a análise e tratativa necessária.

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** a19beafe0ad267c6

O sorter é responsável por direcionar os volumes aos seus destinos corretos conforme o mapa de desvio ativo no WCS.
O portal de leitura é composto por duas faces — uma superior e uma lateral — que fazem a leitura do código de barras da caixa, além de balança e dimensionador para verificação de peso e cubagem. A balança realiza o Crosscheck conforme descrito na seção 7.
O fluxo de desvio ocorre em tempo real: o CLP da esteira comunica ao WCS qual volume está passando no portal, o WCS consulta sua base de dados e retorna ao CLP a rampa de destino, e o CLP realiza fisicamente o desvio.
O sorter possui 5 (cinco) rampas: 4 (quatro) para saída de volumes vinculados a clientes e 1 (uma) exclusiva para rejeitos. Cada rampa conta com 1 PDV e pode operar com até 4 (quatro) clientes simultaneamente, sendo 1 (um) pallet por posição PTM, totalizando 16 posições de pallet nas 4 saídas do sorter.

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** PTM (Put to Monitor)  
**Score:** — (semantico) | **ID:** 666ca412a2d6c16a

De acordo com o mapa de sorter ativo, o WCS realiza automaticamente a abertura das posições de PTM.
Após o desvio dos volumes nas rampas, o operador posicionado na ponta da rampa realiza a leitura do código de barras da caixa com o scanner. O WCS verifica em sua base qual cliente está vinculado ao volume e exibe no PDV a posição do pallet correspondente, destacando a área com a cor padrão daquela posição. Marcações no chão com as mesmas cores serão disponibilizadas pelo cliente para facilitar a identificação pelo time operacional.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
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
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Especificaciones  
**Score:** — (semantico) | **ID:** ffca1537de7a19b9

Para el correcto funcionamiento de la automatización, se necesita una aplicación que se encargue de gestionar la información de los equipos clasificados en la operación, es decir, esta aplicación ejecutará las rutinas del sorter, teniendo como función fundamental la interfaz entre los sistemas WMS con WCS Invent.
La aplicación WCS de Invent necesita una base de datos exclusiva para el correcto almacenamiento y gestión de la información, que será facilitada por el cliente (instalación de la base de datos PostgreSQL).
La información se intercambiará entre la aplicación y las estaciones de trabajo a través de una interfaz web, por lo que es necesario utilizar un navegador web estándar en cada estación de trabajo (Google Chrome).

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** f2b9aeeeb1b8922b

El sorter realizará automáticamente la desviación de volumen, considerando la disponibilidad de los PTLs para la ejecución de actividades de picking y crossdocking, respetando siempre el orden FIFO de integración con el WMS.
La agrupación lógica de los palés dentro del sorter se determinará en función de la tienda de destino, la categoría de producto (Alimento/No Alimentario) y el tipo de envase, así como la información recibida mediante integración.
Para definir el destino de cada volumen, el sistema Velox leerá el código de caja (estándar o IVT) y, basándose en esta identificación, realizará un análisis dinámico de las rampas disponibles. Este análisis considera, en conjunto, qué rampas están habilitadas para recibir el volumen, el nivel de ocupación actual de cada una y el historial reciente de recepción, es decir, qué rampas recibieron el último flujo de pasajeros.
Con base en estos criterios, Velox gestionará la distribución del flujo entre las rampas disponibles, dirigiendo cada flujo a la rampa con menor ocupación y a la que lleva más tiempo sin recibir cajas. Esto permite un equilibrio automático de la carga y evita la concentración excesiva de flujos en un solo punto.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Motivos de rechazo del sorter  
**Score:** — (semantico) | **ID:** 8986ce71e174e7cd

La tolva de relaves al final del sorter es responsable de recibir volúmenes que caen en una de las siguientes 6 situaciones:
NoRead: Ocurre cuando la cámara en el portal de lectura no puede escanear el código de barras presente en la caja o cuando no hay etiqueta en la caja en caso de trabajo sin IA. En este caso, el PLC envía la información de "no lectura" al WCS, que dirige el volumen al conducto de relaves. El volumen será gestionado por un operador que, tras corregir o añadir la etiqueta, debe volver a inducir el volumen al sorter antes del portal de lectura.
Sin Ruta: Ocurre cuando la cámara puede leer el código de barras en la caja y el PLC envía la información recibida a Velox. Sin embargo, Velox no encuentra el código en su base de datos de destinos. En este caso, el volumen se dirige a los relaves y el operador debe realizar el tratamiento necesario. Si es necesario, el volumen se reinducirá en el sorter, antes del portal de lectura.
MultiRead: Este caso ocurre cuando la IA está apagada y la cámara identifica la lectura de más de un código de barras dentro de los parámetros usados en la configuración de la cámara. La cámara informa al PLC de que hay múltiples códigos leídos, y el PLC envía el mensaje "MultiRead" al WCS. Cuando el volumen llega a la tolva de rechazo, el operador debe eliminar uno de los códigos y volver a inducir el volumen antes del portal de lectura, o reimprimir la etiqueta del envase.
Ramp Full: ocurre cuando el proceso de lectura y validación en el Velox es correcto, pero cuando el volumen llega al desviador de la rampa de destino, la rampa está llena de cajas, activando el sensor de acumulación. En este caso, el volumen se envía a los relaves, y el señalero también indica esta condición en la rampa. El operador debe volver a insertar el volumen antes del portal de lectura antes de que pueda finalizarse.
Ocurrencias: Ocurre cuando un volumen tiene su ocurrencia (daño, pérdida, cancelación), lo que hace que el volumen se dirija a los relaves.
Pérdida de seguimiento: Se produce cuando, tras leer en el portal, se pierde la identificación de volumen dentro del sistema, es decir, el PLC ya no tiene la referencia de la posición física del volumen en el sorter. Este tipo de fallo suele ocurrir debido a entrelazamientos o cuando el volumen no cumple con las especificaciones definidas para la operación. En esta situación, el sorter no puede determinar el destino correcto del volumen, lo que lo dirige automáticamente al conducto de relaves. El operador debe entonces volver a inducir el volumen antes del portal de lectura para que el proceso se restablezca.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Incidencias  
**Score:** — (semantico) | **ID:** f02b4838e33f77eb

En caso de daño, pérdida y necesidad de cancelación, para que el sorter deje de esperarle y el WMS realice el tratamiento necesario, el proceso de apertura y manejo de los incidentes se llevará a cabo según el flujo descrito a continuación.
Para iniciar el proceso, el operador debe acceder a la pantalla de "Volúmenes" en el sistema WCS. A partir de ahí, el operador debe filtrar por uno de los códigos de producto o descripción y seleccionar uno de los paquetes de la lista que tenga un estado distinto a terminado. Cuando hagas clic en abrir caso, WCS mostrará una ventana emergente pidiendo al operador que proporcione el motivo del caso.
Si hay más de un volumen a tratar, el operador puede realizar este proceso para todos los volúmenes necesarios. Una vez abierto el caso, los volúmenes que deben gestionarse deben accederse desde la pantalla de Casos, donde WCS mostrará una lista de todos los volúmenes con un caso abierto, ordenados por Destino (STORE).
El operador puede seleccionar uno o más volúmenes para aprobar o rechazar la ocurrencia. Si seleccionan Cancelar, WCS ignora estas ocurrencias seleccionadas y finaliza su registro internamente. Si el operador selecciona Aprobar, Deberá filtrar y seleccionar únicamente los volúmenes del mismo destino. Tras seleccionar todos los volúmenes cuya cancelación desea aprobar, el WCS activará la integración de los volúmenes en el WMS, lo que indicará su cancelación y permitirá que el proceso continúe con la gestión correspondiente.
Este proceso garantiza la precisión en la identificación y el control de los volúmenes que deben cancelarse, permitiendo que el WMS tome las medidas necesarias, como gestionar el volumen o ajustar los movimientos logísticos.
Pantalla de ocurrencias:
Importante: Deberá agregar el campo IlpnPlt a la pantalla de ocurrencias y volúmenes para identificar la operación del palé de origen.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Especificación de los volúmenes inducidos en el sorter  
**Score:** — (semantico) | **ID:** fe73ca09a54754fb

Para una lectura correcta en el portal del sorter, los volúmenes deben integrarse correctamente en el sistema Velox, utilizando la información recibida para validar el destino y realizar correctamente las desviaciones en la automatización.
Ejemplo de una caja con más de un código de barras y cajas etiquetadas:

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Contingência del Sorter (IA)  
**Score:** — (semantico) | **ID:** 28bbbe7c224a8ad1

La operación " Contingência del sorter " en el sistema Velox es un procedimiento desarrollado para tratar situaciones en las que el sistema automático de clasificación (sorter) encuentra dificultades en el procesamiento de cajas debido a condiciones no ideales. Un ejemplo común ocurre cuando los códigos impresos por los proveedores son de baja calidad, comprometiendo la identificación por inteligencia artificial (IA).
Para evitar impactos en la operación, el sistema Velox cuenta con un mecanismo de contingencia que resuelve estos problemas. Este proceso implica reetiquetar las casillas, generando una nueva etiqueta que coincida con los caracteres "IVT" con el DUN correcto del envase.
A continuación se muestra un ejemplo del formato correcto de etiqueta:
Si el WMS imprime una etiqueta con el propósito de leer el dun en el portal, debe seguir el mismo patrón descrito en este tema.
Cuando este formato de etiqueta está vinculado a la caja, el sorter descarta los demás códigos de la caja y realiza la ordenación viendo solo el DUN/EAN después de los caracteres "IVT".
La impresión de las etiquetas de contingencia será responsabilidad del WMS, pero el WCS pondrá la pantalla disponible en caso de que sea necesario.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Especificación  
**Score:** — (semantico) | **ID:** 4a5e4dc6cc841fc2

Para el correcto funcionamiento de la automatización, se necesita una aplicación que se encargue de gestionar la información de los equipos clasificados en la operación, es decir, esta aplicación ejecutará las rutinas del sorter, teniendo como función fundamental la interfaz entre los sistemas WMS con WCS Invent.
La aplicación WCS de Invent necesita una base de datos exclusiva para el correcto almacenamiento y gestión de la información, que será facilitada por el cliente (instalación de la base de datos PostgreSQL).
La información se intercambiará entre la aplicación y las estaciones de trabajo a través de una interfaz web, por lo que es necesario utilizar un navegador web estándar en cada estación de trabajo (Google Chrome).

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Inducción de volúmenes  
**Score:** — (nome-topico) | **ID:** e5d2a9872ac05146

La inducción de volúmenes será gestionada y cadenciada por el WCS, que controlará las reglas de la matriz de fragilidad de cada producto. El proceso comienza con el WMS, que realiza la selección y deja las paletas de las tareas completadas en un área llamada "Stage In", momento en el que se envía una Etiqueta de integración (5.3) que contiene la información ilpnPtl de cada palé terminado. Con esta información, el WCS genera una lista de orientación de forma inductiva secuencial, donde informa qué paleta debe inducirse en cada momento, respetando las condiciones de disponibilidad y la matriz de fragilidad.
A partir de la integración de los palés enviados por el WMS, el WCS debe permitir ya que esos volúmenes sean liberados para desviación en el clasificador y asignación en sus respectivos PTLs.
WCS no supervisa el proceso de inducción; a petición del cliente, este proceso será controlado por la Operación, y es su responsabilidad que el control de inducción de los volúmenes se realice según la matriz de fragilidad previamente informada.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** e0467e5efafec86d

El sorter desviará los volúmenes de forma automática según la disponibilidad de los PTL para la separación de tareas y el cross-docking, siguiendo las prioridades informadas en la integración.
El agrupador de todos los palés presentes en el sorter será la tienda de destino, la categoría del producto (alimenticio/no alimenticio) y el tipo de embalaje, que se informará mediante la integración por parte del WMS al final de la recogida de los palés.
La cinta transportadora deberá desviar el mismo artículo que se solicite en más de una tienda de forma cadenciada para que no se produzca una sobrecarga de volúmenes en la misma rampa, lo que perjudicaría al operador.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Motivos de rechazo del sorter  
**Score:** — (semantico) | **ID:** 06fbe9f9d1c6c95c

La rampa de rechazo al final del sorter se encarga de recibir los volúmenes que se clasifican en una de las siguientes 5 situaciones:
Sin lectura (NoRead): Se produce cuando la cámara del portal de lectura no puede leer el código de barras presente en la caja o cuando no hay etiqueta en la caja en el caso de trabajar sin IA. En este caso, el CLP envía la información de «sin lectura» al WCS, que dirige el volumen a la rampa de rechazo. El volumen será tratado por un operador que, tras corregir o añadir la etiqueta, deberá volver a introducir el volumen en el sorter, antes del portal de lectura.
Sin ruta: Ocurre cuando la cámara puede leer el código de barras de la caja y el PLC envía la información recibida al Velox. Sin embargo, el Velox no encuentra el código en su base de datos de destinos. En este caso, el volumen se dirige al rechazo y el operador debe realizar las gestiones necesarias. Si es necesario, el volumen se introducirá de nuevo en el sorter, antes del portal de lectura.
MultiRead: Este caso se produce cuando la IA está desactivada y la cámara identifica la lectura de más de un código de barras que se encuentra dentro de los parámetros utilizados en la configuración de la cámara. La cámara informa al PLC que se han leído varios códigos y el PLC envía el mensaje «MultiRead» al WCS. Cuando el volumen llega a la rampa de rechazo, el operador debe eliminar uno de los códigos y volver a introducir el volumen antes del portal de lectura, o volver a imprimir la etiqueta del volumen.
Rampa llena: Se produce cuando el proceso de lectura y validación en Velox es correcto, pero cuando el volumen llega al desviador de la rampa de destino, la rampa está llena de cajas, lo que activa el sensor de acumulación. En este caso, el volumen se envía al rechazo y el semáforo también indica esta condición en la rampa. El operador debe volver a introducir el volumen antes del portal de lectura para que pueda ser finalizado.
Incidencias: Se produce cuando se crea una incidencia (avería, extravío, cancelación) para un volumen, lo que hace que este sea enviado a la zona de rechazo.
Pérdida de seguimiento: Ocurre cuando, después de la lectura en el portal, se pierde la identificación del volumen dentro del sistema, es decir, el PLC deja de tener la referencia de la posición física del volumen en el sorter. Este tipo de fallo suele producirse por enredos o cuando el volumen no cumple las especificaciones definidas para el funcionamiento. En esta situación, el sorter no puede determinar el destino correcto del volumen y lo envía automáticamente a la rampa de rechazo. El operador debe entonces volver a introducir el volumen antes del portal de lectura para que se restablezca el proceso.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Rechazo del sorter  
**Score:** — (semantico) | **ID:** badce8eddb8f9cbd

Todo el rechazo del sorter se dirigirá a una rampa de rechazo, donde se realizará un punto de auditoría de los volúmenes rechazados.
Los rechazos por NoRead, sin integración, sin PTL y otros tipos de fallos se dirigirán a esta rampa de rechazo, donde un punto de auditoría se encargará de registrar el motivo del rechazo y garantizar que el volumen se ha identificado correctamente.
Los desechos por motivo de rampa llena o pérdida de seguimiento se dirigirán a la misma rampa de desechos, pero se reintroducirán según sea necesario para garantizar la continuidad del proceso de separación y movimiento de los productos.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Incidencias  
**Score:** — (semantico) | **ID:** f99715bb2f5d6e29

En caso de avería, extravío y necesidad de cancelación, para que el sorter deje de esperarlo y el WMS realice las gestiones necesarias, el proceso de apertura y tratamiento de incidencias se llevará a cabo según el flujo que se describe a continuación.
Para iniciar el proceso, el operador debe acceder a la pantalla «Volúmenes» en el sistema WCS. A partir de ahí, el operador debe filtrar por uno de los códigos del producto o la descripción y seleccionar uno de los volúmenes de la lista que tenga un estado diferente a finalizado. Al hacer clic en abrir incidencia, el WCS mostrará una ventana emergente solicitando al operador que informe del motivo de la incidencia.
Si hay más de un volumen que tratar, el operador puede realizar este proceso para todos los volúmenes necesarios. Después de abrir la incidencia, se debe acceder a los volúmenes que deben tratarse en la pantalla de Incidencias, donde el WCS mostrará una lista de todos los volúmenes con incidencias abiertas, ordenados por Destino (TIENDA).
El operador puede seleccionar uno o más volúmenes para aprobar o no la incidencia. Si selecciona Cancelar, el WCS descartará las incidencias seleccionadas y finalizará su registro internamente. Si el operador selecciona Aprobar, deberá filtrar y seleccionar solo volúmenes del mismo destino a la vez. Después de seleccionar todos los volúmenes que desea aprobar la incidencia (cancelación), el WCS solicitará la lectura de una master.
Después de leer la matriz y confirmar, el WCS activará la integración de los volúmenes agrupados por la matriz leída para el WMS, señalando la cancelación de los volúmenes y permitiendo que el proceso continúe con el tratamiento adecuado. El WCS debe permitir que el operador utilice una matriz que ya se haya utilizado en el proceso de Incidencias y el WMS debe aceptar la misma matriz más de una vez.
Este proceso garantiza la precisión en la identificación y el control de los volúmenes que necesitan ser cancelados, permitiendo que el WMS tome las medidas necesarias, como el tratamiento del volumen o el ajuste en los movimientos logísticos.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Especificación de volúmenes inducidos en el sorter  
**Score:** — (semantico) | **ID:** 84d422b90acd50b6

Para una lectura correcta en el portal del sorter, los volúmenes deben estar debidamente integrados en el sistema Velox, que utilizará la información recibida para validar el destino y realizar los desvíos correctamente en la automatización.
Ejemplo de caja con más de un código de barras y cajas etiquetadas:

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Contingencia del sorter (IA)  
**Score:** — (semantico) | **ID:** b1e7e484f23539ae

La operación de «Contingencia del sorter» en el sistema Velox es un procedimiento desarrollado para tratar situaciones en las que el sistema de clasificación automática (sorter) encuentra dificultades para procesar cajas debido a condiciones no óptimas. Un ejemplo común se da cuando los códigos impresos por los proveedores son de baja calidad, lo que compromete la identificación por parte de la inteligencia artificial (IA).
Para evitar impactos en la operación, el sistema Velox cuenta con un mecanismo de contingencia que resuelve estos problemas. Este proceso implica el reetiquetado de las cajas, generando una nueva etiqueta que combina los caracteres «IVT» con el DUN correcto del paquete.
A continuación se muestra un ejemplo del formato correcto de la etiqueta:
El WMS envía la información de la etiqueta a través de la integración y el WCS imprime una etiqueta con el objetivo de leer el código DUN/EAN en el portal; debe seguir el mismo estándar descrito en este tema.
Cuando este formato de etiqueta esté vinculado a la caja, el sorter descarta los demás códigos de la caja y realiza la clasificación visualizando solo el DUN/Ean después de los caracteres «IVT».
La impresión de etiquetas de contingencia será responsabilidad del WCS, pero el WCS pondrá a disposición la pantalla en caso de que sea necesario.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** be9c1cc97fefb841

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
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
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 7686367aad4903a0

O sorter realizará o desvio dos volumes de forma automática, considerando a disponibilidade dos PTLs para execução das atividades de separação e crossdocking, sempre respeitando as prioridades definidas na integração com o WMS.
O agrupamento lógico dos pallets dentro do sorter será determinado com base na loja de destino, categoria do produto (Alimentício/Não Alimentício) e tipo de embalagem, informações estas recebidas via integração.
Para definição do destino de cada volume, o sistema Velox realizará a leitura do código da caixa (padrão ou IVT) e, a partir dessa identificação, executará uma análise dinâmica de cadenciamento entre as rampas disponíveis. Essa análise considera, de forma combinada, quais rampas estão habilitadas para receber o volume, o nível de ocupação atual de cada uma delas e o histórico recente de recebimento, ou seja, quais rampas foram alimentadas mais recentemente.
Com base nesses critérios, o Velox realizará o cadenciamento dos volumes entre as rampas elegíveis, direcionando cada volume para a rampa mais ociosa e que há mais tempo não recebe volumes, promovendo um balanceamento automático da carga e evitando a concentração excessiva de volumes em um único ponto.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
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
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 79fce05cb2b631b7

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
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
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
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
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Regra de Contingência para Volumes em Esteira  
**Score:** — (nome-topico) | **ID:** 634e8b63cfc8561b

Caso o cancelamento ocorra para um pedido que já possui volumes físicos (LPNs) circulando na esteira, o WCS Velox marcará esses volumes como 'BLOQUEADOS'. Na próxima leitura de scanner (seja em desvios de zona ou na entrada do Sorter), o sistema comandará o desvio automático para a Rampa de Rejeito, garantindo que o volume saia do fluxo operacional imediatamente.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Regra de Contingência para Volumes em Esteira  
**Score:** — (nome-topico) | **ID:** 0d7fecc61ba4caac

Caso o cancelamento ocorra para um pedido que já possui volumes físicos (LPNs) circulando, o WCS marcará esses volumes como BLOQUEADOS. Na próxima leitura de scanner, o sistema comandará o desvio automático para a Rampa de Rejeito.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Sorter e Expedição  
**Score:** — (semantico) | **ID:** 8feb55e5a40dde47

O Sorter é projetado para processar até 3.000 volumes por hora, com base na eficiência da separação (Full Case, Fracionado, Picking Cart). Ele é composto por um portal de leitura com 2 faces de leitura (lateral) e topo, que garantem a leitura dos volumes, desde que as etiquetas estejam posicionadas na lateral correta das caixas ou topo. Essas faces de leitura permitem que o WCS realize o checkout para pedidos do tipo Full Case e Fracionado.
O Sorter conta com 5 rampas de saída, sendo 4 para o transporte dos volumes e 1 rampa exclusiva para rejeito. Cada uma das rampas de saída de transporte é equipada com um leitor de código de barras e um conversor, totalizando 4 leitores e 4 conversores, responsáveis por capturar as informações das etiquetas e fazer a comunicação com o sistema WCS.
O processo no Sorter inicia com a leitura da caixa no portal de leitura. O sistema captura a etiqueta da caixa, que é enviada para o Controlador Lógico Programável (CLP). O CLP, então, encaminha as informações para o WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, informando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme os PTLs ativos e os respectivos pedidos, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos no sorter devem conter uma etiqueta gerada pelo WCS, que inclui um QR Code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão direcionados automaticamente para o rejeito ou reprocessamento, de acordo com as regras de operação definidas.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** ea1e6fc106b69baf

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume, a rampa de saída correspondente. O agrupador principal (master) do mapa do Sorter é a transportadora. O segundo nível de agrupamento é o pedido.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.
Fica sob responsabilidade do contratado disponibilizar uma TV no sorter.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** b64195468424164b

SOFTWARE SPECIFICATION
WILD FORK PROJECT
We hereby present our proposal and general conditions of supply for the referenced MFC system.
We thank you in advance for the opportunity and remain at your disposal for any further clarifications that may be required.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 80b331f39d5c7e32

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
Ao longo de toda a extensão do sorter, haverá 8 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 9 rampas.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume ou pedido, a rampa de saída correspondente.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - GEMINI.docx`  
**Heading:** Chaves de Validação Para Reprocessamento - OK  
**Score:** — (semantico) | **ID:** f80c46647b5a408b

Situação: Havia uma dúvida sobre como o sistema deveria tratar o reprocessamento de ordens canceladas, especificamente sobre a necessidade de alterar as chaves de validação para evitar duplicidade.
Decisão Final: Ao cancelar uma Ordem de Transporte (OT), é mandatório que TODOS os números de identificação associados a ela sejam alterados (OT, HU, Barcode, etc.).
Impacto: Com esta definição, não há necessidade de desenvolvimento adicional ou impacto no sistema da Invent para gerenciar chaves de validação ou períodos de "quarentena". A responsabilidade de gerar novos identificadores é do SAP.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJETO PTLSP - ESPECIFICACAO DE SOFTWARE ADITIVOS - REV 1.4.docx`  
**Heading:** Múltiplas Confirmações de Picking Pollux  
**Score:** — (semantico) | **ID:** 7ea57b7636a95827

Problema: O sistema MFC (Invent) não está preparado para tratar mensagens de confirmação de picking duplicadas ou repetidas da Pollux, o que pode causar travamentos ou inconsistências de dados.
Solução Proposta: Mesmo que o SAP seja o responsável por controlar o envio das mensagens, foi identificado o risco de a Pollux enviar a mesma confirmação mais de uma vez. Para mitigar este risco, a Invent desenvolverá um enhancement no MFC. Esta nova lógica irá identificar e ignorar mensagens "repetidas", garantindo que cada confirmação de picking seja processada apenas uma vez.

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Contexto e Motivação  
**Score:** — (semantico) | **ID:** f345c4aab3ca91a2

Durante reunião realizada em 01/06/2026 entre Invent e Swift, o cliente solicitou uma tela para acompanhamento dos eventos de rampa cheia no Sorter. A necessidade surgiu da dificuldade em identificar, em tempo real e historicamente, quais rampas estão apresentando baixa eficiência operacional por acúmulo de volumes.
O evento de rampa cheia ocorre quando volumes continuam sendo desviados pelo Sorter para uma rampa cuja capacidade física já foi atingida — detectado pelo sensor instalado no topo da rampa. Quando isso ocorre, os volumes são redirecionados para recirculação ou rejeito, impactando diretamente o throughput da operação.
As principais causas identificadas pelo cliente são:
Produtividade abaixo do esperado dos operadores na rampa (paletização lenta).
Ausência temporária do operador sem substituição.
Outros impedimentos físicos na rampa.
A solução deve permitir que a supervisão identifique o problema em tempo real para agir imediatamente, e que analise o histórico de ocorrências para identificar padrões e tomar decisões estruturais.

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Tela 1 – Monitor em Tempo Real  
**Score:** — (semantico) | **ID:** 7e830d79fb9eddb0

A Tela 1 exibe o estado atual de todas as rampas de expedição cadastradas no Mapa do Sorter. O objetivo é dar visibilidade imediata à supervisão para que ações corretivas sejam tomadas durante a operação.
Atualização: a tela é atualizada a cada 1 minuto, seguindo o mesmo padrão do Dashboard por Rampa já existente na ES REV 11.1 (Cap. 7.2). Implementação realtime (push via WebSocket) é possível mediante desenvolvimento adicional de maior complexidade — não incluído neste escopo.
Período padrão de visualização: turno atual (configurável pelo supervisor). O supervisor pode alterar o intervalo de análise para as últimas 2h, último turno, hoje ou período personalizado sem sair da tela.
Representação visual da Tela 1 — Monitor em Tempo Real:

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Comportamento e Regras  
**Score:** — (semantico) | **ID:** 223ed19f4bc848a8

Somente rampas de expedição cadastradas no Mapa do Sorter são exibidas. Rampas de rejeito e reabastecimento são excluídas desta tela.
Um card entra em estado CHEIA quando o WCS recebe o sinal do PLC de rampa cheia (inserção de registro na LOG_RAMPA_CHEIA com timestamp_fim nulo).
Um card retorna ao estado NORMAL quando o WCS recebe o sinal de liberação do PLC (preenchimento do timestamp_fim no registro ativo da LOG_RAMPA_CHEIA).
Se dois ou mais operadores estiverem logados no PTL da rampa no momento de um evento de rampa cheia, todos os operadores são exibidos no card e a notificação de alerta é enviada para todos.
O tempo acumulado de rampa cheia é somado em tempo real durante o turno. Ao iniciar um novo turno, o contador é zerado.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Fase2 - Controle Lote e Validade.docx`  
**Heading:** Leitura de Lote e Validade  
**Score:** — (semantico) | **ID:** e54d8404ee993896

Este aditivo tem como objetivo incluir uma nova configuração no sistema WCS que permita flexibilizar a obrigatoriedade de leitura de lote e validade durante o processamento dos produtos.
Atualmente, o sistema realiza a leitura obrigatória dessas informações para todos os itens integrados pelo WMS. Entretanto, durante a operação do cliente, foram identificados produtos que não possuem controle de lote e validade.
Dessa forma, será implementada uma configuração que permitirá definir exceções por divisão (Div), possibilitando ao operador desativar a leitura de lote e validade para determinados tipos de produtos.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Contexto Atual  
**Score:** — (semantico) | **ID:** d8f21409b2b5b7d1

Atualmente, o sistema do sorter direciona as caixas para as rampas/PTL exclusivamente com base na leitura da etiqueta aplicada à caixa. O Invent já dispõe de uma solução de Inteligência Artificial capaz de identificar a caixa/produto pela imagem e realizar o direcionamento por essa via, cuja incorporação ao projeto CDSK estava prevista como um modo alternativo de operação, permitindo desvio por etiqueta ou por IA de forma exclusiva. A presente solicitação evolui esse cenário, acrescentando um terceiro modo de operação em que etiqueta e IA atuam simultaneamente para validar, por crosscheck, possíveis divergências entre a informação etiquetada e a caixa física identificada pela IA.
No fluxo de fechamento de paletes na PTL, o processo atual realiza a leitura do código da master e dispara imediatamente a integração de aloca pallet ao WMS, sem etapa de auditoria intermediária que permita validar se todos os volumes vinculados logicamente ao palete master estão fisicamente presentes.
As duas situações geram limitações de rastreabilidade que este aditivo se propõe a tratar.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Arquitetura da Solução  
**Score:** — (semantico) | **ID:** 03c265356c4272eb

A solução evolui o software do sorter para operar com três modos selecionáveis por parâmetro. No modo CrossCheck, a leitura da etiqueta e a identificação da caixa pela IA ocorrem simultaneamente, e ambas as informações são correlacionadas pelo WCS para classificar a caixa como Compatível ou Suspeita de Divergência. A decisão de desvio é então tomada conforme a parametrização vigente.
A correlação entre a leitura da câmera de TOPO e a leitura da IA é realizada pela relação entre o valor do campo NDIR transmitido no telegrama e a imagem capturada pela IA.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Câmera de Topo  
**Score:** — (semantico) | **ID:** e2cdb7cf85458a1d

A câmera de TOPO permanece dedicada exclusivamente à leitura da etiqueta comum, sem aplicação de IA sobre sua imagem. Sua função no modo CrossCheck é a leitura confiável do código aplicado na face superior da caixa.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Estrutura do Telegrama  
**Score:** — (semantico) | **ID:** 321c2cce652b5fdb

O telegrama existente entre PLC e WCS é mantido. Os ajustes desta evolução residem exclusivamente no conteúdo dos blocos de identificação, conforme as regras a seguir:
Os campos identificadores são separados por; (ponto-e-vírgula), conforme o padrão atual.
Dentro do campo de identificação, os blocos referentes à etiqueta e à IA são separados pelos caracteres * e # respectivamente.
O bloco da etiqueta de CrossCheck é precedido por MULTI* e contém o código com prefixo CCK.
O bloco da identificação por IA é precedido por #D.
Os demais campos do telegrama permanecem inalterados.
Exemplo de Telegrama:
F001;MFS1;7397;LREP;7397;2889;MULTI*CCK17898378180840.......,#D............;S;SRT01;NDIR;W.....;...

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Tela Tratativas de Pallets Rejeitados.docx`  
**Heading:** Benefícios da Funcionalidade  
**Score:** — (semantico) | **ID:** de42256e02fe9e21

Rastreabilidade total do envio de pallets ao WMS
Autonomia operacional para correção de erros sem intervenção técnica
Redução de retrabalho e dependência de suporte
Maior confiabilidade no processo de fechamento de pallets
Aderência ao fluxo atual sem impacto no Sorter, PTL ou Indução

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Dashboard de Operação do Sorter  
**Score:** — (semantico) | **ID:** 3bce94194903fac3

Este dashboard destina-se ao acompanhamento em tempo real do fluxo operacional do Sorter ao longo do turno. Deve ser exibido em monitor de ampla visualização no setor operacional e atualizado em ciclos compatíveis com o tempo real da automação.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Relatório de Fila de Entrada Sorter  
**Score:** — (semantico) | **ID:** 3301495ebfac233b

Objetivo: Apresentar a fila de paletes que alimentam o Sorter, identificando qual tarefa está em execução, quais serão as próximas e o que está bloqueando a liberação das seguintes.
Colunas: Carga | Onda | Doca | Palete | Rampa | Status | Etapa Atual | % Conclusão.
Status: Finalizado | Em Execução (já alimentando o Sorter) | Aguardando (impressão ou separação pendente) | Bloqueado (palete não aberto para produção).
Etapas: Alocação | Indução | Separação | Impressão | (N.º) Fila no PTL.
Estrutura do relatório:

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Dashboard Operacional – Monitoramento por Saída do Sorter  
**Score:** — (semantico) | **ID:** 8ea32172d9d1833b

O WCS disponibilizará um Dashboard Operacional por Saída do Sorter, com o objetivo de fornecer visibilidade em tempo real do status de recebimento dos volumes em cada rampa de expedição, segregado por matriz, permitindo o acompanhamento detalhado do andamento das operações de separação e despacho.
O dashboard será alimentado com base nos volumes já integrados via WMS, apresentando todas as matrizes previstas para cada rampa e seus respectivos status de processamento.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Tela Inicial – Seleção de Rampa  
**Score:** — (semantico) | **ID:** ec49a86d6e737b96

Ao acessar o dashboard, o operador será direcionado para uma tela inicial de seleção, onde deverá escolher a rampa de saída do sorter que deseja monitorar.
A tela inicial apresentará:
Lista de todas as rampas de saída disponíveis no sorter
Identificação visual de cada rampa (nome/número da rampa)
Ao selecionar uma rampa, o operador será direcionado para a tela de detalhamento com a visão por matriz.

---
**Origem:** [I23.1412] ADITIVO — `I23.1412 - Aditivo Projeto FDBR - Regra de Scanning de Conferência.docx`  
**Heading:** Nova Necessidade  
**Score:** — (semantico) | **ID:** f902e1c958a736b2

Deverá ser implementada uma nova regra adicional complementar de interpretação de leitura para atender etiquetas que utilizam código de barras no seguinte formato:
Estrutura da leitura:
AUTO99999911111
Onde:
Exemplo real:
AUTO03575800002
Sendo:
AUTO → identificador fixo;
035758 → lote do produto;
00002 → sequencial de impressão.
Regra Funcional
Durante o processo de conferência, o sistema deverá:
1. Identificação do padrão
Caso o padrão seja identificado, o sistema deverá realizar o parsing da string conforme abaixo:
2. Validação do pedido
Após extração do lote:
O sistema deverá utilizar o campo lote para localizar o produto correspondente;
Validar se o lote pertence ao item esperado na conferência;
Permitir continuidade da operação caso o lote esteja associado ao item do pedido;
Bloquear a conferência e apresentar crítica quando o lote não possuir correspondência com o item esperado.
Regras de Compatibilidade
A implementação deverá manter compatibilidade com o padrão atual já existente.
O sistema deverá suportar ambas as validações:
Padrão atual DataMatrix
Novo padrão Lepuge (AUTO + lote + sequencial)
A identificação deverá ocorrer automaticamente conforme o conteúdo lido.
OBS: Todas as travas e seguranças sistêmicas da leitura da etiqueta já utilizada devem ser mantidas para esse padrão adicional de leitura

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Aditivo Projeto FOX - Segundo Scanner.docx`  
**Heading:** Contexto e Problema Identificado  
**Score:** — (semantico) | **ID:** 4f87760266284877

A operação do CD DellaVolpe exige alta disponibilidade dos equipamentos de leitura (scanners) utilizados no processo de Put to Light nas rampas do sorter.
Atualmente, cada rampa possui um único scanner sem fio (wireless) que o operador utiliza tanto na rampa quanto no local de depósito das caixas. O operador retira o scanner da base recarregável (posicionada ao lado da rampa) diversas vezes durante o turno para realizar a leitura no ponto de alocação dos volumes.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Aditivo Projeto FOX - Segundo Scanner.docx`  
**Heading:** Solução Proposta  
**Score:** — (semantico) | **ID:** f0de7e581c8485c0

Para eliminar o problema de falta de bateria e otimizar o fluxo operacional, propõe-se a adição de um novo equipamento de leitura por rampa, conforme descrito abaixo.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Aditivo Projeto FOX - Segundo Scanner.docx`  
**Heading:** Reconexão do Scanner Padrão (Direto no PC)  
**Score:** — (semantico) | **ID:** 6f3aad597ebaf4f5

O scanner que a operação já utiliza atualmente será reconectado diretamente ao computador (PC) da rampa, deixando de utilizar o conversor. Com isso, o scanner padrão passa a funcionar como dispositivo de entrada HID direto no PC, liberando o conversor existente para uso com o novo scanner Prix.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Aditivo Projeto FOX - Segundo Scanner.docx`  
**Heading:** Inclusão do Scanner Prix (No Conversor Já Existente)  
**Score:** — (semantico) | **ID:** 7a13442a22b930ab

Será adicionado 1 (um) scanner Prix por rampa, conectado ao conversor já existente na operação (que antes era utilizado pelo scanner padrão). O Prix será instalado de forma fixa na rampa, funcionando como uma segunda opção de leitura para a operação.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Aditivo Projeto FOX - Segundo Scanner.docx`  
**Heading:** Características  
**Score:** — (semantico) | **ID:** b57e8d30c00a5a8f

Tipo: Scanner Prix fixo.
Conexão: Via conversor já existente na operação, conectado ao PC da rampa.
Posição: Instalado de forma fixa na rampa.
Integração: O conversor transforma o sinal do scanner Prix para entrada no PC. A leitura é enviada ao sistema da mesma forma que o scanner padrão, sem alteração na lógica de integração.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Aditivo Projeto FOX - Segundo Scanner.docx`  
**Heading:** Fluxo Operacional Atualizado  
**Score:** — (semantico) | **ID:** 46dce24950553bf7

Com a inclusão do novo scanner, o fluxo operacional de Put to Light na rampa passa a funcionar da seguinte forma:
O volume chega à rampa via sorter.
O operador realiza a leitura do código de barras utilizando:
Scanner Padrão: o operador bipa a caixa com o scanner atual (Direto no PC).
Scanner Prix: o operador posiciona a caixa no campo de leitura do scanner Prix fixo na rampa.
O sistema recebe a leitura e indica a posição PTL de destino.
O operador aloca o volume na posição indicada.
Confirmação e continuação do fluxo conforme processo atual.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 4f1c6c26d12f7500

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
Ao longo de toda a extensão do sorter, haverá 8 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 9 rampas.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume ou pedido, a rampa de saída correspondente.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX 2025.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** f46e86334e631a5c

O Sorter possui 3 (três) rampas com 8 (oito) posições PTL cada rampa, 1 (uma) rampa para rejeito e 1 (uma) rampa de stage que fará a recirculação do volume. As rampas que possuem PTL terão um scanner de responsabilidade da DellaVolpe, e todas as rampas possuem um sinaleiro.
Os volumes transportados no sistema são caixas de papelão ou caixas plásticas, não havendo produtos fora da caixa. O sistema WCS recebe do WMS as informações dos volumes que passarão pelo portal de leitura do sorter, não sendo necessário cadastro de produtos.
Produtos que não podem passar na esteira são processados fora do Sorter, sendo bipados em uma tela do sistema WCS e direcionados para o estoque. Os volumes são compostos por produtos variados destinados a transportadoras.
O processo no Sorter inicia com a leitura da caixa no portal de leitura. O sistema captura a etiqueta da caixa, que é enviada para o Controlador Lógico Programável (CLP). O CLP, então, encaminha as informações para o WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, informando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme os PTLs ativos e os respectivos pedidos, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos no sorter devem conter uma etiqueta válida, que inclui um Código de Barras.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão direcionados automaticamente para o rejeito ou recirculação, de acordo com as regras de operação definidas.

---
**Origem:** [IA] ADITIVO — `Descritivo Funcional - Velox - IA.docx`  
**Heading:** Objetivo do Sistema  
**Score:** — (semantico) | **ID:** 0ddae37c80ce39fb

O sistema de IA tem como objetivo aumentar a taxa de leitura correta de códigos de barras em caixas que apresentam mais de um código, reduzindo ocorrências de No Read no sorter.
A solução é baseada em visão computacional que identifica visualmente o código correto a ser lido a partir de uma seleção lógica (checkbox) conforme exemplo abaixo:
Figura 1 – Foto da câmera/Leitura da IA

---
**Origem:** [IA] ADITIVO — `Descritivo Funcional - Velox - IA.docx`  
**Heading:** Localização e Captura de Imagens  
**Score:** — (semantico) | **ID:** f48fb7a5ffb56b19

O sistema opera em um portal de leitura posicionado antes do sorter, composto por:
Duas câmeras laterais (esquerda e direita)
Uma câmera superior (topo), atualmente utilizada apenas para leitura simples de códigos de barras
As câmeras laterais enviam imagens para o serviço de IA por meio de FTP.
No momento da instalação, o técnico responsável define, em conjunto com a Invent, quais frames de cada câmera serão enviados, buscando o melhor enquadramento possível.

---
**Origem:** [IA] ADITIVO — `Descritivo Funcional - Velox - IA.docx`  
**Heading:** Lógica de Processamento  
**Score:** — (semantico) | **ID:** 3b1020c2565b96cc

Caixa com apenas um código de barras
→ A câmera realiza a leitura diretamente, funcionando como um scanner convencional.
Caixa com mais de um código de barras
→ As imagens são enviadas para o serviço de IA, que:
Identifica o código correto
Recorta a região de interesse
Encaminha a imagem para o serviço de leitura do código de barras

---
**Origem:** [IA] ADITIVO — `Descritivo Funcional - Velox - IA.docx`  
**Heading:** Histórico de leitura IA  
**Score:** — (semantico) | **ID:** 343b067a18bb9b58

Figura 06 – Tela de Histórico de leitura IA
Tela de Histórico de Leitura da IA
A tela de histórico de leitura da IA permite consultar todas as leituras realizadas dentro de um período selecionado por filtro de data. São exibidas informações detalhadas sobre cada leitura, incluindo horário, tempo de processamento, tempo de identificação, tempo de leitura, resposta do sistema, motivo de não leitura, nível de confiança, contador do PLC, além de imagens marcadas e não marcadas pela IA.
Campos apresentados:
Identificador: Código único que identifica cada caixa no sistema.
Contador: Campo específico para leituras realizadas via IA. Esse valor também pode aparecer em uma nova coluna nas leituras do PLC, dentro de um intervalo de 0000 a 9999. O contador pode se repetir quando todas as combinações do intervalo forem utilizadas.
Código Lido: Exibe o código identificado pela IA ou uma das mensagens de erro Sem_Detecção, NoRead, Corte ou Código_Inválido (Quando houver mais de 14 caracteres).
Lado Lido: Indica qual lado da caixa foi lido pela IA.
Imagem: Exibe a foto capturada no momento da leitura.
Read: Informa se a leitura foi realizada com sucesso ou não.
Modelo: Indica o modelo de IA configurado na tela de Dashboard de IA que foi utilizado na detecção da imagem.
Visualização por Câmera
Ao clicar no ícone de “+” localizado na primeira coluna à esquerda, o operador pode expandir o registro e visualizar informações detalhadas de ambos os lados da caixa (esquerda e direita).

---
**Origem:** [I25.9044] ADITIVO — `I25.9044 - Aditivo Projeto Optimus Prime - Adição na tela de Relatório.docx`  
**Heading:** Contexto do Problema  
**Score:** — (semantico) | **ID:** 65a7d082d42cdc50

Atualmente, o relatório de produção do sorter considera apenas as informações provenientes das leituras padrão do fluxo operacional, não contemplando a captura automatizada de quantidades via RFID.
Com isso:
A quantidade de peças pode depender de apontamentos indiretos ou integrações limitadas;
Existe risco de divergência entre o físico e o sistêmico;
Não há rastreabilidade detalhada por leitura RFID no relatório;
O processo perde eficiência operacional por não utilizar uma tecnologia já disponível no fluxo.
Diante disso, surge a necessidade de incorporar as leituras RFID diretamente no relatório, garantindo maior confiabilidade dos dados apresentados.

---
**Origem:** [I25.9044] ADITIVO — `I25.9044 - Aditivo Projeto Optimus Prime - Adição na tela de Relatório.docx`  
**Heading:** Solução Proposta  
**Score:** — (semantico) | **ID:** 7e1da4f4d0f3b7ee

Será realizada a adição na tela de Relatório de Produção do Sorter para considerar as leituras RFID como fonte de informação de quantidade de peças.
A solução contempla:
Integração das leituras RFID ao contexto do sorter;
Associação das leituras RFID às respectivas ordens/missões processadas;
Consolidação das quantidades capturadas via RFID no relatório;
Exibição da quantidade de peças oriunda do RFID como um novo campo no relatório ou compondo os totais existentes (conforme definição com o cliente);
A implementação deverá respeitar o modelo atual de dados 

Tela Relatório de Produção do Sorter:

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - RAMPA FULLCASE REV 1.docx`  
**Heading:** Alteração na Regra do Sorter  
**Score:** — (semantico) | **ID:** 4fe983f8a0a7ce4e

Cenário Atual: Na especificação original, o Sorter possui 3 saídas para rotas e 1 para rejeito, e o desvio é baseado exclusivamente no Mapa do Sorter (De/Para de Rotas vs. Rampa) fornecido pelo cliente.
Nova Regra: O WCS passará a considerar o Tipo de Volume e/ou SKU como critério primário de decisão de rampa, sobrepondo-se ou complementando a lógica de rotas.

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - RAMPA FULLCASE REV 1.docx`  
**Heading:** Configuração do Fluxo Físico  
**Score:** — (semantico) | **ID:** 64fc40d469669f77

A lógica de software considera a seguinte disposição física dos equipamentos na linha:
Rampa 01 (Primeira Saída): Localizada antes da arqueadora. Dedicada exclusivamente ao desvio de segurança de volumes NÃO ARQUEÁVEIS (fullcase).
Arqueadora: Localizada na esteira principal logo após a Rampa 01.
Demais Rampas (02 e 03): Localizadas após a arqueadora. Dedicadas a volumes ARQUEÁVEIS (Caixas Plásticas).
Nota: Devido a esta configuração, todos os volumes que não forem desviados na Rampa 01 passarão obrigatoriamente pela arqueadora.

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - TRANSBORDO LOTEVALIDADE.docx`  
**Heading:** Alteração na Regra do Sorter  
**Score:** — (semantico) | **ID:** f3667df26d6a3d58

Cenário Atual: Na especificação original, o Sorter possui 3 saídas para rotas e 1 para rejeito, e o desvio é baseado exclusivamente no Mapa do Sorter (De/Para de Rotas vs. Rampa) fornecido pelo cliente.
Nova Regra: O WCS passará a considerar o Tipo de Volume e/ou SKU como critério primário de decisão de rampa, sobrepondo-se ou complementando a lógica de rotas.

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - TRANSBORDO LOTEVALIDADE.docx`  
**Heading:** Configuração do Fluxo Físico  
**Score:** — (semantico) | **ID:** 210b2fac42a24ea1

A lógica de software considera a seguinte disposição física dos equipamentos na linha:
Rampa 01 (Primeira Saída): Localizada antes da arqueadora. Dedicada exclusivamente ao desvio de segurança de volumes NÃO ARQUEÁVEIS (fullcase).
Arqueadora: Localizada na esteira principal logo após a Rampa 01.
Demais Rampas (02 e 03): Localizadas após a arqueadora. Dedicadas a volumes ARQUEÁVEIS (Caixas Plásticas).
Nota: Devido a esta configuração, todos os volumes que não forem desviados na Rampa 01 passarão obrigatoriamente pela arqueadora.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Dashboard Conferência de Pallets - Rev.docx`  
**Heading:** Visão Geral da Tela  
**Score:** — (semantico) | **ID:** a79bf30604b93dce

A tela Conferência de Pallets é acessível via navegador (recomendado tablet) e exibe em tempo real o status de todas as 40 bicas ativas do Sorter. Cada bica é representada por um card individual. A tela é dividida em duas seções: Bicas em Evidência (topo, com as bicas que requerem ação imediata) e Todas as Bicas (grid completo com visão geral da operação).
O total de volumes monitorados por bica é apurado com base nos volumes que receberam ACKN de desvio do Sorter para aquela bica. A cubagem é manual e controlada pelo próprio Sorter.
Obs: O total de volumes por bica é apurado a partir do ACKN de desvio enviado pelo PLC do Sorter ao WCS — não pela integração com o WMS.
Ex Tela:

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Dashboard Conferência de Pallets - Rev.docx`  
**Heading:** Mecanismo de Timer por ACKN  
**Score:** — (semantico) | **ID:** 18b3bd8c184371ab

O WCS já recebe um sinal ACKN do Sorter no momento em que um volume é desviado para uma bica específica. A partir desse ACKN, o sistema inicia automaticamente um timer individual para aquele volume.
O número de conferentes necessários para cobrir adequadamente a operação deve ser calibrado durante a fase de implantação, com base no volume de alertas gerados e no tempo médio de resolução de cada tratativa. O parâmetro de timer é um dos instrumentos de controle — timers mais curtos aumentam a sensibilidade do sistema e podem exigir mais conferentes; timers mais longos reduzem o volume de alertas mas aumentam o risco de pallets fechados com pendências.
Obs: O timer não é zerado por Rampa Cheia. Se o volume for redirecionado ao rejeito após rampa cheia, ele deve receber tratativa na estação de rejeito conforme o fluxo padrão do Sorter (descrito na ES principal do projeto).

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Dashboard Conferência de Pallets - Rev.docx`  
**Heading:** Fluxo Operacional  
**Score:** — (semantico) | **ID:** dd1581f451f350a3

Fluxo Normal (sem anomalias)
O Sorter desvia um volume para a bica. WCS recebe o ACKN e inicia o timer.
O operador da bica bipa o volume e o aloca no pallet. Timer é encerrado. Volume some da lista ativa.
Conferente acompanha a tela sem necessidade de intervenção.
Operador fecha o pallet normalmente.
Fluxo com Volume Vermelho
Timer estoura. Volume passa para vermelho na tela. Bica é promovida para Bicas em Evidência.
Conferente visualiza o alerta e acessa o painel de detalhe da bica.
Conferente vai até a bica e avalia a situação física.
Conferente aplica a tratativa correspondente (T1 a T6) e registra na tela.
Sistema registra a ocorrência em log e encerra o alerta.
Fluxo com Volume Laranja (Bica Errada)
Volume é bipado em bica diferente da esperada. Timer zera. Volume passa para laranja na tela. Bica errada e bica correta são destacadas em Bicas em Evidência.
Conferente recebe alerta imediato e vai até a bica errada antes que o volume seja alocado no pallet incorreto.
Conferente resgata o volume e o bipa na bica correta (tratativa T4).
Sistema registra a ocorrência com bica errada e operador logado.
Fluxo com Volume Vermelho no PTL
Timer estoura. Volume passa para vermelho na tela. Bica é promovida para Bicas em Evidência.
Conferente visualiza o alerta e acessa o painel de detalhe da bica.
Conferente vai até a bica e avalia a situação física.
Conferente aplica a tratativa correspondente (T1 a T6) e registra na tela. A tela deve mostrar ao conferente qual dos 2 pallets que tem em cada PTL o item foi alocado.
Sistema registra a ocorrência em log e encerra o alerta.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Dashboard Conferência de Pallets - Rev.docx`  
**Heading:** Dependências e Pré-condições  
**Score:** — (semantico) | **ID:** 822159bbb69427ec

Sorter configurado e operacional com Mapa do Sorter definido — 40 bicas vinculadas a rotas e destinos, cada uma com operador dedicado e scanner para bipagem individual de volumes.
WCS configurado para capturar e processar o sinal ACKN de desvio do Sorter por volume e por bica.
Perfis de acesso configurados no WCS: Supervisor (acesso à tela e autorização de T5/T6) e Operador Conferente (acesso habilitado por Supervisor no início da sessão).
Portal de leitura do Sorter operacional — necessário para rastreio do último local do volume.
Parâmetro de timer configurado antes da entrada em operação (recomendação: 10 minutos — valor a definir com o cliente).
Parâmetro de critério de promoção para Bicas em Evidência configurado antes da entrada em operação.
Dispositivo para o Operador Conferente — recomendação: tablet fornecido pelo cliente ou PDV fornecido pela Invent, com scanner de dedo acoplado para permitir mobilidade durante as tratativas nas bicas. A definição final do hardware será alinhada com o cliente.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Dashboard Conferência de Pallets - Rev.docx`  
**Heading:** Ganhos Operacionais  
**Score:** — (semantico) | **ID:** f54f5325d09dc850

A funcionalidade Conferência de Pallets foi desenhada para endereçar diretamente as perdas operacionais identificadas na operação atual do Sorter. Os ganhos esperados são:
Detecção proativa de anomalias
O sistema identifica volumes não bipados antes do fechamento do pallet — não depois. O conferente age enquanto o volume ainda pode estar na bica ou no pallet aberto, aumentando drasticamente a chance de resolução sem impacto no embarque.
Rastreabilidade completa do volume divergente
Para cada volume vermelho, o sistema informa o último local registrado (ACKN de desvio, bica errada, rejeito). O conferente vai direto ao local correto em vez de procurar manualmente pelo CD.
Prevenção de pallets com volumes mal alocados
O alerta de pallet fechado com pendência impede que o pallet siga para embarque com volumes alocados sem bipagem. O conferente consegue rastrear o RG exato para investigação.
Identificação imediata de bipagem em bica errada
O alerta laranja é acionado no momento da bipagem incorreta — antes do volume ser alocado no pallet errado. O conferente intervém imediatamente e evita a expedição de volumes para a loja errada.
Um conferente monitora todas as 40 bicas
Com a tela centralizada e as Bicas em Evidência, um único conferente acompanha toda a operação simultaneamente e intervém apenas onde há problema real — sem auditar bicas que estão funcionando corretamente.
Sem necessidade de terminais físicos espalhados pelo Sorter
A conferência é centralizada em uma única tela acessível por navegador ou tablet. Não é necessário posicionar desktops, tablets ou PDVs ao longo das rampas para que os operadores confirmem individualmente cada volume.

---
**Origem:** [I17.112] 2021 — `I17.112 - ESPECIFICACAO DE SOFTWARE - PROJETO  DIAMANTE- Adicional PTL Larrus rev3.docx`  
**Heading:** Operação Atual  
**Score:** — (semantico) | **ID:** e1f124f7111e87b8

Atualmente, não se usa as funcionalidades desenvolvidas pelo time de desenvolvimento Invent (MFC) para tratativas de volumes da filial Larrus.

---
**Origem:** [I17.112] 2021 — `I17.112 - ESPECIFICACAO DE SOFTWARE - PROJETO  DIAMANTE- Adicional PTL Larrus rev3.docx`  
**Heading:** Lote  
**Score:** — (semantico) | **ID:** b60e7c6c36146151

A quantidade de caracteres da informação de lote não deve ultrapassar o limite de até 8 (oito) caracteres, o sistema MFC deve estar preparado para receber essa informação variável de 6 (seis) a 8 (oito) caracteres e reconhecer caracteres especiais como (barras, hifens e pontos).
O sistema MFC deve estar preparado para ser configurado 1 (uma) região por posição PTL (podendo estar em qualquer rampa), dessa maneira o MFC irá avaliar as informações contidas na integração com as informações adicionadas na tela de onda (região) no momento da geração de volumes, de acordo com essas informações ocorreram os desvios para as rampas dos respectivos PTLs cadastrados na onda para as regiões informadas, ou seja na tela de onda na aba Larrus, o operador irá selecionar a por posição PTL qual a região que será atendida naquela onda para aquele PTL, após a geração de volumes o MFC irá seguir o processo como ocorre atualmente, enviando os pedidos para serem iniciados nos seus respectivos Order Start e ira reservar a posição PTL indicando no display (led) que existe uma posição aguardando volumes e essa posição precisa ser aberta atrelando um pallet a ela.

---
**Origem:** [I17.112] 2021 — `I17.112 - ESPECIFICACAO DE SOFTWARE - PROJETO  DIAMANTE- Adicional PTL Larrus rev3.docx`  
**Heading:** Novo telegrama  
**Score:** — (semantico) | **ID:** af6c1b081f00ca7b

Para a atender as necessidades e particularidades do adicional Larrus a string de 90 (noventa) caracteres será alterada para comportar os caracteres segundo a seguinte disposição:
10 caracteres para informar o código da etiqueta de separação impressa pelo MFC.
15 caracteres para informar o código EAN
6 a 8 caracteres para informar o lote
Legibilidade e qualidade de impressão são de responsabilidade da Hinode.
Com essa alteração será possível operar o processo de validação do sorter (etiqueta de separação mais o EAN) e realizar a leitura do lote.
Uma vez que a quantidade máxima de caracteres para cada informação não atingir a quantidade máxima de caractere o PLC irá completar com ponto (.) a quantidade de caractere faltante, o MFC por sua vez irá desconsiderar os pontos eliminando-os e ficando somente com a informação realmente lida pelos portais de leitura, sendo assim em todos os 3 (três) campos de informações lidas.
Caso a informação lida for maior que o limite de caracteres por campo o PLC receberá a mensagem NOREAD e ela será informado ao MFC.
Segue abaixo o novo telegrama:
NDIR:
F001;MFS1;3367;LREP;3367;244003NAO0,123456789101115,12345678;S;SORTER01;NDIR;W99999;....
DLST:
F001;MFS1;0003;DLST;244003NAO0,123456789101115,12345678;0000;3367;SORTER01;W99999;.....
ACKN:
F001;MFS1;3368;LREP;3367;244003NAO0,123456789101115,12345678;S;SORTER01;ACKN;W99999;0000
O MFC não será responsável por informações de lotes errôneos quando o LOTE tiver tamanho fora das especificações descritas nesse documento.
Exemplo de etiqueta Larrus:

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Operação futura  
**Score:** — (semantico) | **ID:** 111d37668f96f23a

O MFC deve permitir a alocação da mesma transportadora para uma rampa ou PTL ao mesmo tempo, podendo utilizar uma transportadora para tratar franquia e e-commerce na mesma operação.
Para isso o MFC irá validar o valor do campo "order_ERPWMS" , se o campo vier como a informação “E” trata-se de um pedido e-commerce e só pode ser tratado na tela de Onda, na aba e-commerce, se não houver um PTL previamente configurado com a transportadora que irá atender pedido e-commerce e salvo, o MFC não permitirá a geração de volumes por falta de rota para destinar a caixa na rampa e PTL corretos no sorter.
Uma vez que uma transportadora é atrelada a um PTL ela não pode ser atrelada a outro PTL, sendo somente um PTL por transportadora. A operação pode escolher em quais PTLs as transportadoras irão ser vinculada.
Não existira abertura ou fechamento de pallet para nenhum pedido E-commerce, assim também como no display de 6 (seis) dígitos do PTL não irá informar o número de pedido e sim irá informar de forma fixa a informação “Econ”.
O MFC irá contabilizar a quantidade de caixas destinadas aquela transportadora e irá a presentar a quantidade de caixas faltantes, assim todas as vezes que uma caixa for alocada no PTL o número diminui, como já ocorre nos casos de franquias onde o PTL informa de maneira decrescente a quantidade de caixas.
Não existirá mais os tipos de transportadora E-Commerce ou Franquia, serão os seguintes tipos, Normal, para todas as transportadoras usada para comercio nacional e que entraram na regra mencionada acima onde temo uma única transportadora podendo operar ao memo tempo como E-Commerce ou franquia, e termos o tipo exportação, onde serão selecionadas transportadoras como a Larrus que tem uma tratava particular e não se encaixa a essas regras mencionadas acima. (Tratativas da Larrus estão presentes no documento “Projeto Diamante - Adicional PTL Larrus”).
Uma vez que a transportadora é selecionada somente na tela de rampa ela não irá receber pedidos de E-Commerce, somente os pedidos de franquia, assim também para caso em que a transportadora está vinculada somente ao PTL, os pedidos de franquias não irão ser processados na automação por falta de rota de destino.

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** d34bab25eaecd02a

As Integrações não sofreram integrações significativas, somente a adição do campo “order_pallet” onde o MFC irá informar o número de pallet que a caixa foi alocada, isso não se aplica para E-Commerce.

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Layout de configuração  
**Score:** — (semantico) | **ID:** f581a5ca61c6aef4

Para franquia o MFC deve manter o layout atual.
Segue exemplo abaixa:
Para E-Comm, o MFC deve disponibilizar uma nova aba na tela de onda, para visualizar por PTLs, podendo selecionar a transportadora que será atrelada aquele único PTL. A configuração será por onda como é na feita a configuração de rampa para franquias.
Segue exemplo abaixo:

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** 504799f503da1f0e

Para franquia, manter a configuração existente. Para E-Comm, sistema MFC deve disponibilizar uma nova tela onde o cliente possa realizar o cadastro da transportadora por PTL.

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Cenário Atual  
**Score:** — (semantico) | **ID:** d502485bf1b2d4e7

O MFC está integrado com o I-corp e recebe pedidos de separação dos emitentes Máxima e Objetivo e decide o que deve ser separado na linha do full case e o que deve ser separado na linha de unidade.
Essa separação retorna para o Icorp.

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Detalhes adicionais  
**Score:** — (semantico) | **ID:** 56c3e8284c1e5251

Modelo Dimensionador que irá realizar a nova leitura de lote DX8210.
Exemplos de etiquetas a serem lidas pelo equipamento, EAN e Lote.
Em vermelho o que já é lido atualmente, e em azul o que precisa ser lido no portal, PDV e/ou tela de rejeito, com essa nova implantação.
Formato da string a ser enviada após a inclusão do terceiro código (lote)
Ex: <STX>código 1;código2;lote<ETX>
Envio atual = códigovolume;códigoEAN
Novo Envio = códigovolume;códigoEAN;códigolote

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Relatório – Caixa (Ref.3)  
**Score:** — (semantico) | **ID:** 4d1830080f5ea4c0

MFC
Desenvolvimento de relatório visível no MFC, onde o cliente consiga visualizar a quantidade de caixa finalizadas. Segue layout de tela para relatório de consumo de caixas, no mesmo padrão de filtro inicial ao entrar na tela, selecionando período com data e hora.
Sugestão de tela:

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE REV.1 - ZENATUR.docx`  
**Heading:** Ajuste na geração de volumes Doca  
**Score:** — (semantico) | **ID:** 0de8d67a8dfc9761

Atualmente o parâmetro do MFC que realiza a definição se o item passa pela esteira de automação ou deve ir diretamente para a doca, está tomando essa decisão baseado ao volume unitário desse material.
MFC deve realizar essa validação de tarefas doca, considerando a dimensão m³ do volume/item unitário multiplicado pelo total de volumes do mesmo produto por pedido. E baseado nesse cálculo, tomar a decisão final se deve ser passado pelo sorter ou é direcionado diretamente para a doca.
Desenvolver um parâmetro de quantidade máxima de volumes por SKU em um pedido, quando for ultrapassado, direcionar as tarefas desse item para Doca.
Somente os SKUs que ultrapassaram os parâmetros de quantidade e metragem cúbica, deve ser direcionado para a doca.

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE REV.1 - ZENATUR.docx`  
**Heading:** Automatização na geração de onda  
**Score:** — (semantico) | **ID:** 7bdd1c41e0287f83

Sistema Zenatur deverá enviar os pedidos agrupados por ondas, onde o sistema MFC deverá processar a onda e identificar os pedidos pertencentes aquela onda, e processar os pedidos por onda e não mais por pedido como atualmente.
MFC deve gerar ondas automaticamente, com base no número da onda enviado pelo sistema Zenatur, sem a necessidade de interação dos usuários.
MFC deverá estar preparado para receber um novo campo com o número da onda e número de linhas, dois campos adicionais que virão na integração de pedidos (order).
Na tela de onda, será possivel identificar as linhas necessárias para início da geração de volumes.
Botão de geração de volumes, deve ficar inativo até que chegue todas as linhas da onda.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** 20 DE OUTUBRO DE 2021  
**Score:** — (semantico) | **ID:** 25364cf0eab5fe0e

SÃO BERNARDO DO CAMPO, SP - BRASIL
Sumário
2
d.	24
Fluxo de Processos	25
SORTER 1° passagem	25
SORTER 2° passagem	26
PTL	27
3

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Sorter – 1° Passagem.  
**Score:** — (semantico) | **ID:** 7e9dcfdda0569fb9

O sistema MFC receberá os pedidos, armazenando-os no banco de dados para posterior consulta.
A automação realizará a leitura do código de barras com a informação do pedido, associando inicialmente a rota nas 8 rampas de saída desejada, desviando por rota nas 32 posições do PTL, sendo 4 pallets por rampa. Os leds dos respectivos PTL estarão localizados ao lado de cada saída.  E  também  terá 2 monitores de cada lado do sorter, sendo 1 monitor a cada 2 saídas.
No início da operação do sorter, o operador deverá imprimir uma etiqueta de pallet que será impressa no rejeito que, por sua vez, deverá ser enviada pelo MFC sequencialmente.
O operador deverá fazer a leitura da etiqueta (UMA) e a leitura do código do endereço PTL com um scanner manual ligado ao computador da rampa, desta maneira atribuindo o pallet ao endereço e fazendo a abertura do (UMA).
Os leds do PTL ficarão localizados ao lado de cada saída do sorter, quando o operador ler o volume com scanner manual o led vinculado ao pallet irá acender, indicando ao operador em qual pallet o mesmo deve alocar aquele volume lido. Além dos leds, existirá também 1 monitor para cada 2 saídas do sorter, nesse monitor exibirá as 2 rampas vinculadas (Exemplo rampa 1 e rampa 3) e os pallets vinculados a essas rampas, e ao ser lido o volume, a  tela deverá mostrar também as informações de onde o volume deve ser alocado, acendendo o número correspondente ao pallet da rampa.
Serão 4 endereços por rampa cada um com 1 led correspondente ao pallet e endereço.
Após lido o código da caixa, e informado tanto no led quanto na tela o Pallet que deve ser alocado, o operador deverá colocar a caixa no pallet e apertar o led, assim confirmando que a caixa foi alocada.
Após isto, o led deverá apagar e a posição do monitor que estava acesa deverá apagar também, assim liberando para ler o código da próxima caixa.
Na tela abaixo do número da rampa, deverá aparecer a quantidade de caixas já alocadas em cada pallet.
Para o fechamento da UMA o operador deverá fazer a leitura do endereço do PTL e da UMA. O led deverá piscar em verde, informando ao usuário que a UMA foi fechada. Após fechamento da UMA a quantidade de volumes na tela, deverá ser zerada.
A definição do fechamento do pallet deverá ser feita pelo operador conforme a altura.
Como mostra a imagem abaixo:
O sistema MFC deve gerar etiqueta do pallet com número sequencial Teremos 2 (dois) mapas cadastrados no sistema MFC:
Mapa do sorter (com informações da transportadora)
Mapa do PTL (com as informações do código agrupador)
Em ambos os mapas, as informacoes serao disponibilizadas no software do MFC que controla a automaçao, neste caso o operador do sistema possui o acesso às telas de gerenciamento dos repectivos mapas.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** 3.1 Sorter – 2° passagem.  
**Score:** — (semantico) | **ID:** ba316833fb7245dc

Com a etiqueta gerada pelo MFC, o operador deverá abrir a posição pallet no PTL para iniciar a operação através do número do transporte.
Após a abertura da posição pallet, o operador insere as caixas no sorter para serem desviadas por número de transporte, e assim serem destinadas a doca correta.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** SAP recebe do WCS informações do pallet que agrega informações de pallet criado no sorter  
**Score:** — (semantico) | **ID:** 1ce54e5858638e4b

Nessa interface, WCS devolve as informações para o SAP afim de gerar relatórios posteriores.
WCS  SAP

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Condição para o SKU em mais de um endereço  
**Score:** — (semantico) | **ID:** 0a675e82d92f4993

Quando ocorrer a condição de um SKU para mais de um endereço de picking (sendo na mesma estação ou em estações distintas). O comportamento do MFC seguirá baseado na seguinte regra:
Caixa de Reabastecimento:
Nesta condição, o MFC enviará a caixa de reabastecimento para todos os endereços cadastrados. Por exemplo: O SKU 617588 está cadastrado em duas estações de picking. Logo o MFC enviará a caixa para a primeira estação, que por sua vez acenderá apenas a localização do produto (nunca a quantidade de reabastecimento).
Caso em uma mesma estação contenha 2 (dois) endereços para o mesmo SKU, o MFC acenderá as duas posições sinalizando o correto local do reabastecimento
Caixa de picking:
Quando um produto possuir mais de um endereço para picking, o MFC aguarda a finalização completa do picking daquele SKU antes de acender todas as posições na cor VERDE (indicando que o picking foi concluído). Por exemplo: Para o SKU 617588 temos 10 peças à serem separadas, porém o SKU está cadastrado em 2 endereços distintos. O MFC acende a primeira posição com as 10 unidades e em caso do operador realizar um SHORTPICKING, procede então acendendo a próxima posição com o saldo remanescente afim de completar 100% do pedido. Esse processo se repete até atingir todos os endereços cadastrados do SKU em questão.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Exemplos de etiquetas  
**Score:** — (semantico) | **ID:** 33aafebba983b1fe

a.
b.
c.
d.
Fluxo de Processos
SORTER 1° passagem
SORTER 2° passagem
PTL

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.10 Sorter  
**Score:** — (nome-topico) | **ID:** 305c92a23998417a

O Sorter realizará a classificação dos volumes através de um mapa de rotas, que será parametrizado pelo Operador do equipamento, com acesso de usuário master no WCS.
O filtro para abastecimento deverá ser criado com as informações de box e filial. O filtro para os pedidos de online, deverá ser criado com base nos dados de transporte (nome ou código da transportadora, contrato, etc.).
A finalização do processo ocorrerá após o desvio do volume no sorter, havendo necessidade de retorno de integração para o sistema TMS apenas (sistema Manhattan não receberá nenhuma informação), deverá ser feita a utilização do processo de Put-to-Ligth nas rampas de lojas ou Transportadoras, seguindo o mapa que a via subirá.
A etiqueta que devemos utilizar será do código de pedido e buscar qual a transportadora referente. Hoje estamos utilizando o código de CEP.
Invent deverá ler o código do rastreio (ex: OQ361165854BR), Se não encontrar no campo undest, buscar o código marcado em vermelho que é o pedido.
Ler código: OQ361165854BR

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.10 Sorter  
**Score:** — (nome-topico) | **ID:** 6a19b04df929531c

O Sorter realizará a classificação dos volumes através de um mapa de rotas, que será parametrizado pelo Operador do equipamento, com acesso de usuário master no WCS.
O filtro para abastecimento deverá ser criado com as informações de box e filial. O filtro para os pedidos de online, deverá ser criado com base nos dados de transporte (nome ou código da transportadora, contrato, etc.).
A finalização do processo ocorrerá após o desvio do volume no sorter, havendo necessidade de retorno de integração para o sistema TMS apenas (sistema Manhattan não receberá nenhuma informação), deverá ser feita a utilização do processo de Put-to-Ligth nas rampas de lojas ou Transportadoras, seguindo o mapa que a via subirá.
A etiqueta que devemos utilizar será do código de rastreio e buscar qual a transportadora referente. Hoje estamos utilizando o código de CEP.
Invent deverá ler o código do rastreio (ex: OQ361165854BR), Se não encontrar no campo undest, buscar o código marcado em vermelho que é o pedido.
Ler código: OQ361165854BR.

---
**Origem:** [I20.1406] 2021 — `I20.1406  - ESPECIFICACAO SOFTWARE - Rev1.docx`  
**Heading:** Final do processo  
**Score:** — (semantico) | **ID:** 2336c299d22dbebd

POST *endpoint a definir*
REQUEST:
WMS (cliente) → MFC (Invent)

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO BANCO DE DADOS - Rev1.docx`  
**Heading:** PROCEDURE: SP_INTEG_ONDA  
**Score:** — (semantico) | **ID:** aca205c38bad8299

Objetivo:
Integrar as novas ondas para serem tratadas pelo SORTER.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** c0f6a3661c255e05

Conforme descrito no item 3.1.2 os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura do barcode referente à abertura de pallet e consecutivamente o código de barras identificador do pallet.
Além disso, conforme mencionado no item 3.1.3, os sinaleiros também serão utilizados neste momento, já que quando a abertura do pallet for efetuada o sinaleiro da saída em questão acenderá em verde.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Corte de material  
**Score:** — (semantico) | **ID:** c341f833e6bcf7f9

Acesso direto ao banco de dados Invent, através de PROCEDURE
REQUEST:
WMS (cliente) → MFC (Invent)

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Final do processo  
**Score:** — (semantico) | **ID:** c6b3f066a2a73f97

Acesso direto ao banco de dados Invent, através de SELECT ou PROCEDURE
REQUEST:
WMS (cliente) → MFC (Invent)
Observações:
A integração de dados ocorrerá através de acesso direto ao banco de dados da Invent, ou seja, para registrar as informações no banco de dados da Invent, basta que o Tenda Atacado execute uma PROCEDURE em uma tabela especifica definida pela Invent.
Ao final do processo do Sorter, basta que o Tenda Atacado execute um SELECT em uma tabela do banco da Invent, adquirindo assim as informações de retorno com todos os detalhes listados no item 4.3 deste documento

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Consultas  
**Score:** — (semantico) | **ID:** b4e53b6ba6ab66f7

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** 5.11.	Estatísticas  
**Score:** — (semantico) | **ID:** b4f777da585a57df

O sistema MFC disponibiliza relatórios estatísticos ao usuário para verificar o comportamento e índices de produção do equipamento. Por exemplo, um técnico do equipamento pode consultar os desvios realizados e perceber que há uma quantidade excessiva de volumes passando por um único ponto. Assim, as Seções abaixo mostram as telas disponibilizadas com essa finalidade.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 0d50a27d4451c727

O sistema MFC permite ao usuário configurar o comportamento do MFC. Por padrão, o usuário comum somente terá permissão para configurar as opções de linguagem da página, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Fluxo do SORTER  
**Score:** — (semantico) | **ID:** a66b86448822f37a

Especificação hardware de TI
Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Internet Explorer, Google Chrome, Mozila ou Firefox)

---
**Origem:** [I21.103] 2021 — `I21.103 - ESPECIFICACAO DE SOFTWARE - ADICIONAL SORTER REISADO REV3.docx`  
**Heading:** Adição de tela e funcionalidades  
**Score:** — (semantico) | **ID:** ec28632252917f43

O sistema WCS Velox deverá possibilitar o operador a realizar o vínculo da rota em uma rampa/doca.
Esse vínculo será feito manualmente pelo operador no sistema WCS Velox, conforme a necessidade.
Sendo assim, a caixa ao ser lida na saída do sorter, deverá informar além do status, informar a rota que está vinculada aquela rampa/doca no momento da leitura em casos de rampa errada.
Para que as solicitações sejam atendidas com êxito, como mencionado no item acima, uma tela nova que será apresentada no PDV deve conter um campo onde o operador com o leitor de forma manual vai realizar a leitura do volume e a informação será apresentada no PDV, após o recebimento do número do código de volume o sistema do WCS Velox irá avaliar a informação do número de volume condiz com os números de volumes esperados para aquela rampa/doca sendo possíveis os seguintes cenários:
Caixa pertence a rampa/doca – O WCS VELOX irá acender toda a tela do PDV na cor verde com a mensagem “CAIXA CORRETA!” em letras grandes. A tela ficará com a mensagem permanente na tela até que o usuário realize uma nova leitura.
Caixa não pertence a rampa/doca – O WCS VELOX irá acender a tela do PDV na cor vermelha com a mensagem “RAMPA ERRADA! CAIXA PERTENCE A RAMPA: (Nº da rampa) ROTA: (rota vinculada a rampa)” em letras grandes. A tela ficará com a mensagem permanente na tela até que o usuário realize uma nova leitura.
Em casos que a caixa não pertencer a nenhuma rampa, o número da rampa ficará vazio.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Confirmação de conferência (CHECKOUT)  
**Score:** — (semantico) | **ID:** 864465769b21ff62

MFC  WMS
Após o operador de conferência terminar a tratativa de analise e conferencia da caixa clicando em finalizar conferencia o WCS envia a o retorno de conferência CHECKOUT com os itens faltantes no P30 como mencionado no item 3.4 para o WCS, finalizando a informações de separação da caixa.
EV;20230615102819;INVENT WCS;400009950;MOD;WS;02
WS;400009950;1640150954;null;214996726;20;70;0;GET;2020D101040101;1.0;1503067;99;;;

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Confirmação de expedição P70 (SORTER/P70/CLOSE CONTAINNER NATURA/AVON)  
**Score:** — (semantico) | **ID:** f4b4c639637a59f5

MFC  WMS
Após a passagem da caixa no leitor do sorter o WCS manda a integração de P70 para o WMS, confirmando que a caixa foi expedida, caixa Avon e Natura.
NATURA
EV;2936;INVENT WCS;20220427195101;CLOSE;CONTAINER;02;
CO;500000052;589575677;;;70;0;20220427195101;;100002163;;;;CL;;
AVON
EV;20220731173045;INVENT WCS;99999999;CLOSE;CONTAINER;02;
CO;0;601160150;;;70;0;20220731173045;;100851428;;;;CL;;

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** c6ca01fb69531cfa

Sorter de 12 rampas. Quando a caixa receber a leitura da etiqueta o PLC enviará a mensagem NDIR para o WCS que por sua vez irá devolver a mensagem DLST com a informação do número da rampa de 1 a 11 determinando o destino da caixa e envia a direção de desvio 0099 para rejeito rampa 12, após a devolução do WCS ao PLC o PLC irá devolver a mensagem de ACKN confirmando o desvio na rampa correta ao WCS.
Na rampa 12 temos a estação de conferência do rejeito do sorter onde o operador através da tela do WCS pode analisar a caixa e mudar a situação dela se necessário.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Confirmação de expedição P70 (SORTER/P70/CLOSE CONTAINNER NATURA/AVON)  
**Score:** — (semantico) | **ID:** ac7a6a940ddb9b68

WCS  WMS
Após a passagem da caixa no leitor do sorter o WCS manda a integração de P70 para o WMS, confirmando que a caixa foi expedida, caixa Avon e Natura.
NATURA
EV;2936;INVENT WCS;20220427195101;CLOSE;CONTAINER;02;
CO;500000052;589575677;;;70;0;20220427195101;;100002163;;;;CL;;
AVON
EV;20220731173045;INVENT WCS;99999999;CLOSE;CONTAINER;02;
CO;0;601160150;;;70;0;20220731173045;;100851428;;;;CL;;

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 1904ae5aa37541e2

Sorter de 12 rampas. Quando a caixa receber a leitura da etiqueta o PLC enviará a mensagem NDIR para o WCS que por sua vez irá devolver a mensagem DLST com a informação do número da rampa de 1 a 11 determinando o destino da caixa e envia a direção de desvio 0099 para rejeito rampa 12, após a devolução do WCS ao PLC o PLC irá devolver a mensagem de ACKN confirmando o desvio na rampa correta ao WCS.
Na rampa 12 temos a estação de conferência do rejeito do sorter onde o operador através da tela do WCS pode analisar a caixa e mudar a situação dela se necessário.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Consultas  
**Score:** — (semantico) | **ID:** 2a96548c63f01215

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** ac03ec44ed6eb3cf

O sistema MFC permite ao usuário configurar o comportamento do MFC. Por padrão, o usuário comum somente terá permissão para configurar as opções de linguagem da página, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Especificação hardware de TI  
**Score:** — (semantico) | **ID:** 0ff304f40c8cf75c

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Internet Explorer, Google Chrome, Mozila ou Firefox)

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Consultas  
**Score:** — (semantico) | **ID:** 21774af031152ee0

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** efc5518da93695f3

O sistema MFC permite ao usuário configurar o comportamento do MFC. Por padrão, o usuário comum somente terá permissão para configurar as opções de linguagem da página, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Especificação hardware de TI  
**Score:** — (semantico) | **ID:** 53338949f7877653

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Internet Explorer, Google Chrome, Mozila ou Firefox)

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Consultas  
**Score:** — (semantico) | **ID:** a404fa690fc1c4cd

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 4f70e3fa9ccc3597

O sistema MFC permite ao usuário configurar o comportamento do MFC. Por padrão, o usuário comum somente terá permissão para configurar as opções de linguagem da página, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional.
Especificação hardware de TI
Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Internet Explorer, Google Chrome, Mozila ou Firefox)

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 88d0ba090b599de5

As integrações de dados ocorrerão através de um serviço WEBSERVICE, que permanecera ativo no servidor. Desta forma, o cliente poderá enviar os dados a qualquer momento ao sistema MFC da Invent. Fornecendo somente as informações detalhadas abaixo. Onde o MFC ao fazer a leitura do código de barras da caixa executa o processo de picking.
Caso no momento da integração, algum produto não estiver cadastrado em uma posição de picking, o sistema MFC não irá aceitar este pedido, e informará o pedido e o motivo de não aceite.
No final do processo, MFC deverá devolver notificação de volume expedido.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** 506717607d7da483

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** 0c12f73a58cdcc30

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** 9bf0d6605893e3cf

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no MFC (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no MFC (não é editável).
Código do produto: Número de identificação do produto SKU.
Cliente: Funcionalidade somente para módulos específicos.
Descrição: Nome/descrição do produto, o campo
Peso: Peso correspondente ao produto.
Largura: Largura correspondente ao produto.
Altura: Altura correspondente ao produto.
Comprimento: Comprimento correspondente ao produto.
Cubagem: É a cubagem correspondente ao produto.
Podemos também relacionar EAN ao produto, para isso temos a opção de criar, editar ou excluir uma relação de EAN ao produto. O botão, representado por um símbolo “+”, é utilizado para a criação da relação do EAN ao produto. Por outro lado, o outro botão, representado por um símbolo “-” é utilizado para excluir uma relação do EAN ao produto. E também tem o botão do lápis que é para fazer alguma alteração sobre os EAN já relacionados ao produto. A figura mostra a tela de inclusão da relação do EAN.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** a925f7efd1ae91ff

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** 17e4b1196d2be475

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do MFC, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** aef18b17b3d451de

As integrações de dados ocorrerão através de um serviço WEBSERVICE, que permanecera ativo no servidor. Desta forma, o cliente poderá enviar os dados a qualquer momento ao sistema MFC da Invent. Fornecendo somente as informações detalhadas abaixo. Onde o MFC ao fazer a leitura do código de barras da caixa executa o processo de picking.
Caso no momento da integração, algum produto não estiver cadastrado em uma posição de picking, o sistema MFC não irá aceitar este pedido, e informará o pedido e o motivo de não aceite.
No final do processo, MFC deverá devolver notificação de volume expedido.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** 19eb3a86d7b0ff05

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** 8ae88912b9ac03f7

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** 19362928c2c14fc5

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no MFC (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no MFC (não é editável).
Código do produto: Número de identificação do produto SKU.
Cliente: Funcionalidade somente para módulos específicos.
Descrição: Nome/descrição do produto, o campo
Peso: Peso correspondente ao produto.
Largura: Largura correspondente ao produto.
Altura: Altura correspondente ao produto.
Comprimento: Comprimento correspondente ao produto.
Cubagem: É a cubagem correspondente ao produto.
Podemos também relacionar EAN ao produto, para isso temos a opção de criar, editar ou excluir uma relação de EAN ao produto. O botão, representado por um símbolo “+”, é utilizado para a criação da relação do EAN ao produto. Por outro lado, o outro botão, representado por um símbolo “-” é utilizado para excluir uma relação do EAN ao produto. E também tem o botão do lápis que é para fazer alguma alteração sobre os EAN já relacionados ao produto. A figura mostra a tela de inclusão da relação do EAN.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** 1535a293c1abd74e

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** 3f545513e986bb49

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do MFC, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 643eac974eaf7786

As integrações de dados ocorrerão através de um serviço WEBSERVICE, que permanecera ativo no servidor. Desta forma, o cliente poderá enviar os dados a qualquer momento ao sistema MFC da Invent. Fornecendo somente as informações detalhadas abaixo. Onde o MFC ao fazer a leitura do código de barras da caixa executa o processo de picking.
Caso no momento da integração, algum produto não estiver cadastrado em uma posição de picking, o sistema MFC não irá aceitar este pedido, e informará o pedido e o motivo de não aceite.
No final do processo, MFC deverá devolver notificação de volume expedido.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** 3a8c8415f7b3b81a

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** a2844027e161b30e

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** 35f8f90d0ee37fc4

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no MFC (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no MFC (não é editável).
Código do produto: Número de identificação do produto SKU.
Cliente: Funcionalidade somente para módulos específicos.
Descrição: Nome/descrição do produto, o campo
Peso: Peso correspondente ao produto.
Largura: Largura correspondente ao produto.
Altura: Altura correspondente ao produto.
Comprimento: Comprimento correspondente ao produto.
Cubagem: É a cubagem correspondente ao produto.
Podemos também relacionar EAN ao produto, para isso temos a opção de criar, editar ou excluir uma relação de EAN ao produto. O botão, representado por um símbolo “+”, é utilizado para a criação da relação do EAN ao produto. Por outro lado, o outro botão, representado por um símbolo “-” é utilizado para excluir uma relação do EAN ao produto. E também tem o botão do lápis que é para fazer alguma alteração sobre os EAN já relacionados ao produto. A figura mostra a tela de inclusão da relação do EAN.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** ecdbb6a6b33e2f76

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** 35f43f7572b63691

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do MFC, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 0144d977c3294880

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de separação e Sorter, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão- de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** bfff4dbe3fceba4d

Cliente irá nos passar mapa de lojas/Rampas.
O portal terá apenas um scanner que será do lado direito, mesmo lado do order start.
Operadores deverão abrir todas as posições pallet antes do início da operação, realizando a rotina de abertura PTL.
Operador ao receber caixa na saída irá fazer a leitura, e neste momento o led da respectiva transportadora/loja devera acender indicando o local (pallet) que deve alocar a caixa, após alocar o operador deve apertar o botão (Led) para apagar.
Operador ao realizar a leitura de um volume que não corresponde àquela posição do PTL, o LED acendera em vermelho, indicando que o volume não corresponde aquela saída. Nesse caso, o operador deverá movimentar a caixa manualmente até a estação de rejeito, para que seja feita a tratativa.
Sorter terá 14 (quatorze) saídas, e cada saída poderá ser alocado até 08 (oito) PTL (posição pallet) e em cada PTL terá um led indicativo.
Operador ao finalizar o pallet, VELOX enviará via integração (Palletize_Container.xml), as informações das caixas alocadas no pallet.
Operador ao finalizar o fechamento do pallet, o led da posição acenderá em amarelo informando que o pallet foi fechado.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Scanners  
**Score:** — (semantico) | **ID:** 7d98dc2af04afbfd

Cada saída de Put-to-light possuirá 01 (um) scanner (de Fornecimento/Responsabilidade Invent).
A função deste dispositivo será realizar a leitura do código de barras das caixas e o processo de abertura e fechamento de pallet.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** 837e0ff25b7ef3a3

Os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição (PTL) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento o led de cada posição indicará que o processo de abertura foi concluído, já que quando a abertura do pallet for efetuada o led da posição em questão acenderá em verde.
Somente operadores cadastrados no sistema terão o poder de realizar abertura da posição pallet.
Etiquetas (RG Pallet) serão de responsabilidade do cliente.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 9248e70a103178c6

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Picking e Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do Grupo Nós e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Grupo Nós (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox)

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** ca518a4c01f9bb73

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funcionam da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY - INDUCAO SORTER REV1.docx`  
**Heading:** Indução Sorter  
**Score:** — (semantico) | **ID:** da6080b69667a1ed

O sistema Velox deve estar preparado para receber a integração (INDSORTER) com as informações dos volumes que foram separados por fora da automação, via RF do cliente.
Nessa integração, o WMS do cliente irá enviar as informações de volumes que foram separados via rádio frequência (RF) e não pela automação Invent. O pedido não terá obrigatoriedade de ter volumes separados na automação para o envio dos volumes realizados via Rádio Frequência.
Velox não deve liberar o fechamento do PTL até que todos os volumes forem lidos no sorter, tanto volumes separados na automação Invent (Fracionados) como volumes separados via RF cliente.
Operador ao finalizar a separação do volume via RF, WMS deverá enviar o número da etiqueta do volume separado, o pedido e a quantidade de volumes total do pedido para o Velox. Com isso, operador realiza a indução do volume no sorter.
Velox deverá considerar essas informações de quantidade de volume para liberar o fechamento do PTL.
Velox deve avaliar quando um volume de RF passar no scanner do sorter se possui algum PTL com aquele pedido atrelado, caso não possuir o sistema deve alocar aquele pedido na posição disponível seguindo as regras já existentes no sorter. O pedido só será finalizado quando TODOS os volumes do pedido (volumes RF  e Fracionado) forem alocados no PTL

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - ADTV - PMB.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 8fba9c41480b5bc8

Operador terá visibilidade nessa nova tela apenas os pedidos que estiverem devidamente integrados no sistema MFC.
O sistema MFC terá um novo parâmetro para essa tela, onde o operador poderá imprimir uma etiqueta por vezes, ou seleciona diversos pedidos para impressão em massa.
O objetivo é a impressão da etiqueta, para otimizar e minimizar a utilização de papel.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - ADTV - PMB.docx`  
**Heading:** Campos e informações da etiqueta  
**Score:** — (semantico) | **ID:** acefccc1c2c9c31f

Nesse item, os detalhes dos campos que atualmente o sistema MFC recebe via integração:
Abaixo os campos que o MFC não recebe, e deverá receber para conseguir imprimir a etiqueta com todas as informações necessárias:

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Troca de mensagens (PLCxMFC)  
**Score:** — (semantico) | **ID:** 58361ee7f8436f4e

No ponto de decisão da primeira balança, o PLC enviará duas mensagens para um mesmo volume, sendo uma mensagem antes de pesar a caixa (onde o MFC irá processar e responder com o destino) e a outra após a pesagem (para o MFC registrar o peso).

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Consultas  
**Score:** — (semantico) | **ID:** ec29f03cda250ae5

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades.
O sistema WCS deve possibilitar a consulta e geração de relatório dos pedidos/itens que passaram pelas saídas, possibilitando um check com aquilo que era esperado (bipado no início da linha)

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 9e591eec273d268e

O sistema MFC permite ao usuário configurar o comportamento do MFC. Por padrão, o usuário comum somente terá permissão para configurar as opções de linguagem da página, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Troca de mensagens (PLCxMFC)  
**Score:** — (semantico) | **ID:** ebe11bb4993306ec

No ponto de decisão da primeira balança, o PLC enviará duas mensagens para um mesmo volume, sendo uma mensagem antes de pesar a caixa (onde o MFC irá processar e responder com o destino) e a outra após a pesagem (para o MFC registrar o peso).

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Consultas  
**Score:** — (semantico) | **ID:** d6d453a9353bc74a

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades.
O sistema WCS deve possibilitar a consulta e geração de relatório dos pedidos/itens que passaram pelas saídas, possibilitando um check com aquilo que era esperado (bipado no início da linha)

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 771147f9fab92aef

O sistema MFC permite ao usuário configurar o comportamento do MFC. Por padrão, o usuário comum somente terá permissão para configurar as opções de linguagem da página, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Troca de mensagens (PLCxMFC)  
**Score:** — (semantico) | **ID:** 09c5c782b51039c4

No ponto de decisão da primeira balança, o PLC enviara duas mensagens para um mesmo volume, sendo uma mensagem antes de pesar a caixa (onde o MFC  irá processar e responder com o destino) e a outra após a pesagem (para o MFC registrar o peso).

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 7762615fdff40267

O sistema MFC permite ao usuário configurar o comportamento do MFC. Por padrão, o usuário comum somente terá permissão para configurar as opções de linguagem da página, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Troca de mensagens (PLCxMFC)  
**Score:** — (semantico) | **ID:** 3cfc38e73ba455c6

No ponto de decisão da primeira balança, o PLC enviara duas mensagens para um mesmo volume, sendo uma mensagem antes de pesar a caixa (onde o MFC irá processar e responder com o destino) e a outra após a pesagem (para o MFC registrar o peso).

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Consultas  
**Score:** — (semantico) | **ID:** a159ec185d2c89cf

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades.
O sistema WCS deve possibilitar a consulta e geração de relatório dos pedidos/itens que passaram pelas saídas, possibilitando um check com aquilo que era esperado (bipado no início da linha)

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 0fa39c057c423e68

O sistema MFC permite ao usuário configurar o comportamento do MFC. Por padrão, o usuário comum somente terá permissão para configurar as opções de linguagem da página, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferência.docx`  
**Heading:** Leitura automática de código de barras  
**Score:** — (semantico) | **ID:** 96557e71f53e9d35

Atualmente é necessário pressionar a tecla “Enter” após a bipagem de cada código de barras.
Será implementado um mecanismo de bipagem automática, que dispara o evento de leitura assim que o código for capturado pelo leitor, eliminando a necessidade de interação manual.
Regra funcional:
O sistema deve identificar o término da leitura e processar automaticamente o código.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Tipos de etiquetas  
**Score:** — (semantico) | **ID:** bd22bd57246fd67f

Abaixo, segue imagens de algumas etiquetas a serem lidas no portal de leitura do sorter.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Configuração Portal de leitura Toledo  
**Score:** — (semantico) | **ID:** f6864e0d36b2d213

Padrão de string do leitor DX8210A, para comunicação das soluções.
Usaremos a etiqueta acima como exemplo.
Códigos a serem lidos:
Código de barras vertical, itens 1,2 e 3, sendo o 3 utilizado somente na smartlabel
Máscaras
1)	1008NNNNNNNNNNVVVBCCCCCCCC
          Tamanho 26
Esta máscara começa com o número 1008 N = 
          sequencial, numérico
V = volume, numérico B =
          byte, alfanumérico C =
          cep, alfanumérico
2)	18NNNNNNNNNNNNVVVBCCCCCCCC
          Tamanho 26
Esta máscara começa com o número 18 N = 
          sequencial, numérico
V = volume, numérico B = 
          byte, alfanumérico C = 
          cep, alfanumérico
3)	SSSSSSSSSSSSSS$VVVBCCCCCCCC
Tamanho 27
S = shipment id, alfanumérico
$ = caracter definidor da máscara. Fixo. V = 
          volume, numérico
B = byte, alfanumérico C = 
          cep, alfanumérico
Código de barras horizontal, item 4
4)	$CCCCCCCCSSSSSSSSSSSSSSAMMVVVB
Tamanho 30
Esta máscara começa com o número $ C =
cep, alfanumérico
S = shipment id, alfanumérico A = 
          serviço, alfanumérico
M = modalidade, numérico V = 
          volume, numérico
B = byte, alfanumérico
Código enviado
Os portais de leitura JADLOG, hoje estão configurados como “Single Label”, que significa que o primeiro código a ser lido é enviado, sem a necessidade de ler um segundo código. O leitor sempre enviara os códigos entre o header <STX> e o terminador <ETX>.
String DX8210A
Caso o código 1 seja lido:
<STX>1008NNNNNNNNNNVVVBCCCCCCCC <ETX>
Caso o código 2 seja lido:
<STX>18NNNNNNNNNNNNVVVBCCCCCCCC <ETX>
Caso o código 3 seja lido:
<STX> SSSSSSSSSSSSSS$VVVBCCCCCCCC <ETX>
Caso o código 4 seja lido:
<STX>$CCCCCCCCSSSSSSSSSSSSSSAMMVVVB <ETX>
Conclusão:
O leitor terá os quatro possíveis códigos cadastrados em sua memória interna, ao efetuar a leitura dinamicamente, enviara o primeiro dos códigos a serem lidos, um envio de string por volume. Diante das quatro possibilidades de código, acima descrevemos as possíveis strings enviadas pelo leitor ao PLC

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Tipos de etiquetas  
**Score:** — (semantico) | **ID:** 7bdfb1a6a6edc111

Abaixo, segue imagens de algumas etiquetas a serem lidas no portal de leitura do sorter.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Configuração Portal de leitura Toledo  
**Score:** — (semantico) | **ID:** ece295715055c2a9

Padrão de string do leitor DX8210A, para comunicação das soluções.
Usaremos a etiqueta acima como exemplo.
Códigos a serem lidos:
Código de barras vertical, itens 1,2 e 3, sendo o 3 utilizado somente na smartlabel
Máscaras
1008NNNNNNNNNNVVVBCCCCCCCC Tamanho 26
Esta máscara começa com o número 1008 N = sequencial, numérico
V = volume, numérico B = byte, alfanumérico C = cep, alfanumérico
18NNNNNNNNNNNNVVVBCCCCCCCC Tamanho 26
Esta máscara começa com o número 18 N = sequencial, numérico
V = volume, numérico B = byte, alfanumérico C = cep, alfanumérico
SSSSSSSSSSSSSS$VVVBCCCCCCCC Tamanho 27
S = shipment id, alfanumérico
$ = caracter definidor da máscara. Fixo. V = volume, numérico
B = byte, alfanumérico C = cep, alfanumérico
Código de barras horizontal, item 4
$CCCCCCCCSSSSSSSSSSSSSSAMMVVVB Tamanho 30
Esta máscara começa com o número $ C = cep, alfanumérico
S = shipment id, alfanumérico A = serviço, alfanumérico
M = modalidade, numérico V = volume, numérico
B = byte, alfanumérico
Código enviado
Os portais de leitura JADLOG, hoje estão configurados como “Single Label”, que significa que o primeiro código a ser lido é enviado, sem a necessidade de ler um segundo código. O leitor sempre enviara os códigos entre o header <STX> e o terminador <ETX>.
String DX8210A
Caso o código 1 seja lido:
<STX>1008NNNNNNNNNNVVVBCCCCCCCC <ETX>
Caso o código 2 seja lido:
<STX>18NNNNNNNNNNNNVVVBCCCCCCCC <ETX>
Caso o código 3 seja lido:
<STX> SSSSSSSSSSSSSS$VVVBCCCCCCCC <ETX>
Caso o código 4 seja lido:
<STX>$CCCCCCCCSSSSSSSSSSSSSSAMMVVVB <ETX>
Conclusão:
O leitor terá os quatro possíveis códigos cadastrados em sua memória interna, ao efetuar a leitura dinamicamente, enviara o primeiro dos códigos a serem lidos, um envio de string por volume. Diante das quatro possibilidades de código, acima descrevemos as possíveis strings enviadas pelo leitor ao PLC

---
**Origem:** [I21.167] 2022 — `I21.167 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV.5.docx`  
**Heading:** Plano de Separação  
**Score:** — (semantico) | **ID:** 345b59c4c3e0c94e

A INTERFACE Plano de Separação (PSEdddLL.txt), será utilizada pelo WMS para enviar informações dos pedidos contidos no módulo de vendas.
MFC recebe essas informações em um Picking-Cart com capacidade de 4 caixas de picking, neste caso, o Picking-Cart processa os pedidos.
Cada caixa terá a sua identificação fixada na mesma, para que o operador tenha a informação de em qual caixa foi alocado o produto.
Operador irá fazer a leitura da posição (local do produto), código de barras do produto confirma visualmente o lote e código da caixa de picking.
Priorização de pedido seguira a ordem que foi integrado. Operador decidirá qual o pedido irá realizar a separação.
No plano de separação poderá ser enviado um plano para cada pedido ou um plano para diversos pedidos.
WMS envia as informações conforme tabelas de definições abaixo, para que sejam separados pelo operador.
WMS envia o Plano Separação em formato TXT
A Tabela e a Listagem abaixo detalham esta interface:
WMS  MFC
WMS envia o Pedido Plano Separação em formato TXT
A Tabela e a Listagem abaixo detalham esta interface:
WMS  MFC
As duas interfaces são enviadas simultaneamente, conforme a interface de plano de separação é enviada, a partir dela é criado o plano de separação pedido.
Esses arquivos TXT (Ex: PSEdddLL.txt e PPSdddLL.txt) serão disponibilizados via SFTP (Secure File Transfer Protocol), esse repositório será disponibilizado pelo cliente, onde o sistema MFC ficará consultando e quando houver arquivos nesse repositório, o sistema MFC irá importá-los para a aplicação do MFC.
Nesse caso, não terá integração de retorno de informações para a WMS.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** c0e0e8ff29b1e975

As integrações de dados ocorrerão através de um serviço WEBSERVICE, que permanecerá ativo no servidor. Desta forma, o cliente poderá enviar os dados a qualquer momento ao sistema MFC da Invent, através das seguintes API’s:
Fluxo de Interface para Venus Momentos:
1 – WMS(DHL) envia api de Tarefas (Venus) caso tenha algum item de Venus, para MFC  Sem informações de lote e data de validade.
2 – MFC represa API de Production Order para Pollux  Sem as informações de lote e data
3 – Após a finalização da separação manual pela DHL, WMS(DHL) envia a API Batch com lote e data de validade para o MFC.
4 – MFC envia API de Batch para Pollux para cadastro do lote na maquina Pollux.
5 – Após a confirmação que o cadastro do lote foi realizado na Pollux, MFC envia API de Production Order com as informações completas para Pollux.
6 – Ao final do processo, Pollux envia API Resultado da Ordem para MFC e MFC envia para WMS(DHL)

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Impressão Etiqueta Separação (Venus)  
**Score:** — (semantico) | **ID:** 382beea3ea0884dd

Após WMS(JDA) realizar a integração de Tarefas-Fase D para o MFC. Operador deverá realizar a impressão das etiquetas de separação pelo sistema MFC, e após isso inicia o processo de picking manual.
Todas as informações (incluindo informações da Danfe Simp.) que compõem as etiquetas de expedição a serem impressas, deverão ser integradas do WMS(JDA) para o MFC, com isso, MFC repassa as informações de pedidos e informações via integração para a Pollux conforme descrito no itens 1.3.1 / 1.3.2 e 1.3.3
Exemplo de tela de impressão das etiquetas de separação de Venus no MFC:

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Produção  
**Score:** — (semantico) | **ID:** 9246f8d3b5825d16

Após a separação em caixas e embalagem dos premades, será colada e verificada uma etiqueta de expedição gerando uma confirmação da produção do sistema Pollux Venus para o sistema MFC.
A equipe da DHL será responsável por realizar o envio manual das caixas da sala Momentos Vênus para a expedição.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Expedição  
**Score:** — (semantico) | **ID:** 9fb7ba0c2a459efd

MFC deverá receber o pedido já definido com o código de rastreio enviado pelo WMS(DHL), para que o MFC envie para a Pollux sempre até 4 premades em uma caixa, MFC recebe os pedidos quebrados nessa quantidade de 4 em 4.
Caso o pedido tenha até 120 capsulas ele será considerado um pedido mono.
Caso o pedido tenha mais de 120 capsulas ele será considerado um pedido multivolumes.
Caso o pedido seja composto por G1(Pollux Fase C) e G2(Pollux Venus Fase D) ele será considerado um pedido multivolumes.
Caso o pedido possua premades de 30 capsulas com premades de 10 e/ou maquinas de café será considerado um pedido misto, porem devido a complexidade de cartonização pedidos mistos poderão ser tratados como multivolumes

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Mono Venus  
**Score:** — (semantico) | **ID:** 3aa73c47d9de4fd2

Caixas passam pelo ponto de decisão e é destinada diretamente ao sorter.
Quando esse volume passar pelo portal de leitura, automação fará o desvio conforme a transportadora e nesse momento MFC devolve integração(cubometro) de aferição/confirmação desse pedido para o WMS(JDA).
Pedidos que são iniciados pela Venus e não necessitam de outros produtos da estação de picking são considerados MONO, nesse caso vão diretamente para o sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Listar Lotes Vênus  
**Score:** — (semantico) | **ID:** 4a69be304f717174

Integração para listar todos os lotes cadastrados na operação Vênus.
Origem: MFC (Invent)
Destino: VÊNUS
Método: GET
Json:
Apenas o token é necessário para essa API.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Listar Produtos Vênus  
**Score:** — (semantico) | **ID:** bcac88208c3dda84

Integração para listar todas os produtos cadastrados na operação Vênus.
Origem: MFC (Invent)
Destino: VÊNUS
Método: GET
Json:
Apenas o token é necessário para essa API.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 5f27763f7cd07703

As integrações de dados ocorrerão através de um serviço WEBSERVICE, que permanecera ativo no servidor. Desta forma, o cliente poderá enviar os dados a qualquer momento ao sistema MFC da Invent. Fornecendo somente as informações detalhadas abaixo. Onde o MFC ao fazer a leitura do código de barras da caixa executa o processo de picking.
Caso no momento da integração, algum produto não estiver cadastrado em uma posição de picking, o sistema MFC não irá aceitar este pedido, e informará o pedido e o motivo de não aceite.
No final do processo, MFC deverá devolver notificação de volume expedido.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** 0ebbb4467997cec6

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** 0dc4f9f970bb886c

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** db92026672625441

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no MFC (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no MFC (não é editável).
Código do produto: Número de identificação do produto SKU.
Cliente: Funcionalidade somente para módulos específicos.
Descrição: Nome/descrição do produto, o campo
Peso: Peso correspondente ao produto.
Largura: Largura correspondente ao produto.
Altura: Altura correspondente ao produto.
Comprimento: Comprimento correspondente ao produto.
Cubagem: É a cubagem correspondente ao produto.
Podemos também relacionar EAN ao produto, para isso temos a opção de criar, editar ou excluir uma relação de EAN ao produto. O botão, representado por um símbolo “+”, é utilizado para a criação da relação do EAN ao produto. Por outro lado, o outro botão, representado por um símbolo “-” é utilizado para excluir uma relação do EAN ao produto. E também tem o botão do lápis que é para fazer alguma alteração sobre os EAN já relacionados ao produto. A figura mostra a tela de inclusão da relação do EAN.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** 7ed44fe8d67f7279

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** 230cc96197142935

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do MFC, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** d754aa6818798960

As integrações de dados ocorrerão através de um serviço WEBSERVICE, que permanecera ativo no servidor. Desta forma, o cliente poderá enviar os dados a qualquer momento ao sistema MFC da Invent. Fornecendo somente as informações detalhadas abaixo. Onde o MFC ao fazer a leitura do código de barras da caixa executa o processo de picking.
Caso no momento da integração, algum produto não estiver cadastrado em uma posição de picking, o sistema MFC não irá aceitar este pedido, e informará o pedido e o motivo de não aceite.
No final do processo, MFC deverá devolver notificação de volume expedido.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** 249758e56820203d

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** 6892b91cd60fc991

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** 1dd1cc2bfab944e6

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no MFC (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no MFC (não é editável).
Código do produto: Número de identificação do produto SKU.
Cliente: Funcionalidade somente para módulos específicos.
Descrição: Nome/descrição do produto, o campo
Peso: Peso correspondente ao produto.
Largura: Largura correspondente ao produto.
Altura: Altura correspondente ao produto.
Comprimento: Comprimento correspondente ao produto.
Cubagem: É a cubagem correspondente ao produto.
Podemos também relacionar EAN ao produto, para isso temos a opção de criar, editar ou excluir uma relação de EAN ao produto. O botão, representado por um símbolo “+”, é utilizado para a criação da relação do EAN ao produto. Por outro lado, o outro botão, representado por um símbolo “-” é utilizado para excluir uma relação do EAN ao produto. E também tem o botão do lápis que é para fazer alguma alteração sobre os EAN já relacionados ao produto. A figura mostra a tela de inclusão da relação do EAN.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** 998fd6dd62764e8d

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** b8942e75ceebc0ff

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do MFC, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** 975878ce02f241de

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** 7c916697e2775ff9

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** 6fdf0ec21aa001a7

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no MFC (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no MFC (não é editável).
Código do produto: Número de identificação do produto SKU.
Cliente: Funcionalidade somente para módulos específicos.
Descrição: Nome/descrição do produto, o campo
Peso: Peso correspondente ao produto.
Largura: Largura correspondente ao produto.
Altura: Altura correspondente ao produto.
Comprimento: Comprimento correspondente ao produto.
Cubagem: É a cubagem correspondente ao produto.
Podemos também relacionar EAN ao produto, para isso temos a opção de criar, editar ou excluir uma relação de EAN ao produto. O botão, representado por um símbolo “+”, é utilizado para a criação da relação do EAN ao produto. Por outro lado, o outro botão, representado por um símbolo “-” é utilizado para excluir uma relação do EAN ao produto. E também tem o botão do lápis que é para fazer alguma alteração sobre os EAN já relacionados ao produto. A figura mostra a tela de inclusão da relação do EAN.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** 3d0771bfe0dd6349

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** ae50f73fb62a35a9

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do MFC, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** d5b1e99c1d3e0a30

O portal do sorter é o responsável pela aferição de peso e cubagem do volume, informando o peso e as dimensões reais do volume lido, para então realizar o sorteamento de cada volume conforme sua transportadora correspondente por saída.
A referência do código da transportadora está especificada nos 2 últimos dígitos do número do código de barras.
No momento em que o volume for lido no portal, se ele estiver de acordo com as informações de peso, WCS envia a integração de confirmação/aferição do volume para o WMS com as informações de peso/volume e informações do pedido.
Caso o peso não esteja de acordo com as informações integradas, ele deverá seguir para a rampa de rejeito, para que seja realizada a conferência/auditoria desse volume.
Situações de NOREAD, transportadora sem cadastro de rampa, volume não integrado ou peso/dimensões fora da tolerância, o volume será automaticamente enviado ao rejeito do sorter.
Obs.: A regra da balança será a tolerância por RANGE de peso. Esse range de peso se baseia na informação de peso enviada na integração.
Range de peso será definido por uma porcentagem conforme cada range, podendo ter mais de um cadastro de range.
Ex: de 0 a 100 gramas X%, de 101 a 200 gramas Y%
Operador poderá alterar esse range de peso pelo sistema WCS.
Layout descritivo da etiqueta de automação:

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** By Pass  
**Score:** — (semantico) | **ID:** 8546ceeb2189634d

Operador terá a opção de ligar/desligar opção de “By Pass” em um flag.
Quando o By Pass estiver ligado o sistema irá desconsiderar o peso aferido, enviando informações de aferição e desconsiderando se estiver dentro ou fora do range de peso.
Caso erro físico no cubometro, enviar dados ‘zerados’ e desconsiderar dados para o rejeito.
Volumes NOREAD, permanecem sendo desviadas na rampa de rejeito.
Quando o By Pass estiver desligado, operação segue normalmente, considerando informações de peso.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Cubometro (Sorter)  
**Score:** — (semantico) | **ID:** f4e20adefbd3cd2c

POST
REQUEST:
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** fbbbd2d805377f3d

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** fed32fd354055635

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 27afcc25e62d3798

O sistema MFC receberá os pedidos, armazenando-os no banco de dados para posterior consulta.
O portal realizará a leitura do código de barras da etiqueta e fará a pesagem do volume, realizando o sorteamento de cada volume conforme sua transportadora correspondente por saída.
Caso o peso não esteja de acordo com a informação que foi integrada e/ou ter a informação que o volume ocorreu short picking, ele deverá seguir para a rampa de rejeito, para que seja realizada a auditoria desse volume.
Operador deverá realizar o processo de abertura de pallet, alocar o volume que desceu na rampa e realizar o fechamento do pallet ao finalizar o processo.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** a53a380413c6603f

As integrações de dados ocorrerão através de um serviço WEBSERVICE, que permanecera ativo no servidor. Desta forma, o cliente poderá enviar os dados a qualquer momento ao sistema MFC da Invent. Fornecendo somente a informação detalhadas abaixo. Onde o MFC ao fazer a leitura do código de barras da caixa executa o desvio para o destino correto de picking e após o picking realiza os desvios no sorter.
Neste caso, a rota das integrações de envio é única, ou seja, o envio das informações ocorre apenas partindo do sistema WMS/ERP do cliente para o sistema MFC da Invent, e não ao contrário.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** d67c2cc9f1507fdd

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** 838b1de93d0633ef

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** 023ba52e910651ae

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no MFC (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no MFC (não é editável).
Código do produto: Número de identificação do produto SKU.
Cliente: Funcionalidade somente para módulos específicos.
Descrição: Nome/descrição do produto, o campo
Peso: Peso correspondente ao produto.
Largura: Largura correspondente ao produto.
Altura: Altura correspondente ao produto.
Comprimento: Comprimento correspondente ao produto.
Cubagem: É a cubagem correspondente ao produto.
Podemos também relacionar EAN ao produto, para isso temos a opção de criar, editar ou excluir uma relação de EAN ao produto. O botão, representado por um símbolo “+”, é utilizado para a criação da relação do EAN ao produto. Por outro lado, o outro botão, representado por um símbolo “-” é utilizado para excluir uma relação do EAN ao produto. E também tem o botão do lápis que é para fazer alguma alteração sobre os EAN já relacionados ao produto. A figura mostra a tela de inclusão da relação do EAN.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** c6961e4c5c621bee

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** 5284c458e6bf1a0c

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do MFC, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 5e03d56b21c6270e

O portal do sorter é o responsável pela aferição de peso e cubagem do volume, informando o peso e as dimensões reais do volume lido, para então realizar o sorteamento de cada volume conforme sua transportadora correspondente por saída.
A referência do código da transportadora está especificada nos 2 últimos dígitos do número do código de barras.
No momento em que o volume for lido no portal, se ele estiver de acordo com as informações de peso, WCS envia a integração de confirmação/aferição do volume para o WMS com as informações de peso/volume e informações do pedido.
Caso o peso não esteja de acordo com as informações integradas, ele deverá seguir para a rampa de rejeito, para que seja realizada a conferência/auditoria desse volume.
Situações de NOREAD, transportadora sem cadastro de rampa, volume não integrado ou peso/dimensões fora da tolerância, o volume será automaticamente enviado ao rejeito do sorter.
Obs.: A regra da balança será a tolerância por RANGE de peso. Esse range de peso se baseia na informação de peso enviada na integração.
Range de peso será definido por uma porcentagem conforme cada range, podendo ter mais de um cadastro de range.
Ex: de 0 a 100 gramas X%, de 101 a 200 gramas Y%
Operador poderá alterar esse range de peso pelo sistema WCS.
Layout descritivo da etiqueta de automação:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** By Pass  
**Score:** — (semantico) | **ID:** 87f52b33b4c5d39f

Operador terá a opção de ligar/desligar opção de “By Pass” em um flag.
Quando o By Pass estiver ligado o sistema irá desconsiderar o peso aferido, enviando informações de aferição e desconsiderando se estiver dentro ou fora do range de peso.
Caso erro físico no cubometro, enviar dados ‘zerados’ e desconsiderar dados para o rejeito.
Volumes NOREAD, permanecem sendo desviadas na rampa de rejeito.
Quando o By Pass estiver desligado, operação segue normalmente, considerando informações de peso.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Cubometro (Sorter)  
**Score:** — (semantico) | **ID:** 40e8cefe99b5638a

POST
AUTENTICAÇÃO: http://usqaslstc000216.phx-dc.dhl.com:7010/ws/auth/login (Método GET)
REQUEST: http://usqaslstc000216.phx-dc.dhl.com:7010/ws/cws/Cubometro (Método POST)
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Dashboards e Relatórios  
**Score:** — (semantico) | **ID:** cd248633266df62c

O sistema WCS deverá sempre permitir a opção de exportar relatórios em arquivo Excel.
Histórico de separação
Cubômetro
Status de pedidos
Desvios
Quantidade de NOREAD
Quantidade de caixas que passaram no sorter
Motivos de aprovação
Quantidade de caixas desviadas por rampa

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** 7b3ebbdb719443e4

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** a840a3b98db471e7

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 04a2e97b63207c0d

O portal do sorter é o responsável pela aferição de peso e cubagem do volume, informando o peso e as dimensões reais do volume lido, para então realizar o sorteamento de cada volume conforme sua transportadora correspondente por saída.
A referência do código da transportadora está especificada nos 2 últimos dígitos do número do código de barras.
No momento em que o volume for lido no portal, se ele estiver de acordo com os detalhes de peso e dimensões, WCS envia a integração de confirmação/aferição do cubo para o WMS com as informações de peso/volume e informações do pedido.
Caso o peso e cubagem não esteja de acordo com as informações integradas, ele deverá seguir para a rampa de rejeito, para que seja realizada a conferência/auditoria desse volume.
Situações de NOREAD, transportadora sem cadastro de rampa, volume não integrado ou peso/dimensões fora da tolerância, o volume será automaticamente enviado ao rejeito do sorter.
Obs.: A regra da balança será a tolerância por RANGE de peso. Esse range de peso se baseia na informação de peso enviada na integração.
Operador poderá alterar esse range de peso pelo sistema WCS.
Layout descritivo da etiqueta de automação:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Cubometro (Sorter)  
**Score:** — (semantico) | **ID:** 57e0defa77224304

POST
REQUEST:
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** 8926ed4da607e460

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** 0733b2ded3c35540

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** 3ea104016ef73524

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no MFC (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no MFC (não é editável).
Código do produto: Número de identificação do produto SKU.
Cliente: Funcionalidade somente para módulos específicos.
Descrição: Nome/descrição do produto, o campo
Peso: Peso correspondente ao produto.
Largura: Largura correspondente ao produto.
Altura: Altura correspondente ao produto.
Comprimento: Comprimento correspondente ao produto.
Cubagem: É a cubagem correspondente ao produto.
Podemos também relacionar EAN ao produto, para isso temos a opção de criar, editar ou excluir uma relação de EAN ao produto. O botão, representado por um símbolo “+”, é utilizado para a criação da relação do EAN ao produto. Por outro lado, o outro botão, representado por um símbolo “-” é utilizado para excluir uma relação do EAN ao produto. E também tem o botão do lápis que é para fazer alguma alteração sobre os EAN já relacionados ao produto. A figura mostra a tela de inclusão da relação do EAN.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** 30cb7655e5fb945b

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** 3698ec6e1c3804f2

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do MFC, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 2883a82c64dbc720

O portal do sorter é o responsável pela aferição de peso e cubagem do volume, informando o peso e as dimensões reais do volume lido, para então realizar o sorteamento de cada volume conforme sua transportadora correspondente por saída.
A referência do código da transportadora está especificada nos 3 últimos dígitos do número do código de barras.
No momento em que o volume for lido no portal, se ele estiver de acordo com as informações de peso, WCS envia a integração de confirmação/aferição do volume para o WMS com as informações de peso/volume e informações do pedido.
Caso o peso não esteja de acordo com as informações integradas, ele deverá seguir para a rampa de rejeito, para que seja realizada a conferência/auditoria desse volume.
Situações de NOREAD, transportadora sem cadastro de rampa, volume não integrado ou peso/dimensões fora da tolerância, o volume será automaticamente enviado ao rejeito do sorter.
Obs.: A regra da balança será a tolerância por RANGE de peso. Esse range de peso se baseia na informação de peso enviada na integração.
Range de peso será definido por uma porcentagem conforme cada range, podendo ter mais de um cadastro de range.
Ex: de 0 a 100 gramas X%, de 101 a 200 gramas Y%
Operador poderá alterar esse range de peso pelo sistema WCS.
Layout descritivo da etiqueta de automação:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** By Pass  
**Score:** — (semantico) | **ID:** 9929f69ecadcbbfd

Operador terá a opção de ligar/desligar opção de “By Pass” em um flag.
Quando o By Pass estiver ligado o sistema irá desconsiderar o peso aferido, enviando informações de aferição e desconsiderando se estiver dentro ou fora do range de peso.
Caso erro físico no cubometro, enviar dados ‘zerados’ e desconsiderar dados para o rejeito.
Volumes NOREAD, permanecem sendo desviadas na rampa de rejeito.
Quando o By Pass estiver desligado, operação segue normalmente, considerando informações de peso.
Na tela de By Pass operador precisara preencher o campo de motivo, e as informações de dos últimos processos deverá ser mostrada na mesma tela, com as informações de data/hora, motivo, usuário que ativou e usuário que desativou o by-pass.
By Pass poderá ser ativado por operação. Operador terá opção de cadastrar tipos de operação, para que consiga ativar/desativar by-pass e também fazer o vinculo com embalagens/transportadoras e tolerâncias.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Cubometro (Sorter)  
**Score:** — (semantico) | **ID:** e9a9ebbd8b5864f6

POST
REQUEST:
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** 97c7e7a987e17083

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** d61fef7fad9c0a95

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE(RASC) - FASE.1 VER.1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 514b9b21172bac8c

O sistema MFC receberá os pedidos, armazenando-os no banco de dados para posterior consulta.
A automação realizará a leitura do QR Code da etiqueta e fará a pesagem do volume, realizando o sorteamento de cada volume conforme sua transportadora correspondente por saída.
Caso o peso não esteja de acordo com a informação que foi integrada e/ou ter a informação que o volume ocorreu short picking, ele deverá seguir para a rampa de rejeito, para que seja realizada a auditoria desse volume.
Quando a caixa for expedida na máquina ‘POLLUX’, a caixa virá aberta e o MFC deverá ter essa associação, sendo assim seguir para as estações 1 e 2 para a finalização do picking.
Operador deverá realizar o processo de abertura de pallet, alocar o volume que desceu na rampa e realizar o fechamento do pallet.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 5100bc7974b6d0bd

A invent usará a aplicação MFC que será responsável pelo gerenciamento dos cenários mencionados acima, ou seja, a aplicação MFC receberá as todas as informações necessárias para o correto processamento dos cenários e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema WMS DHL e a automação Pollux (embaladora).
Servidor aplicação + banco de dados já disponível no local. O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 3d6df79a361bc68d

As integrações de dados ocorrerão através de um serviço WEBSERVICE, que permanecerá ativo no servidor. Desta forma, o cliente poderá enviar os dados a qualquer momento ao sistema MFC da Invent, através das seguintes API’s:
Fluxo de Interface para Venus Momentos:
1 – WMS(DHL) envia api de tarefas para MFC  Sem informações de lote e data
2 – MFC represa API de Production Order para Pollux  Sem as informações de lote e data
3 – Após a finalização da separação manual pela DHL, WMS(DHL) envia a API Batch e API de Premade para o MFC
4 – MFC envia API de Batch para Pollux para cadastro do lote na maquina Pollux
5 – Após a confirmação que o cadastro do lote foi realizado na Pollux, MFC envia API de Production Order com as informações completas para Pollux.
6 – Ao final do processo, Pollux envia API Resultado da Ordem para MFC e MFC envia para WMS(DHL)

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Status de uma ou mais Ordens de produção – production_order/status (Estado da Ordem de Produção)  
**Score:** — (semantico) | **ID:** 4fda3a84b238d66b

Operador realiza pesquisa via tela do MFC, inserindo o numero das ordens de produção nos campos da tela e o status de uma ou mais ordens de produção no sistema Pollux é mostrado na tela do MFC. Pollux retorna com os possiveis status:
Para MFC realizar essa pesquisa, operador fara a pesquisa via tela do MFC de uma ou mais ordens de produção.
E então Pollux retorna com os possiveis status:
Operador terá opção de filtro por status:
Operador terá opção de filtro por numero de ordem de produção:

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Priorização de Pedidos  
**Score:** — (semantico) | **ID:** c324b78eb51b4776

MFC ao receber essa integração(tarefas), aplicara a regra de priorização conforme regras descritas abaixo:
MFC fará a verificação de regras de acordo com a seguinte sequência:
1) Canal
2) Corte Transportadoras
3) Atendimento SLA
Canal
Assinaturas – (Prioridade 1)
Para o identificar se o pedido se trata de uma ‘assinatura’, o MFC deverá observar o campo ‘ponumber’ e caso a informação dos 3(três) primeiros dígitos seja BRS ou BRJ, então é considerado assinatura, caso não esteja entre essas duas informações, não será considerado assinatura.
MKT Place – (Prioridade 1)
Para identificar se o pedido se trata de um ‘marketplace’, o MFC deverá observar o campo ‘canal’ caso esteja com a informação de ‘marketplace’ deverá checar os 2(dois) primeiros dígitos do campo ‘ponumber’ e caso esteja entre as informações da tabela abaixo, então será considerado marketplace e considerará a ordem descrita abaixo:
Ship Method – (Prioridade 1)
Para identificar o tipo de ‘ship method’ do pedido, o MFC deverá observar o campo ‘serviço’, e validar se a informação é igual a ‘SEQUOIAGREEN’.
Corte Transportadoras
Para validar o corte de transportadoras por horário, o MFC deverá observar o campo ‘serviço’ em casos que o serviço não seja enviado, deverá ser enviada a informação de transportadora.
O corte de horário das transportadoras deve ser considerado juntamente com as regras 1 e 2.
CORREIOS – 15:00
SEDEX – 15:00
PAC – 15:00
JADLOG – 16:00
REDE SUL – 17:30
VEX – 17:30
LOGGI – 20:40
SEQUOIA – 20:40
CAPITAL e T.A são transportadoras que coletam com horário agendado
A partir do encerramento do horario de corte, deve ser trocado a produção para os (transportadores) do próximo corte.
Atendimento SLA – Critério de desempate
Para realizar a verificação no SLA de atendimento o sistema MFC deverá observar os campos ‘datapagamento’ e ‘dataintegracaosap’.
Caso o campo ‘datapagamento’ venha com informação null, sistema irá considerar a informação do campo ‘dataintegracaosap’.
Backlog – (Prioridade 2)
Pedidos pagos depois das 12h (data hoje -2 dias ou mais dias -3, -4 etc) = D-1
Pedidos pagos antes das 12h (data hoje -1) e integrados na OTR SAP antes das 13h (data hoje -1 dia) = D-1
D0 – (Prioridade 3)
Pedidos pagos após as 12h (data hoje -1) e integrados no OTR SAP antes das 13h (data hoje -1 ou hoje) = D0
Pedidos pagos antes das 12h (data hoje -1) e integrados na OTR SAP depois das 13h (data hoje -1) = D0
Pedidos pagos antes das 12h (data hoje -1) e integrados no OTR SAP antes das 13h (data hoje) = D0
Pedidos pagos antes das 12h (data hoje) e integrados no OTR SAP antes das 13h (data hoje) = D0
D+1 – (Prioridade 4)
Pedidos pagos após as 12h (data hoje) e integrados na OTR SAP antes das 13h (data hoje) = D+1
Pedidos pagos antes das 12h (data hoje) e integrados na OTR SAP depois das 13h (data hoje) = D+1
Para todas as prioridades:
Os calculos de datas devem se basear nos dias uteis conforme operação Domingo a Sexta-feira desconsiderando o Sabado.
Definição.
Pedido Ex – MKT Place / Assinatura ou Ship Method exclusivo (SEQUOIAGREEN)
Se pedido prioridade 1, porém no critério 3 (Atendimento SLA) for prioridade 4 (D+1) ele irá receber prioridade 4 no critério da priorização.
Se pedido prioridade 1, porém no critério 3 (Atendimento SLA) for prioridade 3 (D0) ou 2 (D-1) ele irá receber prioridade 1.
Pedido comum (2,3 e 4) – exceto pedido prioridade 1
Para o pedido ser considerado prioridade 2, as validações de assinatura, MarketPlace e Ship Method precisam ser negadas.
Validando assim o atendimento SLA.
Sequencia de ordenação:
Prioridade
Corte Transportadora (Horário mais próximo vem primeiro)
SLA
Datapagto
Os campos ‘datapagamento’ e ‘dataintegracaosap’ deverão ser enviados pelo WMS(JDA) no formato AAAAMMDDH24MS (Exemplo: 20220811091820).

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Expedição  
**Score:** — (semantico) | **ID:** c4acf719c1b1de87

Caso o pedido tenha mais de 4 premades (120 capsulas), MFC deverá receber o pedido já definido com o código de rastreio enviado pelo WMS(DHL), para que o MFC envie para a Pollux sempre até 4 premades em uma caixa.
Caso o  pedido tenha até 120 capsulas ele será considerado um pedido mono, caso possua mais de 120 capsulas ou for composto por G1 e G2 será considerado um pedido multivolumes e caso o pedido possua premades de 30 capsulas com premades de 10 e/ou maquinas de café será considerado um pedido misto, porem devido a complexidade de cartonização pedidos mistos poderão ser tratados como multivolumes

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Mono  
**Score:** — (semantico) | **ID:** 13aff90c2e260f5f

Caixas passam pelo ponto de decisão e é destinada diretamente ao sorter.
Quando esse volume passar pelo portal de leitura, automação fará o desvio conforme a transportadora e nesse momento MFC devolve integração de aferição/confirmação desse pedido para o WMS(DHL).
Pedidos que são iniciados pela Venus e não necessitam de outros produtos da estação de picking são considerados MONO, nesse caso vão diretamente para o sorter.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** dadda7a56ec67b4d

Nas saidas do sorter terá 5 TV’s para 5 saídas
Com o PTM cada saída do sorter terá a possibilidade de abertura de até 3 pallets.
Com o leitor de código de barras (Ring Scan), operador fará a abertura e fechamento dos pallets e identificação onde deve alocar o volume bipado/lido na saída.
O sistema permitirá a operação de multiplos usuários na mesma saida, utilizando o PTM.
Operador irá selecionar pela etiqueta de pallet, qual posição/pallet irá realizar a abertura, com isso operador irá realizar a rotina de abertura, efetuando a leitura com leitor de mão na ordem abaixo:
1 – Leitura da etiqueta de identificação do colaborador
2 – Leitura da etiqueta de posição pallet
3 – Leitura da etiqueta de identificação do pallet (UMA)
Então a posição pallet é aberta, e mostrada a posição aberta no monitor da rampa.
Operador então, ao receber os volumes desviados na rampa, realiza a leitura do código de barras e na TV (PTM), o sistema irá indicar em qual posição pallet o operador deve alocar aquele volume lido.
Caso ocorra algum bloqueio do pedido que está na esteira, o WMS deverá enviar uma API de bloqueio de pedido, com isso o operador não ira conseguir incluir o volume no pallet e observando na tela (PTM) o motivo.
O fechamento do pallet é visual, operador define o momento certo de finalizar o mesmo.
Operador ao visualizar que o pallet está cheio, realiza o processo de fechamento de pallet efetuando a leitura da etiqueta de identificação do pallet (UMA), com isso o sistema MFC envia uma integração para o WMS com todos os volumes alocados no pallet com as informações de:

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Cadastro de Transportadora  
**Score:** — (semantico) | **ID:** 4b88876ddbc4765b

O sistema permite ao usuário a realizar o cadastro de novas transportadora no MFC, nesse cadastro o operador tera opção de cadastrar o tipo de serviço, horários de corte.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 9fb2761526b152c5

As integrações de dados ocorrerão através de um serviço WEBSERVICE, que permanecerá ativo no servidor. Desta forma, o cliente poderá enviar os dados a qualquer momento ao sistema MFC da Invent, através das seguintes API’s:
Fluxo de Interface para Venus Momentos:
1 – WMS(DHL) envia api de tarefas para MFC  Sem informações de lote e data
2 – MFC represa API de Production Order para Pollux  Sem as informações de lote e data
3 – Após a finalização da separação manual pela DHL, WMS(DHL) envia a API Batch e API de Premade para o MFC
4 – MFC envia API de Batch para Pollux para cadastro do lote na maquina Pollux
5 – Após a confirmação que o cadastro do lote foi realizado na Pollux, MFC envia API de Production Order com as informações completas para Pollux.
6 – Ao final do processo, Pollux envia API Resultado da Ordem para MFC e MFC envia para WMS(DHL)

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Status de uma ou mais Ordens de produção – production_order/status (Estado da Ordem de Produção)  
**Score:** — (semantico) | **ID:** eef145e377d146ef

MFC  POLLUX
Operador realiza pesquisa via tela do MFC, do status de uma ou mais ordens de produção no sistema Pollux. Pollux retorna com os possiveis status:
Para MFC realizar essa pesquisa, operador fara a pesquisa via tela do MFC de uma ou mais ordens de produção.
E então Pollux retorna com os possiveis status:
Operador terá opção de filtro por status:
Operador terá opção de filtro por numero de ordem de produção:

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Expedição  
**Score:** — (semantico) | **ID:** 973b9856179f7657

Caso o pedido tenha mais de 4 premades (120 capsulas), MFC deverá receber o pedido já definido com o código de rastreio enviado pelo WMS(DHL), para que o MFC envie para a Pollux sempre até 4 premades em uma caixa.
Caso o  pedido tenha até 120 capsulas ele será considerado um pedido mono, caso possua mais de 120 capsulas ou for composto por G1 e G2 será considerado um pedido multivolumes e caso o pedido possua premades de 30 capsulas com premades de 10 e/ou maquinas de café será considerado um pedido misto, porem devido a complexidade de cartonização pedidos mistos poderão ser tratados como multivolumes

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Mono  
**Score:** — (semantico) | **ID:** ca49981f0a033460

Caixas passam pelo ponto de decisão e é destinada diretamente ao sorter.
Quando esse volume passar pelo portal de leitura, automação fará o desvio conforme a transportadora e nesse momento MFC devolve integração de aferição/confirmação desse pedido para o WMS(DHL).
Pedidos que são iniciados pela Venus e não necessitam de outros produtos da estação de picking são considerados MONO, nesse caso vão diretamente para o sorter.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** 37677f48e15dcb6b

Nas saidas do sorter terá 5 TV’s para 5 saídas
Com o PTM cada saída do sorter terá a possibilidade de abertura de até 3 pallets.
Com o leitor de código de barras, operador fará a abertura e fechamento dos pallets e identificação onde deve alocar o volume bipado na saída.
Operador irá selecionar pela etiqueta de pallet, qual posição/pallet irá realizar a abertura, com isso operador irá realizar a rotina de abertura, efetuando a leitura com leitor de mão na ordem abaixo:
1 – Leitura da etiqueta de identificação do colaborador
2 – Leitura da etiqueta de posição pallet
3 – Leitura da etiqueta de identificação do pallet (UMA)
Então a posição pallet é aberta, e mostrada a posição aberta no monitor da rampa.
Operador então, ao receber os volumes desviados na rampa, realiza a leitura do código de barras e na TV (PTM), o sistema irá indicar em qual posição pallet o operador deve alocar aquele volume lido.
O fechamento do pallet é visual, operador define o momento certo de finalizar o mesmo.
Operador ao visualizar que o pallet está cheio, realiza o processo de fechamento de pallet efetuando a leitura da etiqueta de identificação do pallet (UMA), com isso o sistema MFC envia uma integração para o WMS com todos os volumes alocados no pallet com as informações de:
Numero do pallet(UMA)
Identificação do operador que abriu o pallet
Rampa
Transportadora
BarCode
Pedido
Tarefa

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Cadastro de Transportadora  
**Score:** — (semantico) | **ID:** 05926be801a3de84

O sistema permite ao usuário a realizar o cadastro de novas transportadora no MFC, nesse cadastro o operador tera opção de cadastrar o tipo de serviço, horários de corte.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** PLC  
**Score:** — (semantico) | **ID:** fe39db8048d19e6d

A tela PLC permite Incluir, Editar e Excluir um registro PLC. Esse registro PLC para fazer a comunicação com o ponto de decisão, para qual destino a caixa seguirá na esteira. A figura mostra essa tela que tem os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: Número de IP correspondente ao PLC.
Porta: Números da porta que corresponde ao registro PLC.
Descrição: Nome/descrição do registro PLC.
Range: Utilizado para funcionalidade de módulos específicos.
Ao clicar em incluir, a tela representada na figura será apresentada, com os seguintes dados:
Nº PLC: Número de identificação do PLC.
IP: IP correspondente ao PLC.
Porta: Porta de comunicação que corresponde ao PLC.
Leitura de Memória: Utilizado para funcionalidade de módulos específicos.
Descrição: Nome/descrição do PLC.
Tipo: Picking ou leitor de código de barras.
Range: Utilizado para funcionalidade de módulos específicos.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Ponto de decisão  
**Score:** — (semantico) | **ID:** d98382e640b53f2d

Na tela de Ponto de decisão o usuário poderá incluir, editar e excluir um ponto de decisão. A Figura ilustra essa tela onde os dados são listados em uma tabela. Esses dados são:
Número Ponto Decisão: Número de identificação do ponto de decisão no sistema.
Nome Ponto PLC: Nome de identificação do ponto PLC.
Descrição: Nome/descrição de um ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Ponto de Decisão Anterior e Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Ao clicar em incluir ou editar, a tela ilustrada na figura será apresentada. Os dados apresentados são:
Número Ponto Decisão: Número de identificação do ponto de decisão.
Nome do Ponto PLC: Nome do ponto PLC.
Direção Padrão: Direção a ser tomada caso no ponto de decisão não tenha nenhuma ação a ser tomada.
Direção NOREAD: Direção que a caixa toma quando tem algum erro na leitura.
Ponto Decisão Anterior e a Direção Anterior: É a direção que a caixa deverá tomar recursivamente em pontos anteriores.
Descrição: Descrição do ponto de decisão.
Externo: Conjunto de funcionalidades e comportamentos relacionados ao ponto de decisão.
Validar Picking: Validar de o picking foi completamente realizado. (Limitado a funcionalidades específicas)
Ao clicar para incluir/editar, além dos dados já citados, é apresentado a opção de vincular, editar ou excluir um posto junto ao ponto de decisão. A figura mostra a tela que será apresentada ao clicar no (+) vincular ou (lápis) editar.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** 22792289aa1a4de6

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do MFC, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 6bbdfb26e3bf1c98

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Scanners  
**Score:** — (semantico) | **ID:** 93d6fc975cf6d5d4

Cada saída do Sorter possuirá 01 (um) scanner de dedo ou de gatilho (de fornecimento/responsabilidade do cliente). Este scanner deverá estar ligado na rede, Via PDV no caso de scanner de dedo ou diretamente na rede em caso de gatilho. A função deste dispositivo será disparar os comandos de abertura e fechamento de pallet, assim como informações de volume lido para alocar no pallet indicado pelo Led.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** 686fec8a02c746f4

Conforme descrito no item 5 os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará realizar a leitura do código de barras referente à abertura de pallet, crachá do operador e consecutivamente o código de barras identificador do pallet.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 4022e9bdb8c52128

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de Sorter, tendo como papel fundamental a interface entre os sistemas TMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome)

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** c81bdae0aabab22c

Na indução de volumes, operador induz o volume na esteira e com base nas informações recebidas via integrações, realiza o desvio para a rampa de docas ou rampa para armazenagem no galpão.
Programação de rotas:
O sistema Velox deverá permitir a configuração de rotas, onde o operador poderá adicionar a mesma rota para mais de uma rampa do sorter, por exemplo, São Paulo e Barueri são rotas de grande quantidade de volumes, com isso necessitam de mais de 1 rampa para desvio.
O sorter deverá pesar e cubar todos os volumes que forem induzidos no sorter, sem exceção.
Caso algum volume siga sem as informações de cubagem e/ou peso, o volume deverá seguir para rejeito, sendo necessário repassar no sorter para aferir essas informações.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 1b4b4e3bfe8c91bf

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Picking e Sorter, tendo como papel fundamental a interface entre o sistema TMS do Grupo JAMEF e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Grupo JAMEF (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** c6afd2660b1c1aa1

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor local que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** b47c675dfe3f72d0

O Sorter possui 09 (nove) saídas.
O portal de leitura do sorter realiza a identificação da etiqueta do volume, e com isso o sistema VELOX valida se a etiqueta lida possui integração e rota para o volume scaneado, para efetuar o desvio na rampa correta.
Dentro do sistema VELOX, o cliente poderá criar um ou mais mapas onde irá cadastrar/editar, os mapas conforme sua necessidade.
O sorter deverá ter 1 (um) único mapa ativo para a operação.
Após o desvio do volume no sorter, o operador deverá seguir com o processo interno da operação (Responsabilidade EMIS Minas).
Leitura nas rampas será feita pelo coletor WMS.
O sistema VELOX não irá controlar abertura e fechamento de pallets.
Paletização será de responsabilidade do cliente.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 872870dfd59945f7

Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 0475585d44b72085

Paletização será de responsabilidade do cliente.
Cliente irá nos passar mapa de Rampas/Rotas
Operador ao receber caixa na saída do Sorter irá fazer a leitura no coletor do WMS.
Sorter terá 09 (nove) saídas.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 24cbe9e821b53861

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Picking e Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do Grupo EMIS e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Grupo EMIS (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 9bff10b288a29219

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações.

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.11.docx`  
**Heading:** Fechadora e Seladora Automática de Caixas  
**Score:** — (semantico) | **ID:** c460e2d88d352cbb

Esta fechadora não terá interação com o MFC.

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** ec911377b53408ed

O Sorter possui 16 (dezesseis) saídas, sendo a primeira destinada a produtos fracionados, a segunda para beneficiamento, da terceira à décima quinta são destinadas a filiais e a última rampa a esquerda será para rejeito (Podendo ser alterado o mapa a qualquer momento – tela mapa sorter).
O portal de leitura do sorter realiza a identificação da etiqueta, via RFID e com isso o sistema VELOX valida se a etiqueta lida possui integração e rota para o volume scaneado, para efetuar o desvio na rampa correta.
Dentro do sistema VELOX, o cliente poderá criar um ou mais mapas onde irá cadastrar/editar, os mapas conforme sua necessidade.
Após o desvio do volume no sorter, o operador deverá seguir com o processo interno da operação (Responsabilidade do Cliente).
O sistema VELOX não irá controlar abertura e fechamento de pallets.
Sistema VELOX devolve a integração para o WMS informando que o produto foi expedido.

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Rejeito dos Volumes dos Níveis e Sorter  
**Score:** — (semantico) | **ID:** a917be79fe4a8eff

Em caso de NoRead nos leitores dos níveis/sorter, essa caixa/pacote deverá ser tratada na estação de rejeito no térreo/sorter.
Esta mesma estação servirá de rejeito para as áreas dos níveis e sorter, ou seja, tanto para tratativa dos problemas que podem ocorrer nos níveis de recebimento e expedição, quanto para os problemas que podem ocorrer apíos as caixas passarem pelo portal.
Possibilidades de Rejeito:
NoRead (Deve seguir e ser tratada no térreo/sorter);
Não integrado;
Erro de desvio;
Erro de etiqueta;
Sem destino ou sem tipo de serviço.
Impressão e reimpressão de etiquetas, responsabilidade do cliente.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** d4e1b6671e121f6c

O Sorter terá 4 transferências, onde cada transferência será uma rota.
Ao realizar a leitura do volume e realizar o desvio na respectiva rota teremos a estação de conferência.
Caso o volume não seja lido corretamente ou não esteja na onda integrada seguirá para rejeito.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 09e4878266f167d7

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Put-to-Light e Sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** b3c9c0cc49810ebc

O Sorter terá 1 (um) portal de leitura com 3 Scanners de leituras, 06 (seis) rampas com 4 (quatro) pallets por saída totalizando 20 (vinte) posições de pallets e 1 (uma) rampa de rejeito.
As caixas plásticas (fracionados) serão induzidas na esteira pelo colaborador após finalização do Picking (responsabilidade do cliente), no trajeto as mesmas vão passar pelo portal de leitura e desviar para o processo de conferência (responsabilidade do cliente), após confirmação da conferência o colaborador vai induzir as caixas na esteira vão passar novamente pelo portal de leitura para desviar na rampa correta de acordo com o mapa cadastrado.
A caixa de papelão (full case) vai passar pelo portal de leitura e desviar na rampa de acordo com o mapa cadastrado sem necessidade de conferência.
Os volumes com etiqueta rasurada, sem etiqueta, etiqueta fora da posição (Colada embaixo da caixa) , etiqueta não cadastrada no mapa seguirão para a rampa do rejeito.
Em caso de rampas cheias os volumes também seguiram para a rampa do rejeito.
Volumes que não podem ser induzidos na esteira devido ao tamanho ou peso serão tratados através da estação de trabalho (Rejeito), o colaborador vai ler o volume e o sistema vai indicar em qual rampa o mesmo deve ser levado e na rampa o colaborador vai ler novamente o volume para saber em qual pallet alocar o mesmo.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Scanners  
**Score:** — (semantico) | **ID:** be286ac20eca965e

Cada estação de Put-to-light possuirá 01 (um) scanner (modelo a definir) scanner fixo, ou de gatilho. A função deste dispositivo será disparar os comandos de alocação abertura e fechamento de pallet.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** 64731cbe3a19fa4c

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por ultimo o RG do pallet (numero identificador).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 3b0381a2091741ca

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter e PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS do Maravilhas do Lar e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Maravilhas do Lar (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** e48de7436b048ecf

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funcionam da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 8fdefd48b14fb983

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Put-to-Light e Sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** f40accb23c12037a

O Sorter terá 1 (um) portal de leitura com 1 Câmera na parte superior para leitura de caixas Full Case e 1 Scanner lateral para leitura de caixas de fracionados, 06 (seis) rampas com 6 (seis) Scanners em cada saída e 6 (seis) pallets por saída totalizando 36 (trinta e seis) posições de pallets e 1 (uma) rampa de rejeito.
As caixas plásticas (fracionados) deverão conter uma etiqueta sequencial de cada lado (impressão WMS), e serão induzidas na esteira pelo colaborador após finalização do Picking (responsabilidade do WMS),
Ao passar pelo portal de leitura o sistema verificara as informações dos volumes:
Em caso de pedido não integrado desvia para conferência.
Em caso de pedido integrado e conferido segue para o sorter e será desviado conforme mapa cadastrado.
As caixas de papelão (full case) deverão conter uma etiqueta na parte superior (impressão WMS), serão induzidas na esteira pelo colaborador, e o WMS enviará a integração para a INVENT sem necessidade de conferência, elas vão passar pelo portal de leitura e desviar na rampa de acordo com o mapa cadastrado sem necessidade de conferência.
Os volumes com etiqueta rasurada, sem etiqueta, etiqueta fora da posição, etiqueta não cadastrada no mapa por erro de integração seguirão para a rampa do rejeito.
Em caso de rampas cheias os volumes também seguiram para a rampa do rejeito.
Volumes que não podem ser induzidos na esteira devido ao tamanho ou peso serão tratados como volumes (full case) através da estação de trabalho (Rejeito), o colaborador vai ler o volume e o sistema vai indicar em qual rampa o mesmo deve ser levado e na rampa o colaborador vai ler novamente o volume para saber em qual pallet alocar o mesmo.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Scanners  
**Score:** — (semantico) | **ID:** d383c17699173c59

Cada rampa do sorter possuirá 01 (um) scanner fixo. A função deste dispositivo será disparar os comandos de alocação abertura, alocação dos volumes e fechamento de pallet.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** 424291bafb5f476b

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por ultimo o RG do pallet (numero identificador).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 2c8323110d7ac476

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter e PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS do Maravilhas do Lar e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Maravilhas do Lar (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** cffd6c8c30c271c4

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funcionam da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 4a318c3036d7f82c

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Put-to-Light e Sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** f909e5d2ba5c076c

O Sorter terá 1 (um) portal de leitura com 1 Câmera na parte superior para leitura de caixas Full Case e 1 Scanner lateral para leitura de caixas de fracionados, 06 (seis) rampas com 6 (seis) Scanners em cada saída e 6 (seis) pallets por saída totalizando 36 (trinta e seis) posições de pallets e 1 (uma) rampa de rejeito.
As caixas plásticas (fracionados) deverão conter uma etiqueta sequencial de cada lado (impressão WMS), e serão induzidas na esteira pelo colaborador após finalização do Picking (responsabilidade do WMS),
Ao passar pelo portal de leitura o sistema verificara as informações dos volumes:
Em caso de pedido não integrado desvia para conferência.
Em caso de pedido integrado e conferido segue para o sorter e será desviado conforme mapa cadastrado.
As caixas de papelão (full case) deverão conter uma etiqueta na parte superior (impressão WMS), serão induzidas na esteira pelo colaborador, e o WMS enviará a integração para a INVENT sem necessidade de conferência, elas vão passar pelo portal de leitura e desviar na rampa de acordo com o mapa cadastrado sem necessidade de conferência.
Os volumes com etiqueta rasurada, sem etiqueta, etiqueta fora da posição, etiqueta não cadastrada no mapa por erro de integração seguirão para a rampa do rejeito.
Em caso de rampas cheias os volumes também seguiram para a rampa do rejeito.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Scanners  
**Score:** — (semantico) | **ID:** 74f667c932ccf262

Cada rampa do sorter possuirá 01 (um) scanner fixo. A função deste dispositivo será disparar os comandos de alocação abertura, alocação dos volumes e fechamento de pallet.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** 88346d34a547c9b8

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por último o RG do pallet (número identificador).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 0cdcf1d3c239f539

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter e PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS do Maravilhas do Lar e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Maravilhas do Lar (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 992f3212d9394f4c

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funcionam da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 25cdc573a229deb3

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Put-to-Light e Sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** cddab00664517dd5

O Sorter terá 1 (um) portal de leitura com 1 Câmera na parte superior para leitura de caixas Full Case e 1 Scanner lateral para leitura de caixas de fracionados, 06 (seis) rampas com 6 (seis) Scanners em cada saída e 6 (seis) pallets por saída totalizando 36 (trinta e seis) posições de pallets e 1 (uma) rampa de rejeito.
As caixas plásticas (fracionados) deverão conter uma etiqueta sequencial de cada lado (impressão WMS), e serão induzidas na esteira pelo colaborador após finalização do Picking (responsabilidade do WMS),
Ao passar pelo portal de leitura o sistema verificara as informações dos volumes:
Em caso de pedido não integrado desvia para conferência.
Em caso de pedido integrado e conferido segue para o sorter e será desviado conforme mapa cadastrado.
As caixas de papelão (full case) deverão conter uma etiqueta na parte superior (impressão WMS), serão induzidas na esteira pelo colaborador, e o WMS enviará a integração para a INVENT sem necessidade de conferência, elas vão passar pelo portal de leitura e desviar na rampa de acordo com o mapa cadastrado sem necessidade de conferência.
Os volumes com etiqueta rasurada, sem etiqueta, etiqueta fora da posição, etiqueta não cadastrada no mapa por erro de integração seguirão para a rampa do rejeito.
Em caso de rampas cheias os volumes também seguiram para a rampa do rejeito.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Scanners  
**Score:** — (semantico) | **ID:** 2a0fb07b4590d53c

Cada rampa do sorter possuirá 01 (um) scanner fixo. A função deste dispositivo será disparar os comandos de alocação abertura, alocação dos volumes e fechamento de pallet.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** 0034979d45b04e7f

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por último o RG do pallet (número identificador).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Contingência Sorter  
**Score:** — (semantico) | **ID:** 3cf30cf1de648b53

A operação de "Contingência Sorter" é um procedimento chave dentro do sistema Velox, projetado para lidar com itens que não estão em condições ideais para serem processados pelo sistema de triagem automática (sorter). Essa operação é essencial para garantir a eficiência e a confiabilidade do processo de classificação de itens, mesmo em situações adversas ou excepcionais.
O principal objetivo dessa operação é assegurar que os itens que não atendem aos critérios estabelecidos para o processamento pelo sorter não causem interrupções no fluxo de operação. Itens inadequados podem incluir aqueles com formatos irregulares, tamanhos incompatíveis, entre outros fatores que impeçam a correta identificação e classificação no sorter.
Porém, o sistema Velox estará apto para o funcionamento total, atendendo em sua totalidade de volumes e caixas, independente de tamanho e especificações técnicas, a obrigatoriedade é que o volume a ser triado manualmente ou via sorter, deve estar devidamente integrado no sistema Velox.
Na operação de "Contingência Sorter", operador deverá abrir a posição pallet conforme rua predeterminada pelo cliente.
A operação de “Contingência Sorter”, será utilizada via coletor do cliente, onde o cliente irá acessar o sistema Velox pelo seu coletor.
Lembrando que para isso, a rede (Wi-Fi) do cliente deve estar configurada corretamente para que consiga acessar o sistema Velox via coletor.
Todas as posições da rua devem estar devidamente identificadas com código de barras correspondente a loja.
Operador irá utilizar a tela de “Volumes Exceção” já existente no sistema Velox.
A abertura e fechamento de posição pallet será controlado via tela do coletor, onde o operador visualiza as opções para abertura diretamente no sistema via coletor.
As etiquetas são impressas pelo cliente em sequência ordenada.
Operador verificará as etiquetas que estão no pallet, informando as lojas que pedem esse produto.
Operador, ao chegar na loja informada na etiqueta, deverá realizar a leitura da etiqueta da loja, o sistema Velox solicita a leitura do número do pallet.
Operador inicia leitura dos volumes correspondentes a loja, deve ler a etiqueta de todos os volumes para aquela loja para finalizar.
Ao finalizar, sistema Velox informa o operador que nessa loja foi finalizada.
Verifica a etiqueta da próxima loja, fisicamente se desloca até a loja.
E repete o processo de separação descrito, até se encerre todas as etiquetas das lojas.
Caso o pallet da loja esteja cheio, operador deverá realizar o fechamento desse pallet e abrir um novo para continuar o processo.
As integrações continuarão da mesma forma e momentos, que existe atualmente na operação.
As posições pallets devem estar devidamente identificadas com os nomes das lojas/filiais.
Cada posição atenderá uma única loja/filial.
Operacionalmente:
Operador deverá realizar a leitura do código de barras dos itens que irão ser triados manualmente na operação de “Contingência Sorter” na tela de “Volumes Exceção” do sistema Velox, essa leitura fará a simulação de passagem no sorter e verificação se realmente o produto está devidamente integrado no sistema Velox.
Com o coletor de dados, o operador deverá a posições pallet da loja, antes de iniciar a triagem manual.
Com a posição pallet aberta, deverá acompanhar via coletor os itens esperados na loja conforme realizaram a leitura na tela de “Volumes Exceção”.
Ao realizar a leitura dos volumes do pallet no coletor, Velox indicará a quantidade esperada desse item, operador deverá ler item a item.
Ao realizar a leitura dos itens no coletor, confirma a inclusão do volume na posição pallet da loja.
Com isso o volume é alocado no pallet sistemicamente, até que o operador entenda que o pallet esteja cheio fisicamente.
Ao notar que o pallet está cheio fisicamente, deverá realizar o fechamento do pallet via coletor.
Ao fechar o pallet o sistema Velox, enviará a integração "Aloca PTL" para o WMS (integração existente atualmente).
O volume ao ser alocado no pallet, seja ele por passagem no sorter ou pela operação de contingência, caso passe o mesmo volume no sorter, ele seguirá para rejeito, e assim vice-versa. Pois o sistema já o processou em alguma operação, seja no sorter ou na contingência.
Responsabilidade cliente:
Importante!
Rede: A rede WIFI que o PDV estiver conectado deverá estar na mesma rede do servidor do sorter, para que haja a comunicação entre os equipamentos PDV e Servidor Sorter.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 03a0de6a6cb2ea92

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter e PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS do Maravilhas do Lar e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Maravilhas do Lar (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** f32fff0fbcfe097c

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** e554b332e0143318

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Put-to-Light e Sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** c05c953ed2247a16

O Sorter terá 1 (um) portal de leitura com 1 (uma) câmera na parte superior para leitura de caixas Full Case e 1 (um) scanner lateral para leitura de caixas de fracionados, 08 (oito) rampas com 1 (um) scanners em cada saída e 6 (seis) pallets por saída totalizando 48 (quarenta e oito) posições de pallets e 1 (uma) rampa de rejeito.
As caixas plásticas (fracionados) deverão conter uma etiqueta sequencial de cada lado (impressão WMS), e serão induzidas na esteira pelo colaborador após finalização do Picking (responsabilidade do WMS),
Ao passar pelo portal de leitura o sistema verificara as informações dos volumes:
Em caso de pedido não integrado desvia para conferência.
Em caso de pedido integrado e conferido segue para o sorter e será desviado conforme mapa cadastrado.
As caixas de papelão (full case) deverão conter uma etiqueta na parte superior (impressão WMS), serão induzidas na esteira pelo colaborador, e o WMS enviará a integração para a INVENT sem necessidade de conferência, elas vão passar pelo portal de leitura e desviar na rampa de acordo com o mapa cadastrado sem necessidade de conferência.
Os volumes com etiqueta rasurada, sem etiqueta, etiqueta fora da posição, etiqueta não cadastrada no mapa por erro de integração seguirão para a rampa do rejeito.
Em caso de rampas cheias os volumes também seguiram para a rampa do rejeito.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Scanners  
**Score:** — (semantico) | **ID:** c461860ed9e778d4

Cada rampa do sorter possuirá 01 (um) scanner fixo. A função deste dispositivo será disparar os comandos de alocação abertura, alocação dos volumes e fechamento de pallet.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** aec3db4b3caa01eb

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por último o RG do pallet (número identificador).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Contingência Sorter  
**Score:** — (semantico) | **ID:** b65c624db42a838c

A operação de "Contingência Sorter" é um procedimento chave dentro do sistema Velox, projetado para lidar com itens que não estão em condições ideais para serem processados pelo sistema de triagem automática (sorter). Essa operação é essencial para garantir a eficiência e a confiabilidade do processo de classificação de itens, mesmo em situações adversas ou excepcionais.
O principal objetivo dessa operação é assegurar que os itens que não atendem aos critérios estabelecidos para o processamento pelo sorter não causem interrupções no fluxo de operação. Itens inadequados podem incluir aqueles com formatos irregulares, tamanhos incompatíveis, entre outros fatores que impeçam a correta identificação e classificação no sorter.
Porém, o sistema Velox estará apto para o funcionamento total, atendendo em sua totalidade de volumes e caixas, independente de tamanho e especificações técnicas, a obrigatoriedade é que o volume a ser triado manualmente ou via sorter, deve estar devidamente integrado no sistema Velox.
Na operação de "Contingência Sorter", operador deverá abrir a posição pallet conforme rua predeterminada pelo cliente.
A operação de “Contingência Sorter”, será utilizada via coletor do cliente, onde o cliente irá acessar o sistema Velox pelo seu coletor.
Lembrando que para isso, a rede (Wi-Fi) do cliente deve estar configurada corretamente para que consiga acessar o sistema Velox via coletor.
Todas as posições da rua devem estar devidamente identificadas com código de barras correspondente a loja.
Operador irá utilizar a tela de “Volumes Exceção” já existente no sistema Velox.
A abertura e fechamento de posição pallet será controlado via tela do coletor, onde o operador visualiza as opções para abertura diretamente no sistema via coletor.
As etiquetas são impressas pelo cliente em sequência ordenada.
Operador verificará as etiquetas que estão no pallet, informando as lojas que pedem esse produto.
Operador, ao chegar na loja informada na etiqueta, deverá realizar a leitura da etiqueta da loja, o sistema Velox solicita a leitura do número do pallet.
Operador inicia leitura dos volumes correspondentes a loja, deve ler a etiqueta de todos os volumes para aquela loja para finalizar.
Ao finalizar, sistema Velox informa o operador que nessa loja foi finalizada.
Verifica a etiqueta da próxima loja, fisicamente se desloca até a loja.
E repete o processo de separação descrito, até se encerre todas as etiquetas das lojas.
Caso o pallet da loja esteja cheio, operador deverá realizar o fechamento desse pallet e abrir um novo para continuar o processo.
As integrações continuarão da mesma forma e momentos, que existe atualmente na operação.
As posições pallets devem estar devidamente identificadas com os nomes das lojas/filiais.
Cada posição atenderá uma única loja/filial.
Operacionalmente:
Operador deverá realizar a leitura do código de barras dos itens que irão ser triados manualmente na operação de “Contingência Sorter” na tela de “Volumes Exceção” do sistema Velox, essa leitura fará a simulação de passagem no sorter e verificação se realmente o produto está devidamente integrado no sistema Velox.
Com o coletor de dados, o operador deverá a posições pallet da loja, antes de iniciar a triagem manual.
Com a posição pallet aberta, deverá acompanhar via coletor os itens esperados na loja conforme realizaram a leitura na tela de “Volumes Exceção”.
Ao realizar a leitura dos volumes do pallet no coletor, Velox indicará a quantidade esperada desse item, operador deverá ler item a item.
Ao realizar a leitura dos itens no coletor, confirma a inclusão do volume na posição pallet da loja.
Com isso o volume é alocado no pallet sistemicamente, até que o operador entenda que o pallet esteja cheio fisicamente.
Ao notar que o pallet está cheio fisicamente, deverá realizar o fechamento do pallet via coletor.
Ao fechar o pallet o sistema Velox, enviará a integração "Aloca PTL" para o WMS (integração existente atualmente).
O volume ao ser alocado no pallet, seja ele por passagem no sorter ou pela operação de contingência, caso passe o mesmo volume no sorter, ele seguirá para rejeito, e assim vice-versa. Pois o sistema já o processou em alguma operação, seja no sorter ou na contingência.
Responsabilidade cliente:
Importante!
Rede: A rede WIFI que o PDV estiver conectado deverá estar na mesma rede do servidor do sorter, para que haja a comunicação entre os equipamentos PDV e Servidor Sorter.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 59b064f0a5f3ba40

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter e PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS do Maravilhas do Lar e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Maravilhas do Lar (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 669e368488555baf

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** f0cddd64102d0c38

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter e PTB (Put to Bag) tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação Invent necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que seja disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web. Desta forma, se faz necessário um navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** b89ee381cb9872dd

A integração será executada quando o sensor de saca cheia for acionado, nesse momento a integração enviara as informações dos volumes que foram alocados naquela saca.
Enviara as informações via JSON para um EndPoint disponível no servidor JadLog.
Caso, por algum motivo essa integração não consiga ser executada e enviar as informações para o EndPoint de destino, ela deverá reintegrar automaticamente até que consiga ser executada com sucesso. Para que a operação não seja afetada/parada por esse motivo.
Tabela 1 - Definições da integração

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 6f7ff1da0e0464a8

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Configuração Portal de leitura Toledo  
**Score:** — (semantico) | **ID:** a01a32d3415621ef

Padrão de string do leitor DX8210A, para comunicação das soluções.
Usaremos a etiqueta acima como exemplo.
Códigos a serem lidos:
Código de barras vertical, itens 1,2 e 3, sendo o 3 utilizado somente na smartlabel
Máscaras
1008NNNNNNNNNNVVVBCCCCCCCC
Tamanho 26
Esta máscara começa com o número 1008
N = sequencial, numérico
V = volume, numérico
B = byte, alfanumérico
C = cep, alfanumérico
18NNNNNNNNNNNNVVVBCCCCCCCC
Tamanho 26
Esta máscara começa com o número 18
N = sequencial, numérico
V = volume, numérico
B = byte, alfanumérico
C = cep, alfanumérico
SSSSSSSSSSSSSS$VVVBCCCCCCCC
Tamanho 27
S = shipment id, alfanumérico
$ = caracter definidor da máscara. Fixo.
V = volume, numérico
B = byte, alfanumérico
C = cep, alfanumérico
Código de barras horizontal, item 4
$CCCCCCCCSSSSSSSSSSSSSSAMMVVVB
Tamanho 30
Esta máscara começa com o número $
C = cep, alfanumérico
S = shipment id, alfanumérico
A = serviço, alfanumérico
M = modalidade, numérico
V = volume, numérico
B = byte, alfanumérico
Código enviado
Os portais de leitura JADLOG, hoje estão configurados como “Single Label”, que significa que o primeiro código a ser lido é enviado, sem a necessidade de ler um segundo código. O leitor sempre enviara os códigos entre o header <STX> e o terminador <ETX>.
String DX8210A
Caso o código 1 seja lido:
<STX>1008NNNNNNNNNNVVVBCCCCCCCC <ETX>
Caso o código 2 seja lido:
<STX>18NNNNNNNNNNNNVVVBCCCCCCCC <ETX>
Caso o código 3 seja lido:
<STX> SSSSSSSSSSSSSS$VVVBCCCCCCCC <ETX>
Caso o código 4 seja lido:
<STX>$CCCCCCCCSSSSSSSSSSSSSSAMMVVVB <ETX>
Conclusão:
O leitor terá os quatro possíveis códigos cadastrados em sua memória interna, ao efetuar a leitura dinamicamente, enviara o primeiro dos códigos a serem lidos, um envio de string por volume. Diante das quatro possibilidades de código, acima descrevemos as possíveis strings enviadas pelo leitor ao PLC.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF8.1.1 – Ordem de transporte  
**Score:** — (semantico) | **ID:** 3cedf495575c3cd6

O WCS Velox deve ser capaz de processar ordens de transporte, isto é, processar a saída de um pallet previamente especificado pelo SAP WM.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF8.2.1 – Expedição  
**Score:** — (semantico) | **ID:** 60f3a517fbe2cf30

O WCS Velox deve tratar movimentos de expedição de pallets.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF14 – Ler valores de tags do PLC  
**Score:** — (semantico) | **ID:** a62e8dca359bdcc7

A interface deve ser capaz de ler valores do PLC via o servidor OPC do RSLinx como, por exemplo, status do PLC através dos bits dele.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF15 – Escrever valores em tags do PLC  
**Score:** — (semantico) | **ID:** 323bbbeceab65e4f

A interface deve ser capaz de escrever valores em tags do PLC via servidor OPC do RSLinx, como, por exemplo, setar bits de status do PLC ou escrever dados do pallet que está sendo tratado.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF16 – Traduzir as ações  
**Score:** — (semantico) | **ID:** d130cfe4832accce

A interface deve ser capaz de definir quais ações serão realizadas pelo WCS Velox baseado nos valores das variáveis e status do PLC lidos previamente.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF17 – Traduzir as decisões de movimentação  
**Score:** — (semantico) | **ID:** 5db05569f98a1c5b

A interface deve ser capaz de traduzir decisões de movimentação tomadas pelo WCS Velox em novos valores de variáveis dos PLCs.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF31 – Monitoramento de transações do sistema  
**Score:** — (semantico) | **ID:** 02dfd1bc8967e8c8

O WCS Velox deve permitir a visualização das principais transações executadas dos tipos interface com ERP, interface com PLC, genealogia ou sistema.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF32 – Cadastro  
**Score:** — (semantico) | **ID:** 08b631954ad0bbac

O WCS Velox deve permitir o cadastro de informações base para o funcionamento do sistema. O cadastro consiste de visualização, inserção, remoção e alteração de itens no sistema.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF40 – Logs de erros na troca de mensagem WCS Velox e SAP  
**Score:** — (semantico) | **ID:** 608cd2c82885f362

O WCS Velox deve fornecer informações de logs de possíveis erros nas mensagens/integrações trocadas entre os sistemas WCS Velox e SAP.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF41 – Logs de erros na troca de mensagem WCS Velox e Equipamentos  
**Score:** — (semantico) | **ID:** 5b1ea049320528f6

O WCS Velox deve fornecer informações de logs de possíveis erros nas mensagens trocadas entre o sistema WCS Velox e equipamentos da automação.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Decisões  
**Score:** — (semantico) | **ID:** bef1dc072915ffcd

No WCS Velox, as ações são tratadas em paralelo (aumentando a capacidade de processamento e diminuindo o tempo de resposta do sistema), sendo que ao final do processamento das ações, decisões de movimentação são geradas pelo sistema e enviadas aos PLCs através da interface com equipamentos do sistema para movimentá-los.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada a um ponto de entrega  
**Score:** — (semantico) | **ID:** 0ea75557fed2eb6c

Esta ação é disparada pelo transportador quando a carga chega ao ponto de entrega da linha. Nesta ação, a localização do pallet está inicialmente definida como “Para saída” ou “Para área de picking”. O WCS irá registrar a saída da carga do transportador em seu log de transações, e irá alterar o status da carga no sistema.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Status dos transportadores  
**Score:** — (nome-topico) | **ID:** 01c87f09a0455dd2

Através dessa funcionalidade é possivel verificar o status dos transportadores do armazém.
A opção “Atualizar” permite acompanhar a mudança no status dos equipamentos, sem que seja necessário fechar e abrir a tela novamente.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Modo de operação  
**Score:** — (semantico) | **ID:** d59a6a384a74a1b9

Essa funcionalidade permite configurar o modo de operação do sistema, com as opções “Contingencia” e “On-Line”.
De acordo com a imagem acima, o sistema pode contar com dois modos de operação:
On-Line: operação normal, com troca de mensagens entre WCS Velox – SAP.
Contingência: operação de represamento das mensagens, a serem enviadas posteriormente, quando o modo de operação voltar ao normal.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Log de transação do sistema  
**Score:** — (semantico) | **ID:** 1c9a793903bb7ca0

Através dessa funcionalidade é possível verificar os principais eventos ocorridos durante a operação do sistema.
O sistema permite filtrar por:
Período do registro
Usuário logado durante o registro
Descrição do registro de log
Severidade
INFO
WARNING
ERROR
Tipo de Log
Interface ERP
Interface PLC
Genealogia
Sistema

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Detalhamento e especificação de interfaces com os equipamentos  
**Score:** — (semantico) | **ID:** 99584f1e26210734

Detalhar o funcionamento da comunicação entre o sistema WCS Velox da Invent e os equipamentos de automação existentes no armazém da Brasil Foods / Rio Verde.
Os equipamentos de automação são os responsáveis por todo o transporte de carga dentro do armazém da BR Foods em Rio Verde. Os transportadores são responsáveis pela movimentação dos pallets de produtos no armazém através da movimentação de esteiras, enquanto os transelevadores são responsáveis pela movimentação das cargas entre as células de armazenamento das prateleiras do armazém e as esteiras dos transportadores.
O WCS coordena os movimentos executados pelos equipamentos através de mensagens trocadas com eles, que sinalizam todos os eventos de chegada de carga, conclusão de movimentação e erros de armazenamento. O WCS envia mensagens com as missões a serem executadas pelos equipamentos, de acordo com os pedidos e ordens de venda que chegam ao WCS através de sua interface com o SAP.
Define-se como ação todo evento lógico que é disparado dentro do sistema a partir de uma alteração de TAGs de controle ou mudança de status de equipamentos. Decisão é a resposta lógica gerada pelo sistema para a execução de uma operação pelos equipamentos do armazém. Todo o fluxo de comunicação se dá através de recebimento de ações e envios de decisões por parte do WCS.
Os equipamentos são controlados diretamente pelos PLCs existentes no armazém, responsáveis por controlar todas as variáveis de controle dos equipamentos. Cada PLC é conectado a um OPC Server (ferramenta RSLinx da Rockwell Automation), capaz de disponibilizar as variáveis e áreas de memória dos PLCs no formato de TAGs OPC.
O WCS realiza a interface com os equipamentos de automação através da leitura e escrita de valores nestes TAGs disponibilizados pelo RSLinx, que centraliza toda a comunicação com os equipamentos.
A cada alteração de um TAG de controle de um PLC sendo monitorado pelo WCS, inicia-se o processo de leitura de TAGs de dados e a tradução das informações lidas a partir dos PLCs em mensagens e ações para o processamento das regras de negócio do WCS.
Uma vez processadas as informações, são geradas decisões que, através do gerenciador de equipamentos, são traduzidas para novos valores a serem escritos nos TAGs de controle dos PLCs conectados ao WCS.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Comunicação com equipamentos  
**Score:** — (semantico) | **ID:** 6cdd15ac81b7d28a

Essa seção detalha o funcionamento da comunicação entre o WCS e os equipamentos de controle do armazém.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Mapeamento de ações  
**Score:** — (semantico) | **ID:** abba6b61a277c2e0

Esta seção detalha os mapeamentos de cada uma das ações geradas para o WCS a partir das alterações nos TAGs de controles dos equipamentos ligados aos PLCs.
Nota: as tags de equipamentos de mesmo tipo possuem mesmo nome pois a diferenciação é feita na criação de tópicos do OPC Server. No caso de unidades de equipamentos com mesmo tipo dentro do mesmo equipamento a tag é finalizada por um x, Ex.: SCN_PORTALx, para a identificação da unidade de equipamento.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Mapeamento de decisões  
**Score:** — (semantico) | **ID:** a4d210aaa90f45f5

Esta seção detalha os mapeamentos de cada uma das decisões geradas no WCS e as informações que serão escritas nos TAGs de controles e dados dos equipamentos ligados aos PLCs.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 7381c1cc4b166b53

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC/OPC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC/OPC para depois retornar com a ação para o equipamento.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF8.1.1 – Ordem de transporte  
**Score:** — (semantico) | **ID:** ea4593010122f925

O WCS Velox deve ser capaz de processar ordens de transporte, isto é, processar a saída de um pallet previamente especificado pelo SAP WM.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF8.2.1 – Expedição  
**Score:** — (semantico) | **ID:** c927be9487c67154

O WCS Velox deve tratar movimentos de expedição de pallets.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF14 – Ler valores de tags do PLC  
**Score:** — (semantico) | **ID:** 53e42f12d5bc4f4b

A interface deve ser capaz de ler valores do PLC via o servidor OPC do RSLinx como, por exemplo, status do PLC através dos bits dele.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF15 – Escrever valores em tags do PLC  
**Score:** — (semantico) | **ID:** 58c82af09faf11b9

A interface deve ser capaz de escrever valores em tags do PLC via servidor OPC do RSLinx, como, por exemplo, setar bits de status do PLC ou escrever dados do pallet que está sendo tratado.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF16 – Traduzir as ações  
**Score:** — (semantico) | **ID:** 66d37f84252b507f

A interface deve ser capaz de definir quais ações serão realizadas pelo WCS Velox baseado nos valores das variáveis e status do PLC lidos previamente.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF17 – Traduzir as decisões de movimentação  
**Score:** — (semantico) | **ID:** 751bae2e147baf27

A interface deve ser capaz de traduzir decisões de movimentação tomadas pelo WCS Velox em novos valores de variáveis dos PLCs.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF31 – Monitoramento de transações do sistema  
**Score:** — (semantico) | **ID:** b14617615110d9f4

O WCS Velox deve permitir a visualização das principais transações executadas dos tipos interface com ERP, interface com PLC, genealogia ou sistema.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF32 – Cadastro  
**Score:** — (semantico) | **ID:** f72fd6d6190cc5f0

O WCS Velox deve permitir o cadastro de informações base para o funcionamento do sistema. O cadastro consiste de visualização, inserção, remoção e alteração de itens no sistema.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF40 – Logs de erros na troca de mensagem WCS Velox e SAP  
**Score:** — (semantico) | **ID:** fdb86fb6dcf8e935

O WCS Velox deve fornecer informações de logs de possíveis erros nas mensagens/integrações trocadas entre os sistemas WCS Velox e SAP.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF41 – Logs de erros na troca de mensagem WCS Velox e Equipamentos  
**Score:** — (semantico) | **ID:** 6e96cd2fe5e4c9bf

O WCS Velox deve fornecer informações de logs de possíveis erros nas mensagens trocadas entre o sistema WCS Velox e equipamentos da automação.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Decisões  
**Score:** — (semantico) | **ID:** a23926ab284c6c07

No WCS Velox, as ações são tratadas em paralelo (aumentando a capacidade de processamento e diminuindo o tempo de resposta do sistema), sendo que ao final do processamento das ações, decisões de movimentação são geradas pelo sistema e enviadas aos PLCs através da interface com equipamentos do sistema para movimentá-los.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada a um ponto de entrega  
**Score:** — (semantico) | **ID:** bf7abfe9d5f8e24a

Esta ação é disparada pelo transportador quando a carga chega ao ponto de entrega da linha. Nesta ação, a localização do pallet está inicialmente definida como “Para saída” ou “Para área de picking”. O WCS irá registrar a saída da carga do transportador em seu log de transações, e irá alterar o status da carga no sistema.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Status dos transportadores  
**Score:** — (nome-topico) | **ID:** 87b41b92b373e4f7

Através dessa funcionalidade é possivel verificar o status dos transportadores do armazém.
A opção “Atualizar” permite acompanhar a mudança no status dos equipamentos, sem que seja necessário fechar e abrir a tela novamente.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Modo de operação  
**Score:** — (semantico) | **ID:** 017247e7afd8e50a

Essa funcionalidade permite configurar o modo de operação do sistema, com as opções “Contingencia” e “On-Line”.
De acordo com a imagem acima, o sistema pode contar com dois modos de operação:
On-Line: operação normal, com troca de mensagens entre WCS Velox – SAP.
Contingência: operação de represamento das mensagens, a serem enviadas posteriormente, quando o modo de operação voltar ao normal.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Log de transação do sistema  
**Score:** — (semantico) | **ID:** 5d290d436b4619a1

Através dessa funcionalidade é possível verificar os principais eventos ocorridos durante a operação do sistema.
O sistema permite filtrar por:
Período do registro
Usuário logado durante o registro
Descrição do registro de log
Severidade
INFO
WARNING
ERROR
Tipo de Log
Interface ERP
Interface PLC
Genealogia
Sistema

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Detalhamento e especificação de interfaces com os equipamentos  
**Score:** — (semantico) | **ID:** 0b2c4ce6b667a0e7

Detalhar o funcionamento da comunicação entre o sistema WCS Velox da Invent e os equipamentos de automação existentes no armazém da Brasil Foods / Rio Verde.
Os equipamentos de automação são os responsáveis por todo o transporte de carga dentro do armazém da BR Foods em Rio Verde. Os transportadores são responsáveis pela movimentação dos pallets de produtos no armazém através da movimentação de esteiras, enquanto os transelevadores são responsáveis pela movimentação das cargas entre as células de armazenamento das prateleiras do armazém e as esteiras dos transportadores.
O WCS coordena os movimentos executados pelos equipamentos através de mensagens trocadas com eles, que sinalizam todos os eventos de chegada de carga, conclusão de movimentação e erros de armazenamento. O WCS envia mensagens com as missões a serem executadas pelos equipamentos, de acordo com os pedidos e ordens de venda que chegam ao WCS através de sua interface com o SAP.
Define-se como ação todo evento lógico que é disparado dentro do sistema a partir de uma alteração de TAGs de controle ou mudança de status de equipamentos. Decisão é a resposta lógica gerada pelo sistema para a execução de uma operação pelos equipamentos do armazém. Todo o fluxo de comunicação se dá através de recebimento de ações e envios de decisões por parte do WCS.
Os equipamentos são controlados diretamente pelos PLCs existentes no armazém, responsáveis por controlar todas as variáveis de controle dos equipamentos. Cada PLC é conectado a um OPC Server (ferramenta RSLinx da Rockwell Automation), capaz de disponibilizar as variáveis e áreas de memória dos PLCs no formato de TAGs OPC.
O WCS realiza a interface com os equipamentos de automação através da leitura e escrita de valores nestes TAGs disponibilizados pelo RSLinx, que centraliza toda a comunicação com os equipamentos.
A cada alteração de um TAG de controle de um PLC sendo monitorado pelo WCS, inicia-se o processo de leitura de TAGs de dados e a tradução das informações lidas a partir dos PLCs em mensagens e ações para o processamento das regras de negócio do WCS.
Uma vez processadas as informações, são geradas decisões que, através do gerenciador de equipamentos, são traduzidas para novos valores a serem escritos nos TAGs de controle dos PLCs conectados ao WCS.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Comunicação com equipamentos  
**Score:** — (semantico) | **ID:** a0ccbd13dfc0ed51

Essa seção detalha o funcionamento da comunicação entre o WCS e os equipamentos de controle do armazém.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Mapeamento de ações  
**Score:** — (semantico) | **ID:** 8ecc1fa0b2953e3f

Esta seção detalha os mapeamentos de cada uma das ações geradas para o WCS a partir das alterações nos TAGs de controles dos equipamentos ligados aos PLCs.
Nota: as tags de equipamentos de mesmo tipo possuem mesmo nome pois a diferenciação é feita na criação de tópicos do OPC Server. No caso de unidades de equipamentos com mesmo tipo dentro do mesmo equipamento a tag é finalizada por um x, Ex.: SCN_PORTALx, para a identificação da unidade de equipamento.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Mapeamento de decisões  
**Score:** — (semantico) | **ID:** 863e6257a00a5e27

Esta seção detalha os mapeamentos de cada uma das decisões geradas no WCS e as informações que serão escritas nos TAGs de controles e dados dos equipamentos ligados aos PLCs.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor  
**Score:** — (nome-topico) | **ID:** 740cb01d9ce8cfd3

O fluxo de comunicação do servidor com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC/OPC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC/OPC para depois retornar com a ação para o equipamento.

---
**Origem:** [I22.1732] 2023 — `PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 924fa0f380049b59

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I22.1732] 2023 — `PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** f58e68d60b12f659

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 411370eeaa6e8c25

O O Sorter é projetado para processar até 4.000 volumes por hora, com base na eficiência da separação (Full Case, Fracionado, Picking Cart). Ele é composto por um portal de leitura com 2 faces de leitura (lateral) e topo, que garantem a leitura dos volumes, desde que as etiquetas estejam posicionadas nas laterais das caixas. Essas faces de leitura permitem que o WCS realize o checkout para pedidos do tipo Full Case e Fracionado.
O Sorter conta com 8 rampas de saída para o transporte dos volumes e 1 rampa exclusiva para rejeito, totalizando 9 rampas. Cada uma das rampas de saída de transporte é equipada com um leitor de código de barras e um conversor, totalizando 8 leitores e 8 conversores, responsáveis por capturar as informações das etiquetas e fazer a comunicação com o sistema WCS.
O processo no Sorter inicia com a leitura da caixa no portal de leitura. O sistema captura a etiqueta da caixa, que é enviada para o Controlador Lógico Programável (CLP). O CLP, então, encaminha as informações para o WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, informando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme os PTLs ativos e os respectivos pedidos, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos no sorter devem conter uma etiqueta gerada pelo WCS, que inclui um QR Code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão direcionados automaticamente para o rejeito ou reprocessamento, de acordo com as regras de operação definidas.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 47ce9714a9a22f69

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Sorter e PTL Put-To-Light, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 052e2e3905aaaeaf

O sistema de Sorter consiste em cinco saídas (com 05 rotas por saída) e uma área de rejeito (no-read), onde o sistema Velox lê	o código da caixa e a direciona automaticamente para a saída correspondente. Para isso, a TPC deve fornecer um mapa das lojas/rampas e os operadores devem abrir todas as posições dos paletes antes de iniciar a operação, executando a rotina de abertura PTL.
Se a etiqueta estiver ilegível, posicionada no lado oposto aos scanners ou de outra forma que impeça a identificação, a caixa será encaminhada diretamente para a área de rejeito. O tratamento das caixas rejeitadas será realizado dentro do sistema TPC.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 3a245df7be11509e

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter e PTL Put-To-Light, tendo como papel fundamental a interface entre o sistema ERP/WMS da TPC/SIEMENS e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados dedicado, para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela TPC/SIEMENS (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 7d0cfd9bae9e77d8

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Sorter e PTL Put-To-Light, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 5e3481429cd144ac

O sistema de Sorter consiste em cinco saídas (com 05 rotas por saída) e uma área de rejeito (no-read), onde o sistema Velox lê	o código da caixa e a direciona automaticamente para a saída correspondente. Para isso, a TPC deve fornecer um mapa das lojas/rampas e os operadores devem abrir todas as posições dos paletes antes de iniciar a operação, executando a rotina de abertura PTL.
Se a etiqueta estiver ilegível, posicionada no lado oposto aos scanners ou de outra forma que impeça a identificação, a caixa será encaminhada diretamente para a área de rejeito. O tratamento das caixas rejeitadas será realizado dentro do sistema TPC.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 83e98e6722e9c848

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter e PTL Put-To-Light, tendo como papel fundamental a interface entre o sistema ERP/WMS da Eurofarma e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados dedicado, para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Eurofarma (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I23] 2023 — `I23-1604 - PROJETO CARDEX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Conferência Pedido  
**Score:** — (semantico) | **ID:** ccdd3f62407a0dd2

Operador deverá induzir o pedido na esteira para que o pedido seja lido pelo portal de leitura e faça as validações necessárias para aprovar ou reprovar o pedido.
No portal de leitura, teremos 1 (um) leitor de código de barras e 1 (um) receptor de RFID.
Leitor de código de barras
Realiza a leitura do código de barras do pedido;
Realiza a leitura do código de barras da caixa plástica (BIN), em casos que o pedido esteja vinculado a um BIN.
Receptor RFID
Realiza a captura de todos os itens dentro da caixa do pedido.
No sistema Velox, operador poderá consultar os pedidos integrados e os detalhes desses pedidos, e acompanhar as integrações estão corretas antes de induzir os pedidos na esteira.
Após a passagem do pedido pelo portal de leitura, o operador poderá consultar no sistema Velox o status desse pedido.
Se ele foi lido corretamente, se foi aprovado ou negado devido à falta de itens.

---
**Origem:** [I23] 2023 — `I23-1604 - PROJETO CARDEX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Operacional  
**Score:** — (semantico) | **ID:** e43d5a370e00378b

Operador deve induzir o volume do pedido na esteira para que o volume seja transportado automaticamente pela esteira até que seja lido no portal de leitura.
Ao ser lido no portal, o leitor de código de barras fará a leitura dó código de barras do pedido ou caixa plástica, e o receptor de RFID, captura todos os itens dentro desse volume e etiquetados com etiqueta RFID.
Com isso, o sistema fará a conferência do volume desse pedido, caso as informações lidas e capturadas estejam de acordo com as informações integradas anteriormente no sistema Velox.
O sinaleiro após o portal de leitura indicará por cor o status do volume lido no sorter.
O sinaleiro é composto por 3 (três) cores: Verde, amarelo e vermelho.
Caso o volume lido no portal de leitura esteja de acordo com as informações recebidas na integração.
O led Verde do sinaleiro deve ser aceso indicando ao operador que o volume do pedido foi aprovado e está de acordo.
Caso o volume lido no portal de leitura não esteja de acordo com as informações recebidas na integração.
O led Vermelho do sinaleiro deve ser aceso indicando ao operador que o volume do pedido foi reprovado devido a alguma inconsistência nas informações.
Caso no portal de leitura, leitor não realize a leitura do código de barras do pedido ou caixa plástica
(NO READ)
O led Amarelo do sinaleiro deve ser aceso indicando ao operador que o volume do pedido não teve leitura no portal. Operador deverá analisar a qualidade da etiqueta e código de barras, fazer os ajustes necessários e induzir novamente na esteira.
Caso o sensor de rampa cheia seja acionado devido a rampa estar com muitos volumes, os três leds do sinaleiro (Verde, amarelo e vermelho), nesse caso a esteira para até que o sensor seja normalizado.

---
**Origem:** [I23] 2023 — `I23-1604 - PROJETO CARDEX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Dimensões  
**Score:** — (semantico) | **ID:** bb9b9d676821acf2

Não está no escopo do projeto o equipamento dimensionador, para aferir as dimensões dos volumes no portal de leitura.

---
**Origem:** [I23] 2023 — `I23-1604 - PROJETO CARDEX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Balança  
**Score:** — (nome-topico) | **ID:** f75048154f796d1c

Não está no escopo do projeto o equipamento balança, para aferir o peso dos volumes.

---
**Origem:** [I23] 2023 — `I23-1604 - PROJETO CARDEX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Consulta Status  
**Score:** — (semantico) | **ID:** aec0ec7d7190830a

No sistema Velox, o operador poderá consultar o status dos volumes dos pedidos no portal de leitura e seu conteúdo, conteúdo recebido na integração e conteúdo recebido nas leituras do código de barras e etiquetas RFID.
Com isso, operador terá a visibilidade dos pedidos integrados e caso necessário fazer algum ajuste e integrar novamente o pedido em específico.

---
**Origem:** [I23] 2023 — `I23.1604 - ESPECIFICACAO DE SOFTWARE - PROJETO CARDEX 2024.docx`  
**Heading:** Conferência Pedido  
**Score:** — (semantico) | **ID:** a7dde7b3341225a8

Operador deverá induzir o pedido na esteira para que o pedido seja lido pelo portal de leitura e faça as validações necessárias para aprovar ou reprovar o pedido.
No portal de leitura, teremos 1 (um) leitor de código de barras e 1 (um) receptor de RFID.
Leitor de código de barras
Realiza a leitura do código de barras da caixa plástica (BIN) vinculada a um pedido;
Receptor RFID
Realiza a captura de todos os itens dentro da caixa do pedido.
No sistema Velox, operador poderá consultar os pedidos integrados e os detalhes de itens desses pedidos/volumes, e acompanhar se as integrações estão corretas antes de induzir os pedidos na esteira.
Após a passagem do pedido pelo portal de leitura, o operador poderá consultar no sistema Velox o status desse pedido, como por exemplo se foi identificado todos os itens do volume/pedido no portal de leitura.
Se ele foi lido corretamente, se foi aprovado ou negado devido à falta de itens.

---
**Origem:** [I23] 2023 — `I23.1604 - ESPECIFICACAO DE SOFTWARE - PROJETO CARDEX 2024.docx`  
**Heading:** Operacional  
**Score:** — (semantico) | **ID:** 0e0d19734ae18859

Operador deve induzir o volume do pedido na esteira para que o volume seja transportado automaticamente pela esteira até que seja lido no portal de leitura.
Ao ser lido no portal, o leitor de código de barras fará a leitura dó código de barras do pedido ou caixa plástica, e o receptor de RFID, captura todos os itens dentro desse volume e etiquetados com etiqueta RFID.
Com isso, o sistema fará a conferência do volume desse pedido, caso as informações lidas e capturadas estejam de acordo com as informações integradas anteriormente no sistema Velox.
O sinaleiro após o portal de leitura indicará por cor o status do volume lido no sorter.
O sinaleiro é composto por 3 (três) cores: Verde, amarelo e vermelho.
Caso o volume lido no portal de leitura esteja de acordo com as informações recebidas na integração.
O led Verde do sinaleiro deve ser aceso indicando ao operador que o volume do pedido foi aprovado e está de acordo.
Caso o volume lido no portal de leitura não esteja de acordo com as informações recebidas na integração.
O led Vermelho do sinaleiro deve ser aceso indicando ao operador que o volume do pedido foi reprovado devido a alguma inconsistência nas informações.
Caso no portal de leitura, leitor não realize a leitura do código de barras do pedido ou caixa plástica
(NO READ)
O led Amarelo do sinaleiro deve ser aceso indicando ao operador que o volume do pedido não teve leitura no portal. Operador deverá analisar a qualidade da etiqueta e código de barras, fazer os ajustes necessários e induzir novamente na esteira.
Caso o sensor de rampa cheia seja acionado devido a rampa estar com muitos volumes, os três leds do sinaleiro (Verde, amarelo e vermelho), nesse caso a esteira para até que o sensor seja normalizado.

---
**Origem:** [I23] 2023 — `I23.1604 - ESPECIFICACAO DE SOFTWARE - PROJETO CARDEX 2024.docx`  
**Heading:** Dimensões  
**Score:** — (semantico) | **ID:** 02806ac71b1f88a3

Não está no escopo do projeto o equipamento dimensionador, para aferir as dimensões dos volumes no portal de leitura.

---
**Origem:** [I23] 2023 — `I23.1604 - ESPECIFICACAO DE SOFTWARE - PROJETO CARDEX 2024.docx`  
**Heading:** Balança  
**Score:** — (nome-topico) | **ID:** ace21587a6682cef

Não está no escopo do projeto o equipamento balança, para aferir o peso dos volumes.

---
**Origem:** [I23] 2023 — `I23.1604 - ESPECIFICACAO DE SOFTWARE - PROJETO CARDEX 2024.docx`  
**Heading:** Consulta Status  
**Score:** — (semantico) | **ID:** a580ada941eb7599

No sistema Velox, o operador poderá consultar o status dos volumes dos pedidos no portal de leitura e seu conteúdo, conteúdo recebido na integração e conteúdo recebido nas leituras do código de barras e etiquetas RFID.
Com isso, operador terá a visibilidade dos pedidos integrados e caso necessário fazer algum ajuste e integrar novamente o pedido em específico.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 52420cf54479f0e8

O projeto será dividido em 2 (dois) Sorters de expedição, um em cada nível, em que cada um deles será composto por 10 rampas, ou seja, um total de 20 rampas. Todas as saídas serão designadas às transportadoras.
Na indução de volumes, o operador induz o volume na esteira e com base nas informações recebidas pelas integrações, o desvio é realizado para a rampa designada.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** 02c0ef3e7a15bd48

Em caso de um erro no processo de sorter, como por exemplo, um volume ou caixa ser encaminhado para uma gaiola já fechada, uma barragem é acionada ao final da rampa e evita que o produto caia na gaiola, garantindo a organização e integridade dos produtos.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Sinaleiro  
**Score:** — (semantico) | **ID:** 55fd46c2e30cf880

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Aceso: Indica que a caixa não está na onda ou não
pertence à rampa em questão.
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
Piscante: Sem comunicação com o sistema.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 2af09f04398201ee

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Shein (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 626e55345b436b09

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 147294f5a3115ce1

O projeto será dividido em 2 (dois) Sorters de expedição, um em cada nível, em que cada um deles será composto por 10 rampas, ou seja, um total de 20 rampas. Todas as saídas serão designadas às transportadoras.
Na indução de volumes, o operador induz o volume na esteira e com base nas informações recebidas pelas integrações, o desvio é realizado para a rampa designada.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** 2a031743a7eb16fe

Em caso de um erro no processo de sorter, como por exemplo, um volume ou caixa ser encaminhado para uma gaiola já fechada, uma barragem é acionada ao final da rampa e evita que o produto caia na gaiola, garantindo a organização e integridade dos produtos.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Sinaleiro  
**Score:** — (semantico) | **ID:** 263e6b65f4057917

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Aceso: Indica que a caixa não está na onda ou não
pertence à rampa em questão.
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
Piscante: Sem comunicação com o sistema.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 2ac8162f6606dfa2

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Shein (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 739d5e975cf4bab2

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** f246deb21b74c691

O projeto será dividido em 2 (dois) Sorters de expedição, um em cada nível, em que cada um deles será composto por 10 rampas, ou seja, um total de 20 rampas. Todas as saídas serão designadas às transportadoras.
Na indução de volumes, o operador induz o volume na esteira e com base nas informações recebidas pelas integrações, o desvio é realizado para a rampa designada.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** cc60cbfb09cb7a4f

Em caso de um erro no processo de sorter, como por exemplo, um volume ou caixa ser encaminhado para uma gaiola já fechada, uma barragem é acionada ao final da rampa e evita que o produto caia na gaiola, garantindo a organização e integridade dos produtos.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Sinaleiro  
**Score:** — (semantico) | **ID:** b18e316599b69b7f

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Aceso: Indica que a caixa não está na onda ou não
pertence à rampa em questão.
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
Piscante: Sem comunicação com o sistema.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 3c0a03cc8901b98e

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Shein (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** e79faf488fa2af7f

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 43af7ed50a14c49a

O sorter será dividido em 2 (duas) esteiras de expedição, um em cada nível, em que cada um deles será composto por 10 rampas, ou seja, um total de 20 rampas. Todas as saídas serão designadas às transportadoras.
Na indução de volumes, o operador induz o volume etiquetado na esteira e com base nas informações obtidas na integração Order, o desvio é realizado para a rampa designada.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Erro  
**Score:** — (semantico) | **ID:** 056049d634983b11

Em caso de um erro no processo de sorter, como por exemplo, um volume ou caixa ser encaminhado para uma gaiola já fechada, uma barragem é acionada ao final da rampa e evita que o produto caia na gaiola, garantindo a organização e integridade dos produtos.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Sinaleiro  
**Score:** — (semantico) | **ID:** 2d76cb2772bd085c

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Aceso: Indica que a caixa não está na onda ou não
pertence à rampa em questão.
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
Piscante: Sem comunicação com o sistema.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 88b0bfae11578cdb

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Shein (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 271dd095e6d195ad

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 3b86e11332e5dc40

O sorter fará o desvio dos volumes conforme o mapa ativo no Velox.
O sorter é composto por 8 (oito) saídas e cada saída compõe 4 (quatro) posições PTL (Put-To-Light), cada posição PTL terá 1 (um) led 3 (três) dígitos sendo assim cada saída pode ter até 4 (quatro) rotas de destino diferentes.
Cada saída deve contém um leitor de código de barras.
Ao iniciar a operação, o operador deverá abrir a posição pallet para conseguir alocar os volumes no pallet aberto.
Operador não conseguira alocar o volume no pallet antes de realizar a abertura da posição pallet.
Operador ao receber o volume na saída do sorter, deverá realizar a leitura do volume com o leitor de código de barras, e o led da posição pallet deverá acender conforme o mapa ativo no sistema.
Operador aloca o volume no pallet onde está com o led aceso e aperta o botão aceso para que se apague e confirma que o volume foi alocado.
Ao encher o pallet fisicamente o operador realiza o fechamento do pallet.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** a818cae449f24b1c

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Separação, sorter e PTL (Put-To-Light), tendo como papel fundamental a interface entre o sistema WMS da cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados dedicado, para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1[1].docx`  
**Heading:** Pedidos (Remessa)  
**Score:** — (semantico) | **ID:** c59b72ffd34fc1ee

WMS  MFC

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1[1].docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 97fd5cf0699edfed

O Sorter possui 4 saídas, a primeira sendo direcionada para rejeito e as outras três com rotas para onde os produtos serão direcionados e começar o processo de PTL.
Capacidade máxima de separação do sorter: 2500 caixas por hora.
Todas as rampas possuem um scanner que será de responsabilidade da DellaVolpe.
Todas as rampas possuem um sinaleiro cada.
Produtos que podem ser incluídos por fora do Sorter por não poder passar na esteira, serão bipados diretamente em uma tela onde indicará qual PTL o mesmo deve ser alocado.
Caso ocorra NoRead, a caixa será direcionada direto para a estação de rejeito. Se a caixa não estiver integrada no sistema, será direcionada para o processo de recirculação.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1[1].docx`  
**Heading:** Sinaleiro  
**Score:** — (semantico) | **ID:** fdde9e0b18ac4781

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Aceso: Indica que a caixa não está na onda ou não
pertence à rampa em questão. Também pode indicar
que a posição PTL não está aberta.
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
Piscante: Sem comunicação com o sistema.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** b16ec58d4dd4e025

O sorter possui 1 (uma) indução, 4 (quatro) rampas de  saída e um portal com balança, cubômetro e scanner.
As rampas que possuem PTL, terão um scanner que será de responsabilidade da DellaVolpe.
Todas as rampas possuem um sinaleiro.
Produtos que podem ser incluídos por fora do Sorter por não poder passar na esteira, serão bipados em uma tela do sistema MFC, onde será direcionado para o estoque.
Caso ocorra NoRead ou o volume não estiver integrado no sistema, a caixa será direcionada direto para a estação de rejeito.
Imagem ilustrativa
NOTA: Para atividades na disposição sistêmica e físicas é de responsabilidade  da operação o processo de alocação dos volumes nos PTLs.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 3f115c52af41d4a8

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas das Linhas de Separação e Sorter, tendo como papel fundamental a interface entre os sistemas WMS/KAIZEN (Cliente) com WCS Invent.
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
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 7af4e8e617c3f768

O sorter fará o desvio dos volumes conforme o mapa ativo no WCS.
O sorter terá um portal com 2 (duas) faces (lados) de leitura, uma de topo e uma lateral, contendo balança e dimensionador para a verificação de pesagem e aferição de cubagem de todos os volumes com passagem no sorter.
Serão 4 (quatro) saídas para vincular os clientes e 1 (uma) saída para rejeito totalizando 5 (cinco) rampas ao todo, cada rampa terá 1 PDV e elas têm a possibilidade de ter 4 (quatro) clientes vinculadas a elas, sendo 1 (um) pallet por posição PTM , sendo no total 16 pallets em todas as 4 saídas do sorter.
O processo do sorter consistem na leitura do volume/caixa no portal de leitura onde a automação (CLP) informa ao WCS WCS qual volume (pedido) que acaba de passar no portal de leitura, o WCS por sua vez verifica em sua base de dados as informações referentes ao pedido em questão e devolve a informação de desvio daquele pedido para automação (CLP) que realiza a tarefa (física) de desvio na rampa indicada.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** PTM (Put to Monitor)  
**Score:** — (semantico) | **ID:** 5c68a7f50f1eeb33

De acordo com o mapa de Sorter ativo o WCS automaticamente realiza a abertura das posições de PTM.
Após o desvio dos volumes/caixas nas suas respectivas rampas, temos o método de separação do conceito de Put To Monitor, onde com um conjunto de hardware (PDV e de mão) o operador informa qual volume está na ponta da rampa de saída através da leitura do código de barras do volume com scanner, e o WCS ao receber a informação do volume avalia em sua base de dados a qual posição (pallet) do PTM está vinculada ao cliente que atende o volume que está sendo tratado no momento, indicando em um PDV qual a posição do pallet que o volume pertence, essa informação de posição consiste em um sistema de cores onde o WCS ira indicar no PDV qual é a posição contornando com a cor padrão daquela posição.
Marcações no chão com as cores padrões serão disponibilizadas pelo cliente para facilitar a identificação do time operacional.
Alocação de Volumes
O operador só será permitido alocar qualquer volume quando estiver realizado o Login na rampa.
O crachá dos operadores que estarão localizados nas saídas das rampas deve conter obrigatoriamente 7 dígitos.
O operador pega o volume na rampa, realiza a leitura do código de barras onde o WCS indicará a posição do produto em uma das 4 posições do put to monitor (PDV), todo o quadrado da posição ficará marcado na cor da posição na tela até o operador realizar a leitura do código da posição do pallet que deve estar fisicamente visível, assim confirmando que o operador foi até o pallet e alocou a caixa no mesmo, como indicado acima teremos uma identificação por cores para facilitar o processo de identificação do usuário.
Caso o usuário informe o número de pallet divergente (errado) ao número de pallet esperado na PDV o WCS informará que o pallet informado não é o destino do volume, assim o operador deve indicar o número correto do pallet.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 85cb4acd6b3d50e7

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Separação, sorter e PTM (Put-To-Monitor), tendo como papel fundamental a interface entre o sistema WMS/KAIZEN da cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados dedicado, para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 26b29401e172a921

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas das Linhas de Separação e Sorter, tendo como papel fundamental a interface entre os sistemas WMS/KAIZEN (Cliente) com WCS Invent.
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
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Crosscheck  
**Score:** — (semantico) | **ID:** ea6a4cdedc8f436b

A automação da Invent realiza a validação do peso de cada volume por meio de uma balança posicionada antes do portal do sorter. Para que esse processo funcione corretamente, é necessário que o WMS/KAIZEN envie, na integração, o peso unitário de cada item que compõe o volume.
Com base nessas informações, o WCS é responsável por realizar o cadastro da Caixa (utilizando os códigos já enviados na integração), de forma que o peso total estimado do volume possa ser comparado ao peso real aferido na balança. Para essa finalidade, o WCS disponibilizará uma tela específica para cadastro de tolerâncias de peso, permitindo a configuração de faixas aceitáveis de variação.
Caso o peso aferido esteja fora da faixa de tolerância configurada, o volume será automaticamente encaminhado ao rejeito. O cliente poderá consultar os volumes rejeitados e seus respectivos motivos através da tela “Rejeitos Sorter”, a partir da qual poderá realizar a análise e a tratativa necessária.
Logo antes do portal de leitura do sorter, cada volume passa obrigatoriamente por uma balança que realiza a aferição do peso real da caixa. O objetivo dessa etapa é validar se o peso informado pelo WMS/KAIZEN — calculado com base no peso unitário de cada item — está coerente com o peso aferido fisicamente.
Para isso, o WCS realiza o cadastro de cada caixa, utilizando os dados previamente integrados, e calcula o peso estimado de cada volume. A comparação entre peso estimado e peso real é feita automaticamente, respeitando as faixas de tolerância configuradas no sistema. A configuração dessas tolerâncias pode ser feita por meio de uma tela específica no WCS, onde o operador ou gestor define os limites aceitáveis de variação.
Caso o peso da caixa esteja fora do intervalo permitido, o volume é automaticamente desviado para a área de rejeito. O sistema registra o motivo da rejeição e disponibiliza essas informações em uma tela chamada “Rejeitos Sorter”. Nessa tela, os operadores ou gestores poderão consultar os volumes rejeitados, identificar os motivos e realizar as tratativas necessárias para que o pedido possa ser corrigido e reprocessado corretamente.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 8cd5e7eff084cd5b

O sorter fará o desvio dos volumes conforme o mapa ativo no WCS.
O sorter terá um portal com 2 (duas) faces (lados) de leitura, uma de topo e uma lateral, contendo balança e dimensionador para a verificação de pesagem e aferição de cubagem de todos os volumes com passagem no sorter.
A balança irá realizar um “Crosscheck” com base no ponto 8 citado acima.
Serão 4 (quatro) saídas para vincular os clientes e 1 (uma) saída para rejeito totalizando 5 (cinco) rampas ao todo, cada rampa terá 1 PDV e elas têm a possibilidade de ter 4 (quatro) clientes vinculadas a elas, sendo 1 (um) pallet por posição PTM, sendo no total 16 pallets em todas as 4 saídas do sorter.
O processo do sorter consistem na leitura do volume/caixa no portal de leitura onde a automação (CLP) informa ao WCS WCS qual volume (pedido) que acaba de passar no portal de leitura, o WCS por sua vez verifica em sua base de dados as informações referentes ao pedido em questão e devolve a informação de desvio daquele pedido para automação (CLP) que realiza a tarefa (física) de desvio na rampa indicada.
O sorter é responsável por direcionar os volumes aos seus destinos corretos conforme o mapa de desvio configurado no WCS. O Sorter conta com um portal de leitura composto por duas faces — uma superior e uma lateral — que fazem a leitura do código de barras da caixa. Além disso, há uma balança e um dimensionador que verificam o peso e a cubagem de cada volume no momento em que passam pelo portal.
A partir do momento em que o volume é lido, o CLP da esteira comunica ao WCS qual caixa está passando. O WCS consulta suas informações internas e retorna para o CLP o destino apropriado, indicando em qual rampa a caixa deve ser desviada. Todo esse processo ocorre em tempo real, garantindo que cada volume seja direcionado com precisão.
O sorter possui 5 (cinco) rampas: 4 (quatro) rampas destinadas à saída de volumes para clientes e 1 (uma) rampa exclusiva para rejeitos. Cada rampa conta com um PDV e pode operar com até quatro clientes simultaneamente, totalizando uma capacidade de 16 posições de pallet (PTM). Cada posição do PTM está associada a um cliente e será utilizada para alocar as caixas até que o pallet seja fechado.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** PTM (Put to Monitor)  
**Score:** — (semantico) | **ID:** 89ed37d8e6bbfac3

De acordo com o mapa de Sorter ativo o WCS automaticamente realiza a abertura das posições de PTM.
Após o desvio dos volumes/caixas nas suas respectivas rampas, temos o método de separação do conceito de Put To Monitor, onde com um conjunto de hardware (PDV e de mão) o operador informa qual volume está na ponta da rampa de saída através da leitura do código de barras do volume com scanner, e o WCS ao receber a informação do volume avalia em sua base de dados a qual posição (pallet) do PTM está vinculada ao cliente que atende o volume que está sendo tratado no momento, indicando em um PDV qual a posição do pallet que o volume pertence, essa informação de posição consiste em um sistema de cores onde o WCS irá indicar no PDV qual é a posição contornando com a cor padrão daquela posição.
Marcações no chão com as cores padrões serão disponibilizadas pelo cliente para facilitar a identificação do time operacional.
Assim que o sorter direciona a caixa para uma das rampas, inicia-se o processo de Put to Monitor. O operador posicionado na ponta da rampa deve realizar a leitura do código de barras da caixa utilizando o scanner. Ao receber essa informação, o WCS verifica em sua base qual cliente está vinculado àquele volume e qual posição do pallet deve ser utilizada.
O sistema então exibe no PDV a posição exata em que a caixa deve ser colocada, destacando a área com uma borda colorida. Essa mesma cor estará marcada fisicamente no chão da área operacional, facilitando a identificação da posição correta por parte do operador.
Esse método de separação orientada garante que os volumes sejam organizados de maneira eficiente e evita alocações incorretas. A combinação da leitura do volume com a indicação visual reduz erros e acelera o processo de construção dos pallets.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 981a0e13562b44b8

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Separação, sorter e PTM (Put-To-Monitor), tendo como papel fundamental a interface entre o sistema WMS/KAIZEN da cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados dedicado, para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** b901f644f187912d

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas das Linhas de Separação e Sorter, tendo como papel fundamental a interface entre os sistemas WMS/KAIZEN (Cliente) com WCS Invent.
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
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Crosscheck  
**Score:** — (semantico) | **ID:** f6ae4ebe2e5d6e11

A automação da Invent realiza a validação do peso de cada volume por meio de uma balança posicionada antes do portal do sorter. Para que esse processo funcione corretamente, é necessário que o WMS/KAIZEN envie, na integração, o peso unitário de cada item que compõe o volume.
Com base nessas informações, o WCS é responsável por realizar o cadastro da Caixa (utilizando os códigos já enviados na integração), de forma que o peso total estimado do volume possa ser comparado ao peso real aferido na balança. Para essa finalidade, o WCS disponibilizará uma tela específica para cadastro de tolerâncias de peso, permitindo a configuração de faixas aceitáveis de variação.
Caso o peso aferido esteja fora da faixa de tolerância configurada, o volume será automaticamente encaminhado ao rejeito. O cliente poderá consultar os volumes rejeitados e seus respectivos motivos através da tela “Rejeitos Sorter”, a partir da qual poderá realizar a análise e a tratativa necessária.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 1c4e843dbf58a196

O sorter fará o desvio dos volumes conforme o mapa ativo no WCS.
O sorter terá um portal com 2 (duas) faces (lados) de leitura, uma de topo e uma lateral, contendo balança e dimensionador para a verificação de pesagem e aferição de cubagem de todos os volumes com passagem no sorter.
A balança irá realizar um “Crosscheck” com base no ponto 8 citado acima.
Serão 4 (quatro) saídas para vincular os clientes e 1 (uma) saída para rejeito totalizando 5 (cinco) rampas ao todo, cada rampa terá 1 PDV e elas têm a possibilidade de ter 4 (quatro) clientes vinculadas a elas, sendo 1 (um) pallet por posição PTM , sendo no total 16 pallets em todas as 4 saídas do sorter.
O processo do sorter consistem na leitura do volume/caixa no portal de leitura onde a automação (CLP) informa ao WCS WCS qual volume (pedido) que acaba de passar no portal de leitura, o WCS por sua vez verifica em sua base de dados as informações referentes ao pedido em questão e devolve a informação de desvio daquele pedido para automação (CLP) que realiza a tarefa (física) de desvio na rampa indicada.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** PTM (Put to Monitor)  
**Score:** — (semantico) | **ID:** 80d6e3da7e230ca1

De acordo com o mapa de Sorter ativo o WCS automaticamente realiza a abertura das posições de PTM.
Após o desvio dos volumes/caixas nas suas respectivas rampas, temos o método de separação do conceito de Put To Monitor, onde com um conjunto de hardware (PDV e de mão) o operador informa qual volume está na ponta da rampa de saída através da leitura do código de barras do volume com scanner, e o WCS ao receber a informação do volume avalia em sua base de dados a qual posição (pallet) do PTM está vinculada ao cliente que atende o volume que está sendo tratado no momento, indicando em um PDV qual a posição do pallet que o volume pertence, essa informação de posição consiste em um sistema de cores onde o WCS ira indicar no PDV qual é a posição contornando com a cor padrão daquela posição.
Marcações no chão com as cores padrões serão disponibilizadas pelo cliente para facilitar a identificação do time operacional.
Alocação de Volumes
O operador só será permitido alocar qualquer volume quando estiver realizado o Login na rampa.
O crachá dos operadores que estarão localizados nas saídas das rampas deve conter obrigatoriamente 7 dígitos.
O operador pega o volume na rampa, realiza a leitura do código de barras onde o WCS indicará a posição do produto em uma das 4 posições do put to monitor (PDV), todo o quadrado da posição ficará marcado na cor da posição na tela até o operador realizar a leitura do código da posição do pallet que deve estar fisicamente visível, assim confirmando que o operador foi até o pallet e alocou a caixa no mesmo, como indicado acima teremos uma identificação por cores para facilitar o processo de identificação do usuário.
Caso o usuário informe o número de pallet divergente (errado) ao número de pallet esperado na PDV o WCS informará que o pallet informado não é o destino do volume, assim o operador deve indicar o número correto do pallet.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 4848a60ada741e14

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Separação, sorter e PTM (Put-To-Monitor), tendo como papel fundamental a interface entre o sistema WMS/KAIZEN da cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados dedicado, para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 8ff899fb2903273a

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executará as rotinas de separação de volumes, utilizando o Sorter.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Processo de Operação do Sorter  
**Score:** — (semantico) | **ID:** 15a7a7f325b83b92

O Sorter foi projetado para processar até 5.000 volumes por hora, com base na eficiência da indução. Ele conta com um portal de leitura com 3 faces de leitura (laterais e topo), garantindo que as etiquetas posicionadas nas laterais das caixas sejam lidas corretamente. Essas faces de leitura permitem ao WCS realizar o checkout dos volumes induzidos.
O sistema do Sorter é composto por 12 rampas
11 rampas destinadas ao transporte dos volumes.
1 rampa exclusiva para rejeito.
O processo no Sorter inicia quando o volume passa pelo portal de leitura. A câmera captura a etiqueta do volume, que é então enviada ao Controlador Lógico Programável (CLP). O CLP encaminha as informações ao WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, indicando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme o mapa de sorter ativo, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos devem ter uma etiqueta, que inclui um código de barras ou QR code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão automaticamente direcionados para o rejeito ou reprocessamento, conforme as regras de operação definidas.
Após o desvio dos volumes eles estarão disponíveis para paletização.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 4a61aa1d3052c9ae

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executará as rotinas de separação de volumes, utilizando o Sorter.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Processo de Operação do Sorter  
**Score:** — (semantico) | **ID:** 4aaaaad627ea9c15

O Sorter foi projetado para processar até 5.000 volumes por hora, com base na eficiência da indução. Ele conta com um portal de leitura com 3 faces de leitura (laterais e topo), garantindo que as etiquetas posicionadas nas laterais das caixas sejam lidas corretamente. Essas faces de leitura permitem ao WCS realizar o checkout dos volumes induzidos.
O sistema do Sorter é composto por 12 rampas
11 rampas destinadas ao transporte dos volumes.
1 rampa exclusiva para rejeito.
O processo no Sorter inicia quando o volume passa pelo portal de leitura. A câmera captura a etiqueta do volume, que é então enviada ao Controlador Lógico Programável (CLP). O CLP encaminha as informações ao WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, indicando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme o mapa de sorter ativo, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos devem ter uma etiqueta, que inclui um código de barras ou QR code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão automaticamente direcionados para o rejeito ou reprocessamento, conforme as regras de operação definidas.
Após o desvio dos volumes eles estarão disponíveis para paletização.

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 5e0a46e63a622b7b

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 5e1d30e9e6563a22

O sorter fará o desvio dos volumes conforme o mapa cadastrado e ativo no sistema Velox.
O mapa deve ser cadastrado e configurado previamente no sistema Velox.
Todos os volumes induzidos no sorter, devem conter código de barras integrado no sistema Velox ou estar devidamente etiquetados.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto 2 (duas) rampas de indução, 1 (um) portal de leitura com 3 (três) equipamentos de leitura de código de barras.
18 (dezoito) rampas saídas em toda a sua extensão.
Cada saída será equipada com 4 (quatro) posições PTL (Put-To-Light) e cada posição será identificada com um display de 3 (três) dígitos com led, nesse caso 1 (uma) saída poderá ter até 4 (quatro) rotas diferentes que serão indicadas pelo display da posição PTL.
Totalizando 72 (setenta e duas) posições PTL em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras + conversor RS232.
Totalizando 18 (dezoito) leitores de código de barras e 18 (dezoito) conversores RS232.

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Envio de informações  
**Score:** — (semantico) | **ID:** 98e580cfb0b7675d

VELOX  WMS
Os dados que devem ser enviados (INSERT) do Velox para o WMS são os dados nas tabelas abaixo onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tabela SORTER.GPT_RETORNO_STATUS_INDUZIDO
Nessa tabela o Velox deve retornar o valor do código da etiqueta do pallet “ID_PALLET” após a confirmação de consumo de pallet na tela do Velox, onde o retorno da segunda coluna sempre será S (Sim) ou seja será uma constante, sempre que o operador confirmar um consumo de pallet no Stage através da tela de consumo de pallet do Velox essa informação será inserida na tabela transacional SORTER.GPT_RETORNO_STATUS_INDUZIDO.
Tabela SORTER.GPT_RETORNO_MONTAGEM_PALETES
Nessa tabela o Velox irá retornar as informações dos volumes (caixas) dentro de um mesmo pallet, ou seja, sempre que um pallet for finalizado em um PTL o Velox irá disparas as informações acima, as informações serão inseridas por linha tendo informações repetidas em quase todas as colunas, salva somente a coluna de “CODBARRAETQ” que será a primary key (PK) dessa tabela, onde os valores dessa coluna não poderão se repetir.
Para os dados que devem ser imputados na coluna “CODBARRAETQ” a PK sempre haverá a letra “V” no início do código e o Velox deve devolver a informação exatamente como recebeu na integração (INSERT na tabela INTERMEDIARIA)
O Velox executará uma rotina que a cada fechamento de pallet essas informações serão enviadas automaticamente, e todas as informações de cada volume (CODBARRAETQ) de um mesmo pallet serão enviadas juntas com a flag da coluna “INDOPERACAO” sempre será I indicando um INSERT na tabela, o Velox não realizará atualizações ou exclusão de dados na tabela transacional e na flag da coluna “INDPROCESSADO” sempre será N indicando que todos os volumes do pallet foram enviados para tabela transacional.
Com a leitura do pallet na abertura do PTL o Velox irá receber a letra M no início do código, então na coluna “PALLET” o Velox irá salvar a informação de código do pallet sem a letra M no início do código para que no momento de retornar as informações para o WMS na coluna SEQPALETECAR REG.
NOTA: Todas as informações acima estão comtempladas na documentação enviada pelo time Concinco (PC-Estruturas de Tabelas Transacionais de Retorno _ INVENT → C5-250724-183941).

---
**Origem:** [I23.3917] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Frente  
**Score:** — (semantico) | **ID:** e9dfc1133da9884f

Operador do posto de separação realiza a leitura do código de barras (com o leitor de dedo) da caixa que foi desviada no posto e ao realizar a leitura, caso tenha produtos a serem separados nos flowracks da frente, os displays dos níveis dos produtos que precisam ser separados serão acesos com as informações de Endereço, Nível e Quantidade, e tambem na tela do PDV terá o feedback do que deve ser separado e suas posições, ao realizar a separação do produto solicitado no display o operador deve apertar o botão do display para confirmar a separação do produto solicitado, caso haja outro produto a ser separado no mesmo nível, o display irá acender novamente com as informações do novo produto a ser separado e o operador repete o processo descrito acima.

---
**Origem:** [I23.3917] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 7a34ac8a46a50d36

O sorter fará o desvio dos volumes de fracionados e full case, conforme o mapa cadastrado e ativo no sistema Velox.
O mapa deve ser cadastrado e configurado previamente no sistema Velox.
Todos os volumes induzidos no sorter, devem conter código de barras integrado no sistema Velox ou estar devidamente etiquetados.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto 2 (duas) rampas de indução de volumes full case, 1 (uma) rampa de indução dos fracionados, 1 (um) portal de leitura com 3 (três) equipamentos de leitura de código de barras.
18 (dezoito) rampas saídas em toda a sua extensão.
Cada saída será equipada com 3 (três) posições PTL (Put-To-Light) e cada posição será identificada com 1 (um) display de 3 (três) dígitos com led, nesse caso 1 (uma) saída poderá ter até 3 (três) rotas diferentes que serão indicadas pelo display da posição PTL.
Totalizando 54 (cinquenta e quatro) posições PTL em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras + conversor RS232.
Totalizando 18 (dezoito) leitores de código de barras e 18 (dezoito) conversores RS232.

---
**Origem:** [I23.3917] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Especificação de volumes full case induzidos no sorter  
**Score:** — (semantico) | **ID:** 7a069ee4874e84c4

Para a correta leitura no portal do sorter, os volumes tanto fracionados quanto full case, devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras:
Conforme a imagem acima, o código em destaque no quadro vermelho deve estar integrado no sistema Velox.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 21990866ca105deb

O sorter será composto por 7 (sete) rampas de indução, onde 6 (seis) rampas de indução terá 1 (uma) balança, 3 (três) leitores de código de barras e 1 (uma) rampa com dimensões maiores para volumes maiores, essa rampa possui 1 (uma) balança e 8 (oito) leitores de código de barras.
O sorter terá o total de 60 (sessenta) rampas disponíveis para os desvios dos volumes lidos, sendo 30 (trinta) rampas para cada lado do sorter.
Na indução de volumes, operador induz o volume na esteira e com base nas informações capturadas no portal de leitura, o sistema Velox, determina qual a rampa esse volume deve ser desviado.
O sorter deverá pesar e cubar todos os volumes que forem induzidos no sorter, sem exceção.
Caso algum volume siga sem as informações de cubagem e/ou peso, o volume deverá ser desviado na rampa de destino para ser tratada pelo operador com o coletor do cliente.
Deverá ter no Velox uma tela onde é possivel habilitar e desabilitar a funcionalidade de rejeito por peso e dimensionamento, e essa funcionalidade terá o filtro por balança, sendo possivel habilitar e desabilitar a funcionalidade por balança.
Alguns detalhes, referente a quantidade de portais de leitura e quantidades de leitores/câmeras serão alinhadas paralelamente entre Invent (engenharia mecânica), Braspress e Toledo.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Dimensões e peso  
**Score:** — (semantico) | **ID:** 9a8dec9ba44affee

Para as rampas de entrada 2 (dois) a entrada 7 (sete) os volumes que serão induzidos e tratados pelo sorter devem obedecer aos parâmetros máximos e mínimos de dimensões e peso como apresenta a tabela abaixo:
Para os itens de comprimento > 900mm e/ou largura 600mm, até o limite máximo da tabela acima, deverão ser transportados pela entrada 1 (um) (imagem abaixo).
Essa entrada receberá volumes maiores do que 900mm x 600mm e volumes provenientes do rejeito.
Caso o volume exceda o tamanho da balança, deverá ser enviado um sinal de erro e não um peso aleatório (Invent avaliar possibilidade)
É de responsabilidade do cliente que os volumes induzidos estejam dentro das especificações citadas nesse documento.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade do dimensionador por entrada  
**Score:** — (semantico) | **ID:** 03debf95ff05a268

Pós Go Live.
Relatório deve mostrar a produtividade por dimensionador dos portais de leitura do sorter.
Campos:
Quantidade de volumes tratados por dimensionador;
Quantidade de volumes tratados (total de todos os dimensionadores);
Percentual entre volumes tratados;
Quantidade de volumes não tratados;
Erros de dimensionador e quantidades.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Portal de leitura;
Erros;
Rampa de entrada.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade por volumes classificados  
**Score:** — (semantico) | **ID:** ea6a49b58cd14055

Pós Go Live.
Relatório deve mostrar a produtividade de volumes classificados no sorter.
Campos:
Quantidade de volumes desviados por rampa;
Quantidade de volumes desviados por regra de desvio.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivos;
Rampa de desvio;
Regra de desvio.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Diário de operação  
**Score:** — (semantico) | **ID:** 6640aa712d9b6e6c

Pós Go Live.
Relatório deve mostrar informações do dia a dia da operação no sorter.
Campos:
Data operacional;
Total de volumes desviados corretamente pelo sorter;
Total de volumes recirculados pelo sorter;
Comparativo dos totais de volumes classificados pelo sorter, pelos totais de recirculados pelo sorter.
Filtros:
Data;
Hora;
Período de data;
Período de hora.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 808db0552b506c7a

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 3f9b0868cc153627

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 642325197a974d84

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 0255542f366ce7c0

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Cenário Padrão  
**Score:** — (semantico) | **ID:** 1570f306250d9a2b

Todos os códigos sendo enviados ao SSW com o valor real do código de barras da etiqueta.

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 30f543b0f700567b

Na indução de volumes, operador induz o volume na esteira e com base nas informações recebidas via integrações, realiza o desvio para a rampa de docas.
Programação de rotas:
O sistema Velox deverá permitir a configuração de rotas, onde o operador poderá adicionar a mesma rota para mais de uma rampa do sorter, por exemplo, São Paulo e Barueri são rotas de grande quantidade de volumes, com isso necessitam de mais de 1 rampa para desvio, será possível também configurar mais de uma rota em uma única rampa, ou seja, uma ou mais rotas por rampa.
O sorter deverá pesar e cubar todos os volumes que forem induzidos no sorter, sem exceção.
Caso algum volume siga sem as informações de cubagem e/ou peso, o volume deverá seguir para rejeito, sendo necessário repassar no sorter para aferir essas informações.

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 86d604336ac7f079

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Picking e Sorter, tendo como papel fundamental a interface entre o sistema WMS do Grupo JAMEF e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Grupo JAMEF (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 6419e7c3fbe6b3f2

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor local que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações.

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `Conferência Diamante - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Conferência fracionados atual  
**Score:** — (semantico) | **ID:** 84c76f00a50920a8

No modelo atual de conferência o operador seleciona a caixa na esteira e realiza a leitura do código de barra presente na etiqueta que previamente foi colada na caixa, assim informando ao MFC qual caixa será conferida no momento, assim que é informada o número da caixa ao MFC o mesmo apresenta na tela uma lista com as seguintes informações:
Realizar corte – Checkbox que quando preenchido realiza o shortpicking do item selecionado.
Código Produto – Código SKU do produto  vide nas embalagens dos produtos.
Descrição Produto – Descrição ou nomenclatura do produto.
Endereço Picking – Endereço onde está alocado o produto e onde foi realizada a separação do mesmo
Quantidade Conferida – Quantidade de unidades por produto/SKU conferida
Quantidade Separada – Quantidade de unidades por produto/SKU separados na linha de picking fracionado.
Segue exemplo abaixo:

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `Conferência Diamante - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Invent  
**Score:** — (semantico) | **ID:** f6771277295c49d0

É necessário que todas as funcionalidades já existentes no sistema atual (MFC Invent) devem ser preservadas, ou seja, a atualização solicitada presente nessa proposta deve ser realizada sem impactar nenhuma outra funcionalidade já existente no sistema hoje.
NOTA: Todas as funcionalidades serão testadas nos ambientes de teste (homologação) e na virada in loco.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 94182eacc0572c22

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executara as rotinas de Slim Sorter, tendo como papel fundamental a interface entre os sistemas do cliente com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação Velox e o sistema do cliente através de interface Web e via arquivo json (API REST), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Slim Sorter  
**Score:** — (semantico) | **ID:** 9c4d23e260c3a54b

O Slim Sorter fará o desvio dos volumes conforme o destino enviado pelo sistema do cliente para o sistema Velox.
No sistema Velox, o mapa deve ser cadastrado e configurado previamente.
Todos os volumes induzidos no Slim Sorter, devem conter etiqueta com as informações necessárias para identificação (código de rastreio + CEP e ou Data Matrix) e estarem devidamente legíveis pelo leitor.
(impressão e fixação de etiquetas, responsabilidade do cliente)
O Slim Sorter será composto por 1 (um) ponto de indução, 3 (três) destinos e 1 (um) desvio para o rejeito.
O ponto de indução será composto por 1 (um) portal de leitura equipado com 1 (um) leitor de código de barras, 1 (um) dimensionador e 1 (uma) balança.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Identificação do volume  
**Score:** — (semantico) | **ID:** a36eea258c93fa2a

O volume induzido será lido e identificado pelo leitor de código de barras do portal de leitura, para isso é fundamental garantir a qualidade de impressão da etiqueta, para que o leitor realize a leitura corretamente das informações.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Dimensionamento do volume  
**Score:** — (semantico) | **ID:** 12f6c0c921a19fc9

No portal de leitura, ao ser identificado pelo leitor, o equipamento dimensionador fará a medição do volume, obtendo assim as informações de dimensão como altura, largura e comprimento.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Especificação de volumes induzidos no Slim Sorter  
**Score:** — (semantico) | **ID:** df0aa9d08a0dcf0a

Para a correta leitura no portal do Slim Sorter, a etiqueta dos volumes deve estar devidamente visível e legível pelo leitor de códigos de barras.
A etiqueta deve estar devidamente fixada no lado superior do volume, pois o posicionamento do leitor de código de barras será no lado superior do portal de leitura do ponto de indução.
Conforme imagem abaixo.
Os volumes que estiverem com as etiquetas fora da área de alcance do leitor de código de barras do portal de leitura, seguirão para o destino de rejeito do Slim Sorter.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Layout de etiqueta  
**Score:** — (semantico) | **ID:** 11a7041baa4cc209

O código a ser lido pelo portal de leitura do Slim Sorter será o data matrix de acordo com a imagem abaixo.
O código considerado da etiqueta é o código do quadro amarelo em evidência na imagem abaixo, se trata de um DATA MATRIX de 134 caracteres. Nesse código contém as informações de CEP e código de rastreio, as informações de CEP e código de rastreio serão tratadas pelo Velox e enviadas ao sistema do cliente conforme mencionado nos itens anteriores.

---
**Origem:** [Fluxo Sorter] 2024 — `I23.XXXX - ESPECIFICACAO DE SOFTWARE - CODINOME PROJETO.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** b8485cee8555ff35

A logística moderna é um intricado jogo de peças onde a eficiência é essencial para o sucesso. E nesse jogo, os sistemas de sorter se destacam como peças-chave, responsáveis por agilizar e otimizar o processo de separação e distribuição de produtos.
Imagine um centro de distribuição movimentado, com centenas de itens chegando e partindo a cada hora. O sorter entra em cena como um maestro habilidoso, coordenando o fluxo desses produtos de forma precisa e eficiente.
No coração desse sistema está a tecnologia. Sensores inteligentes em todo o decorrer da esteira identificam cada item à medida que ele chega, registrando informações cruciais, como destino e tipo de produto. Em seguida, algoritmos inteligentes entram em ação realizando a comunicação da automação com o sistema de gestão Velox, traçando o caminho mais rápido e eficiente para cada item, levando em consideração fatores como peso, tamanho e destino.
À medida que os produtos percorrem a esteira, os sorters entram em ação. Equipados com transferências mecânicas ou HPD, eles classificam os itens com velocidade e precisão impressionantes. Um produto pode ser direcionado para uma esteira específica com destino a uma loja, enquanto outro pode ser encaminhado para embalagem adicional ou mesmo para devolução.
O sorter na logística reside em sua capacidade de lidar com uma variedade infinita de produtos, desde pequenos itens até grandes pacotes, tudo de forma eficiente e sem erros. Isso não apenas acelera o processo de distribuição, mas também reduz custos e minimiza erros humanos/operacionais.
Além disso, os sorters são adaptáveis ​​e escaláveis. Eles podem ser ajustados para lidar com diferentes volumes de mercadorias conforme necessário, garantindo que a operação permaneça ágil e eficiente, mesmo em tempos de pico.
Em um mundo onde a rapidez e a precisão são essenciais, os sorters emergem como heróis silenciosos da logística, garantindo que os produtos cheguem ao seu destino de forma rápida, eficiente e sem contratempos. Com eles, a logística se torna não apenas uma ciência, mas uma arte em movimento.

---
**Origem:** [Fluxo Sorter] 2024 — `I23.XXXX - ESPECIFICACAO DE SOFTWARE - CODINOME PROJETO.docx`  
**Heading:** Fluxo do Sorter  
**Score:** — (semantico) | **ID:** 6d157aac8576e412

Criado com o objetivo de esclarecer e capacitar nossos operadores, este novo recurso é um mapa detalhado que ilustra o funcionamento intricado e as particularidades de nosso sistema de sorter.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** Cadastros WCS  
**Score:** — (semantico) | **ID:** a98ff4d368781725

No WCS deve conter uma base de cadastros que serão utilizados em diversas etapas do processo.
Segue os cadastros que devem conter no MFC:
Cadastro do Reabastecimento (Posição / Faixa cor / Shelf / % de atendimento / SKU)
Cadastro de exceção para separação de SKU’s no AC (SKU)
Exemplo: Balde
Cadastro de prioridade de Reabastecimento (IA irá realizar esta ação, porém o usuário poderá alterar a prioridade que é automática)
Cadastro das prioridades de Expedição -  Sequência  FEFO > Limpeza de Canal > Devolução
Nesta sessão não poderá criar uma prioridade nova, apenas alterar a ordem.
Cadastro de Posições (capacidade / canal ou porta palete ou Flow Rack / posições bloq AA / Buffer, Pulmão, Picking  ou De x Para / Congelado ou Resfriado )
Cadastro do Abastecimento em porcentagem
Exemplo: Muito Alta <10% / Alta <30% / Média <60% / Baixa <90% / Muito Baixa >90%
Cadastro de Tipo de Expedição (Estivado / Paletizado)
Cadastro de Tipo de TSP (PK na Origem /PK na Ponta / PK Misto)
Cadastro de Expedição de Temperatura ( Inicia Congelado / Inicia Resfriado / Inicia Misto)
Cadastro de Pesos (Sequência Pesados / Leves / Frágeis / Misturados)
Cadastro de Rampas de Rejeito (Rejeito por não leitura / Rejeito com leitura)
Cadastro da Separação (Nível / ID / PTL até PTL / Impressora)
Cadastro de PTL:
- Liga Todos (Sem ordem)
- Liga os Pesados > Leves > Frágil (seguir a regra escolhida na onda)
- Liga Todos por peso (sempre seguindo a ordem de separação Pesado, leve e Frágil
Sempre será aceso em verde os volumes pesados que devem ser separados primeiro, e os demais ficarão em amarelo. Quando finalizar a separação dos volumes pesados, os volumes leves ficarão verdes e os frágeis em amarelo e assim por diante.
Observação: Conforme falamos nas outras Sprints, esta regra não deve ser alterada sempre e não terá efeito instantâneo assim que ativada ou desativada.
Cadastro de Produto ( Cód Material / descrição / sigla / peso da caixa / Shelf / padrão de paletização  / Tipo de SKU - PPAD / PFIX / PVAR) – Cadastro e atualizações sempre através do SAP
Cadastro de SKU Terceiro (inicial do Lote / SIF)
Cadastro de Voltas no carrossel até cair no Rejeito (tentativas de leitura no portal para efetuar o desvio dependendo do tipo de “rejeito”)
Cadastro de Paletes (tipo de Palete PBR / Peso)
Cadastro de Perguntas Check List  início / Fim (Pergunta do check list/ será  Impeditivo? / Necessário Tira foto do ocorrido?)
Observação: É de responsabilidade da INVENT a definição de cadastro no WCS, bem como Telas e funcionalidades Logísticas no sistema VELOX para atender a necessidade da operação.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 3272a6496c02fe15

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executara as rotinas de separação de itens fracionados, separação de full case (caixa fechada), conferência, Sorter e PTM (Put-To-Monitor) nas saídas do sorter, tendo como papel fundamental a interface entre os sistemas WMS (SAGA) com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para ter acesso a aplicação Velox.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 30f1aa8bcd815b1d

O sorter fará o desvio dos volumes conforme o mapa cadastrado e ativo no sistema Velox.
O mapa deve ser cadastrado e configurado previamente no sistema Velox.
Todos os volumes induzidos no sorter, devem conter o código de barras integrado no sistema Velox ou estar devidamente etiquetados, em casos que não serão utilizados a inteligência artificial para identificação do volume.
O sorter deverá realizar a identificação do volume de caixa fechada via inteligência artificial conforme mencionado no item anterior, e em casos de volumes que foram separados nos postos de fracionados, deverão conter o QR Code para a identificação do volume e desvio correto no sorter.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto por 7 (sete) rampas de saída, sendo 1 (uma) delas de rejeito.
1 (um) portal de leitura com 3 (três) faces de leitura de códigos de barras e 1 (um) dimensionador.
Cada saída do sorter, poderá atender até 16 (dezesseis) posições pallets, gerenciadas pelo PTM (Put-To-Monitor), nesse caso 1 (uma) saída poderá atender até 16 (dezesseis) pallets diferentes que serão indicadas pelo monitor da saída.
Totalizando 48 (quarenta e oito) posições pallets em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras.
Totalizando 7 (sete) leitores de código de barras.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** ce399cd6377214be

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com os equipamentos da automação.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet em caso de servidor na nuvem.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 9c6c67758aa18801

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de separação e Sorter, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão- de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** c0288ecd122cb6e5

Cliente irá nos passar mapa de lojas/Rampas.
O portal terá apenas um scanner que será do lado direito, mesmo lado do order start.
Operadores deverão abrir todas as posições pallet antes do início da operação, realizando a rotina de abertura PTL.
Operador ao receber caixa na saída irá fazer a leitura, e neste momento o led da respectiva transportadora/loja devera acender indicando o local (pallet) que deve alocar a caixa, após alocar o operador deve apertar o botão (Led) para apagar.
Operador ao realizar a leitura de um volume que não corresponde àquela posição do PTL, o LED acendera em vermelho, indicando que o volume não corresponde aquela saída. Nesse caso, o operador deverá movimentar a caixa manualmente até a estação de rejeito, para que seja feita a tratativa.
Sorter terá 14 (quatorze) saídas, e cada saída poderá ser alocado até 08 (oito) PTL (posição pallet) e em cada PTL terá um led indicativo.
Operador ao finalizar o pallet, VELOX enviará via integração (Palletize_Container.xml), as informações das caixas alocadas no pallet.
Operador ao finalizar o fechamento do pallet, o led da posição acenderá em amarelo informando que o pallet foi fechado.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Scanners  
**Score:** — (semantico) | **ID:** 24b6c7f4d92e8b38

Cada saída de Put-to-light possuirá 01 (um) scanner (de Fornecimento/Responsabilidade Invent).
A função deste dispositivo será realizar a leitura do código de barras das caixas e o processo de abertura e fechamento de pallet.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** b4d861dafeacf3ae

Os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição (PTL) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento o led de cada posição indicará que o processo de abertura foi concluído, já que quando a abertura do pallet for efetuada o led da posição em questão acenderá em verde.
Somente operadores cadastrados no sistema terão o poder de realizar abertura da posição pallet.
Etiquetas (RG Pallet) serão de responsabilidade do cliente.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 07fd582f83bf02d4

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Picking e Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do Grupo Nós e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Grupo Nós (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox)

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** afe2a2a1e28e2fa4

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funcionam da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Indução Pallet  
**Score:** — (semantico) | **ID:** ea48501dbd2a9013

Para a indução de pallets, após o sistema Velox ter recebido a integração de pedidos, citadas anteriormente.
Velox deverá realizar as validações de sorter conforme a matriz de fragilidade, e então Velox solicita ao WMS apenas os pallets empenhados dos produtos que se enquadram corretamente para serem induzidos totalmente no sorter.
Nesse caso o Velox, somente poderá solicitar o pallet ao WMS quando a quantidade for suficiente para que o operador realize a indução de todas as caixas do pallet no sorter, Velox não deve solicitar pallets sem que o pallet tenha quantidade para ser induzido completamente.
Operador ao receber o pallet no ponto de indução do sorter, deverá realizar a leitura da etiqueta do pallet empenhado, para que o sistema Velox informe em qual sorter o operador deverá induzir todas as caixas do pallet, e com a informação do sorter, operador direciona a impressão para a impressora correta conforme o sorter.
Velox imprime todas as etiquetas dos produtos do pallet.
Com as etiquetas em mãos, operador realiza a etiquetagem de todas as caixas e indicado pela informação e cor da etiqueta impressa, induz as caixas individualmente na esteira do sorter correto, para que as caixas sigam para o destino correto no sorter. (4.1.1. Etiqueta Caixa).
Após realizar o processo de induzir todas as caixas do pallet no sorter correto, operador realiza o mesmo processo com o próximo pallet disponível para indução.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Montagem do pallet  
**Score:** — (semantico) | **ID:** a92f717178fabf4e

Operador ao receber o volume desviado na saída do sorter, com um leitor de código de barras operador deverá realizar a leitura da caixa, Velox deverá informar as observações do pedido para aquele cliente em específico e em qual posição pallet o operador deve alocar a caixa.
As observações do cliente virão descritas no campo “observações_ppal” da integração de pedidos, com isso o Velox mostrará a mesma informação recebida na integração, para orientar o operador na montagem do pallet.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Separação de itens controlados  
**Score:** — (semantico) | **ID:** 4060fb3e89b40cb9

Os produtos de categoria P 344, polícia federal/civil serão separados e conferidos individualmente nos locais designados para esses produtos, através do coletor e serão induzidos no sorter como caixa fechada.
NA SEPARAÇÃO DESSES ITENS SERÁ NECESSÁRIO REALIZAR A LEITURA DO ENDEREÇO, INFORMAR A QUANTIDADE COLETADA (APENAS EXIBIÇÃO DO SISTEMA WCS) E LEITURA DO ITEM.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 43392f2a0aadebb3

O sorter é composto por 1 portal de leitura que fará o reconhecimento dos volumes e 6 saídas, sendo elas 5 saídas para transporte e 1 saída de rejeito.
Saídas:
O Sorter possuí 5 saídas, sendo elas 4 para transporte (sendo 1 PIN) e 1 para rejeito (Lado Esquerdo).
Saída PIN: Destinada para pedidos que precisam de aprovação ou documentos adicionais. Quando um pedido não for processado automaticamente devido a requisitos específicos (por exemplo, necessidade de aprovação manual ou documentação adicional), ele será direcionado para esta saída.
Cliente tem 4 transportadoras atualmente
O portal de leitura do sorter não possui balança e dimensionador, apenas leitor de código de barras.
O sistema WCS fará a validação do campo “autoBilling” da integração de pedido. Esse campo informará o WCS que o pedido é classificado como Faturamento Automático, e caso seja recebido como falso,se falso segue reto no sorter os volumes desse pedido deverão ser destinados a uma saída especifica determinada pelo cliente e deve estar cadastrada no mapa do sorter no WCS.
Após todos os volumes do pedido, serem lidos no portal do sorter, WCS deverá enviar a integração de “Mensagem de Status” com a informação de “Container Completo” no campo “message” para que o WMS realize o faturamento do pedido.
Alocação do volume via coletor após Desvios do Sorter para Romaneio:
Esta tela via coletor do cliente,será utilizada para alocar os volumes por posição após os desvios do Sorter, facilitando o agrupamento de caixas por pedidos para posterior romaneio (preparação para expedição). Proporcionando uma visão clara do status de cada palete, caixas agrupadas, facilitando o processo expedição.
CADA VOLUME DEVERÁ SER LIDO NA SAIDA E SEMPRE O PRIMEIRO VOLUME DE UM PEDIDO SOLICITARÁ O NOME/CODIGO DA POSIÇÃO QUE ESTARÁ SENDO ALOCADO AQUELE PEDIDO E OS DEMAIS VOLUMES DO MESMO PEDIDO QUE FOREM CHEGANDO NAS SAIDAS DO SORTER DEVEM SER ALOCADOS NO MESMO PALLET.
QUANDO O ÚLTIMO VOLUME DO RESPECTIVO PEDIDO CHEGAR NA POSIÇÃO, SERÁ INFORMADO QUE O PEDIDO FINALIZOU.
O WCS DEVE DISPONIBILIZAR UMA TELA PARA GERENCIAR AS POSIÇÕES E SEUS RESPECTIVOS VOLUMES ALOCADOS.
Exemplo de Exibição: Tabela de Volumes por Palete contendo
ID da Posição: Identificação única do palete.
Número do Pedido: Número do pedido associado ao volume.
Quantidade de Caixas: Número total de caixas agrupadas neste palete.
Status do Palete: Indicação do status atual (Aguardando Conferência, Em Processamento, Pronto para Expedição).
Data de Agrupamento: Data de quando o agrupamento das caixas foi realizado para o palete.
Detalhes volumes: Volumes que estão alocados no pallet

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 0abf1c9a44452fcb

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Etiqueta para fracionados  
**Score:** — (semantico) | **ID:** 85742df21a5aa721

As informações contidas no código de barras (1912431) terão como informações fixas que antecedem o código a sigla WISPL.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Metodos de separação  
**Score:** — (semantico) | **ID:** beea3c5605c85afb

Para a nova fase do projeto temos a implementação de métodos de separação, a fim de melhorar o funcionamento operacional do CD em Camaquã.
Segue abaixo os métodos de separação:

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Balança  
**Score:** — (nome-topico) | **ID:** 996e32fa1cbc6a9a

Para a tratativa de volumes teremos uma balança junto de um scanner que realizará a indicação de volume e peso ao Velox, para que seja feita a avaliação do estado do volume, se o volume estiver com todos as informações corretas (separação e peso) o Velox irá direcionar o volume para sua saída de destino e será enviada a integração de retorno para o WMS, caso o contrário as informações do volume não são correspondentes com o cenário esperado o volume é direcionado para setor de conferência.
O volume pode ser direcionado para a conferência por motivos de validação selecionados pelos usuários do Velox como indicado no item abaixo.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** dc58fc63e53e2c60

O Sorter possui balança, dimensionador, 4 (Quatro) saídas cada uma destinadas a um pedido com um totem luminoso e a última rampa é destinada para rejeito.
O portal de leitura do sorter realiza a identificação da etiqueta, via leitura da etiqueta Data Matrix impressa no Order Start ou separação de Full Case no início do processo e com isso o sistema VELOX valida se a etiqueta lida possui integração e rota para o volume scaneado, para efetuar o desvio na rampa correta.
A balança e o dimensionador estarão em constante comunicação com o sistema Velox para registrar toda caixa que passar no sorter e informar ao WMS seu peso e medida. Velox não fará validação dessas informações, apenas realizará o envio para o WMS. Em caso de rejeito por não aferir essas informações, o Velox informará o operador que deve induzir novamente essa caixa para registrar essas informações.
Todas as saídas deverão ser vinculadas a um pallet para ser permitido a alocação de uma caixa. Para a realização desse processo, o operador deverá realizar a leitura de uma etiqueta com o comando de abrir pallet (cartão/etiqueta que ficará próximo ao Scanner) e a etiqueta identificadora do Pallet. Com essas informações, o Velox informará através do totem na cor verde que o pallet foi aberto.
Após o desvio do volume no sorter, o operador deverá alocar o volume realizando a leitura da etiqueta recebida no Scanner Fixo Prix e o Velox deverá validar e informar ao operador o status da caixa através do totem luminoso.
Cores do totem Luminoso:
VERDE: Pallet aberto e Volume Alocado (Piscar)
AMARELO: Fechamento do Pallet
VERMELHO: Erro ao abrir pallet (piscar) e Caixa não pertence ao Pallet (piscar)
Em caso de necessidade da operação em finalizar o pallet, o operador deverá realizar a leitura do comando de fechamento do Pallet (cartão/etiqueta que ficará próximo ao Scanner) e o sistema irá acender o totem na cor amarela para informar sucesso no procedimento mencionado. Será de responsabilidade do cliente, fornecer todos os cartões/etiquetas responsáveis pelos comandos de abertura, fechamento e reset do Pallet nas saídas das rampas.
O Velox deverá informar ao operador piscando o sinaleiro com todas as cores quando o último volume do pedido for alocado no pallet. Velox entenderá que o pallet foi finalizado e poderá liberar mais pedidos no Order Start.
Sistema VELOX devolve a integração para o WMS informando quais caixas estão compondo aquele pallet ao realizar o fechamento.
Qualquer problema físico ou sistêmico a caixa deve ser direcionada a rampa de rejeito. Possíveis problemas que podem ocorrer neste processo são:
NoRead
Erro de Desvio
Sem Rota
Não Integrado

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Rampas (Totem Luminoso)  
**Score:** — (semantico) | **ID:** dc3873343e49ccca

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Prix VSI 410 (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
No caso do projeto do CD de São Paulo, onde o sorter terá 4 (Quatro) rampas de saída, será necessário 4 (Quatro) unidades de leitores de código de barras e 4 (Quatro) conversores RS232, mencionados acima.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** eadba2c3cf0fe90b

O Sorter possui balança, dimensionador, 4 (Quatro) saídas cada uma destinadas a um pedido com um totem luminoso e a última rampa é destinada para rejeito.
O portal de leitura do sorter realiza a identificação da etiqueta, via leitura da etiqueta Data Matrix impressa no Order Start ou separação de Full Case no início do processo e com isso o sistema VELOX valida se a etiqueta lida possui integração e rota para o volume scaneado, para efetuar o desvio na rampa correta.
A balança e o dimensionador estarão em constante comunicação com o sistema Velox para registrar toda caixa que passar no sorter e informar ao WMS seu peso e medida. Velox não fará validação dessas informações, apenas realizará o envio para o WMS. Em caso de rejeito por não aferir essas informações, o Velox informará o operador que deve induzir novamente essa caixa para registrar essas informações.
Os Full Cases também serão direcionados para o sorter e terá uma dupla validação por parte do Velox. O sistema deve validar se a etiqueta de expedição confere com a etiqueta do produto. Em caso de o pedido não solicitar aquele item, o Velox deve rejeitar a caixa e informar o motivo ao operador.
Todas as saídas deverão ser vinculadas a um pallet para ser permitido a alocação de uma caixa. Para a realização desse processo, o operador deverá realizar a leitura de uma etiqueta com o comando de abrir pallet (cartão/etiqueta que ficará próximo ao Scanner) e a etiqueta identificadora do Pallet. Com essas informações, o Velox informará através do totem na cor verde que o pallet foi aberto.
Após o desvio do volume no sorter, o operador deverá alocar o volume realizando a leitura da etiqueta recebida no Scanner Fixo Prix e o Velox deverá validar e informar ao operador o status da caixa através do totem luminoso.
Cores do totem Luminoso:
VERDE: Pallet aberto e Volume Alocado(Piscar)
AMARELO: Fechamento do Pallet
VERMELHO: Erro ao abrir pallet (piscar) e Caixa não pertence ao Pallet (piscar)
Em caso de necessidade da operação em finalizar o pallet, o operador deverá realizar a leitura do comando de fechamento do Pallet (cartão/etiqueta que ficará próximo ao Scanner) e o sistema irá acender o totem na cor amarela para informar sucesso no procedimento mencionado. Será de responsabilidade do cliente, fornecer todos os cartões/etiquetas responsáveis pelos comandos de abertura, fechamento e reset do Pallet nas saídas das rampas.
O Velox deverá informar ao operador piscando o sinaleiro com todas as cores quando o último volume do pedido for alocado no pallet. Velox entenderá que o pallet foi finalizado e poderá liberar mais pedidos no Order Start.
Sistema VELOX devolve a integração para o WMS informando quais caixas estão compondo aquele pallet ao realizar o fechamento.
Qualquer problema físico ou sistêmico a caixa deve ser direcionada a rampa de rejeito. Possíveis problemas que podem ocorrer neste processo são:
NoRead
Erro de Desvio
Sem Rota
Não Integrado

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Rampas (Totem Luminoso)  
**Score:** — (semantico) | **ID:** 7d174c2eb91df3a8

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Prix VSI 410 (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
No caso do projeto do CD de São Paulo, onde o sorter terá 4 (Quatro) rampas de saída, será necessário 4 (Quatro) unidades de leitores de código de barras e 4 (Quatro) conversores RS232, mencionados acima.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** f7326dfab1911885

O sorter terá um portal com 3 (três) faces (lados) de leitura, uma de topo e as demais são laterais devido ao processo de checkout que será feito no Velox para pedidos Full Case quando o sistema irá avaliar o DUN ou EAN da caixa com o código da etiqueta de pedido comparando se o volume (produto) coincide com o volume (produto) solicitado no pedido em questão, não haverá um dimensionador no portal do sorter, todos os volumes serão dimensionados antes da entrada na automação como informado no tópico de Cubagem.
Serão 4 (quatro) saídas para atrelar diversos destinos e 1 (uma) saída para rejeito totalizando 5 (cinco) rampas ao todo, cada rampa terá 1 TV e as mesmas têm a possibilidade de ter 4 (quatro) pedidos atrelada a elas, sendo 1 (um) pallet por posição PTM , sendo no total 16 pallets em todas as 4 saídas do sorter.
O processo do sorter consistem na leitura do volume/caixa no portal de leitura onde a automação (CLP) informa ao WCS Velox qual volume (pedido) que acaba de passar no portal de leitura, o Velox por sua vez verifica em sua base de dados as informações referentes ao pedido em questão e devolve a informação de desvio daquele pedido para automação (CLP) que realiza a tarefa (física) de desvio na rampa indicada.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** ESPECIFICAÇÃO  
**Score:** — (semantico) | **ID:** 8e83b66881d0f8ad

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação e sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao MFC, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** Sugestão Alocação de Curva ABC  
**Score:** — (semantico) | **ID:** 6abdbee4bcf409b0

O sistema MFC será responsável por sugerir a alocação estratégica dos produtos com base na análise da curva ABC, com o objetivo de otimizar a eficiência operacional no Centro de Distribuição Andreani. Essa funcionalidade prioriza a organização dos produtos nas posições de picking de acordo com sua relevância e frequência de movimentação.
Critérios de Alocação por Curva ABC
Itens da Curva A:
Descrição: Produtos de alta prioridade.
Alocação: Posições de picking mais acessíveis, próximas aos pontos de saída.
Benefício: Reduz o tempo de deslocamento dos operadores, aumentando a eficiência no processo de separação.
Itens da Curva B:
Descrição: Produtos de prioridade intermediária.
Alocação: Áreas de fácil acesso, mas não tão próximas quanto os itens da curva A.
Benefício: Equilibra acessibilidade sem ocupar áreas destinadas a produtos prioritários.
Itens da Curva C:
Descrição: Produtos de baixa prioridade.
Alocação: Posições mais distantes dos pontos de saída.
Benefício: Otimiza o uso do espaço, alocando produtos menos movimentados em áreas menos visitadas.
Funcionamento da Sugestão de Alocação no MFC
O sistema MFC analisará os índices de movimentação e a frequência de separação de cada produto para sugerir a alocação ideal, de acordo com as regras da curva ABC.
Essa abordagem assegura uma distribuição estratégica dos itens, melhorando o fluxo de trabalho e minimizando desperdícios operacionais.
Observação
O MFC não considerará a unidade de estoque para as sugestões de alocação, analisando apenas os dados de coleta e movimentação do SKU.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** SORTER  
**Score:** — (nome-topico) | **ID:** 736905a83a885082

Composição e Funcionalidade
O sorter é equipado com um portal de leitura, que utiliza uma câmera para identificar os volumes.
Não possui balança, dimensionador ou outras câmeras integradas.
Configuração das Saídas
O sorter conta com cinco saídas:
Quatro saídas destinadas ao transporte, uma para cada transportadora ativa.
Uma saída de rejeito, localizada no final do transportador, para volumes não identificados ou com inconsistências.
Seladoras Pré-Sorter
Antes das rampas do sorter, existem duas seladoras (shrink machines).
A operação dessas máquinas é de responsabilidade da Andreani.
Cadastro de Rotas e Mapeamento
Cadastro de Rotas
Todas as rotas devem ser cadastradas previamente no sistema MFC, antes da criação do mapa de sorter.
Essa tarefa é de responsabilidade da Andreani.
Mapa de Sorter
O mapa de sorter será criado no sistema MFC, vinculando cada rota a uma rampa do sorter, respeitando a configuração do projeto.
O mapeamento também é responsabilidade da Andreani.
Fechamento de Pallet
Processo de Fechamento
O sistema MFC disponibilizará uma tela para o fechamento de pallets.
Procedimento:
Selecionar qual rampa será realizado o fechamento do pallet.
O operador deverá escanear o código do pallet no sistema MFC.
O sistema registrará o código e associará os volumes ao pallet correspondente.
Quando o pallet atingir sua capacidade máxima, o operador deverá fechá-lo no sistema e iniciar um novo pallet, seguindo o mesmo fluxo.
Regras Específicas
Um pallet não poderá ser fechado se ainda houver volumes pendentes para o pedido associado.
O PLC será responsável por enviar a confirmação de desvio de cada volume para o sistema MFC, garantindo agilidade e precisão no processo.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** Fluxo de Comunicação do Equipamento com Servidor Local  
**Score:** — (nome-topico) | **ID:** 7b19939166eee7f4

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO -_REV1.docx`  
**Heading:** ESPECIFICAÇÃO  
**Score:** — (semantico) | **ID:** e068493e85e229f7

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação e sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO_POSTOS_ESPELHOS -_REV1.docx`  
**Heading:** ESPECIFICAÇÃO  
**Score:** — (semantico) | **ID:** be9a0864ff416e85

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação e sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome)

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 00ff076b26b4569d

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com os equipamentos da automação.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 14d90bad3771ad64

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Put-to-Light e Sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 39ea999b3b152fd1

O Sorter terá 1 (um) portal de leitura com 1 Câmera na parte superior para leitura de caixas Full Case e 1 Scanner lateral para leitura de caixas de fracionados, 06 (seis) rampas com 6 (seis) Scanners em cada saída e 6 (seis) pallets por saída totalizando 36 (trinta e seis) posições de pallets e 1 (uma) rampa de rejeito.
As caixas plásticas (fracionados) deverão conter uma etiqueta sequencial de cada lado (impressão WMS), e serão induzidas na esteira pelo colaborador após finalização do Picking (responsabilidade do WMS),
Ao passar pelo portal de leitura o sistema verificara as informações dos volumes:
Em caso de pedido não integrado desvia para conferência.
Em caso de pedido integrado e conferido segue para o sorter e será desviado conforme mapa cadastrado.
As caixas de papelão (full case) deverão conter uma etiqueta na parte superior (impressão WMS), serão induzidas na esteira pelo colaborador, e o WMS enviará a integração para a INVENT sem necessidade de conferência, elas vão passar pelo portal de leitura e desviar na rampa de acordo com o mapa cadastrado sem necessidade de conferência.
Os volumes com etiqueta rasurada, sem etiqueta, etiqueta fora da posição, etiqueta não cadastrada no mapa por erro de integração seguirão para a rampa do rejeito.
Em caso de rampas cheias os volumes também seguiram para a rampa do rejeito.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Scanners  
**Score:** — (semantico) | **ID:** a0f4878e6b43d880

Cada rampa do sorter possuirá 01 (um) scanner fixo. A função deste dispositivo será disparar os comandos de alocação abertura, alocação dos volumes e fechamento de pallet.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** 379465b95a36f616

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por último o RG do pallet (número identificador).

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Contingência Sorter  
**Score:** — (semantico) | **ID:** bbe512eb35ffc475

A operação de "Contingência Sorter" é um procedimento chave dentro do sistema Velox, projetado para lidar com itens que não estão em condições ideais para serem processados pelo sistema de triagem automática (sorter). Essa operação é essencial para garantir a eficiência e a confiabilidade do processo de classificação de itens, mesmo em situações adversas ou excepcionais.
O principal objetivo dessa operação é assegurar que os itens que não atendem aos critérios estabelecidos para o processamento pelo sorter não causem interrupções no fluxo de operação. Itens inadequados podem incluir aqueles com formatos irregulares, tamanhos incompatíveis, entre outros fatores que impeçam a correta identificação e classificação no sorter.
Porém, o sistema estará apto para o funcionamento total, atendendo em sua totalidade de volumes e caixas, independente de tamanho e especificações técnicas, a obrigação é que o volume a ser triado manualmente deve estar devidamente integrado no sistema Velox.
Na operação de "Contingência Sorter", operador deverá abrir a posição pallet conforme rua predeterminada pelo cliente.
A abertura e fechamento de posição pallet será idêntica ao formato existente atualmente na operação.
As integrações continuarão da mesma forma e momentos, que existe atualmente na operação.
Deverá existir apenas 1 (um) leitor de código de barras no PDV
As posições pallets devem estar devidamente identificadas com os nomes das lojas/filiais.
As posições pallets devem estar devidamente com as etiquetas de abertura, fechamento e reset de posição.
Cada posição atenderá uma única loja/filial.
Operacionalmente:
Com um leitor de código de barras, o operador deverá abrir todas as posições pallet, antes de iniciar a triagem manual.
Com as posições pallet abertas, deverá acompanhar em um PDV.
Com o mesmo leitor de código de barras, operador realiza a leitura dos volumes.
Ao realizar a leitura dos volumes, no PDV, Velox indicará qual a posição pallet, código loja filial, deve alocar o volume lido.
Ao alocar o volume na posição, deverá confirmar via PDV a inclusão do volume na posição pallet indicado.
Com isso o volume é alocado no pallet sistemicamente, até que o operador entenda que o pallet esteja cheio fisicamente.
Ao notar que o pallet está cheio fisicamente, deverá realizar a leitura da etiqueta de fechamento de pallet.
Ao fechar o pallet o sistema Velox, enviará a integração "Aloca PTL" para o WMS.
O volume ao ser alocado no pallet, seja ele por passagem no sorter ou pela operação de contingência, caso passe o mesmo volume no sorter, ele seguirá para rejeito, e assim vice-versa. Pois o sistema já o processou em alguma operação, seja no sorter ou na contingência.
Equipamentos: Responsabilidade cliente
Importante!
Rede: A rede WIFI que o PDV estiver conectado deverá estar na mesma rede do servidor do sorter, para que haja a comunicação entre os equipamentos PDV e Servidor Sorter.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 3ff1bae80aebad7e

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter e PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS do Maravilhas do Lar e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Maravilhas do Lar (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox)

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 6653f90c1c1cfd48

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 636de7b6fca15882

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Put-to-Light e Sorter tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** ee60f83740ae4db0

O Sorter terá 1 (um) portal de leitura com 1 Câmera na parte superior para leitura de caixas Full Case e 1 Scanner lateral para leitura de caixas de fracionados, 06 (seis) rampas com 6 (seis) Scanners em cada saída e 6 (seis) pallets por saída totalizando 36 (trinta e seis) posições de pallets e 1 (uma) rampa de rejeito.
As caixas plásticas (fracionados) deverão conter uma etiqueta sequencial de cada lado (impressão WMS), e serão induzidas na esteira pelo colaborador após finalização do Picking (responsabilidade do WMS),
Ao passar pelo portal de leitura o sistema verificara as informações dos volumes:
Em caso de pedido não integrado desvia para conferência.
Em caso de pedido integrado e conferido segue para o sorter e será desviado conforme mapa cadastrado.
As caixas de papelão (full case) deverão conter uma etiqueta na parte superior (impressão WMS), serão induzidas na esteira pelo colaborador, e o WMS enviará a integração para a INVENT sem necessidade de conferência, elas vão passar pelo portal de leitura e desviar na rampa de acordo com o mapa cadastrado sem necessidade de conferência.
Os volumes com etiqueta rasurada, sem etiqueta, etiqueta fora da posição, etiqueta não cadastrada no mapa por erro de integração seguirão para a rampa do rejeito.
Em caso de rampas cheias os volumes também seguiram para a rampa do rejeito.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Scanners  
**Score:** — (semantico) | **ID:** 00b13a3ac0423e60

Cada rampa do sorter possuirá 01 (um) scanner fixo. A função deste dispositivo será disparar os comandos de alocação abertura, alocação dos volumes e fechamento de pallet.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** 2ae3710f414023c1

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por último o RG do pallet (número identificador).

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Contingência Sorter  
**Score:** — (semantico) | **ID:** b92ce349f6b663fc

A operação de "Contingência Sorter" é um procedimento chave dentro do sistema Velox, projetado para lidar com itens que não estão em condições ideais para serem processados pelo sistema de triagem automática (sorter). Essa operação é essencial para garantir a eficiência e a confiabilidade do processo de classificação de itens, mesmo em situações adversas ou excepcionais.
O principal objetivo dessa operação é assegurar que os itens que não atendem aos critérios estabelecidos para o processamento pelo sorter não causem interrupções no fluxo de operação. Itens inadequados podem incluir aqueles com formatos irregulares, tamanhos incompatíveis, entre outros fatores que impeçam a correta identificação e classificação no sorter.
Porém, o sistema Velox estará apto para o funcionamento total, atendendo em sua totalidade de volumes e caixas, independente de tamanho e especificações técnicas, a obrigatoriedade é que o volume a ser triado manualmente ou via sorter, deve estar devidamente integrado no sistema Velox.
Na operação de "Contingência Sorter", operador deverá abrir a posição pallet conforme rua predeterminada pelo cliente.
A operação de “Contingência Sorter”, será utilizada via coletor do cliente, onde o cliente irá acessar o sistema Velox pelo seu coletor.
Lembrando que para isso, a rede (Wi-Fi) do cliente deve estar configurada corretamente para que consiga acessar o sistema Velox via coletor.
Todas as posições da rua devem estar devidamente identificadas com código de barras correspondente a loja.
Operador irá utilizar a tela de “Volumes Exceção” já existente no sistema Velox.
A abertura e fechamento de posição pallet será controlado via tela do coletor, onde o operador visualiza as opções para abertura diretamente no sistema via coletor.
As etiquetas são impressas pelo cliente em sequência ordenada.
Operador verificará as etiquetas que estão no pallet, informando as lojas que pedem esse produto.
Ao chegar na loja informada na etiqueta, deverá realizar a leitura da etiqueta da loja o sistema Velox solicita a leitura do número do pallet.
Operador inicia leitura dos volumes correspondentes a loja, deve ler a etiqueta de todos os volumes para aquela loja para finalizar.
Ao finalizar, sistema Velox informa o operador que nessa loja foi finalizada.
Verifica a etiqueta da próxima loja, fisicamente se desloca até a loja.
E repete o processo de separação descrito, até se encerre todas as etiquetas das lojas.
Caso o pallet da loja esteja cheio, operador deverá realizar o fechamento desse pallet e abrir um novo para continuar o processo.
As integrações continuarão da mesma forma e momentos, que existe atualmente na operação.
As posições pallets devem estar devidamente identificadas com os nomes das lojas/filiais.
Cada posição atenderá uma única loja/filial.
Operacionalmente:
Operador deverá realizar a leitura do código de barras dos itens que irão ser triados manualmente na operação de “Contingência Sorter” na tela de “Volumes Exceção” do sistema Velox, essa leitura fará a simulação de passagem no sorter e verificação se realmente o produto está devidamente integrado no sistema Velox.
Com o coletor de dados, o operador deverá a posições pallet da loja, antes de iniciar a triagem manual.
Com a posição pallet aberta, deverá acompanhar via coletor os itens esperados na loja conforme realizaram a leitura na tela de “Volumes Exceção”.
Ao realizar a leitura dos volumes do pallet no coletor, Velox indicará a quantidade esperada desse item, operador deverá ler item a item.
Ao realizar a leitura dos itens no coletor, confirma a inclusão do volume na posição pallet da loja.
Com isso o volume é alocado no pallet sistemicamente, até que o operador entenda que o pallet esteja cheio fisicamente.
Ao notar que o pallet está cheio fisicamente, deverá realizar o fechamento do pallet via coletor.
Ao fechar o pallet o sistema Velox, enviará a integração "Aloca PTL" para o WMS (integração existente atualmente).
O volume ao ser alocado no pallet, seja ele por passagem no sorter ou pela operação de contingência, caso passe o mesmo volume no sorter, ele seguirá para rejeito, e assim vice-versa. Pois o sistema já o processou em alguma operação, seja no sorter ou na contingência.
Responsabilidade cliente:
Importante!
Rede: A rede WIFI que o PDV estiver conectado deverá estar na mesma rede do servidor do sorter, para que haja a comunicação entre os equipamentos PDV e Servidor Sorter.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 0ece1bb744d79d86

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter e PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS do Maravilhas do Lar e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Maravilhas do Lar (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox)

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** bfbf9960f93f72dc

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Exemplo de acendimento de LED: O scanner lê a etiqueta e envia pela rede local para o servidor a informação, que devolve dentro da rede local o comando para o concentrador de qual led deverá ser aceso.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** a44642c0a7b064ff

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface com o sistema de controle da automação CLP Invent.
A aplicação Velox (MFC) da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Tipo de volumes  
**Score:** — (semantico) | **ID:** 641601eb00678988

Para atender as necessidades do time Beira Rio os transportadores serão utilizados para o transporte de caixas plásticas e caixas de papelão, sendo que as dimensões mínimas delas pode ser de até 400mm Comprimento, 250mm Largura e 250mm Altura, já as suas dimensões máximas devem ter 800mm Comprimento, 660mm Largura e 660mm Altura, assim como os parâmetros dimensionais teremos o peso mínimo de 500G e o peso máximo de 30KG.
Todos os volumes tratados no Sorter devem obedecer às especificações acima.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** d255578a4346b31b

O Sorter será composto de 2 (duas) induções e 13 (treze) rampas de saída sendo 12 (doze) rampas para desvios efetivos de acordo com seu mapa de destinos e rampas e 1 (uma) rampa para desvio de erros, a rampa de rejeito.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Portal de leitura  
**Score:** — (semantico) | **ID:** a861d9b0976bfe21

O portal de leitura terá 1 (uma) câmera, sendo que ela estará posicionada no topo do portal, ou seja, todos as etiquetas devem ser coladas na parte da frente da caixa (face frontal) e todas as induções devem garantir que a caixa passe pelo portal com a face da caixa que conte a etiqueta para frente de acordo com o fluxo do transportador.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Sinaleiro  
**Score:** — (semantico) | **ID:** e537c30286724c1b

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
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
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** PICK MAP  
**Score:** — (semantico) | **ID:** 0fa1f617b5e61c44

WMS  MFC
A definir

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** CONFIRMAÇÃO DE SEPARAÇÃO – Posto a Posto  
**Score:** — (semantico) | **ID:** 905626fbddab9c57

MFC  WMS
A definir

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** CONFERÊNCIA / REJEITO  
**Score:** — (semantico) | **ID:** 1ad2cbb1614e5774

MFC  WMS
A definir

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** SORTER  
**Score:** — (nome-topico) | **ID:** 0fe0f62c94b1bfaa

Composição e Funcionalidade
O sorter é equipado com um portal de leitura, que utiliza uma câmera para identificar os volumes.
Não possui balança, dimensionador ou outras câmeras integradas.
Configuração das Saídas
O sorter conta com cinco saídas:
Quatro saídas destinadas ao transporte, uma para cada transportadora ativa.
Uma saída de rejeito, localizada no final do transportador, para volumes não identificados ou com inconsistências.
Seladoras Pré-Sorter
Antes das rampas do sorter, existem duas seladoras (shrink machines).
A operação dessas máquinas é de responsabilidade da Andreani.
Cadastro de Rotas e Mapeamento
Cadastro de Rotas
Todas as rotas devem ser cadastradas previamente no sistema MFC, antes da criação do mapa de sorter.
Essa tarefa é de responsabilidade da Andreani.
Mapa de Sorter
O mapa de sorter será criado no sistema MFC, vinculando cada rota a uma rampa do sorter, respeitando a configuração do projeto.
O mapeamento também é responsabilidade da Andreani.
Fechamento de Pallet
Processo de Fechamento
O sistema MFC disponibilizará uma tela para o fechamento de pallets.
Procedimento:
Selecionar qual rampa será realizado o fechamento do pallet.
O operador deverá escanear o código do pallet no sistema MFC.
O sistema registrará o código e associará os volumes ao pallet correspondente.
Quando o pallet atingir sua capacidade máxima, o operador deverá fechá-lo no sistema e iniciar um novo pallet, seguindo o mesmo fluxo.
Regras Específicas
Um pallet não poderá ser fechado se ainda houver volumes pendentes para o pedido associado.
O PLC será responsável por enviar a confirmação de desvio de cada volume para o sistema MFC, garantindo agilidade e precisão no processo.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** Fluxo de Comunicação do Equipamento com Servidor Local  
**Score:** — (nome-topico) | **ID:** cf78e5b9f83c10e7

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** dc62659eaeff88c2

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
Ao longo de toda a extensão do sorter, haverá 8 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 9 rampas.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume ou pedido, a rampa de saída correspondente.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** d513ba333a154624

O sorter terá um portal com 2 (duas) faces (lados) de leitura, uma de topo e lateral e conta com 3 (três) saídas para atrelar diversas rotas e 1 (uma) saída para rejeito totalizando 4 (quatro) rampas ao todo.
O processo do sorter consistem na leitura do volume/caixa no portal de leitura onde a automação (CLP) informa ao WCS qual volume (pedido) que acaba de passar no portal de leitura, o WCS por sua vez verifica em sua base de dados as informações referentes ao pedido em questão e devolve a informação de desvio daquele pedido para automação (CLP) que realiza a tarefa (física) de desvio na rampa indicada.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** 4525fa36ad1f4fb9

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com os equipamentos da automação.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet em caso de servidor na nuvem.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor  
**Score:** — (nome-topico) | **ID:** ad67c795249ca174

O fluxo de comunicação do servidor com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC/OPC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC/OPC para depois retornar com a ação para o equipamento.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor  
**Score:** — (nome-topico) | **ID:** 7a14d9c483c37b2c

O fluxo de comunicação do servidor com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC/OPC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC/OPC para depois retornar com a ação para o equipamento.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor  
**Score:** — (nome-topico) | **ID:** f5393b925acd433a

O fluxo de comunicação do servidor com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC/OPC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC/OPC para depois retornar com a ação para o equipamento.

---
**Origem:** [I22.170] 2025 — `ESPECIFICACAO DE SOFTWARE - ADITIVO - Portal Kognex.docx`  
**Heading:** Comunicação  
**Score:** — (semantico) | **ID:** c3c63ef70e4d1f85

Os dois portais Cognex instalados na linha serão integrados diretamente ao PLC da Invent, responsável pelo controle do sorter.
A comunicação seguirá o padrão de protocolo Invent para portais, no qual o PLC atuará como intermediário entre o hardware de leitura Cognex e a aplicação WCS Velox.
O WCS Velox receberá os dados de leitura do PLC, processará as informações e executará o envio ao endpoint da C&A conforme descrito no item 2.1.

---
**Origem:** [I22.170] 2025 — `ESPECIFICACAO DE SOFTWARE - ADITIVO - Portal Kognex.docx`  
**Heading:** Descritivo Operacional  
**Score:** — (semantico) | **ID:** 83f7eba570a6a715

No projeto Optimus Prime, haverá dois portais Cognex, sendo um por linha de indução, totalizando dois pontos de leitura.
O fluxo operacional ocorrerá da seguinte forma:
O volume passa pelo portal Cognex.
O Cognex lê a etiqueta e envia o código ao PLC.
O PLC Invent encaminha o dado ao WCS Velox conforme protocolo padrão.
O WCS envia a informação à API da C&A no formato JSON.
O WMS irá gerar o arquivo ZPL correspondente ao volume e enviar a etiquetadora.
A etiquetadora realiza a impressão e aplicação da etiqueta final do volume de forma automática.
O volume segue para leitura e roteamento no sorter.
OBS: em caso de falha de leitura no portal a esteira será paralisada para remoção do volume e tratativa manual. A reativação da esteira deve ser feito pelo botão de rearme.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor  
**Score:** — (nome-topico) | **ID:** f63aef37c6c62fe6

O fluxo de comunicação do servidor com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC/OPC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC/OPC para depois retornar com a ação para o equipamento.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor  
**Score:** — (nome-topico) | **ID:** 9de4eec5d83977bf

O fluxo de comunicação do servidor com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC/OPC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC/OPC para depois retornar com a ação para o equipamento.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Cancelamento de Remessas  
**Score:** — (semantico) | **ID:** 7b9e6e7169c77096

Velox  WMS
Os dados que devem ser enviados (INSERT) do WMS para o Velox são os dados nas tabelas abaixo onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tabela SORTER.GPT_CANCELAMENTO_REMESSAS
Com esses dados o Velox realiza o cancelamento do volume e o sistema desconsidera este volume das pendencias de separação da esteira Invent.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Cancelamento de Volumes (Avarias)  
**Score:** — (semantico) | **ID:** 8feec3f943ff8ecb

O sistema VELOX deve oferecer uma tela específica com a funcionalidade de excluir volumes que estão aguardando processamento pelo sorter. Essa funcionalidade será essencial em situações como:
Avarias na caixa.
Problemas de leitura que impeçam o processamento adequado.
Nesses casos, o volume será devolvido ao estoque e excluído dos registros do VELOX.
Para realizar o cancelamento, será necessário autenticar um usuário com as permissões adequadas para executar essa ação. Após a conclusão do cancelamento, o sistema deve enviar a integração mencionada no item Cancelamento de Remessas, permitindo que o WMS execute os processos subsequentes.
Na tela só deve apresentar volumes que não foram alocados nos pallets (volumes que foram lidos no scanner da saídas das rampas)

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Cancelamento de Remessas  
**Score:** — (semantico) | **ID:** dffdde9084cf797b

Velox  WMS
Os dados que devem ser enviados (INSERT) do WMS para o Velox são os dados nas tabelas abaixo onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tabela SORTER.GPT_CANCELAMENTO_REMESSAS
Com esses dados o Velox realiza o cancelamento do volume e o sistema desconsidera este volume das pendencias de separação da esteira Invent.

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Cancelamento de Volumes (Avarias)  
**Score:** — (semantico) | **ID:** b39587047cbecc89

O sistema VELOX deve oferecer uma tela específica com a funcionalidade de excluir volumes que estão aguardando processamento pelo sorter. Essa funcionalidade será essencial em situações como:
Avarias na caixa.
Problemas de leitura que impeçam o processamento adequado.
Nesses casos, o volume será devolvido ao estoque e excluído dos registros do VELOX.
Para realizar o cancelamento, será necessário autenticar um usuário com as permissões adequadas para executar essa ação. Após a conclusão do cancelamento, o sistema deve enviar a integração mencionada no item Cancelamento de Remessas, permitindo que o WMS execute os processos subsequentes.
Na tela só deve apresentar volumes que não foram alocados nos pallets (volumes que foram lidos no scanner da saídas das rampas)

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 2068bd5f488a57ae

O O Sorter é projetado para processar até 4.000 volumes por hora, com base na eficiência da separação (Full Case, Fracionado, Picking Cart). Ele é composto por um portal de leitura com 2 faces de leitura (laterais), que garantem a leitura dos volumes, desde que as etiquetas estejam posicionadas nas laterais das caixas. Essas faces de leitura permitem que o WCS realize o checkout para pedidos do tipo Full Case e Fracionado.
O Sorter conta com 8 rampas de saída para o transporte dos volumes e 1 rampa exclusiva para rejeito, totalizando 9 rampas. Cada uma das rampas de saída de transporte é equipada com um leitor de código de barras e um conversor, totalizando 8 leitores e 8 conversores, responsáveis por capturar as informações das etiquetas e fazer a comunicação com o sistema WCS.
O processo no Sorter inicia com a leitura da caixa no portal de leitura. O sistema captura a etiqueta da caixa, que é enviada para o Controlador Lógico Programável (CLP). O CLP, então, encaminha as informações para o WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, informando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme os PTLs ativos e os respectivos pedidos, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos no sorter devem conter uma etiqueta gerada pelo WCS, que inclui um QR Code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão direcionados automaticamente para o rejeito ou reprocessamento, de acordo com as regras de operação definidas.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 1.docx`  
**Heading:** Consulta e Resposta  
**Score:** — (semantico) | **ID:** b4d01078244aec9b

O WCS aguarda a resposta do WMS com as informações de autorização (faturado) e número da rampa de destino:
Autorizado: O WCS direciona imediatamente o volume para a rampa indicada.
Não autorizado ou timeout: O WCS envia o volume para recirculação, respeitando o número máximo de voltas parametrizado.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Fluxo de comunicação do equipamento com servidor local  
**Score:** — (nome-topico) | **ID:** ae56de45f7d0e267

O fluxo de comunicação do servidor local com os equipamentos de chão-de-fábrica funciona da seguinte maneira:
Os equipamentos de chão-de-fábrica se comunicam diretamente com o servidor que está na mesma rede e troca mensagens com o PLC.
Será sempre um fluxo de ida e volta, os equipamentos enviam para o servidor a informação que devolverá com a decisão do que deve ser realizado, acendimento de led, desvio ou qualquer outra ação, em algumas ações além do equipamento comunicando com o servidor, a aplicação ainda irá comunicar com o PLC para depois retornar com a ação para o equipamento.
Este fluxo com rede local garante maior velocidade no acendimento e toda troca de informações, por não depender de internet nem de servidor na nuvem.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** a6f309cbe1b4f939

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, Além de controlar a liberação de tarefas de separação, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco Oracle).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** ce0a9f0d906002bd

A simulação fornece informações detalhadas sobre o número de pallets e volumes previstos para o processo de Sorter e PTL, além da quantidade de operadores necessários para execução dentro do tempo parametrizado.
Funcionalidades:
Cálculo das quantidades previstas para cada rampa do sorter com base no mapa de sorter ativo.
Identificação antecipada de possíveis pontos de gargalo na operação.
Possibilidade de ajustes no mapa de sorter antes do início da operação, garantindo otimização na distribuição de volumes e pallets nas rampas e eficiência na execução das tarefas.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Início de Onda  
**Score:** — (semantico) | **ID:** 4226dca594ed567f

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

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 77e79a382702d8b3

O sorter fará o desvio dos volumes de maneira automática conforme a disponibilidade dos PTLs para a separação de tarefas e crossdocking, seguindo as prioridades informadas na integração.
O agrupador de todos os pallets presentes no sorter será a loja destino que será informada via integração pelo WMS na integração da carga inicial.
A esteira deverá realizar o desvio do mesmo item que solicite em mais de uma loja de maneira cadenciada para não ocorrer sobrecarga de volumes na mesma rampa prejudicando o operador.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** f7114c00d9e8055d

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Zaffari) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Orientação de indução  
**Score:** — (nome-topico) | **ID:** fb35176a1c112480

Descrição:
A orientação de indução no WCS será responsável por sugerir a ordem de indução dos pallets no stage-in, levando em consideração a matriz de fragilidade de cada item alocado no pallet, bem como a disponibilidade dos produtos. O objetivo é garantir que os itens sejam induzidos de forma otimizada, priorizando a segurança e a eficiência do processo. Porém a orientação não é restritiva dando flexibilidade da operação decidir qual pallet vai induzir.
Funcionalidade:
Exibição na Tela de Indução:
A tela de indução exibirá as seguintes informações essenciais para os operadores:
Ordem de indução: Indica a sequência na qual os pallets devem ser induzidos para o processo, com base na prioridade e na fragilidade dos itens.
RG do pallet: Apresenta a identificação única de cada pallet, permitindo o rastreamento e controle durante o processo de indução.
Matriz de fragilidade: Exibe a categoria de fragilidade do pallet, com base nos itens que estão alocados nele. Isso determina a posição dos itens no pallet e a ordem de indução.
Indução de Pallets:
O WCS irá utilizar a ordem de indução para determinar qual pallet será induzido a seguir. O processo será baseado nos seguintes critérios:
A disponibilidade dos itens no pallet, assegurando que o processo de indução ocorra sem interrupções ou falta de produtos.
A matriz de fragilidade de cada item no pallet, que será um fator crucial na priorização da indução. Itens mais frágeis podem ser induzidos em uma sequência que minimize o risco de danos durante o processo.
Status dos volumes: Um pallet sairá da lista de indução somente quando todos os volumes pertencentes ao pallet estiverem com status finalizado. Caso algum volume fique travado ou pendente por algum motivo operacional, o pallet permanecerá como pendente na lista.
Objetivo:
O objetivo da orientação de indução é garantir que a indução dos pallets seja realizada de maneira otimizada, respeitando as prioridades dos itens, sua fragilidade e a disponibilidade no stage-in. Esse processo ajudará a evitar danos aos produtos, aproveitar melhor o espaço disponível e garantir a eficiência operacional durante a movimentação dos pallets.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** 93a1ac7e7afa9070

O sorter fará o desvio dos volumes de maneira automática conforme a disponibilidade dos PTLs para a separação de tarefas e crossdocking, seguindo as prioridades informadas na integração.
O agrupador de todos os pallets presentes no sorter será a loja destino, categoria do produto (Alimentício/Não Alimentício) e tipo de embalagem que será informada via integração pelo WMS na disponibilização no final da coleta dos pallets.
A esteira deverá realizar o desvio do mesmo item que solicite em mais de uma loja de maneira cadenciada para não ocorrer sobrecarga de volumes na mesma rampa prejudicando o operador.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Ocorrências  
**Score:** — (semantico) | **ID:** 0cdc2cb4fefbe0d4

Em caso de avaria, extravio e necessidade de cancelamento, para que o Sorter pare de aguardá-lo e para que o WMS realize a tratativa necessária, o processo de abertura e tratamento de ocorrências será realizado conforme o fluxo descrito abaixo.
Para iniciar o processo, o operador deve acessar a tela de "Volumes" no sistema WCS. A partir daí, o operador deve filtrar por um dos códigos do produto ou descrição e selecionar um dos volumes na lista que estiver com o status diferente de finalizado. Ao clicar em abrir ocorrência, o WCS exibirá um pop-up solicitando que o operador informe o motivo da ocorrência.
Caso haja mais de um volume a ser tratado, o operador pode realizar esse processo para todos os volumes necessários. Após a abertura da ocorrência, os volumes que precisam ser tratados devem ser acessados na tela de Ocorrências, onde o WCS exibirá uma lista de todos os volumes com ocorrência aberta, ordenada por Destino (LOJA).
O operador pode selecionar um ou mais volumes para aprovar ou não a ocorrência. Caso ele selecione Cancelar, o WCS desconsiderará essas ocorrências selecionadas e finalizará o registro delas internamente. Se o operador selecionar Aprovar, ele deverá filtrar e selecionar apenas volumes do mesmo destino por vez. Após selecionar todos os volumes que deseja aprovar a ocorrência (cancelamento), o WCS solicitará a leitura de uma master.
Após a leitura da master e confirmação o WCS irá disparar a integração dos volumes agrupados pela master lida para o WMS, sinalizando o cancelamento dos volumes e permitindo o prosseguimento do processo com a devida tratativa. O WCS deve permitir que o operador utilize uma master que já foi utilizada no processo de Ocorrências e o WMS deve aceitar a mesma master mais de uma vez.
Esse processo garante a precisão na identificação e controle dos volumes que necessitam de cancelamento, permitindo que o WMS tome as ações necessárias, como o tratamento do volume ou ajuste nas movimentações logísticas.
4.1.2. Especificação de Volumes Induzidos no Sorter
Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:
4.1.4. Contingência do Sorter (IA)
A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá disponibilizar a tela para caso se faça necessária.

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** aa527fbfa1b3604b

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter e PTL, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** Sorter  
**Score:** — (nome-topico) | **ID:** c7c5883b0f37424a

O sorter fará o desvio dos volumes de maneira automática conforme a disponibilidade dos PTLs para a separação de tarefas e crossdocking, seguindo as prioridades informadas na integração.
Todos os volumes induzidos no sorter, devem conter o Sinal integrado no sistema WCS.
O agrupador de todos os pallets presentes no sorter será a loja destino que será informada via integração pelo WMS volume a volume.
A esteira deverá realizar o desvio do mesmo item que solicite em mais de uma loja de maneira cadenciada para não ocorrer sobrecarga de volumes na mesma rampa prejudicando o operador.

---
**Origem:** [RD GRAVATAI] 2025 — `I21.1402 - ESPECIFICACAO DE SOFTWARE - RD_GRAVATAI. REV.1.docx`  
**Heading:** Pontos de Atenção  
**Score:** — (semantico) | **ID:** a61cfd7f8e920fab

Vale ressaltar que as atividades acima são atividades predecessoras;
O banco de dados seja instalado antes mesmo da aplicação do MFC;
Caso haja alteração na String do banco MIF, importante sinalizar previamente;
Importante time RD realizar backup de tudo sobre o servidor anterior/atual;
