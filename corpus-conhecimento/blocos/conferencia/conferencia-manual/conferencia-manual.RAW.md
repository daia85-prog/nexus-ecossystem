# conferencia-manual.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Impressão de Laudos e Etiquetas na conferência  
**Score:** — (semantico) | **ID:** 650f3af6b699c4eb

A tela de conferência do WCS contará com a funcionalidade de impressão automática de laudos, obrigatória para determinados volumes.
A impressão do laudo e etiqueta deverá ocorrer de acordo com o volume (caixa), ou seja, conterá os laudos conforme os lotes de cada caixa.
Funcionamento:
Durante o processo de conferência, o WCS identificará, através da integração enviada pelo ERP D365 F&O (GERENCIADOR DE ESTOQUES), se os itens do volume exigem acompanhamento de laudo.
Ao término da checagem do item ou volume, o sistema realizará automaticamente a impressão dos laudos necessários, sem necessidade de ação manual por parte do operador.
A impressão ocorrerá na impressora vinculada à estação de conferência, garantindo que o documento seja entregue junto ao produto ainda no ponto de controle.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Conferência Manual (Auditoria e Clientes Especiais)  
**Score:** — (nome-topico) | **ID:** 3cedaecef34a935c

Esta estação recebe exclusivamente os volumes desviados pela balança dinâmica ou selecionados por amostragem (Sorteio de Qualidade). Este processo garante que a quantidade de itens e o peso real do volume estejam em total conformidade com o pedido.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Conferência Manual Padrão  
**Score:** — (nome-topico) | **ID:** 2980e7d8984177b4

Pré-requisitos para a Conferência:
Para que o processo de auditoria e a validação na balança ocorram corretamente, o WCS é alimentado com:
Peso Unitário: O cadastro técnico de cada SKU com seu peso em gramas.
Peso das Caixas (Tara): O cadastro do peso real de cada modelo de caixa de separação utilizado.
Tolerância de Peso: O sistema permite a configuração de uma margem (em gramas ou percentual) para absorver pequenas variações sem gerar desvios desnecessários.
Fluxo Operacional:
Abertura do Processo: O operador acessa a tela de conferência e realiza a leitura do LPN (caixa). O WCS exibe instantaneamente o motivo do desvio (ex: "Divergência de Peso", "Auditoria de Qualidade" ou "Shortpicking").
Conferência Cega (Blind Check):
O operador deve realizar a leitura dos itens, um a um, para validar o conteúdo físico.
O sistema não exibe a lista de itens ou quantidades esperadas, exigindo a bipagem de todos os produtos para garantir a acuracidade total da conferência.
Tratativa de Divergências e Correção:
Sobra: Caso o sistema identifique itens extras ao final da bipagem, o operador deve retirar o excedente da caixa.
Falta: Se houver ausência de produtos, o operador pode completar a caixa (caso o item esteja disponível no pulmão de tratativa) ou acionar o botão "Encerrar Conferência".
Finalização e Corte: Ao clicar em encerrar com itens faltantes, o operador deve selecionar uma das opções:
Cortar: A confirmação do corte exige a autenticação de um supervisor por senha ou crachá — sem essa aprovação o corte não é efetivado. Após a aprovação, o WCS registra que os itens faltantes foram cortados do pedido e envia a informação ao WMS.
Coletar (Novo Volume): O WCS sinaliza a pendência e permite que o sistema registre a necessidade de coletar esses itens faltantes em um novo volume futuro para completar o pedido.
Conclusão: Após a validação de todos os itens e tratamento de sobras/faltas, o WCS registra que a auditoria foi concluída, permitindo que o volume siga para a etapa de Packing.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Conferência Clientes Especiais (KIT SKU)  
**Score:** — (nome-topico) | **ID:** 8d178ae38f6b3642

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
**Origem:** [I22.120] 2024 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR_SPRT_5.docx`  
**Heading:** Check List Vazio/Cheio  
**Score:** — (semantico) | **ID:** c95641e8c08f7b31

Deve ser criada uma tela de configuração no WCS que permita a edição das perguntas e a alteração da quantidade de perguntas nos checklists inicial e final. Essa funcionalidade deve possibilitar ajustes dinâmicos, garantindo flexibilidade na personalização dos checklists conforme as necessidades operacionais.
Caminhão palletizado pode iniciar a separação sem a necessidade de ter o check list do vazio aprovado.
Caminhão estivado deve ter o check list do vazio aprovado para iniciar a separação. Caso contrario não pode ser aceso os Pickings até a aprovação.
Não pode iniciar o carregamento sem ter o check list do vazio aprovado independentemente do tipo de pallet (estivado ou palletizado).
Qualquer tipo de impeditivo que for enviado, o sistema deve abrir uma aba que permita o operador a informar o problema encontrado e tirar a foto da evidencia. Além disso,  deverá abrir uma Lista suspensa com motivos cadastrado, e um campo de Observação (no máximo 50 caracteres).
Para o histórico, é necessário manter o primeiro check list com as perguntas conforme e não conforme, com data/horário/placa/onda e transporte. Criar um Dashboard com essas informações do Check List e com possibilidade de exportar (Excel/PDF/etc).
Pode acontecer a troca do caminhão (placa) esperada para aquele transporte, sendo assim será enviado pelo SAP o mesmo IDOC enviado anteriormente, porém com a informação da placa do veiculo alterada para a nova. Neste caso, a atualização no WCS deverá ser automática e refletida nos tablet's / monitores.
Todos os check lists sejam erros ou acertos devem ficar guardados no sistema para consulta e histórico do time BRF. Essa base deve conter data, onda, transporte, doca e placa.
O operador deve informar a Placa e a doca que ele está realizando o check list do vazio, sendo assim o sistema irá exibir as seguintes informações:
Onda
Placa
Doca
Temperatura
Segue exemplo de perguntas que já existem hoje na operação:
Baú com odor?
Baú/Ambiente limpo?
Cortina com boa Condição?
Baú com iluminação?
Porta Cong. Limpa?
Divis Boas Cond.?
Estrutura em boas Condições?
Sem resto vidro/ac?
SKU cong. No Resfriado.?
Temperatura ok?
Presença de Pragas?
Observação: Caso feche com alguma anomalia o sistema devera avisar o colaborador e deixar registrar texto e foto.
Observação: Configurar quantidade de campos entre 20 e 80 caracteres para as perguntas.
Ao finalizar o check list início atualizar o monitor status doca, Coluna “Status doca” para check list início.
O checklist final deverá incorporar as informações do checklist inicial e realizar as validações necessárias para garantir que, ao ser concluído e finalizado, a minuta de carregamento seja disparada automaticamente.
Em casos de falta/corte que forem realizados e com a finalização da onda/transporte pelo CPI, será liberado a realização do check list do fim.
O operador que fará o carregamento na doca deve acompanhar essa atualização que será feita pelo CPI via Tablet que estará disponível na saída das docas.
O sistema irá solicitar novamente a placa do veiculo e a doca para puxar as informações já realizadas no primeiro check list.
No monitor de check list final teremos os seguintes campos:
Doca (a mesmas terá que ser preenchida automaticamente)
Placa (a mesmas terá que ser preenchida automaticamente)
Temperatura Final
ID 1 Colaborador ID 2 Colaborador Abrir campo para preenchimento
ID 3 Colaborador ID 4 Colaborador Abrir campo para preenchimento
Quantidade Pallet (Abrir Pop up com tipo de Pallet a ser preenchido)
Total Pallet
Lacre do caminhão
Nota tipos de Pallet:
One way
Pallet BRF
Pallet PBR
Neste campo de lacre deve abrir um campo para o operador realizar a leitura ou digitar o número do lacre.
No momento que finalizar o Check List cheio o WCS deverá enviar o IDOC para o SAP, formalizando a minuta final do carregamento, atualizando o monitor de status da doca (coluna “Status Doca” para check list fim) e o SAP realizar as tratativas posteriores.
