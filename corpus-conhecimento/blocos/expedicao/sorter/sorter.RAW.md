# sorter.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo minerador -->

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter é composto por 1 portal de leitura que fará o reconhecimento dos volumes e 6 saídas, sendo elas 5 saídas para transporte e 1 saída de rejeito.
Saídas:
O Sorter possuí 6 saídas, sendo elas 4 para transporte, uma rampa destinada para PIN e 1 para rejeito (Lado Esquerdo).
Saída PIN: Destinada para pedidos que precisam de aprovação ou documentos adicionais. Quando um pedido não for processado automaticamente devido a requisitos específicos (por exemplo, necessidade de aprovação manual ou documentação adicional), ele será direcionado para esta saída.
Cliente tem 4 transportadoras atualmente
O portal de leitura do sorter não possui balança e dimensionador, apenas leitor de código de barras.
O sistema WCS fará a validação do campo “autoBilling” da integração de pedido. Esse campo informará o WCS que o pedido é classificado como Faturamento Automático, e caso seja recebido como falso, segue reto no sorter os volumes desse pedido deverão ser destinados a uma saída especifica determinada pelo cliente e deve estar cadastrada no mapa do sorter no WCS.
Após todos os volumes do pedido, serem lidos no portal do sorter, WCS deverá enviar a integração de “Mensagem de Status” com a informação de “Container Completo” no campo “message” e a quantidade de volumes(caixas) total do pedido para que o ERP D365 F&O (GERENCIADOR DE ESTOQUES) realize o faturamento do pedido.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Tela para agrupamento de volumes para Expedição  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após o desvio do volume em sua respectiva saída do sorter, o operador deverá realizar a leitura da caixa via coletor do cliente. A partir dessa leitura, o sistema WCS executará uma avaliação automática do status de alocação do pedido associado àquele volume.
Regras de Alocação
Se o volume for o primeiro daquele pedido a ser alocado:
O WCS solicitará ao operador que informe a nomenclatura da posição onde o volume será armazenado.
A partir desse momento, todos os volumes subsequentes do mesmo pedido serão automaticamente direcionados para a mesma posição.
Essa posição passa a ser considerada como alocação padrão do pedido até sua finalização.
Se o volume pertencer a um pedido que já possui volumes alocados, o WCS informará diretamente a posição de destino previamente definida, sem necessidade de nova escolha.
Não haverá validação da alocação, ou seja, o sistema não verificará se a posição informada é válida ou compatível a responsabilidade é do cliente.
Finalização do Pedido
Quando o último volume do pedido for alocado na posição designada, o WCS irá informar automaticamente a finalização da alocação do pedido.
A partir dessa confirmação, a operação poderá seguir com as demais tratativas logísticas (expedição, agrupamento por rota, etc.).
Observação: Nesta etapa não teremos nenhuma troca de integrações.
O WCS deve disponibilizar uma tela para gerenciar as posições e seus respectivos volumes alocados.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I24.117] 2024 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas SAP (Cliente) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.117] 2024 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Consulta Volumes  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

SAP  WCS (GET)
Quando a operação SWIFT achar necessário o recebimento das informações do volumes que passaram no sorter, no sistema do SAP existirá uma funcionalidade que permite a busca dessas informações através de uma requisição GET realizada para o WCS que por sua vez retornará as informações dos volumes e seus respectivos diagnósticos.
A URL que será utilizada para este processo será passada pelo time responsável posteriormente.

---
**Origem:** [I24.117] 2024 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Retorno Volumes  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Com a consulta realizada pelo SAP, o WCS irá retornar todos os volumes que passaram pelo sorter e qual foram seus respectivos diagnósticos.
Segue exemplo do JSON:
{
"volumes": [
{
"dataLeitura": "10/02/2025",
"horaLeitura": "15:10:55",
"remessa": "15445448",
"rgVolume": "1021458748",
"codigoRetorno": "01",
"pesoLido": "500"
},
{
"dataLeitura": "10/02/2025",
"horaLeitura": "15:15:55",
"remessa": "15445448",
"rgVolume": "50304080",
"codigoRetorno": "02",
"pesoLido": "300"
}
]
}
Segue abaixo a tabela com as especificações dos campos:
Para cada diagnostico do volume será enviado um código no campo “codigoRetorno” que o SAP deve decifrar com a base abaixo:
01  Divergência de peso
02  Rampa cheia (recirculação)
03  Volume sem Integração
04  Sorter errado
05  Volume OK
Lembrando que volumes que não forem realizados a leitura , não iremos ter a informação de qual volume está passando, sendo assim não iremos enviar integração para o SAP.
A partir do momento que for feito o envio daquele respectivo volume e diagnostico, não iremos mais considerar aquele registro e em uma nova solicitação de consulta será enviado apenas os volumes que tiveram passagem após este envio.

---
**Origem:** [I24.117] 2024 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Rejeito Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Seguirão para rejeito, os volumes com etiqueta rasurada (ilegível pelo portal de leitura), volumes sem etiqueta, rota não mapeada, problemas com peso, volumes não integrados no sistema ou que atingiram o limite de recirculação.
Todos os volumes que não forem feito o check out de peso deverão ser direcionados ao rejeito, para que o operador verifique o motivo e induza novamente o volume na esteira, para que essas informações de peso sejam verificadas e coletadas. Esta regra será desconsiderada apenas se for acionado a regra de Contingência mencionada a seguir.

---
**Origem:** [I24.117] 2024 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Triagem de Volumes  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme mencionado no item Sorter, o volume pode ser induzido diversas vezes por diversos cenários atípicos da operação Swift.
Sendo assim, o WCS deve apresentar uma tela de Triagem da caixa que deve ser filtrada pelo RG da caixa e exibir ao usuário um diagnóstico daquele volume. Será mostrado quando foi integrado, RG do volume, quando foi passado pela balança, peso e quando foi efetuado o desvio. Os pontos de decisão precisam exibir data e hora da passagem.
Caso esse volume passe 3 vezes pelo sorter deve ser apresentado o registro dessa caixa 3 vezes e a data e hora de cada passagem nos pontos de decisão.

---
**Origem:** [I24.117] 2024 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Cancelamento de Volumes  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Sistema WCS deve disponibilizar uma tela com a funcionalidade de excluir volumes que estão sendo esperados nas saídas do sorter.
Esta função será necessária em casos de avarias com a caixa, problemas de leitura e divergências de peso onde este item será devolvido ao estoque e excluído dos registros do WCS.
Não teremos integrações com o SAP para esta ação dentro do sistema.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Contingência do Sorter (IA)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A operação de "Contingência Sorter" é um procedimento dentro do sistema WCS, projetado para lidar com cenários que não estão em condições ideais para serem processados pelo sistema de triagem automática (sorter). Caixas que tiverem com algum problema na triagem realizada pela IA, por exemplo de má qualidade dos códigos impressos pelo fornecedor, para não haver um impacto na operação o WCS estará preparado para tratar deste cenário através da contingência.
O processo de Contingencia consiste na etiquetagem do produto, concatenando os caracteres “IVT” com o DUN correto da caixa.
Quando este formato de etiqueta estiver vinculada a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Envio de informações  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WCS  WMS (DBLINK)
Os dados que devem ser enviados (INSERT) do WCS para o WMS são os dados nas tabelas abaixo onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tabela SORTER.GPT_RETORNO_STATUS_INDUZIDO
Nessa tabela o WCS deve retornar o valor do código da etiqueta do pallet “ID_PALLET” após a confirmação de consumo de pallet na tela do WCS, onde o retorno da segunda coluna sempre será S (Sim) ou seja será uma constante, sempre que o operador confirmar um consumo de pallet no Stage através da tela de consumo de pallet do WCS essa informação será inserida na tabela transacional SORTER.GPT_RETORNO_STATUS_INDUZIDO.
Tabela SORTER.GPT_RETORNO_MONTAGEM_PALETES
Nessa tabela o WCS irá retornar as informações dos volumes (caixas) dentro de um mesmo pallet, ou seja, sempre que um pallet for finalizado em um PTL o WCS irá disparas as informações acima, as informações serão inseridas por linha tendo informações repetidas em quase todas as colunas, salva somente a coluna de “CODBARRAETQ” que será a primary key (PK) dessa tabela, onde os valores dessa coluna não poderão se repetir.
Para os dados que devem ser imputados na coluna “CODBARRAETQ” a PK sempre haverá a letra “V” no início do código e o WCS deve devolver a informação exatamente como recebeu na integração (INSERT na tabela INTERMEDIARIA)
O WCS executará uma rotina que a cada fechamento de pallet essas informações serão enviadas automaticamente, e todas as informações de cada volume (CODBARRAETQ) de um mesmo pallet serão enviadas juntas com a flag da coluna “INDOPERACAO” sempre será I indicando um INSERT na tabela, o WCS não realizará atualizações ou exclusão de dados na tabela transacional e na flag da coluna “INDPROCESSADO” sempre será N indicando que todos os volumes do pallet foram enviados para tabela transacional.
Com a leitura do pallet na abertura do PTL o WCS irá receber a letra M no início do código, então na coluna “PALLET” o WCS irá salvar a informação de código do pallet sem a letra M no início do código para que no momento de retornar as informações para o WMS na coluna SEQPALETECAR REG.
NOTA: Todas as informações acima estão comtempladas na documentação enviada pelo time Concinco (PC-Estruturas de Tabelas Transacionais de Retorno _ INVENT → C5-250724-183941).

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Dashboard  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Sugestão de dashboard para visualização da operação e acompanhamento das saídas do sorter, onde ele deve mostrar os valores esperados em cada saída e quantidade tratada.
Obs.: A imagem abaixo é de exemplo, as informações mostradas serão discutidas no decorrer do projeto com as informações pertinentes para a operação.

---
**Origem:** [I23.3503] 2025 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV ..docx`  
**Heading:** Processo de Operação do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter foi projetado para processar até 5.000 volumes por hora, com base na eficiência da indução, a Invent ficará responsável em apresentar qual a melhor prática a ser aplicado para alcançar o fluxo de 5 mil caixas hora. Ele conta com um portal de leitura com 3 faces de leitura (laterais e topo), garantindo que as etiquetas posicionadas nas laterais e topo das caixas sejam lidas corretamente. Essas faces de leitura permitem ao WCS realizar o checkout dos volumes induzidos.
O sistema do Sorter é composto por 12 rampas
11 rampas destinadas ao transporte dos volumes.
1 rampa exclusiva para rejeito.
O processo no Sorter inicia quando o volume passa pelo portal de leitura. A câmera captura a etiqueta do volume fornecida e impressa pelo cliente, que é então enviada ao Controlador Lógico Programável (PLC). O PLC encaminha as informações ao WCS, que realiza a verificação dos dados do pedido associado à etiqueta do cliente. Com base nessa verificação, o WCS envia a instrução ao PLC, indicando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme o mapa de sorter ativo, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos devem ter uma etiqueta, que inclui um código de barras ou QR code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão automaticamente direcionados para o rejeito ou reprocessamento, conforme as regras de operação definidas.

---
**Origem:** [I23.3503] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Heading:** Processo de Operação do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter foi projetado para processar até 5.000 volumes por hora, com base na eficiência da indução, a Invent ficará responsável em apresentar qual a melhor prática a ser aplicado para alcançar o fluxo de 5 mil caixas hora. Ele conta com um portal de leitura com 3 faces de leitura (laterais e topo), garantindo que as etiquetas posicionadas nas laterais e topo das caixas sejam lidas corretamente. Essas faces de leitura permitem ao WCS realizar o checkout dos volumes induzidos.
O sistema do Sorter é composto por 12 rampas
11 rampas destinadas ao transporte dos volumes.
1 rampa exclusiva para rejeito.
O processo no Sorter inicia quando o volume passa pelo portal de leitura. A câmera captura a etiqueta do volume fornecida e impressa pelo cliente, que é então enviada ao Controlador Lógico Programável (PLC). O PLC encaminha as informações ao WCS, que realiza a verificação dos dados do pedido associado à etiqueta do cliente. Com base nessa verificação, o WCS envia a instrução ao PLC, indicando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme o mapa de sorter ativo, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos devem ter uma etiqueta, que inclui um código de barras ou QR code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão automaticamente direcionados para o rejeito ou reprocessamento, conforme as regras de operação definidas.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
Ao longo de toda a extensão do sorter, haverá 5 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 6 rampas.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume, a rampa de saída correspondente baseado na transportadora e rota.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.
Fica sob responsabilidade do contratado disponibilizar uma TV em cada rampa para exibição do dashboard operacional da rampa, ou para que seja feito o processo de paletização

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Se a Transportadora NÃO realiza Paletização  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Quando configurado como “Não”, o sistema deve:
Processar o volume no sorter.
Desviar para a rampa correta conforme Mapa de Sorter.
Registrar o desvio.
atualiza o status do volume e atualiza o dashboard da rampa.
Encerrar o fluxo do volume.
Permitir que a transportadora retire os volumes diretamente das rampas.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Aloca Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de paletização. Esse processo tem como objetivo agrupar os volumes conforme rota e transportadora, garantindo organização e rastreabilidade para expedição.
A paletização é realizada com o auxílio de um coletor Android ou através da TV da rampa, que se comunica diretamente com o WCS.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Zaffari) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Ocorrências  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em caso de avaria, extravio e necessidade de cancelamento, para que o Sorter pare de aguardá-lo e para que o WMS realize a tratativa necessária, o processo de abertura e tratamento de ocorrências será realizado conforme o fluxo descrito abaixo.
Para iniciar o processo, o operador deve acessar a tela de "Volumes" no sistema WCS. A partir daí, o operador deve filtrar por um dos códigos do produto ou descrição e selecionar um dos volumes na lista que estiver com o status diferente de finalizado. Ao clicar em abrir ocorrência, o WCS exibirá um pop-up solicitando que o operador informe o motivo da ocorrência.
Caso haja mais de um volume a ser tratado, o operador pode realizar esse processo para todos os volumes necessários. Após a abertura da ocorrência, os volumes que precisam ser tratados devem ser acessados na tela de Ocorrências, onde o WCS exibirá uma lista de todos os volumes com ocorrência aberta, ordenada por Destino (LOJA).
O operador pode selecionar um ou mais volumes para aprovar ou não a ocorrência. Caso ele selecione Cancelar, o WCS desconsiderará essas ocorrências selecionadas e finalizará o registro delas internamente. Se o operador selecionar Aprovar, ele deverá filtrar e selecionar apenas volumes do mesmo destino por vez. Após selecionar todos os volumes que deseja aprovar a ocorrência (cancelamento), o WCS solicitará a leitura de uma master.
Após a leitura da master e confirmação o WCS irá disparar a integração dos volumes agrupados pela master lida para o WMS, sinalizando o cancelamento dos volumes e permitindo o prosseguimento do processo com a devida tratativa. O WCS deve permitir que o operador utilize uma master que já foi utilizada no processo de Ocorrências e o WMS deve aceitar a mesma master mais de uma vez.
Esse processo garante a precisão na identificação e controle dos volumes que necessitam de cancelamento, permitindo que o WMS tome as ações necessárias, como o tratamento do volume ou ajuste nas movimentações logísticas.
4.1.2. Especificação de Volumes Induzidos no Sorter
Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:
4.1.4. Contingência do Sorter (IA)
A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá disponibilizar a tela para caso se faça necessária.

---
**Origem:** [I25.3515] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA.docx`  
**Heading:** Área de Stage para indução no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A área de Stage é dividida em posições físicas (endereços) para garantir a rastreabilidade e o controle da localização do pallet, seja um pallet fechado induzido no sorter ou caixas Full Case coletadas no fracionado, o operador deve depositar os volumes na área de Stage. O WCS exige que o operador leia ou insira o endereço da posição no coletor para garantir a correta localização do volume. O sistema exibirá uma mensagem informando: 'Direcionar volumes para a área de Stage, próxima à indução, se o pallet estiver disponível.
Caixas Full Case: As caixas Full Case estarão devidamente etiquetadas, facilitando a rastreabilidade e controle durante a indução.
Pallets Sorter:  O WCS gerencia o método de separação, que é ativado quando a quantidade total solicitada de um mesmo produto, em uma única onda de separação, atingir ou superar o volume equivalente a um pallet fechado
Definição da Área de Stage: A área de Stage será definida pelo cliente, de acordo com suas necessidades operacionais.
O WCS registra o endereçamento sistêmico da tarefa no stage, garantindo rastreabilidade dos volumes por posição. Entretanto, não controla automaticamente a ocupação ou quantidade de pallets disponíveis no stage, sendo este gerenciamento realizado operacionalmente pelos operadores.
Área de Stage cheia: Quando a área do Stage estiver cheia será necessária uma tratativa operacional onde o operador deve confirmar a alocação do pallet no Stage e segregar o mesmo próximo ao stage informado.
Controle de Ocupação do Stage: O WCS realiza apenas o registro sistêmico do endereço informado no coletor para rastreabilidade, não havendo controle automático de ocupação ou capacidade da área de stage. O gerenciamento da ocupação física do stage continuará sendo tratado operacionalmente pelos operadores.

---
**Origem:** [I25.3515] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter terá capacidade de produzir 6.000 volumes/hora com indução de 3.000 caixas de cada lado.
O Sorter será composto por 2 (duas) rampas de indução e 1 (um) portal de leitura com 3 (três) faces (lados) de leitura, uma superior (topo) e duas laterais. Essas três faces garantem a leitura completa dos volumes, permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case. Durante esse processo, o sistema compara automaticamente o DUN ou EAN lido na caixa com o código da etiqueta do pedido, validando se o volume realmente corresponde ao produto solicitado no pedido.
Em toda a extensão do sorter, haverá 20 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 21 rampas ao todo.
As 20 rampas de saída estarão organizadas da seguinte forma:
17 rampas com 8 posições PTL (Put-To-Light).
2 rampas com 10 posições PTL (Put-To-Light).
1 rampa com 12 posições PTL (Put-To-Light).
Ao todo, o sistema contará com 168 posições PTL distribuídas entre as rampas em toda extensão do sorter. Cada posição será equipada com um display eletrônico de três dígitos com LED, permitindo a identificação visual e precisa do ponto de alocação do volume.
Além disso, uma única rampa poderá atender de 2 a 3 rotas diferentes, conforme a roteirização da carga. Isso será visualmente identificado no display da posição PTL, pois cada rota poderá ocupar dois ou três posições pallets (PTL´s) distintas, possibilitando a separação e organização de pedidos por rota diretamente na saída.
Cada rampa de saída do sorter será equipada com um leitor de código de barras e um conversor, totalizando 21 leitores de código de barras e 21 conversores, correspondentes às 21 rampas existentes (20 de saída e 1 de rejeito). Esses dispositivos são responsáveis por fazer a comunicação e capturar as informações de leitura ao sistema WCS.
O processo do sorter consiste na leitura da caixa no portal de leitura, que envia a etiqueta lida ao Controlador Lógico (CLP). O CLP encaminha essa informação ao WCS, que consulta sua base de dados para verificar os dados do pedido associado àquela etiqueta. Após essa verificação, o WCS envia ao CLP a instrução de desvio, informando em qual rampa a caixa deve ser desviada.
O sorter realizará o desvio dos volumes com base no mapa de rotas cadastrado e ativo no sistema WCS. Esse mapa deve ser configurado previamente no WCS, definindo para cada tipo de volume ou pedido a rampa de saída correspondente.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido pelo sistema WCS ou estar devidamente etiquetados. Volumes que estiverem sem identificação ou etiquetas inválidas serão direcionados para rejeito ou reprocessamento, conforme as regras definidas pela operação.
Para as Ordens de Separação (OS) do tipo 22 (flowrack), o processo segue uma lógica diferente. Essas caixas são induzidas normalmente no sorter, porém não são alocadas em posições PTL. Nesses casos, o sistema WCS realiza apenas o desvio para a saída correta, sem acendimento de posições ou validação adicional. A tratativa dos volumes após o desvio na saída correta é de responsabilidade do cliente, conforme os procedimentos definidos em sua operação.

---
**Origem:** [I25.3515] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A rampa de rejeito presente no final do Sorter irá receber os volumes que se classificam em 6 situações sendo as seguintes situações:
Sem leitura (NoRead) – Ocorre quando a câmera do portal de leitura não consegui fazer a leitura do código QR code presente na caixa ou não há etiqueta presente na caixa, com isso o CLP envia a informação de sem leitura para o Velox e ele direciona o volume para o rejeito, assim o volume será tratado por um operador e após a correção ou adição da etiqueta que deve conter as informações da rota o volume deve ser induzido novamente no Sorter antes do portal de leitura.
Sem rota – Ocorre quando a câmera consegue efetuar a leitura do código QR code e o CLP envia a informação recebida da câmera ao Velox, ele por sua vez procura o código em sua base de destino e não encontra, assim direcionando o volume para que o operador cadastre a rota no Velox e vincule a mesma no mapa do Sorter e o volume deve ser induzido novamente no Sorter antes do portal de leitura.
Sem mapa – Ocorre quando a câmera consegue efetuar a leitura do código QR code e o CLP envia a informação recebida da câmera ao Velox, ele por sua vez procura o código em sua base de destino e encontra a rota, porém, não há rampa vinculada no mapa do Sorter para esse destino, o operador deve fazer o vínculo da rota a rampa no mapa do sorter e o volume deve ser induzido novamente no Sorter antes do portal de leitura.
MultiRead – Ocorre quando mais de um código QR code está visível para câmera no momento da leitura, assim ela informa ao CLP que existe mais de um código lido e o CLP envia a mensagem de MultiRead para o Velox. Ao volume chegar no rejeito o operador deve retirar um dos códigos e inserir novamente o volume antes do portal de leitura.
Rampa cheia – Ocorre quando todo processo de leitura no portal e validações do Velox estão corretos, porém, quando o volume chega ao desviador da sua rampa de destino a mesma está cheia de caixas acionando o sensor de acúmulo, assim o volume é enviado para o rejeito, esse caso também é informado pelo sinaleiro.
Cancelamento – Ocorre quando uma ordem de serviço é cancelada pelo WMS.
Volumes que já possuírem etiqueta, mas forem direcionados ao rejeito por inconsistência de leitura, rota ou mapeamento, devem ser tratados como exceções operacionais. A nova etiqueta substitui a anterior para garantir que o sistema considere apenas a rota mais recente.
Impressora no Rejeito: Será instalada uma impressora na área de rejeito. O operador deverá bipar a caixa e, caso necessário, imprimir uma nova etiqueta atualizada, que indica a rampa correta para alocação da caixa. Essa nova etiqueta prevalece sobre qualquer etiqueta anterior, evitando redirecionamentos incorretos.
Alteração do Status para "Na Rampa": Quando uma caixa que está no rejeito for identificada e lida corretamente, o status da caixa será alterado para "na rampa", e o operador será informado sobre a rampa para onde a caixa deve ser direcionada.
Responsabilidade do Operador: A ideia é evitar que o operador da conferência ir até o rejeitoo frequentemente. O operador no rejeito terá a tarefa de bipar e gerar a etiqueta para direcionar a caixa à rampa correta. A alocação da caixa será feita conforme a rampa designada, permitindo ao operador alocar as cargas de forma mais eficiente.

---
**Origem:** [I25.3515] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA.docx`  
**Heading:** Sinaleiro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Piscante: Indica que o botão de emergência foi acionado
em algum ponto ao longo da automação, nesse caso
todos os sinaleiros da automação irão piscar, até que
o botão acionado seja revertido.
AMARELO
Piscante: Indica que a rampa já está cheia e não pode
receber mais caixas. Neste caso, o sinaleiro irá piscar
até que a situação seja resolvida pelo operador.
VERDE
Aceso: Indica que a rampa está aberta e
pronta para receber os volumes.
VERDE, AMARELO E VERMELHO
Piscante: Sem comunicação com o sistema Velox.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I25.3515] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA.docx`  
**Heading:** Cancelamento de volumes (avarias)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Sistema WCS deve disponibilizar uma tela com a funcionalidade de excluir volumes que estão sendo esperados pelo sorter. Nesta tela só deve apresentar os volumes que ainda não foram alocados no pallet (realizado a leitura no scanner das saídas do sorter)
Esta função será necessária em casos de avarias com a caixa ou problemas de leitura, onde este item será devolvido ao estoque e excluído dos registros do WCS.
Para o cancelamento ser efetuado deverá ser informado o “Status” (motivo pré-definido dentro do WCS) e um usuário com as permissões necessárias para esta funcionalidade. O operador deve informar o status da avaria para que a integração seja enviada. As opções disponíveis para seleção serão: Consumo, Qualidade e Descarte.
Com o cancelamento concluído o sistema WCS deve enviar a integração mencionada no item Cancelamento de volumes para o WMS.
Especificação de volumes induzidos no sorter (IA)
Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:
Conforme a imagem acima, o código deve estar integrado no sistema Velox.
Processo de IA no Sorter para Volumes Induzidos
O sistema WCS utiliza recursos avançados de Inteligência Artificial (IA) para garantir a correta identificação, validação e direcionamento dos volumes no sorter. Este processo é fundamental para que a automação funcione com precisão e eficiência, minimizando erros e otimizando o fluxo operacional.
Integração dos Volumes no Sistema WCS
Antes da indução no sorter, todos os volumes (caixas) devem estar completamente registrados e integrados no sistema WCS. Essa integração contempla o cadastro detalhado de cada volume, incluindo informações essenciais, como:
Códigos de barras vinculados ao volume;
Dados de destino;
Informações sobre a etiqueta impressa;
Eventuais múltiplos códigos de barras por volume.
Leitura e Validação no Portal do Sorter
Durante a passagem no sorter, o portal de leitura captura os códigos de barras das caixas. Para volumes que possuam múltiplos códigos de barras, o sistema é capaz de identificar e relacionar todos eles ao mesmo volume registrado no WCS.
A IA realiza uma comparação entre os dados lidos e as informações previamente integradas para validar:
Se o volume está correto;
Se a etiqueta corresponde ao conteúdo e ao destino;
Se existem inconsistências ou divergências nos códigos.
Direcionamento e Desvio Automático
Com base na validação realizada pela IA, o sistema WCS determina o destino correto do volume. A automação do sorter, então, recebe essa informação para realizar o desvio físico do volume para a posição adequada, garantindo a continuidade do fluxo.
Tratamento de Exceções
Se a IA identificar algum problema, como:
Códigos não reconhecidos;
Etiquetas incorretas;
Volumes duplicados;
O sistema pode executar as seguintes ações:
Acionar alertas para intervenção manual;
Bloquear o volume para evitar erros na distribuição;
Registrar a ocorrência para análise futura.
Benefícios do Processo de IA no Sorter
Garantia de alta acuracidade na separação e direcionamento dos volumes;
Redução de erros operacionais causados por leituras incorretas ou etiquetas duplicadas;
Otimização do fluxo de materiais, com menor necessidade de retrabalho;
Maior rastreabilidade e controle em tempo real dos volumes.
Contingência do Sorter (IA)
A operação de Contingência Sorter é um procedimento previsto no sistema WCS, destinado a tratar volumes que apresentem problemas na triagem automática realizada pela IA, como por exemplo, códigos de barras de má qualidade impressos pelo fornecedor.
A impressão dessas etiquetas de contingência (formato IVT+DUN) será responsabilidade da Invent.
A equipe operacional será treinada para identificar e aplicar essas etiquetas em volumes com falha de leitura repetida. Essas etiquetas devem ser fixadas de forma visível e seguir o padrão fornecido pela Invent para garantir que a IA do sorter reconheça corretamente o volume.
Para evitar impacto na operação, o WCS está preparado para esse cenário por meio do processo de contingência, que consiste na impressão de uma etiqueta especial para o produto, conforme descrito abaixo:
A etiqueta de contingência concatena os caracteres “IVT” com o DUN correto da caixa.
Exemplo do formato correto da etiqueta de contingência:
IVT + [DUN da caixa]
Quando o sorter identifica uma etiqueta neste formato vinculada à caixa, ele ignora os demais códigos presentes e realiza a triagem considerando apenas o DUN após os caracteres “IVT”.
A impressão dessas etiquetas de contingência é de responsabilidade da Invent.

---
**Origem:** [I25.3515] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA.docx`  
**Heading:** Indução no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A indução ocorre nas rampas esquerda e direita, com capacidade para 6.000 volumes/hora.
O portal de leitura três faces (superior e laterais) realiza a captura do EAN ou DUN-14.
O WCS valida os dados e aciona o CLP (PLC), conforme o mapa do sorter ativo.
Contingência com IA e Etiquetas IVT+DUN:
Volumes com falha recorrente de leitura recebem etiqueta IVT+DUN impressa pelo operador na área de rejeito, garantindo correta identificação.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Onda  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WMS → WCS
O WMS/Reply enviara as informações de cada volume que já foi faturado, autorizando o desvio do volume no sorter.
Sugestão JSON:
{
"onda": 1,
"volumes": [
{
"etiqueta": "123456789",
"rota": "XYZ"
},
{
"etiqueta": "987654321",
"rota": "ABC"
}
]
}
rota: número da rampa de saída no sorter.
Volumes não integrados: Caso o volume não esteja integrado, o WCS direcionará o volume para recirculação.
Essa recirculação ocorrerá até atingir a quantidade máxima de voltas parametrizada previamente. Ultrapassado esse limite, o volume será enviado para o rejeito.
O WMS deve enviar somente os volumes que já foram faturados

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Status possíveis para cada informação no WCS  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Missões (Remessa):
Volumes:
Volumes para coleta:
Volumes para sorter:
Objetivo da atualização desse status é a identificação da situação do volume e consequentemente remessa, onde ao visualizar o status em qualquer uma desses funcionalidade existirá a informação assertiva da situação geral do volume.
NOTA: Podem ocorrer atualizações de remessa feitas pelo SAP ao WCS, onde enquanto o status da remessa (Missão) for DISPONIVEL todos os dados editáveis podem ser atualizados, após o início da onda (status EM ANDAMENTO), somente os dados de transportadora, placa e tipo de veículo serão atualizados, todas as demais informações serão ignoradas pelo WCS e em caso de tentativa de atualização de informações para uma remessa encerrada o WCS retornará o Bad Request ao SAP.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Docas Auxiliares  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS permite a configuração complementar de docas secundárias de apoio operacional, com o objetivo de proporcionar flexibilidade e balanceamento de fluxo.
A inclusão de novas docas no transporte é restrita a funcionalidade manutenção de transporte.
As docas secundárias são utilizadas pelo WCS no balanceamento de desvio do sorter, conforme descrito na seção de sorter [Balanceamento].

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter será responsável por realizar o direcionamento automático dos volumes ao longo do fluxo, conforme as definições operacionais e regras de destino configuradas no WCS.
Durante a execução da onda, o WCS deverá enviar ao sorter as informações necessárias para identificação e desvio dos volumes, garantindo que cada item siga para o destino correto dentro do processo.
A identificação dos volumes no sorter será realizada por meio da leitura dos códigos presentes na caixa [Etiquetas]. A partir dessa leitura, o WCS será responsável por interpretar as informações recebidas e determinar o destino do volume, com base nos dados recebidos na criação da remessa [Remessa].
O funcionamento do sorter deverá considerar as validações de leitura, regras de destino e tratativas de exceção, de forma a assegurar a continuidade da operação e a correta segregação dos volumes.
Regras Operacionais do Sorter
O sorter deverá executar os desvios conforme os dados recebidos do WCS e de acordo com o cadastro de destinos configurado para a operação.
Sempre que um volume for identificado corretamente, o sistema deverá comandar seu direcionamento para a saída correspondente.
Caso ocorra alguma inconsistência durante a leitura, ausência de cadastro, falha de comunicação ou impossibilidade de definição do destino, o volume deverá ser encaminhado para o fluxo de rejeito para a rampa de rejeitos tratáveis ou não tratáveis.
Estrutura de retorno de Separação com etiqueta Rastreável
Velox  SAP TPSDLS (Ext: ZSDDAREM)
Tratativas de Exceção
Os cenários de exceção do sorter deverão ser tratados pelo WCS de acordo com o tipo de falha identificado no processo.
Entre os principais cenários de exceção, podem ser considerados:
falha de leitura do volume;
ausência de destino configurado;
divergência de cadastro;
indisponibilidade de rota;
parada do equipamento;
Erro ou falha do desvio pelo Sorter;
envio para rejeito.
As ações de reprocesso, rejeito ou intervenção operacional deverão seguir as regras definidas para cada cenário. [Rejeito]
Integração com o WCS
O WCS será responsável por centralizar as regras de decisão do sorter, enviando os comandos de direcionamento conforme os dados da operação e recebendo os retornos necessários para controle e rastreabilidade do processo.
O sorter opera de forma integrada ao WCS, garantindo visibilidade do status dos volumes, dos desvios realizados e das ocorrências de erro ao longo da execução.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Balanceamento de Desvio no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O balanceamento de desvio é a lógica que o WCS utiliza para decidir para qual rampa um volume deve ser direcionado quando existem múltiplas opções válidas de destino. O objetivo é distribuir os volumes de forma equilibrada, evitando que uma rampa ou transportadora fique sobrecarregada enquanto outras ficam ociosas.
Essa lógica opera em dois níveis distintos e complementares:
Balanceamento entre transportadoras (nível macro): Quando o mesmo SKU com shelf life é elegível para mais de uma transportadora, o WCS distribui os volumes entre todas as transportadoras aptas, priorizando sempre a mais ociosa.
Balanceamento entre rampas de uma mesma transportadora (nível micro): Quando uma transportadora possui mais de uma rampa vinculada, o WCS distribui os SKU entre as rampas daquela transportadora.
Os dois níveis atuam em sequência: primeiro o WCS decide qual transportadora receberá o volume, depois decide qual rampa daquela transportadora será utilizada.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Balanceamento entre Transportadoras (Nível Macro)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Quando um volume passa pelo portal de leitura do sorter, o WCS identifica o SKU e o shelf life do produto. Com essas informações, o WCS busca todas as transportadoras (docas) que estão elegíveis para receber aquele volume, ou seja, todas as transportadoras cujos transportes na onda possuem aquele SKU com aquele shelf life em suas remessas.
O WCS aplica um balanceamento 1 para 1 entre as transportadoras elegíveis, direcionando cada volume para a transportadora que estiver mais ociosa naquele momento.
Fluxo de decisão:
O volume é lido no portal do sorter. O WCS identifica SKU e shelf life.
O WCS consulta todas as transportadoras elegíveis para aquele SKU + shelf life na onda em processamento.
Entre as transportadoras elegíveis, o WCS identifica qual está mais ociosa, ou seja, qual recebeu menos volumes até o momento em relação à sua demanda total.
O volume é direcionado para essa transportadora.
O próximo volume dele SKU + shelf life passará pelo mesmo processo, e como a transportadora anterior acabou de receber um volume, agora outra pode estar mais ociosa, garantindo a alternância.
Exemplo prático:
Situação: SKU 719287 (Bacon Inteiro Sadia) com shelf life compatível aparece nos pedidos de 3 transportadoras:
O próximo volume do SKU 719287 será direcionado para a Transportadora C (mais ociosa). O volume seguinte será reavaliado com os novos números, e assim por diante.
Objetivo
O objetivo desse balanceamento é evitar que uma única transportadora concentre todos os volumes de um SKU popular enquanto outras ficam paradas esperando. Ao distribuir de forma equilibrada, o WCS garante que:
Todas as transportadoras progridam simultaneamente no carregamento.
Nenhuma doca fique sobrecarregada com filas de volumes enquanto outras estão vazias.
O tempo total de expedição de todas as transportadoras seja reduzido, pois o carregamento ocorre em paralelo.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Rejeitos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Durante o processo de sorter, nem todos os volumes conseguem ser direcionados para uma rampa de destino. Existem diversas situações operacionais, sistêmicas ou físicas que impedem o desvio correto de um volume. Para esses casos, o sorter possui rampas de rejeito dedicadas, parametrizadas por meio da tela de configuração, que recebem todos os volumes que não podem seguir o fluxo normal.
O rejeito não é um erro que encerra o ciclo do volume. É uma etapa de tratamento: o volume é separado do fluxo principal, analisado por um operador na estação de rejeito do WCS, e pode ser reprocessado (reimprimir etiqueta, reinduzir na esteira) ou definitivamente descartado do processo daquela onda.
O WCS é responsável por decidir quando um volume deve ser rejeitado, por comandar o desvio para a rampa de rejeito e por disponibilizar as ferramentas para que a operação trate esses volumes.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Relatórios  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS deve disponibilizar relatórios que dê visibilidade completa. Esses relatórios têm como objetivo fornecer visibilidade operacional e permitir o acompanhamento de desempenho, produtividade e exceções do processo, conforme relatórios abaixo:
Relatório de transportes finalizados
Para esse relatório será exibido apenas os transportes finalizados ou cancelados
Análise Caixas SORTER
Esse relatório irá informar por hora/dia/mês as informações pertinentes ao SORTER. Para os seguimentos abaixo deve ser informado a quantidade geral, e por portal
Para os seguimentos abaixo deve ser informado a quantidade geral, e por portal
Informar um agrupador no formato hora/dia/mês e quando selecionado uma das opções o relatório deverá informar o campo primário conforme. Em horas deverá mostrar os dados de ocorrência hora a hora de acordo com a seleção. Em dias deverá mostrar a informação dia a dia de acordo com a seleção
Etiquetas
Relatório com o modelo das etiquetas lidas no SORTER, será informado qual modelo foi usado para identificar o item.
Produtividade por Rampa
Informação de desvio das rampas do SORTER. O relatório deverá aparecer por filtro de Hora/dia/Mês e conforme selecionado irá mostrar a informação das rampas
Relatório de Ondas
Para campos teremos:
Relatório de Abastecimento
MONITOR BK25
Esse monitor irá exibir as informações dos paletes com status “Pendente BK25”
Quando o palete é confirmado a entrada no BK25 no berço de entrada o item vai para o final da fila com o status de “Em processamento”, em caso de cancelamento ou finalização do item deverá sair da lista
Deverá atualizar de tempos em tempos, através de um parâmetro de tempo e mostrar apenas de 8 em 8 paletes.
Esse monitor deverá vir em um formato maior do que os relatório devido ao seu uso, iremos colocar um monitor em uma área próximo ao BK25 das câmaras.
Relatório de separação
Relatório de separação será contabilizado as informações da separação na posição e colaborador que efetuou os processos.
Para o relatório de separação vamos informar os seguintes campos:
Relatório de Rejeito

---
**Origem:** [I23.3502] 2026 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 - Final.docx`  
**Heading:** PTM (Put to Monitor)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

De acordo com o mapa de sorter ativo, o WCS realiza automaticamente a abertura das posições de PTM.
Após o desvio dos volumes nas rampas, o operador posicionado na ponta da rampa realiza a leitura do código de barras da caixa com o scanner. O WCS verifica em sua base qual cliente está vinculado ao volume e exibe no PDV a posição do pallet correspondente, destacando a área com a cor padrão daquela posição. Marcações no chão com as mesmas cores serão disponibilizadas pelo cliente para facilitar a identificação pelo time operacional.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
Ao longo de toda a extensão do sorter, haverá 5 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 6 rampas.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume, a rampa de saída correspondente baseado na transportadora e rota.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.
Fica sob responsabilidade do contratado disponibilizar uma TV em cada rampa para exibição do dashboard operacional da rampa, ou para que seja feito o processo de paletização

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Se a Transportadora NÃO realiza Paletização  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Quando configurado como “Não”, o sistema deve:
Processar o volume no sorter.
Desviar para a rampa correta conforme Mapa de Sorter.
Registrar o desvio.
atualiza o status do volume e atualiza o dashboard da rampa.
Encerrar o fluxo do volume.
Permitir que a transportadora retire os volumes diretamente das rampas.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Aloca Pallet  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após o desvio dos volumes para suas respectivas rampas no Sorter, inicia-se o processo de paletização. Esse processo tem como objetivo agrupar os volumes conforme rota e transportadora, garantindo organização e rastreabilidade para expedição.
A paletização é realizada com o auxílio de um coletor Android ou através da TV da rampa, que se comunica diretamente com o WCS.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Especificaciones  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para el correcto funcionamiento de la automatización, se necesita una aplicación que se encargue de gestionar la información de los equipos clasificados en la operación, es decir, esta aplicación ejecutará las rutinas del sorter, teniendo como función fundamental la interfaz entre los sistemas WMS con WCS Invent.
La aplicación WCS de Invent necesita una base de datos exclusiva para el correcto almacenamiento y gestión de la información, que será facilitada por el cliente (instalación de la base de datos PostgreSQL).
La información se intercambiará entre la aplicación y las estaciones de trabajo a través de una interfaz web, por lo que es necesario utilizar un navegador web estándar en cada estación de trabajo (Google Chrome).

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Incidencias  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

En caso de daño, pérdida y necesidad de cancelación, para que el sorter deje de esperarle y el WMS realice el tratamiento necesario, el proceso de apertura y manejo de los incidentes se llevará a cabo según el flujo descrito a continuación.
Para iniciar el proceso, el operador debe acceder a la pantalla de "Volúmenes" en el sistema WCS. A partir de ahí, el operador debe filtrar por uno de los códigos de producto o descripción y seleccionar uno de los paquetes de la lista que tenga un estado distinto a terminado. Cuando hagas clic en abrir caso, WCS mostrará una ventana emergente pidiendo al operador que proporcione el motivo del caso.
Si hay más de un volumen a tratar, el operador puede realizar este proceso para todos los volúmenes necesarios. Una vez abierto el caso, los volúmenes que deben gestionarse deben accederse desde la pantalla de Casos, donde WCS mostrará una lista de todos los volúmenes con un caso abierto, ordenados por Destino (STORE).
El operador puede seleccionar uno o más volúmenes para aprobar o rechazar la ocurrencia. Si seleccionan Cancelar, WCS ignora estas ocurrencias seleccionadas y finaliza su registro internamente. Si el operador selecciona Aprobar, Deberá filtrar y seleccionar únicamente los volúmenes del mismo destino. Tras seleccionar todos los volúmenes cuya cancelación desea aprobar, el WCS activará la integración de los volúmenes en el WMS, lo que indicará su cancelación y permitirá que el proceso continúe con la gestión correspondiente.
Este proceso garantiza la precisión en la identificación y el control de los volúmenes que deben cancelarse, permitiendo que el WMS tome las medidas necesarias, como gestionar el volumen o ajustar los movimientos logísticos.
Pantalla de ocurrencias:
Importante: Deberá agregar el campo IlpnPlt a la pantalla de ocurrencias y volúmenes para identificar la operación del palé de origen.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Especificación de los volúmenes inducidos en el sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para una lectura correcta en el portal del sorter, los volúmenes deben integrarse correctamente en el sistema Velox, utilizando la información recibida para validar el destino y realizar correctamente las desviaciones en la automatización.
Ejemplo de una caja con más de un código de barras y cajas etiquetadas:

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Contingência del Sorter (IA)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

La operación " Contingência del sorter " en el sistema Velox es un procedimiento desarrollado para tratar situaciones en las que el sistema automático de clasificación (sorter) encuentra dificultades en el procesamiento de cajas debido a condiciones no ideales. Un ejemplo común ocurre cuando los códigos impresos por los proveedores son de baja calidad, comprometiendo la identificación por inteligencia artificial (IA).
Para evitar impactos en la operación, el sistema Velox cuenta con un mecanismo de contingencia que resuelve estos problemas. Este proceso implica reetiquetar las casillas, generando una nueva etiqueta que coincida con los caracteres "IVT" con el DUN correcto del envase.
A continuación se muestra un ejemplo del formato correcto de etiqueta:
Si el WMS imprime una etiqueta con el propósito de leer el dun en el portal, debe seguir el mismo patrón descrito en este tema.
Cuando este formato de etiqueta está vinculado a la caja, el sorter descarta los demás códigos de la caja y realiza la ordenación viendo solo el DUN/EAN después de los caracteres "IVT".
La impresión de las etiquetas de contingencia será responsabilidad del WMS, pero el WCS pondrá la pantalla disponible en caso de que sea necesario.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Especificación  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para el correcto funcionamiento de la automatización, se necesita una aplicación que se encargue de gestionar la información de los equipos clasificados en la operación, es decir, esta aplicación ejecutará las rutinas del sorter, teniendo como función fundamental la interfaz entre los sistemas WMS con WCS Invent.
La aplicación WCS de Invent necesita una base de datos exclusiva para el correcto almacenamiento y gestión de la información, que será facilitada por el cliente (instalación de la base de datos PostgreSQL).
La información se intercambiará entre la aplicación y las estaciones de trabajo a través de una interfaz web, por lo que es necesario utilizar un navegador web estándar en cada estación de trabajo (Google Chrome).

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** CrossDocking  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

En el proceso de CrossDocking, la operación informa el palé recibido, junto con sus respectivos volúmenes, para que sean desviados adecuadamente en el sorter. En este escenario, el WCS tampoco interfiere en el orden de inducción.
El operador deberá llevar el palé cerca de una zona de inducción de la automatización y continuar con los procesos de inducción del lado del WMS.
El WCS agrupará los volúmenes procedentes del proceso de CrossDocking y del proceso de Separación en una única posición de PTL, segregándolos únicamente por categoría de producto ( Alimenticio/No Alimenticio ) y, si es necesario, por Tipo de Embalaje, tratados de manera eficiente y organizada, con la debida priorización en las posiciones de PTL, sin comprometer el flujo de las operaciones estándar.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Incidencias  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

En caso de avería, extravío y necesidad de cancelación, para que el sorter deje de esperarlo y el WMS realice las gestiones necesarias, el proceso de apertura y tratamiento de incidencias se llevará a cabo según el flujo que se describe a continuación.
Para iniciar el proceso, el operador debe acceder a la pantalla «Volúmenes» en el sistema WCS. A partir de ahí, el operador debe filtrar por uno de los códigos del producto o la descripción y seleccionar uno de los volúmenes de la lista que tenga un estado diferente a finalizado. Al hacer clic en abrir incidencia, el WCS mostrará una ventana emergente solicitando al operador que informe del motivo de la incidencia.
Si hay más de un volumen que tratar, el operador puede realizar este proceso para todos los volúmenes necesarios. Después de abrir la incidencia, se debe acceder a los volúmenes que deben tratarse en la pantalla de Incidencias, donde el WCS mostrará una lista de todos los volúmenes con incidencias abiertas, ordenados por Destino (TIENDA).
El operador puede seleccionar uno o más volúmenes para aprobar o no la incidencia. Si selecciona Cancelar, el WCS descartará las incidencias seleccionadas y finalizará su registro internamente. Si el operador selecciona Aprobar, deberá filtrar y seleccionar solo volúmenes del mismo destino a la vez. Después de seleccionar todos los volúmenes que desea aprobar la incidencia (cancelación), el WCS solicitará la lectura de una master.
Después de leer la matriz y confirmar, el WCS activará la integración de los volúmenes agrupados por la matriz leída para el WMS, señalando la cancelación de los volúmenes y permitiendo que el proceso continúe con el tratamiento adecuado. El WCS debe permitir que el operador utilice una matriz que ya se haya utilizado en el proceso de Incidencias y el WMS debe aceptar la misma matriz más de una vez.
Este proceso garantiza la precisión en la identificación y el control de los volúmenes que necesitan ser cancelados, permitiendo que el WMS tome las medidas necesarias, como el tratamiento del volumen o el ajuste en los movimientos logísticos.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Especificación de volúmenes inducidos en el sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para una lectura correcta en el portal del sorter, los volúmenes deben estar debidamente integrados en el sistema Velox, que utilizará la información recibida para validar el destino y realizar los desvíos correctamente en la automatización.
Ejemplo de caja con más de un código de barras y cajas etiquetadas:

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Contingencia del sorter (IA)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

La operación de «Contingencia del sorter» en el sistema Velox es un procedimiento desarrollado para tratar situaciones en las que el sistema de clasificación automática (sorter) encuentra dificultades para procesar cajas debido a condiciones no óptimas. Un ejemplo común se da cuando los códigos impresos por los proveedores son de baja calidad, lo que compromete la identificación por parte de la inteligencia artificial (IA).
Para evitar impactos en la operación, el sistema Velox cuenta con un mecanismo de contingencia que resuelve estos problemas. Este proceso implica el reetiquetado de las cajas, generando una nueva etiqueta que combina los caracteres «IVT» con el DUN correcto del paquete.
A continuación se muestra un ejemplo del formato correcto de la etiqueta:
El WMS envía la información de la etiqueta a través de la integración y el WCS imprime una etiqueta con el objetivo de leer el código DUN/EAN en el portal; debe seguir el mismo estándar descrito en este tema.
Cuando este formato de etiqueta esté vinculado a la caja, el sorter descarta los demás códigos de la caja y realiza la clasificación visualizando solo el DUN/Ean después de los caracteres «IVT».
La impresión de etiquetas de contingencia será responsabilidad del WCS, pero el WCS pondrá a disposición la pantalla en caso de que sea necesario.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Ocorrências  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em caso de avaria, extravio e necessidade de cancelamento, para que o Sorter pare de aguardá-lo e para que o WMS realize a tratativa necessária, o processo de abertura e tratamento de ocorrências será realizado conforme o fluxo descrito abaixo.
Para iniciar o processo, o operador deve acessar a tela de "Volumes" no sistema WCS. A partir daí, o operador deve filtrar por um dos códigos do produto ou descrição e selecionar um dos volumes na lista que estiver com o status diferente de finalizado. Ao clicar em abrir ocorrência, o WCS exibirá um pop-up solicitando que o operador informe o motivo da ocorrência.
Caso haja mais de um volume a ser tratado, o operador pode realizar esse processo para todos os volumes necessários. Após a abertura da ocorrência, os volumes que precisam ser tratados devem ser acessados na tela de Ocorrências, onde o WCS exibirá uma lista de todos os volumes com ocorrência aberta, ordenada por Destino (LOJA).
O operador pode selecionar um ou mais volumes para aprovar ou não a ocorrência. Caso ele selecione Cancelar, o WCS desconsiderará essas ocorrências selecionadas e finalizará o registro delas internamente. Se o operador selecionar Aprovar, ele deverá filtrar e selecionar apenas volumes do mesmo destino por vez. Após selecionar todos os volumes que deseja aprovar a ocorrência (cancelamento), o WCS irá disparar a integração dos volumes para o WMS, sinalizando o cancelamento dos volumes e permitindo o prosseguimento do processo com a devida tratativa.
Esse processo garante a precisão na identificação e controle dos volumes que necessitam de cancelamento, permitindo que o WMS tome as ações necessárias, como o tratamento do volume ou ajuste nas movimentações logísticas.
Tela exemplo de ocorrências:
Importante: Será necessário adicionar na tela de ocorrências e volumes o campo IlpnPlt para identificação da operação do palete de origem

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Contingência do Sorter (IA)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá disponibilizar a tela para caso se faça necessária.

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Ocorrências  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em caso de avaria, extravio e necessidade de cancelamento, para que o Sorter pare de aguardá-lo e para que o WMS realize a tratativa necessária, o processo de abertura e tratamento de ocorrências será realizado conforme o fluxo descrito abaixo.
Para iniciar o processo, o operador deve acessar a tela de "Volumes" no sistema WCS. A partir daí, o operador deve filtrar por um dos códigos do produto ou descrição e selecionar um dos volumes na lista que estiver com o status diferente de finalizado. Ao clicar em abrir ocorrência, o WCS exibirá um pop-up solicitando que o operador informe o motivo da ocorrência.
Caso haja mais de um volume a ser tratado, o operador pode realizar esse processo para todos os volumes necessários. Após a abertura da ocorrência, os volumes que precisam ser tratados devem ser acessados na tela de Ocorrências, onde o WCS exibirá uma lista de todos os volumes com ocorrência aberta, ordenada por Destino (LOJA).
O operador pode selecionar um ou mais volumes para aprovar ou não a ocorrência. Caso ele selecione Cancelar, o WCS desconsiderará essas ocorrências selecionadas e finalizará o registro delas internamente. Se o operador selecionar Aprovar, ele deverá filtrar e selecionar apenas volumes do mesmo destino por vez. Após selecionar todos os volumes que deseja aprovar a ocorrência (cancelamento), o WCS irá disparar a integração dos volumes para o WMS, sinalizando o cancelamento dos volumes e permitindo o prosseguimento do processo com a devida tratativa.
Esse processo garante a precisão na identificação e controle dos volumes que necessitam de cancelamento, permitindo que o WMS tome as ações necessárias, como o tratamento do volume ou ajuste nas movimentações logísticas.
Tela exemplo de ocorrências:
Importante: Será necessário adicionar na tela de ocorrências e volumes o campo IlpnPlt para identificação da operação do palete de origem

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Contingência do Sorter (IA)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá disponibilizar a tela para caso se faça necessária.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Regra de Contingência para Volumes em Esteira  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Caso o cancelamento ocorra para um pedido que já possui volumes físicos (LPNs) circulando na esteira, o WCS Velox marcará esses volumes como 'BLOQUEADOS'. Na próxima leitura de scanner (seja em desvios de zona ou na entrada do Sorter), o sistema comandará o desvio automático para a Rampa de Rejeito, garantindo que o volume saia do fluxo operacional imediatamente.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume, a rampa de saída correspondente. O agrupador principal (master) do mapa do Sorter é a transportadora. O segundo nível de agrupamento é o pedido.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.
Fica sob responsabilidade do contratado disponibilizar uma TV no sorter.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** Mapa de Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema disponibilizará a funcionalidade Sorter Map, permitindo a gestão flexível das docas virtuais.
O supervisor operacional poderá vincular dinamicamente uma Rota ou Cliente a uma Posição Física (QR Code).
Exemplo: "Hoje a Posição 01 vai montar a Rota Zona Sul; A Posição 02 vai montar a Rota Centro".

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Sorter Map  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

The system will provide the Sorter Map functionality, allowing the flexible management of virtual positions.
The operational supervisor will be able to dynamically link a Route or Client to a Physical Position (QR Code).
Example: "Today Position 01 will assemble the South Zone Route; Position 02 will assemble the Center Route".

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
Ao longo de toda a extensão do sorter, haverá 8 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 9 rampas.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume ou pedido, a rampa de saída correspondente.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A rampa de rejeito recebe volumes que se enquadram em seis situações distintas:
Sem leitura (NoRead): O portal de leitura não consegue identificar o código da caixa ou não há etiqueta presente. O volume é enviado para rejeito e deve ser corrigido e reinserido no sorter antes do portal de leitura.
Sem rota: A leitura é realizada, mas o WCS não encontra a rota do volume. O operador deve cadastrar a rota e vinculá-la ao mapa do sorter antes de reinserir o volume.
Sem mapa: A leitura é realizada e a rota existe no WCS, mas não há rampa vinculada no mapa do sorter. O operador deve vincular a rota à rampa correta e reinserir o volume.
MultiRead: Mais de um QR code que atinge os parametros configurados na câmera está visível para a câmera no momento da leitura. O operador retira o código extra, corrige a caixa e reinserir antes do portal de leitura.
Rampa cheia: Quando a rampa de destino está cheia, o sensor de acúmulo dispara e o volume é enviado ao rejeito. Essa situação também é sinalizada pelo sinaleiro.
Cancelamento: Quando uma ordem de serviço é cancelada pelo WMS, o volume é enviado para rejeito.
Volumes que possuírem etiqueta, mas forem rejeitados devido a inconsistências de leitura, rota ou mapa, são tratados como exceções operacionais. Uma nova etiqueta será gerada, substituindo a anterior e garantindo que o sistema considere apenas a rota atualizada.
Alteração do Status para "Na Rampa":
Quando a caixa no rejeito for corrigida e lida corretamente, seu status será atualizado para "na rampa" e o operador será informado da rampa de destino.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Objetivo do documento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Este aditivo tem por objetivo detalhar novas funcionalidades a serem incorporadas ao software de controle WCS do projeto Automatize 2.5 – I23.144. As funcionalidades descritas neste documento complementam a especificação de software vigente e contemplam:
Mapa de Sorter com agrupamento por Loja, definindo para qual rampa cada loja será desviada na área de sorter.
Fluxo de Aloca Pallet para paletização dos volumes após o desvio nas rampas do sorter.
Dashboard Operacional de volumes por loja por rampa do sorter, dividido em dois postos de visualização.
Coluna de percentual de ocupação de caixas nos volumes disponíveis em todas as telas de Order Start.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Mapa de Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS disponibilizará uma funcionalidade de Mapa de Sorter que permitirá à operação definir as rampas vinculadas a cada Loja. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de layouts pré-definidos para o mapa de sorter, que poderão ser facilmente alternados conforme a necessidade operacional.
O sorter deste projeto conta com 4 rampas de saída para o transporte dos volumes. A definição do mapa determinará em qual rampa cada loja terá seus volumes desviados durante o processo de sorteamento.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Regras Operacionais  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS deve utilizar a Loja (destino) como agrupador logístico principal no Mapa de Sorter.
Cada loja poderá ser vinculada a uma única rampa de saída do sorter, porém uma mesma rampa poderá atender múltiplas lojas simultaneamente.
A operação poderá criar, editar e alternar entre diferentes layouts de mapa de sorter conforme a necessidade operacional.
Caso uma loja não esteja alocada a nenhuma rampa, o WCS deverá sinalizar a pendência na tela de Mapa de Sorter, impedindo o desvio automático até a configuração ser realizada.
será possível alterar o mapa de sorter para lojas cujos volumes já tenham sido induzidos no sorter, o sistema deverá considerar a nova rampa quando o próximo volume vier.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** Dashboard Operacional – Volumes por Loja por Rampa  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS disponibilizará um Dashboard Operacional com visão de volumes por loja segregados por rampa do sorter. Este dashboard será dividido em dois postos de visualização, permitindo o acompanhamento em tempo real do andamento da operação.

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Contexto e Motivação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Durante reunião realizada em 01/06/2026 entre Invent e Swift, o cliente solicitou uma tela para acompanhamento dos eventos de rampa cheia no Sorter. A necessidade surgiu da dificuldade em identificar, em tempo real e historicamente, quais rampas estão apresentando baixa eficiência operacional por acúmulo de volumes.
O evento de rampa cheia ocorre quando volumes continuam sendo desviados pelo Sorter para uma rampa cuja capacidade física já foi atingida — detectado pelo sensor instalado no topo da rampa. Quando isso ocorre, os volumes são redirecionados para recirculação ou rejeito, impactando diretamente o throughput da operação.
As principais causas identificadas pelo cliente são:
Produtividade abaixo do esperado dos operadores na rampa (paletização lenta).
Ausência temporária do operador sem substituição.
Outros impedimentos físicos na rampa.
A solução deve permitir que a supervisão identifique o problema em tempo real para agir imediatamente, e que analise o histórico de ocorrências para identificar padrões e tomar decisões estruturais.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - PTM + Extrato Sorter.docx`  
**Heading:** Parâmetros de Entrada  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O usuário deverá informar os seguintes filtros para geração do “Relatório Sorter”:
Observação: O Extrato de Pallet não exige parametrização, pois sua emissão ocorre automaticamente com base no pallet finalizado.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - PTM + Extrato Sorter.docx`  
**Heading:** Cabeçalho Relatório Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Título do relatório: Relatório Sorter – Rampa X (onde X é o número da rampa).
Cod ID: Master do Pallet
Período: dd/mm/aaaa hh:mm a hh:mm (Data e hora da impressão).
Nome da Transportadora vinculada a rampa (ex.: PATRUS TRANSPORTES).
Rotas: Todas as rotas que constam na rampa

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - PTM + Extrato Sorter.docx`  
**Heading:** Corpo Relatório Sorter – Tabela de Remessas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tabela deverá conter as seguintes colunas, na ordem apresentada:

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - PTM + Extrato Sorter.docx`  
**Heading:** Premissas e Restrições  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A funcionalidade contempla exclusivamente a impressão física.
A impressora deve estar previamente configurada no posto de trabalho do operador.
Os dados exibidos no extrato são oriundos dos registros já existentes de sorter e coletor; não há criação de novas bases de dados.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Arquitetura da Solução  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A solução evolui o software do sorter para operar com três modos selecionáveis por parâmetro. No modo CrossCheck, a leitura da etiqueta e a identificação da caixa pela IA ocorrem simultaneamente, e ambas as informações são correlacionadas pelo WCS para classificar a caixa como Compatível ou Suspeita de Divergência. A decisão de desvio é então tomada conforme a parametrização vigente.
A correlação entre a leitura da câmera de TOPO e a leitura da IA é realizada pela relação entre o valor do campo NDIR transmitido no telegrama e a imagem capturada pela IA.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Dashboard de Operação do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Este dashboard destina-se ao acompanhamento em tempo real do fluxo operacional do Sorter ao longo do turno. Deve ser exibido em monitor de ampla visualização no setor operacional e atualizado em ciclos compatíveis com o tempo real da automação.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Tela Inicial – Seleção de Rampa  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Ao acessar o dashboard, o operador será direcionado para uma tela inicial de seleção, onde deverá escolher a rampa de saída do sorter que deseja monitorar.
A tela inicial apresentará:
Lista de todas as rampas de saída disponíveis no sorter
Identificação visual de cada rampa (nome/número da rampa)
Ao selecionar uma rampa, o operador será direcionado para a tela de detalhamento com a visão por matriz.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Comportamento Visual das Barras  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As barras de progresso serão atualizadas em tempo real conforme os volumes são processados pelo sorter e recebidos na rampa:
Barra de Pendentes: representará o percentual de volumes ainda aguardando recebimento. A barra diminui conforme os volumes são finalizados.
Barra de Finalizados: representará o percentual de volumes já recebidos e confirmados. A barra aumenta conforme os volumes são processados.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Dashboard Matriz Por Rampa  e Cadenciamento de seleção no order start - PROJETO ESPERANCA .docx`  
**Heading:** Exemplo Prático de Intercalação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Considere o seguinte cenário de missões integradas para uma mesma rua, com o mapa de sorter ativo direcionando os volumes para 4 rampas distintas:
O WCS gerará a fila de impressão da seguinte forma:
Observe que a Rampa 2 (4 volumes) é a primeira a ser removida do ciclo após a 4ª rodada. Na sequência, a Rampa 4 (6 volumes) sai após a 6ª rodada. A Rampa 3 (10 volumes) sai após a 10ª rodada. Por fim, os volumes restantes da Rampa 1 (20 volumes) são impressos sequencialmente até o fim.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Área de Stage para indução no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A área de Stage é dividida em posições físicas (endereços) para garantir a rastreabilidade e o controle da localização do pallet, seja um pallet fechado induzido no sorter ou caixas Full Case coletadas no fracionado, o operador deve depositar os volumes na área de Stage. O WCS exige que o operador leia ou insira o endereço da posição no coletor para garantir a correta localização do volume. O sistema exibirá uma mensagem informando: 'Direcionar volumes para a área de Stage, próxima à indução, se o pallet estiver disponível.
Caixas Full Case: As caixas Full Case estarão devidamente etiquetadas, facilitando a rastreabilidade e controle durante a indução.
Pallets Sorter:  O WCS gerencia o método de separação, que é ativado quando a quantidade total solicitada de um mesmo produto, em uma única onda de separação, atingir ou superar o volume equivalente a um pallet fechado
Definição da Área de Stage: A área de Stage será definida pelo cliente, de acordo com suas necessidades operacionais.
O WCS registra o endereçamento sistêmico da tarefa no stage, garantindo rastreabilidade dos volumes por posição. Entretanto, não controla automaticamente a ocupação ou quantidade de pallets disponíveis no stage, sendo este gerenciamento realizado operacionalmente pelos operadores.
Área de Stage cheia: Quando a área do Stage estiver cheia será necessária uma tratativa operacional onde o operador deve confirmar a alocação do pallet no Stage e segregar o mesmo próximo ao stage informado.
Controle de Ocupação do Stage: O WCS realiza apenas o registro sistêmico do endereço informado no coletor para rastreabilidade, não havendo controle automático de ocupação ou capacidade da área de stage. O gerenciamento da ocupação física do stage continuará sendo tratado operacionalmente pelos operadores.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter terá capacidade de produzir 6.000 volumes/hora com indução de 3.000 caixas de cada lado.
O Sorter será composto por 2 (duas) rampas de indução e 1 (um) portal de leitura com 3 (três) faces (lados) de leitura, uma superior (topo) e duas laterais. Essas três faces garantem a leitura completa dos volumes, permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case. Durante esse processo, o sistema compara automaticamente o DUN ou EAN lido na caixa com o código da etiqueta do pedido, validando se o volume realmente corresponde ao produto solicitado no pedido.
Em toda a extensão do sorter, haverá 20 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 21 rampas ao todo.
As 20 rampas de saída estarão organizadas da seguinte forma:
17 rampas com 8 posições PTL (Put-To-Light).
2 rampas com 10 posições PTL (Put-To-Light).
1 rampa com 12 posições PTL (Put-To-Light).
Ao todo, o sistema contará com 168 posições PTL distribuídas entre as rampas em toda extensão do sorter. Cada posição será equipada com um display eletrônico de três dígitos com LED, permitindo a identificação visual e precisa do ponto de alocação do volume.
Além disso, uma única rampa poderá atender de 2 a 3 rotas diferentes, conforme a roteirização da carga. Isso será visualmente identificado no display da posição PTL, pois cada rota poderá ocupar dois ou três posições pallets (PTL´s) distintas, possibilitando a separação e organização de pedidos por rota diretamente na saída.
Cada rampa de saída do sorter será equipada com um leitor de código de barras e um conversor, totalizando 21 leitores de código de barras e 21 conversores, correspondentes às 21 rampas existentes (20 de saída e 1 de rejeito). Esses dispositivos são responsáveis por fazer a comunicação e capturar as informações de leitura ao sistema WCS.
O processo do sorter consiste na leitura da caixa no portal de leitura, que envia a etiqueta lida ao Controlador Lógico (CLP). O CLP encaminha essa informação ao WCS, que consulta sua base de dados para verificar os dados do pedido associado àquela etiqueta. Após essa verificação, o WCS envia ao CLP a instrução de desvio, informando em qual rampa a caixa deve ser desviada.
O sorter realizará o desvio dos volumes com base no mapa de rotas cadastrado e ativo no sistema WCS. Esse mapa deve ser configurado previamente no WCS, definindo para cada tipo de volume ou pedido a rampa de saída correspondente.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido pelo sistema WCS ou estar devidamente etiquetados. Volumes que estiverem sem identificação ou etiquetas inválidas serão direcionados para rejeito ou reprocessamento, conforme as regras definidas pela operação.
Para as Ordens de Separação (OS) do tipo 22 (flowrack), o processo segue uma lógica diferente. Essas caixas são induzidas normalmente no sorter, porém não são alocadas em posições PTL. Nesses casos, o sistema WCS realiza apenas o desvio para a saída correta, sem acendimento de posições ou validação adicional. A tratativa dos volumes após o desvio na saída correta é de responsabilidade do cliente, conforme os procedimentos definidos em sua operação.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A rampa de rejeito presente no final do Sorter irá receber os volumes que se classificam em 6 situações sendo as seguintes situações:
Sem leitura (NoRead) – Ocorre quando a câmera do portal de leitura não consegui fazer a leitura do código QR code presente na caixa ou não há etiqueta presente na caixa, com isso o CLP envia a informação de sem leitura para o Velox e ele direciona o volume para o rejeito, assim o volume será tratado por um operador e após a correção ou adição da etiqueta que deve conter as informações da rota o volume deve ser induzido novamente no Sorter antes do portal de leitura.
Sem rota – Ocorre quando a câmera consegue efetuar a leitura do código QR code e o CLP envia a informação recebida da câmera ao Velox, ele por sua vez procura o código em sua base de destino e não encontra, assim direcionando o volume para que o operador cadastre a rota no Velox e vincule a mesma no mapa do Sorter e o volume deve ser induzido novamente no Sorter antes do portal de leitura.
Sem mapa – Ocorre quando a câmera consegue efetuar a leitura do código QR code e o CLP envia a informação recebida da câmera ao Velox, ele por sua vez procura o código em sua base de destino e encontra a rota, porém, não há rampa vinculada no mapa do Sorter para esse destino, o operador deve fazer o vínculo da rota a rampa no mapa do sorter e o volume deve ser induzido novamente no Sorter antes do portal de leitura.
MultiRead – Ocorre quando mais de um código QR code está visível para câmera no momento da leitura, assim ela informa ao CLP que existe mais de um código lido e o CLP envia a mensagem de MultiRead para o Velox. Ao volume chegar no rejeito o operador deve retirar um dos códigos e inserir novamente o volume antes do portal de leitura.
Rampa cheia – Ocorre quando todo processo de leitura no portal e validações do Velox estão corretos, porém, quando o volume chega ao desviador da sua rampa de destino a mesma está cheia de caixas acionando o sensor de acúmulo, assim o volume é enviado para o rejeito, esse caso também é informado pelo sinaleiro.
Cancelamento – Ocorre quando uma ordem de serviço é cancelada pelo WMS.
Volumes que já possuírem etiqueta, mas forem direcionados ao rejeito por inconsistência de leitura, rota ou mapeamento, devem ser tratados como exceções operacionais. A nova etiqueta substitui a anterior para garantir que o sistema considere apenas a rota mais recente.
Impressora no Rejeito: Será instalada uma impressora na área de rejeito. O operador deverá bipar a caixa e, caso necessário, imprimir uma nova etiqueta atualizada, que indica a rampa correta para alocação da caixa. Essa nova etiqueta prevalece sobre qualquer etiqueta anterior, evitando redirecionamentos incorretos.
Alteração do Status para "Na Rampa": Quando uma caixa que está no rejeito for identificada e lida corretamente, o status da caixa será alterado para "na rampa", e o operador será informado sobre a rampa para onde a caixa deve ser direcionada.
Responsabilidade do Operador: A ideia é evitar que o operador da conferência ir até o rejeitoo frequentemente. O operador no rejeito terá a tarefa de bipar e gerar a etiqueta para direcionar a caixa à rampa correta. A alocação da caixa será feita conforme a rampa designada, permitindo ao operador alocar as cargas de forma mais eficiente.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Sinaleiro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Piscante: Indica que o botão de emergência foi acionado
em algum ponto ao longo da automação, nesse caso
todos os sinaleiros da automação irão piscar, até que
o botão acionado seja revertido.
AMARELO
Piscante: Indica que a rampa já está cheia e não pode
receber mais caixas. Neste caso, o sinaleiro irá piscar
até que a situação seja resolvida pelo operador.
VERDE
Aceso: Indica que a rampa está aberta e
pronta para receber os volumes.
VERDE, AMARELO E VERMELHO
Piscante: Sem comunicação com o sistema Velox.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Cancelamento de volumes (avarias)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Sistema WCS deve disponibilizar uma tela com a funcionalidade de excluir volumes que estão sendo esperados pelo sorter. Nesta tela só deve apresentar os volumes que ainda não foram alocados no pallet (realizado a leitura no scanner das saídas do sorter)
Esta função será necessária em casos de avarias com a caixa ou problemas de leitura, onde este item será devolvido ao estoque e excluído dos registros do WCS.
Para o cancelamento ser efetuado deverá ser informado o “Status” (motivo pré-definido dentro do WCS) e um usuário com as permissões necessárias para esta funcionalidade. O operador deve informar o status da avaria para que a integração seja enviada. As opções disponíveis para seleção serão: Consumo, Qualidade e Descarte.
Com o cancelamento concluído o sistema WCS deve enviar a integração mencionada no item Cancelamento de volumes para o WMS.
Especificação de volumes induzidos no sorter (IA)
Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:
Conforme a imagem acima, o código deve estar integrado no sistema Velox.
Processo de IA no Sorter para Volumes Induzidos
O sistema WCS utiliza recursos avançados de Inteligência Artificial (IA) para garantir a correta identificação, validação e direcionamento dos volumes no sorter. Este processo é fundamental para que a automação funcione com precisão e eficiência, minimizando erros e otimizando o fluxo operacional.
Integração dos Volumes no Sistema WCS
Antes da indução no sorter, todos os volumes (caixas) devem estar completamente registrados e integrados no sistema WCS. Essa integração contempla o cadastro detalhado de cada volume, incluindo informações essenciais, como:
Códigos de barras vinculados ao volume;
Dados de destino;
Informações sobre a etiqueta impressa;
Eventuais múltiplos códigos de barras por volume.
Leitura e Validação no Portal do Sorter
Durante a passagem no sorter, o portal de leitura captura os códigos de barras das caixas. Para volumes que possuam múltiplos códigos de barras, o sistema é capaz de identificar e relacionar todos eles ao mesmo volume registrado no WCS.
A IA realiza uma comparação entre os dados lidos e as informações previamente integradas para validar:
Se o volume está correto;
Se a etiqueta corresponde ao conteúdo e ao destino;
Se existem inconsistências ou divergências nos códigos.
Direcionamento e Desvio Automático
Com base na validação realizada pela IA, o sistema WCS determina o destino correto do volume. A automação do sorter, então, recebe essa informação para realizar o desvio físico do volume para a posição adequada, garantindo a continuidade do fluxo.
Tratamento de Exceções
Se a IA identificar algum problema, como:
Códigos não reconhecidos;
Etiquetas incorretas;
Volumes duplicados;
O sistema pode executar as seguintes ações:
Acionar alertas para intervenção manual;
Bloquear o volume para evitar erros na distribuição;
Registrar a ocorrência para análise futura.
Benefícios do Processo de IA no Sorter
Garantia de alta acuracidade na separação e direcionamento dos volumes;
Redução de erros operacionais causados por leituras incorretas ou etiquetas duplicadas;
Otimização do fluxo de materiais, com menor necessidade de retrabalho;
Maior rastreabilidade e controle em tempo real dos volumes.
Contingência do Sorter (IA)
A operação de Contingência Sorter é um procedimento previsto no sistema WCS, destinado a tratar volumes que apresentem problemas na triagem automática realizada pela IA, como por exemplo, códigos de barras de má qualidade impressos pelo fornecedor.
A impressão dessas etiquetas de contingência (formato IVT+DUN) será responsabilidade da Invent.
A equipe operacional será treinada para identificar e aplicar essas etiquetas em volumes com falha de leitura repetida. Essas etiquetas devem ser fixadas de forma visível e seguir o padrão fornecido pela Invent para garantir que a IA do sorter reconheça corretamente o volume.
Para evitar impacto na operação, o WCS está preparado para esse cenário por meio do processo de contingência, que consiste na impressão de uma etiqueta especial para o produto, conforme descrito abaixo:
A etiqueta de contingência concatena os caracteres “IVT” com o DUN correto da caixa.
Exemplo do formato correto da etiqueta de contingência:
IVT + [DUN da caixa]
Quando o sorter identifica uma etiqueta neste formato vinculada à caixa, ele ignora os demais códigos presentes e realiza a triagem considerando apenas o DUN após os caracteres “IVT”.
A impressão dessas etiquetas de contingência é de responsabilidade da Invent.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Indução no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A indução ocorre nas rampas esquerda e direita, com capacidade para 6.000 volumes/hora.
O portal de leitura três faces (superior e laterais) realiza a captura do EAN ou DUN-14.
O WCS valida os dados e aciona o CLP (PLC), conforme o mapa do sorter ativo.
Contingência com IA e Etiquetas IVT+DUN:
Volumes com falha recorrente de leitura recebem etiqueta IVT+DUN impressa pelo operador na área de rejeito, garantindo correta identificação.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
Ao longo de toda a extensão do sorter, haverá 8 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 9 rampas.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume ou pedido, a rampa de saída correspondente.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A rampa de rejeito recebe volumes que se enquadram em seis situações distintas:
Sem leitura (NoRead): O portal de leitura não consegue identificar o código da caixa ou não há etiqueta presente. O volume é enviado para rejeito e deve ser corrigido e reinserido no sorter antes do portal de leitura.
Sem rota: A leitura é realizada, mas o WCS não encontra a rota do volume. O operador deve cadastrar a rota e vinculá-la ao mapa do sorter antes de reinserir o volume.
Sem mapa: A leitura é realizada e a rota existe no WCS, mas não há rampa vinculada no mapa do sorter. O operador deve vincular a rota à rampa correta e reinserir o volume.
MultiRead: Mais de um QR code que atinge os parametros configurados na câmera está visível para a câmera no momento da leitura. O operador retira o código extra, corrige a caixa e reinserir antes do portal de leitura.
Rampa cheia: Quando a rampa de destino está cheia, o sensor de acúmulo dispara e o volume é enviado ao rejeito. Essa situação também é sinalizada pelo sinaleiro.
Cancelamento: Quando uma ordem de serviço é cancelada pelo WMS, o volume é enviado para rejeito.
Volumes que possuírem etiqueta, mas forem rejeitados devido a inconsistências de leitura, rota ou mapa, são tratados como exceções operacionais. Uma nova etiqueta será gerada, substituindo a anterior e garantindo que o sistema considere apenas a rota atualizada.
Alteração do Status para "Na Rampa":
Quando a caixa no rejeito for corrigida e lida corretamente, seu status será atualizado para "na rampa" e o operador será informado da rampa de destino.

---
**Origem:** [IA] ADITIVO — `Descritivo Funcional - Velox - IA - Copia.docx`  
**Heading:** Objetivo do Sistema  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema de IA tem como objetivo aumentar a taxa de leitura correta de códigos de barras em caixas que apresentam mais de um código, reduzindo ocorrências de No Read no sorter.
A solução é baseada em visão computacional, utilizando o modelo YOLO, que identifica visualmente o código correto a ser lido a partir de uma seleção lógica (checkbox) conforme exemplo abaixo:

---
**Origem:** [IA] ADITIVO — `Descritivo Funcional - Velox - IA.docx`  
**Heading:** Objetivo do Sistema  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema de IA tem como objetivo aumentar a taxa de leitura correta de códigos de barras em caixas que apresentam mais de um código, reduzindo ocorrências de No Read no sorter.
A solução é baseada em visão computacional que identifica visualmente o código correto a ser lido a partir de uma seleção lógica (checkbox) conforme exemplo abaixo:
Figura 1 – Foto da câmera/Leitura da IA

---
**Origem:** [I25.9044] ADITIVO — `I25.9044 - Aditivo Projeto Optimus Prime - Adição na tela de Relatório.docx`  
**Heading:** Objetivo do Aditivo  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Este documento tem como objetivo descrever a inclusão da quantidade de peças processadas por meio da leitura RFID na tela de Relatório de Produção do Sorter, no projeto BELEZA – I25.9043 (C&A), garantindo maior precisão, rastreabilidade e redução de intervenção manual no apontamento produtivo.
A funcionalidade visa dar maior autonomia operacional ao cliente, reduzindo impactos no fluxo logístico.

---
**Origem:** [I25.9044] ADITIVO — `I25.9044 - Aditivo Projeto Optimus Prime - Adição na tela de Relatório.docx`  
**Heading:** Contexto do Problema  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Atualmente, o relatório de produção do sorter considera apenas as informações provenientes das leituras padrão do fluxo operacional, não contemplando a captura automatizada de quantidades via RFID.
Com isso:
A quantidade de peças pode depender de apontamentos indiretos ou integrações limitadas;
Existe risco de divergência entre o físico e o sistêmico;
Não há rastreabilidade detalhada por leitura RFID no relatório;
O processo perde eficiência operacional por não utilizar uma tecnologia já disponível no fluxo.
Diante disso, surge a necessidade de incorporar as leituras RFID diretamente no relatório, garantindo maior confiabilidade dos dados apresentados.

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - RAMPA FULLCASE REV 1.docx`  
**Heading:** Objetivo do documento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O presente aditivo tem por objetivo descrever as alterações na lógica de decisão de desvio do módulo Sorter do WCS Velox.
Foi identificada a instalação de um equipamento de arqueação (arqueadora) nas saídas do Sorter. Contudo, este equipamento opera de forma padrão (estrangulamento), o que impede sua utilização em volumes de papelão (Fullcase), envelopes (Flyers) ou itens sensíveis (Fraldas), sob risco de danificar a embalagem ou o produto.
Desta forma, fica estabelecido que o software WCS deverá realizar a triagem lógica dos volumes, segregando o fluxo físico entre Itens Arqueáveis (Caixas Plásticas) e Itens Não Arqueáveis (Caixas de Papelão/Fullcase).

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - RAMPA FULLCASE REV 1.docx`  
**Heading:** Alteração na Regra do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cenário Atual: Na especificação original, o Sorter possui 3 saídas para rotas e 1 para rejeito, e o desvio é baseado exclusivamente no Mapa do Sorter (De/Para de Rotas vs. Rampa) fornecido pelo cliente.
Nova Regra: O WCS passará a considerar o Tipo de Volume e/ou SKU como critério primário de decisão de rampa, sobrepondo-se ou complementando a lógica de rotas.

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - TRANSBORDO LOTEVALIDADE.docx`  
**Heading:** Objetivo do documento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O presente aditivo tem por objetivo descrever as alterações na lógica de decisão de desvio do módulo Sorter do WCS Velox.
Foi identificada a instalação de um equipamento de arqueação (arqueadora) nas saídas do Sorter. Contudo, este equipamento opera de forma padrão (estrangulamento), o que impede sua utilização em volumes de papelão (Fullcase), envelopes (Flyers) ou itens sensíveis (Fraldas), sob risco de danificar a embalagem ou o produto.
Desta forma, fica estabelecido que o software WCS deverá realizar a triagem lógica dos volumes, segregando o fluxo físico entre Itens Arqueáveis (Caixas Plásticas) e Itens Não Arqueáveis (Caixas de Papelão/Fullcase).

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - TRANSBORDO LOTEVALIDADE.docx`  
**Heading:** Alteração na Regra do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cenário Atual: Na especificação original, o Sorter possui 3 saídas para rotas e 1 para rejeito, e o desvio é baseado exclusivamente no Mapa do Sorter (De/Para de Rotas vs. Rampa) fornecido pelo cliente.
Nova Regra: O WCS passará a considerar o Tipo de Volume e/ou SKU como critério primário de decisão de rampa, sobrepondo-se ou complementando a lógica de rotas.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Dashboard Conferência de Pallets - Rev.docx`  
**Heading:** Mecanismo de Timer por ACKN  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS já recebe um sinal ACKN do Sorter no momento em que um volume é desviado para uma bica específica. A partir desse ACKN, o sistema inicia automaticamente um timer individual para aquele volume.
O número de conferentes necessários para cobrir adequadamente a operação deve ser calibrado durante a fase de implantação, com base no volume de alertas gerados e no tempo médio de resolução de cada tratativa. O parâmetro de timer é um dos instrumentos de controle — timers mais curtos aumentam a sensibilidade do sistema e podem exigir mais conferentes; timers mais longos reduzem o volume de alertas mas aumentam o risco de pallets fechados com pendências.
Obs: O timer não é zerado por Rampa Cheia. Se o volume for redirecionado ao rejeito após rampa cheia, ele deve receber tratativa na estação de rejeito conforme o fluxo padrão do Sorter (descrito na ES principal do projeto).

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Dashboard Conferência de Pallets - Rev.docx`  
**Heading:** Fluxo Operacional  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Fluxo Normal (sem anomalias)
O Sorter desvia um volume para a bica. WCS recebe o ACKN e inicia o timer.
O operador da bica bipa o volume e o aloca no pallet. Timer é encerrado. Volume some da lista ativa.
Conferente acompanha a tela sem necessidade de intervenção.
Operador fecha o pallet normalmente.
Fluxo com Volume Vermelho
Timer estoura. Volume passa para vermelho na tela. Bica é promovida para Bicas em Evidência.
Conferente visualiza o alerta e acessa o painel de detalhe da bica.
Conferente vai até a bica e avalia a situação física.
Conferente aplica a tratativa correspondente (T1 a T6) e registra na tela.
Sistema registra a ocorrência em log e encerra o alerta.
Fluxo com Volume Laranja (Bica Errada)
Volume é bipado em bica diferente da esperada. Timer zera. Volume passa para laranja na tela. Bica errada e bica correta são destacadas em Bicas em Evidência.
Conferente recebe alerta imediato e vai até a bica errada antes que o volume seja alocado no pallet incorreto.
Conferente resgata o volume e o bipa na bica correta (tratativa T4).
Sistema registra a ocorrência com bica errada e operador logado.
Fluxo com Volume Vermelho no PTL
Timer estoura. Volume passa para vermelho na tela. Bica é promovida para Bicas em Evidência.
Conferente visualiza o alerta e acessa o painel de detalhe da bica.
Conferente vai até a bica e avalia a situação física.
Conferente aplica a tratativa correspondente (T1 a T6) e registra na tela. A tela deve mostrar ao conferente qual dos 2 pallets que tem em cada PTL o item foi alocado.
Sistema registra a ocorrência em log e encerra o alerta.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Dashboard Conferência de Pallets - Rev.docx`  
**Heading:** Dependências e Pré-condições  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Sorter configurado e operacional com Mapa do Sorter definido — 40 bicas vinculadas a rotas e destinos, cada uma com operador dedicado e scanner para bipagem individual de volumes.
WCS configurado para capturar e processar o sinal ACKN de desvio do Sorter por volume e por bica.
Perfis de acesso configurados no WCS: Supervisor (acesso à tela e autorização de T5/T6) e Operador Conferente (acesso habilitado por Supervisor no início da sessão).
Portal de leitura do Sorter operacional — necessário para rastreio do último local do volume.
Parâmetro de timer configurado antes da entrada em operação (recomendação: 10 minutos — valor a definir com o cliente).
Parâmetro de critério de promoção para Bicas em Evidência configurado antes da entrada em operação.
Dispositivo para o Operador Conferente — recomendação: tablet fornecido pelo cliente ou PDV fornecido pela Invent, com scanner de dedo acoplado para permitir mobilidade durante as tratativas nas bicas. A definição final do hardware será alinhada com o cliente.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Crosscheck, Alocação Automatica, Pedidos, Dashboard e Ajustes Impressão.docx`  
**Heading:** Objetivo  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Este documento consolida e detalha as solicitações de aditivo enviadas pelo cliente para o Projeto Beta, organizadas em seis itens funcionais. Cada item descreve a regra de negócio, o comportamento esperado do sistema e, quando aplicável, os parâmetros de configuração, campos de relatório e pontos de integração.
Itens parametrizáveis poderão ser ativados ou desativados por cliente, sem necessidade de nova entrega.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Master Velox e API Férias.docx`  
**Heading:** Objetivo  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Este documento consolida e detalha as solicitações de aditivo enviadas pelo cliente para o Projeto Beta, organizadas em seis itens funcionais. Cada item descreve a regra de negócio, o comportamento esperado do sistema e, quando aplicável, os parâmetros de configuração, campos de relatório e pontos de integração.
Itens parametrizáveis poderão ser ativados ou desativados por cliente, sem necessidade de nova entrega.

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** SAP recebe do WCS informações do pallet que agrega informações de pallet criado no sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa interface, WCS devolve as informações para o SAP afim de gerar relatórios posteriores.
WCS  SAP

---
**Origem:** [I20.1406] 2021 — `I20.1406  - ESPECIFICACAO SOFTWARE - Rev1.docx`  
**Heading:** Introdução  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Put-to-Wall e Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Internet Explorer, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO BANCO DE DADOS - Rev1.docx`  
**Heading:** TABELA: ROTAS  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Objetivo:
Armazenar as rotas que serão utilizadas para montar o mapa de desvio do SORTER.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO BANCO DE DADOS - Rev1.docx`  
**Heading:** TABELA: MAPA_SAIDA  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Objetivo:
Armazenar as rampas/saída que serão utilizadas para montar o mapa de desvio do SORTER.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO BANCO DE DADOS - Rev1.docx`  
**Heading:** TABELA: SAIDAS_ROTAS  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Objetivo:
Armazenar o vinculo entre as rampas/saída e rotas que serão utilizadas para montar o mapa de desvio do SORTER.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO BANCO DE DADOS - Rev1.docx`  
**Heading:** TABELA: CAIXA  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Objetivo:
Armazenar as informações de todos os volumes tratados pelo SORTER.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Fluxo do SORTER  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Especificação hardware de TI
Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Internet Explorer, Google Chrome, Mozila ou Firefox)

---
**Origem:** [I21.103] 2021 — `I21.103 - ESPECIFICACAO DE SOFTWARE - ADICIONAL SORTER REISADO REV3.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

ESPECIFICAÇÃO DE SOFTWARE
Adicional sorter - REISADO
REV.3 – 26/03/2025
Apresentamos nossa proposta e condições gerais de fornecimento do sistema em referência.
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I21.103] 2021 — `I21.103 - ESPECIFICACAO DE SOFTWARE - ADICIONAL SORTER REISADO REV3.docx`  
**Heading:** Adição de tela e funcionalidades  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema WCS Velox deverá possibilitar o operador a realizar o vínculo da rota em uma rampa/doca.
Esse vínculo será feito manualmente pelo operador no sistema WCS Velox, conforme a necessidade.
Sendo assim, a caixa ao ser lida na saída do sorter, deverá informar além do status, informar a rota que está vinculada aquela rampa/doca no momento da leitura em casos de rampa errada.
Para que as solicitações sejam atendidas com êxito, como mencionado no item acima, uma tela nova que será apresentada no PDV deve conter um campo onde o operador com o leitor de forma manual vai realizar a leitura do volume e a informação será apresentada no PDV, após o recebimento do número do código de volume o sistema do WCS Velox irá avaliar a informação do número de volume condiz com os números de volumes esperados para aquela rampa/doca sendo possíveis os seguintes cenários:
Caixa pertence a rampa/doca – O WCS VELOX irá acender toda a tela do PDV na cor verde com a mensagem “CAIXA CORRETA!” em letras grandes. A tela ficará com a mensagem permanente na tela até que o usuário realize uma nova leitura.
Caixa não pertence a rampa/doca – O WCS VELOX irá acender a tela do PDV na cor vermelha com a mensagem “RAMPA ERRADA! CAIXA PERTENCE A RAMPA: (Nº da rampa) ROTA: (rota vinculada a rampa)” em letras grandes. A tela ficará com a mensagem permanente na tela até que o usuário realize uma nova leitura.
Em casos que a caixa não pertencer a nenhuma rampa, o número da rampa ficará vazio.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Especificação hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Internet Explorer, Google Chrome, Mozila ou Firefox)

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Especificação hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Internet Explorer, Google Chrome, Mozila ou Firefox)

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev1.docx`  
**Heading:** Especificação hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Internet Explorer, Google Chrome, Mozila ou Firefox)

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.3.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.3.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.4.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.4.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.6.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.6.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.7.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.7.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.1.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.2.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.2.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do sorter, 01(uma) estação de trabalho (Responsabilidade do Cliente) será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do sorter, 01(uma) estação de trabalho (Responsabilidade do Cliente) será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0-.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado fornecido pela Invent (Servidor + Banco de dados). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.
Os equipamentos utilizados, já estão disponiveis e serão os mesmos utilizados para o projeto PTL 2.0.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV2.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado fornecido pela Invent (Servidor + Banco de dados). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.
Os equipamentos utilizados, já estão disponiveis e serão os mesmos utilizados para o projeto PTL 2.0.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado fornecido pela Invent (Servidor + Banco de dados). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.
Os equipamentos utilizados, já estão disponiveis e serão os mesmos utilizados para o projeto PTL 2.0.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV4.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado fornecido pela Invent (Servidor + Banco de dados). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.
Os equipamentos utilizados, já estão disponiveis e serão os mesmos utilizados para o projeto PTL 2.0.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE - Reab.docx`  
**Heading:** PTM – Put To Monitor  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter terá 5 saídas e cada saída será composta por 1 PDV e 1 leitor.
Cada saída terá até 3 pallets para serem abertos.
Pelo PDV, operador fará a abertura e fechamento dos pallets e identificação onde deve alocar o volume bipado na saída.
Operador irá selecionar na tela do PDV qual pallet deseja abrir, com isso operador irá bipar (leitor de mão) a etiqueta de pallet (UMA) e a etiqueta do crachá do operador.
Na tela do PDV, operador ao selecionar o pallet a ser aberto, quando o pallet for aberto, deveremos mostrar no PDV o número da UMA que esta aberta naquela pallet e ao alocar cada item, mostramos a quantidade total de itens alocados no pallet.
O fechamento do pallet é visual, operador define o momento certo de finalizar o mesmo.
Para fechar o pallet, operador deverá selecionar o pallet aberto, com isso operador fará a leitura do código de barras da UMA, nesse momento é enviado uma integração para o WMS, com os itens que foram alocados, quantidades e os dados do operador que realizou a expedição do pallet que foi fechado.
(Sugestão de tela - PDV)
Por exemplo:
Pallet 1 – está aberto com o número de UMA: 458967 e existem 15 volumes alocados nesse pallet
Pallet 2 – está aberto com o número de UMA: 589647 e existem 25 volumes alocados nesse pallet, ele está na cor amarela, indicando que o item bipado no momento é para ser alocado no pallet 2
Pallet 3 – está fechado aguardando operador abrir
Para fechar o pallet, operador deverá selecionar o pallet aberto, com isso operador fará a leitura do código de barras da UMA, nesse momento é enviado uma integração para o WMS, com os itens que foram alocados, quantidades e os dados do operador que realizou a expedição do pallet que foi fechado.
(Sugestão de Json)
{
"pallet_uma": "458967",
"dataHoraAberto": "2022-09-22 17:42:44",
"dataHoraFechado": "2022-09-22 18:11:57",
"usuarioPallet": "2541 - Marcelo",
"rampaSaida": "02",
"itens": [
{
"barCode": "0003332724104582",
"pedido": "47504947",
"tarefa": "0003332724",
"pesoAferido": "2548",
"dataHoraPeso": "2022-04-14T17:45:00.000Z",
"volumeAferido": "514",
"dataHoraVolume": "2022-04-14T17:45:00.000Z",
"bypassHabilitado": "0",
"tipoDaCaixaPicking": "",
"aprovacaoManual": "",
"aprovacaoMotivo": "",
"aprovacaoUsuario": ""
},
{
"barCode": "0003332724104582",
"pedido": "47504947",
"tarefa": "0003332724",
"pesoAferido": "2548",
"dataHoraPeso": "2022-04-14T17:45:00.000Z",
"volumeAferido": "514",
"dataHoraVolume": "2022-04-14T17:45:00.000Z",
"bypassHabilitado": "0",
"tipoDaCaixaPicking": "",
"aprovacaoManual": "",
"aprovacaoMotivo": "",
"aprovacaoUsuario": ""
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO (Reabastecimento - PTW - PTM).docx`  
**Heading:** PTM – Put To Monitor  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter terá 5 saídas e cada saída será composta por 1 PDV e 1 leitor.
Cada saída terá até 3 pallets para serem abertos.
Pelo PDV, operador fará a abertura e fechamento dos pallets e identificação onde deve alocar o volume bipado na saída.
Operador irá selecionar na tela do PDV qual pallet deseja abrir, com isso operador irá bipar (leitor de mão) a etiqueta de pallet (UMA) e a etiqueta do crachá do operador.
Na tela do PDV, operador ao selecionar o pallet a ser aberto, quando o pallet for aberto, deveremos mostrar no PDV o número da UMA que esta aberta naquela pallet e ao alocar cada item, mostramos a quantidade total de itens alocados no pallet.
O fechamento do pallet é visual, operador define o momento certo de finalizar o mesmo.
Para fechar o pallet, operador deverá selecionar o pallet aberto, com isso operador fará a leitura do código de barras da UMA, nesse momento é enviado uma integração para o WMS, com os itens que foram alocados, quantidades e os dados do operador que realizou a expedição do pallet que foi fechado.
(Sugestão de tela - PDV)
Por exemplo:
Pallet 1 – está aberto com o número de UMA: 458967 e existem 15 volumes alocados nesse pallet
Pallet 2 – está aberto com o número de UMA: 589647 e existem 25 volumes alocados nesse pallet, ele está na cor amarela, indicando que o item bipado no momento é para ser alocado no pallet 2
Pallet 3 – está fechado aguardando operador abrir
Para fechar o pallet, operador deverá selecionar o pallet aberto, com isso operador fará a leitura do código de barras da UMA, nesse momento é enviado uma integração para o WMS, com os itens que foram alocados, quantidades e os dados do operador que realizou a expedição do pallet que foi fechado.
(Sugestão de Json)
{
"pallet_uma": "458967",
"dataHoraAberto": "2022-09-22 17:42:44",
"dataHoraFechado": "2022-09-22 18:11:57",
"usuarioPallet": "2541 - Marcelo",
"rampaSaida": "02",
"itens": [
{
"barCode": "0003332724104582",
"pedido": "47504947",
"tarefa": "0003332724",
"pesoAferido": "2548",
"dataHoraPeso": "2022-04-14T17:45:00.000Z",
"volumeAferido": "514",
"dataHoraVolume": "2022-04-14T17:45:00.000Z",
"bypassHabilitado": "0",
"tipoDaCaixaPicking": "",
"aprovacaoManual": "",
"aprovacaoMotivo": "",
"aprovacaoUsuario": ""
},
{
"barCode": "0003332724104582",
"pedido": "47504947",
"tarefa": "0003332724",
"pesoAferido": "2548",
"dataHoraPeso": "2022-04-14T17:45:00.000Z",
"volumeAferido": "514",
"dataHoraVolume": "2022-04-14T17:45:00.000Z",
"bypassHabilitado": "0",
"tipoDaCaixaPicking": "",
"aprovacaoManual": "",
"aprovacaoMotivo": "",
"aprovacaoUsuario": ""
}
]
}

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.2.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.2.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT ou infra com latência de no máximo 300ms ida + volta.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Cubometro (Sorter)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

POST
REQUEST:
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota, onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado fornecido pela Invent (Servidor + Banco de dados). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Cubometro (Sorter)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

POST
AUTENTICAÇÃO: http://usqaslstc000216.phx-dc.dhl.com:7010/ws/auth/login (Método GET)
REQUEST: http://usqaslstc000216.phx-dc.dhl.com:7010/ws/cws/Cubometro (Método POST)
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota, onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado fornecido pela Invent (Servidor + Banco de dados). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Cubometro (Sorter)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

POST
REQUEST:
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota, onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado fornecido pela Invent (Servidor + Banco de dados). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.2.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota (Figura 10), onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.2.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.4.docx`  
**Heading:** Cubometro (Sorter)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

POST
REQUEST:
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.4.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota, onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.4.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado fornecido pela Invent (Servidor + Banco de dados). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Cubometro (Sorter)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

POST
REQUEST:
WCS (Invent)  WMS (Cliente)

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento. As funcionalidades de incluir, editar e excluir mapas de rota se encontra disponibilizada na tela mapas de rota, onde os mapas são mostrados por uma tabela com os seguintes dados:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado fornecido pela Invent (Servidor + Banco de dados). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIF REV2.docx`  
**Heading:** Operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nas saidas do sorter terá 5 TV’s para 5 saídas
Com o PTM cada saída do sorter terá a possibilidade de abertura de até 3 pallets.
Com o leitor de código de barras (Ring Scan), operador fará a abertura e fechamento dos pallets e identificação onde deve alocar o volume bipado/lido na saída.
O sistema permitirá a operação de multiplos usuários na mesma saida, utilizando o PTM.
Operador irá selecionar pela etiqueta de pallet, qual posição/pallet irá realizar a abertura, com isso operador irá realizar a rotina de abertura, efetuando a leitura com leitor de mão na ordem abaixo:
1 – Leitura da etiqueta de identificação do colaborador
2 – Leitura da etiqueta de posição pallet
3 – Leitura da etiqueta de identificação do pallet (UMA)
Então a posição pallet é aberta, e mostrada a posição aberta no monitor da rampa.
Operador então, ao receber os volumes desviados na rampa, realiza a leitura do código de barras e na TV (PTM), o sistema irá indicar em qual posição pallet o operador deve alocar aquele volume lido.
Caso ocorra algum bloqueio do pedido que está na esteira, o WMS deverá enviar uma API de bloqueio de pedido, com isso o operador não ira conseguir incluir o volume no pallet e observando na tela (PTM) o motivo.
O fechamento do pallet é visual, operador define o momento certo de finalizar o mesmo.
Operador ao visualizar que o pallet está cheio, realiza o processo de fechamento de pallet efetuando a leitura da etiqueta de identificação do pallet (UMA), com isso o sistema MFC envia uma integração para o WMS com todos os volumes alocados no pallet com as informações de:

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nas saidas do sorter terá 5 TV’s para 5 saídas
Com o PTM cada saída do sorter terá a possibilidade de abertura de até 3 pallets.
Com o leitor de código de barras, operador fará a abertura e fechamento dos pallets e identificação onde deve alocar o volume bipado na saída.
Operador irá selecionar pela etiqueta de pallet, qual posição/pallet irá realizar a abertura, com isso operador irá realizar a rotina de abertura, efetuando a leitura com leitor de mão na ordem abaixo:
1 – Leitura da etiqueta de identificação do colaborador
2 – Leitura da etiqueta de posição pallet
3 – Leitura da etiqueta de identificação do pallet (UMA)
Então a posição pallet é aberta, e mostrada a posição aberta no monitor da rampa.
Operador então, ao receber os volumes desviados na rampa, realiza a leitura do código de barras e na TV (PTM), o sistema irá indicar em qual posição pallet o operador deve alocar aquele volume lido.
O fechamento do pallet é visual, operador define o momento certo de finalizar o mesmo.
Operador ao visualizar que o pallet está cheio, realiza o processo de fechamento de pallet efetuando a leitura da etiqueta de identificação do pallet (UMA), com isso o sistema MFC envia uma integração para o WMS com todos os volumes alocados no pallet com as informações de:
Numero do pallet(UMA)
Identificação do operador que abriu o pallet
Rampa
Transportadora
BarCode
Pedido
Tarefa

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nas saidas do sorter terá 5 TV’s para 5 saídas
Com o PTM cada saída do sorter terá a possibilidade de abertura de até 3 pallets.
Com o leitor de código de barras (Ring Scan), operador fará a abertura e fechamento dos pallets e identificação onde deve alocar o volume bipado/lido na saída.
O sistema permitirá a operação de multiplos usuários na mesma saida, utilizando o PTM.
Operador irá selecionar pela etiqueta de pallet, qual posição/pallet irá realizar a abertura, com isso operador irá realizar a rotina de abertura, efetuando a leitura com leitor de mão na ordem abaixo:
1 – Leitura da etiqueta de identificação do colaborador
2 – Leitura da etiqueta de posição pallet
3 – Leitura da etiqueta de identificação do pallet (UMA)
Então a posição pallet é aberta, e mostrada a posição aberta no monitor da rampa.
Operador então, ao receber os volumes desviados na rampa, realiza a leitura do código de barras e na TV (PTM), o sistema irá indicar em qual posição pallet o operador deve alocar aquele volume lido.
Caso ocorra algum bloqueio do pedido que está na esteira, o WMS deverá enviar uma API de bloqueio de pedido, com isso o operador não ira conseguir incluir o volume no pallet e observando na tela (PTM) o motivo.
O fechamento do pallet é visual, operador define o momento certo de finalizar o mesmo.
Operador ao visualizar que o pallet está cheio, realiza o processo de fechamento de pallet efetuando a leitura da etiqueta de identificação do pallet (UMA), com isso o sistema MFC envia uma integração para o WMS com todos os volumes alocados no pallet com as informações de:

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificação de hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozila ou Firefox)

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Especificação de hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará a rotina de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozila ou Firefox)

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de Sorter, tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome)

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV2.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de Sorter, tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome)

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV2.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de Sorter, tendo como papel fundamental a interface entre os sistemas TMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome)

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de Sorter, tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome)

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Recirculação (ByPass)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para casos em que, a rampa de descida do sorter A esteja cheia.
O sistema fará uma verificação, se existir a sigla vinculada em outra rampa do sorter B, o volume seguirá para essa rampa do sorter B.
Caso a sigla vinculada esteja somente em uma rampa do sorter A e a rampa esteja cheia, o mesmo fará a recirculação entre os dois sorters dando tempo assim, para que a rampa seja desabastecida e o sorter consiga realizar o desvio correto.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Mapa de rota  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os mapas de rota são tabelas que relacionam as rotas dos volumes às rampas de saída do Sorter. Por exemplo, é possível relacionar a rota “RIO” para a saída 7 do Sorter, assim todos os volumes da rota “RIO” serão desviados para a rampa 07 do equipamento

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes. (Responsabilidade EMIS).
Operador verifica motivo de rejeito no sistema VELOX.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.8.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes. (Responsabilidade EMIS).
Operador verifica motivo de rejeito no sistema VELOX.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.9.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes. (Responsabilidade EMIS).
Operador verifica motivo de rejeito no sistema VELOX.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Paletização será de responsabilidade do cliente.
Cliente irá nos passar mapa de Rampas/Rotas
Operador ao receber caixa na saída do Sorter irá fazer a leitura no coletor do WMS.
Sorter terá 09 (nove) saídas.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.2.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Paletização será de responsabilidade do cliente.
Cliente irá nos passar mapa de Rampas/Rotas
Operador ao receber caixa na saída do Sorter irá fazer a leitura no coletor do WMS.
Sorter terá 09 (nove) saídas.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.2.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Paletização será de responsabilidade do cliente.
Cliente irá nos passar mapa de Rampas/Rotas
Operador ao receber caixa na saída do Sorter irá fazer a leitura no coletor do WMS.
Sorter terá 09 (nove) saídas.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Paletização será de responsabilidade do cliente.
Cliente irá nos passar mapa de Rampas/Rotas
Operador ao receber caixa na saída do Sorter irá fazer a leitura no coletor do WMS.
Sorter terá 09 (nove) saídas.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes. (Responsabilidade EMIS).
Operador verifica motivo de rejeito no sistema VELOX.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes. (Responsabilidade EMIS).
Operador verifica motivo de rejeito no sistema VELOX.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes. (Responsabilidade EMIS).
Operador verifica motivo de rejeito no sistema VELOX.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes. (Responsabilidade EMIS).
Operador verifica motivo de rejeito no sistema VELOX.

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, está aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Calçados Beira Rio (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, está aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Calçados Beira Rio (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, está aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Calçados Beira Rio (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, está aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Rejeito dos Volumes dos Níveis e Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em caso de NoRead nos leitores dos níveis/sorter, essa caixa/pacote deverá ser tratada na estação de rejeito no térreo/sorter.
Esta mesma estação servirá de rejeito para as áreas dos níveis e sorter, ou seja, tanto para tratativa dos problemas que podem ocorrer nos níveis de recebimento e expedição, quanto para os problemas que podem ocorrer apíos as caixas passarem pelo portal.
Possibilidades de Rejeito:
NoRead (Deve seguir e ser tratada no térreo/sorter);
Não integrado;
Erro de desvio;
Erro de etiqueta;
Sem destino ou sem tipo de serviço.
Impressão e reimpressão de etiquetas, responsabilidade do cliente.

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Calçados Beira Rio (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, está aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox)

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Rejeito dos Volumes dos Níveis e Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em caso de NoRead nos leitores dos níveis/sorter, essa caixa/pacote deverá ser tratada na estação de rejeito no térreo/sorter.
Esta mesma estação servirá de rejeito para as áreas dos níveis e sorter, ou seja, tanto para tratativa dos problemas que podem ocorrer nos níveis de recebimento e expedição, quanto para os problemas que podem ocorrer apíos as caixas passarem pelo portal.
Possibilidades de Rejeito:
NoRead (Deve seguir e ser tratada no térreo/sorter);
Não integrado;
Erro de desvio;
Erro de etiqueta;
Sem destino ou sem tipo de serviço.
Impressão e reimpressão de etiquetas, responsabilidade do cliente.

---
**Origem:** [I22.2247] 2022 — `I22.2247 -  PROJETO MINUANO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de armazenamento, expedição de mercadoria e de sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Calçados Beira Rio (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, ou Mozilla Firefox)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Contingência Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A operação de "Contingência Sorter" é um procedimento chave dentro do sistema Velox, projetado para lidar com itens que não estão em condições ideais para serem processados pelo sistema de triagem automática (sorter). Essa operação é essencial para garantir a eficiência e a confiabilidade do processo de classificação de itens, mesmo em situações adversas ou excepcionais.
O principal objetivo dessa operação é assegurar que os itens que não atendem aos critérios estabelecidos para o processamento pelo sorter não causem interrupções no fluxo de operação. Itens inadequados podem incluir aqueles com formatos irregulares, tamanhos incompatíveis, entre outros fatores que impeçam a correta identificação e classificação no sorter.
Porém, o sistema Velox estará apto para o funcionamento total, atendendo em sua totalidade de volumes e caixas, independente de tamanho e especificações técnicas, a obrigatoriedade é que o volume a ser triado manualmente ou via sorter, deve estar devidamente integrado no sistema Velox.
Na operação de "Contingência Sorter", operador deverá abrir a posição pallet conforme rua predeterminada pelo cliente.
A operação de “Contingência Sorter”, será utilizada via coletor do cliente, onde o cliente irá acessar o sistema Velox pelo seu coletor.
Lembrando que para isso, a rede (Wi-Fi) do cliente deve estar configurada corretamente para que consiga acessar o sistema Velox via coletor.
Todas as posições da rua devem estar devidamente identificadas com código de barras correspondente a loja.
Operador irá utilizar a tela de “Volumes Exceção” já existente no sistema Velox.
A abertura e fechamento de posição pallet será controlado via tela do coletor, onde o operador visualiza as opções para abertura diretamente no sistema via coletor.
As etiquetas são impressas pelo cliente em sequência ordenada.
Operador verificará as etiquetas que estão no pallet, informando as lojas que pedem esse produto.
Operador, ao chegar na loja informada na etiqueta, deverá realizar a leitura da etiqueta da loja, o sistema Velox solicita a leitura do número do pallet.
Operador inicia leitura dos volumes correspondentes a loja, deve ler a etiqueta de todos os volumes para aquela loja para finalizar.
Ao finalizar, sistema Velox informa o operador que nessa loja foi finalizada.
Verifica a etiqueta da próxima loja, fisicamente se desloca até a loja.
E repete o processo de separação descrito, até se encerre todas as etiquetas das lojas.
Caso o pallet da loja esteja cheio, operador deverá realizar o fechamento desse pallet e abrir um novo para continuar o processo.
As integrações continuarão da mesma forma e momentos, que existe atualmente na operação.
As posições pallets devem estar devidamente identificadas com os nomes das lojas/filiais.
Cada posição atenderá uma única loja/filial.
Operacionalmente:
Operador deverá realizar a leitura do código de barras dos itens que irão ser triados manualmente na operação de “Contingência Sorter” na tela de “Volumes Exceção” do sistema Velox, essa leitura fará a simulação de passagem no sorter e verificação se realmente o produto está devidamente integrado no sistema Velox.
Com o coletor de dados, o operador deverá a posições pallet da loja, antes de iniciar a triagem manual.
Com a posição pallet aberta, deverá acompanhar via coletor os itens esperados na loja conforme realizaram a leitura na tela de “Volumes Exceção”.
Ao realizar a leitura dos volumes do pallet no coletor, Velox indicará a quantidade esperada desse item, operador deverá ler item a item.
Ao realizar a leitura dos itens no coletor, confirma a inclusão do volume na posição pallet da loja.
Com isso o volume é alocado no pallet sistemicamente, até que o operador entenda que o pallet esteja cheio fisicamente.
Ao notar que o pallet está cheio fisicamente, deverá realizar o fechamento do pallet via coletor.
Ao fechar o pallet o sistema Velox, enviará a integração "Aloca PTL" para o WMS (integração existente atualmente).
O volume ao ser alocado no pallet, seja ele por passagem no sorter ou pela operação de contingência, caso passe o mesmo volume no sorter, ele seguirá para rejeito, e assim vice-versa. Pois o sistema já o processou em alguma operação, seja no sorter ou na contingência.
Responsabilidade cliente:
Importante!
Rede: A rede WIFI que o PDV estiver conectado deverá estar na mesma rede do servidor do sorter, para que haja a comunicação entre os equipamentos PDV e Servidor Sorter.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter terá 1 (um) portal de leitura com 1 (uma) câmera na parte superior para leitura de caixas Full Case e 1 (um) scanner lateral para leitura de caixas de fracionados, 08 (oito) rampas com 1 (um) scanners em cada saída e 6 (seis) pallets por saída totalizando 48 (quarenta e oito) posições de pallets e 1 (uma) rampa de rejeito.
As caixas plásticas (fracionados) deverão conter uma etiqueta sequencial de cada lado (impressão WMS), e serão induzidas na esteira pelo colaborador após finalização do Picking (responsabilidade do WMS),
Ao passar pelo portal de leitura o sistema verificara as informações dos volumes:
Em caso de pedido não integrado desvia para conferência.
Em caso de pedido integrado e conferido segue para o sorter e será desviado conforme mapa cadastrado.
As caixas de papelão (full case) deverão conter uma etiqueta na parte superior (impressão WMS), serão induzidas na esteira pelo colaborador, e o WMS enviará a integração para a INVENT sem necessidade de conferência, elas vão passar pelo portal de leitura e desviar na rampa de acordo com o mapa cadastrado sem necessidade de conferência.
Os volumes com etiqueta rasurada, sem etiqueta, etiqueta fora da posição, etiqueta não cadastrada no mapa por erro de integração seguirão para a rampa do rejeito.
Em caso de rampas cheias os volumes também seguiram para a rampa do rejeito.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Contingência Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A operação de "Contingência Sorter" é um procedimento chave dentro do sistema Velox, projetado para lidar com itens que não estão em condições ideais para serem processados pelo sistema de triagem automática (sorter). Essa operação é essencial para garantir a eficiência e a confiabilidade do processo de classificação de itens, mesmo em situações adversas ou excepcionais.
O principal objetivo dessa operação é assegurar que os itens que não atendem aos critérios estabelecidos para o processamento pelo sorter não causem interrupções no fluxo de operação. Itens inadequados podem incluir aqueles com formatos irregulares, tamanhos incompatíveis, entre outros fatores que impeçam a correta identificação e classificação no sorter.
Porém, o sistema Velox estará apto para o funcionamento total, atendendo em sua totalidade de volumes e caixas, independente de tamanho e especificações técnicas, a obrigatoriedade é que o volume a ser triado manualmente ou via sorter, deve estar devidamente integrado no sistema Velox.
Na operação de "Contingência Sorter", operador deverá abrir a posição pallet conforme rua predeterminada pelo cliente.
A operação de “Contingência Sorter”, será utilizada via coletor do cliente, onde o cliente irá acessar o sistema Velox pelo seu coletor.
Lembrando que para isso, a rede (Wi-Fi) do cliente deve estar configurada corretamente para que consiga acessar o sistema Velox via coletor.
Todas as posições da rua devem estar devidamente identificadas com código de barras correspondente a loja.
Operador irá utilizar a tela de “Volumes Exceção” já existente no sistema Velox.
A abertura e fechamento de posição pallet será controlado via tela do coletor, onde o operador visualiza as opções para abertura diretamente no sistema via coletor.
As etiquetas são impressas pelo cliente em sequência ordenada.
Operador verificará as etiquetas que estão no pallet, informando as lojas que pedem esse produto.
Operador, ao chegar na loja informada na etiqueta, deverá realizar a leitura da etiqueta da loja, o sistema Velox solicita a leitura do número do pallet.
Operador inicia leitura dos volumes correspondentes a loja, deve ler a etiqueta de todos os volumes para aquela loja para finalizar.
Ao finalizar, sistema Velox informa o operador que nessa loja foi finalizada.
Verifica a etiqueta da próxima loja, fisicamente se desloca até a loja.
E repete o processo de separação descrito, até se encerre todas as etiquetas das lojas.
Caso o pallet da loja esteja cheio, operador deverá realizar o fechamento desse pallet e abrir um novo para continuar o processo.
As integrações continuarão da mesma forma e momentos, que existe atualmente na operação.
As posições pallets devem estar devidamente identificadas com os nomes das lojas/filiais.
Cada posição atenderá uma única loja/filial.
Operacionalmente:
Operador deverá realizar a leitura do código de barras dos itens que irão ser triados manualmente na operação de “Contingência Sorter” na tela de “Volumes Exceção” do sistema Velox, essa leitura fará a simulação de passagem no sorter e verificação se realmente o produto está devidamente integrado no sistema Velox.
Com o coletor de dados, o operador deverá a posições pallet da loja, antes de iniciar a triagem manual.
Com a posição pallet aberta, deverá acompanhar via coletor os itens esperados na loja conforme realizaram a leitura na tela de “Volumes Exceção”.
Ao realizar a leitura dos volumes do pallet no coletor, Velox indicará a quantidade esperada desse item, operador deverá ler item a item.
Ao realizar a leitura dos itens no coletor, confirma a inclusão do volume na posição pallet da loja.
Com isso o volume é alocado no pallet sistemicamente, até que o operador entenda que o pallet esteja cheio fisicamente.
Ao notar que o pallet está cheio fisicamente, deverá realizar o fechamento do pallet via coletor.
Ao fechar o pallet o sistema Velox, enviará a integração "Aloca PTL" para o WMS (integração existente atualmente).
O volume ao ser alocado no pallet, seja ele por passagem no sorter ou pela operação de contingência, caso passe o mesmo volume no sorter, ele seguirá para rejeito, e assim vice-versa. Pois o sistema já o processou em alguma operação, seja no sorter ou na contingência.
Responsabilidade cliente:
Importante!
Rede: A rede WIFI que o PDV estiver conectado deverá estar na mesma rede do servidor do sorter, para que haja a comunicação entre os equipamentos PDV e Servidor Sorter.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter e PTB (Put to Bag) tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação Invent necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que seja disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web. Desta forma, se faz necessário um navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Informações  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Endpoint de destino (JSON Rest)
Endpoint (JADLOG)
http://192.168.0.82:8080/sorterapi/api/gravaLeitura
http://192.168.0.117:8080/sorterapi/api/gravaLeitura
192.168.0.82:8080 - PRODUÇÃO
192.168.0.117:38085 - HOMOLOGAÇÃO
Autenticação básica (JADLOG) – Token de autenticação
o Usuário / Senha (--------)
POST
Sistema (INVENT)  Sistema (JadLog)
{
"dt": "2022-11-16T20:29:03",
"braco": "34",
"leituras": [
{
"cdBarra": "06041416120673$001513161040"
},
{
"cdBarra": "$11900000095963003311550090015"
},
{
"cdBarra": "$18175600012856001011940000"
},
{
"cdBarra": "$85806095073393021266730090015"
},
{
"cdBarra": "$87305200001718000610000030010"
}
]
}

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Especificações de Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes, ou seja, esta aplicação executará a rotina de sorter e PTB (Put to Bag) tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão de fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho.

---
**Origem:** [I22.1732] 2023 — `PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I22.1732] 2023 — `PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Serão instalados dois níveis de esteiras com sistema de sorter. Cada nível terá capacidade para processar 4 mil caixas por hora, resultando em um fluxo total de 8 mil caixas por hora.
Etiquetagem será de total responsabilidade do cliente.
Os volumes serão classificados em três categorias: caixas de papelão, caixas plásticas e pacotes. Os produtos contidos dentro dessas embalagens serão variados.
Cada nível possui um pré-HPD, para assim redirecionar o volume.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Erro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em caso de um erro no processo de sorter, como por exemplo, um volume ou caixa ser encaminhado para uma gaiola já fechada, uma barragem é acionada ao final da rampa e evita que o produto caia na gaiola, garantindo a organização e integridade dos produtos.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Sinaleiro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Aceso: Indica que a caixa não está na onda ou não
pertence à rampa em questão.
Piscante: Indica que o botão de emergência foi acionado
em algum ponto ao longo da automação, nesse caso
todos os sinaleiros da automação irão piscar, até que
o botão acionado seja revertido.
AMARELO
Piscante: Indica que a rampa já está cheia e não pode
receber mais caixas. Neste caso, o sinaleiro irá piscar
até que a situação seja resolvida pelo operador.
VERDE
Aceso: Indica que a rampa está aberta e
pronta para receber os volumes.
VERDE, AMARELO E VERMELHO
Piscante: Sem comunicação com o sistema.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No caso dos sorters em questão, o rejeito das caixas ocorre apenas em casos de NoRead ou quando a caixa não estiver na onda.
Quando ocorrer um rejeito, a caixa será direcionada automaticamente para uma gaiola no final da linha do térreo. É importante ressaltar que as caixas do segundo nível também serão direcionadas para essa mesma gaiola.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Shein (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Serão instalados dois níveis de esteiras com sistema de sorter. Cada nível terá capacidade para processar 4 mil caixas por hora, resultando em um fluxo total de 8 mil caixas por hora.
Etiquetagem será de total responsabilidade do cliente.
Os volumes serão classificados em três categorias: caixas de papelão, caixas plásticas e pacotes. Os produtos contidos dentro dessas embalagens serão variados.
Cada nível possui um pré-HPD, para assim redirecionar o volume.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Erro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em caso de um erro no processo de sorter, como por exemplo, um volume ou caixa ser encaminhado para uma gaiola já fechada, uma barragem é acionada ao final da rampa e evita que o produto caia na gaiola, garantindo a organização e integridade dos produtos.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Sinaleiro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Aceso: Indica que a caixa não está na onda ou não
pertence à rampa em questão.
Piscante: Indica que o botão de emergência foi acionado
em algum ponto ao longo da automação, nesse caso
todos os sinaleiros da automação irão piscar, até que
o botão acionado seja revertido.
AMARELO
Piscante: Indica que a rampa já está cheia e não pode
receber mais caixas. Neste caso, o sinaleiro irá piscar
até que a situação seja resolvida pelo operador.
VERDE
Aceso: Indica que a rampa está aberta e
pronta para receber os volumes.
VERDE, AMARELO E VERMELHO
Piscante: Sem comunicação com o sistema.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No caso dos sorters em questão, o rejeito das caixas ocorre apenas em casos de NoRead, quando a caixa não estiver na onda ou quando o sensor de gaiola cheia for ativado.
Quando ocorrer um rejeito, a caixa será direcionada automaticamente para uma gaiola no final da linha do térreo. É importante ressaltar que as caixas do segundo nível também serão direcionadas para essa mesma gaiola.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Shein (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Serão instalados dois níveis de esteiras com sistema de sorter. Cada nível terá capacidade para processar 4 mil caixas por hora, resultando em um fluxo total de 8 mil caixas por hora.
Etiquetagem será de total responsabilidade do cliente.
Os volumes serão classificados em três categorias: caixas de papelão, caixas plásticas e pacotes. Os produtos contidos dentro dessas embalagens serão variados.
Cada nível possui um pré-HPD, para assim redirecionar o volume.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Erro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em caso de um erro no processo de sorter, como por exemplo, um volume ou caixa ser encaminhado para uma gaiola já fechada, uma barragem é acionada ao final da rampa e evita que o produto caia na gaiola, garantindo a organização e integridade dos produtos.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Sinaleiro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Aceso: Indica que a caixa não está na onda ou não
pertence à rampa em questão.
Piscante: Indica que o botão de emergência foi acionado
em algum ponto ao longo da automação, nesse caso
todos os sinaleiros da automação irão piscar, até que
o botão acionado seja revertido.
AMARELO
Piscante: Indica que a rampa já está cheia e não pode
receber mais caixas. Neste caso, o sinaleiro irá piscar
até que a situação seja resolvida pelo operador.
VERDE
Aceso: Indica que a rampa está aberta e
pronta para receber os volumes.
VERDE, AMARELO E VERMELHO
Piscante: Sem comunicação com o sistema.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No caso dos sorters em questão, o rejeito das caixas ocorre apenas em casos de NoRead, quando a caixa não estiver na onda ou quando o sensor de gaiola cheia for ativado.
Quando ocorrer um rejeito, a caixa será direcionada automaticamente para uma gaiola no final da linha do térreo. É importante ressaltar que as caixas do segundo nível também serão direcionadas para essa mesma gaiola.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Shein (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Pedidos (Order)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WMSVELOX (POST)
URL DESTINO VELOX: http://
No início do processo WMS irá enviar as informações do volume para o sistema Velox, para que com as informações recebidas consiga realizar a triagem correta no sorter. Com as informações de pedido recebidas do WMS no início do processo, o sistema Velox terá as informações necessárias para realizar o desvio correto no sorter.
Modelo sugerido do JSON que será enviado pelo WMS:
{
	"system_code": "INVENT001",
	"package_no": "BG20230882943",
	"shippment_no": "QM1693363954BR",
	"destination_chutes": [
		"GK001",
		"GK002"
	]
}

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Serão instalados dois níveis de esteiras com sistema de sorter. Cada nível terá capacidade para processar 4 mil caixas por hora, resultando em um fluxo total de 8 mil caixas por hora.
Etiquetagem será de total responsabilidade do cliente.
Os volumes serão classificados em três categorias: caixas de papelão, caixas plásticas e pacotes. Os produtos contidos dentro dessas embalagens serão variados.
Cada nível possui um pré-HPD, para assim direcionar o volume para o lado correto do local de desvio, facilitando assim o desvio correto do volume.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Mapa Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema Velox, dispõe a configuração dos mapas operacionais do sorter, o mapa do sorter será necessário para que os operadores do sistema editem sua operação conforme sua necessidade, adicionando e editando os mapas criados.
Nos mapas, o operador realiza a configuração das rampas com as transportadoras, realizando o vínculo entre elas conforme a sua operação.
Por exemplo: No mapa o operador configurou a rampa 2 vinculada com a transportadora "Anjum", sendo assim, quando esse mapa estiver ativo no sistema Velox, todos os volumes que forem lidos no sorter e forem da transportadora "Anjum", será desviado na rampa 2 conforme configuração do mapa.
Obs.: O sistema Velox necessita de um mapa ativo no sistema, caso não tenha nenhum mapa ativo no sistema Velox, todos os volumes induzidos na esteira seguirão para o rejeito.
O volume ao ser desviado e ao acionar o sensor da rampa de desvio, o Velox envia a integração de "Boxexit" para o WMS com a informação do volume e rampa confirmando o seu correto desvio.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Erro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em caso de um erro no processo de sorter, como por exemplo, um volume ou caixa ser encaminhado para uma gaiola já fechada, uma barragem é acionada ao final da rampa e evita que o produto caia na gaiola, garantindo a organização e integridade dos produtos.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No caso dos sorters em questão, o rejeito das caixas ocorre apenas em casos de NoRead, quando a caixa não estiver na onda ou quando o sensor de gaiola cheia for ativado.
Quando ocorrer um rejeito, a caixa será direcionada automaticamente para uma gaiola no final da linha do térreo. É importante ressaltar que as caixas do segundo nível também serão direcionadas para essa mesma gaiola.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Sinaleiro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Aceso: Indica que a caixa não está na onda ou não
pertence à rampa em questão.
Piscante: Indica que o botão de emergência foi acionado
em algum ponto ao longo da automação, nesse caso
todos os sinaleiros da automação irão piscar, até que
o botão acionado seja revertido.
AMARELO
Piscante: Indica que a rampa já está cheia e não pode
receber mais caixas. Neste caso, o sinaleiro irá piscar
até que a situação seja resolvida pelo operador.
VERDE
Aceso: Indica que a rampa está aberta e
pronta para receber os volumes.
VERDE, AMARELO E VERMELHO
Piscante: Sem comunicação com o sistema.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pela Shein (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 5.docx`  
**Heading:** Rampas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status das rampas do sorter. Devem ser posicionados em uma área de facil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Rampa Cheia
- Verde piscante
Rampa Disponivel
- Verde aceso
Atualização
- Verde piscante
Sistema sem rede
- Verde piscante

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 6.docx`  
**Heading:** Rampas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status das rampas do sorter. Devem ser posicionados em uma área de facil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Rampa Cheia
- Verde piscante
Rampa Disponivel
- Verde aceso
Atualização
- Verde piscante
Sistema sem rede
- Verde piscante

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 7.docx`  
**Heading:** Rampas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status das rampas do sorter. Devem ser posicionados em uma área de facil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Rampa Cheia
- Verde piscante
Rampa Disponivel
- Verde aceso
Atualização
- Verde piscante
Sistema sem rede
- Verde piscante

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Rampas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status das rampas do sorter. Devem ser posicionados em uma área de facil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Rampa Cheia
- Verde piscante
Rampa Disponivel
- Verde aceso
Atualização
- Verde piscante
Sistema sem rede
- Verde piscante

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1.docx`  
**Heading:** Mapa de Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Deve-se de atrelar os clientes por rampa, sendo somente um cliente por rampa, esse mapeamento será usado no processo de desvio, onde o WCS verifica se o pedido que passou no portal possui destino no mapa de sorter e destina o volume para o respectiva rampa/posição. Se não houver, o volume será destinado para o rejeito por motivo “sem rota”.
Observação: O mesmo cliente não pode ser alocado em mais de uma posição.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1.docx`  
**Heading:** Rampas (Totem Luminoso)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras
01 (um) PDV
01 (um) Conversor RS232
No caso do projeto do CD de São Paulo, onde o sorter terá 4 (Quatro) rampas de saída, será necessário 4 (Quatro) unidades de leitores de código de barras e 4 (Quatro) conversores RS232, mencionados acima.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Processo de Operação do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter foi projetado para processar até 5.000 volumes por hora, com base na eficiência da indução. Ele conta com um portal de leitura com 3 faces de leitura (laterais e topo), garantindo que as etiquetas posicionadas nas laterais das caixas sejam lidas corretamente. Essas faces de leitura permitem ao WCS realizar o checkout dos volumes induzidos.
O sistema do Sorter é composto por 12 rampas
11 rampas destinadas ao transporte dos volumes.
1 rampa exclusiva para rejeito.
O processo no Sorter inicia quando o volume passa pelo portal de leitura. A câmera captura a etiqueta do volume, que é então enviada ao Controlador Lógico Programável (CLP). O CLP encaminha as informações ao WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, indicando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme o mapa de sorter ativo, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos devem ter uma etiqueta, que inclui um código de barras ou QR code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão automaticamente direcionados para o rejeito ou reprocessamento, conforme as regras de operação definidas.
Após o desvio dos volumes eles estarão disponíveis para paletização.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Processo de Operação do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter foi projetado para processar até 5.000 volumes por hora, com base na eficiência da indução. Ele conta com um portal de leitura com 3 faces de leitura (laterais e topo), garantindo que as etiquetas posicionadas nas laterais das caixas sejam lidas corretamente. Essas faces de leitura permitem ao WCS realizar o checkout dos volumes induzidos.
O sistema do Sorter é composto por 12 rampas
11 rampas destinadas ao transporte dos volumes.
1 rampa exclusiva para rejeito.
O processo no Sorter inicia quando o volume passa pelo portal de leitura. A câmera captura a etiqueta do volume, que é então enviada ao Controlador Lógico Programável (CLP). O CLP encaminha as informações ao WCS, que realiza a verificação dos dados do pedido associado à etiqueta. Com base nessa verificação, o WCS envia a instrução ao CLP, indicando em qual rampa o volume deve ser desviado.
A separação dos volumes ocorre conforme o mapa de sorter ativo, com volumes sendo desviados automaticamente para as rampas corretas. Para garantir a rastreabilidade e a precisão do processo, todos os volumes induzidos devem ter uma etiqueta, que inclui um código de barras ou QR code.
Volumes que não possuírem uma etiqueta válida ou estiverem sem identificação serão automaticamente direcionados para o rejeito ou reprocessamento, conforme as regras de operação definidas.
Após o desvio dos volumes eles estarão disponíveis para paletização.

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC.docx`  
**Heading:** Dashboard  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Sugestão de dashboard para visualização da operação e acompanhamento das saídas do sorter, onde ele deve mostrar os valores esperados em cada saída e quantidade tratada.
Obs.: A imagem abaixo é de exemplo, as informações mostradas serão discutidas no decorrer do projeto com as informações pertinentes para a operação.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV2.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV2.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Seguirão para rejeito, os volumes com etiqueta rasurada (ilegível pelo portal de leitura), volumes sem etiqueta, rota não mapeada e volumes com rotas/filial não mapeadas no sistema.
Os volumes que realizarem a recirculação no sorter e ultrapassar o valor estipulado de recirculação, serão direcionados ao rejeito.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV2.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV2.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Seguirão para rejeito, os volumes com etiqueta rasurada (ilegível pelo portal de leitura), volumes sem etiqueta, rota não mapeada e volumes com rotas/filial não mapeadas no sistema.
Os volumes que realizarem a recirculação no sorter e ultrapassar o valor estipulado de recirculação, serão direcionados ao rejeito.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV4.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV4.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV4.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Produtividade por rampa de entrada  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar as informações de produtividade por indução do sorter.
Campos:
Quantidade de volumes induzido em cada rampa de entrada.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Rampa de entrada.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Produtividade por balanças  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar a quantidade de volumes tratados em cada balança do sorter.
Campos:
Quantidade de volumes tratados por balança;
Quantidade de volumes pesados (total de todas as balanças do sorter);
Relação percentual entre pesados e tratados por balança;
Quantidade de volumes não pesados;
Erros de pesagem e as respectivas quantidades.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Balança;
Erro.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Produtividade portal de leitura de etiquetas de código de barras  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar a produtividade por portal de leitura do sorter.
Campos:
Quantidade de volumes tratados/lidos por portal de leitura;
Quantidade de volumes lidos (total de todos os portais de leitura do sorter);
Relação percentual entre lidos e tratados por portal;
Quantidade de volumes não lidos (NOREAD);
Erros de leitura do código de barras e quantidades;
Quantidade de volumes sem etiquetas;
Quantidade de volumes com múltiplas leituras (MULTIREAD);
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Portal de leitura;
Erros;
Rampa de entrada.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Performance de produtividade por rampa de saída  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar a produtividade da rampa comparando com a quantidade de volumes rejeitados e desviados corretamente no sorter.
Campos:
Quantidade de volumes desviados por rampa de saída e por regra de desvio;
Quantidade de volumes recirculados por rampa de saída;
Percentual entre os volumes desviados e recirculados;
Regras de desvio: parâmetros utilizados para classificação. Exemplo: peso, rota, destino e outros.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivos de rejeito.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Diário de operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar informações do dia a dia da operação no sorter.
Campos:
Data operacional;
Total de volumes desviados corretamente pelo sorter;
Total de volumes recirculados pelo sorter;
Comparativo dos totais de volumes classificados pelo sorter, pelos totais de recirculados pelo sorter.
Filtros:
Data;
Hora;
Período de data;
Período de hora.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/volumes, ou seja, esta aplicação executará as rotinas de Sorter tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco).
As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade por rampa de entrada  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar as informações de produtividade por indução do sorter.
Campos:
Quantidade de volumes induzido em cada rampa de entrada.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Rampa de entrada.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade por balanças  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar a quantidade de volumes tratados em cada balança do sorter.
Campos:
Quantidade de volumes tratados por balança;
Quantidade de volumes pesados (total de todas as balanças do sorter);
Relação percentual entre pesados e tratados por balança;
Quantidade de volumes não pesados;
Erros de pesagem e as respectivas quantidades.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Balança;
Erro.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade portal de leitura de etiquetas de código de barras  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar a produtividade por portal de leitura do sorter.
Campos:
Quantidade de volumes tratados/lidos por portal de leitura;
Quantidade de volumes lidos (total de todos os portais de leitura do sorter);
Relação percentual entre lidos e tratados por portal;
Quantidade de volumes não lidos (NOREAD);
Erros de leitura do código de barras e quantidades;
Quantidade de volumes sem etiquetas;
Quantidade de volumes com múltiplas leituras (MULTIREAD);
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Portal de leitura;
Erros;
Rampa de entrada.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Performance de produtividade por rampa de saída  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar a produtividade da rampa comparando com a quantidade de volumes rejeitados e desviados corretamente no sorter.
Campos:
Quantidade de volumes desviados por rampa de saída e por regra de desvio;
Quantidade de volumes recirculados por rampa de saída;
Percentual entre os volumes desviados e recirculados;
Regras de desvio: parâmetros utilizados para classificação. Exemplo: peso, rota, destino e outros.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivos de rejeito.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Diário de operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar informações do dia a dia da operação no sorter.
Campos:
Data operacional;
Total de volumes desviados corretamente pelo sorter;
Total de volumes recirculados pelo sorter;
Comparativo dos totais de volumes classificados pelo sorter, pelos totais de recirculados pelo sorter.
Filtros:
Data;
Hora;
Período de data;
Período de hora.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Especificação Hardware de TI  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas/pedidos, ou seja, esta aplicação executará as rotinas de Sorter, tendo como papel fundamental a interface entre o sistema ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que deverá ser disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome, Mozilla Firefox)

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Linha de Sorter, tendo como papel fundamental a interface entre os sistemas WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google Chrome)

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Cenário de desvio por ID (Remessa, ID ou Pedido)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter fará a separação da carga agrupando os volumes por saída com base no padrão configurado no Velox, com as informações de remessa. ID, ou pedido. Neste cenário, será configurada uma máscara padrão por cliente, onde o sorter irá enviar para a mesma rampa de saída todos os volumes que pertencem àquele identificador único. Em uma mesma rampa de saída poderá ser configurado mais de um ID, ou até mesmo uma fila de ID's na mesma saída, em casos em que não houver as informações a caixa será enviada ao rejeito.
Não haverá integração com o WMS.

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

ESPECIFICAÇÃO DE SOFTWARE
SLIM SORTER - CORREIOS
Rev.01
Apresentamos nossa proposta e condições gerais de fornecimento do sistema Velox em referência.
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executara as rotinas de Slim Sorter, tendo como papel fundamental a interface entre os sistemas do cliente com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação Velox e o sistema do cliente através de interface Web e via arquivo json (API REST), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Layout de etiqueta  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O código a ser lido pelo portal de leitura do Slim Sorter será o data matrix de acordo com a imagem abaixo.
O código considerado da etiqueta é o código do quadro amarelo em evidência na imagem abaixo, se trata de um DATA MATRIX de 134 caracteres. Nesse código contém as informações de CEP e código de rastreio, as informações de CEP e código de rastreio serão tratadas pelo Velox e enviadas ao sistema do cliente conforme mencionado nos itens anteriores.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Relatórios  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No sistema Velox, os operadores do sistema Velox, poderão acessar os relatórios de produtividade da automação.
Exemplos de relatórios padrão:
Relatório de produtividade
Relatório mostra quanto foi a produtividade do Slim Sorter por período, e de todos os destinos físicos disponíveis.
Deve ser possivel filtrar por período, destino, objeto.
Relatório de volumes
Relatório mostra as informações aferidas dos volumes induzidos.
Deve ser possivel filtrar por número de objeto, período e destino.
Relatório de integrações
Relatório mostra as informações do que o sistema Velox aferiu de informações como peso, altura, largura e comprimento do volume e o que recebeu de retorno do sistema do cliente, status (validado/não validado) e motivo.
Deve ser possivel filtrar por número de objeto, período, destino, status (validado/não validado) e motivo.
Relatório de rejeito
Relatório mostra informações de volumes que foram direcionados ao rejeito.
Deve ser possivel verificar e identificar o volume, e verificar o motivo de ter sido direcionado ao rejeito.
Deve ser possivel filtrar por número de objeto, período e status (validado/não validado)

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

ESPECIFICAÇÃO DE SOFTWARE
SLIM SORTER - CORREIOS
07/05/2024
Apresentamos nossa proposta e condições gerais de fornecimento do sistema Velox em referência.
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação executara as rotinas de Slim Sorter, tendo como papel fundamental a interface entre os sistemas do cliente com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação Velox e o sistema do cliente através de interface Web e via arquivo json (API REST), desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER.docx`  
**Heading:** Layout de etiqueta  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O código de barras a ser lido pelo portal de leitura do Slim Sorter será o código do objeto e de acordo com a imagem abaixo.
O código de barras considerado da etiqueta é o código do quadro em evidência na imagem abaixo, se trata de um CODE 128 de 13 caracteres sendo 2 letras, 9 números e 2 letras.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER.docx`  
**Heading:** Relatórios  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No sistema Velox, os operadores do sistema Velox, poderão acessar os relatórios de produtividade da automação.
Exemplos de relatórios padrão:
Relatório de produtividade
Relatório mostra quanto foi a produtividade do Slim Sorter por período, e de todos os destinos físicos disponíveis.
Deve ser possivel filtrar por período, destino, objeto.
Relatório de volumes
Relatório mostra as informações aferidas dos volumes induzidos.
Deve ser possivel filtrar por número de objeto, período e destino.
Relatório de integrações
Relatório mostra as informações do que o sistema Velox aferiu de informações como peso, altura, largura e comprimento do volume e o que recebeu de retorno do sistema do cliente, status (validado/não validado) e motivo.
Deve ser possivel filtrar por número de objeto, período, destino, status (validado/não validado) e motivo.
Relatório de rejeito
Relatório mostra informações de volumes que foram direcionados ao rejeito.
Deve ser possivel verificar e identificar o volume, e verificar o motivo de ter sido direcionado ao rejeito.
Deve ser possivel filtrar por número de objeto, período e status (validado/não validado)

---
**Origem:** [Fluxo Sorter] 2024 — `I23.XXXX - ESPECIFICACAO DE SOFTWARE - CODINOME PROJETO.docx`  
**Heading:** Fluxo do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Criado com o objetivo de esclarecer e capacitar nossos operadores, este novo recurso é um mapa detalhado que ilustra o funcionamento intricado e as particularidades de nosso sistema de sorter.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV1.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter fará o desvio dos volumes conforme o mapa cadastrado e ativo no sistema Velox.
O mapa deve ser cadastrado e configurado previamente no sistema Velox.
Todos os volumes induzidos no sorter, devem conter o código de barras integrado no sistema Velox ou estar devidamente etiquetados, em casos que não serão utilizados a inteligência artificial para identificação do volume.
O sorter deverá realizar a identificação do volume de caixa fechada via inteligência artificial conforme mencionado no item anterior, e em casos de volumes que foram separados nos postos de fracionados, deverão conter o QR Code para a identificação do volume e desvio correto no sorter.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto por 7 (sete) rampas de saída, sendo 1 (uma) delas de rejeito.
1 (um) portal de leitura com 3 (três) faces de leitura de códigos de barras e 1 (um) dimensionador.
Cada saída do sorter, poderá atender até 16 (dezesseis) posições pallets, gerenciadas pelo PTM (Put-To-Monitor), nesse caso 1 (uma) saída poderá atender até 16 (dezesseis) pallets diferentes que serão indicadas pelo monitor da saída.
Totalizando 48 (quarenta e oito) posições pallets em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras.
Totalizando 7 (sete) leitores de código de barras.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV2.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter fará o desvio dos volumes conforme o mapa cadastrado e ativo no sistema Velox.
O mapa deve ser cadastrado e configurado previamente no sistema Velox.
Todos os volumes induzidos no sorter, devem conter o código de barras integrado no sistema Velox ou estar devidamente etiquetados, em casos que não serão utilizados a inteligência artificial para identificação do volume.
O sorter deverá realizar a identificação do volume de caixa fechada via inteligência artificial conforme mencionado no item anterior, e em casos de volumes que foram separados nos postos de fracionados, deverão conter o QR Code para a identificação do volume e desvio correto no sorter.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto por 7 (sete) rampas de saída, sendo 1 (uma) delas de rejeito.
1 (um) portal de leitura com 3 (três) faces de leitura de códigos de barras e 1 (um) dimensionador.
Cada saída do sorter, poderá atender até 16 (dezesseis) posições pallets, gerenciadas pelo PTM (Put-To-Monitor), nesse caso 1 (uma) saída poderá atender até 16 (dezesseis) pallets diferentes que serão indicadas pelo monitor da saída.
Totalizando 48 (quarenta e oito) posições pallets em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras.
Totalizando 7 (sete) leitores de código de barras.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV3.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter fará o desvio dos volumes conforme o mapa cadastrado e ativo no sistema Velox.
O mapa deve ser cadastrado e configurado previamente no sistema Velox.
Todos os volumes induzidos no sorter, devem conter o código de barras integrado no sistema Velox ou estar devidamente etiquetados, em casos que não serão utilizados a inteligência artificial para identificação do volume.
O sorter deverá realizar a identificação do volume de caixa fechada via inteligência artificial conforme mencionado no item anterior, e em casos de volumes que foram separados nos postos de fracionados, deverão conter o QR Code para a identificação do volume e desvio correto no sorter.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto por 7 (sete) rampas de saída, sendo 1 (uma) delas de rejeito.
1 (um) portal de leitura com 3 (três) faces de leitura de códigos de barras e 1 (um) dimensionador.
Cada saída do sorter, poderá atender até 16 (dezesseis) posições pallets, gerenciadas pelo PTM (Put-To-Monitor), nesse caso 1 (uma) saída poderá atender até 16 (dezesseis) pallets diferentes que serão indicadas pelo monitor da saída.
Totalizando 48 (quarenta e oito) posições pallets em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras.
Totalizando 7 (sete) leitores de código de barras.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV4.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter fará o desvio dos volumes conforme o mapa cadastrado e ativo no sistema Velox.
O mapa deve ser cadastrado e configurado previamente no sistema Velox.
Todos os volumes induzidos no sorter, devem conter o código de barras integrado no sistema Velox ou estar devidamente etiquetados, em casos que não serão utilizados a inteligência artificial para identificação do volume.
O sorter deverá realizar a identificação do volume de caixa fechada via inteligência artificial conforme mencionado no item anterior, e em casos de volumes que foram separados nos postos de fracionados, deverão conter o QR Code para a identificação do volume e desvio correto no sorter.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto por 7 (sete) rampas de saída, sendo 1 (uma) delas de rejeito.
1 (um) portal de leitura com 3 (três) faces de leitura de códigos de barras e 1 (um) dimensionador.
Cada saída do sorter, poderá atender até 16 (dezesseis) posições pallets, gerenciadas pelo PTM (Put-To-Monitor), nesse caso 1 (uma) saída poderá atender até 16 (dezesseis) pallets diferentes que serão indicadas pelo monitor da saída.
Totalizando 48 (quarenta e oito) posições pallets em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras.
Totalizando 7 (sete) leitores de código de barras.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito do sorter, 01(uma) estação de trabalho (Responsabilidade do Cliente) será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV6.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter fará o desvio dos volumes conforme o mapa cadastrado e ativo no sistema Velox.
O mapa deve ser cadastrado e configurado previamente no sistema Velox.
Todos os volumes induzidos no sorter, devem conter o código de barras integrado no sistema Velox ou estar devidamente etiquetados, em casos que não serão utilizados a inteligência artificial para identificação do volume.
O sorter deverá realizar a identificação do volume de caixa fechada via inteligência artificial conforme mencionado no item anterior, e em casos de volumes que foram separados nos postos de fracionados, deverão conter o QR Code para a identificação do volume e desvio correto no sorter.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto por 7 (sete) rampas de saída, sendo 1 (uma) delas de rejeito.
1 (um) portal de leitura com 3 (três) faces de leitura de códigos de barras e 1 (um) dimensionador.
Cada saída do sorter, poderá atender até 16 (dezesseis) posições pallets, gerenciadas pelo PTM (Put-To-Monitor), nesse caso 1 (uma) saída poderá atender até 16 (dezesseis) pallets diferentes que serão indicadas pelo monitor da saída.
Totalizando 48 (quarenta e oito) posições pallets em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras.
Totalizando 7 (sete) leitores de código de barras.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV7.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter fará o desvio dos volumes conforme o mapa cadastrado e ativo no sistema Velox.
O mapa deve ser cadastrado e configurado previamente no sistema Velox.
Todos os volumes induzidos no sorter, devem conter o código de barras integrado no sistema Velox ou estar devidamente etiquetados, em casos que não serão utilizados a inteligência artificial para identificação do volume.
O sorter deverá realizar a identificação do volume de caixa fechada via inteligência artificial conforme mencionado no item anterior, e em casos de volumes que foram separados nos postos de fracionados, deverão conter o QR Code para a identificação do volume e desvio correto no sorter.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto por 7 (sete) rampas de saída, sendo 1 (uma) delas de rejeito.
1 (um) portal de leitura com 3 (três) faces de leitura de códigos de barras e 1 (um) dimensionador.
Cada saída do sorter, poderá atender até 16 (dezesseis) posições pallets, gerenciadas pelo PTM (Put-To-Monitor), nesse caso 1 (uma) saída poderá atender até 16 (dezesseis) pallets diferentes que serão indicadas pelo monitor da saída.
Totalizando 48 (quarenta e oito) posições pallets em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras.
Totalizando 7 (sete) leitores de código de barras.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter fará o desvio dos volumes conforme o mapa cadastrado e ativo no sistema Velox.
O mapa deve ser cadastrado e configurado previamente no sistema Velox.
Todos os volumes induzidos no sorter, devem conter o código de barras integrado no sistema Velox ou estar devidamente etiquetados, em casos que não serão utilizados a inteligência artificial para identificação do volume.
O sorter deverá realizar a identificação do volume de caixa fechada via inteligência artificial conforme mencionado no item anterior, e em casos de volumes que foram separados nos postos de fracionados, deverão conter o QR Code para a identificação do volume e desvio correto no sorter.
(impressão de etiquetas, responsabilidade do cliente)
O sorter será composto por 7 (sete) rampas de saída, sendo 1 (uma) delas de rejeito.
1 (um) portal de leitura com 3 (três) faces de leitura de códigos de barras e 1 (um) dimensionador.
Cada saída do sorter, poderá atender até 16 (dezesseis) posições pallets, gerenciadas pelo PTM (Put-To-Monitor), nesse caso 1 (uma) saída poderá atender até 16 (dezesseis) pallets diferentes que serão indicadas pelo monitor da saída.
Totalizando 48 (quarenta e oito) posições pallets em toda extensão do sorter.
Cada saída do sorter deve conter um leitor de código de barras.
Totalizando 7 (sete) leitores de código de barras.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Separação PBL / Indução  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a separação de caixas nas posições PBL, após o sistema Velox ter recebido as integrações (pedidos e posições PBL) citadas anteriormente.
Com isso, Velox deverá realizar as validações de sorter conforme a matriz de fragilidade, para liberar apenas as posições dos produtos que se enquadram corretamente para serem separados de acordo com a matriz de fragilidade correta e ordenada.
Operador deverá se direcionar até o PDV mais próximo da rua que irá realizar a separação, no PDV deverá escolher qual a rua que irá operar e a quantidade de etiquetas que deseja imprimir, com isso as etiquetas dos produtos que estão disponíveis para separação, serão impressas conforme a rua escolhida, quantidade e ordenação para evitar movimentos repetidos e desnecessários do operador, as posições que necessitam coleta na rua serão acesas para indicar o local e quantidade a ser separada na posição.
Operador ao chegar na rua, com as etiquetas em mãos, deverá observar as posições acesas e visitar na mesma ordem que estão acesas em direção ao final da rua, próximo a indução do sorter.
Operador ao chegar na posição acesa, deve checar a quantidade solicitada no led e realizar a separação da quantidade e etiquetar volume a volume, com isso deverá colocar esses volumes separados e etiquetados em um pallet de separação, após realizar a separação e etiquetagem de todos os volumes separados na posição, operador aperta o botão da posição PBL para confirmar a separação daquele produto naquela posição (nesse momento será enviada a integração 3.5. Confirmação de Separação Volume PBL).
Operador segue para a próxima posição acesa para repetir o processo de separação e etiquetagem.
Após realizar a separação de todas as posições acesas daquela rua, operador se direciona até o ponto de indução da esteira mais próximo, indicado pela informação na etiqueta de separação, operador induz as caixas individualmente na esteira do sorter correto, para que as caixas sigam para o destino no sorter.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Rejeito do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no sorter, 1 uma estação de trabalho será necessária para verificação dos motivos de rejeito no sorter, bem como as tratativas dessas caixas.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Relatórios do Sistema  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Todos os relatórios devem ter a possibilidade de ser exportado para Excel.
Relatório geral de produtividade
Relatório de produtividade por operador
Relatório de produtividade por rampa
Relatório de status de pedidos
Relatório/dashboard de produtividade sorter, comparativo de quantos caixas estão previstas e quantas já foram processadas.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 1.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Separação de itens controlados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os produtos de categoria P 344, polícia federal/civil serão separados e conferidos individualmente nos locais designados para esses produtos, através do coletor e serão induzidos no sorter como caixa fechada.
NA SEPARAÇÃO DESSES ITENS SERÁ NECESSÁRIO REALIZAR A LEITURA DO ENDEREÇO, INFORMAR A QUANTIDADE COLETADA (APENAS EXIBIÇÃO DO SISTEMA WCS) E LEITURA DO ITEM.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter é composto por 1 portal de leitura que fará o reconhecimento dos volumes e 6 saídas, sendo elas 5 saídas para transporte e 1 saída de rejeito.
Saídas:
O Sorter possuí 5 saídas, sendo elas 4 para transporte (sendo 1 PIN) e 1 para rejeito (Lado Esquerdo).
Saída PIN: Destinada para pedidos que precisam de aprovação ou documentos adicionais. Quando um pedido não for processado automaticamente devido a requisitos específicos (por exemplo, necessidade de aprovação manual ou documentação adicional), ele será direcionado para esta saída.
Cliente tem 4 transportadoras atualmente
O portal de leitura do sorter não possui balança e dimensionador, apenas leitor de código de barras.
O sistema WCS fará a validação do campo “autoBilling” da integração de pedido. Esse campo informará o WCS que o pedido é classificado como Faturamento Automático, e caso seja recebido como falso,se falso segue reto no sorter os volumes desse pedido deverão ser destinados a uma saída especifica determinada pelo cliente e deve estar cadastrada no mapa do sorter no WCS.
Após todos os volumes do pedido, serem lidos no portal do sorter, WCS deverá enviar a integração de “Mensagem de Status” com a informação de “Container Completo” no campo “message” para que o WMS realize o faturamento do pedido.
Alocação do volume via coletor após Desvios do Sorter para Romaneio:
Esta tela via coletor do cliente,será utilizada para alocar os volumes por posição após os desvios do Sorter, facilitando o agrupamento de caixas por pedidos para posterior romaneio (preparação para expedição). Proporcionando uma visão clara do status de cada palete, caixas agrupadas, facilitando o processo expedição.
CADA VOLUME DEVERÁ SER LIDO NA SAIDA E SEMPRE O PRIMEIRO VOLUME DE UM PEDIDO SOLICITARÁ O NOME/CODIGO DA POSIÇÃO QUE ESTARÁ SENDO ALOCADO AQUELE PEDIDO E OS DEMAIS VOLUMES DO MESMO PEDIDO QUE FOREM CHEGANDO NAS SAIDAS DO SORTER DEVEM SER ALOCADOS NO MESMO PALLET.
QUANDO O ÚLTIMO VOLUME DO RESPECTIVO PEDIDO CHEGAR NA POSIÇÃO, SERÁ INFORMADO QUE O PEDIDO FINALIZOU.
O WCS DEVE DISPONIBILIZAR UMA TELA PARA GERENCIAR AS POSIÇÕES E SEUS RESPECTIVOS VOLUMES ALOCADOS.
Exemplo de Exibição: Tabela de Volumes por Palete contendo
ID da Posição: Identificação única do palete.
Número do Pedido: Número do pedido associado ao volume.
Quantidade de Caixas: Número total de caixas agrupadas neste palete.
Status do Palete: Indicação do status atual (Aguardando Conferência, Em Processamento, Pronto para Expedição).
Data de Agrupamento: Data de quando o agrupamento das caixas foi realizado para o palete.
Detalhes volumes: Volumes que estão alocados no pallet

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter é composto por 1 portal de leitura que fará o reconhecimento dos volumes e 6 saídas, sendo elas 5 saídas para transporte e 1 saída de rejeito.
Saídas:
O Sorter possuí 5 saídas, sendo elas 4 para transporte (sendo 1 PIN) e 1 para rejeito (Lado Esquerdo).
Saída PIN: Destinada para pedidos que precisam de aprovação ou documentos adicionais. Quando um pedido não for processado automaticamente devido a requisitos específicos (por exemplo, necessidade de aprovação manual ou documentação adicional), ele será direcionado para esta saída.
Cliente tem 4 transportadoras atualmente
O portal de leitura do sorter não possui balança e dimensionador, apenas leitor de código de barras.
O sistema WCS fará a validação do campo “autoBilling” da integração de pedido. Esse campo informará o WCS que o pedido é classificado como Faturamento Automático, e caso seja recebido como falso, segue reto no sorter os volumes desse pedido deverão ser destinados a uma saída especifica determinada pelo cliente e deve estar cadastrada no mapa do sorter no WCS.
Após todos os volumes do pedido, serem lidos no portal do sorter, WCS deverá enviar a integração de “Mensagem de Status” com a informação de “Container Completo” no campo “message” para que o ERP D365 F&O (GERENCIADOR DE ESTOQUES) realize o faturamento do pedido.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 2.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 3.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 4.docx`  
**Heading:** Separação de itens controlados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os produtos de categoria controlados, como exército, geladeira, controlados, polícia federal/civil, psicotrópicos etc.
Serão separados e conferidos individualmente nos locais designados para esses produtos, e serão induzidos no sorter como caixa fechada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 4.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 5.docx`  
**Heading:** Separação de itens controlados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os produtos de categoria controlados, como exército, geladeira, controlados, polícia federal/civil, psicotrópicos etc.
Serão separados e conferidos individualmente nos locais designados para esses produtos, e serão induzidos no sorter como caixa fechada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 5.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 6.docx`  
**Heading:** Separação de itens controlados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os produtos de categoria controlados, como exército, geladeira, controlados, polícia federal/civil, psicotrópicos etc.
Serão separados e conferidos individualmente nos locais designados para esses produtos, e serão induzidos no sorter como caixa fechada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 6.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 7.docx`  
**Heading:** Separação de itens controlados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os produtos de categoria controlados, como exército, geladeira, controlados, polícia federal/civil, psicotrópicos etc.
Serão separados e conferidos individualmente nos locais designados para esses produtos, e serão induzidos no sorter como caixa fechada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 7.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 8.docx`  
**Heading:** Separação de itens controlados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os produtos de categoria controlados, como exército, geladeira, controlados, polícia federal/civil, psicotrópicos etc.
Serão separados e conferidos individualmente nos locais designados para esses produtos, e serão induzidos no sorter como caixa fechada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 8.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9.docx`  
**Heading:** Separação de itens controlados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os produtos de categoria controlados, como exército, geladeira, controlados, polícia federal/civil, psicotrópicos etc.
Serão separados e conferidos individualmente nos locais designados para esses produtos, através do coletor e serão induzidos no sorter como caixa fechada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter é composto por 1 portal de leitura que fará o reconhecimento dos volumes e 9 saídas, sendo elas 8 saídas para transporte e 1 saída de rejeito.
Saídas:
O Sorter possuí 6 saídas, sendo elas 5 para transporte (sendo 1 PIN) e 1 para rejeito (Lado Esquerdo).
Saída PIN: Destinada para pedidos que precisam de aprovação ou documentos adicionais. Quando um pedido não for processado automaticamente devido a requisitos específicos (por exemplo, necessidade de aprovação manual ou documentação adicional), ele será direcionado para esta saída.
Cliente tem 4 transportadoras atualmente
O portal de leitura do sorter não possui balança e dimensionador, apenas leitor de código de barras.
O sistema WCS fará a validação do campo “autoBilling” da integração de pedido. Esse campo informará o WCS que o pedido é classificado como Faturamento Automatico, e caso seja recebido como falso,se falso segue reto no sorter os volumes desse pedido deverão ser destinados a uma saída especifica determinada pelo cliente e deve estar cadastrada no mapa do sorter no WCS.
Após todos os volumes do pedido, serem desviados na rampa designada do pedido, WCS deverá enviar a integração de “Mensagem de Status” com a informação de “Container Completo” no campo “message” para que o WMS realize o faturamento do pedido.
Tela para visualização de Volumes por Palete após Desvios do Sorter para Romaneio: Esta tela será utilizada para visualizar os volumes por palete após os desvios do Sorter, facilitando o agrupamento de caixas por pedidos para posterior romaneio (preparação para expedição). Proporcionando uma visão clara do status de cada palete, caixas agrupadas, facilitando o processo expedição.
Exemplo de Exibição: Tabela de Volumes por Palete contendo
ID do Palete: Identificação única do palete.
Número do Pedido: Número do pedido associado ao volume.
Quantidade de Caixas: Número total de caixas agrupadas neste palete.
Status do Palete: Indicação do status atual (Aguardando Conferência, Em Processamento, Pronto para Expedição).
Data de Desvio: Data e hora em que o palete foi desviado do sorter.
Data de Agrupamento: Data de quando o agrupamento das caixas foi realizado para o palete.
A tela deve ter filtros de pesquisa para facilitar a busca por paletes e volumes específicos. Os filtros podem incluir:
Data de Desvio: Permite filtrar os paletes pelo intervalo de datas de desvio.
Status do Palete: Filtra os paletes de acordo com seu status atual (Aguardando Conferência, Pronto para Expedição, etc.).
Número do Pedido: Permite buscar paletes específicos por número de pedido.
ID do Palete: Filtro por ID de palete para buscas rápidas.
Exemplo JSON:
{
"workid": "string",
"orders": [
{
"num_order": "string",
"message": "Container completo",
"totalBoxes": 4
}
]
}
O faturamento ocorrerá no WMS. E após ter esse faturamento concluído, no WCS operador deverá tratar esse volume manualmente levando até sua doca de expedição.
A estação de rejeito possuirá uma estação de trabalho para que o operador consiga consultar os volumes que foram destinados ao rejeito, com isso saberá os motivos do volume estar no rejeito, realiza a tratativa do volume e poderá induzir novamente no sorter ou levar até sua rampa correta.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9_Old.docx`  
**Heading:** Separação de itens controlados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os produtos de categoria controlados, como exército, geladeira, controlados, polícia federal/civil, psicotrópicos etc.
Serão separados e conferidos individualmente nos locais designados para esses produtos, através do coletor e serão induzidos no sorter como caixa fechada.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9_Old.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter é composto por 1 portal de leitura que fará o reconhecimento dos volumes e 9 saídas, sendo elas 8 saídas para transporte e 1 saída de rejeito.
Saídas:
O Sorter possuí 6 saídas, sendo elas 5 para transporte sendo 1 PIN e 1 para rejeito (Lado Esquerdo).
Saída PIN: Destinada para pedidos que precisam de aprovação ou documentos adicionais. Quando um pedido não for processado automaticamente devido a requisitos específicos (por exemplo, necessidade de aprovação manual ou documentação adicional), ele será direcionado para esta saída.
Cliente tem 4 transportadoras atualmente
O portal de leitura do sorter não possui balança e dimensionador, apenas leitor de código de barras.
O sistema MFC fará a validação do campo “autoBilling” da integração de pedido. Esse campo informará o MFC que o pedido é classificado como Faturamento Automatico, e caso seja recebido como falso,se falso segue reto no sorter os volumes desse pedido deverão ser destinados a uma saída especifica determinada pelo cliente e deve estar cadastrada no mapa do sorter no MFC.
Após todos os volumes do pedido, serem desviados na rampa designada do pedido, Velox (MFC) deverá enviar a integração de “Mensagem de Status” com a informação de “Container Completo” no campo “message” para que o WMS realize o faturamento do pedido.
Tela para visualização de Volumes por Palete após Desvios do Sorter para Romaneio: Esta tela será utilizada para visualizar os volumes por palete após os desvios do Sorter, facilitando o agrupamento de caixas por pedidos para posterior romaneio (preparação para expedição). Proporcionando uma visão clara do status de cada palete, caixas agrupadas, facilitando o processo expedição.
Exemplo de Exibição: Tabela de Volumes por Palete contendo
ID do Palete: Identificação única do palete.
Número do Pedido: Número do pedido associado ao volume.
Quantidade de Caixas: Número total de caixas agrupadas neste palete.
Status do Palete: Indicação do status atual (Aguardando Conferência, Em Processamento, Pronto para Expedição).
Data de Desvio: Data e hora em que o palete foi desviado do sorter.
Data de Agrupamento: Data de quando o agrupamento das caixas foi realizado para o palete.
A tela deve ter filtros de pesquisa para facilitar a busca por paletes e volumes específicos. Os filtros podem incluir:
Data de Desvio: Permite filtrar os paletes pelo intervalo de datas de desvio.
Status do Palete: Filtra os paletes de acordo com seu status atual (Aguardando Conferência, Pronto para Expedição, etc.).
Número do Pedido: Permite buscar paletes específicos por número de pedido.
ID do Palete: Filtro por ID de palete para buscas rápidas.
Exemplo JSON:
{
"workid": "string",
"orders": [
{
"num_order": "string",
"message": "Container completo",
"totalBoxes": 4
}
]
}
O faturamento ocorrerá no WMS. E após ter esse faturamento concluído, no MFC operador deverá tratar esse volume manualmente levando até sua doca de expedição.
A estação de rejeito possuirá uma estação de trabalho para que o operador consiga consultar os volumes que foram destinados ao rejeito, com isso saberá os motivos do volume estar no rejeito, realiza a tratativa do volume e poderá induzir novamente no sorter ou levar até sua rampa correta.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9_Old.docx`  
**Heading:** Rejeito no Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC.docx`  
**Heading:** Envio de informações  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

VELOX  WMS
Os dados que devem ser enviados (INSERT) do Velox para o WMS são os dados nas tabelas abaixo onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tabela SORTER.GPT_RETORNO_STATUS_INDUZIDO
Nessa tabela o Velox deve retornar o valor do código da etiqueta do pallet “ID_PALLET” após a confirmação de consumo de pallet na tela do Velox, onde o retorno da segunda coluna sempre será S (Sim) ou seja será uma constante, sempre que o operador confirmar um consumo de pallet no Stage através da tela de consumo de pallet do Velox essa informação será inserida na tabela transacional SORTER.GPT_RETORNO_STATUS_INDUZIDO.
Tabela SORTER.GPT_RETORNO_MONTAGEM_PALETES
Nessa tabela o Velox irá retornar as informações dos volumes (caixas) dentro de um mesmo pallet, ou seja, sempre que um pallet for finalizado em um PTL o Velox irá disparas as informações acima, as informações serão inseridas por linha tendo informações repetidas em quase todas as colunas, salva somente a coluna de “CODBARRAETQ” que será a primary key (PK) dessa tabela, onde os valores dessa coluna não poderão se repetir.
Para os dados que devem ser imputados na coluna “CODBARRAETQ” a PK sempre haverá a letra “V” no início do código e o Velox deve devolver a informação exatamente como recebeu na integração (INSERT na tabela INTERMEDIARIA)
O Velox executará uma rotina que a cada fechamento de pallet essas informações serão enviadas automaticamente, e todas as informações de cada volume (CODBARRAETQ) de um mesmo pallet serão enviadas juntas com a flag da coluna “INDOPERACAO” sempre será I indicando um INSERT na tabela, o Velox não realizará atualizações ou exclusão de dados na tabela transacional e na flag da coluna “INDPROCESSADO” sempre será N indicando que todos os volumes do pallet foram enviados para tabela transacional.
Com a leitura do pallet na abertura do PTL o Velox irá receber a letra M no início do código, então na coluna “PALLET” o Velox irá salvar a informação de código do pallet sem a letra M no início do código para que no momento de retornar as informações para o WMS na coluna SEQPALETECAR REG.
NOTA: Todas as informações acima estão comtempladas na documentação enviada pelo time Concinco (PC-Estruturas de Tabelas Transacionais de Retorno _ INVENT → C5-250724-183941).

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com Velox Invent.
A aplicação Velox da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Envio de informações  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

VELOX  WMS
Os dados que devem ser enviados (INSERT) do Velox para o WMS são os dados nas tabelas abaixo onde cada informação deve der enviada de acordo com os dados da especificação abaixo:
Tabela SORTER.GPT_RETORNO_STATUS_INDUZIDO
Nessa tabela o Velox deve retornar o valor do código da etiqueta do pallet “ID_PALLET” após a confirmação de consumo de pallet na tela do Velox, onde o retorno da segunda coluna sempre será S (Sim) ou seja será uma constante, sempre que o operador confirmar um consumo de pallet no Stage através da tela de consumo de pallet do Velox essa informação será inserida na tabela transacional SORTER.GPT_RETORNO_STATUS_INDUZIDO.
Tabela SORTER.GPT_RETORNO_MONTAGEM_PALETES
Nessa tabela o Velox irá retornar as informações dos volumes (caixas) dentro de um mesmo pallet, ou seja, sempre que um pallet for finalizado em um PTL o Velox irá disparas as informações acima, as informações serão inseridas por linha tendo informações repetidas em quase todas as colunas, salva somente a coluna de “CODBARRAETQ” que será a primary key (PK) dessa tabela, onde os valores dessa coluna não poderão se repetir.
Para os dados que devem ser imputados na coluna “CODBARRAETQ” a PK sempre haverá a letra “V” no início do código e o Velox deve devolver a informação exatamente como recebeu na integração (INSERT na tabela INTERMEDIARIA)
O Velox executará uma rotina que a cada fechamento de pallet essas informações serão enviadas automaticamente, e todas as informações de cada volume (CODBARRAETQ) de um mesmo pallet serão enviadas juntas com a flag da coluna “INDOPERACAO” sempre será I indicando um INSERT na tabela, o Velox não realizará atualizações ou exclusão de dados na tabela transacional e na flag da coluna “INDPROCESSADO” sempre será N indicando que todos os volumes do pallet foram enviados para tabela transacional.
Com a leitura do pallet na abertura do PTL o Velox irá receber a letra M no início do código, então na coluna “PALLET” o Velox irá salvar a informação de código do pallet sem a letra M no início do código para que no momento de retornar as informações para o WMS na coluna SEQPALETECAR REG.
NOTA: Todas as informações acima estão comtempladas na documentação enviada pelo time Concinco (PC-Estruturas de Tabelas Transacionais de Retorno _ INVENT → C5-250724-183941).

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Dashboard  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Sugestão de dashboard para visualização da operação e acompanhamento das saídas do sorter, onde ele deve mostrar os valores esperados em cada saída e quantidade tratada.
Obs.: A imagem abaixo é de exemplo, as informações mostradas serão discutidas no decorrer do projeto com as informações pertinentes para a operação.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Mapa de sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento do sorter contemplando seu mapa de destinos (rotas) e suas verificações como o processo de checkout o Velox terá disponível os cenários abaixo:

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Alocação no PTM  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o mapa sorter teremos a possibilidade de inserir o pedido diretamente na posição PTM na tela de mapa sorter, onde será possível atrelar somente um pedido por posição PTM.
Ao inserir o pedido no PTM, o mesmo ficará com prioridade máxima para saída.
Ao finalizar a alocação de todos os volumes do mesmo pedido no pallet o Velox irá indicar o fechamento de pallet como mencionado no item Fechamento de PTM. Após o fechamento, o Velox tirará o pedido da posição no mapeamento permitindo uma nova alocação de um novo pedido.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Abertura de PTM  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Velox realiza o vínculo de pedido a posição PTM de maneira automática conforme os volumes forem passando no portal do sorter, o Velox identifica qual será a transportadora que fará o transporte dos volumes verificando para qual rampa o volume deve ir e atrela o pedido a posição PTM, sendo assim, teremos um pedido com vários volumes em uma única posição de PTM.
Será condicionado o fator de liberação dos volumes para separação no Full Case e fracionado de acordo com as posições disponíveis nos PTM.
EX: Se em uma onda vier 10 (dez) pedidos para transportadora “Gala” e tiver somente 2 (duas) rampas destinadas a essa transportadora totalizando 8 (oito) posições PTM, o Velox permite a separação simultânea dos primeiros 8 (pedidos) que forem iniciados em suas áreas e quando algum dos PTM  das rampas destinadas a transportadora “Gala” for encerrado, Velox libera os próximos pedidos para serem impressos e separados.
Todas as 4 posições que serão indicadas pelas TVs terão uma cor fixa onda de acordo com a mesma cor a área demarcada para alocar o pallet fisicamente, para que o operador possa identificar com facilidade qual pallet fisicamente corresponde a qual posição PTM.
NOTA: O time do cliente deve definir antes da data de teste in loco as cores padrões de cada uma das 4 posições.
Etiquetas de posições PTM serão fixas e serão coladas na estrutura de suporte do PTM para melhor acessibilidade dos colaboradores quando precisarem fechar o pallet.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Rampas do Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Honeywell (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
01 (um) Tela/monitor – Ex: Tv Samsung.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 01.docx`  
**Heading:** Mapa de sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento do sorter contemplando seu mapa de destinos (rotas) e suas verificações como o processo de checkout o Velox terá disponível os cenários abaixo:

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 01.docx`  
**Heading:** Alocação manual  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o mapa sorter teremos a possibilidade de inserir o pedido diretamente na posição PTM na tela de mapa sorter, onde será possível atrelar somente um pedido por posição PTM.
Ao finalizar a alocação de todos os volumes do mesmo pedido no pallet o Velox irá indicar o fechamento de pallet como mencionado no item 12.3. Fechamento de PTM, após o fechamento do pallet o Velox tirará o pedido da posição no mapeamento permitindo uma nova alocação de um novo pedido.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 01.docx`  
**Heading:** Exceções para tratava de volumes (VIP)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Todos os volumes com a identificação vip devem ser atrelados a uma posição PTM como informado no item 11.2. Alocação manual, essa informação é primordial para que o tratamento do volume no sorter ocorra de maneira correta, após esse vínculo o Velox irá fechar automaticamente o pallet e indicara ao operado no PTM como mencionado no item 12.3. Fechamento de PTM.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 01.docx`  
**Heading:** Abertura de PTM  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Velox realiza o vínculo de pedido a posição PTM de maneira automática conforme os volumes forem passando no portal do sorter, o Velox identifica qual será a transportadora que fará o transporte dos volumes verificando para qual rampa o volume deve ir e atrela o pedido a posição PTM, sendo assim, teremos um pedido com vários volumes em uma única posição de PTM.
Será condicionado do fator de liberação dos volumes para separação  no Full Case de acordo com as posições disponíveis nos PTM.
EX: Se em uma onda vier 10 (dez) pedidos para transportadora “Gala” e tiver somente 2 (duas) rampas destinadas a essa transportadora totalizando 8 (oito) posições PTM, o Velox enviará para tela de Order Start somente 8 (pedidos) e quando algum dos PTM  das rampas destinadas a transportadora “Gala” for encerrado o Velox libera os próximos pedidos para serem impressos e separados.
Para realizar a abertura do PTM é necessário previamente imprimir uma etiqueta de pallet no WCS Velox, onde o operador irá informar através de um scanner de mão, qual a posição (PTM), código do operador e código do pallet, para realizar essa abertura teremos códigos fixos dispostos ao redor das rampas, para que o operador possa realizar a abertura do pallet e logo em seguida colar a etiqueta de pallet no pallet físico para melhor identificação do volume.
O processo de abertura de posição PTM consiste em realizara a leitura primeiro da posição de PTM, logo em seguida a leitura do código do operador e pôr fim a leitura do código do pallet, assim finalizando o processo de abertura de pallet e o vínculo de posição, operador e pallet.
Todas as 4 posições que serão indicadas pelas TVs terão uma cor fixa onda de acordo com a mesma cor a área demarcada para alocar o pallet fisicamente, para que o operador possa identificar com facilidade qual pallet fisicamente corresponde a qual posição PTM
NOTA: O time do cliente deve definir antes da data de teste in loco as cores padrões de cada uma das 4 posições.
Etiquetas de posições PTM serão fixas e serão coladas na estrutura de suporte do PTM.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Alocação manual  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o mapa sorter teremos a possibilidade de inserir o pedido diretamente na posição PTM na tela de mapa sorter, onde será possível atrelar somente um pedido por posição PTM.
Ao finalizar a alocação de todos os volumes do mesmo pedido no pallet o Velox irá indicar o fechamento de pallet como mencionado no item 12.3. Fechamento de PTM, após o fechamento do pallet o Velox tirará o pedido da posição no mapeamento permitindo uma nova alocação de um novo pedido.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Exceções para tratava de volumes (VIP)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Todos os volumes com a identificação vip devem ser atrelados a uma posição PTM como informado no item 11.2. Alocação manual, essa informação é primordial para que o tratamento do volume no sorter ocorra de maneira correta, após esse vínculo o Velox irá fechar automaticamente o pallet e indicara ao operado no PTM como mencionado no item 12.3. Fechamento de PTM.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES -.docx`  
**Heading:** Composição e Funcionalidade  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter é equipado com um portal de leitura, que utiliza uma câmera para identificar os volumes.
Não possui balança, dimensionador ou outras câmeras integradas.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES -.docx`  
**Heading:** Configuração das Saídas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter conta com cinco saídas:
Quatro saídas destinadas ao transporte, uma para cada transportadora ativa.
Uma saída de rejeito, localizada no final do transportador, para volumes não identificados ou com inconsistências.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES -.docx`  
**Heading:** Seladoras Pré-Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Antes das rampas do sorter, existem duas seladoras (shrink machines).
A operação dessas máquinas é de responsabilidade da Andreani.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES -.docx`  
**Heading:** Cadastro de Rotas e Mapeamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cadastro de Rotas
Todas as rotas devem ser cadastradas previamente no sistema MFC, antes da criação do mapa de sorter.
Essa tarefa é de responsabilidade da Andreani.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES -.docx`  
**Heading:** Mapa de Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

o O mapa de sorter será criado no sistema MFC, vinculando cada rota a uma rampa do sorter, respeitando a configuração do projeto.
O mapeamento também é responsabilidade da Andreani.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 1.docx`  
**Heading:** SORTER  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Composição e Funcionalidade
O sorter é equipado com um portal de leitura, que utiliza uma câmera para identificar os volumes.
Não possui balança, dimensionador ou outras câmeras integradas.
Configuração das Saídas
O sorter conta com cinco saídas:
Quatro saídas destinadas ao transporte, uma para cada transportadora ativa.
Uma saída de rejeito, localizada no final do transportador, para volumes não identificados ou com inconsistências.
Seladoras Pré-Sorter
Antes das rampas do sorter, existem duas seladoras (shrink machines).
A operação dessas máquinas é de responsabilidade da Andreani.
Cadastro de Rotas e Mapeamento
Cadastro de Rotas
Todas as rotas devem ser cadastradas previamente no sistema MFC, antes da criação do mapa de sorter.
Essa tarefa é de responsabilidade da Andreani.
Mapa de Sorter
O mapa de sorter será criado no sistema MFC, vinculando cada rota a uma rampa do sorter, respeitando a configuração do projeto.
O mapeamento também é responsabilidade da Andreani.
Fechamento de Pallet
Processo de Fechamento
O sistema MFC disponibilizará uma tela para o fechamento de pallets.
Procedimento:
Selecionar qual rampa será realizado o fechamento do pallet.
O operador deverá escanear o código do pallet no sistema MFC.
O sistema registrará o código e associará os volumes ao pallet correspondente.
Quando o pallet atingir sua capacidade máxima, o operador deverá fechá-lo no sistema e iniciar um novo pallet, seguindo o mesmo fluxo.
Regras Específicas
Um pallet não poderá ser fechado se ainda houver volumes pendentes para o pedido associado.
O PLC será responsável por enviar a confirmação de desvio de cada volume para o sistema MFC, garantindo agilidade e precisão no processo.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** SORTER  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Composição e Funcionalidade
O sorter é equipado com um portal de leitura, que utiliza uma câmera para identificar os volumes.
Não possui balança, dimensionador ou outras câmeras integradas.
Configuração das Saídas
O sorter conta com cinco saídas:
Quatro saídas destinadas ao transporte, uma para cada transportadora ativa.
Uma saída de rejeito, localizada no final do transportador, para volumes não identificados ou com inconsistências.
Seladoras Pré-Sorter
Antes das rampas do sorter, existem duas seladoras (shrink machines).
A operação dessas máquinas é de responsabilidade da Andreani.
Cadastro de Rotas e Mapeamento
Cadastro de Rotas
Todas as rotas devem ser cadastradas previamente no sistema MFC, antes da criação do mapa de sorter.
Essa tarefa é de responsabilidade da Andreani.
Mapa de Sorter
O mapa de sorter será criado no sistema MFC, vinculando cada rota a uma rampa do sorter, respeitando a configuração do projeto.
O mapeamento também é responsabilidade da Andreani.
Fechamento de Pallet
Processo de Fechamento
O sistema MFC disponibilizará uma tela para o fechamento de pallets.
Procedimento:
Selecionar qual rampa será realizado o fechamento do pallet.
O operador deverá escanear o código do pallet no sistema MFC.
O sistema registrará o código e associará os volumes ao pallet correspondente.
Quando o pallet atingir sua capacidade máxima, o operador deverá fechá-lo no sistema e iniciar um novo pallet, seguindo o mesmo fluxo.
Regras Específicas
Um pallet não poderá ser fechado se ainda houver volumes pendentes para o pedido associado.
O PLC será responsável por enviar a confirmação de desvio de cada volume para o sistema MFC, garantindo agilidade e precisão no processo.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Contingência Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A operação de "Contingência Sorter" é um procedimento chave dentro do sistema Velox, projetado para lidar com itens que não estão em condições ideais para serem processados pelo sistema de triagem automática (sorter). Essa operação é essencial para garantir a eficiência e a confiabilidade do processo de classificação de itens, mesmo em situações adversas ou excepcionais.
O principal objetivo dessa operação é assegurar que os itens que não atendem aos critérios estabelecidos para o processamento pelo sorter não causem interrupções no fluxo de operação. Itens inadequados podem incluir aqueles com formatos irregulares, tamanhos incompatíveis, entre outros fatores que impeçam a correta identificação e classificação no sorter.
Porém, o sistema estará apto para o funcionamento total, atendendo em sua totalidade de volumes e caixas, independente de tamanho e especificações técnicas, a obrigação é que o volume a ser triado manualmente deve estar devidamente integrado no sistema Velox.
Na operação de "Contingência Sorter", operador deverá abrir a posição pallet conforme rua predeterminada pelo cliente.
A abertura e fechamento de posição pallet será idêntica ao formato existente atualmente na operação.
As integrações continuarão da mesma forma e momentos, que existe atualmente na operação.
Deverá existir apenas 1 (um) leitor de código de barras no PDV
As posições pallets devem estar devidamente identificadas com os nomes das lojas/filiais.
As posições pallets devem estar devidamente com as etiquetas de abertura, fechamento e reset de posição.
Cada posição atenderá uma única loja/filial.
Operacionalmente:
Com um leitor de código de barras, o operador deverá abrir todas as posições pallet, antes de iniciar a triagem manual.
Com as posições pallet abertas, deverá acompanhar em um PDV.
Com o mesmo leitor de código de barras, operador realiza a leitura dos volumes.
Ao realizar a leitura dos volumes, no PDV, Velox indicará qual a posição pallet, código loja filial, deve alocar o volume lido.
Ao alocar o volume na posição, deverá confirmar via PDV a inclusão do volume na posição pallet indicado.
Com isso o volume é alocado no pallet sistemicamente, até que o operador entenda que o pallet esteja cheio fisicamente.
Ao notar que o pallet está cheio fisicamente, deverá realizar a leitura da etiqueta de fechamento de pallet.
Ao fechar o pallet o sistema Velox, enviará a integração "Aloca PTL" para o WMS.
O volume ao ser alocado no pallet, seja ele por passagem no sorter ou pela operação de contingência, caso passe o mesmo volume no sorter, ele seguirá para rejeito, e assim vice-versa. Pois o sistema já o processou em alguma operação, seja no sorter ou na contingência.
Equipamentos: Responsabilidade cliente
Importante!
Rede: A rede WIFI que o PDV estiver conectado deverá estar na mesma rede do servidor do sorter, para que haja a comunicação entre os equipamentos PDV e Servidor Sorter.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Contingência Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A operação de "Contingência Sorter" é um procedimento chave dentro do sistema Velox, projetado para lidar com itens que não estão em condições ideais para serem processados pelo sistema de triagem automática (sorter). Essa operação é essencial para garantir a eficiência e a confiabilidade do processo de classificação de itens, mesmo em situações adversas ou excepcionais.
O principal objetivo dessa operação é assegurar que os itens que não atendem aos critérios estabelecidos para o processamento pelo sorter não causem interrupções no fluxo de operação. Itens inadequados podem incluir aqueles com formatos irregulares, tamanhos incompatíveis, entre outros fatores que impeçam a correta identificação e classificação no sorter.
Porém, o sistema Velox estará apto para o funcionamento total, atendendo em sua totalidade de volumes e caixas, independente de tamanho e especificações técnicas, a obrigatoriedade é que o volume a ser triado manualmente ou via sorter, deve estar devidamente integrado no sistema Velox.
Na operação de "Contingência Sorter", operador deverá abrir a posição pallet conforme rua predeterminada pelo cliente.
A operação de “Contingência Sorter”, será utilizada via coletor do cliente, onde o cliente irá acessar o sistema Velox pelo seu coletor.
Lembrando que para isso, a rede (Wi-Fi) do cliente deve estar configurada corretamente para que consiga acessar o sistema Velox via coletor.
Todas as posições da rua devem estar devidamente identificadas com código de barras correspondente a loja.
Operador irá utilizar a tela de “Volumes Exceção” já existente no sistema Velox.
A abertura e fechamento de posição pallet será controlado via tela do coletor, onde o operador visualiza as opções para abertura diretamente no sistema via coletor.
As etiquetas são impressas pelo cliente em sequência ordenada.
Operador verificará as etiquetas que estão no pallet, informando as lojas que pedem esse produto.
Ao chegar na loja informada na etiqueta, deverá realizar a leitura da etiqueta da loja o sistema Velox solicita a leitura do número do pallet.
Operador inicia leitura dos volumes correspondentes a loja, deve ler a etiqueta de todos os volumes para aquela loja para finalizar.
Ao finalizar, sistema Velox informa o operador que nessa loja foi finalizada.
Verifica a etiqueta da próxima loja, fisicamente se desloca até a loja.
E repete o processo de separação descrito, até se encerre todas as etiquetas das lojas.
Caso o pallet da loja esteja cheio, operador deverá realizar o fechamento desse pallet e abrir um novo para continuar o processo.
As integrações continuarão da mesma forma e momentos, que existe atualmente na operação.
As posições pallets devem estar devidamente identificadas com os nomes das lojas/filiais.
Cada posição atenderá uma única loja/filial.
Operacionalmente:
Operador deverá realizar a leitura do código de barras dos itens que irão ser triados manualmente na operação de “Contingência Sorter” na tela de “Volumes Exceção” do sistema Velox, essa leitura fará a simulação de passagem no sorter e verificação se realmente o produto está devidamente integrado no sistema Velox.
Com o coletor de dados, o operador deverá a posições pallet da loja, antes de iniciar a triagem manual.
Com a posição pallet aberta, deverá acompanhar via coletor os itens esperados na loja conforme realizaram a leitura na tela de “Volumes Exceção”.
Ao realizar a leitura dos volumes do pallet no coletor, Velox indicará a quantidade esperada desse item, operador deverá ler item a item.
Ao realizar a leitura dos itens no coletor, confirma a inclusão do volume na posição pallet da loja.
Com isso o volume é alocado no pallet sistemicamente, até que o operador entenda que o pallet esteja cheio fisicamente.
Ao notar que o pallet está cheio fisicamente, deverá realizar o fechamento do pallet via coletor.
Ao fechar o pallet o sistema Velox, enviará a integração "Aloca PTL" para o WMS (integração existente atualmente).
O volume ao ser alocado no pallet, seja ele por passagem no sorter ou pela operação de contingência, caso passe o mesmo volume no sorter, ele seguirá para rejeito, e assim vice-versa. Pois o sistema já o processou em alguma operação, seja no sorter ou na contingência.
Responsabilidade cliente:
Importante!
Rede: A rede WIFI que o PDV estiver conectado deverá estar na mesma rede do servidor do sorter, para que haja a comunicação entre os equipamentos PDV e Servidor Sorter.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface com o sistema de controle da automação CLP Invent.
A aplicação Velox (MFC) da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Mapa Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Mapa Sorter é a funcionalidade (tela) do Velox que permite a criação de 1 (um) ou mais mapas do sorter, é necessário o cadastro de destinos para realizar o vínculo dos destinos/rota as rampas.
As rampas serão cadastradas pelo time Invent, todas as interações do time Beira Rio com o Velox serão previamente explicadas junto ao treinamento sistêmico que será ministrado junto ao time operacional do CD em Candelária.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter será composto de 2 (duas) induções e 13 (treze) rampas de saída sendo 12 (doze) rampas para desvios efetivos de acordo com seu mapa de destinos e rampas e 1 (uma) rampa para desvio de erros, a rampa de rejeito.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A rampa de rejeito presente no final do Sorter irá receber os volumes que se classificam em 4 situações sendo as seguintes situações:
Sem leitura (NoRead) – Ocorre quando a câmera do portal de leitura não consegui fazer a leitura do código QR code presente na caixa ou não há etiqueta presente na caixa, com isso o CLP envia a informação de sem leitura para o Velox e ele direciona o volume para o rejeito, assim o volume será tratado por um operador e após a correção ou adição da etiqueta que deve conter as informações da rota o volume deve ser induzido novamente no Sorter antes do portal de leitura.
Sem rota – Ocorre quando a câmera consegue efetuar a leitura do código QR code e o CLP envia a informação recebida da câmera ao Velox, ele por sua vez procura o código em sua base de destino e não encontra, assim direcionando o volume para que o operador cadastre a rota no Velox e vincule a mesma no mapa do Sorter e o volume deve ser induzido novamente no Sorter antes do portal de leitura.
Sem mapa – Ocorre quando a câmera consegue efetuar a leitura do código QR code e o CLP envia a informação recebida da câmera ao Velox, ele por sua vez procura o código em sua base de destino e encontra a rota, porém, não há rampa vinculada no mapa do Sorter para esse destino, o operador deve fazer o vínculo da rota a rampa no mapa do sorter e o volume deve ser induzido novamente no Sorter antes do portal de leitura.
MultiRead – Ocorre quando mais de um código QR code está visível para câmera no momento da leitura, assim ela informa ao CLP que existe mais de um código lido e o CLP envia a mensagem de MultiRead para o Velox. Ao volume chegar no rejeito o operador deve retirar um dos códigos e inserir novamente o volume antes do portal de leitura.
Rampa cheia – Ocorre quando todo processo de leitura no portal e validações do Velox estão corretos, porém, quando o volume chega ao desviador da sua rampa de destino a mesma está cheia de caixas acionando o sensor de acúmulo, assim o volume é enviado para o rejeito, esse caso também é informado pelo sinaleiro.

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Sinaleiro  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os sinaleiros são dispositivos que indicam o status de uma determinada área do sorter. Devem ser posicionados em uma área de fácil visualização para o operador, auxiliando-os na identificação e controle do fluxo de produtos no processo do sorter.
Os sinaleiros estarão divididos em três cores diferentes:
VERMELHO
Piscante: Indica que o botão de emergência foi acionado
em algum ponto ao longo da automação, nesse caso
todos os sinaleiros da automação irão piscar, até que
o botão acionado seja revertido.
AMARELO
Piscante: Indica que a rampa já está cheia e não pode
receber mais caixas. Neste caso, o sinaleiro irá piscar
até que a situação seja resolvida pelo operador.
VERDE
Aceso: Indica que a rampa está aberta e
pronta para receber os volumes.
VERDE, AMARELO E VERMELHO
Piscante: Sem comunicação com o sistema Velox.
APAGADO
Indica que a rampa está fechada e não pode
receber os volumes.
Com o uso dos sinaleiros obtemos diversas vantagens, dentre elas, estão um maior controle de fluxo, aumento da produtividade, melhoria na precisão, evitando muitos erros e aumentando a qualidade no processo.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** SORTER  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Composição e Funcionalidade
O sorter é equipado com um portal de leitura, que utiliza uma câmera para identificar os volumes.
Não possui balança, dimensionador ou outras câmeras integradas.
Configuração das Saídas
O sorter conta com cinco saídas:
Quatro saídas destinadas ao transporte, uma para cada transportadora ativa.
Uma saída de rejeito, localizada no final do transportador, para volumes não identificados ou com inconsistências.
Seladoras Pré-Sorter
Antes das rampas do sorter, existem duas seladoras (shrink machines).
A operação dessas máquinas é de responsabilidade da Andreani.
Cadastro de Rotas e Mapeamento
Cadastro de Rotas
Todas as rotas devem ser cadastradas previamente no sistema MFC, antes da criação do mapa de sorter.
Essa tarefa é de responsabilidade da Andreani.
Mapa de Sorter
O mapa de sorter será criado no sistema MFC, vinculando cada rota a uma rampa do sorter, respeitando a configuração do projeto.
O mapeamento também é responsabilidade da Andreani.
Fechamento de Pallet
Processo de Fechamento
O sistema MFC disponibilizará uma tela para o fechamento de pallets.
Procedimento:
Selecionar qual rampa será realizado o fechamento do pallet.
O operador deverá escanear o código do pallet no sistema MFC.
O sistema registrará o código e associará os volumes ao pallet correspondente.
Quando o pallet atingir sua capacidade máxima, o operador deverá fechá-lo no sistema e iniciar um novo pallet, seguindo o mesmo fluxo.
Regras Específicas
Um pallet não poderá ser fechado se ainda houver volumes pendentes para o pedido associado.
O PLC será responsável por enviar a confirmação de desvio de cada volume para o sistema MFC, garantindo agilidade e precisão no processo.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Sorter terá capacidade de processar até 3.000 volumes/hora.
O equipamento será composto por 1 rampa de indução e 1 portal de leitura com 3 faces (uma superior e duas laterais), garantindo a leitura completa dos volumes e permitindo que o WCS realize o processo de checkout para pedidos do tipo Full Case e Fracionado.
Ao longo de toda a extensão do sorter, haverá 8 rampas de saída destinadas à separação de pedidos e 1 rampa exclusiva para volumes rejeitados, totalizando 9 rampas.
O processo operacional consiste em:
O portal de leitura captura o código da caixa e envia a informação ao CLP (Controlador Lógico).
O CLP encaminha os dados ao WCS, que consulta sua base para verificar os detalhes do pedido associado à etiqueta.
Com base nessa validação, o WCS instrui o CLP sobre a rampa de destino do volume.
O desvio dos volumes é realizado de acordo com o mapa de destinos cadastrado e ativo no WCS, que define, para cada tipo de volume ou pedido, a rampa de saída correspondente.
Todos os volumes induzidos no sorter devem possuir código de barras reconhecido ou estar devidamente etiquetados. Volumes sem identificação ou com etiquetas inválidas serão direcionados para o rejeito ou reprocessamento, conforme regras operacionais.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A rampa de rejeito recebe volumes que se enquadram em seis situações distintas:
Sem leitura (NoRead): O portal de leitura não consegue identificar o código da caixa ou não há etiqueta presente. O volume é enviado para rejeito e deve ser corrigido e reinserido no sorter antes do portal de leitura.
Sem rota: A leitura é realizada, mas o WCS não encontra a rota do volume. O operador deve cadastrar a rota e vinculá-la ao mapa do sorter antes de reinserir o volume.
Sem mapa: A leitura é realizada e a rota existe no WCS, mas não há rampa vinculada no mapa do sorter. O operador deve vincular a rota à rampa correta e reinserir o volume.
MultiRead: Mais de um QR code que atinge os parametros configurados na câmera está visível para a câmera no momento da leitura. O operador retira o código extra, corrige a caixa e reinserir antes do portal de leitura.
Rampa cheia: Quando a rampa de destino está cheia, o sensor de acúmulo dispara e o volume é enviado ao rejeito. Essa situação também é sinalizada pelo sinaleiro.
Cancelamento: Quando uma ordem de serviço é cancelada pelo WMS, o volume é enviado para rejeito.
Volumes que possuírem etiqueta, mas forem rejeitados devido a inconsistências de leitura, rota ou mapa, são tratados como exceções operacionais. Uma nova etiqueta será gerada, substituindo a anterior e garantindo que o sistema considere apenas a rota atualizada.
Alteração do Status para "Na Rampa":
Quando a caixa no rejeito for corrigida e lida corretamente, seu status será atualizado para "na rampa" e o operador será informado da rampa de destino.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Sorter  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sorter terá um portal com 2 (duas) faces (lados) de leitura, uma de topo e lateral e conta com 3 (três) saídas para atrelar diversas rotas e 1 (uma) saída para rejeito totalizando 4 (quatro) rampas ao todo.
O processo do sorter consistem na leitura do volume/caixa no portal de leitura onde a automação (CLP) informa ao WCS qual volume (pedido) que acaba de passar no portal de leitura, o WCS por sua vez verifica em sua base de dados as informações referentes ao pedido em questão e devolve a informação de desvio daquele pedido para automação (CLP) que realiza a tarefa (física) de desvio na rampa indicada.

---
**Origem:** [I22.170] 2025 — `ESPECIFICACAO DE SOFTWARE - ADITIVO - Portal Kognex.docx`  
**Heading:** Comunicação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os dois portais Cognex instalados na linha serão integrados diretamente ao PLC da Invent, responsável pelo controle do sorter.
A comunicação seguirá o padrão de protocolo Invent para portais, no qual o PLC atuará como intermediário entre o hardware de leitura Cognex e a aplicação WCS Velox.
O WCS Velox receberá os dados de leitura do PLC, processará as informações e executará o envio ao endpoint da C&A conforme descrito no item 2.1.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Contingência do Sorter (IA)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade invent.

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Cancelamento de Volumes (Avarias)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema VELOX deve oferecer uma tela específica com a funcionalidade de excluir volumes que estão aguardando processamento pelo sorter. Essa funcionalidade será essencial em situações como:
Avarias na caixa.
Problemas de leitura que impeçam o processamento adequado.
Nesses casos, o volume será devolvido ao estoque e excluído dos registros do VELOX.
Para realizar o cancelamento, será necessário autenticar um usuário com as permissões adequadas para executar essa ação. Após a conclusão do cancelamento, o sistema deve enviar a integração mencionada no item Cancelamento de Remessas, permitindo que o WMS execute os processos subsequentes.
Na tela só deve apresentar volumes que não foram alocados nos pallets (volumes que foram lidos no scanner da saídas das rampas)

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Contingência do Sorter (IA)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade invent.

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Cancelamento de Volumes (Avarias)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema VELOX deve oferecer uma tela específica com a funcionalidade de excluir volumes que estão aguardando processamento pelo sorter. Essa funcionalidade será essencial em situações como:
Avarias na caixa.
Problemas de leitura que impeçam o processamento adequado.
Nesses casos, o volume será devolvido ao estoque e excluído dos registros do VELOX.
Para realizar o cancelamento, será necessário autenticar um usuário com as permissões adequadas para executar essa ação. Após a conclusão do cancelamento, o sistema deve enviar a integração mencionada no item Cancelamento de Remessas, permitindo que o WMS execute os processos subsequentes.
Na tela só deve apresentar volumes que não foram alocados nos pallets (volumes que foram lidos no scanner da saídas das rampas)

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 1.docx`  
**Heading:** Resposta  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WMS → WCS
O WMS/Reply responderá com as informações de autorização e destino.
Sugestão JSON:
{
"tarefa": 123456,
"etiqueta": "123456789",
"faturado": true,
"rota": "XYZ"
}
faturado: indica se o volume está apto (true/false);
rota: número da rampa de saída no sorter.
Volumes não autorizados ou timeout: Caso o volume não esteja autorizado ou o tempo de resposta exceda o limite parametrizado, o WCS direcionará o volume para recirculação.
Essa recirculação ocorrerá até atingir a quantidade máxima de voltas parametrizada previamente. Ultrapassado esse limite, o volume será enviado para o rejeito.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** CrossDocking  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus respectivos volumes, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS não interfere na ordem de indução, uma vez que o foco é garantir que os volumes sejam direcionados para as posições específicas, conforme a operação de crossdocking.
O operador deverá levar ao pallet próximo a uma área de indução da automação e consumir o pallet para informar ao WCS que os volumes serão induzidos.
Os volumes relacionados à operação de CrossDocking devem ser encaminhados exclusivamente para as posições de PTLs configuradas especificamente para esse tipo de operação, evitando qualquer mistura com os volumes que atendem às lojas normais. Essa separação é essencial para manter a integridade do processo logístico, garantindo que os volumes de crossdocking sejam tratados de forma isolada, conforme as necessidades do processo, e não sejam misturados com os demais volumes destinados ao atendimento regular das lojas.
Dessa forma, o WCS assegura que os volumes de CrossDocking sejam tratados de maneira eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo das operações padrão.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas de Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Zaffari) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (instalação do banco PostgreSQL).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Ocorrências  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em caso de avaria, extravio e necessidade de cancelamento, para que o Sorter pare de aguardá-lo e para que o WMS realize a tratativa necessária, o processo de abertura e tratamento de ocorrências será realizado conforme o fluxo descrito abaixo.
Para iniciar o processo, o operador deve acessar a tela de "Volumes" no sistema WCS. A partir daí, o operador deve filtrar por um dos códigos do produto ou descrição e selecionar um dos volumes na lista que estiver com o status diferente de finalizado. Ao clicar em abrir ocorrência, o WCS exibirá um pop-up solicitando que o operador informe o motivo da ocorrência.
Caso haja mais de um volume a ser tratado, o operador pode realizar esse processo para todos os volumes necessários. Após a abertura da ocorrência, os volumes que precisam ser tratados devem ser acessados na tela de Ocorrências, onde o WCS exibirá uma lista de todos os volumes com ocorrência aberta, ordenada por Destino (LOJA).
O operador pode selecionar um ou mais volumes para aprovar ou não a ocorrência. Caso ele selecione Cancelar, o WCS desconsiderará essas ocorrências selecionadas e finalizará o registro delas internamente. Se o operador selecionar Aprovar, ele deverá filtrar e selecionar apenas volumes do mesmo destino por vez. Após selecionar todos os volumes que deseja aprovar a ocorrência (cancelamento), o WCS solicitará a leitura de uma master.
Após a leitura da master e confirmação o WCS irá disparar a integração dos volumes agrupados pela master lida para o WMS, sinalizando o cancelamento dos volumes e permitindo o prosseguimento do processo com a devida tratativa. O WCS deve permitir que o operador utilize uma master que já foi utilizada no processo de Ocorrências e o WMS deve aceitar a mesma master mais de uma vez.
Esse processo garante a precisão na identificação e controle dos volumes que necessitam de cancelamento, permitindo que o WMS tome as ações necessárias, como o tratamento do volume ou ajuste nas movimentações logísticas.
4.1.2. Especificação de Volumes Induzidos no Sorter
Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:
4.1.4. Contingência do Sorter (IA)
A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá disponibilizar a tela para caso se faça necessária.

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** CrossDocking  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No processo de CrossDocking, a operação informa o pallet recebido, juntamente com seus respectivos volumes, para que sejam devidamente desviados no sorter. Nesse cenário, o WCS não interfere na ordem de indução, uma vez que o foco é garantir que os volumes sejam direcionados para as posições específicas, conforme a operação de crossdocking.
O operador deverá levar ao pallet próximo a uma área de indução da automação e consumir o pallet para informar ao WCS que os volumes serão induzidos.
Os volumes relacionados à operação de CrossDocking devem ser encaminhados exclusivamente para as posições de PTLs configuradas especificamente para esse tipo de operação, evitando qualquer mistura com os volumes que atendem às lojas normais. Essa separação é essencial para manter a integridade do processo logístico, garantindo que os volumes de crossdocking sejam tratados de forma isolada, conforme as necessidades do processo, e não sejam misturados com os demais volumes destinados ao atendimento regular das lojas.
Dessa forma, o WCS assegura que os volumes de CrossDocking sejam tratados de maneira eficiente e organizada, com a devida priorização nas posições de PTLs, sem comprometer o fluxo das operações padrão.
