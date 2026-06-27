# integracao-cadastros.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->
<!-- Ordem: Top 10 (prioridade) primeiro, depois complementares -->

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 2. Especificação  
**Score:** — (semantico) | **ID:** d89ccd24deef8647

Para o correto funcionamento da Automação, é necessária uma aplicação responsável
pelo gerenciamento das informações de separação, ou seja, esta aplicação executará as rotinas
de linha de separação, conferência, reabastecimento, controle de saldo das posições de picking,
e picking cart tendo como papel fundamental a interface entre os sistemas ERP/WMS do cliente
e a automação chão-de-fábrica INVENT.
A aplicação da INVENT necessita de um banco de dados para o correto armazenamento
e gerenciamento das informações, que será disponibilizado pelo cliente (licença + instalação do
banco). As informações serão trocadas entre a aplicação e o WMS do cliente.
As estações de trabalho terão acesso ao WCS, através de interface Web, desta forma,
se faz necessário o uso de um Navegador Web padrão em cada estação de trabalho (Google
Chrome).

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1-Rev2.pdf`  
**Prioridade:** SIM  
**Heading:** 5.1. Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** cc85a3beb133c452

WMS→WCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, código do
produto, nome, quantidade etc. Operador poderá cadastrar, editar e excluir individualmente os
produtos no WCS.
Exemplo JSON:
{
"codInterno": "12345",
"curva": "A",
"codComercial": "A1234-B5678",
"tipo": "Inflamável",
"nome": "Produto Exemplo",
"unidadeMedida": "gramas",
"comprimento": 80,
"largura": 50,
"altura": 60,
"peso": 2000,
"qtdFull": 100,
"categoria": "Tecnologia",
"div": "11 - Cosméticos",
"dept": "20 - Perfumes",
"subDept": "30 - Masculino",
"class": "40 - Marca",
"classCod": "50 – Variação (loção)",
"qtdMinimaposicaoPicking": 10,
"qtdMaximaposicaoPicking": 50,
"qtdMinimaEstoque": 20,
"qtdMaximaEstoque": 200,
"ativo": true
}
Campo
Tipo
Obrigatório Exemplo
Obs
CodInterno
string
Sim
12345
Código identificador do produto.
Curva
string
Não
A
Curva de vendas do produto.
codComercial
string
Não
A1234-B5678
Código comercial do produto (no JSON é
um único código, não uma lista).
Tipo
String
Sim
Inflamável / Aerosol /
Comum
Informa se o produto é inflamável ou não
Nome
string
Não
Produto Exemplo
Nome do produto.
unidadeMedida
string
Não
Unidade
Unidade de medida do produto (ex.:
unidade, KG).
comprimento
integer
Não
Dimensão do produto em milímetros.
Largura
integer
Não
Dimensão do produto em milímetros.
Altura
integer
Não
Dimensão do produto em milímetros.
Peso
integer
Não
Peso do produto em gramas.
QtdFull
integer
Não
Quantidade por caixa ou pallet.
Categoria
string
Sim
Tecnologia
Família ou categoria do produto.
Div
String
Não
11-COSMÉTICOS
1 camada de hierarquia
Dept
String
Não
20-PERFUMES
2 camada de hierarquia
SubDept
String
Não
30-masculino
3 camada de hierarquia
Class
String
Não
40-Marca
4 camada de hierarquia
ClassCod
String
Não
50-Variação (loção)
5 camada de hierarquia
qtdMinimaposicaoPicking
integer
Não
Parâmetro de controle de estoque.
qtdMaximaposicaoPicking integer
Não
Parâmetro de controle de estoque.
qtdMinimaEstoque
integer
Não
Parâmetro de controle de estoque.
qtdMaximaEstoque
integer
Não
Parâmetro de controle de estoque.
Ativo
boolean Sim
True
Indica se o produto está ativo.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** a81f6735633feb87

WMS→WCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, código do produto, nome, quantidade etc. Operador poderá cadastrar, editar e excluir individualmente os produtos no WCS.
Exemplo JSON:
{
"codInterno": "12345",
"curva": "A",
"codComercial": "A1234-B5678",
"tipo": "Inflamável",
"nome": "Produto Exemplo",
"unidadeMedida": "gramas",
"comprimento": 80,
"largura": 50,
"altura": 60,
"peso": 2000,
"qtdFull": 100,
"categoria": "Tecnologia",
"div": "11 - Cosméticos",
"dept": "20 - Perfumes",
"subDept": "30 - Masculino",
"class": "40 - Marca",
"classCod": "50 – Variação (loção)",
"qtdMinimaposicaoPicking": 10,
"qtdMaximaposicaoPicking": 50,
"qtdMinimaEstoque": 20,
"qtdMaximaEstoque": 200,
"ativo": true
}
Campo | Tipo | Obrigatório | Exemplo | Obs
CodInterno | string | Sim | 12345 | Código identificador do produto.
Curva | string | Não | A | Curva de vendas do produto.
codComercial | string | Não | A1234-B5678 | Código comercial do produto (no JSON é um único código, não uma lista).
Tipo | String | Sim | Inflamável / Aerosol / Comum | Informa se o produto é inflamável ou não
Nome | string | Não | Produto Exemplo | Nome do produto.
unidadeMedida | string | Não | Unidade | Unidade de medida do produto (ex.: unidade, KG).
comprimento | integer | Não | 80 | Dimensão do produto em milímetros.
Largura | integer | Não | 50 | Dimensão do produto em milímetros.
Altura | integer | Não | 60 | Dimensão do produto em milímetros.
Peso | integer | Não | 2000 | Peso do produto em gramas.
QtdFull | integer | Não | 100 | Quantidade por caixa ou pallet.
Categoria | string | Sim | Tecnologia | Família ou categoria do produto.
Div | String | Não | 11-COSMÉTICOS | 1 camada de hierarquia
Dept | String | Não | 20-PERFUMES | 2 camada de hierarquia
SubDept | String | Não | 30-masculino | 3 camada de hierarquia
Class | String | Não | 40-Marca | 4 camada de hierarquia
ClassCod | String | Não | 50-Variação (loção) | 5 camada de hierarquia
qtdMinimaposicaoPicking | integer | Não | 10 | Parâmetro de controle de estoque.
qtdMaximaposicaoPicking | integer | Não | 50 | Parâmetro de controle de estoque.
qtdMinimaEstoque | integer | Não | 20 | Parâmetro de controle de estoque.
qtdMaximaEstoque | integer | Não | 200 | Parâmetro de controle de estoque.
Ativo | boolean | Sim | True | Indica se o produto está ativo.

---
**Origem:** [BELEZA] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Prioridade:** SIM  
**Heading:** Considerações Finais  
**Score:** — (semantico) | **ID:** 2b3eb784f26b6c05

O processo de movimentação forçada de estoque proporciona flexibilidade operacional, permitindo movimentar itens tanto no Transfer quanto nas posições de Picking, mantendo o controle atualizado e a rastreabilidade completa de todas as movimentações.
Esse processo garante maior eficiência na gestão de estoque, assegurando que o WCS mantenha controle total sobre os itens e permitindo ajustes conforme a demanda e a necessidade operacional.

---
**Origem:** [BP] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP - Rev.14.pdf`  
**Prioridade:** SIM  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** 81ddff2c3b4b76d6

WMS→WCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões,
código do produto, nome, quantidade etc. Operador poderá cadastrar, editar e excluir
individualmente os produtos no WCS.
Exemplo JSON:
"codInterno": 12345,
"curva": ["A","C"],
"codComercial": ["EAN","DISPLAY","DUN14"],
"excecao": true,
"ptlExclusivo": true,
"refrigerado": true,
"categoria": "vacinas",
"tipo": "controlado",
"nome": "Produto Exemplo",
"unidadeMedida": "gramas",
"comprimento": ["80","100","500"],
"largura": ["50","80","250"],
"altura": ["100","150","350"],
"peso": ["500","1200","3000"],
"qtdDisplay": null,
"qtdFull": 1,
"qtdPallet": 100,
"qtdMinimaposicaoPicking": [10,15],
"qtdMaximaposicaoPicking": [80,120],
"ativo": true
Campo
Tipo
Obrigatório Exemplo
Obs
CodInterno
Integer
Sim
7908052844227
SKU DO PRODUTO
Curva
Array
Não
["A","C"]
Curva de vendas do produto (posição 0 = cod1 /
posição 1 = cod5)
cod1 = Basso Pancotte; cod5 = Intersul. A posição do
array representa a curva de giro do SKU em cada
empresa.
codComercial
Array
Não
["7891234567890",
"7891234567890123",
null]
Valor do código de barras (não o tipo). Ordem fixa:
posição 0 = EAN, posição 1 = DISPLAY, posição 2 =
DUN14. Posição preenchida com null quando o
produto não possuir o código.
Exceção
Boolean Sim
True
Define se o produto faz parte do picking exceção
PtlExclusivo
Boolean Sim
True
Informa se o produto exceção será agrupado em um
pallet separado dos demais produtos
Refrigerado
Boolean Sim
True
Informa se o produto faz parte do picking termolábil
Tipo
String
Sim
Controlado, perigoso,
refrigerado, normal,
brinde
Categorização do produto
Classificação única por produto (não-Array). As regras
de segregação de PTL, pallet e layout de impressão
se aplicam conforme o único valor informado.
Nome
String
Não
Produto Exemplo
Nome do produto
UnidadeMedida
String
Não
Grama
Unidade de medida do peso
Comprimento
Array
Não
[80,100,500]
Dimensão do Produto em milímetro (Unidade,
Display, Caixa)
Largura
Array
Não
[50,80,250]
Dimensão do Produto em milímetro (Unidade,
Display, Caixa)
Altura
Array
Não
[60,120,300]
Dimensão do Produto em milímetro (Unidade,
Display, Caixa)
Peso
Array
Não
[2000,2500,3000]
Peso do produto (Unidade, Display, Caixa)
qtdDisplay
Integer
Não
Quantidade por display (embalagem intermediária).
Campo opcional — aceita null quando o produto não
possui display.
QtdFull
Integer
Não
Quantidade de unidades contidas em uma caixa
fechada.
QtdPallet
Integer
Não
Quantidade por pallet
Categoria
String
Sim
Vacinas, lonas, etc
Família do produto
qtdMinimaposicaoPicking
Array
Não
[10,15]
Parâmetro controle de estoque (posição 0 = cod1 /
posição 1 = cod5)
cod1 = Basso Pancotte; cod5 = Intersul.
qtdMaximaposicaoPicking Array
Não
[50,80]
Parâmetro controle de estoque (posição 0 = cod1 /
posição 1 = cod5)
cod1 = Basso Pancotte; cod5 = Intersul.
Ativo
Boolean Sim
True
Identifica se o produto está ativo

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** transelevador (automatizado, com dupla confirmação ou simples em caso de abastecimento  
**Score:** — (semantico) | **ID:** 8ac5f337af7700b2

do buffer para o picking) ou pelo fluxo convencional (manual, com confirmação simples).
Ambos os fluxos são descritos a seguir para cada cenário de reabastecimento.

---
**Origem:** [BRF Salvador] 2026 — `I22.120 - ESPECIFICAÇÃO DE SOFTWARE - BRF - SALVADOR Rev3.pdf`  
**Prioridade:** SIM  
**Heading:** Usabilidade  
**Score:** — (semantico) | **ID:** a1fe5f82ae12563f

•
Criar ou editar produtos na base de produtos.
•
Gerar informações para contribuir nas logicas de sequenciamento de coleta,
reabastecimento e expedição (Sorter).

---
**Origem:** [NavePark] 2026 — `I25.4066 - Especificação de Software NavePark - Rev 8.pdf`  
**Prioridade:** SIM  
**Heading:** 7.6. Abastecimento de Insumos (AMR)  
**Score:** — (semantico) | **ID:** 93a6f3ebaf41efd8

Para garantir a continuidade da operação sem interrupções manuais, o suprimento de caixas
plásticas vazias (Totes) é realizado pelo Robô AMR.
Fluxo do AMR: O robô coleta pilhas de caixas vazias na área de saída
(Packing/Retorno) e as transportam até o Order Start Térreo
Papel do Robô: O AMR atua exclusivamente como um apoio logístico de
transporte de caixas vazias. Ele não participa da indução de produtos, do
reabastecimento de SKUs ou de qualquer tomada de decisão lógica sobre os pedidos.
Ação do Operador: O operador retira a pilha do robô e a disponibiliza na estação de
trabalho para início da vinculação.

---
**Origem:** [BRF Jundiaí] 2025 — `I22.199 - ESPECIFICACAO DE SOFTWARE - PROJETO BRF JUNDIAI_REV2..pdf`  
**Prioridade:** não  
**Heading:** 13 Configuração Física dos Transelevadores  
**Score:** — (semantico) | **ID:** c0dc64bd879339ca

A automação será composta por dois equipamentos BK25, responsáveis pela entrada dos
pallets no sistema. Os pallets rejeitados durante o processo de validação serão direcionados
para uma mesa de entrada dedicada ao tratamento de rejeitos.
O sistema contará com cinco transelevadores, sendo três destinados à armazenagem de
produtos congelados e dois para produtos resfriados, sendo todos compostos de
apenas um pallet por posição. Todos os transelevadores possuem apenas uma posição de
armazenagem e estão equipados com um berço de entrada e uma mesa de saída
individuais, permitindo a movimentação controlada dos pallets conforme as diretrizes
operacionais do WCS.
Além disso há 3 BK25 para saída dos pallets, sendo 2 para produtos congelados e 1 para
produtos resfriados.

---
**Origem:** [Reverse] 2025 — `Especificação de Software - Projeto Reverse_REV5.pdf`  
**Prioridade:** não  
**Heading:** 4.0 Integrações  
**Score:** — (semantico) | **ID:** 369cb35ac20d4654

Para o correto funcionamento de todo o processo da automação a operação irá importar dados
via excel para alimentar o WCS e ser realizado as validações e triagens necessárias.
Teremos 3 tipos de importações possíveis: picking map, Base de equipamento CLARO (todos os
macAdress) e Nota fiscal.
Todas as informações de cada planilha importada como estrutura, tipo de dados, quais dados são
relevantes serão explicitas abaixo.
Segue as integrações abaixo:
