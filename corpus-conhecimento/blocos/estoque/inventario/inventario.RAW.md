# inventario.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Rastreabilidade de Conferência  
**Score:** — (nome-topico) | **ID:** 522065c478ffbf77

Cada ação de conferência realizada na estação de conferência será registrada, incluindo as seguintes informações:
Detalhamento das Informações pertinentes para a tela de rastreabilidade da conferência:
Pedido: Número do pedido associado à separação.
Volume: Volume do pedido ou caixa associada, garantindo que cada item seja rastreado individualmente.
Strings Lidas no Coletor: Cada leitura realizada pelo coletor será registrada. Essas strings incluem os códigos de barras dos produtos e das caixas.
Log de Erro: Caso ocorra um erro durante a conferência (como falha na leitura do código de barras, erro de quantidade ou erro de localização), o erro será registrado no sistema com uma mensagem de erro específica, permitindo rastrear a causa da falha.
Status de Erro: O status de cada operação será registrado. Caso algum erro ocorra, o status será marcado como erro, e o sistema precisará gerar uma notificação para os operadores.
Número único da Coleta: Código da Pega
Usuário que realizou a conferência: Usuário que realizou a conferência ou liderança que liberou o volume.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Controle de posições / Gerenciamento de estoque  
**Score:** — (nome-topico) | **ID:** 4c388fa50c3076a3

O sistema WCS será responsável pelo gerenciamento de estoque das posições de picking e de pulmão, as posições são controladas por lote, sendo assim, WCS precisará validar se o lote não está se repetindo desnecessariamente em diversas posições.
Para que o processo siga corretamente as regras de segurança do estoque, a baixa dos itens deverá ocorrer no momento da coleta no picking, e não durante a conferência. Isso significa que, assim que o operador realiza a separação conforme o fluxo estabelecido e o sistema WCS deverá registrar imediatamente a saída do estoque, garantindo a acuracidade em tempo real e evitando inconsistências entre o estoque físico e o sistema.
Como nesse processo vai ocorrer a baixa de estoque nos casos de cancelamento deverá criar um movimento alimentando o saldo na localização "ANÀLISE".
Essa abordagem assegura maior controle, reduz o risco de desvios, e permite que eventuais divergências sejam identificadas ainda na fase de separação, tornando o processo mais confiável e auditável desde a origem da movimentação.
Apenas no processo de Reabastecimento o WCS precisará validar a quantidade de estoque na posição para a tomada de decisão se deve repetir o lote em posições diferentes. A repetição de produto e lote em posições diferentes pode ocorrer em todas as áreas de picking, se houver a movimentação manual (decisão da operação).
Observação: É importante ressaltar que não é permitido alocar o mesmo item com o mesmo lote em mais de uma posição dentro da mesma estação do FlowRack. Mesmo que a operação tente realizar essa alteração manualmente, o sistema WCS irá bloquear automaticamente essa ação.
Todas as posições de picking devem ter o cadastro de estoque de segurança para que quando esse estoque seja atingido, seja informado na tela de reabastecimento para o operador realizar o processo de reabastecimento.
WCS deverá controlar as posições conforme a classificação dos produtos, como por exemplo, produtos de classificação de vidro, não devem ficar nas posições superiores dos flowracks. Segue abaixo tabela compartilhada pelo cliente:
WCS deverá considerar a quantidade dos produtos, somando a quantidade no pulmão e nas posições de picking do produto.
Nesta etapa deverá ter uma tela que mostre todas as movimentações possíveis dos produtos, por exemplo: Entrada, Saida e demais necessárias.
A tela deve fazer a ligação entre produto, lote, endereço, operador que realiza a coleta, data e horário, tipo de transação (Entrada ou Saída), quantidade

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Rastreabilidade do Estoque  
**Score:** — (nome-topico) | **ID:** db74c0c55a9d7543

A Rastreabilidade de Estoque no WCS funcionará como uma “conta bancária” do estoque, registrando de forma cronológica e auditável todas as entradas, saídas e movimentações que ocorrem com os produtos armazenados. Cada movimentação será tratada como uma transação financeira, possibilitando uma visão precisa do histórico completo dos itens.
Objetivo:
Permitir a consulta detalhada e rastreável de tudo o que aconteceu com determinado item, lote ou posição, garantindo transparência, controle operacional e suporte a auditorias.
Campos obrigatórios na tela:
ID Único da Movimentação.
Localização.
Tipo (PUT/PICK/Movimentação Velox/Pedido/)
Número do Documento/Pedido.
Item.
Lote.
Data.
Quantidade.
Coleta/Caixa (Para saídas via pedido de venda.
Usuário.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** 956386f9adc5f992

A auditoria de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todos os itens e posições alocados serão auditados, ou de forma parcial, onde o operador seleciona os itens, postos específicos ou endereços a serem auditados. Além disso, há a auditoria de posições vazias, garantindo que os endereços sem itens sejam verificados corretamente.
Auditoria Total:
No cenário de auditoria total, o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Total".
O WCS solicita que o operador leia todas as posições de estoque que possuem itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU dos itens presentes naquela posição.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no sistema.
Caso haja uma divergência o WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria.
O processo é finalizado quando o operador termina a auditoria de todas as posições e a quantidade de todos os itens foi registrada.
Auditoria Parcial
No cenário de auditoria parcial, o operador seleciona os itens específicos, postos ou endereços que ele deseja auditar.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Parcial".
O WCS apresenta uma lista de todos os itens alocados no estoque, postos ou endereços, exibindo a curva que o item pertence, a data da última movimentação além da última data de auditoria permitindo que o operador selecione os itens, postos ou endereços a serem auditados.
O operador pode usar uma opção de busca para facilitar a localização dos itens, postos ou endereços desejados.
Após selecionar os itens, postos ou endereços, o operador realiza a leitura do endereço onde os itens estão alocados.
O operador realiza a leitura do SKU dos itens vinculados ao endereço.
O operador conta a quantidade real de cada item e registra a quantidade auditada no sistema.
Caso haja uma divergência o WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria
O processo é finalizado quando todos os itens selecionados para auditoria foram verificados e as quantidades registradas.
Auditoria de Posições Vazias
A auditoria de posições vazias visa garantir que os endereços que não possuem itens alocados estejam corretamente identificados como vazios ou que eventuais alocações incorretas sejam corrigidas.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a aba "Auditoria de Endereços Vazios".
O operador se dirige ao endereço a ser auditado e realiza a leitura do código do endereço.
Se a posição estiver vazia, o operador confirma clicando na opção "Endereço Vazio" e realiza uma nova leitura do código do endereço para validar e concluir a auditoria daquela posição.
Caso a posição contenha itens, o operador realiza a leitura do SKU do(s) item(ns), conta a quantidade real e registra no sistema.
O WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria.
Considerações Importantes para Ambos os Cenários
Interface do WCS: O WCS deve apresentar uma interface intuitiva que permita ao operador navegar facilmente entre as posições de estoque e os itens a serem auditados, com opções claras para seleção de auditoria total, parcial e de endereços vazios.
Validação de Dados: O sistema WCS deverá validar as quantidades informadas durante a auditoria para garantir que a operação seja realizada corretamente. Em caso de divergências, o sistema gerará uma tarefa de ocorrência.
Relatórios: Após a conclusão de qualquer auditoria, o WCS deve gerar um relatório contendo as quantidades auditadas e os endereços verificados, e dar a opção para o operador imprimir esse relatório.
Flexibilidade de Auditoria: O operador deve ter a capacidade de alternar entre auditorias total, parcial e de endereços vazios conforme a necessidade operacional, garantindo que o processo seja flexível e adequado às exigências do momento.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** e2bd3d6d7a20b021

A auditoria de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todos os itens e posições alocados serão auditados, ou de forma parcial, onde o operador seleciona os itens, postos específicos ou endereços a serem auditados. Além disso, há a auditoria de posições vazias, garantindo que os endereços sem itens sejam verificados corretamente.
Auditoria Total:
No cenário de auditoria total, o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Total".
O WCS solicita que o operador leia todas as posições de estoque que possuem itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU dos itens presentes naquela posição.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no sistema.
Caso haja uma divergência o WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria.
O processo é finalizado quando o operador termina a auditoria de todas as posições e a quantidade de todos os itens foi registrada.
Auditoria Parcial
No cenário de auditoria parcial, o operador seleciona os itens específicos, postos ou endereços que ele deseja auditar.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Parcial".
O WCS apresenta uma lista de todos os itens alocados no estoque, postos ou endereços, exibindo a curva que o item pertence, a data da última movimentação além da última data de auditoria permitindo que o operador selecione os itens, postos ou endereços a serem auditados.
O operador pode usar uma opção de busca para facilitar a localização dos itens, postos ou endereços desejados.
Após selecionar os itens, postos ou endereços, o operador realiza a leitura do endereço onde os itens estão alocados.
O operador realiza a leitura do SKU dos itens vinculados ao endereço.
O operador conta a quantidade real de cada item e registra a quantidade auditada no sistema.
Caso haja uma divergência o WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria
O processo é finalizado quando todos os itens selecionados para auditoria foram verificados e as quantidades registradas.
Auditoria de Posições Vazias
A auditoria de posições vazias visa garantir que os endereços que não possuem itens alocados estejam corretamente identificados como vazios ou que eventuais alocações incorretas sejam corrigidas.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a aba "Auditoria de Endereços Vazios".
O operador se dirige ao endereço a ser auditado e realiza a leitura do código do endereço.
Se a posição estiver vazia, o operador confirma clicando na opção "Endereço Vazio" e realiza uma nova leitura do código do endereço para validar e concluir a auditoria daquela posição.
Caso a posição contenha itens, o operador realiza a leitura do SKU do(s) item(ns), conta a quantidade real e registra no sistema.
O WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria.
Considerações Importantes para Ambos os Cenários
Interface do WCS: O WCS deve apresentar uma interface intuitiva que permita ao operador navegar facilmente entre as posições de estoque e os itens a serem auditados, com opções claras para seleção de auditoria total, parcial e de endereços vazios.
Validação de Dados: O sistema WCS deverá validar as quantidades informadas durante a auditoria para garantir que a operação seja realizada corretamente. Em caso de divergências, o sistema gerará uma tarefa de ocorrência.
Relatórios: Após a conclusão de qualquer auditoria, o WCS deve gerar um relatório contendo as quantidades auditadas e os endereços verificados, e dar a opção para o operador imprimir esse relatório.
Flexibilidade de Auditoria: O operador deve ter a capacidade de alternar entre auditorias total, parcial e de endereços vazios conforme a necessidade operacional, garantindo que o processo seja flexível e adequado às exigências do momento.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** b2b7e87ab50dcf99

A auditoria de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todos os itens e posições alocados serão auditados, ou de forma parcial, onde o operador seleciona os itens, postos específicos ou endereços a serem auditados. Além disso, há a auditoria de posições vazias, garantindo que os endereços sem itens sejam verificados corretamente.
Auditoria Total:
No cenário de auditoria total, o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Total".
O WCS solicita que o operador leia todas as posições de estoque que possuem itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU dos itens presentes naquela posição.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no sistema.
Caso haja uma divergência o WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria.
O processo é finalizado quando o operador termina a auditoria de todas as posições e a quantidade de todos os itens foi registrada.
Auditoria Parcial
No cenário de auditoria parcial, o operador seleciona os itens específicos, postos ou endereços que ele deseja auditar.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Parcial".
O WCS apresenta uma lista de todos os itens alocados no estoque, postos ou endereços, exibindo a curva que o item pertence, a data da última movimentação além da última data de auditoria permitindo que o operador selecione os itens, postos ou endereços a serem auditados.
O operador pode usar uma opção de busca para facilitar a localização dos itens, postos ou endereços desejados.
Após selecionar os itens, postos ou endereços, o operador realiza a leitura do endereço onde os itens estão alocados.
O operador realiza a leitura do SKU dos itens vinculados ao endereço.
O operador conta a quantidade real de cada item e registra a quantidade auditada no sistema.
Caso haja uma divergência o WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria
O processo é finalizado quando todos os itens selecionados para auditoria foram verificados e as quantidades registradas.
Auditoria de Posições Vazias
A auditoria de posições vazias visa garantir que os endereços que não possuem itens alocados estejam corretamente identificados como vazios ou que eventuais alocações incorretas sejam corrigidas.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a aba "Auditoria de Endereços Vazios".
O operador se dirige ao endereço a ser auditado e realiza a leitura do código do endereço.
Se a posição estiver vazia, o operador confirma clicando na opção "Endereço Vazio" e realiza uma nova leitura do código do endereço para validar e concluir a auditoria daquela posição.
Caso a posição contenha itens, o operador realiza a leitura do SKU do(s) item(ns), conta a quantidade real e registra no sistema.
O WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria.
Considerações Importantes para Ambos os Cenários
Interface do WCS: O WCS deve apresentar uma interface intuitiva que permita ao operador navegar facilmente entre as posições de estoque e os itens a serem auditados, com opções claras para seleção de auditoria total, parcial e de endereços vazios.
Validação de Dados: O sistema WCS deverá validar as quantidades informadas durante a auditoria para garantir que a operação seja realizada corretamente. Em caso de divergências, o sistema gerará uma tarefa de ocorrência.
Relatórios: Após a conclusão de qualquer auditoria, o WCS deve gerar um relatório contendo as quantidades auditadas e os endereços verificados, e dar a opção para o operador imprimir esse relatório.
Flexibilidade de Auditoria: O operador deve ter a capacidade de alternar entre auditorias total, parcial e de endereços vazios conforme a necessidade operacional, garantindo que o processo seja flexível e adequado às exigências do momento.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** 7c0bdf020dfc2892

A auditoria de estoque tem como objetivo garantir a precisão das informações mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todas as posições serão auditadas, ou de forma parcial, onde são auditadas apenas posições.
Antes do início de qualquer auditoria, é obrigatória a criação prévia da tarefa por um usuário com perfil de supervisor.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Regras de Restrição (Mix e Segregação)  
**Score:** — (semantico) | **ID:** 9ced75e479ce825f

Para garantir a integridade da carga, a cubagem respeita a compatibilidade entre famílias de produtos (campo categoria da integração).
Regra: O sistema segue obrigatoriamente a Matriz de Fragilidade para não misturar famílias distintas no mesmo volume.
Exemplo Prático: Um pedido contendo "Discos de Freio" (Pesado/Metal) e "Juntas de Cabeçote" (Leve/Frágil) gerará volumes separados, evitando que o item pesado danifique o item frágil durante o transporte na esteira (será definido pela Matriz de Fragilidade).

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Inventário de Estoque  
**Score:** — (semantico) | **ID:** 1d68819c9d586d60

O inventário de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total (auditoria de todos os endereços) ou de forma parcial (auditoria de itens/endereços selecionados pelo operador).

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Inventário Total  
**Score:** — (semantico) | **ID:** cd2f99a268a52e7f

No cenário de auditoria total, o supervisor deve criar a auditoria total, e o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Total”.
Seleciona qual auditoria ele irá realizar de acordo com as auditorias criadas
O WCS solicita que o operador realize a leitura de todas as posições de estoque que possuam itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU de todos os itens ou de somente um item e informa a quantidade de acordo com a auditoria criada.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; e
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços em que tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência (diferença) entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Inventário Cíclico  
**Score:** — (semantico) | **ID:** b2a9f8794d1ddb01

No cenário de Inventário Cíclico, o supervisor seleciona itens ou posições específicas que ele deseja auditar. O sistema terá opção de busca para facilitar a localização dos itens desejados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do Processo – 1ª contagem
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Cíclico”.
O WCS apresenta uma lista de todas os Inventários Cíclicos criados, permitindo que o operador selecione qual ele quer iniciar.
o WCS exibe os endereços a serem visitados para a auditoria.
O operador realiza a leitura do primeiro endereço.
O operador realiza a leitura do SKU de todos os itens presentes naquela posição.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Caso seja selecionado um endereço, o sistema deverá realizar a auditoria apenas da posição onde o processo foi iniciado. Para as demais posições nas quais o item esteja alocado, o sistema deverá considerar o saldo sistêmico atual de cada posição para fins de envio da integração de ajuste de inventário.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; 0065
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços onde tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - GEMINI.docx`  
**Heading:** Priorização - OK  
**Score:** — (semantico) | **ID:** 44fc2ab205111ef7

Situação Atual: A prioridade de pedidos enviada pelo SAP no JSON não é atualmente processada ou respeitada pelo WCS. A regra de priorização da Invent é complexa e executada em tempo real.
Decisões:
A priorização manual será MANTIDA na interface do sistema Invent para permitir o tratamento de exceções operacionais.
A lógica inicial de prioridade definida pelo SAP na criação das OTs será mantida. Não haverá repriorização de OTs já criadas via integração entre SAP e Invent, devido à alta complexidade de desenvolvimento.
No chão de fábrica, as caixas são confirmadas pelo critério FIFO (First-In, First-Out) da criação da ordem.

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** KPIs do Período  
**Score:** — (semantico) | **ID:** 090327369998fce5

A Tela 2 exibe cinco KPIs no painel lateral, calculados sobre o período filtrado: total de eventos de rampa cheia, rampa mais crítica (com quantidade de eventos), tempo total bloqueado (soma de todas as durações de eventos no período), eficiência média geral e total de volumes impactados. O KPI “Tempo total bloqueado” é exclusivo da Tela 2 — não aparece na Tela 1, pois depende do histórico completo do período filtrado.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário - Formulário.docx`  
**Heading:** Inventário de Estoque  
**Score:** — (semantico) | **ID:** 7ed828e63f255d1b

O inventário de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total (auditoria de todos os endereços) ou de forma parcial (auditoria de itens/endereços selecionados pelo operador).

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário - Formulário.docx`  
**Heading:** Inventário Total  
**Score:** — (semantico) | **ID:** 9aa786d5db2710dd

No cenário de auditoria total, o supervisor deve criar a auditoria total, e o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Total”.
Seleciona qual auditoria ele irá realizar de acordo com as auditorias criadas
O WCS solicita que o operador realize a leitura de todas as posições de estoque que possuam itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU de todos os itens ou de somente um item e informa a quantidade de acordo com a auditoria criada.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; e
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços em que tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Claud considerar isso: Saldo Sistêmico pré contagem
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência (diferença) entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário - Formulário.docx`  
**Heading:** Inventário Cíclico  
**Score:** — (semantico) | **ID:** 71210f1a68cfa350

No cenário de Inventário Cíclico, o supervisor seleciona itens ou posições específicas que ele deseja auditar. O sistema terá opção de busca para facilitar a localização dos itens desejados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do Processo – 1ª contagem
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Cíclico”.
O WCS apresenta uma lista de todas os Inventários Cíclicos criados, permitindo que o operador selecione qual ele quer iniciar.
o WCS exibe os endereços a serem visitados para a auditoria.
O operador realiza a leitura do primeiro endereço.
O operador realiza a leitura do SKU de todos os itens presentes naquela posição.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Caso seja selecionado um endereço, o sistema deverá realizar a auditoria apenas da posição onde o processo foi iniciado. Para as demais posições nas quais o item esteja alocado, o sistema deverá considerar o saldo sistêmico atual de cada posição para fins de envio da integração de ajuste de inventário.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; 0065
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços onde tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Claude considerar isso Saldo sistêmico pré contagem
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário1.docx`  
**Heading:** Inventário de Estoque  
**Score:** — (semantico) | **ID:** cdf0ffff692cc204

O inventário de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total (auditoria de todos os endereços) ou de forma parcial (auditoria de itens/endereços selecionados pelo operador).

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário1.docx`  
**Heading:** Inventário Total  
**Score:** — (semantico) | **ID:** 91b42f4d79f75dd4

No cenário de auditoria total, o supervisor deve criar a auditoria total, e o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Total”.
Seleciona qual auditoria ele irá realizar de acordo com as auditorias criadas
O WCS solicita que o operador realize a leitura de todas as posições de estoque que possuam itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU de todos os itens ou de somente um item e informa a quantidade de acordo com a auditoria criada.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; e
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços em que tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência (diferença) entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário1.docx`  
**Heading:** Inventário Cíclico  
**Score:** — (semantico) | **ID:** 3a76901c5e88a897

No cenário de Inventário Cíclico, o supervisor seleciona itens ou posições específicas que ele deseja auditar. O sistema terá opção de busca para facilitar a localização dos itens desejados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do Processo – 1ª contagem
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Cíclico”.
O WCS apresenta uma lista de todas os Inventários Cíclicos criados, permitindo que o operador selecione qual ele quer iniciar.
o WCS exibe os endereços a serem visitados para a auditoria.
O operador realiza a leitura do primeiro endereço.
O operador realiza a leitura do SKU de todos os itens presentes naquela posição.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Caso seja selecionado um endereço, o sistema deverá realizar a auditoria apenas da posição onde o processo foi iniciado. Para as demais posições nas quais o item esteja alocado, o sistema deverá considerar o saldo sistêmico atual de cada posição para fins de envio da integração de ajuste de inventário.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; 0065
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços onde tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** ebd141e5ee0e5940

ESPECIFICAÇÃO DE SOFTWARE
PROJETO BELEZA
REV. 5
Apresentamos a seguir a especificação de software referente à funcionalidade de Inventário de Estoque para o sistema WCS do projeto Beleza – I25.9043 (C&A).
Agradecemos antecipadamente pela oportunidade e nos colocamos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Criação e Configuração do Inventário  
**Score:** — (semantico) | **ID:** 66cf1f982b5aaebc

A criação dos inventários é uma atividade restrita ao nível de acesso. Por meio da tela de Inventário de Estoque do WCS, o supervisor configura os parâmetros do inventário antes de disponibilizá-lo para execução pelos operadores. A funcionalidade busca um equilíbrio entre controle e simplicidade operacional, evitando configurações excessivamente complexas sem abrir mão da segurança do processo.
Fluxo de criação do inventário
O supervisor realiza login no WCS e acessa a tela de Inventário de Estoque.
Seleciona a modalidade do inventário a ser criado: Total ou Cíclico.
Para o Inventário Cíclico, seleciona os itens ou as posições específicas que deseja auditar, utilizando a opção de busca disponível para facilitar a localização. Para o Inventário Total, o escopo abrange automaticamente todas as posições com itens alocados.
Define a regra de bipagem que os operadores deverão seguir: bipar item a item, ou informar a quantidade e bipar o item uma única vez.
Informa a quantidade de operadores que participarão do inventário. Com base nessa informação, o WCS dividirá automaticamente o escopo em seções.
Confirma a criação. O inventário passa a ficar disponível na lista de inventários para execução pelos operadores designados.
Validações na criação
Para garantir a integridade do processo, o WCS aplica validações simples no momento da criação:
Um inventário Total somente poderá ser iniciado com a operação parada e sem reserva de saldo nas posições; o sistema sinaliza essa pré-condição ao supervisor.
Não é permitido criar um inventário sem ao menos uma posição ou item no escopo (no caso do Cíclico).
A quantidade de operadores informada deve ser maior que zero, para que a divisão em seções seja possível.
Essas validações compõem um meio-termo eficiente e seguro: são suficientes para evitar inconsistências operacionais relevantes, sem introduzir complexidade desnecessária no fluxo de criação.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Inventário de Estoque  
**Score:** — (semantico) | **ID:** 4152c0ab7817eccb

O Inventário de Estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total (auditoria de todos os endereços) ou de forma parcial/cíclica (auditoria de itens ou endereços selecionados pelo supervisor).
Independentemente da modalidade, o processo é conduzido por meio de coletor Android integrado ao WCS e segue o princípio de não indução da contagem: o sistema não exibe ao operador o SKU esperado nem a quantidade sistêmica da posição auditada.
Snapshot do saldo sistêmico
Para fins de comparação com a contagem física, o saldo sistêmico é congelado (snapshot) pelo WCS. No Inventário Total, o snapshot é global e ocorre na criação do inventário, uma vez que esta modalidade é iniciada com a operação totalmente parada e sem reserva de saldo. No Inventário Cíclico, o snapshot é por posição, no momento da leitura do endereço pelo operador, preservando a precisão da comparação em ambiente operacional ativo.
Divisão do trabalho entre operadores
A divisão do escopo entre operadores é híbrida: o WCS parte da divisão por zona física e equaliza a carga de trabalho quando identifica que uma zona possui peso significativamente maior que as demais, sempre respeitando o layout para evitar o cruzamento entre operadores. Essa abordagem combina o respeito à topologia do armazém com o equilíbrio de carga.
Identidade do operador entre contagens
O bloqueio do mesmo operador entre contagens é configurável por parâmetro. O comportamento padrão recomendado é impedir que a 2ª contagem de uma posição seja feita por quem realizou a 1ª, reduzindo o viés cognitivo; quando não houver operadores suficientes, o parâmetro permite flexibilizar essa regra.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Inventário Total  
**Score:** — (semantico) | **ID:** fc75649e9e92f957

No cenário de auditoria total, o supervisor cria a auditoria total, e o operador realiza a verificação de todas as posições de estoque que possuem itens alocados. Esta modalidade é iniciada com a operação totalmente parada e sem reserva de saldo nas posições.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, acessa a tela de Inventário de Estoque e seleciona a opção 'Inventário Total'.
Seleciona qual auditoria irá realizar, de acordo com as auditorias criadas.
O WCS solicita que o operador realize a leitura de todas as posições de estoque que possuam itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU de todos os itens, ou de somente um item, e informa a quantidade conforme a auditoria criada.
Regra de não indução: o WCS não exibe detalhes do endereço auditado, como SKU esperado ou quantidade sistêmica.
Posição vazia: caso o operador encontre uma posição vazia, deve bipar o endereço três vezes, e o sistema exibe um aviso de posição vazia.
Ao final da 1ª contagem, o WCS disponibiliza um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema, permitindo impressão e exportação em Excel e PDF. Caso exista divergência em qualquer endereço, o WCS exibe um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
Contempla somente os endereços em que tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo segue o mesmo padrão da 1ª contagem, sem exibição de saldo sistêmico.
Ao final, o WCS disponibiliza um novo relatório de conciliação.
Caso ainda exista divergência, o WCS exibe pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e contempla somente os endereços que permaneceram divergentes após a 2ª contagem. Ao final, o WCS pergunta ao supervisor se será necessária uma validação final direcionada em um ou mais endereços específicos:
Se não: o sistema disponibiliza o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS exibe a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais devem passar por validação final.
Validação Final
A validação final é uma etapa de fechamento conduzida pelo supervisor, e não pelo operador. Por ter caráter analítico e decisório, nesta etapa o saldo sistêmico é exibido, permitindo ao supervisor uma análise mais direcionada, com plena visibilidade do histórico de contagens.
Na tela do relatório, ou na tela de encerramento do inventário, o supervisor poderá aceitar e confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Inventário Cíclico  
**Score:** — (semantico) | **ID:** f7195876a5d2973b

No cenário de Inventário Cíclico, o supervisor seleciona itens ou posições específicas que deseja auditar, e o sistema disponibiliza opção de busca para facilitar a localização dos itens desejados. Diferentemente do Inventário Total, o Cíclico pode ocorrer com a operação em andamento.
Freeze de posições durante o Cíclico
Como a operação permanece ativa, o bloqueio das posições auditadas é feito por zona/seção: a seção designada ao operador permanece bloqueada enquanto ele realiza a contagem, equilibrando consistência e produtividade. Considera-se zona as áreas da automação (linha de picking ou museu) e seção os subagrupamentos dentro dessas áreas (postos de coleta). No Inventário Total este bloqueio não se aplica, pois a operação está totalmente parada.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher entre bipar item a item ou informar a quantidade e bipar o item uma única vez, e informar quantos operadores participarão, para que o WCS divida o trabalho em seções.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, acessa a tela de Inventário de Estoque e seleciona a opção 'Inventário Cíclico'.
O WCS apresenta a lista de todos os Inventários Cíclicos criados, permitindo que o operador selecione qual deseja iniciar.
O WCS exibe os endereços a serem visitados para a auditoria.
O operador realiza a leitura do primeiro endereço e, em seguida, a leitura do SKU de todos os itens presentes naquela posição.
Regra de não indução: o WCS não exibe SKU esperado ou quantidade sistêmica do endereço auditado.
Posição vazia: o operador bipa o endereço três vezes, e o sistema exibe aviso de posição vazia.
Quando for selecionado um endereço cujo SKU também exista em outras posições não incluídas no escopo, o WCS alerta o supervisor e permite decidir se inclui ou não as demais posições. Caso o supervisor opte por não incluir todas, o sistema mantém o saldo sistêmico atual de cada posição não selecionada para fins de envio da integração de ajuste de inventário.
O fluxo de 2ª contagem, 3ª contagem e validação final segue o mesmo padrão descrito para o Inventário Total. Ao final, na tela do relatório ou de encerramento, o supervisor poderá aceitar e confirmar o inventário para que o WCS envie ao WMS a integração de ajuste com o delta de divergência.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Regras Complementares de Operação  
**Score:** — (semantico) | **ID:** 7a59940e625105b2

Além do fluxo principal de contagem, o WCS observará as regras abaixo para tratamento de situações de exceção durante o inventário.
Conflito entre Recall e Inventário
O Recall tem prioridade sobre o Inventário. Ao ser disparado em uma posição sob inventário, o WCS suspende o inventário daquela posição e libera o recall, registrando log da interrupção e marcando a posição como 'não auditada por recall' para reauditoria posterior.
Tratamento de item órfão
Caso o operador encontre em uma posição um SKU que sistemicamente não deveria estar ali, e o item bipado não estiver cadastrado na posição, o sistema bloqueia a operação e exige autenticação do supervisor para prosseguir, evitando a criação de saldo indevido por erro de bipagem.
Cancelamento de inventário
O cancelamento de um inventário em andamento exige justificativa obrigatória, por meio de campo livre ou seleção de motivos pré-definidos, garantindo rastreabilidade e auditoria.
Timeout de inventário aberto
O inventário não expira automaticamente. Após determinado período sem atividade, o sistema gera alerta visual e e-mail ao supervisor, mas o inventário permanece aberto, evitando o risco de perda de progresso em operações que podem se estender além do tempo médio de conclusão.
Retenção dos logs e do histórico de inventário
Os registros lógicos do inventário (identificador do inventário, posição, operador, tipo do evento, timestamp, saldo sistêmico e quantidade física registrada) serão mantidos pelo período mínimo de 3 (três) anos a partir da data de criação.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Referência de Relatório do Inventário  
**Score:** — (semantico) | **ID:** 49838201c2e089cc

Ao final do processo, o WCS disponibilizará um relatório completo do inventário, disponível em duas versões: analítica, com o máximo de detalhe estratificada por endereço, e sintética, resumida por SKU. Ambas permitirão impressão e exportação em Excel e PDF. O relatório contemplará, no mínimo, o saldo sistêmico pré-contagem, os resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável), a divergência estratificada por contagem, a identificação de qual contagem gerou cada registro, o usuário do operador responsável por cada contagem e a divergência consolidada.
A tabela abaixo apresenta a referência dos campos previstos para o relatório do inventário, com sua origem e descrição.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ MANHATTAM - Tradução AU06 - Pack ILPN Message.docx`  
**Heading:** Premissas  
**Score:** — (semantico) | **ID:** f47cdc0f83fff1d5

O Pack ILPN será comunicado ao MAWM através do protocolo REST API HTTPS.
Todas as integrações de gestão de inventário com o WCS são Inbound (ou seja, enviadas do WCS e recebidas no MAWM).
O WCS não enviará confirmação (acknowledge) desta mensagem, independentemente do sucesso/falha na comunicação; todas as mensagens de erro serão encontradas no WM.
No caso de necessidade de reprocessar esta mensagem para o WCS, os usuários podem fazer isso conforme o padrão através da UI do MHE journal, filtrando pelos pedidos/datetime desejados e reprocessando 100 mensagens por vez.
O WM não realizará ajustes em quantidades alocadas ou To Be Filled (a preencher).
Inventário de item quando PBL é baseado em 1 item por active location (localização ativa).

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - Descritivo Funcional Aditivo - Pallets Com Ocorrências e liberação de etiquetas.docx`  
**Heading:** Contexto da Alteração  
**Score:** — (semantico) | **ID:** 6f1c46aa68856260

Um pallet pode acumular ocorrências durante a coleta — divergências de quantidade, avarias ou não conformidades — que impedem sua integração ao WMS. Sem tratamento sistêmico, esses pallets causam dois problemas principais:
Bloqueio indevido da liberação da próxima matriz, pois seus volumes pendentes são contabilizados junto aos demais;
Permanência em área produtiva sem sinalização clara, gerando acúmulo de retrabalho operacional.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF25 – Gestão de inventário  
**Score:** — (semantico) | **ID:** 44b1ea2f4d774c55

No WCS Velox deve ser possivel consultar os dados de todos os pallets armazenados através da lista de inventario, exibindo as informações dos produtos armazenados em cada zona, como sua data de expiração, seu status e sua localização.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF29 – Configuração dos modos de operação  
**Score:** — (semantico) | **ID:** eab139ad668a01bd

O WCS Velox deve permitir a alteração do modo de operação do mesmo, alterando entre contingência, online e inventario.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Regra de entrada em inventario  
**Score:** — (semantico) | **ID:** 0f9264a1a8249963

Quando o sistema está em modo de inventario nenhum pallet pode passar pelo portal de entrada. O tratamento é feito diretamente pelo PLC que impede a entrada dos pallets.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Chegada a um ponto de decisão  
**Score:** — (semantico) | **ID:** 4bac1a02b0609f34

Esta ação é gerada toda vez que a carga chegar a um ponto de decisão de um transfer de berço de entrada. Tal ação necessita do processamento do WCS para decisão do próximo destino da carga. Para o armazém da BR Foods Rio Verde consideram-se os pontos de decisão 1, 3 e 7 para os berços de entrada inferiores, e os pontos de decisão 7, 4 e 1 para os berços de entrada superiores e mais a mesa giratória 0094 no transportador inferior.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Chegada a um ponto de decisão”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF25 – Gestão de inventário  
**Score:** — (semantico) | **ID:** e5c938193c17c718

No WCS Velox deve ser possivel consultar os dados de todos os pallets armazenados através da lista de inventario, exibindo as informações dos produtos armazenados em cada zona, como sua data de expiração, seu status e sua localização.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF29 – Configuração dos modos de operação  
**Score:** — (semantico) | **ID:** ce34deae5b0f4c9d

O WCS Velox deve permitir a alteração do modo de operação do mesmo, alterando entre contingência, online e inventario.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Regra de entrada em inventario  
**Score:** — (semantico) | **ID:** f7f36138c5eea9e4

Quando o sistema está em modo de inventario nenhum pallet pode passar pelo portal de entrada. O tratamento é feito diretamente pelo PLC que impede a entrada dos pallets.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Chegada a um ponto de decisão  
**Score:** — (semantico) | **ID:** 419028ee0aa5cb8e

Esta ação é gerada toda vez que a carga chegar a um ponto de decisão de um transfer de berço de entrada. Tal ação necessita do processamento do WCS para decisão do próximo destino da carga. Para o armazém da BR Foods Rio Verde consideram-se os pontos de decisão 1, 3 e 7 para os berços de entrada inferiores, e os pontos de decisão 7, 4 e 1 para os berços de entrada superiores e mais a mesa giratória 0094 no transportador inferior.
A tabela abaixo detalha as TAGs de controle e dados que são lidos para a geração da ação de “Chegada a um ponto de decisão”.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** 69d3aa038bbb25a0

A auditoria de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todos os itens e posições alocados serão auditados, ou de forma parcial, onde o operador seleciona os itens ou postos específicos a serem auditados. Além disso, há a auditoria de posições vazias, garantindo que os endereços sem itens sejam verificados corretamente.
Auditoria Total:
No cenário de auditoria total, o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Total".
O WCS solicita que o operador leia todas as posições de estoque que possuem itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU dos itens presentes naquela posição.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no sistema.
Caso haja uma divergência o WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria.
O processo é finalizado quando o operador termina a auditoria de todas as posições e a quantidade de todos os itens foi registrada.
Auditoria Parcial
No cenário de auditoria parcial, o operador seleciona os itens específicos ou que ele deseja auditar.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Parcial".
O WCS apresenta uma lista de todos os itens alocados no estoque, exibindo a curva que o item pertence, a data da última movimentação além da última data de auditoria permitindo que o operador selecione os itens a serem auditados.
O operador pode usar uma opção de busca para facilitar a localização dos itens desejados.
Após selecionar os itens, o operador realiza a leitura do endereço onde os itens estão alocados.
O operador realiza a leitura do SKU dos itens selecionados.
O operador conta a quantidade real de cada item e registra a quantidade auditada no sistema.
Caso haja uma divergência o WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria
O processo é finalizado quando todos os itens selecionados para auditoria foram verificados e as quantidades registradas.
Auditoria de Posições Vazias
A auditoria de posições vazias visa garantir que os endereços que não possuem itens alocados estejam corretamente identificados como vazios ou que eventuais alocações incorretas sejam corrigidas.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a aba "Auditoria de Endereços Vazios".
O operador se dirige ao endereço a ser auditado e realiza a leitura do código do endereço.
Se a posição estiver vazia, o operador confirma clicando na opção "Endereço Vazio" e realiza uma nova leitura do código do endereço para validar e concluir a auditoria daquela posição.
Caso a posição contenha itens, o operador realiza a leitura do SKU do(s) item(ns), conta a quantidade real e registra no sistema.
O WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da auditoria.
Considerações Importantes para Ambos os Cenários
Interface do WCS: O WCS deve apresentar uma interface intuitiva que permita ao operador navegar facilmente entre as posições de estoque e os itens a serem auditados, com opções claras para seleção de auditoria total, parcial e de endereços vazios.
Validação de Dados: O sistema WCS deverá validar as quantidades informadas durante a auditoria para garantir que a operação seja realizada corretamente. Em caso de divergências, o sistema gerará uma tarefa de ocorrência.
Relatórios: Após a conclusão de qualquer auditoria, o WCS deve gerar um relatório contendo as quantidades auditadas e os endereços verificados, e dar a opção para o operador imprimir esse relatório.
Flexibilidade de Auditoria: O operador deve ter a capacidade de alternar entre auditorias total, parcial e de endereços vazios conforme a necessidade operacional, garantindo que o processo seja flexível e adequado às exigências do momento.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Inventário do Estoque  
**Score:** — (semantico) | **ID:** 59ed2a84209a5a92

Recebimento da Foto do Estoque
O WCS enviará a "Foto do Estoque" do AA.
Comparação com o Estoque SAP
O saldo do WCS será comparado com o saldo registrado no SAP.
Se os saldos forem iguais, o inventário será aprovado automaticamente.
Tratamento de Divergências
Caso haja diferença entre os saldos, será necessária uma nova análise do canal.
Será feita a rastreabilidade da divergência, verificando possíveis causas, como por exemplo caixas do canal que foram parar na área de rejeito.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** Contagem das Posições  
**Score:** — (nome-topico) | **ID:** 7de6edfe6e5b9bd8

Contagem para posição AA
As contagens serão efetuadas no SAP via coletor de dados.
Após as contagens, o SAP irá enviar IDOC para WCS atualizar as quantidades dos canais/Buffers. A tratativa das diferenças de saldos do SAP, serão ajustadas no WCS com as informações enviadas via IDOC após a finalização das contagens no coletor.
Contagens de Posições Picking e Buffer AA
A contagem dos canais de PK, Buffer e Pulmão do AA será com coletor de dados;
As posições de Buffer e Pulmão, serão obrigatoriamente administradas por UD/LPN;
As posições do PK, Buffer e Pulmão do AA serão espelhadas no SAP com os parâmetros de tipo de deposito específico para cada tipo de posição; 112,113,122, 212, 213, 222...
Quando as posições do AA estiverem cadastradas no SAP e no WCS como Picking e SEM necessidade de administração de UD, será controlada a capacidade para como blocada, ou seja, se o sku da posição é de 50cx, na contagem identificar 3pl, será contado 150cx em uma única vez criando OT da totalidade;
Quando as posições do AA estiverem cadastradas no SAP como Picking e COM administração de UD, será controlada a capacidade por palete, ou seja, um PL/SKU podendo apenas ter mix de lotes (fase 2)
As posições de Buffer (Nível 4 e 5) será definida no SAP como aéreo, assim, regidas por UD e sua contagem será efetuada conforme a UD de cada . Atualmente as posições de Buffer são apenas únicas palete/SKU, podendo haver mix de lotes;
Para contagens com coletor no AA, antecipadamente, o sistema WCS deve permitir exportar em  CSV e conciliar com o SAP para validação e guarda de informação. Será importado no SAP para comparar e checar se não há atividades pendentes nos canais pelo WCS, seguem campos:
Observação: O WCS não pode exportar o arquivo se houver atividades pendentes.
Contagens e Ajustes Estoque para Inventários (Meio e FIM)
A cada movimento de confirmação de armazenagem, DE x PARA, Housekeeping, incorporações etc. dentro do SAP, automaticamente será enviado IDOC com essas informações para atualização do banco do WCS;
Após finalização das contagens via coletor e os envios dos IDOC de atualização do estoque, o WCS, efetuará os ajustes conforme SAP, onde será gerado um arquivo CSV que será importado no SAP para comparativo e aprovação dos inventários.
O CSV mencionado será um documento oficial para ser adicionado ao processo de inventário da CIA.
As divergências serão tratadas dentro do SAP com possíveis reconferências auditadas pelas equipes de auditoria.
Data Juliana
• O lote é composto pela identificação da unidade fabril, ano e dia do ano
• Lote 3315005 (Data Juliana) onde: 331 identificação da unidade fabril,5 é o ano (2025) e 005 é o dia (1 a 366) ou seja 05/Jan/2025
HouseKeeping
O sistema Velox precisa verificar se no AC (Pulmão) tem lotes mais velhos do SKu que está no AA nas posições abastecida por empilhadeiras.
Se existir SKU com lote mais velho no Pulmão do que no canal/Buffer do AA, o Velox deverá informar no relatório do Housekeeping a existência do SKU nessa área(pulmão), a decisão de retirada do SKU mais novo do canal ficará a critério do User.
Caso o usuário avalie não retirar o mais novo do canal, ele vai liberar um novo canal parametrizando o SKU para esse, e executar o ressuprimento manualmente do Pulmão para canal AA. O sistema deve mostrar os canais do AA onde ele poderá escolher um canal vazio ou realizar a troca de um determinado item por este do lote mais antigo.
Se o usuário avaliar abrir um canal para movimentar do AC para AA, o usuário selecionar a posição mais velha do AC para AA e WCS enviar um IDOC para o SAP.
O sistema Velox precisa verificar se no AC tem lotes mais velhos do SKu que está no AA (Canal, Buffer – Robô e Pulmão - Operador empilhadeira)
Regras para esta ação:
Se existir SKU com lote mais velho no AC  do que no AA (Canal, Buffer, Pulmão), o Velox deverá informar no relatório do Housekeeping a existência do SKU nessa área, solicitar retirada do SKU via esteira “mais novo do canal(apenas)” e, enviar IDOC para o SAP enviar o Pallet mais velho para WCS.
Caso o usuário avalie não retirar o mais novo do canal, ele vai liberar um novo canal parametrizando o SKU para esse, e executar a solicitação no SAP manualmente;
Se o usuário avaliar abrir um canal para movimentar do AC para AA, o usuário selecionar a posição do lote mais velho do AC para AA e WCS enviar um IDOC para o SAP
No relatório, deverá conter a funcionalidade para o usuário executar manualmente esses movimentos.
O WCS deve disponibilizar um botão de inicio e fim de contagem do estoque para operação. Este botão quando “iniciado” fará com que todas as tarefas em andamento fiquem paradas e inicie a contagem de estoque. Toda a contagem será feita pelo SAP e enviada ao WCS via IDOC. Quando, a operação entender que a contagem está finalizada, será acionado o botão novamente e qualquer integração referente a estoque após esta ação será desconsiderada.
O relatório de análise será gerado manualmente após a finalização das contagens no coletor via SAP e ajustes no WCS conforme IDOS enviados do SAP.
WCS deverá gerar o housekeeping quando finalizar 100% das contagens das posições (Canal/Buffer/Pulmão
O usuário irá acessar o Monitor de gestão de estoque/Housekeeping e gerar o relatório de análises.
A execução será manual e não automática pelo sistema. Dentro da ferramenta relatório haverá a função de criação de transferências dentro do WSC e posterior envio de IDOC para o SAP atualizar saldos e posições.
A informação para retirada/esvaziar o canal ou Buffer, será apresentado no monitor de gestão de estoque/relatório de Housekeeping, na coluna “Esvaziar Canal” para o usuário executar os comandos para esvaziar no físico. Caso for canal PK retirada via esteira e se for no Buffer, PL será retirado pelo Robô e deixado no BK25.
O WCS irá enviar um IDOC solicitando os Pallets para reabastecer as posições necessárias AA após as movimentações realizadas pelo HouseKeeping.
O WCS deve avaliar para os canais do AA, os pallets das posições de Buffer, Canal picking e AC da seguinte forma:
No canal temos SKU com shelf de 70% (verde), no buffer temo o mesmo SKU 64% (verde) e no AC temos mesmo SKU com 63%, o sistema deverá sugerir a retirada do SKU do canal, e envie as caixas pela esteira de rejeitos, e solicitar ao AC o Pallet de 63%;
Para esse cálculo é necessário que os canais contenham um parâmetro de cadastro por faixa cor ou % shelf (atualmente, cadastro de reabastecimento). Este cadastro está vinculado ao cadastro de reabastecimento/posição e faixa do produto

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Controle de posições / Gerenciamento de estoque  
**Score:** — (nome-topico) | **ID:** 88826252d252491f

O sistema WCS será responsável pelo gerenciamento de estoque das posições de picking e de pulmão, as posições são controladas por lote, sendo assim, WCS precisará validar se o lote não está se repetindo desnecessariamente em diversas posições.
WCS precisará validar a quantidade de estoque na posição para a tomada de decisão se deve repetir o lote em posições diferentes. APENAS NAS POSIÇÕES DE PICKING FUNDO.
WCS deve permitir a repetição do mesmo produto de um mesmo lote em posições diferentes. APENAS NAS POSIÇÕES DE PICKING FUNDO.
Todas as posições de picking devem ter o cadastro de estoque de segurança para que quando esse estoque seja atingido, seja informado na tela de reabastecimento para o operador realizar o processo de reabastecimento no WMS.
WCS deverá controlar as posições conforme a classificação dos produtos, como por exemplo, produtos de classificação de vidro, não devem ficar nas posições superiores dos flowracks. TABELA ENVIADA NA REUNIAO
WCS deverá considerar a quantidade dos produtos, somando a quantidade no pulmão e nas posições de picking do produto.
Nesta etapa deverá ter uma tela que mostre todas as movimentações possíveis dos produtos, por exemplo: Entrada, Saida e demais necessárias.
A tela deve fazer a ligação entre produto, lote, endereço, operador que realiza a coleta, data e horário, tipo de transação (Entrada ou Saída), quantidade
SERA NECESSÁRIO A CRIAÇÃO DE DUAS TELAS SEGREGADAS SOBRE O CONTROLE DE ESTOQUE E A RASTREABILIDADE DO ESTOQUE.
CONTROLE DE ESTOQUE SERÁ A FOTO DOS ITENS PRESENTES NO ESTOQUE ATUAL DO WCS. OS CAMPOS NECESSÁRIOS NESSA TELA SERÁ:
ITEM/DESCRIÇÃO/UNIDADE DE MEDIDA/LOTE/POSIÇÃO/QTD/SETOR.
NESTA TELA SERÁ PERMITIDO FAZER AS MOVIMENTAÇÕS QUE A OPERAÇÃO ACHAR NECESSARIA, REALIZANDO A LEITURA DO ENDEREÇO INICIAL, QUANTIDADE (APENAS EXIBIR) ENDEREÇO FINAL.
RASTREABILIDADE DO ESTOQUE SERÁ A CONTA BANCÁRIA COM ENTRADAS/SAIDAS E MOVIMENTAÇÕES QUE OCORREM NO ESTOQUE.
OS CAMPOS NECESSÁRIOS SÃO:
FOTO DA LOUSA DA REUNIAO

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** CONTROLE DE POSIÇÕES  
**Score:** — (nome-topico) | **ID:** 0099994dbd936a75

O sistema WMS será responsável pelo controle do estoque nas posições de picking.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** CONTROLE DE POSIÇÕES  
**Score:** — (nome-topico) | **ID:** 9fab92764f14ffec

A definir

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário  
**Score:** — (nome-topico) | **ID:** be31fd9f31c3ea2c

O inventário é um processo fundamental para garantir a precisão no controle de estoque, permitindo que a BRF mantenha um acompanhamento detalhado dos produtos armazenados. Esse processo envolve a recirculação de pallets, realizada pela operação com o objetivo de conferir as quantidades e condições dos itens.
Inicialmente, o operador define os pallets, e então são selecionados e encaminhados para recircular.
Após a seleção, os pallets descem pela linha onde são analisados de forma criteriosa.
Nessa etapa, é verificada a integridade do material, bem como se as informações registradas no WMS correspondem ao que está fisicamente disponível. Essa análise minuciosa contribui para evitar divergências no estoque, como falta ou excesso de produtos, garantindo maior confiabilidade nos dados.
Concluída a contagem, os pallets são direcionados para o armazenamento em uma célula. Essa organização facilita a localização dos itens quando necessário, além de otimizar o espaço do armazém. A recirculação e análise constantes permitem que eventuais erros sejam corrigidos de forma ágil, promovendo a eficiência operacional e a tomada de decisões mais assertivas com base em um inventário atualizado e preciso.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário / Posições  
**Score:** — (semantico) | **ID:** 2cf879decdd0d435

Referência – 4.2 Localização (WCS JDI – Interface Gráfica).
Adicionar na tela a informação:
- Classe ABC da posição.
Informações existentes:
- Status;
- Código pallet;
- Data de execução;
- Localização de origem;
- Localização de destino;
- Sistema do depósito;
- Depósito;
- Produto;
- Descrição do produto;
- Data de produção;
- Lote;
- Centro;
- Faixas;
- Caixas;
- Quantidade;
- Ala;
- Andar;
- Posição;
- Status.
Funcionalidades:
- Filtros;
- Exportar Excel.
Tela de referência:

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário / Pallets Log  
**Score:** — (semantico) | **ID:** 4eeac808b2b2f3b1

Referência – 4.3.1 Pallet (WCS JDI – Interface Gráfica).
Adicionar na tela existente as informações:
- Quantidade de itens no pallet;
- Classe ABC do pallet;
- Faixa;
- Validade.
Informações existentes:
- Data;
- Descrição;
- Busca por pallet.
Funcionalidades:
- Filtros;
- Exportar Excel.
Tela de referência:

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário / Produtos  
**Score:** — (semantico) | **ID:** 28f637b7dcee1371

Referência – 4.3.2 Produto (WCS JDI – Interface Gráfica).
Adicionar na tela existente a informação:
- Classe ABC do produto.
Informações existentes:
- Produto;
- SKU / Código do produto;
- Faixa;
- Validade em dias;
- Quantidade em peso;
- Tolerância;
Funcionalidades:
- Filtros;
- Exportar Excel.
Tela de referência:

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário / Posições  
**Score:** — (semantico) | **ID:** c14fc826d2f0fc1e

Todas as movimentações são realizadas via interfaces com o SAP para que ambas as plataformas estejam espelhadas.
Informações existentes:
- Corredor;
- Data do último status;
- Código da posição;
- Ala;
- Andar;
- Lado;
- Estado da posição;
- Código do pallet;
- SKU;
- Produtos;
- Observação.
Funcionalidades:
- Filtros;
- Exportar Excel.
Tela de referência:

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário / Relatório de ocupações  
**Score:** — (semantico) | **ID:** a51f85f3e12ec18c

Referência – 4.4.1 Corredor (WCS JDI – Interface Gráfica).
Adicionar na tela existente as informações:
Quantidade de posições bloqueadas;
Quantidade de posições ocupadas;
Ocupação por corredor por porcentagem;
Armazenagens/Retiradas por corredor.
Informações existentes:
- Corredor;
- Zona;
- Total;
- Vazio;
- Ocupado;
- % Vazio;
- % Ocupado;
- Reservado Entrada;
- Reservado Saida.
Funcionalidades:
- Filtros;
- Exportar Excel.
Tela de referência:
Tela de referência BRF:

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário / Pallets  
**Score:** — (semantico) | **ID:** cf3e97faf6db7775

Referência – 4.6.5 Pallets por hora (WCS JDI – Interface Gráfica).
Referência – 4.6.6 Pallets por período (WCS JDI – Interface Gráfica).
Adicionar na tela existente as informações em forma de dashboard:
- Data;
- Tipo de movimentação: armazenagem ou retirada (SOI ou ROI);
- Produto congelado: quantidade de produtos desse tipo;
- Produto resfriado: quantidade de produtos desse tipo;
- Total: total de movimentação por hora.
Critérios de seleção
- Data inicial;
- Data final.
Funcionalidades
- Exportar excel: exporta dados para excel;
- Imprimir atual: somente o que está visível no grid;
- Imprimir tudo: imprimir todos os dados do grid;
- Fechar: fecha janela.
Tela referencia

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário / Pallets  
**Score:** — (semantico) | **ID:** dd39ba65f59d0788

Referência – 4.6.7 Movimentação de armazenagens/retiradas (WCS JDI – Interface Gráfica);
Referência – 4.6.8 Estatística por classe ABC (WCS JDI – Interface Gráfica);
Referência – 4.6.9 Estatística por tipo de temperatura (WCS JDI – Interface Gráfica);
Referência – 4.6.10 Estatística por corredor (WCS JDI – Interface Gráfica).
Novo dashboard que mostra a quantidade de armazenagens (SO), quantidade de retiradas (RO), quantidade de rejeitadas (NOK) e quantidade total de movimentações no AV (RO+SO) em determinado período.
Adicionar na tela existente as informações em forma de dashboard:
- Quantidade de armazenagens;
- Quantidade de retiradas;
- Quantidade de rejeitadas;
- Quantidade total de movimentações;
- Corredor.
Critérios de seleção
- Data inicial;
- Data final;
- Curva ABC;
- Temperatura.
Funcionalidades
- Exportar excel: exporta dados para excel;
- Imprimir atual: somente o que está visível no grid;
- Imprimir tudo: imprimir todos os dados do grid;
- Fechar: fecha janela.
Tela referencia

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Inventário / Posições  
**Score:** — (semantico) | **ID:** 81f00fa5c17c5f4e

Referência – 4.2 Localização (WCS JDI – Interface Gráfica).
Adicionar na tela existente a informação:
Classe ABC da posição.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Inventário / Pallets  
**Score:** — (semantico) | **ID:** c487414c675a36a2

Referência – 4.3.1 Pallet (WCS JDI – Interface Gráfica).
Adicionar na tela existente as informações:
Quantidade de itens no pallet;
Classe ABC do pallet;
Faixa;
Validade.
Inventário / Produtos
Referência – 4.3.2 Produto (WCS JDI – Interface Gráfica).
Adicionar na tela existente a informação:
Classe ABC do produto.
Inventário / Relatório de ocupações
Referência – 4.4.1 Corredor (WCS JDI – Interface Gráfica).
Adicionar na tela existente as informações:
Quantidade de posições bloqueadas;
Quantidade de posições ocupadas.
Dashboards
Localizações ocupadas por classe ABC
Referência – 4.6.4 Localizações ocupadas por classe ABC (WCS JDI – Interface Gráfica).
Novo dashboard deve mostrar as informações referentes as localizações no armazém divididas por classe ABC.
Informações
- Classe ABC;
- Total de localização que a classe ABC possui;
- Quantas localizações estão cheias;
- Total de localizações bloqueadas;
- Total de localizações livres;
- Percentual das localizações livres.
Funcionalidades
- Exportar excel;
- Fechar.
Tela referência:
Inventário / Pallets
Referência – 4.6.5 Pallets por hora (WCS JDI – Interface Gráfica).
Referência – 4.6.6 Pallets por período (WCS JDI – Interface Gráfica).
Adicionar na tela existente as informações em forma de dashboard:
- Data;
- Tipo de movimentação: armazenagem ou retirada (SOI ou ROI);
- Produto congelado: quantidade de produtos desse tipo;
- Produto resfriado: quantidade de produtos desse tipo;
- Total: total de movimentação por hora.
Critérios de seleção
- Data inicial;
- Data final.
Funcionalidades
- Exportar excel: exporta dados para excel;
- Imprimir atual: somente o que está visível no grid;
- Imprimir tudo: imprimir todos os dados do grid;
- Fechar: fecha janela.
Tela referencia
Inventário / Pallets
Referência – 4.6.7 Movimentação de armazenagens/retiradas (WCS JDI – Interface Gráfica);
Referência – 4.6.8 Estatística por classe ABC (WCS JDI – Interface Gráfica);
Referência – 4.6.9 Estatística por tipo de temperatura (WCS JDI – Interface Gráfica);
Referência – 4.6.10 Estatística por corredor (WCS JDI – Interface Gráfica).
Novo dashboard que mostra a quantidade de armazenagens (SO), quantidade de retiradas (RO), quantidade de rejeitadas (NOK) e quantidade total de movimentações no AV (RO+SO) em determinado período.
Adicionar na tela existente as informações em forma de dashboard:
- Quantidade de armazenagens;
- Quantidade de retiradas;
- Quantidade de rejeitadas;
- Quantidade total de movimentações;
- Corredor.
Critérios de seleção
- Data inicial;
- Data final;
- Curva ABC;
- Temperatura.
Funcionalidades
- Exportar excel: exporta dados para excel;
- Imprimir atual: somente o que está visível no grid;
- Imprimir tudo: imprimir todos os dados do grid;
- Fechar: fecha janela.
Tela referencia
Configuração geral
Referência – 4.7.1 Configuração geral (WCS JDI – Interface Gráfica).
Na tela de configurações estão situadas informações relevantes ao sistema. Estes necessitam serem determinados para o correto funcionamento.
Exemplos: tempo de permanência dos dados nas tabelas de histórico, configuração da tolerância de peso (valor e porcentagem), classificação do intervalo de peso (leve, médio e pesado) e configuração da quantidade de IDOCs parados no BC para envio de e-mail (aviso).
Tela referencia

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** 0794237501ebd08f

A auditoria de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todos os itens e posições alocados serão auditados, ou de forma parcial, onde o operador seleciona os itens específicos a serem auditados.
Auditoria Total:
No cenário de auditoria total, o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Total".
O WCS solicita que o operador leia todas as posições de estoque que possuem itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU dos itens presentes naquela posição.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no sistema.
O WCS envia as quantidades de cada SKU de forma consolidada, considerando todas as posições em que o item está alocado, e atualiza as informações no WMS.
O processo é finalizado quando o operador termina a auditoria de todas as posições e a quantidade de todos os itens foi registrada.
Auditoria Parcial
No cenário de auditoria parcial, o operador seleciona itens ou posições específicas que ele deseja auditar.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Parcial".
O WCS apresenta uma lista de todos os itens alocados no estoque, permitindo que o operador selecione os itens a serem auditados.
O operador pode usar uma opção de busca para facilitar a localização dos itens desejados.
Após selecionar os itens, o operador realiza a leitura do endereço onde os itens estão alocados.
O operador realiza a leitura do SKU dos itens selecionados.
O operador conta a quantidade real de cada item e registra a quantidade auditada no sistema.
O WCS envia as quantidades de cada SKU de forma consolidada, considerando todas as posições em que o item está alocado, e atualiza as informações no WMS.
O processo é finalizado quando todos os itens selecionados para auditoria foram verificados e as quantidades registradas.
Considerações Importantes para Ambos os Cenários
Interface do WCS: O WCS deve apresentar uma interface intuitiva que permita ao operador navegar facilmente entre as posições de estoque e os itens a serem auditados, com opções claras para seleção de auditoria total ou parcial.
Validação de Dados: O sistema WCS deverá validar as quantidades informadas durante a auditoria para garantir que a operação seja realizada corretamente. Em caso de divergências, o sistema gerará exceções ou alertas para revisão.
Relatórios: Após a conclusão de qualquer auditoria, o WCS deve gerar um relatório consolidado contendo as quantidades auditadas e os endereços verificados, que será enviado ao WMS para atualização do estoque.
Flexibilidade de Auditoria: O operador deve ter a capacidade de alternar entre auditorias total e parcial conforme a necessidade operacional, garantindo que o processo seja flexível e adequado às exigências do momento.
Restrição de Itens no Transfer: O processo de auditoria completa não poderá ser iniciado caso haja tarefas de reabastecimento ao Transfer em aberto.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** b5bccaeeca06b36d

A auditoria de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todos os itens e posições alocados serão auditados, ou de forma parcial, onde o operador seleciona os itens específicos a serem auditados.
Auditoria Total:
No cenário de auditoria total, o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Total".
O WCS solicita que o operador leia todas as posições de estoque que possuem itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU dos itens presentes naquela posição.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no sistema.
O WCS envia as quantidades de cada SKU de forma consolidada, considerando todas as posições em que o item está alocado, e atualiza as informações no WMS.
O processo é finalizado quando o operador termina a auditoria de todas as posições e a quantidade de todos os itens foi registrada.
Auditoria Parcial
No cenário de auditoria parcial, o operador seleciona itens ou posições específicas que ele deseja auditar.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Parcial".
O WCS apresenta uma lista de todos os itens alocados no estoque, permitindo que o operador selecione os itens a serem auditados.
O operador pode usar uma opção de busca para facilitar a localização dos itens desejados.
Após selecionar os itens, o operador realiza a leitura do endereço onde os itens estão alocados.
O operador realiza a leitura do SKU dos itens selecionados.
O operador conta a quantidade real de cada item e registra a quantidade auditada no sistema.
O sistema obriga o operador realizar a o processo de auditoria de todas as posições que esse item está alocado
O WCS envia as quantidades de cada SKU de forma consolidada, considerando todas as posições em que o item está alocado, e atualiza as informações no WMS.
O processo é finalizado quando todos os itens selecionados para auditoria foram verificados e as quantidades registradas.
Considerações Importantes para Ambos os Cenários
Interface do WCS: O WCS deve apresentar uma interface intuitiva que permita ao operador navegar facilmente entre as posições de estoque e os itens a serem auditados, com opções claras para seleção de auditoria total ou parcial.
Validação de Dados: O sistema WCS deverá validar as quantidades informadas durante a auditoria para garantir que a operação seja realizada corretamente. Em caso de divergências, o sistema gerará exceções ou alertas para revisão.
Relatórios: Após a conclusão de qualquer auditoria, o WCS deve gerar um relatório consolidado contendo as quantidades auditadas e os endereços verificados, que será enviado ao WMS para atualização do estoque.
Flexibilidade de Auditoria: O operador deve ter a capacidade de alternar entre auditorias total e parcial conforme a necessidade operacional, garantindo que o processo seja flexível e adequado às exigências do momento.
Restrição de Itens no Transfer: O processo de auditoria completa não poderá ser iniciado caso haja tarefas de reabastecimento ao Transfer em aberto.
Auditoria de Itens sem Endereço ou Saldo: Nos casos em que o item não possuir saldo em estoque nem endereço cadastrado ativo, o WCS deverá exibir ao operador os últimos endereços em que o item foi alocado e que apresentaram movimentação dentro de um prazo parametrizado em dias. Essa funcionalidade visa permitir a investigação de possíveis inconsistências e suportar o processo de reconciliação de estoque.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** de063a7148c2b141

A auditoria de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todos os itens e posições alocados serão auditados, ou de forma parcial, onde o operador seleciona os itens específicos a serem auditados.
Auditoria Total:
No cenário de auditoria total, o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Total".
O WCS solicita que o operador leia todas as posições de estoque que possuem itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU dos itens presentes naquela posição.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no sistema.
O WCS envia as quantidades de cada SKU de forma consolidada, considerando todas as posições em que o item está alocado, e atualiza as informações no WMS.
O processo é finalizado quando o operador termina a auditoria de todas as posições e a quantidade de todos os itens foi registrada.
Auditoria Parcial
No cenário de auditoria parcial, o operador seleciona os itens específicos que ele deseja auditar.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Parcial".
O WCS apresenta uma lista de todos os itens alocados no estoque, permitindo que o operador selecione os itens a serem auditados.
O operador pode usar uma opção de busca para facilitar a localização dos itens desejados.
Após selecionar os itens, o operador realiza a leitura do endereço onde os itens estão alocados.
O operador realiza a leitura do SKU dos itens selecionados.
O operador conta a quantidade real de cada item e registra a quantidade auditada no sistema.
O WCS envia as quantidades de cada SKU de forma consolidada, considerando todas as posições em que o item está alocado, e atualiza as informações no WMS.
O processo é finalizado quando todos os itens selecionados para auditoria foram verificados e as quantidades registradas.
Considerações Importantes para Ambos os Cenários
Interface do WCS: O WCS deve apresentar uma interface intuitiva que permita ao operador navegar facilmente entre as posições de estoque e os itens a serem auditados, com opções claras para seleção de auditoria total ou parcial.
Validação de Dados: O sistema WCS deverá validar as quantidades informadas durante a auditoria para garantir que a operação seja realizada corretamente. Em caso de divergências, o sistema gerará exceções ou alertas para revisão.
Relatórios: Após a conclusão de qualquer auditoria, o WCS deve gerar um relatório consolidado contendo as quantidades auditadas e os endereços verificados, que será enviado ao WMS para atualização do estoque.
Flexibilidade de Auditoria: O operador deve ter a capacidade de alternar entre auditorias total e parcial conforme a necessidade operacional, garantindo que o processo seja flexível e adequado às exigências do momento.
Restrição de Itens no Transfer: O processo de auditoria completa não poderá ser iniciado caso haja itens no Transfer. Caso seja uma auditoria parcial Se algum item selecionado não estiver vinculado a um endereço, o WCS não permitirá o início da auditoria até que todos os itens estejam devidamente alocados.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** b0ca0e8fdf6d310c

A auditoria de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todos os itens e posições alocados serão auditados, ou de forma parcial, onde o operador seleciona os itens específicos a serem auditados.
Auditoria Total:
No cenário de auditoria total, o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Total".
O WCS solicita que o operador leia todas as posições de estoque que possuem itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU e lote dos itens presentes naquela posição.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no sistema.
O WCS envia as quantidades de cada SKU de forma consolidada, considerando todas as posições em que o item está alocado, e atualiza as informações no WMS.
O processo é finalizado quando o operador termina a auditoria de todas as posições e a quantidade de todos os itens foi registrada.
Auditoria Parcial
No cenário de auditoria parcial, o operador seleciona os itens específicos que ele deseja auditar.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Parcial".
O WCS apresenta uma lista de todos os itens alocados no estoque, permitindo que o operador selecione os itens a serem auditados.
O operador pode usar uma opção de busca para facilitar a localização dos itens desejados.
Após selecionar os itens, o operador realiza a leitura do endereço onde os itens estão alocados.
O operador realiza a leitura do SKU e lote dos itens selecionados.
O operador conta a quantidade real de cada item e registra a quantidade auditada no sistema.
O WCS envia as quantidades de cada SKU de forma consolidada, considerando todas as posições em que o item está alocado, e atualiza as informações no WMS.
O processo é finalizado quando todos os itens selecionados para auditoria foram verificados e as quantidades registradas.
Considerações Importantes para Ambos os Cenários
Interface do WCS: O WCS deve apresentar uma interface intuitiva que permita ao operador navegar facilmente entre as posições de estoque e os itens a serem auditados, com opções claras para seleção de auditoria total ou parcial.
Validação de Dados: O sistema WCS deverá validar as quantidades informadas durante a auditoria para garantir que a operação seja realizada corretamente. Em caso de divergências, o sistema gerará exceções ou alertas para revisão.
Relatórios: Após a conclusão de qualquer auditoria, o WCS deve gerar um relatório consolidado contendo as quantidades auditadas e os endereços verificados, que será enviado ao WMS para atualização do estoque.
Flexibilidade de Auditoria: O operador deve ter a capacidade de alternar entre auditorias total e parcial conforme a necessidade operacional, garantindo que o processo seja flexível e adequado às exigências do momento.
Restrição de Itens no Transfer: O processo de auditoria não poderá ser iniciado caso haja itens no Transfer sem endereço associado. Se algum item não estiver vinculado a um endereço, o WCS não permitirá o início da auditoria até que todos os itens estejam devidamente alocados.
