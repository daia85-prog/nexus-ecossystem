# integracao-wcs-wms.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 5.2. Inbound Sync (POST)  
**Score:** — (json-no-corpo) | **ID:** e915957e4310d3d4

WCS → WMS
Essa integração tem como objetivo espelhar o estado atual do estoque em posse do WCS ao
WMS.
O WCS informará a quantidade atual do estoque em posse do WCS, considerando os
recebimentos da integração CET “Confirmação Entrada no Transfer” (POST) e a saída desses
itens.
Observação: O WCS deve enviar de forma consolidada a quantidade total do estoque referente
aquele item, considerando o saldo total de todos os endereços que ela se encontra.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 150
},
{
"codInterno": "string",
"qtd": 150
}
]
Campo
Tipo
Obrigatório Exemplo
Obs
codInterno
String
Sim
7908052844227
Código Identificador do produto
Qtd
Integer Não
Saldo atual da posição

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 5.6. CC “Confirmação de Coleta” (POST)  
**Score:** — (semantico) | **ID:** 657cd7d64c965be6

WCS→WMS
Finalização do Picking: A integração de confirmação de picking será enviada pelo
Velox somente quando o picking em todas as estações estiver finalizado e a
validação indicar que a caixa não contém divergências de coleta. Não haverá
envio de mensagens de picking parcial neste fluxo.
Sem necessidade de auditagem: Caso a caixa não precise ser direcionada para a
estação de auditagem, a confirmação de picking será enviada assim que o volume
passar pelo portal de RFID, sem qualquer outro processamento adicional.
Necessidade de auditagem: Se a caixa precisar ser direcionada para a estação de
auditagem, o fluxo será:
1. A caixa será enviada para a auditagem.
2. A divergência será tratada, podendo ser resolvida ou aceita pelo usuário.
3. Após a resolução da divergência, a mensagem de confirmação de picking
será então enviada ao WMS.
• Pedidos com múltiplos volumes: Quando um mesmo pedido for quebrado em mais de um
volume, o WCS enviará a integração volume a volume. Cada volume terá sua confirmação
transmitida de forma independente no momento em que for finalizado, sem aguardar a
conclusão dos demais volumes do pedido.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Snap Shot (POST)  
**Score:** — (json-no-corpo) | **ID:** 4f0a742da0fdf519

WMS→WCS
Essa integração tem como objetivo espelhar o estado atual do estoque em todas as
posições do estoque, conforme registrado no WMS.
Observação: Caso as posições de picking estejam ocupadas, o WCS realizará a baixa dos itens
nelas contidos, considerando exclusivamente os dados recebidos na integração Snap Shot. Se
uma posição estiver vazia no payload, o WCS assumirá que está desocupada. Para posições
com itens informados, o WCS atualizará os dados conforme os novos itens e quantidades
enviados.
Regra adicional: sempre que a quantidade chegar a 0 (qtd=0), o WCS deve esvaziar a posição
(tratá-la como vazia), liberando-a para novas alocações. A regra se aplica tanto para qtd=0
quanto para codInterno=null. Finalidade da integração: (1) envio da foto inicial do estoque no
startup/carga do WCS e (2) equalização sob demanda, quando identificada divergência entre
WMS e WCS — não há disparo em frequência fixa.
Exemplo JSON:
[
"endColeta": "001.001.0001.0001",
"itens": [
"codIntenrno": 12345,
"qtd": 150,
"lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
]
},
"endColeta": "001.001.0001.0001",
"itens": [
"codIntenrno": 12345,
"qtd": 150,
"lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
]
},
"endColeta": "001.001.0001.0001",
"itens": [
"codIntenrno": "string",
"qtd": 150,
"lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
]
]
Obs: Os campos "codInterno" e "endColeta" devem estar corretamente cadastrados no WCS para
que a integração seja aceita.
Campo
Tipo
Obrigatório Exemplo
Obs
codInterno
Integer Sim
7908052844227
Código Identificador do produto
Qtd
integer
Não
Saldo atual da posição
endColeta
String
Sim
01023XPTO
Endereço de coleta
Lote
String
Sim
Lote A
Lote vinculado ao produto
Validade
String
Sim
2024-12-31
Data de validade do produto.
codEmpresa
Integer Sim
Identificador a que empresa pertence a
movimentação

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Inbound Sync (POST)  
**Score:** — (json-no-corpo) | **ID:** 702d6e1501c7a43b

WCS → WMS
Essa integração tem como objetivo espelhar o estado atual do estoque em posse do
WCS ao WMS.
O WCS informará a quantidade atual do estoque em posse do WCS, considerando os
recebimentos da integração CET “Confirmação Entrada no Transfer” (POST) e a saída desses
itens. Essa integração será disparada toda vez que tivermos movimentações nos porta pallets
(pulmão) visando manter atualizado o estoque no WMS. Também será utilizada para
movimentação entre porta pallets.
Exemplo JSON:
[
"codInterno": 7908052844227,
"qtd": 0,
"endColeta": "string",
"lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
"codInterno": 7908052844227,
"qtd": 850,
"endColeta": "string",
"lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
]
Campo
Tipo
Obrigatório Exemplo
Obs
codInterno
Integer Sim
7908052844227
Código Identificador do produto
Qtd
Integer Não
Saldo atual da posição
endColeta
String
Sim
01023XPTO
Endereço de coleta
Lote
String
Sim
Lote A
Lote vinculado ao produto
Validade
String
Sim
2024-12-31
Data de validade do produto.
codEmpresa
Integer Sim
Identificador a que empresa pertence a
movimentação

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Devolução de Volumes cancelados  
**Score:** — (semantico) | **ID:** 57d6c26cbfeb34f4

O processo de devolução de volumes cancelados ocorre quando há a necessidade de retornar
volumes que foram processados, mas ainda não enviados na integração para o WMS. Quando
um volume cancelado é identificado, ele precisa ser retirado do fluxo operacional e devolvido de
forma adequada.
Fluxo do Processo:
Identificação do Volume Cancelado: O WCS identifica o volume cancelado através
de uma integração com o WMS ou por meio de um cancelamento no próprio sistema
WCS.
Criação de Tarefa de Devolução: O WCS cria automaticamente uma tarefa de
devolução para cada volume associado ao pedido cancelado. A tarefa gerada ficará
disponível na tela de devolução para o operador.
Início da Tarefa: O operador realiza o login no WCS utilizando o coletor Android e
acessa a tela de devolução de volumes cancelados.
Leitura do Volume: O operador localiza fisicamente o volume cancelado e realiza a
leitura do código de barras do volume com o coletor Android.
Início do Processo de Devolução: Após a leitura da etiqueta, o WCS inicia a tarefa
de devolução, redirecionando o operador para a tela da tarefa. Esta tela exibirá a lista
de itens a serem devolvidos, juntamente com a quantidade e o endereço de devolução.
Processo de Devolução: O operador se dirige ao endereço informado na tarefa,
realiza a leitura do código do endereço, confirma a quantidade que está sendo
devolvida e faz a leitura do código do item para confirmar a devolução.
Repetição do Processo: O operador deve repetir o processo para todos os itens
associados ao volume a ser devolvido.
Finalização da Tarefa: Após concluir a devolução de todos os itens, o WCS exibe
uma mensagem informando que a devolução do volume foi concluída. O operador
então poderá ler a próxima etiqueta de volume para iniciar o processo de devolução de
outro volume, se necessário.
O WCS não irá devolver os itens ao Transfer, sendo possível somente devolver para as
posições de picking, caso não haja posição de picking disponível, a tarefa não poderá
ser finalizada até que tenhamos uma posição disponível.
OBS: O WCS disponibiliza um relatório de "Pedidos Cancelados", que pode ser acessado
pelo operador. O operador deverá informar o código do pedido, e o sistema irá gerar uma lista
de todos os volumes associados a esse pedido. O relatório também exibirá em qual local da
automação cada volume está alocado.
Após a finalização de todas as tarefas de devolução vinculadas ao pedido o WCS irá enviar uma
integração informando que os itens do pedido já foram devolvidos para as posições.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** TOCO  
**Score:** — (semantico) | **ID:** b78c13d06f59ce75

Confirmação
SAP/WCS
Confirma que uma etapa da movimentação foi concluída. Pode ser
simples (uma confirmação) ou dupla (duas confirmações em etapas
distintas).

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 2 — Verificação de separação em andamento: Imediatamente após o recebimento,  
**Score:** — (semantico) | **ID:** eb44361fed7c6c85

o WCS verifica se existe alguma coleta em andamento na posição solicitada (LED aceso,
operador coletando). Duas situações podem ocorrer:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** DISPONIVEL e selecionar a opção de cancelamento de remessa, o WCS irá exibir uma caixa  
**Score:** — (semantico) | **ID:** 2132369b19e26383

de confirmação solicitando usuário e senha para confirmar a operação de cancelamento.
Após a validação do usuário o cancelamento interno é realizado e os status das informações
relacionada a remessa são atualizados [Status possíveis para cada informação no WCS] o WCS
realiza o envio da integração de cancelamento de remessa ao SAP.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Execução e Continuidade das Coletas  
**Score:** — (semantico) | **ID:** 62dfcee1ceb045f8

O operador realiza a coleta conforme indicação do LED e confirma a execução ao final de
cada posição. A cada confirmação, o WCS deve registrar o operador responsável,
garantindo a rastreabilidade da operação.
A execução da coleta é totalmente guiada pela lista de coleta gerada na onda, sendo
está a referência principal do processo. O WCS deve seguir essa lista até sua conclusão,
garantindo que toda a demanda seja atendida conforme planejado.
A lista de coleta é tratada de forma segmentada por postos de trabalho. Isso significa que,
embora a lista seja única por onda, sua execução ocorre de forma distribuída, onde cada
posto consome apenas as tarefas que correspondem às suas posições de picking. Dessa
forma, o WCS mantém o controle da execução global da onda, enquanto gerencia de forma
independente a fila de tarefas de cada posto.
Após a finalização das tarefas inicialmente atribuídas ao posto, o WCS deve avaliar
automaticamente a existência de novas coletas pendentes para a mesma onda,
considerando múltiplos critérios operacionais.
A liberação de novas tarefas não deve ocorrer apenas com base na existência de demanda,
mas sim após validação completa das seguintes condições:
•
Existência de demanda pendente da onda para o posto, considerando SKU, quantidade
e posições elegíveis ainda não atendidas
•
Disponibilidade de estoque nas posições de picking, incluindo:
o
Estoque físico disponível
o
Posições ainda não consumidas ou parcialmente consumidas
o
Respeito às regras de seleção de lote [Seleção de Lote]
•
Tipo de produto a ser coletado, garantindo a priorização correta:
o
Materiais PVAR devem ter a prioridade maior de coleta dos demais tipos
(PPAD/PFIX) [Coleta PVAR]
•
Regras de temperatura associadas à onda:
o
Em cenários de transporte não misto, o WCS deve respeitar a sequência de
temperatura definida na criação da onda [Manutenção de transportes].
o
Em cenários de transporte misto, o sistema pode liberar coletas de diferentes
temperaturas de forma paralela, conforme disponibilidade e prioridade
[Tipos de Separação]
•
Estado atual da execução no posto:
o
Garantir que não existam tarefas ativas antes de liberar novas posições
o
Respeitar a sequência lógica definida para o fluxo de coleta
Após a validação de todos os critérios, caso existam tarefas elegíveis, o WCS deve liberar
automaticamente as próximas coletas ao operador, acionando os LEDs conforme a ordem de
prioridade estabelecida.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Regra de validade: A data de validade é informada de trás para frente: Ano, Mês e Dia  
**Score:** — (semantico) | **ID:** 64d8aa9815afdc09

(AAMMDD). O código identificador da validade está em migração do AI (15) para o AI (17). O
WCS deve estar preparado para interpretar ambos os códigos durante a operação.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Volumes Não Tratáveis  
**Score:** — (semantico) | **ID:** 3f6799678c1a2ae7

Para volumes não tratáveis (duplicidade, excedentes, shelf life, separação não confirmada, onda
cancelada), a reimpressão de etiqueta não resolve o problema, pois a causa do rejeito é
sistêmica e não física. Esses volumes são registrados na estação de rejeito para visibilidade da
operação, mas sua tratativa é realizada fora do processo automatizado geralmente envolvendo
realocação manual, devolução ao estoque ou descarte conforme procedimento MBRF.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** 12.1. Etiqueta Picking Pallet e Exceção  
**Score:** — (semantico) | **ID:** 36b15a6fcc94661d

Essa etiqueta será utilizada no processo de separação Picking Pallet e Picking Exceção. O QR
Code (Superior Direito) impresso conterá as informações necessárias para identificação e
rastreabilidade da caixa, com dados provenientes da integração conforme tópico anterior.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 11. Devolução de Volumes Cancelados  
**Score:** — (semantico) | **ID:** 4458d537b3daada6

O processo de devolução de volumes cancelados ocorre quando há a necessidade de retornar
volumes que foram processados, mas ainda não enviados na integração para o WMS. Quando
um volume cancelado é identificado, ele precisa ser retirado do fluxo operacional e devolvido de
forma adequada.
Fluxo do Processo:
Identificação do Volume Cancelado: O WCS identifica o volume cancelado através
da integração de cancelamento com o WMS.
Criação de Tarefa de Devolução: O WCS cria automaticamente uma tarefa de
devolução para cada volume associado ao pedido cancelado. A tarefa gerada ficará
disponível na tela de devolução para o operador.
Início da Tarefa: O operador realiza o login no WCS utilizando o coletor e acessa a
tela de devolução de volumes cancelados.
Leitura do Volume: O operador localiza fisicamente o volume cancelado e realiza a
leitura do código de barras do volume com o coletor.
Início do Processo de Devolução: Após a leitura da etiqueta, o WCS inicia a tarefa
de devolução, redirecionando o operador para a tela da tarefa. Esta tela exibirá a lista
de itens a serem devolvidos, juntamente com a quantidade e o endereço de devolução.
Processo de Devolução: O operador se dirige ao endereço informado na tarefa,
realiza a leitura do código do endereço, confirma a quantidade que está sendo
devolvida e faz a leitura do código do item para confirmar a devolução.
Repetição do Processo: O operador deve repetir o processo para todos os itens
associados ao volume a ser devolvido.
Finalização da Tarefa: Após concluir a devolução de todos os itens, o WCS exibe
uma mensagem informando que a devolução do volume foi concluída. O operador
então poderá ler a próxima etiqueta de volume para iniciar o processo de devolução de
outro volume, se necessário.
Caso não haja posição de Picking disponível, poderá ser utilizado uma posição de
pulmão. A tarefa não poderá ser finalizada até que tenhamos uma posição disponível.
Obs: O WCS disponibiliza um relatório de "Pedidos Cancelados", que pode ser acessado pelo
operador. O operador deverá informar o código do pedido, e o sistema irá gerar uma lista de
todos os volumes associados a esse pedido. O relatório também exibirá em qual local da
automação cada volume foi alocado.
Após a finalização de todas as tarefas de devolução vinculadas ao pedido o WCS irá enviar uma
integração informando que os itens do pedido já foram devolvidos para as posições para que o
wms considere novamente o saldo.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 12.5. Validação Final  
**Score:** — (semantico) | **ID:** 9f545ce5eeefbfd4

A validação final é uma etapa de fechamento conduzida pelo supervisor, e não pelo operador.
Por ter caráter analítico e decisório, nesta etapa o saldo sistêmico é exibido, permitindo ao
supervisor uma análise direcionada, com plena visibilidade do histórico de contagens.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no
mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá
aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste,
contendo o delta de divergência (diferença) entre o estoque físico e o estoque sistêmico.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 15. Recall  
**Score:** — (semantico) | **ID:** 776f4bd2da9302ba

O processo de Recall é utilizado quando a operação precisa remover itens específicos da linha de
separação. É possível solicitar a retirada de um lote específico ou de todos os lotes de um
determinado SKU. O processo é iniciado no WCS Velox e dividido em duas etapas principais:
Criação da Tarefa de Recall e Execução da Tarefa de Recall.
[GAP - validar] Possibilidade de o recall ser iniciado pelo WMS. Nesta versão, o recall é iniciado
no WCS Velox; caso seja necessário que a solicitação parta do WMS, deverá ser incluída uma
integração específica para que o WMS dispare a tarefa de recall no WCS. Validar definição com o
time Spark.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Finalização e Confirmação  
**Score:** — (semantico) | **ID:** 907cf6c097a915a4

Ao final da coleta de cada volume, o operador confirmará a separação escaneando somente o
código da etiqueta na qual os itens estão sendo alocados, assegurando que a separação foi
concluída corretamente para aquele volume específico. Essa dinâmica garante controle total sobre
o processo, evita desvios e assegura a rastreabilidade.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor
verde, indicando a finalização. Esse ciclo será repetido para todos os endereços indicados pelo
sistema.
Ao concluir todas as visitas, o operador será notificado de que a separação daquele ciclo no
Picking Cart foi finalizada. Independentemente das possibilidades subsequentes (volume
completo ou necessidade de complementação na automação), o fim do processo Picking Cart, do
ponto de vista do operador, é sempre o destino da caixa no início da esteira. O Velox tratará
internamente o roteamento subsequente.
A integração de Confirmação de Picking não é enviada imediatamente após a finalização do
Picking Cart. A confirmação é disparada somente após o passar pelo ponto de decisão ao final da
linha ou passar pelo processo de conferência — momento em que o WCS possui a informação
completa e validada do que foi efetivamente separado para aquele volume.
Após dar o destino correto aos volumes, o operador poderá retornar o Picking Cart ao Order Start
e repetir o processo até que todas as tarefas destinadas à área sejam finalizadas.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Retorno Reabastecimento  
**Score:** — (json-no-corpo) | **ID:** c3c213ab74a866c9

WCS  EMW/SAP
Essa integração tem como objetivo informar ao WMS que o volume está na posição de picking solicitada. A integração será enviada quando o operador finalizar a alocação dos produtos na posição final de picking utilizando o sistema do WCS.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"reabastecimentos": [
{
"tarefa": "00013",
"pos_destino": "1N49042031",
"sku": "3040",
"dun": "49871236547800",
"qt_sug": 2,
"qt_reab": 2
}
]
}
Campo | Descrição | Tipo | Obrigatório | Tamanho
Empresa | Código da Empresa requisitante | Char | Sim | 4
Centro | Código do centro de distribuição | Char | Sim | 4
codDeposito | Código do deposito | Char | Sim | 4
reabastecimentos | Lista de tarefas de reabastecimento | Array | Sim | -
Tarefa | Nº Tarefa WMS para separação do material | Numc | Sim | 12
pos_destino | Posição para onde o SKU será reabastecido | Char | Sim | 18
Sku | Código SKU do produto | Char | Sim | 40
DUN | Código DUN do item | Char | Sim | 18
qtd_sug | Quantidade sugerida de ressuprimento | Quant | Sim | 13,3
qtd_reab | Quantidade real de ressuprimento | Quant | Sim | 13,3

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Etiqueta Picking Pallet e Exceção  
**Score:** — (semantico) | **ID:** a7d9512774b28a6b

Essa etiqueta será utilizada no processo de separação Picking Pallet e Picking Exceção. O QR Code (Superior Direito) impresso conterá as informações necessárias para identificação e rastreabilidade da caixa, com dados provenientes da integração conforme tópico anterior.
