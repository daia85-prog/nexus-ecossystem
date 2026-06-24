# cancelamento-pedidos — Insights

## Padrões Identificados

- **"Ponto de não-retorno" = alocação no PTL:** o invariante é que, uma vez alocado no pallet, o cancelamento sai das mãos do WCS e vai para o WMS. Todo o resto é cancelável com tratativa.
- **Supervisão obrigatória:** o cancelamento manual sempre exige senha/perfil elevado — controle de autoria consistente.
- **Coletas parciais → "ANÁLISE":** o destino dos itens já coletados é padrão entre projetos (bloqueia recoleta, preserva acuracidade).
- **Cancelar ≠ deletar:** vários projetos (Gemini/BCP) setam status "CANCELADA" em vez de apagar, justamente porque o item pode estar em processamento físico.

## Variações Significativas

- **Granularidade:** de cancelamento do pedido inteiro (maioria) ao **cancelamento por volume** (NavePark) — este último evita reprocessar o pedido todo por erro de quantidade.
- **Canal:** integração de mensagem (CATO/WMCATO) × tabela compartilhada (Esperança) × ação manual no WCS. Três mecanismos.
- **Integra ou não:** o cancelamento "puro" no WCS não integra (só status interno); já a devolução e o CATO integram. Atenção a qual caminho cada projeto usa.

## Lacunas e Inconsistências

- **Tópico nasceu fragmentado:** as regras estavam espalhadas por put-to-wall, integracao-wcs-wms, integracao-wms-erp, cubagem e packing. Este dossiê é uma **consolidação** — as seções originais devem ser rastreadas e movidas/referenciadas.
- **Conteúdo sintetizado, não re-extraído:** o RAW deste tópico foi montado a partir das análises dos insights, não de uma nova varredura das fontes. Validar contra os documentos originais.
- **Sobreposição com [[integracao-wms-erp]] (CATO) e [[integracao-wcs-wms]] (devolução):** o cancelamento toca esses contratos; evitar duplicar — referenciar.

## Inferências

- **Inferência:** O cancelamento merece ser modelado como uma **máquina de estados do volume** (Integrado→Disponível→Em separação→Indução→Na rampa→Alocado), com uma transição de cancelamento permitida por estado.
  - **Confiabilidade:** alta
  - **Base:** Esperança descreve exatamente esses estados com tratativas distintas; os demais projetos descrevem subconjuntos coerentes.

- **Inferência:** O cancelamento granular (NavePark) tende a se generalizar — corrigir quantidade sem reprocessar o pedido é ganho operacional claro.
  - **Confiabilidade:** média
  - **Base:** aparece no projeto mais recente com justificativa explícita de evitar reprocessamento.

- **Inferência:** A consolidação deste tópico confirma a hipótese levantada em [[put-to-wall]]: o cancelamento é coeso o suficiente para um MD próprio.
  - **Confiabilidade:** alta
  - **Base:** ~5 famílias de regras distintas e estáveis entre 6+ projetos.

---
*Gerado em 2026-06-24 · auto-detectado na Fase 2*
