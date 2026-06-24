# shortpicking.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 1cf3a8921a766e44

Na falta física de produtos, operador não poderá realizar o shortpicking da separação, nesse caso deverá cancelar esse pedido no sistema Velox.
O sistema Velox não permitirá o shortpicking.
Caso a quantidade física não atenda a quantidade solicitada no pedido/volume, o operador deverá realizar o cancelamento do pedido no sistema Velox.
O sistema Velox deve permitir o produto ser separado em 2 (dois) ou mais lotes diferentes.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Arquivos laudos  
**Score:** — (semantico) | **ID:** 4fa56c6bc0d5aac2

ERP D365 F&O (GERENCIADOR DE ESTOQUES) WCS
O sistema ERP D365 F&O (GERENCIADOR DE ESTOQUES) deve disponibilizar os arquivos de laudo em uma pasta do servidor WCS.
Atualização dos Arquivos de Laudos: Sempre que houver qualquer atualização nos documentos de laudos dos produtos, é responsabilidade do cliente garantir a atualização desses arquivos no diretório.
Esses documentos ficarão armazenados nesse diretório, e sempre que for necessária a impressão, o sistema WCS realizará a pesquisa no diretório para localizar e imprimir o arquivo correto e atualizado.
A busca no diretório será realizada através do lote do item que será a nomenclatura de cada arquivo presente na pasta.
Caminho atual dos laudos:   C:\WCS-backend\laudos
Revisão da Impressão de Laudos: A impressão dos laudos deverá ser feita por item/lote presente na caixa (1 para 1), ou seja, quando necessário a impressão do laudo será realizada a cada item e lote que aquela caixa possui.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** a244dfed2ebf5370

Por via de regra do cliente, o pedido deve sempre ser expedido completamente.
Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair no rejeito antes da conferência para tratativa operacional do cliente.
Corte via Picking Cart (PDV): Na separação via Picking Cart (PDV), a tela do sistema disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada. Nessa situação, o operador deverá acionar o botão, informar a quantidade real coletada, confirmar o ajuste e, em seguida, realizar a leitura da posição correspondente no carrinho (Picking Cart), garantindo o correto registro da separação para aquele volume.
Corte via Coletor: Na separação via Coletor de Dados, a tela do sistema disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada. Nessa situação, o operador deverá acionar o botão, informar a quantidade real coletada, confirmar o ajuste e, em seguida, realizar a leitura do volume, garantindo o correto registro da separação para aquele volume.
Por via das dúvidas, após a correção do shortpicking, o produto será reinserido após esse rejeito da conferência para seguir com demais fluxos necessários.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 92d7d6a0d77b8f25

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED (Sem Conferência): Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.
Corte via PDV (Com Conferência): O corte com PDV é realizado diretamente no PDV ou confirmando as posições de led acesa na cor que indica que necessita de leitura item a item, ao pressionar o led dessas posições será aberto um pop up no PDV para confirmar o corte do item.
Relatório shortpicking: Será disponibilizada uma tela dedicada que irá informar todas as remessas que tiveram ocorrência de shortpicking. A tela de relatório terá como objetivo apresentar, de forma clara e direta, todas as remessas que tiveram ocorrência de shortpicking. O usuário poderá aplicar um filtro por data, e o sistema retornará uma lista contendo exclusivamente as remessas que registraram shortpicking naquele período selecionado.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** c13cf46cc4f65433

Após a realização do Picking Fracionado, o volume passa por um ponto de decisão no final da linha, onde o WCS valida se houve shortpicking na caixa. Caso seja identificado shortpicking, o WCS desvia automaticamente o volume para a área de conferência/auditagem.
Além do shortpicking, o WCS também deverá desviar volumes para conferência de acordo com:
Percentual de amostragem cadastrado pela operação;
Parâmetro de conferência por cliente, conforme descrito abaixo.
Parâmetro de Conferência por Cliente
O WCS disponibilizará um parâmetro de conferência por código de cliente, permitindo que a operação defina quais clientes deverão ter seus volumes de picking fracionado obrigatoriamente direcionados para conferência, independentemente da ocorrência de shortpicking.
A operação poderá cadastrar manualmente os códigos de cliente ou realizar a carga via planilha Excel.
O sistema deverá armazenar apenas o código do cliente, sem necessidade de informações adicionais.
Quando o pedido estiver associado a um cliente presente nessa lista, o WCS deverá desviar automaticamente o volume para a conferência no picking fracionado.
Esse parâmetro será aplicado exclusivamente ao fluxo de picking fracionado.
Fluxo Operacional da Conferência
Abertura da Tela de Conferência
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume (caixa) para iniciar o processo.
O WCS exibe:
A lista de itens do volume;
O operador responsável pela coleta, a nível de item.
Validação dos Itens
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante a validação, o operador poderá:
Completar a caixa, caso o item faltante esteja disponível; ou
Finalizar a conferência com itens faltantes, utilizando o botão “Encerrar Conferência”.
Corte de Itens Faltantes
Ao acionar o botão “Encerrar Conferência”, o operador deverá selecionar a opção de corte.
O WCS entenderá que os itens não lidos foram cortados e registrará essa informação no sistema.
Coleta de Itens Cortados
Caso o operador realize a coleta posterior do item faltante:
O operador poderá realizar a leitura do EAN  ou EAN_DZ do produto;
O WCS entenderá que o item foi coletado e atualizará o volume.
Reimpressão de Etiqueta
Caso existam itens cortados:
O WCS deverá reimprimir automaticamente a etiqueta do volume, ao finalizar a conferência considerando apenas os itens efetivamente coletados;
A nova etiqueta deverá substituir a etiqueta original do volume.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 3fc776b82b31397b

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** fe579be44fbd0471

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 2fe1897a3894efc8

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - ADITIVO - SHORTINDICATOR  - rev.2.docx`  
**Heading:** CONTEXTO E PROBLEMA IDENTIFICADO  
**Score:** — (semantico) | **ID:** 4f2e802f7b5bb6f8

A integração de Confirmação de Coleta é enviada pelo Velox caixa a caixa (volume a volume) ao WMS. Atualmente, sempre que ocorre um corte (short picking) de um item em determinado volume, o campo ShortIndicator é enviado como true no detalhe daquele item, independentemente de haver outros volumes da mesma missão que também contenham o mesmo SKU.
Essa abordagem causa um comportamento indesejado no WMS: ao receber o ShortIndicator = true para um determinado item em um volume intermediário da missão, o WMS não tem visibilidade do total de volumes que compõem a missão e, portanto, interpreta o sinal como um corte definitivo do item, cancelando o saldo restante em todos os demais volumes, mesmo que esses volumes ainda contenham o item e a coleta não tenha sido concluída.
Exemplo de problema:
Considere uma missão com 2 volumes, cada um contendo 10 unidades do mesmo SKU (total de 20 unidades previstas).

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** d6d2337befff4645

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa operacional do cliente.
Corte via Picking Cart (PDV): Na separação via Picking Cart (PDV), a tela do sistema disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada. Nessa situação, o operador deverá acionar o botão, informar a quantidade real coletada, confirmar o ajuste e, em seguida, realizar a leitura da caixa correspondente no carrinho, garantindo o correto registro da separação para aquele volume (tarefa).
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento da missão e otimizando a precisão na expedição.
Corte via Order Start: Para missões que não possuem saldo disponível em estoque na posição de picking, o WCS não permitirá o início da separação até que ocorra o devido reabastecimento. A exceção ocorre quando o item em questão não possui saldo nem nas posições de picking nem no transfer. Nesses casos, o WCS liberará a missão já com o item cortado. Para correção dessa divergência de estoque a tratativa será feita manualmente no WMS, utilizando um relatório que evidencia esse tipo de corte para auxiliar a operação.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Categorias de Conferência  
**Score:** — (semantico) | **ID:** 22b7e88a679e4abc

O time da C&A possui uma meta diária de volumes que devem ser realizados a conferência.
Com isso, sistema terá um cadastro de parâmetros que se o volume (pega) se encaixar em alguma delas deverá ser desviado para a conferência mesmo não ocorrendo Shortpicking. Estes parâmetros serão por categoria do produto, produto/sku, destino e curva do produto.
O WCS apresentará em porcentagem a quantidade de caixas que irão para a conferência visando as categorias criadas e a base de dados das missões disponíveis no Order Start.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Posição de Compra de Palete Vazio  
**Score:** — (semantico) | **ID:** b678f11dc7219632

No segundo cenário, o operador se dirige até a posição informada no TORD e identifica que não existe nenhum palete fisicamente disponível na posição. Nesse caso, a solicitação original não pode ser atendida e deve ser tratada como indisponibilidade de estoque.
Para essa situação, o mesmo processo de troca de palete é executado.
O WCS, ao receber o CATO, deve cancelar a OT em aberto e, na sequência, processar o novo TORD como uma nova execução, iniciando o fluxo normalmente com os novos dados recebidos.
Dessa forma, garante-se que situações de divergência física ou indisponibilidade sejam tratadas de forma controlada, mantendo a consistência entre SAP e WCS e evitando execuções incorretas.
O WCS terá um serviço cronológico que será executado a cada 3 horas e atualizara os status das OTs para não atendida quando a OT for recebida a mais de 24 horas e ainda está com status pendente.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** e208ec95018c1168

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED (Sem Conferência): Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.
Corte via PDV (Com Conferência): O corte com PDV é realizado diretamente no PDV ou confirmando as posições de led acesa na cor que indica que necessita de leitura item a item, ao pressionar o led dessas posições será aberto um pop up no PDV para confirmar o corte do item.
Relatório shortpicking: Será disponibilizada uma tela dedicada que irá informar todas as remessas que tiveram ocorrência de shortpicking. A tela de relatório terá como objetivo apresentar, de forma clara e direta, todas as remessas que tiveram ocorrência de shortpicking. O usuário poderá aplicar um filtro por data, e o sistema retornará uma lista contendo exclusivamente as remessas que registraram shortpicking naquele período selecionado.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** ba04ea87956e40c5

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.
Relatório shortpicking: Será disponibilizada uma tela dedicada que irá informar todas as remessas que tiveram ocorrência de shortpicking. A tela de relatório terá como objetivo apresentar, de forma clara e direta, todas as remessas que tiveram ocorrência de shortpicking. O usuário poderá aplicar um filtro por data, e o sistema retornará uma lista contendo exclusivamente as remessas que registraram shortpicking naquele período selecionado.
Corte via Picking Cart (PDV): Na separação via Picking Cart (PDV), a tela do sistema disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada. Nessa situação, o operador deverá acionar o botão, informar a quantidade real coletada, confirmar o ajuste e, em seguida, realizar a leitura da posição correspondente no carrinho (Picking Cart), garantindo o correto registro da separação para aquele volume.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** 205b280567272779

Após a realização do Picking Fracionado, o volume passa por um ponto de decisão no final da linha, onde o WCS valida se houve shortpicking na caixa. Caso seja identificado shortpicking, o WCS desvia automaticamente o volume para a área de conferência/auditagem.
Além do shortpicking, o WCS também deverá desviar volumes para conferência de acordo com:
Percentual de amostragem cadastrado pela operação;
Parâmetro de conferência por cliente, conforme descrito abaixo.
Parâmetro de Conferência por Cliente
O WCS disponibilizará um parâmetro de conferência por código de cliente, permitindo que a operação defina quais clientes deverão ter seus volumes de picking fracionado obrigatoriamente direcionados para conferência, independentemente da ocorrência de shortpicking.
A operação poderá cadastrar manualmente os códigos de cliente ou realizar a carga via planilha Excel.
O sistema deverá armazenar apenas o código do cliente, sem necessidade de informações adicionais.
Quando o pedido estiver associado a um cliente presente nessa lista, o WCS deverá desviar automaticamente o volume para a conferência no picking fracionado.
Esse parâmetro será aplicado exclusivamente ao fluxo de picking fracionado.
Fluxo Operacional da Conferência
Abertura da Tela de Conferência
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume (caixa) para iniciar o processo.
O WCS exibe:
A lista de itens do volume;
O operador responsável pela coleta, a nível de item.
Validação dos Itens
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante a validação, o operador poderá:
Completar a caixa, caso o item faltante esteja disponível; ou
Finalizar a conferência com itens faltantes, utilizando o botão “Encerrar Conferência”.
A tela de conferência deverá disponibilizar os botões "Cancelar Ação" e "Voltar", permitindo ao operador interromper ou retroceder a operação de forma segura, em alinhamento com o comportamento já em produção no projeto BETA SP.
Corte de Itens Faltantes
Ao acionar o botão "Encerrar Conferência", o operador deverá selecionar a opção de corte. O WCS entenderá que os itens não lidos foram cortados e registrará essa informação no sistema. O operador poderá, a qualquer momento durante esse processo, acionar os botões "Cancelar Ação" ou "Voltar" para interromper ou retroceder a operação de forma segura, em alinhamento com o comportamento já em produção no projeto BETA SP.
Coleta de Itens Cortados
Caso o operador realize a coleta posterior do item faltante:
O operador poderá realizar a leitura do EAN  ou EAN_DZ do produto;
O WCS entenderá que o item foi coletado e atualizará o volume.
Reimpressão de Etiqueta
Caso existam itens cortados:
O WCS deverá reimprimir automaticamente a etiqueta do volume, ao finalizar a conferência considerando apenas os itens efetivamente coletados;
A nova etiqueta deverá substituir a etiqueta original do volume.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Shortpicking Fullcase  
**Score:** — (semantico) | **ID:** 4b4630cdcd4375b0

Caso o operador não encontre produtos suficientes em um endereço, ele pode ajustar a quantidade no coletor e seguir para o próximo endereço. Ao finalizar a coleta com itens pendentes, o operador aciona a opção "Finalizar Coleta Parcial" no coletor. O WCS abre uma tela para que o operador leia as etiquetas dos volumes que não serão coletados — essas etiquetas são invalidadas e os itens registrados como corte de Full Case, retroalimentando o EWM/SAP via Confirmação de Picking com status = "parcial", seguindo o mesmo formato de mensagem já em produção no BETA SP.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Tratamento de Shortpicking (Corte)  
**Score:** — (semantico) | **ID:** 3ca4ffc170ddefeb

Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e, após isso, realizar a leitura do código da etiqueta que os itens serão cortados.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Confirmación de selección / Selección corta  
**Score:** — (semantico) | **ID:** 6e699e5ab44f7cc1

WCS → WMS (WMTOCO)
Tras el proceso de picking, el WCS envía la devolución del pedido al WMS, con las cantidades realmente recogidas, las cantidades faltantes (shortpicking).
E1LTCOH Transfer Order Header - Confirm
E1LTCOI Transfer Order Item

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICATION DE SOFTWARE - PROYECTO GUATEMALA.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** d26014bf9f324c31

En los casos en que el operador, al momento de realizar el picking del producto, detecta que en esa ubicación no se encuentran disponibles las cantidades requeridas para el picking.
Ejemplo: La pantalla indica que el operador necesita recoger 10 unidades de un producto. El operador verifica que solo hay 8 unidades disponibles. En este caso, el operador debe realizar un picking corto, reduciendo la cantidad directamente en la pantalla, seleccionando la cantidad disponible y, al confirmar el picking con una cantidad inferior a la solicitada, se activará la integración del picking corto.

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Confirmação de Picking / Shortpicking  
**Score:** — (semantico) | **ID:** 3ae9afa1f9e945f1

WCS → WMS (WMTOCO)
Após o processo de separação, o WCS envia o retorno do pedido para o WMS, com as quantidades efetivamente separadas e as quantidades faltantes (separação incompleta).
E1LTCOH Transfer Order Header - Confirm
E1LTCOI Transfer Order Item

---
**Origem:** [I25.138] 2026 — `I25.138 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO GUATEMALA.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 0e73c3ea55423eb4

Em casos que o operador ao separar o produto, verifique que na posição não existem as quantidades necessárias solicitadas para separação.
Exemplo: no display informa que o operador precisa separar 10 unidades de um determinado produto, operador verifica que na posição tem apenas 8 unidades desse produto, nesse caso o operador deverá realizar o shortpicking, decrementando a quantidade diretamente no display, separa a quantidade disponível, e ao confirmar a separação com a quantidade menor que a solicitada, será disparada a integração de shortpicking

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Tratativa de Divergências (Corte/Shortpicking)  
**Score:** — (semantico) | **ID:** c5f436df5603fbed

Caso o operador vá até a posição e não encontre o produto (ou a quantidade seja insuficiente):
Acionamento: O operador segura o botão do módulo PBL por 3 segundos (ou usa a tecla de função F no display).
Ajuste de Quantidade: O display permite alterar a quantidade confirmada (ex: Pediu 10, tem 6. Operador ajusta para 6).
Motivo: O sistema pode solicitar um código de motivo no display ou terminal (ex: "Dano", "Falta").
Aprovação: Quando o parâmetro "Auditoria de Corte" está ativo, o corte só é efetivado após a autenticação de um supervisor por senha ou crachá na posição de picking. Sem essa aprovação, o volume permanece pendente.
Consequência:
O WCS envia a confirmação parcial para o WMS (INT-008).
O WMS decide se gera uma nova onda para o saldo restante ou se fatura apenas o que foi atendido.
Uma tarefa de Inventário/Auditoria é gerada automaticamente para aquela posição (INT-006) para corrigir o saldo.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 44b2c336c86ab6fc

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa da operação.
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.
Corte via PDV (Com Conferência): O corte com PDV é realizado diretamente no PDV ou confirmando as posições de led acesa na cor que indica que necessita de leitura item a item, ao pressionar o led dessas posições será aberto um pop up no PDV para confirmar o corte do item.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Motivos de Desvio para Conferência  
**Score:** — (semantico) | **ID:** b88f8b3f7fc2d59f

Após a balança, o volume passa por um ponto de decisão no final da linha, onde o WCS valida se houve shortpicking na caixa. Caso seja identificado shortpicking, o WCS desvia automaticamente o volume para a área de conferência.
Além do shortpicking, o WCS também deverá desviar volumes para conferência de acordo com:
Peso fora da tolerância na balança dinâmica.
Percentual de amostragem cadastrado pela operação.
Short Picking (Corte).

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 013211e6cfd7bccc

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa operacional da operação.
Corte via LED(Sem Conferência): Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.
Corte via PDV (Com Conferência): O corte com PDV é realizado diretamente no PDV ou confirmando as posições de led acesa na cor que indica que necessita de leitura item a item ao pressionar o led dessas posições será aberto um pop up no PDV para confirmar o corte do item.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** d20a1afe677ce704

Após a realização do Picking Fracionado, o volume passa por um ponto de decisão no final da linha e o WCS faz uma validação se houve algum shortpicking na caixa, caso seja identificado o WCS desvia esse volume para uma área de auditagem.
Além do Shortpicking o WCS deve desviar volumes para auditagem de acordo com o percentual de amostragem cadastrado pela operação.
Fluxo Operacional da Conferência:
Abertura da Tela de Conferência:
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume (caixa) para iniciar o processo de conferência. O WCS então exibe uma lista de itens presentes no volume, além do operador que efetuou a coleta a nível de item.
Validação dos Itens:
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante essa validação, o operador pode:
Completar a caixa, caso um item faltante esteja disponível, ou
Finalizar a conferência com itens faltantes através do botão "Encerrar Conferência".
Corte de Itens Faltantes:
Ao clicar no botão "Encerrar Conferência" o operador deve selecionar cortar, então o WCS entenderá que os itens faltantes (que não foram lidos) foram cortados, e o sistema registrará essa informação.

Coletar os itens cortados:
O operador pode coletar o produto faltante e realizar a leitura do ean do mesmo, desta forma o WCS irá entender que o produto foi coletado.

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Picking Cart.docx`  
**Heading:** Tratamento de Shortpicking (Corte)  
**Score:** — (semantico) | **ID:** ca0467f5d2454dfc

Caso seja necessário realizar um corte, o operador deverá informar via tela do PDV a quantidade real coletada e, após isso, realizar a leitura do código da etiqueta que os itens serão cortados.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Registro de Divergências  
**Score:** — (semantico) | **ID:** a1f80ac547cfe389

Toda ocorrência classificada como Suspeita de Divergência deverá ser registrada sistemicamente, independentemente da decisão de desvio aplicada. O registro permitirá auditoria posterior, geração de relatórios e alimentação do painel de KPI. Os campos mínimos do registro estão descritos abaixo:

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 10aef97d870f7a00

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa operacional da operação.
Corte via LED(Sem Conferência): Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.
Corte via PDV (Com Conferência): O corte com PDV é realizado diretamente no PDV ou confirmando as posições de led acesa na cor que indica que necessita de leitura item a item ao pressionar o led dessas posições será aberto um pop up no PDV para confirmar o corte do item.

---
**Origem:** [I23.1733] ADITIVO — `I23.1733 - Especificação de Software - Projeto FOX - CARTA NA MANGA.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** 58571ce185cfb29a

Após a realização do Picking Fracionado, o volume passa por um ponto de decisão no final da linha e o WCS faz uma validação se houve algum shortpicking na caixa, caso seja identificado o WCS desvia esse volume para uma área de auditagem.
Além do Shortpicking o WCS deve desviar volumes para auditagem de acordo com o percentual de amostragem cadastrado pela operação.
Fluxo Operacional da Conferência:
Abertura da Tela de Conferência:
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume (caixa) para iniciar o processo de conferência. O WCS então exibe uma lista de itens presentes no volume, além do operador que efetuou a coleta a nível de item.
Validação dos Itens:
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante essa validação, o operador pode:
Completar a caixa, caso um item faltante esteja disponível, ou
Finalizar a conferência com itens faltantes através do botão "Encerrar Conferência".
Corte de Itens Faltantes:
Ao clicar no botão "Encerrar Conferência" o operador deve selecionar cortar, então o WCS entenderá que os itens faltantes (que não foram lidos) foram cortados, e o sistema registrará essa informação.

Coletar os itens cortados:
O operador pode coletar o produto faltante e realizar a leitura do ean do mesmo, desta forma o WCS irá entender que o produto foi coletado.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ MANHATTAM - Tradução AU06 - Pack ILPN Message.docx`  
**Heading:** Atualizações  
**Score:** — (semantico) | **ID:** 2792ef7f9f745020

No required (Não necessário).

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ MANHATTAM - Tradução AU06 - Pack ILPN Message.docx`  
**Heading:** Atributos Estendidos  
**Score:** — (semantico) | **ID:** e42bc7f2783987c6

No required (Não necessário).

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - SEGURANÇA NO PICKING REV 1.docx`  
**Heading:** Tratativa de Divergencia  
**Score:** — (semantico) | **ID:** 30ffb2abfef0ca0c

Se durante a validação (Cenário B) o operador encontrar o produto errado:
Aciona "Reportar Divergência" no PDV.
O WCS realiza o Corte Automático do item no pedido atual (enviando para Conferência).
O endereço recebe status "BLOQUEADO" (não "Pendente", mas travado totalmente).
Exige intervenção de um auditor para desbloquear e corrigir o físico.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Conferencia - Checkout  
**Score:** — (semantico) | **ID:** 2501143c4bf09452

Setor onde ocorre a conferência manual item a item, tendo as caixas na conferência somente pelos seguintes motivos, ShortPicking, Conferência forçada, Itens pendentes no volume, NOREAD BAL02, Peso maior BAL02, Peso menor BAL02, Peso maior BAL03, Peso menor BAL03, Volume não pendente de CrossCheck, Volume sem tara e Batch Picking.
O operador deve bipar a caixa para informar o número de volume na tela de conferência do computador que está no posto de conferência (Responsabilidade do cliente), o sistema informa o motivo de rejeito e o operador deve confirmar item a item, após a finalização da conferência a caixa é devolvida a linha para ir as fechadoras de caixa.

---
**Origem:** [I21.103] 2021 — `I21.103 -  PROJETO REISADO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev1 (002).docx`  
**Heading:** Conferencia - Checkout  
**Score:** — (semantico) | **ID:** 487a71a7f8d3bd40

Setor onde ocorre a conferência manual item a item, tendo as caixas na conferência somente pelos seguintes motivos, ShortPicking, Conferência forçada, Itens pendentes no volume, NOREAD BAL02, Peso maior BAL02, Peso menor BAL02, Peso maior BAL03, Peso menor BAL03, Volume não pendente de CrossCheck, Volume sem tara e Batch Picking.
O operador deve bipar a caixa para informar o número de volume na tela de conferência do computador que está no posto de conferência (Responsabilidade do cliente), o sistema informa o motivo de rejeito e o operador deve confirmar item a item, após a finalização da conferência a caixa é devolvida a linha para ir as fechadoras de caixa.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - Conferênbcia + Relatorio.docx`  
**Heading:** Relatório Resumo por Posto  
**Score:** — (semantico) | **ID:** 834c9d55237c21a5

Inclusão de coluna informando o nome do operador logado.
Inclusão de coluna Quantidade de Erros, com os considerando somente os erros a seguir:
Sobra
Falta
Inversão
Importante: Erros classificados como "Tolerância" não devem ser incluídos neste relatório.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Conferência / Auditoria  
**Score:** — (semantico) | **ID:** 8937dead8b521575

A auditoria será realizada na mesma saída que será os itens de rejeito, quando existir short picking e/ou o peso não coincidir com o pedido, a mesma deverá ser direcionada para essa saída, onde será realizada a auditoria do volume.
Nessa estação, será disponibilizado uma tela para distinguir o pedido/volume, que irá mostrar o motivo do rejeito, se para fazer a auditoria ou rejeito.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 290a5e6c5db00ba0

Caso a quantidade física do produto, não atenda a quantidade solicitada, o operador seleciona no próprio display a quantidade real separada, realizando assim o processo de shortpicking.
Para esse tipo de pedido o operador da estação de conferência fará o tratamento deste pedido, essa definição deverá ser tomada pelo operador junto ao sistema WMS, que deverá tomar a decisão de enviar o pedido somente com as quantidades que foram separadas, ou ele completa o pedido.
Somente após esse tratamento, o sistema WMS envia integração de conferência para o Velox.
Sistema deverá ter opção para operador ligar e desligar a função de shortpicking do sistema, com isso administrador do sistema poderá ligar ou desligar a função de shortpicking conforme necessidade da operação.
Caso aconteça algum tipo de problema na separação enquanto o shortpicking esteja desligado. Operador fará uma identificação visual nesse volume, algum tipo de etiqueta ou marcação.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 9a88c6d33af5a86b

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa operacional da operação.
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** e149b949db51b6b8

Na falta fisica de produtos, operador não poderá realizar o shortpicking da separação, nesse caso deverá cancelar esse pedido no sistema Velox.
O sistema Velox não permitirá o shortpicking.
Caso a quantidade fisica não atenda a quantidade solicitada no pedido/volume, o operador deverá realizar o cancelamento do pedido no sistema Velox.
O sistema Velox deve permitir o produto ser separado em 2 (dois) ou mais lotes diferentes.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 4f77856f227623f2

Na falta fisica de produtos, operador não poderá realizar o shortpicking da separação, nesse caso deverá cancelar esse pedido no sistema Velox.
O sistema Velox não permitirá o shortpicking.
Caso a quantidade fisica não atenda a quantidade solicitada no pedido/volume, o operador deverá realizar o cancelamento do pedido no sistema Velox.
O sistema Velox deve permitir o produto ser separado em 2 (dois) ou mais lotes diferentes.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** cbcb0fbfbf2130d0

Na falta fisica de produtos, operador não poderá realizar o shortpicking da separação, nesse caso deverá cancelar esse pedido no sistema Velox.
O sistema Velox não permitirá o shortpicking.
Caso a quantidade fisica não atenda a quantidade solicitada no pedido/volume, o operador deverá realizar o cancelamento do pedido no sistema Velox.
O sistema Velox deve permitir o produto ser separado em 2 (dois) ou mais lotes diferentes.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** c87bd16315b3d312

Na falta fisica de produtos, operador não poderá realizar o shortpicking da separação, nesse caso deverá cancelar esse pedido no sistema Velox.
O sistema Velox não permitirá o shortpicking.
Caso a quantidade fisica não atenda a quantidade solicitada no pedido/volume, o operador deverá realizar o cancelamento do pedido no sistema Velox.
O sistema Velox deve permitir o produto ser separado em 2 (dois) ou mais lotes diferentes.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 45e66727558ced6e

Na falta fisica de produtos, operador não poderá realizar o shortpicking da separação, nesse caso deverá cancelar esse pedido no sistema Velox.
O sistema Velox não permitirá o shortpicking.
Caso a quantidade fisica não atenda a quantidade solicitada no pedido/volume, o operador deverá realizar o cancelamento do pedido no sistema Velox.
O sistema Velox deve permitir o produto ser separado em 2 (dois) ou mais lotes diferentes.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 63a01b1f4d978b7a

Na falta fisica de produtos, operador não poderá realizar o shortpicking da separação, nesse caso deverá cancelar esse pedido no sistema Velox.
O sistema Velox não permitirá o shortpicking.
Caso a quantidade fisica não atenda a quantidade solicitada no pedido/volume, o operador deverá realizar o cancelamento do pedido no sistema Velox.
O sistema Velox deve permitir o produto ser separado em 2 (dois) ou mais lotes diferentes.

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS 1.docx`  
**Heading:** Alta disponibilidade  
**Score:** — (semantico) | **ID:** d0173a8b74905ed3

Para ambientes de alta disponibilidade, precisaremos que seja disponibilizado um terceiro servidor, pois em casos de desastres será alterado o apontamento da automação para esse servidor de backup.
Como se trata de uma máquina backup, até que a oficial seja solucionada/substituída, o banco de dados poderá estar nessa mesma máquina de aplicação.

---
**Origem:** [I23.3801] 2023 — `I23.3801 - ESPECIFICACAO DE INTEGRACOES E HARDWARE - OCTOPUS.docx`  
**Heading:** Alta disponibilidade  
**Score:** — (semantico) | **ID:** e9a640a215632c05

Para ambientes de alta disponibilidade, precisaremos que seja disponibilizado um terceiro servidor, pois em casos de desastres será alterado o apontamento da automação para esse servidor de backup.
Como se trata de uma máquina backup, até que a oficial seja solucionada/substituída, o banco de dados poderá estar nessa mesma máquina de aplicação.

---
**Origem:** [I23.3917] 2023 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 307d8f38dfeafd12

No momento da separação, caso o operador verifique que a quantidade fisica do produto solicitado seja inferior a quantidade solicitada, deverá realizar o shortpicking desse produto, por exemplo:
A quantidade solicitada do produto é 10 (dez), ao visitar o endereço desse produto, o operador verifica que a quantidade fisica disponivel para separação é 8 (oito), com isso o operador deverá decrementar a quantidade no próprio display que está informando a quantidade a ser separada, então operador decrementa a quantidade de 10 (dez) para 8 (oito), separa a quantidade disponivel e aperta o botão de confirmação de separação do produto no nível.
Assim, o sistema Velox guarda essa informação que solicitou 10 (dez) desse produto, porem foi separado 8 (oito).

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 2b4d7e83091bd9b3

Em casos que o operador ao separar o produto, verifique que na posição não existem as quantidades necessárias solicitadas para separação.
Exemplo: no display informa que o operador precisa separar 10 unidades de um determinado produto, operador verifica que na posição tem apenas 8 unidades desse produto, nesse caso o operador deverá realizar o shortpicking, decrementando a quantidade diretamente no display, separa a quantidade disponivel, e ao confirmar a separação com a quantidade menor que a solicitada, será disparada a integração de shortpicking (3.3 Shortpicking)

---
**Origem:** [I23.1410] 2024 — `I23.1410 - ESPECIFICACAO DE SOFTWARE - NORMANDIA.docx`  
**Heading:** Avarias / Shortpicking  
**Score:** — (semantico) | **ID:** 8d5b523f60abc177

No momento da separação, em casos em que o operador ao chegar na posição e identifique que a quantidade disponivel para separação é inferior a quantidade solicitada, seja por falta de produto ou algum tipo de avaria no produto.
Operador deverá decrementar a quantidade para a quantidade correta que será separada, com isso o sistema Velox deverá enviar a integração 1.8. Avarias / Short Picking para o WMS informando que a quantidade a ser separada para esse produto será cortada.
Com isso, WMS realiza processo de reabastecimento ou ajuste necessário no produto/posição.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** c1e6c856c3f70e0c

Por via de regra do cliente, o pedido deve sempre ser expedido completamente.
Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair no rejeito antes da conferência para tratativa operacional do cliente.
Por via das dúvidas, após a correção do shortpicking, o produto será reinserido após esse rejeito da conferência para seguir com demais fluxos necessários.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Short Picking  
**Score:** — (nome-topico) | **ID:** 52b01e33333e9633

Durante o processo de separação onde o operador identifique que um determinado produto não tem a quantidade necessária na posição de picking o operador deve acionar seu supervisor ou algum usuário com permissão de realiza o Short Picking onde esse operador irá indicar o código de barras do volume e após a confirmação que realmente deseja realizar o corte, o Velox faz a alteração desse volume no pedido afetando quantidade de caixas esperadas por pedido no PTM e deixa na base de dados a informação de corte para o volume em questão.
O corte, independente em casos de o item ser Full Case ou Fracionado, pode ser aceito ou não pelo WMS. Se o corte for aceito, o pedido deve seguir as rotinas já esperadas durante o restante da separação. Caso o corte não for aceito, o WMS integrará aquele pedido novamente apenas com os itens cortados.
Velox deverá avaliar se aquele está sendo separado ou já foi finalizado e tratá-lo como prioridade máxima dentre os demais pedidos. Se ainda possuir pallet aberto no PTM, o sistema só deve permitir fechá-lo quando forem alocados os volumes integrados novamente.
Caso tenha ocorrido algum corte no pedido, deve ser informado no fechamento do último pallet no PTM.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES - Rev 2.docx`  
**Heading:** SHORTPICKING  
**Score:** — (nome-topico) | **ID:** 850676579f0cc5eb

1. Procedimento de Shortpicking
a. Registro de Quantidade Separada
Quando ocorrer shortpicking (corte), o operador deve:
Registrar no display azul a quantidade exata separada do item.
Garantir que o shortpicking seja aplicado para todos os itens da estação antes de induzir a caixa na esteira principal.
b. Fluxo de Shortpicking no Display Rosa
Para itens indicados pelo display rosa, o operador deve realizar:
A leitura item a item, confirmando a coleta.
Em caso de falta de itens, registrar a quantidade disponível diretamente no PDV.
O PDV será utilizado para informar o corte do restante dos itens.
2. Função do PDV no Processo
Cada posto de separação é equipado com um PDV, que apresenta:
Informações detalhadas como localização do item, caixa, pedido e outras informações relevantes.
Ferramentas para o registro de quantidades, notificações de corte e acompanhamento das etapas do processo.
O PDV facilita a operação, oferecendo visibilidade em tempo real de cada passo, reduzindo erros e otimizando o fluxo operacional.
Exemplo de Shortpicking:
Item solicitado: 100 unidades do produto X
Quantidade separada: 50 unidades do produto X

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES_ADITIVO -_REV1.docx`  
**Heading:** Validação de Shortpicking do Operador  
**Score:** — (semantico) | **ID:** d29372f9b6154682

Durante a coleta na estação, em todas as linhas, quando houver um shortpicking de qualquer item o sistema deve interromper a coleta dos demais produtos e exigir que o operador confirme no PDV a quantidade que esta coletando, ou seja, uma quantidade menor que a solicitada.
O PDV deve exibir um aviso que o operador realmente esta cortando o item e solicitar confirmação da ação.
Neste casos, o PDV ficará travado até ação de confirmação ou retorno de separação e em casos das linhas que possuirem LED será aceso uma parte em vermelho para indicar esta situação ao operador.
Se o operador confirmar, o volume terá a confirmação de separação menor do que a quantidade exigida e este volume será posteriormente destinado ao setor de conferência. Se o operador cometeu algum erro na separação, poderá selecionar para voltar a coleta e realizar novamente o processo de separação corrigindo para a quantidade de separação correta.
Lembrando que o WCS não irá guardar as informações do erro cometido pelo operador, sendo assim se for acionado a opção de voltar a coleta, o colaborador começará o processo, apenas do item com a quantidade errada, do zero.
NOTA: Todo o processo de picking da estação será interrompido e o processo de picking entrará em acão de erro todos os leds utilizados na confirmação de finalização de piking acenderam na cor vermelha e enquanto não houver a tomada de decisão no PDV a estação ficará em estado de erro.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 4ba4359032d07fa4

Em caso de shortpicking, quando o sistema solicita uma quantidade e fisicamente, a quantidade não atende a quantidade solicitada para ser separada, nesse caso o operador deverá decrementar a quantidade a ser separada de fato, realiza a separação e pressiona o botão para confirmar que a quantidade que foi separada foi a selecionada no display e não a solicitada.
Na ilustração abaixo o sistema solicita a separação de 10 unidades, porém o operador tem apenas 08 disponivel na posição, operador irá pressionar o botão de decrementar (-) 2 vezes até chegar na quantidade 8, nesse caso foi confirmado que das 10 unidades solicitadas, o operador separou apenas 8 unidades.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** SHORTPICKING  
**Score:** — (nome-topico) | **ID:** a2cb79d6bdfd6b65

Exemplo de Shortpicking:
Item solicitado: 100 unidades do produto X
Quantidade separada: 50 unidades do produto X
1. Procedimento de Shortpicking
a. Registro de Quantidade Separada
Quando ocorrer shortpicking (corte), o operador deve:
Registrar no display azul a quantidade exata separada do item.
Garantir que o shortpicking seja aplicado para todos os itens da estação antes de induzir a caixa na esteira principal.
2. Função do PDV no Processo
Cada posto de separação é equipado com um PDV, que apresenta:
Informações detalhadas como localização do item, caixa, pedido e outras informações relevantes.
Ferramentas para o registro de quantidades, notificações de corte e acompanhamento das etapas do processo.
O PDV facilita a operação, oferecendo visibilidade em tempo real de cada passo, reduzindo erros e otimizando o fluxo operacional.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 8ada47806acdf890

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa operacional da operação.
Corte via LED(Sem Conferência): Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.
Corte via PDV (Com Conferência): O corte com PDV é realizado diretamente no PDV ou confirmando as posições de led acesa na cor que indica que necessita de leitura item a item, ao pressionar o led dessas posições será aberto um pop up no PDV para confirmar o corte do item.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Processo de Conferência  
**Score:** — (semantico) | **ID:** f0ec7fc877a187a1

Após a realização do Picking Fracionado, o volume passa por um ponto de decisão no final da linha e o WCS faz uma validação se houve algum shortpicking na caixa, caso seja identificado o WCS desvia esse volume para uma área de auditagem.
Além do Shortpicking o WCS deve desviar volumes para auditagem de acordo com o percentual de amostragem cadastrado pela operação.
Fluxo Operacional da Conferência:
Abertura da Tela de Conferência:
O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do volume (caixa) para iniciar o processo de conferência. O WCS então exibe uma lista de itens presentes no volume, além do operador que efetuou a coleta a nível de item.
Validação dos Itens:
O operador realiza a leitura dos itens, um a um, para validar o conteúdo da caixa. Durante essa validação, o operador pode:
Completar a caixa, caso um item faltante esteja disponível, ou
Finalizar a conferência com itens faltantes através do botão "Encerrar Conferência".
Corte de Itens Faltantes:
Ao clicar no botão "Encerrar Conferência" o operador deve selecionar cortar, então o WCS entenderá que os itens faltantes (que não foram lidos) foram cortados, e o sistema registrará essa informação.

Coletar os itens cortados:
O operador pode coletar o produto faltante e realizar a leitura do ean do mesmo, desta forma o WCS irá entender que o produto foi coletado.

---
**Origem:** [I24.205] 2024 — `I24.205 - ESPECIFICACAO DE SOFTWARE - PROJETO PROMOFARMA _REV1.docx`  
**Heading:** Categorias de Conferência  
**Score:** — (semantico) | **ID:** d3b97b6be09e1146

O time da Promofarma possui uma meta diária de volumes que devem ser realizados a conferência.
Com isso, sistema terá um cadastro de categorias que se o volume se encaixar em alguma delas deverá ser desviado para a conferência mesmo não ocorrendo Shortpicking. Estas categorias serão por tipo do produto (medicamentos, fralda, perfumaria), produto/sku, loja e curva do produto
O WCS apresentará em porcentagem a quantidade de caixas que irão para a conferencia visando as categorias criadas e a base de dados dos pedidos disponíveis no Order Start.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** 4.1.5.		Retorno da Conferência  
**Score:** — (semantico) | **ID:** e9571a5efbbf01cd

WMS informa ao WCS se o volume precisa ir para conferência ou não, ou seja, se o volume foi totalmente coletado ou não.
Todos os volumes que tiverem shortpicking serão direcionados para a conferência VAS/ Hospital.
Observação: Lembrando que se o volume for do tipo B2B VAS mesmo havendo a coleta total de todos os produtos, o volume deverá ser direcionado para o setor “VAS” (Conferência)

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** ce4d8b3018d78f3c

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa operacional do cliente.
Corte via Picking Cart (PDV): Na separação via Picking Cart (PDV), a tela do sistema disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada. Nessa situação, o operador deverá acionar o botão, informar a quantidade real coletada, confirmar o ajuste e, em seguida, realizar a leitura da caixa correspondente no carrinho, garantindo o correto registro da separação para aquele volume (pega).
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Categorias de Conferência  
**Score:** — (semantico) | **ID:** 61dd136287e9f19b

O time da C&A possui uma meta diária de volumes que devem ser realizados a conferência.
Com isso, sistema terá um cadastro de parâmetros que se o volume (pega) se encaixar em alguma delas deverá ser desviado para a conferência mesmo não ocorrendo Shortpicking. Estes parâmetros serão por categoria do produto, produto/sku, destino e curva do produto.
O WCS apresentará em porcentagem a quantidade de caixas que irão para a conferência visando as categorias criadas e a base de dados dos pedidos disponíveis no Order Start.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 2cc7543fa08d7748

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa operacional do cliente.
Corte via Picking Cart (PDV): Na separação via Picking Cart (PDV), a tela do sistema disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada. Nessa situação, o operador deverá acionar o botão, informar a quantidade real coletada, confirmar o ajuste e, em seguida, realizar a leitura da caixa correspondente no carrinho, garantindo o correto registro da separação para aquele volume (pega).
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.
Corte via Order Start: Para tarefas que não possuem saldo disponível em estoque na posição de picking, o WCS não permitirá o início da separação até que ocorra o devido reabastecimento. A exceção ocorre quando o item em questão não possui saldo nem nas posições de picking nem no transfer. Nesses casos, o WCS liberará a tarefa já com o item cortado. Para correção dessa divergência de estoque a tratativa será feita manualmente no WMS, utilizando um relatório que evidencia esse tipo de corte para auxiliar a operação.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Categorias de Conferência  
**Score:** — (semantico) | **ID:** 715818ad88070441

O time da C&A possui uma meta diária de volumes que devem ser realizados a conferência.
Com isso, sistema terá um cadastro de parâmetros que se o volume (pega) se encaixar em alguma delas deverá ser desviado para a conferência mesmo não ocorrendo Shortpicking. Estes parâmetros serão por categoria do produto, produto/sku, destino e curva do produto.
O WCS apresentará em porcentagem a quantidade de caixas que irão para a conferência visando as categorias criadas e a base de dados dos pedidos disponíveis no Order Start.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** 83612ff1fd47188f

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa operacional do cliente.
Corte via Picking Cart (PDV): Na separação via Picking Cart (PDV), a tela do sistema disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada. Nessa situação, o operador deverá acionar o botão, informar a quantidade real coletada, confirmar o ajuste e, em seguida, realizar a leitura da caixa correspondente no carrinho, garantindo o correto registro da separação para aquele volume (pega).
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Categorias de Conferência  
**Score:** — (semantico) | **ID:** 962895a47ee46751

O time da C&A possui uma meta diária de volumes que devem ser realizados a conferência.
Com isso, sistema terá um cadastro de parâmetros que se o volume (pega) se encaixar em alguma delas deverá ser desviado para a conferência mesmo não ocorrendo Shortpicking. Estes parâmetros serão por categoria do produto, produto/sku, destino e curva do produto.
O WCS apresentará em porcentagem a quantidade de caixas que irão para a conferência visando as categorias criadas e a base de dados dos pedidos disponíveis no Order Start.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Shortpicking  
**Score:** — (nome-topico) | **ID:** a1d8bbcba59b1d80

Em casos de falta de produtos na posição, operador realiza o shortpicking do produto na posição, e a caixa deve sair na conferência para tratativa operacional do cliente.
Corte via Picking Cart (PDV): Na separação via Picking Cart (PDV), a tela do sistema disponibiliza um botão para ajuste de quantidade coletada. Esse botão deve ser utilizado sempre que a quantidade efetivamente coletada for menor do que a solicitada. Nessa situação, o operador deverá acionar o botão, informar a quantidade real coletada, confirmar o ajuste e, em seguida, realizar a leitura da caixa correspondente no carrinho, garantindo o correto registro da separação para aquele volume (pega).
Corte via LED: Os botões integrados aos LEDs permitem ao operador ajustar a quantidade real coletada, decrementando o valor indicado no sistema conforme a quantidade realmente disponível. O operador pode, assim, registrar a quantidade correta coletada, corrigindo o processo de separação de forma imediata e precisa. A sinalização por LEDs, junto aos botões de ajuste, proporciona um método eficaz para garantir que a quantidade correta de itens seja registrada e processada, evitando falhas no cumprimento do pedido e otimizando a precisão na expedição.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Categorias de Conferência  
**Score:** — (semantico) | **ID:** 438e7e73fbed9c38

O time da C&A possui uma meta diária de volumes que devem ser realizados a conferência.
Com isso, sistema terá um cadastro de parâmetros que se o volume (pega) se encaixar em alguma delas deverá ser desviado para a conferência mesmo não ocorrendo Shortpicking. Estes parâmetros serão por categoria do produto, produto/sku, destino e curva do produto.
O WCS apresentará em porcentagem a quantidade de caixas que irão para a conferência visando as categorias criadas e a base de dados dos pedidos disponíveis no Order Start.
