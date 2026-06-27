# inventario.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** 7c0bdf020dfc2892

A auditoria de estoque tem como objetivo garantir a precisão das informações mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todas as posições serão auditadas, ou de forma parcial, onde são auditadas apenas posições.
Antes do início de qualquer auditoria, é obrigatória a criação prévia da tarefa por um usuário com perfil de supervisor.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Auditoria de Estoque  
**Score:** — (nome-topico) | **ID:** ce728bb6c486ab71

A auditoria de estoque tem como objetivo garantir a precisão das informações de estoque
mantidas pelo sistema WCS. O processo pode ser realizado de forma total, onde todos os itens e
posições alocados serão auditados, ou de forma parcial, onde o operador seleciona os itens,
postos específicos ou endereços a serem auditados. Além disso, há a auditoria de posições vazias,
garantindo que os endereços sem itens sejam verificados corretamente.
Auditoria Total:
No cenário de auditoria total, o operador realiza a verificação de todas as posições de
estoque que possuem itens alocados.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Total".
O WCS solicita que o operador leia todas as posições de estoque que possuem itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU dos itens presentes naquela posição.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no
sistema.
Caso haja uma divergência o WCS cria uma tarefa de Ocorrência, para que um segundo operador
valide o resultado da auditoria.
O processo é finalizado quando o operador termina a auditoria de todas as posições e a
quantidade de todos os itens foi registrada.
Auditoria Parcial
No cenário de auditoria parcial, o operador seleciona os itens específicos, postos ou endereços
que ele deseja auditar.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de auditoria e seleciona a opção "Auditoria Parcial".
O WCS apresenta uma lista de todos os itens alocados no estoque, postos ou endereços, exibindo
a curva que o item pertence, a data da última movimentação além da última data de auditoria
permitindo que o operador selecione os itens, postos ou endereços a serem auditados.
O operador pode usar uma opção de busca para facilitar a localização dos itens, postos ou
endereços desejados.
Após selecionar os itens, postos ou endereços, o operador realiza a leitura do endereço onde os
itens estão alocados.
O operador realiza a leitura do SKU dos itens vinculados ao endereço.
O operador conta a quantidade real de cada item e registra a quantidade auditada no sistema.
Caso haja uma divergência o WCS cria uma tarefa de Ocorrência, para que um segundo operador
valide o resultado da auditoria
O processo é finalizado quando todos os itens selecionados para auditoria foram verificados e as
quantidades registradas.
Auditoria de Posições Vazias
A auditoria de posições vazias visa garantir que os endereços que não possuem itens alocados estejam
corretamente identificados como vazios ou que eventuais alocações incorretas sejam corrigidas.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a aba "Auditoria de Endereços Vazios".
O operador se dirige ao endereço a ser auditado e realiza a leitura do código do endereço.
Se a posição estiver vazia, o operador confirma clicando na opção "Endereço Vazio" e realiza
uma nova leitura do código do endereço para validar e concluir a auditoria daquela posição.
Caso a posição contenha itens, o operador realiza a leitura do SKU do(s) item(ns), conta a
quantidade real e registra no sistema.
O WCS cria uma tarefa de Ocorrência, para que um segundo operador valide o resultado da
auditoria.
Considerações Importantes para Ambos os Cenários
Interface do WCS: O WCS deve apresentar uma interface intuitiva que permita ao
operador navegar facilmente entre as posições de estoque e os itens a serem
auditados, com opções claras para seleção de auditoria total, parcial e de endereços
vazios.
Validação de Dados: O sistema WCS deverá validar as quantidades informadas
durante a auditoria para garantir que a operação seja realizada corretamente. Em caso
de divergências, o sistema gerará uma tarefa de ocorrência.
Relatórios: Após a conclusão de qualquer auditoria, o WCS deve gerar um relatório
contendo as quantidades auditadas e os endereços verificados, e dar a opção para o
operador imprimir esse relatório.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Rastreabilidade: Permite acompanhar o histórico completo de uma movimentação nos  
**Score:** — (nome-topico) | **ID:** bed70714e71741d1

relatórios, desde a solicitação até a confirmação ou cancelamento.
•

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 12. Inventário de Estoque  
**Score:** — (semantico) | **ID:** 802e0d35804899c5

O inventário de estoque tem como objetivo garantir a precisão das informações de estoque
mantidas pelo sistema WCS. O processo pode ser realizado de forma total (auditoria de todos
os endereços) ou de forma parcial (auditoria de itens/endereços selecionados pelo operador).
Independentemente da modalidade, o processo é conduzido por coletor Android integrado ao
WCS e segue o princípio de não indução da contagem: o sistema não exibe ao operador o SKU
esperado nem a quantidade sistêmica da posição auditada.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 12.1. Snapshot do saldo sistêmico  
**Score:** — (semantico) | **ID:** 770e85016a567972

Para fins de comparação com a contagem física, o saldo sistêmico é congelado (snapshot) pelo
WCS. No Inventário Total, o snapshot é global e ocorre na criação do inventário, uma vez que
esta modalidade é iniciada com a operação totalmente parada e sem reserva de saldo. No
Inventário Cíclico, o snapshot é por posição, no momento da leitura do endereço pelo operador,
preservando a precisão da comparação com a operação ativa.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 12.4. Inventário Total  
**Score:** — (semantico) | **ID:** f3e3f51f407ff892

No cenário de auditoria total, o supervisor deve criar a auditoria total, e o operador realiza a
verificação de todas as posições de estoque que possuem itens alocados.
Pré-condição: o Inventário Total somente é iniciado com a operação parada e sem reserva de
saldo nas posições. O WCS sinaliza essa pré-condição ao supervisor na criação.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com
base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor
controle e distribuição das tarefas entre os operadores.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção
“Inventário Total”.
Seleciona qual auditoria ele irá realizar de acordo com as auditorias criadas
O WCS solicita que o operador realize a leitura de todas as posições de estoque que
possuam itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU de todos os itens ou de
somente um item e informa a quantidade de acordo com a auditoria criada.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou
quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o
sistema deve exibir um aviso de posição vazia.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando
o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; e
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de
confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços em que tenha sido
identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de
endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir
um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que
permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência
(entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação
para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma
validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário,
contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para
que o supervisor selecione quais endereços devem passar por validação final.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 12.6. Inventário Cíclico  
**Score:** — (semantico) | **ID:** c328f4dafaeef6db

No cenário de Inventário Cíclico, o supervisor seleciona itens ou posições específicas que ele
deseja auditar. O sistema terá opção de busca para facilitar a localização dos itens desejados.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 13. Regras Complementares de Operação  
**Score:** — (semantico) | **ID:** b25c21a5e7f6daa1

Além do fluxo principal de contagem, o WCS observa as regras abaixo para tratamento de
situações de exceção durante o inventário.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 13.1. Conflito entre Recall e Inventário  
**Score:** — (semantico) | **ID:** ce5c1f64d233b2d8

Recall e Inventário são mutuamente exclusivos sobre o mesmo item/posição. Se houver um
Inventário Cíclico em andamento sobre o item, não será possível iniciar um Recall para esse item
enquanto a contagem não for concluída; do mesmo modo, havendo uma tarefa de Recall em
andamento para o item, não será possível inventariar o item em questão até a conclusão do
Recall. Além disso, o Inventário Total não pode ser iniciado enquanto houver qualquer tarefa de
Recall em andamento, e nenhuma tarefa de Recall pode ser iniciada enquanto houver um
Inventário Total em andamento. O WCS bloqueia a ação conflitante e sinaliza ao
operador/supervisor o motivo do bloqueio.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 13.3. Cancelamento de inventário  
**Score:** — (semantico) | **ID:** 39e7b50cf9924ced

O cancelamento de um inventário em andamento exige justificativa obrigatória, por meio de
campo livre ou seleção de motivos pré-definidos, garantindo rastreabilidade e auditoria.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 13.4. Timeout de inventário aberto  
**Score:** — (semantico) | **ID:** 9e3863a801f5b60e

O inventário não expira automaticamente. Após determinado período sem atividade, o sistema
gera alerta visual e e-mail ao supervisor, mas o inventário permanece aberto, evitando o risco de
perda de progresso em operações que podem se estender além do tempo médio de conclusão.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 13.5. Retenção dos logs e do histórico de inventário  
**Score:** — (semantico) | **ID:** 7d83d437e81a5cc1

Os registros lógicos do inventário (identificador do inventário, posição, operador, tipo do evento,
timestamp, saldo sistêmico e quantidade física registrada) serão mantidos pelo período mínimo
de 3 (três) anos a partir da data de criação.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 9 Stakeholders ES  
**Score:** — (semantico) | **ID:** 8dad58ab8c666fd0

Participante
Função
Empresa
Pedro Talasamov
Analista de Negócios
Invent
Daiana Costa
Infraestrutura/redes
Invent
Leandro da Silva
PMO
Invent

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 30 Inventário - Qualidade  
**Score:** — (semantico) | **ID:** 5cf6d56f75bd7e29

O WCS deverá ser capaz de integrar com o SAP para obter um IDOC contendo as posições
de estoque cadastradas no SAP, com o objetivo de realizar uma comparação entre o estoque
físico do armazém (gerido pelo WCS) e o estoque lógico do SAP.
O WCS exibirá uma tela de conferência de divergências, onde serão mostradas as posições
divergentes entre os dados do SAP e os dados do WCS. Nessa tela, o operador poderá
visualizar as posições onde as divergências de estoque foram identificadas, facilitando a
inspeção manual.
Além disso, será possível realizar a descida dos pallets diretamente da tela de conferência
para uma área de conferência. O operador poderá descer os pallets para verificação física,
permitindo a correção de inconsistências diretamente no processo de conferência de estoque.
Para garantir a consistência dos dados, o sistema também deve realizar uma verificação de
alteração do lado do SAP, assegurando que qualquer modificação ou atualização no estoque
do SAP seja refletida no WCS em tempo real.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** 3.0 Stakeholders ES  
**Score:** — (semantico) | **ID:** f7c29fc374ce3209

Participante
Função
Empresa
Pedro Talasamov
Analista de Negócios
Invent
Daiana Costa
Infraestrutura/redes
Invent
Leandro da Silva
PMO
Invent
Fernando Bandeira
C&A
Flavio Rossi
C&A
Anderson Leal
C&A

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** Anomalias por SKU/Posição  
**Score:** — (semantico) | **ID:** 4a50b625d129d086

Relatório que agrupa as anomalias por SKU e posição de destino, consolidando a quantidade de
ocorrências por produto. Útil para identificar quais produtos geram mais anomalias e em quais
posições elas estão concentradas. Permite filtrar por número da nota e tipo de anomalia.
Hora
Data
Data de referência do agrupamento (formato:
yyyy-MM-dd). Varia conforme o agrupamento
selecionado: Hora, Dia ou Mês.
SKU
Código SKU do produto com anomalia registrada.
Quantidade
Total de itens com anomalia para aquele SKU no
período.
Descricao SKU
String
Descrição/nome do produto vinculado ao SKU.
Cod Anomalia
Código da posição de anomalia ou tipo de
anomalia. Ex.: ANOMALIA_TIPO_DOIS,
BAIXO_GIRO.
Descricao Anomalia
String
Descrição textual da anomalia (ex.: 'MAC Address
incompatível', 'Anomalia desconhecida').
Nome Operador
String
Nome completo do operador que realizou a
triagem.
Login Operador
String
Login/usuário do operador no sistema.
Posicao Destino
String
Endereço de destino para onde o item com
anomalia foi enviado.
Total Linhas
Total de registros retornados pelo agrupamento
de SKU/posição no período.
