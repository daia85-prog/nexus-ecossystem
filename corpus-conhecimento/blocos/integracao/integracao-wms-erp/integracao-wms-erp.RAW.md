# integracao-wms-erp.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** TOCO  
**Score:** — (semantico) | **ID:** a683ae2acb999a83

Interface de confirmação de Ordem de Transporte – mensagem enviada do WCS ao
SAP informando a conclusão bem-sucedida de uma movimentação.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** SAP  
**Score:** — (semantico) | **ID:** 238b04b69bf4636f

Sistema responsável pela gestão do armazém (WMS)

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 1. O controle de estoque final é de responsabilidade do SAP. O WCS cuida apenas no  
**Score:** — (semantico) | **ID:** 9338b201cadc7381

estoque interno sistêmico. A correção de divergência é responsabilidade do SAP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** TORD  
**Score:** — (semantico) | **ID:** 0f7bb1f985f99461

Criação
SAP/WCS
Cria uma OT informando origem, destino, SKU, UD, peso e/ou
identificador único. Pode ser enviado pelo SAP ao WCS
(reabastecimento por capacidade/demanda [com identificador
unico], limpeza de canal) ou pelo WCS ao SAP (corte de
separação).

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** solicitação de necessidade: o WCS informa ao SAP que precisa de um material em  
**Score:** — (semantico) | **ID:** 2aa83daae18512dd

determinada quantidade e shelf life, e o SAP é responsável por encontrar o palete adequado e
responder com um TORD de execução.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 8.3. Confirmação de OT (TOCO)  
**Score:** — (semantico) | **ID:** d0f6771a38b9ef2a

O TOCO é o IDOC utilizado para confirmar que uma etapa de uma movimentação foi concluída.
Ele é o mecanismo que sincroniza o estado da OT entre SAP e WCS, sem o TOCO o sistema que
aguarda a confirmação não sabe que a movimentação aconteceu.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 1 — Recebimento do TORD: O SAP envia ao WCS um IDOC do tipo WMTORD [TORD]  
**Score:** — (semantico) | **ID:** e0e0e81d7325b9c1

solicitando a retirada do palete, informando a posição de origem (buffer) e a UD do palete.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Momento da atribuição  
**Score:** — (semantico) | **ID:** bf51b84463f3df6d

INTEGRADO
IDOC recebido e em processamento
DISPONIVEL
IDOC processado e informações salvas nas tabelas do banco
CANCELADA
Quando ocorre um cancelamento de remessa
EM ANDAMENTO
Onda iniciada
ENCERRADA
Quando ocorre um encerramento de onda
FINALIZADA
Quando toda remessa é atendida e foi integrada ao SAP

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Momento da atribuição  
**Score:** — (semantico) | **ID:** 3d54ee3f71378911

DISPONIVEL
Volumes criados na tabela do WCS sem vínculo com uma onda iniciada
CANCELADO
Cancelamento da remessa
EM ANDAMENTO
Início da onda
COLETADO
Finalização da coleta
CONCLUIDO
Desviado na rampa de destino
ENCERRADO
Encerramento de onda
FINALIZADO
Envio de retorno ao SAP

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Exclusão de onda  
**Score:** — (semantico) | **ID:** f699f83f4a66dd03

A operação pode realizar a exclusão de onda desde que o status da onda seja criada ou
preparada, dessa forma se a onda ainda não foi iniciada pode ser excluída.
Todos os transportes pertencentes a onda excluída retornaram para a tela de transportes para
serem vinculados a uma nova onda [Criação de onda] ou serem cancelados através do
cancelamento de remessa [Cancelamento de remessa], saldos reservado voltaram para o status

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Skus pendentes  
**Score:** — (semantico) | **ID:** d1e2e4ace1cff2b4

Para uma análise mais rápida a funcionalidade skus pendentes vai trazer a quantidade de
unidades pendente de coleta em relação a onda selecionada, ao clicar na opção Skus Pendentes
irá aparecer o número da onda, transporte, remessa (Missão) código do produto, descrição do
produto, quantidade solicitada na remessa, quantidade atendida da remessa, status de separação
da remessa, status de separação do item.
Após a análise usuários com permissão de acesso podem selecionar a opção acionar que gera
tarefa de coleta para todos os skus pendentes. Todas essas coletas geradas pela funcionalidade
do botão acionar serão criadas com a mesma prioridade de coleta para os casos de corte.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Encerramento de onda  
**Score:** — (semantico) | **ID:** 6a66c04bb039fcb5

Este cenário representa um estado crítico da operação, sendo aplicável apenas para onda com
status “EM ANDAMENTO”, onde já existem atividade em execução, como coletas em
andamento e volumes em diferentes estágios no sorter.
Ao executar o encerramento da onda, o WCS deve executar as seguintes tratativas:
•
Todas as coletas em execução nos postos devem ser imediatamente interrompidas, os
LEDs ativos devem ser apagados.
•
Todos os volumes ainda pertencentes a lista de coleta devem ter seu status atualizado
para “ENCERRADO”, independentemente de já terem sido iniciados ou não.
Após o encerramento da coleta, o WCS deve tratar os volumes que já foram enviados para o
sorter:
Deve ser iniciado um job com duração de 5 minutos, responsável por aguardar o desvio dos
volumes ainda em trânsito no sorter.
Durante esse período os volumes que forem corretamente identificados e desviados para suas
respectivas docas devem ter seu status atualizado para “NARAMPA”. Esses volumes devem ser
considerados como atendidos e enviado na interação ao SAP, volumes que não desviaram durante
o tempo do job mudaram seu status para “ENCERRADO”.
Ao final desse processo o WCS deve enviar ao SAP um IDOC (TPSDLS - ZSDDAREM) de todos
os volumes das remessas que ainda não foram enviados, contendo a quantidade atendida no
campo <QUANT> independentemente do volume processado, podendo inclusive ser igual a
zero, garantindo que a operação identifique os volumes que foram enviados de forma parcial
com a tag <ZSEP_PARCIAL> com a informação “X”.
Dessa forma, o SAP será responsável por interpretar a quantidade informada e realizar as
tratativas necessárias para os itens não atendidos, como cancelamento de faturamento,
reprocessamento ou retorno ao estoque.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tam.  
**Score:** — (semantico) | **ID:** 284d0747f4c1126e

Doca
Informação do número da doca com o status
online/Offline
Ordens de
transportes
Placa
Placa do veículo informado pelo SAP
Ordens de
transportes
Perfil
Perfil do veículo informado pelo SAP
Ordens de
transportes
Transportador Informação do transporte informado pelo SAP
Ordens de
transportes
Transporte
Número vinculado ao transporte informado pelo
SAP
Ordens de
transportes
Separação
Itens Total
Todas de volumes destinos aquela doca
Volumes
Alocados no
Palete
Todos os volumes que foi efetuada a separação
(Saida da doca)
Volumes
Pendentes
Todos os volumes já alocados no palete com
confirmação
Volumes
Progresso
Barra simples com a informação de total menos
pendentes
Volumes
Detalhamento por categoria
Caixas total
Total de caixas integradas para a onda, separados
por Congelado e Resfriada
Volumes
Caixas
Alocadas
Caixas alocadas no PTL, separados por Congelado
e Resfriada
Volumes
Caixas
Desviadas
Caixas que foram desviadas e tiveram confirmação
de desvio, porém ainda estão na doca aguardando
alocação, separados por Congelado e Resfriada
Volumes
Caixas
Pendentes
Caixas integradas que ainda não houve desvio na
doca, separados por Congelado e Resfriada
Volumes
Peso Total
Peso total dos volumes integrados, separados por
Congelado e Resfriada
Volumes
Peso
Desviado
Peso somado dos volumes desviados
Volumes
Peso
Pendente
Peso somado dos volumes que ainda não houve
desvio
Volumes
Totais Consolidados
Caixas Total
Total somado de todos os volumes (Frágil, leve,
Pesado)
Volumes
Congelado
Placa do veículo informado pelo SAP
Volumes
Resfriado
Perfil do veículo informado pelo SAP
Volumes
Alocadas
Soma dos volumes alocados
Volumes
Desviadas
Soma dos volumes desviados
Volumes
Pendentes
Soma dos volumes pendentes
Volumes
Peso Total
(kg)
Peso total de todos os volumes
Volumes
Próximo Carregamento
Placa
Placa do próximo veículo informado pelo SAP
Volumes
Perfil
Perfil do próximo veículo informado pelo SAP
Volumes
Transp.
Informação do próximo transporte informado pelo
SAP
Volumes
