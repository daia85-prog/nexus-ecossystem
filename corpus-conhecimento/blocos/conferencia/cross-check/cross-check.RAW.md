# cross-check.RAW — Evidência Bruta (AUTO-DETECTADO)

<!-- AUTO-DETECTADO na Fase 2 (síntese manual no chat) em 2026-06-24 -->
<!-- Fontes: conferencia (Eletro, Beta, Beta Full SP), sorter-rejeito, sorter-inducao (CDSK Crosscheck IA) -->
<!-- REVISAR: consolidar as seções originais "Validação SKU x Pedido (Cross Check)" dos RAWs de origem -->

---
**Origem:** [AUTO] Consolidado de conferencia (Eletro ×2, Beta, Beta Full SP)  
**Heading:** Validação SKU × Pedido (Cross Check)  
**Score:** — (auto-detectado) | **ID:** crosscheck-0001

Verificação de dados em tempo real no portal de leitura (3 faces). A câmera captura a etiquetaOp do volume e o SKU/DUN/EAN (código interno) do produto. O WCS faz duas verificações: (1) Destino — dados do pedido associado à etiquetaOp; (2) Cross-Check — cruza o SKU/DUN/EAN lido com os itens que deveriam compor o pedido/nota fiscal (obtidos na integração de Volumes/Remessas WMS→WCS).
Decisão: Sucesso (código pertence ao pedido) → instrução ao PLC com a rampa de desvio. Falha (não pertence ou produto já separado) → desvio automático à rampa de rejeito.
A função pode ser ativada/inativada conforme a necessidade da operação. Aplicável, em alguns projetos, exclusivamente a pedidos do modelo "FULLCASE".

---
**Origem:** [AUTO] Consolidado de sorter-rejeito (Eletro/Beta)  
**Heading:** Classificação de Rejeito por Cross-Check  
**Score:** — (auto-detectado) | **ID:** crosscheck-0002

O volume que falha na validação SKU × pedido é direcionado à rampa de rejeito com o motivo "Produto Incorreto / SKU Divergente". O operador na rampa de rejeito faz o cross-check manual (bipa ambos os códigos); estando correto, o WCS ignora o double check no momento da reindução, ou o volume é levado manualmente à rampa de destino. A divergência também ocorre quando o portal não consegue ler corretamente o SKU.

---
**Origem:** [AUTO] Consolidado de sorter-inducao / conferencia (CDSK — Conferência e Crosscheck IA)  
**Heading:** CrossCheck por IA (câmera de TOPO)  
**Score:** — (auto-detectado) | **ID:** crosscheck-0003

Para o modo CrossCheck operar corretamente, todas as caixas envolvidas devem ser etiquetadas na face superior, garantindo leitura pela câmera de TOPO. Ocorrências classificadas como "Suspeita de Divergência" são registradas sistemicamente (independentemente da decisão de desvio), permitindo auditoria, relatórios e alimentação do painel de KPI.
