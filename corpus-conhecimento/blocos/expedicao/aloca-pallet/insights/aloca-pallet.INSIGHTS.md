# Aloca-Pallet — Insights

## Padrões Identificados

- Falhas na integração Aloca Pallet são silenciosas para o operador: o pallet físico existe, mas o WMS não sabe do conteúdo — criando divergência de estoque sem alerta visível no chão de fábrica
- O contexto picking-pallet com PRIX fixo como gatilho é específico de layouts onde o pallet não passa por PTL — revela que o WCS tem dois caminhos de expedição com a mesma integração no final
- A idempotência da integração (não duplicar registros no WMS ao reenviar) é crítica mas raramente testada em projetos — duplicatas causam inventário negativo no WMS

## Variações Significativas

- Modo síncrono (WCS aguarda ACK do WMS) vs. assíncrono (fire-and-forget) muda completamente o comportamento de erro: no síncrono, o operador é bloqueado imediatamente; no assíncrono, a divergência só é detectada no fechamento diário
- Projetos com WMS lento (resposta > 2s) evitam o modo síncrono pois bloqueia a linha de expedição — usam fire-and-forget com reconciliação posterior
- A granularidade do payload varia: alguns projetos enviam nível de NF (nota fiscal), outros enviam nível de SKU/quantidade — a diferença impacta o que o WMS consegue conferir

## Lacunas e Inconsistências

- Não há documentação do timeout do WCS para aguardar ACK do WMS no modo síncrono — quanto tempo espera antes de marcar como "pendente"?
- O processo de cancelamento/estorno de Aloca Pallet (pallet incorreto que precisa ser desfeito antes do carregamento) não está mapeado
- Não há logging detalhado do payload completo de Aloca Pallet nos dossiês disponíveis — dificulta diagnóstico de divergências em produção

## Inferências

**Inferência 1:** A separação de contextos (picking-pallet PRIX vs. paletização PTL) no mesmo módulo Aloca Pallet sugere que há um campo "origem" no payload que permite ao WMS distinguir o tipo de expedição — isso pode ser útil para relatórios de produtividade diferenciados.
- Confiabilidade: média
- Base: boa prática de integração; não confirmado explicitamente nos dossiês

**Inferência 2:** O volume de chamados relacionados a divergências WCS/WMS na expedição é provavelmente maior do que os dossiês sugerem — falhas de Aloca Pallet tendem a ser categorizadas como "problema WMS" pelo cliente, não como problema WCS.
- Confiabilidade: média
- Base: padrão observado em diagnósticos de projetos; atribuição incorreta de causa raiz é comum

---
*Gerado em 2026-06-29*
