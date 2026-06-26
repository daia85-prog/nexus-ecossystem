# conferencia.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 14. Conferência  
**Score:** — (nome-topico) | **ID:** 1e35b3197a222714

Após a linha de picking FlowRack terá um portal com uma antena RFID para detectar se
os itens previstos no volume (pega) estão presentes dentro da caixa.
O volume será direcionado para a conferência nos seguintes cenários:
Volumes (pega) que foi realizado shortpicking
Volumes (pega) que não constam os itens que foram coletados durante o processo de
separação
Categoria/filtro parametrizado pela operação
Ao receber o volume (pega), o operador deverá realizar a leitura da etiqueta da caixa e
o sistema informar qual o motivo do volume (pega) estar na conferência e a lista dos itens
que pertencem ao volume (pega). O sistema deixará evidente os itens que tiveram corte.
Para a conferência dos itens, cada item deverá ser lido individualmente para
contabilizar a quantidade e ser depositado em uma nova caixa. Ao final da conferência, será
enviada ao WMS a relação de todos os itens lidos pelo conferente, para confirmação dos
produtos. Em caso de falta de produto no estoque, o operador deverá selecionar se deseja
cortar esses itens ou enviá-los para um novo volume (pega) no Order Start, para que o
operador responsável colete os itens pendentes.
Obs: Caso o conferente opte pelo corte do item, será necessária uma autenticação de um
supervisor. O WCS irá registrar os operadores que realizarem as conferências de cada volume
(pega) durante a operação.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** 0a37efa12458c3f5

Após a linha de picking FlowRack terá um portal com uma antena RFID para detectar se os itens previstos no volume (pega) estão presentes dentro da caixa.
O volume será direcionado para a conferência nos seguintes cenários:
Volumes (pega) que foi realizado shortpicking
Volumes (pega) que a quantidade detectada pela antena não for igual a esperada.
Categoria/filtro parametrizado pela operação
Missão que tiveram “Pede Caixa”
Missão com coleta pendente
Ao receber o volume (pega), o operador deverá realizar a leitura da etiqueta da caixa e o sistema informar qual o motivo do volume (pega) estar na conferência e a lista dos itens que pertencem ao volume (pega). O sistema deixará evidente os itens que tiveram corte.
Para a conferência dos itens, cada item deverá ser lido individualmente para contabilizar a quantidade e ser depositado em uma nova caixa. Ao final da conferência, será enviada ao WMS a relação de todos os itens lidos pelo conferente, para confirmação dos produtos. Em caso de falta de produto no estoque, o operador deverá selecionar se deseja cortar esses itens ou coletar manualmente e completar a caixa.
Obs: Caso o conferente opte pelo corte do item, será necessária uma autenticação de um supervisor. O WCS irá registrar os operadores que realizarem as conferências de cada volume (pega) durante a operação.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Detalhamento por Etapa (Linha 1)  
**Score:** — (semantico) | **ID:** c1aacc6d4c51441f

Concluídos
Quantidade de volumes
finalizados
Volumes /
Tarefas
Em Separação
Quantidade de volumes em
picking/separação
Volumes /
Tarefas
Em Doca
Quantidade de volumes já
direcionados para doca
Volumes /
Tarefas
Pendentes
Quantidade de volumes ainda
não iniciados
Volumes /
Tarefas
Rejeitados
Quantidade de volumes com
falha no processo
Volumes /
Tarefas

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** randomização?  
**Score:** — (semantico) | **ID:** 3e6ad53ff5182de5

1ª randomização
VERDADEIRO
2ª randomização
VERDADEIRO
3ª randomização
VERDADEIRO
4ª randomização
FALSO
Temperatura Mista
Mista
🌡️ Temperatura:
Congelado
Tipo de Peso
Temperatura
Cortado
Palete Demanda
Categoria
Sequência
📊 Tabelas de Referência
PVAR
Congelado
Não
PESADO
PFIX
Congelado
Não
FRAGIL
PESADO
PPAD
Resfriado
Não
LEVE
LEVE
PFIX
Congelado
Não
PESADO
FRAGIL
PPAD
Congelado
Não
FRAGIL
PFIX
Resfriado
Não
FRAGIL
Tipo de peso especial
PVAR
Congelado
Não
Não
LEVE
PVAR
PVAR
Congelado
Não
Não
PESADO
PPAD
Congelado
Não
Não
LEVE
Temperatura (Multiplicador)
PVAR
Resfriado
Não
Não
LEVE
Congelado
PVAR
Resfriado
Não
Não
PESADO
Resfriado
PVAR
Resfriado
Não
Não
PESADO
PPAD
Resfriado
Não
Não
PESADO
Exceções
PFIX
Resfriado
Não
Não
PESADO
Corte
Palete Demanda

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 2 — Validação de Lote e Elegibilidade:  
**Score:** — (semantico) | **ID:** 37a554eba4d0dc76

O WCS valida se o lote lido está de acordo com o esperado para a onda em processamento:
•

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Fluxo Operacional da Conferência  
**Score:** — (semantico) | **ID:** 00205d0164f111f8

Abertura da Tela de Conferência
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume
(caixa) para iniciar o processo.
O WCS exibe:
A lista de itens do volume;
O operador responsável pela coleta, a nível de item.
Validação dos Itens
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante a
validação, o operador poderá:
Completar a caixa, caso o item faltante esteja disponível; ou
Finalizar a conferência com itens faltantes, utilizando o botão “Encerrar
Conferência”.
Corte de Itens Faltantes
Ao acionar o botão “Encerrar Conferência”, o operador deverá selecionar a opção de corte.
O WCS entenderá que os itens não lidos foram cortados e registrará essa informação no
sistema.
Coleta de Itens Cortados
Caso o operador realize a coleta posterior do item faltante:
O operador poderá realizar a leitura do EAN  ou EAN_DZ do produto;
O WCS entenderá que o item foi coletado e atualizará o volume.
Reimpressão de Etiqueta
Caso existam itens cortados:
O WCS deverá reimprimir automaticamente a etiqueta do volume, ao finalizar a conferência
considerando apenas os itens efetivamente coletados;
A nova etiqueta deverá substituir a etiqueta original do volume.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Validação SKU x Pedido (Cross Check)  
**Score:** — (semantico) | **ID:** bf87ccd76319f147

O Cross-Check de Pedidos é uma verificação de dados que ocorre em tempo real no Portal para
pedidos do modelo “FULLCASE”. O processo é desencadeado pela leitura física do código e a
validação lógica é executada imediatamente pelo WCS para determinar o destino do volume.
Fluxo de Cross-Check:
1. Leitura do Volume: O volume passa pelo Portal de Leitura de 3 faces, e a câmera
captura a etiquetaOp do volume e o SKU(código interno).
2. Validação WCS: O WCS realiza a verificação de dados em duas etapas:
o
Verificação 1 (Destino): Verifica os dados do pedido associado à etiquetaOp
(conforme o fluxo já existente).
o
Verificação 2 (Cross-Check): O WCS deve cruzar o DUN ou EAN(código
interno) que está no produto com os itens que deveriam compor o pedido
(obtidos na Integração de Remessas WMS → WCS).
3. Decisão de Desvio:
o
Sucesso (Cross-Check OK): Se o DUN ou EAN(código interno) lido
pertencer ao pedido associado à etiquetaOp, o WCS enviará a instrução
correta ao PLC, indicando a Rampa (Chute) de desvio.
o
Falha (Alerta de Erro): Se o DUN ou EAN(código interno) lido NÃO
pertencer ao pedido associado à etiquetaOp (ou se o produto já foi separado),
o WCS deve tratar o volume como uma falha de validação e enviá-lo
automaticamente para a Rampa de Rejeito.
Classificação de Rejeito por Cross-Check
O volume que falhar na Validação SKU(código interno) x Pedido será direcionado para a
Rampa de Rejeito. O WCS deve registrar o motivo de rejeito como "Produto Incorreto /
SKU(código interno) Divergente" para que o operador na Rampa de Rejeito possa realizar
o cross-check de forma manual e reinduzir o volume no sorter ou levar ele até a rampa de
destino.
Essa função deve ter a opção de ser inativada de acordo com a necessidade da operação.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.4.1. Processo de Conferência  
**Score:** — (semantico) | **ID:** d187da71b491738f

O WMS será responsável pelo controle e realização da coleta dos itens que compõem um pallet.
Após o cadastro da linha de separação e a disponibilidade do pallet no "stage-in", o WCS
deverá seguir os seguintes passos:
• Abertura da Tela de Conferência: O operador acessa a tela de conferência do
WCS e realiza a leitura da etiqueta de pallet para iniciar o processo de conferência. O
WCS então exibe uma lista de itens presentes no pallet.
• Leitura item a item: O operador realiza a leitura dos itens, um a um, para validar o
conteúdo da caixa.
• Integração e Vinculação: O WCS não realizará nenhuma integração referente ao
resultado da conferência, e o processo de conferência não está vinculado diretamente
ao sorter e ao PTL. Este processo é opcional e pode ser utilizado pela operação quando
necessário, sem impactar as demais etapas do processo logístico.
• Conferência Aleatória: O WCS deve disponibilizar o processo de conferência para
qualquer pallet que for lido mesmo que não esteja na linha de separação previamente
cadastrada, dando flexibilidade da operação decidir o que quer conferir de forma
dinâmica e eficiente.

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Validação SKU x Pedido (Cross Check)  
**Score:** — (semantico) | **ID:** 990ff2f75f925fcc

O Cross-Check de Pedidos é uma verificação de dados que ocorre em tempo real no Portal. O processo é desencadeado pela leitura física do código e a validação lógica é executada imediatamente pelo WCS para determinar o destino do volume.
Fluxo de Cross-Check:
Leitura do Volume: O volume passa pelo Portal de Leitura de 3 faces, e a câmera captura a etiquetaOp do volume e o SKU (código interno).
Validação WCS: O WCS realiza a verificação de dados em duas etapas:
Verificação 1 (Destino): Verifica os dados do pedido associado à etiquetaOp (conforme o fluxo já existente).
Verificação 2 (Cross-Check): O WCS deve cruzar o SKU (código interno) que está no produto com os itens que deveriam compor os dados da nota fiscal (obtidos na Integração de Volumes WMS → WCS).
Decisão de Desvio:
Sucesso (Cross-Check OK): Se o SKU (código interno) lido pertencer ao pedido associado à etiquetaOp, o WCS enviará a instrução correta ao PLC, indicando a Rampa (Chute) de desvio.
Falha (Alerta de Erro): Se o SKU (código interno) lido NÃO pertencer ao pedido associado à etiquetaOp (ou se o produto já foi separado), o WCS deve tratar o volume como uma falha de validação e enviá-lo automaticamente para a Rampa de Rejeito.
Classificação de Rejeito por Cross-Check
O volume que falhar na Validação SKU (código interno) x pedido será direcionado para a Rampa de Rejeito. O WCS deve registrar o motivo de rejeito como "Produto Incorreto / SKU(código interno) Divergente" para que o operador na Rampa de Rejeito possa realizar o cross-check de forma manual e reinduzir o volume no sorter ou levar ele até a rampa de destino.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 5.1.1. Lógica de Processamento  
**Score:** — (semantico) | **ID:** 4d6f1a7eea1c0ec7

1. Validação de Master Data: O sistema verifica se todos os SKUs do pedido possuem
Dimensões (Altura, Largura e Comprimento) e Peso cadastrados (via INT-01).
Exceção: Se um item não possuir dimensões ou peso cadastrado, a onda é recusada
com status "Erro de Cadastro" e um alerta é gerado para o gestor.
2. Cálculo de Best Fit: O algoritmo tenta alocar a maior quantidade de itens dentro da
caixa padrão da esteira (Caixa Plástica), simulando o empilhamento virtual.
3. Fator de Ocupação: É aplicado um redutor de segurança (Parâmetro "Percentual de
Ocupação Mínimo e Máximo") para garantir que a caixa não fique estufada, permitindo
o fechamento das abas e o empilhamento seguro.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 7.5. Conferência  
**Score:** — (nome-topico) | **ID:** d3b75a5354673c51

Após a realização do Picking Fracionado, o volume obrigatoriamente passará por uma balança
dinâmica posicionada no final da linha do FlowRack, onde será aferido o peso real em
comparação com o peso esperado.
O WCS compara o Peso Real com o Peso Esperado (soma dos pesos cadastrais dos itens + tara
registrada na balança do Order Start). A tolerância é configurável — a BR Supply opera com
tolerância de 260g (arredondada ao múltiplo de 20g mais próximo, respeitando a
resolução da balança). As balanças da automação medem a cada 20 gramas.
Volume dentro da tolerância: aprovado, segue para packing/sorter.
Volume fora da tolerância: desviado automaticamente para a estação de conferência.
7.5.1. Motivos de Desvio para Conferência
Após a balança, o volume passa por um ponto de decisão no final da linha, onde o WCS valida
se houve shortpicking na caixa. Caso seja identificado shortpicking, o WCS desvia
automaticamente o volume para a área de conferência.
Além do shortpicking, o WCS também deverá desviar volumes para conferência de acordo com:
Peso fora da tolerância na balança dinâmica.
Percentual de amostragem cadastrado pela operação.
Short Picking (Corte).
7.5.2. Fluxo Operacional da Conferência
Abertura da Tela de Conferência
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume desviado
(caixa) para iniciar o processo. O WCS exibe:
A lista de itens do volume.
O operador responsável pela coleta, a nível de item.
Validação dos Itens
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante
a validação, o operador poderá:
Completar a caixa, caso o item faltante esteja disponível; ou
Finalizar a conferência com itens faltantes, utilizando o botão "Encerrar Conferência".
Corte de Itens Faltantes
Ao acionar o botão "Encerrar Conferência", o operador deverá selecionar a opção de
corte. O WCS entenderá que os itens não lidos foram cortados e registrará essa
informação no sistema.
Coleta de Itens Cortados
Caso o operador realize a coleta posterior do item faltante:
O operador poderá realizar a leitura do EAN ou EAN_DZ do produto.
O WCS entenderá que o item foi coletado e atualizará o volume.
Reimpressão de Etiqueta
Caso existam itens cortados, o WCS deverá reimprimir automaticamente a etiqueta
do volume ao finalizar a conferência. A etiqueta reimpressa seguirá o mesmo layout
padrão da etiqueta original (dados de roteamento e código de barras), sem
discriminação de itens e quantidades. A nova etiqueta deverá substituir a etiqueta
original do volume.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Fluxo Operacional da Conferência  
**Score:** — (semantico) | **ID:** 0078fec3f554e6c5

Abertura da Tela de Conferência
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume
(caixa) para iniciar o processo.
O WCS exibe:
A lista de itens do volume;
O operador responsável pela coleta, a nível de item.
Validação dos Itens
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante a
validação, o operador poderá:
Completar a caixa, caso o item faltante esteja disponível; ou
Finalizar a conferência com itens faltantes, utilizando o botão “Encerrar
Conferência”.
A tela de conferência deverá disponibilizar os botões "Cancelar Ação" e "Voltar",
permitindo ao operador interromper ou retroceder a operação de forma segura, em
alinhamento com o comportamento já em produção no projeto BETA SP.
Corte de Itens Faltantes
Ao acionar o botão "Encerrar Conferência", o operador deverá selecionar a opção de corte. O
WCS entenderá que os itens não lidos foram cortados e registrará essa informação no sistema.
O operador poderá, a qualquer momento durante esse processo, acionar os botões "Cancelar
Ação" ou "Voltar" para interromper ou retroceder a operação de forma segura, em alinhamento
com o comportamento já em produção no projeto BETA SP.
Coleta de Itens Cortados
Caso o operador realize a coleta posterior do item faltante:
O operador poderá realizar a leitura do EAN  ou EAN_DZ do produto;
O WCS entenderá que o item foi coletado e atualizará o volume.
Reimpressão de Etiqueta
Caso existam itens cortados:
O WCS deverá reimprimir automaticamente a etiqueta do volume, ao finalizar a
conferência considerando apenas os itens efetivamente coletados;
A nova etiqueta deverá substituir a etiqueta original do volume.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Validação SKU x Pedido (Cross Check)  
**Score:** — (semantico) | **ID:** 76d24b6aa84ab3cb

O Cross-Check de Pedidos é uma verificação de dados que ocorre em tempo real no Portal para pedidos do modelo “FULLCASE”. O processo é desencadeado pela leitura física do código e a validação lógica é executada imediatamente pelo WCS para determinar o destino do volume.
Fluxo de Cross-Check:
Leitura do Volume: O volume passa pelo Portal de Leitura de 3 faces, e a câmera captura a etiquetaOp do volume e o SKU(código interno).
Validação WCS: O WCS realiza a verificação de dados em duas etapas:
Verificação 1 (Destino): Verifica os dados do pedido associado à etiquetaOp (conforme o fluxo já existente).
Verificação 2 (Cross-Check): O WCS deve cruzar o DUN ou EAN(código interno) que está no produto com os itens que deveriam compor o pedido (obtidos na Integração de Remessas WMS → WCS).
Decisão de Desvio:
Sucesso (Cross-Check OK): Se o DUN ou EAN(código interno) lido pertencer ao pedido associado à etiquetaOp, o WCS enviará a instrução correta ao PLC, indicando a Rampa (Chute) de desvio.
Falha (Alerta de Erro): Se o DUN ou EAN(código interno) lido NÃO pertencer ao pedido associado à etiquetaOp (ou se o produto já foi separado), o WCS deve tratar o volume como uma falha de validação e enviá-lo automaticamente para a Rampa de Rejeito.
Classificação de Rejeito por Cross-Check
O volume que falhar na Validação SKU(código interno) x Pedido será direcionado para a Rampa de Rejeito. O WCS deve registrar o motivo de rejeito como "Produto Incorreto / SKU(código interno) Divergente" para que o operador na Rampa de Rejeito possa realizar o cross-check de forma manual e reinduzir o volume no sorter ou levar ele até a rampa de destino.
Essa função deve ter a opção de ser inativada de acordo com a necessidade da operação.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** 4. Integrações  
**Score:** — (semantico) | **ID:** 7b7baae64fbc1131

A comunicação entre o WCS e o WMS do cliente será realizada em um modelo híbrido
(Push/Pull), utilizando DBLINK. As informações de Envio de Volumes serão inseridas/atualizadas
pelo WMS no WCS (WMS Push).
Já para os dados de Retorno de Volumes e Finalização do Volume, o WCS não realizará o
envio da integração (WCS Push). Em vez disso, o WCS registrará os dados em tabelas (ou
views) que serão consultadas ativamente (WMS Pull) pelo WMS.
O processo de comunicação envolverá três tabelas principais, com diferentes direções e
responsabilidades:
Tabela de Envio (WMS para WCS): Esta tabela será utilizada pelo WMS para enviar
informações relacionadas aos volumes para o WCS (INSERT) e realizar atualizações (UPDATE)
de status ou rampa de destino. Tabela de Retorno (WCS/Busca WMS): O WCS registrará
os dados de desvio e diagnóstico em tabelas para que o WMS as consulte ativamente (SELECT).
Tabela de Finalização (WCS/Busca WMS): O WCS registrará o momento da finalização do
processo em tabelas para que o WMS as consulte ativamente (SELECT).

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Conferência  
**Score:** — (nome-topico) | **ID:** f06c59405df2cab5

O processo de Conferência/Packing será obrigatório para todos os volumes após a finalização
do picking. Ao término da separação, o operador deverá retirar o volume do final da linha e
transportá-lo até a área de conferência. Para iniciar o processo, o operador acessará a tela de
conferência do WCS e realizará a leitura da etiqueta, dando início à validação do conteúdo da
caixa. Após a leitura, o WCS apresentará as informações do pedido e os volumes envolvidos,
permitindo que o operador prossiga com a conferência conforme a dinâmica operacional
definida.
A conferência poderá ser executada de forma flexível, conforme necessidade da operação. O
operador poderá aprovar o volume sem leitura de itens, realizar a leitura de todos os itens
individualmente ou optar pela leitura de uma unidade por SKU, informando manualmente a
quantidade correspondente. Durante o processo, o operador também poderá ler um ou mais
volumes(caixas) pertencentes ao mesmo pedido e consolidá-los em uma única caixa final.
Caso, durante a conferência, sejam identificados itens faltantes, o operador poderá optar por
finalizar a conferência mesmo com pendências. Ao acionar a opção de encerramento da
conferência, o WCS deverá entender que os itens não validados foram cortados, registrando
essa informação para tratamento posterior. Caso o item faltante esteja disponível, o operador
poderá realizar a coleta complementar e efetuar a leitura do código do produto ou confirmar via
tela, permitindo que o WCS reconheça o item como coletado e conclua a conferência de forma
regular.
Independentemente do fluxo adotado, toda conferência deverá obrigatoriamente ser finalizada
com a impressão da etiqueta de packing. Essa etiqueta deverá consolidar os volumes
selecionados do mesmo pedido incluídos no processo de conferência, garantindo a
rastreabilidade e a correta identificação da caixa final.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Localizações contempladas:  
**Score:** — (semantico) | **ID:** e3f991e3fa9626bd

•
Área de Análise de Corte
•
Posições de Picking
•
Area de Conferência
A funcionalidade permitirá:
•
Visualização completa de todos os endereços cadastrados no WCS
•
Segmentação das localizações por setor e tipo de operação
•
Aplicação de filtros por setor, facilitando a navegação e análise das informações

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 7. Conferência  
**Score:** — (nome-topico) | **ID:** 0e5006a859173775

Após a realização do Picking (Áreas: A3, A2, A e A4), o volume obrigatoriamente passará por uma
balança onde será aferido o peso real em comparação com o peso esperado. Este processo de
conferência garante que a quantidade de itens e o peso do volume estejam de acordo com o
especificado.
Pré-requisitos para a Conferência:
Para o processo de conferência ser realizado corretamente, o WCS precisa ser abastecido com as
informações sobre o peso unitário de cada item. Além disso, a caixa de separação deve estar
devidamente cadastrada no sistema com o peso real do volume, o que permite a comparação
entre o peso esperado e o peso real.
O WCS também deve possibilitar o cadastro de uma tolerância de peso em gramas, que será
considerada em caso de diferença entre o peso real e o peso esperado. Caso a diferença seja
superior à tolerância ou ocorra algum processo de shortpicking, o volume será desviado para
conferência para que o operador realize uma análise e a tratativa do volume.
Fluxo Operacional da Conferência:
•
Abertura da Tela de Conferência:
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume
(caixa) para iniciar o processo de conferência. O WCS então exibe uma lista de itens
presentes no volume, além do operador que efetuou a coleta a nível de item.
•
Validação dos Itens:
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante
essa validação, o operador pode:
o
Completar a caixa, caso um item faltante esteja disponível, ou
o
Finalizar a conferência com itens faltantes através do botão "Encerrar
Conferência".
Corte de Itens Faltantes:
Ao clicar no botão "Encerrar Conferência", o operador deve selecionar cortar, então o WCS
entenderá que os itens faltantes foram cortados, e o sistema registrará essa informação.
Coletar os itens cortados:
Ao clicar no botão "Encerrar Conferência" o operador deve selecionar coletar, o WCS cria um
volume para coletar os itens faltantes, e o sistema registrará essa informação.
•
O sistema considerará a tolerância de peso previamente configurada para garantir que
pequenas variações entre o peso esperado e o real não resultem em falhas no processo.
•
Caso o peso real seja diferente do esperado e fora da tolerância configurada, o volume
será desviado para a conferência para análise do operador.
Nessa estação, serão desviados os pedidos nos seguintes cenários:
•
ShortPicking
•
Flag por Cliente
•
100% dos Clientes Novos
•
Porcentagem de pedidos
•
Check Weight (Peso)
➔ ShortPicking
Para caso em que houver shortpicking na separação, ou seja, quando o operador separar a
quantidade inferior a quantidade solicitada para separação. Nesse caso esse pedido deverá seguir
para a conferência para que o pedido seja analisado e tratado e na conferência é tomada a
decisão se o pedido segue com a quantidade (inferior) separada ou é ajustado para a quantidade
solicitada, para esse caso de shortpicking, a quantidade separada será diferente da quantidade
solicitada.
➔ Flag por Cliente
Existirão clientes que deverão ter sempre 100% de seus pedidos direcionados para a conferência,
esses clientes deverão vir com uma identificação no momento da integração para que o WCS
consiga reconhecer que esse cliente se trata de um cliente nessa situação de conferência.
O campo "conferencia" na integração de "Wave" deverá vir preenchido com "Y".
➔ 100% Clientes Novos
Clientes novos, deverão ser direcionados 100% para conferência.
WMS deverá informar na integração quais são os clientes que são novos, com isso o WCS realiza
o desvio dos volumes desse cliente para a conferência.
O campo "cliente_novo" na integração de "Wave" deverá vir preenchido com "Y".
➔ Porcentagem de Pedidos
O WCS deverá encaminhar pedidos para a conferência conforme o parâmetro escolhido no
sistema para essa operação. O operador pode alterar essa porcentagem no sistema WCS, por
exemplo, se na onda contém 100 (cem) volumes e esse parâmetro estiver configurado com 50%,
dos 100 (cem) volumes 50 (cinquenta) irão para o rejeito.
Esse parâmetro é calculado apenas fracionados, full case não se encaixa no cálculo.
O envio dos volumes deve ser randômico e não sequencial.
Obs.: essa regra deve considerar apenas os pedidos que não contenham nenhuma das regras
anteriores para conferência. Por exemplo: se na onda existir clientes com flags de conferência,
os volumes desses clientes não devem entrar nesse cálculo de porcentagem.
➔ Check Weight (Aferição de peso)
Com base no cadastro de produtos e no cadastro de caixas o WCS tem o peso estimado do
volume, teremos uma balança para validar se o peso real da caixa está dentro do peso estimado
+ tolerância, caso o volume esteja fora desse range de peso ele será desviado para conferência
para auditoria.
Obs: A informação do peso será coletada através da integração de produtos, parâmetro
“peso_item”.
