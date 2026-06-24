# sorter-rejeito.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Rejeito no Sorter  
**Score:** — (nome-topico) | **ID:** 33ee5e852a151077

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I24.117] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Recirculação  
**Score:** — (nome-topico) | **ID:** a2189201ab933e3d

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito. Essa quantidade de recirculação é parametrizável no sistema WCS. Em caso de noread contínuo para evitar o looping desse volume o cliente pode definir um limite de vezes que esse volume pode dar noread e recircular, após chegar nesse limite o volume é desviado para rejeito.

---
**Origem:** [I24.117] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Rejeito Sorter  
**Score:** — (nome-topico) | **ID:** a7574db04a159d30

Seguirão para rejeito, os volumes com etiqueta rasurada (ilegível pelo portal de leitura), volumes sem etiqueta, rota não mapeada, problemas com peso, volumes não integrados no sistema ou que atingiram o limite de recirculação.
Todos os volumes que não forem feito o check out de peso deverão ser direcionados ao rejeito, para que o operador verifique o motivo e induza novamente o volume na esteira, para que essas informações de peso sejam verificadas e coletadas. Esta regra será desconsiderada apenas se for acionado a regra de Contingência mencionada a seguir.

---
**Origem:** [I24.117] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 1c9fd15d51948eff

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de rejeito

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Contingência do Sorter (IA)  
**Score:** — (nome-topico) | **ID:** e89620abd3eac00d

A operação de "Contingência Sorter" é um procedimento dentro do sistema WCS, projetado para lidar com cenários que não estão em condições ideais para serem processados pelo sistema de triagem automática (sorter). Caixas que tiverem com algum problema na triagem realizada pela IA, por exemplo de má qualidade dos códigos impressos pelo fornecedor, para não haver um impacto na operação o WCS estará preparado para tratar deste cenário através da contingência.
O processo de Contingencia consiste na etiquetagem do produto, concatenando os caracteres “IVT” com o DUN correto da caixa.
Quando este formato de etiqueta estiver vinculada a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS.

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** a4c1642d2d5fd07b

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
01(um) impressora de etiquetas
Abaixo segue a configuração mínima para o desktop para a estação de rejeito:

---
**Origem:** [I23.3502] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 395376d158a6a004

Seguindo reto no Sorter fica a rampa de rejeito que é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de Barras presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o Código de Barras na caixa e o PLC envia a informação recebida ao WCS. No entanto, o WCS não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um Código de Barras está visível para a câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o volume seja direcionado para o rejeito.
Rampa Cheia
Ocorre quando o processo de leitura e validação no WCS está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito.
Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o PLC deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o para o rejeito.

---
**Origem:** [I23.3503] 2025 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV ..docx`  
**Heading:** Recirculação de Volumes no Sorter  
**Score:** — (nome-topico) | **ID:** 5849e7dde3c16570

Nos casos em que a rampa de destino do volume no sorter esteja cheia, ou ocorra perda de tracking do volume, o mesmo será direcionado para recirculação na esteira. Essa recirculação tem como objetivo permitir tempo hábil para que os operadores realizem a liberação da rampa originalmente destinada ao desvio do volume. Sem necessidade de reindução do volume.
A recirculação é controlada pelo sistema WCS. Caso o volume recircule três (3) vezes e a rampa de destino ainda permaneça cheia, o WCS instruirá o envio automático do volume para a rampa de rejeito.
A quantidade máxima de recirculações é parametrizável no sistema WCS, podendo ser ajustada de acordo com as definições operacionais da Britânia. Dessa forma, o comportamento pode ser adaptado conforme as características e necessidades específicas da operação.

---
**Origem:** [I23.3503] 2025 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV ..docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 97c1758dee81c8c5

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
-Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de barras presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o PLC envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o Código de barras na caixa e o PLC envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um Código de barras está visível e atinge os parametros configurados na câmera no momento da leitura. A câmera informa ao PLC que há múltiplos códigos lidos (Notas diferentes), e o PLC envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para a recirculação, e o sinaleiro também indica essa condição na rampa piscando em amarelo.
Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o PLC deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente o volume é enviado para a recirculação.
Produto Incorreto / SKU Divergente
Ocorre quando a leitura do código do produto (SKU/código interno) no volume não corresponde ao item que o WCS esperava para a nota fiscal associada à etiquetaOp. A divergência pode ocorrer quando o portal não consegue ler corretamente o SKU do produto. Nesse caso, o operador deve fazer o processo manual de bipar ambos os códigos, caso esteja correto o WCS irá ignorar o double check no momento que a caixa for reinduzida.
OBS: O WCS guarda os motivos de rejeito na Tela de Rejeito

---
**Origem:** [I23.3503] 2025 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV ..docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 850734722b2a531d

Todos os volumes rejeitados pelo sorter serão direcionados para uma rampa de rejeito, que atuará como ponto de auditagem e tratativa dos volumes não processados corretamente.
Ao chegar na rampa de rejeito, o operador deverá registrar o motivo do rejeito e garantir que o volume seja corretamente identificado e tratado, conforme o procedimento operacional definido.
Os volumes rejeitados por rampa cheia ou perda de tracking serão recirculados automaticamente pelo sorter até atingirem o limite máximo de voltas configuradas no sistema WCS.
Caso o volume atinja a quantidade máxima de recirculações sem sucesso no desvio, ele será encaminhado automaticamente para a rampa de rejeito, encerrando o ciclo do volume no sistema.
A quantidade de recirculações permitidas é parametrizável no WCS, podendo ser ajustada conforme as definições e estratégias operacionais da Britânia.

O WCS irá disponibilizar uma tela para identificação e tratativa dos rejeitos do sorter, onde o operador deve se orientar sobre o motivo do rejeito, para que o volume seja tratado e enviado para sua rampa de destino

---
**Origem:** [I23.3503] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Heading:** Recirculação de Volumes no Sorter  
**Score:** — (nome-topico) | **ID:** 38cf5f5cad41ac87

Nos casos em que a rampa de destino do volume no sorter esteja cheia, ou ocorra perda de tracking do volume, o mesmo será direcionado para recirculação na esteira. Essa recirculação tem como objetivo permitir tempo hábil para que os operadores realizem a liberação da rampa originalmente destinada ao desvio do volume. Sem necessidade de reindução do volume.
A recirculação é controlada pelo sistema WCS. Caso o volume recircule três (3) vezes e a rampa de destino ainda permaneça cheia, o WCS instruirá o envio automático do volume para a rampa de rejeito.
A quantidade máxima de recirculações é parametrizável no sistema WCS, podendo ser ajustada de acordo com as definições operacionais da Britânia. Dessa forma, o comportamento pode ser adaptado conforme as características e necessidades específicas da operação.

---
**Origem:** [I23.3503] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** df9e05e52fd5e4f5

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
-Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de barras presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o PLC envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o Código de barras na caixa e o PLC envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um Código de barras está visível e atinge os parametros configurados na câmera no momento da leitura. A câmera informa ao PLC que há múltiplos códigos lidos (Notas diferentes), e o PLC envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para a recirculação, e o sinaleiro também indica essa condição na rampa piscando em amarelo.
Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o PLC deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente o volume é enviado para a recirculação.
Produto Incorreto / SKU Divergente
Ocorre quando a leitura do código do produto (SKU/código interno) no volume não corresponde ao item que o WCS esperava para a nota fiscal associada à etiquetaOp. A divergência pode ocorrer quando o portal não consegue ler corretamente o SKU do produto. Nesse caso, o operador deve fazer o processo manual de bipar ambos os códigos, caso esteja correto o WCS irá ignorar o double check no momento que a caixa for reinduzida.
OBS: O WCS guarda os motivos de rejeito na Tela de Rejeito

---
**Origem:** [I23.3503] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 6382c08a166e12fa

Todos os volumes rejeitados pelo sorter serão direcionados para uma rampa de rejeito, que atuará como ponto de auditagem e tratativa dos volumes não processados corretamente.
Ao chegar na rampa de rejeito, o operador deverá registrar o motivo do rejeito e garantir que o volume seja corretamente identificado e tratado, conforme o procedimento operacional definido.
Os volumes rejeitados por rampa cheia ou perda de tracking serão recirculados automaticamente pelo sorter até atingirem o limite máximo de voltas configuradas no sistema WCS.
Caso o volume atinja a quantidade máxima de recirculações sem sucesso no desvio, ele será encaminhado automaticamente para a rampa de rejeito, encerrando o ciclo do volume no sistema.
A quantidade de recirculações permitidas é parametrizável no WCS, podendo ser ajustada conforme as definições e estratégias operacionais da Britânia.

O WCS irá disponibilizar uma tela para identificação e tratativa dos rejeitos do sorter, onde o operador deve se orientar sobre o motivo do rejeito, para que o volume seja tratado e enviado para sua rampa de destino

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 844ad9c85face4a5

A rampa de rejeito recebe volumes que se enquadram em Oito situações distintas:
Sem leitura (NoRead): O portal de leitura não consegue identificar o código da caixa ou não há etiqueta presente. O volume é enviado para rejeito e deve ser corrigido e reinserido no sorter antes do portal de leitura ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Sem rota: A leitura é realizada, mas o WCS não encontra a rota do volume. O operador deve cadastrar a rota e vinculá-la ao mapa do sorter antes de reinserir o volume ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Sem mapa: A leitura é realizada e a rota existe no WCS, mas não há rampa vinculada no mapa do sorter. O operador deve vincular a rota à rampa correta e reinserir o volume ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
MultiRead: Mais de um QR code que atinge os parametros configurados na câmera está visível para a câmera no momento da leitura. O operador retira o código extra, corrige a caixa e reinseri antes do portal de leitura, ou levado manualmente o volume para a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Rampa cheia: Quando a rampa de destino está cheia, o sensor de acúmulo dispara e o volume é enviado ao rejeito. Essa situação também é sinalizada pelo sinaleiro. O volume é enviado para rejeito e deve ser reinserido no sorter antes do portal de leitura ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Cancelamento: Quando uma ordem de serviço é cancelada pelo WMS, o volume é enviado para rejeito. Deve ser tratado e não deve retornar ao sorter.
Perca de Tracking:Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o CLP deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente o volume é enviado para a rampa de rejeito e deve reinserido no sorter antes do portal de leitura ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Produto Incorreto / SKU Divergente: Ocorre quando a leitura do código do produto (SKU/código interno) no volume não corresponde ao item que o WCS esperava para associada à etiqueta do volume. A divergência pode ocorrer quando o portal não consegue ler corretamente o SKU do produto. Nesse caso, o operador deve fazer o processo manual de bipar ambos os códigos, caso esteja correto o WCS irá ignorar o double check no momento que a caixa for reinduzida ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Alteração do Status para "Na Rampa":
Quando a caixa no rejeito for corrigida e lida corretamente, seu status será atualizado para "na rampa" e o operador será informado da rampa de destino.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 5f0d876e6bca135d

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do QR Code presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de re jeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o QR Code na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um QR Code está visível para a câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o sinaleiro também indica essa condição na rampa. O operador deve inserir novamente o volume antes do portal de leitura.
Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o volume seja direcionado para o rejeito.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 68c76ccdfb11b9f8

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do QR Code presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de re jeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o QR Code na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um QR Code está visível para a câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o sinaleiro também indica essa condição na rampa. O operador deve inserir novamente o volume antes do portal de leitura.
Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o volume seja direcionado para o rejeito.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** acda135752d08a16

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do QR Code presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de re jeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o QR Code na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um QR Code está visível para a câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o sinaleiro também indica essa condição na rampa. O operador deve inserir novamente o volume antes do portal de leitura.
Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o volume seja direcionado para o rejeito.
Perda de Tracking 
Ocorre quando o sorter perde a referência de rastreamento do volume entre o portal de leitura e o desviador de destino (ex.: falha de sensor, deslocamento físico do volume da posição esperada). O volume é direcionado à rampa de rejeito e o operador deve realizar a tratativa, reinduzindo o volume antes do portal de leitura quando aplicável.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 2296ae0391524364

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 5 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de barras presente na caixa ou quando não há etiqueta na caixa no caso do trabalho sem a IA. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta, deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o Código de barras na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando a IA estiver desligada e a câmera identificar a leitura de mais de um Código de barras que estejam dentro dos parâmetros utilizados na configuração da câmera. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura, ou reimprimir a etiqueta do volume.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o sinaleiro também indica essa condição na rampa. O operador deve inserir novamente o volume antes do portal de leitura para que ele possa ser finalizado.
Ocorrências
Ocorre quando um volume tem sua ocorrência (avaria, extravio, cancelamento) criada, fazendo com que o volume seja direcionado para o rejeito.
Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o PLC deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente para a rampa de rejeito. O operador deve então induzir novamente o volume antes do portal de leitura para que o processo seja restabelecido.

---
**Origem:** [I25.3513] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-Revisado.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 5a58605be74f852a

Todo rejeito do sorter será direcionado para uma rampa de rejeito, onde será realizado um ponto de auditagem dos volumes rejeitados.
Rejeitos por NoRead, sem integração, sem PTL e outros tipos de falhas, serão direcionados para essa rampa de rejeito, onde um ponto de auditagem será responsável por registrar o motivo do rejeito e garantir que o volume foi corretamente identificado.
Rejeitos por motivo de rampa cheia ou perda de tracking serão direcionados para a mesma rampa de rejeito, mas serão reinduzidos conforme a necessidade para garantir a continuidade do processo de separação e movimentação dos produtos.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 53a548e8a5f0f9a8

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
**Heading:** Rampa de Rejeito  
**Score:** — (nome-topico) | **ID:** 2f738821b1a7d734

Volumes com falha de leitura ou inconsistência são desviados automaticamente para rejeito nas situações:
NoRead, Sem Rota, Sem Mapa, MultiRead, Rampa Cheia, Cancelamento.
O operador corrige o problema e reenvia o volume.
Teremos uma impressora no rejeito, destinada à emissão de novas etiquetas com rota atualizada. Todas as reimpressões realizadas no rejeito serão registradas em log, com data e hora.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Recirculação de Volumes no Sorter  
**Score:** — (nome-topico) | **ID:** 8dd8411f6130ef0f

Nos casos em que a rampa de destino do volume no sorter esteja cheia, ocorra perda de tracking do volume, ou que ele não esteja integrado, o mesmo será direcionado para recirculação na esteira. Essa recirculação tem como objetivo realizar mais tentativas de desvio sem necessidade de intervenção manual.
A recirculação é controlada pelo sistema WCS. Caso o volume recircule três (3) vezes e a rampa de destino ainda permaneça cheia, o WCS instruirá o envio automático do volume para a rampa de rejeito.
A quantidade máxima de recirculações é parametrizável no sistema WCS, podendo ser ajustada de acordo com as definições operacionais. Dessa forma, o comportamento pode ser adaptado conforme as características e necessidades específicas da operação.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** a4cfc5bbc2b2106e

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de barras presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o Código de barras na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um Código de barras está visível e atinge os parametros configurados na câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos(Notas diferentes), e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para a recirculação, e o sinaleiro também indica essa condição na rampa piscando em amarelo.
Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o CLP deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente o volume é enviado para a recirculação.
Não integrado
Volumes que ainda não foram enviados via integração.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** cb58bcb4856a3970

Todos os volumes rejeitados pelo sorter serão direcionados para uma rampa de rejeito, que atuará como ponto de auditagem e tratativa dos volumes não processados corretamente.
Ao chegar na rampa de rejeito, o operador deverá consultar o motivo do rejeito e garantir que o volume seja corretamente identificado e tratado, conforme o procedimento operacional definido.
Os volumes rejeitados por rampa cheia, perda de tracking e não integrados serão recirculados automaticamente pelo sorter até atingirem o limite máximo de voltas configuradas no sistema WCS.
Caso o volume atinja a quantidade máxima de recirculações sem sucesso no desvio, ele será encaminhado automaticamente para a rampa de rejeito, encerrando o ciclo do volume no sistema.
A quantidade de recirculações permitidas é parametrizável no WCS, podendo ser ajustada conforme as definições e estratégias operacionais.

O WCS irá disponibilizar uma tela para identificação e tratativa dos rejeitos do sorter, onde o operador deve se orientar sobre o motivo do rejeito, para que o volume seja tratado e enviado para sua rampa de destino

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - ADITIVO - SHORTINDICATOR  - rev.2.docx`  
**Heading:** Exemplo Aplicado  
**Score:** — (semantico) | **ID:** fb9f9c09f7b9095a

Utilizando o mesmo cenário da seção 2 (2 volumes, 10 unidades do mesmo SKU cada), o comportamento esperado com a nova regra é:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Decremento do saldo de estoque  
**Score:** — (semantico) | **ID:** 9c8f78fc6b6cbea1

Após receber a confirmação do PLC sobre o desvio do volume para a rampa correta, o WCS executa a rotina de baixa de saldo na posição de origem desse item. Nesse processo, são atualizados os valores de peso líquido e quantidade de volumes tanto no palete quanto na posição.
Assim, sempre que um volume passar pelo portal de leitura do sorter, independentemente do tipo de peso, será realizada a baixa de uma unidade na quantidade de caixas do palete, enquanto o peso líquido será reduzido conforme o valor informado no cadastro do volume.
Exemplo de desconto de quantidade e peso:
Saldo em estoque
Volume desviado no sorter
Decremento de estoque
WCS fará o decremento do saldo de quantidade de caixas -1 e decremento do saldo de peso total – 12.1.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Classificação dos Rejeitos  
**Score:** — (semantico) | **ID:** b23c06030755cfff

Os rejeitos são classificados em duas categorias, definidas pela possibilidade de tratamento operacional:
Rejeito tratável: Volume que foi rejeitado por um motivo que pode ser corrigido pela operação sem necessidade de intervenção sistêmica profunda. Após a correção (ex: reimpressão de etiqueta, conferência manual), o volume pode ser reinduzido na esteira e seguir o fluxo normal do sorter.
Rejeito não tratável: Volume que foi rejeitado por um motivo que impede seu reaproveitamento na onda atual. O volume não pode ser reinduzido e será tratado fora do processo automatizado.
A distinção entre tratável e não tratável é importante porque determina o fluxo que a operação seguirá na estação de rejeito e se o volume tem chance de retornar ao processo ou não.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Cenários de Rejeito  
**Score:** — (semantico) | **ID:** 05493d1c8ef4d8ed

A tabela abaixo lista todos os cenários que resultam em rejeito de volume no sorter, classificados por tipo:
Recirculação antes do Rejeito
Antes de rejeitar um volume, o WCS aplica a lógica de recirculação. Quando o portal de leitura não consegue identificar o volume (NoRead) ou quando ocorre alguma falha pontual de leitura, o volume não é rejeitado imediatamente — ele é mantido no circuito do sorter e passa novamente pelo portal para uma nova tentativa de leitura.
Regras de recirculação:
O número máximo de tentativas de recirculação é parametrizável no WCS.
A cada passagem, o portal tenta ler todas as etiquetas do volume (material e expedição, quando aplicável).
Se em qualquer tentativa a leitura for bem-sucedida, o volume sai da recirculação e segue o fluxo normal de desvio.
Somente após o esgotamento de todas as tentativas configuradas, sem sucesso na leitura, o volume é definitivamente rejeitado e desviado para a rampa de rejeito.
A recirculação se aplica exclusivamente a cenários de falha de leitura (NoRead). Volumes rejeitados por outros motivos (duplicidade, excedente, shelf life etc.) são desviados imediatamente para o rejeito sem recirculação, pois nesses casos a leitura foi bem-sucedida, o problema é o conteúdo da informação lida, não a capacidade de leitura.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Estação de Rejeito no WCS  
**Score:** — (nome-topico) | **ID:** 1d19600a374bc215

O WCS disponibiliza uma funcionalidade dedicada ao tratamento de volumes rejeitados, chamada Estação de Rejeito. Nela, o operador pode consultar os volumes que foram rejeitados, identificar o motivo do rejeito e, quando aplicável, reimprimir a etiqueta de expedição para reinduzir o volume no sorter.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Motivo de Rejeito por Duplicidade  
**Score:** — (semantico) | **ID:** a522a6d39afe5917

O rejeito por duplicidade é um cenário gerado diretamente pelas funcionalidades de contingência de impressão e reimpressão de etiquetas. Quando uma etiqueta é reimpressa (seja por contingência, seja pela tela de Volumes PVAR, seja pela estação de rejeito), passam a existir duas etiquetas físicas com o mesmo identificador WCS. Se a etiqueta original não for descartada e ambas as caixas entrarem no sorter, o WCS identificará duplicidade.
Regra de detecção: Sempre que um volume com status "No sorter", "Na rampa" ou "Finalizado" for identificado novamente pelos portais de leitura do sorter, o WCS rejeita o volume imediatamente por duplicidade, sem recirculação.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 04eb10a9199dd3af

A rampa de rejeito recebe volumes que se enquadram em Oito situações distintas:
Sem leitura (NoRead): O portal de leitura não consegue identificar o código da caixa ou não há etiqueta presente. O volume é enviado para rejeito e deve ser corrigido e reinserido no sorter antes do portal de leitura ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Sem rota: A leitura é realizada, mas o WCS não encontra a rota do volume. O operador deve cadastrar a rota e vinculá-la ao mapa do sorter antes de reinserir o volume ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Sem mapa: A leitura é realizada e a rota existe no WCS, mas não há rampa vinculada no mapa do sorter. O operador deve vincular a rota à rampa correta e reinserir o volume ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
MultiRead: Mais de um QR code que atinge os parametros configurados na câmera está visível para a câmera no momento da leitura. O operador retira o código extra, corrige a caixa e reinseri antes do portal de leitura, ou levado manualmente o volume para a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Rampa cheia: Quando a rampa de destino está cheia, o sensor de acúmulo dispara e o volume é enviado ao rejeito. Essa situação também é sinalizada pelo sinaleiro. O volume é enviado para rejeito e deve ser reinserido no sorter antes do portal de leitura ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Cancelamento: Quando uma ordem de serviço é cancelada pelo WMS, o volume é enviado para rejeito. Deve ser tratado e não deve retornar ao sorter.
Perca de Tracking:Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o CLP deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente o volume é enviado para a rampa de rejeito e deve reinserido no sorter antes do portal de leitura ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Produto Incorreto / SKU Divergente: Ocorre quando a leitura do código do produto (SKU/código interno) no volume não corresponde ao item que o WCS esperava para associada à etiqueta do volume. A divergência pode ocorrer quando o portal não consegue ler corretamente o SKU do produto. Nesse caso, o operador deve fazer o processo manual de bipar ambos os códigos, caso esteja correto o WCS irá ignorar o double check no momento que a caixa for reinduzida ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da integração.
Alteração do Status para "Na Rampa":
Quando a caixa no rejeito for corrigida e lida corretamente, seu status será atualizado para "na rampa" e o operador será informado da rampa de destino.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Rechazo  
**Score:** — (semantico) | **ID:** 9e2a74bbf899c633

Todos los productos rechazados por el clasificador se dirigirán a una rampa de rechazo, donde se establecerá un punto de auditoría para verificar los volúmenes rechazados.
Los rechazos por errores de lectura, falta de integración, falta de PTL y otros tipos de fallas se dirigirán a esta rampa de rechazo, donde un punto de auditoría se encargará de registrar el motivo del rechazo y asegurar que el volumen se haya identificado correctamente.
Los rechazos por rampa llena o pérdida de seguimiento se dirigirán a la misma rampa de rechazo, pero se reintroducirán según sea necesario para garantizar la continuidad del proceso de separación y manipulación del producto.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Cubicaje de palés  
**Score:** — (semantico) | **ID:** ec0f3f536c5d531a

El operador deberá registrar previamente en el WCS el volumen (m³) y el peso (kg) máximos soportados por el palé, para que el WCS utilice esta información para realizar el cierre por volumen o peso del palé.
Se debe parametrizar un volumen y un peso de seguridad, de modo que cuando el palé alcance ese valor, se notifique al operador (mediante un led) que el palé ha llegado a su límite y debe cerrarse.
Por ejemplo, se ha configurado en el WCS que el operador debe cerrar el palé cuando alcance 1 m³ de su capacidad de carga. Cuando el palé alcance esta capacidad de 1 m³, el WCS solicitará el cierre del palé y no permitirá la asignación de volúmenes adicionales en este palé. El WCS iniciará el proceso de cierre automático del palé e informará al operador mediante el color del led de que el palé está cerrado.
El WCS calculará el volumen y el peso con la información recibida a través de la integración de las dimensiones y el peso de los volúmenes introducidos en el sorter.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU.docx`  
**Heading:** Cubicaje de palés  
**Score:** — (semantico) | **ID:** 20eb1893494ac855

El operador deberá registrar previamente en el WCS el volumen (m³) y el peso (kg) máximos soportados por el palé, para que el WCS utilice esta información para realizar el cierre por volumen o peso del palé.
Se debe parametrizar un volumen y un peso de seguridad, de modo que cuando el palé alcance ese valor, se notifique al operador (mediante un led) que el palé ha llegado a su límite y debe cerrarse.
Por ejemplo, se ha configurado en el WCS que el operador debe cerrar el palé cuando alcance 1 m³ de su capacidad de carga. Cuando el palé alcance esta capacidad de 1 m³, el WCS solicitará el cierre del palé y no permitirá la asignación de volúmenes adicionales en este palé. El WCS iniciará el proceso de cierre automático del palé e informará al operador mediante el color del led de que el palé está cerrado.
El WCS calculará el volumen y el peso con la información recibida a través de la integración de las dimensiones y el peso de los volúmenes introducidos en el sorter.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 3df7af76dd500e39

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
Sem Leitura (NoRead): Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de barras presente na caixa ou quando não há etiqueta na caixa no caso do trabalho sem a IA. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta, deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota: Ocorre quando a câmera consegue ler o Código de barras na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead: Esse caso ocorre quando a IA estiver desligada e a câmera identificar a leitura de mais de um Código de barras que estejam dentro dos parâmetros utilizados na configuração da câmera. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura, ou reimprimir a etiqueta do volume.
Rampa Cheia: Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o sinaleiro também indica essa condição na rampa. O operador deve inserir novamente o volume antes do portal de leitura para que ele possa ser finalizado.
Ocorrências: Ocorre quando um volume tem sua ocorrência (avaria, extravio, cancelamento) criada, fazendo com que o volume seja direcionado para o rejeito.
Perca de Tracking: Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o PLC deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente para a rampa de rejeito. O operador deve então induzir novamente o volume antes do portal de leitura para que o processo seja restabelecido.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** f9a1d1c0ec716ce7

Todo rejeito do sorter será direcionado para uma rampa de rejeito, onde será realizado um ponto de auditagem dos volumes rejeitados.
Rejeitos por NoRead, sem integração, sem PTL e outros tipos de falhas, serão direcionados para essa rampa de rejeito, onde um ponto de auditagem será responsável por registrar o motivo do rejeito e garantir que o volume foi corretamente identificado.
Rejeitos por motivo de rampa cheia ou perda de tracking serão direcionados para a mesma rampa de rejeito, mas serão reinduzidos conforme a necessidade para garantir a continuidade do processo de separação e movimentação dos produtos.

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Heading:** Contingência do Sorter (IA)  
**Score:** — (nome-topico) | **ID:** 7e1215b82ef06aa9

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá disponibilizar a tela para caso se faça necessária.

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 82e714938b100e7f

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
Sem Leitura (NoRead): Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de barras presente na caixa ou quando não há etiqueta na caixa no caso do trabalho sem a IA. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta, deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota: Ocorre quando a câmera consegue ler o Código de barras na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead: Esse caso ocorre quando a IA estiver desligada e a câmera identificar a leitura de mais de um Código de barras que estejam dentro dos parâmetros utilizados na configuração da câmera. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura, ou reimprimir a etiqueta do volume.
Rampa Cheia: Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o sinaleiro também indica essa condição na rampa. O operador deve inserir novamente o volume antes do portal de leitura para que ele possa ser finalizado.
Ocorrências: Ocorre quando um volume tem sua ocorrência (avaria, extravio, cancelamento) criada, fazendo com que o volume seja direcionado para o rejeito.
Perca de Tracking: Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o PLC deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente para a rampa de rejeito. O operador deve então induzir novamente o volume antes do portal de leitura para que o processo seja restabelecido.

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 8af02bb0a0a101ef

Todo rejeito do sorter será direcionado para uma rampa de rejeito, onde será realizado um ponto de auditagem dos volumes rejeitados, essa auditagem será feita por um computador (fornecido pelo cliente) na saída da rampa de rejeito.
Rejeitos por NoRead, sem integração, sem PTL e outros tipos de falhas, serão direcionados para essa rampa de rejeito, onde um ponto de auditagem será responsável por registrar o motivo do rejeito e garantir que o volume foi corretamente identificado.
Rejeitos por motivo de rampa cheia ou perda de tracking serão direcionados para a mesma rampa de rejeito, mas serão reinduzidos conforme a necessidade para garantir a continuidade do processo de separação e movimentação dos produtos.

---
**Origem:** [I25.163] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Heading:** Contingência do Sorter (IA)  
**Score:** — (nome-topico) | **ID:** d9f6f1dd0048eb8d

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá disponibilizar a tela para caso se faça necessária.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Tratamento de Falha de Identificação  
**Score:** — (semantico) | **ID:** 60b60cec848edbb8

Volumes que apresentarem falha de leitura (No-Read) ou etiquetas danificadas no scanner do Sorter serão desviados obrigatoriamente para a Rampa de Rejeito. O ciclo de integração INT-10 não será disparado para esses volumes até que sejam identificados manualmente e reinduzidos.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Tratativa de Rejeito (No-Read e Cancelados)  
**Score:** — (nome-topico) | **ID:** d1c913489679bae2

A última saída do Sorter é, por segurança, a rampa de Rejeito. Para lá são desviados volumes que:
O scanner não conseguiu ler (No-Read).
Perderam o tracking (deslizaram na correia).
Pertencem a pedidos Cancelados (que tiveram a luz apagada no picking ou cancelados durante o trajeto).
Não possuem rota válida cadastrada.
Operação: O operador do rejeito deve analisar a caixa, identificar o motivo na tela e dar o destino correto (Devolver ao Estoque, Reinduzir ou Desmontar).

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 81be37a76eafaa88

A rampa de rejeito no final do Sorter é responsável por receber em uma das seguintes 6 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do QR Code presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de re jeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações do transporte), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o QR Code na caixa e o CLP envia a informação recebida ao WCS. No entanto, o WCS não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um QR Code está visível para a câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o sinaleiro também indica essa condição na rampa. O operador deve inserir novamente o volume antes do portal de leitura quando a rampa estiver disponível.
Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o volume seja direcionado para o rejeito.
Perda de Tracking
Ocorre quando, após a leitura no portal, o sistema perde a identificação do volume dentro do Sorter — ou seja, o CLP deixa de ter a referência da posição física do volume na linha. Essa falha geralmente acontece por enroscos mecânicos ou quando o volume não atende às especificações de dimensão e peso definidas para a operação. Sem a referência posicional, o Sorter não consegue determinar o destino correto e direciona o volume para a rampa de rejeito. O operador deve induzir novamente o volume antes do portal de leitura para restabelecer o processo.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 8e8ca3b5d66d969a

A rampa de rejeito recebe volumes que se enquadram em sete situações distintas:
Sem leitura (NoRead) — [Rejeito Direto]: O portal de leitura não consegue identificar o código da caixa ou não há etiqueta presente. O volume é enviado diretamente para a rampa de rejeito e deve ser corrigido e reinserido no sorter antes do portal de leitura ou levado manualmente à rampa de destino para leitura no scanner fixo.
Sem rota — [Rejeito Direto]: A leitura é realizada, mas o WCS não encontra a rota do volume. O sistema direciona o volume para rejeito imediato. O operador deve cadastrar a rota e vinculá-la ao mapa do sorter antes de reinserir o volume ou realizar o processo manual de entrega no destino.
Sem mapa — [Rejeito Direto]: A leitura é realizada e a rota existe no WCS, mas não há rampa vinculada no mapa do sorter. O volume é enviado para o rejeito direto por falta de destino físico configurado. O operador deve vincular a rota à rampa correta e reinserir o volume ou seguir com o fluxo manual.
MultiRead — [Rejeito Direto]: Mais de um QR code que atinge os parâmetros configurados na câmera está visível no momento da leitura. O volume é enviado para o rejeito direto para evitar erros de desvio. O operador retira o código extra, corrige a caixa e a reinseri antes do portal de leitura.
Rampa cheia — [Recircula]: Quando a rampa de destino está cheia, o sensor de acúmulo dispara. Diferente dos erros de leitura, este volume permanece no sistema e recircula no sorter, aguardando a liberação de espaço na rampa. Caso a condição de cheia persista após as tentativas sistêmicas, o volume poderá ser direcionado ao rejeito para desobstrução do fluxo.
Cancelamento — [Rejeito Direto]: Quando uma ordem de serviço é cancelada pelo WMS, o volume é identificado e enviado para o rejeito direto. Este volume deve ser tratado operacionalmente e não deve retornar ao sorter em nenhuma hipótese.
Perda de Tracking — [Recircula]: Ocorre quando o CLP deixa de ter a referência da posição física do volume no Sorter (por enroscos ou fora de especificação). O sistema prioriza a recirculação para tentar recuperar a lógica de rastreio. Se a recuperação falhar, o volume é enviado à rampa de rejeito para ser reinserido antes do portal de leitura, gerando um novo ID de tracking.
Alteração do Status para "Na Rampa":
Quando a caixa no rejeito (ou vinda de uma recirculação) for corrigida e lida corretamente no destino final, seu status será atualizado para "Na Rampa" e o operador será informado da conclusão do processo.

---
**Origem:** [I17.112] ADITIVO — `I17.112 - ES - Motivos Rejeito e Relatório Consumo de Caixas - Rev 2.docx`  
**Heading:** Melhoria na Tela de Rejeito  
**Score:** — (semantico) | **ID:** b5c33749bb04a82b

O objetivo desta melhoria é refinar a inteligência da tela de rejeito, permitindo ao operador distinguir falhas de hardware (leitura) de falhas operacionais (etiqueta errada), além de formalizar as travas de segurança específicas para pedidos do mercado Internacional.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 09da1b491b7ed9a0

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
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Lógica de Status de Volumes  
**Score:** — (semantico) | **ID:** 807bcc8bb376d32a

Quando a quantidade física conferida for menor que a quantidade sistêmica vinculada ao palete master, os volumes ausentes terão seu status alterado para Pendente, permitindo tratativa posterior pela operação.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 5aa40a370e799304

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
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX 2025.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 094fa3ec602bb790

A primeira rampa é a de rejeito no Sorter e é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de Barras presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o Código de Barras na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um Código de Barras está visível para a câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o volume seja direcionado para o rejeito.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para a recirculação, e o sinaleiro também indica essa condição na rampa. Após o volume recircular o número de vezes definido pela operação a caixa seguirá para rejeito e o operador deve inserir novamente o volume antes do portal de leitura.
Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o PLC deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o para a recirculação. Após o volume recircular o número de vezes definido pela operação a caixa seguirá
dimensões dos produtos e nas capacidades das embalagens, otimizando o espaço utilizado e garantindo a eficiência no processo de separação e expedição.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX 2025.docx`  
**Heading:** Recirculação  
**Score:** — (nome-topico) | **ID:** 295ca064f3065725

O processo de recirculação será utilizado em cenários de rampa cheia, por perca de tracking ou quando a posição PTL estiver fechada. A indicação de rampa cheia será sinalizada pelo sinaleiro correspondente. A quantidade máxima de recirculação por volume será parametrizável dentro do WCS, garantindo o controle e a eficiência do fluxo de volumes no sistema.

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** c4fc316d52a7491c

Ao passar pelo portal de leitura, em casos de não leitura da informação de EAN e/ou Lote, o volume deve ser designado a rampa de rejeito para tratativa.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 9cf533fbb4ce6536

Para a estação de rejeito do sorter, 01(uma) estação de trabalho (Responsabilidade do Cliente) será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Terminal de rejeito  
**Score:** — (nome-topico) | **ID:** 6361e341e2403f9f

Atualmente, cliente não trata volumes em tela de rejeito, pois o volume que segue para rejeito é tratado individualmente direto no sistema interno.
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Terminal de rejeito  
**Score:** — (nome-topico) | **ID:** e0b22361ac386bd0

Atualmente, cliente não trata volumes em tela de rejeito, pois o volume que segue para rejeito é tratado individualmente direto no sistema interno.
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** 8b9cbd4d0d5ae4be

A auditoria será realizada na mesma saída que será os itens de rejeito, quando a aferição de peso/cubometro não coincidir com o pedido, o volume deverá ser desviado para essa saída, onde será realizada a auditoria do volume.
Na estação de rejeito, operador ao realizar a leitura do volume, sistema mostrará o motivo do rejeito, se para fazer a auditoria ou rejeito por falha na leitura.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Conferência / Auditoria / Rejeito  
**Score:** — (semantico) | **ID:** 9385fc6098b62192

A auditoria será realizada na mesma saída que será enviado os itens de rejeito, quando a aferição de peso não coincidir com o pedido, o volume deverá ser desviado para essa saída, onde será realizada a auditoria do volume na tela de conferência para rejeito.
Na estação de rejeito, operador ao realizar a leitura do volume, sistema mostrará o motivo do rejeito, se para fazer a auditoria ou rejeito por falha na leitura.
Operador terá a opção de aprovar aquele pedido manualmente, caso ele realize essa aprovação manual, esse registro deverá ficar armazenado com as informações de usuário e motivo da aprovação, para posterior consulta de relatório.
Operador poderá aprovar múltiplos pedidos nessa tela.
Informações da tela de rejeito: Volume, data integração, passagem no sorter, desvio sorter, peso, peso mínimo esperado, peso máximo esperado, caixa e situação, caixa esperada, caixa aferida, quantidade e peso sku’s, motivo do rejeito, tolerância utilizada no rejeito e aprovação de múltiplos pedidos.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE(RASC) - FASE.1 VER.1.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** 95f175580f84e776

A auditoria será realizada na última saída do sorter a mesma saída que será os itens de rejeito, quando existir short picking e/ou o peso não coincidir com o pedido, a mesma deverá ser direcionada para a saída de rejeito, onde será realizada a auditoria do volume.
Nessa estação, será disponibilizado uma tela para distinguir o pedido/volume, que irá mostrar o motivo do rejeito, se para fazer a auditoria ou rejeito.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** f00dd59dabcd2721

Para a região do rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (Volume não integrado etc.)

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Recirculação  
**Score:** — (nome-topico) | **ID:** 4107324aeefc605b

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito. Essa quantidade de recirculação é parametrizável no sistema Velox.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** b75fec2da4bb4ef2

Seguirão para rejeito, os volumes com etiqueta rasurada (ilegível pelo portal de leitura), volumes sem etiqueta, rota não mapeada e volumes não integrados no sistema.
Todos os volumes que não obtiverem as informações de peso e/ou cubagem deverão ser direcionados ao rejeito, para que o operador verifique o motivo e induza novamente o volume na esteira, para que essas informações de peso e dimensão sejam coletadas.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** c39efcf78ea8ed81

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 8db02c497c37934b

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes. (Responsabilidade EMIS).
Operador verifica motivo de rejeito no sistema VELOX.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 59db3d671c396530

Para a região do rejeito do sorter, 01 (um) Desktop + 1 (um) scanner + 01 (uma) impressora de etiquetas, que auxiliará o Operador para verificação dos motivos de rejeito, bem como tratativas dos volumes, como reimpressão de etiquetas quando necessário. (Responsabilidade EMIS).
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 78e88b1db27c50e3

Para a estação de rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 0d5627ed4a32d5a9

Para a estação de rejeito do sorter, teremos 01 (uma) estação de trabalho para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, volume não encontrado etc.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** dd54c57421a208dc

Para a rampa de rejeito do sorter, teremos 01 (uma) estação de trabalho para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, volume não encontrado, NoRead etc.)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 854fe3fb8cd4c2e1

Para a rampa de rejeito do sorter, teremos 01 (uma) estação de trabalho para verificação dos motivos de rejeito, bem como tratativas dos volumes full case que não passam pela esteira e volumes (reimpressão de etiquetas, volume não encontrado, NoRead etc.)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** b35987c45153c3e0

Para a rampa de rejeito do sorter, teremos 01 (uma) estação de trabalho para verificação dos motivos de rejeito, bem como tratativas dos volumes full case que não passam pela esteira e volumes (reimpressão de etiquetas, volume não encontrado, NoRead etc.)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 7f750b2d413e46dc

Para a rampa de rejeito do sorter, teremos 01 (uma) estação de trabalho para verificação dos motivos de rejeito, bem como tratativas dos volumes full case que não passam pela esteira e volumes (reimpressão de etiquetas, volume não encontrado, NoRead etc.)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Tela de Rejeito e Conferência  
**Score:** — (semantico) | **ID:** 1209b2b5219fd46e

A tela de rejeito do sistema Velox deve descrever e identificar o real motivo do volume ter sido induzido para a rampa de rejeito e fracionados (Conferência).
Para cada tipo de erro teríamos um código específico (em vermelho).
Por exemplo:

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 2308988cb1e005f4

Para a rampa de rejeito do sorter, teremos 01 (uma) estação de trabalho para verificação dos motivos de rejeito, bem como tratativas dos volumes full case que não passam pela esteira e volumes (reimpressão de etiquetas, volume não encontrado, NoRead etc.)

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Tela de Rejeito e Conferência  
**Score:** — (semantico) | **ID:** 0a2834057d74a4a8

A tela de rejeito do sistema Velox deve descrever e identificar o real motivo do volume ter sido induzido para a rampa de rejeito e fracionados (Conferência).
Para cada tipo de erro teríamos um código específico (em vermelho).
Por exemplo:

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF24 – Gestão de pallets rejeitados  
**Score:** — (semantico) | **ID:** b1409ccf7ee6cf40

O WCS Velox deve disponibilizar tela para consulta dos motivos de rejeição de um pallet, para que o operador possa consultar o pallet rejeitado com o motivo do rejeito e corrigir essa falha.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF32.5 – Motivos de rejeição  
**Score:** — (semantico) | **ID:** 33ec0a2c07fec895

O WCS Velox deve permitir o cadastro de motivos de rejeição

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF39 – Estatísticas de rejeitos  
**Score:** — (semantico) | **ID:** 68f59519b8698c1c

O WCS Velox deve permitir a consulta de estatística de rejeitos exibindo a quantidade de pallets rejeitados em cada uma das mesas de acordo com o motivo da rejeição.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF44 – Relatório de rejeito por portal  
**Score:** — (semantico) | **ID:** fff69f98a4fd2dfc

O WCS Velox deve fornecer um relatório em tela para que operador consiga validar a quantidade de rejeito por portal

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de motivos de rejeição  
**Score:** — (semantico) | **ID:** 45ab282e003c4a6a

A partir dessa funcionalidade é possível visualizar e editar valores para os motivos de rejeição cadastrados no sistema.
É possível editar os valores já cadastrados na própria lista. Selecionando a opção “Salvar” o sistema registra as alterações realizadas.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Estatística de rejeitos de pallets  
**Score:** — (semantico) | **ID:** 851a051a314f5966

Através dessa funcionalidade é possível verificar quantos pallets foram rejeitados em cada mesa, para cada motivo de rejeição.
O sistema WCS Velox deve possibilitar refinar a busca para registros em um determinado período, como mostrado na imagem acima, caso não sejam especificadas datas de início e fim, todos os registros encontrados serão considerados.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF24 – Gestão de pallets rejeitados  
**Score:** — (semantico) | **ID:** bfe20b19db2ff475

O WCS Velox deve disponibilizar tela para consulta dos motivos de rejeição de um pallet, para que o operador possa consultar o pallet rejeitado com o motivo do rejeito e corrigir essa falha.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF32.5 – Motivos de rejeição  
**Score:** — (semantico) | **ID:** e0501bfa018e6bbc

O WCS Velox deve permitir o cadastro de motivos de rejeição

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF39 – Estatísticas de rejeitos  
**Score:** — (semantico) | **ID:** d142c171e0c689b8

O WCS Velox deve permitir a consulta de estatística de rejeitos exibindo a quantidade de pallets rejeitados em cada uma das mesas de acordo com o motivo da rejeição.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF44 – Relatório de rejeito por portal  
**Score:** — (semantico) | **ID:** a0b1505ce6e3b61d

O WCS Velox deve fornecer um relatório em tela para que operador consiga validar a quantidade de rejeito por portal

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de motivos de rejeição  
**Score:** — (semantico) | **ID:** d195b6bc86730634

A partir dessa funcionalidade é possível visualizar e editar valores para os motivos de rejeição cadastrados no sistema.
É possível editar os valores já cadastrados na própria lista. Selecionando a opção “Salvar” o sistema registra as alterações realizadas.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Estatística de rejeitos de pallets  
**Score:** — (semantico) | **ID:** e3c651d32fed45da

Através dessa funcionalidade é possível verificar quantos pallets foram rejeitados em cada mesa, para cada motivo de rejeição.
O sistema WCS Velox deve possibilitar refinar a busca para registros em um determinado período, como mostrado na imagem acima, caso não sejam especificadas datas de início e fim, todos os registros encontrados serão considerados.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 3f6cfd16f6c24527

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do QR Code presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de re jeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o QR Code na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um QR Code está visível para a câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o sinaleiro também indica essa condição na rampa. O operador deve inserir novamente o volume antes do portal de leitura.
Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o volume seja direcionado para o rejeito.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 1eb940091b1ec59e

No caso dos sorters em questão, o rejeito das caixas ocorre apenas em casos de NoRead ou quando a caixa não estiver na onda.
Quando ocorrer um rejeito, a caixa será direcionada automaticamente para uma gaiola no final da linha do térreo. É importante ressaltar que as caixas do segundo nível também serão direcionadas para essa mesma gaiola.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** c8b6bce6044a4d98

No caso dos sorters em questão, o rejeito das caixas ocorre apenas em casos de NoRead, quando a caixa não estiver na onda ou quando o sensor de gaiola cheia for ativado.
Quando ocorrer um rejeito, a caixa será direcionada automaticamente para uma gaiola no final da linha do térreo. É importante ressaltar que as caixas do segundo nível também serão direcionadas para essa mesma gaiola.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 862eb16fdc30e2de

No caso dos sorters em questão, o rejeito das caixas ocorre apenas em casos de NoRead, quando a caixa não estiver na onda ou quando o sensor de gaiola cheia for ativado.
Quando ocorrer um rejeito, a caixa será direcionada automaticamente para uma gaiola no final da linha do térreo. É importante ressaltar que as caixas do segundo nível também serão direcionadas para essa mesma gaiola.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** ad80efb4cdc3e58d

No caso dos sorters em questão, o rejeito das caixas ocorre apenas em casos de NoRead, quando a caixa não estiver na onda ou quando o sensor de gaiola cheia for ativado.
Quando ocorrer um rejeito, a caixa será direcionada automaticamente para uma gaiola no final da linha do térreo. É importante ressaltar que as caixas do segundo nível também serão direcionadas para essa mesma gaiola.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 099b6b51ef5930bc

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrados etc.)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 1[1].docx`  
**Heading:** Recirculação  
**Score:** — (nome-topico) | **ID:** e56d06a7eda89ee9

O processo de recirculação será utilizado para caso haja alguma caixa não esteja integrada no sistema. Assim, a caixa voltará a fase inicial do sorter para que possa ser integrada no sistema.

---
**Origem:** [I23.1733] 2023 — `I23.1733  -  PROJETO FOX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev 8.docx`  
**Heading:** Recirculação  
**Score:** — (nome-topico) | **ID:** c54f74c2eee9075a

O processo de recirculação será utilizado para caso haja um cenário de rampa cheia ou em casos que a posição PTL esteja fechada.
Em casos de rampa cheia, será indicado pelo sinaleiro da rampa.
A quantidade de recirculação por volume, será parametrizável dentro do MFC.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Recirculação de Volumes no Sorter  
**Score:** — (nome-topico) | **ID:** bf528d040117dcbd

Nos casos em que a rampa de destino do volume no sorter esteja cheia, ou ocorra perda de tracking do volume, o mesmo será direcionado para recirculação na esteira. Essa recirculação tem como objetivo permitir tempo hábil para que os operadores realizem a liberação da rampa originalmente destinada ao desvio do volume. Sem necessidade de reindução do volume.
A recirculação é controlada pelo sistema WCS. Caso o volume recircule três (3) vezes e a rampa de destino ainda permaneça cheia, o WCS instruirá o envio automático do volume para a rampa de rejeito.
A quantidade máxima de recirculações é parametrizável no sistema WCS, podendo ser ajustada de acordo com as definições operacionais da Britânia. Dessa forma, o comportamento pode ser adaptado conforme as características e necessidades específicas da operação.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** cf42bacae13b1fd4

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
-Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de barras presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o Código de barras na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um Código de barras está visível e atinge os parametros configurados na câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para a recirculação, e o sinaleiro também indica essa condição na rampa.
Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o CLP deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente para a rampa de rejeito. O operador deve então induzir novamente o volume antes do portal de leitura para que o processo seja restabelecido.
Produto Incorreto / SKU Divergente
Ocorre quando a leitura do código do produto (SKU) no volume não corresponde ao item que o WCS esperava para o pedido associado à etiquetaOp. A divergência pode ocorrer quando o portal não consegue ler corretamente o SKU do produto. Nesse caso, o operador deve fazer o processo manual de bipar ambos os códigos, caso esteja correto o WCS irá ignorar o double check no momento que a caixa for reinduzida.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1 - Gu.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** f1105438c6f384a1

Todos os volumes rejeitados pelo sorter serão direcionados para uma rampa de rejeito, que atuará como ponto de auditagem e tratativa dos volumes não processados corretamente.
Ao chegar na rampa de rejeito, o operador deverá registrar o motivo do rejeito e garantir que o volume seja corretamente identificado e tratado, conforme o procedimento operacional definido.
Os volumes rejeitados por rampa cheia ou perda de tracking serão recirculados automaticamente pelo sorter até atingirem o limite máximo de voltas configuradas no sistema WCS.
Caso o volume atinja a quantidade máxima de recirculações sem sucesso no desvio, ele será encaminhado automaticamente para a rampa de rejeito, encerrando o ciclo do volume no sistema.
A quantidade de recirculações permitidas é parametrizável no WCS, podendo ser ajustada conforme as definições e estratégias operacionais da Britânia.

O WCS irá disponibilizar uma tela para identificação e tratativa dos rejeitos do sorter, onde o operador deve se orientar sobre o motivo do rejeito, para que o volume seja tratado e enviado para sua rampa de destino

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Recirculação de Volumes no Sorter  
**Score:** — (nome-topico) | **ID:** a21273126285898d

Nos casos em que a rampa de destino do volume no sorter esteja cheia, ou ocorra perda de tracking do volume, o mesmo será direcionado para recirculação na esteira. Essa recirculação tem como objetivo permitir tempo hábil para que os operadores realizem a liberação da rampa originalmente destinada ao desvio do volume. Sem necessidade de reindução do volume.
A recirculação é controlada pelo sistema WCS. Caso o volume recircule três (3) vezes e a rampa de destino ainda permaneça cheia, o WCS instruirá o envio automático do volume para a rampa de rejeito.
A quantidade máxima de recirculações é parametrizável no sistema WCS, podendo ser ajustada de acordo com as definições operacionais da Britânia. Dessa forma, o comportamento pode ser adaptado conforme as características e necessidades específicas da operação.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 56015c6b91dad7f0

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 5 situações:
-Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de barras presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o Código de barras na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um Código de barras está visível e atinge os parametros configurados na câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para a recirculação, e o sinaleiro também indica essa condição na rampa.
Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o CLP deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente para a rampa de rejeito. O operador deve então induzir novamente o volume antes do portal de leitura para que o processo seja restabelecido.

---
**Origem:** [I23.3503] 2023 — `I23.3503- ESPECIFICACAO DE SOFTWARE - PROJETO Eletro REV .1.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 3ebe3593c0987ccc

Todos os volumes rejeitados pelo sorter serão direcionados para uma rampa de rejeito, que atuará como ponto de auditagem e tratativa dos volumes não processados corretamente.
Ao chegar na rampa de rejeito, o operador deverá registrar o motivo do rejeito e garantir que o volume seja corretamente identificado e tratado, conforme o procedimento operacional definido.
Os volumes rejeitados por rampa cheia ou perda de tracking serão recirculados automaticamente pelo sorter até atingirem o limite máximo de voltas configuradas no sistema WCS.
Caso o volume atinja a quantidade máxima de recirculações sem sucesso no desvio, ele será encaminhado automaticamente para a rampa de rejeito, encerrando o ciclo do volume no sistema.
A quantidade de recirculações permitidas é parametrizável no WCS, podendo ser ajustada conforme as definições e estratégias operacionais da Britânia.

O WCS irá disponibilizar uma tela para identificação e tratativa dos rejeitos do sorter, onde o operador deve se orientar sobre o motivo do rejeito, para que o volume seja tratado e enviado para sua rampa de destino

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS 1.docx`  
**Heading:** Rejeito – Octopus SC  
**Score:** — (nome-topico) | **ID:** 3a5503b7a80381d1

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (conexão USB)
01 (um) Impressora de etiqueta
Abaixo segue a configuração mínima para o desktop para a estação de rejeito:
Equipamentos citados acima, responsabilidade cliente.

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS 1.docx`  
**Heading:** Rejeito – Octopus MS  
**Score:** — (nome-topico) | **ID:** c6e7eb799c134163

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (conexão USB)
01 (um) Impressora de etiqueta
Abaixo segue a configuração mínima para o desktop para a estação de rejeito:
Equipamentos citados acima, responsabilidade cliente.

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 588e3845510d92fe

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g (conexão USB)
Abaixo segue a configuração mínima para o desktop para a estação de rejeito:
Desktop e leitor de código de barras citado acima, responsabilidade cliente.

---
**Origem:** [I23.3801] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS SC REV.4.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** fbfa96101663391b

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de rejeito

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Recirculação  
**Score:** — (nome-topico) | **ID:** 852f90195ca3b336

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito. Essa quantidade de recirculação é parametrizável no sistema Velox, assim como a rampa de rejeito para os volumes recirculados, podendo ou não ser a mesma rampa de rejeito já definida para o sorter.
Em casos de restrição de fluxo, onde a rampa tiver 2 ou mais volumes seguidos direcionados sequencialmente, o segundo volume deve recircular para assim evitar o gargalo na rampa, evitando que a rampa fique cheia.
Essa quantidade de volumes sequenciais será parametrizável via PLC.
(Invent avaliar possibilidade)
Em casos de o carrier do sorter entrar em falha, o volume presente nesse carrier deve recircular.
(Invent avaliar possibilidade)

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 9532f5d99cc5d172

Seguirão para rejeito, os volumes com etiqueta rasurada (ilegível pelo portal de leitura), volumes sem etiqueta, volumes com múltiplas etiquetas de um mesmo tipo de código de barras (mais de um código de barras impossibilita que a automação envie todos os codigos de barra lidos), rota não mapeada e volumes com rotas/filial não mapeadas no sistema.
Os volumes que realizarem a recirculação no sorter e ultrapassar o valor estipulado de recirculação, serão direcionados ao rejeito.
No sistema Velox deverá ter uma tela onde o usuário pode determinar a rampa de rejeito por motivo de rejeito mapeado pelo sistema como por exemplo:

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produção x Rejeito  
**Score:** — (semantico) | **ID:** 2efce7ec514a2311

Pós Go Live.
Relatório deve mostrar as informações de volumes e quantidade de rejeito.
Campos:
Quantidade de volumes destinados ao rejeito;
Motivo de rejeito;
Porcentagem (calculada com a produtividade do dia).
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivo de rejeito;
Rampa.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** eb0409e36aff2ac4

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** cb3f7489eaf6d0c3

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Recirculação  
**Score:** — (nome-topico) | **ID:** 8742490df6c80acc

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular pela quantidade de vezes na esteira determinada pelo usuário (parametrizável no sistema Velox), e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito.

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 13b049ae5268026a

Seguirão para rejeito, os volumes com etiqueta rasurada (ilegível pelo portal de leitura), volumes sem etiqueta, rota não mapeada, volumes com mais de uma etiqueta.
Todos os volumes que não obtiverem as informações de peso e/ou cubagem deverão ser direcionados ao rejeito, para que o operador verifique o motivo e induza novamente o volume na esteira, para que essas informações de peso e dimensão sejam coletadas.

---
**Origem:** [I23.420] 2023 — `I23.420 - PROJETO BAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** d1d1c3a95204f2e8

Para a região do rejeito do sorter, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** b2212a3805b9b543

O volume será direcionado ao rejeito em casos em que não obtenha todas as informações de código de barras, peso e dimensão (altura, largura e comprimento), citadas nos itens anteriores. (4.2 – 4.3 – 4.4).

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Trata rejeito  
**Score:** — (nome-topico) | **ID:** f7a609c7eb3dd94c

Em casos que o volume seguir para rejeito devido à falta de alguma informação o mesmo deve ser induzido novamente para uma nova tentativa de colher as informações necessárias.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 667662b82e222733

O volume será direcionado ao rejeito em casos em que a informação no campo “valida” seja false e/ou a informação no campo “destino” seja de um destino não mapeado/cadastrado no Velox.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Trata rejeito  
**Score:** — (nome-topico) | **ID:** 03ebf70f03ab93a1

Em casos que o volume seguir para rejeito devido não ter sido validado pelo sistema do cliente ou destino não mapeado/cadastrado no Velox.
Operador deverá validar o motivo de o sistema não ter validado o volume, realizar as devidas tratativas e induzir novamente o volume.
Operador deverá validar no Velox o mapa cadastrado e ativo no momento, e ajustar para que o destino do volume esteja mapeado nas rampas e no Velox, com isso operador poderá induzir novamente o volume no Slim Sorter

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 1d0b2944b8685665

Exibir funcionalidade no monitor que apresente os rejeitos e erros referente a onda e/ou transportes/remessas.
SKU, lote, quantidades, motivo do rejeito
Visão detalhada para todos os tópicos da separação (Quantidade/% de rejeito por produto, lote.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 0ca5e6cbd8e6b4cb

Para a estação de rejeito do sorter, 01(uma) estação de trabalho (Responsabilidade do Cliente) será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes.

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** f14b353c0fd8c166

Para a estação de rejeito no sorter, 1 uma estação de trabalho será necessária para verificação dos motivos de rejeito no sorter, bem como as tratativas dessas caixas.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Rejeito no Sorter  
**Score:** — (nome-topico) | **ID:** f82274cd26c016e0

Para a estação de rejeito no Sorter, 1(uma) estação de trabalho, que será de responsabilidade da Fagron, será necessária para verificação dos motivos de rejeito, bem como tratativa dos volumes.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** ae1268d361ffb163

Para a região do rejeito, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrado etc.)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** a54edbad83b5a359

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de rejeito

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 8ee5b786ec0b9552

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de rejeito

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 9faee8e64cddd55b

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de rejeito

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** Rejeito no Sorter  
**Score:** — (nome-topico) | **ID:** 6259ac2cf348e7b1

O tratamento de rejeito no Sorter ocorrerá ao final do transportador, logo após as estações de trabalho. A responsabilidade por essa verificação será da ANDREANI.
O processo de rejeição será realizado para identificar e corrigir os seguintes motivos de rejeito:
Noread: Produto não reconhecido pelo sistema.
Não Integrado: Falta de integração com o sistema de gestão (WMS/MFC).
Sem Rota Mapeada: Ausência de rota definida para o transporte do produto.
Sem Mapa Definido: Falta de um mapa de sorting configurado para o item.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO -_REV1.docx`  
**Heading:** Noread nas linhas expressas  
**Score:** — (nome-topico) | **ID:** 23d19a0a878cbe29

Todo volume que ocorrer um problema de leitura (noread) nas trasferências que realizam o desvio para o alto, médio e baixo giro o volume deve ser direcionado para a respectiva linha de coleta.
Neste caso, pelo sistema não saber qual volume esta sendo transferido no exato momento, entende-se pela operação do time Andreani que é necessario o WCS exigir que este volume passe por aquela linha de separação para garantir que o volume passou em todos os postos necessarios.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 90fbb6c33807785d

Para a rampa de rejeito do sorter, teremos 01 (uma) estação de trabalho para verificação dos motivos de rejeito, bem como tratativas dos volumes full case que não passam pela esteira e volumes (reimpressão de etiquetas, volume não encontrado, NoRead etc.)

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** d5e819997051f1fe

Para a rampa de rejeito do sorter, teremos 01 (uma) estação de trabalho para verificação dos motivos de rejeito, bem como tratativas dos volumes full case que não passam pela esteira e volumes (reimpressão de etiquetas, volume não encontrado, NoRead etc.)

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Tela de Rejeito e Conferência  
**Score:** — (semantico) | **ID:** e093ffeafe0f438c

A tela de rejeito do sistema Velox deve descrever e identificar o real motivo do volume ter sido induzido para a rampa de rejeito e fracionados (Conferência).
Para cada tipo de erro teríamos um código especifico (em vermelho).
Por exemplo:

---
**Origem:** [I24.173] 2024 — `I24.173 - PROJETO CANDELÁRIA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** b6c25023ffd023ac

A rampa de rejeito presente no final do Sorter irá receber os volumes que se classificam em 4 situações sendo as seguintes situações:
Sem leitura (NoRead) – Ocorre quando a câmera do portal de leitura não consegui fazer a leitura do código QR code presente na caixa ou não há etiqueta presente na caixa, com isso o CLP envia a informação de sem leitura para o Velox e ele direciona o volume para o rejeito, assim o volume será tratado por um operador e após a correção ou adição da etiqueta que deve conter as informações da rota o volume deve ser induzido novamente no Sorter antes do portal de leitura.
Sem rota – Ocorre quando a câmera consegue efetuar a leitura do código QR code e o CLP envia a informação recebida da câmera ao Velox, ele por sua vez procura o código em sua base de destino e não encontra, assim direcionando o volume para que o operador cadastre a rota no Velox e vincule a mesma no mapa do Sorter e o volume deve ser induzido novamente no Sorter antes do portal de leitura.
Sem mapa – Ocorre quando a câmera consegue efetuar a leitura do código QR code e o CLP envia a informação recebida da câmera ao Velox, ele por sua vez procura o código em sua base de destino e encontra a rota, porém, não há rampa vinculada no mapa do Sorter para esse destino, o operador deve fazer o vínculo da rota a rampa no mapa do sorter e o volume deve ser induzido novamente no Sorter antes do portal de leitura.
MultiRead – Ocorre quando mais de um código QR code está visível para câmera no momento da leitura, assim ela informa ao CLP que existe mais de um código lido e o CLP envia a mensagem de MultiRead para o Velox. Ao volume chegar no rejeito o operador deve retirar um dos códigos e inserir novamente o volume antes do portal de leitura.
Rampa cheia – Ocorre quando todo processo de leitura no portal e validações do Velox estão corretos, porém, quando o volume chega ao desviador da sua rampa de destino a mesma está cheia de caixas acionando o sensor de acúmulo, assim o volume é enviado para o rejeito, esse caso também é informado pelo sinaleiro.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** Rejeito no Sorter  
**Score:** — (nome-topico) | **ID:** dd18c6398c2d1457

O tratamento de rejeito no Sorter ocorrerá ao final do transportador, logo após as estações de trabalho. A responsabilidade por essa verificação será da ANDREANI.
O processo de rejeição será realizado para identificar e corrigir os seguintes motivos de rejeito:
Noread: Produto não reconhecido pelo sistema.
Não Integrado: Falta de integração com o sistema de gestão (WMS/MFC).
Sem Rota Mapeada: Ausência de rota definida para o transporte do produto.
Sem Mapa Definido: Falta de um mapa de sorting configurado para o item.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 1b4fdfe6695c163f

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
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 5c98b764fa246323

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
01 (um) Equipamento desktop
01 (um) Leitor de código de barras – Ex. Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de rejeito

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Entrada / Histórico de rejeito  
**Score:** — (semantico) | **ID:** bc9942cc1ee491be

Tela mostra detalhes do histórico de rejeitos.
Informações existentes:
- Data do rejeito;
- Código pallet;
- Portal;
- Motivo do rejeito.
Funcionalidades:
- Filtros;
- Exportar Excel.
Tela de referência:

---
**Origem:** [I25.132] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.docx`  
**Heading:** Contingência do Sorter (IA)  
**Score:** — (nome-topico) | **ID:** 887034edccafbf22

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade invent.

---
**Origem:** [I25.132] 2025 — `Opção 02 - Consinco - ESPECIFICACAO DE SOFTWARE docx.docx`  
**Heading:** Contingência do Sorter (IA)  
**Score:** — (nome-topico) | **ID:** a24bafaf5a9b2e09

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade invent.

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** dce65becbee97845

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 6 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do QR Code presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta (que deve conter as informações da rota), deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o QR Code na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando mais de um QR Code está visível para a câmera no momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o sinaleiro também indica essa condição. O operador deve inserir novamente o volume antes do portal de leitura.
Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o volume seja direcionado para o rejeito.

---
**Origem:** [I25.8049] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 1.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 1c6d15d979f9125d

Volumes que permanecerem não autorizados e ultrapassarem o número máximo de recirculações serão direcionados automaticamente para a rampa de rejeito.

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 87d8b6a860fc5f25

Todo rejeito do sorter será direcionado para uma única rampa de rejeito, onde será realizado um ponto de auditagem dos volumes rejeitados.
Rejeitos por NoRead, sem integração, sem PTL e outros tipos de falhas, serão direcionados para essa rampa de rejeito, onde um ponto de auditagem será responsável por registrar o motivo do rejeito e garantir que o volume foi corretamente identificado.
Rejeitos por motivo de rampa cheia ou perda de tracking serão direcionados para a mesma rampa de rejeito, mas serão reinduzidos conforme a necessidade para garantir a continuidade do processo de separação e movimentação dos produtos.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** f00dc28af03e4761

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 5 situações:
Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código de barras presente na caixa ou quando não há etiqueta na caixa no caso do trabalho sem a IA. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta, deve induzir novamente o volume no Sorter, antes do portal de leitura.
Sem Rota
Ocorre quando a câmera consegue ler o Código de barras na caixa e o CLP envia a informação recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter, antes do portal de leitura.
MultiRead
Esse caso ocorre quando a IA estiver desligada e a câmera identificar a leitura de mais de um Código de barras que estejam dentro dos parâmetros utilizados na configuração da câmera. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes do portal de leitura, ou reimprimir a etiqueta do volume.
Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o sinaleiro também indica essa condição na rampa. O operador deve inserir novamente o volume antes do portal de leitura para que ele possa ser finalizado.
Ocorrências
Ocorre quando um volume tem sua ocorrência (avaria, extravio, cancelamento) criada, fazendo com que o volume seja direcionado para o rejeito.
Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema, ou seja, o PLC deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não atende às especificações definidas para operação. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente para a rampa de rejeito. O operador deve então induzir novamente o volume antes do portal de leitura para que o processo seja restabelecido.

---
**Origem:** [I25.] 2025 — `2- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 2771e708e677493e

Todo rejeito do sorter será direcionado para uma rampa de rejeito, onde será realizado um ponto de auditagem dos volumes rejeitados.
Rejeitos por NoRead, sem integração, sem PTL e outros tipos de falhas, serão direcionados para essa rampa de rejeito, onde um ponto de auditagem será responsável por registrar o motivo do rejeito e garantir que o volume foi corretamente identificado.
Rejeitos por motivo de rampa cheia ou perda de tracking serão direcionados para a mesma rampa de rejeito, mas serão reinduzidos conforme a necessidade para garantir a continuidade do processo de separação e movimentação dos produtos.

---
**Origem:** [I25.] 2025 — `Opção 02 - sem contole de indução ESPECIFICACAO DE SOFTWARE - .docx`  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 4c298f4f5826a3fc

O rejeito do sorter será divido em duas rampas segregadas. Todo rejeito onde o volume for lido e WCS já tenha o diagnóstico, ou seja, rejeitos por NoRead, sem integração, sem PTL e entre outros serão destinados para a primeira rampa a direita e será utilizado uma das posições PTL dessa respectiva rampa para informar que o volume foi rejeitado.
Já os rejeitos por motivo de rampa cheia ou perda de tracking serão direcionados para a rampa final do sorter para serem reinduzidos novamente.
