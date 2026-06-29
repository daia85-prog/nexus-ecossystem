# Pesagem — Dossiê Técnico

**Bloco:** Conferência | **Tópico:** Pesagem
**Seções analisadas:** 4 | **Fonte:** Sintetizado a partir de dossiês de Conferência e Cubagem (2026-06-29)

## Visão Geral

A pesagem (Check Weight) é um controle de qualidade de produto que afere o peso real do volume contra o peso esperado pelo WCS (calculado a partir do cadastro de SKUs). Executada por uma balança dinâmica posicionada inline na esteira, após as etapas de conferência/packing e antes da indução no sorter. Volumes fora da tolerância são automaticamente desviados para uma rampa de rejeito/revisão, evitando que caixas com conteúdo incorreto (produto faltando, produto trocado, caixa aberta) sigam para expedição.

## Fluxo do Processo

1. Volume passa pela esteira após conferência/packing
2. Balança dinâmica lê o peso real em milissegundos (sem parar o volume)
3. WCS compara peso real vs. peso esperado (soma dos SKUs + peso da embalagem)
4. Se dentro da tolerância → volume segue para [[sorter-inducao]]
5. Se fora da tolerância → WCS desvia volume para rampa de revisão (Check Weight Fail)
6. Operador revisa o volume no posto de revisão, corrige e reinduz manualmente ou descarta

## Telas e Funcionalidades

| Tela | Função |
|------|--------|
| Monitor de Pesagem | Exibe histórico de leituras, médias e desvios por turno |
| Fila de Revisão CW | Lista de volumes desviados aguardando análise do supervisor |
| Parâmetros CW | Configuração de tolerância (%) por família de produto ou geral |

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Tolerância de peso configurada por parâmetro (padrão ±5% do peso esperado) |
| RN-02 | Peso esperado = soma(peso_unitario × qtd por SKU) + peso da embalagem selecionada |
| RN-03 | Volume com peso = 0 (balança não leu) é tratado como erro e desviado |
| RN-04 | Volumes desviados por CW geram evento auditável com peso lido e peso esperado |
| RN-05 | Balança dinâmica não requer parada do volume; reading rate mínimo definido por velocidade da esteira |
| RN-06 | Família de produtos pode ter tolerância diferenciada (ex.: produtos líquidos ±8%) |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| NavePark (I25.4066) | Check Weight integrado ao trecho pós-cubagem; tolerância padrão ±5% |
| Projetos sem balança inline | Check Weight desativado; conferência por contagem manual apenas |
| Projetos com múltiplas balanças | WCS agrega leituras de todas as estações antes de decidir desvio |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| WMS | Consulta | Pesos de cadastro de SKUs e embalagens (peso unitário, tara) |
| PLC / CLP | Evento | Balança dinâmica envia leitura via OPC-UA/Modbus ao WCS |
| WCS Core | Decisão | Compara leitura e emite comando de desvio ao transportador |
| [[sorter-inducao]] | Sequência | Volume aprovado segue ao sorter após pesagem |
| [[sorter-rejeito]] | Destino | Rampa de rejeito recebe volumes CW Fail |

## Terminologia

| Termo | Definição |
|-------|-----------|
| Check Weight (CW) | Nome técnico da etapa de pesagem dinâmica |
| Balança Dinâmica | Equipamento de pesagem inline, sem parada do volume |
| Tolerância CW | Percentual de desvio aceitável entre peso real e esperado |
| CW Fail | Evento de volume reprovado na pesagem |
| Peso Esperado | Soma dos pesos de todos os SKUs da caixa + tara da embalagem |

---
*Gerado em 2026-06-29 · síntese a partir de dossiês de Conferência, Cubagem e Sorter*
