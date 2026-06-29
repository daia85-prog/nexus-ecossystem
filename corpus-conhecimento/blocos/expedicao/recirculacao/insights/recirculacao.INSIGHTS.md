# Recirculacao — Insights

## Padrões Identificados

- Taxa de recirculação alta (>10% dos volumes em horário de pico) é sintoma primário de subprovisionamento de rampas ou de ritmo de indução acima do ritmo de esvaziamento pelos operadores — o WCS mede o sintoma mas não pode resolver a causa raiz
- O limite padrão de 3 voltas é um compromisso entre dar tempo suficiente para a rampa liberar e não circular um volume para sempre — projetos com sorters lentos (menor RPM da esteira) tendem a aumentar para 5 voltas
- Perda de tracking é mais frequente em embalagens escuras, refletivas ou sem código de barras exposto — o WCS trata da mesma forma que rampa cheia, mas a causa raiz é diferente (qualidade de leitura, não saturação)

## Variações Significativas

- Projetos com sorter linear (sem retorno físico possível) não têm recirculação — o volume vai direto ao rejeito; a distinção é física, não configurável
- Sorters com múltiplas rampas por destino permitem tentar rampa alternativa antes de iniciar recirculação — reduz drasticamente a taxa de recirculação em projetos bem dimensionados
- Limite de voltas configurado por tipo de volume em alguns projetos: volumes de alta prioridade têm limite maior (5 voltas) para evitar que vão ao rejeito

## Lacunas e Inconsistências

- O sinaleiro "piscando amarelo" durante recirculação não está especificado com precisão: qual a frequência do pisca? É diferente de outros estados amarelos?
- Não há documentação de como o WCS recalcula a posição do volume após cada volta (sincronização com PLC entre voltas)
- O comportamento de volumes que entram em recirculação por perda de tracking vs. rampa cheia não gera relatório diferenciado — impossível separar as causas raiz na análise de dados

## Inferências

**Inferência 1:** A métrica de "volumes no rejeito por excesso de recirculação" é um indicador de saúde operacional mais valioso do que a taxa bruta de rejeito — separar CIRC_LIMIT de outros motivos de rejeito deve ser uma melhoria de dashboard de alta prioridade.
- Confiabilidade: alta
- Base: distinção de causa raiz é requisito básico para ação corretiva direcionada

**Inferência 2:** Um operador bem treinado que monitora o mapa de rampas e esvazia rampas próximas de saturar proativamente pode reduzir a taxa de recirculação em 80%+ — a tecnologia (sinaleiro) está disponível; o processo operacional (resposta ao sinaleiro) é o gargalo real.
- Confiabilidade: alta
- Base: análise lógica do sistema; confirmado pelo padrão de boas práticas operacionais em WCS

---
*Gerado em 2026-06-29*
