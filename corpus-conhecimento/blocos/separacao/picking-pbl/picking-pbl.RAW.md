# picking-pbl.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Separação PBL (Picking By Light)  
**Score:** — (nome-topico) | **ID:** fdfb12c274b365e2

Estações de picking:
Ao total são 8 estações, cada estação é composta por 2 postos, totalizando 16 postos. Cada posto dispõe de 52 posições de picking sendo 36 na frente e 16 nas costas e cada posição com 1 display de 3 dígitos + botão led, conforme imagens ilustrativas abaixo:
Cada posto da frente, terá um display de 6 (seis) dígitos informando o número da caixa de separação atual, conforme imagem ilustrativa abaixo:
Com a leitura correta da etiqueta da caixa no início da linha, a caixa segue pela linha expressa e ao chegar no leitor da estação, caso tenha produtos a serem separados em algum posto da estação, a caixa será desviada para dentro da estação de picking e direcionada para o lado do posto onde solicita separação de itens.
Separação em 1 posto da estação (frente): caso o volume solicite separação em 1 dos postos da estação, a automação direciona a caixa para o posto que solicita separação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto foi concluída e com isso induza a caixa na linha expressa onde seguirá para a próxima estação picking.
Separação em 2 postos da estação (frente): caso o volume solicite separação nos dois postos da estação, a automação direciona a caixa para o posto que antecede o leitor da estação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acionadas na cor verde indicando ao operador que a separação naquele posto foi concluída e então operador induz a caixa na linha expressa onde será lida novamente pelo leitor da mesma estação e ao entrar na estação, será direcionada para o posto após o leitor e os leds das posições serão acionados conforme mencionado acima e ao finalizar a separação, todos os leds do posto serão acesos indicando ao operador que a separação naquele posto foi concluída, operador induz novamente a caixa na linha expressa onde seguirá para a próxima estação de picking.
Separação em 1 posto da estação (frente + costas): caso o volume solicite separação em 1 posto da estação que tenha produtos para serem separados na frente e costas, os leds das posições (frente e costas) solicitadas serão acesos na cor rosa e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição da frente, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação dos produtos da frente, segue para separar os produtos com as posições acionadas nas costas do operador, realiza o mesmo processo de separação mencionado acima, após separar todos os produtos das costas, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto (frente e costas) foi concluída e com isso induz a caixa na linha expressa onde seguirá para a próxima estação de picking.
O WCS não fará a validação de lote na separação de produtos tanto nos flowracks quanto no picking cart.
A validação do lote deverá ser feita apenas na conferência.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Tela de endereços  
**Score:** — (semantico) | **ID:** 5e18c33cfb9b1cc7

Será disponibilizada no WCS uma tela específica para visualização e gerenciamento de localizações, com o objetivo de oferecer controle total sobre os endereços de separação fora do Flowrack e também permitir a administração dos endereços dentro do Flowrack, conforme aplicável.
Localizações contempladas:
Controlados344;
Picking Fundo;
Geladeiras;
Polícia Federal;
Flowrack
A tela permitirá:
Visualização completa das localizações cadastradas no sistema, segmentadas por tipo e setor;
Criação e exclusão de endereços de picking fora do flowrack , restrita aos perfis com permissão de liderança.
Filtros por setor, status do endereço e tipo de picking.
Essa funcionalidade visa facilitar a expansão, readequação ou manutenção das localizações de picking, garantindo flexibilidade operacional e controle sobre as áreas que não fazem parte da automação Flowrack.
O sistema WCS fará o controle de saldo da posição de picking e na área pulmão, com isso deverá ter uma quantidade limite de segurança cadastrada no sistema WCS, para quando a quantidade de produtos atinja esse limite, o WCS disponibilizará a informação de reabastecimento em tela informando quais produtos, lotes, posições devem ser reabastecidas.
A quantidade limite, deve considerar a soma dos produtos do pulmão e posição picking.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** FlowHack (Baixo Giro)  
**Score:** — (semantico) | **ID:** ec8b2f97161674a8

Quando o MAC Address for lido no PDV, confirmado visualmente que o SKU está correto e o produto estiver parametrizado para uma posição de FlowHack no Picking Map, o WCS acenderá o LED da posição na cor verde, indicando ao operador em qual posição/caixa o item deve ser colocado. Após colocar o item na caixa, o operador confirmará a ação pressionando o LED.
Em cada posição, haverá uma caixa onde os itens deverão ser depositados conforme a triagem. Seguindo a parametrização informada no Picking Map, ao completar X unidades naquela posição, o WCS acenderá o LED na cor azul após a confirmação de alocação e imprimirá uma etiqueta com o QrCode de todos os MacAdrees que foram alocados nesta caixa, seguindo o layout abaixo:
Com a etiqueta impressa, o operador vincula-a à caixa e confirma a ação pressionando o LED novamente. Após essa confirmação, o operador empurrará a caixa para o outro lado do FlowHack. Haverá um outro parâmetro informado no Picking Map, que indicará o número de caixas que precisam ser formadas para que o operador do outro lado retire as caixas e as coloque no pallet. Quando o número de caixas parametrizado para aquela respectiva posição for alcançado, o LED na parte de trás do FlowHack será aceso, indicando quantas caixas o operador deve retirar e alocar no pallet para posterior transporte ao estoque. Esta é a última etapa que compete ao WCS no que se refere aos produtos de baixo giro (FlowHack).
A alocação dos volumes retirados para o pallet não é de responsabilidade do WCS.
Pode haver casos em que o volume recebido contenha, em seu QR Code, o valor já parametrizado de uma caixa. Neste cenário, após a validação pela operação, o WCS deve apenas indicar a posição onde o volume inteiro deve ser alocado, sem a necessidade de alocar item por item.
O WCS sempre deverá questionar via pop-up se a etiqueta de finalização do volume deve ser impressa ou não. Como já mencionado, em casos em que uma etiqueta já tenha sido impressa, não será necessária a impressão de uma nova.
Observação: O mesmo SKU pode estar em mais de uma posição no FlowHack. Nesses casos, o WCS deverá realizar a alocação de forma cadenciada, considerando a visão de caixas. Ou seja, o sistema formará uma caixa na posição 1, depois formará outra caixa na posição 2 e, em seguida, retornará à posição 1 para completar a alocação.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Anomalias  
**Score:** — (semantico) | **ID:** c2c5e637561dbde5

No cadastro do Picking Map, a operação separará algumas posições do FlowHack que serão dedicadas exclusivamente para itens considerados "anomalias", ou seja, produtos que apresentem qualquer tipo de erro.
As anomalias possíveis são:
Itens que não estão presentes na base de dados importada pela operação.
Itens que possuem um MAC Address cadastrado, mas que, ao verificar o SKU, o operador constata que não está compatível com o físico.
Caso seja bipado um item e ele esteja na base de dados, mas não pertença à nota fiscal selecionada pelo operador, este item não será considerado uma anomalia. Nesse caso, deve ser informado apenas que o item não pertence àquela nota.
Cada tipo de anomalia deverá conter um código fixo para ser preenchido no picking map e o WCS ter conhecimento de qual posição pertence a cada tipo de erro. Estes códigos deverão ser padronizados durante a implantação do projeto. Segue Exemplo :
Posição 123 = anomalia código 1 – Anomalias que não estão presentes na base.
Posição 124 = anomalia código 2 – Itens que o MacAdress informado não está condizente com o físico.
Nestas posições tambem será padronizado uma quantidade de itens para serem formados uma única caixa e serem impressas as etiquetas com os Mac Adress no QrCode do volume, seguindo as mesmas regras de uma posição padrão de flowhack.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Fracionados (PBL)  
**Score:** — (semantico) | **ID:** 96447d3e8c215a55

Para iniciar o processo, o sistema WCS, deverá receber via integração todas as informações dos pedidos cubados, previstos para a operação atual.
WCS deverá receber os pedidos cubados pelo WMS, assim como a quantidade e tipos de caixas que serão utilizados para a separação do pedido.
Com isso, WCS informa na tela do order start, quantas caixas e tamanhos necessários para atender o pedido, conforme o cálculo realizado pelo WMS.
Operador realiza a impressão das etiquetas necessárias para aquele pedido e fixa as etiquetas nas caixas conforme a informação na tela do WCS.
Ao realizar o processo de impressão e fixação das etiquetas nas caixas, operador induz as caixas na linha para seguir para as estações de separação.
Na parte de PBL teremos 2x Order Start posicionados de forma estratégica para aumentar a eficiência e diminuir fluxo de volumes em postos que não deveriam passar, o primeiro iniciando na linha A3 que deverão exibir somente os volumes que iniciam a coleta na linha 
A3, o segundo Order Start na Linha A2 que não exibirá os volumes que possuem coleta na linha A3.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Fracionados A2 & A3 (PBL – Linha Única)  
**Score:** — (nome-topico) | **ID:** 0ec9b22c943cdd32

Para garantir a rastreabilidade das coletas, é obrigatório que o operador realize o login na estação de separação antes de iniciar qualquer atividade de picking. O login será realizado diretamente na tela do PDV do posto, onde o operador deverá inserir suas credenciais (usuário e senha) para se identificar no sistema.
Caso uma caixa seja lida no scanner do posto e não haja um operador logado, o sistema não iniciará a tarefa de separação e sinalizará a pendência acendendo todos os LEDs na cor laranja. Após o login ser efetuado com sucesso no PDV, os LEDs do flow rack acenderão na cor azul, indicando que a estação está pronta para operar.
Ao chegar ao ponto de leitura da linha, essa etiqueta será lida por um leitor fixo e o sistema fará a identificação do volume e verifica se existem produtos a serem separados no posto referente.
Caso exista produtos a serem separados nesse posto de separação a caixa então ficará parada em frente à estação. o operador terá 2 (Frente e Costas) possíveis locais de separação:
O sistema WCS deverá permitir 1 (uma) ou mais posições com o mesmo SKU.
Flow Rack – A2 Frente Alto Giro – (Curva A e B)
15 módulos de flow rack
12 posições por módulo
180 total de posições
1 (um) led (3 dígitos) por posição
Flow Rack – A3 Frente Alto Giro – (Curva A e B)
15 módulos de flow rack
8 posições por módulo
120 total de posições
1 (um) led (3 dígitos) por posição
Caso tenha produtos a serem separados no flow rack (equipamento que fica na frente do operador da estação), os leds (3 dígitos) que são únicos por posição de produtos deverão acender informando ao operador a quantidade de cada item que deverá ser separado para aquele pedido, operador realiza a separação do item da posição conforme a quantidade indicada, e aperta o botão aceso da posição informando que aquele item foi separado, e segue para a próxima posição acesa e repete o processo até que separe todos os itens das posições acesas.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação foi concluída com sucesso.
Caso tenha produtos a serem separados nos Nichos (Costas), os leds do Flow Rack (Frente) deverão acender em rosa, conforme descrito nos próximos itens.
Operador poderá confirmar o número da caixa que está sendo separada no display (6 dígitos) que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack onde o operador ao apertar esse botão, automaticamente o sistema WCS gera um novo volume de separação para esse pedido e será a próxima a ser liberada no order start.
A2 Costas Médio Giro – (Curva C)
15 módulos de flow rack
24 posições por módulo
360 total de posições
1 (um) led (3 dígitos) por posição
A3 Costas Médio Giro – (Curva C)
15 módulos de flow rack
24 posições por módulo
360 total de posições
1 (um) led (3 dígitos) por posição
Caso tenha produtos a serem separados apenas nos nichos (equipamento que fica nas costas do operador), os leds (3 dígitos) do Flow Rack (Frente) acenderão na cor Rosa, informando visualmente o operador que existe separação nas costas e os leds (10 dígitos) das posições dos produtos dos nichos deverão acender informando ao operador o endereço e a quantidade de cada item que deverá ser separado para aquele pedido, operador realiza a separação do item da posição conforme a quantidade indicada, e aperta o botão aceso da posição informando que aquele item foi separado, e segue para a próxima posição acesa e repete o processo até que separe todos os itens das posições acesas.
Ao finalizar a separação de todos os itens solicitados dos Nichos, todas as posições dos nichos acenderão cor verde informando que a separação nos nichos foi concluída com sucesso.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação foi concluída com sucesso. Operador poderá confirmar o número da caixa que está sendo separada no display (6 dígitos) que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack (frente) onde o operador ao apertar esse botão, automaticamente o sistema envia uma nova caixa para esse pedido e será a próxima a ser liberada no order start.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Fracionados A (PBL - Fila Expressa)  
**Score:** — (nome-topico) | **ID:** 3e2167743122d1a8

Para garantir a rastreabilidade das coletas, é obrigatório que o operador realize o login na estação de separação antes de iniciar qualquer atividade de picking. O login será realizado diretamente na tela do PDV do posto, onde o operador deverá inserir suas credenciais (usuário e senha) para se identificar no sistema.
Caso uma caixa seja lida no scanner do posto e não haja um operador logado, o sistema não iniciará a tarefa de separação e sinalizará a pendência acendendo todos os LEDs na cor laranja. Após o login ser efetuado com sucesso no PDV, os LEDs do flow rack acenderão na cor azul, indicando que a estação está pronta para operar.
Ao realizar o login, todos os leds do flow rack acenderão azul, informando que o login foi realizado com sucesso.
Ao chegar ao ponto de leitura da linha, essa etiqueta será lida por um leitor fixo e o sistema fará a identificação do volume e verifica se existem produtos a serem separados no posto referente.
Caso exista produtos a serem separados nesse posto de separação a caixa então é desviada para a estação. Ao ser desviada na estação de separação, o operador terá 2 (Frente e Costas) possíveis locais de separação:
O sistema WCS deverá permitir 1 (uma) ou mais posições com o mesmo SKU.
Flow Rack – Frente Alto Giro – (Curva A e B)
16 módulos de flow rack
12 posições por módulo
192 total de posições
1 (um) led (3 dígitos) por posição
Caso tenha produtos a serem separados no flow rack (equipamento que fica na frente do operador da estação), os leds (3 dígitos) que são únicos por posição de produtos deverão acender informando ao operador a quantidade de cada item que deverá ser separado para aquele pedido, operador realiza a separação do item da posição conforme a quantidade indicada, e aperta o botão aceso da posição informando que aquele item foi separado, e segue para a próxima posição acesa e repete o processo até que separe todos os itens das posições acesas.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação foi concluída com sucesso.
Caso tenha produtos a serem separados nos Nichos (Costas), os leds do Flow Rack (Frente) deverão acender em rosa, conforme descrito nos próximos itens.
Operador poderá confirmar o número da caixa que está sendo separada no display (6 dígitos) que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack onde o operador ao apertar esse botão, automaticamente o sistema WCS gera um novo volume de separação para esse pedido e será a próxima a ser liberada no order start.
Costas Médio Giro – (Curva C)
15 módulos de flow rack
24 posições por módulo
360 total de posições
1 (um) led (3 dígitos) por posição
Caso tenha produtos a serem separados apenas nos nichos (equipamento que fica nas costas do operador), os leds (3 dígitos) do Flow Rack (Frente) acenderão na cor Rosa, informando visualmente o operador que existe separação nas costas e os leds (10 dígitos) das posições dos produtos dos nichos deverão acender informando ao operador o endereço e a quantidade de cada item que deverá ser separado para aquele pedido, operador realiza a separação do item da posição conforme a quantidade indicada, e aperta o botão aceso da posição informando que aquele item foi separado, e segue para a próxima posição acesa e repete o processo até que separe todos os itens das posições acesas.
Ao finalizar a separação de todos os itens solicitados dos Nichos, todas as posições dos nichos acenderão cor verde informando que a separação nos nichos foi concluída com sucesso.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação foi concluída com sucesso. Operador poderá confirmar o número da caixa que está sendo separada no display (6 dígitos) que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack (frente) onde o operador ao apertar esse botão, automaticamente o sistema envia uma nova caixa para esse pedido e será a próxima a ser liberada no order start.
ShortPicking
Em casos que o operador verifique que a quantidade física do produto solicitado para ser separado é inferior que a quantidade solicitada pelo sistema no pedido, operador deverá apertar o botão no led da posição com sinal de menor para diminuir a quantidade no sistema, e realiza a separação da quantidade real disponível.
Exemplo: Pedido no sistema solicita 10 (dez) unidades do sku ‘XPTO’, operador ao realizar a separação nota que fisicamente existe apenas 8 (oito) unidades desse sku, operador aperta o botão para diminuir a quantidade até 8 (oito), realiza a confirmação apertando o botão do led confirmando a separação de 8 (oito) unidades do sku ‘XPTO’, realizando assim o processo de ShortPicking.
Com isso, o WMS ao receber as informações de separação realiza a tarefa de reabastecimento.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Pendência  
**Score:** — (semantico) | **ID:** a47c5705aac4e003

Quando o operador identificar uma ruptura de estoque na posição de picking ou seja, quando a quantidade física disponível for inferior à solicitada ele deverá, por meio do coletor:
Ajustar a quantidade efetivamente disponível;
Realizar obrigatoriamente a leitura do código de barras do endereço;
Selecionar o motivo do corte entre as opções pré-configuradas no sistema.
Essas informações serão enviadas ao WCS, que realizará a inserção de um registro de pendência na Tabela de Pendências do WMS, contendo o SKU, posição, quantidade coletada e motivo da ocorrência. O objetivo é fornecer ao WMS todos os dados necessários para que o tratamento da pendência ocorra de forma centralizada.
O operador não é responsável por decidir o corte da tarefa. Sua função é registrar corretamente a anomalia e prosseguir com a separação dos demais itens da tarefa.
Identificação de Pendência no Processo de Tratamento
No processo de tratamento de pendências, o sistema WCS deve considerar exclusivamente os registros que foram previamente enviados por ele à tabela de pendências do WMS (Winthor), garantindo que o controle e o fluxo estejam restritos às ocorrências originadas pela operação automatizada. O sistema garantirá que a gestão de pendências esteja alinhada com as tarefas geradas pelo WCS, evitando confusão com registros originados por outras fontes.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Separação PBL (Picking By Light)  
**Score:** — (nome-topico) | **ID:** 5bbbac0a8ae4375d

Estações de picking:
Ao total são 10 estações, cada estação é composta por picking frente e costas. Cada posição de picking frente com 1 display de 3 dígitos + botão led, conforme imagens ilustrativas abaixo:
Cada posto da frente, terá um display de 6 (seis) dígitos informando o número da caixa de separação atual, conforme imagem ilustrativa abaixo:
Com a leitura correta da etiqueta da caixa no início da linha, a caixa segue pela linha expressa e ao chegar no leitor da estação, caso tenha produtos a serem separados em algum posto da estação, a caixa será desviada para dentro da estação de picking e direcionada para o lado do posto onde solicita separação de itens.
Separação em 1 posto da estação (frente): caso o volume (tarefa) solicite separação em 1 dos postos da estação, a automação direciona a caixa para o posto que solicita separação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto foi concluída e com isso induza a caixa na linha expressa onde seguirá para a próxima estação picking.
Separação em 2 postos da estação (frente): caso o volume (tarefa) solicite separação nos dois postos da estação, a automação direciona a caixa para o posto que antecede o leitor da estação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acionadas na cor verde indicando ao operador que a separação naquele posto foi concluída e então operador induz a caixa na linha expressa onde será lida novamente pelo leitor da mesma estação e ao entrar na estação, será direcionada para o posto após o leitor e os leds das posições serão acionados conforme mencionado acima e ao finalizar a separação, todos os leds do posto serão acesos indicando ao operador que a separação naquele posto foi concluída, operador induz novamente a caixa na linha expressa onde seguirá para a próxima estação de picking.
Separação em 1 posto da estação (frente + costas): caso o volume (tarefa) solicite separação em 1 posto da estação que tenha produtos para serem separados na frente e costas, os leds das posições (frente e costas) solicitadas serão acesos na cor rosa e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição da frente, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação dos produtos da frente, segue para separar os produtos com as posições acionadas nas costas do operador, realiza o mesmo processo de separação mencionado acima, após separar todos os produtos das costas, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto (frente e costas) foi concluída e com isso induz a caixa na linha expressa onde seguirá para a próxima estação de picking.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Tela de endereços  
**Score:** — (semantico) | **ID:** 3232e283e9f0d7bf

Será disponibilizada no WCS uma tela específica para visualização, com o objetivo de oferecer apoio no controle sobre os endereços de separação do museu e permitir a administração dos endereços do museu e FlowRack e Transfer, conforme aplicável.
Localizações contempladas:
Museu
FlowRack
Transfer
A tela permitirá:
Visualização completa das localizações cadastradas no sistema, segmentadas por setor
Filtros por setor e produto.
Essa funcionalidade visa facilitar a expansão, readequação ou manutenção das localizações de picking e transfer, garantindo flexibilidade operacional e controle sobre as áreas que não fazem parte da automação FlowRack.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Limpeza de Canal de Buffer  
**Score:** — (semantico) | **ID:** 1ea81783a37af472

A limpeza de canal de buffer consiste na retirada de paletes cheios armazenados nas posições de buffer (níveis 4 e 5). Esses paletes estão em estocagem temporária e a operação pode solicitar sua retirada para a saída a qualquer momento, seja por necessidade de remanejamento, shelf life, ou qualquer outro motivo operacional.
Fluxo:
Passo 1 — Recebimento do TORD: O SAP envia ao WCS um IDOC do tipo WMTORD [TORD] solicitando a retirada do palete, informando a posição de origem (buffer) e a UD do palete.
Passo 2 — Registro e enfileiramento: O WCS registra a ordem de limpeza e a insere na fila do transelevador com a prioridade correspondente.
Passo 3 — Execução pelo transelevador: O transelevador localiza a posição de origem no seu mapa cartesiano [Transelevador], retira o palete e o direciona para o canal de saída de paletes. A partir do momento em que o palete chega ao canal de saída [Canal de saída], a responsabilidade do WCS se encerra, o WCS não controla nem rastreia o destino do palete após a saída.
Passo 4 — Confirmação: O WCS envia um WMTOCO ao SAP confirmando que o palete foi retirado da posição. O WCS zera o saldo da posição de origem e a disponibiliza para futuro uso.
Podem ocorrem casos em que devido a uma falha na gestão de estoque como posição vazia a movimentação não possa ser concluída a movimentação de retirada e para esses casos o WCS enviara o WMTOCO ao SAP informando no campo NLPLA com o destino “INVENTARIO”.
Como o buffer não está envolvido diretamente na coleta, não há necessidade de verificação de separação em andamento. A limpeza é direta.
Estrutura de retorno de confirmação de limpeza do buffer
Velox > SAP (WMTOCO)

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Aplicação do FEFO na Seleção  
**Score:** — (semantico) | **ID:** 98ef66483d2d13c3

Dentro da priorização por posição física, o WCS aplica a regra FEFO (First Expire, First Out) para garantir que os produtos com validade mais próxima sejam expedidos primeiro.
Fluxo de seleção:
O WCS identifica todas as posições de coleta do posto que possuem o SKU demandado.
Entre os paletes elegíveis de sequência 1 (frente), o WCS seleciona o palete com o lote mais velho elegível (FEFO).
O WCS verifica se todos os lotes do palete selecionado atende a premissa de range de shelf da data de fabricação.
Aprova o palete e lotes para coleta

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Controle de LEDs (Picking By Light)  
**Score:** — (semantico) | **ID:** 0fcb9a92f0234749

O WCS será responsável por controlar o acionamento dos LEDs em cada posto respeitando a configuração de prioridade parametrizada para a geração da lista de coleta [Lista de Coleta].
Sequência de acendimento:
Os LEDs deverão ser acionados conforme a ordem de prioridade definida.
Produtos do tipo PVAR sempre serão a primeira prioridade de coleta, as regras de coleta PVAR estão descritas no tópico seguinte [Coletas PVAR].
Dentro de cada posto, apenas os LEDs correspondentes às tarefas atribuídas ao operador deverão ser acionados.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Monitoramento de LED sem Coleta  
**Score:** — (nome-topico) | **ID:** 467ccb36d35bb305

O WCS deve realizar o monitoramento contínuo do tempo em que cada LED permanece aceso sem a confirmação da coleta pelo operador, com o objetivo de identificar desvios operacionais e garantir fluidez no processo de separação.
Para cada acionamento de LED, será iniciado um timer. Caso o operador não realize a confirmação dentro do tempo limite configurado o WCS deve disponibilizar essa informação em tempo real através da dashboard de coleta.
No dashboard, cada posto deve possuir uma linha representando seu status operacional. Quando um LED ultrapassar o tempo limite sem confirmação, a linha correspondente ao posto deverá mudar visualmente para uma cor de alerta (vermelha), indicando a existência de anomalia no processo.
Essa sinalização tem como objetivo permitir uma atuação rápida da operação, que deverá se deslocar até o posto indicado para verificar e tratar a causa da não execução da coleta.
A identificação detalhada da ocorrência como posição do LED, SKU e demais informações da coleta não será apresentada diretamente na dashboard, devendo ser obtida através de relatórios e outras telas do WCS, que permitirão à operação analisar o histórico e identificar o ponto exato da falha.
O tempo limite para caracterização de LED não atendido deve ser totalmente parametrizável, permitindo adequação conforme a dinâmica operacional do cliente.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Conclusão da Remessa  
**Score:** — (semantico) | **ID:** 05398369a2c4c3f7

Ao concluir a coleta de todos os volumes Full Case de uma remessa, o WCS verifica automaticamente se a mesma remessa também possui volumes de Picking Fracionado e direciona o operador conforme o cenário identificado:
Cenário A — Remessa sem volumes Fracionados:
O sistema indica ao operador que a tarefa Full Case está concluída e direciona-o ao ponto de expedição dos volumes. Nesse cenário, o operador segue diretamente para o despacho.
Cenário B — Remessa com volumes Fracionados:
O sistema NÃO permite a finalização imediata da tarefa Full Case. Em vez disso, o WCS exibe ao operador uma lista contendo, para a remessa em questão:
Posição(ões) de PTL onde estão alocados os volumes Fracionados;
Quantidade total de volumes Fracionados a serem retirados;
Identificação (etiqueta) de cada volume Fracionado esperado.
O operador deverá deslocar-se até as posições de PTL indicadas e realizar a leitura da etiqueta de cada volume Fracionado listado, retirando-os fisicamente das posições. Caso, no momento da consulta, ainda existam volumes Fracionados pendentes de separação para essa remessa, o operador deverá aguardar a conclusão do Picking Fracionado antes de prosseguir.
O sistema só liberará a finalização da tarefa Full Case após a leitura de todas as etiquetas esperadas. Concluída a leitura completa, o WCS direciona o operador ao ponto de expedição, transportando em conjunto os volumes Full Case e os volumes Fracionados retirados das posições de PTL.
Importante: as posições de PTL atendidas pela retirada serão automaticamente liberadas pelo sistema após a leitura de todas as etiquetas associadas àquela remessa.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Separación en el puesto  
**Score:** — (semantico) | **ID:** 210d383c4ee4d9f6

El proceso de picking se realizará mediante tecnología Pick-by-Light (PBL). Para iniciar el picking, el operador deberá escanear la etiqueta de volumen impresa durante el paso de Inicio del Pedido. Con este escaneo, el WCS activará automáticamente los LED correspondientes a las ubicaciones de picking, mostrando el número de artículos a recoger en cada posición.
Los volúmenes se estructurarán de forma que no sea necesario recoger ningún artículo en más de una estación. Todo el contenido de un volumen debe estar completamente separado dentro de una única estación de picking, lo que garantiza la segregación física y sistémica del proceso. Las estaciones de picking estarán físicamente contiguas y ubicadas una junto a la otra. Para evitar confusiones operativas, cada estación se identificará mediante colores alternados (por ejemplo, Estación 1 en azul, Estación 2 en naranja, Estación 3 también en azul, y así sucesivamente), lo que garantiza una clara diferenciación visual entre ellas.
Los LED de la parte frontal del dispositivo se iluminarán, indicando los artículos que se deben recoger en ese lado. El operador debe recoger el artículo según lo indicado en la pantalla LED y confirmar la recogida pulsando el botón del dispositivo. Este procedimiento debe repetirse hasta que se hayan revisado todos los LED frontales.
Una vez recogidos todos los artículos del volumen, los LED del proceso se iluminarán en verde, indicando el final de la actividad de picking para ese volumen. En este punto, el operador podrá devolver la caja a los rodillos libres, escanear la etiqueta del siguiente volumen y repetir el proceso de picking.
Cada punto de separación frontal tendrá:
1 (un) lector de código de barras;
1 (un) visualizador de 3 (tres) dígitos por posición/producto;
Imagen ilustrativa del botón de 3 (tres) dígitos:
Cada posición/producto estará equipado con 1 botón LED con pantalla de 3 dígitos, donde el botón se ilumina para indicar la posición de picking y la pantalla muestra la cantidad.
Como se muestra en la imagen ilustrativa a continuación:
Cuando el operador verifica que hay artículos para recoger en la estación, los recoge de acuerdo con los LED encendidos y las cantidades.
Al separar un artículo de una posición, el operador debe presionar el botón LED para que se apague, confirmando así que el artículo ha sido separado. Este proceso debe repetirse hasta que todos los artículos con LED encendidos se apaguen y sus productos estén separados.
Al finalizar la separación, los LED se iluminarán en verde, indicando que la recogida en esa estación ha finalizado, y la caja debe pasar al área de verificación.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Conceito de Estoque Sombra  
**Score:** — (semantico) | **ID:** 7fa0e8048b9e5266

O WCS não substitui a gestão de estoque global do WMS. Ele opera sob o conceito de "Estoque Sombra", onde:
Visibilidade: O WCS enxerga e gerencia exclusivamente o saldo das posições de picking (Flow Racks, Prateleiras com PTL e Pallets de Solo dentro do túnel).
Restrição: O WCS não possui visibilidade do estoque de reserva (Pulmão) ou de áreas externas à automação.
Sincronismo: Toda entrada de saldo no WCS ocorre via integração de Confirmação (WMS -> WCS) e toda saída ocorre via Picking ou Ajuste de Inventário (Auditorias ou Shortpicking).

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Operação de Fracionado (Frente / PBL)  
**Score:** — (semantico) | **ID:** cb865f073a1f97ce

Este fluxo ocorre nos Flow Racks equipados com displays luminosos (PBL), destinados a itens soltos (Fracionados).
Passo a Passo:
Chegada da Caixa: A caixa de transporte chega via esteira, o scanner do posto lê a caixa e para na frente do respectivo posto de trabalho.
Acendimento (PBL): Imediatamente, os displays das posições que contém produtos para aquele pedido acendem.
Cor: A cor do LED para coleta padrão acende em AZUL
Display: O visor numérico indica a quantidade a ser separada (ex: 5).
Execução:
O operador retira os itens do local indicado (Flow Rack).
Deposita os itens dentro da caixa de transporte na esteira.
Confirmação: O operador pressiona o botão luminoso do display PBL para confirmar a tarefa.
A luz apaga.
Se houver mais itens na mesma zona, a próxima luz se destaca.
Liberação: Quando todas as luzes da zona se apagarem, a esteira movimenta a caixa automaticamente para o próximo setor ou para a conferência.
*Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com os itens já coletados, enviando a mesma para reindução e para que possa seguir os próximos passos do processo.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do pedido, que será retomada no processo de Order Start com uma nova caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual, mantendo a rastreabilidade e a integridade da separação.
Obs: Quando o pedido for de um cliente especial o LED deve acender em rosa (para cada coleta), substituindo o comum (azul). Assim o operador facilmente de uma forma visual consegue identificar que aquele pedido é de um cliente especial. (A embalagem desses pedidos será feita no Packing).

---
**Origem:** [EURO] ADITIVO — `- ESPECIFICACAO DE SOFTWARE - Relatórios .docx`  
**Heading:** Inclusão de LEDs Acionados  
**Score:** — (semantico) | **ID:** 783b0ff298d952ea

Objetivo: Incluir uma nova coluna no relatório de Produtividade x Posto que apresente a quantidade de LEDs diferentes acionados naquele posto durante o intervalo de tempo selecionado.
Descrição Funcional:
O sistema deverá exibir uma nova coluna denominada “Qtd. LEDs Acionados”, apresentando o número de LEDs distintos que foram ativados no posto durante o período filtrado.
Serão contabilizados apenas LEDs únicos (distintos), ou seja, se o mesmo LED foi acionado múltiplas vezes, será contado apenas uma vez.
Esta informação permite avaliar a diversidade de operações realizadas no posto, auxiliando na análise de produtividade e distribuição de trabalho.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PTLRJ - ES - PICKING ILHA E LOGIN CRACHÁ.docx`  
**Heading:** Configuração da Linha (Layout Lógico)  
**Score:** — (semantico) | **ID:** bb7bfd56c0ebcd54

Postos Laterais (1, 2, 4 e 5):
Permanecem com os SKUs de alta rotatividade (Curva A).
Cada posto possui 32 posições de picking (Flow Rack).
Operadores fixos nestes postos.
Posto Central (Posto 3):
Será abastecido com outros SKUs (complementos ou baixa rotatividade) que não cabem nos postos laterais.
Não terá operador fixo exclusivo.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PTLRJ - ES - PICKING ILHA E LOGIN CRACHÁ.docx`  
**Heading:** Dinâmica de Cores e Separação (Multi-Picking)  
**Score:** — (semantico) | **ID:** 38d3b8bc9f78c8f6

Para evitar confusão, o sistema utilizará o sistema de luzes (PBL) com cores distintas para indicar quem deve buscar o produto no meio:
Atribuição de Cores: Cada operador logado nos postos laterais terá uma cor associada (Ex: Posto 1 = Azul, Posto 2 = Verde, etc.).
Gatilho do Picking:
Quando um pedido no Posto 1 precisar de um item que está apenas no Posto 3 (Ilha), a luz da posição correspondente no Posto 3 acenderá na cor AZUL (cor do operador do Posto 1).
O operador do Posto 1 se desloca até o meio, bipa/confirma o item na luz Azul e retorna para sua base.
Simultaneidade: Se o Posto 2 também precisar de um item do meio, outra posição acenderá em VERDE por exemplo. O sistema gerencia múltiplas cores simultâneas e caso o Operador 2 for coletar na ilha um mesmo item que acendeu para o Operador 1, o sistema funcionará como uma Fila, onde acenderá primeiro um e ao realizar a coleta o LED automaticamente acenderá da cor do próximo Operador.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ MANHATTAM - Tradução AU06 - Pack ILPN Message.docx`  
**Heading:** Fluxos de Processo  
**Score:** — (semantico) | **ID:** 118691bad1d34165

O Recall da área de PBL ocorre sempre que há necessidade de recolher um item/lote específico da área de PBL de volta para o inventário rastreado por LPN.
O processo de recall ocorre fisicamente no WCS. Sempre que realizado, o WCS notifica o WM com um Pick to iLPN recall para que o inventário seja sistemicamente separado (picked) da localização virtual do PBL para um iLPN.
O WCS envia a mensagem CAMO_Pack_iLPN para o MAWM; o MAWM empacota (packs) o iLPN da localização WCS e realiza o putaway direcionado pelo usuário para a localização de destino.

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - OTIMIZAÇÃO DE COLETA - ADITIVO.docx`  
**Heading:** Alocação no Stage – Pallets Provenientes do PBL  
**Score:** — (semantico) | **ID:** 63e7606db7ecbd92

Conceito:
pallets oriundos do PBL (pós-separação/agrupamento) devem ser direcionados para um Stage de Indução, permanecendo disponíveis e rastreáveis até a liberação da indução/expedição.
Passos
Ao finalizar o pallet no PBL, o WCS consolida as informações do agrupamento, incluindo:
Identificação do pallet (pega);
Lista de volumes/caixas vinculadas.
O operador deve acessar, via PDV do Posto de Indução, a tela de Stage para realizar a alocação do pallet.
Para confirmar a movimentação e alocação no Stage, o operador realiza:
leitura do RG do pallet; e
leitura do endereço do Stage de Indução.
Após a confirmação, o WCS registra a alocação e atualiza o status do pallet para:
NO_STAGE_INDUÇÃO.
Resultado esperado
Pallets provenientes do PBL ficam formalmente alocados e prontos para as etapas seguintes (Impressão automática e consumo de Master).

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Rev 5.docx`  
**Heading:** Gestão de Endereços de Picking  
**Score:** — (semantico) | **ID:** 5af9b3a162d50ae1

Será disponibilizada no WCS uma tela específica para visualização e gerenciamento de localizações, com o objetivo de oferecer controle total sobre os endereços de separação fora do Flowrack e também permitir a administração dos endereços dentro do Flowrack, conforme aplicável.
Localizações contempladas:
Estação 1 (EST01): Possui 299 posições.
Estações 2 (EST02) e 7 (EST07): Possuem 50 posições cada.
Estações 3, 4, 5 e 6 (EST03-EST06): Possuem 100 posições cada.
A tela permitirá:
Visualização completa das localizações cadastradas no sistema, segmentadas por tipo e setor;
Criação e exclusão de endereços de picking fora do flowrack, restrita aos perfis com permissão de liderança.
Filtros por setor, status do endereço e tipo de picking.
Essa funcionalidade visa facilitar a expansão, readequação ou manutenção das localizações de picking, garantindo flexibilidade operacional e controle sobre as áreas que não fazem parte da automação Flowrack.
Regra Específica
Não será permitido ao cliente criar, editar ou atrelar endereços pertencentes a postos que contenham LEDs.
Nesses casos, o gerenciamento deverá ser realizado exclusivamente pela equipe de implantação/desenvolvimento, para evitar inconsistências no mapa físico x lógico de separação.

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE REV.1 - ZENATUR.docx`  
**Heading:** Ajuste no abastecimento do PBL  
**Score:** — (nome-topico) | **ID:** b8080407dc0b96c0

O sistema MFC deverá restringir que haja mais de um lote e validade por posição do PBL. Se houver lote e validade distintos, devem ser alocados em posições diferentes, para que se saiba exatamente qual validade de determinado SKU foi coletado em cada caixa.
MFC deverá estar preparado para receber os novos campos de validade e lote por pedido na integração de onda de pedidos.

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE REV.1 - ZENATUR.docx`  
**Heading:** Reservas do PBL  
**Score:** — (semantico) | **ID:** 73a2c095f74f1265

Atualmente na geração de volumes, o MFC monta os volumes e identifica a necessidade de posições livres no PBL, Mezanino e Buffer, caso os espaços sejam insuficientes, o processo é cancelado e a geração dos volumes não é feito tanto quanto a integração, impossibilitando a geração de novas demandas.
O problema mais comum para impossibilitar a integração de novos pedidos é a falta de posições no PBL.
A fim de otimizar esse processo, o cliente sugeriu a criação de posições reservas do PBL, sendo a estrutura igual ao PBL atualmente.
Com isso, quando os volumes estiverem sendo gerados, quando não houver posições disponíveis no PBL principal para alocar os SKUs da onda, porém, se houver espaço para alocar no mezanino e buffer, deve ser gerado um retorno na geração de volumes informando que não existem posições disponíveis no PBL e caso os volumes possam ser gerados no PBL reserva, gerar novamente nos PBLs reservas.
Quando não houver posições suficientes no PBL principal, o MFC deve gerar os volumes em posições disponíveis do PBL principal e o que não couber, no PBL reserva.
Quando não houver mais posições vazias no PBL principal, o sistema deve começar a alocar os SKUs nas posições reservas com menor quantidade de picking restante para liberar a posição.
Ao gerar novamente os volumes com os pedidos, o sistema MFC coloca esses pedidos em fila para que, conforme as posições PBL principal forem liberadas será atualizada na tela de acompanhamento das alocações dos PBLs.
Quando toda a onda for alocada no PBL, MFC deve realizar a integração “Movimentação” para todas as tarefas da onda.
A “Movimentação” será integrada várias vezes para uma mesma onda, conforme abaixo:
Primeiro devem ser integradas as tarefas dos modais diferentes do PBL e as tarefas PBL que foram alocadas nas posições principais.
A cada transferência de posições reservas para posições principais do PBL, deve ser feita nova integração “Movimentação”
As tarefas só poderão ser enviadas quando o usuário do PBL acionar o botão do led confirmando que todo o material da posição foi consumido e a posição se encontra vazia.
Os leds frontais devem acender com uma cor diferente das cores, laranja, azul, vermelho, rosa e verde. Será uma cor única para identificar que a posição está vazia, se possivel informar “VAZ” nos displays.
Os leds traseiros devem apresentar a informação de “vazio”, indicando ao operado que a posição está vazia e liberada.

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE REV.1 - ZENATUR.docx`  
**Heading:** Consulta PBL  
**Score:** — (nome-topico) | **ID:** 3176626b87b857fd

MFC deve disponibilizar uma tela em que os operadores possam pesquisar a ocupação das posições de PBL, informando:
SKU alocado e sua respectiva quantidade
Pedidos e os respectivos volumes ZT.
% ocupação da posição
As informações do PBL principal e reserva devem ser apresentados em uma mesma linha.
Analisar a possibilidade de informar as características de cada posição que permitem que apenas determinados materiais sejam alocados nelas.

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE REV.1 - ZENATUR.docx`  
**Heading:** Cadastro de novas posições de PBLs virtuais  
**Score:** — (semantico) | **ID:** f1fac429297c553f

MFC deve possibilitar a criação de PBLs virtuais com uma descrição sequencial, por exemplo: PBL2 virtual, PBL3 virtual, PBL4 virtual etc.
Cada PBL denominado como virtual, terá apenas 1 nível e posições sequenciais (poderão ser criadas posições de acordo com a necessidade do operador)
Cada posição criada terá como padrão as seguintes dimensões: 0,6 m comp. X 1,0m prof. X 1,5m de altura. Essas dimensões poderão ser alteradas.
Antes dos volumes serem alocados no buffer, todos devem ser passados pelo Cross-Check.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** GAP 05 – Picking com coletor  
**Score:** — (semantico) | **ID:** 8875c547fbddc191

SAP envia dados de picking no final de cada estação quando não for pick by light Nessa interface, não irá fazer parte somente do peso variável, sendo assim, irá tratar
os dois modos: peso fixo e peso variável. Na tela do coletor, onde o operador lê a posição que deve começar o picking, e a remessa e número da caixa e informa o sku e quantidade que está pegando. Quando peso fixo, WCS recebe essas informações para serem processadas, também recebe os dados do usuário para que possa ser feito o relatório de produtividade. Caso seja peso variável, não será processado.
SAP  WCS

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Processo de Picking  
**Score:** — (semantico) | **ID:** bfddab7f923da639

A caixa de picking é lida pelo scanner no ponto de decisão e então o MFC direciona a mesma para a estação de picking ou segue reto para o próximo ponto.
Uma vez dentro da estação, a caixa é lida através de um novo Scanner, que está conectado ao barramento ATOP, onde a informação é transmitida pelo concentrador específico da estação de picking.
Ao identificar a caixa de picking, o MFC acende as posições com as quantidades à serem separadas para cada SKU. O operador por sua vez separa os itens e confirma no botão do display.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** f40fa4f44beb9213

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Picking, PBL e PTL tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Linha C – Picking by monitor  
**Score:** — (semantico) | **ID:** 49772e6f4a9a954b

Na linha C temos 16 estações e o picking dessa área será por PBM (Picking by Monitor) na frente e deverá também no monitor indicar quando tiver picking nas costas neste mesmo monitor, nesses casos de picking costa deve ser indicado no monitor com uma cor diferente.
O operador de cada estação deverá bipar com coletor manual (Responsabilidade do cliente) a etiqueta de cada caixa para abertura de picking, tendo picking na estação, o monitor apresentará a posição do SKU e quantidade que deve ser separada. A confirmação do picking ocorre na tela do monitor sendo um aparelho touch screen, após a confirmação do picking o operador devera acionar o pedal que libera a caixa para a próxima estação.
Caso o produto que precisa ser separado estiver até o meio desta linha e não tiver mais separação no restante, esta caixa deverá ser desviada no meio da linha (BYPASS) retornando para a linha principal e sendo direcionada para curvas A/B.
Caso tenha produtos no final da linha, ela deve seguir até a estação e retornar pelo outro lado após o picking.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** PTW - Batch picking  
**Score:** — (semantico) | **ID:** 2564aeec40d9b7d8

Posto para separação dos itens dentro dos pedidos batch picking, existem leds dos dois lados do Flow Hack, onde o lado da frente teremos a separação dos pedidos e o lado de trás teremos a retirada por nicho (espaços na prateleira).
O operador deve bipar a caixa no scanner fixo para vincular a caixa ao posto PTW e em seguida bipa os itens (SKU) no scanner fixo assim os LEDs (BY LIGTH) acenderam para indicar em qual nicho o operador deve colocar o item, após a finalização do pedido que estava dentro da caixa master o operador que está do outro lado do PTW é informado pelo LED acesso que aquela posição (Nicho), o mesmo retira os itens colocando os em uma caixa de acordo com as dimensões de cada nicho, imprime a etiqueta e cola na nova caixa.
Depois de todo processo de PUT-TO-WALL a caixa já etiquetada é devolvida a linha para seguir para fechadora de caixa.
Os computadores, coletores manuais e impressoras são de responsabilidade do cliente.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 6da7adc516899090

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Picking PBL e PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS da Eurofarma e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados dedicado, para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Eurofarma (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 4712265d16145dcd

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Picking, PBL e PTL tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Linha C – Picking by monitor  
**Score:** — (semantico) | **ID:** fcdd0bdc1a23d68a

Na linha C temos 16 estações e o picking dessa área será por PBM (Picking by monitor) na frente e deverá também no monitor indicar quando tiver picking nas costas neste mesmo monitor, nesses casos de picking costa deve ser indicado no monitor com uma cor diferente.
O operador de cada estação deverá bipar com coletor manual (Responsabilidade do cliente) a etiqueta de cada caixa para abertura de picking, tendo picking na estação, o monitor apresentará a posição do SKU e quantidade que deve ser separada. A confirmação do picking ocorre na tela do monitor sendo um aparelho touch screen, após a confirmação do picking o operador devera acionar o pedal que libera a caixa para a próxima estação.
Caso o produto que precisa ser separado estiver até o meio desta linha e não tiver mais separação no restante, esta caixa deverá ser desviada no meio da linha (BYPASS) retornando para a linha principal e sendo direcionada para curvas A/B.
Caso tenha produtos no final da linha, ela deve seguir até a estação e retornar pelo outro lado após o picking.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** PTW - Batch picking  
**Score:** — (semantico) | **ID:** ec78f8b05ada4c7c

Posto para separação dos itens dentro dos pedidos batch picking, existem leds dos dois lados do Flow Hack, onde o lado da frente teremos a separação dos pedidos e o lado de trás teremos a retirada por nicho (espaços na prateleira).
O operador deve bipar a caixa no scanner fixo para vincular a caixa ao posto PTW e em seguida bipa os itens (SKU) no scanner fixo assim os LEDs (BY LIGTH) acenderam para indicar em qual nicho o operador deve colocar o item, após a finalização do pedido que estava dentro da caixa master o operador que está do outro lado do PTW é informado pelo LED acesso que aquela posição (Nicho), o mesmo retira os itens colocando os em uma caixa de acordo com as dimensões de cada nicho, imprime a etiqueta e cola na nova caixa.
Depois de todo processo de PUT-TO-WALL a caixa já etiquetada é devolvida a linha para seguir para fechadora de caixa.
Os computadores, coletores manuais e impressoras são de responsabilidade do cliente.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 521ddb793f92e7ab

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Picking PBL e PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS da Eurofarma e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados dedicado, para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Eurofarma (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 691f15a40bb75b62

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de separação PBL, Sorter, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão- de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 7c6724ea5d314aac

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Linha de separação, PBL, Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS da EMIS MINAS e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela EMIS MINAS (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** ff4548cb2b8d016e

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de separação, PBL, Sorter, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão- de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.11.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 5f199f6278fac80a

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Picking, PBL e PTL tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.11.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** be30040d92d06834

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Picking PBL e PTL, tendo como papel fundamental a interface entre o sistema ERP/WMS da Eurofarma e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados dedicado, para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Eurofarma (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 86d86a7979b7cf61

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de separação, PBL, Sorter e PTM, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão- de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 2b63d3165cc2f76e

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Linha de separação, PBL, Sorter e PTM, tendo como papel fundamental a interface entre o sistema ERP/WMS do Lojas Pompéia e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Lojas Pompéia (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.3 – Distribuição de carga  
**Score:** — (semantico) | **ID:** b04ce25a5972c4eb

O WCS Velox deve considerar a distribuição de carga (peso) entre transelevadores em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.8 – Altura de pallets nas posições  
**Score:** — (semantico) | **ID:** 359a89aee0fb7152

O WCS Velox deve considerar a altura do pallet, isto é, o tipo do pallet (normal ou estendido), em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF8.3 – Otimização de fracionados  
**Score:** — (semantico) | **ID:** 80b066b91f5b166e

O WCS Velox deve otimizar o processamento de ordens de saída, permitindo a agregação de mais de uma ordem de saída por pallet num único movimento de saída.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Best Place  
**Score:** — (semantico) | **ID:** 1a950b03d678d364

A imagem abaixo apresenta as regras para executar o algoritmo BP – Best Place de escolha da melhor posição dentre todos os PLCs disponíveis. Neste algoritmo as entradas são as quíntuplas listadas na regra de Armazenamento com os TRELs que são candidatos a armazenarem o pallet. Quatro fatores diferentes da quíntupla são considerados na análise do algoritmo (P1, P2, P3 e P4 descritos na regra de Armazenamento), porém há uma prioridade destes fatores que segue a ordem:
P2 é a quantidade relativa de produtos dele SKU+Faixa no estoque todo comparando cada um dos corredores;
P3 é quantidade relativa produtos do mesmo SKU+Faixa armazenado no corredor em comparação com os demais produtos;
P4 é a célula disponível para armazenar de menor distância do TREL em questão;
P1 equivale ao número de missões do TREL.
A saída do algoritmo é a quíntupla identificada como a melhor opção de armazenamento e o destino do pallet será o TREL escolhido. O algoritmo BP está detalhado abaixo.
Caso a lista de TRELs com seus fatores possua apenas um item, significa que apenas um TREL atende a necessidade de armazenamento do pallet, logo, a posição escolhida é a posição calculada para este TREL.
A quíntupla do TREL escolhido é retornada.
Caso haja mais de um TREL na lista, o primeiro fator a ser analisado é o P2.
Selecionar os dois menores valores de P2 (n1 e n2, onde n1 é o menor valor), ou seja, os dois corredores que possuem a menor porcentagem do SKU+Faixa comparado ao estoque todo.
É comparada a diferença relativa entre n1 e n2: (|n1-n2|/n1) e caso o resultado esteja acima de 5% o TREL cujo P2 seja igual a n1 (menor P2) é escolhido.
A quíntupla do TREL escolhido é retornada.
Caso a diferença esteja abaixo de 5% o segundo critério será analisado, P3.
Dos dois TRELs escolhidos no critério P2, buscar os valores de P3 (n1 e n2, onde n1 é o menor valor), a porcentagem do SKU+Faixa comparado aos demais produtos do corredor.
É comparada a diferença relativa entre n1 e n2: (|n1-n2|/n1) e caso o resultado esteja acima de 5% o TREL cujo P3 seja igual a n1 (menor P3) é escolhido.
A quíntupla do TREL escolhido é retornada.
Caso a diferença esteja abaixo de 5% o terceiro critério será analisado, P4.
Dos dois TRELs escolhidos no critério P2, buscar os menores valores de P4 da cada um (d1 e d2, onde d1 é o menor valor), ou seja, a menor/maior (vide nota do item 4.1.2) distância da célula de armazenamento de cada um dos dois TREls.
É comparada a diferença relativa entre d1 e d2: (|d1-d2|/d1) e caso o resultado esteja acima de 10% o TREL cujo P4 seja igual a d1 (menor P4) é escolhido.
A quíntupla do TREL escolhido é retornada.
Caso a diferença esteja abaixo de 10% o terceiro critério será analisado, P1.
Dos dois TRELs escolhidos no critério P2, selecionar o TREL que possua o menor número de missões, ou seja, o menor valor de P1. Se der empate neste critério será escolhido o primeiro TREL da lista.
A quíntupla do TREL escolhido é retornada.
O retorno do algoritmo sempre será a quíntupla com o TREL escolhido como a melhor opção para armazenar o pallet.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Busca pallets fracionados (BPF)  
**Score:** — (semantico) | **ID:** af9ff8a5f34abc7c

Na imagem abaixo é possivel verificar os detalhes do algoritmo de busca de pallets fracionados:
Para cada TREL em automático, buscar os pallets que atendam aos critérios da ordem:
Mesma SKU da ordem;
Faixa maior ou igual a da ordem;
Mesmo centro da ordem;
Pallets com status do local em armazenado ou em trânsito (“StoredOnShelf”, “ToPickingArea”, “ToBeDelivered” ou “Delivering”);
Caso o pallet já atenda alguma outra ordem de saída (isto é, possua itens de ordem de saída com status diferente de “Delivered”), para atender esta nova ordem ela deve ser do mesmo tipo de movimento das ordens existentes (ainda não entregues) sobre o pallet;
Ordenar a lista de pallets de acordo com as seguintes prioridades:
Por data de validade (FEFO);
Quantidade de caixas do pallet (ascendente);
Número de missões do TREL (ascendente);
O resultado é a lista ordenada dos pallets que atendem à ordem de saída.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.3 – Distribuição de carga  
**Score:** — (semantico) | **ID:** 19fc31300b295d75

O WCS Velox deve considerar a distribuição de carga (peso) entre transelevadores em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.8 – Altura de pallets nas posições  
**Score:** — (semantico) | **ID:** 7547df6163d6a3cb

O WCS Velox deve considerar a altura do pallet, isto é, o tipo do pallet (normal ou estendido), em seu algoritmo de armazenagem.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF8.3 – Otimização de fracionados  
**Score:** — (semantico) | **ID:** 86f6768d7ca2ffcc

O WCS Velox deve otimizar o processamento de ordens de saída, permitindo a agregação de mais de uma ordem de saída por pallet num único movimento de saída.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Best Place  
**Score:** — (semantico) | **ID:** 0e18251b12cbe194

A imagem abaixo apresenta as regras para executar o algoritmo BP – Best Place de escolha da melhor posição dentre todos os PLCs disponíveis. Neste algoritmo as entradas são as quíntuplas listadas na regra de Armazenamento com os TRELs que são candidatos a armazenarem o pallet. Quatro fatores diferentes da quíntupla são considerados na análise do algoritmo (P1, P2, P3 e P4 descritos na regra de Armazenamento), porém há uma prioridade destes fatores que segue a ordem:
P2 é a quantidade relativa de produtos dele SKU+Faixa no estoque todo comparando cada um dos corredores;
P3 é quantidade relativa produtos do mesmo SKU+Faixa armazenado no corredor em comparação com os demais produtos;
P4 é a célula disponível para armazenar de menor distância do TREL em questão;
P1 equivale ao número de missões do TREL.
A saída do algoritmo é a quíntupla identificada como a melhor opção de armazenamento e o destino do pallet será o TREL escolhido. O algoritmo BP está detalhado abaixo.
Caso a lista de TRELs com seus fatores possua apenas um item, significa que apenas um TREL atende a necessidade de armazenamento do pallet, logo, a posição escolhida é a posição calculada para este TREL.
A quíntupla do TREL escolhido é retornada.
Caso haja mais de um TREL na lista, o primeiro fator a ser analisado é o P2.
Selecionar os dois menores valores de P2 (n1 e n2, onde n1 é o menor valor), ou seja, os dois corredores que possuem a menor porcentagem do SKU+Faixa comparado ao estoque todo.
É comparada a diferença relativa entre n1 e n2: (|n1-n2|/n1) e caso o resultado esteja acima de 5% o TREL cujo P2 seja igual a n1 (menor P2) é escolhido.
A quíntupla do TREL escolhido é retornada.
Caso a diferença esteja abaixo de 5% o segundo critério será analisado, P3.
Dos dois TRELs escolhidos no critério P2, buscar os valores de P3 (n1 e n2, onde n1 é o menor valor), a porcentagem do SKU+Faixa comparado aos demais produtos do corredor.
É comparada a diferença relativa entre n1 e n2: (|n1-n2|/n1) e caso o resultado esteja acima de 5% o TREL cujo P3 seja igual a n1 (menor P3) é escolhido.
A quíntupla do TREL escolhido é retornada.
Caso a diferença esteja abaixo de 5% o terceiro critério será analisado, P4.
Dos dois TRELs escolhidos no critério P2, buscar os menores valores de P4 da cada um (d1 e d2, onde d1 é o menor valor), ou seja, a menor/maior (vide nota do item 4.1.2) distância da célula de armazenamento de cada um dos dois TREls.
É comparada a diferença relativa entre d1 e d2: (|d1-d2|/d1) e caso o resultado esteja acima de 10% o TREL cujo P4 seja igual a d1 (menor P4) é escolhido.
A quíntupla do TREL escolhido é retornada.
Caso a diferença esteja abaixo de 10% o terceiro critério será analisado, P1.
Dos dois TRELs escolhidos no critério P2, selecionar o TREL que possua o menor número de missões, ou seja, o menor valor de P1. Se der empate neste critério será escolhido o primeiro TREL da lista.
A quíntupla do TREL escolhido é retornada.
O retorno do algoritmo sempre será a quíntupla com o TREL escolhido como a melhor opção para armazenar o pallet.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Busca pallets fracionados (BPF)  
**Score:** — (semantico) | **ID:** 69b19e96e8395538

Na imagem abaixo é possivel verificar os detalhes do algoritmo de busca de pallets fracionados:
Para cada TREL em automático, buscar os pallets que atendam aos critérios da ordem:
Mesma SKU da ordem;
Faixa maior ou igual a da ordem;
Mesmo centro da ordem;
Pallets com status do local em armazenado ou em trânsito (“StoredOnShelf”, “ToPickingArea”, “ToBeDelivered” ou “Delivering”);
Caso o pallet já atenda alguma outra ordem de saída (isto é, possua itens de ordem de saída com status diferente de “Delivered”), para atender esta nova ordem ela deve ser do mesmo tipo de movimento das ordens existentes (ainda não entregues) sobre o pallet;
Ordenar a lista de pallets de acordo com as seguintes prioridades:
Por data de validade (FEFO);
Quantidade de caixas do pallet (ascendente);
Número de missões do TREL (ascendente);
O resultado é a lista ordenada dos pallets que atendem à ordem de saída.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Display 3 Dígitos (FlowRack Frente + Nichos Costas)  
**Score:** — (semantico) | **ID:** e34d0576b04f0a63

Separação nos Flow Racks – Frente (1 unidade por posição)
Separação nos Nichos – Costas (1 unidade por posição)

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Botão Led (FlowRack Frente)  
**Score:** — (semantico) | **ID:** 7b0bf125c750f196

Solicitação de caixa adicional (1 unidade por estação de separação)

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Cenário Código de Barras "Virtual"  
**Score:** — (semantico) | **ID:** cb91ba9651ed7d96

De acordo com o Cliente selecionado, o código enviado ao SSW será concatenado com dados previamente cadastrados no Velox, sendo vinculada uma indução por cliente e todos os volumes passados na indução terão seus códigos de barras concatenados com os dados previamente cadastrados.

---
**Origem:** [Vegas 2] 2023 — `I23.1714-0  -  PROJETO VEGAS - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.03.docx`  
**Heading:** PBL Adicional  
**Score:** — (nome-topico) | **ID:** d86d4e1ea1a6558a

Será adicionado um novo pbl ao projeto, totalizando 240 posições no total, 1 led por posição sendo 120 posições frente e 120 costas.
Consequentemente haverá necessidade de segregar os pbl’s visto que agora haverão duas linhas de flowrack no projeto, sendo assim trazendo algumas mudanças nas funcionalidades do sistema MFC.
Ao iniciar o abastecimento da grade, acender as posições que serão utilizadas com os últimos algarismos do SKU para checagem antes de início da produção.
As posições reservadas pela onda alocada no pbl reserva, não poderão ser usadas para geração de novas ondas, mesmo durante o período de reserva.

---
**Origem:** [Vegas 2] 2023 — `I23.1714-0  -  PROJETO VEGAS - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.03.docx`  
**Heading:** Geração de Volumes  
**Score:** — (semantico) | **ID:** ef01b70c4b2a50ce

Haverá uma nova função, ao gerar os volumes de uma onda, abrirá um “Pop-up” na tela de onda podendo escolher qual das linhas o cliente pretende trabalhar, sendo elas PBL1 ou PBL2.
Caso não haja espaço disponível para alocação dos skus, gerará um aviso indicando não haver espaço disponível e sugerindo a geração da onda, em pbl’s “reservas” que não existirão fisicamente, somente no sistema.
Haverá somente duas linhas reservas, sendo elas uma para o PBL1 e uma para o PBL2, cada uma delas poderá manter somente uma onda.
O MFC é responsável por utilizar a cubagem enviada via integração de pedidos, tanto para gerar os volumes, quanto alocar nas posições de picking do pbl.
No momento em que o pbl “reserva” for escolhido, o método de alocação dos skus seguirá a seguinte lógica:
Procurar posições disponíveis (Posições que ainda não tenham skus alocados na linha principal de pbl)
Utilizar posições com menor quantidade de pickings.
Ser possível visualizar na tela de onda, as posições aguardadas para que o pbl “reserva” possa ser movido da linha reserva para principal.
Nos casos em que utilizaremos os pbl’s “reserva” a integração gerada para retorno da onda “MOVIMENTACAO” será enviada somente no momento em que é feita a transferência entre pbl reserva e linha principal para que possa ser iniciada a separação dos produtos.

---
**Origem:** [Vegas 2] 2023 — `I23.1714-0  -  PROJETO VEGAS - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.03.docx`  
**Heading:** Tela Onda  
**Score:** — (semantico) | **ID:** 1f7f5861c4bcd135

Botão verificar PBL’S: Nesse botão será possivel visualizar as posições aguardadas para que uma onda que esteja alocada em pbl reserva, esteja disponível para seguir à linha principal, mostrando as posições esperadas que já estão disponiveis e também as que ainda faltam pickings para finalizar.
Deve conter na tela a posição do PBL, as dimensões dessa posição, a situação (Livre / Ocupada / Reservada para onda) e a informação de SS/OCAM/Volumes ZT associados a essa posição, caso ela esteja Ocupada / Reservada no PBL principal.
Botão de Atualizar posições esperadas para onda: Terá funcionalidade de tentar realocar a onda, nas posições do pbl principal, verificando novamente se há espaço disponivel em todas as posições, do pbl escolhido, para casos onde as posições esperadas ainda não estejam desocupadas, mas outras tenham sido.
Botão para exclusão da onda alocada em qualquer PBL reserva, até o momento em que a onda seja transferida para o PBL principal. Caso seja excluída, a onda com as SSs poderá ser gerada novamente.

---
**Origem:** [Vegas 2] 2023 — `I23.1714-0  -  PROJETO VEGAS - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.03.docx`  
**Heading:** Tela Bloqueio de endereço  
**Score:** — (semantico) | **ID:** 14b68633bcd94034

A tela terá a funcionalidade de demonstrar todos os endereços de PBL e suas respectivas situações atuais, mostrando o número do endereço, SKU alocado, situação (Livre / Ocupada / Reservada), dimensões da posição (Comprimento, Largura, Altura e m³) e m³ do material e seu percentual de ocupação (m³ do material sobre a m³ da posição). Prever possibilidade de filtrar por PBL, endereço, SKU, m³ do material (em posições Ocupadas / Reservadas), m³ da posição e Status da posição. Prever também a possibilidade de bloquear posições do PBL (função só disponível para administradores da automação) e a exportação para Excel).
Sendo possível visualizar caso a situação não esteja livre, quais volumes estão pendentes de picking na posição.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** Escopo de Telas  
**Score:** — (semantico) | **ID:** fba29ac0e5a81d56

Cadastros de Colaboradores
O cadastro solicitará:
Usuário
Nível
Temperatura
PBL
Impressora PVAR
Este ponto impactara diretamente no acendimento dos Pickings em cada Nível.
Segue exemplo do monitor abaixo:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Estas informações serão utilizadas para apoio dos colaboradores que irão realizar a conferencia dos volumes nas docas e melhor visibilidade da operação como está o andamento dos itens que irão para as docas. Os colaboradores precisam ter a maior visão possível do que está acontecendo nos demais processos para finalizar o processo realizando o carregamento da carga.
Além dessas informações, os monitores deverão exibir:
Próximo veículo a ser carregado na doca;
Tipo de picking realizado na doca:
Somente congelado;
Somente resfriado.
Priorizacão do peso das caixas:
Pesado;
Médio;
Leve;
Misturado.
Segue exemplo do Monitor que irá exibir o próximo transporte:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Haverá um tablet com os operadores que irão realizar o carregamento, onde a tela deverá municiar a operação com as informações necessárias a respeito do perfil do veículo, status do carregamento e status da doca.
Segue exemplo do monitor:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
O WCS tomar a decisão se pode ou não iniciar a separação para a Doca de acordo com as regras:
Caminhão Paletizado pode iniciar a separação sem o Status do carregamento for "Livre" e o status da doca com ou sem Check List.
Caminhão Estivado só pode realizar o início de separação, se o status do carregamento for "Livre" e Status da Doca for "check List início"
No Status de carregamento "Ocupada" significa que falta descer CAIXAS no chute e/ou finalizar a conferência do AC
No Status de carregamento "Livre" significa que desceu todas as CAIXAS no chute e conferiu todas as caixas/paletes do AC
Só pode ter um check List início por doca
Check list do vazio/cheio
O WCS deve apresentar uma tela para o operador realizar uma auditoria dos transportes quando chegam (vazio) e quando saem (cheio) para controle do time BRF.
Todas as informações devem ser guardadas em log por usuário data e hora da realização, com os dados do check list realizado.
Para iniciar o check list será solicitado para o operador a Placa do veículo e a doca presente.
Segue exemplo:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Segue exemplo do Check list do vazio:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Segue exemplo do check list cheio:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
O WCS deve passar todas essas informações ao SAP No momento que finalizar o Check List formalizar a minuta final do carregamento.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Separação no Posto  
**Score:** — (semantico) | **ID:** 7d133c2f881391d0

Frente
Cada posto de separação frente, terá:
1 (um) PDV por posto;
1 (um) leitor de código de barras;
1 (um) display de 3 (três) dígitos por posição/produto;
Imagem ilustrativa do botão de 3 (três) dígitos:
Cada posição/produto será equipada com 1 botão led com display de 3 dígitos, onde o botão acende para indicar a posição de picking e o display informa a quantidade.
Conforme imagem ilustrativa abaixo:
Operador ao verificar que existem itens a serem separados no posto, realiza a separação dos itens conforme Leds acesos e quantidades e PDV.
Ao separar um item de uma posição, operador deve apertar o botão led para que ele se apague e assim confirmar que realizou a separação do item, esse processo deve se repetir até que todos os itens com leds acesos sejam apagados e seus produtos separados.
Ao finalizar a separação, os leds deverão ser acesos na cor verde e o PDV também informará a finalização do picking naquele posto.
Costas
Cada posto de separação costas, terá:
1 (um) display de 10 (dez) dígitos por flowrack;
Imagem ilustrativa do botão de 10 (dez) dígitos:
Caso tenha produtos a serem separados nas costas do mesmo posto, ao finalizar a separação dos itens da frente, os leds acenderão na cor pink (rosa), e o PDV informará que a separação dos itens de frente foi finalizada, porém existem itens a serem separados nas costas.
Os flowracks das costas deverão conter um display de 10 dígitos por flowrack, nesse caso quando houver separação nas costas, no display apresentará as informações de endereço nível e quantidade.
Conforme imagem ilustrativa abaixo:
Operador realiza a separação da quantidade no local indicado, e aperta o botão de confirmação, para que confirme a separação desse item, caso tenha outro produto a ser separado, o led atualiza a informação com as novas informações do novo endereço e produto para separação, operador realiza o processo até que todos os itens das costas sejam separados, ao finalizar operador receberá mensagem no display e PDV, informando que a separação frente e costas daquele posto foi finalizada.
Ao finalizar a separação de todos os produtos dos postos frente e costas, se não houver shortpicking, será disparada a integração de confirmação de separação para o WMS (3.4 Confirmação de picking).

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 1a669303cae175d1

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executara as rotinas de separação de volumes PBL, Sorter e PTL (Put-To-Light) nas saídas do sorter, tendo como papel fundamental a interface entre os sistemas WMS (Assist) com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para ter acesso a aplicação Velox.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Separação PBL / Indução  
**Score:** — (nome-topico) | **ID:** c9a4d255416d1b9e

Para a separação de caixas nas posições PBL, após o sistema Velox ter recebido as integrações (pedidos e posições PBL) citadas anteriormente.
Com isso, Velox deverá realizar as validações de sorter conforme a matriz de fragilidade, para liberar apenas as posições dos produtos que se enquadram corretamente para serem separados de acordo com a matriz de fragilidade correta e ordenada.
Operador deverá se direcionar até o PDV mais próximo da rua que irá realizar a separação, no PDV deverá escolher qual a rua que irá operar e a quantidade de etiquetas que deseja imprimir, com isso as etiquetas dos produtos que estão disponíveis para separação, serão impressas conforme a rua escolhida, quantidade e ordenação para evitar movimentos repetidos e desnecessários do operador, as posições que necessitam coleta na rua serão acesas para indicar o local e quantidade a ser separada na posição.
Operador ao chegar na rua, com as etiquetas em mãos, deverá observar as posições acesas e visitar na mesma ordem que estão acesas em direção ao final da rua, próximo a indução do sorter.
Operador ao chegar na posição acesa, deve checar a quantidade solicitada no led e realizar a separação da quantidade e etiquetar volume a volume, com isso deverá colocar esses volumes separados e etiquetados em um pallet de separação, após realizar a separação e etiquetagem de todos os volumes separados na posição, operador aperta o botão da posição PBL para confirmar a separação daquele produto naquela posição (nesse momento será enviada a integração 3.5. Confirmação de Separação Volume PBL).
Operador segue para a próxima posição acesa para repetir o processo de separação e etiquetagem.
Após realizar a separação de todas as posições acesas daquela rua, operador se direciona até o ponto de indução da esteira mais próximo, indicado pela informação na etiqueta de separação, operador induz as caixas individualmente na esteira do sorter correto, para que as caixas sigam para o destino no sorter.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Etiqueta caixa  
**Score:** — (semantico) | **ID:** cbea3bc5641e06c4

As etiquetas de separação de produtos das posições PBL, serão impressas pelo sistema Velox.
Para as posições PBL, as etiquetas serão impressas conforme a quantidade solicitada para separação, no caso em que operador deve separar 10 unidades de 1 produto (caixa) serão impressas 10 etiquetas, para operador etiquetar todas as caixas do pedido.
Serão distribuídas 2 impressoras de etiquetas pelas ruas da operação, onde 1 impressora realiza impressão de etiquetas para o sorter 1 e outra para o sorter 2.
As impressoras devem imprimir apenas as etiquetas respectivas ao sorter designado a ela.
A etiqueta deve conter as informações:
Nome do produto
DT Carregamento
Agrupamento
Janela
Sorter
Matriz de fragilidade
Volume atual/total
Código de barras (único)

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Separação PBL (Picking By Light)  
**Score:** — (nome-topico) | **ID:** 02ee1b76b83859d8

Estações de picking:
Ao total são 8 estações, cada estação é composta por 2 postos, totalizando 16 postos. Cada posto dispõe de 52 posições de picking sendo 36 na frente e 16 nas costas e cada posição com 1 display de 3 dígitos + botão led, conforme imagens ilustrativas abaixo:
Cada posto da frente, terá um display de 6 (seis) dígitos informando o número da caixa de separação atual, conforme imagem ilustrativa abaixo:
Com a leitura correta da etiqueta da caixa no início da linha, a caixa segue pela linha expressa e ao chegar no leitor da estação, caso tenha produtos a serem separados em algum posto da estação, a caixa será desviada para dentro da estação de picking e direcionada para o lado do posto onde solicita separação de itens.
Separação em 1 posto da estação (frente): caso o volume solicite separação em 1 dos postos da estação, a automação direciona a caixa para o posto que solicita separação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto foi concluída e com isso induza a caixa na linha expressa onde seguirá para a próxima estação picking.
Separação em 2 postos da estação (frente): caso o volume solicite separação nos dois postos da estação, a automação direciona a caixa para o posto que antecede o leitor da estação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acionadas na cor verde indicando ao operador que a separação naquele posto foi concluída e então operador induz a caixa na linha expressa onde será lida novamente pelo leitor da mesma estação e ao entrar na estação, será direcionada para o posto após o leitor e os leds das posições serão acionados conforme mencionado acima e ao finalizar a separação, todos os leds do posto serão acesos indicando ao operador que a separação naquele posto foi concluída, operador induz novamente a caixa na linha expressa onde seguirá para a próxima estação de picking.
Separação em 1 posto da estação (frente + costas): caso o volume solicite separação em 1 posto da estação que tenha produtos para serem separados na frente e costas, os leds das posições (frente e costas) solicitadas serão acesos na cor rosa e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição da frente, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação dos produtos da frente, segue para separar os produtos com as posições acionadas nas costas do operador, realiza o mesmo processo de separação mencionado acima, após separar todos os produtos das costas, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto (frente e costas) foi concluída e com isso induz a caixa na linha expressa onde seguirá para a próxima estação de picking.
O WCS não fará a validação de lote na separação de produtos tanto nos flowracks quanto no picking cart.
A validação do lote deverá ser feita na conferência, e caso seja necessário a troca de lote será realizado na conferência.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** — (semantico) | **ID:** 0ed59a28e0b48597

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Linha de separação, PBL, Sorter e PTM, tendo como papel fundamental a interface entre o sistema ERP/WMS do Lojas Pompéia e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo Lojas Pompéia (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla ou Firefox).

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** SEPARAÇÃO PBL (PICKING BY LIGHT)  
**Score:** — (nome-topico) | **ID:** 632b9ecc9a382b94

Processo de Separação nas Estações de Picking
Componentes Principais
Display de 3 dígitos: Indica a quantidade de itens a serem separados.
Botão LED: Sinaliza as ações a serem tomadas pelo operador e confirma as etapas do processo.
PDV (Ponto de Visualização):
Apresenta informações como localização do produto, caixa, pedido e outros campos necessários.
Atualiza-se em tempo real, oferecendo maior visibilidade e controle ao operador.
Fluxo de Separação
Primeiro Posto da Estação
Leitura da Etiqueta e Direcionamento da Caixa
A caixa é identificada no início da linha por meio da leitura da etiqueta.
Se houver itens a serem separados na estação, a automação desvia a caixa para o posto correspondente.
Atuação do Operador
Os LEDs das posições solicitadas acendem em azul, e o display exibe a quantidade de itens a serem separados.
O operador realiza a separação e confirma cada etapa acionando o botão LED, que apaga a luz da posição.
Este processo se repete até que todos os itens sejam separados.
Finalização no Primeiro Posto
Após concluir a separação, os LEDs das posições acendem em verde, indicando que o processo foi finalizado.
A caixa retorna à linha expressa e segue para a próxima estação de picking.
Tratamento Especial
LEDs acesos em rosa indicam que a separação deve ser feita item a item, conforme regra de negócios definida via integração de pedidos.
Nota: Apenas o código EAN13 é validado; não há validação de lote.
Segundo Posto da Estação
Leitura e Direcionamento Inicial
Quando a separação requer dois postos, a caixa é primeiro direcionada ao posto anterior ao leitor da estação.
Operação no Primeiro Posto
Os LEDs acendem em azul e o display exibe a quantidade a ser separada.
O operador realiza a separação e confirma cada operação acionando o botão LED.
Após concluir o processo, os LEDs acendem em verde, indicando a finalização.
Transferência para o Segundo Posto
A caixa retorna à linha expressa, é lida novamente pelo leitor e é redirecionada para o segundo posto.
Operação no Segundo Posto
O processo é repetido no segundo posto: LEDs acendem em azul, o operador realiza a separação e confirma acionando o botão LED.
Após a finalização, os LEDs acendem em verde, indicando a conclusão do processo.
Encerramento da Operação
A caixa retorna à linha expressa e segue para a próxima estação, continuando o fluxo até que todas as estações sejam atendidas.
Resumo do Processo
Componentes-chave: Display de 3 dígitos e botão LED guiam o operador nas tarefas.
PDV em Tempo Real: Proporciona informações detalhadas e atualizações durante o processo.
Automação do Fluxo: A leitura inicial da etiqueta e a parametrização do pedido direcionam a caixa de forma eficiente.
Flexibilidade: O sistema permite separação em um ou mais postos dentro da mesma estação, dependendo das necessidades do pedido.
Confirmação e Controle: A interação do operador com os LEDs e displays garante precisão e rastreabilidade em cada etapa.
Picking Costa Estação
Na separação nos picking costa a separação será feita via PDV e scanner.
Regra de Conferência 100%:
Será enviada uma regra específica via integração tomando como referência o campo (confVolume), onde todos os volumes do pedido X serão conferidos 100% na etapa de conferência.
Caixas Pedido PP:
Pedidos que serão separados nas caixas tamanho PP, seu fluxo seguira até a conferência, por conta da volumetria, sua indução será antes do sorter no portal de responsabilidade Andreani.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO -_REV1.docx`  
**Heading:** Sinalização de Picking Costas Linha Médio Giro  
**Score:** — (semantico) | **ID:** c02ddd9b92afa58e

Na separação da linha do médio giro, no PDV, deve apresentar um indicador/marcação, como uma seta de indicação, que sinalize para o operador que há coleta no picking costas, ou seja, todos as vezes que um volume que contenha picking costa e picking frente na estação, desde o inicio do picking surgirá um marcador no PDV informando que há picking no flow hack de trás do operador.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO -_REV1.docx`  
**Heading:** Código de barras por Posto  
**Score:** — (semantico) | **ID:** ee34911f24038371

Para iniciar a operação de picking nas estações, o operador deverá entrar no Velox, acessar a coluna de menu no canto esquerdo da tela e selecionar a opção Operação e em seguida selecionar a opção PBL, ao acessar a tela de PBL o Velox solicitará a bipagem  de um código fixo pré-definido para aquela estação, sendo assim o operador não terá acesso a outras estações que a linha possui.
Caso for acessado uma tela que ja possui Login, o sistema deve deslogar o ultimo posto que estava com esse usuário e levar como verdade o último posto logado por aquele usuário.
NOTA: Velox não valida o periferico para acessar o posto de picking, ou seja, não haverá um vinculo fixo do PDV com o posto.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** 379adde82214b4e4

Estações de picking:
Ao total serão 4 (quatro) postos de separação sendo frente e costas, cada posto com 01 (um) PDV, 01 (um) leitor de código de barras e 1 (um) display/led de 03 (três) dígitos por posição na frente e 01 (um) display/led de 10 (dez) dígitos por nível nas costas.
O Velox terá um parâmetro para o operador escolher a quantidade que será obrigatório a leitura de item a item na separação.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Controle das posições de picking  
**Score:** — (semantico) | **ID:** d2eef11cf7d3fa93

O Velox ficará responsável pelo mapeamento e quantidades das posições de picking, caso o operador precise alterar o mapeamento, deverá realizar no sistema Velox.
No sistema Velox, será possivel verificar o estoque atual nas posições de picking, para atualizar o estoque no Velox, deverá ser manualmente, pois não teremos integração para essa funcionalidade.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - ADITIVO_HYDRA_REV.1.docx`  
**Heading:** Configuração Cursor  
**Score:** — (semantico) | **ID:** f97dc234cf03bf20

Na utilização do coletor nos processos operacionais o WCS deve fixar o cursor na barra de leitura na tela.
Segue exemplo abaixo:
(Imagem meramente ilustrativa para apoio do Desenvolvimento)

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** ESPECIFICAÇÃO  
**Score:** — (semantico) | **ID:** 3cea8af8b8f9e400

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de linha de separação,PBL, PDV, Picking Túnel, Reabastecimento, Sorter e PTM tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao MFC, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** SEPARAÇÃO PBL (PICKING BY LIGHT)  
**Score:** — (nome-topico) | **ID:** 9817e4723e42f373

Processo de Separação nas Estações de Picking
Componentes Principais
Display de 3 dígitos: Indica a quantidade de itens a serem separados.
Botão LED: Sinaliza as ações a serem tomadas pelo operador e confirma as etapas do processo.
PDV (Ponto de Visualização):
Apresenta informações como localização do produto, caixa, pedido e outros campos necessários.
Atualiza-se em tempo real, oferecendo maior visibilidade e controle ao operador.
Fluxo de Separação
Primeiro Posto da Estação
Leitura da Etiqueta e Direcionamento da Caixa
A caixa é identificada no início da linha por meio da leitura da etiqueta.
Se houver itens a serem separados na estação, a automação desvia a caixa para o posto correspondente.
Atuação do Operador
Os LEDs das posições solicitadas acendem em azul, e o display exibe a quantidade de itens a serem separados.
O operador realiza a separação e confirma cada etapa acionando o botão LED, que apaga a luz da posição.
Este processo se repete até que todos os itens sejam separados.
Finalização no Primeiro Posto
Após concluir a separação, os LEDs das posições acendem em verde, indicando que o processo foi finalizado.
A caixa retorna à linha expressa e segue para a próxima estação de picking.
Transferência para o Segundo Posto
A caixa retorna à linha expressa, é lida novamente pelo leitor e é redirecionada para o segundo posto.
Operação no Segundo Posto
O processo é repetido no segundo posto: LEDs acendem em azul, o operador realiza a separação e confirma acionando o botão LED.
Após a finalização, os LEDs acendem em verde, indicando a conclusão do processo.
Encerramento da Operação
A caixa retorna à linha expressa e segue para a próxima estação, continuando o fluxo até que o processo de separação do pedido seja finalizado.
Resumo do Processo
Componentes-chave: Display de 3 dígitos e botão LED guiam o operador nas tarefas.
PDV em Tempo Real: Proporciona informações detalhadas e atualizações durante o processo.
Automação do Fluxo: A leitura inicial da etiqueta e a parametrização do pedido direcionam a caixa de forma eficiente.
Flexibilidade: O sistema permite separação em um ou mais postos dentro da mesma estação, dependendo das necessidades do pedido.
Confirmação e Controle: A interação do operador com os LEDs e displays garante precisão e rastreabilidade em cada etapa.
Picking Costa Estação
Serão produtos de baixo giro, na separação do picking costas haverá 1 display em cada flowrack informando a posição e quantidade a ser separada.
corredores scanner.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Separação PBL (Picking By Light)  
**Score:** — (nome-topico) | **ID:** 1edc52805ac574b9

Estações de picking:
Ao total são 10 estações, cada estação é composta por picking frente e costas. Cada posição de picking frente com 1 display de 3 dígitos + botão led, conforme imagens ilustrativas abaixo:
Cada posto da frente, terá um display de 6 (seis) dígitos informando o número da caixa de separação atual, conforme imagem ilustrativa abaixo:
Com a leitura correta da etiqueta da caixa no início da linha, a caixa segue pela linha expressa e ao chegar no leitor da estação, caso tenha produtos a serem separados em algum posto da estação, a caixa será desviada para dentro da estação de picking e direcionada para o lado do posto onde solicita separação de itens.
Separação em 1 posto da estação (frente): caso o volume (pega) solicite separação em 1 dos postos da estação, a automação direciona a caixa para o posto que solicita separação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto foi concluída e com isso induza a caixa na linha expressa onde seguirá para a próxima estação picking.
Separação em 2 postos da estação (frente): caso o volume (pega) solicite separação nos dois postos da estação, a automação direciona a caixa para o posto que antecede o leitor da estação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acionadas na cor verde indicando ao operador que a separação naquele posto foi concluída e então operador induz a caixa na linha expressa onde será lida novamente pelo leitor da mesma estação e ao entrar na estação, será direcionada para o posto após o leitor e os leds das posições serão acionados conforme mencionado acima e ao finalizar a separação, todos os leds do posto serão acesos indicando ao operador que a separação naquele posto foi concluída, operador induz novamente a caixa na linha expressa onde seguirá para a próxima estação de picking.
Separação em 1 posto da estação (frente + costas): caso o volume solicite separação em 1 posto da estação que tenha produtos para serem separados na frente e costas, os leds das posições (frente e costas) solicitadas serão acesos na cor rosa e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição da frente, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação dos produtos da frente, segue para separar os produtos com as posições acionadas nas costas do operador, realiza o mesmo processo de separação mencionado acima, após separar todos os produtos das costas, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto (frente e costas) foi concluída e com isso induz a caixa na linha expressa onde seguirá para a próxima estação de picking.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Tela de endereços  
**Score:** — (semantico) | **ID:** 116626d22ba772e9

Será disponibilizada no WCS uma tela específica para visualização, com o objetivo de oferecer apoio no controle sobre os endereços de separação do museu e permitir a administração dos endereços do museu e FlowRack e Transfer, conforme aplicável.
Localizações contempladas:
Museu
FlowRack
Transfer
A tela permitirá:
Visualização completa das localizações cadastradas no sistema (enviadas no picking map), segmentadas por setor
Filtros por setor e produto.
Essa funcionalidade visa facilitar a expansão, readequação ou manutenção das localizações de picking e transfer, garantindo flexibilidade operacional e controle sobre as áreas que não fazem parte da automação FlowRack.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Separação PBL (Picking By Light)  
**Score:** — (nome-topico) | **ID:** 9cfe108d3ff5fa72

Estações de picking:
Ao total são 10 estações, cada estação é composta por picking frente e costas. Cada posição de picking frente com 1 display de 3 dígitos + botão led, conforme imagens ilustrativas abaixo:
Cada posto da frente, terá um display de 6 (seis) dígitos informando o número da caixa de separação atual, conforme imagem ilustrativa abaixo:
Com a leitura correta da etiqueta da caixa no início da linha, a caixa segue pela linha expressa e ao chegar no leitor da estação, caso tenha produtos a serem separados em algum posto da estação, a caixa será desviada para dentro da estação de picking e direcionada para o lado do posto onde solicita separação de itens.
Separação em 1 posto da estação (frente): caso o volume (pega) solicite separação em 1 dos postos da estação, a automação direciona a caixa para o posto que solicita separação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto foi concluída e com isso induza a caixa na linha expressa onde seguirá para a próxima estação picking.
Separação em 2 postos da estação (frente): caso o volume (pega) solicite separação nos dois postos da estação, a automação direciona a caixa para o posto que antecede o leitor da estação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acionadas na cor verde indicando ao operador que a separação naquele posto foi concluída e então operador induz a caixa na linha expressa onde será lida novamente pelo leitor da mesma estação e ao entrar na estação, será direcionada para o posto após o leitor e os leds das posições serão acionados conforme mencionado acima e ao finalizar a separação, todos os leds do posto serão acesos indicando ao operador que a separação naquele posto foi concluída, operador induz novamente a caixa na linha expressa onde seguirá para a próxima estação de picking.
Separação em 1 posto da estação (frente + costas): caso o volume solicite separação em 1 posto da estação que tenha produtos para serem separados na frente e costas, os leds das posições (frente e costas) solicitadas serão acesos na cor rosa e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição da frente, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação dos produtos da frente, segue para separar os produtos com as posições acionadas nas costas do operador, realiza o mesmo processo de separação mencionado acima, após separar todos os produtos das costas, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto (frente e costas) foi concluída e com isso induz a caixa na linha expressa onde seguirá para a próxima estação de picking.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Tela de endereços  
**Score:** — (semantico) | **ID:** 3113a0f19979b4cd

Será disponibilizada no WCS uma tela específica para visualização, com o objetivo de oferecer apoio no controle sobre os endereços de separação do museu e permitir a administração dos endereços do museu e FlowRack e Transfer, conforme aplicável.
Localizações contempladas:
Museu
FlowRack
Transfer
A tela permitirá:
Visualização completa das localizações cadastradas no sistema (enviadas no picking map), segmentadas por setor
Filtros por setor e produto.
Essa funcionalidade visa facilitar a expansão, readequação ou manutenção das localizações de picking e transfer, garantindo flexibilidade operacional e controle sobre as áreas que não fazem parte da automação FlowRack.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Separação PBL (Picking By Light)  
**Score:** — (nome-topico) | **ID:** ae9b934df8f52039

Estações de picking:
Ao total são 10 estações, cada estação é composta por picking frente e costas. Cada posição de picking frente com 1 display de 3 dígitos + botão led, conforme imagens ilustrativas abaixo:
Cada posto da frente, terá um display de 6 (seis) dígitos informando o número da caixa de separação atual, conforme imagem ilustrativa abaixo:
Com a leitura correta da etiqueta da caixa no início da linha, a caixa segue pela linha expressa e ao chegar no leitor da estação, caso tenha produtos a serem separados em algum posto da estação, a caixa será desviada para dentro da estação de picking e direcionada para o lado do posto onde solicita separação de itens.
Separação em 1 posto da estação (frente): caso o volume (pega) solicite separação em 1 dos postos da estação, a automação direciona a caixa para o posto que solicita separação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto foi concluída e com isso induza a caixa na linha expressa onde seguirá para a próxima estação picking.
Separação em 2 postos da estação (frente): caso o volume (pega) solicite separação nos dois postos da estação, a automação direciona a caixa para o posto que antecede o leitor da estação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acionadas na cor verde indicando ao operador que a separação naquele posto foi concluída e então operador induz a caixa na linha expressa onde será lida novamente pelo leitor da mesma estação e ao entrar na estação, será direcionada para o posto após o leitor e os leds das posições serão acionados conforme mencionado acima e ao finalizar a separação, todos os leds do posto serão acesos indicando ao operador que a separação naquele posto foi concluída, operador induz novamente a caixa na linha expressa onde seguirá para a próxima estação de picking.
Separação em 1 posto da estação (frente + costas): caso o volume solicite separação em 1 posto da estação que tenha produtos para serem separados na frente e costas, os leds das posições (frente e costas) solicitadas serão acesos na cor rosa e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição da frente, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação dos produtos da frente, segue para separar os produtos com as posições acionadas nas costas do operador, realiza o mesmo processo de separação mencionado acima, após separar todos os produtos das costas, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto (frente e costas) foi concluída e com isso induz a caixa na linha expressa onde seguirá para a próxima estação de picking.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Tela de endereços  
**Score:** — (semantico) | **ID:** 9f69b7ca8cef7d32

Será disponibilizada no WCS uma tela específica para visualização, com o objetivo de oferecer apoio no controle sobre os endereços de separação do museu e permitir a administração dos endereços do museu e FlowRack, conforme aplicável.
Localizações contempladas:
Museu
FlowRack
A tela permitirá:
Visualização completa das localizações cadastradas no sistema (enviadas no picking map), segmentadas por setor
Filtros por setor e produto.
Essa funcionalidade visa facilitar a expansão, readequação ou manutenção das localizações de picking, garantindo flexibilidade operacional e controle sobre as áreas que não fazem parte da automação FlowRack.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Separação PBL (Picking By Light)  
**Score:** — (nome-topico) | **ID:** 1030fe3202f137d4

Estações de picking:
Ao total são XX estações, cada estação é composta por picking frente e costas. Cada posto dispõe de XXXXX posições de picking sendo XXXX na frente e XXXXXX nas costas e cada posição de picking frente com 1 display de 3 dígitos + botão led, conforme imagens ilustrativas abaixo:
Cada posto da frente, terá um display de 6 (seis) dígitos informando o número da caixa de separação atual, conforme imagem ilustrativa abaixo:
Com a leitura correta da etiqueta da caixa no início da linha, a caixa segue pela linha expressa e ao chegar no leitor da estação, caso tenha produtos a serem separados em algum posto da estação, a caixa será desviada para dentro da estação de picking e direcionada para o lado do posto onde solicita separação de itens.
Separação em 1 posto da estação (frente): caso o volume (pega) solicite separação em 1 dos postos da estação, a automação direciona a caixa para o posto que solicita separação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto foi concluída e com isso induza a caixa na linha expressa onde seguirá para a próxima estação picking.
Separação em 2 postos da estação (frente): caso o volume (pega) solicite separação nos dois postos da estação, a automação direciona a caixa para o posto que antecede o leitor da estação, os leds das posições solicitadas serão acesos na cor azul e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição, aciona o botão para a posição apagar (confirmando a separação), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação do posto, todas as posições são acionadas na cor verde indicando ao operador que a separação naquele posto foi concluída e então operador induz a caixa na linha expressa onde será lida novamente pelo leitor da mesma estação e ao entrar na estação, será direcionada para o posto após o leitor e os leds das posições serão acionados conforme mencionado acima e ao finalizar a separação, todos os leds do posto serão acesos indicando ao operador que a separação naquele posto foi concluída, operador induz novamente a caixa na linha expressa onde seguirá para a próxima estação de picking.
Separação em 1 posto da estação (frente + costas): caso o volume solicite separação em 1 posto da estação que tenha produtos para serem separados na frente e costas, os leds das posições (frente e costas) solicitadas serão acesos na cor rosa e o display informará a quantidade a ser separada, operador realiza a separação do produto na posição da frente, aciona o botão para a posição apagar (confirmando a separação do produto), então segue para a próxima posição acionada e realiza o mesmo processo até que todas as posições dos produtos sejam visitadas e os produtos separados, ao finalizar toda a separação dos produtos da frente, segue para separar os produtos com as posições acionadas nas costas do operador, realiza o mesmo processo de separação mencionado acima, após separar todos os produtos das costas, todas as posições são acesas na cor verde indicando ao operador que a separação naquele posto (frente e costas) foi concluída e com isso induz a caixa na linha expressa onde seguirá para a próxima estação de picking.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Tela de endereços  
**Score:** — (semantico) | **ID:** b5e806c3822378b5

Será disponibilizada no WCS uma tela específica para visualização, com o objetivo de oferecer apoio no controle sobre os endereços de separação do museu e permitir a administração dos endereços do museu e FlowRack, conforme aplicável.
Localizações contempladas:
Museu
FlowRack
A tela permitirá:
Visualização completa das localizações cadastradas no sistema (enviadas no picking map), segmentadas por setor
Filtros por setor e produto.
Essa funcionalidade visa facilitar a expansão, readequação ou manutenção das localizações de picking, garantindo flexibilidade operacional e controle sobre as áreas que não fazem parte da automação FlowRack.
