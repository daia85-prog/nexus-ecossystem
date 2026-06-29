# Pesagem — Insights

## Padrões Identificados

- Check Weight aparece em projetos de alta variedade de SKU (eletrônicos, farmacêutico, e-commerce) onde erro de picking é estatisticamente mais frequente; projetos de atacado/distribuição com poucas SKUs tendem a omitir a etapa
- A balança dinâmica é sempre instalada após conferência e antes de indução no sorter — nunca antes da conferência (seria redundante pois o volume ainda pode ser aberto para correção)
- Tolerâncias abaixo de ±3% geram alto índice de falso-positivo (variação de tara de embalagem); tolerâncias acima de ±8% perdem eficácia na detecção de erros

## Variações Significativas

- Projetos com múltiplos tipos de embalagem (caixas + polibag + envelope) têm tabelas de tara distintas por tipo; projetos simples usam tara única global
- Quando o WMS não fornece peso unitário por SKU, o WCS opera em modo "peso aproximado" com tolerância maior (±15%), reduzindo drasticamente a utilidade do CW
- Alguns projetos calibram a balança diariamente com padrão de peso; outros dependem do fornecedor de hardware para manutenção periódica

## Lacunas e Inconsistências

- Não há documentação clara de como o WCS trata volumes com código ilegível (sem leitura de código antes da balança) — eles passam sem verificação ou são desviados?
- O comportamento da balança quando o volume passa inclinado ou descentrado na esteira não está mapeado nos dossiês disponíveis
- Não há registro de SLA para o posto de revisão CW: quanto tempo pode um volume ficar na fila antes de impactar o sorter?

## Inferências

**Inferência 1:** A etapa de pesagem reduz fraude interna (volume vazio ou com item substituído) além de erros de picking, embora a documentação foque apenas em erros operacionais.
- Confiabilidade: média
- Base: padrão do setor; não explicitado nos dossiês WCS disponíveis

**Inferência 2:** Em projetos onde a balança dinâmica não está disponível, o WCS provavelmente tem uma flag de configuração para desabilitar o CW sem remover o módulo do código.
- Confiabilidade: alta
- Base: padrão de arquitetura WCS observado em outros módulos opcionais

---
*Gerado em 2026-06-29*
