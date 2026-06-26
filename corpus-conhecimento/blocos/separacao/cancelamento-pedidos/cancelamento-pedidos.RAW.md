# cancelamento-pedidos.RAW — Evidência Bruta (AUTO-DETECTADO)

<!-- AUTO-DETECTADO na Fase 2 (síntese manual no chat) em 2026-06-24 -->
<!-- Fontes: put-to-wall, integracao-wcs-wms, cubagem, conferencia, picking-fullcase -->
<!-- REVISAR: consolidar as seções originais de cancelamento dispersas nos RAWs de origem -->

---
**Origem:** [AUTO] Consolidado de put-to-wall (FDBR/BP/Beleza/Beta-Esteio/Guatemala)  
**Heading:** Cancelamento de Pedidos — cenários por estágio  
**Score:** — (auto-detectado) | **ID:** cancel-0001

Cenários de cancelamento (recorrentes em FDBR, BP ×3, Beleza, Beta-Esteio, Guatemala):
- Antes do Order Start: o pedido é removido da fila de pendentes; nenhuma ação nos produtos.
- Após o Order Start do FlowRack: a coleta é interrompida; a caixa não segue para outras estações e é direcionada ao rejeito/conferência.
- Após o Order Start do Picking Cart: os volumes em separação no cart são direcionados à conferência após o fim da coleta.
- Via Pedido (manual): exige nível de supervisão (senha de autorização).
- Coletas parciais: produtos já coletados vão para a localização "ANÁLISE", impedindo novas coletas; o restante é desconsiderado.
- Em geral, o cancelamento no WCS não é integrado a outros sistemas — limita-se a remover o pedido e atualizar o status interno; no PDV/coletor exibe pop-up "pedido cancelado".

---
**Origem:** [AUTO] Consolidado de integracao-wcs-wms (BP/Flower/NavePark)  
**Heading:** Devolução de Volumes Cancelados  
**Score:** — (auto-detectado) | **ID:** cancel-0002

O WCS identifica o volume cancelado (via integração de cancelamento do WMS ou cancelamento interno), cria automaticamente tarefa de devolução por volume, e o operador (coletor) lê volume → endereço → item para devolver. O WCS não devolve ao Transfer — só a posições de picking (ou pulmão no NavePark). Relatório de "Pedidos Cancelados". Ao fim, integração informando que os itens foram devolvidos.

---
**Origem:** [AUTO] Consolidado de integracao-wms-erp / cubagem (BRF/Esperança)  
**Heading:** Cancelamento de OT (CATO) e via tabela compartilhada  
**Score:** — (auto-detectado) | **ID:** cancel-0003

CATO (SAP → WCS): IDOC de estorno referenciando a OT (TANUM); o WCS atualiza status para "Cancelada" e só cancela OT em status "Pendente" (OT já confirmada retorna erro). Esperança: o WMS atualiza um campo na tabela compartilhada; o WCS desconsidera o pedido automaticamente, mesmo já presente na ORDEMSERVICO. Esperança detalha o cancelamento por status do volume: Integrado / Disponível / Em andamento / Indução / Na rampa / Alocado (cada estágio com tratativa distinta; após Alocado, só no WMS).

---
**Origem:** [AUTO] Consolidado de cubagem/sorter (NavePark — Tela de Gestão de Volumes)  
**Heading:** Cancelamento Granular de Volumes  
**Score:** — (auto-detectado) | **ID:** cancel-0004

Tela de supervisão para cancelar volumes específicos de um pedido (ex.: erro de digitação 350→35) sem cancelar o pedido todo. Volumes cancelados assumem "RETORNO AO PICKING" (estorno interno, sem NF de devolução); o operador devolve fisicamente à prateleira. Tela de sorter (Barbecue/Cougar) também permite excluir volumes esperados nas saídas (avaria/leitura/peso), sem integração ao SAP.

---
**Origem:** [AUTO] Consolidado de packing/PTLSP (Gemini — Cancelamento de Ordens)  
**Heading:** Cancelamento em processamento físico (BCP)  
**Score:** — (auto-detectado) | **ID:** cancel-0005

O MFC seta status "CANCELADA" em vez de deletar (deletar falha se a ordem está em processo). Ordem não iniciada → marcada cancelada, não inicia. Ordem em andamento → marcada cancelada internamente, mas termina o fluxo da esteira e é desviada à conferência no fim. Em cenários BCP (picking via RF no WMS) é necessária retirada massiva de ordens do WCS (mensagem WMCATO/WMTOCO em avaliação).
