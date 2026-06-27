# conferencia-manual.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** de expedição PVAR (impressa pelo WCS na coleta). O crosscheck é a comparação entre as  
**Score:** — (semantico) | **ID:** 1ddffc194e4215f5

duas para garantir que o produto da caixa corresponde ao que a etiqueta de expedição indica.
O WCS disponibiliza um parâmetro para ligar ou desligar a obrigatoriedade do crosscheck,
alterável a qualquer momento durante a operação, essa funcionalidade é acessada apenas por
usuários de nível de acesso permitido. A etiqueta de material sempre precisa ser lida,
independentemente do estado do parâmetro. O que muda é a obrigatoriedade de leitura da
etiqueta de expedição.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 10.2. Conferência Manual (Auditoria e Clientes Especiais)  
**Score:** — (nome-topico) | **ID:** 314d507957d56301

Esta estação recebe exclusivamente os volumes desviados pela balança dinâmica ou
selecionados por amostragem (Sorteio de Qualidade). Este processo garante que a quantidade
de itens e o peso real do volume estejam em total conformidade com o pedido.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** Conferência Manual Padrão  
**Score:** — (nome-topico) | **ID:** 64c7c120e48687b4

Pré-requisitos para a Conferência:
Para que o processo de auditoria e a validação na balança ocorram corretamente, o WCS é
alimentado com:
Peso Unitário: O cadastro técnico de cada SKU com seu peso em gramas.
Peso das Caixas (Tara): O cadastro do peso real de cada modelo de caixa de
separação utilizado.
Tolerância de Peso: O sistema permite a configuração de uma margem (em gramas
ou percentual) para absorver pequenas variações sem gerar desvios desnecessários.
Fluxo Operacional:
1. Abertura do Processo: O operador acessa a tela de conferência e realiza a leitura do
LPN (caixa). O WCS exibe instantaneamente o motivo do desvio (ex: "Divergência de
Peso", "Auditoria de Qualidade" ou "Shortpicking").
2. Conferência Cega (Blind Check):
o
O operador deve realizar a leitura dos itens, um a um, para validar o conteúdo
físico.
o
O sistema não exibe a lista de itens ou quantidades esperadas, exigindo a
bipagem de todos os produtos para garantir a acuracidade total da conferência.
3. Tratativa de Divergências e Correção:
o
Sobra: Caso o sistema identifique itens extras ao final da bipagem, o operador
deve retirar o excedente da caixa.
o
Falta: Se houver ausência de produtos, o operador pode completar a caixa
(com um item da posição original de coleta) ou acionar o botão "Encerrar
Conferência" para aprovar o corte.
4. Finalização e Corte: Ao clicar em encerrar com itens faltantes, o operador deve
selecionar uma das opções:
o
Cortar: A confirmação do corte exige a autenticação de um supervisor por
senha ou crachá — sem essa aprovação o corte não é efetivado. Após a
aprovação, o WCS registra que os itens faltantes foram cortados do pedido e
envia a informação ao WMS.
o
Coletar (Novo Volume): O WCS sinaliza a pendência e permite que o
sistema registre a necessidade de coletar esses itens faltantes em um novo
volume futuro para completar o pedido.
5. Conclusão: Após a validação de todos os itens e tratamento de sobras/faltas, o WCS
registra que a auditoria foi concluída, permitindo que o volume siga para a etapa de
Packing.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** Conferência Clientes Especiais (KIT SKU)  
**Score:** — (nome-topico) | **ID:** 17bb1e552f19465d

O pedido é definido como especial quando o campo especial é igual a TRUE na integração de
pedidos. Nestes casos, o WCS exibe o campo “embalagem_especial” para instruir o operador
sobre o manuseio.
1. Identificação: O operador recebe a caixa desviada e bipa o LPN.
2. Sinalização: O sistema alerta visualmente na tela que a conferência atual se trata de
um Cliente Especial e apresenta as intruções de embalagem
3. Bipagem Inicial: O operador bipa o primeiro produto físico da caixa.
4. Identificação de Processo (Cego): O sistema identifica internamente se há apenas
um ou mais SKUs no pedido, mas não exibe a composição ou as quantidades na
tela, garantindo a integridade do processo de conferência cega.
5. Conferência Cega e Bipagem: O operador realiza a leitura unitária (item a item) de
todas as unidades daquele SKU. O sistema valida silenciosamente cada bipagem contra
o pedido real, sem revelar o saldo esperado ao operador.
6. Impressão Automática: Somente quando o operador atinge a quantidade total exata
prevista para o SKU, o WCS imprime automaticamente a etiqueta específica daquele kit
(layout Spark).
7. Tratativa de Faltas (Corte): Caso o operador finalize a leitura antes do sistema
disparar a impressão (indicando falta física), ele deve acionar o botão de finalização
manual.
Alerta de Divergência: O sistema informará que foram lidos menos itens do
que o esperado e indicará o saldo faltante.
Decisão do Operador: O operador deve optar por:
Cortar: O sistema registra a falta, envia a confirmação parcial (Confirmação
de Conferência) e permite seguir para o fechamento do kit/pedido.
Completar: O sistema retorna à tela anterior e aguarda a localização e
bipagem dos itens faltantes para prosseguir.
8. Validação Crítica: O operador cola a etiqueta no saquinho e obrigatoriamente bipa
a etiqueta impressa para confirmar o ensacamento.
9. Conclusão do Item: Após a bipagem da etiqueta do kit, o sistema valida o item. Se
existirem outros SKUs no pedido, o processo se repete integralmente até a conclusão
total.
10. Packing: Após finalizar todos os itens do pedido o sistema segue para a parte de packing
descrita no tópico abaixo.
