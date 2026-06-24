# inventario — Insights

## Padrões Identificados

- **Sempre termina em ajuste ao WMS:** independentemente da geração, o objetivo final é equalizar o saldo — gerar o delta físico × sistêmico e enviá-lo ao WMS. O WCS conta; o WMS é ajustado.
- **Divergência nunca é aceita na primeira contagem:** as duas gerações têm mecanismo de revalidação — tarefa de Ocorrência (BP) ou recontagem 2ª/3ª (NavePark/Beleza). Acuracidade exige uma segunda opinião por design.
- **Texto-base reaproveitado:** o parágrafo de abertura ("A auditoria de estoque tem como objetivo garantir a precisão...") é idêntico em BP (3 revisões) e reaparece resumido no NavePark e Beleza — bloco de especificação reutilizado.

## Variações Significativas

- **Salto de maturidade entre gerações:** a geração BP é simples (contar e gerar ocorrência). A geração NavePark/Beleza adiciona: criação por supervisor, **contagem cega**, divisão por operadores em seções, ciclo 1ª/2ª/3ª contagem, validação final direcionada e ajuste explícito com delta. É uma reescrita completa, não um incremento.
- **Posição vazia tem dois protocolos:** BP usa botão "Endereço Vazio" + releitura; NavePark/Beleza usa **3 bipagens** do endereço. Comportamento diferente para a mesma situação.
- **Cíclico com regra de escopo sutil:** ao selecionar um único endereço, só ele é auditado fisicamente; as demais posições do item entram no ajuste pelo saldo sistêmico — detalhe que muda o resultado do delta e precisa de atenção na implementação.

## Lacunas e Inconsistências

- **Anotações de autor vazaram para a especificação:** o aditivo Beleza/Formulário contém "Claud considerar isso: Saldo Sistêmico pré contagem" e um "0065" solto no meio do texto — rascunho não revisado. Indica que a regra de "saldo sistêmico pré-contagem" ficou em aberto.
- **Beleza FASE2 é incompleto:** define apenas que a auditoria pode ser total/parcial e que exige supervisor, sem detalhar o fluxo — provável referência ao aditivo Formulário.
- **Seções de outros tópicos roteadas para cá (candidatos a desvio/Fase 2):**
  - **cubagem / separação:** "Regras de Restrição (Mix e Segregação)" e Matriz de Fragilidade (NavePark).
  - **order-start:** "Priorização" (Gemini/PTLSP) — trata de prioridade de OTs e FIFO.
  - **dashboards-relatorios:** "KPIs do Período" / Dashboard Rampa Cheia (Barbecue).
- **Curva ABC citada sem cadastro:** a auditoria parcial exibe a "curva" do item, mas a origem/cadastro dessa classificação não é descrita aqui.

## Inferências

- **Inferência:** O modelo de 3 contagens + validação final do NavePark deve se tornar o padrão para clientes com exigência fiscal/contábil de inventário rotativo.
  - **Confiabilidade:** média
  - **Base:** é o modelo mais recente (2026) e o único que produz trilha de auditoria completa (operador por contagem, divergência consolidada) — requisito típico de compliance.

- **Inferência:** A "contagem cega" é requisito de integridade, não preferência de UX — esconder o saldo evita que o operador "ajuste" a contagem para bater com o sistema.
  - **Confiabilidade:** alta
  - **Base:** a regra é explícita ("de forma a não induzir a contagem") e repetida em todas as contagens.

- **Inferência:** A integração de ajuste ao WMS provavelmente reaproveita o mesmo canal do Inbound Sync / movimentações de estoque (ver [[integracao-wcs-wms]]).
  - **Confiabilidade:** baixa
  - **Base:** ambos ajustam saldo no WMS, mas o material de inventário não especifica o contrato da integração de ajuste; é uma hipótese de reuso.

---
*Gerado em 2026-06-24*
