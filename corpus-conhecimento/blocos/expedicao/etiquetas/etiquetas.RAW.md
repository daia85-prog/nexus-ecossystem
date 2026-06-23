# etiquetas.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Impressão de Etiquetas  
**Score:** — (semantico) | **ID:** 0ada3f1dbbbece99

Todas as etiquetas processadas durante o processo da automação serão impressas pelo WCS. O layout dessas etiquetas são:
Exemplo:
Para compor de maneira correta a reutilização das etiquetas do Picking Cart e do Coletor, durante todo o processo da automação existirão ranges do sequencial de etiqueta WCS, de acordo com cada tipo de caixa, e esse sequencial é fixo de acordo com a tabela abaixo:
O WCS deve conter uma tela de reimpressão de etiquetas, caso seja necessário. Ao acionar a funcionalidade de reimpressão, o sistema deverá exibir um pop-up solicitando login e senha do usuário. Apenas usuários previamente cadastrados e com permissão específica poderão prosseguir com a reimpressão da etiqueta.
As etiquetas de expedição da caixa final serão de responsabilidade do WCS e serão impressas na área de conferência após realização do processo de picking.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Impressão de etiquetas  
**Score:** — (semantico) | **ID:** 3d98a417ecf3c252

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido [Cubagem].
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 260d1a981d5a0702

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Etiqueta de Produção  
**Score:** — (semantico) | **ID:** fe9696b0edbb3e89

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Detalhe código de barras (Etiqueta produção)  
**Score:** — (semantico) | **ID:** 72065339b14312ea

No código de barras da etiqueta de produção do cliente existe todas as informações referente ao produto como:
Código Material
Código Identificador: (90)
Velox identificará o PRODUTO por esse código
Lote
Código Identificador: (10)
Velox identificará o LOTE por esse código
Quantidade
Código Identificador: (30)
Velox não fara ó uso desse código
UC
Código Identificador: (92)
Velox deve enviar esse campo para o WMS na integração de confirmação de separação
Velox deverá filtrar as informações lidas no código de barras, e buscar as informações corretas (produto e quantidade) utilizadas pelo sistema como as informações de código do produto e lote solicitados no pedido.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Impressão de Etiquetas Exceção  
**Score:** — (semantico) | **ID:** 01f8b96ad9993441

A impressão de etiquetas dos volumes de exceção será realizada em uma tela separada, dedicada exclusivamente a esse fluxo, garantindo a segregação dos itens de exceção em relação à linha comum podendo ser impressas N etiquetas de uma vez.
CD São Paulo: A impressão será feita de forma separada entre controlados e não controlados, respeitando a classificação do volume de exceção.
CD MG: Como não tem distinção de postos, a impressão poderá conter etiquetas de volumes controlados e não controlados de forma conjunta.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Reimpressão de etiqueta por volume  
**Score:** — (semantico) | **ID:** 5822fd74cdccb422

A reimpressão de etiquetas será realizada exclusivamente por meio de uma tela dedicada no sistema WCS, desenvolvida especificamente para essa funcionalidade. Essa tela terá como principal objetivo permitir a reimpressão das etiquetas associados aos volumes conferidos, garantindo controle, segurança e rastreabilidade do processo.
Regras de Acesso:
Apenas usuários com perfil de liderança (ex: supervisores, coordenadores, gerentes) poderão autorizar a reimpressão de etiqueta.
Para cada tentativa de reimpressão, será obrigatória a identificação e autenticação do usuário de liderança, por meio de login/senha ou outro método de validação definido pelo cliente.
Funcionamento da Tela:
A interface exibirá os volumes conferidos com etiquetas disponíveis para reimpressão, sendo que cada linha representará todos as etiquetas vinculadas a um volume específico.
Será possível realizar buscas e aplicar filtros por:
Número do pedido;
Código do volume;
Data da conferência;

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Layout de etiqueta do produto  
**Score:** — (semantico) | **ID:** 4a0f67f19cbb5222

A etiqueta de produto é de responsabilidade Fagron.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** String DataMatrix etiqueta do produto  
**Score:** — (semantico) | **ID:** e8d1794be265fea4

Na conferência, ao realizar a leitura do DataMatrix, WCS receberá a informação da string lida, da forma detalhada abaixo, dessa forma deverá fazer a validação das informações de EAN13 do produto, lote do produto e número sequencial do produto.
Valor da string
0107908052816682172901311024C07-B008-205610[21001010

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Etiqueta de Volume  
**Score:** — (semantico) | **ID:** c366d3c11a7b36fe

O sistema WCS será o responsável pela impressão de etiquetas de expedição de todos os volumes na conferência.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Layout de etiqueta de Volume  
**Score:** — (semantico) | **ID:** 6f212c5b359338de

Na conferência será impresso dois tipos de etiqueta destinado ao volume. O tipo de etiqueta será determinado se o pedido vinculado a aquele volume é “special” ou não. Segue exemplos de cada uma delas abaixo:
Layout da etiqueta especial
Para as etiquetas “special” é acrescentada a informação do item, lote, nome do produto e quantidade
Layout da etiqueta Padrão

---
**Origem:** [I24.117] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** 4117ebcf8043a828

Todas as etiquetas serão de responsabilidade do cliente.
Seguem as prioridades e regras definidas para identificação do código de barras nos portais da Automação:
•	Prioridades de leitura:
1ª Etiqueta de 10 Caracteres
2ª Etiqueta de 22 Caracteres
3ª Etiqueta de 18 Caracteres
•	Informações do código de barras:
Padrão de codificação: Code128
Modulo mínimo de 0,4mm
Altura mínima do código: 18mm
•	Regras e filtros:
Na condição de dois ou mais códigos com o mesmo digito verificador: Rejeito do volume
No caso de existir mais de uma etiqueta com a mesma quantidade de caracteres (exemplo: dois códigos de 10 dígitos), o portal processará aquele que contém o digito verificador, desconsiderando todos os demais códigos
Seguindo as regras passadas pelo Time SWIFT, sempre iremos receber apenas uma etiqueta no momento da leitura e está etiqueta deve estar integrada em nossa base de dados para realizarmos as tratativas necessárias.
Lembrando que precisamos ter recebido o código correto na integração de Volumes para realizar a triagem correta do volume, caso contrário será direcionado para rejeito por falta de integração.
Observação: A determinação do código correto seguindo as regras acima será feito pela câmera presente no projeto.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** 092a1053e5e1ad33

Com as informações recebidas via integração no início do processo, WCS realiza a impressão das etiquetas dos volumes, conforme recebido anteriormente.
Exemplo sugestão de etiqueta a ser impressa pelo WCS:

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Regras Operacionais:  
**Score:** — (semantico) | **ID:** 79d18877422a0ba6

Quando o campo transportadora da integração de Trabalhos – Work vier com valor diferente de “Própria”, o WCS deve utilizar o campo subArea como agrupador logístico principal.
O agrupamento dos pallets passará a ocorrer por subárea, e não mais por romaneio, permitindo a separação física e lógica dos volumes conforme o destino final.
Cada subárea será considerada uma entidade independente de agrupamento, possuindo suas próprias posições de PTL.
O WCS deve reservar uma posição de PTL para cada subárea ativa alocada à rampa correspondente no sorter, assegurando que os volumes sejam direcionados e alocados corretamente.
O fechamento de cada pallet ocorrerá de forma individual por subárea, respeitando as mesmas regras de cubagem e peso configuradas para o processo de PTL.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Impressão de Romaneio  
**Score:** — (semantico) | **ID:** a4201ac44e3e4347

Após todos os volumes do romaneio serem finalizados, o romaneio estará disponível para impressão na tela de impressão de romaneio. Nessa tela, o operador deve inserir o número do romaneio que deseja imprimir. O Velox irá gerar a impressão a nível de pedido, indicando em quais pallets ou gaiolas cada volume está alocado, proporcionando uma visão clara e organizada da distribuição dos volumes.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Impressão de Romaneio  
**Score:** — (semantico) | **ID:** 93fe15467d8702b0

Após todos os volumes do romaneio serem finalizados, o romaneio estará disponível para impressão na tela de impressão de romaneio. Nessa tela, o operador deve inserir o número do romaneio que deseja imprimir. O Velox irá gerar a impressão a nível de pedido, indicando em quais pallets ou gaiolas cada volume está alocado, proporcionando uma visão clara e organizada da distribuição dos volumes.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Regras Operacionais:  
**Score:** — (semantico) | **ID:** 0d20de55a54ddcfb

Quando o campo transportadora da integração de Trabalhos – Work vier com valor diferente de “Própria”, o WCS deve utilizar o campo subArea como agrupador logístico principal.
O agrupamento dos pallets passará a ocorrer por subárea, e não mais por romaneio, permitindo a separação física e lógica dos volumes conforme o destino final.
Cada subárea será considerada uma entidade independente de agrupamento, possuindo suas próprias posições de PTL.
O WCS deve reservar uma posição de PTL para cada subárea ativa alocada à rampa correspondente no sorter, assegurando que os volumes sejam direcionados e alocados corretamente.
O fechamento de cada pallet ocorrerá de forma individual por subárea, respeitando as mesmas regras de cubagem e peso configuradas para o processo de PTL.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Impressão de Romaneio  
**Score:** — (semantico) | **ID:** a6d68fbabbc089dc

Após todos os volumes do romaneio serem finalizados, o romaneio estará disponível para impressão na tela de impressão de romaneio. Nessa tela, o operador deve inserir o número do romaneio que deseja imprimir. O Velox irá gerar a impressão a nível de pedido, indicando em quais pallets ou gaiolas cada volume está alocado, proporcionando uma visão clara e organizada da distribuição dos volumes.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Impressora de Etiquetas  
**Score:** — (semantico) | **ID:** 291cf99f3b83ba57

A operação contará com três impressoras posicionadas estrategicamente próximas às áreas de indução e coleta, formando um ponto central de impressão. Essas impressoras serão responsáveis por emitir todas as etiquetas utilizadas na separação, conforme a rua de trabalho selecionada no momento do Order Start.
Importante: A impressão das etiquetas é condição obrigatória para liberação das tarefas no sistema. A lista de separação só será exibida ao operador somente após a conclusão da impressão das etiquetas correspondentes.
O processo é iniciado pelo operador ou gestor por meio do coletor, seguindo os passos:
Selecionar o tipo de separação (Full Case ou Pallet Sorter);
Escolher a rua de trabalho.
A rua selecionada determina automaticamente qual impressora será acionada. Caso uma delas esteja fora de operação, o operador poderá utilizar uma impressora de rua próxima para garantir a continuidade da operação.
Exemplo: Se a impressora da Rua 02 estiver inoperante, o Order Start poderá ser realizado pela Rua 03, assegurando que o processo não seja interrompido.
Reimpressão de Etiquetas
Em caso de erro de impressão (falha, corte incorreto ou dados ilegíveis) ou extravio durante o transporte, o operador poderá utilizar a função de reimpressão disponível no WCS, informando o volume ou número da etiqueta correspondente. Todas as reimpressões são registradas em log, garantindo rastreabilidade completa por impressora e volume.
Controle de Acesso à Reimpressão
A reimpressão de etiquetas será restrito a usuários com perfil específico (supervisores ou líderes). Somente esses usuários chaves poderão autorizar a reimpressão, garantindo que o processo ocorra sob supervisão e evitando reimpressões indevidas.
O sistema manterá o registro completo em log, incluindo o usuário que solicitou, o usuário que autorizou a reimpressão, bem como data e hora do evento

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Exemplo de Etiqueta  
**Score:** — (semantico) | **ID:** 4042aa5bfeb22c83

Dimensões da etiqueta: 50 x 50

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Etiqueta PVAR  
**Score:** — (semantico) | **ID:** ee18cb7523d5f9df

O WCS é responsável pelo envio dos arquivos de impressão PVAR, não havendo controle ou confirmação sobre a execução física da impressão, sendo essa responsabilidade da impressora.
A etiqueta será gerada no momento que a onda for iniciada e ficara em uma fila de espera até que o led correspondente a etiqueta acenda.
O layout da etiqueta é de responsabilidade Invent e ela tem a dimensão fixa de largura 100mm por altura de 50mm.
Layout definido:
As informações contidas na etiqueta são consumidas das informações das integrações TPSDLS (ZSDDAREM), ZMATMAS01 descritas abaixo e manutenção de onda.
Detalhes da etiqueta:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Composição do Lote  
**Score:** — (semantico) | **ID:** 45ea1f5bac0cd571

O lote é uma das informações mais críticas extraídas da etiqueta. Sua composição varia conforme o tipo de produto:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Tipos de Layout de Etiqueta  
**Score:** — (semantico) | **ID:** b557808e14098621

As etiquetas do projeto MBRF Salvador são classificadas nos seguintes tipos, cada um com regras específicas de leitura e interpretação pelo WCS.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Etiqueta Completa (Padrão GS1)  
**Score:** — (semantico) | **ID:** d8779c2610413ec0

É o layout mais completo, contendo todas as informações necessárias codificadas em até 5 zonas de código de barras/2D:
Zona 1 — Código de barras (DUN14): Código de barras linear contendo o DUN14 do produto (14 dígitos).
Zona 2 — Código de barras GS1-128: Contém os seguintes identificadores de aplicação (AIs):
(01) DUN14
(3102) Peso líquido — 6 dígitos com 2 casas decimais
(3302) Peso bruto — 6 dígitos com 2 casas decimais
(30) Quantidade de itens na caixa
Zona 3 — Código de barras GS1-128:
(15) Validade — 6 dígitos no formato AAMMDD
(11) Fabricação — 6 dígitos no formato AAMMDD
(7030) Processador — prefixo "0760" + número do SIF da UP
Zona 4 — Código de barras GS1-128:
(00) SSCC — 8 dígitos depois do prefixo 00 + 9 dígitos sequenciais + 1 dígito verificador
(10) Lote — composto por 3 dígitos do centro produtor + 1 dígito do ano + 3 dígitos dia em formato juliano
Zona 5 — Código 2D (Datamatrix) GS1: Concatenação de todos os códigos anteriores acrescidos de 3 TAGs adicionais:
(97) Rastreabilidade — turno + período, máximo 7 dígitos alfanuméricos, completados com zero à direita
(240) SKU do item — 8 dígitos com zeros à esquerda
(95) Código do sistema de impressão da etiqueta — 18 dígitos (sem utilidade para o WCS, deve ser ignorado)
Regra de validade: A data de validade é informada de trás para frente: Ano, Mês e Dia (AAMMDD). O código identificador da validade está em migração do AI (15) para o AI (17). O WCS deve estar preparado para interpretar ambos os códigos durante a operação.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Etiqueta sem Data de Fabricação no Código  
**Score:** — (semantico) | **ID:** 573287eee9ad4dc3

Neste layout, a data de fabricação não está presente em nenhum código de barras da etiqueta. As informações disponíveis são:
Código de barras linear (Marcação 2) - (3103) → Peso líquido com 3 casa decimais, (92) → SKU, (10) Lote.
Código de barras linear (Marcação 1) → DUN14 do produto
Regra de tratamento: Como a data de fabricação não está codificada diretamente como campo estruturado (código de barras), o WCS deverá converter a data juliana composta na informação do lote (EX: 3227) em data gregoriana (EX:04/10/2023).
Etiqueta sem Lote no Código (Exemplo: margarinas)
Neste layout, o lote não está presente diretamente em nenhum código de barras. O WCS deve formar o lote a partir das informações disponíveis nos códigos.
Informações disponíveis:
Código (91) → Código SIF / produtor do volume
Regra de formação do lote: O WCS extrai o código produtor do AI (91) e forma o lote seguindo a mesma estrutura do lote padrão:
Exemplo: Código produtor 364, fabricação em 21/01/2022
Lote formado: 3642021
Se o item for PFIX (conforme cadastro de material): 3642021060 (com faixa de peso 6,0 kg)
Observação: Este layout pode apresentar os códigos tanto na horizontal quanto na vertical. O WCS deve interpretar ambas as orientações.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Etiqueta sem Lote e sem Código Produtor  
**Score:** — (semantico) | **ID:** 70387a3ef2d941c7

Neste layout, nem o lote nem o código produtor estão disponíveis nos códigos de barras. É o cenário mais restrito de informação.
Informações disponíveis:
Código (02) → DUN14 (formato segregado)
Código (7030) → Processador, no formato "0760" + número do SIF
Regra de extração do SIF: O número do SIF é sempre o valor que aparece após o prefixo "0760" no AI (7030). Exemplo: código (7030) 0760292 → SIF = 292.
Regra de tratamento: Como não existe código produtor na etiqueta, o WCS deve manter um cadastro interno de um código de unidade produtora por SIF, o restante do lote deve ser composto pela data de fabricação. Toda vez que um volume com este tipo de etiqueta for lido, o WCS consulta o SIF extraído e atribui o lote fixo cadastrado para aquele SIF.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Reimpressão de Etiqueta no Rejeito  
**Score:** — (semantico) | **ID:** d4ba0eab5298c011

Para volumes tratáveis (NoRead, falha de crosscheck, volume sem etiqueta PVAR), o operador pode reimprimir a etiqueta de expedição (PVAR) diretamente na estação de rejeito.
Regras:
Somente volumes com status Coletado ou Rejeitado permitem reimpressão na estação de rejeito.
A impressão é realizada na impressora cadastrada na tela de parâmetros como impressora do rejeito, não na impressora do posto de coleta.
O fluxo de reimpressão segue a mesma lógica da reimpressão na tela de Volumes PVAR: seleção de impressora e seleção obrigatória de motivo.
Após a reimpressão, o operador cola a nova etiqueta na caixa e pode reinduzir o volume na esteira do sorter para uma nova tentativa de desvio.

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** 9d401ad8c73733c4

O WCS realiza a impressão das etiquetas dos volumes na tela de Order Start, com base nas informações de cubagem recebidas via integração. O tipo de código adotado em todos os processos da esteira é o Data Matrix com módulo mínimo de 1.1.
Será impressa 1 (uma) etiqueta por volume. Exemplo: um pedido que gerou 3 volumes terá 3 etiquetas impressas (1/3, 2/3 e 3/3). O número do volume é gerado pela concatenação do número do pedido com o número sequencial do volume.
O operador fixa manualmente cada etiqueta na respectiva caixa conforme o tipo indicado na tela de Order Start e induz a caixa na linha para seguir aos postos de separação. O sistema permite reimpressão de etiquetas caso alguma esteja ilegível ou danificada.
Observação: A impressão de etiquetas para volumes full case não é responsabilidade do WCS, devendo ser realizada pelo cliente antes da indução na esteira.
Exemplo de sugestão de etiqueta a ser impressa pelo WCS:

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Alocação de Volumes  
**Score:** — (semantico) | **ID:** 7ce285c6621df925

O operador só poderá alocar volumes estando logado na rampa. O login é feito por meio da leitura do crachá, que deve conter obrigatoriamente 7 (sete) dígitos.
O operador pega o volume na rampa, realiza a leitura do código de barras e o WCS indica no PDV a posição do pallet correspondente, destacada pela cor da posição. O operador se dirige ao local indicado e realiza a leitura do código do pallet (fisicamente visível) para confirmar a alocação.
Caso o operador informe um número de pallet divergente, o WCS bloqueia a operação e informa que o pallet não corresponde ao destino do volume, devendo o operador corrigir a leitura.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Etiqueta de volumen de separación  
**Score:** — (semantico) | **ID:** c01b2051ba4ad5c0

WCS generará las etiquetas de volumen de picking al inicio de la línea de picking.
Ejemplo de la etiqueta generada por WCS para insertar en la caja de picking:

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Control de Reimpresión de Etiquetas (Usuario y Contraseña)  
**Score:** — (semantico) | **ID:** f6ac40eb3f7374c9

Reimprimir una etiqueta después de que la caja ya haya entrado en la línea y haya pasado por una actividad de picking confirmada en una estación requiere un nivel adicional de control para evitar fallos de trazabilidad, duplicados o desviaciones en el proceso. Por lo tanto, es necesario que el operador responsable utilice un usuario y una contraseña autorizados. Este mecanismo garantiza que solo las personas con la autorización correspondiente puedan validar la reimpresión, manteniendo la integridad de la información del proceso de producción y garantizando el cumplimiento de los estándares del cliente.
Detalles técnicos:
• Trazabilidad: Garantiza que cada caja tenga una única etiqueta válida y que cualquier reimpresión quede registrada en el sistema.
• Control de acceso: Evita que operadores no autorizados generen etiquetas inapropiadas.
• Registro de auditoría: El sistema registra quién realizó la acción, cuándo se realizó y qué etiqueta se reimprimió.
• Prevención de errores: Reduce el riesgo de embalajes con identificación duplicada o incorrecta.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Etiqueta de volume de separação  
**Score:** — (semantico) | **ID:** 05ea93cc5d114edc

As etiquetas de volume de separação, serão geradas pelo WCS, nos postos de separação.
Exemplo da etiqueta gerada pelo WCS para ser inserida na caixa de separação:

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Controle de Reimpressão de Etiquetas (Nome de Usuário e Senha)  
**Score:** — (semantico) | **ID:** 72e0f306287a5582

A reimpressão de uma etiqueta após uma caixa já ter entrado na linha de produção e passado por uma atividade de separação confirmada em uma estação requer um nível adicional de controle para evitar falhas de rastreabilidade, duplicatas ou desvios de processo. Portanto, o operador responsável deve usar um nome de usuário e senha autorizados. Esse mecanismo garante que somente pessoal autorizado possa validar a reimpressão, mantendo a integridade das informações do processo de produção e garantindo a conformidade com os padrões do cliente.
Detalhes Técnicos:
• Rastreabilidade: Garante que cada caixa tenha uma única etiqueta válida e que qualquer reimpressão seja registrada no sistema.
• Controle de Acesso: Impede que operadores não autorizados gerem etiquetas inadequadas.
• Registro de Auditoria: O sistema registra quem realizou a ação, quando ela foi realizada e qual etiqueta foi reimpressa.
• Prevenção de Erros: Reduz o risco de embalagens com identificação duplicada ou incorreta.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** PONTOS A DEFINIR (PENDÊNCIAS)  
**Score:** — (semantico) | **ID:** 464f0815cc71ad3b

Impressão de Etiquetas: Definir o fluxo de impressão da Etiqueta de Pallet (Master). O WCS deve comandar uma impressora Zebra diretamente ou o WMS gerará a etiqueta após receber a integração de fechamento?

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Document Objective  
**Score:** — (semantico) | **ID:** 59153cea07035e8b

This document describes the functionalities of the Initial Phase of the logistics automation project. This stage consists of the implementation of the Velox WCS for shipping management and pallet assembly through the Put-to-Pallet (PTP) concept.
The objective of this phase is to introduce software intelligence and data control into the current manual process, ensuring traceability, volumetric validation, and the elimination of order inversion errors, preparing the operational environment for future mechanical automations.

---
**Origem:** [EURO] ADITIVO — `- ESPECIFICACAO DE SOFTWARE - QR code.docx`  
**Heading:** Tela de Impressão Manual  
**Score:** — (semantico) | **ID:** f5896e8dc77ea964

No caso de alteração no conteúdo previamente previsto (corte ou divergência), a caixa deverá ser tratada manualmente através da Tela de Impressão Manual. O operador realizará a leitura do código de barras da caixa e será impressa uma nova etiqueta, atualizada com os itens efetivamente separados. O MFC deve fornecer essa tela.

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivo Projeto Andreani - Etiqueta Marketplace.docx`  
**Heading:** Implementação Etiqueta Marketplace  
**Score:** — (semantico) | **ID:** 4f5009bc87f64b17

Este aditivo tem como objetivo a implementação da funcionalidade de impressão de etiquetas de pedidos Marketplace, garantindo que as etiquetas sejam impressas no padrão exigido por cada plataforma de venda de origem (Mercado Livre, Shopee, TikTok, entre outros), conforme diretrizes do cliente Andreani.
A solução proposta estabelece que toda a lógica de identificação do marketplace, consulta a APIs externas, obtenção e persistência das etiquetas será de responsabilidade do WMS Delage, cabendo ao WCS exclusivamente a impressão das etiquetas conforme os layouts recebidos, sem qualquer integração direta com APIs de Marketplaces.

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivo Projeto Andreani - Etiqueta Marketplace.docx`  
**Heading:** Visão Geral do Processo  
**Score:** — (semantico) | **ID:** 10f8eaf8b5b4e05f

O fluxo de impressão de etiquetas de Marketplace seguirá as seguintes premissas:
A identificação do marketplace ocorrerá no momento da entrada do pedido no WMS Delage;
O WMS Delage será responsável por consultar a API da plataforma AnyMarket para recuperação das etiquetas de expedição;
As etiquetas retornadas pela AnyMarket deverão ser gravadas no WMS Delage antes de qualquer integração com o WCS;
Somente após a persistência das etiquetas no WMS o pedido poderá ser integrado ao WCS;
O WCS realizará exclusivamente a impressão das etiquetas conforme os dados e layouts recebidos do WMS.

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivo Projeto Andreani - Etiqueta Marketplace.docx`  
**Heading:** Gravação das Etiquetas no WMS Delage  
**Score:** — (semantico) | **ID:** 27bc958291ec1869

Após a recuperação das etiquetas via API da AnyMarket, o WMS Delage deverá:
Persistir os dados das etiquetas no próprio WMS;
Garantir que cada etiqueta esteja corretamente vinculada ao pedido;
Preparar os dados das etiquetas para envio ao WCS no formato acordado.
Padronização de Formato
Para fins de integração com o WCS, fica definido que:
O WCS receberá exclusivamente etiquetas no formato ZPL.

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivo Projeto Andreani - Etiqueta Marketplace.docx`  
**Heading:** Impressão no WCS  
**Score:** — (semantico) | **ID:** 392ceb433697e9a8

O WCS será responsável exclusivamente por:
Receber os dados das etiquetas no formato ZPL;
Imprimir uma ou mais etiquetas por pedido, conforme quantidade informada pelo WMS;
Respeitar integralmente o layout recebido, sem qualquer alteração, interpretação ou geração de etiquetas.

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivos Projeto Andreani - Multiplos Aditivos.docx`  
**Heading:** Controle de Reimpressão de Etiquetas (Usuário e Senha)  
**Score:** — (semantico) | **ID:** a5786f7f2e59b6ad

A reimpressão de uma etiqueta após a caixa já ter entrado em linha exige um nível adicional de controle para evitar falhas de rastreabilidade, duplicidades ou desvios no processo. Por isso, é necessário que o operador responsável utilize um usuário e senha autorizados. Esse mecanismo garante que apenas pessoas com permissão adequada possam validar a reimpressão, mantendo a integridade das informações do processo produtivo e garantindo conformidade com os padrões do cliente.
Detalhamento técnico:
Rastreabilidade: Garante que cada caixa tenha uma única etiqueta válida e que qualquer reimpressão fique registrada no sistema.
Controle de acesso: Evita que operadores sem permissão gerem etiquetas indevidas.
Registro de auditoria: O sistema grava quem realizou a ação, quando realizou e qual etiqueta foi reimpressa.
Prevenção de erros: Reduz riscos de embalagens com identificação duplicada ou incorreta.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Processo de Picking Fracionado (Convocação Ativa)  
**Score:** — (semantico) | **ID:** fcf4b1cc5e91f5fa

O processo convocação ativa de picking fracionado será responsável pela separação de itens unitários ou fracionados, onde o operador realizará a coleta dos produtos diretamente nos endereços indicados pelo WCS através do coletor Android.
O fluxo operacional será baseado na impressão de etiquetas de separação, onde cada etiqueta representará uma loja, e ao bipar será informado os endereços e itens que deverão ser separados pelo operador.
Fluxo Operacional de Picking Fracionado:
O operador realiza o login no WCS utilizando o coletor Android.
O operador acessa a tela de Picking Fracionado e seleciona o posto de impressão em que está fisicamente localizado para retirada das etiquetas.
O operador seleciona a loja que ele quer fazer a impressão das etiquetas
O WCS realizará a impressão das etiquetas com o número da filial.
Cada etiqueta possuirá um identificador da loja, operador poderá imprimir a quantidade de etiquetas que considerar necessária para execução da operação.
O operador realiza a leitura da etiqueta de separação através do coletor Android.
Após a leitura da etiqueta, o WCS identificará automaticamente todos os endereços que deverão ser visitados para realização da coleta dos itens.
O coletor direcionará o operador para o primeiro endereço da tarefa.
Início da Tarefa:
O operador deverá se deslocar até o endereço apresentado no coletor.
Ao chegar no endereço, o operador realizará a leitura do código do endereço para confirmação da posição de coleta.
Após a validação do endereço, o operador iniciará a coleta dos itens correspondentes àquele local.
O operador realizará a confirmação da quantidade coletada e a leitura do código do item.
Após concluir a coleta do endereço atual, o WCS direcionará automaticamente o operador para o próximo endereço da tarefa.
O processo será repetido sucessivamente até que todos os endereços e itens vinculados à tarefa sejam concluídos.
Troca de Caixa Durante a Operação:
Caso o operador identifique que a caixa utilizada na coleta atingiu sua capacidade física, ele poderá finalizar a coleta parcial daquela etiqueta.
Após finalizar a caixa atual, o operador poderá realizar a leitura de uma nova etiqueta da mesma loja para continuar a separação.
Ao realizar a leitura da nova etiqueta, o WCS identificará automaticamente que ainda existem itens pendentes de coleta para aquela loja.
O sistema apresentará apenas os endereços e itens que ainda não foram coletados anteriormente.
Esse processo poderá ocorrer sucessivamente até que todas as coletas da loja sejam concluídas.
Finalização da Tarefa:
Após finalizar todas as coletas da loja, o WCS realizará a confirmação da conclusão operacional.
O sistema atualizará os status das separações concluídas e disponibilizará os volumes para as próximas etapas operacionais do fluxo.
Todas as movimentações realizadas durante a coleta permanecerão registradas no WCS, garantindo rastreabilidade completa da operação.
O processo de Picking Fracionado garante maior controle operacional durante a separação de itens unitários, direcionando o operador de forma guiada entre os endereços de coleta, reduzindo erros operacionais e assegurando rastreabilidade durante toda a execução da tarefa.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Pesagem e Etiquetagem Individual de Caixas de Papelão  
**Score:** — (nome-topico) | **ID:** 056a93bfc49d595d

Serão adicionados ao sistema novos tipos de caixa de papelão, nos tamanhos P, M e G. Diferentemente das caixas plásticas, cujo peso é padronizado por tipo, as caixas de papelão possuem variação de peso entre unidades. Por esse motivo, será desenvolvido um fluxo de pesagem individual no cubômetro, vinculando a tara de cada caixa a uma etiqueta.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Etiquetagem de Caixas Papelão  
**Score:** — (semantico) | **ID:** b996a731f6ec15d6

A geração da etiqueta de cada caixa de papelão será realizada diretamente pelo conjunto cubômetro + coletor + impressora, sem tela dedicada no Velox.
A etiqueta de peso tem finalidade exclusiva de informar a tara da caixa no momento da bipagem no Order Start. Trata-se de uma etiqueta temporária: assim que a caixa entra no Order Start, ela é coberta pela etiqueta padrão (etiqueta do Order Start). Por isso, não há necessidade de identificador único nem de rastreabilidade da etiqueta de peso.
Fluxo de geração:
Leitura do código de tamanho: o operador posiciona a caixa de papelão vazia no cubômetro e bipa um dos três códigos próprios fornecidos pela Invent, correspondentes aos tamanhos P, M e G (ex.: PPPPPPPPPP, MMMMMMMM, GGGGGGGG). Esses códigos substituem o DUN/EAN convencional do produto e servem apenas para classificar o tamanho da caixa.
Captura e tratamento dos dados: ao bipar o código, o cubômetro envia ao Velox três informações — o código lido, o peso aferido e a cubagem medida pela estação. Ao identificar que o código lido é um dos códigos próprios de tamanho (P, M ou G), o Velox descarta a cubagem medida pelo cubômetro e utiliza a cubagem previamente cadastrada no sistema para aquele tamanho. Apenas o peso aferido é aproveitado, como tara da caixa.
Impressão automática: na sequência, o Velox gera e envia automaticamente a etiqueta (padrão tamanho-peso, ex.: P-950) para a impressora previamente cadastrada, sem ação adicional do operador. Cada bipagem gera uma nova etiqueta; caso saia inválida, o operador bipa novamente.
Conteúdo da etiqueta: a etiqueta seguirá o padrão tamanho-peso em gramas (ex.: P-950), onde o tamanho define a cubagem e o peso representa a tara aferida.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Layout da Etiqueta  
**Score:** — (semantico) | **ID:** b397fde5b30bb245

A etiqueta impressa conterá apenas o tamanho da caixa e o peso aferido (ex.: P-950).

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Vinculação Física da Etiqueta à Caixa  
**Score:** — (semantico) | **ID:** 678c545df51e734a

O operador deverá fixar a etiqueta impressa exatamente na caixa que acabou de ser pesada, garantindo a correspondência entre a tara registrada e a caixa física. A correta vinculação entre etiqueta e caixa é de responsabilidade do operador. No momento do Order Start o operador deve colocar a nova etiqueta (Etiqueta padrão) por cima da etiqueta do peso na posição de leitura dos scanners da linha.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Processo de Picking Fracionado  
**Score:** — (semantico) | **ID:** 36b5122115b4f4da

O processo de Picking Fracionado será responsável pela separação de itens unitários ou fracionados, onde o operador realizará a coleta dos produtos diretamente nos endereços indicados pelo WCS através do coletor Android.
O fluxo operacional será baseado na impressão de etiquetas de separação, onde cada etiqueta representará uma loja, e ao bipar será informado os endereços e itens que deverão ser separados pelo operador.
Fluxo Operacional de Picking Fracionado:
• O operador realiza o login no WCS utilizando o coletor Android.
• O operador acessa a tela de Picking Fracionado e seleciona o posto de impressão em que está fisicamente localizado para retirada das etiquetas.
• O WCS realizará a impressão das etiquetas referentes as lojas (etiquetas genéricas) 
• Cada etiqueta possuirá um identificador da loja exemplo “Loja 01”, operador poderá imprimir a quantidade de etiquetas que considerar necessária para execução da operação.
• O operador realiza a leitura da etiqueta de separação através do coletor Android.
• Após a leitura da etiqueta, o WCS identificará automaticamente todos os endereços que deverão ser visitados para realização da coleta dos itens.
• O coletor direcionará o operador para o primeiro endereço da tarefa.
Início da Tarefa:
O operador deverá se deslocar até o endereço apresentado no coletor.
• Ao chegar no endereço, o operador realizará a leitura do código do endereço para confirmação da posição de coleta.
• Após a validação do endereço, o operador iniciará a coleta dos itens correspondentes àquele local.
• O operador realizará a confirmação da quantidade coletada e, quando aplicável, a leitura do código do item.
• Após concluir a coleta do endereço atual, o WCS direcionará automaticamente o operador para o próximo endereço da tarefa.
• O processo será repetido sucessivamente até que todos os endereços e itens vinculados à tarefa sejam concluídos.
Troca de Caixa Durante a Operação:
• Caso o operador identifique que a caixa utilizada na coleta atingiu sua capacidade física, ele poderá finalizar a coleta parcial daquela etiqueta.
• Após finalizar a caixa atual, o operador poderá realizar a leitura de uma nova etiqueta da mesma loja para continuar a separação.
• Ao realizar a leitura da nova etiqueta, o WCS identificará automaticamente que ainda existem itens pendentes de coleta para aquela loja.
• O sistema apresentará apenas os endereços e itens que ainda não foram coletados anteriormente.
• Esse processo poderá ocorrer sucessivamente até que todas as coletas da loja sejam concluídas.
Finalização da Tarefa:
• Após finalizar todas as coletas da loja, o WCS realizará a confirmação da conclusão operacional.
• O sistema atualizará os status das separações concluídas e disponibilizará os volumes para as próximas etapas operacionais do fluxo.
• Todas as movimentações realizadas durante a coleta permanecerão registradas no WCS, garantindo rastreabilidade completa da operação.
O processo de Picking Fracionado garante maior controle operacional durante a separação de itens unitários, direcionando o operador de forma guiada entre os endereços de coleta, reduzindo erros operacionais e assegurando rastreabilidade durante toda a execução da tarefa.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Views Para KPIS e Relatórios.docx`  
**Heading:** KPIs alvo das Views  
**Score:** — (semantico) | **ID:** 4a2fb7cc752dd73e

As Views especificadas neste documento têm como objetivo viabilizar os seguintes indicadores de gestão das fases logísticas (lista preliminar, sujeita a expansão por demanda do cliente):
•  Volume processado por etapa logística (Recebimento, Armazenagem, Picking, Packing).
•  Tempo médio de execução por etapa (com base nos campos Data/Hora Inicial, Data/Hora Final e Time).
•  Produtividade por usuário e por etapa.
•  Aderência à priorização de ondas (Priority × tempo real de execução).
•  Taxa de divergência entre quantidades planejadas e executadas.
•  Ocupação volumétrica por OLPN (com base no campo Cubagem).

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_-_Aditivo_Views_KPIs_Beleza_REV2_tracked.docx`  
**Heading:** KPIs alvo das Views  
**Score:** — (semantico) | **ID:** 91fa79c1384e9a54

As Views especificadas neste documento têm como objetivo viabilizar os seguintes indicadores de gestão das fases logísticas (lista preliminar, sujeita a expansão por demanda do cliente):
•  Volume processado por etapa logística (Recebimento, Armazenagem, Picking, Packing).
•  Tempo médio de execução por etapa (com base nos campos Data/Hora Inicial e Data/Hora Final).
•  Produtividade por usuário e por etapa.
•  Aderência à priorização de ondas (Priority × tempo real de execução).
•  Taxa de divergência entre quantidades planejadas e executadas.
•  Ocupação volumétrica por OLPN (com base no campo Cubagem).

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Crosscheck, Alocação Automatica, Pedidos, Dashboard e Ajustes Impressão.docx`  
**Heading:** Adição de informação extra na tela Volumes e impressões  
**Score:** — (semantico) | **ID:** 70ab4c07ccfb4dbb

Enriquecer as telas de Volumes e Impressões com informações complementares que facilitem a identificação visual do operador e o rastreamento dos volumes entre o Velox e o EWM. As mesmas informações já são impressas hoje na etiqueta física do volume e passarão a estar visíveis também nas telas e relatórios do sistema.
Tela Volumes
Passa a exibir a sequência da etiqueta no formato atual/total (ex.: 1/10), correspondente à mesma informação impressa na etiqueta física do volume.
Tela Impressões
Passa a exibir as colunas TAREFAWMS, Etiqueta e Sequência (no mesmo formato 1/10 da tela Volumes), mantendo consistência entre as duas telas.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Necessidade Operacional  
**Score:** — (semantico) | **ID:** 0eb6a29984555ad4

No fluxo atual, quando o sistema opera por etiqueta, o desvio é executado conforme a informação lida, sem nenhuma validação que confirme se a caixa física corresponde ao que está etiquetado. Essa ausência de validação cruzada permite que falhas operacionais, etiqueta aplicada em caixa incorreta, divergência entre o produto físico e a etiqueta, entre outras, sejam executadas sistemicamente sem detecção, comprometendo a rastreabilidade do processo e a confiabilidade da automação no Centro de Distribuição.
Atualmente também não existe um indicador consolidado do percentual real dessas falhas, pois o sistema não realiza qualquer comparação entre etiqueta e caixa. A solicitação tem como objetivo introduzir essa camada de validação, permitindo medir, registrar e tratar operacionalmente as divergências.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Prioridade em Caso de Divergência  
**Score:** — (semantico) | **ID:** 9824c4e24fa28df8

Parâmetro que define qual das duas informações prevalece operacionalmente quando ocorre divergência:
Priorizar etiqueta — o desvio é determinado pelo conteúdo da etiqueta.
Priorizar IA — o desvio é determinado pela identificação da IA.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Identificação e Prefixo de Etiqueta  
**Score:** — (semantico) | **ID:** 7f96c5f9ba5693d9

Para distinguir as etiquetas que participam do fluxo de CrossCheck das etiquetas comuns utilizadas em outros fluxos, será adotado o prefixo CCK no início do código aplicado à etiqueta de CrossCheck. O prefixo é aplicado na geração da etiqueta, lido pela câmera de TOPO e propagado no telegrama enviado ao PLC.
Exemplo de leitura válida: CCK17898378180840.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Tela Tratativas de Pallets Rejeitados.docx`  
**Heading:** Funcionalidade de Troca de Master  
**Score:** — (semantico) | **ID:** b0d10c64b11567ae

A tela de Tratamento de Master deverá permitir a funcionalidade de Troca de Master, respeitando as seguintes regras:
O operador poderá selecionar um pallet rejeitado;
O sistema solicitará a leitura de uma nova etiqueta Master;
O WCS deverá validar que a nova master está de acordo com a lista disponível;
A nova master substituirá a master anterior somente para o pallet selecionado.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Solução Proposta – Intercalação por Rampa de Destino  
**Score:** — (semantico) | **ID:** 66c5d78274688a4a

Para eliminar esse gargalo, o WCS deverá alterar a forma como a fila de impressão é gerada. Ao invés de agrupar todas as etiquetas por missão, o sistema deverá intercalar as etiquetas entre as diferentes rampas de destino, utilizando uma lógica de rodízio circular (Round-Robin).
O que muda e o que não muda:
O que muda: a ordem em que as etiquetas são impressas. O sistema alterna entre as rampas, imprimindo uma etiqueta por rampa a cada ciclo, de modo que os volumes cheguem ao sorter distribuídos entre as saídas.
O que NÃO muda: a rota física de coleta do operador. O operador continua percorrendo a rua de forma linear (endereço a endereço, crescente ou decrescente conforme a impressora). A intercalação atua apenas na sequência de impressão das etiquetas, não no caminho físico de coleta.
Na prática, quando o operador chega a um endereço que contém o mesmo SKU solicitado por múltiplas missões (destinadas a rampas diferentes), as etiquetas já foram impressas de forma alternada. Assim, ao coletar e etiquetar os volumes naquele endereço, o operador naturalmente gera uma sequência diversificada de destinos, sem precisar retornar a endereços já percorridos.
Obs: O coletor de dados tem um mapa de separação e a alteração no sistema de impressão pode fazer com que o mapa de separação seja diferente da etiqueta

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Projeto Esperanca - Layout Etiqueta.docx`  
**Heading:** Campos Obrigatórios na Nova Etiqueta  
**Score:** — (semantico) | **ID:** 613a749febcb49a7

Os itens listados a seguir detalham todos os campos que deverão compor a nova etiqueta utilizada no Projeto Esperança. Cada campo possui indicação clara sobre sua inclusão, manutenção ou remoção, além da descrição de sua finalidade no processo. O objetivo é assegurar que a etiqueta final contenha todas as informações necessárias para identificação, rastreabilidade e conformidade com as solicitações do cliente.
1. Nome Cliente
Status: Manter
Descrição: Nome do cliente conforme cadastro.
2. Nome Fantasia
Status: Incluir
Descrição: Nome comercial utilizado pelo cliente.
3. Pedido
Status: Retirar
Descrição: Campo será removido por não ser mais necessário.
4. OS (Ordem de Serviço)
Status: Manter
Descrição: Identificador da OS associada ao processo.
5. Carga
Status: Manter
Descrição: Número da carga associada ao envio.
6. Matriz
Status: Manter
Descrição: Identificação da matriz de fragilidade do produto.
7. Descrição do Produto
Status: Incluir
Descrição: Inserir código do produto + descrição completa.
Exemplo: "60667 – Granulado Camp. Marcio".
8. Volume
Status: Incluir
Descrição: Indicar o volume contendo a quantidade por caixa.
Exemplo: "1 de 10 CX C/24”.
9. Destino
Status: Incluir
Descrição: Inserir onda, box e letra, conforme mapeamento operacional.
Exemplo: "40-5 A".
10. Palete
Status: Incluir
Descrição: Identificação do palete ao qual a caixa está associada.
11. Sequência
Status: Incluir
Descrição: Número de sequência de embarque.
12. Endereço de Picking
Status: Incluir
Descrição: Endereço logístico completo no formato R – Rua, P – Prédio, N – Nível, A – Apto.
Exemplo: "R:11 – P:95 – N:0 – A:1".
13. Código interno do QR CODE
Status: Manter
Descrição: Manter código utilizado na etiqueta atual do projeto
Exemplo etiqueta:

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Projeto Esperanca - Pontos de Melhorias.docx`  
**Heading:** Alterações na Etiqueta  
**Score:** — (semantico) | **ID:** a9794871991f0b64

Alterar o critério de contagem para que passe a considerar a missão. Dessa forma, a etiqueta deverá refletir o total de tarefas vinculados a missão completa, independentemente da fragmentação.
Escopo Técnico
Ajuste na query de formação da etiqueta.
Garantir que o total de tarefas considere todos os registros vinculados ao mesmo número da missão.
Atualização do layout para refletir o novo padrão.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Projeto Esperanca - Pontos de Melhorias.docx`  
**Heading:** Diferenciação Visual entre Etiqueta Master e Etiqueta de Início  
**Score:** — (semantico) | **ID:** 86612d31408e454f

Promover adequação visual nas etiquetas Master e de Início, criando diferenciação clara e imediata entre os dois modelos. A alteração visa eliminar confusões na operação decorrentes da similaridade atual, garantindo que os operadores consigam identificar corretamente o tipo de etiqueta durante o fluxo logístico.
Escopo Técnico
Alterar elementos visuais
Ajustar templates de impressão.
Garantir que a identificação seja clara e padronizada.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Projeto Esperanca - Pontos de Melhorias.docx`  
**Heading:** Ajustes na Tela “Ocorrências”  
**Score:** — (semantico) | **ID:** bccd29e103fd2662

Aprimorar o controle sistêmico e a rastreabilidade das ocorrências registradas no sistema, garantindo maior consistência entre o status operacional das etiquetas e seus respectivos registros de exceção. A melhoria visa aumentar a confiabilidade das informações apresentadas na tela, evitar registros inconsistentes e assegurar que qualquer movimentação ou alteração de status seja refletida automaticamente, mantendo integridade dos dados e reduzindo necessidade de intervenções manuais.
Escopo Técnico
Incluir colunas: Nº carregamento, PTL previsto, Destino (Onda e Box).
Bloquear criação de ocorrência para etiqueta já alocada.
Criar rotina automática para remover etiqueta da lista caso seja alocada durante ocorrência.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Impressão e Quebra Automática  
**Score:** — (semantico) | **ID:** af2983cd4f636aa2

Ao clicar na matriz desejada (ex: Base), o operador comandará a impressão.
Processamento Automático: O WCS realizará automaticamente a divisão das ordens de serviço (OS) respeitando duas regras simultâneas:
Quebra por Rua: O sistema agrupará e separará as etiquetas rua a rua dentro do range selecionado.
Quebra por Cubagem (Palete): O sistema respeitará a regra de cubagem máxima do palete (já existente), gerando novas quebras de OS caso o volume exceda a capacidade do palete.
Resultado: O operador recebe na impressora todas as etiquetas do intervalo de ruas 01 a 10, referentes à matriz selecionada, já devidamente quebradas e organizadas, sem precisar filtrar rua por rua manualmente.

---
**Origem:** [I22.3322] ADITIVO — `I22.3322 - Aditivo Projeto Heart - Impressão de Etiqueta de PTM.docx`  
**Heading:** Impressão de Etiqueta de PTM  
**Score:** — (semantico) | **ID:** 0c612c759ee21e5a

Será disponibilizada na tela “Posições Palete” uma nova opção destinada exclusivamente à reimpressão das etiquetas de endereço PTM já cadastradas no sistema.
A funcionalidade permitirá:
Reimpressão Manual
O sistema apresentará a listagem dos endereços PTM cadastrados, permitindo que o operador selecione as etiquetas que deseja reimprimir, conforme necessidade operacional.
O operador poderá:
Selecionar manualmente quantos endereços desejar;
Confirmar a impressão em lote apenas dos itens marcados;
Essa funcionalidade permitirá maior flexibilidade operacional, especialmente em situações onde seja necessária a substituição simultânea de algumas etiquetas específicas, sem necessidade de reimpressão total.
Reimpressão Total
O sistema disponibilizará a opção “Imprimir todas”, permitindo a geração de todas as etiquetas de endereços PTM cadastrados no sistema.
O usuário poderá selecionar a opção “Imprimir todas”.
O sistema realizará a reimpressão de todas as etiquetas de endereços PTM cadastrados.
Essa opção será utilizada principalmente em cenários de substituição completa das etiquetas físicas.

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - OTIMIZAÇÃO DE COLETA - ADITIVO.docx`  
**Heading:** Alocação no Stage – Pallets Empenhados  
**Score:** — (semantico) | **ID:** ddfc885842cba896

Conceito: pallets empenhados (reservados/comprometidos para expedição/romaneio) devem passar pelo processo de alocação ao Stage de Indução, garantindo rastreabilidade, controle de disponibilidade e preparação para as etapas de impressão automática e consumo de Master.
Passos
O WCS identifica a demanda de pallets empenhados e solicita a separação ao WMS, conforme o percentual/regra de Matriz de Fragilidade parametrizado para o processo.
O operador de empilhadeira executa a separação utilizando a interface do WMS, seguindo o processo operacional atual.
Após a separação, o pallet é disponibilizado fisicamente no Stage de Indução, conforme o processo atual de movimentação.
O operador responsável pelo Stage acessa, via PDV do Posto de Indução, a tela de Stage para realizar a alocação do pallet.
Para confirmar a movimentação e a alocação no Stage, o operador realiza:
leitura do RG do pallet; e
leitura do endereço do Stage de Indução.
Após a confirmação, o WCS registra a alocação e atualiza o status do pallet para:
NO_STAGE_INDUÇÃO.
Resultado esperado
Pallets empenhados ficam formalmente alocados no Stage de Indução, com rastreabilidade (usuário/data/hora/endereço), e aptos para as próximas etapas do fluxo: impressão automática e consumo de Master (conforme regras de liberação do processo).

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - OTIMIZAÇÃO DE COLETA - ADITIVO.docx`  
**Heading:** Impressão Automática de Etiquetas no Posto de Indução  
**Score:** — (semantico) | **ID:** e970a95afea6e436

Objetivo:
Garantir que as etiquetas obrigatórias sejam emitidas automaticamente no Posto de Indução à medida que os volumes forem sendo liberados para as posições de PTL, assegurando rastreabilidade e bloqueio operacional caso a etiqueta do pallet (RG/PEGA) não seja consumida antes da indução.
Passos
Conforme os pallets forem sendo montados nas posições de PTL e existirem volumes disponíveis para alocação/indução, o WCS realiza a impressão automática das etiquetas correspondentes no Posto de Indução, desde que o pallet de coleta já esteja alocado no Stage de Indução.
As etiquetas impressas devem conter, no mínimo, as informações de rastreabilidade e agrupamento:
Identificador de agrupamento: PEGA e/ou RG do Pallet;
Endereço do Stage de Indução vinculado ao agrupamento;
Identificação do(s) volume(s) quando aplicável (conforme layout definido).
O operador retira as etiquetas na impressora e realiza o consumo da etiqueta do agrupamento (Etiqueta de RG do Pallet/PEGA) no sistema, como etapa obrigatória de liberação operacional.
Após o consumo, o operador aplica a etiqueta e realiza a indução dos volumes.
Regra de bloqueio no sorter: caso a etiqueta de RG do Pallet/PEGA não tenha sido consumida previamente, o sorter deverá direcionar os volumes para rejeito, impedindo o fluxo para alocação/destino.
O WCS poderá realizar a impressão parcial de etiquetas para um mesmo pallet/agrupamento, não sendo obrigatório que todos os volumes sejam induzidos no mesmo instante (indução pode ocorrer por etapas, conforme disponibilidade operacional).
Resultado esperado
Etiquetas são emitidas automaticamente de forma controlada, vinculadas ao pallet/PEGA e ao endereço de Stage, permitindo indução parcial e garantindo que volumes só sigam no sorter quando o consumo do agrupamento (RG/PEGA) tiver sido realizado.

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - RAMPA FULLCASE REV 1.docx`  
**Heading:** Limitações Técnicas (Caixas BIN)  
**Score:** — (semantico) | **ID:** a60c19876d644f59

ALERTA CRÍTICO: O sistema de proteção (desvio para Rampa 01) depende exclusivamente da leitura da etiqueta de rastreabilidade pelos scanners.
Risco: Caixas do tipo BIN (ou volumes sem etiqueta legível) não possuem identificação sistêmica.
Consequência: Sem a leitura ("No Read"), o WCS não consegue identificar o volume e não acionará o desvio de segurança para a Rampa 01.
Impacto: Por inércia do fluxo mecânico, a caixa BIN seguirá pela esteira principal e entrará na arqueadora, resultando em arqueação indevida com alto risco de avaria à embalagem e ao equipamento.
Termo de Responsabilidade: A INVENT não se responsabiliza por danos, avarias ou prejuízos causados a caixas BIN ou volumes sem etiqueta que forem inseridos na linha, uma vez que a ausência de identificação impede a atuação da regra de segurança.

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - TRANSBORDO LOTEVALIDADE.docx`  
**Heading:** Limitações Técnicas (Caixas BIN)  
**Score:** — (semantico) | **ID:** b2ca0b6fec808daa

ALERTA CRÍTICO: O sistema de proteção (desvio para Rampa 01) depende exclusivamente da leitura da etiqueta de rastreabilidade pelos scanners.
Risco: Caixas do tipo BIN (ou volumes sem etiqueta legível) não possuem identificação sistêmica.
Consequência: Sem a leitura ("No Read"), o WCS não consegue identificar o volume e não acionará o desvio de segurança para a Rampa 01.
Impacto: Por inércia do fluxo mecânico, a caixa BIN seguirá pela esteira principal e entrará na arqueadora, resultando em arqueação indevida com alto risco de avaria à embalagem e ao equipamento.
Termo de Responsabilidade: A INVENT não se responsabiliza por danos, avarias ou prejuízos causados a caixas BIN ou volumes sem etiqueta que forem inseridos na linha, uma vez que a ausência de identificação impede a atuação da regra de segurança.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** 9dee129a2adda093

Sistema WCS deverá ter 2 regras, etiqueta de Andradina e etiqueta gerada no CD;
Etiqueta de Andradina, validar o “Código RG”
Imagem abaixo exibe qual o campo do RG (em amarelo):
Exemplo de tela no SAP:
Etiqueta gerada no CD, validar os últimos 10 números/dígitos (em amarelo): “2030538547”

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Etiqueta de Caixa (ZPL)  
**Score:** — (semantico) | **ID:** 5a8e5b7d91e5cc00

CT~~CD,~CC^~CT~
^XA~TA000~JSN^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR4,4~SD15^JUS^LRN^CI0^XZ
^XA
^MMT
^PW641
^LL1758
^LS0
^FO0,1088^GFA,05120,05120,00020,:Z64:eJzt1zGO1TAQANCYX6TMEXyNLZByJUq6BHEALoA4A
yUFEpboOQFCoaFCYITE+utnPdjjxJkZD9rVtvyRVis9JfF4PPGPu+4a13hEjLBKOgHAIswmi8ImaC4 0mSA0jwO4YzaggZNDpPDNEOKBhVjaZrM/il2aVFLMh/W7udYisWG/jszY7uYVe3vYuNs7Zmc5uTTdg FP+zA3v/87NCgO0APCD25Bv/9aYJcUymw1wS83dKNah/aY2SzthgbNdhBmfbOaWS6bZmZqT1m8dIAx XRxp0udzMPuSyT3B2xPo8DHBL04umtRzczsJSu5iylsJGxewDbXiQzZrdKNa15qRZrH1jS6ksM18ew Qybe+K2rxs10MwrBpoFxVLarUVpH/Mwwl7I9U1LNmu29orhy84t4BsmjddqM1arZC6I+Sb7WuwXtYt iW62EBcWwVtJAsyAtYo9zW4fWwkkx3N+lWcV6xbrGIv4TOWOXC1s6I2qPXTlJg6b2eHNrQbGoGMyt+ ea6/EObbGE1VSw80iwa9um9BrghCHOmNZ8XU1gugTSYUycEYT4t5iosv0nSck825qgNdY2E4fXcVsV KrVb/eIuNjcT62rvCcC+Jz4i9KtNj9lKxbW+Kz7m5jNVOaJgSt4hfRdxW3LC4laRvmHn8FHm6m/mXL diH7++3J3lNX+/WZXNDWl94w80uyb4I88ymZDPaJ25jtp/UJs260Q+lbUqM6c5uynY7H+Y6abbahVi aLeDzXGt31YZUPVOuWw4Lu5GGWdMCoJFGiOnP7z2HccINx++9vtsKxSIx2KxO2BCrE0ELFmiCpfu4T VCj2vhAs4eRwtSoudQPd3IwqR/45HhgqpGv9HZYksxBNRl62ujbx9VBZmJbFfj5yvKJHVnLY9jAE9m wOaxd4xrX+O/jL4RPkCM=:7D2C
^FT76,591^A0B,39,38^FH\^FDT R A N S P O R T E^FS
^FT76,1676^A0B,39,38^FH\^FDR E M E T E N T E^FS
^FT76,1070^A0B,39,38^FH\^FDD E S T I N A T A R I O^FS
^FT518,370^A0B,31,31^FH\^FD3000059340^FS
^FT526,869^A0B,39,38^FH\^FD2026643354^FS
^FT526,1516^A0B,39,38^FH\^FD2026643354^FS
^FT518,1071^A0B,31,31^FH\^FDNro. Caixa:^FS
^FT518,1677^A0B,31,31^FH\^FDNro. Caixa:^FS
^FT135,1070^A0B,39,38^FH\^FDSullevan Teste 2^FS
^FT425,869^A0B,28,28^FH\^FD1139763067766-01^FS
^FT387,868^A0B,28,28^FH\^FD15.06.2021 13:10^FS
^FT425,1070^A0B,25,24^FH\^FDNro. Pedido Site:^FS
^FT387,1070^A0B,25,24^FH\^FDData/Hora Pedido:^FS
^FT327,920^A0B,28,28^FH\^FD^FS
^FT355,920^A0B,28,28^FH\^FD^FS
^FT327,1070^A0B,25,24^FH\^FDComplemento:^FS
^FT287,1070^A0B,25,24^FH\^FD05577-000-SAO PAULO/SP^FS
^FT242,1676^A0B,25,24^FH\^FDJARDIM JARAGUA^FS
^FT242,1070^A0B,25,24^FH\^FDJARDIM ADHEMA^FS
^FT196,1070^A0B,25,24^FH\^FDRODOVIA RAPOSO TAVARES,880^FS
^BY120,120^FT615,155^BXB,10,200,0,0,1,~
^FH\^FD3000059340^FS
^BY120,120^FT615,1239^BXB,10,200,0,0,1,~
^FH\^FD1139763067766-01^FS
^BY100,100^FT290,1230^BXB,10,200,0,0,1,~
^FH\^FD850001299^FS
^FO23,613^GB602,0,1^FS
^FO25,1100^GB604,0,1^FS
^FT135,1676^A0B,39,38^FH\^FDSWIFT^FS
^FT196,1676^A0B,25,24^FH\^FDVIA ANHANGUERA,SN^FS
^FT287,1676^A0B,25,24^FH\^FD05275-000-SAO PAULO/SP^FS
^FT332,1676^A0B,25,24^FH\^FDSeparador:^FS
^FT377,1676^A0B,25,24^FH\^FDData/Hora:^FS
^FT422,1337^A0B,25,24^FH\^FDNro. Volumes:^FS
^FT422,1676^A0B,25,24^FH\^FDPeso Liq:^FS
^FT467,1676^A0B,25,24^FH\^FDPeso Bruto:^FS
^FT467,1071^A0B,25,24^FH\^FDNro. Remessa:^FS
^FT470,869^A0B,28,28^FH\^FD850001299^FS
^FT210,480^A0B,120,120^FH\^FD5058^FS
^FT280,600^A0B,60,45^FH\^FD^FS
^FT410,450^A0B,100,80^FH\^FD1/1^FS
^FT410,300^A0B,70,70^FH\^FDcx^FS
^FT470,520^A0B,45,45^FH\^FDDt.Janela:^FS
^FT470,330^A0B,45,45^FH\^FD02.07.2021^FS
^FT518,520^A0B,45,45^FH\^FD^FS
^FT335,1516^A0B,28,28^FH\^FDEC5128^FS
^FT380,1516^A0B,28,28^FH\^FD24.06.2021 10:49^FS
^BY3,3,64^FT614,1030^BCB,,N,N,N,A
^FD113976306776601^FS
^FT425,1161^A0B,28,28^FH\^FD001^FS
^FT425,1516^A0B,28,28^FH\^FD0,125 KG^FS
^FT470,1516^A0B,28,28^FH\^FD0,572 KG^FS
^BY3,3,64^FT614,1594^BCB,,N,N
^FD>;2026643354^FS
^FT590,530^A0B,45,45^FH\^FDNormal^FS
^FO21,17^GB610,1684,8^FS
^PQ1,0,1,Y^XZ

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY - INDUCAO SORTER REV1.docx`  
**Heading:** Etiqueta do Pallet  
**Score:** — (semantico) | **ID:** f6fe378a29dd7c4e

Velox passará a imprimir a etiqueta que deve ser vinculada a cada fechamento de PTL. Assim que o pallet for fechado em qualquer um dos três cenários descritos no  Fechamento do Pallet.
O número da etiqueta deve ser gerada de maneira sequencial tendo 17 caracteres, sendo o prefixo “CPLT33” e os demais utilizados para a sequência determinada pelo sistema. Segue alguns exemplos : CPLT3300000000255, CPLT3300000004875.
Será disponibilizado uma impressora por rampa que deve estar dentro da rede da automação para que ocorra a comunicação necessária com o sistema Velox.
O tamanho das etiquetas será de: 10cm x 7,5cm.
Modelo da etiqueta que deve ser impressa:
OBS: cada campo que é enviado nas integrações está sendo referenciado neste modelo exibido a seguir

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - ADTV - PMB.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** 301a96ec0e921795

O layout (tamanho e disposição) para esse será conforme demonstrado nas imagens abaixo.
O tamanho da etiqueta proposta é 10cm de altura e 15cm de largura

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** 44fe38ba68ebd5fc

Invent não controlará impressão do documento, apenas enviará as informações dos campos citados acima.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** 78066f6a8a0b16bf

Invent não controlará impressão do documento, apenas enviará as informações dos campos citados acima.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Etiqueta Enjoei  
**Score:** — (semantico) | **ID:** 8b95ebce75400186

Etiqueta Amazon

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Etiqueta Super Lojas Brasil  
**Score:** — (semantico) | **ID:** 1f15b2549e34f07a

Etiqueta Zara Brasil

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Pedido Mono Máquina  
**Score:** — (semantico) | **ID:** cbb04a3e4e81f166

Operador irá acessar o sistema WCS e acessar a tela de impressão de etiquetas, onde irá selecionar o tipo de pedido mono maquina, e fará a impressão por posto de picking, ao realizar a impressão de todas as etiquetas de mono maquina, se desloca para o posto e realiza a leitura da etiqueta no scanner fixo, e realiza a separação da máquina no local indicado pelo led, fixa a etiqueta na caixa da maquina e induz a caixa na esteira que deverá seguir para o sorter.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** b0f52903b12da448

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no WCS (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no WCS (não é editável).
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
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** 354b2edfbd0bd531

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no WCS (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no WCS (não é editável).
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
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Pedido Mono Máquina  
**Score:** — (semantico) | **ID:** 078acd2ba2e6519e

Operador irá acessar o sistema WCS e acessar a tela de impressão de etiquetas, onde irá selecionar o tipo de pedido mono maquina, e fará a impressão por posto de picking, ao realizar a impressão de todas as etiquetas de mono maquina, se desloca para o posto e realiza a leitura da etiqueta no scanner fixo, e realiza a separação da máquina no local indicado pelo led, fixa a etiqueta na caixa da maquina e induz a caixa na esteira que deverá seguir para o sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Produto  
**Score:** — (semantico) | **ID:** 82cd9e0f08d91039

Na tela Produto, podemos incluir, editar e excluir um produto. Podemos também imprimir a etiqueta com o EAN cadastrado. Nesta tela representada pela figura, podemos ver os seguintes dados:
Código: Número de identificação do produto no WCS (não editável).
Código do Produto: Número de identificação do produto SKU.
Descrição: Nome/descrição do produto.
Clicando em incluir/editar, a tela representada na figura será apresentada, com os seguintes dados:
Código: Número de identificação do produto no WCS (não é editável).
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
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Impressão e Reimpressão de etiquetas  
**Score:** — (semantico) | **ID:** 848abc0062aaa463

Na tela de impressão de etiqueta, operador poderá imprimir ou reimprimir uma etiquet já impressa anteriormente.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Impressão e Reimpressão de etiquetas  
**Score:** — (semantico) | **ID:** 9d5ac51891651dbc

Na tela de impressão de etiqueta, operador poderá imprimir ou reimprimir uma etiquet já impressa anteriormente.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** f3976b8d75bf6f4a

Todas as etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Controlados (2º Andar/Nível)  
**Score:** — (semantico) | **ID:** dee49fc2814d7518

A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação (Responsabilidade EMIS Minas), essa identificação será necessária para ser vinculada a um pedido e ao ser lida nos postos de separação o sistema VELOX identificar se existem produtos a serem separados.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente na tela.
Após o vínculo da caixa plástica com o pedido, a caixa segue pela linha expressa, onde existirá um leitor fixo para cada estação de separação.
Após a leitura, caso tenha produtos a serem separados no posto correspondente, a caixa então é desviada.
Caso não tenha produtos a serem separados no posto, a caixa segue na linha de separação para o próximo posto.
Nesse Order Start o operador conseguirá iniciar somente pedidos que contém tipos de produtos controlados, por exemplo:
Pedidos com produtos do tipo controlado.
Pedidos com produtos dos tipos controlados, baixo giro e ou alto giro.
Obs.: Pedidos que não tiverem nenhum produto do tipo controlado não será visível nesse Order Start.
Picking Frente: Teremos 14 postos/flowracks de separação sendo:
04 postos/flowrack – com 1 display de 3 dígitos por posição.
10 postos/flowrack – com 1 display de 10 dígitos por módulo.
Picking Costas: Teremos 42 postos/flowracks de separação com 1 display de 10 dígitos por módulo.
A conferência de volumes do setor de controlados poderão ser realizadas no próprio setor.
As caixas plásticas do setor de controlados, ao serem lidas nos postos de separação não devem verificar picking, não devem ser desviadas em nenhum outro posto, deve seguir para o sorter.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Baixo Giro (1º Andar/Nível)  
**Score:** — (semantico) | **ID:** deb535836904695c

A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido e ao ser lida nos postos de separação para o sistema VELOX identificar se existem produtos a serem separados (Responsabilidade EMIS MINAS).
Após o vínculo da caixa plástica com o pedido, a caixa segue pela linha expressa, onde existirá um leitor fixo para cada estação de separação.
Após a leitura, caso tenha produtos a serem separados no posto correspondente, a caixa então é desviada.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente na tela.
No início da linha operador fará a leitura do código de barras do pedido e da caixa plástica, nesse momento o sistema VELOX fará o vínculo da caixa plástica com o pedido.
Caso não tenha produtos a serem separados no posto, a caixa segue na linha de separação para o próximo posto.
Nesse Order Start o operador conseguirá iniciar somente pedidos que contém tipos de produtos baixo giro e ou alto giro, por exemplo:
Pedidos com produtos do tipo baixo giro.
Pedidos com produtos dos tipos baixo giro e alto giro.
Obs.: Pedidos que não tiverem nenhum produto do tipo baixo giro não será visível nesse Order Start.
Picking Frente:
Teremos 16 postos/flowracks – com 1 display de 10 dígitos por módulo.
Picking Costas:
Teremos 66 postos/flowracks – com 1 display de 10 dígitos por módulo.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Alto Giro (Térreo)  
**Score:** — (semantico) | **ID:** 283817b2bf2e3d38

A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido e ao ser lida nos postos de separação para o sistema VELOX identificar se existem produtos a serem separados (Responsabilidade EMIS MINAS).
Após o vínculo da caixa plástica com o pedido, a caixa segue pela linha expressa, onde existirá um leitor fixo para cada estação de separação.
Após a leitura, caso tenha produtos a serem separados no posto correspondente a caixa então é desviada.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente na tela.
No início da linha operador fará a leitura do código de barras do pedido e da caixa plástica, nesse momento o sistema VELOX fará o vínculo da caixa plástica com o pedido.
Caso não tenha produtos a serem separados no posto, a caixa segue na linha de separação para o próximo posto.
Nesse Order Start o operador conseguirá iniciar somente pedidos que contém tipos de produtos alto giro, por exemplo:
Pedidos somente com produtos do tipo alto giro.
Obs: Pedidos que não tiverem nenhum produto do tipo alto giro não será visível nesse Order Start.
Picking Frente: Teremos 52 postos/flowracks de separação sendo:
24 postos/flowrack – com 1 display de 3 dígitos por posição.
28 postos/flowrack – com 1 display de 10 dígitos por módulo.
Picking Costas: Teremos 44 postos/flowracks de separação com 1 display de 10 dígitos por módulo.
Os postos de separação do setor térreo seguiram o conforme o desenho abaixo, conforme solicitação do cliente:

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** — (semantico) | **ID:** f9e50b887833f66d

As impressões de etiquetas de identificação de caixa plástica serão de responsabilidade EMIS Minas.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Etiqueta de Volumes  
**Score:** — (semantico) | **ID:** 9efbceb9acc16335

Impressão de etiquetas será de responsabilidade WMS.
As etiquetas dos volumes dos pedidos serão impressas na conferência do volume.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Controlados (2º Andar/Nível)  
**Score:** — (semantico) | **ID:** 06146bd4d97ed0bc

A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.
No início da linha operador fará a leitura do código de barras do pedido e da caixa plástica, nesse momento o sistema VELOX fará o vínculo da caixa plástica com o pedido.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente na tela.
Nesse Order Start o operador conseguirá iniciar somente pedidos que contém tipos de produtos controlados, por exemplo:
Pedidos com produtos do tipo controlado.
Pedidos com produtos dos tipos controlados, baixo giro e ou alto giro.
Obs: Pedidos que não tiverem nenhum produto do tipo controlado não será visível nesse Order Start.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Baixo Giro (1º Andar/Nível)  
**Score:** — (semantico) | **ID:** c4c5657f790807be

A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.
No início da linha operador fara a leitura do código de barras do pedido e da caixa plástica, nesse momento o sistema VELOX fará o vínculo da caixa plástica com o pedido.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente na tela.
Nesse Order Start o operador conseguirá iniciar somente pedidos que contém tipos de produtos baixo giro e ou alto giro, por exemplo:
Pedidos com produtos do tipo baixo giro.
Pedidos com produtos dos tipos baixo giro e alto giro.
Obs: Pedidos que não tiverem nenhum produto do tipo baixo giro não será visível nesse Order Start.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Alto Giro (Térreo)  
**Score:** — (semantico) | **ID:** 367ffe521f0bb7f5

A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.
No início da linha operador fara a leitura do código de barras do pedido e da caixa plástica, nesse momento o sistema VELOX fará o vínculo da caixa plástica com o pedido.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente na tela.
Nesse Order Start o operador conseguirá iniciar somente pedidos que contém tipos de produtos alto giro, por exemplo:
Pedidos somente com produtos do tipo alto giro.
Obs: Pedidos que não tiverem nenhum produto do tipo alto giro não será visível nesse Order Start.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** — (semantico) | **ID:** d062f210185de1d7

As impressões de etiquetas serão de responsabilidade do cliente.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Modelo de Etiqueta  
**Score:** — (semantico) | **ID:** 7ca721d62ea10931

Abaixo o modelo de etiqueta que será lido via RFID.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** 8f476a693ae660fc

Invent não controlará impressão de documentos e etiquetas, apenas enviará as informações dos campos citados acima.
Impressões (Responsabilidade do Cliente).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.12 – Informações de lotes  
**Score:** — (semantico) | **ID:** a1cfa72da66bd829

O WCS Velox deve mostrar a informação de lote por etiqueta/pallet. A informação de lote contém no código de barras da etiqueta do pallet. Deve mostrar todos os lotes do pallet.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Busca pallets para expedição (BPE)  
**Score:** — (semantico) | **ID:** 1f696d25a694a3a7

Na imagem abaixo é possivel verificar os detalhes do algoritmo de busca de pallets para a expedição:
Para cada TREL em automático, buscar os pallets completos que atendam aos critérios da ordem:
Mesma SKU da ordem;
Faixa maior ou igual a da ordem;
Mesmo centro da ordem;
Somente pallets completos, ou seja, que não possua itens reservados para outras ordens;
Pallets com status do local em armazenamento (StoredOnShelf).
Caso a lista esteja vazia, fazer a mesma busca realizada no item anterior, seguindo os mesmos critérios, porém procurando por pallets incompletos e que estejam armazenados ou em trânsito (“StoredOnShelf”, “ToPickingArea”, “ToBeDelivered” ou “Delivering”);
Caso o pallet já atenda alguma outra ordem de saída (isto é, possua itens de ordem de saída com status diferente de “Delivered”), para atender esta nova ordem ela deve ser do mesmo tipo de movimento das ordens existentes sobre o pallet (ainda não entregues);
Ordenar a lista de pallets (que irá conter somente pallets completos ou somente pallets incompletos) de acordo com as seguintes prioridades:
Por data de validade (FEFO);
Quantidade de caixas do pallet (ascendente);
Número de missões do TREL (ascendente);
O resultado final é a lista ordenada dos pallets que atendem à ordem de saída.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.12 – Informações de lotes  
**Score:** — (semantico) | **ID:** edd1abd37141baf7

O WCS Velox deve mostrar a informação de lote por etiqueta/pallet. A informação de lote contém no código de barras da etiqueta do pallet. Deve mostrar todos os lotes do pallet.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Busca pallets para expedição (BPE)  
**Score:** — (semantico) | **ID:** c13c80fb539106db

Na imagem abaixo é possivel verificar os detalhes do algoritmo de busca de pallets para a expedição:
Para cada TREL em automático, buscar os pallets completos que atendam aos critérios da ordem:
Mesma SKU da ordem;
Faixa maior ou igual a da ordem;
Mesmo centro da ordem;
Somente pallets completos, ou seja, que não possua itens reservados para outras ordens;
Pallets com status do local em armazenamento (StoredOnShelf).
Caso a lista esteja vazia, fazer a mesma busca realizada no item anterior, seguindo os mesmos critérios, porém procurando por pallets incompletos e que estejam armazenados ou em trânsito (“StoredOnShelf”, “ToPickingArea”, “ToBeDelivered” ou “Delivering”);
Caso o pallet já atenda alguma outra ordem de saída (isto é, possua itens de ordem de saída com status diferente de “Delivered”), para atender esta nova ordem ela deve ser do mesmo tipo de movimento das ordens existentes sobre o pallet (ainda não entregues);
Ordenar a lista de pallets (que irá conter somente pallets completos ou somente pallets incompletos) de acordo com as seguintes prioridades:
Por data de validade (FEFO);
Quantidade de caixas do pallet (ascendente);
Número de missões do TREL (ascendente);
O resultado final é a lista ordenada dos pallets que atendem à ordem de saída.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Impressão de Etiquetas  
**Score:** — (semantico) | **ID:** 6153b5c46d603f93

Todas as etiquetas processadas durante o processo da automação serão impressas pelo Velox.
Para compor de maneira correta a reutilização das etiquetas do Picking Cart e do Coletor durante todo o processo da automação existiram ranges do sequencial de etiqueta Velox de acordo com cada tipo de caixa e esse sequencial é fixo de acordo com a tabela abaixo:
O Velox deve conter uma tela de reimpressão de etiquetas para casos que for necessário.
As etiquetas de expedição da caixa final serão de responsabilidade Velox e impressas na área de conferência após realização do processo de picking.

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Impressão de etiqueta  
**Score:** — (semantico) | **ID:** 780e18460f58dab5

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para o posto de separação.
Obs.: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número: 557788 ao realizar o cálculo de cubagem, gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 1/3 – número do volume: 557788001
Volume 2/3 – número do volume: 557788002
Volume 3/3 – número do volume: 557788003
Exemplo de sugestão de etiqueta a ser impressa pelo Velox:

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Impressão de Romaneio  
**Score:** — (semantico) | **ID:** 38e896fd30d83323

Após todos os volumes do romaneio serem finalizados, o romaneio estará disponível para impressão na tela de impressão de romaneio. Nessa tela, o operador deve inserir o número do romaneio que deseja imprimir. O Velox irá gerar a impressão a nível de pedido, indicando em quais pallets ou gaiolas cada volume está alocado, proporcionando uma visão clara e organizada da distribuição dos volumes.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Impressão de Etiquetas  
**Score:** — (semantico) | **ID:** e9c084c3aac1f7b2

Todas as etiquetas processadas durante o processo da automação serão impressas pelo Velox.
Para compor de maneira correta a reutilização das etiquetas do Picking Cart e do Coletor durante todo o processo da automação existiram ranges do sequencial de etiqueta Velox de acordo com cada tipo de caixa e esse sequencial é fixo de acordo com a tabela abaixo:
O Velox deve conter uma tela de reimpressão de etiquetas para casos que for necessário.
As etiquetas de expedição da caixa final serão de responsabilidade Velox e impressas na área de conferência após realização do processo de picking.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Impressão de Etiquetas  
**Score:** — (semantico) | **ID:** 2e8cc6dc307349f3

Todas as etiquetas processadas durante o processo da automação serão impressas pelo WCS.
Para compor de maneira correta a reutilização das etiquetas do Picking Cart e do Coletor durante todo o processo da automação existiram ranges do sequencial de etiqueta WCS de acordo com cada tipo de caixa e esse sequencial é fixo de acordo com a tabela abaixo:
O WCS deve conter uma tela de reimpressão de etiquetas para casos que for necessário.
As etiquetas de expedição da caixa final serão de responsabilidade do WCS e impressas na área de conferência após realização do processo de picking.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** 1dfb0ce16cf94000

Impressão de etiquetas será de responsabilidade TPC, compartilhar modelos de etiqueta com time INVENT. (Invent sugerir tamanho e especificações mínimas de códigos de barras).

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** 75529f2e485a0672

Impressão de etiquetas será de responsabilidade TPC, compartilhar modelos de etiqueta com time INVENT.

---
**Origem:** [I23] 2023 — `I23-1604 - PROJETO CARDEX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** 7d373c3346005081

Impressões de etiquetas, são de responsabilidades do cliente.

---
**Origem:** [I23] 2023 — `I23.1604 - ESPECIFICACAO DE SOFTWARE - PROJETO CARDEX 2024.docx`  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** 7c25d28913970c4e

Impressões de etiquetas, são de responsabilidades do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Impressão de etiquetas  
**Score:** — (semantico) | **ID:** e4fd35de9400c3d4

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox
A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** e9d558648e687124

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Etiqueta de Produção  
**Score:** — (semantico) | **ID:** 1eb0beb097bbbf9e

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Detalhe código de barras (Etiqueta produção)  
**Score:** — (semantico) | **ID:** 7e5ee5f53526afd7

No código de barras da etiqueta de produção do cliente existe todas as informações referente ao produto como:
Código Material
Código Identificador: (90)
Velox identificará o PRODUTO por esse código
Lote
Código Identificador: (10)
Velox identificará o LOTE por esse código
Quantidade
Código Identificador: (30)
Velox não fara ó uso desse código
UC
Código Identificador: (92)
Velox não fara ó uso desse código
Velox deverá filtrar as informações lidas no código de barras, e buscar as informações corretas (produto e quantidade) utilizadas pelo sistema como as informações de código do produto e lote solicitados no pedido.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 85ab72cee4aeeca5

Separação de full case (caixa fechada) é de responsabilidade do cliente.
Velox realiza a impressão das etiquetas de full case (caixa fechada).
Operador com as etiquetas impressas se desloca até o local de separação, realiza a separação do produto solicitado.
Após a separação, no sistema Velox, operador deverá realizar a leitura do código de barras do volume impresso na etiqueta de full case (caixa fechada) gerada no início do processo pelo Velox, assim notificando o sistema Velox que o volume foi separado.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido cancelar esse pedido no sistema Velox devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Impressão de etiquetas  
**Score:** — (semantico) | **ID:** 6226d016aa02a9b8

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox. A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** e21566ef0e66edeb

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta de Produção  
**Score:** — (semantico) | **ID:** e34bdd5599b50f6c

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Detalhe código de barras (Etiqueta produção)  
**Score:** — (semantico) | **ID:** 282d495fb56ad5ae

No código de barras da etiqueta de produção do cliente existe todas as informações referente ao produto como:
Código Material
Código Identificador: (90)
Velox identificará o PRODUTO por esse código
Lote
Código Identificador: (10)
Velox identificará o LOTE por esse código
Quantidade
Código Identificador: (30)
Velox não fara ó uso desse código
UC
Código Identificador: (92)
Velox não fara ó uso desse código
Velox deverá filtrar as informações lidas no código de barras, e buscar as informações corretas (produto e quantidade) utilizadas pelo sistema como as informações de código do produto e lote solicitados no pedido.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Impressão de etiquetas  
**Score:** — (semantico) | **ID:** ad8ea97e88d44c9e

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox. A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 4da3286521609482

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta de Produção  
**Score:** — (semantico) | **ID:** d818c13da33009fc

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Detalhe código de barras (Etiqueta produção)  
**Score:** — (semantico) | **ID:** 38cde02f550e52ca

No código de barras da etiqueta de produção do cliente existe todas as informações referente ao produto como:
Código Material
Código Identificador: (90)
Velox identificará o PRODUTO por esse código
Lote
Código Identificador: (10)
Velox identificará o LOTE por esse código
Quantidade
Código Identificador: (30)
Velox não fara ó uso desse código
UC
Código Identificador: (92)
Velox deve enviar esse campo para o WMS na integração de confirmação de separação
Velox deverá filtrar as informações lidas no código de barras, e buscar as informações corretas (produto e quantidade) utilizadas pelo sistema como as informações de código do produto e lote solicitados no pedido.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.36  
**Score:** — (semantico) | **ID:** decd29ac579edfaf

Sistema Velox, deve permitir a reimpressão de etiquetas, em casos que haja a necessidade de alteração do numero de lote do volume.
Após a alteração de lote no sistema Velox, os volumes poderão ser reimpressos pela opção “Reimpressão” e deverão estar disponíveis para conferência.
Referência: Interna
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Impressão de etiquetas  
**Score:** — (semantico) | **ID:** da02490d9e2b0a97

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 6b41eeacb6debe3a

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta de Produção  
**Score:** — (semantico) | **ID:** 19ab86e667c59d5d

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Detalhe código de barras (Etiqueta produção)  
**Score:** — (semantico) | **ID:** 3e4cdcf83078ffc7

No código de barras da etiqueta de produção do cliente existe todas as informações referente ao produto como:
Código Material
Código Identificador: (90)
Velox identificará o PRODUTO por esse código
Lote
Código Identificador: (10)
Velox identificará o LOTE por esse código
Quantidade
Código Identificador: (30)
Velox não fara ó uso desse código
UC
Código Identificador: (92)
Velox deve enviar esse campo para o WMS na integração de confirmação de separação
Velox deverá filtrar as informações lidas no código de barras, e buscar as informações corretas (produto e quantidade) utilizadas pelo sistema como as informações de código do produto e lote solicitados no pedido.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.36  
**Score:** — (semantico) | **ID:** 1e9aa751b3e8dfc6

Sistema Velox, deve permitir a reimpressão de etiquetas, em casos que haja a necessidade de alteração do numero de lote do volume.
Após a alteração de lote no sistema Velox, os volumes poderão ser reimpressos pela opção “Reimpressão” e deverão estar disponíveis para conferência.
Referência: Interna
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Impressão de etiquetas  
**Score:** — (semantico) | **ID:** cc526ddcb7b99f9f

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox
A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 55060f941b8250f1

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Etiqueta de Produção  
**Score:** — (semantico) | **ID:** 3118b08c93c0c971

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Detalhe código de barras (Etiqueta produção)  
**Score:** — (semantico) | **ID:** c890e1da8934b988

No código de barras da etiqueta de produção do cliente existe todas as informações referente ao produto como:
Código Material
Código Identificador: (90)
Velox identificará o PRODUTO por esse código
Lote
Código Identificador: (10)
Velox identificará o LOTE por esse código
Quantidade
Código Identificador: (30)
Velox não fara ó uso desse código
UC
Código Identificador: (92)
Velox não fara ó uso desse código
Velox deverá filtrar as informações lidas no código de barras, e buscar as informações corretas (produto e quantidade) utilizadas pelo sistema como as informações de código do produto e lote solicitados no pedido.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 5f07cd4d21cad6fe

Separação de full case (caixa fechada) é de responsabilidade do cliente.
Velox realiza a impressão das etiquetas de full case (caixa fechada).
Operador com as etiquetas impressas se desloca até o local de separação, realiza a separação do produto solicitado.
Após a separação, no sistema Velox, operador deverá realizar a leitura do código de barras do volume impresso na etiqueta de full case (caixa fechada) gerada no início do processo pelo Velox, assim notificando o sistema Velox que o volume foi separado.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Impressão de etiquetas  
**Score:** — (semantico) | **ID:** 4eb79e15c848f757

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 93bd3ca0bdf0fe2f

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta de Produção  
**Score:** — (semantico) | **ID:** edc591cd32acd6cf

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Detalhe código de barras (Etiqueta produção)  
**Score:** — (semantico) | **ID:** 7c41d3514f061f54

No código de barras da etiqueta de produção do cliente existe todas as informações referente ao produto como:
Código Material
Código Identificador: (90)
Velox identificará o PRODUTO por esse código
Lote
Código Identificador: (10)
Velox identificará o LOTE por esse código
Quantidade
Código Identificador: (30)
Velox não fara ó uso desse código
UC
Código Identificador: (92)
Velox não fara ó uso desse código
Velox deverá filtrar as informações lidas no código de barras, e buscar as informações corretas (produto e quantidade) utilizadas pelo sistema como as informações de código do produto e lote solicitados no pedido.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiquetagem  
**Score:** — (semantico) | **ID:** ac56a759c59d916e

Todas as etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** 6c06d70e1517587f

Exemplo de etiqueta dado pela Shein:
Lembrando que o processo de etiquetagem será de total responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiquetagem  
**Score:** — (semantico) | **ID:** b9b0f6b81978ab97

Todas as etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** bd610f9bc256eafe

Exemplo de etiqueta dado pela Shein:
Lembrando que o processo de etiquetagem será de total responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Etiquetagem  
**Score:** — (semantico) | **ID:** 66c4d22ad073a711

Todas as etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** 8f59432e4c842d58

Exemplo de etiqueta dado pela Shein:
Lembrando que o processo de etiquetagem será de total responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Etiquetagem  
**Score:** — (semantico) | **ID:** d1981697ca743b4d

Todas as etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** 3d879a24bae9d9d1

Exemplo de etiqueta:
Lembrando que o processo de etiquetagem será de total responsabilidade do cliente.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** 9c85ad1e9ac78c32

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes, conforme recebido anteriormente.
Exemplo sugestão de etiqueta a ser impressa pelo Velox:

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Display 6 Digitos (FlowRack Frente)  
**Score:** — (semantico) | **ID:** 73d75ee40bed2cbd

Informação do número do volume/pedido (1 unidade por estação de separação)

---
**Origem:** [I23.1602] 2023 — `I23.1602 - DOCUMENTO DE ESPECIFICAÇÃO REV1- SEPARAÇÕES ET.VELOX - PETER.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** 6b561ae0901474e0

A etiqueta atual impressa pelo sistema Kaizen, estão presentes 9 campos de informações, na integração que temos entre os sistemas Velox e Kaizen, o sistema Velox recebe 6 desses 9 campos da etiqueta.
Para que o Velox realize a impressão da etiqueta com todas as informações necessárias, Kaizen deve passar a enviar esses 3 campos faltantes para o Velox na integração de pedido.
Etiqueta atual:				Sugestão de etiqueta, impressa Velox:
Abaixo estão em detalhes os 11 campos presentes na etiqueta, e detalhado os campos que o Velox recebe atualmente via integração.

---
**Origem:** [I23.1615] 2023 — `I24.114-ESPECIFICACAO DE SOFTWARE - ADITIVO - DADOS DE NOTA FISCAL.docx`  
**Heading:** Layout de impressão (Pedidos Shopee)  
**Score:** — (nome-topico) | **ID:** 6aa8706407b10f69

Para pedidos da shopee o WCS irá utilizar o layout a seguir:

Layout Visual:

---
**Origem:** [I23.1615] 2023 — `I24.114-ESPECIFICACAO DE SOFTWARE - ADITIVO - IMPRESSÃO BOLETO.docx`  
**Heading:** Layout de impressão (Boleto)  
**Score:** — (nome-topico) | **ID:** e860c60a99512262

Especificação da Etiqueta:
Comprimento: 10,4 cm
Altura: 5,9 cm
Observações:
A área total da etiqueta deve ser considerada ao projetar o layout, garantindo margem de segurança para impressão.
Recomenda-se deixar pelo menos 3 mm de margem interna para evitar cortes indesejados nas bordas da etiqueta.
Layout Visual:

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Aditivo Etiqueta.docx`  
**Heading:** Impressão de etiqueta  
**Score:** — (semantico) | **ID:** c2e0b1afc665b1ac

Com as informações recebidas via integração no início do processo, WCS realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo WCS, e induz a caixa na linha, seguindo então para o posto de separação.
Obs.: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número: 557788 ao realizar o cálculo de cubagem, gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 1/3 – número do volume: 557788001
Volume 2/3 – número do volume: 557788002
Volume 3/3 – número do volume: 557788003
Será adicionado a informação SHP que representará o número do pedido da SHOPPE daquele volume.
Resultado da etiqueta com a alteração solicitada:

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Impressão de etiqueta  
**Score:** — (semantico) | **ID:** 561c8857d2865c9c

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para o posto de separação.
Na tela de impressão de etiqueta operador poderá editar a informação de transportadora da etiqueta antes de realizar a impressão.
Obs.: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número: 557788 ao realizar o cálculo de cubagem, gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 1/3 – número do volume: 557788001
Volume 2/3 – número do volume: 557788002
Volume 3/3 – número do volume: 557788003
Exemplo de sugestão de etiqueta a ser impressa pelo Velox:

---
**Origem:** [I23.1701] 2023 — `I24.114-ESPECIFICACAO DE SOFTWARE - ADITIVO - DADOS DE NOTA FISCAL.docx`  
**Heading:** Layout de impressão (Matriz e Filial)  
**Score:** — (nome-topico) | **ID:** 0ac9956d128c1f80

Após a alteração no layout, o mesmo padrão de etiqueta será utilizado tanto para as etiquetas destinadas à Matriz quanto para as etiquetas destinadas à Filial. Essa uniformização garantirá consistência na impressão das etiquetas em ambos os casos.

OBS: O MFC deve considerar os dados da Matriz ou Filial no momento da impressão de acordo com os dados enviados via integração para o volume.
Layout Visual:

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** 4c61387ef2094738

Com as informações recebidas via integração no início do processo, WCS realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado pelo WMS por pedido.
O tipo de código que será utilizado em todos os processos realizados na esteira será o Data Matrix com módulo mínimo de 1.1.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
WCS deve permitir a reimpressão das etiquetas para casos em que ela esteja ilegível para uso nos processos.
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa informado na tela de Order Start, e induz a caixa na linha, seguindo então para o posto de separação.
Observação: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo de sugestão de etiqueta a ser impressa pelo WCS:
Observação: WCS não será responsável pela impressão dos pedidos Full Case.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** 15d841447f2c17f9

Com as informações recebidas via integração no início do processo, WCS realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado pelo WMS por pedido.
O tipo de código que será utilizado em todos os processos realizados na esteira será o Data Matrix com módulo mínimo de 1.1.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
WCS deve permitir a reimpressão das etiquetas para casos em que ela esteja ilegível para uso nos processos.
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa informado na tela de Order Start, e induz a caixa na linha, seguindo então para o posto de separação.
Observação: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo de sugestão de etiqueta a ser impressa pelo WCS:
Observação: WCS não será responsável pela impressão dos pedidos Full Case.
A impressão das etiquetas é feita diretamente pelo WCS, com base nas informações de cubagem recebidas via integração. O tipo de código adotado em todos os processos da esteira é o Data Matrix, com módulo mínimo de 1.1. Será impressa uma etiqueta para cada volume. Por exemplo, se um pedido gerar três volumes, serão impressas três etiquetas, identificadas como 1/3, 2/3 e 3/3.
Após a impressão, o operador fixa manualmente cada etiqueta na respectiva caixa, respeitando o tipo e tamanho indicados na tela. Em seguida, realiza a indução dessas caixas na linha para que sigam para os postos de separação. O número do volume impresso na etiqueta é gerado pela concatenação do número do pedido com o número sequencial do volume.
O sistema permite reimpressão de etiquetas caso alguma esteja ilegível ou tenha sido danificada. A impressão de etiquetas para volumes do tipo full case não é responsabilidade do WCS; essa atividade deve ser realizada exclusivamente pelo cliente, antes da indução dos volumes na esteira.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** 7d94597394a252f3

Com as informações recebidas via integração no início do processo, WCS realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado pelo WMS por pedido.
O tipo de código que será utilizado em todos os processos realizados na esteira será o Data Matrix com módulo mínimo de 1.1.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
WCS deve permitir a reimpressão das etiquetas para casos em que ela esteja ilegível para uso nos processos.
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa informado na tela de Order Start, e induz a caixa na linha, seguindo então para o posto de separação.
Observação: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo de sugestão de etiqueta a ser impressa pelo WCS:
Observação: WCS não será responsável pela impressão dos pedidos Full Case.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** 425e255ae1c84f28

Todas as etiquetas serão de responsabilidade do cliente.
Impressões e reimpressões de etiquetas é de responsabilidade do cliente.
O sistema Velox, ao receber a informação do código de barras lido no portal de leitura, irá validar as informações de Rota Entrega, Filial Destino, Tipo de etiqueta, Cliente, Tipo de frete e Peso nas seguintes condições:
Exemplo da etiqueta que será lido no portal de leitura, hoje o cliente possui 3 (três) tipos de etiquetas diferentes, porém as informações necessárias para a validação de destino do volume, não são alterados.
No caso da informação de tipo de etiqueta, a informação está armazenada no primeiro caractere do código de barras, já para rota de entrega, filial de destino, cliente, tipo de frete e peso, as informações estão armazenadas nos 10 (dez) últimos caracteres do código de barras, conforme imagem abaixo:
As características dos filtros da etiqueta/label deverão ser parametrizáveis, isto é, a quantidade, posição, tipos e informações dos dígitos deverão ser configuráveis.
Por exemplo: atualmente os dígitos de filial destino correspondem aos três penúltimos dígitos. Caso no futuro tornem-se 4 (quatro) dígitos e suas respectivas posições sejam alteradas para os quatro primeiros dígitos do código de barras, devem ser capazes de realizar esta alteração sistemicamente sem intervenção da Invent.
(Invent avaliar possibilidade e se está no escopo do projeto)

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** 50e817b26051f9c5

Existem clientes com etiquetas integradas onde automação irá ler o código de barra inserido no volume desde sua origem e existem casos em que será necessário etiquetar os volumes com a etiqueta padrão da Ativa Log, exemplo abaixo:
Todas as etiquetas são de responsabilidade do cliente.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** fe775dd08b896397

A impressão de etiquetas é de responsabilidade do cliente.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR - Etiquetas.docx`  
**Heading:** Etiquetas BRF Salvador  
**Score:** — (semantico) | **ID:** 2ceb693a7504f6f4

As etiquetas do projeto BRF Salvador possuem diversos tipos de layouts.
Etiqueta completa
Uma das informações mais importantes que teremos que extrair do volume/etiqueta do volume é o lote. Alguns dos lotes já vem na etiqueta, outros devem ser formados diretamente pelo sistema seguindo o formato citado abaixo.
O lote da maioria dos itens é composto por 7 caracteres, sendo eles 3 pela identificação da unidade fabril, 1 final do digito do ano e dia do ano em números corridos.
Segue exemplo:
Lote 3315005 (Data Juliana) onde: 331 identificação da unidade fabril,5 é o ano (2025) e 005 é o dia (1 a 366) ou seja 05/Jan/2025
Observação: Em ano bissexto o dia 29 de fevereiro é considerado o dia 366 do ano.
O lote de produtos PFIX é formado por 10 caracteres, conforme o seguinte formato: Exemplo: 3315007070
331 → Código da fábrica/filial (UP)
5 → Ano de fabricação (2025)
007 → Data Juliana (07 de janeiro)
070 → Faixa de peso da caixa (7 kg)
Segue exemplo do Padrão GS1:
Validade é informada de trás para frente. Ano, mês e dia.
O código da validade está migrando para 17. Podemos ter os dois casos durante a operação.
Será necessário ter nos cadastros do WCS um DE/PARA entre SKU e DUN14 do produto, pois cada layout informa um dos dois e o sistema deve interpretar o que receber.
Sempre será enviado pelo SAP o range permitido pela coleta. Este range será informado pela data de fabricação do item.
Nesta primeira fase, o foco é validar o SKU/DUN14, fazer o fefo de acordo com o range de fabricação enviado pelo SAP e enviar o produto que está saindo (lote de cada item)
Código SSCC = CPF da caixa, será utilizado para a separação de caixas PVAR
O 2D é a concatenação de todos os códigos + 3 TAGS. Sendo elas :
97  Rastreabilidade
240  SKU do item
95  Código do sistema que imprime a etiqueta (não há utilidade para nós)
Caixas sem a data de fabricação no código
Código 92  SKU do produto
Marcação 1  DUN 14	 do produto
Neste layout não temos a data de fabricação em código. Sendo assim deverá armazenar através do IDOC enviado pelo SAP a data de fabricação do lote informado
Caixas sem o lote no código (Exemplo: margarinas)
Neste layout não teremos em código o lote, sendo assim teremos que formar o lote com as informações que temos nos códigos.
(91)  código SIF/ produtor do volume
Segue exemplo da caixa da foto:
3642021
364  Código Produtor
2  Ano de fabricação
021  Data juliana da fabricação (21/01/2022)
Caso este item fosse do tipo PFIX (cadastro de material):
3642021060
364  Código Produtor
2  Ano de fabricação
021  Data juliana da fabricação (21/01/2022)
060  Peso da caixa
Mesmo layout da margarina, porém com os códigos na vertical.
Etiquetas que não tem lote e não tem o código produtor no código de barras
Tem o código segregado
02  DUN14
Não temos o código produtor desta etiqueta, sendo assim terá um cadastro de lote fixo por SIF. Esta informação é retirada do código (7030) 0760292. O SIF sempre será o valor depois de “0760”
Este caso acima é feito por uma empresa terceira que não informa o código produtor. Sendo assim terá um cadastro no WCS onde toda vez que recebemos este sku/DUN14 devemos iniciar com o lote LTT + o que vier na  marcação do código (10).
Neste exemplo acima seria LTT203511

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Etiqueta de volume de separação  
**Score:** — (semantico) | **ID:** 175a1be50862485d

As etiquetas de volume de separação, serão geradas pelo WMS, no início da linha de separação.
Exemplo da etiqueta gerada pelo WMS para ser inserida na caixa de separação de fracionados:

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** 313e39367d7bd91a

Etiquetas de volume fracionado é de responsabilidade WMS.
Etiquetas de volumes caixa fechada (quando necessário) é de responsabilidade WMS.
Etiquetas de danfe simplificada (quando necessário) é de responsabilidade SAP ou 3 Corações.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Layout de etiqueta do produto  
**Score:** — (semantico) | **ID:** 09782ab8af36cf85

A etiqueta de produto é de responsabilidade Fagron.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** String DataMatrix etiqueta do produto  
**Score:** — (semantico) | **ID:** ced0ec9396371be3

Na conferência, ao realizar a leitura do DataMatrix, WCS receberá a informação da string lida, da forma detalhada abaixo, dessa forma deverá fazer a validação das informações de EAN13 do produto, lote do produto e número sequencial do produto.
Valor da string
0107908052816682172901311024C07-B008-205610[21001010

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Etiqueta de Volume  
**Score:** — (semantico) | **ID:** cbc144983de73519

O sistema WCS será o responsável pela impressão de etiquetas de expedição de todos os volumes na conferência.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Layout de etiqueta de Volume  
**Score:** — (semantico) | **ID:** 742826d0ecec69c3

A nova etiqueta deverá mostrar os itens que couberem na etiqueta.
Abaixo, segue layout da etiqueta.
ETIQUETA EXEMPLO PARA CAIXAS DO TIPO destinationCode = SPECIAL
COLOCAR ITEM/LOTE/QTD na tabela abaixo
AS PROPRIEDADES ADICIONAIS DESSA ETIQUETA SÃO: ITEM/NOME DO PRODUTO/LOTE/QTD.
COLOCAR EXEMPLO DA ETIQUETA PARA CAIXAS DO TIPO destinationCode = STANDARD

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 9ff4692c57b41f15

As integrações entre o sistema Microsoft Dynamics 365 F&O (cliente) e o WCS Velox serão realizadas por meio de uma API REST.
O objetivo é permitir que o Velox receba automaticamente as informações fiscais (Notas Fiscais aprovadas) para alimentar a nova tela de Romaneio.
O fluxo de dados será unidirecional, com o D365 F&O atuando como sistema de origem e o Velox como sistema de destino.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Tela de Romaneio  
**Score:** — (semantico) | **ID:** e685c0b8160f89c3

O WCS deve disponibilizar uma nova tela de Romaneio para substituir o processo manual atualmente realizado em planilhas Excel.
Esta tela terá como objetivo consolidar automaticamente os pedidos finalizados no processo “Aloca Palete”, centralizando as informações necessárias para a conferência final e expedição dos pedidos.
A partir dessa tela, os operadores poderão visualizar, filtrar, conferir, gerar o Romaneio e utilizar as novas funcionalidades de impressão e exportação para Excel, conforme detalhado nos tópicos seguintes.
Exemplo de Nova tela para Romaneio no WCS:

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Fluxo de Entrada dos Pedidos  
**Score:** — (semantico) | **ID:** 2bdf482116bdc4b7

Pedidos Pós-Alocação: Ao serem finalizados no processo de "Aloca Palete" (ou seja, quando todas as "pegas" de um palete são concluídas), os pedidos serão automaticamente inseridos na nova tela de Romaneio para a próxima etapa.
Pedidos de Volume Único: Pedidos que consistem em apenas um volume (caixa) não passarão pelo "Aloca Palete" e devem ser inseridos diretamente na tela de Romaneio, prontos para a conferência fiscal.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Fluxo de Conferência de NF  
**Score:** — (semantico) | **ID:** 283933d972d8192f

O WCS receberá via integração os dados das Notas Fiscais aprovadas.
Ao identificar o Número do Pedido correspondente, o WCS atualizará automaticamente os campos Número da NF e Chave de Acesso na tela de Romaneio.
Quando ocorrer a leitura do código de barras da DANFE, o WCS deverá:
Validar a correspondência entre a chave lida e a chave recebida pela integração;
Atualizar o Status da Conferência do pedido para CONFERIDO;
Registrar automaticamente a data e hora da conferência;
Manter o campo Documento Gerado como NÃO até a execução da rotina de geração do Romaneio.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Geração do Documento de Romaneio  
**Score:** — (semantico) | **ID:** 2e35087e984c6ff5

Seleção de Pedidos: O WCS permite selecionar pedidos para inclusão no documento de Romaneio de diversas formas:
Manualmente, marcando um ou mais pedidos.
Em massa, utilizando um flag "selecionar todos".
De forma filtrada, aplicando o filtro "Status da Conferência = CONFERIDO" e depois selecionando todos.
Ação "Gerar Romaneio": Ao clicar no botão "Gerar Romaneio", o WCS irá agrupar todos os pedidos selecionados que possuem o status Documento gerado como NÃO e criará o documento de Romaneio.
Atualização Pós-Geração: Imediatamente após a geração, o status do campo Documento gerado para todos os pedidos incluídos no romaneio será alterado para SIM.
Geração de Fim de Dia: O WCS deve permitir a geração de um Romaneio consolidado ao final do dia, incluindo todos os pedidos que já estão como CONFERIDO, mesmo que o campo Documento gerado já esteja como SIM. Isso serve para criar um manifesto final diário.
O botão “Imprimir” O Velox possibilita a impressão do Romaneio diretamente pelo sistema, seguindo o layout padrão e incluindo todas as informações essenciais dos pedidos selecionados.
O botão “Exportar Excel” possibilitará a geração de um arquivo no formato .xlsx, contendo todos os registros exibidos na tela, conforme os filtros aplicados
Exemplo de Romaneio para ser Impresso e exportado para Excel:

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** b4c9bac63d2b3be0

Todas as etiquetas processadas durante todo o processo da automação serão impressas pelo Velox.
Para compor de maneira correta a reutilização de caixas durante todo o processo da automação existiram ranges do sequencial de etiqueta Velox de acordo com cada tipo de caixa e esse sequencial é fixo de acordo com a tabela abaixo:
As etiquetas WISPL não serão reutilizaveis.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Etiqueta para Full Case  
**Score:** — (semantico) | **ID:** 90db3e43ae9f6133

As informações contidas no código de barras (1912431) terão como informações fixas que antecedem o código a sigla WISPL.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Etiqueta de pallet  
**Score:** — (nome-topico) | **ID:** a8539336cb9c9479

Etiqueta de pallet é emitida pelo WMS e é vinculada a posição no processo de abertura do PTM o Velox faz nenhuma validação das informações contidas na etiqueta.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Impressão de Etiquetas  
**Score:** — (semantico) | **ID:** 47f85b7554bae497

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido, também enviado pelo WMS.
O tipo de código que será utilizado em todos os processos realizados na esteira será o Data Matrix com módulo de 1.1.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
Velox deve permitir a reimpressão das etiquetas para casos em que ela esteja ilegível para uso nos processos.
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa informado na tela de Order Start, e induz a caixa na linha, seguindo então para o posto de separação.
Observação: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número: 557788 ao realizar o cálculo de cubagem, gerou 3 (três) volumes. Os números dos volumes desse pedido, serão:
Volume 1/3 – número do volume: 55778801
Volume 2/3 – número do volume: 55778802
Volume 3/3 – número do volume: 55778803.
Exemplo de sugestão de etiqueta a ser impressa pelo Velox:
PENDENTE DE ANÁLISE
Observação: Velox não será responsável pela impressão dos pedidos Full Case.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** PDV  
**Score:** — (semantico) | **ID:** de2f0b59b65658dc

Cada posto de separação contará com o auxílio de 1 (um) PDV no posto, que também orientará na separação e conferência dos produtos separados.
Operador ao receber a caixa no posto de separação, fará a leitura do código de barras do volume com o Scanner de Mão, com isso o PDV mostrará o número daquele volume que iniciará a separação.
A tela do PDV será atualizada com os detalhes do item, como quantidade, endereço, EAN esperado, descrição e outros detalhes, com isso o operador fará a separação da quantidade solicitada e realizara a leitura 100% dos itens.
Operador deverá realizar a leitura da etiqueta da caixa do item da posição acesa (etiqueta deve conter o EAN e o lote do produto). Ao realizar a leitura do item, o Velox irá decrementar a quantidade como é feito nos LEDs.
As linhas dos itens serão diferenciadas por cores, onde:
• Verde indicará ao operador que ele finalizou a separação daquele item, seja separado por completo ou com shortpicking
• Vermelho, indicará que o item está sendo separado, ao finalizar, será atualizado para verde
A tela do PDV será atualizada em tempo real a cada separação leitura de itens.
Caso seja lido algum item que não esteja solicitando separação, a tela mostrará mensagem que o item não deve ser separado, pois não foi solicitado.
Operador deverá realizar a leitura de todos os itens separados, garantindo a separação dos itens e quantidades corretas. Caso a separação seja de 10 (dez) itens do mesmo código, deverá ser lido/bipado os 10 (dez) itens.
Em casos de Shortpicking/Corte, o operador deverá decrementar a quantidade que sera separada e ao finalizar o picking. O sistema irá considerar um corte no respectivo item e enviará ao WMS apenas a quantidade que foi separada.
Em casos que o cliente não aceita ter ruptura, o WMS ficará responsável de reenviar o pedido com os itens que foram cortados para realizar novamente o processo de separação.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Impressão de Etiquetas  
**Score:** — (semantico) | **ID:** dc400f07cf33ac4a

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
O tipo de código que será utilizado em todos os processos realizados na esteira será o Data Matrix com módulo de 1.1.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
Velox deve permitir a reimpressão das etiquetas para casos em que ela esteja ilegível para uso nos processos.
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa informado na tela de Order Start, e induz a caixa na linha, seguindo então para o posto de separação.
Observação: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número: 557788 ao realizar o cálculo de cubagem, gerou 3 (três) volumes. Os números dos volumes desse pedido, serão:
Volume 1/3 – número do volume: 55778801
Volume 2/3 – número do volume: 55778802
Volume 3/3 – número do volume: 55778803.
Exemplo de sugestão de etiqueta a ser impressa pelo Velox:
PENDENTE DE ANÁLISE
Observação: Velox não será responsável pela impressão dos pedidos Full Case.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** PDV  
**Score:** — (semantico) | **ID:** 15bcebdcb3c2e28e

Cada posto de separação contará com o auxílio de 1 (um) PDV no posto, que também orientará na separação e conferência dos produtos separados.
Operador ao receber a caixa no posto de separação, fará a leitura do código de barras do volume com o Scanner de Mão, com isso o PDV mostrará o número daquele volume que iniciará a separação.
A tela do PDV será atualizada com os detalhes do item, como quantidade, endereço, EAN esperado, descrição e outros detalhes, com isso o operador fará a separação da quantidade solicitada e realizara a leitura 100% dos itens.
Operador deverá realizar a leitura da etiqueta da caixa do item da posição acesa (etiqueta deve conter o EAN e o lote do produto). Ao realizar a leitura do item, o Velox irá decrementar a quantidade como é feito nos LEDs.
As linhas dos itens serão diferenciadas por cores, onde:
• Verde indicará ao operador que ele finalizou a separação daquele item, seja separado por completo ou com shortpicking
• Vermelho, indicará que o item está sendo separado, ao finalizar, será atualizado para verde
A tela do PDV será atualizada em tempo real a cada separação leitura de itens.
Caso seja lido algum item que não esteja solicitando separação, a tela mostrará mensagem que o item não deve ser separado, pois não foi solicitado.
Operador deverá realizar a leitura de todos os itens separados, garantindo a separação dos itens e quantidades corretas. Caso a separação seja de 10 (dez) itens do mesmo código, deverá ser lido/bipado os 10 (dez) itens.
Em casos de Shortpicking/Corte, o operador deverá pressionar o botão “Finalizar Picking” que será apresentado no PDV durante a separação. O sistema irá considerar um corte no respectivo item e enviará ao WMS apenas a quantidade que foi separada.
Em casos que o cliente não aceita ter ruptura, o WMS ficará responsável de reenviar o pedido com os itens que foram cortados para realizar novamente o processo de separação.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Impressão de etiquetas  
**Score:** — (semantico) | **ID:** 85d2b0e9be786643

O operador realizará a impressão das etiquetas nas impressoras disponíveis nos corredores através de um desktop onde ele deve acessar o Velox na tela de OrderStart que será segmentada por ruas (corredor), onde o sistema irá identificas as tarefas de separação para o corredor informados no OrderStart, sendo assim, as tarefas de separação não serão por pedidos e sim por endereços, mais de um operador pode estar realizando ao mesmo tempo a separação de um único pedido de acordo com a rua (corredor) que ele informou no Velox.
Após o operador informar a rua (corredor) e seu login na tela de Order Start será exibido todas as etiquetas de coleta para aquela rua (corredor), possibilitando que elas sejam impressas. O colaborador terá liberdade de imprimir uma quantidade x de etiquetas ou todas.
Todos os pedidos que foram enviados para impressora sumiram da tela de Order Start assim evitando a possibilidade de ter etiquetas duplicadas.
Para os casos de rasura, problemas de impressoras ou danificações de etiqueta o operador pode realizar a reimpressão da etiqueta na tela de volumes onde é possível pesquisar pelo número de volume (código de barras), onde estarão disponíveis para reimpressão somente os volumes que já foram impressos, ou seja, se não houver registro de impressão para um volume o mesmo será impresso como primeira impressão e não como reimpressão, as etiquetas são diferentes para identificar a reimpressão.
As impressões de etiquetas sairão com data, hora, se é impressão ou reimpressão e usuário que  imprimiu, assim como as informações de endereço do produto (SKU), código de barras com número do volume, descrição do produto (somente para casos Full Case) e transportadora.
Nota: As impressoras, desktops e pontos de alimentação (elétrica) e redes são de responsabilidade do cliente e a quantidade de postos de trabalho será de acordo com a vontade do cliente, é recomendado um posto de trabalho de OrderStart (Impressora, desktop e scanner manual) por rua (corredor) de separação e estações de fracionado (picking cart, baixo giro, médio giro).

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** f389d7d9dc5ab3b5

No Order Start de todas as áreas destinadas ao fracionado serão impressas etiquetas “burras” para serem utilizadas durante a separação e posteriormente serem trocadas pela etiqueta final.
As etiquetas finais serão impressas pelo Velox na etapa de packing da separação fracionado e antes da separação do FullCase
As etiquetas irão conter as informações de pedido, volume, destinatário, logradouro completo, código do produto, descrição do produto, quantidade do produto com embalagem, rua (corredor), posição, informações de impressão e ou reimpressão e transportadora, juntamente com o código de barras e os logos das empresas Gala e Pais e Filhos.
Segue tabela abaixo com as informações contidas na etiqueta:

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Etiqueta de reimpressão  
**Score:** — (semantico) | **ID:** 90fdca4f138375ad

Caso a etiqueta for reimpressa, deve haver esta flag para visualização do time do cliente.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Etiqueta de pallet  
**Score:** — (nome-topico) | **ID:** 9503341ad2376fda

Conforme mencionado no decorrer do documento, a etiqueta do pallet será utilizada para uma triagem/rastreio dentro do sistema Velox pois não será enviada esta informação ao WMS.
Este código deve ser composto por 6 digitos.
Segue exemplo :

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Etiqueta Fracionado  
**Score:** — (semantico) | **ID:** c786aa117ac16451

A etiqueta representa a nota fiscal para a operação do time Gala. Sendo assim será impressa apenas no packing, pois nesta área sabemos exatamente o que foi coletado por volume e será exibido na etiqueta conforme exemplo:
Caso não haver espaço para a informar todos os itens que o volume possui será impresso uma etiqueta complementar simplificada para ser colada junto com a demonstrada acima. Nesta etiqueta complementar não deve ter código de barras para não haver conflito de leitura no portal do sorter. Segue exemplo :

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Alocação de volumes  
**Score:** — (semantico) | **ID:** 8a28cc978a8a50ea

O operador só será permitido alocar qualquer volume quando estiver realizado o Login na rampa.
O crachá dos operadores que estarão localizados nas saídas das rampas deve conter obrigatoriamente 7 dígitos.
O operador pega o volume na rampa, realiza a leitura do código de barras onde o Velox indicará a posição do produto em uma das 4 posições do put to monitor (TV), todo o quadrado da posição ficará marcado na cor da posição na tela até o operador realizar a leitura do código da posição do pallet que deve estar fisicamente visível, assim confirmando que o operador foi até o pallet e alocou a caixa no mesmo, como indicado acima teremos uma identificação por cores para facilitar o processo de identificação do usuário.
Caso o usuário informe o número de pallet divergente (errado) ao número de pallet esperado na TV o Velox informará que o pallet informado não é o destino do volume, assim o operador deve indicar o número correto do pallet.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Etiqueta de produto  
**Score:** — (nome-topico) | **ID:** 6e339c15b8500c0f

Etiqueta de produto, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Etiqueta UC – Expedição  
**Score:** — (semantico) | **ID:** 1b441927a584a09a

Etiqueta UC, é de responsabilidade do cliente.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Etiqueta  
**Score:** — (nome-topico) | **ID:** fae8dffda8b4647d

Exemplos de etiqueta que será utilizada em todos os processos do sorter, as etiquetas devem sempre estar em boas condições para que a câmera possa identificar o código QR code presente na mesma.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Rotas - Sufixo  
**Score:** — (semantico) | **ID:** 5aed2bd52df17994

Não haverá integrações nesse projeto, o Velox irá se orientar através dos 5 (cinco) últimos caracteres lidos na etiqueta onda o código da transportadora pode estar nos últimos 5 (cinco), 4 (quatro) ou 3 (três) caracteres, esses códigos serão cadastrados como destino no Velox sendo que esse valor será o código que o Velox irá buscar em sua base de dados para identificar se existe ou não essa rota/destino cadastrado, podendo caracterizar um desvio efetivo ou um rejeito por falta de cadastro ou falta de vínculo de rota a rampa no mapa do Sorter.
Existirá os casos de exceções onde não será utilizado o sufixo da etiqueta recebida do CLP e sim a quantidade de caracteres da etiqueta.
As etiquetas com 33 caracteres serão identificadas como pertencentes a transportadora TNT/FEDEX.
Segue abaixo os códigos das transportadoras disponibilizadas pelo time Beira Rio:

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** 492b53d80514e7b1

Todas as etiquetas utilizadas durante todo o processo da automação serão impressas pelo sistema VELOX MFC. As etiquetas não serão reutilizadas.
Exemplos de Etiqueta

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** 11.1	Exemplo de etiquetas  
**Score:** — (semantico) | **ID:** 10d873fc625dbc3b

A definir.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Impressão de etiquetas  
**Score:** — (semantico) | **ID:** 8e74506454c7ee38

A impressão das etiquetas dos volumes fracionados separados no mezanino e flowhack ficarão de responsabilidade invent
O operador realizará a impressão das etiquetas nas impressoras disponíveis no início de cada linha/mezanino através de um desktop onde ele deve acessar o WCS na tela de OrderStart que será segmentada por categoria de produtos, onde o sistema irá identificar as tarefas de separação para cada tipo de separação e categoria informados no OrderStart, sendo assim, mais de um operador pode estar realizando ao mesmo tempo a separação de um único pedido.
Após o operador selecionar a linha que será realizado a separação (picking cart ou FlowHack e Controlados, Medicamentos ou Perfumaria) será exibido todas as etiquetas de coleta para aquela separação, possibilitando que elas sejam impressas.
Todos os pedidos que foram enviados para impressora sumiram da tela de Order Start assim evitando a possibilidade de ter etiquetas duplicadas.
Para os casos de rasura, problemas de impressoras ou danificações de etiqueta o operador pode realizar a reimpressão da etiqueta na tela de volumes onde é possível pesquisar pelo número de volume (código de barras), onde estarão disponíveis para reimpressão somente os volumes que já foram impressos
Segue Layout da etiqueta:
Os campos “Data de impressão” e “Hora de impressão” serão definidos no momento que ocorrer a impressão da etiqueta.
Nota: As impressoras, desktops e pontos de alimentação (elétrica) e redes são de responsabilidade do cliente
Exemplo da etiqueta de pedidos atual:

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Separação FullCase  
**Score:** — (semantico) | **ID:** 2706989e64adfa58

A separação e a impressão de etiquetas dos pedidos Full Case não serão de responsabilidade do WCS.
As etiquetas devem seguir o padrão Code 128, assim como ocorre para os pedidos fracionados.
Os itens Full Case serão direcionados para a esteira expressa e seguirão os mesmos procedimentos de triagem nas rampas. Dessa forma, todos os volumes Full Case devem ser devidamente integrados ao sistema. Caso contrário, serão destinados à rejeição com o motivo "Sem Integração".
O sistema deverá realizar uma verificação nos volumes Full Case, efetuando a leitura do código DUN-14 e da etiqueta do pedido no processo de Put To Monitor no final de cada rampa de saída.
Para realizar a verificação do DUN-14 do item, teremos um cadastro do SKU e seus possíveis códigos. Caso não haja nenhum cadastro deste material, não será realizado o double-check deste fullcase.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** 4.1.3.	Etiqueta Caixa  
**Score:** — (semantico) | **ID:** 9b4a1bf8e0c572ef

As etiquetas de volume de separação, serão geradas pelo WCS, no Order Start.
Exemplo da etiqueta gerada pelo WCS para ser inserida na caixa de separação que será induzida na automação.
As medidas referentes as etiquetas serão:
Etiqueta = 100mm (Comprimento) x 50mm (Altura)
Code 128 = 90mm (Comprimento) x 30mm (Altura) - Módulo mínimo: 0,63mm
