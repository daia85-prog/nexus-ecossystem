# ED_CARD — picking-cart

**Tópico:** picking-cart · **Bloco:** separacao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `ct1 = yes` (se `no`/`tbd` → não emitir nada deste tópico)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{responsabilidade}}` | `ct_r` | select | `wcs`=WCS · `wms_only`=WMS · `both_wms_wcs`=Ambos |
| `{{qtd_carrinhos}}` | `ct_qc` | número | quantidade de carrinhos |
| `{{posicoes_carrinho}}` | `ct2` | número | posições (caixas) por carrinho |
| `{{dispositivo}}` | `ct_d` | select | `pdv_dev`=PDV · `col_dev`=Coletor |
| `{{forn_dispositivo}}` | `ct_df` | select | `invent`=Invent · `client`=Cliente · `both_resp`=Ambos |
| `{{destino_pos_coleta}}` | `ct6` | select | `dest_pbl`=Completa PBL · `dest_conf`=Conferência · `dest_pack`=Packing |
| `{{supervisor_corte}}` | `s1c` | select | `yes`=Sim · `no`=Não |
| `{{pede_caixa_inicio}}` | `s2c` | select | `yes`=Sim · `no`=Não |

## Condicionais (regra → ação)

- **`ct_r = wms_only`** → emitir warning "WCS responsável apenas pelo cadastro das caixas; a separação e o controle de estoque das posições de picking são de responsabilidade do WMS/cliente (RN-10). O campo `endereco` da Wave virá como 'N/A'."
- **`ct_r = both_wms_wcs`** → incluir nota sobre interface de responsabilidade compartilhada; detalhar qual etapa cada sistema controla.
- **`ct_d = pdv_dev`** → descrever fluxo de coleta com PDV: exibição de lista de endereços/SKU/qtd no PDV + LEDs azuis nas posições do carrinho para confirmação.
- **`ct_d = col_dev`** → descrever fluxo com coletor Android: leitura de endereço → EAN/DUN → confirmação por tela.
- **`ct_df = client`** → incluir nota "Dispositivo ({{dispositivo}}) fornecido pelo cliente; Invent não fornece hardware."
- **`ct_df = both_resp`** → incluir nota sobre divisão de fornecimento.
- **`ct6 = dest_pbl`** → mencionar que as caixas completas são induzidas na esteira para completar o PBL; cruzar com [[picking-pbl]].
- **`ct6 = dest_conf`** → mencionar que as caixas vão diretamente para a área de conferência após a coleta; cruzar com [[conferencia]].
- **`ct6 = dest_pack`** → mencionar que as caixas são encaminhadas ao packing; cruzar com [[packing]].
- **`s1c = yes`** → incluir RN: corte exige aprovação de supervisor antes de ser efetivado.
- **`s2c = yes`** → incluir RN: operador deve solicitar/ler a caixa ao iniciar a tarefa de picking cart.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Picking Cart"
  conteudo: separação por carrinho móvel equipado com posições (caixas), LEDs e {{dispositivo}}. O operador percorre os endereços apontados no dispositivo, alocando cada item na caixa correta do carrinho. Ao final, as caixas são encaminhadas ao destino configurado. Responsabilidade: {{responsabilidade}}.

[nivel 2] "Configuração do Carrinho"
  conteudo: {{qtd_carrinhos}} carrinhos disponíveis, cada um com {{posicoes_carrinho}} posições. Dispositivo de operação: {{dispositivo}} (fornecimento: {{forn_dispositivo}}).
  [tipo warning, condicional: ct_r = wms_only] "WCS atua apenas no cadastro das caixas; controle de endereços e estoque é responsabilidade do WMS/cliente. Campo `endereco` recebido como 'N/A'."

[nivel 2] "Mapeamento do Carrinho"
  conteudo: Antes da coleta, o operador vincula cada caixa plástica à sua posição no carrinho (mapeamento caixa ↔ posição). A finalização do mapeamento habilita a tela de coleta.
  [condicional: s2c = yes] → "Ao iniciar a tarefa, o operador deve ler/solicitar a caixa antes de avançar."

[nivel 2] "Fluxo de Coleta"
  [condicional: ct_d = pdv_dev]
    conteudo: (1) Order Start Picking Cart: operador loga e visualiza os volumes a iniciar. (2) Mapeamento. (3) PDV exibe lista de endereços/SKU/quantidade. O operador lê o endereço → lê o EAN/DUN → LEDs azuis acendem nas posições do carrinho que demandam o SKU → pressiona o LED para confirmar. (4) "Pular endereço" quando item não disponível (dispara uma integração de ressuprimento, sem bloquear). (5) Corte: registra quantidade real → caixa vai à análise de corte. (6) "Finalizar Coleta": caixas encaminhadas conforme destino ({{destino_pos_coleta}}).
  [condicional: ct_d = col_dev]
    conteudo: (1) Order Start. (2) Mapeamento. (3) Coletor exibe endereços/SKU/quantidade. O operador lê o endereço → lê EAN/DUN → confirma na tela. (4) Pular endereço → ressuprimento. (5) Corte. (6) Finalizar Coleta.
  conteudo adicional: Múltiplos volumes na mesma posição do carrinho: escanear o número da caixa antes de alocar o item (RN-09). Coleta picada (item em várias posições): o WCS distribui automaticamente (RN-06).

[nivel 2] "Destino Pós-Coleta"
  [condicional: ct6 = dest_pbl] conteudo: Caixas completas são induzidas na esteira para completar o ciclo de PBL. Ver [[picking-pbl]].
  [condicional: ct6 = dest_conf] conteudo: Caixas vão diretamente para a área de conferência. Ver [[conferencia]].
  [condicional: ct6 = dest_pack] conteudo: Caixas são encaminhadas ao packing. Ver [[packing]].
  conteudo (fixo): Caixas com pendências (corte) vão para "Análise de Corte"; caixas completas vão para "Recebimento" para indução na esteira (RN-05). Ao concluir a zona, o WCS realoca o operador para outra zona (RN-08).

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]; incluir:
    - RN-01 (coleta exige leitura de endereço → EAN/DUN → confirmação por LED/posição)
    - RN-02 (frágeis × não frágeis não misturados; conformes × inconformes em tarefas distintas)
    - RN-03 (prioridade de preenchimento da caixa; separação multi → PTW)
    - RN-04 (pular endereço: uma integração de ressuprimento, sem bloquear)
    - RN-05 (corte: caixa vai à análise de corte; posição/item bloqueada para próximas levas)
    - RN-06 (coleta picada: WCS distribui em múltiplas posições)
    - RN-08 (ao concluir zona, WCS realoca o operador)
    - RN-09 (múltiplos volumes na mesma posição: escanear número da caixa antes de alocar)
    - RN-10 (condicional ct_r=wms_only: WCS só cadastra caixas; endereco="N/A")
    - RN adicional (corte exige supervisor, condicional s1c=yes)

[nivel 2] "Integrações"
  conteudo: Integração de Pedidos (Wave) define as tarefas do Picking Cart. Integração de ressuprimento disparada ao pular endereço sem saldo. Confirmação de Picking (Picking Confirm) emitida após o ponto de decisão/conferência, não na finalização do cart.
```

## Notas de rastreabilidade

- Conteúdo canônico e todas as RN: `./DOSSIE.md`.
- Cruza com: [[picking-pbl]], [[conferencia]], [[packing]], [[order-start]], [[shortpicking]].
