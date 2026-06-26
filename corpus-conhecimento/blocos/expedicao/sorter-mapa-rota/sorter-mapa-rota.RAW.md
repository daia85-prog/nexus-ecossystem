# sorter-mapa-rota.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Remoção do Item  
**Score:** — (semantico) | **ID:** 0d51f5d8a4726145

• O operador inicia a operação realizando a leitura do endereço de origem.
• O operador seleciona a quantidade a ser retirada e confirma a retirada.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** 6e9772bfc2c4664d

O WCS terá uma funcionalidade robusta que permitirá a operação definir as rampas
vinculadas a cada Transportadora ou romaneio. Essa funcionalidade proporcionará
flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o
mapa de sorter, que poderão ser facilmente trocados conforme a necessidade
operacional.
Definição do Mapa de Sorter: A operação poderá vincular uma rampa específica a
uma transportadora ou romaneio de acordo com sua operação logística. Isso garante que
os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e
expedição aos requisitos da operação.
OBS: Caso não seja alocado um romaneio a Rampa o WCS irá alocar os romaneios de
forma automática. Só será possível alocar romaneios ainda não iniciados.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Transportadora (Nível Micro)  
**Score:** — (semantico) | **ID:** 7fcb148785313b06

Quando uma transportadora possuir mais de uma rampa associada, o WCS deve realizar o
balanceamento de desvio entre essas docas, com o objetivo de evitar concentração de
demanda em apenas uma delas e garantir melhor distribuição operacional ao longo da
execução das ondas.
O balanceamento deve considerar a quantidade de volumes por SKU e o histórico recente de
utilização das docas, promovendo uma distribuição progressiva e equilibrada.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Passo 4 — Seleção da rampa (nível micro): Dentro da transportadora selecionada, o WCS  
**Score:** — (semantico) | **ID:** 426d6fd2cd45926f

identifica qual rampa deve receber determinado SKU, respeitando a regra de produto por
rampa e aplicando de volume.

---
**Origem:** [Beta] 2025 — `I24.203 - Especificação de Software - Beta_REV.9.pdf`  
**Prioridade:** SIM  
**Heading:** Se a Transportadora NÃO realiza Paletização  
**Score:** — (semantico) | **ID:** 59e0f36b3411d658

Quando configurado como “Não”, o sistema deve:
1. Processar o volume no sorter.
2. Desviar para a rampa correta conforme Mapa de Sorter.
3. Registrar o desvio.
4. atualiza o status do volume e atualiza o dashboard da rampa.
5. Encerrar o fluxo do volume.
6. Permitir que a transportadora retire os volumes diretamente das rampas.

---
**Origem:** [CDSK] 2025 — `ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK-REV4.pdf`  
**Prioridade:** SIM  
**Heading:** 5.1. Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** 9f28762ac32b99c2

O WCS terá uma funcionalidade robusta que permitirá a operação definir as rampas
vinculadas a cada Loja e Categoria do Produto e Podendo habilitar a função de separar
por Tipo de Embalagem (Caixa e Fardo). Essa funcionalidade proporcionará
flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o
mapa de sorter, que poderão ser facilmente trocados conforme a necessidade
operacional.
Definição do Mapa de Sorter: A operação poderá vincular uma rampa específica a
uma Loja e Categoria do Produto e Tipo de Embalagem de acordo com sua operação
logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o
fluxo de separação e expedição aos requisitos da operação.
OBS: O agrupador pode ser vinculado a mais de uma rampa simultaneamente. Caso o
destino já esteja associado a uma rampa, o WCS deve cadenciar esses volumes para não
sobrecarregar uma única rampa dividindo a ordem de desvios entre as rampas com o
destino vinculado.
Criação de Layouts Pré-definidos: O sistema permitirá a criação de layouts pré-
definidos de mapas de sorter. Cada layout conterá as rampas específicas para diferentes
Lojas e Categoria do Produto, Tipo de Embalagem, otimizando o processo de desvio
dos volumes.
Facilidade de Troca de Layouts: A funcionalidade é projetada para trocas rápidas e
simples entre diferentes layouts. Isso oferece a operação liberdade operacional,
permitindo que o layout do mapa de sorter seja alterado conforme a demanda da operação,
sem interrupções significativas.
Liberdade Operacional: A capacidade de alterar rapidamente o layout do mapa de sorter
é essencial para que a operação tenha controle total sobre o processo de expedição.
Isso é especialmente útil em cenários de mudança de rotas ou quando há ajustes nos
requisitos de transporte, como novas transportadoras ou ajustes em prioridades de rota.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme
mudanças no processo logístico.
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para as
rampas corretas sem necessidade de intervenções manuais.
Escalabilidade: A operação pode criar múltiplos layouts e alternar entre eles conforme o
volume de operações ou mudanças nos requisitos logísticos.

---
**Origem:** [ELETRO] 2025 — `I23_3503_ESPECIFICACAO_DE_SOFTWARE_PROJETO_Eletro_REV8 (1).docx`  
**Prioridade:** SIM  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** 27844bcec03b1db5

O WCS terá uma funcionalidade robusta que permitirá ao cliente definir as rampas vinculadas a cada transportadora. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser trocados conforme as necessidades operacionais do cliente.
Definição do Mapa de Sorter: O cliente poderá vincular uma rampa específica a cada transportadora de acordo com sua operação logística. Isso garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação e expedição aos requisitos do cliente. No momento do cadastro da rampa, haverá a opção de defini-la como PA (Posto Avançado). Essa informação será retornada ao WMS conforme a Integração 6.2 – Desvio no Sorter (WCS → WMS).
Com base no destino configurado no mapa do sorter, o WCS deverá enviar ao WMS, na integração de volumes desviados, o atributo PA, indicando se o volume foi direcionado para Posto Avançado ou não.
Essa definição será realizada diretamente no mapa do sorter, permitindo a configuração de destinos distintos para a mesma loja.
Exemplo de destinos configurados no mapa: “BRASPRESS” e “BRASPRESS PA”.
OBS: O agrupador não pode ser vinculado a mais de uma rampa. Caso já esteja associado a uma rampa, será automaticamente desvinculado para permitir o novo vínculo, sem necessidade de intervenção manual, a troca de agrupador deve ser realizada sem volumes pendentes para passar pelo sorter, pois, caso contrário, os volumes restantes serão direcionados para o rejeito com o motivo “SEM ROTA”.
A Invent orienta que a troca de mapa de sorter seja feita com a operação parada por motivo para garantir a viabilidade dos desvios.
Criação de Layouts Pré-definidos: O sistema permitirá a criação de layouts pré-definidos de mapas de sorter. Cada layout conterá as rampas específicas para diferentes transportadoras ou rotas, otimizando o processo de desvio dos volumes.
Facilidade de Troca de Layouts: A funcionalidade é projetada para trocas rápidas e simples entre diferentes layouts. Isso oferece ao cliente liberdade operacional, permitindo que o layout do mapa de sorter seja alterado conforme a demanda da operação, sem interrupções significativas.
Liberdade Operacional: A capacidade de alterar rapidamente o layout do mapa de sorter é essencial para que o cliente tenha controle total sobre o processo de expedição. Isso é especialmente útil em cenários de mudança de rotas ou quando há ajustes nos requisitos de transporte, como novas transportadoras ou ajustes em prioridades de rota.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme mudanças no processo logístico.
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para as rampas corretas sem necessidade de intervenções manuais.
Escalabilidade: O cliente pode criar múltiplos layouts e alternar entre eles conforme o volume de operações ou mudanças nos requisitos logísticos.

---
**Origem:** [Market Chile] 2026 — `I25.163 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET CHILE.docx`  
**Prioridade:** SIM  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** c5402ed645c36dad

O WCS permite à operação definir os PTLs vinculados a cada Loja e Tipo de Produto, podendo também habilitar a separação por Tipo de Embalagem. A funcionalidade permite criar diversos layouts pré-definidos de mapa de sorter, trocados conforme a necessidade operacional.
Definição do mapa: a operação vincula um PTL específico a uma Loja, Tipo de Produto e Tipo de Embalagem, garantindo que os volumes sejam enviados aos PTLs corretos.
Cadenciamento entre PTLs: um agrupador pode ser vinculado a mais de um PTL simultaneamente. Quando o destino já está associado a um PTL, o WCS cadência os volumes entre os PTLs vinculados ao mesmo destino, evitando sobrecarga em um único ponto.
Flexibilidade: adaptação rápida do fluxo conforme mudanças logísticas.
Segurança: tela acessível apenas a usuários com permissão.
Eficiência: desvio automático para os PTLs corretos, sem intervenção manual.
Escalabilidade: múltiplos layouts alternáveis conforme o volume ou requisitos.
A Invent orienta que a troca de mapa de sorter seja feita com a operação parada, para garantir a viabilidade dos desvios.

---
**Origem:** [Market Peru] 2026 — `I25.115 - ESPECIFICAÇÃO DE SOFTWARE - PROJETO MARKET PERU.docx`  
**Prioridade:** SIM  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** b82bf44938839405

O WCS terá uma funcionalidade que permitirá à operação definir os PTLs vinculados a cada Loja e Tipo do Produto, podendo também habilitar a função de separar por Tipo de Embalagem. Essa funcionalidade proporcionará flexibilidade na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade operacional.
Definição do Mapa de Sorter:
A operação poderá vincular um PTL específico a uma Loja, Tipo do Produto e Tipo de Embalagem, de acordo com sua operação logística. Isso garante que os volumes sejam enviados para os PTLs corretos, alinhando o fluxo de separação e expedição aos requisitos da operação.
OBS: O agrupador pode ser vinculado a mais de um PTL simultaneamente. Caso o destino já esteja associado a um PTL, o WCS deverá cadenciar os volumes, evitando sobrecarga em um único ponto e dividindo a ordem de desvios entre os PTLs vinculados ao mesmo destino.
Criação de Layouts Pré-definidos:
O sistema permitirá a criação de layouts pré-definidos de mapas de sorter. Cada layout conterá os PTLs específicos para diferentes Lojas, Tipo de Produto e Tipos de Embalagem, otimizando o processo de desvio dos volumes.
Facilidade de Troca de Layouts:
A funcionalidade é projetada para permitir trocas rápidas e simples entre diferentes layouts, oferecendo maior flexibilidade operacional. Dessa forma, o layout do mapa de sorter poderá ser alterado conforme a demanda da operação, sem interrupções significativas.
Liberdade Operacional:
A capacidade de alterar rapidamente o layout do mapa de sorter é essencial para que a operação tenha controle total sobre o processo de expedição. Isso é especialmente útil em cenários de mudança de rotas ou ajustes na configuração operacional, como redistribuição de PTLs ou alterações na estratégia de separação.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme mudanças no processo logístico.
Segurança: Essa tela não será acessada por todos os usuários, apenas usuários com permissão terão acesso a tela de mapa de sorter 
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para os PTLs corretos, sem necessidade de intervenções manuais.
Escalabilidade: A operação pode criar múltiplos layouts e alternar entre eles conforme o volume de operações ou mudanças nos requisitos logísticos.

---
**Origem:** [TITANO] 2025 — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 6.pdf`  
**Prioridade:** SIM  
**Heading:** 4 Alteração na Etiqueta do Cliente  
**Score:** — (semantico) | **ID:** 4c49735a8797a552

Atualmente, o sorter existente realiza os desvios com base em um código fixado na etiqueta,
que já informa diretamente a rampa de destino.
No novo modelo, o cliente realizará uma alteração na composição da etiqueta:
O código de barras que informava diretamente a rampa será alterado;
Em seu lugar será utilizado um código já existente no processo, que representa o
número do volume.
Com essa alteração:
O sorter passará a utilizar o número do volume para consultar a rota enviada pelo
WMS;
O processo de desvio deixa de ser fixo e passa a ser dinâmico e controlado pelo
WMS, aumentando a rastreabilidade e a flexibilidade operacional.
Alteração Da etiqueta atual:

---
**Origem:** [Beta Full SP] 2026 — `I25.111 - Especificação de Software - Projeto Beta Full SP.docx`  
**Prioridade:** não  
**Heading:** Se a Transportadora NÃO realiza Paletização  
**Score:** — (semantico) | **ID:** 7585a21369d887ab

Quando configurado como “Não”, o sistema deve:
Processar o volume no sorter.
Desviar para a rampa correta conforme Mapa de Sorter.
Registrar o desvio.
atualiza o status do volume e atualiza o dashboard da rampa.
Encerrar o fluxo do volume.
Permitir que a transportadora retire os volumes diretamente das rampas.

---
**Origem:** [DIA] 2025 — `I25.132- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO DIA.pdf`  
**Prioridade:** não  
**Heading:** Mapa do Sorter  
**Score:** — (nome-topico) | **ID:** 72a88f8f89ec768a

Para o correto funcionamento do sorter, incluindo seu mapa de destinos (rotas) e os processos
de verificação, como o checkout, o sistema VELOX seguirá o seguinte cenário:
1. Configuração do Mapa de Destinos
o
Deve ser criado um mapa do sorter que vincule as lojas e o tipo de produto às
rampas, sendo permitida a alocação de apenas uma loja por PTL.
o
Cada loja que será vinculada a uma posição deve informar o tipo de produto
que será alocado. As opções serão: Alimentos, não alimentos, Todos os
Produtos.
o
A automação será responsável por desviar os volumes conforme o mapa
configurado no sorter.
o
Observação: A mesma loja com o mesmo tipo de pallet não pode ser associada
a mais de uma rampa ou PTL.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** 18. Mapa Sorter  
**Score:** — (nome-topico) | **ID:** b8fb072bf6f4e12d

O mapa do sorter é funcionalidade essencial do WCS, que define os destinos (rotas/clientes)
vinculados às rampas. O primeiro cadastro é feito pela Invent, e as alterações posteriores ficam
sob responsabilidade do cliente. O sistema permite diversos layouts de sorter,
possibilitando alternância entre configurações previamente cadastradas conforme necessidades
operacionais (por turno, cliente, tipo de carga etc.). Todas as interações com o sorter e os PTLs
seguem o mapa ativo.
As rampas serão cadastradas pelo time Invent, todas as interações do time Comercial
Esperança com o WCS serão previamente explicadas junto ao treinamento sistêmico que será
ministrado junto ao time operacional do CD em Arujá.

---
**Origem:** [Esperança] 2025 — `I25.3515 - ESPECIFICACAO DE SOFTWARE - PROJETO ESPERANCA REV .7.pdf`  
**Prioridade:** não  
**Heading:** Mapa do Sorter  
**Score:** — (nome-topico) | **ID:** 23523508edb5fea1

Define os destinos (rotas/clientes) vinculados às rampas. O primeiro cadastro é feito pela
Invent, alterações posteriores são de responsabilidade do Comercial Esperança.
O sistema permite diversos layouts de sorter, possibilitando alternância entre configurações
previamente cadastradas conforme necessidades operacionais (por turno, cliente, tipo de carga
etc.). Todas as interações com o sorter e os PTLs seguem o mapa ativo.

---
**Origem:** [MARA IV] 2025 — `I25.9047 - Especificao de Software - Projeto_Mara IV.pdf`  
**Prioridade:** não  
**Heading:** 5. Atualização da Arquitetura de Rede e Concentradores  
**Score:** — (semantico) | **ID:** 83f9e94475ac05bb

A expansão física do sorter, com a inclusão de 9 novas rampas e seus respectivos dispositivos
de automação, exige uma revisão completa da infraestrutura de rede, garantindo capacidade,
estabilidade e segurança para a comunicação entre o PLC, o WCS e os equipamentos (PTLs, Prix
e conversores).
Validação de Rede: Deve-se validar a infraestrutura de rede e alimentação para suportar
a carga das novas 9 rampas + 72 PTLs + 9 Prix Fixos/Conversores.

---
**Origem:** [Optimus Prime] 2025 — `I25.9044 - ESPECIFICACAO DE SOFTWARE - PROJETO OPTIMUS PRIME_REV4.pdf`  
**Prioridade:** não  
**Heading:** Funcionalidade de Mapa de Sorter no WCS  
**Score:** — (nome-topico) | **ID:** 3e3d5f15b413f6ea

O WCS deve disponibilizar um cadastro de HUBs, Centros de Distribuição (CDs) e lojas, uma vez
que o destino (loja) de cada volume será sempre informado via integração. Entretanto, existem
casos em que determinados destinos são agrupados e enviados para HUBs ou CDs.
Dessa forma, a operação C&A deve cadastrar no WCS essas lojas agrupadas e classificá-los como
HUB ou CD, permitindo que o WCS realize a triagem dos volumes de maneira correta,
direcionando-os para o destino apropriado conforme as regras operacionais.
O WCS terá uma funcionalidade robusta que permitirá ao cliente definir as rampas e/ou PTLs
vinculadas a cada tipo de destino e/ou Destino. Essa funcionalidade proporcionará flexibilidade
na operação, permitindo a criação de diversos layouts pré-definidos para o mapa de sorter,
que poderão ser facilmente trocados conforme as necessidades operacionais do cliente.
Definição do Mapa de Sorter: O cliente poderá vincular uma rampa específica ou posição
de pallet a cada tipo de destino e/ou destino de acordo com sua operação logística. Isso
garante que os volumes sejam enviados para as rampas corretas, alinhando o fluxo de separação
e expedição aos requisitos do cliente.
O WCS deve permitir que a operação C&A vincule o mesmo destino em mais de um PTL e a regra
de desvio para estes casos e sempre encher um pallet completo para depois direcionar para a
segunda posição parametrizada no mapa de sorter.
O WCS permitirá a vinculação de algumas posições de PTL como "coringas", ou seja, posições
sem destinos fixos. Essas posições serão utilizadas pelo WCS para direcionar os volumes quando
todas as posições previamente parametrizadas para um determinado destino estiverem cheias.
Assim, o WCS será responsável por identificar essas posições coringas e, quando necessário,
alocar volumes para elas, garantindo a continuidade da operação sem sobrecarga nas posições
de destino fixo.
Caso um destino esteja sobrecarregado e uma posição coringa já esteja sendo utilizada, o volume
será enviado para rejeito por motivo de “sem PTL disponível”.
Criação de Layouts Pré-definidos: O sistema permitirá a criação de layouts pré-definidos
de mapas de sorter. Cada layout conterá as rampas específicas para diferentes
transportadoras ou rotas, otimizando o processo de desvio dos volumes. Todos os mapas
criados pela operação ficarão salvos e exibidos em uma tela especifica do WCS.
Facilidade de Troca de Layouts: A funcionalidade é projetada para trocas rápidas e simples
entre diferentes layouts. Isso oferece ao cliente liberdade operacional, permitindo que o layout
do mapa de sorter seja alterado conforme a demanda da operação, sem interrupções
significativas.
Liberdade Operacional: A capacidade de alterar rapidamente o layout do mapa de sorter é
essencial para que o cliente tenha controle total sobre o processo de expedição. Isso é
especialmente útil em cenários de mudança de rotas ou quando há ajustes nos requisitos de
transporte, como novas transportadoras ou ajustes em prioridades de rota.
Benefícios da Funcionalidade:
Flexibilidade: Capacidade de adaptar rapidamente o fluxo de trabalho conforme mudanças no
processo logístico.
Eficiência: Melhoria na eficiência da operação, já que os volumes serão desviados para as
rampas corretas sem necessidade de intervenções manuais.
Escalabilidade: O cliente pode criar múltiplos layouts e alternar entre eles conforme o volume
de operações ou mudanças nos requisitos logísticos.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Mapa do Sorter  
**Score:** — (nome-topico) | **ID:** 85de0542b6d5fd91

O Mapa do Sorter é a interface de configuração das rampas, acessada pela supervisão ou pela equipe técnica. Nela é possível visualizar todas as rampas em operação, vincular rotas e transportadoras a cada rampa, bloquear ou liberar rampas individualmente e reagrupar destinos em tempo real durante picos de operação — sem precisar parar a esteira. Alterações no mapa têm efeito imediato no comportamento do Sorter.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Sem Mapa  
**Score:** — (semantico) | **ID:** eb1132ea9bead7b9

A leitura é realizada e a rota existe no WCS, mas não há rampa física vinculada a essa rota no Mapa do Sorter. O operador acessa o Mapa do Sorter, vincula a rota à rampa correta e reinsere o volume. Alternativamente, conduz o volume manualmente à rampa e realiza a leitura no scanner fixo.
Com recirculação ativa, o volume aguarda na malha enquanto o operador realiza o vínculo no mapa. Após a vinculação, o volume é classificado na próxima passagem.

---
**Origem:** [Payless] 2026 — `I26.108 - Especificacao de Software - Projeto Payless.docx`  
**Prioridade:** não  
**Heading:** Rampa Cheia  
**Score:** — (semantico) | **ID:** 6c07f9a2f17c2d46

A rampa de destino está com capacidade máxima — o sensor de acúmulo disparou. O volume é desviado para o rejeito e a situação é sinalizada no sinaleiro da rampa afetada. O volume deve ser reinserido no Sorter após a rampa ser esvaziada, ou conduzido manualmente à rampa e lido no scanner fixo.

---
**Origem:** [Peter 2] 2025 — `I23.3502 - PROJETO PETER 2 - ESPECIFICAO DE SOFTWARE - REV 6.pdf`  
**Prioridade:** não  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** 85bc08b3424da60c

O WCS terá uma funcionalidade robusta que permitirá à operação definir as rampas de saída
vinculadas a diferentes critérios. As configurações do mapa de sorter podem ser definidas por
transportadora (JADLOG), pedido (PEDIDO Y) ou destino (LOJA X, SÃO PAULO).
Essa funcionalidade proporcionará flexibilidade, permitindo a criação de diversos layouts pré-
definidos para o mapa de sorter, que poderão ser facilmente trocados conforme a necessidade
operacional. A operação terá autonomia para alterar esses vínculos diretamente na tela de
configuração do mapa de sorter no sistema WCS sempre que necessário, sem depender de
ajustes nativos do sistema.

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Mustard.docx`  
**Prioridade:** não  
**Heading:** Mapa de Sorter  
**Score:** — (nome-topico) | **ID:** 073a1f4b13fc7d0b

O sistema disponibilizará a funcionalidade Sorter Map, permitindo a gestão flexível das docas virtuais.
O supervisor operacional poderá vincular dinamicamente uma Rota ou Cliente a uma Posição Física (QR Code).
Exemplo: "Hoje a Posição 01 vai montar a Rota Zona Sul; A Posição 02 vai montar a Rota Centro".

---
**Origem:** [Wild Fork] 2026 — `I26.xxxx - Especificação de Software - Wild Fork.docx`  
**Prioridade:** não  
**Heading:** Sorter Map  
**Score:** — (nome-topico) | **ID:** 08eef8d95df870bc

The system will provide the Sorter Map functionality, allowing the flexible management of virtual positions.
The operational supervisor will be able to dynamically link a Route or Client to a Physical Position (QR Code).
Example: "Today Position 01 will assemble the South Zone Route; Position 02 will assemble the Center Route".
