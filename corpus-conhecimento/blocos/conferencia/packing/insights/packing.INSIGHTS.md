# packing — Insights

## Padrões Identificados

- **Packing = troca de caixa + etiqueta + sorter:** o núcleo é estável em todos os projetos — sair da caixa plástica, entrar na caixa de expedição, etiquetar e induzir. A etiqueta final é o artefato central.
- **Validação precede a impressão:** regra forte e repetida — o WCS só imprime a etiqueta final de volumes aprovados (peso ou conferência). Isso amarra packing à balança/conferência.
- **Etiqueta final serve dois consumidores:** sorter (desvio) e PTL (alocação). É o elo entre embalagem e expedição.
- **Caixa plástica é um recurso circulante:** quase todos mencionam o retorno da caixa plástica ao ciclo; NavePark formaliza isso com AMR.

## Variações Significativas

- **Espectro de envolvimento do WCS:** de "tudo controlado pelo WCS com impressão de etiqueta" (BP) a "sem intervenção sistêmica" (Master) — a mesma palavra "packing" cobre níveis de automação opostos.
- **Packing na conferência × dedicado:** FDBR/Peter fazem packing na estação de conferência (mesmo operador); BP/Heart usam estações dedicadas ao fim da linha. Impacta layout e perfil de operador.
- **Automação física crescente:** projetos recentes adicionam seladora automática (BR) e balança dinâmica + reindução automática (NavePark) — tendência de reduzir toque humano.
- **Numeração dinâmica de volumes (Toys):** o "Pede Caixa" com recálculo de "X de Y" é sofisticado e único; depende da cubagem do WCS.

## Lacunas e Inconsistências

- **Seções de outros tópicos roteadas para cá (candidatos a desvio/Fase 2):**
  - **shortpicking:** "Análise de Corte" (Flower, repetida 5×) e "Corte de Coleta" (BRF) — tratam de corte/falta, não de embalagem.
  - **reabastecimento:** "Repostaje / Solicitação de Reposição" (Guatemala).
  - **integracao:** "Pedidos Sem Confirmação de Picking", "Múltiplas Confirmações Pollux" (Gemini), "Tela gerar volumes Flag Automação/Manual" (Zenatur).
  - **picking-fullcase / cadastros:** "Parâmetro de Picking Exceção" (Beta).
  - **order-start / separacao:** "By-Pass Picking" (I21.131).
  - **paletizacao / expedicao:** "Abertura e fechamento de gaiola" + integração "Ship" (Cancun).
  - **dashboards / sorter:** "Monitoramento de Leitura nas Bicas" (ST).
- **"Análise de Corte" domina indevidamente:** 5 das 64 seções são o mesmo texto de análise de corte do Flower — peso desproporcional para um conteúdo que nem é de packing.
- **Imagens/layouts ausentes:** etiquetas e telas referenciadas sem captura.

## Inferências

- **Inferência:** "Packing" e "Conferência" são frequentemente a mesma estação física com dois papéis; o tópico [[packing]] e a conferência ([[conferencia]]) deveriam ser lidos em conjunto.
  - **Confiabilidade:** alta
  - **Base:** múltiplos projetos (FDBR, Flower, Dana, Octopus) usam o heading combinado "Conferência / Packing" e o mesmo operador.

- **Inferência:** A impressão condicionada à aprovação é um controle antifraude/antierro — impede expedir volume não validado.
  - **Confiabilidade:** média
  - **Base:** a regra "só imprime aprovados" é explícita, mas o material não declara a motivação; é interpretação.

- **Inferência:** A etiqueta final depende da cubagem e do cadastro de embalagens ([[integracao-cadastros]]) e alimenta o roteamento do sorter ([[sorter-mapa-rota]]) e do PTM/PTL.
  - **Confiabilidade:** alta
  - **Base:** numeração de volumes usa cubagem; a etiqueta é explicitamente lida no sorter e no PTL.

---
*Gerado em 2026-06-24*
