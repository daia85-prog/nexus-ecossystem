# conferencia-manual — Insights

## Padrões Identificados

- **Conferência cega (Blind Check) como princípio central:** Ambos os projetos e telas adotam o modelo de não exibir quantidades esperadas, exigindo bipagem integral dos produtos. Este é o padrão de acuracidade mais consistente do bloco.
- **Abertura por leitura de LPN:** Todo processo de conferência inicia com a leitura do LPN (caixa), que dispara a exibição do motivo do desvio. Padrão presente em todas as telas e regras.
- **Recebimento seletivo de volumes:** A estação de conferência manual recebe exclusivamente volumes desviados pela balança dinâmica ou selecionados por Sorteio de Qualidade — nunca o fluxo total de pedidos.
- **Tratativa estruturada de divergências:** Tanto sobras (retirar excedente) quanto faltas (completar/cortar/coletar) seguem fluxos padronizados em todas as telas.
- **Corte com autenticação de supervisor:** O corte de itens faltantes sempre exige aprovação (senha/crachá) e sempre gera registro/integração externa (WMS ou INT-08).
- **Automação de impressão por volume:** A impressão (laudos ou etiquetas de kit) ocorre automaticamente disparada por evento (término de checagem ou atingimento de quantidade exata), sem ação manual.
- **Encaminhamento para Packing:** O fluxo conclui sempre direcionando o volume para a etapa de Packing após validação completa.

## Variações Significativas

- **Objeto da impressão automática diverge entre projetos:**
  - I23.1412: foco em **laudos e etiquetas por volume**, baseado em acompanhamento de laudo indicado pelo ERP D365 F&O.
  - I25.4066: foco em **etiqueta de kit (layout Spark)** para Clientes Especiais, com validação de ensacamento por bipagem.
- **Fluxo de Clientes Especiais (KIT SKU) exclusivo de I25.4066:** Inclui sinalização visual de cliente especial, instruções de embalagem (`embalagem_especial`), impressão de etiqueta de kit ao atingir quantidade exata e validação obrigatória de ensacamento por bipagem da etiqueta. Não há indicação desse fluxo em I23.1412.
- **Destino da confirmação de corte varia conforme o contexto:**
  - Conferência padrão: corte registrado e enviado ao **WMS**.
  - Clientes Especiais: corte envia **confirmação parcial via INT-08**.
- **Tratativa de falta diverge entre telas:** Tela padrão oferece "Cortar" (com supervisor) ou "Coletar em novo volume"; tela de Clientes Especiais oferece "Cortar" (INT-08) ou "Completar". A nomenclatura e as opções não são idênticas.

## Lacunas e Inconsistências

- **Relação entre WMS e INT-08 não esclarecida:** Não fica claro se INT-08 é uma integração distinta do WMS ou uma interface específica do mesmo sistema. Os dois fluxos de corte enviam para destinos aparentemente diferentes sem explicação da regra que determina qual usar.
- **Critério de obrigatoriedade de laudo não detalhado:** Diz-se que laudo é obrigatório para "determinados volumes" conforme o ERP D365, mas não há especificação dos critérios concretos (tipo de SKU, lote, categoria) que disparam essa exigência.
- **Convivência entre fluxos não definida:** Não está claro se um volume de Cliente Especial também pode exigir impressão de laudo, ou se os fluxos (laudo vs. KIT SKU) são mutuamente exclusivos.
- **Tolerância de peso e tara citadas mas sem aplicação detalhada:** Os conceitos são definidos, mas não há descrição do comportamento do sistema quando o peso real ultrapassa a tolerância (rejeita? alerta? bloqueia?).
- **Opção "Coletar (Novo Volume)" sem fluxo de fechamento:** Registra-se a pendência, mas não há descrição de como/quando o novo volume é gerado ou rastreado posteriormente.
- **"Completar" na tela de Clientes Especiais sem detalhamento de origem:** Na tela padrão, completar a caixa depende do "pulmão de tratativa"; na tela especial menciona-se "Completar" sem indicar a mesma fonte.
- **Comportamento de impressão de laudo em caso de corte não descrito:** Não se sabe se itens cortados afetam o conteúdo do laudo impresso.

### Candidatos a desvio / Fase 2
- **Check List Vazio/Cheio → novo bloco `carregamento/checklist-carregamento`:** o RAW continha uma seção "Check List Vazio/Cheio" descrevendo checklist de inspeção de caminhão (vazio/cheio) para carregamento — configuração de perguntas dos checklists inicial/final de caminhão, regras de início conforme tipo de pallet (estivado/palletizado), registro de evidências (foto/motivo/observação), atualização automática de placa via IDOC SAP, campos do checklist final (temperatura, IDs de colaboradores, quantidade/tipo de pallet, lacre) e disparo de minuta de carregamento + IDOC ao SAP. É um processo de **carregamento**, distinto da conferência de volumes. **Desvio detectado automaticamente pelo sintetizador.py** (registrado em `_estado_sintetizador.json`); deve virar tópico próprio na Fase 2.

## Inferências

- **Inferência:** O bloco conferencia-manual representa uma etapa de auditoria por exceção, não de conferência de 100% do volume processado.
  - **Confiabilidade:** alta
  - **Base:** Múltiplos fatos afirmam que a estação recebe exclusivamente volumes desviados pela balança ou por amostragem (Sorteio de Qualidade), caracterizando inspeção por exceção.

- **Inferência:** INT-08 é provavelmente uma interface específica de comunicação com o WMS (ou ERP) dedicada à confirmação parcial de pedidos especiais, e não um sistema independente.
  - **Confiabilidade:** média
  - **Base:** Tanto o corte padrão (WMS) quanto o especial (INT-08) lidam com a mesma natureza de informação (itens cortados), sugerindo canais distintos para o mesmo destino lógico; porém a documentação não confirma.

- **Inferência:** A conferência cega é a justificativa funcional para a impressão automática de etiquetas só ocorrer ao atingir a quantidade exata do SKU.
  - **Confiabilidade:** alta
  - **Base:** Como o operador não conhece a quantidade esperada, o sistema usa o atingimento da quantidade exata como gatilho automático e ponto de validação, conforme regras explícitas.

- **Inferência:** A validação de ensacamento por bipagem da etiqueta visa prevenir erros de associação entre kit montado e volume, sendo controle crítico de qualidade para clientes especiais.
  - **Confiabilidade:** média
  - **Base:** A obrigatoriedade de bipar a etiqueta colada no saquinho indica um controle de rastreabilidade adicional exclusivo do fluxo especial, mas o objetivo não é declarado explicitamente.

- **Inferência:** A tolerância de peso configurável atua como filtro upstream na balança dinâmica, reduzindo o volume de itens enviados à conferência manual.
  - **Confiabilidade:** média
  - **Base:** A tolerância é descrita como margem para "absorver variações sem gerar desvios desnecessários", e a balança dinâmica é a fonte primária de desvios para a estação manual.

- **Inferência:** Os dois projetos (I23.1412 e I25.4066) representam evoluções/configurações distintas de um mesmo módulo, com I25.4066 sendo mais abrangente.
  - **Confiabilidade:** média
  - **Base:** I25.4066 concentra mais funcionalidades (Blind Check explícito, autenticação de supervisor, fluxo KIT SKU), enquanto I23.1412 foca em laudos; ambos compartilham o núcleo de conferência manual.

---
*Gerado em 2026-06-24*