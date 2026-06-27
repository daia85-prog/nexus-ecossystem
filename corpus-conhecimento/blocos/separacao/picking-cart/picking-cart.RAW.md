# picking-cart.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 7. Picking Cart  
**Score:** — (nome-topico) | **ID:** 1fc109fada03905d

Para atender as demandas da operação visando os itens com menor curva teremos o
conceito de separação por picking cart que consiste em um modelo de prateleira móvel com
auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer
as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de
mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start
Picking Cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação
organizadas conforme a prioridade definida na integração. Caso necessário, será possível
ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa
plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular
todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá
ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha
que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma
clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá
apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento
visual;
Quantidade a coletar: quantidade solicitada de acordo com a tarefa
O sistema WCS será responsável por informar ao operador todos os endereços que
devem ser visitados durante o processo de separação dos volumes (pega) alocados no Picking
Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura
do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser
coletada e todas as posições do Picking Cart e volumes (pega) associados que solicitam aquele
item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes
(pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes
volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador
deverá escanear o número da caixa correspondente ao volume (pega) que está sendo
separado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e
assegura a rastreabilidade exata de cada item separado por posição e volume (pega),
mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor
verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a
quantidade real coletada e após isso realizar a leitura do endereço da caixa plástica.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS.
Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e
deverá conduzir o volume (pega) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir
o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam
finalizadas.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 563c49dd2d7670d3

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas de linha de separação, conferência, reabastecimento, controle de saldo das posições de picking, e picking cart tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
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
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Picking Brindes  
**Score:** — (nome-topico) | **ID:** bd03bda0ba7e7619

No setor de Brindes não há esteira. Portanto, o processo de separação será realizado
manualmente, com a utilização de um coletor Android e a tela do WCS (Coleta Fracionada).
Fluxo Operacional de Picking Brindes:
Coleta dos Itens:
O WCS irá exibir os endereços a serem visitados e quantidade de itens a retirar.
O operador realiza a leitura do endereço solicitado.
Em seguida, o operador seleciona a quantidade de itens a ser retirada e realiza a leitura
do código do item. O WCS atualiza a lista de itens à medida que o operador faz a
coleta.
Atualização do Status do Item no WCS:
A linha do item começa em cinza.
Após a leitura do endereço, ela fica em azul.
O operador seleciona a quantidade real coletada.
Após selecionar a quantidade, o operador deve realizar a leitura do código do produto
assim confirmando a coleta, após a confirmação da coleta a linha sumirá, e o operador
pode seguir para coletar o próximo item.
Caso o operador decida coletar outro item, já tendo realizado a leitura do endereço, ele
pode seguir para o próximo endereço e realizar a leitura do endereço correspondente,
para mudar o item que está coletando.
Funcionalidade “Pede Caixa”
Durante o processo de coleta, caso o operador identifique que os produtos não cabem
na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede
caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com
os itens já coletados, podendo iniciar o packing dessa caixa.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens
restantes do pedido, que será retomada no processo de Order Start com uma nova
caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa
atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta de um Item:
O WCS leva em consideração apenas a quantidade coletada. Considerando a
quantidade faltante como um shortpicking (Corte).
Após concluir a coleta de todos os itens o operador deve destinar a caixa a área de
packing.
O WCS não deve realizar validação de peso ou conferência para itens do tipo “Brinde”

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Picking Fracionado Níveis  
**Score:** — (nome-topico) | **ID:** dd1928f537b18644

Estrutura de postos por nível: Nível 3 = 2 postos; Nível 2 = 2 postos; Nível 1 = 2 postos. Nos
níveis com múltiplos postos, os endereços são divididos igualmente entre eles no cadastro de
postos, respeitando o equilíbrio de carga. Não há fila sistêmica nos postos: a fila é física — os
roletes livres acomodam os volumes em sequência, e o operador atende um volume por vez via
leitura no coletor.
Nos níveis não há esteira automatizada, apenas roletes livres. Portanto, o processo de
separação será realizado manualmente, com a utilização de um coletor Android e a tela do WCS
(Coleta Fracionada).
Fluxo Operacional de Picking Fracionado Níveis:
Login e Seleção da Tela de Picking:
O operador realiza o login no WCS.
O operador seleciona a tela de picking correspondente ao nível em que está.
O operador escolhe o posto de trabalho onde realizará a separação dos volumes.
Leitura do Volume e Verificação de Itens a Separar:
O operador realiza a leitura do volume utilizando o coletor Android.
O WCS verifica se há itens a serem separados naquele posto. Caso existam itens para
coleta, o sistema informa o endereço e as informações do item (quantidade e código).
Coleta dos Itens:
O operador realiza a leitura do endereço solicitado.
Em seguida, o operador seleciona a quantidade a ser retirada e realiza a leitura do
código do item. O WCS atualiza a lista de itens à medida que o operador faz a coleta.
Atualização do Status do Item no WCS:
A linha do item começa em cinza.
Após a leitura do endereço, ela fica em azul.
O operador seleciona a quantidade real coletada.
Após selecionar a quantidade, o operador deve realizar a leitura do código do produto
assim confirmando a coleta, após a confirmação da coleta a linha é ocultada, e o
operador pode seguir para coletar o próximo item.
Caso o operador decida coletar outro item, já tendo realizado a leitura do endereço, ele
pode seguir para o próximo endereço e realizar a leitura do endereço correspondente,
para mudar o item que está coletando.
Funcionalidade “Pede Caixa”
Durante o processo de coleta, caso o operador identifique que os produtos não cabem
na caixa plástica que está sendo utilizada, ele poderá acionar a funcionalidade “pede
caixa” através do coletor android.
Ao acionar esta funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com
os itens já coletados, enviando a mesma para reindução e para que possa seguir os
próximos passos do processo.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens
restantes do pedido, que será retomada no processo de Order Start com uma nova
caixa plástica sendo priorizada para inicío.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa
atual, mantendo a rastreabilidade e a integridade da separação.
Finalização da Coleta de um Item:
O WCS leva em consideração apenas a quantidade coletada. Considerando a
quantidade faltante como um shortpicking (Corte) que serão tratados na estação de
conferência
Após concluir a coleta de todos os itens no posto atual, o operador direciona a caixa
para o próximo posto de picking.
O processo de coleta será repetido até que todos os itens do pedido sejam coletados.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Coleta Picking Cart  
**Score:** — (semantico) | **ID:** 7e505982fdf57546

Após o processo de Order Start do Picking Cart, será exibida uma lista de itens no PDV,
contendo informações detalhadas sobre endereço, produto, quantidade a ser coletada e
observações do pedido. O operador se dirige até o endereço indicado e realiza a leitura do
código do endereço para iniciar a separação do item correspondente.
Em seguida, o operador realiza a leitura do código do item. O WCS informa a quantidade e em
qual posição do Picking Cart o item deverá ser alocado. O operador, então, confirma a
quantidade real separada e realiza a leitura da caixa plástica para confirmar a separação
daquele item. A lista de itens no PDV será atualizada à medida que a quantidade esperada for
coletada. Quando a quantidade necessária for atingida, o WCS informa que a coleta para
aquele item foi concluída, permitindo que o operador siga para o próximo endereço na lista.
Caso o operador não consiga coletar todos os itens do endereço, haverá a opção de clicar no
botão "Finalizar Coleta". Ao acionar esse botão, o WCS entenderá que apenas a quantidade lida
foi separada e registrará o corte do restante da quantidade, garantindo que o processo seja
finalizado corretamente e permitindo o prosseguimento da operação.
Após finalizar o processo de coleta de todos os itens, o WCS informará que a separação foi
concluída. O operador então deverá se dirigir à indução de volumes (fullcase) para que a caixa
seja direcionada a linha de Picking Fracionado do Nível Térreo. Caso existam itens a serem
coletados no Picking Fracionado do Nível Térreo, o volume seguirá o processo de separação
especificado para esse fluxo.
Caso não haja itens a serem coletados, o volume seguirá para a balança, sendo então desviado
para a estação de conferência, se necessário, para validação adicional ou correção.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** d2b1517239d09129

Após a realização do Picking (Níveis, Térreo, Picking Cart), o volume obrigatoriamente passará
por uma balança onde será aferido o peso real em comparação com o peso esperado. Este
processo de conferência garante que a quantidade de itens e o peso do volume estejam de
acordo com o especificado.
Pré-requisitos para a Conferência:
Para o processo de conferência ser realizado corretamente, o WCS precisa ser abastecido com
as informações sobre o peso unitário de cada item. Além disso, a caixa de separação deve estar
devidamente cadastrada no sistema com o peso real, o que permite a comparação entre o peso
esperado e o peso real.
O WCS também deve possibilitar o cadastro de uma tolerância de peso em gramas, que será
considerada em caso de diferença entre o peso real e o peso esperado. Caso a diferença seja
superior à tolerância ou ocorra algum processo de shortpicking, o volume será desviado para
conferência para que o operador realize uma análise e a tratativa do volume.
Definição: a tolerância de peso é parametrizada em valor absoluto (gramas), para evitar
arredondamentos em produtos de peso pequeno. O valor inicial será definido pela operação via
tela de parâmetros e pode ser ajustado a qualquer tempo. Tratativa para item incorreto/trocado:
não há fluxo sistêmico — o operador remove o item e o devolve manualmente à posição de
origem, sem movimentação de saldo no WCS (o item nunca foi registrado como coletado naquele
volume), o sistema deve registrar as informações dos itens sobressalentes ou trocados.
Fluxo Operacional da Conferência:
Abertura da Tela de Conferência:
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do
volume (caixa) para iniciar o processo de conferência. O WCS então exibe uma lista de
itens previsto no volume e quantidade real separada, além do operador que efetuou a
coleta a nível de item.
Validação dos Itens:
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa.
Durante essa validação, o operador pode:
o
Completar a caixa, caso um item faltante esteja disponível, ou
o
Finalizar a conferência com itens faltantes através do botão "Encerrar
Conferência".
Corte de Itens Faltantes:
Ao clicar no botão "Encerrar Conferência" e o operador deve selecionar cortar,
então o WCS entenderá que os itens faltantes foram cortados, e o sistema registrará
essa informação.
Coletar os itens cortados:
Ao clicar no botão "Encerrar Conferência" o operador deve selecionar coletar, o
WCS cria um novo volume para coletar os itens faltantes, e o sistema registrará essa
informação.
O sistema considerará a tolerância de peso previamente configurada para garantir
que pequenas variações entre o peso esperado e o real não resultem em falhas no
processo.
Caso o peso real seja significativamente diferente do esperado e fora da tolerância
configurada, o volume será desviado para a conferência para análise do operador.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Picking Termolábil (Área Resfriada)  
**Score:** — (nome-topico) | **ID:** 4fd30ee7651f65df

O Picking Termolábil utiliza Picking Cart em área refrigerada e replica integralmente os
fluxos de 7.13 (Order Start Picking Cart) e 7.14 (Coleta Picking Cart).
A diferenciação ocorre apenas no pós-coleta, durante Conferência + Packing.
Regras Específicas
Identificação pela Integração (Trabalhos – Work)
Quando o campo termoLabilEspecial vier true, o WCS exibe mensagem orientativa ao operador
para que seja utilizado a caixa de isopor no início do packing.
Conferência obrigatória dentro do Packing
o
100% dos volumes Termolábil passam por conferência item a item (SKU,
quantidade) durante o packing. (está sendo previsto uma balança estática e
caso essa opção seja validada a conferência item a item só deve ser feita se for
identificado alguma divergência na validação de peso)
o
Ao finalizar a conferência, o WCS imprime a etiqueta final do volume, Será
informado o destino (rota) do volume para que o operador se oriente no
momento da paletização.
Vinculação a RG (Cofre/Pallet)
o
Após o packing, o operador acessa a tela “Aloca Pallet” no coletor para
relacionar os volumes Termolábil a um RG (Cofre/Pallet).
o
O WCS não diferencia RG Cofre e RG Pallet: trata-se do mesmo código
RG, sem tipagem.
o
O uso operacional do RG (cofre para volumes a vácuo em “saquinhos” ou
pallet para caixas de isopor) é definido fora do sistema e não altera o
cadastro/validação do RG no WCS.
o
Regras de validação do RG (formato/unicidade) permanecem idênticas
independentemente do destino operacional.
O operador realiza a leitura da etiqueta do volume
Após isso, o WCS verifica se já existe um pallet ativo associado ao mesmo romaneio daquele
volume.
Se já existir pallet para aquele romaneio:
O coletor exibirá a posição o RG do pallet onde o volume deve ser alocado.
Se ainda não existir pallet para aquele romaneio:
O coletor solicitará ao operador que informe um RG de pallet para esse volume.
Após leitura desse RG, ele passa a ser utilizado para todos os próximos volumes do
mesmo romaneio.
Alerta após alocação.
O WCS deve exibir a quantidade faltante de volumes do termolábil para o romaneio
referente ao volume lido sempre que um volume for alocado.
Fluxo operacional do Aloca Pallet:
1. Coletar o volume na estação de packing.
2. Ler a etiqueta do volume impressa.
3. O WCS indicará no coletor o RG do pallet.
4. O operador deposita o volume no pallet.
5. O operador realiza a leitura do código de barras do RG de pallet para confirmar a
alocação.
6. O WCS informa quantos volumes faltam para o Romaneio.
Caso o operador informe uma posição diferente da indicada pelo sistema, o WCS apresentará
mensagem de erro, orientando o operador a informar a posição correta.
Após a vinculação do RG aos volumes Termolábil, o WCS mantém o controle desses volumes e
considera o respectivo pallet como o ÚLTIMO a ser carregado no romaneio, garantindo que os
itens embalados em isopor e no cofre permaneçam o maior tempo possível em ambiente
refrigerado antes da expedição. Ordem definitiva de carregamento (do primeiro para o último a
ser carregado): (1) Pallets normais por sequência de entrega; (2) Pallets PTL Exclusivo; (3) Pallets
de produtos Perigosos; (4) Pallet Termolábil (último).

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Limpeza de Canal de Picking  
**Score:** — (semantico) | **ID:** d050ca04b989b264

A limpeza de canal de picking é significativamente mais complexa porque envolve posições que
podem estar sendo ativamente utilizadas para separação no momento da solicitação. Quando o
SAP solicita a remoção de um palete de uma posição de picking, o WCS não pode simplesmente
retirar o palete, ele precisa garantir que nenhuma coleta em andamento seja interrompida.
Por isso, o WCS implementa um protocolo que segue uma sequência rígida: verificar →

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Rastreável  
**Score:** — (semantico) | **ID:** bbe5d971b7cc6eb9

O SSCC (Serial Shipping Container Code) funciona como o identificador único de cada caixa,
equivalente a um "CPF da caixa". Está presente apenas em etiquetas de produtos rastreáveis
(Etiqueta 4.0) e é utilizado na separação e rastreabilidade individual dos volumes.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 1 dígito verificador  
**Score:** — (semantico) | **ID:** d3530dbb8e14016c

•
Total: 18 caracteres
O SSCC é utilizado pelo WCS para compor o identificador único do volume (campo ZCOD_CAIXA
no retorno de separação ao SAP).

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Picking Fracionado  
**Score:** — (nome-topico) | **ID:** 76885fcb51d2b286

O processo de Picking Fracionado ocorre após a impressão dos volumes no Order Start, e o
WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos
itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental
para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Início do Processo:
O operador induz o volume já etiquetado na esteira, e após a passagem da de papelão
pelos pontos de decisão (scanner), o WCS verifica automaticamente se há algum item
esperando coleta naquele posto.
Se houver coleta, o volume será desviado automaticamente para o posto correspondente.
Caso contrário, o volume segue para o próximo ponto de decisão até ser identificado que
a coleta deve ocorrer em algum posto específico.
Indicação Visual para Coleta:
Após o desvio, o WCS acende os LEDs de frente no posto de separação, sinalizando o
local e a quantidade de itens a serem coletados.
Os LEDs de frente exibem 3 dígitos para identificar a quantidade de itens a serem
coletados, sendo esses LEDs exclusivos para cada posição.
Coleta dos Itens:
O operador deve coletar fisicamente os itens solicitados, conforme indicado pelos LEDs,
e realizar a leitura do EAN de cada item para validar a coleta. (a regra de bipar pode ser
desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada
com o apertar do LED.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um
PDV para auxiliar o operador na coleta.
Coleta nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas,
o WCS acende os LEDs da frente em rosa, sinalizando que a coleta será feita na parte
de picking costas, além de acender os LEDs nas posições de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente, onde o WCS informa o
endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a
várias posições de picking, permitindo que o operador colete de maneira eficiente e sem
confusão.
Finalização da Coleta:
O operador realiza a coleta de acordo com as indicações dos LEDs e valida cada item
coletado através da leitura do EAN. (a regra de bipar pode ser desativada e ativada)
caso a operação desligue a regra de leitura a coleta é efetivada com o apertar do LED.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem
na caixa que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa”
através do PDV.
Ao acionar essa funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com
os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do
volume, que será retomada no processo de Order Start com uma nova caixa.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual,
mantendo a rastreabilidade e a integridade da separação.
Finalização e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde, indicando que o volume
foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para
o próximo posto de separação, onde o processo se repete até que todos os itens sejam
coletados e o volume esteja completo.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Tela 2 – Execução do Picking Cart de Reabastecimento:  
**Score:** — (semantico) | **ID:** 4d56c86a59795b7b

A execução do picking cart é realizada em uma tela separada e dedicada,
acessível a partir do menu principal do módulo de Reabastecimento.
Essa separação garante que o operador responsável pela execução do reabastecimento
nos endereços de Picking Fracionado tenha uma tela focada exclusivamente no fluxo de
deslocamento e alocação, sem interferência das funções de preparação.
Resumo de Telas: Tela de Preparação = Decanting + Abastecimento do Picking Cart
(navegação via botão “Voltar” entre as duas funções). Tela de Execução = Picking Cart de
Reabastecimento (tela dedicada e independente).

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Abastecimento do Picking Cart  
**Score:** — (semantico) | **ID:** 56b8f5f96ae59170

O Picking Cart de Reabastecimento é um carrinho com múltiplas posições, configuradas
previamente no WCS, que permite ao operador transportar diversas bins de uma só vez até os
endereços de Picking Fracionado. O objetivo é otimizar o deslocamento do operador, levando
múltiplas bins em uma única viagem.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Fluxo Operacional do Abastecimento do Picking Cart:  
**Score:** — (semantico) | **ID:** 7520a02acca192c7

Identificação do Picking Cart: O operador realiza a leitura (bipa) do código
identificador do picking cart. Esse código é o identificador único do carrinho no
sistema WCS, e deve estar previamente cadastrado. A leitura do código vincula todas
as operações subsequentes de abastecimento ao picking cart selecionado.
Leitura da Posição do Picking Cart: O operador realiza a leitura (bipa) da posição
do picking cart onde deseja alocar a bin.
Leitura da Bin: O operador realiza a leitura (bipa) da bin que será alocada naquela
posição do carrinho. O WCS valida se não há uma bin alocada e registra o vínculo entre
a posição do picking cart e a bin.
Repetição para Próximas Posições: O operador repete o processo (bipa posição →
bipa bin) para cada posição adicional que deseja abastecer no picking cart.
Flexibilidade Operacional: O operador tem flexibilidade para abastecer o picking
cart de acordo com o número de endereços que pretende atender na viagem. Não é
obrigatório preencher todas as posições do carrinho — o operador pode voltar para a
tela inicial assim que considerar o carrinho adequadamente carregado.
Regra: Cada posição do picking cart comporta uma bin, e cada bin corresponde a um
endereço de picking fracionado. O número máximo de posições do picking cart será
configurável em tela de parâmetros do WCS.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Execução do Picking Cart de Reabastecimento  
**Score:** — (semantico) | **ID:** a542e410a14f8ce8

Após o abastecimento do picking cart, o operador inicia a execução do reabastecimento,
deslocando-se com o carrinho até os endereços de Picking Fracionado indicados pelo WCS. O
WCS otimiza automaticamente o trajeto do operador, ordenando os endereços de
reabastecimento de forma crescente a partir do endereço mais próximo da
impressora, minimizando o deslocamento e garantindo maior eficiência operacional.
A sequência de atendimento deverá respeitar a lógica de endereçamento por “apartamento”,
priorizando primeiro todos os endereços ímpares e, em seguida, os endereços pares exemplo
“06.002.101”.
Fluxo Operacional da Execução:
Identificação do Picking Cart: O operador realiza a leitura (bipa) do código
identificador do picking cart para iniciar o processo de execução do
reabastecimento. O WCS valida o código, carrega as informações das bins alocadas e
calcula a rota otimizada de reabastecimento, ordenando os endereços de forma
crescente a partir do endereço mais próximo da impressora.
Indicação do Primeiro Endereço: O WCS indica no coletor o primeiro endereço de
Picking Fracionado a ser reabastecido, seguindo a ordenação otimizada (endereço mais
próximo da impressora).
Leitura do Endereço: O operador se desloca até o endereço indicado e realiza a
leitura do endereço de picking para confirmar sua localização.
Indicação da Posição do Picking Cart: Após a confirmação do endereço, o WCS
indica qual posição do picking cart contém a bin correspondente àquele endereço.
Leitura da Bin: O operador realiza a leitura da bin indicada pelo WCS e realiza a
transferência dos itens da bin para a posição de Picking Fracionado.
Avaliação de Bins Elegíveis para o Endereço: Após a leitura da bin, o WCS avalia
se há mais alguma bin no picking cart que também seja elegível para o mesmo
endereço:
○
Se sim: o WCS indica a próxima posição do picking cart que contém a bin
elegível. O operador realiza a leitura e abastece o endereço com a bin
adicional.
○
Se não: o WCS indica o próximo endereço de Picking Fracionado a ser
reabastecido, e o operador repete o processo (leitura do endereço → indicação
da posição → leitura da bin → avaliação).
Repetição até a Conclusão: O operador repete o fluxo até que todas as bins do
picking cart tenham sido alocadas nos respectivos endereços de Picking Fracionado.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 7.5. Picking Map  
**Score:** — (nome-topico) | **ID:** 461af07711ac7cd2

O Pick Map é a estrutura interna do WCS Velox que mapeia cada SKU às suas posições físicas
de picking dentro da automação (FlowRack de frente e de costas, módulos PBL e posições de
solo do túnel). É a partir desse mapa que o sistema determina, para cada item de um pedido,
em qual(is) endereço(s) o produto deve ser coletado e por quais zonas a caixa precisa transitar.
Sem integração — internalizado no Velox: o Pick Map não depende de integração com o
WMS Spark. O WMS enxerga um único endereço sistêmico por SKU (uma entrada e uma saída
na automação, Museu, rua fullcase de alto giro), enquanto o WCS mantém internamente o
detalhamento de quais posições físicas de picking abrigam cada SKU. O cadastro e a
manutenção do Pick Map são realizados no próprio Velox. O cadastro dos endereços/posições
pode ser feito de forma individual ou por importação em massa, permitindo a carga inicial e
a atualização de grandes volumes de endereços em uma única operação, sem necessidade de
cadastro manual posição a posição.
O Pick Map é a base do roteamento do Order Start: ao receber a onda de pedidos (SKU ×
quantidade), o WCS consulta o Pick Map para definir o roteiro de cada caixa antes da indução
na esteira.
Obs: O Picking Map deve ser realizado baseando-se na Matriz de Fragilidade, para garantir uma
melhor eficiência da operação os itens mais pesados devem sempre estar nos primeiros postos,
garantindo que os itens mais pesados sejam pegos primeiro no formado de picking fracionado
(caixa plástica).

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 8.3. Coleta Picking Cart  
**Score:** — (semantico) | **ID:** 701f11885237290f

Após o processo de Order Start do Picking Cart, será exibida uma lista de itens no PDV,
contendo informações detalhadas sobre endereço, produto, quantidade a ser coletada e
observações do pedido. O operador se dirige até o endereço indicado e realiza a leitura do
código do endereço para iniciar a separação do item correspondente.
Em seguida, o operador realiza a leitura do código do item. O WCS informa a quantidade e em
qual posição do Picking Cart o item deverá ser alocado. O operador, então, confirma a
quantidade real separada e realiza a leitura da caixa plástica para confirmar a separação
daquele item. A lista de itens no PDV será atualizada à medida que a quantidade esperada for
coletada. Quando a quantidade necessária for atingida, o WCS informa que a coleta para
aquele item foi concluída, permitindo que o operador siga para o próximo endereço na lista.
Caso o operador não consiga coletar todos os itens do endereço, haverá a opção de clicar no
botão "Finalizar Coleta". Ao acionar esse botão, o WCS entenderá que apenas a quantidade lida
foi separada e registrará o corte do restante da quantidade, garantindo que o processo seja
finalizado
corretamente
e
permitindo
o
prosseguimento
da
operação.
Após finalizar o processo de coleta o sistema irá sinalizar quais caixas devem ir para a área de
sorter ou para a área de PTW descrita no próximo tópico.
Obs: Diferentemente do corte na conferência, o corte registrado na coleta do Picking Cart não
exige aprovação de supervisor no momento da coleta. Isso não representa um risco de
acuracidade, pois o volume resultante ainda passa pela balança dinâmica e, quando aplicável,
pela conferência, onde eventuais divergências são tratadas e o corte é validado antes da
expedição.
As caixas que forem para o sorter são desviadas para a Rampa 1 (PTL 3) e, em seguida,
reinduzidas na linha de picking, onde percorrem os postos para a coleta de eventuais itens
faltantes e passam pela conferência de peso antes de seguir para a Conferência e Expedição.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** Cart + PTW (Fluxo Interno)  
**Score:** — (semantico) | **ID:** 54900468d86e15f0

Conforme definido em projeto, a uma posição da primeira saída do Sorter é dedicada
exclusivamente ao fluxo interno.
Critério: Se o volume foi identificado como "Reposição" (vindo do WMS/Pulmão para
abastecer o Picking) ou se o volume é proveniente da coleta do picking cart e do PTW
(volumes consolidados que retornam à automação para seguir o fluxo de picking).
Ação: O Sorter desvia a caixa para a Rampa 1 que por sua vez será alocado na posição
03.
Operação: Um operador coleta a caixa e a reinduz no Order Start (vide Capítulo 4 e
5), fechando o ciclo de abastecimento.
[GAP - em aberto] Em aberto: definir como sera o reabastecimento da area de picking cart /
museu (baixo giro). Diferentemente do reabastecimento dos flowracks, este fluxo ainda nao
esta definido (gatilho, ponto de entrega e roteamento). A definir com a operacao e o layout.
Obs: As posições de PTL da Rampa 1 que não estiverem mapeadas no fluxo de
reabastecimento poderão ser utilizadas para expedição. O Sorter dispõe de 4 rampas de
transporte e 1 rampa exclusiva de rejeito.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 7.2. Picking Fracionado  
**Score:** — (nome-topico) | **ID:** b8ffb5643be84f8d

Estações de Picking:
O CD possui 10 postos de separação. Cada operador cuida de 1 posto por vez. Cada posto
possui 162 posições distribuídas em 72 LEDs e posições na frente e 15 LEDS e 90 posições nas
costas. As posições de frente possuem displays LED de 3 dígitos com botão LED integrado. As
posições de costas possuem displays de 10 dígitos (1 display por nível). Cada estação é
equipada com 1 PDV e 1 scanner (fornecimento invent).
3 dígitos:
10 dígitos:
Identificação do Operador:
Antes de iniciar a coleta, o operador realiza login na estação pelo PDV (usuário/senha). O WCS
registra o vínculo entre o operador e a estação, permitindo rastreabilidade das coletas realizadas
naquele posto. O supervisor pode acompanhar em tempo real quais operadores estão ativos em
cada estação (relatórios).
Em situações excepcionais, mais de um operador pode estar logado na mesma estação
simultaneamente. Nesse cenário, o WCS registra todos os operadores presentes, porém a
rastreabilidade individual por item coletado não é garantida — o sistema identifica quais
operadores estiveram na estação, sem distinção de qual realizou cada coleta específica.
Ao encerrar seu turno ou deixar a estação, o operador realiza logout pelo PDV. O WCS registra o
horário de saída e encerra o vínculo com a estação. Caso o operador troque de estação sem
realizar logout, o supervisor pode forçar o encerramento da sessão anterior remotamente pelo
painel de gestão.
Início do Processo:
Após a indução no Order Start, a caixa segue pela linha expressa.
Ao chegar no leitor da estação, caso tenha produtos a serem separados naquele posto,
a caixa será desviada para dentro da estação de picking e direcionada para o lado do
posto onde solicita separação de itens.
Caso não haja itens a separar naquela estação, a caixa segue direto pela linha expressa
para a próxima estação ou saída.
Quando não há itens automatizados no pedido (Bypass), a caixa segue direto para
conferência/balança.
Separação somente na Frente:
O WCS acende os LEDs das posições solicitadas na cor azul e o display informará a
quantidade a ser separada.
O operador realiza a leitura do EAN do produto na coleta (bipagem obrigatória — regra
parametrizável) e pressiona o botão LED para confirmar a separação.
O operador segue para a próxima posição acionada e realiza o mesmo processo até que
todas as posições sejam visitadas.
Ao finalizar toda a separação do posto, todas as posições são acesas na cor verde
indicando ao operador que a separação naquele posto foi concluída.
O operador reinduz a caixa na linha expressa onde seguirá para a próxima estação de
picking.
Separação Frente + Costas:
Quando o pedido também requer itens das costas, os LEDs acendem na cor rosa
indicando coleta simultânea frente e costas.
O operador realiza primeiro a coleta dos itens da frente conforme descrito acima.
Após a finalização da coleta da frente, o operador segue para separar os itens nas
posições acionadas nas costas.
Os LEDs de picking costas possuem dinâmica diferente: o WCS informa o endereço e a
quantidade a ser coletada para cada posição. Esses LEDs podem atender a várias
posições de picking.
Após separar todos os itens (frente e costas), todas as posições são acesas na cor verde
indicando conclusão, e o operador reinduz a caixa na linha expressa.
Exibição no PDV:
O PDV exibirá a lista de itens a serem coletados de acordo com o volume desviado, a
quantidade de itens prevista e observação do pedido quando houver.
Após o operador pressionar o LED confirmando a coleta, a linha correspondente é pintada
de verde no PDV.
Padrão de Cores nos LEDs:
Azul — separação (coleta na frente)
Verde — finalização do posto
Rosa — coleta frente + costas
Laranja — reabastecimento
Bipagem Obrigatória:
A bipagem é obrigatória neste projeto: o operador deve realizar a leitura do EAN do produto na
coleta, além de pressionar o botão LED para confirmar a separação. Essa regra é parametrizável
no sistema para futuros ajustes.
Bipagem Pós-Reabastecimento:
Sempre que uma posição de picking receber reabastecimento, o primeiro item coletado daquela
posição deverá obrigatoriamente passar por bipagem do EAN, independentemente da regra geral
de bipagem parametrizada. O objetivo é validar que o produto abastecido corresponde ao SKU
cadastrado na posição, prevenindo erros de abastecimento. Após a primeira coleta validada, a
posição retorna ao comportamento padrão de bipagem configurado.
Reindução pelo Operador:
O WCS orienta o separador pelo PDV quando for necessário reinduzir a caixa na linha.
Finalização e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde, indicando que o volume
foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para
o próximo posto de separação, onde o processo se repete até que todos os itens sejam
coletados e o volume esteja completo.
Pede Caixa: Caso o operador identifique que os itens solicitados não caberão fisicamente na
caixa atual, poderá pressionar o botão "Pede Caixa" no PDV. O WCS finaliza a separação da
caixa atual com os itens já coletados e a caixa segue para o final da linha. O WCS assume
internamente a geração da caixa-filha, informando ao operador no Order Start o tamanho de
caixa necessário para os itens excedentes. A caixa adicional será priorizada como próxima a ser
enviada para a linha. O operador fará a separação somente dos itens que não couberam na
caixa anterior. O WCS enviará ao WMS a confirmação de picking de ambas as caixas (original e
filha) normalmente ao final da separação.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 7.4. Picking Cart  
**Score:** — (nome-topico) | **ID:** a5a5d4d1d6073d3e

O Picking Cart é uma prateleira móvel equipada com 1 PDV (tablet) e 1 leitor de código de barras
(mão com gatilho). É utilizado para itens de menor giro que não estão no FlowRack.
7.4.1.  Order Start Picking Cart
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking
Cart.
O operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade
definida na integração. Caso necessário, será possível ajustar a prioridade diretamente no WCS.
Impressão das Etiquetas:
O operador seleciona quantos volumes irá iniciar, limitado à quantidade de posições
disponíveis no Picking Cart.
O WCS imprime as etiquetas (ZPL recebido do WMS Spark) na impressora automática
vinculada ao posto (Zebra ZT230).
O operador aplica as etiquetas nas caixas finais correspondentes.
Mapeamento da Posição de Picking Cart:
Após a impressão e aplicação das etiquetas, o operador realiza o mapeamento da
posição do Picking Cart à caixa final do pedido.
O operador realiza a leitura da etiqueta da caixa final e associa essa caixa a uma
posição específica do Picking Cart através do leitor de mão integrado ao PDV.
Após finalizar o mapeamento, o operador deve clicar no botão "FINALIZAR
MAPEAMENTO".
Não será necessário vincular todas as posições de uma vez, permitindo mapeamento
parcial conforme a disponibilidade de caixas.
Alocação da Posição ao Volume Sistêmico:
Após o mapeamento, o PDV exibirá a lista de tarefas de separação organizada por
prioridade ou FIFO.
O operador realiza a leitura da posição do Picking Cart no PDV e confirma a alocação da
posição ao volume sistêmico correspondente.
O operador deve repetir o processo para todas as posições que possuam caixas
vinculadas. Ele não poderá avançar para a tela de coleta até que todas as posições
mapeadas sejam atribuídas a uma tarefa de separação.
7.4.2. Coleta Picking Cart
Após o Order Start, será exibida uma lista de itens no PDV contendo endereço, produto,
quantidade a ser coletada.
O operador se dirige até o endereço indicado e realiza a leitura do código do endereço.
O operador realiza a leitura do código do item.
O WCS informa a quantidade e em qual posição do Picking Cart o item deverá ser
alocado.
O operador realiza a leitura do EAN de cada item coletado (bipagem item a item —
regra parametrizável no WCS). Após bipar o item, o operador confirma a alocação na
posição do Picking Cart correspondente. Caso a bipagem item a item esteja desativada,
o operador informa a quantidade coletada e realiza apenas a leitura da etiqueta da
caixa final para confirmar a separação.
A lista de itens no PDV será atualizada à medida que a quantidade for coletada.
Quando a quantidade necessária for atingida, o WCS informa que a coleta para aquele
item foi concluída.
Caso o operador não consiga coletar todos os itens do endereço, haverá a opção de clicar no
botão "Finalizar Coleta". Com a bipagem item a item ativa, o WCS considera como separada
apenas a quantidade de itens efetivamente bipados e registra o restante como corte
(shortpicking). Com a bipagem desativada, o operador decrementa manualmente a quantidade
no PDV e realiza a leitura da etiqueta da caixa para confirmar; a diferença entre o solicitado e o
informado é registrada como shortpicking.
Após finalizar a coleta de todos os itens, o WCS informará que a separação foi concluída. O
operador deverá se dirigir à indução na linha do FlowRack para que a caixa siga o fluxo
normal. Caso existam itens a serem coletados no FlowRack, o volume seguirá o processo de
separação PBL. Caso não haja itens no FlowRack, o volume seguirá direto para
conferência/balança dinâmica.
Obs: Apenas a balança do Order Start será estática, as demais serão dinâmicas.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Picking Fracionado  
**Score:** — (nome-topico) | **ID:** 83a49ffdd4c856c4

O processo de Picking Fracionado ocorre após a impressão dos volumes no Order Start, e o
WCS (Warehouse Control System) gerencia a movimentação dos volumes e a separação dos
itens com o uso de tecnologia PBL (Picking by Light) e LEDs. Esse processo é fundamental
para garantir uma separação eficiente e sem erros dos produtos no posto de separação.
Início do Processo:
O operador induz o volume já etiquetado na esteira, e após a passagem da caixa de
papelão pelos pontos de decisão (scanner), o WCS verifica automaticamente se há algum
item esperando coleta naquele posto.
Se houver coleta, o volume será desviado automaticamente para o posto correspondente.
Caso contrário, o volume segue para o próximo ponto de decisão até ser identificado que
a coleta deve ocorrer em algum posto específico.
Indicação Visual para Coleta:
Após o desvio, o WCS acende os LEDs de frente no posto de separação, sinalizando o
local e a quantidade de itens a serem coletados.
Os LEDs de frente exibem 3 dígitos para identificar a quantidade de itens a serem
coletados, sendo esses LEDs exclusivos para cada posição e um PDV por estação.
Coleta dos Itens:
O operador deve coletar fisicamente os itens solicitados, conforme indicado pelos LEDs,
e realizar a leitura do EAN de cada item para validar a coleta. (a regra de bipar pode ser
desativada e ativada) caso a operação desligue a regra de leitura a coleta é efetivada
com o apertar do LED.
O posto de separação também será equipado com LEDs de costas (com 6 dígitos) e um
PDV para auxiliar o operador na coleta (Esse PDV será o mesmo da frente, sendo um
por estação).
Modalidade adicional (BETA SP): bipar 1 unidade por SKU/EAN para validação do produto,
e em seguida confirmar a quantidade tanto pelo PDV quanto pelo botão do LED. Essa
modalidade equilibra segurança da coleta com produtividade.
Coleta nas Posições das Costas:
Após a finalização da coleta dos itens da frente, se houver coleta nas posições das costas,
o WCS acende os LEDs da frente em rosa, sinalizando que a coleta será feita na parte
de picking costas, além de acender os LEDs nas posições de picking costas.
Os LEDs de picking costas possuem uma dinâmica diferente, onde o WCS informa o
endereço e a quantidade a ser coletada para cada posição. Esses LEDs podem atender a
várias posições de picking, permitindo que o operador colete de maneira eficiente e sem
confusão.
Funcionalidade “Pede Caixa”:
Durante o processo de coleta, caso o operador identifique que os produtos não cabem
na caixa que está sendo utilizada, ele poderá acionar a funcionalidade “pede caixa”
através do PDV.
Ao acionar essa funcionalidade, o sistema finaliza a tarefa de picking da caixa atual com
os itens já coletados, enviando a mesma para reindução e posterior fechamento.
Simultaneamente, o WCS gera uma nova tarefa de separação para os itens restantes do
volume, que será retomada no processo de Order Start com uma nova caixa.
Essa funcionalidade garante a continuidade do processo sem sobrecarregar a caixa atual,
mantendo a rastreabilidade e a integridade da separação.
Finalização e Reindução para o Próximo Posto:
Após a coleta de todos os itens, os LEDs acendem em verde, indicando que o volume
foi finalizado no posto de separação.
O operador confirma a finalização no PDV ou nos LEDs e reinduz a caixa na esteira para
o próximo posto de separação, onde o processo se repete até que todos os itens sejam
coletados e o volume esteja completo.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 8. Picking Cart  
**Score:** — (nome-topico) | **ID:** 2d7eb8a7eb67dc82

Para atender as demandas da operação visando os itens com menor curva, teremos o conceito
de separação por Picking Cart. Esse conceito consiste em um modelo de prateleira móvel com
auxílio do PDV, que é utilizado para fazer as coletas dos volumes de acordo com as posições
informadas no sistema.
Como regra crítica, uma mesma caixa/volume nunca conterá itens de mais de uma remessa. O
WCS é responsável por garantir essa segregação durante a alocação dos volumes no carrinho.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Estrutura do Picking Cart  
**Score:** — (semantico) | **ID:** d4974865a8361d03

Cada Picking Cart será composto por:
1x PDV (terminais), 1x carrinho apenas.
1x leitor de código de barras sem fio QuickScan Imager 2D QR Code com mira (USB),
com gatilho.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Mapeamento do Picking Cart  
**Score:** — (semantico) | **ID:** 098262016062b1e4

Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da etiqueta impressa
e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas
as posições necessárias, o operador deverá acionar o botão Finalizar Mapeamento e seguir
para a etapa de separação.
Após o mapeamento, o sistema libera as tarefas de coleta e o operador visualizará a lista de
tarefas de separação organizadas conforme a prioridade definida na integração. Caso
necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Separação no Picking Cart  
**Score:** — (semantico) | **ID:** a584289374937e48

Na separação, a interface exibirá de forma clara e objetiva as informações essenciais para a
coleta. O sistema WCS apresentará num primeiro momento, para cada endereço a ser
separado:
Posição (endereço de picking): onde o produto deve ser coletado.
SKU: código identificador do produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento
visual.
Unidade de medida: para indicar a quantidade a ser separada, a unidade de medida
do produto e se a coleta será feita em unidades, caixas, frascos, pacotes, entre outros.
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser
visitados. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a
leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e
todas as posições do Picking Cart e volumes associados que solicitam aquele item. Com essas
informações, o operador executa a coleta da quantidade indicada.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Picking  
**Score:** — (nome-topico) | **ID:** ba16382b165c2113

O picking é a etapa em que os itens são fisicamente coletados das posições de armazenagem e alocados nas caixas dos pedidos. O WCS coordena essa etapa indicando ao operador exatamente onde ir, o que coletar e em qual quantidade — garantindo acuracidade e rastreabilidade de cada item separado.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Picking Cart  
**Score:** — (nome-topico) | **ID:** e29d2e87c43787ee

O processo de início de separação (Order Start) para a área A4 (Picking Cart) é de
responsabilidade do cliente e será executado integralmente através do sistema interno KAIZEN.
Nesta etapa, não haverá uma integração específica para que o WCS comande ou gerencie as
tarefas de coleta. A função do WCS se limitará a ter o cadastro prévio das caixas plásticas
utilizadas na operação. É fundamental que o número de identificação de cada caixa esteja
cadastrado na base de dados do WCS para que o volume possa ser devidamente reconhecido
nas etapas posteriores do fluxo, como a Conferência e o Sorter.
Obs: Quando a integração de Wave tiver um pedido de Picking Cart, o campo "endereco" será
enviado como "N/A".

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Fracionados A4 ( Picking Cart )  
**Score:** — (semantico) | **ID:** cdbd0a2a7479e463

O processo de Picking Cart será de responsabilidade do cliente, onde será utilizado o “KAIZEN”.
Após finalizar o processo de coleta de todos os itens. O operador então deverá se dirigir à indução
de volumes na Área de Conferência de Picking Cart, o volume seguirá para a balança e
posteriormente para o packing e será induzido na esteira de Fullcase, caso seja desviado para a
estação de conferência, passará por um processo de validação adicional ou correção.
Obs: A área de conferência será de responsabilidade do WCS Velox.
Referência do pedido alocado na caixa específica e não no carrinho KAIZEN

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** Stakeholders ES  
**Score:** — (semantico) | **ID:** e3c4c5c2743abb38

Participante | Função | Empresa
Pedro Talasamov | Analista de Negócios | Invent
Daiana Costa | Infraestrutura/redes | Invent
Alex Timoteo | PMO | Invent
Renan Henrique |  | TPC
Carlos Rodolfo |  | TPC
Jacqueline Arruda |  | TPC
William Roberto |  | TPC

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
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
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** 3.0 Stakeholders ES  
**Score:** — (semantico) | **ID:** 7a763e45169e4a31

Participante
Função
Empresa
Pedro Talasamov
Analista de Negócios
Invent
Daiana Costa
Infraestrutura/redes
Invent
Alex Timoteo
PMO
Invent
Renan Henrique
TPC
Carlos Rodolfo
TPC
Jacqueline Arruda
TPC
William Roberto
TPC

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** Picking Map  
**Score:** — (nome-topico) | **ID:** 1a5e59f589edea1f

A operação TPC será responsável por mapear as posições e itens que deverão ser alocados em
cada área da célula.
Flowrack: deverá ser informado o endereço final da posição. Além disso, será
necessário configurar a quantidade de unidades que compõem uma caixa, bem como o
número de caixas que devem ser finalizadas para que o sistema acione o LED traseiro
do flowrack, indicando a retirada de X caixas para o pallet.
Carrinho: Carrinho: Serão 6 endereços informados no picking map, cada um referente
a uma posição/PTL de carrinho (pallet). Cada carrinho terá sua própria identificação de
posição com PTL. Importante: nessas posições poderá haver mais de um SKU por
posição, de acordo com o informado no picking map. O sistema deverá acender o LED
correspondente à posição do carrinho conforme o mapeamento.
Duas posições da planilha de Picking Map devem ser mapeadas como posições de
anomalias no flowhack, sendo assim deve ser preenchido apenas o campo QTD-CAIXA,
QTD-RETIRADA, ENDERECO_CELULA e COD SAP (informando se é anomalia 1 ou 2)
conforme mencionado no decorrer do documento.
Segue exemplo da planilha que será importada no WCS:
TECNOLOGIA SD = Tecnologia do equipamento
COD SAP = código do produto no SAP
MODELO = Descrição do produto
FAMILIA = Família do produto
QTD – CAIXAS = Quantidade de unidades deste SKU para formar uma caixa
QTD – RETIRADA = Quantidade de caixas que deve ser formada para o WCS informar a
retirada , via LED, na parte de traseira do flowhack
QTD – PALLET = Quantidade que forma um pallet
ENDERECO_CELULA = Código do endereço do flowrack ou código da posição do
carrinho/PTL. Para posições de carrinho, cada endereço representa um carrinho/pallet
distinto, podendo conter mais de um SKU por posição conforme mapeamento.
KIT – CODIGO + Sim Card =  Informa se o produto deve solicitar a leitura de um Sim Card
ou não.
