# ED_CARD — integracao-cadastros

**Tópico:** integracao-cadastros · **Bloco:** integracao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `in1 = *` (sempre presente — toda integração inclui cadastros)

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{protocolo}}` | `in1` | select | `rest`=REST · `idoc`=IDoc (SAP) · `dblink`=DBLink (banco direto) · `excel`=Excel · `json_api`=JSON via API · `json_pasta`=JSON em pasta · `outro`=Outro |
| `{{protocoloSecundario}}` | `in1b` | select (opcional) | mesmos valores de `in1`; presente quando há protocolo secundário de cadastro |

## Condicionais (regra → ação)

- **`in1 = rest` ou `in1 = json_api`** → integração Produto (POST): documentar endpoint, payload JSON, campos obrigatórios vs opcionais; incluir subseção de Embalagens (POST separado ou array no mesmo payload).
- **`in1 = idoc`** → integração via IDOC SAP (ex: ZMATMAS); registrar se automação está ativa ou adiada (Wave 2); documentar payload IDOC e campos mapeados.
- **`in1 = dblink`** → integração via tabela/view compartilhada; documentar tabela de origem de produtos, chave de produto, polling/trigger.
- **`in1 = excel`** → carga de cadastro via planilha; documentar formato, colunas, responsável, frequência.
- **`in1 = json_pasta`** → arquivo JSON depositado em pasta monitorada; documentar diretório, mecanismo de leitura, controle de reprocessamento.
- **`in1b` preenchido** → incluir subseção de protocolo secundário com tipos de cadastro roteados por cada protocolo.
- **Sempre** → incluir tela de Cadastro de Produto (CRUD manual) — independente do protocolo.
- **Sempre** → incluir tela de Endereços/Localizações — cadastro estrutural obrigatório.
- **Sempre** → incluir regra de múltiplos EAN por SKU (RN-03).
- **Integração com PTL Pollux/Vênus detectada no projeto** → incluir seção de APIs REST de cadastro na controladora (produtos, transportadoras, lotes); referenciar [[picking-pbl]].

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Integração de Cadastros"
  conteudo: visão geral — alimentação do WCS com os cadastros mestres (Produto, Embalagens,
            Endereços) provenientes do WMS/ERP via {{protocolo}}; esses dados sustentam
            validações, cálculo de cubagem, regras de full case, roteamento e relatórios.

[nivel 2] "Protocolo de Integração de Cadastros"
  conteudo: mesmo protocolo da integração de pedidos — {{protocolo}};
  [condicional in1b preenchido] protocolo secundário {{protocoloSecundario}} para os tipos: (preencher).
  [condicional in1=rest|json_api] endpoint de cadastro de produto (POST); autenticação (Bearer/API Key).
  [condicional in1=idoc] IDOC ZMATMAS (ou equivalente); status de automação: ativa ou adiada (Wave 2).
  [condicional in1=dblink] tabela/view de produto; chave de produto; mecanismo de atualização.
  [condicional in1=excel] formato de planilha; colunas mínimas; responsável; frequência.
  [condicional in1=json_pasta] diretório monitorado; mecanismo de leitura; controle anti-reprocessamento.

[nivel 2] "Cadastro de Produto (Integração Produto POST)"
  conteudo: sentido WMS/ERP → WCS; o WCS persiste o produto e o disponibiliza nas telas operacionais.
  [tipo tabela] headers ["Campo","Obrigatório","Descrição"];
  campos base: sku, ean(s), nameItem, length/width/height, weight, packingQty, status, category, unit.
  campos estendidos (quando presentes no projeto):
    curva[], codComercial[EAN/DISPLAY/DUN14], excecao, ptlExclusivo, refrigerado, categoria, tipo,
    dimensões em arrays (multi-embalagem), qtdDisplay/qtdFull/qtdPallet, qtdMinima/MaximaPosicaoPicking[],
    hierarquia mercadológica (div/dept/subDept/class/classCod), qtdMinimaMaximaEstoque.
  regras: RN-01 (sentido e campos mínimos), RN-02 (CRUD manual pelo operador),
          RN-03 (mais de um EAN por SKU — WCS controla multiplicidade).

[nivel 2] "Cadastro de Embalagens"
  conteudo: lista mestre de embalagens por produto; cada embalagem com tipo_embalagem, codigo,
            tipo_codigo (EAN/DUN), fator_conversao, dimensões, cubagem_m3 (RN-10).
  regra de Full Case (quando aplicável ao projeto):
    [condicional FDBR] quantidade de unidades por caixa → atingiu caixa fechada → full case;
                       restrito a itens da categoria "cápsulas" (RN-04, RN-05);
                       alternativa por cubagem máxima no cadastro (RN-06).

[nivel 2] "Itens Conformes e Inconformes"
  conteudo: conformes — dentro dos limites de altura/largura/comprimento/peso e formato estável
            → fluxo automatizado (esteira/sorter) (RN-07);
            inconformes — fora do padrão → direcionados à conferência de inconformes (RN-08).
  nota: especificar os limites dimensionais e de peso conforme o projeto.

[nivel 2] "Tela de Cadastro de Produto (CRUD Manual)"
  conteudo: permite incluir, editar e excluir produtos individualmente no WCS;
            suporta mais de um EAN para o mesmo SKU (RN-03);
            campos disponíveis na tela variam por projeto (alinhar na implementação).

[nivel 2] "Tela de Endereços / Localizações"
  conteudo: cadastrar, alterar, excluir e ativar/inativar posições físicas onde o produto é alocado.
  [tipo tabela] headers ["Campo","Descrição"];
  campos: Número Endereço, Descritivo, Número Posto, Concentrador, Número LED, Ordenação, Tipo.
  classificações: Pulmão, Fullcase, Fracionado, Misto, Stage de Pallets, Recebimento,
                  Análise de Corte, Picking.
  restrição: status só alterável se não houver coleta prevista integrada.
  referenciar [[cadastros-acessos]] para regras de perfil e gestão de endereços.

[nivel 2] "Gerenciamento de Faixas de Vida Útil (Shelf Life)"
  conteudo: cadastrar faixas de shelf life por produto; edição inline na lista; botão "Salvar".
  nota: incluir somente se o projeto trabalha com FEFO/validade.

[nivel 2] "APIs de Cadastro na Controladora PTL (Pollux / Vênus)"
  conteudo: MFC (Invent) expõe APIs REST para CRUD de produtos, transportadoras e lotes
            na controladora de PTL (RN-13).
  [tipo tabela] headers ["Recurso","Método","Endpoint","Campos-chave"];
  linhas:
    Produto / POST-GET-DELETE / /produtos / capsule_color, capsule_weight, gs1_identifier;
    Transportadora / POST-GET-DELETE / /transportadoras / cnpj, attributes iata;
    Lote / POST-DELETE / /lotes / batch_number, fabricacao, validade.
  nota: incluir somente se o projeto usa PTL Pollux/Vênus; referenciar [[picking-pbl]].

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE: RN-01 a RN-13 (filtrar as aplicáveis ao projeto; sinalizar as que dependem
  de gateway de projeto — ex: RN-04/05/06 apenas FDBR; RN-09 apenas I21.131; RN-13 apenas PTL).

[nivel 2] "Integrações Relacionadas"
  conteudo: [[integracao-pedidos]] (mesmo protocolo {{protocolo}});
            [[integracao-wcs-wms]] (Snap Shot usa codInterno cadastrado aqui);
            [[integracao-wms-erp]] (ZMATMAS quando in1=idoc);
            [[cadastros-acessos]] (gestão de endereços e perfis);
            [[picking-pbl]] (quando há PTL Pollux/Vênus).
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[integracao-pedidos]] (mesmo protocolo de integração), [[integracao-wcs-wms]] (codInterno e endColeta do Snap Shot dependem dos cadastros aqui), [[integracao-wms-erp]] (ZMATMAS quando in1=idoc), [[cadastros-acessos]] (endereços e perfis), [[picking-pbl]] (PTL Pollux/Vênus).
