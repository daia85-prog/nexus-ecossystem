# Sorter-Rampas — Insights

## Padrões Identificados

- A saturação de rampas é a causa mais frequente de recirculação e de volumes no rejeito — operacionalmente, é mais importante esvaziar rampas rápido do que induzir volumes rápido
- O número de rampas físicas é o principal limitador do número de destinos simultâneos (rotas/transportadoras); projetos com muitas transportadoras precisam de rampas virtuais (compartilhamento temporal)
- Sinaleiros coloridos (verde/amarelo/vermelho) reduzem drasticamente a necessidade de comunicação verbal entre supervisores e operadores — presença dos sinaleiros é considerada requisito crítico de ergonomia

## Variações Significativas

- Sorters cross-belt têm capacidade de rampa definida por comprimento da gôndola de saída; sorters de sapata têm capacidade por largura + ângulo do chute
- Projetos com sorter dupla face (rampas em ambos os lados) são mais complexos de monitorar: WCS precisa de view unificada dos dois lados e o operador não consegue visualizar todos de um ponto
- Alguns projetos têm rampas "frias" (sem destino ativo) para absorção de overflow — WCS redireciona destino quando a principal satura

## Lacunas e Inconsistências

- O processo de realocação de destino (mudar qual rampa recebe qual rota) em tempo de operação não está documentado — é possível sem parar o sorter? Quem autoriza?
- Não há SLA documentado para tempo máximo de uma rampa em estado "cheia" antes de acionar supervisor
- A interação entre rampas de rejeito e rampas normais não está clara: o rejeito tem sinaleiro separado? Prioridade de esvaziamento?

## Inferências

**Inferência 1:** Rampas com destinos de alta frequência (maior volume de volumes por turno) devem ter capacidade maior ou posição privilegiada no layout do sorter — gestão de layout é uma decisão de projeto que o WCS não controla mas que impacta diretamente as métricas de recirculação.
- Confiabilidade: alta
- Base: correlação direta entre frequência e saturação na lógica do sistema

**Inferência 2:** O WCS provavelmente tem um parâmetro de "balanceamento de rampas" que distribui volumes entre rampas alternativas antes de saturar a primária, mas esse comportamento não está documentado explicitamente.
- Confiabilidade: média
- Base: funcionalidade comum em WCS de mercado; não confirmada nos dossiês disponíveis

---
*Gerado em 2026-06-29*
