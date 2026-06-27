# Put-to-Wall — Knowledge Card

> CARD abrangente do tópico **Put-to-Wall (PTW)**. Fonte principal: NavePark (Top 10 · Prioridade SIM) + complementares Reverse Escopo e Reverse Rev5 (Prioridade não). O ED usa este arquivo para gerar o capítulo de Put-to-Wall do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

---

## Tags
`put-to-wall` `ptw` `parede-separacao` `nicho` `cell` `slot` `alocacao-item`
`consolidacao-pedido` `picking-cart` `museu` `scanner-mao` `led-nicho`
`bipagem-ptw` `inducao` `reindução` `caixa-plastica` `vinculo-caixa`
`posto-operacao` `bipagem-frente` `bipagem-costas` `ptw-gate`

---

## Metadados
- **Bloco:** separacao
- **Gate:** sem campo dedicado no kickoff standard — inferido de `ct1` (Picking Cart) + contexto do layout. Candidato a campo próprio.
- **Subtópicos com CARD próprio:** [[picking-cart]] (origem dos itens), [[ptl-alocacao]] (destino pós-PTW em algumas topologias), [[sorter]] (indução na linha)
- **Depende de:** [[picking-cart]] (coleta dos itens no museu), [[order-start]] (criação do pedido/volume)
- **Influencia:** [[sorter]] (caixa induzida na linha após consolidação), [[picking-pbl]] (reindução na linha de fracionados), [[conferencia]] (etapa seguinte após indução)
- **Cruza com:** [[ptl-alocacao]] (PTL pode coexistir como estação de consolidação alternativa), [[integracao-pedidos]] (sinalização de pedido pronto ao WMS)

---

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{ptw_tem}}` | *(inferido de `ct1` + layout)* | — | yes / no / tbd — não há campo explícito no kickoff |
| `{{ptw_nichos}}` | texto livre (kickoff obs) | texto | total de nichos da estrutura (ex: "30 nichos") |
| `{{ptw_config}}` | texto livre (kickoff obs) | texto | configuração N×M (ex: "3 níveis × 10 colunas") |
| `{{ptw_dim_nicho}}` | texto livre (kickoff obs) | texto | dimensões do nicho LxAxP em mm |
| `{{ptw_posto}}` | texto livre (kickoff obs) | texto | "frente e costas" ou "frente apenas" |
| `{{ptw_destino}}` | texto livre (kickoff obs) | texto | destino da caixa após consolidação (ex: "esteira Fullcase → Sorter → PTL → PBL") |

> **Obs.:** enquanto não existir gate próprio no kickoff, o ED deve inferir a presença do PTW pelo campo `ct1 = yes` combinado com menção explícita de "PTW", "parede" ou "museu" nos campos de texto livre ou no layout de referência.

---

## Texto Padrão
*(Base detalhada presente em projetos com Picking Cart em museu seguido de indução na automação. O ED parte daqui e aplica as condicionais.)*

O **Put-to-Wall (PTW)** é a estação de consolidação dos itens coletados pelo **Picking Cart** (museu) antes da indução na linha de automação. O WCS é responsável pelo controle integral do PTW: identifica o pedido de cada item lido, sinaliza o nicho correto da estrutura, confirma a alocação e controla o status da consolidação até a liberação para a linha.

A estrutura PTW é composta por nichos organizados em níveis e colunas. Cada nicho corresponde a um pedido ativo. O posto de operação permite acesso pela frente (bipagem e alocação dos itens) e pelas costas (vínculo da caixa plástica após consolidação).

**Fluxo operacional padrão:**

1. **Bipagem do item no PTW.** O operador utiliza o scanner de mão para bipar cada item coletado no Picking Cart. O WCS identifica o item, localiza o pedido ao qual ele pertence e **acende o LED do nicho correspondente** na estrutura PTW, indicando visualmente onde o item deve ser depositado.

2. **Alocação no nicho.** O operador deposita o item no nicho indicado pelo LED e confirma a alocação **pressionando o LED** do nicho. O WCS registra o item como alocado e atualiza o status de consolidação do pedido.

3. **Consolidação do pedido.** O processo de bipagem → alocação → confirmação se repete para cada item. Quando todos os itens esperados para aquele nicho estiverem alocados, o WCS sinaliza o nicho indicando que o pedido está **pronto para indução**.

4. **Vínculo com caixa plástica.** Ao receber a sinalização de pedido completo, o operador pressiona o LED do nicho para indicar que está retirando os itens. Em seguida, desloca-se à parte traseira da estrutura e utiliza o scanner de mão para realizar a **leitura da caixa plástica**. O WCS vincula a caixa aos itens retirados do nicho, registrando o LPN que seguirá para a linha.

5. **Indução na linha.** O operador induz a caixa plástica na esteira. O WCS libera o volume para o fluxo padrão de automação (ver **Condicionais — Destino pós-PTW** para o roteamento específico de cada projeto).

6. **Registro e rastreabilidade.** O WCS mantém o histórico de alocações por nicho, operador e pedido. A confirmação de consolidação pode ser enviada ao WMS conforme a integração do projeto.

---

## Condicionais

### Destino pós-PTW — derivado de layout/texto livre do kickoff

#### SE projeto é NavePark (ou topologia equivalente: museu + PTW + sorter + PTL + PBL) → ADICIONA em "Indução na linha"
Após a indução na esteira de Fullcase do Térreo, o pedido segue diretamente ao **Sorter → Rampa 1 → PTL 3** e é **reinduzido na Linha de PBL** (Flowracks → Picking Mezanino → Picking Térreo → Conferência → Expedição). O PTW atua, portanto, como ponto de entrada do pedido no fluxo de fracionados — os itens do museu são "inseridos" na linha como se fossem um novo volume fracionado.

#### SE projeto tem PTW + PTL coexistindo (ex: Reverse) → ADICIONA observação de escopo
O WCS executa tanto as rotinas de **PTW** quanto as de **PTL** na mesma aplicação. A interface é web (navegador Chrome em cada estação). A distinção entre as estações PTW e PTL deve ser detalhada no capítulo de [[ptl-alocacao]].

#### SE o posto PTW tem acesso apenas pela frente (sem costas) → SUBSTITUI etapa 4
O vínculo com a caixa plástica é feito pela frente, com uma segunda leitura no mesmo scanner. Omitir referência a "parte traseira" e "scanner de costas".

#### SE o PTW não tem LED físico (uso de tablet ou display visual) → ADAPTA etapas 1-3
Substituir "LED do nicho" por "indicação visual no display" e "pressionando o LED" por "confirmando na tela do tablet". A lógica de sinalização e confirmação permanece a mesma.

#### SE `ct1 = no` ou Picking Cart não está em escopo → OMITE o capítulo de PTW
Sem Picking Cart, não há origem de itens para o PTW. O capítulo é suprimido integralmente.

#### SE `ptw_tem = tbd` ou campo não preenchido → OMITE o capítulo e adiciona [PENDENTE DE DEFINIÇÃO]

---

## Observações Livres do Kickoff
Campos de texto livre relevantes para o PTW:

O ED deve:
- **`ptw_nichos`** → mencionar o total de nichos na abertura do capítulo (ex: "A estrutura PTW conta com 30 nichos").
- **`ptw_config`** → detalhar a configuração de níveis × colunas (ex: "organizados em 3 níveis e 10 colunas").
- **`ptw_dim_nicho`** → incluir as dimensões do nicho na descrição da estrutura, se fornecidas (ex: "400 mm de largura × 550 mm de altura × 800 mm de profundidade").
- **`ptw_destino`** → preencher o roteamento exato da caixa após indução. Se não fornecido, usar o padrão NavePark como referência e marcar `[CONFIRMAR COM OPERAÇÃO]`.
- **Observação que altera o número de postos** (ex: "dois postos PTW simultâneos") → ADICIONAR como subseção "Múltiplos Postos" logo após a descrição da estrutura, com impacto em concorrência e controle de nicho pelo WCS.
- **Observação sobre capacidade de nichos por pedido** (ex: "pedidos grandes ocupam 2 nichos") → ADICIONAR como subseção "Nicho Multi-slot" com a regra de agrupamento.

---

## Regras de Negócio
- **RN-01** (NavePark — projeto específico): o PTW possui um único posto de operação; o acesso é feito pela frente (bipagem/alocação) e pelas costas (vínculo da caixa plástica).
- **RN-02** (NavePark — projeto específico): cada nicho na estrutura corresponde a um pedido ativo; a relação nicho ↔ pedido é gerenciada dinamicamente pelo WCS conforme a demanda de separação.
- **RN-03** (universal): o WCS só acende o LED do nicho após identificar com sucesso o item e localizar o pedido correspondente; bipagens de itens sem pedido ativo devem gerar alerta na tela.
- **RN-04** (universal): a confirmação de alocação (pressionar LED) é obrigatória para que o WCS registre o item como depositado; sem confirmação, o item permanece pendente e o LED continua aceso.
- **RN-05** (NavePark — projeto específico): o vínculo com a caixa plástica é realizado pela parte traseira do PTW com um segundo scanner de mão; o WCS só libera o volume para indução após a leitura da caixa ser confirmada.
- **RN-06** (universal): ao completar todos os itens esperados de um pedido no nicho, o WCS sinaliza o nicho como "pronto" — a sinalização deve ser visualmente distinta do estado "em progresso" (ex: cor diferente do LED ou piscada).
- **RN-07** (Reverse — projeto específico): a mesma aplicação WCS controla PTW e PTL; o banco de dados (Postgres, fornecido pelo cliente) é exclusivo da aplicação e não compartilhado com outros módulos.
- **RN-08** (universal — lacuna): não há campo de kickoff que defina capacidade máxima de nichos simultâneos nem regra de overflow (pedido sem nicho disponível). Tratar como `[PENDENTE]` quando não especificado em texto livre.

---

## Insights e Padrões

### Padrões identificados
- O PTW aparece **exclusivamente em topologias com Picking Cart em museu** — é a estação de transição entre coleta manual dispersa e linha de automação centralizada.
- O fluxo **bipar → LED acende → depositar → pressionar LED → repetir** é o núcleo operacional invariante entre os projetos identificados (NavePark).
- O vínculo com caixa plástica na saída do nicho é a etapa que formaliza o LPN que entrará na automação — analogia direta ao Order Start do fracionado.

### Variações significativas
- **NavePark**: PTW com 30 nichos (3×10), acesso frente + costas, scanner de mão, LED físico por nicho. Destino após indução: Sorter → PTL → reindução em PBL (fluxo complexo de múltiplos reencaminhamentos).
- **Reverse (Escopo e Rev5)**: PTW e PTL rodando na mesma aplicação WCS, interface web (Chrome), banco Postgres exclusivo. Topologia voltada para triagem de equipamentos (contexto logística reversa) — não é separação de pedidos tradicionais.
- **Wild Fork** (menção lateral no RAW): usa módulo "Put-to-Pallet (PTP)" para consolidação de volumes — variante semântica onde o destino é um pallet em vez de uma caixa plástica. Mesma lógica visual de consolidação guiada por sistema.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- **Ausência de gate dedicado**: não existe campo `ptw_gate` no kickoff standard — a presença do PTW é inferida de `ct1` + texto livre. Candidato a checkbox `ptw_gate = yes/no/tbd`.
- **Ausência de campo para dimensionamento**: nichos totais, configuração N×M e dimensões são sempre informados em texto livre. Candidatos a campos estruturados.
- **Ausência de campo para destino pós-PTW**: o roteamento da caixa após indução (qual linha, qual sorter, qual PTL) não tem campo dedicado — totalmente dependente de texto livre ou layout. Candidato a campo ou sub-seção no gate de Sorter/PTL.
- **Sem regra de overflow de nichos**: o que acontece quando todos os nichos estão ocupados e chega novo item de pedido diferente? Não documentado em nenhum projeto do RAW.
- **Sem definição de "pedido pronto" vs "nicho liberável"**: em pedidos com itens em múltiplas linhas de separação (PTW + PBL), o nicho só deve ser liberado quando todos os itens — inclusive os de outras linhas — estiverem consolidados? Lacuna de regra universal.

### Inferências
- **Inferência:** projetos com Picking Cart em "museu" (área de coleta remota da automação) quase sempre têm PTW como estação intermediária obrigatória. · **Confiabilidade:** alta · **Base:** NavePark (único projeto Top 10 com PTW explícito).
- **Inferência:** o LED físico por nicho é o hardware padrão do PTW na Invent; uso de tablet como display alternativo é possível mas não evidenciado no RAW. · **Confiabilidade:** média · **Base:** ausência de variante tablet nos projetos disponíveis.
- **Inferência:** o PTW nunca aparece sozinho — sempre coexiste com Picking Cart (upstream) e Sorter/PTL (downstream). Gate `ptw_gate` seria dependente de `ct1 = yes`. · **Confiabilidade:** alta · **Base:** lógica operacional + NavePark.

---

## Dependências (grafo)
- **Entra depois de:** [[picking-cart]] (coleta dos itens no museu) — obrigatório
- **Sai para:** [[sorter]] → [[ptl-alocacao]] → [[picking-pbl]] (reindução, topologia NavePark) ou direto para [[conferencia]] (topologias mais simples)
- **Consulta/alimenta:** [[integracao-pedidos]] (sinalização de consolidação ao WMS), [[order-start]] (LPN da caixa plástica vinculada)
- **Coexiste com:** [[ptl-alocacao]] (Reverse: mesma aplicação WCS controla PTW + PTL)
- **Sem relação direta com:** [[picking-pbl]] (PBL é upstream/downstream dependendo da topologia, não lateral), [[conferencia]] (apenas downstream)
