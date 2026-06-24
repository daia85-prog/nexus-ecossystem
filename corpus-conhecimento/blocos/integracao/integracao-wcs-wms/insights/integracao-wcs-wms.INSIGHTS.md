# integracao-wcs-wms — Insights

## Padrões Identificados

- **Estoque bidirecional com WMS soberano:** o par Snap Shot (entrada) + Inbound Sync (saída) aparece em quase todos os projetos. O desenho assume o WMS como fonte de verdade — o WCS dá baixa "cegamente" pelos dados do Snap Shot e reporta de volta cada movimentação de pulmão.
- **Confirmação de picking atrasada por design:** múltiplos projetos reforçam que a Confirmação de Separação **não** é enviada no fim físico do picking, mas só após o ponto de decisão/conferência. Isso é uma decisão arquitetural consistente: o WMS só recebe o que foi efetivamente validado.
- **Devolução com texto padronizado:** o processo de "Devolução de Volumes Cancelados" se repete quase palavra por palavra em BP (3 revisões), Flower e NavePark — é praticamente um bloco de especificação reutilizado entre propostas.
- **Regra invariante:** "não devolver ao Transfer, só a posições de picking" aparece em todos os projetos que descrevem devolução.

## Variações Significativas

- **Payload do Snap Shot evoluiu:** as versões iniciais usam lista plana (`codInterno`/`qtd`/`endColeta`); a Rev12 do BP migra para estrutura **aninhada por endereço** (`endColeta` + `itens[]`) e adiciona a regra de esvaziar posição com `qtd=0`/`codInterno=null`.
- **Inbound Sync consolidado (Beleza):** diferentemente dos demais, o projeto Beleza exige somar o saldo de todos os endereços por item antes de enviar — contrato materialmente diferente.
- **Retorno Reabastecimento tem 3 formatos:** completo (`empresa`/`centro`/`reabastecimentos[]` com sku/dun/quantidades), simplificado (só `num_etiqueta` — projeto BR I25.4378) e disparo por PLC (aditivos Dolce Gusto e Beta).
- **Sentido invertido em aditivos:** alguns aditivos descrevem o Retorno Reabastecimento como **EMW/SAP → WCS**, enquanto os projetos novos descrevem **WCS → EMW/SAP** — atenção à direção ao implementar por cliente.

## Lacunas e Inconsistências

- **Erros de digitação nos contratos:** `codIntenrno` (Rev12), `codInterno` vs `codInterno`, vírgula sobrando em JSONs de reabastecimento (`"qt_reab": 2,`), e a seta de sentido (`WMSWCS`, `WCS  WMS`) perdeu o caractere "→" na extração. Os payloads do RAW não devem ser copiados literalmente sem revisão.
- **Recall com pergunta em aberto:** a Fase 2 do Beleza termina com "O WCS irá enviar a integração no final da tarefa de recall quando todas as posições forem visitadas. ?" — o "?" indica ponto não decidido na própria especificação original.
- **JSONs de exemplo sem schema formal:** todos os payloads são "exemplos"/"sugestões"; não há contrato versionado (campos obrigatórios vs opcionais, tipos) — risco de divergência entre cliente.
- **Conteúdo fronteiriço com outros tópicos:** "Execução e Continuidade das Coletas" (I22.120), "Finalização do Picking Cart" e "Recall" descrevem mais o **processo operacional** do que a integração em si — candidatos a referência cruzada com `picking-cart`, `reabastecimento` e `estoque`.

## Inferências

- **Inferência:** O WCS deve tratar o Snap Shot como operação idempotente de "verdade absoluta" — qualquer item não presente no payload deve zerar a posição correspondente.
  - **Confiabilidade:** alta
  - **Base:** texto explícito de que posição vazia/ausente no payload é assumida como desocupada e a baixa considera exclusivamente o Snap Shot.

- **Inferência:** A migração do payload plano para o aninhado-por-endereço (Rev12) foi motivada por posições com múltiplos itens/lotes, que a lista plana não representava bem.
  - **Confiabilidade:** média
  - **Base:** a estrutura nova agrupa `itens[]` sob cada `endColeta`, o que só faz sentido para posições multi-item.

- **Inferência:** Implementar essas integrações exige uma camada de mapeamento por cliente, pois o mesmo contrato lógico tem payloads e sentidos diferentes entre projetos.
  - **Confiabilidade:** alta
  - **Base:** Retorno Reabastecimento e Snap Shot têm 3+ formatos distintos entre BP, Beleza, BR e aditivos.

---
*Gerado em 2026-06-24*
