# cadastros-acessos.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** e14bc83becc08f82

CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** Responsável  
**Score:** — (semantico) | **ID:** d9777b83dcdf886e

22/08/2025
Especificação de Software
Thomas Momesso
27/08/2025
Alteração das integrações
Thomas Momesso

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** Automática:  
**Score:** — (semantico) | **ID:** 8b9dce47b5977a57

O WCS monitora continuamente os níveis de estoque e cria tarefas de reabastecimento de forma
automática quando um dos critérios abaixo for atendido:
Saldo abaixo do mínimo operacional: Quando a posição de destino atinge ou fica
abaixo do estoque mínimo parametrizado no sistema.
Previsão de consumo: Com base nas ondas de separação já liberadas, o sistema
identifica posições que não terão estoque suficiente para atender à demanda.
As tarefas automáticas são geradas em segundo plano e inseridas diretamente na fila de
reabastecimentos pendentes, ficando disponíveis para execução pelos operadores
autorizados.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 69b32a2506ccc582

ESPECIFICAÇÃO DE SOFTWARE
PROJETO BELEZA MELHORIAS PROCESSOS DE AUDITORIA
Nome: | Thomas Momesso
E-Mail: | thomas.silva@invent-corp.com
Depto: | TI Software
Telefone: | +55 11 2833-0005|0006
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.
Rev. | Data | Descrição | Responsável
1 | 23/12/2025 | Especificação de Software | Thomas Momesso
2 | 20/01/2025 | Revisão / Adequação Geral Descritivo | Thomas Momesso

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Stakeholders ES  
**Score:** — (semantico) | **ID:** ea85ab7ff29c5b48

Participante | Função | Empresa
Alex Thimoteo | PMO - Project Management Office | Invent
Thomas Momesso | Analista de Negócios | Invent
Pedro Talasamov | Analista de Negócios | Invent
Daiana Costa | Analista de Negócios | Invent
Flávio Rossi | PMO - Project Management Office | C&A
Rodolfo Zonta | Tech Lead | C&A
Daniel Trindade | Analista de Sistemas | Manhatam	(WMS)
Sidhartha Ranjan | Tech Lead | Manhatam (WMS)

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Execução da Auditoria  
**Score:** — (semantico) | **ID:** 34c1638795371282

Após a criação da auditoria, o operador realiza a verificação de todas as posições que forem contempladas na tarefa conforme julgar necessário.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android do cliente.
Após o login, o operador acessa a tela de auditoria e seleciona a tarefa de Auditoria disponível.
O WCS permite que o operador leia todas as posições de estoque.
Para cada posição lida, o operador realiza a leitura do código do item dos itens presentes.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no sistema.
Ao finalizar a leitura de todas as posições, o WCS gera o resumo da auditoria com as quantidades apuradas.
O supervisor realiza a validação e autorização do ajuste de estoque no WCS.
Após a autorização, o WCS consolida as quantidades de cada SKU, considerando todas as posições em que o item está alocado, e envia as informações ao WMS para atualização do estoque.
O processo é finalizado quando todas as posições e itens foram auditados e a auditoria for validada pelo supervisor, nesse momento o WCS envia a integração de ajuste de estoque ao WMS.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Recall  
**Score:** — (semantico) | **ID:** cbdac4f39ca46bf6

O processo de Recall é utilizado quando a operação precisa remover itens específicos da linha de separação. É possível solicitar a retirada de um lote específico ou de todos os lotes de um determinado SKU.
O processo é dividido em duas etapas principais: Criação da Tarefa de Recall e Execução da Tarefa de Recall.
Criação da Tarefa de Recall (Tela de Gestão)
A criação da tarefa de Recall é realizada por meio de uma tela específica no WCS, destinada à gestão e disparo das tarefas.
Funcionalidades da tela de criação:
Seleção do SKU que deverá ser recolhido.
Possibilidade de informar um lote específico; caso não seja informado, o recall será aplicado a todos os itens do SKU.
Definição do escopo do recall com base nas posições onde os itens estão alocados.
Geração da tarefa de Recall no WCS, que ficará disponível para execução pelos operadores.
Após a confirmação, o WCS cria a tarefa contendo as informações necessárias (SKU, lote quando aplicável e posições envolvidas) e a disponibiliza para execução operacional.
Execução da Tarefa de Recall (Tela Operacional)
A execução da tarefa de Recall é realizada pelo operador por meio do coletor Android, acessando a tela operacional de Recall no WCS.
Fluxo de execução:
O operador realiza login no WCS e acessa a tela de Recall – Execução.
O sistema apresenta a tarefa criada, exibindo:
SKU a ser recolhido;
Lote (quando aplicável);
Lista de posições onde os itens estão alocados.
O operador se desloca até as posições indicadas e realiza:
Leitura do endereço;
Leitura do container (caixa de retirada);
Informação da quantidade retirada.
Caso existam mais itens na mesma posição:
O sistema solicita a leitura de um novo container.
O WCS realiza validações durante a execução:
Não permite reutilização de um container já utilizado na mesma tarefa;
Não permite alocação de itens de lotes diferentes no mesmo container.
Havendo mais posições com itens do mesmo SKU/lote, o operador repete o processo até concluir todas as retiradas previstas na tarefa.
Fluxo do Processo:
Início no WCS: A tarefa de recall é gerada diretamente pelo WCS, contendo o código do item e o lote a ser retirado.
Acesso à Tela de Recall: O operador realiza login no WCS utilizando o coletor Android e acessa a tela de Recall.
Informação do SKU e Lote:
O operador informa o SKU do produto a ser recolhido.
Caso necessário, é possível informar um lote específico; se não informado, o recall será realizado para todos os itens do SKU.
Visualização das Posições: O WCS exibe todas as posições onde os itens do lote ou SKU estão alocados, permitindo ao operador identificar os locais de retirada.
Leitura e Retirada:
O operador se desloca até as posições indicadas, realiza a leitura do endereço e do container (caixa de retirada), e informa a quantidade retirada.
Se houver mais itens na mesma posição, o sistema solicitará a leitura de um novo container.
O WCS valida se o container já foi usado; caso positivo, um alerta é emitido, solicitando nova leitura.
O WCS não permite alocação de itens com lote diferentes no mesmo container(caixa de retirada).
Movimento para Próxima Posição: Caso existam mais posições com itens do mesmo lote/SKU, o operador repete o processo de leitura e retirada até que todos os itens sejam removidos.
Consolidação da Tarefa: Ao final da retirada de cada container, o WCS consolida as informações da tarefa, registrando:
Código do item;
Lote (quando aplicável);
Container;
Quantidade retirada.
O WCS envia a integração ao WMS somente ao final da tarefa de Recall, quando todas as posições previstas forem visitadas.
Validação no Transfer: O recall só é realizado para itens no Transfer se a tarefa de recebimento estiver concluída, garantindo que os produtos estejam aptos para retirada.
Este processo assegura rastreabilidade total e controle sobre a movimentação de itens, garantindo que todos estejam devidamente alocados antes da conclusão da tarefa.
O WCS irá enviar a integração no final da tarefa de recall quando todas as posições forem visitadas.
Por solicitação da Operação, o WCS não realizará o controle de lote nas posições de picking. Dessa forma, todas as funcionalidades relacionadas ao controle de lote não estarão disponíveis para execução.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Processo de Movimentação Forçada de Estoque  
**Score:** — (semantico) | **ID:** d090fbd2a165f85a

O processo de movimentação forçada de estoque é utilizado para movimentar produtos das posições de picking ou do Transfer conforme as necessidades da operação.
Antes do início da movimentação, é obrigatória a criação prévia da tarefa pelo supervisor.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Início da Tarefa (Operador)  
**Score:** — (semantico) | **ID:** 54aec13cedf75545

• O operador realiza login no WCS utilizando o coletor Android.
• O operador acessa a tela de Movimentação de Estoque.
• O WCS apresenta a lista de missões disponíveis, contendo item, endereço de origem, quantidade e destino.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** [INÍCIO]  
**Score:** — (semantico) | **ID:** 1119e15a91f9093e

e os resultados de nossos clientes

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** 4. Stakeholders ES  
**Score:** — (semantico) | **ID:** 9f63706c3e190128

Participante
Função
Empresa
Thomas Momesso
Analista de Negócios
Invent
Fabio Ornelas
PMO
Invent
Junior Percio
BASSO PANCOTTE
Tiago Loucatelli
BASSO PANCOTTE
Mateus Girardi
BASSO PANCOTTE
Jose Brandelero
BASSO PANCOTTE
William Civa
BASSO PANCOTTE
Juliano Campagnolo
BASSO PANCOTTE

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Tela de Gestão de Endereços  
**Score:** — (semantico) | **ID:** 391229789feaf5de

O WCS disponibilizará uma tela destinada ao cadastro, alteração e exclusão de endereços.
Nesta tela, o operador poderá ativar ou inativar um endereço conforme a necessidade
operacional.
O sistema somente permitirá alterar o status de endereços que não possuam coleta
prevista já integrada. Caso o operador tente ativar ou inativar um endereço que tenha coleta
prevista já integrada, o WCS exibirá uma mensagem de erro informando que não é possível
alterar o status devido à existência de coletas previstas para o endereço.
Os endereços terão classificação EX: “Pulmão”, “Fullcase”, “Fracionado” e “Misto” (pode coletar
fullcase e fracionado) o WCS deve priorizar a coleta em endereços de picking, mandando para
coleta no pulmão somente itens que não possuem posições de picking fora da linha de
fracionados.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Controle de Estoque de Duas Empresas Diferentes  
**Score:** — (semantico) | **ID:** bbfdff78f4134a47

O WCS será responsável pelo controle de estoque de duas empresas distintas no
mesmo ambiente de automação. Para garantir que não haja confusão ou mistura dos
produtos, o WCS não permitirá o compartilhamento de estoque entre as empresas.
Cada empresa terá seu estoque segregado e controlado de forma independente.
Na coleta de itens, o WCS identificará a empresa responsável pelo produto que está
sendo coletado, garantindo que cada empresa retire apenas os itens de seu próprio
estoque. Durante o processo de separação, o sistema garantirá que os produtos de uma
empresa não sejam alocados nas posições de picking de outra, preservando a integridade
e a rastreabilidade de cada empresa.
O controle de quantidade e lote será específico para cada empresa, assegurando que
os dados de estoque e movimentação sejam mantidos de forma separada e precisa para
ambas as empresas.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Flexibilidade de Auditoria: O operador deve ter a capacidade de alternar entre  
**Score:** — (semantico) | **ID:** 5164c3586db8d5ab

auditorias total, parcial e de endereços vazios conforme a necessidade operacional,
garantindo que o processo seja flexível e adequado às exigências do momento.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Ocorrências  
**Score:** — (semantico) | **ID:** 001220b347b82ba6

As ocorrências são geradas quando o WCS identifica uma discrepância nos dados durante o
processo de auditoria ou quando ocorrer um shorpicking. Cada tarefa de ocorrência será
registrada e deve ser tratada da seguinte maneira:
Geração da Tarefa: Quando uma divergência é identificada, o sistema cria uma
tarefa de ocorrência.
Duplo Check: O operador realiza a auditoria novamente para a posição de estoque ou
item onde foi encontrada a divergência, realizando um duplo check para confirmar a
quantidade real ou identificar alocações erradas.
Fechamento da Ocorrência: Após o duplo check e a validação, a tarefa de
ocorrência é concluída e o WCS atualiza os registros, garantindo a precisão dos dados
no sistema.
Sobra: Quando for constatado uma sobra no processo de auditoria, o operador deve
retirar o item que sobrou da posição e realizar a tratativa do item, se for necessário
devolver esse item para coleta o WMS deve realizar a integração deste item novamente

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Processo de Movimentação Forçada de Estoque  
**Score:** — (semantico) | **ID:** 21ad6f2de247c911

O processo de movimentação forçada de estoque é utilizado para movimentar produtos das
posições de picking ou do transfer de acordo com as necessidades da operação.
Remoção de Itens:
O operador realiza o login no WCS utilizando o coletor android e acessa a tela de
movimentação forçada de estoque.
A tela exibirá uma lista de itens que estão alocados a um endereço. O operador poderá visualizar
os itens junto com suas quantidades.
Remoção do Item:
O operador começa realizando a leitura do endereço correspondente ao item. Após isso, ele
seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a
remoção.
Alocação do Item:
Após a retirada do item o WCS deve indicar a posição desse item no transfer caso exista. O
operador então pode seguir até o endereço indicado realiza a leitura do código do endereço e
confirma a quantidade e realizar a leitura do EAN do item em questão. Caso a movimentação seja
para o transfer o WCS nesse momento dispara a integração atualizando o saldo da posição final
ao WMS.
O processo de movimentação forçada de estoque permite à operação a flexibilidade de
movimentar o estoque, seja para itens no transfer ou nas posições de picking, sempre garantindo
que as informações estejam atualizadas e que a rastreabilidade de todos os itens removidos seja
mantida.
Este processo facilita a gestão de estoques, assegurando que o WCS tenha controle total sobre
a movimentação de produtos, permitindo a movimentação de itens de acordo com a demanda e
necessidade operacional.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 3. Proposito da especificação de software  
**Score:** — (semantico) | **ID:** cfd2223b4ce5d398

Esta especificação de software tem como objetivo descrever, de forma clara, estruturada e
tecnicamente consistente, os processos operacionais e sistêmicos a serem atendidos pelo sistema
WCS Velox, servindo como base para o desenvolvimento, parametrização, validação e evolução
da solução.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** FAIXA  
**Score:** — (semantico) | **ID:** 37473a91b95e06de

Range de data de fabricação por percentual que de determina uma faixa de cor
representando o estado atual de vida do material

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** BK25 — Transportador de Paletes  
**Score:** — (semantico) | **ID:** dc4e56852ef8ef20

Sistema de transporte contínuo composto por esteiras, roletes motorizados e correntes, projetado
para a movimentação de cargas paletizadas. A estrutura é instalada no nível do piso do armazém,
formando circuitos de transporte entre as áreas operacionais. O equipamento um portal de
validação onde há sensores e dispositivos de verificação dimensional que realizam a inspeção
automática do palete validando amarração, alinhamento das caixas, ângulo de empilhamento e
condições de embalagem. O BK25 também possui pontos de desvio que permitem direcionar o
palete para diferentes rotas conforme o resultado das validações.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Obri  
**Score:** — (semantico) | **ID:** cc1a3d4839b4cd7e

EDI_DC40
TABNAM
Nome da Tabela
EDI_DC40
DIRECT
Direção (2=Entrada)
EDI_DC40
IDOCTYP
Tipo IDOC
EDI_DC40
MESTYP
Tipo Mensagem
EDI_DC40
SNDPOR
Porta do Remetente
EDI_DC40
SNDPRN
Sistema
Parceiro
Emissor
EDI_DC40
RCVPOR
Porta do Destinatário
EDI_DC40
RCVPRT
Tipo
de
Parceiro
Destinatário
EDI_DC40
RCVPRN
Nome do Sistema
Destinatário
ZTOCOPERC
LGNUM
Número do Deposito
ZTOCOPERC
TANUM
Número da Ordem
de Transferência
(OT)
ZTOCOPERC
TAPOS
NUMC
Item da Ordem de
Transferência
ZTOCOPERC
LENUM
Un. Deposito (Palete)
ZTOCOPERC
NISTA
Qtd Real Encontrada
ZTOCOPERC
NDIFA
Diferença
(Teórico-
Real)
ZTOCOPERC
ALTME
Unidade de medida
<ZTOCO01>
<IDOC BEGIN="1">
<EDI_DC40 SEGMENT="1">
<TABNAM>EDI_DC40</TABNAM>
<DIRECT>2</DIRECT>
<IDOCTYP>WMTCID01</IDOCTYP>
<MESTYP>WMTOCO</MESTYP>
<SNDPOR>TOCO_PTG</SNDPOR>
<SNDPRT>LS</SNDPRT>
<SNDPRN>WICS_CDPGA</SNDPRN>
<RCVPOR>TOCO_PTG</RCVPOR>
<RCVPRT>LS</RCVPRT>
<RCVPRN>PRD</RCVPRN>
</EDI_DC40>
<ZTOCOPERC SEGMENT="1">
<LGNUM>642</LGNUM>
<TANUM>00000368538676</TANUM>
<TAPOS>0001</TAPOS>
<LENUM>00000000006425799083</LENUM>
<NISTA>6.120</NISTA>
<NDIFA>6.100</NDIFA>
<ALTME>KG</ALTME>
</ZTOCOPERC>
</IDOC>
</ZTOCO01>

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 8.6. Posição de Compra de Palete Vazio  
**Score:** — (semantico) | **ID:** 16cfc494fcd02ceb

No segundo cenário, o operador se dirige até a posição informada no TORD e identifica que não
existe nenhum palete fisicamente disponível na posição. Nesse caso, a solicitação original não
pode ser atendida e deve ser tratada como indisponibilidade de estoque.
Para essa situação, o mesmo processo de troca de palete é executado.
O WCS, ao receber o CATO, deve cancelar a OT em aberto e, na sequência, processar o novo
TORD como uma nova execução, iniciando o fluxo normalmente com os novos dados recebidos.
Dessa forma, garante-se que situações de divergência física ou indisponibilidade sejam tratadas
de forma controlada, mantendo a consistência entre SAP e WCS e evitando execuções
incorretas.
O WCS terá um serviço cronológico que será executado a cada 3 horas e atualizara os status
das OTs para não atendida quando a OT for recebida a mais de 24 horas e ainda está com
status pendente.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Classificação de prioridade  
**Score:** — (semantico) | **ID:** 3109ff2c33c00bfd

A classificação de prioridade é feita com base nos parâmetros de prioridade cadastrados no Velox,
esses valores parametrizados são multiplicados pela prioridade de separação da temperatura na
onda e os dados de categoria e tipo de peso são avaliados para atribuir a nova prioridade.
Os parâmetros utilizados serão:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Saída do AC para Canais de Picking comuns  
**Score:** — (semantico) | **ID:** c02212c8ddee583c

Movimentação de um palete saindo de uma posição do AC para uma posição de picking não
administrada pelo BK25, onde todo processo de retirada do palete na posição de origem e
deposito do palete na posição de destino é realizada pelo SAP, o WCS não realiza nenhuma
movimentação física ou automatizada nesse processo.
Quando o transporte do palete for finalizado o SAP envia ao WCS a confirmação da OT (IDOC
TOCO) e assim o saldo passa a ser disponibilizado para coleta no WCS.
Para os casos de cancelamento ou estorno de OT o IDOC CATO será disparado do SAP ao WCS
que por sua vez inicia os processos de validação de integração e em caso de sucesso o WCS
retornara um CATO de confirmação de estorno ao SAP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Porta-Palete para Canal de Picking dinâmico  
**Score:** — (semantico) | **ID:** d11399fd919d47f1

Movimentação de um palete saindo de uma posição do AC para uma posição de picking
automatizada administrada pelo BK25, onde o processo de retirada do palete na posição de
origem é responsabilidade do SAP e após a confirmação de retirada do palete da posição ele
envia o TOCO de confirmação de 1ª etapa (perna) ao WCS.
Após o recebimento do TOCO o WCS atualizará o status da OT disponibilizando o número do
palete (UD) no monitor de induções do BK25, com isso o colaborador deverá procurar o palete
no stage de indução (Paredão) e induzi-lo no BK25 [Regra de Avaliações e Movimentações de
Paletes].
Após as validações do BK25 [BK25] e movimentações no transelevador [Transelevador] e o
palete for confirmado na posição de destino o WCS realiza a disponibilização para coleta e envia
o IDOC TOCO ao SAP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Saída do AC para Canais de Picking comuns  
**Score:** — (semantico) | **ID:** 0cf22c8f73dc1119

Movimentação de um palete saindo de uma posição do AC para uma posição de picking não
administradas pelo BK25, onde todo processo de retirada do palete na posição de origem e
deposito do palete na posição de destino é realizada pelo SAP, o WCS não realiza nenhuma
movimentação física ou automatizada nesse processo.
Quando o transporte do palete for finalizado o SAP envia ao WCS a confirmação da OT (IDOC
TOCO) e assim o saldo passa a ser disponibilizado para coleta no WCS.
Para os casos de cancelamento ou estorno de OT o IDOC CATO será disparado do SAP ao WCS
que por sua vez inicia os processos de validação de integração e em caso de sucesso o WCS
retornara um CATO de confirmação de estorno ao SAP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Porta-Palete para Canal de Picking dinâmico  
**Score:** — (semantico) | **ID:** 088e81a719284489

Movimentação de um palete saindo de uma posição de porta-palete (AC ou AA) para uma
posição de picking automatizada, onde o processo de retirada do palete na posição de origem é
responsabilidade do SAP e após a confirmação de retirada do palete da posição ele envia o
TOCO de confirmação de 1ª etapa (perna) ao WCS.
Após o recebimento do TOCO o WCS atualizará o status da OT disponibilizando o número do
palete (UD) no monitor de induções do BK25, com isso o colaborador deverá procurar o palete
no stage de indução (Paredão) e induzi-lo no BK25 [Regra de Avaliações e Movimentações de
Paletes].
Após as validações do BK25 [BK25] e movimentações no transelevador [Transelevador] e o
palete for confirmado na posição de destino o WCS realiza a disponibilização para coleta e envia
o IDOC TOCO ao SAP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** NOTA: Todas as posições bloqueadas são excluídas da seleção de lote, ou seja, todo saldo  
**Score:** — (semantico) | **ID:** 53d9561b3a9a341e

bloqueado é ignorado pelo WCS no momento de selecionar os lotes e posições para coleta,
qualquer palete que esteja em processo de abastecimento para uma posição bloqueada não
poderá ser usado como abastecimento de necessidade, o saldo deverá ser ignorado também
Os TORDs de bloqueio e desbloqueio serão enviados com a tag <TRART>U</TRART>, sempre
com o valor fixo “U”.
Para bloqueio, a tag <BESTQ> será sempre enviada e conterá algum valor, sendo que qualquer
conteúdo presente nessa tag deve ser interpretado como indicativo de bloqueio.
Para desbloqueio, a tag <TRART>U</TRART> também será enviada; entretanto, a tag
<BESTQ> não estará presente na mensagem.
O desbloqueio sempre será realizado por lote/palete, ou seja, se uma única caixa de um lote
estiver bloqueada na posição, toda a posição se mantem bloqueada até que não tenha nenhum
lote com bloqueio na posição.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Limpeza de Canal  
**Score:** — (semantico) | **ID:** 5e1ed705146597a4

A limpeza de canal é o processo de remoção de paletes de posições de picking e buffer,
executado a partir de uma ordem enviada pelo SAP. Existem dois tipos de limpeza com
comportamentos distintos, determinados pela natureza da posição que será esvaziada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 4 — Confirmação: O WCS envia um WMTOCO ao SAP confirmando que o palete foi  
**Score:** — (semantico) | **ID:** 07d06264eb3bcdf2

retirado da posição. O WCS zera o saldo da posição de origem e a disponibiliza para futuro uso.
Podem ocorrem casos em que devido a uma falha na gestão de estoque como posição vazia a
movimentação não possa ser concluída a movimentação de retirada e para esses casos o WCS
enviara o WMTOCO ao SAP informando no campo NLPLA com o destino “INVENTARIO”.
Como o buffer não está envolvido diretamente na coleta, não há necessidade de verificação de
separação em andamento. A limpeza é direta.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Obri  
**Score:** — (semantico) | **ID:** 15ec8ca08201aa03

<WMTCID01>
<IDOC BEGIN="1">
EDI_DC40
TABNAM
Nome da Tabela
EDI_DC40
DIRECT
Direção
(2=Entrada)
EDI_DC40
IDOCTYP
Tipo IDOC
EDI_DC40
MESTYP
Tipo Mensagem
EDI_DC40
SNDPRN
Sistema Parceiro
Emissor
E1LTCOX
LGNUM
Número do
Deposito
E1LTCOX
LENUM
Un. Deposito
(Palete)
E1LTCOX
SQUIT
Indic. Confirmação
E1LTCOX
NLPLA
Posição de Destino
E1LTCOX
QUKNZ
Código de Quitação
<EDI_DC40 SEGMENT="1">
<TABNAM>EDI_DC40</TABNAM>
<DIRECT>2</DIRECT>
<IDOCTYP>WMTCID01</IDOCTYP>
<MESTYP>WMTOCO</MESTYP>
<SNDPOR>TOCO_PTG</SNDPOR>
<SNDPRT>LS</SNDPRT>
<SNDPRN>WICS_CDPGA</SNDPRN>
<RCVPOR>TOCO_PTG</RCVPOR>
<RCVPRT>LS</RCVPRT>
<RCVPRN>PRD</RCVPRN>
</EDI_DC40>
<E1LTCOX SEGMENT="1">
<LGNUM>642</LGNUM>
<LENUM>00000000006425799083</LENUM>
<QNAME></QNAME>
<SQUIT>X</SQUIT>
<NLPLA>ENTRADA_C</NLPLA>
<NPPOS></NPPOS>
<ENAME></ENAME>
<QUKNZ>1</QUKNZ>
</E1LTCOX>
</IDOC>
</WMTCID01>

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 3 — Retirada da lista de coleta e aguardo de finalização: O WCS não direciona  
**Score:** — (semantico) | **ID:** 2b471db327f60e63

novas coletas para a posição. Porém, a coleta que já está em andamento (LED já aceso ou
pendentes de acendimento, operador já sinalizado) não é interrompida. O WCS aguarda que o
operador finalize a separação normalmente, colete as caixas, etiquete se PVAR [Coleta PVAR],
induza na esteira e confirme no display LED. Somente após a confirmação do operador o WCS
prossegue para o próximo passo.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 4 — Sinalização de posição desativada: Após a conclusão da coleta pendente (ou  
**Score:** — (semantico) | **ID:** 20c0f321d3f381a8

imediatamente, se não havia coleta), o WCS sinaliza ocorrência indicando que ela foi
desativada. Essa sinalização é uma indicação visual (999) para que a operação saiba que a
posição está fora de uso e será esvaziada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Obri  
**Score:** — (semantico) | **ID:** 574a2a01ed886dea

EDI_DC40
TABNAM
Nome da Tabela
de Controle
EDI_DC40
DIRECT
NUM
Direção (1-Saída,
2-Entrada)
EDI_DC40
IDOCTYP
Tipo de IDoc
EDI_DC40
MESTYP
Tipo de
Mensagem
EDI_DC40
SNDPOR
Porta Emissora
EDI_DC40
SNDPRT
Tipo de Parceiro
Emissor
EDI_DC40
SNDPRN
Nome do Parceiro
Emissor
EDI_DC40
RCVPOR
Porta Receptora
EDI_DC40
RCVPRT
Tipo de Parceiro
Receptor
EDI_DC40
RCVPRN
Nome do Parceiro
Receptor
ZHSDCANCELEXPREM
DELID
NUM
ID da Remessa
(Delivery)
ZHSDCANCELEXPREM
SHPID
NUM
ID do Transporte
(Shipment)
ZHSDCANCELEXPREM
ZUNAME
Nome do Usuário
Responsável
ZHSDCANCELEXPREM
ZDT
DATE
Data do
Cancelamento
(AAAAMMDD)
ZHSDCANCELEXPREM
ZHR
TIME
Hora do
Cancelamento
(HH:MM:SS)
<ZSDCANCELEXPREM01 xmlns="urn:sap-
com:document:sap:idoc:soap:messages">
<IDOC BEGIN="1">
<EDI_DC40 SEGMENT="1">
<TABNAM>EDI_DC40</TABNAM>
<DIRECT>2</DIRECT>
<IDOCTYP>ZSDCANCELEXPREM01</IDOCTYP>
<MESTYP>ZSDCANCELEXPREM</MESTYP>
<SNDPOR>ZSDCANCELEXPREM_SVD</SNDPOR>
<SNDPRT>LS</SNDPRT>
<SNDPRN>WCS_CDSVD</SNDPRN>
<RCVPOR>ZSDCANCELEXPREM_SVD</RCVPOR>
<RCVPRT>LS</RCVPRT>
<RCVPRN>PRD</RCVPRN>
</EDI_DC40>
<ZHSDCANCELEXPREM SEGMENT="1">
<DELID>0343305198</DELID>
<SHPID>0128761059</SHPID>
<ZUNAME>Jackson Silva</ZUNAME>
<ZDT>20260204</ZDT>
<ZHR>09:01:44</ZHR>
</ZHSDCANCELEXPREM>
</IDOC>
</ZSDCANCELEXPREM01>

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Criação de onda  
**Score:** — (semantico) | **ID:** 6767412f7e25f088

O processo produtivo de separação e expedição é regido por ondas onde cada onda é composta
por um ou mais transportes, esse processo depende da seleção dos transportes que serão
agrupados em uma onda, os transportes disponibilizados nessa tela serão somente os transportes
que todas as remessas formam processadas com sucesso.
Para realizar a essa seleção o usuário deve acessar a tela de transportes selecionar os transportes
desejados e clicar na opção criar onda para seguir com a criação desse agrupamento de
transportes ou na opção verificar reabastecimento.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Manutenção de Transporte  
**Score:** — (semantico) | **ID:** 6617ea2827dabf6f

Antes de criar a onda, a operação (Usuários) pode definir e editar dados relacionados aos
transportes dentro das ondas com as informações operacionais que definem como cada
transporte será processado durante a separação e expedição. Essa configuração engloba a
associação de docas e o modo de operação (padrão ou misto).
As informações de veículos e transportes são recebidas pelo WCS exclusivamente via IDOC
enviado pelo SAP no momento da criação da remessa [Remessa].
Para determinar o sequenciamento de coleta e consecutivamente a ordenação de chegada dos
volumes nos seus destinos e definir os destinos onde os volumes que serão desviados (docas) a
operação deve fazer a seleção do tipo de separação e docas por temperatura de acordo com o
tipo de separação solicitado e poderá escolher 1 ou mais docas por temperatura.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Inclusão de transporte  
**Score:** — (semantico) | **ID:** 7a4333e1ec82f28a

Para atender a necessidade da operação é possível incluir um transporte a uma onda já criada,
desde que o status da onda que receberá o novo transporte for criada ou preparada, com isso
quando o usuário clicar na opção incluir transporte o WCS irá listar todas as ondas com status
mencionados acima, e junto das ondas será informada a quantidade de docas disponíveis para
cada onda em relação as docas já utilizadas, sendo considerado a usabilidade da doca por onda.
Após a seleção da onda o WCS irá listar todos os transportes com status disponível sendo possível
selecionar uma ou mais transportes, sendo possível selecionar somente a quantidade de
transportes corresponde a quantidade de docas disponível na onda selecionada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Impede start da onda?  
**Score:** — (semantico) | **ID:** a28074d8253f1e93

Usuário vinculado
Verifica se há usuário vinculado ao posto de trabalho
Impressora vinculada
Verifica se há impressora/contingência vinculado ao posto de trabalho Sim
Modo de impressão
Verifica de o modo de impressão por posto está em contingência
Não
Caso o operador confirme o início da onda, a coleta desses materiais ocorrerá normalmente. No
entanto, ao passarem pelo portal do sorter, os volumes correspondentes aos itens com cadastro
incompleto serão automaticamente direcionados para o rejeito.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Detalhes de transportes  
**Score:** — (semantico) | **ID:** 3d99fa92cb1f248a

Detalhe de transporte é uma funcionalidade com aspecto de relatório que servirá para apoiar na
análise do processo de separação e expedição dos materiais por transporte.
Esse relatório conta com as seguintes informações:
Transporte, placa, remessa, cliente, sku, lote (esperado na coleta), quantidade remessa,
quantidade atendida (pós início da onda), quantidade separada, quantidade desviada, quantidade
cortada, posição de coleta, shelf de, shelf até, status da remessa e status do item.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Percentuais / Status  
**Score:** — (semantico) | **ID:** b8318be3db793abe

Percentual Concluído
Percentual de volumes já
finalizados
-
Percentual em Separação
Percentual de volumes em
processo de separação
-
Percentual Rejeito
Percentual de volumes que foram
para rejeito
-
Percentual Pendente
Percentual de volumes ainda
aguardando processamento
-

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Fluxo Operacional  
**Score:** — (semantico) | **ID:** 25a982927a5587fb

Iniciados
Quantidade de volumes que
entraram no processo
Volumes /
Tarefas
Em Separação
Quantidade em etapa de picking
Volumes /
Tarefas
Na Doca
Quantidade pronta ou
posicionada na doca
Volumes /
Tarefas
Finalizados
Quantidade concluída com
sucesso
Volumes /
Tarefas
Rejeitados
Quantidade com erro ou desvio
no fluxo
Volumes /
Tarefas

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Contingência de Impressão  
**Score:** — (semantico) | **ID:** c5e0f2af098c5526

O processo de coleta com impressão contará com um modo de contingência parametrizável por
posto. Nesse cenário, será possível definir uma impressora de contingência e associar múltiplos
postos a ela, respeitando as seguintes regras:
•
Não será permitido cadastrar mais de uma contingência ativa para a mesma
impressora.
•
Um mesmo posto não poderá estar vinculado a mais de uma contingência.
A criação da contingência será realizada por uma tela no WCS, onde o usuário deverá:
•
Selecionar a impressora que será utilizada como contingência;
•
Definir os postos que operarão em modo contingência;
•
Ativar a contingência para que ela passe a ser ativa no sistema
A configuração de contingência é realizada por impressora, podendo atender múltiplos postos
simultaneamente.
Para os postos configurados em contingência, no momento da inicialização da onda, todas as
etiquetas dos volumes serão impressas de uma única vez.
As impressões serão realizadas agrupadas por posto e seguirão uma ordenação baseada no
nível e no número do posto, sendo ordenadas do menor para o maior.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Seleção de Lote  
**Score:** — (semantico) | **ID:** c8f02e7e78a5570e

A seleção de lote é o processo pelo qual o WCS determina em quais palete e posições o
operador deve coletar as caixas para atender a demanda da onda. Essa decisão é direcionada
ao acendimento dos LEDs na zona de picking, o LED que acende para o operador corresponde
à posição do palete que o WCS selecionou como o mais adequado para aquela coleta.
Quando uma onda é iniciada e a lista de coleta é gerada, o WCS precisa decidir, para cada item
da lista, qual palete específico será consumido. Essa decisão considera dois critérios aplicados
em sequência: a posição física do palete (sequência) e a regra FEFO (o lote com validade
mais velha sai primeiro).
O resultado da seleção de lote é o que define a sequência de acendimento dos LEDs dentro de
cada posto, o operador não escolhe de qual palete coletar, o WCS toma essa decisão e sinaliza
através do LED.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Sequência de coleta  
**Score:** — (semantico) | **ID:** a50d8d2cfe09e433

Após a seleção de lote e determinação dos paletes que vão atender a necessidade das remessas
na onda é gerado o sequenciamento de coleta, onde é determinado em que sequencia os leds
devem acender.
Essa sequência é baseada em parâmetros que podem ser alterados pelo usuário desde que ele
tenha permissão para acessar as configurações.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Randomização de quantidade para coleta  
**Score:** — (semantico) | **ID:** d39d52662c4bcfda

Para garantir acurácia no processo de separação as quantidades que apareceram no visor do led
serão randomizadas, exceto para os materiais PVAR onde o led será acesso uma única vez com
a quantidade total solicitada.
Para os demais tipos de peso o WCS irá verificar os parâmetros de randomização (mínimo e
máximo) que determinaram se o valor deve ser randomizado ou não.
A randomização só ocorrerá se a quantidade da onda é maior que q quantidade mínima
parametrizadas e a quantidade de acendimento é determinada pela quantidade de vezes esse
valor será randomizado, pois o valor máximo indica o limite que o valor pode ser randomizado.
O WCS faz a validação sobre o saldo necessário e enquanto todo saldo não é randomizado
enquanto o valor necessário não for totalmente atendido à randomização não termina.
Exemplo:
Necessidade = 80
mínimo = 15
máximo = 30

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Processo de Coleta PVAR  
**Score:** — (semantico) | **ID:** 84c3fec71b4c180a

A coleta de materiais do tipo PVAR possui um fluxo operacional específico, sendo executada de
forma prioritária, sequencial e com controle obrigatório de etiquetagem por volume,
diferenciando-se dos demais tipos de peso (PPAD e PFIX).
Os materiais PVAR devem ser sempre coletados primeiro dentro de cada posto, respeitando a
sequência por temperatura e ordenação por posição física, sem considerar categorias de peso
(leve, pesado ou frágil). A operação ocorre de forma totalmente sequencial, com apenas um
LED ativo por vez por posto, sendo que uma nova posição de coleta somente será liberada após
a confirmação manual da posição anterior pelo operador.
O acionamento do LED é o gatilho de toda a operação, onde simultaneamente:
•
O display indica a quantidade de caixas a serem coletadas
•
O WCS dispara automaticamente os arquivos de impressão (ZPL)
•
A quantidade de etiquetas impressas corresponde exatamente à quantidade exibida
O operador deve realizar a coleta de forma unitária (uma caixa por vez), aplicando a etiqueta
em cada volume e induzindo-o na esteira. Após finalizar todas as caixas da posição, deve
confirmar a operação no botão do LED, liberando a próxima posição de coleta. Esse ciclo se
repete até a finalização total dos materiais PVAR do posto, sendo que somente após essa
conclusão a coleta dos materiais PPAD e PFIX será iniciada.
Durante a operação, podem ocorrer exceções. Em casos de falha de impressão por falta de
insumos, o operador deve realizar a reposição e, caso a impressão não normalize, deve seguir
com a coleta normalmente, etiquetando apenas os volumes que possuem etiquetas disponíveis
e induzindo todos na esteira. Os volumes sem etiqueta serão tratados posteriormente no sorter
e serão rejeitados conforme parametrização de obrigatoriedade de leitura.
Na situação de corte [Corte na Coleta], quando a quantidade física disponível for inferior à
solicitada, o operador deve ajustar manualmente a quantidade no display do LED, coletar
apenas o disponível e descartar as etiquetas excedentes. Sistemicamente, a informação de
corte será registrada e enviada contemplando os dados de quantidade em kg, quantidade por
palete e o total em kg que foi efetivamente cortado.
Caso ocorra falha de impressora durante a operação, o posto poderá ser direcionado para
contingência, onde as etiquetas pendentes serão redirecionadas para uma impressora
alternativa. Etiquetas que não foram impressas fisicamente deverão ser reprocessadas
manualmente através da funcionalidade de acompanhamento de volumes PVAR.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Exemplo: Código produtor 364, fabricação em 21/01/2022  
**Score:** — (semantico) | **ID:** 95cac08cff35a3ea

•
Lote formado: 3642021
•
Se o item for PFIX (conforme cadastro de material): 3642021060 (com faixa de peso
6,0 kg)
Observação: Este layout pode apresentar os códigos tanto na horizontal quanto na vertical. O
WCS deve interpretar ambas as orientações.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Regra de formação: O WCS deve manter um cadastro que associa o SKU/DUN14 à regra de  
**Score:** — (semantico) | **ID:** 901a1a9edc1b8a71

formação de lote para fornecedores terceiros. Toda vez que o WCS receber um volume desse
SKU/DUN14, o lote será formado como:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tratativa SKU Terceiro  
**Score:** — (semantico) | **ID:** aa6ad39a9586db6f

Para atender a necessidade de produtos oriundos de fabricante terceiros é necessária uma tela
de cadastro desses skus, onde quando não for possível compor um lote, como última tentativa o
WCS vai buscar o sku em sua base de skus terceiros e caso encontre vai usar o código produtor
encontrado para compor o lote.
Essa funcionalidade permite cadastros
realizados diretamente pelo usuário, sendo
responsabilidade do time MBRF a assertividade desses dados para não ocasionar rejeitos
desnecessários.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 5. O próximo volume dele SKU + shelf life passará pelo mesmo processo, e como a  
**Score:** — (semantico) | **ID:** 3e2165f8aa4cc598

transportadora anterior acabou de receber um volume, agora outra pode estar mais
ociosa, garantindo a alternância.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Exemplo prático:  
**Score:** — (semantico) | **ID:** 93599409b7895dd3

Situação: SKU 719287 (Bacon Inteiro Sadia) com shelf life compatível aparece nos pedidos de 3
transportadoras:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Lógica de Distribuição  
**Score:** — (semantico) | **ID:** 62f41569b1701e90

Na primeira análise de distribuição, o WCS deve realizar o direcionamento dos skus
considerando a quantidade de volumes de forma decrescente e respeitando o número de docas
disponíveis para a transportadora.
Para isso, o sistema deve:
•
Identificar a quantidade de docas cadastradas para a transportadora;
•
Identificar a quantidade de skus previstos na onda para aquela doca.
Com base nessas informações, a distribuição deve seguir a seguinte lógica:
•
O SKU com maior quantidade de volumes deve ser direcionado para a primeira rampa
disponível;
•
O segundo SKU com maior volume deve ser direcionado para a próxima doca;
•
O processo deve continuar de forma sequencial até que todas as docas sejam
utilizadas.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 3 — Seleção da transportadora (nível macro): Entre as transportadoras elegíveis, o  
**Score:** — (semantico) | **ID:** b174dd2e7ded9fbb

WCS seleciona a mais ociosa, aplicando o balanceamento 1 para 1.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** PVAR  
**Score:** — (semantico) | **ID:** ddb73c52afc9a8ea

Tratável
O volume PVAR passou pelo portal sem etiqueta de
expedição e o parâmetro de crosscheck obrigatório
está ativo. O WCS não consegue determinar a
rampa de destino.
Falha de impressão na coleta ou
etiqueta caiu durante o transporte na
esteira.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** não atende  
**Score:** — (semantico) | **ID:** 466676bfa1a1bc21

Não
tratável
O volume foi coletado e lido com sucesso, porém o
shelf life do produto não atende o range exigido
pelo cliente daquele transporte. O WCS identifica a
incompatibilidade e rejeita o volume.
Palete com shelf life insuficiente foi
utilizado na separação; o controle de
FEFO não filtrou corretamente ou houve
troca de lote na posição.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 3. O fluxo de reimpressão segue a mesma lógica da reimpressão na tela de Volumes  
**Score:** — (semantico) | **ID:** c0c31e5f88907685

PVAR: seleção de impressora e seleção obrigatória de motivo.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Relatório de separação  
**Score:** — (semantico) | **ID:** acf090ca410cef63

Relatório de separação será contabilizado as informações da separação na posição e colaborador
que efetuou os processos.
Para o relatório de separação vamos informar os seguintes campos:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Campo  
**Score:** — (semantico) | **ID:** c3a0b8d285847aac

Local
Identificação do ponto físico onde o evento ocorreu
Código de
rejeição
Código que representa o motivo da rejeição ou desvio do volume no
processo
Etiqueta
Identificação da etiqueta lida no volume
SKU
Código do Volume (Quando houver)
Lote
Lote do volume (Quando houver)
ACKN
Indicador de confirmação de processamento da mensagem/evento
entre sistemas
Estratégia
Identificação da estratégia/regra aplicada ao tratamento do volume
Criado em
Data e hora em que o registro do evento foi gerado no sistema.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Processo de Picking Exceção  
**Score:** — (semantico) | **ID:** 00b3cd89b60f9746

O Picking Exceção será utilizado para itens que não se enquadram nos parâmetros da
automação, mas que devem ser alocados manualmente no processo de Aloca Pallet. O
fluxo operacional será semelhante ao processo de Full Case, mas com a diferença de que
os itens não farão parte da automação e serão direcionados manualmente para a rampa ou
alocação nos pallets.
Fluxo Operacional de Picking Exceção:
O operador realiza o login no WCS utilizando o coletor Android.
O operador seleciona a tela de Order Start Picking Exceção, onde escolhe o posto
de impressão em que está fisicamente para retirar as etiquetas.
Após selecionar o posto de impressão, o operador escolhe a rua da qual ele irá fazer o
Picking Exceção. O sistema exibirá a lista de tarefas de separação de acordo com a
rua selecionada e os volumes disponíveis.
As tarefas de Picking Exceção serão segregadas por rampa do Sorter, permitindo
que o operador saiba para qual rampa deve levar os itens após a coleta.
Início da tarefa:
O WCS determina automaticamente a quantidade de itens a coletar na leva,
respeitando os parâmetros de:
o
peso máximo do pallet de coleta; e
o
cubagem máxima do pallet de coleta.
O peso e cubagem máxima será cadastrada em uma tela de parâmetros do WCS.
O WCS imprime as etiquetas referente aquela tarefa de separação, seguindo a lógica
de impressão do processo de Full Case.
O operador realiza a separação e consolida os itens no pallet correspondente à Tarefa.
O coletor é direcionado para a tela de coleta, onde o operador deve se deslocar até o
endereço especificado no coletor.
O operador realiza a leitura do endereço para iniciar a coleta do item.
O operador confirma a quantidade separada e realiza a leitura do código do item.
O operador se desloca para o próximo endereço e repete o processo até concluir todas
as coletas.
Destinação a Rampa:
Após finalizar todas as coletas, o WCS informará em qual rampa do sorter os itens coletados
deverão ser direcionados.
O comportamento do processo na rampa estará condicionado ao parâmetro de paletização
por transportadora, conforme descrito a seguir:
Parâmetro de Paletização por Transportadora Ativo:
Os volumes coletados ficarão disponíveis na rampa para o operador responsável pelo
processo de Aloca Pallet.
O operador deverá realizar a alocação manual de cada volume em sua respectiva
posição de pallet.
Cada volume será associado à um RG de pallet, sendo obrigatória a confirmação da
alocação no WCS.
O WCS somente considerará o volume como expedido após a confirmação da alocação
no pallet.
As informações de vínculo entre volumes e RG de pallet serão integradas conforme o
processo de Aloca Pallet.
Parâmetro de Paletização por Transportadora Inativo:
Não será necessário realizar o processo de Aloca Pallet.
O operador deverá realizar a leitura individual de cada volume no PRIX fixo
instalado ao final da rampa, sinalizando a chegada física do volume na rampa.
A leitura no PRIX será utilizada pelo WCS para:
o
Confirmar a chegada do volume na rampa de destino;
o
Atualizar o status operacional e o dashboard do WCS.
Não haverá vínculo de volumes com RG de pallet nesse cenário.
Esse processo de Picking Exceção garante que itens que não se enquadram no fluxo
automatizado sejam tratados manualmente de forma controlada, assegurando rastreabilidade,
visibilidade operacional e aderência aos parâmetros definidos por transportadora.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Se a Transportadora Realiza Paletização  
**Score:** — (semantico) | **ID:** ea607f0bd68cafbb

Ao marcar “Sim”, o sistema habilita o processo de agrupamento:
Agrupamento por Transportador Rota
Cada rampa gera pallets separados por Transportadora + Rota.
O coletor orienta o operador a colocar cada volume no pallet correto.
O WCS registra a quantidade de volumes por pallet.
O WCS envia a integração de fechamento quando o pallet é concluído.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Validação na Rampa  
**Score:** — (semantico) | **ID:** ec9f21929ec00c7c

Em cada rampa, haverá um leitor de código de barras que realizará o processo de Validação
após o desvio do volume na rampa, conforme descrito a seguir:
Leitura do Volume: O leitor captura o código do volume presente na rampa.
Validação do WCS: O WCS verifica se o volume está alocado na rampa correta de
acordo com o mapa de destinos.
Sinaleiro: O WCS envia uma instrução ao PLC para acender o sinaleiro:
o
Verde: O volume está na rampa correta.
o
Vermelho: O volume está na rampa incorreta.
Esse processo garante a validação final do desvio de cada volume, permitindo rápida
identificação de inconsistências e auxiliando a operação a manter a precisão e rastreabilidade dos
pedidos, porém não é obrigatória.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Alocação de Volumes no Pallet  
**Score:** — (semantico) | **ID:** b8a797f2a2ce4ae6

Quando um volume chega à ponta da rampa, o operador realiza a leitura da etiqueta do volume
Após isso, o WCS verifica se já existe um pallet ativo associado à mesma transportadora e rota
daquele volume.
Se já existir pallet para aquela rota/transportadora:
O coletor exibirá a posição do pallet onde o volume deve ser alocado.
Se ainda não existir pallet para aquela rota/transportadora:
O coletor solicitará ao operador que informe uma posição física de pallet.
Após leitura dessa posição, ela passa a ser utilizada para todos os próximos volumes da
mesma rota/transportadora.
Fluxo operacional do Aloca Pallet:
1. Coletar o volume na ponta da rampa.
2. Ler a etiqueta do volume gerada pelo velox.
3. O WCS indicará no coletor a posição do pallet.
4. O operador deposita o volume no pallet.
5. O operador realiza a leitura do código de barras da posição do pallet para confirmar a
alocação.
Caso o operador informe uma posição diferente da indicada pelo sistema, o WCS apresentará
mensagem de erro, orientando o operador a informar a posição correta.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** 62a76bf6ca8d1fc3

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.2. Indução Volumes  
**Score:** — (semantico) | **ID:** 4652f700039cc7fa

A indução de volumes será gerenciada e cadenciada pelo WMS, que controlará as regras de
prioridade e a matriz de fragilidade de cada produto. O processo começa com o WMS, que realiza
o processo de separação e deixa os paletes das tarefas que foram concluídas em uma área
chamada “Stage In”, nesse momento é enviado uma integração para cada pallet que for
finalizado. Com essas informações, o WCS gera uma listagem orientativa de forma sequencial de
indução, onde informa qual pallet deve ser induzido em cada momento, respeitando as condições
de disponibilidade e prioridade e matriz de fragilidade.
A partir da integração dos paletes enviada pelo WMS o WCS já deve permitir que aqueles volumes
sejam liberados para desvio no sorter e alocação em seus respectivos PTLs.
O WCS não supervisiona o processo de indução, por solicitação do cliente esse processo será
controlado pela Operação, e é sua responsabilidade que o controle de indução dos volumes ocorra
de acordo com a prioridade e a matriz de fragilidade previamente definida, otimizando o
desempenho do sistema de automação.

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Stakeholders ES  
**Score:** — (semantico) | **ID:** 4287d683c6eddefc

Participante | Função | Empresa
Thomas Momesso | Analista de DEVOPS | Invent
Gustavo Torres | Analista de DEVOPS | Invent

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Stakeholders ES  
**Score:** — (semantico) | **ID:** c097ea9d2a07822e

Participante | Função | Empresa
Giovanni Crestan | PMO - Project Management Office | Invent
Thomas Momesso | Analista de Negócios | Invent
Gustavo Torres | Analista de Negócios | Invent
Bruno Jorge | Responsável técnico WMS / Tottus | Tottus
David Larenas | Sponsor / Aprovador do Cliente | Tottus

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Possíveis Erros  
**Score:** — (semantico) | **ID:** 06b6f778bc4aab51

Status | Mensagem | Causa
401 | Autenticação básica é obrigatória. | Header Authorization ausente ou inválido
401 | Usuário ou senha inválidos. | Credenciais incorretas
400 | Erro ao processar a autenticação. | Requisição malformada / JSON inválido

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Resumo do Fluxo  
**Score:** — (semantico) | **ID:** b5e85ba92265ba91

1. Autenticar: Envie POST /autenticacao com Basic Auth
2. Receber: Token na resposta JSON
3. Usar: Inclua Authorization: Bearer <token> nas próximas requisições
Importante: Guarde o token com segurança — ele expira automaticamente em 24h.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Stakeholders ES  
**Score:** — (semantico) | **ID:** e6cb85c264ebc3a7

Participante | Função | Empresa
Alex Thimoteo | PMO - Project Management Office | Invent
Thomas Momesso | Analista de Negócios | Invent
Gustavo Torres | Analista de Negócios | Invent
David Larenas B | Tottus | David Larenas B
Gonzalo Andres Muñoz | Tottus | Gonzalo Andres Muñoz
Lidia R Navarro | Tottus | Lidia R Navarro
Alex Espinoza | Tottus | Alex Espinoza
Jonathan Nelson Olea | Tottus | Jonathan Nelson Olea
Claudia V Caceres | Tottus | Claudia V Caceres
Niunier David | Tottus | Niunier David

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** 49269dd5d77f092d

CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 3.5. Glossário de Termos  
**Score:** — (semantico) | **ID:** 0f773d9b22b5e8b6

Processo Macro
Detalhamento Técnico
WCS
Warehouse Control System - Sistema de Controle de Armazém
WMS
Warehouse Management System - Sistema de Gerenciamento de Armazém
UM
Unidade de Medida - Pode ser fullcase ou customizada pelo usuário
Fullcase
Caixa fechada completa do fabricante
SKU
Stock Keeping Unit - Código único do produto
DUN
Código único de identificação de volume
PTL
Put To Light - Posição de Pallet no sorter (máx. 16 posições)
PDV
Ponto de Venda - Display com informações detalhadas
LED
Sistema de sinalização luminosa usado em posições de picking
NoRead
Evento de não leitura de código no portal automático
Sorter
Sistema automatizado de separação e direcionamento de volumes
Velox
Sistema de WCS desenvolvido pela Invent
Picking
Processo de separação/coleta de produtos
Packing
Processo de embalagem dos produtos para expedição
Corte/Ruptura
Situação onde a quantidade física é menor que a solicitada
Etiqueta Master
Etiqueta de identificação do pallet completo
FIFO
First In, First Out - Primeiro a entrar, primeiro a sair
PTW
Estrutura de consolidação de pedidos do museu (baixo giro).
Museu
Área de armazenagem de itens de baixo giro, localizada fora da automação, a nível chão.
Composta por corredores para empilhadeiras retráteis e corredores estreitos para picking cart.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 13.2. Tratamento de item órfão  
**Score:** — (semantico) | **ID:** 2c614f50b24c10f9

Caso o operador encontre em uma posição um SKU que sistemicamente não deveria estar ali, e
o item bipado não estiver cadastrado na posição, o sistema bloqueia a operação e exige
autenticação do supervisor para prosseguir, evitando a criação de saldo indevido por erro de
bipagem.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 14. Processo de Movimentação Forçada de Estoque  
**Score:** — (semantico) | **ID:** 613990ad628a0489

O processo de movimentação forçada de estoque é utilizado para movimentar produtos das
posições de picking conforme as necessidades da operação.
Início da tarefa:
O operador realiza login no WCS utilizando o coletor Android e acessa a tela de
movimentação forçada de estoque.
A tela exibirá uma lista de itens alocados a endereços específicos, permitindo que o
operador visualize os itens e suas respectivas quantidades.
Remoção do Item:
O operador inicia a operação realizando a leitura do endereço correspondente ao item.
Em seguida, seleciona a quantidade a ser retirada e realiza a leitura do código do item
para confirmar a remoção.
Alocação do Item:
Após a retirada, o WCS indica uma posição de picking sugerida, caso exista.
O operador pode então se deslocar até o endereço indicado, realizar a leitura do código
do endereço e confirmar a quantidade e o EAN do item.
É possível selecionar uma posição vazia para alocação, não sendo obrigatório mover o
item para o endereço sugerido.
O processo de movimentação forçada de estoque proporciona flexibilidade operacional,
permitindo movimentar itens entre as posições de picking, mantendo sempre o controle
atualizado e a rastreabilidade completa de todas as movimentações.
Este processo garante maior eficiência na gestão de estoque, assegurando que o WCS tenha
controle total sobre os itens e permitindo ajustes conforme a demanda e necessidade
operacional.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 15.2. Execução da Tarefa de Recall (Tela Operacional)  
**Score:** — (semantico) | **ID:** 5c5ff25e90589368

A execução da tarefa de Recall é realizada pelo operador por meio do coletor Android, acessando
a tela operacional de Recall no WCS.
Fluxo de execução:
O operador realiza login no WCS e acessa a tela de Recall – Execução.
O sistema apresenta a tarefa criada, exibindo o SKU a ser recolhido, o lote (quando
aplicável) e a lista de posições onde os itens estão alocados.
O operador se desloca até as posições indicadas e realiza a leitura do endereço, a leitura
do container (caixa de retirada) e informa a quantidade retirada.
Caso existam mais itens na mesma posição, o sistema solicita a leitura de um novo
container.
O WCS valida a execução: não permite reutilizar um container já utilizado na mesma
tarefa, nem alocar itens de lotes diferentes no mesmo container.
Havendo mais posições com itens do mesmo SKU/lote, o operador repete o processo até
concluir todas as retiradas previstas na tarefa.
Ao final da retirada de cada container, o WCS consolida as informações da tarefa, registrando o
código do item, o lote (quando aplicável), o container e a quantidade retirada.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** 31572d0b80ea69e4

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 6 Autenticação – Login via SSO (Single Sign-On)  
**Score:** — (semantico) | **ID:** a614c17250d64070

O acesso à interface web do WCS (Velox) será realizado por meio de autenticação SSO
(Single Sign-On), integrado ao provedor de identidade corporativo da Stellantis (Ping
Federate), utilizando o protocolo OpenID Connect (OIDC).
Os usuários deverão possuir uma conta Microsoft vinculada à Stellantis, sendo aceitos os
domínios @stellantis.com e @external.stellantis.com.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 6.1 Fluxo de Autenticação  
**Score:** — (semantico) | **ID:** 550d13b961117ecd

O processo de login seguirá o protocolo OpenID Connect (OIDC), conforme padrão
homologado pela Stellantis. O fluxo ocorrerá da seguinte forma:
1. O usuário acessa a interface web do WCS (Velox);
2. O sistema redireciona o usuário para a tela de autenticação do Ping Federate;
3. O usuário realiza o login com suas credenciais corporativas Microsoft (a autenticação
multifator – MFA – é gerenciada pelo próprio Ping Federate);
4. O Ping Federate valida as credenciais e retorna um token de autenticação ao WCS;
5. O WCS valida o token recebido, identifica o usuário e libera o acesso conforme o perfil
de permissão previamente cadastrado no sistema.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 6.2 Perfis de Acesso e Cadastro de Usuários  
**Score:** — (semantico) | **ID:** afdaf752fb3daf99

O Ping Federate atua exclusivamente como camada de autenticação, fornecendo um perfil
básico de acesso à ferramenta. O gerenciamento de perfis, permissões e níveis de acesso
será realizado internamente no WCS (Velox).
Os usuários deverão ser cadastrados manualmente no WCS pela equipe responsável. Os
níveis de acesso e permissões são criados e configurados diretamente no Velox,
permitindo total flexibilidade na definição de perfis conforme a necessidade da operação.
OBS: Os perfis e permissões detalhados devem ser definidos em conjunto entre Invent e
Stellantis durante a fase de implementação. O workflow de solicitação de acesso dos usuários é
gerenciado pelo IdentityMe da Stellantis.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 6.3 Controle de Sessão  
**Score:** — (semantico) | **ID:** 80c5de6326cc8ee4

O sistema adotará as seguintes regras de sessão:
Duração máxima da sessão: 9 horas de atividade;
Sessão única por usuário: Cada usuário poderá manter apenas 1 sessão ativa
simultaneamente. Caso um novo login seja realizado, a sessão anterior será encerrada
automaticamente.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 6.4 Logs e Auditoria  
**Score:** — (semantico) | **ID:** 9f70a26816f8bfce

O WCS registrará logs de autenticação contendo as seguintes informações:
Data e hora do login/logout;
Identificação do usuário;
Registro de tentativas de login com falha e com sucesso;
Controle de sessão única (registro de encerramento de sessões duplicadas).

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 6.5 Ambiente de Rede e Segurança  
**Score:** — (semantico) | **ID:** 176dd93ba4b704c8

O acesso ao WCS será realizado pela rede interna (VPN/LAN), podendo ser estendido para
acesso via internet caso haja requerimento do Business.
A autenticação multifator (MFA) é gerenciada integralmente pelo Ping Federate da Stellantis,
não sendo necessária implementação adicional pelo WCS.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** 75009da87d5cd898

CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS SEM
PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** 5c9f5c25df7b9c84

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 12 Integrações  
**Score:** — (semantico) | **ID:** 9938fff1773c0129

VALIDAR APÓS OS PROCESSOS OPERACIONAIS

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** d05f071e9d63996e

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** FTP  
**Score:** — (semantico) | **ID:** 0db5b4e65c93bd9b

(área servidor c/ login+senha)

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** TABELA  
**Score:** — (semantico) | **ID:** 3b0dcad7360671af

(banco de dados compartilhado)

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 7.6.2. Execução da Coleta  
**Score:** — (semantico) | **ID:** 283cf3b9c6294f0a

O coletor Android exibe a lista de coleta com endereço, produto (SKU/DUN), e quantidade a
coletar para cada item da remessa. O processo segue o tripé de validação:
1. Leitura do endereço: O operador bipa o código do endereço físico (piso ou longarina) para
confirmar que está no local correto.
2. Informação da quantidade: O WCS exibe a quantidade total esperada. O operador pode
ajustar para baixo caso não encontre o saldo completo.
3. Leitura do DUN/EAN: O operador bipa o código DUN14 ou EAN da caixa fechada para
confirmar o produto coletado. Somente com as três validações concluídas a coleta é
registrada.
Após coletar todos os itens de um endereço, o operador avança para o próximo endereço indicado
e repete o processo até concluir todos os itens da remessa.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Processo de Picking Exceção  
**Score:** — (semantico) | **ID:** f17cef50f72d0a5e

O Picking Exceção será utilizado para itens que não se enquadram nos parâmetros da automação, mas que devem ser alocados manualmente no processo de Aloca Pallet. O fluxo operacional será semelhante ao processo de Full Case, mas com a diferença de que os itens não farão parte da automação e serão direcionados manualmente para a rampa ou alocação nos pallets.
Fluxo Operacional de Picking Exceção:
O operador realiza o login no WCS utilizando o coletor Android.
O operador seleciona a tela de Order Start Picking Exceção, onde escolhe o posto de impressão em que está fisicamente para retirar as etiquetas.
Após selecionar o posto de impressão, o operador escolhe a rua da qual ele irá fazer o Picking Exceção. O sistema exibirá a lista de tarefas de separação de acordo com a rua selecionada e os volumes disponíveis.
As tarefas de Picking Exceção serão segregadas por rampa do Sorter, permitindo que o operador saiba para qual rampa deve levar os itens após a coleta.
Início da tarefa:
O WCS determina automaticamente a quantidade de itens a coletar na leva, respeitando os parâmetros de:
peso máximo do pallet de coleta; e
cubagem máxima do pallet de coleta.
O peso e cubagem máxima será cadastrada em uma tela de parâmetros do WCS.
O WCS imprime as etiquetas referente aquela tarefa de separação, seguindo a lógica de impressão do processo de Full Case.
O operador realiza a separação e consolida os itens no pallet correspondente à Tarefa.
O coletor é direcionado para a tela de coleta, onde o operador deve se deslocar até o endereço especificado no coletor.
O operador realiza a leitura do endereço para iniciar a coleta do item.
O operador confirma a quantidade separada e realiza a leitura do código do item.
O operador se desloca para o próximo endereço e repete o processo até concluir todas as coletas.
Destinação a Rampa:
Após finalizar todas as coletas, o WCS informará em qual rampa do sorter os itens coletados deverão ser direcionados.
O comportamento do processo na rampa estará condicionado ao parâmetro de paletização por transportadora, conforme descrito a seguir:
Parâmetro de Paletização por Transportadora Ativo:
Os volumes coletados ficarão disponíveis na rampa para o operador responsável pelo processo de Aloca Pallet.
O operador deverá realizar a alocação manual de cada volume em sua respectiva posição de pallet.
Cada volume será associado à um RG de pallet, sendo obrigatória a confirmação da alocação no WCS.
O WCS somente considerará o volume como expedido após a confirmação da alocação no pallet.
As informações de vínculo entre volumes e RG de pallet serão integradas conforme o processo de Aloca Pallet.
Parâmetro de Paletização por Transportadora Inativo:
Não será necessário realizar o processo de Aloca Pallet.
O operador deverá realizar a leitura individual de cada volume no PRIX fixo instalado ao final da rampa, sinalizando a chegada física do volume na rampa.
A leitura no PRIX será utilizada pelo WCS para:
Confirmar a chegada do volume na rampa de destino;
Atualizar o status operacional e o dashboard do WCS.
Não haverá vínculo de volumes com RG de pallet nesse cenário.
Esse processo de Picking Exceção garante que itens que não se enquadram no fluxo automatizado sejam tratados manualmente de forma controlada, assegurando rastreabilidade, visibilidade operacional e aderência aos parâmetros definidos por transportadora.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Se a Transportadora Realiza Paletização  
**Score:** — (semantico) | **ID:** ad7c447583fbd285

Ao marcar “Sim”, o sistema habilita o processo de agrupamento:
Agrupamento por Transportador Rota
Cada rampa gera pallets separados por Transportadora + Rota.
O coletor orienta o operador a colocar cada volume no pallet correto.
O WCS registra a quantidade de volumes por pallet.
O WCS envia a integração de fechamento quando o pallet é concluído.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Validação na Rampa  
**Score:** — (semantico) | **ID:** 54624b31278238c3

Em cada rampa, haverá um leitor de código de barras que realizará o processo de Validação após o desvio do volume na rampa, conforme descrito a seguir:
Leitura do Volume: O leitor captura o código do volume presente na rampa.
Validação do WCS: O WCS verifica se o volume está alocado na rampa correta de acordo com o mapa de destinos.
Sinaleiro: O WCS envia uma instrução ao PLC para acender o sinaleiro:
Verde: O volume está na rampa correta.
Vermelho: O volume está na rampa incorreta.
Esse processo garante a validação final do desvio de cada volume, permitindo rápida identificação de inconsistências e auxiliando a operação a manter a precisão e rastreabilidade dos pedidos, porém não é obrigatória.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Alocação de Volumes no Pallet  
**Score:** — (semantico) | **ID:** 289fa021d21cd18e

Quando um volume chega à ponta da rampa, o operador realiza a leitura da etiqueta do volume 
Após isso, o WCS verifica se já existe um pallet ativo associado à mesma transportadora e rota daquele volume.
Se já existir pallet para aquela rota/transportadora:
O coletor exibirá a posição do pallet onde o volume deve ser alocado.
Se ainda não existir pallet para aquela rota/transportadora:
O coletor solicitará ao operador que informe uma posição física de pallet.
Após leitura dessa posição, ela passa a ser utilizada para todos os próximos volumes da mesma rota/transportadora.
Fluxo operacional do Aloca Pallet:
Coletar o volume na ponta da rampa.
Ler a etiqueta do volume gerada pelo velox.
O WCS indicará no coletor a posição do pallet.
O operador deposita o volume no pallet.
O operador realiza a leitura do código de barras da posição do pallet para confirmar a alocação.
Caso o operador informe uma posição diferente da indicada pelo sistema, o WCS apresentará mensagem de erro, orientando o operador a informar a posição correta.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** dce94950f21ce022

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** 80f451b719f5fa29

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Pallet Box  
**Score:** — (semantico) | **ID:** 586b8cf275a8ed62

Método de separação será gerido pelo WMS ordem de serviço (OS TIPO 17/23) e ocorrerá
quando um único pedido solicitar uma quantidade de produtos maior ou igual a quantidade de
um pallet, com isso o WMS realiza a separação do pallet direto para o box (doca), sem qualquer
intervenção do WCS.
Nota: Nesse processo, não há qualquer responsabilidade atribuída ao WCS.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Quebra de Pallet por Volume ou Peso no Full Case  
**Score:** — (semantico) | **ID:** 26a76ae2bb5bd13b

Durante o processo de separação Full Case, caso o lote gerado pelo WCS ultrapasse os limites
operacionais de volume ou peso previamente cadastrados, o sistema permitirá a quebra
automática da tarefa de separação, contemplando as seguintes possibilidades:

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** 60d13fbdee679ab1

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** FTP  
**Score:** — (semantico) | **ID:** 4a22a27755ec26b0

(área servidor c/ login+senha)

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** TABELA  
**Score:** — (semantico) | **ID:** b3973e525dcc7200

(banco de dados compartilhado)

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Protocolo: A aplicação WCS utiliza o protocolo HTTPS (Hypertext Transfer Protocol  
**Score:** — (semantico) | **ID:** 8a49c8953e856833

Secure) como padrão de comunicação para garantir a segurança na troca de dados.
•

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Autenticação: Não será exigida autenticação entre os sistemas, uma vez que a  
**Score:** — (semantico) | **ID:** 0d24908f9dc48230

comunicação ocorrerá dentro de uma arquitetura de rede local e controlada.
•

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** WCS → WMS (WMTOCO)  
**Score:** — (semantico) | **ID:** 85301298f4eaa9c1

Após o processo de separação, o WCS envia o retorno do pedido para o WMS, com as
quantidades efetivamente separadas e as quantidades faltantes (separação incompleta).

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Usuário e Senha)  
**Score:** — (semantico) | **ID:** 8192a83266d2dc25

A reimpressão de uma etiqueta após uma caixa já ter entrado na linha de produção e passado
por uma atividade de separação confirmada em uma estação requer um nível adicional de
controle para evitar falhas de rastreabilidade, duplicatas ou desvios de processo. Portanto, o
operador responsável deve usar um nome de usuário e senha autorizados. Esse mecanismo
garante que somente pessoal autorizado possa validar a reimpressão, mantendo a integridade
das informações do processo de produção e garantindo a conformidade com os padrões do
cliente.
Detalhes Técnicos:
• Rastreabilidade: Garante que cada caixa tenha uma única etiqueta válida e que qualquer
reimpressão seja registrada no sistema.
• Controle de Acesso: Impede que operadores não autorizados gerem etiquetas inadequadas.
• Registro de Auditoria: O sistema registra quem realizou a ação, quando ela foi realizada e
qual etiqueta foi reimpressa.
• Prevenção de Erros: Reduz o risco de embalagens com identificação duplicada ou incorreta.

---
**Origem:** [MARA IV] 2025 — `I25.9047 - Especificao de Software - Projeto_Mara IV.pdf`  
**Prioridade:** não  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** 884a4fe2b3e120a8

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** 65dd10c0630c1575

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** FTP  
**Score:** — (semantico) | **ID:** f5459bb9e2a0f114

(área servidor c/ login+senha)

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** TABELA  
**Score:** — (semantico) | **ID:** 2c0cbe2cc24eaa15

(banco de dados compartilhado)

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Etapas da ES  
**Score:** — (semantico) | **ID:** 7dd10df31c503fd6

Segue abaixo ilustração das etapas do processo de criação da Especificação de Software:

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Stakeholders  
**Score:** — (semantico) | **ID:** a0ec1113372a45d9

Participante | Função | Empresa
Giovanni Crestan | PMO - Project Management Office | Invent
Thomas Momesso | Analista de Negócios | Invent
Gustavo Torres | Analista de Negócios | Invent
Bruno Jorge | Responsável técnico WMS / Tottus | Tottus
David Larenas | Sponsor / Aprovador do Cliente | Tottus

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Possíveis Erros  
**Score:** — (semantico) | **ID:** c3eb818fff5df4a6

Status | Mensagem | Causa
403 | Autenticação básica é obrigatória. | Header Authorization ausente ou inválido
403 | Usuário ou senha inválidos. | Credenciais incorretas
400 | Erro ao processar a autenticação. | Erro interno do servidor

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Resumo do Fluxo  
**Score:** — (semantico) | **ID:** c4dc893357f98621

1. Autenticar: Envie POST /autenticacao com Basic Auth
2. Receber: Token na resposta JSON
3. Usar: Inclua Authorization: Bearer <token> nas próximas requisições
Importante: Guarde o token com segurança — ele expira automaticamente em 24h.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** f528bbecb491ecac

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 6c6058e22ebe4d7b

Para o correto funcionamento de todo o processo da automação a operação irá importar dados via excel para alimentar o WCS e ser realizado as validações e triagens necessárias.
Teremos 3 tipos de importações possíveis: picking map, Base de equipamento CLARO (todos os macAdress) e Nota fiscal.
Todas as informações de cada planilha importada como estrutura, tipo de dados, quais dados são relevantes serão explicitas abaixo.
Segue as integrações abaixo:

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** Triagem dos itens  
**Score:** — (semantico) | **ID:** f1a520624563b068

O pallet será recebido próximo à célula de trabalho, onde o operador deverá informar a nota fiscal e o destino de origem que dará início ao processo. Após a seleção da nota, não será permitido alterná-la até que seja totalmente conferida ou finalizada pela operação em função de falta de materiais. No final da conferência, o sistema WCS deve realizar automaticamente o comparativo entre os itens esperados na nota fiscal e os itens efetivamente conferidos ou triados, registrando também os itens não processados (corte).
O sistema WCS deve permitir para usuários cadastrados com permissão MASTER poder acessar notas fiscais que foram finalizadas e reabrir a conferência em caso de erro operacional na finalização da Nota, ou em caso de identificar itens excedentes.
Os produtos serão recebidos em caixas de papelão e caixas plásticas; estas últimas contêm apenas um item e são identificadas por um QR Code que reúne todos os MAC Address dos equipamentos pertencentes àquele volume. Ao ler esse QR Code, o sistema WCS deve considerar automaticamente como válidos todos os itens nele contidos e exibir as informações no PDV para validação do operador.
Em casos que não haja este código QrCode, será lido o Mac Adress de cada item do volume para validação do WCS.
No PDV deverão ser exibidos os MAC Address lidos juntamente com o respectivo SKU a que pertencem, permitindo a validação visual pelo operador. O botão de divergência deve funcionar de forma passiva no PDV — permanecendo visível, porém sem ação até ser acionado pelo operador. Somente quando acionado, deverá abrir um pop-up para que o operador informe a divergência identificada. Após o registro da divergência, o equipamento deverá ser direcionado automaticamente para a posição de anomalia parametrizada pela operação. Nos casos em que não houver QR Code, essa validação também será realizada de forma unitária.
Há produtos, como modens, que são chamados de "Kits", pois além de validar o MAC Address do equipamento, também será necessária a leitura do SimCard. O SimCard não será validado pelo WCS, mas deverá ser registrado no relatório de Notas Fiscais se o SimCard lido estava conforme o esperado, caso fosse diferente, qual seria o código, ou se não havia SimCard. O WCS deve disponibilizar uma maneira de registrar que o produto foi recebido sem o cartão. O WCS saberá se o produto necessita ou não dessa segunda leitura com base na planilha importada no início da operação.
Cada item que será realizado a triagem pode seguir por 3 caminhos distintos:

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** Listagem de Anomalias  
**Score:** — (semantico) | **ID:** 0dbe13eb769e7f77

Relatório que exibe todas as anomalias registradas no período selecionado, de forma individual por item. Cada linha representa um produto que passou pela triagem e foi alocado em uma posição de anomalia. Permite filtrar por número da nota fiscal e tipo de anomalia. Disponível nas visualizações Tabela, Gráfico e Resumo.
Campo | Tipo | Obs | Obrigatório
Nota Fiscal | String | Número identificador da nota fiscal associada ao item com anomalia. | Sim
Serial | String | Número serial do produto/dispositivo escaneado durante a triagem. | Sim
SKU | Inteiro | Código SKU do produto identificado na nota fiscal. | Sim
Produto | String | Descrição/nome do produto vinculado ao SKU. | Sim
Tipo | Enum | Tipo da anomalia registrada. Valores possíveis: ANOMALIA_TIPO_UM, ANOMALIA_TIPO_DOIS. | Sim
Descricao | String | Descrição detalhada da anomalia ocorrida (ex.: 'MAC Address incompatível', 'Item não encontrado na base'). | Sim
Operador | String | Login do operador responsável pela triagem do item. | Sim
Posicao | String | Endereço/posição de destino do item após a alocação de anomalia. | Sim
DataAlocacao | Data/Hora | Data e hora em que o item foi alocado na posição de anomalia (formato: dd/MM/yyyy HH:mm:ss). | Sim

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** SOFTWARE  
**Score:** — (semantico) | **ID:** 89c6f973cbfda19b

e os resultados de nossos clientes
CONFIDENCIAL © 2024, INVENT COMÉRCIO E
SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL
CONFIDENCIAL,
PROIBIDA
SUA
REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS
SEM PRÉVIA AUTORIZAÇÃO.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** 6.0 Triagem dos itens  
**Score:** — (semantico) | **ID:** 5abcc1204b88b9b4

O pallet será recebido próximo à célula de trabalho, onde o operador deverá informar a nota
fiscal e o destino de origem que dará início ao processo. Após a seleção da nota, não será
permitido alterná-la até que seja totalmente conferida ou finalizada pela operação em função
de falta de materiais. No final da conferência, o sistema WCS deve realizar automaticamente o
comparativo entre os itens esperados na nota fiscal e os itens efetivamente conferidos ou
triados, registrando também os itens não processados (corte).
O sistema WCS deve permitir para usuários cadastrados com permissão MASTER poder acessar
notas fiscais que foram finalizadas e reabrir a conferência em caso de erro operacional na
finalização da Nota, ou em caso de identificar itens excedentes.
Os produtos serão recebidos em caixas de papelão e caixas plásticas; estas últimas contêm
apenas um item e são identificadas por um QR Code que reúne todos os MAC Address dos
equipamentos pertencentes àquele volume. Ao ler esse QR Code, o sistema WCS deve
considerar automaticamente como válidos todos os itens nele contidos e exibir as informações
no PDV para validação do operador.
Em casos que não haja este código QrCode, será lido o Mac Adress de cada item do volume
para validação do WCS.
No PDV deverão ser exibidos os MAC Address lidos juntamente com o respectivo SKU a que
pertencem, permitindo a validação visual pelo operador. O botão de divergência deve funcionar
de forma passiva no PDV — permanecendo visível, porém sem ação até ser acionado pelo
operador. Somente quando acionado, deverá abrir um pop-up para que o operador informe a
divergência identificada. Após o registro da divergência, o equipamento deverá ser direcionado
automaticamente para a posição de anomalia parametrizada pela operação. Nos casos em que
não houver QR Code, essa validação também será realizada de forma unitária.
Há produtos, como modens, que são chamados de "Kits", pois além de validar o MAC Address
do equipamento, também será necessária a leitura do SimCard. O SimCard não será validado
pelo WCS, mas deverá ser registrado no relatório de Notas Fiscais se o SimCard lido estava
conforme o esperado, caso fosse diferente, qual seria o código, ou se não havia SimCard. O
WCS deve disponibilizar uma maneira de registrar que o produto foi recebido sem o cartão. O
WCS saberá se o produto necessita ou não dessa segunda leitura com base na planilha
importada no início da operação.
Cada item que será realizado a triagem pode seguir por 3 caminhos distintos:

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** Listagem de Anomalias  
**Score:** — (semantico) | **ID:** d95fb7ee4ea9988a

Relatório que exibe todas as anomalias registradas no período selecionado, de forma individual
por item. Cada linha representa um produto que passou pela triagem e foi alocado em uma
posição de anomalia. Permite filtrar por número da nota fiscal e tipo de anomalia. Disponível nas
visualizações Tabela, Gráfico e Resumo.
Nota Fiscal
String
Número identificador da nota fiscal
associada ao item com anomalia.
Serial
String
Número serial do produto/dispositivo
escaneado durante a triagem.
SKU
Código SKU do produto identificado na
nota fiscal.
Produto
String
Descrição/nome do produto vinculado ao
SKU.
Tipo da anomalia registrada. Valores
possíveis: ANOMALIA_TIPO_UM,
ANOMALIA_TIPO_DOIS.
Descricao
String
Descrição detalhada da anomalia ocorrida
(ex.: 'MAC Address incompatível', 'Item
não encontrado na base').
Operador
String
Login do operador responsável pela
triagem do item.
Posicao
String
Endereço/posição de destino do item após
a alocação de anomalia.
DataAlocacao
Data/Hora
Data e hora em que o item foi alocado na
posição de anomalia (formato: dd/MM/yyyy
HH:mm:ss).

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Prioridade:** não  
**Heading:** Operação de Expedição: Put-To-Pallet (PTP)  
**Score:** — (semantico) | **ID:** 9a35f515661084d9

O processo de consolidação de volumes será gerenciado pelo módulo Velox PTP. A operação substitui as listas de papel e a memória do operador por um sistema visual e validado sistemicamente.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Pallet Closing Triggers  
**Score:** — (semantico) | **ID:** fea27d88c5585c9f

The WCS manages the pallet closing automatically based on two criteria:
Physical Closing (Cubing): The WCS algorithm identifies that the volumetric sum (m³) or weight of the scanned items has reached the configured limit for that physical pallet. If there are leftover items from that order to be allocated, the next pallet position will be made available to finish that remaining order.
Logical Closing (End of Order): All items scheduled for that route/client have been scanned, with no remaining pending items.
