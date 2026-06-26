# JSON_DOCS — Referência do input_json e Campos do Kickoff

> Documento de referência para o ED (Especialista Documentador). Descreve:
> 1. A estrutura completa do `input_json` esperado pelo docxBuilder
> 2. Todos os tipos de capítulo e suas regras de renderização
> 3. A ordem canônica dos capítulos (9 fases)
> 4. Todos os campos do kickoff com códigos e traduções

---

## 1. Estrutura do `input_json`

```jsonc
{
  "meta": {
    "projeto":  "Nome do Projeto",            // obrigatório — nome de uso do projeto
    "codinome": "CODINOME",                   // opcional — codinome curto (ex: PAYLESS); se ausente usa meta.projeto
    "codigo":   "I24.001",                    // obrigatório — código Invent (I + 2 dígitos + ponto + 3-4 dígitos)
    "fase":     "ES",                         // opcional — fase do documento (padrão: "ES")
    "revisao":  "01"                          // opcional — número de revisão (padrão: "01")
  },
  "capa": {
    "nome_cliente":          "Razão Social",  // nome do cliente
    "descricao_revisao":     "Emissão inicial",
    "responsavel_revisao":   "Nome Sobrenome",
    "nome_responsavel":      "Nome Sobrenome",
    "email":                 "email@invent.com.br",
    "departamento":          "Engenharia WCS",
    "data_revisao":          "25/06/2026",
    "data_aprovacao":        ""               // deixar vazio se não aprovado
  },
  "capitulos": [
    // ... array de itens — ver Seção 2
  ]
}
```

**Regra:** `meta` e `capitulos` são obrigatórios. `capa` é opcional mas recomendado. Campos ausentes em `meta` e `capa` são preenchidos com vazios ou padrões pelo docxBuilder.

---

## 2. Tipos de item em `capitulos[]`

### 2.1 Heading (nível 1–5)

```json
{ "nivel": 1, "titulo": "Order Start", "conteudo": "Parágrafo de texto.\n\nSegundo parágrafo." }
```

- `nivel`: 1 = título principal de seção (Título1), 2–5 = subtítulos. Usar `nivel 3+` para subseções dentro de um tópico.
- `conteudo`: texto corrido. Parágrafos separados por `\n\n`. Quebras simples por `\n`.
- `conteudo` pode ser omitido se o heading não tiver texto próprio (só introduz subseções).
- **Direção de integração** em parágrafo (ex: `"WMS → WCS: enviar pedido"`) é renderizado em **negrito** automaticamente.

### 2.2 Tabela

```json
{ "tipo": "tabela", "headers": ["#", "Regra"], "rows": [["RN-01", "Texto da regra"], ["RN-02", "..."]] }
```

- Cabeçalho amarelo (cor Invent), larguras automáticas.
- Use para Regras de Negócio (`headers: ["#", "Regra"]`), stakeholders, comparativos.
- Tabela de stakeholders recebe o usuário logado na 1ª linha automaticamente.
- Avisos consecutivos idênticos são deduplicados.

### 2.3 Bloco JSON (exemplo de payload)

```json
{ "tipo": "json_block", "linhas": ["{", "  \"sku\": \"ABC123\"", "  \"qty\": 1", "}"] }
```

- Renderizado como bloco de código escuro com syntax highlight.
- Precedido automaticamente por "Exemplo Payload (JSON):".
- Se vier imediatamente antes de uma tabela, o builder reordena para o JSON vir primeiro.

### 2.4 Warning

```json
{ "tipo": "warning", "texto": "Volume com peso fora da tolerância ±50 g é desviado para conferência." }
```

- Caixa amarela destacada. Usar para alertas operacionais, restrições críticas.
- Avisos idênticos consecutivos são deduplicados automaticamente.

### 2.5 Regras gerais de conteúdo

- **`[OBS INTERNA]`** no texto → removido do .docx (invisível no documento final). Usar para anotações de revisão.
- **`[ATENÇÃO CRÍTICA]`** → idem, removido do .docx.
- Campo com valor `tbd`, "a definir", "pendente" ou `—` → seção inteira **omitida** automaticamente.
- Quebra de página entre seções é automática (baseada em níveis de heading) — não inserir manualmente.
- **NÃO** gerar o capítulo "Métodos de Autenticação" — é injetado byte-a-byte do template pelo docxBuilder antes das Integrações.

---

## 3. Ordem canônica dos capítulos

Sempre seguir a ordem abaixo. O ED decide quais tópicos estão "em escopo" com base nos gates do kickoff, e então os ordena dentro dessas 9 fases:

| Fase | Tópicos (em ordem dentro da fase) |
|------|-----------------------------------|
| 1. Dados do Projeto | cubagem · integracao-pedidos (visão geral de pedidos) |
| 2. Entrada / Início | recebimento-armazenagem · order-start |
| 3. Separação | picking-pbl · picking-cart · picking-fullcase · picking-pallet · shortpicking · put-to-wall · cancelamento-pedidos |
| 4. Conferência & Packing | conferencia · conferencia-manual · cross-check · packing · packing-termolabil |
| 5. Expedição | sorter · sorter-inducao · sorter-mapa-rota · sorter-rejeito · paletizacao · ptl-alocacao · ptm · etiquetas · checklist-carregamento |
| 6. Estoque | reabastecimento · inventario |
| 7. Autenticação | **FIXO no template — NÃO gerar** |
| 8. Integração | integracao (geral) · integracao-wcs-wms · integracao-wms-erp · integracao-cadastros |
| 9. Infraestrutura & Sistema | cadastros-acessos · dashboards-relatorios |

> **Nota:** integracao-pedidos aparece na Fase 1 porque o documento apresenta as integrações de pedidos/ondas antes do fluxo operacional. As demais integrações (Fase 8) descrevem o mecanismo técnico de cada interface.

---

## 4. Campos do Kickoff — Referência Completa

### Convenções

- **Multi-select:** valores separados por `|||`. Ex: `"conf_blind|||conf_weight"`.
- **`tbd`:** "A definir" — omitir a seção ou marcar `[OBS INTERNA] confirmar`.
- **Campos de texto livres** (`text`, `textarea`): usar o valor diretamente.
- **Campos numéricos** (`text` numérico): usar diretamente (ex: `"12"` → "12 estações").

### Mapa global de códigos → texto

```
yes=Sim · no=Não · tbd=A definir
wcs=WCS · wms_only=WMS · both_wms_wcs=Ambos
invent=Invent · client=Cliente · both_resp=Ambos
srv_invent=Invent · srv_client=Cliente · srv_shared=Compartilhada
new_proj=Novo · additive=Aditivo
```

---

### Seção 1 — Info Gerais

| Campo | Tipo | Opções / Notas |
|-------|------|----------------|
| `g1` | texto | Razão social do cliente |
| `g2` | texto (mascarado) | Código do projeto: `I24.001` |
| `g_codinome` | texto | Codinome de uso nos documentos |
| `g3` | texto | Local do CD (cidade + estado) |
| `g4` | select | `new_proj`=Novo · `additive`=Aditivo · `tbd` |
| `g4a` | textarea | Escopo do aditivo (só se g4=additive) |
| `g5` | texto (wms) | Sistema do cliente (WMS/ERP): CONCINCO, SAP EWM, TOTVS WMS, Oracle, Manhattan, Infor, JDA, Linx, Sankhya, Track, GFT, Bsoft, Outro |
| `g_golive` | texto | Data alvo GoLive (DD/MM/AAAA) |
| `g_layout_ref` | texto | Layout de referência semelhante |

### Seção 2 — Layout e Caixas

| Campo | Tipo | Opções |
|-------|------|--------|
| `c2` | select | `yes`=Múltiplos tipos · `no`=Tipo único |
| `l1` | select (se c2=no) | `tote_plastic`=Tote/Plástica · `cardboard`=Papelão · `fardo`=Fardo · `misto_box`=Misto · `tbd` |
| `l1_m` | multi (se c2=yes) | mesmas opções de l1 |
| `l3` | select | `yes`=Tem mezanino · `no`=Sem mezanino |
| `l5` | texto (se l3=yes) | Quantidade de níveis do mezanino |
| `l6` | select | `yes`=Tem AMR · `no`=Sem AMR |

### Seção 3 — Cubagem

| Campo | Tipo | Opções |
|-------|------|--------|
| `cu1` | select (gate) | `yes`=Tem cubagem · `no`=Sem cubagem |
| `c1` | select | `wcs`=WCS · `wms_only`=WMS · `tbd` |

### Seção 4 — Integração

| Campo | Tipo | Opções |
|-------|------|--------|
| `in1` | select | `rest`=REST · `idoc`=IDoc (SAP) · `dblink`=DBLink · `excel`=Excel · `json_api`=JSON via API · `json_pasta`=JSON em pasta · `outro`=Outro · `tbd` |
| `in1b` | select | Protocolo secundário (mesmas opções) |
| `in_endpoint` | texto | URL base da API |
| `in3` | texto | Timeout em ms (ex: 5000) |

### Seção 5 — Order Start

| Campo | Tipo | Opções |
|-------|------|--------|
| `os_gate` | select (gate) | `yes`=Tem Order Start · `no` · `tbd` |
| `os_r` | select | `wcs`=WCS · `wms_only`=WMS · `both_wms_wcs`=Ambos · `tbd` |
| `os1` | texto | Número de estações de Order Start |
| `os_imp_etq` | select | `yes`=Imprime etiqueta · `no`=Não imprime |
| `os4` | select | `scan_fix`=Scanner fixo · `scan_man`=Coletor manual |
| `os5` | select | `yes`=OS por nível de mezanino · `no` |

### Seção 6 — PBL / FlowRack

> PBL tem múltiplas **linhas** — cada linha é um conjunto independente de variáveis. O kickoff armazena como `pblLines: [{...}, {...}]`.

| Campo | Tipo | Opções |
|-------|------|--------|
| `p1` | select (gate) | `yes`=Tem PBL · `no` |
| `pk_tp` | texto | Throughput (cx/h) |
| `pk_es` | select | `wcs`=WCS gerencia estoque · `wms_only`=WMS centraliza |
| **Por linha PBL:** | | |
| `p_r` | select | `wcs` · `wms_only` · `both_wms_wcs` · `tbd` |
| `p_m` | select | `led_mode`=LED · `bar_mode`=Cód. barras · `tbd` |
| `p_led` | select (se p_m=led) | `led3`=LED 3 dig · `led10`=LED 10 dig · `tbd` |
| `p_g` | select | `both_turn`=Todos os giros · `high_turn`=Alto · `med_turn`=Médio · `low_turn`=Baixo · `tbd` |
| `p2` | texto | Número de estações |
| `p_pdv` | select | `yes`=Tem PDV · `no` |
| `p_pdv_f` | select (se p_pdv=yes) | `invent` · `client` · `both_resp` |
| `p_sct` | select | `sc_hand`=Scanner de mão · `sc_fixed`=Scanner fixo · `tbd` |
| `p_sc_f` | select | `invent` · `client` · `both_resp` |
| `p3` | select (se p_sct=sc_hand) | `bip_yes`=Obrigatória · `bip_no`=Não · `bip_param`=Parametrizável · `tbd` |
| `p3b` | select (se p_sct=sc_fixed) | mesmas opções de p3 |
| `p_pf` | texto | Posições frente do FlowRack |
| `p10` | select | `yes`=Tem picking nas costas · `no` |
| `p_pc` | texto (se p10=yes) | Posições costas |
| `p10l` | select (se p10=yes) | `yes`=Costas tem LED · `no` |
| `p10lt` | select (se p10l=yes) | `led3` · `led10` · `tbd` |
| `p_re` | select | `invent` · `client` · `both_resp` |
| `s1p` | select | `yes`=Corte exige supervisor · `no` |
| `s2p` | select | `yes`=Pede caixa ao iniciar · `no` |
| `s3p` | select | `yes`=Motivo de corte obrigatório · `no` |

### Seção 7 — Picking Cart

| Campo | Tipo | Opções |
|-------|------|--------|
| `ct1` | select (gate) | `yes`=Tem Picking Cart · `no` |
| `ct_r` | select | `wcs` · `wms_only` · `both_wms_wcs` · `tbd` |
| `ct_qc` | texto | Quantidade de carrinhos |
| `ct2` | texto | Posições por carrinho |
| `ct_d` | select | `pdv_dev`=PDV · `col_dev`=Coletor · `tbd` |
| `ct_df` | select | `invent` · `client` · `both_resp` · `tbd` |
| `ct6` | select | `dest_pbl`=Completa PBL · `dest_conf`=Conferência · `dest_pack`=Packing · `tbd` |
| `s1c` | select | `yes`=Corte exige supervisor · `no` |
| `s2c` | select | `yes`=Pede caixa ao iniciar · `no` |

### Seção 8 — Full Case

| Campo | Tipo | Opções |
|-------|------|--------|
| `fc1` | select (gate) | `yes`=Tem Full Case · `no` |
| `fc_r` | select | `wcs` · `wms_only` · `both_wms_wcs` · `tbd` |
| `fc2` | select (se fc_r=wcs) | `fc_coletor`=Coletor · `fc_etiq_led`=Etiqueta+LED · `fc_etiq`=Etiqueta · `tbd` |
| `fc2b` | select (se fc_r=both_wms_wcs) | mesmas opções de fc2 |
| `fc_i` | select | `yes`=Tem impressora · `no` |
| `fc_if` | select (se fc_i=yes) | `invent` · `client` · `both_resp` · `tbd` |
| `fc_conf` | select | `yes`=Tem conferência no FC · `no` |
| `fc_conf_hw` | select (se fc_conf=yes) | `fc_hw_col`=Coletor Android · `fc_hw_pdv`=PDV + Scanner de Mão · `tbd` |
| `fc_conf_forn` | select | `invent` · `client` · `both_resp` · `tbd` |

### Seção 9 — Conferência & Packing

| Campo | Tipo | Opções |
|-------|------|--------|
| `cf_gate` | select (gate) | `yes`=Tem Conferência · `no` · `tbd` |
| `cf_t1` | multi (se cf_gate=yes) | `conf_blind`=Cega · `conf_item`=Item a Item · `conf_multi`=Multiplicador · `conf_ean`=Bipa EAN · `tbd` |
| `cf2` | texto (se cf_gate=yes) | Número de estações de conferência |
| `cf_t2` | multi (se cf_gate=yes) | `conf_weight`=Balança · `conf_rfid`=RFID · `conf_sample`=Amostragem · `conf_client`=Por cliente · `conf_product`=Por produto · `conf_100`=100% itens · `tbd` |
| `cf4` | texto (se cf_gate=yes) | Tolerância da balança (ex: ±50 g) |
| `pk1` | select (gate) | `yes`=Tem Packing · `no` · `tbd` |
| `pk_auto` | select (se pk1=yes) | `yes`=Packing automatizado · `no` |
| `pk_imp` | select (se pk1=yes) | `yes`=Tem impressora · `no` |
| `pk_imp_f` | select (se pk_imp=yes) | `invent` · `client` · `both_resp` · `tbd` |
| `pk_imp_t` | select (se pk_imp=yes) | `imp_manual`=Manual · `imp_auto`=Automática · `tbd` |
| `pk_troca` | select (se pk1=yes) | `yes`=Troca de caixa · `no` |
| `pk_etiq` | select (se pk1=yes) | `yes`=Troca de etiqueta · `no` |

### Seção 10 — Sorter

| Campo | Tipo | Opções |
|-------|------|--------|
| `st1` | select (gate) | `yes`=Tem Sorter · `no` |
| `st2` | texto | Número de rampas de saída |
| `st3` | texto | Rampas de rejeito |
| `st_cap` | texto | Capacidade (vol/h) |
| `st4` | texto | SLA portal → primeiro HPD |
| `st5` | texto | Estações de indução |
| `st6` | texto | Faces do portal de leitura (1–6) |
| `st_criterio` | select | `regiao`=Região · `transp`=Transportadora · `filial`=Filial/Destino · `outro`=Outro · `tbd` |
| `st7` | select | `yes`=Cross-check ativo · `no` |
| `st10` | select | `yes`=Sinaleiro nas rampas · `no` |
| `st11` | select | `yes`=Câmera IA · `no` |
| `st11_tvs` | texto (se st11=yes) | Quantidade de TVs para IA |
| `st_rc` | select | `yes`=Tem recirculação · `no` |
| `st_ag` | texto | Critério de agrupamento dentro da rampa |

### Seção 11 — Palletização & PTL

| Campo | Tipo | Opções |
|-------|------|--------|
| `pt_gate` | select (gate) | `yes`=Tem Palletização · `no` |
| `pt1` | select | `no_pal`=Sem paletização · `ptl_opt`=PTL · `ptm_opt`=PTM · `aloca_opt`=Aloca Pallet · `tbd` |
| `pt3` | texto | Número de posições de pallet |
| `pt_frag` | select | `yes`=Matriz de fragilidade · `no` |
| `pt_ag` | texto | Critério de agrupamento no pallet |
| `pt8` | select | `yes`=Itens perigosos · `no` |
| `pt9` | select | `yes`=Gera romaneio · `no` |
| `pt_tem_ptl` | select | `yes`=Tem displays PTL · `no` |
| `pt_tipo_disp` | select (se pt_tem_ptl=yes) | `ptl_hw`=PTL displays físicos · `tablet_ptl`=Tablet · `outro` · `tbd` |
| `pt_tvs_ptl` | texto (se pt_tem_ptl=yes) | Quantidade de TVs PTL |
| `pt_ptm` | select | `yes`=Tem PTM (Put to Monitor) · `no` |
| `pt_ptm_qtd` | texto (se pt_ptm=yes) | Quantidade de monitores PTM |

### Seção 12 — Gestão de Estoque

| Campo | Tipo | Opções |
|-------|------|--------|
| `es1` | select (gate) | `yes`=Tem Gestão de Estoque · `no` |
| `es2` | select | `yes`=Reabastecimento automático · `no` |
| `es3` | select | `yes`=Reabastecimento pelo Sorter · `no` |
| `es4` | select | `yes`=Tem inventário rotativo · `no` |
| `es5` | select | `yes`=Recall (bloqueio de lotes) · `no` |
| `es6` | select | `yes`=Movimentação Forçada · `no` |
| `es7` | select | `yes`=Curva ABC · `no` |
| `es8` | texto (se es7=yes) | Range em dias (ex: 30, 60, 90) |
| `es10` | select | `yes`=Double check · `no` |

### Seção 13 — Etiquetas

| Campo | Tipo | Opções |
|-------|------|--------|
| `et_r` | select | `wcs`=WCS responsável · `wms_only`=Cliente/WMS responsável · `tbd` |
| `et1` | texto | Total de impressoras no CD |
| `et_dist` | texto | Distribuição (ex: "2 no PBL, 1 no Packing") |

### Seção 14 — Infraestrutura

| Campo | Tipo | Opções |
|-------|------|--------|
| `if_resp_infra` | select | `srv_invent`=Invent · `srv_client`=Cliente · `srv_shared`=Compartilhada · `tbd` |
| `if_resp_srv` | select | idem |
| `if_ambiente` | select | `onprem`=On-premise · `saas`=SaaS · `cloud`=Cloud · `hybrid`=Híbrido · `tbd` |
| `if_s` | select | `single_srv`=Único · `sep_srv`=Separados · `tbd` |
| `if_ambientes` | select | `yes`=Tem PRD+HML · `no` |
| `if1` | select | `win`=Windows · `linux`=Linux · `tbd` |
| `if2` | select | `mssql`=SQL Server · `pg`=PostgreSQL · `oracle`=Oracle · `mysql`=MySQL · `tbd` |
| `if3` | select | `yes`=Tem VLAN · `no` |
| `if4` | select | `yes`=Tem VPN · `no` |
| `if5` | texto | Número de estações de trabalho |
| `if6` | select | `yes`=Tem acesso à internet · `no` |
| `if7` | texto | Specs do servidor (CPU/RAM/disco) |
| `if8` | select | `yes`=Tem AD/SSO · `no` |
| `if9` | texto | PLC (controlador de equipamentos) |
| `if10` | select | `yes`=Tem política de backup · `no` |

---

## 5. Exemplo de `input_json` mínimo

```json
{
  "meta": {
    "projeto": "CD Logística XYZ",
    "codinome": "PROJETO COLIBRI",
    "codigo": "I26.042",
    "fase": "ES",
    "revisao": "01"
  },
  "capa": {
    "nome_cliente": "Logística XYZ LTDA",
    "descricao_revisao": "Emissão inicial",
    "responsavel_revisao": "Rafael Caveagna",
    "data_revisao": "25/06/2026"
  },
  "capitulos": [
    { "nivel": 1, "titulo": "Order Start",
      "conteudo": "O Order Start é realizado em 3 estações físicas. A responsabilidade pelo disparo é do WCS. A vinculação de caixa ocorre por scanner fixo instalado na bancada." },
    { "nivel": 2, "titulo": "Fluxo do Order Start",
      "conteudo": "O operador posiciona a caixa na esteira → scanner fixo lê o código → WCS associa caixa ao pedido → etiqueta de rastreamento é impressa automaticamente." },
    { "nivel": 2, "titulo": "Regras de Negócio" },
    { "tipo": "tabela",
      "headers": ["#", "Regra"],
      "rows": [
        ["RN-01", "Toda caixa deve ser associada a um pedido antes de avançar na esteira."],
        ["RN-02", "Caixa sem associação válida é desviada para o PDV."]
      ]
    },
    { "tipo": "warning", "texto": "Caixa sem leitura válida no scanner é bloqueada na esteira e aciona alerta sonoro." }
  ]
}
```

---

## 6. Formato de exportação do kickoff (NEXUS)

O NEXUS exporta o kickoff em JSON estruturado. Campos multi-select usam `|||` como separador:

```json
{
  "g1": "Logística XYZ",
  "g2": "I26.042",
  "os_gate": "yes",
  "os_r": "wcs",
  "os1": "3",
  "cf_gate": "yes",
  "cf_t1": "conf_blind|||conf_item",
  "cf_t2": "conf_weight|||conf_sample",
  "cf4": "±50 g",
  "pk1": "yes",
  "st1": "no",
  "pblLines": [
    { "p_r": "wcs", "p_m": "led_mode", "p_led": "led3", "p2": "8", "p_pf": "40" }
  ]
}
```

**Multi-select** — para verificar se um valor está ativo: `cf_t1` contém `conf_blind` → verificar se `"conf_blind"` aparece na string separada por `|||`.

**`pblLines`** — array; cada elemento é um conjunto de campos da Seção 6. Iterar sobre todas as linhas para descrever o PBL completo.

---

*Documento atualizado 2026-06-25 — refatorado para o novo sistema de CARDs (sem _ROUTER.json). Substitui a versão anterior em ed-knowledge/JSON_DOCS.md.*
