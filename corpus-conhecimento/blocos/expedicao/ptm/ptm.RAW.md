# ptm.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 3. Stakeholders ES  
**Score:** — (semantico) | **ID:** b387ffb581cb38bd

Participante
Função
Empresa
Alex Thimoteo
PMO - Project Management Office
Invent
Thomas Momesso
Analista de Negócios
Invent
Pedro Talasamov
Analista de Negócios
Invent
Daiana Costa
Analista de Negócios
Invent
Flávio Rossi
PMO - Project Management Office
C&A
Rodolfo Zonta
Tech Lead
C&A
Daniel Trindade
Analista de Sistemas
Manhatam (WMS)
Sidhartha Ranjan
Tech Lead
Manhatam (WMS)

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Criação da Tarefa de Auditoria (Supervisor)  
**Score:** — (semantico) | **ID:** fc569220c3692acd

Fluxo do Processo:
O supervisor realiza o login no WCS com perfil autorizado.
O supervisor acessa a funcionalidade Gestão de Auditorias.
O supervisor seleciona os escopos de auditoria, podendo escolher:
Todas as zonas, ou
Postos de picking,
Área de Transfer
O supervisor confirma a criação da tarefa de auditoria.
O WCS registra a auditoria e disponibiliza a tarefa para execução pelos operadores.
A tarefa passa a ficar visível nos coletores dos operadores logados.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Criação da Tarefa de Movimentação (Supervisor)  
**Score:** — (semantico) | **ID:** 639bfd8d8714b86d

• O supervisor realiza login no WCS com perfil autorizado.
• O supervisor acessa a tela Produto / Estoque.
• O supervisor seleciona o item que deverá ser movimentado.
• O sistema exibe apenas o saldo disponível, desconsiderando quantidades já reservadas para tarefas de coleta ou movimentações existentes.
• O supervisor seleciona a quantidade a ser retirada.
• O supervisor seleciona o endereço de destino.
• O supervisor solicita a criação da tarefa de Movimentação Forçada.
• O WCS registra a solicitação e gera a tarefa de movimentação.
• A tarefa fica disponível para execução pelos operadores nos coletores.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Priorização de OT: Permite o WCS definir uma nova prioridade a OT garantindo melhor  
**Score:** — (semantico) | **ID:** 82427e2a951b74e6

eficiência na execução das tarefas.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Gestão de Posto de Trabalho  
**Score:** — (semantico) | **ID:** 2d0149df786e93c9

Na tela de Postos de Trabalho, um usuário do WCS deve realizar os vínculos (atribuições) dos
colaboradores ao posto de picking (cadastrados previamente), assim como também pode
revogar essa atribuição, deixando o posto disponível para um novo vínculo.
Atualmente, o vínculo do posto de trabalho dinâmico contempla a definição da posição inicial e
final do posto, o colaborador responsável pela execução das coletas e a impressora associada
ao processo de separação.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Gestão do Posto  
**Score:** — (semantico) | **ID:** bf70e22314b53089

A estrutura física dos postos não será parametrizada diretamente no WCS, sendo qualquer
alteração condicionada à abertura de chamado.
Os cadastros dos postos serão realizados pelo time Invent, com acordo do time MBRF. Toda e
qualquer alteração nesses postos será realizada via chamado, sendo necessário o correto
preenchimento da planilha (CSV) de mapeamento de posições.
O cadastro de impressoras será realizado no WCS Velox tela de impressoras, sendo necessário
informar IP, porta, nome e local de utilização. Esse cadastro é de responsabilidade do time
MBRF, e somente impressoras cadastradas e ativas estarão disponíveis para vínculo com postos
de coleta.
A comunicação com as impressoras será realizada via TCP/IP, onde o WCS Velox enviará as
informações das etiquetas em formato ZPL. A impressora será responsável pelo gerenciamento
da fila de impressão, não havendo retorno de confirmação para o WCS nem responsabilidade
sobre o processo físico de impressão. Todas as etiquetas relacionadas à coleta de um LED
acionado serão enviadas de uma única vez para a impressora.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informações disponíveis:  
**Score:** — (semantico) | **ID:** 4508eeb34305bf97

•
Código (02) → DUN14 (formato segregado)
•
Código (7030) → Processador, no formato "0760" + número do SIF

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** 2. Stakeholders ES  
**Score:** — (semantico) | **ID:** 76caafb6d08f24fc

Participante
Função
Empresa
Tiago Shizuo Torii
PMO - Project Management Office
Invent
Daiana Costa
Analista de Negócios
Invent
Pedro Talasamov
Analista de Negócios
Invent
Thomas Momesso
Analista de Negócios
Invent
PMO - Project Management Office
Inbetta
TI
Inbetta
Infraestrutura
Inbetta
Analista de logística
Inbetta
Inbetta

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 12.7. Freeze de posições durante o Cíclico  
**Score:** — (semantico) | **ID:** d2c3569f609f4afc

Como a operação permanece ativa, o bloqueio das posições auditadas é feito por zona/seção: a
seção designada ao operador permanece bloqueada enquanto ele realiza a contagem,
equilibrando consistência e produtividade. Considera-se zona as áreas da automação (linha de
picking e museu) e seção os subagrupamentos dentro dessas áreas (postos de coleta). No
Inventário Total este bloqueio não se aplica, pois a operação está totalmente parada.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com
base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor
controle e distribuição das tarefas entre os operadores.
Fluxo do Processo – 1ª contagem
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção
“Inventário Cíclico”.
O WCS apresenta uma lista de todas os Inventários Cíclicos criados, permitindo
que o operador selecione qual ele quer iniciar.
o WCS exibe os endereços a serem visitados para a auditoria.
O operador realiza a leitura do primeiro endereço.
O operador realiza a leitura do SKU de todos os itens presentes naquela posição.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou
quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o
sistema deve exibir um aviso de posição vazia.
Quando for selecionado um endereço cujo SKU também exista em outras posições não incluídas
no escopo, o WCS alerta o supervisor e permite decidir se inclui ou não as demais posições.
Caso o supervisor opte por não incluir todas, o sistema mantém o saldo sistêmico atual de cada
posição não selecionada para fins de envio da integração de ajuste de inventário.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando
o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório;
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de
confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços onde tenha sido identificada
divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de
endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir
um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que
permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência
(entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação
para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma
validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário,
contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para
que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no
mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá
aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste,
contendo o delta de divergência entre o estoque físico e o estoque sistêmico.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 2. Stakeholders ES  
**Score:** — (semantico) | **ID:** 5814261d9134d827

Participante
Função
Empresa
Thomas Momesso
Analista de Negócios
Invent
Raphael Cerri Caveagna
Analista de Negócios
Invent
Fabio Ornelas
PMO - Project Management Office
Invent

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 2. Stakeholders ES  
**Score:** — (semantico) | **ID:** 3f0bfb66eef13752

Participante
Função
Empresa
Anderson Araújo
PMO - Project Management Office
Invent
Thomas Momesso
Analista de Negócios
Invent
Raphael Cerri Caveagna
Analista de Negócios
Invent

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Stakeholders ES  
**Score:** — (semantico) | **ID:** bd8a3f5f1e446aab

Participante | Função | Empresa
Gustavo Torres | Analista de Negócios | Invent

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 4. Stakeholders ES  
**Score:** — (semantico) | **ID:** 7adc4e9c79f5fd09

Participante
Função
Empresa
Matheus Gomes
PO - Product Owner
Invent
Daiana Costa
Analista de Negócios
Invent
Pedro Talasamov
Analista de Negócios
Invent
Cesar Cardoso
PMO - Project Management Office
Comercial Esperança
Felipe Viana
TI
Comercial Esperança
Gilberto Santos
Analista de logística
Comercial Esperança
Rafael Silva
Analista de logística
Comercial Esperança
Darlan Sousa
Infraestrutura
Comercial Esperança

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Fechamento de PTM  
**Score:** — (semantico) | **ID:** 505dd7a01dbc8681

O fechamento do pallet pode ocorrer em três cenários:
Manual: O operador realiza a leitura do código de comando de fechamento da posição (ex: "FPP001"). O PTM ficará com a área preenchida e piscando no PDV, aguardando a leitura da etiqueta do pallet para associação. A etiqueta do pallet deve ter obrigatoriamente 6 (seis) dígitos.
Automático: Quando o último volume esperado do pedido é alocado, o fechamento ocorre automaticamente sem necessidade de ação do operador.
Forçado: Quando a cubagem ou peso do pallet atinge o limite pré-determinado pela operação, avaliado pelo próprio operador.
Em todos os cenários, ao fechar o pallet o sistema abre automaticamente uma nova posição para continuidade da operação.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Architecture and Hardware  
**Score:** — (semantico) | **ID:** 624edc06f6720115

Visual Interface (TV/Monitor): A large monitor strategically positioned in the shipping area, displaying the map of positions (pallets) and the fill status of each one.
Position Identification (QR Code): Each floor position (dock/pallet) will receive a unique identification via QR Code.
Operator Device: Data collector (RF) for reading volumes and confirming addresses.
Stages: There will be 3 defined Stages, each for a fragility matrix.
Safety Lock:
Velox will have a lock that forces the operator to start the task by the Stage order from the heaviest items to the lightest, having to completely finish one stage to be able to proceed to the next. The positions are only released for the next matrix when all orders for that position have been allocated, ensuring that all positions have the heaviest items allocated first so that the task for the next matrix is released.
PTP Screen Example:
