# sorter-rejeito — Insights

## Padrões Identificados

- **Taxonomia estável de motivos:** NoRead, Sem Rota, MultiRead, Rampa Cheia, Cancelamento, Perda de Tracking aparecem quase idênticos em Peter, Eletro, BP e Beta. É a lista canônica; Beta acrescenta "Sem Mapa" e Eletro/Beta acrescentam "SKU Divergente".
- **Recirculação antes do rejeito:** rampa cheia e perda de tracking quase sempre recirculam (padrão 3×) antes de virar rejeito — o rejeito é último recurso, não primeira resposta.
- **Rejeito é recuperável:** todos enfatizam que o volume é tratado e **reinduzido** (ou levado manualmente à rampa) — o ciclo não morre no rejeito.
- **Cancelamento é o único terminal:** é o único motivo que explicitamente **não** retorna ao sorter.

## Variações Significativas

- **6 × 8 motivos:** Beta é o mais granular (8, com "Sem Mapa" e SKU Divergente + tratativa dupla); BP é o mais enxuto (6). A diferença reflri maturidade da especificação.
- **Tratativa dupla (Beta):** reinduzir antes do portal **ou** levar à rampa + scanner fixo (atualiza dashboard/integração) — flexibilidade ausente nos outros.
- **Recirculação × rejeito direto:** Peter manda rampa cheia direto ao rejeito; Eletro/Britânia recircula primeiro. Comportamento configurável por cliente.
- **Contingência IA (Octopus):** o IVT+DUN é um mecanismo específico para códigos de má qualidade — recuperação de leitura, não tratativa de rejeito clássica.

## Lacunas e Inconsistências

- **Duplicação massiva:** "Motivos de Rejeito do Sorter" aparece idêntico em Eletro (×2 revisões) e BP (×3 revisões) — a contagem de 140 seções é fortemente inflada; o conteúdo único é ~15.
- **Forte sobreposição com [[sorter-inducao]] e [[sorter-mapa-rota]]:** "Sem Rota"/"Sem Mapa" derivam do mapa; contingência IVT+DUN também aparece na indução; "Volumes Não Tratáveis" foi roteado para a indução. Os três tópicos de sorter compartilham fronteiras.
- **Seções candidatas a desvio / Fase 2:**
  - **sistema / hardware:** specs de "Estação de Rejeito" (desktop, leitor, impressora).
  - **dashboards-relatorios:** "Dashboard Rampa Cheia" e KPIs de recirculação (aparecem em projetos correlatos).
  - **conferencia:** "Produto Incorreto / SKU Divergente" deriva do cross-check ([[conferencia]]).
- **"Perca de Tracking":** erro de digitação recorrente ("Perca" em vez de "Perda") copiado do material-fonte.

## Inferências

- **Inferência:** O rejeito é o espelho negativo do [[sorter-mapa-rota]]: "Sem Rota" e "Sem Mapa" são falhas de configuração do mapa, não do volume — boa parte do rejeito é evitável com mapa bem mantido.
  - **Confiabilidade:** alta
  - **Base:** dois dos motivos derivam diretamente da ausência de vínculo rota↔rampa no mapa.

- **Inferência:** A recirculação parametrizável é um amortecedor de throughput — absorve picos de rampa cheia sem parar a esteira; o valor ideal depende da velocidade de liberação das rampas.
  - **Confiabilidade:** média
  - **Base:** o material liga a recirculação a "dar tempo aos operadores de liberar a rampa", com limite ajustável por operação.

- **Inferência:** Os três tópicos de sorter (indução, mapa-rota, rejeito) deveriam ser lidos em conjunto — descrevem entrada, decisão e exceção do mesmo equipamento.
  - **Confiabilidade:** alta
  - **Base:** compartilham portal, PLC, mapa e motivos; o conteúdo migra livremente entre os três RAWs.

---
*Gerado em 2026-06-24*
