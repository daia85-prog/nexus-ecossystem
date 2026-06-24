# ED_CARD — integracao-pedidos

**Tópico:** integracao-pedidos · **Bloco:** integracao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `in1 = *` (sempre presente — todo projeto recebe pedidos)

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{protocolo}}` | `in1` | select | `rest`=REST · `idoc`=IDoc (SAP) · `dblink`=DBLink (banco direto) · `excel`=Excel · `json_api`=JSON via API · `json_pasta`=JSON em pasta · `outro`=Outro |
| `{{protocoloSecundario}}` | `in1b` | select (opcional) | mesmos valores de `in1`; presente quando há protocolo secundário |
| `{{endpointBase}}` | `in_endpoint` | texto | URL base da API (preenchido quando in1=rest ou json_api) |
| `{{timeoutMs}}` | `in3` | texto | Timeout em ms (ex: 5000) |
| `{{nomeWMS}}` | `g5` | texto | Nome do sistema do cliente — WMS/ERP (ex: CONCINCO, SAP EWM) |

## Condicionais (regra → ação)

- **`in1 = rest` ou `in1 = json_api`** → incluir subseção "Endpoint e Autenticação" com `{{endpointBase}}` e `{{timeoutMs}}`; documentar contrato REST (método POST, headers, content-type application/json).
- **`in1 = json_pasta`** → incluir subseção "Leitura de Pasta" — diretório monitorado, polling/trigger, formato do arquivo, chave de controle de reprocessamento.
- **`in1 = idoc`** → incluir subseção "Contrato IDoc" — estrutura IDOC/SOAP, SSL/TLS, campos TRART; referenciar [[integracao-wms-erp]].
- **`in1 = dblink`** → incluir subseção "Tabela Compartilhada" — tabela de origem, chave única de pedido (ex: `numos`), mecanismo anti-reprocessamento, pré-requisito de carga antes da operação.
- **`in1 = excel`** → incluir subseção "Importação Excel" — formato esperado, frequência de carga, responsável pelo envio.
- **`in1b` preenchido`** → incluir nota de "Protocolo Secundário" descrevendo a coexistência dos dois protocolos e os tipos de pedido roteados por cada um.
- **`in1b` ausente** → omitir nota de protocolo secundário.
- **Sempre** → incluir seção "Política de Recusa Total" (RN-02): qualquer inconsistência recusa toda a integração; o {{nomeWMS}} corrige e reenvia completa.
- **Sempre** → incluir seção "Flags Operacionais" (RN-08): `double_check`, `cliente_especial`, `cliente_novo`, `conferencia` → direcionamento ao módulo de conferência.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Integração de Pedidos / Remessas"
  conteudo: visão geral — o {{nomeWMS}} envia ao WCS a lista de pedidos a separar (Wave);
            porta de entrada da operação; o WCS exibe os pedidos no Order Start e aplica
            rota/transportadora, flags de conferência e cubagem.

[nivel 2] "Protocolo de Integração"
  conteudo: protocolo principal {{protocolo}}; timeout {{timeoutMs}} ms.
  [condicional in1=rest|json_api] subseção "Endpoint e Autenticação"
    conteudo: URL base {{endpointBase}}; método POST; content-type application/json; timeout {{timeoutMs}} ms.
  [condicional in1=json_pasta] subseção "Leitura de Pasta"
    conteudo: diretório monitorado; mecanismo de polling/trigger; chave de controle (sem reprocessamento).
  [condicional in1=idoc] subseção "Contrato IDoc"
    conteudo: IDOC/SOAP sobre HTTP com SSL/TLS; ver [[integracao-wms-erp]] para estrutura detalhada.
  [condicional in1=dblink] subseção "Tabela Compartilhada"
    conteudo: tabela de origem; chave única (ex: numos); WCS lê registros novos/atualizados; pré-requisito
              de inserção pelo WMS antes do início da operação no Sorter (RN-05).
  [condicional in1=excel] subseção "Importação Excel"
    conteudo: formato esperado; frequência de carga; responsável pelo envio.
  [condicional in1b preenchido] subseção "Protocolo Secundário ({{protocoloSecundario}})"
    conteudo: tipos de pedido roteados por cada protocolo; coexistência e precedência.

[nivel 2] "Payload da Remessa"
  subseção "Cabeçalho (Remessa)"
    [tipo tabela] headers ["Campo","Descrição","Obrigatório"];
    campos: num_pedido, prioridade, remessa, cep, loja, cod_transp/des_transp, cod_cliente/des_cliente,
            cidade/uf, cod_rota/des_rota, double_check, cliente_especial, empresa/centro/codDeposito,
            cnpjEmbarcador.
  subseção "Itens Fracionados"
    [tipo tabela] headers ["Campo","Descrição"];
    campos: tarefa, tipo_dep, posicao, sku, ean, ean_dz, qtd_solic, cubagem, altura/largura/comprimento,
            peso, qtd_master.
  subseção "Full Case"
    [tipo tabela] headers ["Campo","Descrição"];
    campos: uc, sku, dun, qtd_solic, qtd_caixa, dimensões, peso.

[nivel 2] "Fluxo de Processamento"
  conteudo: recebimento da Wave → validação → recusa total (se inconsistência) ou aceitação →
            populate ORDEMSERVICO → exibição no Order Start.

[nivel 2] "Política de Recusa Total"
  conteudo: qualquer inconsistência no payload recusa toda a integração (sem recusa parcial — RN-02);
            o {{nomeWMS}} corrige e reenvia a integração completa.

[nivel 2] "Flags Operacionais"
  [tipo tabela] headers ["Flag","Efeito no WCS"];
  linhas: double_check → conferência adicional; cliente_especial → conferência; cliente_novo → conferência;
          cod_rota/cod_transp → mapa do Sorter.
  referenciar [[sorter]] e [[conferencia]].

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE filtradas: RN-01 a RN-08.

[nivel 2] "Integrações Relacionadas"
  conteudo: [[integracao-wcs-wms]] (Snap Shot, confirmação de separação);
            [[integracao-wms-erp]] (quando in1=idoc);
            [[sorter]] (mapa de rotas/transportadoras);
            [[conferencia]] (flags de conferência);
            [[integracao-cadastros]] (cadastro de caixas para cubagem — RN-06).
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[integracao-wcs-wms]] (Picking Confirm, Snap Shot), [[integracao-wms-erp]] (quando in1=idoc), [[sorter]] (rota/transportadora), [[conferencia]] (flags), [[integracao-cadastros]] (cubagem/caixas).
