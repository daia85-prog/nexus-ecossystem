# put-to-wall.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Put To Wall  
**Score:** — (nome-topico) | **ID:** 9a03d39b5c56bba3

Cada PTW (Put To Wall) é composto por uma parede com 50 nichos, sendo 15 nichos grandes (600 × 600 × 1000) e 35 nichos pequenos (340 × 340 × 1000).
O setor de pedidos conformes contará com 2 paredes de PTW, totalizando 100 nichos, todos equipados com LEDs frontais e traseiros, destinados à separação de pedidos com poucas unidades.
O setor de produtos inconformes contará com 1 parede de PTW, totalizando 50 nichos, também equipados com LEDs frontais e traseiros, destinada à separação de pedidos inconformes com poucas unidades.
O WCS será responsável por cubar os pedidos destinados ao PTW para melhor alocá-los nas posições grandes ou pequenas.
O setor do Put to Wall será responsável por consolidar pedidos com múltiplas caixas, quando aplicável, ou dividir caixas que atendam a mais de um pedido, alocando um pedido por nicho.
O sistema irá vincular automaticamente os pedidos contidos na caixa a uma posição do PTW (caso ainda não estejam alocados). Durante o processo de alocação, o operador deverá bipar o EAN do produto, a partir dessa informação, o sistema indicará, por meio do LED aceso em azul, a posição correta onde os itens devem ser alocados e a quantidade a ser alocada.
Quando todos os itens do pedido que estavam aguardando no PTW forem alocados, o LED traseiro do PTW acenderá na cor verde, indicando que o pedido está completo.
Nesse momento, o operador deverá:
Confirmar o fechamento do nicho pressionando o LED do PTW;
Utilizar o coletor Android (fornecido pelo cliente) para bipar o endereço do nicho;
Bipar a caixa que será vinculada ao pedido;
Retirar todos os itens do nicho e colocar na caixa que foi vinculada;
Levar a caixa com os itens para a área de conferência ou diretamente ao packing.
Após essas etapas, o nicho será considerado finalizado.
O sistema, por meio de integração, irá identificar automaticamente se o pedido deverá seguir para o processo de conferência ou se será direcionado diretamente para o packing.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Etiqueta Virtual  
**Score:** — (semantico) | **ID:** 4f18040e638ead03

Cada etiqueta virtual de separação será gerada no Order Start e associada a um pedido e a um volume específico.
As informações do pedido e do volume serão armazenadas no sistema WCS para posterior rastreamento.
Durante o processo de separação, o coletor de dados será utilizado para registrar as informações essenciais de rastreabilidade. As strings lidas no coletor incluem:
SKU do produto
Localização de armazenamento
Volume de separação
Quantidade do produto separado
Código de barras da caixa virtual

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** df3575c9e93f47ee

Opções de cancelamento que teremos no WCS:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start: Caso o pedido seja cancelado após o início do Order Start, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito antes conferência.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.
Gerenciamento de produtos coletados:
Pedidos Não Iniciados: Caso o pedido esteja com status “não iniciado”, ele poderá ser cancelado diretamente e não teremos ação nos produtos referentes a este pedido.
Pedidos com Coletas Parciais: Se o pedido já tiver itens coletados, esses produtos serão direcionados automaticamente para a localização "ANÁLISE", impedindo novas coletas. Assim, o restante dos itens do pedido será automaticamente desconsiderado para coleta, evitando inconsistências no processo.
O WCS deverá disponibilizar uma tela específica para o processo de devolução de itens que estejam com status e localização marcados como “Em Análise”. Essa funcionalidade terá como objetivo permitir o retorno seguro e controlado desses produtos ao estoque, garantindo rastreabilidade e conformidade com as regras operacionais já estabelecidas.
Durante esse processo, o operador deverá realizar a leitura do código do item a ser devolvido. A partir dessa leitura, o sistema WCS deverá identificar o item e, com base nas regras previamente definidas (como tipo de produto, lote, curva de giro, ou canal de separação), informar automaticamente o local de devolução apropriado.
Essa tela deverá seguir a mesma lógica de segurança e validação utilizada nos demais fluxos de separação, garantindo que a devolução ocorra de forma padronizada, auditável e sem riscos de quebra de acuracidade no estoque.
Tela de gerenciamento: Uma tela será disponibilizada para gerenciar os produtos dos pedidos cancelados, permitindo a organização por zonas, volumes e status.
Observação: Para os casos de separação via picking cart
(PDV) e coletor deve exibir um pop-up com a informação que o pedido está cancelado.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 3cd495ac8f3325da

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de PTW e PTL, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco Postgres).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** 286f9b7ce70fe356

O WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS e deve aceitar uma integração de cancelamento partindo do WMS. Ao cancelar um pedido temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso o pedido seja cancelado após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito ou conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** fa5a73c64f6f8b20

O WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS e deve aceitar uma integração de cancelamento partindo do WMS. Ao cancelar um pedido temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso o pedido seja cancelado após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito ou conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** d7d648ec9cd872a9

O WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS e deve aceitar uma integração de cancelamento partindo do WMS. Ao cancelar um pedido temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso o pedido seja cancelado após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito ou conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Cancelamento de Missão  
**Score:** — (semantico) | **ID:** 47190d6c1218cdcf

O WCS deve disponibilizar uma tela para cancelar missões enviadas pelo WMS. Ao cancelar uma missão temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se a missão for cancelada antes de ser iniciado no Order Start, ele será removido da fila de missões pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso a missão seja cancelada após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito para conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (tarefa) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta.
Cancelamento via Missão: O cancelamento de missões no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento dentro do WCS não será integrado com outros sistemas, limitando-se à remoção da missão e à atualização de seu status dentro do sistema WCS.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Cancelamento de OT (CATO)  
**Score:** — (semantico) | **ID:** a107269c76c891d9

O cancelamento de OT ocorre quando uma Ordem de Transporte que já foi criada precisa ser revertida antes ou durante sua execução. O cancelamento é formalizado por meio do IDOC CATO (estorno de Ordem de Transporte) iniciado pelo SAP com a confirmação pelo WCS.
Fluxo de Cancelamento — SAP cancela (SAP → WCS)
O SAP envia ao WCS um IDOC do tipo CATO referenciando o campo número da OT (TANUM).
O WCS recebe e retorna o CATO e atualiza o status da OT para "Cancelada".
A OT somente pode ser cancelada se o status estiver em "Pendente", caso o WCS receba um CATO de uma OT já confirmada o WCS retorna o erro ao SAP na integração.
Estrutura do IDOC de Cancelamento (WMCATO)
SAP > VELOX (CANRQ=X)
Utilização dos dados (Velox):
Estrutura do IDOC de Confirmação do Cancelamento de Abastecimento (WMCATO)
Velox > SAP (CANCL=X)

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** 5432d7d82f5a21ce

As regras de cancelamento descritas neste capítulo seguem o mesmo comportamento já em produção no projeto BETA SP, salvo as adaptações específicas documentadas a seguir.
Opções de cancelamento que teremos no WCS:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start: Caso o pedido seja cancelado após o início do Order Start, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito antes conferência.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.
Gerenciamento de produtos coletados:
Pedidos Não Iniciados: Caso o pedido esteja com status “não iniciado”, ele poderá ser cancelado diretamente e não teremos ação nos produtos referentes a este pedido.
Pedidos com Coletas Parciais: Se o pedido já tiver itens coletados, esses produtos serão direcionados automaticamente para a localização "ANÁLISE", impedindo novas coletas. Assim, o restante dos itens do pedido será automaticamente desconsiderado para coleta, evitando inconsistências no processo.
O WCS deverá disponibilizar uma tela específica para o processo de devolução de itens que estejam com status e localização marcados como “Em Análise”. Essa funcionalidade terá como objetivo permitir o retorno seguro e controlado desses produtos ao estoque, garantindo rastreabilidade e conformidade com as regras operacionais já estabelecidas.
Durante esse processo, o operador deverá realizar a leitura do código do item a ser devolvido. A partir dessa leitura, o sistema WCS deverá identificar o item e, com base nas regras previamente definidas (como tipo de produto, lote, curva de giro, ou canal de separação), informar automaticamente o local de devolução apropriado.
Essa tela deverá seguir a mesma lógica de segurança e validação utilizada nos demais fluxos de separação, garantindo que a devolução ocorra de forma padronizada, auditável e sem riscos de quebra de acuracidade no estoque.
Tela de gerenciamento: Uma tela será disponibilizada para gerenciar os produtos dos pedidos cancelados, permitindo a organização por zonas, volumes e status.
Observação: Para os casos de separação via picking cart
(PDV) e coletor deve exibir um pop-up com a informação que o pedido está cancelado.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Cancelación de pedido  
**Score:** — (semantico) | **ID:** 07a7381dbd540eb8

WMS ↔ WCS (WMCATO)
El WMS puede enviar una orden de cancelación al WCS, que a su vez bloquea o elimina la orden de la operación en curso. La acción exacta dependerá del estado de la orden en el momento de la cancelación (si ya se ha preparado, se está preparando o aún no se ha iniciado).
E1LTCAH Cancellation/cancellation request transfer order IDoc header
E1LTCAI Cancellation/cancellation request transfer order IDoc item

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Cancelamento de pedidos  
**Score:** — (semantico) | **ID:** 998f1991634e90c9

WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS. Ao cancelar um pedido temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start: Caso o pedido seja cancelado após o início do Order Start, a coleta será interrompida. O operador ao bipar a etiqueta os leds acenderam em vermelho indicando que não tem coleta vinculada àquele pedido.
Permissão de Cancelamento: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Put to Wall  
**Score:** — (nome-topico) | **ID:** e6fcd7d47251cfb8

O Put to Wall é o ponto de consolidação dos itens coletados no museu (picking cart) antes da indução na automação. O WCS é responsável pelo controle do PTW.
Estrutura:
30 nichos no total.
Configuração: 3 níveis × 10 colunas.
Dimensões do nicho: 400 mm (largura) × 550 mm (altura) × 800 mm (profundidade).
Fluxo Operacional:
Bipagem no PTW: O operador bipa cada item coletado no PDV/coletor. O WCS identifica o item, localiza o pedido ao qual ele pertence e acende o nicho correspondente na estrutura.
Alocação: O operador deposita o item no nicho indicado.
Consolidação: O processo se repete até que todos os itens da onda estejam alocados nos respectivos nichos. Ao completar um pedido, o WCS sinaliza o nicho indicando que aquele pedido está pronto para indução.
Liberação ao Order Start: O operador retira os itens do nicho consolidado, induz a caixa plástica na esteira de Fullcase do Térreo e o pedido segue o fluxo padrão do picking cart (pula a automação diretamente ao sorter → rampa 1 → reinduzido no Order Start padrão → Picking Mezanino → Picking Térreo → Conferência → Expedição).

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Shipping Operation: Put-To-Pallet (PTP)  
**Score:** — (semantico) | **ID:** 8c1975e721a33b65

The volume consolidation process will be managed by the Velox PTP module. The operation replaces paper lists and the operator's memory with a visual and systemically validated system.

---
**Origem:** [I21.131] ADITIVO — `I21.131  - Aditivo Projeto PMB - Posto Virtual C1.docx`  
**Heading:** Cenário 1 – Coleta Sistêmica no Posto Virtual sem alteração na lógica da balança  
**Score:** — (semantico) | **ID:** d1e803c0d4c805f1

Neste cenário, a coleta no posto virtual será implementada sem qualquer alteração na lógica atual da balança, utilizando uma abordagem baseada em posto virtual. Será criado um posto específico para que itens coletados na estação de conferência sejam registrados e considerados no envio da integração de confirmação de coleta, contendo internamente N endereços virtuais, que representarão os itens adicionais a serem considerados no processo.
A lógica proposta mantém a ideia de desviar automaticamente os volumes para o posto de conferência sem necessidade de alteração na lógica de validação de peso da balança, utilizando o próprio comportamento de divergência de peso como gatilho operacional. Em contrapartida, essa abordagem exige conferência manual completa de todos os itens, conforme regra já existente para o processo antigo.

---
**Origem:** [I21.131] ADITIVO — `I21.131  - Aditivo Projeto PMB - Posto Virtual C1.docx`  
**Heading:** Estrutura do Posto de Coleta Virtual  
**Score:** — (semantico) | **ID:** 2af123b6817af2d5

Será criado um posto virtual no sistema, o qual conterá múltiplos endereços virtuais associados. Esses endereços representarão posições lógicas onde estarão cadastrados os itens que deverão ser considerados durante a conferência.
A vinculação entre pedido/caixa e o posto virtual será o elemento chave para ativação do fluxo. Sempre que uma caixa tiver itens que estão associados a este posto, o sistema deverá tratá-la dentro do contexto de conferência.

---
**Origem:** [I21.131] ADITIVO — `I21.131  - Aditivo Projeto PMB - Posto Virtual C2.docx`  
**Heading:** Cenário 2 – Conferência com alteração na lógica da balança  
**Score:** — (semantico) | **ID:** 1d823247dbbac5a1

Neste cenário, a coleta no posto virtual será implementada através da criação de um posto virtual contendo múltiplos endereços virtuais, os quais representarão os itens a serem considerados no processo de validação.
A proposta introduz uma lógica de validação parcial na balança, permitindo que parte dos itens do pedido seja validada automaticamente por peso, enquanto os itens associados aos endereços virtuais sejam direcionados para conferência manual. Essa abordagem tem como objetivo aumentar a eficiência operacional, reduzindo a necessidade de conferência completa quando aplicável.

---
**Origem:** [I21.131] ADITIVO — `I21.131  - Aditivo Projeto PMB - Posto Virtual C2.docx`  
**Heading:** Estrutura do Posto de Coleta Virtual  
**Score:** — (semantico) | **ID:** a5e67365c2f17baf

Será criado um posto virtual no sistema, o qual conterá múltiplos endereços virtuais associados. Esses endereços representarão posições lógicas onde estarão cadastrados os itens que deverão ser considerados durante a conferência.
A vinculação entre pedido/caixa e o posto virtual será o elemento chave para ativação do fluxo. Sempre que uma caixa tiver itens que estão associados a este posto, o sistema deverá tratá-la dentro do contexto de conferência.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJETO PTLSP - ESPECIFICACAO DE SOFTWARE ADITIVOS - REV 1.4.docx`  
**Heading:** Cancelamento de Ordens  
**Score:** — (semantico) | **ID:** 0870e72bcc62b470

Problema: O fluxo de cancelamento de ordens atual não permite o cancelamento de pedidos que já estão em processamento físico na esteira.
Solução Proposta (Invent): A Invent propôs uma alteração no MFC para tratar o cancelamento. Em vez de "deletar" a ordem (o que falha se ela estiver em processo), o MFC será alterado para setar um status de “CANCELADA" na ordem.
Regra de Negócio (Invent):
Ordem Não Iniciada: Se o MFC receber a instrução de cancelamento antes de a caixa ser induzida, a ordem será marcada como "CANCELADA" e não será iniciada.
Ordem em Andamento: Se a ordem já estiver na linha, o MFC aceitará a instrução, marcará a ordem como "CANCELADA" internamente, mas permitirá que ela termine o fluxo da esteira. Ao final do percurso, a ordem será automaticamente desviada para a linha de conferência.
Fluxo de Comunicação (Proposta):
O SAP (cliente) tentará primeiro o cancelamento direto na Pollux (para ordens UNITIZA).
Independentemente da resposta da Pollux, o SAP enviará a instrução de cancelamento ao MFC, que aplicará a regra acima.
Ponto Pendente (UNITIZA): Uma vez que enviado para Pollux não temos como cancelar essa ordem de produção. A solução seria quando a caixa chegar no PTW e a caixa for lida, essa caixa será cancelada, onde aparecerá uma mensagem na tela sinalizando isso, evitando a separação e a demais operação.

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Exportação  
**Score:** — (semantico) | **ID:** 576effa419753c20

A tabela de eventos pode ser exportada nos formatos Excel (.xlsx) e PDF, reutilizando o mecanismo de exportação já implementado em outras telas do WCS Velox. O arquivo exportado contém todos os registros do período filtrado, incluindo os campos da tabela descritos na seção 7.4.

---
**Origem:** [I25.132] ADITIVO — `I25.132 - Aditivo Projeto Dia a Dia - Retorno de Montagem.docx`  
**Heading:** Problema / Impacto Observado  
**Score:** — (semantico) | **ID:** 5f4f7584debffd3a

A ausência da granularidade por etiqueta e destino no retorno de montagem impacta diretamente o fechamento preciso de volumes no WMS, especialmente nos seguintes cenários:
Múltiplos destinos na mesma onda/produto: não é possível distinguir para qual loja a montagem foi realizada.
Montagem parcial por loja: não há como identificar quais etiquetas foram efetivamente montadas em cada destino.
Reflexo no Consinco: impossibilidade de atualizar somente as etiquetas efetivamente montadas no destino correto, comprometendo a integridade da informação operacional.
Mitigações já aplicadas no lado WMS:
Envio total por destino.
Alocação de retorno por SEQLOTE.
Vínculo 1 retorno ↔ 1 etiqueta.
Apesar das mitigações, a solução definitiva depende da evolução do retorno Invent, de modo que traga a mesma granularidade de controle utilizada no Consinco.

---
**Origem:** [I25.132] ADITIVO — `I25.132 - Aditivo Projeto Dia a Dia - Solicitação de Evolução.docx`  
**Heading:** Problema / Impacto Observado  
**Score:** — (semantico) | **ID:** 6eaaeb6973292a11

A ausência da granularidade por etiqueta e destino no retorno de montagem impacta diretamente o fechamento preciso de volumes no WMS, especialmente nos seguintes cenários:
Múltiplos destinos na mesma onda/produto: não é possível distinguir para qual loja a montagem foi realizada.
Montagem parcial por loja: não há como identificar quais etiquetas foram efetivamente montadas em cada destino.
Reflexo no Consinco: impossibilidade de atualizar somente as etiquetas efetivamente montadas no destino correto, comprometendo a integridade da informação operacional.
Mitigações já aplicadas no lado WMS:
Envio total por destino.
Alocação de retorno por SEQLOTE.
Vínculo 1 retorno ↔ 1 etiqueta.
Apesar das mitigações, a solução definitiva depende da evolução do retorno Invent, de modo que traga a mesma granularidade de controle utilizada no Consinco.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Relatório de Backlog de Separação  
**Score:** — (semantico) | **ID:** d0cc222ea718c762

Objetivo: Visão consolidada das ondas em processamento, identificando volume de pedidos pendentes de separação e apoiando a priorização operacional de picking, indução e alocação nos PTLs.
Colunas: Data Onda | Onda | Cargas | Volumes | Não Iniciado | Em Separação | Em Indução | Sorter | Alocado | % Conclusão.
Não Iniciado: volumes cuja etiqueta ainda não foi impressa.
Em Separação: volumes com etiqueta já impressa aguardando ou em execução de separação.
Em Indução: volumes com separação finalizada pendentes de indução no Stage.
Sorter: volumes que passaram pelo Sorter com etiqueta reconhecida. Cada volume contado apenas uma vez — recirculações não recontabilizam.
Alocado: volumes alocados nos PTLs. Volumes alocados diretamente sem passagem confirmada pelo Sorter devem ser contabilizados aqui e decrementados da coluna anterior correspondente.
% Conclusão: (Alocado / Volumes) × 100. Cores: Vermelho ≤ 70% | Amarelo 70–95% | Verde > 95%.
Estrutura do relatório:

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 05eff69c33fffedc

ESPECIFICAÇÃO SOFTWARE
Projeto VIRTUAL Jundiai – SP – I20.108
Rev13

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.4. Mezanino  
**Score:** — (semantico) | **ID:** 06f066a32d173518

No mezanino a regra para decisão de desvio será:
Mono: Desvio 0001 – Irá descer e passar reto pelo PTW até chegar no packing, onde irá parar e ser separado
Multi: Desvio 0001 – Deverá descer e desviar no PTW conforme regra do mapa já enviado.
Loja: Desvio 0003 – Deverá desviar à direita e ir para a rampa de cima, seguindo diretamente para o sorter, onde será desviado para as rampas da esquerda nos PTL’s.

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.5.2 TELA DO PTW (PDV)  
**Score:** — (semantico) | **ID:** c339b53097b2deb2

Haverá uma caixa de texto que será efetuado:
1. Leitura de pacotes: caixa onde será lido e designado em qual posição o pacote será alocado.
2. Leitura de casulo: onde será lido as posições, a fim de identificar o que está alocado na mesma, e/ou finalizar o picking.
Abaixo da caixa de texto haverá lista com todas as posições do posto e quantidade de volumes alocados no seguinte formato:
PTW01 - E – 56 0/1
Sendo respectivamente posto, prateleira e posição e quantidade alocada/quantidade total.
Não é necessário aparecer todas as posições, pode ser feito descendo na tela pela barra de rolagem, ao clicar em uma das posições será possível visualizar as informações referentes a posição. Mesmo pop up de leitura do casulo.

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.5.3 MODO DE FUNCIONAMENTO (PTW)  
**Score:** — (semantico) | **ID:** d93191b989f76049

Ao ler um pacote aparecerá uma tela com fundo azul e o número da posição a inserir o volume, o led acenderá em azul e a confirmação de alocação do pacote será feita ao pressionar o led, indicando na tela alocação feita com sucesso e automaticamente voltando ao campo de leitura de pacote aguardando a próxima alocação.
Ao ler o código de um casulo, aparecer pop up indicando os dados da posição, dados como: Volumes alocados dentro dela, quantidade faltante, SKU, picking, número do pedido e data de alocação com horário de cada pacote.
O PTW deverá considerar o código de batch enviado na interface. Manhattan será configurado para enviar a quantidade de pedidos igual a de posições do PTW.
O código batch é sequencial, nesse caso, conforme o batch for finalizado no WCS, um novo deverá sobrescrever para aquela estação
Quando a caixa for desviada para dentro da estação PTW, operador deverá bipar apenas o código tote no WCS e seguir com a alocação na posição.
Ao receber a notificação que as posições estão finalizadas, o operador deve retirar o pedido e fazer a consolidação no Manhattan, após isso encaminhado para o packing.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** a14d7dfc6b61a778

ESPECIFICAÇÃO SOFTWARE
Projeto VIRTUAL Jundiai – SP – I20.108
Rev17

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.4. Mezanino  
**Score:** — (semantico) | **ID:** c733a95a817b6a14

No mezanino a regra para decisão de desvio será:
Mono: Desvio 0001 – Irá descer e passar reto pelo PTW até chegar no packing, onde irá parar e ser separado
Multi: Desvio 0001 – Deverá descer e desviar no PTW conforme informações de número de batch e conta corrente.
Loja: Desvio 0003 – Deverá desviar à direita e ir para a rampa de cima, seguindo diretamente para o sorter, onde será desviado para as rampas da esquerda nos PTL’s.

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.5.2 TELA DO PTW (PDV)  
**Score:** — (semantico) | **ID:** 115bd9b6d470cf52

Entrada e saída do PTW será realizada pelo WMS

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.5.3 MODO DE FUNCIONAMENTO (PTW)  
**Score:** — (semantico) | **ID:** ac8d0609115239be

Ao ler a etiqueta do tote aparecerá uma tela com fundo azul e o número da posição a inserir o volume, o led acenderá em azul e a confirmação de alocação do pacote será feita ao pressionar o led, indicando na tela alocação feita com sucesso e automaticamente voltando ao campo de leitura de pacote aguardando a próxima alocação.
Ao ler o código de um casulo, aparecer pop up indicando os dados da posição, dados como: Volumes alocados dentro dela, quantidade faltante, SKU, picking, número do pedido e data de alocação com horário de cada pacote.
O PTW deverá considerar o código de batch enviado na interface. Manhattan será configurado para enviar a quantidade de pedidos igual a de posições do PTW.
O código batch é sequencial, nesse caso, conforme o batch for finalizado no WCS, um novo deverá sobrescrever para aquela estação
Quando a caixa for desviada para dentro da estação PTW, operador deverá bipar apenas o código tote no WCS e seguir com a alocação na posição.
Ao receber a notificação que as posições estão finalizadas, o operador deve retirar o pedido e fazer a consolidação no Manhattan, após isso encaminhado para o packing.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** WMS  MFC  
**Score:** — (semantico) | **ID:** c3ee40e1db28b85e

O WMS irá disponibilizar o arquivo de integração via webservice com as informações relativas aos pedidos Batch Picking, o WCS recebe a informação e processa para transportar a caixa em toda linha e encaminhar a caixa ao setor de PUT-TO-WALL para separação dos produtos.
EV;5615897;202504797;20230619130915;UC4USER;20230619130915;ADD;WPO;02;
WP;5615897;202504797;1;10;0;20210306130000;;CL;
CO;5615897;202504797;1;2;10;0;CL;100112133;0.814;;
FP;5615897;202504797;1;CM;75284633;10;
LD;5615897;202504797;1;NATURA COSMÉTICOS;;;FRANCISCA FERNANDES DA SILVA S;MAR ALTO, 72;JARAGUA;SP-GRACA ARANHA SP;05181-350;;;;3;D03;001/001;202504797;05/03/2021;100112133;TGESTIONA RECIFE;994755;OL;930887470;0;06/03/2021;400205/5;NSPN74;0.924;;;0930887470001;
WS;5615897;202504797;1;;1;10;0;GET;;1;50296246;;TODODIA DES HID AMORA VER JABUT RF 400ML;;0;0;
WS;5615897;202504797;1;;2;10;0;GET;;1;50413176;;CAIXA TRANSVERSAL SELO M;;0;0;
WS;5615897;202504797;1;;3;10;0;GET;;1;50326563;;TODODIA RF SAB LIQ CEREJA E AVELA 300ML;;0;0;
FP;5615897;202504797;1;D03;0;10;
EV;5615897;202504799;20230619130915;UC4USER;20230619130915;ADD;WPO;02;
WP;5615897;202504799;1;10;0;20210306130000;;CL;
CO;5615897;202504799;1;2;10;0;CL;100112132;0.814;;
FP;5615897;202504799;1;CM;75284633;10;
LD;5615897;202504799;1;NATURA COSMÉTICOS;;;FRANCISCA FERNANDES DA SILVA S;MAR ALTO, 72;JARAGUA;SP-GRACA ARANHA SP;05181-350;;;;3;D03;001/001;202504799;05/03/2021;100112132;TGESTIONA RECIFE;994755;OL;930887471;0;06/03/2021;400205/5;NSPN74;0.924;;;0930887471001;
WS;5615897;202504799;1;;1;10;0;GET;;1;50296246;;TODODIA DES HID AMORA VER JABUT RF 400ML;;0;0;
WS;5615897;202504799;1;;2;10;0;GET;;1;50413176;;CAIXA TRANSVERSAL SELO M;;0;0;
WS;5615897;202504799;1;;3;10;0;GET;;1;50326563;;TODODIA RF SAB LIQ CEREJA E AVELA 300ML;;0;0;
FP;5615897;202504799;1;D03;0;10;
EV;5615897;202504798;20230619130915;UC4USER;20230619130915;ADD;WPO;02;
WP;5615897;202504798;1;10;0;20210306130000;;CL;

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Confirmação de finalização do batch Picking PTW (BPAvonNat)  
**Score:** — (semantico) | **ID:** 1c74b5a270669b8e

MFC  WMS
O WCS envia a informação de retorno BPAvonNat após a confirmação da separação da caixa “filha”, para o WMS com as informações do cliente final, produto e pedido.
WP;400000841;1003009906;1;10;0;20210811000000;;CA
CO;400000841;1003009906;1;2;10;0;CA;200109489;0.03;C06
FP;400000841;1003009906;1;CM;200109491;10
LD;400000841;1003009906;1;Avon CosmÃ©ticos S/A;;;MANUEL HUMBERTO PAUCAR MOSTAC;LIMA 543;RUA;SURCO RegiÃ£o de Lima;;20210811;;;2;D01;001/001;1003009906;12/2021;200109489;ANDES EXPRESS S.A.C 1-20508022;;;;OCEANOAZUL-;;004288/002;;0.03;;X;10030099060019

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Balança 03 - CrossCheck  
**Score:** — (semantico) | **ID:** 46304faa6b71964c

Balança final que verifica se o peso aferido corresponde ao peso esperado dentro da tolerância, após a validação a caixa segue reto com a direção 0001 para as fechadoras de caixa ou segue para a direita direção 0002 para rejeito, conferência e PTW. Após a passagem da caixa no scanner que antecede a balança o PLC aguarda a pesagem para mandar a informação de etiqueta e peso da caixa depois do envio do NDIR com essas informações e o WCS verifica se a caixa está dentro da tolerância de peso, se é um batch Picking, conferência obrigatória e ShortPicking, após a validação o WCS envia a direção de desvio.
Tolerâncias: Deve ser controlada por Gramas (Esta customização deverá estar disponível no MFC para ser alterada a qualquer momento)

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** WMS  WCS  
**Score:** — (semantico) | **ID:** 3c2966a0d255a23b

O WMS irá disponibilizar o arquivo de integração via webservice com as informações relativas aos pedidos Batch Picking, o WCS recebe a informação e processa para transportar a caixa em toda linha e encaminhar a caixa ao setor de PUT-TO-WALL para separação dos produtos.
EV;5615897;202504797;20230619130915;UC4USER;20230619130915;ADD;WPO;02;
WP;5615897;202504797;1;10;0;20210306130000;;CL;
CO;5615897;202504797;1;2;10;0;CL;100112133;0.814;;
FP;5615897;202504797;1;CM;75284633;10;
LD;5615897;202504797;1;NATURA COSMÉTICOS;;;FRANCISCA FERNANDES DA SILVA S;MAR ALTO, 72;JARAGUA;SP-GRACA ARANHA SP;05181-350;;;;3;D03;001/001;202504797;05/03/2021;100112133;TGESTIONA RECIFE;994755;OL;930887470;0;06/03/2021;400205/5;NSPN74;0.924;;;0930887470001;
WS;5615897;202504797;1;;1;10;0;GET;;1;50296246;;TODODIA DES HID AMORA VER JABUT RF 400ML;;0;0;
WS;5615897;202504797;1;;2;10;0;GET;;1;50413176;;CAIXA TRANSVERSAL SELO M;;0;0;
WS;5615897;202504797;1;;3;10;0;GET;;1;50326563;;TODODIA RF SAB LIQ CEREJA E AVELA 300ML;;0;0;
FP;5615897;202504797;1;D03;0;10;
EV;5615897;202504799;20230619130915;UC4USER;20230619130915;ADD;WPO;02;
WP;5615897;202504799;1;10;0;20210306130000;;CL;
CO;5615897;202504799;1;2;10;0;CL;100112132;0.814;;
FP;5615897;202504799;1;CM;75284633;10;
LD;5615897;202504799;1;NATURA COSMÉTICOS;;;FRANCISCA FERNANDES DA SILVA S;MAR ALTO, 72;JARAGUA;SP-GRACA ARANHA SP;05181-350;;;;3;D03;001/001;202504799;05/03/2021;100112132;TGESTIONA RECIFE;994755;OL;930887471;0;06/03/2021;400205/5;NSPN74;0.924;;;0930887471001;
WS;5615897;202504799;1;;1;10;0;GET;;1;50296246;;TODODIA DES HID AMORA VER JABUT RF 400ML;;0;0;
WS;5615897;202504799;1;;2;10;0;GET;;1;50413176;;CAIXA TRANSVERSAL SELO M;;0;0;
WS;5615897;202504799;1;;3;10;0;GET;;1;50326563;;TODODIA RF SAB LIQ CEREJA E AVELA 300ML;;0;0;
FP;5615897;202504799;1;D03;0;10;
EV;5615897;202504798;20230619130915;UC4USER;20230619130915;ADD;WPO;02;
WP;5615897;202504798;1;10;0;20210306130000;;CL;

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Confirmação de finalização do batch Picking PTW (BPAvonNat)  
**Score:** — (semantico) | **ID:** 4f786f15800f2ced

WCS  WMS
O WCS envia a informação de retorno BPAvonNat após a confirmação da separação da caixa “filha”, para o WMS com as informações do cliente final, produto e pedido.
WP;400000841;1003009906;1;10;0;20210811000000;;CA
CO;400000841;1003009906;1;2;10;0;CA;200109489;0.03;C06
FP;400000841;1003009906;1;CM;200109491;10
LD;400000841;1003009906;1;Avon CosmÃ©ticos S/A;;;MANUEL HUMBERTO PAUCAR MOSTAC;LIMA 543;RUA;SURCO RegiÃ£o de Lima;;20210811;;;2;D01;001/001;1003009906;12/2021;200109489;ANDES EXPRESS S.A.C 1-20508022;;;;OCEANOAZUL-;;004288/002;;0.03;;X;10030099060019

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Balança 03 - CrossCheck  
**Score:** — (semantico) | **ID:** 432ea7d7bc391c2e

Balança final que verifica se o peso aferido corresponde ao peso esperado dentro da tolerância, após a validação a caixa segue reto com a direção 0001 para as fechadoras de caixa ou segue para a direita direção 0002 para rejeito, conferência e PTW. Após a passagem da caixa no scanner que antecede a balança o PLC aguarda a pesagem para mandar a informação de etiqueta e peso da caixa depois do envio do NDIR com essas informações e o WCS verifica se a caixa está dentro da tolerância de peso, se é um batch Picking, conferência obrigatória e ShortPicking, após a validação o WCS envia a direção de desvio.
Tolerâncias: Deve ser controlada por Gramas (Esta customização deverá estar disponível no WCS para ser alterada a qualquer momento)

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Put to Wall (PTW)  
**Score:** — (nome-topico) | **ID:** 44043c2cebaf7ab2

O Sistema WCS irá verificar a cubagem da caixa e enviar para o PTW pedidos multi order, (podendo chegar a 8 pedidos por caixa), esses pedidos serão finalizados em cada estação não sendo possível a movimentação entre estações.
O Sistema WCS deverá verificar se o pedido cabe em uma única posição do PTW antes de aceitar que ele seja um pedido multi order (dimensões de cada posição: Altura 39 cm x Largura 33 cm).
Esta caixa contendo mais de um pedido, deverá realizar a separação de todos os pedidos que ela contém e após finalizado, ser direcionado para o PTW.
Na parte da frente do PTW não haverá tela.
No PTW o operador de cada estação deverá ler a caixa de batch picking em um scanner fixo para abrir o put to wall. Após essa operação o operador deverá ler o EAN de cada produto desmembrando e alocando nas posições a sua frente orientado pela luz verde e confirmando no botão após a alocação de cada produto. Esse processo deverá se repetir até acabar todos os itens desta caixa.
Na parte de trás do flowrack haverá um computador + uma impressora (Cliente).
Na parte de trás do Flowrack, o operador deverá bipar em um scanner fixo a caixa Tote para vincular cada pedido conforme a posição de cada luz e posteriormente apertar o botão para validação. Será um Tote para cada pedido. Só podendo alocar a partir do momento que a luz estiver acesa, indicando que não há mais produtos a serem colocados naquela posição.
Após vincular o pedido a caixa Tote e colocar os produtos dentro da caixa, o operador deverá confirmar no led e soltar a caixa na linha.
Serão 2 estações de Put to Wall, cada uma delas terá os equipamentos abaixo:
- 16 leds, sendo 8 frente e 8 costas (Invent) = Total 32 leds
- 2 scanners, sendo 1 frente e 1 costas (Invent) = Total 4 Scanners
- 1 computador (fornecimento do cliente) = Total 2 computadores
- 1 concentrador para todas as posições (Invent) = Total 1 concentrador
- 1 Impressora (fornecimento do cliente) = Total 2 impressoras.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** fcd38c6b5a1ba581

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo WCS. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** 67fbeacbd2371e66

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo WCS. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Rota x endereço  
**Score:** — (semantico) | **ID:** b10ecdc33bf43a83

Para relacionar uma rota com um endereço de consolidação, a tela de rota x endereço é disponibilizada pelo WCS. Assim, para cada rota, o usuário deverá especificar um posto de trabalho e um endereço.
A Figura mostra um exemplo dessa tela onde as rotas BGZ_AER e RIO_AER foram alocadas em dois endereços do posto 1.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** b1515a6371428973

DESCRITIVO UNIFICADO
VENUS
PTW(PUT-TO-WALL)
PICKING RACK
REABASTECIMENTO
PTM(PUT-TO-MONITOR)
CONFIDENCIAL © 2022, INVENT COMÉRCIO E SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL CONFIDENCIAL, PROIBIDA SUA REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS SEM PRÉVIA AUTORIZAÇÃO.
Por que Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os
resultados de nossos clientes
DESCRITIVO SOFTWARE
UNIFICADO
I22.150 – 28/Fevereiro/2023
Rev3
VENUS
PTW (PUT-TO-WALL)
PICKING RACK
REABASTECIMENTO
PTM (PUT-TO-MONITOR)

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** PTW – PUT TO WALL  
**Score:** — (semantico) | **ID:** 0a30037cfea91b43

A estação de PTW terá 30 posições, cada posição terá um led para indicar visualmente o operador, onde deverá alocar/retirar o volume.
O PTW irá funcionar para combinar os volumes de CARTONS que contenham mais de 1 caixa por pedido, por exemplo (pedidos MISTOS e pedidos UNITIZA e Multi Volumes). Tanto das operações Dolce Gusto como Vênus.
Quando um volume de um CARTON que se encaixa nesse cenário chegar na estação de PTW, através de um Leitor Fixo na linha, ocorrerá a leitura do código de barras da caixa e uma posição do PTW deverá acender informando que o operador deve alocar esse volume nessa posição acesa, na cor AZUL.
PLC: A caixa deverá parar no próximo sensor após o ponto de leitura. Caso não ocorra a leitura, a caixa deverá permanecer também no sensor seguinte ao do Leitor Fixo na linha e nenhum Led deverá ser aceso.
O Operador deverá alocar o volume no endereço indicado pelo led aceso (AZUL) e apertar o botão para confirmar que alocou o volume. Nesse momento o led apagará.
PLC: Após acionamento, a esteira se movimenta, trazendo o próximo volume para tratamento. Reforço: Enquanto o volume lido pelo “leitor fixo da linha” não tiver sido alocado no endereço (ação do colaborador em apertar o botão AZUL), a próximo volume que estará vindo na esteira, deve permanecer aguardando no último sensor anterior ao do “leitor fixo da linha”.
Os volumes contidos em um mesmo CARTON (Caixa MASTER) deverão ser alocados no mesmo endereço do PUT TO WALL em múltiplos de 3, ou seja, limitados à três volumes por endereço.
Ex. caso o Carton (caixa Master) tenha 5 volumes, os três primeiros serão alocados no endereço 1, o 4º volume será alocado no endereço 2 e o 5º Volume ficará aguardando na esteira. Na sequência há o detalhamento de como ocorrerá o tratamento para o Último Volume do CARTON.
Ao receber o último volume do CARTON (volume lido no “leitor fixo na linha”), será informado na tela do Order Starter, a CAIXA MASTER ou FLYER (SACO KRAFT) que deve ser montada para aquele CARTON e as mesmas posições em que os volumes foram alocados do mesmo CARTON, acenderão agora na cor ROSA, informando ao operador que ele deve retirar os volumes daquele endereço.
O colaborador deverá montar a caixa de tamanho sugerido e realizar a leitura do QR Code da caixa pelo Leitor Móvel instalado no PC.
Nesse instante, ocorrerá a impressão da etiqueta de expedição.
O operador deverá colar a etiqueta na caixa montada.
Nessa caixa que foi montada o operador deverá inserir tanto o volume que está na esteira (Último volume do Carton) como os volumes que estão aparecendo nas posições acesas na cor ROSA.
O colaborador deve confirmar o Picking acionando o botão de cada ponto de Picking.
Após concluir o Picking dos volumes nos endereços acesos em ROSA, todos os Leds deverão acender em VERDE indicando que o processo de picking daquele carton, naquele posto, terminou.
Neste instante, o sistema deverá validar se o próximo posto de Picking (ORDER START 1) possui 100% dos materiais para concluir, caso negativo, os Leds do PTW deverão acender em VERMELHO, indicando que este CARTON precisará ser complementado pelo fluxo de Picking Rack.
O colaborador retira esse CARTON da esteira, o coloca em uma estante ou carrinho com a indicação de “necessário complemento”, e aciona o Led VERMELHO.
Esse CARTON deverá inicialmente ser complementado para posteriormente ser inserido na esteira do ORDER START 1 ou ORDER START 2.
Pedidos MISTOS completos serão inseridos na esteira para seguir para o ORDER START 1 onde serão complementados com outros materiais do PTL.
Pedidos UNITIZA serão inseridos na esteira que segue direto para expedição.
PLC: após acionar o led VERDE ou VERMELHO, a esteira deverá avançar, trazendo o próximo volume para tratamento.
PLC: Ao ser retirado o volume da linha, a esteira deve permanecer imóvel até que sejam dados os comandos conforme previstos acima.
Se por engano uma caixa for retirada do PUT to WALL, para evitar inversões, é necessário incluir funcionalidade onde o colaborador ao bipar o volume, o PTW deve indicar o endereço a ser realocado aquele Volume. Nesse caso o LED deverá acender AMARELO.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 09527e510559c4b4

DESCRITIVO UNIFICADO
VENUS
PICKING RACK
REABASTECIMENTO
PTW(PUT-TO-WALL)
PTM(PUT-TO-MONITOR)
CONFIDENCIAL © 2022, INVENT COMÉRCIO E SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL CONFIDENCIAL, PROIBIDA SUA REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS SEM PRÉVIA AUTORIZAÇÃO.
Por que Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os
resultados de nossos clientes
DESCRITIVO SOFTWARE
UNIFICADO
I22.150 – 30/Dezembro/2022
VENUS
PICKING RACK
REABASTECIMENTO
PTW (PUT-TO-WALL)
PTM (PUT-TO-MONITOR)

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** PTW – PUT TO WALL  
**Score:** — (semantico) | **ID:** 6ea921f9d7b31920

A estação de PTW terá 40 posições, cada posição terá um led para indicar visualmente o operador, onde deverá alocar/retirar o volume.
O PTW irá funcionar para combinar os volumes de CARTONS que contenham mais de 1 caixa por pedido, por exemplo (pedidos MISTOS e pedidos UNITIZA). Tanto das operações Dolce Gusto como Vênus.
Quando um volume de um CARTON que se encaixa nesse cenário chegar na estação de PTW, através de um Leitor Fixo na linha, ocorrerá a leitura do código de barras da caixa e uma posição do PTW deverá acender informando que o operador deve alocar esse volume nessa posição acesa, na cor AZUL.
PLC: A caixa deverá parar no próximo sensor após o ponto de leitura. Caso não ocorra a leitura, a caixa deverá permanecer também no sensor seguinte ao do Leitor Fixo na linha e nenhum Led deverá ser aceso.
O Operador deverá alocar o volume no endereço indicado pelo led aceso (AZUL) e apertar o botão para confirmar que alocou o volume. Nesse momento o led apagará.
PLC: Após acionamento, a esteira se movimenta, trazendo o próximo volume para tratamento. Reforço: Enquanto o volume lido pelo “leitor fixo da linha” não tiver sido alocado no endereço (ação do colaborador em apertar o botão AZUL), a próximo volume que estará vindo na esteira, deve permanecer aguardando no último sensor anterior ao do “leitor fixo da linha”.
Os volumes contidos em um mesmo CARTON (Caixa MASTER) deverão ser alocados no mesmo endereço do PUT TO WALL em múltiplos de 3, ou seja, limitados à três volumes por endereço.
Ex. caso o Carton (caixa Master) tenha 5 volumes, os três primeiros serão alocados no endereço 1, o 4º volume será alocado no endereço 2 e o 5º Volume ficará aguardando na esteira. Na sequência há o detalhamento de como ocorrerá o tratamento para o Último Volume do CARTON.
Ao receber o último volume do CARTON (volume lido no “leitor fixo na linha”), será informado na tela do Order Starter, a CAIXA MASTER ou FLYER (SACO KRAFT) que deve ser montada para aquele CARTON e as mesmas posições em que os volumes foram alocados do mesmo CARTON, acenderão agora na cor ROSA, informando ao operador que ele deve retirar os volumes daquele endereço.
O colaborador deverá montar a caixa e realizar a leitura do QR Code da caixa pelo Leitor Móvel instalado no PC.
Nesse instante, ocorrerá a impressão da etiqueta.
O operador deverá colar a etiqueta na caixa, inserir na caixa tanto o volume que está na esteira (Último volume do Carton) como os volumes que estão aparecendo nas posições acesas na cor ROSA.
O colaborador deve confirmar o Picking acionando o botão de cada ponto de Picking.
Após concluir o Picking dos volumes nos endereços acesos em ROSA, todos os Leds deverão acender em VERDE indicando que o processo de picking daquele carton, naquele posto, terminou.
Neste instante, o sistema deverá validar se o próximo posto de Picking (ORDER START 1) possui 100% dos materiais para concluir, caso negativo, os Leds do PTW deverão acender em VERMELHO, indicando que este CARTON precisará ser complementado pelo fluxo de Picking Rack.
O colaborador retira esse CARTON da esteira, o coloca em uma estante ou carrinho com a indicação de “necessário complemento”, e aciona o Led VERMELHO.
Esse CARTON deverá inicialmente ser complementado para posteriormente ser inserido na esteira do ORDER START 1 ou ORDER START 2.
Pedidos MISTOS completos serão inseridos na esteira para seguir para o ORDER START 1 onde serão complementados com outros materiais do PTL.
Pedidos UNITIZA serão inseridos na esteira que segue direto para expedição.
PLC: após acionar o led VERDE ou VERMELHO, a esteira deverá avançar, trazendo o próximo volume para tratamento.
PLC: Ao ser retirado o volume da linha, a esteira deve permanecer imóvel até que sejam dados os comandos conforme previstos acima.
Se por engano uma caixa for retirada do PUT to WALL, para evitar inversões, é necessário incluir funcionalidade onde o colaborador ao bipar o volume, o PTW deve indicar o endereço a ser realocado aquele Volume. Nesse caso o LED deverá acender AMARELO.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF4 – Cancelamento de ordem de entrada ou saída  
**Score:** — (semantico) | **ID:** b197ee4f3a94dd6b

O WCS Velox deve ser capaz de cancelar ordens de entrada ou saída de pallets pendentes (que não foram processadas) vindas do SAP WM.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF4 – Cancelamento de ordem de entrada ou saída  
**Score:** — (semantico) | **ID:** a795996c55729b30

O WCS Velox deve ser capaz de cancelar ordens de entrada ou saída de pallets pendentes (que não foram processadas) vindas do SAP WM.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Put To Wall  
**Score:** — (nome-topico) | **ID:** a3a9503c884b1b4d

O Put To Wall contará com 100 posições com Leds frente e costas para realizar a separação dos pedidos conformes que possuírem poucas unidades.
Há um setor dedicado com 50 posições com Leds frente e costas para realizar a separação dos pedidos fora de perfil que possuem poucas unidades.
O PTW é composto por 15 nichos grandes (600 X 600 X 1000) e 35 pequenos (340 X 340 X 1000).
O Velox será responsável por cubar os pedidos destinados ao PTW para melhor alocá-los nas posições grandes ou pequenas.
O setor do Put Wall será direcionado para os pedidos que não atingirem a ocupação mínima da caixa por conta de poucas unidades, baixa coleta na zona estabelecida ou entre outros motivos. Sendo assim o sistema irá vincular mais pedidos que se encaixam nessa mesma situação em uma única caixa.
Após realizado todo o processo de coleta desses pedidos, a caixa será destinada para a linha de Put To Wall onde será separado todos os itens nos nichos, sendo um pedido por nicho.
O sistema irá vincular os pedidos que estão dentro daquela caixa a uma posição do PTW de maneira automática (caso já não estejam alocados em nenhuma posição). Com a realização desse processo, ao realizar a leitura do EAN de cada item da caixa, será indicado através do LED que estiver na cor verde, onde o operador deve alocar o item.
Quando todos os itens do pedido que eram aguardados no PTW forem alocados, o Led das costas do PTW irá acender na cor azul, e o operador por sua vez deverá confirmar o fechamento do nicho pressionando o Led, assim o nicho será finalizado por completo e o operador deve levar manualmente os produtos para a conferência/Packing deste pedido.

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** cecbf986d463958a

Teremos 1 (uma) linha de separação, contendo 3 (três) postos de separação.
Cada posto terá:
1 (um) operador por posto.
1 (um) PDV por posto
1 (um) Finger Scanner por posto
56 (cinquenta e seis) posições de separação sendo 1 (uma) posição por item.
Cada posição será composta por:
1 (um) botão com display 3 (três) dígitos.
Imagem display 3 (três) dígitos com botão led:
Podendo haver a necessidade de 1 (um) mesmo item cadastrado em diferentes postos.
Operador ao receber a caixa no posto de separação, terá 3 (três) possíveis locais para realizar a separação do pedido no respectivo posto.
Frente – 16 (dezesseis) posições
Lateral Direito – 20 (vinte) posições
Lateral Esquerdo – 20 (vinte) posições
Totalizando – 56 (cinquenta e seis) posições/itens em cada posto.
Com isso, as posições dos itens solicitados para separação deverão acender informando qual a quantidade a ser separada daquele item com a sua posição em evidência.
Ao verificar as posições acesas irá realizar a separação de cada posição conforme a quantidade e cor do botão da posição.
Por exemplo:
Para a separação de unidades fracionadas a cor na posição deverá ser acesa em verde e a quantidade de unidades a serem separadas será mostrada no display:
Para a separação de fardos a cor na posição deverá ser acesa em amarelo e quantidade de fardos a serem separados:
Para separação de caixas fechadas (Full Case), a cor na posição deverá ser acesa em rosa e quantidade de caixas fechadas a serem separadas
Para casos de falha na leitura da etiqueta ou código de barras errado, todas as posições do posto deverão ser acesas em vermelho:
Cenário 1:
Caso o volume a ser separado solicite a separação unidades fracionadas, fardos e full case de 1 (um) mesmo item, o operador irá separar primeiro todos os itens de fracionados, em seguida todos os fardos e por último full case.
1° Fracionados
2° Fardos
3° Full Case
Nesse cenário o operador irá separar todos os itens que solicitam fracionados.
As posições que estiverem acesas na cor verde com a quantidade solicitada para ser separada, após essa separação de fracionados, todas as posições acenderão em verde informando que a separação de fracionados foi concluída. Operador aperta qualquer posição para apagar.
Caso tenha produtos a serem separados em fardos, as posições solicitadas acenderão em amarelo com a quantidade solicitada para ser separada, após essa separação, todas as posições acenderão em amarelo informando que a separação de fardos foi concluída. Operador aperta qualquer posição para apagar.
Caso tenha produtos a serem separados full case, as posições solicitadas acenderão em rosa, após essa separação, todas as posições acenderão em rosa informando que a separação de full case e todos os anteriores foi concluída. Operador aperta qualquer posição para apagar, e iniciar uma nova separação de um novo volume.
Ao final desse documento, existe um fluxograma detalhando esse processo de separação mencionado acima.
ShortPicking
Em casos que o operador verifique que a quantidade fisica do produto solicitado para separação é inferior que a quantidade solicitada pelo sistema no pedido, operador deverá apertar o botão de menor, para decrementar a quantidade no display da posição, com isso realiza a separação dos itens que estão disponíveis fisicamente e aperta o botão principal para confirmar que a quantidade que foi separada é aquela atual que está setada/mostrada no display.
Exemplo: No volume está solicitando a separação de 10 (dez) unidades do item 'xpto', operador ao iniciar a separação, nota que fisicamente existe apenas 8 (oito) unidades desse item, operador irá apertar o botão 2 (duas) vezes para decrementar a quantidade até 8 (oito), realiza o processo de separação das 8 (oito) unidades e aperta o botão principal para confirmar a separação de 8 (oito) unidades.
Imagem exemplo:

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** ca730712d661db95

O WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS e deve aceitar uma integração de cancelamento partindo do WMS. Ao cancelar um pedido temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso o pedido seja cancelado após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito ou conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Put To Wall  
**Score:** — (nome-topico) | **ID:** 4389812f09c18f7b

O Put To Wall contará com 100 posições com Leds frente e costas para realizar a separação dos pedidos conformes que possuírem poucas unidades.
Há um setor dedicado com 50 posições com Leds frente e costas para realizar a separação dos pedidos fora de perfil que possuem poucas unidades.
O PTW é composto por 15 nichos grandes (600 X 600 X 1000) e 35 pequenos (340 X 340 X 1000).
O Velox será responsável por cubar os pedidos destinados ao PTW para melhor alocá-los nas posições grandes ou pequenas.
O setor do Put Wall será direcionado para os pedidos que não atingirem a ocupação mínima da caixa por conta de poucas unidades, baixa coleta na zona estabelecida ou entre outros motivos. Sendo assim o sistema irá vincular mais pedidos que se encaixam nessa mesma situação em uma única caixa.
Após realizado todo o processo de coleta desses pedidos, a caixa será destinada para a linha de Put To Wall onde será separado todos os itens nos nichos, sendo um pedido por nicho.
O sistema irá vincular os pedidos que estão dentro daquela caixa a uma posição do PTW de maneira automática (caso já não estejam alocados em nenhuma posição). Com a realização desse processo, ao realizar a leitura do EAN de cada item da caixa, será indicado através do LED que estiver na cor verde, onde o operador deve alocar o item.
Quando todos os itens do pedido que eram aguardados no PTW forem alocados, o Led das costas do PTW irá acender na cor azul, e o operador por sua vez deverá confirmar o fechamento do nicho pressionando o Led, assim o nicho será finalizado por completo e o operador deve levar manualmente os produtos para a conferência/Packing deste pedido.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Put To Wall  
**Score:** — (nome-topico) | **ID:** 9e963dc2cf02ae1a

O Put To Wall contará com 100 posições com Leds frente e costas para realizar a separação dos pedidos conformes que possuírem poucas unidades.
Há um setor dedicado com 50 posições com Leds frente e costas para realizar a separação dos pedidos fora de perfil que possuem poucas unidades.
O PTW é composto por 15 nichos grandes (600 X 600 X 1000) e 35 pequenos (340 X 340 X 1000).
O WCS será responsável por cubar os pedidos destinados ao PTW para melhor alocá-los nas posições grandes ou pequenas.
O setor do Put Wall será direcionado para os pedidos que não atingirem a ocupação mínima da caixa por conta de poucas unidades, baixa coleta na zona estabelecida ou entre outros motivos. Sendo assim o sistema irá vincular mais pedidos que se encaixam nessa mesma situação em uma única caixa.
Após realizado todo o processo de coleta desses pedidos, a caixa será destinada para a linha de Put To Wall onde será separado todos os itens nos nichos, sendo um pedido por nicho.
O sistema irá vincular os pedidos que estão dentro daquela caixa a uma posição do PTW de maneira automática (caso já não estejam alocados em nenhuma posição). Com a realização desse processo, ao realizar a leitura do EAN de cada item da caixa, será indicado através do LED que estiver na cor verde, onde o operador deve alocar o item.
Quando todos os itens do pedido que eram aguardados no PTW forem alocados, o Led das costas do PTW irá acender na cor azul, e o operador por sua vez deverá confirmar o fechamento do nicho pressionando o Led, assim o nicho será finalizado por completo e o operador deve levar manualmente os produtos para a conferência/Packing deste pedido.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** ab6140a30f83aaea

Teremos 1 (uma) linha de separação de produtos.
Linha de separação (Frente e Posterior (costas))
1 (um) operador por estação
4 (quatro) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Posições frente e posteriores (costas) não terá leds, todas as informações sobre a separação serão mostradas na tela do PDV de cada estação.
Operador ao receber a caixa na estação, realiza a leitura da etiqueta do volume, com isso o PDV informará as posições/locais de separação para que o operador realize as separações nos locais indicados, ao realizar a separação a tela do PDV é atualizada, ao finalizar a separação, a tela do PDV informará ao operador que finalizou a separação daquela estação.
Para iniciar a separação dos itens na posição, operador deverá realizar a leitura da etiqueta de "produção" do produto solicitado, nessa etiqueta contém as informações do produto e lote, ao realizar a leitura dessa etiqueta de "produção" o sistema Velox valida a informação de Lote, se a informação do lote lido for compatível com a informação do lote solicitado, o sistema Velox então inicia o picking desse produto, operador deve realizar a leitura de todos os itens, item a item, por exemplo: caso no pedido, esteja solicitando a separação de 10 (dez) unidades do mesmo produto, o operador deverá fazer a leitura dos 10 (dez) itens para concluir a separação desse item.
Durante a separação, caso a quantidade solicitada de um lote termine, o operador terá que alterar o lote via sistema Velox, informando o novo lote que será separado daquele produto e iniciar a separação da quantidade restante do produto com o novo lote.
A troca de lote deverá ser autorizada por um usuário com o nível de usuário elevado específico, cadastrado para essa operação/autorização.
Essa etiqueta de "produção" estará disponivel na caixa do produto a ser separado na posição.
Na integração de confirmação, o sistema Velox deve informar os lotes que foram separados para o produto. No caso, quando o produto for separado em 2 (dois) lotes diferentes, Velox deverá informar a quantidade separada de cada lote.
Ao finalizar o picking dos itens da frente da estação, caso exista produtos a serem separados na área posterior (costas) do operador, a tela do PDV será atualizada informando o operador que existe itens pendentes separação na área posterior (costas), e informará na tela do PDV o local e a quantidade a ser separada.
O processo de bipagem da etiqueta de "produção" para validar o lote, se aplica para a separação na frente e área posterior (costas)
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
Descrição do processo operacional de separação:
Realizar a leitura do volume da caixa recebida;
Verificar o PDV quais posições e quantidades solicitando separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade solicitada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todas as posições de separação frente, caso tenha itens a serem separados na área posterior (costas), PDV será atualizado informando quais locais e quantidades;
Operador visualiza no PDV, o local e quantidade de produtos a serem separados na área posterior (costas);
Ao chegar na posição posterior (costas) que irá separar, realizar a leitura da etiqueta de "produção";
Operador deve checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade informada no PDV;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição informada pelo PDV e realiza o mesmo procedimento;
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** 1f9fce56f55e27ee

Teremos 1 (uma) linha de separação de produtos.
Linha de separação (Frente e Posterior (costas))
1 (um) operador por estação
4 (quatro) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Posições frente e posteriores (costas) não terá leds, todas as informações sobre a separação serão mostradas na tela do PDV de cada estação.
Operador ao receber a caixa na estação, realiza a leitura da etiqueta do volume, com isso o PDV informará as posições/locais de separação para que o operador realize as separações nos locais indicados, ao realizar a separação a tela do PDV é atualizada, ao finalizar a separação, a tela do PDV informará ao operador que finalizou a separação daquela estação.
Para iniciar a separação dos itens na posição, operador deverá realizar a leitura da etiqueta de "produção" do produto solicitado, nessa etiqueta contém as informações do produto e lote, ao realizar a leitura dessa etiqueta de "produção" o sistema Velox valida a informação de Lote, se a informação do lote lido for compatível com a informação do lote solicitado, o sistema Velox então inicia o picking desse produto, operador deve realizar a leitura de todos os itens, item a item, por exemplo: caso no pedido, esteja solicitando a separação de 10 (dez) unidades do mesmo produto, o operador deverá fazer a leitura dos 10 (dez) itens para concluir a separação desse item.
Durante a separação, caso a quantidade solicitada de um lote termine, o operador terá que alterar o lote via sistema Velox, informando o novo lote que será separado daquele produto e iniciar a separação da quantidade restante do produto com o novo lote.
A troca de lote deverá ser autorizada por um usuário com o nível de usuário elevado específico, cadastrado para essa operação/autorização.
Essa etiqueta de "produção" estará disponivel na caixa do produto a ser separado na posição.
Na integração de confirmação, o sistema Velox deve informar os lotes que foram separados para o produto. No caso, quando o produto for separado em 2 (dois) lotes diferentes, Velox deverá informar a quantidade separada de cada lote.
Ao finalizar o picking dos itens da frente da estação, caso exista produtos a serem separados na área posterior (costas) do operador, a tela do PDV será atualizada informando o operador que existe itens pendentes separação na área posterior (costas), e informará na tela do PDV o local e a quantidade a ser separada.
O processo de bipagem da etiqueta de "produção" para validar o lote, se aplica para a separação na frente e área posterior (costas)
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
Descrição do processo operacional de separação:
Realizar a leitura do volume da caixa recebida;
Verificar o PDV quais posições e quantidades solicitando separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade solicitada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todas as posições de separação frente, caso tenha itens a serem separados na área posterior (costas), PDV será atualizado informando quais locais e quantidades;
Operador visualiza no PDV, o local e quantidade de produtos a serem separados na área posterior (costas);
Ao chegar na posição posterior (costas) que irá separar, realizar a leitura da etiqueta de "produção";
Operador deve checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade informada no PDV;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição informada pelo PDV e realiza o mesmo procedimento;
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** b8e8bd08cfd70097

Teremos 1 (uma) linha de separação de produtos.
Linha de separação (Frente e Posterior (costas))
1 (um) operador por estação
4 (quatro) estações de separação.
1 (um) PDV por estação de separação.
1 (um) leitor de dedo por estação.
Posições frente e posteriores (costas) não terá leds, todas as informações sobre a separação serão mostradas na tela do PDV de cada estação.
Operador ao receber a caixa na estação, realiza a leitura da etiqueta do volume, com isso o PDV informará as posições/locais de separação para que o operador realize as separações nos locais indicados, ao realizar a separação a tela do PDV é atualizada, ao finalizar a separação, a tela do PDV informará ao operador que finalizou a separação daquela estação.
Para iniciar a separação dos itens na posição, operador deverá realizar a leitura da etiqueta de "produção" do produto solicitado, nessa etiqueta contém as informações do produto e lote, ao realizar a leitura dessa etiqueta de "produção" o sistema Velox valida a informação de Lote, se a informação do lote lido for compatível com a informação do lote solicitado, o sistema Velox então inicia o picking desse produto, operador deve realizar a leitura de todos os itens, item a item, por exemplo: caso no pedido, esteja solicitando a separação de 10 (dez) unidades do mesmo produto, o operador deverá fazer a leitura dos 10 (dez) itens para concluir a separação desse item.
Durante a separação, caso a quantidade solicitada de um lote termine, o operador terá que alterar o lote via sistema Velox, informando o novo lote que será separado daquele produto e iniciar a separação da quantidade restante do produto com o novo lote.
A troca de lote deverá ser autorizada por um usuário com o nível de usuário elevado específico, cadastrado para essa operação/autorização.
Essa etiqueta de "produção" estará disponivel na caixa do produto a ser separado na posição.
Na integração de confirmação, o sistema Velox deve informar os lotes que foram separados para o produto. No caso, quando o produto for separado em 2 (dois) lotes diferentes, Velox deverá informar a quantidade separada de cada lote.
Ao finalizar o picking dos itens da frente da estação, caso exista produtos a serem separados na área posterior (costas) do operador, a tela do PDV será atualizada informando o operador que existe itens pendentes separação na área posterior (costas), e informará na tela do PDV o local e a quantidade a ser separada.
O processo de bipagem da etiqueta de "produção" para validar o lote, se aplica para a separação na frente e área posterior (costas)
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
Descrição do processo operacional de separação:
Realizar a leitura do volume da caixa recebida;
Verificar o PDV quais posições e quantidades solicitando separação;
Ao chegar na posição que irá separar, realizar a leitura da etiqueta de "produção";
Operador checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade solicitada;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição e realiza o mesmo procedimento;
Ao finalizar a separação de todas as posições de separação frente, caso tenha itens a serem separados na área posterior (costas), PDV será atualizado informando quais locais e quantidades;
Operador visualiza no PDV, o local e quantidade de produtos a serem separados na área posterior (costas);
Ao chegar na posição posterior (costas) que irá separar, realizar a leitura da etiqueta de "produção";
Operador deve checar na tela do PDV se as informações de lote foram validadas;
Caso as informações estejam corretas, operador inicia a leitura dos itens conforme quantidade informada no PDV;
Caso as informações estejam divergentes, operador deverá realizar a troca de lote no PDV;
Ao finalizar a separação do produto na posição, segue para a próxima posição informada pelo PDV e realiza o mesmo procedimento;
Ao finalizar toda a separação na estação frente e posterior (costas), a tela do PDV informará o operador que toda a separação daquela estação foi finalizada.
O pedido/volume não deve ser separado parcialmente, sempre deve ser separado em sua totalidade, 100% dos itens solicitados devem ser separados.
Em casos que a quantidade fisica de algum produto solicitado não atenda a totalidade solicitada no pedido, o operador não poderá realizar shortpicking, nesse caso deverá cancelar esse pedido no sistema Velox devido à falta de produto.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** ceb432bb099cafbc

Teremos 2 (duas) linhas de separação de fracionados, linha de separação de produtos controlados e a linha de separação de produtos não controlados.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** fbd8797c2749d7eb

Teremos 2 (duas) linhas de separação de fracionados, linha de separação de produtos controlados e a linha de separação de produtos não controlados.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Separação  
**Score:** — (semantico) | **ID:** de0a51aee1a1fead

Teremos 1 (uma) linha de separação, contendo 3 (três) postos de separação.
Cada posto terá:
1 (um) operador por posto.
1 (um) PDV por posto
1 (um) Finger Scanner por posto
56 (cinquenta e seis) posições de separação sendo 1 (uma) posição por item.
Cada posição será composta por:
1 (um) botão com display 3 (três) dígitos.
Imagem display 3 (três) dígitos com botão led:
Podendo haver a necessidade de 1 (um) mesmo item cadastrado em diferentes postos.
Operador ao receber a caixa no posto de separação, terá 3 (três) possíveis locais para realizar a separação do pedido no respectivo posto.
Frente – 16 (dezesseis) posições
Lateral Direito – 20 (vinte) posições
Lateral Esquerdo – 20 (vinte) posições
Totalizando – 56 (cinquenta e seis) posições/itens em cada posto.
Com isso, as posições dos itens solicitados para separação deverão acender informando qual a quantidade a ser separada daquele item com a sua posição em evidência.
Ao verificar as posições acesas irá realizar a separação de cada posição conforme a quantidade e cor do botão da posição.
Por exemplo:
Para a separação de unidades fracionadas a cor na posição deverá ser acesa em verde e a quantidade de unidades a serem separadas será mostrada no display:
Para a separação de fardos a cor na posição deverá ser acesa em amarelo e quantidade de fardos a serem separados:
Para separação de caixas fechadas (Full Case), a cor na posição deverá ser acesa em rosa e quantidade de caixas fechadas a serem separadas
Para casos de falha na leitura da etiqueta ou código de barras errado, todas as posições do posto deverão ser acesas em vermelho:
Cenário 1:
Caso o volume a ser separado solicite a separação unidades fracionadas, fardos e full case de 1 (um) mesmo item, o operador irá separar primeiro todos os itens de fracionados, em seguida todos os fardos e por último full case.
1° Fracionados
2° Fardos
3° Full Case
Nesse cenário o operador irá separar todos os itens que solicitam fracionados.
As posições que estiverem acesas na cor verde com a quantidade solicitada para ser separada, após essa separação de fracionados, todas as posições acenderão em verde informando que a separação de fracionados foi concluída. Operador aperta qualquer posição para apagar.
Caso tenha produtos a serem separados em fardos, as posições solicitadas acenderão em amarelo com a quantidade solicitada para ser separada, após essa separação, todas as posições acenderão em amarelo informando que a separação de fardos foi concluída. Operador aperta qualquer posição para apagar.
Caso tenha produtos a serem separados full case, as posições solicitadas acenderão em rosa, após essa separação, todas as posições acenderão em rosa informando que a separação de full case e todos os anteriores foi concluída. Operador aperta qualquer posição para apagar, e iniciar uma nova separação de um novo volume.
Ao final desse documento, existe um fluxograma detalhando esse processo de separação mencionado acima.
ShortPicking
Em casos que o operador verifique que a quantidade fisica do produto solicitado para separação é inferior que a quantidade solicitada pelo sistema no pedido, operador deverá escanear a quantidade que está disponível na posição e apertar o botão, para decrementar a quantidade no display da posição. Com isso, realiza a separação dos itens que estão disponíveis fisicamente e aperta o botão principal para confirmar que a quantidade que foi separada é aquela atual que está setada/mostrada no display.
Exemplo: No volume está solicitando a separação de 10 (dez) unidades do item 'xpto', operador ao iniciar a separação, nota que fisicamente existe apenas 8 (oito) unidades desse item, operador irá apertar o botão 2 (duas) vezes para decrementar a quantidade até 8 (oito), realiza o processo de separação das 8 (oito) unidades e aperta o botão principal para confirmar a separação de 8 (oito) unidades.
Imagem exemplo:

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** 5b8c5ed5b574dd9a

Opções de cancelamento que teremos no WCS:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start: Caso o pedido seja cancelado após o início do Order Start, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito antes conferência.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.
Gerenciamento de produtos coletados:
Pedidos Não Iniciados: Caso o pedido esteja com status “não iniciado”, ele poderá ser cancelado diretamente e não teremos ação nos produtos referentes a este pedido.
Pedidos com Coletas Parciais: Se o pedido já tiver itens coletados, esses produtos serão direcionados automaticamente para a localização "ANÁLISE", impedindo novas coletas. Assim, o restante dos itens do pedido será automaticamente desconsiderado para coleta, evitando inconsistências no processo.
O WCS DEVE CRIAR UMA TELA QUE PERMITA A DEVOLUÇÃO DOS ITENS QUE ESTARÃO COM STATUS E LOCALIZAÇÃO “EM ANÁLISE”. NESTE PROCESSO SERÁ NECESSÁRIO REALIZAR A LEITURA DO ITEM E O WCS INFORMAR O LOCAL DE DEVOLUÇÃO SEGUINDO AS MESMAS REGRAS JÁ DESCRITAS NO DOCUMENTO.
PARA ESSE PROCESSO SEGUIR AS REGRAS DE SEGURANÇA DO ESTOQUE DEVERÁ REALIZAR A BAIXA NA COLETA DE PICKING E NÃO NA CONFERENCIA.
Tela de gerenciamento: Uma tela será disponibilizada para gerenciar os produtos dos pedidos cancelados, permitindo a organização por zonas, volumes e status.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** adbf8191f452418b

Processo sistêmico de cancelar um pedido devido alguma adversidade sistêmica ou operacional durante o cotidiano da separação.
Método que será realizado diretamente pelo WMS apenas nos enviando a integração de cancelamento conforme mencionado no tópico "Cancelamento de onda".
Uma vez que essa integração chegou ao Velox não há como remedir ou alterar o cancelamento, caso ocorra algum erro da parte dos usuários do WMS, será necessário gerar uma nova onda de separação com um número de onda diferente (idonda).
Todos os volumes que não foram iniciados sua separação, ou seja, impressos no Order Start da sua área serão cancelados e não serão exibidos no Order Start. Volumes que estiverem em separação serão cancelados suas ordens de separação pendentes e deverão ser induzidos na linha para serem recebidos e alocados no PTM.
Ao finalizar todos os volumes do pedido cancelado será solicitado o fechamento do pallet e notificado ao operador que o pallet em questão pertence a um pedido cancelado.
O Velox não terá nenhuma ação para volumes já finalizados, ou seja, alocados no pallet que já foram finalizados e a integração de int_conf_vol_doca foi enviada ao WMS, todos os volumes que já receberam leitura no PTM e foram alocados no pallet não poderão ser cancelados.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO -_REV1.docx`  
**Heading:** Confirmação de Separação Concluido  
**Score:** — (semantico) | **ID:** 8fed6c1f03a024a0

Quando o volume estiver realizando separação nas linhas de médio e baixo giro e houver finalizado todas as separações solicitadas da respectiva linha, o sistema WCS deve informar no PDV que a separação daquele volume referente a linha atual ja foi finalizada e o operador pode induzir esse volume na linha expressa.
Caso o operador não induza o volume na linha expressa e seja lido na proxima estação, o sistema deve apresentar novamente o pop-up para indicar o proximo operador a relizar a tratativa correta.

---
**Origem:** [I24.210] 2024 — `I24 -  PROJETO COUGAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** c0231fb4168245cf

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Reabastecimento e PTW, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I24.210] 2024 — `PROJETO COUGAR - ESPECIFICAÇÃO DE SOFTWARE MACROFLUXO.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** f750e27d2aeb8b27

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Reabastecimento e PTW, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** ESPECIFICAÇÃO  
**Score:** — (semantico) | **ID:** 4f428683ac5e57ed

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas. Essa aplicação executará as rotinas de desvio das caixas nos diferentes níveis para separação de pedidos, PTW e reabastecimento, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT requer um banco de dados para armazenar e gerenciar as informações corretamente, cuja licença e instalação serão fornecidas pelo cliente. As informações são trocadas entre a aplicação e as estações de trabalho por meio de interface Web, sendo necessária uma infraestrutura adequada para esse processo.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Confirmação Separação B2C (Put-to-Wall)  
**Score:** — (semantico) | **ID:** 47cabeb400377999

Pedidos Mono: Os volumes que contém apenas um pedido na mesma caixa, será enviado para uma área específica de B2C Mono, onde o operador bipa a etiqueta da caixa (Label), realiza a impressão de uma nova etiqueta (responsabilidade do cliente) e cola na caixa para finalizar o pedido. Neste tipo de pedido o WCS não receberá a integração de confirmação de separação B2C, apenas a integração de pedido daquele respectivo volume. Será de responsabilidade Invent apenas o desvio do volume para o setor de pedidos B2C Mono.
Pedidos Multi (PTW): Os volumes que contêm múltiplos pedidos em uma única caixa, serão separados nas estações PTW, seguindo as regras descritas abaixo:
O WMS será responsável pelo processo de alocação dos itens na parte frontal do PTW.
O WCS será responsável pela sinalização da finalização do pedido/células com base nas integrações recebidas do WMS.
O operador, utilizando o coletor e o WMS do cliente, realiza a leitura da etiqueta da caixa e distribui os produtos nas células disponíveis. O processo de alocação é repetido até que todos os produtos da caixa sejam corretamente alocados.
Após a alocação de todos os produtos daquele volume, a integração de confirmação de separação será enviada, informando:
Pedidos que constam na caixa.
O número de unidades previstas.
EAN separados.
O número de unidades realmente alocadas.
Quando todos os produtos de um pedido estiverem alocados (em uma ou mais células), as células referentes a esse pedido acendem na cor Azul na parte traseira do PTW, sinalizando que o processo de separação, na parte frontal do PTW realizado pelo WMS, foi concluído e que o operador pode seguir para o packing. O operador então aperta um dos botões para confirmar a finalização.
Caso dois pedidos sejam finalizados simultaneamente, o sistema acende sequencialmente as células do primeiro pedido, aguardando o operador finalizar o packing, antes de sinalizar o próximo pedido para finalização.
O processo no WCS (Invent) é considerado concluído quando a caixa for entregue na estação de packing.
Importante: Os pedidos podem ser separados em várias caixas e células. O pedido será finalizado apenas quando toda a separação do volume for concluída, seja em uma única célula ou em várias. Exemplo: Ao completar o pedido, as 3 posições correspondentes ao pedido precisam ser acesas simultaneamente para informar a operação, o encerramento daquele pedido no setor de PTW.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** c827ac7a60e528ff

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas. Essa aplicação executará as rotinas de desvio das caixas nos diferentes níveis para separação de pedidos, PTW e reabastecimento, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT irá operar na modalidade (SaaS) Software como Serviço e requer um banco de dados para armazenar e gerenciar as informações corretamente, cuja licença e instalação serão fornecidas pela INVENT. As informações são trocadas entre a aplicação e as estações de trabalho por meio de interface Web, sendo necessária uma infraestrutura adequada para esse processo.
A aplicação da INVENT requer um banco de dados para armazenar e gerenciar as informações de forma eficiente, cuja licença e instalação serão fornecidas pela INVENT. Para garantir análises avançadas e relatórios dinâmicos, a solução pode ser integrada a um sistema em nuvem com SSAS (SQL Server Analysis Services), permitindo processamento e consulta de grandes volumes de dados de maneira ágil. As informações são trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web, sendo essencial uma infraestrutura robusta e escalável, como a nuvem, para garantir a comunicação contínua e o processamento seguro dessas informações."

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Fluxo Operacional no PTW (Put to Wall)  
**Score:** — (semantico) | **ID:** c5a19f835c8891e0

Chegada da Caixa ao PTW
O operador, utilizando um scanner integrado ao WCS, realiza a leitura do volume para indicar que a caixa chegou ao seu destino no PTW.
Alocação de Itens no Nicho
Em seguida, é realizada a leitura da etiqueta de cada produto presente na caixa.
Após a leitura, a luz correspondente ao nicho de alocação acende na parametrizada para o usuário, indicando onde o item deve ser depositado.
O operador deposita o item no nicho indicado e pressiona o botão da posição, apagando a luz e confirmando a alocação no WCS.
Esse procedimento é repetido manualmente para cada item até que todos os produtos sejam alocados em suas respectivas posições.
Conclusão da Alocação no PTW
Quando todos os itens do pedido são alocados nos nichos, o WCS envia a integração 3.8	Sinalização de Pedido Completo (PTW) e aguarda a integração           3.9 Confirmação de Faturamento após a confirmação gerencia o acendimento dos LEDs conforme as seguintes regras:
Pedido com apenas um nicho:
A luz de saída (PTW Costas) acende na cor azul, sinalizando que o pedido está concluído e pronto para retirada.
Pedido com múltiplos nichos:
O WCS acende todos os nichos vinculados ao pedido simultaneamente, utilizando uma cor específica e única para o agrupamento.
Caso o limite de cores disponíveis seja atingido, os pedidos finalizados entram em fila de espera. Assim que uma cor for liberada (pedido retirado/concluído), os nichos do próximo pedido na fila acendem automaticamente, respeitando a ordem FIFO.
O operador do outro lado do PTW confirma o LED aceso e, utilizando um coletor integrado ao WMS, realiza a leitura do endereço do nicho para iniciar a tarefa de packing no WMS.
Em seguida, ele retira os itens do nicho para seguir com a próxima etapa do processo: packing/expedição.
Encerramento no WCS
Para o WCS, o processo de PTW é considerado concluído quando a caixa é entregue para o processo de packing, ou seja, após a confirmação do LED costas.
A caixa será considerada encerrada no WCS quando todos os itens pertencentes a ela forem alocados no nicho.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** fb8f947298e97914

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas. Essa aplicação executará as rotinas de desvio das caixas nos diferentes níveis para separação de pedidos, PTW e reabastecimento, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT irá operar na modalidade (SaaS) Software como Serviço e requer um banco de dados para armazenar e gerenciar as informações corretamente, cuja licença e instalação serão fornecidas pela INVENT. As informações são trocadas entre a aplicação e as estações de trabalho por meio de interface Web, sendo necessária uma infraestrutura adequada para esse processo.
A aplicação da INVENT requer um banco de dados para armazenar e gerenciar as informações de forma eficiente, cuja licença e instalação serão fornecidas pela INVENT. Para garantir análises avançadas e relatórios dinâmicos, a solução pode ser integrada a um sistema em nuvem com SSAS (SQL Server Analysis Services), permitindo processamento e consulta de grandes volumes de dados de maneira ágil. As informações são trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web, sendo essencial uma infraestrutura robusta e escalável, como a nuvem, para garantir a comunicação contínua e o processamento seguro dessas informações."

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** 3a126711045f8528

O WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS e deve aceitar uma integração de cancelamento partindo do WMS. Ao cancelar um pedido temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso o pedido seja cancelado após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito para conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** aa681304b13fc337

O WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS e deve aceitar uma integração de cancelamento partindo do WMS. Ao cancelar um pedido temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso o pedido seja cancelado após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito para conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** f167eaa0f437f7d6

O WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS e deve aceitar uma integração de cancelamento partindo do WMS. Ao cancelar um pedido temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso o pedido seja cancelado após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito para conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** 02d4c820bcd3e647

O WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS e deve aceitar uma integração de cancelamento partindo do WMS. Ao cancelar um pedido temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso o pedido seja cancelado após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito antes conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status dentro do sistema WCS.
