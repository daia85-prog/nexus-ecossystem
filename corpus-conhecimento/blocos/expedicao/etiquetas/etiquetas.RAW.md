# etiquetas.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo minerador -->

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Controlados (2º Andar/Nível)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A caixa seguirá pela linha expressa e a leitura da etiqueta será realizada através de um scanner fixo, para identificar se tem pedido a ser separado neste posto.
Em caso de haver separação, a caixa será desviada para este posto.
Em caso de não haver separação, a caixa seguirá reto.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente na tela.
Nesse Order Start o operador conseguirá iniciar somente pedidos que contém os tipos de produtos controlados.
Obs: Pedidos que não tiverem nenhum produto do tipo controlado não será visível nesse Order Start.
O picking será por PDV, teremos um PDV por posto, este PDV deverá indicar na mesma tela quando tiver picking nas costas neste mesmo monitor.
Estações de picking:
Teremos 04 estações de picking, 1 PDV por posto.
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido, e ao ser lida na linha expressa será identificado se existe item a ser separado nesta estação, e desviado caso exista.
Após a caixa passar pelo scanner fixo e ser desviada para o posto, no PDV apresentará em qual estante, coluna e posição está o SKU e a quantidade a ser separada, ao finalizar a separação operador confirma no PDV, (Neste momento o sistema MFC enviará para o WMS, a confirmação de picking), e a caixa está pronta para seguir para a próxima estação.
Em caso de falta de produto, o operador irá realizar o shortpicking, diminuindo a quantidade no pdv através da seta para baixo, e informar a quantidade que está sendo separada.
Essa caixa que teve o shortpiciking, quando chegar na conferência será verificada se será expedida com item faltante ou será corrigida nessa estação de conferência, na tela do PDV irá aparecer qual o item faltante.
Após finalizado o picking em todas as estações, todas as caixas seguirão para a conferência.
Picking Frente: Teremos 14 postos de separação.
Picking Costas: Teremos 42 postos de separação.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Alto Giro (Térreo)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A caixa seguirá pela linha expressa e a leitura da etiqueta será realizada através de um scanner fixo, para identificar se tem pedido a ser separado neste posto.
Em caso de haver separação, a caixa será desviada para este posto.
Em caso de não haver separação, a caixa seguirá reto.
Caso seja necessário priorizar um pedido já integrado, o operador fará essa priorização manualmente na tela.
Nesse Order Start o operador conseguirá iniciar somente pedidos que contém tipos de produtos alto giro.
Obs: Pedidos que não tiverem produto do tipo alto giro não será visível nesse Order Start.
O picking será por PDV, teremos um PDV por posto, este PDV deverá indicar na mesma tela quando tiver picking nas costas neste mesmo monitor.
Estações de picking:
Teremos 08 estações de picking, 1 PDV por posto.
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para ser vinculada a um pedido, e ao ser lida na linha expressa será identificado se existe item a ser separado nesta estação, e desviado caso exista.
Após a caixa passar pelo scanner fixo e ser desviada para o posto, no PDV apresentará em qual estante, coluna e posição está o SKU e a quantidade a ser separada, ao finalizar a separação operador confirma no PDV, (Neste momento o sistema MFC enviará para o WMS, a confirmação de picking), e a caixa está pronta para seguir para a próxima estação.
Em caso de falta de produto, o operador irá realizar o shortpicking, diminuindo a quantidade no pdv através da seta para baixo, e informar a quantidade que está sendo separada.
Essa caixa que teve o shortpiciking, quando chegar na conferência será verificada se será expedida com item faltante ou será corrigida nessa estação de conferência, na tela do PDV irá aparecer qual o item faltante.
Após finalizado o picking em todas as estações, todas as caixas seguirão para a conferência
Picking Frente: Teremos 52 postos de separação
Picking Costas: Teremos 44 postos de separação

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Tipos de etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Abaixo, segue imagens de algumas etiquetas a serem lidas no portal de leitura do sorter.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0-.docx`  
**Heading:** Tipos de etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Abaixo, segue imagens de algumas etiquetas a serem lidas no portal de leitura do sorter.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0.docx`  
**Heading:** Tipos de etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Abaixo, segue imagens de algumas etiquetas a serem lidas no portal de leitura do sorter.

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Tipos de etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Abaixo, segue imagens de algumas etiquetas a serem lidas no portal de leitura do sorter.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1 - editado.docx`  
**Heading:** Rampas (Totem Luminoso)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Prix VSI 410 (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
No caso do projeto do CD de São Paulo, onde o sorter terá 4 (Quatro) rampas de saída, será necessário 4 (Quatro) unidades de leitores de código de barras e 4 (Quatro) conversores RS232, mencionados acima.

---
**Origem:** [I23.3502] 2024 — `I23.3502 PROJETO MASTER - ESPECIFICAÇÃO HARDWARE REV_1.docx`  
**Heading:** Rampas (Totem Luminoso)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Em cada saída/rampa do sorter deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do volume desviado.
Quantidades abaixo, por rampa.
01 (um) Leitor de código de barras – Ex. Prix VSI 410 (com cabo serial db9)
01 (um) Conversor RS232 – Modelo HF5111B
No caso do projeto do CD de São Paulo, onde o sorter terá 4 (Quatro) rampas de saída, será necessário 4 (Quatro) unidades de leitores de código de barras e 4 (Quatro) conversores RS232, mencionados acima.

---
**Origem:** [I23.144] ADITIVO — `I23.144 - Aditivo Automatize - Convocação Ativa e Tara de Caixas.docx`  
**Heading:** Vinculação Física da Etiqueta à Caixa  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O operador deverá fixar a etiqueta impressa exatamente na caixa que acabou de ser pesada, garantindo a correspondência entre a tara registrada e a caixa física. A correta vinculação entre etiqueta e caixa é de responsabilidade do operador. No momento do Order Start o operador deve colocar a nova etiqueta (Etiqueta padrão) por cima da etiqueta do peso na posição de leitura dos scanners da linha.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Views Para KPIS e Relatórios.docx`  
**Heading:** KPIs alvo das Views  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As Views especificadas neste documento têm como objetivo viabilizar os seguintes indicadores de gestão das fases logísticas (lista preliminar, sujeita a expansão por demanda do cliente):
•  Volume processado por etapa logística (Recebimento, Armazenagem, Picking, Packing).
•  Tempo médio de execução por etapa (com base nos campos Data/Hora Inicial, Data/Hora Final e Time).
•  Produtividade por usuário e por etapa.
•  Aderência à priorização de ondas (Priority × tempo real de execução).
•  Taxa de divergência entre quantidades planejadas e executadas.
•  Ocupação volumétrica por OLPN (com base no campo Cubagem).

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_-_Aditivo_Views_KPIs_Beleza_REV2_tracked.docx`  
**Heading:** KPIs alvo das Views  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As Views especificadas neste documento têm como objetivo viabilizar os seguintes indicadores de gestão das fases logísticas (lista preliminar, sujeita a expansão por demanda do cliente):
•  Volume processado por etapa logística (Recebimento, Armazenagem, Picking, Packing).
•  Tempo médio de execução por etapa (com base nos campos Data/Hora Inicial e Data/Hora Final).
•  Produtividade por usuário e por etapa.
•  Aderência à priorização de ondas (Priority × tempo real de execução).
•  Taxa de divergência entre quantidades planejadas e executadas.
•  Ocupação volumétrica por OLPN (com base no campo Cubagem).

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS.docx`  
**Heading:** Tradução do traceability code ( BARCODE )  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Situação: Estrutura da etiqueta já definida com CTNNUM, Código de Operação, Mercado, Sorter Pollux e Stage Numérico.
Decisão:
IT deverá definir como essas informações serão geradas e enviadas pelo SAP
Não requer desenvolvimento adicional da Invent

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - PTM + Extrato Sorter.docx`  
**Heading:** Saída  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

2 Impressões físicas do extrato, enviada diretamente à impressora configurada no posto de trabalho, para os extratos de Pallet será impresso automaticamente assim que o pallet em questão for finalizado, os relatórios sorter será realizado manualmente na tela de relatórios.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Aditivo Dashboard Relatorios e Cadenciamento - Projeto Esperança.docx`  
**Heading:** Solução Proposta – Intercalação por Rampa de Destino  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para eliminar esse gargalo, o WCS deverá alterar a forma como a fila de impressão é gerada. Ao invés de agrupar todas as etiquetas por missão, o sistema deverá intercalar as etiquetas entre as diferentes rampas de destino, utilizando uma lógica de rodízio circular (Round-Robin).
O que muda e o que não muda:
O que muda: a ordem em que as etiquetas são impressas. O sistema alterna entre as rampas, imprimindo uma etiqueta por rampa a cada ciclo, de modo que os volumes cheguem ao sorter distribuídos entre as saídas.
O que NÃO muda: a rota física de coleta do operador. O operador continua percorrendo a rua de forma linear (endereço a endereço, crescente ou decrescente conforme a impressora). A intercalação atua apenas na sequência de impressão das etiquetas, não no caminho físico de coleta.
Na prática, quando o operador chega a um endereço que contém o mesmo SKU solicitado por múltiplas missões (destinadas a rampas diferentes), as etiquetas já foram impressas de forma alternada. Assim, ao coletar e etiquetar os volumes naquele endereço, o operador naturalmente gera uma sequência diversificada de destinos, sem precisar retornar a endereços já percorridos.
Obs: O coletor de dados tem um mapa de separação e a alteração no sistema de impressão pode fazer com que o mapa de separação seja diferente da etiqueta

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Notas Fiscais Concluídas  
**Score:** 89.5 (fuzzy) | **Data:** 2026-06-19

Relatório que lista as notas fiscais que já passaram pelo processo de conferência e foram finalizadas. Exibe o comparativo entre a quantidade esperada e a quantidade efetivamente conferida, além das datas de abertura e finalização. Permite filtrar por número da nota e destino/origem.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Etiqueta de Produção  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Cliente

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Reimpressão de etiqueta por volume  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A reimpressão de etiquetas será realizada exclusivamente por meio de uma tela dedicada no sistema WCS, desenvolvida especificamente para essa funcionalidade. Essa tela terá como principal objetivo permitir a reimpressão das etiquetas associados aos volumes conferidos, garantindo controle, segurança e rastreabilidade do processo.
Regras de Acesso:
Apenas usuários com perfil de liderança (ex: supervisores, coordenadores, gerentes) poderão autorizar a reimpressão de etiqueta.
Para cada tentativa de reimpressão, será obrigatória a identificação e autenticação do usuário de liderança, por meio de login/senha ou outro método de validação definido pelo cliente.
Funcionamento da Tela:
A interface exibirá os volumes conferidos com etiquetas disponíveis para reimpressão, sendo que cada linha representará todos as etiquetas vinculadas a um volume específico.
Será possível realizar buscas e aplicar filtros por:
Número do pedido;
Código do volume;
Data da conferência;

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Layout de etiqueta de Volume  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na conferência será impresso dois tipos de etiqueta destinado ao volume. O tipo de etiqueta será determinado se o pedido vinculado a aquele volume é “special” ou não. Segue exemplos de cada uma delas abaixo:
Layout da etiqueta especial
Para as etiquetas “special” é acrescentada a informação do item, lote, nome do produto e quantidade
Layout da etiqueta Padrão

---
**Origem:** [I22.2213] 2025 — `Especificação de Software - Projeto Reverse_Escopo.docx`  
**Heading:** Célula  
**Score:** 90.5 (fuzzy) | **Data:** 2026-06-19

Em cada célula deverá conter os equipamentos listados abaixo, para que o operador consiga realizar a leitura do itens recebidos.
Quantidades abaixo, por rampa.
02 (dois) Leitor de código de barras – Ex. Honeywell 1470g (com cabo serial db9)
02 (dois) PDVs
01 (uma) impressora de etiquetas Zebra portátil com IP fixo, sendo uma por operador– Ex: Zebra.
No caso do projeto Reverse, onde teremos 4 células, será necessário 8 (oito) unidades de leitores de código de barras, 8 (oito) PDVs e 4 (quatro) impressoras Zebra portáteis, conforme mencionado acima.
As impressoras de etiquetas serão do modelo Zebra portátil e deverão operar com IP fixo na rede da automação. O cadastro das impressoras no sistema WCS poderá ser realizado conforme a necessidade da operação, permitindo flexibilidade no gerenciamento dos equipamentos.
Todos os periféricos precisam estar na rede da automação para que se comunique com o sistema WCS.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** MTR - Mata Trabalhos Romaneio  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WMS  WCS
As integrações de Cancelamento de Romaneio são geradas através da necessidade do time Basso e Pancote e é enviada do WMS ao WCS. Onde o WCS por sua vez toma as ações de acordo com o status e localidade dos volumes (pega) da Carga cancelada, ou seja, por mais que o cancelamento é feito, as situações dos volumes (pega) dessa tarefa determinam qual será a tratativa desse volume (pega) cancelado junto a Carga.
Temos 4 cenários possíveis no cancelamento de Pedidos:
Volumes (pega) que já tenham finalizadas todas as coletas, o sistema não terá tratativas a realizar.
Volumes (pega) que estavam sendo separados na linha de FlowRack, não irão entrar em nenhum posto para coleta e serão direcionados para o setor de conferência informando que o pedido foi cancelado
Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta informando que o pedido foi cancelado.
Volumes (pega) que não saíram do Order Start apenas será removido da lista.
Segue exemplo do JSON:
{
"romaneio": [
"romaneio1",
"romaneio2",
"romaneio3"
]
}
Obs: caso o wcs não possa cancelar o pedido será devolvido o código 400 com o motivo do erro para que o WMS entenda que a ação não foi completa.
Após o cancelamento da onda o número da onda não será mais aceito pelo WCS, porém iremos aceitar os códigos dos pedidos que já foram integrados nessa onda.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Impressão de Romaneio  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após todos os volumes do romaneio serem finalizados, o romaneio estará disponível para impressão na tela de impressão de romaneio. Nessa tela, o operador deve inserir o número do romaneio que deseja imprimir. O Velox irá gerar a impressão a nível de pedido, indicando em quais pallets ou gaiolas cada volume está alocado, proporcionando uma visão clara e organizada da distribuição dos volumes.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** MTR - Mata Trabalhos Romaneio  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WMS  WCS
As integrações de Cancelamento de Romaneio são geradas através da necessidade do time Basso e Pancote e é enviada do WMS ao WCS. Onde o WCS por sua vez toma as ações de acordo com o status e localidade dos volumes (pega) da Carga cancelada, ou seja, por mais que o cancelamento é feito, as situações dos volumes (pega) dessa tarefa determinam qual será a tratativa desse volume (pega) cancelado junto a Carga.
Temos 4 cenários possíveis no cancelamento de Pedidos:
Volumes (pega) que já tenham finalizadas todas as coletas, o sistema não terá tratativas a realizar.
Volumes (pega) que estavam sendo separados na linha de FlowRack, não irão entrar em nenhum posto para coleta e serão direcionados para o setor de conferência informando que o pedido foi cancelado
Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta informando que o pedido foi cancelado.
Volumes (pega) que não saíram do Order Start apenas será removido da lista.
Segue exemplo do JSON:
{
"romaneio": [
"romaneio1",
"romaneio2",
"romaneio3"
]
}
Obs: caso o wcs não possa cancelar o pedido será devolvido o código 400 com o motivo do erro para que o WMS entenda que a ação não foi completa.
Após o cancelamento da onda o número da onda não será mais aceito pelo WCS, porém iremos aceitar os códigos dos pedidos que já foram integrados nessa onda.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Impressão de Romaneio  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após todos os volumes do romaneio serem finalizados, o romaneio estará disponível para impressão na tela de impressão de romaneio. Nessa tela, o operador deve inserir o número do romaneio que deseja imprimir. O Velox irá gerar a impressão a nível de pedido, indicando em quais pallets ou gaiolas cada volume está alocado, proporcionando uma visão clara e organizada da distribuição dos volumes.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Impressão de Romaneio  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após todos os volumes do romaneio serem finalizados, o romaneio estará disponível para impressão na tela de impressão de romaneio. Nessa tela, o operador deve inserir o número do romaneio que deseja imprimir. O Velox irá gerar a impressão a nível de pedido, indicando em quais pallets ou gaiolas cada volume está alocado, proporcionando uma visão clara e organizada da distribuição dos volumes.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Composição do Lote  
**Score:** 81.8 (fuzzy) | **Data:** 2026-06-19

O lote é uma das informações mais críticas extraídas da etiqueta. Sua composição varia conforme o tipo de produto:

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Crosscheck Ligado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS espera receber do portal os dados de ambas as etiquetas (material e expedição).
Skus coincidem: Volume segue para a rampa de destino conforme informações da etiqueta de expedição.
Skus divergem: Volume rejeitado por falha de crosscheck.
NoRead em qualquer etiqueta: Volume entra em recirculação. Após esgotar tentativas, é rejeitado.
Com o crosscheck ligado, a rastreabilidade individual do volume é completa.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Crosscheck Desligado  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS ignora as informações do QRcode e opera exclusivamente com a etiqueta de material.
NoRead na etiqueta de material: Recirculação → rejeito.
NoRead na etiqueta de expedição: Ignorado. Volume segue normalmente.
Com o crosscheck desligado, a rastreabilidade individual do volume PVAR fica limitada.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Reimpressão de Etiqueta no Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para volumes tratáveis (NoRead, falha de crosscheck, volume sem etiqueta PVAR), o operador pode reimprimir a etiqueta de expedição (PVAR) diretamente na estação de rejeito.
Regras:
Somente volumes com status Coletado ou Rejeitado permitem reimpressão na estação de rejeito.
A impressão é realizada na impressora cadastrada na tela de parâmetros como impressora do rejeito, não na impressora do posto de coleta.
O fluxo de reimpressão segue a mesma lógica da reimpressão na tela de Volumes PVAR: seleção de impressora e seleção obrigatória de motivo.
Após a reimpressão, o operador cola a nova etiqueta na caixa e pode reinduzir o volume na esteira do sorter para uma nova tentativa de desvio.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Volumes Não Tratáveis  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para volumes não tratáveis (duplicidade, excedentes, shelf life, separação não confirmada, onda cancelada), a reimpressão de etiqueta não resolve o problema, pois a causa do rejeito é sistêmica e não física. Esses volumes são registrados na estação de rejeito para visibilidade da operação, mas sua tratativa é realizada fora do processo automatizado geralmente envolvendo realocação manual, devolução ao estoque ou descarte conforme procedimento MBRF.

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivo Projeto Andreani - Etiqueta Marketplace.docx`  
**Heading:** Implementação Etiqueta Marketplace  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Este aditivo tem como objetivo a implementação da funcionalidade de impressão de etiquetas de pedidos Marketplace, garantindo que as etiquetas sejam impressas no padrão exigido por cada plataforma de venda de origem (Mercado Livre, Shopee, TikTok, entre outros), conforme diretrizes do cliente Andreani.
A solução proposta estabelece que toda a lógica de identificação do marketplace, consulta a APIs externas, obtenção e persistência das etiquetas será de responsabilidade do WMS Delage, cabendo ao WCS exclusivamente a impressão das etiquetas conforme os layouts recebidos, sem qualquer integração direta com APIs de Marketplaces.

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivo Projeto Andreani - Etiqueta Marketplace.docx`  
**Heading:** Impressão no WCS  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O WCS será responsável exclusivamente por:
Receber os dados das etiquetas no formato ZPL;
Imprimir uma ou mais etiquetas por pedido, conforme quantidade informada pelo WMS;
Respeitar integralmente o layout recebido, sem qualquer alteração, interpretação ou geração de etiquetas.

---
**Origem:** [I24.114] ADITIVO — `I24.114 - Aditivos Projeto Andreani - Multiplos Aditivos.docx`  
**Heading:** Controle de Reimpressão de Etiquetas (Usuário e Senha)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A reimpressão de uma etiqueta após a caixa já ter entrado em linha exige um nível adicional de controle para evitar falhas de rastreabilidade, duplicidades ou desvios no processo. Por isso, é necessário que o operador responsável utilize um usuário e senha autorizados. Esse mecanismo garante que apenas pessoas com permissão adequada possam validar a reimpressão, mantendo a integridade das informações do processo produtivo e garantindo conformidade com os padrões do cliente.
Detalhamento técnico:
Rastreabilidade: Garante que cada caixa tenha uma única etiqueta válida e que qualquer reimpressão fique registrada no sistema.
Controle de acesso: Evita que operadores sem permissão gerem etiquetas indevidas.
Registro de auditoria: O sistema grava quem realizou a ação, quando realizou e qual etiqueta foi reimpressa.
Prevenção de erros: Reduz riscos de embalagens com identificação duplicada ou incorreta.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Identificação e Prefixo de Etiqueta  
**Score:** 94.7 (fuzzy) | **Data:** 2026-06-19

Para distinguir as etiquetas que participam do fluxo de CrossCheck das etiquetas comuns utilizadas em outros fluxos, será adotado o prefixo CCK no início do código aplicado à etiqueta de CrossCheck. O prefixo é aplicado na geração da etiqueta, lido pela câmera de TOPO e propagado no telegrama enviado ao PLC.
Exemplo de leitura válida: CCK17898378180840.

---
**Origem:** [I25.3515] ADITIVO — `I25.3515 - Stage de Indução - PROJETO ESPERANCA .docx`  
**Heading:** Descrição da Funcionalidade  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

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
**Origem:** [I22.3322] ADITIVO — `I22.3322 - Aditivo Projeto Heart - Impressão de Etiqueta de PTM.docx`  
**Heading:** Impressão de Etiqueta de PTM  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Será disponibilizada na tela “Posições Palete” uma nova opção destinada exclusivamente à reimpressão das etiquetas de endereço PTM já cadastradas no sistema.
A funcionalidade permitirá:
Reimpressão Manual
O sistema apresentará a listagem dos endereços PTM cadastrados, permitindo que o operador selecione as etiquetas que deseja reimprimir, conforme necessidade operacional.
O operador poderá:
Selecionar manualmente quantos endereços desejar;
Confirmar a impressão em lote apenas dos itens marcados;
Essa funcionalidade permitirá maior flexibilidade operacional, especialmente em situações onde seja necessária a substituição simultânea de algumas etiquetas específicas, sem necessidade de reimpressão total.
Reimpressão Total
O sistema disponibilizará a opção “Imprimir todas”, permitindo a geração de todas as etiquetas de endereços PTM cadastrados no sistema.
O usuário poderá selecionar a opção “Imprimir todas”.
O sistema realizará a reimpressão de todas as etiquetas de endereços PTM cadastrados.
Essa opção será utilizada principalmente em cenários de substituição completa das etiquetas físicas.

---
**Origem:** [I23.1410] ADITIVO — `I23.1410 - NORMANDIA - OTIMIZAÇÃO DE COLETA - ADITIVO.docx`  
**Heading:** Impressão Automática de Etiquetas no Posto de Indução  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Objetivo:
Garantir que as etiquetas obrigatórias sejam emitidas automaticamente no Posto de Indução à medida que os volumes forem sendo liberados para as posições de PTL, assegurando rastreabilidade e bloqueio operacional caso a etiqueta do pallet (RG/PEGA) não seja consumida antes da indução.
Passos
Conforme os pallets forem sendo montados nas posições de PTL e existirem volumes disponíveis para alocação/indução, o WCS realiza a impressão automática das etiquetas correspondentes no Posto de Indução, desde que o pallet de coleta já esteja alocado no Stage de Indução.
As etiquetas impressas devem conter, no mínimo, as informações de rastreabilidade e agrupamento:
Identificador de agrupamento: PEGA e/ou RG do Pallet;
Endereço do Stage de Indução vinculado ao agrupamento;
Identificação do(s) volume(s) quando aplicável (conforme layout definido).
O operador retira as etiquetas na impressora e realiza o consumo da etiqueta do agrupamento (Etiqueta de RG do Pallet/PEGA) no sistema, como etapa obrigatória de liberação operacional.
Após o consumo, o operador aplica a etiqueta e realiza a indução dos volumes.
Regra de bloqueio no sorter: caso a etiqueta de RG do Pallet/PEGA não tenha sido consumida previamente, o sorter deverá direcionar os volumes para rejeito, impedindo o fluxo para alocação/destino.
O WCS poderá realizar a impressão parcial de etiquetas para um mesmo pallet/agrupamento, não sendo obrigatório que todos os volumes sejam induzidos no mesmo instante (indução pode ocorrer por etapas, conforme disponibilidade operacional).
Resultado esperado
Etiquetas são emitidas automaticamente de forma controlada, vinculadas ao pallet/PEGA e ao endereço de Stage, permitindo indução parcial e garantindo que volumes só sigam no sorter quando o consumo do agrupamento (RG/PEGA) tiver sido realizado.

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Rev 1.3.docx`  
**Heading:** Tela de Reimpressão Etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A reimpressão de etiquetas será realizada exclusivamente por meio de uma tela dedicada no WCS, desenvolvida especificamente para essa finalidade. O objetivo da funcionalidade é permitir a reimpressão das etiquetas já geradas e a retomada de lotes de impressão com falha, assegurando controle, segurança e rastreabilidade de todas as ações.
Regras de Acesso
Apenas usuários com perfil de liderança (ex.: Supervisores, Coordenadores ou Gerentes) poderão autorizar a reimpressão.
Cada tentativa de reimpressão exigirá a autenticação do usuário de liderança (login/senha).
Todas as reimpressões serão registradas em log operacional, contendo usuário, data/hora e volume.
Funcionamento da Tela: A tela exibirá todas as impressões já realizadas, onde cada linha representará uma impressão enviada à impressora, contendo os dados do volume vinculado.
Filtros Disponíveis
Número do Pedido
Código / Etiqueta do Volume
Data da Impressão
Status do Volume ?
Local (Fullcase/Fracionados/Packing)
Pega
Ações Disponíveis
Reimpressão Unitária
Reimpressão em Massa (multiseleção), respeitando as regras de acesso e autenticação.
LOG POR IMPRESSAO* - e não unitário ( buscar modelo da impressora, se tem buffer )
Retomada de Impressão (Recuperação de Falha):
Cenário: Esta funcionalidade será utilizada quando um lote de impressão em massa (ex: no Order Start) for interrompido por uma falha física (ex: término do rolo de etiquetas ou atolamento de papel).
Problema Identificado: Atualmente, quando o WCS envia um lote para a impressora, ele registra a impressão como "sucesso" no sistema, mesmo que ocorra um erro físico ou um timeout na comunicação. Se um lote de 50 etiquetas parar na 20ª, o sistema assume erroneamente que todas as 50 foram impressas, impedindo uma retomada simples.
Nova Regra: O Supervisor deverá acessar a tela de reimpressão, localizar o lote que falhou (ex: 1 de 50) e selecionar a opção "Continuar de Onde Parou". O sistema solicitará ao líder que informe qual foi a última etiqueta impressa com sucesso (ex: 20). Ao confirmar, o WCS deverá enviar para a impressora apenas o intervalo de etiquetas faltante (neste exemplo, da 21 até a 50), evitando o desperdício das etiquetas já impressas.

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Rev 1.4.docx`  
**Heading:** Tela de Reimpressão Etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A reimpressão de etiquetas será realizada exclusivamente por meio de uma tela dedicada no WCS, desenvolvida especificamente para essa finalidade. O objetivo da funcionalidade é permitir a reimpressão das etiquetas já geradas e a retomada de lotes de impressão com falha, assegurando controle, segurança e rastreabilidade de todas as ações.
Regras de Acesso
Apenas usuários com perfil de liderança (ex.: Supervisores, Coordenadores ou Gerentes) poderão autorizar a reimpressão.
Cada tentativa de reimpressão exigirá a autenticação do usuário de liderança (login/senha ou método definido pelo cliente).
Todas as reimpressões serão registradas em log operacional, contendo usuário, data/hora e volume.
Funcionamento da Tela A tela exibirá todas as impressões já realizadas, onde cada linha representará uma impressão enviada à impressora, contendo os dados do volume vinculado.
Filtros Disponíveis
Número do Pedido
Código / Etiqueta do Volume
Data da Impressão
Status do Volume
Local (Fullcase/Fracionados/Packing)
Ações Disponíveis
Reimpressão Unitária
Reimpressão em Massa (multiseleção), respeitando as regras de acesso e autenticação.
Problema Identificado: Foi identificado que o WCS Velox e o WMS tratam a impressão de formas diferentes. Quando o WCS envia um lote de 50 etiquetas, ele envia todos os dados de uma só vez para a impressora e já registra no sistema que as 50 foram impressas. Se a impressora parar na 20ª etiqueta (por falta de ribbon ou atolamento), o WCS não tem como saber e considera o lote concluído. Em contrapartida, o WMS envia um log por impressão (uma etiqueta de cada vez), permitindo a retomada.
Ponto de Atenção (Pendência de Investigação): Conforme discutido, a equipe de desenvolvimento (Florencio) deve investigar duas possíveis soluções para este problema:
Confirmar o modelo exato das impressoras Zebra utilizadas, para verificar a capacidade de buffer interno de armazenamento de etiquetas. Feito um Guia e enviado ao Denilson
Analisar a viabilidade e o impacto de performance de alterar o método de envio do Velox, passando a enviar um log de impressão para cada etiqueta individualmente, em vez de um lote único.

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS - Rev 4.docx`  
**Heading:** Tela de Reimpressão Etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A reimpressão de etiquetas será realizada exclusivamente por meio de uma tela dedicada no WCS, desenvolvida especificamente para essa finalidade. O objetivo da funcionalidade é permitir a reimpressão das etiquetas já geradas e a retomada de lotes de impressão com falha, assegurando controle, segurança e rastreabilidade de todas as ações.
Regras de Acesso
Apenas usuários com perfil de liderança (ex.: Supervisores, Coordenadores ou Gerentes) poderão autorizar a reimpressão.
Cada tentativa de reimpressão exigirá a autenticação do usuário de liderança (login/senha ou método definido pelo cliente).
Todas as reimpressões serão registradas em log operacional, contendo usuário, data/hora e volume.
Funcionamento da Tela A tela exibirá todas as impressões já realizadas, onde cada linha representará uma impressão enviada à impressora, contendo os dados do volume vinculado.
Filtros Disponíveis
Número do Pedido
Código / Etiqueta do Volume
Data da Impressão
Status do Volume
Local (Fullcase/Fracionados/Packing)
Ações Disponíveis
Reimpressão Unitária
Reimpressão em Massa (multiseleção), respeitando as regras de acesso e autenticação.
Problema Identificado: Foi identificado que o WCS Velox e o WMS tratam a impressão de formas diferentes. Quando o WCS envia um lote de 50 etiquetas, ele envia todos os dados de uma só vez para a impressora e já registra no sistema que as 50 foram impressas. Se a impressora parar na 20ª etiqueta (por falta de ribbon ou atolamento), o WCS não tem como saber e considera o lote concluído. Em contrapartida, o WMS envia um log por impressão (uma etiqueta de cada vez), permitindo a retomada.
Ponto de Atenção (Pendência de Investigação): Conforme discutido, a equipe de desenvolvimento deve investigar duas possíveis soluções para este problema:
Confirmar o modelo exato das impressoras Zebra utilizadas, para verificar a capacidade de buffer interno de armazenamento de etiquetas. Feito um Guia e enviado ao Denilson
Analisar a viabilidade e o impacto de performance de alterar o método de envio do Velox, passando a enviar um log de impressão para cada etiqueta individualmente, em vez de um lote único.
O TESTE 3 SERÁ FEITO PARA DEFINIR PROXIMOS PASSOS ( SEGREGAR )

---
**Origem:** [I24.101] ADITIVO — `I24.101 - PROJ TOYS - ESPECIFICACAO DE SOFTWARE - ADITIVOS.docx`  
**Heading:** Tela de Reimpressão Etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A reimpressão de etiquetas será realizada exclusivamente por meio de uma tela dedicada no WCS, desenvolvida especificamente para essa finalidade. O objetivo da funcionalidade é permitir a reimpressão das etiquetas já geradas e a retomada de lotes de impressão com falha, assegurando controle, segurança e rastreabilidade de todas as ações.
Regras de Acesso
Apenas usuários com perfil de liderança (ex.: Supervisores, Coordenadores ou Gerentes) poderão autorizar a reimpressão.
Cada tentativa de reimpressão exigirá a autenticação do usuário de liderança (login/senha ou método definido pelo cliente).
Todas as reimpressões serão registradas em log operacional, contendo usuário, data/hora e volume.
Funcionamento da Tela A tela exibirá todas as impressões já realizadas, onde cada linha representará uma impressão enviada à impressora, contendo os dados do volume vinculado.
Filtros Disponíveis
Número do Pedido
Código / Etiqueta do Volume
Data da Impressão
Status do Volume
Local (Fullcase/Fracionados/Packing)
Ações Disponíveis
Reimpressão Unitária
Reimpressão em Massa (multiseleção), respeitando as regras de acesso e autenticação.
Problema Identificado: Foi identificado que o WCS Velox e o WMS tratam a impressão de formas diferentes. Quando o WCS envia um lote de 50 etiquetas, ele envia todos os dados de uma só vez para a impressora e já registra no sistema que as 50 foram impressas. Se a impressora parar na 20ª etiqueta (por falta de ribbon ou atolamento), o WCS não tem como saber e considera o lote concluído. Em contrapartida, o WMS envia um log por impressão (uma etiqueta de cada vez), permitindo a retomada.
Ponto de Atenção (Pendência de Investigação): Conforme discutido, a equipe de desenvolvimento (Florencio) deve investigar duas possíveis soluções para este problema:
Confirmar o modelo exato das impressoras Zebra utilizadas, para verificar a capacidade de buffer interno de armazenamento de etiquetas.
Analisar a viabilidade e o impacto de performance de alterar o método de envio do Velox, passando a enviar um log de impressão para cada etiqueta individualmente, em vez de um lote único.

---
**Origem:** [I25.9043] ADITIVO — `I25_9043_Especificacao_Inventario_Beleza_Completa.docx`  
**Heading:** APROVAÇÃO DA PROPOSTA  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O Cliente C&A, está de acordo com a Proposta I25.9043 referente à especificação de Inventário de Estoque.
Nome: ___________________________________________________
Cargo:___________________________________________________
Data:____________________________________________________
Assinatura:_______________________________________________

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Etiquetas  
**Score:** 85.7 (fuzzy) | **Data:** 2026-06-19

Sistema WCS deverá ter 2 regras, etiqueta de Andradina e etiqueta gerada no CD;
Etiqueta de Andradina, validar o “Código RG”
Imagem abaixo exibe qual o campo do RG (em amarelo):
Exemplo de tela no SAP:
Etiqueta gerada no CD, validar os últimos 10 números/dígitos (em amarelo): “2030538547”

---
**Origem:** [I20.1053] 2021 — `I20.1053 - ESPECIFICACAO SOFTWARE - Rev8 - FASE 1-2.docx`  
**Heading:** Etiqueta de Caixa (ZPL)  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

CT~~CD,~CC^~CT~
^XA~TA000~JSN^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR4,4~SD15^JUS^LRN^CI0^XZ
^XA
^MMT
^PW641
^LL1758
^LS0
^FO0,1088^GFA,05120,05120,00020,:Z64:eJzt1zGO1TAQANCYX6TMEXyNLZByJUq6BHEALoA4A
yUFEpboOQFCoaFCYITE+utnPdjjxJkZD9rVtvyRVis9JfF4PPGPu+4a13hEjLBKOgHAIswmi8ImaC4 0mSA0jwO4YzaggZNDpPDNEOKBhVjaZrM/il2aVFLMh/W7udYisWG/jszY7uYVe3vYuNs7Zmc5uTTdg FP+zA3v/87NCgO0APCD25Bv/9aYJcUymw1wS83dKNah/aY2SzthgbNdhBmfbOaWS6bZmZqT1m8dIAx XRxp0udzMPuSyT3B2xPo8DHBL04umtRzczsJSu5iylsJGxewDbXiQzZrdKNa15qRZrH1jS6ksM18ew Qybe+K2rxs10MwrBpoFxVLarUVpH/Mwwl7I9U1LNmu29orhy84t4BsmjddqM1arZC6I+Sb7WuwXtYt iW62EBcWwVtJAsyAtYo9zW4fWwkkx3N+lWcV6xbrGIv4TOWOXC1s6I2qPXTlJg6b2eHNrQbGoGMyt+ ea6/EObbGE1VSw80iwa9um9BrghCHOmNZ8XU1gugTSYUycEYT4t5iosv0nSck825qgNdY2E4fXcVsV KrVb/eIuNjcT62rvCcC+Jz4i9KtNj9lKxbW+Kz7m5jNVOaJgSt4hfRdxW3LC4laRvmHn8FHm6m/mXL diH7++3J3lNX+/WZXNDWl94w80uyb4I88ymZDPaJ25jtp/UJs260Q+lbUqM6c5uynY7H+Y6abbahVi aLeDzXGt31YZUPVOuWw4Lu5GGWdMCoJFGiOnP7z2HccINx++9vtsKxSIx2KxO2BCrE0ELFmiCpfu4T VCj2vhAs4eRwtSoudQPd3IwqR/45HhgqpGv9HZYksxBNRl62ujbx9VBZmJbFfj5yvKJHVnLY9jAE9m wOaxd4xrX+O/jL4RPkCM=:7D2C
^FT76,591^A0B,39,38^FH\^FDT R A N S P O R T E^FS
^FT76,1676^A0B,39,38^FH\^FDR E M E T E N T E^FS
^FT76,1070^A0B,39,38^FH\^FDD E S T I N A T A R I O^FS
^FT518,370^A0B,31,31^FH\^FD3000059340^FS
^FT526,869^A0B,39,38^FH\^FD2026643354^FS
^FT526,1516^A0B,39,38^FH\^FD2026643354^FS
^FT518,1071^A0B,31,31^FH\^FDNro. Caixa:^FS
^FT518,1677^A0B,31,31^FH\^FDNro. Caixa:^FS
^FT135,1070^A0B,39,38^FH\^FDSullevan Teste 2^FS
^FT425,869^A0B,28,28^FH\^FD1139763067766-01^FS
^FT387,868^A0B,28,28^FH\^FD15.06.2021 13:10^FS
^FT425,1070^A0B,25,24^FH\^FDNro. Pedido Site:^FS
^FT387,1070^A0B,25,24^FH\^FDData/Hora Pedido:^FS
^FT327,920^A0B,28,28^FH\^FD^FS
^FT355,920^A0B,28,28^FH\^FD^FS
^FT327,1070^A0B,25,24^FH\^FDComplemento:^FS
^FT287,1070^A0B,25,24^FH\^FD05577-000-SAO PAULO/SP^FS
^FT242,1676^A0B,25,24^FH\^FDJARDIM JARAGUA^FS
^FT242,1070^A0B,25,24^FH\^FDJARDIM ADHEMA^FS
^FT196,1070^A0B,25,24^FH\^FDRODOVIA RAPOSO TAVARES,880^FS
^BY120,120^FT615,155^BXB,10,200,0,0,1,~
^FH\^FD3000059340^FS
^BY120,120^FT615,1239^BXB,10,200,0,0,1,~
^FH\^FD1139763067766-01^FS
^BY100,100^FT290,1230^BXB,10,200,0,0,1,~
^FH\^FD850001299^FS
^FO23,613^GB602,0,1^FS
^FO25,1100^GB604,0,1^FS
^FT135,1676^A0B,39,38^FH\^FDSWIFT^FS
^FT196,1676^A0B,25,24^FH\^FDVIA ANHANGUERA,SN^FS
^FT287,1676^A0B,25,24^FH\^FD05275-000-SAO PAULO/SP^FS
^FT332,1676^A0B,25,24^FH\^FDSeparador:^FS
^FT377,1676^A0B,25,24^FH\^FDData/Hora:^FS
^FT422,1337^A0B,25,24^FH\^FDNro. Volumes:^FS
^FT422,1676^A0B,25,24^FH\^FDPeso Liq:^FS
^FT467,1676^A0B,25,24^FH\^FDPeso Bruto:^FS
^FT467,1071^A0B,25,24^FH\^FDNro. Remessa:^FS
^FT470,869^A0B,28,28^FH\^FD850001299^FS
^FT210,480^A0B,120,120^FH\^FD5058^FS
^FT280,600^A0B,60,45^FH\^FD^FS
^FT410,450^A0B,100,80^FH\^FD1/1^FS
^FT410,300^A0B,70,70^FH\^FDcx^FS
^FT470,520^A0B,45,45^FH\^FDDt.Janela:^FS
^FT470,330^A0B,45,45^FH\^FD02.07.2021^FS
^FT518,520^A0B,45,45^FH\^FD^FS
^FT335,1516^A0B,28,28^FH\^FDEC5128^FS
^FT380,1516^A0B,28,28^FH\^FD24.06.2021 10:49^FS
^BY3,3,64^FT614,1030^BCB,,N,N,N,A
^FD113976306776601^FS
^FT425,1161^A0B,28,28^FH\^FD001^FS
^FT425,1516^A0B,28,28^FH\^FD0,125 KG^FS
^FT470,1516^A0B,28,28^FH\^FD0,572 KG^FS
^BY3,3,64^FT614,1594^BCB,,N,N
^FD>;2026643354^FS
^FT590,530^A0B,45,45^FH\^FDNormal^FS
^FO21,17^GB610,1684,8^FS
^PQ1,0,1,Y^XZ

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - ADTV - PMB.docx`  
**Heading:** Objetivo do Documento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Este documento tem por objetivo detalhar a solicitação do cliente Phillip Morris Brasil em gerar e imprimir etiquetas unificadas com detalhes de produtos, destinatário e danfe simplificada em uma nova tela de impressão.
Com isso, os pedidos estarão disponíveis para impressão de etiqueta na nova tela a ser desenvolvida.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE - REV1.docx`  
**Heading:** Inserção de caixas em linha  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após a montagem das caixas elas para o posto de inserção de caixa em linha. Os operadores deste posto estão com as etiquetas e romaneios que vão nas caixas. O operador identifica no romaneio o tamanho de caixa necessário, pega uma caixa com o tamanho correspondente, colam a etiqueta na caixa de papelão e colocam o romaneio dentro da mesma. Logo após esse processo eles colocam a caixa na esteira em linha. A figura 2 mostra esse processo de inserção das caixas.
Figura 2 - Inserção de caixas

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Inserção de caixas em linha  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após a montagem das caixas elas para o posto de inserção de caixa em linha. Os operadores deste posto estão com as etiquetas e romaneios que vão nas caixas. O operador identifica no romaneio o tamanho de caixa necessário, pega uma caixa com o tamanho correspondente, colam a etiqueta na caixa de papelão e colocam o romaneio dentro da mesma. Logo após esse processo eles colocam a caixa na esteira em linha. A figura 2 mostra esse processo de inserção das caixas.
Figura 2 - Inserção de caixas

---
**Origem:** [I21.165] 2022 — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`  
**Heading:** Modelo Json  
**Score:** 81.8 (fuzzy) | **Data:** 2026-06-19

{
"data_hora_gaiola": "10/02/2022 17:35",
"leituras": [{
"etiqueta": "$456465456479612345678975465456",
"data_hora": "10/02/2022 17:30",
"braco": "G10"
}]
}

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0-.docx`  
**Heading:** Etiqueta Enjoei  
**Score:** 90.9 (fuzzy) | **Data:** 2026-06-19

Etiqueta Amazon

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0-.docx`  
**Heading:** Etiqueta Super Lojas Brasil  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta Zara Brasil

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0-.docx`  
**Heading:** Modelo Json  
**Score:** 81.8 (fuzzy) | **Data:** 2026-06-19

{
"data_hora_gaiola": "10/02/2022 17:35",
"leituras": [{
"etiqueta": "$456465456479612345678975465456",
"data_hora": "10/02/2022 17:30",
"braco": "G10"
}]
}

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0.docx`  
**Heading:** Etiqueta Enjoei  
**Score:** 90.9 (fuzzy) | **Data:** 2026-06-19

Etiqueta Amazon

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0.docx`  
**Heading:** Etiqueta Super Lojas Brasil  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta Zara Brasil

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0.docx`  
**Heading:** Modelo Json  
**Score:** 81.8 (fuzzy) | **Data:** 2026-06-19

{
"data_hora_gaiola": "10/02/2022 17:35",
"leituras": [{
"etiqueta": "$456465456479612345678975465456",
"data_hora": "10/02/2022 17:30",
"braco": "G10"
}]
}

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Etiqueta Enjoei  
**Score:** 90.9 (fuzzy) | **Data:** 2026-06-19

Etiqueta Amazon

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Etiqueta Super Lojas Brasil  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta Zara Brasil

---
**Origem:** [I21.165] 2022 — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`  
**Heading:** Modelo Json  
**Score:** 81.8 (fuzzy) | **Data:** 2026-06-19

{
"data_hora_gaiola": "10/02/2022 17:35",
"leituras": [{
"etiqueta": "$456465456479612345678975465456",
"data_hora": "10/02/2022 17:30",
"braco": "G10"
}]
}

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Fase Manual  
**Score:** 90.9 (fuzzy) | **Data:** 2026-06-19

Impressões (Zebra) de etiquetas na impressora Zebra serão realizadas pela Invent.
Impressões (Markem Imaje) de informações direto no Pre Made, serão realizadas pela Invent.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV5.docx`  
**Heading:** Impressão e Reimpressão de etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de impressão de etiqueta, operador poderá imprimir ou reimprimir uma etiquet já impressa anteriormente.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV6.docx`  
**Heading:** Impressão e Reimpressão de etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de impressão de etiqueta, operador poderá imprimir ou reimprimir uma etiquet já impressa anteriormente.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIF REV2.docx`  
**Heading:** Impressão e Reimpressão de etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de impressão de etiqueta, operador poderá imprimir ou reimprimir uma etiquet já impressa anteriormente.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - UNIFICADO.docx`  
**Heading:** Impressão e Reimpressão de etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de impressão de etiqueta, operador poderá imprimir ou reimprimir uma etiquet já impressa anteriormente.

---
**Origem:** [I21.177] 2022 — `I22.150 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE UNIF REV3.docx`  
**Heading:** Impressão e Reimpressão de etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na tela de impressão de etiqueta, operador poderá imprimir ou reimprimir uma etiquet já impressa anteriormente.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV1.docx`  
**Heading:** Etiquetas  
**Score:** 85.7 (fuzzy) | **Data:** 2026-06-19

Todas as etiquetas serão de responsabilidade do cliente

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV2.docx`  
**Heading:** Etiquetas  
**Score:** 85.7 (fuzzy) | **Data:** 2026-06-19

Todas as etiquetas serão de responsabilidade do cliente

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE REV3.docx`  
**Heading:** Etiquetas  
**Score:** 85.7 (fuzzy) | **Data:** 2026-06-19

Todas as etiquetas serão de responsabilidade do cliente.

---
**Origem:** [I22.190] 2022 — `I22.190 - PROJETO RAV - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Etiquetas  
**Score:** 85.7 (fuzzy) | **Data:** 2026-06-19

Todas as etiquetas serão de responsabilidade do cliente

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.10.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas de identificação de caixa plástica serão de responsabilidade EMIS Minas.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.8.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas de identificação de caixa plástica serão de responsabilidade EMIS Minas.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.8.docx`  
**Heading:** Etiqueta de Volumes  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Impressão de etiquetas será de responsabilidade Invent.
As etiquetas dos volumes dos pedidos serão impressas no início da operação, impressora realiza a impressão e corta a etiqueta, fazendo com que a etiqueta caia no interior da caixa plástica.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.9.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas de identificação de caixa plástica serão de responsabilidade EMIS Minas.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I21.1140 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas serão de responsabilidade do cliente.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.2.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas serão de responsabilidade do cliente.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0000001A – Alto Giro
•	0000001B – Baixo Giro
•	0000001C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas serão de responsabilidade do cliente.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação para o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas serão de responsabilidade do cliente.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas serão de responsabilidade EMIS MINAS.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas de identificação de caixa plástica serão de responsabilidade EMIS Minas.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`  
**Heading:** Etiqueta de Volumes  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Impressão de etiquetas será de responsabilidade Invent.
As etiquetas dos volumes dos pedidos serão impressas no início da operação, impressora realiza a impressão e corta a etiqueta, fazendo com que a etiqueta caia no interior da caixa plástica.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas de identificação de caixa plástica serão de responsabilidade EMIS Minas.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`  
**Heading:** Etiqueta de Volumes  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Impressão de etiquetas será de responsabilidade Invent.
As etiquetas dos volumes dos pedidos serão impressas no início da operação, impressora realiza a impressão e corta a etiqueta, fazendo com que a etiqueta caia no interior da caixa plástica.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Etiqueta de Caixa Plástica  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

As impressões de etiquetas de identificação de caixa plástica serão de responsabilidade EMIS Minas.
Invent sugere uma etiqueta com código de barras sequencial, que contemple numeração e uma letra no final de cada código, que será a referência de cada nível conforme exemplo abaixo:
•	0548796A – Alto Giro
•	0648364B – Baixo Giro
•	0276741C – Controlados
A caixa plástica deverá ter uma etiqueta única com o código de barras de identificação, essa identificação será necessária para a caixa ser vinculada a um pedido e ao ser lida nos postos de separação o sistema VELOX identificar se existe produtos a serem separados.

---
**Origem:** [I22.2232] 2022 — `I22.2232-6 - PROJETO TOCA DA RAPOSA- ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`  
**Heading:** Etiqueta de Volumes  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Impressão de etiquetas será de responsabilidade Invent.
As etiquetas dos volumes dos pedidos serão impressas no início da operação, impressora realiza a impressão e corta a etiqueta, fazendo com que a etiqueta caia no interior da caixa plástica.

---
**Origem:** [I22.1732] 2023 — `I23.1615 - PROJETO FLOWER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Impressão de etiqueta  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para o posto de separação.
Obs.: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número: 557788 ao realizar o cálculo de cubagem, gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 1/3 – número do volume: 557788001
Volume 2/3 – número do volume: 557788002
Volume 3/3 – número do volume: 557788003
Exemplo de sugestão de etiqueta a ser impressa pelo Velox:

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** MTR - Mata Trabalhos Romaneio  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

WMS  WCS
As integrações de Cancelamento de Romaneio são geradas através da necessidade do time Basso e Pancote e é enviada do WMS ao WCS. Onde o WCS por sua vez toma as ações de acordo com o status e localidade dos volumes (pega) da Carga cancelada, ou seja, por mais que o cancelamento é feito, as situações dos volumes (pega) dessa tarefa determinam qual será a tratativa desse volume (pega) cancelado junto a Carga.
Temos 4 cenários possíveis no cancelamento de Pedidos:
Volumes (pega) que já tenham finalizadas todas as coletas, o sistema não terá tratativas a realizar.
Volumes (pega) que estavam sendo separados na linha de FlowRack, não irão entrar em nenhum posto para coleta e serão direcionados para o setor de conferência informando que o pedido foi cancelado
Volumes (pega) que estavam sendo separados no Picking Cart, serão direcionados a conferência após o final da coleta informando que o pedido foi cancelado.
Volumes (pega) que não saíram do Order Start apenas será removido da lista.
Segue exemplo do JSON:
{
"romaneio": [
"romaneio1",
"romaneio2",
"romaneio3"
]
}
OBS: Após o cancelamento da onda o número da onda não será mais aceito pelo WCS, porém iremos aceitar os códigos dos pedidos que já foram integrados nessa onda.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Impressão de Romaneio  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Após todos os volumes do romaneio serem finalizados, o romaneio estará disponível para impressão na tela de impressão de romaneio. Nessa tela, o operador deve inserir o número do romaneio que deseja imprimir. O Velox irá gerar a impressão a nível de pedido, indicando em quais pallets ou gaiolas cada volume está alocado, proporcionando uma visão clara e organizada da distribuição dos volumes.

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`  
**Heading:** Etiqueta  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Impressão de etiquetas será de responsabilidade TPC, compartilhar modelos de etiqueta com time INVENT. (Invent sugerir tamanho e especificações mínimas de códigos de barras).

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`  
**Heading:** Etiqueta  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Impressão de etiquetas será de responsabilidade TPC, compartilhar modelos de etiqueta com time INVENT. (Invent sugerir tamanho e especificações mínimas de códigos de barras).

---
**Origem:** [I22.2250] 2023 — `I22.2250 -  PROJETO BIZ - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.docx`  
**Heading:** Etiqueta  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Impressão de etiquetas será de responsabilidade TPC, compartilhar modelos de etiqueta com time INVENT.

---
**Origem:** [I23] 2023 — `I23-1604 - PROJETO CARDEX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Etiquetas  
**Score:** 85.7 (fuzzy) | **Data:** 2026-06-19

Impressões de etiquetas, são de responsabilidades do cliente.

---
**Origem:** [I23] 2023 — `I23-1604 - PROJETO CARDEX - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Estações de trabalho  
**Score:** 90.5 (fuzzy) | **Data:** 2026-06-19

Estação de consulta
01 (um) desktop
01 (um) leitor de código de barras
01 (uma) impressora de etiquetas (impressão responsabilidade do cliente)

---
**Origem:** [I23] 2023 — `I23.1604 - ESPECIFICACAO DE SOFTWARE - PROJETO CARDEX 2024.docx`  
**Heading:** Etiquetas  
**Score:** 85.7 (fuzzy) | **Data:** 2026-06-19

Impressões de etiquetas, são de responsabilidades do cliente.

---
**Origem:** [I23] 2023 — `I23.1604 - ESPECIFICACAO DE SOFTWARE - PROJETO CARDEX 2024.docx`  
**Heading:** Estações de trabalho  
**Score:** 90.5 (fuzzy) | **Data:** 2026-06-19

Estação de consulta
01 (um) desktop
01 (um) leitor de código de barras
01 (uma) impressora de etiquetas (impressão responsabilidade do cliente)

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Impressão de etiquetas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox
A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Etiqueta de Produção  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Impressão de etiquetas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox. A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta de Produção  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Impressão de etiquetas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox. A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta de Produção  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - P.ALEGRE MG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.36  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Sistema Velox, deve permitir a reimpressão de etiquetas, em casos que haja a necessidade de alteração do numero de lote do volume.
Após a alteração de lote no sistema Velox, os volumes poderão ser reimpressos pela opção “Reimpressão” e deverão estar disponíveis para conferência.
Referência: Interna
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Impressão de etiquetas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta de Produção  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** 2.3.36  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Sistema Velox, deve permitir a reimpressão de etiquetas, em casos que haja a necessidade de alteração do numero de lote do volume.
Após a alteração de lote no sistema Velox, os volumes poderão ser reimpressos pela opção “Reimpressão” e deverão estar disponíveis para conferência.
Referência: Interna
Classificação: Funcional

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Impressão de etiquetas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox
A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_1.docx`  
**Heading:** Etiqueta de Produção  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Cliente

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Impressão de etiquetas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (0001/0003, 0002/0003 e 0003/0003).
Tanto para separação de picking, quanto para full case (caixa fechada).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para a estação de separação.
Obs.: O número do volume gerado pelo Velox, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número 557788 ao realizar o cálculo de cubagem, sistema Velox gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 0001/0003 – número do volume: 5577880001
Volume 0002/0003 – número do volume: 5577880002
Volume 0003/0003 – número do volume: 5577880003
As impressões de etiquetas de picking e full case (caixa fechada), serão de responsabilidade Velox A impressão de etiquetas de produção, são de responsabilidade do cliente.

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta Full Case (Caixa Fechada)  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Velox
Informação adicionada: Código de barras do volume, para que o operador faça a leitura do volume informando ao sistema Velox que o volume foi separado.
Layout sugerido de etiqueta impressa pelo Velox:

---
**Origem:** [I23.125] 2023 — `I23.125 - PROJETO CRISTAL - ITAPIRA SP - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta de Produção  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Impressão responsabilidade Cliente

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_2.docx`  
**Heading:** Etiqueta  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Exemplo de etiqueta dado pela Shein:
Lembrando que o processo de etiquetagem será de total responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_3.docx`  
**Heading:** Etiqueta  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Exemplo de etiqueta dado pela Shein:
Lembrando que o processo de etiquetagem será de total responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_4.docx`  
**Heading:** Etiqueta  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Exemplo de etiqueta dado pela Shein:
Lembrando que o processo de etiquetagem será de total responsabilidade do cliente.

---
**Origem:** [I23.1409] 2023 — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`  
**Heading:** Etiqueta  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Exemplo de etiqueta:
Lembrando que o processo de etiquetagem será de total responsabilidade do cliente.

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV1.docx`  
**Heading:** Impressão de etiqueta  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para o posto de separação.
Obs.: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número: 557788 ao realizar o cálculo de cubagem, gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 1/3 – número do volume: 557788001
Volume 2/3 – número do volume: 557788002
Volume 3/3 – número do volume: 557788003
Exemplo de sugestão de etiqueta a ser impressa pelo Velox:

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV2.docx`  
**Heading:** Impressão de etiqueta  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para o posto de separação.
Na tela de impressão de etiqueta operador poderá editar a informação de transportadora da etiqueta antes de realizar a impressão.
Obs.: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número: 557788 ao realizar o cálculo de cubagem, gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 1/3 – número do volume: 557788001
Volume 2/3 – número do volume: 557788002
Volume 3/3 – número do volume: 557788003
Exemplo de sugestão de etiqueta a ser impressa pelo Velox:

---
**Origem:** [I23.1615] 2023 — `I23.1615 - PROJETO DANA - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Impressão de etiqueta  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Com as informações recebidas via integração no início do processo, Velox realiza a impressão das etiquetas dos volumes conforme o cálculo de cubagem realizado por pedido.
Será impresso 1 (uma) etiqueta por volume, no caso de 1 (um) pedido que gerou 3 (três) volumes, 3 (três) etiquetas serão impressas (1/3 – 2/3 e 3/3).
Operador realiza a fixação manual dessa etiqueta na caixa conforme o tipo de caixa solicitado pelo Velox, e induz a caixa na linha, seguindo então para o posto de separação.
Na tela de impressão de etiqueta operador poderá editar a informação de transportadora da etiqueta antes de realizar a impressão.
Obs.: Número do volume, será a concatenação do número do pedido com o número atual do volume.
Exemplo: O pedido de número: 557788 ao realizar o cálculo de cubagem, gerou 3 (três) volumes.
Os números dos volumes desse pedido, serão:
Volume 1/3 – número do volume: 557788001
Volume 2/3 – número do volume: 557788002
Volume 3/3 – número do volume: 557788003
Exemplo de sugestão de etiqueta a ser impressa pelo Velox:

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER - REV 1.docx`  
**Heading:** Etiqueta  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A impressão de etiquetas é de responsabilidade do cliente.

---
**Origem:** [Correios] 2024 — `ESPECIFICACAO DE SOFTWARE - SLIM SORTER.docx`  
**Heading:** Etiqueta  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A impressão de etiquetas é de responsabilidade do cliente.

---
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR - Etiquetas.docx`  
**Heading:** Etiquetas BRF Salvador  
**Score:** 94.4 (fuzzy) | **Data:** 2026-06-19

As etiquetas do projeto BRF Salvador possuem diversos tipos de layouts.
Etiqueta completa
Uma das informações mais importantes que teremos que extrair do volume/etiqueta do volume é o lote. Alguns dos lotes já vem na etiqueta, outros devem ser formados diretamente pelo sistema seguindo o formato citado abaixo.
O lote da maioria dos itens é composto por 7 caracteres, sendo eles 3 pela identificação da unidade fabril, 1 final do digito do ano e dia do ano em números corridos.
Segue exemplo:
Lote 3315005 (Data Juliana) onde: 331 identificação da unidade fabril,5 é o ano (2025) e 005 é o dia (1 a 366) ou seja 05/Jan/2025
Observação: Em ano bissexto o dia 29 de fevereiro é considerado o dia 366 do ano.
O lote de produtos PFIX é formado por 10 caracteres, conforme o seguinte formato: Exemplo: 3315007070
331 → Código da fábrica/filial (UP)
5 → Ano de fabricação (2025)
007 → Data Juliana (07 de janeiro)
070 → Faixa de peso da caixa (7 kg)
Segue exemplo do Padrão GS1:
Validade é informada de trás para frente. Ano, mês e dia.
O código da validade está migrando para 17. Podemos ter os dois casos durante a operação.
Será necessário ter nos cadastros do WCS um DE/PARA entre SKU e DUN14 do produto, pois cada layout informa um dos dois e o sistema deve interpretar o que receber.
Sempre será enviado pelo SAP o range permitido pela coleta. Este range será informado pela data de fabricação do item.
Nesta primeira fase, o foco é validar o SKU/DUN14, fazer o fefo de acordo com o range de fabricação enviado pelo SAP e enviar o produto que está saindo (lote de cada item)
Código SSCC = CPF da caixa, será utilizado para a separação de caixas PVAR
O 2D é a concatenação de todos os códigos + 3 TAGS. Sendo elas :
97  Rastreabilidade
240  SKU do item
95  Código do sistema que imprime a etiqueta (não há utilidade para nós)
Caixas sem a data de fabricação no código
Código 92  SKU do produto
Marcação 1  DUN 14	 do produto
Neste layout não temos a data de fabricação em código. Sendo assim deverá armazenar através do IDOC enviado pelo SAP a data de fabricação do lote informado
Caixas sem o lote no código (Exemplo: margarinas)
Neste layout não teremos em código o lote, sendo assim teremos que formar o lote com as informações que temos nos códigos.
(91)  código SIF/ produtor do volume
Segue exemplo da caixa da foto:
3642021
364  Código Produtor
2  Ano de fabricação
021  Data juliana da fabricação (21/01/2022)
Caso este item fosse do tipo PFIX (cadastro de material):
3642021060
364  Código Produtor
2  Ano de fabricação
021  Data juliana da fabricação (21/01/2022)
060  Peso da caixa
Mesmo layout da margarina, porém com os códigos na vertical.
Etiquetas que não tem lote e não tem o código produtor no código de barras
Tem o código segregado
02  DUN14
Não temos o código produtor desta etiqueta, sendo assim terá um cadastro de lote fixo por SIF. Esta informação é retirada do código (7030) 0760292. O SIF sempre será o valor depois de “0760”
Este caso acima é feito por uma empresa terceira que não informa o código produtor. Sendo assim terá um cadastro no WCS onde toda vez que recebemos este sku/DUN14 devemos iniciar com o lote LTT + o que vier na  marcação do código (10).
Neste exemplo acima seria LTT203511

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV2.docx`  
**Heading:** Etiquetas  
**Score:** 94.4 (fuzzy) | **Data:** 2026-06-19

Etiquetas de volume fracionado é de responsabilidade WMS.
Etiquetas de volumes caixa fechada (quando necessário) é de responsabilidade WMS.
Etiquetas de danfe simplificada (quando necessário) é de responsabilidade SAP ou 3 Corações.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV3.docx`  
**Heading:** Etiquetas  
**Score:** 94.4 (fuzzy) | **Data:** 2026-06-19

Etiquetas de volume fracionado é de responsabilidade WMS.
Etiquetas de volumes caixa fechada (quando necessário) é de responsabilidade WMS.
Etiquetas de danfe simplificada (quando necessário) é de responsabilidade SAP ou 3 Corações.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV4.docx`  
**Heading:** Etiquetas  
**Score:** 94.4 (fuzzy) | **Data:** 2026-06-19

Etiquetas de volume fracionado é de responsabilidade WMS.
Etiquetas de volumes caixa fechada (quando necessário) é de responsabilidade WMS.
Etiquetas de danfe simplificada (quando necessário) é de responsabilidade SAP ou 3 Corações.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV6.docx`  
**Heading:** Etiquetas  
**Score:** 94.4 (fuzzy) | **Data:** 2026-06-19

Etiquetas de volume fracionado é de responsabilidade WMS.
Etiquetas de volumes caixa fechada (quando necessário) é de responsabilidade WMS.
Etiquetas de danfe simplificada (quando necessário) é de responsabilidade SAP ou 3 Corações.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV7.docx`  
**Heading:** Etiquetas  
**Score:** 94.4 (fuzzy) | **Data:** 2026-06-19

Etiquetas de volume fracionado é de responsabilidade WMS.
Etiquetas de volumes caixa fechada (quando necessário) é de responsabilidade WMS.
Etiquetas de danfe simplificada (quando necessário) é de responsabilidade SAP ou 3 Corações.

---
**Origem:** [I22.1739] 2024 — `I22.3322 - ESPECIFICACAO DE SOFTWARE - PROJETO HEART - REV8.docx`  
**Heading:** Etiquetas  
**Score:** 94.4 (fuzzy) | **Data:** 2026-06-19

Etiquetas de volume fracionado é de responsabilidade WMS.
Etiquetas de volumes caixa fechada (quando necessário) é de responsabilidade WMS.
Etiquetas de danfe simplificada (quando necessário) é de responsabilidade SAP ou 3 Corações.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Layout de etiqueta de Volume  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A nova etiqueta deverá mostrar os itens que couberem na etiqueta.
Abaixo, segue layout da etiqueta.
ETIQUETA EXEMPLO PARA CAIXAS DO TIPO destinationCode = SPECIAL
COLOCAR ITEM/LOTE/QTD na tabela abaixo
AS PROPRIEDADES ADICIONAIS DESSA ETIQUETA SÃO: ITEM/NOME DO PRODUTO/LOTE/QTD.
COLOCAR EXEMPLO DA ETIQUETA PARA CAIXAS DO TIPO destinationCode = STANDARD

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10.docx`  
**Heading:** REIMPRESSÃO DE ETIQUETA POR VOLUME  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A reimpressão de laudos será realizada exclusivamente por meio de uma tela dedicada no sistema WCS, desenvolvida especificamente para essa funcionalidade. Essa tela terá como principal objetivo permitir a reimpressão de documentos obrigatórios associados aos volumes conferidos, garantindo controle, segurança e rastreabilidade do processo.
Regras de Acesso:
Apenas usuários com perfil de liderança (ex: supervisores, coordenadores, gerentes) poderão autorizar a reimpressão de laudos.
Para cada tentativa de reimpressão, será obrigatória a identificação e autenticação do usuário de liderança, por meio de login/senha ou outro método de validação definido pelo cliente.
Funcionamento da Tela:
A interface exibirá os volumes conferidos com laudos disponíveis para reimpressão, sendo que cada linha representará todos os laudos vinculados a um volume específico.
Será possível realizar buscas e aplicar filtros por:
Número do pedido;
Código do volume;
Data da conferência;
Tipo de produto.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10.docx`  
**Heading:** Layout de etiqueta de Volume  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Na conferência será impresso dois tipos de etiqueta destinado ao volume. O tipo de etiqueta será determinado se o pedido vinculado a aquele volume é “special” ou não. Segue exemplos de cada uma delas abaixo:
Layout da etiqueta especial
Para as etiquetas “special” é acrescentada a informação do item, lote, nome do produto e quantidade
Layout da etiqueta Padrão

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 4.docx`  
**Heading:** Layout de etiqueta de expedição  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A nova etiqueta deverá mostrar os itens que couberem na etiqueta, será desenvolvido um novo layout de etiqueta para essa solução.
Abaixo, segue layout de etiqueta da etiqueta atual.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 5.docx`  
**Heading:** Layout de etiqueta de expedição  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A nova etiqueta deverá mostrar os itens que couberem na etiqueta, será desenvolvido um novo layout de etiqueta para essa solução.
Abaixo, segue layout de etiqueta da etiqueta atual.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 6.docx`  
**Heading:** Layout de etiqueta de expedição  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A nova etiqueta deverá mostrar os itens que couberem na etiqueta, será desenvolvido um novo layout de etiqueta para essa solução.
Abaixo, segue layout de etiqueta da etiqueta atual.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 7.docx`  
**Heading:** Layout de etiqueta de Volume  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A nova etiqueta deverá mostrar os itens que couberem na etiqueta, será desenvolvido um novo layout de etiqueta para essa solução.
Abaixo, segue layout de etiqueta da etiqueta atual.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 8.docx`  
**Heading:** Layout de etiqueta de Volume  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A nova etiqueta deverá mostrar os itens que couberem na etiqueta, será desenvolvido um novo layout de etiqueta para essa solução.
Abaixo, segue layout de etiqueta da etiqueta atual.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9.docx`  
**Heading:** Layout de etiqueta de Volume  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A nova etiqueta deverá mostrar os itens que couberem na etiqueta.
Abaixo, segue layout da etiqueta.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9_Old.docx`  
**Heading:** Layout de etiqueta de Volume  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

A nova etiqueta deverá mostrar os itens que couberem na etiqueta, será desenvolvido um novo layout de etiqueta para essa solução. Incluir observação de faturamento automático na etiqueta
Configurar layout fonte da etiqueta conforme ZPL enviado pelo Mardonio
Abaixo, segue layout de etiqueta da etiqueta atualizado.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Objetivo do documento  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

O objetivo deste documento é detalhar os requisitos funcionais para unificar o processo de "Aloca Palete" com o processo de "Romaneio" para o projeto I23.1412 Fagron CD FAGRON – JUNDIAÍ, SP.
As próximas seções descrevem os detalhes funcionais previstos para esta implementação.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da nova funcionalidade, o WCS deverá ser adaptado para receber informações de Notas Fiscais (DANFE) do sistema D365 F&O da Fagron. Além disso, será desenvolvida uma nova tela de "Romaneio" que centralizará a conferência final dos pedidos e a geração dos documentos de expedição, substituindo o controle manual existente.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Fluxo de Entrada dos Pedidos  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Pedidos Pós-Alocação: Ao serem finalizados no processo de "Aloca Palete" (ou seja, quando todas as "pegas" de um palete são concluídas), os pedidos serão automaticamente inseridos na nova tela de Romaneio para a próxima etapa.
Pedidos de Volume Único: Pedidos que consistem em apenas um volume (caixa) não passarão pelo "Aloca Palete" e devem ser inseridos diretamente na tela de Romaneio, prontos para a conferência fiscal.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - Especificação de Software ADITIVOS - Projeto_FDBR.docx`  
**Heading:** Dados e Status Iniciais  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Carregamento de Dados: Ao entrar na tela, o WCS preencherá automaticamente as colunas com as informações já existentes, incluindo: Num. do Pedido, Pega, Quantidade de volumes, Transportadora e Marca. O WCS também registrará a Data e o Horário exatos em que o pedido foi disponibilizado para o Romaneio.
Status Padrão: Todo pedido inserido na tela iniciará com os seguintes status:
Status da Conferência: PENDENTE (com destaque visual, ex: cor amarela).
Documento gerado: NÃO

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.1.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrado, etc.)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.2.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrado, etc.)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.3.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrado etc.)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Etiqueta para fracionados  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

As informações contidas no código de barras (1912431) terão como informações fixas que antecedem o código a sigla WISPL.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Etiqueta para Full Case  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

As informações contidas no código de barras (1912431) terão como informações fixas que antecedem o código a sigla WISPL.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Etiqueta de pallet  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta de pallet é emitida pelo WMS e é vinculada a posição no processo de abertura do PTM o Velox faz nenhuma validação das informações contidas na etiqueta.

---
**Origem:** [I23.144] 2024 — `I22.2505 - PROJETO AUTOMATIZE 2 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-REV.6.docx`  
**Heading:** Rejeito  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para a região do rejeito, 01 (uma) estação de trabalho será necessária para verificação dos motivos de rejeito, bem como tratativas dos volumes (reimpressão de etiquetas, Volume não encontrado etc.)
Abaixo segue a configuração mínima para as estações de trabalho:

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Etiqueta de reimpressão  
**Score:** 90.9 (fuzzy) | **Data:** 2026-06-19

Caso a etiqueta for reimpressa, deve haver esta flag para visualização do time do cliente.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Etiqueta de pallet  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Conforme mencionado no decorrer do documento, a etiqueta do pallet será utilizada para uma triagem/rastreio dentro do sistema Velox pois não será enviada esta informação ao WMS.
Este código deve ser composto por 6 digitos.
Segue exemplo :

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 01.docx`  
**Heading:** Etiqueta de reimpressão  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

ADICIONAR ETIQUETA AJUSTADA!

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Etiqueta na primeira impressão FULLCASE  
**Score:** 95.2 (fuzzy) | **Data:** 2026-06-19

LEMBRAR DA REGRA imprimir mais de uma etiqueta caso as informações do itens separados não caibam na 1ª etiqueta, essa 2ª etiqueta não pode ter código de barras, somente as informações dos itens.

---
**Origem:** [I24.101] 2024 — `I24.101 - ESPECIFICACAO DE SOFTWARE - REV. 1.docx`  
**Heading:** Etiqueta de reimpressão  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

ADICIONAR ETIQUETA AJUSTADA!

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES -.docx`  
**Heading:** Processo de Impressão de Etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

À medida que as caixas de papelão passam pelos leitores, a impressora é acionada automaticamente para gerar as etiquetas.
Existem dois layouts principais de etiquetas:
MATRIZ e FILIAL.
Cinco layouts específicos para marketplaces.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV1.docx`  
**Heading:** Etiqueta de produto  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta de produto, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV1.docx`  
**Heading:** Etiqueta UC – Expedição  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta UC, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV2.docx`  
**Heading:** Etiqueta de produto  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta de produto, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV2.docx`  
**Heading:** Etiqueta UC – Expedição  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta UC, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV3.docx`  
**Heading:** Etiqueta de produto  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta de produto, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV3.docx`  
**Heading:** Etiqueta UC – Expedição  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta UC, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV4.docx`  
**Heading:** Etiqueta de produto  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta de produto, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV4.docx`  
**Heading:** Etiqueta UC – Expedição  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta UC, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV5.docx`  
**Heading:** Etiqueta de produto  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta de produto, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV5.docx`  
**Heading:** Etiqueta UC – Expedição  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta UC, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Etiqueta de produto  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta de produto, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Etiqueta UC – Expedição  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta UC, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA.docx`  
**Heading:** Etiqueta de produto  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta de produto, é de responsabilidade do cliente.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA.docx`  
**Heading:** Etiqueta UC – Expedição  
**Score:** 90.0 (fuzzy) | **Data:** 2026-06-19

Etiqueta UC, é de responsabilidade do cliente.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** Etiquetas  
**Score:** 90.9 (fuzzy) | **Data:** 2026-06-19

Todas as etiquetas utilizadas durante todo o processo da automação serão impressas pelo sistema VELOX MFC. As etiquetas não serão reutilizadas.
Exemplos de Etiqueta

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** 11.1	Exemplo de etiquetas  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

A definir.

---
**Origem:** [I22.170] 2025 — `ESPECIFICACAO DE SOFTWARE - ADITIVO - Portal Kognex.docx`  
**Heading:** Portal Etiquetas  
**Score:** 95.2 (fuzzy) | **Data:** 2026-06-19

WCS  C&A - Post
O sistema WCS Velox deve enviar uma requisição HTTP ao endpoint da API da C&A para cada volume identificado nos portais Cognex.
O objetivo é informar ao WMS que um novo volume passou pelo portal, permitindo que o WMS realize a impressão da etiqueta final correspondente.
Endpoint: http://osbmanhm:9010/api/pickpack/api/pickpack/olpn/printDocument?DocumentTemplateId=DC02_CUSTOM_SHIPPING_LABEL-V2&DocumentTemplateTypeId=SHIPPING_LABEL&PrinterId=CDA_ETIQUETADORA_VIDEOJE
Exemplo JSON:
{
"OlpnId": "A56200007727",
"DocumentTemplate": "DC02_CUSTOM_SHIPPING_LABEL-V2",
"Printer": "CDA_ETIQUETADORA_VIDEOJET"
}
OBS: Será necessário configurar Headers:
location = 10097 //Fixo Facility
metodo = rest //Fixo

---
**Origem:** [I24.210] 2024 — `I24 -  PROJETO COUGAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Reabastecimento e PTW, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I24.210] 2024 — `PROJETO COUGAR - ESPECIFICAÇÃO DE SOFTWARE MACROFLUXO.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas, ou seja, esta aplicação executará as rotinas de Reabastecimento e PTW, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do banco). As informações são trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Microsoft Edge, Google Chrome ou Mozilla Firefox).

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 2.docx`  
**Heading:** ESPECIFICAÇÃO  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas. Essa aplicação executará as rotinas de desvio de caixas nos diferentes níveis para separação de pedidos, PTW e reabastecimento, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT requer um banco de dados para armazenar e gerenciar as informações corretamente, cuja licença e instalação serão fornecidas pelo cliente. As informações são trocadas entre a aplicação e as estações de trabalho por meio de interface Web, sendo necessária uma infraestrutura adequada para esse processo.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 3.docx`  
**Heading:** ESPECIFICAÇÃO  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas. Essa aplicação executará as rotinas de desvio das caixas nos diferentes níveis para separação de pedidos, PTW e reabastecimento, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT requer um banco de dados para armazenar e gerenciar as informações corretamente, cuja licença e instalação serão fornecidas pelo cliente. As informações são trocadas entre a aplicação e as estações de trabalho por meio de interface Web, sendo necessária uma infraestrutura adequada para esse processo.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** ESPECIFICAÇÃO  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas. Essa aplicação executará as rotinas de desvio das caixas nos diferentes níveis para separação de pedidos, PTW e reabastecimento, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT requer um banco de dados para armazenar e gerenciar as informações corretamente, cuja licença e instalação serão fornecidas pelo cliente. As informações são trocadas entre a aplicação e as estações de trabalho por meio de interface Web, sendo necessária uma infraestrutura adequada para esse processo.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas. Essa aplicação executará as rotinas de desvio das caixas nos diferentes níveis para separação de pedidos, PTW e reabastecimento, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT irá operar na modalidade (SaaS) Software como Serviço e requer um banco de dados para armazenar e gerenciar as informações corretamente, cuja licença e instalação serão fornecidas pela INVENT. As informações são trocadas entre a aplicação e as estações de trabalho por meio de interface Web, sendo necessária uma infraestrutura adequada para esse processo.
A aplicação da INVENT requer um banco de dados para armazenar e gerenciar as informações de forma eficiente, cuja licença e instalação serão fornecidas pela INVENT. Para garantir análises avançadas e relatórios dinâmicos, a solução pode ser integrada a um sistema em nuvem com SSAS (SQL Server Analysis Services), permitindo processamento e consulta de grandes volumes de dados de maneira ágil. As informações são trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web, sendo essencial uma infraestrutura robusta e escalável, como a nuvem, para garantir a comunicação contínua e o processamento seguro dessas informações."

---
**Origem:** [I25.215] 2025 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV. 1.docx`  
**Heading:** Especificação  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para o correto funcionamento da Automação, é necessária uma aplicação responsável pelo gerenciamento das informações das caixas. Essa aplicação executará as rotinas de desvio das caixas nos diferentes níveis para separação de pedidos, PTW e reabastecimento, tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente e a automação chão-de-fábrica INVENT.
A aplicação da INVENT irá operar na modalidade (SaaS) Software como Serviço e requer um banco de dados para armazenar e gerenciar as informações corretamente, cuja licença e instalação serão fornecidas pela INVENT. As informações são trocadas entre a aplicação e as estações de trabalho por meio de interface Web, sendo necessária uma infraestrutura adequada para esse processo.
A aplicação da INVENT requer um banco de dados para armazenar e gerenciar as informações de forma eficiente, cuja licença e instalação serão fornecidas pela INVENT. Para garantir análises avançadas e relatórios dinâmicos, a solução pode ser integrada a um sistema em nuvem com SSAS (SQL Server Analysis Services), permitindo processamento e consulta de grandes volumes de dados de maneira ágil. As informações são trocadas entre a aplicação e as estações de trabalho por meio de uma interface Web, sendo essencial uma infraestrutura robusta e escalável, como a nuvem, para garantir a comunicação contínua e o processamento seguro dessas informações."

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 3.docx`  
**Heading:** Finalização pedido -Reutilização etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As etiquetas de caixas podem ser reutilizadas desde que ela já tenha completado todo o seu ciclo dentro da operação e transformada em um pacote final para ser enviado para o cliente. WCS atualizará essa informação no momento que receber a integração informando que todo que o pedido foi finalizado
Após receber essa integração, o WCS estará preparado para receber novamente essa etiqueta para um novo pedido.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Finalização pedido -Reutilização etiquetas  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

As etiquetas de caixas podem ser reutilizadas desde que ela já tenha completado todo o seu ciclo dentro da operação e transformada em um pacote final para ser enviado para o cliente. WCS atualizará essa informação no momento que receber a integração informando que todo que o pedido foi finalizado.
Após receber essa integração, o WCS estará preparado para receber novamente essa etiqueta para um novo pedido.
