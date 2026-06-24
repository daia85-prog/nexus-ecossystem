# ED_CARD — packing-termolabil

**Tópico:** packing-termolabil · **Bloco:** conferencia · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `null` — **Trigger heurístico:** operação de frios (congelado/resfriado) confirmada; sem gate direto no kickoff

> [OBS INTERNA] Cobertura mínima: o DOSSIE possui evidência escassa (~1 seção substantiva; 4 seções são repetições do mesmo layout de etiqueta). Candidato a fusão com [[packing]] (ver _REVISAO_TOPICOS.md). Confirmar com a operação antes de emitir capítulo independente. Se a operação não tiver frios, suprimir este tópico integralmente.

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| *(sem variáveis diretas)* | — | — | Confirmar com a operação: tipo de separação (padrão/mista) e docas auxiliares. |

## Condicionais (regra → ação)

- **Operação sem frios confirmada** → NÃO emitir este tópico.
- **Tipo de separação = padrão** → emitir regra: congelados separados antes dos resfriados; exceção se reabastecimento em andamento (RN-02); multiplicadores congelado=1 / resfriado=2 (RN-04).
- **Tipo de separação = mista** → emitir regra: congelados e resfriados com mesma prioridade; multiplicadores ambos=1 (RN-03, RN-04).
- **Tipo de separação = A definir (tbd)** → emitir WARNING: *"Tipo de separação termolábil não definido — confirmar padrão ou mista com a operação antes de emitir a ES."*
- **Docas auxiliares presentes** → incluir subseção "Docas Auxiliares": selecionáveis livremente no WCS; doca em uso bloqueia início da onda; docas principais sempre vêm no IDOC de remessa (TPSDLS – ZSDDAREM) (RN-05, RN-06).
- **Candidato a fusão com [[packing]]** → emitir nota editorial: *"Avaliar se este tópico deve ser uma subseção de [[packing]] em vez de capítulo independente (cobertura mínima no corpus)."*

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Packing Termolábil"
  conteudo: O Packing Termolábil é a etapa de embalagem aplicada a volumes provenientes do
  Picking Fracionado e do Picking Termolábil — produtos sensíveis à temperatura (congelados
  e resfriados). Os volumes recebem layout de etiqueta específico no packing.
  [NOTA EDITORIAL: avaliar fusão com [[packing]] — ver OBS INTERNA.]

[nivel 2] "Tipo de Separação"
  [tipo tabela] headers ["Tipo","Regra de Prioridade","Multiplicador Congelado","Multiplicador Resfriado"];
  linhas: Padrão (congelado antes / exceto reabastecimento / 1 / 2) · Mista (igual prioridade / 1 / 1).
  Emitir apenas o(s) tipo(s) confirmado(s) na operação.

[nivel 2] "Docas Principais e Auxiliares"  {{emitir apenas se docas auxiliares presentes}}
  conteudo: As docas principais vêm obrigatoriamente no IDOC de remessa (TPSDLS – ZSDDAREM).
  As docas auxiliares são selecionáveis livremente no WCS. Uma doca auxiliar em uso impede
  o início da onda correspondente.

[nivel 2] "Etiqueta de Packing Termolábil"
  conteudo: Volumes pós Picking Fracionado/Termolábil utilizam layout de etiqueta específico
  no packing. Confirmar o layout exato com a operação/cliente (o corpus não detalha o conteúdo
  do layout).

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE filtradas pelas condicionais: RN-01, RN-07 sempre;
  RN-02 se tipo padrão; RN-03 se tipo mista; RN-04 sempre;
  RN-05, RN-06 se docas auxiliares.

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; termos do DOSSIE relevantes ao escopo emitido.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md` (cobertura mínima — REVISAR antes de fechar a ES).
- Cruza com: [[packing]], [[picking-pbl]], [[sorter]].
