# sorter-inducao.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Operação Grandes volumes  
**Score:** — (semantico) | **ID:** 7173f334f87287ce

Na operação de separação para grandes volumes, aplica-se uma lógica similar à do Full Case, com a diferença de que os produtos envolvidos possuem dimensões ou características que os impedem de passar pelo sorter. Nesse processo, a etiqueta do pedido é impressa no Order Start do FlowRack específico para esse tipo de item. O operador acessa uma tela dedicada no sistema, via coletor de dados, e realiza a leitura da etiqueta. Após a bipagem, o sistema apresenta as informações necessárias para a coleta, como endereço de picking fundo (comum), produto, lote e quantidade a ser coletada — geralmente em unidades fechadas. O operador então se desloca até o endereço indicado, realiza a coleta do item e confirma a ação lendo o endereço de origem e colanto a etiqueta no volume final. Por fim, o produto é transportado diretamente para a área de conferência, seguindo o mesmo princípio da operação Full Case, ou seja, sem necessidade de passagem por sorter ou armazenagem intermediária. Esse fluxo garante o correto manuseio de itens com grandes dimensões, preservando a rastreabilidade e a eficiência operacional.

---
**Origem:** [I24.117] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Triagem de Volumes  
**Score:** — (semantico) | **ID:** 5e5447458e1d5a72

Conforme mencionado no item Sorter, o volume pode ser induzido diversas vezes por diversos cenários atípicos da operação Swift.
Sendo assim, o WCS deve apresentar uma tela de Triagem da caixa que deve ser filtrada pelo RG da caixa e exibir ao usuário um diagnóstico daquele volume. Será mostrado quando foi integrado, RG do volume, quando foi passado pela balança, peso e quando foi efetuado o desvio. Os pontos de decisão precisam exibir data e hora da passagem.
Caso esse volume passe 3 vezes pelo sorter deve ser apresentado o registro dessa caixa 3 vezes e a data e hora de cada passagem nos pontos de decisão.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Especificação de volumes induzidos no sorter  
**Score:** — (nome-topico) | **ID:** 740ba3908d75089a

Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema WCS, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras:
Conforme a imagem acima, o código em destaque no quadro vermelho deve estar integrado no sistema WCS.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** fb0716de8869ba08

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executará as rotinas de separação de volumes, incluindo Picking Fracionado, Picking Cart,  Sorter e PTL (Put-To-Light) nas posições de saída do sorter, tendo como papel fundamental a interface entre os sistemas WMS (Kaizen) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 292ece197c840be7

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executará as rotinas de separação de volumes, incluindo Picking Fracionado, Picking Full Case, Picking Cart, Packing, Sorter e PTL (Put-To-Light) nas posições de saída do sorter, tendo como papel fundamental a interface entre os sistemas WMS  com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** d8495df8f14e0b6d

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executará as rotinas de separação de volumes, incluindo Picking Fracionado, Picking Full Case, Picking Cart, Packing, Sorter e PTL (Put-To-Light) nas posições de saída do sorter, tendo como papel fundamental a interface entre os sistemas WMS  com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 27482319c4b4d79b

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executará as rotinas de separação de volumes, incluindo Picking Fracionado, Picking Full Case, Picking Cart, Packing, Sorter e PTL (Put-To-Light) nas posições de saída do sorter, tendo como papel fundamental a interface entre os sistemas WMS com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Área de Stage para indução no Sorter  
**Score:** — (nome-topico) | **ID:** a72f8ffabf2c37cb

A área de Stage é dividida em posições físicas (endereços) para garantir a rastreabilidade e o controle da localização do pallet, seja um pallet fechado induzido no sorter ou caixas Full Case coletadas no fracionado, o operador deve depositar os volumes na área de Stage. O WCS exige que o operador leia ou insira o endereço da posição no coletor para garantir a correta localização do volume. O sistema exibirá uma mensagem informando: 'Direcionar volumes para a área de Stage, próxima à indução, se o pallet estiver disponível.
Caixas Full Case: As caixas Full Case estarão devidamente etiquetadas, facilitando a rastreabilidade e controle durante a indução.
Pallets Sorter:  O WCS gerencia o método de separação, que é ativado quando a quantidade total solicitada de um mesmo produto, em uma única onda de separação, atingir ou superar o volume equivalente a um pallet fechado
Definição da Área de Stage: A área de Stage será definida pelo cliente, de acordo com suas necessidades operacionais.
O WCS registra o endereçamento sistêmico da tarefa no stage, garantindo rastreabilidade dos volumes por posição. Entretanto, não controla automaticamente a ocupação ou quantidade de pallets disponíveis no stage, sendo este gerenciamento realizado operacionalmente pelos operadores.
Área de Stage cheia: Quando a área do Stage estiver cheia será necessária uma tratativa operacional onde o operador deve confirmar a alocação do pallet no Stage e segregar o mesmo próximo ao stage informado.
Controle de Ocupação do Stage: O WCS realiza apenas o registro sistêmico do endereço informado no coletor para rastreabilidade, não havendo controle automático de ocupação ou capacidade da área de stage. O gerenciamento da ocupação física do stage continuará sendo tratado operacionalmente pelos operadores.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Indução no Sorter  
**Score:** — (nome-topico) | **ID:** ebab5fd8d0c2e4ee

A indução ocorre nas rampas esquerda e direita, com capacidade para 6.000 volumes/hora.
O portal de leitura três faces (superior e laterais) realiza a captura do EAN ou DUN-14.
O WCS valida os dados e aciona o CLP (PLC), conforme o mapa do sorter ativo.
Contingência com IA e Etiquetas IVT+DUN:
Volumes com falha recorrente de leitura recebem etiqueta IVT+DUN impressa pelo operador na área de rejeito, garantindo correta identificação.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Rejeitos  
**Score:** — (semantico) | **ID:** a349a04b0ee5eb3d

Durante o processo de sorter, nem todos os volumes conseguem ser direcionados para uma rampa de destino. Existem diversas situações operacionais, sistêmicas ou físicas que impedem o desvio correto de um volume. Para esses casos, o sorter possui rampas de rejeito dedicadas, parametrizadas por meio da tela de configuração, que recebem todos os volumes que não podem seguir o fluxo normal.
O rejeito não é um erro que encerra o ciclo do volume. É uma etapa de tratamento: o volume é separado do fluxo principal, analisado por um operador na estação de rejeito do WCS, e pode ser reprocessado (reimprimir etiqueta, reinduzir na esteira) ou definitivamente descartado do processo daquela onda.
O WCS é responsável por decidir quando um volume deve ser rejeitado, por comandar o desvio para a rampa de rejeito e por disponibilizar as ferramentas para que a operação trate esses volumes.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Especificação de Volumes Induzidos no Sorter  
**Score:** — (nome-topico) | **ID:** 732f77a31003c161

Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Coleta de Múltiplos Volumes na Mesma Posição  
**Score:** — (semantico) | **ID:** c85b08ac5a9cb4f2

Nos casos em que um mesmo item esteja alocado para múltiplos volumes em uma mesma localização de picking, o sistema indicará os diferentes volumes e as posições correspondentes no Picking Cart.
Nessa situação, o operador deverá, antes de alocar o item coletado, escanear o código da etiqueta correspondente ao volume que está sendo separado. Essa ação garante que a destinação correta do item seja feita.

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Especificação de Volumes Induzidos no Sorter  
**Score:** — (nome-topico) | **ID:** 5a4e14de85a868aa

Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Picking Cart.docx`  
**Heading:** Coleta de Múltiplos Volumes na Mesma Posição  
**Score:** — (semantico) | **ID:** 6ae857c398a30336

Nos casos em que um mesmo item esteja alocado para múltiplos volumes em uma mesma localização de picking, o sistema indicará os diferentes volumes e as posições correspondentes no Picking Cart.
Nessa situação, o operador deverá, antes de alocar o item coletado, escanear o código da etiqueta correspondente ao volume que está sendo separado. Essa ação garante que a destinação correta do item seja feita.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Etiquetagem  
**Score:** — (semantico) | **ID:** 542ae0a4425b4d68

Para que o modo CrossCheck opere corretamente, todas as caixas envolvidas devem ser etiquetadas na face superior, de modo a garantir leitura pela câmera de TOPO.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Painel de Chutes  
**Score:** — (semantico) | **ID:** 53558d6bbde62682

O painel exibirá uma representação visual de cada um dos 20 chutes de produção (Chutes 2 a 20). Cada chute apresentará:
Número grande central: quantidade total de volumes pendentes de alocação naquele chute, independentemente de matriz.
Números coloridos abaixo: quantidade de volumes pendentes segmentada por matriz de fragilidade. A soma deve ser igual ao número central. Cores: Matriz 1 = Vermelho | Matriz 2 = Laranja | Matriz 3 = Amarelo | Matriz 4 = Verde | Matriz 5 = Azul | Matriz 6 = Branco.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Relatório de Saturação das Rampas  
**Score:** — (semantico) | **ID:** 8352ce131e57b3cb

Objetivo: Disponibilizar a previsão de volumes que ainda serão direcionados para cada rampa de expedição, considerando os volumes já processados no sorter e os volumes pendentes de processamento.
Com essas informações, a operação poderá identificar antecipadamente quais rampas receberão maior volume de caixas e ajustar a alocação de recursos para evitar congestionamentos ou ociosidade.
Estrutura do relatório:
Definição dos Campos:
Rampa/Chute:
Identificação da rampa/chute ou posição de expedição associada ao destino do sorter.
Deve ser decrementado a cada volume alocado, dentro do período especificado durante a fase de pesquisa.
Volumes previstos:
Quantidade prevista de alocação por rampa, dentro do período pesquisado.
Volumes Alocados:
Quantidade de volumes que já foram alocados.
Volumes pendentes:
Quantidade de volumes que ainda não foram alocados, mas que já possuem etiquetas impressas.
Esses volumes podem estar em:
Aguardando separação
Aguardando indução
Aguardando alocação
Volumes aguardando impressão:
Quantidade de volumes pendentes de impressão de etiquetas.
Saturação:
Quantidade de vezes que houve recirculação da rampa devido a rampa cheia.
% Conclusão:
% de conclusão da rampa em relação a meta estipulada para o dia.
Previsto por Matriz:
Quantidade total prevista por matriz de fragilidade criada.
Deve ser a coluna Volumes previstos subdivididas por cada matriz de fragilidade.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Objetivo do Controle  
**Score:** — (semantico) | **ID:** e60475ca2dbd2f9e

Essa alteração no processo de Order Start garante:
Distribuição balanceada de volumes entre as rampas do sorter
Eliminação de gargalos por acúmulo de volumes em uma única rampa
Melhor aproveitamento simultâneo de todas as rampas de expedição
Compatibilidade com a Matriz de Fragilidade e regras de Order Start já vigentes
Maior fluidez operacional e produtividade na expedição

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Campos da Tela  
**Score:** — (semantico) | **ID:** b3dfe625b7067154

A interface deve permitir a inclusão, edição e exclusão de registros contendo os seguintes campos obrigatórios:
Descrição da Faixa: Nome para identificação visual (Ex: "Matriz 1", "Matriz 2", "Matriz 3", “Matriz 4”).
Peso Inicial (kg): Valor numérico com 3 casas decimais. Define o limite inferior do range (Inclusivo / >=).
Peso Final (kg): Valor numérico com 3 casas decimais. Define o limite superior do range (Exclusivo / <).
Prioridade de Empilhamento: Campo não editável, apenas para uma melhor visualização da ordem. A ordem de prioridade será dos itens mais pesados (Matriz 1)   organizados para ficarem em baixo e os mais leves (Matriz 4) em cima dos demais, seguindo um padrão imutável de “Matriz 1 -> Matriz 2 -> Matriz 3 -> Matriz 4” (podendo haver a adição de mais “ranges de peso”) como descrito na tabela do próximo tópico.
Obs: O sistema deve recalcular/reconsiderar automaticamente as prioridades sempre que houver edição, inclusão ou exclusão de “ranges de peso”.

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - RAMPA FULLCASE REV 1.docx`  
**Heading:** Identificação via Software  
**Score:** — (semantico) | **ID:** 7993ec2372dedaca

Para atender à necessidade operacional sem a inclusão de hardware de visão (sensores), a identificação será realizada via dados:
A. Identificação de Volumes Arqueáveis: O sistema considerará como ARQUEÁVEIS todos os volumes que possuírem a característica de Caixa Plástica Interna (Volumes de fracionado gerados no processo de Picking da Invent).
Critério WCS: Volumes cujo tipo_volume identificado na origem seja fracionado.
Ação: Estes volumes seguirão o fluxo normal de sortimento, passando pela arqueadora e sendo desviados nas Rampas 02 ou 03, conforme sua rota.
B. Identificação de Volumes Não Arqueáveis: O sistema considerará como NÃO ARQUEÁVEIS todos os volumes que não suportam pressão mecânica, tais como Fullcases (Caixas de papelão fechadas), Fraldas e BINs.
Critério WCS:
Volumes cujo tipo_volume seja identificado como fullcase na integração.
Identificação via cadastro de SKU (caso necessário segregar tipos específicos de Fullcase).
Ação: Ao ler um volume com estas características no Scanner do Sorter, o WCS forçará o desvio para a Rampa 01, independentemente da rota final do pedido, retirando-o da linha antes da arqueadora.

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - TRANSBORDO LOTEVALIDADE.docx`  
**Heading:** Identificação via Software  
**Score:** — (semantico) | **ID:** 0c9a0003796bec80

Para atender à necessidade operacional sem a inclusão de hardware de visão (sensores), a identificação será realizada via dados:
A. Identificação de Volumes Arqueáveis: O sistema considerará como ARQUEÁVEIS todos os volumes que possuírem a característica de Caixa Plástica Interna (Volumes de fracionado gerados no processo de Picking da Invent).
Critério WCS: Volumes cujo tipo_volume identificado na origem seja fracionado.
Ação: Estes volumes seguirão o fluxo normal de sortimento, passando pela arqueadora e sendo desviados nas Rampas 02 ou 03, conforme sua rota.
B. Identificação de Volumes Não Arqueáveis: O sistema considerará como NÃO ARQUEÁVEIS todos os volumes que não suportam pressão mecânica, tais como Fullcases (Caixas de papelão fechadas), Fraldas e BINs.
Critério WCS:
Volumes cujo tipo_volume seja identificado como fullcase na integração.
Identificação via cadastro de SKU (caso necessário segregar tipos específicos de Fullcase).
Ação: Ao ler um volume com estas características no Scanner do Sorter, o WCS forçará o desvio para a Rampa 01, independentemente da rota final do pedido, retirando-o da linha antes da arqueadora.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Dashboard Conferência de Pallets - Rev.docx`  
**Heading:** Contexto  
**Score:** — (semantico) | **ID:** ce8d85baa0bf7ea5

Na operação atual do Sorter, cada uma das 40 bicas possui um operador dedicado responsável pela alocação de volumes. O processo já prevê a bipagem individual de cada volume antes da alocação no pallet, por meio de etiquetas físicas na bica (abertura de pallet, fechamento, entre outras).
O problema identificado é que erros manuais ocorrem — o operador pode não bipar um item, cometer erro de leitura no scanner ou alocar o volume sem confirmação de bipagem. Sem controle centralizado, esses volumes ficam sem rastreio e pallets podem ser fechados e liberados para embarque com inconsistências.
A funcionalidade Conferência de Pallets resolve essa lacuna por meio de um mecanismo de timer baseado no ACKN de desvio do Sorter: assim que um volume é desviado para uma bica, o WCS inicia uma contagem regressiva parametrizável. Se o volume não for bipado dentro desse tempo, ele passa a ser monitorado ativamente na tela do conferente. O gatilho é o tempo desde o desvio — não o fechamento do pallet.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Monitoramento de Leitura nas Bicas.docx`  
**Heading:** Consulta de Volumes Direcionados Ainda Não Lidos  
**Score:** — (semantico) | **ID:** 9845448aaad235e4

Será disponibilizada ao operador a possibilidade de consultar, para uma bica específica, todos os volumes que foram direcionados pelo sorter (desviados na rampa de destino), mas que ainda não tiveram a etiqueta lida no ponto de coleta.
Essa funcionalidade permitirá ao operador verificar quais volumes ainda estão pendentes de leitura naquela bica.
O operador deverá selecionar uma bica específica.
O sistema deverá listar todos os volumes:
Que já tenham registro de saída na rampa para aquela bica;
Que ainda não possuam registro de leitura da etiqueta.
Para cada volume listado, deverá ser possível visualizar:
Identificação do volume;
Data e hora da saída na rampa;
Tempo decorrido desde o direcionamento.
A listagem deverá considerar exclusivamente volumes ainda pendentes de leitura na bica selecionada.
Assim que a leitura for realizada, o volume deverá deixar de constar na lista de pendentes.

---
**Origem:** [I17.112] 2021 — `I17.112 - ESPECIFICACAO DE SOFTWARE - PROJETO  DIAMANTE- Adicional PTL Larrus rev3.docx`  
**Heading:** Operação Futura  
**Score:** — (semantico) | **ID:** 6f26c27580383c94

As funcionalidades compõem a leitura do volume de lote no portal do sorter para informar qual a caixa e o lote para o sistema do WMS (Protheus) no retorno da integração.

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Solução – Leitura automática no portal  
**Score:** — (semantico) | **ID:** d02aaa67ce9e70b8

Para o envio da informação de lote na integração do WCS para o WMS.
Sugerido o scaner do portal, realizar a leitura do código de barras do lote da caixa que seguira para o sorter. Nesse caso o equipamento deverá realizar uma leitura a mais para que seja vinculada a caixa com o lote e enviado essas informações via integração para o WMS do cliente.
Com isso, fica pendente a visita do fornecedor Toledo para analisar e avaliar se o equipamento disponibilizado é capaz de realizar a leitura desse novo código, esse contato com a Toledo é de responsabilidade do cliente.
Necessidades (Software PLC + WCS):
1- 1 alteração na lógica de leitura e envio de telegrama – (Software PLC)
2- 1 alteração na recepção de telegramas – (Software WCS)
3- 1 alteração nas informações enviadas por integração para o WMS – (Software WCS)

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Tela de Rejeito  
**Score:** — (semantico) | **ID:** 9062d1dc3d352789

Na tela de rejeito (já existente), acrescentar funções para leitura de EAN e Lote, tanto para full-case quanto pallet
deixando os volumes em situação para locação no PTL.

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Indução volumes – Expedição  
**Score:** — (nome-topico) | **ID:** e8522adb7ad4230c

Sistema Invent receberá integração com as informações de expedição.
Alguns volumes serão induzidos na esteira, com destino para o sorter, não sendo necessário armazenamento nos níveis.
Operador do andar irá etiquetar o produto/caixa em caso de fracionado e colocá-lo na linha, em caso de full case o produto ou caixa já estará etiquetado.
Em caso de produtos fracionados ou noRead, os produtos serão sempre direcionados para o térreo.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** 3e6ae96d64008549

Etiqueta de volumes Full Case, os itens chegarão no sorter etiquetados.
Obs.: Etiqueta não contém código de barras para ser lido no portal de leitura para o sorter. Será readequada para o projeto (responsabilidade cliente).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** 902ea1e50715770e

Etiqueta de volumes Full Case, os itens chegarão no sorter etiquetados.
Obs.: Etiqueta não contém código de barras para ser lido no portal de leitura para o sorter. Será readequada para o projeto (responsabilidade cliente).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** 816b3aee9d13bb36

Etiqueta de volumes Full Case, os itens chegarão no sorter etiquetados.
Obs.: Etiqueta não contém código de barras para ser lido no portal de leitura para o sorter. Será readequada para o projeto (responsabilidade cliente).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** c31cdcf1d49e7e2f

Etiqueta de volumes Full Case, os itens chegarão no sorter etiquetados.
Obs.: Etiqueta não contém código de barras para ser lido no portal de leitura para o sorter. Será readequada para o projeto (responsabilidade cliente).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** 0222804739645757

Etiqueta de volumes Full Case, os itens chegarão no sorter etiquetados.
Obs.: Etiqueta não contém código de barras para ser lido no portal de leitura para o sorter. Será readequada para o projeto (responsabilidade cliente).

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** b41b8d4a157adb82

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executará as rotinas de separação de volumes, incluindo Picking Fracionado, Picking Full Case, Picking Cart, Packing, Sorter e PTL (Put-To-Light) nas posições de saída do sorter, tendo como papel fundamental a interface entre os sistemas WMS (XXX) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente (licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Especificação de volumes induzidos no sorter  
**Score:** — (nome-topico) | **ID:** 6f9ea164cbc0d211

Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras:
Conforme a imagem acima, o código em destaque no quadro vermelho deve estar integrado no sistema Velox.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade por balanças  
**Score:** — (semantico) | **ID:** 29f9ff0e65a95f23

Pós Go Live.
Relatório deve mostrar a quantidade de volumes tratados em cada balança do sorter.
Campos:
Quantidade de volumes tratados por balança;
Quantidade de volumes pesados (total de todas as balanças do sorter);
Relação percentual entre pesados e tratados por balança;
Quantidade de volumes não pesados;
Erros de pesagem e as respectivas quantidades.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Balança;
Erro.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade portal de leitura de etiquetas de código de barras  
**Score:** — (semantico) | **ID:** 815f42cfdbda2bb8

Pós Go Live.
Relatório deve mostrar a produtividade por portal de leitura do sorter.
Campos:
Quantidade de volumes tratados/lidos por portal de leitura;
Quantidade de volumes lidos (total de todos os portais de leitura do sorter);
Relação percentual entre lidos e tratados por portal;
Quantidade de volumes não lidos (NOREAD);
Erros de leitura do código de barras e quantidades;
Quantidade de volumes sem etiquetas;
Quantidade de volumes com múltiplas leituras (MULTIREAD);
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
**Heading:** Induzidos x desviados  
**Score:** — (semantico) | **ID:** 0c801cb925be9f82

Pós Go Live.
Relatório deve mostrar informações de volumes induzidos com quantidades que foram desviados corretamente.
Campos:
Quantidade de volumes que foram induzidos no sorter e não foram desviados;
Quantidade de volumes que foram induzidos no sorter e foram desviados corretamente.
Filtros:
Data;
Hora;
Período de data;
Período de hora.

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Metodos operacionais  
**Score:** — (semantico) | **ID:** 22ac9c2d694c9557

O cliente poderá utilizar 4 (quatro) métodos operacionais para realizar a triagem dos volumes que serão induzidos nos sorters, sendo eles triados por rota de destino, distribuição e remessa.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Indução  
**Score:** — (semantico) | **ID:** 7df1d91aab43cd99

Para iniciar o processo de classificação de volumes no Slim Sorter, o operador deverá induzir 1 (um) volume por vez no ponto de indução, o volume induzido deve estar com a etiqueta voltada para o lado superior para que seja feita a identificação do código de barras do portal de leitura.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Alterações na Box Cubo  
**Score:** — (semantico) | **ID:** a27c959dc65b9abb

Segue abaixo as alterações solicitadas pelo time da GALA no sistema já implementado da Box Cubo:
Precisa ser feito um disparo de relatório como modelo em anexo em uma pasta que a Ti vai disponibilizar para verificação do ERP;
Precisa ser alterado a unidade de medida no Cubômetro de gramas para kg;
Obs.: está em gramas pois no WMS recebe em gramas, porém no ERP recebe em kg e ao disparar integração para o WMS o integrador faz a conversão para Gramas;
Precisa ser adicionado algumas colunas para que o Layout fique idêntico ao que o ERP precisa para funcionar a integração;
Precisa ter o peso líquido, conforme solicitação do Márcio, no peso líquido subtrair 200 gramas do peso bruto;
Abaixo escopo do layout:
Obs : esse layout pode ser apenas para o relatório que vai ser disparado na pasta, no sistema poderia manter o padrão que está hoje.
O documento precisa ser em formato CSV.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** 19b86f4272056348

Etiqueta de volumes Full Case, os itens chegarão no sorter etiquetados.
Obs.: Etiqueta não contém código de barras para ser lido no portal de leitura para o sorter. Será readequada para o projeto (responsabilidade cliente).

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** 6f09075085833e36

Etiqueta de volumes Full Case, os itens chegarão no sorter etiquetados.
Obs.: Etiqueta não contém código de barras para ser lido no portal de leitura para o sorter. Será readequada para o projeto (responsabilidade cliente).

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Especificação de Volumes Induzidos no Sorter  
**Score:** — (nome-topico) | **ID:** 5506bcc5d82db2dc

Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Especificação de Volumes Induzidos no Sorter  
**Score:** — (nome-topico) | **ID:** eab573daeb9aa816

Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 1.docx`  
**Heading:** Leitura Inicial  
**Score:** — (semantico) | **ID:** befd2f0ec4d82064

O sorter realiza a leitura da etiqueta do volume no portal de leitura e o WCS dispara automaticamente a solicitação de aptidão ao WMS/Reply.
