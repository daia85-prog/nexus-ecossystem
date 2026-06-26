# cubagem.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 6.1. Cubagem das caixas de picking  
**Score:** — (semantico) | **ID:** ddc8306fd80e2d0c

A cubagem das caixas plásticas utilizadas no processo de picking será de
responsabilidade do WCS. O sistema será responsável por considerar o volume total dos itens
do pedido e associá-los automaticamente à caixa plástica padrão definida para a operação. Essa
caixa plástica será sempre a mesma, garantindo padronização no processo logístico. Ao assumir
essa responsabilidade, o WCS assegura que cada volume (pega) seja corretamente alocado na
caixa plástica desde o início da separação, sem a necessidade de intervenção manual para
definição de tipo ou dimensão de embalagem, otimizando o controle operacional e a
rastreabilidade dos volumes (pegas) ao longo do processo.
O cadastro das medidas referente a caixa plástica que será utilizada pela operação é de
responsabilidade do cliente.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Cubagem das caixas de picking  
**Score:** — (semantico) | **ID:** 911a831418858e93

A cubagem das caixas plásticas utilizadas no processo de picking será de responsabilidade do WCS. O sistema será responsável por considerar o volume total dos itens da missão e associá-las automaticamente à caixa plástica padrão definida para a operação. Essa caixa plástica será sempre a mesma, garantindo padronização no processo logístico. Ao assumir essa responsabilidade, o WCS assegura que cada volume (tarefa) seja corretamente alocado na caixa plástica desde o início da separação, sem a necessidade de intervenção manual para definição de tipo ou dimensão de embalagem, otimizando o controle operacional e a rastreabilidade dos volumes (tarefas) ao longo do processo.
O cadastro das medidas referente a caixa plástica que será utilizada pela operação é de responsabilidade do cliente.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Validação de peso OT com destino BK25: O WCS executa imediatamente a validação de  
**Score:** — (semantico) | **ID:** 4cc22a4530f1320d

peso do palete, antes de disponibilizá-lo para qualquer etapa operacional no BK25. A validação
considera o peso informado no TORD para cada lote, soma todos esses pesos com a tara (Peso
do palete vazio e stretch) configurada no Velox. O valor resultante é comparado com o limite
máximo aceitável, inicialmente definido em 1.200 kg (Pode ser alterado via chamado com o
time da Invent).

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Peso informado no TORD + tara configurada no Velox ≤ 1.200 kg  
**Score:** — (semantico) | **ID:** b9345f3c0ddd1995

Caso o peso calculado ultrapasse o limite permitido, o WCS indica um erro no
processamento dessa necessidade em uma tela de ordem e transporte. Não é
retornado erro ao SAP via integração. Somente paletes que atenderem à validação de
peso podem seguir no fluxo.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 8 a 10  
**Score:** — (semantico) | **ID:** 6098525ae766c3de

Faixa de peso da caixa (em kg, multiplicado por
10)

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tipo de peso  
**Score:** — (semantico) | **ID:** dee2f305da33485c

719287
12.100
PVAR
•
Decremento de estoque
WCS fará o decremento do saldo de quantidade de caixas -1 e decremento do saldo de peso total
– 12.1.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** 7.2. Cubagem e Seleção Automática de Caixas no Picking  
**Score:** — (semantico) | **ID:** 4345f4f1a1f23205

A cubagem das missões utilizadas no processo de picking será de responsabilidade do
WCS. O sistema deverá calcular o volume total dos itens associados à missão e realizar a
associação automática à caixa mais adequada, conforme o cadastro de tipos de caixas
disponível no sistema.
Ao assumir essa responsabilidade, o WCS garante que cada volume (tarefa) seja corretamente
alocado na melhor opção de embalagem desde o início da separação, eliminando a
necessidade de intervenção manual para definição de tipo ou dimensão da caixa. Esse processo
contribui para a otimização do fluxo operacional e assegura a rastreabilidade dos
volumes (tarefas) ao longo de todo o processo.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** 7.2.1. Validação de Dimensões e Cubagem  
**Score:** — (semantico) | **ID:** 0d60f40eb5bc05a1

O WCS deverá disponibilizar um parâmetro de configuração que permita ativar ou desativar
a validação das dimensões físicas dos itens em relação à caixa selecionada, conforme
descrito abaixo:
Parâmetro Ativo:
O WCS deverá validar se qualquer uma das dimensões do item ou da composição
da missão (altura, largura ou comprimento) ultrapassa os limites dimensionais
da caixa, além de validar a cubagem total (m³).
Caso alguma dimensão exceda o limite, o sistema deverá selecionar automaticamente
uma caixa alternativa compatível.
Parâmetro Inativo:
O WCS deverá considerar exclusivamente a cubagem total (m³) da missão para a
seleção da caixa, desprezando a validação individual das dimensões (altura,
largura e comprimento).

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 5.1. Cubagem  
**Score:** — (nome-topico) | **ID:** 286cf9de1664192e

No projeto Navepark, o WCS Velox é detentor da cubagem. O sistema recebe os itens soltos
do pedido (Linha x SKU x Qtd) e utiliza um algoritmo tridimensional para determinar a
quantidade ideal de caixas de transporte.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 5.2. Regras de Restrição (Mix e Segregação)  
**Score:** — (semantico) | **ID:** fb415528bd428c5a

Para garantir a integridade da carga, a cubagem respeita a compatibilidade entre famílias de
produtos (campo categoria da integração).
Regra: O sistema não mistura, no mesmo volume, famílias definidas como incompatíveis
entre si, conforme a configuração de incompatibilidade de famílias.
Exemplo Prático: Se as famílias "Discos de Freio" e "Juntas de Cabeçote" estiverem
configuradas como incompatíveis, um pedido que contenha itens das duas gerará
volumes separados, evitando que produtos de famílias incompatíveis sejam acomodados
na mesma caixa.
Configuração de Incompatibilidade de Famílias (Matriz de Incompatibilidade de
Famílias). A definição de quais famílias não podem ser misturadas em um mesmo volume é
parametrizável pelo cliente, por meio da tela de Matriz de Incompatibilidade de Famílias no WCS.
Nessa tela, o operador seleciona uma família em um campo e, em outro campo, seleciona uma
ou mais famílias que não podem ser misturadas com ela. O WCS passa a tratar essas combinações
como incompatíveis, gerando volumes separados durante a cubagem sempre que itens dessas
famílias ocorrerem no mesmo pedido. A regra é bidirecional: se a família A é incompatível com a
família B, a família B também é incompatível com a família A.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 7.3. Matriz de Fragilidade  
**Score:** — (nome-topico) | **ID:** 69be8cfdc0f796a0

O WCS recebe na integração de Pedido quais são as matrizes de cada SKU. O WCS Solicita
apenas produtos que sejam adequados para indução. Para maximizar a eficiência, o sistema
aplicará uma regra, onde o Velox somente disparará a solicitação do pallet se a demanda da
onda for suficiente para consumir todas as caixas contidas nele, garantindo que não haja
movimentação de pallets que não possam ser induzidos completamente.
Simultaneamente, o WCS definirá a ordem de formação dos pallets de expedição através de um
algoritmo de cubagem graduado de 1 a 9, onde a classe 9 representa itens pesados (base) e a
classe 1 itens leves (topo). Para que essa montagem física seja viável, o Velox orquestra a
solicitação priorizando sempre a matriz maior do pedido, assegurando que os produtos mais
pesados e robustos cheguem primeiro para compor a base, enquanto os itens mais frágeis
chegam por último para finalizar o topo do pallet.
O processo de indução e formação de pallets no WCS (Velox) será regido pela Matriz de
Fragilidade, obedecendo às seguintes regras de integridade de dados e otimização física:
1. Hierarquia de Dados (Matriz de Fragilidade)
A definição da classe de fragilidade do SKU será processada através do campo fragilidade.
Origem: Este dado pode estar previamente populado no Cadastro de Produtos
(opcional), porém, o WCS considerará como mandatório e prioritário o valor recebido
na Integração de Pedidos.
Regra de Sobrescrita: Caso o WCS receba na integração de pedidos um valor de
matriz diferente do que consta no cadastro do produto, o sistema sobrescreverá a
informação anterior, assumindo o dado da integração como a verdade absoluta para a
execução.
2. Algoritmo de Cubagem e Sequenciamento (1 a 9)
Para garantir a estabilidade física da expedição, o WCS define a ordem de chegada dos
produtos baseado em uma escala de densidade de 1 a 9 (onde 9 representa itens
pesados/robustos e 1 itens leves/frágeis):
Sequenciamento: O Velox orquestra as solicitações ao WMS priorizando a Matriz
Maior (Decrescente 9 -> 1).
Montagem Física: Isso assegura que os itens de Classe 9 cheguem primeiro ao
Sorter para formar a base sólida do palete de expedição, enquanto os itens de Classe
1 são processados por último, sendo depositados no topo da pilha para evitar avarias
por esmagamento.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 9.3.1. Costas Automação  
**Score:** — (semantico) | **ID:** f94d569d36413998

Este fluxo ocorre nas posições de costas do Mezanino. As costas originais do túnel térreo
operam agora exclusivamente com fracionados de alta cubagem.
Passo a Passo:
1. Notificação: O operador visualiza no PDV a solicitação de Full Case e o LED atrás dele
exibirá a posição exata que ele deve coletar o volume.
2. Etiquetagem: O sistema imprime automaticamente a etiqueta de expedição (Shipping
Label) na impressora do posto. (sendo de extrema importância que essa etiqueta seja
colada e padronizada da mesma altura que estão coladas as etiquetas nas caixas
plásticas, assim evitando problemas de NOREAD com os scanners, vale ressaltar que
colocar a etiqueta na altura certa e evitar o NOREAD é de responsabilidade da operação
da Navepark).
o
Para a impressão das etiquetas no Picking Fullcase costas, serão destinadas
impressoras de responsabilidade do cliente, onde o WCS irá enviar essa
requisição para a impressora mais próxima do local de Picking Costas solicitado.
3. Execução:
o
O operador vai até o pallet (costas), pega a caixa fechada.
o
Cola a etiqueta de expedição na altura correta.
4. Indução: Caso o operador esteja no Mezanino, ele deposita esta caixa na Esteira
Expressa (Túnel) onde essa caixa seguirá para o espiral, antes desse espiral terá um
desvio especificamente para essas caixas Fullcase, onde elas seguirão para a espiral de
fullcase e em seguida por dentro do porta pallet pulando o Picking Térreo.
5. Destino: Esta caixa segue direto para o Sorter, sem passar pelas estações de
conferência de fracionado (Bypass), pois já é um volume fechado de fábrica.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 11.1. Tela de Gestão de Volumes do Pedido  
**Score:** — (semantico) | **ID:** 98e81faed855fd0b

Objetivo: Disponibilizar uma interface de supervisão para auditoria e cancelamento granular de
volumes de um pedido antes do faturamento. O foco principal é mitigar erros operacionais de
quantidade (ex: erro de digitação onde 350 unidades foram solicitadas ao invés de 35) sem a
necessidade de cancelamento total e reprocessamento do pedido.
Funcionamento da Interface:
1. Busca e Identificação:
o
O supervisor realiza a busca pelo Número do Pedido.
o
O sistema exibe o status global do pedido e libera as opções de edição conforme
o estágio atual.
2. Cenário A: Pedido em Separação ou Finalizado (Grid de Volumes)
o
O sistema carrega uma grid listando todos os volumes (LPNs/Etiquetas) gerados
para o pedido.
o
Colunas: ID do Volume | Status (Picking / Sorteado / Expedição) | Itens/Qtd no
Volume | Seleção (Checkbox).
o
Ação Operacional: O supervisor seleciona os volumes excedentes (no exemplo
de 350 para 35, seleciona-se os volumes que contêm as 315 unidades
excedentes) e aciona a função "CANCELAR VOLUMES SELECIONADOS".
o
Resultado: Os volumes não selecionados (corretos) seguem o fluxo normal de
expedição.
3. Lógica de Retorno Interno (Fluxo de Exceção):
o
Os volumes cancelados nesta tela assumem imediatamente o status lógico de
"RETORNO AO PICKING".
o
Diferencial WCS: O sistema não envia estes volumes para o fluxo fiscal de
"Devolução de Venda" (que exigiria NF de entrada). O WCS trata como um
estorno interno.
o
Físico: O sistema direciona estes volumes para uma rampa de exceção ou emite
alerta no ponto de leitura, instruindo o abastecedor a devolver os itens
fisicamente para a prateleira de Picking Estoque (Black Box), agilizando a
recomposição do saldo.
4. Cenário B: Pedido Não Iniciado (Aguardando Separação)
o
Caso o pedido ainda não possua volumes gerados (Status: Aguardando
Separação), a tela habilita a edição direta no cabeçalho.
o
Ação: O supervisor altera o campo "Quantidade Solicitada" (ex: de 350 para
35) e salva.
o
Resultado: O WCS recalcula a meta da onda instantaneamente. Quando o
operador iniciar a tarefa, o sistema solicitará apenas a nova quantidade corrigida.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Cubagem e Seleção Automática de Caixas no Picking  
**Score:** — (semantico) | **ID:** 095a4aadc1f2bc39

A cubagem das missões utilizadas no processo de picking será de responsabilidade do
WCS. O sistema deverá calcular o volume total dos itens associados à missão e realizar a
associação automática da caixa mais adequada, conforme o cadastro de tipos de caixas
disponível no sistema.
Ao assumir essa responsabilidade, o WCS garante que cada volume (tarefa) seja corretamente
alocado na melhor opção de embalagem desde o início da separação, eliminando a
necessidade de intervenção manual para definição de tipo ou dimensão da caixa. Esse processo
contribui para a otimização do fluxo operacional e assegura a rastreabilidade dos
volumes (tarefas) ao longo de todo o processo.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 7.1.1. Validação de Dimensões e Cubagem  
**Score:** — (semantico) | **ID:** ca60aa58eadcab76

O WCS deverá disponibilizar um parâmetro de configuração que permita ativar ou desativar
a validação das dimensões físicas dos itens em relação à caixa selecionada, conforme
descrito abaixo:
Parâmetro Ativo:
O WCS deverá validar se qualquer uma das dimensões do item ou da composição
da missão (altura, largura ou comprimento) ultrapassa os limites dimensionais
da caixa, além de validar a cubagem total (m³).
Caso alguma dimensão exceda o limite, o sistema deverá selecionar automaticamente
uma caixa alternativa compatível.
Parâmetro Inativo:
O WCS deverá considerar exclusivamente a cubagem total (m³) da missão para a
seleção da caixa, desprezando a validação individual das dimensões (altura,
largura e comprimento).

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 5. Matriz de Fragilidade  
**Score:** — (nome-topico) | **ID:** d25ba5e12b23aae9

A matriz de fragilidade dos pallets não é de responsabilidade da equipe de Invent. O controle
para garantir que os volumes mais pesados sejam separados e induzidos na esteira primeiro,
seguido pelos mais leves, será realizado diretamente no WMS, que executará a separação em
ordem decrescente de peso.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 6.2.3. Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** 1e34cfec82204379

Em caso de necessidade de cancelamento, o WMS deverá atualizar um campo específico
da tabela compartilhada, sinalizando que determinado pedido ou volume não deve mais ser
processado.
O WCS, ao identificar esse atributo, desconsiderará o pedido automaticamente, mesmo
que ele já esteja presente internamente na base ORDEMSERVICO.
Essa abordagem garante que o controle de cancelamento fique centralizado no WMS, com o
WCS apenas aplicando as regras conforme os dados recebidos e atualizados.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 16. Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** b4e498ba09f2c25c

Em casos em que é necessário o cancelamento de volumes o WMS deve disponibilizar a
informação das ordens de serviço que estão canceladas e o Velox por sua vez irá mudar o
status de todas as ordens de serviço recebidas do WMS para CANCELADA, onde o WCS faz as
seguintes validações de acordo com os status dos volumes:
Integrado – Volume ainda não foi disponibilizado no Order Start: O volume não será
disponibilizado para tarefa de separação no Order Start.
Disponível – Quando o volume está pronto para ser impresso no Order Start: O WCS irá
retirar os volumes da lista de impressão e eles não serão coletados.
Em andamento – Quando já ocorreu a impressão das etiquetas e o volume está em
processo de separação: Os volumes já separados serão direcionados ao stage e os
volumes ainda pendentes de separação não serão mais separados.
Indução - Quando o volume já está no stage: Os volumes serão induzidos no sorter e
serão encaminhados para o rejeito e serão rejeitados com o motivo cancelamento.
Na rampa – Quando o volume está na rampa aguardando alocação no PTL: Quando o
operador realizar a leitura da etiqueta do volume todo os leds (PTLs) relacionados a
rampa acenderam na cor azul informando que o volume está cancelado e com isso o
operador deve solicitar suporte enviando o volume ao rejeito.
Alocado – Quando o volume já está no PTL: Não é mais possível realizar o
cancelamento desse volume e as tratativas de cancelamento deve ser realizada
exclusivamente no WMS.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** WMS ↔ WCS (WMCATO)  
**Score:** — (semantico) | **ID:** cc25b40e8b0cbff1

O WMS pode enviar uma ordem de cancelamento de um pedido ao WCS, que por sua vez
bloqueia ou remove o pedido da operação em andamento. A ação exata dependerá do status
do pedido no momento do cancelamento (se já foi separado, se está em separação ou se ainda
não foi iniciado).

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Cancelamento de pedidos  
**Score:** — (semantico) | **ID:** 361b652cd1743a40

WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS. Ao cancelar um
pedido temos os seguintes cenários abaixo:

---
**Origem:** [MASTER] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Prioridade:** não  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** ca5d605eddfdec7e

O cálculo de cubagem dos pedidos é de responsabilidade do WMS, que definirá quais caixas serão utilizadas e quais itens compõem cada volume do pedido. Os tipos de caixas disponíveis deverão estar previamente cadastrados no WCS com suas dimensões e peso. Esse cadastro é de responsabilidade do cliente.
As caixas utilizadas na separação já representam a embalagem final para o cliente — o setor de packing apenas fecha a caixa. Produtos de diferentes famílias (higiene, alimentícios e hospitalares) não podem ser coletados na mesma caixa; o WMS deverá realizar a segregação em volumes distintos.
Importante: Para garantir a leitura correta dos volumes no sorter, cada caixa deve ter apenas um código de barras visível e legível. Múltiplos códigos de barras podem causar erros de leitura e impactar o desempenho da operação.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Cubagem  
**Score:** — (nome-topico) | **ID:** c4cd9da86d95f3a2

A cubagem é o processo de calcular qual caixa usar para cada pedido, com base no volume e peso dos itens. Esse cálculo garante que a caixa escolhida seja adequada — sem espaço excessivo desperdiçado e sem risco de exceder o limite físico da embalagem.
Neste projeto, a cubagem é calculada pelo eWM - SAP. O WCS recebe os pedidos já com a embalagem definida e o LPN atribuído, e passa a controlar apenas o fluxo físico do volume na linha a partir da primeira leitura.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Matriz de Fragilidade  
**Score:** — (nome-topico) | **ID:** 8b8a532757ce9596

O WCS aplica regras de empilhamento baseadas na fragilidade dos produtos. Cada produto cadastrado recebe uma classificação (ex: Frágil, Resistente, Líquido). No momento da alocação no PTL, o sistema impede que volumes frágeis sejam colocados em posições inferiores do pallet onde receberão pressão de produtos mais pesados. Os displays PTL exibem alertas de restrição de posicionamento para o operador de doca.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Cubagem + Caixas  
**Score:** — (semantico) | **ID:** 133136de918fbebe

O cálculo de cubagem para os pedidos fracionados será de responsabilidade WMS do cliente,
assim como os números dos volumes e itens pertencentes.
Sistema WCS recebe a integração com as informações necessárias para realizar a separação do
pedido conforme a cubagem realizada pelo WMS.
Obs.: Para a leitura correta e precisa do volume induzido na esteira, é preciso que a caixa
contenha apenas um código de barras legível para identificação do volume correto, qualquer
outro código de barras presente no volume poderá ocasionar leitura incorreta. Sendo uma caixa
de plástico padronizada.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Prioridade:** não  
**Heading:** Inteligência de Cubagem e Matriz de Fragilidade  
**Score:** — (semantico) | **ID:** df60c745686df698

Diferente de operações onde o WMS envia o pallet já montado, neste projeto o WCS Velox será responsável pelo cálculo de cubagem (Bin Packing). O sistema receberá os pedidos brutos e definirá, através de algoritmos próprios, quantos pallets serão necessários e quais itens compõem cada pallet.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Prioridade:** não  
**Heading:** Matriz de Fragilidade (1 a 5)  
**Score:** — (nome-topico) | **ID:** b618211b1611648e

Para orientar a montagem e garantir a integridade dos produtos, o algoritmo considerará o atributo de fragilidade em uma escala de 1 a 5:
Classe 5 (Base): Itens pesados, robustos e não frágeis. Devem compor a base do pallet.
Classe 1 (Topo): Itens leves e frágeis. Devem ser alocados no topo.
Regra de Indução: O WCS calculará o pallet ideal respeitando essa pirâmide. Embora o operador possa bipar itens de forma aleatória, o cálculo de capacidade do pallet (quando ele é considerado "Cheio") levará em conta essas dimensões para evitar tombamento ou esmagamento virtual.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Cubing Intelligence and Fragility Matrix  
**Score:** — (nome-topico) | **ID:** 57172ca0e59deda6

The Velox WCS will be responsible for the cubing calculation. The system will receive the raw orders and define, through its own algorithms, how many pallets will be needed, which items make up each pallet, and whether they will all fit on that pallet.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Fragility Matrix (1 a 3)  
**Score:** — (nome-topico) | **ID:** c4392c4179f6feee

To guide the assembly and ensure product integrity, the algorithm will consider the fragility attribute on a scale from 1 to 3:
Class 3 (Base): Heavy, robust, and non-fragile items. They must make up the base of the pallet.
Class 2 (Middle): Items that are not so light, but not so heavy. They must be allocated in the middle of the pallet.
Class 1 (Top): Light and fragile items. They must be allocated at the top.
Induction Rule: The WCS will calculate the ideal pallet respecting this pyramid. The pallet capacity calculation (when it is considered "Full") will take these dimensions into account to avoid toppling or virtual crushing.
