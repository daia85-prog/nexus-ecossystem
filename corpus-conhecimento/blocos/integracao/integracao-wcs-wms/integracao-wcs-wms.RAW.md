# integracao-wcs-wms.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I23.125] 2023 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - CRISTAL.docx`  
**Heading:** Confirmação de Separação (Picking Confirm)  
**Score:** — (semantico) | **ID:** 6b42258189fbaf9b

Ao final da separação de todos os itens da última estação de picking, o sistema Velox deverá enviar a integração de confirmação de separação ao EWM.
Para volumes de itens fracionados: integração enviada ao finalizar a remessa por completo.
Para full case (caixa fechada): enviada no mesmo momento que confirmar a separação na finalização completa da remessa.
Para volumes de exceção: enviada ao finalizar a remessa do volume no Picking Cart.
Essa integração deverá conter todos os dados do volume e os itens pertencentes a esse volume.
Estrutura de JSON de Confirmação de Separação (Fracionados):
Velox > EWM
Por se tratar de full case (caixa fechada), o sistema Velox, não calculará cubagem, com isso não solicita tamanho de caixa, campo "cod_caixa".
Sugestão de JSON de Confirmação de Separação (Full Case – Caixa Fechada):

---
**Origem:** [I25.9022] 2024 — `I23.3801 - ESPECIFICACAO DE SOFTWARE - OCTOPUS MS.docx`  
**Heading:** Cancelamento de Volumes Fracionados  
**Score:** — (semantico) | **ID:** 5b1e6b276940ced3

O sistema WCS deve permitir o cancelamento dos volumes fracionados que não tiveram a coleta finalizada na esteira, sendo possível cancelar somente os volumes que ainda não foram enviados na integração de confirmação de picking.
A operação poderá realizar o cancelamento de uma carga completa ou selecionar volumes específicos para essa finalidade.
No caso de cargas que contenham volumes parcialmente enviados na confirmação de picking, o WCS deverá efetuar o cancelamento apenas dos volumes pendentes no sistema, mantendo os volumes que já foram confirmados.

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Retorno Reabastecimento  
**Score:** — (json-no-corpo) | **ID:** eb77dfe6279c2611

WCS  EMW/SAP
Essa integração tem como objetivo informar ao WMS que o volume está na posição de picking solicitada. A integração será enviada no momento em que o operador finalizar a alocação dos produtos na posição final de picking utilizando o sistema do WCS.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"reabastecimentos": [
{
"tarefa": "00013",
"pos_destino": "1N49042031",
"sku": "3040",
"dun": "49871236547800",
"qt_sug": 2,
"qt_reab": 2
}
]
}

---
**Origem:** [I24.203] 2025 — `I24.203 - Especificação de Software - Projeto Beta-ATT.docx`  
**Heading:** Etiqueta Picking Pallet e Exceção  
**Score:** — (semantico) | **ID:** 6730236aa7197290

Essa etiqueta será utilizada no processo de separação Picking Pallet e Picking Exceção. O QR Code (Superior Direito) impresso conterá as informações necessárias para identificação e rastreabilidade da caixa, com dados provenientes da integração conforme tópico anterior.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Snap Shot (POST)  
**Score:** — (json-no-corpo) | **ID:** c46a1c9510064575

WMSWCS
Essa integração tem como objetivo espelhar o estado atual do estoque em todas as posições do estoque, conforme registrado no WMS.
Observação: Caso as posições de picking estejam ocupadas, o WCS realizará a baixa dos itens nelas contidos, considerando exclusivamente os dados recebidos na integração Snap Shot. Se uma posição estiver vazia no payload, o WCS assumirá que está desocupada. Para posições com itens informados, o WCS atualizará os dados conforme os novos itens e quantidades enviados.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 150,
"endColeta": null,
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
{
"codInterno": "string",
"qtd": 150,
"endColeta": null,
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
{
"codInterno": null,
"qtd": null,
"endColeta": null,
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
}
]
Obs: Os campos "codInterno" e "endColeta" devem estar corretamente cadastrados no WCS para que a integração seja aceita.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Inbound Sync (POST)  
**Score:** — (json-no-corpo) | **ID:** 5717c95c8725a583

WCS  WMS
Essa integração tem como objetivo espelhar o estado atual do estoque em posse do WCS ao WMS.
O WCS informará a quantidade atual do estoque em posse do WCS, considerando os recebimentos da integração CET “Confirmação Entrada no Transfer” (POST) e a saída desses itens. Essa integração será disparada toda vez que tivermos movimentações nos porta pallets (pulmão) visando manter atualizado o estoque no WMS. Também será utilizada para movimentação entre porta pallets.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 0,
"endColeta": "string",
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
{
"codInterno": "string",
"qtd": 850,
"endColeta": "string",
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
}
]

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Devolução de Volumes cancelados  
**Score:** — (semantico) | **ID:** 3a6dcf2c30cb7b03

O processo de devolução de volumes cancelados ocorre quando há a necessidade de retornar volumes que foram processados, mas ainda não enviados na integração para o WMS. Quando um volume cancelado é identificado, ele precisa ser retirado do fluxo operacional e devolvido de forma adequada.
Fluxo do Processo:
Identificação do Volume Cancelado: O WCS identifica o volume cancelado através de uma integração com o WMS ou por meio de um cancelamento no próprio sistema WCS.
Criação de Tarefa de Devolução: O WCS cria automaticamente uma tarefa de devolução para cada volume associado ao pedido cancelado. A tarefa gerada ficará disponível na tela de devolução para o operador.
Início da Tarefa: O operador realiza o login no WCS utilizando o coletor Android e acessa a tela de devolução de volumes cancelados.
Leitura do Volume: O operador localiza fisicamente o volume cancelado e realiza a leitura do código de barras do volume com o coletor Android.
Início do Processo de Devolução: Após a leitura da etiqueta, o WCS inicia a tarefa de devolução, redirecionando o operador para a tela da tarefa. Esta tela exibirá a lista de itens a serem devolvidos, juntamente com a quantidade e o endereço de devolução.
Processo de Devolução: O operador se dirige ao endereço informado na tarefa, realiza a leitura do código do endereço, confirma a quantidade que está sendo devolvida e faz a leitura do código do item para confirmar a devolução.
Repetição do Processo: O operador deve repetir o processo para todos os itens associados ao volume a ser devolvido.
Finalização da Tarefa: Após concluir a devolução de todos os itens, o WCS exibe uma mensagem informando que a devolução do volume foi concluída. O operador então poderá ler a próxima etiqueta de volume para iniciar o processo de devolução de outro volume, se necessário.
O WCS não irá devolver os itens ao Transfer, sendo possível somente devolver para as posições de picking, caso não haja posição de picking disponível, a tarefa não poderá ser finalizada até que tenhamos uma posição disponível.
OBS: O WCS disponibiliza um relatório de "Pedidos Cancelados", que pode ser acessado pelo operador. O operador deverá informar o código do pedido, e o sistema irá gerar uma lista de todos os volumes associados a esse pedido. O relatório também exibirá em qual local da automação cada volume está alocado.
Após a finalização de todas as tarefas de devolução vinculadas ao pedido o WCS irá enviar uma integração informando que os itens do pedido já foram devolvidos para as posições.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Snap Shot (POST)  
**Score:** — (json-no-corpo) | **ID:** 0ed13f727234c528

WMSWCS
Essa integração tem como objetivo espelhar o estado atual do estoque em todas as posições do estoque, conforme registrado no WMS.
Observação: Caso as posições de picking estejam ocupadas, o WCS realizará a baixa dos itens nelas contidos, considerando exclusivamente os dados recebidos na integração Snap Shot. Se uma posição estiver vazia no payload, o WCS assumirá que está desocupada. Para posições com itens informados, o WCS atualizará os dados conforme os novos itens e quantidades enviados.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 150,
"endColeta": null,
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
{
"codInterno": "string",
"qtd": 150,
"endColeta": null,
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
{
"codInterno": null,
"qtd": null,
"endColeta": null,
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
}
]
Obs: Os campos "codInterno" e "endColeta" devem estar corretamente cadastrados no WCS para que a integração seja aceita.

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Inbound Sync (POST)  
**Score:** — (json-no-corpo) | **ID:** de128266427d2602

WCS  WMS
Essa integração tem como objetivo espelhar o estado atual do estoque em posse do WCS ao WMS.
O WCS informará a quantidade atual do estoque em posse do WCS, considerando os recebimentos da integração CET “Confirmação Entrada no Transfer” (POST) e a saída desses itens. Essa integração será disparada toda vez que tivermos movimentações nos porta pallets (pulmão) visando manter atualizado o estoque no WMS. Também será utilizada para movimentação entre porta pallets.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 0,
"endColeta": "string",
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
{
"codInterno": "string",
"qtd": 850,
"endColeta": "string",
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
}
]

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Devolução de Volumes cancelados  
**Score:** — (semantico) | **ID:** 96b8ec5d42484edc

O processo de devolução de volumes cancelados ocorre quando há a necessidade de retornar volumes que foram processados, mas ainda não enviados na integração para o WMS. Quando um volume cancelado é identificado, ele precisa ser retirado do fluxo operacional e devolvido de forma adequada.
Fluxo do Processo:
Identificação do Volume Cancelado: O WCS identifica o volume cancelado através de uma integração com o WMS ou por meio de um cancelamento no próprio sistema WCS.
Criação de Tarefa de Devolução: O WCS cria automaticamente uma tarefa de devolução para cada volume associado ao pedido cancelado. A tarefa gerada ficará disponível na tela de devolução para o operador.
Início da Tarefa: O operador realiza o login no WCS utilizando o coletor Android e acessa a tela de devolução de volumes cancelados.
Leitura do Volume: O operador localiza fisicamente o volume cancelado e realiza a leitura do código de barras do volume com o coletor Android.
Início do Processo de Devolução: Após a leitura da etiqueta, o WCS inicia a tarefa de devolução, redirecionando o operador para a tela da tarefa. Esta tela exibirá a lista de itens a serem devolvidos, juntamente com a quantidade e o endereço de devolução.
Processo de Devolução: O operador se dirige ao endereço informado na tarefa, realiza a leitura do código do endereço, confirma a quantidade que está sendo devolvida e faz a leitura do código do item para confirmar a devolução.
Repetição do Processo: O operador deve repetir o processo para todos os itens associados ao volume a ser devolvido.
Finalização da Tarefa: Após concluir a devolução de todos os itens, o WCS exibe uma mensagem informando que a devolução do volume foi concluída. O operador então poderá ler a próxima etiqueta de volume para iniciar o processo de devolução de outro volume, se necessário.
O WCS não irá devolver os itens ao Transfer, sendo possível somente devolver para as posições de picking, caso não haja posição de picking disponível, a tarefa não poderá ser finalizada até que tenhamos uma posição disponível.
OBS: O WCS disponibiliza um relatório de "Pedidos Cancelados", que pode ser acessado pelo operador. O operador deverá informar o código do pedido, e o sistema irá gerar uma lista de todos os volumes associados a esse pedido. O relatório também exibirá em qual local da automação cada volume está alocado.
Após a finalização de todas as tarefas de devolução vinculadas ao pedido o WCS irá enviar uma integração informando que os itens do pedido já foram devolvidos para as posições.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Snap Shot (POST)  
**Score:** — (json-no-corpo) | **ID:** f5584d24e8323e40

WMSWCS
Essa integração tem como objetivo espelhar o estado atual do estoque em todas as posições do estoque, conforme registrado no WMS.
Observação: Caso as posições de picking estejam ocupadas, o WCS realizará a baixa dos itens nelas contidos, considerando exclusivamente os dados recebidos na integração Snap Shot. Se uma posição estiver vazia no payload, o WCS assumirá que está desocupada. Para posições com itens informados, o WCS atualizará os dados conforme os novos itens e quantidades enviados.
Regra adicional: sempre que a quantidade chegar a 0 (qtd=0), o WCS deve esvaziar a posição (tratá-la como vazia), liberando-a para novas alocações. A regra se aplica tanto para qtd=0 quanto para codInterno=null. Finalidade da integração: (1) envio da foto inicial do estoque no startup/carga do WCS e (2) equalização sob demanda, quando identificada divergência entre WMS e WCS — não há disparo em frequência fixa.
Exemplo JSON:
[
{
"endColeta": "001.001.0001.0001",
"itens": [
{
"codIntenrno": "string",
"qtd": 150,
"lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
}
]
},
{
"endColeta": "001.001.0001.0001",
"itens": [
{
"codIntenrno": "string",
"qtd": 150,
"lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
}
]
},
{
"endColeta": "001.001.0001.0001",
"itens": [
{
"codIntenrno": "string",
"qtd": 150,
"lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
}
]
}
]
Obs: Os campos "codInterno" e "endColeta" devem estar corretamente cadastrados no WCS para que a integração seja aceita.

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Inbound Sync (POST)  
**Score:** — (json-no-corpo) | **ID:** 7b65a093f19a3370

WCS  WMS
Essa integração tem como objetivo espelhar o estado atual do estoque em posse do WCS ao WMS.
O WCS informará a quantidade atual do estoque em posse do WCS, considerando os recebimentos da integração CET “Confirmação Entrada no Transfer” (POST) e a saída desses itens. Essa integração será disparada toda vez que tivermos movimentações nos porta pallets (pulmão) visando manter atualizado o estoque no WMS. Também será utilizada para movimentação entre porta pallets.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 0,
"endColeta": "string",
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
{
"codInterno": "string",
"qtd": 850,
"endColeta": "string",
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
}
]

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Devolução de Volumes cancelados  
**Score:** — (semantico) | **ID:** 9a0d58e87c09f2b0

O processo de devolução de volumes cancelados ocorre quando há a necessidade de retornar volumes que foram processados, mas ainda não enviados na integração para o WMS. Quando um volume cancelado é identificado, ele precisa ser retirado do fluxo operacional e devolvido de forma adequada.
Fluxo do Processo:
Identificação do Volume Cancelado: O WCS identifica o volume cancelado através de uma integração com o WMS ou por meio de um cancelamento no próprio sistema WCS.
Criação de Tarefa de Devolução: O WCS cria automaticamente uma tarefa de devolução para cada volume associado ao pedido cancelado. A tarefa gerada ficará disponível na tela de devolução para o operador.
Início da Tarefa: O operador realiza o login no WCS utilizando o coletor Android e acessa a tela de devolução de volumes cancelados.
Leitura do Volume: O operador localiza fisicamente o volume cancelado e realiza a leitura do código de barras do volume com o coletor Android.
Início do Processo de Devolução: Após a leitura da etiqueta, o WCS inicia a tarefa de devolução, redirecionando o operador para a tela da tarefa. Esta tela exibirá a lista de itens a serem devolvidos, juntamente com a quantidade e o endereço de devolução.
Processo de Devolução: O operador se dirige ao endereço informado na tarefa, realiza a leitura do código do endereço, confirma a quantidade que está sendo devolvida e faz a leitura do código do item para confirmar a devolução.
Repetição do Processo: O operador deve repetir o processo para todos os itens associados ao volume a ser devolvido.
Finalização da Tarefa: Após concluir a devolução de todos os itens, o WCS exibe uma mensagem informando que a devolução do volume foi concluída. O operador então poderá ler a próxima etiqueta de volume para iniciar o processo de devolução de outro volume, se necessário.
O WCS não irá devolver os itens ao Transfer, sendo possível somente devolver para as posições de picking, caso não haja posição de picking disponível, a tarefa não poderá ser finalizada até que tenhamos uma posição disponível.
OBS: O WCS disponibiliza um relatório de "Pedidos Cancelados", que pode ser acessado pelo operador. O operador deverá informar o código do pedido, e o sistema irá gerar uma lista de todos os volumes associados a esse pedido. O relatório também exibirá em qual local da automação cada volume está alocado.
Após a finalização de todas as tarefas de devolução vinculadas ao pedido o WCS irá enviar uma integração informando que os itens do pedido já foram devolvidos para as posições.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Execução e Continuidade das Coletas  
**Score:** — (semantico) | **ID:** 96289631a6eb8fe8

O operador realiza a coleta conforme indicação do LED e confirma a execução ao final de cada posição. A cada confirmação, o WCS deve registrar o operador responsável, garantindo a rastreabilidade da operação.
A execução da coleta é totalmente guiada pela lista de coleta gerada na onda, sendo está a referência principal do processo. O WCS deve seguir essa lista até sua conclusão, garantindo que toda a demanda seja atendida conforme planejado.
A lista de coleta é tratada de forma segmentada por postos de trabalho. Isso significa que, embora a lista seja única por onda, sua execução ocorre de forma distribuída, onde cada posto consome apenas as tarefas que correspondem às suas posições de picking. Dessa forma, o WCS mantém o controle da execução global da onda, enquanto gerencia de forma independente a fila de tarefas de cada posto.
Após a finalização das tarefas inicialmente atribuídas ao posto, o WCS deve avaliar automaticamente a existência de novas coletas pendentes para a mesma onda, considerando múltiplos critérios operacionais.
A liberação de novas tarefas não deve ocorrer apenas com base na existência de demanda, mas sim após validação completa das seguintes condições:
Existência de demanda pendente da onda para o posto, considerando SKU, quantidade e posições elegíveis ainda não atendidas
Disponibilidade de estoque nas posições de picking, incluindo:
Estoque físico disponível
Posições ainda não consumidas ou parcialmente consumidas
Respeito às regras de seleção de lote [Seleção de Lote]
Tipo de produto a ser coletado, garantindo a priorização correta:
Materiais PVAR devem ter a prioridade maior de coleta dos demais tipos (PPAD/PFIX) [Coleta PVAR]
Regras de temperatura associadas à onda:
Em cenários de transporte não misto, o WCS deve respeitar a sequência de temperatura definida na criação da onda [Manutenção de transportes].
Em cenários de transporte misto, o sistema pode liberar coletas de diferentes temperaturas de forma paralela, conforme disponibilidade e prioridade
[Tipos de Separação]
Estado atual da execução no posto:
Garantir que não existam tarefas ativas antes de liberar novas posições
Respeitar a sequência lógica definida para o fluxo de coleta
Após a validação de todos os critérios, caso existam tarefas elegíveis, o WCS deve liberar automaticamente as próximas coletas ao operador, acionando os LEDs conforme a ordem de prioridade estabelecida.

---
**Origem:** [I22.120] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR.docx`  
**Heading:** Volumes Não Tratáveis  
**Score:** — (semantico) | **ID:** d4ec447d60c29e1d

Para volumes não tratáveis (duplicidade, excedentes, shelf life, separação não confirmada, onda cancelada), a reimpressão de etiqueta não resolve o problema, pois a causa do rejeito é sistêmica e não física. Esses volumes são registrados na estação de rejeito para visibilidade da operação, mas sua tratativa é realizada fora do processo automatizado geralmente envolvendo realocação manual, devolução ao estoque ou descarte conforme procedimento MBRF.

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Retorno Reabastecimento  
**Score:** — (json-no-corpo) | **ID:** c3c213ab74a866c9

WCS  EMW/SAP
Essa integração tem como objetivo informar ao WMS que o volume está na posição de picking solicitada. A integração será enviada quando o operador finalizar a alocação dos produtos na posição final de picking utilizando o sistema do WCS.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"codDeposito": 1234,
"reabastecimentos": [
{
"tarefa": "00013",
"pos_destino": "1N49042031",
"sku": "3040",
"dun": "49871236547800",
"qt_sug": 2,
"qt_reab": 2
}
]
}

---
**Origem:** [I25.111] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Heading:** Etiqueta Picking Pallet e Exceção  
**Score:** — (semantico) | **ID:** a7d9512774b28a6b

Essa etiqueta será utilizada no processo de separação Picking Pallet e Picking Exceção. O QR Code (Superior Direito) impresso conterá as informações necessárias para identificação e rastreabilidade da caixa, com dados provenientes da integração conforme tópico anterior.

---
**Origem:** [I25.136] 2026 — `I25.136 - Especificação de Software - Projeto Beta-Esteio.docx`  
**Heading:** Finalização e Confirmação  
**Score:** — (semantico) | **ID:** dec78448d78a433f

Ao final da coleta de cada volume, o operador confirmará a separação escaneando somente o código da etiqueta na qual os itens estão sendo alocados, assegurando que a separação foi concluída corretamente para aquele volume específico. Essa dinâmica garante controle total sobre o processo, evita desvios e assegura a rastreabilidade.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização. Esse ciclo será repetido para todos os endereços indicados pelo sistema.
Ao concluir todas as visitas, o operador será notificado de que a separação daquele ciclo no Picking Cart foi finalizada. Independentemente das possibilidades subsequentes (volume completo ou necessidade de complementação na automação), o fim do processo Picking Cart, do ponto de vista do operador, é sempre o destino da caixa no início da esteira. O Velox tratará internamente o roteamento subsequente.
A integração de Confirmação de Picking não é enviada imediatamente após a finalização do Picking Cart. A confirmação é disparada somente após o passar pelo ponto de decisão ao final da linha ou passar pelo processo de conferência — momento em que o WCS possui a informação completa e validada do que foi efetivamente separado para aquele volume.
Após dar o destino correto aos volumes, o operador poderá retornar o Picking Cart ao Order Start e repetir o processo até que todas as tarefas destinadas à área sejam finalizadas.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Devolução de Volumes Cancelados  
**Score:** — (semantico) | **ID:** c18709d6baf63eb5

O processo de devolução de volumes cancelados ocorre quando há a necessidade de retornar volumes que foram processados, mas ainda não enviados na integração para o WMS. Quando um volume cancelado é identificado, ele precisa ser retirado do fluxo operacional e devolvido de forma adequada.
Fluxo do Processo:
Identificação do Volume Cancelado: O WCS identifica o volume cancelado através da integração de cancelamento com o WMS.
Criação de Tarefa de Devolução: O WCS cria automaticamente uma tarefa de devolução para cada volume associado ao pedido cancelado. A tarefa gerada ficará disponível na tela de devolução para o operador.
Início da Tarefa: O operador realiza o login no WCS utilizando o coletor e acessa a tela de devolução de volumes cancelados.
Leitura do Volume: O operador localiza fisicamente o volume cancelado e realiza a leitura do código de barras do volume com o coletor.
Início do Processo de Devolução: Após a leitura da etiqueta, o WCS inicia a tarefa de devolução, redirecionando o operador para a tela da tarefa. Esta tela exibirá a lista de itens a serem devolvidos, juntamente com a quantidade e o endereço de devolução.
Processo de Devolução: O operador se dirige ao endereço informado na tarefa, realiza a leitura do código do endereço, confirma a quantidade que está sendo devolvida e faz a leitura do código do item para confirmar a devolução.
Repetição do Processo: O operador deve repetir o processo para todos os itens associados ao volume a ser devolvido.
Finalização da Tarefa: Após concluir a devolução de todos os itens, o WCS exibe uma mensagem informando que a devolução do volume foi concluída. O operador então poderá ler a próxima etiqueta de volume para iniciar o processo de devolução de outro volume, se necessário.
Caso não haja posição de Picking disponível, poderá ser utilizado uma posição de pulmão. A tarefa não poderá ser finalizada até que tenhamos uma posição disponível.
Obs: O WCS disponibiliza um relatório de "Pedidos Cancelados", que pode ser acessado pelo operador. O operador deverá informar o código do pedido, e o sistema irá gerar uma lista de
todos os volumes associados a esse pedido. O relatório também exibirá em qual local da automação cada volume foi alocado.
Após a finalização de todas as tarefas de devolução vinculadas ao pedido o WCS irá enviar uma integração informando que os itens do pedido já foram devolvidos para as posições.

---
**Origem:** [I25.4378] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`  
**Heading:** Retorno Reabastecimento  
**Score:** — (json-no-corpo) | **ID:** 35256f47cdfd0d5b

WCS  WMS
Essa integração tem como objetivo informar ao WMS que o volume está na posição de picking solicitada. A integração será enviada no momento em que o operador finalizar a alocação dos produtos na posição final de picking utilizando o sistema do WCS.
Exemplo JSON:
{
"reabastecimentos": [
{
"num_etiqueta": "00013",
},
{
"num_etiqueta": "00014",
}
]
}

---
**Origem:** [EURO] ADITIVO — `- ESPECIFICACAO DE SOFTWARE - Relatórios .docx`  
**Heading:** Inclusão do campo Data de Finalização  
**Score:** — (semantico) | **ID:** cb31c17ce8d0cb30

Objetivo: Adicionar o campo Data de Finalização na tela de Consulta Geral do sistema WCS, permitindo que o usuário visualize a data/hora em que cada remessa ou volume foi finalizado no processo operacional.
Descrição Funcional:
O sistema deverá exibir na tela de Consulta Geral uma nova coluna denominada “Data de Finalização”, que apresentará a data e hora em que o registro foi efetivamente finalizado no WCS.
Este campo será preenchido automaticamente pelo sistema no momento da confirmação de finalização do volume/remessa, e será exibido no formato DD/MM/AAAA HH:MM:SS.
O campo também estará disponível como filtro na consulta, permitindo ao usuário realizar buscas por período de finalização.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - Especificação de Software ADITIVOS - Projeto Dolce Gusto.docx`  
**Heading:** Retorno Reabastecimento  
**Score:** — (json-no-corpo) | **ID:** be0b4e008609a980

EMW/SAP  WCS
Essa integração tem como objetivo informar ao WMS que o volume está na área designada para reabastecimento, permitindo que o operador utilize o WMS para dar sequência ao processo de reabastecimento de forma eficiente. A integração será enviada no momento em que o desvio for confirmado pelo PLC.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"reabastecimentos": [
{
"tarefa": "00013",
"pos_destino": "1N49042031"
"sku": "3040",
"dun": "49871236547800",
"qt_sug": 2,
"qt_reab": 2,
}
]
}

---
**Origem:** [I24.203] ADITIVO — `I24.203 - Aditivo Projeto Beta - Picking Cart.docx`  
**Heading:** Finalização e Confirmação  
**Score:** — (semantico) | **ID:** a7d7cc861675fa95

Ao final da coleta de cada volume, o operador confirmará a separação escaneando somente o código da etiqueta na qual os itens estão sendo alocados, assegurando que a separação foi concluída corretamente para aquele volume específico. Essa dinâmica garante controle total sobre o processo, evita desvios e assegura a rastreabilidade.
Após concluir todas as coletas daquele endereço, a linha correspondente será destacada na cor verde, indicando a finalização. Esse ciclo será repetido para todos os endereços indicados pelo sistema.
Ao concluir todas as visitas, o operador será notificado de que a separação daquele ciclo no Picking Cart foi finalizada. Independentemente das possibilidades subsequentes (volume completo ou necessidade de complementação na automação), o fim do processo Picking Cart, do ponto de vista do operador, é sempre o destino da caixa no início da esteira. O Velox tratará internamente o roteamento subsequente.
A integração de Confirmação de Picking não é enviada imediatamente após a finalização do Picking Cart. A confirmação é disparada somente após o passar pelo ponto de decisão ao final da linha ou passar pelo processo de conferência — momento em que o WCS possui a informação completa e validada do que foi efetivamente separado para aquele volume.
Após dar o destino correto aos volumes, o operador poderá retornar o Picking Cart ao Order Start e repetir o processo até que todas as tarefas destinadas à área sejam finalizadas.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Snap Shot (POST)  
**Score:** — (json-no-corpo) | **ID:** 826ef16d0d45b0f9

WMSWCS
Essa integração tem como objetivo espelhar o estado atual do estoque em todas as posições do estoque, conforme registrado no WMS.
Observação: Caso as posições de picking estejam ocupadas, o WCS realizará a baixa dos itens nelas contidos, considerando exclusivamente os dados recebidos na integração Snap Shot. Se uma posição estiver vazia no payload, o WCS assumirá que está desocupada. Para posições com itens informados, o WCS atualizará os dados conforme os novos itens e quantidades enviados.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 150,
"endColeta": null,
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
{
"codInterno": "string",
"qtd": 150,
"endColeta": null,
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
{
"codInterno": null,
"qtd": null,
"endColeta": null,
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
}
]
Obs: Os campos "codInterno" e "endColeta" devem estar corretamente cadastrados no WCS para que a integração seja aceita.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Inbound Sync (POST)  
**Score:** — (json-no-corpo) | **ID:** b640f6ffecd40492

WCS  WMS
Essa integração tem como objetivo espelhar o estado atual do estoque em posse do WCS ao WMS.
O WCS informará a quantidade atual do estoque em posse do WCS, considerando os recebimentos da integração CET “Confirmação Entrada no Transfer” (POST) e a saída desses itens. Essa integração será disparada toda vez que tivermos movimentações nos porta pallets (pulmão) visando manter atualizado o estoque no WMS. Também será utilizada para movimentação entre porta pallets.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 0,
"endColeta": "string",
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
},
{
"codInterno": "string",
"qtd": 850,
"endColeta": "string",
        "lote": "string",
"validade": "2024-12-31",
"codEmpresa": 1
}
]

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Devolução de Volumes cancelados  
**Score:** — (semantico) | **ID:** 0ff4eb2311d9ebf6

O processo de devolução de volumes cancelados ocorre quando há a necessidade de retornar volumes que foram processados, mas ainda não enviados na integração para o WMS. Quando um volume cancelado é identificado, ele precisa ser retirado do fluxo operacional e devolvido de forma adequada.
Fluxo do Processo:
Identificação do Volume Cancelado: O WCS identifica o volume cancelado através de uma integração com o WMS ou por meio de um cancelamento no próprio sistema WCS.
Criação de Tarefa de Devolução: O WCS cria automaticamente uma tarefa de devolução para cada volume associado ao pedido cancelado. A tarefa gerada ficará disponível na tela de devolução para o operador.
Início da Tarefa: O operador realiza o login no WCS utilizando o coletor Android e acessa a tela de devolução de volumes cancelados.
Leitura do Volume: O operador localiza fisicamente o volume cancelado e realiza a leitura do código de barras do volume com o coletor Android.
Início do Processo de Devolução: Após a leitura da etiqueta, o WCS inicia a tarefa de devolução, redirecionando o operador para a tela da tarefa. Esta tela exibirá a lista de itens a serem devolvidos, juntamente com a quantidade e o endereço de devolução.
Processo de Devolução: O operador se dirige ao endereço informado na tarefa, realiza a leitura do código do endereço, confirma a quantidade que está sendo devolvida e faz a leitura do código do item para confirmar a devolução.
Repetição do Processo: O operador deve repetir o processo para todos os itens associados ao volume a ser devolvido.
Finalização da Tarefa: Após concluir a devolução de todos os itens, o WCS exibe uma mensagem informando que a devolução do volume foi concluída. O operador então poderá ler a próxima etiqueta de volume para iniciar o processo de devolução de outro volume, se necessário.
O WCS não irá devolver os itens ao Transfer, sendo possível somente devolver para as posições de picking, caso não haja posição de picking disponível, a tarefa não poderá ser finalizada até que tenhamos uma posição disponível.
OBS: O WCS disponibiliza um relatório de "Pedidos Cancelados", que pode ser acessado pelo operador. O operador deverá informar o código do pedido, e o sistema irá gerar uma lista de todos os volumes associados a esse pedido. O relatório também exibirá em qual local da automação cada volume está alocado.
Após a finalização de todas as tarefas de devolução vinculadas ao pedido o WCS irá enviar uma integração informando que os itens do pedido já foram devolvidos para as posições.

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta.docx`  
**Heading:** Retorno Reabastecimento  
**Score:** — (json-no-corpo) | **ID:** 771cc95fca2b60dd

EMW/SAP  WCS
Essa integração tem como objetivo informar ao WMS que o volume está na área designada para reabastecimento, permitindo que o operador utilize o WMS para dar sequência ao processo de reabastecimento de forma eficiente. A integração será enviada no momento em que o desvio for confirmado pelo PLC.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"reabastecimentos": [
{
"tarefa": "00013",
"pos_destino": "1N49042031"
"sku": "3040",
"dun": "49871236547800",
"qt_sug": 2,
"qt_reab": 2,
}
]
}

---
**Origem:** [I24.203] 2024 — `I24.203 - Especificação de Software - Projeto Beta_REV.2.docx`  
**Heading:** Retorno Reabastecimento  
**Score:** — (json-no-corpo) | **ID:** a194dc0bc9a1ba07

EMW/SAP  WCS
Essa integração tem como objetivo informar ao WMS que o volume está na área designada para reabastecimento, permitindo que o operador utilize o WMS para dar sequência ao processo de reabastecimento de forma eficiente. A integração será enviada no momento em que o desvio for confirmado pelo PLC.
Exemplo JSON:
{
"empresa": "0001",
"centro": "SP01",
"reabastecimentos": [
{
"tarefa": "00013",
"pos_destino": "1N49042031"
"sku": "3040",
"dun": "49871236547800",
"qt_sug": 2,
"qt_reab": 2,
}
]
}

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** Retorno Reindução  
**Score:** — (json-no-corpo) | **ID:** 8c7b5ab5c1a600ef

Após a consulta da URL o WCS receberá os seguintes retornos:
Reindução do volume confirmada:
{
"operation": "separation",
"label": "SHU0000004",
"status": "todo",
"sizeBox": "Massive Plastic Box",
"wave": "WAVE00003",
"priority": "8",
"channel": "b2c",
"type": "multi pieces",
"vas": "null",
"level": [
"01"
]
}
Nesse cenário receberemos a integração de pedidos novamente para o respectivo volume, com as informações sobre os postos para os quais a caixa deve ser desviada.
Observação: A mesma caixa pode receber a integração de pedido mais de uma vez, indicando que o volume pode ser reinduzido. O WCS deve sempre considerar a última integração recebida para garantir o fluxo correto do volume.
Reindução de volumes bloqueados:
{
"operation": "separation",
"label": "SHU0000004",
"status": "blocked"
}
Neste caso o WCS deve informar ao operador que a caixa não pode ser reinduzida na esteira naquele momento, conforme retorno do WMS.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 4.docx`  
**Heading:** 4.1.7.	 Retorno Reindução  
**Score:** — (nome-topico) | **ID:** 4ff0b59b8c3ef382

Após a consulta da URL o WCS receberá os retornos, reindução do volume confirmada:
Nesse cenário receberemos a integração de “pedidos” novamente daquele respectivo volume, informando os postos que a caixa deve ser desviada novamente.
Observação: A mesma caixa pode receber integração de pedido duas vezes para informar que o volume pode ser reinduzido, sendo assim o WCS deve considerar sempre a última integração daquele volume.
Reindução de volumes bloqueados:
Neste caso o WCS deve informar ao operador que a caixa não pode ser induzida na esteira naquele momento, segundo retorno do WMS.

---
**Origem:** [I24.210] 2024 — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`  
**Heading:** Retorno Reindução  
**Score:** — (json-no-corpo) | **ID:** 9e6fe80d413f5081

Após o envio da integração 3.6 o WMS envia a resposta ao WCS que receberá os seguintes retornos:
Estrutura da Integração (JSON) Reindução do volume confirmada:
{
"operation": "separation",
"Label": "SHU0000001",
"status": "todo",
"sizeBox": "Massive Plastic Box",
"wave": "WAVE00001",
"priority": "0",
"channel": "b2c",
"vas": "null",
"level": [
"06"
]
}
Nesse cenário receberemos a integração de pedidos novamente para o respectivo volume, com as informações sobre os postos para os quais a caixa deve ser desviada.
Observação: A mesma caixa pode receber a integração de pedido mais de uma vez, indicando que o volume pode ser reinduzido. O WCS deve sempre considerar a última integração recebida para garantir o fluxo correto do volume.
Estrutura da Integração (JSON) Reindução do volume bloqueada:
{
"operation": "separation",
"Label": "SHU0000004",
"status": "blocked",
}
Em caso de retorno negativo do WMS, o WCS deverá informar ao operador que a reindução da caixa na esteira está temporariamente bloqueada.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Inbound Sync (POST)  
**Score:** — (json-no-corpo) | **ID:** 7621dedca703ca2d

WCS  WMS
Essa integração tem como objetivo espelhar o estado atual do estoque em posse do WCS ao WMS.
O WCS informará a quantidade atual do estoque em posse do WCS, considerando os recebimentos da integração CET “Confirmação Entrada no Transfer” (POST) e a saída desses itens.
Observação: O WCS deve enviar de forma consolidada a quantidade total do estoque referente aquele item, considerando o saldo total de todos os endereços que ela se encontra.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 150
},
{
"codInterno": "string",
"qtd": 150
}
]

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Recall  
**Score:** — (semantico) | **ID:** e2ff05f30b258e7f

O processo de Recall será utilizado quando a operação decidir remover itens específicos da linha de separação. A operação pode solicitar a remoção de um lote específico ou todos os lotes.
Fluxo do Processo:
Início no WCS: O processo será iniciado diretamente pelo WCS, que gerará a tarefa de recall com o código do item e o lote a ser retirado.
Acesso à Tela de Recall: O operador realiza o login no WCS utilizando o coletor Android e acessa a tela de Recall.
Informação do SKU e Lote:
O operador deve informar o SKU do produto que deseja fazer o recall.
Será possível incluir um lote específico para o recall. Caso o lote não seja informado, será solicitado o recall de todos os itens do SKU indicado.
Visualização das Posições: O WCS exibirá as posições onde os itens do lote (ou do SKU) estão alocados, permitindo que o operador veja onde as ações precisam ser realizadas.
Leitura e Retirada: O operador se desloca até as posições indicadas, realiza a leitura do endereço e do container (caixa), e informa a quantidade retirada dessa posição.
Movimento para Próxima Posição: Caso haja mais posições com o mesmo lote para o SKU, o operador se deslocará para a próxima posição, repetindo o processo de leitura e retirada até que todos os itens do lote sejam removidos.
Consolidação da Tarefa: Após retirar todos os itens do lote, o WCS atualizará a tarefa de recall, incluindo o código do item, o lote, o container e a quantidade retirada, com essas informações sendo consolidadas para o WMS.
Validação no Transfer: O WCS só irá realizar o recall dos itens que estão no Transfer se a tarefa de recebimento do Transfer estiver concluída, garantindo que os itens estejam prontos para o processo de recall.
Esse processo garante a rastreabilidade e o controle total sobre a movimentação de itens removidos da linha de separação, assegurando que todos os itens estejam devidamente alocados antes da conclusão da tarefa.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Recall  
**Score:** — (semantico) | **ID:** 446e0ea1330c5c55

O processo de Recall é utilizado quando a operação precisa remover itens específicos da linha de separação. É possível solicitar a retirada de um lote específico ou de todos os lotes de um determinado SKU.
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
Consolidação da Tarefa: Ao final de cada caixa retirada, o WCS atualiza a tarefa de recall, registrando o código do item, lote, container e quantidade retirada, consolidando essas informações para o WMS.
Validação no Transfer: O recall só é realizado para itens no Transfer se a tarefa de recebimento estiver concluída, garantindo que os produtos estejam aptos para retirada.
Este processo assegura rastreabilidade total e controle sobre a movimentação de itens, garantindo que todos estejam devidamente alocados antes da conclusão da tarefa.
O WCS irá enviar a integração no final da tarefa de recall quando todas as posições forem visitadas. ?

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Snap Shot (POST)  
**Score:** — (json-no-corpo) | **ID:** a111aa7377864f57

WMSWCS
Essa integração tem como objetivo espelhar o estado atual do estoque nas posições de picking, conforme registrado no WMS.
Observação: Caso as posições de picking estejam ocupadas, o WCS realizará a baixa dos itens nelas contidos, considerando exclusivamente os dados recebidos na integração Snap Shot. Se uma posição não for informada ou estiver vazia no payload, o WCS assumirá que está desocupada. Para posições com itens informados, o WCS atualizará os dados conforme os novos itens e quantidades enviados.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 150,
"loteItem": "string",
"endColeta": null
},
{
"codInterno": "string",
"qtd": 150,
"loteItem": "string",
"endColeta": null
},
{
"codInterno": null,
"qtd": null,
"loteItem": "string",
"endColeta": null
}
]
Obs: Os campos "codInterno" e "endColeta" devem estar corretamente cadastrados no WCS para que a integração seja aceita.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Inbound Sync (POST)  
**Score:** — (json-no-corpo) | **ID:** f1cda104aad4e327

WCS  WMS
Essa integração tem como objetivo espelhar o estado atual do estoque em posse do WCS ao WMS.
O WCS informará a quantidade atual do estoque em posse do WCS, considerando os recebimentos da integração CET “Confirmação Entrada no Transfer” (POST) e a saída desses itens.
Observação: O WCS deve enviar de forma consolidada a quantidade total do estoque referente aquele item, considerando o saldo total de todos os endereços que ela se encontra.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 150
},
{
"codInterno": "string",
"qtd": 150
}
]

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Recall  
**Score:** — (semantico) | **ID:** 3abb5bf285509def

O processo de Recall será utilizado quando a operação decidir remover itens específicos da linha de separação. A operação pode solicitar a remoção de um lote específico ou todos os lotes.
Fluxo do Processo:
Início no WCS: O processo será iniciado diretamente pelo WCS, que gerará a tarefa de recall com o código do item e o lote a ser retirado.
Acesso à Tela de Recall: O operador realiza o login no WCS utilizando o coletor Android e acessa a tela de Recall.
Informação do SKU e Lote:
O operador deve informar o SKU do produto que deseja fazer o recall.
Será possível incluir um lote específico para o recall. Caso o lote não seja informado, será solicitado o recall de todos os itens do SKU indicado.
Visualização das Posições: O WCS exibirá as posições onde os itens do lote (ou do SKU) estão alocados, permitindo que o operador veja onde as ações precisam ser realizadas.
Leitura e Retirada: O operador se desloca até as posições indicadas, realiza a leitura do endereço e do container (caixa), e informa a quantidade retirada dessa posição.
Movimento para Próxima Posição: Caso haja mais posições com o mesmo lote para o SKU, o operador se deslocará para a próxima posição, repetindo o processo de leitura e retirada até que todos os itens do lote sejam removidos.
Consolidação da Tarefa: Após retirar todos os itens do lote, o WCS atualizará a tarefa de recall, incluindo o código do item, o lote, o container e a quantidade retirada, com essas informações sendo consolidadas para o WMS.
Validação no Transfer: O WCS só irá realizar o recall dos itens que estão no Transfer se a tarefa de recebimento do Transfer estiver concluída, garantindo que os itens estejam prontos para o processo de recall.
Esse processo garante a rastreabilidade e o controle total sobre a movimentação de itens removidos da linha de separação, assegurando que todos os itens estejam devidamente alocados antes da conclusão da tarefa.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Snap Shot (POST)  
**Score:** — (json-no-corpo) | **ID:** c04f72215f9d2ecd

WMSWCS
Essa integração tem como objetivo espelhar o estado atual do estoque nas posições de picking, conforme registrado no WMS.
Observação: Caso as posições de picking estejam ocupadas, o WCS realizará a baixa dos itens nelas contidos, considerando exclusivamente os dados recebidos na integração Snap Shot. Se uma posição não for informada ou estiver vazia no payload, o WCS assumirá que está desocupada. Para posições com itens informados, o WCS atualizará os dados conforme os novos itens e quantidades enviados.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 150,
"endColeta": null
},
{
"codInterno": "string",
"qtd": 150,
"endColeta": null
},
{
"codInterno": null,
"qtd": null,
"endColeta": null
}
]
Obs: Os campos "codInterno" e "endColeta" devem estar corretamente cadastrados no WCS para que a integração seja aceita.

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Inbound Sync (POST)  
**Score:** — (json-no-corpo) | **ID:** 9965c6d29a9e2fc3

WCS  WMS
Essa integração tem como objetivo espelhar o estado atual do estoque em posse do WCS ao WMS.
O WCS informará a quantidade atual do estoque em posse do WCS, considerando os recebimentos da integração CET “Confirmação Entrada no Transfer” (POST) e a saída desses itens.
Observação: O WCS deve enviar de forma consolidada a quantidade total do estoque referente aquele item, considerando o saldo total de todos os endereços que ela se encontra.
Exemplo JSON:
[
{
"codInterno": "string",
"qtd": 150
},
{
"codInterno": "string",
"qtd": 150
}
]
