# ED_CARD — picking-pbl

**Tópico:** picking-pbl · **Bloco:** separacao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `p1 = yes` (se `no`/`tbd` → não emitir nada deste tópico)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

O PBL pode ter **N linhas**; cada linha é uma iteração independente do conjunto de variáveis abaixo. O ED deve iterar sobre todas as linhas presentes no `input_json`.

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{linha_id}}` | chave do objeto de linha | texto | identificador da linha (ex.: "Linha A", "Linha 1") |
| `{{responsabilidade}}` | `p_r` | select | `wcs`=WCS · `wms_only`=WMS · `both_wms_wcs`=Ambos |
| `{{metodo_picking}}` | `p_m` | select | `led_mode`=LED · `bar_mode`=Cód. barras |
| `{{led_tipo}}` | `p_led` | select (condicional) | `led3`=LED 3 dígitos · `led10`=LED 10 dígitos |
| `{{giro_skus}}` | `p_g` | select | `both_turn`=Todos os giros · `high_turn`=Alto giro · `med_turn`=Médio giro · `low_turn`=Baixo giro |
| `{{num_estacoes}}` | `p2` | número | número de estações por linha |
| `{{tem_pdv}}` | `p_pdv` | select | `yes`=Sim · `no`=Não |
| `{{scanner_tipo}}` | `p_sct` | select | `sc_hand`=Scanner de mão · `sc_fixed`=Scanner fixo |
| `{{bipagem_ean}}` | `p3` / `p3b` | select | `bip_yes`=Obrigatória · `bip_no`=Não · `bip_param`=Parametrizável |
| `{{posicoes_frente}}` | `p_pf` | número | posições na face frontal do FlowRack |
| `{{tem_costas}}` | `p10` | select | `yes`=Sim · `no`=Não |
| `{{posicoes_costas}}` | `p_pc` | número (condicional) | posições na face traseira (costas) |
| `{{costas_led}}` | `p10l` | select (condicional) | `yes`=Sim · `no`=Não |
| `{{costas_led_tipo}}` | `p10lt` | select (condicional) | `led3`=LED 3 dígitos · `led10`=LED 10 dígitos |
| `{{supervisor_corte}}` | `s1p` | select | `yes`=Sim · `no`=Não |
| `{{pede_caixa}}` | `s2p` | select | `yes`=Sim · `no`=Não |
| `{{motivo_corte}}` | `s3p` | select | `yes`=Sim · `no`=Não |

## Condicionais (regra → ação)

- **`p_m = led_mode`** → incluir subseção "Sinalização por LEDs" com cores (azul/verde/rosa/laranja) e tipo de display (`{{led_tipo}}`); mencionar confirmação por botão.
- **`p_m = bar_mode`** → incluir subseção "Picking por Código de Barras"; omitir seção de LEDs.
- **`p_sct = sc_hand`** → usar campo `p3` para bipagem EAN; incluir nota sobre leitura manual.
- **`p_sct = sc_fixed`** → usar campo `p3b` para bipagem EAN; mencionar scanner fixo na estação.
- **`p3` ou `p3b` = `bip_yes`** → incluir RN de bipagem EAN obrigatória na confirmação.
- **`p3` ou `p3b` = `bip_param`** → emitir warning "Bipagem EAN parametrizável — confirmar configuração com cliente".
- **`p10 = yes`** → incluir subseção "Picking nas Costas (Face Traseira)" com `{{posicoes_costas}}`; mencionar sinalização rosa no LED frontal como gatilho.
- **`p10l = yes`** (requer `p10 = yes`) → mencionar tipo de LED nas costas (`{{costas_led_tipo}}`).
- **`p_pdv = yes`** → incluir nota sobre login obrigatório no PDV do posto (RN-01) e rastreabilidade por operador.
- **`s1p = yes`** → incluir RN: corte exige aprovação de supervisor.
- **`s2p = yes`** → incluir RN: operador deve solicitar nova caixa ao iniciar a tarefa (Pede Caixa, RN-06).
- **`s3p = yes`** → incluir RN: motivo de corte/pendência é campo obrigatório (RN-08).
- **`p_g = low_turn`** → cruzar com [[shortpicking]] (baixo giro eleva ocorrência de shortpicking).
- **`p_r = wms_only`** → emitir warning "WCS não controla LEDs — apenas registra confirmações; sinalização física não é responsabilidade do WCS".
- **`p_r = both_wms_wcs`** → incluir nota de responsabilidade compartilhada; detalhar interface de integração.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Picking By Light (PBL)"
  conteudo: visão geral — separação fracionada guiada por LEDs em flow racks. A linha expressa transporta a caixa; ao chegar ao leitor da estação, se houver itens a coletar, a caixa é desviada ao posto correspondente. Responsabilidade: {{responsabilidade}}.

[nivel 2] "Configuração da Linha {{linha_id}}"
  conteudo: {{num_estacoes}} estações na linha. Perfil de giro dos SKUs: {{giro_skus}}. Posições frente do FlowRack: {{posicoes_frente}}.
  [condicional: p10 = yes] → acrescentar: "Face traseira (costas): {{posicoes_costas}} posições. LED nas costas: {{costas_led}} ({{costas_led_tipo}})."

[nivel 2] "Método de Picking e Sinalização"
  [condicional: p_m = led_mode]
    conteudo: Picking guiado por LED ({{led_tipo}}). Cores: azul = separar (display mostra quantidade), verde = concluído, rosa = há separação nas costas, laranja = pendência/sem login. Confirmação por pressão do botão da posição (apaga o LED).
  [condicional: p_m = bar_mode]
    conteudo: Picking por código de barras. Operador lê o EAN para confirmar cada coleta; sem acionamento de LED.

[nivel 2] "Dispositivos e Leitura"
  conteudo: Scanner: {{scanner_tipo}}. Bipagem EAN: {{bipagem_ean}}.
  [tipo warning, condicional: bip_param] "Bipagem EAN configurada como parametrizável — confirmar com cliente a regra ativa em produção."
  [condicional: p_pdv = yes] → acrescentar: "PDV presente no posto. Login obrigatório do operador antes de iniciar a coleta; caixa sem operador logado não inicia e LEDs acendem laranja."

[nivel 2] "Fluxo de Coleta"
  conteudo: (1) Operador loga no PDV. (2) Caixa é lida no início da linha e percorre a linha expressa. (3) No leitor da estação, o WCS verifica se há itens; havendo, desvia a caixa ao posto e acende LEDs. (4) Operador separa e pressiona o botão de cada posição. (5) Todas as posições acesas em verde → operador induz a caixa de volta à linha expressa.
  [condicional: p10 = yes] → acrescentar passo: "Quando LED frontal acende rosa, há separação nas costas; operador verifica e confirma as posições traseiras."

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]; incluir:
    - RN-01 (login obrigatório, condicional p_pdv=yes)
    - RN-02 (desvio apenas se há itens)
    - RN-03 (cores dos LEDs, condicional p_m=led_mode)
    - RN-04 (confirmação por botão, condicional p_m=led_mode)
    - RN-05 (sem validação de lote no PBL — lote validado na conferência)
    - RN-06 (Pede Caixa, condicional s2p=yes)
    - RN-07 (ShortPicking por botão "menor")
    - RN-08 (registro de pendência com motivo, condicional s3p=yes)
    - RN adicional (corte exige supervisor, condicional s1p=yes)

[nivel 2] "ShortPicking e Pendências"
  conteudo: Ao faltar produto, o operador pressiona o botão "menor" para decrementar a quantidade (ShortPicking — RN-07); o WMS gera reabastecimento. Em ruptura, o operador registra a quantidade real + endereço + motivo de pendência; o WCS envia o registro ao WMS (Tabela de Pendências). O operador não decide o corte — apenas registra.
  [condicional: s3p = yes] → "Motivo de corte/pendência é campo obrigatório."
  [condicional: s1p = yes] → "Corte exige aprovação de supervisor antes de ser efetivado."
  cruzar com: [[shortpicking]]

[nivel 2] "Integrações"
  conteudo: WMS envia pedidos cubados e quantidade/tipo de caixas; recebe confirmações de shortpicking e gera reabastecimento. WCS comanda CLPs/LEDs conforme as tarefas do operador.
```

## Notas de rastreabilidade

- Conteúdo canônico e todas as RN: `./DOSSIE.md`.
- Cruza com: [[shortpicking]], [[conferencia]], [[order-start]], [[packing]].
