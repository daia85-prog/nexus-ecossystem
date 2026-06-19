# inventario.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo minerador -->

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Distribuição uniforme  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O sistema terá a capacidade de cadenciar a produção em cada saída, de modo a distribuir os produtos de forma equilibrada, balanceando a produção em cada uma delas.
Em outras palavras, o sistema da Invent será capaz de estabelecer um critério de direcionamento dos itens em função da demanda dos pedidos. Por exemplo: Em uma onda que contêm 2 pedidos com 5 itens de um único SKU, cada passagem de um volume do mesmo SKU sobre o Portal de leitura do Sorter será distribuído pelo sistema Invent de forma balanceada.
O objetivo principal desta funcionalidade é aplicar uma regra de balanceamento dos volumes em função das demandas de cada saída, evitando assim uma sobrecarga de desvio de itens/hora em uma única saída (a não ser que a regra não possa ser aplicada para aquela saída em específico).

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Classificação do Resultado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Compatível — quando a identificação da etiqueta e da IA convergem para a mesma loja/produto. Caixa segue para a rampa/PTL prevista.
Suspeita de Divergência — quando há desacordo entre as duas leituras. Caixa entra na regra de decisão por prioridade.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Inventário de Estoque  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O inventário de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total (auditoria de todos os endereços) ou de forma parcial (auditoria de itens/endereços selecionados pelo operador).

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Inventário Total  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No cenário de auditoria total, o supervisor deve criar a auditoria total, e o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Total”.
Seleciona qual auditoria ele irá realizar de acordo com as auditorias criadas
O WCS solicita que o operador realize a leitura de todas as posições de estoque que possuam itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU de todos os itens ou de somente um item e informa a quantidade de acordo com a auditoria criada.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; e
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços em que tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência (diferença) entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Inventário Cíclico  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No cenário de Inventário Cíclico, o supervisor seleciona itens ou posições específicas que ele deseja auditar. O sistema terá opção de busca para facilitar a localização dos itens desejados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do Processo – 1ª contagem
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Cíclico”.
O WCS apresenta uma lista de todas os Inventários Cíclicos criados, permitindo que o operador selecione qual ele quer iniciar.
o WCS exibe os endereços a serem visitados para a auditoria.
O operador realiza a leitura do primeiro endereço.
O operador realiza a leitura do SKU de todos os itens presentes naquela posição.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Caso seja selecionado um endereço, o sistema deverá realizar a auditoria apenas da posição onde o processo foi iniciado. Para as demais posições nas quais o item esteja alocado, o sistema deverá considerar o saldo sistêmico atual de cada posição para fins de envio da integração de ajuste de inventário.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; 0065
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços onde tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário - Formulário.docx`  
**Heading:** Inventário de Estoque  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O inventário de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total (auditoria de todos os endereços) ou de forma parcial (auditoria de itens/endereços selecionados pelo operador).

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário - Formulário.docx`  
**Heading:** Inventário Total  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No cenário de auditoria total, o supervisor deve criar a auditoria total, e o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Total”.
Seleciona qual auditoria ele irá realizar de acordo com as auditorias criadas
O WCS solicita que o operador realize a leitura de todas as posições de estoque que possuam itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU de todos os itens ou de somente um item e informa a quantidade de acordo com a auditoria criada.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; e
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços em que tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Claud considerar isso: Saldo Sistêmico pré contagem
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência (diferença) entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário - Formulário.docx`  
**Heading:** Inventário Cíclico  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No cenário de Inventário Cíclico, o supervisor seleciona itens ou posições específicas que ele deseja auditar. O sistema terá opção de busca para facilitar a localização dos itens desejados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do Processo – 1ª contagem
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Cíclico”.
O WCS apresenta uma lista de todas os Inventários Cíclicos criados, permitindo que o operador selecione qual ele quer iniciar.
o WCS exibe os endereços a serem visitados para a auditoria.
O operador realiza a leitura do primeiro endereço.
O operador realiza a leitura do SKU de todos os itens presentes naquela posição.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Caso seja selecionado um endereço, o sistema deverá realizar a auditoria apenas da posição onde o processo foi iniciado. Para as demais posições nas quais o item esteja alocado, o sistema deverá considerar o saldo sistêmico atual de cada posição para fins de envio da integração de ajuste de inventário.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; 0065
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços onde tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Claude considerar isso Saldo sistêmico pré contagem
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário1.docx`  
**Heading:** Inventário de Estoque  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O inventário de estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total (auditoria de todos os endereços) ou de forma parcial (auditoria de itens/endereços selecionados pelo operador).

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário1.docx`  
**Heading:** Inventário Total  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No cenário de auditoria total, o supervisor deve criar a auditoria total, e o operador realiza a verificação de todas as posições de estoque que possuem itens alocados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Total”.
Seleciona qual auditoria ele irá realizar de acordo com as auditorias criadas
O WCS solicita que o operador realize a leitura de todas as posições de estoque que possuam itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU de todos os itens ou de somente um item e informa a quantidade de acordo com a auditoria criada.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; e
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços em que tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência (diferença) entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - ESPECIFICACAO DE SOFTWARE - Inventário1.docx`  
**Heading:** Inventário Cíclico  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No cenário de Inventário Cíclico, o supervisor seleciona itens ou posições específicas que ele deseja auditar. O sistema terá opção de busca para facilitar a localização dos itens desejados.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do Processo – 1ª contagem
O operador realiza o login no WCS utilizando o coletor Android.
Após o login, o operador acessa a tela de Inventário de Estoque e seleciona a opção “Inventário Cíclico”.
O WCS apresenta uma lista de todas os Inventários Cíclicos criados, permitindo que o operador selecione qual ele quer iniciar.
o WCS exibe os endereços a serem visitados para a auditoria.
O operador realiza a leitura do primeiro endereço.
O operador realiza a leitura do SKU de todos os itens presentes naquela posição.
Regra: o WCS não deve exibir detalhes do endereço auditado (ex.: SKU esperado e/ou quantidade sistêmica), de forma a não induzir a contagem.
Posição vazia:
Se o operador encontrar uma posição vazia, ele deve bipar o endereço três vezes, e o sistema deve exibir um aviso de posição vazia.
Caso seja selecionado um endereço, o sistema deverá realizar a auditoria apenas da posição onde o processo foi iniciado. Para as demais posições nas quais o item esteja alocado, o sistema deverá considerar o saldo sistêmico atual de cada posição para fins de envio da integração de ajuste de inventário.
Ao final da 1ª contagem, o WCS deve disponibilizar um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema. O WCS deve permitir:
Impressão do relatório; 0065
Exportação em Excel e PDF.
Caso exista divergência em qualquer endereço, o WCS deve exibir um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
A 2ª contagem deve contemplar somente os endereços onde tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo de contagem seguirá o mesmo padrão descrito na 1ª contagem (leitura de endereço e leitura dos SKUs presentes, sem exibição de saldo sistêmico).
Ao final da 2ª contagem, o WCS deve disponibilizar um novo relatório de conciliação.
Caso ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e deve contemplar somente os endereços que permaneceram divergentes após a 2ª contagem, ou seja, onde ainda exista divergência (entre o resultado da 1ª e da 2ª contagem), o WCS deve exibir um pop-up de confirmação para início da 3ª contagem.
Ao final da 3ª contagem, o WCS deve perguntar ao usuário (supervisor) se será necessária uma validação final direcionada (auditoria adicional) em um ou mais endereços específicos:
Se não: o sistema deve disponibilizar o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS deve exibir a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais endereços devem passar por validação final.
Após a validação final, o WCS deve disponibilizar um relatório completo, contendo no mínimo:
Resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável);
Endereços auditados e seus resultados por contagem;
Identificação dos operadores responsáveis por cada contagem/endereço;
Divergência consolidada (físico × sistêmico).
Na tela do relatório (ou tela de encerramento do inventário), o supervisor poderá aceitar/confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

ESPECIFICAÇÃO DE SOFTWARE
PROJETO BELEZA
REV. 5
Apresentamos a seguir a especificação de software referente à funcionalidade de Inventário de Estoque para o sistema WCS do projeto Beleza – I25.9043 (C&A).
Agradecemos antecipadamente pela oportunidade e nos colocamos à disposição para quaisquer esclarecimentos que se fizerem necessários.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Criação e Configuração do Inventário  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A criação dos inventários é uma atividade restrita ao nível de acesso. Por meio da tela de Inventário de Estoque do WCS, o supervisor configura os parâmetros do inventário antes de disponibilizá-lo para execução pelos operadores. A funcionalidade busca um equilíbrio entre controle e simplicidade operacional, evitando configurações excessivamente complexas sem abrir mão da segurança do processo.
Fluxo de criação do inventário
O supervisor realiza login no WCS e acessa a tela de Inventário de Estoque.
Seleciona a modalidade do inventário a ser criado: Total ou Cíclico.
Para o Inventário Cíclico, seleciona os itens ou as posições específicas que deseja auditar, utilizando a opção de busca disponível para facilitar a localização. Para o Inventário Total, o escopo abrange automaticamente todas as posições com itens alocados.
Define a regra de bipagem que os operadores deverão seguir: bipar item a item, ou informar a quantidade e bipar o item uma única vez.
Informa a quantidade de operadores que participarão do inventário. Com base nessa informação, o WCS dividirá automaticamente o escopo em seções.
Confirma a criação. O inventário passa a ficar disponível na lista de inventários para execução pelos operadores designados.
Validações na criação
Para garantir a integridade do processo, o WCS aplica validações simples no momento da criação:
Um inventário Total somente poderá ser iniciado com a operação parada e sem reserva de saldo nas posições; o sistema sinaliza essa pré-condição ao supervisor.
Não é permitido criar um inventário sem ao menos uma posição ou item no escopo (no caso do Cíclico).
A quantidade de operadores informada deve ser maior que zero, para que a divisão em seções seja possível.
Essas validações compõem um meio-termo eficiente e seguro: são suficientes para evitar inconsistências operacionais relevantes, sem introduzir complexidade desnecessária no fluxo de criação.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Inventário de Estoque  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Inventário de Estoque tem como objetivo garantir a precisão das informações de estoque mantidas pelo sistema WCS. O processo pode ser realizado de forma total (auditoria de todos os endereços) ou de forma parcial/cíclica (auditoria de itens ou endereços selecionados pelo supervisor).
Independentemente da modalidade, o processo é conduzido por meio de coletor Android integrado ao WCS e segue o princípio de não indução da contagem: o sistema não exibe ao operador o SKU esperado nem a quantidade sistêmica da posição auditada.
Snapshot do saldo sistêmico
Para fins de comparação com a contagem física, o saldo sistêmico é congelado (snapshot) pelo WCS. No Inventário Total, o snapshot é global e ocorre na criação do inventário, uma vez que esta modalidade é iniciada com a operação totalmente parada e sem reserva de saldo. No Inventário Cíclico, o snapshot é por posição, no momento da leitura do endereço pelo operador, preservando a precisão da comparação em ambiente operacional ativo.
Divisão do trabalho entre operadores
A divisão do escopo entre operadores é híbrida: o WCS parte da divisão por zona física e equaliza a carga de trabalho quando identifica que uma zona possui peso significativamente maior que as demais, sempre respeitando o layout para evitar o cruzamento entre operadores. Essa abordagem combina o respeito à topologia do armazém com o equilíbrio de carga.
Identidade do operador entre contagens
O bloqueio do mesmo operador entre contagens é configurável por parâmetro. O comportamento padrão recomendado é impedir que a 2ª contagem de uma posição seja feita por quem realizou a 1ª, reduzindo o viés cognitivo; quando não houver operadores suficientes, o parâmetro permite flexibilizar essa regra.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Inventário Total  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No cenário de auditoria total, o supervisor cria a auditoria total, e o operador realiza a verificação de todas as posições de estoque que possuem itens alocados. Esta modalidade é iniciada com a operação totalmente parada e sem reserva de saldo nas posições.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher uma das opções a seguir:
Bipar item a item, ou
Informar a quantidade de itens e bipar o item uma única vez.
Além disso, o supervisor deve informar quantos operadores irão realizar o inventário. Com base nessa informação, o WCS dividirá o inventário em seções para garantir um melhor controle e distribuição das tarefas entre os operadores.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, acessa a tela de Inventário de Estoque e seleciona a opção 'Inventário Total'.
Seleciona qual auditoria irá realizar, de acordo com as auditorias criadas.
O WCS solicita que o operador realize a leitura de todas as posições de estoque que possuam itens alocados.
Para cada posição lida, o operador realiza a leitura do SKU de todos os itens, ou de somente um item, e informa a quantidade conforme a auditoria criada.
Regra de não indução: o WCS não exibe detalhes do endereço auditado, como SKU esperado ou quantidade sistêmica.
Posição vazia: caso o operador encontre uma posição vazia, deve bipar o endereço três vezes, e o sistema exibe um aviso de posição vazia.
Ao final da 1ª contagem, o WCS disponibiliza um relatório de conciliação, comparando o resultado da contagem física com o saldo registrado no sistema, permitindo impressão e exportação em Excel e PDF. Caso exista divergência em qualquer endereço, o WCS exibe um pop-up de confirmação para início da 2ª contagem (recontagem).
2ª contagem (recontagem)
Contempla somente os endereços em que tenha sido identificada divergência entre o valor auditado (contagem física) e o valor sistêmico.
O processo segue o mesmo padrão da 1ª contagem, sem exibição de saldo sistêmico.
Ao final, o WCS disponibiliza um novo relatório de conciliação.
Caso ainda exista divergência, o WCS exibe pop-up de confirmação para início da 3ª contagem.
3ª contagem (última oficial)
A 3ª contagem é a última contagem oficial e contempla somente os endereços que permaneceram divergentes após a 2ª contagem. Ao final, o WCS pergunta ao supervisor se será necessária uma validação final direcionada em um ou mais endereços específicos:
Se não: o sistema disponibiliza o relatório consolidado do inventário, contemplando todas as contagens.
Se sim: o WCS exibe a lista de endereços auditados na 3ª contagem para que o supervisor selecione quais devem passar por validação final.
Validação Final
A validação final é uma etapa de fechamento conduzida pelo supervisor, e não pelo operador. Por ter caráter analítico e decisório, nesta etapa o saldo sistêmico é exibido, permitindo ao supervisor uma análise mais direcionada, com plena visibilidade do histórico de contagens.
Na tela do relatório, ou na tela de encerramento do inventário, o supervisor poderá aceitar e confirmar o inventário para que o WCS envie ao WMS a integração de ajuste, contendo o delta de divergência entre o estoque físico e o estoque sistêmico.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Inventário Cíclico  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No cenário de Inventário Cíclico, o supervisor seleciona itens ou posições específicas que deseja auditar, e o sistema disponibiliza opção de busca para facilitar a localização dos itens desejados. Diferentemente do Inventário Total, o Cíclico pode ocorrer com a operação em andamento.
Freeze de posições durante o Cíclico
Como a operação permanece ativa, o bloqueio das posições auditadas é feito por zona/seção: a seção designada ao operador permanece bloqueada enquanto ele realiza a contagem, equilibrando consistência e produtividade. Considera-se zona as áreas da automação (linha de picking ou museu) e seção os subagrupamentos dentro dessas áreas (postos de coleta). No Inventário Total este bloqueio não se aplica, pois a operação está totalmente parada.
Regra de bipagem:
Antes de iniciar a auditoria, o supervisor deve escolher entre bipar item a item ou informar a quantidade e bipar o item uma única vez, e informar quantos operadores participarão, para que o WCS divida o trabalho em seções.
Fluxo do processo – 1ª contagem
O operador realiza login no WCS utilizando o coletor Android.
Após o login, acessa a tela de Inventário de Estoque e seleciona a opção 'Inventário Cíclico'.
O WCS apresenta a lista de todos os Inventários Cíclicos criados, permitindo que o operador selecione qual deseja iniciar.
O WCS exibe os endereços a serem visitados para a auditoria.
O operador realiza a leitura do primeiro endereço e, em seguida, a leitura do SKU de todos os itens presentes naquela posição.
Regra de não indução: o WCS não exibe SKU esperado ou quantidade sistêmica do endereço auditado.
Posição vazia: o operador bipa o endereço três vezes, e o sistema exibe aviso de posição vazia.
Quando for selecionado um endereço cujo SKU também exista em outras posições não incluídas no escopo, o WCS alerta o supervisor e permite decidir se inclui ou não as demais posições. Caso o supervisor opte por não incluir todas, o sistema mantém o saldo sistêmico atual de cada posição não selecionada para fins de envio da integração de ajuste de inventário.
O fluxo de 2ª contagem, 3ª contagem e validação final segue o mesmo padrão descrito para o Inventário Total. Ao final, na tela do relatório ou de encerramento, o supervisor poderá aceitar e confirmar o inventário para que o WCS envie ao WMS a integração de ajuste com o delta de divergência.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Regras Complementares de Operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Além do fluxo principal de contagem, o WCS observará as regras abaixo para tratamento de situações de exceção durante o inventário.
Conflito entre Recall e Inventário
O Recall tem prioridade sobre o Inventário. Ao ser disparado em uma posição sob inventário, o WCS suspende o inventário daquela posição e libera o recall, registrando log da interrupção e marcando a posição como 'não auditada por recall' para reauditoria posterior.
Tratamento de item órfão
Caso o operador encontre em uma posição um SKU que sistemicamente não deveria estar ali, e o item bipado não estiver cadastrado na posição, o sistema bloqueia a operação e exige autenticação do supervisor para prosseguir, evitando a criação de saldo indevido por erro de bipagem.
Cancelamento de inventário
O cancelamento de um inventário em andamento exige justificativa obrigatória, por meio de campo livre ou seleção de motivos pré-definidos, garantindo rastreabilidade e auditoria.
Timeout de inventário aberto
O inventário não expira automaticamente. Após determinado período sem atividade, o sistema gera alerta visual e e-mail ao supervisor, mas o inventário permanece aberto, evitando o risco de perda de progresso em operações que podem se estender além do tempo médio de conclusão.
Retenção dos logs e do histórico de inventário
Os registros lógicos do inventário (identificador do inventário, posição, operador, tipo do evento, timestamp, saldo sistêmico e quantidade física registrada) serão mantidos pelo período mínimo de 3 (três) anos a partir da data de criação.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** Referência de Relatório do Inventário  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Ao final do processo, o WCS disponibilizará um relatório completo do inventário, disponível em duas versões: analítica, com o máximo de detalhe estratificada por endereço, e sintética, resumida por SKU. Ambas permitirão impressão e exportação em Excel e PDF. O relatório contemplará, no mínimo, o saldo sistêmico pré-contagem, os resultados da 1ª, 2ª e 3ª contagem (e da validação final, quando aplicável), a divergência estratificada por contagem, a identificação de qual contagem gerou cada registro, o usuário do operador responsável por cada contagem e a divergência consolidada.
A tabela abaixo apresenta a referência dos campos previstos para o relatório do inventário, com sua origem e descrição.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ MANHATTAM - Tradução AU06 - Pack ILPN Message.docx`  
**Heading:** Fluxos de Processo  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Recall da área de PBL ocorre sempre que há necessidade de recolher um item/lote específico da área de PBL de volta para o inventário rastreado por LPN.
O processo de recall ocorre fisicamente no WCS. Sempre que realizado, o WCS notifica o WM com um Pick to iLPN recall para que o inventário seja sistemicamente separado (picked) da localização virtual do PBL para um iLPN.
O WCS envia a mensagem CAMO_Pack_iLPN para o MAWM; o MAWM empacota (packs) o iLPN da localização WCS e realiza o putaway direcionado pelo usuário para a localização de destino.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ MANHATTAM - Tradução AU06 - Pack ILPN Message.docx`  
**Heading:** Validações  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

SE (IF) – Evento de mensagem MHE PACK ILPN.
E (AND)
inventário do item em “SourceLocationId.PickAllocationZoneId.Zones.AU01PBLZone=True,
Extended.EXT_ASN não é nulo,
ENTÃO (THEN)
❖ WM empacota o iLPN.
❖ WM realiza o Putaway do iLPN
SENÃO (ELSE)
ENTÃO (THEN)
❖ WM não empacota o iLPN.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - GEMINI.docx`  
**Heading:** Priorização - OK  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Situação Atual: A prioridade de pedidos enviada pelo SAP no JSON não é atualmente processada ou respeitada pelo WCS. A regra de priorização da Invent é complexa e executada em tempo real.
Decisões:
A priorização manual será MANTIDA na interface do sistema Invent para permitir o tratamento de exceções operacionais.
A lógica inicial de prioridade definida pelo SAP na criação das OTs será mantida. Não haverá repriorização de OTs já criadas via integração entre SAP e Invent, devido à alta complexidade de desenvolvimento.
No chão de fábrica, as caixas são confirmadas pelo critério FIFO (First-In, First-Out) da criação da ordem.

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - Descritivo Funcional Aditivo - Pallets Com Ocorrências e liberação de etiquetas.docx`  
**Heading:** Contexto da Alteração  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Um pallet pode acumular ocorrências durante a coleta — divergências de quantidade, avarias ou não conformidades — que impedem sua integração ao WMS. Sem tratamento sistêmico, esses pallets causam dois problemas principais:
Bloqueio indevido da liberação da próxima matriz, pois seus volumes pendentes são contabilizados junto aos demais;
Permanência em área produtiva sem sinalização clara, gerando acúmulo de retrabalho operacional.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF25 – Gestão de inventário  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No WCS Velox deve ser possivel consultar os dados de todos os pallets armazenados através da lista de inventario, exibindo as informações dos produtos armazenados em cada zona, como sua data de expiração, seu status e sua localização.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF29 – Configuração dos modos de operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS Velox deve permitir a alteração do modo de operação do mesmo, alterando entre contingência, online e inventario.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Regra dos portais de entrada no sistema  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Apresenta as regras de entrada de pallet no sistema. Esta regra é chamada sempre que o controlador do transportador informar ao ActionProcessor da chegada de um novo pallet.
Essa regra inicial serve apenas para testar os três estados do WCS:
Online;
Em contingência;
Em inventario.
A partir dela cada uma das sub-regras especificas a cada um dos estados do WCS será chamado. Os detalhes desta regra estão detalhados abaixo:
O primeiro estado do WCS a ser testado é o ‘Online’. Caso o WCS esteja neste modo, a sub-regra de entrada online é chamada.
O segundo estado do WCS a ser testado é o ‘Em contingência’. Caso o WCS Velox esteja neste modo, a sub-regra de entrada em contingência é chamada.
O terceiro estado do WCS a ser testado é o ‘Em inventário’. Caso o WCS esteja nesse modo, a sub-regra de entrada em inventário é chamada.
No final da regra é retornado o destino do pallet que foi resultado da sub-regra de entrada que foi chamada de acordo com o estado do WCS.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Regra de entrada em inventario  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Quando o sistema está em modo de inventario nenhum pallet pode passar pelo portal de entrada. O tratamento é feito diretamente pelo PLC que impede a entrada dos pallets.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Alerta de célula vazia  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF25 – Gestão de inventário  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

No WCS Velox deve ser possivel consultar os dados de todos os pallets armazenados através da lista de inventario, exibindo as informações dos produtos armazenados em cada zona, como sua data de expiração, seu status e sua localização.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF29 – Configuração dos modos de operação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS Velox deve permitir a alteração do modo de operação do mesmo, alterando entre contingência, online e inventario.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Regra dos portais de entrada no sistema  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Apresenta as regras de entrada de pallet no sistema. Esta regra é chamada sempre que o controlador do transportador informar ao ActionProcessor da chegada de um novo pallet.
Essa regra inicial serve apenas para testar os três estados do WCS:
Online;
Em contingência;
Em inventario.
A partir dela cada uma das sub-regras especificas a cada um dos estados do WCS será chamado. Os detalhes desta regra estão detalhados abaixo:
O primeiro estado do WCS a ser testado é o ‘Online’. Caso o WCS esteja neste modo, a sub-regra de entrada online é chamada.
O segundo estado do WCS a ser testado é o ‘Em contingência’. Caso o WCS Velox esteja neste modo, a sub-regra de entrada em contingência é chamada.
O terceiro estado do WCS a ser testado é o ‘Em inventário’. Caso o WCS esteja nesse modo, a sub-regra de entrada em inventário é chamada.
No final da regra é retornado o destino do pallet que foi resultado da sub-regra de entrada que foi chamada de acordo com o estado do WCS.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Regra de entrada em inventario  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Quando o sistema está em modo de inventario nenhum pallet pode passar pelo portal de entrada. O tratamento é feito diretamente pelo PLC que impede a entrada dos pallets.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Alerta de célula vazia  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_01.docx`  
**Heading:** Inventário do Estoque  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Recebimento da Foto do Estoque
O WCS enviará a "Foto do Estoque" do AA.
Comparação com o Estoque SAP
O saldo do WCS será comparado com o saldo registrado no SAP.
Se os saldos forem iguais, o inventário será aprovado automaticamente.
Tratamento de Divergências
Caso haja diferença entre os saldos, será necessária uma nova análise do canal.
Será feita a rastreabilidade da divergência, verificando possíveis causas, como por exemplo caixas do canal que foram parar na área de rejeito.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Alerta de célula vazia  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O inventário é um processo fundamental para garantir a precisão no controle de estoque, permitindo que a BRF mantenha um acompanhamento detalhado dos produtos armazenados. Esse processo envolve a recirculação de pallets, realizada pela operação com o objetivo de conferir as quantidades e condições dos itens.
Inicialmente, o operador define os pallets, e então são selecionados e encaminhados para recircular.
Após a seleção, os pallets descem pela linha onde são analisados de forma criteriosa.
Nessa etapa, é verificada a integridade do material, bem como se as informações registradas no WMS correspondem ao que está fisicamente disponível. Essa análise minuciosa contribui para evitar divergências no estoque, como falta ou excesso de produtos, garantindo maior confiabilidade nos dados.
Concluída a contagem, os pallets são direcionados para o armazenamento em uma célula. Essa organização facilita a localização dos itens quando necessário, além de otimizar o espaço do armazém. A recirculação e análise constantes permitem que eventuais erros sejam corrigidos de forma ágil, promovendo a eficiência operacional e a tomada de decisões mais assertivas com base em um inventário atualizado e preciso.

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário / Pallets  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Referência – 4.6.5 Pallets por hora (WCS JDI – Interface Gráfica).
Referência – 4.6.6 Pallets por período (WCS JDI – Interface Gráfica).
Adicionar na tela existente as informações em forma de dashboard:
- Data;
- Tipo de movimentação: armazenagem ou retirada (SOI ou ROI);
- Produto congelado: quantidade de produtos desse tipo;
- Produto resfriado: quantidade de produtos desse tipo;
- Total: total de movimentação por hora.
Critérios de seleção
- Data inicial;
- Data final.
Funcionalidades
- Exportar excel: exporta dados para excel;
- Imprimir atual: somente o que está visível no grid;
- Imprimir tudo: imprimir todos os dados do grid;
- Fechar: fecha janela.
Tela referencia

---
**Origem:** [I22.170] 2025 — `PROJETO - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.3.docx`  
**Heading:** Inventário / Pallets  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Referência – 4.6.7 Movimentação de armazenagens/retiradas (WCS JDI – Interface Gráfica);
Referência – 4.6.8 Estatística por classe ABC (WCS JDI – Interface Gráfica);
Referência – 4.6.9 Estatística por tipo de temperatura (WCS JDI – Interface Gráfica);
Referência – 4.6.10 Estatística por corredor (WCS JDI – Interface Gráfica).
Novo dashboard que mostra a quantidade de armazenagens (SO), quantidade de retiradas (RO), quantidade de rejeitadas (NOK) e quantidade total de movimentações no AV (RO+SO) em determinado período.
Adicionar na tela existente as informações em forma de dashboard:
- Quantidade de armazenagens;
- Quantidade de retiradas;
- Quantidade de rejeitadas;
- Quantidade total de movimentações;
- Corredor.
Critérios de seleção
- Data inicial;
- Data final;
- Curva ABC;
- Temperatura.
Funcionalidades
- Exportar excel: exporta dados para excel;
- Imprimir atual: somente o que está visível no grid;
- Imprimir tudo: imprimir todos os dados do grid;
- Fechar: fecha janela.
Tela referencia

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Alerta de célula vazia  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Inventário / Posições  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Referência – 4.2 Localização (WCS JDI – Interface Gráfica).
Adicionar na tela existente a informação:
Classe ABC da posição.

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.2.docx`  
**Heading:** Inventário / Pallets  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Referência – 4.3.1 Pallet (WCS JDI – Interface Gráfica).
Adicionar na tela existente as informações:
Quantidade de itens no pallet;
Classe ABC do pallet;
Faixa;
Validade.
Inventário / Produtos
Referência – 4.3.2 Produto (WCS JDI – Interface Gráfica).
Adicionar na tela existente a informação:
Classe ABC do produto.
Inventário / Relatório de ocupações
Referência – 4.4.1 Corredor (WCS JDI – Interface Gráfica).
Adicionar na tela existente as informações:
Quantidade de posições bloqueadas;
Quantidade de posições ocupadas.
Dashboards
Localizações ocupadas por classe ABC
Referência – 4.6.4 Localizações ocupadas por classe ABC (WCS JDI – Interface Gráfica).
Novo dashboard deve mostrar as informações referentes as localizações no armazém divididas por classe ABC.
Informações
- Classe ABC;
- Total de localização que a classe ABC possui;
- Quantas localizações estão cheias;
- Total de localizações bloqueadas;
- Total de localizações livres;
- Percentual das localizações livres.
Funcionalidades
- Exportar excel;
- Fechar.
Tela referência:
Inventário / Pallets
Referência – 4.6.5 Pallets por hora (WCS JDI – Interface Gráfica).
Referência – 4.6.6 Pallets por período (WCS JDI – Interface Gráfica).
Adicionar na tela existente as informações em forma de dashboard:
- Data;
- Tipo de movimentação: armazenagem ou retirada (SOI ou ROI);
- Produto congelado: quantidade de produtos desse tipo;
- Produto resfriado: quantidade de produtos desse tipo;
- Total: total de movimentação por hora.
Critérios de seleção
- Data inicial;
- Data final.
Funcionalidades
- Exportar excel: exporta dados para excel;
- Imprimir atual: somente o que está visível no grid;
- Imprimir tudo: imprimir todos os dados do grid;
- Fechar: fecha janela.
Tela referencia
Inventário / Pallets
Referência – 4.6.7 Movimentação de armazenagens/retiradas (WCS JDI – Interface Gráfica);
Referência – 4.6.8 Estatística por classe ABC (WCS JDI – Interface Gráfica);
Referência – 4.6.9 Estatística por tipo de temperatura (WCS JDI – Interface Gráfica);
Referência – 4.6.10 Estatística por corredor (WCS JDI – Interface Gráfica).
Novo dashboard que mostra a quantidade de armazenagens (SO), quantidade de retiradas (RO), quantidade de rejeitadas (NOK) e quantidade total de movimentações no AV (RO+SO) em determinado período.
Adicionar na tela existente as informações em forma de dashboard:
- Quantidade de armazenagens;
- Quantidade de retiradas;
- Quantidade de rejeitadas;
- Quantidade total de movimentações;
- Corredor.
Critérios de seleção
- Data inicial;
- Data final;
- Curva ABC;
- Temperatura.
Funcionalidades
- Exportar excel: exporta dados para excel;
- Imprimir atual: somente o que está visível no grid;
- Imprimir tudo: imprimir todos os dados do grid;
- Fechar: fecha janela.
Tela referencia
Configuração geral
Referência – 4.7.1 Configuração geral (WCS JDI – Interface Gráfica).
Na tela de configurações estão situadas informações relevantes ao sistema. Estes necessitam serem determinados para o correto funcionamento.
Exemplos: tempo de permanência dos dados nas tabelas de histórico, configuração da tolerância de peso (valor e porcentagem), classificação do intervalo de peso (leve, médio e pesado) e configuração da quantidade de IDOCs parados no BC para envio de e-mail (aviso).
Tela referencia

---
**Origem:** [I22.170] 2025 — `PROJETO I22.170 - BRF EMBU - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula vazia  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I23.190] 2025 — `PROJETO I23.190 - BRF UBERLANDIA - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula vazia  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.

---
**Origem:** [I23.199] 2025 — `PROJETO I23.199 - BRF JUNDIAI - ESPECIFICACAO DE SOFTWARE E HARDWARE REV.1.docx`  
**Heading:** Alerta de célula vazia  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Esta ação é disparada pelo transelevador quando não existir carga para ser retirada da célula de origem de uma operação de retirada de carga. O WCS deverá processar este erro marcando a célula como ‘Erro – Deveria estar cheia’, verificando se o WCS estava ou não em modo inventário.
Caso esteja em modo de operação “Inventário”, o WCS não realiza nenhuma ação adicional, apenas marcando a célula como ‘Erro - Deveria estar cheia’. Caso contrário, o sistema deverá verificar se a ordem de saída do pallet é de expedição ou transferência. Caso afirmativo, o WCS deverá estornar todos os itens de ordens definidos para o pallet, deixando para o Processador de Ordens de Saída a função de alocar um novo pallet para as ordens.
Caso negativo, o WCS deverá enviar uma integração WMCATO para o SAP cancelando, indicando a impossibilidade de retirada do pallet do armazém.
