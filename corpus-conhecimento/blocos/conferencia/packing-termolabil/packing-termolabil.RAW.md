# packing-termolabil.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Packing Fracionado e Packing Termolábil  
**Score:** — (nome-topico) | **ID:** 8ea1267742445d2c

Para os volumes que passarem pelo processo de packing após o Picking Fracionado e o Picking
Termolábil, será utilizado o seguinte layout de etiqueta:

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tipo de separação  
**Score:** — (semantico) | **ID:** 7722b5f63f72aae0

Existem 2 tipos de separação padrão e mista, sendo a separação padrão a forma que determina
que todos os materiais de temperatura congelada devem ser separados primeiro e os materiais
de temperatura resfriada devem ser separados depois da separação de todos os materiais
congelados ao menos que tenha reabastecimento em andamento nesse caso o resfriado é
iniciado. Já o tipo de separação mista iguala a prioridade de separação onde independente da
temperatura do material a prioridade na separação é a mesma.
Para que essa funcionalidade respeite essa necessidade parametrizada através do tipo de
separação o WCS terá os multiplicadores por temperatura, onde quando o tipo de separação for
padrão o multiplicador da temperatura congelada será 1 e da temperatura resfriada será 2
e caso o tipo de separação for mista, ambas as temperaturas receberam o mesmo multiplicador,

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Multiplicador  
**Score:** — (semantico) | **ID:** 5387c80a055bbbd8

Padrão
Congelada
Padrão
Resfriada
Mista
Congelada
Mista
Resfriada
Após a seleção de tipo de separação é necessário fazer a seleção de docas auxiliares por
temperatura.
Existem dois tipos de docas principais e auxiliares, as docas principais sempre viram no IDOC
de remessa (TPSDLS - ZSDDAREM) e sempre serão utilizadas para receber os volumes separados,
já as docas auxiliares podem ser escolhidas diretamente no WCS sem restrições de escolha em
relação a outros transportes ou onda, porém se a doca estiver em uso não será permitido o início
da onda.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Tamanho  
**Score:** — (semantico) | **ID:** f4d92f488d3e2d90

Separadores
Operação
Quantidade total de separadores
cadastrados.
Cadastro de postos
Separadores
Congelado
Quantidade de separadores
cadastrados nos postos de
congelado
Cadastro de postos
Separadores
Resfriado
Quantidade de separadores
cadastrados nos postos de
resfriado
Cadastro de postos

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 25 Saída do Pallet  
**Score:** — (semantico) | **ID:** 46fb2641008490e8

A automação do armazém possui 3 BK25 de saídas, sendo 2 dedicadas aos produtos
congelados e 1 para produtos resfriados. Em emergências ou bloqueios realizados via
WCS nas saídas de produtos congelados, é possível utilizar as saídas de resfriados como
uma medida paliativa. Porém, essa estratégia não é viável para os produtos resfriados devido
à estrutura do fluxo da linha.
A saída dos pallets pode ser realizada de duas formas:
Via IDOC do SAP, que coordena automaticamente o envio de informações sobre a
saída;
Manual, diretamente pela tela do WCS, caso seja necessária uma intervenção do
operador.
Quando o WCS solicita a saída do pallet, o sistema verifica as saídas disponíveis com base
no cadastro das posições e realiza o direcionamento do pallet para a saída
correspondente de acordo com o tipo de conservação (congelado ou resfriado).
Ao chegar à saída, será exibido um visor indicando o endereço destino do pallet. Esse
endereço é enviado via IDOC do SAP. Caso a retirada seja manual, realizada diretamente no
WCS, o endereço exibido será o depósito informado no momento da solicitação de
retirada via tela do WCS
O balanceamento entre as duas saídas de cada tipo de conservação do pallet será realizada pelo
PLC respeitando as regras de acumulo.
