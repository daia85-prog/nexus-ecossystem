# sorter-rejeito.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** cd277a377efdce84

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em
uma das seguintes 6 situações:
1. Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do QR Code
presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a
informação de "sem leitura" para o WCS, que direciona o volume para a rampa de re
jeito. O volume será tratado por um operador, que, após a correção ou a adição da
etiqueta (que deve conter as informações da rota), deve induzir novamente o volume
no Sorter, antes do portal de leitura.
2. Sem Rota
Ocorre quando a câmera consegue ler o QR Code na caixa e o CLP envia a informação
recebida ao Velox. No entanto, o Velox não encontra o código na sua base de dados
de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá
realizar a tratativa necessária. Se necessário, o volume será induzido novamente no
Sorter, antes do portal de leitura.
3. MultiRead
Esse caso ocorre quando mais de um QR Code está visível para a câmera no momento
da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a
mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o
operador deve remover um dos códigos e induzir novamente o volume antes do portal
de leitura.
4. Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o
volume chega ao desviador da rampa de destino, a rampa está cheia de caixas,
acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o
sinaleiro também indica essa condição na rampa. O operador deve inserir novamente
o volume antes do portal de leitura.
5. Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o
volume seja direcionado para o rejeito.
6. Perda de Tracking
Ocorre quando o sorter perde a referência de rastreamento do volume entre o portal de
leitura e o desviador de destino (ex.: falha de sensor, deslocamento físico do volume da
posição esperada). O volume é direcionado à rampa de rejeito e o operador deve
realizar a tratativa, reinduzindo o volume antes do portal de leitura quando aplicável.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Decremento do saldo de estoque  
**Score:** — (semantico) | **ID:** 00200659250dcf9d

Após receber a confirmação do PLC sobre o desvio do volume para a rampa correta, o WCS
executa a rotina de baixa de saldo na posição de origem desse item. Nesse processo, são
atualizados os valores de peso líquido e quantidade de volumes tanto no palete quanto na
posição.
Assim, sempre que um volume passar pelo portal de leitura do sorter, independentemente do
tipo de peso, será realizada a baixa de uma unidade na quantidade de caixas do palete,
enquanto o peso líquido será reduzido conforme o valor informado no cadastro do volume.
Exemplo de desconto de quantidade e peso:
•
Saldo em estoque

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Classificação dos Rejeitos  
**Score:** — (semantico) | **ID:** aaef086d810aefc0

Os rejeitos são classificados em duas categorias, definidas pela possibilidade de tratamento
operacional:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Rejeito tratável: Volume que foi rejeitado por um motivo que pode ser corrigido pela  
**Score:** — (semantico) | **ID:** ef159883c7c90d9b

operação sem necessidade de intervenção sistêmica profunda. Após a correção (ex:
reimpressão de etiqueta, conferência manual), o volume pode ser reinduzido na esteira e seguir
o fluxo normal do sorter.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Rejeito não tratável: Volume que foi rejeitado por um motivo que impede seu  
**Score:** — (semantico) | **ID:** 39d48b9b2da67522

reaproveitamento na onda atual. O volume não pode ser reinduzido e será tratado fora do
processo automatizado.
A distinção entre tratável e não tratável é importante porque determina o fluxo que a operação
seguirá na estação de rejeito e se o volume tem chance de retornar ao processo ou não.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Cenários de Rejeito  
**Score:** — (semantico) | **ID:** 937d4cdaa92cde7a

A tabela abaixo lista todos os cenários que resultam em rejeito de volume no sorter,
classificados por tipo:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** recirculação  
**Score:** — (nome-topico) | **ID:** e36a206152f9cb69

Tratável
O portal de leitura do sorter não conseguiu ler
nenhuma informação de etiqueta do volume após
todas as tentativas de recirculação.
Etiqueta danificada, mal posicionada,
ilegível ou ausente.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** confirmada  
**Score:** — (semantico) | **ID:** b2da27655a8a7c3a

Não
tratável
A caixa foi colocada no circuito do sorter (induzida
na esteira pelo operador), mas o processo de
separação na zona de picking não foi confirmado
pelo operador no PBL. O WCS não reconhece
aquele volume como coletado.
Operador induziu a caixa na esteira
antes de confirmar a separação no
display LED, ou confirmou a separação
com quantidade inferior a real.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 3. Se em qualquer tentativa a leitura for bem-sucedida, o volume sai da recirculação e  
**Score:** — (semantico) | **ID:** bfb6c3fca650ad61

segue o fluxo normal de desvio.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** 4. Somente após o esgotamento de todas as tentativas configuradas, sem sucesso na  
**Score:** — (semantico) | **ID:** 8b49aa94f398ecaf

leitura, o volume é definitivamente rejeitado e desviado para a rampa de rejeito.
A recirculação se aplica exclusivamente a cenários de falha de leitura (NoRead). Volumes
rejeitados por outros motivos (duplicidade, excedente, shelf life etc.) são desviados
imediatamente para o rejeito sem recirculação, pois nesses casos a leitura foi bem-sucedida, o
problema é o conteúdo da informação lida, não a capacidade de leitura.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Estação de Rejeito no WCS  
**Score:** — (nome-topico) | **ID:** 799c75836ddf14f3

O WCS disponibiliza uma funcionalidade dedicada ao tratamento de volumes rejeitados,
chamada Estação de Rejeito. Nela, o operador pode consultar os volumes que foram
rejeitados, identificar o motivo do rejeito e, quando aplicável, reimprimir a etiqueta de
expedição para reinduzir o volume no sorter.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Motivo de Rejeito por Duplicidade  
**Score:** — (semantico) | **ID:** c5c965b7d8f1ee7e

O rejeito por duplicidade é um cenário gerado diretamente pelas funcionalidades de
contingência de impressão e reimpressão de etiquetas. Quando uma etiqueta é reimpressa
(seja por contingência, seja pela tela de Volumes PVAR, seja pela estação de rejeito), passam a
existir duas etiquetas físicas com o mesmo identificador WCS. Se a etiqueta original não for
descartada e ambas as caixas entrarem no sorter, o WCS identificará duplicidade.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** e5932c1627fa5fb4

A rampa de rejeito recebe volumes que se enquadram em Oito situações distintas:
Sem leitura (NoRead): O portal de leitura não consegue identificar o código da caixa
ou não há etiqueta presente. O volume é enviado para rejeito e deve ser corrigido e
reinserido no sorter antes do portal de leitura ou levado manualmente a rampa de
destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da
integração.
Sem rota: A leitura é realizada, mas o WCS não encontra a rota do volume. O
operador deve cadastrar a rota e vinculá-la ao mapa do sorter antes de reinserir o
volume ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo
para atualização do dashboard e ou envio da integração.
Sem mapa: A leitura é realizada e a rota existe no WCS, mas não há rampa vinculada
no mapa do sorter. O operador deve vincular a rota à rampa correta e reinserir o
volume ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo
para atualização do dashboard e ou envio da integração.
MultiRead: Mais de um QR code que atinge os parametros configurados na câmera
está visível para a câmera no momento da leitura. O operador retira o código extra,
corrige a caixa e reinseri antes do portal de leitura, ou levado manualmente o volume
para a rampa de destino e realizar leitura no Scanner fixo para atualização do
dashboard e ou envio da integração.
Rampa cheia: Quando a rampa de destino está cheia, o sensor de acúmulo dispara e
o volume é enviado ao rejeito. Essa situação também é sinalizada pelo sinaleiro. O
volume é enviado para rejeito e deve ser reinserido no sorter antes do portal de leitura
ou levado manualmente a rampa de destino e realizar leitura no Scanner fixo para
atualização do dashboard e ou envio da integração.
Cancelamento: Quando uma ordem de serviço é cancelada pelo WMS, o volume é
enviado para rejeito. Deve ser tratado e não deve retornar ao sorter.
Perca de Tracking:Ocorre quando, após a leitura no portal, há a perda da
identificação do volume dentro do sistema, ou seja, o CLP deixa de ter a referência da
posição física do volume no Sorter. Esse tipo de falha geralmente acontece por
enroscos ou quando o volume não atende às especificações definidas para operação.
Nessa situação, o Sorter não consegue determinar o destino correto do volume,
direcionando-o automaticamente o volume é enviado para a rampa de rejeito e deve
reinserido no sorter antes do portal de leitura ou levado manualmente a rampa de
destino e realizar leitura no Scanner fixo para atualização do dashboard e ou envio da
integração.
Produto Incorreto / SKU Divergente: Ocorre quando a leitura do código do
produto (SKU/código interno) no volume não corresponde ao item que o WCS
esperava para associada à etiqueta do volume. A divergência pode ocorrer quando o
portal não consegue ler corretamente o SKU do produto. Nesse caso, o operador deve
fazer o processo manual de bipar ambos os códigos, caso esteja correto o WCS irá
ignorar o double check no momento que a caixa for reinduzida ou levado manualmente
a rampa de destino e realizar leitura no Scanner fixo para atualização do dashboard e
ou envio da integração.
Alteração do Status para "Na Rampa":
Quando a caixa no rejeito for corrigida e lida corretamente, seu status será atualizado para "na
rampa" e o operador será informado da rampa de destino.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.6.1. Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 8267778ad1595465

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em
uma das seguintes 5 situações:
1. Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código
de barras presente na caixa ou quando não há etiqueta na caixa no caso do trabalho
sem a IA. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que
direciona o volume para a rampa de rejeito. O volume será tratado por um operador,
que, após a correção ou a adição da etiqueta, deve induzir novamente o volume no
Sorter, antes do portal de leitura.
2. Sem Rota
Ocorre quando a câmera consegue ler o Código de barras na caixa e o CLP envia a
informação recebida ao Velox. No entanto, o Velox não encontra o código na sua
base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o
operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido
novamente no Sorter, antes do portal de leitura.
3. MultiRead
Esse caso ocorre quando a IA estiver desligada e a câmera identificar a leitura de mais
de um Código de barras que estejam dentro dos parâmetros utilizados na
configuração da câmera. A câmera informa ao CLP que há múltiplos códigos lidos, e o
CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa
de rejeito, o operador deve remover um dos códigos e induzir novamente o volume
antes do portal de leitura, ou reimprimir a etiqueta do volume.
4. Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o
volume chega ao desviador da rampa de destino, a rampa está cheia de caixas,
acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o
sinaleiro também indica essa condição na rampa. O operador deve inserir novamente
o volume antes do portal de leitura para que ele possa ser finalizado.
5. Ocorrências
Ocorre quando um volume tem sua ocorrência (avaria, extravio, cancelamento)
criada, fazendo com que o volume seja direcionado para o rejeito.
6. Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro
do sistema, ou seja, o PLC deixa de ter a referência da posição física do volume no
Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não
atende às especificações definidas para operação. Nessa situação, o Sorter não
consegue determinar o destino correto do volume, direcionando-o automaticamente
para a rampa de rejeito. O operador deve então induzir novamente o volume antes do
portal de leitura para que o processo seja restabelecido.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.8. Rejeito  
**Score:** — (nome-topico) | **ID:** eeb2d733739095c9

Todo rejeito do sorter será direcionado para uma rampa de rejeito, onde será realizado um ponto
de auditagem dos volumes rejeitados.
Rejeitos por NoRead, sem integração, sem PTL e outros tipos de falhas, serão direcionados para
essa rampa de rejeito, onde um ponto de auditagem será responsável por registrar o motivo do
rejeito e garantir que o volume foi corretamente identificado.
Rejeitos por motivo de rampa cheia ou perda de tracking serão direcionados para a mesma rampa
de rejeito, mas serão reinduzidos conforme a necessidade para garantir a continuidade do
processo de separação e movimentação dos produtos.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 4.1.4. Contingência do Sorter (IA)  
**Score:** — (nome-topico) | **ID:** d586f829645482ac

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para
tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em
processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos
impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela
inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência
que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma
nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve
seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais
códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá
disponibilizar a tela para caso se faça necessária.

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Recirculação de Volumes no Sorter  
**Score:** — (nome-topico) | **ID:** 38cf5f5cad41ac87

Nos casos em que a rampa de destino do volume no sorter esteja cheia, ou ocorra perda de tracking do volume, o mesmo será direcionado para recirculação na esteira. Essa recirculação tem como objetivo permitir tempo hábil para que os operadores realizem a liberação da rampa originalmente destinada ao desvio do volume. Sem necessidade de reindução do volume.
A recirculação é controlada pelo sistema WCS. Caso o volume recircule três (3) vezes e a rampa de destino ainda permaneça cheia, o WCS instruirá o envio automático do volume para a rampa de rejeito.
A quantidade máxima de recirculações é parametrizável no sistema WCS, podendo ser ajustada de acordo com as definições operacionais da Britânia. Dessa forma, o comportamento pode ser adaptado conforme as características e necessidades específicas da operação.

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
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
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 6382c08a166e12fa

Todos os volumes rejeitados pelo sorter serão direcionados para uma rampa de rejeito, que atuará como ponto de auditagem e tratativa dos volumes não processados corretamente.
Ao chegar na rampa de rejeito, o operador deverá registrar o motivo do rejeito e garantir que o volume seja corretamente identificado e tratado, conforme o procedimento operacional definido.
Os volumes rejeitados por rampa cheia ou perda de tracking serão recirculados automaticamente pelo sorter até atingirem o limite máximo de voltas configuradas no sistema WCS.
Caso o volume atinja a quantidade máxima de recirculações sem sucesso no desvio, ele será encaminhado automaticamente para a rampa de rejeito, encerrando o ciclo do volume no sistema.
A quantidade de recirculações permitidas é parametrizável no WCS, podendo ser ajustada conforme as definições e estratégias operacionais da Britânia.

O WCS irá disponibilizar uma tela para identificação e tratativa dos rejeitos do sorter, onde o operador deve se orientar sobre o motivo do rejeito, para que o volume seja tratado e enviado para sua rampa de destino

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
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
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 8af02bb0a0a101ef

Todo rejeito do sorter será direcionado para uma rampa de rejeito, onde será realizado um ponto de auditagem dos volumes rejeitados, essa auditagem será feita por um computador (fornecido pelo cliente) na saída da rampa de rejeito.
Rejeitos por NoRead, sem integração, sem PTL e outros tipos de falhas, serão direcionados para essa rampa de rejeito, onde um ponto de auditagem será responsável por registrar o motivo do rejeito e garantir que o volume foi corretamente identificado.
Rejeitos por motivo de rampa cheia ou perda de tracking serão direcionados para a mesma rampa de rejeito, mas serão reinduzidos conforme a necessidade para garantir a continuidade do processo de separação e movimentação dos produtos.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Contingência do Sorter (IA)  
**Score:** — (nome-topico) | **ID:** d9f6f1dd0048eb8d

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá disponibilizar a tela para caso se faça necessária.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
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
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** f9a1d1c0ec716ce7

Todo rejeito do sorter será direcionado para uma rampa de rejeito, onde será realizado um ponto de auditagem dos volumes rejeitados.
Rejeitos por NoRead, sem integração, sem PTL e outros tipos de falhas, serão direcionados para essa rampa de rejeito, onde um ponto de auditagem será responsável por registrar o motivo do rejeito e garantir que o volume foi corretamente identificado.
Rejeitos por motivo de rampa cheia ou perda de tracking serão direcionados para a mesma rampa de rejeito, mas serão reinduzidos conforme a necessidade para garantir a continuidade do processo de separação e movimentação dos produtos.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Contingência do Sorter (IA)  
**Score:** — (nome-topico) | **ID:** 7e1215b82ef06aa9

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Caso o WMS imprima uma etiqueta com o objetivo da leitura do dun no portal ele deve seguir o mesmo padrão descrito neste tópico.
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade do WMS, porém o WCS irá disponibilizar a tela para caso se faça necessária.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 4.8.1. Tratamento de Falha de Identificação  
**Score:** — (semantico) | **ID:** 5c8b60be221c20e8

Volumes que apresentarem falha de leitura (No-Read) ou etiquetas danificadas no scanner do
Sorter serão desviados obrigatoriamente para a Rampa de Rejeito. O ciclo de integração de
Volume no Sorter não será disparado para esses volumes até que sejam identificados
manualmente e reinduzidos.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 8.1. Volumes multi-pedido e mono-pedido  
**Score:** — (semantico) | **ID:** 9c915142f4167d41

O sistema contará com parâmetros de ocupação mínima e máxima de volume, definidos em
tela. Quando um pedido apresentar poucos itens na área de picking cart e não atingir a ocupação
mínima configurada, o WCS identificará automaticamente outros pedidos com a mesma
característica e os agrupará na mesma caixa, a fim de otimizar o espaço e evitar volumes com
pouca ocupação. Esses pedidos agrupados serão posteriormente separados no PTW,
caracterizando o método de separação multi.
OBS: O WCS só consolidará pedidos que tenham posições disponíveis para alocação
no PTW.
O sistema também contará com parâmetros de ocupação máxima de volume, garantindo que
as caixas não ultrapassem um nível de preenchimento que possa comprometer a integridade dos
produtos ou a eficiência operacional. Recomenda-se que esse limite não seja configurado em
100%, considerando a diversidade de dimensões e formatos dos itens, evitando, assim, excesso
de compactação e dificuldades no manuseio.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 16.4. Tratativa de Rejeito (No-Read e Cancelados)  
**Score:** — (nome-topico) | **ID:** bb42542b875600e7

A última saída do Sorter é, por segurança, a rampa de Rejeito. Para lá são desviados volumes
que:
O scanner não conseguiu ler (No-Read).
Perderam o tracking (deslizaram na correia).
Pertencem a pedidos Cancelados (que tiveram a luz apagada no picking ou
cancelados durante o trajeto).
Não possuem rota válida cadastrada.
Operação: O operador do rejeito deve analisar a caixa, identificar o motivo na tela e dar o
destino correto (Devolver ao Estoque, Reinduzir ou Desmontar).

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** bc97c338a7dc8d0b

A rampa de rejeito no final do Sorter é responsável por receber em uma das seguintes 6
situações:
1. Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do QR Code
presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP envia a
informação de "sem leitura" para o WCS, que direciona o volume para a rampa de re
jeito. O volume será tratado por um operador, que, após a correção ou a adição da
etiqueta (que deve conter as informações do transporte), deve induzir novamente o
volume no Sorter, antes do portal de leitura.
2. Sem Rota
Ocorre quando a câmera consegue ler o QR Code na caixa e o CLP envia a informação
recebida ao WCS. No entanto, o WCS não encontra o código na sua base de dados de
destinos. Nesse caso, o volume é direcionado para rejeito, e o operador deverá realizar
a tratativa necessária. Se necessário, o volume será induzido novamente no Sorter,
antes do portal de leitura.
3. MultiRead
Esse caso ocorre quando mais de um QR Code está visível para a câmera no momento
da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a
mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o
operador deve remover um dos códigos e induzir novamente o volume antes do portal
de leitura.
4. Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o
volume chega ao desviador da rampa de destino, a rampa está cheia de caixas,
acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito, e o
sinaleiro também indica essa condição na rampa. O operador deve inserir novamente
o volume antes do portal de leitura quando a rampa estiver disponível.
5. Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o
volume seja direcionado para o rejeito.
6. Perda de Tracking
Ocorre quando, após a leitura no portal, o sistema perde a identificação do volume
dentro do Sorter — ou seja, o CLP deixa de ter a referência da posição física do
volume na linha. Essa falha geralmente acontece por enroscos mecânicos ou quando o
volume não atende às especificações de dimensão e peso definidas para a operação.
Sem a referência posicional, o Sorter não consegue determinar o destino correto e
direciona o volume para a rampa de rejeito. O operador deve induzir novamente o
volume antes do portal de leitura para restabelecer o processo.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 3.1 Recirculação de Volumes no Sorter  
**Score:** — (nome-topico) | **ID:** a2e26ab3a398b4c9

Nos casos em que a rampa de destino do volume no sorter esteja cheia, ocorra perda de tracking
do volume, ou que ele não esteja integrado, o mesmo será direcionado para recirculação na
esteira. Essa recirculação tem como objetivo realizar mais tentativas de desvio sem necessidade
de intervenção manual.
A recirculação é controlada pelo sistema WCS. Caso o volume recircule três (3) vezes e a rampa
de destino ainda permaneça cheia, o WCS instruirá o envio automático do volume para a rampa
de rejeito.
A quantidade máxima de recirculações é parametrizável no sistema WCS, podendo ser ajustada
de acordo com as definições operacionais. Dessa forma, o comportamento pode ser adaptado
conforme as características e necessidades específicas da operação.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 3.2 Motivos de Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** cd756f3500eaadbd

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em
uma das seguintes 6 situações:
1. Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código
de barras presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP
envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa
de rejeito. O volume será tratado por um operador, que, após a correção ou a adição
da etiqueta (que deve conter as informações da rota), deve induzir novamente o
volume no Sorter, antes do portal de leitura.
2. Sem Rota
Ocorre quando a câmera consegue ler o Código de barras na caixa e o CLP envia a
informação recebida ao Velox. No entanto, o Velox não encontra o código na sua
base de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o
operador deverá realizar a tratativa necessária. Se necessário, o volume será induzido
novamente no Sorter, antes do portal de leitura.
3. MultiRead
Esse caso ocorre quando mais de um Código de barras está visível e atinge os
parametros configurados na câmera no momento da leitura. A câmera informa ao CLP
que há múltiplos códigos lidos(Notas diferentes), e o CLP envia a mensagem de
"MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve
remover um dos códigos e induzir novamente o volume antes do portal de leitura.
4. Rampa Cheia
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o
volume chega ao desviador da rampa de destino, a rampa está cheia de caixas,
acionando o sensor de acúmulo. Nesse caso, o volume é enviado para a recirculação, e
o sinaleiro também indica essa condição na rampa piscando em amarelo.
5. Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro
do sistema, ou seja, o CLP deixa de ter a referência da posição física do volume no
Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não
atende às especificações definidas para operação. Nessa situação, o Sorter não
consegue determinar o destino correto do volume, direcionando-o automaticamente o
volume é enviado para a recirculação.
6. Não integrado
Volumes que ainda não foram enviados via integração.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 3.3 Rejeito  
**Score:** — (nome-topico) | **ID:** b48e69bf03bbac14

Todos os volumes rejeitados pelo sorter serão direcionados para uma rampa de rejeito, que
atuará como ponto de auditagem e tratativa dos volumes não processados corretamente.
Ao chegar na rampa de rejeito, o operador deverá consultar o motivo do rejeito e garantir
que o volume seja corretamente identificado e tratado, conforme o procedimento operacional
definido.
Os volumes rejeitados por rampa cheia, perda de tracking e não integrados serão
recirculados automaticamente pelo sorter até atingirem o limite máximo de voltas
configuradas no sistema WCS.
Caso o volume atinja a quantidade máxima de recirculações sem sucesso no desvio, ele será
encaminhado automaticamente para a rampa de rejeito, encerrando o ciclo do volume no
sistema.
A quantidade de recirculações permitidas é parametrizável no WCS, podendo ser ajustada
conforme as definições e estratégias operacionais.
O WCS irá disponibilizar uma tela para identificação e tratativa dos rejeitos do sorter, onde o
operador deve se orientar sobre o motivo do rejeito, para que o volume seja tratado e enviado
para sua rampa de destino

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 8.5. Rejeito  
**Score:** — (nome-topico) | **ID:** 7b7f2f51dac73131

A rampa de rejeito recebe volumes que se enquadram em sete situações distintas:
Sem leitura (NoRead) — [Rejeito Direto]: O portal de leitura não consegue
identificar o código da caixa ou não há etiqueta presente. O volume é enviado
diretamente para a rampa de rejeito e deve ser corrigido e reinserido no sorter
antes do portal de leitura ou levado manualmente à rampa de destino para leitura no
scanner fixo.
Sem rota — [Rejeito Direto]: A leitura é realizada, mas o WCS não encontra a rota
do volume. O sistema direciona o volume para rejeito imediato. O operador deve
cadastrar a rota e vinculá-la ao mapa do sorter antes de reinserir o volume ou realizar o
processo manual de entrega no destino.
Sem mapa — [Rejeito Direto]: A leitura é realizada e a rota existe no WCS, mas não
há rampa vinculada no mapa do sorter. O volume é enviado para o rejeito direto por
falta de destino físico configurado. O operador deve vincular a rota à rampa correta e
reinserir o volume ou seguir com o fluxo manual.
MultiRead — [Rejeito Direto]: Mais de um QR code que atinge os parâmetros
configurados na câmera está visível no momento da leitura. O volume é enviado para o
rejeito direto para evitar erros de desvio. O operador retira o código extra, corrige a
caixa e a reinseri antes do portal de leitura.
Rampa cheia — [Recircula]: Quando a rampa de destino está cheia, o sensor de
acúmulo dispara. Diferente dos erros de leitura, este volume permanece no sistema
e recircula no sorter, aguardando a liberação de espaço na rampa. Caso a condição
de cheia persista após as tentativas sistêmicas, o volume poderá ser direcionado ao
rejeito para desobstrução do fluxo.
Cancelamento — [Rejeito Direto]: Quando uma ordem de serviço é cancelada pelo
WMS, o volume é identificado e enviado para o rejeito direto. Este volume deve ser
tratado operacionalmente e não deve retornar ao sorter em nenhuma hipótese.
Perda de Tracking — [Recircula]: Ocorre quando o CLP deixa de ter a referência da
posição física do volume no Sorter (por enroscos ou fora de especificação). O sistema
prioriza a recirculação para tentar recuperar a lógica de rastreio. Se a recuperação
falhar, o volume é enviado à rampa de rejeito para ser reinserido antes do portal de
leitura, gerando um novo ID de tracking.
Alteração do Status para "Na Rampa":
Quando a caixa no rejeito (ou vinda de uma recirculação) for corrigida e lida corretamente no
destino final, seu status será atualizado para "Na Rampa" e o operador será informado da
conclusão do processo.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Recirculação  
**Score:** — (nome-topico) | **ID:** 185958058a568720

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá
recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa
cheia, onde o volume deveria ser desviado. Com isso, após o volume recircular 3 (três) vezes na
esteira, e ainda sim estiver com a rampa cheia, o volume será destinado para o rejeito. Essa
quantidade de recirculação é parametrizável no sistema WCS. Em caso de noread contínuo para
evitar o looping desse volume o cliente pode definir um limite de vezes que esse volume pode
dar noread e recircular, após chegar nesse limite o volume é desviado para rejeito.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Rejeito Sorter  
**Score:** — (nome-topico) | **ID:** e81e8af5beef9b24

Seguirão para rejeito, os volumes com etiqueta rasurada (ilegível pelo portal de leitura), volumes
sem etiqueta, rota não mapeada, problemas com peso, volumes não integrados no sistema ou
que atingiram o limite de recirculação.
Todos os volumes que não forem feito o check out de peso deverão ser direcionados ao rejeito,
para que o operador verifique o motivo e induza novamente o volume na esteira, para que essas
informações de peso sejam verificadas e coletadas. Esta regra será desconsiderada apenas se for
acionado a regra de Contingência mencionada a seguir.

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** 8.1.1. Rejeito  
**Score:** — (nome-topico) | **ID:** f2e5d231db6a5ba0

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
 01 (um) Equipamento desktop
 01 (um) Leitor de código de barras – Ex. Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de rejeito
COMPONENTE
CPU
MEMÓRIA
SSD
MONITOR SISTEMA OPERACIONAL
Desktop Rejeito I3 (ou superior)
4GB
250GB
Padrão
Windows 10/11

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
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
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 4.1.4. Contingência do Sorter (IA)  
**Score:** — (nome-topico) | **ID:** 6425229d51ce2b20

A operação de "Contingência Sorter" no sistema Velox é um procedimento desenvolvido para
tratar situações em que o sistema de triagem automática (sorter) encontra dificuldades em
processar caixas devido a condições não ideais. Um exemplo comum ocorre quando os códigos
impressos pelos fornecedores apresentam baixa qualidade, comprometendo a identificação pela
inteligência artificial (IA).
Para evitar impactos na operação, o sistema Velox conta com um mecanismo de contingência
que resolve esses problemas. Esse processo envolve a reetiquetagem das caixas, gerando uma
nova etiqueta que combina os caracteres "IVT" com o DUN correto da embalagem.
Abaixo está um exemplo do formato correto da etiqueta:
Quando este formato de etiqueta estiver vinculado a caixa, o sorter desconsidera os demais
códigos da caixa e realiza a triagem visualizando apenas o DUN após os caracteres “IVT”.
A impressão de etiquetas de contingência será de responsabilidade invent.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 8.1.2. Rejeito  
**Score:** — (nome-topico) | **ID:** bf7c048e4aa68dc6

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
 01 (um) Equipamento desktop
 01 (um) Leitor de código de barras – Ex. Honeywell 1470g
 01 (um) Impressora na rede da automação para etiquetas IVT – Ex: Zebra
Abaixo segue a configuração mínima para o desktop para a estação de rejeito
COMPONENTE
CPU
MEMÓRIA
SSD
MONITOR SISTEMA OPERACIONAL
Desktop Rejeito I3 (ou superior)
8GB
250GB
Padrão
Windows 10/11

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 0a57391aad4b61f7

A rampa de rejeito presente no final do Sorter irá receber os volumes que se classificam em 6
situações sendo as seguintes situações:
Sem leitura (NoRead) – Ocorre quando a câmera do portal de leitura não consegui fazer
a leitura do código QR code presente na caixa ou não há etiqueta presente na caixa, com
isso o CLP envia a informação de sem leitura para o Velox e ele direciona o volume para
o rejeito, assim o volume será tratado por um operador e após a correção ou adição da
etiqueta que deve conter as informações da rota o volume deve ser induzido novamente
no Sorter antes do portal de leitura.
Sem rota – Ocorre quando a câmera consegue efetuar a leitura do código QR code e o
CLP envia a informação recebida da câmera ao Velox, ele por sua vez procura o código
em sua base de destino e não encontra, assim direcionando o volume para que o
operador cadastre a rota no Velox e vincule a mesma no mapa do Sorter e o volume deve
ser induzido novamente no Sorter antes do portal de leitura.
Sem mapa – Ocorre quando a câmera consegue efetuar a leitura do código QR code e o
CLP envia a informação recebida da câmera ao Velox, ele por sua vez procura o código
em sua base de destino e encontra a rota, porém, não há rampa vinculada no mapa do
Sorter para esse destino, o operador deve fazer o vínculo da rota a rampa no mapa do
sorter e o volume deve ser induzido novamente no Sorter antes do portal de leitura.
MultiRead – Ocorre quando mais de um código QR code está visível para câmera no
momento da leitura, assim ela informa ao CLP que existe mais de um código lido e o CLP
envia a mensagem de MultiRead para o Velox. Ao volume chegar no rejeito o operador
deve retirar um dos códigos e inserir novamente o volume antes do portal de leitura.
Rampa cheia – Ocorre quando todo processo de leitura no portal e validações do Velox
estão corretos, porém, quando o volume chega ao desviador da sua rampa de destino a
mesma está cheia de caixas acionando o sensor de acúmulo, assim o volume é enviado
para o rejeito, esse caso também é informado pelo sinaleiro.
Cancelamento – Ocorre quando uma ordem de serviço é cancelada pelo WMS.
Volumes que já possuírem etiqueta, mas forem direcionados ao rejeito por inconsistência de
leitura, rota ou mapeamento, devem ser tratados como exceções operacionais. A nova etiqueta
substitui a anterior para garantir que o sistema considere apenas a rota mais recente.
Impressora no Rejeito: Será instalada uma impressora na área de rejeito. O operador
deverá bipar a caixa e, caso necessário, imprimir uma nova etiqueta atualizada, que indica a
rampa correta para alocação da caixa. Essa nova etiqueta prevalece sobre qualquer etiqueta
anterior, evitando redirecionamentos incorretos.
Alteração do Status para "Na Rampa": Quando uma caixa que está no rejeito for identificada
e lida corretamente, o status da caixa será alterado para "na rampa", e o operador será
informado sobre a rampa para onde a caixa deve ser direcionada.
Responsabilidade do Operador: A ideia é evitar que o operador da conferência ir até o rejeitoo
frequentemente. O operador no rejeito terá a tarefa de bipar e gerar a etiqueta para direcionar
a caixa à rampa correta. A alocação da caixa será feita conforme a rampa designada, permitindo
ao operador alocar as cargas de forma mais eficiente.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Rampa de Rejeito  
**Score:** — (nome-topico) | **ID:** 37dded474fa48ee4

Volumes com falha de leitura ou inconsistência são desviados automaticamente para rejeito nas
situações:
NoRead, Sem Rota, Sem Mapa, MultiRead, Rampa Cheia, Cancelamento.
O operador corrige o problema e reenvia o volume.
Teremos uma impressora no rejeito, destinada à emissão de novas etiquetas com rota
atualizada. Todas as reimpressões realizadas no rejeito serão registradas em log, com
data e hora.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** Recirculação  
**Score:** — (nome-topico) | **ID:** 2b110b2b68b597da

Para os casos em que a rampa de destino do volume no sorter, esteja cheia, o volume irá
recircular na esteira, para que haja tempo para que os operadores realizem a liberação da rampa
cheia, onde o volume deveria ser desviado. Com isso, o time Invent recomenda que após o
volume recircular 3 (três) vezes na esteira, e ainda sim estiver com a rampa cheia, o volume será
destinado para o rejeito.
Essa quantidade de recirculação é parametrizável no sistema WCS, sendo assim será uma
escolha operacional.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** Rejeito Sorter  
**Score:** — (nome-topico) | **ID:** 295a68956b7f0f6c

Volumes com etiqueta rasurada (ilegível pelo portal de leitura), volumes sem etiqueta, volumes
com rampa de destino não mapeada ou volumes que não estejam integrados corretamente no
sistema serão automaticamente direcionados para a rampa de rejeito. Essa ação tem como
objetivo garantir que o operador possa verificar o motivo da falha, tomar a decisão adequada e
realizar a reinserção do volume na esteira ou a triagem manual até a doca correta.
No sistema WCS, deve existir a possibilidade de parametrizar até duas rampas de rejeito,
sendo uma rampa de rejeito no sorter já existente e uma rampa de rejeito no sorter
fornecido pela Invent. O sistema será configurado para direcionar os volumes
automaticamente para a rampa de rejeito mais próxima. Exceto em casos de erro por
"RAMPA CHEIA", onde o WCS deve validar qual o sorter o volume precisa ser direcionado,
com base na sua rampa de destino configurada.
Embora o sistema permita que as rampas destinadas ao rejeito também possam ser
configuradas como rampas de destino para volumes regulares, essa prática não é
recomendada pela equipe técnica da Invent, pois pode impactar negativamente na
triagem correta dos volumes ao final da rampa. No entanto, por solicitação do cliente, o sistema
deverá estar preparado para suportar esse cenário.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** 8.1.1. Rejeito  
**Score:** — (nome-topico) | **ID:** 4fad45fe9d920f85

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
 01 (um) Equipamento desktop
 01 (um) Leitor de código de barras – Ex. Honeywell 1470g
Abaixo segue a configuração mínima para o desktop para a estação de rejeito
COMPONENTE
CPU
MEMÓRIA
SSD
MONITOR SISTEMA OPERACIONAL
Desktop Rejeito I3 (ou superior)
4GB
250GB
Padrão
Windows 10/11

---
**Origem:** [MARA IV] 2025 — `I25.9047 - Especificao de Software - Projeto_Mara IV.pdf`  
**Prioridade:** não  
**Heading:** 7. Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 0d1f9d9f3300b8a4

Para a rampa de rejeito do sorter, teremos 01 (uma) estação de trabalho para verificação
dos motivos de rejeito, bem como tratativas dos volumes full case que não passam pela esteira
e volumes (reimpressão de etiquetas, volume não encontrado, NoRead etc.)

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** 5.1 Indução de Volumes CCX  
**Score:** — (semantico) | **ID:** d9cc46c5ea877f24

A indução dos volumes classificados como CCX será coordenada pelo WMS, que assumirá total
responsabilidade pelo controle de quais volumes devem ser processados, sendo enviado para o
WCS a informação de cada Volume via integração.
Durante esse processo:
•
O WMS será responsável por definir os volumes a serem induzidos, incluindo o
momento da indução
•
Não serão aplicadas regras de matriz de fragilidade ou prioridade de produtos
nesta etapa do fluxo.
•
O WCS atuará como agente executor, sendo responsável por:
o
Processar os volumes conforme os dados recebidos via integração do WMS;
o
Validar via portal RFID a quantidade de itens presentes no volume de acordo
com o que foi informado na integração do WMS
o
Executar o desvio físico dos volumes para as rampas do sorter, podendo seguir
o mapa de sorter ativo ou as regras de agrupamentos definidas pela operação
C&A.
o
Garantir a rastreabilidade da movimentação de cada volume durante o trajeto de
automação.
Esse modelo garante que toda a lógica de decisão fique centralizada no WMS, enquanto o WCS
assegura a execução fiel das instruções recebidas, mantendo a integridade operacional do
sistema automatizado.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** 6d946fca0facb2c3

O rejeito do sorter será divido em duas rampas segregadas. Todo rejeito onde o volume for lido
e WCS já tenha o diagnóstico, ou seja, rejeitos por NoRead, sem integração, itens faltantes, sem
destino e entre outros serão destinados para a primeira rampa a direita e será utilizado uma das
posições PTL dessa respectiva rampa para informar que o volume foi rejeitado.
Já os rejeitos por motivo de rampa cheia ou perda de tracking serão direcionados para a rampa
final do sorter para serem reinduzidos novamente.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** 8.1.2 Rejeito  
**Score:** — (nome-topico) | **ID:** eb9d2ab7776df04b

Na estação de rejeito deverá conter uma estação de trabalho disponibilizada pelo cliente, sendo:
 01 (um) Equipamento desktop
 01 (um) Leitor de código de barras – Ex. Honeywell 1470g
 01 (um) Impressora para etiquetas IVT – Ex: Zebra
Abaixo segue a configuração mínima para o desktop para a estação de rejeito
COMPONENTE
CPU
MEMÓRIA
SSD
MONITOR SISTEMA OPERACIONAL
Desktop Rejeito I3 (ou superior)
4GB
250GB
Padrão
Windows 10/11

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Rejeito do Sorter  
**Score:** — (nome-topico) | **ID:** 292112d24726fd1a

A rampa de rejeito recebe os volumes que não puderam ser classificados e direcionados ao destino correto pelo fluxo automatizado. Esses volumes são tratados manualmente por operadores na mesa de rejeito, equipada com [A DEFINIR] leitores. A rampa de rejeito recebe volumes enquadrados nas seguintes situações:

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Rejeito  
**Score:** — (nome-topico) | **ID:** d1f6fb6a23e73078

Seguindo reto no Sorter fica a rampa de rejeito que é responsável por receber volumes que
se classificam em uma das seguintes 6 situações:
1. Sem Leitura (NoRead)
Ocorre quando a câmera do portal de leitura não consegue fazer a leitura do Código
de Barras presente na caixa ou quando não há etiqueta na caixa. Nesse caso, o CLP
envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa
de rejeito. O volume será tratado por um operador, que, após a correção ou a adição
da etiqueta (que deve conter as informações da rota), deve induzir novamente o
volume no Sorter, antes do portal de leitura.
2. Sem Rota
Ocorre quando a câmera consegue ler o Código de Barras na caixa e o PLC envia a
informação recebida ao WCS. No entanto, o WCS não encontra o código na sua base
de dados de destinos. Nesse caso, o volume é direcionado para rejeito, e o operador
deverá realizar a tratativa necessária. Se necessário, o volume será induzido novamente
no Sorter, antes do portal de leitura.
3. MultiRead
Esse caso ocorre quando mais de um Código de Barras está visível para a câmera no
momento da leitura. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP
envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de
rejeito, o operador deve remover um dos códigos e induzir novamente o volume antes
do portal de leitura.
4. Cancelamento
Ocorre quando uma ordem de serviço é cancelada pelo WMS, fazendo com que o
volume seja direcionado para o rejeito.
5. Rampa Cheia
Ocorre quando o processo de leitura e validação no WCS está correto, mas quando o
volume chega ao desviador da rampa de destino, a rampa está cheia de caixas,
acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito.
6. Perca de Tracking
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro
do sistema, ou seja, o PLC deixa de ter a referência da posição física do volume no
Sorter. Esse tipo de falha geralmente acontece por enroscos ou quando o volume não
atende às especificações definidas para operação. Nessa situação, o Sorter não
consegue determinar o destino correto do volume, direcionando-o para o rejeito.
