# packing.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Análise de Corte  
**Score:** — (semantico) | **ID:** 0d9053e41021b6e3

O setor de análise corte será determinante para definir se será aceito ou não o corte que ocorreu durante o Picking.
Teremos duas áreas separadas para esse setor: “Produtos conformes e Produtos inconformes”.
O operador deverá informar todas as caixas que serão analisadas. O WCS terá um parâmetro máximo de caixas para realizar a análise por vez. Com a relação de todas as caixas, o WCS exibira uma lista com todos os endereços que ocorreram o ShortPicking.
Será mostrado uma lista com três colunas: endereço, SKU, quantidade de unidades faltantes, caixas de coleta/carrinho e data do último ressuprimento para a posição. O processo de análise de corte consiste na verificação visual do endereço de onde ocorreu o corte.
Uma vez que o endereço se encontra vazio o operador deve realizar a análise de saldo via WMS para solicitar o reabastecimento, caso não exista saldo do item disponível para reabastecimento o operador deve realizar a leitura do endereço e confirma o corte de todas as unidades solicitadas para todas as caixas daquela leva através de um botão que será exibido no WCS. O WCS deve mostrar um aviso pedindo confirmação do corte.
Com a confirmação do corte, a posição/item permanecerá bloqueados e só podem ser desbloqueados em caso de uma nova atualização de reabastecimento no endereço indicado.
Caso exista saldo para reabastecimento total ou parcial, o operador deve realizar através do WMS o reabastecimento. Após a conclusão da tarefa de reabastecimento, o operador de análise de corte deve realizar a leitura do endereço e SKU, o WCS exibirá a lista com as informações de quantidade a ser separada.
O processo para a coleta desses itens será realizar a leitura do código da caixa ou carrinho presente na lista exibida e digitar a quantidade que for coletada. Caso não for coletada a quantidade total esperada, as unidades faltantes serão consideradas corte. O WCS deve mostrar um aviso pedindo confirmação do corte.
Com a coleta total do item, o sistema entende que pode voltar a separar na posição/item que estava bloqueado e realiza a liberação para a separação nas próximas levas.
O operador será obrigado a visitar todos os endereços da lista exibida pela ordem de separação. Caso contrário não conseguira seguir com a próxima etapa do processo.
Com todos os endereços visitados e realizados suas respectivas coletas, terá um botão de “finalizar análise de corte” onde o sistema irá informar se as caixas ou carrinhos devem ser induzidos diretamente na esteira (sem precisar passar pela área de Recebimento) ou caixas que devem ser direcionadas diretamente para conferência (carrinhos inconforme).
Corte em pedidos multi: Nos casos em que o corte ocorrer em uma caixa de separação do tipo multi, o WCS deverá realizar o corte priorizando o pedido de menor prioridade logística. Como critério de desempate, caso dois ou mais pedidos possuam a mesma prioridade, o WCS deverá aplicar o corte no pedido enviado por último ao sistema, seguindo a regra de ordenação FIFO (considerando a ordem de entrada dos pedidos no WCS).

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 625cf8bf9edbbab4

O processo de packing, será feito na estação de conferência, onde o mesmo operador que realizou a conferência, realiza a troca da caixa de separação (plástica) para a caixa de expedição (papelão) realiza o fechamento da caixa, fixa a etiqueta e insere na esteira, seguindo para o sorter.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Parâmetro de Picking Exceção  
**Score:** — (semantico) | **ID:** 375b5ecf40310dc1

O WCS disponibiliza um parâmetro específico para controle do Picking Exceção baseado nas características físicas dos produtos, categoria e lista de SKUs.
O sistema contará com uma tela de configuração onde poderão ser cadastrados os critérios de exceção, incluindo:
Altura (ex.: 5 a 60 cm)
Largura (ex.: 5 a 60 cm)
Comprimento (ex.: 5 a 60 cm)
Peso (ex.: 200 a 30.000 g)
Categoria de produto (se aplicável)
Lista de SKUs específicos
Esses parâmetros definem o perfil padrão de produtos que podem ser atendidos pelo fluxo regular de picking.
O WCS realizará a validação automática das informações dos itens e identificará os produtos que não se enquadram nos critérios configurados, considerando:
Dimensões fora do range permitido
Peso fora do limite configurado
Categoria classificada como exceção (se aplicável)
SKU incluído na lista de exceção
Os itens que atenderem a qualquer um desses critérios serão automaticamente direcionados para o processo de Picking por Exceção, garantindo:
Continuidade do fluxo principal sem impactos
Tratativa específica para produtos fora do padrão
Maior controle operacional e físico

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 69222dee771ebf3f

Após a aferição de peso positiva na balança, todos os volumes coletados durante o picking fracionado ou picking cart serão direcionados obrigatoriamente para as estações de packing. Nesse processo, o operador transferirá os itens da caixa plástica para a caixa final.
O operador acessa a tela de packing no WCS (desktop), seleciona o posto de packing em que se encontra e realiza a leitura da caixa plástica que contém os itens. O WCS reconhece a caixa e inicia a impressão da etiqueta final do volume. O WCS só permitirá impressão de volumes aprovados na validação de peso ou conferidos manualmente nas estações de conferência.
A etiqueta final será impressa pelo WCS e utilizada para garantir a rastreabilidade do item durante o processo subsequente. Essa etiqueta será lida tanto no sorter para desvio na rampa quanto no processo de PTL para alocação no destino correto.
Após a impressão da etiqueta final, o volume estará pronto para seguir para os próximos processos, conforme a necessidade operacional. O operador deve garantir que todas as caixas plásticas sejam corretamente transferidas para as caixas finais e que as etiquetas sejam corretamente aplicadas e registradas.
Após esse processo, a caixa plástica poderá ser reutilizada para novos volumes, retornando ao ciclo de separação e alocação.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 9181de3c28eca668

Após a aferição de peso positiva na balança, todos os volumes coletados durante o picking fracionado ou picking cart serão direcionados obrigatoriamente para as estações de packing. Nesse processo, o operador transferirá os itens da caixa plástica para a caixa final.
O operador acessa a tela de packing no WCS (desktop), seleciona o posto de packing em que se encontra e realiza a leitura da caixa plástica que contém os itens. O WCS reconhece a caixa e inicia a impressão da etiqueta final do volume. O WCS só permitirá impressão de volumes aprovados na validação de peso ou conferidos manualmente nas estações de conferência.
A etiqueta final será impressa pelo WCS e utilizada para garantir a rastreabilidade do item durante o processo subsequente. Essa etiqueta será lida tanto no sorter para desvio na rampa quanto no processo de PTL para alocação no destino correto.
Após a impressão da etiqueta final, o volume estará pronto para seguir para os próximos processos, conforme a necessidade operacional. O operador deve garantir que todas as caixas plásticas sejam corretamente transferidas para as caixas finais e que as etiquetas sejam corretamente aplicadas e registradas.
Após esse processo, a caixa plástica poderá ser reutilizada para novos volumes, retornando ao ciclo de separação e alocação.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** f898881d406d05f7

Após a aferição de peso positiva na balança, todos os volumes coletados durante o picking fracionado ou picking cart serão direcionados obrigatoriamente para as estações de packing. Nesse processo, o operador transferirá os itens da caixa plástica para a caixa final.
O operador acessa a tela de packing no WCS (desktop), seleciona o posto de packing em que se encontra e realiza a leitura da caixa plástica que contém os itens. O WCS reconhece a caixa e inicia a impressão da etiqueta final do volume. O WCS só permitirá impressão de volumes aprovados na validação de peso ou conferidos manualmente nas estações de conferência.
A etiqueta final será impressa pelo WCS e utilizada para garantir a rastreabilidade do item durante o processo subsequente. Essa etiqueta será lida tanto no sorter para desvio na rampa quanto no processo de PTL para alocação no destino correto.
Após a impressão da etiqueta final, o volume estará pronto para seguir para os próximos processos, conforme a necessidade operacional. O operador deve garantir que todas as caixas plásticas sejam corretamente transferidas para as caixas finais e que as etiquetas sejam corretamente aplicadas e registradas.
Após esse processo, a caixa plástica poderá ser reutilizada para novos volumes, retornando ao ciclo de separação e alocação.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Corte de Coleta  
**Score:** — (semantico) | **ID:** 1c90850aaad067b4

O corte de coleta ocorre quando, durante a separação na zona de picking, a quantidade física disponível na posição é inferior à quantidade solicitada.
Ao identificar o corte, o WCS registra a ocorrência, porém não realiza envio imediato ao SAP. O saldo da posição permanece bloqueado para novas coletas e não deve ser considerado para novas demandas até a finalização do processo.
O processamento do corte deve aguardar a passagem de todas as caixas no sorter ou o encerramento da onda. Após esse momento, é enviado ao SAP um TORD já confirmado com a quantidade de saldo remanescente na posição. Esse saldo não deve considerar quantidades confirmadas após o corte nem saldos em trânsito.
Após o envio do TORD confirmado, o WCS realiza a atualização do estoque da posição e libera o endereço para utilização dos novos saldos, conforme a chegada de novos paletes.
Estrutura do IDOC de Corte de Separação
Velox  SAP
Utilização dos dados (Velox):

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Parâmetro de Picking Exceção  
**Score:** — (semantico) | **ID:** 00295d3a110b5e1c

O WCS disponibiliza um parâmetro específico para controle do Picking Exceção baseado nas características físicas dos produtos, categoria e lista de SKUs.
O sistema contará com uma tela de configuração onde poderão ser cadastrados os critérios de exceção, incluindo:
Altura (ex.: 5 a 60 cm)
Largura (ex.: 5 a 60 cm)
Comprimento (ex.: 5 a 60 cm)
Peso (ex.: 200 a 30.000 g)
Categoria de produto (se aplicável)
Lista de SKUs específicos
Esses parâmetros definem o perfil padrão de produtos que podem ser atendidos pelo fluxo regular de picking.
O WCS realizará a validação automática das informações dos itens e identificará os produtos que não se enquadram nos critérios configurados, considerando:
Dimensões fora do range permitido
Peso fora do limite configurado
Categoria classificada como exceção (se aplicável)
SKU incluído na lista de exceção
Os itens que atenderem a qualquer um desses critérios serão automaticamente direcionados para o processo de Picking por Exceção, garantindo:
Continuidade do fluxo principal sem impactos
Tratativa específica para produtos fora do padrão
Maior controle operacional e físico

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Repostaje  
**Score:** — (semantico) | **ID:** e9aa5db5df2f9f00

El sistema WCS proporcionará un botón para la Solicitud de Reposición. Al pulsarlo, el operador deberá indicar la ubicación de picking que requiere reposición. Tras la confirmación, Velox enviará una solicitud al WMS con los datos de la ubicación para que este pueda crear una tarea de reposición para la ubicación especificada.
Aviso: Velox no controla qué artículo está vinculado a cada ubicación; por lo tanto, solo indicaremos la ubicación que requiere reposición.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Área de Conferência, Packing e Sorter  
**Score:** — (semantico) | **ID:** ad9d4dd5e2955e2b

Localizada após o término do circuito de picking do Térreo.
Validação: Balança dinâmica em linha para checagem de peso.
Conferência de Exceções: Validação feita para tratativa interna na automação logo após a balança.
Conferência/Packing: 12 estações manuais para leitura item a item e fechamento de caixa.
Sorter de Expedição: Classificador final com 4 saídas (Uma rampa sendo específica para rejeito), agrupando volumes por Transportadora, a paletização ocorrerá somente por transportadora, podendo agrupar vários pedidos.
Fluxo de AMRs: Robôs móveis responsáveis pelo translado de:
Caixas plásticas vazias (Retorno do Packing -> Order Start).

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Especificações das Etiquetas  
**Score:** — (semantico) | **ID:** 64c09f194dea2461

Todas as etiquetas que passarão pelo sorter serão impressas pelo WCS ou WMS descrito no tópico abaixo de Matriz de Responsabilidades e em seus respectivos tópicos, essas etiquetas serão lidas pelo portal de sorter, sendo etiquetas burras das caixas plásticas, área de packing, área dedicada fullcase e picking fullcase costas e deverão seguir as especificações mínimas descritas abaixo:
1D CODE 128 com 0,38 de resolução e 21 mm de altura;
2D DATAMATRIX 1mm de resolução.
Preto e Branco
Qualidade ANSI A ou B
Obs: Foi acordado com o cliente que os layouts das etiquetas serão desenvolvidos em tempo de projeto pelo time Spark e serão disponibilizadas para nós cada uma que o WCS imprimirá.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Conferência e Packing  
**Score:** — (semantico) | **ID:** aae031d1385d6c68

Após a separação nas zonas de Picking, os volumes convergem para a linha principal. O objetivo desta etapa é garantir a acuracidade do pedido através de validação automática de peso, minimizando a necessidade de conferência manual humana.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Packing e Fechamento de Volume  
**Score:** — (semantico) | **ID:** f2e1fa5dee9c8514

Esta etapa ocorre após a validação física na estação manual (conferência) ou como um passo automático para volumes aprovados em linha.
Lacre: Fechamento da tampa ou aplicação de lacre de segurança.
Etiqueta: A etiqueta tem as informações do cliente (endereço, num pedido, transportadora, num volume e peso). Após o lacre da caixa essa etiqueta é colada na caixa. Essa etiqueta é solicitada pelo WCS e o layout será disponibilizado pela Spark.
Reindução: A caixa validada é reinserida na esteira principal. O WCS registra que a auditoria foi concluída com sucesso, permitindo que o volume siga para o Sorter (Expedição) sem ser desviado novamente.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** af817b5789c5e52f

Após a aprovação na balança ou conferência, o volume segue para a estação de packing.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Seladora Automática  
**Score:** — (semantico) | **ID:** c37e04a325c10b87

O projeto contará com uma seladora automática (Cetro, fornecida pelo cliente) acoplada à esteira de packing. A seladora realiza o fechamento e lacre da caixa de forma automatizada. Após o lacre, o volume é reinduzido na linha e segue para o sorter.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - GEMINI.docx`  
**Heading:** Pedidos Sem Confirmação de Picking - Pendente  
**Score:** — (semantico) | **ID:** 5c6ae890800a0728

Problema: Em cenários de contingência (BCP), onde o picking é realizado via coletor de RF diretamente no WMS, os pedidos permanecem no sistema da Invent. É necessário um método para realizar a retirada massiva dessas ordens do WCS para evitar processamento indevido.
Situação Atual:
A Invent possui uma tela para retirada manual de pedidos, mas o processo é feito "pedido a pedido", o que é inviável para grandes volumes.
Existe uma integração para remoção de um pedido via JSON, mas o SAP não possui hoje uma mensagem massiva para essa ação.
Ações:
[Ação > Falar com Dev/Cliente] Ação INVENT: Avaliar o esforço de modificar a aplicação para permitir a retirada massiva de ordens em casos de exceção (fraude, Picking BCP).
Ação IT (SAP):
Finalizar o enhancement da mensagem WMCATO (Remover Pedido PTL) para adequar ao JSON esperado pela Invent.
Continuar a avaliação do envio da mensagem WMTOCO como outbound para remover pedidos da Invent assim que o picking via RF for confirmado no SAP.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - GEMINI.docx`  
**Heading:** Múltiplas Confirmações de Picking Pollux - Pendente  
**Score:** — (semantico) | **ID:** 4daa5b25f0917ec5

Problema: O sistema da Invent não está preparado para tratar mensagens de confirmação de picking duplicadas ou repetidas da Pollux, o que pode causar travamentos ou inconsistências.
Solução:
Mesmo que o SAP seja o responsável por controlar o envio, a Invent desenvolverá um enhancement para ignorar mensagens "repetidas" que porventura cheguem.
Ações:
[Ação > Falar com Dev/Cliente] Ação INVENT: Avaliar e desenvolver o enhancement para que o WCS ignore mensagens de confirmação de picking da Pollux que já foram processadas.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - REV 0.docx`  
**Heading:** Múltiplas Confirmações de Picking Pollux  
**Score:** — (semantico) | **ID:** bbcc06baa83f3f0a

Mesmo que o SAP seja o responsável por controlar o envio, caso aconteça algum erro receberemos a mensagem da Pollux, porém eles não garantem que essa mensagem será enviada apenas uma vez. A Invent desenvolverá um enhancement para ignorar mensagens "repetidas" que porventura cheguem da Pollux
O sistema atual da Invent não está preparado para tratar mensagens de confirmação de picking duplicadas ou repetidas da Pollux, o que pode causar travamentos ou inconsistências.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Monitoramento de Leitura nas Bicas.docx`  
**Heading:** Novas funcionalidades  
**Score:** — (semantico) | **ID:** c4f549f833413fdd

Será implementada uma nova funcionalidade no sistema ST que permitirá a visualização consolidada do status de todas as bicas de expedição em tempo real. O objetivo é fornecer uma visão operacional clara e centralizada, permitindo a identificação imediata de possíveis gargalos, atrasos ou falhas no fluxo de volumes.
Essa funcionalidade trará maior controle operacional, agilidade na tomada de decisão e redução de riscos relacionados a falhas físicas ou sistêmicas no processo de expedição.

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Rev 5.docx`  
**Heading:** Inclusão de Número de Volume nas Etiquetas  
**Score:** — (semantico) | **ID:** 43e4d7fa34f92145

Contexto Anterior: As etiquetas de volume (Reimpressão, Fracionado e Fullcase) possuem um código de barras que identifica unicamente o volume, mas não apresentam uma informação de contagem sequencial legível para o operador.
As etiquetas finais, impressas tanto no Packing (para fracionados) quanto no Order Start (para Full Case), deverão incluir um novo campo de texto legível que indique a contagem de volumes do pedido. O formato a ser exibido será, por exemplo, "Volume: 1 de 5", "Caixa: 2/3", ou similar. Esta informação será gerada com base na cubagem realizada pelo WCS e tem como objetivo facilitar a conferência visual na área de expedição (PTM), garantindo que todos os volumes de um pedido estejam juntos.
Regra de Divisão de Volume (Funcionalidade "Pede Caixa"): O sistema de contagem de volumes deverá tratar dinamicamente as divisões de caixas que ocorrem durante a separação.
Exemplo do Fluxo:
O WCS calcula inicialmente um pedido com 20 volumes.
O operador está separando o volume 10/20, mas a caixa fica cheia.
O operador aciona a funcionalidade "Pede Caixa".
Ação do Sistema:
O WCS recalcula o número total de volumes do pedido, que agora passa a ser 21.
O volume atual que foi finalizado (o décimo) terá sua etiqueta impressa com o total atualizado, tornando-se a Caixa: 10/21.
O novo volume, criado para os itens restantes, será tratado como o último volume do pedido e receberá a etiqueta Caixa: 21/21.
Todos os outros volumes intermediários que ainda não foram impressos (os volumes originais de 11 a 20) também terão seu total atualizado (ex: 11/21, 12/21... 20/21).

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Rev 5.docx`  
**Heading:** Mudança nas Telas de Fullcase e Packing  
**Score:** — (semantico) | **ID:** 0f7491c6e7e31c8b

Contexto Operacional: O processo de Put to Monitor (PTM) é organizado por cores, onde cada posição de palete na rampa de expedição possui uma cor de identificação. No entanto, a operação tem registrado um alto índice de erros por mistura de pedidos, onde volumes de destinos diferentes são alocados incorretamente nos paletes.
Nova Funcionalidade: Para aumentar a produtividade, a assertividade e tornar o fluxo mais visual, o sistema WCS Velox deverá antecipar a identificação da cor de destino para as etapas de separação e packing. A tela do operador deverá mudar de cor dinamicamente para refletir a cor da rampa/posição PTL de destino do volume que está sendo processado.
Esta funcionalidade será aplicada em duas frentes:
Tela de Full Case (Order Start): No momento em que o operador iniciar a impressão das etiquetas de uma "pega" (pedido), a tela do Order Start deverá sinalizar, mudando sua cor de fundo para a cor correspondente ao PTL de destino daquele pedido.
Tela de Packing (Fracionado): Ao realizar a leitura da "etiqueta burra" de um volume na estação de packing, a tela do operador deverá sinalizar, mudando sua cor de fundo para a cor correspondente ao PTL de destino daquele volume.
Ponto de Atenção (Validação da Regra de Full Case): Foi confirmado em reunião que esta funcionalidade é viável para o Full Case, pois o sistema atual imprime as etiquetas "pega por pega" (pedido a pedido), sem misturar destinos diferentes no mesmo lote de impressão. Caso esta regra de negócio mude e o sistema passe a imprimir por item (misturando pedidos), esta funcionalidade de cor na tela de Full Case ficará inviabilizada.

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE REV.1 - ZENATUR.docx`  
**Heading:** Tela de gerar volumes – Flag Automação/Manual  
**Score:** — (semantico) | **ID:** 46872951c5971f1f

MFC deve estar preparado para receber um novo campo/flag de validação, “automação” que será verdadeiro ou falso.
Se verdadeiro (automação) – Segue o processo pela automação.
Se falso (manual) – Significa que o processo será manual para as tarefas de doca, buffer, picking cart e PBL.
Tarefas Doca: gerar da mesma forma que o processo de automação, com a correção dos volumes da doca, citado no início do documento.
Tarefas Buffer: gerar da mesma forma que o processo de automação, com a alteração da lógica de armazenagem, igual ao mezanino.
Tarefas Full Case (FC): alterar o destino de pedidos FULL_CASE que são destinados ao mezanino para posições Buffer, utilizando a lógica de utilização de posições Buffer.
Os volumes também passarão pelo Cross-Check, assim como ocorrerá com PBL e PC.
A integração Volume ocorrerá logo após a passagem pelo Cross-Check e não mais na armazenagem do mezanino, como é hoje. Essa alteração servirá tanto para o processo de automação quanto para o manual.
Tarefas Picking Cart (PC): Avaliar forma de direcionar tarefas Picking Cart para um destino Buffer no final da produção das caixas.
Atualmente o campo “destino” é preenchido com “PICKING_CART” e deverá ser substituído por uma posição Buffer.
Antes dos volumes serem alocados no buffer, todos devem ser passados pelo Cross-Check sorter.
A integração de alocação de volume, será enviada no Cross-Check automático ou no Cross-Check manual pela tela, caso o automático não aconteça.
Após Cross-Check, o volume seguira para o rejeito.
O processo de alocação da rampa de rejeito para as posições buffer será realizado pelo sistema Zenatur.
Tarefas PBL: utilizar como destino os PBLs manuais criados acima. Ir preenchendo as posições de forma sequencial, sem critérios de alocação.
Deve ser criado um campo na integração “MOVIMENTAÇÃO” com o destino dos volumes PBL, sendo essas posições de Buffer.
O campo “destino” atual deve permanecer o mesmo.
Na finalização, seguirá o mesmo processo de Cross-Check do picking cart manual.
Alocação em posições Buffer: Como na lógica do mezanino, o Buffer deve tentar alocar a SS na menor quantidade de posições possível. Quando a SS não couber em uma posição Buffer, direcionar o total do modal que exceder para uma posição livre (evitar a quebra de um modal em mais de uma posição, exceto que o modal não caiba na posição).
Alterações nas Integrações:
Integração Pedidos
Receber o flag Automação/Manual
Receber o número da onda ZT
Receber a quantidade de linhas
Receber a informação de lote e validade
Integração Movimentação (Retorno de onda)
Informar o flag Automação/Manual
Informar a posição de Destino para as tarefas do processo manual
Integração Tarefas finalizadas:
Prever a finalização das tarefas PC, quando o material fizer o processo de Cross-Check, tanto para PC quanto para PBL.

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.7 Packing  
**Score:** — (nome-topico) | **ID:** 39bd57301d48d7e4

No Packing serão embalados os pedidos Multi e Mono e etiquetados. Após isto, seguirá direto para o Sorter.

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.8 Entrada Rápida  
**Score:** — (semantico) | **ID:** a5bd4edba5351847

Impressão de etiqueta do tote para indução de itens para lojas separados fora dos locais de automação, a etiqueta deverá desviar o item no PTL correspondente ao box/filial recebido na integração sem passar pelo packing. Será inserido na curva que sobe para o Sorter.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.7 Packing  
**Score:** — (nome-topico) | **ID:** eac7c198b85f26e9

No Packing serão embalados os pedidos Multi e Mono e etiquetados. Após isto, seguirá direto para o Sorter.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.8 Entrada Rápida  
**Score:** — (semantico) | **ID:** 45204bb1cf2a3d06

Impressão de etiqueta do tote para indução de itens para lojas separados fora dos locais de automação, a etiqueta deverá desviar o item no PTL correspondente ao box/filial recebido na integração sem passar pelo packing. Será inserido na curva que sobe para o Sorter.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** CMC  
**Score:** — (semantico) | **ID:** 7de22ca2edc20fec

O Sistema WCS dará o destino de cada pedido para uma das 12 saídas conforme o mapa de expedição.
As caixas VariTote irão descer do Mezanino e entrar na CMC.
Iremos controlar apenas o que está entrando e se está saindo de maneira correta, etiquetar e pesar.
Após sair da CMC já etiquetada, deverá seguir para o Sorter.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** CMC  
**Score:** — (semantico) | **ID:** 7535bfb37f71a3ff

O Sistema WCS dará o destino de cada pedido para uma das 12 saídas conforme o mapa de expedição.
As caixas VariTote irão descer do Mezanino e entrar na CMC.
Iremos controlar apenas o que está entrando e se está saindo de maneira correta, etiquetar e pesar.
Após sair da CMC já etiquetada, deverá seguir para o Sorter.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** By-Pass Picking  
**Score:** — (semantico) | **ID:** 341d67857c70ad51

O By-Pass é um componente chave que permite o fluxo continuo de caixas ao redor das estaçoes de picking, sem interrupções e evitando fluxos desnecessários.
O By-Pass será responsavel por direcionar as caixas que não precisam passar pelas estações de picking para uma rota alternativa, permitindo que elas continuem seu trajeto pela esteira principal sem serem direcionadas as estações onde não necessitam picking, economizando assim tempo e recursos.
Em momentos em que a linha fica congestionada devido ao grande volume de caixas. O By-Pass ajudará a aliviar esse congestionamento, redirecionando as caixas que não são necessárias seguir adiante, para o outro lado da linha onde seguirão até o fim da esteira.
Em vez de processar todas as caixas, serão direcionadas para as estações 4, 5, 6, 7, 8, 9 e 10, apenas as caixas que solicitam picking de produtos dessas estaçoes, caso contrário serão direcionadas para a outra linha, como forma de economizar tempo.
Como o MFC realiza o picking nas estações, ao iniciar a caixa no order start, o mesmo já tem mapeado as estações que deverá acessar para realizar o picking, com isso ao passar pelas estações necessárias e toda a separaçao for concluida, ou caso não haja mais picking a ser realizado nas proximas estaçoes 4, 5, 6, 7, 8, 9 e 10, a caixa será desviada no ponto de decisão do by-pass, seguindo assim, para o restante do picking nas estações 11, 12 e 13 caso haja necessidade, chegando ao final da linha.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 97af7f2772d07557

Na estação de packing, operador recebe a caixa do picking Invent, realiza o fechamento da caixa e induz novamente na esteira, onde ela seguirá para o sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 479842ffc9d6cc71

Na estação de packing, operador recebe a caixa do picking realiza o fechamento da caixa e induz novamente na esteira superior, onde ela seguirá para o sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 1b15d45f313ad797

Na estação de packing, operador recebe a caixa do picking Invent, realiza o fechamento da caixa e induz novamente na esteira superior, onde ela seguirá para o sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** a39c8fc00bf8f644

Na estação de packing, operador recebe a caixa do picking Invent, realiza o fechamento da caixa e induz novamente na esteira, onde ela seguirá para o sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE(RASC) - FASE.1 VER.1.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** a3e02100f5ff3b57

Na estação de packing, operador recebe a caixa do picking realiza o fechamento da caixa e induz novamente na esteira superior, onde ela seguirá para o sorter.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Multi-Volumes  
**Score:** — (semantico) | **ID:** 6961185dc92d8e82

Quando pedido for “multivolumes” e for composto somente por produtos Venus as caixas serão enviadas da mesma forma que os pedidos mono porém, com mais de um volume.
Todas as caixas já estarão com as suas etiquetas finais coladas na caixa de expedição.
Quando o pedido for composto por G1 e G2 a expedição de multivolumes deverá ser realizada atraves da PTL e a utilização de Flow Racks ou PTW (Put to Wall), deverá ser avaliada no projeto PTL 2.0

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Multi-Volumes  
**Score:** — (semantico) | **ID:** 3ad1aed0810f37f4

Quando pedido for “multivolumes” e for composto somente por produtos Venus as caixas serão enviadas da mesma forma que os pedidos mono porém, com mais de um volume.
Todas as caixas já estarão com as suas etiquetas finais coladas na caixa de expedição.
Quando o pedido for composto por G1 e G2 a expedição de multivolumes deverá ser realizada atraves da PTL e a utilização de Flow Racks ou PTW (Put to Wall), deverá ser avaliada no projeto PTL 2.0

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Análise de Corte  
**Score:** — (semantico) | **ID:** c54a0ad41e812769

O setor de análise corte será determinante para definir se será aceito ou não o corte que ocorreu durante o Picking.
Teremos duas áreas separadas para esse setor: “Produtos conformes e Produtos inconformes”.
O operador deverá informar todas as caixas que serão analisadas. Velox terá um parâmetro máximo de caixas para realizar a análise por vez. Com a relação de todas as caixas, o Velox exibira uma lista com todos os endereços que ocorreram o ShortPicking.
Será mostrado uma lista com duas colunas: endereço e quantidade de unidades faltantes. O processo de análise de corte consiste na verificação visual do endereço de onde ocorreu o corte.
Uma vez que o endereço se encontra vazio o operador deve realizar a análise de saldo via WMS para solicitar o reabastecimento, caso não exista saldo do item disponível para reabastecimento o operador deve realizar a leitura do endereço e informar o corte de todas as unidades solicitadas para todas as caixas daquela leva através de um botão que será exibido no Velox. Velox deve mostrar um aviso pedindo confirmação do corte.
Com a confirmação do corte, a posição/item permanecerão bloqueados e só podem ser desbloqueados em caso de uma nova atualização no Picking map.
Caso exista saldo para reabastecimento total ou parcial, o operador deve realizar através do WMS o reabastecimento. Após a conclusão da tarefa de reabastecimento, o operador de análise de corte deve realizar a leitura do endereço e SKU, o Velox exibirá a lista com as informações de quantidade a ser separada.
O processo para a coleta desses itens será realizar a leitura do código de carrinho presente na lista exibida e digitar a quantidade que for coletada. Caso não for coletada a quantidade total esperada, as unidades faltantes serão consideradas corte. Velox deve mostrar um aviso pedindo confirmação do corte.
Com a coleta total do item, o sistema entende que pode voltar a separar na posição/item que estava bloqueado e realiza a liberação para a separação nas próximas levas.
O operador será obrigado a visitar todos os endereços da lista exibida pela ordem de separação. Caso contrário não conseguira seguir com a próxima etapa do processo.
Com todos os endereços visitados e realizados suas respectivas coletas, terá um botão de “finalizar análise de corte” onde o sistema irá informar se as caixas ou carrinhos devem ser induzidos diretamente na esteira (sem precisar passar pela área de Recebimento) ou caixas que devem ser direcionadas diretamente para conferência (carrinhos inconforme).

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Conferência / Packing  
**Score:** — (semantico) | **ID:** 82c2c835b007ad01

Ao finalizar a separação no último posto, o volume segue para a estação de conferência / packing onde será pesado e caso necessário conferido novamente.
Operador terá a possibilidade de realizar 2 (dois) tipos de conferência, sendo elas:

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 45e09f32ad95117d

Após a aferição de peso positiva na balança, todos os volumes coletados durante o picking fracionado ou picking cart serão direcionados obrigatoriamente para as estações de packing. Nesse processo, o operador transferirá os itens da caixa plástica para a caixa final.
O operador acessa a tela de packing no WCS (desktop), seleciona o posto de packing em que se encontra e realiza a leitura da caixa plástica que contém os itens. O WCS reconhece a caixa e inicia a impressão da etiqueta final do volume.
A etiqueta final será impressa pelo WCS e utilizada para garantir a rastreabilidade do item durante o processo subsequente. Essa etiqueta será lida tanto no sorter para desvio na rampa quanto no processo de PTL para alocação no destino correto.
Após a impressão da etiqueta final, o volume estará pronto para seguir para os próximos processos, conforme a necessidade operacional. O operador deve garantir que todas as caixas plásticas sejam corretamente transferidas para as caixas finais e que as etiquetas sejam corretamente aplicadas e registradas.
Após esse processo, a caixa plástica poderá ser reutilizada para novos volumes, retornando ao ciclo de separação e alocação.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Análise de Corte  
**Score:** — (semantico) | **ID:** 0ac7417582bb67e2

O setor de análise corte será determinante para definir se será aceito ou não o corte que ocorreu durante o Picking.
Teremos duas áreas separadas para esse setor: “Produtos conformes e Produtos inconformes”.
O operador deverá informar todas as caixas que serão analisadas. Velox terá um parâmetro máximo de caixas para realizar a análise por vez. Com a relação de todas as caixas, o Velox exibira uma lista com todos os endereços que ocorreram o ShortPicking.
Será mostrado uma lista com duas colunas: endereço e quantidade de unidades faltantes. O processo de análise de corte consiste na verificação visual do endereço de onde ocorreu o corte.
Uma vez que o endereço se encontra vazio o operador deve realizar a análise de saldo via WMS para solicitar o reabastecimento, caso não exista saldo do item disponível para reabastecimento o operador deve realizar a leitura do endereço e informar o corte de todas as unidades solicitadas para todas as caixas daquela leva através de um botão que será exibido no Velox. Velox deve mostrar um aviso pedindo confirmação do corte.
Com a confirmação do corte, a posição/item permanecerão bloqueados e só podem ser desbloqueados em caso de uma nova atualização no Picking map.
Caso exista saldo para reabastecimento total ou parcial, o operador deve realizar através do WMS o reabastecimento. Após a conclusão da tarefa de reabastecimento, o operador de análise de corte deve realizar a leitura do endereço e SKU, o Velox exibirá a lista com as informações de quantidade a ser separada.
O processo para a coleta desses itens será realizar a leitura do código de carrinho presente na lista exibida e digitar a quantidade que for coletada. Caso não for coletada a quantidade total esperada, as unidades faltantes serão consideradas corte. Velox deve mostrar um aviso pedindo confirmação do corte.
Com a coleta total do item, o sistema entende que pode voltar a separar na posição/item que estava bloqueado e realiza a liberação para a separação nas próximas levas.
O operador será obrigado a visitar todos os endereços da lista exibida pela ordem de separação. Caso contrário não conseguira seguir com a próxima etapa do processo.
Com todos os endereços visitados e realizados suas respectivas coletas, terá um botão de “finalizar análise de corte” onde o sistema irá informar se as caixas ou carrinhos devem ser induzidos diretamente na esteira (sem precisar passar pela área de Recebimento) ou caixas que devem ser direcionadas diretamente para conferência (carrinhos inconforme).

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Análise de Corte  
**Score:** — (semantico) | **ID:** 635e735b7df4fc13

O setor de análise corte será determinante para definir se será aceito ou não o corte que ocorreu durante o Picking.
Teremos duas áreas separadas para esse setor: “Produtos conformes e Produtos inconformes”.
O operador deverá informar todas as caixas que serão analisadas. O WCS terá um parâmetro máximo de caixas para realizar a análise por vez. Com a relação de todas as caixas, o WCS exibira uma lista com todos os endereços que ocorreram o ShortPicking.
Será mostrado uma lista com duas colunas: endereço e quantidade de unidades faltantes. O processo de análise de corte consiste na verificação visual do endereço de onde ocorreu o corte.
Uma vez que o endereço se encontra vazio o operador deve realizar a análise de saldo via WMS para solicitar o reabastecimento, caso não exista saldo do item disponível para reabastecimento o operador deve realizar a leitura do endereço e informar o corte de todas as unidades solicitadas para todas as caixas daquela leva através de um botão que será exibido no WCS. O WCS deve mostrar um aviso pedindo confirmação do corte.
Com a confirmação do corte, a posição/item permanecerá bloqueados e só podem ser desbloqueados em caso de uma nova atualização no Picking map.
Caso exista saldo para reabastecimento total ou parcial, o operador deve realizar através do WMS o reabastecimento. Após a conclusão da tarefa de reabastecimento, o operador de análise de corte deve realizar a leitura do endereço e SKU, o WCS exibirá a lista com as informações de quantidade a ser separada.
O processo para a coleta desses itens será realizar a leitura do código de carrinho presente na lista exibida e digitar a quantidade que for coletada. Caso não for coletada a quantidade total esperada, as unidades faltantes serão consideradas corte. O WCS deve mostrar um aviso pedindo confirmação do corte.
Com a coleta total do item, o sistema entende que pode voltar a separar na posição/item que estava bloqueado e realiza a liberação para a separação nas próximas levas.
O operador será obrigado a visitar todos os endereços da lista exibida pela ordem de separação. Caso contrário não conseguira seguir com a próxima etapa do processo.
Com todos os endereços visitados e realizados suas respectivas coletas, terá um botão de “finalizar análise de corte” onde o sistema irá informar se as caixas ou carrinhos devem ser induzidos diretamente na esteira (sem precisar passar pela área de Recebimento) ou caixas que devem ser direcionadas diretamente para conferência (carrinhos inconforme).

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Abertura e fechamento de gaiola  
**Score:** — (semantico) | **ID:** d90c4566067ca13b

A Gaiola somente poderá ser fechada quando o botão do sensor de gaiola cheia for acionado e apertado pelo operador.
Com o botão acionado pelo sensor, operador deve apertar o botão e em seguida realizar a leitura da etiqueta da gaiola para concluir o fechamento, com isso é enviada a integração de "Ship" para o WMS com as informações da gaiola fechada e os volumes que foram alocados.
Para abrir, operador deve realizar a leitura de uma nova etiqueta de gaiola.
Todas as gaiolas abertas deverão ser fechadas para a abertura de uma nova gaiola na rampa, independentemente da quantidade de volume alocadas dentro da gaiola, deve ser fechada.
Com o retorno do WMS, o sistema Velox terá o feedback do status de fechamento dessa gaiola, se foi fechada com sucesso pelo WMS ou se houve algum erro no WMS, e com isso o sistema Velox atualiza o status da gaiola com o retorno recebido do WMS.
Por exemplo: Se ao fechar a gaiola, o WMS retorna um que a gaiola foi fechada com sucesso. O status da gaiola no sistema Velox, ficará como "Sucesso" e mostrará na tela de gerenciamento de gaiola, que a gaiola foi fechada com sucesso.
Caso ao fechar a gaiola, o WMS retorne algum tipo de mensagem de erro. O status da gaiola no sistema Velox, ficará como "Pendente", e mostrará o erro informado pelo WMS.
Gaiolas que estiverem com status "Pendente", podem estar abertas em atividade no momento, e devido o WMS ter rejeitado o fechamento da gaiola por algum motivo.
Essas gaiolas com status pendente, operador poderá realizar o fechamento via sistema Velox.
Ao realizar o fechamento manual pelo sistema Velox, o status no sistema Velox é atualizado para "Sucesso" nesse caso não será enviado novamente a integração ao WMS.

---
**Origem:** [I23.1602] 2023 — `I23.1602 - DOCUMENTO DE ESPECIFICAÇÃO REV1- SEPARAÇÕES ET.VELOX - PETER.docx`  
**Heading:** Packing ET  
**Score:** — (semantico) | **ID:** 9d48b5b367ad3c68

Próximo à estação de Order start da automação Invent, terá uma estação de packing ET para realizar a troca da caixa plástica para a caixa de expedição dos volumes que forem concluídos o processo de conferência ou que não necessitaram de validação na estação de conferência ET, deve realizar a troca da caixa plástica para a caixa de expedição e fixar a etiqueta impressa pelo Velox na caixa de expedição e então o processo de packing é finalizado.
Operador induz a caixa na esteira, para seguir para o sorter.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Conferência / Packing  
**Score:** — (semantico) | **ID:** 1451a3d9f37a42ff

Ao finalizar a separação no último posto, o volume segue para a estação de conferência / packing onde será pesado e caso necessário conferido novamente.
Operador terá a possibilidade de realizar 2 (dois) tipos de conferência, sendo elas:

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS 1.docx`  
**Heading:** Packing / Conferência – Octopus SC  
**Score:** — (semantico) | **ID:** 1e7ebb2b6d67d16e

Para o projeto do CD de Santa Catarina, não teremos estação de Packing / Conferência.

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS 1.docx`  
**Heading:** Packing / Conferência – Octopus MS  
**Score:** — (semantico) | **ID:** 5a80ec518cbe346f

Teremos 8 (oito) postos de Packing / Conferência, onde o operador realize a conferência, fechamento de caixas e se necessário, a impressão de etiquetas. Com isso, serão necessários os equipamentos listados abaixo em cada posto de Packing/Conferência.
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (conexão USB)
01 (um) Impressora de etiqueta
Abaixo segue a configuração mínima para o desktop para a estação de rejeito:
Equipamentos citados acima, responsabilidade cliente.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Pesagem do volume  
**Score:** — (semantico) | **ID:** 8bb900d371febc24

No portal de leitura, ao ser identificado pelo leitor, dimensionado, a balança fará a aferição de peso do volume, obtendo assim as informações de peso.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 80a1e3e1cd105a10

O processo de packing, será feito na estação de packing no final da esteira de separação, onde o operador fará o fechamento da caixa de papelão, realiza o fechamento da caixa e realiza a a indução da caixa na linha para seguir para o sorter.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 88a6375b0038a619

O processo de packing, será feito na estação de conferência, onde o mesmo operador que realizou a conferência, realiza a troca da caixa de separação (plástica) para a caixa de expedição (papelão) realiza o fechamento da caixa, fixa a etiqueta e insere na esteira, seguindo para o sorter.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Packing (embalagem) / Pré Expedição  
**Score:** — (semantico) | **ID:** fd7ebd06d981b6bb

Operador ao receber essa caixa, realiza o processo de Packing, após a finalização do processo o operador deposita no pallet correspondente a rua.
Caso seja necessária essa transferência/substituição de caixa ou fardo, será necessário a reimpressão da etiqueta.
Teremos 12 estações de Packing sendo 3 por saída.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 42a869e094ab9df1

Área de Packing não terá intervenção sistêmica por parte do Velox. Este setor será responsável apenas por realizar o fechamento das caixas recebidas da Linha de Picking.
Conferência será realizada durante a coleta de cada posto.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 60c95d64fd8e9941

Área de Packing não terá intervenção sistêmica por parte do Velox. Este setor será responsável apenas por realizar o fechamento das caixas recebidas da Linha de Picking.
Conferência será realizada durante a coleta de cada posto.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 5b6af90975506c2c

Área de packing será utilizada para fechamento e etiquetagem das caixas que foram separadas na linha de fracionados e Picking cart. Não será realizado conferência nesta área.
Operador terá acesso a tela de “packing” no sistema Velox, onde deve ser lido a etiqueta “burra” vinculada a caixa e automaticamente será enviado a etiqueta final mencionada no item "Etiqueta Fracionada".
Caso não haver espaço para a listagem dos itens no formato da etiqueta padrão, o sistema imprime uma etiqueta complementar com os itens faltantes.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 1b876879af9bbb1e

O processo de packing, será feito na estação de packing no final da esteira de separação, onde o operador fará a troca de caixa plástica para a caixa de papelão, realiza o fechamento da caixa, realiza a impressão da etiqueta UC gerada pelo WMS e fixa a etiqueta na caixa.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Tela de corte em massa  
**Score:** — (semantico) | **ID:** 4bc07ebe4e60def1

O WCS disponibilizará uma tela onde será possível realizar corte em massa selecionando o SKU, nessa tela será exibido o código do produto (SKU) e quantidade pendente de picking, o operador poderá selecionar o SKU que deseja cortar, após a confirmação, os volumes que possuem coleta desse SKU em questão com o status pendente já sairão cortadas do order start.
OBS: só irá funcionar para volumes cujo SKU em questão ainda não foi coletado ou finalizado. Caso for integrado mais romaneios com o mesmo SKU o WCS entenderá que esse sku está disponível para esses novos volumes, caso não esteja será necessário realizar o processo de corte em massa novamente.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** 4.1.4.	Solicitação Conferência  
**Score:** — (semantico) | **ID:** 4749d43dafee74c5

Quando o volume chegar ao último posto e for direcionado para o ponto de decisão entre B2C, B2B; VAS / Hospital, o sistema WCS deve realizar uma consulta do volume para que o WMS determine se a caixa deve ser desviada para conferência (HOSPITAL) ou seguir direto para packing B2B ou desviar para B2C mono e multi (Put to Wall).
Quando o volume estiver pronto para prosseguir, ele será reprocessado na esteira, passando novamente por uma consulta ao WMS para garantir que as etapas sejam seguidas corretamente.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Expedição de volumes B2B  
**Score:** — (semantico) | **ID:** 81bc448c27a3dccc

Após separação de todos os itens as caixas seguem para as estações de packing.
Após essa etapa WCS realiza somente o desvio das caixas para as três (3) esteiras de packing, faz o balanceamento única e exclusivamente para distribuir de forma equilibrada o volume de caixas entre as três esteiras, evitando gargalos ou sobrecarga em qualquer uma delas.
Para o WCS, o processo será encerrado após realizar o desvio das caixas nas esteiras de packing.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Chegada a um ponto de entrega  
**Score:** — (semantico) | **ID:** 3e835e36aabf7d7c

Esta ação é disparada pelo transportador quando a carga chega ao ponto de entrega da linha. Nesta ação, a localização do pallet está inicialmente definida como “Área de picking”. O WCS irá registrar a saída da carga do transportador em seu log de transações, e irá alterar o status da carga no sistema.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Saida / Fila de expedição  
**Score:** — (semantico) | **ID:** 7a85e86c063bf7d3

Tela mostra detalhes da fila de expedição.
Adicionar na tela existente a funcionalidade:
Para deletar as missões que não foram executadas em um período de tempo por exemplo 24 horas;
Possibilidade de filtrar por número de transporte.
Adicionar na tela existente as informações:
Coluna de informação de “transporte”.
Informações existentes:
- Código ordem;
- Produto;
- Código pallet;
- Quantidade solicitada;
- Data produção;
- Lote e múltiplos lotes;
- Centro;
- Sistema de depósito;
- Depósito;
- Status;
- Data de processamento;
- Data de execução.
Funcionalidades:
- Filtros;
- Exportar Excel.
Tela de referência:

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Chegada a um ponto de entrega  
**Score:** — (semantico) | **ID:** 0605f8bac8deed8d

Esta ação é disparada pelo transportador quando a carga chega ao ponto de entrega da linha. Nesta ação, a localização do pallet está inicialmente definida como “Área de picking”. O WCS irá registrar a saída da carga do transportador em seu log de transações, e irá alterar o status da carga no sistema.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a um ponto de entrega  
**Score:** — (semantico) | **ID:** 09ea9934594416d8

Esta ação é disparada pelo transportador quando a carga chega ao ponto de entrega da linha. Nesta ação, a localização do pallet está inicialmente definida como “Área de picking”. O WCS irá registrar a saída da carga do transportador em seu log de transações, e irá alterar o status da carga no sistema.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a um ponto de entrega  
**Score:** — (semantico) | **ID:** d4f0c229f3b7ee6b

Esta ação é disparada pelo transportador quando a carga chega ao ponto de entrega da linha. Nesta ação, a localização do pallet está inicialmente definida como “Área de picking”. O WCS irá registrar a saída da carga do transportador em seu log de transações, e irá alterar o status da carga no sistema.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Chegada a um ponto de entrega  
**Score:** — (semantico) | **ID:** 5f0ebfc2cb6d5eba

Esta ação é disparada pelo transportador quando a carga chega ao ponto de entrega da linha. Nesta ação, a localização do pallet está inicialmente definida como “Área de picking”. O WCS irá registrar a saída da carga do transportador em seu log de transações, e irá alterar o status da carga no sistema.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 085145bea585709a

Após a aferição de peso positiva na balança, todos os volumes coletados durante o picking fracionado ou picking cart serão direcionados obrigatoriamente para as estações de packing. Nesse processo, o operador transferirá os itens da caixa plástica para a caixa final.
O operador acessa a tela de packing no WCS, seleciona o posto de packing em que se encontra e realiza a leitura da caixa plástica que contém os itens. O WCS reconhece a caixa e inicia a impressão da etiqueta final do volume.
A etiqueta final será impressa pelo WCS e utilizada para garantir a rastreabilidade do volume durante o processo subsequente. Essa etiqueta será lida tanto no sorter para desvio na rampa quanto no processo de PTL para alocação no destino correto.
Após a impressão da etiqueta final, o volume estará pronto para seguir para os próximos processos, conforme a necessidade operacional. O operador deve garantir que todas as caixas plásticas sejam corretamente transferidas para as caixas finais e que as etiquetas sejam corretamente aplicadas e registradas.
Após esse processo, a caixa plástica poderá ser reutilizada para novos volumes, retornando ao ciclo de separação e alocação.
