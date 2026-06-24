# sorter-mapa-rota — Insights

## Padrões Identificados

- **Configuração sem código é o valor central:** todos os projetos vendem a mesma ideia — a operação altera os vínculos rampa↔agrupador na tela, sem depender da Invent. Os "Benefícios" (flexibilidade, eficiência, escalabilidade) repetem-se quase literalmente.
- **Layouts alternáveis:** o conceito de salvar vários mapas e trocar conforme turno/cliente/carga é universal.
- **Mapa ativo rege tudo:** sorter e PTLs sempre seguem o layout ativo — o mapa é a fonte única de roteamento da expedição.
- **Rampa não vinculada = problema:** todos tratam o caso de agrupador sem rampa, seja como rejeito "SEM ROTA" ou pendência que bloqueia o desvio.

## Variações Significativas

- **O agrupador define o projeto:** transportadora (Peter/Eletro/BP), loja (Automatize), loja+categoria+embalagem (CDSK/Market), romaneio (BP), rota/cliente (Mustard/Wild Fork). É a principal variável de implementação.
- **Vínculo 1:1 × N:N:** Eletro força 1 agrupador por rampa (desvincula o anterior); CDSK/Market permitem N:N com **cadenciamento** para balancear carga. Comportamentos opostos.
- **Rampas × PTLs:** projetos de varejo (Market) mapeiam **PTLs** em vez de rampas — o mesmo conceito aplicado a um destino diferente.
- **Estático × dinâmico:** a maioria fixa o destino no mapa; Titano e Mustard/Wild Fork tornam o roteamento dinâmico (consulta ao WMS / docas virtuais por QR).
- **PA (Posto Avançado):** só o Eletro modela destinos avançados com retorno ao WMS — caso específico de distribuição.

## Lacunas e Inconsistências

- **Texto institucional duplicado:** os blocos "Benefícios da Funcionalidade" e "Liberdade Operacional" repetem-se em ~10 projetos com redação idêntica — pouco conteúdo técnico novo, muito texto de proposta.
- **Multilíngue:** Market Peru tem 3 versões (ES ×2 + PT) quase idênticas, inflando a contagem.
- **Seções de outros tópicos roteadas para cá (candidatos a desvio/Fase 2):**
  - **paletizacao:** "Se a Transportadora NÃO realiza Paletização" (Beta).
  - **estoque:** "Remoção do Item" (Beleza).
  - **integracao-cadastros / conferencia:** "Regras de Funcionamento" (exceção de lote/validade por `div` — Beleza).
  - **etiquetas / integracao:** "Alteração na Etiqueta do Cliente" (Titano) — embora ligada ao desvio dinâmico, é mudança de etiqueta.
- **"Operação parada" como pré-requisito:** a orientação de trocar o mapa só com a operação parada é uma limitação operacional relevante, mas tratada como recomendação, não como trava sistêmica.

## Inferências

- **Inferência:** O mapa de sorter deve ser modelado com um conceito abstrato de "agrupador" configurável, não com tipos fixos (transportadora/loja), dado que cada cliente usa uma dimensão diferente.
  - **Confiabilidade:** alta
  - **Base:** o agrupador varia entre 6+ dimensões distintas entre projetos, mas a mecânica (vincular agrupador→rampa, layouts, troca) é idêntica.

- **Inferência:** O cadenciamento N:N (CDSK/Market) tende a se tornar padrão em operações de alto volume por loja, pois evita o gargalo de uma rampa única por destino.
  - **Confiabilidade:** média
  - **Base:** aparece nos projetos de varejo mais recentes; os antigos usam 1:1.

- **Inferência:** O mapa de sorter é o ponto de acoplamento entre [[paletizacao]], [[ptm]] e [[ptl-alocacao]] — todos consomem o destino definido aqui.
  - **Confiabilidade:** alta
  - **Base:** o material afirma que "todas as interações com o sorter e os PTLs seguem o mapa ativo".

---
*Gerado em 2026-06-24*
