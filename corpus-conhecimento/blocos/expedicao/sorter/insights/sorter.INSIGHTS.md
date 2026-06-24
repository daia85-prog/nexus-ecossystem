# sorter — Insights

## Padrões Identificados

- **Integrar antes de induzir, validar contra o mapa, comandar o PLC:** o ciclo do sorter é invariante entre projetos. Muda a topologia (rampas, PTLs), não a lógica.
- **Decisão no WCS, execução no PLC:** consistente — o WCS decide o desvio, o PLC executa; a comunicação em rede local é deliberada (velocidade).
- **Faturamento dirigido por leitura (autoBilling/Container Completo):** ler o último volume do pedido dispara o faturamento no ERP — o sorter é o gatilho fiscal da expedição.
- **Contingência sempre logada:** ignorar peso ou forçar destino exige registro de usuário/data e marca o volume como "manual" — auditoria obrigatória.

## Variações Significativas

- **Topologia muito variável:** FDBR (6 saídas, sem balança) × Octopus (18 rampas/54 PTL, 3 leitores) × BRF (crossbelt). Parametrização física pesada.
- **Saída PIN (FDBR):** destino dedicado a pedidos que exigem aprovação — caso específico de farma/controlados.
- **Retorno por DBLINK (Octopus):** tabelas transacionais de retorno (status induzido, montagem de paletes) com chaves/flags — modelo de integração distinto da mensagem.
- **Contingência irreversível (Barbecue):** forçar destino de um transporte não pode ser desfeito sistemicamente — decisão de design conservadora.

## Lacunas e Inconsistências

- **Tópico guarda-chuva com sobreposição máxima:** indução, mapa, rejeito e PTL têm tópicos próprios; o RAW de "sorter" repete muito desses. O conteúdo exclusivo é a arquitetura + autoBilling + contingência + PLC.
- **Seções candidatas a desvio / Fase 2:**
  - **sorter-inducao:** "Separação de itens controlados" induzidos como caixa fechada.
  - **ptl-alocacao / sorter:** "Tela de agrupamento para expedição".
  - **cancelamento / integracao-pedidos:** "Cancelamento de Volumes".
  - **integracao-wms-erp:** "Envio de informações (DBLINK)" — tabelas de retorno.
  - **integracao-cadastros / picking:** "Nota Fiscal", "Célula" (Reverse — hardware/logística reversa).
  - **sistema:** "Especificação" (arquitetura, repetida em muitos tópicos).
- **548 seções fortemente infladas:** boa parte é repetição de "Especificação" e conteúdo dos sub-tópicos de sorter.
- **Imagens ausentes:** layout do sorter e dashboards de saída referenciados sem captura.

## Inferências

- **Inferência:** "sorter" deveria ser lido como índice dos quatro sub-tópicos + um núcleo de equipamento/contingência/faturamento; tentar consolidar tudo aqui duplicaria indução/mapa/rejeito/PTL.
  - **Confiabilidade:** alta
  - **Base:** o RAW repete largamente o conteúdo dos sub-tópicos; o exclusivo é arquitetura, autoBilling, contingência e PLC.

- **Inferência:** O sorter é o ponto de integração físico-fiscal: a leitura do último volume vira faturamento (autoBilling), então a acuracidade de leitura impacta diretamente o financeiro.
  - **Confiabilidade:** alta
  - **Base:** "Container Completo" dispara o faturamento no ERP após a leitura de todos os volumes.

- **Inferência:** A comunicação em rede local (sem nuvem) é requisito de latência — o desvio precisa ser decidido em milissegundos enquanto o volume se move; dependência de internet inviabilizaria.
  - **Confiabilidade:** alta
  - **Base:** o material justifica explicitamente a rede local pela velocidade do acendimento/desvio.

---
*Gerado em 2026-06-24*
