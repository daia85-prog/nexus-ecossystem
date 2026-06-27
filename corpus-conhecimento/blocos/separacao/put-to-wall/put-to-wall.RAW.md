# put-to-wall.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 10. Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** d0b09440000462e0

O WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS e deve
aceitar uma integração de cancelamento partindo do WMS. Ao cancelar um pedido temos os
seguintes cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser
iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso o pedido seja cancelado
após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será
encaminhada para outras estações de separação e será direcionada para a estação de
rejeito para conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (pega) que estavam
sendo separados no Picking Cart, serão direcionados a conferência após o final da
coleta.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de
supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado
com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status
dentro do sistema WCS.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Cancelamento de Missão  
**Score:** — (semantico) | **ID:** 47190d6c1218cdcf

O WCS deve disponibilizar uma tela para cancelar missões enviadas pelo WMS. Ao cancelar uma missão temos os seguintes cenários abaixo:
Cancelamento antes do Order Start: Se a missão for cancelada antes de ser iniciado no Order Start, ele será removido da fila de missões pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso a missão seja cancelada após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será encaminhada para outras estações de separação e será direcionada para a estação de rejeito para conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (tarefa) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta.
Cancelamento via Missão: O cancelamento de missões no WCS exigirá um nível de supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento dentro do WCS não será integrado com outros sistemas, limitando-se à remoção da missão e à atualização de seu status dentro do sistema WCS.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** 87a7003530f4c461

O WCS deve disponibilizar uma tela para cancelar pedidos enviados pelo WMS e deve aceitar uma
integração de cancelamento partindo do WMS. Ao cancelar um pedido temos os seguintes
cenários abaixo:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser
iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start do FlowRack: Caso o pedido seja cancelado
após o início do Order Start do FlowRack, a coleta será interrompida. A caixa não será
encaminhada para outras estações de separação e será direcionada para a estação de
rejeito ou conferência.
Cancelamento após o Order Start do Picking Cart: Volumes (pega) que estavam
sendo separados no Picking Cart, serão direcionados a conferência após o final da
coleta.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de
supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado
com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status
dentro do sistema WCS.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 8.4. Cancelamento de OT (CATO)  
**Score:** — (semantico) | **ID:** 7bfe3bd1f397f3db

O cancelamento de OT ocorre quando uma Ordem de Transporte que já foi criada precisa ser
revertida antes ou durante sua execução. O cancelamento é formalizado por meio do IDOC

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Momento da atribuição  
**Score:** — (semantico) | **ID:** 9de7b9dc721d7163

DISPONIVEL
Volumes criados na tabela do WCS sem vínculo com uma onda iniciada
CANCELADO
Cancelamento da remessa
PREVISTO
Onda iniciada e não há saldo para coleta
PENDENTE
Onda iniciada e há saldo para coleta
EM COLETA
Led aceso para coleta
COLETADO
Confirmação de coleta sem corte
CORTADO
Confirmação de coleta com corte
ENCERRADO
Encerramento de onda

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 8.4. Put to Wall  
**Score:** — (nome-topico) | **ID:** 57dcfdc0398b21b8

O Put to Wall é o ponto de consolidação dos itens coletados no museu (picking cart) antes da
indução na automação. O WCS é responsável pelo controle do PTW. O PTW possui um posto
único de operação, com acesso e bipagem pela frente e pelas costas da estrutura. Após a
consolidação, as caixas dos pedidos são induzidas na linha e passam pela linha de picking,
seguindo o fluxo padrão até a Conferência e Expedição.
Estrutura:
30 nichos no total.
Configuração: 3 níveis × 10 colunas.
Dimensões do nicho: 400 mm (largura) × 550 mm (altura) × 800 mm (profundidade).
Fluxo Operacional:
Bipagem no PTW: O operador bipa cada item coletado no scanner de mão. O WCS
identifica o item, localiza o pedido ao qual ele pertence e acende o nicho
correspondente na estrutura.
Alocação: O operador deposita o item no nicho indicado e confirma a alocação
pressionando o led.
Consolidação: O processo se repete até que todos os itens da esperados no nicho
estejam alocados. Ao completar um pedido, o WCS sinaliza o nicho indicando que
aquele pedido está pronto para indução.
Vinculo com caixa plástica: Após a sinalização do nicho o operador deve apertar o
led para sinalizar que está retirando os itens, e então utilizar o scanner de mão da parte
trazeira para realizar a leitura da caixa plástica para realizar o vínculo com os itens
retirados
Liberação Para linha de Fracionados: O operador induz a caixa plástica na esteira
de Fullcase do Térreo e o pedido segue diretamente ao sorter → rampa 1 → PTL 3 e é
reinduzido na Linha de PBL (Flowracks)→ Picking Mezanino → Picking Térreo →
Conferência → Expedição).

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 9. Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** 5f208779da278a7a

As regras de cancelamento descritas neste capítulo seguem o mesmo comportamento já em
produção no projeto BETA SP, salvo as adaptações específicas documentadas a seguir.
Opções de cancelamento que teremos no WCS:
Cancelamento antes do Order Start: Se o pedido for cancelado antes de ser
iniciado no Order Start, ele será removido da fila de pedidos pendentes para início.
Cancelamento após o Order Start: Caso o pedido seja cancelado após o início do
Order Start, a coleta será interrompida. A caixa não será encaminhada para outras
estações de separação e será direcionada para a estação de rejeito antes conferência.
Cancelamento via Pedido: O cancelamento de pedidos no WCS exigirá um nível de
supervisão, sendo necessário o uso de uma senha para autorização.
Integração com outros sistemas: O processo de cancelamento não será integrado
com outros sistemas, limitando-se à remoção do pedido e à atualização de seu status
dentro do sistema WCS.
Gerenciamento de produtos coletados:
Pedidos Não Iniciados: Caso o pedido esteja com status “não iniciado”, ele poderá
ser cancelado diretamente e não teremos ação nos produtos referentes a este pedido.
Pedidos com Coletas Parciais: Se o pedido já tiver itens coletados, esses produtos
serão direcionados automaticamente para a localização "ANÁLISE", impedindo novas
coletas. Assim, o restante dos itens do pedido será automaticamente desconsiderado
para coleta, evitando inconsistências no processo.
O WCS deverá disponibilizar uma tela específica para o processo de devolução de itens
que estejam com status e localização marcados como “Em Análise”. Essa funcionalidade
terá como objetivo permitir o retorno seguro e controlado desses produtos ao estoque,
garantindo rastreabilidade e conformidade com as regras operacionais já estabelecidas.
Durante esse processo, o operador deverá realizar a leitura do código do item a ser
devolvido. A partir dessa leitura, o sistema WCS deverá identificar o item e, com base
nas regras previamente definidas (como tipo de produto, lote, curva de giro, ou canal
de separação), informar automaticamente o local de devolução apropriado.
Essa tela deverá seguir a mesma lógica de segurança e validação utilizada nos demais
fluxos de separação, garantindo que a devolução ocorra de forma padronizada,
auditável e sem riscos de quebra de acuracidade no estoque.
Tela de gerenciamento: Uma tela será disponibilizada para gerenciar os produtos
dos pedidos cancelados, permitindo a organização por zonas, volumes e status.
Observação: Para os casos de separação via picking cart
(PDV) e coletor deve exibir um pop-up com a informação que o pedido está cancelado.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 9. Processo Separação  
**Score:** — (semantico) | **ID:** 8e00dd9820271257

Os processos de separação sob responsabilidade do WCS são Pallet/Sorter e Full Case.
Ambos os métodos de separação dependem das etapas iniciais do Order Start, especialmente
da impressão obrigatória das etiquetas, que é o gatilho para que as tarefas de separação
sejam liberadas no sistema e sincronizadas com os coletores, bem como a indução dos volumes
no sorter e o agrupamento dos volumes nos PTLs.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** WMS → WCS (WMTORD)  
**Score:** — (semantico) | **ID:** 2b545ec55140c116

O WMS envia uma lista de remessas com informações detalhadas. Esses pedidos são exibidos
na tela do WCS para que o operador possa começar a prepará-los.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Permissão de Cancelamento: O cancelamento de pedidos no WCS exigirá um nível de  
**Score:** — (semantico) | **ID:** 48eb18a66af43bf0

supervisão, sendo necessário o uso de uma senha para autorização.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Cancelamento de Pedidos  
**Score:** — (semantico) | **ID:** e1d191260fbc9f26

O WCS monitora continuamente as mensagens de cancelamento enviadas pelo eWM - SAP. Quando um cancelamento chega, o comportamento depende do estágio do pedido na linha:
- Pedido ainda não iniciado: O WCS remove o pedido da fila e nenhuma ação física é necessária.
- Pedido já em separação (caixa na esteira): O WCS apaga os comandos de picking pendentes para aquela caixa em todas as estações, impede que qualquer LED acenda para ela e marca o LPN para rejeito. A caixa percorre a linha normalmente mas é desviada para a rampa de rejeito/hospital, sem ser expedida.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Prioridade:** não  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 3cd495ac8f3325da

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de PTW e PTL, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco Postgres).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** 2.0 Especificação  
**Score:** — (semantico) | **ID:** 4414f1a45f4d0d73

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável
pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta
aplicação executara as rotinas de PTW e PTL, tendo como papel fundamental a interface entre
os sistemas WMS (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto
armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente
(licença + instalação do banco Postgres).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface
Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de
trabalho (Google Chrome).

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Shipping Operation: Put-To-Pallet (PTP)  
**Score:** — (semantico) | **ID:** 8c1975e721a33b65

The volume consolidation process will be managed by the Velox PTP module. The operation replaces paper lists and the operator's memory with a visual and systemically validated system.
