# Shortpicking — Knowledge Card

> CARD abrangente do tópico **Shortpicking**. Fonte: Top 10 (BELEZA Fase 1, BELEZA Fase 2, BP, Beta, NavePark) + complementares (BR, Beta Esteio, Beta Full SP, Guatemala, Payless). O ED usa este arquivo para gerar o capítulo de Shortpicking do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`shortpicking` `short-picking` `corte` `ruptura` `falta-estoque` `motivo-corte`
`supervisor-corte` `conferencia-shortpicking` `picking-corte` `decremento`
`ajuste-quantidade` `botao-corte` `corte-led` `corte-pdv` `corte-order-start`
`corte-fullcase` `relatorio-shortpicking` `integracao-corte` `pendencia-picking`
`pbl-shortpicking` `cart-shortpicking`

## Metadados
- **Bloco:** separacao
- **Gate:** sem gate exclusivo — shortpicking é um sub-fluxo dentro de qualquer picking (`p1` para PBL/FlowRack, `ct1` para Picking Cart, `fc1` para Full Case)
- **Subtópicos com CARD próprio:** nenhum — shortpicking é tratado inteiramente neste CARD
- **Depende de:** [[order-start]] (missão/tarefa criada), [[picking-pbl]] · [[picking-cart]] · [[picking-fullcase]] (contexto em que o corte ocorre)
- **Influencia:** [[conferencia]] (volumes com shortpicking são desviados para conferência), [[integracao-pedidos]] (flags de corte/confirmação parcial enviadas ao WMS), [[etiquetas]] (reimpressão pós-corte no fluxo de conferência)
- **Cruza com:** [[reabastecimento]] (corte via Order Start ocorre quando não há saldo nem em picking nem em transfer)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{sp_sup_pbl}}` | `s1p` | select | `yes`=Corte exige supervisor (PBL) · `no`=Não exige · `tbd` |
| `{{sp_caixa_pbl}}` | `s2p` | select | `yes`=Pede caixa ao cortar (PBL) · `no`=Não pede · `tbd` |
| `{{sp_motivo_pbl}}` | `s3p` | select | `yes`=Motivo obrigatório (PBL) · `no`=Não obrigatório · `tbd` |
| `{{sp_sup_cart}}` | `s1c` | select | `yes`=Corte exige supervisor (Cart) · `no`=Não exige · `tbd` |
| `{{sp_caixa_cart}}` | `s2c` | select | `yes`=Pede caixa ao cortar (Cart) · `no`=Não pede · `tbd` |

> `tbd`/vazio → omitir a subseção correspondente. Campos `s1p`/`s2p`/`s3p` pertencem ao bloco PBL_Q (por linha); `s1c`/`s2c` pertencem ao bloco Picking Cart.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com picking fracionado. O ED parte daqui e aplica as condicionais.)*

O **shortpicking** (também chamado de corte) ocorre quando o operador, ao executar a separação, verifica que a quantidade disponível na posição é menor do que a solicitada pelo pedido. Nesse caso, o operador coleta apenas o que há disponível e registra a divergência no sistema, encerrando o processo para aquele item sem bloquear o fluxo da operação.

**Definição:** ShortPicking = corte ou decremento da quantidade de volumes separados (pendência). A quantidade coletada é menor que a quantidade solicitada por falta de estoque na posição de picking.

**Fluxo operacional padrão:**

1. **Identificação da ruptura.** Durante a separação, o operador constata que a quantidade física disponível na posição é inferior à quantidade exibida no sistema (LED ou tela do dispositivo).

2. **Registro do corte.** O operador aciona o mecanismo de ajuste disponível para o tipo de picking em uso (ver **Condicionais — Mecanismo de Corte por Tipo de Picking**) e informa a quantidade real coletada.

3. **Confirmação e leitura.** O operador confirma o ajuste. O WCS registra a quantidade coletada como a quantidade confirmada para aquele item/volume e marca o item com status de corte.

4. **Desvio automático para conferência.** Ao identificar shortpicking em um volume, o WCS desvia automaticamente o volume para a área de conferência/auditagem para tratativa operacional. *(Ver também [[conferencia]].)*

5. **Notificação ao WMS.** O WCS envia ao WMS a confirmação de picking com a quantidade efetivamente coletada, indicando a divergência em relação ao solicitado (confirmação parcial). *(Ver [[integracao-pedidos]].)*

---

## Condicionais

### Mecanismo de Corte por Tipo de Picking

#### SE o projeto tem PBL/FlowRack (`p1 = yes`) → ADICIONA subseção "Corte via LED"
O corte via LED é realizado pelos botões integrados aos displays PBL. O operador decrementa o valor indicado no sistema conforme a quantidade realmente disponível na posição, registrando a quantidade correta coletada de forma imediata e precisa.

#### SE o projeto tem Picking Cart (`ct1 = yes`) → ADICIONA subseção "Corte via Picking Cart (PDV)"
Na separação via Picking Cart, a tela do dispositivo (PDV/coletor) disponibiliza um botão específico para ajuste de quantidade coletada. O operador aciona o botão, informa a quantidade real coletada, confirma o ajuste e realiza a leitura da caixa/posição correspondente no carrinho, garantindo o correto registro da separação para aquele volume.

#### SE o projeto tem Picking Cart com PDV + LED simultâneos → ADICIONA em "Corte via Picking Cart (PDV)"
O corte pode ser realizado diretamente no PDV ou confirmando as posições de LED acesa (na cor que indica necessidade de leitura item a item). Ao pressionar o LED dessas posições, abre-se um pop-up no PDV para confirmar o corte do item.

#### SE o projeto tem Full Case (`fc1 = yes` E corte é escopo) → ADICIONA subseção "Corte via Full Case (Coleta Parcial)"
Caso o operador não encontre produtos suficientes em um endereço, ele ajusta a quantidade no coletor e segue para o próximo endereço. Ao finalizar a coleta com itens pendentes, o operador aciona a opção **"Finalizar Coleta Parcial"** no coletor. O WCS abre uma tela para que o operador leia as etiquetas dos volumes que não serão coletados — essas etiquetas são invalidadas e os itens registrados como corte de Full Case, retroalimentando o WMS via Confirmação de Picking com status `parcial`.

#### SE o projeto tem PBL com Order Start (`p1 = yes` E `os_gate = yes`) → ADICIONA subseção "Corte via Order Start"
Para missões que não possuem saldo disponível em estoque na posição de picking, o WCS não permitirá o início da separação até que ocorra o devido reabastecimento. A exceção ocorre quando o item não possui saldo nem nas posições de picking nem no transfer: nesses casos, o WCS libera a missão já com o item cortado, sem necessidade de interação do operador. A tratativa de divergência de estoque é feita manualmente no WMS, com auxílio de relatório que evidencia esse tipo de corte.

### Campos de controle de corte — PBL (`s1p`, `s2p`, `s3p`)

#### SE `s1p = yes` → ADICIONA em "Corte via LED"
O registro do corte via PBL exige **autenticação de supervisor**. O operador aciona o ajuste de quantidade, mas a confirmação final só é liberada após o supervisor validar a operação.

#### SE `s2p = yes` → ADICIONA em "Corte via LED"
Ao registrar o corte via PBL, o sistema solicita que o operador informe ou bipe a **caixa** associada ao volume que sofreu o corte, garantindo a rastreabilidade do volume afetado.

#### SE `s3p = yes` → ADICIONA em "Corte via LED"
O registro do motivo do corte é **obrigatório** via PBL: o operador deve selecionar ou digitar o motivo da ruptura (ex.: posição vazia, produto danificado, divergência de contagem) antes de confirmar o ajuste.

### Campos de controle de corte — Picking Cart (`s1c`, `s2c`)

#### SE `s1c = yes` → ADICIONA em "Corte via Picking Cart (PDV)"
O registro do corte via Picking Cart exige **autenticação de supervisor**. O operador realiza o ajuste na tela do dispositivo, mas a confirmação final depende da validação do supervisor.

#### SE `s2c = yes` → ADICIONA em "Corte via Picking Cart (PDV)"
Ao registrar o corte via Picking Cart, o sistema solicita a **leitura da caixa** correspondente no carrinho, além da informação da quantidade coletada, garantindo o correto vínculo entre o corte e o volume afetado.

### Relatório de Shortpicking

#### SE o projeto tem relatório de shortpicking → ADICIONA subseção "Relatório de Shortpicking"
O WCS disponibiliza uma tela dedicada que apresenta, de forma clara e direta, todas as remessas que tiveram ocorrência de shortpicking. O usuário pode aplicar filtro por data; o sistema retorna a lista de remessas que registraram shortpicking no período selecionado. *(Presente em Beta, Beta Esteio, Beta Full SP — candidato a campo booleano no kickoff.)*

### Integração de confirmação de corte

#### SE o projeto tem integração WCS→WMS para confirmação de picking (qualquer tipo) → ADICIONA em "Notificação ao WMS"
O WCS envia ao WMS a confirmação de execução do picking incluindo as divergências (shortpicking) entre o solicitado e o executado. O formato e protocolo dependem do campo `in1` (tipo de integração); em projetos IDoc/SAP-EWM a mensagem usa o status `parcial` na Confirmação de Picking.

---

## Observações Livres do Kickoff
Campos relevantes: `s1p` (supervisor PBL), `s2p` (pede caixa PBL), `s3p` (motivo obrigatório PBL), `s1c` (supervisor Cart), `s2c` (pede caixa Cart), mais texto livre em observações de picking.

O ED deve:
- **`s1p`/`s1c` = yes** → mencionar explicitamente a exigência de supervisor no fluxo do corte do tipo correspondente.
- **`s2p`/`s2c` = yes** → descrever o passo de leitura/bipe da caixa como etapa obrigatória dentro do fluxo de corte.
- **`s3p` = yes** → incluir a seleção de motivo como etapa obrigatória antes da confirmação do corte via PBL.
- **Observação que descreve motivos de corte pré-definidos** → LISTAR os motivos como exemplos dentro da subseção de motivo obrigatório.
- **Observação sobre tratativa pós-corte no WMS** → ADICIONAR como subseção nomeada ao final do fluxo, com `[OBS INTERNA]` se precisar de validação da operação.

---

## Regras de Negócio
- **RN-01** (todos): shortpicking ocorre exclusivamente durante a execução de picking — é um sub-fluxo, não uma etapa autônoma; não possui gate próprio no kickoff.
- **RN-02** (todos): ao registrar shortpicking, o WCS confirma a quantidade coletada como quantidade separada; a diferença entre quantidade solicitada e coletada é registrada como corte/pendência.
- **RN-03** (todos): todo volume que sofre shortpicking é **desviado automaticamente para conferência** pelo WCS ao final da linha de picking fracionado.
- **RN-04** (`s1p = yes` / `s1c = yes`): o registro do corte exige **autenticação de supervisor** — o operador inicia o ajuste mas não pode confirmá-lo sem a validação do supervisor.
- **RN-05** (`s2p = yes` / `s2c = yes`): a leitura/bipe da caixa associada é etapa obrigatória no fluxo de corte; sem ela o registro não é concluído.
- **RN-06** (`s3p = yes`): a seleção do motivo do corte é obrigatória antes da confirmação; o sistema não avança sem o preenchimento.
- **RN-07** (corte via Order Start): quando não há saldo nem em picking nem em transfer, o WCS libera a missão já com o item marcado como cortado — sem interação do operador; a divergência é tratada no WMS via relatório específico.
- **RN-08** (Full Case): o corte de Full Case usa o mecanismo **"Finalizar Coleta Parcial"** no coletor; as etiquetas dos volumes não coletados são invalidadas e o WMS recebe confirmação de picking com status `parcial`.
- **RN-09** (todos): o WCS envia ao WMS a confirmação de picking incluindo as divergências de shortpicking; a quantidade reportada é a efetivamente coletada, não a solicitada.
- **RN-10** (NavePark): o corte registrado via LED **não é efetivado imediatamente** — só é de fato confirmado após tratativa no posto de conferência.

---

## Insights e Padrões

### Padrões identificados
- O **núcleo do fluxo** (operador detecta ruptura → decrementa quantidade → sistema registra corte → volume vai para conferência) é idêntico em BELEZA, BP, Beta, NavePark, BR, Beta Esteio, Beta Full SP e Guatemala — é o comportamento base consolidado.
- **Corte via LED** é o mecanismo mais universal: presente em todos os projetos com PBL. **Corte via PDV/Cart** aparece em todos os projetos com Picking Cart.
- A **definição oficial** de shortpicking é uniforme entre os projetos: "corte ou decremento da quantidade de volumes separados (pendência)" — Beta, BR, Beta Esteio, Beta Full SP.
- O desvio automático para conferência pós-shortpicking aparece em 100% dos projetos fracionados com conferência ativa.

### Variações significativas
- **BELEZA Fase 2** introduz o **corte via Order Start** — corte pré-missão quando não há saldo em nenhuma posição; os demais projetos só tratam corte durante a execução.
- **NavePark** possui uma particularidade relevante: o corte via LED é **pendente** até a conferência — o sistema registra a intenção de corte, mas só o efetiva após validação no posto de conferência. Isso é diferente dos demais projetos onde o corte é imediato.
- **Beta Esteio** é o único projeto com **corte de Full Case** documentado explicitamente como sub-fluxo separado ("Finalizar Coleta Parcial" + invalidação de etiquetas).
- **Guatemala** detalha o fluxo via display sem PDV: o operador decrementa diretamente no display e, ao confirmar a separação com quantidade menor, a integração de shortpicking é disparada automaticamente — sem etapa adicional de confirmação.
- **Beta / Beta Esteio / Beta Full SP** oferecem **relatório de shortpicking** (filtro por data, lista de remessas afetadas) — não documentado em outros projetos Top 10; candidato a campo booleano no kickoff.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **"relatório de shortpicking"** — presente em Beta/Beta Esteio/Beta Full SP, ausente nos demais; hoje inferido por texto livre.
- Não há campo para **"corte efetivado imediatamente vs. pendente até conferência"** (distinção NavePark) — pode gerar ambiguidade na especificação.
- Os campos `s1p`, `s2p`, `s3p` existem no kickoff apenas para PBL — **Picking Cart tem `s1c`/`s2c` mas não tem campo equivalente a `s3p`** (motivo obrigatório). Lacuna de paridade.
- Não há campo para **"motivos de corte pré-definidos"** — quando `s3p = yes`, os valores possíveis são definidos por texto livre, não por lista parametrizada.

### Inferências
- **Inferência:** quando `p1 = yes` (PBL) ou `ct1 = yes` (Cart), shortpicking está implicitamente em escopo — não há projeto com picking fracionado sem tratativa de corte. **Confiabilidade:** muito alta. **Base:** 100% dos projetos analisados.
- **Inferência:** quando `cf_gate = yes` (conferência ativa), o shortpicking é o principal gatilho de desvio de volumes para conferência — mais frequente que check weight ou amostragem nos projetos fracionados. **Confiabilidade:** alta. **Base:** BELEZA, Beta, BR, Beta Esteio, NavePark.
- **Inferência:** `s1p = yes` (supervisor obrigatório no corte) é mais comum em projetos com alto risco de ruptura deliberada (alto valor, regulados). **Confiabilidade:** baixa (inferência comportamental, não documentada diretamente). **Base:** BELEZA.

---

## Dependências (grafo)
- **Entra depois de:** [[order-start]] → [[picking-pbl]] / [[picking-cart]] / [[picking-fullcase]] *(shortpicking é sub-fluxo durante a execução do picking)*
- **Sai para:** [[conferencia]] *(volume com corte é desviado automaticamente)*
- **Consulta/alimenta:** [[integracao-pedidos]] *(confirmação parcial/corte enviada ao WMS)*, [[reabastecimento]] *(corte via Order Start aciona verificação de saldo em transfer)*
- **Influencia indiretamente:** [[etiquetas]] *(reimpressão após tratativa do corte na conferência)*
