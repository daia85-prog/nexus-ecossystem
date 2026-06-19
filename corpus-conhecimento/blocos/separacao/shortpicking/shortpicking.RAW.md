# shortpicking.RAW — Evidência Bruta

<!-- APPEND-ONLY — gerado pelo minerador -->

---
**Origem:** [I25.115] 2026 — `I25.115 - ESPECIFICATION DE SOFTWARE - PROYECTO MARKET PERU - Rev..docx`  
**Heading:** Rechazo  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Todos los productos rechazados por el clasificador se dirigirán a una rampa de rechazo, donde se establecerá un punto de auditoría para verificar los volúmenes rechazados.
Los rechazos por errores de lectura, falta de integración, falta de PTL y otros tipos de fallas se dirigirán a esta rampa de rechazo, donde un punto de auditoría se encargará de registrar el motivo del rechazo y asegurar que el volumen se haya identificado correctamente.
Los rechazos por rampa llena o pérdida de seguimiento se dirigirán a la misma rampa de rechazo, pero se reintroducirán según sea necesario para garantizar la continuidad del proceso de separación y manipulación del producto.

---
**Origem:** [I25.3513] ADITIVO — `I25.3513 - Aditivo Projeto CDSK - Conferência e Crosscheck IA.docx`  
**Heading:** Registro de Divergências  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Toda ocorrência classificada como Suspeita de Divergência deverá ser registrada sistemicamente, independentemente da decisão de desvio aplicada. O registro permitirá auditoria posterior, geração de relatórios e alimentação do painel de KPI. Os campos mínimos do registro estão descritos abaixo:

---
**Origem:** [I24.205] ADITIVO — `I24.205 - ADITIVO PROJ PROMOFARMA - SEGURANÇA NO PICKING REV 1.docx`  
**Heading:** Tratativa de Divergencia  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Se durante a validação (Cenário B) o operador encontrar o produto errado:
Aciona "Reportar Divergência" no PDV.
O WCS realiza o Corte Automático do item no pedido atual (enviando para Conferência).
O endereço recebe status "BLOQUEADO" (não "Pendente", mas travado totalmente).
Exige intervenção de um auditor para desbloquear e corrigir o físico.

---
**Origem:** [I24.203] 2024 — `I24.203 - ESPECIFICACAO DE SOFTWARE - PROJETO BETTA-REV. 1.docx`  
**Heading:** SHORTPICKING  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

Exemplo de Shortpicking:
Item solicitado: 100 unidades do produto X
Quantidade separada: 50 unidades do produto X
1. Procedimento de Shortpicking
a. Registro de Quantidade Separada
Quando ocorrer shortpicking (corte), o operador deve:
Registrar no display azul a quantidade exata separada do item.
Garantir que o shortpicking seja aplicado para todos os itens da estação antes de induzir a caixa na esteira principal.
2. Função do PDV no Processo
Cada posto de separação é equipado com um PDV, que apresenta:
Informações detalhadas como localização do item, caixa, pedido e outras informações relevantes.
Ferramentas para o registro de quantidades, notificações de corte e acompanhamento das etapas do processo.
O PDV facilita a operação, oferecendo visibilidade em tempo real de cada passo, reduzindo erros e otimizando o fluxo operacional.

---
**Origem:** [I24.114] 2024 — `I24.114 - ESPECIFICACAO DE SOFTWARE - PROJETO ANDREANI_ES -.docx`  
**Heading:** Retirada de Itens de Endereços:  
**Score:** 100.0 (fuzzy) | **Data:** 2026-06-19

Para remover um item de um endereço, a integração deverá:
Informar o endereço de origem.
Enviar o campo "codigo_item" como null.
o Nesse caso, o endereço será esvaziado e ficará sem nenhum produto vinculado.
Endpoint: http://ipservidor:porta/integracao/api/prd/pickmap
Exemplo JSON:

---
**Origem:** [I25.] 2025 — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`  
**Heading:** Shortpicking / Avarias  
**Score:** 0.7 (embed-desempate) | **Data:** 2026-06-19

WMS  WCS (POST)
A integração de shortpicking é utilizada quando, durante o processo de separação, ocorre uma falta de produtos ou avaria, e o operador não consegue separar a quantidade total solicitada.
Quando isso acontece, o WMS deve disparar a integração de shortpicking para o WCS, informando que houve uma redução na quantidade solicitada e ajustando o volume correspondente nas posições de PTL, removendo o volume que não poderá ser coletado.
Segue exemplo do JSON:
{
"onda": "102030",
"tarefa": "123456789",
"numPallet": "Pallet-001",
"codigoInternoProduto": "1020",
"endereco": "A1-00-A02",
"qtdeCortada": 5,
"motivoCorte": "Falta de estoque"
}
