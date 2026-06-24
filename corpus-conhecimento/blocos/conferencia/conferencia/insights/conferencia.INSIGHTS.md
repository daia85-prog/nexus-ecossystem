# conferencia — Insights

## Padrões Identificados

- **Conferência por exceção, não 100%:** o desenho dominante desvia só os volumes que disparam um critério (short, peso, amostragem, cliente). Conferir tudo é exceção (FDBR, Guatemala). A balança é o filtro de qualidade primário.
- **Modo de rigor configurável:** quase todos oferecem o espectro "aprovar sem ler → bipar SKU+qtd → item a item", selecionável por flag/operação. Flexibilidade é regra.
- **Termina sempre em caixa + etiqueta:** a conferência define a caixa de expedição e imprime a etiqueta final — é o gêmeo lógico do [[packing]] (muitos projetos usam "Conferência/Packing" como uma coisa só).
- **Tratativa de divergência tripla:** Completar / Coletar / Cortar é o padrão de fechamento, com corte exigindo autenticação.

## Variações Significativas

- **Responsável: WCS × WMS:** maioria atribui ao WCS; Octopus atribui ao WMS e abre mão da confirmação por volume (fluxo nunca trava). Decisão arquitetural oposta.
- **Tecnologia de validação:** leitura manual (item a item) × **Check Weight** (balança) × **Cross-Check** (câmera no portal) × **RFID** (antena na caixa, Beleza). Quatro mecanismos distintos para o mesmo objetivo de acuracidade.
- **Tolerância de peso muito específica por cliente:** BR usa 260g a múltiplos de 20g; NavePark ±5%/50g — depende da resolução física da balança.
- **Cross-Check como gate do sorter:** Eletro/Beta movem parte da conferência para o portal automático, reduzindo conferência manual.
- **Conferência de pallet opcional e desacoplada (CDSK):** não integra resultado nem afeta sorter/PTL — caso atípico de conferência "de cortesia".

## Lacunas e Inconsistências

- **Cross-Check repetido literal:** Eletro (×2), Beta e Beta Full SP trazem o mesmo texto de Cross-Check — peso inflado.
- **Fronteira conferência × packing × shortpicking borrada:** muitos blocos ("Processo de Conferência", "Corte de Itens Faltantes") aparecem idênticos em [[packing]] e [[shortpicking]]. Os três tópicos compartilham o mesmo fluxo de fim de linha.
- **Seções candidatas a desvio / Fase 2:**
  - **integracao-cadastros:** "Cadastro de impressoras" (FDBR).
  - **shortpicking / integracao:** "SHORTINDICATOR – Fluxo de Decisão (CC)" (Beleza).
  - **sorter-rejeito:** classificação de rejeito por Cross-Check (motivo "SKU Divergente").
  - **possível tópico próprio "cross-check":** o Cross-Check no portal é coeso e repetido — poderia virar MD dedicado, dado que é validação automática no sorter, não conferência manual.
- **Imagens ausentes:** "Etiqueta pós conferência", exemplos de etiqueta de packing não capturados.

## Inferências

- **Inferência:** Conferência, packing e shortpicking deveriam ser lidos como um subsistema único de "fim de linha"; separá-los em três MDs gera sobreposição inevitável.
  - **Confiabilidade:** alta
  - **Base:** blocos de texto idênticos sobre corte/tratativa aparecem nos três; vários projetos usam o heading "Conferência/Packing".

- **Inferência:** A tendência é substituir conferência manual por validação automática (Check Weight + Cross-Check + RFID), reservando o operador para exceções.
  - **Confiabilidade:** média
  - **Base:** os projetos de 2025–2026 (NavePark, Beleza, Beta) investem em balança dinâmica, câmera e RFID como primeiro filtro.

- **Inferência:** O peso esperado depende criticamente do cadastro de produtos (`peso_item`) e de embalagens; cadastro incompleto degrada o Check Weight e infla os desvios para conferência manual.
  - **Confiabilidade:** alta
  - **Base:** todos os projetos com balança derivam o esperado de "soma dos pesos cadastrais + tara" (ver [[integracao-cadastros]]).

---
*Gerado em 2026-06-24*
