# Integracao — Insights (Bloco)

## Padrões Identificados

- O bloco de Integração concentra os pontos de maior risco técnico do WCS: falhas de integração impactam diretamente o fluxo físico (pedidos não chegam, pallets não são registrados, estoque diverge)
- As 4 integrações principais (WCS↔WMS, WMS↔ERP, Cadastros, Pedidos) têm características distintas: algumas são síncronas e bloqueantes, outras são assíncronas com reconciliação — misturar os padrões em um mesmo projeto é fonte comum de bugs
- Projetos sem WMS robusto terminam usando o WCS como master de integração de dados — papel não projetado e que gera manutenção adicional

## Variações Significativas

- Clientes com WMS proprietário têm contratos de API com breaking changes não comunicados — o WCS precisa de versionamento de contrato para sobreviver a atualizações do WMS
- Frequência de sync varia de tempo real (evento a evento) a batch noturno, dependendo da capacidade do WMS do cliente
- Integração de cancelamento de pedido é a que mais varia por projeto: alguns cancelam em cascata (WCS desfaz picking), outros apenas marcam como cancelado para o próximo ciclo

## Lacunas e Inconsistências

- Não há matriz consolidada de todas as mensagens/eventos trocados entre WCS e WMS (inventário do contrato de API) disponível no corpus
- O tratamento de duplicatas (mensagens enviadas duas vezes por timeout de rede) não está documentado para a maioria das integrações

## Inferências

**Inferência 1:** Uma matriz de integrações (por sistema, direção, frequência, modo síncrono/assíncrono, payload) seria o documento mais valioso a produzir a partir do corpus — não existe ainda.
- Confiabilidade: alta
- Base: ausência documentada; pedidos recorrentes da equipe por essa visão

---
*Gerado em 2026-06-29*
