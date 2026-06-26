# Integração de Cadastros — Knowledge Card

> CARD abrangente do tópico **Integração de Cadastros** (dados mestres: produtos/SKUs, endereços/posições, lotes e transportadoras). Fonte: Top 10 (BELEZA Fase 1, BELEZA Fase 2, BP/I24.215) + complementares (BRF Salvador, I21.177 Pollux/Vênus, FDBR/I23.1412, Flower/I22.1732, I21.131, Peter/I23.1602, Gemini). O ED usa este arquivo para gerar o capítulo de Integração de Cadastros do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`integracao-cadastros` `dados-mestres` `master-data` `produto-post` `cadastro-produto`
`ean` `sku` `codinterno` `cod-comercial` `hierarquia-mercadologica`
`endereco-post` `posicao-picking` `cadastro-endereco`
`lote-fefo` `batch` `cadastro-lote` `validade` `fabricacao`
`transportadora-cadastro` `mapa-rampas`
`curva-abc` `cubagem-cadastro` `full-case-regra` `tipo-produto`
`pollux` `venus` `ptl-cadastro` `mfc-invent`
`wms-wcs` `rest-api` `json-payload` `idoc` `dblink` `zmatmas` `matmas`
`integracao` `in1`

---

## Metadados
- **Bloco:** integracao
- **Gate:** `in1 != tbd` (o WCS tem integração com o WMS/ERP → recebe dados mestres)
- **Subtópicos com CARD próprio:** [[cadastros-acessos]] (usuários/permissões), [[cubagem]] (usa dados de dimensão/peso deste cadastro)
- **Depende de:** nenhum — é o cadastro base que alimenta todos os módulos
- **Influencia:** [[picking-pbl]] (curva, posições, qtd mínima/máxima), [[picking-fullcase]] (qtdFull, tipo/categoria), [[cubagem]] (dimensões, peso, cubagem_m3), [[sorter-mapa-rota]] (transportadoras), [[ptl-alocacao]] (produtos/lotes na controladora), [[conferencia]] (peso esperado, EAN), [[reabastecimento]] (qtdMinima/MaximaEstoque)
- **Cruza com:** [[integracao-pedidos]] (usa `codInterno`/EAN para vincular itens do pedido), [[etiquetas]] (EAN/DUN14 do cadastro), [[integracao-wcs-wms]] (canal de envio)

---

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{in_tipo}}` | `in1` | select | `rest`=REST · `idoc`=IDoc · `dblink`=DBLink · `excel`=Excel · `json_api`=JSON via API · `json_pasta`=JSON em pasta · `outro`=Outro · `tbd`=A definir |
| `{{in_tipo2}}` | `in1b` | select | (idem `in1`, canal secundário) |
| `{{in_endpoint}}` | `in_endpoint` | text | URL base do endpoint (ex: `https://wms.cliente.com.br/api/v1`) |
| `{{in_timeout}}` | `in3` | text | Timeout em ms (ex: `5000`) |

> **Gate:** `in1 != tbd` (e `in1 != vazio`) → o capítulo de Integração de Cadastros está em escopo. Se `in1 = tbd` ou vazio → omitir o capítulo inteiro.
> **Formato**: `in1` define a variante de implementação (REST/JSON, IDoc SAP, DBLink). Ver Condicionais.

---

## Texto Padrão
*(Base sólida presente em todo projeto com `in1 != tbd`. O ED parte daqui e aplica as condicionais por tipo de integração.)*

A Integração de Cadastros é o contrato pelo qual o WMS (ou ERP) fornece ao WCS os dados mestres necessários para o funcionamento da operação: **produtos/SKUs**, **endereços/posições de picking**, **lotes** e, em alguns projetos, **transportadoras**. Esses dados são recebidos pelo WCS, persistidos em sua base e disponibilizados para todas as telas e módulos que deles dependem.

O WCS mantém a **dupla-camada de atualização**: recebe os dados por integração e, adicionalmente, permite ao operador **cadastrar, editar e excluir** registros individualmente pela interface web — garantindo que a operação não fique bloqueada caso uma integração falhe ou um dado precise de ajuste pontual.

---

### Cadastro de Produto / SKU

**Sentido:** WMS/ERP → WCS

O payload de Produto é a integração mais crítica do módulo de dados mestres. O WMS envia os detalhes do item (código interno, código comercial/EAN, nome, tipo, peso, dimensões, quantidades por embalagem, curva de vendas, categoria e flags operacionais) e o WCS os utiliza em:

- **Validação de leitura:** ao bipar um EAN na estação, o WCS consulta o cadastro para identificar o produto;
- **Cálculo de cubagem:** dimensões e peso alimentam o módulo de cubagem (ver [[cubagem]]);
- **Decisão de Full Case:** os campos `qtdFull`, `tipo` e/ou `cubagem_m3` determinam quando a separação é direcionada ao fluxo de caixa fechada (ver [[picking-fullcase]]);
- **Regras de picking:** `qtdMinimaposicaoPicking` e `qtdMaximaposicaoPicking` controlam o nível de estoque nas posições;
- **Roteamento e segregação:** flags como `refrigerado`, `excecao` e `ptlExclusivo` direcionam o item a fluxos específicos.

**Operações disponíveis no WCS:**
- `POST /produto` — cria ou atualiza um produto
- `PUT /produto/{codInterno}` — atualiza produto existente
- `DELETE /produto/{codInterno}` — inativa/exclui produto

**Campos-base do payload de Produto (mínimo comum entre projetos):**

| Campo | Tipo | Obrigatório | Descrição | Tamanho |
|-------|------|-------------|-----------|---------|
| `codInterno` | string/integer | Sim | Código identificador único do produto (SKU) | Char(30) |
| `tipo` | string | Sim | Categorização operacional (ex: `Comum`, `Inflamável`, `Aerosol`, `Controlado`, `Refrigerado`) | Char(50) |
| `categoria` | string | Sim | Família ou categoria do produto | Char(50) |
| `ativo` | boolean | Sim | Indica se o produto está ativo (`true`/`false`) | Boolean |
| `curva` | string/array | Não | Curva de vendas ABC (ex: `"A"` ou `["A","C"]` para multi-empresa) | Char(1) |
| `codComercial` | string/array | Não | Código de barras EAN-13; em projetos multi-embalagem, array com posições fixas `[EAN, DISPLAY, DUN14]` | Char(14) |
| `nome` | string | Não | Nome/descrição do produto | Char(200) |
| `unidadeMedida` | string | Não | Unidade de medida (ex: `"Unidade"`, `"Gramas"`) | Char(20) |
| `comprimento` | integer/array | Não | Dimensão em milímetros (ou array por embalagem: `[unidade, display, caixa]`) | Int |
| `largura` | integer/array | Não | Dimensão em milímetros | Int |
| `altura` | integer/array | Não | Dimensão em milímetros | Int |
| `peso` | integer/array | Não | Peso em gramas | Int |
| `qtdFull` | integer | Não | Quantidade de unidades por caixa fechada | Int |
| `qtdMinimaposicaoPicking` | integer/array | Não | Quantidade mínima na posição de picking | Int |
| `qtdMaximaposicaoPicking` | integer/array | Não | Quantidade máxima na posição de picking | Int |

> Campos adicionais por projeto: ver **Condicionais** abaixo.

---

### Cadastro de Endereço / Posição

**Sentido:** WMS → WCS (ou cadastro manual pelo operador)

As posições físicas de picking (endereços) são cadastradas no WCS para que o sistema possa mapear onde cada SKU está alocado e guiar o operador durante a coleta. O cadastro inclui o vínculo com a infraestrutura física (posto, concentrador, LED).

**Campos do cadastro de Endereço:**

| Campo | Descrição |
|-------|-----------|
| Número Endereço | Identificador único da posição física |
| Descritivo | Rótulo legível da posição |
| Tipo | Tipo físico da posição (ex: posição de picking, buffer, expedição) |
| Número Posto | Posto/seção ao qual o endereço pertence |
| Concentrador | Controlador de hardware ao qual o LED está ligado |
| Número LED | Identificador do display LED associado à posição |
| Ordenação | Sequência de coleta dentro do corredor/posto |

**Operações:** incluir · editar · excluir posição.

---

### Cadastro de Lote (Batch / FEFO)

**Sentido:** WMS → WCS (ou MFC → Controladora PTL)

Projetos com controle de validade (FEFO — First Expired, First Out) recebem o cadastro de lotes vinculado ao produto. O lote é usado pelo WCS para priorizar a separação dos itens com menor prazo de validade.

**Campos do cadastro de Lote:**

| Campo | Tipo | Obrigatório | Descrição | Tamanho |
|-------|------|-------------|-----------|---------|
| `batch_number` | string | Sim | Número/código do lote | Char(30) |
| `product_id` | string/integer | Sim | Referência ao produto (`codInterno`) | Char(30) |
| `quantity` | integer | Sim | Quantidade disponível no lote | Int |
| `manufacturing_date` | date | Não | Data de fabricação | Date (YYYY-MM-DD) |
| `expiration_date` | date | Sim | Data de validade | Date (YYYY-MM-DD) |

**Operações:** criar lote · deletar lote.

---

### Cadastro de Transportadora

**Sentido:** WMS → WCS (usado no mapeamento de rampas do sorter)

A lista de transportadoras é enviada ao WCS para que o módulo de Sorter possa montar o mapa de rampas de saída. Cada transportadora é associada a uma ou mais rampas conforme o critério de desvio configurado.

**Campos básicos:**

| Campo | Tipo | Obrigatório | Descrição | Tamanho |
|-------|------|-------------|-----------|---------|
| `cnpj` | string | Sim | CNPJ da transportadora | Char(18) |
| `nome` | string | Sim | Nome/razão social | Char(100) |
| `attributes` | object | Não | Atributos adicionais (ex: código IATA para operações aéreas) | Object |

---

## Condicionais

### Por Tipo de Integração — derivado de `in1`

---

#### SE `in1` = `rest` ou `in1` = `json_api` → Integração REST/JSON

O WMS/ERP envia os dados mestres via chamadas HTTP ao WCS. O WCS expõe endpoints REST que aceitam payloads JSON.

**Fluxo padrão:**
1. O WMS realiza uma requisição `POST` (ou `PUT`) ao endpoint configurado do WCS;
2. O WCS valida o payload, persiste o registro e retorna `200 OK` (sucesso) ou código de erro com mensagem descritiva;
3. Falhas de validação (campo obrigatório ausente, tipo inválido) retornam `400 Bad Request` com detalhe do campo;
4. O WCS mantém log de todas as chamadas de integração para auditoria.

**Exemplos de endpoints:**
```
POST   {{in_endpoint}}/produto
PUT    {{in_endpoint}}/produto/{codInterno}
DELETE {{in_endpoint}}/produto/{codInterno}
POST   {{in_endpoint}}/endereco
DELETE {{in_endpoint}}/endereco/{numeroEndereco}
POST   {{in_endpoint}}/lote
DELETE {{in_endpoint}}/lote/{batchNumber}
POST   {{in_endpoint}}/transportadora
```

**Exemplo de payload — Produto (POST) — variante base (Beleza):**
```json
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
  "classCod": "50 - Variação (loção)",
  "qtdMinimaposicaoPicking": 10,
  "qtdMaximaposicaoPicking": 50,
  "qtdMinimaEstoque": 20,
  "qtdMaximaEstoque": 200,
  "ativo": true
}
```

**Exemplo de payload — Produto (POST) — variante multi-embalagem (BP):**
```json
{
  "codInterno": 7908052844227,
  "curva": ["A", "C"],
  "codComercial": ["7891234567890", "7891234567890123", null],
  "excecao": true,
  "ptlExclusivo": true,
  "refrigerado": true,
  "categoria": "vacinas",
  "tipo": "controlado",
  "nome": "Produto Exemplo",
  "unidadeMedida": "gramas",
  "comprimento": [80, 100, 500],
  "largura": [50, 80, 250],
  "altura": [100, 150, 350],
  "peso": [500, 1200, 3000],
  "qtdDisplay": null,
  "qtdFull": 1,
  "qtdPallet": 100,
  "qtdMinimaposicaoPicking": [10, 15],
  "qtdMaximaposicaoPicking": [80, 120],
  "ativo": true
}
```

> **Nota:** `codComercial` como array tem posição fixa: `[0]=EAN`, `[1]=DISPLAY`, `[2]=DUN14`. Posição `null` quando o código não existe para o produto.

---

#### SE `in1` = `idoc` → Integração IDoc SAP

O WMS (SAP) envia dados mestres ao WCS por meio de mensagens IDoc (Intermediate Documents). Essa variante é típica de projetos com ERP SAP.

**Mensagens IDoc relevantes para dados mestres:**

| IDoc / Tipo | Conteúdo | Segmentos principais |
|-------------|----------|----------------------|
| `MATMAS` / `ZMATMAS` | Mestre de Materiais (produto/SKU) | `E1MARAM` (dados gerais), `E1MAKTM` (descrição), `E1MARMM` (unidades de medida/embalagem) |
| `DEBMAS` | Mestre de Clientes (transportadoras/clientes) | `E1KNA1M` (dados gerais), `E1KNVVM` (vendas) |
| `LOBM` | Lotes (batch/FEFO) | `E1CLFMAS` (classificação), datas de fabricação/validade |

**Campos mapeados do `MATMAS` para o WCS:**

| Segmento IDoc | Campo IDoc | Campo WCS |
|---------------|------------|-----------|
| `E1MARAM` | `MATNR` | `codInterno` |
| `E1MAKTM` | `MAKTX` | `nome` |
| `E1MARMM` | `EAN11` | `codComercial` (EAN) |
| `E1MARMM` | `LAENG` / `BREIT` / `HOEHE` | `comprimento` / `largura` / `altura` (mm) |
| `E1MARMM` | `BRGEW` | `peso` (g) |
| `E1MARMM` | `UMREZ` | `qtdFull` (fator conversão) |
| `E1MARAM` | `MATKL` | `categoria` |
| `E1MARAM` | `LVORM` | `ativo` (flag deleção = inativo) |

> **Nota de projeto (Gemini/I24 SAP):** a mensagem `ZMATMAS` (customização SAP para automação de cadastro de materiais) foi **adiada para Wave 2** por baixo ROI. Na Wave 1, o cadastro é manual ou via interface WCS. Verificar com o cliente se o IDoc custom já está disponível antes de especificar essa integração.

---

#### SE `in1` = `dblink` → Integração DBLink (tabela compartilhada)

O WCS e o WMS compartilham tabelas de banco de dados. O cadastro de produto, endereço e lote é consumido pelo WCS diretamente da base do WMS por meio de views ou tabelas replicadas.

**Estrutura típica:**

| Tabela / View compartilhada | Conteúdo | Direção |
|-----------------------------|----------|---------|
| `VW_PRODUTO` / `TB_SKU` | Dados do produto (código, EAN, dimensões, peso, categoria) | WMS → WCS (leitura) |
| `VW_ENDERECO` | Posições de picking com posto/LED | WMS → WCS (leitura) |
| `VW_LOTE` | Lotes com datas de fabricação/validade | WMS → WCS (leitura) |
| `VW_TRANSPORTADORA` | Transportadoras para mapa de rampas | WMS → WCS (leitura) |

**Comportamento:**
- O WCS não recebe callbacks: consulta as views sob demanda (ou por job periódico de sincronização);
- Alterações no WMS são refletidas no WCS no próximo ciclo de leitura (latência configurável);
- O WCS pode ter tabela local espelhada para desempenho (não depende da conexão ao WMS em tempo real).

> **Importante:** o operador ainda pode editar registros individualmente no WCS; tais edições ficam na tabela local do WCS e podem ser sobrescritas pelo próximo ciclo de sincronização. Definir com o cliente a precedência (WMS vence / WCS vence).

---

#### SE `in1` = `excel` ou `in1` = `json_pasta` → Importação por Arquivo

O cadastro é alimentado por arquivo (Excel ou JSON depositado em pasta monitorada). Não há integração em tempo real.

**Excel:**
- O operador (ou processo WMS) deposita o arquivo `.xlsx` em pasta monitorada ou faz upload manual pela interface WCS;
- O WCS processa o arquivo, valida colunas obrigatórias e importa os registros;
- Erros de validação são exibidos ao operador linha a linha.

**JSON em pasta (`json_pasta`):**
- O WMS deposita arquivos `.json` em pasta de rede configurada;
- Um processo do WCS monitora a pasta e importa automaticamente os arquivos novos;
- Arquivos processados são movidos para subpasta `processado/`; com erro, para `erro/` com log.

---

### Variante de Cadastro Pollux / Vênus — SE projeto tem PTL (`pt_tem_ptl = yes`)

Em projetos com PTL físico (Pollux ou Vênus), a camada MFC (Invent) replica os dados mestres para a controladora via APIs REST próprias. Essa replicação é **adicional** à integração principal WMS → WCS.

**APIs MFC → Controladora (Pollux/Vênus):**

```
POST   /products          — cadastrar produto na controladora
GET    /products          — listar produtos cadastrados
DELETE /products/{id}     — remover produto da controladora

POST   /carriers          — cadastrar transportadora
GET    /carriers          — listar transportadoras
DELETE /carriers/{id}     — remover transportadora

POST   /batches           — cadastrar lote (Vênus — FEFO)
DELETE /batches/{id}      — remover lote (Vênus)
```

**Campos específicos do cadastro na controladora:**

| Entidade | Campos extras (além dos padrão WCS) |
|----------|--------------------------------------|
| Produto (Pollux/Vênus) | `capsule_color` (cor do display LED), `capsule_weight` (peso para balança), `gs1_identifier` (código GS1) |
| Transportadora | `cnpj`, `attributes.iata` (código IATA — operações aéreas) |
| Lote (Vênus) | `batch_number`, `product_id`, `quantity`, `manufacturing_date`, `expiration_date` |

---

### Variante Hierarquia Mercadológica — SE projeto Beleza/cosméticos

Projetos com hierarquia mercadológica completa acrescentam os seguintes campos ao payload de Produto:

| Campo | Nível | Exemplo |
|-------|-------|---------|
| `div` | 1 — Divisão | `"11 - Cosméticos"` |
| `dept` | 2 — Departamento | `"20 - Perfumes"` |
| `subDept` | 3 — Subdepartamento | `"30 - Masculino"` |
| `class` | 4 — Classe | `"40 - Marca"` |
| `classCod` | 5 — Variação | `"50 - Variação (loção)"` |

Esses campos são usados em **relatórios** (Recebimento Transfer, Conciliação, Produto em Estoque) sem alterar a lógica operacional de picking.

---

### Variante Multi-Empresa — SE `curva` e quantidades são arrays

Em projetos com mais de uma empresa/filial operando no mesmo CD (ex: BP com duas filiais), os campos `curva`, dimensões e quantidades são arrays onde cada posição corresponde a uma empresa:

- Posição `[0]` = Empresa 1 (ex: filial principal)
- Posição `[1]` = Empresa 2 (ex: filial secundária)

O WCS deve resolver a posição correta conforme o contexto do pedido em processamento.

---

### Variante Conformes × Inconformes — SE projeto tem esteira automatizada

Produtos podem ser classificados como:
- **Conformes:** dentro dos limites de altura/largura/comprimento/peso e formato estável → seguem o fluxo automatizado (esteira/sorter);
- **Inconformes:** fora do padrão físico da esteira → direcionados à **conferência de inconformes**; o sistema sinaliza a não conformidade na tela do operador.

A classificação é feita no cadastro de produto com base nos limites físicos da esteira, parametrizáveis no WCS.

---

### Cadastro de Embalagens — SE projeto tem multi-embalagem (`in1 != tbd` E Flower/I22.1732)

Além do cadastro de produto, o WCS recebe uma lista mestre de embalagens vinculada a cada SKU. Cada embalagem tem:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `tipo_embalagem` | string | Tipo (ex: `"Unitário"`, `"Caixa P"`, `"Caixa G"`) |
| `codigo` | string | Código de barras da embalagem |
| `tipo_codigo` | string | Tipo do código (`"EAN"`, `"DUN14"`) |
| `fator_conversao` | integer | Quantidade de unidades por embalagem |
| `comprimento` | integer | mm |
| `largura` | integer | mm |
| `altura` | integer | mm |
| `cubagem_m3` | decimal | Volume em metros cúbicos |

Esses dados alimentam diretamente o módulo de [[cubagem]].

---

### SE `in1 = tbd` ou cadastro é manual → OMITE o capítulo de integração automática

Em projetos sem integração de dados mestres (ex: I21.131), **todo o cadastro é manual**: o operador acessa diretamente as telas de produto/endereço no WCS e registra cada item individualmente. O sistema SAP é atualizado paralelamente (fora do escopo do WCS). Mencionar que não há payload de integração nem endpoint exposto.

---

## Observações Livres do Kickoff

Campos relevantes: `in_endpoint` (URL base), `in3` (timeout), `in1b` (canal secundário).

O ED deve:
- **`in_endpoint`** → preencher `{{in_endpoint}}` nos exemplos de endpoint. Se vazio, usar `https://[wms-host]/api` como placeholder.
- **`in3`** → mencionar o timeout configurado na subseção de parâmetros de integração (ex: "O WCS aguarda até `{{in_timeout}}`ms por resposta do WMS antes de registrar falha").
- **`in1b`** → se preenchido, documentar o segundo canal como variante complementar (ex: cadastro de produto via REST + lotes via arquivo Excel).
- **Observação que restringe escopo** (ex: "somente produtos, sem endereços") → SUBSTITUIR o texto padrão de Endereços/Lotes por nota explícita de que essa entidade está fora do escopo desta integração.
- **Observação que adiciona entidade** não coberta (ex: "cadastro de WMS-Carriers via webhook") → ADICIONAR como subseção nomeada com `[OBS INTERNA]` se precisar de validação.

---

## Regras de Negócio
- **RN-01** (todos): a integração de Produto trafega no sentido **WMS/ERP → WCS**; o WCS é consumidor, nunca produtor do cadastro mestre de produto.
- **RN-02** (todos): o operador pode **cadastrar, editar e excluir** produtos individualmente pela interface WCS, independentemente da integração — a integração não bloqueia a edição manual.
- **RN-03** (todos): um mesmo SKU pode ter **mais de um EAN** (unitário, display, DUN14); o WCS deve controlar essa multiplicidade. SKU (`codInterno`) e EAN (`codComercial`) são campos distintos.
- **RN-04** (REST/JSON): campos obrigatórios ausentes no payload retornam `400 Bad Request` com identificação do campo; o registro não é gravado parcialmente.
- **RN-05** (BP/multi-empresa): `codComercial` é array de posição fixa `[EAN, DISPLAY, DUN14]`; posição ausente = `null`. O WCS não deve interpretar o índice como tipo — a posição define o tipo.
- **RN-06** (BP/multi-empresa): `curva` e `qtdMinima/MaximaposicaoPicking` como arrays têm posição correspondente à empresa; o WCS deve resolver a posição correta pelo contexto do pedido.
- **RN-07** (Full Case): quando `qtdFull` está preenchido e a quantidade solicitada no pedido atinge uma caixa fechada, o WCS pode direcionar para full case — ver [[picking-fullcase]] para a regra completa.
- **RN-08** (FDBR/farma): a conversão para Full Case por quantidade (`qtdFull`) só se aplica a produtos cujo `tipo/categoria` = `"cápsulas"`. Para outros tipos, o gatilho é a cubagem.
- **RN-09** (Flower/esteira): produtos classificados como **Inconformes** (fora dos limites físicos da esteira) são sinalizados no WCS e direcionados ao fluxo de conferência de inconformes.
- **RN-10** (I21.131 / sem integração): quando não há integração de dados mestres, o produto é cadastrado **manualmente** no WCS e no ERP separadamente. Não há sincronização automática.
- **RN-11** (Pollux/Vênus): o MFC (Invent) expõe APIs REST independentes para cadastrar/listar/deletar produtos, transportadoras e lotes na **controladora de PTL** — essa replicação é adicional e não substitui o cadastro no WCS principal.
- **RN-12** (Vênus/FEFO): o cadastro de lotes (`batch`) com `manufacturing_date` e `expiration_date` é pré-requisito para o controle FEFO na separação.
- **RN-13** (Gemini/SAP): a integração via IDoc `ZMATMAS` (SAP → WCS automático) pode estar adiada por decisão de projeto — confirmar com o cliente antes de especificar. Na ausência do IDoc, o cadastro de produto é feito pela tela de Produto do WCS.
- **RN-14** (DBLink): em integrações por banco compartilhado, definir com o cliente a **regra de precedência** quando há conflito entre edição manual no WCS e sincronização do WMS (quem vence em caso de divergência).
- **RN-15** (Beleza/hierarquia): campos de hierarquia mercadológica (`div`/`dept`/`subDept`/`class`/`classCod`) vêm na integração de cadastro e são usados em relatórios; **não alteram a lógica de picking** nem geram rotas específicas.
- **RN-16** (todos com Endereço): a exclusão de um endereço com estoque associado deve ser bloqueada ou exigir confirmação — o WCS não deve remover posições com saldo positivo sem tratativa explícita.

---

## Insights e Padrões

### Padrões identificados
- **Produto (POST) é o contrato-rei:** quase todas as especificações de integração de cadastros têm como primeira e mais detalhada seção o `Produto (POST) WMS→WCS`. É o dado mestre mais crítico do sistema.
- **Dupla-camada sempre presente:** em 100% dos projetos com integração de cadastro, o WCS permite edição manual pelo operador como fallback. O modelo "integração com override manual" é o padrão consolidado.
- **Tela Endereço estável:** o projeto I21.177 documenta a mesma especificação de tela Endereço em ~10 revisões idênticas (Número Endereço, Tipo, Posto, Concentrador, LED) — é a especificação mais estável do módulo.
- **Cubagem nasce no cadastro:** dimensões, peso e `cubagem_m3` por embalagem vêm exclusivamente desta integração — é a fonte primária de dados do módulo [[cubagem]].
- **Rebranding Velox visível:** especificações de 2024–2025 (ex: Beleza) já usam "WMS→Velox" no lugar de "WMS→WCS". Indicador de que o produto foi rebrandizado; os dois termos coexistem nas especificações.

### Variações significativas
- **Três formatos de Produto (POST) incompatíveis entre si:**
  - **FDBR/I23.1412:** lista achatada em inglês (`sku/ean/length/packingQty`), regra de Full Case por cápsula;
  - **BP/I24.215:** arrays para multi-embalagem e multi-empresa (`comprimento[]`, `qtdMinimaposicaoPicking[]`) + flags (`refrigerado`, `ptlExclusivo`, `excecao`);
  - **Beleza/I25.9043:** hierarquia mercadológica completa 5 níveis + limites de estoque (`qtdMinimaEstoque`, `qtdMaximaEstoque`).
  - **Consequência:** não há contrato único — cada implementação exige mapeamento específico por cliente. O modelo de dados WCS deve ser um **superset flexível** com campos opcionais.
- **Caso "sem integração" (I21.131):** cadastro 100% manual — extremo oposto dos demais; importante para não assumir integração como universal.
- **Full Case com dois gatilhos (FDBR Rev10):** por **quantidade** (`qtdFull`) ou por **cubagem** (`cubagem_m3`), dependendo da revisão do projeto. Confirmar qual está vigente.
- **Pollux × Vênus:** Vênus tem cadastro de lotes/batch (FEFO); Pollux, nos dados disponíveis, não. Atributos de transportadora incluem `iata` — sinal de operações aéreas/intermodais.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **"tem cadastro de lotes (FEFO)?"** — hoje inferido pelo tipo de projeto (PTL com Vênus, ou projeto farmacêutico). Candidato a checkbox.
- Não há campo para **"multi-empresa / multi-filial"** (arrays por empresa) — aparece em texto livre ou nas especificações. Candidato a checkbox.
- Não há distinção no kickoff entre **"produto via REST"** e **"lotes via arquivo/IDoc"** no mesmo projeto (canal secundário `in1b` existe, mas sem campo de entidade específica por canal).
- **JSONs de exemplo nas especificações têm erros de sintaxe** (vírgulas sobrando, aspas inválidas, `"unit": "string",`). Os exemplos do RAW não são válidos para parse direto — o ED deve usar as versões corrigidas documentadas aqui.

### Inferências
- **Inferência:** o modelo de dados de produto deve ser projetado como **superset flexível** (todos os campos opcionais exceto `codInterno`, `tipo`, `categoria` e `ativo`), pois cada cliente envia subconjunto diferente. · **Confiabilidade:** alta · **Base:** os três formatos observados divergem fortemente em campos e cardinalidade.
- **Inferência:** `fator_conversao` e `cubagem_m3` por embalagem são **pré-requisito** para os tópicos [[cubagem]] e decisão de Full Case — sem cadastro completo, esses processos degradam (decisão de full case fica inoperante). · **Confiabilidade:** alta · **Base:** o próprio cadastro de embalagens declara que serve para "cálculo de cubagem e regras operacionais".
- **Inferência:** a regra de Full Case por cápsula (FDBR) é específica de farma/cápsulas e não deve ser generalizada para outros segmentos. · **Confiabilidade:** média · **Base:** a condição `tipo = "cápsulas"` é explícita e aparece apenas no FDBR.
- **Inferência:** quando `in1 = idoc`, é provável que o cliente use SAP como ERP/WMS. Confirmar se o IDoc customizado (`ZMATMAS`) já está homologado antes de assumir integração automática. · **Confiabilidade:** média · **Base:** projeto Gemini adiou a integração IDoc por baixo ROI.

---

## Dependências (grafo)
- **Entra antes de:** todos os módulos operacionais — o cadastro de produto deve existir antes de qualquer wave/pedido
- **Alimenta diretamente:** [[picking-pbl]] (curva, qtdMin/Max posição), [[picking-fullcase]] (qtdFull, tipo), [[cubagem]] (dimensões, peso, cubagem_m3), [[sorter-mapa-rota]] (transportadoras), [[ptl-alocacao]] (produtos/lotes na controladora Pollux/Vênus), [[conferencia]] (peso esperado para check weight, EAN para bipagem), [[reabastecimento]] (qtdMinimaEstoque/qtdMaximaEstoque)
- **Consulta/alimenta:** [[integracao-pedidos]] (usa `codInterno`/EAN para resolver itens do pedido), [[etiquetas]] (EAN-13/DUN14 do cadastro), [[integracao-wcs-wms]] (canal de transporte dos dados mestres)
- **Paralelo/complementar:** [[cadastros-acessos]] (usuários/permissões — módulo distinto, mesmo gate `if8`)
- **Pré-requisito para:** [[cubagem]] (sem dimensões/peso, cubagem não funciona), [[picking-fullcase]] (sem `qtdFull`/`cubagem_m3`, regra de full case não dispara), [[ptl-alocacao]] (sem produto cadastrado na controladora, PTL não exibe)
