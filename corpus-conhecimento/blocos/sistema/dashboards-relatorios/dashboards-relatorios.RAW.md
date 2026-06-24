# dashboards-relatorios.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 6020ecf7b16cc372

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e FlorArte durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da operação.
Segue alguns exemplos de relatórios:
Relatório de produtividade por Picking Cart;
Relatório de produtividade por operador PLT;
Relatório de produtividade da Conferência;
Relatório de rejeito;
Relatório de Caixas Utilizadas
Relatório de Separação ou ShortPicking (Corte)
Relatório de Pallets de expedição por onda/pedido

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 95c73ae5763cbaa1

As telas de relatórios para o sistema são as descritas abaixo. Esses relatórios têm como objetivo fornecer visibilidade operacional e permitir o acompanhamento de desempenho, produtividade e exceções do processo.
Relatórios disponíveis:
Produtividade por estação
Produtividade por produto
Consumo do tipo de caixa
Relatório da produção, comparando a quantidade de pedidos integrados, quantidade de pedidos separados e quantidades pendentes de separação.
Relatório de produção, comparando os tipos de separação, controlados, não controlados e full case.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Data e Hora  
**Score:** — (semantico) | **ID:** a68d4fe8d956c15c

Cada ação realizada (separação, conferência, erro) será registrada com a data e hora precisas da operação.
Essa informação será crucial para auditoria e para análise posterior do desempenho do processo.
O processo de rastreabilidade será registrado em um formato que pode ser visualizado em tabela exibida na tela do WCS.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Controle de Estoque  
**Score:** — (semantico) | **ID:** b1f819393d12555a

A tela de Controle de Estoque será responsável por apresentar uma "foto" em tempo real dos itens armazenados no WCS, oferecendo uma visão clara, filtrável e atualizada da ocupação das posições de estoque. Esta interface terá foco operacional, sendo utilizada para consultas rápidas e execução de movimentações internas conforme necessidade da operação.
Campos obrigatórios da tela para visualização:
Item (SKU)
Descrição do produto
Unidade de medida
Lote
Posição (endereço físico)
Quantidade disponível
Setor (ex: Flowrack, Geladeira, Polícia, Picking Fundo, etc.)

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Relatórios do sistema  
**Score:** — (semantico) | **ID:** 567fac663d26cdf4

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Fagron durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Fagron.
Todos os relatórios podem ser exportados para .csv.
Segue alguns exemplos de relatórios.
Relatório de produtividade por Período
Relatório de produtividade por Estação de picking
Relatório de status de Pedidos (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque da posição
Relatório/dashboard de produtividade sorter, comparativo de quantos volumes foram conferidos com quantos foram lidos e ou estão pendente leitura no portal do sorter.
Rastreabilidade conferência, WCS deve gerar relatórios de logs de leituras erradas nos produtos.
Relatórios detalhados de conferência.
Relatório de Curva ABC
Relatório de Rastreabilidade dos Operadores nos Postos de Trabalho de Picking e Conferência

---
**Origem:** [I24.117] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Relatórios e Consultas  
**Score:** — (semantico) | **ID:** 3aa63f9fdc83ea06

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Grupo Pereira durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa;
Relatório de produtividade do sorter;
Rastreio por número do RG dos volumes
Rastreio por Número de pedidos
Rastreio por Números de Carga
Relatório de rejeito;
Relatórios de Read  e NoRead
Todos os relatórios devem conter esses campos abaixo:
Número do RG da caixa
Número do pedido
Data e hora do registro
Detalhamento dos itens (SKU, descrição)
Peso Planejado total (kg)
Peso registrado (kg)
Pedido liberado manualmente? (Sim \ Não)
Usuário que efetuou a liberação manual do pedido
Os relatórios devem ter possibilidade de extrair as informações em arquivo Excel ou PDF.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Dashboard de Shorpicking  
**Score:** — (semantico) | **ID:** 48a033167dea0c5f

O WCS deve disponibilizar um dashboard que será atualizado a cada minuto com informações sobre os cortes realizados na linha de separação fracionada. As informações exibidas no dashboard incluem: posto, endereço, código da caixa, código do produto, código do operador(produtivo), quantidade solicitada e quantidade coletada.
Este dashboard servirá exclusivamente como apoio operacional, sem funcionalidades interativas. Seu objetivo é fornecer suporte para o controle de shortpicking no cotidiano da operação, facilitando o acompanhamento das atividades sem que haja ações diretas nesta tela.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Cancelamento de volumes FullCase  
**Score:** — (semantico) | **ID:** ebcf38bbd5808beb

O sistema WCS deve disponibilizar uma interface para exibição de todos os volumes do tipo Full Case que constam na base de dados e que ainda não foram alocados em seus respectivos pallets. Nessa interface, o operador poderá selecionar volumes e efetuar seu cancelamento, mediante a obrigatoriedade de informar o motivo, que deverá ser classificado como "Avaria" ou "Corte".
Após a alocação do volume no pallet, nenhuma tratativa poderá ser realizada no WCS. Nesse caso, eventuais ajustes ou cancelamentos deverão ser realizados exclusivamente no sistema WMS, após o envio da informação de alocação pelo WCS.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** e4a35c363d7242e1

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Grupo Pereira durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa;
Relatório de produtividade por operador PLT;
Relatório de produtividade do sorter;
Relatório de rejeito;

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Dashboard  
**Score:** — (nome-topico) | **ID:** 446fd176668639ed

Sugestão de dashboard para visualização da operação e acompanhamento das saídas do sorter, onde ele deve mostrar os valores esperados em cada saída e quantidade tratada.
Obs.: A imagem abaixo é de exemplo, as informações mostradas serão discutidas no decorrer do projeto com as informações pertinentes para a operação.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 3b97ff74605fd1ea

Segue os relatórios disponibilizados pelo WCS para controle de produtividade do time TPC:
Relatório de produtividade por operador/login
Relatório de quantidade de itens separados;
Relatório de Notas Fiscais concluídas;
Relatório de produtividade por PLT (flowhack);
Relatório de anomalias;
Todos os relatórios serão extraídos por filtros de data e hora e serão possíveis de serem exportados via Excel ou PDF.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Relatório da Nota Fiscal  
**Score:** — (semantico) | **ID:** 3bc2e59fe9c7017c

Após todas as tratativas mencionadas e a finalização da nota, seja por total conferência ou forçada pelo operador, o WCS deve disponibilizar um relatório detalhado com todos os MAC Address esperados na nota e os seguintes dados:
Quais foram conferidos,
Quais não foram conferidos,
Se o produto possuir SimCard, se estava conforme o esperado, se era diferente, ou se o produto não veio com o SimCard.
Este relatório deve permitir a pesquisa através dos filtros de "número da nota" e "destino de origem". Todos os relatórios relacionados à nota fiscal devem ser exportáveis para Excel.
Segue exemplo atual que a operação TPC utiliza para este levantamento:
Imagem meramente ilustrativa para uso como base para o time de desenvolvimento

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Anomalias por SKU/Posição  
**Score:** — (semantico) | **ID:** 47bb24ce1db91d42

Relatório que agrupa as anomalias por SKU e posição de destino, consolidando a quantidade de ocorrências por produto. Útil para identificar quais produtos geram mais anomalias e em quais posições elas estão concentradas. Permite filtrar por número da nota e tipo de anomalia.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Notas Fiscal Detalhada  
**Score:** — (semantico) | **ID:** ff2bf8472195e631

Relatório que apresenta o detalhamento de cada item contido nas notas fiscais, exibindo informações de conferência serial a serial. Indica o status de integração, a leitura do SIM Card e as datas relevantes de cada item. Permite filtrar por número da nota e destino/origem.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Notas Fiscais Concluídas  
**Score:** — (semantico) | **ID:** 307ede6641c968c7

Relatório que lista as notas fiscais que já passaram pelo processo de conferência e foram finalizadas. Exibe o comparativo entre a quantidade esperada e a quantidade efetivamente conferida, além das datas de abertura e finalização. Permite filtrar por número da nota e destino/origem.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Itens Incluídos na Nota Fiscal  
**Score:** — (semantico) | **ID:** 74b460b9cda53c8a

Relatório que lista os itens inseridos manualmente ou via integração em uma nota fiscal específica. Para acessar os dados, é necessário informar o número da nota fiscal no filtro antes de realizar a busca. A tela exibe apenas a aba Tabela, sem visualizações de gráfico ou resumo.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Produtividade Operador Triagem  
**Score:** — (semantico) | **ID:** 0f9fb1857473988f

Relatório que mede a produtividade individual de cada operador de triagem, exibindo a quantidade de itens triados e anomalias geradas por nota fiscal, com os horários de início e fim de cada operação. Permite filtrar por login do usuário e agrupar por Hora, Dia ou Mês.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Produtividade Posto Triagem  
**Score:** — (semantico) | **ID:** 1302a330bccdfeef

Relatório que apresenta a produtividade por posto de trabalho na etapa de triagem, detalhando os endereços utilizados, os SKUs alocados e a quantidade de itens e caixas formadas em cada posição. Permite filtrar por nome do posto e tipo de endereço (ALTO_GIRO, BAIXO_GIRO, ANOMALIA_TIPO_UM, ANOMALIA_TIPO_DOIS).

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Produtividade Posto Retirada  
**Score:** — (semantico) | **ID:** cec0d92d54c3a18f

Relatório que registra a quantidade de itens retirados de cada endereço por posto de triagem, separando por tipo de endereço. Permite acompanhar o fluxo de saída dos produtos das posições de anomalia e giro. Permite filtrar por nome do posto e tipo de endereço.

---
**Origem:** [I23.3503] 2025 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV ..docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** b209ab7df0f79b3c

As telas de relatórios para o sistema são as descritas abaixo. Esses relatórios têm como objetivo fornecer visibilidade operacional e permitir o acompanhamento de desempenho, produtividade e exceções do processo.
Relatórios disponíveis:
Produtividade por Rampa
Apresenta a quantidade de volumes processados em cada rampa.
Produtividade do Sorter
Fornece uma visão geral do desempenho do sorter, incluindo volumes processados e tempo de operação.
Relatório de Rejeitos
Detalha os volumes rejeitados, indicando causas e frequência.
Relatório de Read e NoRead
Mostra o número de leituras bem-sucedidas (Read) e falhas (NoRead) realizadas pelo portal de leitura.

---
**Origem:** [I23.3503] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 803fea599da3a319

As telas de relatórios para o sistema são as descritas abaixo. Esses relatórios têm como objetivo fornecer visibilidade operacional e permitir o acompanhamento de desempenho, produtividade e exceções do processo.
Relatórios disponíveis:
Produtividade por Rampa
Apresenta a quantidade de volumes processados em cada rampa.
Produtividade do Sorter
Fornece uma visão geral do desempenho do sorter, incluindo volumes processados e tempo de operação.
Relatório de Rejeitos
Detalha os volumes rejeitados, indicando causas e frequência.
Relatório de Read e NoRead
Mostra o número de leituras bem-sucedidas (Read) e falhas (NoRead) realizadas pelo portal de leitura.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Validações de Integridade  
**Score:** — (semantico) | **ID:** be819c0834484bdc

Durante a alocação, o WCS executa automaticamente:
Verificação de rota e transportadora.
Garantia de que o volume está sendo colocado no pallet correto.
Volumes que não atenderem às regras serão bloqueados para tratativa operacional.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Dashboard Operacional – Visão por Lista de Remessas  
**Score:** — (semantico) | **ID:** 22c562d4eb178d36

O WCS disponibilizará um Dashboard Operacional com visão organizada em formato de lista, onde cada remessa será representada por um item individual, permitindo o acompanhamento em tempo real do status de recebimento dos volumes na rampa de expedição.
O objetivo deste dashboard é fornecer visibilidade clara e imediata do andamento de cada remessa segregando por rampa, facilitando o controle operacional.
Informações Apresentadas no Dashboard
Cada item da lista (remessa) exibirá as seguintes informações:
Número da remessa
Nome da transportadora
Quantidade de volumes previstos
Quantidade de volumes entregues, apresentada no formato “entregues / previstos”
(ex.: 8/10)
Status Visual das Remessas
O dashboard utilizará sinalização visual por cores e comportamento para indicar o status de cada remessa:
Em andamento (padrão):
Remessa ativa, ainda com volumes pendentes de recebimento.
Finalizada:
Quando a quantidade de volumes entregues atingir o total de volumes previstos, a remessa será automaticamente marcada como finalizada e destacada na cor verde.
Cancelada:
Caso a remessa seja cancelada, o item correspondente será exibido na cor vermelha, com efeito piscante, sinalizando uma exceção operacional.
Regras de Ordenação e Deslocamento na Lista
As remessas ativas permanecerão no topo da lista, respeitando a ordenação definida pelo WCS (ex.: ordem de criação ou prioridade operacional).
Ao ser finalizada, a remessa:
Permanecerá visível na lista com status verde por um tempo parametrizável.
Após o tempo configurado, será automaticamente deslocada para o final da lista, mantendo seu histórico visual.
Ao ser cancelada, a remessa:
Permanecerá exibida em vermelho piscante pelo tempo parametrizável.
Após esse período, também será deslocada para o final da lista.
Objetivo do Controle
Esse modelo de dashboard garante:
Visão simples e direta por remessa
Identificação imediata de remessas concluídas e exceções
Melhor priorização operacional
Redução de ruído visual
Maior agilidade na tomada de decisão na expedição

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 4bafa28eb713e84c

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Zaffari durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da operação.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa;
Relatório de produtividade por operador PTL;
Relatório de produtividade do sorter;
Relatório de rejeito;
Relatórios de Read e NoRead
Dashboard Operacional
Dashboard Costumizado

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Processo Operacional  
**Score:** — (semantico) | **ID:** 01c2e3db93f1986c

A operação se inicia com o acesso do operador ao sistema WCS por meio de um coletor portátil ou desktop. O operador realiza login com suas credenciais, sendo permitido o uso de apenas um equipamento por vez. Caso o login ocorra em um novo equipamento, o sistema automaticamente desloga a sessão anterior para manter a integridade das operações.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 377278681533ad4f

As telas de relatórios deverão ser definidas em conjunto pela Invent e o time Stelantis durante a fase de implementação. O objetivo é alinhar os requisitos e determinar quais dados serão exibidos, de acordo com as necessidades do cliente.
Exemplos de Relatórios
Produtividade por Rampa
Apresenta a quantidade de volumes processados em cada rampa.
Produtividade do Sorter
Fornece uma visão geral do desempenho do sorter, incluindo volumes processados e tempo de operação.
Relatório de Rejeitos
Detalha os volumes rejeitados, indicando causas e frequência.
Relatório de Read e NoRead
Mostra o número de leituras bem-sucedidas (Read) e falhas (NoRead) realizadas pelo portal de leitura.
Relatório de Recirculação.
Exibe todos os volumes que tiveram recirculação, e quantidade de vezes que recirculou, além dos volumes que excederam a quantidade de voltas parametrizadas.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - ADITIVO - SHORTINDICATOR  - rev.2.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** c42f357079e6f34a

ESPECIFICAÇÃO DE SOFTWARE - ADITIVO
PROJETO BELEZA SHORTINDICATOR
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - ADITIVO - SHORTINDICATOR  - rev.2.docx`  
**Heading:** SOLUÇÃO – NOVA REGRA DE ENVIO DO ShortIndicator  
**Score:** — (semantico) | **ID:** 6b9bc5c5a046941d

Para atender à limitação do WMS descrita acima, o Velox deverá alterar a lógica de envio do campo ShortIndicator conforme descrito a seguir.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - ADITIVO - SHORTINDICATOR  - rev.2.docx`  
**Heading:** Regra de Negócio  
**Score:** — (semantico) | **ID:** 3b1176c7b025f02d

Ao identificar um corte de item em um determinado volume, o Velox deverá avaliar se existe algum outro volume pendente na mesma missão que também contenha o mesmo SKU cortado.
Se houver outro(s) volume(s) pendente(s) na missão que também contenham o mesmo SKU: o campo ShortIndicator deve ser enviado como false para este volume, mesmo que o corte tenha ocorrido aqui. O indicador de corte não deve ser sinalizado neste ponto. Adicionalmente, caso o corte seja total neste volume (PickedQuantity = 0), o segmento deste item não deve ser enviado na integração, pois o WMS não espera receber PickedQuantity = 0 para volumes intermediários.
Se não houver mais nenhum volume pendente na missão com o mesmo SKU (ou seja, este é o último volume da missão que contém o item): o campo ShortIndicator deve ser enviado como true — independentemente de ter havido corte neste volume específico ou não.
Em resumo: o ShortIndicator = true sinaliza ao WMS que o item sofreu corte em algum ponto da missão, e deve ser enviado no último volume da missão que contiver o SKU, independentemente de onde o corte ocorreu.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Alocação do Item  
**Score:** — (semantico) | **ID:** 0ed69980e8f691cb

• Após a retirada, o WCS indica uma posição sugerida no Transfer, quando aplicável.
• O operador pode se deslocar até o endereço indicado, realizar a leitura do endereço de destino, informar a quantidade e confirma a movimentação.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Relatórios do sistema  
**Score:** — (semantico) | **ID:** 8e6ab91975dbfe69

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e C&A durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da C&A.
Todos os relatórios podem ser exportados para .csv.
Segue alguns exemplos de relatórios.
Relatório de produtividade por Período
Relatório de produtividade por Estação de picking
Relatório de status de Missões (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque da posição
Relatórios detalhados de conferência.
Relatório de Curva ABC
Relatório de Rastreabilidade dos Operadores nos Postos de Trabalho de Picking e Conferência

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Contexto do projeto  
**Score:** — (semantico) | **ID:** 4d57f3fcc9c0b84e

Este tópico tem como objetivo apresentar informações relacionadas ao projeto, permitindo que o leitor compreenda o contexto geral antes de avançar para os detalhes técnicos e funcionais.
A partir desta seção, o leitor estará apto a compreender com maior clareza o funcionamento do processo como um todo, facilitando a análise das etapas detalhadas apresentadas na sequência.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Dashboard de Coleta  
**Score:** — (semantico) | **ID:** 870f2bf82c4a1b3b

Tabela de dados:
Os campos de produtividade real, tempo de estimativa e hora prevista de término só deverá aparecer um resultado no dashboard a partir de 60 minutos de operação, ou seja, todas as vezes que o WCS atualizar a tela será avaliado a produtividade por hora com base em todas as caixas produzidas divido pelo valor de horas de atividade, dessa forma o WCS usará a média de produção para determinar o tempo estimado para finalização das separações e a partir desse tempo a hora estimada para o termino total da separação.
Obs: A linha deve ficar em vermelho quando um led não for apertado dentro de x tempo parametrizado pela operação [Controle de LED]

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Tela de monitoramento das docas  
**Score:** — (semantico) | **ID:** a52ccf07ef310e61

Tela de monitoramento das docas, destinada à exibição em monitores posicionados em cada doca. A tela deve operar em formato de carrossel automático, alternando a visualização das docas.
Deve haver opção para pausar e retomar o carrossel por meio de botões específicos. Não será permitido navegar manualmente entre as telas das docas, sendo a navegação exclusivamente automática.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Tela de monitoramento por doca única  
**Score:** — (semantico) | **ID:** a415e59c67129605

A Tela de Monitoramento de Doca tem como objetivo fornecer à operação uma visão detalhada e em tempo real das informações relacionadas a uma doca específica.
Diferente da visualização exibida nos monitores instalados nas docas — que apresentam as informações de forma rotativa entre múltiplas docas — esta tela é dedicada à análise individual, permitindo maior nível de acompanhamento e tomada de decisão sobre uma única doca selecionada.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** c239637804f5b7ee

O WCS deve disponibilizar relatórios que dê visibilidade completa. Esses relatórios têm como objetivo fornecer visibilidade operacional e permitir o acompanhamento de desempenho, produtividade e exceções do processo, conforme relatórios abaixo:
Relatório de transportes finalizados
Para esse relatório será exibido apenas os transportes finalizados ou cancelados
Análise Caixas SORTER
Esse relatório irá informar por hora/dia/mês as informações pertinentes ao SORTER. Para os seguimentos abaixo deve ser informado a quantidade geral, e por portal
Para os seguimentos abaixo deve ser informado a quantidade geral, e por portal
Informar um agrupador no formato hora/dia/mês e quando selecionado uma das opções o relatório deverá informar o campo primário conforme. Em horas deverá mostrar os dados de ocorrência hora a hora de acordo com a seleção. Em dias deverá mostrar a informação dia a dia de acordo com a seleção
Etiquetas
Relatório com o modelo das etiquetas lidas no SORTER, será informado qual modelo foi usado para identificar o item.
Produtividade por Rampa
Informação de desvio das rampas do SORTER. O relatório deverá aparecer por filtro de Hora/dia/Mês e conforme selecionado irá mostrar a informação das rampas
Relatório de Ondas
Para campos teremos:
Relatório de Abastecimento
MONITOR BK25
Esse monitor irá exibir as informações dos paletes com status “Pendente BK25”
Quando o palete é confirmado a entrada no BK25 no berço de entrada o item vai para o final da fila com o status de “Em processamento”, em caso de cancelamento ou finalização do item deverá sair da lista
Deverá atualizar de tempos em tempos, através de um parâmetro de tempo e mostrar apenas de 8 em 8 paletes.
Esse monitor deverá vir em um formato maior do que os relatório devido ao seu uso, iremos colocar um monitor em uma área próximo ao BK25 das câmaras.
Relatório de separação
Relatório de separação será contabilizado as informações da separação na posição e colaborador que efetuou os processos.
Para o relatório de separação vamos informar os seguintes campos:
Relatório de Rejeito

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** e1bdd3cc02af8b6c

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Master/Invent durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Master/Invent.
Segue alguns exemplos de relatórios.
Relatório de produtividade por rampa
2- Relatório de produtividade por operador PTL
3- Relatório de produtividade por posto
As telas de relatório do sistema serão desenvolvidas conforme as necessidades identificadas em conjunto com a equipe do cliente Master Higimed, durante a fase de implantação do projeto. O objetivo é que os relatórios ofereçam informações relevantes para o acompanhamento da produtividade, controle operacional e apoio à tomada de decisões.
Entre os relatórios previstos/sugeridos estão:
Relatório de produtividade por rampa.
Relatório de produtividade por operador de PTL.
Relatório de produtividade por posto de separação e rejeitos ocorridos no sorter.
Esses relatórios estarão disponíveis em formato digital e poderão ser acessados diretamente pelas estações de trabalho autorizadas, garantindo visibilidade e rastreabilidade em tempo real de toda a operação.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Validações de Integridade  
**Score:** — (semantico) | **ID:** 091b44f448a7b70e

Durante a alocação, o WCS executa automaticamente:
Verificação de rota e transportadora.
Garantia de que o volume está sendo colocado no pallet correto.
Volumes que não atenderem às regras serão bloqueados para tratativa operacional.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Dashboard Operacional – Visão por Lista de Remessas  
**Score:** — (semantico) | **ID:** 0583099d79f5f9b4

O WCS disponibilizará um Dashboard Operacional com visão organizada em formato de lista, onde cada remessa será representada por um item individual, permitindo o acompanhamento em tempo real do status de recebimento dos volumes na rampa de expedição.
O objetivo deste dashboard é fornecer visibilidade clara e imediata do andamento de cada remessa segregando por rampa, facilitando o controle operacional.
Informações Apresentadas no Dashboard
Cada item da lista (remessa) exibirá as seguintes informações:
Número da remessa
Nome da transportadora
Quantidade de volumes previstos
Quantidade de volumes entregues, apresentada no formato “entregues / previstos”
(ex.: 8/10)
Status Visual das Remessas
O dashboard utilizará sinalização visual por cores e comportamento para indicar o status de cada remessa:
Em andamento (padrão):
Remessa ativa, ainda com volumes pendentes de recebimento.
Finalizada:
Quando a quantidade de volumes entregues atingir o total de volumes previstos, a remessa será automaticamente marcada como finalizada e destacada na cor verde.
Cancelada:
Caso a remessa seja cancelada, o item correspondente será exibido na cor vermelha, com efeito piscante, sinalizando uma exceção operacional.
Regras de Ordenação e Deslocamento na Lista
As remessas ativas permanecerão no topo da lista, respeitando a ordenação definida pelo WCS (ex.: ordem de criação ou prioridade operacional).
Ao ser finalizada, a remessa:
Permanecerá visível na lista com status verde por um tempo parametrizável.
Após o tempo configurado, será automaticamente deslocada para o final da lista, mantendo seu histórico visual.
Ao ser cancelada, a remessa:
Permanecerá exibida em vermelho piscante pelo tempo parametrizável.
Após esse período, também será deslocada para o final da lista.
Objetivo do Controle
Esse modelo de dashboard garante:
Visão simples e direta por remessa
Identificação imediata de remessas concluídas e exceções
Melhor priorização operacional
Redução de ruído visual
Maior agilidade na tomada de decisão na expedição

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Guiado por inducción  
**Score:** — (semantico) | **ID:** 5e144f52413fe7a5

La guía de inducción en el WCS será responsable de sugerir el orden de inducción de los palés en la fase de entrada, teniendo en cuenta la matriz de fragilidad de cada elemento asignado al palé, así como la disponibilidad de los productos. El objetivo es garantizar que los elementos se organicen de manera optimizada, priorizando la seguridad y eficiencia del proceso. Sin embargo, la guía no es restrictiva, lo que da flexibilidad a la operación para decidir qué palet inducir.
Funcionalidad:
Pantalla de inducción:
La pantalla de inducción mostrará la siguiente información esencial para los operadores:
Orden de inducción: Indica la secuencia en la que los palés  deben inducirse al proceso, según la fragilidad de los artículos.
Identificador de palet (ilpnPlt): Presenta la identificación única de cada palet, permitiendo el seguimiento y control durante el proceso de inducción.
Matriz de Fragilidad: Muestra la categoría de fragilidad del palé, basada en los elementos que se le asignan. Esto determina la posición de los elementos en el palé y el orden de inducción.
Inducción de palés:
El WCS usará el orden de inducción para determinar qué palé será el siguiente a inducir. El proceso se basará en los siguientes criterios:
La disponibilidad de artículos en el palé, asegurando que el proceso de inducción ocurra sin interrupciones ni falta de productos.
La matriz de fragilidad de cada elemento en el palé, que será un factor crucial para priorizar la inducción. Los objetos más frágiles pueden inducirse en una secuencia que minimiza el riesgo de daños durante el proceso.
Objetivo:
El objetivo de la guía de inducción es asegurar que la inducción de los palés se realice de manera óptima, respetando la fragilidad y disponibilidad en la fase de entrada. Este proceso ayudará a prevenir daños en los productos, aprovechar mejor el espacio disponible y garantizar la eficiencia operativa durante el manejo de palés.
Pantalla de muestra de inducción:

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Informes  
**Score:** — (semantico) | **ID:** 58acb722f38d2bd1

A continuación se describen las pantallas de informes del sistema. Estos informes tienen como objetivo proporcionar visibilidad operativa y permitir el seguimiento del rendimiento del proceso, la productividad y las excepciones.
Informes disponibles:
Informe de productividad de rampa;
Informe de productividad del operador PTL;
Informe de productividad del sorter;
Rechazar el informe;
Informes de Read y NoRead

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Orientación de inducción  
**Score:** — (semantico) | **ID:** 22c6893abb96aafe

La guía de inducción en el WCS será responsable de sugerir el orden de inducción de los palés en la fase de entrada, teniendo en cuenta la matriz de fragilidad de cada elemento asignado al palé, así como la disponibilidad de los productos. El objetivo es garantizar que los elementos se organicen de manera optimizada, priorizando la seguridad y eficiencia del proceso. Sin embargo, la guía no es restrictiva, lo que da flexibilidad a la operación para decidir qué palet inducir.
Funcionalidad:
Pantalla de inducción:
La pantalla de inducción mostrará la siguiente información esencial para los operadores:
Orden de inducción: Indica la secuencia en la que los palés  deben inducirse al proceso, según la fragilidad de los artículos.
Identificador de palet (ilpnPtl): Presenta la identificación única de cada palet, permitiendo el seguimiento y control durante el proceso de inducción.
Matriz de Fragilidad: Muestra la categoría de fragilidad del palé, basada en los elementos que se le asignan. Esto determina la posición de los elementos en el palé y el orden de inducción.
Inducción de palés:
El WCS usará el orden de inducción para determinar qué palé será el siguiente a inducir. El proceso se basará en los siguientes criterios:
La disponibilidad de artículos en el palé, asegurando que el proceso de inducción ocurra sin interrupciones ni falta de productos.
La matriz de fragilidad de cada elemento en el palé, que será un factor crucial para priorizar la inducción. Los objetos más frágiles pueden inducirse en una secuencia que minimiza el riesgo de daños durante el proceso.
Objetivo:
El objetivo de la guía de inducción es asegurar que la inducción de los palés se realice de manera óptima, respetando la fragilidad y disponibilidad en la fase de entrada. Este proceso ayudará a prevenir daños en los productos, aprovechar mejor el espacio disponible y garantizar la eficiencia operativa durante el manejo de palés.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Informes  
**Score:** — (semantico) | **ID:** f78c6448e5a5e73f

Las pantallas de informes deberán ser discutidas y acordadas entre Invent y Tottus durante la fase de implementación para definir qué datos deberán mostrarse según las necesidades de la operación.
A continuación se muestran algunos ejemplos de informes:
Informe de productividad por rampa;
Informe de productividad por operador PTL;
Informe de productividad del sorter;
Informe de rechazos;
Informes de Read y NoRead

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** e502cc21b3d8185c

As telas de relatórios para o sistema são os descritos abaixo. Esses relatórios têm como objetivo fornecer visibilidade operacional e permitir o acompanhamento de desempenho, produtividade e exceções do processo.
Relatórios disponíveis:
Relatório de produtividade por rampa;
Relatório de produtividade por operador PTL;
Relatório de produtividade do sorter;
Relatório de rejeito;
Relatórios de Read e NoRead

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Dashboard Operacional – Visão por Lista de Remessas  
**Score:** — (semantico) | **ID:** bf16f371d7a2aa4e

O WCS disponibilizará um Dashboard Operacional com visão organizada em formato de lista, onde cada remessa será representada por um item individual, permitindo o acompanhamento em tempo real do status de recebimento dos volumes na expedição.
O objetivo deste dashboard é fornecer visibilidade clara e imediata do andamento de cada remessa, facilitando o controle operacional.
Informações Apresentadas no Dashboard
Cada item da lista (remessa) exibirá as seguintes informações:
Número da remessa
Nome da transportadora
Quantidade total da remessa
Quantidade de volumes separados, apresentada no formato “separados / total”(ex.: 8/10). Esse contador soma tanto os volumes Fracionados quanto os Fullcase da remessa.
Status Visual das Remessas
O dashboard utilizará sinalização visual por cores e comportamento para indicar o status de cada remessa:
Em andamento (padrão):
Remessa ativa, ainda com volumes pendentes de recebimento.
Finalizada:
Quando a quantidade de volumes entregues atingir o total de volumes previstos, a remessa será automaticamente marcada como finalizada e destacada na cor verde.
Cancelada:
Caso a remessa seja cancelada, o item correspondente será exibido na cor vermelha, com efeito piscante, sinalizando uma exceção operacional.
Regras de Ordenação e Deslocamento na Lista
As remessas ativas permanecerão no topo da lista, respeitando a ordenação definida pelo WCS (ex.: ordem de criação ou prioridade operacional).
Ao ser finalizada, a remessa:
Permanecerá visível na lista com status verde por um tempo parametrizável.
Após o tempo configurado, será automaticamente deslocada para o final da lista, mantendo seu histórico visual.
Ao ser cancelada, a remessa:
Permanecerá exibida em vermelho piscante pelo tempo parametrizável.
Após esse período, também será deslocada para o final da lista.
Objetivo do Controle
Esse modelo de dashboard garante:
Visão simples e direta por remessa
Identificação imediata de remessas concluídas e exceções
Melhor priorização operacional
Redução de ruído visual
Maior agilidade na tomada de decisão na expedição

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Informes  
**Score:** — (semantico) | **ID:** 5c46e4e57d2d57e8

A continuación, se describen las pantallas de informes del sistema. Estos informes tienen como objetivo proporcionar visibilidad operativa y permitir el seguimiento del rendimiento del proceso, la productividad y las excepciones.
Informes disponibles:
1- Informe de productividad por operador;
2- Informe de productividad de la conferencia;
3- Informe de separación o selección corta (corte)

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 4874f5cfbfda3b20

As telas de relatórios para o sistema são os descritos abaixo. Esses relatórios têm como objetivo fornecer visibilidade operacional e permitir o acompanhamento de desempenho, produtividade e exceções do processo.
Relatórios disponíveis:
Relatório de produtividade por operador PTL;
Relatório de produtividade da Conferência;
Relatório de Separação ou ShortPicking (Corte)

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Relatórios de Acompanhamento de produtividade  
**Score:** — (semantico) | **ID:** febe46ed5470cf28

As telas de relatórios para o sistema são os descritos abaixo. Esses relatórios têm como objetivo fornecer visibilidade operacional e permitir o acompanhamento de desempenho, produtividade e exceções do processo, relatórios disponíveis:
Relatório de produtividade por rampa;
Relatório de produtividade por operador PTL;
Relatório de produtividade do sorter;
Relatório de rejeito;
Relatórios de Read e NoRead
Nota: As imagens acima representam os relatórios da versão atual do sistema, obtidas em junho de 2026, e são apresentadas apenas como referência. Os relatórios poderão sofrer alterações em função de atualizações, melhorias ou novas versões da aplicação.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Zoneamento e Fluxo Físico (Layout)  
**Score:** — (semantico) | **ID:** 10f036cdb4cd4ac0

Para fins de controle sistêmico, o layout da automação é dividido em quatro macro-zonas operacionais:

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Dashboard Operacional – Visão por Lista de Remessas  
**Score:** — (semantico) | **ID:** b169b13341b9b93b

O WCS disponibilizará um Dashboard Operacional com visão organizada em formato de lista, onde cada remessa será representada por um item individual, permitindo o acompanhamento em tempo real do status de recebimento dos volumes na rampa de expedição.
O objetivo deste dashboard é fornecer visibilidade clara e imediata do andamento de cada remessa segregando por rampa, facilitando o controle operacional.
Informações Apresentadas no Dashboard
Cada item da lista (remessa) exibirá as seguintes informações:
Número da remessa
Rampa
Quantidade de volumes previstos
Quantidade de volumes entregues, apresentada no formato “entregues / previstos”
(ex.: 8/10)
Status Visual das Remessas
O dashboard utilizará sinalização visual por cores e comportamento para indicar o status de cada remessa:
Em andamento (padrão):
Remessa ativa, ainda com volumes pendentes de recebimento.
Finalizada:
Quando a quantidade de volumes entregues atingir o total de volumes previstos, a remessa será automaticamente marcada como finalizada e destacada na cor verde.
Cancelada:
Caso a remessa seja cancelada, o item correspondente será exibido na cor vermelha, com efeito piscante, sinalizando uma exceção operacional.
Regras de Ordenação e Deslocamento na Lista
As remessas ativas permanecerão no topo da lista, respeitando a ordenação definida pelo WCS (ex.: ordem de criação ou prioridade operacional).
Ao ser finalizada, a remessa:
Permanecerá visível na lista com status verde por um tempo parametrizável.
Após o tempo configurado, será automaticamente deslocada para o final da lista, mantendo seu histórico visual.
Ao ser cancelada, a remessa:
Permanecerá exibida em vermelho piscante pelo tempo parametrizável.
Após esse período, também será deslocada para o final da lista.
Objetivo do Controle
Esse modelo de dashboard garante:
Visão simples e direta por remessa
Identificação imediata de remessas concluídas e exceções
Melhor priorização operacional
Redução de ruído visual

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** Fluxo de Trabalho (Workflow)  
**Score:** — (semantico) | **ID:** a7e6c7ab6457baed

O processo segue um fluxo de validação em duas etapas ("Bipar e Confirmar") para garantir a acuracidade:
Indução (Scan Item):
O operador seleciona um volume/caixa e realiza a leitura do código de barras com o coletor.
Ação do Sistema: O WCS processa o item e atualiza instantaneamente a TV/Monitor, destacando de forma visual (cor/piscar) qual a posição de destino daquele volume.
Feedback Visual: O monitor exibe a contagem atualizada da posição (Ex: "POSIÇÃO 03 - Progresso: 62/300"). Nota: Caso o volume bipado seja um master/fardo (ex: 12 un), o sistema incrementa a contagem total proporcionalmente.
Confirmação de Vínculo (Scan Local):
O operador dirige-se fisicamente até a posição indicada pelo monitor.
Para efetivar a alocação, o operador realiza a leitura do QR Code da Posição.
Validação: O sistema cruza a informação. Se o local estiver correto, o item é baixado logicamente e o operador é liberado para o próximo. Se o local for incorreto, o coletor emite alerta sonoro de erro e bloqueia o processo além de sinalizar o local correto.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Workflow  
**Score:** — (semantico) | **ID:** 7ca2bc99adcd78ef

The process follows a two-step validation flow ("Scan and Confirm") to ensure accuracy:
Induction (Scan Item):
The operator starts by scanning the items of the heaviest Stage and selects a volume/box and scans the barcode with the collector.
System Action: The WCS processes the item and instantly updates the TV/Monitor, visually highlighting (color/blinking) the destination position for that volume.
Visual Feedback: The monitor displays the updated position count (Ex: "POSITION 03 - Progress: 62/300"). Note: If the scanned volume is a master/bundle (e.g., 12 un), the system increments the total count proportionally*.*
Link Confirmation (Scan Location):
The operator physically goes to the position indicated by the monitor.
To complete the allocation, the operator scans the Position QR Code.
Validation: The system cross-references the information. If the location is correct, the item is logically confirmed and the operator is released for the next one. If the location is incorrect, the collector emits an error sound alert and blocks the process, in addition to signaling the correct location.

---
**Origem:** [I17.112] ADITIVO — `I17.112 - ES - Motivos Rejeito e Relatório Consumo de Caixas - Rev 2.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** b1dfc41df848027a

ESPECIFICAÇÃO DE SOFTWARE DIAMANTE
O escopo deste documento abrange a implementação de um Relatório de Consumo de Embalagens com viés financeiro (controle de peso e custos), além de melhorias de usabilidade e rastreabilidade na Tela de Consulta de Rejeito, formalizando as regras de validação de Lote específicas para pedidos Nacionais (sem trava) e Internacionais (com trava).
Apresentamos nossa proposta e condições gerais de fornecimento do sistema em referência.
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I17.112] ADITIVO — `I17.112 - ES - Motivos Rejeito e Relatório Consumo de Caixas - Rev 2.docx`  
**Heading:** Relatório de Consumo de Caixas e Rastreabilidade  
**Score:** — (semantico) | **ID:** a4bb0a1741b4a073

Este relatório tem como finalidade operacional o controle de estoque de embalagens e a rastreabilidade de consumo por pedido expedido. Nota Técnica: Esta especificação substitui a premissa anterior de "controle financeiro/peso", focando exclusivamente na quantificação física dos insumos utilizados (Caixas) conforme cadastro mestre do MFC.
Fonte de Dados:
O sistema deve realizar o cruzamento de dados entre:
Tabela de Expedição: Pedidos processados e finalizados no WCS.
Mestre de Caixas (MFC): Tabela de cadastro onde constam os códigos ativos e suas respectivas dimensões físicas.
Estrutura do Relatório (Grid e Exportação):
O sistema deve apresentar uma grid de consulta e obrigatoriamente permitir a exportação dos dados para arquivo Excel (.xlsx). O arquivo gerado deve conter as colunas exatas solicitadas para conferência de estoque:
Código da Caixa: Identificador único da embalagem conforme parametrizado no MFC (Ex: CX-P, CX-M).
Descrição / Dimensões: Nome descritivo da caixa concatenado ou acompanhado de suas dimensões, facilitando a identificação visual do modelo (Ex: CAIXA PADRAO M - 300x300x300mm).
Pedido (Order ID): Número do pedido vinculado à utilização desta embalagem.
Quantidade Consumida: Quantidade numérica exata de caixas deste tipo (Código) utilizadas para atender ao respectivo pedido (Order ID).
Data de Consumo: Data de registro da utilização/expedição (Formato: DD/MM/AAAA).
4. Parâmetros de Filtro Para garantir a performance e a usabilidade, a geração do relatório deve exigir:
Período de Consulta: Seleção obrigatória de Data Inicial e Data Final.

---
**Origem:** [I17.112] ADITIVO — `I17.112 - ES - Motivos Rejeito e Relatório Consumo de Caixas - Rev 2.docx`  
**Heading:** Matriz de Mensagens de Rejeito  
**Score:** — (semantico) | **ID:** 87b3ffd63fa2220d

A tela de monitoramento deve apresentar as mensagens padronizadas abaixo, cobrindo tanto as novas regras de EAN quanto as regras de Lote e fluxo:

---
**Origem:** [EURO] ADITIVO — `- ESPECIFICACAO DE SOFTWARE - Relatórios .docx`  
**Heading:** Escopo do Aditivo  
**Score:** — (semantico) | **ID:** 716a3c14e85249f7

O presente aditivo abrange as seguintes alterações no sistema WCS:
a) Consulta Geral – Inclusão do campo de Data de Finalização na tela de consulta geral de remessas/volumes.
b) Produtividade x Posto – Inclusão de coluna com todos os usuários que estavam no posto em determinado intervalo de tempo, e inclusão de coluna com a quantidade de LEDs diferentes acionados no posto no intervalo de tempo.
c) Relatório de Produtividade Geral – Criação de novo relatório consolidado com visão diária de remessas, caixas finalizadas, unidades, SKUs e caixas pendentes.
d) Relatório de Produtividade x Operador – Criação de novo relatório detalhado por operador com visão de remessas, caixas, volumes e SKUs, incluindo linha totalizadora.

---
**Origem:** [EURO] ADITIVO — `- ESPECIFICACAO DE SOFTWARE - Relatórios .docx`  
**Heading:** Relatório de Produtividade x Posto  
**Score:** — (semantico) | **ID:** 80ff99a4617f19ce

O relatório de Produtividade x Posto já existente no sistema WCS receberá as seguintes melhorias:

---
**Origem:** [EURO] ADITIVO — `- ESPECIFICACAO DE SOFTWARE - Relatórios .docx`  
**Heading:** Relatório de Produtividade Geral  
**Score:** — (semantico) | **ID:** 6ef228d21e2e14ca

Objetivo: Criar um novo relatório de Produtividade Geral no sistema WCS, oferecendo uma visão consolidada diária das operações de separação.
Descrição Funcional:
O sistema disponibilizará um novo relatório denominado “Produtividade Geral”, acessível a partir do menu de relatórios do WCS. Este relatório apresentará uma visão consolidada por dia, contendo as seguintes informações:
Filtros disponíveis:
O relatório contará com filtro por período (data inicial e data final), permitindo ao usuário visualizar os dados consolidados de múltiplos dias.
Layout de Exibição:
O relatório será apresentado em formato tabular, com uma linha para cada dia do período selecionado. Ao final da tabela, será exibida uma linha de totalização com os somatórios de cada coluna.
Exemplo de visualização:

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Relatório de Conferência de Pallets  
**Score:** — (semantico) | **ID:** 3fb6c2a0f49df060

O WCS deve disponibilizar um relatório que traga informações sobre as conferências dos pallets, contemplando, no mínimo:
Identificação do palete (endereço/posição) e loja de destino.
Usuário que executou a conferência.
Quantidade de volumes validados durante a conferência.
Quantidade e identificação de volumes divergentes registrados durante a conferência.
Data e horário de início e finalização da conferência.
O relatório poderá ser consultado por filtro de período e exportado em formato .csv, conforme padrão dos demais relatórios do WCS.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Dashboard Operacional – Volumes por Loja por Rampa  
**Score:** — (semantico) | **ID:** 4388bf148147da44

O WCS disponibilizará um Dashboard Operacional com visão de volumes por loja segregados por rampa do sorter. Este dashboard será dividido em dois postos de visualização, permitindo o acompanhamento em tempo real do andamento da operação.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Estrutura do Dashboard  
**Score:** — (semantico) | **ID:** b527a563bd3af38a

O dashboard será dividido em dois postos de exibição:
Cada posto apresentará somente os destinos (lojas) que possuem caixas que já passaram pela balança de conferência ou que já foram alocadas. O dashboard exibirá para cada loja/destino os seguintes contadores:

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Regras de Exibição e Contadores  
**Score:** — (semantico) | **ID:** c69035605e336e39

O dashboard seguirá as seguintes regras para atualização dos contadores e exibição dos destinos:
Regra de Visibilidade: Somente serão exibidos no dashboard os destinos (lojas) que possuem ao menos uma caixa que já tenha passado pela balança de conferência (integrada) ou que já tenha sido alocada em pallet.
Exemplo prático:
Uma loja possui 10 caixas previstas, porém nenhuma passou pela balança de conferência. O dashboard exibirá: Previstas: 10 | Conferido: 0.
Ao passar 1 caixa pela balança e ser aprovada, o dashboard atualizará para: Previstas: 10 | Conferido: 1
Observação: Destinos onde todas as caixas previstas já foram Conferidos poderão receber sinalização visual diferenciada (ex.: cor verde), indicando que a loja está com 100% dos volumes conferidos.
Dashboard Operacional Exemplo:

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Definição do Cálculo  
**Score:** — (semantico) | **ID:** c90579101528da8c

O percentual de ocupação será calculado com base na cubagem dos itens alocados no volume em relação à capacidade total da caixa plástica utilizada:
% Ocupação = (Volume dos Itens / Capacidade da Caixa Plástica) × 100
Regra: A coluna de % de ocupação será exibida em todas as telas de Order Start: Fracionado (todos os níveis e mesaninos). O valor será apresentado em formato percentual (ex.: 75%).

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 2fc23f62e15f9d3c

Para o correto funcionamento do módulo, o sistema WCS Velox necessita de uma nova tabela de log de eventos de rampa cheia no banco de dados, alimentada pelos sinais enviados pelo PLC ao WCS. As informações serão exibidas via interface Web (Google Chrome) nas telas descritas neste documento.

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Solução Proposta  
**Score:** — (semantico) | **ID:** 7ab1cf0a0cdfd55d

A solução é composta por duas telas dentro do módulo de Acompanhamento de Produtividade do WCS Velox:
Tela 1 — Monitor em Tempo Real: painel com todas as rampas de expedição, atualizado a cada ciclo, exibindo status atual, eficiência e tempo acumulado de rampa cheia no turno.
Tela 2 — Relatório Histórico: consulta por período com tabela de eventos, gráfico de eficiência por rampa e exportação para Excel e PDF.
Ambas as telas dependem de novo desenvolvimento nas camadas de back-end (WCS) e de hardware/firmware (PLC), detalhados nas seções a seguir.

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Arquitetura de Dados — Nova Tabela LOG_RAMPA_CHEIA  
**Score:** — (semantico) | **ID:** 501ea51818dd4bad

O PLC já possui lógica para detectar o estado do sensor de rampa cheia. Atualmente, esse sinal influencia o comportamento do Sorter em tempo real (recirculação ou rejeito do volume) mas não gera registro persistente com início e fim do evento.
Para viabilizar o cálculo de duração e o relatório histórico, é necessário:
PLC: configurar o envio de dois sinais ao WCS — um ao detectar rampa cheia e outro ao detectar a liberação da rampa — identificando a rampa em cada mensagem.
WCS Velox: criar a tabela LOG_RAMPA_CHEIA para registrar cada par de sinais recebidos do PLC, conforme estrutura abaixo.
Estrutura da tabela LOG_RAMPA_CHEIA:
Obs: enquanto timestamp_fim for nulo, o evento está ativo — a rampa está atualmente cheia. Isso é o que alimenta o status em tempo real da Tela 1.

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** KPIs Globais  
**Score:** — (semantico) | **ID:** 2c9aeb41c5fa0684

Os KPIs globais são exibidos no topo da tela, consolidando os dados de todas as rampas no período selecionado:

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Grid de Cards por Rampa  
**Score:** — (semantico) | **ID:** 89f094a4f2e493bc

Abaixo dos KPIs globais, a tela exibe um grid com um card por rampa de expedição. Cada card possui um de três estados visuais: CHEIA (vermelho, com pulsação e timer ativo), ATENÇÃO (amarelo, para rampas com eficiência abaixo da meta configurada mas sem evento ativo no momento) e NORMAL (verde). Rampas em estado CHEIA são exibidas no início do grid para facilitar a identificação imediata.
Cada card contém os seguintes campos:

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Tela 2 — Relatório Histórico  
**Score:** — (semantico) | **ID:** 24d2589dac251411

A Tela 2 permite à supervisão consultar o histórico de eventos de rampa cheia por período, analisar a eficiência de cada rampa e exportar os dados para análise externa.
Representação visual da Tela 2:

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Gráfico de Eficiência por Rampa  
**Score:** — (semantico) | **ID:** dd4b81f15d6ebcac

Gráfico de barras horizontais exibindo a eficiência (%) de cada rampa no período filtrado. Rampas com eficiência abaixo de um limiar configurável (padrão: 90%) são destacadas em vermelho. O limiar é parametrizável pelo supervisor.
Representação visual do gráfico de eficiência:

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza - Corte de SKUs bloqueados.docx`  
**Heading:** Solução Proposta  
**Score:** — (semantico) | **ID:** 1c575bb8339896b7

Para atender à necessidade apresentada, será disponibilizada uma nova funcionalidade no sistema por meio de uma tela específica denominada “Corte de Produtos Bloqueados”.
Essa tela permitirá que o usuário informe um ou mais SKU’s que estejam impactando o início de missões e que deseja remover do fluxo. A partir dessa informação, o sistema deverá identificar todas as missões em aberto que possuem esses SKU’s como fator de bloqueio e realizar o corte desses itens de forma massiva.
O corte será aplicado diretamente nas missões bloqueadas, removendo logicamente o SKU responsável pelo bloqueio, sem alterar os demais itens contidos nelas. Após a execução dessa ação, as missões deverão ser reavaliadas pelo sistema e, caso não existam outros impedimentos, deverão ser liberadas para continuidade do processo operacional, respeitando as regras já existentes de integração e execução.
A solução também contempla a execução em lote, permitindo que múltiplos SKU’s sejam informados e processados em uma única ação, trazendo agilidade para o usuário em cenários de alto volume de itens críticos.
Tela Exemplo:

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza - Corte de SKUs bloqueados.docx`  
**Heading:** Relatório de Acompanhamento  
**Score:** — (semantico) | **ID:** 53462129727c5ccd

Como complemento à funcionalidade, será disponibilizado um relatório que permita ao cliente acompanhar todas as ações de corte realizadas dentro de um determinado período.
Esse relatório deverá possibilitar a filtragem por intervalo de datas e apresentar de forma clara as missões que sofreram alteração, os SKU’s que foram cortados em cada uma delas, além das informações de data, hora e usuário responsável pela ação. O objetivo é fornecer visibilidade completa sobre as intervenções realizadas no sistema, permitindo tanto acompanhamento operacional quanto auditoria.
Identificador da missão
SKU cortado
Descrição do SKU
Data do corte
Hora do corte
Usuário responsável pela ação

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Views Para KPIS e Relatórios.docx`  
**Heading:** Matriz de cobertura — Campos por View  
**Score:** — (semantico) | **ID:** 67b84d76410a6341

A tabela abaixo apresenta a cobertura de campos por View. O símbolo X indica presença do campo na View; o símbolo – indica ausência.
Legenda: X = campo presente na View;  – = campo ausente na View.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ BELEZA - ESPECIFICACAO DE SOFTWARE - ADITIVO AUTENTICAÇÃO MONITORAMENTO.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 1a4e41260fa905e2

ESPECIFICAÇÃO DE SOFTWARE
PROJETO BELEZA
 Aditivo Autenticação Monitoramento
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_-_Aditivo_Views_KPIs_Beleza_REV2_tracked.docx`  
**Heading:** Matriz de cobertura — Campos por View  
**Score:** — (semantico) | **ID:** 585abef0a0a09792

A tabela abaixo apresenta a cobertura de campos por View. O símbolo X indica presença do campo na View; o símbolo – indica ausência.
Legenda: X = campo presente na View;  – = campo ausente na View.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Crosscheck, Alocação Automatica, Pedidos, Dashboard e Ajustes Impressão.docx`  
**Heading:** Crosscheck Velox x Dun  
**Score:** — (semantico) | **ID:** a87b3bb502315aed

Permitir que o sistema execute a validação cruzada entre o SKU lido na etiqueta Velox e o código DUN presente na embalagem, sem que a inconsistência gere rejeito na linha. As ocorrências serão registradas para posterior extração em relatório, viabilizando a correção pontual de embalagens e etiquetas com falha de impressão.
A câmera lê a etiqueta Velox e identifica o SKU esperado.
Em seguida, a câmera tenta identificar o DUN da embalagem.
Quando o SKU é identificado corretamente e o DUN não é identificado (ausência ou inconsistência), o sistema registra a ocorrência.
A linha NÃO é interrompida e o volume NÃO é rejeitado, a contagem é apenas registrada.
As ocorrências ficam disponíveis para extração via relatório, agrupadas por SKU.
Parametrização 
A funcionalidade do Cross Check Velox × DUN passa a ser nativa do sistema, A parametrização disponivel ao cliente é exclusivamente sobre o tratamento das divergências identificadas. O cliente poderá configurar se os volumes com inconsistências entre Velox e DUN serão direcionados para o rejeito ou se seguirão normalmente para a rampa operacional, com a ocorrência apenas registrada para extração no relatório

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Crosscheck, Alocação Automatica, Pedidos, Dashboard e Ajustes Impressão.docx`  
**Heading:** Campos do Relatório de Inconsistências  
**Score:** — (semantico) | **ID:** 7914b2844d9ad610

O relatório deverá contabilizar as ocorrências de inconsistência por SKU, permitindo filtros por período, linha e operador. Sugestão de campos:

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Dashboards e Acessos.docx`  
**Heading:** Descrição da Funcionalidade  
**Score:** — (semantico) | **ID:** f661fa18604e2465

Este aditivo tem como objetivo a definição funcional e prototipação de dashboards operacionais e gerenciais, com foco em:
Visibilidade estratégica para diretoria
Apoio à operação logística
Controle de acesso por usuário para visualização dos dashboards
Os layouts apresentados serão utilizados como base para futura implementação sistêmica.
Escopo Geral dos Dashboards
Serão prototipados dashboards com as seguintes visões:
Visão gerencial (empresa/centro)
Visão operacional (separação e produtividade)
Visão de rampas e controle de ondas
Cada dashboard será apresentado com seu respectivo layout e indicadores.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Dashboards e Acessos.docx`  
**Heading:** Dashboard Gerencial – Planejado vs Realizado  
**Score:** — (semantico) | **ID:** a896e6534c057c4a

Dashboard com visão consolidada por empresa e centro.
Indicadores principais:
Remessas planejadas x realizadas
Volumes planejados x realizados
Permitir acompanhamento da performance operacional frente ao planejamento.
Regras Funcionais
Visualização consolidada
Possibilidade de comparação entre unidades
Indicador percentual de atingimento
5. Dashboard – Separação por Tipo (Fracionado vs Full Case)
Dashboard para diferenciação entre:
Picking fracionado
Full case
Objetivo
Permitir análise clara do comportamento de cada tipo de operação.
Tela de Total Volumes Sorter:
Regras Funcionais
Indicadores separados por tipo
Possibilidade de visualização consolidada ou segmentada
6. Dashboard – Tempo Médio de Produção (Fracionado)
Dashboard com foco no tempo de produção por caixa no processo fracionado.
Regra de Negócio
Início: emissão da etiqueta
Fim: checkout
Objetivo
Medir eficiência operacional e identificar gargalos.
Protótipo (Figma)
(Inserir aqui o layout do dashboard – imagem/export do Figma)
7. Dashboard de Produtividade (Base Operacional)
Descrição
Dashboard baseado no modelo atual utilizado pelo cliente, com foco em:
Volumes por hora por colaborador
Objetivo
Servir como base para acompanhamento de desempenho e cálculo de prêmio de produtividade.
Protótipo (Figma)
(Inserir aqui o layout do dashboard – imagem/export do Figma)
Regras Funcionais
Visualização por:
Funcionário
Setor
Turno
Indicadores de meta e atingimento
8. Dashboard de Rampas – Evolução de Volumes
Descrição
Dashboard para acompanhamento dos volumes integrados por rampa e sua evolução.
Objetivo
Permitir controle da execução das ondas e tomada de decisão sobre novas integrações.
Protótipo (Figma)
(Inserir aqui o layout do dashboard – imagem/export do Figma)
Regras Funcionais
Exibir volume total por rampa
Exibir evolução ao longo do tempo
Indicar claramente:
Rampas finalizadas
Rampas em andamento

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Painel de KPI  
**Score:** — (semantico) | **ID:** 4391088b36e247ad

Será disponibilizado painel de KPI para monitoramento das ocorrências identificadas, permitindo à operação visualizar, por rampa ou PTL, quais caixas/produtos foram desviados com suspeita de divergência. O painel deverá ser acessível por estações de operação e por monitores de chão de fábrica.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Relatório de Conferência  
**Score:** — (semantico) | **ID:** 5e4006e8ea69778f

Será criado relatório com os registros de todas as conferências realizadas, contendo, no mínimo, os campos a seguir:

---
**Origem:** [I23.125] ADITIVO — `I23.125 - PROJETO CRISTAL -  SP e MG - ESPECIFICAÇÃO DE ADITIVO FRACIONADOS.docx`  
**Heading:** Relatório de Auditoria de Confirmação de Separação  
**Score:** — (semantico) | **ID:** 080ab71c0012d0ad

Para permitir a consulta das novas informações registradas, será desenvolvido um novo relatório no sistema WCS.
Objetivo do Relatório: Proporcionar à gestão uma ferramenta para auditar o processo de separação de fracionados, permitindo analisar como cada item foi confirmado. O relatório servirá para investigar possíveis erros de separação, identificar padrões de uso por operador e garantir que os procedimentos corretos estão sendo seguidos.
Estrutura do Relatório:
Filtros de Pesquisa:
Período: Data de Início e Data de Fim.
Operador: Caixa de seleção com a lista de todos os operadores.
Pedido/Remessa: Campo para inserir o número do pedido.
Item (SKU): Campo para inserir o código do produto.
Método de Confirmação: Caixa de seleção com as opções ("Todos", "Leitura Unitária", "Confirmação Direta").

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 565cb9984072e453

ESPECIFICAÇÃO DE ADITIVO – DASHBOARDS, RELATÓRIOS E CADENCIAMENTO DE IMPRESSÃO
PROJETO ESPERANÇA – REV 4
Agradecemos antecipadamente pela oportunidade e nos colocamos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Indicadores do Dashboard  
**Score:** — (semantico) | **ID:** 4bff928b1a9b7a7b

Volumes Previstos: Total de volumes previstos pendentes de conclusão. O valor é decrementado conforme volumes deixam o estado de pendência por conclusão da alocação ou por corte/cancelamento. São considerados pendentes todos os volumes que não atingiram o status final de alocação confirmada ou de corte registrado.
Volumes Separados: Somatório acumulado de todos os volumes separados no dia corrente. Zerado automaticamente à meia-noite. Exibe também o percentual em relação ao total previsto.
Volumes Induzidos: Contagem de volumes que passaram pelo portal do Sorter com leitura bem-sucedida, contabilizando cada volume uma única vez independentemente do número de recirculações. Zerado à meia-noite. O percentual exibido é calculado sobre a relação volumes induzidos / volumes separados.
Volumes Produzidos: Somatório acumulado de todos os volumes efetivamente alocados nos PTLs ao longo do dia. Zerado na virada do dia.
Velocidade: Indicador de velocidade instantânea do Sorter, calculado conforme a mesma lógica aplicada no dashboard de Sorter em tempo real já existente no sistema.
Volumes para Indução: Quantidade de volumes presentes na Área de Stage aguardando indução no Sorter.
Autonomia de Indução: Indicador em minutos. Cálculo: volumes para indução / velocidade atual do Sorter. Exemplo: 1.260 volumes / 1.372 vol/hora = 0,91h × 60 = 55 minutos de autonomia.
Read Rate: Taxa de sucesso de leitura dos volumes no portal do Sorter. Mesma lógica do dashboard em tempo real. Cores: Azul ≥ 99,5% | Verde 99,0–99,5% | Amarelo 98,5–99,0% | Vermelho < 98,5%.
Taxa de Recirculação: Fórmula: número de eventos de recirculação / total de volumes induzidos. Cada recirculação é contada individualmente e não deve ser considerado o volume mais de uma vez. Cores: Azul ≤ 5% | Verde 5–10% | Amarelo 10–15% | Vermelho ≥ 15%.
Volumes Recirculados: Somatório acumulado de eventos de recirculação no dia corrente.
Taxa de Rejeito: Fórmula: volumes desviados para a rampa de rejeito / total de volumes processados no Sorter. Cores: Azul 0–0,5% | Verde 0,5–2% | Amarelo 2–5% | Vermelho > 5%.
Volumes Rejeitados: Somatório acumulado de volumes direcionados à rampa de rejeito no dia corrente.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Dashboard de Fechamento de Cargas e Paletes  
**Score:** — (semantico) | **ID:** 4f1f936cdeaa2d63

Este dashboard destina-se ao acompanhamento operacional do setor de alocação, fornecendo visibilidade sobre o status dos paletes em curso e o ritmo de fechamento de cargas ao longo do turno.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Dashboard de Saturação de Rampa  
**Score:** — (semantico) | **ID:** 12c974db15c4c12f

Este dashboard fornece visibilidade em tempo real sobre o status de cada chute de saída do Sorter, com foco na carga pendente de alocação distribuída por matriz de fragilidade. Destina-se ao operador de coordenação de doca e à liderança de expedição.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Regra de Negócio — Chutes  
**Score:** — (semantico) | **ID:** 40a8dcf8cc728ada

O Chute 1 é exclusivo para rejeitos e não deve ser exibido nem contabilizado neste dashboard. Os chutes de produção são os Chutes 2 a 20 (denominados operacionalmente como “Lima 2” a “Lima 20”). O dashboard exibe exclusivamente os 20 chutes de produção.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Indicadores de Cabeçalho  
**Score:** — (semantico) | **ID:** 7925e216987e8dea

Meta de Produção: Total de volumes integrados que ainda não foram separados. A meta total do dia é composta pela soma dos volumes alocados/cancelados com os volumes efetivamente produzidos. Volumes em standby (com dependências sistêmicas pendentes) ficam em espera até entrar no fluxo e não são contabilizados como produzidos.
Volumes Separados: Somatório acumulado de volumes separados no dia.
Volumes Induzidos: Total de volumes induzidos no Sorter no dia corrente, sem contabilizar recirculações. Cada volume é contado uma única vez.
Volumes Produzidos: Total de volumes produzidos (alocados nos PTLs) no dia corrente.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Relatório de Autonomia da Indução  
**Score:** — (semantico) | **ID:** ab9d02f22b62d0aa

Objetivo: Visão consolidada da demanda de indução em relação ao ritmo operacional por hora, permitindo que gestores acompanhem volumes pendentes de indução, histórico por janela horária e tempo de autonomia projetado para o Stage.
Cabeçalho snapshot: Volumes Pendentes de Separação | Volumes Pendentes de Indução | Velocidade Média (calculada sobre horas anteriores, excluindo hora atual; considera apenas induções, não recirculações) | Tempo de Autonomia de Indução (volumes no Stage / velocidade média, em minutos).
Tabela por hora: Data | Hora Início | Hora Fim | Volumes Induzidos | Volumes Alocados | Total Induzido Acum. | Total Alocado Acum. | Eficiência da Operação | Eficiência da Indução. A primeira linha exibe a hora mais recente; demais linhas em ordem decrescente. Filtros: data e hora.
Estrutura do relatório:

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Relatório de Auditoria de Tarefas  
**Score:** — (semantico) | **ID:** b7623b75e9df1400

Objetivo: Listar todos os itens coletados em uma tarefa de separação para conferência física pelo time de prevenção/auditoria antes da liberação para indução. Filtros: número da tarefa ou data.
Cabeçalho: Data | Tarefa | Área (rua) | Separador (Coleta) | Total de Volumes.
Colunas da tabela: N. | Código Produto | Descrição | Endereço | Qtd Separada | Qtd Conferida (campo em branco para anotação) | Divergência | OK (checkbox).
Rodapé: campo para preenchimento pelo Auditor/Prevenção com nome, assinatura e data/hora.
Estrutura do relatório:

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Projeto Esperanca - Pontos de Melhorias.docx`  
**Heading:** Inclusão de Novas Informações na Tela “Volumes”  
**Score:** — (semantico) | **ID:** 25ed8a9c38d87574

Realizar atualização estrutural na tela “Volumes” para ampliar a visibilidade das informações operacionais e eliminar redundâncias existentes. A melhoria visa centralizar dados relevantes para análise e conferência, proporcionando maior clareza na identificação dos volumes, seus respectivos produtos e responsáveis pela separação.
Escopo Técnico
Incluir coluna “Cód. Prod” (código Winthor).
Incluir coluna “Endereço de Picking”.
Na coluna Código de barras substituir para trazer o código de barras do SKU.
Incluir campo “Nome do Separador”.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Visão por Matriz – Barras de Progresso  
**Score:** — (semantico) | **ID:** 066f4e52e3396ea2

Após a seleção da rampa, o dashboard exibirá a visão consolidada de todas as matrizes previstas para aquela rampa, com base nos volumes já integrados. Cada matriz será representada por um bloco individual contendo duas barras de progresso:
Matriz 1
Barra de Volumes Pendentes – indica visualmente a quantidade de volumes que ainda não foram recebidos na rampa.
Barra de Volumes Finalizados – indica visualmente a quantidade de volumes já recebidos e confirmados na rampa.
Matriz 2
Barra de Volumes Pendentes – indica visualmente a quantidade de volumes que ainda não foram recebidos na rampa.
Barra de Volumes Finalizados – indica visualmente a quantidade de volumes já recebidos e confirmados na rampa.
Matriz 3
Barra de Volumes Pendentes – indica visualmente a quantidade de volumes que ainda não foram recebidos na rampa.
Barra de Volumes Finalizados – indica visualmente a quantidade de volumes já recebidos e confirmados na rampa.
Matriz 4
Barra de Volumes Pendentes – indica visualmente a quantidade de volumes que ainda não foram recebidos na rampa.
Barra de Volumes Finalizados – indica visualmente a quantidade de volumes já recebidos e confirmados na rampa.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Status Visual das Matrizes  
**Score:** — (semantico) | **ID:** 996125f31bcf1140

O dashboard utilizará sinalização visual por cores para indicar o status de cada matriz:
Pendente (padrão):
Matriz ativa, ainda com volumes pendentes de recebimento na rampa. A barra de pendentes estará preenchida e a barra de finalizados em progresso.
Finalizada:
Quando todos os volumes previstos forem recebidos, a matriz será automaticamente marcada como finalizada e destacada na cor verde. A barra de finalizados estará 100% preenchida e a barra de pendentes zerada.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Objetivo do Controle  
**Score:** — (semantico) | **ID:** efb8b17964efd6f8

Esse modelo de dashboard garante:
Visão segregada por rampa e matriz com barras de progresso individuais
Identificação imediata de volumes pendentes e finalizados por matriz
Melhor priorização operacional na expedição
Acompanhamento em tempo real baseado nos volumes já integrados
Maior agilidade na tomada de decisão na expedição
.

---
**Origem:** [I25.3515] ADITIVO — `I25_3515 - Aditivo Dashboard de Previsão Próximos Volumes por Rampa - Projeto Esperança - Rev.1_2.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 3fd6bc4d00e43f6a

ESPECIFICAÇÃO DE ADITIVO – DASHBOARD DE PREVISÃO PRÓXIMOS VOLUMES POR RAMPA
PROJETO ESPERANÇA – REV 1
Agradecemos antecipadamente pela oportunidade e nos colocamos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I25.3515] ADITIVO — `I25_3515 - Aditivo Dashboard de Previsão Próximos Volumes por Rampa - Projeto Esperança - Rev.1_2.docx`  
**Heading:** Dashboard de Previsão Próximos Volumes por Rampa – Picking Full Case  
**Score:** — (semantico) | **ID:** 28f2fc7f1f9a7b51

O sistema Velox WCS já disponibiliza, no projeto Esperança, o dashboard “Rampa Tempo Real”. Este aditivo contempla a disponibilização do mesmo dashboard, com o mesmo layout, porém abastecido de uma forma diferente: em vez de exibir todos os volumes previstos, o painel exibirá somente os volumes previstos para cada rampa, provenientes das tarefas em que ao menos um dos volumes já tenha passado pelo portal.
O objetivo deste dashboard é sinalizar para a operação, em tempo real, para onde está sendo previsto o direcionamento dos próximos volumes, antecipando a carga de trabalho de cada rampa e dando visibilidade aos pontos onde haverá ociosidade.
Layout de referência – Dashboard Rampa Tempo Real

---
**Origem:** [I25.3515] ADITIVO — `I25_3515 - Aditivo Dashboard de Previsão Próximos Volumes por Rampa - Projeto Esperança - Rev.1_2.docx`  
**Heading:** Regra de Abastecimento do Dashboard  
**Score:** — (semantico) | **ID:** 56ce89c4068e7066

Será utilizado o mesmo layout do dashboard “Rampa Tempo Real”, mantendo a representação visual de cada chute:
Número grande central: quantidade total de volumes previstos para o chute, provenientes das tarefas de Full Case já ativadas (com ao menos uma caixa lida no Sorter). O contador contempla tanto os volumes a caminho quanto os volumes já desviados na rampa que ainda aguardam alocação no palete.
Números coloridos abaixo: quantidade de volumes previstos segmentada por matriz de fragilidade, seguindo a mesma legenda de cores já vigente. A soma deve ser igual ao número central.
Incremento: no momento da ativação da tarefa (leitura da primeira caixa no Sorter), todos os volumes da tarefa são somados aos contadores das rampas de destino correspondentes.
Decremento: à medida que cada volume é efetivamente alocado em seu palete de destino, ele deixa de ser contabilizado como previsto e sai do contador.

---
**Origem:** [I25.3515] ADITIVO — `I25_3515 - Aditivo Dashboard de Previsão Próximos Volumes por Rampa - Projeto Esperança - Rev.1_2.docx`  
**Heading:** Parâmetros de Configuração  
**Score:** — (semantico) | **ID:** 05f725fa66fe2b51

O WCS deverá disponibilizar o seguinte parâmetro para configuração deste dashboard:
Tempo Limite de Previsão (minutos): tempo máximo aguardado entre o desvio do volume para a rampa e a sua alocação no palete. Excedido esse tempo sem alocação, é acionado o alerta visual vermelho piscante na posição da rampa.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX 2025.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** d26a5b908afb800a

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e DellaVolpe durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da DellaVolpe.
Segue alguns exemplos de relatórios.
1.   Consulta de Estoque
2.   Mensagens PLC x MFC
3.   Mensagens LED x MFC
4.   Mensagens WS x MFC
5.   Consultar Sacas
6.   Consultar Log
7.   Consultar Log Leitora
8.   Consultar de Recebimento
9.   Consulta Inventário
10. Consulta Curva ABC
11. Produtividade Automação
12. Peso Estimado VS Peso Real
• Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
• O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [IA] ADITIVO — `Descritivo Funcional - Velox - IA.docx`  
**Heading:** Teste IA  
**Score:** — (semantico) | **ID:** 04c59114f03d3fb8

Nesta tela, o sistema recebe uma imagem e executa o processo de validação conforme as regras do WCS. A Inteligência Artificial analisa a imagem e destaca em verde a região onde o código foi identificado.
A porcentagem exibida representa o nível de confiança da IA na leitura correta da imagem. Esse nível de confiança é configurável na tela Dashboard IA permitindo ajustar o grau mínimo de certeza necessário para considerar uma leitura válida. Há o campo de Parâmetros Personalizados, que possibilita a seleção da regra específica de confiança que foi criada na tela Dashboard IA.
Por exemplo: se a IA estiver configurada para exigir 50% de confiança e, no momento da leitura, retornar 55%, a leitura será considerada válida e o processo seguirá normalmente no fluxo operacional.
Essa flexibilidade é importante porque determinados modelos de caixas podem apresentar menor nível de confiança na leitura, mas ainda assim serem corretamente identificados na prática operacional.
Figura 02 – Tela de Teste IA

---
**Origem:** [IA] ADITIVO — `Descritivo Funcional - Velox - IA.docx`  
**Heading:** Dashboard IA  
**Score:** — (semantico) | **ID:** c0428c2ede4cf867

Figura 03 – Tela de Dashboard campo Leitura
A tela de Dashboard de IA é responsável por fornecer uma visão geral da operação. Inicialmente, o operador seleciona o período desejado, definindo uma data inicial e uma data final para análise.
Leitura — Caracterização de Resultados
Este indicador apresenta a classificação dos resultados de leitura realizados pela Inteligência Artificial, conforme os cenários abaixo:
Sucesso: Casos em que a IA detectou corretamente a área do código e a leitura foi realizada com êxito.
Sem Detecção: Casos em que a IA não identificou nenhuma área válida na imagem para tentativa de leitura.
Corte: Casos em que a IA detectou um código, porém a leitura retornou um código incompleto (com menos de 13 dígitos).
NoRead: Casos em que a IA identificou a área do código, mas o software de leitura de código de barras não conseguiu interpretar o conteúdo do código.
Figura 04 – Tela de Dashboard campo “Lido x Esperado” e “Ranking de Leituras”
Lido x Esperado por Produto: Apresenta a comparação entre a quantidade de itens lidos e a quantidade esperada por produto, classificando se a leitura foi realizada via Inteligência Artificial ou via PLC, além de indicar a quantidade pendente.
Ranking de Leitura: Exibe um ranking das caixas mais frequentemente lidas pela IA incluindo a classificação por código, quantidade total de leituras e percentual de participação no volume geral de leituras.
Figura 05 – Tela de Dashboard campo “Erros de leitura por lado” e “Erros de Detecção por modelo”
Erros de Leitura por Lado (Câmera): Para a análise de erros por câmera, são considerados apenas os casos classificados como Corte e NoRead, representando falhas na leitura após a detecção do código.
Erros de Detecção por Modelo: Apresenta a análise de detecção por modelo de IA indicando se houve ou não detecção de código de acordo com cada modelo configurado no campo de Configuração, onde são definidos os parâmetros e os níveis de confiança. Esses modelos correspondem aos perfis utilizados na tela de leitura, na qual a imagem capturada é exibida e processada pela IA.

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - Descritivo Funcional Aditivo - Pallets Com Ocorrências e liberação de etiquetas.docx`  
**Heading:** Sinalização visual e encaminhamento para área de auditagem  
**Score:** — (semantico) | **ID:** 11f570497180844c

Ao identificar volumes com ocorrência após o fechamento, o WCS aciona a sinalização na estação e o operador se baseia nos indicativos das luzes para encaminhar o pallet fisicamente à área de auditagem — sem nenhuma confirmação sistêmica necessária.
O WCS comanda os LEDs da estação para piscar 3 (três) vezes em azul no momento da identificação da ocorrência durante o fechamento do pallet;
A sinalização é o único indicativo operacional: o operador reconhece o padrão e encaminha o pallet para a área de auditagem;
Nenhuma leitura de endereço ou confirmação no sistema é exigida para o encaminhamento;

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - SEGURANÇA NO PICKING REV 1.docx`  
**Heading:** Ciclo de Validação  
**Score:** — (semantico) | **ID:** 2df971041584e643

Para não impactar a produtividade da operação com leituras excessivas, a validação de segurança funcionará sob o conceito de "Primeiro Pick do Ciclo".
Endereço Não Validado (Pendente): O sistema exige a leitura do produto (Scan) na primeira visita ao endereço.
Endereço Validado (Confiável): Após o primeiro sucesso, o endereço ganha o status "Validado" e as próximas separações seguem o fluxo normal (apenas confirmação no LED), sem necessidade de bipar o produto novamente.
Reset (Novo Ciclo): O status volta a ser "Não Validado" apenas quando acionado manualmente via gestão (ver item 4).

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - SEGURANÇA NO PICKING REV 1.docx`  
**Heading:** Fluxo Operacional  
**Score:** — (semantico) | **ID:** 119ef6191d014dce

Ao receber uma tarefa de separação para a Linha de Picking, o WCS verificará o status do endereço e aplicará o seguinte comportamento:
Cenário A: Endereço "Validado" (Fluxo Rápido)
O LED Azul acende indicando a posição.
O display exibe a quantidade imediatamente.
O operador separa e confirma no botão do LED (processo atual, sem travamentos).
Cenário B: Endereço "Pendente de Validação" (Fluxo Seguro)
Ocorre na primeira coleta após um Reset ou falha anterior.
O LED Azul acende indicando a posição.
Bloqueio: O display não exibe a quantidade e o PDV mostra a mensagem: "VALIDAÇÃO DE ENTRADA: BIPE O PRODUTO".
Ação: O operador bipa uma unidade do produto físico.
Validação WCS:
Sucesso: O endereço muda o status para "Validado". O display libera a quantidade e o fluxo segue.
Erro: O PDV bloqueia com alerta sonoro "PRODUTO DIVERGENTE".

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Dashboard  
**Score:** — (nome-topico) | **ID:** 23c2a780c5c28e5e

No início da linha de picking deverá existir um monitor com um dashboard na tela que será atualizado automaticamente, sinalizando a quantidade de caixas que o operador deverá induzir na linha.
Nesta tela deverá conter as informações das quantidades de caixas e respectivos tamanhos para orientar o Operador o que inserir no Order Start.
Na medida que o operador insere a caixa na linha, o scanner fará a identificação do código de barras da caixa e o sistema MFC decrementará do Dashboard automaticamente.
Obs: estamos definindo a versão final da tela do Dashboard, que deverá apresentar também um índice produtivo. Entretanto a mesma não sofrerá uma alteração além disso.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 47d76054a2a23a6e

Pallet Invent deverá enviar para o sistema SAP os dados do pedido:
Número do Transporte
Pallet
Remessa
Placa
Nome do cliente
Janela de entrega

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Relatórios e telas do sistema  
**Score:** — (semantico) | **ID:** 4da540145714b084

Apresentaremos um documento específico para detalhamento das telas, relatórios e dashboard do sistema MFC, não se limitando apenas aos relatórios padrões que já fazem parte do sistema.
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Mensagens WS X MFC  
**Score:** — (semantico) | **ID:** a057152b6dabffe9

Esta tela busca mostrar o histórico de mensagens enviadas entre o sistema MFC e o sistema do cliente. Primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta e, logo após, os resultados serão retornados na tela ilustrada pela figura e descreve os dados retornados.
Tela de consulta: mensagens WS x MFC.
Descrição dos dados mostrados na consulta de WS x MFC.
Histórico de mensagens WS x MFC.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Resumo de unidades por hora  
**Score:** — (semantico) | **ID:** c5478ce523908d69

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. A figura e descrevem o conteúdo dessa tela.
Tela de resumo de unidades por hora.
Descrição dos indicadores da tela de resumo de unidades por hora.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 6eecb794c487fe42

Assim como a tela de resumo de unidades por hora. a tela de resumo de caixas por hora disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, a figura descreve o conteúdo dessa tela.
Tela de resumo de caixas por hora.
Descrição dos indicadores da tela de resumo de caixas por hora.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 02cf734489541e8a

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. Primeiramente, o usuário A tela pode ser acessado após a seleção de um intervalo de tempo e a figura ilustra seu conteúdo, onde é possível verificar os totais separados para caixas, unidades e endereços.
Descrição dos indicadores da tela de resumo de caixas por hora.
Tela de resumo por posto.
Além disso, é possível utilizar os botões Gráfico por desvio e Gráfico por unidade para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas, respectivamente:
Tela de resumo por posto: visualização em gráfico de barras de volumes separados.
Tela de resumo por posto: visualização em gráfico de barras de unidades separadas.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 091798cd3924b90f

As telas de relatório existentes já discutidas e alinhadas entre Invent e Avon.
Segue alguns exemplos de relatórios.
Relatório de caixas/hora por braço
Relatório de caixas/hora por estação
Relatório de caixas/hora por equipamento
Relatório de caixas/hora total
Relatório de unidades/hora por braço
Relatório unidades/hora por estação
Relatório de unidades/hora por equipamento
Relatório de Rejeito Reisado
•	Existem consultas de LOG, Visualização geral de cada caixa, Tracking (Rastreamento), entre outros telas.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** e70e5647cebdb3a7

As telas de relatório existentes já discutidas e alinhadas entre Invent e Avon.
Segue alguns exemplos de relatórios.
Relatório de caixas/hora por braço
Relatório de caixas/hora por estação
Relatório de caixas/hora por equipamento
Relatório de caixas/hora total
Relatório de unidades/hora por braço
Relatório unidades/hora por estação
Relatório de unidades/hora por equipamento
Relatório de Rejeito Reisado
•	Existem consultas de LOG, Visualização geral de cada caixa, Tracking (Rastreamento), entre outros telas.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Relatórios e telas do sistema  
**Score:** — (semantico) | **ID:** c122f1677749eb87

Apresentaremos um documento específico para detalhamento das telas, relatórios e dashboard do sistema MFC, não se limitando apenas aos relatórios padrões que já fazem parte do sistema.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Mensagens WS X MFC  
**Score:** — (semantico) | **ID:** 36346308b7c674bb

Esta tela busca mostrar o histórico de mensagens enviadas entre o sistema MFC e o sistema do cliente. Primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta e, logo após, os resultados serão retornados na tela ilustrada pela figura e descreve os dados retornados.
Tela de consulta: mensagens WS x MFC.
Descrição dos dados mostrados na consulta de WS x MFC.
Histórico de mensagens WS x MFC.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 3eed19a7277b37d2

O grupo de telas utilitárias tem como objetivo fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de chão de fábricas, integrações e banco de dados. Por padrão, somente a tela de iniciar serviço MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha como a tela de Iniciar Serviço MFC pode ser utilizada.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Estatísticas  
**Score:** — (semantico) | **ID:** 5bd55db25c4a1fc8

O sistema MFC disponibiliza relatórios estatísticos ao usuário para verificar o comportamento e índices de produção do equipamento. Por exemplo, um técnico do equipamento pode consultar os desvios realizados e perceber que há uma quantidade excessiva de volumes passando por um único ponto. Assim, as Seções abaixo mostram as telas disponibilizadas com essa finalidade.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Resumo de unidades por hora  
**Score:** — (semantico) | **ID:** 7d0716500d6ad381

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. A figura e descrevem o conteúdo dessa tela.
Tela de resumo de unidades por hora.
Descrição dos indicadores da tela de resumo de unidades por hora.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 8f1b62b73a31bed0

Assim como a tela de resumo de unidades por hora. a tela de resumo de caixas por hora disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, a figura descreve o conteúdo dessa tela.
Tela de resumo de caixas por hora.
Descrição dos indicadores da tela de resumo de caixas por hora.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Relatórios e telas do sistema  
**Score:** — (semantico) | **ID:** a97b3ee1b57c0cb1

Apresentaremos um documento específico para detalhamento das telas, relatórios e dashboard do sistema MFC, não se limitando apenas aos relatórios padrões que já fazem parte do sistema.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Mensagens WS X MFC  
**Score:** — (semantico) | **ID:** 778dfaaff1f1128a

Esta tela busca mostrar o histórico de mensagens enviadas entre o sistema MFC e o sistema do cliente. Primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta e, logo após, os resultados serão retornados na tela ilustrada pela figura e descreve os dados retornados.
Figura  - Tela de consulta: mensagens WS x MFC.
Tabela  - Descrição dos dados mostrados na consulta de WS x MFC.
Figura  - Histórico de mensagens WS x MFC.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 2514bd42ad6a1284

O grupo de telas utilitárias tem como objetivo fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de chão de fábricas, integrações e banco de dados. Por padrão, somente a tela de iniciar serviço MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha como a tela de Iniciar Serviço MFC pode ser utilizada.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Estatísticas  
**Score:** — (semantico) | **ID:** 596b3e6f013783c9

O sistema MFC disponibiliza relatórios estatísticos ao usuário para verificar o comportamento e índices de produção do equipamento. Por exemplo, um técnico do equipamento pode consultar os desvios realizados e perceber que há uma quantidade excessiva de volumes passando por um único ponto. Assim, as Seções abaixo mostram as telas disponibilizadas com essa finalidade.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Resumo de unidades por hora  
**Score:** — (semantico) | **ID:** 425509bda2b0bc0d

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. A figura e descrevem o conteúdo dessa tela.
Figura  - Tela de resumo de unidades por hora.
Tabela  - Descrição dos indicadores da tela de resumo de unidades por hora.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 2e6f577f3722786e

Assim como a tela de resumo de unidades por hora. a tela de resumo de caixas por hora disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, a figura descreve o conteúdo dessa tela.
Figura  - Tela de resumo de caixas por hora.
Tabela  - Descrição dos indicadores da tela de resumo de caixas por hora.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Estação de supervisório  
**Score:** — (semantico) | **ID:** 1e486b33f3806814

Para visualizar em tempo real as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência pressionado, erro em Inversor de frequência etc.)	 forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela INVENT) onde o mesmo permanecerá instalado em uma Estação de Supervisório, fornecido pelo cliente.
Abaixo segue especificação de hardware mínima para execução do Sistema de Supervisório INVENT:
Tabela  - Requisitos mínimos do desktop para Estação Supervisório.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Relatórios e telas do sistema  
**Score:** — (semantico) | **ID:** 074a7ecf23fe2fd4

Apresentaremos um documento específico para detalhamento das telas, relatórios e dashboard do sistema MFC, não se limitando apenas aos relatórios padrões que já fazem parte do sistema.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Mensagens WS X MFC  
**Score:** — (semantico) | **ID:** dda72c7e8dbe7ca1

Esta tela busca mostrar o histórico de mensagens enviadas entre o sistema MFC e o sistema do cliente. Primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta e, logo após, os resultados serão retornados na tela ilustrada pela figura e descreve os dados retornados.
Tela de consulta: mensagens WS x MFC.
Descrição dos dados mostrados na consulta de WS x MFC.
Histórico de mensagens WS x MFC.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 81626456c8370dbd

O grupo de telas utilitárias tem como objetivo fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de chão de fábricas, integrações e banco de dados. Por padrão, somente a tela de iniciar serviço MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha como a tela de Iniciar Serviço MFC pode ser utilizada.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Estatísticas  
**Score:** — (semantico) | **ID:** f18666ae1a29e266

O sistema MFC disponibiliza relatórios estatísticos ao usuário para verificar o comportamento e índices de produção do equipamento. Por exemplo, um técnico do equipamento pode consultar os desvios realizados e perceber que há uma quantidade excessiva de volumes passando por um único ponto. Assim, as Seções abaixo mostram as telas disponibilizadas com essa finalidade.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Resumo de unidades por hora  
**Score:** — (semantico) | **ID:** 1069e94cbaeb6f49

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. A figura e descrevem o conteúdo dessa tela.
Tela de resumo de unidades por hora.
Descrição dos indicadores da tela de resumo de unidades por hora.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** b8094238fd28d7d6

Assim como a tela de resumo de unidades por hora. a tela de resumo de caixas por hora disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, a figura descreve o conteúdo dessa tela.
Tela de resumo de caixas por hora.
Descrição dos indicadores da tela de resumo de caixas por hora.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 0ea0d78f6669fd54

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. Primeiramente, o usuário A tela pode ser acessado após a seleção de um intervalo de tempo e a figura ilustra seu conteúdo, onde é possível verificar os totais separados para caixas, unidades e endereços.
Descrição dos indicadores da tela de resumo de caixas por hora.
Tela de resumo por posto.
Além disso, é possível utilizar os botões Gráfico por desvio e Gráfico por unidade para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas, respectivamente:
Tela de resumo por posto: visualização em gráfico de barras de volumes separados.
Tela de resumo por posto: visualização em gráfico de barras de unidades separadas.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** b6970d3c2f934439

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 7b3f037e731a5ad7

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** 2d9bc8acbba6062e

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 2d99bf2ac4bd5bc7

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do MFC podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** c81b44dd96b5e03a

O sistema MFC disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 0f3820bc37be4c76

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o MFC apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 0cb1a1555335e2bd

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** ca105a74b6eeda9d

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 2acad0ea6d798d8e

O sistema MFC permite ao usuário configurar o comportamento do MFC. A figura apresenta a tela Configurações.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** 6a66a8129ab508d7

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 71076d207b269ece

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** 11d1c7708fc936fa

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 3b58d5b4ca25d34a

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do MFC podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** e7d64f228910bfab

O sistema MFC disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 23bbe7e8b123a8ef

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o MFC apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** cf28bc9eaa0005fd

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** 063b4649817ea8f9

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** bb85f7b7b2afd409

O sistema MFC permite ao usuário configurar o comportamento do MFC. A figura apresenta a tela Configurações.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** a4ac5aa2c7efae33

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 05326e3c865ad43b

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** 81bc0123ad6777eb

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** cf8dd33a7418bc29

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do MFC podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** 45e913b17d690644

O sistema MFC disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 57d8aa7ee5a40cf7

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o MFC apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 3c4624fa1dae8c34

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** 3a52a9ce297dd472

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 3b2d26197769fd18

O sistema MFC permite ao usuário configurar o comportamento do MFC. A figura apresenta a tela Configurações.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 0b513e47a4ff1583

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Grupo Nós para definição de quais dados precisarão ser mostrados conforme necessidade do Grupo Nós.
Segue alguns exemplos de relatórios.
1-	Relatório de produtividade por posto
2-	Relatório de produtividade por operador
3-	Relatório de produtividade por família de produto
4-	Relatório de lojas para conferência
5-	Relatório de produtividade por produto geral
6 –     Relatório de produtividade por Rampa
7 -      Relatório de produtividade por Loja
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY -ADITIVO BAUS_REV1.docx`  
**Heading:** Baús Aceitos pela Automação  
**Score:** — (semantico) | **ID:** 53b522ae93398063

Atualmente, o sistema permite a vinculação de pedidos a caixas plásticas que iniciem seus códigos com “78”.
Para suprir a necessidade da operação, será necessário adicionar uma regra no Order Start que aceite a vinculação de caixas plásticas que iniciem seus códigos com “80”.
Sendo assim, as caixas plásticas que iniciarem os códigos com “78” ou “80” serão aceitas para o uso na automação.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY -INTEGRAÇÃO POSTO A POSTO_REV1.docx`  
**Heading:** Relatórios de Caixas Utilizadas  
**Score:** — (semantico) | **ID:** e278854c68214822

O sistema Velox deve exibir para o time do Grupo Nós um relatório com foco de evidenciar por pedidos quantas caixas estão sendo planejadas ao receber a integração e quantas são utilizadas no final de todo o processo.
Este relatório tem o objetivo de evidenciar ao cliente quantas caixas estão sendo usadas a mais do previsto por pedido e conseguir ter a métrica exata para planejar um plano de ação objetivo sobre este ponto.
Deve ser exibido para o usuário quais etiquetas das caixas que foram vinculadas as caixas que já eram esperadas desde o início da integração e quais foram as etiquetas vinculadas as caixas adicionais solicitadas durante o picking.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - ADTV - PMB.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** 87ec638f80a01be3

A operação/automação não será alterada com essa nova configuração do sistema.

---
**Origem:** [I21.131] 2022 — `- Layout Novo - I21.131 - ESPECIFICACAO DE HARDWARE - PMB REV1.docx`  
**Heading:** Desktop Supervisório  
**Score:** — (semantico) | **ID:** 0bb3eb2ad3b87cfb

Para realizar o monitoramento dos equipamentos de chão de fábrica, um sistema supervisório será implantado.
Para visualizar em tempo real todas as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência acionado, erro em inversor de frequência etc.) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela Invent) onde o mesmo permanecerá instalado em uma estação de supervisório, fornecido pelo cliente.
Esse sistema deverá ser executado em um desktop exclusivo e recomenda-se uma tela de tamanho de 32 polegadas ou maior para facilitar a visualização das informações sobre a linha.
A Tabela abaixo descreve seus requisitos mínimos de hardware e software:

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE HARDWARE - REV1.docx`  
**Heading:** Desktop Supervisório  
**Score:** — (semantico) | **ID:** 1c4a31ac92b168d2

Para realizar o monitoramento dos equipamentos de chão de fábrica, um sistema supervisório será implantado.
Para visualizar em tempo real todas as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência acionado, erro em inversor de frequência etc.) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela Invent) onde o mesmo permanecerá instalado em uma estação de  supervisório, fornecido pelo cliente.
Esse sistema deverá ser executado em um desktop exclusivo e recomenda-se uma tela de tamanho de 32 polegadas ou maior para facilitar a visualização das informações sobre a linha.
A Tabela abaixo descreve seus requisitos mínimos de hardware e software:

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Dashboard  
**Score:** — (nome-topico) | **ID:** 5a51fc481e981e4d

Será necessária uma tela de dashboard para informar ao líder do processo o resultado da operação naquele momento.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 190f8e94d14a1cdd

Relatórios, iremos disponibilizar os relatórios conforme a necessidade do cliente, para isso, cliente deverá analisar quais as informações que precisa ser extraída nos relatórios e informar a invent para que seja desenvolvido.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 6e7277d4de7f753e

Esta tela busca mostrar o histórico de mensagens enviadas entre o sistema MFC e o sistema do cliente. Primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta e, logo após os resultados serão retornados na tela ilustrada pela figura e descreve os dados retornados.
Figura 8 - Tela de consulta: Mensagens WS x MFC
Tabela 4 - Descrição dos dados mostrados na consulta de WS x MFC
Figura 9 - Tela de histórico de mensagens WS x MFC

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 5fc09cab3d014f55

O grupo de telas utilitárias tem como objetivo de fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de chão de fábricas, integrações e banco de dados. Por padrão, somente a tela de iniciar serviço MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha como a tela de Iniciar Serviço MFC pode ser utilizada.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Estatísticas  
**Score:** — (semantico) | **ID:** 992a1e7b307852b4

O sistema MFC disponibiliza relatórios estatísticos ao usuário para verificar o comportamento e índices de produção do equipamento. Por exemplo, um técnico do equipamento pode consultar os desvios realizados e perceber que há uma quantidade excessiva de volumes passando por um único ponto. Assim, as Seções abaixo mostram as telas disponibilizadas com essa finalidade.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Resumo de unidades por hora  
**Score:** — (semantico) | **ID:** 3981b42c61f9de67

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. A figura e descrevem o conteúdo dessa tela.
Figura 12 - Tela de resumo de unidades por hora.
Tabela 5 - Descrição dos indicadores da tela de resumo de unidades por hora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 78be1ebe08283d15

Assim como a tela de resumo de unidades por hora. a tela de resumo de caixas por hora disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, a figura descreve o conteúdo dessa tela.
Figura 13 - Tela de resumo de caixas por hora.
Tabela 6 - Descrição dos indicadores da tela de resumo de caixas por hora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** b978c5410df603c1

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. Primeiramente, o usuário A tela pode ser acessado após a seleção de um intervalo de tempo e a figura ilustra seu conteúdo, onde é possível verificar os totais separados para caixas, unidades e endereços.
Tabela 7 - Descrição dos indicadores da tela de resumo de caixas por hora
Figura 14 - Tela de resumo por posto.
Além disso, é possível utilizar os botões Gráfico por desvio e Gráfico por unidade para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas, respectivamente:
Figura 15 - - Tela de resumo por posto: visualização em gráfico de barras de volumes separados.
Figura 16 - Tela de resumo por posto: visualização em gráfico de barras de unidades separadas

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Dashboard  
**Score:** — (nome-topico) | **ID:** 53bca76f4ba108b1

Será necessária uma tela de dashboard para informar ao líder do processo o resultado da operação naquele momento.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** dbd862534c587e85

Relatórios, iremos disponibilizar os relatórios conforme a necessidade do cliente, para isso, cliente deverá analisar quais as informações que precisa ser extraída nos relatórios e informar a invent para que seja desenvolvido.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 08349138278f1f5f

Esta tela busca mostrar o histórico de mensagens enviadas entre o sistema MFC e o sistema do cliente. Primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta e, logo após os resultados serão retornados na tela ilustrada pela figura e descreve os dados retornados.
Figura 8 - Tela de consulta: Mensagens WS x MFC
Tabela 4 - Descrição dos dados mostrados na consulta de WS x MFC
Figura 9 - Tela de histórico de mensagens WS x MFC

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** cadb69dcb5acb57c

O grupo de telas utilitárias tem como objetivo de fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de chão de fábricas, integrações e banco de dados. Por padrão, somente a tela de iniciar serviço MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha como a tela de Iniciar Serviço MFC pode ser utilizada.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Estatísticas  
**Score:** — (semantico) | **ID:** 1b7fb3eac422cfb8

O sistema MFC disponibiliza relatórios estatísticos ao usuário para verificar o comportamento e índices de produção do equipamento. Por exemplo, um técnico do equipamento pode consultar os desvios realizados e perceber que há uma quantidade excessiva de volumes passando por um único ponto. Assim, as Seções abaixo mostram as telas disponibilizadas com essa finalidade.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Resumo de unidades por hora  
**Score:** — (semantico) | **ID:** 09042920d719a00c

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. A figura e descrevem o conteúdo dessa tela.
Figura 12 - Tela de resumo de unidades por hora.
Tabela 5 - Descrição dos indicadores da tela de resumo de unidades por hora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 0f760037b8446325

Assim como a tela de resumo de unidades por hora. a tela de resumo de caixas por hora disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, a figura descreve o conteúdo dessa tela.
Figura 13 - Tela de resumo de caixas por hora.
Tabela 6 - Descrição dos indicadores da tela de resumo de caixas por hora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 8d967f648f94d047

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. Primeiramente, o usuário A tela pode ser acessado após a seleção de um intervalo de tempo e a figura ilustra seu conteúdo, onde é possível verificar os totais separados para caixas, unidades e endereços.
Tabela 7 - Descrição dos indicadores da tela de resumo de caixas por hora
Figura 14 - Tela de resumo por posto.
Além disso, é possível utilizar os botões Gráfico por desvio e Gráfico por unidade para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas, respectivamente:
Figura 15 - - Tela de resumo por posto: visualização em gráfico de barras de volumes separados.
Figura 16 - Tela de resumo por posto: visualização em gráfico de barras de unidades separadas

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Dashboard  
**Score:** — (nome-topico) | **ID:** 21ddd31ebff92a86

Será necessária uma tela de dashboard para informar ao líder do processo o resultado da operação naquele momento.
Dashboard deverá mostrar as informações de:
Quantidades de caixas separadas por estação/hora
Quantidades de unidades separadas por estação/hora
Geral de quantidade de caixas por hora

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Desktop Supervisório  
**Score:** — (semantico) | **ID:** fe86e57621a2f02f

Para realizar o monitoramento dos equipamentos de chão de fábrica, um sistema Supervisório será implantado.
Para visualizar em tempo real todas as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência acionado, erro em inversor de frequência etc.) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS  (licença fornecida pela Invent) onde o mesmo permanecerá instalado em uma estação de  Supervisório, fornecido pelo cliente.
Esse sistema deverá ser executado em um desktop exclusivo e recomenda-se uma tela de tamanho de 32 polegadas ou maior para facilitar a visualização das informações sobre a linha.
A tabela abaixo descreve seus requisitos mínimos de hardware e software:

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 3c672985858db512

Relatórios, iremos disponibilizar os relatórios conforme a necessidade do cliente, para isso, cliente deverá analisar quais as informações que precisa ser  extraída nos relatórios e informar a invent para que seja desenvolvido.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Consultas  
**Score:** — (semantico) | **ID:** 3a0b4b1691359a81

O sistema MFC permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as  telas desse grupo e suas funcionalidades.
O sistema WCS deve possibilitar a consulta e geração de relatório dos pedidos/itens que passaram pelas saídas, possibilitando um check com aquilo  que era esperado (bipado no início da linha)

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 78d4049d1482d471

Esta tela busca mostrar o histórico de mensagens enviadas entre o sistema MFC e o sistema do cliente. Primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta e, logo após os resultados serão retornados na tela ilustrada pela figura e descreve os dados retornados.
Figura 8 - Tela de consulta: Mensagens WS x MFC
Tabela 4 - Descrição dos dados mostrados na consulta de WS x MFC
Figura 9 - Tela de histórico de mensagens WS x MFC

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 5c3eaf1718e9e45a

O grupo de telas utilitárias tem como objetivo de fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de chão de fábricas, integrações e banco de dados. Por padrão, somente a tela de iniciar serviço MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha como a tela de Iniciar Serviço MFC pode ser utilizada.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Estatísticas  
**Score:** — (semantico) | **ID:** 6b7e5f8a524d0376

O sistema MFC disponibiliza relatórios estatísticos ao usuário para verificar o comportamento e índices de produção do equipamento. Por exemplo, um técnico do equipamento pode consultar os desvios realizados e perceber que há uma quantidade excessiva de volumes passando por um único ponto. Assim, as seções abaixo mostram as telas disponibilizadas com essa finalidade.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Resumo de unidades por hora  
**Score:** — (semantico) | **ID:** bbd2124f700b3bbc

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo.
A figura e descrevem o conteúdo dessa tela.
Figura 12 - Tela de resumo de unidades por hora.
Tabela 5 - Descrição dos indicadores da tela de resumo de unidades por hora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** f53b4124fbbb1ff6

Assim como a tela de resumo de unidades por hora. a tela de resumo de caixas  por hora disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, a figura descreve o conteúdo dessa tela.
Figura 13 - Tela de resumo de caixas por hora.
Tabela 6 - Descrição dos indicadores da tela de resumo de caixas por hora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 7364639e50978f71

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. Primeiramente, o usuário A tela pode ser acessado após a seleção de um intervalo de tempo e a figura ilustra seu conteúdo, onde é possível verificar os totais separados para caixas, unidades e endereços.
Tabela 7 - Descrição dos indicadores da tela de resumo de caixas por hora
Figura 14 - Tela de resumo por posto.
Além disso, é possível utilizar os botões Gráfico por desvio e Gráfico por unidade para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas, respectivamente:
Figura 15 - - Tela de resumo por posto: visualização em gráfico de barras de volumes separados.
Figura 16 - Tela de resumo por posto: visualização em gráfico de barras de unidades separadas

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Relatório Histórico da separação do pedido  
**Score:** — (semantico) | **ID:** f538eec6dcc2a9f5

O sistema WCS deve disponibilizar um relatório com as informações do histórico da separação por pedido como:
Número da caixa
Número do pedido
Peso
Dimensões
Produtos separados
Quantidade
Horário e data de separação
Status
Rota
A consulta deverá ser realizada atraves do numero do pedido e no campo status deverá informar se a caixa foi iniciada, em processamento ou finalizada.
Os dados ficarão disponiveis durante o periodo de 30 dias.
Deve conter função para exportar.
Exemplo de tela:

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Dashboard  
**Score:** — (nome-topico) | **ID:** 007cedf53a3d37f3

Será necessária uma tela de dashboard para informar ao líder do processo o resultado da operação naquele momento.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 323e30f2d3e1fdec

Relatórios, iremos disponibilizar os relatórios conforme a necessidade do cliente, para isso, cliente deverá analisar quais as informações que precisa ser extraída nos relatórios e informar a invent para que seja desenvolvido.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 9c4cca42802a2530

Esta tela busca mostrar o histórico de mensagens enviadas entre o sistema MFC e o sistema do cliente. Primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta e, logo após os resultados serão retornados na tela ilustrada pela figura e descreve os dados retornados.
Figura 8 - Tela de consulta: Mensagens WS x MFC
Tabela 4 - Descrição dos dados mostrados na consulta de WS x MFC
Figura 9 - Tela de histórico de mensagens WS x MFC

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 29a99c9cc44ecc6d

O grupo de telas utilitárias tem como objetivo de fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de chão de fábricas, integrações e banco de dados. Por padrão, somente a tela de iniciar serviço MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha como a tela de Iniciar Serviço MFC pode ser utilizada.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Estatísticas  
**Score:** — (semantico) | **ID:** c173ac6e58b449a0

O sistema MFC disponibiliza relatórios estatísticos ao usuário para verificar o comportamento e índices de produção do equipamento. Por exemplo, um técnico do equipamento pode consultar os desvios realizados e perceber que há uma quantidade excessiva de volumes passando por um único ponto. Assim, as Seções abaixo mostram as telas disponibilizadas com essa finalidade.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Resumo de unidades por hora  
**Score:** — (semantico) | **ID:** f295b3b2bad17b5a

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. A figura e descrevem o conteúdo dessa tela.
Figura 12 - Tela de resumo de unidades por hora.
Tabela 5 - Descrição dos indicadores da tela de resumo de unidades por hora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** daa018d0554b3a6d

Assim como a tela de resumo de unidades por hora. a tela de resumo de caixas por hora disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, a figura descreve o conteúdo dessa tela.
Figura 13 - Tela de resumo de caixas por hora.
Tabela 6 - Descrição dos indicadores da tela de resumo de caixas por hora.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** b99cea74123a29b5

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. Primeiramente, o usuário A tela pode ser acessado após a seleção de um intervalo de tempo e a figura ilustra seu conteúdo, onde é possível verificar os totais separados para caixas, unidades e endereços.
Tabela 7 - Descrição dos indicadores da tela de resumo de caixas por hora
Figura 14 - Tela de resumo por posto.
Além disso, é possível utilizar os botões Gráfico por desvio e Gráfico por unidade para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas, respectivamente:
Figura 15 - - Tela de resumo por posto: visualização em gráfico de barras de volumes separados.
Figura 16 - Tela de resumo por posto: visualização em gráfico de barras de unidades separadas

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferênbcia + Relatorio.docx`  
**Heading:** Novo Relatório de Conferência  
**Score:** — (semantico) | **ID:** af0f25376bdc7299

Implementação de novo relatório com os seguintes campos, muitas dessas informações já são utilizadas em relatórios existente:

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Aditivo_Integracao_JSON_REV.1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** b75fde6784251ade

O MFC deve adicionar todos os campos que foram adicionados na integração Envio de Volumes nos relatórios que já existem no projeto e tem como objetivo trazer os dados dos volumes.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Iniciar Serviços  
**Score:** — (semantico) | **ID:** 92e6fea91a2b1f90

A tela de iniciar o serviço do sistema Invent permite a inicialização ou parada do serviço. Neste caso, o serviço é a rotina do sistema responsável por comunicar com os equipamentos de chão de fábrica e entregar com o sistema do cliente. Assim, caso o serviço esteja parado, a tela abaixo será mostrada podendo assim, ser iniciado ou reiniciado.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Relatórios e Dashboard  
**Score:** — (semantico) | **ID:** 16dfa49305c12225

Devemos realizar uma reunião para definirmos quais as melhores informações o cliente necessita para que seja mostrada nos relatórios e em dashboard
Exemplos de relatórios:

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:**  Relatório – Produção por Rampa(saída)  
**Score:** — (semantico) | **ID:** 88c9512cbe6eed88

Nesse relatório, selecionamos um intervalo de data e ele mostra a informação de quantos volumes foram desviados nas respectivas saídas.
Figura 6 - Relatório – Produção por Rampa(saída)

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Relatório – Saída por Rota  
**Score:** — (semantico) | **ID:** bebf2dc1f86bc518

Nesse relatório, selecionamos o mapa/receita que desejamos obter a informação, e ele mostrará a posição de cada rota por saída.
Figura 7 - Relatório – Saída por Rota

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Dashboard  
**Score:** — (nome-topico) | **ID:** 75573db1d4df8562

Na tela de dashboard, é uma tela onde o cliente define o que deseja visualizar de informação na tela, a mesma deve mostrar informações atuais, ou conforme solicitação do cliente.
Figura 8 – Dashboard

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Estação de dashboard  
**Score:** — (semantico) | **ID:** 50033fe79ee8b527

Em cada estação de dashboard, 01 (um) desktop e 01 (uma) TV auxiliarão o operador com os principais recursos necessários para operação (visualização de KPIs de produtividade, índices de rejeito etc.) Caso o televisor seja um monitor IP que tenha a função de acesso a WEB, o desktop pode ser desconsiderado.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 7ad839e063a71067

Para visualizar em tempo real todas as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência acionado, erro em inversor de frequência, etc.) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela Invent) onde o mesmo permanecerá instalado em uma estação de supervisório, fornecido pelo cliente.
Abaixo segue especificação de hardware mínimo para execução do sistema de supervisório INVENT.
Tabela 5 - Requisitos mínimos para estação supervisório

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Iniciar Serviços  
**Score:** — (semantico) | **ID:** 8ad1096b935b038e

A tela de iniciar o serviço do sistema Invent permite a inicialização ou parada do serviço. Neste caso, o serviço é a rotina do sistema responsável por comunicar com os equipamentos de chão de fábrica e entregar com o sistema do cliente. Assim, caso o serviço esteja parado, a tela abaixo será mostrada podendo assim, ser iniciado ou reiniciado.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Relatórios e Dashboard  
**Score:** — (semantico) | **ID:** 76dc3f48b93931d4

Devemos realizar uma reunião para definirmos quais as melhores informações o cliente necessita para que seja mostrada nos relatórios e em dashboard
Exemplos de relatórios:

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:**  Relatório – Produção por Rampa(saída)  
**Score:** — (semantico) | **ID:** b42d42356d61598d

Nesse relatório, selecionamos um intervalo de data e ele mostra a informação de quantos volumes foram desviados nas respectivas saídas.
Figura 6 - Relatório – Produção por Rampa(saída)

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Relatório – Saída por Rota  
**Score:** — (semantico) | **ID:** 90f987a0b3b9ad31

Nesse relatório, selecionamos o mapa/receita que desejamos obter a informação, e ele mostrará a posição de cada rota por saída.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Dashboard  
**Score:** — (nome-topico) | **ID:** b214922e15626f9c

Figura 7 - Relatório – Saída por Rota
Na tela de dashboard, é uma tela onde o cliente define o que deseja visualizar de informação na tela, a mesma deve mostrar informações atuais, ou conforme solicitação do cliente.
Figura 8 - Dashboard

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Estação de dashboard  
**Score:** — (semantico) | **ID:** 7e8be124676751db

Em cada estação de dashboard, 01 (um) desktop e 01 (uma) TV auxiliarão o operador com os principais recursos necessários para operação (visualização de KPIs de produtividade, índices de rejeito etc.) Caso o televisor seja um monitor IP que tenha a função de acesso a WEB, o desktop pode ser desconsiderado.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** a77028d0ae7a6e52

Para visualizar em tempo real todas as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência acionado, erro em inversor de frequência, etc.) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela Invent) onde o mesmo permanecerá instalado em uma estação de supervisório, fornecido pelo cliente.
Abaixo segue especificação de hardware mínimo para execução do sistema de supervisório INVENT.
Tabela 5 - Requisitos mínimos para estação supervisório

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** 8b016d4001ddd263

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** b4baa10754c3c5fe

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** 0e0e6f89f184e260

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 108fb92e6b374fa9

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do MFC podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** 30357d61c1c6cf26

O sistema MFC disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 746f08c2b8fcdd4a

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o MFC apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 6d8caa07e7ad91af

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** 52fb5c17be05f9f3

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** ab0b230b08287820

O sistema MFC permite ao usuário configurar o comportamento do MFC. A figura apresenta a tela Configurações.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** 2f733d80ace5c6eb

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 697aa187843e55cb

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** 8039bd20303ac452

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 5be89b198c7bde7e

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do MFC podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** 10c978aa65ab8ffb

O sistema MFC disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** c6394f7b0c0a2226

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o MFC apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 7dd787b8cf09872c

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** 85e03b1bab6c3ec0

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 9068dac3413cee17

O sistema MFC permite ao usuário configurar o comportamento do MFC. A figura apresenta a tela Configurações.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** 2d845a31312db0aa

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 48b8cf643dba2add

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** 2142193be40c5d03

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 475f63451c86f94f

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do MFC podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** 99b11177b56e9e63

O sistema MFC disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** fcd2614022d65725

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o MFC apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** d717c2039a9ca5c9

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** 39a53963247c6f7c

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 511ef53c6ec987b2

O sistema MFC permite ao usuário configurar o comportamento do MFC. A figura apresenta a tela Configurações.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** bbbe60aebf26a8a6

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** 00100e5e66fa58fd

O sistema WCS permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Mensagens WS x WCS  
**Score:** — (semantico) | **ID:** 1af13302b6ec2048

Esta tela mostra o histórico de mensagens enviadas, entre o sistema WCS e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema WCS.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** fdf3641fc49222be

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** bbb4bbbafd2d16c9

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do WCS é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do WCS podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** 2673c83ba51d2c0e

O sistema WCS disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 95f5a5467263951c

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o WCS apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 8c9df1de5afa4400

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** 740f0b24fc0c0748

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** fd615189fddab674

O sistema WCS permite ao usuário configurar o comportamento do WCS. A figura apresenta a tela Configurações.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** c370231afe7467fd

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 03be1b9e5ca55e77

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** 175bca43e96586db

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 00daa363e391a14f

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do MFC podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** fdff22317837c284

O sistema MFC disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 6b40d67dd6795150

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o MFC apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 7d79e25defab20b0

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** 053a87e30b9c25aa

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 8cb1e4a890f23d4f

O sistema MFC permite ao usuário configurar o comportamento do MFC. A figura apresenta a tela Configurações.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 7ad3c5e50a385728

Para visualizar em tempo real todas as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência acionado, erro em inversor de frequência etc.) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela Invent) onde ele permanecerá instalado em uma estação de supervisório, fornecido pelo cliente.
Abaixo segue especificação de hardware mínimo para execução do sistema de supervisório INVENT.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** 858e51045158719b

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** 9ae6e61ff4ff4d83

O sistema WCS permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Mensagens WS x WCS  
**Score:** — (semantico) | **ID:** 1cee8b7213566ed7

Esta tela mostra o histórico de mensagens enviadas, entre o sistema WCS e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema WCS.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** 678112ff9f9026d6

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 269bc101a4cfa88e

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do WCS é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do WCS podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** b9e8f25442541e8f

O sistema WCS disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 64441837f653693a

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o WCS apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 187b701c56b883e3

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** ff89f6172fbd91cc

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 5b584f3b91dcb0c8

O sistema WCS permite ao usuário configurar o comportamento do WCS. A figura apresenta a tela Configurações.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** 6c664307c06adf48

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 06107f0cad873692

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** aa4a8ebae1f43a9d

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 737e88e18c92cbf9

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do MFC podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** 1d979c0bff37570d

O sistema MFC disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 9b853d036261eee2

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o MFC apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 4178c17f6a04b0cc

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** 2c38a218a3c14625

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** 406601ecc5a661f9

O sistema MFC permite ao usuário configurar o comportamento do MFC. A figura apresenta a tela Configurações.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** ed635fdc2aefb467

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Consulta  
**Score:** — (semantico) | **ID:** 48e66c8f989c28c4

O sistema WCS permite ao usuário realizar consultas de logs e históricos de movimentações no equipamento. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Mensagens WS x WCS  
**Score:** — (semantico) | **ID:** 5a86c9cab96b7fa7

Esta tela mostra o histórico de mensagens enviadas, entre o sistema WCS e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema WCS.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** e8113ed43c2cb5c2

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** af170cab3b6afa4a

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do WCS é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do WCS podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** b0378627803b1672

O sistema WCS disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento. A figura mostra a tela Estatísticas.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Resumo por posto  
**Score:** — (semantico) | **ID:** 63c4008fd20af962

O sistema também disponibiliza a visualização dos totais separados por posto, logo é possível verificar a performance de cada posto e verificar que se há a necessidade de balanceamento de trabalho. A figura apresenta a tela resumo por posto com os seguintes dados:
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Após a pesquisa feita, a tela representada pela figura, pode ser acessada onde é possível verificar os totais separados de caixas, unidades e endereços por postos. Os dados do resultado da pesquisa são:
Número Posto: Número de identificação do posto.
Total Desvio: Total de desvios de caixas ao posto ou volumes produzidos pelo posto.
Total Unidade: Total de unidades produzidas pelo posto.
Total Endereço: Total de acessos a endereços no posto.
Gráficos com as opções Gráfico por desvio e gráfico por unidade: São para verificar os dados do relatório no formato de um gráfico de barras para os volumes e unidades produzidas.
A tela de resumo por posto, também apresenta os botões Gráfico por desvio e Gráfico por unidades. As figuras mostram estes gráficos.
Com o resultado da pesquisa em tela, clicando em qualquer dos postos o WCS apresentará outra tela, apresentada na figura, com os seguintes dados:
Cód.SKU: Código de identificação do produto.
Descrição: Nome/Descrição do produto.
Nº Endereço: Número de identificação correspondente ao endereço.
Total Vol: Total de volumes separados no posto.
Total Unid: Total de unidades separadas no posto.
Esta tela também apresenta os botões Gráfico por desvio e Gráfico por unidades, que são os gráficos referentes ao posto selecionado. As figuras mostram estes gráficos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Resumo de caixas por hora  
**Score:** — (semantico) | **ID:** 3c2ce57dcf717c36

A tela de Resumo de caixas por hora, disponibiliza a informação de caixas integradas e produzidas pelos postos de separação em um determinado intervalo de tempo. Assim, na figura mostra que primeiramente, é necessário selecionar a data inicial e data final para realizar a consulta.
Logo após a realização da pesquisa, os resultados serão retornados na tela, representada na figura, com os seguintes dados:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade Por Hora (Entrada): Quantidade de caixas que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade Por Hora (Saída): Quantidade de caixas separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Resumo de unidade por hora  
**Score:** — (semantico) | **ID:** e5a4e324083c160a

Para verificar a quantidade de unidades produzidas por hora nos postos de separação, a tela de Resumo de unidades por hora pode ser acessada. Assim, é possível observar as quantidades de unidades integradas e produzidas por hora em um determinado intervalo de tempo. Primeiramente precisamos inserir a data para realizar a pesquisa. A figura mostra esta tela.
Após realizar a pesquisa, a figura apresenta os resultados retornados na tela e os dados retornados são:
Data: Data e hora referente ao registro da linha.
Quantidade Unidade por Hora (Entrada): Quantidade de unidades que foram integradas pelo sistema do cliente naquela hora.
Quantidade Unidade por Hora (Saída): Quantidade de unidades separadas pela linha naquela hora.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** d22357490299391d

O sistema WCS permite ao usuário configurar o comportamento do WCS. A figura apresenta a tela Configurações.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Produção  
**Score:** — (semantico) | **ID:** c6e113ba77edfdd1

Após, operador posicionar bandeja no sistema de visão, maquina pollux realiza a inspeção de quantidades e libera o abastecimento, operador realiza o abastecimento com os PODs.
Cada premade deverá possuir uma data de validade impressa, considerando a data de vencimento mais próxima de todas as capsulas separadas, essa definição será realizada pelo sistema da Pollux.
A Pollux deverá gerar o datamatrix/QR code para impressão no premade e gerar a etiqueta de expedição através das informações recebidas pelo MFC.
Caso haja alguma falha de produção, onde as capsulas não possam ser reutilizadas, uma nova separação deverá ser realizada.
Essa separação só poderá ser iniciada a partir do cancelamento do pedido (até 4 premades).
Esse pedido deverá retornar a fila de separação como prioridade.
Esse processo acima, é realizado na maquinox.
Nesse caso, onde as capsulas não possam ser reutilizadas, os pedidos retornam com os possiveis status de erros:
- PRINTED_NOK (quando há erro na impressão/leitura do pacote dentro da máquina da Maquinox)
- PACKAGED_NOK (quando há erro no envaze)
- PRODUCED_NOK (quando há erro na impressão/leitura da caixa, no final da linha)
Os pedidos que obtiverem algum dos retornos acima, terá opção de reintegrar via tela do MFC pedidos com status de erros.
Após a embalagem dos premades e separação em caixas, será colada e verificada uma etiqueta de expedição gerando uma confirmação da produção do sistema Pollux para o sistema MFC, conforme descrito no item 3.6 desse documento.
A equipe da DHL será responsável por realizar o envio manual das caixas da sala Momentos Vênus para a expedição.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Telas do sistema  
**Score:** — (semantico) | **ID:** 67a85dfbac2da37a

(Sugestão de tela – Monitor – TV)
Por exemplo:
Pallet 1 – está aberto com o número de UMA: 458967 e existem 15 volumes alocados nesse pallet, e ainda existem 3 pedidos pendentes de volumes para estarem completos no pallet
Pallet 2 – está aberto com o número de UMA: 589647 e existem 25 volumes alocados nesse pallet, ele está na cor amarela, indicando que o item bipado no momento é para ser alocado no pallet 2, após 5 segundos o mesmo atualiza a cor para verde, aguardando o outro item a ser bipado.
Pallet 3 – está fechado aguardando operador abrir

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Logs de erros  
**Score:** — (semantico) | **ID:** e37e9a0010b7e690

O sistema MFC permite ao usuário realizar consultas de logs de erros ao integrar com a maquina Pollux. Essas informações, ficarão disponiveis no sistema até que seja realizado o processo de limpeza de banco de dados. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** 249b3f3b8c4ca530

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** abb8ab57091423c4

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Produção  
**Score:** — (semantico) | **ID:** 94c89d3edf835fcc

Após, operador posicionar bandeja no sistema de visão, maquina pollux realiza a inspeção de quantidades e libera o abastecimento, operador realiza o abastecimento com os PODs.
Cada premade deverá possuir uma data de validade impressa, considerando a data mais próxima de todas as capsulas separadas, essa definição será realizada pelo sistema da Pollux.
A Pollux deverá gerar o datamatrix/QR code para impressão no premade e gerar a etiqueta de expedição através das informações recebidas pelo MFC.
Caso haja alguma falha de produção, onde as capsulas não possam ser reutilizadas, uma nova separação deverá ser realizada.
Essa separação só poderá ser iniciada a partir do cancelamento do pedido (até 4 premades).
Esse pedido deverá retornar a fila de separação como prioridade.
Nesse caso, onde as capsulas não possam ser reutilizadas, os pedidos retornam com os possiveis status de erros:
- PRINTED_NOK (quando há erro na impressão/leitura do pacote dentro da máquina da Maquinox)
- PACKAGED_NOK (quando há erro no envaze)
- PRODUCED_NOK (quando há erro na impressão/leitura da caixa, no final da linha)
Operador poderá reintegrar via MFC pedidos com status de erros.
Após a embalagem dos premades e separação em caixas, será colada e verificada uma etiqueta de expedição gerando uma confirmação da produção do sistema Pollux para o sistema MFC, conforme descrito no item 3.6 desse documento.
A equipe da DHL será responsável por realizar o envio manual das caixas da sala Momentos Vênus para a expedição.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Telas do sistema  
**Score:** — (semantico) | **ID:** 6de59fc839e811ea

(Sugestão de tela – Monitor – TV)
Por exemplo:
Pallet 1 – está aberto com o número de UMA: 458967 e existem 15 volumes alocados nesse pallet, e ainda existem 3 pedidos pendentes de volumes para estarem completos no pallet
Pallet 2 – está aberto com o número de UMA: 589647 e existem 25 volumes alocados nesse pallet, ele está na cor amarela, indicando que o item bipado no momento é para ser alocado no pallet 2, após 5 segundos o mesmo atualiza a cor para verde, aguardando o outro item a ser bipado.
Pallet 3 – está fechado aguardando operador abrir

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Logs de erros  
**Score:** — (semantico) | **ID:** 0330e34ebaf9abb5

O sistema MFC permite ao usuário realizar consultas de logs de erros ao integrar com a maquina Pollux. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo Consultas. Assim, as próximas Seções descrevem as telas desse grupo e suas funcionalidades. A figura apresenta essa tela.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** f24b0e9c11373352

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** bd6cce27be17f4a9

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Cadastro  
**Score:** — (semantico) | **ID:** 5f00f12589aa09d2

O sistema permite ao usuário inserir, editar e remover cadastros do sistema.
A figura mostra as opções de cadastros no menu lateral.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Mensagens WS x MFC  
**Score:** — (semantico) | **ID:** be1426e4f195c3e7

Esta tela mostra o histórico de mensagens enviadas, entre o sistema MFC e o sistema do cliente. A tela apresentada na figura, tem os seguintes dados:
Tipo: Com quais dados irá ser feita a pesquisa.
Data inicial: Data inicial do período em que será feita a pesquisa.
Data final: Data final do período em que será feita a pesquisa.
Informação: Informação enviada ou recebida para a pesquisa.
Após a solicitação da pesquisa, os resultados serão retornados na tela apresentada na figura, com os seguintes dados:
Código: Número identificador único da mensagem no sistema MFC.
Data Mensagem: Data e hora de geração da mensagem de integração.
Número Volume: Identificador de informação a ser integrada.
Tipo: Tipo de integração (pode variar de acordo com o cliente).
Número Posto: Número identificador do local onde o evento ocorreu.
Enviado: Indica o status de envio da mensagem.
Observações: Observações sobre a linha de registro, se aplicável.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** 3bfa751624c72364

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Utilitários  
**Score:** — (semantico) | **ID:** 5a107319bd8c5fac

O grupo de telas utilitárias tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação, integrações e banco de dados. Por padrão, somente as telas construir banco de dados e iniciar serviço do MFC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema. Assim, a próxima seção detalha as telas construir banco de dados e a Iniciar Serviço do MFC podem ser utilizadas. Tela Utilitário apresentada na figura.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Configurações  
**Score:** — (semantico) | **ID:** f550044305114670

O sistema MFC permite ao usuário configurar o comportamento do MFC. A figura apresenta a tela Configurações.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 40dc66a064abce08

Para visualizar em tempo real as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência pressionado, erro em Inversor de frequência etc.) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela INVENT) onde o mesmo permanecerá instalado em uma Estação de Supervisório, fornecido pelo cliente.
Abaixo segue especificação de hardware mínima para execução do Sistema de Supervisório INVENT:

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Relatórios e telas do sistema  
**Score:** — (semantico) | **ID:** 62e156c30b597fa5

Apresentaremos um documento específico para detalhamento das telas, relatórios e dashboard do sistema MFC, não se limitando apenas aos relatórios padrões que já fazem parte do sistema.
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do Sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Consulta volume integrado  
**Score:** — (semantico) | **ID:** 317f948894ebacd1

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Serviços  
**Score:** — (semantico) | **ID:** ecd8855c6f32ed07

Essa tela tem como objetivo, fornecer ferramentas para manipular a estrutura do software tais como conexões com equipamentos de automação e iniciar serviço do PLC é disponibilizada ao usuário, sendo as outras ferramentas de uso restrito a um técnico especializado no sistema.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Estatística  
**Score:** — (semantico) | **ID:** 8bd10fbfa7dc80f0

O sistema WCS disponibiliza relatórios, Estatísticas ao usuário para verificar o comportamento e índices de produção do equipamento

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Produção por Rampa  
**Score:** — (nome-topico) | **ID:** 4382ded3e8a18ac7

O sistema também disponibiliza a visualização dos totais separados por rampa, logo é possível verificar a performance de cada rampa e verificar se há a necessidade de balanceamento de trabalho.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Resumo de volumes por hora  
**Score:** — (semantico) | **ID:** 375712f0453b2d70

A tela de Resumo de volumes por hora, disponibiliza a informação de caixas integradas e produzidas pelos operadores em um determinado intervalo de tempo.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 7c5312655848cf2f

Relatório de Produção
Relatório de produtividade volumes/hora
Relatório Previsto/Realizado
Produção por Rampa
Produção por Rota
Motivos de Rejeito
Rejeitos Transbordo e coleta
Totais (Por ponto / READ por ponto / NOREAD por ponto)

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Supervisório  
**Score:** — (semantico) | **ID:** ead63fe688d04b42

Para visualizar em tempo real todas as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência acionado, erro em inversor de frequência etc.) Invent fornecerá 1 (um) sistema de supervisão, baseado em software Runtime SIEMENS (licença fornecida pela Invent), onde ele permanecerá instalado em uma estação de supervisório. (Equipamento fornecido pelo cliente)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Consulta de Tipos de Inspeção  
**Score:** — (semantico) | **ID:** 55285d79ecb486ea

Nesta tela o operador lista todos os tipos de inspeções que foram registradas no sistema VELOX.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Dashboards  
**Score:** — (nome-topico) | **ID:** 1c2e1c367ebf6483

As telas de Dashboard servem para que o usuário possa acompanhar algumas atividades que são tratadas no sistema, ao abrir a tela de dashboards o usuário deve selecionar qual deles ele deseja abrir e por qual empresa aérea ele quer filtrar.
OBS: Caso ele deseje ver todas as empresas aéreas basta deixar a opção “Exibir todas as empresas aéreas disponíveis” marcada.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Dashboard Operação  
**Score:** — (semantico) | **ID:** 5b1919b18a29ebee

Este dashboard foi desenvolvido para que o usuário possa acompanhar a situação geral dos voos em atividade.
Cada voo é representado por uma linha contendo 8 (oito) Cards que detalham a situação de cada uma das etapas do voo (Conforme imagem abaixo) que são:
Informações gerais do Voo
AWB solicitado: Informa a quantidade de AWBs esperadas, o total e a porcentagem de AWBs que já deram entrada na operação.
Inspeção/Security: Informa a quantidade de AWBs esperadas, o total e a porcentagem de AWBs que já passaram por inspeção.
Paletização: Informa o total de AWBs esperadas, o total e a porcentagem de AWBs paletizadas, e o total de ULDs abertas.
Amarração-ULDs: Informa o total de AWBs esperadas, o total e a porcentagem de AWBs que já passaram pelo processo de amarração e o total de ULDs que corresponde ao número de AWBs amarradas.
Pesagem-ULDs: Informa o total de AWBs esperadas, o total e a porcentagem de AWBS que já passaram pelo processo de pesagem e o total de ULDs que correspondem ao número de AWBs pesadas.
Ground Handling-ULDs: Informa o total de AWBs esperadas, total e a porcentagem de AWBs que já foram expedidas e o total de ULDs que correspondem ao número de AWBs expedidas.
Resumo do Voo: Informa o total de AWBs, total de ULDs peso total de todas as cargas e o número de cargas rejeitadas.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Relatórios e Telas do Sistema VELOX  
**Score:** — (semantico) | **ID:** 4be37fb29d21bac0

Os relatórios do sistema servem para que os gestores possam visualizar com melhor nível de detalhe, os processos tratados pelo sistema.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Relatório de Atendimento do Voo  
**Score:** — (semantico) | **ID:** 3257ae96c8add8dd

Este relatório serve para que o gestor possa verificar com quantas horas de atraso ou antecedência os voos de uma empresa aérea em um determinado dia ocorreram, tudo o que ele precisa fazer é selecionar a empresa aérea, a data em questão e pesquisar. O sistema então irá carregar as informações que podem ser observadas tanto na lista , quanto no gráfico de barras.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Relatório de Report Geral  
**Score:** — (semantico) | **ID:** 527b51749ab83a07

Este relatório serve para extrair do sistema toda as informações relevantes de produção, desde a criação das listas de puxe até a paletização de cada uma das cargas.
Para extrair o relatório é necessário informar o período de pesquisa (Data Inicial e Data Final) e opcionalmente uma série de filtros que podem ajudar a obter os dados com maior precisão, ao final será gerado um arquivo Excel contendo todas as informações.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 69f80c90a12376e8

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e EMIS MINAS durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da EMIS MINAS.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por família de produto
4- Relatório de conferência
5- Relatório de produtividade por produto geral
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora).
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 99baead03d64ff23

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Grupo Emis Minas durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do Grupo Emis Minas.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por família de produto
4- Relatório de conferência
5- Relatório de produtividade por produto geral
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do Sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.11.docx`  
**Heading:** Máquina de Plastico Bolha  
**Score:** — (semantico) | **ID:** 672dff30738c2876

Quando for finalizada a separação dos produtos de um pedido, os leds da estação acenderão na cor amarela, indicando que não terá mais produtos a serem separados, indicando assim que o operador pode colocar plástico bolha nessa caixa.

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.11.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 6ab7f92d771bc761

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Eurofarma durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Eurofarma.
Segue alguns exemplos de relatórios.
Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por família de produto
4- Relatório de rejeito
5- Relatório de produtividade por produto geral
6- Tela de busca de pedido/pallet
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** DashBoard  
**Score:** — (nome-topico) | **ID:** a9aa509c92866ddf

Segue um exemplo de Dashboard
Iremos somar independente de ser por onda ou por fluxo contínuo.
Legenda:

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 4f5c2fa4004c49aa

Seguem os relatórios que serão disponibilizados a partir da necessidade do cliente:
Resumo de produtividade por hora
Resumo de caixas por hora
Resumo por posto
Gráfico por desvio e por unidade
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 22552e7ee5773b72

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Lojas Pompéia durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade das Lojas Pompéia.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por tipo de produto
4- Relatório de conferência
5- Relatório de produtividade por produto geral
6- Relatório de produtividade por Rampa
7- Relatório de produtos por pallet
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 97aaeebe470c39cd

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Maravilhas do Lar durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Maravilhas do Lar.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por tipo de produto
4- Relatório de conferência
5- Relatório de produtividade por produto geral
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 0678701c47f55fab

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Maravilhas do Lar durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Maravilhas do Lar.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por tipo de produto
4- Relatório de conferência
5- Relatório de produtividade por produto geral
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** bf2f0d5db1c993b3

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Maravilhas do Lar durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Maravilhas do Lar.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por tipo de produto
4- Relatório de conferência
5- Relatório de produtividade por produto geral
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 26fa251bd3294a87

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Maravilhas do Lar durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Maravilhas do Lar.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por tipo de produto
4- Relatório de conferência
5- Relatório de produtividade por operação (sorter contingência)
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 33363786c2bfa3bd

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Maravilhas do Lar durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Maravilhas do Lar.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por tipo de produto
4- Relatório de conferência
5- Relatório de produtividade por operação (sorter contingência)
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Iniciar Serviços  
**Score:** — (semantico) | **ID:** cb3b286555aad68f

A tela de iniciar o serviço do sistema Invent permite a inicialização ou parada do serviço. Neste caso, o serviço é a rotina do sistema responsável por comunicar com os equipamentos de chão de fábrica e entregar com o sistema do cliente. Assim, caso o serviço esteja parado, a tela abaixo será mostrada podendo assim, ser iniciado ou reiniciado.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Relatórios e Dashboard  
**Score:** — (semantico) | **ID:** c238e12fc3d650da

Exemplos de relatórios:
Relatório - Produção por Período
Nesse relatório, selecionamento um intervalo de tempo e ele mostra a informação de quantas caixas foram desviadas com sucesso e quantas seguiram para rejeito.
Figura 5 - Relatório - Produção por Período
Relatório – Produção por Rampa(saída)
Nesse relatório, selecionamos um intervalo de data e ele mostra a informação de quantos volumes foram desviados nas respectivas saídas.
Figura 6 - Relatório – Produção por Rampa(saída)
Relatório – Saída por Rota
Nesse relatório, selecionamos o mapa/receita que desejamos obter a informação, e ele mostrará a posição de cada rota por saída.
Figura 7 - Relatório – Saída por Rota

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Dashboard  
**Score:** — (nome-topico) | **ID:** a05e42c6413b6ca9

Na tela de dashboard, é uma tela onde o cliente define o que deseja visualizar de informação na tela, ela deve mostrar informações atuais, ou conforme solicitação do cliente.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Estação do Supervisório  
**Score:** — (semantico) | **ID:** 3c1c35da9de8b00f

Para visualizar em tempo real todas as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência acionado, erro em inversor de frequência etc.) forneceremos um sistema de Supervisão, baseado em software runtime SIEMENS (licença fornecida pela Invent) onde ele permanecerá instalado em uma estação de supervisório, fornecido pelo cliente.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Requisitos do Sistema  
**Score:** — (semantico) | **ID:** 125eea9375c37a63

Os requisitos do sistema são especificações detalhadas que descrevem as funcionalidades, desempenho e restrições do WCS Velox, garantindo que atendam as necessidades do cliente.
Requisitos de Qualidade: Definem os critérios de desempenho, segurança, usabilidade e confiabilidade que o sistema deve atender para garantir sua eficácia e satisfação do cliente.
Requisitos Funcionais: Descrevem as ações e funcionalidades que o sistema deve executar, como funções de login, processamento de dados, interações com o usuário e demais funcionalidades.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Processos  
**Score:** — (semantico) | **ID:** 6273296a72242afd

Esta seção apresenta os requisitos relacionados aos processos envolvidos na operação do armazém.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF26 – Monitoração de armazém  
**Score:** — (semantico) | **ID:** 8c7b2a9f4db8d5be

No WCS Velox deve ser possivel visualizar o estado corrente de cada célula do armazém de forma gráfica, permitindo assim verificar quais posições estão ocupadas e o que está presente em cada célula.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF27 – Monitoração de missões  
**Score:** — (semantico) | **ID:** c75e02b7898773e1

O WCS Velox deve permitir a visualização das missões dos transelevadores, servindo para rastreamento dos comandos em execução pelos equipamentos.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF28 – Monitoração dos equipamentos  
**Score:** — (semantico) | **ID:** 147cc5f172f7c90a

O WCS Velox deve permitir o acompanhamento da disponibilidade dos equipamentos, monitorando o estado de cada modulo do PLC e exibindo se ele está para ou não e se apresenta erro ou não.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF30 – Monitoramento de mensagens  
**Score:** — (semantico) | **ID:** 63f14a2d26d0455a

No WCS Velox deve ser possivel visualizar as mensagens trocadas entre o WCS Velox e o SAP.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF36 – Estatísticas de ocupação  
**Score:** — (semantico) | **ID:** bed89bfec1480ded

O WCS Velox deve permitir a consulta de estatísticas de ocupação do armazém, o número de locações cheias, vazias e bloqueadas por zona ou por corredor.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF38 – Estatísticas de operação  
**Score:** — (semantico) | **ID:** 73192d2873b62664

O WCS Velox deve permitir a consulta dos dados de operação dos equipamentos exibindo a disponibilidade deles no período escolhido.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF42 – Relatório de portais ociosos  
**Score:** — (semantico) | **ID:** 28467d9bc657fd4b

O WCS Velox deve fornecer um relatório em tela para que operador consiga validar a media de tempo em que o o portal ficou ocioso.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF43 – Relatório de produtividade por portal  
**Score:** — (semantico) | **ID:** 0bd117ae3b2cdbaf

O WCS Velox deve fornecer um relatório em tela para que operador consiga validar a produtividade por portal

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF45 – Relatório de pallets com status “Reservado para entrada”  
**Score:** — (semantico) | **ID:** a1d67bed544d6041

O WCS Velox deve fornecer um relatório em tela para que operador consiga validar a quantidade de pallets com status “Reservado para entrada”.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF46 – Relatório de armazenagem x data de produção  
**Score:** — (semantico) | **ID:** 84f5a3e3bfe0c120

O WCS Velox deve fornecer um relatório em tela para que o operador consiga validar a quantidade de pallets armazenados e informar a data de produção (Informação recebida do SAP via integração).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Processos disparados pelos equipamentos  
**Score:** — (semantico) | **ID:** e5c186aeb9f50181

Descreve processos disparados pelos equipamentos. Estes processos, também denominados de processamento de ações, descrevem as decisões tomadas pelo WCS Velox a partir dos eventos notificados pelos equipamentos do armazém.
Observação: No texto, citam-se os termos ‘entrada pela fábrica’ e ‘entrada por transferência ou devolução’, significando respectivamente, entradas pelo nível superior e inferior do armazém.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Ocupação do armazém  
**Score:** — (nome-topico) | **ID:** 7a27abde74b65761

Essa funcionalidade permite ver o estado corrente de cada locação do armazém de forma gráfica, permitindo assim verificar quais posições estão ocupadas e o que está presente em cada locação.
O botão “Bloquear” exibe a tela abaixo, permitindo inserir o motivo pelo qual deseja bloquear a posição.
Nota: Os motivos deverão ser consultados na tela de log de transações do sistema. P motivo não será mostrado na tela de ocupação
O botão “Detalhes” mostra os detalhes da ocupação de uma dada posição, poderão ser verificados ao selecionar a célula e clicar no botão “Detalhes”.
Na tela que abrir, deve permitir bloquear ou desbloquear a locação, além de possibilitar a alteração para outros possíveis estados, na opção “Alterar Estado”.
Assim como a função bloquear, ao ser acionada deve abrir a tela de solicitando o motivo.
Ao clicar no botão “Alterar estado” deve abrir uma tela com os possíveis estados da localização serão exibidos na opção “Legenda”.
As imagens com o símbolo “A bloquear” (ilustrado no ícone da imagem acima) indicam que as posições serão bloqueadas quando o pallet deixar a célula.
Os possíveis estados bloqueados serão:

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Estatística de ocupação  
**Score:** — (semantico) | **ID:** d84509ec1749fea5

Essa funcionalidade permite analisar a ocupação do armazém, além de ter um atalho para o relatório de ocupação.
A partir dos filtros presentes na imagem acima, é possivel analisar a ocupação das áreas ou dos corredores que apresenta o total de locações vazias e ocupadas para cada zona ou corredor.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Relatório de ocupação  
**Score:** — (semantico) | **ID:** cb08e3f9eba07522

O relatório de ocupação pode ser emitido pela funcionalidade Estatística de Ocupação.
A imagem abaixo se refere à emissão pela funcionalidade de Estatística de Ocupação, detalhada anteriormente. Os dados apresentados no relatório são os mesmos da tela.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Relatórios estatísticos  
**Score:** — (semantico) | **ID:** a7827aa0054bd202

O WCS Velox registra alguns dados durante sua operação para permitir a análise estatística do comportamento do armazém sobre diferentes perspectivas, descritas a seguir.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Estatística de movimentos  
**Score:** — (semantico) | **ID:** cfd98617bfd2c677

É possível analisar quantos pallets entraram e saíram em cada transportador do armazém, como mostrado na imagem abaixo.
O sistema WCS Velox deve possibilitar refinar a busca para registros em um determinado período, como mostrado na imagem acima, caso não sejam especificadas datas de início e fim, todos os registros encontrados serão considerados.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Estatística de downtime  
**Score:** — (semantico) | **ID:** 7b86e891e93e4dd1

Essa funcionalidade permite verificar a disponibilidade de cada equipamento, no período especificado.
As informações da imagem acima, podem ser refinados para os seguintes grupos de equipamentos:
Portais
Corredores
Saídas
Transportadores

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Monitoramento  
**Score:** — (semantico) | **ID:** 6065373dd2e26b03

O menu de Monitoramento, localizado no sistema WCS Velox, permite visualizar as mensagens trocadas entre o WCS e o SAP, além das principais transações do sistema, como detalhado a seguir.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Monitoramento de mensagens  
**Score:** — (semantico) | **ID:** 9946c3e839e416f3

Através dessa funcionalidade é possivel visualiza as mensagens trocadas entre o SAP e o WCS, como mostrado na imagem abaixo.
A opção “Remover” exclui a mensagem dos registros do WCS e a opção “Reprocessar” altera seu status para “Pendente”, permitindo que o sistema a reprocesse.
A imagem acima mostra que é possível refinar a busca pelos seguintes filtros:
Período de Recebimento
Status
Direção (SAP-> WCS ou WCS -> SAP)
Tipo
Campos (dados dos campos da mensagem)

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Cadastro de equipamentos  
**Score:** — (semantico) | **ID:** 9550676aa9f9ff80

Conforme o modelo definido para a estrutura de equipamentos, os equipamentos podem ser cadastrados no sistema como sendo transportadores ou transelevadores. Este cadastro é realizado diretamente no sistema através das telas de Cadastro de Equipamentos no WCS.
Toda vez que o servidor WCS é iniciado, ele consulta as tabelas de cadastro de equipamentos do sistema, montando em memória a lista de todos os equipamentos disponíveis no armazém e cadastrados no sistema.
Para o correto funcionamento da interface com eles, deverá ser criado para cada equipamento um arquivo de configuração XML que mapeia as ações e TAGs aplicáveis ao equipamento cadastro. Este arquivo de configuração deverá ser armazenado no servidor de aplicações do WCS, em diretório próprio para os arquivos de configurações de equipamentos.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Heart beat  
**Score:** — (semantico) | **ID:** c3c046723fec15c6

O Heart Beat é o mecanismo responsável por garantir o monitoramento da comunicação entre o WCS e os equipamentos do armazém. Tal mecanismo se baseia no conceito de WatchDog, no qual cada um dos sistemas comunicantes escreve valores em variáveis compartilhadas para notificar a existência da comunicação.
Como ilustrado na imagem abaixo, caso algum dos sistemas não realize a escrita em um tempo pré-determinado, o outro sistema considera que a comunicação foi perdida, realizando os tratamentos necessários quando uma perda de comunicação é detectada.
Para a garantia da comunicação entre o WCS e os PLCs, o WCS deverá registrar o valor 0 (zero) nos tags PULSO_WCS_CLP_INF e PULSO_WCS_CLP_SUP, e deverá aguardar que os PLCs registrem o valor 1 (um).
Caso algum dos PLCs não registre o valor num intervalo de 5 segundos, o WCS deverá gerar um registro de erro em log transacional, visível através das estações clientes, notificando a perda de comunicação.
No caso dos PLCs detectarem a falta de comunicação com o WCS, os mesmos irão paralisar os transelevadores, registrando os valores para o alarme STATUS_ALARME_REC = 63 e status STATUS_REC = 99.
Nota: Toda a lógica de comunicação entre o WCS e os PLCs se dá através da ferramenta OPC Server RSLinx. Devido à incapacidade da ferramenta de restabelecer a conexão com um PLC caso tenha-se perdido a comunicação com o mesmo (problema conhecido pelo fabricante), é necessário reiniciar o RSLinx Server, garantindo que a comunicação com os PLCs seja restabelecida.
Tal falha de comunicação independe do WCS, porque é uma limitação da ferramenta definida para o projeto. O WCS garante a comunicação com os PLCs desde que a ferramenta garanta a comunicação com os mesmos.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Requisitos do Sistema  
**Score:** — (semantico) | **ID:** 97693bf1ba7c7f72

Os requisitos do sistema são especificações detalhadas que descrevem as funcionalidades, desempenho e restrições do WCS Velox, garantindo que atendam as necessidades do cliente.
Requisitos de Qualidade: Definem os critérios de desempenho, segurança, usabilidade e confiabilidade que o sistema deve atender para garantir sua eficácia e satisfação do cliente.
Requisitos Funcionais: Descrevem as ações e funcionalidades que o sistema deve executar, como funções de login, processamento de dados, interações com o usuário e demais funcionalidades.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Processos  
**Score:** — (semantico) | **ID:** b79b7ef633391a4d

Esta seção apresenta os requisitos relacionados aos processos envolvidos na operação do armazém.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF26 – Monitoração de armazém  
**Score:** — (semantico) | **ID:** 8f5178a332f1a314

No WCS Velox deve ser possivel visualizar o estado corrente de cada célula do armazém de forma gráfica, permitindo assim verificar quais posições estão ocupadas e o que está presente em cada célula.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF27 – Monitoração de missões  
**Score:** — (semantico) | **ID:** 65e6e952ae07e9db

O WCS Velox deve permitir a visualização das missões dos transelevadores, servindo para rastreamento dos comandos em execução pelos equipamentos.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF28 – Monitoração dos equipamentos  
**Score:** — (semantico) | **ID:** fbcdf3c226f81a2f

O WCS Velox deve permitir o acompanhamento da disponibilidade dos equipamentos, monitorando o estado de cada modulo do PLC e exibindo se ele está para ou não e se apresenta erro ou não.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF30 – Monitoramento de mensagens  
**Score:** — (semantico) | **ID:** c6eece95ee012d82

No WCS Velox deve ser possivel visualizar as mensagens trocadas entre o WCS Velox e o SAP.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF36 – Estatísticas de ocupação  
**Score:** — (semantico) | **ID:** b9d7e946681bc36c

O WCS Velox deve permitir a consulta de estatísticas de ocupação do armazém, o número de locações cheias, vazias e bloqueadas por zona ou por corredor.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF38 – Estatísticas de operação  
**Score:** — (semantico) | **ID:** 4f0557eb9151597c

O WCS Velox deve permitir a consulta dos dados de operação dos equipamentos exibindo a disponibilidade deles no período escolhido.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF42 – Relatório de portais ociosos  
**Score:** — (semantico) | **ID:** 198c234535615470

O WCS Velox deve fornecer um relatório em tela para que operador consiga validar a media de tempo em que o o portal ficou ocioso.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF43 – Relatório de produtividade por portal  
**Score:** — (semantico) | **ID:** 349ba23256e2e227

O WCS Velox deve fornecer um relatório em tela para que operador consiga validar a produtividade por portal

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF45 – Relatório de pallets com status “Reservado para entrada”  
**Score:** — (semantico) | **ID:** d6c0adbc5d68fe1b

O WCS Velox deve fornecer um relatório em tela para que operador consiga validar a quantidade de pallets com status “Reservado para entrada”.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF46 – Relatório de armazenagem x data de produção  
**Score:** — (semantico) | **ID:** ccbec23744a6db84

O WCS Velox deve fornecer um relatório em tela para que o operador consiga validar a quantidade de pallets armazenados e informar a data de produção (Informação recebida do SAP via integração).

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Processos disparados pelos equipamentos  
**Score:** — (semantico) | **ID:** fd86337894ddfb62

Descreve processos disparados pelos equipamentos. Estes processos, também denominados de processamento de ações, descrevem as decisões tomadas pelo WCS Velox a partir dos eventos notificados pelos equipamentos do armazém.
Observação: No texto, citam-se os termos ‘entrada pela fábrica’ e ‘entrada por transferência ou devolução’, significando respectivamente, entradas pelo nível superior e inferior do armazém.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Ocupação do armazém  
**Score:** — (nome-topico) | **ID:** 32ac655b0ca5e175

Essa funcionalidade permite ver o estado corrente de cada locação do armazém de forma gráfica, permitindo assim verificar quais posições estão ocupadas e o que está presente em cada locação.
O botão “Bloquear” exibe a tela abaixo, permitindo inserir o motivo pelo qual deseja bloquear a posição.
Nota: Os motivos deverão ser consultados na tela de log de transações do sistema. P motivo não será mostrado na tela de ocupação
O botão “Detalhes” mostra os detalhes da ocupação de uma dada posição, poderão ser verificados ao selecionar a célula e clicar no botão “Detalhes”.
Na tela que abrir, deve permitir bloquear ou desbloquear a locação, além de possibilitar a alteração para outros possíveis estados, na opção “Alterar Estado”.
Assim como a função bloquear, ao ser acionada deve abrir a tela de solicitando o motivo.
Ao clicar no botão “Alterar estado” deve abrir uma tela com os possíveis estados da localização serão exibidos na opção “Legenda”.
As imagens com o símbolo “A bloquear” (ilustrado no ícone da imagem acima) indicam que as posições serão bloqueadas quando o pallet deixar a célula.
Os possíveis estados bloqueados serão:

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Estatística de ocupação  
**Score:** — (semantico) | **ID:** fbd84c0790e5323e

Essa funcionalidade permite analisar a ocupação do armazém, além de ter um atalho para o relatório de ocupação.
A partir dos filtros presentes na imagem acima, é possivel analisar a ocupação das áreas ou dos corredores que apresenta o total de locações vazias e ocupadas para cada zona ou corredor.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Relatório de ocupação  
**Score:** — (semantico) | **ID:** 118a8716ab400caa

O relatório de ocupação pode ser emitido pela funcionalidade Estatística de Ocupação.
A imagem abaixo se refere à emissão pela funcionalidade de Estatística de Ocupação, detalhada anteriormente. Os dados apresentados no relatório são os mesmos da tela.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Relatórios estatísticos  
**Score:** — (semantico) | **ID:** 46d4374dbfdb7183

O WCS Velox registra alguns dados durante sua operação para permitir a análise estatística do comportamento do armazém sobre diferentes perspectivas, descritas a seguir.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Estatística de movimentos  
**Score:** — (semantico) | **ID:** 65eda1033b126d45

É possível analisar quantos pallets entraram e saíram em cada transportador do armazém, como mostrado na imagem abaixo.
O sistema WCS Velox deve possibilitar refinar a busca para registros em um determinado período, como mostrado na imagem acima, caso não sejam especificadas datas de início e fim, todos os registros encontrados serão considerados.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Estatística de downtime  
**Score:** — (semantico) | **ID:** 003cbd2a393f4e5f

Essa funcionalidade permite verificar a disponibilidade de cada equipamento, no período especificado.
As informações da imagem acima, podem ser refinados para os seguintes grupos de equipamentos:
Portais
Corredores
Saídas
Transportadores

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Monitoramento  
**Score:** — (semantico) | **ID:** 67f10f43f5b1e575

O menu de Monitoramento, localizado no sistema WCS Velox, permite visualizar as mensagens trocadas entre o WCS e o SAP, além das principais transações do sistema, como detalhado a seguir.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Monitoramento de mensagens  
**Score:** — (semantico) | **ID:** 8befc4035032eade

Através dessa funcionalidade é possivel visualiza as mensagens trocadas entre o SAP e o WCS, como mostrado na imagem abaixo.
A opção “Remover” exclui a mensagem dos registros do WCS e a opção “Reprocessar” altera seu status para “Pendente”, permitindo que o sistema a reprocesse.
A imagem acima mostra que é possível refinar a busca pelos seguintes filtros:
Período de Recebimento
Status
Direção (SAP-> WCS ou WCS -> SAP)
Tipo
Campos (dados dos campos da mensagem)

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Cadastro de equipamentos  
**Score:** — (semantico) | **ID:** 088c4361f1eefd64

Conforme o modelo definido para a estrutura de equipamentos, os equipamentos podem ser cadastrados no sistema como sendo transportadores ou transelevadores. Este cadastro é realizado diretamente no sistema através das telas de Cadastro de Equipamentos no WCS.
Toda vez que o servidor WCS é iniciado, ele consulta as tabelas de cadastro de equipamentos do sistema, montando em memória a lista de todos os equipamentos disponíveis no armazém e cadastrados no sistema.
Para o correto funcionamento da interface com eles, deverá ser criado para cada equipamento um arquivo de configuração XML que mapeia as ações e TAGs aplicáveis ao equipamento cadastro. Este arquivo de configuração deverá ser armazenado no servidor de aplicações do WCS, em diretório próprio para os arquivos de configurações de equipamentos.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Heart beat  
**Score:** — (semantico) | **ID:** a2968e26b1a18a60

O Heart Beat é o mecanismo responsável por garantir o monitoramento da comunicação entre o WCS e os equipamentos do armazém. Tal mecanismo se baseia no conceito de WatchDog, no qual cada um dos sistemas comunicantes escreve valores em variáveis compartilhadas para notificar a existência da comunicação.
Como ilustrado na imagem abaixo, caso algum dos sistemas não realize a escrita em um tempo pré-determinado, o outro sistema considera que a comunicação foi perdida, realizando os tratamentos necessários quando uma perda de comunicação é detectada.
Para a garantia da comunicação entre o WCS e os PLCs, o WCS deverá registrar o valor 0 (zero) nos tags PULSO_WCS_CLP_INF e PULSO_WCS_CLP_SUP, e deverá aguardar que os PLCs registrem o valor 1 (um).
Caso algum dos PLCs não registre o valor num intervalo de 5 segundos, o WCS deverá gerar um registro de erro em log transacional, visível através das estações clientes, notificando a perda de comunicação.
No caso dos PLCs detectarem a falta de comunicação com o WCS, os mesmos irão paralisar os transelevadores, registrando os valores para o alarme STATUS_ALARME_REC = 63 e status STATUS_REC = 99.
Nota: Toda a lógica de comunicação entre o WCS e os PLCs se dá através da ferramenta OPC Server RSLinx. Devido à incapacidade da ferramenta de restabelecer a conexão com um PLC caso tenha-se perdido a comunicação com o mesmo (problema conhecido pelo fabricante), é necessário reiniciar o RSLinx Server, garantindo que a comunicação com os PLCs seja restabelecida.
Tal falha de comunicação independe do WCS, porque é uma limitação da ferramenta definida para o projeto. O WCS garante a comunicação com os PLCs desde que a ferramenta garanta a comunicação com os mesmos.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 30096b0b4cb3cc37

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e FlorArte durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da operação.
Segue alguns exemplos de relatórios:
Relatório de produtividade por Picking Cart;
Relatório de produtividade por operador PLT;
Relatório de produtividade da Conferência;
Relatório de rejeito;
Relatório de Caixas Utilizadas
Relatório de Separação/ShortPicking(Corte)

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 0244d53313ad9292

As telas de relatório precisarão ser discutidas e alinhadas entre Invet e Dana durante a fase de implementação para a definição de quais informações são relevantes serem disponibilizadas em relatórios conforme necessidade Dana.
Segue sugestões de relatórios:
Relatório de produtividade por  posto
Relatório de produtividade por item
Relatório de conferência
Relatório de consumo de tipos de caixas

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** a64e4ebf0998defb

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e FlorArte durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da operação.
Segue alguns exemplos de relatórios:
Relatório de produtividade por Picking Cart;
Relatório de produtividade por operador PLT;
Relatório de produtividade da Conferência;
Relatório de rejeito;
Relatório de Caixas Utilizadas
Relatório de Separação/ShortPicking(Corte)

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 9c022e7bfb6af52e

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e FlorArte durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da operação.
Segue alguns exemplos de relatórios:
Relatório de produtividade por Picking Cart;
Relatório de produtividade por operador PLT;
Relatório de produtividade da Conferência;
Relatório de rejeito;
Relatório de Caixas Utilizadas
Relatório de Separação/ShortPicking(Corte)

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 5595de43aeae31af

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e TPC/SIEMENS durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da TPC/SIEMENS.
Segue alguns exemplos de relatórios.
Relatório de produtividade por rampa
2- Relatório de produtividade por operador PTL
3- Relatório de produtividade por nível
4- Relatório de rejeito
•	O sistema Invent permitirá que os relatórios sejam exportados via integração e também será possível exportar para uma planilha em Excel.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** ba7cde153d1be21d

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e TPC/SIEMENS durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da TPC/SIEMENS.
Segue alguns exemplos de relatórios.
Relatório de produtividade por rampa
2- Relatório de produtividade por operador PTL
3- Relatório de produtividade por nível
4- Relatório de rejeito
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I23] 2023 — `I23-1604 - PROJETO CARDEX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Relatórios e telas do sistema  
**Score:** — (semantico) | **ID:** c89590188bec9b59

Os relatórios do sistema servirão para o cliente realizar a gestão da automação, visto que poderá acompanhar a produtividade das leituras e conferência.
Isso proporcionará ao cliente uma visão abrangente do desempenho da operação e automação, permitindo tomar decisões assertivas, assim otimizando de uma forma eficaz seus processos.
Relatórios do sistema:
Geral de conferência;
Produtividade por pedido;
Produtividade por período;
Produtividade por caixa plástica;

---
**Origem:** [I23] 2023 — `I23.1604 - ESPECIFICACAO DE SOFTWARE - PROJETO CARDEX 2024.docx`  
**Heading:** Relatórios e telas do sistema  
**Score:** — (semantico) | **ID:** 086ef78e1d1a6164

Os relatórios do sistema servirão para o cliente realizar a gestão da automação, visto que poderá acompanhar a produtividade das leituras e conferência.
Isso proporcionará ao cliente uma visão abrangente do desempenho da operação e automação, permitindo tomar decisões assertivas, assim otimizando de uma forma eficaz seus processos.
Relatórios do sistema:
Geral de conferência;
Produtividade por pedido;
Produtividade por período;
Produtividade por caixa plástica;

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 2df8e48a74b5b3b1

Os relatórios do sistema servirão para o cliente realizar a gestão da operação, visto que poderá acompanhar a produtividade operacional, tanto do operador quanto da automação.
Isso proporcionará ao cliente uma visão abrangente do desempenho da operação, permitindo tomar decisões assertivas, assim otimizando de uma forma eficaz seus processos.
Relatórios do sistema:
Produtividade por estação
Produtividade por produto
Consumo do tipo de caixa

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 88f8933aec3b2ecd

Os relatórios do sistema servirão para o cliente realizar a gestão da operação, visto que poderá acompanhar a produtividade operacional, tanto do operador quanto da automação.
Isso proporcionará ao cliente uma visão abrangente do desempenho da operação, permitindo tomar decisões assertivas, assim otimizando de uma forma eficaz seus processos.
Relatórios do sistema:
Produtividade por estação
Produtividade por produto
Consumo do tipo de caixa
Relatório da produção, comparando a quantidade de pedidos integrados, quantidade de pedidos separados e quantidades pendentes de separação.
Relatório de produção, comparando os tipos de separação, controlados, não controlados e full case.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** a4fe490139d730f7

Os relatórios do sistema servirão para o cliente realizar a gestão da operação, visto que poderá acompanhar a produtividade operacional, tanto do operador quanto da automação.
Isso proporcionará ao cliente uma visão abrangente do desempenho da operação, permitindo tomar decisões assertivas, assim otimizando de uma forma eficaz seus processos.
Relatórios do sistema:
Produtividade por estação
Produtividade por produto
Consumo do tipo de caixa
Relatório da produção, comparando a quantidade de pedidos integrados, quantidade de pedidos separados e quantidades pendentes de separação.
Relatório de produção, comparando os tipos de separação, controlados, não controlados e full case.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 6.29  
**Score:** — (semantico) | **ID:** 67662f24d4a32fdf

O sistema Velox, deve possuir na tela de Log de evento (Audit trail), onde sejam registradas as ações de criação, alteração e exclusão de registros eletrônicos, de acordo com os pontos detalhados no item anterior (11.7   6.27).
Referência: 21 CFR Part 11 – 11.10 (e)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 33be8556cd691a92

Os relatórios do sistema servirão para o cliente realizar a gestão da operação, visto que poderá acompanhar a produtividade operacional, tanto do operador quanto da automação.
Isso proporcionará ao cliente uma visão abrangente do desempenho da operação, permitindo tomar decisões assertivas, assim otimizando de uma forma eficaz seus processos.
Relatórios do sistema:
Produtividade por estação
Produtividade por produto
Consumo do tipo de caixa
Relatório da produção, comparando a quantidade de pedidos integrados, quantidade de pedidos separados e quantidades pendentes de separação.
Relatório de produção, comparando os tipos de separação, controlados, não controlados e full case.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 6.29  
**Score:** — (semantico) | **ID:** 6918a5763b974a3f

O sistema Velox, deve possuir na tela de Log de evento (Audit trail), onde sejam registradas as ações de criação, alteração e exclusão de registros eletrônicos, de acordo com os pontos detalhados no item anterior (11.7   6.27).
Referência: 21 CFR Part 11 – 11.10 (e)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** ff97b4a6543ad137

Os relatórios do sistema servirão para o cliente realizar a gestão da operação, visto que poderá acompanhar a produtividade operacional, tanto do operador quanto da automação.
Isso proporcionará ao cliente uma visão abrangente do desempenho da operação, permitindo tomar decisões assertivas, assim otimizando de uma forma eficaz seus processos.
Relatórios do sistema:
Produtividade por estação
Produtividade por produto
Consumo do tipo de caixa

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 1d01793cfddd7235

Os relatórios do sistema servirão para o cliente realizar a gestão da operação, visto que poderá acompanhar a produtividade operacional, tanto do operador quanto da automação.
Isso proporcionará ao cliente uma visão abrangente do desempenho da operação, permitindo tomar decisões assertivas, assim otimizando de uma forma eficaz seus processos.
Relatórios do sistema:
Produtividade por estação
Produtividade por produto
Consumo do tipo de caixa
Relatório da produção, comparando a quantidade de pedidos integrados, quantidade de pedidos separados e quantidades pendentes de separação.
Relatório de produção, comparando os tipos de separação, controlados, não controlados e full case.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** ef5dd810b93f0bd0

Serão instalados dois níveis de esteiras com sistema de sorter. Cada nível terá capacidade para processar 4 mil caixas por hora, resultando em um fluxo total de 8 mil caixas por hora.
Etiquetagem será de total responsabilidade do cliente.
Os volumes serão classificados em três categorias: caixas de papelão, caixas plásticas e pacotes. Os produtos contidos dentro dessas embalagens serão variados.
Cada nível possui um pré-HPD, para assim redirecionar o volume.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 0e08bfa3b51a217b

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Shein durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por Período
2- Relatório de produtividade por Rampa (Saída)
3- Relatório de saída por Rota (Mostrando a posição de cada rota por saída)
4- Relatório de Pedidos
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** 36c64cbda808728f

Serão instalados dois níveis de esteiras com sistema de sorter. Cada nível terá capacidade para processar 4 mil caixas por hora, resultando em um fluxo total de 8 mil caixas por hora.
Etiquetagem será de total responsabilidade do cliente.
Os volumes serão classificados em três categorias: caixas de papelão, caixas plásticas e pacotes. Os produtos contidos dentro dessas embalagens serão variados.
Cada nível possui um pré-HPD, para assim redirecionar o volume.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 086b7fc7a979d752

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Shein durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por Período
2- Relatório de produtividade por Rampa (Saída)
3- Relatório de saída por Rota (Mostrando a posição de cada rota por saída)
4- Relatório de Pedidos
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** eecffd5d658b3704

Serão instalados dois níveis de esteiras com sistema de sorter. Cada nível terá capacidade para processar 4 mil caixas por hora, resultando em um fluxo total de 8 mil caixas por hora.
Etiquetagem será de total responsabilidade do cliente.
Os volumes serão classificados em três categorias: caixas de papelão, caixas plásticas e pacotes. Os produtos contidos dentro dessas embalagens serão variados.
Cada nível possui um pré-HPD, para assim redirecionar o volume.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 63de21d17577179b

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Shein durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por Período
2- Relatório de produtividade por Rampa (Saída)
3- Relatório de saída por Rota (Mostrando a posição de cada rota por saída)
4- Relatório de Pedidos
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** ee9bea65b9f2ccef

Serão instalados dois níveis de esteiras com sistema de sorter. Cada nível terá capacidade para processar 4 mil caixas por hora, resultando em um fluxo total de 8 mil caixas por hora.
Etiquetagem será de total responsabilidade do cliente.
Os volumes serão classificados em três categorias: caixas de papelão, caixas plásticas e pacotes. Os produtos contidos dentro dessas embalagens serão variados.
Cada nível possui um pré-HPD, para assim direcionar o volume para o lado correto do local de desvio, facilitando assim o desvio correto do volume.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 54643d488c5df107

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Shein durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por Período
2- Relatório de produtividade por Rampa (Saída)
3- Relatório de saída por Rota (Mostrando a posição de cada rota por saída)
4- Relatório de Pedidos
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Relatorios e Telas do sistema  
**Score:** — (semantico) | **ID:** a6224d13fb9768eb

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e TPC/SIEMENS durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da TPC/SIEMENS.
Segue alguns exemplos de relatórios.
Relatório de produtividade por rampa
2- Relatório de produtividade por operador PTL
3- Relatório de produtividade por nível
4- Relatório de rejeito

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 7193968e2405541d

As telas de relatório precisarão ser discutidas e alinhadas entre Invet e Dana durante a fase de implementação para a definição de quais informações são relevantes serem disponibilizadas em relatórios conforme necessidade Dana.
Segue sugestões de relatórios:
Relatório de produtividade por  posto
Relatório de produtividade por item
Relatório de conferência
Relatório de consumo de tipos de caixas

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1[1].docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 63ae4452bd1d9d67

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e DellaVolpe durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da DellaVolpe.
Segue alguns exemplos de relatórios.
Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por família de produto
4- Relatório de rejeito
5- Relatório de produtividade por produto geral
6- Tela de busca de pedido/pallet
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** c51ad00ddbe72cd2

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e DellaVolpe durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da DellaVolpe.
Segue alguns exemplos de relatórios.
Mensagens PLC x MFC
Mensagens LED x MFC
Mensagens WS x MFC
Consultar Sacas
Consultar Log
Consultar Log Leitora
Produtividade Automação
Peso Estimado VS Peso Real
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 08bcb81b2be0b9a7

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Master/Invent durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Master/Invent.
Segue alguns exemplos de relatórios.
Relatório de produtividade por rampa
2- Relatório de produtividade por operador PTL
3- Relatório de produtividade por posto
4- Relatório de rejeito

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Relatórios e Telas do Sistema  
**Score:** — (semantico) | **ID:** 618fb0aa8dffaf98

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Master/Invent durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Master/Invent.
Segue alguns exemplos de relatórios.
Relatório de produtividade por rampa
2- Relatório de produtividade por operador PTL
3- Relatório de produtividade por posto
As telas de relatório do sistema serão desenvolvidas conforme as necessidades identificadas em conjunto com a equipe do cliente Master Higimed, durante a fase de implantação do projeto. O objetivo é que os relatórios ofereçam informações relevantes para o acompanhamento da produtividade, controle operacional e apoio à tomada de decisões.
Entre os relatórios previstos/sugeridos estão:
Relatório de produtividade por rampa.
Relatório de produtividade por operador de PTL.
Relatório de produtividade por posto de separação e rejeitos ocorridos no sorter.
Esses relatórios estarão disponíveis em formato digital e poderão ser acessados diretamente pelas estações de trabalho autorizadas, garantindo visibilidade e rastreabilidade em tempo real de toda a operação.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** a2407ce821ea55fe

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Master/Invent durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Master/Invent.
Segue alguns exemplos de relatórios.
Relatório de produtividade por rampa
2- Relatório de produtividade por operador PTL
3- Relatório de produtividade por posto
4- Relatório de rejeito

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Validações de Integridade  
**Score:** — (semantico) | **ID:** 694b96fe6d3ef21e

Durante a alocação, o WCS executa automaticamente:
Verificação de rota e transportadora.
Garantia de que o volume está sendo colocado no pallet correto.
Volumes que não atenderem às regras serão bloqueados para tratativa operacional.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 26db83a758ac9416

As telas de relatórios deverão ser definidas em conjunto pela Invent e o time Britânia durante a fase de implementação. O objetivo é alinhar os requisitos e determinar quais dados serão exibidos, de acordo com as necessidades do cliente.
Exemplos de Relatórios
Produtividade por Rampa
Apresenta a quantidade de volumes processados em cada rampa.
Produtividade por Operador (PTL)
Exibe a performance individual de cada operador utilizando o sistema PTL.
Produtividade do Sorter
Fornece uma visão geral do desempenho do sorter, incluindo volumes processados e tempo de operação.
Relatório de Rejeitos
Detalha os volumes rejeitados, indicando causas e frequência.
Relatório de Read e NoRead
Mostra o número de leituras bem-sucedidas (Read) e falhas (NoRead) realizadas pelo portal de leitura.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Validações de Integridade  
**Score:** — (semantico) | **ID:** df27a24c04d16110

Durante a alocação, o WCS executa automaticamente:
Verificação de rota e transportadora.
Garantia de que o volume está sendo colocado no pallet correto.
Volumes que não atenderem às regras serão bloqueados para tratativa operacional.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** cac3f091594d4e3a

As telas de relatórios deverão ser definidas em conjunto pela Invent e o time Britânia durante a fase de implementação. O objetivo é alinhar os requisitos e determinar quais dados serão exibidos, de acordo com as necessidades do cliente.
Exemplos de Relatórios
Produtividade por Rampa
Apresenta a quantidade de volumes processados em cada rampa.
Produtividade por Operador (PTL)
Exibe a performance individual de cada operador utilizando o sistema PTL.
Produtividade do Sorter
Fornece uma visão geral do desempenho do sorter, incluindo volumes processados e tempo de operação.
Relatório de Rejeitos
Detalha os volumes rejeitados, indicando causas e frequência.
Relatório de Read e NoRead
Mostra o número de leituras bem-sucedidas (Read) e falhas (NoRead) realizadas pelo portal de leitura.

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** a24db33873b3bfd0

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Grupo Pereira durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa;
Relatório de produtividade por operador PLT;
Relatório de produtividade do sorter;
Relatório de rejeito;

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Dashboard  
**Score:** — (nome-topico) | **ID:** 688848a29d70f220

Sugestão de dashboard para visualização da operação e acompanhamento das saídas do sorter, onde ele deve mostrar os valores esperados em cada saída e quantidade tratada.
Obs.: A imagem abaixo é de exemplo, as informações mostradas serão discutidas no decorrer do projeto com as informações pertinentes para a operação.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produção x Rampa  
**Score:** — (semantico) | **ID:** 4cfb69bb7286dd46

Pós Go Live.
Relatório deve mostrar as informações de produtividade por rampa.
Campos:
Quantidades de volumes desviados;
Número da rampa;
Descrição da rampa.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivo de desvio;
Rampa.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Volume x Hora  
**Score:** — (semantico) | **ID:** e4cf0b07953fa7a3

Relatório deve mostrar as informações de produção de volumes por hora.
Campos:
Data;
Hora;
Total de volumes.
Filtros:
Data;
Hora (Incluindo minutos);
Período de data;
Período de hora.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade por rampa de entrada  
**Score:** — (semantico) | **ID:** a98b9780785ca12b

Pós Go Live.
Relatório deve mostrar as informações de produtividade por indução do sorter.
Campos:
Quantidade de volumes induzido em cada rampa de entrada.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Rampa de entrada.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Performance de produtividade por rampa de saída  
**Score:** — (semantico) | **ID:** 274106401ea799ec

Pós Go Live.
Relatório deve mostrar a produtividade da rampa comparando com a quantidade de volumes rejeitados e desviados corretamente no sorter.
Campos:
Quantidade de volumes desviados por rampa de saída e por regra de desvio;
Quantidade de volumes recirculados por rampa de saída;
Percentual entre os volumes desviados e recirculados;
Regras de desvio: parâmetros utilizados para classificação. Exemplo: peso, rota, destino e outros.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivos de rejeito.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade rejeito  
**Score:** — (semantico) | **ID:** 5e101c5f4a194f4a

Pós Go Live.
Relatório de produtividade de rejeito.
Campos:
Quantidade de volumes rejeitados por hora;
Quantidade de volumes rejeitados por rampa;
Quantidade de volumes rejeitados por motivos;
Comparativo percentual entre volumes rejeitados e desviados corretamente.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivo de rejeito.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Histórico de rampas  
**Score:** — (semantico) | **ID:** 7c0399ceea665b4d

Pós Go Live.
Relatório deve mostrar informações de alterações nas rampas.
Campos:
Histórico de mudança de rampas durante a operação;
Usuario que realizou a alteração da rampa;
Data que a rampa foi alterada;
Hora que a rampa foi alterada.
Filtros:
Data;
Hora;
Período de data;
Período de hora.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Histórico de mapas  
**Score:** — (semantico) | **ID:** f9f1972177db142e

Pós Go Live.
Relatório deve mostrar informações de alterações nos mapas.
Campos:
Histórico de mudança de mapas;
Usuario que realizou a alteração do mapa;
Data que o mapa foi alterado;
Hora que o mapa foi alterado.
Filtros:
Data;
Hora;
Período de data;
Período de hora.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Extração da passagem dos volumes  
**Score:** — (semantico) | **ID:** e09c08ce77f42490

O sistema Velox disponibilizará a funcionalidade de exportar esse relatório em documento (Excel), conforme a tabela de exemplo abaixo:

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 5736de3ef39616fb

Relatório de Produção
Relatório de produtividade volumes/hora
Produção por Rampa
Produção por Rota
Motivos de Rejeito
Totais (Por ponto / READ por ponto / NOREAD por ponto)

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Supervisório  
**Score:** — (semantico) | **ID:** 2f7932c2d95ebd91

Para visualizar em tempo real todas as falhas que ocorrem com o equipamento (tais como enrosco de caixas, queda de disjuntores, botão de emergência acionado, erro em inversor de frequência etc.) Invent fornecerá 1 (um) sistema de supervisão, baseado em software Runtime SIEMENS (licença fornecida pela Invent), onde ele permanecerá instalado em uma estação de supervisório. (Equipamento fornecido pelo cliente)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `Conferência Diamante - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Relatório conferência  
**Score:** — (nome-topico) | **ID:** 7185132d1efb0fef

Relatório novo deve contabilizar a quantidade de caixas conferidas pelos usuários com o novo grupo de acesso a conferência, o intuito é contabilizar quantas caixas foram direcionadas para conferência minuciosa, identificando assim os erros de separação.
Deve conter os filtros de data início e data final e número da caixa, com um somatório no final da tabela mostrando a quantidade de caixas conferidas no período selecionado.
Segue exemplo do relatório:

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 039a3ac71add0e9f

No sistema Velox, os operadores do sistema Velox, poderão acessar os relatórios de produtividade da automação.
Exemplos de relatórios padrão:
Relatório de produtividade
Relatório mostra quanto foi a produtividade do Slim Sorter por período, e de todos os destinos físicos disponíveis.
Deve ser possivel filtrar por período, destino, objeto.
Relatório de volumes
Relatório mostra as informações aferidas dos volumes induzidos.
Deve ser possivel filtrar por número de objeto, período e destino.
Relatório de integrações
Relatório mostra as informações do que o sistema Velox aferiu de informações como peso, altura, largura e comprimento do volume e o que recebeu de retorno do sistema do cliente, status (validado/não validado) e motivo.
Deve ser possivel filtrar por número de objeto, período, destino, status (validado/não validado) e motivo.
Relatório de rejeito
Relatório mostra informações de volumes que foram direcionados ao rejeito.
Deve ser possivel verificar e identificar o volume, e verificar o motivo de ter sido direcionado ao rejeito.
Deve ser possivel filtrar por número de objeto, período e status (validado/não validado)

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR - Etiquetas.docx`  
**Heading:** Requisitos do Sistema  
**Score:** — (semantico) | **ID:** c1dc66dd171595e2

Os requisitos do sistema são especificações detalhadas que descrevem as funcionalidades, desempenho e restrições do WCS WCS, garantindo que atendam as necessidades do cliente.
Requisitos de Qualidade: Definem os critérios de desempenho, segurança, usabilidade e confiabilidade que o sistema deve atender para garantir sua eficácia e satisfação do cliente.
Requisitos Funcionais: Descrevem as ações e funcionalidades que o sistema deve executar, como funções de login, processamento de dados, interações com o usuário e demais funcionalidades.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR - Etiquetas.docx`  
**Heading:** Processos  
**Score:** — (semantico) | **ID:** 76598939f822e901

Esta seção apresenta os requisitos relacionados aos processos envolvidos na operação do armazém.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Requisitos do Sistema  
**Score:** — (semantico) | **ID:** 731c7518fed5c6d5

Os requisitos do sistema são especificações detalhadas que descrevem as funcionalidades, desempenho e restrições do WCS WCS, garantindo que atendam as necessidades do cliente.
Requisitos de Qualidade: Definem os critérios de desempenho, segurança, usabilidade e confiabilidade que o sistema deve atender para garantir sua eficácia e satisfação do cliente.
Requisitos Funcionais: Descrevem as ações e funcionalidades que o sistema deve executar, como funções de login, processamento de dados, interações com o usuário e demais funcionalidades.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Processos  
**Score:** — (semantico) | **ID:** cf725ebf1ec2581c

Esta seção apresenta os requisitos relacionados aos processos envolvidos na operação do armazém.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Gestão de Estoque  
**Score:** — (semantico) | **ID:** 17795908002d88d0

Através de um relatório disponibilizado pelo WCS, o sistema identificará:
Paletes mais antigos no AC.
Previsibilidade de venda do material (base de dados será extraída através da inteligência do sistema)
Com base nessas informações, a limpeza do canal será realizada conforme as seguintes regras:
Limpeza de Canal e Buffer
A Inteligência Artificial identificará e sinalizará o redimensionamento de um canal com pouca saída de material.
Procedimento de Limpeza de Canal
O WCS disponibilizará um botão no monitor para que o usuário selecione o canal a ser limpo.
Após a seleção, o sistema:
Bloqueará qualquer tipo de reabastecimento para o canal.
Solicitará a retirada das caixas/paletes através do Picking to Light.
As caixas serão colocadas na esteira e encaminhadas para Rejeito.
Exibição no Visor do Picking to Light
No visor, será exibida a mensagem "Limpeza" ou um número específico (exemplo: 99).
O colaborador deverá confirmar a operação via Led.
Limpeza do Buffer e Pulmão
O pallet será retirado utilizando a saída do BK25.
Limpeza do Porta Pallet do AA
Se o pallet não tiver caixas retiradas, a remoção poderá ser feita por um operador de empilhadeira.
Se o pallet já tiver sido parcialmente movimentado, a retirada deverá ser feita via BK10.
OBS: Quando finalizar a limpeza do canal ou Buffer, o WCS deixará as posições livres para serem abastecidas com outros SKU’s.
OBS: As informações de limpeza deverão constar em relatórios, incluindo:
ID do usuário que solicitou a limpeza.
Data e horário da limpeza.
Canal onde foi realizada a limpeza.
Buffer correspondente.
Quantidade retirada do material.
Informações sobre o novo material enviado para reposição.
Critério de Contagem
A contagem de estoque de uma posição só será realizada se houver compras registradas.
Contagem por Pallet
Apenas o primeiro pallet do canal será contado diretamente.
O segundo e terceiro pallet não serão contados diretamente; em vez disso, será considerada a quantidade ressuprida no AA.
Contagem de Produtos PVAR e PFIX
Caso o pallet tenha saído por compra, a contagem será feita pela quantidade de caixas.
Para pallets que não foram movimentados, a contagem será baseada em:
Peso do estoque
Quantidade que foi feito o reabastecimento
Data Juliana
• O lote é composto pela identificação da unidade fabril, ano e dia do ano
• Lote 3315005 (Data Juliana) onde: 331 identificação da unidade fabril,5 é o ano (2025) e 005 é o dia (1 a 366) ou seja 05/Jan/2025

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Relatórios On-line  
**Score:** — (semantico) | **ID:** 44d3a9527c366573

Será necessário um detalhamento do processo de separação em tempo real dos status que está acontecendo durante a execução do processo.
Número dos transportes, Doca, Placa Veículo e placa TSP, data e hora, número da onda, local de expedição,
Total de cxs por transporte solicitada/Peso líquido/Peso bruto(AA + AC)
Total de cxs por transporte AA
Total de cxs por transporte PK AC
Total de cxs por transporte PC AC
Total de cxs que não foram atendidas/cortes
Peso total transporte/peso atendido/peso cortado
Representação por percentual o atendimento da necessidade do PK AA, PK AC e do PC AC:
% geração da separação
% de andamento da separação
% de entrega na doca
Total de cxs atendidas /Peso líquido/Peso bruto
Quantidade de rejeitos

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** Requisitos do Sistema  
**Score:** — (semantico) | **ID:** 8dc2f828ab0eb320

Os requisitos do sistema são especificações detalhadas que descrevem as funcionalidades, desempenho e restrições do WCS WCS, garantindo que atendam as necessidades do cliente.
Requisitos de Qualidade: Definem os critérios de desempenho, segurança, usabilidade e confiabilidade que o sistema deve atender para garantir sua eficácia e satisfação do cliente.
Requisitos Funcionais: Descrevem as ações e funcionalidades que o sistema deve executar, como funções de login, processamento de dados, interações com o usuário e demais funcionalidades.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** Processos  
**Score:** — (semantico) | **ID:** e51a2026068ae191

Esta seção apresenta os requisitos relacionados aos processos envolvidos na operação do armazém.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** Requisitos do Sistema  
**Score:** — (semantico) | **ID:** 79feef4cb360f005

Os requisitos do sistema são especificações detalhadas que descrevem as funcionalidades, desempenho e restrições do WCS WCS, garantindo que atendam as necessidades do cliente.
Requisitos de Qualidade: Definem os critérios de desempenho, segurança, usabilidade e confiabilidade que o sistema deve atender para garantir sua eficácia e satisfação do cliente.
Requisitos Funcionais: Descrevem as ações e funcionalidades que o sistema deve executar, como funções de login, processamento de dados, interações com o usuário e demais funcionalidades.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** Processos  
**Score:** — (semantico) | **ID:** 2e70635c7fe62137

Esta seção apresenta os requisitos relacionados aos processos envolvidos na operação do armazém.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** Requisitos do Sistema  
**Score:** — (semantico) | **ID:** 1fa4114c4f04895b

Os requisitos do sistema são especificações detalhadas que descrevem as funcionalidades, desempenho e restrições do WCS WCS, garantindo que atendam as necessidades do cliente.
Requisitos de Qualidade: Definem os critérios de desempenho, segurança, usabilidade e confiabilidade que o sistema deve atender para garantir sua eficácia e satisfação do cliente.
Requisitos Funcionais: Descrevem as ações e funcionalidades que o sistema deve executar, como funções de login, processamento de dados, interações com o usuário e demais funcionalidades.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** Processos  
**Score:** — (semantico) | **ID:** 4b742c8d3a66dacb

Esta seção apresenta os requisitos relacionados aos processos envolvidos na operação do armazém.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** Carregamento da Doca  
**Score:** — (semantico) | **ID:** a1daee5f2c740751

O sistema WCS (Warehouse Control System) será responsável por controlar todo o processo de conferência do AA e dos pallets que vierem do AC. Esse processo será realizado por meio do portal de câmaras, permitindo a identificação da doca de carregamento por meio da leitura da caixa.
Para os pallets que vierem do AC, o SAP irá enviar um IDOC com a UD do pallet e os volumes/lote que essa UD possui. Com essas informações o operador irá realizar a leitura da UD do pallet via WCS/tablet e após essa etapa será necessário realizar a leitura do volume/lote  e abrir uma opção no tablet para o operador informar a quantidade total para conferência do carregamento. Este processo será repetido para os todos SKU's/Lote na UD em questão. Caso não tenha a opção da leitura da caixa (etiqueta), o colaborador deverá digitar o SKU e Lote ou SKU mais data produção mais SIF para formar o lote. Se for lido um volume/lote que não está sendo esperado, o sistema deve apresentar erro para o operador.
Caminhão estivado é obrigatório que a separação comece apenas quando o check list vazio seja realizado e aprovado
Para a execução do carregamento, o sistema deverá exibir as seguintes informações nos monitores das docas:
Dados do veículo a ser carregado;
Identificação do transporte e transportador;
Onda vinculada ao transporte;
Quantidade total de caixas no carregamento;
Peso total do carregamento;
Tipos de atendimento:
AC (Picking e Palete cheio);
AA;
Além dessas informações, os monitores deverão exibir:
Próximo veículo a ser carregado na doca;
Tipo de picking realizado na doca:
Somente congelado;
Somente resfriado.
Priorizacão do peso das caixas:
Pesado;
Médio;
Leve;
Misturado.
O sistema deverá exibir os seguintes status para cada transporte nos monitores de carregamento:
"Transporte a separar" – Exibido na cor vermelha;
"Transporte em separação" – Exibido na cor azul;
"Transporte finalizado" – Exibido na cor verde.
O status de carregamento deverá ser atualizado conforme a evolução do processo:
O status "Separacão finalizada" será atualizado quando:
A última separação AA for registrada na doca;
A última UD do atendimento AC for conferida.
O status de carregamento deverá ser enviado tanto para os tablets quanto para os monitores de acompanhamento. No monitor será apresentado os status, quantidade de volumes faltantes (Quantidade, porcentagem, volume total, Envio do AA e envio do AC) para a finalização do carregamento na doca.
O sistema deverá garantir que todas as informações sejam devidamente atualizadas e refletidas em tempo real nos dispositivos e monitores do ambiente logístico, assegurando a acuracidade do processo de conferência e carregamento.
O status de carregamento deverá ser atualizado para "Conferência Finalizada" quando a última separação do tipo AA for finalizada na doca e para "AC" quando a última unidade do tipo UD for conferida. Além disso, essa atualização deverá ser refletida em tempo real nos tablets e monitores de acompanhamento, garantindo a consistência das informações nos dispositivos de visualização.
Ao separar uma ou mais ondas dos materiais das categorias C e D, no contexto de antecipação de onda, os materiais deverão ser posicionados na indução, sendo as posições definidas por parâmetros no nível 1. Quando o PBL correspondente àquela onda for acionado, o colaborador deverá transferir as caixas para a esteira.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Relatórios do sistema  
**Score:** — (semantico) | **ID:** 716e26e6b716f1d0

Os relatórios precisarão ser alinhados entre Invent e 3 Corações durante a fase de desenvolvimento para definir quais dados precisarão ser mostrados conforme necessidade do cliente.
Todos os relatórios de consulta e visualização, precisa constar, usuário que finaliza a separação de fracionados e full case, usuário de conferência, pedido, horário de conclusão de tarefa, SKU, quantidades e número da tarefa.
Segue alguns exemplos de relatórios:
Relatório de produtividade
Relatório de status de Pedidos (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque da posição.
Relatórios detalhados de conferência.
Todos os relatórios podem ser exportados para .csv.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** 03bb48bbfbecd1bd

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Grupo Nós para definição de quais dados precisarão ser mostrados conforme necessidade do Grupo Nós.
Segue alguns exemplos de relatórios.
1-	Relatório de produtividade por posto
2-	Relatório de produtividade por operador
3-	Relatório de produtividade por família de produto
4-	Relatório de lojas para conferência
5-	Relatório de produtividade por produto geral
6 –     Relatório de produtividade por Rampa
7 -      Relatório de produtividade por Loja
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Relatórios do Sistema  
**Score:** — (semantico) | **ID:** 16ec2898ffbc9fd8

Todos os relatórios devem ter a possibilidade de ser exportado para Excel.
Relatório geral de produtividade
Relatório de produtividade por operador
Relatório de produtividade por rampa
Relatório de status de pedidos
Relatório/dashboard de produtividade sorter, comparativo de quantos caixas estão previstas e quantas já foram processadas.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Arquivos laudos  
**Score:** — (semantico) | **ID:** 91331d0e7572cf84

O sistema wms deve disponibilizar os arquivos de laudo em uma pasta do servidor WCS.
Atualização dos Arquivos de Laudos: Sempre que houver qualquer atualização nos documentos de laudos dos medicamentos, é responsabilidade do cliente garantir a atualização desses arquivos no diretório.
Esses documentos ficarão armazenados nesse diretório, e sempre que for necessária a impressão, o sistema WCS realizará a pesquisa no diretório para localizar e imprimir o arquivo correto e atualizado.
A busca no diretório será realizada através do lote do item que será a nomenclatura de cada arquivo presente na pasta.
Caminho atual dos laudos:   C:\velox-backend\laudos
Revisão da Impressão de Laudos: A impressão dos laudos deverá ser feita por item/lote presente na caixa (1 para 1), ou seja, quando necessário a impressão do laudo será realizada a cada item e lote que aquela caixa possui.
O sistema WCS também deverá disponibilizar uma funcionalidade de reimpressão de etiquetas e laudos, com permissão de acesso baseado em senha para garantir a segurança e controle do processo.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Relatórios do sistema  
**Score:** — (semantico) | **ID:** eb5014b0167f501e

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Fagron durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Fagron.
Todos os relatórios podem ser exportados para .csv.
Segue alguns exemplos de relatórios.
Relatório de produtividade por Período
Relatório de produtividade por Estação de picking
Relatório de status de Pedidos (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque da posição
Relatório/dashboard de produtividade sorter, comparativo de quantos volumes foram conferidos com quantos foram lidos e ou estão pendente leitura no portal do sorter.
Rastreabilidade conferência, WCS deve gerar relatórios de logs de leituras erradas nos produtos.
Relatórios detalhados de conferência.
Relatório de Curva ABC
Relatório de Rastreabilidade dos Operadores nos Postos de Trabalho de Picking e Conferência

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** d529db7d335a95ab

Para o correto funcionamento da nova funcionalidade, o WCS deverá ser adaptado para receber informações de Notas Fiscais (DANFE) do sistema D365 F&O da Fagron. Além disso, será desenvolvida uma nova tela de "Romaneio" que centralizará a conferência final dos pedidos e a geração dos documentos de expedição, substituindo o controle manual existente.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Dados e Status Iniciais  
**Score:** — (semantico) | **ID:** 41f09bbee0e57997

Carregamento de Dados: Ao entrar na tela, o WCS preencherá automaticamente as colunas com as informações já existentes, incluindo: Num. do Pedido, Pega, Quantidade de volumes, Transportadora e Marca. O WCS também registrará a Data e o Horário exatos em que o pedido foi disponibilizado para o Romaneio.
Status Padrão: Todo pedido inserido na tela iniciará com os seguintes status:
Status da Conferência: PENDENTE (com destaque visual, ex: cor amarela).
Documento gerado: NÃO

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 540c44c4f082567d

Deverá ser desenvolvido um relatório para análise de performance da expedição.
Relatório Comparativo de Pedidos:
Objetivo: Fornecer uma visão diária comparativa entre o total de pedidos finalizados (que saíram do "Aloca Palete") e o total de pedidos efetivamente despachados (que foram incluídos em um Romaneio).
Dados: O relatório deverá detalhar os pedidos e seus status finais (Pendente ou Conferido), permitindo identificar gargalos no processo de conferência fiscal.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Caixas  
**Score:** — (semantico) | **ID:** 29d547d4c40dc302

Para 2ª fase do projeto teremos uma tela de cadastros de caixas, onde é possível adicionar, remover e editar os dados das caixas, assim como desabilitar e habilitar um tipo de caixa.
Todo cadastro de caixas e suas informações (comprimento, altura, largura e peso) são de responsabilidade do time do cliente como também as ações de gerenciamento de uso das mesmas, não haverá controle do Velox em relação a quantidade de caixas.
Atualmente serão utilizados 4 tipos de caixas de papelão e 1 (uma) de plástico onde para as caixas de papelão teremos as caixas do tipo P “pequena”, M “média”, G “grande” e X “caixa de papelão do tamanho da caixa plástica” e para caixa plástica teremos CP “caixa plástica”, essas siglas serão utilizadas para identificação das caixas na tela de OrderStart.
Além dos tipos de caixa mencionados acima teremos o modelo FC (Full Case), que será usado para indicar no Order Start da separação Full case o tipo de caixa.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Percentual de ocupação  
**Score:** — (semantico) | **ID:** 44b248d991368bc4

Na mesma tela de configuração da caixa o operador pode definir o percentual de ocupação da cubagem, onde o Velox irá usar como referência para gerar a quantidade de caixas/volumes por pedido, inclusive quando for necessário realizar a cubagem novamente após desabilitar um tipo de caixa.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** bec58c1c5d575cbb

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Grupo Pereira durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa;
Relatório de produtividade por item;
Relatório de produtividade por caixa;
Relatório de produtividade por posto;
Relatório de produtividade do sorter;
Relatório de rejeito;

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 84a31f7c168699bf

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Grupo Pereira durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa;
Relatório de produtividade por item;
Relatório de produtividade por caixa;
Relatório de produtividade por posto;
Relatório de produtividade do sorter;
Relatório de rejeito;

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** d6b1895012336146

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Grupo Pereira durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa;
Relatório de produtividade por item (corte e coleta por endereço);
Relatório de produtividade por caixa;
Relatório de produtividade por posto;
Relatório de produtividade do sorter;
Relatório de produtividade por operador;
Relatório de rejeito;

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** RELATÓRIOS DO SISTEMA  
**Score:** — (semantico) | **ID:** a8e32996e124ddb4

As telas de relatório deverão ser discutidas e alinhadas entre a equipe da Invent e a ANDREANI durante a fase de implementação, para definir quais dados precisam ser exibidos de acordo com as necessidades da ANDREANI.
Abaixo estão alguns exemplos de relatórios que poderão ser gerados:
Relatório de produtividade por período
Relatório de produtividade por estação de picking
Relatório de status dos pedidos (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque por posição
Relatório de produtividade do sorter, com comparativo entre volumes conferidos, volumes lidos e volumes pendentes de leitura no portal do sorter
Relatório de leituras corretas e incorretas por estação
Relatório de status de impressão
Todos os relatórios poderão ser exportados para o formato (.csv).

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Relatórios do sistema  
**Score:** — (semantico) | **ID:** bdfaf80456c135a6

Os relatórios precisarão ser alinhados entre Invent e Dexco durante a fase de desenvolvimento para definir quais dados precisarão ser mostrados conforme necessidade do cliente.
Todos os relatórios de consulta e visualização, precisa constar, usuário que finaliza a separação, usuário de conferência, pedido (remessa), horário de conclusão da tarefa, código comercial do SKU, quantidade de peças, número da tarefa, a posição de pega dos SKUs.
Segue alguns exemplos de relatórios:
Relatório de produtividade
Deve conter informação do operador logado no posto de trabalho (separação)
Relatório de status de Pedidos (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque da posição.
Relatórios detalhados de conferência.
Deve conter informações do operador que realizou conferência da tarefa, horário, quantidade de pedidos, SKUs e peças, e que seja possivel filtrar por período e mostrar os tempos por tarefas.
Todos os relatórios podem ser exportados para .csv.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** cc432b803e915609

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Maravilhas do Lar durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Maravilhas do Lar.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por tipo de produto
4- Relatório de conferência
5- Relatório de produtividade por produto geral
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Relatórios e Telas do sistema  
**Score:** — (semantico) | **ID:** c698d740d1307869

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Maravilhas do Lar durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da Maravilhas do Lar.
Segue alguns exemplos de relatórios.
1- Relatório de produtividade por posto
2- Relatório de produtividade por operador
3- Relatório de produtividade por tipo de produto
4- Relatório de conferência
5- Relatório de produtividade por operação (sorter contingência)
Entretanto, importante ressaltar que os seguintes detalhes acordados em reunião fazem parte da solução do projeto em questão:
•	Comparativo entre a demanda enviada pelo WMS Cliente e o que passou fisicamente pelo portal de leitura do Sorter, cruzando com a real conferência do operador na saída do sorter.
•	DASHBOARD (TV de acompanhamento) para informar a situação de cada saída do SORTER, para os supervisores e operadores.
•	Relatório de produtividade (Total de caixas produzidas homem/hora, itens produzidos homem/hora, pallets produzidos homem/hora) considerando quando 2 operadores trabalharem na mesma saída.
•	O sistema Invent permitirá que os relatórios sejam exportados para uma planilha em Excel.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** c02690e84d81cee8

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Beira Rio durante a fase de documentação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa
Relatório de produtividade do sorter
Relatório de rejeito
Relatórios de Leitura
Todos os relatórios definidos nesta documentação serão entregues junto com todo o sistema Velox, quaisquer necessidades após a definição aprovada serão discutidas comercialmente.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** RELATÓRIOS DO SISTEMA  
**Score:** — (semantico) | **ID:** 5e2522b88f66461e

As telas de relatório deverão ser discutidas e alinhadas entre a equipe da Invent e a ANDREANI durante a fase de implementação, para definir quais dados precisam ser exibidos de acordo com as necessidades da ANDREANI.
Abaixo estão alguns exemplos de relatórios que poderão ser gerados:
Relatório de produtividade por período
Relatório de produtividade por estação de picking
Relatório de status dos pedidos (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque por posição
Relatório de produtividade do sorter, com comparativo entre volumes conferidos, volumes lidos e volumes pendentes de leitura no portal do sorter
Relatório de leituras corretas e incorretas por estação
Relatório de status de impressão
Todos os relatórios poderão ser exportados para o formato (.csv).

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** b28b0f2dd7a3419c

Os campos dos relatórios precisarão ser discutidas e alinhadas entre Invent e Promofarma durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios:
Status dos pedidos - ( Integrado, Separado, Conferido, Expedido)
Triagem dos Volumes (picking cart, flowhack, conferencia, sorter)
Monitor de integrações
Planejado X Realizado da separação dos volumes (com a visão do corte )
Produtividade por Estação e Usuário
Relatório de produtividade por posto;
Relatório de produtividade por operador;
Relatório de rejeito;

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Relatórios do sistema  
**Score:** — (semantico) | **ID:** 74c2152bb921a95e

Os relatórios precisarão ser alinhados entre Invent e TPC PUMA durante a fase de desenvolvimento para definir quais dados precisarão ser mostrados conforme necessidade do cliente.
Todos os relatórios de consulta e visualização, precisam constar, usuário que finaliza a separação de fracionados, usuário de conferência, pedido, horário de conclusão de tarefa, ean, quantidades e número da tarefa.
Segue alguns exemplos de relatórios:
Relatório de Produtividade por Posto
Relatório de Status do Volume (iniciados, em separação e finalizados)
Relatório de Reabastecimento.
Relatórios de Conferência.
Todos os relatórios podem ser exportados para .csv

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** b50eb5131f23721c

Segue exemplos de relatórios proposto pela equipe Invent ao projeto Cougar:
Rastreabilidade de caixas no processo de picking e replenishiment:
O WCS disponibilizará um dashboard que exibirá a quantidade de caixas em processo de picking e replenishment. Essas caixas serão segregadas conforme o status de sua movimentação: "Não Iniciado", "Em Andamento" e "Finalizado"
Relatório de produtividade por estação;
Rastreio por Código do volume;
Relatórios de Read e NoRead;
Reabertura do Transport Order na indução:
Este relatório lista os volumes que, após passarem pelo setor de Hospital, tiveram que retornar para a linha de picking para a coleta de itens faltantes. O relatório também indicará, em uma coluna específica, os postos revisitados durante esse processo de reabertura.
Relatório de informações por volume
Relatório de PTW
Relatório de pallets
Os relatórios devem ter possibilidade de extrair as informações em arquivo Excel ou PDF.
VPN e acesso remoto
Durante a instalação e configuração dos dispositivos e equipamentos de automação, solicitamos uma conexão via VPN (client-to-site) na rede de automação, para que os técnicos consigam acessar remotamente os equipamentos (servidores, concentradores e PLC) para configurações e testes.
Após a instalação e configuração, essa conexão VPN é importante ser mantida, porém com o time de pós-vendas, para possíveis ajustes e resoluções de chamados, com o acesso remoto a agilidade na resolução do problema é efetiva.
Para a configuração e ajustes do sistema WCS durante a implementação do sistema, o acesso precisa ser concedido no servidor que será disponibilizado.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Localizações ocupadas por classe ABC  
**Score:** — (semantico) | **ID:** 3ebb7dae280dfcfb

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

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 80a33c37fd1d5710

Segue exemplos de relatórios proposto pela equipe Invent ao projeto Cougar:
Rastreabilidade de caixas no processo de picking e replenishiment
Relatório de produtividade por estação;
Rastreio por Código do volume;
Relatórios de Read  e NoRead;
Reabertura do Transport Order na indução;
Relatório de informações por volume
Relatório de PTW
Relatório de pallets
Os relatórios devem ter possibilidade de extrair as informações em arquivo Excel ou PDF.
VPN e acesso remoto
Durante a instalação e configuração dos dispositivos e equipamentos de automação, solicitamos uma conexão via VPN (client-to-site) na rede de automação, para que os técnicos consigam acessar remotamente os equipamentos (servidores, concentradores e PLC) para configurações e testes.
Após a instalação e configuração, essa conexão VPN é importante ser mantida, porém com o time de pós-vendas, para possíveis ajustes e resoluções de chamados, com o acesso remoto a agilidade na resolução do problema é efetiva.
Para a configuração e ajustes do sistema WCS durante a implementação do sistema, o acesso precisa ser concedido no servidor que será disponibilizado.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 1.docx`  
**Heading:** Confirmação de Desvio  
**Score:** — (semantico) | **ID:** e0a88d0ac65b2e34

Após o desvio, o WCS enviará ao WMS a confirmação do desvio, indicando a rampa utilizada.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 1.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** f33846c5f633b674

As telas de relatórios deverão ser definidas em conjunto pela Invent e o time Britânia durante a fase de implementação. O objetivo é alinhar os requisitos e determinar quais dados serão exibidos, de acordo com as necessidades do cliente.
Exemplos de Relatórios
Produtividade por Rampa
Apresenta a quantidade de volumes processados em cada rampa.
Produtividade do Sorter
Fornece uma visão geral do desempenho do sorter, incluindo volumes processados e tempo de operação.
Relatório de Rejeitos
Detalha os volumes rejeitados, indicando causas e frequência.
Relatório de Read e NoRead
Mostra o número de leituras bem-sucedidas (Read) e falhas (NoRead) realizadas pelo portal de leitura.
Relatório de Recirculação.
Exibe todos os volumes que tiveram recirculação, e quantidade de vezes que recirculou, além dos volumes que excederam a quantidade de voltas parametrizadas.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Relatórios do sistema  
**Score:** — (semantico) | **ID:** abbda1d4029d4832

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e C&A durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da C&A.
Todos os relatórios podem ser exportados para .csv.
Segue alguns exemplos de relatórios.
Relatório de produtividade por Período
Relatório de produtividade por Estação de picking
Relatório de status de Pedidos (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque da posição
Relatórios detalhados de conferência.
Relatório de Curva ABC
Relatório de Rastreabilidade dos Operadores nos Postos de Trabalho de Picking e Conferência

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Relatórios do sistema  
**Score:** — (semantico) | **ID:** 5f55978380da4b43

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e C&A durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da C&A.
Todos os relatórios podem ser exportados para .csv.
Segue alguns exemplos de relatórios.
Relatório de produtividade por Período
Relatório de produtividade por Estação de picking
Relatório de status de Pedidos (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque da posição
Relatórios detalhados de conferência.
Relatório de Curva ABC
Relatório de Rastreabilidade dos Operadores nos Postos de Trabalho de Picking e Conferência

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Relatórios do sistema  
**Score:** — (semantico) | **ID:** 1a5c31eeb4a15b54

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e C&A durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da C&A.
Todos os relatórios podem ser exportados para .csv.
Segue alguns exemplos de relatórios.
Relatório de produtividade por Período
Relatório de produtividade por Estação de picking
Relatório de status de Pedidos (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque da posição
Relatórios detalhados de conferência.
Relatório de Curva ABC
Relatório de Rastreabilidade dos Operadores nos Postos de Trabalho de Picking e Conferência

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Relatórios do sistema  
**Score:** — (semantico) | **ID:** 106dba8573b3e780

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e C&A durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da C&A.
Todos os relatórios podem ser exportados para .csv.
Segue alguns exemplos de relatórios.
Relatório de produtividade por Período
Relatório de produtividade por Estação de picking
Relatório de status de Pedidos (iniciados, em separação e finalizados)
Relatório de produtos e níveis de estoque da posição
Relatórios detalhados de conferência.
Relatório de Curva ABC
Relatório de Rastreabilidade dos Operadores nos Postos de Trabalho de Picking e Conferência

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 028e30de3c2a2df4

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e C&A durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa;
Relatório de produtividade por operador PLT;
Relatório de produtividade do sorter;
Relatório de rejeito;
Relatórios de Read  e NoRead

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 95ce576293850316

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e Zaffari durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade da operação.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa;
Relatório de produtividade por operador PTL;
Relatório de produtividade do sorter;
Relatório de rejeito;
Relatórios de Read e NoRead
Dashboard Operacional
Dashboard Costumizado

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** Relatórios  
**Score:** — (nome-topico) | **ID:** 04bbce013537452b

As telas de relatório precisarão ser discutidas e alinhadas entre Invent e xxxxx durante a fase de implementação para definição de quais dados precisarão ser mostrados conforme necessidade do cliente.
Segue alguns exemplos de relatórios:
Relatório de produtividade por rampa;
Relatório de produtividade por operador PLT;
Relatório de produtividade do sorter;
Relatório de rejeito;
Relatórios de Read  e NoRead
