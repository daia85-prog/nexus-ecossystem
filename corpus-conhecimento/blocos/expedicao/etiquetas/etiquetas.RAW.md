# etiquetas.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Regras Operacionais:  
**Score:** — (semantico) | **ID:** 6e9c001c76393d28

Quando o campo transportadora da integração de Trabalhos – Work vier com valor
diferente de “Própria”, o WCS deve utilizar o campo subArea como agrupador
logístico principal.
O agrupamento dos pallets passará a ocorrer por subárea, e não mais por romaneio,
permitindo a separação física e lógica dos volumes conforme o destino final.
Cada subárea será considerada uma entidade independente de agrupamento,
possuindo suas próprias posições de PTL.
O WCS deve reservar uma posição de PTL para cada subárea ativa alocada à
rampa correspondente no sorter, assegurando que os volumes sejam direcionados e
alocados corretamente.
O fechamento de cada pallet ocorrerá de forma individual por subárea, respeitando as
mesmas regras de cubagem e peso configuradas para o processo de PTL.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Impressão de Romaneio  
**Score:** — (semantico) | **ID:** 29c03f89c2c5466d

Após todos os volumes do romaneio serem finalizados, o romaneio estará disponível para
impressão na tela de impressão de romaneio. Nessa tela, o operador deve inserir o
número do romaneio que deseja imprimir. O Velox irá gerar a impressão a nível de pedido,
indicando em quais pallets ou gaiolas cada volume está alocado, proporcionando uma visão
clara e organizada da distribuição dos volumes.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Invent  
**Score:** — (semantico) | **ID:** 68f39a8a2669263f

Fabio Junior
Coordenador de logística
MBRF
Fabio Barbosa
Gerente de logística
MBRF
Gustavo Torres
Analista negócio

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Invent  
**Score:** — (semantico) | **ID:** 3c8e06a50aed5fd6

Jackson Silva
Supervisor de logística
MBRF

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Log de Atividades e Impressão  
**Score:** — (semantico) | **ID:** 9448fbb314a3b2d3

Todas as atividades relacionadas à criação, edição ou exclusão de postos, colaboradores e
impressoras devem ser registradas em log e disponibilizadas ao cliente por meio de relatórios
no WCS.
No processo de reimpressão de etiquetas, o usuário deverá selecionar os volumes desejados,
escolher a impressora e informar obrigatoriamente o motivo da reimpressão. Esse motivo será
registrado em log. Apenas motivos ativos previamente cadastrados estarão disponíveis para
seleção.
Ao consultar os detalhes de um volume, será apresentada a lista de impressões e reimpressões
realizadas, ordenadas por data e hora de forma decrescente.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Ordem de impressão  
**Score:** — (semantico) | **ID:** 1a0d2442266d8ba5

C101
C102
C106
C201
C305
Durante a operação, podem ocorrer falhas de periféricos (ex: impressora). Nesses casos, será
possível ativar a contingência para o posto afetado, mesmo com a onda já em andamento.
Ao acionar a contingência durante a coleta:
•
As etiquetas que ainda não foram enviadas pelo WCS serão direcionadas
automaticamente para a impressora de contingência.
•
As etiquetas que já foram enviadas para impressão, mas não foram impressas
fisicamente, deverão ser reimpressas manualmente pelo usuário através da tela de
Volumes PVAR, mediante seleção dos volumes impactados.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Etiqueta PVAR  
**Score:** — (semantico) | **ID:** 82f8a6dc48d08704

O WCS é responsável pelo envio dos arquivos de impressão PVAR, não havendo controle ou
confirmação sobre a execução física da impressão, sendo essa responsabilidade da impressora.
A etiqueta será gerada no momento que a onda for iniciada e ficara em uma fila de espera até
que o led correspondente a etiqueta acenda.
O layout da etiqueta é de responsabilidade Invent e ela tem a dimensão fixa de largura 100mm
por altura de 50mm.
Layout definido:
As informações contidas na etiqueta são consumidas das informações das integrações TPSDLS
(ZSDDAREM), ZMATMAS01 descritas abaixo e manutenção de onda.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Composição do Lote  
**Score:** — (semantico) | **ID:** 6628ca90572f3d16

O lote é uma das informações mais críticas extraídas da etiqueta. Sua composição varia
conforme o tipo de produto:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tipos de Layout de Etiqueta  
**Score:** — (semantico) | **ID:** 78630901fcbb8a90

As etiquetas do projeto MBRF Salvador são classificadas nos seguintes tipos, cada um com
regras específicas de leitura e interpretação pelo WCS.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Zona 3 — Código de barras GS1-128:  
**Score:** — (semantico) | **ID:** baecb9d1aa6003db

•
(15) Validade — 6 dígitos no formato AAMMDD
•
(11) Fabricação — 6 dígitos no formato AAMMDD
•
(7030) Processador — prefixo "0760" + número do SIF da UP

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Zona 5 — Código 2D (Datamatrix) GS1: Concatenação de todos os códigos anteriores  
**Score:** — (semantico) | **ID:** 777d92d98b8b0150

acrescidos de 3 TAGs adicionais:
•
(97) Rastreabilidade — turno + período, máximo 7 dígitos alfanuméricos, completados
com zero à direita
•
(240) SKU do item — 8 dígitos com zeros à esquerda
•
(95) Código do sistema de impressão da etiqueta — 18 dígitos (sem utilidade para o
WCS, deve ser ignorado)

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Etiqueta sem Data de Fabricação no Código  
**Score:** — (semantico) | **ID:** 538ae87f7f82d099

Neste layout, a data de fabricação não está presente em nenhum código de barras da etiqueta.
As informações disponíveis são:
•
Código de barras linear (Marcação 2) - (3103) → Peso líquido com 3 casa decimais,
(92) → SKU, (10) Lote.
•
Código de barras linear (Marcação 1) → DUN14 do produto

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informações disponíveis:  
**Score:** — (semantico) | **ID:** 5568aa8027b2969a

•
Código (91) → Código SIF / produtor do volume

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Etiqueta sem Lote e sem Código Produtor  
**Score:** — (semantico) | **ID:** e89287b4339a3db6

Neste layout, nem o lote nem o código produtor estão disponíveis nos códigos de barras. É o
cenário mais restrito de informação.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** ser composto pela data de fabricação. Toda vez que um volume com este tipo de etiqueta  
**Score:** — (semantico) | **ID:** 72754eb973fcd868

for lido, o WCS consulta o SIF extraído e atribui o lote fixo cadastrado para aquele SIF.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** produtor)  
**Score:** — (semantico) | **ID:** 3bc66a065c967c22

Alguns produtos são fabricados por fornecedores terceiros que não informam o código produtor
na etiqueta. Neste caso, o WCS utiliza uma regra especial de formação de lote.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Crosscheck Ligado  
**Score:** — (semantico) | **ID:** 35a05fc11da52f1e

O WCS espera receber do portal os dados de ambas as etiquetas (material e expedição).
•

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Crosscheck Desligado  
**Score:** — (semantico) | **ID:** 62fe81a3bcbe22cf

O WCS ignora as informações do QRcode e opera exclusivamente com a etiqueta de material.
•

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** NoRead na etiqueta de expedição: Ignorado. Volume segue normalmente.  
**Score:** — (semantico) | **ID:** f5a2655c953cf2a5

Com o crosscheck desligado, a rastreabilidade individual do volume PVAR fica limitada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Fluxo Completo de Decisão de Desvio  
**Score:** — (semantico) | **ID:** 22ae1baf04b79432

Para consolidar toda a lógica de balanceamento, o fluxo completo que o WCS executa a cada
volume lido no portal é:
Passo 1 — Identificação: O portal lê as etiquetas do volume. O WCS identifica SKU, shelf life
e, quando aplicável, o identificador WCS da etiqueta de expedição PVAR.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** crosscheck  
**Score:** — (semantico) | **ID:** 45ff83a9537f04c8

Tratável
O crosscheck identificou divergência entre a
etiqueta de material (produto da caixa) e a
etiqueta de expedição PVAR. O material da caixa
não corresponde ao material indicado na etiqueta.
Etiqueta PVAR colada na caixa errada
durante a coleta.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Reimpressão de Etiqueta no Rejeito  
**Score:** — (semantico) | **ID:** 413eddfd0202e3c9

Para volumes tratáveis (NoRead, falha de crosscheck, volume sem etiqueta PVAR), o operador
pode reimprimir a etiqueta de expedição (PVAR) diretamente na estação de rejeito.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Etiquetas  
**Score:** — (nome-topico) | **ID:** 214c1616fb429c90

Relatório com o modelo das etiquetas lidas no SORTER, será informado qual modelo foi
usado para identificar o item.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Dados da caixa conforme informação  
**Score:** — (semantico) | **ID:** ff9ccfa09d3086b3

Dun
Material
Lote (Caso não tenha na etiqueta lida calcular conforme
data de produção e unidade produtora)
Data de produção (Caso não tenha na etiqueta lida calcular
conforme lote)
Data de vencimento (se houver
Unidade produtora (se houver
Peso líquido
Peso bruto se tiver
SIF se houver
SSCC se houver
Data da leitura da caixa
Número de Correlação da leitura
Destino

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** 6. Etiquetas  
**Score:** — (nome-topico) | **ID:** 4d87b1b383e52676

Todas as etiquetas serão de responsabilidade do cliente.
Seguem as prioridades e regras definidas para identificação do código de barras nos portais da
Automação:
Prioridades de leitura:
1ª Etiqueta de 10 Caracteres
2ª Etiqueta de 22 Caracteres
3ª Etiqueta de 18 Caracteres
Informações do código de barras:
Padrão de codificação: Code128
Modulo mínimo de 0,4mm
Altura mínima do código: 18mm
Regras e filtros:
Na condição de dois ou mais códigos com o mesmo digito verificador: Rejeito do volume
No caso de existir mais de uma etiqueta com a mesma quantidade de caracteres (exemplo: dois
códigos de 10 dígitos), o portal processará aquele que contém o digito verificador,
desconsiderando todos os demais códigos
Seguindo as regras passadas pelo Time SWIFT, sempre iremos receber apenas uma etiqueta no
momento da leitura e está etiqueta deve estar integrada em nossa base de dados para
realizarmos as tratativas necessárias.
Lembrando que precisamos ter recebido o código correto na integração de Volumes para realizar
a triagem correta do volume, caso contrário será direcionado para rejeito por falta de integração.
Observação: A determinação do código correto seguindo as regras acima será feito pela
câmera presente no projeto.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 10. Impressora de Etiquetas  
**Score:** — (semantico) | **ID:** 4ce8452b231a6759

A operação contará com três impressoras posicionadas estrategicamente próximas às
áreas de indução e coleta, formando um ponto central de impressão. Essas impressoras
serão responsáveis por emitir todas as etiquetas utilizadas na separação, conforme a
rua de trabalho selecionada no momento do Order Start.
Importante: A impressão das etiquetas é condição obrigatória para liberação das
tarefas no sistema. A lista de separação só será exibida ao operador somente após a
conclusão da impressão das etiquetas correspondentes.
O processo é iniciado pelo operador ou gestor por meio do coletor, seguindo os passos:
1. Selecionar o tipo de separação (Full Case ou Pallet Sorter);
2. Escolher a rua de trabalho.
A rua selecionada determina automaticamente qual impressora será acionada. Caso
uma delas esteja fora de operação, o operador poderá utilizar uma impressora de rua
próxima para garantir a continuidade da operação.
Exemplo: Se a impressora da Rua 02 estiver inoperante, o Order Start poderá ser
realizado pela Rua 03, assegurando que o processo não seja interrompido.
Reimpressão de Etiquetas
Em caso de erro de impressão (falha, corte incorreto ou dados ilegíveis) ou extravio
durante o transporte, o operador poderá utilizar a função de reimpressão disponível no
WCS, informando o volume ou número da etiqueta correspondente. Todas as
reimpressões são registradas em log, garantindo rastreabilidade completa por
impressora e volume.
Controle de Acesso à Reimpressão
A reimpressão de etiquetas será restrito a usuários com perfil específico (supervisores
ou líderes). Somente esses usuários chaves poderão autorizar a reimpressão,
garantindo que o processo ocorra sob supervisão e evitando reimpressões indevidas.
O sistema manterá o registro completo em log, incluindo o usuário que solicitou, o
usuário que autorizou a reimpressão, bem como data e hora do evento

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 11. Exemplo de Etiqueta  
**Score:** — (semantico) | **ID:** 828ed67e8c750d3a

Dimensões da etiqueta: 50 x 50

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** 6. Etiquetas  
**Score:** — (nome-topico) | **ID:** 70192a87fa2d4713

Toda a geração e impressão das etiquetas será de responsabilidade do cliente.
Para que o processo de triagem (sorter) ocorra corretamente, é fundamental que o código de
barras do volume seja enviado de forma correta através da integração. Caso o dado esteja
ausente ou incorreto na tabela transacional, o volume será automaticamente direcionado para a
rampa de rejeito, devido à falha de integração.
Exemplo da etiqueta utilizada atualmente pela operação:
O código de barras utilizado atualmente possui 14 caracteres. No entanto, os dois primeiros
caracteres não devem ser considerados no processo de triagem, pois eram previamente
utilizados para definição da rampa de destino — essa lógica será descontinuada e substituída
por parametrização via integração.
Nos casos em que o volume possuir um código de barras com quantidade diferente de
caracteres (diferente dos 14), o código deve ser considerado em sua totalidade, sem
necessidade de exclusões ou ajustes.
Observação: Na integração de volumes, os códigos já serão enviados com 12 caracteres, ou
seja, os dois primeiros dígitos da etiqueta original já estarão previamente removidos.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Etiqueta de volume de separação  
**Score:** — (semantico) | **ID:** 9a9f6e7a45b7a7a7

As etiquetas de volume de separação, serão geradas pelo WCS, nos postos de separação.
Exemplo da etiqueta gerada pelo WCS para ser inserida na caixa de separação:

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** 9d401ad8c73733c4

O WCS realiza a impressão das etiquetas dos volumes na tela de Order Start, com base nas informações de cubagem recebidas via integração. O tipo de código adotado em todos os processos da esteira é o Data Matrix com módulo mínimo de 1.1.
Será impressa 1 (uma) etiqueta por volume. Exemplo: um pedido que gerou 3 volumes terá 3 etiquetas impressas (1/3, 2/3 e 3/3). O número do volume é gerado pela concatenação do número do pedido com o número sequencial do volume.
O operador fixa manualmente cada etiqueta na respectiva caixa conforme o tipo indicado na tela de Order Start e induz a caixa na linha para seguir aos postos de separação. O sistema permite reimpressão de etiquetas caso alguma esteja ilegível ou danificada.
Observação: A impressão de etiquetas para volumes full case não é responsabilidade do WCS, devendo ser realizada pelo cliente antes da indução na esteira.
Exemplo de sugestão de etiqueta a ser impressa pelo WCS:

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Alocação de Volumes  
**Score:** — (semantico) | **ID:** 7ce285c6621df925

O operador só poderá alocar volumes estando logado na rampa. O login é feito por meio da leitura do crachá, que deve conter obrigatoriamente 7 (sete) dígitos.
O operador pega o volume na rampa, realiza a leitura do código de barras e o WCS indica no PDV a posição do pallet correspondente, destacada pela cor da posição. O operador se dirige ao local indicado e realiza a leitura do código do pallet (fisicamente visível) para confirmar a alocação.
Caso o operador informe um número de pallet divergente, o WCS bloqueia a operação e informa que o pallet não corresponde ao destino do volume, devendo o operador corrigir a leitura.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** Impressão do código do pallet  
**Score:** — (semantico) | **ID:** 0f462f1da6fbf9cd

A impressão do código master que será vinculado ao pallet será de responsabilidade do WCS.
A etiqueta deverá ser disponibilizada para os colaboradores que ficarão localizados nas saídas
das rampas previamente a operação iniciar.
O código será prefixo com sequencial de 12 digitos seguindo o exemplo abaixo:
SRT123456789012
A etiqueta possui xx centímetros de altura e xx de comprimento.
Quando for solicitado o fechamento do pallet, o operador deverá pegar uma das etiquetas
disponibilizadas previamente e realizar a leitura e confirmar no LED aceso na cor laranja. Após
esta ação, o sistema entende que o código lido foi vinculado ao pallet fechado.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Corte via Coletor (Full Case)  
**Score:** — (semantico) | **ID:** b88c25a8ca108836

Quando o operador aciona "Finalizar Coleta Parcial" no coletor por falta de produto no pallet:
1. O coletor entra em modo de auditoria reversa.
2. O operador bipa sequencialmente todas as etiquetas Master que não puderam ser coladas (itens não coletados).
3. O WCS invalida essas etiquetas e registra os itens como corte.
4. O eWM - SAP é notificado com a baixa de estoque na posição informada.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** MultiRead  
**Score:** — (semantico) | **ID:** 4a95608cf38cc8ff

Mais de um código de barras está visível para a câmera ao mesmo tempo, impossibilitando a identificação unívoca do volume. O operador remove o código extra ou cobre a etiqueta incorreta, corrige a caixa e a reinsere antes do portal de leitura. Alternativamente, conduz o volume manualmente à rampa correta e realiza a leitura no scanner fixo.
Com recirculação ativa, o volume com MultiRead é recirculado automaticamente. O operador é alertado no dashboard para intervir e corrigir a caixa antes da próxima passagem pelo portal.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Etiquetas / Layouts  
**Score:** — (semantico) | **ID:** b9c906cf649a3874

Esta seção documenta os layouts das etiquetas utilizadas na operação. O projeto conta com [A DEFINIR] impressoras térmicas — fornecido pelo Cliente — distribuídas conforme [A DEFINIR]. As etiquetas seguem dimensões de [A DEFINIR], com código de barras no formato [A DEFINIR], e incluem as informações obrigatórias para crossdocking (transportadora, CEP, AWB e código de roteamento). O QR Code presente nas etiquetas contém: [A DEFINIR].
PENDÊNCIA DESTACADA: A responsabilidade pela emissão de etiquetas (WCS Velox ou eWM - SAP) não foi definida. A nota do kickoff indica que o projeto deve seguir com etiqueta IVT seja pelo Velox ou WMS do cliente — sugestão é que seja em cada ponto de indução conforme o layout. Esta decisão impacta diretamente o desenvolvimento: se a responsabilidade for do WCS, o módulo de emissão de etiquetas precisa ser desenvolvido; se for do WMS, o WCS apenas confirma a leitura. Definir antes da aprovação desta ES.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Impressão  
**Score:** — (nome-topico) | **ID:** a6edca22fd0f583c

Com as informações recebidas via integração no início do processo, WCS realiza a impressão das
etiquetas dos volumes, conforme recebido anteriormente.
Exemplo sugestão de etiqueta a ser impressa pelo WCS:

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Prioridade:** não  
**Heading:** PONTOS A DEFINIR (PENDÊNCIAS)  
**Score:** — (semantico) | **ID:** 464f0815cc71ad3b

Impressão de Etiquetas: Definir o fluxo de impressão da Etiqueta de Pallet (Master). O WCS deve comandar uma impressora Zebra diretamente ou o WMS gerará a etiqueta após receber a integração de fechamento?

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Document Objective  
**Score:** — (semantico) | **ID:** 59153cea07035e8b

This document describes the functionalities of the Initial Phase of the logistics automation project. This stage consists of the implementation of the Velox WCS for shipping management and pallet assembly through the Put-to-Pallet (PTP) concept.
The objective of this phase is to introduce software intelligence and data control into the current manual process, ensuring traceability, volumetric validation, and the elimination of order inversion errors, preparing the operational environment for future mechanical automations.
