# picking-pbl — Insights

## Padrões Identificados

- **Semântica de cores é universal:** azul (separar), verde (concluído), rosa (costas), laranja (pendência) repetem-se entre FDBR, Beleza, Peter e Guatemala. É a linguagem visual padrão do PBL Velox.
- **Frente (alto giro) × costas (médio/baixo giro):** a divisão por curva ABC entre flow rack frontal e nichos traseiros é recorrente — otimização de ergonomia/produtividade.
- **Confirmação por botão é o gesto-base:** separar → apertar o botão → posição apaga. Toda a contabilidade do PBL se apoia nisso.
- **Desvio condicional:** a caixa só entra na estação se há item a separar; senão segue na linha expressa — economia de movimentação onipresente.

## Variações Significativas

- **Topologia muito variável:** FDBR (16 postos, 52 posições) × Beleza (10 estações) × Peter (linhas A2/A3 com módulos por curva). Parametrização pesada.
- **Tratamento de ruptura difere:** Peter usa ShortPicking direto (botão "menor"); Esperança usa **Pendência** registrada no WMS sem o operador decidir o corte. Filosofias distintas (operador corta × operador só reporta).
- **PVAR e prioridade de LED (BRF):** único que detalha ordem de acendimento por prioridade e timer de monitoramento — operação de frios com SLA apertado.
- **Volume em estação única (Guatemala):** decisão de design que evita caixa visitar múltiplas estações — simplifica mas exige cubagem/alocação inteligente no Order Start.
- **FlowHack (Reverse):** desvio conceitual — logística reversa por MAC Address com anomalias, bem diferente do PBL de saída.

## Lacunas e Inconsistências

- **Texto-base "Separação PBL" replicado:** FDBR e Beleza trazem o mesmo bloco de "Separação em 1/2 postos (frente/costas)" quase literal — conteúdo idêntico com troca de "volume"→"tarefa".
- **Sem validação de lote no PBL (FDBR):** decisão importante (lote só na conferência) que precisa ser respeitada para não duplicar validação.
- **Seções de outros tópicos roteadas para cá (candidatos a desvio/Fase 2):**
  - **logística reversa (possível tópico novo):** "FlowHack (Baixo Giro)" e "Anomalias" (Reverse) descrevem triagem reversa por MAC Address — processo distinto do PBL de separação; candidato a tópico próprio.
  - **integracao-cadastros:** "Tela de endereços" (gerenciamento de localizações).
  - **reabastecimento / estoque:** "Limpeza de Canal de Buffer", "Aplicação do FEFO na Seleção" (BRF).
  - **picking-fullcase / picking-cart:** "Conclusão da Remessa" (Full Case + retirada de PTL — Beta-Esteio).
  - **dashboards-relatorios:** "Monitoramento de LED sem Coleta".
- **Imagens ausentes:** quase todas as seções referenciam "imagens ilustrativas" de displays/botões não capturadas.

## Inferências

- **Inferência:** O PBL é o mesmo motor de "alocação guiada por luz" do [[ptl-alocacao]] aplicado à coleta (entrada) em vez da distribuição (saída) — luz que diz "pegue daqui" × "ponha aqui".
  - **Confiabilidade:** média
  - **Base:** ambos usam LED+display+botão por posição com a mesma semântica de cores; diferem no sentido do fluxo.

- **Inferência:** O modelo "operador reporta, WMS decide o corte" (Esperança) é mais auditável e tende a substituir o corte direto pelo operador em clientes com controle fiscal rígido.
  - **Confiabilidade:** média
  - **Base:** Esperança/Winthor isola a decisão de corte no WMS; é o projeto com tratamento de pendência mais formal.

- **Inferência:** O PBL depende fortemente do Order Start (que gera as caixas/etiquetas e cuba) e da conferência (que valida o lote não validado aqui) — leitura conjunta recomendada com [[order-start]] e [[conferencia]].
  - **Confiabilidade:** alta
  - **Base:** o início do PBL é sempre a leitura da etiqueta gerada no Order Start; a validação de lote é explicitamente delegada à conferência.

---
*Gerado em 2026-06-24*
