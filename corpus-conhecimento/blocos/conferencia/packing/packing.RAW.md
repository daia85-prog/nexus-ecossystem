# packing.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Packing  
**Score:** — (nome-topico) | **ID:** 2a56a7008912bd90

Após a aferição de peso positiva na balança, todos os volumes coletados durante o picking
fracionado ou picking cart serão direcionados obrigatoriamente para as estações de packing.
Nesse processo, o operador transferirá os itens da caixa plástica para a caixa final.
O operador acessa a tela de packing no WCS (desktop), seleciona o posto de packing em que
se encontra e realiza a leitura da caixa plástica que contém os itens. O WCS reconhece a caixa
e inicia a impressão da etiqueta final do volume. O WCS só permitirá impressão de volumes
aprovados na validação de peso ou conferidos manualmente nas estações de conferência.
A etiqueta final será impressa pelo WCS e utilizada para garantir a rastreabilidade do item
durante o processo subsequente. Essa etiqueta será lida tanto no sorter para desvio na rampa
quanto no processo de PTL para alocação no destino correto.
Após a impressão da etiqueta final, o volume estará pronto para seguir para os próximos
processos, conforme a necessidade operacional. O operador deve garantir que todas as caixas
plásticas sejam corretamente transferidas para as caixas finais e que as etiquetas sejam
corretamente aplicadas e registradas.
Após esse processo, a caixa plástica poderá ser reutilizada para novos volumes, retornando ao
ciclo de separação e alocação.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Shelf Life  
**Score:** — (semantico) | **ID:** 2fa7a026e2dc7472

Vida útil do produto — Período de validade utilizado como critério de expedição.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Corte de Coleta  
**Score:** — (semantico) | **ID:** 6dbffbf897cd0383

O corte de coleta ocorre quando, durante a separação na zona de picking, a quantidade física
disponível na posição é inferior à quantidade solicitada.
Ao identificar o corte, o WCS registra a ocorrência, porém não realiza envio imediato ao SAP. O
saldo da posição permanece bloqueado para novas coletas e não deve ser considerado para
novas demandas até a finalização do processo.
O processamento do corte deve aguardar a passagem de todas as caixas no sorter ou o
encerramento da onda. Após esse momento, é enviado ao SAP um TORD já confirmado com a
quantidade de saldo remanescente na posição. Esse saldo não deve considerar quantidades
confirmadas após o corte nem saldos em trânsito.
Após o envio do TORD confirmado, o WCS realiza a atualização do estoque da posição e libera
o endereço para utilização dos novos saldos, conforme a chegada de novos paletes.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Parâmetro de Picking Exceção  
**Score:** — (semantico) | **ID:** bdcda6460bf8872d

O WCS disponibiliza um parâmetro específico para controle do Picking Exceção baseado nas
características físicas dos produtos, categoria e lista de SKUs.
O sistema contará com uma tela de configuração onde poderão ser cadastrados os critérios
de exceção, incluindo:
Altura (ex.: 5 a 60 cm)
Largura (ex.: 5 a 60 cm)
Comprimento (ex.: 5 a 60 cm)
Peso (ex.: 200 a 30.000 g)
Categoria de produto (se aplicável)
Lista de SKUs específicos
Esses parâmetros definem o perfil padrão de produtos que podem ser atendidos pelo fluxo
regular de picking.
O WCS realizará a validação automática das informações dos itens e identificará os produtos
que não se enquadram nos critérios configurados, considerando:
Dimensões fora do range permitido
Peso fora do limite configurado
Categoria classificada como exceção (se aplicável)
SKU incluído na lista de exceção
Os itens que atenderem a qualquer um desses critérios serão automaticamente direcionados
para o processo de Picking por Exceção, garantindo:
Continuidade do fluxo principal sem impactos
Tratativa específica para produtos fora do padrão
Maior controle operacional e físico

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 3.2.4. Área de Conferência, Packing e Sorter  
**Score:** — (semantico) | **ID:** 6d59d831e5548676

Localizada após o término do circuito de picking do Térreo.
Validação: Balança dinâmica em linha para checagem de peso.
Conferência de Exceções: Validação feita para tratativa interna na automação logo
após a balança.
Conferência/Packing: 12 estações manuais para leitura item a item e fechamento de
caixa.
Sorter de Expedição: Classificador final com 4 saídas (Uma rampa sendo específica
para rejeito), agrupando volumes por Transportadora, a paletização ocorrerá
somente por transportadora, podendo agrupar vários pedidos.
Fluxo de AMRs: Robôs móveis responsáveis pelo translado de:
o
Caixas plásticas vazias (Retorno do Packing -> Order Start).

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 3.3. Especificações das Etiquetas  
**Score:** — (semantico) | **ID:** 654ffb7b22ea1126

Todas as etiquetas que passarão pelo sorter serão impressas pelo WCS ou WMS descrito no
tópico abaixo de Matriz de Responsabilidades e em seus respectivos tópicos, essas etiquetas
serão lidas pelo portal de sorter, sendo etiquetas burras das caixas plásticas, área de packing,
área dedicada fullcase e picking fullcase costas e deverão seguir as especificações mínimas
descritas abaixo:
1D CODE 128 com 0,38 de resolução e 21 mm de altura;
2D DATAMATRIX 1mm de resolução.
Preto e Branco
Qualidade ANSI A ou B
Obs: Foi acordado com o cliente que os layouts das etiquetas serão desenvolvidos em tempo
de projeto pelo time Spark e serão disponibilizadas para nós cada uma que o WCS imprimirá.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 5.4. Parâmetros Configuráveis do Sistema  
**Score:** — (semantico) | **ID:** 071408ed018b31ec

Para garantir flexibilidade à operação da Vedamotors, as seguintes variáveis são ajustáveis via
tela administrativa do WCS, sem necessidade de intervenção em código-fonte:
Parâmetro
Descrição Funcional
Possibilidades
Percentual
Ocupação Cúbica
Define o limite máximo de preenchimento da caixa
padrão.
0% a 100% (Default sugerido:
85%)
Dimensões da
Caixa Padrão
Medidas (A x L x C) e Tara da caixa plástica/papelão
utilizada na esteira.
Configurável (mm / g)
Reabastecimento
por Lotação
Habilita/desabilita a geração automática de missões de
reposição baseadas em Mín/Máx.
Ligado* / Desligado
Auditoria de Corte
Define se a ação de "Corte" (Falta) no picking exige
aprovação de supervisor ou não.
Ativada* / Desativada
Altura Máx. Pallet
Expedição
Limite físico para o fechamento automático do pallet na
rampa do Sorter.
Configurável (ex: 1800 mm)
Peso Máx. Pallet
Expedição
Limite de peso para o fechamento automático do pallet
na rampa.
Configurável (ex: 500 kg)
Timeout de
Integração
Tempo máximo de espera para resposta do WMS antes
de considerar erro de comunicação.
Configurável (ms)
Tolerância de Peso
(Balança)
Margem de erro aceitável na conferência de peso
dinâmica (para absorver variação de embalagem).
Configurável (g ou %)

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 10. Conferência e Packing  
**Score:** — (semantico) | **ID:** e252bad0c5a92500

Após a separação nas zonas de Picking, os volumes convergem para a linha principal. O
objetivo desta etapa é garantir a acuracidade do pedido através de validação automática de
peso, minimizando a necessidade de conferência manual humana.

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 10.3. Packing e Fechamento de Volume  
**Score:** — (semantico) | **ID:** bfd4125e168ec6dd

Esta etapa ocorre após a validação física na estação manual (conferência) ou como um passo
automático para volumes aprovados em linha.
Lacre: Fechamento da tampa ou aplicação de lacre de segurança.
Etiqueta: A etiqueta tem as informações do cliente (endereço, num pedido,
transportadora, num volume e peso). Após o lacre da caixa essa etiqueta é colada na
caixa. Essa etiqueta é solicitada pelo WCS e o layout será disponibilizado pela Spark.
Reindução: A caixa validada é reinserida na esteira principal. O WCS registra que a
auditoria foi concluída com sucesso, permitindo que o volume siga para o Sorter
(Expedição) sem ser desviado novamente.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 8. Packing  
**Score:** — (nome-topico) | **ID:** 2ce6e1238e016cd6

Após a aprovação na balança ou conferência, o volume segue para a estação de packing.

---
**Origem:** [BR] 2026 — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** 8.1. Seladora Automática  
**Score:** — (semantico) | **ID:** 4f97146b47c3cc61

O projeto contará com uma seladora automática (Cetro, fornecida pelo cliente) acoplada à esteira
de packing. A seladora realiza o fechamento e lacre da caixa de forma automatizada. Após o
lacre, o volume é reinduzido na linha e segue para o sorter.

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Parâmetro de Picking Exceção  
**Score:** — (semantico) | **ID:** 00295d3a110b5e1c

O WCS disponibiliza um parâmetro específico para controle do Picking Exceção baseado nas características físicas dos produtos, categoria e lista de SKUs.
O sistema contará com uma tela de configuração onde poderão ser cadastrados os critérios de exceção, incluindo:
Altura (ex.: 5 a 60 cm)
Largura (ex.: 5 a 60 cm)
Comprimento (ex.: 5 a 60 cm)
Peso (ex.: 200 a 30.000 g)
Categoria de produto (se aplicável)
Lista de SKUs específicos
Esses parâmetros definem o perfil padrão de produtos que podem ser atendidos pelo fluxo regular de picking.
O WCS realizará a validação automática das informações dos itens e identificará os produtos que não se enquadram nos critérios configurados, considerando:
Dimensões fora do range permitido
Peso fora do limite configurado
Categoria classificada como exceção (se aplicável)
SKU incluído na lista de exceção
Os itens que atenderem a qualquer um desses critérios serão automaticamente direcionados para o processo de Picking por Exceção, garantindo:
Continuidade do fluxo principal sem impactos
Tratativa específica para produtos fora do padrão
Maior controle operacional e físico
