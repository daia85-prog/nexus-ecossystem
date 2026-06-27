# integracao-pedidos.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** 2. Legenda  
**Score:** — (semantico) | **ID:** 0339a367ef41a7f3

Informação
Descrição
WCS
Warehouse Control System
Velox
Sistema WCS Invent
WMS
Warehouse Management System
-
Sistema WMS Basso Pancotte
ES
Especificação de Software
Sorter
Automação de sorteamento de volumes
PTL
Put to light (Sistema de identificação de posição por acendimento de leds)
HTTPS
Protocolo de transferência de informações com segurança
Full Case
Separação de volumes fechados, ou seja, caixas completas de um único produto/pedido, sem necessidade de fracionar itens.
Fracionado
Separação item a item dentro de volumes, onde uma mesma caixa pode conter diferentes produtos ou quantidades parciais.
ShortPicking
Corte ou decremento da quantidade de volumes separados (Pendência)
Chute
Desviador de volumes no sorter
Sublinhado
Informações destacadas para o time de desenvolvimento
FIFO
First In First Out (Regra que garante que a Ordem de serviço mais antiga sega cumprida primeiro)

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Transfer  
**Score:** — (semantico) | **ID:** f45804120d2438ca

Responsabilidade do WMS no Abastecimento do Transfer:
O WMS é responsável por abastecer o transfer, garantindo que a quantidade necessária de
produtos seja disponibilizada no pulmão para atendimento à demanda de reabastecimento.
Esse abastecimento ocorre previamente a integração de ondas. O WMS realiza o processo de
movimentação de produtos do estoque para o transfer, com controle de quantidade e lote, e
empresa, enviando as informações para o WCS que, por sua vez, gerencia o fluxo interno da
automação.
Transfer no WCS:
No contexto do WCS, o "transfer" (pulmão) é uma área intermediária onde os produtos
aguardam para ser alocados nas posições de picking. O WCS gerencia o movimento de
produtos entre o transfer e as posições de picking, realizando as movimentações internas para
otimizar o uso do espaço de armazenamento e garantir que os produtos estejam disponíveis
nas posições corretas para a separação. O WCS monitora as quantidades de produtos no
transfer, movendo-os para as posições de picking conforme a necessidade, realizando o
controle de estoque em tempo real e mantendo a rastreabilidade durante todo o processo.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Remessa  
**Score:** — (semantico) | **ID:** 5a9a552de26ecb37

Pedido do cliente registrado no SAP, também denominado "Entrega" ou "Fornecimento".
Cada remessa contém um ou mais paletes a serem expedidos.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Onda  
**Score:** — (semantico) | **ID:** 9bd99380d572174b

Agrupamento lógico de transportes de um mesmo tipo (cargas diretas ou TSP) que serão
processados simultaneamente pelo WCS. Ondas são criadas e gerenciadas pelo SAP e
comunicadas ao WCS via IDOC.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** NOTA: As remessas canceladas podem ser integradas ao WCS novamente e quando esse evento  
**Score:** — (semantico) | **ID:** ced32f7838170ee6

ocorrer o WCS irá criar uma missão nova, a anterior não será substituída.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Campos  
**Score:** — (semantico) | **ID:** d200dea61da452d7

Onda
Quantidade de transporte na onda
Quantidade de doca da onda
Quantidade de caixas da onda
Quantidade de caixas desviada da onda
Quantidade de caixas cortadas da onda – Encerramento da
onda sem finalização de todos os materiais
Data e hora do início da onda
Data e hora do fim da separação – buscar a informação da
última compra realizada que tenhamos finalizado todo o
LED, se ainda tiver pendência de abastecimento será
considerado a posição que aguardou o abastecimento para
ser realizada e caso finalize a onda com pendência de
caixas separadas será colocado o horário de finalização a
do encerramento da onda.
Data e hora do fim da onda

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** 4. Especificação  
**Score:** — (semantico) | **ID:** 208aab1873785354

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo
gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as
rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface
entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada
WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e
gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do
banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do
cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz
necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.3.1. Processo de agrupamento  
**Score:** — (semantico) | **ID:** 1a8c63197456644e

O WMS será responsável pelo controle e realização da coleta dos itens que compõem um
pallet. A coleta deve garantir que o pallet, disponível no "stage-in", seja compatível com a
cubagem da caixa que será induzida no sorter com os itens agrupados.
O WCS deverá seguir os seguintes passos:
•
Leitura da etiqueta de lote (pallet): O WCS deve disponibilizar uma tela para
realizar a leitura do código da etiqueta de lote (pallet), a partir do qual uma
etiqueta será impressa. Esta etiqueta unificará todos os volumes pertencentes ao
pallet antes da indução.
•
Desvio para a Rampa de Destino: A partir da etiqueta gerada, o WCS deve
coordenar o desvio do volume agrupado para a sua rampa de destino.
•
Paletização e Alocação de Itens(PTL): O processo de paletização também deverá
ser realizado utilizando a etiqueta dos volumes agrupados. No pallet, o WCS deve
alocar os itens pertencentes à caixa, garantindo que a alocação a nível de item seja
correta para a caixa do pallet, porém o processo de alocação será feito uma vez só para
o volume agrupado.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.12. Devolução de Cancelados  
**Score:** — (semantico) | **ID:** b1a2c179ed36f57a

WCS→WMS
A integração de Devolução de Cancelados é gerada no momento da finalização de todas as tarefas
de devolução vinculadas ao pedido. O WCS retorna ao WMS o número do pedido para que o WMS
volte a considerar o estoque do pedido disponível novamente.
Exemplo JSON:
{
"pedido": 1548789782148
}
Campo
Tipo
Obrigatório Obs
pedido
Integer
Sim
Número do pedido de origem.
Obs: caso o wcs não possa cancelar o pedido será devolvido o código 400 com o motivo do erro
para que o WMS entenda que a ação não foi completa.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 5.3. Regra de "Bypass" (Pallets Monocliente)  
**Score:** — (semantico) | **ID:** 0e6d4370da485495

O envio de pedidos à automação é de responsabilidade do WMS, que deve encaminhar ao WCS
apenas as demandas que devam ser processadas na automação de fracionados. Cargas que
correspondam a pallet completo monocliente (Carga Fechada) não são enviadas ao WCS,
seguindo a separação de Pallet Fechado (Full Pallet) diretamente pelo WMS.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 7.2. Priorização  
**Score:** — (semantico) | **ID:** a4f4e5ac768a8755

Por padrão, todos os pedidos integrados pelo WMS Spark entram na fila do Order Start com a
mesma prioridade, sendo processados por ordem de chegada (FIFO). O WCS não aplica
diferenciação automática de prioridade entre os pedidos integrados.
Quando necessário, o supervisor pode aplicar uma priorização manual diretamente no Velox,
reordenando a fila de indução conforme um dos critérios abaixo:
Transportadora: prioriza os pedidos de uma transportadora específica.
Pedido: prioriza um ou mais pedidos individuais.
Onda: prioriza os pedidos de uma onda específica.
Horário de corte: prioriza os pedidos com horário de corte (cut-off) mais próximo.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 7.7. Indução de Pedidos Fracionados (Fluxo Padrão)  
**Score:** — (semantico) | **ID:** 5e4681e5d49fcd2b

Este fluxo aplica-se a pedidos que serão separados nas zonas automatizadas (PBL no Térreo ou
PBL no Mezanino). É o momento onde o planejamento lógico se torna um volume físico
rastreável.
Passo a Passo:
Visualização e Cubagem (Inteligência WCS): O operador visualiza na
interface do WCS a fila de pedidos pendentes, já ordenada por prioridade e
transportadora. O sistema exibe a listagem de tarefas a serem executadas,
indicando a quantidade exata de caixas necessárias as tarefas integradas.
Vinculação (Casamento Lógico):
O operador acessa a tela de Order Start (desktop ou PDV/Tablet), onde o
WCS exibe a fila de pedidos prontos para indução naquela área (Mezanino ou
Térreo), já com a quantidade de caixas necessárias calculada. O operador induz
fisicamente cada caixa plástica na esteira — o WCS lê a etiqueta burra da caixa
e registra automaticamente o vínculo entre aquela caixa física e o pedido
sistêmico. A partir desse momento, o WCS sabe exatamente por quais postos
aquela caixa deve passar para completar a separação. Será exibido o total de
caixas necessárias para finalizar os pedidos integrados disponíveis para aquela
área.
O operador realiza a indução da caixa plástica no Order Start Principal e o
sistema WCS registra o vínculo físico e sistêmico do pedido automaticamente.
O volume seguirá automaticamente para a os postos de picking, onde nosso
sistema vai ler a “Etiqueta Burra” da caixa plástica (etiqueta que pode ser
usada para vários pedidos pois quando concluída é resetada ao pedido for
conferido, embalado e enviado para expedição, possibilitando a reutilização
dessa caixa plástica para outros pedidos), nosso sistema vincula a caixa plástica
ao pedido que por sua vez entende que aquela caixa especifica deve desviar
nos respectivos postos para que a coleta seja realizada.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 4. Especificação  
**Score:** — (semantico) | **ID:** 0c51e03c00be8df4

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo
gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as
rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface
entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT, denominada WCS
VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e
gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do
banco). As informações serão trocadas entre a aplicação estações de trabalho e o WMS do
cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz
necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 6.1. Integração de Remessa / Missões  
**Score:** — (json-no-corpo) | **ID:** 79200a5f136dd7db

WMS → WCS
Integração para envio de pedidos para serem separados pela automação WCS. Os pedidos são
agrupados por onda e contêm volumes fracionados (linha PBL/Cart) e fullcase (caixa fechada
para sorter). O WMS Spark é responsável pela cubagem e definição das caixas.
Exemplo JSON:
{
"onda": "21218719000173",
"pedidos": [
{
"num_pedido": "P45001",
"rota": "784",
"cod_cliente": "1",
"priority": 1,
"fracionados": [
{
"num_etiqueta": "P45001-01",
"tipo_cx": "GG",
"cubagem_total": 0.00328,
"zpl": "EXEMPLO ZPL",
"peso_total": 300,
"itens": [
{
"ean": "7891000000028",
"sku": "3040",
"posicao": "A-01-02",
"qtde": 5,
"pesoun": 150
},
{
"ean": "9961000000014",
"sku": "1020",
"posicao": "M-03-05",
"qtde": 8,
"pesoun": 200
}
]
}
],
"fullcase": [
{
"num_etiqueta": "100000000091227284",
"pesocx": 1500
}
]
}
]
}
Recusa da Integração de Pedidos
Em caso de recusa da integração de pedidos, o WCS rejeitará a integração de forma total, ou
seja, todos os pedidos contidos na mensagem serão recusados. O WCS não realizará recusa
parcial — se houver qualquer inconsistência que impeça o processamento, nenhum pedido da
integração será aceito. O WMS deverá corrigir os dados e reenviar a integração completa para
novo processamento.
CAMPO
DESCRIÇÃO
TIPO
OBRIGATÓRIO
TAMANHO
onda
Identificador da onda de separação
Char
Sim
pedidos
Lista de pedidos da onda
Array
Sim
—
num_pedido
Número do pedido
Char
Sim
rota
Código da rota de entrega
Char
Sim
cod_cliente
Código do cliente
Char
Sim
priority
Prioridade operacional do pedido
Integer
Não
—
fracionados
Lista de volumes fracionados do pedido
Array
Não
—
num_etiqueta
Número da etiqueta do volume (label)
Char
Sim
tipo_cx
Tipo/tamanho da caixa definida pelo WMS Spark
(P, M, G, GG)
Char
Sim
cubagem_total
Cubagem total do volume em m³
Decimal
Sim
10,5
zpl
Dados da etiqueta ZPL para impressão no Order
Start
Char
Sim
—
peso_total
Peso total esperado do volume em gramas
Decimal
Sim
10,2
itens
Lista de itens do volume
Array
Sim
—
ean
Código EAN do produto
Char
Sim
sku
Código interno do produto
Char
Sim
posicao
Endereço de coleta do item — posição no
FlowRack (WMS garante abastecimento antes de
enviar a onda)
Char
Sim
qtde
Quantidade a separar
Integer
Sim
—
pesoun
Peso unitário do item em gramas
Decimal
Sim
10,2
fullcase
Lista de volumes fullcase do pedido
Array
Não
—
num_etiqueta
Número da etiqueta do volume fullcase (código
lido no portal do sorter)
Char
Sim
pesocx
Peso da caixa fechada em gramas
Decimal
Sim
10,2

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 11 Especificação  
**Score:** — (semantico) | **ID:** 5bb4edf45cea03cf

O proposito principal do projeto é criar uma solução WCS para o gerenciamento do armazém
automatizado da BR Foods localizado em SP – Jundiai.
O WCS será o sistema responsável por gerenciar a movimentação dos transportadores e
transelevadores desse armazém. Essa movimentação será baseada nos pedidos de entrada e
saída vindos do ERP (SAP) juntamente com o estado atual do armazém e dos equipamentos.
Para o correto funcionamento do WCS, é necessária uma aplicação que será responsável pelo
gerenciamento das informações e dos equipamentos, ou seja, esta aplicação terá como papel
fundamental a interface com o sistema SAP.
A aplicação da INVENT (citada acima) necessita de um banco de dados para o correto
armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente
(licença + instalação do banco). As informações serão trocadas entre a aplicação e SAP através
de interface Web (JSON Rest.). Em cada estação de trabalho, se faz necessário o uso de um
navegador web padrão (Google Chrome).

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 14 Priorização de Saida  
**Score:** — (semantico) | **ID:** f0bb28575e02a5b6

Existem 2 regras de priorização de pedidos, sendo elas a Automática e Manual.
No WCS  irá conter a tela “Lista de Missões” onde será possível fazer a priorização de tarefas,
expondo na coluna prioridade toda ordem gerenciada pelo WCS  de acordo com as priorizações
automáticas e manuais, as priorizações manuais devem estar identificadas de outra cor para
facilitar o entendimento do usuário.
A operação do cliente trabalha com um ou mais lotes no mesmo pallet, e deve ser recebida
pelo SAP e exibida no sistema WCS cada pallet, seus respectivos lotes e quantidades de caixas
pertencentes a cada lote.
Segue abaixo os métodos de priorização:

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 14.1 Priorização Automática  
**Score:** — (semantico) | **ID:** 6edfa3abff38423f

A priorização automática ocorre quando o sistema WCS recebe, por meio da integração, um
indicador de prioridade enviado pelo SAP. Nesses casos, o WCS realiza a ordenamento
automático dos pallets com base no nível de prioridade informado.
Caso o SAP não informe uma prioridade explícita, o WCS deverá processar os pallets
seguindo a ordem cronológica de recebimento das integrações, garantindo o fluxo
sequencial conforme os dados recebidos.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** 4. Especificação  
**Score:** — (semantico) | **ID:** 6699897044cfc200

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo
gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as
rotinas de linha de separação, conferência e PTL, tendo como papel fundamental a interface
entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada
WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e
gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do
banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do
cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz
necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** c6b3dc7315021ead

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Integração de Remessa / Missões  
**Score:** — (json-no-corpo) | **ID:** 773d8d31c0f51b38

EMW/SAP  WCS
O EWM/SAP envia uma lista de remessas com informações detalhadas como número do pedido, SKU, quantidade, lote, prioridade, centro, cubagem por unidade (em metros cúbicos - m³), cubagem total da remessa e dados da etiqueta (romaneio e transportadora).
Os pedidos são apresentados automaticamente na tela do WCS para o operador dar início na separação. A capacidade de pallets em cada rampa do sorter são 10 pallets, o EWM/SAP deve enviar uma carga que possa ser comportada nessas posições, levando em consideração a cubagem parametrizada para pallets de expedição.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"cnpjEmbarcador": "21218719000173",
"lista_remessas": [
{
"num_pedido": "P45001",
"prioridade": "1",
"remessa": "86089815",
"cep": "930025-000",
"loja": "LJ1",
"cod_transp": 1020,
"des_transp": "LARF SUL TRANSPORTES EIRELI",
"cod_cliente": "1",
"des_cliente": "LEROY MERLIM CIA BRA DE BRICOLAGEM SAO LEOPOLDO/RS - CRISTO REI",
"cidade": "DIADEMA",
"uf": "SP",
"cod_rota": "784",
"des_rota": "Rota01",
"siglaFilalDestino": "GRU",
"itens_fracionados": [
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"ean": "7891000000028",
"ean_dz": "7891000000028",
"qtd_solic": 7,
"cubagem": 0.00164,
"altura": 10,
"largura": 100,
"comprimento": 150,
"qtd_master": 500,
"peso": 150
},
{
"tarefa": "00013",
"tipo_dep": "Deposito 01",
"posicao": "A-01-08",
"sku": "1020",
"ean": "9961000000014",
"ean_dz": "7891000000028",
"qtd_solic": 8,
"cubagem": 0.00164,
"altura": 400,
"largura": 300,
"comprimento": 500,
"qtd_master": 500,
"peso": 150
}
],
"fullcase": [
{
"tarefa": "00012",
"uc": "100000000091227284",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"dun": "49871236547800",
"qtd_solic": 3,
"cubagem": 0.00164,
"altura": 10,
"largura": 100,
"comprimento": 150,
"peso": 150,
"qtd_caixa": 150
},
{
"tarefa": "00012",
"uc": "100000000091227284",
"tipo_dep": "Deposito 01",
"posicao": "A-02-02",
"sku": "5010",
"dun": "23871236546610",
"qtd_solic": 1500,
"cubagem": 0.00164,
"altura": 10,
"largura": 100,
"comprimento": 150,
"peso": 150,
"qtd_caixa": 150
}
]
CAMPO | DESCRIÇÃO | TIPO | OBRIGATÓRIO | TAMANHO
Empresa | Código da empresa responsável pela remessa | Char | Sim | 4
Centro | Código do centro de distribuição | Char | Sim | 4
codDeposito | Código do deposito | Char | Sim | 4
num_pedido | Número identificador único do pedido do cliente | Numc | Não | 35
Prioridade | Nível de prioridade atribuída a remessa/pedido | Char | Não | 2
Lista_remessa | Lista que vai conter as remessas do posto | Array | Sim | -
Remesssa | Número da remessa | Char | Sim | 10
UC | Unidade comercial – Rg do pallet fictício ou real, utilizado na coleta de pallets. | Char | Sim | 20
Cep | Código de endereço postal do cliente | Char | Sim | 10
Loja | Identificador da loja | Char | Não | 10
cod_transp | Código da transportadora | Char | Sim | 10
cnpjEmbarcador | CNPJ do cliente | Char | Sim | 14
des_transp | Descrição da transportadora | Char | Sim | 40
cod_cliente | Código do cliente | Char | Sim | 10
des_cliente | descrição do cliente | Char | Sim | 40
Cidade | Cidade do destinatário | Char | Sim | 40
UF | Estado do destinatário | Char | Sim | 3
cod_rota | Código da Rota de transporte | Char | Não | 10
des_rota | Descrição da Rota de transporte | Char | Não | 25
siglaFilialDestino | Sigla da filial de destino | Char | Sim | 3
itens_fracionados | Lista de itens fracionados | Array | Sim | -
Tarefa | Nº Tarefa WMS para separação do material | Numc | Sim | 12
tipo_dep | Tipo de Deposito | Char | Sim | 4
Posição | Endereço de coleta do item | Char | Sim | 18
Sku | Código SKU do produto | Char | Sim | 40
Ean | Código EAN do produto (unitário) | Char | Sim | 18
Ean_dz | Código EAN do produto (master) | Char | Sim | 18
qtd_solic | Quantidade solicitada do item (unitário) | Quan | Sim | 13,3
Cubagem | Cubagem unitária do item em metros cúbicos | Quan | Sim | 15,3
Altura | Altura unitária do item em mm o WCS deve multiplicar pela caixa fechada, ou master na hora de considerar as dimensões | Numc | Sim | 20
Largura | Largura unitária do item em mm o WCS deve multiplicar pela caixa fechada, ou master na hora de considerar as dimensões | Numc | Sim | 20
Comprimento | Comprimento unitário do item em mm o WCS deve multiplicar pela caixa fechada, ou master na hora de considerar as dimensões | Numc | Sim | 20
Fullcase | Lista de itens fullcase | Array | Sim | -
Tarefa | Nº Tarefa WMS para separação do material | Numc | Sim | 12
tipo_dep | Código do Tipo de Deposito | Char | Sim | 4
Posição | Endereço de coleta do item | Char | Sim | 18
Sku | Código SKU do produto | Char | Sim | 40
DUN | Código DUN do item (para fullcase) | Char | Sim | 18
qtd_solic | Quantidade solicitada do item (unidade) | Quan | Sim | 13,3
qtd_pallet | Quantidade que um pallet completo sempre vai ter | Quan | Sim | 13,3
qtd_master | Quantidade de unidades que um pacote (display) vai ter, o WCS deve dividir a quantidade solicitada pela quantidade master para saber qual valor vai exibir no led da linha de fracionados. | Quan | Sim | 13,3
qtd_caixa | Quantidade de unidades que uma caixa fechada vai ter, o WCS deve dividir a quantidade solicitada pela quantidade caixa fechada para saber quantas caixas fechadas devem separar. O wcs deve recusar integração que o valor da divisão for menor que 1(um) | Quan | Sim | 13,3
Peso | Peso unitário do item, o WCS deve multiplicar pela caixa fechada, ou master na hora de considerar o peso | Numc | Sim | 20
Recusa da Integração de Pedidos
Em caso de recusa da integração de pedidos, o WCS rejeitará a integração de forma total, ou seja, todos os pedidos contidos na mensagem serão recusados. O WCS não realizará recusa parcial — se houver qualquer inconsistência que impeça o processamento, nenhum pedido da integração será aceito. O EWM/SAP deverá corrigir os dados e reenviar a integração completa para novo processamento.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 2. Legenda  
**Score:** — (semantico) | **ID:** 081a5f3e2409e055

Informação
Descrição
WCS
Warehouse Control System
Velox
Sistema WCS Invent
WMS
Warehouse Management System
Winthor
Sistema WMS do Comercial Esperança
Sorter
Automação de sorteamento de volumes
PTL
Put to light (Sistema de identificação de posição por acendimento de leds)
HTTPS
Protocolo de transferência de informações com segurança
Full Case
Volumes fechados
Pallet Sorter
Pallets fechados
ShortPicking
Corte ou decremento da quantidade de volumes separados (Pendência)
Chute
Desviador de volumes no sorter
Matriz de fragilidade
Perfil do produto que determina em qual camada do lastro do pallet deve ser alocado
ES
Especificação de Software
Stage
Área de segregação de pallets antes da indução no sorter
View
Estrutura de visualização e consulta de dados, semelhante a uma tabela, mas sem alterações
Sublinhado
Informações destacadas para o time de desenvolvimento
FIFO
First In First Out (Regra que garante que a Ordem de serviço mais antiga sega cumprida primeiro)

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 6.2.1. Fluxo de Entrada de Dados (Pedidos)  
**Score:** — (semantico) | **ID:** ca21d346222b465c

O WMS registrará os pedidos a serem processados pelo WCS nessa tabela compartilhada. O
WCS fará a leitura dos registros novos ou atualizados com base na coluna “numos”(Unique),
evitando reprocessamentos e alimentando a tabela interna ORDEMSERVICO.
Os pedidos devem contemplar os seguintes tipos:
Pedidos Full Case
Pallets Fechados
O WMS deverá garantir que os pedidos estejam inseridos na tabela antes do início da
operação no sorter, para que o WCS possa mapeá-los corretamente e direcionar os volumes
às saídas apropriadas.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Tabela de Pendência no WMS  
**Score:** — (semantico) | **ID:** d80bd2b8c1912c37

A Tabela de Pendências, gerenciada pelo WMS (Winthor), será utilizada como base de controle
para o registro de pendências e ocorrências durante o processo de separação.
O WCS (Velox) realizará inserções de registros de ocorrências nessa tabela para que o WMS
possa consultar esses registros e aplicar os tratamentos operacionais correspondentes,
aprovando ou não essa ocorrência de pendência.
Dentre os cenários possíveis, destaca-se o controle de motivos de avaria, que serão registrados
diretamente pelo WCS e interpretados pelo WMS para gestão de volumes rejeitados ou com
inconsistência de picking.
Essa estrutura garante centralização no controle de pendências por parte do WMS, com atuação
do WCS exclusivamente nos casos efetivamente sinalizados.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** da597ed541daacec

O Método de separação será gerido pelo WCS e ocorrerá quando o WMS enviar as ordens de
serviço (OS TIPO 10) contendo itens do tipo Full Case, ou seja, caixas fechadas. O processo
completo é gerido pelo WCS, que agrupa as ordens por produto e gera tarefas de separação
para os operadores.
Importante: A impressão das etiquetas é obrigatória antes do início da separação. As tarefas
de separação somente são disponibilizadas no coletor após a geração e impressão das etiquetas
correspondentes.
Nota: O WCS é responsável por todo o ciclo operacional, desde a geração de tarefas
até o registro de pendências. O WMS limita-se ao envio das ordens de serviço.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 1. O WMS envia ao WCS as ordens de serviço contendo pedidos, produtos, quantidades  
**Score:** — (semantico) | **ID:** 3354f70f6814c311

e prioridade. O WCS gera a tarefa de coleta do pallet, informando ao operador a
posição de estoque e a quantidade a ser coletada.
2. O WCS gera a tarefa de coleta do pallet, indicando ao operador a posição de estoque e
a quantidade a ser coletada.
3. O operador, utilizando o coletor, acessa o sistema WCS, realiza o login, lê a posição
de picking, em seguida a etiqueta identificadora do pallet (master) e, por fim, o
DUN-14 do produto. Durante esse processo, pode utilizar a função Multiplicador
para ajustar a quantidade de caixas coletadas com uma única leitura do DUN.
4. O operador coleta o pallet completo, aplica a etiqueta sequencial gerada pelo WCS
(vinculada à tarefa de separação) e transporta o pallet até a área de stage,
juntamente com as etiquetas que serão aplicadas individualmente.
5. Na área de stage, um segundo operador aplica, caixa a caixa, as etiquetas geradas
automaticamente pelo sistema, garantindo a identificação e rastreabilidade dos
volumes.
6. Ao finalizar, o WCS informa ao WMS que o pallet foi consumido. Com base nessa
informação
7. O ciclo se repete para novos pallets completos. Se a demanda remanescente for menor
que a capacidade de um pallet, o WCS converte automaticamente o processo para o
modo Full Case, iniciando um novo fluxo na tela do Order Start.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 14. Tratamento de Pendências  
**Score:** — (semantico) | **ID:** ec4209e80d74f7d6

As pendências registradas pelo WCS na tabela gerenciada pelo WMS serão avaliadas pelo
próprio WMS, que definirá se a ocorrência será aprovada, cancelada ou tratada com
reabastecimento.
O WCS não executa bloqueios ou reagendamentos por conta própria todas as ações
subsequentes dependem da aprovação ou reprovação do WMS em relação à pendência
registrada.
Após aprovação, o WCS poderá liberar:
A impressão de etiquetas de pendência, garantindo rastreabilidade dos volumes;
A continuidade operacional da tarefa, conforme decisão do WMS.
As tarefas de pendência serão sempre tratadas separadamente das tarefas padrão do dia,
permitindo gestão específica e priorização adequada conforme a política do cliente.
Identificação de Pendência no Processo de Tratamento
No processo de tratamento de pendências, o sistema WCS deve considerar somente os
registros que foram previamente enviados por ele à tabela de pendências do WMS (Winthor),
garantindo que o controle e o fluxo estejam restritos às ocorrências originadas pela operação
automatizada. O sistema garantirá que a gestão de pendências esteja alinhada com as tarefas
geradas pelo WCS, evitando confusão com registros originados por outras fontes.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 15. Motivos de Avaria  
**Score:** — (semantico) | **ID:** 7423c2fe2d09b455

Os motivos de avaria identificados em campo pelo operador também serão registrados no
coletor e enviados ao WCS. O WCS, por sua vez, irá registrar essas ocorrências na Tabela
de Pendências do WMS, assim como nos casos de short picking.
O WMS interpretará os dados recebidos e aplicará os tratamentos necessários, como bloqueio
de volumes, abertura de processos internos de verificação, ou emissão de novas tarefas,
conforme a lógica de negócio vigente.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Separação Full Case  
**Score:** — (semantico) | **ID:** 65f28ba2f846bb81

Gerenciada integralmente pelo WCS, acionada quando o WMS envia ordens de serviço com
volumes fechados.
Fluxo:
1. Agrupamento e Tarefas
O WCS agrupa os pedidos por SKU, respeita roteirização, matriz de fragilidade e
parâmetros de peso/volume antes de gerar as tarefas.
A separação segue ordem invertida (final da rua → indução), otimizando
deslocamentos.
2. Quebra de Pallet por Peso/Volume
Se o lote ultrapassar os limites operacionais configurados:
o
Subtarefas por Operador: o WCS divide automaticamente a tarefa em
subtarefas equilibradas, mantendo rastreabilidade.
o
Entrega Fracionada no Stage: o operador pode realizar múltiplas entregas,
registrando no coletor endereço e horário de cada entrega.
3. Execução
O operador percorre as posições indicadas, coleta as caixas, etiqueta volume a volume
e aloca os volumes em pallet para posterior envio ao Stage.
4. Pendências
Volumes com pendências aprovadas pelo WMS seguem o mesmo fluxo operacional do
Full Case, porém são tratados em um Order Start específico, liberado somente após a
autorização do WMS. Esse controle garante que apenas volumes devidamente validados
sejam coletados e processados.

---
**Origem:** [Guatemala PBL] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA - Rev. 3.pdf`  
**Prioridade:** não  
**Heading:** WCS → WMS (WMSUMO)  
**Score:** — (semantico) | **ID:** 7586cd93592160a0

O WCS poderá enviar ao WMS uma solicitação de reabastecimento para posições de picking.
Essa ação será realizada pelo operador por meio de um botão disponível no tablet do posto.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Prioridade:** não  
**Heading:** Importação de Pedidos (WMS -> WCS)  
**Score:** — (json-no-corpo) | **ID:** c10d515e0c02b473

Direção | WMS → WCS
Método HTTP | POST
Descrição | Envio de pedidos para cálculo de cubagem e geração das missões de montagem.
Gatilho | Liberação de onda ou rota de expedição no WMS
Descrição Funcional
Esta integração é o motor que inicia o processo de picking. Ao receber os dados brutos, o WCS Velox executa o processamento matemático da carga para transformar "Pedidos" em "Missões de Montagem de Pallet":
Validação de Cadastro: Verifica se todos os itens possuem as dimensões e pesos informados (dados mandatórios para a inteligência da Fase Inicial).
Cubagem Automática (Bin Packing): O algoritmo tridimensional do Velox calcula quantos pallets serão necessários para atender aquele pedido/rota e define a estrutura de montagem ideal.
Geração de Missão: Disponibiliza a tarefa no Monitor (TV) para que o operador inicie a coleta e montagem.
Regras de Negócio:
Cálculo de Volumetria (Responsabilidade WCS): O WCS ignora qualquer pré-definição de volumes do sistema de origem. O sistema utiliza as dimensões (AxLxC) enviadas nesta integração para determinar a volumetria e o momento de fechamento do pallet.
Roteamento para Doca Virtual: O campo codigo ou description (Rota/Transportadora) é utilizado para vincular o pedido a uma posição física no Sorter Map. O sistema agrupará pedidos da mesma rota na mesma posição de chão.
Matriz de Fragilidade (1 a 5): O sistema utilizará o campo fragilidade para orientar a sequência de montagem. Itens de Classe 5 (Base) terão preferência visual no monitor sobre itens de Classe 1 (Topo).
Obs: FALAR SOBRE A QUESTÃO DO MASTERBOX (fardos que devem contabilizar na tela corretamente quando o operador bipa). Campo -> masterbox
Exemplo JSON:
{
"data_evento": "2026-03-01T08:00:00Z",
"id_mensagem": "ORD-20260301-X99",
"remetente": "Global Distribution Inc.",
"tax_id_remetente": "12-3456789",
"pedido": {
"numero_do_pedido": 880055,
"contador_pedido": 1,
"identificador": "ROUTE-MIAMI-01",
"cliente": {
"nome": "Tech Retailers LLC",
"tax_id": "98-7654321",
"endereco": {
"rua": "123 Logistics Blvd",
"cidade": "Miami",
"estado": "FL",
"zip_code": "33101",
"pais": "USA"
}
},
"destino": {
"tipo": "Rota",
"codigo": "RT-FL-05",
"description": "SOUTH FLORIDA ROUTE"
},
"data_entrega": "2026-03-02",
"itens": [
{
"sku": "HW-HEAVY-01",
"quantidade": 10,
"fragilidade": 5,
"peso_unitario_kg": 12.500,
"dimensoes_cm": {
"altura": 40,
"largura": 30,
"comprimento": 50
}
},
{
"sku": "HW-LIGHT-02",
"masterbox": 5, //Masterbox (qtd 6/cada)
"quantidade": 6,
"fragilidade": 1,
"peso_unitario_kg": 0.500,
"dimensoes_cm": {
"altura": 10,
"largura": 15,
"comprimento": 20
}
}
]
}
}
Campo | Tipo | Obrigatório | Obs
data_evento | String | Sim | Data e hora da geração do evento (ISO 8601).
id_Mensagem | String | Sim | Identificador único da mensagem para rastreabilidade.
numero_do_pedido | Integer | Sim | Número oficial do pedido no ERP/WMS.
identificador | String | Sim | ID único da carga ou onda (Chave de vínculo).
codigo | String | Sim | ID único da carga ou Rota (Chave de agrupamento no Monitor).
sku | String | Sim | Código do produto a ser separado.
quantidade | Integer | Sim | Quantidade de itens solicitada.
fragilidade | Integer | Sim | Matriz de fragilidade (1 a 5). Define a ordem de montagem: 1 = Frágil (Topo) e 5 = Pesado (Base).
peso_unitario_kg | Decimal | Sim | Peso unitário do produto em KG. Fundamental para cálculo de fechamento de pallet.
dimensoes_cm | Objeto | Sim | Objeto contendo as medidas físicas do produto (Mandatório para Cubagem).
altura | Integer | Sim | Altura da caixa em cm.
Largura | Integer | Sim | Largura da caixa em cm.
comprimento | Integer | Sim | Comprimento da caixa em cm.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Waves (WMS -> WCS)  
**Score:** — (json-no-corpo) | **ID:** 8579bf809a210a04

Direction | WMS → WCS
HTTP Method | POST
Descrição | Sending waves for cubing calculation and generation of picking missions.
Trigger | Recebimento da integração no WCS.
Functional Description
This integration is the engine that initiates the picking process. Upon receiving the wave, the Velox WCS executes the mathematical processing of the load to transform "Waves" into a queue of "Pallet Assembly Missions":
Registration Validation: Verifies if all items have the informed dimensions and weights (mandatory data for the Initial Phase intelligence).
Automatic Cubing: Velox's three-dimensional algorithm calculates how many pallets will be needed to fulfill that order/route and defines the ideal assembly structure in shipping.
Mission Generation: Makes the task available on the Collector so the operator can start the pallet picking.
Business Rules:
Volumetric Calculation (WCS Responsibility): The WCS ignores any pre-definition of volumes from the origin system. The system uses the dimensions (HxWxL) sent in this integration to determine the volumetry and the pallet closing moment.
Virtual Dock Routing: The code or description field (Route/Carrier) is used to link the order to a physical position in the Sorter Map. The system will group orders from the same route in the same floor position.
Fragility Matrix (1 to 3): The system will use the fragility field to guide the assembly sequence. Class 3 (Base) items will have visual preference on the monitor over Class 2 (Mid) items, which in turn have preference over Class 1 (Top).
Obs: We have a field to know which items are masterboxes, where the quantity of volumes to be considered is the masterbox and the quantity field becomes considered as contained in the masterbox. Ex: We have a position with 30/300 items, a masterbox item was scanned to be allocated and this masterbox contains 12 items, the quantity to be incremented on the monitor will be 12 (42/300).
JSON Example:
{
"event_date": "2026-03-01T08:00:00Z",
"wave_id": "WAVE-20260301-X99",
"wave": {
"sender": "Global Distribution Inc.",
"sender_tax_id": "12-3456789",
"orders": [
{
"order_number": 880055,
"order_counter": 1,
"identifier": "ROUTE-MIAMI-01",
"customer": {
"name": "Tech Retailers LLC",
"tax_id": "98-7654321",
"address": {
"street": "123 Logistics Blvd",
"city": "Miami",
"state": "FL",
"zip_code": "33101",
"country": "USA"
}
},
"destination": {
"type": "Route",
"code": "RT-FL-05",
"description": "SOUTH FLORIDA ROUTE"
},
"delivery_date": "2026-03-02",
"items": [
{
"sku": "HW-HEAVY-01",
"position": "01-43-20",
"masterbox": 0,
"quantity": 10,
"fragility": 3,
"unit_weight_kg": 12.500,
"dimensions_cm": {
"height": 40,
"width": 30,
"length": 50
}
},
{
"sku": "HW-LIGHT-02",
"position": "05-23-10",
"masterbox": 5,
"quantity": 30,
"fragility": 1,
"unit_weight_kg": 0.500,
"dimensions_cm": {
"height": 10,
"width": 15,
"length": 20
}
}
]
}
]
}
}
