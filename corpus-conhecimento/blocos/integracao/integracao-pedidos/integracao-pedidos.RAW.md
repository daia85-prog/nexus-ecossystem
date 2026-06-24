# integracao-pedidos.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Integração de Remessa / Pedido  
**Score:** — (json-no-corpo) | **ID:** f1bcffd5a1dda3ca

WMS → WCS
O WMS envia uma lista de remessas com informações detalhadas como número do pedido, SKU, quantidade e prioridade. Estes pedidos são exibidos na tela do WCS para o operador iniciar a separação.
Exemplo JSON:
{
"lista_remessas": [
{
"num_pedido": "P45001",
"prioridade": "1",
"remessa": "86089815",
"cep": "930025-000",
"loja": "LJ1",
"cod_transp": "1020",
"des_transp": "TRANSPORTES 1",
"cod_cliente": "1",
"des_cliente": "Cliente 1",
"cliente_especial": true,
"cidade": "DIADEMA",
"uf": "SP",
"cod_rota": "784",
"des_rota": "Rota01",
"double_check": "true",
"itens": [
{
"tarefa": "00012",
"tipo_dep": "0001",
"posicao": "A-01-02",
"sku": "3040",
"qtd_solic": 7
},
{
"tarefa": "00013",
"tipo_dep": "0001",
"posicao": "A-01-08",
"sku": "1020",
"qtd_solic": 8
}
]
}
]
}

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Cadastro de Caixas  
**Score:** — (semantico) | **ID:** d5f8b64d68e5bb5c

A cubagem de qual a melhor caixa e quantos volumes serão gerados para cada pedido fracionado será de responsabilidade do WMS.
Entretanto, o WCS precisa receber as medidas desse volume (altura, largura e comprimento) e como o WCS irá nos passar em metro cúbico (m³), será necessário que a operação do Grupo Pereira cadastre todos os modelos de caixa, seu respectivo código enviado pelo WMS e suas medidas diretamente no WCS para controle do sistema.
A operação do Grupo Pereira deverá marcar com uma FLAG apenas um dos modelos de caixas cadastrados no sistema onde está marcação informará o tipo de caixa única que ficará na conferência para adição de caixas. Sendo assim sempre que o WCS receber uma integração de um novo volume adicionado na conferência deve considerar as medidas da caixa marcada no cadastro de caixas.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** b2bcca3d457380dd

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Integração de Remessa / Missões  
**Score:** — (json-no-corpo) | **ID:** 9d08763a9c701456

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
Recusa da Integração de Pedidos
Em caso de recusa da integração de pedidos, o WCS rejeitará a integração de forma total, ou seja, todos os pedidos contidos na mensagem serão recusados. O WCS não realizará recusa parcial — se houver qualquer inconsistência que impeça o processamento, nenhum pedido da integração será aceito. O EWM/SAP deverá corrigir os dados e reenviar a integração completa para novo processamento.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Transfer  
**Score:** — (semantico) | **ID:** cfdf077251af8ff6

Responsabilidade do WMS no Abastecimento do Transfer:
O WMS é responsável por abastecer o transfer, garantindo que a quantidade necessária de produtos seja disponibilizada no pulmão para atendimento à demanda de reabastecimento. Esse abastecimento ocorre previamente a integração de ondas. O WMS realiza o processo de movimentação de produtos do estoque para o transfer, com controle de quantidade e lote, e empresa, enviando as informações para o WCS que, por sua vez, gerencia o fluxo interno da automação.
Transfer no WCS:
No contexto do WCS, o "transfer" (pulmão) é uma área intermediária onde os produtos aguardam para ser alocados nas posições de picking. O WCS gerencia o movimento de produtos entre o transfer e as posições de picking, realizando as movimentações internas para otimizar o uso do espaço de armazenamento e garantir que os produtos estejam disponíveis nas posições corretas para a separação. O WCS monitora as quantidades de produtos no transfer, movendo-os para as posições de picking conforme a necessidade, realizando o controle de estoque em tempo real e mantendo a rastreabilidade durante todo o processo.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Transfer  
**Score:** — (semantico) | **ID:** 716f0421576395a8

Responsabilidade do WMS no Abastecimento do Transfer:
O WMS é responsável por abastecer o transfer, garantindo que a quantidade necessária de produtos seja disponibilizada no pulmão para atendimento à demanda de reabastecimento. Esse abastecimento ocorre previamente a integração de ondas. O WMS realiza o processo de movimentação de produtos do estoque para o transfer, com controle de quantidade e lote, e empresa, enviando as informações para o WCS que, por sua vez, gerencia o fluxo interno da automação.
Transfer no WCS:
No contexto do WCS, o "transfer" (pulmão) é uma área intermediária onde os produtos aguardam para ser alocados nas posições de picking. O WCS gerencia o movimento de produtos entre o transfer e as posições de picking, realizando as movimentações internas para otimizar o uso do espaço de armazenamento e garantir que os produtos estejam disponíveis nas posições corretas para a separação. O WCS monitora as quantidades de produtos no transfer, movendo-os para as posições de picking conforme a necessidade, realizando o controle de estoque em tempo real e mantendo a rastreabilidade durante todo o processo.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Transfer  
**Score:** — (semantico) | **ID:** ff8f555ba7ab1c40

Responsabilidade do WMS no Abastecimento do Transfer:
O WMS é responsável por abastecer o transfer, garantindo que a quantidade necessária de produtos seja disponibilizada no pulmão para atendimento à demanda de reabastecimento. Esse abastecimento ocorre previamente a integração de ondas. O WMS realiza o processo de movimentação de produtos do estoque para o transfer, com controle de quantidade e lote, e empresa, enviando as informações para o WCS que, por sua vez, gerencia o fluxo interno da automação.
Transfer no WCS:
No contexto do WCS, o "transfer" (pulmão) é uma área intermediária onde os produtos aguardam para ser alocados nas posições de picking. O WCS gerencia o movimento de produtos entre o transfer e as posições de picking, realizando as movimentações internas para otimizar o uso do espaço de armazenamento e garantir que os produtos estejam disponíveis nas posições corretas para a separação. O WCS monitora as quantidades de produtos no transfer, movendo-os para as posições de picking conforme a necessidade, realizando o controle de estoque em tempo real e mantendo a rastreabilidade durante todo o processo.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Processo de agrupamento  
**Score:** — (semantico) | **ID:** 2932fdf115877e01

O WMS será responsável pelo controle e realização da coleta dos itens que compõem um pallet. A coleta deve garantir que o pallet, disponível no "stage-in", seja compatível com a cubagem da caixa que será induzida no sorter com os itens agrupados.
O WCS deverá seguir os seguintes passos:
Leitura da etiqueta de lote (pallet): O WCS deve disponibilizar uma tela para realizar a leitura do código da etiqueta de lote (pallet), a partir do qual uma etiqueta será impressa. Esta etiqueta unificará todos os volumes pertencentes ao pallet antes da indução.
Desvio para a Rampa de Destino: A partir da etiqueta gerada, o WCS deve coordenar o desvio do volume agrupado para a sua rampa de destino.
Paletização e Alocação de Itens(PTL): O processo de paletização também deverá ser realizado utilizando a etiqueta dos volumes agrupados. No pallet, o WCS deve alocar os itens pertencentes à caixa, garantindo que a alocação a nível de item seja correta para a caixa do pallet, porém o processo de alocação será feito uma vez só para o volume agrupado.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Fluxo de Entrada de Dados (Pedidos)  
**Score:** — (semantico) | **ID:** f64757b265e645cf

O WMS registrará os pedidos a serem processados pelo WCS nessa tabela compartilhada. O WCS fará a leitura dos registros novos ou atualizados com base na coluna “numos”(Unique), evitando reprocessamentos e alimentando a tabela interna ORDEMSERVICO.
Os pedidos devem contemplar os seguintes tipos:
Pedidos Full Case
Pallets Fechados
O WMS deverá garantir que os pedidos estejam inseridos na tabela antes do início da operação no sorter, para que o WCS possa mapeá-los corretamente e direcionar os volumes às saídas apropriadas.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Tabela de Pendência no WMS  
**Score:** — (semantico) | **ID:** 5da4fde0ada1a2fa

A Tabela de Pendências, gerenciada pelo WMS (Winthor), será utilizada como base de controle para o registro de pendências e ocorrências durante o processo de separação.
O WCS (Velox) realizará inserções de registros de ocorrências nessa tabela para que o WMS possa consultar esses registros e aplicar os tratamentos operacionais correspondentes, aprovando ou não essa ocorrência de pendência.
Dentre os cenários possíveis, destaca-se o controle de motivos de avaria, que serão registrados diretamente pelo WCS e interpretados pelo WMS para gestão de volumes rejeitados ou com inconsistência de picking.
Essa estrutura garante centralização no controle de pendências por parte do WMS, com atuação do WCS exclusivamente nos casos efetivamente sinalizados.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Full Case  
**Score:** — (semantico) | **ID:** ad27f099744bf332

O Método de separação será gerido pelo WCS e ocorrerá quando o WMS enviar as ordens de serviço (OS TIPO 10) contendo itens do tipo Full Case, ou seja, caixas fechadas. O processo completo é gerido pelo WCS, que agrupa as ordens por produto e gera tarefas de separação para os operadores.
Importante: A impressão das etiquetas é obrigatória antes do início da separação. As tarefas de separação somente são disponibilizadas no coletor após a geração e impressão das etiquetas correspondentes.
Nota: O WCS é responsável por todo o ciclo operacional, desde a geração de tarefas até o registro de pendências. O WMS limita-se ao envio das ordens de serviço.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Tratamento de Pendências  
**Score:** — (semantico) | **ID:** fad2d5e5e417042a

As pendências registradas pelo WCS na tabela gerenciada pelo WMS serão avaliadas pelo próprio WMS, que definirá se a ocorrência será aprovada, cancelada ou tratada com reabastecimento.
O WCS não executa bloqueios ou reagendamentos por conta própria todas as ações subsequentes dependem da aprovação ou reprovação do WMS em relação à pendência registrada.
Após aprovação, o WCS poderá liberar:
A impressão de etiquetas de pendência, garantindo rastreabilidade dos volumes;
A continuidade operacional da tarefa, conforme decisão do WMS.
As tarefas de pendência serão sempre tratadas separadamente das tarefas padrão do dia, permitindo gestão específica e priorização adequada conforme a política do cliente.
Identificação de Pendência no Processo de Tratamento
No processo de tratamento de pendências, o sistema WCS deve considerar somente os registros que foram previamente enviados por ele à tabela de pendências do WMS (Winthor), garantindo que o controle e o fluxo estejam restritos às ocorrências originadas pela operação automatizada. O sistema garantirá que a gestão de pendências esteja alinhada com as tarefas geradas pelo WCS, evitando confusão com registros originados por outras fontes.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Motivos de Avaria  
**Score:** — (semantico) | **ID:** 6a4a810b15f7a587

Os motivos de avaria identificados em campo pelo operador também serão registrados no coletor e enviados ao WCS. O WCS, por sua vez, irá registrar essas ocorrências na Tabela de Pendências do WMS, assim como nos casos de short picking.
O WMS interpretará os dados recebidos e aplicará os tratamentos necessários, como bloqueio de volumes, abertura de processos internos de verificação, ou emissão de novas tarefas, conforme a lógica de negócio vigente.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Separação Full Case  
**Score:** — (semantico) | **ID:** 0906b3a50ffb6ec5

Gerenciada integralmente pelo WCS, acionada quando o WMS envia ordens de serviço com volumes fechados.
Fluxo:
Agrupamento e Tarefas
O WCS agrupa os pedidos por SKU, respeita roteirização, matriz de fragilidade e parâmetros de peso/volume antes de gerar as tarefas.
A separação segue ordem invertida (final da rua → indução), otimizando deslocamentos.
Quebra de Pallet por Peso/Volume
Se o lote ultrapassar os limites operacionais configurados:
Subtarefas por Operador: o WCS divide automaticamente a tarefa em subtarefas equilibradas, mantendo rastreabilidade.
Entrega Fracionada no Stage: o operador pode realizar múltiplas entregas, registrando no coletor endereço e horário de cada entrega.
Execução
O operador percorre as posições indicadas, coleta as caixas, etiqueta volume a volume e aloca os volumes em pallet para posterior envio ao Stage.
Pendências
Volumes com pendências aprovadas pelo WMS seguem o mesmo fluxo operacional do Full Case, porém são tratados em um Order Start específico, liberado somente após a autorização do WMS. Esse controle garante que apenas volumes devidamente validados sejam coletados e processados.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** c6b3dc7315021ead

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
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
Recusa da Integração de Pedidos
Em caso de recusa da integração de pedidos, o WCS rejeitará a integração de forma total, ou seja, todos os pedidos contidos na mensagem serão recusados. O WCS não realizará recusa parcial — se houver qualquer inconsistência que impeça o processamento, nenhum pedido da integração será aceito. O EWM/SAP deverá corrigir os dados e reenviar a integração completa para novo processamento.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** d7ebdf3b54035780

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e PTL, tendo como papel fundamental a interface entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Integração de Remessa / Missões  
**Score:** — (json-no-corpo) | **ID:** c64c8d9d53475ae0

EMW/SAP  WCS
O EWM/SAP envia uma lista de remessas com informações detalhadas como número do pedido, SKU, quantidade, lote, prioridade, centro, cubagem por unidade (em metros cúbicos - m³), cubagem total da remessa e dados da etiqueta (romaneio e transportadora).
Os pedidos são apresentados automaticamente na tela do WCS para o operador dar início na separação. Cada remessa pode conter N tarefas do EWM/SAP — cada item dentro dos arrays itens_fracionados e fullcase carrega seu próprio identificador de tarefa (tarefa). O Velox recebe e gerencia todas essas tarefas, consolidando-as em uma única tarefa operacional por remessa no Order Start.
Exemplo JSON:
{
"empresa": "0200",
"codDeposito": "1103",
"centro": "0202",
"cnpjEmbarcador": "89723837000849",
"num_pedido": "01044582",
"prioridade": "00",
"lista_remessas": [
{
"remessa": "0087164289",
"uc": "",
"cep": "22753-053",
"loja": "",
"cod_transp": "0010469468",
"des_transp": "LINOS EXPRESS TRANSPORTES LTDA",
"cod_cliente": "0010047927",
"des_cliente": "FLUZAO ATACADAO DA CONS LTDA EPP",
"cidade": "RIO DE JANEIRO",
"uf": "RJ",
"cod_rota": "RJ",
"des_rota": "RIO DE JANEIRO",
"siglaFilialDestino": "1",
"itens_fracionados": [
{
"tarefa": "100002186126",
"tipo_dep": "0005",
"posicao": "06.011.105",
"sku": "319/3",
"ean": "7896380105328",
"ean_dz": "17896380105325",
"qtd_solic": "12.00000000000000 ",
"cubagem": 0.00008333333333,
"altura": 6.0,
"largura": 10.0,
"comprimento": 190.0,
"peso": 0.028,
"dun": "27896380105322",
"descricao": "TRINCHA MEDIA P/ PINTURA ESMALTE 1",
"qtd_master": "12"
}
],
"fullcase": [
{
"tarefa": "100002186116",
"uc": "",
"tipo_dep": "0001",
"posicao": "03.038.101",
"sku": "AT2014",
"dun": "77896380103187",
"qtd_solic": 36.0,
"qtd_pallet": 1860.0,
"qtd_caixa": 12.0,
"peso": 0.082,
"descricao": "ROLO DE PINT BRASILEIRINHO POLIAMID 23CM",
"cubagem": 0.001,
"altura": 52.0,
"largura": 52.0,
"comprimento": 230.0
}
]
}
]
}
Recusa da Integração de Pedidos:
Em caso de recusa da integração de pedidos, o WCS rejeitará a integração de forma total, ou seja, todos os pedidos contidos na mensagem serão recusados. O WCS não realizará recusa parcial — se houver qualquer inconsistência que impeça o processamento, nenhum pedido da integração será aceito. O EWM/SAP deverá corrigir os dados e reenviar a integração completa para novo processamento.
Importante: o BETA ESTEIO opera em planta distinta do BETA SP. O WCS deverá aceitar somente integrações cujos campos centro = "0200" e codDeposito = "0203" estejam preenchidos com esses valores específicos. Integrações com outros valores deverão ser rejeitadas.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Especificación  
**Score:** — (semantico) | **ID:** 7390a7b2b6d1c151

Para el correcto funcionamiento de la automatización, es necesaria una aplicación responsable de la gestión de la información de los equipos clasificados en la operación. Esta aplicación ejecutará las rutinas de Order Start, Picking y Conferencia, actuando como interfaz entre el sistema WMS del cliente y el WCS de Invent.
La aplicación WCS de Invent requiere una base de datos exclusiva para el correcto almacenamiento y gestión de la información, la cual será provista por el cliente (licencia e instalación de la base de datos).
La información será intercambiada entre la aplicación y las estaciones de trabajo mediante interfaz web, por lo que será necesario el uso de un navegador web estándar en cada estación (Google Chrome).

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Repostaje  
**Score:** — (semantico) | **ID:** 0591aa3d73de0be0

WCS → WMS (WMSUMO)
El WCS puede enviar una solicitud de reposición al WMS para las posiciones de picking. El operador realizará esta acción mediante un botón disponible en la tableta de la estación.
E1LSUMX Move storage unit IDoc segment

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Regra de "Bypass" (Pallets Monocliente)  
**Score:** — (semantico) | **ID:** cebd317e2717827f

Conforme definido no escopo, o WCS aplica um filtro na entrada para identificar cargas que não devem passar pela automação de fracionados.
Critério: Se a cubagem identificar que o volume total do pedido equivale a um ou mais pallets completos para um único cliente (Carga Fechada).
Ação: O WCS não gera onda para a esteira e marca o pedido como "Atendimento Manual/Doca", instruindo o WMS a seguir com a separação de Pallet Fechado (Full Pallet).
Objetivo: Evitar o retrabalho de desmontar um pallet fechado para colocar em caixas plásticas, passar no sorter e remontar o mesmo pallet na rampa.
Obs: Pedidos que tenham a quantidade necessária equivalente a um pallet inteiro, não terão a coleta enviada ao WCS. Essa coleta passa a ser de responsabilidade do WMS por se tratar de um pedido que supre um pallet completo.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Priorização  
**Score:** — (semantico) | **ID:** b973df66cddb72c8

Por padrão, todos os pedidos integrados pelo WMS Spark entram na fila do Order Start com a mesma prioridade, sendo processados por ordem de chegada (FIFO). O WCS não aplica diferenciação automática de prioridade entre os pedidos integrados.
Quando necessário, o supervisor pode aplicar uma priorização manual diretamente no Velox, reordenando a fila de indução conforme um dos critérios abaixo:
Transportadora: prioriza os pedidos de uma transportadora específica.
Pedido: prioriza um ou mais pedidos individuais.
Onda: prioriza os pedidos de uma onda específica.
Horário de corte: prioriza os pedidos com horário de corte (cut-off) mais próximo.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Indução de Pedidos Fracionados (Fluxo Padrão)  
**Score:** — (semantico) | **ID:** 8ae18311071b68f4

Este fluxo aplica-se a pedidos que serão separados nas zonas automatizadas (PBL no Térreo ou PBL no Mezanino). É o momento onde o planejamento lógico se torna um volume físico rastreável.
Passo a Passo:
Visualização e Cubagem (Inteligência WCS): O operador visualiza na interface do WCS a fila de pedidos pendentes, já ordenada por prioridade e transportadora. O sistema exibe a listagem de tarefas a serem executadas, indicando a quantidade exata de caixas necessárias as tarefas integradas.
Vinculação (Casamento Lógico):
O operador acessa a tela de Order Start (desktop ou PDV/Tablet), onde o WCS exibe a fila de pedidos prontos para indução naquela área (Mezanino ou Térreo), já com a quantidade de caixas necessárias calculada. O operador induz fisicamente cada caixa plástica na esteira — o WCS lê a etiqueta burra da caixa e registra automaticamente o vínculo entre aquela caixa física e o pedido sistêmico. A partir desse momento, o WCS sabe exatamente por quais postos aquela caixa deve passar para completar a separação. Será exibido o total de caixas necessárias para finalizar os pedidos integrados disponíveis para aquela área.
O operador realiza a indução da caixa plástica no Order Start Principal e o sistema WCS registra o vínculo físico e sistêmico do pedido automaticamente.
O volume seguirá automaticamente para a os postos de picking, onde nosso sistema vai ler a “Etiqueta Burra” da caixa plástica (etiqueta que pode ser usada para vários pedidos pois quando concluída é resetada ao pedido for conferido, embalado e enviado para expedição, possibilitando a reutilização dessa caixa plástica para outros pedidos), nosso sistema vincula a caixa plástica ao pedido que por sua vez entende que aquela caixa especifica deve desviar nos respectivos postos para que a coleta seja realizada.
Bypass: Se o pedido não possuir itens em áreas automatizadas, o sistema roteia a caixa diretamente para a Conferência/Balança.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 15bdc3158e8bebb0

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Integração de Remessa / Missões  
**Score:** — (json-no-corpo) | **ID:** 92cbebeec031ad06

WMS  WCS
Integração para envio de pedidos para serem separados pela automação WCS. Os pedidos são agrupados por onda e contêm volumes fracionados (linha PBL/Cart) e fullcase (caixa fechada para sorter). O WMS Spark é responsável pela cubagem e definição das caixas.
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
Em caso de recusa da integração de pedidos, o WCS rejeitará a integração de forma total, ou seja, todos os pedidos contidos na mensagem serão recusados. O WCS não realizará recusa parcial — se houver qualquer inconsistência que impeça o processamento, nenhum pedido da integração será aceito. O WMS deverá corrigir os dados e reenviar a integração completa para novo processamento.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** Importação de Pedidos (WMS -> WCS)  
**Score:** — (json-no-corpo) | **ID:** 55f013c08477250e

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

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Waves (WMS -> WCS)  
**Score:** — (json-no-corpo) | **ID:** 239b5a108acc00b3

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

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** c5acfa840f9edc6d

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Integração de Remessa / Pedido  
**Score:** — (json-no-corpo) | **ID:** d399caa40957a0f5

EMW/SAP  WCS
O EWM/SAP envia uma lista de remessas com informações detalhadas como número do pedido, SKU, quantidade, lote, prioridade, centro, cubagem por unidade (em metros cúbicos - m³), cubagem total da remessa e dados da etiqueta (romaneio e transportadora).
Os pedidos são apresentados automaticamente na tela do WCS para o operador dar início na separação.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
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
"itens_fracionados": [
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"ean": "7891000000028",
"qtd_solic": 7,
"cubagem": 0.00164
},
{
"tarefa": "00013",
"tipo_dep": "Deposito 01",
"posicao": "A-01-08",
"sku": "1020",
"ean": "9961000000014",
"qtd_solic": 8,
"cubagem": 0.00275
},
],
"fullcase": [
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"dun": "49871236547800",
"qtd_solic": 3
},
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-02-02",
"sku": "5010",
"dun": "23871236546610",
"qtd_solic": 5
}
]
}
]
}

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivo Projeto Andreani - Etiqueta Marketplace.docx`  
**Heading:** Identificação do Marketplace e Gatilho do Processo  
**Score:** — (semantico) | **ID:** d06e9fcb07b179d2

O processo será iniciado com o recebimento do pedido no WMS Delage, contendo a identificação clara da plataforma de venda de origem.
Identificação do Marketplace
O WMS Delage deverá identificar, para cada pedido, o marketplace de origem (exemplo: Mercado Livre, Shopee, TikTok).
Essa identificação será utilizada para:
Definir o fluxo de consulta à API da AnyMarket;
Garantir a correta rastreabilidade do pedido;
Permitir validações e controles no processo de impressão no WCS.

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivo Projeto Andreani - Etiqueta Marketplace.docx`  
**Heading:** Requisitos de Identificação do Pedido (Delage → Invent)  
**Score:** — (semantico) | **ID:** cf8069f0725efce5

Para viabilizar o correto tratamento do pedido no WCS, o WMS Delage deverá incluir no payload de integração um campo específico que identifique a origem do pedido.
Campo Proposto (Exemplo)
TIPO_ORIGEM
Valores Sugeridos
MARKETPLACE_ML – Pedidos do Mercado Livre
MARKETPLACE_SHP – Pedidos da Shopee
MARKETPLACE_TKT – Pedidos do TikTok
MARKETPLACE_OUTRO – Outros marketplaces conforme mapeamento
PEDIDO_PADRAO_JEQUITI – Fluxo atual
Justificativa
A identificação da origem do pedido é necessária para:
Rastreabilidade do processo;
Validações operacionais;
Auditoria e controles de impressão.

---
**Origem:** [I23.125] ADITIVO — `I23.125 - PROJETO CRISTAL -  SP e MG - ESPECIFICAÇÃO DE ADITIVO FULL CASE.docx`  
**Heading:** Inclusão do Campo loteImpresso na Estrutura de Remessas  
**Score:** — (semantico) | **ID:** 1b4791675ed22f19

Será adicionado um novo campo na estrutura JSON de remessas, denominado loteImpresso, com finalidade exclusiva de exibição nas impressões de etiquetas.
Deverá ser adicionado o campo loteImpresso no objeto Tarefas, dentro da estrutura de Remessas, conforme demonstrado no exemplo abaixo:
Observações
Os dois campos coexistirão na estrutura JSON sem substituição de um pelo outro.
O campo lote mantém seu papel funcional inalterado.
O campo loteImpresso é de uso restrito à camada de impressão/etiquetagem.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 8ef4c30278574156

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - Descritivo Funcional Aditivo - Pallets Com Ocorrências e liberação de etiquetas.docx`  
**Heading:** Tela de tratativa de volumes pendentes por pallet  
**Score:** — (semantico) | **ID:** 63fa5c92f0c78239

O WCS disponibiliza uma tela dedicada na área de auditagem para que o operador consulte os volumes pendentes do pallet e decida como proceder. Após a tratativa, a integração ao WMS é enviada.
Acesso e consulta:
A tela é acessível pelo menu do WCS no módulo de auditagem;
O operador realiza a leitura do RG do pallet;
O sistema exibe:
Identificação do pallet (RG) e status atual;
Lista de volumes pendentes: código, SKU, quantidade e descrição;
Ocorrência associada ao pallet.
O operador realiza a leitura dos volumes pendentes para completar o pallet; após a conclusão, o WCS envia a integração ao WMS com todos os volumes confirmados
A integração ao WMS é enviada somente após a conclusão da leitura dos volumes na tela de tratativa.

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Rev 5.docx`  
**Heading:** Tela de Priorização de Pedidos  
**Score:** — (semantico) | **ID:** 97793aa882e2b214

O WCS irá ordenar os itens no Order Start seguindo a prioridade enviada na integração.
Caso seja necessário alterar essa prioridade manualmente, será disponibilizada uma tela que permita alterar a prioridade do pedido como um todo ou da “pega”(volume) em uma faixa expandida (ex: 1 a 99). A faixa de "1 a 5", discutida anteriormente, é insuficiente para o volume de pedidos da operação, que pode ultrapassar 200 tarefas.
Ao ser alterado dentro do WCS, o pedido com a nova prioridade manual terá precedência sobre os pedidos que possuem apenas a prioridade recebida via integração.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** 1 – Envio de remessas  
**Score:** — (semantico) | **ID:** 484e28281cc3fc27

Selecionam todas as remessas que irão trabalhar e enviam.
Swift envia remessa para WCS o campo "item" que fará a distinção, para que não se repita a "remessa" e "sku". Nessa interface, quando a caixa parar em uma estação e nessa estação não conter a quantidade necessária para completar a quantidade solicitada, a mesma deverá ser desviada para a próxima estação que tenha o sku cadastrado, afim de completar a quantidade faltante. Ao completar o picking a mesma deve seguir, não desviando em outras estações que tenham o sku cadastrado, entendendo que está 100%.
SAP  WCS

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 4.1 Interface Orders  
**Score:** — (json-no-corpo) | **ID:** fcae9927d469559d

A Interface ORDERS será utilizada pelo WMS (Manhattan) para enviar informações dos pedidos contidos no módulo de vendas após a geração das ondas de separação.
Neste caso, a separação é realizada através do número do volume (“amarrado” há um pedido), com o código de barras impresso na etiqueta. Ou seja, cada produto contém uma etiqueta de picking que será aplicada em cada volume. Quando o pedido tem mais de 1 (uma) unidade no mesmo local de separação, o WMS consolida a quantidade na mesma etiqueta.
A Interface ORDERS permitirá também que o Manhattan direcione um pedido que atenda à uma regra especifica da Via Varejo, por exemplo: Direcionar um determinado pedido direto ao Packing, ou ao Put-To-Wall (PTW), sem passar pela regra presente no WCS.
Neste caso, contempla o envio de todas as informações dos pedidos (tipo de expedição, destino, loja, CEP), pacote (código do SKU, posição de picking, dimensões do SKU, quantidade), e remessa de expedição (código do rastreio, código e nome da transportadora)
OBS: Não haverá integração de retorno, enviada do WCS ao WMS.
A Tabela e a Listagem abaixo detalham esta interface:
Para o novo processo com o sistema Manhattan, será necessário o envio das informações do número da tarefa e número de batch em cada linha de itens dos pedidos na interface. A sugestão é utilizar os campos “contract” e “scname” na mensagem, exemplo baseado na mensagem atual.
Exemplo de json:
{
"pickingID": "593598267",
"type": "S56",
"destiny": "MULT",
"store": "919",
"zipcode": "17610700",
"orders": [
{
"skus": [
{
"orderId": "69336525",
"sku": "4665147",
"quantity": 1,
"location": "308-008-01",
"weight": 1590,
"length": 131,
"width": 80,
"height": 306,
"ean": "7500435153867"
},
{
"orderId": "69336718",
"sku": "2535882",
"quantity": 1,
"location": "308-039-01",
"weight": 1590,
"length": 80,
"width": 130,
"height": 290,
"ean": "7506339389883"
}
]
}
],
"tracking": {
"trackingNumber": " JN835019485AP",
"shippingCompanyID": "00085186",
"taskId": "100025666",
"batchId": "260000013"
}
}

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 4.1 Interface Orders  
**Score:** — (json-no-corpo) | **ID:** 39b08ec6cc9a1c94

A Interface ORDERS será utilizada pelo WMS (Manhattan) para enviar informações dos pedidos contidos no módulo de vendas após a geração das ondas de separação.
Neste caso, a separação é realizada no WMS, através do código de barras da tarefa impresso na etiqueta. Respeitando a cubagem calculado no Manhattan sendo 1 tarefa para 1 tote do WCS.
A Interface ORDERS permitirá também que o Manhattan direcione um pedido que atenda à uma regra especifica da Via Varejo, por exemplo: Direcionar um determinado pedido direto ao Packing, ou ao Put-To-Wall (PTW), sem passar pela regra presente no WCS.
Neste caso, contempla o envio de todas as informações dos pedidos (tipo de expedição, destino, loja, CEP), pacote (código do SKU, posição de picking, dimensões do SKU, quantidade), e remessa de expedição (código do rastreio, código e nome da transportadora)
OBS: Não haverá integração de retorno, enviada do WCS ao WMS.
A Tabela e a Listagem abaixo detalham esta interface:
Para o novo processo com o sistema Manhattan, será necessário o envio das informações do número da tarefa em cada linha de itens dos pedidos na interface. A sugestão é utilizar os campos “contract” e “scname” na mensagem, exemplo baseado na mensagem atual.
Exemplo de json:
{
"pickingID": "593598267",
"type": "S56",
"destiny": "MULT",
"store": "919",
"zipcode": "17610700",
"orders": [
{
"skus": [
{
"taskId": "WRPICK0000000005",
"taskDetailId": "b69f7d55-d89e-4259-aa80-ae840e3c4198",
"taskGroupId": "TRPZ04"
"orderId": "69336525",
"sku": "4665147",
"quantity": 1,
"location": "308-008-01",
"weight": 1590,
"length": 131,
"width": 80,
"height": 306,
"ean": "7500435153867"
},
{
"taskId": "WRPICK0000000005",
"taskDetailId": "b69f7d55-d89e-4259-aa80-ae840e3c4198",
"taskGroupId": "TRPZ04"
"orderId": "69336718",
"sku": "2535882",
"quantity": 1,
"location": "308-039-01",
"weight": 1590,
"length": 80,
"width": 130,
"height": 290,
"ean": "7506339389883"
}
]
}
],
"tracking": {
"trackingNumber": " JN835019485AP",
"shippingCompanyID": "00085186",
"batchId": "B_0000000061953"
}
}

---
**Origem:** [I20.1406] 2021 — `I20.1406  - ESPECIFICACAO SOFTWARE - Rev1.docx`  
**Heading:** Notificação de expedição de volume:  
**Score:** — (semantico) | **ID:** 423813ef9b88761c

POST * endpoint a definir *
REQUEST:
WMS (cliente) → MFC (Invent)

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Interface ORDERS Picking  
**Score:** — (nome-topico) | **ID:** c5583c8b799a0cf1

POST * endpoint a definir *
REQUEST:
WMS (cliente) → MFC (Invent)

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Interface ORDERS  
**Score:** — (nome-topico) | **ID:** fe173a9666301be8

POST
REQUEST:
WMS (cliente) → MFC (Invent)

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Interface ORDERS Picking  
**Score:** — (nome-topico) | **ID:** 6c061926f25f5425

POST * endpoint a definir *
REQUEST:
WMS (cliente) → MFC (Invent)

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Notificação de expedição do volume/pedido expedido  
**Score:** — (semantico) | **ID:** c7eab07977ac3eba

POST
REQUEST:
MFC (Invent)  WMS (Cliente)

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Notificação de expedição do volume/pedido expedido  
**Score:** — (semantico) | **ID:** 2390292b42b0868f

POST
REQUEST:
MFC (Invent)  WMS (Cliente)

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Notificação de expedição do volume/pedido expedido  
**Score:** — (semantico) | **ID:** b1b73c36c022adae

POST
REQUEST:
MFC (Invent)  WMS (Cliente)

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE INTEGRACOES - PTL RJ.docx`  
**Heading:** Notificação de expedição do volume/pedido expedido  
**Score:** — (semantico) | **ID:** b639d69a6f4b3819

POST
REQUEST:
MFC (Invent)  WMS (Cliente)

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Notificação de expedição do volume/pedido expedido  
**Score:** — (semantico) | **ID:** 856b2fd71182a3a9

POST
REQUEST:
MFC (Invent)  WMS (Cliente)

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Relatório Pedido  
**Score:** — (semantico) | **ID:** 4fed384b03e1a2e7

O sistema WCS deve disponibilizar um relatório com as informações gerais de pedidos como:
Importado – Quantidade de pedidos integrados.
Iniciado – Quantidade de pedidos iniciados na linha.
Finalizado – Quantidade de pedidos finalizados.
Relatório apenas para a gestão da produção diária, conforme data e horário selecionado.
Deve conter função para exportar.
Exemplo de tela:

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Interface Orders  
**Score:** — (nome-topico) | **ID:** f98c2755aac4b03b

A interface Orders será utilizada pelo sistema Invent para enviar informações dos volumes alocados em cada saca que foi fechada ao acionar o sensor de saca cheia.
Neste caso, quando o sistema do cliente receber essas informações, ele deverá gerar um número interno de manifesto e disponibilizar essa informação via documento para que o operador faça a impressão e fixe na saca.
Não existira integração do sistema do cliente x com sistema invent. (JadLog  Invent) Apenas sistema Invent x sistema cliente. (Invent  JadLog)
Como mostra no fluxograma acima.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Interface Orders  
**Score:** — (nome-topico) | **ID:** 45301d218d46610b

A interface Orders será utilizada pelo sistema Invent para enviar informações dos volumes alocados em cada saca que foi fechada ao acionar o sensor de saca cheia.
Neste caso, quando o sistema do cliente receber essas informações, ele deverá gerar um número interno de manifesto e disponibilizar essa informação via documento para que o operador faça a impressão e fixe na saca.
Não existira integração do sistema do cliente x com sistema invent. (JadLog  Invent) Apenas sistema Invent x sistema cliente. (Invent  JadLog)
Como mostra no fluxograma acima.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 964b2be5c5663e2e

A invent usará uma aplicação com nome de MFC que será responsável pelo gerenciamento das informações dos pedidos, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema WMS DHL e a automação Pollux (embaladora).
A aplicação do MFC necessita de um banco de dados para o correto armazenamento e gerenciamento das informações.
Servidor aplicação + banco de dados já disponível no local, será compartilhado com PTL 2.0. O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Priorização de Pedidos  
**Score:** — (semantico) | **ID:** 485f492d8ad2bebf

MFC ao receber essa integração (Tarefas-FaseD), aplicara a regra de priorização conforme regras descritas, definidas e usadas atualmentem em Fase C.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Notificação de expedição do volume/pedido expedido  
**Score:** — (semantico) | **ID:** fd53e8d483f9ddc3

POST
REQUEST:
MFC (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Notificação de expedição do volume/pedido expedido  
**Score:** — (semantico) | **ID:** 82a2216ec6be0814

POST
REQUEST:
MFC (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I21.105 - ESPECIFICAÇÃO DE INTEGRAÇÃO - VER.1.docx`  
**Heading:** Pedidos e volumes  
**Score:** — (semantico) | **ID:** 556c2be780c3f052

POST / webservice_mfc / order
WMS (cliente)  MFC (Invent)
Request:

---
**Origem:** [I21.177] 2022 — `I21.105 - ESPECIFICAÇÃO DE INTEGRAÇÃO - VER.1.docx`  
**Heading:** Notificação de expedição de volume  
**Score:** — (semantico) | **ID:** fe6127d33f368955

POST *url_do_cliente*
MFC (Invent)  WMS (cliente)
Request:

---
**Origem:** [I21.177] 2022 — `I21.105 - ESPECIFICAÇÃO DE INTEGRAÇÃO - VER.1.docx`  
**Heading:** Notificação de consolidação de pallet  
**Score:** — (semantico) | **ID:** aca2d57ab6c2094d

POST *url_do_cliente*
MFC (Invent)  WMS (cliente)
Request:

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Pedido Misto  
**Score:** — (semantico) | **ID:** e3fe7274b201d998

No pedido misto, WMS envia a informação no código de barras. O pedido é iniciado na máquina POLLUX e enviará à automação uma caixa lacrada com uma etiqueta impressa e fixada pela própria máquina.
As informações desse pedido são enviadas pelo campo complemento do arquivo (JSON) com os códigos de barras da POLLUX para que o separador realiza a associação.
Leitor fixo fará a leitura desse código de barras, WCS sugere o tamanho de caixa para esse pedido, operador realiza a leitura do QR Code do tamanho associando a caixa ao pedido e imprime a etiqueta de expedição. Operador induz a caixa que seguira para o posto PTL.
Um scanner automático em cada estação realizará a leitura da etiqueta. Caso tenha Picking na estação, então os respectivos displays e quantidades acenderão, caso contrário a caixa seguirá para a próxima estação.
Operador realiza a separação dos itens solicitados em todos os postos da estação de PTL e após finalizar todo o processo de picking é realizado a integração do WCS para o WMS com a confirmação de picking.
Após passar por todos os postos PTL da estação, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.
Quando a linha de picking Misto estiver cheia, operador não deverá mandar pedidos misto e unitiza para POLLUX expedir, apenas pedidos que não necessitarem de outros volumes da estação de picking, pedido mono.
Caixas expedidas pela POLLUX com falhas físicas na como falha de impressão ou problema de NOREAD serão desviadas para a estação PTL, para que o operador, faça o tratamento dessa caixa, realizando a reimpressão da etiqueta caso necessário. Operador realizará a reimpressão dessa etiqueta pelo sistema WCS.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Pedido Unitiza  
**Score:** — (semantico) | **ID:** 3730b2fa81a425dd

Quando o pedido é tipo Unitiza, WMS envia a informação no código de barras. O pedido é iniciado pela POLLUX, nesse pedido existirão mais de 1 caixa no mesmo pedido, e não terá produtos a serem separados na estação de PTL esse tipo de pedido será desviado para a estação de Unitiza, para que o operador realize o processo de unitização das caixas desse pedido. Operador recebe o primeiro volume, e ao realizar a leitura do código de barras, na tela do WCS, visualiza a informação que esse pedido se trata de pedido unitiza e que existem mais caixas para que seja unitizado e concluído, imprime a etiqueta de expedição, recebe a próxima caixa que fará parte do mesmo pedido, então o operador unifica as caixas em um envelope de papelão, fixa a etiqueta de expedição impressa, fecha o envelope. E solta novamente na linha para que a caixa siga para o sorter.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Pedido Picking (Tarefa)  
**Score:** — (semantico) | **ID:** 7b6d3847c7128990

POST
REQUEST:
WMS (Cliente)  WCS (Invent)

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Confirmação Picking  
**Score:** — (semantico) | **ID:** e975bec368e2f4e1

POST
REQUEST:
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Pedido Picking (Tarefa)  
**Score:** — (semantico) | **ID:** e8a63d935c650204

POST
REQUEST:
WMS (Cliente)  WCS (Invent)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Pedido Misto  
**Score:** — (semantico) | **ID:** 0d5452e82518e7bc

No pedido misto, WMS envia a informação no código de barras. O pedido é iniciado na máquina POLLUX e enviará à automação uma caixa lacrada com uma etiqueta impressa e fixada pela própria máquina.
As informações desse pedido são enviadas pelo campo complemento do arquivo (JSON) com os códigos de barras da POLLUX para que o separador realiza a associação.
Leitor fixo fará a leitura desse código de barras, WCS sugere o tamanho de caixa para esse pedido, operador realiza a leitura do QR Code do tamanho associando a caixa ao pedido e imprime a etiqueta de expedição. Operador induz a caixa que seguira para o posto PTL.
Um scanner automático em cada estação realizará a leitura da etiqueta. Caso tenha Picking na estação, então os respectivos displays e quantidades acenderão, caso contrário a caixa seguirá para a próxima estação.
Operador realiza a separação dos itens solicitados em todos os postos da estação de PTL e após finalizar todo o processo de picking é realizado a integração do WCS para o WMS com a confirmação de picking.
Após passar por todos os postos PTL da estação, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.
Quando a linha de picking Misto estiver cheia, operador não deverá mandar pedidos misto e unitiza para POLLUX expedir, apenas pedidos que não necessitarem de outros volumes da estação de picking, pedido mono.
Caixas expedidas pela POLLUX com falhas físicas na como falha de impressão ou problema de NOREAD serão desviadas para a estação PTL, para que o operador, faça o tratamento dessa caixa, realizando a reimpressão da etiqueta caso necessário. Operador realizará a reimpressão dessa etiqueta pelo sistema WCS.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Pedido Unitiza  
**Score:** — (semantico) | **ID:** 2bb4c62513e7fdff

Quando o pedido é tipo Unitiza, WMS envia a informação no código de barras. O pedido é iniciado pela POLLUX, nesse pedido existirão mais de 1 caixa no mesmo pedido, e não terá produtos a serem separados na estação de PTL esse tipo de pedido será desviado para a estação PTL para que o operador realize o processo de unitização das caixas desse pedido. Operador recebe o primeiro volume, e ao realizar a leitura do código de barras, na tela do WCS, visualiza a informação que esse pedido se trata de pedido unitiza e que existem mais caixas para que seja unitizado e concluído, imprime a etiqueta de expedição, recebe a próxima caixa que fará parte do mesmo pedido, então o operador unifica as caixas em um envelope de papelão, fixa a etiqueta de expedição impressa, fecha o envelope. E solta novamente na linha para que a caixa siga para o sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Pedido Picking (Tarefa)  
**Score:** — (semantico) | **ID:** 17318fd36578d2e5

POST
REQUEST:
WMS (Cliente)  WCS (Invent)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Confirmação Picking  
**Score:** — (semantico) | **ID:** 6b10bb8719c2d69b

POST
REQUEST:
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Pedido Misto  
**Score:** — (semantico) | **ID:** 3fa1543022cf9321

No pedido misto, WMS envia a informação no código de barras. O pedido é iniciado na máquina POLLUX e enviará à automação uma caixa lacrada com uma etiqueta impressa e fixada pela própria máquina.
As informações desse pedido são enviadas pelo campo complemento do arquivo (JSON) com os códigos de barras da POLLUX para que o separador realiza a associação.
Leitor fixo fará a leitura desse código de barras, WCS sugere o tamanho de caixa para esse pedido, operador realiza a leitura do QR Code do tamanho associando a caixa ao pedido e imprime a etiqueta de expedição. Operador induz a caixa que seguira para o posto PTL.
Um scanner automático em cada estação realizará a leitura da etiqueta. Caso tenha Picking na estação, então os respectivos displays e quantidades acenderão, caso contrário a caixa seguirá para a próxima estação.
Operador realiza a separação dos itens solicitados em todos os postos da estação de PTL e após finalizar todo o processo de picking é realizado a integração do WCS para o WMS com a confirmação de picking.
Após passar por todos os postos PTL da estação, caixa seguira para a estação de packing, onde ela é fechada manualmente e induzida novamente na esteira, seguindo para o sorter.
Quando a linha de picking Misto estiver cheia, operador não deverá mandar pedidos misto e unitiza para POLLUX expedir, apenas pedidos que não necessitarem de outros volumes da estação de picking, pedido mono.
Caixas expedidas pela POLLUX com falhas físicas na como falha de impressão ou problema de NOREAD serão desviadas para a estação PTL, para que o operador, faça o tratamento dessa caixa, realizando a reimpressão da etiqueta caso necessário. Operador realizará a reimpressão dessa etiqueta pelo sistema WCS.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Pedido Unitiza  
**Score:** — (semantico) | **ID:** e66fe52019e0a258

Quando o pedido é tipo Unitiza, WMS envia a informação no código de barras. O pedido é iniciado pela POLLUX, nesse pedido existirão mais de 1 caixa no mesmo pedido, e não terá produtos a serem separados na estação de PTL esse tipo de pedido será desviado para a estação de Unitiza, para que o operador realize o processo de unitização das caixas desse pedido. Operador recebe o primeiro volume, e ao realizar a leitura do código de barras, na tela do WCS, visualiza a informação que esse pedido se trata de pedido unitiza e que existem mais caixas para que seja unitizado e concluído, imprime a etiqueta de expedição, recebe a próxima caixa que fará parte do mesmo pedido, então o operador unifica as caixas em um envelope de papelão, fixa a etiqueta de expedição impressa, fecha o envelope. E solta novamente na linha para que a caixa siga para o sorter.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Pedido Picking (Tarefa)  
**Score:** — (semantico) | **ID:** 3f26e817d49f716d

POST
REQUEST:
WMS (Cliente)  WCS (Invent)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Confirmação Picking  
**Score:** — (semantico) | **ID:** 0b8aaf6a16130800

POST
REQUEST:
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 3df314f71f5d202d

A invent usará uma aplicação com nome de MFC que será responsável pelo gerenciamento das informações dos pedidos, ou seja, esta aplicação receberá as informações das caixas e pedidos e armazenará em uma base de dados, tendo como papel fundamental a interface entre o sistema WMS DHL e a automação Pollux (embaladora).
A aplicação do MFC necessita de um banco de dados para o correto armazenamento e gerenciamento das informações.
Servidor aplicação + banco de dados já disponível no local, será compartilhado com PTL 2.0. O sistema possui interface WEB, permitindo assim que usuários acessem telas de relatórios e configurações do sistema através de login com usuário e senha. Desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Interface ORDERS Picking  
**Score:** — (nome-topico) | **ID:** 9e20d3b9e202f4d0

POST * endpoint a definir *
REQUEST:
WMS (cliente) → MFC (Invent)

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Confirmação de separação  
**Score:** — (semantico) | **ID:** 2a848cf491f2cc3a

VELOX  WMS
Apenas após realizar a conferência do pedido, sistema Velox irá disponibilizar as informações com a confirmação da separação dos pedidos de acordo com o que foi separado para cada pedido. O WMS irá receber as informações via API. A paletização do pedido é feita via coletor do WMS.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Pedidos (POST)  
**Score:** — (json-no-corpo) | **ID:** c3ba06f091cb3b91

WMS  VELOX
No início do processo de separação realizado pelo WMS, VELOX recebera a integração “Pedidos” com as informações de pedidos fracionados e FullCase. Nesse caso, todos os pedidos do tipo fracionados, serão destinados a área de conferência.
Os pedidos do tipo FullCase, destinados ao sorter para que realize o desvio conforme a sua rota cadastrada.
Referência:
https://apihml.alcis.com.br:4434/docs#tag/Pedidos/paths/~1api~1v1~1Pedidos/post
Exemplo Json:
Obs.: Campos mínimos que entendemos que sejam necessários para controlar o sorter e os desvios nas rampas
{
"numeroPedido": "string",
"codBarrasEtiq": “78946985412",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "stri",
"rota": "string",
"conferencia": "Sim"
}

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Pedidos (POST)  
**Score:** — (json-no-corpo) | **ID:** d9bd11dca62fccd8

WMS  VELOX
No início do processo, WMS envia API de pedidos para VELOX com as informações de pedidos FullCase e Fracionados. Nesse caso, todos os pedidos do tipo FullCase, serão destinados ao sorter, sem a necessidade de serem desviados a área de conferência.
Os pedidos do tipo FullCase, são destinados ao sorter para que realize o desvio conforme a sua rota cadastrada.
Os pedidos do tipo Fracionados, serão destinados a área de conferência, após operador realizar a conferência, WMS enviará atualização desse pedido como conferido.
OBS: Para os pedidos do tipo fracionados, no código de barras da caixa, teremos a informação de “FR” antes do numeral da caixa, por exemplo “FR123456789012”
Referência:
https://apihml.alcis.com.br:4434/docs#tag/Pedidos/paths/~1api~1v1~1Pedidos/post
Exemplo Json FullCase:
Obs.: Campos mínimos que entendemos que sejam necessários.
{
"numeroPedido": "string",
"codBarrasEtiq": “78946985412",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "full",
"rota": "string",
"conferencia": "null"
}
Exemplo Json Fracionados:
Obs.: Campos mínimos que entendemos que sejam necessários.
{
"numeroPedido": "string",
"codBarrasEtiq": “FR123456789012",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "null",
"rota": "string",
"conferencia": "null"
}

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Pedidos (POST)  
**Score:** — (json-no-corpo) | **ID:** aeb47d3073427b7d

WMS  VELOX
No início do processo, WMS envia API de pedidos para VELOX com as informações de pedidos FullCase e Fracionados. Nesse caso, todos os pedidos do tipo FullCase, serão destinados ao sorter, sem a necessidade de serem desviados a área de conferência.
Os pedidos do tipo FullCase, são destinados ao sorter para que realize o desvio conforme a sua rota cadastrada.
Os pedidos do tipo Fracionados, serão destinados a área de conferência, após operador realizar a conferência, WMS enviará atualização desse pedido como conferido.
OBS: Para os pedidos do tipo fracionados, no código de barras da caixa, teremos a informação de “FR” antes do numeral da caixa, por exemplo “FR123456789012”
Referência:
https://apihml.alcis.com.br:4434/docs#tag/Pedidos/paths/~1api~1v1~1Pedidos/post
Exemplo Json FullCase:
Obs.: Campos mínimos que entendemos que sejam necessários.
{
"numeroPedido": "string",
"codBarrasEtiq": “78946985412",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "full",
"rota": "string",
"conferencia": "null"
}
Exemplo Json Fracionados:
Obs.: Campos mínimos que entendemos que sejam necessários.
{
"numeroPedido": "string",
"codBarrasEtiq": “FR123456789012",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "null",
"rota": "string",
"conferencia": "null"
}

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Pedidos (POST)  
**Score:** — (json-no-corpo) | **ID:** 926ecfe827a38bea

WMS  VELOX
No início do processo, WMS envia API de pedidos para VELOX com as informações de pedidos FullCase e Fracionados. Nesse caso, todos os pedidos do tipo FullCase, serão destinados ao sorter, sem a necessidade de serem desviados a área de conferência.
Os pedidos do tipo FullCase, são destinados ao sorter para que realize o desvio conforme a sua rota cadastrada.
Os pedidos do tipo Fracionados, serão destinados a área de conferência, após operador realizar a conferência, WMS enviará atualização desse pedido como conferido.
OBS: Para os pedidos do tipo fracionados, no código de barras da caixa, teremos a informação de “FR” antes do numeral da caixa, por exemplo “FR123456789012”
Referência:
https://apihml.alcis.com.br:4434/docs#tag/Pedidos/paths/~1api~1v1~1Pedidos/post
Exemplo Json FullCase:
Obs.: Campos mínimos que entendemos que sejam necessários.
{
"numeroPedido": "string",
"codBarrasEtiq": “78946985412",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "full",
"rota": "string",
"conferencia": "null"
}
Exemplo Json Fracionados:
Obs.: Campos mínimos que entendemos que sejam necessários.
{
"numeroPedido": "string",
"codBarrasEtiq": “FR123456789012",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "null",
"rota": "string",
"conferencia": "null"
}

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Interface Orders  
**Score:** — (nome-topico) | **ID:** 7a680d0f56abba13

A interface Orders será utilizada pelo sistema Invent para enviar informações dos volumes alocados em cada saca que foi fechada ao acionar o sensor de saca cheia.
Neste caso, quando o sistema do cliente receber essas informações, ele deverá gerar um número interno de manifesto e disponibilizar essa informação via documento para que o operador faça a impressão e fixe na saca.
Não existira integração do sistema do cliente com sistema Invent. (JadLog → Invent)
Apenas sistema Invent e sistema cliente. (Invent → JadLog)

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Listagem de ordens de expedição  
**Score:** — (semantico) | **ID:** 8e431f5316daf58a

As informações sobre as ordens de expedição emitidas pelo SAP serão listadas nessa funcionalidade do sistema.
WCS Velox deve possibilitar refinar as buscas pelos seguintes filtros:
Período da emissão da ordem
Tipo da Ordem
Estado da Ordem
Centro
Sistema de Depósito
Depósito
ID da OT
SKU
Código de Movimento
ID da ordem da Ordem de Expedição
ID Transporte
Códigos do Pallets – é possível inserir mais de um código de pallet, separados por “;”
A opção “Detalhar” lista os itens da ordem de venda selecionada, mostrado na imagem abaixo.
Através da opção “Excluir” pode-se remover um item de ordem de venda com status “Venda Futura”.
Nota: Não é responsabilidade do WCS enviar qualquer mensagem de estorno ou confirmação para o ERP. Essa tarefa deverá ser feita manualmente.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Listagem de ordens de expedição  
**Score:** — (semantico) | **ID:** 06f8622b476ff96c

As informações sobre as ordens de expedição emitidas pelo SAP serão listadas nessa funcionalidade do sistema.
WCS Velox deve possibilitar refinar as buscas pelos seguintes filtros:
Período da emissão da ordem
Tipo da Ordem
Estado da Ordem
Centro
Sistema de Depósito
Depósito
ID da OT
SKU
Código de Movimento
ID da ordem da Ordem de Expedição
ID Transporte
Códigos do Pallets – é possível inserir mais de um código de pallet, separados por “;”
A opção “Detalhar” lista os itens da ordem de venda selecionada, mostrado na imagem abaixo.
Através da opção “Excluir” pode-se remover um item de ordem de venda com status “Venda Futura”.
Nota: Não é responsabilidade do WCS enviar qualquer mensagem de estorno ou confirmação para o ERP. Essa tarefa deverá ser feita manualmente.

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** fa459b83fc6e593e

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos pedidos triados na operação, ou seja, está aplicação executara as rotinas de Linha de Separação e Conferência, tendo como papel fundamental a interface entre os sistemas WMS (cliente) e VELOX
Linha de separação:
Frente
Laterais
Conferencia:
Balança
A aplicação VELOX da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada posto de trabalho (Google Chrome).

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Order (Pedidos)  
**Score:** — (json-no-corpo) | **ID:** 7d5ee344c581f9b0

WMS  VELOX
Integração para o WMS enviar para Velox a integração com 1 ou N pedidos a serem separados na automação.
Velox deverá receber todas as informações necessárias para realizar a cubagem do pedido e definir quantas e quais tipos de caixas serão utilizadas para a separação e com isso totalizar o peso de cada volume.
Sugestão de JSON de Order:
[
	{
		"pedido": 557788,
		"conferencia": true,
		"transportadora": "SHPX LOGISTICA",
		"itens": [{
				"endereco": "V417458",
				"cod_item": "4758693636251",
				"cod_fardo": null,
				"cod_fullcase": null,
				"descricao": "Descrição do item",
				"posto": 1,
				"qtde": 5,
				"altura": 0.841,
				"largura": 0.835,
				"comprimento": 0.547,
				"peso": 0.241
			},{
				"endereco": "V417458",
				"cod_item": null,
				"cod_fardo": "3214585589413",
				"cod_fullcase": null,
				"descricao": "Descrição do item",
				"posto": 2,
				"qtde": 3,
				"altura": 1.451,
				"largura": 1.022,
				"comprimento": 0.994,
				"peso": 0.947
			},{
				"endereco": "V417458",
				"cod_item": null,
				"cod_fardo": null,
				"cod_fullcase": "6547531598246",
				"descricao": "Descrição do item",
				"posto": 3,
				"qtde": 1,
				"altura": 3.463,
				"largura": 3.923,
				"comprimento": 2.099,
				"peso": 3.654
			}
		]
	},
	{
		"pedido": 419685,
		"conferencia": false,
		"transportadora": "SHPX LOGISTICA",
		"itens": [{
				"endereco": "P541287",
				"cod_item": "9870036041873",
				"cod_fardo": null,
				"cod_fullcase": null,
				"descricao": "Descrição do item",
				"posto": 2,
				"qtde": 8,
				"altura": 0.144,
				"largura": 0.25,
				"comprimento": 0.299,
				"peso": 0.458
			}]}]

---
**Origem:** [I22.1732] 2023 — `PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** b457682e14765a82

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Transfer  
**Score:** — (semantico) | **ID:** 39ff7f50b30e0a23

Responsabilidade do WMS no Abastecimento do Transfer:
O WMS é responsável por abastecer o transfer, garantindo que a quantidade necessária de produtos seja disponibilizada no pulmão para atendimento à demanda de reabastecimento. Esse abastecimento ocorre previamente a integração de ondas. O WMS realiza o processo de movimentação de produtos do estoque para o transfer, com controle de quantidade e lote, e empresa, enviando as informações para o WCS que, por sua vez, gerencia o fluxo interno da automação.
Transfer no WCS:
No contexto do WCS, o "transfer" é uma área intermediária onde os produtos aguardam para ser alocados nas posições de picking. O WCS gerencia o movimento de produtos entre o transfer e as posições de picking, realizando as movimentações internas para otimizar o uso do espaço de armazenamento e garantir que os produtos estejam disponíveis nas posições corretas para a separação. O WCS monitora as quantidades de produtos no transfer, movendo-os para as posições de picking conforme a necessidade, realizando o controle de estoque em tempo real e mantendo a rastreabilidade durante todo o processo.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Integração de Remessa / Pedido  
**Score:** — (json-no-corpo) | **ID:** 48c52bb86e483679

WMS → WCS
O WMS envia uma lista de remessas com informações detalhadas como número do pedido, SKU, quantidade, prioridade e dimensões. Estes pedidos são exibidos na tela do WCS para o operador iniciar a separação.
Exemplo JSON:
{
"lista_remessas": [
{
"num_pedido": "P45001",
"prioridade": "1",
"remessa": "86089815",
"cep": "930025-000",
"loja": "LJ1",
"cod_transp": 1020,
"des_transp": "TRANSPORTES 1",
"cod_cliente": "1",
"des_cliente": "Cliente 1",
"clienteEspecial": True,
"cidade": "DIADEMA",
"uf": "SP",
"cod_rota": "784",
"des_rota": "Rota01",
"itens_fracionados": [
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"ean": "7891000000028",
"qtd_solic": 7,
"cubagem": 0.00164,
"altura": 10,
"largura": 100,
"comprimento": 150
},
{
"tarefa": "00013",
"tipo_dep": "Deposito 01",
"posicao": "A-01-08",
"sku": "1020",
"ean": "9961000000014",
"qtd_solic": 8,
"cubagem": 0.00164,
"altura": 400,
"largura": 300,
"comprimento": 500
}
]
}
]
}

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Integração de Remessa / Pedido  
**Score:** — (json-no-corpo) | **ID:** b979fbf16727be45

WMS → WCS
O WMS envia uma lista de remessas com informações detalhadas como número do pedido, SKU, quantidade, prioridade e dimensões. Estes pedidos são exibidos na tela do WCS para o operador iniciar a separação.
Exemplo JSON:
{
"lista_remessas": [
{
"num_pedido": "P45001",
"prioridade": "1",
"remessa": "86089815",
"cep": "930025-000",
"loja": "LJ1",
"cod_transp": 1020,
"des_transp": "TRANSPORTES 1",
"cod_cliente": "1",
"des_cliente": "Cliente 1",
"clienteEspecial": True,
"cidade": "DIADEMA",
"uf": "SP",
"cod_rota": "784",
"des_rota": "Rota01",
"itens_fracionados": [
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"ean": "7891000000028",
"qtd_solic": 7,
"cubagem": 0.00164,
"altura": 10,
"largura": 100,
"comprimento": 150
},
{
"tarefa": "00013",
"tipo_dep": "Deposito 01",
"posicao": "A-01-08",
"sku": "1020",
"ean": "9961000000014",
"qtd_solic": 8,
"cubagem": 0.00164,
"altura": 400,
"largura": 300,
"comprimento": 500
}
]
}
]
}

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Pedidos (POST)  
**Score:** — (json-no-corpo) | **ID:** 701282392579ae51

WMS  VELOX
O WMS irá disponibilizar o arquivo de integração via webservice com as informações relativas aos níveis de separações que deverão ser desviados. O sistema VELOX recebe as informações dos pedidos e as processa para que o volume seja desviado no nível correspondente.
{
"codCaixa": "888888",
"pedido": "999999",
"totalVolumes": 3,
"atualVolume": 1,
"tipoCaixa": "B",
"rota": "Transp",
"conferencia": null,
"reinducao": "0",
"picking": [
{
"nivel": "0"
},
{
"nivel": "1"
},
{
"nivel": "2"
}
]
}

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Pedidos (POST)  
**Score:** — (json-no-corpo) | **ID:** bc7ec8027c2f291c

WMS  VELOX
O WMS irá disponibilizar o arquivo de integração via webservice com as informações relativas aos níveis de separações que deverão ser desviados. O sistema VELOX recebe as informações dos pedidos e as processa para que o volume seja desviado no nível correspondente.
{
"codCaixa": "888888",
"pedido": "999999",
"totalVolumes": 3,
"atualVolume": 1,
"tipoCaixa": "B",
"rota": "Transp",
"conferencia": null,
"picking": [
{
"nivel": "0"
},
{
"nivel": "1"
},
{
"nivel": "2"
}
]
}

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Order (Pedidos/Remessas)  
**Score:** — (json-no-corpo) | **ID:** ad8e9691223a3f47

EWMVELOX
EWM fará o envio da integração Order, para enviar as informações de pedidos/remessas para o sistema VELOX.
O sistema Velox, ao receber os pedidos, deverá gerar uma onda para esses pedidos recebidos. Essa onda deverá ser gerada dentro do sistema Velox.
O sistema Velox, ao receber os pedidos, deverá realizar o cálculo de cubagem dos pedidos recebidos, e gerar os volumes conforme o cálculo, com isso deverá calcular o que será separado fracionado e full case (caixa fechada).
Ou seja, conforme o planejamento do cliente, por exemplo, na parte da manhã pretende enviar uma massa de diversos pedidos, com isso, Velox deverá criar uma onda para essa massa enviada pela manhã, na próxima massa de pedidos que serem enviados, Velox deverá criar uma onda para essa segunda massa de pedidos, e assim consecutivamente.
As ondas serão criadas em números sequenciais no sistema Velox.
Sugestão de JSON de Order:
[
	{
		"pedido": "6105924E",
		"nf": "0199560",
		"sigla": "HIC",
		"portaria": "344/98 - C1",
		"transportadora": "QUALITY1",
		"sigla_transp": "(QUA)",
		"carga": "230926 - 004/QUA07",
		"cod_cliente": 205637,
		"desc_cliente": "UNIMED BELO HORIZONTE COOP TRAB MED",
		"end_cliente": "AV ENG DARCY NOGUEIRA DO PINHO",
		"num_cliente": "3201",
		"cep_cliente": "32675-515",
		"cid_cliente": "Betim",
		"est_cliente": "MG",
		"outras_inf": null,
		"itens": [
			{
				"cod_item": "50.0146",
				"ean13": 7896676424607,
				"lote": "23040705L",
				"qtde": 170,
				"descricao": "QUETIPIN 25m g Com . Rev . 3bl. X 10",
				"local": "C31 - 39 - 01"
			},
			{
				"cod_item": "27.9587",
				"ean13": 7896541214853,
				"lote": "45856392L",
				"qtde": 240,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "J09 - 11 - 47"
			},
			{
				"cod_item": "47.2577",
				"ean13": 7890214177852,
				"lote": "96854522L",
				"qtde": 20,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "D22 - 45 - 66"
			}
		]
	}
]

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Order (Pedidos/Remessas)  
**Score:** — (json-no-corpo) | **ID:** 9707374d60039b32

EWMVELOX
EWM fará o envio da integração Order, para enviar as informações de pedidos/remessas para o sistema VELOX.
O sistema Velox, ao receber os pedidos, deverá gerar uma onda para esses pedidos recebidos. Essa onda deverá ser gerada dentro do sistema Velox.
O sistema Velox, ao receber os pedidos, deverá realizar o cálculo de cubagem dos pedidos recebidos, e gerar os volumes conforme o cálculo, com isso deverá calcular o que será separado fracionado e full case (caixa fechada).
Ou seja, conforme o planejamento do cliente, por exemplo, na parte da manhã pretende enviar uma massa de diversos pedidos, com isso, Velox deverá criar uma onda para essa massa enviada pela manhã, na próxima massa de pedidos que serem enviados, Velox deverá criar uma onda para essa segunda massa de pedidos, e assim consecutivamente.
As ondas serão criadas em números sequenciais no sistema Velox.
Sugestão de JSON de Order:
[
	{
		"pedido": "6105924E",
		"nf": "0199560",
		"sigla": "HIC",
		"transportadora": "QUALITY1",
		"sigla_transp": "(QUA)",
		"carga": "230926 - 004/QUA07",
		"cod_cliente": 205637,
		"desc_cliente": "UNIMED BELO HORIZONTE COOP TRAB MED",
		"end_cliente": "AV ENG DARCY NOGUEIRA DO PINHO",
		"num_cliente": "3201",
		"cep_cliente": "32675-515",
		"cid_cliente": "Betim",
		"est_cliente": "MG",
		"outras_inf": null,
		"itens": [
			{
				"cod_item": "50.0146",
				"ean13": 7896676424607,
				"portaria": "344/98 - C1",
				"lote": "23040705L",
				"qtde": 170,
				"descricao": "QUETIPIN 25m g Com . Rev . 3bl. X 10",
				"local": "C31 - 39 - 01"
			},
			{
				"cod_item": "27.9587",
				"ean13": 7896541214853,
				"portaria": null,
				"lote": "45856392L",
				"qtde": 240,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "J09 - 11 - 47"
			},
			{
				"cod_item": "47.2577",
				"ean13": 7890214177852,
				"portaria": "",
				"lote": "96854522L",
				"qtde": 20,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "D22 - 45 - 66"
			}
		]
	}
]

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Order (Pedidos/Remessas)  
**Score:** — (json-no-corpo) | **ID:** c07f303a8be1f7da

EWMVELOX
EWM fará o envio da integração Order, para enviar as informações de pedidos/remessas para o sistema VELOX.
O sistema Velox, ao receber os pedidos, deverá gerar uma onda para esses pedidos recebidos. Essa onda deverá ser gerada dentro do sistema Velox.
O sistema Velox, ao receber os pedidos, deverá realizar o cálculo de cubagem dos pedidos recebidos, e gerar os volumes conforme o cálculo, com isso deverá calcular o que será separado fracionado e full case (caixa fechada).
Ou seja, conforme o planejamento do cliente, por exemplo, na parte da manhã pretende enviar uma massa de diversos pedidos, com isso, Velox deverá criar uma onda para essa massa enviada pela manhã, na próxima massa de pedidos que serem enviados, Velox deverá criar uma onda para essa segunda massa de pedidos, e assim consecutivamente.
As ondas serão criadas em números sequenciais no sistema Velox.
Sugestão de JSON de Order:
[
	{
		"pedido": "6105924E",
		"nf": "0199560",
		"sigla": "HIC",
		"transportadora": "QUALITY1",
		"sigla_transp": "(QUA)",
		"carga": "230926 - 004/QUA07",
		"cod_cliente": 205637,
		"desc_cliente": "UNIMED BELO HORIZONTE COOP TRAB MED",
		"end_cliente": "AV ENG DARCY NOGUEIRA DO PINHO",
		"num_cliente": "3201",
		"cep_cliente": "32675-515",
		"cid_cliente": "Betim",
		"est_cliente": "MG",
		"outras_inf": null,
		"itens": [
			{
				"cod_item": "50.0146",
				"ean13": 7896676424607,
				"portaria": "344/98 - C1",
				"lote": "23040705L",
				"qtde": 170,
				"descricao": "QUETIPIN 25m g Com . Rev . 3bl. X 10",
				"local": "C31 - 39 - 01"
			},
			{
				"cod_item": "27.9587",
				"ean13": 7896541214853,
				"portaria": null,
				"lote": "45856392L",
				"qtde": 240,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "J09 - 11 - 47"
			},
			{
				"cod_item": "47.2577",
				"ean13": 7890214177852,
				"portaria": "",
				"lote": "96854522L",
				"qtde": 20,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "D22 - 45 - 66"
			}
		]
	}
]

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Order (Pedidos/Remessas)  
**Score:** — (json-no-corpo) | **ID:** 31bd99a20149f436

EWMVELOX
EWM fará o envio da integração Order, para enviar as informações de pedidos/remessas para o sistema VELOX.
O sistema Velox, ao receber os pedidos, deverá gerar uma onda para esses pedidos recebidos. Essa onda deverá ser gerada dentro do sistema Velox.
O sistema Velox, ao receber os pedidos, deverá realizar o cálculo de cubagem dos pedidos recebidos, e gerar os volumes conforme o cálculo, com isso deverá calcular o que será separado fracionado e full case (caixa fechada).
Ou seja, conforme o planejamento do cliente, por exemplo, na parte da manhã pretende enviar uma massa de diversos pedidos, com isso, Velox deverá criar uma onda para essa massa enviada pela manhã, na próxima massa de pedidos que serem enviados, Velox deverá criar uma onda para essa segunda massa de pedidos, e assim consecutivamente.
As ondas serão criadas em números sequenciais no sistema Velox.
Sugestão de JSON de Order:
[
	{
		"pedido": "6105924E",
		"nf": "0199560",
		"sigla": "HIC",
		"transportadora": "QUALITY1",
		"sigla_transp": "(QUA)",
		"carga": "230926 - 004/QUA07",
		"cod_cliente": 205637,
		"desc_cliente": "UNIMED BELO HORIZONTE COOP TRAB MED",
		"end_cliente": "AV ENG DARCY NOGUEIRA DO PINHO",
		"num_cliente": "3201",
		"cep_cliente": "32675-515",
		"cid_cliente": "Betim",
		"est_cliente": "MG",
		"outras_inf": null,
		"itens": [
			{
				"cod_item": "50.0146",
				"ean13": 7896676424607,
				"portaria": "344/98 - C1",
				"lote": "23040705L",
				"qtde": 170,
				"descricao": "QUETIPIN 25m g Com . Rev . 3bl. X 10",
				"local": "C31 - 39 - 01"
			},
			{
				"cod_item": "27.9587",
				"ean13": 7896541214853,
				"portaria": null,
				"lote": "45856392L",
				"qtde": 240,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "J09 - 11 - 47"
			},
			{
				"cod_item": "47.2577",
				"ean13": 7890214177852,
				"portaria": "",
				"lote": "96854522L",
				"qtde": 20,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "D22 - 45 - 66"
			}
		]
	}
]

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Order (Pedidos/Remessas)  
**Score:** — (json-no-corpo) | **ID:** e29311324a13a9ce

EWMVELOX
EWM fará o envio da integração Order, para enviar as informações de pedidos/remessas para o sistema VELOX.
O sistema Velox, ao receber os pedidos, deverá gerar uma onda para esses pedidos recebidos. Essa onda deverá ser gerada dentro do sistema Velox.
O sistema Velox, ao receber os pedidos, deverá realizar o cálculo de cubagem dos pedidos recebidos, e gerar os volumes conforme o cálculo, com isso deverá calcular o que será separado fracionado e full case (caixa fechada).
Ou seja, conforme o planejamento do cliente, por exemplo, na parte da manhã pretende enviar uma massa de diversos pedidos, com isso, Velox deverá criar uma onda para essa massa enviada pela manhã, na próxima massa de pedidos que serem enviados, Velox deverá criar uma onda para essa segunda massa de pedidos, e assim consecutivamente.
As ondas serão criadas em números sequenciais no sistema Velox.
Sugestão de JSON de Order:
[
	{
		"pedido": "6105924E",
		"nf": "0199560",
		"sigla": "HIC",
		"portaria": "344/98 - C1",
		"transportadora": "QUALITY1",
		"sigla_transp": "(QUA)",
		"carga": "230926 - 004/QUA07",
		"cod_cliente": 205637,
		"desc_cliente": "UNIMED BELO HORIZONTE COOP TRAB MED",
		"end_cliente": "AV ENG DARCY NOGUEIRA DO PINHO",
		"num_cliente": "3201",
		"cep_cliente": "32675-515",
		"cid_cliente": "Betim",
		"est_cliente": "MG",
		"outras_inf": null,
		"itens": [
			{
				"cod_item": "50.0146",
				"ean13": 7896676424607,
				"lote": "23040705L",
				"qtde": 170,
				"descricao": "QUETIPIN 25m g Com . Rev . 3bl. X 10",
				"local": "C31 - 39 - 01"
			},
			{
				"cod_item": "27.9587",
				"ean13": 7896541214853,
				"lote": "45856392L",
				"qtde": 240,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "J09 - 11 - 47"
			},
			{
				"cod_item": "47.2577",
				"ean13": 7890214177852,
				"lote": "96854522L",
				"qtde": 20,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "D22 - 45 - 66"
			}
		]
	}
]

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Order (Pedidos/Remessas)  
**Score:** — (json-no-corpo) | **ID:** b3f38bbb8ea67a6c

EWMVELOX
EWM fará o envio da integração Order, para enviar as informações de pedidos/remessas para o sistema VELOX.
O sistema Velox, ao receber os pedidos, deverá gerar uma onda para esses pedidos recebidos. Essa onda deverá ser gerada dentro do sistema Velox.
O sistema Velox, ao receber os pedidos, deverá realizar o cálculo de cubagem dos pedidos recebidos, e gerar os volumes conforme o cálculo, com isso deverá calcular o que será separado fracionado e full case (caixa fechada).
Ou seja, conforme o planejamento do cliente, por exemplo, na parte da manhã pretende enviar uma massa de diversos pedidos, com isso, Velox deverá criar uma onda para essa massa enviada pela manhã, na próxima massa de pedidos que serem enviados, Velox deverá criar uma onda para essa segunda massa de pedidos, e assim consecutivamente.
As ondas serão criadas em números sequenciais no sistema Velox.
Sugestão de JSON de Order:
[
	{
		"pedido": "6105924E",
		"nf": "0199560",
		"sigla": "HIC",
		"transportadora": "QUALITY1",
		"sigla_transp": "(QUA)",
		"carga": "230926 - 004/QUA07",
		"cod_cliente": 205637,
		"desc_cliente": "UNIMED BELO HORIZONTE COOP TRAB MED",
		"end_cliente": "AV ENG DARCY NOGUEIRA DO PINHO",
		"num_cliente": "3201",
		"cep_cliente": "32675-515",
		"cid_cliente": "Betim",
		"est_cliente": "MG",
		"outras_inf": null,
		"itens": [
			{
				"cod_item": "50.0146",
				"ean13": 7896676424607,
				"portaria": "344/98 - C1",
				"lote": "23040705L",
				"qtde": 170,
				"descricao": "QUETIPIN 25m g Com . Rev . 3bl. X 10",
				"local": "C31 - 39 - 01"
			},
			{
				"cod_item": "27.9587",
				"ean13": 7896541214853,
				"portaria": null,
				"lote": "45856392L",
				"qtde": 240,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "J09 - 11 - 47"
			},
			{
				"cod_item": "47.2577",
				"ean13": 7890214177852,
				"portaria": "",
				"lote": "96854522L",
				"qtde": 20,
				"descricao": "EXEMPLO DESCRIÇÃO MEDICAMENTO",
				"local": "D22 - 45 - 66"
			}
		]
	}
]

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 7f199ae3b14879f4

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 4339ab9927b85876

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 22215ba8721d97d1

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 1e364d095591aaa0

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.1615] 2023 — `I24.114-ESPECIFICACAO DE SOFTWARE - ADITIVO - DADOS DE NOTA FISCAL.docx`  
**Heading:** ORDER (PEDIDOS)  
**Score:** — (json-no-corpo) | **ID:** 00364cc46fcacc18

WMS  WCS
Código de barras pedido shopee no Payload de ORDER (Pedidos)
Para atender à solicitação do grupo Dana, o WCS deverá consumir dados já disponíveis na integração de pedidos, sem necessidade de alterações no processo atual. O campo existente no payload será utilizado para preencher o conteúdo do novo código de barras na etiqueta de volume:
"transportadora": quando o pedido é da Shopee, o número do pedido vem concatenado neste campo.
Identificação do código do pedido Shopee: para pedidos em que o campo “transportadora” iniciar com “BLW-SHO-”, o WCS deve extrair os últimos 14 caracteres do campo e gerar um código de barras para esse número, conforme o layout exibido no próximo tópico.
Esse dado será extraído do payload de ORDER e incluído nas etiquetas de volume, seguindo o padrão solicitado.
Exemplo JSON:
[
{
"pedido": 557788,
"transportadora": "SHPX LOGISTICA",
"itens": [
{
"cod_item": "4758693636251",
"cod_fardo": null,
"cod_fullcase": null,
"descricao": "Descrição do item",
"qtde": 5,
"altura": 0.841,
"largura": 0.835,
"comprimento": 0.547,
"peso": 0.241
},
{
"cod_item": null,
"cod_fardo": "3214585589413",
"cod_fullcase": null,
"descricao": "Descrição do item",
"qtde": 3,
"altura": 1.451,
"largura": 1.022,
"comprimento": 0.994,
"peso": 0.947
},
{
"cod_item": null,
"cod_fardo": null,
"cod_fullcase": "6547531598246",
"descricao": "Descrição do item",
"qtde": 1,
"altura": 3.463,
"largura": 3.923,
"comprimento": 2.099,
"peso": 3.654,
"tipo_embalagem": "BLUZ",
"observacao": "de acordo com o cadastro do sistema"
}
]
},
{
"pedido": 419685,
"transportadora": "SHPX LOGISTICA",
"itens": [
{
"cod_item": "9870036041873",
"cod_fardo": null,
"cod_fullcase": null,
"descricao": "Descrição do item",
"qtde": 8,
"altura": 0.144,
"largura": 0.25,
"comprimento": 0.299,
"peso": 0.458
}
]
}
]

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Aditivo Etiqueta.docx`  
**Heading:** Order (Pedidos)  
**Score:** — (json-no-corpo) | **ID:** 76a8f766d3451c36

WMS  WCS
A integração de pedidos terá a adição do campo “shp” que passará a ser enviado o número do pedido da SHOPPE e será utilizado na impressão da etiqueta.
[
	{
		"pedido": 557788,
"shp": “BLW-Sopee-250430KR396KD2”,
		"transportadora": "SHPX LOGISTICA",
		"itens": [{
			
				"cod_item": "4758693636251",
				"cod_fardo": null,
				"cod_fullcase": null,
				"descricao": "Descrição do item",
				"qtde": 5,
				"altura": 0.841,
				"largura": 0.835,
				"comprimento": 0.547,
				"peso": 0.241
			},{
				"cod_item": null,
				"cod_fardo": "3214585589413",
				"cod_fullcase": null,
				"descricao": "Descrição do item",
				"qtde": 3,
				"altura": 1.451,
				"largura": 1.022,
				"comprimento": 0.994,
				"peso": 0.947
			},{
				"cod_item": null,
				"cod_fardo": null,
				"cod_fullcase": "6547531598246",
				"descricao": "Descrição do item",
				"qtde": 1,
				"altura": 3.463,
				"largura": 3.923,
				"comprimento": 2.099,
				"peso": 3.654,
"tipo_embalagem": "BLUZ", //de acordo com o cadastro do sistema
}
		]
	},
	{
		"pedido": 419685,
		"transportadora": "SHPX LOGISTICA",
		"itens": [{
				"cod_item": "9870036041873",
				"cod_fardo": null,
				"cod_fullcase": null,
				"descricao": "Descrição do item",
				"qtde": 8,
				"altura": 0.144,
				"largura": 0.25,
				"comprimento": 0.299,
				"peso": 0.458
}]}]

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 6a32cf44845b6919

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos pedidos triados na operação, ou seja, está aplicação executara as rotinas de Linha de Separação e Conferência, tendo como papel fundamental a interface entre os sistemas WMS (cliente) e VELOX
Linha de separação:
Frente
Laterais
Conferencia:
Balança
A aplicação VELOX da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada posto de trabalho (Google Chrome).

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Order (Pedidos)  
**Score:** — (json-no-corpo) | **ID:** a875b5bd0cdc067e

WMS  VELOX
Integração para o WMS enviar para Velox a integração com 1 ou N pedidos a serem separados na automação.
Velox deverá receber todas as informações necessárias para realizar a cubagem do pedido e definir quantas e quais tipos de caixas serão utilizadas para a separação e com isso totalizar o peso de cada volume.
Sugestão de JSON de Order:
[
	{
		"pedido": 557788,
		"transportadora": "SHPX LOGISTICA",
		"itens": [{
			
				"cod_item": "4758693636251",
				"cod_fardo": null,
				"cod_fullcase": null,
				"descricao": "Descrição do item",
				"qtde": 5,
				"altura": 0.841,
				"largura": 0.835,
				"comprimento": 0.547,
				"peso": 0.241
			},{
				"cod_item": null,
				"cod_fardo": "3214585589413",
				"cod_fullcase": null,
				"descricao": "Descrição do item",
				"qtde": 3,
				"altura": 1.451,
				"largura": 1.022,
				"comprimento": 0.994,
				"peso": 0.947
			},{
				"cod_item": null,
				"cod_fardo": null,
				"cod_fullcase": "6547531598246",
				"descricao": "Descrição do item",
				"qtde": 1,
				"altura": 3.463,
				"largura": 3.923,
				"comprimento": 2.099,
				"peso": 3.654,
"tipo_embalagem": "BLUZ", //de acordo com o cadastro do sistema
}
		]
	},
	{
		"pedido": 419685,
		"transportadora": "SHPX LOGISTICA",
		"itens": [{
				"cod_item": "9870036041873",
				"cod_fardo": null,
				"cod_fullcase": null,
				"descricao": "Descrição do item",
				"qtde": 8,
				"altura": 0.144,
				"largura": 0.25,
				"comprimento": 0.299,
				"peso": 0.458
}]}]
Observação: Apenas um dos três campos devem ser preenchidos na integração pedidos/itens, senão dará erro.
É feita a verificação de pedido a pedido para analisar se o código do item/fardo/fullcase está cadastrado no PickMap, se não houver cadastro, toda a integração será rejeitada.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Sugestão de Alocação  
**Score:** — (semantico) | **ID:** c9d36cc0852cdbdf

O WCS possui uma inteligência que armazena os registros das separações realizadas pela automação Invent e faz uma análise dos itens de acordo com a quantidade de unidades coletadas deste item e quantas visitas no endereço é feita para a separação.
Com essa análise feita, o WCS apresenta uma relação com sugestões de alocação dos itens de acordo o levantamento realizado da própria operação do cliente.
Nesta apresentação o WCS solicita a data inicial e final que a base deve ser analisada,  informando o ranking de coleta de todos os itens possuídos na base e mostrando a sugestão para posto, endereço, código do produto e descrição.
A sugestão tem como princípio alocar os itens com maiores números de coletas e visitas próximos ao operador e os demais dispersarem nas extremidades de cada posto de coleta. Sendo assim , otimizando o processo de separação ganhando em performance na linha de picking.
WCS permitirá que esses dados sejam exportados via Excel.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Sugestão de Alocação  
**Score:** — (semantico) | **ID:** de4aed84ae5027e3

O WCS possui uma inteligência que armazena os registros das separações realizadas pela automação Invent e faz uma análise dos itens de acordo com a quantidade de unidades coletadas deste item e quantas visitas no endereço é feita para a separação.
Com essa análise feita, o WCS apresenta uma relação com sugestões de alocação dos itens de acordo o levantamento realizado da própria operação do cliente.
Nesta apresentação o WCS solicita a data inicial e final que a base deve ser analisada, informando o ranking de coleta de todos os itens possuídos na base e mostrando a sugestão para posto, endereço, código do produto e descrição.
A sugestão tem como princípio alocar os itens com maiores números de coletas e visitas próximos ao operador e os demais dispersarem nas extremidades de cada posto de coleta. Sendo assim, otimizando o processo de separação ganhando em performance na linha de picking.
WCS permitirá que esses dados sejam exportados via Excel.
O sistema WCS possui uma funcionalidade inteligente que analisa o histórico de separações realizadas na operação, com base na quantidade de coletas por item e na frequência de visitas a determinados endereços. A partir dessa análise, o sistema gera uma sugestão otimizada de alocação dos produtos dentro dos postos de separação, priorizando o posicionamento dos itens mais coletados próximos ao operador e distribuindo os demais produtos em posições mais distantes.
Para gerar essa sugestão, o usuário informa um período desejado de análise, com data inicial e final. O sistema então apresenta um relatório com o ranking dos SKUs, contendo informações como código do produto, endereço atual, posto sugerido e descrição. Essa funcionalidade permite reorganizar o layout operacional de forma estratégica, com o objetivo de aumentar a produtividade da linha e reduzir deslocamentos durante o picking.
As informações geradas pela sugestão de alocação podem ser exportadas para Excel, facilitando a análise e implementação prática das melhorias sugeridas pela ferramenta.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Sugestão de Alocação  
**Score:** — (semantico) | **ID:** 18f807587f27d349

O WCS possui uma inteligência que armazena os registros das separações realizadas pela automação Invent e faz uma análise dos itens de acordo com a quantidade de unidades coletadas deste item e quantas visitas no endereço é feita para a separação.
Com essa análise feita, o WCS apresenta uma relação com sugestões de alocação dos itens de acordo o levantamento realizado da própria operação do cliente.
Nesta apresentação o WCS solicita a data inicial e final que a base deve ser analisada,  informando o ranking de coleta de todos os itens possuídos na base e mostrando a sugestão para posto, endereço, código do produto e descrição.
A sugestão tem como princípio alocar os itens com maiores números de coletas e visitas próximos ao operador e os demais dispersarem nas extremidades de cada posto de coleta. Sendo assim , otimizando o processo de separação ganhando em performance na linha de picking.
WCS permitirá que esses dados sejam exportados via Excel.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** a247a000bf7fdca5

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** f136209e55fef7d9

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 022ec29931d5f12f

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de Sorter, tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome)

---
**Origem:** [Fluxo Sorter] 2024 — `I23.XXXX - ESPECIFICACAO DE SOFTWARE - CODINOME PROJETO.docx`  
**Heading:** Recepção de pedidos – WMS  
**Score:** — (semantico) | **ID:** de1b95b8b346b750

Com base nos pedidos recebidos, o WMS inicia o processo de planejamento e agendamento das atividades no armazém. Isso pode incluir a programação de recebimentos de mercadorias, alocação de espaço de armazenamento, planejamento de rotas para picking (separação de produtos), entre outros.
O WMS gera listas de picking, que indicam ao sistema integrado de automação Velox, quais itens e quantidades devem ser retirados dos estoques para atender aos pedidos dos clientes.
Quando vários pedidos são recebidos simultaneamente ou em um curto espaço de tempo, o WMS pode agrupá-los em ondas de separação (wave picking). Isso permite otimizar o processo de picking, reduzindo o tambem o tempo e performance nas integrações entre sistemas.
Parte superior do formulário
Parte inferior do formulário

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Leitura dos itens  
**Score:** — (semantico) | **ID:** 3d54bf85ba3e04d0

Após os pedidos integrados, operador poderá configurar no Velox, quais pedidos devem ter os produtos lidos no momento da separação.
Com isso, os pedidos que forem escolhidos para serem lidos os produtos, ao serem separados nos postos, operador deverá realizar a leitura de todos os produtos para confirmar a separação.
Em caso de leitura de produto errado será apresentado no PDV mensagem de erro.

---
**Origem:** [I23.1410] 2024 — `ESPECIFICACAO DE INTEGRAÇÃO - JSL - REV2 - comentado 0912.docx`  
**Heading:** Troca de Pallets / Posições PBL Empenhados  
**Score:** — (semantico) | **ID:** d5593a4d0b4054e6

WMS  VELOX (POST)
Pendente definição
Integração de troca de pallets e posições empenhados para indução no sorter.
A troca de pallets, posições podem acontecer por diversos motivos, bloqueio e avarias etc.
Pallet
Caso a integração de troca de pallet aconteça antes de ser induzido na esteira, o sistema Velox deverá atualizar as informações e considerar o novo pallet enviado pelo WMS, e se por algum motivo o operador realizar a leitura do pallet que foi trocado, Velox não deve permitir a impressão das etiquetas, somente do pallet correto atualizado.
Caso a integração de troca de pallet aconteça com um pallet que as etiquetas já foram impressas, e está em processo de indução, sistema Velox a partir do momento que recebeu a integração deverá direcionar os volumes na esteira para o rejeito do sorter.
Caso a integração de troca de pallet aconteça com um pallet que já foi induzido completamente e seus volumes foram todos desviados e alocados em seus respectivos ‘volExp’, sistema Velox deverá informar (via relatório) em quais ‘volExp’ os volumes desse pallet foram alocados.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Mensagem de status  
**Score:** — (semantico) | **ID:** 90d4e230a66f487b

WCS  WMS
Integração para WCS notificar o WMS com os status do pedido, como pedido não iniciado no order start e pedido conferido nas estações de conferência.
10 – AGUARDANDO PROCESSO (QUANDO NÃO HOUVER SALDO)
20 – ORDER START (NOTIFICAR AO WMS O PRIMEIRO VOLUME DO PEDIDO)
30 – PEDIDO COMPLETO (NOTIFICAR AO WMS NO ULTIMO VOLUME DO PEDIDO QUE PASSAR PELO SORTER, INFORMANDO QUANTAS REAIS PASSARAM)
40 – ERROR (SE HOUVER ALGUMA INCOSISTENCIA EX: SEM PRODUTO CADASTRADO)

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Wave  
**Score:** — (semantico) | **ID:** 4f05c409297f5dd7

WMS → VELOX
Integração para o WMS enviar para o Velox a onda com diversos pedidos tanto full case quanto fracionados.
Lembrando que a separação de Full Case será de responsabilidade do cliente, Velox apenas fará o desvio correto no sorter, por isso esses volumes Full Case deverão estar devidamente integrados no Velox.
A onda poderá ser integrada com 1 (um) ou N pedidos com 1 (um) ou N volumes de fracionados e full case.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Wave  
**Score:** — (semantico) | **ID:** 672009ab1871d1b3

WMS → VELOX
Integração para o WMS enviar para o Velox a onda com diversos pedidos tanto full case quanto fracionados.
Lembrando que a separação de Full Case será de responsabilidade do cliente, Velox apenas fará o desvio correto no sorter, por isso esses volumes Full Case deverão estar devidamente integrados no Velox.
A onda poderá ser integrada com 1 (um) ou N pedidos com 1 (um) ou N volumes de fracionados e full case.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - ADITIVO_HYDRA_REV.1.docx`  
**Heading:** Tela Resumo Coleta  
**Score:** — (semantico) | **ID:** cf11fdf497bc5a41

Para municiar a operação com as informações necessárias para a coleta, o WCS deve acrescentar duas colunas antes da informação de TAREFA na tela “resumo coleta”, sendo elas:
Remessa
Transporte
Atualmente, o WCS já recebe essas informações na integração de Remessas, sendo assim esta é uma alteração apenas visual na tela onde não teremos ajuste nas integrações.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Pedidos (POST)  
**Score:** — (json-no-corpo) | **ID:** 7c99ddfe65a9e4ca

WMS  VELOX
No início do processo, WMS envia API de pedidos para VELOX com as informações de pedidos FullCase e Fracionados. Nesse caso, todos os pedidos do tipo FullCase, serão destinados ao sorter, sem a necessidade de serem desviados a área de conferência.
Os pedidos do tipo FullCase, são destinados ao sorter para que realize o desvio conforme a sua rota cadastrada.
Os pedidos do tipo Fracionados, serão destinados a área de conferência, após operador realizar a conferência, WMS enviará atualização desse pedido como conferido.
OBS: Para os pedidos do tipo fracionados, no código de barras da caixa, teremos a informação de “FR” antes do numeral da caixa, por exemplo “FR123456789012”
Referência:
https://apihml.alcis.com.br:4434/docs#tag/Pedidos/paths/~1api~1v1~1Pedidos/post
Exemplo Json FullCase:
Obs.: Campos mínimos que entendemos que sejam necessários.
{
"numeroPedido": "string",
"codBarrasEtiq": “78946985412",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "full",
"rota": "string",
"conferencia": "null"
}
Exemplo Json Fracionados:
Obs.: Campos mínimos que entendemos que sejam necessários.
{
"numeroPedido": "string",
"codBarrasEtiq": “FR123456789012",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "null",
"rota": "string",
"conferencia": "null"
}

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Pedidos (POST)  
**Score:** — (json-no-corpo) | **ID:** 6273f037128dc107

WMS  VELOX
No início do processo, WMS envia API de pedidos para VELOX com as informações de pedidos FullCase e Fracionados. Nesse caso, todos os pedidos do tipo FullCase, serão destinados ao sorter, sem a necessidade de serem desviados a área de conferência.
Os pedidos do tipo FullCase, são destinados ao sorter para que realize o desvio conforme a sua rota cadastrada.
Os pedidos do tipo Fracionados, serão destinados a área de conferência, após operador realizar a conferência, WMS enviará atualização desse pedido como conferido.
OBS: Para os pedidos do tipo fracionados, no código de barras da caixa, teremos a informação de “FR” antes do numeral da caixa, por exemplo “FR123456789012”
Referência:
https://apihml.alcis.com.br:4434/docs#tag/Pedidos/paths/~1api~1v1~1Pedidos/post
Exemplo Json FullCase:
Obs.: Campos mínimos que entendemos que sejam necessários.
{
"numeroPedido": "string",
"codBarrasEtiq": “78946985412",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "full",
"rota": "string",
"conferencia": "null"
}
Exemplo Json Fracionados:
Obs.: Campos mínimos que entendemos que sejam necessários.
{
"numeroPedido": "string",
"codBarrasEtiq": “FR123456789012",
"volume": "1",
"totalVolume": "3",
"codigoTransportadora": "string",
"dataDoPedidoPrevisto": "2019-08-24T14:15:22Z",
"tipoDePedido": "null",
"rota": "string",
"conferencia": "null"
}

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 7a7bbc02b31ad19c

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Integração de Remessa / Pedido  
**Score:** — (json-no-corpo) | **ID:** 2135d045613c3f5c

EMW/SAP  WCS
O EWM/SAP envia uma lista de remessas com informações detalhadas como número do pedido, SKU, quantidade, lote, prioridade, centro, cubagem por unidade (em metros cúbicos - m³), cubagem total da remessa e dados da etiqueta (romaneio e transportadora).
Os pedidos são apresentados automaticamente na tela do WCS para o operador dar início na separação.
OBS: ADICIONADO INFORMAÇÕES DE DIMENSÕES ALTURA LARGURA COMPRIMENTO
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
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
"itens_fracionados": [
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"ean": "7891000000028",
"qtd_solic": 7,
"cubagem": 0.00164,
                    "altura": 10,
                    "largura": 100,
                    "comprimento": 150
                },
{
"tarefa": "00013",
"tipo_dep": "Deposito 01",
"posicao": "A-01-08",
"sku": "1020",
"ean": "9961000000014",
"qtd_solic": 8,
"cubagem": 0.00164,
                    "altura": 400,
                    "largura": 300,
                    "comprimento": 500
},
],
"fullcase": [
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"dun": "49871236547800",
"qtd_solic": 3
},
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-02-02",
"sku": "5010",
"dun": "23871236546610",
"qtd_solic": 5
}
]
}
]
}

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta_REV......docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** a6937eb4b83e9136

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta_REV......docx`  
**Heading:** Integração de Remessa / Pedido  
**Score:** — (json-no-corpo) | **ID:** 9949238b1285591b

EMW/SAP  WCS
O EWM/SAP envia uma lista de remessas com informações detalhadas como número do pedido, SKU, quantidade, lote, prioridade, centro, cubagem por unidade (em metros cúbicos - m³), cubagem total da remessa e dados da etiqueta (romaneio e transportadora).
Os pedidos são apresentados automaticamente na tela do WCS para o operador dar início na separação.
Exemplo JSON:
{
"empresa": "INBETTA",
"centro": "SP01",
"lista_remessas": [
{
"num_pedido": "P45001",
"prioridade": "1",
"remesssa": "86089815",
"nf": "532293",
"cep": "930025-000",
"loja": "LJ1",
"ch_nf": "1",
"descricao_transportadora": "LARF SUL TRANSPORTES EIRELI",
"cod_transportadora": 1020,
"cliente": "LEROY MERLIM CIA BRA DE BRICOLAGEM SAO LEOPOLDO/RS - CRISTO REI",
"cod_cliente": "1",
"cidade": "DIADEMA",
"rota": "784",
"itens_fracionados": [
{
"endereco": "A-01-02",
"sku": "3040",
"ean": "7891000000028",
"qtd_solicitada": 7,
"cubagemUnitariaM3": 0.00164
},
{
"endereco": "A-01-08",
"sku": "1020",
"ean": "9961000000014",
"qtd_solicitada": 8,
"cubagemUnitariaM3": 0.00275
},
{
"endereco": "A-01-04",
"sku": "6060",
"ean": "7891000000028",
"qtd_solicitada": 10,
"cubagemUnitariaM3": 0.00138
}
],
"fullcase": [
{
"endereco": "A-01-02",
"sku": "3040",
"DUN": "49871236547800",
"qtd_solicitada": 3
},
{
"endereco": "A-02-02",
"sku": "5010",
"DUN": "23871236546610",
"qtd_solicitada": 5
}
]
}
]
}

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta_REV.1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 42ca1738ae2cf7ea

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta_REV.1.docx`  
**Heading:** Integração de Remessa / Pedido  
**Score:** — (json-no-corpo) | **ID:** 870216c4afe1c1e0

EMW/SAP  WCS
O EWM/SAP envia uma lista de remessas com informações detalhadas como número do pedido, SKU, quantidade, lote, prioridade, centro, cubagem por unidade (em metros cúbicos - m³), cubagem total da remessa e dados da etiqueta (romaneio e transportadora).
Os pedidos são apresentados automaticamente na tela do WCS para o operador dar início na separação.
Exemplo JSON:
{
"empresa": "INBETTA",
"centro": "SP01",
"lista_remessas": [
{
"num_pedido": "P45001",
"prioridade": "1",
"remessa": "86089815",
"nf": "532293",
"cep": "930025-000",
"loja": "LJ1",
"ch_nf": "1",
"descricao_transportadora": "LARF SUL TRANSPORTES EIRELI",
"cod_transportadora": 1020,
"cliente": "LEROY MERLIM CIA BRA DE BRICOLAGEM SAO LEOPOLDO/RS - CRISTO REI",
"cod_cliente": "1",
"cidade": "DIADEMA",
"rota": "784",
"itens_fracionados": [
{
"endereco": "A-01-02",
"sku": "3040",
"ean": "7891000000028",
"qtd_solicitada": 7,
"cubagemUnitariaM3": 0.00164
},
{
"endereco": "A-01-08",
"sku": "1020",
"ean": "9961000000014",
"qtd_solicitada": 8,
"cubagemUnitariaM3": 0.00275
},
{
"endereco": "A-01-04",
"sku": "6060",
"ean": "7891000000028",
"qtd_solicitada": 10,
"cubagemUnitariaM3": 0.00138
}
],
"fullcase": [
{
"endereco": "A-01-02",
"sku": "3040",
"DUN": "49871236547800",
"qtd_solicitada": 3
},
{
"endereco": "A-02-02",
"sku": "5010",
"DUN": "23871236546610",
"qtd_solicitada": 5
}
]
}
]
}

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta_REV.2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 1509fb8174d9dea3

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações de caixas (volumes), ou seja, esta aplicação executará as rotinas de linha de separação, conferência e sorter tendo como papel fundamental a interface entre os sistemas EWM/SAP do cliente e a automação chão-de-fábrica INVENT, denominada WCS VELOX.
A aplicação WCS da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações serão trocadas entre a aplicação estações de trabalho e o EWM/SAP do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta_REV.2.docx`  
**Heading:** Integração de Remessa / Pedido  
**Score:** — (json-no-corpo) | **ID:** 6cb3077bd7158c62

EMW/SAP  WCS
O EWM/SAP envia uma lista de remessas com informações detalhadas como número do pedido, SKU, quantidade, lote, prioridade, centro, cubagem por unidade (em metros cúbicos - m³), cubagem total da remessa e dados da etiqueta (romaneio e transportadora).
Os pedidos são apresentados automaticamente na tela do WCS para o operador dar início na separação.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
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
"itens_fracionados": [
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"ean": "7891000000028",
"qtd_solic": 7,
"cubagem": 0.00164
},
{
"tarefa": "00013",
"tipo_dep": "Deposito 01",
"posicao": "A-01-08",
"sku": "1020",
"ean": "9961000000014",
"qtd_solic": 8,
"cubagem": 0.00275
},
],
"fullcase": [
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-01-02",
"sku": "3040",
"dun": "49871236547800",
"qtd_solic": 3
},
{
"tarefa": "00012",
"tipo_dep": "Deposito 01",
"posicao": "A-02-02",
"sku": "5010",
"dun": "23871236546610",
"qtd_solic": 5
}
]
}
]
}

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Solicitação Conferência  
**Score:** — (semantico) | **ID:** b179209553545b59

WCS → WMS (GET)
Quando o volume chegar ao último posto e for direcionado para o ponto de decisão entre B2C, B2B; VAS / Hospital, o sistema WCS deve realizar uma consulta do volume para que o WMS determine se a caixa deve ser desviada para conferência (HOSPITAL) ou seguir direto para packing B2B ou desviar para B2C mono e multi (Put to Wall).
A consulta deverá ser realizada utilizando uma URL conforme o exemplo abaixo:
https://replyservername.com/api/checkShu?shuCode=SHU0000001
Observação: O sistema preenche automaticamente a URL com o número da etiqueta, como mostrado no exemplo destacado em amarelo, com base na caixa lida pelo scanner no último posto de coleta. Com essa informação, o WMS decide se a caixa seguirá diretamente para Expedição ou se deverá passar pelo processo de Conferência.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Reindução pós Conferência  
**Score:** — (semantico) | **ID:** 685c36ee60978e07

WCS → WMS (GET)
O operador ao receber o volume no setor de Hospital deverá realizar as tratativas necessárias no WMS e consultar no WCS se o volume pode ser reinduzido na automação.
Os reabastecimentos dos níveis precisam ser avaliados para reindução e assim que realizados os volumes devem ser direcionados para o order start. O operador deverá realizar a leitura de cada volume no order start individualmente para obter o retorno da consulta.
O WCS realizará a consulta de cada volume lido no WMS utilizando uma URL conforme o exemplo abaixo:
https://replyservername.com/api/putOnBelt?shuCode=SHU0000001
Observação: A parte da URL indicada será preenchida automaticamente com a etiqueta de cada volume lido no order start, conforme mostrado no exemplo destacado em amarelo.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** 4.1.	Separação  
**Score:** — (semantico) | **ID:** 645b74fbf6b483a1

Teremos somente 1 (um) O Order Start que estará localizado no térreo.
Essa estação de trabalho será equipada com os seguintes itens:
1 Desktop:
1 Impressora de Etiquetas:
O WMS deve realizar a integração com as informações do nível, posto e os dados da etiqueta da caixa plástica ou de papelão vazia que será utilizada para a separação dos pedidos. Com essas informações, o WCS (Invent) movimentará a caixa até o destino correto na esteira.
Ao chegar no destino (nível e posto) de separação, a caixa será desviada para a direita ou esquerda de forma alternada, evitando acúmulo de caixas em um único lado.
Não haverá uma regra pré-definida para o lado do desvio, o critério será baseado no acúmulo de caixas. Se um dos lados (por exemplo, direito) estiver cheio, as próximas caixas serão desviadas automaticamente para o lado esquerdo.
Cada caixa SHU deve ser considerada única enquanto estiver sendo utilizada física e sistemicamente (processo de separação), após a saída completa, finalizado o packing (física + sistemicamente) da SHU e enviando a integração de Confirmação finalização pedido, o código da caixa poderá ser reutilizado, ou seja, não poderá existir dois códigos iguais ao mesmo tempo no processo.
Em casos que possua mais de uma SHU no banco de dados do WCS, sempre será considerada a última integração recebida desta SHU.
A integração seguirá a divisão do mezanino, onde cada nível contará com dois postos de separação. Cada estação terá um código específico, conforme indicado abaixo seguindo a sequência da linha:
Códigos de Posto/Nível
O WCS deve receber a roteirização dos pedidos enviados pelo WMS, incluindo as coordenadas que definem a sequência que cada volume seguirá pela esteira.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** 4.1.6.		Reindução pós Conferência  
**Score:** — (semantico) | **ID:** 5f1d336bf80e3530

O operador após receber o volume no setor do “Hospital” deverá realizar as tratativas necessárias no WMS para realizar a consulta no WCS se o volume pode ser reinduzido na automação.
Os volumes que serão consultados se podem ou não serem induzidos novamente devem ser direcionados para o order start. O operador deverá realizar a leitura de volume a volume para obter o retorno.
O WCS realizará a consulta de cada volume lido no WMS utilizando uma URL conforme o exemplo abaixo:
https://replyservername.com/api/putOnBelt?shuCode=SHU0000001

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Solicitação de entrada Hospital  
**Score:** — (semantico) | **ID:** 2f61294ce8982296

WCS → WMS (POST)
Após a caixa passar pela última estação de picking mapeada, o WCS deve enviar uma chamada para o WMS onde receberá a orientação caixa deve ser direcionada ao packing B2B, Hospital ou B2C, sem a necessidade de termos a definição no último scanner da linha no último posto. Será enviado um body vazio para o retorno do WMS.
A consulta deverá ser realizada utilizando uma URL conforme o exemplo abaixo:
https://replyservername.com/api/checkShu?shuCode=SHU0000001
Observação: O sistema preenche automaticamente a URL com o número da etiqueta, como mostrado no exemplo destacado em amarelo, com base na caixa lida pelo scanner no último posto de coleta. Com essa informação, o WMS retorna se a está totalmente separada ou se deverá passar pelo Hospital.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** B2C Single e Multi Picking Put to Wall (PTW)  
**Score:** — (semantico) | **ID:** 4d31ebc565282fbe

As Ondas de Mono e Multi Picking serão separadas.
WMS envia as ordens de picking em ondas, agrupando os itens de acordo com o tipo de picking (Mono ou Multi).
Mono: São pedidos que possuem apenas 1 (um) SKU.
Multi: São pedidos que possuem vários SKUs.
O gerenciamento e controle das posições do PTW será de responsabilidade do WCS.
Será realizado a cubagem dos nichos por parte do WCS, sendo assim precisaremos das informações de altura, largura e comprimento de cada item para a execução desta funcionalidade. Caso um pedido exceda o espaço de um nicho, os itens sobressalentes do pedido serão alocados em um outro nicho, o mais próximo possível do nicho do mesmo pedido de acordo com a disponibilidade.
Picking Multi com a Capacidade do PTW
O picking multi exige que múltiplos itens de pedidos diferentes sejam coletados ao mesmo tempo. No entanto, o PTW (Put to Wall) tem uma capacidade limitada de processamento de itens, e é importante garantir que essa capacidade não seja excedida, o que poderia travar o sistema e afetar a eficiência.
Caixas indicadas pelo WMS como MULTI são direcionadas automaticamente para a estação de PTW.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 38676777f6c53de2

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos pallets, ou seja, esta aplicação executará as rotinas de armazenagem e expedição tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente, WCS Velox INVENT e automação do cliente.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Priorização de pedidos - Saída  
**Score:** — (semantico) | **ID:** 1c1a5264dcd2bd6c

Existem 2 regras de priorização de pedidos, sendo elas a Automática e Manual.
No WCS Velox irá conter a tela “Lista de Missões” onde será possível fazer a priorização de tarefas, expondo na coluna prioridade toda ordem gerenciada pelo WCS Velox de acordo com as priorizações automáticas e manuais, as priorizações manuais devem estar identificadas de outra cor para facilitar o entendimento do usuário.
Segue abaixo os métodos de priorização.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 1bc863e8be8fd22b

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos pallets, ou seja, esta aplicação executará as rotinas de armazenagem e expedição tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente, WCS Velox INVENT e automação do cliente.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Priorização de pedidos - Saída  
**Score:** — (semantico) | **ID:** fbc6f063b484f151

Existem 2 regras de priorização de pedidos, sendo elas a Automática e Manual.
No WCS Velox irá conter a tela “Lista de Missões” onde será possível fazer a priorização de tarefas, expondo na coluna prioridade toda ordem gerenciada pelo WCS Velox de acordo com as priorizações automáticas e manuais, as priorizações manuais devem estar identificadas de outra cor para facilitar o entendimento do usuário.
Segue abaixo os métodos de priorização.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** cb544ddb3828492b

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos pallets, ou seja, esta aplicação executará as rotinas de armazenagem e expedição tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente, WCS Velox INVENT e automação do cliente.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Priorização de pedidos - Saída  
**Score:** — (semantico) | **ID:** 191aff1addafd6db

Existem 2 regras de priorização de pedidos, sendo elas a Automática e Manual.
No WCS Velox irá conter a tela “Lista de Missões” onde será possível fazer a priorização de tarefas, expondo na coluna prioridade toda ordem gerenciada pelo WCS Velox de acordo com as priorizações automáticas e manuais, as priorizações manuais devem estar identificadas de outra cor para facilitar o entendimento do usuário.
Segue abaixo os métodos de priorização.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 4aeac206183d02f5

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos pallets, ou seja, esta aplicação executará as rotinas de armazenagem e expedição tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente, WCS Velox INVENT e automação do cliente.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Priorização de pedidos - Saída  
**Score:** — (semantico) | **ID:** d73daba856875dc2

Existem 2 regras de priorização de pedidos, sendo elas a Automática e Manual.
No WCS Velox irá conter a tela “Lista de Missões” onde será possível fazer a priorização de tarefas, expondo na coluna prioridade toda ordem gerenciada pelo WCS Velox de acordo com as priorizações automáticas e manuais, as priorizações manuais devem estar identificadas de outra cor para facilitar o entendimento do usuário.
Segue abaixo os métodos de priorização.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** 6aceeb02f974d797

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos pallets, ou seja, esta aplicação executará as rotinas de armazenagem e expedição tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente, WCS Velox INVENT e automação do cliente.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Priorização de pedidos - Saída  
**Score:** — (semantico) | **ID:** 2a49c352537edc84

Existem 2 regras de priorização de pedidos, sendo elas a Automática e Manual.
No WCS Velox irá conter a tela “Lista de Missões” onde será possível fazer a priorização de tarefas, expondo na coluna prioridade toda ordem gerenciada pelo WCS Velox de acordo com as priorizações automáticas e manuais, as priorizações manuais devem estar identificadas de outra cor para facilitar o entendimento do usuário.
Segue abaixo os métodos de priorização.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Processo de agrupamento  
**Score:** — (semantico) | **ID:** 7ce604ff1a3b57e6

O WMS será responsável pelo controle e realização da coleta dos itens que compõem um pallet. A coleta deve garantir que o pallet, disponível no "stage-in", seja compatível com a cubagem da caixa que será induzida no sorter com os itens agrupados.
O WCS deverá seguir os seguintes passos:
Leitura da etiqueta de lote (pallet): O WCS deve disponibilizar uma tela para realizar a leitura do código da etiqueta de lote (pallet), a partir do qual uma etiqueta será impressa. Esta etiqueta unificará todos os volumes pertencentes ao pallet antes da indução.
Desvio para a Rampa de Destino: A partir da etiqueta gerada, o WCS deve coordenar o desvio do volume agrupado para a sua rampa de destino.
Paletização e Alocação de Itens(PTL): O processo de paletização também deverá ser realizado utilizando a etiqueta dos volumes agrupados. No pallet, o WCS deve alocar os itens pertencentes à caixa, garantindo que a alocação a nível de item seja correta para a caixa do pallet, porém o processo de alocação será feito uma vez só para o volume agrupado.
