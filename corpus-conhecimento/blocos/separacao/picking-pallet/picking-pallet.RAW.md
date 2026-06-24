# picking-pallet.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Picking Pallet Direto  
**Score:** — (nome-topico) | **ID:** b27f3e831c563fd9

O processo de Picking Pallet Direto é utilizado para itens que, apesar de se enquadrarem no fluxo de Picking Fullcase, apresentam uma quantidade elevada de um mesmo SKU destinada a uma única remessa, tornando necessária a alocação em pallet.
O fluxo operacional segue as etapas descritas a seguir.
Fluxo Operacional de Picking Pallet
Na tela de Picking Fullcase, será disponibilizada uma aba exclusiva para o Picking Pallet, permitindo que o operador selecione esse tipo de picking de forma independente.
Ao acessar a aba de Picking Pallet, o WCS exibirá as tarefas que foram enviadas para esse processo na integração.
O operador seguirá o um processo de coleta parecido com a do Fullcase descrito anteriormente, realizando:
Leitura do endereço de picking
Coleta dos itens
Etiquetagem de todos os volumes
Confirmação da quantidade
Leitura da UC de pallet
O pallet será direcionado diretamente para a área de expedição (rampa de destino), sem passar pelo sorter.
Parâmetro de Paletização por Transportadora
Caso o parâmetro de paletização por transportadora esteja ativo:
O operador não deverá realizar o processo de Aloca Pallet
Somente a leitura da etiqueta de UC no PRIX fixo no final da rampa.
O WCS considerará todos os volumes como expedidos, atualizando automaticamente o dashboard operacional
Desta forma o WCS irá integrar todas as etiquetas vinculadas a uc na integração de aloca pallet.
Caso o parâmetro esteja inativo:
O operador será informado no coletor de que o processo de Alloca Pallet não será necessário
Será exigida apenas a leitura de UC do pallet no Prix, ao final da rampa
O WCS considerará todos os volumes como expedidos, atualizando automaticamente o dashboard operacional

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Picking Pallet Exceção  
**Score:** — (nome-topico) | **ID:** 48833575804f2fe0

O processo de Picking Pallet Exceção é utilizado para itens que, apesar de se enquadrarem no processo de picking exceção, possuem uma quantidade elevada de um mesmo item para um único pedido, o que implica na necessidade de alocação em pallet. O fluxo operacional segue as etapas descritas a seguir:
Fluxo Operacional de Picking Pallet Exceção:
Dentro da tela de Picking Exceção, será disponibilizada uma aba exclusiva para o Picking Pallet Exceção, permitindo que o operador selecione esse tipo de picking de forma independente.
Ao acessar a aba de Picking Pallet Exceção, o WCS exibe as tarefas que atinge a quantidade mínima de pallet cadastrada.
Para esses casos, o sistema gera apenas uma etiqueta para o pallet, de forma semelhante ao processo de Full Case, mas com a diferenciação para pallets.
A etiqueta impressa deve conter informações detalhadas sobre o endereço de alocação, número de caixas que devem ser alocadas no pallet e a ordem do pallet no carregamento, além de qual área de expedição será destinado.
O operador segue o mesmo processo de coleta manual descrito anteriormente, realizando a leitura do endereço para identificar o local que ele está coletando os itens, então a leitura da etiqueta de pallet impressa no início da tarefa e finalmente a leitura do código de produto para validar que de fato está retirando o item correto, e então coleta os itens preenchendo o pallet de acordo com as orientações de quantidade fornecidas pela etiqueta e coletor android.
O pallet será direcionado diretamente para a área de expedição, sem passar pelo processo de PTL (Put to Light), pois o processo de alocação já é realizado de forma eficiente pelo operador, garantindo que a quantidade total de itens esteja corretamente alocada.
O operador será informado no coletor de que o processo de PTL não será necessário, e que o pallet será conduzido diretamente para o stage, sem necessidade de separação adicional no PTL.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Picking Pallet Exceção  
**Score:** — (nome-topico) | **ID:** bc426e97ce4e4c7a

Para os pallets gerados no processo de Picking Pallet Exceção, será utilizado o seguinte layout de impressão:

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Picking Pallet Exceção  
**Score:** — (nome-topico) | **ID:** 81ba1ef79df9c9a9

O processo de Picking Pallet Exceção é utilizado para itens que, apesar de se enquadrarem no processo de picking exceção, possuem uma quantidade elevada de um mesmo item para um único pedido, o que implica na necessidade de alocação em pallet. O fluxo operacional segue as etapas descritas a seguir:
Fluxo Operacional de Picking Pallet Exceção:
Dentro da tela de Picking Exceção, será disponibilizada uma aba exclusiva para o Picking Pallet Exceção, permitindo que o operador selecione esse tipo de picking de forma independente.
Ao acessar a aba de Picking Pallet Exceção, o WCS exibe as tarefas que atinge a quantidade mínima de pallet cadastrada.
Para esses casos, o sistema gera apenas uma etiqueta para o pallet, de forma semelhante ao processo de Full Case, mas com a diferenciação para pallets.
A etiqueta impressa deve conter informações detalhadas sobre o endereço de alocação, número de caixas que devem ser alocadas no pallet e a ordem do pallet no carregamento, além de qual área de expedição será destinado.
O operador segue o mesmo processo de coleta manual descrito anteriormente, realizando a leitura do endereço para identificar o local que ele está coletando os itens, então a leitura da etiqueta de pallet impressa no início da tarefa e finalmente a leitura do código de produto para validar que de fato está retirando o item correto, e então coleta os itens preenchendo o pallet de acordo com as orientações de quantidade fornecidas pela etiqueta e coletor android.
O pallet será direcionado diretamente para a área de expedição, sem passar pelo processo de PTL (Put to Light), pois o processo de alocação já é realizado de forma eficiente pelo operador, garantindo que a quantidade total de itens esteja corretamente alocada.
O operador será informado no coletor de que o processo de PTL não será necessário, e que o pallet será conduzido diretamente para o stage, sem necessidade de separação adicional no PTL.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Picking Pallet Exceção  
**Score:** — (nome-topico) | **ID:** de3ec30b2c5a290a

Para os pallets gerados no processo de Picking Pallet Exceção, será utilizado o seguinte layout de impressão:

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Picking Pallet Exceção  
**Score:** — (nome-topico) | **ID:** 62f99f049b93796e

O processo de Picking Pallet Exceção é utilizado para itens que, apesar de se enquadrarem no processo de picking exceção, possuem uma quantidade elevada de um mesmo item para um único pedido, o que implica na necessidade de alocação em pallet. O fluxo operacional segue as etapas descritas a seguir:
Fluxo Operacional de Picking Pallet Exceção:
Dentro da tela de Picking Exceção, será disponibilizada uma aba exclusiva para o Picking Pallet Exceção, permitindo que o operador selecione esse tipo de picking de forma independente.
Ao acessar a aba de Picking Pallet Exceção, o WCS exibe as tarefas que atinge a quantidade mínima de pallet cadastrada.
Para esses casos, o sistema gera apenas uma etiqueta para o pallet, de forma semelhante ao processo de Full Case, mas com a diferenciação para pallets.
A etiqueta impressa deve conter informações detalhadas sobre o endereço de alocação, número de caixas que devem ser alocadas no pallet e a ordem do pallet no carregamento, além de qual área de expedição será destinado.
O operador segue o mesmo processo de coleta manual descrito anteriormente, realizando a leitura do endereço para identificar o local que ele está coletando os itens, então a leitura da etiqueta de pallet impressa no início da tarefa e finalmente a leitura do código de produto para validar que de fato está retirando o item correto, e então coleta os itens preenchendo o pallet de acordo com as orientações de quantidade fornecidas pela etiqueta e coletor android.
O pallet será direcionado diretamente para a área de expedição, sem passar pelo processo de PTL (Put to Light), pois o processo de alocação já é realizado de forma eficiente pelo operador, garantindo que a quantidade total de itens esteja corretamente alocada.
O operador será informado no coletor de que o processo de PTL não será necessário, e que o pallet será conduzido diretamente para o stage, sem necessidade de separação adicional no PTL.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Picking Pallet Exceção  
**Score:** — (nome-topico) | **ID:** 03b9b88cbb5fdbbd

Para os pallets gerados no processo de Picking Pallet Exceção, será utilizado o seguinte layout de impressão:

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Picking Pallet Direto  
**Score:** — (nome-topico) | **ID:** 91a3f2d3af89a4cd

O processo de Picking Pallet Direto é utilizado para itens que, apesar de se enquadrarem no fluxo de Picking Fullcase, apresentam uma quantidade elevada de um mesmo SKU destinada a uma única remessa, tornando necessária a alocação em pallet.
O fluxo operacional segue as etapas descritas a seguir.
Fluxo Operacional de Picking Pallet
Na tela de Picking Fullcase, será disponibilizada uma aba exclusiva para o Picking Pallet, permitindo que o operador selecione esse tipo de picking de forma independente.
Ao acessar a aba de Picking Pallet, o WCS exibirá as tarefas que foram enviadas para esse processo na integração.
O operador seguirá o um processo de coleta parecido com a do Fullcase descrito anteriormente, realizando:
Leitura do endereço de picking
Coleta dos itens
Etiquetagem de todos os volumes
Confirmação da quantidade
Leitura da UC de pallet
O pallet será direcionado diretamente para a área de expedição (rampa de destino), sem passar pelo sorter.
Parâmetro de Paletização por Transportadora
Caso o parâmetro de paletização por transportadora esteja ativo:
O operador não deverá realizar o processo de Aloca Pallet
Somente a leitura da etiqueta de UC no PRIX fixo no final da rampa.
O WCS considerará todos os volumes como expedidos, atualizando automaticamente o dashboard operacional
Desta forma o WCS irá integrar todas as etiquetas vinculadas a uc na integração de aloca pallet.
Caso o parâmetro esteja inativo:
O operador será informado no coletor de que o processo de Alloca Pallet não será necessário
Será exigida apenas a leitura de UC do pallet no Prix, ao final da rampa
O WCS considerará todos os volumes como expedidos, atualizando automaticamente o dashboard operacional

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Heading:** Picking Pallet  
**Score:** — (nome-topico) | **ID:** b1368d84ce73a607

*Nesse momento não colocar sobre as posições e sim por ondas, cada cara pega um tipo de matriz e coloca no stage e o cara na expedição não fica ocioso e vai (MATRIZ ATE 3)
Picking
Pegaríamos de todas as posições os pedidos de uma vez(por onda). mais pesados primeiro, e colocaria no stage no chão certo na área de PTP. Para isso nosso sistema vai pegando cada matriz uma por vez de todos os pedidos de uma vez e coloca no stage especifico (ele teria que enviar ou cadastrar as posições dos sku para fazermos isso para direcionarmos o melhor trajeto de picking por ele, o picking não vai ser por pedido e sim por onda). Seria necessário mapeamento do pesado para os mais leves , os mais pesados sendo mais perto do PTP, ele pega todos os pesados necessários e leva pro stage. Além do picking map do mais pesadfo pro mais leve ele terá a matriz de fragilizade aplicada para o picking pallet. Picking map deve ser feito baseado em corredores por matriz e curvas mais perto

---
**Origem:** [I26.] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Heading:** Picking Pallet  
**Score:** — (nome-topico) | **ID:** e6487f0de4fd2e3e

The pallet picking will be controlled by Velox, where we would receive an integration with the order waves. These waves would be divided into 3 types of picking tasks according to the fragility matrix, one for each operator.
First picking: would be of all class 3 items (heavy).
Second picking: would be of all class 2 items (medium).
Third picking: would be of all class 1 items (fragile).
Flow:
The operator with a handheld collector will receive the pallet picking demand of a specific matrix. We will receive a product registration integration from the WMS so that Velox has the intelligence of where each item is. With this data, Velox will calculate the best picking route/sequence that must be followed aiming at operational productivity and taking into account the cubing of the items to fit in this picking pallet of the requested matrix. After this, the operator with a collector will pass by each position scanning the items requested on the Velox screen. When all items are collected, Velox will notify that the operator must head to shipping and allocate the pallet in the respective stage of that matrix.
Obs: The stage position is only released when all items contained in it are removed, thus automatically freeing the position for the allocation of a new pallet of that specific matrix.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Picking Pallet Exceção  
**Score:** — (nome-topico) | **ID:** 0b2e6364e86579ea

O processo de Picking Pallet Exceção é utilizado para itens que, apesar de se enquadrarem no processo de picking exceção, possuem uma quantidade elevada de um mesmo item para um único pedido, o que implica na necessidade de alocação em pallet. O fluxo operacional segue as etapas descritas a seguir:
Fluxo Operacional de Picking Pallet Exceção:
Dentro da tela de Picking Exceção, será disponibilizada uma aba exclusiva para o Picking Pallet Exceção, permitindo que o operador selecione esse tipo de picking de forma independente.
Ao acessar a aba de Picking Pallet Exceção, o WCS exibe as tarefas que atinge a quantidade mínima de pallet cadastrada.
Para esses casos, o sistema gera apenas uma etiqueta para o pallet, de forma semelhante ao processo de Full Case, mas com a diferenciação para pallets.
A etiqueta impressa deve conter informações detalhadas sobre o endereço de alocação, número de caixas que devem ser alocadas no pallet e a ordem do pallet no carregamento, além de qual área de expedição será destinado.
O operador segue o mesmo processo de coleta manual descrito anteriormente, realizando a leitura do endereço para identificar o local que ele está coletando os itens, então a leitura da etiqueta de pallet impressa no início da tarefa e finalmente a leitura do código de produto para validar que de fato está retirando o item correto, e então coleta os itens preenchendo o pallet de acordo com as orientações de quantidade fornecidas pela etiqueta e coletor android.
O pallet será direcionado diretamente para a área de expedição, sem passar pelo processo de PTL (Put to Light), pois o processo de alocação já é realizado de forma eficiente pelo operador, garantindo que a quantidade total de itens esteja corretamente alocada.
O operador será informado no coletor de que o processo de PTL não será necessário, e que o pallet será conduzido diretamente para o stage, sem necessidade de separação adicional no PTL.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Picking Pallet Exceção  
**Score:** — (nome-topico) | **ID:** 6b76d4ae708692a4

Para os pallets gerados no processo de Picking Pallet Exceção, será utilizado o seguinte layout de impressão:
