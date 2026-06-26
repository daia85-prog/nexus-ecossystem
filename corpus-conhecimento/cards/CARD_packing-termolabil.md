# Packing Termolábil — Knowledge Card

> CARD do subtópico **Packing Termolábil** (embalagem de cadeia fria). Fonte: Top 10 com `Prioridade: SIM` (BP, BRF Salvador) → **Texto Padrão** e **Regras de Negócio**; complementares com `Prioridade: não` (BRF Jundiaí) → variações/insights. O ED usa este arquivo para gerar o capítulo de Packing Termolábil do `input_json` quando a operação inclui produtos sensíveis à temperatura: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.
>
> **Aviso de cobertura:** evidência escassa no corpus (~1 seção substantiva; demais seções repetem apenas o enunciado do layout de etiqueta). Confirmar com a operação antes de emitir capítulo independente. Candidato a fusão com [[packing]] se o projeto não tiver lógica de separação por temperatura detalhada.

## Tags
`packing-termolabil` `termolabil` `temperatura-controlada` `gel-pack` `embalagem-termica`
`cold-chain` `produto-sensivel` `cadeia-fria` `congelado` `resfriado` `separacao-por-temperatura`
`multiplicador-temperatura` `doca-auxiliar` `doca-principal` `etiqueta-termolabil`
`picking-termolabil` `packing-fracionado` `embalagem-isolante` `controle-termico`
`brf` `produto-frio` `separacao-padrao` `separacao-mista`

## Metadados
- **Bloco:** conferencia
- **Gate:** sem gate direto no kickoff — trigger heurístico: operação de frios (congelado/resfriado) confirmada em texto livre ou por tipo de produto
- **Gate derivado:** `pk1 = yes` (packing em escopo) **+** condição de produto termolábil confirmada na operação
- **Subtópico de:** [[packing]] (variante especial para itens de cadeia fria)
- **Depende de:** [[packing]] (fluxo base compartilhado) · [[picking-pbl]] / picking termolábil (origem dos volumes) · [[order-start]] (caixa e volume originados aqui)
- **Influencia:** [[sorter]] (etiqueta final específica lida no portal) · [[etiquetas]] (layout de etiqueta dedicado)
- **Cruza com:** [[packing]] (fluxo base + condicionais), [[etiquetas]] (layout específico termolábil), [[sorter]] (desvio de rampa por temperatura)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{pk_tem}}` | `pk1` | select | yes / no / tbd **[GATE base]** |
| `{{pk_sep_tipo}}` | *(texto livre / obs)* | select heurístico | `sep_padrao`=Separação Padrão · `sep_mista`=Separação Mista · `tbd`=A definir |
| `{{pk_term_docas}}` | *(texto livre / obs)* | YN heurístico | yes=Tem docas auxiliares por temperatura · no · tbd |
| `{{pk_term_etiq}}` | *(texto livre / obs)* | YN heurístico | yes=Layout de etiqueta específico confirmado · tbd |

> **Nota:** não há campos dedicados no kickoff atual para separação termolábil — todos os valores são inferidos de texto livre ou confirmados diretamente com a operação. Candidatos a campos formais: `pk_sep_tipo` (select padrão/mista) e `pk_term_docas` (YN). `tbd`/vazio → omitir a subseção correspondente e emitir `[OBS INTERNA]`.

---

## Texto Padrão
*(Base detalhada para operações com `pk1 = yes` e produtos termolábeis confirmados. O ED parte daqui e aplica as condicionais.)*

O Packing Termolábil é a etapa de embalagem aplicada a volumes provenientes do **Picking Fracionado** e do **Picking Termolábil** — produtos sensíveis à temperatura (congelados e resfriados). O fluxo base segue o mesmo padrão do [[packing]] convencional, diferindo em dois aspectos principais: o **layout de etiqueta específico** aplicado no fechamento do volume e a **lógica de priorização por temperatura** herdada da separação.

Só chegam ao packing termolábil volumes que foram devidamente separados na lógica de temperatura configurada (padrão ou mista) e aprovados nos critérios de validação do WCS.

**Fluxo operacional padrão:**

1. **Separação por temperatura.** Antes do packing, os produtos são separados conforme o **tipo de separação** parametrizado na onda (padrão ou mista — ver **Condicionais**). O WCS aplica **multiplicadores por temperatura** para determinar a ordem de coleta dos itens termolábeis.

2. **Seleção de docas auxiliares.** Quando aplicável, após a seleção do tipo de separação, o operador ou o sistema realiza a **seleção de docas auxiliares por temperatura** (congelado / resfriado). As docas principais vêm obrigatoriamente no IDOC de remessa; as auxiliares são configuráveis diretamente no WCS — ver **Condicionais — Docas**.

3. **Abertura da tela de packing.** O operador acessa a tela de packing no WCS (desktop) e seleciona o posto de packing. *(Fluxo idêntico ao [[packing]] padrão a partir deste ponto.)*

4. **Leitura do volume termolábil.** O operador realiza a leitura da caixa/tote que contém os itens termolábeis separados. O WCS reconhece a caixa, valida que o volume está apto ao fechamento e identifica-o como volume termolábil.

5. **Embalagem do pedido.** O operador transfere os itens para a caixa final de envio, garantindo que todos os itens do volume termolábil sejam transferidos corretamente. *(Quando aplicável: inserção de elementos de controle térmico — gel-packs, embalagem isolante — confirmada com a operação. `[OBS INTERNA]` detalhar materiais de isolamento utilizados.)*

6. **Geração do volume e impressão da etiqueta termolábil.** O WCS gera o volume e dispara a impressão da **etiqueta de packing específica** para volumes pós Picking Fracionado/Termolábil (layout dedicado — ver **Condicionais — Etiqueta**). A etiqueta garante a rastreabilidade e sinaliza a temperatura de conservação do volume nos processos seguintes.

7. **Fechamento / lacre.** A caixa final é fechada e lacrada; a etiqueta termolábil é colada após o lacre.

8. **Reindução e seguimento.** O volume fechado é reinserido na esteira principal. O WCS registra a conclusão do packing termolábil, permitindo que o volume siga para o **Sorter / expedição** — onde a etiqueta final é lida no portal para desvio na rampa correta (conforme temperatura/destino). → ver [[sorter]], [[etiquetas]].

---

## Condicionais

### Tipo de Separação por Temperatura — derivado de `pk_sep_tipo` (texto livre / observação)

#### SE `pk_sep_tipo = sep_padrao` (Separação Padrão) → ADICIONA subseção "Separação por Temperatura"
Todos os materiais de temperatura **congelada** são separados **primeiro**; os materiais **resfriados** são separados depois — exceto se houver **reabastecimento em andamento**, situação em que o resfriado pode ser iniciado. O WCS aplica **multiplicadores por temperatura**: congelado = **1** (maior prioridade), resfriado = **2** (menor prioridade). *(Visto em BRF Salvador.)*

#### SE `pk_sep_tipo = sep_mista` (Separação Mista) → ADICIONA subseção "Separação por Temperatura"
Congelado e resfriado têm a **mesma prioridade** de separação, independentemente da temperatura. O WCS aplica multiplicadores iguais: congelado = **1**, resfriado = **1**. *(Visto em BRF Salvador.)*

#### SE `pk_sep_tipo = tbd` ou não informado → EMITE WARNING
`[OBS INTERNA]` *"Tipo de separação termolábil não definido — confirmar padrão ou mista com a operação antes de emitir a ES."*

### Docas Auxiliares por Temperatura — derivado de `pk_term_docas`

#### SE `pk_term_docas = yes` (Tem Docas Auxiliares) → ADICIONA subseção "Docas Principais e Auxiliares"
Existem dois tipos de docas: **principais** e **auxiliares**.
- **Docas principais:** sempre vêm no IDOC de remessa (TPSDLS – ZSDDAREM) e são usadas obrigatoriamente para receber os volumes separados por temperatura.
- **Docas auxiliares:** podem ser escolhidas diretamente no WCS **sem restrição** em relação a outros transportes ou ondas. **Restrição:** se a doca auxiliar estiver em uso, o **início da onda é bloqueado**. *(Visto em BRF Salvador.)*

#### SE `pk_term_docas = no` ou `tbd` → OMITE subseção de docas auxiliares

### Etiqueta de Packing Termolábil — derivado de `pk_term_etiq`

#### SE `pk_term_etiq = yes` (Layout específico confirmado) → ADICIONA subseção "Etiqueta de Packing Termolábil"
Volumes provenientes do Picking Fracionado/Termolábil utilizam um **layout de etiqueta específico** no packing, distinto do layout padrão. `[OBS INTERNA]` O layout exato não está documentado no corpus — confirmar com a operação/cliente antes de emitir a ES. *(Recorrente em BP/I24.215 — 3 revisões; Flower/I22.1732.)*

#### SE `pk_term_etiq = tbd` → EMITE WARNING
`[OBS INTERNA]` *"Layout de etiqueta termolábil não detalhado — confirmar campos e formato com a operação."*

### Outras condicionais

#### SE operação não tem produtos termolábeis → OMITE o tópico integralmente
Quando a operação não trabalha com congelados/resfriados, este tópico deve ser suprimido na ES sem menção.

#### SE `pk1 = no` ou `tbd` → OMITE o tópico integralmente (gate base ausente)

#### SE cobertura mínima confirmada (sem detalhamento de fluxo de packing termolábil) → ver [[packing]]
Avaliar fusão deste tópico como subseção do capítulo de [[packing]] em vez de capítulo independente. Emitir nota editorial: *"Avaliar se este tópico deve ser uma subseção de [[packing]] em vez de capítulo independente (cobertura mínima no corpus — confirmar com a operação)."*

---

## Observações Livres do Kickoff
Não há campos dedicados no kickoff atual para packing termolábil. Toda informação chega via texto livre ou confirmação direta com a operação.

O ED deve:
- **Tipo de separação** (padrão/mista) → confirmar com a operação; preencher `{{pk_sep_tipo}}` e emitir a subseção correspondente (ver Condicionais).
- **Presença de docas auxiliares** → confirmar; preencher `{{pk_term_docas}}` e emitir/omitir subseção de docas.
- **Layout de etiqueta termolábil** → confirmar campos do layout com a operação/cliente; mencionar que o layout é específico para Picking Fracionado/Termolábil (registrar como `[OBS INTERNA]` se não detalhado).
- **Materiais de controle térmico** (gel-packs, embalagem isolante, tempo máximo de exposição) → quando citados em observação, adicionar como subseção nomeada "Controle Térmico" ao final do fluxo, com `[OBS INTERNA]` se precisar de validação. `[LACUNA]` Nenhum projeto no corpus detalha esses materiais — campo a levantar na operação.
- **Observação que restringe escopo** (ex.: "packing termolábil só para congelados") → SUBSTITUIR o texto de abertura pela restrição explícita.
- **Observação que adiciona etapa** não coberta pelo padrão → ADICIONAR como subseção nomeada ao final do fluxo, com `[OBS INTERNA]`.

---

## Regras de Negócio
- **RN-01** (todos): existem dois tipos de separação termolábil: **padrão** (congelado antes do resfriado) e **mista** (mesma prioridade). A escolha é parametrizada na onda.
- **RN-02** (separação padrão): na separação padrão, congelados são separados **antes** dos resfriados — **exceção:** se houver reabastecimento em andamento, o resfriado pode ser iniciado antes da conclusão dos congelados.
- **RN-03** (separação mista): na separação mista, congelados e resfriados têm prioridade igual de separação, independentemente da temperatura.
- **RN-04** (todos com multiplicadores): o WCS aplica multiplicadores por temperatura para ordenar a fila de separação: separação **padrão** → congelado = **1**, resfriado = **2**; separação **mista** → congelado = **1**, resfriado = **1**.
- **RN-05** (todos com docas): as **docas principais** sempre constam no IDOC de remessa (TPSDLS – ZSDDAREM) e são usadas obrigatoriamente para receber os volumes separados.
- **RN-06** (todos com docas auxiliares): as **docas auxiliares** podem ser selecionadas livremente no WCS sem restrição de outros transportes/ondas; **porém**, se a doca auxiliar estiver em uso, o **início da onda é bloqueado**.
- **RN-07** (todos): volumes pós Picking Fracionado e Picking Termolábil utilizam **layout de etiqueta específico** no packing — distinto do layout padrão do packing fracionado convencional.
- **RN-08** (todos): o WCS só permite o fechamento/impressão de volumes termolábeis aprovados na validação do fluxo (peso ou conferência) — mesma regra do packing padrão (ver [[packing]] RN-01).

## Insights e Padrões
### Padrões identificados
- A **etiqueta dedicada** é o único fato verdadeiramente recorrente do tópico: quatro projetos diferentes (BP/I24.215 em 3 revisões + Flower/I22.1732) repetem o mesmo enunciado de que volumes pós Picking Fracionado/Termolábil usam layout de etiqueta específico — é o núcleo sólido deste CARD.
- O **acoplamento com a lógica de separação por temperatura** é explícito: packing termolábil herda as regras de priorização (multiplicadores de temperatura) definidas na separação — não é um processo completamente isolado.
- O **fluxo base de packing** (selecionar posto → ler caixa → transferir itens → gerar volume + imprimir etiqueta → lacrar → reinduzir) é compartilhado com o [[packing]] padrão; a diferença está na etiqueta e nas regras de temperatura.

### Variações significativas
- **BRF Salvador (I22.120)** é o único projeto que detalha a mecânica de separação por temperatura: tipos padrão/mista, multiplicadores e regra de docas. Todo o conteúdo substantivo além da etiqueta vem de um único cliente.
- **BP (I24.215)** e **Flower (I22.1732)** mencionam apenas o layout de etiqueta específico — sem detalhamento de fluxo de packing termolábil próprio.
- **BRF Jundiaí (I22.199)** descreve saídas de pallet por temperatura (2 BKs para congelados, 1 para resfriados) com failover de congelado para resfriado (mas não vice-versa) — mais próximo de logística de saída do que de packing em si.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- `[LACUNA]` Não há campo no kickoff para **tipo de separação termolábil** (padrão/mista) — hoje inferido de texto livre. Candidato a campo `pk_sep_tipo` (select).
- `[LACUNA]` Não há campo para **presença de docas auxiliares por temperatura** — hoje inferido. Candidato a campo `pk_term_docas` (YN).
- `[LACUNA]` Não há campo para **materiais de controle térmico** (gel-pack, embalagem isolante, tempo máximo de exposição ao ambiente) — nenhum projeto documenta. Candidato a campo `pk_term_material` (multi-select ou texto livre).
- `[LACUNA]` O **layout de etiqueta termolábil** não foi capturado no corpus (as imagens ficaram fora do RAW) — confirmar campos e formato com cada operação.
- `[LACUNA]` Não há distinção documentada entre **packing de congelado** vs **packing de resfriado** como etapas separadas ou unificadas.
- `[CANDIDATO A REVISÃO]` A seção sobre docas auxiliares e tipos de separação descreve mais o **processo de separação por temperatura** do que o packing em si — candidata a realocação para um futuro tópico de separação termolábil/docas, caso o material cresça.

### Inferências
- **Inferência:** o Packing Termolábil compartilha a maior parte do fluxo operacional com o [[packing]] padrão, diferindo principalmente na etiqueta específica e na herança das regras de priorização por temperatura da separação. · **Confiabilidade:** média · **Base:** o corpus só destaca a etiqueta e a priorização; nenhuma etapa de embalagem exclusiva (gel-pack, isolamento) é documentada.
- **Inferência:** os multiplicadores de temperatura (congelado=1, resfriado=2 no modo padrão) servem para ordenar a fila de separação, fazendo o resfriado "esperar" o congelado ser concluído. · **Confiabilidade:** média · **Base:** interpretação direta do I22.120 (BRF Salvador); mecanismo interno do WCS não detalhado.
- **Inferência:** projetos com separação mista provavelmente têm operações de maior throughput, onde a segregação rígida por temperatura criaria gargalos na linha. · **Confiabilidade:** baixa · **Base:** inferência lógica; sem evidência direta no corpus.
- **Inferência:** este tópico precisará de complemento de fontes (ou fusão com [[packing]]) para sustentar um capítulo autônomo completo na ES. · **Confiabilidade:** alta · **Base:** apenas 1 seção de conteúdo substantivo no RAW; forte sobreposição temática com separação e packing convencional.

## Dependências (grafo)
- **Entra depois de:** picking termolábil / [[picking-pbl]] (fracionado termolábil) → aprovação em peso ou [[conferencia]]
- **Subtópico de:** [[packing]] (compartilha fluxo base; diverge em etiqueta e regras de temperatura)
- **Sai para:** [[sorter]] (etiqueta termolábil lida no portal, desvio em rampa por temperatura/destino) → expedição frios
- **Consulta/alimenta:** [[etiquetas]] (layout de etiqueta dedicado termolábil), [[integracao-pedidos]] (IDOC de remessa para docas principais — TPSDLS/ZSDDAREM)
- **Retorna para:** [[order-start]] (caixa plástica/tote liberada para reuso após transferência dos itens)
- **Candidato a fusão:** [[packing]] (se operação não tiver lógica de separação por temperatura detalhada)
