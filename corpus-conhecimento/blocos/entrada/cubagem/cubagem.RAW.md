# cubagem.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** 8a4c866558e43075

O cálculo de cubagem para os pedidos, será de responsabilidade do WCS, que fará o cálculo de cubagem a cada integração recebida do WMS, para isso deverá receber todas as informações de dimensões e peso dos produtos para realizar esse cálculo. Com isso, realizará o cálculo de cubagem, totalizando as dimensões dos itens, gerando os volumes e informando a quantidade de caixas necessárias para atender o pedido.
Um pedido poderá ser coletado por um ou mais Picking Carts simultaneamente, sendo suas tarefas de separação distribuídas para as zonas correspondentes de acordo com os produtos do pedido. Após a separação, seguem para a conferência e, após validados, são encaminhados ao Put To Light (PTL), onde os volumes são consolidados por pedido para finalização da expedição.
Poderá ter mais de 01 (um) volume, de um mesmo pedido, no mesmo Picking cart, caso a coleta seja na mesma zona de separação.
O sistema contará com parâmetros de ocupação mínima e máxima de volume, definidos em tela. Quando um pedido apresentar poucos itens e não atingir a ocupação mínima configurada, o WCS identificará automaticamente outros pedidos com a mesma característica e os agrupará na mesma caixa (galeia), a fim de otimizar o espaço e evitar volumes com pouca ocupação. Esses pedidos agrupados serão posteriormente separados no PTW, caracterizando o método de separação multi.
OBS: O WCS só consolidará pedidos que tenham posições disponíveis para alocação no PTW.
O sistema também contará com parâmetros de ocupação máxima de volume, garantindo que as caixas (galeias) não ultrapassem um nível de preenchimento que possa comprometer a integridade dos produtos ou a eficiência operacional. Recomenda-se que esse limite não seja configurado em 100%, considerando a diversidade de dimensões e formatos dos itens, evitando, assim, excesso de compactação e dificuldades no manuseio.
As caixas(galeias) utilizadas para realizar a separação dos pedidos, serão caixas plásticas com o mesmo padrão de medida para o Picking cart (800 x 600 x 450).
Picking Coletor – Itens Inconformes (Carrinhos e Regra de Cubagem)
No processo de Picking Coletor (itens inconformes), a separação será realizada utilizando carrinhos já adquiridos pela Florarte, cujas dimensões são:
Carrinho 1 (C1): Altura 168 cm | Largura 89 cm | Comprimento 165 cm
Carrinho 2 (C2): Altura 183 cm | Largura 89 cm | Comprimento 153 cm
Carrinho 3 (C3): Altura 98 cm | Largura 75 cm | Comprimento 113 cm
Carrinho 4 (C4): Altura 168 cm | Largura 69 cm | Comprimento 165 cm
Como se trata de itens inconformes, podem ocorrer cenários em que uma das dimensões do item exceda a dimensão do carrinho. Para esses casos, o WCS adotará a seguinte regra:
O item poderá ser alocado para separação no carrinho desde que pelo menos 2 (duas) dimensões do item caibam dentro das dimensões máximas do carrinho.
Caso a 3ª dimensão exceda, o WCS deverá limitar (capar) essa dimensão para fins de cálculo, considerando como valor máximo a maior dimensão do carrinho (entre altura, largura e comprimento do carrinho selecionado).
OBS: Essa regra tem como objetivo padronizar o cálculo de ocupação/cubagem para determinar quantos itens podem ser alocados em um carrinho, mesmo quando houver excedente em uma dimensão.
Após a conferência será realizado o Packing (embalagem) dos itens recebidos nas caixas de papelão.

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Etiqueta Picking (Fracionado)  
**Score:** — (semantico) | **ID:** 4a7406bd267dda37

Impressão responsabilidade Velox.
Obs.: Essa etiqueta será preenchida com as informações de produto, quantidade e lotes conforme o cálculo de cubagem realizado no início do processo, com isso todos os produtos alocados nesse volume serão impressos nessa etiqueta.
Informação adicionada: Código da caixa sugerida pelo cálculo de cubagem realizado pelo Velox.
Informação adicionada: Código Data Matrix do volume, para que o operador faça a leitura do volume e realize a separação dos itens alocados sistemicamente nesse volume.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 17b44695745d82a1

Operador irá utilizar o próprio coletor para acessar o sistema Velox, para realizar a separação direto no sistema Velox.
Para a separação de Full Case, não terá leds nas posições de caixa fechada.
Com o cálculo de cubagem, Velox realiza a impressão das etiquetas de full case (caixa fechada).
Operador com as etiquetas impressas se desloca até o local de separação informado na etiqueta.
Ao chegar no local informado na etiqueta, operador deverá realizar a leitura da etiqueta de produção, para validar o produto e lote, caso esteja correto na tela do PDV deverá informar o operador que as informações são compatíveis e que pode seguir com a separação do produto solicitado.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade física de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.
Descrição do processo operacional de separação de full case:
Sistema Velox realiza a impressão das etiquetas de Full Case;
Operador seleciona no sistema Velox, qual pedido irá realizar a separação;
Operador se desloca até o local indicado na etiqueta;
Ao chegar no local do produto, operador realiza a leitura da etiqueta de produção para validar produto e lote;
Caso seja validado, tela do sistema (Coletor) fica verde;
Caso não seja validado, tela do sistema (Coletor) fica vermelho;
Caso as informações estejam corretas, operador realiza a leitura do código de barras (etiqueta) do produto que está separando;
Operador cola a etiqueta do produto na caixa separada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no sistema Velox pelo coletor;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todos os produtos do pedido selecionado;
Operador poderá iniciar a separação do próximo pedido;
Repetindo o processo.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Cubagem das caixas de picking  
**Score:** — (semantico) | **ID:** 7ad187ceb651e74e

A cubagem das caixas plásticas utilizadas no processo de picking será de responsabilidade do WCS. O sistema será responsável por considerar o volume total dos itens do pedido e associá-los automaticamente à caixa plástica padrão definida para a operação. Essa caixa plástica será sempre a mesma, garantindo padronização no processo logístico. Ao assumir essa responsabilidade, o WCS assegura que cada volume seja corretamente alocado na caixa plástica desde o início da separação, sem a necessidade de intervenção manual para definição de tipo ou dimensão de embalagem, otimizando o controle operacional e a rastreabilidade dos volumes ao longo do processo.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Cubagem das caixas de expedição  
**Score:** — (semantico) | **ID:** 6f85bf399d5e1982

O sistema WCS será o responsável pela cubagem dos pedidos nas caixas de expedição, que serão trocadas na conferência/packing, operador realiza a separação na caixa plástica e na estação de conferência/packing, conforme realiza a conferência realiza a troca da caixa de plástico para a caixa de expedição.
As caixas de expedição com suas dimensões devem estar devidamente cadastradas no sistema WCS.
O WCS deve ser responsável por avaliar e definir a melhor cubagem possível para o transbordo dos itens da caixa plástica utilizada no picking para caixa de papelão utilizada na conferência, sempre com o objetivo de alocar todos os itens em uma única caixa de papelão. O sistema deverá priorizar soluções de embalagem que permitam o aproveitamento máximo do espaço e a redução no número de volumes expedidos, devido a impressão dos laudos por volume mesmo com a cubagem de uma caixa de expedição menor, o sistema deverá considerar uma caixa plástica (1 para 1).
Essa lógica busca otimizar o processo de embalagem e expedição, reduzindo o uso de insumos, facilitando a roteirização logística e contribuindo para maior eficiência no transporte e conferência. O WCS deverá considerar as dimensões reais dos itens, bem como o volume útil da caixa plástica e das caixas de papelão disponíveis, para tomar a melhor decisão de transbordo de forma automática e padronizada.

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** 6b9c5a77a215e16c

O cálculo de cubagem para os pedidos fracionados será de responsabilidade WMS do cliente, assim como os números dos volumes e itens pertencentes.
Sistema WCS recebe a integração com as informações necessárias para realizar a separação do pedido conforme a cubagem realizada pelo WMS.
Obs.: Para a leitura correta e precisa do volume induzido na esteira, é preciso que a caixa contenha apenas um código de barras legível para identificação do volume correto, qualquer outro código de barras presente no volume poderá ocasionar leitura incorreta. Sendo uma caixa de plástico padronizada.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Cubagem e Seleção Automática de Caixas no Picking  
**Score:** — (semantico) | **ID:** 5e256191761e4e11

A cubagem das missões utilizadas no processo de picking será de responsabilidade do WCS. O sistema deverá calcular o volume total dos itens associados à missão e realizar a associação automática à caixa mais adequada, conforme o cadastro de tipos de caixas disponível no sistema.
Ao assumir essa responsabilidade, o WCS garante que cada volume (tarefa) seja corretamente alocado na melhor opção de embalagem desde o início da separação, eliminando a necessidade de intervenção manual para definição de tipo ou dimensão da caixa. Esse processo contribui para a otimização do fluxo operacional e assegura a rastreabilidade dos volumes (tarefas) ao longo de todo o processo.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Validação de Dimensões e Cubagem  
**Score:** — (semantico) | **ID:** bb17107d83774c30

O WCS deverá disponibilizar um parâmetro de configuração que permita ativar ou desativar a validação das dimensões físicas dos itens em relação à caixa selecionada, conforme descrito abaixo:
Parâmetro Ativo:
O WCS deverá validar se qualquer uma das dimensões do item ou da composição da missão (altura, largura ou comprimento) ultrapassa os limites dimensionais da caixa, além de validar a cubagem total (m³).
Caso alguma dimensão exceda o limite, o sistema deverá selecionar automaticamente uma caixa alternativa compatível.
Parâmetro Inativo:
O WCS deverá considerar exclusivamente a cubagem total (m³) da missão para a seleção da caixa, desprezando a validação individual das dimensões (altura, largura e comprimento).

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** 618b63a97198028e

Em caso de necessidade de cancelamento, o WMS deverá atualizar um campo específico da tabela compartilhada, sinalizando que determinado pedido ou volume não deve mais ser processado.
O WCS, ao identificar esse atributo, desconsiderará o pedido automaticamente, mesmo que ele já esteja presente internamente na base ORDEMSERVICO.
Essa abordagem garante que o controle de cancelamento fique centralizado no WMS, com o WCS apenas aplicando as regras conforme os dados recebidos e atualizados.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** b74c94a7d771ee86

Em casos em que é necessário o cancelamento de volumes o WMS deve disponibilizar a informação das ordens de serviço que estão canceladas e o Velox por sua vez irá mudar o status de todas as ordens de serviço recebidas do WMS para CANCELADA, onde o WCS faz as seguintes validações de acordo com os status dos volumes:
Integrado – Volume ainda não foi disponibilizado no Order Start: O volume não será disponibilizado para tarefa de separação no Order Start.
Disponível – Quando o volume está pronto para ser impresso no Order Start: O WCS irá retirar os volumes da lista de impressão e eles não serão coletados.
Em andamento – Quando já ocorreu a impressão das etiquetas e o volume está em processo de separação: Os volumes já separados serão direcionados ao stage e os volumes ainda pendentes de separação não serão mais separados.
Indução - Quando o volume já está no stage: Os volumes serão induzidos no sorter e serão encaminhados para o rejeito e serão rejeitados com o motivo cancelamento.
Na rampa – Quando o volume está na rampa aguardando alocação no PTL: Quando o operador realizar a leitura da etiqueta do volume todo os leds (PTLs) relacionados a rampa acenderam na cor azul informando que o volume está cancelado e com isso o operador deve solicitar suporte enviando o volume ao rejeito.
Alocado – Quando o volume já está no PTL: Não é mais possível realizar o cancelamento desse volume e as tratativas de cancelamento deve ser realizada exclusivamente no WMS.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Cubagem das caixas de picking  
**Score:** — (semantico) | **ID:** 911a831418858e93

A cubagem das caixas plásticas utilizadas no processo de picking será de responsabilidade do WCS. O sistema será responsável por considerar o volume total dos itens da missão e associá-las automaticamente à caixa plástica padrão definida para a operação. Essa caixa plástica será sempre a mesma, garantindo padronização no processo logístico. Ao assumir essa responsabilidade, o WCS assegura que cada volume (tarefa) seja corretamente alocado na caixa plástica desde o início da separação, sem a necessidade de intervenção manual para definição de tipo ou dimensão de embalagem, otimizando o controle operacional e a rastreabilidade dos volumes (tarefas) ao longo do processo.
O cadastro das medidas referente a caixa plástica que será utilizada pela operação é de responsabilidade do cliente.

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** ca5d605eddfdec7e

O cálculo de cubagem dos pedidos é de responsabilidade do WMS, que definirá quais caixas serão utilizadas e quais itens compõem cada volume do pedido. Os tipos de caixas disponíveis deverão estar previamente cadastrados no WCS com suas dimensões e peso. Esse cadastro é de responsabilidade do cliente.
As caixas utilizadas na separação já representam a embalagem final para o cliente — o setor de packing apenas fecha a caixa. Produtos de diferentes famílias (higiene, alimentícios e hospitalares) não podem ser coletados na mesma caixa; o WMS deverá realizar a segregação em volumes distintos.
Importante: Para garantir a leitura correta dos volumes no sorter, cada caixa deve ter apenas um código de barras visível e legível. Múltiplos códigos de barras podem causar erros de leitura e impactar o desempenho da operação.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Cubagem e Seleção Automática de Caixas no Picking  
**Score:** — (semantico) | **ID:** 35f6b4619c6ecf74

A cubagem das missões utilizadas no processo de picking será de responsabilidade do WCS. O sistema deverá calcular o volume total dos itens associados à missão e realizar a associação automática da caixa mais adequada, conforme o cadastro de tipos de caixas disponível no sistema.
Ao assumir essa responsabilidade, o WCS garante que cada volume (tarefa) seja corretamente alocado na melhor opção de embalagem desde o início da separação, eliminando a necessidade de intervenção manual para definição de tipo ou dimensão da caixa. Esse processo contribui para a otimização do fluxo operacional e assegura a rastreabilidade dos volumes (tarefas) ao longo de todo o processo.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Validação de Dimensões e Cubagem  
**Score:** — (semantico) | **ID:** 5849c666992bd815

O WCS deverá disponibilizar um parâmetro de configuração que permita ativar ou desativar a validação das dimensões físicas dos itens em relação à caixa selecionada, conforme descrito abaixo:
Parâmetro Ativo:
O WCS deverá validar se qualquer uma das dimensões do item ou da composição da missão (altura, largura ou comprimento) ultrapassa os limites dimensionais da caixa, além de validar a cubagem total (m³).
Caso alguma dimensão exceda o limite, o sistema deverá selecionar automaticamente uma caixa alternativa compatível.
Parâmetro Inativo:
O WCS deverá considerar exclusivamente a cubagem total (m³) da missão para a seleção da caixa, desprezando a validação individual das dimensões (altura, largura e comprimento).

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** c78430874ed75bbd

O WMS envia a definição de volumes e no projeto Navepark o WCS Velox é detentor da cubagem. O sistema recebe os itens soltos do pedido (Linha x SKU x Qtd) e utiliza um algoritmo tridimensional para determinar a quantidade ideal de caixas de transporte.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Matriz de Fragilidade  
**Score:** — (nome-topico) | **ID:** 5dc3336f1dd01479

O WCS recebe na integração de Pedido quais são as matrizes de cada SKU. O WCS Solicita apenas produtos que sejam adequados para indução. Para maximizar a eficiência, o sistema aplicará uma regra, onde o Velox somente disparará a solicitação do pallet se a demanda da onda for suficiente para consumir todas as caixas contidas nele, garantindo que não haja movimentação de pallets que não possam ser induzidos completamente.
Simultaneamente, o WCS definirá a ordem de formação dos pallets de expedição através de um algoritmo de cubagem graduado de 1 a 9, onde a classe 9 representa itens pesados (base) e a classe 1 itens leves (topo). Para que essa montagem física seja viável, o Velox orquestra a solicitação priorizando sempre a matriz maior do pedido, assegurando que os produtos mais pesados e robustos cheguem primeiro para compor a base, enquanto os itens mais frágeis chegam por último para finalizar o topo do pallet.
O processo de indução e formação de pallets no WCS (Velox) será regido pela Matriz de Fragilidade, obedecendo às seguintes regras de integridade de dados e otimização física:
1. Hierarquia de Dados (Matriz de Fragilidade)
A definição da classe de fragilidade do SKU será processada através do campo fragilidade.
Origem: Este dado pode estar previamente populado no Cadastro de Produtos (opcional), porém, o WCS considerará como mandatório e prioritário o valor recebido na Integração de Pedidos.
Regra de Sobrescrita: Caso o WCS receba na integração de pedidos um valor de matriz diferente do que consta no cadastro do produto, o sistema sobrescreverá a informação anterior, assumindo o dado da integração como a verdade absoluta para a execução.
2. Algoritmo de Cubagem e Sequenciamento (1 a 9)
Para garantir a estabilidade física da expedição, o WCS define a ordem de chegada dos produtos baseado em uma escala de densidade de 1 a 9 (onde 9 representa itens pesados/robustos e 1 itens leves/frágeis):
Sequenciamento: O Velox orquestra as solicitações ao WMS priorizando a Matriz Maior (Decrescente 9 -> 1).
Montagem Física: Isso assegura que os itens de Classe 9 cheguem primeiro ao Sorter para formar a base sólida do palete de expedição, enquanto os itens de Classe 1 são processados por último, sendo depositados no topo da pilha para evitar avarias por esmagamento.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Costas  
**Score:** — (semantico) | **ID:** 6e91c8df22368cd0

Este fluxo ocorre nas posições de costas do Mezanino. As costas originais do túnel térreo operam agora exclusivamente com fracionados de alta cubagem.
Passo a Passo:
Notificação: O operador visualiza no PDV a solicitação de Full Case e o LED atrás dele exibirá a posição exata que ele deve coletar o volume.
Etiquetagem: O sistema imprime automaticamente a etiqueta de expedição (Shipping Label) na impressora do posto. (sendo de extrema importância que essa etiqueta seja colada e padronizada da mesma altura que estão coladas as etiquetas nas caixas plásticas, assim evitando problemas de NOREAD com os scanners, vale ressaltar que colocar a etiqueta na altura certa e evitar o NOREAD é de responsabilidade da operação da Navepark).
Para a impressão das etiquetas no Picking Fullcase costas, serão destinadas impressoras de responsabilidade do cliente, onde o WCS irá enviar essa requisição para a impressora mais próxima do local de Picking Costas solicitado.
Execução:
O operador vai até o pallet (costas), pega a caixa fechada.
Cola a etiqueta de expedição na altura correta.
Indução: Caso o operador esteja no Mezanino, ele deposita esta caixa na Esteira Expressa (Túnel) onde essa caixa seguirá para o espiral, antes desse espiral terá um desvio especificamente para essas caixas Fullcase, onde elas seguirão para a espiral de fullcase e em seguida por dentro do porta pallet pulando o Picking Térreo.
Destino: Esta caixa segue direto para o Sorter, sem passar pelas estações de conferência de fracionado (Bypass), pois já é um volume fechado de fábrica.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Tela de Gestão de Volumes do Pedido  
**Score:** — (semantico) | **ID:** 579522c18556eb8d

Objetivo: Disponibilizar uma interface de supervisão para auditoria e cancelamento granular de volumes de um pedido antes do faturamento. O foco principal é mitigar erros operacionais de quantidade (ex: erro de digitação onde 350 unidades foram solicitadas ao invés de 35) sem a necessidade de cancelamento total e reprocessamento do pedido.
Funcionamento da Interface:
Busca e Identificação:
O supervisor realiza a busca pelo Número do Pedido.
O sistema exibe o status global do pedido e libera as opções de edição conforme o estágio atual.
Cenário A: Pedido em Separação ou Finalizado (Grid de Volumes)
O sistema carrega uma grid listando todos os volumes (LPNs/Etiquetas) gerados para o pedido.
Colunas: ID do Volume | Status (Picking / Sorteado / Expedição) | Itens/Qtd no Volume | Seleção (Checkbox).
Ação Operacional: O supervisor seleciona os volumes excedentes (no exemplo de 350 para 35, seleciona-se os volumes que contêm as 315 unidades excedentes) e aciona a função "CANCELAR VOLUMES SELECIONADOS".
Resultado: Os volumes não selecionados (corretos) seguem o fluxo normal de expedição.
Lógica de Retorno Interno (Fluxo de Exceção):
Os volumes cancelados nesta tela assumem imediatamente o status lógico de "RETORNO AO PICKING".
Diferencial WCS: O sistema não envia estes volumes para o fluxo fiscal de "Devolução de Venda" (que exigiria NF de entrada). O WCS trata como um estorno interno.
Físico: O sistema direciona estes volumes para uma rampa de exceção ou emite alerta no ponto de leitura, instruindo o abastecedor a devolver os itens fisicamente para a prateleira de Picking (estoque sombra), agilizando a recomposição do saldo.
Cenário B: Pedido Não Iniciado (Aguardando Separação)
Caso o pedido ainda não possua volumes gerados (Status: Aguardando Separação), a tela habilita a edição direta no cabeçalho.
Ação: O supervisor altera o campo "Quantidade Solicitada" (ex: de 350 para 35) e salva.
Resultado: O WCS recalcula a meta da onda instantaneamente. Quando o operador iniciar a tarefa, o sistema solicitará apenas a nova quantidade corrigida.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** Inteligência de Cubagem e Matriz de Fragilidade  
**Score:** — (semantico) | **ID:** df60c745686df698

Diferente de operações onde o WMS envia o pallet já montado, neste projeto o WCS Velox será responsável pelo cálculo de cubagem (Bin Packing). O sistema receberá os pedidos brutos e definirá, através de algoritmos próprios, quantos pallets serão necessários e quais itens compõem cada pallet.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** Matriz de Fragilidade (1 a 5)  
**Score:** — (nome-topico) | **ID:** b618211b1611648e

Para orientar a montagem e garantir a integridade dos produtos, o algoritmo considerará o atributo de fragilidade em uma escala de 1 a 5:
Classe 5 (Base): Itens pesados, robustos e não frágeis. Devem compor a base do pallet.
Classe 1 (Topo): Itens leves e frágeis. Devem ser alocados no topo.
Regra de Indução: O WCS calculará o pallet ideal respeitando essa pirâmide. Embora o operador possa bipar itens de forma aleatória, o cálculo de capacidade do pallet (quando ele é considerado "Cheio") levará em conta essas dimensões para evitar tombamento ou esmagamento virtual.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Cubing Intelligence and Fragility Matrix  
**Score:** — (nome-topico) | **ID:** 57172ca0e59deda6

The Velox WCS will be responsible for the cubing calculation. The system will receive the raw orders and define, through its own algorithms, how many pallets will be needed, which items make up each pallet, and whether they will all fit on that pallet.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Fragility Matrix (1 a 3)  
**Score:** — (nome-topico) | **ID:** c4392c4179f6feee

To guide the assembly and ensure product integrity, the algorithm will consider the fragility attribute on a scale from 1 to 3:
Class 3 (Base): Heavy, robust, and non-fragile items. They must make up the base of the pallet.
Class 2 (Middle): Items that are not so light, but not so heavy. They must be allocated in the middle of the pallet.
Class 1 (Top): Light and fragile items. They must be allocated at the top.
Induction Rule: The WCS will calculate the ideal pallet respecting this pyramid. The pallet capacity calculation (when it is considered "Full") will take these dimensions into account to avoid toppling or virtual crushing.

---
**Origem:** [I21.131] ADITIVO — `I21.131  - Aditivo Projeto PMB - Posto Virtual C2.docx`  
**Heading:** Lógica de Desvio (Sistema e Balança)  
**Score:** — (semantico) | **ID:** fd47cc6bac9da2b3

Ao chegar na balança, o sistema realizará a validação de peso considerando exclusivamente os itens provenientes dos postos físicos (postos 1 ao 13).
Com base nessa validação, o comportamento do sistema será definido da seguinte forma:
Validação de peso conforme esperado
Quando o peso aferido estiver consistente com os itens dos postos físicos (1 ao 13), o sistema entenderá que esses itens já foram validados com sucesso.
Ainda assim, ao identificar que existem itens associados ao posto virtual, a caixa será desviada para a estação de conferência. Nesse caso, a conferência será parcial, e ao realizar a leitura da caixa, o operador visualizará apenas os itens vinculados aos endereços virtuais, ou seja, somente os itens pendentes de validação manual.
Os itens já validados pela balança não serão apresentados para conferência.
Validação de peso divergente
Quando o peso aferido não estiver consistente com o esperado para os itens dos postos físicos, o sistema tratará o pedido como divergente.
Nesse caso, a caixa será desviada para a conferência com necessidade de validação completa. Ao realizar a leitura da caixa, o operador deverá conferir todos os itens do pedido, incluindo tanto os itens dos postos físicos quanto os itens associados aos endereços virtuais.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - GEMINI.docx`  
**Heading:** Resultados do Cubômetro - OK  
**Score:** — (nome-topico) | **ID:** 4202dfbece8e1ac4

Situação: É necessário formalizar quais dados do cubômetro podem ser enviados pela Invent e como os logs de rejeição serão tratados.
Capacidades Confirmadas:
É possível enviar o volume aferido pelo cubômetro.
É possível enviar o peso aferido pelo cubômetro.
Os motivos de rejeição manual pelo operador serão enviados no campo aprovacaoMotivo do JSON de CHECKOUT.
Decisão sobre Logs: A Invent enviará todos os "logs" de cada passagem da caixa pela balança dentro da mensagem de CHECKOUT. Isso elimina a necessidade de um "flag" adicional para não confirmação da TO.
Ações:
[Ação > Falar com Dev/Cliente] Ação INVENT: Verificar o esforço de desenvolvimento para incluir o array de logs de passagem pela balança na mensagem CHECKOUT.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - REV 0.docx`  
**Heading:** Resultados do Cubômetro  
**Score:** — (nome-topico) | **ID:** 734a7066bfe082ec

Com o cubometro ativado, a Invent enviará todos os "logs" de cada passagem da caixa dentro da mensagem de CHECKOUT. Isso elimina a necessidade de um "flag" adicional para não confirmação da OT.
Capacidades Confirmadas:
É possível enviar o volume aferido pelo cubômetro.
É possível enviar o peso aferido pelo cubômetro.
Os motivos de rejeição manual pelo operador serão enviados no campo “aprovacaoMotivo” do JSON de CHECKOUT.
*EXEMPLO JSON CHECKOUT AQUI*
PRECISA DA ATIVAÇÃO DO CUBOMETRO
É necessário formalizar quais dados do cubômetro podem ser enviados pela Invent e como os logs de rejeição serão tratados.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Lógica de Cubagem e Priorização  
**Score:** — (semantico) | **ID:** 622beafccd0f80c0

A partir das caixas habilitadas no Order Start, o WCS executará a cubagem de todos os volumes integrados respeitando a seguinte lógica de priorização:
Priorização da caixa: O WCS irá cubar os volumes com base nas caixas ativas na tela de configuração de caixa por Order Start. Selecionando automaticamente a melhor caixa para a quantidade de produtos solicitada com base no espaço de aproveitamento.
Balanceamento de volumes residuais nas duas últimas caixas: O WCS não deixará a última caixa da tarefa com poucos itens. Quando o volume restante resultar em uma última caixa subutilizada, o WCS irá rebalancear o conteúdo das duas últimas caixas, redistribuindo os itens de forma que caibam na menor caixa disponível entre as flagadas na tela de configuração do Order Start, garantindo que ambas as caixas finais estejam com ocupação balanceada. Essa lógica aplica-se a todos os tipos de caixa configurados no Order Start.
Exemplo de comportamento: uma tarefa cujo volume é suficiente para 4 caixas CP cheias mais 1 unidade residual sairia, na lógica atual, em 4 CP cheias + 1 CP contendo apenas 1 unidade. Com o balanceamento, o WCS manterá 3 CP cheias e redistribuirá o volume da quarta CP mais a unidade residual em 2 caixas de menor dimensão, ambas com ocupação balanceada, resultando em 3 CP cheias + 2 caixas menores bem aproveitadas, em vez de uma caixa praticamente vazia. O mesmo comportamento se aplica a qualquer combinação de tipos de caixa habilitados.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Recubagem por Indisponibilidade de Caixa  
**Score:** — (semantico) | **ID:** 070ea21d66e96e64

A recubagem aplica-se exclusivamente aos volumes que ainda não iniciaram o Order Start (volumes que ainda não tiveram a caixa bipada/liberada). Volumes já iniciados não são reprocessados.
Exemplo: durante a operação, a caixa P se esgota. O sistema solicita na tela uma caixa P para um volume que ainda não foi liberado. Como esse volume ainda não recebeu Order Start, o operador acessa a tela de configuração de caixas, retira a flag da caixa P, mantém marcadas apenas as caixas disponíveis e aciona "Recubagem".
Fluxo de correção:
O operador acessa a tela de configuração e seleciona o Order Start afetado.
Retira a flag da caixa indisponível (ex.: caixa P).
Mantém marcadas apenas as caixas disponíveis.
Aciona o botão "Recubagem".
O WCS reprocessa a cubagem apenas dos volumes ainda não iniciados, considerando somente as caixas que permanecem habilitadas.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Cadastro Prévio das Caixas de Papelão  
**Score:** — (semantico) | **ID:** cde7aeb68fd00e27

As caixas de papelão P, M e G deverão ser previamente cadastradas na tela já existente de cadastro de caixas, contendo suas respectivas dimensões (C × L × A) para fins de cubagem. Esse cadastro é pré-requisito para a utilização do código de pesagem: o sistema sempre considerará a cubagem associada ao tamanho cadastrado (ex.: caixa P → cubagem XYZ). Fica a cargo do operador, no momento da pesagem e impressão da etiqueta, bipar o tamanho correto correspondente à caixa física que está sendo pesada.

Obs.: As dimensões de cubagem serão definidas exclusivamente com base no tamanho de caixa bipadas pelo operador no momento da pesagem. Dessa forma, todas as caixas classificadas com o mesmo tamanho (P, M ou G) receberão as mesmas dimensões de cubagem cadastradas no sistema, independentemente das variações de peso entre elas.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Configuração da Matriz de Fragilidade  
**Score:** — (nome-topico) | **ID:** f68d172b49b86ba9

O sistema WCS deve disponibilizar uma tela de cadastro para que o usuário administrador configure as faixas de peso (ranges) e suas respectivas prioridades. Esta configuração servirá de base para todo o cálculo de empilhamento.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Visualização das Matrizes  
**Score:** — (nome-topico) | **ID:** 7c56401b473d0d74

Com base no filtro aplicado, o sistema exibirá as Matrizes de Fragilidade disponíveis (Ex: Pesado/Base, Médio, Leve/Topo).
Destaque Visual (Prioridade): O sistema destacará visualmente a Matriz Ativa (Da vez).
Exemplo: Se existirem itens da categoria "BASE" pendentes, o botão/card da matriz "BASE" estará em destaque (ex: cor verde ou negrito), enquanto as matrizes "MEIO" e "TOPO" estarão esmaecidas ou sinalizadas como secundárias.

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - Descritivo Funcional Aditivo - Pallets Com Ocorrências e liberação de etiquetas.docx`  
**Heading:** Volumes com ocorrência não bloqueiam a liberação de matriz  
**Score:** — (nome-topico) | **ID:** 3a7a9ce935c51cd5

O WCS deve desconsiderar, no cálculo de pendências de matriz (Contemplado no aditivo: “I23.1410 - NORMANDIA - ADITIVO OTIMIZAÇÃO DE COLETA”), todos os volumes vinculados a pallets com ocorrência ativa.
Antes de avaliar se a matriz pode ser liberada para o pallet, o WCS filtra e exclui os volumes esteja com status de ocorrência;
A matriz é liberada normalmente com base apenas nos volumes de pallets sem ocorrência;
Os volumes excluídos do cálculo continuam registrados no WCS para rastreabilidade e auditagem posterior.
Regra adicional de liberação por percentual e tempo
Após a liberação da matriz, o WCS monitora continuamente o percentual de volumes alocados no PTL e o tempo decorrido desde a liberação. Quando ambas as condições parametrizadas forem atingidas simultaneamente — percentual mínimo de alocação e tempo mínimo decorrido — o sistema libera automaticamente a impressão da próxima matriz para o pallet, mesmo que nem todos os volumes da matriz anterior tenham sido alocados.
Os parâmetros de percentual e tempo devem estar disponíveis na tela de configurações do WCS, com controle de acesso por nível de usuário.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** 2 – WCS calcula cubagem e informa ao SAP caixas necessárias por remessa  
**Score:** — (semantico) | **ID:** 67859591a490130b

Ao receber o dados do item acima, WCS deve retornar ao SAP as caixas necessárias por remessa com base na cubagem.
Obs: Quantidade de caixa por tamanho e o tamanho das caixas.
Onde o campo "N° Material da caixa (390000010)" é destinado ao tamanho da caixa, e o campo "Qtd cx por tamanho" a quantidade.
WCS  SAP
As integrações 2 e 3 do GAP 04. Serão de envio/resposta na mesma chamada, ocorrerá de forma síncrona, onde o WCS envia a necessidade de caixas e o SAP retorna com a quantidade de caixas criadas.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Balança 01 – Tara  
**Score:** — (semantico) | **ID:** a63b650618c526c0

Balança de tara, aferi o peso da caixa levando em consideração os produtos selecionados previamente e registra o peso da caixa de papelão mais o peso do item que está dentro. Após a leitura da caixa no scanner que antecede a balança o PLC envia a mensagem NDIR com a informação w.... w é a abreviação de weight (Peso) se a balança aferir o peso de tara de 450g o PLC enviará a mensagem de NDIR w450 ponto de decisão BAL01.
Para caixas com a informação de peso dentro da tolerância o WCS retornará a mensagem de DLST com a direção de desvio sendo 0001 para caixas que devem ir para linhas A ou 0002 para caixas que devem ir para linha C.
Para casos em que a caixa está fora do range peso da tolerância o WCS informa a direção de desvio 0004.
Após a mensagem de DLST do WCS o PLC retorna o ACNK com a direção de desvio de acordo com a informação passada na mensagem DSLT.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Balança 01 – Tara  
**Score:** — (semantico) | **ID:** b17c6b8f2a8aee8c

Balança de tara, aferi o peso da caixa levando em consideração os produtos selecionados previamente e registra o peso da caixa de papelão mais o peso dos itens que estão dentro. Após a leitura da caixa no scanner que antecede a balança o PLC envia a mensagem NDIR com a informação w.... w é a abreviação de weight (Peso) se a balança aferir o peso de tara de 450g o PLC enviará a mensagem de NDIR w450 ponto de decisão BAL01.
Para caixas com a informação de peso dentro da tolerância o WCS retornará a mensagem de DLST com a direção de desvio sendo 0001 para caixas que devem ir para linhas A ou 0002 para caixas que devem ir para linha C.
Para casos em que a caixa está fora do range peso da tolerância o WCS informa a direção de desvio 0004.
Após a mensagem de DLST do WCS o PLC retorna o ACNK com a direção de desvio de acordo com a informação passada na mensagem DSLT.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** cb31d8500e372f20

A cubagem será realizada pelo sistema VELOX, onde o mesmo pedido pode conter mais de uma caixa.
O sistema VELOX receberá do WMS (Cliente) integração com as informações de produtos e suas dimensões.
O sistema VELOX realiza o cálculo de cubagem e solicita quantidade de caixas necessárias para atender o pedido.
Caso os produtos não estejam com cadastro correto no WMS, o sistema Velox irá realizar o cálculo de cubagem errado, fazendo com que as caixas calculadas não atendam à quantidade/volumetria dos itens do pedido, podendo sobrar ou faltar caixas.
No momento da separação o operador irá validar se todos os itens caberão na caixa, caso a caixa atenda os itens separados operador segue com a separação.
Caso operador observe que não terá espaço suficiente para todos os itens solicitados, realiza a separação dos itens que couberem, e ao chegar no limite da caixa e existir itens pendentes de separação, solicitará uma nova caixa para completar esse pedido.
Para realizar a solicitação de caixa adicional, operador terá que solicitar através de um botão que estará disponível no mesmo posto de separação, neste momento o pedido voltará como primeiro da fila para tela do order start, e será vinculado à uma nova caixa, apenas com os itens faltantes de separação.
Ao realizar essa solicitação, os leds faltantes irão acender em laranja e apagar em seguida.
Como na caixa não haverá mais espaço físico disponível, caso tenha produtos a serem separados em outro posto, a caixa não será desviada.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** cc57a6c71ce86f22

SAP (cliente) deverá calcular a cubagem das caixas e envia todos os itens que     compõem cada caixa de picking.
Tamanhos de caixa em cm:

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 0b290f43d7978746

SAP (cliente) deverá calcular a cubagem das caixas e envia todos os itens que     compõem cada caixa de picking.
Tamanhos de caixa em cm:

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 4df0c5630ca9dc84

SAP (cliente) deverá calcular a cubagem das caixas e envia todos os itens que     compõem cada caixa de picking.
Tamanhos de caixa em cm:

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** e54924fc75257596

SAP (cliente) deverá calcular a cubagem das caixas e envia todos os itens que     compõem cada caixa de picking.
Tamanhos de caixa em cm:

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Pedido Misto com uma caixa Pollux / Venus  
**Score:** — (semantico) | **ID:** 2b16dcbbdb9376fe

Quando um volume de um pedido que se encaixa nesse cenário chegar na estação ORDER STARTER PTW, através de um Leitor Fixo na linha, ocorrerá a leitura do código de barras da caixa e será informado na tela do Order Starter, a CAIXA MASTER que deve ser montada para aquele pedido.
O Led da posição onde o volume deve ser alocado no PTW devera acender em AZUL.
PLC: O volume na esteira deverá parar no próximo sensor após o ponto de leitura. Caso não ocorra a leitura1’, o volume deverá permanecer também no sensor seguinte ao do Leitor Fixo na linha e nenhum Led do PTW acenderá.
O colaborador deverá montar a CAIXA MASTER e realizar a leitura do QR Code da caixa pelo Leitor Móvel instalado no PC.
Nesse instante, ocorrerá a impressão da etiqueta e os Leds acenderão em ROSA indicando onde o operador deve realizar o picking daquele volume alocado no início do processo.
Nesse instante, todos os Leds acenderão em VERDE indicando o fim do picking daquele volume alocado.
O operador deverá colar a etiqueta na caixa montada, inserir na caixa o volume que está na esteira e acionar o Led VERDE do PTW.
PLC: após acionar o led VERDE, a esteira deverá avançar, trazendo o próximo volume para tratamento.
PLC: Ao ser retirado o volume da linha, a esteira deve permanecer imóvel até que sejam dados os comandos conforme previstos acima.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Pedido Misto com uma caixa Pollux / Venus  
**Score:** — (semantico) | **ID:** 46c47f5c06003578

Quando um volume de um pedido que se encaixa nesse cenário chegar na estação ORDER STARTER PTW, através de um Leitor Fixo na linha, ocorrerá a leitura do código de barras da caixa e será informado na tela do Order Starter, a CAIXA MASTER que deve ser montada para aquele pedido.
O Led da posição onde o volume deve ser alocado no PTW devera acender em ROXO.
PLC: O volume na esteira deverá parar no próximo sensor após o ponto de leitura. Caso não ocorra a leitura, o volume deverá permanecer também no sensor seguinte ao do Leitor Fixo na linha e nenhum Led do PTW acenderá.
O colaborador deverá montar a CAIXA MASTER e realizar a leitura do QR Code da caixa pelo Leitor Móvel instalado no PC.
Nesse instante, ocorrerá a impressão da etiqueta e os Leds acenderão em ROXO indicando onde o operador deve realizar o picking daquele volume alocado no início do processo.
Nesse instante, todos os Leds acenderão em VERDE indicando o fim do picking daquele volume alocado.
O operador deverá colar a etiqueta na caixa montada, inserir na caixa o volume que está na esteira e acionar o Led VERDE do PTW.
PLC: após acionar o led VERDE, a esteira deverá avançar, trazendo o próximo volume para tratamento.
PLC: Ao ser retirado o volume da linha, a esteira deve permanecer imóvel até que sejam dados os comandos conforme previstos acima.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Cubagem de ULDs  
**Score:** — (semantico) | **ID:** 60607561f7b8e4aa

Nesta etapa operador registra o peso e as medidas da ULD, da seguinte maneira:
Na aba (cadastro cubagem) O operador precisa informar qual é o usuário responsável pela cubagem da ULD, bipar a etiqueta da ULD, informar qual seria o peso em quilos, altura (em centímetros), opcionalmente informar o contorno da ULD, e uma observação.
Na aba (edição cubagem) O operador precisa bipar a etiqueta da ULD, clicar no ícone de pesquisa, o sistema VELOX irá carregar as informações de cubagem anteriores da ULD, então o operador altera o que for pertinente e salva as modificações.

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.11.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 119908e38352ec3b

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.
O sistema MFC receberá do WMS a integração de pedidos, onde haverá as informações com o cadastro de produtos e suas dimensões.
O sistema MFC realiza o cálculo de cubagem e solicitará o tamanho de caixa e a quantidade necessária.
Caso a cubagem não esteja com cadastro correto, e extrapolar o limite de produtos em uma caixa, no momento da separação o operador irá clicar num led sem display, que haverá em cada estação solicitando uma nova caixa tamanho G, para o restante dos produtos deste pedido. Ao clicar nesse led, operador irá solicitar uma nova caixa, ao realizar essa solicitação, os leds faltantes irão acender em laranja e apagar em seguida.
Neste momento o pedido voltará para fila de pedidos do order start como prioritário, e será vinculado a uma nova caixa, apenas com os itens faltantes de separação.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Cubagem dos Volumes / Pré Expedição  
**Score:** — (semantico) | **ID:** 85f53aecfb0161bf

Operador ao receber essa caixa da conferência, faz a cubagem realiza a leitura da caixa, e na tela verifica a qual rua pertence e então deposita no pallet correspondente a rua.
Neste momento VELOX realiza a integração de confirmação de picking com as informações de cubagem do volume e quantidades reais separadas.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** 67205c982c89ddf3

O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** 8fb78adc42f0d983

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do WMS, para isso deverá receber todas as informações de dimensões e peso dos produtos para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens gerando os volumes e informa a quantidade de caixas que necessitará para atender o pedido.
Velox utilizara as informações dos itens, recebidas na integração de order recebida do WMS. Nesse caso, Velox não armazenará o cadastro dos itens no sistema Velox.
A cubagem será realizada visando as zonas de separação que serão determinadas pelo próprio cliente.
Um pedido pode ser coletado por um ou mais Picking cart(s) ao mesmo tempo, sendo uma ou mais tarefas de separação destinadas para as zonas de acordo com os produtos do pedido, serão unificados posteriormente no PTL.
Poderá ter mais de um volume de um pedido no mesmo Picking cart em casos de coleta na mesma zona de separação.
O sistema terá parâmetros de ocupações mínimas com o intuito de caso não serem alcançados, deverá ser acrescentado mais pedidos e coletados em conjunto, sendo separados posteriormente no PTW, método de separação multi.
O sistema terá parâmetros de ocupações máximas para termos o controle da caixa não ficar extremamente cheia a ponto de prejudicar a operação. Recomendamos que este parâmetro específico seja diferente de 100% devido as dimensões de cada produto onde existe uma grande variedade.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas plásticas com o mesmo padrão de medida para o Picking cart: (800 x 600 x 450) e Picking coletor (inconformes) será utilizado o carrinho que tem a medida: (pode ser que não seja utilizado a cubagem)
Após a conferência será realizado o Packing dos itens recebidos para caixas de papelão. Será de responsabilidade do time operacional informar ao Velox qual caixa será utilizada no Packing na tela de Conferência.
É de responsabilidade do cliente, o cadastro de todas as caixas de papelão com as informações de peso, dimensão e código da caixa, que serão utilizadas na área de Packing.
O WCS deve informar qual é o melhor modelo de caixa para atender o pedido, porém a operação terá a flexibilidade de seguir ou não a sugestão de caixa.

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** e6e61e1aec231c26

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do WMS, para isso deverá receber todas as informações de dimensões e peso dos produtos fracionados e fardos para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando o peso dos itens com o peso da caixa previamente cadastrado no Velox, com isso gera os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizara as informações dos itens, recebidas na integração de order recebida do WMS. Nesse caso, Velox não armazenará o cadastro dos itens no sistema Velox.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema Velox, com as informações de dimensões e peso de cada caixa.
A base volumétrica será determinada por tipo com referência ao menor volume de cada tipo de caixa.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas de papelão reutilizáveis.
Serão 5 (cinco) tipos de caixas, de tamanhos diferentes. As caixas determinadas como modelo serão utilizadas como base para o cálculo de cubagem.
Serão considerados para o cálculo de cubagem, itens fracionados e fardos.
Caixa fechada (full case) sempre será tratado como volume, sendo 1 (uma) caixa fechada 1 (um) volume. Exemplo, o pedido solicita 2 (duas) caixas fechadas do mesmo item, serão tratados como 2 (dois) volumes.
Importante!
Para a leitura correta e precisa do volume induzido na esteira, é preciso que a caixa contenha apenas um código de barras legível para a identificação do volume correto, qualquer outro código de barras presente no volume poderá ocasionar leitura incorreta, ocasionando impacto operacional.

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Caixa Adicional  
**Score:** — (semantico) | **ID:** 4d599ed2b11d02c3

No momento da separação, caso o operador perceba que a caixa não será suficiente para alocar todos os itens solicitados, conforme cálculo de cubagem, deverá solicitar uma caixa adicional na tela do PDV, com isso a separação será interrompida e operador seguirá para a próxima separação.
No order start, a caixa adicional desse pedido, será a prioridade para que seja a próxima enviada para a linha separação.
Operador ao receber essa caixa adicional, fará a separação somente dos itens que não couberam na caixa anterior.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** c7037756599a3338

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do WMS, para isso deverá receber todas as informações de dimensões e peso dos produtos para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens gerando os volumes e informa a quantidade de caixas que necessitará para atender o pedido.
Velox utilizara as informações dos itens, recebidas na integração de order recebida do WMS. Nesse caso, Velox não armazenará o cadastro dos itens no sistema Velox.
A cubagem será realizada visando as zonas de separação que serão determinadas pelo próprio cliente.
Um pedido pode ser coletado por um ou mais Picking cart(s) ao mesmo tempo, sendo uma ou mais tarefas de separação destinadas para as zonas de acordo com os produtos do pedido, serão unificados posteriormente no PTL.
Poderá ter mais de um volume de um pedido no mesmo Picking cart em casos de coleta na mesma zona de separação.
O sistema terá parâmetros de ocupações mínimas com o intuito de caso não serem alcançados, deverá ser acrescentado mais pedidos e coletados em conjunto, sendo separados posteriormente no PTW, método de separação multi.
O sistema terá parâmetros de ocupações máximas para termos o controle da caixa não ficar extremamente cheia a ponto de prejudicar a operação. Recomendamos que este parâmetro específico seja diferente de 100% devido as dimensões de cada produto onde existe uma grande variedade.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas plásticas com o mesmo padrão de medida para o Picking cart: (800 x 600 x 450) e Picking coletor (inconformes) será utilizado o carrinho que tem a medida: (pode ser que não seja utilizado a cubagem)
Após a conferência será realizado o Packing dos itens recebidos para caixas de papelão. Será de responsabilidade do time operacional informar ao Velox qual caixa será utilizada no Packing na tela de Conferência.
É de responsabilidade do cliente, o cadastro de todas as caixas de papelão com as informações de peso, dimensão e código da caixa, que serão utilizadas na área de Packing.
O WCS deve informar qual é o melhor modelo de caixa para atender o pedido, porém a operação terá a flexibilidade de seguir ou não a sugestão de caixa.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** d328542e9bddc9f6

O cálculo de cubagem para os pedidos, será de responsabilidade do WCS, onde fará o cálculo de cubagem a cada integração recebida do WMS, para isso deverá receber todas as informações de dimensões e peso dos produtos para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens gerando os volumes e informa a quantidade de caixas que necessitará para atender o pedido.
O WCS utilizara as informações dos itens, recebidas na integração de order recebida do WMS. Nesse caso, não armazenará o cadastro dos itens no sistema WCS.
A cubagem será realizada visando as zonas de separação que serão determinadas pelo próprio cliente.
Um pedido pode ser coletado por um ou mais Picking cart(s) ao mesmo tempo, sendo uma ou mais tarefas de separação destinadas para as zonas de acordo com os produtos do pedido, serão unificados posteriormente no PTL.
Poderá ter mais de um volume de um pedido no mesmo Picking cart em casos de coleta na mesma zona de separação.
O sistema terá parâmetros de ocupações mínimas com o intuito de caso não serem alcançados, deverá ser acrescentado mais pedidos e coletados em conjunto, sendo separados posteriormente no PTW, método de separação multi.
O sistema terá parâmetros de ocupações máximas para termos o controle da caixa não ficar extremamente cheia a ponto de prejudicar a operação. Recomendamos que este parâmetro específico seja diferente de 100% devido as dimensões de cada produto onde existe uma grande variedade.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas plásticas com o mesmo padrão de medida para o Picking cart: (800 x 600 x 450) e Picking coletor (inconformes) será utilizado o carrinho que tem a medida: (pode ser que não seja utilizado a cubagem)
Após a conferência será realizado o Packing dos itens recebidos para caixas de papelão. Será de responsabilidade do time operacional informar ao WCS qual caixa será utilizada no Packing na tela de Conferência.
É de responsabilidade do cliente, o cadastro de todas as caixas de papelão com as informações de peso, dimensão e código da caixa, que serão utilizadas na área de Packing.
O WCS deve informar qual é o melhor modelo de caixa para atender o pedido, porém a operação terá a flexibilidade de seguir ou não a sugestão de caixa.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** a05abd476d2f4d58

Cubagem de caixas por pedido será de responsabilidade TPC.
Cubagem de Pallet não está no escopo do projeto. (Tratativa Comercial para uma segunda fase caso necessário)

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 07eb0f72e803c7b5

Cubagem de caixas por pedido será de responsabilidade TPC.
Cubagem de Pallet será de responsabilidade INVENT.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Etiqueta Picking (Fracionado)  
**Score:** — (semantico) | **ID:** d9db21b901701639

Impressão responsabilidade Velox.
Obs.: Essa etiqueta será preenchida com as informações de produto, quantidade e lotes conforme o cálculo de cubagem realizado no início do processo, com isso todos os produtos alocados nesse volume serão impressos nessa etiqueta.
Informação adicionada: Código da caixa sugerida pelo cálculo de cubagem realizado pelo Velox.
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume e realize a separação dos itens alocados sistemicamente nesse volume.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** 5a194f19c7055fe0

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do EWM, para isso deverá receber todas as informações de dimensões e peso dos produtos fracionados para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens com as dimensões das caixas previamente cadastradas no Velox, com isso gera os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizará as informações dos itens recebidos a cada integração de order recebida do EWM. Com isso, Velox não realiza o cadastro de dimensões dos produtos.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema Velox, com as informações de dimensões de cada caixa.
As caixas utilizadas para realizar a separação dos itens fracionados, serão caixas finais de papelão, ou seja, não serão trocadas.
Full case (caixa fechada) sempre será tratado como volume, sendo 1 (uma) caixa fechada 1 (um) volume. Exemplo: o pedido solicita 2 (duas) caixas fechadas do mesmo produto, serão tratados como 2 (dois) volumes e impresso 2 (duas) etiquetas de full case (caixa fechada).
Teremos 5 (cinco) opções de caixas cadastradas no sistema:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta Picking (Fracionado)  
**Score:** — (semantico) | **ID:** 7273c71401fa7eec

Impressão responsabilidade Velox.
Obs.: Essa etiqueta será preenchida com as informações de produto, quantidade e lotes conforme o cálculo de cubagem realizado no início do processo, com isso todos os produtos alocados nesse volume serão impressos nessa etiqueta.
Informação adicionada: Código da caixa sugerida pelo cálculo de cubagem realizado pelo Velox.
Informação adicionada: Código Data Matrix do volume, para que o operador faça a leitura do volume e realize a separação dos itens alocados sistemicamente nesse volume.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** b059f7eb0b9ce057

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do EWM, para isso, os produtos a serem separados deverão estar devidamente cadastrados no sistema Velox, com todas as informações de dimensões e peso dos produtos fracionados para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens com as dimensões das caixas previamente cadastradas no Velox, com isso gera os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizará as informações dos produtos cadastrados no Velox, para realizar o cálculo de cubagem a cada integração de order recebida do EWM. Com isso, o cadastro de dimensões dos produtos no Velox deve estar atualizado, para que o cálculo seja assertivo.
Cubagem Fracionados Controlados
Para realizar o cálculo de cubagem dos produtos fracionados do tipo controlados, deverá verificar a informação no campo “portaria” da integração “Order” no início do processo, caso esse campo venha com algum tipo de informação, o produto é considerado controlado, caso Velox receba esse campo em branco ou nulo, Velox irá considerar o produto como não controlado.
O que difere o produto controlado de não controlado é o campo “portaria”.
Para que seja calculado como controlado, o campo “portaria” não deve estar em branco ou nulo.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Cubagem Fracionados Não Controlados
Para realizar o cálculo de cubagem dos produtos fracionados do tipo não controlados, deverá verificar a informação no campo “portaria” da integração “Order” no início do processo, caso esse campo venha em branco ou nulo, Velox irá considerar o produto como não controlado.
O que difere o produto controlado de não controlado é o campo “portaria”.
Para que seja calculado como não controlado, o campo “portaria” deve estar em branco ou nulo.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Cubagem Caixa Fechada (Full Case)
Para realizar o cálculo de cubagem para caixa fechada, o sistema Velox, fará o cálculo da quantidade solicitada com a quantidade de itens por caixa cadastrado nas informações do produto.
As informações devem estar cadastradas corretamente no sistema Velox.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Ao atingir a quantidade de itens por caixa, o sistema gera 1 (um) volume de caixa fechada.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema Velox, com as informações de dimensões de cada caixa cadastrada.
As caixas utilizadas para realizar a separação dos itens fracionados, serão caixas finais de papelão, ou seja, não serão trocadas.
Full case (caixa fechada) sempre será tratado como volume, sendo 1 (uma) caixa fechada 1 (um) volume. Exemplo: o pedido solicita 2 (duas) caixas fechadas do mesmo produto, serão tratados como 2 (dois) volumes e impresso 2 (duas) etiquetas de full case (caixa fechada).
Teremos 5 (cinco) opções de caixas cadastradas no sistema:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 45c55d88d8ddbb45

Operador irá utilizar o próprio coletor para acessar o sistema Velox, para realizar a separação direto no sistema Velox.
Para a separação de Full Case.
Com o cálculo de cubagem, Velox realiza a impressão das etiquetas de full case (caixa fechada).
Operador com as etiquetas impressas se desloca até o local de separação informado na etiqueta.
Ao chegar no local informado na etiqueta, operador deverá realizar a leitura da etiqueta de produção, para validar o produto e lote, caso esteja correto na tela do PDV deverá informar o operador que as informações são compatíveis e que pode seguir com a separação do produto solicitado.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.
Descrição do processo operacional de separação de full case:
Sistema Velox realiza a impressão das etiquetas de Full Case;
Operador seleciona no sistema Velox, qual pedido irá realizar a separação;
Operador se desloca até o local indicado na etiqueta;
Ao chegar no local do produto, operador realiza a leitura da etiqueta de produção para validar produto e lote;
Caso seja validado, tela do sistema (Coletor) fica verde;
Caso não seja validado, tela do sistema (Coletor) fica vermelho;
Caso as informações estejam corretas, operador realiza a leitura do código de barras (etiqueta) do produto que está separando;
Operador cola a etiqueta do produto na caixa separada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no sistema Velox pelo coletor;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todos os produtos do pedido selecionado;
Operador poderá iniciar a separação do próximo pedido;
Repetindo o processo.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta Picking (Fracionado)  
**Score:** — (semantico) | **ID:** dd4405a27f3cb45f

Impressão responsabilidade Velox.
Obs.: Essa etiqueta será preenchida com as informações de produto, quantidade e lotes conforme o cálculo de cubagem realizado no início do processo, com isso todos os produtos alocados nesse volume serão impressos nessa etiqueta.
Informação adicionada: Código da caixa sugerida pelo cálculo de cubagem realizado pelo Velox.
Informação adicionada: Código Data Matrix do volume, para que o operador faça a leitura do volume e realize a separação dos itens alocados sistemicamente nesse volume.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** 1900156ececc6c3e

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do EWM, para isso, os produtos a serem separados deverão estar devidamente cadastrados no sistema Velox, com todas as informações de dimensões e peso dos produtos fracionados para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens com as dimensões das caixas previamente cadastradas no Velox, com isso gera os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizará as informações dos produtos cadastrados no Velox, para realizar o cálculo de cubagem a cada integração de order recebida do EWM. Com isso, o cadastro de dimensões dos produtos no Velox deve estar atualizado, para que o cálculo seja assertivo.
Cubagem Fracionados Controlados
Para realizar o cálculo de cubagem dos produtos fracionados do tipo controlados, deverá verificar a informação no campo “portaria” da integração “Order” no início do processo, caso esse campo venha com algum tipo de informação, o produto é considerado controlado, caso Velox receba esse campo em branco ou nulo, Velox irá considerar o produto como não controlado.
O que difere o produto controlado de não controlado é o campo “portaria”.
Para que seja calculado como controlado, o campo “portaria” não deve estar em branco ou nulo.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Cubagem Fracionados Não Controlados
Para realizar o cálculo de cubagem dos produtos fracionados do tipo não controlados, deverá verificar a informação no campo “portaria” da integração “Order” no início do processo, caso esse campo venha em branco ou nulo, Velox irá considerar o produto como não controlado.
O que difere o produto controlado de não controlado é o campo “portaria”.
Para que seja calculado como não controlado, o campo “portaria” deve estar em branco ou nulo.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Cubagem Caixa Fechada (Full Case)
Para realizar o cálculo de cubagem para caixa fechada, o sistema Velox, fará o cálculo da quantidade solicitada com a quantidade de itens por caixa cadastrado nas informações do produto.
As informações devem estar cadastradas corretamente no sistema Velox.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Ao atingir a quantidade de itens por caixa, o sistema gera 1 (um) volume de caixa fechada.
Cubagem Especial – Cliente Específico
Sistema Velox terá o cadastro para clientes específicos para quando receber pedidos desses clientes cadastrados no sistema Velox, realize a cubagem conforme a necessidade.
A regra de cubagem dos produtos para esses clientes, será que cada item deve ser cubado em uma caixa sendo 1 (um) caixa para 1 (um) item do mesmo sku e mesmo lote.
Exemplo 1: Caso o pedido solicite 10 (dez) unidades de 1 (um) único SKU e mesmo lote, a cubagem deve ser feita considerando as 10 (dez) unidades.
Exemplo 2: Caso o pedido solicite 10 (dez) unidades de 1 (um) único SKU, porém, desses 10 (dez) são 5 (cinco) unidades de um lote e 5 (cinco) unidades de outro lote. Nesse caso a cubagem deverá ser feita considerando as 5 (cinco) unidades de cada lote.
Para esse cenário o sistema Velox não deve misturar lotes e sku em uma mesma caixa.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema Velox, com as informações de dimensões de cada caixa cadastrada.
As caixas utilizadas para realizar a separação dos itens fracionados, serão caixas finais de papelão, ou seja, não serão trocadas.
Full case (caixa fechada) sempre será tratado como volume, sendo 1 (uma) caixa fechada 1 (um) volume. Exemplo: o pedido solicita 2 (duas) caixas fechadas do mesmo produto, serão tratados como 2 (dois) volumes e impresso 2 (duas) etiquetas de full case (caixa fechada).
Teremos 5 (cinco) opções de caixas cadastradas no sistema:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 07e9ba627cbdf3c9

Operador irá utilizar o próprio coletor para acessar o sistema Velox, para realizar a separação direto no sistema Velox.
Para a separação de Full Case.
Com o cálculo de cubagem, Velox realiza a impressão das etiquetas de full case (caixa fechada).
Operador com as etiquetas impressas se desloca até o local de separação informado na etiqueta.
Ao chegar no local informado na etiqueta, operador deverá realizar a leitura da etiqueta de produção, para validar o produto e lote, caso esteja correto na tela do PDV deverá informar o operador que as informações são compatíveis e que pode seguir com a separação do produto solicitado.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.
Descrição do processo operacional de separação de full case:
Sistema Velox realiza a impressão das etiquetas de Full Case;
Operador seleciona no sistema Velox, qual pedido irá realizar a separação;
Operador se desloca até o local indicado na etiqueta;
Ao chegar no local do produto, operador realiza a leitura da etiqueta de produção para validar produto e lote;
Caso seja validado, tela do sistema (Coletor) fica verde;
Caso não seja validado, tela do sistema (Coletor) fica vermelho;
Caso as informações estejam corretas, operador realiza a leitura do código de barras (etiqueta) do produto que está separando;
Operador cola a etiqueta do produto na caixa separada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no sistema Velox pelo coletor;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todos os produtos do pedido selecionado;
Operador poderá iniciar a separação do próximo pedido;
Repetindo o processo.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta Picking (Fracionado)  
**Score:** — (semantico) | **ID:** 987dc9c1ca064dd7

Impressão responsabilidade Velox.
Obs.: Essa etiqueta será preenchida com as informações de produto, quantidade e lotes conforme o cálculo de cubagem realizado no início do processo, com isso todos os produtos alocados nesse volume serão impressos nessa etiqueta.
Informação adicionada: Código da caixa sugerida pelo cálculo de cubagem realizado pelo Velox.
Informação adicionada: Código Data Matrix do volume, para que o operador faça a leitura do volume e realize a separação dos itens alocados sistemicamente nesse volume.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** d798125a5cd0afcd

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do EWM, para isso, os produtos a serem separados deverão estar devidamente cadastrados no sistema Velox, com todas as informações de dimensões e peso dos produtos fracionados para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens com as dimensões das caixas previamente cadastradas no Velox, com isso gera os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizará as informações dos produtos cadastrados no Velox, para realizar o cálculo de cubagem a cada integração de order recebida do EWM. Com isso, o cadastro de dimensões dos produtos no Velox deve estar atualizado, para que o cálculo seja assertivo.
Cubagem Fracionados Controlados
Para realizar o cálculo de cubagem dos produtos fracionados do tipo controlados, deverá verificar a informação no campo “portaria” da integração “Order” no início do processo, caso esse campo venha com algum tipo de informação, o produto é considerado controlado, caso Velox receba esse campo em branco ou nulo, Velox irá considerar o produto como não controlado.
O que difere o produto controlado de não controlado é o campo “portaria”.
Para que seja calculado como controlado, o campo “portaria” não deve estar em branco ou nulo.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Cubagem Fracionados Não Controlados
Para realizar o cálculo de cubagem dos produtos fracionados do tipo não controlados, deverá verificar a informação no campo “portaria” da integração “Order” no início do processo, caso esse campo venha em branco ou nulo, Velox irá considerar o produto como não controlado.
O que difere o produto controlado de não controlado é o campo “portaria”.
Para que seja calculado como não controlado, o campo “portaria” deve estar em branco ou nulo.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Cubagem Caixa Fechada (Full Case)
Para realizar o cálculo de cubagem para caixa fechada, o sistema Velox, fará o cálculo da quantidade solicitada com a quantidade de itens por caixa cadastrado nas informações do produto.
As informações devem estar cadastradas corretamente no sistema Velox.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Ao atingir a quantidade de itens por caixa, o sistema gera 1 (um) volume de caixa fechada.
Cubagem Especial – Cliente Específico
Sistema Velox terá o cadastro para clientes específicos para quando receber pedidos desses clientes cadastrados no sistema Velox, realize a cubagem conforme a necessidade.
A regra de cubagem dos produtos para esses clientes, será que cada item deve ser cubado em uma caixa sendo 1 (um) caixa para 1 (um) item do mesmo sku e mesmo lote.
Exemplo 1: Caso o pedido solicite 10 (dez) unidades de 1 (um) único SKU e mesmo lote, a cubagem deve ser feita considerando as 10 (dez) unidades.
Exemplo 2: Caso o pedido solicite 10 (dez) unidades de 1 (um) único SKU, porém, desses 10 (dez) são 5 (cinco) unidades de um lote e 5 (cinco) unidades de outro lote. Nesse caso a cubagem deverá ser feita considerando as 5 (cinco) unidades de cada lote.
Para esse cenário o sistema Velox não deve misturar lotes e sku em uma mesma caixa.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema Velox, com as informações de dimensões de cada caixa cadastrada.
As caixas utilizadas para realizar a separação dos itens fracionados, serão caixas finais de papelão, ou seja, não serão trocadas.
Full case (caixa fechada) sempre será tratado como volume, sendo 1 (uma) caixa fechada 1 (um) volume. Exemplo: o pedido solicita 2 (duas) caixas fechadas do mesmo produto, serão tratados como 2 (dois) volumes e impresso 2 (duas) etiquetas de full case (caixa fechada).
Teremos 5 (cinco) opções de caixas cadastradas no sistema:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 7be24dd32efd809a

Operador irá utilizar o próprio coletor para acessar o sistema Velox, para realizar a separação direto no sistema Velox.
Para a separação de Full Case, não terá leds nas posições de caixa fechada.
Com o cálculo de cubagem, Velox realiza a impressão das etiquetas de full case (caixa fechada).
Operador com as etiquetas impressas se desloca até o local de separação informado na etiqueta.
Ao chegar no local informado na etiqueta, operador deverá realizar a leitura da etiqueta de produção, para validar o produto e lote, caso esteja correto na tela do PDV deverá informar o operador que as informações são compatíveis e que pode seguir com a separação do produto solicitado.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.
Descrição do processo operacional de separação de full case:
Sistema Velox realiza a impressão das etiquetas de Full Case;
Operador seleciona no sistema Velox, qual pedido irá realizar a separação;
Operador se desloca até o local indicado na etiqueta;
Ao chegar no local do produto, operador realiza a leitura da etiqueta de produção para validar produto e lote;
Caso seja validado, tela do sistema (Coletor) fica verde;
Caso não seja validado, tela do sistema (Coletor) fica vermelho;
Caso as informações estejam corretas, operador realiza a leitura do código de barras (etiqueta) do produto que está separando;
Operador cola a etiqueta do produto na caixa separada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no sistema Velox pelo coletor;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todos os produtos do pedido selecionado;
Operador poderá iniciar a separação do próximo pedido;
Repetindo o processo.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Etiqueta Picking (Fracionado)  
**Score:** — (semantico) | **ID:** e5d2066526123755

Impressão responsabilidade Velox.
Obs.: Essa etiqueta será preenchida com as informações de produto, quantidade e lotes conforme o cálculo de cubagem realizado no início do processo, com isso todos os produtos alocados nesse volume serão impressos nessa etiqueta.
Informação adicionada: Código da caixa sugerida pelo cálculo de cubagem realizado pelo Velox.
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume e realize a separação dos itens alocados sistemicamente nesse volume.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** e32b4795aad09f3e

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do EWM, para isso deverá receber todas as informações de dimensões e peso dos produtos fracionados para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens com as dimensões das caixas previamente cadastradas no Velox, com isso gera os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizará as informações dos itens recebidos a cada integração de order recebida do EWM. Com isso, Velox não realiza o cadastro de dimensões dos produtos.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema Velox, com as informações de dimensões de cada caixa.
As caixas utilizadas para realizar a separação dos itens fracionados, serão caixas finais de papelão, ou seja, não serão trocadas.
Full case (caixa fechada) sempre será tratado como volume, sendo 1 (uma) caixa fechada 1 (um) volume. Exemplo: o pedido solicita 2 (duas) caixas fechadas do mesmo produto, serão tratados como 2 (dois) volumes e impresso 2 (duas) etiquetas de full case (caixa fechada).
Teremos 5 (cinco) opções de caixas cadastradas no sistema:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta Picking (Fracionado)  
**Score:** — (semantico) | **ID:** 5b3d4e175980b011

Impressão responsabilidade Velox.
Obs.: Essa etiqueta será preenchida com as informações de produto, quantidade e lotes conforme o cálculo de cubagem realizado no início do processo, com isso todos os produtos alocados nesse volume serão impressos nessa etiqueta.
Informação adicionada: Código da caixa sugerida pelo cálculo de cubagem realizado pelo Velox.
Informação adicionada: Código Data Matrix do volume, para que o operador faça a leitura do volume e realize a separação dos itens alocados sistemicamente nesse volume.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** 7fde92ec202a2671

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do EWM, para isso, os produtos a serem separados deverão estar devidamente cadastrados no sistema Velox, com todas as informações de dimensões e peso dos produtos fracionados para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando as dimensões dos itens com as dimensões das caixas previamente cadastradas no Velox, com isso gera os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizará as informações dos produtos cadastrados no Velox, para realizar o cálculo de cubagem a cada integração de order recebida do EWM. Com isso, o cadastro de dimensões dos produtos no Velox deve estar atualizado, para que o cálculo seja assertivo.
Cubagem Fracionados Controlados
Para realizar o cálculo de cubagem dos produtos fracionados do tipo controlados, deverá verificar a informação no campo “portaria” da integração “Order” no início do processo, caso esse campo venha com algum tipo de informação, o produto é considerado controlado, caso Velox receba esse campo em branco ou nulo, Velox irá considerar o produto como não controlado.
O que difere o produto controlado de não controlado é o campo “portaria”.
Para que seja calculado como controlado, o campo “portaria” não deve estar em branco ou nulo.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Cubagem Fracionados Não Controlados
Para realizar o cálculo de cubagem dos produtos fracionados do tipo não controlados, deverá verificar a informação no campo “portaria” da integração “Order” no início do processo, caso esse campo venha em branco ou nulo, Velox irá considerar o produto como não controlado.
O que difere o produto controlado de não controlado é o campo “portaria”.
Para que seja calculado como não controlado, o campo “portaria” deve estar em branco ou nulo.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Cubagem Caixa Fechada (Full Case)
Para realizar o cálculo de cubagem para caixa fechada, o sistema Velox, fará o cálculo da quantidade solicitada com a quantidade de itens por caixa cadastrado nas informações do produto.
As informações devem estar cadastradas corretamente no sistema Velox.
Com as informações cadastradas no sistema Velox de quantidade de itens por caixa, enquanto não atingir a quantidade para fechar 1 (uma) caixa fechada, se mantem como fracionado.
Ao atingir a quantidade de itens por caixa, o sistema gera 1 (um) volume de caixa fechada.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema Velox, com as informações de dimensões de cada caixa cadastrada.
As caixas utilizadas para realizar a separação dos itens fracionados, serão caixas finais de papelão, ou seja, não serão trocadas.
Full case (caixa fechada) sempre será tratado como volume, sendo 1 (uma) caixa fechada 1 (um) volume. Exemplo: o pedido solicita 2 (duas) caixas fechadas do mesmo produto, serão tratados como 2 (dois) volumes e impresso 2 (duas) etiquetas de full case (caixa fechada).
Teremos 5 (cinco) opções de caixas cadastradas no sistema:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Full Case (Caixa Fechada)  
**Score:** — (semantico) | **ID:** 2bf4c8161f8f3243

Operador irá utilizar o próprio coletor para acessar o sistema Velox, para realizar a separação direto no sistema Velox.
Para a separação de Full Case, não terá leds nas posições de caixa fechada.
Com o cálculo de cubagem, Velox realiza a impressão das etiquetas de full case (caixa fechada).
Operador com as etiquetas impressas se desloca até o local de separação informado na etiqueta.
Ao chegar no local informado na etiqueta, operador deverá realizar a leitura da etiqueta de produção, para validar o produto e lote, caso esteja correto na tela do PDV deverá informar o operador que as informações são compatíveis e que pode seguir com a separação do produto solicitado.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.
Descrição do processo operacional de separação de full case:
Sistema Velox realiza a impressão das etiquetas de Full Case;
Operador seleciona no sistema Velox, qual pedido irá realizar a separação;
Operador se desloca até o local indicado na etiqueta;
Ao chegar no local do produto, operador realiza a leitura da etiqueta de produção para validar produto e lote;
Caso seja validado, tela do sistema (Coletor) fica verde;
Caso não seja validado, tela do sistema (Coletor) fica vermelho;
Caso as informações estejam corretas, operador realiza a leitura do código de barras (etiqueta) do produto que está separando;
Operador cola a etiqueta do produto na caixa separada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no sistema Velox pelo coletor;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todos os produtos do pedido selecionado;
Operador poderá iniciar a separação do próximo pedido;
Repetindo o processo.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** b71054702780ea2c

O processo de cubagem será feito nos dois sorters.
No ponto de cubagem, serão instalados uma balança, um cubômetro e uma câmera no topo de cada nível. Esses dispositivos trabalham em conjunto para registrar o peso, as dimensões e a forma dos volumes, permitindo uma determinação da cubagem de forma mais precisa e eficiente, assim, reduzindo os erros e aumentando a eficiência da operação.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 4a2f9138605fa62e

O processo de cubagem será feito nos dois sorters.
No ponto de cubagem, serão instalados uma balança, um cubômetro e uma câmera no topo de cada nível. Esses dispositivos trabalham em conjunto para registrar o peso, as dimensões e a forma dos volumes, permitindo uma determinação da cubagem de forma mais precisa e eficiente, assim, reduzindo os erros e aumentando a eficiência da operação.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** a21ab7a9c81e667d

O processo de cubagem será feito nos dois sorters.
No ponto de cubagem, serão instalados uma balança, um cubômetro e uma câmera no topo de cada nível. Esses dispositivos trabalham em conjunto para registrar o peso, as dimensões e a forma dos volumes, permitindo uma determinação da cubagem de forma mais precisa e eficiente, assim, reduzindo os erros e aumentando a eficiência da operação.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 989c04c35ab83090

As informações de cubagem serão aferidas no portal de leitura nos dois sorters.
No portal de leitura de cada sorter, serão instalados uma balança, um cubômetro e uma câmera no topo de cada nível. Esses dispositivos trabalham em conjunto para realizar a leitura do volume, registrar o peso e as dimensões, permitindo.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** ceae566672473a1c

Para iniciar o processo, o sistema Velox, deverá receber via integração todas as informações dos pedidos cubados, previstos para a operação atual.
Velox deverá receber os pedidos cubados pelo WMS, assim como a quantidade e tipos de caixas deverá ser utilizado para a separação do pedido.
Com isso, Velox informa na tela do order start, quantas caixas e tamanhos necessários para atender o pedido, conforme o cálculo realizado pelo WMS.
Operador realiza a impressão das etiquetas necessárias para aquele pedido e fixa as etiquetas nas caixas conforme informação na tela do Velox.
Ao realizar o processo de impressão e fixação das etiquetas nas caixas, operador induz as caixas na linha para seguir para as estações de separação.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** e7d9eecf124cb792

O cálculo de cubagem para os pedidos fracionados será de responsabilidade WMS do cliente, assim como os números dos volumes e itens pertencentes.
Sistema Velox recebe a integração com as informações necessárias para realizar a separação do pedido conforme a cubagem realizada pelo WMS.
Obs.: Para a leitura correta e precisa do volume induzido na esteira, é preciso que a caixa contenha apenas um código de barras legível para identificação do volume correto, qualquer outro código de barras presente no volume poderá ocasionar leitura incorreta.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Display 10 Dígitos (Corredores)  
**Score:** — (semantico) | **ID:** 8a6c51c3ee2331d9

Separação nos nichos dos corredores (1 unidade por nicho)

---
**Origem:** [I23.1602] 2023 — `I23.1602 - DOCUMENTO DE ESPECIFICAÇÃO REV1- SEPARAÇÕES ET.VELOX - PETER.docx`  
**Heading:** Separação Kaizen (ET) + Invent  
**Score:** — (semantico) | **ID:** 14ba096217a9b99f

Para o volume do pedido que contenha produtos a serem separados tanto pelo sistema ET Picking Cart Kaizen quanto pela automação Invent.
Deverá seguir o seguinte processo operacional.
Processo operacional
No sistema Kaizen, operador realiza o vínculo da caixa plástica VID a um volume (VEN) do pedido;
Operador realiza a separação via sistema ET Kaizen de todos os produtos dos corredores controlados pelo Picking Cart;
Após a separação do ET, Kaizen realiza a integração para o Velox, informando quais produtos restante de separação, para serem separados na automação Invent;
Operador insere a caixa plástica VID na esteira de fracionados (mesma caixa iniciada no ET);
Leitor de código de barras realiza a leitura da etiqueta da caixa plástica VID;
Sistema Velox, válida se existe produtos a serem separados na estação de picking;
Se falso, caixa segue para o próximo leitor de código de barras;
Se verdadeiro, caixa é desviada para estação;
Operador realiza a separação dos produtos nas posições frente e costas, guiado pelos leds acesos das posições da frente e nas informações nos leds das costas da automação;
Operador realiza a conferência dos produtos separados via coletor e sistema Kaizen;
Após finalizar a separação de todos os produtos da estação de separação, operador insere a caixa novamente na linha expressa da automação de fracionados;
O mesmo processo se repete até finalizar todas as estações de separação;
Sistema Kaizen, válida se o volume deve seguir para conferência;
Se verdadeiro, caixa deve ser direcionada para conferência;
Na estação de conferência, operador realiza o processo de conferência pelo coletor com o sistema Kaizen;
Após realizar a conferência, insere a caixa na esteira novamente, para seguir para o packing;
Se falso e após conferência, caixa segue para a estação de packing;
Na entrada da estação de packing, terá um leitor de código de barras e uma impressora com guilhotina para que o sistema Velox ao identificar o volume, realize a impressão de etiqueta de expedição VEN e ela seja despejada no interior da caixa plástica em movimento.
Na estação de packing, operador realiza a troca da caixa plástica para a caixa de papelão (expedição).
Operador fixa etiqueta de expedição na caixa de expedição;
Operador induz a caixa de expedição na esteira, seguindo para o sorter.
Volume ao ser lido no portal de leitura do sorter, Velox verifica a informação VEN da etiqueta para realizar o desvio na rampa correta.
Caso seja lida corretamente e a informação validada, a caixa é direcionada a rampa conforme mapa.
Caso algum problema seja encontrado no volume, seja etiqueta rasurada ou falta de rota, a caixa é direcionada ao rejeito do sorter.
No rejeito do sorter, operador realiza a tratativa do volume e induz novamente no sorter.
Integração
Ao finalizar a separação via ET dos itens dos corredores, Kaizen deve realizar a integração para o Velox com a informação dos produtos estão pendentes de separação nos flowracks e o número da caixa plástica (VID) que foi vinculada naquele volume.

---
**Origem:** [I23.1602] 2023 — `I23.1602 - DOCUMENTO DE ESPECIFICAÇÃO REV1- SEPARAÇÕES ET.VELOX - PETER.docx`  
**Heading:** Separação Kaizen (ET)  
**Score:** — (semantico) | **ID:** e1608621aa5114fd

Para o volume do pedido que contenha produtos a serem separados totalmente pelo picking cart (ET) controlado pela Kaizen, isso significa que todos os produtos que compõe aquele volume estão alocados nas posições dos corredores controlados pelo sistema picking cart Kaizen.
Deverá seguir o seguinte processo operacional.
Processo operacional
No sistema Kaizen, operador realiza o vínculo da caixa plástica VID a um volume (VEN) do pedido;
Operador realiza a separação via sistema ET Kaizen de todos os produtos dos corredores controlados pelo picking cart;
Após a separação do ET, Kaizen realiza a integração para o Velox, com as informações do volume VEN e caixa VID vinculada;
Em casos que o volume precise ser conferido, operador do picking cart deve retirar a caixa do picking cart e inserir na estação de conferência ET;
Na estação de conferência ET, operador realiza a conferência dos produtos do volume utilizando um coletor com o sistema Kaizen;
Após realizar a conferência do volume, operador insere volume na estação de packing ET.
Em casos que o volume não precise ser conferido, operador do picking cart deve retirar a caixa do picking cart e inserir na estação de packing ET;
Na estação de packing ET, operador realiza a troca da caixa plástica para a caixa de expedição;
Operador realiza a impressão da etiqueta de expedição, gerada pelo sistema Velox;
Na caixa de expedição, operador fixa a etiqueta impressa.
Operador insere a caixa de expedição na esteira de sorter.
Integração
Ao finalizar a separação dos itens dos corredores, Kaizen deve realizar a integração para o Velox para que o Velox possa imprimir a etiqueta de expedição e realizar o direcionamento da caixa para sua rota correta conforme o mapa do sorter, pois nesse caso como a caixa será tratada no inicio da linha, operador irá induzir a caixa de expedição na esteira de full case e no portal de leitura, será considerado a informação da etiqueta VEN.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** 91eb32424e76b137

O cálculo de cubagem para os pedidos, será de responsabilidade Velox, onde o sistema Velox fará o cálculo de cubagem a cada integração recebida do WMS, para isso deverá receber todas as informações de dimensões e peso dos produtos fracionados e fardos para realizar esse cálculo. Com isso, realiza o cálculo de cubagem, totalizando o peso dos itens com o peso da caixa previamente cadastrado no Velox, com isso gera os volumes e informa a quantidade de caixas e tipos que necessitará para atender o pedido.
Velox utilizara as informações dos itens, recebidas na integração de order recebida do WMS. Nesse caso, Velox não armazenará o cadastro dos itens no sistema Velox.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema Velox, com as informações de dimensões e peso de cada caixa.
A base volumétrica será determinada por tipo com referência ao menor volume de cada tipo de caixa.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas de papelão reutilizáveis.
Serão 5 (cinco) tipos de caixas, de tamanhos diferentes. As caixas determinadas como modelo serão utilizadas como base para o cálculo de cubagem.
Serão considerados para o cálculo de cubagem, itens fracionados e fardos.
Caixa fechada (full case) sempre será tratado como volume, sendo 1 (uma) caixa fechada 1 (um) volume. Exemplo, o pedido solicita 2 (duas) caixas fechadas do mesmo item, serão tratados como 2 (dois) volumes.
Importante!
Para a leitura correta e precisa do volume induzido na esteira, é preciso que a caixa contenha apenas um código de barras legível para a identificação do volume correto, qualquer outro código de barras presente no volume poderá ocasionar leitura incorreta, ocasionando impacto operacional.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Caixa Adicional  
**Score:** — (semantico) | **ID:** 5f0725e623a8da9c

No momento da separação, caso o operador perceba que a caixa não será suficiente para alocar todos os itens solicitados, conforme cálculo de cubagem, deverá solicitar uma caixa adicional na tela do PDV, com isso a separação será interrompida e operador seguirá para a próxima separação.
No order start, a caixa adicional desse pedido, será a prioridade para que seja a próxima enviada para a linha separação.
Operador ao receber essa caixa adicional, fará a separação somente dos itens que não couberam na caixa anterior.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1[1].docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 46e63d66168a6ca1

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.
O processo de cubagem contará com uma balança, dimensionador e câmera para garantir com precisão as dimensões de cada produto.
O sistema MFC receberá do WMS a integração de pedidos, onde haverá as informações com o cadastro de produtos e suas dimensões.
O sistema MFC realiza o cálculo de cubagem e solicitará o tamanho de caixa e a quantidade necessária.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** d0e08bcc31c821a8

A cubagem será realizada pelo sistema MFC, onde o mesmo pedido pode conter mais de uma caixa.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** a18e79b459dd0198

Para iniciar o processo, o WCS, deverá receber via integração todas as informações dos pedidos cubados, previstos para a operação atual.
Velox deverá receber os pedidos cubados pelo WMS/KAIZEN, assim como a quantidade e tipos de caixas deverá ser utilizado para a separação do pedido.
Com isso, o WCS informa na tela do order start, quantas caixas e tamanhos necessários para atender o pedido, conforme o cálculo realizado pelo WMS/KAIZEN.
Operador realiza a impressão das etiquetas necessárias para aquele pedido e fixa as etiquetas nas caixas conforme informação na tela do WCS.
Ao realizar o processo de impressão e fixação das etiquetas nas caixas, operador induz as caixas na linha para seguir para as estações de separação.
Cada posto de separação contará com o auxílio de 1 (um) PDV no posto, que também orientará na separação e conferência dos produtos separados.
Operador ao receber a caixa no posto de separação, fará a leitura automática do código de barras do volume com o Scanner fixo da linha, com isso o PDV mostrará o número daquele volume que iniciará a separação.
A tela do PDV será atualizada com os detalhes do item, como quantidade, endereço, EAN esperado, descrição e outros detalhes, com isso o operador fará a separação da quantidade solicitada e realizara a leitura 100% dos itens.
Operador deverá realizar a leitura do EAN do produto através de um código de barras. Ao realizar a leitura do item, o WCS irá decrementar a quantidade solicitada, o controle de lote é responsabilidade 100% do WMS (Kaizen), o WCS não realiza nenhum controle de lote.
As linhas dos itens serão diferenciadas por cores, onde:
• Verde indicará ao operador que ele finalizou a separação daquele item, seja separado por completo ou com shortpicking
• Transparente, indicará que o item está sendo separado, ao finalizar, será atualizado para verde
A tela do PDV será atualizada em tempo real a cada separação leitura de itens.
Caso seja lido algum item que não esteja solicitando separação, a tela mostrará mensagem que o item não deve ser separado, pois não foi solicitado.
Operador deverá realizar a leitura de todos os itens separados, garantindo a separação dos itens e quantidades corretas. Caso a separação seja de 10 (dez) itens do mesmo código, deverá ser lido/bipado os 10 (dez) itens.
Em casos de Shortpicking/Corte, o operador deverá pressionar o botão “Finalizar Picking” que será apresentado no PDV. O sistema irá considerar um corte no respectivo item e enviará ao WMS apenas a quantidade que foi separada.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** 2a8dc4b72b5e92ad

O cálculo de cubagem para os pedidos, será de responsabilidade do WMS onde o sistema fará o cálculo e nos informar qual caixa será utilizada em cada volume do pedido.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema WCS, com as informações de dimensões e peso de cada caixa. O cadastro das caixas que estarão disponíveis é de responsabilidade do cliente.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas de papelão que já representam a embalagem final para o cliente. Setor de Packing apenas irá receber e fechar as caixas.
Os produtos das famílias de higiene, alimentícios e hospitalares não podem serem coletados na mesma caixa. Pelo WMS haverá segregação do pedido em volumes segregados por família dos produto.
Importante!
Para a leitura correta e precisa de volumes de pedidos fracionados induzidos na esteira, é preciso que a caixa contenha apenas um código de barras legível para a identificação do volume correto, qualquer outro código de barras presente no volume poderá ocasionar leitura incorreta, ocasionando impacto operacional.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Fechamento de PTM  
**Score:** — (semantico) | **ID:** 4926a680a66f3b4b

O fechamento do Pallet pode ocorrer em dois cenários distintos:
cubagem e peso do pallet pré-determinado pela operação Master Higimed (Avaliado pelo próprio operador)
Alocação do último volume esperado do pedido (avaliado sistemicamente)
FECHAMENTO FORÇADO
O operador deverá realizar a leitura do código do comando de fechamento da posição, por exemplo “FPP001”, para fechar o pallet conforme a necessidade. O sistema irá mostrar o PTM ficará com sua área preenchida e piscando, ficando no aguardo da leitura da etiqueta do pallet para associação do pallet. A etiqueta do pallet deve ter obrigatoriamente 6 Dígitos.
Exemplo de etiqueta, fixada próximo ao botão da posição PTM, 1 (uma) etiqueta por posição PTM:
Caso o último volume daquele respectivo pedido for alocado, acontecerá de maneira automática (sem a necessidade da leitura do comando do fechamento) a mesma rotina descrita acima para o fechamento do pallet.
Ao fechar o pallet será aberto um novo pallet automaticamente.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** bf05d210080270ea

Para iniciar o processo, o WCS, deverá receber via integração todas as informações dos pedidos cubados, previstos para a operação atual.
Velox deverá receber os pedidos cubados pelo WMS/KAIZEN, assim como a quantidade e tipos de caixas deverá ser utilizado para a separação do pedido.
Com isso, o WCS informa na tela do order start, quantas caixas e tamanhos necessários para atender o pedido, conforme o cálculo realizado pelo WMS/KAIZEN.
Operador realiza a impressão das etiquetas necessárias para aquele pedido e fixa as etiquetas nas caixas conforme informação na tela do WCS.
Ao realizar o processo de impressão e fixação das etiquetas nas caixas, operador induz as caixas na linha para seguir para as estações de separação.
Cada posto de separação contará com o auxílio de 1 (um) PDV no posto, que também orientará na separação e conferência dos produtos separados.
Operador ao receber a caixa no posto de separação, fará a leitura automática do código de barras do volume com o Scanner fixo da linha, com isso o PDV mostrará o número daquele volume que iniciará a separação.
A tela do PDV será atualizada com os detalhes do item, como quantidade, endereço, EAN esperado, descrição e outros detalhes, com isso o operador fará a separação da quantidade solicitada e realizara a leitura 100% dos itens.
Operador deverá realizar a leitura do EAN do produto através de um código de barras. Ao realizar a leitura do item, o WCS irá decrementar a quantidade solicitada, o controle de lote é responsabilidade 100% do WMS (Kaizen), o WCS não realiza nenhum controle de lote.
As linhas dos itens serão diferenciadas por cores, onde:
• Verde indicará ao operador que ele finalizou a separação daquele item, seja separado por completo ou com shortpicking
• Transparente, indicará que o item está sendo separado, ao finalizar, será atualizado para verde
A tela do PDV será atualizada em tempo real a cada separação leitura de itens.
Caso seja lido algum item que não esteja solicitando separação, a tela mostrará mensagem que o item não deve ser separado, pois não foi solicitado.
Operador deverá realizar a leitura de todos os itens separados, garantindo a separação dos itens e quantidades corretas. Caso a separação seja de 10 (dez) itens do mesmo código, deverá ser lido/bipado os 10 (dez) itens.
Em casos de Shortpicking/Corte, o operador deverá pressionar o botão “Finalizar Picking” que será apresentado no PDV. O sistema irá considerar um corte no respectivo item e enviará ao WMS apenas a quantidade que foi separada.
Para que a separação dos pedidos fracionados seja iniciada, o WCS precisa receber antecipadamente todas as informações integradas pelo WMS/KAIZEN, incluindo o resultado da cubagem e a definição das caixas a serem utilizadas. Com esses dados, o sistema exibe na tela do Order Start a quantidade e os tamanhos das caixas necessários para atender cada pedido. O operador, então, imprime as etiquetas correspondentes e as fixa nas caixas conforme a instrução apresentada.
Com as caixas etiquetadas, o operador realiza a indução na esteira, iniciando o processo de separação. Cada posto de separação está equipado com um PDV e um scanner fixo. Quando a caixa chega ao posto, o código de barras é automaticamente lido pelo scanner e o PDV exibe os itens que deverão ser separados para aquele volume.
O operador visualiza na tela do PDV todas as informações do item: código, endereço de coleta, descrição, EAN e quantidade solicitada. Durante o processo, o operador bipará cada unidade individualmente com o scanner de mão, permitindo que o sistema valide os EANs e decrete a separação em tempo real. O sistema não controla lotes — essa responsabilidade é exclusiva do WMS/KAIZEN.
Para facilitar o entendimento do status da separação, os itens exibidos na tela do PDV aparecem com cores diferentes. Quando um item está sendo separado, a linha correspondente fica transparente. Assim que a separação é concluída — seja completa — a linha passa para verde – Se o operador realizar um corte a linha será marcada em vermelho. Se for feita a leitura de um item não solicitado, o sistema emite uma mensagem de aviso, alertando que o item não deve ser separado.
Caso o operador identifique que a quantidade física disponível é menor do que a solicitada, ele deverá finalizar a separação pressionando o botão “Finalizar Picking” no PDV. O sistema registra o shortpicking e envia ao WMS apenas a quantidade efetivamente separada.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** 07248d0697b8352f

O cálculo de cubagem para os pedidos, será de responsabilidade do WMS onde o sistema fará o cálculo e nos informar qual caixa será utilizada em cada volume do pedido.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema WCS, com as informações de dimensões e peso de cada caixa. O cadastro das caixas que estarão disponíveis é de responsabilidade do cliente.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas de papelão que já representam a embalagem final para o cliente. Setor de Packing apenas irá receber e fechar as caixas.
Os produtos das famílias de higiene, alimentícios e hospitalares não podem serem coletados na mesma caixa. Pelo WMS haverá segregação do pedido em volumes segregados por família dos produtos.
Importante!
A responsabilidade pelo cálculo de cubagem dos pedidos é do WMS/KAIZEN. Esse sistema calcula, com base nas dimensões e nas características dos produtos, quais caixas devem ser utilizadas em cada volume do pedido e envia essa informação ao WCS. O cadastro dessas caixas, com dimensões e peso, deve estar previamente registrado no WCS. Esse cadastro é de responsabilidade do cliente.
As caixas utilizadas no processo já são consideradas como embalagem final para o cliente, ou seja, não haverá uma etapa posterior de reembalagem. O setor de packing apenas fecha a caixa. Caso o pedido contenha produtos de diferentes famílias (como higiene, alimentos ou hospitalares), o WMS deverá realizar a segregação lógica desses produtos em volumes distintos.
Para garantir a leitura correta dos volumes no sorter, é fundamental que cada caixa tenha apenas um código de barras visível e legível. A presença de múltiplos códigos de barras pode causar erros de leitura e impactar negativamente o desempenho da operação.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Fechamento de PTM  
**Score:** — (semantico) | **ID:** 42bcf0fefaae5ef3

O fechamento do Pallet pode ocorrer em dois cenários distintos:
cubagem e peso do pallet pré-determinado pela operação Master Higimed (Avaliado pelo próprio operador)
Alocação do último volume esperado do pedido (avaliado sistemicamente)
FECHAMENTO FORÇADO
O operador deverá realizar a leitura do código do comando de fechamento da posição, por exemplo “FPP001”, para fechar o pallet conforme a necessidade. O sistema irá mostrar o PTM ficará com sua área preenchida e piscando, ficando no aguardo da leitura da etiqueta do pallet para associação do pallet. A etiqueta do pallet deve ter obrigatoriamente 6 Dígitos.
Exemplo de etiqueta, fixada próximo ao botão da posição PTM, 1 (uma) etiqueta por posição PTM:
Caso o último volume daquele respectivo pedido for alocado, acontecerá de maneira automática (sem a necessidade da leitura do comando do fechamento) a mesma rotina descrita acima para o fechamento do pallet.
Ao fechar o pallet será aberto um novo pallet automaticamente.
O fechamento do pallet pode ocorrer de duas formas:
Manualmente - Por decisão do operador ou Automaticamente - Quando o último volume de um pedido é alocado naquela posição.
No caso do fechamento manual, o operador deve realizar a leitura de um código específico de comando, como “FPP001”, que indica ao sistema que o pallet daquela posição deve ser encerrado. A partir desse momento, o sistema bloqueia a posição, que passa a piscar no PDV, aguardando a leitura da etiqueta do novo pallet que será iniciado. Essa etiqueta deve conter obrigatoriamente seis dígitos e será fixada fisicamente próximo ao botão de comando da posição.
Quando o sistema identifica, por meio de sua lógica interna, que o último volume de um determinado pedido foi alocado naquela posição, o fechamento ocorre automaticamente, sem necessidade de ação do operador. Em ambos os casos, o sistema encerra o pallet atual e abre automaticamente uma nova posição para continuidade da operação. Esse processo garante fluidez e organização no fechamento dos pedidos e formação dos pallets finais.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** 1a23c4d096aedd92

Para iniciar o processo, o WCS, deverá receber via integração todas as informações dos pedidos cubados, previstos para a operação atual.
Velox deverá receber os pedidos cubados pelo WMS/KAIZEN, assim como a quantidade e tipos de caixas deverá ser utilizado para a separação do pedido.
Com isso, o WCS informa na tela do order start, quantas caixas e tamanhos necessários para atender o pedido, conforme o cálculo realizado pelo WMS/KAIZEN.
Operador realiza a impressão das etiquetas necessárias para aquele pedido e fixa as etiquetas nas caixas conforme informação na tela do WCS.
Ao realizar o processo de impressão e fixação das etiquetas nas caixas, operador induz as caixas na linha para seguir para as estações de separação.
Cada posto de separação contará com o auxílio de 1 (um) PDV no posto, que também orientará na separação e conferência dos produtos separados.
Operador ao receber a caixa no posto de separação, fará a leitura automática do código de barras do volume com o Scanner fixo da linha, com isso o PDV mostrará o número daquele volume que iniciará a separação.
A tela do PDV será atualizada com os detalhes do item, como quantidade, endereço, EAN esperado, descrição e outros detalhes, com isso o operador fará a separação da quantidade solicitada e realizara a leitura 100% dos itens.
Operador deverá realizar a leitura do EAN do produto através de um código de barras. Ao realizar a leitura do item, o WCS irá decrementar a quantidade solicitada, o controle de lote é responsabilidade 100% do WMS (Kaizen), o WCS não realiza nenhum controle de lote.
As linhas dos itens serão diferenciadas por cores, onde:
• Verde indicará ao operador que ele finalizou a separação daquele item, seja separado por completo ou com shortpicking
• Transparente, indicará que o item está sendo separado, ao finalizar, será atualizado para verde
A tela do PDV será atualizada em tempo real a cada separação leitura de itens.
Caso seja lido algum item que não esteja solicitando separação, a tela mostrará mensagem que o item não deve ser separado, pois não foi solicitado.
Operador deverá realizar a leitura de todos os itens separados, garantindo a separação dos itens e quantidades corretas. Caso a separação seja de 10 (dez) itens do mesmo código, deverá ser lido/bipado os 10 (dez) itens.
Em casos de Shortpicking/Corte, o operador deverá pressionar o botão “Finalizar Picking” que será apresentado no PDV. O sistema irá considerar um corte no respectivo item e enviará ao WMS apenas a quantidade que foi separada.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** fcff95dd10c378af

O cálculo de cubagem para os pedidos, será de responsabilidade do WMS onde o sistema fará o cálculo e nos informar qual caixa será utilizada em cada volume do pedido.
Os tipos de caixas a serem utilizadas deverão estar cadastradas no sistema WCS, com as informações de dimensões e peso de cada caixa. O cadastro das caixas que estarão disponíveis é de responsabilidade do cliente.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas de papelão que já representam a embalagem final para o cliente. Setor de Packing apenas irá receber e fechar as caixas.
Os produtos das famílias de higiene, alimentícios e hospitalares não podem serem coletados na mesma caixa. Pelo WMS haverá segregação do pedido em volumes segregados por família dos produto.
Importante!
Para a leitura correta e precisa de volumes de pedidos fracionados induzidos na esteira, é preciso que a caixa contenha apenas um código de barras legível para a identificação do volume correto, qualquer outro código de barras presente no volume poderá ocasionar leitura incorreta, ocasionando impacto operacional.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Fechamento de PTM  
**Score:** — (semantico) | **ID:** 1cd436f989902ba5

O fechamento do Pallet pode ocorrer em dois cenários distintos:
cubagem e peso do pallet pré-determinado pela operação Master Higimed (Avaliado pelo próprio operador)
Alocação do último volume esperado do pedido (avaliado sistemicamente)
FECHAMENTO FORÇADO
O operador deverá realizar a leitura do código do comando de fechamento da posição, por exemplo “FPP001”, para fechar o pallet conforme a necessidade. O sistema irá mostrar o PTM ficará com sua área preenchida e piscando, ficando no aguardo da leitura da etiqueta do pallet para associação do pallet. A etiqueta do pallet deve ter obrigatoriamente 6 Dígitos.
Exemplo de etiqueta, fixada próximo ao botão da posição PTM, 1 (uma) etiqueta por posição PTM:
Caso o último volume daquele respectivo pedido for alocado, acontecerá de maneira automática (sem a necessidade da leitura do comando do fechamento) a mesma rotina descrita acima para o fechamento do pallet.
Ao fechar o pallet será aberto um novo pallet automaticamente.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produção x Volume  
**Score:** — (semantico) | **ID:** c5fbb6b62a252d89

Pós Go Live.
Relatório deve mostrar as informações de produção de volume por rampa.
Campos:
Código da etiqueta;
Destino;
Rampa;
Peso;
Altura;
Largura;
Comprimento;
Data/hora de aferição da balança;
Data/hora de aferição de cubagem;
Data/hora desvio rampa;
Portal balança;
Portal dimensionador;
Quantidade de recirculação;
Rejeito.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivo desvio;
Rampa;
Balança;
Motivo rejeito;
Motivo recirculação;
Rota.

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `ESPECIFICACAO DE SOFTWARE - Caixas porTipos de pedidos - Caixas exclusivas.docx`  
**Heading:** Cadastro de Caixas Por tipo de item  
**Score:** — (semantico) | **ID:** 774f613f8427717a

Atualmente, o cadastro de caixa não especifica o tipo de pedido que será atendido pela caixa (Franquia ou E-comm, etc).
A alteração permitirá que, ao cadastrar uma nova caixa, o cliente possa especificar o tipo de pedido para o qual a caixa será utilizada.
Caso o cliente deseje utilizar a mesma caixa para ambos os tipos de pedido, o sistema permitirá o cadastro de múltiplos tipos de pedidos associados à mesma caixa.
Caso o cliente deseje incluir novos tipos pedidos o sistema deve estar preparado para aplicar essa regra nos novos tipos.

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `ESPECIFICACAO DE SOFTWARE - Caixas porTipos de pedidos - Caixas exclusivas.docx`  
**Heading:** Alteração nas Regras de Cubagem  
**Score:** — (semantico) | **ID:** be8daefcc69b35fc

Inclusão da Especificação de Tipo de Pedido na Lógica de Cubagem:
A regra de cubagem será modificada para levar em consideração o tipo de pedido ao realizar a cubagem do pedido.
Quando o sistema realizar a cubagem do pedido, ele deve verificar se a caixa é compatível com o tipo de pedido especificado. Caso contrário, a cubagem deve sugerir ou realizar o processo de distribuição para outra caixa válida.
Exemplo: Se um modelo de caixa foi designado exclusivamente para pedidos E-comm, o sistema só poderá alocar itens de pedidos E-comm nessa caixa.
Impacto no Fluxo de Cubagem
Caixa por tipo de pedido: Durante o processo de cubagem, o sistema deve garantir que as caixas adequadas ao tipo de pedido (Franquia ou E-comm) sejam alocadas corretamente, sem sobrecarregar ou desviar itens de tipos diferentes para caixas erradas.
Caixa Exclusiva: Durante o processo de cubagem, caso um pedido contenha itens que estejam associados à "Caixa Exclusiva", o sistema deverá priorizar essa caixa para esses itens. Caso a caixa cadastrada não tenha capacidade para acomodar todos os itens, o restante dos itens do pedido será alocado a outras caixas.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Cubagem das caixas  
**Score:** — (semantico) | **ID:** a5fb660844db4d31

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará o Velox a quantidade de caixas geradas para o pedido.
A informação de caixas calculadas na cubagem considera os volumes de fullcase.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** fe22f8880cb65a36

A cubagem será realizada pelo sistema VELOX, onde o mesmo pedido pode conter mais de uma caixa.
O sistema VELOX receberá do WMS (Cliente) integração com as informações de produtos e suas dimensões.
O sistema VELOX realiza o cálculo de cubagem e solicita quantidade de caixas necessárias para atender o pedido.
Caso os produtos não estejam com cadastro correto no WMS, o sistema Velox irá realizar o cálculo de cubagem errado, fazendo com que as caixas calculadas não atendam à quantidade/volumetria dos itens do pedido, podendo sobrar ou faltar caixas.
No momento da separação o operador irá validar se todos os itens caberão na caixa, caso a caixa atenda os itens separados operador segue com a separação.
Caso operador observe que não terá espaço suficiente para todos os itens solicitados, realiza a separação dos itens que couberem, e ao chegar no limite da caixa e existir itens pendentes de separação, solicitará uma nova caixa para completar esse pedido.
Para realizar a solicitação de caixa adicional, operador terá que solicitar através de um botão que estará disponível no mesmo posto de separação, neste momento o pedido voltará como primeiro da fila para tela do order start, e será vinculado à uma nova caixa, apenas com os itens faltantes de separação.
Ao realizar essa solicitação, os leds faltantes irão acender em laranja e apagar em seguida.
Como na caixa não haverá mais espaço físico disponível, caso tenha produtos a serem separados em outro posto, a caixa não será desviada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Cubagem das caixas de picking  
**Score:** — (semantico) | **ID:** 5ff364d94b133343

A CUBAGEM DAS CAIXAS PLASTICAS UTILIZADAS NO PICKING SERÁ DE RESPONSABILIDADE DO WCS. SEMPRE UTILIZANDO A MESMA CAIXA PARA TODOS OS PROCESSOS.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Cubagem das caixas de expedição  
**Score:** — (semantico) | **ID:** 5a4e50305741561f

O sistema WCS será o responsável pela cubagem dos pedidos nas caixas de expedição, que serão trocadas na conferência/packing, operador realiza a separação na caixa plástica e na estação de conferência/packing, conforme realiza a conferência realiza a troca da caixa de plástico para a caixa de expedição.
As caixas de expedição com suas dimensões devem estar devidamente cadastradas no sistema WCS.
O WCS DEVE AVALIAR SEMPRE A MELHOR CUBAGEM PARA ALOCAR OS ITENS DA CAIXA PLASTICA EM APENAS UMA CAIXA DE PAPELAO, E NÃO PRIORIZANDO VÁRIAS CAIXAS PEQUENAS PARA A MESMA CAIXA PLASTICA.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Tolerância de peso  
**Score:** — (semantico) | **ID:** 135e368c48952285

O Velox terá uma tela com as informações de tolerância de peso por range de peso, sendo compostos pelas informações de peso mínimo, peso máximo e tolerância em gramas (gr) apara cada range de peso. Exemplo:
Para que a caixa seja aprovada ela deve estar com o peso entre 2931gr e 6070gr respeitando o peso mínimo e máximo de acordo com sua tolerância de 70gr.
Essas informações de pelo esperado, peso mínimo, peso máximo e peso aferido na balança serão registados em um LOG, onde o operador pode pesquisar e entender o porquê da rejeição por peso, vendo se o peso aferido foi maior ou menor que o mínimo e máximo permitido para o range que foi pesado.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Cubagem – Dimensões dos produtos  
**Score:** — (semantico) | **ID:** 0f132da4806d5cfb

Cliente irá realizar os cadastros dos produtos de forma com que as dimensões (Comprimento, Altura e Largura) estejam de acordo com as disposições físicas de cada produto.
No Velox estará disponível para consultas a uma tela onde o time do cliente pode ver as informações de casa produto com suas dimensões.
O processo de cubagem é realizado no momento do recebimento dos produtos no CD antes dos mesmos serem dispostos nas posições para separação na automação.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 8a1488a2b8360e4f

O cálculo de cubagem para os pedidos, será de responsabilidade do WMS, onde o sistema fará o cálculo de cubagem e nos informar qual caixa será utilizada em cada volume do pedido.
Os tipos de caixas a serem utilizadas deverão estar cadastrados no sistema Velox, com as informações de dimensões e peso de cada caixa. O cadastro das caixas que estarão disponíveis é de responsabilidade do cliente.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas de papelão que já representam a embalagem final para o cliente.
Setor de Packing apenas irá receber e fechar as caixas.
Os produtos das famílias de higiene, alimentícios e hospitalares não podem ser coletados na mesma caixa. Deve haver segregação do pedido em volumes por família dos produtos.
Essa separação dos produtos dentro das caixas deve ser realizadas pelo WMS, uma vez que o Velox recebe o pedido cubado do WMS.
Serão 5 (cinco) tipos de caixas, de tamanhos diferentes. As caixas determinadas como modelo serão utilizadas como base para o cálculo de cubagem.
Importante!
Para a leitura correta e precisa de volumes de pedidos fracionados induzidos na esteira, é preciso que a caixa contenha apenas um Data Matrix legível para a identificação do volume correto, qualquer outro código Data Matrix presente no volume poderá ocasionar leitura incorreta, ocasionando impacto operacional.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Caixa Adicional  
**Score:** — (semantico) | **ID:** 80bab3decd5d8a9d

No momento da separação, caso o operador perceba que a caixa não será suficiente para alocar todos os itens solicitados, conforme cálculo de cubagem, deverá solicitar uma caixa adicional na tela do PDV, com isso a separação será interrompida e a caixa será liberada para a próxima estação.
No Order Start, a caixa adicional desse pedido, será a prioridade para que seja a próxima enviada para a linha de separação.
Operador ao receber essa caixa adicional, fará a separação somente dos itens que não couberam na caixa anterior.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Solicitação de Nova Caixa  
**Score:** — (semantico) | **ID:** c42d35ec985e8bd9

VELOX → WMS
Integração para o Velox enviar para o WMS, solicitando uma nova caixa em uma possível falha de cubagem. Neste processo o Velox irá enviar os itens faltantes do volume que ocorreu a solicitação para tratativa e envio do WMS de uma nova caixa.
Operador deverá apertar o botão no PDV para o Velox disparar a integração ao WMS.
Ao realizar essa ação, o Velox entende que a caixa não poderá coletar mais itens e seguirá para o sorter. O sistema irá disparar a integração de Picking Confirm antes do envio da solicitação de uma nova caixa.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 043a3bef26f34b8f

O cálculo de cubagem para os pedidos, será de responsabilidade do WMS, onde o sistema fará o cálculo de cubagem e nos informar qual caixa será utilizada em cada volume do pedido.
Os tipos de caixas a serem utilizadas deverão estar cadastrados no sistema Velox, com as informações de dimensões e peso de cada caixa. O cadastro das caixas que estarão disponíveis é de responsabilidade do cliente.
As caixas utilizadas para realizar a separação dos pedidos, serão caixas de papelão que já representam a embalagem final para o cliente.
Setor de Packing apenas irá receber e fechar as caixas.
Os produtos das famílias de higiene, alimentícios e hospitalares não podem serem coletados na mesma caixa. Deve haver segregação do pedido em volumes por família dos produtos.
Serão 5 (cinco) tipos de caixas, de tamanhos diferentes. As caixas determinadas como modelo serão utilizadas como base para o cálculo de cubagem.
Importante!
Para a leitura correta e precisa de volumes de pedidos fracionados induzidos na esteira, é preciso que a caixa contenha apenas um código de barras legível para a identificação do volume correto, qualquer outro código de barras presente no volume poderá ocasionar leitura incorreta, ocasionando impacto operacional.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Caixa Adicional  
**Score:** — (semantico) | **ID:** 7a98353467fa927d

No momento da separação, caso o operador perceba que a caixa não será suficiente para alocar todos os itens solicitados, conforme cálculo de cubagem, deverá solicitar uma caixa adicional na tela do PDV, com isso a separação será interrompida e a caixa será liberada para a próxima estação.
No Order Start, a caixa adicional desse pedido, será a prioridade para que seja a próxima enviada para a linha de separação.
Operador ao receber essa caixa adicional, fará a separação somente dos itens que não couberam na caixa anterior.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Solicitação de Nova Caixa  
**Score:** — (semantico) | **ID:** e4fc16008023b300

VELOX → WMS
Integração para o Velox enviar para o WMS, solicitando uma nova caixa em uma possível falha de cubagem. Neste processo o Velox irá enviar os itens faltantes do volume que ocorreu a solicitação para tratativa e envio do WMS de uma nova caixa.
Operador deverá apertar o botão no PDV para o Velox disparar a integração ao WMS.
Ao realizar essa ação, o Velox entende que a caixa não poderá coletar mais itens e seguirá para o sorter. O sistema irá disparar a integração de Picking Confirm antes do envio da solicitação de uma nova caixa.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Cubagem Fracionados  
**Score:** — (semantico) | **ID:** b84a9dc2f1ce08d6

O cálculo de cubagem dos volumes fracionados, será de responsabilidade do Velox. Será um tipo de caixa padrão para a linha de fracionados ( Picking Cart, Médio e Alto Giro) que deve estar cadastrada no sistema Velox, com as informações de dimensões e peso da caixa.
O cadastro da caixa que estará disponível é de responsabilidade do cliente.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 525e82cf743a42a1

O Velox será responsável pelas cubagens dos produtos (SKU), das caixas full case assim como dos percentuais de ocupação das caixas que serão utilizadas nas linhas.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Processo de cubagem  
**Score:** — (semantico) | **ID:** 86412bc436af62aa

Existirá um cubômetro da Box Cubo onde o operador insere o volume sobre a balança do cubômetro e realiza a leitura do volume, através da tela do cubômetro o operador é informado que volume foi processado com sucesso, assim enviando a integração de dimensões e peso ao Velox. O Velox por sua vez deixa registado essas informações sistemicamente que pode ser exportada via CSV e ser importado os dados para o ERP que possui uma integração direta com o WMS.
Será possível verificar as informações de todos os volumes cubados através de um relatório.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Produtos (SKU)  
**Score:** — (semantico) | **ID:** c3012251775f3f8b

Todos os produtos que serão processados através da automação dever ser cubados. O processo de cubagem consiste em um cubômetro que terá uma interface de comunicação com o Velox (API rest) como mencionado acima.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** CUBAGEM  
**Score:** — (nome-topico) | **ID:** 66a875e30d857f53

O sistema WMS será responsável pelo cálculo de cubagem dos pedidos para alocação nas caixas pedidos (papelão).

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 3c04fe673f690402

O sistema Velox, será o responsável pela cubagem das remessas/pedidos nas caixas plásticas de separação, sendo assim, ao obter as informações da remessa, fará o cálculo da cubagem e o agrupamento dos itens da remessa/pedido baseando-se pelo número do pedido, onde cada caixa de separação terá apenas 1 pedido, não sendo permitido 2 pedidos na mesma caixa.
Pode acontecer do Velox calcular 1 pedido para 1 caixa de separação ou mais.
Velox para realizar a cubagem deve considerar o pedido, cubando 1 pedido por caixa de separação.
Ao realizar a cubagem, Velox determinará quantos volumes serão necessários para realizar a separação do pedido/remessa.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** CAIXAS / CUBAGEM  
**Score:** — (semantico) | **ID:** 8d80650747132e7a

O sistema VELOX MFC será responsável pelo cálculo de cubagem das caixas e suas informações (comprimento, altura, largura e peso) bem como as ações de gerenciamento das mesmas e relação da quantidade de caixas por pedido
Para os pedidos “Fracionados” - Atualmente serão utilizados 3 tipos de caixas de papelão: P “pequena”, M “média”, G “grande”, durante a separação.
Para os pedidos “Full Case” faremos a impressão da etiqueta “QRCODE” com iniciais diferentes das que serão usadas na operação por exemplo:
FC (Full Case)/NOME TRANSPORTADORA/NUMERO SEQUENCIAL, conforme exemplo na tabela compartilhada abaixo. Após colar a etiqueta na caixa a mesma seguirá para o sorter, e desviado na rampa da transportadora correspondente.
Para realizar o “Reabastecimento”, faremos a impressão da etiqueta “QRCODE” também com iniciais diferentes das que serão utilizadas na separação dos fracionados por exemplo: REAB (Reabastecimento) /CORREDOR/FLOWRACK conforme exemplo na tabela compartilhada abaixo, para facilitar o entendimento dos operadores realizarem o reabastecimentos dos flowracks e caso aconteça algum erro na leitura da etiqueta , a que se refere aquela caixa.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** 4ac7294eea6ad755

O cálculo de cubagem dos pedidos será de responsabilidade do WMS.
Com base nesses dados, o WCS irá distribuir os pedidos no início de cada Order Start, visando a otimização da utilização da capacidade total da caixa.
As informações dos itens utilizadas nesse processo serão extraídas da integração do picking map recebida do WMS.
As caixas utilizadas para a separação dos pedidos serão plásticas e reutilizáveis. Sendo assim ao enviar a integração de “aloca pallet” a caixa deve ficar liberada para um novo vínculo de pedido.
O sistema deve disponibilizar uma tela para realizar a “limpeza” do romaneio vinculado a caixa em casos que não ocorrer este processo e a caixa precisa ser utilizada em um novo romaneio.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** 4.1.2.	Cubagem das caixas  
**Score:** — (semantico) | **ID:** ad6a13c263a05aa9

A cubagem das caixas será de responsabilidade do WMS, onde ele fará o cálculo e informará ao WCS o volume e quais itens serão coletados nesse volume.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Matriz de Fragilidade  
**Score:** — (nome-topico) | **ID:** 57d65acda2bfbefe

A matriz de fragilidade dos pallets não é de responsabilidade da equipe de Invent. O controle para garantir que os volumes mais pesados sejam separados e induzidos na esteira primeiro, seguido pelos mais leves, será realizado diretamente no WMS, que executará a separação em ordem decrescente de peso.

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Matriz de Fragilidade  
**Score:** — (nome-topico) | **ID:** 32f548e552283a2c

A matriz de fragilidade dos pallets não é de responsabilidade da equipe de Invent. O controle para garantir que os volumes mais pesados sejam separados e induzidos na esteira primeiro, seguido pelos mais leves, será realizado diretamente no WMS, que executará a separação em ordem decrescente de peso.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Cubagem das caixas de picking  
**Score:** — (semantico) | **ID:** bfe7ce46e457976b

A cubagem das caixas plásticas utilizadas no processo de picking será de responsabilidade do WCS. O sistema será responsável por considerar o volume total dos itens do pedido e associá-los automaticamente à caixa plástica padrão definida para a operação. Essa caixa plástica será sempre a mesma, garantindo padronização no processo logístico. Ao assumir essa responsabilidade, o WCS assegura que cada volume (pega) seja corretamente alocado na caixa plástica desde o início da separação, sem a necessidade de intervenção manual para definição de tipo ou dimensão de embalagem, otimizando o controle operacional e a rastreabilidade dos volumes (pegas) ao longo do processo.
O cadastro das medidas referente a caixa plástica que será utilizada pela operação é de responsabilidade do cliente.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Cubagem das caixas de picking  
**Score:** — (semantico) | **ID:** d0d8fd1681965426

A cubagem das caixas plásticas utilizadas no processo de picking será de responsabilidade do WCS. O sistema será responsável por considerar o volume total dos itens do pedido e associá-los automaticamente à caixa plástica padrão definida para a operação. Essa caixa plástica será sempre a mesma, garantindo padronização no processo logístico. Ao assumir essa responsabilidade, o WCS assegura que cada volume (pega) seja corretamente alocado na caixa plástica desde o início da separação, sem a necessidade de intervenção manual para definição de tipo ou dimensão de embalagem, otimizando o controle operacional e a rastreabilidade dos volumes (pegas) ao longo do processo.
O cadastro das medidas referente a caixa plástica que será utilizada pela operação é de responsabilidade do cliente.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Cubagem das caixas de picking  
**Score:** — (semantico) | **ID:** 4130ef8958277a3f

A cubagem das caixas plásticas utilizadas no processo de picking será de responsabilidade do WCS. O sistema será responsável por considerar o volume total dos itens do pedido e associá-los automaticamente à caixa plástica padrão definida para a operação. Essa caixa plástica será sempre a mesma, garantindo padronização no processo logístico. Ao assumir essa responsabilidade, o WCS assegura que cada volume (pega) seja corretamente alocado na caixa plástica desde o início da separação, sem a necessidade de intervenção manual para definição de tipo ou dimensão de embalagem, otimizando o controle operacional e a rastreabilidade dos volumes (pegas) ao longo do processo.
O cadastro das medidas referente a caixa plástica que será utilizada pela operação é de responsabilidade do cliente.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Cubagem das caixas de picking  
**Score:** — (semantico) | **ID:** 28a17540b7f851f8

A cubagem das caixas plásticas utilizadas no processo de picking será de responsabilidade do WCS. O sistema será responsável por considerar o volume total dos itens do pedido e associá-los automaticamente à caixa plástica padrão definida para a operação. Essa caixa plástica será sempre a mesma, garantindo padronização no processo logístico. Ao assumir essa responsabilidade, o WCS assegura que cada volume (pega) seja corretamente alocado na caixa plástica desde o início da separação, sem a necessidade de intervenção manual para definição de tipo ou dimensão de embalagem, otimizando o controle operacional e a rastreabilidade dos volumes (pegas) ao longo do processo.
O cadastro das medidas referente a caixa plástica que será utilizada pela operação é de responsabilidade do cliente.
