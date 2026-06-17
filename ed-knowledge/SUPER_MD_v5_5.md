# SUPER MD v5.8 — Biblioteca de Blocos WCS (Padrão Ouro Definitivo)

> Versão: 5.8
> Formato: Hierarquia Estrita (Capítulos > Subseções > Blocos)
> Regra de Ouro: Textos introdutórios ficam soltos no Capítulo Pai `[BASE]`. Processos físicos distintos e paralelos ganham Subseções `##`. Variações de hardware, parametrizações ou regras excludentes ganham Blocos `[SE:]` dentro do tópico correspondente.
>
> **Changelog v5.9:**
> - **Métodos de Autenticação promovido a tópico independente:** movido de subtópico dentro de Cap. 6 para capítulo `nivel: 1` próprio, antes de Integrações. O AI deve gerá-lo como capítulo standalone no JSON.
>
> **Changelog v5.8:**
> - **Cap. 6 — Métodos de Autenticação:** nova subseção `[BASE]` fixa que deve aparecer SEMPRE entre o quadro-resumo e a primeira integração (6.1). Documenta o fluxo Bearer Token (JWT) via Basic Auth, com exemplos em JS, cURL e Python, tabela de erros e OBS INTERNA de credenciais PRD/HML.
>
> **Changelog v5.7:**
> - **Cap. 22 expandido:** `22.1 Sugestão de Alocação por Curva ABC [SE: CURVA_ABC]` — conceito de PEGA, parâmetro de range, tela de consulta com tabela de dados, critérios A/B/C, fluxo de sugestão e aprovação, relatório operacional.
>
> **Changelog v5.6:**
> - **Cap. 17 reestruturado em duas subseções:** `17.1 Tela de Tratativa do Rejeito` (nova — fluxo do operador + 3 ações: Reinduzir / Devolver ao Estoque / Desmontar) e `17.2 Motivos de Rejeito` (motivos reescritos no formato narrativo numerado com "Ocorre quando...").
>
> **Changelog v5.5:**
> - Cap. 6 (Integrações): adicionado quadro-resumo + `[MOLDE_SUBINTEGRACAO]` (Direção + tabela de campos + bloco JSON por integração) — o miolo das integrações agora tem origem no Super MD.
> - Cap. 27 (Aprovação): Razão Social corrigida para "Invent Indústria e Comércio de Equipamentos **de Movimentação** Ltda." (forma canônica do template).
>
> **Changelog v5.4:**
> - Registro de variáveis e tabela de blocos `[SE:]` sincronizados com JSON v4.0 (IDs curtos).
> - 15 variáveis remapeadas para campos v4.0: `in_resp`, `st_cap`, `et_dist`, `ct_df`, `fc_if`, `fc_re`, `pbl_lines[]` para campos PBL.
> - 17 variáveis marcadas como removidas na v4.0 com instrução de Entrevista Cirúrgica.
> - 20 triggers de blocos `[SE:]` corrigidos: `g9`→`es1`, `cf3`→`cf_t2[conf_weight]`, `cf1`→`cf_t1`, `pk1` valores, `pk3`→`pk_troca`, `sp1`→`s1p/s1c`, `sp2`→`s2p/s2c`, `sp3`→`s3p`, `st_recirc`→`st_rc`, `es9`→`pt_frag`, `pt2`→`pt_tem_ptl/pt_ptm`.
> - Campos com nomes antigos sinalizados com `⚠️` para evitar uso acidental.
>
> **Changelog v5.3:** Revisão de tom, Cap. 9.2 e 10 reescritos, regra de hardware `{{RESP_HW_*}}`, `if3`–`if14` removidos do documento gerado.
> **Changelog v5.2:** 4 novas variáveis + 9 novos blocos `[SE:]` + JSON v2.3.
> **Changelog v5.1:** `{{SISTEMA_CLIENTE}}` unificado + Cap. 17 com 7 situações e blocos de recirculação.

---

## ÍNDICE DE TÓPICOS E SUBSEÇÕES

### 1. Objetivo do Documento
### 2. Especificação Técnica
### 3. Etapas da ES
### 4. Stakeholders
### 5. Legenda
### Métodos de Autenticação (tópico fixo — sempre antes de Integrações)
### 6. Integrações
### 7. Cubagem
#### 7.1 Cubagem de Pallet [SE: PTL]
### 8. Order Start
#### 8.1 Order Start Fracionado (FlowRack) [SE: PICKING_PBL]
#### 8.2 Order Start Picking Cart [SE: PICKING_CART]
#### 8.3 Order Start Full Case [SE: PICKING_FULLCASE]
### 9. Picking
#### 9.1 Picking PBL / FlowRack [SE: PICKING_PBL]
#### 9.2 Picking Cart [SE: PICKING_CART]
#### 9.3 Picking Full Case [SE: PICKING_FULLCASE]
#### 9.4 Picking Exceção [SE: PICKING_EXCECAO]
#### 9.5 Picking AMR [SE: AMR]
### 10. Shortpicking (Corte)
#### 10.1 Corte via LED (PBL) [SE: PICKING_PBL]
#### 10.2 Corte via PDV (Cart) [SE: PICKING_CART]
#### 10.3 Corte via Coletor (Full Case) [SE: PICKING_FULLCASE]
### 11. Conferência
#### 11.1 Validação por Peso (Balança) [SE: BALANCA]
#### 11.2 Conferência Cega [SE: CONFERENCIA_CEGA]
#### 11.3 Conferência Item a Item [SE: CONFERENCIA_ITEM]
#### 11.4 Conferência por Amostragem [SE: CONFERENCIA_AMOSTRAGEM]
### 12. Packing [SE: PACKING]
### 13. Cancelamento de Pedidos
### 14. Reabastecimento
#### 14.1 Reabastecimento via Ciclo da Rampa [SE: REAB_CICLO_RAMPA]
### 15. Sorter
### 16. Mapa do Sorter [SE: SORTER]
### 17. Rejeito do Sorter [SE: SORTER]
- 17.1 Tela de Tratativa do Rejeito
- 17.2 Motivos de Rejeito
### 18. PTL / Alocação
### 19. Dashboard Operacional
### 20. Relatórios
### 21. Etiquetas / Layouts
### 22. Controle de Estoque das Posições de Picking [SE: ESTOQUE_SOMBRA]
#### 22.1 Sugestão de Alocação por Curva ABC [SE: CURVA_ABC]
### 23. Inventário [SE: INVENTARIO]
### 24. Recall [SE: RECALL]
### 25. Movimentação Forçada [SE: MOVIMENTACAO_FORCADA]
### 26. Devolução de Cancelados [SE: DEVOLUCAO_CANCELADOS]
### 27. Aprovação da Proposta

---

## REGISTRO DE VARIÁVEIS DO DOCUMENTO

> Esta seção é de uso interno do gerador. Não transcrever para o documento final.
> **Atualizado para JSON v4.0 (IDs de seção curtos). Usar SEMPRE os campos abaixo.**
>
> **`{{SISTEMA_CLIENTE}}`:** Variável unificada — usa `ge.g5` (WMS) em contextos operacionais e `ge.g6` (ERP) em contextos financeiros/contábeis.
>
> **`{{RESP_HW_*}}`:** Em v4.0, a responsabilidade de hardware é por módulo. Ver tabela de mapeamento no PROMPT_SISTEMA v5.5 Seção 4.2.

| Variável | Campo JSON v4.0 | Capítulo(s) | Observação |
|---|---|---|---|
| `{{CLIENTE}}` | `ge.g1` | 1, 27, cabeçalho | — |
| `{{CODIGO_PROJETO}}` | `ge.g2` | 1, cabeçalho | — |
| `{{NOME_PROJETO}}` | `ge.g2` | 1, cabeçalho | — |
| `{{LOCAL_CD}}` | `ge.g3` | 1 | — |
| `{{SISTEMA_CLIENTE}}` | `ge.g5` / `ge.g6` | Todo o documento | Ver nota acima |
| `{{SO_SERVIDOR}}` | `if.if1` | 2 | `win` → Windows Server / `linux` → Linux |
| `{{BD_SERVIDOR}}` | `if.if2` | 2 | `mssql` / `pg` / `oracle` / `mysql` |
| `{{SPECS_SERVIDOR}}` | `if.if7` | 2 | Texto livre |
| `{{QTD_WORKSTATIONS}}` | `if.if5` | 2 | — |
| `{{PROTOCOLO_INTEGRACAO}}` | `in.in1` | 6 | `rest` / `idoc` / `dblink` / etc. |
| `{{RESPONSAVEL_INTEGRACAO}}` | `in.in_resp` | 6 | ⚠️ Era `in2`. `invent` / `client` / `both_resp` |
| `{{TIMEOUT_INTEGRACAO}}` | `in.in3` | 6 | Em milissegundos |
| `{{TIPO_EMBALAGEM}}` | `la.l1` | 7, 8.1 | `plastic` / `cardboard` / `both_box` / `tote` |
| `{{DIMENSAO_MAX_CUBAGEM}}` | — (removido v4.0) | 7 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{SEGREGACAO_CATEGORIAS}}` | — (removido v4.0) | 7 | ⚠️ Solicitar se aplicável |
| `{{QTD_ORDER_START}}` | `os.os1` | 8.1 | — |
| `{{PREFIXO_LPN}}` | — (removido v4.0) | 8.1 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{DIMENSAO_ETIQUETA_OS}}` | — (removido v4.0) | 8.1 `[SE: CAIXA_PAPELAO]` | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{RESP_HW_IMPRESSORA_OS}}` | — (engenharia) | 8.1 `[SE: CAIXA_PAPELAO]` | Sem campo JSON em v4.0 |
| `{{QTD_ESTACOES_PBL}}` | `pbl_lines[n].p2` | 9.1 | ⚠️ Agora por linha. Somar ou listar |
| `{{QTD_POSTOS_POR_ESTACAO}}` | — (engenharia) | 9.1 | Sem campo JSON |
| `{{QTD_POSICOES_FRENTE}}` | `pbl_lines[n].p_pf` | 9.1 | ⚠️ Era `p4` antes do `+` |
| `{{QTD_POSICOES_COSTAS}}` | `pbl_lines[n].p_pc` | 9.1 | ⚠️ Era `p4` depois do `+` |
| `{{VELOCIDADE_ESTEIRA}}` | — (engenharia) | 9.1 | Sem campo JSON |
| `{{QTD_DIGITOS_LED_FRENTE}}` | `pbl_lines[n].p_led` | 9.1 | ⚠️ Era `p5`. `led3`→"3" / `led10`→"10" |
| `{{QTD_DIGITOS_LED_COSTAS}}` | `pbl_lines[n].p10lt` | 9.1 `[SE: PICKING_FULLCASE_COSTAS]` | ⚠️ Era `p6`. Mesma conversão |
| `{{COR_LED_SEPARACAO}}` | — (engenharia) | 9.1 | ⚠️ Era `p7` — removido v4.0 |
| `{{COR_LED_FINALIZACAO}}` | — (engenharia) | 9.1 | ⚠️ Era `p8` — removido v4.0 |
| `{{COR_LED_FRENTE_COSTAS}}` | — (engenharia) | 9.1 `[SE: PICKING_FULLCASE_COSTAS]` | Sem campo JSON |
| `{{QTD_POSICOES_PICKING_CART}}` | `ct.ct2` | 8.2, 9.2 | — |
| `{{RESP_HW_PDV_CART}}` | `ct.ct_df` | 8.2, 9.2 | ⚠️ Era `hw2`. `invent`→"pela Invent" / `client`→"pelo Cliente" |
| `{{RESP_HW_LEITOR_CART}}` | — (engenharia) | 9.2 | Sem campo JSON em v4.0 |
| `{{DIMENSAO_MAX_SEPARACAO}}` | — (removido v4.0) | 9.4 | ⚠️ Solicitar se [SE: PICKING_EXCECAO] ativo |
| `{{PESO_MAX_LINHA}}` | — (removido v4.0) | 9.4 | ⚠️ Solicitar se [SE: PICKING_EXCECAO] ativo |
| `{{TEMPO_ACIONAMENTO_CORTE}}` | — (removido v4.0) | 10.1 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{QTD_ESTACOES_CONFERENCIA}}` | `cf.cf2` | 11.2, 11.3 | — |
| `{{TOLERANCIA_PESO}}` | `cf.cf4` | 11.1 | — |
| `{{QTD_ESTACOES_PACKING}}` | — (removido v4.0) | 12 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{QTD_TOTAL_PTL}}` | `pt.pt3` | 18 | — |
| `{{ALTURA_MAX_PALLET}}` | — (removido v4.0) | 7.1, 18 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{PESO_MAX_PALLET}}` | — (removido v4.0) | 7.1, 18 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{CUBAGEM_SEGURANCA_PALLET}}` | — (removido v4.0) | 7.1 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{QTD_RAMPAS_SORTER}}` | `so.st2` | 15, 16 | — |
| `{{QTD_RAMPAS_REJEITO}}` | `so.st3` | 17 | — |
| `{{THROUGHPUT_SORTER}}` | `so.st_cap` | 15 | ⚠️ Era `st4`. `st4` agora é SLA (segundos) — NUNCA usar `st4` |
| `{{QTD_INDUCOES_SORTER}}` | `so.st5` | 15 | — |
| `{{QTD_PORTAIS_SORTER}}` | `so.st6` | 15 | — |
| `{{QTD_LEITORES_REJEITO}}` | — (engenharia) | 17 | Sem campo JSON |
| `{{COR_REABASTECIMENTO}}` | — (engenharia) | 14.1 | Sem campo JSON |
| `{{LISTA_ROTINAS}}` | — (engenharia) | 2 | Sem campo JSON |
| `{{QTD_IMPRESSORAS}}` | `et.et1` | 21 | — |
| `{{RESP_HW_IMPRESSORAS}}` | — (engenharia) | 21 | Sem campo JSON em v4.0 |
| `{{DIMENSAO_ETIQUETA}}` | — (removido v4.0) | 21 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{TIPO_CODIGO_BARRAS}}` | — (removido v4.0) | 21 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{DISTRIBUICAO_IMPRESSORAS}}` | `et.et_dist` | 21 | ⚠️ Era `et4` |
| `{{CONTEUDO_QR_CODE}}` | — (removido v4.0) | 21 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{FORMATO_EXPORTACAO}}` | — (removido v4.0) | 20 | ⚠️ Dashboards removidos do app |
| `{{NOME_CLIENTE}}` | `ge.g1` | 27 | Mesmo que `{{CLIENTE}}` |
| `{{QTD_RUAS_FULLCASE}}` | — (removido v4.0) | 9.3 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{QTD_IMPRESSORAS_FULLCASE}}` | — (removido v4.0) | 8.3 | ⚠️ Solicitar na Entrevista Cirúrgica |
| `{{RESP_HW_IMPRESSORA_FC}}` | `fc.fc_if` | 8.3 | ⚠️ Era `hw5`. Só se `fc_i="yes"` |
| `{{RESP_HW_COLETOR_FC}}` | `fc.fc_re` | 9.3 | ⚠️ Era `hw6` |
| `{{RANGE_CURVA_ABC}}` | `es.es8` | 22 | Só se `es7="yes"` |

**Blocos `[SE:]` e seus campos gate no JSON v4.0:**

| Bloco `[SE:]` | Campo gate v4.0 | Valor ativador | Capítulo |
|---|---|---|---|
| `[SE: PICKING_PBL]` | `pb.p1` | `"yes"` | 8.1, 9.1, 10.1 |
| `[SE: PICKING_CART]` | `ct.ct1` | `"yes"` | 8.2, 9.2, 10.2 |
| `[SE: PICKING_FULLCASE]` | `fc.fc1` | `"yes"` | 8.3, 9.3, 10.3 |
| `[SE: PICKING_EXCECAO]` | — (seção removida v4.0) | — | 9.4 — ativar somente se informado em texto |
| `[SE: AMR]` | `la.l6` | `"yes"` | 9.5 |
| `[SE: CAIXA_PLASTICA]` | `la.l1` | `"plastic"` ou `"both_box"` | 8.1 |
| `[SE: CAIXA_PAPELAO]` | `la.l1` | `"cardboard"` ou `"both_box"` | 8.1 |
| `[SE: CUBAGEM_WCS]` | `cu.c1` | `"wcs"` | 7 |
| `[SE: CUBAGEM_WMS]` | `cu.c1` | `"wms_only"` | 7 |
| `[SE: BIPAGEM_OBRIGATORIA]` | `pbl_lines[n].p3` | `"bip_yes"` | 9.1 |
| `[SE: BIPAGEM_DESATIVADA]` | `pbl_lines[n].p3` | `"bip_no"` | 9.1 |
| `[SE: VALIDACAO_LOTE]` | — (campo `p11` removido v4.0) | — | 9.1 — ativar somente se informado em texto |
| `[SE: PICKING_FULLCASE_COSTAS]` | `pbl_lines[n].p10` | `"yes"` | 9.1 |
| `[SE: PEDE_CAIXA]` | `pbl_lines[n].s2p` ou `ct.s2c` | `"yes"` | 9.1 / 9.2 — ⚠️ Era `sp2` |
| `[SE: ORDER_START_WMS]` | `os.os_r` | `"wms_only"` | 8.2 — ⚠️ Era `os2` contextual |
| `[SE: APROVACAO_CORTE]` | `pbl_lines[n].s1p` ou `ct.s1c` | `"yes"` | 10 — ⚠️ Era `sp1` |
| `[SE: MOTIVO_CORTE]` | `pbl_lines[n].s3p` | `"yes"` | 10 — ⚠️ Era `sp3` |
| `[SE: BALANCA]` | `cf.cf_t2` contém `"conf_weight"` | — | 11.1 — ⚠️ Era `cf3="yes"` |
| `[SE: CONFERENCIA_CEGA]` | `cf.cf_t1` contém `"conf_blind"` | — | 11.2 — ⚠️ Era `cf1` |
| `[SE: CONFERENCIA_ITEM]` | `cf.cf_t1` contém `"conf_item"` | — | 11.3 — ⚠️ Era `cf1` |
| `[SE: CONFERENCIA_AMOSTRAGEM]` | `cf.cf_t2` contém `"conf_sample"` | — | 11.4 — ⚠️ Era `cf5="yes"` |
| `[SE: PACKING]` | `pk.pk1` | `"yes"` | 12 — ⚠️ Era `"pk_dedic"/"pk_integ"` |
| `[SE: TROCA_CAIXA_PACKING]` | `pk.pk_troca` | `"yes"` | 12 — ⚠️ Era `pk3` |
| `[SE: REABASTECIMENTO_WCS]` | `es.es1` | `"yes"` | 14 — ⚠️ Era `g9="wcs"` |
| `[SE: REABASTECIMENTO_WMS]` | `es.es1` | `"no"` | 14 — ⚠️ Era `g9="wms_only"` |
| `[SE: REAB_CICLO_RAMPA]` | `es.es3` | `"yes"` | 14.1 |
| `[SE: SORTER]` | `so.st1` | `"yes"` | 15, 16, 17 |
| `[SE: CROSSCHECK]` | `so.st7` | `"yes"` | 15 |
| `[SE: VALIDACAO_RAMPA]` | — (campo `st8` removido v4.0) | — | 15 — ativar somente se informado em texto |
| `[SE: MULTIREAD]` | `so.st11` | `"yes"` | 17 |
| `[SE: RECIRCULACAO]` | `so.st_rc` | `"yes"` | 17 — ⚠️ Era `st_recirc` |
| `[SE: MULTIREAD_RECIRCULACAO]` | `so.st11="yes"` + `so.st_rc="yes"` | ambos | 17 — ⚠️ Era `st_recirc` |
| `[SE: PTL]` | `pt.pt1` | `"ptl_opt"` | 5, 7.1, 18 — ⚠️ Era `pt1="yes"` + `pt2="ptl_hw"` |
| `[SE: PTM]` | `pt.pt1="ptm_opt"` ou `pt.pt_ptm="yes"` | — | 18 — ⚠️ Era `pt2="ptm_hw"` |
| `[SE: ESTOQUE_SOMBRA]` | `es.es1` | `"yes"` | 22 |
| `[SE: CURVA_ABC]` | `es.es7` | `"yes"` | 22 |
| `[SE: MATRIZ_FRAGILIDADE]` | `pt.pt_frag` | `"yes"` | 22 — ⚠️ Era `es9` |
| `[SE: OCORRENCIAS]` | `es.es10` | `"yes"` | 22 |
| `[SE: INVENTARIO]` | `es.es4` | `"yes"` | 23 |
| `[SE: RECALL]` | `es.es5` | `"yes"` | 24 |
| `[SE: MOVIMENTACAO_FORCADA]` | `es.es6` | `"yes"` | 25 |
| `[SE: DEVOLUCAO_CANCELADOS]` | — (campo `sp5` removido v4.0) | — | 26 — ativar somente se informado em texto |

---

# 1. OBJETIVO DO DOCUMENTO

[BASE]
Este documento detalha as funcionalidades e regras de negócio do WCS (Warehouse Control System) para o projeto {{CODIGO_PROJETO}} – {{NOME_PROJETO}}, desenvolvido para {{CLIENTE}}. O WCS Velox é o sistema responsável por controlar a automação do Centro de Distribuição localizado em {{LOCAL_CD}}, conectando o sistema de gestão do cliente ({{SISTEMA_CLIENTE}}) aos equipamentos físicos do armazém (sensores, leitores, displays e balanças). Este documento serve como base técnica para o desenvolvimento do software, aquisição de hardware e alinhamento entre as equipes de Invent, cliente e implantação.

---

# 2. ESPECIFICAÇÃO TÉCNICA

[BASE]
O WCS Velox é uma aplicação que opera continuamente, processando em tempo real as informações dos volumes em movimento no armazém. Sua função principal é traduzir as ordens do {{SISTEMA_CLIENTE}} em comandos para os equipamentos físicos — e retornar os resultados (o que foi separado, o que foi cortado, o que divergiu) de volta ao sistema do cliente.

O sistema requer um banco de dados relacional dedicado para armazenar e rastrear todas as operações. O ambiente será provisionado pelo cliente com servidor {{SO_SERVIDOR}}, banco de dados {{BD_SERVIDOR}} com especificações de {{SPECS_SERVIDOR}}, e {{QTD_WORKSTATIONS}} terminais de operação distribuídos no chão de fábrica. O acesso ao WCS é feito via navegador Google Chrome — único homologado para garantia de funcionamento correto de todas as telas.

> **[OBS INTERNA]:** Variáveis de servidor (`{{SO_SERVIDOR}}`, `{{BD_SERVIDOR}}`, `{{SPECS_SERVIDOR}}`, `{{QTD_WORKSTATIONS}}`) vêm dos campos `if1`, `if2`, `if7`, `if5` do JSON. Campos `if3`–`if14` (rede, firewall, SSL, etc.) não aparecem no documento gerado.

---

# 3. ETAPAS DA ES

[BASE]
A Especificação de Software (ES) passa pelas seguintes etapas antes de autorizar o início do desenvolvimento:

| Criação | Apresentação | Envio | Aprovação |
|---|---|---|---|
| **Invent** elabora o documento técnico. | **Invent** apresenta ao cliente para alinhamento. | **Invent** envia o documento final formalmente. | **Cliente** aprova, autorizando desenvolvimento e compra de hardware. |

---

# 4. STAKEHOLDERS

[BASE]
| Participante | Função | Empresa |
|---|---|---|
| {{STAKEHOLDER_1}} | {{FUNCAO_1}} | {{EMPRESA_1}} |
| {{STAKEHOLDER_2}} | {{FUNCAO_2}} | {{EMPRESA_2}} |

---

# 5. LEGENDA

[BASE]
| Sigla / Termo | Descrição |
|---|---|
| WCS | Warehouse Control System — sistema que controla a automação do armazém |
| Velox | Nome do sistema WCS da Invent |
| {{SISTEMA_CLIENTE}} | Sistema de gestão do cliente (WMS/ERP) que envia e recebe as ordens de separação |
| LPN | License Plate Number — código único de cada caixa ou volume em trânsito |
| Full Case | Volume fechado, separado inteiro sem abertura de caixa |
| Shortpicking | Situação em que o operador não consegue separar a quantidade total solicitada por falta de produto |
| Order Start | Etapa de início da separação — onde cada caixa é vinculada a um pedido no sistema |

[SE: SORTER]
| Sorter | Equipamento de classificação automática que lê e direciona volumes para as rampas de destino |
| Chute / Rampa | Saída física do Sorter onde os volumes são depositados por destino |

[SE: PTL]
| PTL | Put-to-Light — sistema de displays luminosos que guia o operador na alocação de volumes no pallet |

---

# MÉTODOS DE AUTENTICAÇÃO

[BASE]
Todas as integrações entre o {{SISTEMA_CLIENTE}} e o WCS Velox utilizam autenticação via **Bearer Token (JWT)**. Antes de realizar qualquer chamada às APIs de integração, o sistema deve obter um token de acesso através do endpoint de autenticação da Invent.

**Obter Token de Acesso**

Endpoint: `POST /integracao/api/prod/autenticacao`

Envie as credenciais utilizando Basic Authentication para receber o token de acesso.

**Headers obrigatórios:**

| Header | Valor |
|---|---|
| `Content-Type` | `application/json` |
| `Authorization` | `Basic <credenciais_em_base64>` |

**Como montar o header Authorization:**
1. Combine usuário e senha: `usuario:senha`
2. Codifique em Base64 — ex.: `dXN1YXJpbzpzZW5oYQ==`
3. Adicione o prefixo: `Basic dXN1YXJpbzpzZW5oYQ==`

**Resposta de sucesso:**
```json
{
  "mensagem": "Autenticação realizada com sucesso.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Usar o token nas requisições:** após obter o token, inclua-o no header `Authorization` de todas as chamadas subsequentes:

`Authorization: Bearer <seu_token_aqui>`

**Exemplos Práticos**

*JavaScript:*
```js
const credenciais = btoa('meuusuario:minhasenha');
const response = await fetch('/integracao/api/hml/autenticacao', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credenciais}`
  }
});
const { token } = await response.json();

// Usar token nas outras requisições:
const apiResponse = await fetch('/integracao/api/hml/outros-endpoints', {
  method: 'GET',
  headers: { 'Authorization': `Bearer ${token}` }
});
```

*cURL:*
```bash
# 1. Obter token
curl -X POST "/integracao/api/hml/autenticacao" \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic bWV1dXN1YXJpbzptaW5oYXNlbmhh"

# 2. Usar token
curl -X GET "/integracao/api/hml/outros-endpoints" \
  -H "Authorization: Bearer <seu_token_aqui>"
```

*Python:*
```python
import requests, base64

# 1. Autenticar
credenciais = base64.b64encode(b'meuusuario:minhasenha').decode()
response = requests.post('/integracao/api/hml/autenticacao',
    headers={'Content-Type': 'application/json', 'Authorization': f'Basic {credenciais}'})
token = response.json()['token']

# 2. Usar token
api_response = requests.get('/integracao/api/hml/outros-endpoints',
    headers={'Authorization': f'Bearer {token}'})
```

**Possíveis Erros:**

| Status | Mensagem | Causa |
|---|---|---|
| 403 | Autenticação básica é obrigatória. | Header `Authorization` ausente ou inválido |
| 403 | Usuário ou senha inválidos. | Credenciais incorretas |
| 400 | Erro ao processar a autenticação. | Erro interno do servidor |

**Resumo do Fluxo:**
1. **Autenticar:** `POST /autenticacao` com Basic Auth → receber token
2. **Usar:** `Authorization: Bearer <token>` em todas as requisições seguintes

> [OBS INTERNA] O token expira em **24h**. As credenciais de PRD e HML são distintas — confirmar com o cliente/TI as credenciais de cada ambiente antes do início da integração.

---

# 6. INTEGRAÇÕES

[BASE]
O WCS e o {{SISTEMA_CLIENTE}} se comunicam de forma bidirecional e contínua. O protocolo de integração utilizado é {{PROTOCOLO_INTEGRACAO}}, com timeout máximo de {{TIMEOUT_INTEGRACAO}} ms por chamada. O desenvolvimento e manutenção da integração são de responsabilidade de {{RESPONSAVEL_INTEGRACAO}}.

O fluxo principal funciona da seguinte forma: o {{SISTEMA_CLIENTE}} envia ao WCS as ordens de separação com todos os dados do pedido (itens, quantidades, destino, transportadora). O WCS processa essas ordens, coordena a separação no chão de fábrica e, ao finalizar cada volume, retorna ao {{SISTEMA_CLIENTE}} o resultado — confirmando o que foi separado ou sinalizando divergências (cortes ou shortpicking) para que o estoque seja atualizado.

> **[OBS INTERNA]:** `{{PROTOCOLO_INTEGRACAO}}` = `in1` (`rest` → API REST / `mq` → Mensageria / `file_int` → Arquivo XML/CSV). `{{RESPONSAVEL_INTEGRACAO}}` = `in2`. `{{TIMEOUT_INTEGRACAO}}` = `in3`.

[BASE]
**Quadro-resumo das integrações.** Gerar uma tabela com todas as integrações ativas do projeto:

| Nº | Nome da integração | Sentido da comunicação | Observações |
|---|---|---|---|
| 1 | (nome) | Sistema A → Sistema B | (gatilho/obs) |

[MOLDE_SUBINTEGRACAO]
Para CADA integração ativa do projeto, gerar uma subseção (6.1, 6.2, …) seguindo
EXATAMENTE este molde — descrição + tabela de campos + bloco JSON:

#### 6.N {{NOME_INTEGRACAO}}
**Direção:** {{SISTEMA_A}} → {{SISTEMA_B}}

{{DESCRICAO_FUNCIONAL_DA_INTEGRACAO}} O disparo ocorre quando {{CONDICAO_DE_DISPARO}}.

| Campo | Tipo | Obrigatório | Exemplo | Descrição |
|---|---|---|---|---|
| (campo) | string/number/boolean | Sim/Não | (exemplo) | (descrição do campo) |

```json
{
  "campo": "valor"
}
```

> **[OBS INTERNA]:** As integrações reais (nomes, campos e exemplos JSON) vêm do
> kickoff/JSON do projeto e da Entrevista Cirúrgica. Se não houver dado de campo,
> gerar a subseção com a descrição e o quadro-resumo e marcar a tabela de campos
> como `[A DEFINIR]` — nunca omitir a estrutura (Direção + tabela + JSON).

---

# 7. CUBAGEM

[BASE]
A cubagem é o processo de calcular qual caixa usar para cada pedido, com base no volume e peso dos itens. Esse cálculo garante que a caixa escolhida seja adequada — sem espaço excessivo desperdiçado e sem risco de exceder o limite físico da embalagem.

[SE: CUBAGEM_WCS]
Neste projeto, o WCS é responsável pelo cálculo de cubagem. Ao receber o pedido do {{SISTEMA_CLIENTE}}, o sistema calcula o volume total dos itens e seleciona automaticamente o tipo de embalagem mais adequado ({{TIPO_EMBALAGEM}}), com base nas dimensões cadastradas de cada produto. O parâmetro de ocupação máxima configurado é de {{DIMENSAO_MAX_CUBAGEM}} — quando esse limite é atingido, o WCS divide o pedido em mais de uma caixa automaticamente.

[SE: CUBAGEM_WMS]
Neste projeto, a cubagem é calculada pelo {{SISTEMA_CLIENTE}}. O WCS recebe os pedidos já com a embalagem definida e o LPN atribuído, e passa a controlar apenas o fluxo físico do volume na linha a partir da primeira leitura.

## 7.1 Cubagem de Pallet [SE: PTL]
[BASE]
Para garantir que os pallets montados na expedição não excedam os limites físicos suportados, o supervisor parametriza no WCS o peso máximo (até {{PESO_MAX_PALLET}} kg) e a altura máxima permitida por pallet. Durante a alocação no PTL, o WCS monitora o acúmulo de caixas em tempo real e aciona o fechamento do pallet automaticamente quando os limites de peso, volume ou quantidade de volumes são atingidos. Um alerta visual é exibido aos operadores quando o pallet estiver próximo do limite — configurado com uma margem de segurança de {{CUBAGEM_SEGURANCA_PALLET}}%.

---

# 8. ORDER START

[BASE]
O Order Start é a etapa em que cada caixa física é vinculada a um pedido no sistema. É aqui que o volume "nasce" no WCS: a partir desse momento, ele passa a ser rastreado em todo o percurso até a expedição. O operador faz login na estação para que todas as ações fiquem registradas com seu usuário e horário.

Antes de liberar uma caixa para a linha, o WCS verifica automaticamente se há saldo suficiente nas posições de picking para atender ao pedido. Se não houver, a caixa não é liberada — evitando que ela percorra toda a linha sem conseguir ser atendida.

> **[NOTA DE INTERDEPENDÊNCIA]:** Em projetos com Sorter e recirculação, volumes Full Case com indução direta não passam pelo Order Start — eles entram no WCS somente no momento em que são lidos pelo portal do Sorter pela primeira vez.

## 8.1 Order Start Fracionado (FlowRack) [SE: PICKING_PBL]
[BASE]
O Order Start do FlowRack conta com {{QTD_ORDER_START}} postos físicos de vinculação. O operador posiciona cada caixa no scanner da estação, que faz a leitura e vincula a caixa ao próximo pedido disponível na fila. O código de identificação gerado para a caixa segue o prefixo {{PREFIXO_LPN}}.

[SE: CAIXA_PLASTICA]
As caixas utilizadas são totes plásticos reutilizáveis com placa de código de barras permanente. O scanner lê essa placa e vincula o tote ao pedido automaticamente. Nenhum item pode ser induzido solto na esteira — sempre dentro do tote.

[SE: CAIXA_PAPELAO]
As caixas utilizadas são de papelão descartável. O WCS comanda a impressão de uma etiqueta (dimensões {{DIMENSAO_ETIQUETA_OS}}) na impressora da estação — {{RESP_HW_IMPRESSORA_OS}}. O operador cola a etiqueta na caixa e a bipa no scanner para ativar o vínculo com o pedido.

## 8.2 Order Start Picking Cart [SE: PICKING_CART]
[BASE]
No Picking Cart, o Order Start acontece no próprio carrinho antes de o operador iniciar a separação. O processo é:

1. O operador faz login no PDV acoplado ao carrinho — {{RESP_HW_PDV_CART}}.
2. O sistema exibe a tela de mapeamento de posições.
3. Para cada slot do carrinho (total de {{QTD_POSICOES_PICKING_CART}} posições), o operador bipa a caixa e depois bipa o código do slot correspondente, criando o vínculo entre "qual caixa está em qual posição".
4. Após vincular todas as posições, o operador aciona "Finalizar Mapeamento".
5. O sistema libera as tarefas de separação para aquele carrinho.

[SE: ORDER_START_WMS]
> **[OBS INTERNA]:** Neste projeto, o {{SISTEMA_CLIENTE}} controla o Order Start do carrinho. O WCS recebe os lotes de separação já processados, com as caixas pré-identificadas, e atua apenas como guia de rota para o operador.

## 8.3 Order Start Full Case [SE: PICKING_FULLCASE]
[BASE]
O Order Start Full Case é feito em um posto de gestão central (desktop). O operador seleciona a rua ou setor a separar e o WCS gera e imprime em lote as etiquetas Master nas {{QTD_IMPRESSORAS_FULLCASE}} impressoras dedicadas ao setor — {{RESP_HW_IMPRESSORA_FC}}. O operador precisa ter as etiquetas em mãos antes de ir aos corredores, garantindo continuidade na separação sem precisar retornar ao terminal.

---

# 9. PICKING

[BASE]
O picking é a etapa em que os itens são fisicamente coletados das posições de armazenagem e alocados nas caixas dos pedidos. O WCS coordena essa etapa indicando ao operador exatamente onde ir, o que coletar e em qual quantidade — garantindo acuracidade e rastreabilidade de cada item separado.

## 9.1 Picking PBL / FlowRack [SE: PICKING_PBL]
[BASE]
O FlowRack é dividido em {{QTD_ESTACOES_PBL}} estações de picking, cada uma com {{QTD_POSTOS_POR_ESTACAO}} postos de trabalho. Cada estação tem {{QTD_POSICOES_FRENTE}} posições frontais e {{QTD_POSICOES_COSTAS}} posições traseiras (reserva ou pulmão).

Quando uma caixa chega à estação pela esteira (velocidade de {{VELOCIDADE_ESTEIRA}} m/s) e tem itens a coletar naquela zona, o WCS desvia a caixa para a bancada do operador e acende os displays luminosos (PBL — Pick-by-Light) nas posições que precisam ser atendidas. Cada display mostra a quantidade a coletar em um visor de {{QTD_DIGITOS_LED_FRENTE}} dígitos.

Após coletar todos os itens da estação, o display central muda para a cor {{COR_LED_FINALIZACAO}}, sinalizando que a zona foi concluída. O operador empurra a caixa de volta para a esteira.

[SE: BIPAGEM_OBRIGATORIA]
Neste projeto, a bipagem do código de barras do produto é obrigatória a cada coleta. O operador usa um scanner para ler o EAN/DUN de cada item retirado do canal antes de confirmar no display. O WCS valida o código contra o cadastro do pedido — apenas após a confirmação positiva o LED libera a coleta.

[SE: BIPAGEM_DESATIVADA]
Neste projeto, a confirmação da coleta é feita apenas pelo botão do display PBL, sem leitura de código de barras. O operador coleta a quantidade indicada e pressiona o botão para confirmar. A validação de acuracidade é feita pela balança na etapa de conferência.

[SE: PICKING_FULLCASE_COSTAS]
Quando um pedido requer itens armazenados nas posições traseiras (pallet de reserva atrás do operador), o WCS acende os displays frontais na cor {{COR_LED_FRENTE_COSTAS}} para alertar o operador. O display traseiro instalado na viga indica a quantidade a coletar, com visor de {{QTD_DIGITOS_LED_COSTAS}} dígitos.

[SE: VALIDACAO_LOTE]
Além do código do produto, o WCS valida também o lote do item coletado. Após a bipagem do EAN, o sistema consulta o lote vinculado à ordem e compara com o lote do item lido. A coleta só é confirmada se os lotes coincidirem. Em caso de divergência, o sistema bloqueia a confirmação e alerta o operador para localizar o item com o lote correto ou acionar a supervisão.

[SE: PEDE_CAIXA]
Quando a caixa atual não comporta todos os itens do pedido (por volume ou peso), o operador pode acionar o comando "Pede Caixa" no terminal da estação. O WCS encerra a caixa atual com os itens já coletados e cria uma nova caixa complementar com os itens restantes, que retorna à linha com prioridade máxima para ser atendida na mesma estação.

## 9.2 Picking Cart [SE: PICKING_CART]
[BASE]
O Picking Cart é um carrinho de separação móvel utilizado para atender produtos de menor giro, que não estão no FlowRack automatizado. Um operador empurra o carrinho pelos corredores do armazém, coletando itens de acordo com o roteiro indicado no PDV acoplado ao carrinho — {{RESP_HW_PDV_CART}}. O leitor de código de barras utilizado é {{RESP_HW_LEITOR_CART}}.

**Fluxo de separação:**

1. Após o mapeamento (descrito na seção 8.2), o operador inicia o roteiro de separação.
2. O PDV exibe a lista de endereços a visitar, ordenada por prioridade definida na integração. A prioridade pode ser ajustada pelo supervisor diretamente no WCS, se necessário.
3. Para cada endereço, o sistema exibe:
   - Posição (endereço de picking)
   - Código e nome do produto
   - Lote (quando aplicável)
   - Quantidade e unidade de medida a coletar

4. Ao chegar ao endereço, o operador bipa o código da posição (fixado na prateleira ou no piso) para confirmar que está no local correto.

5. O sistema exibe a quantidade a coletar e indica para qual slot do carrinho o item deve ir.

6. **Quando um mesmo item precisa ir para múltiplos slots:** o sistema lista todos os slots e volumes associados. O operador bipa o código do slot antes de depositar cada item, garantindo que o produto vai para a caixa certa.

7. Após alocar todos os itens daquele endereço, o operador bipa novamente o código do slot para confirmar a conclusão. O endereço é marcado em verde no PDV.

8. O ciclo se repete para todos os endereços do roteiro.

9. Ao concluir todos os endereços, o sistema notifica o operador e indica que as caixas devem ser levadas ao Order Start do FlowRack para continuidade do processo.

10. O operador pode repetir o processo com um novo mapeamento até que todas as tarefas de Picking Cart sejam concluídas.

**Itens com múltiplas posições de armazenagem:**

[SE: PICKING_CART]
Quando um item/lote está armazenado em mais de uma posição simultaneamente, o WCS identifica todas as posições disponíveis e distribui a coleta entre elas para atender à quantidade total do pedido. O sistema indica ao operador quantos itens coletar em cada posição.

## 9.3 Picking Full Case [SE: PICKING_FULLCASE]
[BASE]
O Full Case é a separação de caixas fechadas, sem abertura ou fracionamento. O operador utiliza um coletor de dados RF (Android) — {{RESP_HW_COLETOR_FC}} — e percorre os {{QTD_RUAS_FULLCASE}} corredores dedicados a esse tipo de separação.

A coleta é validada em três etapas:
1. O operador bipa o código da posição (fixado no piso ou na longarina) para confirmar que está no corredor correto.
2. Bipa a etiqueta Master da coleta que está em sua posse, chamando o contexto do pedido.
3. Bipa o código da caixa fechada a ser coletada (DUN14 ou EAN da embalagem).

Somente com as três leituras validadas a coleta é registrada no sistema. Se o pallet estiver zerado antes de completar o romaneio, o operador aciona "Finalizar Coleta Parcial" no coletor — os itens não coletados são registrados como corte.

## 9.4 Picking Exceção [SE: PICKING_EXCECAO]
[BASE]
Alguns produtos não podem transitar pela linha automatizada por razões de dimensão (acima de {{DIMENSAO_MAX_SEPARACAO}} mm), peso (acima de {{PESO_MAX_LINHA}} kg) ou características físicas (líquidos com risco de vazamento, itens frágeis de grande porte, linha branca). Esses itens são identificados no sistema com a flag de "exceção" e são excluídos do fluxo normal.

O WCS gera listas de separação específicas para esses itens. A coleta é feita em paralelo à operação principal, com empilhadeiras ou transpaleteiras que levam os volumes diretamente às docas de destino. A unificação com os demais itens do pedido é feita no momento da emissão do manifesto de transporte, via integração com o {{SISTEMA_CLIENTE}}.

## 9.5 Picking AMR [SE: AMR]
[BASE]
Neste projeto, parte das zonas de picking conta com Robôs Móveis Autônomos (AMR) integrados ao WCS. O sistema distribui as missões de separação entre os robôs disponíveis, levando em conta a ocupação de cada unidade, a proximidade do endereço e a prioridade da onda.

Os AMRs transportam os totes ou racks de picking até as estações de separação, onde o operador aguarda e realiza a coleta — sem precisar se deslocar pelos corredores. O WCS gerencia o tráfego da frota em tempo real para evitar colisões e otimizar os percursos. A comunicação entre o WCS e o sistema de controle dos AMRs é feita via {{PROTOCOLO_INTEGRACAO}}.

> **[OBS INTERNA]:** Projetos com AMR exigem especificação complementar detalhando o middleware do fabricante (ex: MiR Fleet, Fetch Robotics) e o protocolo de handshake de missões.

---

# 10. SHORTPICKING (CORTE)

[BASE]
O shortpicking ocorre quando o operador chega a uma posição e não encontra o produto — ou a quantidade disponível é menor do que o pedido requer. O WCS oferece um mecanismo rápido para registrar essa divergência sem travar a operação.

[SE: APROVACAO_CORTE]
Neste projeto, todo corte requer aprovação de um supervisor antes de ser efetivado. Ao declarar o corte, o sistema suspende a caixa em estado pendente e emite um alerta no painel de supervisão. O supervisor precisa autenticar a aprovação (via passkey ou login presencial). Somente após a aprovação o WCS registra o corte, notifica o {{SISTEMA_CLIENTE}} e libera o volume. Cortes não aprovados dentro do tempo limite voltam para a fila de pendências e geram registro de auditoria.

[SE: MOTIVO_CORTE]
O operador deve informar o motivo do corte antes de confirmar. O sistema exibe uma lista de motivos pré-cadastrados (ex: "Canal zerado", "Produto avariado", "Divergência de lote", "Produto não localizado"). O motivo escolhido fica registrado na missão e aparece nos relatórios de shortpicking.

## 10.1 Corte via LED (PBL) [SE: PICKING_PBL]
[BASE]
Quando o operador constata que não há produto suficiente no canal:

1. **Acionamento:** O operador pressiona e segura o botão do módulo PBL por {{TEMPO_ACIONAMENTO_CORTE}} segundos. O display entra em modo de corte.
2. **Ajuste de quantidade:** O operador usa os botões (+/-) para ajustar o display até o número real de unidades que conseguiu coletar (pode ser zero).
3. **Confirmação:** O operador pressiona o botão central para confirmar.
4. **Consequências:**
   - O WCS registra a divergência e notifica o {{SISTEMA_CLIENTE}} com a quantidade efetivamente coletada.
   - O {{SISTEMA_CLIENTE}} decide se gera uma nova onda para o saldo restante ou fatura apenas o que foi atendido.
   - A caixa é marcada como "Divergente" e encaminhada obrigatoriamente para uma estação de Conferência ao final da linha.
   - Uma tarefa de auditoria é gerada automaticamente para a posição com divergência.

## 10.2 Corte via PDV (Cart) [SE: PICKING_CART]
[BASE]
Quando o operador do Picking Cart encontra ruptura no endereço:

1. **Acionamento:** O operador toca no botão "Ajuste/Corte" na tela do PDV.
2. **Ajuste de quantidade:** O operador digita a quantidade real coletada (pode ser zero).
3. **Validação:** O operador bipa o código do slot da caixa no carrinho para confirmar a qual volume o corte se aplica.
4. **Confirmação:** O sistema registra o corte vinculado ao volume correto, sem afetar os demais volumes em separação no mesmo carrinho.
5. **Consequências:** Mesmas do corte via LED — notificação ao {{SISTEMA_CLIENTE}} e geração de tarefa de auditoria.

## 10.3 Corte via Coletor (Full Case) [SE: PICKING_FULLCASE]
[BASE]
Quando o operador aciona "Finalizar Coleta Parcial" no coletor por falta de produto no pallet:

1. O coletor entra em modo de auditoria reversa.
2. O operador bipa sequencialmente todas as etiquetas Master que não puderam ser coladas (itens não coletados).
3. O WCS invalida essas etiquetas e registra os itens como corte.
4. O {{SISTEMA_CLIENTE}} é notificado com a baixa de estoque na posição informada.

---

# 11. CONFERÊNCIA

[BASE]
A Conferência é a etapa de validação da separação antes de o volume seguir para a expedição. O WCS encaminha automaticamente para as estações de conferência qualquer volume que tenha passado por corte de shortpicking, reprovado na balança dinâmica ou sido selecionado por amostragem. Nas estações de conferência, o sistema bloqueia a liberação do volume enquanto a divergência não for resolvida pelo conferente.

## 11.1 Validação por Peso (Balança) [SE: BALANCA]
[BASE]
Todos os volumes em trânsito na esteira passam por uma balança dinâmica instalada na linha. A balança captura o peso real da caixa e compara com o peso esperado — calculado com base no peso cadastrado de cada item do pedido, somado ao peso da embalagem. Uma tolerância de {{TOLERANCIA_PESO}} é aplicada para evitar rejeições por variações mínimas do fornecedor.

Se o peso estiver dentro da tolerância, a caixa segue para o Sorter. Se o peso estiver fora da faixa, a caixa é desviada automaticamente para a área de conferência manual.

## 11.2 Conferência Cega [SE: CONFERENCIA_CEGA]
[BASE]
A Conferência Cega é realizada em {{QTD_ESTACOES_CONFERENCIA}} estações físicas equipadas com monitor, teclado e scanner. O processo funciona da seguinte forma:

1. O conferente bipa o LPN da caixa na estação.
2. O sistema **não exibe** o conteúdo esperado da caixa — o conferente não sabe o que deveria estar lá.
3. O conferente esvazia a caixa e bipa o código de barras de cada item encontrado, alocando-os em uma bandeja separada para evitar dupla contagem.
4. Ao finalizar, o sistema compara o que foi lido com o que estava registrado no pedido.
   - **Se bater:** a caixa recebe liberação e segue para a expedição.
   - **Se divergir (item faltando, item a mais, produto errado):** o sistema trava a liberação com alerta vermelho e exige autenticação do supervisor para arbitrar e registrar a ocorrência.

## 11.3 Conferência Item a Item [SE: CONFERENCIA_ITEM]
[BASE]
A Conferência Item a Item é realizada em {{QTD_ESTACOES_CONFERENCIA}} estações físicas. Nesta modalidade, o sistema exibe o conteúdo completo esperado da caixa: thumbnail do produto, nome, código, lote e quantidade. O conferente bipa cada item encontrado na caixa e o sistema marca como conferido (amarelo → verde). Ideal para operações onde a velocidade de resolução é prioritária e o risco de fraude é baixo.

## 11.4 Conferência por Amostragem [SE: CONFERENCIA_AMOSTRAGEM]
[BASE]
Neste projeto, nem todos os volumes são conferidos — apenas uma amostra definida pelo gestor. O WCS seleciona aleatoriamente uma fração dos volumes para desvio às estações de conferência. O percentual de amostragem é configurável por perfil de operação (horário de pico, transportadora crítica, SKU de alto valor) e pode ser ajustado em tempo real pelo supervisor sem parar a linha. Os demais volumes seguem direto para o Sorter após a balança. Todos os volumes auditados, seus resultados e o conferente responsável são registrados em log para rastreabilidade.

---

# 12. PACKING [SE: PACKING]
[BASE]
O Packing é a etapa de embalagem final do pedido, realizada em {{QTD_ESTACOES_PACKING}} estações dedicadas. O operador transfere os itens já conferidos do tote de separação para a caixa de embarque final. Após embalar os itens com o material de proteção adequado (almofadas de ar, manta bolha ou kraft sanfonado), o operador sela a caixa e bipa o LPN na face superior. Nesse momento, o WCS comanda a impressão automática da etiqueta de roteirização final (formato ZPL) na impressora da estação. Com a etiqueta colada, a caixa é reinserida na esteira e segue para o Sorter.

[SE: TROCA_CAIXA_PACKING]
Neste projeto, o tote plástico utilizado na separação é substituído por uma caixa de papelão descartável no Packing. O operador transpõe os itens do tote para a caixa, embala, sela e cola a etiqueta impressa pelo WCS. O tote vazio é depositado na esteira de retorno ou área de acúmulo para ser reutilizado no Order Start. O WCS controla o saldo de totes em circulação e emite alerta se o volume de retornos estiver abaixo do esperado.

---

# 13. CANCELAMENTO DE PEDIDOS
[BASE]
O WCS monitora continuamente as mensagens de cancelamento enviadas pelo {{SISTEMA_CLIENTE}}. Quando um cancelamento chega, o comportamento depende do estágio do pedido na linha:

- **Pedido ainda não iniciado:** O WCS remove o pedido da fila e nenhuma ação física é necessária.
- **Pedido já em separação (caixa na esteira):** O WCS apaga os comandos de picking pendentes para aquela caixa em todas as estações, impede que qualquer LED acenda para ela e marca o LPN para rejeito. A caixa percorre a linha normalmente mas é desviada para a rampa de rejeito/hospital, sem ser expedida.

---

# 14. REABASTECIMENTO
[BASE]
O reabastecimento garante que as posições de picking nunca fiquem zeradas durante a operação. Quando o saldo de um canal cai abaixo do mínimo configurado, o sistema aciona o processo de reposição antes que a posição esvazie completamente.

[SE: REABASTECIMENTO_WCS]
Neste projeto, o WCS monitora o saldo das posições de picking em tempo real. Quando o saldo de um canal cai abaixo do mínimo configurado, o sistema gera automaticamente uma tarefa de reabastecimento para o operador de empilhadeira. A tarefa indica a origem (posição de reserva no andar superior) e o destino (canal do FlowRack a repor). O operador confirma a coleta e a entrega via bipagem nas duas pontas, e o WCS atualiza o saldo imediatamente.

[SE: REABASTECIMENTO_WMS]
Neste projeto, o controle de reabastecimento é feito pelo {{SISTEMA_CLIENTE}}. O WCS recebe a tarefa de reposição já processada e coordena apenas o fluxo físico — desviando a caixa de reposição para a rampa ou posição de destino indicada.

## 14.1 Reabastecimento via Ciclo da Rampa [SE: REAB_CICLO_RAMPA]
[BASE]
Neste projeto, as caixas de reposição são induzidas diretamente na esteira de separação junto com os volumes de pedido normais. O Sorter identifica essas caixas e as desvia para uma rampa de reabastecimento dedicada — em vez de enviá-las para as rampas de expedição. Quando as caixas chegam à rampa, os displays PTL das posições de FlowRack correspondentes acendem na cor {{COR_REABASTECIMENTO}}, indicando ao operador onde abastecer. O operador abre a caixa, alimenta o canal e confirma o reabastecimento pressionando o botão do display.

---

# 15. SORTER

[BASE]
O Sorter é o equipamento de classificação automática responsável por direcionar cada volume para a rampa de destino correta, de acordo com a transportadora ou rota cadastrada. O equipamento lê o código de cada volume ao passar pelo portal de leitura e comanda o desvio para a rampa correspondente. O projeto conta com {{QTD_RAMPAS_SORTER}} rampas de saída, {{QTD_INDUCOES_SORTER}} ponto(s) de indução e {{QTD_PORTAIS_SORTER}} portal(is) de leitura, com capacidade de classificação de {{THROUGHPUT_SORTER}} volumes por hora.

[SE: CROSSCHECK]
Neste projeto, o Sorter realiza validação cruzada (Cross-Check) no momento da leitura: além de identificar o código do volume, o sistema consulta a base de pedidos para confirmar que o lote e os dados do produto pertencem a uma venda ativa e em andamento. Se a validação falhar, o volume é direcionado para a rampa de rejeito em vez de seguir para o destino.

[SE: VALIDACAO_RAMPA]
Neste projeto, os operadores nas rampas de saída realizam uma leitura manual de cada volume ao descarregá-lo da rampa. O WCS exibe no terminal da doca se o volume está na rampa correta (luz verde) ou se houve erro de destinação (luz vermelha com alarme sonoro).

---

# 16. MAPA DO SORTER [SE: SORTER]
[BASE]
O Mapa do Sorter é a interface de configuração das rampas, acessada pela supervisão ou pela equipe técnica. Nela é possível visualizar todas as rampas em operação, vincular rotas e transportadoras a cada rampa, bloquear ou liberar rampas individualmente e reagrupar destinos em tempo real durante picos de operação — sem precisar parar a esteira. Alterações no mapa têm efeito imediato no comportamento do Sorter.

---

# 17. REJEITO DO SORTER [SE: SORTER]
[BASE]
A rampa de rejeito recebe os volumes que não puderam ser classificados e direcionados ao destino correto pelo fluxo automatizado. Esses volumes são tratados manualmente por operadores na mesa de rejeito, equipada com {{QTD_LEITORES_REJEITO}} leitores.

---

## 17.1 Tela de Tratativa do Rejeito
[BASE]

A Tela de Tratativa do Rejeito é a interface onde o operador trata manualmente cada volume desviado para a rampa de rejeito. A estação é composta por um desktop com acesso ao WCS Velox e um coletor para leitura dos volumes. O operador lê o LPN do volume na mesa de rejeito, o sistema exibe o motivo do desvio (NoRead, Sem Rota, Sem Mapa, MultiRead, Rampa Cheia, Cancelamento ou Perda de Tracking) e disponibiliza as ações de destino aplicáveis àquele motivo. Enquanto o volume não recebe um destino, ele permanece pendente no painel de rejeito.

**Fluxo do operador:**

1. O operador lê o LPN do volume no coletor (ou no scanner fixo da estação).
2. O WCS identifica o volume e exibe na tela o motivo do desvio e os dados do pedido associado.
3. O operador analisa fisicamente o volume e seleciona uma das ações de destino.
4. O WCS executa a ação, atualiza o status do LPN e dispara a integração ao {{SISTEMA_CLIENTE}}.
5. O volume sai da fila de pendências do rejeito.

**Ações de destino disponíveis:**

- **Reinduzir.** Aplicável quando o impedimento foi resolvido (etiqueta corrigida, rota/mapa cadastrados, código duplicado removido, rampa esvaziada, tracking recuperável). O operador corrige a causa e reinsere o volume no Sorter antes do portal de leitura para nova classificação. Alternativamente, conduz o volume manualmente à rampa de destino e confirma a leitura no scanner fixo, hipótese em que o WCS atualiza o status do LPN para "Na Rampa" e informa a rampa correta.

- **Devolver ao Estoque.** Aplicável a volumes de pedidos cancelados pelo {{SISTEMA_CLIENTE}} durante o trânsito. O operador lê o volume na tela, o WCS confirma o cancelamento ao {{SISTEMA_CLIENTE}} e libera os itens para reoferta no estoque disponível, conforme o protocolo do Capítulo 26 (Devolução de Cancelados). O volume não retorna ao Sorter.

- **Desmontar.** Aplicável quando o volume precisa ser aberto e seus itens reincorporados individualmente ao estoque (cancelamento com necessidade de fracionamento, avaria de embalagem, divergência irrecuperável). O operador desmonta o volume e o WCS registra o retorno dos itens ao estoque, encerrando o LPN. Cruza com o Capítulo 26.

> **[OBS INTERNA]:** A tela como objeto estruturado é uma síntese de âncoras dispersas nos projetos de referência. Definir com Engenharia Interna: layout da tela e campos exibidos, regras de permissão por ação (operador vs. supervisor), mapeamento motivo → ações permitidas e responsabilidade do hardware desktop+coletor.

---

## 17.2 Motivos de Rejeito
[BASE]

A rampa de rejeito no final do Sorter é responsável por receber volumes que se classificam em uma das seguintes 7 situações:

**1. Sem Leitura (NoRead)**

[BASE]
Ocorre quando o portal de leitura não consegue identificar o código do volume — por ausência de etiqueta, código de barras danificado, deformação da embalagem ou posicionamento inadequado da etiqueta. Nesse caso, o CLP envia a informação de "sem leitura" para o WCS, que direciona o volume para a rampa de rejeito. O volume será tratado por um operador, que, após a correção ou a adição da etiqueta, deve reinserir o volume no Sorter antes do portal de leitura. Alternativamente, o operador conduz o volume manualmente à rampa de destino correta e realiza a leitura no scanner fixo da estação.

[SE: RECIRCULACAO]
Com a esteira de recirculação ativa, o volume com NoRead é automaticamente recirculado para uma nova tentativa de leitura. Somente após esgotar o número de tentativas configurado no WCS o volume é direcionado à rampa de rejeito.

---

**2. Sem Rota**

[BASE]
Ocorre quando a câmera consegue ler o código do volume e o CLP envia a informação ao WCS, mas o sistema não encontra nenhuma rota cadastrada para aquele código na sua base de dados de destinos. Nesse caso, o volume é direcionado para o rejeito e o operador deverá cadastrar a rota no sistema, vinculando-a ao Mapa do Sorter, e reinserir o volume antes do portal de leitura. Alternativamente, conduz o volume manualmente à rampa correta e realiza a leitura no scanner fixo.

[SE: RECIRCULACAO]
Com recirculação ativa, o volume aguarda na malha enquanto o operador realiza o cadastro da rota. Após o vínculo ser criado, o volume é classificado normalmente na próxima passagem pelo portal.

---

**3. Sem Mapa**

[BASE]
Ocorre quando a leitura é realizada com sucesso e a rota existe no WCS, mas não há rampa física vinculada a essa rota no Mapa do Sorter. Nesse caso, o volume é direcionado ao rejeito e o operador deverá acessar o Mapa do Sorter, vincular a rota à rampa correta e reinserir o volume antes do portal. Alternativamente, conduz o volume manualmente à rampa e realiza a leitura no scanner fixo.

[SE: RECIRCULACAO]
Com recirculação ativa, o volume aguarda na malha enquanto o operador realiza o vínculo no mapa. Após a vinculação, o volume é classificado na próxima passagem.

---

**4. MultiRead** [SE: MULTIREAD]

[BASE]
Esse caso ocorre quando mais de um código de barras está visível para a câmera no momento da leitura, impossibilitando a identificação unívoca do volume. A câmera informa ao CLP que há múltiplos códigos lidos, e o CLP envia a mensagem de "MultiRead" para o WCS. Quando o volume chega à rampa de rejeito, o operador deve remover o código extra ou cobrir a etiqueta incorreta e reinserir o volume antes do portal de leitura. Alternativamente, conduz o volume manualmente à rampa correta e realiza a leitura no scanner fixo.

[SE: MULTIREAD_RECIRCULACAO]
Com recirculação ativa, o volume com MultiRead é recirculado automaticamente. O operador é alertado no dashboard para intervir e corrigir a caixa antes da próxima passagem pelo portal.

---

**5. Rampa Cheia**

[BASE]
Ocorre quando o processo de leitura e validação no Velox está correto, mas quando o volume chega ao desviador da rampa de destino, a rampa está cheia de caixas, acionando o sensor de acúmulo. Nesse caso, o volume é enviado para o rejeito e o sinaleiro indica essa condição na rampa afetada. O operador deve reinserir o volume no Sorter após a rampa ser esvaziada, ou conduzi-lo manualmente à rampa de destino e realizar a leitura no scanner fixo para que o volume possa ser finalizado.

> **[OBS INTERNA]:** Rampa Cheia não possui condicional `[SE: RECIRCULACAO]` — o impedimento é físico, não sistêmico.

---

**6. Cancelamento**

[BASE]
Ocorre quando o pedido associado ao volume é cancelado pelo {{SISTEMA_CLIENTE}} durante o trânsito na linha, fazendo com que o WCS identifique o LPN como cancelado e o desvie para o rejeito. O volume não deve retornar ao Sorter — o tratamento correto é o desmonte do volume e o retorno dos itens ao estoque, conforme o protocolo do Capítulo 26.

> **[OBS INTERNA]:** Cancelamento não possui condicional `[SE: RECIRCULACAO]` — é rejeito definitivo independentemente da infraestrutura.

---

**7. Perda de Tracking**

[BASE]
Ocorre quando, após a leitura no portal, há a perda da identificação do volume dentro do sistema — o CLP deixa de ter a referência da posição física do volume no Sorter. Esse tipo de falha geralmente acontece por enroscos mecânicos, volume fora das especificações de dimensão ou peso, ou falha de comunicação entre o CLP e o WCS. Nessa situação, o Sorter não consegue determinar o destino correto do volume, direcionando-o automaticamente para a rampa de rejeito. O operador deve então reinserir o volume antes do portal de leitura, ou conduzi-lo manualmente à rampa de destino com leitura no scanner fixo, para que o processo seja restabelecido.

[SE: RECIRCULACAO]
Com recirculação ativa, o volume é recirculado para tentar reestabelecer o rastreio posicional. Se o tracking for recuperado durante o percurso, o volume é classificado normalmente. Se a perda persistir, o volume vai ao rejeito para tratamento manual.

---

**Atualização de Status para "Na Rampa"**

[BASE]
Quando um volume no rejeito é corrigido e lido com sucesso no scanner fixo da estação, o WCS atualiza o status do LPN para "Na Rampa" e informa ao operador a rampa de destino correta para condução manual. A leitura no scanner fixo garante a atualização do dashboard e o envio da integração ao {{SISTEMA_CLIENTE}}.

---

# 18. PTL / ALOCAÇÃO
[BASE]
O PTL (Put-to-Light) é o processo de alocação final dos volumes nos pallets de expedição, realizado nas docas do armazém. O operador bipa cada volume que desce do Sorter e o sistema indica imediatamente onde alocá-lo — em qual pallet e em qual posição — por meio de displays luminosos ou monitor central.

O WCS monitora em tempo real o peso e o volume acumulado em cada pallet. Quando os limites parametrizados são atingidos (altura máxima de {{ALTURA_MAX_PALLET}} mm ou peso máximo de {{PESO_MAX_PALLET}} kg), o sistema encerra automaticamente o pallet, aciona os displays de alerta e comanda a impressão da etiqueta master de fechamento na impressora da doca.

[SE: PTL]
O projeto utiliza displays PTL individuais por posição de pallet — um total de {{QTD_TOTAL_PTL}} posições. O operador bipa o volume, o display da posição correta acende e indica a quantidade a alocar. Após alocar, o operador confirma no botão do display.

[SE: PTM]
O projeto utiliza um monitor central (Put-to-Monitor) instalado na doca. Ao bipar o volume, o monitor exibe em destaque a posição de pallet de destino (ex: "PALLET 04-B"), permitindo a leitura à distância sem necessidade de displays individuais por posição.

---

# 19. DASHBOARD OPERACIONAL
[BASE]
O Dashboard Operacional é uma tela de acompanhamento em tempo real do desempenho da operação, acessível via navegador em qualquer dispositivo. Ele consolida os principais indicadores do turno: taxa de indução de caixas por hora no Order Start, vazão do Sorter, alertas de gargalos nas balanças, falhas de leitura acumuladas e produtividade por estação. A liderança usa o dashboard para tomar decisões de realocação de equipe ou ajuste de prioridades sem precisar parar a operação.

> **[OBS INTERNA]:** Módulos ativos dependem dos campos `db1` (rampa), `db2` (Order Start), `db3` (produtividade). Campo `db5 = "yes"` implica rastreabilidade via SSO — mencionar no texto se ativo.

---

# 20. RELATÓRIOS
[BASE]
O WCS registra o histórico completo de todas as operações processadas — separações, cortes, leituras, pesagens e divergências. Os relatórios são exportáveis no formato {{FORMATO_EXPORTACAO}} e abrangem:

- Produtividade por operador (bipagens por estação e por turno)
- Desempenho das rampas de expedição
- Volumes processados no Sorter por período
- Ocorrências de rejeito por tipo e causa
- Histórico de pesagens com desvios identificados pela balança

---

# 21. ETIQUETAS / LAYOUTS
[BASE]
Esta seção documenta os layouts das etiquetas utilizadas na operação. O projeto conta com {{QTD_IMPRESSORAS}} impressoras térmicas — {{RESP_HW_IMPRESSORAS}} — distribuídas conforme {{DISTRIBUICAO_IMPRESSORAS}}. As etiquetas seguem dimensões de {{DIMENSAO_ETIQUETA}}, com código de barras no formato {{TIPO_CODIGO_BARRAS}}, e incluem as informações obrigatórias para crossdocking (transportadora, CEP, AWB e código de roteamento). O QR Code presente nas etiquetas contém: {{CONTEUDO_QR_CODE}}.

---

# 22. CONTROLE DE ESTOQUE DAS POSIÇÕES DE PICKING [SE: ESTOQUE_SOMBRA]
[BASE]
O WCS mantém o controle do saldo de estoque das posições de picking sob sua responsabilidade. Cada posição tem um saldo registrado no sistema, que é atualizado em tempo real a cada coleta realizada (baixa) e a cada reabastecimento executado (entrada). Esse controle permite que o WCS saiba, a qualquer momento, quantas unidades restam em cada canal — e tome decisões automatizadas de reabastecimento antes que a posição esvazie.

## 22.1 Sugestão de Alocação por Curva ABC [SE: CURVA_ABC]

O WCS é responsável por calcular e sugerir a alocação dos produtos nas posições de picking com base na Curva ABC de giro. O sistema analisa o histórico de **{{RANGE_CURVA_ABC}} dias** de operação, computa a quantidade de pegas realizadas por produto e classifica os itens automaticamente. Com base nessa classificação, o sistema emite uma sugestão de realocação — priorizando os produtos de maior giro nas posições mais próximas da saída. A operação recebe a sugestão, analisa e decide se a aplica integralmente ou realiza ajustes antes da execução.

**Administração PEGA**

O conceito central do módulo é a "pega": cada vez que um operador coleta uma unidade de um produto durante o picking, o WCS registra uma pega para aquele item. Ao longo do período configurado ({{RANGE_CURVA_ABC}} dias), o sistema acumula o total de pegas por produto — e essa contagem é a base do cálculo de Curva ABC.

O módulo exibe uma tela de consulta com a lista de produtos e suas respectivas quantidades de pegas no período selecionado. A tabela apresenta os campos:

| Produto | Unidade de Medida | Quantidade de PEGAS | Status da Alocação | Código do Produto | Data de Alocação |
|---|---|---|---|---|---|
| (nome do produto) | (un, cx, kg...) | (total no período) | (Alocado / Sugerido / Pendente) | (código interno) | (data da última alocação) |

> [OBS INTERNA] Confirmar com o cliente os estados possíveis de "Status da Alocação" e se há filtros disponíveis na tela por status ou por classificação de curva.

**Critérios de Classificação ABC**

Com base no volume de pegas acumulado no período, o WCS classifica cada produto em uma das três curvas:

- **Curva A** — produtos de alta rotatividade. Recebem as posições de picking mais próximas da área de saída/expedição, minimizando o deslocamento do operador e reduzindo o tempo de ciclo.
- **Curva B** — produtos de rotatividade intermediária. Alocados em posições intermediárias do armazém.
- **Curva C** — produtos de baixa rotatividade. Alocados nas posições mais distantes da saída, sem impacto significativo no tempo médio de ciclo.

> [OBS INTERNA] Verificar se o cliente possui regras adicionais de alocação que devem sobrescrever a sugestão do sistema (ex: produtos com restrição de altura de prateleira, produtos perigosos em área segregada). Confirmar se essas restrições são parametrizáveis no módulo ou tratadas manualmente.

**Sugestão e Aplicação**

O WCS gera automaticamente a sugestão de realocação com base na classificação resultante. O supervisor ou responsável operacional revisa a sugestão antes de aplicá-la: é possível ajustar posições individualmente ou aceitar o rearranjo completo. O sistema não realoca posições de forma autônoma — a aplicação exige aprovação explícita do operador.

**Relatório de Curva ABC**

O módulo disponibiliza um relatório que consolida os dados do período analisado, permitindo à gestão identificar os itens de maior saída, acompanhar a evolução da classificação ao longo do tempo e embasar decisões de rearranjo do armazém. O relatório é exportável e serve como insumo para reuniões de análise de desempenho operacional.

[SE: MATRIZ_FRAGILIDADE]
O WCS aplica regras de empilhamento baseadas na fragilidade dos produtos. Cada produto cadastrado recebe uma classificação (ex: Frágil, Resistente, Líquido). No momento da alocação no PTL, o sistema impede que volumes frágeis sejam colocados em posições inferiores do pallet onde receberão pressão de produtos mais pesados. Os displays PTL exibem alertas de restrição de posicionamento para o operador de doca.

[SE: OCORRENCIAS]
O módulo de Ocorrências permite que operadores e conferentes registrem anomalias que não se enquadram nos fluxos padrão — como avaria de embalagem, produto errado recebido do fornecedor ou divergência entre o cadastro e o produto físico. Cada ocorrência captura: LPN, SKU, tipo de anomalia (lista configurável), descrição livre, operador e horário. As ocorrências são exportáveis nos relatórios e permitem análise de recorrência por produto, zona e turno.

---

# 23. INVENTÁRIO [SE: INVENTARIO]
[BASE]
O módulo de Inventário permite auditar o saldo físico das posições de picking sem precisar parar toda a operação. A área a ser inventariada é bloqueada temporariamente para movimentações, e o operador percorre as posições com um coletor de dados, bipando cada item encontrado. Ao final, o WCS compara o saldo físico contado com o saldo registrado no sistema e apresenta as divergências para ajuste. Após aprovação, o saldo é corrigido e a área é liberada.

---

# 24. RECALL [SE: RECALL]
[BASE]
O módulo de Recall permite bloquear e localizar um produto específico em toda a operação com base em lote, LPN ou SKU — geralmente utilizado em situações de problema sanitário, jurídico ou de qualidade que exijam retirada urgente do produto. Ao ativar o Recall, o WCS bloqueia toda saída daquele item e aciona alertas em telas e displays por toda a planta, indicando as posições onde o produto está armazenado (posições de picking, pulmão, caixas em trânsito). Os analistas isolam os itens em pallets de quarentena até resolução.

---

# 25. MOVIMENTAÇÃO FORÇADA [SE: MOVIMENTACAO_FORCADA]
[BASE]
A Movimentação Forçada é um recurso de emergência disponível para administradores. Ele permite realocar manualmente o saldo de uma posição de picking para outra — sem depender de tarefas automáticas do {{SISTEMA_CLIENTE}}. É utilizado para corrigir posições mal parametrizadas ou resolver conflitos imprevistos no chão de fábrica. O operador usa um coletor RF para realizar a transferência, e o WCS atualiza o saldo imediatamente após a confirmação.

---

# 26. DEVOLUÇÃO DE CANCELADOS [SE: DEVOLUCAO_CANCELADOS]
[BASE]
Quando um pedido é cancelado pelo {{SISTEMA_CLIENTE}} após a separação já ter sido iniciada ou concluída, os volumes físicos precisam ser tratados — os itens devem retornar ao estoque e o pedido deve ser encerrado no sistema. O operador bipa os volumes cancelados (encontrados nas rampas de rejeito ou nos escaninhos da operação), e o WCS envia a confirmação de cancelamento ao {{SISTEMA_CLIENTE}}, liberando os itens para reoferta no estoque disponível.

---

# 27. APROVAÇÃO DA PROPOSTA
[BASE]
O Cliente {{NOME_CLIENTE}}, por meio de seus representantes formalmente designados, declara estar de acordo com o conteúdo técnico desta Especificação de Software — incluindo os fluxos operacionais, regras de negócio, dependências de integração, responsabilidades de hardware e arquitetura do WCS Velox documentados acima. A aprovação abaixo autoriza o início do desenvolvimento de software e a aquisição dos hardwares necessários ao projeto.

Nome: ___________________________________________________
Cargo: ___________________________________________________
Data: ____________________________________________________
Assinatura: _______________________________________________

**Razão Social:** Invent Indústria e Comércio de Equipamentos de Movimentação Ltda.