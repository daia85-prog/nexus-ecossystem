# ED_CARD — conferencia

**Tópico:** conferencia · **Bloco:** conferencia · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `cf_gate = yes` (se `no`/`tbd` → não emitir nada deste tópico)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{modos_conferencia}}` | `cf_t1` | multi | `conf_blind`=Conferência cega (Blind Check) · `conf_item`=Leitura item a item · `conf_multi`=Conferência multi (consolidação) · `conf_ean`=Leitura por EAN/SKU + quantidade |
| `{{qtd_estacoes}}` | `cf2` | número | valor direto (ex.: "12 estações de conferência") |
| `{{motivos_desvio}}` | `cf_t2` | multi | `conf_weight`=Peso fora da tolerância (Check Weight) · `conf_rfid`=Detecção por antena RFID · `conf_sample`=Amostragem (sorteio de qualidade) · `conf_client`=Flag por cliente · `conf_product`=SKU divergente · `conf_100`=100% (cliente novo / obrigatório) |
| `{{tolerancia_balanca}}` | `cf4` | texto | valor direto (ex.: "±50 g") — só se `conf_weight` ativo |

## Condicionais (regra → ação)

- **`cf_t2` contém `conf_weight`** → incluir subseção *Balança / Check Weight* + RN de peso esperado (cadastro + tara) + `warning` de desvio por peso. Usar `{{tolerancia_balanca}}` se preenchido.
- **`cf_t2` contém `conf_rfid`** → incluir subseção *Portal RFID* (detecção dos itens na caixa); regra de desvio quando qtd detectada ≠ esperada.
- **`cf_t2` contém `conf_sample`** → incluir critério de amostragem + **incluir o tópico `conferencia-manual`** (auditoria por exceção) na lista de capítulos.
- **`cf_t2` contém `conf_client` / `conf_100`** → incluir RN de flag por cliente (`conferencia="Y"`) e 100% cliente novo (`cliente_novo="Y"`).
- **`cf_t2` contém `conf_product`** → referenciar [[cross-check]] (validação SKU×pedido no portal); incluir esse tópico se `st7=yes`.
- **`cf_t1` contém `conf_item`** → na tela, modo "leitura item a item" (flag no cadastro do usuário).
- **`cf_t1` contém `conf_multi`** → mencionar consolidação de volumes do mesmo pedido; considerar [[put-to-wall]].
- **`pk1 = yes`** (Packing) → NÃO duplicar packing aqui; emitir o tópico `packing` em seguida (mesma estação física, papéis distintos).
- Responsável pela conferência: se integração SAP/WMS indicar responsabilidade do WMS (ex.: Octopus), usar a variação "conferência sob responsabilidade do WMS, sem confirmação por volume" (ver DOSSIE RN-10).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Conferência"
  conteudo: Visão geral — a conferência valida o conteúdo do volume antes da expedição;
            {{qtd_estacoes}}; só volumes que disparam um critério de desvio são conferidos.

[nivel 2] "Critérios de Desvio para Conferência"
  conteudo: lista dos {{motivos_desvio}} ativos.
  [tipo warning] (se conf_weight) "Volume com peso fora da tolerância {{tolerancia_balanca}} é desviado para conferência."

[nivel 2] "Fluxo de Conferência"
  conteudo: abrir lendo a etiqueta do volume → lista de itens + operador que coletou →
            validação ({{modos_conferencia}}) → Completar / Coletar / Encerrar (corte) → Fechar Volume (caixa + peso/dimensões) → etiqueta final.

[nivel 2] "Modos de Conferência"            (só se cf_t1 tiver >1 modo, ou descrever o único)
  conteudo: descrição de cada modo em {{modos_conferencia}}.

[nivel 2] "Balança / Check Weight"          (condicional: conf_weight)
  conteudo: peso real × esperado (soma cadastral + tara); tolerância {{tolerancia_balanca}}.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]; emitir as RN aplicáveis do DOSSIE filtradas pelas condicionais ativas
              (RN-01 critérios; RN-02 modos; corte/supervisor; RN-10 se responsável=WMS; etc.)
```

## Notas de rastreabilidade

- Conteúdo canônico e todas as RN: `./DOSSIE.md`.
- Desvios conhecidos deste tópico (cross-check, cadastro de impressoras, SHORTINDICATOR) em `./insights/conferencia.INSIGHTS.md`.
- Cruza com: [[packing]], [[shortpicking]], [[cross-check]], [[conferencia-manual]], [[integracao-cadastros]].
