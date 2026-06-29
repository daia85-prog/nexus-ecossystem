# Matriz-Fragilidade — Insights

## Padrões Identificados

- A Matriz de Fragilidade é o único exemplo documentado no corpus de uma funcionalidade de algoritmo de cubagem específica de projeto (NavePark) que não é padrão em outros clientes — sugere que o WCS tem mecanismo de feature flag para esse tipo de variação
- A escala 1–9 foi escolhida intencionalmente com granularidade suficiente para separar 3 camadas físicas (base/meio/topo) com margem — escala 1-3 seria insuficiente para produtos com gradação contínua de robustez
- A sobrescrita por pedido (WMS enviando grau diferente do cadastro) é o mecanismo de adaptação para pedidos especiais (cliente VIP, produto frágil em promoção) sem alterar o cadastro global

## Variações Significativas

- Apenas NavePark (I25.4066) usa a Matriz de Fragilidade como documentado — outros projetos com cubagem usam apenas peso/volume físico para otimização
- A granularidade 1-9 pode ser insuficiente para armazéns com mix muito diverso (ex.: bebidas + eletrônicos + têxteis) — clientes com esse perfil tendem a criar regras adicionais por categoria

## Lacunas e Inconsistências

- Não está documentado o que acontece quando todos os volumes de um pallet têm o mesmo grau de fragilidade — o algoritmo ainda funciona (ordem qualquer) ou exige heterogeneidade?
- A relação entre Matriz de Fragilidade e o algoritmo de cubagem padrão (peso volumétrico, seleção de caixa) não está explicitada — os dois algoritmos rodam em sequência ou são mutuamente exclusivos?
- Não há mapeamento de quem mantém o cadastro de grau de fragilidade por SKU no cliente (área de produto? logística?) — dados desatualizados invalidam a lógica

## Inferências

**Inferência 1:** O fato de a funcionalidade estar documentada apenas para NavePark sugere que foi desenvolvida sob demanda para esse projeto e ainda não foi generalizada — existe potencial de valor para outros projetos de e-commerce com SKU diverso.
- Confiabilidade: alta
- Base: contexto de desenvolvimento específico explícito no dossiê de Cubagem

**Inferência 2:** O mecanismo de sobrescrita por pedido pode ser usado como "válvula de escape" quando o cadastro de graus está desatualizado — equipe de operação do cliente pode estar usando isso para compensar dados incorretos no cadastro.
- Confiabilidade: média
- Base: padrão comportamental comum em operações onde manutenção de cadastro é deficiente

---
*Gerado em 2026-06-29*
