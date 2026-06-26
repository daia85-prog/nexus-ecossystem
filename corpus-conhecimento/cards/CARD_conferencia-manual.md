# Conferência Manual — Knowledge Card

> CARD do subtópico **Conferência Manual (Auditoria / Amostragem)**. Subtópico de [[conferencia]]: cobre os volumes auditados fora do fluxo principal — desvio por amostragem randômica e/ou clientes especiais/KIT SKU. Fonte: Top 10 (NavePark, BRF Salvador) + complementares. O ED usa este arquivo para gerar a subseção "Conferência Manual / Auditoria" dentro do capítulo de Conferência, **apenas quando `cf_t2` contém `conf_sample`** (e/ou outros gatilhos documentados nas Condicionais).

---

## Tags
`conferencia-manual` `conferência-manual` `auditoria` `amostragem` `percentual-amostral`
`sorteio-qualidade` `supervisor` `auditoria-volume` `blind-check` `conferencia-cega`
`cliente-especial` `kit-sku` `corte-supervisor` `divergencia-peso` `shortpicking`
`cf_gate` `cf_t2` `conf_sample` `conf_client` `embalagem-especial`

---

## Metadados
- **Bloco:** conferencia
- **Gate:** subconjunto de `cf_gate = yes` **+** `cf_t2` contém `conf_sample` (e/ou `conf_client` para variante de clientes especiais/KIT SKU)
- **Card pai:** [[conferencia]] — a conferência manual é uma modalidade dentro do fluxo de conferência geral
- **Subtópicos relacionados:** [[cross-check]] (gate `st7`), [[packing]], [[pesagem]]
- **Depende de:** [[order-start]], [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (origem do volume desviado), [[conferencia]] (fluxo principal)
- **Influencia:** [[packing]] (volume aprovado segue após auditoria), [[etiquetas]] (reimpressão pós-corte), [[integracao-pedidos]] (confirmação de corte ao WMS)
- **Cruza com:** [[shortpicking]] (volume com corte), [[pesagem]] (balança dinâmica como gatilho de desvio)

---

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{conf_tem}}` | `cf_gate` | select | yes / no / tbd |
| `{{conf_desvio}}` | `cf_t2` | multi | `conf_sample`=Amostragem · `conf_weight`=Balança · `conf_client`=Por cliente · `conf_100`=100% itens · tbd |
| `{{conf_percentual}}` | campo livre / observação | texto livre | percentual de amostragem configurável (ex: "5%", "10%") |
| `{{conf_tolerancia}}` | `cf4` | texto livre | tolerância da balança em gramas (ex: "260g, múltiplo de 20g") |
| `{{conf_tipo}}` | `cf_t1` | multi | `conf_blind`=Cega · `conf_item`=Item a Item · `conf_multi`=Multiplicador · `conf_ean`=Bipa EAN · tbd |

> **Multi-select** usa `|||` como separador no kickoff. `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base aplicável quando `cf_gate = yes` + `cf_t2` contém `conf_sample`. O ED parte daqui e aplica as condicionais.)*

A Conferência Manual (também chamada de **Auditoria** ou **Sorteio de Qualidade**) é uma estação dedicada à inspeção aprofundada de volumes selecionados fora do fluxo principal de picking. Ela recebe volumes desviados pela **balança dinâmica** (divergência de peso) ou escolhidos por **amostragem randômica** configurável. O objetivo é garantir que a quantidade de itens e o peso real do volume estejam em total conformidade com o pedido.

**Gatilhos de desvio para esta estação:**
- Divergência de peso detectada pela balança dinâmica (peso real fora da tolerância configurada)
- Seleção por amostragem randômica (percentual `{{conf_percentual}}` dos volumes fracionados)
- Shortpicking identificado durante o picking

**Fluxo operacional padrão:**

1. **Abertura do processo.** O operador acessa a tela de conferência do WCS (desktop) e realiza a leitura do LPN (etiqueta do volume/caixa). O WCS exibe imediatamente o **motivo do desvio** (ex: "Divergência de Peso", "Auditoria de Qualidade" ou "Shortpicking"), sem revelar a lista de itens esperados ao conferente.

2. **Conferência cega (Blind Check).** O operador realiza a leitura dos itens **um a um**, sem ver as quantidades esperadas no pedido. O WCS valida silenciosamente cada bipagem contra o pedido real, garantindo a acuracidade total e eliminando viés de confirmação.

3. **Tratativa de divergências.**
   - **Sobra:** Caso o sistema identifique itens extras ao final da bipagem, o operador retira o excedente da caixa antes de prosseguir.
   - **Falta:** Se houver ausência de produtos, o operador pode:
     - **Completar a caixa** — localiza o item na posição original de coleta e bipa; ou
     - **Acionar "Encerrar Conferência"** — e escolher entre **Cortar** ou **Coletar (Novo Volume)**.

4. **Finalização e corte.** Ao encerrar com itens faltantes, o operador seleciona uma das opções:
   - **Cortar:** A confirmação exige **autenticação de supervisor** (senha ou crachá). Sem essa aprovação o corte não é efetivado. Após aprovação, o WCS registra os itens como cortados e envia a informação ao WMS.
   - **Coletar (Novo Volume):** O WCS registra a pendência e permite que os itens faltantes sejam coletados em um novo volume futuro para completar o pedido.

5. **Reimpressão de etiqueta.** Havendo corte, o WCS reimprime automaticamente a etiqueta do volume considerando apenas os itens efetivamente coletados. A nova etiqueta substitui a original.

6. **Conclusão e rastreabilidade.** O WCS registra a auditoria como concluída, os operadores envolvidos e envia a confirmação ao WMS. O volume aprovado segue para a etapa de Packing.

---

## Condicionais

### Gatilho de desvio — derivado de `cf_t2`

#### SE `cf_t2` contém `conf_sample` (Amostragem / Sorteio de Qualidade) → ADICIONA subseção "Amostragem Randômica"
O WCS seleciona um **percentual configurável** (`{{conf_percentual}}`) dos volumes fracionados de forma **randômica** (não sequencial) para auditoria. O parâmetro é ajustável pela operação sem necessidade de deploy. Volumes já desviados por outra regra (balança, shortpicking, flag cliente) não entram no cálculo de amostragem.

#### SE `cf_t2` contém `conf_weight` (Balança / Check Weight) → ADICIONA subseção "Desvio por Peso"
Volumes com divergência de peso detectada pela balança dinâmica são encaminhados para a conferência manual. A tolerância configurada é `{{conf_tolerancia}}`. O motivo exibido na tela é "Divergência de Peso".

#### SE shortpicking está em escopo → ADICIONA em "Gatilhos de desvio"
Volumes que sofreram **shortpicking** (quantidade separada < solicitada) são desviados para conferência manual para análise e tratativa. O motivo exibido é "Shortpicking".

### Variante: Clientes Especiais / KIT SKU — derivado de `cf_t2` contém `conf_client`

#### SE o projeto possui clientes especiais com KIT SKU → ADICIONA subseção "Conferência Clientes Especiais"
Pedidos marcados como especiais (`especial = TRUE` na integração de pedidos) passam por fluxo diferenciado:

1. O operador bipa o LPN; o sistema alerta visualmente que é um **Cliente Especial** e exibe as instruções de embalagem (`embalagem_especial`).
2. A conferência é cega: o sistema **não exibe** a composição nem as quantidades esperadas.
3. Ao atingir a quantidade total exata prevista para o SKU, o WCS **imprime automaticamente** a etiqueta específica do kit.
4. O operador cola a etiqueta no saquinho e **obrigatoriamente bipa a etiqueta impressa** para confirmar o ensacamento.
5. Se existirem múltiplos SKUs no pedido, o processo se repete integralmente para cada um.
6. Em caso de falta, o operador aciona finalização manual e opta por Cortar ou Completar.

### Método de conferência — derivado de `cf_t1`

#### SE `cf_t1` contém `conf_blind` (ou padrão da estação) → APLICA Conferência Cega
A estação de conferência manual opera em modo **cego por padrão**: o WCS não exibe a lista de itens ou quantidades esperadas. Este é o comportamento padrão da auditoria (NavePark).

#### SE `cf_t1` contém `conf_item` → ADICIONA "Item a Item explícito"
Cada item é lido individualmente; o WCS contabiliza e valida contra o pedido. Comportamento padrão e implícito no fluxo cego.

#### SE `cf_gate = no` ou `tbd` → OMITE esta subseção inteiramente.

---

## Observações Livres do Kickoff
Campos relevantes: `cf2` (estações), `cf4` (tolerância da balança), `conf_percentual` (percentual amostral — geralmente informado em texto livre ou observação).

O ED deve:
- **`cf2`** → mencionar o número de estações de conferência manual (ex: "A operação conta com N estações de auditoria").
- **`cf4`** → preencher `{{conf_tolerancia}}` com o valor exato (ex: "tolerância de 260g, arredondada ao múltiplo de 20g mais próximo").
- **`conf_percentual`** → preencher com o percentual informado em observação (ex: "5% dos volumes fracionados"). Se não informado, registrar como `[a definir com a operação]`.
- **Observação que restringe escopo** (ex: "auditoria apenas para itens de alto valor") → SUBSTITUIR o trecho de gatilhos de desvio pela restrição explícita.
- **Observação que adiciona etapa** não coberta pelo padrão → ADICIONAR como subseção ao final do fluxo, com `[OBS INTERNA]` se precisar de validação.

---

## Regras de Negócio
- **RN-01** (todos): a conferência manual recebe apenas volumes desviados por critério configurado (balança, amostragem, shortpicking, flag cliente) — volumes não desviados não chegam a esta estação.
- **RN-02** (amostragem): o cálculo de percentual amostral considera **apenas fracionados**; volumes full case e volumes já desviados por outra regra são excluídos do sorteio.
- **RN-03** (amostragem): a seleção é **randômica**, não sequencial — não há padrão previsível de seleção de volumes.
- **RN-04** (todos): o corte de item faltante exige **autenticação de supervisor** (senha ou crachá); sem aprovação o corte não é efetivado.
- **RN-05** (todos): ao registrar corte, o WCS reimprime automaticamente a etiqueta do volume com os itens efetivamente coletados, substituindo a original.
- **RN-06** (todos): o WCS envia a confirmação de corte/conferência ao WMS ao finalizar a auditoria.
- **RN-07** (check weight): a comparação peso real × esperado usa tolerância configurável em gramas; balanças dinâmicas medem em passos fixos (ex: 20g). → herda RN-05 do [[conferencia]].
- **RN-08** (clientes especiais / KIT SKU): a impressão automática da etiqueta do kit só ocorre quando a quantidade exata do SKU é atingida; abaixo disso o sistema não imprime — o operador deve acionar finalização manual.
- **RN-09** (clientes especiais / KIT SKU): a bipagem da etiqueta do kit após colagem é **obrigatória** para confirmar o ensacamento; não é possível avançar sem essa leitura.
- **RN-10** (clientes especiais / KIT SKU): o campo `embalagem_especial` da integração de pedidos é exibido obrigatoriamente na tela quando `especial = TRUE`, antes de qualquer bipagem.

---

## Insights e Padrões

### Padrões identificados
- A conferência manual é **sempre cega** nos projetos onde aparece (NavePark, BRF Salvador) — o WCS nunca exibe quantidades esperadas ao conferente nesta estação, diferentemente da conferência padrão onde o método é configurável.
- O **corte com autenticação de supervisor** é universal nesta estação: toda aprovação de falta exige senha/crachá de supervisor, mais rigoroso do que em algumas variantes da conferência padrão.
- O fluxo **Sobra / Falta / Cortar / Coletar** é o núcleo invariante entre os projetos Top 10.

### Variações significativas
- **NavePark** possui a variante de **Clientes Especiais / KIT SKU** com impressão automática de etiqueta de kit e bipagem obrigatória pós-colagem — fluxo exclusivo desta modalidade, não presente no padrão.
- **BRF Salvador** referencia o crosscheck (comparação entre etiqueta de material e etiqueta de expedição PVAR) com parâmetro liga/desliga restrito por nível de acesso — embora o trecho extraído trate do crosscheck, indica integração próxima entre auditoria manual e validação de etiqueta.
- O percentual de amostragem é sempre **configurável pela operação** sem necessidade de deploy — detalhe operacionalmente relevante (NavePark).

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo dedicado no kickoff para **percentual de amostragem** (`conf_percentual`) — hoje informado apenas em texto livre ou observação. Candidato a campo numérico no `cf_t2` expandido.
- Não há campo explícito para **"corte exige supervisor"** na conferência manual — é implícito nesta estação mas não há checkbox formal. Candidato a checkbox (herda lacuna do CARD pai [[conferencia]]).
- A variante de **clientes especiais / KIT SKU** não tem campo próprio no kickoff — aparece em texto livre ou via `conf_client`. Candidato a sub-opção ou checkbox separado.
- Não há distinção no kickoff entre **amostragem de fracionado puro** e **amostragem de pedido misto** (fracionado + full case no mesmo pedido).

### Inferências
- **Inferência:** quando `cf_t2` inclui `conf_sample`, a operação quase sempre também usa `conf_weight` (balança) — os dois gatilhos coexistem com alta frequência. · **Confiabilidade:** alta · **Base:** NavePark (ambos presentes), padrão recorrente.
- **Inferência:** a conferência manual cega (`conf_blind` implícito) é o método padrão desta estação mesmo quando `cf_t1` não está explicitamente marcado como `conf_blind` — o contexto de auditoria pressupõe cegueira. · **Confiabilidade:** alta · **Base:** NavePark (descrito como padrão da estação).

---

## Dependências (grafo)
- **Entra depois de:** [[order-start]] → [[picking-pbl]]/[[picking-fullcase]]/[[picking-cart]] → (balança dinâmica / sorteio randômico) → **conferencia-manual**
- **Gatilho pai:** [[conferencia]] (o desvio para esta estação é gerenciado pelo módulo de conferência geral; esta é uma submodalidade)
- **Sai para:** [[packing]] → [[sorter]]/[[etiquetas]]
- **Consulta/alimenta:** [[integracao-pedidos]] (confirmação de corte ao WMS, flag `especial`, campo `embalagem_especial`), [[pesagem]] (check weight / balança dinâmica), [[shortpicking]] (volumes com corte), [[etiquetas]] (reimpressão pós-corte e impressão de etiqueta de kit)
- **Variante paralela:** [[cross-check]] (fullcase, gate `st7`) — fluxo distinto, não se mistura com conferência manual
