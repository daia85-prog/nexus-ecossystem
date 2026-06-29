# Picking Cart — Knowledge Card

> CARD abrangente do tópico **Picking Cart**. Fonte: Top 10 (BELEZA Fase 1, BELEZA Fase 2, BP, NavePark, BR) + complementares (Beta Esteio, Peter 2, Reverse). O ED usa este arquivo para gerar o capítulo de Picking Cart do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`picking-cart` `cart` `carrinho` `prateleira-movel` `separacao-carrinho`
`museu` `baixo-giro` `itens-baixo-giro` `order-start-picking-cart` `os-picking-cart`
`mapeamento-cart` `posicao-cart` `coleta-cart` `pdv` `coletor` `tablet`
`leitor-codigo-barras` `scanner-mao` `destino-pos-coleta` `indução-flowrack`
`corte-cart` `finalizar-coleta` `shortpicking-cart` `pede-caixa` `supervisor-corte`
`bipagem-item-a-item` `rastreabilidade` `volume-pega` `tarefa-separacao`

---

## Metadados
- **Bloco:** separacao
- **Gate:** `ct1 = yes`
- **Subtópicos com CARD próprio:** nenhum (picking cart é tratado integralmente aqui)
- **Depende de:** [[order-start]] (cria o volume/pega e imprime etiqueta), [[picking-pbl]] (pode ser complementar ao cart no mesmo fluxo), [[wave-integracao]] (prioridade das tarefas vem da integração)
- **Influencia:** [[conferencia]] (volumes do cart seguem para balança/conferência), [[picking-pbl]] (cart → indução na linha do FlowRack), [[shortpicking]] (cortes registrados no cart alimentam conferência)
- **Cruza com:** [[reabastecimento]] (uso secundário do cart para reabastecimento de bins no Beta), [[packing]] (destino direto quando `ct6 = dest_pack`), [[sorter]] (destino via rampa quando aplicável)

---

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{cart_tem}}` | `ct1` | select | yes / no / tbd |
| `{{cart_resp}}` | `ct_r` | select | `wcs`=WCS · `wms_only`=WMS · `both_wms_wcs`=Ambos · `tbd` |
| `{{cart_qtd}}` | `ct_qc` | texto livre | quantidade de carrinhos |
| `{{cart_posicoes}}` | `ct2` | texto livre | posições por carrinho |
| `{{cart_dispositivo}}` | `ct_d` | select | `pdv_dev`=PDV · `col_dev`=Coletor · `tbd` |
| `{{cart_disp_forn}}` | `ct_df` | select | `invent`=Invent · `client`=Cliente · `both_resp`=Ambos · `tbd` |
| `{{cart_destino}}` | `ct6` | select | `dest_pbl`=Completa PBL · `dest_conf`=Conferência · `dest_pack`=Packing · `tbd` |
| `{{cart_corte_sup}}` | `s1c` | select | yes / no / tbd |
| `{{cart_pede_caixa}}` | `s2c` | select | yes / no / tbd |

> **Multi-select** usa `|||` como separador no kickoff. `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto com `ct1 = yes`. O ED parte daqui e aplica as condicionais.)*

O Picking Cart é uma prateleira móvel utilizada para separação de itens de **baixo giro** (comumente denominados "museu") que não estão disponíveis nas posições automatizadas do FlowRack/PBL. O operador percorre os endereços físicos de armazenagem empurrando o carrinho, coletando itens para múltiplos volumes simultaneamente, guiado pelo dispositivo acoplado ao carrinho (PDV ou coletor). A operação do Picking Cart é integralmente gerenciada pelo WCS Velox quando `ct_r = wcs`.

**Fluxo operacional padrão:**

1. **Login e acesso à tela Order Start Picking Cart.** Após realizar o login no WCS, o operador acessa a tela **Order Start Picking Cart**. O sistema exibe a lista de tarefas de separação organizadas conforme a prioridade definida na integração (Wave). Caso necessário, é possível ajustar manualmente a prioridade de cada tarefa diretamente no WCS.

2. **Impressão de etiquetas e preparação das caixas.** O operador seleciona quantos volumes irá iniciar, limitado à quantidade de posições disponíveis no carrinho (`{{cart_posicoes}}`). O WCS imprime as etiquetas na impressora vinculada ao posto. O operador aplica as etiquetas nas caixas plásticas correspondentes.

3. **Mapeamento do Picking Cart.** Na tela de Mapeamento do Picking Cart, o operador realiza a leitura da etiqueta (ou código de barras) de cada caixa plástica e da posição física do carrinho correspondente, vinculando volume a posição. Após finalizar o vínculo de todas as posições necessárias, o operador aciona o botão **"Finalizar Mapeamento"** para avançar à etapa de separação. O mapeamento parcial é permitido — não é obrigatório preencher todas as posições do carrinho de uma só vez.

4. **Alocação das posições ao volume sistêmico.** Com o mapeamento concluído, o PDV exibe a lista de tarefas. O operador realiza a leitura da posição do carrinho no PDV para confirmar a alocação da posição ao volume sistêmico correspondente. Esta etapa deve ser repetida para todas as posições mapeadas; o sistema não permite avançar para a coleta enquanto houver posições mapeadas sem alocação.

5. **Execução da coleta — roteiro por endereço.** O WCS exibe no dispositivo, para cada endereço a ser visitado:
   - Posição/endereço de picking (onde coletar);
   - Código/nome do produto;
   - Quantidade a coletar;
   - Posição do carrinho onde o item deve ser depositado;
   - Observações do pedido, quando houver.

   O operador se dirige ao endereço indicado e realiza a **leitura do código do endereço físico** para validação sistêmica antes de iniciar a separação naquele ponto. Em seguida, realiza a **leitura do código do item** (EAN ou código do produto). O WCS informa a quantidade a separar e a posição do carrinho de destino. O operador confirma a quantidade real coletada e realiza a **leitura da caixa plástica** da posição correspondente para confirmar a separação. A lista de itens é atualizada em tempo real à medida que a coleta avança; a linha do item é ocultada ou destacada em verde ao ser concluída.

6. **Múltiplos volumes numa mesma localização.** Quando um mesmo item deve abastecer volumes posicionados em mais de uma posição do carrinho, o WCS indica todas as posições e volumes envolvidos. O operador realiza a leitura da caixa plástica de cada posição de destino, garantindo destinação correta e rastreabilidade exata.

7. **Corte (shortpicking).** Caso o operador não consiga coletar a quantidade total de um endereço, ele aciona o botão **"Finalizar Coleta"** (ou informa a quantidade real coletada via tela). O WCS registra apenas a quantidade efetivamente separada e contabiliza a diferença como **corte (shortpicking)**. O ciclo de coleta continua para os demais endereços.

8. **Conclusão da separação.** Ao concluir todas as visitas previstas, o WCS notifica o operador de que a separação foi finalizada. O operador conduz o carrinho ao ponto de destino definido em `ct6` (ver **Condicionais — Destino Pós-Coleta**).

9. **Retorno e reuso do carrinho.** Após o envio dos volumes, o operador retorna o Picking Cart ao Order Start do museu e repete o processo até que todas as tarefas destinadas à área de Picking Cart sejam finalizadas.

---

## Condicionais

### Dispositivo do Picking Cart — derivado de `ct_d`

#### SE `ct_d = pdv_dev` (PDV) → ADICIONA em "Estrutura do Picking Cart"
O carrinho é equipado com **1 PDV** (terminal fixo acoplado ao carrinho) e **1 leitor de código de barras de mão com gatilho**. A interface WCS é acessada via browser (Google Chrome) no PDV. *(Padrão mais comum — BELEZA Fase 1, BELEZA Fase 2, BP, NavePark, BR, Beta Esteio.)*

#### SE `ct_d = col_dev` (Coletor) → ADICIONA em "Estrutura do Picking Cart"
O operador utiliza **coletor Android** para acessar a tela WCS (Coleta Fracionada), sem PDV físico acoplado ao carrinho. *(Variante observada em BP — setor Brindes e Picking Fracionado Níveis.)*

#### SE `ct_d = tbd` → OMITE a subseção de hardware, marcando como a definir.

---

### Destino Pós-Coleta — derivado de `ct6`

#### SE `ct6 = dest_pbl` (Completa PBL) → ADICIONA em "Conclusão da separação"
Após concluir a coleta no carrinho, o operador conduz o volume até a **indução da linha do FlowRack (Order Start do museu / linha PBL)**. O volume entra no fluxo de picking fracionado automatizado para coletar os itens restantes dos postos PBL e, em seguida, segue para balança e conferência. *(BELEZA Fase 1 e 2, BP — Coleta Picking Cart, NavePark, BR.)*

#### SE `ct6 = dest_conf` (Conferência) → ADICIONA em "Conclusão da separação"
Após a finalização da separação, o operador direciona o volume diretamente à **área/estação de Conferência**. O volume passa pela balança e, se necessário, entra na fila de conferência sem percorrer postos PBL. *(Peter 2 — responsabilidade do cliente no picking; conferência sob WCS.)*

#### SE `ct6 = dest_pack` (Packing) → ADICIONA em "Conclusão da separação"
Volumes que não possuem itens adicionais a coletar no FlowRack seguem diretamente para o **Packing**, sem desvio para conferência. *(Variante observada em BP — setor Brindes, quando `ct_qc` é área sem esteira.)*

#### SE `ct6 = tbd` → OMITE a subseção de destino, marcando como a definir.

---

### Corte exige supervisor — derivado de `s1c`

#### SE `s1c = yes` → ADICIONA em "Corte (shortpicking)"
O registro do corte no Picking Cart exige **autenticação de supervisor** antes de ser confirmado pelo WCS. *(Candidato a projeto específico — não observado explicitamente no Top 10; inferido por analogia com PBL `s1p`. NavePark nota explicitamente que o corte no cart NÃO exige supervisor — ver RN-05.)*

#### SE `s1c = no` → MANTÉM o fluxo padrão sem etapa de autenticação.

---

### Pede Caixa — derivado de `s2c`

#### SE `s2c = yes` → ADICIONA subseção "Funcionalidade Pede Caixa"
Caso o operador identifique que os produtos não cabem na caixa plástica em uso, ele aciona a funcionalidade **"Pede Caixa"** via dispositivo. O WCS finaliza a tarefa de picking da caixa atual com os itens já coletados e gera automaticamente uma **nova tarefa de separação** para os itens restantes do pedido. A nova caixa é priorizada no Order Start para ser processada na próxima indução. O processo garante continuidade sem sobrecarregar a caixa atual, mantendo rastreabilidade e integridade da separação. *(BP — Picking Brindes e Picking Fracionado Níveis; BR — Picking Fracionado.)*

#### SE `s2c = no` → OMITE a subseção "Pede Caixa".

---

### Responsabilidade WCS × WMS — derivado de `ct_r`

#### SE `ct_r = wcs` → MANTÉM o Texto Padrão completo.
O WCS gerencia integralmente Order Start, mapeamento, coleta e registro de cortes do Picking Cart.

#### SE `ct_r = wms_only` → SUBSTITUI o fluxo padrão por versão enxuta
O processo de separação do Picking Cart é executado inteiramente pelo WMS (ou sistema do cliente); o WCS limita-se ao **cadastro prévio das caixas plásticas** utilizadas, de modo que os volumes possam ser reconhecidos nas etapas posteriores (Conferência, Sorter). *(Peter 2: responsabilidade do KAIZEN; campo `endereco` vem como "N/A" na integração de Wave.)*

#### SE `ct_r = both_wms_wcs` → ADICIONAR nota de divisão de responsabilidades conforme observação livre do kickoff.

---

### Quantidade de carrinhos e posições — derivados de `ct_qc` e `ct2`

#### SE `ct_qc` preenchido → MENCIONAR no parágrafo de abertura do capítulo
Ex.: "A operação conta com `{{cart_qtd}}` carrinhos de picking."

#### SE `ct2` preenchido → MENCIONAR na etapa de Mapeamento e Order Start
Ex.: "Cada carrinho possui `{{cart_posicoes}}` posições, limitando o número de volumes iniciados por ciclo."

---

## Observações Livres do Kickoff
Campos de texto: `ct_qc` (qtd carrinhos), `ct2` (posições/carrinho) e observações livres.

O ED deve:
- **`ct_qc`** → mencionar a quantidade de carrinhos na abertura do capítulo.
- **`ct2`** → mencionar posições por carrinho na etapa de Mapeamento e na restrição de volumes por ciclo.
- **Observação que define área do museu** (ex: "carrinho atende apenas SKUs da área A4") → ADICIONAR restrição explícita no parágrafo de abertura, descrevendo o setor/área coberto pelo cart.
- **Observação que cita etapa termolábil** → ADICIONAR subseção "Picking Cart Termolábil" com as regras de caixa de isopor, conferência obrigatória e Aloca Pallet, referenciando [[packing]] e [[paletizacao]].
- **Observação sobre bipagem item a item parametrizável** → ADICIONAR nota ao passo 5 do fluxo, esclarecendo o comportamento com bipagem ativa e desativa (ver RN-06).
- **Observação de GAP ou item em aberto** → registrar com tag `[GAP]` ao final do capítulo, indicando que está pendente de definição com a operação.

---

## Regras de Negócio
- **RN-01** (universal): o Picking Cart é destinado a itens de **baixo giro** não disponíveis no FlowRack/PBL automatizado; o WCS roteia para o carrinho apenas os volumes/pedidos que possuam itens nessa área.
- **RN-02** (universal): o mapeamento posição-do-carrinho × caixa-plástica deve ser concluído (botão "Finalizar Mapeamento") antes de iniciar a coleta; mapeamento parcial é permitido, mas todas as posições mapeadas devem ser alocadas a uma tarefa antes do avanço.
- **RN-03** (universal): a leitura do **código do endereço físico** é obrigatória antes de iniciar a separação em cada ponto; o WCS não aceita coleta sem validação do endereço.
- **RN-04** (universal): quando um mesmo item abastece múltiplos volumes numa mesma localização, o WCS exige a **leitura individual de cada caixa plástica de destino**, garantindo rastreabilidade item × posição × volume.
- **RN-05** (NavePark e equivalentes com `s1c = no`): o corte registrado na coleta do Picking Cart **não exige aprovação de supervisor** no momento da coleta, pois o volume ainda passará pela balança dinâmica e pela conferência antes da expedição. *(Observação explícita no NavePark Rev 8.)*
- **RN-06** (BR e projetos com bipagem parametrizável): com **bipagem item a item ativa**, o WCS considera separada apenas a quantidade de itens efetivamente bipados; com **bipagem desativada**, o operador informa manualmente a quantidade e lê a etiqueta da caixa para confirmar — a diferença é registrada como shortpicking em ambos os casos.
- **RN-07** (universal): ao acionar **"Finalizar Coleta"** em um endereço, o WCS registra como shortpicking apenas a diferença entre o solicitado e o efetivamente coletado/bipado; o ciclo de coleta continua para os demais endereços.
- **RN-08** (BP e equivalentes com `s2c = yes`): ao acionar **"Pede Caixa"**, o WCS finaliza a tarefa da caixa atual com os itens já coletados e gera nova tarefa para os itens restantes, priorizando a nova caixa no Order Start.
- **RN-09** (Beta Esteio — complementar): uma mesma caixa/volume **nunca** conterá itens de mais de uma remessa; o WCS garante essa segregação durante a alocação dos volumes no carrinho.
- **RN-10** (Peter 2 — projeto específico): quando o WMS envia pedido de Picking Cart, o campo `endereco` vem preenchido como `"N/A"` na integração de Wave, indicando que o endereçamento é externo ao WCS.
- **RN-11** (Beta — uso secundário): o Picking Cart também pode ser usado para **reabastecimento** do Picking Fracionado (transporte de bins), com tela e fluxo dedicados e independentes da tela de separação; essa modalidade não constitui separação de pedidos.

---

## Insights e Padrões

### Padrões identificados
- O **núcleo do fluxo** (Order Start Cart → Mapeamento → Coleta por endereço → Finalizar Coleta → Indução/FlowRack) é praticamente idêntico entre BELEZA Fase 1, BELEZA Fase 2, BP, NavePark e BR — é o padrão sólido.
- A combinação **PDV + leitor de mão com gatilho** é o hardware mais recorrente (BELEZA ×2, BP, NavePark, BR, Beta Esteio); coletor Android aparece como alternativa em setores sem esteira (BP Brindes/Níveis).
- O destino pós-cart mais comum é a **indução na linha do FlowRack** (`dest_pbl`), para complementar a coleta nos postos PBL antes de seguir para balança e conferência.
- Corte no cart **sem exigência de supervisor** é o comportamento padrão; a aprovação de supervisor é típica da conferência, não do cart.

### Variações significativas
- **Peter 2**: o picking cart é executado integralmente pelo sistema KAIZEN (WMS do cliente); o WCS limita-se ao cadastro de caixas e à conferência posterior. É a única fonte que trata o cart como responsabilidade `wms_only`.
- **Beta (reabastecimento)**: usa o picking cart como veículo de abastecimento de bins para o FlowRack, com rota otimizada por "apartamento" (ímpares primeiro) e tela/fluxo completamente separados da separação de pedidos — uso dual do mesmo equipamento físico.
- **BP Termolábil**: replica o fluxo de Picking Cart padrão, mas diferencia-se no pós-coleta: conferência 100% item a item no packing + Aloca Pallet em cofre/RG + prioridade de carregamento (último a carregar no romaneio).
- **NavePark**: pós-coleta pode seguir para área de **PTW** (Put to Wall) ou sorter (Rampa 1 → reinduзão na linha) além do FlowRack; há GAP aberto sobre o reabastecimento da área de museu/baixo giro.
- **BR**: destaca explicitamente que a bipagem item a item é **parametrizável** no cart (ativa/desativa via parâmetros WCS) — único projeto a formalizar essa flexibilidade na especificação do cart.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff para **"bipagem item a item parametrizável"** no cart (`s_bip_ct`?) — hoje inferida/observada em texto livre. Candidato a checkbox.
- Não há campo explícito para **"número de posições de picking no museu"** nem para **"área/setor do museu"** — informados em texto livre ou implícitos no layout. Candidato a texto livre `ct_area`.
- A distinção entre **cart de separação de pedidos** e **cart de reabastecimento de picking** (uso dual no Beta) não tem campo dedicado — pode gerar ambiguidade na geração de documento.
- Termolábil em picking cart não tem gate próprio — fluxo bifurcado identificado apenas por observação no texto do BP.

### Inferências
- **Inferência:** quando `ct6 = dest_pbl`, o projeto quase sempre tem PBL/FlowRack como etapa complementar ao cart (itens de alto giro no FlowRack, baixo giro no museu/cart). · **Confiabilidade:** alta · **Base:** BELEZA ×2, BP, NavePark, BR.
- **Inferência:** `ct_r = wcs` é o padrão; `wms_only` é exceção associada a projetos onde o cliente já tem sistema próprio de coleta no museu. · **Confiabilidade:** alta · **Base:** apenas Peter 2 com `wms_only`.
- **Inferência:** projetos com picking cart e `cf_gate = yes` quase sempre passam o volume pelo cart antes da conferência (conferência é downstream); o cart por si só não realiza conferência. · **Confiabilidade:** alta · **Base:** BP, NavePark, BR, BELEZA.

---

## Dependências (grafo)
- **Entra depois de:** [[order-start]] (cria volumes, imprime etiquetas, vincula caixas)
- **Sai para:**
  - `ct6 = dest_pbl` → [[picking-pbl]] (indução na linha) → [[conferencia]] → [[packing]]
  - `ct6 = dest_conf` → [[conferencia]] → [[packing]]
  - `ct6 = dest_pack` → [[packing]] direto
- **Consulta/alimenta:** [[wave-integracao]] (prioridade das tarefas), [[shortpicking]] (cortes registrados no cart), [[reabastecimento]] (uso dual em Beta)
- **Variante paralela:** [[picking-pbl]] (fluxo automatizado para alto giro; picking cart cobre o baixo giro)
- **Pós-coleta especial:** [[packing]] + [[paletizacao]] (fluxo Termolábil — BP)
