# integracao-wms-erp.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Confirmação de OT (TOCO)  
**Score:** — (semantico) | **ID:** 80955b0ed5963584

O TOCO é o IDOC utilizado para confirmar que uma etapa de uma movimentação foi concluída. Ele é o mecanismo que sincroniza o estado da OT entre SAP e WCS, sem o TOCO o sistema que aguarda a confirmação não sabe que a movimentação aconteceu.
Estrutura do IDOC de Confirmação
SAP  VELOX (ZWMTOCO)
Utilização dos dados (Velox):
Estrutura do IDOC de Confirmação
VELOX  SAP: TOCO
Utilização dos dados (Velox):
Estrutura do IDOC de Confirmação
VELOX  SAP: ZWMTOCO (Zerar canal)
Utilização dos dados (Velox):

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Exclusão de onda  
**Score:** — (semantico) | **ID:** 1ab8494d5d6dd24f

A operação pode realizar a exclusão de onda desde que o status da onda seja criada ou preparada, dessa forma se a onda ainda não foi iniciada pode ser excluída.
Todos os transportes pertencentes a onda excluída retornaram para a tela de transportes para serem vinculados a uma nova onda [Criação de onda] ou serem cancelados através do cancelamento de remessa [Cancelamento de remessa], saldos reservado voltaram para o status PENDENTE.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Skus pendentes  
**Score:** — (semantico) | **ID:** 140f6310c80bbe60

Para uma análise mais rápida a funcionalidade skus pendentes vai trazer a quantidade de unidades pendente de coleta em relação a onda selecionada, ao clicar na opção Skus Pendentes irá aparecer o número da onda, transporte, remessa (Missão) código do produto, descrição do produto, quantidade solicitada na remessa, quantidade atendida da remessa, status de separação da remessa, status de separação do item.
Após a análise usuários com permissão de acesso podem selecionar a opção acionar que gera tarefa de coleta para todos os skus pendentes. Todas essas coletas geradas pela funcionalidade do botão acionar serão criadas com a mesma prioridade de coleta para os casos de corte.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Encerramento de onda  
**Score:** — (semantico) | **ID:** 78b774dbd3dddf0c

Este cenário representa um estado crítico da operação, sendo aplicável apenas para onda com status “EM ANDAMENTO”, onde já existem atividade em execução, como coletas em andamento e volumes em diferentes estágios no sorter.
Ao executar o encerramento da onda, o WCS deve executar as seguintes tratativas:
Todas as coletas em execução nos postos devem ser imediatamente interrompidas, os LEDs ativos devem ser apagados.
Todos os volumes ainda pertencentes a lista de coleta devem ter seu status atualizado para “ENCERRADO”, independentemente de já terem sido iniciados ou não.
Após o encerramento da coleta, o WCS deve tratar os volumes que já foram enviados para o sorter:
Deve ser iniciado um job com duração de 5 minutos, responsável por aguardar o desvio dos volumes ainda em trânsito no sorter.
Durante esse período os volumes que forem corretamente identificados e desviados para suas respectivas docas devem ter seu status atualizado para “NARAMPA”. Esses volumes devem ser considerados como atendidos e enviado na interação ao SAP, volumes que não desviaram durante o tempo do job mudaram seu status para “ENCERRADO”.
Ao final desse processo o WCS deve enviar ao SAP um IDOC (TPSDLS - ZSDDAREM) de todos os volumes das remessas que ainda não foram enviados, contendo a quantidade atendida no campo <QUANT> independentemente do volume processado, podendo inclusive ser igual a zero, garantindo que a operação identifique os volumes que foram enviados de forma parcial com a tag <ZSEP_PARCIAL> com a informação “X”.
Dessa forma, o SAP será responsável por interpretar a quantidade informada e realizar as tratativas necessárias para os itens não atendidos, como cancelamento de faturamento, reprocessamento ou retorno ao estoque.
Estrutura do IDOC de Encerramento de Onda
Velox > SAP
Utilização dos dados (Velox):

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** GAP 01 – Envio SKU  
**Score:** — (semantico) | **ID:** 227c631f888a0613

Nessa interface, SAP envia os dados para o MFC no momento do cadastro do material. Será enviado a carga de todos os materias existentes (e-commerce) no SAP. Essa interface enviará os dados de novos materiais cadastros e ou alterados. Com essas informações, o sistema MFC enviará as caixas em todas as estações que contenham aquele SKU (caso de picking ou de reabastecimento). Se a estação conter mais de uma posição para o mesmo SKU, o MFC acende todas as posições para reabastecer e o operador define a quantidade que será reabastecido. Caso tenha sobra do item, o operador devolve a caixa na linha e a mesma segue ate a próxima estação que contém o SKU
Registro principal (SKU), no SAP só é aceito 1(uma) informação por SKU. 1(um) para
1(um).
Campos: comprimento, altura e largura serão enviadas em "centímetros".
SAP  WCS

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** 3 – SAP cria caixas e informa números ao WCS  
**Score:** — (semantico) | **ID:** 2d882c9adb11e521

Após o WCS enviar as informações do item acima, SAP criara a numeração interna da SWIFT dentro do SAP.
Essa interface será utilizada pelo SAP, quando WCS enviar o tamanho da caixa e quantidade, SAP cria a caixa com a numeração real dessas caixas. Que se refere ao campo "Numero da caixa" e esse campo se trata do SKU da caixa, e será impresso na caixa logo no início da esteira afim de conseguir identificar de qual remessa ele pertence e qual tipo de caixa. Nesse campo, serão cadastrados os tamanhos das caixas, com os 2(dois) digitos finais.
Exemplo: nº material da caixa (390000010) (390000010) = tamanho 1
(390000020) = tamanho 2
(390000030) = tamanho 3
SAP  WCS

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** 1 – WCS envia ao SAP informações da conferência feitas pela balança(OK / NOK)  
**Score:** — (semantico) | **ID:** ddf27eab974fae18

Nessa interface, o WCS envia para o SAP os campos necessários para conferência, se ocorreu com sucesso ou não.
WCS  SAP

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO BANCO DE DADOS - Rev1.docx`  
**Heading:** PROCEDURES  
**Score:** — (semantico) | **ID:** 5c364e8fdb0d0344

Objetivo:
Objetos responsáveis pela integração dos dados enviados pelo SAP.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF1.1 – Confirmação de entrada no armazém  
**Score:** — (semantico) | **ID:** 54cb4433a5077a0b

O WCS Velox deve enviar confirmação de entrada de pallet no armazém para o SAP WM quando o pallet for proveniente da fábrica (entrada do nível superior do armazém). Pallets provenientes de transferência e devolução (entradas do nível inferior do armazém) não devem ser confirmados para o SAP WM.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF8 – Algoritmo de saída de pallets  
**Score:** — (semantico) | **ID:** 7cd2e5fe8020de60

O WCS Velox deve atender as ordens de saída de pallets provenientes do SAP WM através de um algoritmo bem definido.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF32.7 – Centros do SAP  
**Score:** — (semantico) | **ID:** d3768d63b955b532

O WCS Velox deve permitir o cadastro de centro do SAP.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** WMTORD (Armazena)  
**Score:** — (nome-topico) | **ID:** ffbb4b21136d3c6d

Principal integração entre os sistemas SAP e WCS, onde serão enviados as informações para a armazenagem.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’
Origem: SAP
Destino: WCS

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** WMTORD (Retira)  
**Score:** — (nome-topico) | **ID:** 313c8d8e937a8006

Principal integração entre os sistemas SAP e WCS, onde serão enviados as informações para a retirada.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’
Origem: SAP
Destino: WCS

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** WMTOCO (Confirmação)  
**Score:** — (nome-topico) | **ID:** 46d8b20b092c16c8

Confirma quando o transelevador remover o pallet do local em HB para o local SAP.
(WMTORD-NLTYP é um local de armazenamento no SAP WMTORD-VLTYP é uma área no WCS).
Origem: WCS
Destino: SAP
Confirma o armazenamento quando o transelevador armazenar pallets do local SAP para o local HB
(WMTORD-NLTYP é uma área no WCS e WMTORD-VLTYP é um local de armazenamento no SAP)
Origem: WCS
Destino: SAP
PRIMEIRA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é uma área no WCS. É diferente de WMTOCO-VLTYP é uma área no WCS
Origem: WCS
Destino: SAP
SEGUNDA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é diferente de WMTOCO-VLTYP
Origem: WCS
Destino: SAP

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** WMCATO (Cancelamento)  
**Score:** — (nome-topico) | **ID:** 0f7ebaeee001ac81

Integração para o SAP enviar a solicitação de cancelamento ao WCS Velox.
Origem: SAP
Destino: WCS
WCS Velox responde se o cancelamento solicitado é possivel.
Origem: WCS
Destino: SAP

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF1.1 – Confirmação de entrada no armazém  
**Score:** — (semantico) | **ID:** 96b9bdee9970f233

O WCS Velox deve enviar confirmação de entrada de pallet no armazém para o SAP WM quando o pallet for proveniente da fábrica (entrada do nível superior do armazém). Pallets provenientes de transferência e devolução (entradas do nível inferior do armazém) não devem ser confirmados para o SAP WM.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF8 – Algoritmo de saída de pallets  
**Score:** — (semantico) | **ID:** e7ebf1b0a3528419

O WCS Velox deve atender as ordens de saída de pallets provenientes do SAP WM através de um algoritmo bem definido.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF32.7 – Centros do SAP  
**Score:** — (semantico) | **ID:** 465bfa77e98eadfa

O WCS Velox deve permitir o cadastro de centro do SAP.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** WMTORD (Armazena)  
**Score:** — (nome-topico) | **ID:** 5acc093c493fb0b7

Principal integração entre os sistemas SAP e WCS, onde serão enviados as informações para a armazenagem.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’
Origem: SAP
Destino: WCS

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** WMTORD (Retira)  
**Score:** — (nome-topico) | **ID:** 239c72a48b450929

Principal integração entre os sistemas SAP e WCS, onde serão enviados as informações para a retirada.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’
Origem: SAP
Destino: WCS

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** WMTOCO (Confirmação)  
**Score:** — (nome-topico) | **ID:** 42cacf002bd6586b

Confirma quando o transelevador remover o pallet do local em HB para o local SAP.
(WMTORD-NLTYP é um local de armazenamento no SAP WMTORD-VLTYP é uma área no WCS).
Origem: WCS
Destino: SAP
Confirma o armazenamento quando o transelevador armazenar pallets do local SAP para o local HB
(WMTORD-NLTYP é uma área no WCS e WMTORD-VLTYP é um local de armazenamento no SAP)
Origem: WCS
Destino: SAP
PRIMEIRA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é uma área no WCS. É diferente de WMTOCO-VLTYP é uma área no WCS
Origem: WCS
Destino: SAP
SEGUNDA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é diferente de WMTOCO-VLTYP
Origem: WCS
Destino: SAP

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** WMCATO (Cancelamento)  
**Score:** — (nome-topico) | **ID:** 5a17d54ab52f53d9

Integração para o SAP enviar a solicitação de cancelamento ao WCS Velox.
Origem: SAP
Destino: WCS
WCS Velox responde se o cancelamento solicitado é possivel.
Origem: WCS
Destino: SAP

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** b7238f254c86eb5b

As informações serão trocadas via IDOC-SAP (Intermadiate Document) no SAP é um formato padrão de troca de dados entre sistemas, permitindo a integração eficiente e confiável de informações em ambientes SAP e não SAP (WCS WCS). Funciona como um pacote de dados estruturado, contendo informações sobre transações comerciais, como pedidos, faturas ou informações materiais. Os IDocs facilitam a comunicação entre sistemas heterogêneos, garantindo consistência e integridade nos processos empresariais, além de fornecer um mecanismo para monitorar e controlar o fluxo de dados na plataforma SAP.
Os IDocs serão enviados no formato de XML (SOAP). A integração por XML SOAP (Simple Object Access Protocol) é um padrão amplamente utilizado para a troca de informações entre sistemas distribuídos na web. Utilizando o formato XML para estruturar informações, o protocolo SOAP para definição de regras de comunicação, essa abordagem permite encapsular dados em envelopes XML, detalhando cabeçalhos e corpos das mensagens. Comumente baseada em protocolos de transporte como HTTP, a integração SOAP proporciona flexibilidade e interoperabilidade entre diferentes plataformas e linguagens de programação. Além de suportar operações CRUD (Create, Read, Update, Delete), oferece mecanismos de segurança, como SSL/TLS, para garantir a confidencialidade e integridade dos dados transmitidos. Em resumo, a integração por XML SOAP é uma solução padronizada, eficiente e segura para comunicação entre sistemas distribuídos na web. Detalhamento das integrações trocadas entre WCS WCS e SAP.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** TORD - Criação da OT  
**Score:** — (semantico) | **ID:** 55e606e53729e95d

WCSSAP
Integração que o WCS deve enviar para solicitar um reabastecimento no buffer ou na posição destino.
Integração de IDOC de criação de OT TORD: ENTRADA SAP:
SAPWCS
Integração de IDOC de criação de OT TORD: SAIDA SAP :

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** TOCO – Confirmação da OT  
**Score:** — (semantico) | **ID:** 1ca9669431840cb4

WCSSAP
Integração de IDOC de confirmação de OT TOCO: ENTRADA e SAIDA SAP

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** CATO - Estorno da OT  
**Score:** — (nome-topico) | **ID:** 690d9be645525972

SAPWCS
Integração de IDOC de estorno CATO: Entrada e Saida SAP

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** IDOC - Remessas  
**Score:** — (nome-topico) | **ID:** ad3a199dde64b2be

SAP  WCS
Principal Integração responsável por enviar as remessas para o sistema WCS.
Segue os campos necessários:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** IDOC - Criação/Deleção Ondas  
**Score:** — (nome-topico) | **ID:** 27e9388d310d6b75

WCS  SAP
Integração responsável por informar que uma onda foi criada e/ou deletada dentro do sistema WCS.
Segue exemplos dos campos:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** Criação de Onda  
**Score:** — (semantico) | **ID:** e0c9a508e44a3416

O sistema WCS deve exibir ao usuário os itens da remessa que não serão atendidos na função Preparar a Onda. Com essas informações, o operador poderá cancelar a remessa toda ou parcialmente, ou seja, item que não  será atendido na remessa.
Quando for feito o cancelamento, do item ou da remessa, será enviado um IDOC com o cancelamento para o SAP. No caso do cancelamento do item da remessa, será informado no final do último volume da remessa desviado na doca.
Haverá a necessidade da operação de reenvio de um item que já foi cancelado, onde nessa situação o SAP irá reenviar a remessa inteira e o WCS deve avaliar o que já foi realizado e seguir apenas com o que havia sido cancelado.
Para todos os veículos deverá ter uma trava para não iniciar sem que a prioridade, doca, tipo de carga (estivado ou palletizado) e ordem de separação (temperatura/peso) sejam definidas.
O WCS deverá exibir, conforme definido na etapa de criação da onda, um monitor com porcentagens de separação dos itens congelados e resfriados do atendimento da onda indicando:
O que está sendo atendido.
O que não está sendo atendido nos processos AC e AA.
Monitoramento de Produtos Cortados no AA
O monitor deverá conter um campo específico para exibir os produtos cortados no AA. Até o momento, o corte pode ser por avaria, falta do item na posição, não conter o range de data (shelf-life) solicitado.
Assim que o separador sinalizar o corte no PBL, o sistema deverá:
Buscar uma nova posição para o material dentro do AA.
Caso não encontre disponibilidade no AA, buscar o reabastecimento do item no AC.
Se também não houver no AC, o item ficará pendente e no final do processo, no ultimo volume da remessa, deve ser enviado o IDOC para o SAP e ser realizado as devidas tratativas.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 806a2b080ca20b29

As informações serão trocadas via IDOC-SAP (Intermadiate Document) no SAP é um formato padrão de troca de dados entre sistemas, permitindo a integração eficiente e confiável de informações em ambientes SAP e não SAP (WCS WCS). Funciona como um pacote de dados estruturado, contendo informações sobre transações comerciais, como pedidos, faturas ou informações materiais. Os IDocs facilitam a comunicação entre sistemas heterogêneos, garantindo consistência e integridade nos processos empresariais, além de fornecer um mecanismo para monitorar e controlar o fluxo de dados na plataforma SAP.
Os IDocs serão enviados no formato de XML (SOAP). A integração por XML SOAP (Simple Object Access Protocol) é um padrão amplamente utilizado para a troca de informações entre sistemas distribuídos na web. Utilizando o formato XML para estruturar informações, o protocolo SOAP para definição de regras de comunicação, essa abordagem permite encapsular dados em envelopes XML, detalhando cabeçalhos e corpos das mensagens. Comumente baseada em protocolos de transporte como HTTP, a integração SOAP proporciona flexibilidade e interoperabilidade entre diferentes plataformas e linguagens de programação. Além de suportar operações CRUD (Create, Read, Update, Delete), oferece mecanismos de segurança, como SSL/TLS, para garantir a confidencialidade e integridade dos dados transmitidos. Em resumo, a integração por XML SOAP é uma solução padronizada, eficiente e segura para comunicação entre sistemas distribuídos na web. Detalhamento das integrações trocadas entre WCS WCS e SAP.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** TORD - Criação da OT  
**Score:** — (semantico) | **ID:** 66168b91224aa685

WCSSAP
Integração que o WCS deve enviar para solicitar um reabastecimento no buffer ou na posição destino.
Integração de IDOC de criação de OT TORD: ENTRADA SAP:
SAPWCS
Integração de IDOC de criação de OT TORD: SAIDA SAP :

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** TOCO – Confirmação da OT  
**Score:** — (semantico) | **ID:** cfef71157d1875b5

WCSSAP
Integração de IDOC de confirmação de OT TOCO: ENTRADA e SAIDA SAP

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** CATO - Estorno da OT  
**Score:** — (nome-topico) | **ID:** dcc0db472fd8790a

SAPWCS
Integração de IDOC de estorno CATO: Entrada e Saida SAP

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** IDOC - Remessas  
**Score:** — (nome-topico) | **ID:** 94300cea369c3603

SAP  WCS
Principal Integração responsável por enviar as remessas para o sistema WCS.
Segue os campos necessários:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** IDOC - Criação/Deleção Ondas  
**Score:** — (nome-topico) | **ID:** 93bf4433864bfef4

WCS  SAP
Integração responsável por informar que uma onda foi criada e/ou deletada dentro do sistema WCS.
Segue exemplos dos campos:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** Gestão de Estoque  
**Score:** — (semantico) | **ID:** 0e1cd71697e922f9

A atualização do Estoque no WCS será executada via IDOC sendo originada pelo SAP, quando houver quaisquer movimentos entre posições no SAP, sendo de Armazenagens, DE x PARA, Housekeeping AC, Bloqueios, desbloqueios, Confirmações de Ots (SM, Troca lotes, etc) será enviado um IDOC para atualizar estas informações no WCS.
O WCS deverá realizar um espelho das posições do AC.
A Consulta deverá conter filtro de consulta com parâmetros selecionáveis com múltiplas informações:
Posição/Canal
SKU
Lote
Quantidade
UMB
Palete/UD
%Shelf
Descrição
Data Fabricação
Data Vencimento
Temperatura
Faixa Cor
Depósito
Centro
Esvaziar Canal
Nível
Gerar relatório em CSV
Quando definido os dados de seleção no filtro, apresentar uma Nova Visão com os parâmetros informados e filtrados.
Haverá uma opção que possibilita gerar um arquivo em CSV para exportar e importar no SAP para efetuar as conciliações entre WCS e SAP.
Qualquer bloqueio e desbloqueio do SAP
No relatório de bloqueios, deverá constar o Usuário executor, data, hora, tipo de bloqueio, motivo do bloqueio.
Será disponibilizados um botão com a função de exibir o histórico de movimentações do canal. Os filtros desta ação serão:
Posição/Canal
Data início
Data Fim
Palete/UD
Descrição
SKU
Lote
Quantidade
UMB
Usuário Separação
Usuário Criação
Histórico de Bloqueio/Desbloqueio
Usuário Solicitante
Usuário Executor
Nível
Housekeeping
Quando definido os dados de seleção no filtro, apresentar uma Nova Visão com os parâmetros informados e filtrados.
O Botão de esvaziar o canal irá mostrar a listagem de todos os canais do CD e quais posições o sistema está sugerindo (com base na IA) que seja esvaziado o canal, sendo possível selecionar todos ou parcial e, executar o comando de esvaziar.
Sempre perguntar com pop up de o usuário deseja realmente executar comando.
O sistema vai bloquear qualquer tipo de ressuprimento para aquele canal e manter bloqueado até que o operador acione o LED confirmando que retirou todos os volumes da posição.
No Visor do Picking to Light apresentará em uma cor diferente da usada na coleta e um código especifico para evidenciar a ordem de esvaziar o canal, ex 999, e o colaborador irá confirmar a retirada das caixas pressionando o LED.
O WCS após a confirmação da retirada irá atualizar o banco.
Para a Limpeza do Buffer comandar a retirada via robô) o robô vai retirar o PL fechado e colocar no BK25 de saída.
Posição Picking irá aparecer no Visor do Picking to Light o código mencionado e o colaborador irá jogar as caixas na esteira para sair no Rejeito.
Quando finalizar a limpeza do Buffer, o WCS deixará as posições livres para ser reabastecido.
Quando finalizar a retirada dos canais, o WCS deixará livre as posições para serem reabastecidas com o mesmo SKU ou outro conforme análise.
Segue exemplo do monitor que mencionamos nos processos acima:
(Imagem meramente ilustrativa para uso do time de desenvolvimento)

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** Abastecimento  
**Score:** — (semantico) | **ID:** 1009fa7101236652

O WCS seleciona a melhor posição de retirada, SAP gera a Ordem de Transporte (OT) e retorna as informações ao AA, incluindo posição de origem (SAP), posição de destino (informada pelo WCS), produto, quantidade de caixas, peso líquido, lote (um ou mais lotes no mesmo pallet), Unidade de Distribuição (UD), produção (uma ou mais), vencimento (um ou mais), e tipo de estoque (livre, bloqueado, qualidade etc.).
Para definir a melhor posição/palete de retirada, o WCS deve:
No cadastro o WCS deve identificar o produto e faixa a ser Reabastecido do canal em questão;
Validar o FEFO do material, “varrendo” o estoque do AA (Buffer/Pulmão) e AC, para identificar o LOTE mais velho a ser atendido respeitando o Lead Time.
Em caso de vários palete com o mesmo lote, deve ser priorizado o Buffer, e no AC vai seguir a Zona de Armazenagem (que consta no cadastro da posição) e depois por sequência de posição.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** b99d5d6c6c086dce

As informações serão trocadas via IDOC-SAP (Intermadiate Document) no SAP é um formato padrão de troca de dados entre sistemas, permitindo a integração eficiente e confiável de informações em ambientes SAP e não SAP (WCS WCS). Funciona como um pacote de dados estruturado, contendo informações sobre transações comerciais, como pedidos, faturas ou informações materiais. Os IDocs facilitam a comunicação entre sistemas heterogêneos, garantindo consistência e integridade nos processos empresariais, além de fornecer um mecanismo para monitorar e controlar o fluxo de dados na plataforma SAP.
Os IDocs serão enviados no formato de XML (SOAP). A integração por XML SOAP (Simple Object Access Protocol) é um padrão amplamente utilizado para a troca de informações entre sistemas distribuídos na web. Utilizando o formato XML para estruturar informações, o protocolo SOAP para definição de regras de comunicação, essa abordagem permite encapsular dados em envelopes XML, detalhando cabeçalhos e corpos das mensagens. Comumente baseada em protocolos de transporte como HTTP, a integração SOAP proporciona flexibilidade e interoperabilidade entre diferentes plataformas e linguagens de programação. Além de suportar operações CRUD (Create, Read, Update, Delete), oferece mecanismos de segurança, como SSL/TLS, para garantir a confidencialidade e integridade dos dados transmitidos. Em resumo, a integração por XML SOAP é uma solução padronizada, eficiente e segura para comunicação entre sistemas distribuídos na web. Detalhamento das integrações trocadas entre WCS WCS e SAP.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** TORD - Criação da OT  
**Score:** — (semantico) | **ID:** d3ec92b68a5fc33d

WCSSAP
Integração que o WCS deve enviar para solicitar um reabastecimento no buffer ou na posição destino.
Integração de IDOC de criação de OT TORD: ENTRADA SAP:
SAPWCS
Integração de IDOC de criação de OT TORD: SAIDA SAP :

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** TOCO – Confirmação da OT  
**Score:** — (semantico) | **ID:** 47fa70bca53e9e1d

WCSSAP
Integração de IDOC de confirmação de OT TOCO: ENTRADA e SAIDA SAP

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** CATO - Estorno da OT  
**Score:** — (nome-topico) | **ID:** ea21beaff670d74e

SAPWCS
Integração de IDOC de estorno CATO: Entrada e Saida SAP

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** IDOC - Remessas  
**Score:** — (nome-topico) | **ID:** d134eeba201a943d

SAP  WCS
Principal Integração responsável por enviar as remessas para o sistema WCS.
Segue os campos necessários:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** IDOC - Criação/Deleção Ondas  
**Score:** — (nome-topico) | **ID:** 7831edeb91fb65a1

WCS  SAP
Integração responsável por informar que uma onda foi criada e/ou deletada dentro do sistema WCS.
Segue exemplos dos campos:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 69e9dc145f817a96

As informações serão trocadas via IDOC-SAP (Intermadiate Document) no SAP é um formato padrão de troca de dados entre sistemas, permitindo a integração eficiente e confiável de informações em ambientes SAP e não SAP (WCS WCS). Funciona como um pacote de dados estruturado, contendo informações sobre transações comerciais, como pedidos, faturas ou informações materiais. Os IDocs facilitam a comunicação entre sistemas heterogêneos, garantindo consistência e integridade nos processos empresariais, além de fornecer um mecanismo para monitorar e controlar o fluxo de dados na plataforma SAP.
Os IDocs serão enviados no formato de XML (SOAP). A integração por XML SOAP (Simple Object Access Protocol) é um padrão amplamente utilizado para a troca de informações entre sistemas distribuídos na web. Utilizando o formato XML para estruturar informações, o protocolo SOAP para definição de regras de comunicação, essa abordagem permite encapsular dados em envelopes XML, detalhando cabeçalhos e corpos das mensagens. Comumente baseada em protocolos de transporte como HTTP, a integração SOAP proporciona flexibilidade e interoperabilidade entre diferentes plataformas e linguagens de programação. Além de suportar operações CRUD (Create, Read, Update, Delete), oferece mecanismos de segurança, como SSL/TLS, para garantir a confidencialidade e integridade dos dados transmitidos. Em resumo, a integração por XML SOAP é uma solução padronizada, eficiente e segura para comunicação entre sistemas distribuídos na web. Detalhamento das integrações trocadas entre WCS WCS e SAP.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** TORD - Criação da OT  
**Score:** — (semantico) | **ID:** 8b5537fea313c7f2

WCSSAP
Integração que o WCS deve enviar para solicitar um reabastecimento no buffer ou na posição destino.
Integração de IDOC de criação de OT TORD: ENTRADA SAP:
SAPWCS
Integração de IDOC de criação de OT TORD: SAIDA SAP :

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** TOCO – Confirmação da OT  
**Score:** — (semantico) | **ID:** ee3a608a63cd2c17

WCSSAP
Integração de IDOC de confirmação de OT TOCO: ENTRADA e SAIDA SAP

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** CATO - Estorno da OT  
**Score:** — (nome-topico) | **ID:** 1673c40c79ab9ddf

SAPWCS
Integração de IDOC de estorno CATO: Entrada e Saida SAP

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** IDOC - Remessas  
**Score:** — (nome-topico) | **ID:** ec6190a6a2e3af71

SAP  WCS
Principal Integração responsável por enviar as remessas para o sistema WCS.
Segue os campos necessários:

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** IDOC - Criação/Deleção Ondas  
**Score:** — (nome-topico) | **ID:** ba4b220ae6b776b1

WCS  SAP
Integração responsável por informar que uma onda foi criada e/ou deletada dentro do sistema WCS.
Segue exemplos dos campos:

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Cancelamento de Romaneios  
**Score:** — (semantico) | **ID:** 3b656b0bc3045df6

Processo sistêmico de cancelar um roamenio devido alguma adversidade sistêmica ou operacional durante o cotidiano da separação.
Método que será realizado diretamente pelo WMS apenas nos enviando a integração de cancelamento.
Uma vez que essa integração chegou ao WCS não há como remedir ou alterar o cancelamento, caso ocorra algum erro da parte dos usuários do WMS, será necessário gerar um novo romaneio novamente.
Todos os volumes que não foram iniciados sua separação, ou seja, impressos no Order Start da sua área serão cancelados e não serão exibidos no Order Start. Volumes que estiverem em separação serão cancelados suas ordens de separação pendentes e deverão ser induzidos na linha para serem recebidos e avisados na conferência.
O WCS não terá nenhuma ação para volumes já finalizados, ou seja, que já passaram pelo portal do sorter, pois já terá sido enviado a integração de retorno dos volumes.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** WMTORD (Armazena)  
**Score:** — (nome-topico) | **ID:** 00f96e9fe37abd90

Principal integração entre os sistemas SAP e WCS, onde serão enviadas as informações para a armazenagem.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’
Origem: SAP
Destino: WCS

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** WMTORD (Retira)  
**Score:** — (nome-topico) | **ID:** 7962445d515e2c16

Principal integração entre os sistemas SAP e WCS, onde serão enviadas as informações para a retirada.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’.
Origem: SAP
Destino: WCS

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** WMTOCO (Confirmação)  
**Score:** — (nome-topico) | **ID:** f05898a7cf630755

Confirma quando o transelevador remover o pallet do local em HB para o local SAP. (WMTORD-NLTYP é um local de armazenamento no SAP WMTORD-VLTYP é uma área no WCS), ou seja, no memento que o transelevador altera a TAG informando que o pallet já está sobre ele o WCS Velox envia a integração WMTOCO para o SAP.
Origem: WCS
Destino: SAP
Confirma o armazenamento quando o transelevador armazenar pallets do local SAP para o local HB
(WMTORD-NLTYP é uma área no WCS e WMTORD-VLTYP é um local de armazenamento no SAP)
Origem: WCS
Destino: SAP
PRIMEIRA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é uma área no WCS. É diferente de WMTOCO-VLTYP é uma área no WCS
Origem: WCS
Destino: SAP
SEGUNDA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é diferente de WMTOCO-VLTYP
Origem: WCS
Destino: SAP

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** WMCATO (Cancelamento) - Retirada  
**Score:** — (nome-topico) | **ID:** da33a1e8ea359d97

Integração para o SAP enviar a solicitação de cancelamento ao WCS Velox, essa integração só será executada se o cancelamento for enviado antes do comando (alteração de TAG) que o WCS faz para enviar a tarefa de retirada ao TransElevador.
Origem: SAP
Destino: WCS
WCS Velox responde se o cancelamento solicitado é possível.
Origem: WCS
Destino: SAP

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Portais de entrada  
**Score:** — (semantico) | **ID:** ebb4540cae0a08fa

Existem portais de entrada na automação, onde a operação pode utilizar quaisquer portais de entrada para qualquer produto.
Antes da indução de pallets no portal de entrada é necessário realizar as integrações SAP 
WCS Velox.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** WMTORD (Armazena)  
**Score:** — (nome-topico) | **ID:** 1ec11b74a2bc318a

Principal integração entre os sistemas SAP e WCS, onde serão enviadas as informações para a armazenagem.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’
Origem: SAP
Destino: WCS

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** WMTORD (Retira)  
**Score:** — (nome-topico) | **ID:** e9cb867314a9183c

Principal integração entre os sistemas SAP e WCS, onde serão enviadas as informações para a retirada.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’.
Origem: SAP
Destino: WCS

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** WMTOCO (Confirmação)  
**Score:** — (nome-topico) | **ID:** 6a68513358fbb868

Confirma quando o transelevador remover o pallet do local em HB para o local SAP. (WMTORD-NLTYP é um local de armazenamento no SAP WMTORD-VLTYP é uma área no WCS), ou seja, no memento que o transelevador altera a TAG informando que o pallet já está sobre ele o WCS Velox envia a integração WMTOCO para o SAP.
Origem: WCS
Destino: SAP
Confirma o armazenamento quando o transelevador armazenar pallets do local SAP para o local HB
(WMTORD-NLTYP é uma área no WCS e WMTORD-VLTYP é um local de armazenamento no SAP)
Origem: WCS
Destino: SAP
PRIMEIRA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é uma área no WCS. É diferente de WMTOCO-VLTYP é uma área no WCS
Origem: WCS
Destino: SAP
SEGUNDA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é diferente de WMTOCO-VLTYP
Origem: WCS
Destino: SAP

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** WMCATO (Cancelamento) - Retirada  
**Score:** — (nome-topico) | **ID:** 88d46c8a94e2f63b

Integração para o SAP enviar a solicitação de cancelamento ao WCS Velox, essa integração só será executada se o cancelamento for enviado antes do comando (alteração de TAG) que o WCS faz para enviar a tarefa de retirada ao TransElevador.
Origem: SAP
Destino: WCS
WCS Velox responde se o cancelamento solicitado é possível.
Origem: WCS
Destino: SAP

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMTORD (Armazena)  
**Score:** — (nome-topico) | **ID:** 7a190069da29806a

Principal integração entre os sistemas SAP e WCS, onde serão enviados as informações para a armazenagem.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’
Origem: SAP
Destino: WCS

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMTORD (Retira)  
**Score:** — (nome-topico) | **ID:** 88279eb3087f04dc

Principal integração entre os sistemas SAP e WCS, onde serão enviados as informações para a retirada.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’.
Origem: SAP
Destino: WCS

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMTOCO (Confirmação)  
**Score:** — (nome-topico) | **ID:** 9261df273055658a

Confirma quando o transelevador remover o pallet do local em HB para o local SAP. (WMTORD-NLTYP é um local de armazenamento no SAP WMTORD-VLTYP é uma área no WCS), ou sejá, no memento que o transelevador altera a TAG infomrando que o pallet já esta sobre ele o WCS Velox envia a integração WMTOCO para o SAP.
Origem: WCS
Destino: SAP
Confirma o armazenamento quando o transelevador armazenar pallets do local SAP para o local HB
(WMTORD-NLTYP é uma área no WCS e WMTORD-VLTYP é um local de armazenamento no SAP)
Origem: WCS
Destino: SAP
PRIMEIRA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é uma área no WCS. É diferente de WMTOCO-VLTYP é uma área no WCS
Origem: WCS
Destino: SAP
SEGUNDA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é diferente de WMTOCO-VLTYP
Origem: WCS
Destino: SAP

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMCATO (Cancelamento) - Retirada  
**Score:** — (nome-topico) | **ID:** c08a2608deec8881

Integração para o SAP enviar a solicitação de cancelamento ao WCS Velox, essa integração só será executada se o cancelamento for enviado antes do comando (alteração de TAG) que o WCS faz para enviar a tarefa de retirada ao TransElevador.
Origem: SAP
Destino: WCS
WCS Velox responde se o cancelamento solicitado é possível.
Origem: WCS
Destino: SAP

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMTORD (Armazena)  
**Score:** — (nome-topico) | **ID:** 59b36057214d6397

Principal integração entre os sistemas SAP e WCS, onde serão enviados as informações para a armazenagem.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’
Origem: SAP
Destino: WCS

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMTORD (Retira)  
**Score:** — (nome-topico) | **ID:** 62addf1c38b5f169

Principal integração entre os sistemas SAP e WCS, onde serão enviados as informações para a retirada.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’.
Origem: SAP
Destino: WCS

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMTOCO (Confirmação)  
**Score:** — (nome-topico) | **ID:** 9de1e6610abf5eb0

Confirma quando o transelevador remover o pallet do local em HB para o local SAP. (WMTORD-NLTYP é um local de armazenamento no SAP WMTORD-VLTYP é uma área no WCS), ou sejá, no memento que o transelevador altera a TAG infomrando que o pallet já esta sobre ele o WCS Velox envia a integração WMTOCO para o SAP.
Origem: WCS
Destino: SAP
Confirma o armazenamento quando o transelevador armazenar pallets do local SAP para o local HB
(WMTORD-NLTYP é uma área no WCS e WMTORD-VLTYP é um local de armazenamento no SAP)
Origem: WCS
Destino: SAP
PRIMEIRA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é uma área no WCS. É diferente de WMTOCO-VLTYP é uma área no WCS
Origem: WCS
Destino: SAP
SEGUNDA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é diferente de WMTOCO-VLTYP
Origem: WCS
Destino: SAP

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMCATO (Cancelamento) - Retirada  
**Score:** — (nome-topico) | **ID:** 76da78e8c7a5cdc2

Integração para o SAP enviar a solicitação de cancelamento ao WCS Velox, essa integração só será executada se o cancelamento for enviado antes do comando (alteração de TAG) que o WCS faz para enviar a tarefa de retirada ao TransElevador.
Origem: SAP
Destino: WCS
WCS Velox responde se o cancelamento solicitado é possível.
Origem: WCS
Destino: SAP

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMTORD (Armazena)  
**Score:** — (nome-topico) | **ID:** f6a416433f4646d8

Principal integração entre os sistemas SAP e WCS, onde serão enviados as informações para a armazenagem.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’
Origem: SAP
Destino: WCS

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMTORD (Retira)  
**Score:** — (nome-topico) | **ID:** a128edd3e1f41d2b

Principal integração entre os sistemas SAP e WCS, onde serão enviados as informações para a retirada.
Nesse caso, a informação do campo ‘TRART’ será composta pela informação ‘E’.
Origem: SAP
Destino: WCS

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMTOCO (Confirmação)  
**Score:** — (nome-topico) | **ID:** 24441fcc8a93a507

Confirma quando o transelevador remover o pallet do local em HB para o local SAP. (WMTORD-NLTYP é um local de armazenamento no SAP WMTORD-VLTYP é uma área no WCS), ou sejá, no memento que o transelevador altera a TAG infomrando que o pallet já esta sobre ele o WCS Velox envia a integração WMTOCO para o SAP.
Origem: WCS
Destino: SAP
Confirma o armazenamento quando o transelevador armazenar pallets do local SAP para o local HB
(WMTORD-NLTYP é uma área no WCS e WMTORD-VLTYP é um local de armazenamento no SAP)
Origem: WCS
Destino: SAP
PRIMEIRA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é uma área no WCS. É diferente de WMTOCO-VLTYP é uma área no WCS
Origem: WCS
Destino: SAP
SEGUNDA CONFIRMAÇÃO – Confirma a recuperação quando o transelevador remove o pallet do local no HB para outro local do HB.
WMTOCO-NLTYP é diferente de WMTOCO-VLTYP
Origem: WCS
Destino: SAP

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** WMCATO (Cancelamento) - Retirada  
**Score:** — (nome-topico) | **ID:** c6fe5723d21224b5

Integração para o SAP enviar a solicitação de cancelamento ao WCS Velox, essa integração só será executada se o cancelamento for enviado antes do comando (alteração de TAG) que o WCS faz para enviar a tarefa de retirada ao TransElevador.
Origem: SAP
Destino: WCS
WCS Velox responde se o cancelamento solicitado é possível.
Origem: WCS
Destino: SAP
