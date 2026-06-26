# integracao-cadastros.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo roteador (corpus-full.jsonl) -->

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Integração de Cadastro de Produtos e Embalagens  
**Score:** — (json-no-corpo) | **ID:** c9587c5d86be1f23

WMS → WCS
O WMS envia a lista de produtos (cadastro mestre) com identificadores, descrição e lista de embalagens.
O WCS usa este cadastro para: validações, exibição em telas, cálculo de cubagem, regras operacionais e consistência de unidades.
{
"lista_produtos": [
{
"sku": "3040",
"descricao": "Produto 3040",
"status": "ATIVO",
"data_atualizacao": "2025-12-15T10:00:00-03:00",
"embalagens": [
{
"tipo_embalagem": "UNITÁRIO",
"codigo": "7891000000028",
"tipo_codigo": "EAN",
"fator_conversao": 1,
"altura_mm": 10,
"largura_mm": 100,
"comprimento_mm": 150,
"peso_g": 250,
"cubagem_m3": 0.00164
},
{
"tipo_embalagem": "CAIXA P",
"codigo": "17891000000025",
"tipo_codigo": "DUN",
"fator_conversao": 12,
"altura_mm": 120,
"largura_mm": 200,
"comprimento_mm": 300,
"peso_g": 3200,
"cubagem_m3": 0.0072
}
]
},
{
"sku": "1020",
"descricao": "Produto 1020",
"status": "ATIVO",
"data_atualizacao": "2025-12-15T10:00:00-03:00",
"embalagens": [
{
"tipo_embalagem": "UNITARIO",
"codigo": "9961000000014",
"tipo_codigo": "EAN",
"fator_conversao": 1,
"altura_mm": 400,
"largura_mm": 300,
"comprimento_mm": 500,
"peso_g": 8500,
"cubagem_m3": 0.06
}
]
}
]}

---
**Origem:** [I22.1732] 2023 — `I22.1732 PROJETO FLOWER - ESPECIFICAÇÃO HARDWARE.docx`  
**Heading:** Definição Itens Conformes e Inconformes  
**Score:** — (semantico) | **ID:** b0e8cce844c66fd2

Este tópico estabelece a definição dos itens Conformes e Inconformes, indicando como cada tipo de pedido será tratado dentro do fluxo de automação
Itens Conformes
São considerados conformes todos os produtos que:
Possuem dimensões dentro dos limites suportado pela esteira (altura, largura e comprimento);
Possuem peso dentro do limite permitido pelo sistema de automação;
Possuem formato adequado para transporte na esteira (caixas regulares e estáveis)
Não apresentam risco de travamento, queda, dano ao produto ou dano à automação;
Itens com as características listadas acima seguirão normalmente o fluxo de automação, passando pela esteira, classificação e demais etapas automatizadas.
Itens Inconformes
São considerados inconformes todos os itens que não podem passar pela esteira, seja por qualquer motivo técnico ou operacional, incluindo, mas não limitado a:
Caixas fechadas com dimensões fora do padrão suportado pela automação (muito grandes, muito largas ou muito altas);
Caixas fechadas com peso acima do limite permitido pela esteira;
Itens com formato irregular ou instável, que impossibilitem transporte seguro na esteira;
Todos os itens classificados como inconformes deverão seguir fluxo do WCS, devendo ser direcionados para a conferência dos itens inconformes. O sistema permitirá essa identificação de não conformidade de forma clara, para garantir tratamento adequado.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 11.docx`  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** fa3013e701964f4a

ERP D365 F&O (GERENCIADOR DE ESTOQUES)WCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, número do pedido, item, quantidade etc.
A informação de SKU e EAN serão distintas podendo conter mais de um EAN para o mesmo produto, WCS deve ter esse controle.
Operador poderá cadastrar, editar e excluir individualmente os produtos no WCS.
No cadastro do produto, o ERP D365 F&O (GERENCIADOR DE ESTOQUES) deverá enviar a quantidade de unidades de uma caixa para que aquele produto seja separado como caixa fechada, onde quando a quantidade solicitada atingir a unidade de uma caixa fechada do produto, WCS deve direcionar a separação para full case.
A regra mencionada acima sobre a conversão de unidades em caixas full case só será aplicada quando o tipo do item/categoria forem “capsulas”.
Exemplo JSON:
[
{
"sku": "string",
"ean": "string",
"nameItem": "string",
"length": 10,
"width": 10,
"height": 10,
"weigth": 10,
"packingQty": 100,
"status": "Current",
"category": "Standard",
"unit": "string",
}
]

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** 346d136533d1b99f

WMS→WCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, código do produto, nome, quantidade etc. Operador poderá cadastrar, editar e excluir individualmente os produtos no WCS.
Exemplo JSON:
{
"codInterno": "12345",
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
}

---
**Origem:** [I24.215] 2025 — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** 44ec73f832ce4d3d

WMS→WCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, código do produto, nome, quantidade etc. Operador poderá cadastrar, editar e excluir individualmente os produtos no WCS.
Exemplo JSON:
{
"codInterno": "12345",
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
}

---
**Origem:** [I24.215] 2025 — `I24_215_ESPECIFICACAO_SOFTWARE_PROJ_BP_Rev12.docx`  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** 46cb4c09ba574ec1

WMS→WCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, código do produto, nome, quantidade etc. Operador poderá cadastrar, editar e excluir individualmente os produtos no WCS.
Exemplo JSON:
{
"codInterno": "12345",
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
}

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
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

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2-s.docx`  
**Heading:** Considerações Finais  
**Score:** — (semantico) | **ID:** 2b3eb784f26b6c05

O processo de movimentação forçada de estoque proporciona flexibilidade operacional, permitindo movimentar itens tanto no Transfer quanto nas posições de Picking, mantendo o controle atualizado e a rastreabilidade completa de todas as movimentações.
Esse processo garante maior eficiência na gestão de estoque, assegurando que o WCS mantenha controle total sobre os itens e permitindo ajustes conforme a demanda e a necessidade operacional.

---
**Origem:** [I25.4066] 2026 — `I25.4066 - Especificação de Software NavePark.docx`  
**Heading:** Abastecimento de Insumos (AMR)  
**Score:** — (semantico) | **ID:** 455b61fa1ec05fa3

Para garantir a continuidade da operação sem interrupções manuais, o suprimento de caixas plásticas vazias (Totes) é realizado pelo Robô AMR.
Fluxo do AMR: O robô coleta pilhas de caixas vazias na área de saída (Packing/Retorno) e as transportam até o segundo Order Start Térreo
Papel do Robô: O AMR atua exclusivamente como um apoio logístico de transporte de caixas vazias. Ele não participa da indução de produtos, do reabastecimento de SKUs ou de qualquer tomada de decisão lógica sobre os pedidos.
Ação do Operador: O operador retira a pilha do robô e a disponibiliza na estação de trabalho para início da vinculação.

---
**Origem:** [I21.177] ADITIVO — `I21.177 - PROJ PTLSP - ESPECIFICACAO DE SOFTWARE - ADITIVOS - GEMINI.docx`  
**Heading:** Automação do Cadastro de Materiais - OK (Wave 2)  
**Score:** — (semantico) | **ID:** 768a6ed4916409e0

Situação: Foi avaliada a possibilidade de automatizar o cadastro de materiais no sistema da Invent através da integração com a mensagem ZMATMAS do SAP.
Decisão: A automação do cadastro de materiais foi adiada para uma fase futura (Wave 2).
Motivo: O ROI (Retorno sobre Investimento) no cenário atual é considerado baixo, pois a automação não eliminaria a etapa manual crítica de alocação física dos produtos na linha (PTL), que é o maior gargalo do processo.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - Aditivo Projeto Beleza Fase 2 - Melhorias.docx`  
**Heading:** Visibilidade da Categoria do Produto  
**Score:** — (semantico) | **ID:** 3dfe2b08fc4f9f02

Este aditivo tem como objetivo disponibilizar a visualização da Categoria do Produto nos relatórios em questão, ampliando a capacidade de análise e segmentação das informações, sem qualquer alteração na integração existente ou nas regras operacionais.
Será adicionada uma nova coluna exibindo a Categoria do Produto nos seguintes relatórios:
Recebimento Transfer
Relatório de Conciliação
Produto em Estoque
Transfer em Estoque
A informação será apresentada exclusivamente para visualização, filtros e ordenação, sem possibilidade de edição e sem alteração das regras de negócio vigentes.
A categoria do produto já é recebida atualmente na integração de cadastro de produtos, não sendo necessária nenhuma adequação ou evolução no modelo de integração, apenas a exposição da informação nas telas listadas.

---
**Origem:** [I25.9043] ADITIVO — `I25.9043 - PROJ BELEZA - ESPECIFICACAO DE SOFTWARE ADOTOVO - MELHORIAS.docx`  
**Heading:** Visibilidade da Categoria do Produto  
**Score:** — (semantico) | **ID:** 823365288a92b45a

Inclusão da coluna Categoria do produto, para fins de consulta e conferência, nas seguintes telas:
Recebimento Transfer
Relatório de Conciliação
Produto em Estoque
Transfer em Estoque
A informação será apresentada exclusivamente para visualização, filtros e ordenação, sem possibilidade de edição e sem alteração das regras de negócio vigentes.
A categoria do produto já é recebida atualmente na integração de cadastro de produtos, não sendo necessária nenhuma adequação ou evolução no modelo de integração, apenas a exposição da informação nas telas listadas.

---
**Origem:** [I17.112] 2021 — `Diamante Adicionais - ESPECIFICACAO DE SOFTWARE - Rev.2.docx`  
**Heading:** Relatório – Pedido x CX Plástica (Ref.7)  
**Score:** — (semantico) | **ID:** d3ead20a1d51ee33

MFC
Desenvolvimento de relatório visível no MFC, onde o cliente consiga visualizar caixas plásticas por pedido, data de finalização, produtividade por data, por perfil de caixa (full e fracionado) e por tipo de negócio (franquia ou E-Comm). Conforme informações/campos de exemplo abaixo:

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.1-Fase 1.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** 65e1ebd38dd9e503

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I21.] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** 116485bf4fc6d4bb

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I21.] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RS - Rev.3.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** 5ce2daea68ad7348

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV11.docx`  
**Heading:** Cadastro de produtos  
**Score:** — (semantico) | **ID:** e3aca277ed74856f

Não haverá integração de cadastro de produtos.
Quando ocorre um cadastro de um produto novo, o mesmo precisará ser cadastrado manualmente no MFC e no SAP.

---
**Origem:** [I21.131] 2022 — `I21.131 - ESPECIFICACAO DE SOFTWARE E HARDWARE - REV3 - SEM PTW.docx`  
**Heading:** Cadastro de produtos  
**Score:** — (semantico) | **ID:** d70721bdbbdeb615

Não haverá integração de cadastro de produtos.
Quando ocorre um cadastro de um produto novo, o mesmo precisará ser cadastrado manualmente no MFC e no SAP.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Cadastrar Produtos Pollux  
**Score:** — (json-no-corpo) | **ID:** 846733a56d79d8dd

Integração para cadastrar novos produtos na Pollux.
Origem: MFC (Invent)
Destino: Pollux
Método: POST
Json:
{
" products ": [
{
" product_number ": " mME7u ",
" product_name ": " Chococino Prata ",
" product_description ": " Chococino Prata ",
" capsule_color ": " PRATA ",
" capsule_weight ": 17.0,
" gs1_identifier_0 ": " 00650769029795 "
},
{
" product_number ": "38 pvj",
" product_name ": " Chococino Marron ",
" product_description ": " Chococino Marron ",
" capsule_color ": " MARRON ",
" capsule_weight ": 13.8
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Listar Produtos Pollux  
**Score:** — (semantico) | **ID:** 4336196aea5e39e6

Integração para listar todos os produtos cadastrados na Pollux.
Origem: MFC (Invent)
Destino: Pollux
Método: GET
Json:
Apenas o token é necessário para essa API.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Deletar Produtos Pollux  
**Score:** — (json-no-corpo) | **ID:** 9670a41bb30144da

Integração para deletar produto cadastrado na Pollux.
Origem: MFC (Invent)
Destino: Pollux
Método: POST
Json:
{
"product_number": "1234567890"
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Cadastrar Transportadoras Pollux  
**Score:** — (json-no-corpo) | **ID:** 779f1fc1a650703b

Integração para cadastrar uma nova transportadora na Pollux.
Origem: WMS
Destino: MFC (Invent)
Método: POST
Origem: MFC (Invent)
Destino: Pollux
Método: POST
Json:
{
"shipping_companies": [
{
"identifier": "",
"name": "",
"cnpj": "",
"attributes": [
{
"attr_name": ""
}
]
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Listar Transportadoras Pollux  
**Score:** — (semantico) | **ID:** c8a0675fa1b7afa7

Integração para listar todas as transportadoras cadastradas na Pollux.
Origem: MFC (Invent)
Destino: Pollux
Método: GET
Json:
Apenas o token é necessário para essa API.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Deletar Transportadoras Pollux  
**Score:** — (json-no-corpo) | **ID:** 607246d19f699440

Integração para deletar transportadoras cadastradas na Pollux.
Origem: MFC (Invent)
Destino: Pollux
Método: DELETE
Json:
{
"identifier": "60"
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Cadastrar Lotes Vênus (Batch)  
**Score:** — (json-no-corpo) | **ID:** 4543b8817923ec39

Integração para cadastrar lotes na operação de Vênus.
Origem: WMS
Destino: MFC (Invent)
Método: POST
Origem: MFC (Invent)
Destino: VÊNUS
Método: POST
Json:
{
"batches": [
{
"batch_number": "000123456",
"batch_quantity": 100,
"product_number": "001312",
"fabrication_date": "25/08/2022",
"expiration_date": "25/08/2023"
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Deletar Lotes Vênus  
**Score:** — (json-no-corpo) | **ID:** 9e0c3b04aae376a4

Integração para deletar lotes cadastrados da operação Vênus.
Origem: MFC (Invent)
Destino: VÊNUS
Método: POST
Json:
{
"batch_number": "000123456"
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Cadastrar Produtos Vênus  
**Score:** — (json-no-corpo) | **ID:** 824bfaa4ce8108b9

Integração para cadastrar um novo produto na operação Vênus.
Origem: WMS
Destino: MFC (Invent)
Método: POST
Origem: MFC (Invent)
Destino: VÊNUS
Método: POST
Json:
{
"products": [
{
"product_name": "Café",
"product_number": "000123456",
"product_description": "Café 10g",
"capsule_color": "PRATA",
"capsule_weight": 17.0,
"gs1_identifier_0": "00650769029795"
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Deletar Produtos Vênus  
**Score:** — (json-no-corpo) | **ID:** 63819f85a44e4c71

Integração para deletar produtos cadastrados da operação Vênus.
Origem: MFC (Invent)
Destino: VÊNUS
Método: POST
Json:
{
"product_number": "000123456"
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Cadastrar Transportadoras Vênus  
**Score:** — (json-no-corpo) | **ID:** 45f95e0a6bc25b84

Integração para cadastrar uma nova transportadora na operação Vênus.
Origem: WMS
Destino: MFC (Invent)
Método: POST
Origem: MFC (Invent)
Destino: VÊNUS
Método: POST
Json:
{
"shipping_companies": [
{
"name": "DIRECT",
"cnpj": "60409075054082",
"identifier": "30",
"attributes": [
{
"attr_name": "iata"
},
{
"attr_name": "iata_route"
}
]
}
]
}

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Listar Transportadoras Vênus  
**Score:** — (semantico) | **ID:** 7dd029b93de93758

Integração para listar todas as transportadoras cadastradas na operação Vênus.
Origem: MFC (Invent)
Destino: VÊNUS
Método: GET
Json:
Apenas o token é necessário para essa API.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`  
**Heading:** Deletar Transportadoras Vênus  
**Score:** — (json-no-corpo) | **ID:** c4cee4ec46730b02

Integração para deletar transportadoras cadastrados na operação Vênus.
Origem: MFC (Invent)
Destino: VÊNUS
Método: POST
Json:
{
"shipping_company": "30"
}

---
**Origem:** [I21.177] 2022 — `- Layout Novo - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** 7ca661a759dc938d

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I21.177] 2022 — `NOVO LAYOUT - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.5.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** b2534e2a9da337a1

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I21.177] 2022 — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** 8a134750f4ecfd2f

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I21.177] 2022 — `- Layout Novo - I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - SP Rev.5.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** 884f3d9162cde3f8

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE.1 VER.1.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** 6534393c2787c904

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - FASE1 - CUBOMETRO.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** 65bdb96ebda9822f

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.1 - Fase 1.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** 20ecf6c3c0369e16

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I21.177] 2022 — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev.5.docx`  
**Heading:** Endereço  
**Score:** — (semantico) | **ID:** a3717740e8dd22f8

Na tela Endereço, podemos incluir, editar e excluir um endereço. O endereço é referente ao lugar que o produto está alocado fisicamente. Essa tela representada pela figura, mostra também os dados dos endereços, que estão listados em uma tabela, com os seguintes dados:
Número Endereço: Número correspondente ao endereço.
Tipo: Tipo físico do endereço.
Número Posto: Número referente ao posto do endereço.
Concentrador: Concentrador referente ao endereço.
Número Led: Número de led referente ao endereço correspondente.
Ao clicar em incluir ou editar, temos a tela apresentada na figura. Com os seguintes dados:
Número Endereço: Número que corresponde ao endereço.
Descritivo: Descrição/nome do endereço.
Posto: Posto que você deseja vincular ao endereço.
Ordenação: Número de ordenação correspondente ao endereço.
Tipo: Tipo físico do endereço.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** RF6 – Gestão de congestionamento nos transportadores  
**Score:** — (semantico) | **ID:** 0b050629d13d12ae

O WCS Velox deve ser capaz de reter o envio de ordens de retiradas de pallet enquanto os transportadores de saída estiverem congestionados (congestionamento sinalizado pelo PLC dos transportadores).

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Saida de material  
**Score:** — (semantico) | **ID:** cf1496fda54b2bd2

Esse módulo contém funcionalidades para controle da saída de pallets do armazém, como detalhado nas funcionalidades a seguir.

---
**Origem:** [I22.128] 2023 — `Especificação Software BRF.docx`  
**Heading:** Gerenciamento de faixas  
**Score:** — (semantico) | **ID:** 2c893fb2795e52fc

Essa funcionalidade permite cadastrar faixas correspondentes á vida útil de um produto, como mostrado na imagem abaixo.
É possivel editar os valores já cadastrados na própria lista. Selecionando a opção “Salvar” o sistema registra as alterações realizadas.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** RF6 – Gestão de congestionamento nos transportadores  
**Score:** — (semantico) | **ID:** 362329633eed3ab2

O WCS Velox deve ser capaz de reter o envio de ordens de retiradas de pallet enquanto os transportadores de saída estiverem congestionados (congestionamento sinalizado pelo PLC dos transportadores).

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Saida de material  
**Score:** — (semantico) | **ID:** 7834cc4ceeb006da

Esse módulo contém funcionalidades para controle da saída de pallets do armazém, como detalhado nas funcionalidades a seguir.

---
**Origem:** [I22.128] 2023 — `PROJETO BRF - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE.docx`  
**Heading:** Gerenciamento de faixas  
**Score:** — (semantico) | **ID:** 441bc8a93f1bd1b9

Essa funcionalidade permite cadastrar faixas correspondentes á vida útil de um produto, como mostrado na imagem abaixo.
É possivel editar os valores já cadastrados na própria lista. Selecionando a opção “Salvar” o sistema registra as alterações realizadas.

---
**Origem:** [I22.1732] 2023 — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** 2cad5e1b2b50a17b

WMS→WCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, código do produto, nome, quantidade etc. Operador poderá cadastrar, editar e excluir individualmente os produtos no WCS.
Exemplo JSON:
{
"codInterno": "12345",
"curva": "A",
"codComercial": ["EAN","DUN14","DISPLAY"],
"excecao": true,
"ptlExclusivo": true,
"refrigerado": true,
"categoria": "vacinas",
"tipo": "controlado",
"nome": "Produto Exemplo",
"unidadeMedida": "gramas",
"comprimento": 80,
"largura": 50,
"altura": 60,
"peso": 2000,
"qtdDisplay": 5,
    "qtdFull": 100,
    "qtdPallet": 100,
"qtdMinimaposicaoPicking": 10,
"qtdMaximaposicaoPicking": 80,
"ativo": true
}

---
**Origem:** [I23.1602] 2023 — `I23-1602 - PROJETO PETER - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - REV3.docx`  
**Heading:** Especificação  
**Score:** — (semantico) | **ID:** f2df4eb5ad49ace1

Para o correto funcionamento da automação, é necessária uma aplicação que será responsável pelo gerenciamento das informações dos equipamentos triados na operação, ou seja, esta aplicação executara as rotinas das Linhas de Separação e Sorter, tendo como papel fundamental a interface entre os sistemas WMS (Cliente) com Velox Invent.
Linhas de separação:
Frente
Costas
Corredor
Sorter:
Fracionados
Full Case
Conferência
Sorter
A aplicação VELOX da INVENT necessita de um banco de dados exclusivo para o correto armazenamento e gerenciamento das informações, que serão disponibilizadas pelo cliente (licença + instalação do banco).
As informações serão trocadas entre a aplicação e as estações de trabalho através de interface Web, desta forma, se faz necessário o uso de um navegador web padrão em cada estação de trabalho (Google Chrome).

---
**Origem:** [I23.1602] 2023 — `I23.1602 - DOCUMENTO DE ESPECIFICAÇÃO REV1- SEPARAÇÕES ET.VELOX - PETER.docx`  
**Heading:** Separação Invent  
**Score:** — (semantico) | **ID:** d019fc87fc1a90fd

Para o volume do pedido que contenha produtos a serem separados totalmente pela automação Invent, isso significa que todos os produtos que compõe aquele volume estão alocados nas posições da automação Invent, flowracks frente e costas.
Deverá seguir o seguinte processo operacional.
Processo operacional
No sistema Kaizen, operador realiza o vínculo da caixa plástica VID a um volume (VEN) do pedido;
Após o vínculo, sistema Kaizen realiza a integração do pedido/volume para o Velox informando qual o número da caixa plástica VID esse volume foi vinculado e os produtos que devem ser separados;
Operador insere a caixa plástica VID na esteira de fracionados;
Leitor de código de barras realiza a leitura da etiqueta da caixa plástica VID;
Sistema Velox, válida se existe produtos a serem separados na estação de picking;
Se falso, caixa segue para o próximo leitor de código de barras;
Se verdadeiro, caixa é desviada para estação;
Operador realiza a separação dos produtos nas posições frente e costas, guiado pelos leds acesos das posições da frente e nas informações nos leds das costas da automação;
Operador realiza a conferência dos produtos separados via coletor e sistema Kaizen;
Após finalizar a separação de todos os produtos da estação de separação, operador insere a caixa novamente na linha expressa da automação de fracionados;
O mesmo processo se repete até finalizar todas as estações de separação;
Sistema Kaizen, válida se o volume deve seguir para conferência;
Se verdadeiro, caixa deve ser direcionada para conferência;
Na estação de conferência, operador realiza o processo de conferência pelo coletor com o sistema Kaizen;
Após realizar a conferência, insere a caixa na esteira novamente, para seguir para o packing;
Se falso e após conferência, caixa segue para a estação de packing;
Na entrada da estação de packing, terá um leitor de código de barras e uma impressora com guilhotina para que o sistema Velox ao identificar o volume, realize a impressão de etiqueta de expedição VEN e ela seja despejada no interior da caixa plástica em movimento.
Na estação de packing, operador realiza a troca da caixa plástica para a caixa de papelão (expedição).
Operador fixa etiqueta de expedição na caixa de expedição;
Operador induz a caixa de expedição na esteira, seguindo para o sorter.
Volume ao ser lido no portal de leitura do sorter, Velox verifica a informação VEN da etiqueta para realizar o desvio na rampa correta.
Caso seja lida corretamente e a informação validada, a caixa é direcionada a rampa conforme mapa.
Caso algum problema seja encontrado no volume, seja etiqueta rasurada ou falta de rota, a caixa é direcionada ao rejeito do sorter.
No rejeito do sorter, operador realiza a tratativa do volume e induz novamente no sorter.
Integração
A integração deverá ser realizada pela Kaizen, após o vínculo da caixa plástica com o pedido realizado pela Kaizen e antes do volume ser inserido na esteira de automação Invent.

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** 9db015c88dcc01cf

WMSWCS
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, número do pedido, item, quantidade etc.
A informação de sku e EAN serão distintas podendo conter mais de um EAN para o mesmo produto, WCS deve ter esse controle.
Operador poderá cadastrar, editar e excluir individualmente os produtos no WCS.
No cadastro do produto, operador deverá cadastrar o tamanho máximo para que aquele produto seja separado como caixa fechada, será um campo de cubagem, onde quando a quantidade solicitada atingir a metragem cúbica do produto, WCS deve direcionar a separação para full case.
QUANDO A CATEGORIA FOR CAPSULA, DEVEMOS AVALIAR/FAZER A CONVERSÃO DO CAMPO PACKINGQTY DE FULL CASE E FRACIONADOS.
Exemplo JSON:
[
{
"sku": "string",
"ean": "string",
"nameItem": "string",
"length": 10,
"width": 10,
"height": 10,
"weigth": 10,
"packingQty": 100,
"status": "Current",
"category": "Standard",
"unit": "string",
}
]

---
**Origem:** [I23.1412] 2024 — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 10(Revisado In Loco).docx`  
**Heading:** Coletor de Dados  
**Score:** — (semantico) | **ID:** b529b68d6d3e8506

A separação de produtos será realizada utilizando coletores de dados (dispositivos móveis). Cada categoria de produto terá uma abordagem de separação distinta, garantindo que sejam tratadas adequadamente conforme suas especificações de segurança, controle e operação.
NA SEPARAÇÃO DE COLETOR DE DADOS DEVEM EXIBIR A POSIÇÃO/NOME DO PRODUTO/LOTE/QUANTIDADE E UNIDADE DE MEDIDA.
Produtos Controlados e Sensíveis: Polícia Federal, Controlados, Exército, Geladeira
Todos esses produtos serão separados via coletor. O coletor identificará as localizações e os produtos a serem separados, guiando o operador de forma eficiente.
Após a separação, esses itens serão conferidos e embalados no local designado. Este local será específico para cada categoria de produto, garantindo que os procedimentos de conferência e embalagem atendam aos requisitos de segurança e rastreabilidade exigidos.
ORDERNAR A SEPARAÇÃO POR ORDEM CRESCENTE DE ENDEREÇO.
A conferência dos produtos, especialmente os controlados e sensíveis, será feita por bipagem  apenas no endereço no coletor, garantindo que a separação esteja conforme o pedido, com um processo de conferência eficiente no local designado
Operador ao finalizar a separação dos volumes do picking cart, induz a caixa do picking cart na linha expressa de separação, e caso haja produtos a serem separados nos flowracks, a caixa será desviada nas estações de picking e seguira o processo padrão de separação.
Caso não haja produtos a serem separados nas estações de picking, caixa seguira diretamente para a estação de conferência.

---
**Origem:** [I24.121] 2024 — `I24.121 - ESPECIFICACAO DE SOFTWARE - PROJETO HYDRA REV6.docx`  
**Heading:** Costas  
**Score:** — (semantico) | **ID:** b42d461fceaf15fb

Caso haja produtos a serem separados nas posições das costas, o PDV irá informar o operador se devem ser lidos item a item e os leds/displays dos níveis dos produtos que devem ser separados e informando a quantidade e a posição do produto a ser separado, conforme ilustração abaixo, devem ser separados 07 unidades do produto com o código final 54139 da posição 02:
Operador ao realizar a separação da quantidade do produto na posição informada, realiza a leitura de item a item confirmando a separação do produto, deverá pressionar o botão do display, confirmando assim que realizou a separação daquele produto, caso tenha outro produto para separar no mesmo nível, porém em outra posição, o mesmo display se acenderá informando a nova posição e quantidade que deverá separar, repete o processo e caso não haja mais produtos no mesmo nível, o display se apagará e operador segue para o próximo nível e repete o processo.
Ao finalizar a separação de todos os produtos das posições das costas, o PDV informará o fim da separação e todos os leds da frente acenderão na cor verde, informando ao operador que a separação naquele posto (frente e costas) foi finalizado e a caixa já poderá ser lida no próximo posto.
O Velox não fará a validação de lote.

---
**Origem:** [I24.210] 2024 — `I24 -  PROJETO COUGAR - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** 79db13b28e936e37

DESCRITIVO
MACRO
SOFTWARE
PROJETO
COUGAR
CONFIDENCIAL © 2023, INVENT COMÉRCIO E SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL CONFIDENCIAL, PROIBIDA SUA REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS SEM PRÉVIA AUTORIZAÇÃO.
Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes

---
**Origem:** [I24.210] 2024 — `PROJETO COUGAR - ESPECIFICAÇÃO DE SOFTWARE MACROFLUXO.docx`  
**Heading:** [SEM TÍTULO]  
**Score:** — (semantico) | **ID:** ffff4d014f228b7e

DESCRITIVO
MACRO
SOFTWARE
PROJETO
COUGAR
CONFIDENCIAL © 2023, INVENT COMÉRCIO E SERVIÇOS EMPRESARIAIS LTDA.
MATERIAL CONFIDENCIAL, PROIBIDA SUA REPRODUÇÃO E DIVULGAÇÃO À TERCEIROS SEM PRÉVIA AUTORIZAÇÃO.
Por que
Invent?
Somos especialistas e inovadores
Antecipamos tendências e a colocamos em prática
Oferecemos soluções eficientes
Contribuímos para aumentar a competitividade dos nossos clientes
Nos preocupamos com a imagem e os resultados de nossos clientes

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE1.docx`  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** b3ac1e0de6505783

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

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA FASE2-REV2.docx`  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** a741246a9fd5919a

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

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA REV.2.docx`  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** 203ccc8395652985

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

---
**Origem:** [I25.9043] 2025 — `I25.9043 - ESPECIFICACAO DE SOFTWARE - PROJETO BELEZA_Escopo.docx`  
**Heading:** Produto (POST)  
**Score:** — (json-no-corpo) | **ID:** 7d49d12eff1303ce

WMS→VELOX
Essa é a integração de envio dos detalhes dos produtos como tipo, peso, dimensões, código do produto, nome, quantidade etc. Operador poderá cadastrar, editar e excluir individualmente os produtos no Velox.
Exemplo JSON:
{
"codInterno": "12345",
"curva": "A",
"codComercial": "A1234-B5678",
"tipo": "Aerosol"
"nome": "Produto Exemplo",
"unidadeMedida": "unidade",
"comprimento": 80,
"largura": 50,
"altura": 60,
"peso": 2000,
"qtdFull": 100,
"categoria": "Tecnologia",
"div": "11 - Cosméticos",
"dept": "20 - Perfumes",
"subDept": "30 - masculino",
"class": "40 - Marca",
"classCod": "50 - Variação (loção)",
"qtdMinimaPosicaoPicking": 10,
"qtdMaximaPosicaoPicking": 50,
"qtdMinimaEstoque": 20,
"qtdMaximaEstoque": 200,
"ativo": true
}
