# sorter-inducao.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** 3. Especificação  
**Score:** — (semantico) | **ID:** 26128c11d7f41455

Para o correto funcionamento da automação, é necessária uma aplicação responsável
pelo gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação
executará as rotinas de separação de volumes, incluindo Picking Fracionado, Picking Full Case,
Picking Cart, Packing, Sorter e PTL (Put-To-Light) nas posições de saída do sorter, tendo como
papel fundamental a interface entre os sistemas WMS com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto
armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente
(licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de
uma interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão
em cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 5 — Coleta de todos os volumes: Operador realizar a coleta de todos os volumes e  
**Score:** — (semantico) | **ID:** 35bf5cfa85d4df51

os induzem na esteira BK10 e seguem para o sorter.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Informação  
**Score:** — (semantico) | **ID:** 7450ade5a04ec148

MATNR
Produto
Número do Material
QUANT
Volumes / Tarefas
Quantidade Atendida
ZCHARG
Produto
Número do Lote
ZQTDE_CX
Volumes / Tarefas
Quantidade de Caixas
ZSEP_PARCIAL
Volumes / Tarefas
Separação Parcial (X)

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Peso unitário (Méd)  
**Score:** — (semantico) | **ID:** 34a8afba724f7881

RA06001100
6425798239
1100.0
11.0
•
Volume desviado no sorter

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Rejeitos  
**Score:** — (semantico) | **ID:** 5e8782f4ba55f9e9

Durante o processo de sorter, nem todos os volumes conseguem ser direcionados para uma
rampa de destino. Existem diversas situações operacionais, sistêmicas ou físicas que impedem o
desvio correto de um volume. Para esses casos, o sorter possui rampas de rejeito dedicadas,
parametrizadas por meio da tela de configuração, que recebem todos os volumes que não
podem seguir o fluxo normal.
O rejeito não é um erro que encerra o ciclo do volume. É uma etapa de tratamento: o volume é
separado do fluxo principal, analisado por um operador na estação de rejeito do WCS, e pode
ser reprocessado (reimprimir etiqueta, reinduzir na esteira) ou definitivamente descartado do
processo daquela onda.
O WCS é responsável por decidir quando um volume deve ser rejeitado, por comandar o desvio
para a rampa de rejeito e por disponibilizar as ferramentas para que a operação trate esses
volumes.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 4.1.2. Especificação de Volumes Induzidos no Sorter  
**Score:** — (nome-topico) | **ID:** 11e2e9485d65ef45

Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no
sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os
desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Especificação de Volumes Induzidos no Sorter  
**Score:** — (nome-topico) | **ID:** 5a4e14de85a868aa

Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Especificação de Volumes Induzidos no Sorter  
**Score:** — (nome-topico) | **ID:** 732f77a31003c161

Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:

---
**Origem:** [Barbecue] 2025 — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B - Rev 11.1.pdf`  
**Prioridade:** não  
**Heading:** Triagem de Volumes  
**Score:** — (semantico) | **ID:** 2b8019dbf88c0d2d

Conforme mencionado no item Sorter, o volume pode ser induzido diversas vezes por diversos
cenários atípicos da operação Swift.
Sendo assim, o WCS deve apresentar uma tela de Triagem da caixa que deve ser filtrada pelo
RG da caixa e exibir ao usuário um diagnóstico daquele volume. Será mostrado quando foi
integrado, RG do volume, quando foi passado pela balança, peso e quando foi efetuado o desvio.
Os pontos de decisão precisam exibir data e hora da passagem.
Caso esse volume passe 3 vezes pelo sorter deve ser apresentado o registro dessa caixa 3 vezes
e a data e hora de cada passagem nos pontos de decisão.

---
**Origem:** [Beta Esteio] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio - Rev 6.pdf`  
**Prioridade:** não  
**Heading:** Coleta de Múltiplos Volumes na Mesma Posição  
**Score:** — (semantico) | **ID:** bcbb406b9ce129ab

Nos casos em que um mesmo item esteja alocado para múltiplos volumes em uma mesma
localização de picking, o sistema indicará os diferentes volumes e as posições correspondentes
no Picking Cart.
Nessa situação, o operador deverá, antes de alocar o item coletado, escanear o código da
etiqueta correspondente ao volume que está sendo separado. Essa ação garante que a
destinação correta do item seja feita.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 4.1.2. ESPECIFICAÇÃO DE VOLUMES INDUZIDOS NO SORTER ............................................... 8  
**Score:** — (nome-topico) | **ID:** 420d069b2c727179

Rev.
Data
Descrição
Responsável
11/08/2025
Especificação de Software
Thomas Momesso

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** 4.1.2. Especificação de Volumes Induzidos no Sorter  
**Score:** — (nome-topico) | **ID:** 1593840f0152760e

Para a correta leitura no portal do sorter, os volumes devem estar devidamente integrados no
sistema Velox, com isso ele usará as informações recebidas para validar o destino e realizar os
desvios corretamente na automação.
Exemplo de caixa com mais de um código de barras e caixas etiquetadas:

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 12. Área de Stage para indução no Sorter  
**Score:** — (nome-topico) | **ID:** 3a1ce83f4fda24b4

A área de Stage é dividida em posições físicas (endereços) para garantir a rastreabilidade e o
controle da localização do pallet, seja um pallet fechado induzido no sorter ou caixas Full Case
coletadas no fracionado, o operador deve depositar os volumes na área de Stage. O WCS exige
que o operador leia ou insira o endereço da posição no coletor para garantir a correta
localização do volume. O sistema exibirá uma mensagem informando: 'Direcionar volumes para
a área de Stage, próxima à indução, se o pallet estiver disponível.
Caixas Full Case: As caixas Full Case estarão devidamente etiquetadas, facilitando a
rastreabilidade e controle durante a indução.
Pallets Sorter:  O WCS gerencia o método de separação, que é ativado quando a quantidade
total solicitada de um mesmo produto, em uma única onda de separação, atingir ou superar o
volume equivalente a um pallet fechado
Definição da Área de Stage: A área de Stage será definida pelo cliente, de acordo com suas
necessidades operacionais.
O WCS registra o endereçamento sistêmico da tarefa no stage, garantindo rastreabilidade dos
volumes por posição. Entretanto, não controla automaticamente a ocupação ou quantidade de
pallets disponíveis no stage, sendo este gerenciamento realizado operacionalmente pelos
operadores.
Área de Stage cheia: Quando a área do Stage estiver cheia será necessária uma tratativa
operacional onde o operador deve confirmar a alocação do pallet no Stage e segregar o mesmo
próximo ao stage informado.
Controle de Ocupação do Stage: O WCS realiza apenas o registro sistêmico do endereço
informado no coletor para rastreabilidade, não havendo controle automático de ocupação ou
capacidade da área de stage. O gerenciamento da ocupação física do stage continuará sendo
tratado operacionalmente pelos operadores.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Indução no Sorter  
**Score:** — (nome-topico) | **ID:** 0039822f85dff5c7

A indução ocorre nas rampas esquerda e direita, com capacidade para 6.000 volumes/hora.
O portal de leitura três faces (superior e laterais) realiza a captura do EAN ou DUN-14.
O WCS valida os dados e aciona o CLP (PLC), conforme o mapa do sorter ativo.
Contingência com IA e Etiquetas IVT+DUN:
Volumes com falha recorrente de leitura recebem etiqueta IVT+DUN impressa pelo
operador na área de rejeito, garantindo correta identificação.

---
**Origem:** [Gavião] 2025 — `I24.4004 - ESPECIFICACAO DE SOFTWARE - Projeto GAVIAO - REV.3.pdf`  
**Prioridade:** não  
**Heading:** Triagem de Volumes  
**Score:** — (semantico) | **ID:** 56fe31e25a923ddb

Conforme mencionado no item sorter, o volume pode ser induzido diversas vezes por diversos
cenários atípicos da operação Reval.
Sendo assim, o WCS deve apresentar uma tela de Triagem da caixa que deve ser filtrada pelo
RG da caixa e exibir ao usuário um diagnóstico daquele volume. Será mostrado quando foi
integrado, código do volume e quando foi efetuado o desvio. Os pontos de decisão precisam
exibir data e hora da passagem.
Caso esse volume passe 3 vezes pelo sorter deve ser apresentado o registro dessa caixa 3 vezes
e a data e hora de cada passagem nos pontos de decisão.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 3. Especificação  
**Score:** — (semantico) | **ID:** e58bdf394bef6e26

Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo
gerenciamento das informações dos volumes triados na operação, ou seja, esta aplicação
executará as rotinas de separação de volumes, incluindo Picking Fracionado, Picking Cart,
Sorter e PTL (Put-To-Light) nas posições de saída do sorter, tendo como papel fundamental a
interface entre os sistemas WMS (Kaizen) com WCS Invent.
A aplicação WCS da Invent necessita de um banco de dados exclusivo para o correto
armazenamento e gerenciamento das informações que serão disponibilizadas pelo cliente
(licença e instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho por meio de uma
interface Web (HTTPS). Dessa forma, é necessário o uso de um navegador web padrão em
cada estação de trabalho (Google Chrome) para acessar a aplicação WCS.
Criação
Apresentação
Envio
Aprovação da ES
Responsável:
Invent
Desenvolvimento de
documentação (ES).
Responsável: Invent
Apresentação de ES
ao cliente para
validação de toda a
documentação.
Responsável:
Invent
Envio do ES para
Aprovação.
Responsável: Cliente
Cliente aprova a proposta para dar
seguimento no processo seguindo
para o desenvolvimento.
