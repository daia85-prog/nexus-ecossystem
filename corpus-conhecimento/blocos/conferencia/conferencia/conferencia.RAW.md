# conferencia.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 1407bd13be4dbb92

A conferência é separada sistemicamente e fisicamente por três tipos de itens que são classificados como Frágeis, Não Frágeis e inconformes.
Todas as caixas deverão ser pesadas. O WCS não terá responsabilidade pela validação do peso, atuando apenas no envio da informação de peso por caixa embalada ao WMS após a conferência. Porém o WCS deve estar integrado com a balança exibindo o peso do volume em tempo real.
Os pedidos deverão ser conferidos por completo; por padrão, o operador bipará o SKU e informará manualmente a quantidade conferida, digitando o número correspondente. Contudo, caso o cliente necessite de uma conferência mais minuciosa, poderá habilitar, no cadastro do usuário, uma flag que altera o modo de conferência para leitura item a item, obrigando o operador a realizar a conferência individual de cada unidade.
O WCS possuirá um cadastro de caixas de expedição e, durante o processo, sempre irá sugerir automaticamente uma delas para utilização. Além disso, o WCS também considerará caixas reutilizáveis vinculadas aos produtos, permitindo sua utilização mediante leitura do código associado a essas caixas de acordo com o cadastro de produtos e embalagens dos produtos. Caso seja necessário utilizar uma caixa adaptada ou com dimensões fora do padrão cadastrado, o sistema permitirá que o operador informe manualmente um valor personalizado de dimensões, que será utilizado para continuidade do processo e integração após a finalização da conferência do volume.
OBS: Após o início da conferência, o WCS permitirá o fechamento do volume que será por meio do botão “Fechar Volume”. Ao acioná-lo, o sistema exibirá um pop-up de confirmação; caso o operador confirme, o WCS solicitará a seleção/identificação da caixa que será utilizada e registrará o peso e as dimensões informadas. Em seguida, o sistema retoma a conferência, permitindo a continuidade do processo com os itens faltantes (quando aplicável).
As caixas serão induzidas novamente com destino aos PTLs no final da linha.
Etiqueta pós conferência:

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 4b6e6062c170190d

O sistema WCS deverá permitir o cadastro e gerenciamento de impressoras de forma otimizada e prática, visando facilitar o vínculo entre impressoras e postos de trabalho.
A funcionalidade deverá contemplar:
Cadastro de impressoras com informações como: nome lógico, IP, localização física (Posto) e status;
Vínculo direto entre impressora e posto por meio de uma interface intuitiva, permitindo selecionar o posto e associar a impressora correspondente;
Permissão de alteração e manutenção de vínculos apenas para usuários com perfil de supervisor ou administrador;
A conferência dos volumes separados será de responsabilidade do WCS.
Serão em torno de 29 estações de conferência no final da separação de todos os produtos separados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema WCS informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados devem ser conferidos.
Na tela de conferência deve exibir a cada linha do item as seguintes informações: item/nome do produto/lote/unidade de medida/ qtd. conferida
Para conferência de itens de marketing que não possuem código único e lote, esse processo será feito através de uma flag na linha deste item na conferência, onde o operador ao marcar essa flag garantirá que todos os itens foram conferidos.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
No processo de conferência, WCS não deve permitir a troca de lote.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
Teremos impressão de laudos na tela de conferência.
Teremos opção de reimpressão na tela de conferência.
Na tela da conferência deverá ter uma marcação informando se aquele volume possui ou não a obrigatoriedade da impressão do laudo, otimizando a tratativa da operação
Possíveis Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido.
Quando ocorrerem as falhas descritas acima e o operador não conseguir resolver o problema de maneira imediata, será necessário acionar a Liderança para proceder com a liberação ou correção. O acesso a essa liberação será protegido por uma senha de segurança.
Ação: Após a falha ser detectada, o operador será direcionado para uma tela de liberação, onde será necessário inserir uma senha para liberar o processo de conferência.
Senha de Liberação: Apenas membros da Liderança terão acesso à senha, garantindo que a liberação só seja realizada por pessoas autorizadas.
Fluxo de Liberação
O operador identifica que não consegue corrigir a falha e solicita a liberação.
O sistema exibe uma tela de login onde o operador deve inserir a senha da Liderança.
Uma vez validada a senha, o operador poderá continuar a operação normalmente, ou a Liderança poderá revisar o processo e tomar as ações corretivas necessárias.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 105018ea4926ad77

Todos os itens separados deverão obrigatoriamente passar pelo processo de conferência, cuja responsabilidade será integralmente do sistema WMS.
Não haverá envio de confirmação individual por volume conferido entre os sistemas. Dessa forma, em caso de falha operacional — por exemplo, se um volume não for conferido corretamente — o fluxo não será interrompido. O sistema seguirá normalmente com o desvio do volume para o pallet conforme o roteamento padrão da esteira, independentemente da confirmação de conferência.
Caso, durante o processo de conferência, seja identificado que determinado volume necessita de uma nova caixa, o sistema WMS será responsável por gerar uma nova etiqueta para o volume adicional.
Essa informação será enviada ao WCS por meio de uma interface específica, contendo a identificação da nova etiqueta e o destino correspondente. Com base nesses dados, o WCS direcionará o novo volume automaticamente para o desvio correto na esteira, assegurando sua alocação no pallet apropriado.
O WMS não irá saber em qual modelo de caixa que está sendo readequado aquele volume, sendo assim não é possível nos retornar estas informações.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 4a58636343a04192

Após a realização do Picking (Áreas: A3, A2, A e A4), o volume obrigatoriamente passará por uma balança onde será aferido o peso real em comparação com o peso esperado. Este processo de conferência garante que a quantidade de itens e o peso do volume estejam de acordo com o especificado.
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
Ao clicar no botão "Encerrar Conferência", o operador deve selecionar cortar, então o WCS entenderá que os itens faltantes foram cortados, e o sistema registrará essa informação.
Coletar os itens cortados:
Ao clicar no botão "Encerrar Conferência" o operador deve selecionar coletar, o WCS cria um volume para coletar os itens faltantes, e o sistema registrará essa informação.
O sistema considerará a tolerância de peso previamente configurada para garantir que pequenas variações entre o peso esperado e o real não resultem em falhas no processo.
Caso o peso real seja diferente do esperado e fora da tolerância configurada, o volume será desviado para a conferência para análise do operador.
Nessa estação, serão desviados os pedidos nos seguintes cenários:
ShortPicking
Flag por Cliente
100% dos Clientes Novos
Porcentagem de pedidos
Check Weight (Peso)
ShortPicking
Para caso em que houver shortpicking na separação, ou seja, quando o operador separar a quantidade inferior a quantidade solicitada para separação. Nesse caso esse pedido deverá seguir para a conferência para que o pedido seja analisado e tratado e na conferência é tomada a decisão se o pedido segue com a quantidade (inferior) separada ou é ajustado para a quantidade solicitada, para esse caso de shortpicking, a quantidade separada será diferente da quantidade solicitada.
Flag por Cliente
Existirão clientes que deverão ter sempre 100% de seus pedidos direcionados para a conferência, esses clientes deverão vir com uma identificação no momento da integração para que o WCS consiga reconhecer que esse cliente se trata de um cliente nessa situação de conferência.
O campo "conferencia" na integração de "Wave" deverá vir preenchido com "Y".
100% Clientes Novos
Clientes novos, deverão ser direcionados 100% para conferência.
WMS deverá informar na integração quais são os clientes que são novos, com isso o WCS realiza o desvio dos volumes desse cliente para a conferência.
O campo "cliente_novo" na integração de "Wave" deverá vir preenchido com "Y".
Porcentagem de Pedidos
O WCS deverá encaminhar pedidos para a conferência conforme o parâmetro escolhido no sistema para essa operação. O operador pode alterar essa porcentagem no sistema WCS, por exemplo, se na onda contém 100 (cem) volumes e esse parâmetro estiver configurado com 50%, dos 100 (cem) volumes 50 (cinquenta) irão para o rejeito.
Esse parâmetro é calculado apenas fracionados, full case não se encaixa no cálculo.
O envio dos volumes deve ser randômico e não sequencial.
Obs.: essa regra deve considerar apenas os pedidos que não contenham nenhuma das regras anteriores para conferência. Por exemplo: se na onda existir clientes com flags de conferência, os volumes desses clientes não devem entrar nesse cálculo de porcentagem.
Check Weight (Aferição de peso)
Com base no cadastro de produtos e no cadastro de caixas o WCS tem o peso estimado do volume, teremos uma balança para validar se o peso real da caixa está dentro do peso estimado + tolerância, caso o volume esteja fora desse range de peso ele será desviado para conferência para auditoria.
Obs: A informação do peso será coletada através da integração de produtos, parâmetro “peso_item”.

---
**Origem:** [I23.3503] 2025 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV ..docx`  
**Heading:** Validação SKU x Pedido (Cross Check)  
**Score:** — (semantico) | **ID:** 60634a1bd644d0b1

O Cross-Check de Pedidos é uma verificação de dados que ocorre em tempo real no Portal. O processo é desencadeado pela leitura física do código e a validação lógica é executada imediatamente pelo WCS para determinar o destino do volume.
Fluxo de Cross-Check:
Leitura do Volume: O volume passa pelo Portal de Leitura de 3 faces, e a câmera captura a etiquetaOp do volume e o SKU (código interno).
Validação WCS: O WCS realiza a verificação de dados em duas etapas:
Verificação 1 (Destino): Verifica os dados do pedido associado à etiquetaOp (conforme o fluxo já existente).
Verificação 2 (Cross-Check): O WCS deve cruzar o SKU (código interno) que está no produto com os itens que deveriam compor os dados da nota fiscal (obtidos na Integração de Volumes WMS → WCS).
Decisão de Desvio:
Sucesso (Cross-Check OK): Se o SKU (código interno) lido pertencer ao pedido associado à etiquetaOp, o WCS enviará a instrução correta ao PLC, indicando a Rampa (Chute) de desvio.
Falha (Alerta de Erro): Se o SKU (código interno) lido NÃO pertencer ao pedido associado à etiquetaOp (ou se o produto já foi separado), o WCS deve tratar o volume como uma falha de validação e enviá-lo automaticamente para a Rampa de Rejeito.
Classificação de Rejeito por Cross-Check
O volume que falhar na Validação SKU (código interno) x pedido será direcionado para a Rampa de Rejeito. O WCS deve registrar o motivo de rejeito como "Produto Incorreto / SKU(código interno) Divergente" para que o operador na Rampa de Rejeito possa realizar o cross-check de forma manual e reinduzir o volume no sorter ou levar ele até a rampa de destino.

---
**Origem:** [I23.3503] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Heading:** Validação SKU x Pedido (Cross Check)  
**Score:** — (semantico) | **ID:** 990ff2f75f925fcc

O Cross-Check de Pedidos é uma verificação de dados que ocorre em tempo real no Portal. O processo é desencadeado pela leitura física do código e a validação lógica é executada imediatamente pelo WCS para determinar o destino do volume.
Fluxo de Cross-Check:
Leitura do Volume: O volume passa pelo Portal de Leitura de 3 faces, e a câmera captura a etiquetaOp do volume e o SKU (código interno).
Validação WCS: O WCS realiza a verificação de dados em duas etapas:
Verificação 1 (Destino): Verifica os dados do pedido associado à etiquetaOp (conforme o fluxo já existente).
Verificação 2 (Cross-Check): O WCS deve cruzar o SKU (código interno) que está no produto com os itens que deveriam compor os dados da nota fiscal (obtidos na Integração de Volumes WMS → WCS).
Decisão de Desvio:
Sucesso (Cross-Check OK): Se o SKU (código interno) lido pertencer ao pedido associado à etiquetaOp, o WCS enviará a instrução correta ao PLC, indicando a Rampa (Chute) de desvio.
Falha (Alerta de Erro): Se o SKU (código interno) lido NÃO pertencer ao pedido associado à etiquetaOp (ou se o produto já foi separado), o WCS deve tratar o volume como uma falha de validação e enviá-lo automaticamente para a Rampa de Rejeito.
Classificação de Rejeito por Cross-Check
O volume que falhar na Validação SKU (código interno) x pedido será direcionado para a Rampa de Rejeito. O WCS deve registrar o motivo de rejeito como "Produto Incorreto / SKU(código interno) Divergente" para que o operador na Rampa de Rejeito possa realizar o cross-check de forma manual e reinduzir o volume no sorter ou levar ele até a rampa de destino.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Validação SKU x Pedido (Cross Check)  
**Score:** — (semantico) | **ID:** a6abb8d476ebce12

O Cross-Check de Pedidos é uma verificação de dados que ocorre em tempo real no Portal para pedidos do modelo “FULLCASE”. O processo é desencadeado pela leitura física do código e a validação lógica é executada imediatamente pelo WCS para determinar o destino do volume.
Fluxo de Cross-Check:
Leitura do Volume: O volume passa pelo Portal de Leitura de 3 faces, e a câmera captura a etiquetaOp do volume e o SKU(código interno).
Validação WCS: O WCS realiza a verificação de dados em duas etapas:
Verificação 1 (Destino): Verifica os dados do pedido associado à etiquetaOp (conforme o fluxo já existente).
Verificação 2 (Cross-Check): O WCS deve cruzar o DUN ou EAN(código interno) que está no produto com os itens que deveriam compor o pedido (obtidos na Integração de Remessas WMS → WCS).
Decisão de Desvio:
Sucesso (Cross-Check OK): Se o DUN ou EAN(código interno) lido pertencer ao pedido associado à etiquetaOp, o WCS enviará a instrução correta ao PLC, indicando a Rampa (Chute) de desvio.
Falha (Alerta de Erro): Se o DUN ou EAN(código interno) lido NÃO pertencer ao pedido associado à etiquetaOp (ou se o produto já foi separado), o WCS deve tratar o volume como uma falha de validação e enviá-lo automaticamente para a Rampa de Rejeito.
Classificação de Rejeito por Cross-Check
O volume que falhar na Validação SKU(código interno) x Pedido será direcionado para a Rampa de Rejeito. O WCS deve registrar o motivo de rejeito como "Produto Incorreto / SKU(código interno) Divergente" para que o operador na Rampa de Rejeito possa realizar o cross-check de forma manual e reinduzir o volume no sorter ou levar ele até a rampa de destino.
Essa função deve ter a opção de ser inativada de acordo com a necessidade da operação.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** 96ff59dfae64bba4

O WMS será responsável pelo controle e realização da coleta dos itens que compõem um pallet. Após o cadastro da linha de separação e a disponibilidade do pallet no "stage-in", o WCS deverá seguir os seguintes passos:
• Abertura da Tela de Conferência: O operador acessa a tela de conferência do WCS e realiza a leitura da etiqueta de pallet para iniciar o processo de conferência. O WCS então exibe uma lista de itens presentes no pallet.
• Leitura item a item: O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa.
• Integração e Vinculação: O WCS não realizará nenhuma integração referente ao resultado da conferência, e o processo de conferência não está vinculado diretamente ao sorter e ao PTL. Este processo é opcional e pode ser utilizado pela operação quando necessário, sem impactar as demais etapas do processo logístico.
• Conferência Aleatória: O WCS deve disponibilizar o processo de conferência para qualquer pallet que for lido mesmo que não esteja na linha de separação previamente cadastrada, dando flexibilidade da operação decidir o que quer conferir de forma dinâmica e eficiente.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - ADITIVO - SHORTINDICATOR  - rev.2.docx`  
**Heading:** FLUXO DE DECISÃO – Velox (CC Confirmação de Coleta)  
**Score:** — (semantico) | **ID:** 81c142fbba31a5b8

Para cada item com corte (quantidade coletada < quantidade prevista) em um volume, o Velox deverá executar a seguinte avaliação antes de montar o payload de confirmação:

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 0a37efa12458c3f5

Após a linha de picking FlowRack terá um portal com uma antena RFID para detectar se os itens previstos no volume (pega) estão presentes dentro da caixa.
O volume será direcionado para a conferência nos seguintes cenários:
Volumes (pega) que foi realizado shortpicking
Volumes (pega) que a quantidade detectada pela antena não for igual a esperada.
Categoria/filtro parametrizado pela operação
Missão que tiveram “Pede Caixa”
Missão com coleta pendente
Ao receber o volume (pega), o operador deverá realizar a leitura da etiqueta da caixa e o sistema informar qual o motivo do volume (pega) estar na conferência e a lista dos itens que pertencem ao volume (pega). O sistema deixará evidente os itens que tiveram corte.
Para a conferência dos itens, cada item deverá ser lido individualmente para contabilizar a quantidade e ser depositado em uma nova caixa. Ao final da conferência, será enviada ao WMS a relação de todos os itens lidos pelo conferente, para confirmação dos produtos. Em caso de falta de produto no estoque, o operador deverá selecionar se deseja cortar esses itens ou coletar manualmente e completar a caixa.
Obs: Caso o conferente opte pelo corte do item, será necessária uma autenticação de um supervisor. O WCS irá registrar os operadores que realizarem as conferências de cada volume (pega) durante a operação.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Validação SKU x Pedido (Cross Check)  
**Score:** — (semantico) | **ID:** 76d24b6aa84ab3cb

O Cross-Check de Pedidos é uma verificação de dados que ocorre em tempo real no Portal para pedidos do modelo “FULLCASE”. O processo é desencadeado pela leitura física do código e a validação lógica é executada imediatamente pelo WCS para determinar o destino do volume.
Fluxo de Cross-Check:
Leitura do Volume: O volume passa pelo Portal de Leitura de 3 faces, e a câmera captura a etiquetaOp do volume e o SKU(código interno).
Validação WCS: O WCS realiza a verificação de dados em duas etapas:
Verificação 1 (Destino): Verifica os dados do pedido associado à etiquetaOp (conforme o fluxo já existente).
Verificação 2 (Cross-Check): O WCS deve cruzar o DUN ou EAN(código interno) que está no produto com os itens que deveriam compor o pedido (obtidos na Integração de Remessas WMS → WCS).
Decisão de Desvio:
Sucesso (Cross-Check OK): Se o DUN ou EAN(código interno) lido pertencer ao pedido associado à etiquetaOp, o WCS enviará a instrução correta ao PLC, indicando a Rampa (Chute) de desvio.
Falha (Alerta de Erro): Se o DUN ou EAN(código interno) lido NÃO pertencer ao pedido associado à etiquetaOp (ou se o produto já foi separado), o WCS deve tratar o volume como uma falha de validação e enviá-lo automaticamente para a Rampa de Rejeito.
Classificação de Rejeito por Cross-Check
O volume que falhar na Validação SKU(código interno) x Pedido será direcionado para a Rampa de Rejeito. O WCS deve registrar o motivo de rejeito como "Produto Incorreto / SKU(código interno) Divergente" para que o operador na Rampa de Rejeito possa realizar o cross-check de forma manual e reinduzir o volume no sorter ou levar ele até a rampa de destino.
Essa função deve ter a opção de ser inativada de acordo com a necessidade da operação.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Conferencia  
**Score:** — (nome-topico) | **ID:** f40fdf7ed11522d1

El proceso de Comprobación/Empaque será obligatorio para todos los artículos una vez finalizado el picking. Al finalizar el picking, el operador deberá retirar el artículo del final de la línea y transportarlo al área de comprobación. Para iniciar el proceso, el operador accederá a la pantalla de comprobación del WCS y escaneará la etiqueta, lo que iniciará la validación del contenido de la caja. Tras el escaneo, el WCS mostrará la información del pedido y los artículos incluidos, lo que permitirá al operador proceder con la comprobación según los procedimientos operativos definidos.
El proceso de verificación se puede realizar de forma flexible, según las necesidades de la operación. El operador puede aprobar el envío sin escanear los artículos, escanear todos los artículos individualmente o escanear una unidad por SKU, ingresando manualmente la cantidad correspondiente. Durante el proceso, el operador también puede escanear uno o más envíos (cajas) del mismo pedido y consolidarlos en una sola caja final.
Si se identifican artículos faltantes durante la conferencia, el operador puede optar por finalizarla incluso con artículos pendientes. Al activar la opción de cierre de la conferencia, el WCS debe entender que los artículos no validados se han eliminado y registrar esta información para su posterior procesamiento. Si el artículo faltante está disponible, el operador puede realizar la recolección adicional y escanear el EAN del producto o confirmarlo en pantalla, lo que permite al WCS reconocer el artículo como recolectado y completar la conferencia con normalidad.
Independientemente del flujo de trabajo adoptado, todo proceso de verificación debe completarse con la impresión de la etiqueta de embalaje. Esta etiqueta debe consolidar los volúmenes seleccionados del mismo pedido incluido en el proceso de verificación, garantizando así la trazabilidad y la correcta identificación de la caja final.
Ejemplo de la etiqueta:

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 0bddbe3f516aa79a

O processo de Conferência/Packing será obrigatório para todos os volumes após a finalização do picking. Ao término da separação, o operador deverá retirar o volume do final da linha e transportá-lo até a área de conferência. Para iniciar o processo, o operador acessará a tela de conferência do WCS e realizará a leitura da etiqueta, dando início à validação do conteúdo da caixa. Após a leitura, o WCS apresentará as informações do pedido e os volumes envolvidos, permitindo que o operador prossiga com a conferência conforme a dinâmica operacional definida.
A conferência poderá ser executada de forma flexível, conforme necessidade da operação. O operador poderá aprovar o volume sem leitura de itens, realizar a leitura de todos os itens individualmente ou optar pela leitura de uma unidade por SKU, informando manualmente a quantidade correspondente. Durante o processo, o operador também poderá ler um ou mais volumes(caixas) pertencentes ao mesmo pedido e consolidá-los em uma única caixa final.
Caso, durante a conferência, sejam identificados itens faltantes, o operador poderá optar por finalizar a conferência mesmo com pendências. Ao acionar a opção de encerramento da conferência, o WCS deverá entender que os itens não validados foram cortados, registrando essa informação para tratamento posterior. Caso o item faltante esteja disponível, o operador poderá realizar a coleta complementar e efetuar a leitura do código do produto ou confirmar via tela, permitindo que o WCS reconheça o item como coletado e conclua a conferência de forma regular.
Independentemente do fluxo adotado, toda conferência deverá obrigatoriamente ser finalizada com a impressão da etiqueta de packing. Essa etiqueta deverá consolidar os volumes selecionados do mesmo pedido incluídos no processo de conferência, garantindo a rastreabilidade e a correta identificação da caixa final.
Exemplo de Etiqueta:

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Validação de Peso (Balança Dinâmica)  
**Score:** — (semantico) | **ID:** a4d0d907c6b62204

O primeiro filtro de qualidade é a balança em movimento instalada na linha principal.
Pesagem: A caixa passa pela balança sem parada. O WCS captura o peso real.
Comparação: O sistema compara: Peso Real Capturado vs Peso Esperado Calculado (Soma dos pesos cadastrais dos produtos + Tara da caixa).
Decisão (Tolerância):
Aprovado: Se a diferença estiver dentro da tolerância parametrizada (ex: +/- 5% ou 50g), o volume segue direto para a Conferência, sem intervenção humana.
Reprovado: Se o pedido tiver a flag de necessidade de conferência, o WCS aciona o desviador e envia a caixa para a Estação de Tratativa Manual (que se encontra ao final do Picking Térreo) onde o item será tratado diretamente ali para situações especificas onde pedidos de uma onda específica terão uma flag e serão desviados nessa conferência, podendo ser ativada ou desativada a depender da necessidade da operação.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** aee7425739e491ae

Após a realização do Picking Fracionado, o volume obrigatoriamente passará por uma balança dinâmica posicionada no final da linha do FlowRack, onde será aferido o peso real em comparação com o peso esperado.
O WCS compara o Peso Real com o Peso Esperado (soma dos pesos cadastrais dos itens + tara registrada na balança do Order Start). A tolerância é configurável — a BR Supply opera com tolerância de 260g (arredondada ao múltiplo de 20g mais próximo, respeitando a resolução da balança). As balanças da automação medem a cada 20 gramas.
Volume dentro da tolerância: aprovado, segue para packing/sorter.
Volume fora da tolerância: desviado automaticamente para a estação de conferência.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Fluxo Operacional da Conferência  
**Score:** — (semantico) | **ID:** e773ee72001f26d8

Abertura da Tela de Conferência
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume desviado (caixa) para iniciar o processo. O WCS exibe:
A lista de itens do volume.
O operador responsável pela coleta, a nível de item.
Validação dos Itens
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante a validação, o operador poderá:
Completar a caixa, caso o item faltante esteja disponível; ou
Finalizar a conferência com itens faltantes, utilizando o botão "Encerrar Conferência".
Corte de Itens Faltantes
Ao acionar o botão "Encerrar Conferência", o operador deverá selecionar a opção de corte. O WCS entenderá que os itens não lidos foram cortados e registrará essa informação no sistema.
Coleta de Itens Cortados
Caso o operador realize a coleta posterior do item faltante:
O operador poderá realizar a leitura do EAN ou EAN_DZ do produto.
O WCS entenderá que o item foi coletado e atualizará o volume.
Reimpressão de Etiqueta
Caso existam itens cortados, o WCS deverá reimprimir automaticamente a etiqueta do volume ao finalizar a conferência. A etiqueta reimpressa seguirá o mesmo layout padrão da etiqueta original (dados de roteamento e código de barras), sem discriminação de itens e quantidades. A nova etiqueta deverá substituir a etiqueta original do volume.

---
**Origem:** [I17.112] ADITIVO — `I17.112 - ES - Motivos Rejeito e Relatório Consumo de Caixas - Rev 2.docx`  
**Heading:** Regra de Negócio (Parâmetro MFC)  
**Score:** — (semantico) | **ID:** b0411c8fa255cf8b

Sempre que o parâmetro do MFC de "Validação de EAN (Pedido vs. Caixa)" estiver ATIVO, o WCS deverá aplicar a seguinte árvore de decisão para diferenciar o erro:
Status de Leitura:
Se o scanner NÃO capturar dados (No Read), a mensagem da tela deve ser explícita: "NOREAD EAN".
Validação de Dados:
Se o scanner capturar dados, mas o EAN lido for DIFERENTE do EAN esperado na etiqueta do pedido (MFC), a mensagem da tela deve ser: "EAN DIVERGENTE".

---
**Origem:** [I17.112] ADITIVO — `I17.112 - ES - Motivos Rejeito e Relatório Consumo de Caixas - Rev 2.docx`  
**Heading:** Validação de Lote (Nacional vs. Internacional)  
**Score:** — (semantico) | **ID:** 6f4ecc7a6a421b05

O sistema deve aplicar rigorosidade diferente na validação da etiqueta de Lote (LPN) dependendo do "Tipo de Pedido" informado pelo ERP/WMS:
Pedidos Nacionais: A leitura do Lote é recomendada, mas não obrigatória. Caso o scanner leia o EAN do produto mas falhe na leitura do Lote, o sistema poderá (conforme parâmetro) liberar o volume ou apenas emitir um alerta.
Pedidos Internacionais: A leitura do Lote é OBRIGATÓRIA.
Se o sistema identificar que o pedido é internacional e o campo de Lote estiver vazio (não lido), o WCS deve travar o volume imediatamente e exibir o erro "SEM LOTE" ou "LOTE NÃO CAPTURADO".
Formato do Dado: O campo de Lote deve estar preparado para aceitar e validar strings de tamanho variável de 6 a 8 caracteres.

---
**Origem:** [I21.131] ADITIVO — `I21.131  - Aditivo Projeto PMB - Posto Virtual C1.docx`  
**Heading:** Processo de Conferência / Coleta de Itens  
**Score:** — (semantico) | **ID:** f0fc85ad5e0ca6b3

Ao receber a caixa na estação de conferência, o operador deverá iniciar o processo através da leitura (bipagem) da caixa.
A partir desse ponto, o processo exige validação completa do conteúdo, contemplando dois conjuntos de itens:
Todos os volumes físicos contidos na caixa
Todos os itens previamente cadastrados nos endereços virtuais vinculados ao posto de conferência
A conferência deverá ser realizada de forma integral, sem exceções ou validações parciais. O operador deverá realizar a leitura de todos os itens, garantindo que tanto os itens dos postos convencionais quanto os itens dos endereços virtuais sejam devidamente considerados no processo.
A validação continua sendo suportada pela estrutura de BIN previamente cadastrada, garantindo rastreabilidade e consistência logística.

---
**Origem:** [I21.131] ADITIVO — `I21.131  - Aditivo Projeto PMB - Posto Virtual C2.docx`  
**Heading:** Processo de Conferência / Coleta de Itens  
**Score:** — (semantico) | **ID:** ec9a84295a66b444

Ao chegar na estação de conferência, o operador deverá iniciar o processo através da leitura da caixa.
O comportamento da interface será condicionado ao resultado da validação de peso realizada na balança. Quando não houver divergência, serão apresentados apenas os itens dos endereços virtuais para conferência. Em casos de divergência, serão apresentados todos os itens do pedido para validação completa.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Fase 2 - Melhorias.docx`  
**Heading:** Conferência de Tarefas por Onda no Ponto Final da   Triagem  
**Score:** — (semantico) | **ID:** 20a7bf0739540244

Disponibilização de tela de conferência por onda no ponto final da triagem, com foco em controle operacional e rastreabilidade dos volumes gerados.
Fluxo de Leitura e Validação
A conferência do volume ocorre obrigatoriamente por meio da sequência de leituras abaixo, garantindo rastreabilidade completa do fechamento físico do volume:
Leitura da caixa plástica:
• Código com 12 caracteres, iniciando com A57
• Valida a identificação da caixa física utilizada na consolidação do volume
Leitura da etiqueta Manhattan
• Código com 12 caracteres, iniciando com A53
• Valida a associação do volume ao pedido/onda
Leitura do primeiro lacre
• Código numérico com 7 dígitos
Leitura do segundo lacre
• Código numérico com 7 dígitos
Regras de Conferência
• As leituras devem ocorrer na ordem definida pelo sistema.
• O sistema valida formato, tamanho e prefixo de cada leitura.
• Leituras fora do padrão devem ser rejeitadas com mensagem orientativa ao operador.
• Após a conclusão correta de todas as leituras:
  o O volume é removido da lista de pendentes
  o O volume é incluído na lista de conferidos
• A conferência atua exclusivamente como controle visual e operacional da onda, sem alterar o fluxo logístico.
Impactos
A funcionalidade de conferência por onda não gera:
• Impacto no envio de integrações
• Alterações em processos anteriores (coleta, separação, triagem)

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Fase 2 - Melhorias.docx`  
**Heading:** Relatório de Conferência por Onda  
**Score:** — (semantico) | **ID:** 15669395ead970ab

Ao selecionar uma onda na tela de conferência, o sistema deverá disponibilizar a opção de geração de relatório da onda selecionada, com foco em auditoria operacional e rastreabilidade.
Características do Relatório
O relatório será gerado a nível de linha, exibindo o detalhamento individual de cada tarefa associada à onda.
As informações apresentadas no relatório devem refletir o estado atual da conferência no ponto final da triagem.
Informações Exibidas
Para cada tarefa da onda, o relatório deverá apresentar, no mínimo, os seguintes campos:
Número da caixa plástica
Status da tarefa (Pendente / Conferida)
Número da OLPN
Número do Lacre 1
Número do Lacre 2
Premissas do Relatório
O relatório possui caráter exclusivamente informativo, sem impacto operacional ou logístico.
A geração do relatório não altera status, integrações ou fluxos já homologados.
As informações exibidas devem ser compatíveis com os registros de rastreabilidade armazenados pelo sistema.
Premissas e Restrições
As funcionalidades descritas atuam exclusivamente no âmbito operacional e de controle.
Não há alteração de status logístico nem interferência nos fluxos já homologados.
Todas as ações realizadas devem ser registradas para fins de rastreabilidade, incluindo:
  o Usuário
  o Data e hora
  o Identificadores lidos (caixa, etiqueta Manhattan e lacres)

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ BELEZA - ESPECIFICACAO DE SOFTWARE ADOTOVO - MELHORIAS.docx`  
**Heading:** Conferência de Tarefas por Onda no Ponto Final da Triagem  
**Score:** — (semantico) | **ID:** 408b3a9e466440f7

Disponibilização de tela de conferência por onda no ponto final da triagem, com foco em controle operacional e rastreabilidade dos volumes gerados.
Fluxo de Leitura e Validação
A conferência do volume ocorre obrigatoriamente por meio da sequência de leituras abaixo, garantindo rastreabilidade completa do fechamento físico do volume:
Leitura da caixa plástica:
• Código com 12 caracteres, iniciando com A57
• Valida a identificação da caixa física utilizada na consolidação do volume
Leitura da etiqueta Manhattan
• Código com 12 caracteres, iniciando com A53
• Valida a associação do volume ao pedido/onda
Leitura do primeiro lacre
• Código numérico com 7 dígitos
Leitura do segundo lacre
• Código numérico com 7 dígitos
Regras de Conferência
• As leituras devem ocorrer na ordem definida pelo sistema.
• O sistema valida formato, tamanho e prefixo de cada leitura.
• Leituras fora do padrão devem ser rejeitadas com mensagem orientativa ao operador.
• Após a conclusão correta de todas as leituras:
  o O volume é removido da lista de pendentes
  o O volume é incluído na lista de conferidos
• A conferência atua exclusivamente como controle visual e operacional da onda, sem alterar o fluxo logístico.
Impactos
A funcionalidade de conferência por onda não gera:
• Impacto no envio de integrações
• Alterações em processos anteriores (coleta, separação, triagem)

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ BELEZA - ESPECIFICACAO DE SOFTWARE ADOTOVO - MELHORIAS.docx`  
**Heading:** Relatório de Conferência por Onda  
**Score:** — (semantico) | **ID:** 0eee6589a3118ea6

Ao selecionar uma onda na tela de conferência, o sistema deverá disponibilizar a opção de geração de relatório da onda selecionada, com foco em auditoria operacional e rastreabilidade.
Características do Relatório
• O relatório será gerado a nível de linha, exibindo o detalhamento individual de cada tarefa associada à onda.
• As informações apresentadas no relatório devem refletir o estado atual da conferência no ponto final da triagem.
Informações Exibidas
Para cada tarefa da onda, o relatório deverá apresentar, no mínimo, os seguintes campos:
• Número da caixa plástica
• Status da tarefa (Pendente / Conferida)
• Número da OLPN
• Número do Lacre 1
• Número do Lacre 2
Premissas do Relatório
• O relatório possui caráter exclusivamente informativo, sem impacto operacional ou logístico.
• A geração do relatório não altera status, integrações ou fluxos já homologados.
• As informações exibidas devem ser compatíveis com os registros de rastreabilidade armazenados pelo sistema.
Premissas e Restrições
• As funcionalidades descritas atuam exclusivamente no âmbito operacional e de controle.
• Não há alteração de status logístico nem interferência nos fluxos já homologados.
• Todas as ações realizadas devem ser registradas para fins de rastreabilidade, incluindo:
  o Usuário
  o Data e hora
  o Identificadores lidos (caixa, etiqueta Manhattan e lacres)
Adequação do Dashboard – Relatório Coleta/Posto
Adequação do dashboard Relatório Coleta/Posto para ampliar a visibilidade operacional e garantir maior confiabilidade das informações apresentadas.
Escopo da Adequação
Inclusão de uma nova seção no relatório para exibir apenas os itens cujos volumes foram efetivamente finalizados.
A nova seção deverá considerar o status de finalização da tarefa, e não apenas os itens separados nos postos.
Regra de Exibição
Atualmente, o relatório apresenta os itens separados nos postos de coleta, independentemente da finalização da tarefa.
Com a adequação proposta, o relatório deverá:
Manter a visualização atual dos itens separados;
Incluir uma seção adicional que exiba exclusivamente os itens pertencentes a volumes com tarefa finalizada.
Objetivo da Evolução
Garantir que o relatório reflita a real condição operacional da coleta.
Evitar divergências de informação entre itens separados e tarefas efetivamente concluídas.
Apoiar análises gerenciais e operacionais com base em dados consolidados.
Premissas
A inclusão da nova seção não altera regras de negócio existentes.
Não há impacto nos fluxos operacionais ou no envio de integrações.
A funcionalidade atua exclusivamente no âmbito de visualização e controle gerencial.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Crosscheck, Alocação Automatica, Pedidos, Dashboard e Ajustes Impressão.docx`  
**Heading:** Alocação por pedidos Completos no Pallet  
**Score:** — (semantico) | **ID:** e4c3dff22860404c

Permitir a alocação de volumes nos pallets agrupando-os por pedidos completos, evitando a divisão de pedidos parciais entre pallets diferentes. Essa lógica visa simplificar a expedição, mantendo o pedido íntegro em um único pallet sempre que possível.
Os volumes de um mesmo pedido devem ser alocados no mesmo pallet.
A divisão de um pedido entre múltiplos pallets só é permitida quando a cubagem do pedido unitário ultrapassa um limite parametrizável.
O limite de cubagem será cadastrado no módulo de Roteamento / Mapeamento como parâmetro configurável.
Pedidos cuja cubagem está dentro do limite seguem a regra padrão: pedido completo em um único pallet.
Parametrização
Será incluído um novo parâmetro na funcionalidade Editar Template, dentro da tela de Roteamento/Montagem “Agrupar pedidos por PTM” (booleano: Sim/Não). Quando habilitado será disponibilizado um campo adicional Quantidade de pedidos por PTM (numérico inteiro)
Comportamento:
O sistema passará a agrupar múltiplos pedidos dentro de um mesmo PTM, respeitando a quantidade definida no parâmetro.
Cadastro de cubagem máxima por pallet em Roteamento / Mapeamento. Quando a cubagem do pedido unitário exceder esse valor, o sistema autoriza a divisão entre pallets.
Tela exemplo:

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Parametrização de Conferência automática  
**Score:** — (nome-topico) | **ID:** 24cb1eb332fc412e

Será implementada uma configuração no sistema permitindo à operação parametrizar os critérios de envio automático de paletes à fila de conferência. O sistema disponibilizará 4 parâmetros, que poderão ser utilizados de forma isolada ou combinada:
SKU: a operação seleciona um SKU específico para que todos os paletes que contenham esse SKU sejam encaminhados à conferência.
Loja Crítica: a operação seleciona uma ou mais lojas específicas para que todos os paletes destinados a essas lojas sejam encaminhados à conferência.
Aleatoriedade: a operação informa um percentual de paletes a serem conferidos de forma aleatória. O cálculo é baseado na quantidade de paletes fechados na última hora trabalhada.
Auditoria Direcionada: a operação seleciona sistemicamente uma posição PTL específica para que todos os paletes fechados naquela posição sejam obrigatoriamente conferidos.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Tela de Listagem de Paletes a Conferir  
**Score:** — (semantico) | **ID:** 8e1eaab1685a365f

Será criada tela dedicada à listagem de todos os paletes em fluxo de conferência. Os elementos mínimos da tela estão descritos no quadro abaixo:

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Tela de Conferência do Palete  
**Score:** — (semantico) | **ID:** c6e6e9f4b24fac8a

A tela de conferência apresentará os volumes vinculados ao palete master selecionado e permitirá ao conferente realizar a leitura individual de cada volume físico presente no palete. A tela contará com a função de Reiniciar Conferência, que descarta todas as leituras realizadas no ciclo atual e reinicia o processo do zero. Não será mantido histórico das conferências reiniciadas, nem serão realizadas comparações entre tentativas.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Monitoramento de Leitura nas Bicas.docx`  
**Heading:** Identificação em tempo real de volumes não lidos  
**Score:** — (semantico) | **ID:** 76fabedf88c41927

Será implementado um mecanismo para identificar volumes que estejam há mais de X minutos entre a saída na rampa de destino e a leitura na bica.
O objetivo é permitir a detecção imediata de possíveis falhas operacionais (acúmulo, desvio incorreto) ou falhas físicas (problema de leitura, volume parado).
Para cada bica, o sistema deverá considerar os volumes que foram direcionados pelo sorter (saída na rampa de destino).
Será realizado o controle do tempo decorrido entre:
O momento em que o volume sai na rampa de destino;
O momento em que a etiqueta é lida na bica.
Caso o tempo entre esses dois eventos ultrapasse o valor X (a ser definido pelo cliente), o sistema deverá:
Sinalizar a situação como possível falha operacional ou física;
Indicar visualmente na tela que há volume(s) acima do tempo esperado.
A lógica considera exclusivamente:
Registro do horário de saída na rampa.
Comparação do tempo decorrido com o limite configurado.
Identificação de Volumes com Tempo Superior ao Limite Configurado
O controle será encerrado no momento em que:
A etiqueta for lida na bica; ou
O volume deixar de estar vinculado àquela bica.

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Wave 2.docx`  
**Heading:** Tela de Conferência  
**Score:** — (semantico) | **ID:** c8c1883eadf6904c

A estação de conferência tem como objetivo garantir a acuracidade da separação antes que os volumes sigam para a expedição. O WCS direcionará para esta estação os volumes que apresentarem divergências (ex: peso incorreto, se houver balança na linha), volumes marcados com shortpicking pendente, ou volumes selecionados aleatoriamente por amostragem para auditoria de qualidade.
Fluxo Operacional:
Abertura da Tela:
O operador acessa a tela de "Conferência" no desktop da estação.
O sistema aguarda a leitura do código de barras da etiqueta do volume (caixa).
Identificação do Volume:
O operador realiza a leitura da etiqueta da caixa.
O WCS carrega na tela a lista de todos os itens (SKU, Descrição e Quantidade) que deveriam estar contidos naquele volume.
Opcional (Configurável): O sistema pode operar em modo "Cego" (não mostra a quantidade) ou "Aberto" (mostra a quantidade esperada), conforme parametrização do cliente.
Validação dos Itens:
O operador deve realizar a leitura do código de barras (EAN/DUN) de cada item físico presente na caixa, um a um.
O sistema valida se o item lido pertence ao pedido e incrementa a contagem de "Conferido".
Se um item incorreto for lido, o sistema emite um alerta sonoro e visual de erro, impedindo a continuidade até que o item correto seja processado.
Tratativa de Divergências (Faltas):
Caso o operador finalize a leitura de todos os itens físicos e o sistema aponte que ainda faltam produtos (saldo pendente), o operador deverá selecionar uma das tratativas abaixo através de botões na tela:
Confirmar Corte (Shortpicking): O operador confirma que o item realmente não está na caixa. O WCS envia a confirmação de picking com corte para o WMS.
Gerar Novo Volume (Re-picking): O operador indica que o item falta, mas deve ser separado novamente. O WCS gera uma nova tarefa de separação para o item faltante no Order Start.
Finalização:
Se a conferência bater 100% com o esperado (ou após a tratativa das divergências), o sistema libera o volume.
Uma nova etiqueta de expedição pode ser impressa (se configurado) para selar a caixa, e o volume é liberado para seguir para a área de Sorter ou Expedição.
Botão de Reinício de Conferência (Reset de Volume): Será disponibilizada uma função (botão/comando) que permite ao operador ou supervisor descartar todo o progresso realizado na conferência atual de um volume.
Ação: Ao acionar esta opção, o sistema limpará todas as leituras parciais já feitas para aquele volume específico e reiniciar o processo do zero para o mesmo volume.
Resultado: O volume retornará ao status inicial de "Aguardando Conferência", permitindo que o operador inicie o processo de bipagem novamente do zero para a caixa completa, garantindo a integridade do processo em caso de erros operacionais durante a conferência.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Confirmação de conferência (CHECKOUT)  
**Score:** — (semantico) | **ID:** 8aa1c775260701a8

WCS  WMS
Após o operador de conferência terminar a tratativa de análise e conferência da caixa clicando em finalizar conferencia o WCS envia o retorno de conferência CHECKOUT com os itens faltantes no P30 como mencionado no item 3.4 para o WMS, finalizando a informações de separação da caixa.
EV;20230615102819;INVENT WCS;400009950;MOD;WS;02
WS;400009950;1640150954;null;214996726;20;70;0;GET;2020D101040101;1.0;1503067;99;;;

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** f168bcdfe425965a

A conferência será de responsabilidade do WMS do cliente.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** 3cc0d02a5b536370

A conferência será de responsabilidade do WMS do cliente.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** ca516f9ba1ad4553

A conferência será de responsabilidade do WMS do cliente.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 347ff7aa572b4e36

Na estação de conferência serão direcionados os pedidos que foram realizados shortpicking e franqueados (Que estiverem com flag ativo)
Shortpicking
Para esse tipo de pedido o operador da estação de conferência, fara o tratamento para os itens de alta relevância (Alto índice de reclamação por falta), itens que não são considerados alta relevância, poderão seguir normalmente. Após esse tratamento, operador ao confirmar a conferência, VELOX envia integração de confirmação de separação dos itens separados para o pedido. Esses itens de alta relevância deverão vir identificados na integração.
Franqueados
Cliente enviará via integração a informação de todos os franqueados que deverão seguir para a conferência, esses tipos de franqueado seguirão para conferência independente da separação, esses pedidos serão conferidos e após a validação VELOX envia integração de confirmação de separação.
Operador terá a possibilidade de cadastrar, editar e excluir franqueados no sistema Velox, e também ativar/desativar flag que indica a necessidade de ir para conferência.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Conferência - Rejeito  
**Score:** — (semantico) | **ID:** 32bbe83efd536585

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Conferência - Rejeito  
**Score:** — (semantico) | **ID:** 9e7aada5699d6034

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Conferência - Rejeito  
**Score:** — (semantico) | **ID:** fd5e2eb05f4f0b60

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar  com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.
Serão direcionados para a conferencia, pedidos que foram integrados no sistema MFC porém não existem posições cadastradas para esse produto especifico, nesse caso esse pedido deve ser tratado na conferencia.
Na conferencia, o sistema MFC deverá ser configuravel para que o operador com o nivel de usuário especifico, consiga realizar a conferencia sem a necessidade de realizar a leitura de item a item.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Conferência - Rejeito  
**Score:** — (semantico) | **ID:** e5c73aeb5698afee

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferênbcia + Relatorio.docx`  
**Heading:** Tela de Conferência  
**Score:** — (semantico) | **ID:** 6f35aabde0a71d00

Ocultar o menu lateral ao abrir a tela de conferência, para maior área útil na visualização.
Inclusão de botão de retorno à tela inicial (Home).
Ao finalizar a Conferência deve ser exibido um pop para que seja informado qual foi o erro encontrado, categorizando nas seguintes opções:
Sobra: Utilizado quando for enviado mais itens que o previsto
Falta: Utilizado quando for enviado menos itens que o previsto
Inversão: Utilizado quando for enviado um item que não estava previsto
Tolerância: Utilizado quando todos os itens foram separados corretamente
Ao selecionar a categoria de erro o WCS deve solicitar “FA” e quantidade do item que ocasionou a falha podendo ser um item ou mais.
Comportamento por tipo de erro:
Sobra: solicitar “FA” e a quantidade excedente. OBS: O FA apontado como sobra deve constar na lista de picking vinculado a caixa
Falta: solicitar “FA” e a quantidade que faltou. O FA apontado como falta deve constar na lista de picking vinculado a caixa.
Inversão: solicitar “FA” Previsto que está faltando e o “FA” não previsto na lista de conferência e a quantidade coletada.
Tolerância: encerrar a conferência
Adaptação na tela Existente Inclusão de colunas:
Posto de separação correspondente ao item.
Operador responsável pela separação

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferência.docx`  
**Heading:** Contexto da solicitação do cliente  
**Score:** — (semantico) | **ID:** bc28e3f77988a4b0

O cliente informou que anteriormente utilizava uma tela antiga de conferência PMB (Figura 1), porém identificou limitações de usabilidade e controle de informações. Recentemente, foi encontrada uma nova tela de conferência (Figura 2), que apresentou melhor visualização, fluxo operacional mais intuitivo e recursos mais adequados ao processo atual.
A partir dessa identificação, o cliente manifestou o interesse em atualizar o sistema para adequar a interface e incorporar as funcionalidades disponíveis na nova tela. As alterações descritas a seguir têm como objetivo alinhar o comportamento da aplicação às expectativas do cliente, mantendo as regras de negócio originais e otimizando a experiência do usuário.
Figura 1 – Tela antiga (utilizada anteriormente pelo cliente)
Figura 2 – Nova tela proposta (modelo de referência para as melhorias)

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferência.docx`  
**Heading:** Aceitar frações de pacotes  
**Score:** — (semantico) | **ID:** ccc1c9a56094d965

Atualmente o campo “Quantidade” aceita apenas valores inteiros.
Será implementada a aceitação de números fracionados (ex: 0,5), permitindo o registro de conferências de meios pacotes, conforme solicitado.
Regra de validação:
O campo “Quantidade” aceitará valores decimais com até uma casa após a vírgula (ex: 0,5 / 1,5 / 2,5).
A soma total será recalculada considerando os valores fracionados.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferência.docx`  
**Heading:** Inclusão do campo “Soma Total”  
**Score:** — (semantico) | **ID:** ba46474feef8d5c0

Atualmente, a tela de conferência não apresenta um campo que consolide a soma total das quantidades registradas.
Será adicionado dois novos campos denominados “Total conferido” e “Total pedido” no final da coluna, responsável por exibir a soma total dos pacotes conferidos/pacotes no pedido.
O cálculo desse campo deverá:
Somar todas as quantidades conferidas, incluindo valores inteiros e fracionados (ex: 1, 0,5, 2,5).
Atualizar automaticamente o valor a cada nova leitura realizada.
Exibir o resultado no rodapé da tela, facilitando o acompanhamento do progresso da conferência.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Aditivo_Integracao_JSON_REV.1.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 93377490e02abab6

O disparo das integrações de confirmação de picking podem ocorrer na checagem da balança em casos que o peso aferido seja o peso esperado daquele volume. Caso contrario pode ser enviado após realização da conferência com a checagem manual que todos os volumes estão na caixa.
Não haverá mudanças no processo da conferência.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** 6d0e4275692410d5

A conferência será de responsabilidade do WMS do cliente.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** 48b333534b9ba9b0

A conferência será de responsabilidade do WMS do cliente.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** a9c5f23a235c3988

A conferência será de responsabilidade do WMS do cliente.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** f8a99028eba5b92e

A auditoria será realizada na mesma saída que será enviado os itens de rejeito, quando a aferição de peso não coincidir com o pedido, o volume deverá ser desviado para essa saída, onde será realizada a auditoria do volume na tela de conferência para rejeito.
Na estação de rejeito, operador ao realizar a leitura do volume, sistema mostrará o motivo do rejeito, se para fazer a auditoria ou rejeito por falha na leitura.
Operador terá a opção de aprovar aquele pedido manualmente, caso ele realize essa aprovação manual, esse registro deverá ficar armazenado com as informações de usuário e motivo da aprovação, para posterior consulta de relatório.
Informações da tela de rejeito: Pedidos, produtos, peso esperado, peso real e motivo do rejeito.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** e741de1dbccb0935

A auditoria será realizada na mesma saída que será enviado os itens de rejeito, quando a aferição de peso não coincidir com o pedido, o volume deverá ser desviado para essa saída, onde será realizada a auditoria do volume na tela de conferência para rejeito.
Na estação de rejeito, operador ao realizar a leitura do volume, sistema mostrará o motivo do rejeito, se para fazer a auditoria ou rejeito por falha na leitura.
Operador terá a opção de aprovar aquele pedido manualmente, caso ele realize essa aprovação manual, esse registro deverá ficar armazenado com as informações de usuário e motivo da aprovação, para posterior consulta de relatório.
Informações da tela de rejeito: Pedidos, produtos, peso esperado, peso real e motivo do rejeito.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Conferência e Fechamento das Caixas  
**Score:** — (semantico) | **ID:** a2621d270eb93e03

Na estação de conferência serão direcionados 100% dos volumes dos pedidos.
Quando o pedido não cabe na quantidade de caixas de papelão que foi informada no início da operação, o operador gera uma nova etiqueta, imprime no sistema Velox e fixa na caixa adicional.
Caso seja adicionado volumes no pedido, a impressão da etiqueta para um novo volume na estação de conferência será de Responsabilidade WMS.
Operador adicionará manualmente o volume adicional no sistema Velox.
Ao finalizar a conferência no WMS, será enviada a integração de conferência com a quantidade de volumes atualizada para o Velox.
Será uma linha tripla distribuída da seguinte forma:
1º (primeira linha - Linha expressa) – Caixas plásticas vindas da linha de separação dos 3 níveis.
2º (segunda linha - Pós Picking) – Linha onde os conferentes irão fazer a conferência de 100% dos pedidos e substituição da caixa plástica para caixa de papelão, que será definida de acordo com a cubagem do pedido, e ao finalizar a conferência, operador sela a caixa e coloca a caixa na segunda linha para ir até o sorter.
3º (terceira linha - Caixas Vazias) que retornam para toda a operação novamente. Scanner fará a leitura da etiqueta, após leitura as caixas serão desviadas para o nível correspondente.
Após finalizar o processo de conferência, a caixa vazia deve retornar para cada nível de separação.
Scanner fixo faz a leitura da etiqueta da caixa plástica, e o sistema automaticamente já identifica para onde essa caixa deverá ser desviada.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Estações de Conferência  
**Score:** — (semantico) | **ID:** 8dd4e427071c95a0

Em cada estação de conferência, 01 (um) Desktop + 1 (um) scanner + 01 (uma) impressora de etiquetas, que auxiliará o Operador com os principais recursos necessários para a operação (Conferência de pedidos, tratativa de rejeito etc.) (Responsabilidade EMIS)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 6c50e52efda69839

Conferência será de responsabilidade do cliente.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** c3b043174a43497e

Na estação de conferência serão direcionados 100% dos pedidos.
Teremos 02 estações de conferência por rua.
Nessa etapa pode acontecer também uma transferência/substituição dos itens para outras caixas, fardos ou até mesmo, unificar as caixas ou fardos, para um melhor condicionamento para carregar a mercadoria no caminhão.
Caso seja necessária essa transferência/substituição de caixa ou fardo, será necessário a impressão de uma nova etiqueta.
Shortpicking
Operador/Supervisor fará o tratamento deste volume e tomará a decisão se completa o pedido com os itens faltantes ou se seguirá com a quantidade separada.
Após esse tratamento, o operador induz a caixa para o cubômetro.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Pedido  
**Score:** — (semantico) | **ID:** 6d24f36600fa0908

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Pedido  
**Score:** — (semantico) | **ID:** eea2505603cb371e

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Pedido  
**Score:** — (semantico) | **ID:** 4681c986e0467258

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Pedido  
**Score:** — (semantico) | **ID:** e351780f362cdd68

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Pedido  
**Score:** — (semantico) | **ID:** 73233085e9103896

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** c39a26cfb50904b7

A conferência é separada sistemicamente e fisicamente por três tipos de itens que são classificados como Frágeis, Não Frágeis e Fora de perfil.
Todas as caixas deverão ser pesadas. Velox não terá responsabilidade de validação de peso, apenas enviará o peso por caixa ao WMS após conferência.
Todos os pedidos são conferidos por completo, realizando a leitura de todos os itens um a um.
O operador irá informar a caixa adequada ao Velox para o Packing dos itens que possuem aquela caixa, o Velox irá acatar a decisão e utilizará as dimensões da caixa selecionada para retomar a integração após a finalização da conferência do volume.
Após realização total da conferência, o sistema irá imprimir a etiqueta de expedição que deve ser colada nas caixas confeccionada no Packing.
As caixas serão induzidas novamente com destino aos PTLs no final da linha.
NOTA: CLIENTE PRECISA ENVIAR IMAGENS DA ETIQUETA

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Conferência Peso  
**Score:** — (nome-topico) | **ID:** 469467f9a54817fe

A primeira conferência que o operador deverá realizar, será por peso.
Operador posiciona o volume na balança e ao aferir o peso total do volume, operador deverá inserir manualmente no sistema Velox, a informação de peso, com isso o sistema Velox irá comparar a informação inserida com a informação de peso calculado no momento do cálculo de cubagem com a tolerância cadastrada e dará o feedback ao operador, se o peso inserido pelo operador está dentro (aprovado) do peso esperado/calculado ou fora (reprovado).
Aprovado: caso o volume receba status Aprovado, o operador deverá seguir com o processo de packing e finalização do volume.
Ao clicar em "Finalizar Conferência", a integração de confirmação de Picking Confirm é enviada para o WMS do cliente.
Reprovado: caso o volume receba status Reprovado, o operador deverá realizar a Conferência Item.
Nesse caso o operador não conseguirá clicar em "Finalizar Conferência" devido status Reprovado, com isso a integração de Picking Confirm não será enviada.
Obs.: O sistema VELOX somente irá enviar a integração de Picking Confirm em casos em que o volume receber o status Aprovado.
Caso o operador não tenha mais ação e precise aprovar a conferência com status reprovado, deverá ter o seu nível de acesso configurado e liberado para esse tipo de ação.
Exemplo sugestão de tela de Conferência Peso (Aprovado):
Exemplo sugestão de tela de Conferência Peso (Reprovado):

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Conferência Item  
**Score:** — (semantico) | **ID:** cd909bde5ae2018e

Em casos que o volume receber o status de Reprovado no status do volume, o operado deverá conferir os itens do volume, acionando o botão "Conferir Volume" na tela do PDV.
Com isso a tela de conferência de itens será aberta, para que o operador realize a leitura do volume e de todos os itens alocados no volume.
Ao realizar a conferência e leitura do código de barras de item a item do volume que está sendo conferido, deverá clicar em "Finalizar Conferência", operador posiciona o volume na balança novamente e ao aferir o peso total do volume, operador deverá inserir manualmente no sistema Velox, a informação recebida, com isso o sistema Velox irá comparar a informação inserida com a informação calculada no momento do cálculo de cubagem com a tolerância cadastrada e dará o feedback ao operador, se o peso inserido pelo operador está dentro (aprovado) do peso esperado/calculado ou fora (reprovado).
Aprovado: caso o volume receba status Aprovado, o operador deverá seguir com o processo de packing e finalização do volume.
Ao clicar em "Finalizar Conferência", a integração de confirmação de Picking Confirm é enviada para o WMS do cliente.
Reprovado: caso o volume receba status Reprovado, o operador deverá realizar a Conferência Item novamente.
Nesse caso o operador não conseguirá clicar em "Finalizar Conferência", com isso a integração de Picking Confirm não será enviada.
Obs.: O sistema VELOX somente irá enviar a integração de Picking Confirm em casos em que o volume receber o status Aprovado na tela de Conferência Peso.
Caso o operador não tenha mais ação e precise aprovar a conferência com status reprovado, deverá ter o seu nível de acesso configurado e liberado para esse tipo de ação.
Exemplo sugestão de tela de Conferência Item:

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 48aa1b3114effdc6

A conferência é separada sistemicamente e fisicamente por três tipos de itens que são classificados como Frágeis, Não Frágeis e Fora de perfil.
Todas as caixas deverão ser pesadas. Velox não terá responsabilidade de validação de peso, apenas enviará o peso por caixa ao WMS após conferência.
Todos os pedidos são conferidos por completo, realizando a leitura de todos os itens um a um.
O Velox dará uma sugestão de caixa porém o operador pode informar a caixa que será utilizada para o Packing dos itens que possuem aquela caixa, o Velox irá acatar a decisão e utilizará as dimensões da caixa selecionada para retomar a integração após a finalização da conferência do volume.
Após realização total da conferência, o sistema irá imprimir a etiqueta de expedição que deve ser colada nas caixas confeccionada no Packing.
As caixas serão induzidas novamente com destino aos PTLs no final da linha.
NOTA: CLIENTE PRECISA ENVIAR IMAGENS DA ETIQUETA

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** d86519667216a7f3

A conferência é separada sistemicamente e fisicamente por três tipos de itens que são classificados como Frágeis, Não Frágeis e Fora de perfil.
Todas as caixas deverão ser pesadas. O WCS não terá responsabilidade de validação de peso, apenas enviará o peso por caixa ao WMS após conferência.
Todos os pedidos são conferidos por completo, realizando a leitura de todos os itens um a um.
O WCS dará uma sugestão de caixa, porém o operador pode informar a caixa que será utilizada para o Packing dos itens que possuem aquela caixa, o WCS irá acatar a decisão e utilizará as dimensões da caixa selecionada para retomar a integração após a finalização da conferência do volume.
Após realização total da conferência, o sistema irá imprimir a etiqueta de expedição que deve ser colada nas caixas confeccionada no Packing.
As caixas serão induzidas novamente com destino aos PTLs no final da linha.
NOTA: CLIENTE PRECISA ENVIAR IMAGENS DA ETIQUETA

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Estações de Conferência/Embalagem  
**Score:** — (semantico) | **ID:** 7bd8bb220da14968

Após passarem por todas as estações de separação correspondentes ao pedido vinculado a elas, as caixas deverão ser direcionadas para as estações de conferência. Essas estações são compostas por duas esteiras acumulativas sobrepostas, nas quais as caixas chegarão pela esteira inferior.
O operador responsável pela conferência deve escolher uma caixa próxima a ele e verificar todos os itens que compõem o pedido. É importante ressaltar que este processo de conferência não está incluso no escopo do Velox e, portanto, deve ser realizado por meio do WMS da TPC.
Caso o operador identifique alguma divergência entre a ordem do pedido e os itens presentes na caixa, ele deve induzir a caixa na esteira superior para que seja direcionada para o setor denominado como "Hospital", esse setor tem como foco solucionar esse tipo de problema.
Caso operador receba uma caixa que não tenha desviado no nível para separação dos produtos, teremos uma integração em que o WMS atualizará a integração de pedidos para esse volume específico.
Os detalhes dessa integração estão descritos no item 3.3.
Nesse momento, é importante ressaltar que o sistema Velox não deve ser utilizado, pois o fluxo dessa operação de tratativa nessa estação será definido pelo WMS da TPC. Após a caixa ser tratada, o operador da estação "Hospital" deve reinseri-la na linha inferior. Dessa forma a caixa retornará para as estações de conferência e embalagem, para ser realizada uma nova conferência.
Caso operador ao realizar a indução da caixa novamente na esteira, coloque na esteira superior, sem retornar para a conferência, a mesma seguirá para rejeito no sorter, e será tratada nessa estação.
Se o operador não identificar nenhum problema com o pedido durante a conferência, a caixa deverá ser lacrada antes de ser encaminhada para a expedição. Para isso, o operador deverá colocar a caixa na esteira superior, onde será encaminhada para o Sorter. Nesse caso o WMS enviará uma integração informando que a conferência está “OK” e que deve seguir para o Sorter.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Estações de Conferência/Embalagem  
**Score:** — (semantico) | **ID:** d9d6076fb36254f8

Após passarem por todas as estações de separação correspondentes ao pedido vinculado a elas, as caixas deverão ser direcionadas para as estações de conferência. Essas estações são compostas por duas esteiras acumulativas sobrepostas, nas quais as caixas chegarão pela esteira inferior.
O operador responsável pela conferência deve escolher uma caixa próxima a ele e verificar todos os itens que compõem o pedido. É importante ressaltar que este processo de conferência não está incluso no escopo do Velox e, portanto, deve ser realizado por meio do WMS da TPC.
Caso o operador identifique alguma divergência entre a ordem do pedido e os itens presentes na caixa, ele deve induzir a caixa na esteira superior para que seja direcionada para o setor denominado como "Hospital". Esse setor tem como foco solucionar esse tipo de problema.
Nesse momento, é importante ressaltar que o sistema Velox não deve ser utilizado, pois o fluxo dessa operação de tratativa nessa estação será definido pelo WMS da TPC. Após a caixa ser tratada, o operador da estação "Hospital" deve reinseri-la na linha inferior. Dessa forma a caixa retornará para as estações de conferência e embalagem, para ser realizada uma nova conferência.
Se o operador não identificar nenhum problema com o pedido durante a conferência, a caixa deverá ser faturada e lacrada antes de ser encaminhada para a expedição. Para isso, o operador deverá colocar a caixa na esteira superior, onde será encaminhada para o Sorter. Nesse caso o WMS enviará uma integração informando que a conferência está “OK” e que deve seguir para o Sorter.

---
**Origem:** [I23] 2023 — `I23-1604 - PROJETO CARDEX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** e982d6a55d7b4d45

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes conferidos na esteira, ou seja, esta aplicação executara a rotina de CONFERÊNCIA tendo como papel fundamental a interface entre os sistemas WMS e VELOX com chão de fábrica Invent.
A aplicação da VELOX (citada acima) necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web (JSON Rest), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** bf900df2edd7df1f

Conferência será de responsabilidade do cliente.
A conferência do volume será realizada pelo coletor do cliente, o sistema Velox irá aguardar a integração do WMS informando que o volume foi conferido e está ok, para que no sistema Velox o volume seja concluído.
Para volumes que forem direcionados para conferência, Velox não deve enviar a integração de picking confirm.
Ao final da linha de separação e antes de chegar no sorter, teremos uma estação de conferência.
Nessa estação, serão enviados os pedidos nos seguintes cenários:
ShortPicking
Flag por Cliente
100% clientes novos
% de pedidos
ShortPicking
Para caso em que houver shortpicking na separação, ou seja, quando o operador separar a quantidade inferior a quantidade solicitada para separação. Nesse caso esse pedido deverá seguir para a conferência para que o pedido seja analisado e tratado e na conferência é tomada a decisão se o pedido segue com a quantidade (inferior) separada ou é ajustado para a quantidade solicitada, para esse caso de shortpicking, a quantidade separada será diferente da quantidade solicitada.
Flag por Cliente
Existirão clientes que deverão ter sempre 100% de seus pedidos direcionados para a conferência, esses clientes deverão vir com uma identificação no momento da integração para que o Velox consiga reconhecer que esse cliente se trata de um cliente nessa situação de conferência.
O campo "conferencia" na integração de "Wave" deverá vir preenchido com "Y".
100% Clientes Novos
Clientes novos, deverão ser direcionados 100% para conferência.
WMS deverá informar na integração quais são os clientes que são novos, com isso o Velox realiza o desvio dos volumes desse cliente para a conferência.
O campo "cliente_novo" na integração de "Wave" deverá vir preenchido com "Y".
Porcentagem de Pedidos
O Velox deverá encaminhar pedidos para a conferência conforme o parâmetro escolhido no sistema para essa operação. O operador pode alterar essa porcentagem no sistema Velox, por exemplo, se na onda contém 100 (cem) volumes e esse parâmetro estiver configurado com 50%, dos 100 (cem) volumes 50 (cinquenta) irão para o rejeito.
Esse parâmetro é calculado apenas fracionados, full case não se encaixa no cálculo.
O envio dos volumes deve ser randômico e não sequencial.
Obs.: essa regra deve considerar apenas os pedidos que não contenham nenhuma das regras anteriores para conferência. Por exemplo: se na onda existir clientes com flags de conferência, os volumes desses clientes não devem entrar nesse cálculo de porcentagem.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Conferência Peso  
**Score:** — (nome-topico) | **ID:** 779e7f07916546ed

A primeira conferência que o operador deverá realizar, será por peso.
Operador posiciona o volume na balança e ao aferir o peso total do volume, operador deverá inserir manualmente no sistema Velox, a informação de peso, com isso o sistema Velox irá comparar a informação inserida com a informação de peso calculado no momento do cálculo de cubagem com a tolerância cadastrada e dará o feedback ao operador, se o peso inserido pelo operador está dentro (aprovado) do peso esperado/calculado ou fora (reprovado).
Aprovado: caso o volume receba status Aprovado, o operador deverá seguir com o processo de packing e finalização do volume.
Ao clicar em "Finalizar Conferência", a integração de confirmação de Picking Confirm é enviada para o WMS do cliente.
Reprovado: caso o volume receba status Reprovado, o operador deverá realizar a Conferência Item.
Nesse caso o operador não conseguirá clicar em "Finalizar Conferência" devido status Reprovado, com isso a integração de Picking Confirm não será enviada.
Obs.: O sistema VELOX somente irá enviar a integração de Picking Confirm em casos em que o volume receber o status Aprovado.
Caso o operador não tenha mais ação e precise aprovar a conferência com status reprovado, deverá ter o seu nível de acesso configurado e liberado para esse tipo de ação.
Exemplo sugestão de tela de Conferência Peso (Aprovado):
Exemplo sugestão de tela de Conferência Peso (Reprovado):

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Conferência Item  
**Score:** — (semantico) | **ID:** cbc2393551b01b95

Em casos que o volume receber o status de Reprovado no status do volume, o operado deverá conferir os itens do volume, acionando o botão "Conferir Volume" na tela do PDV.
Com isso a tela de conferência de itens será aberta, para que o operador realize a leitura do volume e de todos os itens alocados no volume.
Ao realizar a conferência e leitura do código de barras de item a item do volume que está sendo conferido, deverá clicar em "Finalizar Conferência", operador posiciona o volume na balança novamente e ao aferir o peso total do volume, operador deverá inserir manualmente no sistema Velox, a informação recebida, com isso o sistema Velox irá comparar a informação inserida com a informação calculada no momento do cálculo de cubagem com a tolerância cadastrada e dará o feedback ao operador, se o peso inserido pelo operador está dentro (aprovado) do peso esperado/calculado ou fora (reprovado).
Aprovado: caso o volume receba status Aprovado, o operador deverá seguir com o processo de packing e finalização do volume.
Ao clicar em "Finalizar Conferência", a integração de confirmação de Picking Confirm é enviada para o WMS do cliente.
Reprovado: caso o volume receba status Reprovado, o operador deverá realizar a Conferência Item novamente.
Nesse caso o operador não conseguirá clicar em "Finalizar Conferência", com isso a integração de Picking Confirm não será enviada.
Obs.: O sistema VELOX somente irá enviar a integração de Picking Confirm em casos em que o volume receber o status Aprovado na tela de Conferência Peso.
Caso o operador não tenha mais ação e precise aprovar a conferência com status reprovado, deverá ter o seu nível de acesso configurado e liberado para esse tipo de ação.
Exemplo sugestão de tela de Conferência Item:

---
**Origem:** [I23.1701] 2023 — `I23.1701 - PROJ OLIMPO - ESPECIFICACAO DE SOFTWARE - ADITIVO.docx`  
**Heading:** Tela – Conferência (4)  
**Score:** — (semantico) | **ID:** 3bbb07f3a20c87b8

Desenvolver tela de conferência para operador realizar a conferência dos produtos após a separação.
Para realizar a conferência, o operador deverá realizar a leitura da caixa plástica, e a leitura de item a item até finalizar todos os itens e quantidades.
Ao ser identificado a caixa plástica, MFC deve apresentar a lista dos produtos que deve estar na caixa plástica com as quantidades por produto.
Operador ao realizar a leitura do item com QR Code ou código de barras, deve apresentar que a conferência do produto foi realizada, ao finalizar a conferência de todos os produtos da caixa, MFC deve informar que a conferência dessa caixa plástica foi finalizada.
Para realizar a conferência, o operador precisará realizar a leitura/bipar item a item.
Obs.: atualmente é utilizado uma planilha para efetuar as conferências.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 356d1c3c1c704f00

Conferência será de responsabilidade do cliente.
A conferência do volume será realizada pelo coletor do cliente, o WCS irá aguardar a integração do WMS/KAIZEN informando que o volume foi conferido e está ok, para que no WCS o volume seja concluído.
Ao final da linha de separação e antes de chegar no sorter, teremos duas estações de conferência, nessas estações passarão 100% dos pedidos

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 127c717396d7f7d4

Conferência será de responsabilidade do cliente.
A conferência do volume será realizada pelo coletor do cliente, o WCS irá aguardar a integração do WMS/KAIZEN informando que o volume foi conferido e está ok, para que no WCS o volume seja concluído.
Ao final da linha de separação e antes de chegar no sorter, teremos duas estações de conferência, nessas estações passarão 100% dos pedidos

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Validação SKU x Pedido (Cross Check)  
**Score:** — (semantico) | **ID:** 5d89df7f565b66da

O Cross-Check de Pedidos é uma verificação de dados que ocorre em tempo real no Portal. O processo é desencadeado pela leitura física do código e a validação lógica é executada imediatamente pelo WCS para determinar o destino do volume.
Fluxo de Cross-Check:
Leitura do Volume: O volume passa pelo Portal de Leitura de 3 faces, e a câmera captura a etiquetaOp do volume e o SKU.
Validação WCS: O WCS realiza a verificação de dados em duas etapas:
Verificação 1 (Destino): Verifica os dados do pedido associado à etiquetaOp (conforme o fluxo já existente).
Verificação 2 (Cross-Check): O WCS deve cruzar o SKU que está no produto com os itens que deveriam compor o pedido (obtidos na Integração de Volumes WMS → WCS).
Decisão de Desvio:
Sucesso (Cross-Check OK): Se o SKU lido pertencer ao pedido associado à etiquetaOp, o WCS enviará a instrução correta ao PLC, indicando a Rampa (Chute) de desvio.
Falha (Alerta de Erro): Se o SKU lido NÃO pertencer ao pedido associado à etiquetaOp (ou se o produto já foi separado), o WCS deve tratar o volume como uma falha de validação e enviá-lo automaticamente para a Rampa de Rejeito.
Classificação de Rejeito por Cross-Check
O volume que falhar na Validação SKU x Pedido será direcionado para a Rampa de Rejeito. O WCS deve registrar o motivo de rejeito como "Produto Incorreto / SKU Divergente" para que o operador na Rampa de Rejeito possa realizar o croos-check de forma manual e reinduzir o volume no sorter ou levar ele até a rampa de destino.

---
**Origem:** [I23.418] 2023 — `I21.103-Projeto Reisado - ESPECIFICACAO DE ADITIVO.docx`  
**Heading:** Fluxo Detalhado do Processo de Picking  
**Score:** — (semantico) | **ID:** 031d2b9ba597012c

Realização do Picking: O picking na linha 3 será feito de forma usual, com a exclusão dos itens com marcação “X” no cálculo do peso.
Conferência de Peso: Quando a caixa passar pela BAL03, o sistema irá verificar o peso, considerando apenas os itens da linha 3.
Seguindo o Fluxo com Peso Correto: Caso o peso esteja correto, o pedido será enviado para JP81/82 para continuação do picking no Museu.
Caso de Peso Incorreto: Se o peso estiver incorreto, o pedido será retornado para a conferência, onde será ajustado e seguirá o fluxo novamente.

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `Conferência Diamante - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Solicitação de nova para conferênciaParte superior do formulário  
**Score:** — (semantico) | **ID:** fc0091ac8cb1efe1

Para suprir as necessidades passadas pelo cliente no MFC irá existir acessos a tela de conferência baseadas em níveis de acesso, ou seja, será criado um nível de acesso no MFC para que somente os usuários com essa permissão de nível de acesso possa visualizar de maneira completa como detalhado no item  2. Conferência fracionados atual.
Para os demais usuários que não poderão ter acesso a tela de conferência fracionado com é hoje, será alterado as permissões de acesso de telas presentes no nível de acesso relacionado a conferência, para que os conferentes atuais da operação terão disponíveis na tela de conferência as seguintes informações:
Código Produto – Código SKU do produto  vide nas embalagens dos produtos.
Descrição Produto – Descrição ou nomenclatura do produto.
Endereço Picking – Endereço onde está alocado o produto e onde foi realizada a separação do mesmo
Todo processo de tratativa de itens pendentes (faltantes), shortpicking ou sobra de unidades será tratado pelos usuário com o novo nível de acesso, para que isso funcione de maneira correta, o operador de conferência deve contar a quantidade de itens do mesmo SKU dentro da caixa e utilizar o multiplicador da tela para informar a quantidade de itens, após informar a quantidade o operador digita o código SKU ou faz a leitura com um scanner de mão do código EAN ou SKU do produto e informa o lote, assim o MFC irá avaliar se a quantidade informada para aquele SKU corresponde com a quantidade informada na integração do pedido, se o valor for equivalente ao solicitado na integração do pedido, na linha onde contem as informações do produto ficará verde para informar que a quantidade está correta, assim como já ocorre hoje, para casos onde a quantidade informada na conferência for diferente da quantidade informada na integração do pedido, após o operador realizar o processo de seleção da quantidade de item e informar qual produto (SKU) e o lote ele está conferindo, no MFC a linha onde contém as informações do produto fica vermelha e o MFC não permitirá que mais ou menos produto do mesmo SKU sejam informados e também não permitirá a finalização de conferencia para os usuários que não estão no novo nível de acesso caso algum item apresente quantidade divergente com a quantidade separada, da mesma maneira não será possível reiniciar a conferência.Parte inferior do formulário Dessa maneira quando ocorrer erros operacionais eles devem ser tratados pelos usuários com as permissões do novo nível de acesso.
Os usuários com o novo nível de acesso terão todas as funcionalidades já existentes na tela de conferência como já informador acima.
Exemplo da tela para os conferentes com o nível de acesso atual:

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Validação de campo “valida”  
**Score:** — (semantico) | **ID:** ffd17c920c9c7332

Caso o campo “valida” esteja com a informação “true”, significa que o volume está validado pelo sistema do cliente.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Validação de campo “destino”  
**Score:** — (semantico) | **ID:** 5c48c906a61204bf

Caso o campo “destino” esteja com a informação de um destino valido/cadastrado no sistema Velox, significa que o volume pode ser direcionado a sua rampa de destino.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** e08cfaaf1e17e73a

Teremos uma estação de conferência onde serão enviados os volumes que houver short picking na separação, e volumes rejeitados por peso.
Após o volume ser separado, ele seguira para a área de conferência, onda na esteira existe uma balança que irá aferir o peso do volume, caso o peso esteja de acordo com a tolerância cadastrada no Velox, o volume seguirá para área de packing, caso o peso não esteja de acordo com o a tolerância cadastrada, será direcionado para a conferência.
Após a conferência, operador induz novamente na linha para ser direcionada para o packing e ser realizada o fechamento da caixa e seguir para o sorter.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Tela de conferência  
**Score:** — (semantico) | **ID:** 8fc8e9598cd61712

Na tela de conferência, o operador irá realizar a leitura do QR Code do volume recebido, com isso o Velox mostrará a lista de produtos esperados nesse volume, operador realiza a leitura dos códigos de barras de todos os produtos para conferir item e quantidade, quando atingir a quantidade solicitada do produto, a linha do produto é concluída como conferido.
Operado realiza esse processo com todos os produtos do volume, ao finalizar a conferência de todos os produtos no volume, caso a conferência seja concluída com 100% dos pedidos solicitados separados, o sistema Velox enviará a integração de confirmação de separação para o WMS.
Caso exista algum produto com shortpicking no volume, operador deverá resolver na conferência, se inclui a quantidade do produto faltante ou será enviado com a quantidade separada, ao confirmar essa operação será enviada a integração de confirmação de separação para o WMS.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** b818ae632d0ecf42

Na estação de conferência serão direcionados os pedidos que foram realizados shortpicking e franqueados (Que estiverem com flag ativo)
Shortpicking
Para esse tipo de pedido o operador da estação de conferência, fara o tratamento para os itens de alta relevância (Alto índice de reclamação por falta), itens que não são considerados alta relevância, poderão seguir normalmente. Após esse tratamento, operador ao confirmar a conferência, VELOX envia integração de confirmação de separação dos itens separados para o pedido. Esses itens de alta relevância deverão vir identificados na integração.
Franqueados
Cliente enviará via integração a informação de todos os franqueados que deverão seguir para a conferência, esses tipos de franqueado seguirão para conferência independente da separação, esses pedidos serão conferidos e após a validação VELOX envia integração de confirmação de separação.
Operador terá a possibilidade de cadastrar, editar e excluir franqueados no sistema Velox, e também ativar/desativar flag que indica a necessidade de ir para conferência.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 4ce791f262c7ad3a

O SISTEMA WCS DEVE PERMITIR O CADASTRO DAS IMPRESSORAS DE MANEIRA OTIMIZADA E PRÁTICA PARA REALIZAR VINCULO ENTRE IMPRESSORA E POSTO.
A conferência dos volumes separados será de responsabilidade do WCS.
Serão em torno de 24 estações de conferência no final da separação de todos os produtos separados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema WCS informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados devem ser conferidos.
ENDEREÇO/ITEM/LOTE/UNIDADE DE MEDIDA/ QTD. CONFERIDA
PARA CONFERÊNCIA DE ITENS DE MARKETING ESSE PROCESSO SERÁ FEITO ATRAVÉS DE UMA FLAG QUE GARANTIRÁ QUE TODOS OS ITENS FORAM CONFERIDOS.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidade na conferência, deverá ter permissão superior no sistema WCS.
No processo de conferência, WCS não deve permitir a troca de lote.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
OBS: Itens de Marketing não tem rastreabilidade (string para leitura), é necessário deixar essa opção na tela de conferência.
Teremos impressão de laudos na tela de conferência.
Teremos opção de reimpressão na tela de conferência.
FLAG INDICANDO SE O PRODUTO POSSUI OU NÃO LAUDO
Tratativas de Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido. Liberação será realizada pelo departamento de qualidade.
Quando ocorrerem as falhas descritas acima e o operador não conseguir resolver o problema de maneira imediata, será necessário acionar a Liderança para proceder com a liberação ou correção. O acesso a essa liberação será protegido por uma senha de segurança.
Ação: Após a falha ser detectada, o operador será direcionado para uma tela de liberação, onde será necessário inserir uma senha para liberar o processo de conferência.
Senha de Liberação: Apenas membros da Liderançaterão acesso à senha, garantindo que a liberação só seja realizada por pessoas autorizadas.
Fluxo de Liberação
O operador identifica que não consegue corrigir a falha e solicita a liberação.
O sistema exibe uma tela de login onde o operador deve inserir a senha da Liderança.
Uma vez validada a senha, o operador poderá continuar a operação normalmente, ou o Liderança poderá revisar o processo e tomar as ações corretivas necessárias.
Geração de Etiqueta e Rastreabilidade de Pedido
Cada etiqueta virtual de separação será gerada no Order Start e associada a um pedido e a um volume específico.
As informações do pedido e do volume serão armazenadas no sistema WCS para posterior rastreamento.
Durante o processo de separação, o coletor de dados será utilizado para registrar as informações essenciais de rastreabilidade. As strings lidas no coletor incluem:
SKU do produto
Localização de armazenamento
Volume de separação
Quantidade do produto separado
Código de barras da caixa virtual
Rastreabilidade de Conferência
Cada ação de conferência realizada na estação de conferência será registrada, incluindo as seguintes informações:
Pedido: Número do pedido associado à separação.
Volume: Volume do pedido ou caixa associada, garantindo que cada item seja rastreado individualmente.
Strings Lidas no Coletor: Cada leitura realizada pelo coletor será registrada. Essas strings incluem os códigos de barras dos produtos e das caixas.
Log de Erro: Caso ocorra um erro durante a conferência (como falha na leitura do código de barras, erro de quantidade ou erro de localização), o erro será registrado no sistema com uma mensagem de erro específica, permitindo rastrear a causa da falha.
Status de Erro: O status de cada operação será registrado. Caso algum erro ocorra, o status será marcado como erro, e o sistema precisará gerar uma notificação para os operadores.
Número único da Coleta: Código da Pega
Usuário que realizou a coleta: Usuário que realizou a coleta ou liderança que liberou o volume.
Identificação do Operador
O operador responsável pela conferência será registrado, com o e-mail do operador (SSO)
Isso permitirá a rastreabilidade do operador e ajudará a identificar qualquer problema relacionado a erros de separação.
Data e Hora
Cada ação realizada (separação, conferência, erro) será registrada com a data e hora precisas da operação.
Essa informação será crucial para auditoria e para análise posterior do desempenho do processo.
O processo de rastreabilidade será registrado em um formato que pode ser visualizado em tabela exibida na tela do WCS.
Detalhamento das Informações:
Pedido: O número do pedido que está sendo processado.
Volume: Identificação do volume ou caixa.
Strings Lidas: Cada produto e sua respectiva quantidade, localização e código de barras lido pelo coletor.
Log de Erro: Detalhes sobre qualquer erro ocorrido (exemplo: falha de leitura, discrepância de quantidade).
Status de Erro: O status atual da operação (se ocorreu erro ou está OK).
Operador: Nome ou identificação do operador responsável pela ação.
Data e Hora: O timestamp de quando a ação foi realizada.
Itens de Marketing sem Rastreabilidade
Para itens de Marketing, será necessário deixar uma flag na tela de conferência indicando que esses itens não possuem rastreabilidade. A string para leitura do coletor não será aplicável a esses produtos, pois não haverá código de barras associado a cada volume. Essa opção na tela de conferência permitirá que o operador saiba que, ao separar produtos de marketing, a rastreabilidade convencional não será necessária.
Tela de Conferência Impressão de Laudos na conferência
Além da rastreabilidade, será incluída a funcionalidade de impressão de laudos na tela de conferência. Ao conferir os produtos, caso o sistema detecte que o pedido exige a impressão de laudos (para produtos controlados ou específicos), o sistema deve imprimir laudos automaticamente na interface de conferência ao término da checagem do produto. Esta funcionalidade garantirá que todos os produtos sejam acompanhados dos documentos necessários, atendendo a requisitos regulatórios ou operacionais.
REIMPRESSAO DE LAUDOS
DEVERÁ TER UMA TELA DE REIMPRESSAO DE LAUDOS E PODE SER FEITA POR QUALQUER OPERADOR, CADA LINHA SERÁ REPRESENTADO TODOS OS LAUDOS DE UM RESPECTIVO VOLUME.
REIMPRESSÃO DE ETIQUETA POR VOLUME
A REIMPRESSÃO SERÁ FEITA EM UMA TELA DEDICADA PARA ESSA FUNÇÃO ONDE SÓ SERA PERMITIDO A REIMPRESSAO COLOCANDO UM USUARIO DE LIDERANÇA.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 67994ab73d34d597

Na estação de conferência haverá 4 (quatro) métodos de avaliação dos volumes sendo eles:
Conferência por peso – O Velox de acordo com as informações recebidas na integração do WMS realiza a soma do peso de todos os produtos que estação dentro da caixa e soma também o peso da caixas que esta informado no cadastro de caixas dentro do Velox, após essa soma o Velox avalia o perfil de tolerância (em gramas) para o peso esperado para a caixa em questão, caso a caixa tenha o peso maior que o máximo esperado ou menor que o mínimo esperado ela será direcionada para a conferencia para receber a avaliação do operador e entender o porquê a caixa foi rejeitada.
Percentual por loja – No Velox será possível a conferência por loja/filial de acordo com o percentual  predeterminado dentro do Velox, dessa foram o sistema avalia quantas caixas por loja vieram dentro da wave (onda) e identifica quantas caixas de uma determinada loja precisam irá para a conferência, independente da regra de pesagem.
Percentual geral – No Velox possível habilitar a conferência percentual sobre todas as caixas da wave (onda) de acordo com o percentual predeterminado dentro do Velox, seguindo a mesma regra de contagem de caixas por wave (onda).
Por quantidade – No Velox será possível determinar a cada quantas caixas 1 (uma) será rejeitada, sendo determinado a cada quantas caixas o Velox deve rejeitar 1 (uma).
Todas as regras de rejeito e conferência podem ser habilitadas ou desabilitadas, sendo possível utilizar uma regra por vez.
Shortpicking – Operador/Supervisor fará o tratamento deste volume e tomará a decisão se completa o pedido com os itens faltantes ou se seguirá com a quantidade separada.
Teremos 1 estação de conferência.
A informação de informação do motivo de rejeito deve ser apresentada ao usuário na tela de conferência, informando o motivo da caixa ser direcionada na conferência.
Para as tratativas de peso teremos 1 (uma) balança na automação

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** CONFERÊNCIA  
**Score:** — (nome-topico) | **ID:** a17fed35daa7bcd8

Toda conferência será de responsabilidade WMS fazendo todas as análises e tratativas no próprio sistema.
O sistema MFC será responsável apenas em desviar para conferência as caixas, seguindo diretrizes pré-determinadas.
Regra Adicional
Peso Aferido:
Haverá uma balança antes da conferência para verificar o peso dos volumes, desconsiderando a tara da primeira pesagem no início da operação.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** e901e9c84b6fd855

No final da linha de separação, operador terá uma estação de conferência para realizar o processo de envio de confirmação de picking daquele volume recebido.
Ao receber o volume de separação, operador deverá acessar o Velox, e realizar a leitura daquele volume, para que nesse momento o Velox realize a integração de confirmação de picking para o WMS, nesse momento ao receber a integração, WMS realiza a impressão da etiqueta.
Velox, somente irá enviar a integração quando o volume for lido nessa tela que será desenvolvida no Velox.
O cliente não confere todos os volumes, porém, caso seja necessária a conferência visual de alguns volumes, realiza nessa estação.
O operador poderá escolher qual volume irá realizar a conferência, com isso, no sistema Velox entrará na tela de conferência e ao realizar a leitura da caixa plástica de separação na tela deverá apresentar a lista de produtos separados naquela caixa.
Velox realiza a integração de confirmação de picking somente quando operador realizar o processo de leitura da caixa de separação nessa tela do Velox.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Pedido  
**Score:** — (semantico) | **ID:** 8b482d3833b1dae7

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Pedido  
**Score:** — (semantico) | **ID:** 79b44b87c1097cf3

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Não escopo  
**Score:** — (semantico) | **ID:** d7e2eeb5cb011dbd

Segue abaixo os conceitos, método e soluções que não estão contemplados para esse projeto I24.173 Candelária:
Picking By Ligth - PBL
Picking Cart - PC
Picking to monitor
Put to monitor - PTM
Put to Ligth - PTL
Put to WalL - PTW
Conferência de coleta
Separação Fraciona e Full Case
Order Start
Alocação de volumes no pallet
Abertura e fechamento de pallet
Manifesto de embarque
Picking Túnel
Pesagem de volumes
Dimensionamento de volumes
Recirculação no Sorter
Leitores RFID
Alocação de rotas
Etiquetagem de volumes
Impressão de etiquetas
Impressora ou etiquetadora manual/automática
Controle de peso e dimensões do pallet
Serviço de exportação de arquivos
Sugestão de alocação

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** CONFERÊNCIA  
**Score:** — (nome-topico) | **ID:** 5b8f98878c6d790c

A definir

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 48024bb4b8d9d14b

Todos os volumes que ocorrer corte (shortpicking) ou estiverem nas categorias pré-definidas pela operação devem ser desviadas para o setor de conferência onde o volume será avaliado.
Ao receber o volume, o operador deverá realizar a leitura da etiqueta da caixa e o sistema informar qual o motivo do volume estar na conferência e a lista dos itens que pertencem ao volume. O sistema deixará evidente os itens que tiveram corte.
Para a conferencia dos itens deverá ser lido item a item para contabilizar a contagem e depositar em uma nova caixa. O WCS não deve permitir a reposição de itens cortados durante na separação para não prejudicar o FEFO dos itens. Ao final da conferencia, será enviado a relação de tudo que foi lido pelo conferente para confirmação dos itens para o WMS. Será entendido que o volume finalizou e que todos os itens pendentes deste volume foram cortados e este corte pode ser aceito ou não pelo WMS.
Ao finalizar a conferência de todos os itens, o sistema deve solicitar a leitura da nova etiqueta do volume pois no processo será realizado o transbordo dos itens. O sistema deve entender que a caixa anterior ficará livre e a nova caixa informada recebera todos os itens conferidos.
Caso o corte não for aceito, o WMS enviará novamente um novo romaneio com os itens que foram cortados.
Se uma caixa chegar a conferencia por motivo de NOREAD no leitor, o conferente será avisado e deverá apenas confirmar a finalização da caixa sem a necessidade de ler item a item do volume.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Hospital  
**Score:** — (semantico) | **ID:** 85910765e7e7954b

Caixas com faltas de produtos ou que tenham obtido NOREAD no ponto de decisão são direcionadas automaticamente para o setor de conferência "Hospital", independentemente de serem pedidos B2B ou B2C.
No Hospital, o conferente terá duas possibilidades:
Verificar no WMS e reprocessar manualmente as estações necessárias no WCS.
Diretamente no WCS, através de uma tela onde o operador realiza a leitura da caixa e informa se ela pode ser recolocada na linha ou não.
Durante esse processo, o WCS troca integrações com o WMS para obter o diagnóstico final e apresentar a informação ao operador.
Regras de Retorno à Linha de Separação:
Caso existam itens faltantes no pedido, a caixa deve retornar à linha de separação para que os produtos pendentes sejam coletados.
Esse retorno é manual, com o operador reposicionando a caixa no Order Start principal ou no Order Start do respectivo piso.
Após a consulta da caixa no WCS, o WMS reavalia os itens pendentes e informa ao WCS onde a caixa deve ser desviada novamente até a conclusão da separação.
Caso o produto ainda não tenha sido reabastecido, o WMS informará ao WCS que a caixa continua bloqueada para reindução. Enquanto esse status não for alterado, a caixa deve permanecer no Hospital.
Volumes completados diretamente no Hospital: Se o volume for finalizado manualmente no Hospital, o operador deverá encaminhá-lo para a próxima etapa da operação. O WMS deve informar ao WCS quando o volume for finalizado, para que o WCS considere o ciclo encerrado.
Está prevista posteriormente a criação de uma nova área de Hospital, com segregação de volumes B2C e B2B.
Integração Pós-Hospital (Shortpicking)
Sempre que houver alteração no conteúdo previsto da caixa após sua passagem pelo Hospital, uma integração de shortpicking deve ser enviada ao WCS.
Regras importantes:
O WCS deve sempre considerar a última integração recebida para o volume informado, sobrescrevendo qualquer informação anterior.
Para pedidos do tipo B2C Multi, essa integração indica que a coleta da caixa foi concluída com sucesso, mas com alterações no conteúdo planejado.
A partir dessa atualização, o WCS deverá aguardar apenas os itens informados nesta integração ao chegarem no PTW (Put to Wall) para concluir o processo de separação.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** f987b05d2a56aa00

Após a linha de picking FlowRack terá um portal com uma antena RFID para detectar se os itens previstos no volume (pega) estão presentes dentro da caixa.
O volume será direcionado para a conferência nos seguintes cenários:
Volumes (pega) que foi realizado shortpicking
Volumes (pega) que não constam os itens que foram coletados durante o processo de separação
Categoria/filtro parametrizado pela operação
Ao receber o volume (pega), o operador deverá realizar a leitura da etiqueta da caixa e o sistema informar qual o motivo do volume (pega) estar na conferência e a lista dos itens que pertencem ao volume (pega). O sistema deixará evidente os itens que tiveram corte.
Para a conferência dos itens, cada item deverá ser lido individualmente para contabilizar a quantidade e ser depositado em uma nova caixa. Ao final da conferência, será enviada ao WMS a relação de todos os itens lidos pelo conferente, para confirmação dos produtos. Em caso de falta de produto no estoque, o operador deverá selecionar se deseja cortar esses itens ou enviá-los para um novo volume (pega) no Order Start, para que o operador responsável colete os itens pendentes.
Obs: Caso o conferente opte pelo corte do item, será necessária uma autenticação de um supervisor. O WCS irá registrar os operadores que realizarem as conferências de cada volume (pega) durante a operação.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 1debad3e4130902e

Após a linha de picking FlowRack terá um portal com uma antena RFID para detectar se os itens previstos no volume (pega) estão presentes dentro da caixa.
O volume será direcionado para a conferência nos seguintes cenários:
Volumes (pega) que foi realizado shortpicking
Volumes (pega) que a quantidade detectada pela antena não for igual a esperada.
Categoria/filtro parametrizado pela operação
Ao receber o volume (pega), o operador deverá realizar a leitura da etiqueta da caixa e o sistema informar qual o motivo do volume (pega) estar na conferência e a lista dos itens que pertencem ao volume (pega). O sistema deixará evidente os itens que tiveram corte.
Para a conferência dos itens, cada item deverá ser lido individualmente para contabilizar a quantidade e ser depositado em uma nova caixa. Ao final da conferência, será enviada ao WMS a relação de todos os itens lidos pelo conferente, para confirmação dos produtos. Em caso de falta de produto no estoque, o operador deverá selecionar se deseja cortar esses itens ou enviá-los para um novo volume (pega) no Order Start, para que o operador responsável colete os itens pendentes.
Obs: Caso o conferente opte pelo corte do item, será necessária uma autenticação de um supervisor. O WCS irá registrar os operadores que realizarem as conferências de cada volume (pega) durante a operação.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 6996d8ae1ef21f7b

Após a linha de picking FlowRack terá um portal com uma antena RFID para detectar se os itens previstos no volume (pega) estão presentes dentro da caixa.
O volume será direcionado para a conferência nos seguintes cenários:
Volumes (pega) que foi realizado shortpicking
Volumes (pega) que não constam os itens que foram coletados durante o processo de separação
Categoria/filtro parametrizado pela operação
Ao receber o volume (pega), o operador deverá realizar a leitura da etiqueta da caixa e o sistema informar qual o motivo do volume (pega) estar na conferência e a lista dos itens que pertencem ao volume (pega). O sistema deixará evidente os itens que tiveram corte.
Para a conferência dos itens, cada item deverá ser lido individualmente para contabilizar a quantidade e ser depositado em uma nova caixa. Ao final da conferência, será enviada ao WMS a relação de todos os itens lidos pelo conferente, para confirmação dos produtos. Em caso de falta de produto no estoque, o operador deverá selecionar se deseja cortar esses itens ou enviá-los para um novo volume (pega) no Order Start, para que o operador responsável colete os itens pendentes.
Opção 1: Encaminhar para o Order Start
Após o shortpicking, o volume é direcionado automaticamente para a conferência, e o operador pode decidir cortar ou enviar os itens pendentes para um novo volume no Order Start. Não há necessidade de uma tarefa de coleta de ocorrência, e o processo segue diretamente para a conferência com a devida confirmação.
Opção 2: Tarefa de Coleta de Ocorrência
Após o shortpicking, o volume é desviado para a conferência. Caso o operador decida não efetivar o shortpicking, o WCS cria uma tarefa de coleta de ocorrência, informando o endereço do item a ser retirado. Se o item não estiver disponível no estoque, o WCS solicitará o reabastecimento via transfer, e a tarefa ficará bloqueada até o reabastecimento ser concluído. Se o item estiver indisponível e o operador optar por cortar, o WCS registrará a informação e confirmará a coleta de itens faltantes.
Qual abordagem seguir?
Opção 1 é mais simples e direta, porém, pode não ser ideal se a operação precisar de uma abordagem mais rigorosa de controle e rastreabilidade dos itens faltantes.
Opção 2 é mais detalhada e garante uma maior rastreabilidade de itens faltantes, reabastecimento e controle de coleta, mas envolve mais etapas e pode exigir mais envolvimento dos operadores para finalizar as tarefas.
Obs: Caso o conferente opte pelo corte do item, será necessária uma autenticação de um supervisor. O WCS irá registrar os operadores que realizarem as conferências de cada volume (pega) durante a operação.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 8317b777da78fd0a

Após a linha de picking FlowRack terá um portal com uma antena RFID para detectar se os itens previstos no volume (pega) estão presentes dentro da caixa.
O volume será direcionado para a conferência nos seguintes cenários:
Volumes (pega) que foi realizado shortpicking
Volumes (pega) que não constam os itens que foram coletados durante o processo de separação
Categoria/filtro parametrizado pela operação
Ao receber o volume (pega), o operador deverá realizar a leitura da etiqueta da caixa e o sistema informar qual o motivo do volume (pega) estar na conferência e a lista dos itens que pertencem ao volume (pega). O sistema deixará evidente os itens que tiveram corte.
Para a conferência dos itens, cada item deverá ser lido individualmente para contabilizar a quantidade e ser depositado em uma nova caixa. Ao final da conferência, será enviada ao WMS a relação de todos os itens lidos pelo conferente, para confirmação dos produtos. Em caso de falta de produto no estoque, o operador deverá selecionar se deseja cortar esses itens ou enviá-los para um novo volume (pega) no Order Start, para que o operador responsável colete os itens pendentes.
Opção 1: Encaminhar para o Order Start
Após o shortpicking, o volume é direcionado automaticamente para a conferência, e o operador pode decidir cortar ou enviar os itens pendentes para um novo volume no Order Start. Não há necessidade de uma tarefa de coleta de ocorrência, e o processo segue diretamente para a conferência com a devida confirmação.
Opção 2: Tarefa de Coleta de Ocorrência
Após o shortpicking, o volume é desviado para a conferência. Caso o operador decida não efetivar o shortpicking, o WCS cria uma tarefa de coleta de ocorrência, informando o endereço do item a ser retirado. Se o item não estiver disponível no estoque, o WCS solicitará o reabastecimento via transfer, e a tarefa ficará bloqueada até o reabastecimento ser concluído. Se o item estiver indisponível e o operador optar por cortar, o WCS registrará a informação e confirmará a coleta de itens faltantes.
Qual abordagem seguir?
Opção 1 é mais simples e direta, porém, pode não ser ideal se a operação precisar de uma abordagem mais rigorosa de controle e rastreabilidade dos itens faltantes.
Opção 2 é mais detalhada e garante uma maior rastreabilidade de itens faltantes, reabastecimento e controle de coleta, mas envolve mais etapas e pode exigir mais envolvimento dos operadores para finalizar as tarefas.
Obs: Caso o conferente opte pelo corte do item, será necessária uma autenticação de um supervisor. O WCS irá registrar os operadores que realizarem as conferências de cada volume (pega) durante a operação.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** 7a3a93ee5da22607

O WMS será responsável pelo controle e realização da coleta dos itens que compõem um pallet. Após o cadastro da linha de separação e a disponibilidade do pallet no "stage-in", o WCS deverá seguir os seguintes passos:
• Abertura da Tela de Conferência: O operador acessa a tela de conferência do WCS e realiza a leitura da etiqueta de pallet para iniciar o processo de conferência. O WCS então exibe uma lista de itens presentes no pallet.
• Leitura item a item: O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa.
• Integração e Vinculação: O WCS não realizará nenhuma integração referente ao resultado da conferência, e o processo de conferência não está vinculado diretamente ao sorter e ao PTL. Este processo é opcional e pode ser utilizado pela operação quando necessário, sem impactar as demais etapas do processo logístico.
• Conferência Aleatória: O WCS deve disponibilizar o processo de conferência para qualquer pallet que for lido mesmo que não esteja na linha de separação previamente cadastrada, dando flexibilidade da operação decidir o que quer conferir de forma dinâmica e eficiente.
