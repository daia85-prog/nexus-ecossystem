# Roadmap — Pipeline de Mineração de Documentos (Especialista Documentador v2)

> Plano vivo. Marque os passos `[x]` conforme avança e volte aqui a cada sessão.
> Última atualização: 19/06/2026

---

## Arquitetura v2 — extração desacoplada do roteamento (decisão 23/06/2026)

O minerador acoplava abrir-docx + rotear → toda mudança de critério custava 1h de rede.
Agora separado em etapas; só a etapa A toca a rede (1×), o resto é local e instantâneo:

| Etapa | Script | O que faz | Custo |
|---|---|---|---|
| A. Extrair | `extrator.py` | docx → `corpus-full.jsonl` (texto integral, colapsa revisões) | ~30min, última vez na rede |
| B. Descobrir | `descobridor.py` | clusteriza, revela tópicos órfãos | segundos |
| C. Rotear | `roteador.py` | critérios → RAWs + `_inbox.jsonl` (lossless) | segundos |
| D. Auditar | `auditor.py` | regra JSON + coerência | segundos |

**Critérios de roteamento (ordem):** 1) JSON no corpo → integracao (regra dura);
2) sinal forte integração → integracao; 3) estrutural/proposta → INBOX;
4) semântico (embed+fuzzy); 5) sem match → INBOX.

**Colapso de revisões:** mantém só a revisão mais recente por (projeto, doc-base).
601 docs brutos → 338 após colapso.

**INBOX lossless:** `_inbox.jsonl` guarda texto integral + id (não trunca em 200 chars
como o `_INBOX_REVISAR.md` antigo) → reprocessável fielmente.

## Sequência acordada

1. **Scrap 1+2 concluídos** (legado v1) — OneDrive + Rede, ~2.550 seções em RAWs
2. **Auditoria revelou:** 8.948 em quarentena truncada (muito conteúdo de integração perdido)
3. **Re-arquitetura v2:** extrair tudo 1× → rotear/auditar local infinitas vezes
4. Descoberta de tópicos órfãos → criar vocabs novos (Opus)
5. Rotear + auditar até quarentena mínima
6. Resíduo irredutível → validação manual do Raphael
7. **Depois:** Opus gera DOSSIE + insights por tópico

---

## Princípios travados (decisões já tomadas — não violar)

1. **Mecânico ≠ inteligente.** Localização e recorte são Python puro (CPU, custo zero de token). A síntese é Opus (API), e só roda sobre os recortes extraídos — nunca sobre o documento inteiro.
2. **Três níveis de confiabilidade, três lugares:**
   - `.RAW.md` → evidência bruta, *ipsis litteris*, append-only, cada ocorrência marcada com a origem `[CÓDIGO PROJETO]`.
   - `.DOSSIE.md` → síntese padrão/variável. Fato extraído e rastreável. Candidato a virar/melhorar `[BASE]` e `[SE:]` no Super MD.
   - `insights/` → conhecimento destilado (padrão observado, problema recorrente). **NÃO é fato literal de um doc** — confiabilidade diferente, pasta diferente.
3. **Na dúvida, quarentena.** Match incerto vai pro `_INBOX_REVISAR.md` com a origem. Nunca é forçado num tópico. (Mesma lógica do `"tbd"` = lacuna, não negação.)
4. **O cofre não vaza pra produção sem gate.** Os dossiês servem pra *você* melhorar o Super MD (curando) e pra *assessorar* a Entrevista Cirúrgica. Não injetam texto direto na geração do documento.
5. **Citação de origem sempre.** Toda afirmação aponta pro projeto/revisão de onde veio.
6. **v1 = só docx.** Os PDFs de revisão (diffs entre Rev X e Rev Y) entram na fase 2 como camada de "problemas recorrentes" — não podem travar o v1.

## Ordem que não pode inverter
**v1 mineração → v2 aplicar ao Super MD → v3 oráculo (#DDD).**
Oráculo sobre cofre meia-boca = deus de mentira. Constrói o cofre primeiro.

---

## Estrutura do cofre

```
corpus-conhecimento/
├── _ROUTING.md              # índice mestre (fase 3) — o "sumário de conhecimentos"
├── _INBOX_REVISAR.md        # quarentena de matches incertos
├── manifesto.json           # controle de progresso da fila (o que já foi minerado/sintetizado)
├── vocabulario/
│   └── picking-cart.txt     # variantes do tópico (uma por linha)
├── blocos/
│   ├── entrada/             # Order Start, Cubagem
│   ├── separacao/           # Picking (PBL/Cart/Full Case), Shortpicking
│   │   └── picking-cart/
│   │       ├── picking-cart.RAW.md      # evidência bruta (append-only)
│   │       └── picking-cart.DOSSIE.md   # síntese padrão/variável
│   ├── conferencia/         # Conferência, Packing
│   ├── expedicao/           # Sorter, PTL/Alocação, Etiquetas
│   ├── estoque/             # Reabastecimento, Inventário, Recall, Mov. Forçada, Ocorrências
│   └── integracao/          # Integrações
└── insights/                # CAMADA SEPARADA — confiabilidade diferente
    └── separacao/
        └── picking-cart.INSIGHTS.md
```

---

## FASE 0 — Fundação
- [x] 0.1 Criar a estrutura de pastas e placeholders do cofre
- [x] 0.2 Criar o ambiente Python + instalar dependências
- [x] 0.3 Escrever vocabulários controlados para todos os 12 tópicos

## FASE 1 — Scrap 1: OneDrive (ES + Aditivos) ✓
- [x] 1.1 Descobrir path local do OneDrive — sync sem precisar logar no SharePoint
- [x] 1.2 Script `minerador.py` — roteamento exclusivo multi-tópico (fuzzy + embedding)
- [x] 1.3 Script `reclassifier.py` — reorganiza RAWs com heading-override + embedding
- [x] 1.4 Minerar 36 ES (Especificação Funcional 2023–2026)
- [x] 1.5 Corrigir estrutura Aditivos (3 níveis: Aditivos/VENDOR/PROJETO/*.docx)
- [x] 1.6 Minerar 89 Aditivos (FL-Soft + Velox) — 208 seções extraídas
- [x] 1.7 Reclassifier após Scrap 1 — 474 seções, 24 movidas, 3 INBOX
- [ ] 1.8 Validação manual dos RAWs (spot-check — sua tarefa)

## FASE 2 — Scrap 2: Rede da empresa (R:\ ou U:\)
- [ ] 2.1 Descobrir estrutura de pastas na rede (Get-ChildItem R:\ ou U:\)
- [ ] 2.2 Adicionar segunda raiz ao `minerador.py` — FONTE="REDE"
- [ ] 2.3 Minerar documentos da rede
- [ ] 2.4 Rodar reclassifier novamente
- [ ] 2.5 **Pedir aprovação** antes de prosseguir para síntese

## FASE 3 — Síntese: DOSSIE + Insights (⚠ mudar para Opus primeiro!)
- [ ] 3.1 Script `sintetizador.py` — lê RAW, chama Opus, grava DOSSIE.md
- [ ] 3.2 Script gera insights simultaneamente enquanto lê o RAW
- [ ] 3.3 Map-reduce p/ tópicos com RAWs muito grandes (>100kb)
- [ ] 3.4 Gerar `_ROUTING.md` (índice mestre do cofre)

## FASE 4 — Aplicar ao Super MD (curadoria manual)
- [ ] 4.1 Revisar dossiês → decidir o que vira `[SE:]` no template
- [ ] 4.2 Enriquecer `[BASE]` com evidências dos dossiês
- [ ] 4.3 Subir versão do Super MD

## FASE 5 — Oráculo (pgvector + Docker) — deferred
- [ ] 5.1 pgvector + Docker para busca vetorial
- [ ] 5.2 LLM com retrieval + citação de origem
- [ ] 5.3 Roteamento: factual (dossiê) vs padrão (insights)
