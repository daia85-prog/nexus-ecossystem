# cubagem — Insights

## Padrões Identificados

- **Cubagem alimenta tudo:** o resultado da cubagem define caixas, etiquetas (código da caixa sugerida), consolidação multi e a montagem do pallet. É um cálculo de origem que se propaga por picking, packing e paletização.
- **"Responsabilidade do WCS" é a frase-chave:** quase todas as seções abrem declarando quem cuba (WCS ou WMS) — é o primeiro fato a estabelecer em qualquer projeto.
- **Texto-base replicado:** "A cubagem das caixas plásticas... será de responsabilidade do WCS... caixa plástica padrão" repete quase literal em FDBR e Beleza; "Cubagem e Seleção Automática" idêntico em Beta e Beta-Esteio.
- **Um código de barras por caixa:** regra de leitura no sorter aparece em Peter, Master — restrição física recorrente.

## Variações Significativas

- **Padrão única × melhor caixa × algoritmo 3D:** três filosofias distintas. FDBR/Beleza simplificam (sempre a mesma caixa); Beta otimiza por catálogo; NavePark usa algoritmo tridimensional. Implementações bem diferentes.
- **Quem cuba:** WCS (maioria) × WMS (Peter/Master). Define se o tópico é um motor de cálculo ou só consumo de dados prontos.
- **Validação dimensional opcional (Beta):** poder ligar/desligar a checagem de A/L/C além do m³ é um diferencial de precisão configurável.
- **Matriz de Fragilidade como cubagem ordenada (NavePark):** estende a cubagem para sequenciar a montagem física do pallet (pesado→leve) — vai além do "cabe ou não cabe".
- **Galeia/multi (Flower):** consolidação de pedidos pequenos no PTW é um caso específico de e-commerce com muitos pedidos de poucos itens.

## Lacunas e Inconsistências

- **Fronteira com paletizacao:** a Matriz de Fragilidade 1–9 (NavePark) é tanto cubagem (sequenciamento) quanto [[paletizacao]]/[[picking-pallet]] (montagem do pallet) — conteúdo compartilhado, risco de duplicação.
- **Seções candidatas a desvio / Fase 2:**
  - **picking-fullcase:** "Full Case (Caixa Fechada)" (Cristal), "Costas" (NavePark full case no mezanino).
  - **etiquetas:** "Etiqueta Picking (Fracionado)" (Cristal).
  - **cancelamento / integracao-pedidos:** "Cancelamento de Pedidos" (Esperança ×2), "Tela de Gestão de Volumes do Pedido" (NavePark — cancelamento granular).
- **Algoritmo não detalhado:** "algoritmo tridimensional" (NavePark) e o cálculo de transbordo (FDBR) são citados sem a lógica/heurística — lacuna crítica para implementação.
- **Imagens/layouts ausentes:** etiquetas e exemplos de caixa não capturados.

## Inferências

- **Inferência:** A cubagem é o ponto de origem da identidade do volume — sem ela não há etiqueta, caixa nem consolidação; deve ser tratada como serviço central consumido por [[order-start]], [[packing]] e [[paletizacao]].
  - **Confiabilidade:** alta
  - **Base:** o Order Start usa a cubagem para imprimir caixas; a etiqueta carrega a caixa sugerida pela cubagem; a paletização usa cubagem para fechar pallet.

- **Inferência:** A escolha entre "caixa padrão única" e "melhor caixa" reflete o tipo de operação — padrão única para fluxos homogêneos (farma/cápsulas), melhor caixa para mix variado (varejo).
  - **Confiabilidade:** média
  - **Base:** FDBR (cápsulas) usa padrão única; Beta (varejo) usa seleção automática — correlação observada, não declarada.

- **Inferência:** A cubagem depende criticamente da qualidade do cadastro de embalagens (dimensões/peso/cubagem_m3); cadastro incompleto degrada toda a cadeia de dimensionamento.
  - **Confiabilidade:** alta
  - **Base:** todas as variantes derivam o cálculo das dimensões cadastrais (ver [[integracao-cadastros]]).

---
*Gerado em 2026-06-24*
