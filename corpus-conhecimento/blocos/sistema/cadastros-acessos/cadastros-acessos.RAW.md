# cadastros-acessos.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Tela de endereços  
**Score:** — (semantico) | **ID:** 165bc92e430051d3

Será disponibilizada no WCS uma tela específica para consulta, acompanhamento e gestão dos endereços logísticos, com o objetivo de oferecer visibilidade operacional, controle e apoio à tomada de decisão sobre todas as localizações físicas utilizadas no processo.
Essa tela centralizará as informações referentes aos endereços cadastrados no sistema, permitindo ao usuário visualizar, identificar e organizar as áreas operacionais de forma estruturada, conforme sua finalidade dentro do fluxo logístico.
Localizações contempladas:
Stage de Pallets
Área de Recebimento
Área de Análise de Corte
Posições de Picking
A funcionalidade permitirá:
Visualização completa de todos os endereços cadastrados no WCS
Segmentação das localizações por setor e tipo de operação
Aplicação de filtros por setor, facilitando a navegação e análise das informações

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Autenticação  
**Score:** — (semantico) | **ID:** 30364f7846c3791b

Para a autenticação entre os sistemas WCS WCS e ERP D365 F&O (GERENCIADOR DE ESTOQUES) do cliente será utilizado a API padrão do Azure AD (Microsoft Entra) via protocolo SAML.
Referência:
https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/view-applications-portal

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Autenticação via SSO  
**Score:** — (semantico) | **ID:** e32a56cf7e54f071

O acesso dos usuários ao sistema deverá ser realizado exclusivamente por meio de SSO (Single Sign-On). garantindo a segurança centralizada, melhor experiência do usuário e gestão unificada de credenciais.
Fluxo do Processo de Autenticação:
Redirecionamento ao Provedor de Identidade (IdP): Ao tentar acessar o sistema, o usuário é redirecionado automaticamente para o IdP corporativo (por exemplo, Azure AD, Keycloak, ou outro conforme definido pela empresa).
Autenticação no IdP: O usuário informa suas credenciais no IdP. Caso já tenha uma sessão ativa com esse provedor, o login é instantâneo e transparente (sem novo input de senha).
Geração de Token de Autenticação: Após validação das credenciais, o IdP emite um token de autenticação seguro (SAML).
Validação no Sistema: O sistema recebe e valida esse token, concedendo acesso ao usuário com base nas permissões definidas no diretório central.
Acesso a Outros Sistemas: Uma vez autenticado, o mesmo token pode ser reutilizado para acessar outros sistemas integrados à mesma infraestrutura SSO, sem nova autenticação.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Identificação do Operador  
**Score:** — (semantico) | **ID:** b114642358d8910a

O operador responsável pela conferência será registrado, com o e-mail do operador SSO (Single Sign-On).
Isso permitirá a rastreabilidade do operador e ajudará a identificar qualquer problema relacionado a erros de separação ou de conferência.

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Integrações  
**Score:** — (semantico) | **ID:** 6c6058e22ebe4d7b

Para o correto funcionamento de todo o processo da automação a operação irá importar dados via excel para alimentar o WCS e ser realizado as validações e triagens necessárias.
Teremos 3 tipos de importações possíveis: picking map, Base de equipamento CLARO (todos os macAdress) e Nota fiscal.
Todas as informações de cada planilha importada como estrutura, tipo de dados, quais dados são relevantes serão explicitas abaixo.
Segue as integrações abaixo:

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Triagem dos itens  
**Score:** — (semantico) | **ID:** f1a520624563b068

O pallet será recebido próximo à célula de trabalho, onde o operador deverá informar a nota fiscal e o destino de origem que dará início ao processo. Após a seleção da nota, não será permitido alterná-la até que seja totalmente conferida ou finalizada pela operação em função de falta de materiais. No final da conferência, o sistema WCS deve realizar automaticamente o comparativo entre os itens esperados na nota fiscal e os itens efetivamente conferidos ou triados, registrando também os itens não processados (corte).
O sistema WCS deve permitir para usuários cadastrados com permissão MASTER poder acessar notas fiscais que foram finalizadas e reabrir a conferência em caso de erro operacional na finalização da Nota, ou em caso de identificar itens excedentes.
Os produtos serão recebidos em caixas de papelão e caixas plásticas; estas últimas contêm apenas um item e são identificadas por um QR Code que reúne todos os MAC Address dos equipamentos pertencentes àquele volume. Ao ler esse QR Code, o sistema WCS deve considerar automaticamente como válidos todos os itens nele contidos e exibir as informações no PDV para validação do operador.
Em casos que não haja este código QrCode, será lido o Mac Adress de cada item do volume para validação do WCS.
No PDV deverão ser exibidos os MAC Address lidos juntamente com o respectivo SKU a que pertencem, permitindo a validação visual pelo operador. O botão de divergência deve funcionar de forma passiva no PDV — permanecendo visível, porém sem ação até ser acionado pelo operador. Somente quando acionado, deverá abrir um pop-up para que o operador informe a divergência identificada. Após o registro da divergência, o equipamento deverá ser direcionado automaticamente para a posição de anomalia parametrizada pela operação. Nos casos em que não houver QR Code, essa validação também será realizada de forma unitária.
Há produtos, como modens, que são chamados de "Kits", pois além de validar o MAC Address do equipamento, também será necessária a leitura do SimCard. O SimCard não será validado pelo WCS, mas deverá ser registrado no relatório de Notas Fiscais se o SimCard lido estava conforme o esperado, caso fosse diferente, qual seria o código, ou se não havia SimCard. O WCS deve disponibilizar uma maneira de registrar que o produto foi recebido sem o cartão. O WCS saberá se o produto necessita ou não dessa segunda leitura com base na planilha importada no início da operação.
Cada item que será realizado a triagem pode seguir por 3 caminhos distintos:

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Processo de Picking Exceção  
**Score:** — (semantico) | **ID:** c22a64d80075de56

O Picking Exceção será utilizado para itens que não se enquadram nos parâmetros da automação, mas que devem ser alocados manualmente no processo de Aloca Pallet. O fluxo operacional será semelhante ao processo de Full Case, mas com a diferença de que os itens não farão parte da automação e serão direcionados manualmente para a rampa ou alocação nos pallets.
Fluxo Operacional de Picking Exceção:
O operador realiza o login no WCS utilizando o coletor Android.
O operador seleciona a tela de Order Start Picking Exceção, onde escolhe o posto de impressão em que está fisicamente para retirar as etiquetas.
Após selecionar o posto de impressão, o operador escolhe a rua da qual ele irá fazer o Picking Exceção. O sistema exibirá a lista de tarefas de separação de acordo com a rua selecionada e os volumes disponíveis.
As tarefas de Picking Exceção serão segregadas por rampa do Sorter, permitindo que o operador saiba para qual rampa deve levar os itens após a coleta.
Início da tarefa:
O WCS determina automaticamente a quantidade de itens a coletar na leva, respeitando os parâmetros de:
peso máximo do pallet de coleta; e
cubagem máxima do pallet de coleta.
O peso e cubagem máxima será cadastrada em uma tela de parâmetros do WCS.
O WCS imprime as etiquetas referente aquela tarefa de separação, seguindo a lógica de impressão do processo de Full Case.
O operador realiza a separação e consolida os itens no pallet correspondente à Tarefa.
O coletor é direcionado para a tela de coleta, onde o operador deve se deslocar até o endereço especificado no coletor.
O operador realiza a leitura do endereço para iniciar a coleta do item.
O operador confirma a quantidade separada e realiza a leitura do código do item.
O operador se desloca para o próximo endereço e repete o processo até concluir todas as coletas.
Destinação a Rampa:
Após finalizar todas as coletas, o WCS informará em qual rampa do sorter os itens coletados deverão ser direcionados.
O comportamento do processo na rampa estará condicionado ao parâmetro de paletização por transportadora, conforme descrito a seguir:
Parâmetro de Paletização por Transportadora Ativo:
Os volumes coletados ficarão disponíveis na rampa para o operador responsável pelo processo de Aloca Pallet.
O operador deverá realizar a alocação manual de cada volume em sua respectiva posição de pallet.
Cada volume será associado à um RG de pallet, sendo obrigatória a confirmação da alocação no WCS.
O WCS somente considerará o volume como expedido após a confirmação da alocação no pallet.
As informações de vínculo entre volumes e RG de pallet serão integradas conforme o processo de Aloca Pallet.
Parâmetro de Paletização por Transportadora Inativo:
Não será necessário realizar o processo de Aloca Pallet.
O operador deverá realizar a leitura individual de cada volume no PRIX fixo instalado ao final da rampa, sinalizando a chegada física do volume na rampa.
A leitura no PRIX será utilizada pelo WCS para:
Confirmar a chegada do volume na rampa de destino;
Atualizar o status operacional e o dashboard do WCS.
Não haverá vínculo de volumes com RG de pallet nesse cenário.
Esse processo de Picking Exceção garante que itens que não se enquadram no fluxo automatizado sejam tratados manualmente de forma controlada, assegurando rastreabilidade, visibilidade operacional e aderência aos parâmetros definidos por transportadora.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Se a Transportadora Realiza Paletização  
**Score:** — (semantico) | **ID:** 88b5fcd69a7f79a7

Ao marcar “Sim”, o sistema habilita o processo de agrupamento:
Agrupamento por Transportador Rota
Cada rampa gera pallets separados por Transportadora + Rota.
O coletor orienta o operador a colocar cada volume no pallet correto.
O WCS registra a quantidade de volumes por pallet.
O WCS envia a integração de fechamento quando o pallet é concluído.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Validação na Rampa  
**Score:** — (semantico) | **ID:** f5640c55bcd993e8

Em cada rampa, haverá um leitor de código de barras que realizará o processo de Validação após o desvio do volume na rampa, conforme descrito a seguir:
Leitura do Volume: O leitor captura o código do volume presente na rampa.
Validação do WCS: O WCS verifica se o volume está alocado na rampa correta de acordo com o mapa de destinos.
Sinaleiro: O WCS envia uma instrução ao PLC para acender o sinaleiro:
Verde: O volume está na rampa correta.
Vermelho: O volume está na rampa incorreta.
Esse processo garante a validação final do desvio de cada volume, permitindo rápida identificação de inconsistências e auxiliando a operação a manter a precisão e rastreabilidade dos pedidos, porém não é obrigatória.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Alocação de Volumes no Pallet  
**Score:** — (semantico) | **ID:** efca929c384c74d7

Quando um volume chega à ponta da rampa, o operador realiza a leitura da etiqueta do volume 
Após isso, o WCS verifica se já existe um pallet ativo associado à mesma transportadora e rota daquele volume.
Se já existir pallet para aquela rota/transportadora:
O coletor exibirá a posição do pallet onde o volume deve ser alocado.
Se ainda não existir pallet para aquela rota/transportadora:
O coletor solicitará ao operador que informe uma posição física de pallet.
Após leitura dessa posição, ela passa a ser utilizada para todos os próximos volumes da mesma rota/transportadora.
Fluxo operacional do Aloca Pallet:
Coletar o volume na ponta da rampa.
Ler a etiqueta do volume gerada pelo velox.
O WCS indicará no coletor a posição do pallet.
O operador deposita o volume no pallet.
O operador realiza a leitura do código de barras da posição do pallet para confirmar a alocação.
Caso o operador informe uma posição diferente da indicada pelo sistema, o WCS apresentará mensagem de erro, orientando o operador a informar a posição correta.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Tela de Gestão de Endereços  
**Score:** — (semantico) | **ID:** de278af4522655c3

O WCS disponibilizará uma tela destinada ao cadastro, alteração e exclusão de endereços. Nesta tela, o operador poderá ativar ou inativar um endereço conforme a necessidade operacional.
O sistema somente permitirá alterar o status de endereços que não possuam coleta prevista já integrada. Caso o operador tente ativar ou inativar um endereço que tenha coleta prevista já integrada, o WCS exibirá uma mensagem de erro informando que não é possível alterar o status devido à existência de coletas previstas para o endereço.
Os endereços terão classificação EX: “Pulmão”, “Fullcase”, “Fracionado” e “Misto” (pode coletar fullcase e fracionado) o WCS deve priorizar a coleta em endereços de picking, mandando para coleta no pulmão somente itens que não possuem posições de picking fora da linha de fracionados.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Controle de Estoque de Duas Empresas Diferentes  
**Score:** — (semantico) | **ID:** 017c0ba4a47bc68e

O WCS será responsável pelo controle de estoque de duas empresas distintas no mesmo ambiente de automação. Para garantir que não haja confusão ou mistura dos produtos, o WCS não permitirá o compartilhamento de estoque entre as empresas. Cada empresa terá seu estoque segregado e controlado de forma independente.
Na coleta de itens, o WCS identificará a empresa responsável pelo produto que está sendo coletado, garantindo que cada empresa retire apenas os itens de seu próprio estoque. Durante o processo de separação, o sistema garantirá que os produtos de uma empresa não sejam alocados nas posições de picking de outra, preservando a integridade e a rastreabilidade de cada empresa.
O controle de quantidade e lote será específico para cada empresa, assegurando que os dados de estoque e movimentação sejam mantidos de forma separada e precisa para ambas as empresas.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Ocorrências  
**Score:** — (semantico) | **ID:** 3aa32d87b25f91e2

As ocorrências são geradas quando o WCS identifica uma discrepância nos dados durante o processo de auditoria ou quando ocorrer um shorpicking. Cada tarefa de ocorrência será registrada e deve ser tratada da seguinte maneira:
Geração da Tarefa: Quando uma divergência é identificada, o sistema cria uma tarefa de ocorrência.
Duplo Check: O operador realiza a auditoria novamente para a posição de estoque ou item onde foi encontrada a divergência, realizando um duplo check para confirmar a quantidade real ou identificar alocações erradas.
Fechamento da Ocorrência: Após o duplo check e a validação, a tarefa de ocorrência é concluída e o WCS atualiza os registros, garantindo a precisão dos dados no sistema.
Sobra: Quando for constatado uma sobra no processo de auditoria, o operador deve retirar o item que sobrou da posição e realizar a tratativa do item, se for necessário devolver esse item para coleta o WMS deve realizar a integração deste item novamente

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Processo de Movimentação Forçada de Estoque  
**Score:** — (semantico) | **ID:** b232558bcf1fe8f9

O processo de movimentação forçada de estoque é utilizado para movimentar produtos das posições de picking ou do transfer de acordo com as necessidades da operação.
Remoção de Itens:
O operador realiza o login no WCS utilizando o coletor android e acessa a tela de movimentação forçada de estoque.
A tela exibirá uma lista de itens que estão alocados a um endereço. O operador poderá visualizar os itens junto com suas quantidades.
Remoção do Item:
O operador começa realizando a leitura do endereço correspondente ao item. Após isso, ele seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a remoção.
Alocação do Item:
Após a retirada do item o WCS deve indicar a posição desse item no transfer caso exista. O operador então pode seguir até o endereço indicado realiza a leitura do código do endereço e confirma a quantidade e realizar a leitura do EAN do item em questão. Caso a movimentação seja para o transfer o WCS nesse momento dispara a integração atualizando o saldo da posição final ao WMS.
O processo de movimentação forçada de estoque permite à operação a flexibilidade de movimentar o estoque, seja para itens no transfer ou nas posições de picking, sempre garantindo que as informações estejam atualizadas e que a rastreabilidade de todos os itens removidos seja mantida.
Este processo facilita a gestão de estoques, assegurando que o WCS tenha controle total sobre a movimentação de produtos, permitindo a movimentação de itens de acordo com a demanda e necessidade operacional.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Tela de Gestão de Endereços  
**Score:** — (semantico) | **ID:** afb12bef73322600

O WCS disponibilizará uma tela destinada ao cadastro, alteração e exclusão de endereços. Nesta tela, o operador poderá ativar ou inativar um endereço conforme a necessidade operacional.
O sistema somente permitirá alterar o status de endereços que não possuam coleta prevista já integrada. Caso o operador tente ativar ou inativar um endereço que tenha coleta prevista já integrada, o WCS exibirá uma mensagem de erro informando que não é possível alterar o status devido à existência de coletas previstas para o endereço.
Os endereços terão classificação EX: “Pulmão”, “Fullcase”, “Fracionado” e “Misto” (pode coletar fullcase e fracionado) o WCS deve priorizar a coleta em endereços de picking, mandando para coleta no pulmão somente itens que não possuem posições de picking fora da linha de fracionados.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Controle de Estoque de Duas Empresas Diferentes  
**Score:** — (semantico) | **ID:** 4f305fc8ab891365

O WCS será responsável pelo controle de estoque de duas empresas distintas no mesmo ambiente de automação. Para garantir que não haja confusão ou mistura dos produtos, o WCS não permitirá o compartilhamento de estoque entre as empresas. Cada empresa terá seu estoque segregado e controlado de forma independente.
Na coleta de itens, o WCS identificará a empresa responsável pelo produto que está sendo coletado, garantindo que cada empresa retire apenas os itens de seu próprio estoque. Durante o processo de separação, o sistema garantirá que os produtos de uma empresa não sejam alocados nas posições de picking de outra, preservando a integridade e a rastreabilidade de cada empresa.
O controle de quantidade e lote será específico para cada empresa, assegurando que os dados de estoque e movimentação sejam mantidos de forma separada e precisa para ambas as empresas.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Ocorrências  
**Score:** — (semantico) | **ID:** 964a46757a8f86d6

As ocorrências são geradas quando o WCS identifica uma discrepância nos dados durante o processo de auditoria ou quando ocorrer um shorpicking. Cada tarefa de ocorrência será registrada e deve ser tratada da seguinte maneira:
Geração da Tarefa: Quando uma divergência é identificada, o sistema cria uma tarefa de ocorrência.
Duplo Check: O operador realiza a auditoria novamente para a posição de estoque ou item onde foi encontrada a divergência, realizando um duplo check para confirmar a quantidade real ou identificar alocações erradas.
Fechamento da Ocorrência: Após o duplo check e a validação, a tarefa de ocorrência é concluída e o WCS atualiza os registros, garantindo a precisão dos dados no sistema.
Sobra: Quando for constatado uma sobra no processo de auditoria, o operador deve retirar o item que sobrou da posição e realizar a tratativa do item, se for necessário devolver esse item para coleta o WMS deve realizar a integração deste item novamente

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Processo de Movimentação Forçada de Estoque  
**Score:** — (semantico) | **ID:** b7915ceb6e0a20ba

O processo de movimentação forçada de estoque é utilizado para movimentar produtos das posições de picking ou do transfer de acordo com as necessidades da operação.
Remoção de Itens:
O operador realiza o login no WCS utilizando o coletor android e acessa a tela de movimentação forçada de estoque.
A tela exibirá uma lista de itens que estão alocados a um endereço. O operador poderá visualizar os itens junto com suas quantidades.
Remoção do Item:
O operador começa realizando a leitura do endereço correspondente ao item. Após isso, ele seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a remoção.
Alocação do Item:
Após a retirada do item o WCS deve indicar a posição desse item no transfer caso exista. O operador então pode seguir até o endereço indicado realiza a leitura do código do endereço e confirma a quantidade e realizar a leitura do EAN do item em questão. Caso a movimentação seja para o transfer o WCS nesse momento dispara a integração atualizando o saldo da posição final ao WMS.
O processo de movimentação forçada de estoque permite à operação a flexibilidade de movimentar o estoque, seja para itens no transfer ou nas posições de picking, sempre garantindo que as informações estejam atualizadas e que a rastreabilidade de todos os itens removidos seja mantida.
Este processo facilita a gestão de estoques, assegurando que o WCS tenha controle total sobre a movimentação de produtos, permitindo a movimentação de itens de acordo com a demanda e necessidade operacional.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Tela de Gestão de Endereços  
**Score:** — (semantico) | **ID:** 59b886d724e0b4d9

O WCS disponibilizará uma tela destinada ao cadastro, alteração e exclusão de endereços. Nesta tela, o operador poderá ativar ou inativar um endereço conforme a necessidade operacional.
O sistema somente permitirá alterar o status de endereços que não possuam coleta prevista já integrada. Caso o operador tente ativar ou inativar um endereço que tenha coleta prevista já integrada, o WCS exibirá uma mensagem de erro informando que não é possível alterar o status devido à existência de coletas previstas para o endereço.
Os endereços terão classificação EX: “Pulmão”, “Fullcase”, “Fracionado” e “Misto” (pode coletar fullcase e fracionado) o WCS deve priorizar a coleta em endereços de picking, mandando para coleta no pulmão somente itens que não possuem posições de picking fora da linha de fracionados.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Controle de Estoque de Duas Empresas Diferentes  
**Score:** — (semantico) | **ID:** d1da83ada3ae2748

O WCS será responsável pelo controle de estoque de duas empresas distintas no mesmo ambiente de automação. Para garantir que não haja confusão ou mistura dos produtos, o WCS não permitirá o compartilhamento de estoque entre as empresas. Cada empresa terá seu estoque segregado e controlado de forma independente.
Na coleta de itens, o WCS identificará a empresa responsável pelo produto que está sendo coletado, garantindo que cada empresa retire apenas os itens de seu próprio estoque. Durante o processo de separação, o sistema garantirá que os produtos de uma empresa não sejam alocados nas posições de picking de outra, preservando a integridade e a rastreabilidade de cada empresa.
O controle de quantidade e lote será específico para cada empresa, assegurando que os dados de estoque e movimentação sejam mantidos de forma separada e precisa para ambas as empresas.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Ocorrências  
**Score:** — (semantico) | **ID:** 67c08d755e892045

As ocorrências são geradas quando o WCS identifica uma discrepância nos dados durante o processo de auditoria ou quando ocorrer um shorpicking. Cada tarefa de ocorrência será registrada e deve ser tratada da seguinte maneira:
Geração da Tarefa: Quando uma divergência é identificada, o sistema cria uma tarefa de ocorrência.
Duplo Check: O operador realiza a auditoria novamente para a posição de estoque ou item onde foi encontrada a divergência, realizando um duplo check para confirmar a quantidade real ou identificar alocações erradas.
Fechamento da Ocorrência: Após o duplo check e a validação, a tarefa de ocorrência é concluída e o WCS atualiza os registros, garantindo a precisão dos dados no sistema.
Sobra: Quando for constatado uma sobra no processo de auditoria, o operador deve retirar o item que sobrou da posição e realizar a tratativa do item, se for necessário devolver esse item para coleta o WMS deve realizar a integração deste item novamente

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Processo de Movimentação Forçada de Estoque  
**Score:** — (semantico) | **ID:** be6a39bb633e4f73

O processo de movimentação forçada de estoque é utilizado para movimentar produtos das posições de picking ou do transfer de acordo com as necessidades da operação.
Remoção de Itens:
O operador realiza o login no WCS utilizando o coletor android e acessa a tela de movimentação forçada de estoque.
A tela exibirá uma lista de itens que estão alocados a um endereço. O operador poderá visualizar os itens junto com suas quantidades.
Remoção do Item:
O operador começa realizando a leitura do endereço correspondente ao item. Após isso, ele seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a remoção.
Alocação do Item:
Após a retirada do item o WCS deve indicar a posição desse item no transfer caso exista. O operador então pode seguir até o endereço indicado realiza a leitura do código do endereço e confirma a quantidade e realizar a leitura do EAN do item em questão. Caso a movimentação seja para o transfer o WCS nesse momento dispara a integração atualizando o saldo da posição final ao WMS.
O processo de movimentação forçada de estoque permite à operação a flexibilidade de movimentar o estoque, seja para itens no transfer ou nas posições de picking, sempre garantindo que as informações estejam atualizadas e que a rastreabilidade de todos os itens removidos seja mantida.
Este processo facilita a gestão de estoques, assegurando que o WCS tenha controle total sobre a movimentação de produtos, permitindo a movimentação de itens de acordo com a demanda e necessidade operacional.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Indução Volumes  
**Score:** — (semantico) | **ID:** b6390592f798a73e

A indução de volumes será gerenciada e cadenciada pelo WMS, que controlará as regras de prioridade e a matriz de fragilidade de cada produto. O processo começa com o WMS, que realiza o processo de separação e deixa os paletes das tarefas que foram concluídas em uma área chamada “Stage In”, nesse momento é enviado uma integração para cada pallet que for finalizado. Com essas informações, o WCS gera uma listagem orientativa de forma sequencial de indução, onde informa qual pallet deve ser induzido em cada momento, respeitando as condições de disponibilidade e prioridade e matriz de fragilidade.
A partir da integração dos paletes enviada pelo WMS o WCS já deve permitir que aqueles volumes sejam liberados para desvio no sorter e alocação em seus respectivos PTLs.
O WCS não supervisiona o processo de indução, por solicitação do cliente esse processo será controlado pela Operação, e é sua responsabilidade que o controle de indução dos volumes ocorra de acordo com a prioridade e a matriz de fragilidade previamente definida, otimizando o desempenho do sistema de automação.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Pallet Box  
**Score:** — (semantico) | **ID:** 77ff2b48a63d092d

Método de separação será gerido pelo WMS ordem de serviço (OS TIPO 17/23) e ocorrerá quando um único pedido solicitar uma quantidade de produtos maior ou igual a quantidade de um pallet, com isso o WMS realiza a separação do pallet direto para o box (doca), sem qualquer intervenção do WCS.
Nota: Nesse processo, não há qualquer responsabilidade atribuída ao WCS.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Autenticação – Login via SSO (Single Sign-On)  
**Score:** — (semantico) | **ID:** c874b980445dc831

O acesso à interface web do WCS (Velox) será realizado por meio de autenticação SSO (Single Sign-On), integrado ao provedor de identidade corporativo da Stellantis (Ping Federate), utilizando o protocolo OpenID Connect (OIDC).
Os usuários deverão possuir uma conta Microsoft vinculada à Stellantis, sendo aceitos os domínios @stellantis.com e @external.stellantis.com.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Fluxo de Autenticação  
**Score:** — (semantico) | **ID:** 00466937fb7713cd

O processo de login seguirá o protocolo OpenID Connect (OIDC), conforme padrão homologado pela Stellantis. O fluxo ocorrerá da seguinte forma:
O usuário acessa a interface web do WCS (Velox);
O sistema redireciona o usuário para a tela de autenticação do Ping Federate;
O usuário realiza o login com suas credenciais corporativas Microsoft (a autenticação multifator – MFA – é gerenciada pelo próprio Ping Federate);
O Ping Federate valida as credenciais e retorna um token de autenticação ao WCS;
O WCS valida o token recebido, identifica o usuário e libera o acesso conforme o perfil de permissão previamente cadastrado no sistema.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Perfis de Acesso e Cadastro de Usuários  
**Score:** — (semantico) | **ID:** 399602ae28668fe7

O Ping Federate atua exclusivamente como camada de autenticação, fornecendo um perfil básico de acesso à ferramenta. O gerenciamento de perfis, permissões e níveis de acesso será realizado internamente no WCS (Velox).
Os usuários deverão ser cadastrados manualmente no WCS pela equipe responsável. Os níveis de acesso e permissões são criados e configurados diretamente no Velox, permitindo total flexibilidade na definição de perfis conforme a necessidade da operação.
OBS: Os perfis e permissões detalhados devem ser definidos em conjunto entre Invent e Stellantis durante a fase de implementação. O workflow de solicitação de acesso dos usuários é gerenciado pelo IdentityMe da Stellantis.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Controle de Sessão  
**Score:** — (semantico) | **ID:** d5daf1ceb1003270

O sistema adotará as seguintes regras de sessão:
Duração máxima da sessão: 9 horas de atividade;
Sessão única por usuário: Cada usuário poderá manter apenas 1 sessão ativa simultaneamente. Caso um novo login seja realizado, a sessão anterior será encerrada automaticamente.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Logs e Auditoria  
**Score:** — (semantico) | **ID:** 648f4abbd353e0e0

O WCS registrará logs de autenticação contendo as seguintes informações:
Data e hora do login/logout;
Identificação do usuário;
Registro de tentativas de login com falha e com sucesso;
Controle de sessão única (registro de encerramento de sessões duplicadas).

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Ambiente de Rede e Segurança  
**Score:** — (semantico) | **ID:** 588ee0aafea846f5

O acesso ao WCS será realizado pela rede interna (VPN/LAN), podendo ser estendido para acesso via internet caso haja requerimento do Business.
A autenticação multifator (MFA) é gerenciada integralmente pelo Ping Federate da Stellantis, não sendo necessária implementação adicional pelo WCS.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 3d5df6f9649bbbfc

ESPECIFICAÇÃO DE SOFTWARE
PROJETO BELEZA MELHORIAS PROCESSOS DE AUDITORIA
Agradecemos antecipadamente pela oportunidade e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Execução da Auditoria  
**Score:** — (semantico) | **ID:** 34c1638795371282

Após a criação da auditoria, o operador realiza a verificação de todas as posições que forem contempladas na tarefa conforme julgar necessário.
Fluxo do Processo:
O operador realiza o login no WCS utilizando o coletor Android do cliente.
Após o login, o operador acessa a tela de auditoria e seleciona a tarefa de Auditoria disponível.
O WCS permite que o operador leia todas as posições de estoque.
Para cada posição lida, o operador realiza a leitura do código do item dos itens presentes.
O operador conta a quantidade real de itens na posição e registra a quantidade auditada no sistema.
Ao finalizar a leitura de todas as posições, o WCS gera o resumo da auditoria com as quantidades apuradas.
O supervisor realiza a validação e autorização do ajuste de estoque no WCS.
Após a autorização, o WCS consolida as quantidades de cada SKU, considerando todas as posições em que o item está alocado, e envia as informações ao WMS para atualização do estoque.
O processo é finalizado quando todas as posições e itens foram auditados e a auditoria for validada pelo supervisor, nesse momento o WCS envia a integração de ajuste de estoque ao WMS.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Recall  
**Score:** — (semantico) | **ID:** cbdac4f39ca46bf6

O processo de Recall é utilizado quando a operação precisa remover itens específicos da linha de separação. É possível solicitar a retirada de um lote específico ou de todos os lotes de um determinado SKU.
O processo é dividido em duas etapas principais: Criação da Tarefa de Recall e Execução da Tarefa de Recall.
Criação da Tarefa de Recall (Tela de Gestão)
A criação da tarefa de Recall é realizada por meio de uma tela específica no WCS, destinada à gestão e disparo das tarefas.
Funcionalidades da tela de criação:
Seleção do SKU que deverá ser recolhido.
Possibilidade de informar um lote específico; caso não seja informado, o recall será aplicado a todos os itens do SKU.
Definição do escopo do recall com base nas posições onde os itens estão alocados.
Geração da tarefa de Recall no WCS, que ficará disponível para execução pelos operadores.
Após a confirmação, o WCS cria a tarefa contendo as informações necessárias (SKU, lote quando aplicável e posições envolvidas) e a disponibiliza para execução operacional.
Execução da Tarefa de Recall (Tela Operacional)
A execução da tarefa de Recall é realizada pelo operador por meio do coletor Android, acessando a tela operacional de Recall no WCS.
Fluxo de execução:
O operador realiza login no WCS e acessa a tela de Recall – Execução.
O sistema apresenta a tarefa criada, exibindo:
SKU a ser recolhido;
Lote (quando aplicável);
Lista de posições onde os itens estão alocados.
O operador se desloca até as posições indicadas e realiza:
Leitura do endereço;
Leitura do container (caixa de retirada);
Informação da quantidade retirada.
Caso existam mais itens na mesma posição:
O sistema solicita a leitura de um novo container.
O WCS realiza validações durante a execução:
Não permite reutilização de um container já utilizado na mesma tarefa;
Não permite alocação de itens de lotes diferentes no mesmo container.
Havendo mais posições com itens do mesmo SKU/lote, o operador repete o processo até concluir todas as retiradas previstas na tarefa.
Fluxo do Processo:
Início no WCS: A tarefa de recall é gerada diretamente pelo WCS, contendo o código do item e o lote a ser retirado.
Acesso à Tela de Recall: O operador realiza login no WCS utilizando o coletor Android e acessa a tela de Recall.
Informação do SKU e Lote:
O operador informa o SKU do produto a ser recolhido.
Caso necessário, é possível informar um lote específico; se não informado, o recall será realizado para todos os itens do SKU.
Visualização das Posições: O WCS exibe todas as posições onde os itens do lote ou SKU estão alocados, permitindo ao operador identificar os locais de retirada.
Leitura e Retirada:
O operador se desloca até as posições indicadas, realiza a leitura do endereço e do container (caixa de retirada), e informa a quantidade retirada.
Se houver mais itens na mesma posição, o sistema solicitará a leitura de um novo container.
O WCS valida se o container já foi usado; caso positivo, um alerta é emitido, solicitando nova leitura.
O WCS não permite alocação de itens com lote diferentes no mesmo container(caixa de retirada).
Movimento para Próxima Posição: Caso existam mais posições com itens do mesmo lote/SKU, o operador repete o processo de leitura e retirada até que todos os itens sejam removidos.
Consolidação da Tarefa: Ao final da retirada de cada container, o WCS consolida as informações da tarefa, registrando:
Código do item;
Lote (quando aplicável);
Container;
Quantidade retirada.
O WCS envia a integração ao WMS somente ao final da tarefa de Recall, quando todas as posições previstas forem visitadas.
Validação no Transfer: O recall só é realizado para itens no Transfer se a tarefa de recebimento estiver concluída, garantindo que os produtos estejam aptos para retirada.
Este processo assegura rastreabilidade total e controle sobre a movimentação de itens, garantindo que todos estejam devidamente alocados antes da conclusão da tarefa.
O WCS irá enviar a integração no final da tarefa de recall quando todas as posições forem visitadas.
Por solicitação da Operação, o WCS não realizará o controle de lote nas posições de picking. Dessa forma, todas as funcionalidades relacionadas ao controle de lote não estarão disponíveis para execução.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Processo de Movimentação Forçada de Estoque  
**Score:** — (semantico) | **ID:** d090fbd2a165f85a

O processo de movimentação forçada de estoque é utilizado para movimentar produtos das posições de picking ou do Transfer conforme as necessidades da operação.
Antes do início da movimentação, é obrigatória a criação prévia da tarefa pelo supervisor.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Início da Tarefa (Operador)  
**Score:** — (semantico) | **ID:** 54aec13cedf75545

• O operador realiza login no WCS utilizando o coletor Android.
• O operador acessa a tela de Movimentação de Estoque.
• O WCS apresenta a lista de missões disponíveis, contendo item, endereço de origem, quantidade e destino.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Proposito da especificação de software  
**Score:** — (semantico) | **ID:** b4d9e5cd2064c438

Esta especificação de software tem como objetivo descrever, de forma clara, estruturada e tecnicamente consistente, os processos operacionais e sistêmicos a serem atendidos pelo sistema WCS Velox, servindo como base para o desenvolvimento, parametrização, validação e evolução da solução.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Equipamentos dos processos automatizados  
**Score:** — (semantico) | **ID:** 21270f06cfec0da3

BK25 — Transportador de Paletes
Sistema de transporte contínuo composto por esteiras, roletes motorizados e correntes, projetado para a movimentação de cargas paletizadas. A estrutura é instalada no nível do piso do armazém, formando circuitos de transporte entre as áreas operacionais. O equipamento um portal de validação onde há sensores e dispositivos de verificação dimensional que realizam a inspeção automática do palete validando amarração, alinhamento das caixas, ângulo de empilhamento e condições de embalagem. O BK25 também possui pontos de desvio que permitem direcionar o palete para diferentes rotas conforme o resultado das validações.
Transelevador
Equipamento automatizado de movimentação vertical e horizontal que opera dentro dos corredores do armazém automático (AA). Essa plataforma é equipada com garfos telescópicos ou dispositivos de extração que permitem inserir e retirar paletes nas posições de armazenagem em profundidade simples ou múltipla. O transelevador é controlado pelo PLC e opera de forma totalmente automatizada, recebendo comandos do WCS para executar tarefas de armazenagem e retirada. O equipamento atende cinco níveis de armazenagem: os três primeiros dedicados a canais de picking com até três paletes de profundidade, e os dois últimos utilizados como buffer de estocagem temporária.
OBS: O Armazém AA refere-se ao armazém completo da operação, englobando todas as áreas e estruturas envolvidas, como posições de coleta, sistema de transelevador e estruturas porta-paletes. Portanto, não deve ser interpretado como sendo exclusivamente o transelevador, mas sim todo o conjunto operacional do armazém que ele está localizado.
BK10 — Transportador de Caixas
Sistema de transporte composto por esteiras e roletes dimensionados para a movimentação de caixas (unidades de venda). Possui estrutura mais compacta e velocidade de operação adequada ao fluxo da operação. O equipamento interliga fisicamente a zona de picking ao sorter, realizando o transporte das caixas coletadas pelos operadores até o ponto de entrada do sistema de classificação. Pode contar com trechos de acúmulo (buffers de esteira) para regulação do fluxo de entrada no sorter.
Sorter — Cross Belt
Equipamento de classificação automática de volumes de alta velocidade, composto por um circuito fechado de transportadores individuais (carros) montados sobre uma esteira de tração contínua. Cada carro possui uma mini esteira transversal (cross belt) independente, acionada individualmente por motor próprio. O sistema é composto por: zona de indução (entrada dos volumes no circuito), portal de leitura, circuito de transporte (loop contínuo onde os carros circulam em alta velocidade) e pontos de descarga (chutes). No momento da descarga, a cross belt do carro é acionada lateralmente, transferindo o volume para a rampa de destino designada. O equipamento possui capacidade de recirculação e rampas de rejeito para volumes não identificados ou sem destino válido.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Classificação de prioridade  
**Score:** — (semantico) | **ID:** f56389f030ba266d

A classificação de prioridade é feita com base nos parâmetros de prioridade cadastrados no Velox, esses valores parametrizados são multiplicados pela prioridade de separação da temperatura na onda e os dados de categoria e tipo de peso são avaliados para atribuir a nova prioridade.
Os parâmetros utilizados serão:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Saída do AC para Canais de Picking comuns  
**Score:** — (semantico) | **ID:** 6e95539ab36ff508

Movimentação de um palete saindo de uma posição do AC para uma posição de picking não administrada pelo BK25, onde todo processo de retirada do palete na posição de origem e deposito do palete na posição de destino é realizada pelo SAP, o WCS não realiza nenhuma movimentação física ou automatizada nesse processo.
Quando o transporte do palete for finalizado o SAP envia ao WCS a confirmação da OT (IDOC TOCO) e assim o saldo passa a ser disponibilizado para coleta no WCS.
Para os casos de cancelamento ou estorno de OT o IDOC CATO será disparado do SAP ao WCS que por sua vez inicia os processos de validação de integração e em caso de sucesso o WCS retornara um CATO de confirmação de estorno ao SAP.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Porta-Palete para Canal de Picking dinâmico  
**Score:** — (semantico) | **ID:** 7c0b535dcf5034d8

Movimentação de um palete saindo de uma posição do AC para uma posição de picking automatizada administrada pelo BK25, onde o processo de retirada do palete na posição de origem é responsabilidade do SAP e após a confirmação de retirada do palete da posição ele envia o TOCO de confirmação de 1ª etapa (perna) ao WCS.
Após o recebimento do TOCO o WCS atualizará o status da OT disponibilizando o número do palete (UD) no monitor de induções do BK25, com isso o colaborador deverá procurar o palete no stage de indução (Paredão) e induzi-lo no BK25 [Regra de Avaliações e Movimentações de Paletes].
Após as validações do BK25 [BK25] e movimentações no transelevador [Transelevador] e o palete for confirmado na posição de destino o WCS realiza a disponibilização para coleta e envia o IDOC TOCO ao SAP.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Saída do AC para Canais de Picking comuns  
**Score:** — (semantico) | **ID:** a7a58a093a759373

Movimentação de um palete saindo de uma posição do AC para uma posição de picking não administradas pelo BK25, onde todo processo de retirada do palete na posição de origem e deposito do palete na posição de destino é realizada pelo SAP, o WCS não realiza nenhuma movimentação física ou automatizada nesse processo.
Quando o transporte do palete for finalizado o SAP envia ao WCS a confirmação da OT (IDOC TOCO) e assim o saldo passa a ser disponibilizado para coleta no WCS.
Para os casos de cancelamento ou estorno de OT o IDOC CATO será disparado do SAP ao WCS que por sua vez inicia os processos de validação de integração e em caso de sucesso o WCS retornara um CATO de confirmação de estorno ao SAP.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Porta-Palete para Canal de Picking dinâmico  
**Score:** — (semantico) | **ID:** e874f5300588f286

Movimentação de um palete saindo de uma posição de porta-palete (AC ou AA) para uma posição de picking automatizada, onde o processo de retirada do palete na posição de origem é responsabilidade do SAP e após a confirmação de retirada do palete da posição ele envia o TOCO de confirmação de 1ª etapa (perna) ao WCS.
Após o recebimento do TOCO o WCS atualizará o status da OT disponibilizando o número do palete (UD) no monitor de induções do BK25, com isso o colaborador deverá procurar o palete no stage de indução (Paredão) e induzi-lo no BK25 [Regra de Avaliações e Movimentações de Paletes].
Após as validações do BK25 [BK25] e movimentações no transelevador [Transelevador] e o palete for confirmado na posição de destino o WCS realiza a disponibilização para coleta e envia o IDOC TOCO ao SAP.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Limpeza de Canal  
**Score:** — (semantico) | **ID:** eb04b179a2faa31c

A limpeza de canal é o processo de remoção de paletes de posições de picking e buffer, executado a partir de uma ordem enviada pelo SAP. Existem dois tipos de limpeza com comportamentos distintos, determinados pela natureza da posição que será esvaziada.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Criação de onda  
**Score:** — (semantico) | **ID:** c5c6ec1c34c7846d

O processo produtivo de separação e expedição é regido por ondas onde cada onda é composta por um ou mais transportes, esse processo depende da seleção dos transportes que serão agrupados em uma onda, os transportes disponibilizados nessa tela serão somente os transportes que todas as remessas formam processadas com sucesso.
Para realizar a essa seleção o usuário deve acessar a tela de transportes selecionar os transportes desejados e clicar na opção criar onda para seguir com a criação desse agrupamento de transportes ou na opção verificar reabastecimento.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Manutenção de Transporte  
**Score:** — (semantico) | **ID:** 30727c4bfa244237

Antes de criar a onda, a operação (Usuários) pode definir e editar dados relacionados aos transportes dentro das ondas com as informações operacionais que definem como cada transporte será processado durante a separação e expedição. Essa configuração engloba a associação de docas e o modo de operação (padrão ou misto).
As informações de veículos e transportes são recebidas pelo WCS exclusivamente via IDOC enviado pelo SAP no momento da criação da remessa [Remessa].
Para determinar o sequenciamento de coleta e consecutivamente a ordenação de chegada dos volumes nos seus destinos e definir os destinos onde os volumes que serão desviados (docas) a operação deve fazer a seleção do tipo de separação e docas por temperatura de acordo com o tipo de separação solicitado e poderá escolher 1 ou mais docas por temperatura.
Exemplo de funcionalidade:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Inclusão de transporte  
**Score:** — (semantico) | **ID:** bd683754e6a34dd6

Para atender a necessidade da operação é possível incluir um transporte a uma onda já criada, desde que o status da onda que receberá o novo transporte for criada ou preparada, com isso quando o usuário clicar na opção incluir transporte o WCS irá listar todas as ondas com status mencionados acima, e junto das ondas será informada a quantidade de docas disponíveis para cada onda em relação as docas já utilizadas, sendo considerado a usabilidade da doca por onda. Após a seleção da onda o WCS irá listar todos os transportes com status disponível sendo possível selecionar uma ou mais transportes, sendo possível selecionar somente a quantidade de transportes corresponde a quantidade de docas disponível na onda selecionada.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Detalhes de transportes  
**Score:** — (semantico) | **ID:** 669323f11f48e70b

Detalhe de transporte é uma funcionalidade com aspecto de relatório que servirá para apoiar na análise do processo de separação e expedição dos materiais por transporte.
Esse relatório conta com as seguintes informações:
Transporte, placa, remessa, cliente, sku, lote (esperado na coleta), quantidade remessa, quantidade atendida (pós início da onda), quantidade separada, quantidade desviada, quantidade cortada, posição de coleta, shelf de, shelf até, status da remessa e status do item.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Seleção de Lote  
**Score:** — (semantico) | **ID:** 47226fcecf923d41

A seleção de lote é o processo pelo qual o WCS determina em quais palete e posições o operador deve coletar as caixas para atender a demanda da onda. Essa decisão é direcionada ao acendimento dos LEDs na zona de picking, o LED que acende para o operador corresponde à posição do palete que o WCS selecionou como o mais adequado para aquela coleta.
Quando uma onda é iniciada e a lista de coleta é gerada, o WCS precisa decidir, para cada item da lista, qual palete específico será consumido. Essa decisão considera dois critérios aplicados em sequência: a posição física do palete (sequência) e a regra FEFO (o lote com validade mais velha sai primeiro).
O resultado da seleção de lote é o que define a sequência de acendimento dos LEDs dentro de cada posto, o operador não escolhe de qual palete coletar, o WCS toma essa decisão e sinaliza através do LED.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Sequência de coleta  
**Score:** — (semantico) | **ID:** 1932eb6a1ee20644

Após a seleção de lote e determinação dos paletes que vão atender a necessidade das remessas na onda é gerado o sequenciamento de coleta, onde é determinado em que sequencia os leds devem acender.
Essa sequência é baseada em parâmetros que podem ser alterados pelo usuário desde que ele tenha permissão para acessar as configurações.
O WCS captura o valor dos parâmetros para cada cenário e verifica o tipo de separação do transporte [Tipo de separação] que determina o multiplicador de prioridade de coleta.
Após essa validação os lotes e quantidades selecionadas por transportes passam pela geração de sequência de coleta onde a menor sequência sempre será atendida primeiro e isso é executado por posto de trabalho.
EX:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Randomização de quantidade para coleta  
**Score:** — (semantico) | **ID:** b374450be3989ec1

Para garantir acurácia no processo de separação as quantidades que apareceram no visor do led serão randomizadas, exceto para os materiais PVAR onde o led será acesso uma única vez com a quantidade total solicitada.
Para os demais tipos de peso o WCS irá verificar os parâmetros de randomização (mínimo e máximo) que determinaram se o valor deve ser randomizado ou não.
A randomização só ocorrerá se a quantidade da onda é maior que q quantidade mínima parametrizadas e a quantidade de acendimento é determinada pela quantidade de vezes esse valor será randomizado, pois o valor máximo indica o limite que o valor pode ser randomizado.
O WCS faz a validação sobre o saldo necessário e enquanto todo saldo não é randomizado enquanto o valor necessário não for totalmente atendido à randomização não termina.
Exemplo:
Necessidade = 80
mínimo	= 15
máximo = 30

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Processo de Coleta PVAR  
**Score:** — (semantico) | **ID:** a698644596d21c2f

A coleta de materiais do tipo PVAR possui um fluxo operacional específico, sendo executada de forma prioritária, sequencial e com controle obrigatório de etiquetagem por volume, diferenciando-se dos demais tipos de peso (PPAD e PFIX).
Os materiais PVAR devem ser sempre coletados primeiro dentro de cada posto, respeitando a sequência por temperatura e ordenação por posição física, sem considerar categorias de peso (leve, pesado ou frágil). A operação ocorre de forma totalmente sequencial, com apenas um LED ativo por vez por posto, sendo que uma nova posição de coleta somente será liberada após a confirmação manual da posição anterior pelo operador.
O acionamento do LED é o gatilho de toda a operação, onde simultaneamente:
O display indica a quantidade de caixas a serem coletadas
O WCS dispara automaticamente os arquivos de impressão (ZPL)
A quantidade de etiquetas impressas corresponde exatamente à quantidade exibida
O operador deve realizar a coleta de forma unitária (uma caixa por vez), aplicando a etiqueta em cada volume e induzindo-o na esteira. Após finalizar todas as caixas da posição, deve confirmar a operação no botão do LED, liberando a próxima posição de coleta. Esse ciclo se repete até a finalização total dos materiais PVAR do posto, sendo que somente após essa conclusão a coleta dos materiais PPAD e PFIX será iniciada.
Durante a operação, podem ocorrer exceções. Em casos de falha de impressão por falta de insumos, o operador deve realizar a reposição e, caso a impressão não normalize, deve seguir com a coleta normalmente, etiquetando apenas os volumes que possuem etiquetas disponíveis e induzindo todos na esteira. Os volumes sem etiqueta serão tratados posteriormente no sorter e serão rejeitados conforme parametrização de obrigatoriedade de leitura.
Na situação de corte [Corte na Coleta], quando a quantidade física disponível for inferior à solicitada, o operador deve ajustar manualmente a quantidade no display do LED, coletar apenas o disponível e descartar as etiquetas excedentes. Sistemicamente, a informação de corte será registrada e enviada contemplando os dados de quantidade em kg, quantidade por palete e o total em kg que foi efetivamente cortado.
Caso ocorra falha de impressora durante a operação, o posto poderá ser direcionado para contingência, onde as etiquetas pendentes serão redirecionadas para uma impressora alternativa. Etiquetas que não foram impressas fisicamente deverão ser reprocessadas manualmente através da funcionalidade de acompanhamento de volumes PVAR.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Etiqueta de Fornecedor Terceiro (sem código produtor)  
**Score:** — (semantico) | **ID:** e860a38063a6c033

Alguns produtos são fabricados por fornecedores terceiros que não informam o código produtor na etiqueta. Neste caso, o WCS utiliza uma regra especial de formação de lote.
Regra de formação: O WCS deve manter um cadastro que associa o SKU/DUN14 à regra de formação de lote para fornecedores terceiros. Toda vez que o WCS receber um volume desse SKU/DUN14, o lote será formado como:
Código Produtor + valor do AI (11)
Onde “Código Produtor” é um prefixo informado pela operação no cadastro que identifica produtos de terceiros. Para esses casos, deve ser considerado o código da unidade produtora, formado por “Código Produtor” + AI (11), sendo o valor convertido para o formato de lote juliano.
O lote gerado deve respeitar o padrão de 7 ou 10 dígitos.
Exemplo: Código AI (11) contém uma data que, após conversão para lote juliano, resulta no lote correspondente, que será concatenado com o prefixo do “Código Produtor”.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Tratativa SKU Terceiro  
**Score:** — (semantico) | **ID:** 1bc5bbeffbb037c9

Para atender a necessidade de produtos oriundos de fabricante terceiros é necessária uma tela de cadastro desses skus, onde quando não for possível compor um lote, como última tentativa o WCS vai buscar o sku em sua base de skus terceiros e caso encontre vai usar o código produtor encontrado para compor o lote.
Essa funcionalidade permite cadastros realizados diretamente pelo usuário, sendo responsabilidade do time MBRF a assertividade desses dados para não ocasionar rejeitos desnecessários.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Processo de Picking Exceção  
**Score:** — (semantico) | **ID:** f17cef50f72d0a5e

O Picking Exceção será utilizado para itens que não se enquadram nos parâmetros da automação, mas que devem ser alocados manualmente no processo de Aloca Pallet. O fluxo operacional será semelhante ao processo de Full Case, mas com a diferença de que os itens não farão parte da automação e serão direcionados manualmente para a rampa ou alocação nos pallets.
Fluxo Operacional de Picking Exceção:
O operador realiza o login no WCS utilizando o coletor Android.
O operador seleciona a tela de Order Start Picking Exceção, onde escolhe o posto de impressão em que está fisicamente para retirar as etiquetas.
Após selecionar o posto de impressão, o operador escolhe a rua da qual ele irá fazer o Picking Exceção. O sistema exibirá a lista de tarefas de separação de acordo com a rua selecionada e os volumes disponíveis.
As tarefas de Picking Exceção serão segregadas por rampa do Sorter, permitindo que o operador saiba para qual rampa deve levar os itens após a coleta.
Início da tarefa:
O WCS determina automaticamente a quantidade de itens a coletar na leva, respeitando os parâmetros de:
peso máximo do pallet de coleta; e
cubagem máxima do pallet de coleta.
O peso e cubagem máxima será cadastrada em uma tela de parâmetros do WCS.
O WCS imprime as etiquetas referente aquela tarefa de separação, seguindo a lógica de impressão do processo de Full Case.
O operador realiza a separação e consolida os itens no pallet correspondente à Tarefa.
O coletor é direcionado para a tela de coleta, onde o operador deve se deslocar até o endereço especificado no coletor.
O operador realiza a leitura do endereço para iniciar a coleta do item.
O operador confirma a quantidade separada e realiza a leitura do código do item.
O operador se desloca para o próximo endereço e repete o processo até concluir todas as coletas.
Destinação a Rampa:
Após finalizar todas as coletas, o WCS informará em qual rampa do sorter os itens coletados deverão ser direcionados.
O comportamento do processo na rampa estará condicionado ao parâmetro de paletização por transportadora, conforme descrito a seguir:
Parâmetro de Paletização por Transportadora Ativo:
Os volumes coletados ficarão disponíveis na rampa para o operador responsável pelo processo de Aloca Pallet.
O operador deverá realizar a alocação manual de cada volume em sua respectiva posição de pallet.
Cada volume será associado à um RG de pallet, sendo obrigatória a confirmação da alocação no WCS.
O WCS somente considerará o volume como expedido após a confirmação da alocação no pallet.
As informações de vínculo entre volumes e RG de pallet serão integradas conforme o processo de Aloca Pallet.
Parâmetro de Paletização por Transportadora Inativo:
Não será necessário realizar o processo de Aloca Pallet.
O operador deverá realizar a leitura individual de cada volume no PRIX fixo instalado ao final da rampa, sinalizando a chegada física do volume na rampa.
A leitura no PRIX será utilizada pelo WCS para:
Confirmar a chegada do volume na rampa de destino;
Atualizar o status operacional e o dashboard do WCS.
Não haverá vínculo de volumes com RG de pallet nesse cenário.
Esse processo de Picking Exceção garante que itens que não se enquadram no fluxo automatizado sejam tratados manualmente de forma controlada, assegurando rastreabilidade, visibilidade operacional e aderência aos parâmetros definidos por transportadora.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Se a Transportadora Realiza Paletização  
**Score:** — (semantico) | **ID:** ad7c447583fbd285

Ao marcar “Sim”, o sistema habilita o processo de agrupamento:
Agrupamento por Transportador Rota
Cada rampa gera pallets separados por Transportadora + Rota.
O coletor orienta o operador a colocar cada volume no pallet correto.
O WCS registra a quantidade de volumes por pallet.
O WCS envia a integração de fechamento quando o pallet é concluído.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Validação na Rampa  
**Score:** — (semantico) | **ID:** 54624b31278238c3

Em cada rampa, haverá um leitor de código de barras que realizará o processo de Validação após o desvio do volume na rampa, conforme descrito a seguir:
Leitura do Volume: O leitor captura o código do volume presente na rampa.
Validação do WCS: O WCS verifica se o volume está alocado na rampa correta de acordo com o mapa de destinos.
Sinaleiro: O WCS envia uma instrução ao PLC para acender o sinaleiro:
Verde: O volume está na rampa correta.
Vermelho: O volume está na rampa incorreta.
Esse processo garante a validação final do desvio de cada volume, permitindo rápida identificação de inconsistências e auxiliando a operação a manter a precisão e rastreabilidade dos pedidos, porém não é obrigatória.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Alocação de Volumes no Pallet  
**Score:** — (semantico) | **ID:** 289fa021d21cd18e

Quando um volume chega à ponta da rampa, o operador realiza a leitura da etiqueta do volume 
Após isso, o WCS verifica se já existe um pallet ativo associado à mesma transportadora e rota daquele volume.
Se já existir pallet para aquela rota/transportadora:
O coletor exibirá a posição do pallet onde o volume deve ser alocado.
Se ainda não existir pallet para aquela rota/transportadora:
O coletor solicitará ao operador que informe uma posição física de pallet.
Após leitura dessa posição, ela passa a ser utilizada para todos os próximos volumes da mesma rota/transportadora.
Fluxo operacional do Aloca Pallet:
Coletar o volume na ponta da rampa.
Ler a etiqueta do volume gerada pelo velox.
O WCS indicará no coletor a posição do pallet.
O operador deposita o volume no pallet.
O operador realiza a leitura do código de barras da posição do pallet para confirmar a alocação.
Caso o operador informe uma posição diferente da indicada pelo sistema, o WCS apresentará mensagem de erro, orientando o operador a informar a posição correta.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 10332b373c2f3d73

ESPECIFICACIÓN DE SOFTWARE
Proyecto Market Perú
Presentamos nuestra propuesta y las condiciones generales para el suministro del sistema en cuestión.
Os agradecemos de antemano la oportunidad y estamos disponibles para cualquier aclaración que pueda ser necesaria.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 7a41901b5da128c4

ESPECIFICACIÓN DE SOFTWARE
Proyecto Market Perú
Presentamos nuestra propuesta y condiciones generales de suministro del sistema en referencia.
Agradecemos de antemano la oportunidad y quedamos a su disposición para cualquier aclaración que sea necesaria.
Resumen
1.	Objetivo del documento	5
2.	Especificación	5
3.	Partes interesadas ES	5
4.	Etapas de la especificación de software (ES)	5
5.	Integraciones	6
5.1.	Productivo (Empleados)	7
5.2.	Tiendas	8
5.3.	Etiquetas	9
5.4.	Registro de productos	10
5.5.	Palé montado	11
6.	Proceso operativo	12
6.1.	Funcionalidad del mapa del sorter en WCS	12
6.2.	Inducción de volúmenes	13
6.2.1.	Orientación de inducción	13
6.3.	CrossDocking	14
6.4.	Sorter	14
6.4.1.	Motivos de rechazo del sorter	15
6.6.	Rechazo del sorter	16
6.7.	Cubicaje de palés	16
6.8.	PTL	17
6.9.	Cierre del palé	17
6.10.	Incidencias	18
6.11.	Especificación de volúmenes inducidos en el sorter	19
6.12.	Contingencia del sorter (IA)	19
7.	Seguimiento de la productividad	21
7.1.	Informes	21
8.	APROBACIÓN DE LA PROPUESTA	22

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Execução da Coleta  
**Score:** — (semantico) | **ID:** cf49cc3714a70ebb

O coletor Android exibe a lista de coleta com endereço, produto (SKU/DUN), e quantidade a coletar para cada item da remessa. O processo segue o tripé de validação:
1. Leitura do endereço: O operador bipa o código do endereço físico (piso ou longarina) para confirmar que está no local correto.
2. Informação da quantidade: O WCS exibe a quantidade total esperada. O operador pode ajustar para baixo caso não encontre o saldo completo.
3. Leitura do DUN/EAN: O operador bipa o código DUN14 ou EAN da caixa fechada para confirmar o produto coletado. Somente com as três validações concluídas a coleta é registrada.
Após coletar todos os itens de um endereço, o operador avança para o próximo endereço indicado e repete o processo até concluir todos os itens da remessa.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 9321df5776211541

ESPECIFICACIÓN DE SOFTWARE
GUATEMALA - I25.138
Presentamos nuestra propuesta y las condiciones generales para el suministro del sistema WCS en cuestión.
Le agradecemos de antemano la oportunidad y quedamos a su disposición para cualquier aclaración que pueda ser necesaria.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Tela de endereços  
**Score:** — (semantico) | **ID:** 03eecec2139d71df

Será disponibilizada no WCS uma tela específica para consulta, acompanhamento e gestão dos endereços logísticos, com o objetivo de oferecer visibilidade operacional, controle e apoio à tomada de decisão sobre todas as localizações físicas utilizadas no processo.
Essa tela centralizará as informações referentes aos endereços cadastrados no sistema, permitindo ao usuário visualizar, identificar e organizar as áreas operacionais de forma estruturada, conforme sua finalidade dentro do fluxo logístico.
Localizações contempladas:
Área de Análise de Corte
Posições de Picking
Area de Conferência
A funcionalidade permitirá:
Visualização completa de todos os endereços cadastrados no WCS
Segmentação das localizações por setor e tipo de operação
Aplicação de filtros por setor, facilitando a navegação e análise das informações

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Resumo do Fluxo  
**Score:** — (semantico) | **ID:** b5e85ba92265ba91

1. Autenticar: Envie POST /autenticacao com Basic Auth
2. Receber: Token na resposta JSON
3. Usar: Inclua Authorization: Bearer <token> nas próximas requisições
Importante: Guarde o token com segurança — ele expira automaticamente em 24h.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Parametrizações Gerais e Regras de Negócio  
**Score:** — (semantico) | **ID:** ee0af5ccd6ddcedd

Esta seção descreve as configurações lógicas e algoritmos que governam o processamento dos pedidos no WCS Velox. Antes da liberação para o chão de fábrica, cada onda passa por este cálculo para definir a estratégia de separação.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Lógica de Processamento  
**Score:** — (semantico) | **ID:** 23461e6f630e309b

Validação de Master Data: O sistema verifica se todos os SKUs do pedido possuem Dimensões (Altura, Largura e Comprimento) e Peso cadastrados (via INT-001).
Exceção: Se um item não possuir dimensões ou peso cadastrado, a onda é bloqueada com status "Erro de Cadastro" e um alerta é gerado para o gestor.
Cálculo de Best Fit: O algoritmo tenta alocar a maior quantidade de itens dentro da caixa padrão da esteira (Caixa Plástica), simulando o empilhamento virtual.
Fator de Ocupação: É aplicado um redutor de segurança (Parâmetro "Percentual de
Ocupação") para garantir que a caixa não fique estufada, permitindo o fechamento das abas e o empilhamento seguro.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Parâmetros Configuráveis do Sistema  
**Score:** — (semantico) | **ID:** 4ac75a14e23d5b07

Para garantir flexibilidade à operação da Vedamotors, as seguintes variáveis são ajustáveis via tela administrativa do WCS, sem necessidade de intervenção em código-fonte:

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Processo de Movimentação Forçada de Estoque  
**Score:** — (semantico) | **ID:** 3cfbe75a5a93a044

O processo de movimentação forçada de estoque é utilizado para movimentar produtos das posições de picking conforme as necessidades da operação.
Início da tarefa:
O operador realiza login no WCS utilizando o coletor Android e acessa a tela de movimentação forçada de estoque.
A tela exibirá uma lista de itens alocados a endereços específicos, permitindo que o operador visualize os itens e suas respectivas quantidades.
Remoção do Item:
O operador inicia a operação realizando a leitura do endereço correspondente ao item.
Em seguida, seleciona a quantidade a ser retirada e realiza a leitura do código do item para confirmar a remoção.
Alocação do Item:
Após a retirada, o WCS indica uma posição sugerida no transfer, caso exista.
O operador pode então se deslocar até o endereço indicado, realizar a leitura do código do endereço e confirmar a quantidade e o EAN do item.
É possível selecionar uma posição vazia para alocação, não sendo obrigatório mover o item para o endereço sugerido.
O processo de movimentação forçada de estoque proporciona flexibilidade operacional, permitindo movimentar itens tanto no transfer quanto nas posições de picking, mantendo sempre o controle atualizado e a rastreabilidade completa de todas as movimentações.
Este processo garante maior eficiência na gestão de estoque, assegurando que o WCS tenha controle total sobre os itens e permitindo ajustes conforme a demanda e necessidade operacional.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** Operação de Expedição: Put-To-Pallet (PTP)  
**Score:** — (semantico) | **ID:** 9a35f515661084d9

O processo de consolidação de volumes será gerenciado pelo módulo Velox PTP. A operação substitui as listas de papel e a memória do operador por um sistema visual e validado sistemicamente.

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Pallet Closing Triggers  
**Score:** — (semantico) | **ID:** fea27d88c5585c9f

The WCS manages the pallet closing automatically based on two criteria:
Physical Closing (Cubing): The WCS algorithm identifies that the volumetric sum (m³) or weight of the scanned items has reached the configured limit for that physical pallet. If there are leftover items from that order to be allocated, the next pallet position will be made available to finish that remaining order.
Logical Closing (End of Order): All items scheduled for that route/client have been scanned, with no remaining pending items.

---
**Origem:** [EURO] ADITIVO — `- ESPECIFICACAO DE SOFTWARE - QR code.docx`  
**Heading:** Alteração Layout Etiqueta  
**Score:** — (semantico) | **ID:** 7eccd3ab022662cd

Será incluído um QR Code na etiqueta, que conterá em formato de texto a lista de itens previstos para compor a caixa.(SKU, QUANTIDADE SEPARADA)
O QR Code será gerado no momento da impressão da etiqueta e terá como base os itens vinculados ao volume.
Será incluso também o tipo de processo que se refere ao volume (MP, AG, HO, ONC) essa informação está presente na integração de Pedidos no campo “tipo_processo“.
Exemplo de etiqueta:

---
**Origem:** [EURO] ADITIVO — `- ESPECIFICACAO DE SOFTWARE - Relatórios .docx`  
**Heading:** Inclusão de Usuários no Posto  
**Score:** — (semantico) | **ID:** 3ca90e4f131596be

Objetivo: Incluir uma nova coluna no relatório de Produtividade x Posto que apresente todos os usuários que estavam logados/alocados no posto durante o intervalo de tempo selecionado.
Descrição Funcional:
O sistema deverá exibir uma nova coluna denominada “Usuários no Posto”, listando todos os operadores que estiveram alocados àquela posição (posto) durante o período filtrado.
Os nomes dos usuários serão apresentados separados por vírgula quando houver mais de um operador no mesmo intervalo.
A informação será obtida a partir do registro de login/logout dos operadores nos postos, cruzando com o intervalo de tempo selecionado no filtro do relatório.

---
**Origem:** [I21.131] ADITIVO — `I21.131  - Aditivo Projeto PMB - Posto Virtual C1.docx`  
**Heading:** Lógica de Desvio da Balança  
**Score:** — (semantico) | **ID:** f1a488d07dc78a9d

Ao chegar na balança, nenhuma alteração de lógica será aplicada em relação com a lógica atual. Como os itens associados aos endereços virtuais do posto não estarão fisicamente presentes na caixa naquele momento, haverá divergência entre o peso esperado e o peso real.
Essa divergência será intencional e utilizada como mecanismo para forçar automaticamente o desvio da caixa para a conferência, sem necessidade de desenvolvimento adicional na lógica da balança.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PTLRJ - ES - PICKING ILHA E LOGIN CRACHÁ.docx`  
**Heading:** Login de Operador via Crachá  
**Score:** — (semantico) | **ID:** 982470e1f2a4fd3a

Tem como objetivo permitir que o operador realize o login na estação de trabalho bipando seu crachá pessoal, vinculando todas as atividades de picking daquele posto ao seu usuário para fins de relatório de produtividade e rastreabilidade.
É mandatório a compatibilidade dos leitores atuais com o padrão de código de barras dos crachás da Nestlé.
Padrão Esperado: Código iniciado com caractere identificador (ex: "U" + Matrícula Numérica). Exemplo: U98238933.
Teste de Campo: A operação deve realizar um teste físico utilizando uma etiqueta de caixa existente, alterando apenas o primeiro caractere para "U" e bipando no scanner da estação para confirmar se o hardware processa a leitura e envia a string corretamente para o sistema.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PTLRJ - ES - PICKING ILHA E LOGIN CRACHÁ.docx`  
**Heading:** Lógica de Login e Sessão  
**Score:** — (semantico) | **ID:** 39ad8cffc392ad9e

Ação de Login:
O sistema valida o prefixo (ex: "U") e busca a matrícula no banco de dados de usuários.
Se válido o LED acenderá em Verde liberando a tela de operação, iniciando a contagem de tempo/produtividade e vincula o operador ao respectivo um posto.
Se inválido o LED acenderá em Vermelho.
Logout: O sistema deve permitir logout manual na próxima bipagem dele no posto.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** CrossCheck na Rampa  
**Score:** — (semantico) | **ID:** e87d5b4ae3cdd352

Em cada rampa, haverá um leitor de código de barras que realizará o processo de crosscheck Após o desvio do volume na rampa, conforme descrito a seguir:
Leitura do Volume: O leitor captura o código do volume presente na rampa.
Validação do WCS: O WCS verifica se o volume está alocado na rampa correta de acordo com o mapa de destinos.
Sinaleiro: O WCS envia uma instrução ao PLC para acender o sinaleiro:
Verde: O volume está na rampa correta.
Vermelho: O volume está na rampa incorreta.
Esse processo garante a validação final do desvio de cada volume, permitindo rápida identificação de inconsistências e auxiliando a operação a manter a precisão e rastreabilidade dos pedidos.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Etiqueta Picking Fracionado  
**Score:** — (semantico) | **ID:** 8937e61d3ce4765e

Essa etiqueta será utilizada no processo de picking fracionado.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - GEMINI.docx`  
**Heading:** Tradução do traceability code (BARCODE) - OK  
**Score:** — (semantico) | **ID:** b60f2886c6345402

Situação: A estrutura da etiqueta (traceability code) que será lida na automação foi definida para conter todas as informações necessárias para o processo, eliminando a necessidade de consultas adicionais em alguns pontos do fluxo.
Decisão: A responsabilidade pela geração e envio dessas informações será do SAP. Não há necessidade de desenvolvimento adicional por parte da Invent para a tradução do código, apenas para o seu correto tratamento.
Composição da Etiqueta:
Ações:
Ação IT (SAP): Mapear e desenvolver as informações do Traceability Code no enhancement de cartonização para garantir o envio correto ao WCS.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 9c19111b8699c7f6

ESPECIFICAÇÃO DE SOFTWARE - ADITIVOS
PROJETO AUTOMATIZE 2.5
REV. 2
Apresentamos a seguir o aditivo de especificação de software referente a novas funcionalidades para o sistema WCS do projeto Automatize 2.5 – I23.144.
Agradecemos antecipadamente pela oportunidade e nos colocamos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Sorter Aloca Pallet e Dashboard.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** a7e7e25cb58bf961

ESPECIFICAÇÃO DE SOFTWARE - ADITIVOS
PROJETO AUTOMATIZE 2.5
REV. 2
Apresentamos a seguir o aditivo de especificação de software referente a novas funcionalidades para o sistema WCS do projeto Automatize 2.5 – I23.144.
Agradecemos antecipadamente pela oportunidade e nos colocamos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Tabela de Eventos  
**Score:** — (semantico) | **ID:** 408c68988ea52d38

A tabela lista cada evento de rampa cheia registrado no período filtrado, um por linha, com as seguintes colunas:
Representação visual dos Eventos de Rampa Cheia:

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Limitações Conhecidas  
**Score:** — (semantico) | **ID:** fd657e20d0d37f40

Obs: As telas aqui representadas são de cunho demonstrativo. Significa que não serão idênticas, mas terão a mesma funcionalidade.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza - Corte de SKUs bloqueados.docx`  
**Heading:** Regras de Negócio  
**Score:** — (semantico) | **ID:** 58c50b0569ded1b6

A funcionalidade deverá operar considerando que o corte de um SKU representa o corte lógico desse item dentro de todas as missões em que ele esteja impedindo o início. O sistema deverá garantir que apenas os SKU’s que estejam efetivamente causando bloqueio sejam considerados no processamento, evitando alterações indevidas em missões que já estejam em andamento ou que não dependam do item informado.
A ação de corte deverá ser restrita a usuários que possuam permissão específica para esse tipo de operação, uma vez que se trata de uma intervenção direta na composição das missões. Para isso, será obrigatória a confirmação de credenciais no momento da execução, garantindo que apenas usuários autorizados consigam concluir o processo.
Durante a execução, o sistema deverá processar todos os SKU’s informados, identificando suas ocorrências em diferentes missões e aplicando o corte de forma consistente. Após a remoção dos itens, as missões deverão seguir o fluxo normal do sistema, incluindo qualquer etapa de integração já configurada, sem necessidade de adaptações adicionais nesse fluxo.
Outro ponto importante é a rastreabilidade. Toda ação de corte deverá ser registrada, permitindo auditoria completa sobre quais itens foram removidos, de quais missões, em qual momento e por qual usuário. Essa rastreabilidade é essencial para controle operacional e análise posterior de impacto.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Fase 2 - Melhorias.docx`  
**Heading:** Adequação do Dashboard – Relatório Coleta/Posto  
**Score:** — (semantico) | **ID:** d5532db24d357a36

Atualmente, a Tela de Posto de Coleta exibe apenas o total de tarefas e itens que passaram, mantendo essa visualização mesmo quando os volumes avançam para checkout ou são finalizados. Isso limita a visibilidade do andamento real da operação e dificulta o acompanhamento da produtividade.
Este aditivo tem como objetivo incluir indicadores de status na Tela de Posto Coleta, permitindo acompanhar quantas tarefas passaram pelo posto, quantas foram finalizadas e quantas seguem em checkout, refletindo com mais precisão o fluxo operacional.
Escopo da Adequação
Inclusão de uma nova seção no relatório para exibir apenas os itens cujos volumes foram efetivamente finalizados.
A nova seção deverá considerar o status de finalização da tarefa, e não apenas os itens separados nos postos.
Regra de Exibição
Atualmente, o relatório apresenta os itens separados nos postos de coleta, independentemente da finalização da tarefa.
Com a adequação proposta, o relatório deverá:
Manter a visualização atual dos itens separados;
Incluir uma seção adicional que exiba exclusivamente os itens pertencentes a volumes com tarefa finalizada.
Objetivo da Evolução
Garantir que o relatório reflita a real condição operacional da coleta.
Evitar divergências de informação entre itens separados e tarefas efetivamente concluídas.
Apoiar análises gerenciais e operacionais com base em dados consolidados.
Premissas
A inclusão da nova seção não altera regras de negócio existentes.
Não há impacto nos fluxos operacionais ou no envio de integrações.
A funcionalidade atua exclusivamente no âmbito de visualização e controle gerencial.
O objetivo é garantir que o operador e a supervisão consigam visualizar, em um único ponto, a performance do posto e o avanço das tarefas.
Tela atual da operação:

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Views Para KPIS e Relatórios.docx`  
**Heading:** Mapeamento dos processos Velox por View  
**Score:** — (semantico) | **ID:** 4924372dba7f984e

Cada uma das Views está diretamente associada a um processo do WCS Velox, conforme tabela abaixo:

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ BELEZA - ESPECIFICACAO DE SOFTWARE - ADITIVO AUTENTICAÇÃO MONITORAMENTO.docx`  
**Heading:** Obtenção do Token  
**Score:** — (nome-topico) | **ID:** af609e6dc5a62df1

Realizar uma requisição POST para a URL https://login.microsoftonline.com/97e05be6-37b8-44e4-a9d5-4bd3fd6d05fe/oauth2/v2.0/token, enviando no corpo da requisição, no formato x-www-form-urlencoded, as seguintes chaves:
grant_type = client_credentials
client_id = <client_id fornecido>
client_secret = <client_secret fornecido>
scope = https://graph.microsoft.com/.default
Exemplo (cURL):
curl --location 'https://login.microsoftonline.com/97e05be6-37b8-44e4-a9d5-4bd3fd6d05fe/oauth2/v2.0/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id=<client_id fornecido>' \
--data-urlencode 'client_secret=<client_secret fornecido>' \
--data-urlencode 'scope=https://graph.microsoft.com/.default'
O retorno da requisição contém o access_token, além do tipo do token (token_type = bearer) e do tempo de expiração (expires_in). O token possui validade limitada, sendo necessário obter um novo token quando o atual expirar.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ BELEZA - ESPECIFICACAO DE SOFTWARE - MOVIMENTAÇÃO E POSIÇÃO.docx`  
**Heading:** Movimentação e Posição no Transfer (Porta-Pallet)  
**Score:** — (semantico) | **ID:** cbe01c067bc3ad8c

Esta funcionalidade permitirá a transferência física e lógica de saldos entre endereços da área de Transfer (Porta-Pallet) diretamente via coletor de dados (Android), garantindo que o WCS Velox reflita a realidade física do armazém em tempo real.
O processo será realizado através de uma transação específica denominada "Movimentação Interna", onde o fluxo se inicia com o operador realizando a leitura do Endereço de Origem (código de barras da posição física), seguida pela identificação do material a ser movido através da leitura do LPN/Pallet.
Para concluir a operação, o operador deverá realizar a leitura do Endereço de Destino. Neste momento, o WCS executará automaticamente validações críticas de segurança antes de efetivar a troca: o sistema verificará se o endereço de destino está cadastrado, ativo e apto a receber carga (não bloqueado).
Uma vez validadas as regras, o Velox processará a baixa na origem e a entrada no destino instantaneamente, realizando a transferência integral do conteúdo do LPN e gerando um registro de histórico (Log com ID Operador, Data/Hora, De/Para) para garantir total rastreabilidade e suporte a auditorias.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_-_Aditivo_Views_KPIs_Beleza_REV2_tracked.docx`  
**Heading:** Mapeamento dos processos Velox por View  
**Score:** — (semantico) | **ID:** c51a6e7f546a8a9d

Cada uma das Views está diretamente associada a um processo do WCS Velox, conforme tabela abaixo:

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - API Controle de Usuarios.docx`  
**Heading:** API para Gestão de Usuários  
**Score:** — (semantico) | **ID:** 2300487747aa1d8b

Disponibilizar uma API que permita o sistema CPI se comunicar com o Velox para o gerenciamento de usuários, incluindo criação, leitura, atualização e exclusão (CRUD)
A funcionalidade deverá suportar o controle de vigência de acesso, possibilitando a ativação e desativação de usuários, conforme regras de férias, afastamentos temporários ou desligamentos definitivos.
Além das operações padrão de gerenciamento, deverão ser incluídos campos adicionais para auditoria e controle de validade dos acessos.
Incluir novos campos no gerenciamento e controle dos usuários

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - API Controle de Usuarios.docx`  
**Heading:** Regras funcionais  
**Score:** — (semantico) | **ID:** 6e698716d99eeaf2

Ativação/Desativação de usuários
O sistema deverá permitir a alteração do status do usuário de forma manual ou automática, considerando:
Ativo: usuário apto para operação
Permitir ativação ou desativação do usuário via plataforma (Velox)
Inativo por férias/afastamento: bloqueio temporário dentro do período informado
Desligado: bloqueio definitivo (Excluir usuário)
Reativado: retorno à operação após atualização de vigência
Quando informada a VALIDADE_FINAL, o sistema devera invalidar automaticamente o acesso após o término do período.
Resumo dos Endpoints:

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Dashboards e Acessos.docx`  
**Heading:** Controle de Acesso aos Dashboards  
**Score:** — (semantico) | **ID:** 33bf979290aace95

Será definida uma estrutura de controle de acesso para garantir que cada usuário visualize apenas os dados pertinentes ao seu escopo operacional.
Este controle deverá ser aplicado de forma transversal a todos os dashboards.
Regras Funcionais
O acesso aos dashboards será controlado por:
Perfil do usuário
Empresa(s) vinculada(s)
Centro(s) de distribuição
O usuário:
Não poderá visualizar dados fora do seu escopo
Terá dashboards filtrados automaticamente (sem necessidade de ação manual)

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Master Velox e API Férias.docx`  
**Heading:** API para Gestão de Usuários  
**Score:** — (semantico) | **ID:** 5f36c8a971f4637b

Disponibilizar uma API que permita o sistema CPI se comunicar com o Velox para o gerenciamento de usuários, incluindo criação, leitura, atualização e exclusão (CRUD)
A funcionalidade deverá suportar o controle de vigência de acesso, possibilitando a ativação e desativação de usuários, conforme regras de férias, afastamentos temporários ou desligamentos definitivos.
Além das operações padrão de gerenciamento, deverão ser incluídos campos adicionais para auditoria e controle de validade dos acessos.
Incluir novos campos no gerenciamento e controle dos usuários

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Master Velox e API Férias.docx`  
**Heading:** Regras funcionais  
**Score:** — (semantico) | **ID:** 8b9843cdb242c0c7

Ativação/Desativação de usuários
O sistema deverá permitir a alteração do status do usuário de forma manual ou automática, considerando:
Ativo: usuário apto para operação
Permitir ativação ou desativação do usuário via plataforma (Velox)
Inativo por férias/afastamento: bloqueio temporário dentro do período informado
Desligado: bloqueio definitivo (Excluir usuário)
Reativado: retorno à operação após atualização de vigência
Quando informada a VALIDADE_FINAL, o sistema devera invalidar automaticamente o acesso após o término do período.
Resumo dos Endpoints:

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Unificação de Order Start.docx`  
**Heading:** Adição na tela de Separação  
**Score:** — (semantico) | **ID:** caef43793c91ed3a

Incluir no cabeçalho da tela de separação, a informação da rampa de destino. Esta solicitação visa possibilitar a entrega dos volumes na rampa certa quando o pallet encher fisicamente. Além disso, manter a tela já existente da rampa de destino no final da separação
Tela para adicionar a informação de Rampa:

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Modos de Operação  
**Score:** — (semantico) | **ID:** 600945956083a457

O sistema deverá disponibilizar um parâmetro de operação com três opções mutuamente exclusivas, conforme tabela abaixo:

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Regras de Decisão no Modo Crosscheck  
**Score:** — (semantico) | **ID:** 15f0d6414eb2414d

Quando o modo Etiqueta + Caixa com IA estiver ativo, o sistema realizará a comparação entre as duas leituras e tomará a decisão de desvio com base em duas subparametrizações:

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Stage de Paletes  
**Score:** — (semantico) | **ID:** bb79ebe51521f31b

Tanto na conferência manual quanto na automática, deverá ser previsto um espaço físico dedicado ao acondicionamento dos paletes em processo de conferência (Stage In), de modo a evitar acúmulo desordenado de paletes pendentes nas áreas operacionais do CD.
O Stage In deverá observar os seguintes critérios mínimos:
Localização: área próxima às PTLs envolvidas no processo, de modo a reduzir o deslocamento do conferente entre a posição de fechamento e a posição de conferência.
Capacidade: dimensionamento compatível com o parâmetro de Limite Máximo de Paletes em Conferência Simultânea (definido no item de parametrização), garantindo que o número de posições físicas no Stage In seja igual ou superior ao limite sistêmico configurado.
Identificação: área devidamente sinalizada como destinada exclusivamente a paletes em conferência, com identificação visual clara que evite confusão com paletes finalizados ou em outros estágios do processo.
Fluxo de entrada: após o fechamento na PTL com o código produtivo do conferente, o palete é deslocado para uma posição livre no Stage In, onde permanecerá até a confirmação ou reinício da conferência.
Fluxo de saída: após a confirmação da conferência e o envio da integração de aloca pallet ao WMS, o palete é liberado do Stage In e segue para a etapa subsequente do processo logístico, liberando a posição física para receber um novo palete em conferência.
Bloqueio operacional: quando todas as posições do Stage In estiverem ocupadas, novos fechamentos com leitura do código produtivo do conferente deverão ser bloqueados sistemicamente, em alinhamento com o parâmetro de limite simultâneo de paletes em conferência.

---
**Origem:** [I23.125] ADITIVO — `I23.125 - PROJETO CRISTAL -  SP e MG - ESPECIFICAÇÃO DE ADITIVO FRACIONADOS.docx`  
**Heading:** Melhorias nos Processos de Separação Fracionados  
**Score:** — (semantico) | **ID:** efbec8c4c3b357ab

O processo de separação de produtos fracionados no sistema WCS receberá duas melhorias focadas na experiência do operador e nos alertas durante o processo, aplicáveis aos ambientes de Itapira-SP e Pouso Alegre-MG.
Aprimoramento dos Alertas Visuais de Erro
Anteriormente, ao ler um lote ou EAN incorreto, o sistema exibia uma mensagem de erro discreta no canto inferior da tela do coletor, que poderia passar despercebida pelo operador. A mudança consiste em implementar um alerta visual/sonoro. O novo alerta deverá ser proeminente, como um pop-up ou uma mensagem em caixa alta com cor de destaque (vermelho), garantindo que o operador perceba o erro imediatamente e corrija o processo antes de prosseguir.
Log de Auditoria do Método de Confirmação
O processo de separação de fracionados permite duas formas de confirmação: a leitura unitária de cada EAN ou a utilização da opção "Confirmar tudo". Atualmente, o sistema não diferencia qual método foi utilizado. A melhoria consiste em o WCS começar a registrar e controlar o método de confirmação de separação do item

---
**Origem:** [I23.125] ADITIVO — `I23.125 - PROJETO CRISTAL -  SP e MG - ESPECIFICAÇÃO DE ADITIVO FULL CASE.docx`  
**Heading:** Melhorias nos Processos de Separação Full Case  
**Score:** — (semantico) | **ID:** 9cedc0d5a1b75a53

O processo de separação de caixas fechadas (Full Case), realizado pelo operador no WCS, foi reestruturado para atender às novas demandas da operação. Anteriormente, o WCS validava se a UC (Unidade de Carga) lida era aquela que estava vinculada à remessa.
A principal mudança é que a validação do volume coletado passa a ser feita com base nas informações da própria etiqueta — SKU, Lote e Quantidade —, e não mais pela UC vinculada à remessa. Para isso, o sistema foi adaptado para lidar com os dois tipos de código datamatrix do cliente: um que já contempla a UC com as demais informações e outro que não a incluem.
Foi implementada a regra de que a primeira leitura deve ser, obrigatoriamente, a do código datamatrix padrão GS1. Se o WCS não identificar a UC nesta leitura, o sistema aguardará uma segunda leitura, que deverá conter apenas a informação da UC para completar os dados.
Dentro deste novo fluxo, a informação da UC é apenas capturada para ser enviada ao sistema WMS na mensagem de confirmação, sem ser validada no momento da separação, o que agiliza a tarefa do operador. Para se adequar a essa realidade de etiquetas com códigos separados, o sistema foi preparado tanto para o cenário atual (um datamatrix com produto/lote/quantidade e um código de barras separado para a UC) quanto para o cenário futuro, com todas as informações em um único código.
Para evitar erros de associação de dados de caixas distintas, a leitura do datamatrix principal (com produto, lote e quantidade) deverá sempre limpar os campos em tela ("refresh") antes de preenchê-los, garantindo a integridade da validação.
O WCS continua validando se a UC não foi utilizada, para prevenir erros de expedição. O reuso da etiqueta será permitido apenas se a remessa original tiver sido formalmente cancelada, o que mudará o status da UC para "em aberto".
A política de não permitir a separação parcial (shortpicking) e a necessidade de cancelar o pedido no sistema WCS em caso de falta de produto permanecem inalteradas.
Exemplo do código datamatrix sem UC:
Exemplo de código datamatrix com UC:

---
**Origem:** [I25.132] ADITIVO — `I25.132 - Aditivo Projeto Dia a Dia - Retorno de Montagem.docx`  
**Heading:** Solicitação de Aditivo  
**Score:** — (semantico) | **ID:** 9c68d2d866eecaa1

Solicita-se a evolução do retorno de montagem para que cada linha publicada em GPT_RETORNO_MONTAGEM_PALETES contenha, no mínimo, os campos descritos abaixo.

---
**Origem:** [I25.132] ADITIVO — `I25.132 - Aditivo Projeto Dia a Dia - Solicitação de Evolução.docx`  
**Heading:** Solicitação de Aditivo  
**Score:** — (semantico) | **ID:** f2d51cb186bc184c

Solicita-se a evolução do retorno de montagem para que cada linha publicada em GPT_RETORNO_MONTAGEM_PALETES contenha, no mínimo, os campos descritos abaixo.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Como Funciona o Algoritmo  
**Score:** — (semantico) | **ID:** 9013c0390ab32a01

O processo de geração da fila intercalada segue os passos abaixo:
Operador seleciona a rua e o posto de impressão na tela de OS fragilidade, conforme o fluxo já existente.
WCS consulta todas as missões pendentes para a rua selecionada.
WCS identifica a rampa de destino de cada missão com base no mapa de sorter ativo e agrupa os volumes por rampa.
WCS gera a fila de impressão intercalada: percorre as rampas em ciclo, emitindo 1 etiqueta por rampa a cada rodada. Exemplo com 4 rampas: Rampa 1 → Rampa 2 → Rampa 3 → Rampa 4 → Rampa 1 → Rampa 2 → ...
Rampas esgotadas saem do ciclo: quando todos os volumes de uma rampa são impressos, ela é removida da rotação. O sistema continua o rodízio apenas entre as rampas restantes.
Processo se encerra quando todas as rampas tiverem seus volumes totalmente impressos.
A ordenação dos endereços dentro da rua é mantida (crescente ou decrescente conforme a configuração da impressora). A intercalação atua sobre quais etiquetas são impressas em cada posição da fila, não sobre a ordem dos endereços.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Projeto Esperanca - Layout Etiqueta.docx`  
**Heading:** Etiqueta de início da ordem de separação  
**Score:** — (semantico) | **ID:** 77ee7797b5a733f3

A etiqueta de início da ordem de separação será utilizada para identificar claramente o ponto inicial do processo de separação referente a cada onda. Essa identificação é importante para organização operacional, início correto do fluxo e rápida visualização pelos operadores.
Para isso, será adicionada a palavra “INÍCIO” logo abaixo do QR Code, identificando de forma clara que aquela etiqueta marca o início da ordem de separação. A partir dessa etiqueta inicial, todas as demais etiquetas serão vinculadas à mesma onda até que uma nova etiqueta de início seja identificada, momento em que se inicia automaticamente outra onda. Esse mecanismo garante organização, rastreabilidade e leitura operacional adequada ao fluxo.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Projeto Esperanca - Pontos de Melhorias.docx`  
**Heading:** Inclusão do Campo “Tarefa” na Etiqueta  
**Score:** — (semantico) | **ID:** 0b1f39a87bd68cb8

Incluir na etiqueta a identificação do número da tarefa associada ao volume, com o objetivo de ampliar a rastreabilidade operacional e facilitar o tratamento de pendências. A informação permitirá que a equipe identifique rapidamente a origem do volume dentro do fluxo de separação, apoiando reprocessos, auditorias e retomadas de atividade.
Escopo Técnico
Inserção do campo “Tarefa” na estrutura de dados da impressão.
Ajuste do layout.
Garantir consistência da informação em reimpressões.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Exemplo de Configuração (Default)  
**Score:** — (semantico) | **ID:** 736e3baa71ec3b90

O sistema deve ser entregue apto a suportar a seguinte configuração utilizada como exemplo pelo cliente:

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Matriz de Fragilidade - PROJETO ESPERANCA - Rev 2.2.docx`  
**Heading:** Alteração no Funcionamento  
**Score:** — (semantico) | **ID:** dd2fa1064662112d

Para a definição da classificação na Matriz de Fragilidade, o sistema não utilizará a informação da integração de carga (Pedidos) e passará a consultar a Integração de Cadastro de Produtos.
Fonte da Informação: O WCS buscará o valor do campo "pesobruto" (peso unitário) diretamente na base de dados de produtos integrados.
Regra de Negócio: O sistema cruzará este peso unitário ("pesobruto") com a tabela de faixas configurada no Item 2 deste aditivo para determinar a qual Matriz (1, 2, 3 ou 4) o item pertence.
Observação Técnica: O campo PESOTOTAL da integração de carga será desconsiderado para este cálculo, visto que ele representa o peso multiplicado pela quantidade da Ordem de Serviço (OS), o que geraria distorções na classificação de fragilidade do item.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Stage de Indução - PROJETO ESPERANCA .docx`  
**Heading:** Descrição da Funcionalidade  
**Score:** — (semantico) | **ID:** ca30e080ac96389f

O WCS deverá disponibilizar uma tela de cadastro e gestão de endereços de stage, contendo todos os endereços utilizados pela operação.
Essa tela deverá permitir:
Cadastro, edição e exclusão de endereços de stage
Visualização da lista completa de endereços cadastrados
Impressão e Reimpressão de etiquetas de endereço:
Impressão unitária
Impressão em lote (múltiplos endereços)
Impressão de todos os endereços cadastrados
Regras de Negócio
Após a coleta o operador deverá:
Realizar a leitura do endereço de stage
O WCS deverá:
Validar se o endereço lido está cadastrado no sistema
Permitir a alocação somente para endereços válidos
Bloquear a alocação caso o endereço não exista no cadastro
Exibir mensagem de erro para endereços inválidos
Situação Atual (AS – IS)
Atualmente, o WCS permite a alocação para qualquer endereço informado, sem validação, o que pode gerar:
Alocações incorretas
Falta de rastreabilidade
Erros no fluxo de indução
Situação Proposta (TO-BE)
Com a nova funcionalidade:
Apenas endereços previamente cadastrados poderão ser utilizados
O WCS passa a validar o endereço de stage
O processo passa a ser mais seguro e padronizado
Benefícios Esperados
Redução de erros operacionais
Maior controle dos endereços de stage
Padronização do processo de indução
Melhoria na rastreabilidade

---
**Origem:** [I25.3515] ADITIVO — `I25_3515 - Aditivo Dashboard de Previsão Próximos Volumes por Rampa - Projeto Esperança - Rev.1_2.docx`  
**Heading:** Sinalização de Ociosidade – Alerta Visual da Rampa  
**Score:** — (semantico) | **ID:** a9968f70d5afd044

Este dashboard trará visibilidade de onde teremos ociosidade na alocação de volumes. Para isso, enquanto houver volumes desviados pendentes de alocação na rampa, o sistema deverá monitorar o tempo decorrido desde a última alocação realizada — ou, caso ainda não tenha ocorrido nenhuma alocação, desde o desvio do primeiro volume na rampa.
Regra de alerta: se um volume previsto for desviado e ultrapassar o tempo parametrizado sem alocação, o dashboard deverá piscar em vermelho a posição da rampa correspondente, alertando a operação sobre a divergência.
O alerta visual permanecerá ativo até que haja uma alocação na rampa em questão.

---
**Origem:** [I23.1412] ADITIVO — `I23.1412 - Aditivo Projeto FDBR - Regra de Scanning de Conferência.docx`  
**Heading:** API / REGRA DE VALIDAÇÃO DE LEITURA  
**Score:** — (semantico) | **ID:** ee0c44b95e9e9192

Atualmente, o processo de conferência realiza a validação da rastreabilidade por meio da leitura de string no padrão DataMatrix, contendo informações estruturadas para validação de:
EAN13 do produto;
Data de validade;
Lote;
Número sequencial.
A validação ocorre conforme a estrutura já implementada no sistema e será mantida sem alteração.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Aditivo Projeto FOX - Segundo Scanner.docx`  
**Heading:** Problema  
**Score:** — (semantico) | **ID:** d5545a06cff94407

Como o scanner permanece mais tempo fora da base do que carregando, ocorrem situações recorrentes de:
Falta de bateria do scanner durante a operação, causando paradas não programadas.
Atraso no processo de separação enquanto o operador aguarda o scanner recarregar ou busca um substituto.
Risco de leitura incorreta quando o scanner opera com bateria baixa, podendo gerar bipagens falhas.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Aditivo Projeto FOX - Segundo Scanner.docx`  
**Heading:** Opção de Alternância na Tela de Monitoramento  
**Score:** — (semantico) | **ID:** 8900fcf18f7ea86f

Será adicionada uma opção na tela de monitoramento já existente no sistema que permite à operação alternar, por rampa, entre os dois modos de leitura:
Acesso: Diretamente na tela de monitoramento que a operação já utiliza hoje.
Configuração por rampa: Cada rampa pode operar em modo diferente, de forma independente.
Alternância em tempo real: A troca de modo pode ser feita durante a operação, sem necessidade de reiniciar o sistema ou parar a rampa.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** CrossCheck na Rampa  
**Score:** — (semantico) | **ID:** 2b182e3b0aa3fbda

Em cada rampa, haverá um leitor de código de barras que realizará o processo de crosscheck Após o desvio do volume na rampa, conforme descrito a seguir:
Leitura do Volume: O leitor captura o código do volume presente na rampa.
Validação do WCS: O WCS verifica se o volume está alocado na rampa correta de acordo com o mapa de destinos.
Sinaleiro: O WCS envia uma instrução ao PLC para acender o sinaleiro:
Verde: O volume está na rampa correta.
Vermelho: O volume está na rampa incorreta.
Esse processo garante a validação final do desvio de cada volume, permitindo rápida identificação de inconsistências e auxiliando a operação a manter a precisão e rastreabilidade dos pedidos.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Etiqueta Picking Fracionado  
**Score:** — (semantico) | **ID:** 4ef3e8aa4e7bba83

Essa etiqueta será utilizada no processo de picking fracionado.

---
**Origem:** [I22.3322] ADITIVO — `I22.3322 - Aditivo Projeto Heart - Melhorias Tela de PTM.docx`  
**Heading:** Contador de Separados / Pendentes  
**Score:** — (semantico) | **ID:** 01a2820d775627a7

Localização:
Canto inferior direito da tela azul.
Funcionamento:
Este contador demonstrará: Coletados / Pendente
Exemplo prático:
Pedido com 10 caixas esperadas.
Apenas 8 caixas tiveram confirmação de coleta (pega).
Exibição na tela: 08
Interpretação Operacional:
Isso permite ao operador identificar que:
08 caixas já foram:
Induzidas na linha;
Separadas corretamente;
Confirmadas via sistema.
09 caixas ainda está pendente, podendo indicar:
Problema de coleta;
Falha operacional;
Volume ainda não induzido na linha de picking.
Volume entre o início da linha e a primeira coleta

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ MANHATTAM - Tradução AU06 - Pack ILPN Message.docx`  
**Heading:** Reconhecimento (Aceite)  
**Score:** — (semantico) | **ID:** b729cdc514cce692

Sua assinatura é necessária como prova de aceitação da extensão descrita acima e do custo estimado para que a programação possa começar.
C&A                                                                  C&A
By: Signature  ________________________      By: Signature   ________________________
Name: Printed ________________________      Name: Printed ________________________
Title:              ________________________      Title:              ________________________
Date:             ________________________       Date:             ________________________

---
**Origem:** [I23.3801] ADITIVO — `I23.3801 - Aditivo Projeto Octopus SC - OP Múltiplas Rampas.docx`  
**Heading:** Detalhamento Funcional  
**Score:** — (semantico) | **ID:** 6360aaed743ee9a0

Configuração de Permissão por Operador:
A tela de usuários contará com uma nova "flag" (opção de marcação) que define se o colaborador tem permissão para realizar logins em múltiplas rampas simultaneamente.
Por padrão, novos usuários podem vir com essa opção desabilitada, exigindo uma ação do supervisor para liberar a funcionalidade a operadores específicos.
Login Simultâneo em Rampas
Um colaborador produtivo com a flag acionada poderá se logar em duas ou mais rampas ao mesmo tempo.
Embora um único operador possa estar logado em múltiplas rampas, a operação física em cada rampa deverá ser realizada obrigatoriamente através do coletor de dados respectivo daquela rampa.
O sistema não deverá deslogar a rampa atual para que o operador faça um novo login

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.5.4 FINALIZAÇÃO DE UMA POSIÇÃO  
**Score:** — (semantico) | **ID:** 268f777a6e31a13d

Ao finalizar a alocação dos volumes de uma posição a mesma piscará o led em verde até que seja finalizado o processo, também subirá a posição para o começo da lista na tela do PDV, indicando com fundo verde que já está com todos os volumes.
Sendo assim o operador clicará na posição finalizada para atrelar o tote aos volumes dela.
Os volumes caso ultrapasse mais de um tote o MFC fará a cubagem e distribuição proporcional aos totes, gerando etiquetas conforme a quantidade de volumes para identificar os totes adicionais.
Etiquetas serão geradas somente caso haja necessidade de mais de um volume.
Caso um dos volumes não seja encontrado ou haja necessidade de expedir sem finalizar a quantidade total de volumes, haverá um botão para que o operador efetue o shortpicking, finalizando o picking daquela posição independente da quantidade de volumes que estiverem alocados.
O tote de consolidação do PTW sempre terá a mesma cubagem.
Consulta de histórico:
Por nº de pacote
Por nº de casulo
Por nº de pedido

---
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV17.docx`  
**Heading:** 3.5.4 FINALIZAÇÃO DE UMA POSIÇÃO  
**Score:** — (semantico) | **ID:** a77b8f2b822fec68

Ao finalizar a alocação dos volumes de uma posição a mesma piscará o led em verde até que seja finalizado o processo, também subirá a posição para o começo da lista na tela do PDV, indicando com fundo verde que já está com todos os volumes.
Sendo assim o operador clicará na posição finalizada para atrelar o tote aos volumes dela.
Os volumes caso ultrapasse mais de um tote o MFC fará a cubagem e distribuição proporcional aos totes, gerando etiquetas conforme a quantidade de volumes para identificar os totes adicionais.
Etiquetas serão geradas somente caso haja necessidade de mais de um volume.
Caso um dos volumes não seja encontrado ou haja necessidade de expedir sem finalizar a quantidade total de volumes, haverá um botão para que o operador efetue o shortpicking, finalizando o picking daquela posição independente da quantidade de volumes que estiverem alocados.
O tote de consolidação do PTW sempre terá a mesma cubagem.
Consulta de histórico:
Por nº de pacote
Por nº de casulo
Por nº de pedido

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** c95edf9eff939164

Imagem 1 - Tela de Login.
Tela com o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela imagem acima e ela é mostrada toda vez que um usuário tenta acessar a URL do sistema. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Home  
**Score:** — (semantico) | **ID:** 581ddabf529f4dac

Tela principal/Home.
Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** 85378c15f088a16d

O sistema permite ao usuário alterar cadastros de usuários, níveis de acessos e mapas de rota. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo cadastros. A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. Além disso, a tela de nível de acesso permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário. Por último, a tela de mapa de rota, permite a criação, edição e remoção da relação entre rotas e rampas de desvio no Sorter.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** 9f5b5327073790db

Tela de cadastro de usuário.
A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A imagem acima ilustra essa tela onde os dados dos usuários são listados em uma tabela que se encontra paginada de acordo com o valor do parâmetro Listagem no canto superior direito. Os dados mostrados para cada usuário são:
Descrição dos dados de usuário na tela de cadastro de usuário.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Criar/Editar/Remover usuário  
**Score:** — (semantico) | **ID:** bebbe20400a74ea1

Tela de criação/edição de usuário.
Ao selecionar um usuário e clicar no botão Incluir ou Editar, a tela ilustrada pela figura será aberta onde o usuário poderá editar o formulário do usuário.
Os campos disponibilizados são:
Campos do formulário de criação/edição de usuários

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** 5.6.	Nível de acesso  
**Score:** — (nome-topico) | **ID:** e53c2472fdefa688

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O nível de acesso é um conjunto de permissões que pode ser criado, editado e excluído na tela de nível de acesso. A figura lustra essa tela onde os dados dos níveis de acesso são listados em uma tabela que se encontra paginada de acordo com o valor do parâmetro Listagem no canto superior direito. Esses dados se encontram descritos na tabela.
Figura 1 - Tela de nível de acesso.
Descrição dos dados dos níveis de acesso na tela de nível de acesso.

---
**Origem:** [I20.1409] 2021 — `I20.1409 - ESPECIFICACAO SOFTWARE - Rev6.docx`  
**Heading:** Criar / Editar / Remover nível de acesso  
**Score:** — (semantico) | **ID:** f859834a16ea9e7e

Tela de nível de acesso.
Para criar, editar ou excluir um nível de acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. O primeiro e o segundo botão, representados por um símbolo “+” e um lápis, são utilizados para a criação e edição de um nível de acesso, respectivamente. Por outro lado, o último botão, representado por um símbolo “-” é utilizado para excluir um nível de acesso.
Modal de criação e edição de nível de acesso

---
**Origem:** [I21.103] 2021 — `I21.103 - ESPECIFICACAO DE SOFTWARE - ADICIONAL SORTER REISADO REV3.docx`  
**Heading:** Detalhamento da solicitação adicional  
**Score:** — (semantico) | **ID:** 3026445c335740ab

Para atender a solução que evita o carregamento dos veículos (caminhões) com volumes não pertencentes a carga do mesmo, foi desenvolvida a solução de leitura de volumes no final da rampa (Ponto final de domínio Invent), onde haverá um novo processo de leitura que pode ter um ou mais scanners para realizar a leitura do volume (código de barras ITF de 10 caracteres contido na etiqueta presente na caixa/volume), de maneira que com uma nova tela no sistema WCS Velox da Invent que será apresentada em um PDV e receberá as informações da leitura manual. Essa tela informará ao operador após a leitura se a caixa pertence ou não aquela rampa e existirá um relatório (log) para informar todos os volumes direcionados para as rampas de saída com as informações de quantidade de volumes esperados para rampa e quantidade já alocados com base na leitura no final da rampa.

---
**Origem:** [I21.103] 2021 — `I21.103 - ESPECIFICACAO DE SOFTWARE - ADICIONAL SORTER REISADO REV3.docx`  
**Heading:** Relatório – Log (Novo)  
**Score:** — (semantico) | **ID:** 2ed083361a4b15bf

Para todos os casos em que a caixa for alocada com sucesso (Caixa pertence a rampa/doca) o sistema WCS Velox contabiliza 1 registro de caixa no relatório (log) com as informações de data e hora, número de volume, número da onda e rampa/doca, os demais casos não devem conter no relatório.
O sistema WCS Velox deve registrar os logs de erros, ou seja, se a caixa passou em alguma rampa errada antes de seguir para a rampa correta, o sistema deve registrar essa informação e disponibilizar o relatório para visibilidade do usuário.
Exemplo: Caixa 1111111, foi lida na rampa D10 (errada) às 12:53hs e foi finalizada na rampa D08 (correta) as 13:30hs.
Relatório deve conter os filtros de data e hora, número de volume, número da onda e rampa/doca.
Segue exemplo da exibição do relatório abaixo:
Parte inferior do formulário

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** 781fe62314a0f583

Imagem 1 - Tela de Login.
Tela com o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela imagem acima e ela é mostrada toda vez que um usuário tenta acessar a URL do sistema. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Home  
**Score:** — (semantico) | **ID:** dcee36d9eea215bd

Tela principal/Home.
Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** d25885072b8eaf1d

O sistema permite ao usuário alterar cadastros de usuários, níveis de acessos e mapas de rota. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo cadastros. A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. Além disso, a tela de nível de acesso permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário. Por último, a tela de mapa de rota, permite a criação, edição e remoção da relação entre rotas e rampas de desvio no Sorter.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** 06f40ac35dd88e6f

Tela de cadastro de usuário.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev 1.docx`  
**Heading:** Criar / Editar / Remover nível de acesso  
**Score:** — (semantico) | **ID:** aa63cc167b3bcf2b

Tela de nível de acesso.
Para criar, editar ou excluir um nível de acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. O primeiro e o segundo botão, representados por um símbolo “+” e um lápis, são utilizados para a criação e edição de um nível de acesso, respectivamente. Por outro lado, o último botão, representado por um símbolo “-” é utilizado para excluir um nível de acesso.
Modal de criação e edição de nível de acesso

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** 420f029d3ac22ca0

Figura  - Tela de Login.
Tela com o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela imagem acima e ela é mostrada toda vez que um usuário tenta acessar a URL do sistema. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Home  
**Score:** — (semantico) | **ID:** 580806e66534b3be

Figura  - Tela principal/Home.
Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** 456aef9c61347a16

O sistema permite ao usuário alterar cadastros de usuários, níveis de acessos e mapas de rota. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo cadastros. A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. Além disso, a tela de nível de acesso permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário. Por último, a tela de mapa de rota, permite a criação, edição e remoção da relação entre rotas e rampas de desvio no Sorter.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** bac7ec64c17fb794

Figura  - Tela de cadastro de usuário.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev.0 - FASE 2.docx`  
**Heading:** Criar / Editar / Remover nível de acesso  
**Score:** — (semantico) | **ID:** 9052b9b036bb34c4

Figura  - Tela de nível de acesso.
Para criar, editar ou excluir um nível de acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. O primeiro e o segundo botão, representados por um símbolo “+” e um lápis, são utilizados para a criação e edição de um nível de acesso, respectivamente. Por outro lado, o último botão, representado por um símbolo “-” é utilizado para excluir um nível de acesso.
Figura  - Modal de criação e edição de nível de acesso

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** e8f6601cf2fad42b

Imagem 1 - Tela de Login.
Tela com o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela imagem acima e ela é mostrada toda vez que um usuário tenta acessar a URL do sistema. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Home  
**Score:** — (semantico) | **ID:** b42a8a8b7ed25cac

Tela principal/Home.
Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** 3df67fb48062d385

O sistema permite ao usuário alterar cadastros de usuários, níveis de acessos e mapas de rota. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo cadastros. A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. Além disso, a tela de nível de acesso permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário. Por último, a tela de mapa de rota, permite a criação, edição e remoção da relação entre rotas e rampas de desvio no Sorter.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** 9b902f4da10523ee

Tela de cadastro de usuário.

---
**Origem:** [I21.125] 2021 — `I21.125 - ESPECIFICACAO SOFTWARE - Rev0 - edit.docx`  
**Heading:** Criar / Editar / Remover nível de acesso  
**Score:** — (semantico) | **ID:** 4cf3fe5960bb9589

Tela de nível de acesso.
Para criar, editar ou excluir um nível de acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. O primeiro e o segundo botão, representados por um símbolo “+” e um lápis, são utilizados para a criação e edição de um nível de acesso, respectivamente. Por outro lado, o último botão, representado por um símbolo “-” é utilizado para excluir um nível de acesso.
Modal de criação e edição de nível de acesso

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** a754e0138a27d5be

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** f27c9b78012c3edd

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** 98b0ee4308525d66

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** fd555c1eb817cb2c

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema MFC. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** b2dbe70a98339e9d

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** 7a33425aa3f617f6

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** 738a86020b5eec0d

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** 90fcbe2899b97c7c

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** 281eac30b9e9afad

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema MFC. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** 33cea984cba1cc39

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** f4a497387b3e7311

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** c523d307ea981b1d

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** fe75366b8c9da6e5

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** 3e25f9e40c5b8032

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema MFC. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** 30def626d4f27178

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY - DPH.HIGIENE.LIMPEZA REV1.docx`  
**Heading:** Alteração do Agrupamento de Categorias  
**Score:** — (semantico) | **ID:** ff65e5a308db2f69

O operador poderá modificar o agrupamento das categorias dentro da caixa de separação. Isso é especialmente útil em situações.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY - DPH.HIGIENE.LIMPEZA REV1.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** 47f29268b1366438

Para garantir uma gestão segura e eficaz, os parâmetros do Velox são configurados por níveis de acesso. Isso significa que apenas operadores com acesso avançado podem controlar e modificar essas e as demais funcionalidades críticas do sistema. Este controle é essencial para a segurança do sistema e para a proteção das informações sensíveis.
Diferentes níveis de acesso são atribuídos a usuários com base em suas funções e responsabilidades. Usuários com acesso básico podem realizar operações diárias, enquanto aqueles com acesso avançado têm permissão para configurar e gerenciar parâmetros essenciais do sistema.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - ESPECIFICACAO DE SOFTWARE - MONTERREY - DPH.HIGIENE.LIMPEZA REV1.docx`  
**Heading:** Controle de Funcionalidades  
**Score:** — (semantico) | **ID:** 41b3049df28059ca

Operadores com acesso avançado têm a capacidade de controlar as funcionalidades de cadastro, edição e exclusão de categorias, bem como a modificação dos parâmetros de agrupamento. Este controle centralizado ajuda a prevenir mudanças não autorizadas e garante que apenas usuários qualificados façam ajustes importantes no sistema.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Tela de Login  
**Score:** — (semantico) | **ID:** c58ce016b857845b

Figura 1 - Tela de Login
Tela com o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela imagem acima e ela é mostrada toda vez que um usuário tenta acessar a URL do sistema. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Home  
**Score:** — (semantico) | **ID:** c0b155d1ef7d7edd

Figura 2 – Home
Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra um menu (lateral esquerdo) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerdo) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** 1c3ae3fecfc94263

O sistema permite ao usuário alterar cadastros de usuários, níveis de acessos e mapas de rota. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo cadastros. A tela de cadastro de usuário permite a criação, edição dos usuários que terão acesso ao sistema. Além disso, a tela de nível de acesso permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário. Por último, a tela de mapa de rota, permite a criação edição e remoção da relação entre rotas e rampas de desvio no sorter.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** 874aadd55d6c29a3

Figura 3 - Tela de cadastro de usuário
A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A imagem acima ilustra essa tela onde os dados dos usuários são listados em uma tabela que se encontra paginada de acordo com o valor do parâmetro listagem no canto superior direito. Os dados mostrados para cada usuário são:
Tabela 1 - Descrição dos dados de usuário na tela de cadastro de usuário

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Criar/Editar/Remover usuário  
**Score:** — (semantico) | **ID:** aa4dba5401b2f2be

Figura 4 - Tela de criação/edição de usuário.
Ao selecionar um usuário e clicar no botão Incluir ou Editar, a tela ilustrada pela figura será aberta onde o usuário poderá editar o formulário do usuário.
Os campos disponibilizados são:
Tabela 2 - Campos do formulário de criação/edição de usuário

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** 8fbe7bd269181805

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O nível de acesso é um conjunto de permissões que pode ser criado, editado e excluído na tela de nível de acesso. A figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela que encontra paginada de acordo com o valor do parâmetro Listagem no canto superior direito. Esses dados se encontram descritos na tabela.
Figura 5 - Tela de nível de acesso
Tabela 3 - Descrição dos dados dos níveis de acesso na tela de nível de acesso.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Criar/Editar/Remover nível de acesso  
**Score:** — (semantico) | **ID:** 74dadc1c569fd7d4

Figura 6 - Tela de nível de acesso
Para criar, editar ou excluir um nível de acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. O primeiro e o segundo botão, representados por um símbolo “+” e um lápis, são utilizados para a criação e edição de um nível de acesso, respectivamente. Por outro lado, o último botão, representado por um símbolo “-” é utilizado para excluir um nível de acesso.
Figura 7 - Modal de criação e edição de nível de acesso

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Tela de Login  
**Score:** — (semantico) | **ID:** 36465499c8f0aff4

Figura 1 - Tela de Login
Tela com o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela imagem acima e ela é mostrada toda vez que um usuário tenta acessar a URL do sistema. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Home  
**Score:** — (semantico) | **ID:** bdf18181ab011e1d

Figura 2 – Home
Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra um menu (lateral esquerdo) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerdo) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** 3f6afce34a081347

O sistema permite ao usuário alterar cadastros de usuários, níveis de acessos e mapas de rota. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo cadastros. A tela de cadastro de usuário permite a criação, edição dos usuários que terão acesso ao sistema. Além disso, a tela de nível de acesso permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário. Por último, a tela de mapa de rota, permite a criação edição e remoção da relação entre rotas e rampas de desvio no sorter.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** 619c75c9739f3de9

Figura 3 - Tela de cadastro de usuário
A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A imagem acima ilustra essa tela onde os dados dos usuários são listados em uma tabela que se encontra paginada de acordo com o valor do parâmetro listagem no canto superior direito. Os dados mostrados para cada usuário são:
Tabela 1 - Descrição dos dados de usuário na tela de cadastro de usuário

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Criar/Editar/Remover usuário  
**Score:** — (semantico) | **ID:** 9d6b703631403950

Figura 4 - Tela de criação/edição de usuário.
Ao selecionar um usuário e clicar no botão Incluir ou Editar, a tela ilustrada pela figura será aberta onde o usuário poderá editar o formulário do usuário.
Os campos disponibilizados são:
Tabela 2 - Campos do formulário de criação/edição de usuário

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** 51543d2ac88b254b

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O nível de acesso é um conjunto de permissões que pode ser criado, editado e excluído na tela de nível de acesso. A figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela que encontra paginada de acordo com o valor do parâmetro Listagem no canto superior direito. Esses dados se encontram descritos na tabela.
Figura 5 - Tela de nível de acesso
Tabela 3 - Descrição dos dados dos níveis de acesso na tela de nível de acesso.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Criar/Editar/Remover nível de acesso  
**Score:** — (semantico) | **ID:** fdf44dc4f2e68020

Figura 6 - Tela de nível de acesso
Para criar, editar ou excluir um nível de acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. O primeiro e o segundo botão, representados por um símbolo “+” e um lápis, são utilizados para a criação e edição de um nível de acesso, respectivamente. Por outro lado, o último botão, representado por um símbolo “-” é utilizado para excluir um nível de acesso.
Figura 7 - Modal de criação e edição de nível de acesso

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Liberação e bloqueio de estações  
**Score:** — (semantico) | **ID:** fa827973d03f67bb

Sistema WCS deve possuir a opção para ativar e desativar uma ou mais estações.
No caso em que a estação esteja desativada, o WCS deve desviar em outra estação que esteja ativa e que contenha os itens da estação bloqueada, com isso ao chegar nessa segunda estação a caixa deve ser desviada.
O WCS não deverá realizar o desvio de caixas em estações que estiverem desativadas.
Ao ser ativada novamente, WCS volta a realizar os desvios normalmente.
Por exemplo: Estação 2 está desativada, e os itens do pedido constam cadastrados na estação 3, o sistema MFC deverá reconhecer a partir do order start que a estação 2 está fechada e encaminhar a caixa automaticamente para a estação 3.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Tela de Login  
**Score:** — (semantico) | **ID:** c357400bc768291e

Figura 1 - Tela de Login
Tela com o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela imagem acima e ela é mostrada toda vez que um usuário tenta acessar a URL do sistema. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Home  
**Score:** — (semantico) | **ID:** 0969a7ef62bb4dc0

Figura 2 – Home
Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra um menu (lateral esquerdo) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerdo) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** c6d3a44f0f1e4e54

O sistema permite ao usuário alterar cadastros de usuários, níveis de acessos e mapas de rota. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo cadastros. A tela de cadastro de usuário permite a criação, edição dos usuários que terão acesso ao sistema. Além disso, a tela de nível de acesso permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário. Por último, a tela de mapa de rota, permite a criação edição e remoção da relação entre rotas e rampas de desvio no sorter.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** a3118342e76f21ee

Figura 3 - Tela de cadastro de usuário
A tela de cadastro de usuário permite a criação, edição e remoção dos usuários  que terão acesso ao sistema. A imagem acima ilustra essa tela onde os dados dos usuários são listados em uma tabela que se encontra paginada de acordo com o valor do parâmetro listagem no canto superior direito.
Os dados mostrados para cada usuário são:
Tabela 1 - Descrição dos dados de usuário na tela de cadastro de usuário

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Criar/Editar/Remover usuário  
**Score:** — (semantico) | **ID:** 939e659692b57fb7

Figura 4 - Tela de criação/edição de usuário.
Ao selecionar um usuário e clicar no botão Incluir ou Editar, a tela ilustrada pela figura será aberta onde o usuário poderá editar o formulário do usuário.
Os campos disponibilizados são:
Tabela 2 - Campos do formulário de criação/edição de usuário

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** b3ebab45cc558d13

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de  acesso. O nível de acesso é um conjunto de permissões que pode ser criado, editado e excluído na tela de nível de acesso. A figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela de acordo com o valor do parâmetro. Listagem no canto superior direito.
Esses dados se encontram descritos na tabela.
Figura 5 - Tela de nível de acesso
Tabela 3 - Descrição dos dados dos níveis de acesso na tela de nível de acesso.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Criar/Editar/Remover nível de acesso  
**Score:** — (semantico) | **ID:** 3d83e2ba74088d6e

Figura 6 - Tela de nível de acesso
Para criar, editar ou excluir um nível de acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. O primeiro e o segundo botão, representados por um símbolo “+” e um lápis, são utilizados para a criação e edição de um nível de acesso, respectivamente. Por outro lado, o último botão, representado por um símbolo “-” é utilizado para excluir um nível de acesso.
Figura 7 - Modal de criação e edição de nível de acesso

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Tela de Login  
**Score:** — (semantico) | **ID:** 61b9a1ce9b78ff12

Figura 1 - Tela de Login
Tela com o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela imagem acima e ela é mostrada toda vez que um usuário tenta acessar a URL do sistema. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Home  
**Score:** — (semantico) | **ID:** 60041c633a221a06

Figura 2 – Home
Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra um menu (lateral esquerdo) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerdo) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** 64c881df1a1e0f38

O sistema permite ao usuário alterar cadastros de usuários, níveis de acessos e mapas de rota. Essas telas podem ser acessadas pelo menu lateral esquerdo no grupo cadastros. A tela de cadastro de usuário permite a criação, edição dos usuários que terão acesso ao sistema. Além disso, a tela de nível de acesso permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário. Por último, a tela de mapa de rota, permite a criação edição e remoção da relação entre rotas e rampas de desvio no sorter.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** 90f7c21474aad612

Figura 3 - Tela de cadastro de usuário
A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A imagem acima ilustra essa tela onde os dados dos usuários são listados em uma tabela que se encontra paginada de acordo com o valor do parâmetro listagem no canto superior direito. Os dados mostrados para cada usuário são:
Tabela 1 - Descrição dos dados de usuário na tela de cadastro de usuário

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Criar/Editar/Remover usuário  
**Score:** — (semantico) | **ID:** 12423c2d5debbf4e

Figura 4 - Tela de criação/edição de usuário.
Ao selecionar um usuário e clicar no botão Incluir ou Editar, a tela ilustrada pela figura será aberta onde o usuário poderá editar o formulário do usuário.
Os campos disponibilizados são:
Tabela 2 - Campos do formulário de criação/edição de usuário

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** d3506ff43b8b3607

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O nível de acesso é um conjunto de permissões que pode ser criado, editado e excluído na tela de nível de acesso. A figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela que encontra paginada de acordo com o valor do parâmetro Listagem no canto superior direito. Esses dados se encontram descritos na tabela.
Figura 5 - Tela de nível de acesso
Tabela 3 - Descrição dos dados dos níveis de acesso na tela de nível de acesso.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Criar/Editar/Remover nível de acesso  
**Score:** — (semantico) | **ID:** 899e8113a6f96494

Figura 6 - Tela de nível de acesso
Para criar, editar ou excluir um nível de acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. O primeiro e o segundo botão, representados por um símbolo “+” e um lápis, são utilizados para a criação e edição de um nível de acesso, respectivamente. Por outro lado, o último botão, representado por um símbolo “-” é utilizado para excluir um nível de acesso.
Figura 7 - Modal de criação e edição de nível de acesso

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferênbcia + Relatorio.docx`  
**Heading:** Tela de Operadores por Posto  
**Score:** — (semantico) | **ID:** 12684a08338dd38c

Criação de uma tela para informar qual operador está alocado em cada posto de trabalho, de forma dinâmica.
Implementação de um botão denominado “Encerrar Turno”, com a função de deslogar todos os operadores simultaneamente de seus respectivos postos.
Sugestão de tela:

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Endpoint de destino (JSON Rest)  
**Score:** — (semantico) | **ID:** ba4d3bde2cdf1a8e

Endpoint (JADLOG) – A ser desenvolvido
Autenticação básica (JADLOG) – Token de autenticação
o usuário/senha (invent:1nv3nt)
REQUEST:
Sistema (INVENT)  Sistema (JadLog)
Tabela 2 - Definição de campos a serem enviados via JSON

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Tela de login  
**Score:** — (semantico) | **ID:** 831dee816f1458c0

Tela com objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de login se encontra ilustrada pela imagem acima e é mostrada toda vez que um usuário acessar a URL (a definir) do sistema. Assim, para acessar o sistema Invent, o usuário deverá preencher o formulário com usuário e senha.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Tela Home  
**Score:** — (semantico) | **ID:** cc466166a0a541e4

Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra o menu (lateral esquerdo) que pode ser usado para navegar por outras páginas do sistema, o nome e status do usuário (canto superior direito), e opções de deixar a tela mais clara ou tela cheia (canto superior direito).

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** 9c4d9ece9e111117

O sistema permite ao usuário alterar cadastros de usuários, grupos de acessos e funções para cada usuário. Também o cadastro de rotas/mapas/receitas conforme necessidade da operação do cliente. Essas telas poderão ser acessadas pelo menu esquerdo da tela do sistema invent. Tanto na tela de cadastro de usuários, rotas e mapas/receitas, existe a opção de cadastrar e excluir cadastro.
Além disso, a tela de cadastro de usuário em nível de acesso, permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** 1dcfcf69b2adc5dd

Figura 3 - Tela Usuários
A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A imagem acima ilustra essa tela onde os dados dos usuários são listados em uma tabela.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:**  Relatório – Produção por Período  
**Score:** — (semantico) | **ID:** 672fae46d5994b85

Nesse relatório, selecionamento um intervalo de tempo e ele mostra a informação de quantas caixas foram desviadas com sucesso e quantas seguiram para rejeito.
Figura 5 - Relatório - Produção por Período

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Terminal de consulta  
**Score:** — (semantico) | **ID:** 22c5676ef49c7c12

Haverá 01 (um) terminal de consulta para acesso as informações do sistema, permitira também visualizar os relatórios e outras operações do sistema. Neste caso, 01(um) desktop auxiliará o operador com os principais recursos necessários para a operação.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Endpoint de destino (JSON Rest)  
**Score:** — (semantico) | **ID:** 1f85eee78b072b9b

Endpoint (JADLOG) – A ser desenvolvido
Autenticação básica (JADLOG) – Token de autenticação
o usuário|senha (invent:1nv3nt)
REQUEST:
Sistema (INVENT)  Sistema (JadLog)
Tabela 2 - Definição de campos a serem enviados via JSON

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Tela de login  
**Score:** — (semantico) | **ID:** 8438fe350d1a6aad

Tela com objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de login se encontra ilustrada pela imagem acima e é mostrada toda vez que um usuário acessar a URL (a definir) do sistema. Assim, para acessar o sistema Invent, o usuário deverá preencher o formulário com usuário e senha.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Tela Home  
**Score:** — (semantico) | **ID:** d3158aef01a5fbff

Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra o menu (lateral esquerdo) que pode ser usado para navegar por outras páginas do sistema, o nome e status do usuário (canto superior direito), e opções de deixar a tela mais clara ou tela cheia (canto superior direito).

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** a0ee1eb195e919fb

O sistema permite ao usuário alterar cadastros de usuários, grupos de acessos e funções para cada usuário. Também o cadastro de rotas/mapas/receitas conforme necessidade da operação do cliente. Essas telas poderão ser acessadas pelo menu esquerdo da tela do sistema invent. Tanto na tela de cadastro de usuários, rotas e mapas/receitas, existe a opção de cadastrar e excluir cadastro.
Além disso, a tela de cadastro de usuário em nível de acesso, permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** 6b25f8f63028689e

Figura 3 - Tela Usuários
A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A imagem acima ilustra essa tela onde os dados dos usuários são listados em uma tabela.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:**  Relatório – Produção por Período  
**Score:** — (semantico) | **ID:** 4ce38449ab4d069f

Nesse relatório, selecionamento um intervalo de tempo e ele mostra a informação de quantas caixas foram desviadas com sucesso e quantas seguiram para rejeito.
Figura 5 - Relatório - Produção por Período

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Terminal de consulta  
**Score:** — (semantico) | **ID:** 45e5da8f51d0e484

Haverá 01 (um) terminal de consulta para acesso as informações do sistema, permitira também visualizar os relatórios e outras operações do sistema. Neste caso, 01(um) desktop auxiliará o operador com os principais recursos necessários para a operação.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Multi-Volumes  
**Score:** — (semantico) | **ID:** 59df3ee6765b42d8

Quando pedido for “multivolumes” e for composto somente por produtos Venus com mais de 4 premades (120 pods/capsulas) as caixas serão enviadas da mesma forma que os pedidos mono porém, com mais de um volume.
São considerados Multi-Volumes quando:
Caso o pedido contenha produtos de Geração 1 (Pollux Fase C) e Geração 2 (Pollux Venus Fase D)
Caso o pedido contenha produtos de Pollux Venus e produtos a serem separados no PTL.
Caso o pedido tenha mais de 4 premades, nesse caso seja gerado mais de 1 caixa para o mesmo pedido, visto que cada caixa comporta 4 volumes.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Autenticação via Cookie  
**Score:** — (semantico) | **ID:** e411857c68c63661

Integração para realizar a autenticação no WMS do cliente.
Origem: MFC (Invent)
Destino: WMS
Método: POST

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** 97a6ce91c77ef423

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** 1b45133de0d1a92f

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** 32d80b1e589e53e8

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** 4a00eb549399cf43

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema MFC. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** b58fbd9798f6b5f0

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** 1858667bb27f11bb

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** d3e7cc39cf1374d9

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** 1394cf00628ee797

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** ea9cab28d72bbe76

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema MFC. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** fc5aa308e10d5bb0

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** a05f7b31d87a7458

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** 0a7a73955d8bc0b6

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** 8f65823d351cfb43

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** a42a99eaa83bb3ba

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema MFC. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** 20b1e8da6abae4dc

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** 90f008359e230dcf

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema WCS, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** 6973f3dcc562493f

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** c5eec4bf67b621e8

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema WCS.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema WCS.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** 0bc088f57dbd7ee7

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema WCS. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema WCS.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** 10407810c404df52

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** 521f53063449cf50

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do WCS, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** be30cd055bd634b0

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** 24e38be61e11e4f4

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** 182cce570bf38f2a

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** 54904dce53def6a8

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema MFC. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** 222e11e07e8264ec

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** 31f4e969ee707948

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema WCS, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** 9cf4a47741fffcbd

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** e4b5a4fc5eb79213

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema WCS.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema WCS.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** ff2c6743c540a455

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema WCS. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema WCS.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** 69e473bb4f0eddb7

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** ebafb2dca90b973a

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do WCS, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** 9ef6b426a18b6f4c

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** cc8b511455f6dafe

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** b1836232ace85cb4

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** 4c3ec3e85f81fe5c

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema MFC. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** 77f004f8618b3c48

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** 08b6197c91e9746d

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema WCS, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** 75759df38e080e2d

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** f7ecf6eb3733fa54

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema WCS.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema WCS.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** 65520a8a7e7e02da

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema WCS. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema WCS.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** f915e5afc35f6a76

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar nos botões Incluir ou Editar, um modal será aberto com o campo para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Parâmetro  
**Score:** — (semantico) | **ID:** 008e9eacae59ef05

Por padrão, o usuário comum somente terá permissão para configurar os Parâmetros do WCS, enquanto outras telas de configurações serão instruídas ao técnico responsável durante o treinamento operacional. A figura apresenta a tela de parâmetros.
Ao selecionar o campo Parâmetros vai abrir uma tela aonde usuário pode incluir, editar e excluir um parâmetro para customização do sistema. E na figura mostra a tela com os seguintes dados:
Nome do parâmetro: Nome identificação do parâmetro.
Valor: Valor correspondente ao parâmetro.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** a627398877161bc9

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema MFC, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** 9cde05cce25bddc7

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Usuário  
**Score:** — (semantico) | **ID:** ddee2a5472c8083a

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:
Código: Código de identificação único do usuário no sistema.
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Posto: Indica o local atual de trabalho do usuário (funcionalidade limitada a módulos específicos).
Ao selecionar um usuário e clicar no botão Editar ou diretamente clicar no botão Incluir, a tela ilustrada na figura será apresentada, onde o usuário poderá incluir ou editar o formulário do usuário. Os dados disponibilizados são:
Código: Código de identificação único do usuário no sistema (não editável).
Nome: Nome do usuário.
Supervisor: Indica se o usuário é supervisor.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Login: Nome de usuário que será utilizado para autenticação na tela de login.
Login numérico: É o código utilizado para autenticação na tela de login do PADPICKING.
Senha: Senha do usuário para o acesso ao sistema.
Nível de Acesso: São as permissões do usuário.
Habilitado Picking: Se o usuário vai ser habilitado a fazer picking ou não (funcionalidade limitada a módulos específicos).
Habilitado Conferência: Se o usuário vai ser habilitado a fazer conferência ou não (funcionalidade limitada a módulos específicos).
Habilitado Carregamento: Se o usuário vai ser habilitado a fazer carregamento ou não (funcionalidade limitada a módulos específicos).
Habilitado Recebimento: Se o usuário vai ser habilitado a fazer o recebimento ou não (funcionalidade limitada a módulos específicos).
Nesta mesma tela temos a opção de vincular um ou mais postos ao usuário, pode editar esses postos que estão já vinculados e até mesmo excluir. Ao selecionar o botão (+) mais para vincular um posto, uma nova tela será apresentada. A figura apresenta esta nova tela. Os dados disponibilizados são:
Posto: Número de identificação do posto
Prioridade: Selecionar um número entre 1 e 5 conforme a prioridade do usuário.
Tipo de endereço: Selecionar entre térreo, aéreo ou ambos.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Nível de acesso  
**Score:** — (nome-topico) | **ID:** b844620aac8aa90d

Ao criar um usuário, suas permissões são definidas de acordo com seu nível de acesso. O Nível de Acesso é um conjunto de permissões de acesso ao sistema MFC. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade. Os dados apresentados são:
Código: Código de identificação único do nível de acesso no sistema.
Descrição: Nome/descrição do nível de acesso.
Status: Indica se o nível de acesso está ativo para uso ou não.
Para incluir, editar ou excluir um Nível de Acesso, o usuário deverá selecionar os botões da lateral esquerda da tela. Ao clicar para incluir, a tela representada na figura será apresentada. Assim sendo necessário preencher os seguintes dados:
Descrição: Nome/descrição do nível de acesso.
Situação: Indica se o usuário pode ou não acessar o sistema MFC.
Após preencher esses dados, será necessário clicar no botão, representado por um símbolo “+”, para assim estar adicionando os acessos ao nível. Caso seja necessário excluir algum acesso do nível, é só clicar no botão representado por um símbolo “-”.
A tela representada pela figura, apresenta os acessos que poderão ser vinculados ao nível de acesso.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** 1d6af58c223df166

O processo de fechamento de pallet será visual:
Conforme descrito no tópico 3.1.3, os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet, nesse caso o sinaleiro apagará informando que não existe pallet aberto.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Login  
**Score:** — (nome-topico) | **ID:** 78fb3dd599f5437b

A tela de login tem o objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de Login se encontra ilustrada pela Figura. Assim, para acessar o sistema WCS, o usuário deverá preencher o formulário com seu usuário e senha.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Tela principal  
**Score:** — (semantico) | **ID:** c21ad3f61d22d499

Após realizar o login, o usuário será direcionado para a tela principal/home, ela está representada pela figura. Essa tela mostra um menu (lateral esquerda) que pode ser usado para navegar para outras páginas do sistema, o nome e status do usuário (superior esquerda) e um conjunto de atalhos localizado no centro da tela.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** c617d6248b585d26

O sistema permite ao usuário inserir, editar e remover usuários do sistema.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** 4d2d98f2d22c3cd3

A tela do item Usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A Figura ilustra essa tela, onde os dados dos usuários são listados em uma tabela. Por padrão o sistema sempre abrirá uma tela de pesquisa primeiro e posteriormente a tela de alteração ou inclusão das informações. Os dados mostrados para cada usuário são:

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Grupos de acesso  
**Score:** — (semantico) | **ID:** 0af720f4a307a3d3

Ao criar um usuário, suas permissões são definidas de acordo com seu grupo de acesso. O Grupo de Acesso é um conjunto de permissões de acesso ao sistema WCS. A Figura ilustra essa tela onde os dados dos níveis de acesso são listados em uma tabela, podendo ser criado, editado e/ou excluído conforme a necessidade.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Rota  
**Score:** — (semantico) | **ID:** 80135f6d92728624

As rotas do sistema deverão ser cadastradas na tela de rota ilustrada pela Figura. Ao clicar no botão cadastrar, um modal será aberto com os campos para o preenchimento da rota que deverá ser realizado de acordo com a rota que é integrada pelo sistema do cliente. Além disso, uma rota pode ser excluída ou inativada caso necessário.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Entrada de Cargas  
**Score:** — (semantico) | **ID:** 35987e700868c8c5

Nessa etapa o operador informa para o sistema VELOX que a carga deu entrada na operação, e por qual processo de inspeção ela vai passar.
Operador precisa bipar o código do manifesto que identifica a carga, selecionar qual vai ser a verificação/inspeção pela qual a carga vai passar. Se a verificação pela qual essa carga irá passar for a mesma da lista dela, basta manter a opção “Usar verificação da lista de puxe” marcada e em seguida clicar no botão confirmar.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Saída da Inspeção  
**Score:** — (semantico) | **ID:** 9f4a460bdf75882e

O operador deverá indicar ao sistema VELOX as cargas que já passaram pelo processo de inspeção, (que foi selecionado anteriormente na tela de entrada de cargas), e informar em qual pulmão esta carga foi alocada.
O operador bipa o código do manifesto que identifica a carga, digita qual o número do pulmão que foi alocado, em seguida clica no botão confirmar.
OBS: O número padrão do pulmão está estipulado como 1, se for necessário alterar o número do pulmão, basta o operador digitar o novo número e bipar a carga e confirmar.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Criação de ULDs e Paletização de Cargas  
**Score:** — (semantico) | **ID:** e54486e4cb48c7e4

Esta etapa está subdividida em três abas, onde o operador poderá registrar as ULDs que ele utilizará para alocar as cargas, e fazer o processo de paletização propriamente dito, bem como realizar cortes de ULD.
Na aba (Cadastro de ULDs) o operador precisa vincular o respectivo voo a ULD, número e o código da etiqueta virgem que servirá para identificação da ULD no sistema VELOX.
Depois que a ULD é registrada, caso necessário o operador poderá alterar o número da ULD e a etiqueta, bem como fechar ou reabrir a ULD.
Na aba (Adicionar Carga) o operador precisa bipar a etiqueta da ULD, bipar o código identificador da carga, e informar a quantidade de volumes da carga bipada, que serão alocados na ULD.
OBS: O operador pode tanto digitar manualmente a quantidade ou selecionar o checkbox para adicionar todos os volumes. Caso o operador esteja paletizando por MAWB ele também tem a opção de alocar todos os HAWBS do MAWB da carga bipada.
Nessa mesma tela além de vincular a carga ao ULD ele também pode fechar ou abrir a ULD na qual ele está trabalhando nesse momento. Nesse caso ele só precisa bipar a etiqueta da ULD, em seguida clicar no botão respectivo.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Consulta de ULDs e Cargas Paletizadas  
**Score:** — (semantico) | **ID:** 03be07a5cc52d49a

Esta etapa está subdividida em duas abas, onde o operador poderá consultar a relação de ULDs registradas e suas cargas.
Na aba (Consulta de ULD) o operador seleciona qual o voo desejado, para que o sistema VELOX possa listar as ULDs relacionadas.
Na aba (Consulta das Cargas) o operador seleciona qual a ULD desejada, para que o sistema VELOX possa listar a relação de volumes alocados.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Amarração de ULDs  
**Score:** — (semantico) | **ID:** b9e4d1f4b9dc32cb

Nesta etapa, o operador precisa informar para o sistema VELOX que uma ULD saiu do processo de amarração.
É necessário apenas bipar a etiqueta da ULD e clicar no botão confirmar.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Transporte Aeronave  
**Score:** — (semantico) | **ID:** 49188ac9c3d24c46

Nesta etapa o operador indica ao sistema VELOX que uma ULD foi expedida, e após esse procedimento a ULD pode ser enviada para Aeronave.
Para finalizar o processo, operador só precisa bipar a etiqueta da ULD e clicar no botão confirmar.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Consulta de Usuários  
**Score:** — (semantico) | **ID:** 848e97e5d8ed1bc2

Nesta tela o Administrador poderá consultar a relação de usuários cadastrados no sistema.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Cadastro de Usuários  
**Score:** — (nome-topico) | **ID:** 0604289ca6e55e95

Nesta tela o Administrador poderá registrar um novo usuário no sistema, e vinculá-lo aos grupos necessários.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Consulta de Grupos  
**Score:** — (semantico) | **ID:** d3e3af1221d9bc4c

Esta tela serve para o Administrador listar a relação de grupos de usuários cadastrados no sistema.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Cadastro de Grupos  
**Score:** — (semantico) | **ID:** dbe58affb9c26754

Esta tela serve para o Administrador criar novos grupos de usuário e seus respectivos acessos e as empresas aéreas vinculadas.

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Cadastro de Empresas Aéreas  
**Score:** — (semantico) | **ID:** 68bf61691c28a91f

Nesta tela o usuário poderá registrar as empresas aéreas que serão utilizadas pelo sistema durante a operação.
Para cada empresa os dados abaixo precisarão ser informados:
Nome
CNPJ
Modo de paletização (Por MAWB ou HAWB)
Situação (Ativa) ou (INATIVA)

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Cadastro de Voos  
**Score:** — (semantico) | **ID:** ad3f288bff80ad8e

Nesta tela o gestor adiciona novos voos no sistema VELOX.
Para adicionar ele precisa preencher as seguintes informações:
Empresa Aérea do Voo
Nº Voo
Destino do Voo
Horário de saída do Voo
Situação do Voo (Ativa ou Inativa)

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Cadastro de Tipos de Inspeção  
**Score:** — (semantico) | **ID:** 7e12568e6fb88502

Operador adiciona novos tipos de inspeção de carga.
Para cada novo tipo de inspeção o operador precisa preencher as seguintes informações:
Nome
Descrição (Opcional)
Situação (Ativo ou Inativo)

---
**Origem:** [I22.200] 2022 — `I22.200 - PROJETO TRISTAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Liberação de Portas  
**Score:** — (semantico) | **ID:** 7302d7486f3b458c

A liberação das portas e protocolos abaixo se fazem necessário para o correto funcionamento da automação:
OBS: Para acessar o sistema publicamente, o cliente optou por implementar um proxy reverso, que redireciona o acesso as portas do sistema de acordo com os domínios disponibilizados.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** 62e2061fbfcbea59

Todo o processo de separação será de (responsabilidade do cliente).
Serão 3 (três) Tipos de Caixas, 2 (duas) no modelo plástico de tamanho grande (com tampa) e tamanho médio sem tampa com etiquetas geradas pelo cliente e 1 (uma) no modelo papelão (Full case – Caixa Fechada) que já vem com etiqueta do fornecedor, na maioria dos casos essa etiqueta é mantida, caso seja necessária uma reimpressão de etiqueta, será de responsabilidade do cliente.
A indução dessas caixas na esteira será feita após o processo de Picking (responsabilidade do cliente), seguindo assim direto para o Sorter ou para a estação de conferência.
Esses volumes deverão estar integrados no sistema VELOX para que seja feita a distribuição correta conforme configuração do Sorter.
Não teremos EMBARQUE PARCIAL de caixa de papelão (Full Case) em nenhum pedido, no ato da separação (Picking) o volume faltante será estornado do pedido, com isso a quantidade inserida na esteira vai estar correta. (responsabilidade do cliente)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** 39ebeedda9c9e97c

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet    atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** 05b7b3410cb01d15

Etiqueta de fracionados, é impressa pela Alcis no início do processo de separação.
Código de barras identifica o número sequencial de número de caixa.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** 4710f2486465eadc

Todo o processo de separação e etiquetagem das caixas será de responsabilidade do cliente.
Serão 3 (três) Tipos de Caixas, 2 (duas) no modelo de plástico, de tamanho grande (com tampa) e tamanho médio sem tampa com etiquetas geradas pelo cliente (Fracionado) e 1 (uma) no modelo papelão (Full case) caixa fechada com etiquetas geradas pelo cliente, caso seja necessária uma reimpressão de etiqueta, será de responsabilidade do cliente.
As caixas de volumes fracionados podem conter vários pedidos de uma única Loja.
A indução das caixas na esteira será feita após o processo de Picking (responsabilidade do cliente), seguindo assim direto para o Sorter em casos de volumes FullCase ou para a estação de conferência em casos de volumes fracionados.
Esses volumes deverão estar integrados no sistema VELOX para que seja feita a distribuição correta conforme configuração do Sorter.
Não teremos EMBARQUE PARCIAL de caixa de papelão (Full Case) em nenhum pedido, no ato da separação (Picking) o volume faltante será estornado do pedido, com isso a quantidade inserida na esteira vai estar correta. (responsabilidade do cliente)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** fd87bb5419ae8540

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet    atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** 2f15c5a512b37619

Etiqueta de fracionados, é impressa pela Alcis no início do processo de separação.
Código de barras identifica o número sequencial de número de caixa.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** 116233b3a83b45a3

Todo o processo de separação e etiquetagem das caixas será de responsabilidade do cliente.
Serão 3 (três) Tipos de Caixas, 2 (duas) no modelo de plástico, de tamanho grande (com tampa) e tamanho médio sem tampa com etiquetas geradas pelo cliente (Fracionado) e 1 (uma) no modelo papelão (Full case) caixa fechada com etiquetas geradas pelo cliente, caso seja necessária uma reimpressão de etiqueta, será de responsabilidade do cliente.
As caixas de volumes fracionados podem conter vários pedidos de uma única Loja.
A indução das caixas na esteira será feita após o processo de Picking (responsabilidade do cliente), seguindo assim direto para o Sorter em casos de volumes FullCase ou para a estação de conferência em casos de volumes fracionados.
Esses volumes deverão estar integrados no sistema VELOX para que seja feita a distribuição correta conforme configuração do Sorter.
Não teremos EMBARQUE PARCIAL de caixa de papelão (Full Case) em nenhum pedido, no ato da separação (Picking) o volume faltante será estornado do pedido, com isso a quantidade inserida na esteira vai estar correta. (responsabilidade do cliente)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** c4b964eb624c46aa

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet    atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** 34336d0377b4d9c9

Etiqueta de fracionados, é impressa pela Alcis no início do processo de separação.
Código de barras identifica o número sequencial de número de caixa.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** 64651cb6bdb27020

Todo o processo de separação e etiquetagem das caixas será de responsabilidade do cliente.
Serão 3 (três) Tipos de Caixas, 2 (duas) no modelo de plástico, de tamanho grande (com tampa) e tamanho médio sem tampa com etiquetas geradas pelo cliente (Fracionado) e 1 (uma) no modelo papelão (Full case) caixa fechada com etiquetas geradas pelo cliente, caso seja necessária uma reimpressão de etiqueta, será de responsabilidade do cliente.
As caixas de volumes fracionados podem conter vários pedidos de uma única Loja.
A indução das caixas na esteira será feita após o processo de Picking (responsabilidade do cliente), seguindo assim direto para o Sorter em casos de volumes FullCase ou para a estação de conferência em casos de volumes fracionados.
Esses volumes deverão estar integrados no sistema VELOX para que seja feita a distribuição correta conforme configuração do Sorter.
Não teremos EMBARQUE PARCIAL de caixa de papelão (Full Case) em nenhum pedido, no ato da separação (Picking) o volume faltante será estornado do pedido, com isso a quantidade inserida na esteira vai estar correta. (responsabilidade do cliente)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** 47b8107774164dfe

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - Quando visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** 643e07c5c4f3d764

Etiqueta de fracionados, é impressa pela Alcis no início do processo de separação.
Código de barras identifica o número sequencial de número de caixa.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** 3653e35289238f6c

Todo o processo de separação e etiquetagem das caixas será de responsabilidade do cliente.
Serão 3 (três) Tipos de Caixas, 2 (duas) no modelo de plástico, de tamanho grande (com tampa) e tamanho médio sem tampa com etiquetas geradas pelo cliente (Fracionado) e 1 (uma) no modelo papelão (Full case) caixa fechada com etiquetas geradas pelo cliente, caso seja necessária uma reimpressão de etiqueta, será de responsabilidade do cliente.
As caixas de volumes fracionados podem conter vários pedidos de uma única Loja.
A indução das caixas na esteira será feita após o processo de Picking (responsabilidade do cliente), seguindo assim direto para o Sorter em casos de volumes Full Case ou para a estação de conferência em casos de volumes fracionados.
Esses volumes deverão estar integrados no sistema VELOX para que seja feita a distribuição correta conforme configuração do Sorter.
Não teremos EMBARQUE PARCIAL de caixa de papelão (Full Case) em nenhum pedido, no ato da separação (Picking) o volume faltante será estornado do pedido, com isso a quantidade inserida na esteira vai estar correta. (responsabilidade do cliente)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** 159b47d7488ebe89

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - Quando visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** 1fc97a8148d355be

Etiqueta de fracionados, é impressa pela Alcis no início do processo de separação.
Código de barras identifica o número sequencial de número de caixa.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Tela de Login  
**Score:** — (semantico) | **ID:** 0d70c4f7f359fd1d

Tela com objetivo de verificar se o usuário está autorizado a acessar o sistema e quais são suas permissões de acesso. A tela de login se encontra ilustrada pela imagem acima e é mostrada toda vez que um usuário acessar a URL (a definir) do sistema. Assim, para acessar o sistema Invent, o usuário deverá preencher o formulário com usuário e senha.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Tela Home  
**Score:** — (semantico) | **ID:** c447b10287499645

Após realizar o login, o usuário será redirecionado para a tela principal/home. Essa tela mostra o menu (lateral esquerdo) que pode ser usado para navegar por outras páginas do sistema, o nome e status do usuário (canto superior direito), e opções de deixar a tela mais clara ou tela cheia (canto superior direito).

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** dbcf823d590ef9f9

O sistema permite ao usuário alterar cadastros de usuários, grupos de acessos e funções para cada usuário. Também o cadastro de rotas/mapas/receitas conforme necessidade da operação do cliente. Essas telas poderão ser acessadas pelo menu esquerdo da tela do sistema invent. Tanto na tela de cadastro de usuários, rotas e mapas/receitas, existe a opção de cadastrar e excluir cadastro.
Além disso, a tela de cadastro de usuário em nível de acesso, permite alterar as permissões dos usuários do sistema, ou seja, quais telas e funcionalidades serão disponibilizadas para cada usuário.

---
**Origem:** [I21.165] 2023 — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`  
**Heading:** Usuários  
**Score:** — (nome-topico) | **ID:** 1752ccb1bcf0ceba

Figura 3 - Tela Usuários
A tela de cadastro de usuário permite a criação, edição e remoção dos usuários que terão acesso ao sistema. A imagem acima ilustra essa tela onde os dados dos usuários são listados em uma tabela.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** b2a021c6e3fe51b6

Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes
DESCRITIVO
ESPECIFICAÇÃO APLICAÇÃO
WCS - VELOX
PROJETO BRF
REV. 1

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Requisitos Funcionais  
**Score:** — (semantico) | **ID:** fb90c5859b8d0aef

Esta seção descreve os requisitos relacionados às funcionalidades do sistema.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Regras funcionais  
**Score:** — (semantico) | **ID:** 20559bf803ff74f8

Esta seção apresenta os requisitos relacionados às regras funcionais envolvidas na operação do armazém.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF7.14 – Listar missões  
**Score:** — (semantico) | **ID:** 771fd5d23460ec48

O WCS Velox deverá mostrar na tela as missões pendentes, com cores intuitivas por exemplo, um farol com as cores verde, amarelo e vermelho, sendo vermelho a mais antiga.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF8.1.2 – Necessidade de transporte  
**Score:** — (semantico) | **ID:** 69d18ad6c36fb872

O WCS Velox deve ser capaz de processar necessidades de transporte, isso é, ser capaz de escolher o pallet ou conjunto de pallets que atenderão a ordem de saída segundo critérios bem definidos.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF13 – Gerenciamento de conexão com servidor OPC do RSLinx  
**Score:** — (semantico) | **ID:** c709160b3efd682f

A interface deve ser capaz de instanciar e conectar no servidor OPC do RSLinx, versão 2.5.4, manter a conexão ativa durante o acesso aos dados e encerrar a conexão após o termino deste acesso.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF23 – Gerenciamento de zonas de saída  
**Score:** — (semantico) | **ID:** a3c02697d848354f

O WCS Velox deve permitir a configuração das zonas cadastradas permitindo associar as subáreas pertencentes aquela zona com o intuito de separar famílias de produtos fisicamente.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF32.1 – Area  
**Score:** — (semantico) | **ID:** 8065473ab06fccd2

O WCS Velox deve permitir o cadastro de áreas.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF32.2 – Subárea  
**Score:** — (semantico) | **ID:** 4b3e409b59522c5e

O WCS Velox deve permitir o cadastro de subáreas.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF32.6 – Produtos  
**Score:** — (semantico) | **ID:** 3854d16148b796ab

O WCS Velox deve permitir o cadastro de produtos

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF37 – Estatísticas de movimentos do armazém  
**Score:** — (semantico) | **ID:** 14547db7c920d62d

O WCS Velox deve permitir a consulta de estatística de movimentação nos transportadores do armazém, exibindo o total de pallets movimentados na entrada ou saída.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Expedição  
**Score:** — (semantico) | **ID:** f05ac965e4e63ce7

A imagem abaixo apresenta as regras funcionais que regem o tratamento de ordens de saida de expedição. Os detalhes são apresentados abaixo.
Dado que há uma ordem saída de expedição, o primeiro passo é buscar os pallets que atendam as características da ordem. Para tal o algoritmo de Busca de Pallets para Expedição (BPE) é chamado e está detalhado no item 4.2.1.1 Busca Pallets para Expedição (BPE).
Caso a lista esteja vazia, o algoritmo é finalizado por não haver pallets para atender a ordem.
Caso a lista possua itens, para cada pallet da lista, enquanto o pedido da ordem não for completado (igualar ou ultrapassar a quantidade solicitada) processa o pallet para saída:
A localização do pallet é reservada para saída (se estiver em uma célula). Se já estiverem em trânsito para saída, apenas agrega o pallet à ordem de saída;
Destino do pallet: mesa de saída de expedição;
Realizada dedução dos itens na ordem de saída. O tratamento da quantidade pode ser em unidades ou peso variável. No caso de peso variável, se estiver dentro da tolerância a ordem pode ser considerada como processada;
Se for uma SKU de peso variável, todo o pallet será reservado para saída, não apenas os itens que atendem a ordem. Neste caso o orquestrador irá gerar uma mensagem de confirmação para o SAP de todo o pallet, independentemente da quantidade solicitada na ordem;
Se a ordem for de venda futura, marcar o status dos itens do pallet como venda futura. A posição não será reservada para saída;
Se a ordem for de venda futura, a posição do pallet não será reservada para saída, porém se um pallet possuir itens de venda futura e agregar uma nova ordem que não seja venda futura, a localização será reservada para saída e somente os itens desta última ordem serão retirados na saída, quando o pallet voltar, os itens de venda futura continuarão pendentes.
No que toca a liberação de itens de venda futura em um mesmo pallet, a liberação será feita item a item através de interface com o SAP. O WCS liberará os itens na ordem que forem solicitados pelo SAP.
Ao processar os pallets da lista, caso a ordem ainda possua caixas sem pallets para atender, ela será marcada como pendente.
Se a ordem for atendida completamente ela será marcada como processada.
O resultado é a lista dos pallets a serem retirados e confirmados ao SAP.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Transferencia de pallets completos (TPC)  
**Score:** — (semantico) | **ID:** 4007c16bf188d4b6

A imagem abaixo apresenta as regras funcionais que regem o tratamento de ordens de saída de transferência de pallets completos.
As regras e tratamentos são os mesmos apresentados para ordens de expedição. A única diferença com relação às ordens de expedição é que os pallets que atendem às ordens de movimento TPC podem ser destinados a uma mesa de saída diferente da de expedição, caso esteja configurado no WCS.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Telas do sistema  
**Score:** — (semantico) | **ID:** 05898096b21c21f4

Essas imagens apresentadas refletem o atual sistema WCS em operação. No entanto, é essencial ressaltar que o próximo passo evolutivo, o revolucionário WCS Velox da Invent, trará consigo uma reformulação completa no layout das telas. As imagens aqui exibidas são meramente ilustrativas e destinam-se a fornecer uma referência inicial. Com o WCS Velox, aguardem por uma experiência visual renovada e aprimorada, alinhada com as mais recentes inovações em design de interfaces. Estamos ansiosos para introduzir uma era de eficiência e estética aprimorada.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de produtos  
**Score:** — (semantico) | **ID:** 8de3293881c6476f

É possivel visualizar os produtos cadastrados no sistema através da tela exibida na imagem abaixo.
A imagem acima mostra como é possivel visualizar e editar os detalhes do produto, selecionando a opção “Detalhes”
Possibilidade de criar um registro de produto a ser gerenciado pelo armazém, clicando em “Novo”: imagem abaixo.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de mesas de saída  
**Score:** — (semantico) | **ID:** 03b56e2982e2a772

Através dessa funcionalidade é possível associar as mesas de saída às zonas de saída, como mostrado na imagem abaixo.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de sub-áreas  
**Score:** — (semantico) | **ID:** fc590536f73a0a9e

Essa funcionalidade permite visualizar, editar, excluir e criar registros novos para as sub-áreas do armazém.
A opção “Detalhes” permite visualizar e alterar as informações da sub-área selecionada.
A opção “Novo”, na imagem acima, exibe uma tela semelhante a imagem abaixo, porém com os campos vazios e com a opção “Excluir” desabilitada.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento do sistema  
**Score:** — (semantico) | **ID:** 215fd6a42160126a

O modulo de gerenciamento do sistema permite configurar os parâmetros usados pelo WCS Velox durante o período em que estiver em operação.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Parâmetros do sistema  
**Score:** — (semantico) | **ID:** 79e8f19ce65c88e4

A funcionalidade parâmetros do sistema permite visualizar, editar, excluir e criar parâmetros utilizados pelo WCS.
A opção “Salvar” permite registrar as alterações realizadas nos parâmetros.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Segurança  
**Score:** — (semantico) | **ID:** d0228e4a5e93598e

O módulo de Segurança permite gerenciar os usuários cadastrados no sistema, tal como os perfis que terão acesso a determinadas telas.
A seguir cada uma das funcionalidades do módulo de Segurança será detalhada.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Vincular funcionalidades ao perfil  
**Score:** — (semantico) | **ID:** 7eb621eca9e7a1fd

Essa funcionalidade permite associar as funcionalidades do sistema aos perfis de usuários criados.
Permite o vinculo do grupo de acesso ao usuario cadastrado no sistema.
Tela no padrão WCS Velox

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Troca de senha  
**Score:** — (semantico) | **ID:** 07173c48a8932c77

O sistema WCS Velox deve permitir que o usuário logado troque sua senha, no caso de autenticação controlada pela própria aplicação conforme mostrado na tela abaixo:
Tela no padrão WCS Velox

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** OPC client API  
**Score:** — (semantico) | **ID:** a83244f5bc2e0106

A OPC Client API é uma biblioteca de acesso a dados disponibilizada pela OPC Foundation que permite a conexão, configuração, leitura e escrita de dados em um OPC Server disponibilizado em uma rede local.
Esta biblioteca possui funções específicas para tratamento de alarmes e eventos em TAGs configurados em um OPC Server, permitindo assim o uso de uma arquitetura volta a eventos (Event Driven Architecture), garantindo que as informações só serão atualizadas quando ocorrer uma alteração dos valores dos TAGs registrados.
Toda a gestão de conexão, desconexão e sincronia com o OPC Server é feita através desta biblioteca, garantindo também a sincronia entre o WCS e o OPC Server.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Ações de contingencia  
**Score:** — (semantico) | **ID:** 0c20ff9d2e191ba0

Esta seção detalha as ações e mensagens trocadas com os equipamentos em situações de queda de comunicação, operação manual e outras situações de contingência do sistema.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 02c7c23f6d171487

Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes
DESCRITIVO
ESPECIFICAÇÃO APLICAÇÃO
WCS - VELOX
PROJETO BRF
REV. 1

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Requisitos Funcionais  
**Score:** — (semantico) | **ID:** cec2d90b79727400

Esta seção descreve os requisitos relacionados às funcionalidades do sistema.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Regras funcionais  
**Score:** — (semantico) | **ID:** a3a4d7c91d45fdd0

Esta seção apresenta os requisitos relacionados às regras funcionais envolvidas na operação do armazém.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF7.14 – Listar missões  
**Score:** — (semantico) | **ID:** 09ea288d3d7b4fbb

O WCS Velox deverá mostrar na tela as missões pendentes, com cores intuitivas por exemplo, um farol com as cores verde, amarelo e vermelho, sendo vermelho a mais antiga.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF8.1.2 – Necessidade de transporte  
**Score:** — (semantico) | **ID:** b6776b211537dae7

O WCS Velox deve ser capaz de processar necessidades de transporte, isso é, ser capaz de escolher o pallet ou conjunto de pallets que atenderão a ordem de saída segundo critérios bem definidos.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF13 – Gerenciamento de conexão com servidor OPC do RSLinx  
**Score:** — (semantico) | **ID:** 0b2a440433c5f5cc

A interface deve ser capaz de instanciar e conectar no servidor OPC do RSLinx, versão 2.5.4, manter a conexão ativa durante o acesso aos dados e encerrar a conexão após o termino deste acesso.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF23 – Gerenciamento de zonas de saída  
**Score:** — (semantico) | **ID:** 06273cc052f3eb7b

O WCS Velox deve permitir a configuração das zonas cadastradas permitindo associar as subáreas pertencentes aquela zona com o intuito de separar famílias de produtos fisicamente.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF32.1 – Area  
**Score:** — (semantico) | **ID:** e2ddac1a649e48b5

O WCS Velox deve permitir o cadastro de áreas.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF32.2 – Subárea  
**Score:** — (semantico) | **ID:** 9d6aea8b68d2bb04

O WCS Velox deve permitir o cadastro de subáreas.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF32.6 – Produtos  
**Score:** — (semantico) | **ID:** 8c8c4c3d60b5dc6d

O WCS Velox deve permitir o cadastro de produtos

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF37 – Estatísticas de movimentos do armazém  
**Score:** — (semantico) | **ID:** 33db6dc4c4f57738

O WCS Velox deve permitir a consulta de estatística de movimentação nos transportadores do armazém, exibindo o total de pallets movimentados na entrada ou saída.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Expedição  
**Score:** — (semantico) | **ID:** 970bef7463211bf8

A imagem abaixo apresenta as regras funcionais que regem o tratamento de ordens de saida de expedição. Os detalhes são apresentados abaixo.
Dado que há uma ordem saída de expedição, o primeiro passo é buscar os pallets que atendam as características da ordem. Para tal o algoritmo de Busca de Pallets para Expedição (BPE) é chamado e está detalhado no item 4.2.1.1 Busca Pallets para Expedição (BPE).
Caso a lista esteja vazia, o algoritmo é finalizado por não haver pallets para atender a ordem.
Caso a lista possua itens, para cada pallet da lista, enquanto o pedido da ordem não for completado (igualar ou ultrapassar a quantidade solicitada) processa o pallet para saída:
A localização do pallet é reservada para saída (se estiver em uma célula). Se já estiverem em trânsito para saída, apenas agrega o pallet à ordem de saída;
Destino do pallet: mesa de saída de expedição;
Realizada dedução dos itens na ordem de saída. O tratamento da quantidade pode ser em unidades ou peso variável. No caso de peso variável, se estiver dentro da tolerância a ordem pode ser considerada como processada;
Se for uma SKU de peso variável, todo o pallet será reservado para saída, não apenas os itens que atendem a ordem. Neste caso o orquestrador irá gerar uma mensagem de confirmação para o SAP de todo o pallet, independentemente da quantidade solicitada na ordem;
Se a ordem for de venda futura, marcar o status dos itens do pallet como venda futura. A posição não será reservada para saída;
Se a ordem for de venda futura, a posição do pallet não será reservada para saída, porém se um pallet possuir itens de venda futura e agregar uma nova ordem que não seja venda futura, a localização será reservada para saída e somente os itens desta última ordem serão retirados na saída, quando o pallet voltar, os itens de venda futura continuarão pendentes.
No que toca a liberação de itens de venda futura em um mesmo pallet, a liberação será feita item a item através de interface com o SAP. O WCS liberará os itens na ordem que forem solicitados pelo SAP.
Ao processar os pallets da lista, caso a ordem ainda possua caixas sem pallets para atender, ela será marcada como pendente.
Se a ordem for atendida completamente ela será marcada como processada.
O resultado é a lista dos pallets a serem retirados e confirmados ao SAP.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Transferencia de pallets completos (TPC)  
**Score:** — (semantico) | **ID:** 48698bcebc63951e

A imagem abaixo apresenta as regras funcionais que regem o tratamento de ordens de saída de transferência de pallets completos.
As regras e tratamentos são os mesmos apresentados para ordens de expedição. A única diferença com relação às ordens de expedição é que os pallets que atendem às ordens de movimento TPC podem ser destinados a uma mesa de saída diferente da de expedição, caso esteja configurado no WCS.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Telas do sistema  
**Score:** — (semantico) | **ID:** ab1886e33f9cf667

Essas imagens apresentadas refletem o atual sistema WCS em operação. No entanto, é essencial ressaltar que o próximo passo evolutivo, o revolucionário WCS Velox da Invent, trará consigo uma reformulação completa no layout das telas. As imagens aqui exibidas são meramente ilustrativas e destinam-se a fornecer uma referência inicial. Com o WCS Velox, aguardem por uma experiência visual renovada e aprimorada, alinhada com as mais recentes inovações em design de interfaces. Estamos ansiosos para introduzir uma era de eficiência e estética aprimorada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de produtos  
**Score:** — (semantico) | **ID:** 4e10a5036b600773

É possivel visualizar os produtos cadastrados no sistema através da tela exibida na imagem abaixo.
A imagem acima mostra como é possivel visualizar e editar os detalhes do produto, selecionando a opção “Detalhes”
Possibilidade de criar um registro de produto a ser gerenciado pelo armazém, clicando em “Novo”: imagem abaixo.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de mesas de saída  
**Score:** — (semantico) | **ID:** 715fa88d1dd36e4b

Através dessa funcionalidade é possível associar as mesas de saída às zonas de saída, como mostrado na imagem abaixo.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de sub-áreas  
**Score:** — (semantico) | **ID:** fd61ffbaa23c8ff5

Essa funcionalidade permite visualizar, editar, excluir e criar registros novos para as sub-áreas do armazém.
A opção “Detalhes” permite visualizar e alterar as informações da sub-área selecionada.
A opção “Novo”, na imagem acima, exibe uma tela semelhante a imagem abaixo, porém com os campos vazios e com a opção “Excluir” desabilitada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento do sistema  
**Score:** — (semantico) | **ID:** f5c6b7d1f8510a70

O modulo de gerenciamento do sistema permite configurar os parâmetros usados pelo WCS Velox durante o período em que estiver em operação.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Parâmetros do sistema  
**Score:** — (semantico) | **ID:** 18d855d82807936a

A funcionalidade parâmetros do sistema permite visualizar, editar, excluir e criar parâmetros utilizados pelo WCS.
A opção “Salvar” permite registrar as alterações realizadas nos parâmetros.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Segurança  
**Score:** — (semantico) | **ID:** 828e4111dfe8b692

O módulo de Segurança permite gerenciar os usuários cadastrados no sistema, tal como os perfis que terão acesso a determinadas telas.
A seguir cada uma das funcionalidades do módulo de Segurança será detalhada.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Vincular funcionalidades ao perfil  
**Score:** — (semantico) | **ID:** af7b85fe172b0cee

Essa funcionalidade permite associar as funcionalidades do sistema aos perfis de usuários criados.
Permite o vinculo do grupo de acesso ao usuario cadastrado no sistema.
Tela no padrão WCS Velox

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Troca de senha  
**Score:** — (semantico) | **ID:** 24a0fd031d9abc69

O sistema WCS Velox deve permitir que o usuário logado troque sua senha, no caso de autenticação controlada pela própria aplicação conforme mostrado na tela abaixo:
Tela no padrão WCS Velox

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** OPC client API  
**Score:** — (semantico) | **ID:** 8d2ac9c7123a493f

A OPC Client API é uma biblioteca de acesso a dados disponibilizada pela OPC Foundation que permite a conexão, configuração, leitura e escrita de dados em um OPC Server disponibilizado em uma rede local.
Esta biblioteca possui funções específicas para tratamento de alarmes e eventos em TAGs configurados em um OPC Server, permitindo assim o uso de uma arquitetura volta a eventos (Event Driven Architecture), garantindo que as informações só serão atualizadas quando ocorrer uma alteração dos valores dos TAGs registrados.
Toda a gestão de conexão, desconexão e sincronia com o OPC Server é feita através desta biblioteca, garantindo também a sincronia entre o WCS e o OPC Server.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Ações de contingencia  
**Score:** — (semantico) | **ID:** d770106092565d66

Esta seção detalha as ações e mensagens trocadas com os equipamentos em situações de queda de comunicação, operação manual e outras situações de contingência do sistema.

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Tolerância  
**Score:** — (semantico) | **ID:** bb91b2f462a938a5

A tolerância deverá ser cadastrada previamente no sistema Invent, com isso o sistema usará a informação para realizar a conferência por peso. Caso nas validações acima, o peso esteja de acordo com o peso e tolerância cadastrada o volume será Aprovado, caso esteja fora da tolerância, o status será Reprovado.
A tolerância cadastrada será utilizada como parâmetro para todas as caixas cadastradas no sistema.
A tolerância poderá ser cadastrada por peso, ou porcentagem.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Controle de Estoque de Duas Empresas Diferentes  
**Score:** — (semantico) | **ID:** fb6cebfafd891808

O WCS será responsável pelo controle de estoque de duas empresas distintas no mesmo ambiente de automação. Para garantir que não haja confusão ou mistura dos produtos, o WCS não permitirá o compartilhamento de estoque entre as empresas. Cada empresa terá seu estoque segregado e controlado de forma independente.
Na coleta de itens, o WCS identificará a empresa responsável pelo produto que está sendo coletado, garantindo que cada empresa retire apenas os itens de seu próprio estoque. Durante o processo de separação, o sistema garantirá que os produtos de uma empresa não sejam alocados nas posições de picking de outra, preservando a integridade e a rastreabilidade de cada empresa.
O controle de quantidade e lote será específico para cada empresa, assegurando que os dados de estoque e movimentação sejam mantidos de forma separada e precisa para ambas as empresas.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Ocorrências  
**Score:** — (semantico) | **ID:** 802552abdb979214

As ocorrências são geradas quando o WCS identifica uma discrepância nos dados durante o processo de auditoria. Cada tarefa de ocorrência será registrada e deve ser tratada da seguinte maneira:
Geração da Tarefa: Quando uma divergência é identificada, o sistema cria uma tarefa de ocorrência.
Duplo Check: O operador realiza a auditoria novamente para a posição de estoque ou item onde foi encontrada a divergência, realizando um duplo check para confirmar a quantidade real ou identificar alocações erradas.
Fechamento da Ocorrência: Após o duplo check e a validação, a tarefa de ocorrência é concluída e o WCS atualiza os registros, garantindo a precisão dos dados no sistema.
Sobra: Quando for constatado uma sobra no processo de auditoria, o operador deve retirar o item que sobrou da posição e realizar a tratativa do item, se for necessár io devolver esse item para coleta o WMS deve realizar a integração deste item novamente

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Processo de Movimentação Forçada de Estoque  
**Score:** — (semantico) | **ID:** 371ea12dc2be8997

O processo de movimentação forçada de estoque é utilizado para movimentar produtos das posições de picking ou do transfer de acordo com as necessidades da operação.
Remoção de Itens:
O operador realiza o login no WCS utilizando o coletor android e acessa a tela de movimentação forçada de estoque.
A tela exibirá uma lista de itens que estão alocados a um endereço. O operador poderá visualizar os itens junto com suas quantidades.
Remoção do Item:
O operador começa realizando a leitura do endereço correspondente ao item. Após isso, ele seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a remoção.
Alocação do Item:
Após a retirada do item o WCS deve indicar a posição desse item no transfer caso exista. O operador então pode seguir até o endereço indicado realiza a leitura do código do endereço e confirma a quantidade e realiza a leitura do EAN do item em questão. Caso a movimentação seja para o transfer o WCS nesse momento dispara a integração atualizando o saldo da posição final ao WMS.
O processo de movimentação forçada de estoque permite à operação a flexibilidade de movimentar o estoque, seja para itens no transfer ou nas posições de picking, sempre garantindo que as informações estejam atualizadas e que a rastreabilidade de todos os itens removidos seja mantida.
Este processo facilita a gestão de estoques, assegurando que o WCS tenha controle total sobre a movimentação de produtos, permitindo a movimentação de itens de acordo com a demanda e necessidade operacional.

---
**Origem:** [I23.103] 2023 — `I23.103 - PROJETO LOGIN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV.1.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 9013a5f66668fcb7

DESCRITIVO
OPERAÇÃO
PROJETO
LOGIN
CONFIDENCIAL © 2023, INVENT COMÉRCIO E SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL CONFIDENCIAL, PROIBIDA SUA REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS SEM PRÉVIA AUTORIZAÇÃO.
Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes

---
**Origem:** [I23.103] 2023 — `I23.103 - PROJETO LOGIN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV.1.docx`  
**Heading:** Terminal de Consulta  
**Score:** — (semantico) | **ID:** 7f7fe53567a091c3

Haverá 01 (um) terminal de consulta para acesso as informações do sistema, permitirá também visualizar os relatórios e outras operações do sistema. Neste caso, 01(um) desktop auxiliará o operador com os principais recursos necessários para a operação.
Abaixo segue a configuração mínima para a estação de trabalho:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** af3fdab639d3ab26

Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes
DESCRITIVO
ESPECIFICAÇÃO DE
SOFTWARE E HARDWARE
PROJETO CRISTAL – POUSO ALEGRE – MG
I23.125 – REV.1

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 4c1e2ecb0bd5aaa9

Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes
DESCRITIVO
ESPECIFICAÇÃO DE
SOFTWARE E HARDWARE
PROJETO CRISTAL – POUSO ALEGRE – MG
I23.125 – REV.2

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** d4f488dbd07aaa0c

Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes
DESCRITIVO
ESPECIFICAÇÃO DE
SOFTWARE E HARDWARE
PROJETO CRISTAL – POUSO ALEGRE – MG
I23.125 – REV.3

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.12  
**Score:** — (semantico) | **ID:** d0f452dc35445a6a

A senha de acesso ao sistema Velox, deverá ser composta por, no mínimo, 10 de caracteres. Deve ser alfanumérico, contendo letras, números e caracteres especiais, distinguindo entre letras maiúsculas e minúsculas.
Estes padrões poderão ser configuráveis pelo administrador do sistema.
Referência: Interna
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.13  
**Score:** — (semantico) | **ID:** 097fed3df6436ddf

O sistema Velox deve permitir a configuração para a expiração de senhas.
A senha dos usuários deve expirar a cada 90 (noventa) dias, o sistema deve notificar o operador quando a senha irá expirar para que realize a troca.
Em casos que a senha seja expirada e o usuário não realize a troca da senha, o sistema Velox deverá induzir o usuário a realizar a troca de senha no momento do login no sistema Velox.
Referência: 21 CFR Part 11 - 11.300 (b)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.14  
**Score:** — (semantico) | **ID:** 2818da1d23a435d8

Em caso de expiração de senha, o sistema Velox deverá permitir que o usuário redefina uma nova senha.
Referência: 21 CFR Part 11 - 11.300 (b)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.15  
**Score:** — (semantico) | **ID:** c2164a2c68e25c64

O sistema Velox, não deve permitir a configuração para reutilização de senhas.
Exemplo: controlar para que as últimas 5 senhas não sejam reutilizadas.
Caso o usuário não altere a senha, ele não deve acessar o sistema.
Referência: 21 CFR Part 11 - 11.300 (b)(c)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.17  
**Score:** — (semantico) | **ID:** e5f9ebaa3d693f1b

O sistema Velox, deve permitir a configuração do número de tentativas de acesso indevidas para bloqueio do usuário, que só poderá ser reativado pelo administrador.
Em casos que o usuário do sistema Velox, ao tentar acessar o sistema, errar a senha 3 (três) vezes, o sistema Velox deve bloquear seu acesso, até que seja desbloqueado pelo administrado do sistema Velox.
Referência: 21 CFR Part 11 - 11.10 (d), 11.300 IN 134 – Capitulo III, Seção II, Subseção VIII – Parágrafo único
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 6.27  
**Score:** — (semantico) | **ID:** a8d3274e4e18310f

O sistema Velox, deverá gerar trilhas de auditorias, compostas pelos seguintes registros:
Data (dia, mês e ano);
Hora (hora e minuto);
Ação realizada (inclusão, alteração e exclusão);
Autor da ação (quem realizou – login);
Valor antes da alteração do registro.
Essas informações devem estar disponíveis por nível de usuário específico no sistema Velox.
Referência: 21 CFR Part 11 – 11.10 (e)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 6.31  
**Score:** — (semantico) | **ID:** ec096778ead542f9

A tela de Log de evento (Audit trail) no sistema Velox, deve ser possível visualizar a data (dd/mm/aaaa), hora (hh:mm:ss) e nome do usuário (Nome e sobrenome) e informação alterada, de acordo com os pontos detalhados nos itens anteriores (11.7	6.27) e (11.8	6.29).
Referência: 21 CFR Part 11 – 11.10 (e)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 813852cbfbc974af

Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes
DESCRITIVO
ESPECIFICAÇÃO DE
SOFTWARE E HARDWARE
PROJETO CRISTAL – ITAPIRA – SP
I23.125 – REV.3

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.12  
**Score:** — (semantico) | **ID:** 004aa2901628251f

A senha de acesso ao sistema Velox, deverá ser composta por, no mínimo, 10 de caracteres. Deve ser alfanumérico, contendo letras, números e caracteres especiais, distinguindo entre letras maiúsculas e minúsculas.
Estes padrões poderão ser configuráveis pelo administrador do sistema.
Referência: Interna
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.13  
**Score:** — (semantico) | **ID:** 9a75ce75ca7ab0ad

O sistema Velox deve permitir a configuração para a expiração de senhas.
A senha dos usuários deve expirar a cada 90 (noventa) dias, o sistema deve notificar o operador quando a senha irá expirar para que realize a troca.
Em casos que a senha seja expirada e o usuário não realize a troca da senha, o sistema Velox deverá induzir o usuário a realizar a troca de senha no momento do login no sistema Velox.
Referência: 21 CFR Part 11 - 11.300 (b)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.14  
**Score:** — (semantico) | **ID:** 3f652ec34ac8ce5e

Em caso de expiração de senha, o sistema Velox deverá permitir que o usuário redefina uma nova senha.
Referência: 21 CFR Part 11 - 11.300 (b)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.15  
**Score:** — (semantico) | **ID:** 353aa4fe1f3bdb57

O sistema Velox, não deve permitir a configuração para reutilização de senhas.
Exemplo: controlar para que as últimas 5 senhas não sejam reutilizadas.
Caso o usuário não altere a senha, ele não deve acessar o sistema.
Referência: 21 CFR Part 11 - 11.300 (b)(c)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.17  
**Score:** — (semantico) | **ID:** 5e6f01f7c0e80c02

O sistema Velox, deve permitir a configuração do número de tentativas de acesso indevidas para bloqueio do usuário, que só poderá ser reativado pelo administrador.
Em casos que o usuário do sistema Velox, ao tentar acessar o sistema, errar a senha 3 (três) vezes, o sistema Velox deve bloquear seu acesso, até que seja desbloqueado pelo administrado do sistema Velox.
Referência: 21 CFR Part 11 - 11.10 (d), 11.300 IN 134 – Capitulo III, Seção II, Subseção VIII – Parágrafo único
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 6.27  
**Score:** — (semantico) | **ID:** a425e248e4726eb7

O sistema Velox, deverá gerar trilhas de auditorias, compostas pelos seguintes registros:
Data (dia, mês e ano);
Hora (hora e minuto);
Ação realizada (inclusão, alteração e exclusão);
Autor da ação (quem realizou – login);
Valor antes da alteração do registro.
Essas informações devem estar disponíveis por nível de usuário específico no sistema Velox.
Referência: 21 CFR Part 11 – 11.10 (e)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 6.31  
**Score:** — (semantico) | **ID:** 530fd9654e0b1061

A tela de Log de evento (Audit trail) no sistema Velox, deve ser possível visualizar a data (dd/mm/aaaa), hora (hh:mm:ss) e nome do usuário (Nome e sobrenome) e informação alterada, de acordo com os pontos detalhados nos itens anteriores (11.7	6.27) e (11.8	6.29).
Referência: 21 CFR Part 11 – 11.10 (e)
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** d4051975c369fb5e

Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes
DESCRITIVO
ESPECIFICAÇÃO DE
SOFTWARE E HARDWARE
PROJETO CRISTAL – ITAPIRA – SP
I23.125 – REV.1

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 4e0adbc93e27338f

Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes
DESCRITIVO
ESPECIFICAÇÃO DE
SOFTWARE E HARDWARE
PROJETO CRISTAL – ITAPIRA – SP
I23.125 – REV.2

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Gerenciamento de Gaiola  
**Score:** — (semantico) | **ID:** 1b845efbecadadbf

Na tela de gerenciamento de gaiolas, o operador de cada saída poderá ter acesso específico a sua rampa/gaiola, com isso poderá acompanhar em tempo real os detalhes da rampa e gaiola em atividade no momento, e poderá realizar consultas de toda sua operação de gaiola já processadas na rampa.
Operador com nível de usuário específico, terá acesso a tela e conseguira gerenciar todas as rampas, gaiolas e visualizar seus status, podendo fechar gaiolas manualmente.

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** b0c62097b4b18381

Após o sistema Velox realizar todos os processos citados acima, com a caixa/volume devidamente etiquetada com base no pedido, seguirá para a linha de separação.
Operador deverá realizar o login na estação de separação, antes de iniciar a operação de separação.
O login deve ser feito realizando a leitura do código de barras do crachá do operador no leitor fixo da linha de separação, esse login deve ser feito antes de iniciar o picking.
Caso a caixa seja lida e não tenha nenhum operador logado na estação, não será possivel iniciar o picking daquele pedido, até que seja feito o login. Todos os leds acenderão em laranja informando que o picking não foi iniciado devido não ter um operador logado na estação.
Ao realizar o login, todos os leds do flow rack acenderão azul, informando que o login foi realizado com sucesso.
Ao chegar ao ponto de leitura da linha, essa etiqueta será lida por um leitor fixo e o sistema fará a identificação do volume e verifica se existem produtos a serem separados no posto referente.
Caso exista produtos a serem separados nesse posto de separação a caixa então é desviada para a estação.
Ao ser desviada na estação de separação, o operador terá 6 (seis) possíveis locais de separação:
O sistema Velox deverá permitir 1 (uma) ou mais posições com o mesmo SKU.
Flow Rack – Frente Alto Giro – (Curva A e B)
2 (dois) módulos de flow rack
24 (vinte e quatro) posições por módulo
48 (quarenta e oito) posições por estação
1 (um) led (3 dígitos) por posição
Caso tenha produtos a serem separados no flow rack (equipamento que fica na frente do operador da estação), os leds (3 dígitos) das posições dos produtos deverão acender informando ao operador a quantidade de cada item que deverá ser separado para aquele pedido, operador realiza a separação do item da posição conforme a quantidade indicada, e aperta o botão aceso da posição informando que aquele item foi separado, e segue para a próxima posição acesa e repete o processo até que separe todos os itens das posições acesas.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação foi concluída com sucesso.
Caso tenha produtos a serem separados nos Nichos (Costas) ou nos Nichos (Corredores), os leds do Flow Rack (Frente) deverão acender em rosa, conforme descrito nos próximos itens.
Operador poderá confirmar o número da caixa que está sendo separada no display (6 dígitos) que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack onde o operador ao apertar esse botão, automaticamente o sistema Velox gera um novo volume de separação para esse pedido e será a próxima a ser liberada no order start.
ShortPicking
Em casos que o operador verifique que a quantidade fisica do produto solicitado para ser separado é inferior que a quantidade solicitada pelo sistema no pedido, operador deverá apertar o botão no led da posição com sinal de menor para diminuir a quantidade no sistema, e realiza a separação da quantidade real disponivel.
Exemplo: Pedido no sistema solicita 10 (dez) unidades do sku ‘XPTO’, operador ao realizar a separação nota que fisicamente existe apenas 8 (oito) unidades desse sku, operador aperta o botão para diminuir a quantidade até 8 (oito), realiza a confirmação apertando o botão do led confirmando a separação de 8 (oito) unidades do sku ‘XPTO’, realizando assim o processo de ShortPicking.
Com isso, o WMS ao receber as informações de separação realiza a tarefa de reabastecimento.
Nichos – Costas Médio Giro – (Curva C)
2 (dois) módulos de nichos
6 (seis) posições por módulo
12 (doze) posições por estação
1 (um) led (3 dígitos) por posição
Caso tenha produtos a serem separados apenas nos nichos (equipamento que fica nas costas do operador), os leds (3 dígitos) do Flow Rack (Frente) acenderão na cor Rosa, informando visualmente o operador que existe separação nas costas e os leds (3 dígitos) das posições dos produtos dos nichos deverão acender informando ao operador a quantidade de cada item que deverá ser separado para aquele pedido, operador realiza a separação do item da posição conforme a quantidade indicada, e aperta o botão aceso da posição informando que aquele item foi separado, e segue para a próxima posição acesa e repete o processo até que separe todos os itens das posições acesas.
Ao finalizar a separação de todos os itens solicitados dos Nichos, todas as posições dos nichos acenderão na cor verde informando que a separação nos nichos foi concluída com sucesso.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação foi concluída com sucesso.
Operador poderá confirmar o número da caixa que está sendo separada no display (6 dígitos) que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack (frente) onde o operador ao apertar esse botão, automaticamente o sistema envia uma nova caixa para esse pedido e será a próxima a ser liberada no order start.
ShortPicking
Em casos que o operador verifique que a quantidade fisica do produto solicitado para ser separado é inferior que a quantidade solicitada pelo sistema no pedido, operador deverá apertar o botão no led da posição com sinal de menor para diminuir a quantidade no sistema, e realiza a separação da quantidade real disponivel.
Exemplo: Pedido no sistema solicita 10 (dez) unidades do sku ‘XPTO’, operador ao realizar a separação nota que fisicamente existe apenas 8 (oito) unidades desse sku, operador aperta o botão para diminuir a quantidade até 8 (oito), realiza a confirmação apertando o botão do led confirmando a separação de 8 (oito) unidades do sku ‘XPTO’, realizando assim o processo de ShortPicking.
Com isso, o WMS ao receber as informações de separação realiza a tarefa de reabastecimento.
Nichos – Corredores Baixo Giro – (Curva D)
32 (trinta e dois) módulos de nichos por estação
24 (vinte e quatro) posições por módulo
32 (trinta e dois) displays por estação
1 (um) display (10 dígitos) por módulo
Caso tenha produtos a serem separados apenas nos nichos dos corredores (equipamento que fica nos corredores nas costas do operador), os leds (3 dígitos) do Flow Rack (Frente) acenderão na cor Rosa, informando visualmente o operador que existe separação nas costas e os leds (3 dígitos) dos Nichos (Costas) acenderão na cor Rosa e indicando o corredor que existe itens para separação, seguira a ordem crescente (C1 = Corredor 1, C2 = Corredor 2 e C3 = Corredor 3).
Caso exista produtos para serem separados em mais de 1 (um) corredor, operador fará a separação do primeiro corredor, ao finalizar, os displays (10 dígitos) do corredor acenderão informando que a separação foi finalizada naquele corredor, e os leds (3 dígitos) dos Nichos (Costas) acenderão novamente na cor Rosa e indicando o corredor que ainda existe itens para separação.
Os displays (10 dígitos) dos nichos onde existem produtos a serem separados deverão acender informando visualmente ao operador o endereço + nível do item naquele nicho e a quantidade que devem ser separados daquele item, operador realiza a separação do item da posição conforme informações do display, e aperta o botão do display informando que aquele item foi separado, caso tenha outro item a ser separado no mesmo nicho de mesmo display, o display será atualizado com as novas informações de endereço, nível e quantidade, se repetindo até finalizar todos os itens do nicho, ao finalizar o nicho, o display é apagado e o operador segue para o próximo nicho aceso e repete o processo até que separe todos os itens de todos os nichos solicitados.
Ao finalizar a separação de todos os itens solicitados do nicho do corredor, todos os displays de todos os nichos do corredor acenderão informando que a separação nos nichos do corredor foi concluída com sucesso.
Todas as posições do flow rack acenderão na cor verde informando que a separação na estação foi concluída com sucesso.
Operador poderá confirmar o número da caixa que está sendo separada no display (6 dígitos) que estará no flow rack (frente).
Em casos em que o operador verifique que os itens solicitados para separação não caberão fisicamente na caixa solicitada pelo WMS, existira um botão no flow rack (frente) onde o operador ao apertar esse botão, automaticamente o envia uma nova caixa para esse pedido e será a próxima a ser liberada no order start.
ShortPicking
Em casos que o operador verifique que a quantidade fisica do produto solicitado para ser separado é inferior que a quantidade solicitada pelo sistema no pedido, operador deverá apertar o botão no display do nicho com sinal de menor para diminuir a quantidade no sistema, e realiza a separação da quantidade real disponivel.
Exemplo: Pedido no sistema solicita 10 (dez) unidades do sku ‘XPTO’, operador ao realizar a separação nota que fisicamente existe apenas 8 (oito) unidades desse sku, operador aperta o botão para diminuir a quantidade até 8 (oito), realiza a confirmação apertando o botão do led confirmando a separação de 8 (oito) unidades do sku ‘XPTO’, realizando assim o processo de ShortPicking.
Com isso, o WMS ao receber as informações de separação realiza a tarefa de reabastecimento.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Reset Caixa do Posto  
**Score:** — (semantico) | **ID:** 7f359bd807e4f512

Caso seja necessário, o gestor, desde que tenha acesso, poderá reiniciar a coleta do volume no sistema, indicando qual foi o motivo do reset, mostrados na tela abaixo.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Tolerância  
**Score:** — (semantico) | **ID:** 59466bff0566a3da

A tolerância deverá ser cadastrada previamente no sistema Invent, com isso o sistema usará a informação para realizar a conferência por peso. Caso nas validações acima, o peso esteja de acordo com o peso e tolerância cadastrada o volume será Aprovado, caso esteja fora da tolerância, o status será Reprovado.
A tolerância cadastrada será utilizada como parâmetro para todas as caixas cadastradas no sistema.
A tolerância poderá ser cadastrada por peso, ou porcentagem.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Aprovação Manual  
**Score:** — (semantico) | **ID:** b6c4a7217171eabf

Caso todos os itens não tenham sido coletados e precise de aprovação, é necessário que um usuário autorizado aprove.
Segue tela abaixo.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 aprovado.docx`  
**Heading:** Separação Fracionados  
**Score:** — (semantico) | **ID:** 38938ba71870d02a

Após o WCS realizar todos os processos citados acima, com a caixa/volume devidamente etiquetada com base no pedido, seguirá para a linha de separação.
Cada posto terá:
1 (um) operador por posto.
1 (um) PDV por posto.
1 (um) Scanner de mão por posto.
WCS não permitirá que o mesmo item seja cadastrado em 2 postos diferentes.
Operador deverá realizar o login na estação de separação, antes de iniciar a operação de separação.
O login deve ser feito realizando a leitura do código de barras do crachá do operador no leitor fixo da linha de separação, esse login deve ser feito antes de iniciar o picking.
Caso a caixa seja lida e não tenha nenhum operador logado na estação, não será possivel iniciar o picking daquele pedido, até que seja feito o login. Será informando no PDV que o picking não foi iniciado devido não ter um operador logado na estação.
Ao chegar ao ponto de leitura da linha, essa etiqueta será lida por um leitor fixo e o sistema fará a identificação do volume e verifica se existem produtos a serem separados no posto referente.
Caso exista produtos a serem separados nesse posto de separação a caixa então para na estação
Flow Rack – Frente Alto Giro – (Curva A e B)
2 (dois) módulos de flow rack
15 (quinze) posições por módulo
30 (trinta) posições por estação
Nichos – Costas Médio Giro – (Curva C)
10 (dois) módulos de nichos
10 (dez) posições por módulo
100 (cem) posições por estação
Caso tenha produtos a serem separados no flow rack (equipamento que fica na frente do operador da estação), PDV irá informar as posições de coleta, EAN esperado, quantidade. O operador realiza a separação do item da posição conforme a quantidade indicada e deverá realizar a leitura do EAN para o sistema decrementar visualmente no PDV a cada unidade coletada. O WCS irá realizar a validação do EAN do produto. Em caso de Picking Costas, no final da coleta dos itens da frente será mostrado no PDV os itens a serem separados indicado com o fundo na cor amarela identificando a coleta como “Picking Costas”. No final da coleta o PDV Informa que a coleta foi finalizada e ao confirmar no botão ele libera a caixa liberando o posto para uma nova coleta. O envio ao WMS das informações a respeito da separação será realizado a cada posto para otimizar o processo de reabastecimento em casos de corte.
Em casos em que o operador verifique que os itens solicitados para separação não caberão fisicamente na caixa solicitada pelo WMS/KAIZEN, existira um botão na tela do PDV  “Pede Caixa” onde o operador ao apertar esse botão, com isso a separação será interrompida e a caixa irá direto para o final da linha. No Order Start, a caixa adicional desse pedido, será a prioridade para que seja a próxima enviada para a linha de separação.
Operador ao receber essa caixa adicional, fará a separação somente dos itens que não couberam na caixa anterior.
ShortPicking
Em casos que o operador verifique que a quantidade fisica do produto solicitado para ser separado é inferior que a quantidade solicitada pelo sistema no pedido, operador deverá pressionar o botão “Finalizar Picking” que será apresentado no PDV. O sistema irá considerar um corte no respectivo item e enviará ao WMS apenas a quantidade que foi separada.
Exemplo: Pedido no sistema solicita 10 (dez) unidades do sku ‘XPTO’, operador ao realizar a separação nota que fisicamente existe apenas 8 (oito) unidades desse sku, operador realiza a leitura do EAN do produto para diminuir a quantidade até 8 (oito), então operador deverá pressionar o botão “Finalizar Picking” que será apresentado no PDV. O sistema irá considerar um corte no respectivo item concretizando um ShortPicking.
Com isso, o WMS/KAIZEN ao receber as informações de separação realiza a tarefa de reabastecimento.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Separação Fracionados  
**Score:** — (semantico) | **ID:** d2dd1506e8e797bd

Após o WCS realizar todos os processos citados acima, com a caixa/volume devidamente etiquetada com base no pedido, seguirá para a linha de separação.
Cada posto terá:
1 (um) operador por posto.
1 (um) PDV por posto.
1 (um) Scanner de mão por posto.
WCS não permitirá que o mesmo item seja cadastrado em 2 postos diferentes.
Operador deverá realizar o login na estação de separação, antes de iniciar a operação de separação.
O login deve ser feito realizando a leitura do código de barras do crachá do operador no leitor fixo da linha de separação, esse login deve ser feito antes de iniciar o picking.
Caso a caixa seja lida e não tenha nenhum operador logado na estação, não será possível iniciar o picking daquele pedido, até que seja feito o login. Será informando no PDV que o picking não foi iniciado devido não ter um operador logado na estação.
Ao chegar ao ponto de leitura da linha, essa etiqueta será lida por um leitor fixo e o sistema fará a identificação do volume e verifica se existem produtos a serem separados no posto, caso exista produtos a serem separados nesse posto a caixa então para na estação.
Caso tenha produtos a serem separados no flow rack (equipamento que fica na frente do operador da estação), PDV irá informar as posições de coleta, EAN esperado, quantidade. O operador realiza a separação do item da posição conforme a quantidade indicada e deverá realizar a leitura do EAN para o sistema decrementar visualmente no PDV a cada unidade coletada. O WCS irá realizar a validação do EAN do produto. Em caso de Picking Costas, no final da coleta dos itens da frente será mostrado no PDV os itens a serem separados indicado com o fundo na cor amarela identificando a coleta como “Picking Costas”. No final da coleta o PDV Informa que a coleta foi finalizada e ao confirmar no botão ele libera a caixa liberando o posto para uma nova coleta. O envio ao WMS das informações a respeito da separação será realizado a cada posto para otimizar o processo de reabastecimento em casos de corte.
Em casos em que o operador verifique que os itens solicitados para separação não caberão fisicamente na caixa solicitada pelo WMS/KAIZEN, existira um botão na tela do PDV  “Pede Caixa” onde o operador ao apertar esse botão, com isso a separação será interrompida e a caixa irá direto para o final da linha. No Order Start, a caixa adicional desse pedido, será a prioridade para que seja a próxima enviada para a linha de separação.
Operador ao receber essa caixa adicional, fará a separação somente dos itens que não couberam na caixa anterior.
Depois de finalizadas as etapas de indução e etiquetagem, as caixas seguem para a linha de separação. Cada estação de separação conta com um operador, um PDV e um scanner de mão. O operador deve realizar login na estação antes de iniciar qualquer atividade. Esse login é feito por meio da leitura do código de barras do crachá no leitor fixo da linha.
Caso a caixa chegue ao posto de separação e não haja operador logado, o sistema bloqueia o início do processo e exibe uma mensagem de aviso no PDV. Assim que a caixa é lida pelo scanner fixo, o WCS verifica se há produtos a serem separados naquele posto. Se houver, a caixa para automaticamente e o PDV exibe os itens que devem ser coletados, informando o endereço de coleta, o EAN, a quantidade solicitada e outras informações relevantes.
O operador retira os itens do flow rack, realiza a leitura do EAN e a cada leitura o sistema decrementar visualmente a quantidade restante na tela. Em caso de Picking Costas, após a separação dos itens da frente, o PDV sinaliza os itens restantes com destaque em amarelo, indicando que a coleta deverá ser feita na parte traseira. Ao finalizar toda a coleta, o operador confirma no PDV e a caixa é liberada para seguir na esteira.
A cada separação, o WCS envia as informações ao WMS para que este possa gerenciar a necessidade de reabastecimento em caso de cortes. O sistema não permite que o mesmo SKU esteja vinculado a mais de um posto de separação, garantindo que não ocorra duplicidade de tarefas entre operadores.
Caso o operador perceba que a caixa definida pelo WMS não comporta fisicamente todos os itens solicitados, ele poderá interromper a separação pressionando o botão “Pede Caixa” no PDV. Essa ação faz com que a caixa siga diretamente para o final da linha e o sistema priorize o envio de uma nova caixa adicional daquele pedido. Essa nova caixa será usada exclusivamente para os itens restantes e seguirá o mesmo fluxo de separação.
ShortPicking
Em casos que o operador verifique que a quantidade fisica do produto solicitado para ser separado é inferior que a quantidade solicitada pelo sistema no pedido, operador deverá pressionar o botão “Finalizar Picking” que será apresentado no PDV. O sistema irá considerar um corte no respectivo item e enviará ao WMS apenas a quantidade que foi separada.
Exemplo: Pedido no sistema solicita 10 (dez) unidades do sku ‘XPTO’, operador ao realizar a separação nota que fisicamente existe apenas 8 (oito) unidades desse sku, operador realiza a leitura do EAN do produto para diminuir a quantidade até 8 (oito), então operador deverá pressionar o botão “Finalizar Picking” que será apresentado no PDV. O sistema irá considerar um corte no respectivo item concretizando um ShortPicking.
Com isso, o WMS/KAIZEN ao receber as informações de separação realiza a tarefa de reabastecimento.
Quando o operador identifica que a quantidade física disponível de um item é inferior à solicitada no pedido, ele deve concluir a separação pressionando o botão “Finalizar Picking” no PDV. O sistema entende que houve um corte e registra o shortpicking daquele item. Apenas a quantidade efetivamente separada será enviada ao WMS, que por sua vez poderá gerar uma tarefa de reabastecimento para aquele SKU.
Por exemplo, se um pedido solicita 10 unidades de um determinado produto, mas o operador encontra apenas 8 disponíveis, ele deverá bipar as 8 unidades e finalizar o picking. Essa ação será registrada como shortpicking e comunicada automaticamente ao sistema do cliente.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote-DAI.docx`  
**Heading:** Alocação de Volumes  
**Score:** — (semantico) | **ID:** 70125cccbd3ba072

O operador só será permitido alocar qualquer volume quando estiver realizado o Login na rampa.
O crachá dos operadores que estarão localizados nas saídas das rampas deve conter obrigatoriamente 7 dígitos.
O operador pega o volume na rampa, realiza a leitura do código de barras onde o WCS indicará a posição do produto em uma das 4 posições do put to monitor (PDV), todo o quadrado da posição ficará marcado na cor da posição na tela até o operador realizar a leitura do código da posição do pallet que deve estar fisicamente visível, assim confirmando que o operador foi até o pallet e alocou a caixa no mesmo, como indicado acima teremos uma identificação por cores para facilitar o processo de identificação do usuário.
Caso o usuário informe o número de pallet divergente (errado) ao número de pallet esperado na PDV o WCS informará que o pallet informado não é o destino do volume, assim o operador deve indicar o número correto do pallet.
Para que o operador possa iniciar a alocação de volumes nas posições do PTM, ele precisa obrigatoriamente estar logado na rampa. Esse login é feito por meio da leitura do crachá, que deve conter exatamente sete dígitos. Sem o login, não é possível iniciar o processo de alocação.
Após a leitura do volume, o sistema exibe a posição no PDV e o operador deve se dirigir ao local indicado. Ao chegar à posição, ele realiza a leitura do código do pallet, que também deve estar visível fisicamente. Essa leitura é obrigatória para confirmar que a caixa foi colocada no local correto.
Caso o operador informe um número de pallet incorreto, o WCS bloqueia a operação e informa que o pallet não corresponde ao destino do volume. Com isso, o operador deve corrigir a leitura e confirmar a alocação corretamente, assegurando a rastreabilidade e a consistência das informações de expedição.

---
**Origem:** [I23.3502] 2023 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO DE SOFTWARE REV_1 SemLote.docx`  
**Heading:** Separação Fracionados  
**Score:** — (semantico) | **ID:** 27996baff1bee4eb

Após o WCS realizar todos os processos citados acima, com a caixa/volume devidamente etiquetada com base no pedido, seguirá para a linha de separação.
Cada posto terá:
1 (um) operador por posto.
1 (um) PDV por posto.
1 (um) Scanner de mão por posto.
WCS não permitirá que o mesmo item seja cadastrado em 2 postos diferentes.
Operador deverá realizar o login na estação de separação, antes de iniciar a operação de separação.
O login deve ser feito realizando a leitura do código de barras do crachá do operador no leitor fixo da linha de separação, esse login deve ser feito antes de iniciar o picking.
Caso a caixa seja lida e não tenha nenhum operador logado na estação, não será possivel iniciar o picking daquele pedido, até que seja feito o login. Será informando no PDV que o picking não foi iniciado devido não ter um operador logado na estação.
Ao chegar ao ponto de leitura da linha, essa etiqueta será lida por um leitor fixo e o sistema fará a identificação do volume e verifica se existem produtos a serem separados no posto, caso exista produtos a serem separados nesse posto a caixa então para na estação
Caso tenha produtos a serem separados no flow rack (equipamento que fica na frente do operador da estação), PDV irá informar as posições de coleta, EAN esperado, quantidade. O operador realiza a separação do item da posição conforme a quantidade indicada e deverá realizar a leitura do EAN para o sistema decrementar visualmente no PDV a cada unidade coletada. O WCS irá realizar a validação do EAN do produto. Em caso de Picking Costas, no final da coleta dos itens da frente será mostrado no PDV os itens a serem separados indicado com o fundo na cor amarela identificando a coleta como “Picking Costas”. No final da coleta o PDV Informa que a coleta foi finalizada e ao confirmar no botão ele libera a caixa liberando o posto para uma nova coleta. O envio ao WMS das informações a respeito da separação será realizado a cada posto para otimizar o processo de reabastecimento em casos de corte.
Em casos em que o operador verifique que os itens solicitados para separação não caberão fisicamente na caixa solicitada pelo WMS/KAIZEN, existira um botão na tela do PDV  “Pede Caixa” onde o operador ao apertar esse botão, com isso a separação será interrompida e a caixa irá direto para o final da linha. No Order Start, a caixa adicional desse pedido, será a prioridade para que seja a próxima enviada para a linha de separação.
Operador ao receber essa caixa adicional, fará a separação somente dos itens que não couberam na caixa anterior.
ShortPicking
Em casos que o operador verifique que a quantidade fisica do produto solicitado para ser separado é inferior que a quantidade solicitada pelo sistema no pedido, operador deverá pressionar o botão “Finalizar Picking” que será apresentado no PDV. O sistema irá considerar um corte no respectivo item e enviará ao WMS apenas a quantidade que foi separada.
Exemplo: Pedido no sistema solicita 10 (dez) unidades do sku ‘XPTO’, operador ao realizar a separação nota que fisicamente existe apenas 8 (oito) unidades desse sku, operador realiza a leitura do EAN do produto para diminuir a quantidade até 8 (oito), então operador deverá pressionar o botão “Finalizar Picking” que será apresentado no PDV. O sistema irá considerar um corte no respectivo item concretizando um ShortPicking.
Com isso, o WMS/KAIZEN ao receber as informações de separação realiza a tarefa de reabastecimento.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Alocação de Volumes no Pallet  
**Score:** — (semantico) | **ID:** d10975e5e557d2dd

Quando um volume chega à ponta da rampa, o operador realiza a leitura da etiqueta do volume 
Após isso, o WCS verifica se já existe um pallet ativo associado à mesma transportadora e rota daquele volume.
Se já existir pallet para aquela rota/transportadora:
O coletor exibirá a posição do pallet onde o volume deve ser alocado.
Se ainda não existir pallet para aquela rota/transportadora:
O coletor solicitará ao operador que informe uma posição física de pallet.
Após leitura dessa posição, ela passa a ser utilizada para todos os próximos volumes da mesma rota/transportadora.
Fluxo operacional do Aloca Pallet:
Coletar o volume na ponta da rampa.
Ler a etiqueta do volume recebida via integração.
O WCS indicará no coletor a posição do pallet.
O operador deposita o volume no pallet.
O operador realiza a leitura do código de barras da posição do pallet para confirmar a alocação.
Caso o operador informe uma posição diferente da indicada pelo sistema, o WCS apresentará mensagem de erro, orientando o operador a informar a posição correta.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Alocação de Volumes no Pallet  
**Score:** — (semantico) | **ID:** 0cc9b9908bade858

Quando um volume chega à ponta da rampa, o operador realiza a leitura da etiqueta do volume 
Após isso, o WCS verifica se já existe um pallet ativo associado à mesma transportadora e rota daquele volume.
Se já existir pallet para aquela rota/transportadora:
O coletor exibirá a posição do pallet onde o volume deve ser alocado.
Se ainda não existir pallet para aquela rota/transportadora:
O coletor solicitará ao operador que informe uma posição física de pallet.
Após leitura dessa posição, ela passa a ser utilizada para todos os próximos volumes da mesma rota/transportadora.
Fluxo operacional do Aloca Pallet:
Coletar o volume na ponta da rampa.
Ler a etiqueta do volume recebida via integração.
O WCS indicará no coletor a posição do pallet.
O operador deposita o volume no pallet.
O operador realiza a leitura do código de barras da posição do pallet para confirmar a alocação.
Caso o operador informe uma posição diferente da indicada pelo sistema, o WCS apresentará mensagem de erro, orientando o operador a informar a posição correta.

---
**Origem:** [I23.3801] 2023 — `ESPECIFICAÇÃO INTEGRAÇÕES-SERVIDORES VELOX - OCTOPUS.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** ad058bac3548202f

DOCUMENTO DE ESPECIFICAÇÃO E PARAMETRIZAÇÃO
SERVIDORES
INTEGRAÇÃO ENTRE SISTEMAS

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS 1.docx`  
**Heading:** Escrita e leitura em disco  
**Score:** — (semantico) | **ID:** 331050737bfe3c12

É necessário que a velocidade de escrita e leitura nos discos esteja dentro dos indicadores abaixo, para isso sugerimos que seja utilizado equipamentos como SSD (Solid State Drive) ou equipamentos de alta performance que atendam o desempenho de escrita e leitura abaixo.
Escrita 400 Mb/s (megabytes por segundo)
Leitura 600 Mb/s (megabytes por segundo)

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS.docx`  
**Heading:** Escrita e leitura em disco  
**Score:** — (semantico) | **ID:** 7770bd85ca1ecd62

É necessário que a velocidade de escrita e leitura nos discos esteja dentro dos indicadores abaixo, para isso sugerimos que seja utilizado equipamentos como SSD (Solid State Drive) ou equipamentos de alta performance que atendam o desempenho de escrita e leitura abaixo.
Escrita 400 Mb/s (megabytes por segundo)
Leitura 600 Mb/s (megabytes por segundo)

---
**Origem:** [I23.418] 2023 — `I21.103-Projeto Reisado - ESPECIFICACAO DE ADITIVO.docx`  
**Heading:** Descrição da Solução  
**Score:** — (semantico) | **ID:** f205cc35b6023c8e

Atualmente, existem pedidos com demanda de picking na linha 3 (Invent) e no Museu (linha 4). Para resolver a questão dos SKUs fora do picking map da linha 3, será utilizada uma marcação “X” nos itens dentro do pedido, sempre que o material não estiver alocado na linha 3. Esse processo foi testado e validado com o time de suporte da Invent, e está sendo integrado com o time do SAP para garantir o envio adequado do arquivo.
A solução irá funcionar conforme a seguinte lógica:
Pedidos com itens com a Marca “X”:
Para pedidos que contiverem a marcação “X” nos itens, o fluxo de picking será ajustado conforme o processo descrito nas etapas a seguir.
Fluxo no Sistema do MFC:
Picking na Linha 3: O picking será realizado normalmente na linha 3.
Passagem pela BAL03: O sistema irá verificar se o peso está correto, considerando apenas os itens da linha 3 (não somando os itens com a marcação “X” no campo de peso).
Se o peso estiver correto: O pedido seguirá para JP81/82, onde a linha SSI assumirá o picking do Museu. Posteriormente, o pedido será direcionado ao mezanino para o fracionamento no MFC, considerando todos os itens.
Se o peso estiver incorreto: O pedido será redirecionado para conferência. O time de operação fará os ajustes necessários e o pedido retornará para a linha, passando novamente pelo Museu antes de seguir para o fracionamento.

---
**Origem:** [I23.418] 2023 — `I21.103-Projeto Reisado - ESPECIFICACAO DE ADITIVO.docx`  
**Heading:** PEDIDOS  
**Score:** — (semantico) | **ID:** c076f75f45d634b6

WMS  WCS
O processo de picking para pedidos que envolvem a linha 3 (Invent) e o Museu (linha 4) atualmente é enviado uma marcação “X” nos itens dentro do pedido. Essa marcação indica que o item não está alocado na linha 3 e, portanto, será processado de maneira diferente no fluxo de picking.
Marcação “X” nos Itens:
Critério para Marcação “X”: A marcação é enviada aos itens que não estiverem alocados na linha 3 (Invent). Ou seja, todos os itens da linha 4 (Museu) receberão a marcação “X”, indicando que esses itens serão tratados de forma diferenciada durante o processo de picking.
Impacto no Fluxo: Quando um item tiver a marcação “X”, ele será considerado uma exceção e não será incluído no cálculo de peso da caixa durante o processo de conferência na BAL03. Esse ajuste permite que o WCS faça o processamento adequado e o MFC não rejeite o pedido com SKUs fora do picking map da linha 3
WP;8593125;236377913;1;10;0;20251011130000;;CL;
CO;8593125;236377913;1;3;10;0;CL;133366384;2.137;C04;
LD;8593125;236377913;1;NATURA COSMÉTICOS;;;IZAIRA DA SILVA PEREIRA;R 1, 14;CRISTO REDENTOR;CE-FORTALEZA CE;60337-660;20251011130000;;;14;D03;001/001;820632098;09/10/2025;133366384;JB FORTALEZA;005621;CN;236377913;0;11/10/2025;437980/75;FOR126;2.134;L3;;0236377913001;
FP;8593125;236377913;1;IP1;0;10;
FP;8593125;236377913;1;PICK;13;10;
WS;8593125;236377913;1;PICK;1;10;0;GET;;1;50527870;;AVON UT MATTE BATOM NUDE MARROM;;0;0;30;X;
WS;8593125;236377913;1;PICK;2;10;0;GET;;1;50593487;;ESCOVA ULTRALISO TROPICAL;;0;0;20;;
WS;8593125;236377913;1;PICK;3;10;0;GET;;1;50590618;;AQUAVIBE COL DES CORP CARAMBOLA 300ML;;0;0;80;;
WS;8593125;236377913;1;PICK;4;10;0;GET;;1;50512478;;AQUAVIBE COL DES FRAMBOESA CASSIS 300ML;;0;0;10;;
WS;8593125;236377913;1;PICK;5;10;0;GET;;1;50512487;;AVON CARE PROT SOLAR REFRES FPS 30 120G;;0;0;50;;
WS;8593125;236377913;1;PICK;6;10;0;GET;;1;50594141;;AVON CARE CR FAC TOM UNIF NOITE 100G;;0;0;70;;
WS;8593125;236377913;1;PICK;7;10;0;GET;;1;61001256;;ESP NATURA C16 2025 NE NO RJ-ES CO MG V2;;0;0;100;;
WS;8593125;236377913;1;PICK;8;10;0;GET;;1;61001254;;ESP NATURA C17 2025 NE NO RJ-ES CO MG V2;;0;0;130;;
WS;8593125;236377913;1;PICK;9;10;0;GET;;1;50574902;;AVON CARE 6EM1 CR FAC HIDRATANTE 100GR;;0;0;60;;
WS;8593125;236377913;1;PICK;10;10;0;GET;;1;50601336;;REVISTA DE BELEZA C16 2025 NENO V2;;0;0;90;;
WS;8593125;236377913;1;PICK;11;10;0;GET;;1;50546410;;REVISTA BELEZA C17 2025 BRASIL V1;;0;0;110;;
WS;8593125;236377913;1;PICK;12;10;0;GET;;1;50546411;;REVISTA CASA ESTILO C17 2025 BRASIL V1;;0;0;120;;
WS;8593125;236377913;1;PICK;13;10;0;GET;;2;50538995;;CTR SUPER LONG MASCARA PROVA DAGUA;;0;0;40;;
FP;8593125;236377913;1;D03;0;10;

---
**Origem:** [I23.418] 2023 — `I21.103-Projeto Reisado - ESPECIFICACAO DE SOFTWARE.docx`  
**Heading:** Tela para incluir/editar/remover motivos de reimpressão  
**Score:** — (semantico) | **ID:** 43450ab74e87ba90

Nível SUPER USER.

---
**Origem:** [I23.418] 2023 — `I21.103-Projeto Reisado - ESPECIFICACAO DE SOFTWARE.docx`  
**Heading:** Opções de impressoras  
**Score:** — (semantico) | **ID:** 137e434fa1ed0e45

A listagem de impressoras deve exibir apenas duas opções: FULL CASE e “[...]”
Quando houver necessidade de priorizar a saída de uma caixa específica (liberação de caminhão), o operador poderá imprimir a 1ª via diretamente na etiquetadora automática.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Operação Velox  
**Score:** — (semantico) | **ID:** 37b4f5f036f605b9

O Velox terá 2 (duas) formas de operação, operação normal e contingência.
Essa parametrização se faz necessário, pois dependendo da forma que o cliente decidir operar, as validações de informações no Velox serão tratadas de forma diferentes.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR - Etiquetas.docx`  
**Heading:** Requisitos Funcionais  
**Score:** — (semantico) | **ID:** 7ae3584279b70c7a

Esta seção descreve os requisitos relacionados às funcionalidades do sistema.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Requisitos Funcionais  
**Score:** — (semantico) | **ID:** 2a260fc469055fb4

Esta seção descreve os requisitos relacionados às funcionalidades do sistema.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_02.docx`  
**Heading:** Requisitos Funcionais  
**Score:** — (semantico) | **ID:** 7e3e27666f73e2ea

Esta seção descreve os requisitos relacionados às funcionalidades do sistema.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** Requisitos Funcionais  
**Score:** — (semantico) | **ID:** 03b94faa84fa0ed9

Esta seção descreve os requisitos relacionados às funcionalidades do sistema.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_03.docx`  
**Heading:** Cadastros  
**Score:** — (nome-topico) | **ID:** 28cb42cb6acd62c1

Segue abaixo a lista com os cadastros necessários para atender a sprint em questão:
Cadastro de motivos de bloqueio/desbloqueio de posições
Motivos
Cadastro de usuários
Conter uma flag que aquele usuário é especial e pode criar os motivos de bloqueio e desbloqueio da posição
Cadastros de posições
Cadastrar as posições AC para o WCS ter espelhado o estoque do SAP
Onde houver no cadastro a informação da faixa de Shelf Life, deverá ter uma flag que marque as faixas que não devem ficar no AA
Cadastro do Reabastecimento (Tipo de Posição / Nível / Percentual Início / Percentual Fim / Flag de Mistura Datas / Flag de Controle de UD )
Cadastro de limite de unidades que pode sair no Picking de uma única vez no LED para o operador.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** Requisitos Funcionais  
**Score:** — (semantico) | **ID:** de2206c2badf8d46

Esta seção descreve os requisitos relacionados às funcionalidades do sistema.

---
**Origem:** [I23.1410] 2024 — `ESPECIFICACAO DE INTEGRAÇÃO - JSL - REV8.docx`  
**Heading:** Autenticação (Basic Auth + Bearer)  
**Score:** — (semantico) | **ID:** 1b4f6faafcb76a35

WMS  VELOX (POST)
Detalhes de autenticação via Basic Auth com Bearer.
Para garantir a segurança e o controle de acesso. Esse processo envolve duas etapas principais: primeiro, a autenticação do usuário utilizando as credenciais básicas (usuário e senha), e segundo o uso do Bearer Token para autenticar requisições subsequentes.
Solicitação do token
Incluir usuário e senha na requisição e autenticação via Basic Auth;
Exemplo: usuário: usuario1 / senha: senha1;
No retorno da requisição é enviado o token;
Obs.: desconsiderar a URL pois foi criada apenas para exemplificar as configurações.
Autenticação utilizando o token solicitado
No header, passar a informação do token (autorização) recebida na chamada anterior.
No body, enviar os dados da api acordados para a api.
O token deve ser enviado para todas as apis.
O token deverá ser renovado a cada 24 horas para garantir sua autenticidade.
Obs.: desconsiderar a URL pois foi criada apenas para exemplificar as configurações.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Autenticação  
**Score:** — (semantico) | **ID:** 360d061e21ca0048

WMS / VELOX  WMS / VELOX (POST)
As integrações trocadas entre os sistemas WMS e Velox, necessitarão de autenticação via Basic Auth com Bearer.
Para garantir a segurança e o controle de acesso, esse processo envolve duas etapas principais: primeiro, a autenticação do usuário utilizando as credenciais básicas (usuário e senha), e segundo o uso do Bearer Token para autenticar requisições subsequentes.
Solicitação do token
Incluir usuário e senha na requisição e autenticação via Basic Auth;
Exemplo: usuário: usuario1 / senha: senha1;
No retorno da requisição é enviado o token;
Obs.: desconsiderar a URL pois foi criada apenas para exemplificar as configurações.
Autenticação utilizando o token solicitado
No header, passar a informação do token (autorização) recebida na chamada anterior;
No body, enviar os dados da api acordados para a api;
O token deve ser enviado para todas as APIs;
O token deverá ser renovado a cada 24 horas para garantir sua autenticidade.
Obs.: desconsiderar a URL pois foi criada apenas para exemplificar as configurações.

---
**Origem:** [I23.1412] 2024 — `FDBR - ESPECIFICAÇÃO SERVIDORES VELOX.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 6c94a54a8286fdbc

DOCUMENTO DE ESPECIFICAÇÃO E PARAMETRIZAÇÃO
Servidores
Rede VPN

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Autenticação via SSO  
**Score:** — (semantico) | **ID:** 57c235c9533ae1d8

O acesso dos usuários ao sistema deverá ser realizado exclusivamente por meio de SSO (Single Sign-On). garantindo a segurança centralizada com controle de acesso unificado, melhor experiência do usuário, com login único para múltiplos sistemas e gestão simplificada de credenciais facilitando a administração de permissões e auditorias.
O sistema WCS deverá estar integrado ao provedor de identidade corporativo (IdP) utilizado pela Fagron..
Fluxo do Processo de Autenticação:
Redirecionamento ao Provedor de Identidade (IdP): Ao tentar acessar o sistema, o usuário é redirecionado automaticamente para o IdP corporativo (por exemplo, Azure AD, Keycloak, ou outro conforme definido pela empresa).
Autenticação no IdP: O usuário informa suas credenciais no IdP. Caso já tenha uma sessão ativa com esse provedor, o login é instantâneo e transparente (sem novo input de senha).
Geração de Token de Autenticação: Após validação das credenciais, o IdP emite um token de autenticação seguro (como JWT, SAML ou OIDC).
Validação no Sistema: O sistema recebe e valida esse token, concedendo acesso ao usuário com base nas permissões definidas no diretório central.
Acesso a Outros Sistemas: Uma vez autenticado, o mesmo token pode ser reutilizado para acessar outros sistemas integrados à mesma infraestrutura SSO, sem nova autenticação.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Autenticação  
**Score:** — (semantico) | **ID:** 9ce50bcbc24678a0

Para a autenticação entre os sistemas WCS e WMS do cliente será utilizado a API padrão do Azure AD (Microsoft Entra) via protocolo SAML.
Referência:
https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/view-applications-portal

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Controle de caixas plasticas  
**Score:** — (semantico) | **ID:** 2507a1ba9e7e4dc5

Para gerenciar o controle de caixas plásticas o Velox irá avaliar o cadastro de loja onde uma vez que a flag “Envio de caixa plástica” estiver ativa o Velox irá adicionar a um log (solicitação nova)as  informações de data e hora, número da caixa plástica e loja que posteriormente será a base para consulta da funcionalidade nova Recebimento de caixas (solicitação nova) em que após a volta das caixas de uma loja será possível realizar a leitura de caixa, sendo uma leitura de caixa a caixa e após o operador clicar em finalizar recebimento o Velox informara quantas e quais caixas estão faltando, essas informações estarão dispostas em um relatórios de envio e recebimento de caixas onde a cada caixa plástica é aprovada no processo de checagem da balança é registrada uma caixa enviada para a loja e quando o processo de recebimento das caixas plásticas da loja é finalizada os valores são enviados para o relatórios, sendo possível verificar através de filtros de loja e tempo quais as loja que geram mais ocorrências de problemas de devolução de caixas plásticas.
Nos casos das caixas plásticas que são enviadas para o cliente final (loja) só estarão disponíveis para alocação de um outro volume de separação quando o processo de recebimento for realizado e finalizado, já para os casos onde a caixa não vai para o cliente final ou seja, a separação realizada na caixa plástica não pertença a uma loja que tenha flag de “Envio de caixa plástica”  ativa, a mesma estará disponível sistemicamente para um novo vinculo de picking após a aprovação da caixa plástica na checagem da balança.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Separação – Full Case  
**Score:** — (semantico) | **ID:** e8d36cf052d423de

Como mencionado acima o operador deve seguir até um posto de trabalho (OrderStart) realizar o login no Velox e acessar a tela de OrderStart selecionando em qual rua ele irá realizar a separação, após selecionar o parâmetro de impressão o Velox realiza as impressões de acordo com as disposições físicas de cada posição, assim as etiquetas são impressas em ordem de maneira que o operador segue em uma única direção realizado a separação dos produtos sem a necessidade de realizar um “vai e vem”, assim otimizando o tempo de separação. A ordem de separação ocorrerá sempre da posição mais longe da esteira para a mais próxima.
Será permitido apenas um operador realizando a separação por corredor/rua.
O operador irá acessar a tela de separação Full Cases e seguir a ordem de separação das etiquetas,  onde solicitará a leitura do endereço e item para validação da coleta. O sistema espera a coleta de tudo que foi impresso e pertence a respectiva rua.
Após realizar a validação sistêmica, será informado ao operador a quantidade esperada de coleta e o operador deve informar a quantidade que será coletada. Caso o número informado for maior que o esperado o sistema deve apresentar erro. Na Ocorrência do número coletado for menor que o esperado, o Velox solicitará para o operador informar quais etiquetas serão descartadas para não disparar ao WMS.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO -_REV1.docx`  
**Heading:** Controle de Tolerância de Peso  
**Score:** — (semantico) | **ID:** f19c1789654d7a20

O WCS deve disponibilizar uma tela que permita que o time Andreani consiga ajustar a tolerância para mais e para menos de todos os volumes. Esta tolerancia irá determianar se o volume irá ou não para a conferência seguindo os parametros cadastrados no sistema.
A tolernacia será ajustada exclusivamente em porcentagem por faixa de peso.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO -_REV1.docx`  
**Heading:** Alocar volumes Rejeitados  
**Score:** — (semantico) | **ID:** 558da781ac0ce757

Na tela de controle de pallets, onde o WCS irá exibir os pallets atuais da operação e permitir o fechamento do pallet, deve haver a posssibilidade de fazer uma alocação do volume manualmente pela tela do sistema, nesta etapa será realizado as mesmas validações que o sistema possui no processo do sorter, ou seja, validação de rampa, transportadora e etiqueta com 13 caracteres.
Este cenario sera feito em casos de volumes que foram pra rejeito e não serão reinduzidos para passarem no portal do sorter.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Produtos  
**Score:** — (semantico) | **ID:** 5c11006f14d6556d

Os produtos deverão estar devidamente cadastrados no sistema Velox com seus detalhes de dimensões como altura, largura e comprimento, para que o Velox consiga realizar o cálculo de cubagem com maior precisão.
Como não teremos integração para essas informações, a carga inicial dos produtos será introduzida/importada no sistema Velox através de tabela Excel, com isso teremos os produtos cadastrados no sistema Velox, e caso futuramente seja necessário o cadastro/edição ou exclusão de algum produto, poderá ser feito diretamente no sistema Velox.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - ADITIVO_HYDRA_REV.1.docx`  
**Heading:** Reenvio de Tarefa  
**Score:** — (semantico) | **ID:** a209d3098d73174d

Por conta de oscilações na rede, o WCS precisará acrescentar um botão de reenvio forçado para casos que o envio automático apresente falha e não acabe prejudicando os demais processos subsequentes.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - ADITIVO_HYDRA_REV.1.docx`  
**Heading:** Status por Posto  
**Score:** — (semantico) | **ID:** af7e4a8c11927071

Para uma visualização mais otimizada e objetiva de quais postos o volume passou o WCS deve acrescentar o status de separação por posto daquele respectivo volume na tela de “Resumo de Coletas”.
Segue exemplo solicitado:

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** 966fc4d844e78667

Todo o processo de separação e etiquetagem das caixas será de responsabilidade do cliente.
Serão 3 (três) Tipos de Caixas, 2 (duas) no modelo de plástico, de tamanho grande (com tampa) e tamanho médio sem tampa com etiquetas geradas pelo cliente (Fracionado) e 1 (uma) no modelo papelão (Full case) caixa fechada com etiquetas geradas pelo cliente, caso seja necessária uma reimpressão de etiqueta, será de responsabilidade do cliente.
As caixas de volumes fracionados podem conter vários pedidos de uma única Loja.
A indução das caixas na esteira será feita após o processo de Picking (responsabilidade do cliente), seguindo assim direto para o Sorter em casos de volumes FullCase ou para a estação de conferência em casos de volumes fracionados.
Esses volumes deverão estar integrados no sistema VELOX para que seja feita a distribuição correta conforme configuração do Sorter.
Não teremos EMBARQUE PARCIAL de caixa de papelão (Full Case) em nenhum pedido, no ato da separação (Picking) o volume faltante será estornado do pedido, com isso a quantidade inserida na esteira vai estar correta. (responsabilidade do cliente)

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** 1292743d805c42ef

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet    atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** 6d4ff1cd09cff2a3

Etiqueta de fracionados, é impressa pela Alcis no início do processo de separação.
Código de barras identifica o número sequencial de número de caixa.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Operação  
**Score:** — (semantico) | **ID:** fa28a332d11ba24b

Todo o processo de separação e etiquetagem das caixas será de responsabilidade do cliente.
Serão 3 (três) Tipos de Caixas, 2 (duas) no modelo de plástico, de tamanho grande (com tampa) e tamanho médio sem tampa com etiquetas geradas pelo cliente (Fracionado) e 1 (uma) no modelo papelão (Full case) caixa fechada com etiquetas geradas pelo cliente, caso seja necessária uma reimpressão de etiqueta, será de responsabilidade do cliente.
As caixas de volumes fracionados podem conter vários pedidos de uma única Loja.
A indução das caixas na esteira será feita após o processo de Picking (responsabilidade do cliente), seguindo assim direto para o Sorter em casos de volumes FullCase ou para a estação de conferência em casos de volumes fracionados.
Esses volumes deverão estar integrados no sistema VELOX para que seja feita a distribuição correta conforme configuração do Sorter.
Não teremos EMBARQUE PARCIAL de caixa de papelão (Full Case) em nenhum pedido, no ato da separação (Picking) o volume faltante será estornado do pedido, com isso a quantidade inserida na esteira vai estar correta. (responsabilidade do cliente)

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Fechamento  
**Score:** — (semantico) | **ID:** 096bd602c885a4c8

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - Quando visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Fracionados  
**Score:** — (semantico) | **ID:** c846f0f52037f55f

Etiqueta de fracionados, é impressa pela Alcis no início do processo de separação.
Código de barras identifica o número sequencial de número de caixa.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** CrossCheck na Rampa  
**Score:** — (semantico) | **ID:** bd2c6e5d0b22daf3

Em cada rampa, haverá um leitor de código de barras que realizará o processo de crosscheck Após o desvio do volume na rampa, conforme descrito a seguir:
Leitura do Volume: O leitor captura o código do volume presente na rampa.
Validação do WCS: O WCS verifica se o volume está alocado na rampa correta de acordo com o mapa de destinos.
Sinaleiro: O WCS envia uma instrução ao PLC para acender o sinaleiro:
Verde: O volume está na rampa correta.
Vermelho: O volume está na rampa incorreta.
Esse processo garante a validação final do desvio de cada volume, permitindo rápida identificação de inconsistências e auxiliando a operação a manter a precisão e rastreabilidade dos pedidos.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Etiqueta Picking Fracionado  
**Score:** — (semantico) | **ID:** a77c12cd712b64c3

Essa etiqueta será utilizada no processo de picking fracionado.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Sugestão de Alocação  
**Score:** — (semantico) | **ID:** 5807c447ca45967c

O sistema WCS será responsável por sugerir a alocação estratégica dos produtos com base na análise da curva ABC, com o objetivo de otimizar a eficiência operacional no Centro de Distribuição Andreani. Essa funcionalidade prioriza a organização dos produtos nas posições de picking de acordo com sua relevância e frequência de movimentação.
Critérios de Alocação por Curva ABC
Itens da Curva A:
Itens da Curva B:
Itens da Curva C:
Funcionamento da Sugestão de Alocação no WCS
O sistema WCS analisará os índices de movimentação e a frequência de separação de cada produto para sugerir a alocação ideal, de acordo com as regras da curva ABC.
Essa abordagem assegura uma distribuição estratégica dos itens, melhorando o fluxo de trabalho e minimizando desperdícios operacionais.
Observação
O WCS não considerará a unidade de estoque para as sugestões de alocação, analisando apenas os dados de coleta e movimentação do SKU.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Descida de pallet manual  
**Score:** — (semantico) | **ID:** fb9711e29fdea289

No WCS Velox será possível realizar a descida de pallets de forma manual, na tela de mapa de posições ao clicar em uma das posições ou pesquisar por ela nos filtros disponíveis na tela, o WCS Velox pedirá para o usuário informar o login e senha para verificação de permissão de acesso a funcionalidade de descida manual de pallet, após a verificação o operador pode enviar o pallet para mesa de saida.
Após a retirada do pallet o WCS envia a integração WMTORD para o WMS, informando que o usuário do Velox realizou uma retirada do pallet de forma manual.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Missões  
**Score:** — (semantico) | **ID:** 208b50d4615d590b

Tela detalha todas as missões recebidas do SAP
Adicionar na tela existente a funcionalidade:
Possibilidade de priorização em massa por pallets, código de ordem, tipo de missão, doca, localização atual, origem e destino, centro, sistema de depósito, lote e produto.
Informações existentes:
- Prioridade;
- Prioridade SAP;
- Tipo Missão;
- Equipamento;
- Doca;
- Código ordem;
- Data de processamento;
- Localização atual;
- Localização de origem;
- Localização de destino;
- Centro;
- Sistema de depósito;
- Data de produção;
- Lote;
- Quantidade;
- Produto;
- Descrição.
Funcionalidades:
- Priorizar pallet individual;
- Filtros;
- Exportar Excel.
Tela de referência:

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Configuração geral  
**Score:** — (semantico) | **ID:** 3049c323ee1ec1a1

Referência – 4.7.1 Configuração geral (WCS JDI – Interface Gráfica).
Na tela de configurações estão situadas informações relevantes ao sistema. Estes necessitam serem determinados para o correto funcionamento.
Exemplos: tempo de permanência dos dados nas tabelas de histórico, configuração da tolerância de peso (valor e porcentagem), classificação do intervalo de peso (leve, médio e pesado) e configuração da quantidade de IDOCs parados no BC para envio de e-mail (aviso).
Tela referencia

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Descida de pallet manual  
**Score:** — (semantico) | **ID:** 3e4f844f7151d807

No WCS Velox será possível realizar a descida de pallets de forma manual, na tela de mapa de posições ao clicar em uma das posições ou pesquisar por ela nos filtros disponíveis na tela, o WCS Velox pedirá para o usuário informar o login e senha para verificação de permissão de acesso a funcionalidade de descida manual de pallet, após a verificação o operador pode enviar o pallet para mesa de saida.
Após a retirada do pallet o WCS envia a integração WMTORD para o WMS, informando que o usuário do Velox realizou uma retirada do pallet de forma manual.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Descida de pallet manual  
**Score:** — (semantico) | **ID:** c837485fa6824882

No WCS Velox será possível realizar a descida de pallets de forma manual, na tela de mapa de posições ao clicar em uma das posições ou pesquisar por ela nos filtros disponíveis na tela, o WCS Velox pedirá para o usuário informar o login e senha para verificação de permissão de acesso a funcionalidade de descida manual de pallet, após a verificação o operador pode enviar o pallet para mesa de saida.
Após a retirada do pallet o WCS envia a integração WMTORD para o WMS, informando que o usuário do Velox realizou uma retirada do pallet de forma manual.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Descida de pallet manual  
**Score:** — (semantico) | **ID:** 88bac0a562cf17bd

No WCS Velox será possível realizar a descida de pallets de forma manual, na tela de mapa de posições ao clicar em uma das posições ou pesquisar por ela nos filtros disponíveis na tela, o WCS Velox pedirá para o usuário informar o login e senha para verificação de permissão de acesso a funcionalidade de descida manual de pallet, após a verificação o operador pode enviar o pallet para mesa de saida.
Após a retirada do pallet o WCS envia a integração WMTORD para o WMS, informando que o usuário do Velox realizou uma retirada do pallet de forma manual.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Descida de pallet manual  
**Score:** — (semantico) | **ID:** 47106b6202ed2a4e

No WCS Velox será possível realizar a descida de pallets de forma manual, na tela de mapa de posições ao clicar em uma das posições ou pesquisar por ela nos filtros disponíveis na tela, o WCS Velox pedirá para o usuário informar o login e senha para verificação de permissão de acesso a funcionalidade de descida manual de pallet, após a verificação o operador pode enviar o pallet para mesa de saida.
Após a retirada do pallet o WCS envia a integração WMTORD para o WMS, informando que o usuário do Velox realizou uma retirada do pallet de forma manual.

---
**Origem:** [I25.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Tela de Gestão de Endereços,  
**Score:** — (semantico) | **ID:** 3c872c3b6632225b

O WCS disponibilizará uma tela destinada ao cadastro, alteração e exclusão de endereços. Nesta tela, o operador poderá ativar ou inativar um endereço conforme a necessidade operacional.
O sistema somente permitirá alterar o status de endereços que não possuam itens alocados. Caso o operador tente ativar ou inativar um endereço que tenha itens vinculados, o WCS exibirá uma mensagem de erro informando que não é possível alterar o status devido à existência de itens alocados no endereço.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Processo de Remoção Forçada de Estoque  
**Score:** — (semantico) | **ID:** a72240fa0966c348

O processo de remoção forçada de estoque é utilizado para retirar produtos das posições de picking ou do transfer de acordo com as necessidades da operação. Esse processo pode ser realizado tanto para itens alocados nas posições de picking quanto para itens que ainda se encontram no transfer, com ou sem endereço associado.
Remoção de Itens do Transfer
O operador realiza o login no WCS e acessa a tela de remoção de estoque. Dentro dessa tela, o operador seleciona a opção Transfer.
A tela exibirá uma lista de itens que estão no transfer, O operador poderá visualizar os itens junto com suas quantidades e endereço.
Remoção do Item:
O operador começa realizando a leitura do endereço correspondente ao item no transfer. Após isso, ele seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a remoção.
Remoção de Itens das Posições de Picking
O operador realiza o login no WCS e acessa a tela de remoção de estoque. Dentro dessa tela, o operador seleciona a opção Posições de Picking.
A tela exibirá todas as posições de picking com seus respectivos itens alocados e a quantidade disponível em cada posição. O operador visualizará as informações de cada posição e selecionará a posição da qual deseja remover os itens.
Remoção do Item:
Caso o item esteja alocado em uma posição de picking:
O operador se desloca até a posição de picking selecionada.
Em seguida, ele realiza a leitura do endereço correspondente a essa posição de picking.
Após isso, o operador seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a remoção.
O processo de remoção forçada de estoque permite à operação a flexibilidade de gerenciar e ajustar o estoque, seja para itens no transfer ou nas posições de picking, sempre garantindo que as informações estejam atualizadas e que a rastreabilidade de todos os itens removidos seja mantida.
Este processo facilita a gestão de estoques, assegurando que o WCS tenha controle total sobre a movimentação de produtos, permitindo a retirada de itens de acordo com a demanda e necessidade operacional.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Processo de Movimentação Forçada de Estoque  
**Score:** — (semantico) | **ID:** 49b7a147efa5f96d

O processo de movimentação forçada de estoque é utilizado para movimentar produtos das posições de picking ou do transfer conforme as necessidades da operação.
Início da tarefa:
O operador realiza login no WCS utilizando o coletor Android e acessa a tela de movimentação forçada de estoque.
A tela exibirá uma lista de itens alocados a endereços específicos, permitindo que o operador visualize os itens e suas respectivas quantidades.
Remoção do Item:
O operador inicia a operação realizando a leitura do endereço correspondente ao item.
Em seguida, seleciona a quantidade a ser retirada e realiza a leitura do código do item para confirmar a remoção.
Alocação do Item:
Após a retirada, o WCS indica uma posição sugerida no transfer, caso exista.
O operador pode então se deslocar até o endereço indicado, realizar a leitura do código do endereço e confirmar a quantidade e o EAN do item.
É possível selecionar uma posição vazia para alocação, não sendo obrigatório mover o item para o endereço sugerido.
O processo de movimentação forçada de estoque proporciona flexibilidade operacional, permitindo movimentar itens tanto no transfer quanto nas posições de picking, mantendo sempre o controle atualizado e a rastreabilidade completa de todas as movimentações.
Este processo garante maior eficiência na gestão de estoque, assegurando que o WCS tenha controle total sobre os itens e permitindo ajustes conforme a demanda e necessidade operacional.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Processo de Remoção Forçada de Estoque  
**Score:** — (semantico) | **ID:** 0827523ba1ba2aeb

O processo de remoção forçada de estoque é utilizado para retirar produtos das posições de picking ou do transfer de acordo com as necessidades da operação. Esse processo pode ser realizado tanto para itens alocados nas posições de picking quanto para itens que ainda se encontram no transfer, com ou sem endereço associado.
Remoção de Itens do Transfer
O operador realiza o login no WCS e acessa a tela de remoção de estoque. Dentro dessa tela, o operador seleciona a opção Transfer.
A tela exibirá uma lista de itens que estão no transfer, O operador poderá visualizar os itens junto com suas quantidades e endereço.
Remoção do Item:
Caso o item esteja atrelado a um endereço:
O operador começa realizando a leitura do endereço correspondente ao item no transfer. Após isso, ele seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a remoção.
Remoção de Itens das Posições de Picking
O operador realiza o login no WCS e acessa a tela de remoção de estoque. Dentro dessa tela, o operador seleciona a opção Posições de Picking.
A tela exibirá todas as posições de picking com seus respectivos itens alocados e a quantidade disponível em cada posição. O operador visualizará as informações de cada posição e selecionará a posição da qual deseja remover os itens.
Remoção do Item:
Caso o item esteja alocado em uma posição de picking:
O operador se desloca até a posição de picking selecionada.
Em seguida, ele realiza a leitura do endereço correspondente a essa posição de picking.
Após isso, o operador seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a remoção.
O processo de remoção forçada de estoque permite à operação a flexibilidade de gerenciar e ajustar o estoque, seja para itens no transfer ou nas posições de picking, sempre garantindo que as informações estejam atualizadas e que a rastreabilidade de todos os itens removidos seja mantida.
Este processo facilita a gestão de estoques, assegurando que o WCS tenha controle total sobre a movimentação de produtos, permitindo a retirada de itens de acordo com a demanda e necessidade operacional.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Processo de Remoção Forçada de Estoque  
**Score:** — (semantico) | **ID:** b65772cb211c1c2e

O processo de remoção forçada de estoque é utilizado para retirar produtos das posições de picking ou do transfer de acordo com as necessidades da operação. Esse processo pode ser realizado tanto para itens alocados nas posições de picking quanto para itens que ainda se encontram no transfer, com ou sem endereço associado.
Remoção de Itens do Transfer
O operador realiza o login no WCS e acessa a tela de remoção de estoque. Dentro dessa tela, o operador seleciona a opção Transfer.
A tela exibirá uma lista de itens que estão no transfer, com ou sem endereço associado. O operador poderá visualizar os itens junto com suas quantidades.
Remoção do Item:
Caso o item esteja atrelado a um endereço:
O operador começa realizando a leitura do endereço correspondente ao item no transfer. Após isso, ele seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a remoção.
Caso o item não tenha endereço associado:
O operador seleciona a quantidade retirada e realiza a leitura do código do item, sem a necessidade de ler o endereço.
Remoção de Itens das Posições de Picking
O operador realiza o login no WCS e acessa a tela de remoção de estoque. Dentro dessa tela, o operador seleciona a opção Posições de Picking.
A tela exibirá todas as posições de picking com seus respectivos itens alocados e a quantidade disponível em cada posição. O operador visualizará as informações de cada posição e selecionará a posição da qual deseja remover os itens.
Remoção do Item:
Caso o item esteja alocado em uma posição de picking:
O operador se desloca até a posição de picking selecionada.
Em seguida, ele realiza a leitura do endereço correspondente a essa posição de picking.
Após isso, o operador seleciona a quantidade retirada e realiza a leitura do código do item para confirmar a remoção.
O processo de remoção forçada de estoque permite à operação a flexibilidade de gerenciar e ajustar o estoque, seja para itens no transfer ou nas posições de picking, sempre garantindo que as informações estejam atualizadas e que a rastreabilidade de todos os itens removidos seja mantida.
Este processo facilita a gestão de estoques, assegurando que o WCS tenha controle total sobre a movimentação de produtos, permitindo a retirada de itens de acordo com a demanda e necessidade operacional.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Indução Volumes  
**Score:** — (semantico) | **ID:** 12f10bcc19ba6224

A indução de volumes será gerenciada e cadenciada pelo WCS, que seguirá as regras de prioridade e a matriz de fragilidade de cada produto. O processo começa com o WMS, que envia toda a massa de tarefas que foram concluídas, ou seja, os pallets que foram coletados para atendimento das tarefas. Com essas informações, o WCS determina, de forma sequencial, qual pallet deve ser induzido em cada momento, respeitando as condições de disponibilidade e prioridade.
O operador deverá acessar a tela do WCS, via coletor do cliente, e ler o número do pallet efetuando o consumo deste pallet para rastreabilidade do processo e permitir que aqueles volumes do pallet consumido sejam liberados para alocação em seus respectivos PTLs.
Após o consumo do pallet, o operador tem a possibilidade de induzir os volumes na esteira, seguindo as orientações e controle fornecidos pelo WCS. Este processo garante a correta alocação dos volumes, a rastreabilidade das movimentações e a eficiência no fluxo de trabalho.
O WCS continua a supervisionar o processo de indução, garantindo que a sequência de indução dos volumes ocorra de acordo com a prioridade e a matriz de fragilidade previamente definida, otimizando o desempenho do sistema de automação.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Indução Volumes  
**Score:** — (semantico) | **ID:** c3dcc66e6d3a92b6

A indução de volumes será gerenciada e cadenciada pelo WMS, que controlará as regras de prioridade e a matriz de fragilidade de cada produto. O processo começa com o WMS, que realiza o processo de separação e deixa os paletes das tarefas que foram concluídas em uma área chamada “Stage In”, nesse momento é enviado uma integração para cada pallet que for finalizado. Com essas informações, o WCS gera uma listagem orientativa de forma sequencial de indução, onde informa qual pallet deve ser induzido em cada momento, respeitando as condições de disponibilidade e prioridade e matriz de fragilidade.
A partir da integração dos paletes enviada pelo WMS o WCS já deve permitir que aqueles volumes sejam liberados para desvio no sorter e alocação em seus respectivos PTLs.
O WCS não supervisiona o processo de indução, por solicitação do cliente esse processo será controlado pela Operação, e é sua responsabilidade que o controle de indução dos volumes ocorra de acordo com a prioridade e a matriz de fragilidade previamente definida, otimizando o desempenho do sistema de automação.

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** Indução Volumes Pallet Fechado  
**Score:** — (semantico) | **ID:** 6a5426904c263e5a

A indução de volumes em pallet fechado será gerenciada e cadenciada pelo WCS, que seguirá as regras de prioridade e a matriz de fragilidade de cada produto. O processo começa com o WMS, que envia toda a massa de dados empenhada, ou seja, os pallets fechados que foram empenhados para atendimento dos tarefas. Com essas informações, o WCS determina, de forma sequencial, qual pallet deve ser induzido em cada momento, respeitando as condições de disponibilidade e prioridade. O WCS solicita o pallet via integração ao WMS.
Após o WCS solicitar o pallet desejado respeitando as regras citadas acima, o operador desempenha um papel essencial nesse processo em que leva o pallet até a área de stage, próxima à automação, onde será realizado o procedimento de indução.
O operador deverá acessar a tela do WCS, via coletor do cliente, e ler o número do pallet efetuando o consumo deste pallet para rastreabilidade do processo e permitir que aqueles volumes do pallet consumido sejam liberados para alocação em seus respectivos PTLs.
Após o consumo do pallet, o operador tem a possibilidade de induzir os volumes na esteira, seguindo as orientações e controle fornecidos pelo WCS. Este processo garante a correta alocação dos volumes, a rastreabilidade das movimentações e a eficiência no fluxo de trabalho.
O WCS continua a supervisionar o processo de indução, garantindo que a sequência de indução dos volumes ocorra de acordo com a prioridade e a matriz de fragilidade previamente definida, otimizando o desempenho do sistema de automação industrial.

---
**Origem:** [RD GRAVATAI] 2025 — `I21.1402 - ESPECIFICACAO DE SOFTWARE - RD_GRAVATAI. REV.1.docx`  
**Heading:** Configuração no Servidor Novo  
**Score:** — (semantico) | **ID:** f863ce0521b152ed

Acesso ao servidor (Com permissão de instalação e cópia de arquivos dentro do servidor)
⁠Acesso a Banco De Dados (Usuário e Senha)
No Acesso ao Banco de Dados, precisarmos obter as seguintes permissões: leitura, escrita e criação de e alteração de estrutura (Tabela, Índice, Colunas, Views,etc)
