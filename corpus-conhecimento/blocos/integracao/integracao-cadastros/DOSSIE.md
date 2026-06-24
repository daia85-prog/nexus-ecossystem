# integracao-cadastros — Dossiê Técnico

**Bloco:** integracao | **Tópico:** integracao-cadastros
**Seções analisadas:** 57 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

Este tópico cobre as **integrações e telas de cadastro mestre** que alimentam o WCS (Velox): **Produto**, **Embalagens**, **Endereço** e os cadastros das controladoras de PTL (**Pollux** e **Vênus**). O cadastro de produto é o contrato mais importante — o WMS (ou ERP) envia os detalhes do item (dimensões, peso, códigos, curva, categoria, quantidades por embalagem) e o WCS usa esses dados para **validações, exibição em telas, cálculo de cubagem, regras operacionais e roteamento** (ex.: decidir Full Case).

O corpus mostra uma forte variação do payload de **Produto (POST)** entre clientes, e que em alguns projetos **não há** integração de cadastro (cadastro manual). Há também a regra de **itens conformes × inconformes** (aptidão à esteira).

> **Nota de cobertura:** parte do material roteado para cá descreve **processos de separação/expedição** (Separação Invent, Costas, Coletor de Dados, Saída de material) e **capas de documento** — registrados nos insights como desvios para a Fase 2.

## Fluxo do Processo

1. O **WMS/ERP** envia a integração **Produto (POST)** com os detalhes do item; em alguns projetos, envia também o **cadastro de produtos e embalagens** (lista mestre com embalagens e cubagem).
2. O WCS persiste o cadastro e o **operador pode cadastrar, editar e excluir** produtos individualmente na tela.
3. Os dados alimentam: validações de leitura, cálculo de cubagem, regras de Full Case, exibição em telas e relatórios.
4. **Endereços** são cadastrados/editados na **tela Endereço** (posição física do produto), com vínculo a posto, concentrador e LED.
5. Em operações com PTL Pollux/Vênus, o **MFC (Invent)** replica produtos, transportadoras e lotes para a controladora via APIs REST.

## Telas e Funcionalidades

### Tela de Cadastro de Produto
- **Comportamento:** permite incluir, editar e excluir produtos recebidos por integração. Suporta **mais de um EAN para o mesmo SKU** (o WCS deve controlar isso). Campos variam por projeto (ver Variações).

### Tela Endereço (projeto I21.177 e correlatos)
- **Campos da lista:** Número Endereço, Tipo (físico), Número Posto, Concentrador, Número LED.
- **Campos de inclusão/edição:** Número Endereço, Descritivo, Posto, Ordenação, Tipo.
- **Comportamento:** incluir/editar/excluir o endereço físico onde o produto é alocado.

### Gerenciamento de Faixas (vida útil — projeto BRF)
- **Comportamento:** cadastrar faixas correspondentes à vida útil (shelf life) do produto; edição inline na lista e botão "Salvar".

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A integração **Produto (POST)** trafega no sentido **WMS/ERP → WCS** e traz tipo, peso, dimensões, código, nome e quantidades. |
| RN-02 | O operador pode **cadastrar, editar e excluir** produtos individualmente no WCS. |
| RN-03 | Um mesmo SKU pode ter **mais de um EAN**; o WCS deve controlar essa multiplicidade (SKU e EAN são distintos). |
| RN-04 | **Conversão para Full Case (FDBR):** o ERP envia a quantidade de unidades por caixa; quando a quantidade solicitada atinge uma caixa fechada, o WCS direciona a separação para **full case**. |
| RN-05 | **(FDBR)** A conversão de unidades em full case **só** se aplica quando o tipo/categoria do item é **"cápsulas"**. |
| RN-06 | **(FDBR Rev10)** Alternativamente, o cadastro tem um campo de **cubagem** (tamanho máximo); ao atingir a metragem cúbica, o WCS direciona para full case. |
| RN-07 | **Itens Conformes (Flower):** dentro dos limites de altura/largura/comprimento/peso e formato estável → seguem o fluxo automatizado (esteira/sorter). |
| RN-08 | **Itens Inconformes (Flower):** fora do padrão da esteira → direcionados à **conferência de inconformes**; o sistema identifica a não conformidade claramente. |
| RN-09 | **Sem integração de cadastro (I21.131):** produto novo é cadastrado **manualmente** no MFC e no SAP. |
| RN-10 | **Cadastro de embalagens:** cada produto pode ter várias embalagens, cada uma com `tipo_embalagem`, `codigo`, `tipo_codigo` (EAN/DUN), `fator_conversao`, dimensões e `cubagem_m3`. |
| RN-11 | **Visibilidade da Categoria (Beleza):** a categoria já vem na integração de cadastro; o aditivo apenas a expõe em relatórios (Recebimento Transfer, Conciliação, Produto em Estoque, Transfer em Estoque), **sem** alterar a integração. |
| RN-12 | **Automação do cadastro de materiais (Gemini):** integração com a mensagem **ZMATMAS** do SAP foi **adiada** (Wave 2) por baixo ROI. |
| RN-13 | **Cadastros Pollux/Vênus:** o MFC (Invent) expõe APIs REST para cadastrar/listar/deletar **produtos, transportadoras e lotes** na controladora de PTL. |

## Variações por Projeto

| Projeto | Variação do cadastro de Produto |
|---------|----------------------------------|
| **I23.1412** (FDBR) | Payload em lista: `sku`, `ean`, `nameItem`, `length/width/height/weigth`, `packingQty`, `status`, `category`, `unit`. Regra de full case por quantidade/cubagem, restrita a **cápsulas**. |
| **I24.215** (BP) | Payload rico: `curva[]`, `codComercial[EAN/DISPLAY/DUN14]`, `excecao`, `ptlExclusivo`, `refrigerado`, `categoria`, `tipo`, dimensões em **arrays** (multi-embalagem), `qtdDisplay/qtdFull/qtdPallet`, `qtdMinima/MaximaposicaoPicking[]`. |
| **I25.9043** (Beleza) | Acrescenta **hierarquia mercadológica** (`div`/`dept`/`subDept`/`class`/`classCod`), `qtdMinima/MaximaEstoque`, `tipo` (Inflamável/Aerosol); dimensões em valores únicos. |
| **I22.1732** (Flower) | Cadastro de **produtos e embalagens** detalhado (com `cubagem_m3` por embalagem); definição de conformes/inconformes. |
| **I21.131** | **Sem** integração de cadastro — manual no MFC e SAP. |
| **I21.177** (PTL20 Pollux/Vênus) | APIs REST de cadastro na controladora: produtos (`capsule_color`, `capsule_weight`, `gs1_identifier`), transportadoras (`cnpj`, `attributes` iata) e lotes (`batch_number`, datas de fabricação/validade). |
| **I23.1602** (Peter) | Cadastro alimenta separação em linhas (Frente/Costas/Corredor) e Sorter; integração feita pela Kaizen. |

## Integrações

| Integração | Sentido | Conteúdo-chave |
|-----------|---------|----------------|
| **Produto (POST)** | WMS/ERP (D365 F&O) → WCS/Velox | Detalhes do item: códigos, dimensões, peso, curva, categoria, quantidades por embalagem, flags (refrigerado, exceção, ptlExclusivo). |
| **Cadastro de Produtos e Embalagens** | WMS → WCS | Lista mestre com embalagens (cubagem, fator de conversão, EAN/DUN). |
| **Cadastrar/Listar/Deletar Produtos** | MFC (Invent) → Pollux/Vênus | CRUD de produtos na controladora de PTL (POST/GET/DELETE). |
| **Cadastrar/Listar/Deletar Transportadoras** | WMS → MFC → Pollux/Vênus | CRUD de transportadoras (cnpj, atributos iata). |
| **Cadastrar/Deletar Lotes (Batch)** | WMS → MFC → Vênus | CRUD de lotes (número, quantidade, fabricação/validade). |
| **ZMATMAS (SAP)** | SAP → Invent | Automação de cadastro de materiais — **adiada** (Wave 2). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Cadastro mestre de Produto** | Conjunto de atributos do item enviado pelo WMS/ERP que o WCS usa em validações, cubagem e regras. |
| **Embalagem** | Unidade de empacotamento do produto (unitário, caixa P, etc.) com código, fator de conversão e cubagem próprios. |
| **Curva** | Classificação ABC do item (giro), usada em regras de alocação/auditoria. |
| **Fator de conversão** | Quantidade de unidades contidas em uma embalagem. |
| **Conformes / Inconformes** | Itens aptos / inaptos à esteira automatizada conforme dimensões, peso e formato. |
| **MFC** | Camada/sistema da Invent que intermedeia o cadastro com as controladoras de PTL (Pollux/Vênus). |
| **Pollux / Vênus** | Controladoras de PTL que recebem cadastros (produtos, transportadoras, lotes) do MFC. |
| **ZMATMAS** | Mensagem/IDoc do SAP para mestre de materiais. |
| **Hierarquia mercadológica** | Estrutura div/dept/subDept/class/classCod do produto (projeto Beleza). |
| **ptlExclusivo / refrigerado / exceção** | Flags do cadastro que direcionam o item a fluxos específicos. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 57 seções*
