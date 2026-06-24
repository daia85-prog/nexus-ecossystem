# dashboards-relatorios — Insights

## Padrões Identificados

- **Catálogo "a definir na implementação":** quase todo projeto repete que os relatórios serão alinhados com o cliente — o WCS entrega um conjunto-base flexível, não um set fixo.
- **Export universal:** Excel/PDF/CSV + filtro por data/hora é padrão em todos. Relatório que não exporta é exceção.
- **Relatório (histórico) × Dashboard (tempo real, passivo):** a distinção é consistente — dashboards são de monitoramento, sem ação direta.
- **Tudo carimbado com data/hora + operador:** a rastreabilidade por ação (quem/quando) é a base de quase todos os relatórios.

## Variações Significativas

- **Maturidade crescente dos dashboards:** projetos antigos têm só listas de relatórios; os recentes (Esperança, Barbecue, Octopus) trazem dashboards ricos (Rampa Cheia, Painel de Chutes, Backlog, Shortpicking em tempo real).
- **Foco por operação:** Reverse foca em anomalias/Nota Fiscal (logística reversa); BRF/Esperança em saturação de rampa e chutes (sorter); farma (FDBR) em rastreabilidade e curva ABC.
- **Granularidade de produtividade:** por estação, operador, cart, rampa, sorter, balança, portal — cada cliente escolhe o eixo relevante.

## Lacunas e Inconsistências

- **Tópico-destino de muitos desvios:** este é o tópico para onde apontam os desvios de dashboards detectados em [[sorter-inducao]], [[ptm]], [[paletizacao]], [[shortpicking]], [[picking-pbl]] — muitos dashboards "moram" fisicamente no RAW de outros tópicos.
- **Conteúdo majoritariamente exemplificativo:** as seções listam "exemplos de relatórios" sem especificação de campos/cálculo — baixo detalhamento técnico, alto volume.
- **Seções candidatas a desvio / Fase 2:**
  - **estoque / inventario:** "Controle de Estoque" (tela de foto em tempo real).
  - **cancelamento / integracao-pedidos:** "Cancelamento de volumes FullCase" (Octopus).
  - **conferencia / logística reversa:** "Relatório da Nota Fiscal", "Anomalias por SKU/Posição" (Reverse).
- **Imagens ausentes (crônico):** quase todo dashboard diz "imagem meramente ilustrativa" — o tópico é visual e o RAW só tem texto.

## Inferências

- **Inferência:** Os dashboards/relatórios são uma camada transversal que consome eventos de todos os processos; deveriam ser projetados sobre um modelo de eventos único (coleta/conferência/sorter/PTL), não por tópico.
  - **Confiabilidade:** alta
  - **Base:** os mesmos eventos (data/hora, operador, RG, motivo) alimentam relatórios de produtividade, rastreabilidade e exceção em todos os projetos.

- **Inferência:** A evolução para dashboards em tempo real (saturação, chutes, backlog) reflete a maturação da operação — de "auditar depois" para "agir durante".
  - **Confiabilidade:** média
  - **Base:** os dashboards ricos aparecem nos projetos de 2025–2026; os antigos só listam relatórios estáticos.

- **Inferência:** A natureza "a definir na implementação" indica que o valor do tópico está menos no conteúdo-fonte e mais em consolidar o **catálogo recorrente** — o que este dossiê faz ao agrupar as categorias.
  - **Confiabilidade:** alta
  - **Base:** a frase de "alinhar na implementação" se repete em quase todos os projetos.

---
*Gerado em 2026-06-24*
