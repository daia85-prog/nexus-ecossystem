# shortpicking.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 9.1. Shortpicking  
**Score:** — (nome-topico) | **ID:** e24640cc4e92b347

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto
na posição, e a caixa deve sair na conferência para tratativa operacional do cliente.
Corte via Picking Cart (PDV): Na separação via Picking Cart (PDV), a tela do sistema
disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser
utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada.
Nessa situação, o operador deverá acionar o botão, informar a quantidade real
coletada, confirmar o ajuste e, em seguida, realizar a leitura da caixa correspondente
no carrinho, garantindo o correto registro da separação para aquele volume (pega).
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a
quantidade real coletada, decrementando o valor indicado no sistema conforme a
quantidade realmente disponível. O operador pode, assim, registrar a quantidade
correta coletada, corrigindo o processo de separação de forma imediata e precisa. A
sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para
garantir que a quantidade correta de itens seja registrada e processada, evitando falhas
no cumprimento do pedido e otimizando a precisão na expedição.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 14.1. Categorias de Conferência  
**Score:** — (semantico) | **ID:** bfdc22d0a4e6e11e

O time da C&A possui uma meta diária de volumes que devem ser realizados a conferência.
Com isso, sistema terá um cadastro de parâmetros que se o volume (pega) se encaixar em
alguma delas deverá ser desviado para a conferência mesmo não ocorrendo Shortpicking.
Estes parâmetros serão por categoria do produto, produto/sku, destino e curva do produto.
O WCS apresentará em porcentagem a quantidade de caixas que irão para a conferência
visando as categorias criadas e a base de dados dos pedidos disponíveis no Order Start.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** d6d2337befff4645

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa operacional do cliente.
Corte via Picking Cart (PDV): Na separação via Picking Cart (PDV), a tela do sistema disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada. Nessa situação, o operador deverá acionar o botão, informar a quantidade real coletada, confirmar o ajuste e, em seguida, realizar a leitura da caixa correspondente no carrinho, garantindo o correto registro da separação para aquele volume (tarefa).
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento da missão e otimizando a precisão na expedição.
Corte via Order Start: Para missões que não possuem saldo disponível em estoque na posição de picking, o WCS não permitirá o início da separação até que ocorra o devido reabastecimento. A exceção ocorre quando o item em questão não possui saldo nem nas posições de picking nem no transfer. Nesses casos, o WCS liberará a missão já com o item cortado. Para correção dessa divergência de estoque a tratativa será feita manualmente no WMS, utilizando um relatório que evidencia esse tipo de corte para auxiliar a operação.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Categorias de Conferência  
**Score:** — (semantico) | **ID:** 22b7e88a679e4abc

O time da C&A possui uma meta diária de volumes que devem ser realizados a conferência.
Com isso, sistema terá um cadastro de parâmetros que se o volume (pega) se encaixar em alguma delas deverá ser desviado para a conferência mesmo não ocorrendo Shortpicking. Estes parâmetros serão por categoria do produto, produto/sku, destino e curva do produto.
O WCS apresentará em porcentagem a quantidade de caixas que irão para a conferência visando as categorias criadas e a base de dados das missões disponíveis no Order Start.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 423cd8dd7b75e663

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na
posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a
quantidade real coletada, decrementando o valor indicado no sistema conforme a
quantidade realmente disponível. O operador pode, assim, registrar a quantidade
correta coletada, corrigindo o processo de separação de forma imediata e precisa. A
sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para
garantir que a quantidade correta de itens seja registrada e processada, evitando falhas
no cumprimento do pedido e otimizando a precisão na expedição.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 3. Entre as transportadoras elegíveis, o WCS identifica qual está mais ociosa, ou seja,  
**Score:** — (semantico) | **ID:** 0dd97442f423df77

qual recebeu menos volumes até o momento em relação à sua demanda total.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** 5. Legenda  
**Score:** — (semantico) | **ID:** c20c1020c548a9ea

Informação
Descrição
WCS
Warehouse Control System
Velox
Sistema WCS Invent
EWM/SAP
Warehouse Management System
ES
Especificação de Software
HTTPS
Protocolo de transferência de informações com segurança
Full Case
Volumes fechados
ShortPicking
Corte ou decremento da quantidade de volumes separados (Pendência)
Sorter
Automação de sorteamento de volumes
Chute
Desviador de volumes no sorter
Sublinhado
Informações destacadas para o time de desenvolvimento
FIFO
First In First Out (Regra que garante que a Ordem de serviço mais antiga seja cumprida primeiro e processamento
sequencial)

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** a68bc411e160deed

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na
posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED (Sem Conferência): Os botões integrados aos LEDs permitem ao
operador ajustar a quantidade real coletada, decrementando o valor indicado no
sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar
a quantidade correta coletada, corrigindo o processo de separação de forma imediata e
precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método
eficaz para garantir que a quantidade correta de itens seja registrada e processada,
evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.
Corte via PDV (Com Conferência): O corte com PDV é realizado diretamente no PDV
ou confirmando as posições de led acesa na cor que indica que necessita de leitura item
a item, ao pressionar o led dessas posições será aberto um pop up no PDV para confirmar
o corte do item.
Relatório shortpicking: Será disponibilizada uma tela dedicada que irá informar todas
as remessas que tiveram ocorrência de shortpicking. A tela de relatório terá como
objetivo apresentar, de forma clara e direta, todas as remessas que tiveram ocorrência
de shortpicking. O usuário poderá aplicar um filtro por data, e o sistema retornará uma
lista contendo exclusivamente as remessas que registraram shortpicking naquele período
selecionado.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** 7c95dd44b16449fc

Após a realização do Picking Fracionado, o volume passa por um ponto de decisão no
final da linha, onde o WCS valida se houve shortpicking na caixa. Caso seja identificado
shortpicking, o WCS desvia automaticamente o volume para a área de
conferência/auditagem.
Além do shortpicking, o WCS também deverá desviar volumes para conferência de acordo com:
Percentual de amostragem cadastrado pela operação;
Parâmetro de conferência por cliente, conforme descrito abaixo.
Parâmetro de Conferência por Cliente
O WCS disponibilizará um parâmetro de conferência por código de cliente, permitindo
que a operação defina quais clientes deverão ter seus volumes de picking fracionado
obrigatoriamente direcionados para conferência, independentemente da ocorrência de
shortpicking.
A operação poderá cadastrar manualmente os códigos de cliente ou realizar a
carga via planilha Excel.
O sistema deverá armazenar apenas o código do cliente, sem necessidade de
informações adicionais.
Quando o pedido estiver associado a um cliente presente nessa lista, o WCS deverá
desviar automaticamente o volume para a conferência no picking fracionado.
Esse parâmetro será aplicado exclusivamente ao fluxo de picking fracionado.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 9.4. Tratativa de Divergências (Corte/Shortpicking)  
**Score:** — (semantico) | **ID:** 05d10c682f51b489

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na
posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade
real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente
disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o
processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões
de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja
registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na
expedição. Esse corte só será de fato efetivado após tratativa no posto de conferência.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 5. Legenda  
**Score:** — (semantico) | **ID:** 0585588380f6cac0

Informação
Descrição
WCS
Warehouse Control System
Velox
Sistema WCS Invent
WMS
Warehouse Management System
ES
Especificação de Software
HTTPS
Protocolo de transferência de informações com segurança
Full Case
Volumes fechados
ShortPicking
Corte ou decremento da quantidade de volumes separados (Pendência)
Sorter
Automação de sorteamento de volumes
Chute
Desviador de volumes no sorter
Sublinhado
Informações destacadas para o time de desenvolvimento
FIFO
First In First Out (Regra que garante que a Ordem de serviço mais antiga seja cumprida primeiro e processamento
sequencial)
PBL
Pick by Light — sistema de separação guiada por luz
FlowRack
Estrutura de picking com esteira gravitacional e displays PBL
PDV
Ponto de Venda — terminal/tablet utilizado pelo operador
Spark
WMS utilizado pela BR Supply
PTL
Put to Light — sistema de alocação guiada por luz na expedição
CLP
Controlador Lógico Programável
ZPL
Zebra Programming Language — linguagem de impressão de etiquetas
EAN
European Article Number — código de barras do produto
SKU
Stock Keeping Unit — código interno do produto
UF
Unidade Federativa — estado brasileiro

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 7.3. Shortpicking  
**Score:** — (nome-topico) | **ID:** efab90a2d547cf77

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na
posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a
quantidade real coletada, decrementando o valor indicado no sistema conforme a
quantidade realmente disponível. O operador pode, assim, registrar a quantidade
correta coletada, corrigindo o processo de separação de forma imediata e precisa. A
sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para
garantir que a quantidade correta de itens seja registrada e processada, evitando falhas
no cumprimento do pedido e otimizando a precisão na expedição.
Corte via PDV (Com Conferência): O corte com PDV é realizado diretamente no PDV
ou confirmando as posições de led acesa na cor que indica que necessita de leitura item
a item, ao pressionar o led dessas posições será aberto um pop up no PDV para confirmar
o corte do item.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 5. Legenda  
**Score:** — (semantico) | **ID:** 8aea1bbb98d6e5b1

Informação
Descrição
WCS
Warehouse Control System
Velox
Sistema WCS Invent
EWM/SAP
Warehouse Management System
ES
Especificação de Software
HTTPS
Protocolo de transferência de informações com segurança
Full Case
Volumes fechados
ShortPicking
Corte ou decremento da quantidade de volumes separados (Pendência)
Sublinhado
Informações destacadas para o time de desenvolvimento
FIFO
First In First Out (Regra que garante que a Ordem de serviço mais antiga seja cumprida primeiro e
processamento sequencial)

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 20ce580a00e72c4a

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na
posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a
quantidade real coletada, decrementando o valor indicado no sistema conforme a
quantidade realmente disponível. O operador pode, assim, registrar a quantidade
correta coletada, corrigindo o processo de separação de forma imediata e precisa. A
sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para
garantir que a quantidade correta de itens seja registrada e processada, evitando falhas
no cumprimento do pedido e otimizando a precisão na expedição.
Relatório shortpicking: Será disponibilizada uma tela dedicada que irá informar todas
as remessas que tiveram ocorrência de shortpicking. A tela de relatório terá como
objetivo apresentar, de forma clara e direta, todas as remessas que tiveram ocorrência
de shortpicking. O usuário poderá aplicar um filtro por data, e o sistema retornará uma
lista contendo exclusivamente as remessas que registraram shortpicking naquele período
selecionado.
Corte via Picking Cart (PDV): Na separação via Picking Cart (PDV), a tela do sistema
disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser
utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada.
Nessa situação, o operador deverá acionar o botão, informar a quantidade real
coletada, confirmar o ajuste e, em seguida, realizar a leitura da posição correspondente
no carrinho (Picking Cart), garantindo o correto registro da separação para aquele
volume.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** c720e5edce087c04

Após a realização do Picking Fracionado, o volume passa por um ponto de decisão no
final da linha, onde o WCS valida se houve shortpicking na caixa. Caso seja identificado
shortpicking, o WCS desvia automaticamente o volume para a área de
conferência/auditagem.
Além do shortpicking, o WCS também deverá desviar volumes para conferência de acordo com:
Percentual de amostragem cadastrado pela operação;
Parâmetro de conferência por cliente, conforme descrito abaixo.
Parâmetro de Conferência por Cliente
O WCS disponibilizará um parâmetro de conferência por código de cliente, permitindo
que a operação defina quais clientes deverão ter seus volumes de picking fracionado
obrigatoriamente direcionados para conferência, independentemente da ocorrência de
shortpicking.
A operação poderá cadastrar manualmente os códigos de cliente ou realizar a
carga via planilha Excel.
O sistema deverá armazenar apenas o código do cliente, sem necessidade de
informações adicionais.
Quando o pedido estiver associado a um cliente presente nessa lista, o WCS deverá
desviar automaticamente o volume para a conferência no picking fracionado.
Esse parâmetro será aplicado exclusivamente ao fluxo de picking fracionado.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 7.6.3. Shortpicking Fullcase  
**Score:** — (semantico) | **ID:** 42122ba30c0cbdb1

Caso o operador não encontre produtos suficientes em um endereço, ele pode ajustar a
quantidade no coletor e seguir para o próximo endereço. Ao finalizar a coleta com itens
pendentes, o operador aciona a opção "Finalizar Coleta Parcial" no coletor. O WCS abre uma tela
para que o operador leia as etiquetas dos volumes que não serão coletados — essas etiquetas
são invalidadas e os itens registrados como corte de Full Case, retroalimentando o EWM/SAP via
Confirmação de Picking com status = "parcial", seguindo o mesmo formato de mensagem já em
produção no BETA SP.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Tratamento de Shortpicking (Corte)  
**Score:** — (semantico) | **ID:** 353ecfb9a8856c55

Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a
quantidade real coletada e, após isso, realizar a leitura do código da etiqueta que os itens serão
cortados.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Legenda  
**Score:** — (semantico) | **ID:** 7a6f4a79007f6493

Informação | Descrição
WCS | Warehouse Control System
Velox | Sistema WCS Invent
EWM/SAP | Warehouse Management System
ES | Especificação de Software
HTTPS | Protocolo de transferência de informações com segurança
Full Case | Volumes fechados
ShortPicking | Corte ou decremento da quantidade de volumes separados (Pendência)
Sorter | Automação de sorteamento de volumes
Chute | Desviador de volumes no sorter
Sublinhado | Informações destacadas para o time de desenvolvimento
FIFO | First In First Out (Regra que garante que a Ordem de serviço mais antiga seja cumprida primeiro e processamento sequencial)

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** e208ec95018c1168

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED (Sem Conferência): Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.
Corte via PDV (Com Conferência): O corte com PDV é realizado diretamente no PDV ou confirmando as posições de led acesa na cor que indica que necessita de leitura item a item, ao pressionar o led dessas posições será aberto um pop up no PDV para confirmar o corte do item.
Relatório shortpicking: Será disponibilizada uma tela dedicada que irá informar todas as remessas que tiveram ocorrência de shortpicking. A tela de relatório terá como objetivo apresentar, de forma clara e direta, todas as remessas que tiveram ocorrência de shortpicking. O usuário poderá aplicar um filtro por data, e o sistema retornará uma lista contendo exclusivamente as remessas que registraram shortpicking naquele período selecionado.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Observações  
**Score:** — (semantico) | **ID:** 551d66a33950f4bd

Integração de Missões (WMTORD)
WMS → WCS
Envia os pedidos ao WCS, servindo como
base para geração e controle das tarefas
operacionais.
Confirmação de Picking / Shortpicking
(WMTOCO)
WCS → WMS
Retorna ao WMS a confirmação da execução
do picking, incluindo possíveis divergências
entre o solicitado e o executado.
Cancelamento de Pedido (WMCATO)
WMS ↔ WCS
(bidirecional)
Permite solicitar e processar cancelamentos
de pedidos, interrompendo ou ajustando
operações conforme decisão do WMS.
Reabastecimento (WMSUMO)
WCS → WMS
Solicitar ao WMS o reabastecimento

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 85f961ffd168c762

Em casos que o operador ao separar o produto, verifique que na posição não existem as
quantidades necessárias solicitadas para separação.
Exemplo: no display informa que o operador precisa separar 10 unidades de um determinado
produto, operador verifica que na posição tem apenas 8 unidades desse produto, nesse caso o
operador deverá realizar o shortpicking, decrementando a quantidade diretamente no display,
separa a quantidade disponível, e ao confirmar a separação com a quantidade menor que a
solicitada, será disparada a integração de shortpicking

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Shortpicking (Corte)  
**Score:** — (semantico) | **ID:** 0ac31e24cda51630

O shortpicking ocorre quando o operador chega a uma posição e não encontra o produto — ou a quantidade disponível é menor do que o pedido requer. O WCS oferece um mecanismo rápido para registrar essa divergência sem travar a operação.
