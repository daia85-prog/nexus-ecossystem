# _AUDITOR — Passo de Auditoria do Especialista Documentador

> **Etapa obrigatória** antes de o ED entregar o `input_json` final. O Auditor analisa os capítulos gerados, identifica GAPs e retorna um Relatório de GAPs para decisão do usuário. Só após as decisões o ED regera o JSON completo e corrigido.

---

## O que é o Auditor

O Auditor é uma etapa do próprio ED — não um agente separado. Após gerar todos os capítulos internamente, o ED executa uma análise crítica do conjunto antes de emitir o `input_json`. O objetivo é detectar inconsistências que só aparecem quando todos os capítulos são vistos juntos (algo impossível de fazer capítulo a capítulo).

O Auditor **não é um revisor de forma** — não verifica gramática, estilo ou formatação. É um verificador de **coerência de conteúdo** entre capítulos, entre dados do kickoff e o que foi gerado, e entre as regras de negócio dos CARDs.

---

## Fluxo do Auditor

```
1. ED gera todos os capítulos internamente (sem emitir o JSON ainda)
2. ED executa as 8 categorias de auditoria sobre o conjunto
3. ED classifica cada achado como:
   ─ ⚡ GAP Confirmado  (conflito real, decisão obrigatória do usuário)
   ─ ⚠️ Dúvida Leve    (inconsistência possível, mas o ED já tem uma proposta)
4. ED retorna o Relatório de GAPs ao usuário
5. Usuário decide cada GAP (Opção A / Opção B / texto próprio)
6. ED incorpora todas as decisões e emite o input_json final e completo
```

> **Regra:** o ED nunca decide sozinho um GAP Confirmado. Para Dúvidas Leves, o ED propõe a opção A como padrão — o usuário pode aceitar, inverter ou substituir.

---

## As 6 Categorias de Auditoria

### CAT-01 — Consistência Referencial
Verifica se um capítulo que depende de outro está alinhado.

**Exemplos de GAP:**
- Conferência menciona "volumes shortados são desviados para cá" mas o capítulo de Shortpicking não registra essa saída.
- Sorter referencia "rampa de rejeito" mas o capítulo de Sorter-Rejeito não foi gerado (gate não ativado sem motivo aparente).
- PTL-Alocação é gerado, mas Paletização não menciona o PTL como passo.

**Como reportar:** indicar o capítulo A, o capítulo B, e a referência quebrada.

---

### CAT-02 — Cascata de Triggers
Verifica se os campos de gate do kickoff foram propagados corretamente.

**Exemplos de GAP:**
- `pt_tem_ptl = yes` está no kickoff mas o capítulo PTL-Alocação não foi gerado.
- `st7 = yes` (cross-check) mas Cross-Check não aparece em nenhum capítulo.
- `cf_gate = yes` mas o capítulo Conferência foi omitido.

**Como reportar:** campo do kickoff, valor, capítulo esperado, estado atual.

---

### CAT-03 — Terminologia Divergente
Detecta o mesmo conceito com nomes diferentes entre capítulos.

**Exemplos de GAP:**
- Picking usa "caixa de separação", Conferência usa "volume", PTL usa "palete unitizado" — podem ser o mesmo objeto ou objetos distintos?
- "Corte" em Shortpicking vs "item não coletado" em Conferência — mesmo evento?
- "Onda" vs "Wave" vs "Lote de separação" — inconsistência pode confundir a operação.

**Como reportar:** termos em conflito, capítulos onde aparecem, proposta de unificação.

---

### CAT-04 — Omissão Heurística
O kickoff não tem um campo específico para uma situação, mas o contexto sugere fortemente que ela existe e não foi documentada.

**Exemplos de GAP:**
- Projeto tem Sorter (`st1 = yes`) e Full Case (`fc1 = yes`), mas Cross-Check (`st7`) está `tbd`. Heurística: em 80% dos projetos com essas duas características, Cross-Check existe — o usuário deve confirmar.
- Full Case com `fc_r = wcs` e nenhuma impressora declarada (`fc_i = no`). Heurística: onde WCS controla FC, quase sempre há impressora de etiqueta na linha.
- Projeto com Sorter e nenhum capítulo de Mapa de Rota — mapa de rota é necessário para operar o Sorter.

**Como reportar:** heurística identificada, campo(s) envolvidos, pergunta ao usuário (sim/não ou escolha).

---

### CAT-05 — Contradição Direta
Dois trechos do JSON gerado se contradizem factualmente.

**Exemplos de GAP:**
- Conferência diz "todos os volumes passam pela conferência" (100%) mas Sorter-Rejeito menciona "volumes aprovados na conferência seguem direto para a esteira" — incoerência de fluxo.
- Order Start descreve "caixa é vinculada na indução do sorter" mas também "caixa é vinculada no Order Start" — dois pontos de vínculo contraditórios.
- Reabastecimento diz "WCS não gerencia estoque do picking (`pk_es = wms_only`)" mas Inventário descreve ajuste de saldo pelo WCS.

**Como reportar:** trecho A, trecho B, por que se contradizem, proposta de resolução.

---

### CAT-06 — Condicional Oco
Uma condicional foi ativada pelo kickoff mas o conteúdo gerado não diferencia o comportamento — o capítulo é igual ao padrão.

**Exemplos de GAP:**
- `cf_t1` inclui `conf_blind` (conferência cega) mas o texto gerado não menciona que o WCS omite as quantidades esperadas do operador.
- `es3 = yes` (reabastecimento pelo sorter) mas o capítulo de Reabastecimento não descreve como o volume de reabastecimento transita pelo sorter.
- `pt_frag = yes` (matriz de fragilidade) mas PTL-Alocação não menciona o critério de restrição por fragilidade — **atenção:** o CARD sinaliza ambiguidade de escopo aqui (separação de categoria × ordem de empilhamento); não afirme uma interpretação sem confirmação, gere GAP.

**Como reportar:** campo/valor do kickoff, condicional esperada, diferença ausente no texto.

---

### CAT-07 — Pré-requisito Ausente
Um capítulo descreve uma funcionalidade que depende de hardware, sistema ou definição que o kickoff/Master Data marca como inexistente, `tbd` ou `N/A`.

**Exemplos de GAP:**
- Capítulo descreve login/autenticação do operador via PDV, mas `p_pdv = no` ou o Master Data diz que não há PDV no projeto.
- Capítulo assume impressora dedicada numa estação, mas o campo de impressora correspondente está `tbd` ou `no`.
- Capítulo descreve um fluxo que depende de um sistema (`g5`, `in1`) que está `tbd` no kickoff.

**Como reportar:** funcionalidade descrita, campo do kickoff/Master Data que a contradiz, valor encontrado.

---

### CAT-08 — Validação JSON↔Tabela
Verificação determinística: todo campo presente em um `json_block` de payload de integração deve ter uma linha correspondente na tabela de campos da mesma interface, e vice-versa. Toda interface mencionada no capítulo de visão geral de Integração deve ter seu `json_block` + tabela completos (ou um GAP explícito registrando a ausência).

**Como verificar:** para cada capítulo de integração, liste os campos citados em cada `json_block` e compare com as linhas da tabela `["Campo", "Descrição", "Tipo", "Obrigatório", "Tamanho"]` imediatamente seguinte. Divergência em qualquer direção é GAP Confirmado (categoria determinística — não depende de heurística).

**Como reportar:** interface afetada, campo(s) presentes no JSON e ausentes na tabela (ou o inverso).

---

## Formato do Relatório de GAPs

O Auditor retorna o relatório **antes** do `input_json`. Estrutura:

```markdown
# Relatório de GAPs — [Nome do Projeto]

> Auditoria executada sobre [N] capítulos gerados para o projeto [CÓDIGO].
> Encontrados: [X] GAPs Confirmados · [Y] Dúvidas Leves.
> **Responda cada item antes de receber o JSON final.**

---

## ⚡ GAPs Confirmados

> Conflitos reais que exigem sua decisão. O ED não pode escolher por você.

### GAP-01 — [CAT-XX] [Título curto do problema]

**Problema:** [Descrição clara e objetiva do conflito — 2 a 4 linhas. Citar os capítulos ou campos envolvidos.]

**Opção A:** [Descrição da primeira solução — o que muda no JSON se você escolher A]

**Opção B:** [Descrição da segunda solução — o que muda no JSON se você escolher B]

**Sua decisão:** ___

---

### GAP-02 — ...

---

## ⚠️ Dúvidas Leves

> Inconsistências possíveis. O ED propõe a Opção A como padrão.
> Se concordar com todas as propostas, responda "aceito todas as dúvidas leves".

### DL-01 — [CAT-XX] [Título curto]

**Observação:** [Descrição da dúvida — 1 a 3 linhas.]

**Proposta (A — padrão):** [O que o ED vai fazer se você aceitar]

**Alternativa (B):** [O que fazer se você não concordar]

**Sua decisão:** ___ (A / B / texto)

---
```

---

## Instruções ao ED — como auditar

1. **Audite DEPOIS de gerar todos os capítulos** — o Auditor precisa da visão completa do conjunto para detectar inconsistências inter-capítulos.

2. **Reporte TODOS os GAPs encontrados** — não filtre por "importância". O usuário definiu que quer ver os 10 GAPs, não só os críticos. Dúvidas leves leves também são reportadas (separadas).

3. **Force toda pendência `tbd`/"a definir"/"avaliar" a virar GAP visível, nunca `[OBS INTERNA]`.** Se, ao revisar os capítulos, o Auditor encontrar qualquer `[OBS INTERNA]` que na verdade descreve uma pendência de conteúdo (dado faltante, decisão do cliente/operação) em vez de uma nota de revisão pura, isso é um GAP Confirmado por si só: a categoria correta é "canal errado" — a correção é converter para `{ "tipo": "warning", "texto": "GAP: ..." }` antes de emitir o JSON final. Esse é o erro que motivou a criação do Auditor: pendências viradas `[OBS INTERNA]` somem do documento e o Auditor declara "nenhum GAP" por engano.

4. **Se houver Master Data anexado**, use-o como fonte de verdade para a categoria CAT-05 (Contradição Direta) — qualquer capítulo que contradiga escopo, capacidade ou responsabilidade descrita no Master Data é GAP Confirmado, mesmo que o kickoff ou a transcrição sugiram outra coisa.

5. **Seja preciso na localização** — cite sempre: campo do kickoff envolvido (ex: `st7`), capítulo afetado (ex: "Cross-Check"), e número do heading no JSON gerado (ex: "seção 4.2").

6. **Ofereça exatamente 2 opções por GAP** — nada mais. Opção A e B devem ser mutuamente exclusivas e cobrir os casos mais prováveis. Se houver mais variações, agrupe nas 2.

7. **Dúvidas Leves têm proposta padrão (A)** — se o usuário disser "aceito todas as dúvidas leves", o ED aplica todas as opções A sem precisar de mais input.

8. **Após receber as decisões** — o ED regera o `input_json` **completo**, incorporando todas as correções. Não emite parcialmente.

9. **Mínimo de auditoria** — mesmo que não encontre nenhum GAP, o ED declara explicitamente: "Auditoria concluída. Nenhum GAP identificado." antes de emitir o JSON.

---

## Exemplos de GAPs reais (referência)

### Exemplo — ⚡ GAP Confirmado (CAT-02)

```
### GAP-01 — CAT-02 Cross-Check não gerado com st7 = yes

**Problema:** O kickoff informa `st7 = yes` (Cross-check ativo), mas o capítulo de
Cross-Check não consta no JSON gerado. Pela regra de gate, `st7 = yes` ativa
obrigatoriamente o capítulo de Cross-Check após o capítulo do Sorter.

**Opção A:** Gerar o capítulo Cross-Check no JSON, posicionado após "Sorter" e antes
de "Sorter – Rejeito", com o fluxo padrão de validação SKU × pedido no portal.

**Opção B:** Confirmar que o cross-check é tratado dentro do capítulo Sorter (como
subseção), sem capítulo próprio. O campo `st7` seria tratado como variante do sorter,
não como tópico separado.

**Sua decisão:** ___
```

### Exemplo — ⚠️ Dúvida Leve (CAT-04)

```
### DL-01 — CAT-04 Impressora Full Case não declarada

**Observação:** `fc_r = wcs` (WCS controla Full Case) e `fc_i = no` (sem impressora
declarada). Em 9 de 10 projetos WCS com Full Case sob controle WCS, há ao menos
uma impressora de etiqueta na linha. A ausência pode ser intencional (etiqueta
pré-impressa) ou lacuna do kickoff.

**Proposta (A — padrão):** Manter o capítulo sem menção a impressora. Inserir nota
`[OBS INTERNA] confirmar com a operação se há impressora na linha de Full Case`.

**Alternativa (B):** Incluir menção explícita de que o Full Case opera sem impressora
dedicada (etiqueta gerada no Order Start e reutilizada).

**Sua decisão:** ___ (A / B / texto)
```

---

## Notas de implementação

- O arquivo `_AUDITOR.md` é parte do Knowledge do ED (projeto Claude.ai). O ED o lê junto com os CARDs.
- O Auditor não substitui a revisão humana do documento final — detecta apenas inconsistências que um modelo pode identificar com base nos dados do kickoff e nos CARDs.
- **Integrações são o maior ponto de GAP**: discrepâncias entre o tipo declarado em `in1` e o que cada capítulo descreve como mecanismo de comunicação com o WMS são as inconsistências mais frequentes.
