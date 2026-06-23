# ptm.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
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
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
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
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Gestão de Posto de Trabalho  
**Score:** — (semantico) | **ID:** 25d84749ed0778d1

Na tela de Postos de Trabalho, um usuário do WCS deve realizar os vínculos (atribuições) dos colaboradores ao posto de picking (cadastrados previamente), assim como também pode revogar essa atribuição, deixando o posto disponível para um novo vínculo.
Atualmente, o vínculo do posto de trabalho dinâmico contempla a definição da posição inicial e final do posto, o colaborador responsável pela execução das coletas e a impressora associada ao processo de separação.
Gestão do Posto
A estrutura física dos postos não será parametrizada diretamente no WCS, sendo qualquer alteração condicionada à abertura de chamado.
Os cadastros dos postos serão realizados pelo time Invent, com acordo do time MBRF. Toda e qualquer alteração nesses postos será realizada via chamado, sendo necessário o correto preenchimento da planilha (CSV) de mapeamento de posições.
O cadastro de impressoras será realizado no WCS Velox tela de impressoras, sendo necessário informar IP, porta, nome e local de utilização. Esse cadastro é de responsabilidade do time MBRF, e somente impressoras cadastradas e ativas estarão disponíveis para vínculo com postos de coleta.
A comunicação com as impressoras será realizada via TCP/IP, onde o WCS Velox enviará as informações das etiquetas em formato ZPL. A impressora será responsável pelo gerenciamento da fila de impressão, não havendo retorno de confirmação para o WCS nem responsabilidade sobre o processo físico de impressão. Todas as etiquetas relacionadas à coleta de um LED acionado serão enviadas de uma única vez para a impressora.
Regras de Operação
A alocação e atuação dos operadores nos postos de trabalho devem seguir as seguintes diretrizes operacionais:
• A substituição ou realocação de operadores poderá ser realizada quando não houver volumes de PVAR em separação, inclusive durante a execução da onda, sem necessidade de interrupção do processo.
• Um operador não poderá estar simultaneamente vinculado a postos pertencentes a câmaras distintas (ex: Resfriado e Congelado), garantindo conformidade com as restrições operacionais e físicas do ambiente.
• As atividades de coleta direcionadas ao operador devem respeitar o posto de trabalho ao qual ele está vinculado, assegurando que sejam atribuídas apenas tarefas relacionadas às posições sob sua responsabilidade.
• Não será permitido que um mesmo colaborador ou impressora esteja vinculado simultaneamente a mais de um posto de trabalho ativo. O WCS Velox deve validar essa regra e impedir novos vínculos em caso de conflito.
• Não será possível inativar um posto enquanto existirem coletas pendentes associadas às posições sob sua responsabilidade.
Log de Atividades e Impressão
Todas as atividades relacionadas à criação, edição ou exclusão de postos, colaboradores e impressoras devem ser registradas em log e disponibilizadas ao cliente por meio de relatórios no WCS.
No processo de reimpressão de etiquetas, o usuário deverá selecionar os volumes desejados, escolher a impressora e informar obrigatoriamente o motivo da reimpressão. Esse motivo será registrado em log. Apenas motivos ativos previamente cadastrados estarão disponíveis para seleção.
Ao consultar os detalhes de um volume, será apresentada a lista de impressões e reimpressões realizadas, ordenadas por data e hora de forma decrescente.
Contingência de Impressão
O processo de coleta com impressão contará com um modo de contingência parametrizável por posto. Nesse cenário, será possível definir uma impressora de contingência e associar múltiplos postos a ela, respeitando as seguintes regras:
Não será permitido cadastrar mais de uma contingência ativa para a mesma impressora.
Um mesmo posto não poderá estar vinculado a mais de uma contingência.
A criação da contingência será realizada por uma tela no WCS, onde o usuário deverá:
Selecionar a impressora que será utilizada como contingência;
Definir os postos que operarão em modo contingência;
Ativar a contingência para que ela passe a ser ativa no sistema
A configuração de contingência é realizada por impressora, podendo atender múltiplos postos simultaneamente.
Para os postos configurados em contingência, no momento da inicialização da onda, todas as etiquetas dos volumes serão impressas de uma única vez.
As impressões serão realizadas agrupadas por posto e seguirão uma ordenação baseada no nível e no número do posto, sendo ordenadas do menor para o maior.
Exemplo de ordenação de impressão:
Durante a operação, podem ocorrer falhas de periféricos (ex: impressora). Nesses casos, será possível ativar a contingência para o posto afetado, mesmo com a onda já em andamento.
Ao acionar a contingência durante a coleta:
As etiquetas que ainda não foram enviadas pelo WCS serão direcionadas automaticamente para a impressora de contingência.
As etiquetas que já foram enviadas para impressão, mas não foram impressas fisicamente, deverão ser reimpressas manualmente pelo usuário através da tela de Volumes PVAR, mediante seleção dos volumes impactados.

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Fechamento de PTM  
**Score:** — (semantico) | **ID:** 505dd7a01dbc8681

O fechamento do pallet pode ocorrer em três cenários:
Manual: O operador realiza a leitura do código de comando de fechamento da posição (ex: "FPP001"). O PTM ficará com a área preenchida e piscando no PDV, aguardando a leitura da etiqueta do pallet para associação. A etiqueta do pallet deve ter obrigatoriamente 6 (seis) dígitos.
Automático: Quando o último volume esperado do pedido é alocado, o fechamento ocorre automaticamente sem necessidade de ação do operador.
Forçado: Quando a cubagem ou peso do pallet atinge o limite pré-determinado pela operação, avaliado pelo próprio operador.
Em todos os cenários, ao fechar o pallet o sistema abre automaticamente uma nova posição para continuidade da operação.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Architecture and Hardware  
**Score:** — (semantico) | **ID:** 624edc06f6720115

Visual Interface (TV/Monitor): A large monitor strategically positioned in the shipping area, displaying the map of positions (pallets) and the fill status of each one.
Position Identification (QR Code): Each floor position (dock/pallet) will receive a unique identification via QR Code.
Operator Device: Data collector (RF) for reading volumes and confirming addresses.
Stages: There will be 3 defined Stages, each for a fragility matrix.
Safety Lock:
Velox will have a lock that forces the operator to start the task by the Stage order from the heaviest items to the lightest, having to completely finish one stage to be able to proceed to the next. The positions are only released for the next matrix when all orders for that position have been allocated, ensuring that all positions have the heaviest items allocated first so that the task for the next matrix is released.
PTP Screen Example:

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - PTM + Extrato Sorter - Copia.docx`  
**Heading:** Contexto do Problema  
**Score:** — (semantico) | **ID:** 823ad9d4562d2dc5

Atualmente, a funcionalidade de montagem/roteamento não permite definir regras de agrupamento de pedidos por PTM, o que limita a flexibilidade operacional em cenários onde é necessário consolidar múltiplos pedidos em uma mesma posição de montagem.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - PTM + Extrato Sorter - Copia.docx`  
**Heading:** Solução Proposta  
**Score:** — (semantico) | **ID:** f65613b6b0f1f4dd

Será incluído um novo parâmetro na funcionalidade Editar Template, dentro da tela de Roteamento/Montagem.
Novo parâmetro:
Agrupar pedidos por PTM (booleano: Sim/Não)
Quando habilitado:
Será disponibilizado um campo adicional:
Quantidade de pedidos por PTM (numérico inteiro)
Comportamento:
O sistema passará a agrupar múltiplos pedidos dentro de um mesmo PTM, respeitando a quantidade definida no parâmetro.
Cada PTM poderá conter exatamente a quantidade de pedidos configurada.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - PTM + Extrato Sorter - Copia.docx`  
**Heading:** Regras de Negócio  
**Score:** — (semantico) | **ID:** e7dc06168212dca5

O parâmetro agrupar pedidos por PTM será opcional e desabilitado por padrão.
Ao habilitar o agrupamento:
O campo Quantidade de pedidos por PTM torna-se obrigatório.
O valor deve ser maior que zero.
A alocação de pedidos nos PTMs seguirá a regra definida no template:
Exemplo: Se configurado 3 pedidos por PTM, a posição receberá até 3 pedidos.
Disponibilidade de PTM:
A liberação de novos pedidos para montagem estará condicionada à disponibilidade de PTMs livres.
Caso não existam PTMs disponíveis, novos pedidos não serão liberados para a operação.
Excedente de pedidos:
Quando houver mais pedidos do que PTMs disponíveis:
Os pedidos excedentes permanecerão em fila.
A fila seguirá a regra de ordenação FIFO (First In, First Out).
Assim que um PTM for liberado:
O próximo pedido da fila será automaticamente liberado para montagem.
Tela exemplo:

---
**Origem:** [I22.3322] ADITIVO — `I22.3322 - Aditivo Projeto Heart - Controle de Posições PTM.docx`  
**Heading:** Novas Funcionalidades  
**Score:** — (semantico) | **ID:** 0e883028ddf986d7

Será implantado um nova funcionalidade no sistema PTM (Put To Monitor), com o objetivo de melhorar o controle operacional e proporcionar maior autonomia.
A funcionalidade permitirá o gerenciamento das posições de PTM diretamente pela tela de Paletes, mediante acesso restrito por senha de supervisão.

---
**Origem:** [I22.3322] ADITIVO — `I22.3322 - Aditivo Projeto Heart - Controle de Posições PTM.docx`  
**Heading:** Gerenciamento de Posições de PTM  
**Score:** — (semantico) | **ID:** 301d1adaf4e52d37

Disponibilizar na tela “Posições Palete” a funcionalidade de criação e manutenção de endereços de PTM (Put To Monitor), permitindo maior autonomia operacional e redução de dependência técnica para ajustes estruturais.
Descrição Funcional
Será incluída na tela “Posições Palete” uma nova opção denominada:
“Gerenciar Posições Palete”
O acesso a esta funcionalidade será restrito mediante senha de supervisão.
Regras de Acesso
A funcionalidade somente poderá ser acessada mediante autenticação com senha de perfil supervisor.
Operadores comuns não terão acesso à criação, exclusão ou alteração de posições.
Comportamento da Funcionalidade
Ao selecionar a opção, será exibido um pop-up/modal de gerenciamento, contendo:
Listagem dos endereços de PTM existentes;
Opção de:
➝ Adicionar nova posição de PTM;
➝ Excluir posição de PTM;
➝ Bloquear posição existente.
Regras de Negócio
Somente poderão ser alteradas (editadas ou excluídas) posições que não estejam com status “Em Aberto”.
Caso a posição esteja vinculada a palete ativo ou com processo em andamento, o sistema deverá:
Bloquear a alteração;
Exibir mensagem informativa ao usuário.

---
**Origem:** [I22.3322] ADITIVO — `I22.3322 - Aditivo Projeto Heart - Impressão de Etiqueta de PTM.docx`  
**Heading:** Contexto Operacional  
**Score:** — (semantico) | **ID:** 02d503b8e4bffd08

No fluxo atual da operação, durante a execução da função “put to monitor”, o operador realiza a leitura dessa etiqueta para que o sistema identifique corretamente o pallet de destino dos volumes. Caso a etiqueta esteja danificada, desgastada ou com falha de impressão, não existe rotina disponível para emissão de segunda via.
Essa limitação pode impactar diretamente a continuidade da operação.

---
**Origem:** [I22.3322] ADITIVO — `I22.3322 - Aditivo Projeto Heart - Melhorias Tela de PTM.docx`  
**Heading:** Novas Funcionalidades  
**Score:** — (semantico) | **ID:** 3a4a1157dcc3a529

Será implantado uma nova funcionalidade no sistema PTM (Put To Monitor), com o objetivo de melhorar o controle operacional e proporcionar maior autonomia.
A funcionalidade consiste na inclusão de novos indicadores visuais na tela do PTM, exibida no momento da leitura das caixas para alocação no pallet, possibilitando maior visibilidade sobre volumes alocados e volumes confirmados no processo de picking.

---
**Origem:** [I22.3322] ADITIVO — `I22.3322 - Aditivo Projeto Heart - Melhorias Tela de PTM.docx`  
**Heading:** Inclusão de Novos Indicadores na Tela do PTM  
**Score:** — (semantico) | **ID:** b6571e62045c3aed

A tela no monitor (PTM) é apresentada quando o operador realiza o bip da caixa para alocação no palete.
Serão adicionadas quatro novas informações visuais para aumentar a rastreabilidade operacional e o controle de divergências.
Contador de Volumes Alocados / Volumes Esperados
Localização:
Canto inferior esquerdo da tela.
Funcionamento: Será exibido um contador no formato Volumes Alocados / Volumes Planejados
Exemplo prático:
Pedido com 10 volumes esperados.
Ao bipar a primeira caixa:
→ Exibir: 01    10
Ao bipar a segunda caixa:
→ Exibir: 02    10
E assim sucessivamente até completar 10    10.
Objetivo:
Permitir que o operador acompanhe em tempo real a evolução da montagem do pallet.

---
**Origem:** [I23.3801] ADITIVO — `I23.3801 - Aditivo Projeto Octopus SC - OP Múltiplas Rampas.docx`  
**Heading:** Solicitação – Operador com Múltiplas Rampas  
**Score:** — (semantico) | **ID:** 57deb188edc18005

A funcionalidade Operador com Múltiplas Rampas Ativas permitirá que, mediante necessidade operacional, o supervisor da operação possa designar um único operador produtivo para ser responsável por duas ou mais rampas., desde que respeitadas as regras de negócio definidas neste documento.
O sistema deverá ser capaz de:
Permitir múltiplos logins ativos do mesmo colaborador em rampas distintas mediante acionamento da flag na tela de usuários;
Permitir o registro de múltiplas sessões simultâneas do mesmo operador em rampas diferentes;
Garantir o funcionamento adequado das rampas mesmo quando um operador estiver vinculado a mais de uma simultaneamente.
Essa mudança elimina a limitação anterior de exclusividade por rampa e reflete melhor a realidade operacional do cliente.

---
**Origem:** [I17.112] 2021 — `I17.112 - ESPECIFICACAO DE SOFTWARE - PROJETO  DIAMANTE- Adicional PTL Larrus rev3.docx`  
**Heading:** Layout de configuração  
**Score:** — (semantico) | **ID:** 89f574cf6f0ac315

Para posições PTL atreladas serem atreladas aos pedidos da filial Larrus, sistema MFC deve disponibilizar uma nova aba, para visualização por PTL.
Essa configuração será por onda, da mesma forma que existe atualmente está disponível em homologação para o ecommerce.
Segue abaixo exemplo da aba para tratativa de posições PTL que irão atender os pedidos da filial Larrus:

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Operação atual  
**Score:** — (semantico) | **ID:** a120ba485b96a5c1

Atualmente, somente 1 (uma) posição PTL (Endereço do PTL 99001001) na rampa de número 1 (um) está configurado para desvio de todas as entregas do E-Comm, a configuração é fixa e não pode ser alterada pelo usuário.
Em comparação com a operação de franquias, atualmente existe uma etapa de fechamento do pallet para integrar para o Icorp, para pedidos relacionados a Objetivo a integração é automática na finalização da separação.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 0e252c91410b38d5

Para visualizar em tempo real as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência pressionado, erro em Inversor de frequência, etc..) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela INVENT) onde o mesmo permanecerá instalado em uma Estação de Supervisório, fornecido pelo cliente.
Abaixo segue especificação de hardware mínima para execução do Sistema de Supervisório INVENT:
Tabela 3 – Requisitos mínimos do desktop para Estação Supervisório.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 5f4debd808a024eb

Para visualizar em tempo real as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência pressionado, erro em Inversor de frequência, etc..) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela INVENT) onde o mesmo permanecerá instalado em uma Estação de Supervisório, fornecido pelo cliente.
Abaixo segue especificação de hardware mínima para execução do Sistema de Supervisório INVENT:
Tabela 3 – Requisitos mínimos do desktop para Estação Supervisório.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 0fb11fe1cd61e769

Para visualizar em tempo real as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência pressionado, erro em Inversor de frequência, etc..) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela INVENT) onde o mesmo permanecerá instalado em uma Estação de Supervisório, fornecido pelo cliente.
Abaixo segue especificação de hardware mínima para execução do Sistema de Supervisório INVENT:
Tabela 3 – Requisitos mínimos do desktop para Estação Supervisório.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 43ea00988d9e629c

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 171ad2695246e61e

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 641bd4d36eb6f7b6

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY - DPH.HIGIENE.LIMPEZA REV1.docx`  
**Heading:** Edição de Categorias  
**Score:** — (semantico) | **ID:** 3bcb2a9fdc9fa50f

As categorias existentes poderão ser modificadas para refletir novas informações ou mudanças nas categorias dos produtos. Esta função garante que as categorias permaneçam relevantes e precisas ao longo do tempo.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 51142520919967b3

As falhas do equipamento serão informadas através de um LED (IHM) no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** 12.2  Desktop Supervisório  
**Score:** — (semantico) | **ID:** aa8dab1c4b506201

Para realizar o monitoramento dos equipamentos de chão de fábrica, um sistema Supervisório será implantado.
Para visualizar em tempo real todas as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência acionado, erro em inversor de frequência etc.) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS  (licença fornecida pela Invent) onde o mesmo permanecerá instalado em uma estação de  Supervisório, fornecido pelo cliente.
Esse sistema deverá ser executado em um desktop exclusivo e recomenda-se uma tela de tamanho de 32 polegadas ou maior para facilitar a visualização das informações sobre a linha.
A tabela abaixo descreve seus requisitos mínimos de hardware e software:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE - Reab.docx`  
**Heading:** PTW – Put To Wall  
**Score:** — (semantico) | **ID:** 131515d9e6a29028

A estação de PTW terá 40 posições, cada posição terá um led para indicar visualmente o operador, onde deverá alocar o volume.
O PTW irá funcionar para alocar os volumes de pedidos que contenham mais de 1 caixa por pedido, por exemplo.
Quando um volume de um pedido que se encaixa nesse cenário chegar na estação de PTW, operador ao realizar a leitura do código de barras da caixa, uma posição do PTW deverá acender informando que o operador deve alocar esse volume nessa posição acesa na cor verde. Operador aloca o volume nessa posição, aperta o botão para confirmar que alocou o volume apagando o led e continua a operação dos demais pedidos.
Ao receber o último volume do pedido, a mesma posição em que os volumes foram alocados do mesmo pedido, acenderá na cor amarela, informando o operador que ele deve retirar os volumes daquela posição e induzir na esteira para que seja realizado o restante do processo com todas as caixas do mesmo pedido juntas.
(Sugestão de tela – PTW)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO (Reabastecimento - PTW - PTM).docx`  
**Heading:** PTW – Put To Wall  
**Score:** — (semantico) | **ID:** 04ba80dee7557448

A estação de PTW terá 40 posições, cada posição terá um led para indicar visualmente o operador, onde deverá alocar o volume.
O PTW irá funcionar para alocar os volumes de pedidos que contenham mais de 1 caixa por pedido, por exemplo.
Quando um volume de um pedido que se encaixa nesse cenário chegar na estação de PTW, operador ao realizar a leitura do código de barras da caixa, uma posição do PTW deverá acender informando que o operador deve alocar esse volume nessa posição acesa na cor verde. Operador aloca o volume nessa posição, aperta o botão para confirmar que alocou o volume apagando o led e continua a operação dos demais pedidos.
Ao receber o último volume do pedido, a mesma posição em que os volumes foram alocados do mesmo pedido, acenderá na cor amarela, informando o operador que ele deve retirar os volumes daquela posição e induzir na esteira para que seja realizado o restante do processo com todas as caixas do mesmo pedido juntas.
(Sugestão de tela – PTW)

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 3d036b99d2f04572

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 9d2bcf12413e9327

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** d4e3ddae8d3ba633

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** ec78c9ddfd121055

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 1b834ee2cd756a66

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 4c92f378c412c69e

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 23bf4e8437c4f800

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 7c16d5e19eceb507

As falhas do equipamento serão informadas através de um IHM no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 5138279bde8a7a25

As falhas do equipamento serão informadas através de um IHM no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 4178b9611c3d47f6

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Expedição  
**Score:** — (semantico) | **ID:** 48b30f4ec487e4d4

Nessa estação teremos 10 posições pallets por rua.
Operadores deverão abrir todas as posições pallet antes do início da operação, realizando a rotina de abertura pelo PTM. (Put to Monitor).
Operador retira o pallet montado na pré-expedição e movimenta até a rua correspondente.
Ao chegar na rua, operador realiza a leitura do volume, com isso o operador verifica na tela PTM (Put to Monitor) a posição pallet que deve alocar o volume bipado.
Neste momento a posição da respectiva rota devera acender indicando no PTM (Put to Monitor) o local (pallet) que deve alocar a caixa
Esse processo será repetido volume á volume até finalizar o pallet de pré-expedição.
Operador ao realizar a leitura de um volume que não corresponde aquela rua, o PTM (Put to Monitor) mostrará a informação que o volume não pertence a nenhuma posição daquela rua. Nesse caso, o operador deverá movimentar a caixa manualmente até a estação de rejeito, para que seja feita a tratativa.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Abertura  
**Score:** — (semantico) | **ID:** 46364afaf362031f

Uma vez que iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição PTM (Put to Monitor) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento a tela do PTM (Put to Monitor) indicará que o processo de abertura foi concluído.
Somente operadores cadastrados no sistema VELOX terão o poder de realizar abertura da posição pallet.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** df93f8dfb05ae6cd

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 419582c9eade4410

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** e0df4a7814cf9f98

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 660a49f2115ad778

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** d1488bc8cafffd5c

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Listagem de pallets  
**Score:** — (semantico) | **ID:** 4ef375daf7776a71

As informações dos pallets registrados no sistema podem ser visualizadas por essa funcionalidade.
O WCS Velox deve permitir os seguintes filtros para refinar a busca seletiva dos pallets, podendo filtrar por:
Período em que o pallet foi fabricado
Códigos do Pallets – é possível inserir mais de um código, separados por “;”
Códigos dos Produtos – é possível inserir mais de um código, separados por “;”
Estado do Pallet
Zona do Local
Localização
Centro
Prazo de vencimento
Lote
Essa funcionalidade ainda permite incluir ou não pallets vencidos ou finalizados.
A opção “Módulo de Contingência” com opções para cancelar a operação atual, atualizar a entrada e a saída do pallet no sistema.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de deposito padrão  
**Score:** — (semantico) | **ID:** a3bafef23d606d6e

A partir dessa funcionalidade é possivel visualizar e editar valores para os depósitos padrão cadastrados no sistema.
É possivel editar os valores já cadastrados na própria lista. Selecionando a opção “Salvar” o sistema registra as alterações realizadas.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Listagem de pallets  
**Score:** — (semantico) | **ID:** e56888faf25ffdd1

As informações dos pallets registrados no sistema podem ser visualizadas por essa funcionalidade.
O WCS Velox deve permitir os seguintes filtros para refinar a busca seletiva dos pallets, podendo filtrar por:
Período em que o pallet foi fabricado
Códigos do Pallets – é possível inserir mais de um código, separados por “;”
Códigos dos Produtos – é possível inserir mais de um código, separados por “;”
Estado do Pallet
Zona do Local
Localização
Centro
Prazo de vencimento
Lote
Essa funcionalidade ainda permite incluir ou não pallets vencidos ou finalizados.
A opção “Módulo de Contingência” com opções para cancelar a operação atual, atualizar a entrada e a saída do pallet no sistema.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de deposito padrão  
**Score:** — (semantico) | **ID:** 5a8e12a363e261c6

A partir dessa funcionalidade é possivel visualizar e editar valores para os depósitos padrão cadastrados no sistema.
É possivel editar os valores já cadastrados na própria lista. Selecionando a opção “Salvar” o sistema registra as alterações realizadas.

---
**Origem:** [I23.418] 2023 — `I21.103-Projeto Reisado - ESPECIFICACAO DE SOFTWARE.docx`  
**Heading:** Tela com log de Reimpressão  
**Score:** — (semantico) | **ID:** 3463c5c5344bae49

A partir da 2ª reimpressão (2ª via) deve ser bloqueada e notificado a seguinte mensagem: "Etiqueta já reimpressa anteriormente, favor solicitar reimpressão ao supervisor responsável"
Deve apresentar qual o usuário está solicitando, contemplando: horário, data, volume, pedido, status e motivo conforme a 2ª impressão apenas;
Observação: Deixar liberada apenas para o grupo de acesso "FULL CASE" e "SUPER USER";
Observação: O SUPER USER pode editar o log no qual já foi registrado pela tentativa do usuário na 2ª impressão;

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `Conferência Diamante - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Hinode  
**Score:** — (semantico) | **ID:** c410cba355390bb6

É de responsabilidade do time Hinode a disposição de todos os hardwares presentes na automação para os testes em ambientes de homologação assim também como os recursos operacionais que irão realizar os testes e as validações e as janelas de tempo predeterminadas entre Invent e Hinode pré-determinados para os testes no ambiente de homologação e no momento da virada in loco com o acompanhamento do time Invent.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** PTM (Put-To-Monitor)  
**Score:** — (semantico) | **ID:** f8952bdcde07050b

O PTM do sistema Velox, fará o controle dos pallets das saídas, operação poderá abrir até 16 (dezesseis) pallets na mesma saída, essa configuração deve ser feita previamente no sistema Velox, onde será determinado quais os parâmetros para os pallets, se será por rota, transportadora e filial etc.
Ao iniciar a operação, o operador da saída da saída do sorter deverá abrir as posições pallet (PTM) que deseja utilizar na operação atual, para que consiga mapear e alocar os volumes nas posições indicadas pelo monitor.
Com isso, operador ao receber o volume desviado na rampa, deverá realizar a leitura de código de barras (full case) ou QR Code (fracionados), o monitor do PTM indicará qual a posição pallet deverá alocar esse volume.
Operador aloca o volume no pallet indicado pelo PTM e realiza o mesmo processo com os próximos volumes recebidos na saída.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Controle das posições de picking  
**Score:** — (semantico) | **ID:** bb53ff775828f844

As posições serão controladas pelo WMS, onde o mesmo faz a gestão de endereços e posições, no envio de pedido WMS informa o produto a posição e quantidade que o Velox deve realizar a separação do produto.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** cbaa48e48f9f2148

As falhas do equipamento serão informadas através de um LED (IHM) no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Put To Monitor – PTM  
**Score:** — (nome-topico) | **ID:** abe690bd39828b2b

Os processos de PTM não sofreram alterações e irão seguir como informado no documento da primeira fase I22.2505 AUTOMATIZE – ESPECIFICAÇÃO DE SOFTWARE E HADRWARE-Ver.6.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Alocação no PTM  
**Score:** — (semantico) | **ID:** f37e20c76c27ce06

Para o mapa sorter teremos a possibilidade de inserir o pedido diretamente na posição PTM na tela de mapa sorter, onde será possível atrelar somente um pedido por posição PTM.
Ao inserir o pedido no PTM, o mesmo ficará com prioridade máxima para saída.
Ao finalizar a alocação de todos os volumes do mesmo pedido no pallet o Velox irá indicar o fechamento de pallet como mencionado no item Fechamento de PTM. Após o fechamento, o Velox tirará o pedido da posição no mapeamento permitindo uma nova alocação de um novo pedido.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Put to Monitor PTM  
**Score:** — (nome-topico) | **ID:** fa4eefc9854d5ca5

Após o desvio dos volumes/caixas nas suas respectivas rampas, temos o método de separação do conceito de Put To Monitor, onde com um conjunto de hardware (TV e scanner de mão) o operador informa qual volume está na ponta da rampa de saída através da leitura do código de barras do volume com scanner de mão, e o Velox ao receber a informação do volume avalia em sua base de dados a qual posição (pallet) do PTM está vinculada a transportadora que atende o pedido que está sendo tratado no momento, indicando em uma TV qual a posição do pallet que o volume pertence, essa informação de posição consiste em um sistema de cores onde o Velox ira indicar na tv qual é a posição contornando com a cor padrão daquela posição.
Marcações no chão com as cores padrões serão disponibilizadas pelo cliente para facilitar a identificação do time operacional.
Para o correto funcionamento dos PTMs são necessárias as seguintes rotinas:

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Abertura de PTM  
**Score:** — (semantico) | **ID:** 2f8e2985934c744d

O Velox realiza o vínculo de pedido a posição PTM de maneira automática conforme os volumes forem passando no portal do sorter, o Velox identifica qual será a transportadora que fará o transporte dos volumes verificando para qual rampa o volume deve ir e atrela o pedido a posição PTM, sendo assim, teremos um pedido com vários volumes em uma única posição de PTM.
Será condicionado o fator de liberação dos volumes para separação no Full Case e fracionado de acordo com as posições disponíveis nos PTM.
EX: Se em uma onda vier 10 (dez) pedidos para transportadora “Gala” e tiver somente 2 (duas) rampas destinadas a essa transportadora totalizando 8 (oito) posições PTM, o Velox permite a separação simultânea dos primeiros 8 (pedidos) que forem iniciados em suas áreas e quando algum dos PTM  das rampas destinadas a transportadora “Gala” for encerrado, Velox libera os próximos pedidos para serem impressos e separados.
Todas as 4 posições que serão indicadas pelas TVs terão uma cor fixa onda de acordo com a mesma cor a área demarcada para alocar o pallet fisicamente, para que o operador possa identificar com facilidade qual pallet fisicamente corresponde a qual posição PTM.
NOTA: O time do cliente deve definir antes da data de teste in loco as cores padrões de cada uma das 4 posições.
Etiquetas de posições PTM serão fixas e serão coladas na estrutura de suporte do PTM para melhor acessibilidade dos colaboradores quando precisarem fechar o pallet.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Fechamento de PTM  
**Score:** — (semantico) | **ID:** 15c2f0c983c05ce6

O fechamento do Pallet pode ocorrer em dois cenários distintos:
Altura do pallet pré-determinado pela operação Gala (Avaliado pelo próprio operador)
Alocação do último volume esperado do pedido (avaliado sistemicamente)
O operador deverá realizar a leitura do código do comando de fechamento da posição, por exemplo “FPP001”, para fechar o pallet conforme a necessidade. O sistema irá mostrar o PTM ficará com sua área preenchida e piscando, ficando no aguardo da leitura da etiqueta do pallet para associação do pallet. A etiqueta do pallet deve ter obrigatoriamente 6 Dígitos.
Caso o último volume daquele respectivo pedido for alocado, acontecerá de maneira automática (sem a necessidade da leitura do comando do fechamento) a mesma rotina descrita acima para o fechamento do pallet.
Ao fechar o pallet, a posição será liberada para o próximo pedido disponível.
Se aquele pedido houve corte ou foi cancelado, deverá ser informado no ultimo pallet do pedido para triagem da operação Gala.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Informações disponíveis no PTM  
**Score:** — (semantico) | **ID:** ddb3277c3d982ca5

As informações dispostas na tela de PTM serão visualizadas com facilidade pelo operador durante todo o processo de alocação dos volumes, as disposições de esboços de telas dispostos abaixo os estados (status) em que as posições PTM podem ficar durante todo o processo de alocação dos  volumes passado no sorter.
Segue esboços da tela:
PTM fechado  (Sem pallet atrelado)– Borda do quadrado ficará na cor cinza.
PTM abertos – Cada PTM terá uma cor específica de acordo com as marcações no chão feitas pelo time operacional do cliente.
PTM alocado automaticamente ou manualmente aguardando abertura de pallet – Borda do quadrado fica com a cor em evidência, porém as informações do quadrado não são preenchidas, ficam aguardando o operador.
PTM aguardando alocação – Todo o quadrado ficará na cor da borda do quadrado.
Nota: Quando todos os volumes do pedido forem alocados no pallet de maneira correta o Velox irá indicar no monitor a posição que finalizou o processo de alocação, o quadrado ficará todo preenchido com a cor da borda e o mesmo ficará piscando para chamar a atenção do operador, como mencionado no item de fechamento.
Existirá um parâmetro no Velox onde é possível habilitar e desabilitar a obrigatoriedade de fazer a leitura do código de pallet para confirmar a alocação do volume no pallet (PTM).
Descritivo sobre o fluxo do sorter (Descritivo – Fluxo Sorter) contém informações do conceito de PTL que é muito semelhante ao processo do PTM, segue em anexo junto deste descritivo somente para melhor entendimento do processo como um todo, não está contemplado a implementação desse conceito no projeto em questão.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 3e2a9ccfe62e1af1

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** cbc7f58d86f44020

As falhas do equipamento serão informadas através de um LED no painel elétrico. Neste caso não faz parte do escopo o fornecimento de uma tela de supervisão de falhas da automação.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Put To Monitor  
**Score:** — (nome-topico) | **ID:** c5297184822c0d17

Após o desvio dos volumes/caixas nas suas respectivas rampas, temos o método de separação do conceito de Put To Monitor, onde com um conjunto de hardware (TV e scanner de mão) o operador informa qual volume está na ponta da rampa de saída através da leitura do código de barras do volume com scanner de mão, e o WCS ao receber a informação do volume avalia em sua base de dados se já possui um volume da mesma loja e “tipo_volume”, indicando em uma TV qual a posição do pallet e loja que o volume pertence.
A divisão de pallets será feita por volumes do “tipo_volume” fracionadoproc e fullcase, e outros pallets do “tipo_volume” fracionados.
Caso ainda não tenha nenhum pallet que pertença àquela loja/tipo_volume o monitor irá exibir que o volume precisa ser vinculado em alguma posição e o operador irá realizar a leitura da posição que efetivará a alocação daquele volume. Após esta etapa, o sistema irá considerar que sempre que receber algum volume da respectiva loja e mesmo tipo_volume deve ser direcionado para esta posição.
Nesta etapa, caso o volume for de característica fullcase e/ou fracionadoproc o operador deverá ler a etiqueta do DUN-14 ou caixa e a do pedido para o sistema informar erro em casos de o pedido não está associado aquela caixa.
O operador só será permitido alocar qualquer volume quando estiver realizado o Login na rampa.
O crachá dos operadores que estarão localizados nas saídas das rampas deve conter obrigatoriamente 8 dígitos.
O operador pega o volume na rampa, realiza a leitura do código de barras onde o WCS indicará a posição do produto e loja, até o operador realizar a leitura do código da posição do pallet que deve estar fisicamente visível, assim confirmando que o operador foi até o pallet e alocou a caixa no mesmo.
Caso o usuário informe o número da posição divergente (errado) ao número da posição esperado, o WCS informará na TV que a posição não é o destino correto do volume, assim o operador deve indicar a posição correta.
Para atender a necessidade da operação Promofarma, não pode conter itens fullcase e fracionados no mesmo pallet, sendo assim teremos dois pallets para a mesma loja segregando por tipo do item (fracionadoproc/fullcase e fracionado).
