# Sorter — Rejeito — Knowledge Card

> CARD abrangente do tópico **Sorter-Rejeito**. Fonte: Top 10 (BP, BRF Salvador, Beta, CDSK, ELETRO, Market Chile, Market Peru, NavePark, TITANO) + complementares (BR, Barbecue, Beta Full SP, DIA, Esperança, Gavião, MARA IV, Optimus Prime, Payless, Peter 2). O ED usa este arquivo para gerar o capítulo de Rejeito do Sorter no `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`sorter-rejeito` `rejeito` `no-read` `no-read-sorter` `rampa-rejeito` `contingencia`
`recirculacao` `sorter-divert` `erro-leitura` `sem-rota` `sem-mapa` `multiread`
`rampa-cheia` `perda-tracking` `cancelamento` `sku-divergente` `nao-integrado`
`estacao-rejeito` `tela-rejeito` `rejeito-tratavel` `rejeito-nao-tratavel`
`etiqueta-ivt` `contingencia-sorter` `rejeito-duplicidade` `ocorrencia`

---

## Metadados
- **Bloco:** expedicao
- **Gate:** `st1 = yes` (derivado — sorter precisa estar em escopo para existir rejeito)
- **Subtópicos com CARD próprio:** [[sorter]] (fluxo principal de triagem), [[cross-check]] (gate `st7`)
- **Campos relevantes deste CARD:** `st3` (qtd rampas de rejeito), `st_rc` (recirculação), `st11` (IA), `st10` (sinaleiro)
- **Depende de:** [[sorter]] (leitura no portal → decisão de desvio para rejeito)
- **Influencia:** [[etiquetas]] (reimpressão na estação de rejeito), [[expedicao]] (volume reintegrado ao fluxo), [[cross-check]] (volumes com SKU divergente podem originar rejeito)
- **Cruza com:** [[integracao-pedidos]] (cancelamento de OS, status "Na Rampa"), [[pesagem]] (check weight — Barbecue: rejeito por falha de check out de peso)

---

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{sorter_tem}}` | `st1` | select | yes / no / tbd |
| `{{rejeito_rampas}}` | `st3` | texto livre | qtd de rampas de rejeito (ex: "1", "2") |
| `{{recirculacao_tem}}` | `st_rc` | select | yes / no / tbd |
| `{{ia_tem}}` | `st11` | select | yes / no / tbd |
| `{{sinaleiro_tem}}` | `st10` | select | yes / no / tbd |

> `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com `st1 = yes`. O ED parte daqui e aplica as condicionais.)*

A **Rampa de Rejeito** é a saída terminal do Sorter destinada a receber volumes que não puderam ser corretamente classificados e desviados para sua rampa de destino durante o fluxo automatizado. Ela atua como **ponto de auditagem e tratativa** — o operador consulta o motivo registrado no WCS, realiza a correção necessária e decide o destino do volume: reindução no Sorter, encaminhamento manual à rampa correta ou descarte do fluxo.

O WCS disponibiliza uma **Tela de Rejeito** (Estação de Rejeito) dedicada, onde o operador visualiza os volumes rejeitados, o motivo de cada rejeito e, quando aplicável, pode reimprimir a etiqueta de expedição para viabilizar a reindução.

**Fluxo operacional padrão:**

1. **Volume entra na linha do Sorter.** O volume é induzido na esteira antes do portal de leitura.

2. **Leitura no portal.** A câmera tenta ler o código de barras / QR Code presente na etiqueta do volume. O resultado é transmitido pelo CLP/PLC ao WCS.

3. **Decisão de desvio.** O WCS valida a leitura e determina a rampa de destino. Se qualquer condição de rejeito for satisfeita (ver **Motivos de Rejeito** abaixo), o WCS instrui o CLP a desviar o volume para a Rampa de Rejeito.

4. **Volume chega à Rampa de Rejeito.** O operador da estação de rejeito consulta a Tela de Rejeito no WCS, identifica o motivo registrado e analisa o volume fisicamente.

5. **Tratativa.** Dependendo do motivo (ver **Classificação de Rejeitos**):
   - **Rejeito tratável:** o operador corrige o problema (adiciona/reimprime etiqueta, remove código extra, etc.) e **reinduz o volume** na esteira antes do portal de leitura.
   - **Rejeito não tratável:** o volume não retorna ao fluxo automatizado da onda atual e é tratado fora do processo.

6. **Confirmação de destino.** Após a reindução bem-sucedida e leitura correta, o status do volume no WCS é atualizado para **"Na Rampa"**, e o operador é informado da rampa de destino correta.

---

### Motivos de Rejeito

O WCS reconhece os seguintes motivos de rejeito — presentes em todos os projetos Top 10:

| # | Motivo | Descrição resumida | Tratativa padrão |
|---|--------|--------------------|------------------|
| 1 | **NoRead (Sem Leitura)** | A câmera não consegue ler nenhum código (etiqueta ausente, danificada, ilegível ou mal posicionada). | Corrigir/adicionar etiqueta com informações de rota; reinduzir antes do portal. |
| 2 | **Sem Rota** | Código lido com sucesso, mas o WCS não encontra o código em sua base de destinos. | Operador cadastra a rota no WCS e vincula ao mapa do Sorter; reinduzir. |
| 3 | **MultiRead** | Mais de um código visível simultaneamente para a câmera (parâmetros configurados). | Remover o código extra; reinduzir. Alternativa: reimprimir etiqueta. |
| 4 | **Rampa Cheia** | Leitura e rota corretas, mas sensor de acúmulo disparado na rampa de destino. | Ver Condicional `st_rc` — com recirculação: o volume recircula; sem: vai direto ao rejeito para reindução quando a rampa liberar. |
| 5 | **Cancelamento** | OS cancelada pelo WMS durante o trajeto. | Volume não retorna ao Sorter; tratativa operacional externa. |
| 6 | **Perda de Tracking** | CLP perde a referência posicional do volume na esteira (enrosco, volume fora de especificação). | Ver Condicional `st_rc` — com recirculação: recircula primeiro; sem: rejeito direto; reinduzir para gerar novo ID de tracking. |

> **Motivos adicionais por projeto** (ver Condicionais): Sem Mapa, SKU Divergente, Não Integrado, Ocorrência, Duplicidade.

---

### Classificação de Rejeitos (BRF Salvador — padrão emergente)

Os rejeitos são classificados em duas categorias que determinam o fluxo da estação de rejeito:

- **Rejeito Tratável:** motivo corrigível sem intervenção sistêmica profunda (ex: NoRead — reimpressão de etiqueta, MultiRead — remoção de código). Após correção, o volume é reinduzido e segue o fluxo normal do Sorter.
- **Rejeito Não Tratável:** motivo impede reaproveitamento na onda atual (ex: Cancelamento, volume sem coleta confirmada no picking). O volume não é reinduzido e é tratado fora do processo automatizado.

---

## Condicionais

### SE `st_rc = yes` (Recirculação ativa) → SUBSTITUIR tratativa de "Rampa Cheia" e "Perda de Tracking"

Quando a rampa de destino estiver cheia ou ocorrer perda de tracking, o WCS **não** envia o volume imediatamente ao rejeito. Em vez disso, o volume **recircula automaticamente na esteira**, aguardando a liberação da rampa ou a recuperação do tracking sem intervenção manual.

O número máximo de recirculações é **parametrizável no WCS** (padrão recomendado: 3 voltas). Caso o volume atinja o limite configurado sem sucesso no desvio, ele é encaminhado automaticamente para a Rampa de Rejeito, encerrando o ciclo no sistema.

> A recirculação se aplica **exclusivamente** a Rampa Cheia e Perda de Tracking. Volumes com outros motivos de rejeito (NoRead, Sem Rota, MultiRead, Cancelamento) são desviados imediatamente ao rejeito — a leitura pode ter sido bem-sucedida, mas o problema está no conteúdo da informação ou na OS, não na capacidade de leitura/tracking.

**Exceção — NoRead com recirculação (Barbecue):** Em alguns projetos, o cliente pode configurar um limite de recirculações também para NoRead contínuo, evitando looping infinito do volume na esteira.

---

### SE `st3 > 1` (Mais de uma rampa de rejeito) → ADICIONAR subseção "Segregação de Rampas de Rejeito"

Quando o projeto possui mais de uma rampa de rejeito, o WCS configura a **rampa de rejeito mais próxima** para desvio automático. A segregação típica é:

- **Rejeito diagnóstico (1ª rampa):** volumes com diagnóstico já definido pelo WCS (NoRead, sem integração, sem destino, itens faltantes, etc.) — operador consulta a tela e trata.
- **Rejeito de fluxo (2ª rampa / rampa final):** volumes por Rampa Cheia ou Perda de Tracking — reinduzidos imediatamente após o esvaziamento da rampa de destino.

> O sistema deve ser configurado para direcionar corretamente volumes de "Rampa Cheia" com base no Sorter de origem do volume, não apenas pela proximidade física. *(Gavião)*

---

### SE `st11 = yes` (IA ativa) → ADICIONAR subseção "Contingência do Sorter (IA)"

Quando o sistema de triagem usa **IA** para leitura dos códigos, situações de baixa qualidade de código (fornecedor) ou falha da IA podem ser tratadas pelo mecanismo de **Contingência do Sorter**.

O processo envolve a **reetiquetagem** do volume com uma nova etiqueta no formato `IVT + DUN` correto da embalagem. Com essa etiqueta presente, o Sorter **descarta todos os demais códigos** da caixa e realiza a triagem lendo exclusivamente o DUN após os caracteres "IVT".

- A impressão de etiquetas de contingência é de responsabilidade do WMS (com exceção de DIA, onde a Invent assume), mas o WCS disponibiliza a tela para uso quando necessário.
- Quando a IA está desligada, MultiRead pode ocorrer com maior frequência, pois a câmera captura todos os códigos visíveis sem filtragem inteligente.

---

### SE `st10 = yes` (Sinaleiro nas rampas) → ADICIONAR em "Motivos de Rejeito — Rampa Cheia"

A condição de **Rampa Cheia** também é sinalizada visualmente pelo **sinaleiro** presente na rampa de destino (ex: luz piscando em amarelo — ELETRO, TITANO). O operador pode antecipar o esvaziamento da rampa ao observar o sinaleiro antes de o volume chegar ao rejeito.

---

### SE projeto tem Cross-Check (`st7 = yes`) → REFERENCIAR [[cross-check]]

Para projetos com validação de SKU no portal (Cross-Check), o motivo **SKU Divergente / Produto Incorreto** é relevante: o portal não consegue confirmar o SKU esperado para a etiqueta do volume. O operador deve bipar manualmente ambos os códigos na estação de rejeito; se a validação manual estiver correta, o WCS ignora o double check no momento da reindução. → ver [[cross-check]].

---

### SE projeto tem BRF-Salvador / motivo "Sem Coleta Confirmada" → ADICIONAR motivo extra

Volumes induzidos na esteira antes da confirmação da separação no PBL (display LED) são rejeitados como **Não Tratáveis**: o WCS não reconhece o volume como coletado. Tratativa: fora do processo automatizado da onda atual.

---

### SE `st1 = no` ou `tbd` → OMITE o capítulo inteiro de Rejeito do Sorter.

---

## Observações Livres do Kickoff

Campos de texto: `st3` (qtd rampas rejeito) e qualquer observação livre de sorter.

O ED deve:
- **`st3`** → mencionar o número de rampas de rejeito na abertura do capítulo (ex: "A operação conta com N rampa(s) de rejeito").
- **Observação sobre hardware da estação de rejeito** → incluir na subseção "Estação de Rejeito": desktop, leitor de código de barras (ex: Honeywell 1470g), impressora (quando mencionada — Zebra para etiquetas IVT). Hardware fornecido pelo cliente.
- **Observação sobre impressora no rejeito** → ADICIONAR subseção "Reimpressão na Estação de Rejeito": o operador bipa a caixa e, se necessário, imprime nova etiqueta com rota atualizada (prevalece sobre etiqueta anterior). Todas as reimpressões devem ser registradas em log com data e hora. *(Esperança)*
- **Observação que restringe motivos de rejeito** (ex: projeto sem IA = sem contingência IVT) → ajustar a lista de motivos e omitir a subseção de Contingência.

---

## Regras de Negócio

- **RN-01** (todos): todo volume que não pode ser classificado e desviado para a rampa de destino no fluxo automatizado é direcionado para a Rampa de Rejeito; não há exceção — a rampa de rejeito é sempre a "saída de segurança" do Sorter.
- **RN-02** (todos): o WCS registra o motivo do rejeito na Tela de Rejeito; o operador consulta essa tela para orientar a tratativa.
- **RN-03** (todos): após correção e leitura bem-sucedida, o status do volume é atualizado para **"Na Rampa"** no WCS e o operador é informado da rampa de destino.
- **RN-04** (todos): a reindução do volume deve ocorrer **antes do portal de leitura** — não após — para que o ciclo de leitura e desvio seja reexecutado corretamente.
- **RN-05** (`st_rc = yes`): recirculação aplica-se exclusivamente a Rampa Cheia e Perda de Tracking; demais motivos vão direto ao rejeito.
- **RN-06** (`st_rc = yes`): o número máximo de recirculações é **parametrizável no WCS**; padrão recomendado: 3 voltas; após atingir o limite, desvio automático para Rampa de Rejeito.
- **RN-07** (todos): volumes com motivo **Cancelamento** **não devem retornar ao Sorter** em nenhuma hipótese; tratativa é exclusivamente operacional/manual.
- **RN-08** (projetos com `st3 > 1`): o WCS direciona o volume para a rampa de rejeito mais próxima, exceto Rampa Cheia — neste caso, valida o Sorter correto com base na rampa de destino configurada do volume.
- **RN-09** (`st11 = yes`): a etiqueta de contingência `IVT+DUN` sobrepõe todos os demais códigos; o Sorter lê exclusivamente o DUN após "IVT".
- **RN-10** (BRF Salvador — rejeito por duplicidade): ao reimprimir uma etiqueta (contingência, tela PVAR ou estação de rejeito), a etiqueta original deve ser **descartada fisicamente**; se ambas as caixas entrarem no Sorter, o WCS identificará duplicidade e rejeitará o segundo volume.
- **RN-11** (NavePark): o ciclo de integração de volume no Sorter **não é disparado** para volumes com No-Read ou etiqueta danificada até que sejam identificados manualmente e reinduzidos.
- **RN-12** (TITANO — motivo "Não Integrado"): volumes não integrados via WMS são recirculados da mesma forma que Rampa Cheia e Perda de Tracking; após limite de recirculações, vão ao rejeito.

---

## Insights e Padrões

### Padrões identificados
- O **núcleo de motivos de rejeito** (NoRead, Sem Rota, MultiRead, Rampa Cheia, Cancelamento, Perda de Tracking) é praticamente idêntico em todos os projetos Top 10 — é o conjunto canônico de 6 situações.
- A **Estação de Rejeito com Tela de Rejeito no WCS** aparece em 100% dos projetos com Sorter — é parte indissociável do módulo.
- O fluxo de reindução (corrigir → induzir antes do portal → status "Na Rampa") é o padrão consolidado de recuperação do volume.
- A **quantidade máxima de recirculações parametrizável** (padrão 3) aparece de forma idêntica em ELETRO, TITANO, Barbecue e Gavião — é um padrão de produto Velox.

### Variações significativas
- **BRF Salvador** introduz a classificação formal **Tratável / Não Tratável** como estrutura do capítulo — padrão mais elaborado que os demais projetos; candidato a adoção no template padrão.
- **ELETRO e TITANO** usam recirculação para Rampa Cheia e Perda de Tracking **antes** de enviar ao rejeito; os projetos mais antigos (Peter 2, NavePark, BP) enviam direto ao rejeito sem recircular.
- **Beta e Beta Full SP** adicionam o motivo **Sem Mapa** (rota existe no WCS mas nenhuma rampa vinculada no mapa do Sorter) — motivo ausente nos demais projetos Top 10 mais recentes.
- **CDSK e Market Chile/Peru** usam o mecanismo de **Contingência IA (IVT+DUN)** de forma explícita; **ELETRO e TITANO** não mencionam contingência IA, provavelmente por não usarem IA.
- **Optimus Prime** possui duas rampas segregadas: diagnóstico (1ª à direita) e reindução (última) — variação física rara.
- **Barbecue** adiciona rejeito por **falha de check out de peso** — único projeto com essa regra; vinculado a pesagem no portal.
- **NavePark** adiciona o destino **"Devolver ao Estoque"** na operação da estação de rejeito, além de Reinduzir e Desmontar — estrutura de decisão mais rica.
- **BR** diferencia explicitamente **Rejeito Direto** vs **Recircula** para cada motivo — útil como modelo descritivo.
- **Gavião** menciona possibilidade de **duas rampas de rejeito** (sorter existente + sorter Invent) com parametrização de proximidade.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **"impressora na estação de rejeito"** — inferido de observações livres. Candidato a checkbox.
- Não há campo para **"motivos extras de rejeito"** além do núcleo canônico (ex: Não Integrado, Sem Mapa, Ocorrência, SKU Divergente) — hoje inferidos do contexto do projeto. Candidato a multi-select.
- A distinção **Tratável / Não Tratável** (BRF Salvador) não está codificada no kickoff — depende do projeto documentar ou não.
- **Limite de recirculação para NoRead** (Barbecue) não tem campo próprio — hoje em texto livre.

### Inferências
- **Inferência:** quando `st_rc = yes`, o projeto quase sempre tem sinaleiro (`st10 = yes`) nas rampas, pois o feedback visual de Rampa Cheia é relevante para que o operador antecipe a liberação. · **Confiabilidade:** média · **Base:** ELETRO, TITANO (sinaleiro amarelo piscante mencionado junto à recirculação).
- **Inferência:** quando `st11 = yes` (IA), a Contingência IVT está quase sempre em escopo. · **Confiabilidade:** alta · **Base:** CDSK, Market Chile, Market Peru, DIA — todos com IA mencionam IVT.
- **Inferência:** projetos com Cross-Check (`st7 = yes`) têm maior probabilidade de rejeito por SKU Divergente. · **Confiabilidade:** alta · **Base:** Beta, Beta Full SP, ELETRO com Cross-Check mencionam SKU Divergente como motivo.

---

## Dependências (grafo)

- **Entra depois de:** [[sorter]] (portal de leitura → decisão de desvio → rampa de rejeito)
- **Sai para:** [[sorter]] (reindução do volume corrigido antes do portal) · [[expedicao]] (volume encaminhado manualmente à rampa de destino)
- **Consulta/alimenta:** [[integracao-pedidos]] (cancelamento de OS, confirmação de status "Na Rampa"), [[etiquetas]] (reimpressão na estação de rejeito — etiqueta IVT ou etiqueta de rota), [[pesagem]] (rejeito por check weight — Barbecue)
- **Variante relacionada:** [[cross-check]] (gate `st7` — SKU Divergente pode originar rejeito; fluxo de validação manual na estação de rejeito)
- **Depende de configuração:** `st3` (qtd rampas) · `st_rc` (comportamento recirculação) · `st10` (sinaleiro) · `st11` (IA / contingência IVT)
