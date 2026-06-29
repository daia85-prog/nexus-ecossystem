# Gestao-Estoque — Insights

## Padrões Identificados

- Em projetos WCS-centric (sem WMS robusto), o WCS acaba sendo o master de estoque de fato — mesmo quando não foi projetado para isso — criando dependência não planejada
- Bloqueio de posição é a ferramenta mais usada para "congelar" uma divergência enquanto o supervisor investiga, evitando que picking continue reduzindo um saldo já suspeito
- Inventário cíclico é preferido ao total em 100% dos projetos mapeados: parar toda a operação para contar tem custo operacional muito alto

## Variações Significativas

- A granularidade do saldo varia: projetos com lote/validade controlam saldo por (posição + lote + validade); projetos sem rastreabilidade controlam apenas por (posição + SKU)
- Projetos 3PL exigem partição de estoque por cliente dentro do mesmo armazém — o WCS atual não tem tenant isolation nativa, o que é resolvido por prefixo de endereço ou tag de cliente
- A frequência de sync WCS↔WMS varia de near-real-time (a cada movimento) a batch diário; projetos com sync lento têm janela de divergência maior

## Lacunas e Inconsistências

- Não há documentação do comportamento do WCS quando recebe dois movimentos simultâneos para a mesma posição (race condition de saldo)
- O processo de devolução de picking (volume retornado pelo operador à posição original) não está mapeado — aumenta saldo? Cria pendência?
- Falta mapeamento de quais perfis de usuário têm permissão para ajuste de inventário sem aprovação

## Inferências

**Inferência 1:** Em projetos com WMS fraco, o WCS provavelmente tem telas de gestão de estoque mais desenvolvidas (com mais filtros e exportações) do que em projetos com WMS robusto, onde o WMS já supre essa necessidade.
- Confiabilidade: média
- Base: padrão observado na distribuição de funcionalidades entre projetos

**Inferência 2:** O INBOX com ~35 seções de infraestrutura sem tópico sugere que gestão de estoque também tem seções INBOX orphan aguardando categorização — vale busca específica.
- Confiabilidade: alta
- Base: padrão do corpus; seções INBOX orphan existem em múltiplos blocos

---
*Gerado em 2026-06-29*
