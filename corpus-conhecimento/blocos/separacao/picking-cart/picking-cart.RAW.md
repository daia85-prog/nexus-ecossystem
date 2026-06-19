# picking-cart.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo minerador -->

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Picking Cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes de acordo com as posições informadas no PDV.
Cada picking cart será composto com 9 posições, 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart. Nesta tela será exibido os volumes que serão iniciados no picking cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá acionar o botão Finalizar Mapeamento e seguir para a etapa de separação.
A separação dos pedidos no picking fundo deverá ser executada de forma ordenada por endereço de picking em ordem decrescente, garantindo um fluxo lógico e eficiente para o deslocamento dos operadores durante a coleta. Essa ordenação facilita a navegação pelos corredores e otimiza o percurso, reduzindo o tempo de separação.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Lote: garantindo rastreabilidade e controle de validade quando aplicável;
Unidade de medida: Para indicar quantidade a ser separada, unidade de medida do produto e se a coleta será feita em unidades, caixas, frascos, pacotes, entre outros.
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item esteja alocado para múltiplos volumes posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá, antes de alocar o item coletado, escanear o número da caixa (posição no carrinho) correspondente ao volume que está sendo separado, garantindo que a destinação correta do item seja feita.
Ao final da coleta de cada volume, o operador confirmará a separação escaneando novamente somente o código da posição da caixa no carrinho, assegurando que a separação foi concluída corretamente para aquele volume específico.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume, mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço do picking cart.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume até o order start do flowrack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.
No setor de Picking Cart que fará a separação no picking fundo, será possível que um mesmo item/lote esteja armazenado em mais de uma posição simultaneamente. Diante dessa configuração, o sistema WCS deverá ser capaz de identificar todas as posições disponíveis com o item/lote solicitado e, se necessário, distribuir a coleta entre essas posições para atender à quantidade total demandada pelo pedido.
Em situações de corte de estoque ou quando não houver quantidade suficiente em uma única posição, o WCS deverá instruir o operador a realizar uma coleta “picada”, ou seja, passando por duas ou mais posições para completar a separação daquele item/lote. Essa lógica garante maior flexibilidade no uso do estoque disponível e evita bloqueios operacionais por falta de saldo concentrado em um único endereço, mantendo a acuracidade e fluidez do processo de separação.
Além disso, o setor de Marketing será unificado ao picking fundo, ou seja, todas as posições relacionadas aos itens de Marketing serão tratadas como parte integrante do mesmo setor logístico. A separação desses itens será realizada utilizando o mesmo modelo operacional de Picking Cart, seguindo os mesmos critérios de roteirização, agrupamento por pedido e controle de coleta, centralizando a gestão de estoque e a execução das tarefas em uma única lógica de operação.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Picking Cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do tablet.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
Após essa seleção, o operador visualizará uma lista de missões de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada missão diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Apresentação da Posição (endereço de picking): onde o produto deve ser coletado;
E a Apresentação do Produto: Apresentação configurada pela operação na tela de parametros.
Quantidade a coletar: quantidade solicitada de acordo com a missão
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (tarefa) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (tarefa) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (tarefa) que está sendo separado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (tarefa), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será ocultada da lista, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço da caixa plástica.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (tarefa) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as missões destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Picking Cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O Picking Cart é uma prateleira móvel equipada com 1 PDV (tablet) e 1 leitor de código de barras (mão com gatilho). É utilizado para itens de menor giro que não estão no FlowRack.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Se a Transportadora Realiza Paletização  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Ao marcar “Sim”, o sistema habilita o processo de agrupamento:
Agrupamento por Transportador Rota
Cada rampa gera pallets separados por Transportadora + Rota.
O coletor orienta o operador a colocar cada volume no pallet correto.
O WCS registra a quantidade de volumes por pallet.
O WCS envia a integração de fechamento quando o pallet é concluído.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Se a Transportadora Realiza Paletização  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Ao marcar “Sim”, o sistema habilita o processo de agrupamento:
Agrupamento por Transportador Rota
Cada rampa gera pallets separados por Transportadora + Rota.
O coletor orienta o operador a colocar cada volume no pallet correto.
O WCS registra a quantidade de volumes por pallet.
O WCS envia a integração de fechamento quando o pallet é concluído.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10.docx`  
**Heading:** Picking Cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes de acordo com as posições informadas no PDV.
Cada picking cart será composto com 9 posições, 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart. Nesta tela será exibido os volumes que serão iniciados no picking cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá acionar o botão Finalizar Mapeamento e seguir para a etapa de separação.
A separação dos pedidos no picking fundo deverá ser executada de forma ordenada por endereço de picking em ordem decrescente, garantindo um fluxo lógico e eficiente para o deslocamento dos operadores durante a coleta. Essa ordenação facilita a navegação pelos corredores e otimiza o percurso, reduzindo o tempo de separação.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Lote: garantindo rastreabilidade e controle de validade quando aplicável;
Unidade de medida: para indicar se a coleta será feita em unidades, caixas, frascos, pacotes, entre outros.
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV ou coletor) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada e, na finalização de coleta de cada volume, deverá escanear apenas o código da posição correspondente do volume no carrinho (Picking Cart), confirmando que a separação foi concluída corretamente para aquele ponto de coleta.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume, mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço do picking cart.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume até o order start do flowrack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.
No setor de Picking Cart que fará a separação no picking fundo, será possível que um mesmo item/lote esteja armazenado em mais de uma posição simultaneamente. Diante dessa configuração, o sistema WCS deverá ser capaz de identificar todas as posições disponíveis com o item/lote solicitado e, se necessário, distribuir a coleta entre essas posições para atender à quantidade total demandada pelo pedido.
Em situações de corte de estoque ou quando não houver quantidade suficiente em uma única posição, o WCS deverá instruir o operador a realizar uma coleta “picada”, ou seja, passando por duas ou mais posições para completar a separação daquele item/lote. Essa lógica garante maior flexibilidade no uso do estoque disponível e evita bloqueios operacionais por falta de saldo concentrado em um único endereço, mantendo a acuracidade e fluidez do processo de separação.
Além disso, o setor de Marketing será unificado ao picking fundo, ou seja, todas as posições relacionadas aos itens de Marketing serão tratadas como parte integrante do mesmo setor logístico. A separação desses itens será realizada utilizando o mesmo modelo operacional de Picking Cart, seguindo os mesmos critérios de roteirização, agrupamento por pedido e controle de coleta, centralizando a gestão de estoque e a execução das tarefas em uma única lógica de operação.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Picking cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os pedidos nomeados como exceção teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com PDV(Monitor) e scanner de dedo, o picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes de acordo com as posições informadas no PDV (picking list).
Após o login no Velox o operador irá acessar o modo de operação “Versão PDV” onde ele irá selecionar a opção Picking Cart para operar na separação picking fracionada, onde o operador irá se deparar com uma lista de tarefas de separação que seguiram a ordenação de integração (FIFO) ou podendo alterar a prioridade de cada tarefa dentro do Velox.
O operador deverá informar quantos etiquetas serão impressas para serem vinculadas aos volumes. Operador terá disponível fisicamente, um buffer de caixas disponíveis para serem utilizadas, próximo ao Order Start.
Deve ser avaliado o espaço físico das caixas que serão utilizadas pela operação e o picking cart para a avaliação de quantos volumes serão permitidos a separação simultaneamente.
Obs: No Order Start será impresso uma etiqueta “burra” para ser realizado a separação e posteriormente, no packing, será impresso a etiqueta final.
O operador deverá informar pela tela do Velox qual caixa está em cada posição do picking cart realizando a leitura da etiqueta “burra” e da posição.  Com o picking cart mapeado, o operador deve acionar o botão “finalizar mapeamento” para seguir para a separação. Caso o colaborador deseje separar um número menor do que o picking cart suporta, basta acionar o botão apenas com a quantidade desejada.
O Velox informa para o operador todos os endereços que devem ser visitados para realizarem a separação em seus respectivos volumes. Deve ser lido o código do endereço e o EAN/DUM do produto para validação sistêmica. Com a garantia que o operador está coletando o item correto, o PDV exibe todas as posições que solicitam aquele item. O operador deverá coletar a quantidade solicitada, ler o EAN e o código da posição do picking cart item a item. Após realizado todas as coletas solicitadas daquele endereço, será informado pela linha daquele coleta na cor verde para informar a finalização de coleta no endereço.
Caso aconteça a necessidade de realizar um corte, o colaborador deve coletar apenas o que for possível e acionar o botão no PDV informando o corte no restante das unidades daquele endereço.
Este ciclo deve ser repetido em todos os endereços de coleta informados pelo Velox. Ao visitar todos os endereços, o colaborador será informado que a separação está finalizada e pode induzir os volumes no início da linha dos fracionados.
Colaborador pode retornar o picking cart ao Order Start e realizar o mesmo processo de separação até finalizar todas as tarefas destinadas a área de picking cart.
Se houver a necessidade de solicitar uma caixa adicional devido a alguma falha de cubagem, no próprio PDV o colaborador poderá tomar essa ação. Ao pedir uma nova caixa, o volume atual não coletará mais nenhum item e os pickings pendentes serão coletados na próxima caixa que será exibida no Order Start com prioridade máxima.
NOTA: O time do cliente deve definir antes da data de teste in loco qual sequência de separação será mais benéfica para a operação.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 01.docx`  
**Heading:** Picking cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os pedidos nomeados como exceção teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com PDV(Monitor) e scanner de dedo, o picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes de acordo com as posições informadas no PDV (picking list).
Após o login no Velox o operador irá acessar o modo de operação “Versão PDV” onde ele irá selecionar a opção Picking Cart para operar na separação picking fracionada, onde o operador irá se deparar com uma lista de tarefas de separação que seguiram a ordenação de integração (FIFO) ou a orientação através da

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Picking Cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV. O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes de acordo com as posições informadas no PDV.
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart. Nessa etapa, será necessário informar qual mezanino será utilizado para a separação.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Deve ser avaliado o espaço físico das caixas que serão utilizadas pela operação e o picking cart para a avaliação de quantos volumes serão permitidos a separação simultaneamente.
O operador deverá selecionar, no Order Start Picking Cart, a quantidade de etiquetas a serem impressas para a realização da separação. Deverá ter uma trava onde o operador consiga imprimir apenas a quantidade máxima que o picking cart suporta.
Ao imprimir a etiqueta no Order Start, aquele pedido mudará o status e será desconsiderado desta tela. Caso aconteça qualquer problema ela deverá ser reimpressa no WCS
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura das etiquetas do pedido, da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá acionar o botão Finalizar Mapeamento e seguir para a etapa de separação.
O sistema WCS informará ao operador todos os endereços que devem ser visitados para a separação dos respectivos volumes. Para validação sistêmica, o operador deverá ler o código do endereço e o EAN/DUM do produto. Após essa confirmação, o PDV exibirá todas as posições do Picking Cart que solicitaram aquele item. O operador deverá coletar a quantidade indicada, escanear o EAN do produto e o código da posição do Picking Cart item por item.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá coletar apenas as unidades disponíveis e acionar a opção de corte no PDV, informando a quantidade não coletada daquele endereço.
No mezanino dedicado aos Controlados, deverá ser lido uma etiqueta que conterá um código fantasia do lote/validade, o WCS receberá via integração todos os códigos fantasia e o sku, lote e validade a qual ele pertence. O sistema deverá verificar se a data do produto não está vencida e validar se a validade lida é igual ou superior do que está sendo esperado na integração de romaneios. Caso a validade lida não for o esperada, deve apresentar um alerta solicitando login e senha do supervisor para continuar.
Se esta ação ocorrer, todos os lotes pendentes ao que foi trocado devem ser ajustados pelo novo. Haverá um relatório com a relação de todos os lotes que foram ajustados.
O WCS deve permitir uma flag, onde a trava de validação de lote pare de ser feita. Todos os produtos que estão sendo separados seguirão as mesmas regras, apenas os próximos volumes que saírem do Order Start (impressão)
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume até o final do mezanino para a descida através do espiral.
Após isso, o operador poderá retornar o Picking Cart ao Order Start e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.
Se houver necessidade de solicitar uma caixa adicional devido a uma falha de cubagem, o operador poderá tomar essa ação diretamente no PDV. Nesse caso, o volume atual não receberá mais itens, e os produtos pendentes serão coletados na próxima caixa, que será exibida no Order Start novamente.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Picking Cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Quantidade a coletar: quantidade solicitada de acordo com a tarefa
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (pega) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (pega) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (pega) que está sendo separado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (pega), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço da caixa plástica.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (pega) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Picking Cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Quantidade a coletar: quantidade solicitada de acordo com a tarefa
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (pega) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (pega) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (pega) que está sendo separado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (pega), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço da caixa plástica.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (pega) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2.docx`  
**Heading:** Picking Cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Quantidade a coletar: quantidade solicitada de acordo com a tarefa
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (pega) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (pega) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (pega) que está sendo separado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (pega), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço da caixa plástica.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (pega) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Picking Cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Quantidade a coletar: quantidade solicitada de acordo com a tarefa
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (pega) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (pega) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (pega) que está sendo separado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (pega), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço da caixa plástica.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (pega) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Picking Cart  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Para atender as demandas da operação visando os itens com menor curva teremos o conceito de separação por picking cart que consiste em um modelo de prateleira móvel com auxílio do PDV.
O picking cart é semelhante a um carrinho de mercado onde ele é utilizado para fazer as coletas dos volumes (pega) de acordo com as posições informadas no PDV.
Cada picking cart será composto com 1 PDV e 1 leitor de código de barras (leitor de mão + gatilho).
Após realizar o login no sistema WCS, o operador deverá acessar a tela Order Start Picking Cart. Nesta tela será exibido os volumes (pega) que serão iniciados no picking cart.
Após essa seleção, o operador visualizará uma lista de tarefas de separação organizadas conforme a prioridade definida na integração. Caso necessário, será possível ajustar a prioridade de cada tarefa diretamente no sistema WCS.
Na tela de Mapeamento do Picking Cart, será necessário realizar a leitura da caixa plástica e da posição do Picking Cart, permitindo o mapeamento do equipamento. Após vincular todas as posições necessárias, o operador deverá seguir para a etapa de separação.
A separação dos produtos que estiverem no setor denominado como “museu” deverá ser executada por completo para posteriormente os volumes (pega) serem induzidos na linha que leva para o FlowRack.
Na separação realizada por meio de picking cart, a interface deverá exibir de forma clara e objetiva as informações essenciais para a coleta correta. O sistema WCS deverá apresentar no primeiro momento, para cada endereço a ser separado:
Posição (endereço de picking): onde o produto deve ser coletado;
Número do Produto: Número referente ao Produto.
Nome do produto: identificação descritiva do item para facilitar o reconhecimento visual;
Quantidade a coletar: quantidade solicitada de acordo com a tarefa
O sistema WCS será responsável por informar ao operador todos os endereços que devem ser visitados durante o processo de separação dos volumes (pega) alocados no Picking Cart. Para garantir a validação sistêmica da coleta correta, o operador deverá realizar a leitura do código do endereço físico (posição) antes de iniciar a separação naquele ponto.
Após essa validação, o sistema (via PDV) exibirá ao operador a quantidade a ser coletada e todas as posições do Picking Cart e volumes (pega) associados que solicitam aquele item. Com essas informações, o operador executa a coleta da quantidade indicada.
Nos casos em que um mesmo item estiver alocado em múltiplos volumes (pega)posicionados em uma mesma localização de picking, o sistema indicará os diferentes volumes (pega) e as posições correspondentes no Picking Cart. Nessa situação, o operador deverá escanear o número da caixa correspondente ao volume (pega) que está sendo separado, após alocar o item coletado, garantindo que a destinação correta do item seja realizada.
Essa dinâmica garante controle total sobre o processo, evita desvios operacionais e assegura a rastreabilidade exata de cada item separado por posição e volume (pega), mantendo a consistência entre o estoque físico e o sistema.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização da coleta naquele local.
Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e após isso realizar a leitura do endereço do picking cart.
Esse ciclo será repetido para todos os endereços de coleta indicados pelo sistema WCS. Ao concluir todas as visitas, o operador será notificado de que a separação foi finalizada e deverá conduzir o volume (pega) até a indução do Order Start do FlowRack.
Após isso, o operador poderá retornar o Picking Cart ao Order Start do museu e repetir o processo de separação até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Aloca Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de paletização. Esse processo tem como objetivo agrupar os volumes conforme rota e transportadora, garantindo organização e rastreabilidade para expedição.
A paletização é realizada com o auxílio de um coletor Android, que se comunica diretamente com o WCS.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Aloca Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de paletização. Esse processo tem como objetivo agrupar os volumes conforme rota e transportadora, garantindo organização e rastreabilidade para expedição.
A paletização é realizada com o auxílio de um coletor Android, que se comunica diretamente com o WCS.
