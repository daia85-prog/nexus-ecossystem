# reabastecimento.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 74e2f1702eeb40b9

Reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** worktype: "PICK"  
**Score:** — (semantico) | **ID:** 58b87e46fee588b4

O operador deverá retirar a quantidade solicitada da posição de estoque do WCS, em resposta a uma movimentação solicitada via ERP D365 F&O (GERENCIADOR DE ESTOQUES), que pode ser por devolução, transferência de saldo, segregação para ajustes, segregação de item ou lote para análise de qualidade etc.
Durante o processo de devolução para o estoque do ERP D365 F&O (GERENCIADOR DE ESTOQUES), o WCS deverá criar automaticamente uma tarefa contendo as seguintes informações:
Item (SKU)
Lote
Quantidade a ser devolvida
O operador será responsável por selecionar o endereço (posição física) onde a retirada do produto do estoque do WCS será efetivada. Para isso, o sistema deverá exibir uma lista de posições válidas (endereços) onde o item/lote informado está presente em estoque.
Regras do processo:
A validação da ação se dará exclusivamente pela leitura da posição escolhida pelo operador. Lembrando que o WCS deve validar se o endereço lido possui aquele item/lote.
O sistema deve exibir os endereços que contém esse item para auxiliar o operador na busca do endereço.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Reabastecimento do Transfer para Posição de Picking  
**Score:** — (semantico) | **ID:** 4c12554de891b56d

O processo de reabastecimento do Transfer para as posições de picking (Flowrack, Picking Fundo, Polícia Federal, 344/Controlados e Geladeira) tem como objetivo abastecer diretamente os endereços de separação com base na necessidade operacional. Para isso, o sistema conta com uma funcionalidade que identifica as posições de picking com saldo abaixo do mínimo configurado ou com demanda futura prevista, como volumes em processo de separação.
A partir dessa análise, o sistema gera automaticamente tarefas de reabastecimento, que consistem em registros operacionais contendo as seguintes informações: SKU a ser movimentado, quantidade a ser reabastecida, posição de origem (Transfer) e posição de destino (picking). Cada tarefa é criada considerando a disponibilidade de estoque nas posições do Transfer e priorizando a alocação eficiente nos endereços de separação.
Essas tarefas ficam disponíveis para execução pelos operadores, que, por meio do coletor, recebem as instruções de coleta no Transfer, realizam a movimentação física dos itens e finalizam o processo com a leitura da posição de destino, garantindo rastreabilidade completa da operação.
Fluxo do Processo:
O operador realiza a leitura do item (SKU) a ser reabastecido.
O sistema WCS exibe em tela:
Quantidade a ser movimentada;
Identificação do item;
Lote;
Endereço sugerido para alocação, com base nas regras de sugestão de alocação.
Observação: O Sistema deve ter a opção para visualizar tarefas abertas e fechadas.
O operador pode:
Confirmar o endereço sugerido, realizando a leitura da posição apresentada;
Selecionar manualmente outro endereço.
Validações Necessárias caso o operador selecione outro endereço, o WCS deverá:
Validar se o novo endereço é elegível para receber o item conforme as regras operacionais do cliente;
Exibir um popup de confirmação, exigindo que o operador confirme a alocação manualmente, assegurando rastreabilidade e conformidade.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Reabastecimento do Buffer para Posição de Picking  
**Score:** — (semantico) | **ID:** 1ec3c9a532e35f20

Este processo movimenta itens do Buffer (Pulmão) para as posições finais de picking, conforme necessidade operacional. A funcionalidade responsável por criar as tarefas de reabastecimento atua monitorando continuamente os níveis de estoque nas posições de picking e identificando necessidades com base em dois principais critérios: saldo abaixo do mínimo operacional e previsão de consumo a partir de ondas de separação já liberadas.
Quando uma dessas condições é atendida, o sistema avalia a disponibilidade de produtos no Buffer e, se houver saldo suficiente, gera automaticamente uma tarefa de reabastecimento. Essa tarefa contém informações como o código do item (SKU), a quantidade a ser movimentada, a posição de origem no Buffer e a posição de destino no endereço de picking.
A geração da tarefa pode ser disparada de forma automática, com base em regras configuradas no sistema, ou de forma manual, por meio de uma interface onde o operador ou gestor pode solicitar o reabastecimento de posições específicas. Todas as tarefas geradas são organizadas em uma fila e ficam disponíveis para execução pelos operadores logados nos postos responsáveis pela atividade.
Durante a execução, o operador utiliza coletor para iniciar a tarefa, realiza a coleta na posição de origem (Buffer), transporta o item até o endereço de destino e conclui a operação com a leitura da posição final, garantindo o controle e rastreabilidade completa da movimentação.
Fluxo do Processo:
O WCS apresenta uma tela com todos os reabastecimentos pendentes entre buffer e posições de picking.
As informações exibidas incluem:
Item (SKU);
Lote;
Quantidade;
Endereço de destino.
O operador realiza, na sequência:
Leitura da posição de origem (Buffer);
Leitura do item (SKU);
Leitura da posição de destino (Picking).
Esse processo deve respeitar regras de compatibilidade entre posições, tipos de picking e características do produto.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Reabastecimento do Transfer para o Buffer  
**Score:** — (semantico) | **ID:** 8d44b64b336ae957

Quando a posição de picking estiver cheia, mas houver saldo disponível no Transfer, o WCS deverá permitir o reabastecimento para o Buffer (Pulmão), como forma de antecipar a reposição futura.
Regras:
O sistema deverá alocar o estoque no buffer mais próximo da posição de picking correspondente.
A movimentação deve seguir as regras logísticas da operação, respeitando:
Compatibilidade de tipo de produto;
Lote;

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 789877cecc42af01

O sistema WCS informa o WMS referente a separação, com isso o WMS administra essas informações para tratativas de reabastecimento.
Todo o processo de reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** e26eef12447db232

O processo de Reabastecimento tem como objetivo abastecer as posições de Picking Fracionado com produtos provenientes de caixas fechadas (full case) coletadas durante o Order Start Full Case (tópico 7.7).
Com a unificação da coleta no Order Start Full Case, os volumes de reabastecimento são coletados juntamente com os volumes de picking full case e direcionados pelo sorter até a área específica de reabastecimento. A partir desse ponto, o operador executa as etapas descritas a seguir para concluir o reabastecimento das posições de picking fracionado.
O fluxo de reabastecimento é composto por três etapas sequenciais: Decanting, Abastecimento do Picking Cart e Execução do Picking Cart de Reabastecimento.
Navegação e Estrutura de Telas no Coletor
O WCS disponibilizará no coletor Android uma estrutura de telas organizada para o processo de reabastecimento, permitindo que o operador navegue entre as funções de forma simples e sem necessidade de trocar de módulo. A estrutura é composta por duas telas principais:
Tela 1 – Preparação (Decanting / Abastecimento do Picking Cart):
Ao acessar o módulo de Reabastecimento, o operador é direcionado para a tela de preparação, que apresenta duas opções de ação:
Decanting — para realizar o processo de transferência dos itens da caixa full case para bins.
Abastecimento do Picking Cart — para alocar as bins já preparadas nas posições do carrinho.
O operador seleciona a função desejada e executa o processo correspondente. Após concluir a operação, o operador pode utilizar o botão “Voltar” para retornar à tela de preparação e alternar entre Decanting e Abastecimento do Picking Cart conforme a necessidade operacional, sem necessidade de sair do módulo ou trocar de tela.
Essa flexibilidade permite que o operador realize múltiplos decantings seguidos e depois abasteça o picking cart, ou alterne entre as duas funções livremente conforme o ritmo da operação.
Tela 2 – Execução do Picking Cart de Reabastecimento:
A execução do picking cart é realizada em uma tela separada e dedicada, acessível a partir do menu principal do módulo de Reabastecimento.
Essa separação garante que o operador responsável pela execução do reabastecimento nos endereços de Picking Fracionado tenha uma tela focada exclusivamente no fluxo de deslocamento e alocação, sem interferência das funções de preparação.
Resumo de Telas: Tela de Preparação = Decanting + Abastecimento do Picking Cart (navegação via botão “Voltar” entre as duas funções). Tela de Execução = Picking Cart de Reabastecimento (tela dedicada e independente).

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Reabastecimento Estoque Velox  
**Score:** — (semantico) | **ID:** 00591d74dd032154

Este processo movimenta itens do Transfer para as posições finais de picking, conforme necessidade operacional. A funcionalidade responsável por criar as tarefas de reabastecimento atua monitorando continuamente os níveis de estoque nas posições de picking e identificando necessidades com base em dois principais critérios: saldo abaixo do mínimo operacional e previsão de consumo a partir de ondas de separação já liberadas.
Quando uma dessas condições é atendida, o sistema avalia a disponibilidade de produtos no Transfer.
A geração da tarefa pode ser disparada de forma automática, com base em regras configuradas no sistema, ou de forma manual, preventivo ou por meio de uma interface onde o operador ou gestor pode solicitar o reabastecimento de itens ou posições específicas. Todas as tarefas geradas são organizadas em uma fila e ficam disponíveis para execução pelos operadores logados nos postos responsáveis pela atividade.
Durante a execução, o operador utiliza coletor para iniciar a tarefa, realiza a coleta na posição de origem, transporta o item até o endereço de destino e conclui a operação com a leitura da posição de destino, garantindo o controle e rastreabilidade completa da movimentação.
Este tipo de reabastecimento é de responsabilidade do WCS que será feito via coletor android.
Reabastecimento Manual preventivo:
O operador deverá selecionar a rua (para operações de Picking Cart ou Fullcase) ou o nível de separação (para operações em Flowrack). Após a seleção, o operador informará a porcentagem mínima de estoque desejada para monitoramento.
Com base nessa parametrização, o WCS deverá:
Monitorar continuamente o nível de estoque das posições associadas, identificando aquelas que tiverem um valor abaixo da porcentagem mínima configurada.
Gerar automaticamente as tarefas de reabastecimento para cada posição que necessitar de reposição, garantindo que o endereço seja restabelecido ao nível máximo permitido.
Respeitar as regras de segregação de estoque, considerando que:
As duas empresas compartilham a mesma área física, porém o estoque é segregado logicamente, devendo ser reabastecido sempre com produtos da mesma empresa.
O WCS não poderá sugerir ou aceitar reabastecimento de empresas diferentes para uma mesma posição, mesmo que o SKU seja igual.
Impedir qualquer mistura de lotes dentro da posição de picking ou flowrack:
Caso a posição esteja ocupada com um lote específico, o reabastecimento deverá utilizar o mesmo lote.
Se não encontrar o mesmo lote a posição deve ser desconsiderada para este reabastecimento
O WCS não deve permitir o abastecimento parcial que resulte em múltiplos lotes na mesma posição.
Fluxo do Processo:
O WCS apresenta uma tela com todos os reabastecimentos pendentes entre posições de origem e posições de destino.
As informações exibidas incluem:
Item (codInterno);
Quantidade(qtd);
Endereço de destino(endColeta).
Caso a origem for de um item com endereço vinculado
O operador realiza, na sequência:
Leitura da posição de origem;
Leitura do item (codInterno);
Leitura da posição de destino).
Confirma quantidade alocada

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Reabastecimento Estoque Velox  
**Score:** — (semantico) | **ID:** c0ba6e5b54b200ed

Este processo movimenta itens do Transfer para as posições finais de picking, conforme necessidade operacional. A funcionalidade responsável por criar as tarefas de reabastecimento atua monitorando continuamente os níveis de estoque nas posições de picking e identificando necessidades com base em dois principais critérios: saldo abaixo do mínimo operacional e previsão de consumo a partir de ondas de separação já liberadas.
Quando uma dessas condições é atendida, o sistema avalia a disponibilidade de produtos no Transfer.
A geração da tarefa pode ser disparada de forma automática, com base em regras configuradas no sistema, ou de forma manual, preventivo ou por meio de uma interface onde o operador ou gestor pode solicitar o reabastecimento de itens ou posições específicas. Todas as tarefas geradas são organizadas em uma fila e ficam disponíveis para execução pelos operadores logados nos postos responsáveis pela atividade.
Durante a execução, o operador utiliza coletor para iniciar a tarefa, realiza a coleta na posição de origem, transporta o item até o endereço de destino e conclui a operação com a leitura da posição de destino, garantindo o controle e rastreabilidade completa da movimentação.
Este tipo de reabastecimento é de responsabilidade do WCS que será feito via coletor android.
Reabastecimento Manual preventivo:
O operador deverá selecionar a rua (para operações de Picking Cart ou Fullcase) ou o nível de separação (para operações em Flowrack). Após a seleção, o operador informará a porcentagem mínima de estoque desejada para monitoramento.
Com base nessa parametrização, o WCS deverá:
Monitorar continuamente o nível de estoque das posições associadas, identificando aquelas que tiverem um valor abaixo da porcentagem mínima configurada.
Gerar automaticamente as tarefas de reabastecimento para cada posição que necessitar de reposição, garantindo que o endereço seja restabelecido ao nível máximo permitido.
Respeitar as regras de segregação de estoque, considerando que:
As duas empresas compartilham a mesma área física, porém o estoque é segregado logicamente, devendo ser reabastecido sempre com produtos da mesma empresa.
O WCS não poderá sugerir ou aceitar reabastecimento de empresas diferentes para uma mesma posição, mesmo que o SKU seja igual.
Impedir qualquer mistura de lotes dentro da posição de picking ou flowrack:
Caso a posição esteja ocupada com um lote específico, o reabastecimento deverá utilizar o mesmo lote.
Se não encontrar o mesmo lote a posição deve ser desconsiderada para este reabastecimento
O WCS não deve permitir o abastecimento parcial que resulte em múltiplos lotes na mesma posição.
Fluxo do Processo:
O WCS apresenta uma tela com todos os reabastecimentos pendentes entre posições de origem e posições de destino.
As informações exibidas incluem:
Item (codInterno);
Quantidade(qtd);
Endereço de destino(endColeta).
Caso a origem for de um item com endereço vinculado
O operador realiza, na sequência:
Leitura da posição de origem;
Leitura do item (codInterno);
Leitura da posição de destino).
Confirma quantidade alocada

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Reabastecimento Estoque Velox  
**Score:** — (semantico) | **ID:** 8d7f77a32da8521f

Este processo movimenta itens do Transfer para as posições finais de picking, conforme necessidade operacional. A funcionalidade responsável por criar as tarefas de reabastecimento atua monitorando continuamente os níveis de estoque nas posições de picking e identificando necessidades com base em dois principais critérios: saldo abaixo do mínimo operacional e previsão de consumo a partir de ondas de separação já liberadas.
Quando uma dessas condições é atendida, o sistema avalia a disponibilidade de produtos no Transfer.
A geração da tarefa pode ser disparada de forma automática, com base em regras configuradas no sistema, ou de forma manual, preventivo ou por meio de uma interface onde o operador ou gestor pode solicitar o reabastecimento de itens ou posições específicas. Todas as tarefas geradas são organizadas em uma fila e ficam disponíveis para execução pelos operadores logados nos postos responsáveis pela atividade.
Durante a execução, o operador utiliza coletor para iniciar a tarefa, realiza a coleta na posição de origem, transporta o item até o endereço de destino e conclui a operação com a leitura da posição de destino, garantindo o controle e rastreabilidade completa da movimentação.
Este tipo de reabastecimento é de responsabilidade do WCS que será feito via coletor android.
Reabastecimento Manual preventivo:
O operador deverá selecionar a rua (para operações de Picking Cart ou Fullcase) ou o nível de separação (para operações em Flowrack). Após a seleção, o operador informará a porcentagem mínima de estoque desejada para monitoramento.
Com base nessa parametrização, o WCS deverá:
Monitorar continuamente o nível de estoque das posições associadas, identificando aquelas que tiverem um valor abaixo da porcentagem mínima configurada.
Gerar automaticamente as tarefas de reabastecimento para cada posição que necessitar de reposição, garantindo que o endereço seja restabelecido ao nível máximo permitido.
Respeitar as regras de segregação de estoque, considerando que:
As duas empresas compartilham a mesma área física, porém o estoque é segregado logicamente, devendo ser reabastecido sempre com produtos da mesma empresa.
O WCS não poderá sugerir ou aceitar reabastecimento de empresas diferentes para uma mesma posição, mesmo que o SKU seja igual.
Impedir qualquer mistura de lotes dentro da posição de picking ou flowrack:
Caso a posição esteja ocupada com um lote específico, o reabastecimento deverá utilizar o mesmo lote.
Se não encontrar o mesmo lote a posição deve ser desconsiderada para este reabastecimento
O WCS não deve permitir o abastecimento parcial que resulte em múltiplos lotes na mesma posição.
Fluxo do Processo:
O WCS apresenta uma tela com todos os reabastecimentos pendentes entre posições de origem e posições de destino.
As informações exibidas incluem:
Item (codInterno);
Quantidade(qtd);
Endereço de destino(endColeta).
Caso a origem for de um item com endereço vinculado
O operador realiza, na sequência:
Leitura da posição de origem;
Leitura do item (codInterno);
Leitura da posição de destino).
Confirma quantidade alocada

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Reabastecimento – Estoque Velox  
**Score:** — (semantico) | **ID:** 42dbf6e430836708

O processo de reabastecimento no WCS Velox tem como objetivo garantir que as posições de picking mantenham níveis de estoque adequados para atender à demanda operacional, evitando interrupções nas atividades de separação.
O reabastecimento pode ocorrer da seguinte forma:
Transfer → Picking
A gestão e execução deste processo são de responsabilidade do WCS, utilizando coletores disponibilizados pelo cliente.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Gatilhos para Criação da Tarefa de Reabastecimento  
**Score:** — (semantico) | **ID:** 813be6dd9e46f2c4

A geração de tarefas de reabastecimento pode ocorrer de duas formas: automática ou manual.
Automática:
O WCS monitora continuamente os níveis de estoque e cria tarefas de reabastecimento de forma automática quando um dos critérios abaixo for atendido:
Saldo abaixo do mínimo operacional: Quando a posição de destino atinge ou fica abaixo do estoque mínimo parametrizado no sistema.
Manual:
Além do disparo automático, o WCS oferece uma tela dedicada para criação manual de tarefas de reabastecimento. Essa funcionalidade é utilizada principalmente para demandas pontuais ou emergenciais, como:
Solicitação de reabastecimento de um SKU específico, independentemente dos parâmetros de estoque mínimo.
Antecipação de reabastecimentos por decisão operacional.
Fluxo da Criação Manual:
O operador acessa a funcionalidade de Reabastecimento no coletor.
O operador realiza a leitura da caixa do item (ILPN).
O sistema:
Identifica o SKU associado à ILPN
Exibe a quantidade total disponível na ILPN lida
O operador informa ou seleciona a quantidade de unidades da ILPN que será utilizada no reabastecimento.
Para confirmar a movimentação, o operador realiza a leitura do endereço de picking onde os itens serão abastecidos.
O WCS valida as informações e:
Registra a movimentação no sistema
Atualiza os saldos de estoque
Finaliza o processo de reabastecimento
Após a conclusão, o operador fica automaticamente liberado para iniciar um novo reabastecimento.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Fluxo de Reabastecimento  
**Score:** — (semantico) | **ID:** 9bbfc8b9aebc2330

Execução do Reabastecimento (Transfer → Picking)
O operador executa o reabastecimento seguindo o fluxo:
Leitura da posição de origem (Transfer).
Leitura da caixa (ILPN) que será movimentada.
Leitura da posição de destino (Picking).

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** de1e75c33722b622

O processo de reabastecimento tem como objetivo garantir a disponibilidade contínua de produtos nas posições de picking, com intensão de assegurar uma operação de separação sem interrupções por falta de estoque nas posições de coleta.
O gerenciamento de estoque como as regras de materiais por posição, ranges de percentuais de vida (shelf life), dias de diferença nas datas de fabricação e a lógica de seleção da melhor posição de retirada (FEFO e validação de lote) são de responsabilidade exclusiva do SAP o WCS apenas registra e envia informações.
O WCS Velox é responsável pelas solicitações de abastecimentos de paletes por demanda, sendo responsável pela verificação de estoque no momento da preparação de onda e início a coleta, porém ele não faz validações de espaços livres nas posições de coleta na área de picking, essa responsabilidade é do SAP.
Para os processes de reabastecimento o WCS empenhará os seguintes papeis:
Verificação de estoque de coleta.
Avaliação de saldo de estoque em trânsito (OTs pendentes).
Solicitação de abastecimento por demanda (Onda).
Recebimento de OT pendentes e confirmadas.
Gerenciamento de priorização de reabastecimentos.
Indicadores de indução de paletes do BK25.
Gerenciamento de filas de movimentações no BK25 e Transelevador.
Envio de integrações TOCO de confirmação de transportes (OTs).

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Premissas  
**Score:** — (semantico) | **ID:** 965a80192b3af103

Para o correto funcionamento do processo de reabastecimento, devem ser consideradas as seguintes premissas:
O controle de estoque final é de responsabilidade do SAP. O WCS cuida apenas no estoque interno sistêmico. A correção de divergência é responsabilidade do SAP.
A definição da melhor posição de retirada do palete, bem como a validação de qual palete deve ser utilizado para cada necessidade, é de responsabilidade exclusiva do SAP.
O WCS deve solicitar o reabastecimento informando os dados necessários para atendimento da demanda como código do produto, prioridade, quantidade de caixas, range de data de fabricação aceitável (shelf de e shelf até), unidade de medidas (sempre caixas) e identificador único (ID).
Posições de destinos sempre são escolhidas pelo SAP.
As posições atendidas pelo transelevador devem estar previamente cadastradas no WCS como posições do tipo Picking ou Buffer.
O processo de reabastecimento poderá ser acionado tanto por necessidade identificada pelo WCS com base em ondas quanto por ordens enviadas diretamente pelo SAP para abastecimento por capacidade.
No TORD de reabastecimento deverá existir um código identificador único para permitir o rastreamento da solicitação ao longo de todo o processo.
Caso exista mais de uma necessidade de um mesmo sku e  range de datas de fabricação aceitáveis (Shelf de e até) para mais de uma remessa, o WCS deverá consolidar a quantidade de caixas necessárias para atender a demanda da onda e enviar uma única solicitação ao SAP. Caso o range de data de fabricação for diferente de uma necessidade anterior, mas o sku for equivalente, mesmo que por 1 dia, o WCS deverá enviar essa solicitação ao SAP separada da solicitação anterior gerando uma nova necessidade com ID único.
Para os paletes válidos, o processo de reabastecimento no transelevador deverá trabalhar com dupla confirmação via ZWMTOCO confirmando a primeira etapa e WMTOCO na segunda.
Reabastecimento do porta-palete para a posição de picking não automatizadas utilizam o método confirmação simples via ZWMTOCO.
Reabastecimento do buffer para posição de picking automatizadas utilizam o método de confirmação em uma etapa, sendo confirmado pelo WCS com envio do WMTOCO.
Quando houver um cancelamento de OT por parte do SAP, para uma necessidade gerada pelo WCS que está pendente, o WCS nunca fará uma segunda solicitação para a mesma necessidade, sendo assim o WMS deve gerar uma nova OT com o mesmo ID para atender a necessidade cancelada.
Para todos os CATO recebidos do SAP onde a OT está com status pendente no WCS ele deve retornar um cato imediatamente, confirmando o estorno/cancelamento da OT.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Origens do Palete  
**Score:** — (semantico) | **ID:** fef74d39c4fcc93b

Independentemente do cenário de reabastecimento (capacidade ou demanda), o palete pode vir de duas origens (AC ou Buffer). A decisão de qual origem será utilizada é sempre do SAP, que avalia disponibilidade, FEFO e regras de shelf life.
Armazém Convencional (AC): O operador de empilhadeira retira o palete do armazém convencional e o coloca na linha ou na área de stage in (Paredão) ou diretamente no porta-palete na posição de picking.
Buffer do Transelevador (Níveis 4 e 5): O palete já está dentro do transelevador. O transelevador move o palete internamente do buffer para a posição de picking.
Essa distinção de origem é o que define se a movimentação seguirá pelo fluxo do transelevador (automatizado, com dupla confirmação ou simples em caso de abastecimento do buffer para o picking) ou pelo fluxo convencional (manual, com confirmação simples). Ambos os fluxos são descritos a seguir para cada cenário de reabastecimento.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Solicitação de Demanda (ZABAST)  
**Score:** — (semantico) | **ID:** 7d964035eaa379a7

O ZABAST é o IDOC utilizado pelo WCS para solicitar reabastecimento ao SAP. Diferente do TORD que carrega uma OT completa com palete, origem e destino definidos o ZABAST é uma solicitação de necessidade: o WCS informa ao SAP que precisa de um material em determinada quantidade e shelf life, e o SAP é responsável por encontrar o palete adequado e responder com um TORD de execução.
Estrutura do IDOC de Solicitação de Demanda
Velox > SAP (ZABAST)
Utilização dos dados (Velox):

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Reclassificação de Prioridade  
**Score:** — (semantico) | **ID:** 2066f0d7bf627141

O processo deverá prever a reclassificação de prioridade quando houver reaproveitamento ou urgência de uma movimentação já existente. Caso o WCS identifique que um palete originalmente vinculado a uma OT de reabastecimento por capacidade pode atender também uma necessidade de reabastecimento por demanda, esse palete deverá ter sua prioridade alterada, passando a receber tratamento prioritário para suprir a onda que está por vir, ou nos casos de inicialização da onda onde a necessidade da OT existente passa a ser urgente, passando a ter uma das maiores prioridades de movimentação.
Essa alteração de prioridade tem como objetivo evitar a geração desnecessária de novas solicitações, aproveitando movimentações já existentes para atendimento mais rápido da demanda operacional.
Estrutura do IDOC de Alteração de Prioridade de Abastecimento
VELOX > SAP (ZPRIO)
Utilização dos dados (Velox):

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Reabastecimento de Flowrack  
**Score:** — (semantico) | **ID:** 230c7202c50f5667

O reabastecimento de posições de FlowRack segue uma lógica diferente dos demais tipos de OT. Não há solicitação prévia por parte do WCS, o SAP envia a OT diretamente com confirmação já inclusa, ou seja, a OT chega ao WCS como já confirmada.
O WCS identifica que se trata de uma OT de FlowRack por meio de duas informações presentes na OT:
UD com valor zerado: O campo de Unidade de Depósito vem com o valor 00000000000000000000, indicando que não há palete físico vinculado à movimentação (o FlowRack opera com caixas individuais, não com paletes, o WCS não irá salvar o número do palete recebido em sua base).
Depósito de FlowRack: O campo NLPLA no IDOC TORD identifica o depósito do FlowRack.
Quando o WCS recebe uma OT com essa combinação (UD zerada + depósito de FlowRack), ele a processa como confirmada, atualiza o saldo da posição de destino conforme os dados recebidos, sem aguardar execução física, confirmação adicional ou possibilidade de cancelamento.
Esse fluxo existe porque o reabastecimento do FlowRack é controlado pelo SAP e executado operacionalmente fora do controle do WCS. O papel do WCS nesse cenário é apenas manter seu saldo de estoque atualizado com base na informação que o SAP envia.
Estrutura do IDOC de Abastecimento Flowrack
SAP > VELOX

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Reabastecimento por Capacidade  
**Score:** — (semantico) | **ID:** 831db7ff5209c8b3

O reabastecimento por capacidade é uma funcionalidade que ocorrem de forma cronológica seguindo um intervalo de tempo padrão onde sempre que essa funcionalidade é executada ocorre uma avaliação no estoque das posições de picking ou buffer com o objetivo de manter as posições sempre cheias, levando em consideração a capacidade de paletes de cada posição sendo premissa o abastecimento por palete, ou seja, um abastecimento só ocorre quando cabe pelo menos 1 palete na posição.
A criação de OT para atender o reabastecimento por capacidade só ocorre quando o SAP identifica que existe uma posição vazia ou com possibilidade de receber 1 palete, após localizar um palete correspondente com os parâmetros da posição (Sku, Range de data de fabricação e diferença de dias de fabricação) o SAP decide preenchê-la com intuito de minimizar ou evitar a necessidade de reabastecimento por necessidade de separação.
Com a geração da OT o SAP envia ao WCS um IDOC TORD que contêm todas as informações necessárias para o gerenciamento dessa movimentação de palete, com isso o WCS registra os dados da OT e mantem o seu status como pendente, aguardando compra e movimentação desse material por parte do SAP.
Após envio da OT ao WCS são possíveis 3 cenários:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Reabastecimento por Demanda  
**Score:** — (semantico) | **ID:** cfd8902b70b8b0ff

O reabastecimento por demanda é uma funcionalidade que ocorrem por meio do acionamento de um gatilho, após o processo de criação de onda ao seleciona a opção de preparação de onda o WCS inicia uma verificação de estoque (Varredura) de todas as necessidades para o atendimento completo da onda, quando o saldo disponível nas sequência 1 das posições de coleta e nas OTs pendentes no momento não atende toda necessidade é gerada a solicitação de reabastecimento por demanda, quando o WCS envia a integração ZABAST ao SAP  [ZABAST]
A solicitação desse abastecimento visa atender por completo a necessidade da onda com suas remessas.
O WCS gera um identificador único e envia ao SAP com as informações de Sku, prioridade, quantidade de caixas e range de data de fabricação aceitável.
A criação de OT para atender o reabastecimento por demanda só ocorre quando o SAP identifica um palete dentro dos parâmetros de aceitação para atender a necessidade (Sku, range de data de fabricação, todos os lotes do palete atendem a necessidade e existe uma posição vazia ou com possibilidade de receber o palete), após a aprovação de todas as validações o SAP gera a OT e envia ao WCS com intuito de atender a necessidade de reabastecimento por necessidade de separação.
Com a geração da OT o SAP envia ao WCS um IDOC TORD que contêm todas as informações necessárias para o gerenciamento dessa movimentação de palete, com isso o WCS registra os dados da OT e mantem o seu status como pendente, aguardando compra e movimentação desse material por parte do SAP.
Após envio da OT ao WCS são possíveis 3 cenários:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Dashboard de Reabastecimento  
**Score:** — (semantico) | **ID:** 9955c93ecd26843e

Tabela de dados:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Verificar reabastecimento  
**Score:** — (semantico) | **ID:** 9a36fd00c7234ec0

Ao clicar na opção de verificação de reabastecimento o WCS vai realizar a verificação do estoque atual. Essa verificação segue as seguintes premissas:
Considerar saldo disponível (não reservado)
Posição desbloqueada
Deposito (LOGT) igual a 88 ou deposito 16
Sequência do palete igual a 1 [Gerenciamento de sequência de paletes]
Todos os lotes dentro do palete atende a necessidade de shelf de e até
Tipo de posição picking ou flowrack
Considerar saldo de Ots pendentes com posição de destino do tipo picking ou flowrack
Após realizar a verificação o WCS retorna um relatório na tela mostrando por transportes a quantidade de caixas que são necessárias reabastecer para atender totalmente a necessidade das remessas dentro desses transportes, sendo as informações segregadas por temperatura e total, nesse mesmo relatório será apresentado o percentual de atendimento de cada transporte com base na situação atual do estoque.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Preparação da Onda  
**Score:** — (semantico) | **ID:** 5a2c884cefa77b5b

A funcionalidade “Preparar a Onda” permite que o operador antecipe validações e possíveis necessidades de reabastecimento antes do início efetivo da separação, sem iniciar a execução da onda.
Ao acionar essa opção, o WCS realiza uma análise completa do estoque atual, considerando tanto o estoque físico disponível nas posições de picking quanto as OTs pendentes. Com base nessas informações, o sistema executa uma verificação de disponibilidade para identificar se o saldo atual é suficiente para atender integralmente a demanda da onda. [Verificação de reabastecimento]
Essa ação tem como objetivo garantir que, antes do start, a operação já tenha visibilidade clara sobre a capacidade de atendimento, permitindo atuar de forma preventiva e reduzir impactos durante a execução.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Tratativa de Disponibilidade e Geração de Reabastecimento  
**Score:** — (semantico) | **ID:** f6474e2c4693f94e

Caso a análise de disponibilidade identifique que o saldo existente disponível (considerando saldos não reservados das posições de picking + OTs pendentes) não é suficiente para atender a demanda da onda, o WCS irá gerar automaticamente solicitações de reabastecimento por demanda ZABAST [Reabastecimento por Demanda].
Nessa solicitação, o WCS enviará ao SAP as informações necessárias para atendimento, contemplando obrigatoriamente:
SKU
Quantidade necessária
Shelf life requerido
Identificador único da necessidade
Prioridade
A partir desses dados, o SAP será responsável por definir a melhor origem de abastecimento buffer ou AC e retornar um IDOC do tipo TORD [TORD] para seguir com fluxo de reabastecimento definido [Reabastecimento por Demanda].
Essa tratativa garante que, ao iniciar a onda, os itens já estejam em processo de movimentação ou disponíveis, reduzindo o tempo de espera e aumentando a eficiência da operação.
Após o retorno do SAP com a OT criada para atender a necessidade enviada o WCS irá priorizá-la de acordo com os parâmetros de priorização [Classificação de prioridade].

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Inclusão em ondas criadas  
**Score:** — (semantico) | **ID:** fa340b9c619be84d

Ao realizar a inclusão de transporte em uma onda com status criada o WCS somente atribui esse novo transporte a onda selecionada sem necessidade de verificação de estoque ou abastecimento.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Start de Onda  
**Score:** — (semantico) | **ID:** b509857bb94e185f

O start da onda é a ação que dá início efetivo ao processo de separação. Ao acionar o start, o WCS realiza uma reavaliação da demanda com base no estoque disponível nas posições de picking e estoque em movimentação, eleva a prioridade de todas as OTs de reabastecimento [Reclassificação de Prioridade] vinculadas àquela onda e gera a lista de coleta que será executada pelos separadores.
A partir do start, O WCS ainda aceitará as integrações de remessa para remessas pertencentes ao transporte da onda iniciada e atualizará somente o número da placa, transportador e tipo de veículo, os demais dados serão ignorados.
Caso o WCS receba uma nova integração de remessa de uma remessa nova (inexistente em sua base de dados ou remessa que foi canelada no passado) e ela pertença a um transporte da onda já iniciada, a integração será negada e o WCS retornará o Bad Request ao SAP.
No momento do start da onda, o WCS deverá validar se existem materiais com cadastro incompleto (ex.: ausência de peso) [Mestre de Materiais]. Caso sejam identificados itens nessa condição, o sistema deverá exibir uma mensagem de alerta ao operador, informando a existência desses materiais e listando-os para conferência.
O operador poderá, então, optar por não iniciar a onda e realizar os ajustes necessários no cadastro, ou prosseguir com a execução assumindo o risco operacional.
Devido a necessidade de separação dos materiais do tipo de peso PVAR será aplicada algumas validações que poder não permitir o start da onda, essas validações verificam o mínimo necessário para poder prosseguir com o processo de coleta.
O WCS irá realizar as seguintes validações:
Caso o operador confirme o início da onda, a coleta desses materiais ocorrerá normalmente. No entanto, ao passarem pelo portal do sorter, os volumes correspondentes aos itens com cadastro incompleto serão automaticamente direcionados para o rejeito.
Estrutura do IDOC de Envio de Onda
Velox > SAP
Utilização dos dados (Velox):

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** e0ff2699c30f0e60

O processo de reabastecimento é de responsabilidade exclusiva do WMS. O WCS se limita ao envio das informações de separação (incluindo cortes/shortpicking) para que o WMS avalie e determine as ações necessárias de reposição nas posições de picking.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 9867d941daf60d4f

WCS → WMS (WMSUMO)
O WCS poderá enviar ao WMS uma solicitação de reabastecimento para posições de picking. Essa ação será realizada pelo operador por meio de um botão disponível no tablet do posto.
E1LSUMX Move storage unit IDoc segment

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** c939639dd900f013

O sistema WCS disponibilizará um botão para Solicitação de Reabastecimento. Ao acionar o botão, o operador deverá informar a posição de picking que necessita de reabastecimento. Após a confirmação, o WCS enviará ao WMS uma solicitação contendo os dados do local informado, para que o WMS crie uma tarefa de reabastecimento para a posição informada.

OBS: O WCS não tem controle de qual item está vinculado a cada posição, portanto só iremos sinalizar a posição que necessita de reabastecimento.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Área de Full Case e Reabastecimento (WMS/Híbrido)  
**Score:** — (semantico) | **ID:** 244ee88cddab21e0

Área onde ocorrem processos mistos de responsabilidade WMS e Invent:
Fullcase Picking by Light (PBL): 20 posições de pallet no solo controladas pela Invent (WCS) para itens de altíssimo giro (Curva AA).
Picking Manual/Cart (Museu): Corredores de separação localizados no museu (área externa à automação, a nível chão), com picking carts controlados inteiramente pelo WCS para coleta de itens de baixo giro. O fluxo de separação segue o conceito consolidado: o operador realiza picking de múltiplos pedidos simultaneamente e transporta os itens coletados ao Put to Wall (PTW) para consolidação por pedido antes da indução na automação.
Esteira Expressa de Full Case (Túnel): Linha expressa que passa por dentro da estrutura porta-pallet (altura aprox. 1.80m/1.90m), transportando os volumes fechados que descem do mezanino. É exclusiva para saída de volumes full case e não possui ponto de inserção/indução de produtos — as induções de caixas (full case da área dedicada e caixas plásticas do PTW/picking cart) ocorrem na esteira de Full Case do térreo, não nesta.
Módulos PMG no Térreo (WCS): 11 módulos G + 1 módulo M (150 posições). Localizados na área de porta-paletes 'duplos' (sem corredor de picking dedicado), atendendo itens de Full Case Curva C. Esta área fica fora do fluxo principal da esteira de automação, e seu reabastecimento é executado diretamente pelo WMS via paleteira.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Gestão de Estoque e Reabastecimento  
**Score:** — (semantico) | **ID:** 843535e26bebb2f5

A eficiência do sistema de separação em túnel depende diretamente da disponibilidade de produtos nas posições de Picking. O WCS Velox atua ativamente na monitorização dos saldos e na geração de demandas de reposição para o WMS Spark.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Gatilhos de Reabastecimento  
**Score:** — (semantico) | **ID:** e154bffb0f8853c3

O WCS dispara solicitações ao WMS (INT-003) baseadas em dois cenários distintos:

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Reabastecimento por Lotação  
**Score:** — (semantico) | **ID:** 17f77358e83de882

Visa manter as posições cheias antes que ocorra a ruptura.
Gatilho: O sistema verifica periodicamente se Saldo Atual <= Ponto de Reposição (Mínimo).
Cálculo: Qtd Solicitar = Capacidade Máxima do Bin - Saldo Atual.
Regra: O sistema só solicita se a funcionalidade estiver ativa e couber pelo menos uma unidade de abastecimento completa (Caixa ou Master), evitando quebra de volumes no pulmão. Cada caixa de reabastecimento contém sempre um único SKU.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Reabastecimento por Necessidade  
**Score:** — (semantico) | **ID:** 4f27db4f9e367a87

Acionado quando uma onda de pedidos é importada e não há saldo suficiente.
Gatilho: Demanda da Onda > Saldo Disponível.
Ação: Gera uma solicitação como prioridade máxima.
Bloqueio: Os pedidos dependentes ficam retidos no status "Aguardando Abastecimento" e não são liberados para a esteira até que o ciclo de reposição seja concluído.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Reabastecimento Preventivo  
**Score:** — (semantico) | **ID:** 23280812d6a8ce2d

Diferente dos modelos anteriores onde o WCS "puxa" a mercadoria, este fluxo trata as situações em que o WMS Spark toma a iniciativa de enviar produtos para as posições de picking sem que o WCS tenha disparado uma solicitação (INT-03).
Gatilho: Decisão manual do supervisor do WMS ou rotinas automáticas de limpeza de pulmão do WMS.
Ação Sistêmica: O WMS envia diretamente a integração de Resposta de Reabastecimento (INT-04) informando que um volume está a caminho.
Regra do Campo NULL: Como este reabastecimento não nasceu de uma solicitação do WCS, não existe um identificador prévio (INT-03). O WMS deve enviar a INT-04 com o campo id_reabastecimento como null (ou com o prefixo 'PREV' seguido de um código único). O WCS reconhecerá o volume como uma carga espontânea.
Comportamento do WCS: * Ao receber o LPN com ID de reabastecimento null, o WCS Velox cria um registro de entrada "não solicitado".

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Fluxo Operacional de Reabastecimento (Ciclo da Rampa 1)  
**Score:** — (semantico) | **ID:** 9e57113425c2ee95

O fluxo físico de abastecimento no Navepark possui uma particularidade: a caixa de reposição transita pelo Sorter e pela linha principal como se fosse um pedido, garantindo entrega ergonômica na frente do operador.
Passo 1: Separação WMS e Indução Sorter
O WMS recebe a solicitação e gera a missão de separação no Pulmão.
O operador do WMS separa a caixa (Full Case ou Fracionado) contendo sempre um único SKU por caixa de reabastecimento — seja caixa fechada ou parcial —, etiqueta com um LPN rastreável e a induz na linha que leva ao Sorter.
Passo 2: Classificação na Rampa 1 (Buffer de Entrada)
O scanner do Sorter lê a etiqueta da caixa de reposição.
O WCS identifica que aquele LPN é uma reposição (vínculo feito na INT-004) e a desvia obrigatoriamente para a Rampa 1.
PTL 3: Um operador dedicado na Rampa 1 coleta a caixa e aguarda o momento de indução.
Passo 3: Reindução no Order Start
O operador da Rampa 1 leva a caixa até o Order Start (localizado ao lado).
A caixa é induzida na esteira principal, agora com destino lógico definido para a Zona de Picking que solicitou o produto (ex: Mezanino Posto 1).
Passo 4: Abastecimento na Zona
A caixa navega pela esteira e é desviada automaticamente para a zona de destino (ex: Posto 05).
Sinalização: Ao chegar a vez dela no posto, o display/PBL da posição de destino pisca em uma cor distinta, nesse caso foi definido o Amarelo indicando "Entrada de Material".
Execução: O operador do picking retira a caixa da esteira, abre a embalagem e abastece o Flow Rack.
Confirmação: O operador pressiona o botão do PBL para confirmar.
Finalização: O WCS envia a confirmação para o WMS (INT-005), atualiza o saldo para "Disponível" e libera as ondas que estavam travadas.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Rampa 1: Retorno para Reabastecimento (Fluxo Interno)  
**Score:** — (semantico) | **ID:** e54817da69a82f83

Conforme definido em projeto, a primeira saída do Sorter é dedicada exclusivamente ao fluxo interno.
Critério: Se o volume foi identificado como "Reposição" (vindo do WMS/Pulmão para abastecer o Picking).
Ação: O Sorter desvia a caixa para a Rampa 1 que por sua vez será alocado na posição 03.
Operação: Um operador coleta a caixa e a reinduz no Order Start (vide Capítulo 4 e 5), fechando o ciclo de abastecimento.
Obs: As demais posições serão destinadas para expedição.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 801901be99ad604e

O reabastecimento é controlado pelo WMS Spark (missão de reposição, decisão de quando e o que repor). O WCS não gerencia estoque neste projeto. Porém, a operação física de reabastecimento transita pela automação controlada pelo WCS.
Integração de Reabastecimento (WMS Spark → WCS):
O WMS Spark envia ao WCS a integração de reabastecimento contendo o número da etiqueta da caixa de reposição e a posição de destino (endereço do FlowRack a ser abastecido). Com essas informações o WCS controla o desvio automático da caixa na esteira até a estação correta.
Fluxo Operacional:
A caixa de reposição, etiquetada pelo WMS Spark, é induzida no Order Start de reabastecimento.
O operador realiza a leitura da etiqueta da caixa.
O WCS identifica a posição de destino conforme integração recebida do WMS Spark.
A caixa navega pela esteira e o WCS desvia automaticamente para a estação de destino.
O PBL pisca em cor de reabastecimento (laranja) sinalizando ao operador.
O operador abastece o FlowRack, lê o endereço de destino + EAN do produto e confirma.
O WCS finaliza a tarefa e envia confirmação ao WMS Spark.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** ab6fa3b2a1c360a8

O Order Start Reabastecimento tem como objetivo coletar caixas fechadas que serão utilizadas posteriormente para abastecer as posições de Picking Fracionado. O processo operacional segue o mesmo fluxo do Order Start Full Case tradicional, garantindo consistência na coleta.
Fluxo Operacional:
Escolha do Posto de Impressão:
O operador seleciona o posto de impressão onde irá retirar as etiquetas para identificar corretamente os volumes a serem coletados.
Seleção da Rua de Separação:
O operador define a rua de início da coleta, seguindo a configuração do layout do armazém.
Seleção do Número de Etiquetas:
O operador informa a quantidade de volumes completos que serão coletados, permitindo que o sistema registre corretamente cada volume.
Impressão das Etiquetas:
As etiquetas são impressas antes do início da coleta, garantindo a rastreabilidade de cada volume e que todos os itens coletados estejam devidamente identificados no sistema.
Coleta dos Volumes:
O operador realiza a coleta dos volumes seguindo o mesmo fluxo do Full Case: leitura do endereço para validar a coleta. Caso não haja produtos suficientes em algum endereço, o operador registra a situação, permitindo que o WCS considere o volume parcialmente coletado.
Destinação do Volume ao Reabastecimento:
Após a coleta, o operador induz o volume na esteira e o WCS direciona cada volume para uma área específica de reabastecimento, mantendo a rastreabilidade e a organização dos volumes para posterior utilização nas posições de Picking Fracionado.
Disponibilização e Integração:
O WCS envia a integração informando que o volume está disponível na área de reabastecimento, permitindo que os operadores realizem o abastecimento das posições de Picking Fracionado conforme planejado.
Hardware Utilizado:
Coletor Android, garantindo eficiência na leitura do código de endereços durante todo o processo.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza - Corte de SKUs bloqueados.docx`  
**Heading:** Contexto do Problema  
**Score:** — (semantico) | **ID:** fc248c3acd73dff9

Atualmente, o sistema adota uma lógica na qual missões que possuem SKU’s sem saldo disponível em determinada posição permanecem bloqueadas até que o reabastecimento seja efetuado. Esse comportamento, embora garanta a integridade do processo de separação, gera impactos operacionais relevantes em cenários onde o cliente não deseja ou não pode realizar o abastecimento imediato.
Na prática, o cliente relatou situações em que um SKU se encontra em estado crítico, sem saldo disponível, mas ainda assim existe a necessidade de liberar a missão para que os demais itens possam seguir no fluxo. No modelo atual, a única alternativa é realizar o abastecimento desse item para que a missão seja desbloqueada, o que nem sempre é viável dentro da operação.
Diante disso, surge a necessidade de uma abordagem mais flexível, permitindo que o sistema desconsidere esses itens indisponíveis de forma controlada, cortando os da missão para que o restante do processo siga normalmente. Essa ação deve ser tratada como um corte lógico do item dentro da missão, sem interferir nas demais estruturas operacionais.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 1983eb6e1a5de075

O Order Start Reabastecimento tem como objetivo coletar caixas fechadas que serão utilizadas posteriormente para abastecer as posições de Picking Fracionado. O processo operacional segue o mesmo fluxo do Order Start Full Case tradicional, garantindo consistência na coleta.
Fluxo Operacional:
Escolha do Posto de Impressão:
O operador seleciona o posto de impressão onde irá retirar as etiquetas para identificar corretamente os volumes a serem coletados.
Seleção da Rua de Separação:
O operador define a rua de início da coleta, seguindo a configuração do layout do armazém.
Seleção do Número de Etiquetas:
O operador informa a quantidade de volumes completos que serão coletados, permitindo que o sistema registre corretamente cada volume.
Impressão das Etiquetas:
As etiquetas são impressas antes do início da coleta, garantindo a rastreabilidade de cada volume e que todos os itens coletados estejam devidamente identificados no sistema.
Coleta dos Volumes:
O operador realiza a coleta dos volumes seguindo o mesmo fluxo do Full Case: leitura do endereço para validar a coleta. Caso não haja produtos suficientes em algum endereço, o operador registra a situação, permitindo que o WCS considere o volume parcialmente coletado.
Destinação do Volume ao Reabastecimento:
Após a coleta, o operador induz o volume na esteira e o WCS direciona cada volume para uma área específica de reabastecimento, mantendo a rastreabilidade e a organização dos volumes para posterior utilização nas posições de Picking Fracionado.
Disponibilização e Integração:
O WCS envia a integração informando que o volume está disponível na área de reabastecimento, permitindo que os operadores realizem o abastecimento das posições de Picking Fracionado conforme planejado.
Hardware Utilizado:
Coletor Android, garantindo eficiência na leitura do código de endereços durante todo o processo.

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - SEGURANÇA NO PICKING REV 1.docx`  
**Heading:** Gestão de Ciclos (Função Reset)  
**Score:** — (semantico) | **ID:** e1063431c3d28ade

Será disponibilizada uma funcionalidade na tela de Supervisão do WCS para controlar os ciclos de validação, permitindo simular a necessidade de conferência após ondas de reabastecimento.
Botão de Reset Manual: O supervisor poderá resetar o status de validação ("Zerar Confiança") aplicando filtros:
Por Rua/Linha Inteira (ex: "Resetar Linha Perfumaria após abastecimento noturno").
Por SKU Específico (caso haja suspeita de erro pontual).
Por Faixa de Endereços.
Objetivo: Esta função deve ser utilizada operacionalmente sempre que houver uma nova remessa de abastecimento no FlowHack, garantindo que o primeiro operador a pegar o produto daquele lote novo valide se o abastecedor colocou o item correto.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Envio das caixas para reabastecimento.  
**Score:** — (semantico) | **ID:** 4d11b4153a23fac8

Será induzido um volume(caixa) na esteira, e nesse volume pode conter 2(dois) tipos de etiqueta.
1(uma) etiqueta que poderá ter 30(trinta) caracteres, onde consideramos apenas os 10(dez) últimos caracteres.
E outra etiqueta que terá apenas os 10(dez) caracteres.
Deverá seguir a regra, caso a etiqueta tenha mais 10 caracteres, considerar os 10(dez) últimos, caso tenha apenas 10(dez), considerar o mesmo.
Nessa interface a Swift envia o "Cod RG" e SKU. O campo "Cod RG" é o código de Andradina. Esse mesmo "Cod RG" está presente nos últimos 10(dez) dígitos, na "Etiqueta gerada no CD".
Caso tenha mais de 1(uma) posição na esteira com o mesmo SKU o sistema deverá reconhecer qual posição precisará passar, independente se a posição necessita de reabastecimento ou não. Caso sobre produtos na caixa a mesma deverá ser desviada para a estação de rejeito.
SAP  WCS

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** bf2db615f935fd26

O reabastecimento será responsabilidade do WMS do cliente.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 372060cc72683eac

O reabastecimento será responsabilidade do WMS do cliente.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 1642a77abb688847

O reabastecimento será responsabilidade do WMS do cliente.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 68c5824228fd9b69

Para realizar o abastecimento não existirá integrações entre os sistemas, o operador irá visualizar a falta do produto e com um tablet + scanner realiza o reabastecimento da posição confirmando através do código de barras do produto mais posição. O MFC sinaliza que o reabastecimento está correto.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 6bdc56f37bece473

Para realizar o abastecimento não existirá integrações entre os sistemas, o operador irá visualizar a falta do produto e com um tablet + scanner realiza o reabastecimento da posição confirmando através do código de barras do produto mais posição. O MFC sinaliza que o reabastecimento está correto.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** a6255232d5729980

Para realizar o abastecimento não existirá integrações entre os sistemas, o operador irá visualizar a falta do produto e com um tablet + scanner realiza o reabastecimento da posição confirmando através do código de barras do produto mais posição. O MFC sinaliza que o reabastecimento está correto.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** e2058501052ecd2a

Para realizar o abastecimento não existirá integrações entre os sistemas, o operador irá visualizar a falta do produto e com um tablet + scanner realiza o reabastecimento da posição confirmando através do código de barras do produto mais posição. O MFC sinaliza que o reabastecimento está correto.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Aditivo_Integracao_JSON_REV.1.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 6d0b54f41af14c41

Com o envio da integração de confirmação de picking o reabastecimento passará a ser feito pelo EWM e pode ser desativado do lado do sistema MFC

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE - Reab.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 0421fec4294e813a

O processo de reabastecimento será realizado pelo sistema MFC, o sistema MFC não terá acesso ao estoque do cliente, não existe integração entre os sistemas MFC – WMS(JDA) para o processo de reabastecimento.
Para o reabastecimento serão 12 carrinhos, cada carrinho terá 1 tablet e 1 leitor de dedo.
Os carrinhos serão distribuídos e responsáveis pelo seu posto.
Sendo:
2 Carrinhos posto 1 (+ 1 reserva)
2 Carrinhos posto 2 (+ 1 reserva)
2 Carrinhos posto 3 (+ 1 reserva)
2 Carrinhos posto 4 (+ 1 reserva)
Os itens de reabastecimento deverão ser cadastrados e divididos por postos e mesas conforme distribuídos pelos carrinhos, por exemplo, o operador que irá realizar o reabastecimento do posto 1 mesas AB, irá receber somente informações de solicitação de reabastecimento das mesas AB do posto 1. E sucessivamente para todos os carrinhos.
O processo de reabastecimento será feito pelo operador responsável por aquele posto de reabastecimento, que irá visualizar na tela do tablet qual endereço do posto está solicitando o reabastecimento.
O operador também terá as informações na tela:
Item – Código do SKU do produto a ser reabastecido
EAN – Código EAN vinculado com o produto a ser reabastecido
Endereço Reab – Endereço da posição do produto a ser reabastecido
Quantidade – Quantidade a ser reabastecida
Endereço Compra – Endereço onde o operador deve buscar o item
(Sugestão de tela)
Operador irá até o endereço de ‘compra’ do item, para realizar a compra do item no estoque e quantidade solicitada.
Após o processo de compra, irá selecionar o item na tela, e então o operador terá a imagem do produto selecionado para confirmar se fez a ‘compra’ certa.
Com isso, operador realiza a leitura do código EAN do item com leitor de dedo, nesse momento o MFC irá acender o led da posição em que o operador deve realizar o reabastecimento.
- Caso o EAN lido seja diferente do EAN do item selecionado, o sistema não irá prosseguir com o acendimento do led da posição, operador terá que voltar a tela anterior para confirmar se as informações de EAN estão corretas e refazer o processo.
- Caso o operado selecione o botão cancelar, o led deve ser apagado pelo sistema MFC.
(Sugestão de tela)
- Caso a quantidade reabastecida pelo operador seja diferente da quantidade solicitada pelo sistema MFC, operador deve alterar a quantidade nessa tela e selecionar o botão confirmar, e o reabastecimento será considerado com a quantidade inserida pelo operador.
(Sugestão de tela – altera quantidade)
Com todo o processo descrito acima concluído, operador se desloca até a posição indicada pelo led, realiza o reabastecimento, confirma a quantidade e seleciona o botão confirmar, nesse momento o led deve ser apagado pelo sistema MFC, e o item reabastecido não fará mais parte da tela de reabastecimento.
(Sugestão de tela – reabastecimento realizado)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO (Reabastecimento - PTW - PTM).docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 0eaf976d323c1b58

O processo de reabastecimento será realizado pelo sistema MFC, o sistema MFC não terá acesso ao estoque do cliente, não existe integração entre os sistemas MFC – WMS(JDA) para o processo de reabastecimento.
Para o reabastecimento serão 12 carrinhos, cada carrinho terá 1 tablet e 1 leitor de dedo.
Os carrinhos serão distribuídos e responsáveis pelo seu posto.
Sendo:
2 Carrinhos posto 1 (+ 1 reserva)
2 Carrinhos posto 2 (+ 1 reserva)
2 Carrinhos posto 3 (+ 1 reserva)
2 Carrinhos posto 4 (+ 1 reserva)
Os itens de reabastecimento deverão ser cadastrados e divididos por postos e mesas conforme distribuídos pelos carrinhos, por exemplo, o operador que irá realizar o reabastecimento do posto 1 mesas AB, irá receber somente informações de solicitação de reabastecimento das mesas AB do posto 1. E sucessivamente para todos os carrinhos.
O processo de reabastecimento será feito pelo operador responsável por aquele posto de reabastecimento, que irá visualizar na tela do tablet qual endereço do posto está solicitando o reabastecimento.
O operador também terá as informações na tela:
Item – Código do SKU do produto a ser reabastecido
EAN – Código EAN vinculado com o produto a ser reabastecido
Endereço Reab – Endereço da posição do produto a ser reabastecido
Quantidade – Quantidade a ser reabastecida
Endereço Compra – Endereço onde o operador deve buscar o item
(Sugestão de tela)
Operador irá até o endereço de ‘compra’ do item, para realizar a compra do item no estoque e quantidade solicitada.
Após o processo de compra, irá selecionar o item na tela, e então o operador terá a imagem do produto selecionado para confirmar se fez a ‘compra’ certa.
Com isso, operador realiza a leitura do código EAN do item com leitor de dedo, nesse momento o MFC irá acender o led da posição em que o operador deve realizar o reabastecimento.
- Caso o EAN lido seja diferente do EAN do item selecionado, o sistema não irá prosseguir com o acendimento do led da posição, operador terá que voltar a tela anterior para confirmar se as informações de EAN estão corretas e refazer o processo.
- Caso o operado selecione o botão cancelar, o led deve ser apagado pelo sistema MFC.
(Sugestão de tela)
- Caso a quantidade reabastecida pelo operador seja diferente da quantidade solicitada pelo sistema MFC, operador deve alterar a quantidade nessa tela e selecionar o botão confirmar, e o reabastecimento será considerado com a quantidade inserida pelo operador.
(Sugestão de tela – altera quantidade)
Com todo o processo descrito acima concluído, operador se desloca até a posição indicada pelo led, realiza o reabastecimento, confirma a quantidade e seleciona o botão confirmar, nesse momento o led deve ser apagado pelo sistema MFC, e o item reabastecido não fará mais parte da tela de reabastecimento.
(Sugestão de tela – reabastecimento realizado)

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** a05ceb3da21ef95d

O reabastecimento será responsabilidade do WMS do cliente.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** f92dbcfc26f2b9bd

O reabastecimento será responsabilidade do WMS do cliente.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 89ece9c471c2ff87

O reabastecimento será responsabilidade do WMS do cliente.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 9ff8b1a3448c0156

O reabastecimento será feito pelo operador do posto de reabastecimento, que irá visualizar em um tablet que deverá mostrar qual posto está solicitando o reabastecimento. Esse tablet estará vinculado em um carrinho, operador irá até o posto com solicitação de reabastecimento e ao bipar a caixa master, leds deverão mostrar qual posição deve ser reabastecida. Esse processo deve ser realizado individualmente para cada posto, por se tratar da confirmação através de sensor (cada acesso do operador é considerado um volume). Neste caso em cada posto existe um led controlado por um sensor, esse sensor acusa o momento da caixa inserida na posição, sem necessidade de o operador pressionar um botão. Considerando o processo atual de reabastecimento, a cada acesso no sensor, WCS irá considerar a quantidade cadastrada para aquele EAN.
O led da posição só deverá ser apagado quando operador confirmar o reabastecimento no tablet.
O sistema WCS apresentará ao operador uma lista de demandas pendentes, baseado na onda enviada pelo sistema WMS. Com isso o operador do reabastecimento visualiza as posições pendentes de reabastecimento e então procede com a reposição do item na posição.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 4f149623ef1ec5c8

O reabastecimento será feito pelo operador do posto, que irá visualizar em um tablet que deverá mostrar qual posto está solicitando o reabastecimento. Em cada posto existe um led controlado por um sensor de nivel, quando esse sensor for acionado, quer dizer que o nível está baixo, recebendo essa informação no tablet, operador irá coletar a caixa master e realizar o reabastecimento da posição solicitada, realiza a leitura da caixa master e o led do sensor será desativado automaticamente, assim o alerta do tablet também será desativado automaticamente.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** b37817564c963af9

O reabastecimento será feito pelo operador do posto de reabastecimento, que irá visualizar em um tablet que deverá mostrar qual posto está solicitando o reabastecimento. Esse tablet estará vinculado em um carrinho, operador irá até o posto com solicitação de reabastecimento e ao bipar a caixa master, leds deverão mostrar qual posição deve ser reabastecida. Esse processo deve ser realizado individualmente para cada posto, por se tratar da confirmação através de sensor (cada acesso do operador é considerado um volume). Neste caso em cada posto existe um led controlado por um sensor, esse sensor acusa o momento da caixa inserida na posição, sem necessidade de o operador pressionar um botão. Considerando o processo atual de reabastecimento, a cada acesso no sensor, WCS irá considerar a quantidade cadastrada para aquele EAN.
O sistema WCS apresentará ao operador uma lista de demandas pendentes, baseado na onda enviada pelo sistema WMS. Com isso o operador do reabastecimento visualiza as posições pendentes de reabastecimento e então procede com a reposição do item na posição.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 5a434304b5abbbea

O reabastecimento será feito pelo operador do posto de reabastecimento, que irá visualizar em um tablet que deverá mostrar qual posto está solicitando o reabastecimento. Esse tablet estará vinculado em um carrinho, operador irá até o posto com solicitação de reabastecimento e ao bipar a caixa master, leds deverão mostrar qual posição deve ser reabastecida. Esse processo deve ser realizado individualmente para cada posto, por se tratar da confirmação através de sensor (cada acesso do operador é considerado um volume). Neste caso em cada posto existe um led controlado por um sensor, esse sensor acusa o momento da caixa inserida na posição, sem necessidade de o operador pressionar um botão. Considerando o processo atual de reabastecimento, a cada acesso no sensor, WCS irá considerar a quantidade cadastrada para aquele EAN.
O led da posição só deverá ser apagado quando operador confirmar o reabastecimento no tablet.
O sistema WCS apresentará ao operador uma lista de demandas pendentes, baseado na onda enviada pelo sistema WMS. Com isso o operador do reabastecimento visualiza as posições pendentes de reabastecimento e então procede com a reposição do item na posição.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE(RASC) - FASE.1 VER.1.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 5e5d9a0b0a4f9b73

O reabastecimento será feito pelo operador do posto, que irá visualizar o produto em falta através de inspeção visual e com um tablet ele irá bipar o endereço do produto que está em falta, fazendo isto aparecerá no tablet a identificação do produto. Com a informação do produto, o operador irá ao deposito buscar o produto para reposição. Após buscar o produto ele vai bipar o código do produto, para assim confirmar que é o produto correto, após confirmado o operador colocará o produto no seu devido lugar, apagando automaticamente o led via sensor, sem necessidade de acionar o botão.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** 5017db88a280da50

O processo de reabastecimento será realizado pelo sistema MFC, o sistema MFC não terá acesso ao estoque do cliente, não existe integração entre os sistemas MFC – WMS(JDA) para o processo de reabastecimento.
Para o reabastecimento serão 12 carrinhos, cada carrinho terá 1 tablet e 1 leitor de dedo.
Os carrinhos serão distribuídos e responsáveis pelo seu posto.
Sendo:
2 Carrinhos posto 1 (+ 1 reserva)
2 Carrinhos posto 2 (+ 1 reserva)
2 Carrinhos posto 3 (+ 1 reserva)
2 Carrinhos posto 4 (+ 1 reserva)
Os itens de reabastecimento deverão ser cadastrados e divididos por postos e mesas conforme distribuídos pelos carrinhos, por exemplo, o operador que irá realizar o reabastecimento do posto 1 mesas AB, irá receber somente informações de solicitação de reabastecimento das mesas AB do posto 1. E sucessivamente para todos os carrinhos.
O processo de reabastecimento será feito pelo operador responsável por aquele posto de reabastecimento, que irá visualizar na tela do tablet qual endereço do posto está solicitando o reabastecimento.
O operador também terá as informações na tela:
Item – Código do SKU do produto a ser reabastecido
EAN – Código EAN vinculado com o produto a ser reabastecido
Endereço Reab – Endereço da posição do produto a ser reabastecido
Quantidade – Quantidade a ser reabastecida
Endereço Compra – Endereço onde o operador deve buscar o item
(Sugestão de tela)
Operador irá até o endereço de ‘compra’ do item, para realizar a compra do item no estoque e quantidade solicitada.
Após o processo de compra, irá selecionar o item na tela, e então o operador terá a imagem do produto selecionado para confirmar se fez a ‘compra’ certa.
Com isso, operador realiza a leitura do código EAN do item com leitor de dedo, nesse momento o MFC irá acender o led da posição em que o operador deve realizar o reabastecimento.
- Caso o EAN lido seja diferente do EAN do item selecionado, o sistema não irá prosseguir com o acendimento do led da posição, operador terá que voltar a tela anterior para confirmar se as informações de EAN estão corretas e refazer o processo.
- Caso o operado selecione o botão cancelar, o led deve ser apagado pelo sistema MFC.
(Sugestão de tela)
- Caso a quantidade reabastecida pelo operador seja diferente da quantidade solicitada pelo sistema MFC, operador deve alterar a quantidade nessa tela e selecionar o botão confirmar, e o reabastecimento será considerado com a quantidade inserida pelo operador.
(Sugestão de tela – altera quantidade)
Com todo o processo descrito acima concluído, operador se desloca até a posição indicada pelo led, realiza o reabastecimento, confirma a quantidade e seleciona o botão confirmar, nesse momento o led deve ser apagado pelo sistema MFC, e o item reabastecido não fará mais parte da tela de reabastecimento.
(Sugestão de tela – reabastecimento realizado)

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** e3fa47e126cb5b90

O processo de reabastecimento será realizado pelo sistema MFC, o sistema MFC não terá acesso ao estoque do cliente, não existe integração entre os sistemas MFC – WMS(JDA) para o processo de reabastecimento.
Para o reabastecimento serão 12 carrinhos, cada carrinho terá 1 tablet e 1 leitor de dedo.
Os carrinhos serão distribuídos e responsáveis pelo seu posto.
Sendo:
2 Carrinhos posto 1 (+ 1 reserva)
2 Carrinhos posto 2 (+ 1 reserva)
2 Carrinhos posto 3 (+ 1 reserva)
2 Carrinhos posto 4 (+ 1 reserva)
Os itens de reabastecimento deverão ser cadastrados e divididos por postos e mesas conforme distribuídos pelos carrinhos, por exemplo, o operador que irá realizar o reabastecimento do posto 1 mesas AB, irá receber somente informações de solicitação de reabastecimento das mesas AB do posto 1. E sucessivamente para todos os carrinhos.
O processo de reabastecimento será feito pelo operador responsável por aquele posto de reabastecimento, que irá visualizar na tela do tablet qual endereço do posto está solicitando o reabastecimento.
O operador também terá as informações na tela:
Item – Código do SKU do produto a ser reabastecido
EAN – Código EAN vinculado com o produto a ser reabastecido
Endereço Reab – Endereço da posição do produto a ser reabastecido
Quantidade – Quantidade a ser reabastecida
Endereço Compra – Endereço onde o operador deve buscar o item
(Sugestão de tela)
Operador irá até o endereço de ‘compra’ do item, para realizar a compra do item no estoque e quantidade solicitada.
Após o processo de compra, irá selecionar o item na tela, e então o operador terá a imagem do produto selecionado para confirmar se fez a ‘compra’ certa.
Com isso, operador realiza a leitura do código EAN do item com leitor de dedo, nesse momento o MFC irá acender o led da posição em que o operador deve realizar o reabastecimento.
- Caso o EAN lido seja diferente do EAN do item selecionado, o sistema não irá prosseguir com o acendimento do led da posição, operador terá que voltar a tela anterior para confirmar se as informações de EAN estão corretas e refazer o processo.
- Caso o operado selecione o botão cancelar, o led deve ser apagado pelo sistema MFC.
(Sugestão de tela)
- Caso a quantidade reabastecida pelo operador seja diferente da quantidade solicitada pelo sistema MFC, operador deve alterar a quantidade nessa tela e selecionar o botão confirmar, e o reabastecimento será considerado com a quantidade inserida pelo operador.
(Sugestão de tela – altera quantidade)
Com todo o processo descrito acima concluído, operador se desloca até a posição indicada pelo led, realiza o reabastecimento, confirma a quantidade e seleciona o botão confirmar, nesse momento o led deve ser apagado pelo sistema MFC, e o item reabastecido não fará mais parte da tela de reabastecimento.
(Sugestão de tela – reabastecimento realizado)

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 7bf82b18319b0e18

Reabastecimento será de responsabilidade EMIS Minas.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 2b5c7563b604b1da

Reabastecimento será de responsabilidade do cliente.

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.11.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** f061a282459cb24c

Reabastecimento será de responsabilidade do SAP.

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** abaec1f13491edfd

Reabastecimento será de responsabilidade do cliente.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** b6fc9c0682cab520

No order start o operador irá vincular o produto que solicita o reabastecimento com uma caixa plástica, a caixa plástica deverá ter uma etiqueta com o código de barras único de identificação, essa identificação será necessária para ser vinculada ao produto, e ao ser lida nos postos o sistema VELOX identificará se existe produto/posição a serem reabastecidos.
Durante o processo de reabastecimento dos produtos, os leds das posições acenderão na cor rosa, informando a posição e quantidade a ser reabastecida, e o display da linha acenderá informando o número da caixa que está sendo reabastecida no momento, o operador realiza o reabastecimento e ao finalizar pressiona o botão para confirmar, o número da próxima caixa é mostrado no mesmo display e os leds das posições acenderá para que o processo seja repetido.
Não será necessário a confirmação desse processo via integração, sendo assim Velox não enviará nenhuma informação ao WIS.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** c258db8a44b229ef

O reabastecimento será controlado pelo WMS do cliente.
Será realizada a impressão da etiqueta com código de barras do SKU.
Operador fixa a etiqueta impressa na caixa e induz na linha, ao ser lida no leitor fixo o sistema VELOX fará a validação se o SKU está alocado no posto, caso tenha o SKU alocado em alguma posição, o Led deverá acender indicando a posição que o operador deve realizar o reabastecimento, após reabastecer a posição operador induz a caixa novamente na linha.
Caso não tenha o SKU alocado no posto, a caixa segue para o próximo posto.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF8.2.3 – Reabastecimento de picking  
**Score:** — (semantico) | **ID:** 10b0e0833fc38ba2

O WCS Velox deve tratar movimentos de reabastecimento de pallets para picking.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF19 – Gestão de movimentos  
**Score:** — (semantico) | **ID:** 2bd193373c63acba

No WCS Velox deve ser possivel visualizar e alterar os movimentos de saída utilizados nas ordens de saída e reabastecimento vindas do SAP.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Reabastecimento de baixo giro (RBG)  
**Score:** — (semantico) | **ID:** b7866e6c7c304ff0

A imagem abaixo apresenta as regras funcionais que regem o tratamento de ordens de saída de reabastecimento de pallets de baixo giro.
As regras e tratamentos são os mesmos apresentados para ordens de transferência de pallets incompletos. A única diferença com relação às ordens de TPI é que os pallets que atendem às ordens de movimento RGB podem ser destinados a uma mesa de saída diferente da de transferência, caso esteja configurado no WCS.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Reabastecimento de médio giro (RMG)  
**Score:** — (semantico) | **ID:** 474ee5c500b58bab

A imagem abaixo apresenta as regras funcionais que regem o tratamento de ordens de saída de expedição. Os detalhes são apresentados abaixo.
Dado que há uma ordem saída de TPI, o primeiro passo é buscar os pallets que atendam as características da ordem. Para tal o algoritmo de Busca de Pallets Fracionados (BPF).
Caso a lista esteja vazia, o algoritmo é finalizado por não haver pallets para atender a ordem.
Caso a lista possua itens, para cada pallet da lista, enquanto o pedido da ordem não for completado (existem duas regras para considerar um pedido como completado) processa o pallet para saída:
A localização do pallet é reservada para saída (se estiver em uma célula). Se já estiver em trânsito para saída, apenas agrega o pallet à ordem de saída;
Destino do pallet: mesa de saída de acordo com tipo de conservação do produto;
Realizada baixa das caixas do pallet (pela quantidade solicitada na ordem). O tratamento da quantidade pode ser em unidades ou peso variável. No caso de peso variável, se estiver dentro da tolerância, a ordem pode ser considerada como processada;
Se for uma SKU de peso variável, todo o pallet será reservado para saída, não apenas os itens que atendem a ordem. Neste caso o orquestrador irá gerar uma mensagem de confirmação para o SAP de todo o pallet, independente da quantidade solicitada na ordem;
Se a ordem for de venda futura, marcar o status dos itens do pallet como venda futura. A posição não será reservada para saída;
Se a ordem for de venda futura, a posição do pallet não será reservada para saída, porém se um pallet possuir itens de venda futura e agregar uma nova ordem que não seja venda futura, a localização será reservada para saída e somente os itens desta última ordem serão retirados na saída, quando o pallet voltar, os itens de venda futura continuarão pendentes.
No que toca a liberação de itens de venda futura em um mesmo pallet, a liberação será feita item a item através de interface M3 do SAP. O WCS liberará os itens na ordem que forem solicitados pelo SAP.
Ao processar os pallets da lista, caso a ordem ainda possua caixas sem pallets para atender, a mesma será marcada como pendente.
Se a ordem for atendida completamente a mesma será marcada como processada. Há duas regras para caracterizar a ordem como completa:
Se estiver em modo “Padrão”, a quantidade suprida pelos pallets deve ser menor ou igual à quantidade solicitada na ordem;
Se estiver em modo “Não Padrão”, a quantidade suprida pelos pallets pode ser maior que a quantidade solicitada na ordem.
O resultado é a lista dos pallets a serem retirados e confirmados ao SAP.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF8.2.3 – Reabastecimento de picking  
**Score:** — (semantico) | **ID:** 7103ba57565d8a8e

O WCS Velox deve tratar movimentos de reabastecimento de pallets para picking.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF19 – Gestão de movimentos  
**Score:** — (semantico) | **ID:** 0557366f32fd550a

No WCS Velox deve ser possivel visualizar e alterar os movimentos de saída utilizados nas ordens de saída e reabastecimento vindas do SAP.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Reabastecimento de baixo giro (RBG)  
**Score:** — (semantico) | **ID:** c8aa62421dc72e61

A imagem abaixo apresenta as regras funcionais que regem o tratamento de ordens de saída de reabastecimento de pallets de baixo giro.
As regras e tratamentos são os mesmos apresentados para ordens de transferência de pallets incompletos. A única diferença com relação às ordens de TPI é que os pallets que atendem às ordens de movimento RGB podem ser destinados a uma mesa de saída diferente da de transferência, caso esteja configurado no WCS.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Reabastecimento de médio giro (RMG)  
**Score:** — (semantico) | **ID:** c96c484c795902a4

A imagem abaixo apresenta as regras funcionais que regem o tratamento de ordens de saída de expedição. Os detalhes são apresentados abaixo.
Dado que há uma ordem saída de TPI, o primeiro passo é buscar os pallets que atendam as características da ordem. Para tal o algoritmo de Busca de Pallets Fracionados (BPF).
Caso a lista esteja vazia, o algoritmo é finalizado por não haver pallets para atender a ordem.
Caso a lista possua itens, para cada pallet da lista, enquanto o pedido da ordem não for completado (existem duas regras para considerar um pedido como completado) processa o pallet para saída:
A localização do pallet é reservada para saída (se estiver em uma célula). Se já estiver em trânsito para saída, apenas agrega o pallet à ordem de saída;
Destino do pallet: mesa de saída de acordo com tipo de conservação do produto;
Realizada baixa das caixas do pallet (pela quantidade solicitada na ordem). O tratamento da quantidade pode ser em unidades ou peso variável. No caso de peso variável, se estiver dentro da tolerância, a ordem pode ser considerada como processada;
Se for uma SKU de peso variável, todo o pallet será reservado para saída, não apenas os itens que atendem a ordem. Neste caso o orquestrador irá gerar uma mensagem de confirmação para o SAP de todo o pallet, independente da quantidade solicitada na ordem;
Se a ordem for de venda futura, marcar o status dos itens do pallet como venda futura. A posição não será reservada para saída;
Se a ordem for de venda futura, a posição do pallet não será reservada para saída, porém se um pallet possuir itens de venda futura e agregar uma nova ordem que não seja venda futura, a localização será reservada para saída e somente os itens desta última ordem serão retirados na saída, quando o pallet voltar, os itens de venda futura continuarão pendentes.
No que toca a liberação de itens de venda futura em um mesmo pallet, a liberação será feita item a item através de interface M3 do SAP. O WCS liberará os itens na ordem que forem solicitados pelo SAP.
Ao processar os pallets da lista, caso a ordem ainda possua caixas sem pallets para atender, a mesma será marcada como pendente.
Se a ordem for atendida completamente a mesma será marcada como processada. Há duas regras para caracterizar a ordem como completa:
Se estiver em modo “Padrão”, a quantidade suprida pelos pallets deve ser menor ou igual à quantidade solicitada na ordem;
Se estiver em modo “Não Padrão”, a quantidade suprida pelos pallets pode ser maior que a quantidade solicitada na ordem.
O resultado é a lista dos pallets a serem retirados e confirmados ao SAP.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Reabastecimento Estoque Velox  
**Score:** — (semantico) | **ID:** b6960711813f5669

Este processo movimenta itens do Transfer para as posições finais de picking, conforme necessidade operacional. A funcionalidade responsável por criar as tarefas de reabastecimento atua monitorando continuamente os níveis de estoque nas posições de picking e identificando necessidades com base em dois principais critérios: saldo abaixo do mínimo operacional e previsão de consumo a partir de ondas de separação já liberadas.
Quando uma dessas condições é atendida, o sistema avalia a disponibilidade de produtos no Transfer e,
A geração da tarefa pode ser disparada de forma automática, com base em regras configuradas no sistema, ou de forma manual, por meio de uma interface onde o operador ou gestor pode solicitar o reabastecimento de itens ou posições específicas. Todas as tarefas geradas são organizadas em uma fila e ficam disponíveis para execução pelos operadores logados nos postos responsáveis pela atividade.
Durante a execução, o operador utiliza coletor para iniciar a tarefa, realiza a coleta na posição de origem, transporta o item até o endereço de destino e conclui a operação com a leitura da posição de destino, garantindo o controle e rastreabilidade completa da movimentação.
Este tipo de reabastecimento é de responsabilidade do WCS que será feito via coletor android.
Fluxo do Processo:
O WCS apresenta uma tela com todos os reabastecimentos pendentes entre posições de origem e posições de destino.
As informações exibidas incluem:
Item (codInterno);
Quantidade(qtd);
Endereço de destino(endColeta).
Caso a origem for de um item com endereço vinculado
O operador realiza, na sequência:
Leitura da posição de origem;
Leitura do item (codInterno);
Leitura da posição de destino).
Confirma quantidade alocada
Caso a origem for do Transfer
O operador realiza, na sequência:
Leitura do item (codInterno);
Leitura da posição de destino (Picking).
Confirma quantidade alocada

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 57aa46562393f6fc

Na integração de pedidos teremos um código verificador, que poderá ser: 9999 ou 0000, com isso sistema Velox deverá realizar os desvios conforme os níveis, após finalizar os desvios a caixa seguirá vazia para conferência.

	Reabastecimento será de responsabilidade TPC, sistema Velox apenas fará o desvio das caixas.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** f68fdf58c3c84e70

Reabastecimento será de responsabilidade TPC

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 8e05a82a9a24cefa

Reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** be716ae8f4723af0

Reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 4179a2082c162a35

Reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 780bb704670da044

Reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 30ace9b158ccd2c9

Reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 2b0a95b82c53c6ac

Reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Reabasteciemento  
**Score:** — (semantico) | **ID:** 91e1316bda4cc28e

O processo de reabastecimento será de responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Reabasteciemento  
**Score:** — (semantico) | **ID:** 6aa018a89bd9a0d7

O processo de reabastecimento será de responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Reabasteciemento  
**Score:** — (semantico) | **ID:** 66f1b0b3bf4bff54

O processo de reabastecimento será de responsabilidade do cliente.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 8eae18160b09c7f6

O sistema Velox informa o WMS referente a separação, com isso o WMS administra essas informações para tratativas de reabastecimento.
Todo o processo de reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 22819f19b8cb5304

O WCS informa o WMS/KAIZEN referente a separação, com isso o WMS/KAIZEN administra essas informações para tratativas de reabastecimento.
Todo o processo de reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** f9b966d60f9216b4

O WCS informa o WMS/KAIZEN referente a separação, com isso o WMS/KAIZEN administra essas informações para tratativas de reabastecimento.
Todo o processo de reabastecimento é de responsabilidade do cliente.
O processo de reabastecimento é totalmente gerenciado pelo WMS/KAIZEN. O papel do WCS se limita ao envio das informações sobre a separação realizada. Com base nesses dados, o WMS avalia os cortes ocorridos durante a operação e determina as ações necessárias para repor os estoques das posições de picking.
Toda a lógica de decisão, emissão de tarefas, endereçamento e execução do reabastecimento é de responsabilidade do cliente. O WCS apenas atua como emissor das informações de separação para que o sistema do cliente tome as decisões operacionais adequadas.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 2ff6f2a92945cc94

O WCS informa o WMS/KAIZEN referente a separação, com isso o WMS/KAIZEN administra essas informações para tratativas de reabastecimento.
Todo o processo de reabastecimento é de responsabilidade do cliente.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade recirculação  
**Score:** — (semantico) | **ID:** 0e7f38a44e1b8132

Pós Go Live.
Relatório deve mostrar a produtividade de volumes que foram direcionados a recirculação.
Campos:
Quantidade de recirculação por hora e seus respectivos motivos;
Quantidade de volumes que recircularam 1(uma) vez;
Quantidade de volumes que recircularam 2(duas) vezes;
Quantidade de volumes que recircularam 3(três) vezes;
Quantidade de volumes que recircularam e quantas vezes recircularam conforma parametrizado no sistema;
Quantidade de volumes que foram rejeitados devido ultrapassar a quantidade máxima de recirculação;
Relação porcentual entre volumes classificados e volumes recirculados.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Rampa de desvio;
Quantidade de recirculação;
Motivo de recirculação.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Abastecimento  
**Score:** — (semantico) | **ID:** a27cc1af006673ad

A solicitação de abastecimento do estoque do AA será de responsabilidade WCS, onde o sistema deve informar, via IDOC, ao SAP os itens que precisamos que sejam abastecidos e as posições que serão coletada.
Quando um pallet no AA é totalmente consumido, o WCS solicita um abastecimento para o Buffer. Se o produto não for encontrado no Buffer, o WCS requisita ao SAP um novo pallet para reabastecimento, informando os parâmetros de Produto/Faixa ou Produto/Lote. No canal, podem existir múltiplas datas, respeitando o intervalo de data que deve ser parametrizável no Velox, e a posição de destino será o AA.
Obs: Este intervalo será configurado dentro do WMS para o material X posição, onde deve informar, por exemplo, que o produto do dia 6 ao dia 10 pode ser reabastecido nesta posição. Caso o pallet tenha produtos de fora desse range não será permitido o reabastecimento.
O WCS seleciona a melhor posição de retirada, SAP gera a Ordem de Transporte (OT) e retorna as informações ao AA, incluindo posição de origem (SAP), posição de destino (informada pelo WCS), produto, quantidade de caixas, peso líquido, lote (um ou mais lotes no mesmo pallet), Unidade de Distribuição (UD), produção (uma ou mais), vencimento (um ou mais), e tipo de estoque (livre, bloqueado, qualidade etc.).
O operador de empilhadeira confirma a primeira etapa da OT, seja para o AA ou diretamente para a posição de porta-pallet, e então envia um IDOC ao WCS para atualização da posição. Quando o pallet chega à posição designada, o WCS envia um IDOC TOCO para confirmar sua alocação e informar o SAP.
OBS: quando for realizado o reabastecimento pelo porta pallet será apenas uma confirmação, já o reabastecimento pelo AA será em duas fases.
Caso o SAP retorne uma informação de não atendimento — devido ao estorno da OT (utilizando a transação SAP LT15 ou outras transações relacionadas), confirmação de posição vazia, corte ou indisponibilidade de produto para atender à solicitação —, o WCS processa a ocorrência, finaliza a operação e gera uma nova necessidade de reabastecimento. Solicitando este item novamente, mas em uma posição de origem diferente.
Com o disparo de diversas solicitações de abastecimento sendo enviadas ao mesmo tempo para melhor controle do time BRF deve conter uma regra de prioridade a ser seguida. Nesta Regra teremos 5 Classificações (Muito Alta, Alta, Média, Baixa, Muito Baixa) que serão atribuídas pelo sistema WCS  e podem ser totalmente parametrizados pelo ‘. Segue um exemplo abaixo:
Muito alta - Produto/faixa com estoque "zerado" no AA, com necessidade de picking e sem estoque, com menos de 10% do estoque de venda considerando a média histórica)
Alta - Produto com menos de 30% do estoque de venda (média histórica/ análise)
Média - Produto com menos de 60% do estoque de venda (média histórica/ análise)
Baixa - Produto com menos de 90% do estoque de venda (média histórica/ análise)
Muito Baixa - Produto com mais de 90% do estoque de venda (média histórica/ análise)
O Sistema deve notificar o SAP sempre que uma prioridade for alterada via IDOC. A busca que será feita nas prioridades para verificar se foi alterada ou não deve ser parametrizável no sistema WCS.
Quando for desabilitado o envio automático das solicitações de reabastecimento do WCS para o SAP, o sistema deve exibir aquele pallet solicitado até que o Time BRF tome alguma ação a respeito. Caso contrário deve ficar exibindo este pallet. Ao estornar uma OT de ressuprimento no SAP, o WCS deve ser atualizado via IDOC, caso o estorno seja realizado no WCS a atualização deve ser enviada ao SAP via IDOC.
O WCS deve verificar posições vazias e que não possuem ordem de reabastecimento para esta posição e automaticamente enviar uma solicitação de reabastecimento de algum item que esteja sendo esperado nas próximas ondas/transportes.
Caso seja enviado ao BK25 algum material que não tenha necessidade de reabastecimento no AA, o sistema deve rejeitar este material/pallet para não ocorrer divergências.
As posições do Buffer (4° e 5° nível) serão parametrizadas em duas regras:
Área de Estocagem Temporária: Destinada a agilizar o reabastecimento das posições fixas de picking nos níveis 1, 2 e 3.
Distribuição para Canais Dinâmicos: Funciona como um ponto intermediário de movimentação ("De x Para") para atender canais dinâmicos distribuídos nos três níveis (1, 2 e 3), que não possuem posições fixas. Essa funcionalidade poderá ser parametrizada no WCS conforme a necessidade operacional.
Gravar em Log qual usuário e qual ação foi feita no processo de abastecimento.
A lógica de reabastecimento deve levar em conta o estoque atual, incluindo o ressuprimento já gerado nos demais processos, e descontar a necessidade da onda separada. Com base nessa diferença, deve-se avaliar a necessidade de ressuprimento para as ondas subsequentes.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Escopo de Telas  
**Score:** — (semantico) | **ID:** ee8e9282f3d82101

Para apresentar uma base das telas que serão realizadas para atender as necessidades da operação, segue os modelos e as funcionalidades abaixo:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
O escopo acima representa o monitor que ficará responsável pelas questões de Abastecimento que ficará espelhado no setor BK25.
Para garantir maior flexibilidade na operação, o sistema oferece as seguintes opções:
Desativação do envio automático de ressuprimento para o AA – Possibilidade de desabilitar o envio automático das solicitações de reabastecimento.
Envio manual de IDOCs para o SAP – Permite a seleção dos pallets gerados, com um botão para envio manual do IDOC ao SAP, restringindo o envio automático para solicitações pendentes.
Alteração de prioridade das solicitações pendentes – Disponibiliza a seleção de pallets que ainda não tiveram a primeira etapa da OT confirmada, permitindo a alteração manual da prioridade por meio de um botão específico.
Filtros e personalização de layout – Opção de filtro para todas as colunas da interface, além da possibilidade de configuração personalizada do layout.
Exibição de informações filtradas – Permite a aplicação de filtros diretamente na tela de seleção, garantindo que apenas as informações desejadas sejam exibidas.
Estorno de solicitações – Possibilidade de estornar solicitações que ainda não foram iniciadas, mediante a obrigatoriedade de informar um motivo para o estorno. Esta opção só pode ser aceita se o status da solicitação estiver em “Gerado”.
Exportação de dados – Opção de exportação das informações para os formatos Excel, Word, PDF, entre outros.
Gravar em Log qualquer alteração, exclusão que será feita no monitor de abastecimento.
Esse conjunto de funcionalidades garante maior controle operacional e flexibilidade na gestão do abastecimento do AA, otimizando a tomada de decisões e melhorando a eficiência do processo.
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Além disso teremos este monitor, exibido acima, de acompanhamento dos processos de abastecimento com o objetivo de o usuário ter toda a visão de cada etapa da operação de reabastecimento de maneira macro.
No sistema também teremos um monitor para o setor do BK25 + Parte externa para exibir os pallets que estão pendentes para estes setores. Segue o Escopo da tela abaixo:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
A tela abaixo representa o log das integrações onde iremos informar todas as remessas recebidas na integração (IDOC) enviadas pelo SAP. Caso ocorra qualquer erro nesta comunicação será apresentado o status e no campo observação será informado o motivo do erro.
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Haverá uma coluna de seleção das remessas onde o usuário deve selecionar quais remessas ele deseja excluir e apertar o botão Excluir Remessas. Com esta ação iremos enviar o IDOC Cancelamento das Remessas para o SAP.
A próxima etapa é a criação de uma onda com base nos transportes das remessas recebidos na fase anterior.
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
OBS: Adição de uma coluna “Placa Secundária” para auxiliar a operação a entender qual transporte e TSP
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
O usuário terá como ferramenta um botão (“Verificar reabastecimento”) que após selecionar os transportes que não possuem onda, ao ser acionado será exibido um levantamento de quantas solicitações de reabastecimento e quantas demandas de pallet fechado e separação de curva C e D serão geradas com aquela respectiva demanda que está sendo selecionada. Sendo assim, o operador terá mais informações para a sua tomada de decisão.
O Operador terá a opção de “Preparar a onda” onde o sistema já irá disparar (mesmo que o disparo automático para o SAP esteja desativado) previamente as Ordens de Ressuprimentos planejadas para atender aquela onda e caso tenha pallet fechado e separação curva C e D ja irá disparar a necessidade para o Sap. Esta ação não dará início as separações da onda.
Com estas informações apresentadas na imagem acima, o operador deverá selecionar os transportes escolhidos para formar uma onda e acionar o botão “Criar onda”. Para ser validado a criação, só podem ser escolhidos transportes com status LIVRE, caso contrário deverá apresentar erro.
Com a mensagem de sucesso, o WCS deve solicitar os turnos e as prioridades dos transportes para ordenar a saídas dos volumes dentro da onda. O campo que informa o turno não terá uso nas lógicas do WCS, apenas será enviado para o SAP. A prioridade pode ser alterada com o transporte em andamento, porém caso a separação já esteja sendo realizada não há ações que o WCS possa fazer.
Com o campo “onda” preenchido, o WCS deve permitir selecionar as ondas e cancelar. Para esta ação a onda não deve ter sido iniciada, caso contrário só será permitido com um usuário master cadastrado pelo time BRF. Deve ser possível apenas desvincular um transporte daquela respectiva onda e a regra que permita esta ação segue a mesma do cancelamento da onda.
Caso uma onda seja cancelada em processo de expedição, o WCS deve direcionar todas as caixas pendentes para rejeito e disparar ao SAP um IDOC com apenas os volumes que já desceram pelas rampas. O SAP irá entender que os volumes que não foram enviados no IDOC não foram atendidos e fará as tratativas necessárias.
Pode ocorrer um complemento na roteirização dos transportes onde o operador irá precisar acrescentar um transporte em uma onda já em andamento. Neste caso o sistema deve permitir essa ação e colocar como prioridade máxima a separação destes itens para serem expedidos o mais rápido possível.
O sistema deverá sugerir listar as docas por disponibilidade/percentual de carregamento da doca. Lembrando que o sistema deve validar as seguintes premissas referentes a doca:
Validar se a doca não está em manutenção
Validar se tem restrição de tipo veículo
Validação do cadastro de docas
O sistema devera destacar de forma visível (coloração diferente) após a atribuição de docas realizada com sucesso.
Quando o usuário selecionar a onda, o WCS deve solicitar se os congelados e resfriados serão separados ao mesmo tempo ou não. Esta decisão poderá ser alterada ou não até o start da onda. O campo “Temp. Onda”, “Doca Cong” e “Doca Resf” estão conectadas nessa escolha.
Com a parametrização da onda, caso a escolha for mista o WCS deve solicitar automaticamente todas as docas que serão envolvidas para esta onda e pedir para o usuário informar a temperatura de cada uma delas.
Tudo que for editado, excluído a respeito das remessas, ondas e transportes devem estar registrados em logs com os usuários dos responsáveis.
O WCS ficará responsável pelo detalhamento do processo de separação em tempo real dos status que está acontecendo durante a execução do processo.
Segue abaixo modelo de KPI para usar como base nas informações que devem ser apresentadas para a operação.
(Imagem meramente ilustrativa para uso como base no desenvolvimento)

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** Escopo de Telas  
**Score:** — (semantico) | **ID:** ed7d8d8ac9393af5

Para apresentar uma base das telas que serão realizadas para atender as necessidades da operação, segue os modelos e as funcionalidades abaixo:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
O escopo acima representa o monitor que ficará responsável pelas questões de Abastecimento que ficará espelhado no setor BK25.
Para garantir maior flexibilidade na operação, o sistema oferece as seguintes opções:
Desativação do envio automático de ressuprimento para o AA – Possibilidade de desabilitar o envio automático das solicitações de reabastecimento.
Envio manual de IDOCs para o SAP – Permite a seleção dos pallets gerados, com um botão para envio manual do IDOC ao SAP, restringindo o envio automático para solicitações pendentes.
Alteração de prioridade das solicitações pendentes – Disponibiliza a seleção de pallets que ainda não tiveram a primeira etapa da OT confirmada, permitindo a alteração manual da prioridade por meio de um botão específico.
Filtros e personalização de layout – Opção de filtro para todas as colunas da interface, além da possibilidade de configuração personalizada do layout.
Exibição de informações filtradas – Permite a aplicação de filtros diretamente na tela de seleção, garantindo que apenas as informações desejadas sejam exibidas.
Estorno de solicitações – Possibilidade de estornar solicitações que ainda não foram iniciadas, mediante a obrigatoriedade de informar um motivo para o estorno. Esta opção só pode ser aceita se o status da solicitação estiver em “Solicitado”.
Exportação de dados – Opção de exportação das informações para os formatos Excel, Word, PDF, entre outros.
Gravar em Log qualquer alteração, exclusão que será feita no monitor de abastecimento.
Esse conjunto de funcionalidades garante maior controle operacional e flexibilidade na gestão do abastecimento do AA, otimizando a tomada de decisões e melhorando a eficiência do processo.
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Além disso teremos este monitor, exibido acima, de acompanhamento dos processos de abastecimento com o objetivo de o usuário ter toda a visão de cada etapa da operação de reabastecimento de maneira macro.
No sistema também teremos um monitor para o setor do BK25 + Parte externa para exibir os pallets que estão pendentes para estes setores. Segue o Escopo da tela abaixo:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
A tela abaixo representa o log das integrações onde iremos informar todas as remessas recebidas na integração (IDOC) enviadas pelo SAP. Caso ocorra qualquer erro nesta comunicação será apresentado o status e no campo observação será informado o motivo do erro.
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Haverá uma coluna de seleção das remessas onde o usuário deve selecionar quais remessas ele deseja excluir e apertar o botão Excluir Remessas. Com esta ação iremos enviar o IDOC Cancelamento das Remessas para o SAP.
A próxima etapa é a criação de uma onda com base nos transportes das remessas recebidos na fase anterior.
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
OBS: Adição de uma coluna “Placa Secundária” para auxiliar a operação a entender qual transporte é TSP.
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
O usuário terá como ferramenta um botão (“Verificar reabastecimento”) que após selecionar os transportes que não possuem onda, ao ser acionado será exibido um levantamento de quantas solicitações de reabastecimento, quantas demandas de pallet fechado e separação de curva C e D serão geradas com aquela respectiva demanda que está sendo selecionada. Sendo assim, o operador terá mais informações para a sua tomada de decisão.
O Operador terá a opção de “Preparar a onda” onde o sistema já irá disparar (mesmo que o disparo automático para o SAP esteja desativado) previamente as Ordens de Ressuprimentos planejadas para atender aquela onda e caso tenha pallet fechado e separação curva C e D ja irá disparar a necessidade para o Sap. Esta ação NÃO dará início as separações da onda.
A operação poderá ter, de forma resumida, um resumo do processo de reabastecimento de uma onda através dos status da coluna “Status reabastecimento”. Nela podemos ter os seguinte cenários:
N/A – Não necessita reabastecimento para onda.
Indisponível – Não tem produto disponível para atender a necessidade de abastecimento
Em andamento Total – Existe demanda de abastecimento destinada para o AA.
Em andamento Parcial - Existe demanda de abastecimento que foi atendida parcialmente em andamento
Finalizado Total – Todos os abastecimentos foram finalizados.
Finalizado Parcial – Finalizado os itens disponíveis e pendente apenas itens que não possuem estoque.
Com estas informações apresentadas na imagem acima, o operador deverá selecionar os transportes escolhidos para formar uma onda e acionar o botão “Criar onda”. Para ser validado a criação, só podem ser escolhidos transportes com status LIVRE, caso contrário deverá apresentar erro.
Haverá um botão “detalhes Transporte” que o sistema irá levantar os detalhes de atendimento das remessas/itens dentro de um transporte. Segue exemplo abaixo:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Descrição dos Status:
D - Finalizado e Atendido Parcial
C – Finalizado e Atendido Total
B – Em andamento
A – Não iniciado
Com a mensagem de sucesso, o WCS deve solicitar os turnos e as prioridades dos transportes para ordenar a saídas dos volumes dentro da onda. O campo que informa o turno não terá uso nas lógicas do WCS, apenas será enviado para o SAP. A prioridade pode ser alterada com o transporte em andamento, porém caso a separação já esteja sendo realizada não há ações que o WCS possa fazer.
Com o campo “onda” preenchido, o WCS deve permitir selecionar as ondas e cancelar. Para esta ação a onda não deve ter sido iniciada, caso contrário só será permitido com um usuário master cadastrado pelo time BRF. Deve ser possível apenas desvincular um transporte daquela respectiva onda e a regra que permita esta ação segue a mesma do cancelamento da onda.
Caso uma onda seja cancelada em processo de expedição, o WCS deve direcionar todas as caixas pendentes para rejeito e disparar ao SAP um IDOC com apenas os volumes que já desceram pelas rampas. O SAP irá entender que os volumes que não foram enviados no IDOC não foram atendidos e fará as tratativas necessárias.
Pode ocorrer um complemento na roteirização dos transportes onde o operador irá precisar acrescentar um transporte em uma onda já em andamento. Neste caso o sistema deve permitir essa ação e colocar como prioridade máxima a separação destes itens para serem expedidos o mais rápido possível.
O sistema deverá sugerir listar as docas por disponibilidade/percentual de carregamento da doca. Lembrando que o sistema deve validar as seguintes premissas referentes a doca:
Validar se a doca não está em manutenção
Validar se tem restrição de tipo veículo
Validação do cadastro de docas
O sistema devera destacar de forma visível (coloração diferente) após a atribuição de docas realizada com sucesso.
Quando o usuário criar a onda, o WCS deve solicitar se os congelados e resfriados serão separados ao mesmo tempo ou não. Esta decisão poderá ser alterada ou não até o start da onda. O campo “Temp. Onda”, “Doca Cong” e “Doca Resf” estão conectadas nessa escolha.
Com a parametrização da onda, caso a escolha for mista o WCS deve solicitar automaticamente todas as docas que serão envolvidas para esta onda e pedir para o usuário informar a temperatura de cada uma delas.
Quando ocorrer uma falta e o SKU não chegar à doca nem ao rejeito, o monitor de separação do WMS deverá disponibilizar uma opção de botão "SKUs Faltantes" no transporte, acionando o Picking to Light para esses SKUs.
Observação: Este botão somente poderá ser utilizado quando não houver picking pendentes na onda. O uso inadequado desse botão pela operação poderá ocasionar rejeito de volumes duplicados.
Exibir na tela a quantidade atendida e a quantidade indisponível no AA, permitindo as tratativas necessárias, tais como:
Reabastecimento do buffer para o canal;
Reabastecimento do buffer para a posição De-Para (quando não houver produto cadastrado);
Reabastecimento do AC.
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Estas tratativas devem ser realizadas automaticamente pelo sistema WCS
As verificações acima devem ser realizadas em um intervalo de tempo, que será parametrizável, após o início da onda. Ao iniciar a separação da onda , as indisponibilidades devem aparecer com o status:
Indisponível - Não possui estoque tanto no AA quanto no AC para a demanda
Em reabastecimento - possui estoque no AC, mas não possui no AA e deve ser reabastecido
Disponível - A quantidade solicitada possui no AA.
Tudo que for editado, excluído a respeito das remessas, ondas e transportes devem estar registrados em logs com os usuários dos responsáveis.
O WCS ficará responsável pelo detalhamento do processo de separação em tempo real dos status que está acontecendo durante a execução do processo.
Cadastros de Colaboradores
O cadastro solicitará:
Usuário
Nível
Temperatura
PBL
Impressora PVAR
Este ponto impactara diretamente no acendimento dos Pickings em cada Nível.
Segue abaixo modelo de KPI para usar como base nas informações que devem ser apresentadas para a operação.
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
KPI TV (Monitor Geral): Placas, volume/peso, quantidade de caixas separadas, chutadas e as pendências em valor e %, tempo carregamento por doca, tipo de frota, informação de transportador e próximos veículo na doca com o tipo e transportador
Segue exemplo abaixo:
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Relatórios produtividade CX/H/dia - CX/H/d
O relatório deverá levar em consideração o que foi executado por cada separador seja no AC quanto no AA com as seguintes informações:
ID do colaborador
Nome do colaborador
Quantidade de caixas separadas
Peso separado
Tempo de separação e tempo de ociosidade
Se separou congelado, resfriado ou os dois
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Relatório de produtividade dos operadores
ID do colaborador
Nome do colaborador
Quantidade de paletes baixados no processo
Tempo de separação (Início e fim da atividade) SAP deverá informar no IDOC
Tempo de ociosidade (Tempo entre uma confirmação de palete e outra)
(Imagem meramente ilustrativa para uso como base no desenvolvimento)
Relatório de produtividade dos transpaleteiras
D do colaborador
Nome do colaborador
Quantidade de paletes movimentados no processo
Tempo da movimentação e ociosidade
(Imagem meramente ilustrativa para uso como base no desenvolvimento)

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Reabastecimento das posições Picking  
**Score:** — (semantico) | **ID:** 8ca9be23ab69c531

O reabastecimento das posições de Picking fracionado é de responsabilidade WMS.
O reabastecimento das posições de Picking Fullcase é de responsabilidade WMS.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** REABASTECIMENTO VELOX PARA VELOX  
**Score:** — (semantico) | **ID:** d0113317d0e91747

NÃO HÁ INTEGRAÇÃO NESSE PROESSO
DETALHAR PROCESSO DE REABASTECIMENTO DO TRANSFER PARA A POSIÇÃO DE PICKING (FLOWRACK, PICKING FUNDO, MARKETING, POLÍCIA FEDERAL,344CONTROLADOS E GELADEIRA) E TAMBÉM DETALHAR O PROCESSO DE REABASTECIMENTO DO BUFFER/PULMAO PARA POSIÇÃO DE PICKING.
NO PROCESSO DE REABASTECIMENTO DO TRANSFER PARA A POSIÇÃO SERÁ NECESSARIO REALIZAR A LEITURA DO ITEM E O WCS VIA TELA INFORMAR A QUANTIDADE, O ITEM E O ENDEREÇO SUGERIDO (A SUGESTÃO DE ALOCAÇAO DESSE ITEM). DESSA FORMA O OPERADOR PODERÁ OPTAR POR SEGUIR COM A SUGESTÃO MENCIONADA E LER O ENDEREÇO OU SELECIONAR OUTRO ENDEREÇO POR CONTA PRÓPRIA. COM ISSO O WCS DEVE VALIDAR SE ESSE ENDEREÇO É PASSÍVEL DE RECEBER ESSE ITEM DE ACORDO COM AS REGRAS PASSADAS PELO CLIENTE E PEDIR UMA VALIDAÇÃO VIA POPUP DO OPERADOR.
NO PROCESSO DE REABASTECIMENTO DO BUFFER PARA POSIÇÃO O WCS DEVERÁ MOSTRAR EM UMA TELA TODOS OS REABASTECIMENTOS NECESSÁRIOS DO BUFFER PARA POSIÇÃO DE PICKING FINAL. ESSE PROCESSO SERÁ REALIZADO LENDO A POSIÇÃO INICIAL, O ITEM E A POSIÇÃO FINAL.
O REABASTECIMENTO DO TRANSFER PARA O BUFFER OCORRERÁ QUANDO A POSIÇÃO DE PICKING ESTEIRA JÁ ESTIVER CHEIA E AQUELE PRODUTO/LOTE TENHA MAIS UNIDADES NO TRANSFER, LEMBRANDO QUE ESSES PRODUTOS QUE FICARÃO NO BUFFER DEVEM ESTAR PROXIMOS DAS SUAS POSIÇÕES DE PICKING ESTEIRA.
SISTEMA SO PODE PERMITIR REABASTECIMENTO DE FULL CASE QUANDO A CAIXA FOR FECHADA DE ACORDO COM O QUE É INFORMADO NA INTEGRAÇÃO PELO WMS.
CRIAR UM TOPICO SOBRE LOCALIZAÇÕES
Tela para visualizar localizações fora do FlowRack E DENTRO: Será necessária uma tela para visualizar localizações fora do flowrack como: áreas controladas, fundo de picking cart, geladeiras, polícia, marketing etc. O acesso à tela permitirá a inclusão e exclusão de localizações, restrito aos perfis de supervisão e gerente.
PERMITIR CRIAÇAO DE ENDEREÇOS DE PICKING FUNDO, GELADEIRA, POLÍCIA,MARKETING
O sistema WCS fará o controle de saldo da posição de picking e na área pulmão, com isso deverá ter uma quantidade limite de segurança cadastrada no sistema WCS, para quando a quantidade de produtos atinja esse limite, o WCS disponibilizará a informação de reabastecimento em tela informando quais produtos, lotes, posições devem ser reabastecidas.
A quantidade limite, deve considerar a soma dos produtos do pulmão e posição picking.
Reabastecimento WCS
O sistema WCS fará o cálculo da quantidade da posição de picking, e ao atingir a quantidade mínima cadastrada no sistema, realiza a solicitação de reabastecimento da posição via tela no WCS. Esse reabastecimento pode ter origem do transfer ou do pulmão.
Esse processo é realizado diretamente no sistema WCS, sem intervenção do WMS.
Reabastecimento WCS
Ao receber a integração de reabastecimento, operador no sistema WCS realiza as tarefas pendentes de reabastecimento, onde o operador ao realizar a leitura do item, o WCS direciona operador ao endereço da posição daquele produto, seja pulmão, posição de picking, controlados etc.
O sistema WCS deverá validar os itens por lote já existentes na movimentação do pulmão para a posição de picking. Para combinações item/lote que não constem na automação, o sistema deve sugerir uma nova posição.
“worktype”: “PUT”
Operador deve adicionar a quantidade na posição, para reabastecimento de posições.
Tela para Alteração de Itens e Posições: Uma tela será criada dentro do WCS que permitirá ao operador ter autonomia para mudar itens de posições/endereços dentro do sistema. Isso é essencial para o ajuste de localizações internas, especialmente quando os produtos precisam ser realocados para otimizar o espaço de armazenamento ou em resposta a erros operacionais.
Esse processo será realizado através do coletor, onde haverá uma tela que o operador deve realizar a leitura da posição e do item e o WCS informar a quantidade total daquela posição, com isso será solicitada a posição final da movimentação interna do endereço.
Escolha do Local para Reabastecimento: O WCS deve ser capaz de escolher um local para reabastecer com base na demanda de estoque. O operador deverá ser informado (Tela) sobre onde o produto será alocado dentro do armazém, assegurando que a movimentação dos produtos ocorra de forma controlada e eficiente.
Botão para Sugestão de Reabastecimento: O sistema WCS deve disponibilizar um botão na tela para sugerir reabastecimento. Esse botão pode ser acionado quando o sistema detectar que uma posição está com baixo saldo, sinalizando a necessidade de reabastecimento. A sugestão pode ser com base nas regras de estoque ou de volume de demanda do armazém.
Informar Alocação de Produtos: Após o operador realizar o reabastecimento, o sistema deverá informar onde alocou os produtos. Isso permitirá que a movimentação seja registrada e rastreada dentro do WCS, mantendo a integridade e visibilidade das localizações de estoque.
Movimentação Interna de Produto/Estoque: Além de criar tarefas de reabastecimento, o WCS também permitirá a movimentação interna de produtos e estoque dentro do próprio sistema. Ou seja, o sistema deverá possibilitar que o operador movimente produtos entre diferentes posições de estoque ou áreas de picking sem a necessidade de intervenção externa.
Registro de Movimentação Manual: Cada vez que uma movimentação de estoque for realizada manualmente, o WCS deverá gerar um registro de um número interno. Esse número servirá como uma referência interna para informar que a movimentação manual foi realizada. Isso garantirá a rastreabilidade e a auditoria das movimentações manuais dentro do sistema.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 7b31d29293544c36

O WCS é o sistema responsável por controlar o estoque na posição de picking. Este controle é fundamental para garantir que os produtos estejam sempre disponíveis para atender aos pedidos com agilidade e eficiência.
Todas as posições de picking deverão ser cadastradas no WCS, e todas as posições deverão ter o seu estoque mínimo cadastrado, para que quando seja atingido o estoque mínimo seja informado na tela de reabastecimento no WCS para o operador realizar o processo de reabastecimento WMS do cliente.
WMS ao realizar o reabastecimento para o WCS, disponibilizará o produto na ‘área de transferência’ para que o operador verifique em qual posição do WCS deve realizar o processo de reabastecimento.
Após operador realizar o processo de reabastecimento no WMS, é disparada a integração para o WCS.
Com o coletor, operador acessa o sistema WCS, acessa a tela de reabastecimento e realiza a leitura do produto e verifica em qual posição deve alocar o produto, operador ao chegar na posição indicada pelo coletor, deverá realizar a leitura do código da posição do produto para confirmar que a posição está correta com o produto a ser reabastecido, WCS deverá validar se o produto e lote da posição para confirmar, caso seja o mesmo produto e lote diferente, WCS não deve permitir a operação caso seja um produto de mesmo lote já alocado permite a conclusão da operação.
Quando item do mesmo lote, WCS deve indicar a mesma posição, caso seja de lote diferente, WCS deverá indicar uma posição disponivel para esse produto.
WCS deve analisar o lote dos produtos para realizar o reabastecimento, pois é permitido o mesmo produto na mesma posição desde que sejam do mesmo lote, caso seja o mesmo produto com lote diferente, WCS deve alocar em uma posição disponivel.
Após o operador realizar o abastecimento da posição, na tela de reabastecimento do WCS a tarefa deve ter o status de concluída.
O reabastecimento é feito de acordo com a Curva do produto, se é um produto que sai bastante, o seu estoque limite para reabastecer deve ser maior e ele será considerado um produto de curva A.
Processo de Reabastecimento:
Disparo de Solicitação:
O WCS monitora continuamente o nível de estoque nas posições de picking. Quando detecta que o nível de um produto está próximo do limite de segurança, informará na tela de reabastecimento os detalhes de produtos, lotes e posições que solicitam reabastecimento.
Recebimento da Solicitação
O operador, responsável pelo reabastecimento, verifica no WCS quais produtos estão solicitando e realiza processo de reabastecimento no WMS.
Execução do Reabastecimento:
WMS após o envio da integração de reabastecimento, o operador disponibiliza o produto para o operador realizar o reabastecimento da posição de picking conforme indicado pelo WCS.
Confirmação de Reabastecimento:
Uma vez concluído o reabastecimento da posição, sistema WCS confirma a quantidade reabastecida do produto e lote, atualizando informação na tela de tarefa concluída.
Liberação do Pedido:
O WCS somente libera os pedidos para picking após confirmar que o estoque na posição de picking foi reabastecido conforme solicitado.
Reabastecimento Forçado
Além das solicitações automáticas geradas pelo WCS, o operador terá a flexibilidade de realizar reabastecimento forçado.
Esse processo ocorre quando mesmo sem uma solicitação de reabastecimento, o operador decide reabastecer a fim de garantir a continuidade do fluxo de separação dos pedidos.
Caso o operador perceba que um produto terá uma alta saída durante o dia, ele pode antecipar o reabastecimento antes mesmo que sistema WCS envie a solicitação.
Nesse caso, no WMS operador deverá realizar a tarefa de reabastecimento desse produto e lote e com isso o WMS enviará a integração de uma tarefa de reabastecimento forçado para o WCS.
E no WCS, operador acessará a tela de reabastecimento e verificará que existe uma tarefa de reabastecimento enviada pelo WMS, e seguirá o mesmo processo de reabastecimento padrão, informando o produto e lote que pretende reabastecer, assim o WCS fará a validação se já existe alguma posição para esse produto e lote, ou se orienta outra posição para o operador realizar o reabastecimento.
Após realizá-lo, o WCS deve atualizar a tela de reabastecimento informando que a tarefa foi concluída.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** c8dca78d1beb3d96

Para os novos postos de separação tanto fracionados quanto Full Case o processo de abastecimento ou reabastecimento não sofreram alterações e irão seguir como informado no documento da primeira fase I22.2505 AUTOMATIZE – ESPECIFICAÇÃO DE SOFTWARE E HADRWARE-Ver.6.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 23588709166f38b6

Reabastecimento das posições é de responsabilidade do cliente.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 9b2c1a1b30499185

O Order Start Reabastecimento tem como objetivo coletar caixas fechadas que serão utilizadas posteriormente para abastecer as posições de Picking Fracionado. O processo operacional segue o mesmo fluxo do Order Start Full Case tradicional, garantindo consistência na coleta.
Fluxo Operacional:
Escolha do Posto de Impressão:
O operador seleciona o posto de impressão onde irá retirar as etiquetas para identificar corretamente os volumes a serem coletados.
Seleção da Rua de Separação:
O operador define a rua de início da coleta, seguindo a configuração do layout do armazém.
Seleção do Número de Etiquetas:
O operador informa a quantidade de volumes completos que serão coletados, permitindo que o sistema registre corretamente cada volume.
Impressão das Etiquetas:
As etiquetas são impressas antes do início da coleta, garantindo a rastreabilidade de cada volume e que todos os itens coletados estejam devidamente identificados no sistema.
Coleta dos Volumes:
O operador realiza a coleta dos volumes seguindo o mesmo fluxo do Full Case: leitura do endereço para validar a coleta. Caso não haja produtos suficientes em algum endereço, o operador registra a situação, permitindo que o WCS considere o volume parcialmente coletado.
Destinação do Volume ao Reabastecimento:
Após a coleta, o operador induz o volume na esteira e o WCS direciona cada volume para uma área específica de reabastecimento, mantendo a rastreabilidade e a organização dos volumes para posterior utilização nas posições de Picking Fracionado.
Disponibilização e Integração:
O WCS envia a integração informando que o volume está disponível na área de reabastecimento, permitindo que os operadores realizem o abastecimento das posições de Picking Fracionado conforme planejado.
Hardware Utilizado:
Coletor Android, garantindo eficiência na leitura do código de endereços durante todo o processo.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** 5f5e49760fe9b434

Reabastecimento não será de responsabilidade Invent. Será realizado a integração de picking confirm posto a posto para auxiliar o time da Procfit a ter a atualização do estoque mais precisa possível.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Reabastecimento  
**Score:** — (nome-topico) | **ID:** b682ae734a239f8d

O WMS deve integrar as informações do nível para reabastecimento e a etiqueta da caixa dos produtos, que será lida pelos leitores da automação. Essas informações são essenciais para que o sistema saiba onde cada produto deve ser posicionado.
Com os dados fornecidos pelo WMS, o WCS movimentará automaticamente a caixa até o nível correto de reabastecimento, garantindo que os produtos sejam direcionados para o local apropriado.
Em casos que possua mais de uma HU no banco de dados do WCS, sempre será considerada a última integração recebida desta HU.
Ao chegar ao destino, o operador utilizará um coletor de dados conectado ao sistema WMS para realizar o reabastecimento, garantindo que os produtos sejam reposicionados corretamente.
Para o WCS, o processo de reabastecimento será concluído quando a caixa for entregue no nível de destino correspondente.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Reabastecimento – Estoque Velox  
**Score:** — (semantico) | **ID:** 81146f4e6f1a7af5

O processo de reabastecimento no WCS Velox tem como objetivo garantir que as posições de picking e buffer mantenham níveis de estoque adequados para atender à demanda operacional, evitando interrupções nas atividades de separação.
O reabastecimento pode ocorrer a partir de duas origens:
Transfer → Buffer ou Picking
Buffer → Picking
A gestão e execução deste processo são de responsabilidade do WCS, utilizando coletores disponibilizados pelo cliente.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Gatilhos para Criação da Tarefa de Reabastecimento  
**Score:** — (semantico) | **ID:** 7ff4cb7a170f3fc4

A geração de tarefas de reabastecimento pode ocorrer de duas formas: automática ou manual.
Automática:
O WCS monitora continuamente os níveis de estoque e cria tarefas de reabastecimento de forma automática quando um dos critérios abaixo for atendido:
Saldo abaixo do mínimo operacional: Quando a posição de destino atinge ou fica abaixo do estoque mínimo parametrizado no sistema.
Previsão de consumo: Com base nas ondas de separação já liberadas, o sistema identifica posições que não terão estoque suficiente para atender à demanda.
As tarefas automáticas são geradas em segundo plano e inseridas diretamente na fila de reabastecimentos pendentes, ficando disponíveis para execução pelos operadores autorizados.
Manual:
Além do disparo automático, o WCS oferece uma tela dedicada para criação manual de tarefas de reabastecimento. Essa funcionalidade é utilizada principalmente para demandas pontuais ou emergenciais, como:
Solicitação de reabastecimento de um SKU específico, independentemente dos parâmetros de estoque mínimo ou previsão de consumo.
Antecipação de reabastecimentos por decisão operacional.
Ajuste rápido em posições que tiveram perda, dano ou erro de contagem.
Fluxo da Criação Manual:
O operador ou gestor acessa a tela "Criação Manual de Reabastecimento".
Na tela, é possível filtrar e selecionar:
Item (SKU)
Origem (Transfer ou Buffer)
Destino (Buffer ou Picking)
Após preencher os campos obrigatórios, o usuário confirma a criação da tarefa.
O WCS registra a solicitação e insere a nova tarefa na fila de reabastecimentos pendentes, com indicação de prioridade e tipo de origem.
Os operadores logados nos postos responsáveis pelo reabastecimento visualizam a nova tarefa em tempo real e podem iniciá-la pelo coletor.
Esse processo garante que a operação tenha flexibilidade para agir de forma proativa, sem depender exclusivamente das regras automáticas, mantendo o controle e rastreabilidade de todas as movimentações.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Fluxo de Reabastecimento com Origem no Transfer  
**Score:** — (semantico) | **ID:** ebc2414c850a49a9

Quando a origem do reabastecimento é o Transfer, é obrigatória a execução do processo de decanting antes da movimentação.
Etapas do Decanting
O decanting consiste na transferência dos itens de uma ou mais caixas (ILPNs) do Transfer para bins, garantindo organização e rastreabilidade. O processo contempla as seguintes regras e ações:
Adicionar múltiplas ILPNs a uma única bin
Permitido apenas se todas as ILPNs forem do mesmo SKU e lote.
Garante consolidação correta dos itens.
Adicionar uma única ILPN a duas ou mais bins
Necessário acionar a flag de divisão no sistema.
O operador informa a quantidade a ser migrada para a nova bin.
O estoque do Transfer é atualizado automaticamente.
Regras de Consolidação
Somente ILPNs com mesmo SKU e lote podem ser consolidadas na mesma bin.
Identificação Única das Bins
Cada bin possui código único, garantindo controle e rastreabilidade.
Execução do Reabastecimento (Transfer → Buffer ou Picking)
Após o decanting, o operador executa o reabastecimento seguindo o fluxo:
Leitura da posição de origem (Transfer).
Leitura de todas as caixas plásticas (bins) que serão movimentadas.
Leitura da posição de destino (Buffer ou Picking).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Fluxo de Reabastecimento com Origem no Buffer  
**Score:** — (semantico) | **ID:** 102a5f6e1dab244f

Quando a origem é o Buffer, entende-se que o processo de decanting já foi realizado.
O operador executa o reabastecimento seguindo o fluxo:
Leitura da posição de origem (Buffer).
Leitura de todas as caixas plásticas (bins) que serão movimentadas.
Leitura da posição de destino (Picking).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Reabastecimento – Estoque Velox  
**Score:** — (semantico) | **ID:** 40275cd5b9b2678d

O processo de reabastecimento no WCS Velox tem como objetivo garantir que as posições de picking mantenham níveis de estoque adequados para atender à demanda operacional, evitando interrupções nas atividades de separação.
O reabastecimento pode ocorrer a partir de duas origens:
Transfer → Picking
A gestão e execução deste processo são de responsabilidade do WCS, utilizando coletores disponibilizados pelo cliente.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Gatilhos para Criação da Tarefa de Reabastecimento  
**Score:** — (semantico) | **ID:** f13fd30e5484b11d

A geração de tarefas de reabastecimento pode ocorrer de duas formas: automática ou manual.
Automática:
O WCS monitora continuamente os níveis de estoque e cria tarefas de reabastecimento de forma automática quando um dos critérios abaixo for atendido:
Saldo abaixo do mínimo operacional: Quando a posição de destino atinge ou fica abaixo do estoque mínimo parametrizado no sistema.
Previsão de consumo: Com base nas ondas de separação já liberadas, o sistema identifica posições que não terão estoque suficiente para atender à demanda.
As tarefas automáticas são geradas em segundo plano e inseridas diretamente na fila de reabastecimentos pendentes, ficando disponíveis para execução pelos operadores autorizados.
Manual:
Além do disparo automático, o WCS oferece uma tela dedicada para criação manual de tarefas de reabastecimento. Essa funcionalidade é utilizada principalmente para demandas pontuais ou emergenciais, como:
Solicitação de reabastecimento de um SKU específico, independentemente dos parâmetros de estoque mínimo ou previsão de consumo.
Antecipação de reabastecimentos por decisão operacional.
Ajuste rápido em posições que tiveram perda, dano ou erro de contagem.
Fluxo da Criação Manual:
O operador ou gestor acessa a tela "Criação Manual de Reabastecimento".
Na tela, é possível filtrar e selecionar:
Item (SKU)
Origem (Transfer ou Buffer)
Destino (Buffer ou Picking)
Após preencher os campos obrigatórios, o usuário confirma a criação da tarefa.
O WCS registra a solicitação e insere a nova tarefa na fila de reabastecimentos pendentes, com indicação de prioridade e tipo de origem.
Os operadores logados nos postos responsáveis pelo reabastecimento visualizam a nova tarefa em tempo real e podem iniciá-la pelo coletor.
Esse processo garante que a operação tenha flexibilidade para agir de forma proativa, sem depender exclusivamente das regras automáticas, mantendo o controle e rastreabilidade de todas as movimentações.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Fluxo de Reabastecimento com Origem no Transfer  
**Score:** — (semantico) | **ID:** 0c7099aabbac06b2

Quando a origem do reabastecimento é o Transfer, é obrigatória a execução do processo de decanting antes da movimentação.
Etapas do Decanting
O decanting consiste na transferência dos itens de uma ou mais caixas (ILPNs) do Transfer para bins, garantindo organização e rastreabilidade. O processo contempla as seguintes regras e ações:
Adicionar múltiplas ILPNs a uma única bin
Permitido apenas se todas as ILPNs forem do mesmo SKU e lote.
Garante consolidação correta dos itens.
Adicionar uma única ILPN a duas ou mais bins
Necessário acionar a flag de divisão no sistema.
O operador informa a quantidade a ser migrada para a nova bin.
O estoque do Transfer é atualizado automaticamente.
Regras de Consolidação
Somente ILPNs com mesmo SKU e lote podem ser consolidadas na mesma bin.
Identificação Única das Bins
Cada bin possui código único, garantindo controle e rastreabilidade.
Execução do Reabastecimento (Transfer → Buffer ou Picking)
Após o decanting, o operador executa o reabastecimento seguindo o fluxo:
Leitura da posição de origem (Transfer).
Leitura de todas as caixas plásticas (bins) que serão movimentadas.
Leitura da posição de destino (Buffer ou Picking).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Fluxo de Reabastecimento com Origem no Buffer  
**Score:** — (semantico) | **ID:** c7961cdcd9be2823

Quando a origem é o Buffer, entende-se que o processo de decanting já foi realizado.
O operador executa o reabastecimento seguindo o fluxo:
Leitura da posição de origem (Buffer).
Leitura de todas as caixas plásticas (bins) que serão movimentadas.
Leitura da posição de destino (Picking).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Reabastecimento – Estoque Velox  
**Score:** — (semantico) | **ID:** 72b49da2e74c0248

O processo de reabastecimento no WCS Velox tem como objetivo garantir que as posições de picking e buffer mantenham níveis de estoque adequados para atender à demanda operacional, evitando interrupções nas atividades de separação.
O reabastecimento pode ocorrer a partir de duas origens:
Transfer → Buffer ou Picking
Buffer → Picking
A gestão e execução deste processo são de responsabilidade do WCS, utilizando coletores disponibilizados pelo cliente.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Gatilhos para Criação da Tarefa de Reabastecimento  
**Score:** — (semantico) | **ID:** fb02f4924fedf401

A geração de tarefas de reabastecimento pode ocorrer de duas formas: automática ou manual.
Automática:
O WCS monitora continuamente os níveis de estoque e cria tarefas de reabastecimento de forma automática quando um dos critérios abaixo for atendido:
Saldo abaixo do mínimo operacional: Quando a posição de destino atinge ou fica abaixo do estoque mínimo parametrizado no sistema.
Previsão de consumo: Com base nas ondas de separação já liberadas, o sistema identifica posições que não terão estoque suficiente para atender à demanda.
As tarefas automáticas são geradas em segundo plano e inseridas diretamente na fila de reabastecimentos pendentes, ficando disponíveis para execução pelos operadores autorizados.
Manual:
Além do disparo automático, o WCS oferece uma tela dedicada para criação manual de tarefas de reabastecimento. Essa funcionalidade é utilizada principalmente para demandas pontuais ou emergenciais, como:
Solicitação de reabastecimento de um SKU específico, independentemente dos parâmetros de estoque mínimo ou previsão de consumo.
Antecipação de reabastecimentos por decisão operacional.
Ajuste rápido em posições que tiveram perda, dano ou erro de contagem.
Fluxo da Criação Manual:
O operador ou gestor acessa a tela "Criação Manual de Reabastecimento".
Na tela, é possível filtrar e selecionar:
Item (SKU)
Origem (Transfer ou Buffer)
Destino (Buffer ou Picking)
Após preencher os campos obrigatórios, o usuário confirma a criação da tarefa.
O WCS registra a solicitação e insere a nova tarefa na fila de reabastecimentos pendentes, com indicação de prioridade e tipo de origem.
Os operadores logados nos postos responsáveis pelo reabastecimento visualizam a nova tarefa em tempo real e podem iniciá-la pelo coletor.
Esse processo garante que a operação tenha flexibilidade para agir de forma proativa, sem depender exclusivamente das regras automáticas, mantendo o controle e rastreabilidade de todas as movimentações.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Fluxo de Reabastecimento com Origem no Transfer  
**Score:** — (semantico) | **ID:** 9258cf5328df9cf4

Quando a origem do reabastecimento é o Transfer, é obrigatória a execução do processo de decanting antes da movimentação.
Etapas do Decanting
O decanting consiste na transferência dos itens de uma ou mais caixas (ILPNs) do Transfer para bins, garantindo organização e rastreabilidade. O processo contempla as seguintes regras e ações:
Adicionar múltiplas ILPNs a uma única bin
Permitido apenas se todas as ILPNs forem do mesmo SKU e lote.
Garante consolidação correta dos itens.
Adicionar uma única ILPN a duas ou mais bins
Necessário acionar a flag de divisão no sistema.
O operador informa a quantidade a ser migrada para a nova bin.
O estoque do Transfer é atualizado automaticamente.
Regras de Consolidação
Somente ILPNs com mesmo SKU e lote podem ser consolidadas na mesma bin.
Identificação Única das Bins
Cada bin possui código único, garantindo controle e rastreabilidade.
Execução do Reabastecimento (Transfer → Buffer ou Picking)
Após o decanting, o operador executa o reabastecimento seguindo o fluxo:
Leitura da posição de origem (Transfer).
Leitura de todas as caixas plásticas (bins) que serão movimentadas.
Leitura da posição de destino (Buffer ou Picking).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Fluxo de Reabastecimento com Origem no Buffer  
**Score:** — (semantico) | **ID:** c2ca25c7d0146249

Quando a origem é o Buffer, entende-se que o processo de decanting já foi realizado.
O operador executa o reabastecimento seguindo o fluxo:
Leitura da posição de origem (Buffer).
Leitura de todas as caixas plásticas (bins) que serão movimentadas.
Leitura da posição de destino (Picking).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Reabastecimento do Buffer para Posição de Picking  
**Score:** — (semantico) | **ID:** 183a784a6b38cbe8

Este processo movimenta itens do Transfer para o Buffer (Pulmão) e ou para as posições finais de picking, ou do Buffer para as posições finais de picking conforme necessidade operacional. A funcionalidade responsável por criar as tarefas de reabastecimento atua monitorando continuamente os níveis de estoque nas posições de picking e identificando necessidades com base em dois principais critérios: saldo abaixo do mínimo operacional e previsão de consumo a partir de ondas de separação já liberadas.
Quando uma dessas condições é atendida, o sistema avalia a disponibilidade de produtos no Transfer e, se não houver saldo suficiente, gera automaticamente uma tarefa de reabastecimento. Essa tarefa contém informações como o código do item (codInterno), a quantidade a ser movimentada, o lote, além da posição de origem e a posição de destino no endereço de picking de acordo coma integração 3.4 ST “Solicita Transfer”
A geração da tarefa pode ser disparada de forma automática, com base em regras configuradas no sistema, ou de forma manual, por meio de uma interface onde o operador ou gestor pode solicitar o reabastecimento de itens ou posições específicas. Todas as tarefas geradas são organizadas em uma fila e ficam disponíveis para execução pelos operadores logados nos postos responsáveis pela atividade.
Durante a execução, o operador utiliza coletor para iniciar a tarefa, realiza a coleta na posição de origem, transporta o item até o endereço de destino e conclui a operação com a leitura da posição de destino, garantindo o controle e rastreabilidade completa da movimentação.
Este tipo de reabastecimento é de responsabilidade do WCS que será feito via coletor disponibilizado pelo cliente.
Fluxo do Processo:
O WCS apresenta uma tela com todos os reabastecimentos pendentes entre posições de origem e posições de destino.
As informações exibidas incluem:
Item (codInterno);
Quantidade(qtd);
Endereço de destino(endColeta).
Caso a origem for do Buffer
O operador realiza, na sequência:
Leitura da posição de origem (Buffer);
Leitura do item (codInterno);
Leitura da posição de destino (Picking).
Confirma quantidade alocada
Caso a origem for do Transfer
O operador realiza, na sequência:
Leitura do item (codInterno);
Leitura da posição de destino (Picking).
Confirma quantidade alocada
