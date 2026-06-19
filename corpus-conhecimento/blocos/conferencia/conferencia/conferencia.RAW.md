# conferencia.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo minerador -->

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Estações de Separação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após a caixa ser iniciada no order start, será encaminhada para o 2º Nível do mezanino, a leitura da etiqueta será realizada através de um scanner fixo, para identificar se tem pedido a ser separado neste nível.
Após a caixa ser iniciada no order start, a caixa será encaminhada para o 2º Nível do mezanino, a leitura da etiqueta será realizada através de um scanner fixo, para identificar se tem pedido a ser separado neste nível.  caso haja algum SKU para ser separado neste nível, a caixa será desviada, se não houver nenhuma ordem de separação para o nível atual ela seguirá pela linha expressa para o 01º nível do mezanino, caso haja algum SKU para ser separado neste nível, a caixa será desviada, se não houver nenhuma ordem de separação para o nível atual ela seguirá pela linha expressa para o Térreo.
Após a separação dos produtos, o operador deve inserir a caixa novamente na linha em qualquer posição. Dessa forma, se a caixa for inserida antes do scanner de leitura, o sistema reconhecerá que ela já passou pela estação e a encaminhará diretamente para a próxima, evitando que a caixa passe pela mesma estação mais de uma vez.
É importante destacar que o sistema VELOX é responsável apenas pelo transporte e desvio das caixas nas estações. Portanto, toda a operação de separação, ressuprimento e verificação de falta de itens/SKUs nas estações é de (responsabilidade TPC).

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Estações de Separação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após a caixa ser iniciada no order start, será encaminhada para o 2º Nível do mezanino, a leitura da etiqueta será realizada através de um scanner fixo, para identificar se tem pedido a ser separado neste nível.
Após a caixa ser iniciada no order start, a caixa será encaminhada para o 2º Nível do mezanino, a leitura da etiqueta será realizada através de um scanner fixo, para identificar se tem pedido a ser separado neste nível.  caso haja algum SKU para ser separado neste nível, a caixa será desviada, se não houver nenhuma ordem de separação para o nível atual ela seguirá pela linha expressa para o 01º nível do mezanino, caso haja algum SKU para ser separado neste nível, a caixa será desviada, se não houver nenhuma ordem de separação para o nível atual ela seguirá pela linha expressa para o Térreo.
Após a separação dos produtos, o operador deve inserir a caixa novamente na linha em qualquer posição. Dessa forma, se a caixa for inserida antes do scanner de leitura, o sistema reconhecerá que ela já passou pela estação e a encaminhará diretamente para a próxima, evitando que a caixa passe pela mesma estação mais de uma vez.
É importante destacar que o sistema VELOX é responsável apenas pelo transporte e desvio das caixas nas estações. Portanto, toda a operação de separação, ressuprimento e verificação de falta de itens/SKUs nas estações é de (responsabilidade TPC).

---
**Origem:** [I20.108] 2021 — `ESPECIFICAÇÃO SOFTWARE - VIRTUAL PTW.docx`  
**Heading:** 3.5.4 FINALIZAÇÃO DE UMA POSIÇÃO  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV13.docx`  
**Heading:** 3.5.4 FINALIZAÇÃO DE UMA POSIÇÃO  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV14.docx`  
**Heading:** 3.5.4 FINALIZAÇÃO DE UMA POSIÇÃO  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Origem:** [I20.108] 2021 — `I20.108 - ESPECIFICAÇÃO SOFTWARE - VIRTUAL - REV16.docx`  
**Heading:** 3.5.4 FINALIZAÇÃO DE UMA POSIÇÃO  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet    atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet    atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet    atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - Quando visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - Quando visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - No momento em que visualmente o operador decidir que a altura do pallet    atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Fechamento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no tópico 5.1.1 os scanners também serão utilizados nesse processo no instante em que o operador realizar a leitura do código de barras referente ao fechamento de pallet.
O processo de fechamento de pallet poderá ser realizado da seguinte maneira:
Manual - Quando visualmente o operador decidir que a altura do pallet atingiu o limite, fará a leitura da etiqueta de fechamento de pallet.
O controle de cubagem será visual.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Rastreabilidade de Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Cada ação de conferência realizada na estação de conferência será registrada, incluindo as seguintes informações:
Detalhamento das Informações pertinentes para a tela de rastreabilidade da conferência:
Pedido: Número do pedido associado à separação.
Volume: Volume do pedido ou caixa associada, garantindo que cada item seja rastreado individualmente.
Strings Lidas no Coletor: Cada leitura realizada pelo coletor será registrada. Essas strings incluem os códigos de barras dos produtos e das caixas.
Log de Erro: Caso ocorra um erro durante a conferência (como falha na leitura do código de barras, erro de quantidade ou erro de localização), o erro será registrado no sistema com uma mensagem de erro específica, permitindo rastrear a causa da falha.
Status de Erro: O status de cada operação será registrado. Caso algum erro ocorra, o status será marcado como erro, e o sistema precisará gerar uma notificação para os operadores.
Número único da Coleta: Código da Pega
Usuário que realizou a conferência: Usuário que realizou a conferência ou liderança que liberou o volume.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Fluxo Operacional da Conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Abertura da Tela de Conferência
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume desviado (caixa) para iniciar o processo. O WCS exibe:
A lista de itens do volume.
O operador responsável pela coleta, a nível de item.
Validação dos Itens
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante a validação, o operador poderá:
Completar a caixa, caso o item faltante esteja disponível; ou
Finalizar a conferência com itens faltantes, utilizando o botão "Encerrar Conferência".
Corte de Itens Faltantes
Ao acionar o botão "Encerrar Conferência", o operador deverá selecionar a opção de corte. O WCS entenderá que os itens não lidos foram cortados e registrará essa informação no sistema.
Coleta de Itens Cortados
Caso o operador realize a coleta posterior do item faltante:
O operador poderá realizar a leitura do EAN ou EAN_DZ do produto.
O WCS entenderá que o item foi coletado e atualizará o volume.
Reimpressão de Etiqueta
Caso existam itens cortados, o WCS deverá reimprimir automaticamente a etiqueta do volume ao finalizar a conferência. A etiqueta reimpressa seguirá o mesmo layout padrão da etiqueta original (dados de roteamento e código de barras), sem discriminação de itens e quantidades. A nova etiqueta deverá substituir a etiqueta original do volume.

---
**Origem:** [I23.3503] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Heading:** Cross-Check Exceção  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para os volumes que devem ser desconsiderados (volumes que agregam mais de um SKU/produto, ou outro cenário viável para a operação Britânia), o WCS não irá realizar o Cross-Check do volume, ou seja, não será executada a validação do produto descrita no item 7.1. Ainda assim, o WCS irá desviar normalmente esses volumes para a rampa de destino configurada no Mapa de Sorter ativo, seguindo as demais validações de roteirização (rota, transportadora e etiqueta).
A identificação de que um volume não deve passar pelo Cross-Check ocorre por meio do campo “sku” da integração de Volumes (WMS → WCS), conforme descrito no item 6.1. Quando o WMS enviar o campo “sku” vazio (string vazia “ ”) ou como null, o Velox interpretará que aquele volume não possui um produto único associado para validação e, portanto, não deverá realizar o Cross-Check, desviando o volume diretamente para a rampa de destino sem a validação do produto.
Vale ressaltar que essa regra não se restringe aos volumes do tipo Multi: sempre que o campo “sku” for enviado como string vazia (“ ”) ou null, o Velox não realizará o Cross-Check de qualquer volume, mesmo que esse volume não seja Multi, desviando-o normalmente sem a validação do produto.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Cenários de Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Conferência Clientes Especiais (KIT SKU)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O pedido é definido como especial quando o campo especial é igual a TRUE na integração de pedidos. Nestes casos, o WCS exibe o campo “embalagem_especial” para instruir o operador sobre o manuseio.
Identificação: O operador recebe a caixa desviada e bipa o LPN.
Sinalização: O sistema alerta visualmente na tela que a conferência atual se trata de um Cliente Especial e apresenta as intruções de embalagem
Bipagem Inicial: O operador bipa o primeiro produto físico da caixa.
Identificação de Processo (Cego): O sistema identifica internamente se há apenas um ou mais SKUs no pedido, mas não exibe a composição ou as quantidades na tela, garantindo a integridade do processo de conferência cega.
Conferência Cega e Bipagem: O operador realiza a leitura unitária (item a item) de todas as unidades daquele SKU. O sistema valida silenciosamente cada bipagem contra o pedido real, sem revelar o saldo esperado ao operador.
Impressão Automática: Somente quando o operador atinge a quantidade total exata prevista para o SKU, o WCS imprime automaticamente a etiqueta específica daquele kit (layout Spark).
Tratativa de Faltas (Corte): Caso o operador finalize a leitura antes do sistema disparar a impressão (indicando falta física), ele deve acionar o botão de finalização manual.
Alerta de Divergência: O sistema informará que foram lidos menos itens do que o esperado e indicará o saldo faltante.
Decisão do Operador: O operador deve optar por:
Cortar: O sistema registra a falta, envia a confirmação parcial (INT-08) e permite seguir para o fechamento do kit/pedido.
Completar: O sistema retorna à tela anterior e aguarda a localização e bipagem dos itens faltantes para prosseguir.
Validação Crítica: O operador cola a etiqueta no saquinho e obrigatoriamente bipa a etiqueta impressa para confirmar o ensacamento.
Conclusão do Item: Após a bipagem da etiqueta do kit, o sistema valida o item. Se existirem outros SKUs no pedido, o processo se repete integralmente até a conclusão total.
Packing: Após finalizar todos os itens do pedido o sistema segue para a parte de packing descrita no tópico abaixo.

---
**Origem:** [I21.131] ADITIVO — `I21.131  - Aditivo Projeto PMB - Posto Virtual C1.docx`  
**Heading:** Processo de Conferência / Coleta de Itens  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Ao receber a caixa na estação de conferência, o operador deverá iniciar o processo através da leitura (bipagem) da caixa.
A partir desse ponto, o processo exige validação completa do conteúdo, contemplando dois conjuntos de itens:
Todos os volumes físicos contidos na caixa
Todos os itens previamente cadastrados nos endereços virtuais vinculados ao posto de conferência
A conferência deverá ser realizada de forma integral, sem exceções ou validações parciais. O operador deverá realizar a leitura de todos os itens, garantindo que tanto os itens dos postos convencionais quanto os itens dos endereços virtuais sejam devidamente considerados no processo.
A validação continua sendo suportada pela estrutura de BIN previamente cadastrada, garantindo rastreabilidade e consistência logística.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Fase 2 - Melhorias.docx`  
**Heading:** Conferência de Tarefas por Onda no Ponto Final da   Triagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Disponibilização de tela de conferência por onda no ponto final da triagem, com foco em controle operacional e rastreabilidade dos volumes gerados.
Fluxo de Leitura e Validação
A conferência do volume ocorre obrigatoriamente por meio da sequência de leituras abaixo, garantindo rastreabilidade completa do fechamento físico do volume:
Leitura da caixa plástica:
• Código com 12 caracteres, iniciando com A57
• Valida a identificação da caixa física utilizada na consolidação do volume
Leitura da etiqueta Manhattan
• Código com 12 caracteres, iniciando com A53
• Valida a associação do volume ao pedido/onda
Leitura do primeiro lacre
• Código numérico com 7 dígitos
Leitura do segundo lacre
• Código numérico com 7 dígitos
Regras de Conferência
• As leituras devem ocorrer na ordem definida pelo sistema.
• O sistema valida formato, tamanho e prefixo de cada leitura.
• Leituras fora do padrão devem ser rejeitadas com mensagem orientativa ao operador.
• Após a conclusão correta de todas as leituras:
  o O volume é removido da lista de pendentes
  o O volume é incluído na lista de conferidos
• A conferência atua exclusivamente como controle visual e operacional da onda, sem alterar o fluxo logístico.
Impactos
A funcionalidade de conferência por onda não gera:
• Impacto no envio de integrações
• Alterações em processos anteriores (coleta, separação, triagem)

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ BELEZA - ESPECIFICACAO DE SOFTWARE ADOTOVO - MELHORIAS.docx`  
**Heading:** Conferência de Tarefas por Onda no Ponto Final da Triagem  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Disponibilização de tela de conferência por onda no ponto final da triagem, com foco em controle operacional e rastreabilidade dos volumes gerados.
Fluxo de Leitura e Validação
A conferência do volume ocorre obrigatoriamente por meio da sequência de leituras abaixo, garantindo rastreabilidade completa do fechamento físico do volume:
Leitura da caixa plástica:
• Código com 12 caracteres, iniciando com A57
• Valida a identificação da caixa física utilizada na consolidação do volume
Leitura da etiqueta Manhattan
• Código com 12 caracteres, iniciando com A53
• Valida a associação do volume ao pedido/onda
Leitura do primeiro lacre
• Código numérico com 7 dígitos
Leitura do segundo lacre
• Código numérico com 7 dígitos
Regras de Conferência
• As leituras devem ocorrer na ordem definida pelo sistema.
• O sistema valida formato, tamanho e prefixo de cada leitura.
• Leituras fora do padrão devem ser rejeitadas com mensagem orientativa ao operador.
• Após a conclusão correta de todas as leituras:
  o O volume é removido da lista de pendentes
  o O volume é incluído na lista de conferidos
• A conferência atua exclusivamente como controle visual e operacional da onda, sem alterar o fluxo logístico.
Impactos
A funcionalidade de conferência por onda não gera:
• Impacto no envio de integrações
• Alterações em processos anteriores (coleta, separação, triagem)

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Parametrização de Conferência automática  
**Score:** 89.5 (fuzzy) | **Data:** 2026-06-19

Será implementada uma configuração no sistema permitindo à operação parametrizar os critérios de envio automático de paletes à fila de conferência. O sistema disponibilizará 4 parâmetros, que poderão ser utilizados de forma isolada ou combinada:
SKU: a operação seleciona um SKU específico para que todos os paletes que contenham esse SKU sejam encaminhados à conferência.
Loja Crítica: a operação seleciona uma ou mais lojas específicas para que todos os paletes destinados a essas lojas sejam encaminhados à conferência.
Aleatoriedade: a operação informa um percentual de paletes a serem conferidos de forma aleatória. O cálculo é baseado na quantidade de paletes fechados na última hora trabalhada.
Auditoria Direcionada: a operação seleciona sistemicamente uma posição PTL específica para que todos os paletes fechados naquela posição sejam obrigatoriamente conferidos.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Tela de Listagem de Paletes a Conferir  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Será criada tela dedicada à listagem de todos os paletes em fluxo de conferência. Os elementos mínimos da tela estão descritos no quadro abaixo:

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Tela de Conferência do Palete  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de conferência apresentará os volumes vinculados ao palete master selecionado e permitirá ao conferente realizar a leitura individual de cada volume físico presente no palete. A tela contará com a função de Reiniciar Conferência, que descarta todas as leituras realizadas no ciclo atual e reinicia o processo do zero. Não será mantido histórico das conferências reiniciadas, nem serão realizadas comparações entre tentativas.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Relatório de Conferência  
**Score:** 0.7 (embed) | **Data:** 2026-06-19

Será criado relatório com os registros de todas as conferências realizadas, contendo, no mínimo, os campos a seguir:

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Wave 2.docx`  
**Heading:** Tela de Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A estação de conferência tem como objetivo garantir a acuracidade da separação antes que os volumes sigam para a expedição. O WCS direcionará para esta estação os volumes que apresentarem divergências (ex: peso incorreto, se houver balança na linha), volumes marcados com shortpicking pendente, ou volumes selecionados aleatoriamente por amostragem para auditoria de qualidade.
Fluxo Operacional:
Abertura da Tela:
O operador acessa a tela de "Conferência" no desktop da estação.
O sistema aguarda a leitura do código de barras da etiqueta do volume (caixa).
Identificação do Volume:
O operador realiza a leitura da etiqueta da caixa.
O WCS carrega na tela a lista de todos os itens (SKU, Descrição e Quantidade) que deveriam estar contidos naquele volume.
Opcional (Configurável): O sistema pode operar em modo "Cego" (não mostra a quantidade) ou "Aberto" (mostra a quantidade esperada), conforme parametrização do cliente.
Validação dos Itens:
O operador deve realizar a leitura do código de barras (EAN/DUN) de cada item físico presente na caixa, um a um.
O sistema valida se o item lido pertence ao pedido e incrementa a contagem de "Conferido".
Se um item incorreto for lido, o sistema emite um alerta sonoro e visual de erro, impedindo a continuidade até que o item correto seja processado.
Tratativa de Divergências (Faltas):
Caso o operador finalize a leitura de todos os itens físicos e o sistema aponte que ainda faltam produtos (saldo pendente), o operador deverá selecionar uma das tratativas abaixo através de botões na tela:
Confirmar Corte (Shortpicking): O operador confirma que o item realmente não está na caixa. O WCS envia a confirmação de picking com corte para o WMS.
Gerar Novo Volume (Re-picking): O operador indica que o item falta, mas deve ser separado novamente. O WCS gera uma nova tarefa de separação para o item faltante no Order Start.
Finalização:
Se a conferência bater 100% com o esperado (ou após a tratativa das divergências), o sistema libera o volume.
Uma nova etiqueta de expedição pode ser impressa (se configurado) para selar a caixa, e o volume é liberado para seguir para a área de Sorter ou Expedição.
Botão de Reinício de Conferência (Reset de Volume): Será disponibilizada uma função (botão/comando) que permite ao operador ou supervisor descartar todo o progresso realizado na conferência atual de um volume.
Ação: Ao acionar esta opção, o sistema limpará todas as leituras parciais já feitas para aquele volume específico e reiniciar o processo do zero para o mesmo volume.
Resultado: O volume retornará ao status inicial de "Aguardando Conferência", permitindo que o operador inicie o processo de bipagem novamente do zero para a caixa completa, garantindo a integridade do processo em caso de erros operacionais durante a conferência.

---
**Origem:** [I24.117] ADITIVO — `I24.117 - Aditivo Projeto Barbecue - Dashboard Rampa Cheia - Rev.docx`  
**Heading:** Arquitetura de Dados — Nova Tabela LOG_RAMPA_CHEIA  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O PLC já possui lógica para detectar o estado do sensor de rampa cheia. Atualmente, esse sinal influencia o comportamento do Sorter em tempo real (recirculação ou rejeito do volume) mas não gera registro persistente com início e fim do evento.
Para viabilizar o cálculo de duração e o relatório histórico, é necessário:
PLC: configurar o envio de dois sinais ao WCS — um ao detectar rampa cheia e outro ao detectar a liberação da rampa — identificando a rampa em cada mensagem.
WCS Velox: criar a tabela LOG_RAMPA_CHEIA para registrar cada par de sinais recebidos do PLC, conforme estrutura abaixo.
Estrutura da tabela LOG_RAMPA_CHEIA:
Obs: enquanto timestamp_fim for nulo, o evento está ativo — a rampa está atualmente cheia. Isso é o que alimenta o status em tempo real da Tela 1.

---
**Origem:** [I20.1409] ADITIVO — `I20.1409 - Aditivo Projeto ST - Monitoramento de Leitura nas Bicas.docx`  
**Heading:** Consulta de Volumes Direcionados Ainda Não Lidos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Será disponibilizada ao operador a possibilidade de consultar, para uma bica específica, todos os volumes que foram direcionados pelo sorter (desviados na rampa de destino), mas que ainda não tiveram a etiqueta lida no ponto de coleta.
Essa funcionalidade permitirá ao operador verificar quais volumes ainda estão pendentes de leitura naquela bica.
O operador deverá selecionar uma bica específica.
O sistema deverá listar todos os volumes:
Que já tenham registro de saída na rampa para aquela bica;
Que ainda não possuam registro de leitura da etiqueta.
Para cada volume listado, deverá ser possível visualizar:
Identificação do volume;
Data e hora da saída na rampa;
Tempo decorrido desde o direcionamento.
A listagem deverá considerar exclusivamente volumes ainda pendentes de leitura na bica selecionada.
Assim que a leitura for realizada, o volume deverá deixar de constar na lista de pendentes.

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência é separada sistemicamente e fisicamente por três tipos de itens que são classificados como Frágeis, Não Frágeis e inconformes.
Todas as caixas deverão ser pesadas. O WCS não terá responsabilidade pela validação do peso, atuando apenas no envio da informação de peso por caixa embalada ao WMS após a conferência. Porém o WCS deve estar integrado com a balança exibindo o peso do volume em tempo real.
Os pedidos deverão ser conferidos por completo; por padrão, o operador bipará o SKU e informará manualmente a quantidade conferida, digitando o número correspondente. Contudo, caso o cliente necessite de uma conferência mais minuciosa, poderá habilitar, no cadastro do usuário, uma flag que altera o modo de conferência para leitura item a item, obrigando o operador a realizar a conferência individual de cada unidade.
O WCS possuirá um cadastro de caixas de expedição e, durante o processo, sempre irá sugerir automaticamente uma delas para utilização. Além disso, o WCS também considerará caixas reutilizáveis vinculadas aos produtos, permitindo sua utilização mediante leitura do código associado a essas caixas de acordo com o cadastro de produtos e embalagens dos produtos. Caso seja necessário utilizar uma caixa adaptada ou com dimensões fora do padrão cadastrado, o sistema permitirá que o operador informe manualmente um valor personalizado de dimensões, que será utilizado para continuidade do processo e integração após a finalização da conferência do volume.
OBS: Após o início da conferência, o WCS permitirá o fechamento do volume que será por meio do botão “Fechar Volume”. Ao acioná-lo, o sistema exibirá um pop-up de confirmação; caso o operador confirme, o WCS solicitará a seleção/identificação da caixa que será utilizada e registrará o peso e as dimensões informadas. Em seguida, o sistema retoma a conferência, permitindo a continuidade do processo com os itens faltantes (quando aplicável).
As caixas serão induzidas novamente com destino aos PTLs no final da linha.
Etiqueta pós conferência:

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Conferencia - Checkout  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Setor onde ocorre a conferência manual item a item, tendo as caixas na conferência somente pelos seguintes motivos, ShortPicking, Conferência forçada, Itens pendentes no volume, NOREAD BAL02, Peso maior BAL02, Peso menor BAL02, Peso maior BAL03, Peso menor BAL03, Volume não pendente de CrossCheck, Volume sem tara e Batch Picking.
O operador deve bipar a caixa para informar o número de volume na tela de conferência do computador que está no posto de conferência (Responsabilidade do cliente), o sistema informa o motivo de rejeito e o operador deve confirmar item a item, após a finalização da conferência a caixa é devolvida a linha para ir as fechadoras de caixa.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Conferencia - Checkout  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Setor onde ocorre a conferência manual item a item, tendo as caixas na conferência somente pelos seguintes motivos, ShortPicking, Conferência forçada, Itens pendentes no volume, NOREAD BAL02, Peso maior BAL02, Peso menor BAL02, Peso maior BAL03, Peso menor BAL03, Volume não pendente de CrossCheck, Volume sem tara e Batch Picking.
O operador deve bipar a caixa para informar o número de volume na tela de conferência do computador que está no posto de conferência (Responsabilidade do cliente), o sistema informa o motivo de rejeito e o operador deve confirmar item a item, após a finalização da conferência a caixa é devolvida a linha para ir as fechadoras de caixa.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1.docx`  
**Heading:** Conferencia - Checkout  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Setor onde ocorre a conferência manual item a item, tendo as caixas na conferência somente pelos seguintes motivos, ShortPicking, Conferência forçada, Itens pendentes no volume, NOREAD BAL02, Peso maior BAL02, Peso menor BAL02, Peso maior BAL03, Peso menor BAL03, Volume não pendente de CrossCheck, Volume sem tara e Batch Picking.
O operador deve bipar a caixa para informar o número de volume na tela de conferência do computador que está no posto de conferência (Responsabilidade do cliente), o sistema informa o motivo de rejeito e o operador deve confirmar item a item, após a finalização da conferência a caixa é devolvida a linha para ir as fechadoras de caixa.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados os pedidos que foram realizados shortpicking e franqueados que estiverem flag de conferência ativo.
Shortpicking
Para esse tipo de pedido o operador da estação de conferência, fará o tratamento deste pedido e somente após esse tratamento, MFC envia integração de confirmação de separação.
Franqueados
Cliente acionará um flag de todos os franqueados que deverão seguir para a conferência, esses tipos de franqueados seguirão para conferência independente da separação, esses pedidos serão conferidos e após a validação MFC, envia integração de confirmação de separação.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Estações de Conferência;  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em cada estação de conferência, 01 (um) Desktop + 1 (um) scanner auxiliará o Operador com os principais recursos necessários para a operação (Conferência de pedidos,    tratativa de rejeito, etc..)

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Estações de Conferência;  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em cada estação de conferência, 01 (um) Desktop + 1 (um) scanner auxiliará o Operador com os principais recursos necessários para a operação (Conferência de pedidos,    tratativa de rejeito, etc..)

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Estações de Conferência;  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em cada estação de conferência, 01 (um) Desktop + 1 (um) scanner auxiliará o Operador com os principais recursos necessários para a operação (Conferência de pedidos,    tratativa de rejeito, etc..)

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados os pedidos que foram realizados shortpicking e franqueados (flag)
Shortpicking
Para esse tipo de pedido o operador da estação de conferência, fara o tratamento para os itens de alta relevância, itens que não são considerados alta relevância, poderão seguir normalmente. Após esse tratamento, operador ao confirmar a conferência, VELOX envia integração de confirmação de separação.
Franqueados
Cliente enviara via integração a informação de todos os franqueados que deverão seguir para a conferência, esses tipos de franqueado seguirão para conferência independente da separação, esses pedidos serão conferidos e após a validação VELOX envia integração de confirmação de separação.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados os pedidos que foram realizados shortpicking e franqueados (Que estiverem com flag ativo)
Shortpicking
Para esse tipo de pedido o operador da estação de conferência, fara o tratamento para os itens de alta relevância (Alto índice de reclamação por falta), itens que não são considerados alta relevância, poderão seguir normalmente. Após esse tratamento, operador ao confirmar a conferência, VELOX envia integração de confirmação de separação dos itens separados para o pedido. Esses itens de alta relevância deverão vir identificados na integração.
Franqueados
Cliente enviará via integração a informação de todos os franqueados que deverão seguir para a conferência, esses tipos de franqueado seguirão para conferência independente da separação, esses pedidos serão conferidos e após a validação VELOX envia integração de confirmação de separação.
Operador terá a possibilidade de cadastrar, editar e excluir franqueados no sistema Velox, e também ativar/desativar flag que indica a necessidade de ir para conferência.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados os pedidos que foram realizados shortpicking e franqueados (Que estiverem com flag ativo)
Shortpicking
Para esse tipo de pedido o operador da estação de conferência, fara o tratamento para os itens de alta relevância (Alto índice de reclamação por falta), itens que não são considerados alta relevância, poderão seguir normalmente. Após esse tratamento, operador ao confirmar a conferência, VELOX envia integração de confirmação de separação dos itens separados para o pedido. Esses itens de alta relevância deverão vir identificados na integração.
Franqueados
Cliente enviará via integração a informação de todos os franqueados que deverão seguir para a conferência, esses tipos de franqueado seguirão para conferência independente da separação, esses pedidos serão conferidos e após a validação VELOX envia integração de confirmação de separação.
Operador terá a possibilidade de cadastrar, editar e excluir franqueados no sistema Velox, e também ativar/desativar flag que indica a necessidade de ir para conferência.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV0.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV1.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência é feita pelo operador, que pega a caixa da esteira e bipa o código do romaneio no MFC, o sistema irá mostrar as informações do pedido na tela, feito isso ele irá bipar os produtos no MFC, ao terminar de bipar os produtos o operador irá o MFC irá apresentar se a quantidade está correta ou não. Estando correta ele embala o pedido e envia a caixa para expedição, não estando correta a quantidade ele irá buscar o(s) produto que falta, bipar o mesmo e colocar na caixa, embalar o pedido e colocar a caixa para expedição. Caso não tenha o produto que está faltando no pedido o operador irá finalizar o pedido com corte e mandar para expedição.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV1.docx`  
**Heading:** Conferência PMB  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na tela Conferência PMB apresentada na figura 50, temos a tela que será disponibilizada para identificar divergências na separação do volume. Nessa tela disponibilizamos as opções: nova conferência, reiniciar conferência e finalizar conferência. Para conferência digitar o Número Volume e depois bipar os produtos.
Figura 50 - Utilitários - Conferência PMB
Após finalizar a leitura de todos os produtos, o sistema indicará se o volume está completo ou se possui alguma divergência, para auxiliar o operador na tratativa operacional da finalização do volume.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV3 - SEM PTW.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV4.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência é feita pelo operador, que pega a caixa da esteira e bipa o código do romaneio no MFC, o sistema irá mostrar as informações do pedido na tela, feito isso ele irá bipar os produtos no MFC, ao terminar de bipar os produtos o operador irá o MFC irá apresentar se a quantidade está correta ou não. Estando correta ele embala o pedido e envia a caixa para expedição, não estando correta a quantidade ele irá buscar o(s) produto que falta, bipar o mesmo e colocar na caixa, embalar o pedido e colocar a caixa para expedição. Caso não tenha o produto que está faltando no pedido o operador irá finalizar o pedido com corte e mandar para expedição.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Conferência PMB  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na tela Conferência PMB apresentada na figura 50, temos a tela que será disponibilizada para identificar divergências na separação do volume. Nessa tela disponibilizamos as opções: nova conferência, reiniciar conferência e finalizar conferência. Para conferência digitar o Número Volume e depois bipar os produtos.
Figura 50 - Utilitários - Conferência PMB
Após finalizar a leitura de todos os produtos, o sistema indicará se o volume está completo ou se possui alguma divergência, para auxiliar o operador na tratativa operacional da finalização do volume.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV10.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar  com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.
Serão direcionados para a conferencia, pedidos que foram integrados no sistema MFC porém não existem posições cadastradas para esse produto especifico, nesse caso esse pedido deve ser tratado na conferencia.
Na conferencia, o sistema MFC deverá ser configuravel para que o operador com o nivel de usuário especifico, consiga realizar a conferencia sem a necessidade de realizar a leitura de item a item.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar  com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.
Serão direcionados para a conferencia, pedidos que foram integrados no sistema MFC porém não existem posições cadastradas para esse produto especifico, nesse caso esse pedido deve ser tratado na conferencia.
Na conferencia, o sistema MFC deverá ser configuravel para que o operador com o nivel de usuário especifico, consiga realizar a conferencia sem a necessidade de realizar a leitura de item a item.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV4.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV5.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV6.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV7.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV8.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.
Serão direcionados para a conferencia, pedidos que foram integrados no sistema MFC porém não existem posições cadastradas para esse produto especifico, nesse caso esse pedido deve ser tratado na conferencia.
Na conferencia, o sistema MFC deverá ser configuravel para que o operador com o nivel de usuário especifico, consiga realizar a conferencia sem a necessidade de realizar a leitura de item a item.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV9.docx`  
**Heading:** Conferência - Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Nessa estação, deverá existir uma tela de conferência, onde ele pode validar  com um leitor se está correto o que está na caixa, o que está faltando e o motivo do rejeito.
Serão direcionados para a conferencia, pedidos que foram integrados no sistema MFC porém não existem posições cadastradas para esse produto especifico, nesse caso esse pedido deve ser tratado na conferencia.
Na conferencia, o sistema MFC deverá ser configuravel para que o operador com o nivel de usuário especifico, consiga realizar a conferencia sem a necessidade de realizar a leitura de item a item.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferênbcia + Relatorio.docx`  
**Heading:** Tela de Conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Ocultar o menu lateral ao abrir a tela de conferência, para maior área útil na visualização.
Inclusão de botão de retorno à tela inicial (Home).
Ao finalizar a Conferência deve ser exibido um pop para que seja informado qual foi o erro encontrado, categorizando nas seguintes opções:
Sobra: Utilizado quando for enviado mais itens que o previsto
Falta: Utilizado quando for enviado menos itens que o previsto
Inversão: Utilizado quando for enviado um item que não estava previsto
Tolerância: Utilizado quando todos os itens foram separados corretamente
Ao selecionar a categoria de erro o WCS deve solicitar “FA” e quantidade do item que ocasionou a falha podendo ser um item ou mais.
Comportamento por tipo de erro:
Sobra: solicitar “FA” e a quantidade excedente. OBS: O FA apontado como sobra deve constar na lista de picking vinculado a caixa
Falta: solicitar “FA” e a quantidade que faltou. O FA apontado como falta deve constar na lista de picking vinculado a caixa.
Inversão: solicitar “FA” Previsto que está faltando e o “FA” não previsto na lista de conferência e a quantidade coletada.
Tolerância: encerrar a conferência
Adaptação na tela Existente Inclusão de colunas:
Posto de separação correspondente ao item.
Operador responsável pela separação

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferência.docx`  
**Heading:** Contexto da solicitação do cliente  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O cliente informou que anteriormente utilizava uma tela antiga de conferência PMB (Figura 1), porém identificou limitações de usabilidade e controle de informações. Recentemente, foi encontrada uma nova tela de conferência (Figura 2), que apresentou melhor visualização, fluxo operacional mais intuitivo e recursos mais adequados ao processo atual.
A partir dessa identificação, o cliente manifestou o interesse em atualizar o sistema para adequar a interface e incorporar as funcionalidades disponíveis na nova tela. As alterações descritas a seguir têm como objetivo alinhar o comportamento da aplicação às expectativas do cliente, mantendo as regras de negócio originais e otimizando a experiência do usuário.
Figura 1 – Tela antiga (utilizada anteriormente pelo cliente)
Figura 2 – Nova tela proposta (modelo de referência para as melhorias)

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferência.docx`  
**Heading:** Inclusão do campo “Soma Total”  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Atualmente, a tela de conferência não apresenta um campo que consolide a soma total das quantidades registradas.
Será adicionado dois novos campos denominados “Total conferido” e “Total pedido” no final da coluna, responsável por exibir a soma total dos pacotes conferidos/pacotes no pedido.
O cálculo desse campo deverá:
Somar todas as quantidades conferidas, incluindo valores inteiros e fracionados (ex: 1, 0,5, 2,5).
Atualizar automaticamente o valor a cada nova leitura realizada.
Exibir o resultado no rodapé da tela, facilitando o acompanhamento do progresso da conferência.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Estações de Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Em cada estação de conferência, 01 (um) Desktop + 1 (um) scanner + 01 (uma) impressora de etiquetas, que auxiliará o Operador com os principais recursos necessários para a operação (Conferência de pedidos, tratativa de rejeito etc.) (Responsabilidade EMIS)

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.8.docx`  
**Heading:** Estações de Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Em cada estação de conferência, 01 (um) Desktop + 1 (um) scanner + 01 (uma) impressora de etiquetas, que auxiliará o Operador com os principais recursos necessários para a operação (Conferência de pedidos, tratativa de rejeito etc.) (Responsabilidade EMIS)

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.9.docx`  
**Heading:** Estações de Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Em cada estação de conferência, 01 (um) Desktop + 1 (um) scanner + 01 (uma) impressora de etiquetas, que auxiliará o Operador com os principais recursos necessários para a operação (Conferência de pedidos, tratativa de rejeito etc.) (Responsabilidade EMIS)

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Conferência e Fechamento das Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
Será uma linha tripla distribuída da seguinte forma:
1º (primeira linha) linha expressa - Caixas plásticas vindas da linha de separação dos 3 níveis.
2º (segunda linha) (Pós Picking) - Linha onde os conferentes irão fazer a conferência de 100% dos pedidos e substituição da caixa plástica para caixa de papelão, que será definida de acordo com a cubagem do pedido, e ao finalizar sela a caixa e coloca a caixa na linha expressa para ir até o sorter.
WMS - Quando o pedido não cabe na caixa de papelão que foi informada no início da operação, o operador gera uma nova etiqueta, imprime e fixa na caixa adicional.
VELOX – Operador deverá vincular essa nova caixa no pedido que está sendo conferido no momento.
3º (terceira linha - Caixas Vazias) que retornam para toda a operação novamente.
Após finalizar o processo de conferência, a caixa vazia deve retornar para cada nível de separação.
Scanner fixo faz a leitura do código de barras da caixa plástica, e o sistema automaticamente já identifica para onde essa caixa deverá ser desviada.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.2.docx`  
**Heading:** Conferência e Fechamento das Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
Impressora na estação de conferência.
Será uma linha tripla distribuída da seguinte forma:
1º (primeira linha) linha expressa - Caixas plásticas vindas da linha de separação dos 3 níveis.
2º (segunda linha) (Pós Picking) - Linha onde os conferentes irão fazer a conferência de 100% dos pedidos e substituição da caixa plástica para caixa de papelão, que será definida de acordo com a cubagem do pedido, e ao finalizar sela a caixa e coloca a caixa na linha expressa para ir até o sorter.
WMS - Quando o pedido não cabe na caixa de papelão que foi informada no início da operação, o operador gera uma nova etiqueta, imprime e fixa na caixa adicional.
VELOX – Operador deverá vincular essa nova caixa no pedido que está sendo conferido no momento.
3º (terceira linha - Caixas Vazias) que retornam para toda a operação novamente. Scanner fará a leitura da etiqueta (QRCode) após leitura as caixas serão desviadas para o nível correspondente.
Após finalizar o processo de conferência, a caixa vazia deve retornar para cada nível de separação.
Scanner fixo faz a leitura do código de barras da caixa plástica, e o sistema automaticamente já identifica para onde essa caixa deverá ser desviada.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Conferência e Fechamento das Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
Impressora na estação de conferência, responsabilidade da Invent.
Será uma linha tripla distribuída da seguinte forma:
1º (primeira linha) linha expressa - Caixas plásticas vindas da linha de separação dos 3 níveis.
2º (segunda linha) (Pós Picking) - Linha onde os conferentes irão fazer a conferência de 100% dos pedidos e substituição da caixa plástica para caixa de papelão, que será definida de acordo com a cubagem do pedido, e ao finalizar sela a caixa e coloca a caixa na linha expressa para ir até o sorter.
WMS - Quando o pedido não cabe na caixa de papelão que foi informada no início da operação, o operador gera uma nova etiqueta, imprime e fixa na caixa adicional.
VELOX – Operador deverá vincular essa nova caixa no pedido que está sendo conferido no momento.
3º (terceira linha - Caixas Vazias) que retornam para toda a operação novamente. Scanner fará a leitura da etiqueta (QRCode) após leitura as caixas serão desviadas para o nível correspondente.
Após finalizar o processo de conferência, a caixa vazia deve retornar para cada nível de separação.
Scanner fixo faz a leitura do código de barras da caixa plástica, e o sistema automaticamente já identifica para onde essa caixa deverá ser desviada.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Conferência e Fechamento das Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
Impressora na estação de conferência, responsabilidade da Invent.
Será uma linha tripla distribuída da seguinte forma:
1º (primeira linha) linha expressa - Caixas plásticas vindas das linhas de separação dos 3 níveis.
2º (segunda linha) (Pós Picking) - Linha onde os conferentes irão fazer a conferência de 100% dos pedidos e substituição da caixa plástica para caixa de papelão, que será definida de acordo com a cubagem do pedido, e ao finalizar sela a caixa e coloca a caixa na linha expressa para ir até o sorter.
WMS - Quando o pedido não cabe na caixa de papelão que foi informada no início da operação, o operador gera uma nova etiqueta, imprime e fixa na caixa adicional.
VELOX – Operador deverá vincular essa nova caixa no pedido que está sendo conferido no momento.
3º (terceira linha - Caixas Vazias) que retornam para toda a operação novamente.
Scanner fará a leitura da etiqueta (QRCode) após leitura as caixas serão desviadas para o nível correspondente.
Após finalizar o processo de conferência, a caixa vazia deve retornar para cada nível de separação.
Scanner fixo faz a leitura do código de barras da caixa plástica, e o sistema automaticamente já identifica para onde essa caixa deverá ser desviada.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Conferência e Fechamento das Caixas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
A impressão na estação de conferência, (Responsabilidade Invent).
Será uma linha tripla distribuída da seguinte forma:
1º (primeira linha - Linha expressa) - Caixas plásticas vindas da linha de separação dos 3 níveis.
2º (segunda linha - Pós Picking) - Linha onde os conferentes irão fazer a conferência de 100% dos pedidos e substituição da caixa plástica para caixa de papelão, que será definida de acordo com a cubagem do pedido, e ao finalizar a conferência, operador sela a caixa e coloca a caixa na segunda linha para ir até o sorter.
Quando o pedido não cabe na quantidade de caixas de papelão que foi informada no início da operação, o operador gera uma nova etiqueta, imprime e fixa na caixa adicional.
3º (terceira linha - Caixas Vazias) que retornam para toda a operação novamente. Scanner fará a leitura da etiqueta, após leitura as caixas serão desviadas para o nível correspondente.
Após finalizar o processo de conferência, a caixa vazia deve retornar para cada nível de separação.
Scanner fixo faz a leitura da etiqueta da caixa plástica, e o sistema automaticamente já identifica para onde essa caixa deverá ser desviada.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Estações de Conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em cada estação de conferência, 01 (um) Desktop + 1 (um) scanner + 01 (uma) impressora, que auxiliará o Operador com os principais recursos necessários para a operação (Conferência de pedidos, tratativa de rejeito etc.) (Responsabilidade EMIS)

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Estações de Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Em cada estação de conferência, 01 (um) Desktop + 1 (um) scanner + 01 (uma) impressora de etiquetas, que auxiliará o Operador com os principais recursos necessários para a operação (Conferência de pedidos, tratativa de rejeito etc.) (Responsabilidade EMIS)

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Estações de Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Em cada estação de conferência, 01 (um) Desktop + 1 (um) scanner + 01 (uma) impressora de etiquetas, que auxiliará o Operador com os principais recursos necessários para a operação (Conferência de pedidos, tratativa de rejeito etc.) (Responsabilidade EMIS)

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após os flowracks de produtos hospitalares e oncológicos, haverá um scanner e um desviador onde as regras serão:
Na tela de conferência haverá um botão de ligar e desligar o by-pass (Em caso de desligado as caixas de produtos oncológicos e hospitalares serão desviadas para conferência, em caso de ligado nenhuma caixa será desviada para conferência).
Na tela de conferência haverá um campo onde o operador pode selecionar um range de caixas que devem ser conferidas Ex: Se colocar o número 10 a decima caixa será desviada e conferida, se neste campo estiver como 1 todas as caixas de oncológicos e hospitalares devem ser conferidos.
Caixas de pedidos de amostra grátis e promocionais não deverão ser desviadas para conferência.
Se a caixa precisar ser conferida deverá aparecer em um PDV a tela de conferência, onde ao bipar a caixa aparecerá todos os produtos e quantidades referente ao pedido.
O operador deverá verificar visualmente se está correto e confirmar na tela do PDV antes de soltar a caixa na linha. Não há a necessidade de bipar item a item.
No caso de faltar algum produto, este pedido deverá ser corrigido, inserindo o produto faltante.

---
**Origem:** [I22.2241] 2022 — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após os flowracks de produtos hospitalares e oncológicos, haverá um scanner e um desviador onde as regras serão:
Na tela de conferência haverá um botão de ligar e desligar o by-pass (Em caso de desligado as caixas de produtos oncológicos e hospitalares serão desviadas para conferência, em caso de ligado nenhuma caixa será desviada para conferência).
Na tela de conferência haverá um campo onde o operador pode selecionar um range de caixas que devem ser conferidas Ex: Se colocar o número 10 a decima caixa será desviada e conferida, se neste campo estiver como 1 todas as caixas de oncológicos e hospitalares devem ser conferidos.
Caixas de pedidos de amostra grátis e promocionais não deverão ser desviadas para conferência.
Se a caixa precisar ser conferida deverá aparecer em um PDV a tela de conferência, onde ao bipar a caixa aparecerá todos os produtos e quantidades referente ao pedido.
O operador deverá verificar visualmente se está correto e confirmar na tela do PDV antes de soltar a caixa na linha. Não há a necessidade de bipar item a item.
No caso de faltar algum produto, este pedido deverá ser corrigido, inserindo o produto faltante.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
Teremos 02 estações de conferência por rua.
Nessa etapa pode acontecer também uma transferência/substituição dos itens para outras caixas, fardos para um melhor condicionamento para carregar a mercadoria no caminhão.
Caso seja necessária essa transferência/substituição de caixa ou fardo, será necessário a impressão de uma nova etiqueta.
Shortpicking
Operador fará o tratamento deste volume e tomará a decisão se completa o pedido com os itens faltantes ou se seguirá com a quantidade separada.
Após esse tratamento, o operador induz a caixa para o cubômetro.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
Teremos 02 estações de conferência por rua.
Nessa etapa pode acontecer também uma transferência/substituição dos itens para outras caixas, fardos ou até mesmo unificar, para um melhor condicionamento para carregar a mercadoria no caminhão.
Caso seja necessária essa transferência/substituição de caixa ou fardo, será necessário a impressão de uma nova etiqueta.
Shortpicking
Operador/Supervisor fará o tratamento deste volume e tomará a decisão se completa o pedido com os itens faltantes ou se seguirá com a quantidade separada.
Após esse tratamento, o operador induz a caixa para o cubômetro.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
Teremos 02 estações de conferência por rua.
Nessa etapa pode acontecer também uma transferência/substituição dos itens para outras caixas, fardos ou até mesmo, unificar as caixas ou fardos, para um melhor condicionamento para carregar a mercadoria no caminhão.
Caso seja necessária essa transferência/substituição de caixa ou fardo, será necessário a impressão de uma nova etiqueta.
Shortpicking
Operador/Supervisor fará o tratamento deste volume e tomará a decisão se completa o pedido com os itens faltantes ou se seguirá com a quantidade separada.
Após esse tratamento, o operador induz a caixa para o cubômetro.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
Teremos 02 estações de conferência por rua.
Nessa etapa pode acontecer também uma transferência/substituição dos itens para outras caixas, fardos ou até mesmo, unificar as caixas ou fardos, para um melhor condicionamento para carregar a mercadoria no caminhão.
Caso seja necessária essa transferência/substituição de caixa ou fardo, será necessário a impressão de uma nova etiqueta.
Shortpicking
Operador/Supervisor fará o tratamento deste volume e tomará a decisão se completa o pedido com os itens faltantes ou se seguirá com a quantidade separada.
Após esse tratamento, o operador induz a caixa para o cubômetro.

---
**Origem:** [I22.2505] 2022 — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
Teremos 02 estações de conferência por rua.
Nessa etapa pode acontecer também uma transferência/substituição dos itens para outras caixas, fardos ou até mesmo, unificar as caixas ou fardos, para um melhor condicionamento para carregar a mercadoria no caminhão.
Caso seja necessária essa transferência/substituição de caixa ou fardo, será necessário a impressão de uma nova etiqueta.
Shortpicking
Operador/Supervisor fará o tratamento deste volume e tomará a decisão se completa o pedido com os itens faltantes ou se seguirá com a quantidade separada.
Após esse tratamento, o operador induz a caixa para o cubômetro.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados 100% dos pedidos.
Teremos 02 estações de conferência por rua.
Nessa etapa pode acontecer também uma transferência/substituição dos itens para outras caixas, fardos para um melhor condicionamento para carregar a mercadoria no caminhão.
Caso seja necessária essa transferência/substituição de caixa ou fardo, será necessário a impressão de uma nova etiqueta.
Shortpicking
Operador fará o tratamento deste volume e tomará a decisão se completa o pedido com os itens faltantes ou se seguirá com a quantidade separada.
Após esse tratamento, o operador induz a caixa para o cubômetro.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Pedido  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Pedido  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Pedido  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Pedido  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Pedido  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I23.1701] 2023 — `I23.1701 - PROJ OLIMPO - ESPECIFICACAO DE SOFTWARE - ADITIVO.docx`  
**Heading:** Tela – Conferência (4)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Desenvolver tela de conferência para operador realizar a conferência dos produtos após a separação.
Para realizar a conferência, o operador deverá realizar a leitura da caixa plástica, e a leitura de item a item até finalizar todos os itens e quantidades.
Ao ser identificado a caixa plástica, MFC deve apresentar a lista dos produtos que foram separados na caixa plástica com as quantidades por produto.
Operador ao realizar a leitura de item a item, deve apresentar que a conferência do produto foi realizada, ao finalizar a conferência de todos os produtos da caixa, MFC deve informar que a conferência dessa caixa plástica foi finalizada.
Obs.: atualmente é utilizado uma planilha para efetuar as conferências.

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `Conferência Diamante - ESPECIFICACAO DE SOFTWARE - Rev.1.docx`  
**Heading:** Objetivo do documento  
**Score:** 89.5 (fuzzy) | **Data:** 2026-06-19

Este documento tem por objetivo detalhar as funcionalidades necessárias para o software de
controle MFC, do projeto Diamante – Hinode bem como apresentar os
detalhes da rotina de conferência de fracionados.
As próximas seções descrevem os detalhes do software necessários para o projeto
em questão.

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `Conferência Diamante - ESPECIFICACAO DE SOFTWARE - Rev.1.docx`  
**Heading:** Solicitação de nova para conferênciaParte superior do formulário  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para suprir as necessidades passadas pelo cliente no MFC irá existir acessos a tela de conferência baseadas em níveis de acesso, ou seja, será criado um nível de acesso no MFC para que somente os usuários com essa permissão de nível de acesso possa visualizar de maneira completa como detalhado no item  2. Conferência fracionados atual.
Para os demais usuários que não poderão ter acesso a tela de conferência fracionado com é hoje, será alterado as permissões de acesso de telas presentes no nível de acesso relacionado a conferência, para que os conferentes atuais da operação terão disponíveis na tela de conferência as seguintes informações:
Código Produto – Código SKU do produto  vide nas embalagens dos produtos.
Descrição Produto – Descrição ou nomenclatura do produto.
Endereço Picking – Endereço onde está alocado o produto e onde foi realizada a separação do mesmo
Todo processo de tratativa de itens pendentes (faltantes), shortpicking ou sobra de unidades será tratado pelos usuário com o novo nível de acesso, para que isso funcione de maneira correta, o operador de conferência deve contar a quantidade de itens do mesmo SKU dentro da caixa e utilizar o multiplicador da tela para informar a quantidade de itens, após informar a quantidade o operador digita o código SKU ou faz a leitura com um scanner de mão do código EAN ou SKU do produto e informa o lote, assim o MFC irá avaliar se a quantidade informada para aquele SKU corresponde com a quantidade informada na integração do pedido, se o valor for equivalente ao solicitado na integração do pedido, na linha onde contem as informações do produto ficará verde para informar que a quantidade está correta, assim como já ocorre hoje, para casos onde a quantidade informada na conferência for diferente da quantidade informada na integração do pedido, após o operador realizar o processo de seleção da quantidade de item e informar qual produto (SKU) e o lote ele está conferindo, no MFC a linha onde contém as informações do produto fica vermelha e o MFC não permitirá que mais ou menos produto do mesmo SKU sejam informados e também não permitirá a finalização de conferencia para os usuários que não estão no novo nível de acesso caso algum item apresente quantidade divergente com a quantidade separada, da mesma maneira não será possível reiniciar a conferência.Parte inferior do formulário Dessa maneira quando ocorrer erros operacionais eles devem ser tratados pelos usuários com as permissões do novo nível de acesso.
Os usuários com o novo nível de acesso terão todas as funcionalidades já existentes na tela de conferência como já informador acima.
Exemplo da tela para os conferentes com o nível de acesso atual:

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `Conferência Diamante - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Objetivo do documento  
**Score:** 89.5 (fuzzy) | **Data:** 2026-06-19

Este documento tem por objetivo detalhar as funcionalidades necessárias para o software de
controle MFC, do projeto Diamante – Hinode bem como apresentar os
detalhes da rotina de conferência de fracionados.
As próximas seções descrevem os detalhes do software necessários para o projeto
em questão.

---
**Origem:** [ADICONAIS DIAMANTE] 2024 — `Conferência Diamante - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Solicitação de nova para conferênciaParte superior do formulário  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para suprir as necessidades passadas pelo cliente no MFC irá existir acessos a tela de conferência baseadas em níveis de acesso, ou seja, será criado um nível de acesso no MFC para que somente os usuários com essa permissão de nível de acesso possa visualizar de maneira completa como detalhado no item  2. Conferência fracionados atual.
Para os demais usuários que não poderão ter acesso a tela de conferência fracionado com é hoje, será alterado as permissões de acesso de telas presentes no nível de acesso relacionado a conferência, para que os conferentes atuais da operação terão disponíveis na tela de conferência as seguintes informações:
Código Produto – Código SKU do produto  vide nas embalagens dos produtos.
Descrição Produto – Descrição ou nomenclatura do produto.
Endereço Picking – Endereço onde está alocado o produto e onde foi realizada a separação do mesmo
Todo processo de tratativa de itens pendentes (faltantes), shortpicking ou sobra de unidades será tratado pelos usuário com o novo nível de acesso, para que isso funcione de maneira correta, o operador de conferência deve contar a quantidade de itens do mesmo SKU dentro da caixa e utilizar o multiplicador da tela para informar a quantidade de itens, após informar a quantidade o operador digita o código SKU ou faz a leitura com um scanner de mão do código EAN ou SKU do produto e informa o lote, assim o MFC irá avaliar se a quantidade informada para aquele SKU corresponde com a quantidade informada na integração do pedido, se o valor for equivalente ao solicitado na integração do pedido, na linha onde contem as informações do produto ficará verde para informar que a quantidade está correta, assim como já ocorre hoje, para casos onde a quantidade informada na conferência for diferente da quantidade informada na integração do pedido, após o operador realizar o processo de seleção da quantidade de item e informar qual produto (SKU) e o lote ele está conferindo, no MFC a linha onde contém as informações do produto fica vermelha e o MFC não permitirá que mais ou menos produto do mesmo SKU sejam informados e também não permitirá a finalização de conferencia para os usuários que não estão no novo nível de acesso caso algum item apresente quantidade divergente com a quantidade separada, da mesma maneira não será possível reiniciar a conferência.Parte inferior do formulário Dessa maneira quando ocorrer erros operacionais eles devem ser tratados pelos usuários com as permissões do novo nível de acesso.
Os usuários com o novo nível de acesso terão todas as funcionalidades já existentes na tela de conferência como já informador acima.
Exemplo da tela para os conferentes com o nível de acesso atual:

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Validação de campo “valida”  
**Score:** 0.7 (embed) | **Data:** 2026-06-19

Caso o campo “valida” esteja com a informação “true”, significa que o volume está validado pelo sistema do cliente.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER.docx`  
**Heading:** Validação de campo “valida”  
**Score:** 0.7 (embed) | **Data:** 2026-06-19

Caso o campo “valida” esteja com a informação “true”, significa que o volume está validado pelo sistema do cliente.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV1.docx`  
**Heading:** Tela de conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de conferência, o operador irá realizar a leitura do QR Code do volume recebido, com isso o Velox mostrará a lista de produtos esperados nesse volume, operador realiza a leitura dos códigos de barras de todos os produtos para conferir item e quantidade, quando atingir a quantidade solicitada do produto, a linha do produto é concluída como conferido.
Operado realiza esse processo com todos os produtos do volume, ao finalizar a conferência de todos os produtos no volume, caso a conferência seja concluída com 100% dos pedidos solicitados separados, o sistema Velox enviará a integração de confirmação de separação para o WMS.
Caso exista algum produto com shortpicking no volume, operador deverá resolver na conferência, se inclui a quantidade do produto faltante ou será enviado com a quantidade separada, ao confirmar essa operação será enviada a integração de confirmação de separação para o WMS.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV2.docx`  
**Heading:** Tela de conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de conferência, o operador irá realizar a leitura do QR Code do volume recebido, com isso o Velox mostrará a lista de produtos esperados nesse volume, operador realiza a leitura dos códigos de barras de todos os produtos para conferir item e quantidade, quando atingir a quantidade solicitada do produto, a linha do produto é concluída como conferido.
Operado realiza esse processo com todos os produtos do volume, ao finalizar a conferência de todos os produtos no volume, caso a conferência seja concluída com 100% dos pedidos solicitados separados, o sistema Velox enviará a integração de confirmação de separação para o WMS.
Caso exista algum produto com shortpicking no volume, operador deverá resolver na conferência, se inclui a quantidade do produto faltante ou será enviado com a quantidade separada, ao confirmar essa operação será enviada a integração de confirmação de separação para o WMS.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV3.docx`  
**Heading:** Tela de conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de conferência, o operador irá realizar a leitura do QR Code do volume recebido, com isso o Velox mostrará a lista de produtos esperados nesse volume, operador realiza a leitura dos códigos de barras de todos os produtos para conferir item e quantidade, quando atingir a quantidade solicitada do produto, a linha do produto é concluída como conferido.
Operado realiza esse processo com todos os produtos do volume, ao finalizar a conferência de todos os produtos no volume, caso a conferência seja concluída com 100% dos pedidos solicitados separados, o sistema Velox enviará a integração de confirmação de separação para o WMS.
Caso exista algum produto com shortpicking no volume, operador deverá resolver na conferência, se inclui a quantidade do produto faltante ou será enviado com a quantidade separada, ao confirmar essa operação será enviada a integração de confirmação de separação para o WMS.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV4.docx`  
**Heading:** Tela de conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de conferência, o operador irá realizar a leitura do QR Code do volume recebido, com isso o Velox mostrará a lista de produtos esperados nesse volume, operador realiza a leitura dos códigos de barras de todos os produtos para conferir item e quantidade, quando atingir a quantidade solicitada do produto, a linha do produto é concluída como conferido.
Operado realiza esse processo com todos os produtos do volume, ao finalizar a conferência de todos os produtos no volume, caso a conferência seja concluída com 100% dos pedidos solicitados separados, o sistema Velox enviará a integração de confirmação de separação para o WMS.
Caso exista algum produto com shortpicking no volume, operador deverá resolver na conferência, se inclui a quantidade do produto faltante ou será enviado com a quantidade separada, ao confirmar essa operação será enviada a integração de confirmação de separação para o WMS.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Na estação de conferência serão direcionados os pedidos que foram realizados shortpicking e franqueados (Que estiverem com flag ativo)
Shortpicking
Para esse tipo de pedido o operador da estação de conferência, fara o tratamento para os itens de alta relevância (Alto índice de reclamação por falta), itens que não são considerados alta relevância, poderão seguir normalmente. Após esse tratamento, operador ao confirmar a conferência, VELOX envia integração de confirmação de separação dos itens separados para o pedido. Esses itens de alta relevância deverão vir identificados na integração.
Franqueados
Cliente enviará via integração a informação de todos os franqueados que deverão seguir para a conferência, esses tipos de franqueado seguirão para conferência independente da separação, esses pedidos serão conferidos e após a validação VELOX envia integração de confirmação de separação.
Operador terá a possibilidade de cadastrar, editar e excluir franqueados no sistema Velox, e também ativar/desativar flag que indica a necessidade de ir para conferência.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV6.docx`  
**Heading:** Tela de conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de conferência, o operador irá realizar a leitura do QR Code do volume recebido, com isso o Velox mostrará a lista de produtos esperados nesse volume, operador realiza a leitura dos códigos de barras de todos os produtos para conferir item e quantidade, quando atingir a quantidade solicitada do produto, a linha do produto é concluída como conferido.
Operado realiza esse processo com todos os produtos do volume, ao finalizar a conferência de todos os produtos no volume, caso a conferência seja concluída com 100% dos pedidos solicitados separados, o sistema Velox enviará a integração de confirmação de separação para o WMS.
Caso exista algum produto com shortpicking no volume, operador deverá resolver na conferência, se inclui a quantidade do produto faltante ou será enviado com a quantidade separada, ao confirmar essa operação será enviada a integração de confirmação de separação para o WMS.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV7.docx`  
**Heading:** Tela de conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de conferência, o operador irá realizar a leitura do QR Code do volume recebido, com isso o Velox mostrará a lista de produtos esperados nesse volume, operador realiza a leitura dos códigos de barras de todos os produtos para conferir item e quantidade, quando atingir a quantidade solicitada do produto, a linha do produto é concluída como conferido.
Operado realiza esse processo com todos os produtos do volume, ao finalizar a conferência de todos os produtos no volume, caso a conferência seja concluída com 100% dos pedidos solicitados separados, o sistema Velox enviará a integração de confirmação de separação para o WMS.
Caso exista algum produto com shortpicking no volume, operador deverá resolver na conferência, se inclui a quantidade do produto faltante ou será enviado com a quantidade separada, ao confirmar essa operação será enviada a integração de confirmação de separação para o WMS.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Tela de conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de conferência, o operador irá realizar a leitura do QR Code do volume recebido, com isso o Velox mostrará a lista de produtos esperados nesse volume, operador realiza a leitura dos códigos de barras de todos os produtos para conferir item e quantidade, quando atingir a quantidade solicitada do produto, a linha do produto é concluída como conferido.
Operado realiza esse processo com todos os produtos do volume, ao finalizar a conferência de todos os produtos no volume, caso a conferência seja concluída com 100% dos pedidos solicitados separados, o sistema Velox enviará a integração de confirmação de separação para o WMS.
Caso exista algum produto com shortpicking no volume, operador deverá resolver na conferência, se inclui a quantidade do produto faltante ou será enviado com a quantidade separada, ao confirmar essa operação será enviada a integração de confirmação de separação para o WMS.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 1.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferencia dos volumes separados será de responsabilidade do Velox.
Serão 18 estações de conferencia no final da separaçao dos produtos fracionados.
Operador da estação de conferencia, ao receber o volume, deverá realizar a leitura do código de barras da caixa plastica, com isso o sistema Velox informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados de fracionados, devem ser conferidos.
Para realizar a conferencia do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferencia do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferencia, ao realizar a tratativa deverá finalizar a conferencia do volume.
Todo ajuste de quantidades e ou lote na conferencia, deverá ter permissão superior no sistema Velox.
Operador da estação de conferencia deve realizar a leitura do DataMatrix do produtos.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

O SISTEMA WCS DEVE PERMITIR O CADASTRO DAS IMPRESSORAS DE MANEIRA OTIMIZADA E PRÁTICA PARA REALIZAR VINCULO ENTRE IMPRESSORA E POSTO.
A conferência dos volumes separados será de responsabilidade do WCS.
Serão em torno de 24 estações de conferência no final da separação de todos os produtos separados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema WCS informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados devem ser conferidos.
ENDEREÇO/ITEM/LOTE/UNIDADE DE MEDIDA/ QTD. CONFERIDA
PARA CONFERÊNCIA DE ITENS DE MARKETING ESSE PROCESSO SERÁ FEITO ATRAVÉS DE UMA FLAG QUE GARANTIRÁ QUE TODOS OS ITENS FORAM CONFERIDOS.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidade na conferência, deverá ter permissão superior no sistema WCS.
No processo de conferência, WCS não deve permitir a troca de lote.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
OBS: Itens de Marketing não tem rastreabilidade (string para leitura), é necessário deixar essa opção na tela de conferência.
Teremos impressão de laudos na tela de conferência.
Teremos opção de reimpressão na tela de conferência.
FLAG INDICANDO SE O PRODUTO POSSUI OU NÃO LAUDO
Tratativas de Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido. Liberação será realizada pelo departamento de qualidade.
Quando ocorrerem as falhas descritas acima e o operador não conseguir resolver o problema de maneira imediata, será necessário acionar a Liderança para proceder com a liberação ou correção. O acesso a essa liberação será protegido por uma senha de segurança.
Ação: Após a falha ser detectada, o operador será direcionado para uma tela de liberação, onde será necessário inserir uma senha para liberar o processo de conferência.
Senha de Liberação: Apenas membros da Liderançaterão acesso à senha, garantindo que a liberação só seja realizada por pessoas autorizadas.
Fluxo de Liberação
O operador identifica que não consegue corrigir a falha e solicita a liberação.
O sistema exibe uma tela de login onde o operador deve inserir a senha da Liderança.
Uma vez validada a senha, o operador poderá continuar a operação normalmente, ou o Liderança poderá revisar o processo e tomar as ações corretivas necessárias.
Geração de Etiqueta e Rastreabilidade de Pedido
Cada etiqueta virtual de separação será gerada no Order Start e associada a um pedido e a um volume específico.
As informações do pedido e do volume serão armazenadas no sistema WCS para posterior rastreamento.
Durante o processo de separação, o coletor de dados será utilizado para registrar as informações essenciais de rastreabilidade. As strings lidas no coletor incluem:
SKU do produto
Localização de armazenamento
Volume de separação
Quantidade do produto separado
Código de barras da caixa virtual
Rastreabilidade de Conferência
Cada ação de conferência realizada na estação de conferência será registrada, incluindo as seguintes informações:
Pedido: Número do pedido associado à separação.
Volume: Volume do pedido ou caixa associada, garantindo que cada item seja rastreado individualmente.
Strings Lidas no Coletor: Cada leitura realizada pelo coletor será registrada. Essas strings incluem os códigos de barras dos produtos e das caixas.
Log de Erro: Caso ocorra um erro durante a conferência (como falha na leitura do código de barras, erro de quantidade ou erro de localização), o erro será registrado no sistema com uma mensagem de erro específica, permitindo rastrear a causa da falha.
Status de Erro: O status de cada operação será registrado. Caso algum erro ocorra, o status será marcado como erro, e o sistema precisará gerar uma notificação para os operadores.
Número único da Coleta: Código da Pega
Usuário que realizou a coleta: Usuário que realizou a coleta ou liderança que liberou o volume.
Identificação do Operador
O operador responsável pela conferência será registrado, com o e-mail do operador (SSO)
Isso permitirá a rastreabilidade do operador e ajudará a identificar qualquer problema relacionado a erros de separação.
Data e Hora
Cada ação realizada (separação, conferência, erro) será registrada com a data e hora precisas da operação.
Essa informação será crucial para auditoria e para análise posterior do desempenho do processo.
O processo de rastreabilidade será registrado em um formato que pode ser visualizado em tabela exibida na tela do WCS.
Detalhamento das Informações:
Pedido: O número do pedido que está sendo processado.
Volume: Identificação do volume ou caixa.
Strings Lidas: Cada produto e sua respectiva quantidade, localização e código de barras lido pelo coletor.
Log de Erro: Detalhes sobre qualquer erro ocorrido (exemplo: falha de leitura, discrepância de quantidade).
Status de Erro: O status atual da operação (se ocorreu erro ou está OK).
Operador: Nome ou identificação do operador responsável pela ação.
Data e Hora: O timestamp de quando a ação foi realizada.
Itens de Marketing sem Rastreabilidade
Para itens de Marketing, será necessário deixar uma flag na tela de conferência indicando que esses itens não possuem rastreabilidade. A string para leitura do coletor não será aplicável a esses produtos, pois não haverá código de barras associado a cada volume. Essa opção na tela de conferência permitirá que o operador saiba que, ao separar produtos de marketing, a rastreabilidade convencional não será necessária.
Tela de Conferência Impressão de Laudos na conferência
Além da rastreabilidade, será incluída a funcionalidade de impressão de laudos na tela de conferência. Ao conferir os produtos, caso o sistema detecte que o pedido exige a impressão de laudos (para produtos controlados ou específicos), o sistema deve imprimir laudos automaticamente na interface de conferência ao término da checagem do produto. Esta funcionalidade garantirá que todos os produtos sejam acompanhados dos documentos necessários, atendendo a requisitos regulatórios ou operacionais.
REIMPRESSAO DE LAUDOS
DEVERÁ TER UMA TELA DE REIMPRESSAO DE LAUDOS E PODE SER FEITA POR QUALQUER OPERADOR, CADA LINHA SERÁ REPRESENTADO TODOS OS LAUDOS DE UM RESPECTIVO VOLUME.
REIMPRESSÃO DE ETIQUETA POR VOLUME
A REIMPRESSÃO SERÁ FEITA EM UMA TELA DEDICADA PARA ESSA FUNÇÃO ONDE SÓ SERA PERMITIDO A REIMPRESSAO COLOCANDO UM USUARIO DE LIDERANÇA.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10.docx`  
**Heading:** Rastreabilidade de Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Cada ação de conferência realizada na estação de conferência será registrada, incluindo as seguintes informações:
Detalhamento das Informações pertinentes para a tela de rastreabilidade da conferência:
Pedido: Número do pedido associado à separação.
Volume: Volume do pedido ou caixa associada, garantindo que cada item seja rastreado individualmente.
Strings Lidas no Coletor: Cada leitura realizada pelo coletor será registrada. Essas strings incluem os códigos de barras dos produtos e das caixas.
Log de Erro: Caso ocorra um erro durante a conferência (como falha na leitura do código de barras, erro de quantidade ou erro de localização), o erro será registrado no sistema com uma mensagem de erro específica, permitindo rastrear a causa da falha.
Status de Erro: O status de cada operação será registrado. Caso algum erro ocorra, o status será marcado como erro, e o sistema precisará gerar uma notificação para os operadores.
Número único da Coleta: Código da Pega
Usuário que realizou a conferência: Usuário que realizou a conferência ou liderança que liberou o volume.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 2.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência dos volumes separados será de responsabilidade do Velox.
Serão 18 estações de conferência no final da separação dos produtos fracionados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema Velox informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados de fracionados, devem ser conferidos.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidades e ou lote na conferência, deverá ter permissão superior no sistema Velox.
No processo de conferência, caso seja necessário, operador poderá realizar a troca de lote dos produtos.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 3.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência dos volumes separados será de responsabilidade do Velox.
Serão em torno de 24 estações de conferência no final da separação dos produtos fracionados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema Velox informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados de fracionados, devem ser conferidos.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidade na conferência, deverá ter permissão superior no sistema Velox.
No processo de conferência, caso seja necessário, operador poderá realizar a troca de lote dos produtos.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
Tratativas de Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 4.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência dos volumes separados será de responsabilidade do MFC.
Serão em torno de 24 estações de conferência no final da separação dos produtos fracionados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema MFC informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados de fracionados, devem ser conferidos.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidade na conferência, deverá ter permissão superior no sistema MFC.
No processo de conferência, caso seja necessário, operador poderá realizar a troca de lote dos produtos.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
Tratativas de Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 5.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência dos volumes separados será de responsabilidade do MFC.
Serão em torno de 24 estações de conferência no final da separação dos produtos fracionados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema MFC informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados de fracionados, devem ser conferidos.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidade na conferência, deverá ter permissão superior no sistema MFC.
No processo de conferência, caso seja necessário, operador poderá realizar a troca de lote dos produtos.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
Tratativas de Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 6.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência dos volumes separados será de responsabilidade do MFC.
Serão em torno de 24 estações de conferência no final da separação dos produtos fracionados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema MFC informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados de fracionados, devem ser conferidos.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidade na conferência, deverá ter permissão superior no sistema MFC.
No processo de conferência, caso seja necessário, operador poderá realizar a troca de lote dos produtos.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
Tratativas de Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 7.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência dos volumes separados será de responsabilidade do MFC.
Serão em torno de 24 estações de conferência no final da separação dos produtos fracionados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema MFC informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados de fracionados, devem ser conferidos.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidade na conferência, deverá ter permissão superior no sistema MFC.
No processo de conferência, Velox não deve permitir a troca de lote.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
Tratativas de Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 8.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência dos volumes separados será de responsabilidade do MFC.
Serão em torno de 24 estações de conferência no final da separação dos produtos fracionados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema MFC informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados de fracionados, devem ser conferidos.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidade na conferência, deverá ter permissão superior no sistema MFC.
No processo de conferência, Velox não deve permitir a troca de lote.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
Tratativas de Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência dos volumes separados será de responsabilidade do WCS.
Serão em torno de 24 estações de conferência no final da separação dos produtos fracionados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema WCS informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados de fracionados, devem ser conferidos.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidade na conferência, deverá ter permissão superior no sistema WCS.
No processo de conferência, WCS não deve permitir a troca de lote.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
OBS: Itens de Marketing não tem rastreabilidade (string para leitura), é necessário deixar essa opção na tela de conferência.
Teremos impressão de laudos na tela de conferência.
Teremos opção de reimpressão na tela de conferência.
Tratativas de Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido. Liberação será realizada pelo departamento de qualidade.
Quando ocorrerem as falhas descritas acima e o operador não conseguir resolver o problema de maneira imediata, será necessário acionar o Departamento de Qualidade para proceder com a liberação ou correção. O acesso a essa liberação será protegido por uma senha de segurança.
Ação: Após a falha ser detectada, o operador será direcionado para uma tela de liberação, onde será necessário inserir uma senha para liberar o processo de conferência.
Senha de Liberação: Apenas membros do Departamento de Qualidade terão acesso à senha, garantindo que a liberação só seja realizada por pessoas autorizadas.
Fluxo de Liberação
O operador identifica que não consegue corrigir a falha e solicita a liberação.
O sistema exibe uma tela de login onde o operador deve inserir a senha do Departamento de Qualidade.
Uma vez validada a senha, o operador poderá continuar a operação normalmente, ou o Departamento de Qualidade poderá revisar o processo e tomar as ações corretivas necessárias.
Geração de Etiqueta e Rastreabilidade de Pedido
Cada etiqueta virtual de separação será gerada no Order Start e associada a um pedido e a um volume específico.
As informações do pedido e do volume serão armazenadas no sistema WCS para posterior rastreamento.
Durante o processo de separação, o coletor de dados será utilizado para registrar as informações essenciais de rastreabilidade. As strings lidas no coletor incluem:
SKU do produto
Localização de armazenamento
Volume de separação
Quantidade do produto separado
Código de barras da caixa virtual
Rastreabilidade de Conferência
Cada ação de conferência realizada com o coletor será registrada, incluindo as seguintes informações:
Pedido: Número do pedido associado à separação.
Volume: Volume do pedido ou caixa associada, garantindo que cada item seja rastreado individualmente.
Strings Lidas no Coletor: Cada leitura realizada pelo coletor será registrada. Essas strings incluem os códigos de barras dos produtos e das caixas.
Log de Erro: Caso ocorra um erro durante a conferência (como falha na leitura do código de barras, erro de quantidade ou erro de localização), o erro será registrado no sistema com uma mensagem de erro específica, permitindo rastrear a causa da falha.
Status de Erro: O status de cada operação será registrado. Caso algum erro ocorra, o status será marcado como erro, e o sistema precisará gerar uma notificação para os operadores.
Identificação do Operador
O operador responsável pela conferência será registrado, com o ID do operador ou nome, dependendo da configuração do sistema.
Isso permitirá a rastreabilidade do operador e ajudará a identificar rapidamente qualquer problema relacionado a erros de separação.
Data e Hora
Cada ação realizada (separação, conferência, erro) será registrada com a data e hora precisas da operação.
Essa informação será crucial para auditoria e para análise posterior do desempenho do processo.
O processo de rastreabilidade será registrado em um formato que pode ser visualizado em logs ou armazenado em banco de dados. Abaixo está um exemplo de como os dados podem ser estruturados:
{
"pedido": "123456",
"volume": "Volume_001",
"stringsLidas": [
{
"sku": "7908052844227",
"localizacao": "A1-B3",
"quantidade": 10,
"codigoDeBarras": "1234567890123"
},
{
"sku": "7908052844228",
"localizacao": "A1-B4",
"quantidade": 5,
"codigoDeBarras": "1234567890124"
}
],
"logErro": "Nenhum erro",
"statusErro": "OK",
"operador": "João Silva",
"dataHora": "2025-04-29T10:15:00"
}
Detalhamento das Informações:
Pedido: O número do pedido que está sendo processado.
Volume: Identificação do volume ou caixa.
Strings Lidas: Cada produto e sua respectiva quantidade, localização e código de barras lido pelo coletor.
Log de Erro: Detalhes sobre qualquer erro ocorrido (exemplo: falha de leitura, discrepância de quantidade).
Status de Erro: O status atual da operação (se ocorreu erro ou está OK).
Operador: Nome ou identificação do operador responsável pela ação.
Data e Hora: O timestamp de quando a ação foi realizada.
Itens de Marketing sem Rastreabilidade
Para itens de Marketing, será necessário deixar uma opção visível na tela de conferência indicando que esses itens não possuem rastreabilidade. A string para leitura do coletor não será aplicável a esses produtos, pois não haverá código de barras associado a cada volume. Essa opção na tela de conferência permitirá que o operador saiba que, ao separar produtos de marketing, a rastreabilidade convencional não será necessária.
Tela de Conferência Impressão de Laudos na
Além da rastreabilidade, será incluída a funcionalidade de impressão de laudos na tela de conferência. Ao conferir os produtos, caso o sistema detecte que o pedido exige a impressão de laudos (para produtos controlados ou específicos), o operador terá a opção de imprimir laudos diretamente na interface de conferência. Esta funcionalidade garantirá que todos os produtos sejam acompanhados dos documentos necessários, atendendo a requisitos regulatórios ou operacionais.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9_Old.docx`  
**Heading:** Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A conferência dos volumes separados será de responsabilidade do MFC.
Serão em torno de 24 estações de conferência no final da separação dos produtos fracionados.
Operador da estação de conferência, ao receber o volume, deverá realizar a leitura do código de barras da caixa plástica, com isso o sistema MFC informará a caixa de expedição que deve ser utilizada para aquele volume e uma lista dos itens que devem estar separados no volume.
Todos os volumes gerados de fracionados, devem ser conferidos.
Para realizar a conferência do volume o operador deverá realizar a leitura de todos os produtos do volume, devendo realizar a leitura de produto a produto e inserindo na caixa de expedição, até que seja finalizado toda a conferência do volume.
Caso haja alguma inconformidade no volume conferido, operador deverá realizar a tratativa do volume na própria estação de conferência, ao realizar a tratativa deverá finalizar a conferência do volume.
Todo ajuste de quantidade na conferência, deverá ter permissão superior no sistema MFC.
No processo de conferência, Velox (MFC) não deve permitir a troca de lote.
Operador da estação de conferência deve realizar a leitura do DataMatrix dos produtos.
OBS: Itens de Marketing não tem rastreabilidade (string para leitura), é necessário deixar essa opção na tela de conferência.
Teremos impressão de laudos na tela de conferência.
Teremos opção de reimpressão na tela de conferência.
Tratativas de Falhas:
Quando operador realizar a leitura da quantidade do produto superior ou inferior a quantidade solicitada
Quando operador realizar a leitura do lote diferente do pedido
Quando operador realizar leitura de item que não está no pedido
Quando código de barras não for lido. Liberação será realizada pelo departamento de qualidade.
Quando ocorrerem as falhas descritas acima e o operador não conseguir resolver o problema de maneira imediata, será necessário acionar o Departamento de Qualidade para proceder com a liberação ou correção. O acesso a essa liberação será protegido por uma senha de segurança.
Ação: Após a falha ser detectada, o operador será direcionado para uma tela de liberação, onde será necessário inserir uma senha para liberar o processo de conferência.
Senha de Liberação: Apenas membros do Departamento de Qualidade terão acesso à senha, garantindo que a liberação só seja realizada por pessoas autorizadas.
Fluxo de Liberação
O operador identifica que não consegue corrigir a falha e solicita a liberação.
O sistema exibe uma tela de login onde o operador deve inserir a senha do Departamento de Qualidade.
Uma vez validada a senha, o operador poderá continuar a operação normalmente, ou o Departamento de Qualidade poderá revisar o processo e tomar as ações corretivas necessárias.
1. Geração de Etiqueta e Rastreabilidade de Pedido
Cada etiqueta virtual de separação será gerada no Order Start e associada a um pedido e a um volume específico.
As informações do pedido e do volume serão armazenadas no sistema para posterior rastreamento.
Durante o processo de separação, o coletor de dados será utilizado para registrar as informações essenciais de rastreabilidade. As strings lidas no coletor incluem:
SKU do produto
Localização de armazenamento
Volume de separação
Quantidade do produto separado
Código de barras da caixa virtual
2. Rastreabilidade de Conferência
Cada ação de conferência realizada com o coletor será registrada, incluindo as seguintes informações:
Pedido: Número do pedido associado à separação.
Volume: Volume do pedido ou caixa associada, garantindo que cada item seja rastreado individualmente.
Strings Lidas no Coletor: Cada leitura realizada pelo coletor será registrada. Essas strings incluem os códigos de barras dos produtos e das caixas.
Log de Erro: Caso ocorra um erro durante a conferência (como falha na leitura do código de barras, erro de quantidade ou erro de localização), o erro será registrado no sistema com uma mensagem de erro específica, permitindo rastrear a causa da falha.
Status de Erro: O status de cada operação será registrado. Caso algum erro ocorra, o status será marcado como erro, e o sistema precisará gerar uma notificação para os operadores.
3. Identificação do Operador
O operador responsável pela conferência será registrado, com o ID do operador ou nome, dependendo da configuração do sistema.
Isso permitirá a rastreabilidade do operador e ajudará a identificar rapidamente qualquer problema relacionado a erros de separação.
4. Data e Hora
Cada ação realizada (separação, conferência, erro) será registrada com a data e hora precisas da operação.
Essa informação será crucial para auditoria e para análise posterior do desempenho do processo.
O processo de rastreabilidade será registrado em um formato que pode ser visualizado em logs ou armazenado em banco de dados. Abaixo está um exemplo de como os dados podem ser estruturados:
{
"pedido": "123456",
"volume": "Volume_001",
"stringsLidas": [
{
"sku": "7908052844227",
"localizacao": "A1-B3",
"quantidade": 10,
"codigoDeBarras": "1234567890123"
},
{
"sku": "7908052844228",
"localizacao": "A1-B4",
"quantidade": 5,
"codigoDeBarras": "1234567890124"
}
],
"logErro": "Nenhum erro",
"statusErro": "OK",
"operador": "João Silva",
"dataHora": "2025-04-29T10:15:00"
}
Detalhamento das Informações:
Pedido: O número do pedido que está sendo processado.
Volume: Identificação do volume ou caixa.
Strings Lidas: Cada produto e sua respectiva quantidade, localização e código de barras lido pelo coletor.
Log de Erro: Detalhes sobre qualquer erro ocorrido (exemplo: falha de leitura, discrepância de quantidade).
Status de Erro: O status atual da operação (se ocorreu erro ou está OK).
Operador: Nome ou identificação do operador responsável pela ação.
Data e Hora: O timestamp de quando a ação foi realizada.
Com essa rastreabilidade completa conseguimos:
Auditoria completa: Capacidade de auditar cada passo do processo de separação e conferência.
Identificação rápida de falhas: Caso ocorra um erro, é possível identificar rapidamente a causa (erro de leitura, erro de localização, erro de quantidade).
Eficiência: Permite uma análise detalhada do desempenho operacional, ajudando a otimizar processos futuros.
Segurança: A rastreabilidade é essencial para garantir que os produtos controlados sejam manipulados adequadamente e que todos os passos do processo sejam transparentes.
Itens de Marketing sem Rastreabilidade
Para itens de Marketing, será necessário deixar uma opção visível na tela de conferência indicando que esses itens não possuem rastreabilidade. A string para leitura do coletor não será aplicável a esses produtos, pois não haverá código de barras associado a cada volume. Essa opção na tela de conferência permitirá que o operador saiba que, ao separar produtos de marketing, a rastreabilidade convencional não será necessária.
2. Tela de Conferência Impressão de Laudos na
Além da rastreabilidade, será incluída a funcionalidade de impressão de laudos na tela de conferência. Ao conferir os produtos, caso o sistema detecte que o pedido exige a impressão de laudos (para produtos controlados ou específicos), o operador terá a opção de imprimir laudos diretamente na interface de conferência. Esta funcionalidade garantirá que todos os produtos sejam acompanhados dos documentos necessários, atendendo a requisitos regulatórios ou operacionais.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES -.docx`  
**Heading:** Conferência (09)  
**Score:** 0.7 (embed) | **Data:** 2026-06-19

01 (um) Desktop
01 (um) Scanner (Leitor de código de barras)

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Pedido  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Pedido  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta será impressa após processo de conferência de pedidos fracionados, deverá conter um código de barras para que seja lido no portal de leitura. Esse código de barras deve estar vinculado ao pedido separado/conferido.
Obs.: Etiqueta será desenvolvida pelo cliente.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 2.docx`  
**Heading:** Solicitação Conferência  
**Score:** 90.9 (fuzzy) | **Data:** 2026-06-19

WCS → WMS (POST)
Quando o volume chegar ao último posto e for direcionado para o ponto de decisão entre B2C, B2B ou Hospital, o sistema WCS deve enviar a informação do volume para que o WMS determine se ele necessita de conferência.
Sugestão JSON para Solicitação de Conferência
{
"operation":"colection",
"label":"1234567890",
"conference": null
}

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 2.docx`  
**Heading:** Confirmação de Conferência  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Essa integração terá como objetivo informar ao WCS que a conferência do volume foi realizada e a caixa pode seguir com as suas próximas rotinas na esteira.
Se uma caixa B2B for destinada à conferência, quando o processo for finalizado será necessário enviar a interface de “confirmação de separação” e “confirmação de conferência”.
Sugestão JSON para Confirmação da Conferência
{
"operation":"colection",
"label":"1234567890",
"conference": "ok"
}

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A conferência é separada sistemicamente e fisicamente por três tipos de itens que são classificados como Frágeis, Não Frágeis e Fora de perfil.
Todas as caixas deverão ser pesadas. Velox não terá responsabilidade de validação de peso, apenas enviará o peso por caixa ao WMS após conferência.
Todos os pedidos são conferidos por completo, realizando a leitura de todos os itens um a um.
O operador irá informar a caixa adequada ao Velox para o Packing dos itens que possuem aquela caixa, o Velox irá acatar a decisão e utilizará as dimensões da caixa selecionada para retomar a integração após a finalização da conferência do volume.
Após realização total da conferência, o sistema irá imprimir a etiqueta de expedição que deve ser colada nas caixas confeccionada no Packing.
As caixas serão induzidas novamente com destino aos PTLs no final da linha.
NOTA: CLIENTE PRECISA ENVIAR IMAGENS DA ETIQUETA

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos.docx`  
**Heading:** Conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A conferência é separada sistemicamente e fisicamente por três tipos de itens que são classificados como Frágeis, Não Frágeis e Fora de perfil.
Todas as caixas deverão ser pesadas. Velox não terá responsabilidade de validação de peso, apenas enviará o peso por caixa ao WMS após conferência.
Todos os pedidos são conferidos por completo, realizando a leitura de todos os itens um a um.
O Velox dará uma sugestão de caixa porém o operador pode informar a caixa que será utilizada para o Packing dos itens que possuem aquela caixa, o Velox irá acatar a decisão e utilizará as dimensões da caixa selecionada para retomar a integração após a finalização da conferência do volume.
Após realização total da conferência, o sistema irá imprimir a etiqueta de expedição que deve ser colada nas caixas confeccionada no Packing.
As caixas serão induzidas novamente com destino aos PTLs no final da linha.
NOTA: CLIENTE PRECISA ENVIAR IMAGENS DA ETIQUETA

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE REV_1-meninos1.docx`  
**Heading:** Conferência  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A conferência é separada sistemicamente e fisicamente por três tipos de itens que são classificados como Frágeis, Não Frágeis e Fora de perfil.
Todas as caixas deverão ser pesadas. O WCS não terá responsabilidade de validação de peso, apenas enviará o peso por caixa ao WMS após conferência.
Todos os pedidos são conferidos por completo, realizando a leitura de todos os itens um a um.
O WCS dará uma sugestão de caixa, porém o operador pode informar a caixa que será utilizada para o Packing dos itens que possuem aquela caixa, o WCS irá acatar a decisão e utilizará as dimensões da caixa selecionada para retomar a integração após a finalização da conferência do volume.
Após realização total da conferência, o sistema irá imprimir a etiqueta de expedição que deve ser colada nas caixas confeccionada no Packing.
As caixas serão induzidas novamente com destino aos PTLs no final da linha.
NOTA: CLIENTE PRECISA ENVIAR IMAGENS DA ETIQUETA

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE - ZENATUR.docx`  
**Heading:** Ajuste na geração de volumes Doca  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Atualmente o parâmetro do MFC que realiza a definição se o item passa pela esteira de automação ou deve ir diretamente para a doca, está tomando essa decisão baseado ao volume unitário desse material.
MFC deve realizar essa validação de tarefas doca, considerando a dimensão m³ do volume/item unitário multiplicado pelo total de volumes do mesmo produto para a mesma doca por pedido. E baseado nesse cálculo, tomar a decisão final se deve ser passado pelo sorter ou é direcionado diretamente para a doca.
Desenvolver um parâmetro de quantidade máxima de volumes por SKU em um pedido, quando for ultrapassado, direcionar as tarefas desse item para Doca.
Somente os SKUs que ultrapassaram os parâmetros de quantidade e metragem cúbica, deve ser direcionado para a doca.

---
**Origem:** [I19.2003] 2021 — `ESPECIFICACAO DE SOFTWARE REV.1 - ZENATUR.docx`  
**Heading:** Ajuste na geração de volumes Doca  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Atualmente o parâmetro do MFC que realiza a definição se o item passa pela esteira de automação ou deve ir diretamente para a doca, está tomando essa decisão baseado ao volume unitário desse material.
MFC deve realizar essa validação de tarefas doca, considerando a dimensão m³ do volume/item unitário multiplicado pelo total de volumes do mesmo produto por pedido. E baseado nesse cálculo, tomar a decisão final se deve ser passado pelo sorter ou é direcionado diretamente para a doca.
Desenvolver um parâmetro de quantidade máxima de volumes por SKU em um pedido, quando for ultrapassado, direcionar as tarefas desse item para Doca.
Somente os SKUs que ultrapassaram os parâmetros de quantidade e metragem cúbica, deve ser direcionado para a doca.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada saída do Sorter possuirá 01 (um) scanner (de fornecimento/responsabilidade do cliente).  A função deste dispositivo será disparar os comandos de abertura e fechamento de pallet, assim como informações de volume lido para alocar no pallet aberto.

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito do Sorter, 01(uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (Volume não integrado etc.)

---
**Origem:** [I22.144] 2022 — `I22.144 - PROJETO GIGA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada saída do Sorter possuirá 01 (um) scanner de dedo ou de gatilho (de fornecimento/responsabilidade do cliente). Este scanner deverá estar ligado na rede, Via PDV no caso de scanner de dedo ou diretamente na rede em caso de gatilho. A função deste dispositivo será disparar os comandos de abertura e fechamento de pallet, assim como informações de volume lido para alocar no pallet indicado pelo Led.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Produtividade do dimensionador por entrada  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar a produtividade por dimensionador dos portais de leitura do sorter.
Campos:
Quantidade de volumes tratados por dimensionador;
Quantidade de volumes tratados (total de todos os dimensionadores);
Percentual entre volumes tratados;
Quantidade de volumes não tratados;
Erros de dimensionador e quantidades.
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
**Heading:** Produtividade por volumes classificados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar a produtividade de volumes classificados no sorter.
Campos:
Quantidade de volumes desviados por rampa;
Quantidade de volumes desviados por regra de desvio.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivos;
Rampa de desvio;
Regra de desvio.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV6.docx`  
**Heading:** Induzidos x desviados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar informações de volumes induzidos com quantidades que foram desviados corretamente.
Campos:
Quantidade de volumes que foram induzidos no sorter e não foram desviados;
Quantidade de volumes que foram induzidos no sorter e foram desviados corretamente.
Filtros:
Data;
Hora;
Período de data;
Período de hora.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Produtividade do dimensionador por entrada  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar a produtividade por dimensionador dos portais de leitura do sorter.
Campos:
Quantidade de volumes tratados por dimensionador;
Quantidade de volumes tratados (total de todos os dimensionadores);
Percentual entre volumes tratados;
Quantidade de volumes não tratados;
Erros de dimensionador e quantidades.
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
**Heading:** Produtividade por volumes classificados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar a produtividade de volumes classificados no sorter.
Campos:
Quantidade de volumes desviados por rampa;
Quantidade de volumes desviados por regra de desvio.
Filtros:
Data;
Hora;
Período de data;
Período de hora;
Motivos;
Rampa de desvio;
Regra de desvio.

---
**Origem:** [I23.406] 2023 — `I23.406 - PROJETO NSR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV7.docx`  
**Heading:** Induzidos x desviados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pós Go Live.
Relatório deve mostrar informações de volumes induzidos com quantidades que foram desviados corretamente.
Campos:
Quantidade de volumes que foram induzidos no sorter e não foram desviados;
Quantidade de volumes que foram induzidos no sorter e foram desviados corretamente.
Filtros:
Data;
Hora;
Período de data;
Período de hora.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Trata rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em casos que o volume seguir para rejeito devido não ter sido validado pelo sistema do cliente ou destino não mapeado/cadastrado no Velox.
Operador deverá validar o motivo de o sistema não ter validado o volume, realizar as devidas tratativas e induzir novamente o volume.
Operador deverá validar no Velox o mapa cadastrado e ativo no momento, e ajustar para que o destino do volume esteja mapeado nas rampas e no Velox, com isso operador poderá induzir novamente o volume no Slim Sorter

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER.docx`  
**Heading:** Trata rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em casos que o volume seguir para rejeito devido não ter sido validado pelo sistema do cliente ou destino não mapeado/cadastrado no Velox.
Operador deverá validar o motivo de o sistema não ter validado o volume, realizar as devidas tratativas e induzir novamente o volume.
Operador deverá validar no Velox o mapa cadastrado e ativo no momento, e ajustar para que o destino do volume esteja mapeado nas rampas e no Velox, com isso operador poderá induzir novamente o volume no Slim Sorter

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO -_REV1.docx`  
**Heading:** Alocar volumes Rejeitados  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de controle de pallets, onde o WCS irá exibir os pallets atuais da operação e permitir o fechamento do pallet, deve haver a posssibilidade de fazer uma alocação do volume manualmente pela tela do sistema, nesta etapa será realizado as mesmas validações que o sistema possui no processo do sorter, ou seja, validação de rampa, transportadora e etiqueta com 13 caracteres.
Este cenario sera feito em casos de volumes que foram pra rejeito e não serão reinduzidos para passarem no portal do sorter.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada saída de Put-to-light possuirá 01 (um) scanner (de fornecimento/responsabilidade do cliente).
A função deste dispositivo será realizar a leitura do código de barras das caixas e o processo de abertura e fechamento de pallet.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição (PTL) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento o led de cada posição indicará que o processo de abertura foi concluído, já que quando a abertura do pallet for efetuada o led da posição em questão acenderá em verde.
Somente operadores cadastrados no sistema terão o poder de realizar abertura da posição pallet.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada saída de Put-to-light possuirá 01 (um) scanner (de fornecimento/responsabilidade Invent).
A função deste dispositivo será realizar a leitura do código de barras das caixas e o processo de abertura e fechamento de pallet.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição (PTL) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento o led de cada posição indicará que o processo de abertura foi concluído, já que quando a abertura do pallet for efetuada o led da posição em questão acenderá em verde.
Somente operadores cadastrados no sistema terão o poder de realizar abertura da posição pallet.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada saída de Put-to-light possuirá 01 (um) scanner (de fornecimento/responsabilidade Invent).
A função deste dispositivo será realizar a leitura do código de barras das caixas e o processo de abertura e fechamento de pallet.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição (PTL) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento o led de cada posição indicará que o processo de abertura foi concluído, já que quando a abertura do pallet for efetuada o led da posição em questão acenderá em verde.
Somente operadores cadastrados no sistema terão o poder de realizar abertura da posição pallet.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada saída de Put-to-light possuirá 01 (um) scanner (de fornecimento/responsabilidade Invent).
A função deste dispositivo será realizar a leitura do código de barras das caixas e o processo de abertura e fechamento de pallet.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição (PTL) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento o led de cada posição indicará que o processo de abertura foi concluído, já que quando a abertura do pallet for efetuada o led da posição em questão acenderá em verde.
Somente operadores cadastrados no sistema terão o poder de realizar abertura da posição pallet.
Etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada saída de Put-to-light possuirá 01 (um) scanner (de fornecimento/responsabilidade Invent).
A função deste dispositivo será realizar a leitura do código de barras das caixas e o processo de abertura e fechamento de pallet.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição (PTL) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento o led de cada posição indicará que o processo de abertura foi concluído, já que quando a abertura do pallet for efetuada o led da posição em questão acenderá em verde.
Somente operadores cadastrados no sistema terão o poder de realizar abertura da posição pallet.
Etiquetas (RG Pallet) serão de responsabilidade do cliente.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada saída de Put-to-light possuirá 01 (um) scanner (de Fornecimento/Responsabilidade Invent).
A função deste dispositivo será realizar a leitura do código de barras das caixas e o processo de abertura e fechamento de pallet.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição (PTL) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento o led de cada posição indicará que o processo de abertura foi concluído, já que quando a abertura do pallet for efetuada o led da posição em questão acenderá em verde.
Somente operadores cadastrados no sistema terão o poder de realizar abertura da posição pallet.
Etiquetas (RG Pallet) serão de responsabilidade do cliente.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada saída de Put-to-light possuirá 01 (um) scanner (de Fornecimento/Responsabilidade Invent).
A função deste dispositivo será realizar a leitura do código de barras das caixas e o processo de abertura e fechamento de pallet.

---
**Origem:** [I21.1140] 2022 — `I21.1140 - PROJETO MONTERREY - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição (PTL) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento o led de cada posição indicará que o processo de abertura foi concluído, já que quando a abertura do pallet for efetuada o led da posição em questão acenderá em verde.
Somente operadores cadastrados no sistema terão o poder de realizar abertura da posição pallet.
Etiquetas (RG Pallet) serão de responsabilidade do cliente.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada estação de Put-to-light possuirá 01 (um) scanner (modelo a definir) scanner fixo, ou de gatilho. A função deste dispositivo será disparar os comandos de alocação abertura e fechamento de pallet.

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por ultimo o RG do pallet (numero identificador).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_3.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por ultimo o RG do pallet (numero identificador).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_4.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por último o RG do pallet (número identificador).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_7.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por último o RG do pallet (número identificador).

---
**Origem:** [I22.402] 2022 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_8.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por último o RG do pallet (número identificador).

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Scanners  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Cada saída de Put-to-light possuirá 01 (um) scanner (de Fornecimento/Responsabilidade Invent).
A função deste dispositivo será realizar a leitura do código de barras das caixas e o processo de abertura e fechamento de pallet.

---
**Origem:** [I22.1739] 2024 — `3Cor - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Os scanners serão utilizados neste momento, uma vez que ao iniciar o processo o operador necessitará de realizar a leitura da etiqueta referente à abertura de posição (PTL) e identificação do operador e consecutivamente o código de barras identificador do pallet.
Além disso, neste momento o led de cada posição indicará que o processo de abertura foi concluído, já que quando a abertura do pallet for efetuada o led da posição em questão acenderá em verde.
Somente operadores cadastrados no sistema terão o poder de realizar abertura da posição pallet.
Etiquetas (RG Pallet) serão de responsabilidade do cliente.

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_5.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por último o RG do pallet (número identificador).

---
**Origem:** [I24.1417] 2024 — `I22.402 - PROJETO MARAVILHA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_6.docx`  
**Heading:** Abertura  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Conforme descrito no item 5.1.1 os scanners serão utilizados neste momento, uma vez que ao   iniciar o processo o operador necessitará realizar a leitura da posição PTL e na sequência o crachá do colaborador e por último o RG do pallet (número identificador).

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Tela de Romaneio  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS deve disponibilizar uma nova tela de Romaneio para substituir o processo manual atualmente realizado em planilhas Excel.
Esta tela terá como objetivo consolidar automaticamente os pedidos finalizados no processo “Aloca Palete”, centralizando as informações necessárias para a conferência final e expedição dos pedidos.
A partir dessa tela, os operadores poderão visualizar, filtrar, conferir, gerar o Romaneio e utilizar as novas funcionalidades de impressão e exportação para Excel, conforme detalhado nos tópicos seguintes.
Exemplo de Nova tela para Romaneio no WCS:

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Geração do Documento de Romaneio  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Seleção de Pedidos: O WCS permite selecionar pedidos para inclusão no documento de Romaneio de diversas formas:
Manualmente, marcando um ou mais pedidos.
Em massa, utilizando um flag "selecionar todos".
De forma filtrada, aplicando o filtro "Status da Conferência = CONFERIDO" e depois selecionando todos.
Ação "Gerar Romaneio": Ao clicar no botão "Gerar Romaneio", o WCS irá agrupar todos os pedidos selecionados que possuem o status Documento gerado como NÃO e criará o documento de Romaneio.
Atualização Pós-Geração: Imediatamente após a geração, o status do campo Documento gerado para todos os pedidos incluídos no romaneio será alterado para SIM.
Geração de Fim de Dia: O WCS deve permitir a geração de um Romaneio consolidado ao final do dia, incluindo todos os pedidos que já estão como CONFERIDO, mesmo que o campo Documento gerado já esteja como SIM. Isso serve para criar um manifesto final diário.
O botão “Imprimir” O Velox possibilita a impressão do Romaneio diretamente pelo sistema, seguindo o layout padrão e incluindo todas as informações essenciais dos pedidos selecionados.
O botão “Exportar Excel” possibilitará a geração de um arquivo no formato .xlsx, contendo todos os registros exibidos na tela, conforme os filtros aplicados
Exemplo de Romaneio para ser Impresso e exportado para Excel:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.3.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.4.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.6.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.7.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.1.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa Data Inicial: Data para o início da pesquisa Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume. Data Sorter: Data que o volume foi desviado no sorter Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.2.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV1.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura 44 podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Figura 44 - Consulta - Consulta volume integrado
Após feita a pesquisa, a tela representada na figura 45 será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.
Figura 45 - Consulta - Consulta volume integrado l

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura 44 podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Figura 44 - Consulta - Consulta volume integrado
Após feita a pesquisa, a tela representada na figura 45 será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.
Figura 45 - Consulta - Consulta volume integrado l

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV2.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV4.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV5.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV6.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.2.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.2.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.4.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIF REV2.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.

---
**Origem:** [I22.1106] 2022 — `I22.1106 - PROJETO SAGITÁRIO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Consulta volume integrado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A tela de consulta do volume integrado, tem como objetivo fornecer informações sobre o volume. Na figura podemos ver esta tela que vem com os seguintes dados:
Filtro: Forma em que irá ser feita a pesquisa
Data Inicial: Data para o início da pesquisa
Data final: Data para o fim da pesquisa
Após feita a pesquisa, a tela representada na figura será apresentada, com os seguintes dados:
Volume: O número correspondente ao Volume
Data Integração: Data em que foi feita a integração
Situação: A situação do volume.
Destino: Rota de destino do volume.
Desvio Sorter: Informação referente ao desvio do volume no sorter.
Data Finalização: Data da finalização do volume.
Data Sorter: Data que o volume foi desviado no sorter
Peso: Peso correspondente ao Volume.
