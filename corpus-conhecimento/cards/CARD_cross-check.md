# Cross-Check — Knowledge Card

> CARD do subtópico **Cross-Check**. Fonte: Eletro (×2), Beta, Beta Full SP (Top 10 / Prioridade SIM) + CDSK — CrossCheck IA (complementar). O ED usa este arquivo para gerar a subseção de Cross-Check dentro do capítulo de Conferência (ou Sorter, conforme a estrutura do dossie): parte do **Texto Padrão**, aplica as **Condicionais** e absorve as **Observações Livres**.

## Tags
`cross-check` `crosscheck` `portal-leitura` `sorter-check` `validacao-fullcase` `rejeito-automatico`
`portal-scanner` `sku-validacao` `dun-ean` `fullcase` `rampa-rejeito` `desvio-plc`
`st7` `camera-topo` `crosscheck-ia` `double-check-rejeito` `rejeito-produto-incorreto`
`volume-divergente` `sorter-inducao` `reindução`

## Metadados
- **Bloco:** conferencia
- **Gate:** `st7 = yes` (campo "Cross-check?" na seção Sorter do kickoff — seção 10)
- **Card pai:** [[conferencia]] (subtópico vinculado; tratado como variante paralela de validação)
- **Depende de:** [[sorter]] (portal de leitura, indução, PLC), [[integracao-pedidos]] (volumes/remessas WMS→WCS, integração de SKU/DUN/EAN por pedido)
- **Influencia:** [[sorter-rejeito]] (destino dos volumes com falha), [[sorter-inducao]] (reindução pós-validação manual na rampa de rejeito)
- **Aplicável a:** volumes **Full Case** (em parte dos projetos exclusivamente; ver Condicionais)
- **Tecnologias:** câmera de leitura (portal 3 faces), câmera de TOPO (modo IA), PLC

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{cc_gate}}` | `st7` | select (YN) | `yes`=Sim · `no`=Não · `tbd`=A definir |
| `{{sorter_portal_faces}}` | `st6` | texto livre | nº de faces do portal de leitura (ex: "3 faces") |
| `{{sorter_rejeito_rampa}}` | `st3` | texto livre | identificação da rampa de rejeito |
| `{{sorter_criterio}}` | `st_criterio` | select | `regiao`=Região · `transp`=Transportadora · `filial`=Filial/Destino · `outro` |

> `tbd`/vazio em `st7` → omitir a subseção de Cross-Check. O campo `st6` (faces do portal) é informativo; quando ausente, usar "portal de leitura" sem especificar faces.

---

## Texto Padrão
*(Base detalhada presente em projetos com `st7 = yes`. Aplicável exclusivamente ao fluxo Full Case com sorter. O ED parte daqui e aplica as condicionais.)*

O Cross-Check é a validação automatizada realizada no **portal de leitura do sorter** no momento da indução do volume. Para volumes Full Case, o WCS verifica em tempo real se o produto físico corresponde ao pedido associado à etiqueta do volume, antes de instruir o PLC a direcionar o volume à rampa de destino.

**Fluxo operacional padrão:**

1. **Chegada ao portal de leitura.** O volume Full Case é induzido na esteira e passa pelo portal de leitura (câmera com `{{sorter_portal_faces}}` de cobertura). O portal captura dois dados simultaneamente:
   - A **etiquetaOp** do volume (identifica o pedido/remessa associado).
   - O **código do produto** (SKU interno, DUN ou EAN da caixa fechada).

2. **Dupla verificação pelo WCS.** Com os dados capturados, o WCS executa em tempo real duas checagens:
   - **(1) Verificação de destino:** consulta os dados do pedido vinculados à etiquetaOp para determinar a rampa de saída correta.
   - **(2) Cross-Check SKU × pedido:** cruza o SKU/DUN/EAN lido pela câmera com os itens que deveriam compor aquele pedido/nota fiscal, conforme a integração de Volumes e Remessas recebida do WMS.

3. **Decisão e instrução ao PLC:**
   - **Sucesso** — o código lido pertence ao pedido e o produto ainda não foi totalmente separado → o WCS instrui o PLC com a **rampa de destino** correta; o volume segue normalmente.
   - **Falha** — o código não pertence ao pedido, ou o produto já foi separado em quantidade suficiente → o WCS instrui o PLC a desviar o volume para a **rampa de rejeito** (`{{sorter_rejeito_rampa}}`).

4. **Tratativa na rampa de rejeito.** O operador responsável pela rampa de rejeito recebe o volume divergente com o motivo registrado ("Produto Incorreto / SKU Divergente"). O operador realiza o **double check manual** (bipa o código da etiqueta do volume e o código do produto). Se a leitura manual confirmar que o SKU é correto:
   - O WCS ignora o double check na reindução; ou
   - O volume é conduzido manualmente à rampa de destino.
   A divergência pode também ocorrer por **falha de leitura** do portal (câmera não conseguiu capturar o SKU com clareza) — nesse caso o operador valida presencialmente.

5. **Rastreabilidade.** Todas as ocorrências de rejeito por Cross-Check são registradas no WCS com motivo, volume, pedido, SKU lido e SKU esperado, possibilitando auditoria e alimentação de painéis de KPI. → ver também [[sorter-rejeito]].

---

## Condicionais

### Gate principal — derivado de `st7`

#### SE `st7 = yes` → INCLUIR subseção "Cross-Check" no capítulo de Conferência/Sorter
Ativar o Texto Padrão completo acima.

#### SE `st7 = no` ou `tbd` ou vazio → OMITIR a subseção de Cross-Check inteiramente.

---

### Escopo de aplicação — Full Case exclusivo ou misto

#### SE o projeto aplica Cross-Check **exclusivamente a pedidos Full Case** → ADICIONAR no Texto Padrão (passo 1 ou nota de escopo)
> "A função de Cross-Check está habilitada exclusivamente para volumes do modelo **Full Case**. Volumes de pedidos fracionados não passam por essa validação no portal."

#### SE o projeto aplica Cross-Check a **todos os volumes** (sem distinção) → OMITIR a restrição de Full Case.
*(Ausência de evidência nos Top 10 — confirmar com a operação antes de usar este caminho.)*

---

### Modo IA com câmera de TOPO — complementar (CDSK)

#### SE o projeto usa câmera de TOPO para CrossCheck (modo IA) → ADICIONAR subseção "Cross-Check por IA"
Para o correto funcionamento do modo IA, **todas as caixas** envolvidas no fluxo Full Case devem ser etiquetadas na **face superior**, garantindo leitura pela câmera de TOPO. Ocorrências classificadas como "Suspeita de Divergência" são registradas sistemicamente mesmo quando o WCS decide não desviar o volume, permitindo auditoria completa e alimentação do painel de KPI.
*(Visto em CDSK; avaliar obrigatoriedade da etiquetagem na face superior como requisito de engenharia.)*

---

### Ativação/Inativação operacional

#### SE a operação pode ativar/inativar o Cross-Check conforme necessidade → ADICIONAR nota operacional
> "A função de Cross-Check pode ser **habilitada ou desabilitada** diretamente pelo supervisor da operação, sem necessidade de alteração de parâmetros de sistema."
*(Presente nas evidências brutas; confirmar se é via tela de parâmetros WCS ou ação do operador.)*

---

### Falha de leitura no portal

#### SE o portal falha na leitura do SKU (câmera não captura) → ADICIONAR em "Tratativa na rampa de rejeito"
Quando o portal **não consegue ler o código do produto** (oclusão, etiqueta danificada, posicionamento), o volume também é desviado para a rampa de rejeito. O motivo registrado diferencia "Falha de Leitura" de "SKU Divergente". O operador valida o volume presencialmente e reinduz.

---

## Observações Livres do Kickoff
Campos de texto relacionados ao Sorter: `st2` (rampas saída), `st3` (rejeito), `st6` (faces do portal), `st_criterio` (critério desvio rampa).

O ED deve:
- **`st3`** → usar como `{{sorter_rejeito_rampa}}` ao descrever o destino do volume reprovado no Cross-Check.
- **`st6`** → mencionar o número de faces do portal ao descrever a captura dos dados (passo 1 do fluxo).
- **Observação que restringe o escopo** (ex: "Cross-Check só para pedidos de determinada transportadora") → SUBSTITUIR a abertura do escopo no Texto Padrão pela restrição explícita.
- **Observação sobre integração SKU** (ex: "usa DUN-14, não EAN") → SUBSTITUIR "SKU/DUN/EAN" pelo código correto em todo o fluxo.
- **Observação sobre double check** (ex: "rejeito vai diretamente à rampa X sem validação manual") → SUBSTITUIR o passo 4 pelo fluxo descrito.

---

## Regras de Negócio
- **RN-01** (todos): o Cross-Check opera exclusivamente no portal de leitura do sorter, em tempo real, durante a indução do volume — não é uma conferência manual.
- **RN-02** (todos): a decisão de aprovação ou rejeito é tomada pelo WCS e comunicada ao PLC; o operador humano não intervém no fluxo aprovado.
- **RN-03** (todos): o Cross-Check realiza duas verificações simultâneas — destino do pedido (etiquetaOp) e SKU do produto (câmera) — sendo a falha em qualquer uma delas suficiente para desviar à rampa de rejeito.
- **RN-04** (todos): o motivo do rejeito é registrado com distinção entre "Produto Incorreto / SKU Divergente" e "Falha de Leitura"; ambos direcionam à mesma rampa de rejeito mas exigem tratativas distintas.
- **RN-05** (Full Case): em parte dos projetos, o Cross-Check é aplicável exclusivamente a volumes do modelo Full Case; volumes fracionados não entram nesse fluxo.
- **RN-06** (todos): após double check manual bem-sucedido na rampa de rejeito, o WCS não exige nova validação no portal durante a reindução do volume.
- **RN-07** (modo IA / câmera TOPO): quando o projeto utiliza câmera de TOPO, todas as caixas do fluxo devem estar etiquetadas na face superior como pré-requisito operacional.
- **RN-08** (todos): ocorrências de "Suspeita de Divergência" (modo IA) são registradas sistemicamente independentemente da decisão de desvio, garantindo rastreabilidade completa para auditoria e KPI.

---

## Insights e Padrões

### Padrões identificados
- O **núcleo do fluxo** (captura no portal → dupla verificação WCS → instrução PLC → rampa de destino ou rejeito) é consistente entre Eletro, Beta e Beta Full SP — base sólida para o Texto Padrão.
- O Cross-Check é **sempre associado ao sorter**: sem sorter (`st1 = no`), o gate `st7` não faz sentido e deve ser ignorado mesmo se preenchido.
- A **rampa de rejeito** é o único destino de falha — não há "conferência manual em linha" para volumes reprovados no portal; a tratativa ocorre fora da linha principal.

### Variações significativas
- **CDSK** introduz o **modo IA com câmera de TOPO** — variação que adiciona requisito físico (etiquetagem na face superior) e rastreabilidade de "Suspeita de Divergência" mesmo sem desvio efetivo.
- **Ativação/inativação** da função pelo supervisor é citada nas evidências brutas (Eletro/Beta) mas não tem campo no kickoff — hoje tratada como observação livre.
- O **double check manual** na rampa de rejeito pode ser ignorado na reindução (WCS não exige nova passagem pelo portal) — comportamento confirmado em Eletro/Beta, mas pode variar por projeto.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para "**Cross-Check exclusivo para Full Case vs. todos os volumes**" — hoje inferido pelo contexto do projeto. Candidato a checkbox ou select em `st7`.
- Não há campo para "**tipo de código lido no portal** (SKU / DUN / EAN)" — hoje em texto livre ou inferido da integração. Candidato a select em `st6` ou campo novo.
- "**Ativação/inativação pelo supervisor**" não tem campo — inferida. Candidato a checkbox.
- "**Modo IA / câmera de TOPO**" não tem gate próprio — está embutido em `st7`. Candidato a sub-gate ou checkbox associado.

### Inferências
- **Inferência:** quando `st7 = yes`, o projeto quase certamente tem Full Case (`fc1 = yes`) e sorter (`st1 = yes`) — o Cross-Check não existe sem esses dois pré-requisitos. · **Confiabilidade:** alta · **Base:** Eletro, Beta, Beta Full SP.
- **Inferência:** projetos com Cross-Check tendem a ter rampa de rejeito dedicada e não compartilhada com outros motivos de rejeito do sorter. · **Confiabilidade:** média · **Base:** ausência de menção de rampa compartilhada nas evidências.

---

## Dependências (grafo)
- **Entra depois de:** [[order-start]] → [[picking-fullcase]] → indução no [[sorter]]
- **Executado em:** [[sorter]] (portal de leitura, PLC)
- **Sai para (aprovado):** rampa de destino correta → [[sorter]] fluxo normal
- **Sai para (reprovado):** rampa de rejeito → [[sorter-rejeito]] → double check manual → reindução
- **Consulta:** [[integracao-pedidos]] (volumes/remessas WMS→WCS, SKU × pedido)
- **Variante pai:** [[conferencia]] (Cross-Check é subtópico; gate `st7` ⊂ seção Sorter)
- **Paralelo sem sorter:** [[conferencia-manual]] (amostragem/auditoria — fluxo distinto, sem PLC)
