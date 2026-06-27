# Packing — Knowledge Card

> CARD abrangente do subtópico **Packing** (fechamento de volume). Fonte: Top 10 com `Prioridade: SIM` (BP, NavePark) → **Texto Padrão**; complementares com `Prioridade: não` (BR — seladora automática) → variações/insights. O ED usa este arquivo para gerar o capítulo de Packing do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`packing` `embalagem` `fechamento-de-caixa` `fechamento-de-volume` `geracao-de-volume`
`troca-de-caixa` `caixa-final` `caixa-plastica` `etiqueta-de-packing` `etiqueta-final`
`lacre` `seladora` `seladora-automatica` `estacao-de-packing` `posto-de-packing`
`reinducao` `tela-packing` `packing-automatico` `packing-manual` `impressora-packing`
`rastreabilidade-volume` `reuso-caixa`

## Metadados
- **Bloco:** conferencia
- **Gate:** `pk1 = yes`
- **Depende de:** [[conferencia]] (volume aprovado/conferido segue para packing) · [[order-start]] (origem da caixa plástica e do volume)
- **Influencia:** [[sorter]] (etiqueta de packing lida no portal para desvio em rampa) · [[etiquetas]] (impressão da etiqueta final)
- **Cruza com:** [[etiquetas]] · [[sorter]] · [[packing-termolabil]] (variante para itens termolábeis/cadeia fria)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{pk_tem}}` | `pk1` | select | yes / no / tbd **[GATE]** |
| `{{pk_auto}}` | `pk_auto` | YN | yes=Packing automático · no=Manual · tbd |
| `{{pk_imp}}` | `pk_imp` | YN | yes=Tem impressora no packing · no · tbd |
| `{{pk_imp_f}}` | `pk_imp_f` | select (FN) | `invent`=Invent · `client`=Cliente · `both_resp`=Ambos · tbd [`pk_imp:yes`] |
| `{{pk_imp_t}}` | `pk_imp_t` | select | `imp_manual`=Manual · `imp_auto`=Automática [`pk_imp:yes`] |
| `{{pk_troca}}` | `pk_troca` | YN | yes=Troca de caixa (plástica→final) · no · tbd |
| `{{pk_etiq}}` | `pk_etiq` | YN | yes=Troca/reimprime etiqueta · no · tbd |

> Todos os campos `pk_*` dependem do gate `pk1 = yes`. `pk_imp_f` e `pk_imp_t` só aparecem se `pk_imp = yes`. `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada presente nos projetos com `pk1 = yes`. O ED parte daqui e aplica as condicionais.)*

O Packing é a estação onde o WCS realiza o **fechamento do volume** antes da expedição: o operador embala o pedido na caixa de envio, o WCS gera o volume e imprime a **etiqueta final** que acompanhará a caixa pelos processos subsequentes (sorter, PTL). Só chegam ao packing volumes que foram **aprovados na aferição de peso** (balança dinâmica) ou **conferidos manualmente** nas estações de conferência — o WCS não permite o fechamento de volumes não validados.

A operação conta com `{{pk_estacoes}}` estações/postos de packing *(quando informado em observação livre)*.

**Fluxo operacional padrão:**

1. **Abertura da tela de packing.** O operador acessa a tela de packing no WCS (desktop) e **seleciona o posto de packing** em que se encontra.

2. **Leitura do volume.** O operador realiza a leitura da **caixa plástica** que contém os itens separados. O WCS reconhece a caixa e valida que o volume está apto ao fechamento (aprovado em peso ou conferido). *Volumes não aprovados/conferidos são bloqueados pelo sistema.*

3. **Embalagem do pedido / troca de caixa.** O operador **transfere os itens da caixa plástica para a caixa final** de envio (ver **Condicionais — Troca de Caixa**). O WCS garante que todos os itens do volume sejam transferidos corretamente.

4. **Geração do volume e impressão da etiqueta final.** O WCS **gera o volume** e dispara a **impressão da etiqueta final** (ver **Condicionais — Impressora no Packing**). A etiqueta carrega as informações do volume — endereço/cliente, número do pedido, transportadora, número do volume e peso — e garante a rastreabilidade do volume nos processos seguintes.

5. **Fechamento / lacre.** A caixa final é fechada (fechamento da tampa ou aplicação de lacre de segurança) e a etiqueta é **colada na caixa** após o lacre.

6. **Reindução e seguimento.** O volume fechado é reinserido na esteira principal. O WCS **registra a conclusão** do packing (auditoria concluída com sucesso), permitindo que o volume siga para o **Sorter / expedição** sem ser desviado novamente. A etiqueta final é lida no sorter (desvio na rampa) e, quando aplicável, no PTL (alocação no destino). → ver [[sorter]], [[etiquetas]].

7. **Reuso da caixa plástica.** Após a transferência dos itens, a caixa plástica vazia retorna ao ciclo de separação/alocação (Order Start), em parte dos projetos transportada por AMRs. → ver [[order-start]].

---

## Condicionais

### Packing Automático vs Manual — derivado de `pk_auto`

#### SE `pk_auto = no` (Packing Manual) → mantém o Texto Padrão
O operador executa manualmente a leitura, a transferência dos itens e a aplicação da etiqueta nas estações de packing. É o default quando `pk_auto = tbd`. *(Visto em BP, NavePark — estações manuais item a item.)*

#### SE `pk_auto = yes` (Packing Automático) → SUBSTITUI os passos 3 a 5 do Texto Padrão
O fechamento e lacre ocorrem de forma **automatizada** por equipamento em linha (seladora automática acoplada à esteira), sem transferência manual de itens. O volume aprovado segue direto pela esteira: a seladora realiza o fechamento/lacre e o volume é **reinduzido** automaticamente na linha rumo ao sorter. → ver RN-05. *(Visto em BR — seladora Cetro fornecida pelo cliente.)*

### Impressora no Packing — derivado de `pk_imp` (+ `pk_imp_f`, `pk_imp_t`)

#### SE `pk_imp = yes` → ADICIONA subseção "Impressão da Etiqueta de Packing"
A estação de packing possui impressora dedicada para emissão da etiqueta final do volume.
- **`pk_imp_f` (fornecimento):** indicar quem fornece a impressora — `invent`=Invent · `client`=Cliente · `both_resp`=Ambos.
- **`pk_imp_t` (modo de impressão):**
  - `imp_auto` → a etiqueta é impressa **automaticamente** assim que o WCS reconhece a caixa e gera o volume (sem ação adicional do operador).
  - `imp_manual` → o operador **aciona manualmente** a impressão da etiqueta na tela de packing.

#### SE `pk_imp = no` → OMITE a subseção de impressão local
O volume é fechado no packing, mas a etiqueta final é emitida em outro ponto/processo (ex.: impressora compartilhada da linha ou impressão na conferência). → tratar fornecimento/distribuição em [[etiquetas]]. `[OBS INTERNA]` confirmar onde a etiqueta é emitida.

### Troca de Caixa — derivado de `pk_troca`

#### SE `pk_troca = yes` (Troca de Caixa) → ADICIONA/CONFIRMA passo 3 "Embalagem do pedido"
Há **troca de caixa**: os itens são transferidos da **caixa plástica** (tote, reutilizável na separação) para a **caixa final** de envio (papelão/embalagem do cliente). A caixa plástica vazia retorna ao ciclo (passo 7). *(Padrão em BP, NavePark.)*

#### SE `pk_troca = no` → SUBSTITUI o passo 3
**Não** há troca de caixa: o pedido é separado e expedido na **mesma caixa** (a caixa de picking é a caixa de envio). O packing limita-se a fechar/lacrar e etiquetar o volume na própria caixa; não há retorno de caixa plástica ao Order Start.

### Troca / Reimpressão de Etiqueta — derivado de `pk_etiq`

#### SE `pk_etiq = yes` (Troca de etiqueta) → ADICIONA em "Geração do volume"
No fechamento, a etiqueta da caixa plástica (etiqueta "burra" de separação) é **substituída** pela **etiqueta final** do volume, com as informações de expedição. A etiqueta final é a que segue válida para o sorter/PTL. *(Coerente com BP/NavePark, onde a caixa plástica usa etiqueta burra lida no portal.)*

#### SE `pk_etiq = no` → OMITE a troca de etiqueta
A etiqueta de identificação do volume é mantida desde a separação/conferência, sem substituição no packing.

### Outras condicionais

#### SE o projeto separa itens termolábeis / cadeia fria → ver [[packing-termolabil]]
Quando há embalagem específica para itens refrigerados/congelados (caixa térmica, gelo, controle de tempo de exposição), o tratamento é feito no CARD de [[packing-termolabil]], referenciando aqui.

#### SE `pk1 = no` ou `tbd` → OMITE o capítulo inteiro de Packing.

---

## Observações Livres do Kickoff
Campos de texto e observações livres associadas ao bloco de packing.

O ED deve:
- **Número de estações/postos de packing** (quando citado em observação) → preencher `{{pk_estacoes}}` na abertura do capítulo (ex.: "A operação conta com 12 estações de conferência/packing manuais para leitura item a item e fechamento de caixa" — NavePark).
- **Equipamento de fechamento específico** (ex.: marca/modelo da seladora, fornecedor) → mencionar na subseção de Packing Automático com o detalhe exato (ex.: "seladora automática Cetro, fornecida pelo cliente" — BR).
- **Layout de etiqueta definido em projeto** (ex.: "layout disponibilizado pela Spark/cliente") → registrar como observação, sem detalhar o layout (Round 2 / [[etiquetas]]).
- **Observação que adiciona etapa** não coberta pelo padrão (ex.: pesagem pós-fechamento, conferência de transportadora) → ADICIONAR como subseção nomeada ao final do fluxo, com `[OBS INTERNA]` se precisar de validação da operação.

---

## Regras de Negócio
- **RN-01** (todos): o WCS só permite a impressão/fechamento de volumes **aprovados na validação de peso** ou **conferidos manualmente**; volumes não validados são bloqueados no packing. *(BP, NavePark.)*
- **RN-02** (todos): a etiqueta final é **gerada pelo WCS** e usada para garantir a rastreabilidade do volume; é lida no **sorter** (desvio em rampa) e no **PTL** (alocação no destino). *(BP, NavePark.)*
- **RN-03** (todos com troca de caixa): após a transferência dos itens, a **caixa plástica é liberada para reuso**, retornando ao ciclo de separação/alocação (Order Start). *(BP, NavePark; transporte por AMR em NavePark.)*
- **RN-04** (todos): ao concluir o packing, o WCS **registra a conclusão** e **reinduz** o volume na esteira, permitindo seguir ao sorter **sem novo desvio**. *(NavePark.)*
- **RN-05** (projeto com seladora automática): o fechamento/lacre é executado por **seladora automática** acoplada à esteira; após o lacre o volume é reinduzido sem ação manual. *(BR — seladora Cetro fornecida pelo cliente. Específico de projeto.)*
- **RN-06** (NavePark): a etiqueta final carrega no mínimo **endereço/cliente, número do pedido, transportadora, número do volume e peso**; o **layout** é definido em tempo de projeto pelo cliente/integrador (Spark). *(Específico de projeto.)*
- **RN-07** (NavePark): quando há packing automático em linha, o packing pode ocorrer **como passo automático** para volumes aprovados em peso, sem passar por estação manual. *(Específico de projeto.)*

## Insights e Padrões
### Padrões identificados
- O **núcleo do fluxo** (selecionar posto → ler caixa plástica → transferir itens p/ caixa final → gerar volume + imprimir etiqueta final → lacrar → reinduzir → reusar caixa plástica) é praticamente idêntico entre **BP** e **NavePark** — é o padrão sólido do packing manual.
- A regra "só fecha volume aprovado em peso ou conferido" (RN-01) e o uso da etiqueta final como **chave de rastreio para sorter/PTL** (RN-02) aparecem em 100% dos projetos com packing.
- O **reuso da caixa plástica** (RN-03) é universal nos projetos com troca de caixa — ligando packing de volta ao Order Start.

### Variações significativas
- **BR** usa **seladora automática** (Cetro, fornecida pelo cliente): packing automático em linha, sem transferência manual — contraste direto com o packing manual de BP/NavePark.
- **NavePark** consolida **conferência + packing** nas mesmas 12 estações manuais (leitura item a item + fechamento de caixa) e descreve o packing também como **passo automático** para volumes aprovados em linha (modelo híbrido).
- **BP** separa explicitamente a estação de packing da conferência: todos os volumes de fracionado/cart vão obrigatoriamente ao packing após aferição de peso positiva.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **número de estações/postos de packing** — hoje só via observação livre. Candidato a campo `pk2` (texto).
- Não há campo para **tipo de fechamento** (manual / seladora automática / lacre de segurança) — `pk_auto` é YN e não distingue o equipamento. Candidato a select.
- Não há campo para **conteúdo/layout da etiqueta final** — aparece em texto livre (RN-06). Tratar em [[etiquetas]].
- Não há distinção explícita entre **conferência e packing na mesma estação** (NavePark) vs **estações separadas** (BP) — pode gerar ambiguidade no ED.

### Inferências
- **Inferência:** quando `pk_troca = yes`, o projeto quase sempre usa **caixa plástica reutilizável** na separação e **caixa final** (papelão) na expedição. · **Confiabilidade:** alta · **Base:** BP, NavePark, padrão recorrente.
- **Inferência:** `pk_auto = yes` (seladora) e troca manual de itens (`pk_troca = yes` com transferência humana) raramente coexistem — packing automático pressupõe expedição na própria caixa ou transferência automatizada. · **Confiabilidade:** média · **Base:** BR (automático) vs BP/NavePark (manual com troca).
- **Inferência:** projetos com sorter quase sempre têm packing com etiqueta final (etiqueta burra da caixa plástica é substituída pela final). · **Confiabilidade:** alta · **Base:** RN-02, BP, NavePark.

## Dependências (grafo)
- **Entra depois de:** [[conferencia]] (volume conferido) / aferição de peso aprovada → [[order-start]] (origem da caixa plástica e do volume)
- **Sai para:** [[sorter]] (etiqueta final lida no portal, desvio em rampa) → expedição/PTL
- **Consulta/alimenta:** [[etiquetas]] (impressão e layout da etiqueta final)
- **Variante paralela:** [[packing-termolabil]] (embalagem de cadeia fria)
- **Retorna para:** [[order-start]] (caixa plástica liberada para reuso)
