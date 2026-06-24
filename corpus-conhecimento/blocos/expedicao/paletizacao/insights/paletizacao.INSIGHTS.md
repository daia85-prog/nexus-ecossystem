# paletizacao — Insights

## Padrões Identificados

- **Cubagem manda no fechamento:** o trio cadastrar limites → notificar na segurança → fechar no limite é idêntico em ~7 projetos (Beta, Octopus, CDSK, Market Peru/Chile, BR). A cubagem é o motor da paletização automática.
- **Master/RG é o selo do pallet:** o fechamento sempre culmina na leitura de uma etiqueta master (RG) que vincula os volumes — é o artefato de rastreabilidade da carga consolidada.
- **Agrupar por rota/transportadora:** a finalidade declarada da paletização é consolidar por destino de expedição — mesma lógica de destino vista no [[ptm]].
- **Texto-base replicado:** "Cubagem de pallet" aparece quase literal em 6 projetos; "Aloca Pallet" e "Fechamento do Pallet" idem nos Beta.

## Variações Significativas

- **Fechamento: 2, 3 ou 4 modos:** Beta usa automático+manual; NavePark/BR/Mustard adicionam o **lógico** (fim de transporte); CDSK chega a 4 (cubagem, peso, tela, rampa). Implementar deve cobrir o superset.
- **Limite por valor absoluto × percentual:** Beta fecha em 1 m³; Octopus fecha em 80% de ocupação. Critérios diferentes.
- **Responsabilidade da etiqueta master varia:** maioria deixa a impressão com a operação/WMS; BR coloca o WCS imprimindo na Zebra ZT230 dedicada ao PTL.
- **Routainer (Octopus):** além do pallet, há uma segunda unidade de carga com cubagem própria — caso atípico.
- **Modo manual sem bloqueio (Market Chile):** explicita que no manual não há trava por cubagem/peso — decisão 100% visual do operador.

## Lacunas e Inconsistências

- **Forte sobreposição com PTM/PTL:** o FPP001, o master e o fechamento aparecem tanto aqui quanto em [[ptm]] — paletização, PTM e PTL descrevem facetas do mesmo momento (consolidar na saída do sorter). Risco de duplicação entre os dossiês.
- **Seções de outros tópicos roteadas para cá (candidatos a desvio/Fase 2):**
  - **cubagem / cadastros:** "Controle de Mistura de Categorias no Picking Fracionado" (BP ×3).
  - **recebimento-armazenagem:** "Processo (Indução, avaliação BK25)", "Saída de paletes vazios", "Gerenciamento de sequência de paletes" (BRF — armazém automatizado de entrada).
  - **order-start / integracao:** "Critérios Operacionais OS TIPO 10/22", "Unificação de Order Start".
  - **dashboards-relatorios:** "Dashboard Indução BK25".
  - **conferencia:** "Limitação de Paletes em Conferência" (CDSK).
- **Imagens/tabelas ausentes:** "Tabela de dados", "Tabela ORDEMSERVICO WCS", layouts de etiqueta não capturados.

## Inferências

- **Inferência:** Paletização, PTM e PTL deveriam ser tratados como um subsistema único de "consolidação na expedição", com a paletização sendo a camada de cubagem/fechamento sobre o PTM/PTL.
  - **Confiabilidade:** média
  - **Base:** compartilham FPP001, master, fechamento e a finalidade de agrupar por rota; o material trata "fechar PTL" e "fechar pallet" como sinônimos em alguns projetos.

- **Inferência:** O cálculo de cubagem do pallet depende criticamente das dimensões/peso por volume, que vêm do [[integracao-cadastros]] e da etiqueta gerada no [[packing]].
  - **Confiabilidade:** alta
  - **Base:** todos os projetos afirmam que o cálculo usa "dimensões e peso dos volumes induzidos no sorter" ou o Cadastro de Produtos.

- **Inferência:** O fechamento lógico (fim de transporte) tende a coexistir com o físico nos projetos novos, evitando pallets subocupados quando a rota termina.
  - **Confiabilidade:** média
  - **Base:** os três projetos de 2026 (NavePark, BR, Mustard) adotam o fechamento lógico, ausente nos mais antigos.

---
*Gerado em 2026-06-24*
