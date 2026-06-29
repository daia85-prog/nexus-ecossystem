# Romaneio — Insights

## Padrões Identificados

- O romaneio é o único documento WCS que tem duplo papel: lógico (agrupador de volumes para PTL) e físico (acompanha o pallet impresso ou via QR) — essa dualidade causa confusão quando o cliente refere ao "romaneio" em contextos diferentes
- A tela pt9 é frequentemente o gargalo operacional no início do turno: supervisores precisam ativar romaneios antes que os operadores possam depositar — atraso na ativação paralisa o PTL
- Projetos que unificam romaneio WCS + nota fiscal do WMS na mesma etiqueta reduzem o número de papéis por pallet e erros de associação

## Variações Significativas

- Transportadora "Própria" usa romaneio como agrupador principal; transportadoras TRC (terceiras) normalmente têm seu próprio CT-e como agrupador — o WCS precisa lidar com ambos simultaneamente em projetos com mix de frotas
- Projetos com WMS que gera romaneio têm números de romaneio vindos do WMS (com regra de negócio do cliente); projetos WCS-centric geram número sequencial interno — isso impacta a rastreabilidade downstream
- Alguns projetos têm "romaneio parcial" (fechar pallet antes de completar o romaneio por limitação de peso/volume físico) — a regra de autorização de fechamento parcial varia por cliente

## Lacunas e Inconsistências

- O comportamento da pt9 quando dois supervisores tentam ativar o mesmo romaneio simultaneamente não está documentado — race condition?
- Não há mapeamento de quanto tempo um romaneio pode ficar ativo (posição PTL ocupada) sem receber volumes antes de ser cancelado automaticamente ou por supervisor
- A integração de cancelamento de romaneio (pallet incorreto ou romaneio errado ativado) não está documentada — devolver volumes às ordens originais?

## Inferências

**Inferência 1:** A dependência de pt9 para iniciar operação no PTL significa que a tela de romaneios é o ponto crítico de disponibilidade — se pt9 falhar ou ficar lenta, toda a expedição PTL para; o WCS provavelmente tem modo degradado para esse caso.
- Confiabilidade: média
- Base: padrão de design de sistemas críticos; não confirmado explicitamente

**Inferência 2:** O romaneio provavelmente tem um campo de "versão" ou "atualização" para cobrir casos onde o WMS reprocessa um pedido e muda os volumes de um romaneio já ativado no PTL.
- Confiabilidade: baixa
- Base: necessidade operacional óbvia; ausência de menção pode significar que não é suportado ainda

---
*Gerado em 2026-06-29*
