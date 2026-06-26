# Dashboards e Relatórios — Knowledge Card

> CARD abrangente do tópico **Dashboards e Relatórios**. Fonte: Top 10 (BELEZA Fase1, BELEZA Fase2, BRF Salvador, Beta, CDSK, ELETRO, Market Chile, Market Peru, NavePark, TITANO) + complementares (BR, Barbecue, Beta Esteio, Beta Full SP, DIA, MASTER, Optimus Prime, Payless, Reverse, Guatemala). O ED usa este arquivo para gerar o capítulo de Dashboards e Relatórios do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`dashboard` `relatorio` `painel` `monitoramento` `produtividade` `tempo-real` `onda` `KPI`
`throughput` `sorter` `rampa` `rejeito` `read-noread` `rastreabilidade` `operador`
`picking` `conferencia` `expedição` `remessa` `transportadora` `csv` `excel` `pdf`
`dashboard-operacional` `dashboard-customizado` `produtividade-por-rampa` `produtividade-sorter`
`produtividade-PTL` `curva-abc` `status-pedido` `status-missao` `monitoramento-doca`
`recirculacao` `sorter-ativo-inativo` `shortpicking` `corte` `nota-fiscal` `anomalia`
`triagem` `reverse`

---

## Metadados
- **Bloco:** sistema
- **Gate:** sem gate dedicado — presente em praticamente todos os projetos
- **Subtópicos com CARD próprio:** nenhum (dashboards e relatórios são tratados neste CARD)
- **Depende de:** [[order-start]] (indução/OS), [[picking-pbl]] · [[picking-fullcase]] · [[picking-cart]] (produtividade de picking), [[sorter]] (throughput, rejeitos, Read/NoRead), [[conferencia]] (produtividade de conferência), [[ptl-alocacao]] (produtividade por operador PTL), [[expedição]] (remessas, transportadoras, docas)
- **Influencia:** gestão operacional, tomada de decisão da liderança, indicadores de turno
- **Cruza com:** [[integracao-pedidos]] (status de pedidos/missões), [[shortpicking]] (corte), [[recirculacao]] (volumes recirculados no sorter)

---

## Variáveis (slot → campo do kickoff → opções)

> Não há campos de kickoff dedicados exclusivamente a dashboards/relatórios. Os módulos disponíveis são derivados dos gates dos outros blocos. A tabela abaixo registra as dependências relevantes.

| Slot derivado | Gate de origem | Impacto no capítulo |
|---|---|---|
| `{{tem_sorter}}` | `st1 = yes` | Inclui relatórios de sorter (produtividade, rejeito, Read/NoRead, recirculação) |
| `{{tem_ptl}}` | `pt_tem_ptl = yes` | Inclui relatório de produtividade por operador PTL |
| `{{tem_conferencia}}` | `cf_gate = yes` | Inclui relatório de conferência |
| `{{tem_picking}}` | `p1 = yes` OU `ct1 = yes` OU `fc1 = yes` | Inclui relatório de produtividade por estação/picking |
| `{{tem_sorter_ia}}` | `st11 = yes` | Prevê TV de dashboard no portal do sorter |
| `{{tem_sorter_recirc}}` | `st_rc = yes` | Inclui relatório de recirculação |
| `{{tem_doca}}` | contexto de expedição com docas | Inclui tela de monitoramento de docas |

> **Regra geral:** a lista final de dashboards e relatórios a incluir no documento é montada combinando os gates ativos do kickoff. Módulos cujo gate-pai é `no`/`tbd` são omitidos.

---

## Texto Padrão

*(Base presente em praticamente todos os projetos. O ED parte daqui e aplica as condicionais.)*

O WCS disponibiliza um conjunto de **dashboards operacionais** e **relatórios** para visibilidade do desempenho, produtividade e exceções do processo. O catálogo exato de cada projeto é definido em conjunto entre Invent e o cliente durante a fase de implementação, considerando as necessidades específicas da operação. Todos os relatórios podem ser exportados para **.csv** (padrão geral); projetos que demandem extração em **Excel ou PDF** devem indicar isso na fase de especificação.

### Dashboards

#### Dashboard Operacional
O Dashboard Operacional é uma tela de acompanhamento **em tempo real** do desempenho da operação, acessível via navegador em qualquer dispositivo. Ele consolida os principais indicadores do turno — taxa de indução de caixas por hora no Order Start, vazão do Sorter e falhas de leitura acumuladas — e permite à liderança tomar decisões de realocação de equipe ou ajuste de prioridades sem precisar parar a operação.

**Visão por Lista de Remessas:** o dashboard exibe cada remessa como um item individual, com as seguintes informações:
- Número da remessa
- Nome da transportadora
- Quantidade de volumes previstos
- Quantidade de volumes entregues (formato: `entregues / previstos`, ex.: `8/10`)

**Sinalização visual por status:**
- **Em andamento** (padrão): remessa ativa, com volumes pendentes.
- **Finalizada**: ao atingir o total previsto, a remessa é destacada em **verde** e permanece visível por um tempo **parametrizável**, sendo deslocada para o final da lista após esse período.
- **Cancelada**: exibida em **vermelho piscante** pelo tempo parametrizável e depois deslocada para o final da lista.

**Ordenação:** remessas ativas permanecem no topo, respeitando a ordem definida pelo WCS (ex.: ordem de criação ou prioridade operacional).

### Relatórios

Os relatórios abaixo representam o catálogo disponível no WCS. Cada projeto ativa o subconjunto correspondente às suas operações:

| # | Relatório | Descrição |
|---|---|---|
| 1 | **Produtividade por Período** | Consolida o volume de operações (separações, volumes) no período selecionado. |
| 2 | **Produtividade por Estação de Picking / Rampa** | Apresenta a quantidade de volumes processados em cada rampa ou estação de picking. |
| 3 | **Produtividade por Operador PTL** | Exibe a performance individual de cada operador no sistema PTL. |
| 4 | **Produtividade do Sorter** | Fornece visão geral do desempenho do sorter: volumes processados e tempo de operação. |
| 5 | **Status de Pedidos / Missões** | Exibe pedidos/missões nos estados: iniciados, em separação e finalizados. |
| 6 | **Estoque de Posição** | Relatório de produtos e níveis de estoque por posição de picking. |
| 7 | **Conferência Detalhada** | Relatórios detalhados de conferência (itens conferidos, cortados, operador responsável). |
| 8 | **Curva ABC** | Classificação de produtos por giro/importância. |
| 9 | **Rastreabilidade de Operadores** | Rastreabilidade dos operadores nos postos de trabalho de picking e conferência. |
| 10 | **Rejeitos** | Detalha os volumes rejeitados pelo sorter: causas e frequência. |
| 11 | **Read e NoRead** | Número de leituras bem-sucedidas (Read) e falhas (NoRead) no portal de leitura. |
| 12 | **Transportes Finalizados** | Lista transportes com status finalizado ou cancelado. |

---

## Condicionais

### SE `st1 = yes` (Sorter ativo) → ADICIONA relatórios de sorter

Incluir no capítulo os seguintes relatórios:
- **Produtividade por Rampa**: quantidade de volumes processados por rampa.
- **Produtividade do Sorter**: desempenho geral, volumes e tempo de operação.
- **Rejeitos**: volumes rejeitados, causas e frequência.
- **Read e NoRead**: leituras bem-sucedidas e falhas no portal do sorter.

#### SE adicionalmente `st_rc = yes` (Recirculação ativa) → ADICIONA
- **Recirculação**: exibe todos os volumes que recircularam, a quantidade de vezes que recircularam e os volumes que excederam o limite parametrizado de voltas.

#### SE adicionalmente `st11 = yes` (IA ativa no portal) → ADICIONA nota no Dashboard Operacional
> "Este projeto prevê a instalação de `{{st11_tvs}}` TV(s) de dashboard no portal do Sorter, em decorrência da combinação Sorter + câmera com IA."

#### SE adicionalmente contexto de projeto exige → PODE ADICIONAR
- **Sorter Ativo e Inativo**: registra os períodos de atividade e inatividade do sorter. *(Visto em Optimus Prime.)*

---

### SE `pt_tem_ptl = yes` (Displays PTL ativos) → ADICIONA

- **Produtividade por Operador PTL**: performance individual de cada operador utilizando o PTL.

---

### SE `cf_gate = yes` (Conferência ativa) → ADICIONA

- **Conferência Detalhada**: relatório de itens conferidos, cortes, operador responsável e rastreabilidade.

---

### SE `p1 = yes` OU `ct1 = yes` (Picking ativo) → ADICIONA

- **Produtividade por Estação de Picking**: volumes separados por posto/estação.
- **Rastreabilidade de Operadores nos Postos de Trabalho de Picking**.

---

### SE contexto indica operação de expedição com docas físicas → ADICIONA

**Tela de Monitoramento das Docas**
Tela destinada à exibição em monitores posicionados em cada doca. Opera em formato de **carrossel automático**, alternando a visualização das docas. Há opção para pausar e retomar o carrossel; a navegação manual entre docas não é permitida — a alternância é exclusivamente automática.

**Tela de Monitoramento por Doca Única**
Versão de análise individual: diferente do carrossel, esta tela é dedicada a uma doca específica selecionada pelo usuário, com maior nível de detalhe para acompanhamento e tomada de decisão. *(Visto em BRF Salvador.)*

---

### SE contexto é operação de Reverse Logistics / Triagem → SUBSTITUI o catálogo padrão

Para operações de reverse (triagem de produtos retornados), o catálogo de relatórios é específico:

- **Produtividade por Operador/Login**: itens triados e anomalias por nota fiscal, com horários de início e fim.
- **Quantidade de Itens Separados**: total de itens separados no período.
- **Notas Fiscais Concluídas**: lista de NFs finalizadas com comparativo entre qtd esperada × conferida × cortada, e datas de abertura/finalização.
- **Nota Fiscal Detalhada**: detalhamento serial a serial de cada item de uma NF (status de conferência, leitura de SIM Card, datas de integração/leitura).
- **Itens Incluídos na Nota Fiscal**: itens inseridos manual ou via integração em uma NF específica (filtro obrigatório: número da NF).
- **Produtividade Posto Triagem**: produtividade por posto de trabalho (endereços utilizados, SKUs alocados, qtd itens e caixas formadas).
- **Produtividade Posto Retirada**: itens retirados de cada endereço por posto, separados por tipo (ALTO_GIRO, BAIXO_GIRO, ANOMALIA_TIPO_UM, ANOMALIA_TIPO_DOIS).
- **Anomalias por SKU/Posição**: agrupa anomalias por SKU e posição de destino, com quantidade de ocorrências, operador responsável e tipo de anomalia.

> Todos os relatórios de Reverse devem ser extraíveis por filtros de data e hora, e exportáveis em **Excel ou PDF**.

---

### SE contexto inclui relatório de shortpicking / corte → ADICIONA (projetos com PBL/Cart)

- **Separação ou ShortPicking (Corte)**: lista volumes/itens que sofreram corte na separação, com detalhes do operador e motivo. *(Visto em Guatemala PBL.)*

---

### SE dashboards precisam ser customizados → NOTA INTERNA

> [OBS INTERNA] Projetos como CDSK preveem um **Dashboard Customizado** além do operacional padrão. Alinhar com o cliente durante a implementação quais indicadores extras serão exibidos. Não há template padrão — o conteúdo é definido caso a caso.

---

## Observações Livres do Kickoff

Não há campos de kickoff dedicados a dashboards/relatórios. As observações livres relevantes para este capítulo são:

- **Observação sobre TV de dashboard**: se o kickoff mencionar instalação de TVs/monitores para dashboards (ex.: "1 TV no sorter"), incluir a nota correspondente no Dashboard Operacional.
- **Exportação em PDF**: se o kickoff ou requisito do cliente mencionar PDF além de CSV/Excel, registrar explicitamente no capítulo.
- **Definição na implementação**: a frase padrão "as telas de relatório serão definidas em conjunto durante a fase de implementação" deve ser mantida quando o catálogo não estiver completamente fechado no kickoff.
- **Observação sobre captura de imagens dos relatórios**: projetos recentes (Market Chile, Payless) adicionam nota de que as imagens dos relatórios no documento são referência da versão atual do sistema e podem sofrer alterações.

---

## Regras de Negócio

- **RN-01** (todos): o catálogo de dashboards e relatórios é **definido em conjunto** entre Invent e o cliente durante a fase de implementação; a especificação apresenta exemplos, não o catálogo fechado.
- **RN-02** (todos): todos os relatórios padrão podem ser **exportados para .csv**; projetos que exijam Excel ou PDF devem especificar isso explicitamente.
- **RN-03** (Dashboard Operacional): remessas finalizadas e canceladas permanecem visíveis na lista por um **tempo parametrizável** antes de serem deslocadas para o final.
- **RN-04** (Dashboard Operacional): a ordenação padrão mantém remessas ativas no topo; a ordem pode ser por criação ou prioridade operacional, conforme configuração do WCS.
- **RN-05** (Monitoramento de Docas): a navegação entre docas no carrossel é **exclusivamente automática**; não é permitido ao operador navegar manualmente — apenas pausar e retomar.
- **RN-06** (Relatórios de Reverse): todos os relatórios devem ser extraídos por filtros de **data e hora** e ser exportáveis em **Excel ou PDF**.
- **RN-07** (Relatório de Recirculação): exibir volumes que excederam o limite de recirculações parametrizado, além da contagem de voltas por volume.
- **RN-08** (Dashboard com IA): quando `st11 = yes`, o projeto prevê instalação de TV de dashboard no portal do sorter — incluir menção ao número de TVs (`{{st11_tvs}}`).
- **RN-09** (Relatório Read/NoRead): aplica-se ao portal de leitura do sorter; volume sem leitura (NoRead) deve ser tratado como exceção e aparecer destacado no relatório.

> **Lacunas:** não há RNs documentadas sobre periodicidade de atualização dos dashboards (tempo real vs. batch), retenção histórica dos relatórios ou controle de acesso por perfil aos relatórios. Candidatos a campos futuros no kickoff.

---

## Insights e Padrões

### Padrões identificados
- O **Dashboard Operacional — Visão por Lista de Remessas** (verde/vermelho piscante, deslocamento parametrizável) é praticamente idêntico em Beta, BR, Beta Esteio e Beta Full SP — é o template padrão consolidado para expedição com sorter.
- O tripé **Produtividade por Rampa + Produtividade do Sorter + Read/NoRead + Rejeitos** aparece em ELETRO, CDSK, Market Chile, Market Peru, DIA, Optimus Prime, Payless — é o núcleo mínimo para qualquer projeto com sorter.
- A nota "relatórios serão definidos durante a implementação" é um padrão recorrente em quase todos os projetos — indica que o catálogo é sempre negociado, nunca entregue fechado na especificação.
- Projetos com **IA no sorter** invariavelmente preveem **TV de dashboard** física no portal.

### Variações significativas
- **BELEZA** (Fase 1 e 2): foco em picking fracionado — relatórios de produtividade por estação, conferência detalhada, rastreabilidade de operadores e Curva ABC; sem relatórios de sorter puro.
- **BRF Salvador**: único com **tela de monitoramento de docas** em carrossel automático — funcionalidade específica de CD com múltiplas docas de expedição.
- **CDSK**: único a mencionar **Dashboard Customizado** além do operacional, sugerindo flexibilidade de configuração de KPIs pela operação.
- **Reverse (TPC)**: catálogo completamente diferente do padrão — focado em NF, serial, SIM Card, anomalias e triagem. Não compartilha relatórios com outros projetos.
- **Guatemala PBL**: relatório de **Separação/ShortPicking (Corte)** como entregável explícito — raro nos demais.
- **Payless**: Dashboard Operacional inclui **alertas de gargalos nas balanças** além dos KPIs padrão de sorter — variação para CD com check-weight intensivo.
- **TITANO**: inclui **Relatório de Recirculação** como entregável explícito; presente apenas em projetos com `st_rc = yes`.

### Inferências
- **Inferência:** projetos com sorter + IA (`st11 = yes`) sempre incluem TV de dashboard físico no portal. · **Confiabilidade:** alta · **Base:** Market Chile, Payless.
- **Inferência:** o Dashboard Operacional — Visão por Remessas é um componente de produto reutilizado; o texto é praticamente idêntico em 4+ projetos, indicando que é gerado por template. · **Confiabilidade:** alta · **Base:** Beta, BR, Beta Esteio, Beta Full SP.
- **Inferência:** quando há PTL (`pt_tem_ptl = yes`), o relatório de produtividade por operador PTL é incluído automaticamente. · **Confiabilidade:** alta · **Base:** CDSK, Market Chile, Market Peru, Guatemala, DIA, MASTER, Optimus Prime, Payless.

### Lacunas conhecidas (candidatas a novos campos no kickoff)
- Não há campo no kickoff para "**exportar em PDF**" vs. "apenas CSV" — hoje inferido por texto livre.
- Não há campo para "**número de TVs de dashboard**" independente da IA (ex.: TVs gerais na operação) — o campo `st11_tvs` é condicional à IA.
- Não há campo para "**Dashboard Customizado**" (CDSK) — aparecem apenas em texto livre ou como item da lista de relatórios.
- Retenção histórica, periodicidade de atualização e controle de acesso por perfil aos relatórios nunca aparecem no kickoff — são lacunas sistêmicas.

---

## Dependências (grafo)

- **Consome dados de:** [[order-start]] (taxa de indução), [[picking-pbl]] · [[picking-cart]] · [[picking-fullcase]] (produtividade de picking/estações), [[sorter]] (throughput, rejeitos, Read/NoRead, recirculação), [[conferencia]] (produtividade de conferência, itens cortados), [[ptl-alocacao]] (produtividade por operador PTL), [[expedição]] (remessas, docas, transportadoras), [[shortpicking]] (corte/separação)
- **Referenciado por:** todos os capítulos operacionais → o capítulo de Dashboards e Relatórios fecha o documento como visão consolidada da operação
- **Não gera gate:** este bloco não condiciona nenhum outro bloco
- **Paralelos/variantes:** [[conferencia-manual]] (relatório de amostragem/auditoria pode alimentar o capítulo), [[recirculacao]] (relatório específico quando `st_rc = yes`)
