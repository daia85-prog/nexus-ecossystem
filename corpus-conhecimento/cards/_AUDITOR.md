# _AUDITOR — Protocolo de Auditoria do Especialista Documentador

> **Este arquivo é o espelho embutido do método da skill `auditoria-es-invent`.**
> O ED é um projeto do Claude.ai e **não alcança skills do Claude Code** — por
> isso o método está duplicado aqui, no Knowledge. **Mantenha os dois em
> sincronia:** se a skill mudar, este arquivo muda junto (e vice-versa). A skill
> é o método mestre; este arquivo é a cópia que o ED executa.
>
> Auditoria não é leitura de cortesia. Qualquer inconsistência que passa custa
> desenvolvimento ou retrabalho entre duas empresas (Invent + WMS do cliente).
> "Está bom" não é um achado — todo achado diz **ONDE**, **O QUÊ** e **COMO**
> corrigir. Pontos-chave verificados e limpos são marcados ✅, para provar que
> foram olhados e não ignorados.

---

## O que é o Auditor

O Auditor é uma etapa do próprio ED — não um agente separado. Ele executa uma
análise crítica do conjunto de capítulos para detectar inconsistências que só
aparecem quando todos os capítulos são vistos juntos (impossível de fazer
capítulo a capítulo).

Não é revisor de **forma** — não corrige gramática, estilo ou formatação. É
verificador de **coerência de conteúdo**: entre capítulos, entre as fontes do
projeto (Master Data > kickoff > transcrição > projeto-referência — ver
`PROMPT_ED.md`) e o que foi documentado, e entre as regras de negócio dos CARDs.

---

## Os 3 modos

| Modo | Quando | Insumo | Camadas | Relatório |
|---|---|---|---|---|
| **1 — Pré-emissão** | Dentro do ED, após gerar os capítulos internamente e ANTES de emitir o `input_json` | Capítulos gerados + kickoff + Master Data + CARDs | U1–U10 + K1–K2 | Relatório de GAPs com decisão A/B |
| **2 — Conferência de documento** | Documento existente (Rev N) que o usuário **anexa** ao chat do ED, antes de ir ao cliente ou revisão de entrega de analista | `.docx`/texto do documento + contexto do projeto | U1–U10 + D1–D2 | Achados numerados + sumário executivo + matriz |
| **3 — Validação de retorno** | Revisão N+1 devolvida após um relatório de auditoria anterior | Documento novo + relatório/lista anterior | ponto a ponto | Placar atendido/parcial/não atendido |

**Detecção do modo:** kickoff + capítulos recém-gerados → Modo 1. Documento
pronto anexado + intenção de conferir/revisar → Modo 2. Lista de achados anterior
+ documento revisado → Modo 3. Na dúvida, pergunte em uma linha.

**Modo 1 é o padrão obrigatório de toda geração.** Tem um ramo específico quando
`g4 = additive` — ver "Auditoria de Aditivo".

---

## Escala única de classificação

Toda auditoria — em qualquer modo — classifica cada achado em:

- **⚡ CRÍTICO** — trava a integração, contradição factual, erro de contrato
  (JSON × tabela), gate violado, contradição direta com o **Master Data**,
  capítulo obrigatório ausente, funcionalidade que depende de hardware que a
  fonte nega. Correção obrigatória antes de avançar. **Nunca emitir o JSON
  final (Modo 1) nem liberar o documento (Modo 2) com um ⚡ em aberto.**
- **⚠️ ATENÇÃO** — funciona, mas conflita ou confunde; compromete clareza ou
  completude. Recomendada antes da aprovação do cliente.
- **📝 MELHORIA** — clareza, redação, padronização. Aplicar se houver tempo.
- **✅ VERIFICADO** — ponto-chave conferido e correto. Só nos itens-chave, para
  dar confiança de cobertura.

**Flag `[DECISÃO]`:** achado (de qualquer nível) em que a correção depende de
escolha do usuário entre alternativas legítimas. **Nunca decida sozinho um
`[DECISÃO]`** — apresente **exatamente 2 opções** (A e B, mutuamente exclusivas)
e aguarde. Em ⚠️/📝 com proposta óbvia, ofereça a Opção A como padrão: se o
usuário disser "aceito todas as propostas padrão", aplique todas as A.

---

## Regras específicas do ED (prevalecem no Modo 1)

Onde o ED difere do método genérico da skill:

- **Nunca decide sozinho um `[DECISÃO]`** — sempre 2 opções (A/B) e aguarda.
- **JSON só sai completo** — nunca emitir parcialmente enquanto houver
  `[DECISÃO]` em aberto. "Aceito todas as propostas padrão" aplica todas as
  opções A dos achados ⚠️.
- **Sem achados:** declarar explicitamente "Auditoria concluída. Nenhum GAP
  identificado." antes do JSON (obrigatório mesmo vazio).
- **Coluna Tamanho:** enquanto o `JSON_DOCS.md` definir `Char(N)`/`Int` como
  convenção da coluna Tamanho, essa convenção prevalece na U4 — a whitelist
  String/Integer/Decimal/Array/Boolean aplica-se à coluna **Tipo**.
- **Fontes de domínio:** gates e traduções em `_KICKOFF_FIELDS.md`; condicionais
  e RNs nos `CARD_*.md` em escopo; contrato e Golden Standard no `JSON_DOCS.md`.
  A skill não duplica esse domínio — ele já vive no Knowledge do ED.
- **Prioridade:** integrações são o maior foco de GAP — dê o maior esforço à U2
  (simetria JSON × tabela) e à U5 (cadeia de disparo).

---

## Fluxo de execução

### Passo 0 — Preparar
- Identifique o modo e confirme os insumos.
- **Modo 2 com `.docx`:** o documento vem anexado ao chat do ED. Trabalhe sobre
  o texto extraído do anexo e **localize tudo por busca no texto** — nunca
  confie na memória da estrutura. Se houver tracked changes ou comentários
  pendentes, inspecione-os antes (não audite por cima do que o usuário ainda vai
  validar).
- Colete o contexto de calibração: WMS do cliente (`g5`), fluxos vitais do Go
  Live, itens fora de escopo/adiados, matriz de responsabilidade acordada. Se
  faltar algo para calibrar uma camada (ex.: não sei o que está fora de escopo),
  **pergunte ANTES de auditar** — de forma agrupada, não uma pergunta por vez.

### Passo 1 — Executar as camadas do modo
Execute **todas** as camadas do modo, na ordem. Não pule camada por parecer
"provavelmente ok" — a camada devolve ✅ se estiver limpa.

### Passo 2 — Varredura anti-auditor-apressado
Antes de fechar, releia os próprios achados e pergunte: **"que tipo de erro um
auditor apressado deixaria passar aqui?"** — tipicamente: a segunda ocorrência
de um problema já achado (multi-ocorrência não varrida até o fim), o campo que
está certo em 9 interfaces e errado na 10ª, e a contradição entre um achado seu
e outro. Faça essa varredura e registre o que ela pegou.

### Passo 3 — Emitir o relatório do modo
Formatos exatos abaixo. Regras invariantes:
- **Achados numerados**, agrupados por camada, cada um com: localização exata
  (capítulo/seção + trecho-âncora curto verbatim para Ctrl+F), classificação,
  explicação clara, e correção pronta ("de" → "para" quando for edição).
- **NÃO altere o documento durante a auditoria.** Auditoria lista; o usuário
  decide item a item. A aplicação vem depois (Modo 1: ED regera o JSON; Modo 2:
  manual ou, quando existir, via skill de tracked changes).

---

## Camadas Universais (U1–U10) — Modos 1 e 2

### U1 — Inventário e numeração
Liste as integrações da tabela-resumo do capítulo de Integração e confirme que
cada uma tem sua seção (mesmo nome, mesmo sentido WMS→WCS / WCS→WMS, mesma
numeração). Divergência de nome tabela × título = ⚠️. Numeração furada/fora de
ordem = ⚡ (quebra referências cruzadas). Liste os capítulos operacionais
existentes contra a estrutura esperada (Modo 1: Golden Standard do
`JSON_DOCS.md`; Modo 2: mesma referência). Capítulo esperado ausente sem
justificativa = ⚡ `[DECISÃO]`.

### U2 — Simetria JSON × Tabela de Campos (a camada mais importante)
Para **CADA** interface, compare o JSON de exemplo com a tabela de campos:
- Todo campo do JSON está na tabela? Todo campo da tabela aparece no JSON?
  Ausência em qualquer direção = ⚡ (o exemplo é contrato).
- Tipo coerente com o valor de exemplo (`"5"` como Integer = ⚡; `0.032` →
  Decimal; lista → Array; true/false → Boolean).
- JSON sintaticamente válido? Vírgula sobrando, chave duplicada, colchete não
  fechado = ⚡.
- Tamanhos consistentes entre interfaces para o MESMO campo (ex.: `num_pedido`
  tem o mesmo tamanho em toda interface onde aparece?). Divergência = ⚠️ (⚡ se
  afeta truncamento).
- Obrigatoriedade coerente com o fluxo descrito no texto.

**Saída obrigatória:** matriz-resumo `campo | integrações onde aparece | tipo |
tamanho | consistente?` — anexa ao relatório como evidência de padronização.

### U3 — Padronização de nomes de campo (cross-integração)
Varra todas as interfaces e monte um dicionário conceito → nome(s) de campo.
- Mesmo conceito com nomes diferentes em interfaces diferentes = ⚡.
- Mesmo nome para conceitos diferentes = ⚡.
- **Atenção à regra de nomenclatura do `PROMPT_ED.md`:** o nome do campo no
  payload é o nome real do sistema de origem (WMS/ERP/SAP) e é preservado como
  está nos CARDs de integração — inclusive quando é camelCase (`codInterno`).
  **Não trate camelCase de payload como erro.** O que é erro: o MESMO conceito
  aparecer com grafias diferentes entre interfaces, ou nomenclatura de payload
  vazar para a prosa/títulos (fora do payload, o texto é português).

### U4 — Tipos fora do padrão
Whitelist de referência: **String, Integer, Decimal, Array, Boolean**. O
`JSON_DOCS.md` do ED historicamente exemplifica a coluna Tamanho com
`Char(N)`/`Int`/`Dec(10,2)` — **em Modo 1, siga o `JSON_DOCS.md`** (é o contrato
vigente) e só registre 📝 se houver mistura inconsistente. Não invente um
terceiro padrão.

### U5 — Cadeia de disparo das integrações (o teste mais revelador)
Monte a linha do tempo do ciclo de vida de um volume/pedido para cada fluxo
relevante (fracionado, Full Case, só-Picking-Cart, exceções tipo Pede
Caixa/shortpicking/rejeito), do Order Start à expedição. Em cada marco, anote
qual integração dispara e em que sentido. Verifique:
- Integração citada em capítulo operacional que não existe no capítulo de
  Integração (citação órfã) = ⚡.
- Disparo sem gatilho físico/sistêmico claro e ÚNICO = ⚡.
- Marco que deveria disparar e não dispara (**buraco**) = ⚡ `[DECISÃO]`.
- **Dupla contagem** (dois disparos informando a mesma coisa ao WMS sem regra de
  precedência) = ⚡.

**Heurísticas de omissão** (levantar como ⚠️ `[DECISÃO]`, nunca gerar
automático): Sorter + Full Case sem Cross-Check; Full Case sob WCS sem impressora
declarada; Sorter sem Mapa de Rota; picking sem tratamento de shortpicking;
rejeito/recirculação sem ponto de reindução. Em Modo 1, consulte as dependências
declaradas nos CARDs em escopo.

### U6 — Responsabilidade WCS × WMS × Cliente
Estabeleça a regra-mestre do projeto (kickoff, Master Data, usuário, ou capítulo
de responsabilidades — se não houver, PERGUNTE). Padrão típico Invent: Order
Start, impressão de etiquetas, gestão de estoque = WMS/cliente; automação (linha,
desvios, sorter, PTL, FlowRack) = WCS — mas **cada projeto pode divergir** (ex.:
`et_r = wcs` inverte a impressão). Varra o documento e aponte QUALQUER frase que
atribua a um sistema o que é do outro = ⚡. Confirme o dono da impressão em 100%
das menções. **Inclui o caso de funcionalidade descrita que depende de hardware
que a fonte nega** (ex.: login via PDV com `p_pdv = no`/`N/A` no Master Data) = ⚡.

### U7 — Disciplina de escopo adiado / fora de escopo
Para cada item que o projeto tirou do escopo ou adiou: liste TODAS as menções no
documento inteiro; cada menção carrega a nota completa (fora do Go Live + motivo
+ responsável no interim + referência para aditivo futuro)? Menção que descreve o
fluxo como ativo SEM a nota = ⚡ (gera expectativa falsa na aprovação). Cuidado
com dependências em cascata (funcionalidade que depende do item adiado também
precisa da ressalva). Nenhum conteúdo é excluído por estar adiado — permanece
documentado, sempre com a nota. **No Modo 1, o equivalente é a nota de escopo
aditivo quando `g4 = additive`** (ver Auditoria de Aditivo).

### U8 — Contradições diretas e órfãos
- Afirmações que se contradizem entre seções (o mesmo volume passa e não passa
  por conferência; dois pontos de vínculo da caixa; duas versões da mesma
  exceção) = ⚡. **Contradição com o Master Data prevalece e é sempre ⚡** (o
  Master Data é a fonte de maior autoridade).
- Para cada fluxo de exceção (cancelamento, rejeito, Pede Caixa, shortpicking):
  todas as menções contam a MESMA história? Compare integração × operacional.
- **Órfãos:** referência a algo que não existe mais no documento (conceito
  removido, integração excluída, "coletor Android" num projeto PDV) = ⚡. Ao
  achar um órfão, varra o termo inteiro (multi-ocorrência).

### U9 — Terminologia e legenda
Monte o glossário vivo: para cada conceito central (volume, onda, endereço,
operador, posto, fracionado, Full Case...) qual termo o documento usa — confirme
uso único. Sinônimos para o mesmo conceito = ⚠️ com proposta de unificação (base:
o glossário do `PROMPT_ED.md`). Ambiguidade legítima (termos diferentes = objetos
diferentes: caixa de separação ≠ volume ≠ palete) → ⚠️ `[DECISÃO]` perguntando.
Todo acrônimo do corpo (PDV, CLP, ZPL, EAN, SKU, PTL, PBL, LPN, RG...) consta na
Legenda? Acrônimo não legendado = 📝 (⚠️ se central).

### U10 — GAPs formais e pendências
- Todo ponto em aberto está em bloco de destaque formal (`tipo: warning` com
  texto iniciando em "GAP:"), **nunca em texto corrido nem em `[OBS INTERNA]`**?
  Pendência de conteúdo camuflada em `[OBS INTERNA]` = ⚡ (é o erro que originou
  o Auditor — pendência no canal invisível some do documento e o Auditor declara
  "nenhum GAP" por engano). A correção é converter para GAP visível.
- Cada GAP está redigido como pergunta/ação endereçável (quem resolve, o que
  falta)? GAP vago = 📝 com redação proposta.
- GAP já resolvido em outra seção que pode ser fechado, ou realce vazio = 📝.
- **Saída obrigatória:** lista consolidada de todas as pendências, com
  responsável sugerido, pronta para a reunião com cliente/WMS.

---

## Camadas Kickoff (K1–K2) — Modo 1

### K1 — Cascata de gates do kickoff
Para cada campo de gate do kickoff (tabela de gates do `PROMPT_ED.md` /
`_KICKOFF_FIELDS.md`): gate ativo → capítulo esperado gerado? Ausente = ⚡
`[DECISÃO]`. Capítulo gerado sem gate ativo = ⚡ `[DECISÃO]` (pode ser absorção
de texto livre legítima — o usuário confirma). Sub-capítulos obrigatórios
acompanham o pai (Sorter → Indução, Mapa de Rota, Rejeito; Order Start →
Cancelamento). `tbd`/vazio → capítulo NÃO gerado (gerar seria inventar variação).

### K2 — Condicional oco
Para cada condicional dos CARDs em escopo ativada pelo kickoff: o texto gerado
realmente diferencia o comportamento, ou ficou igual ao padrão? (Ex.: conferência
cega ativada mas o texto não omite quantidades; matriz de fragilidade ativada mas
o PTL não menciona a restrição — **atenção à ambiguidade de escopo da fragilidade
sinalizada no `CARD_ptl-alocacao.md`**.) Condicional ativada sem efeito = ⚡. O
inverso também: texto com comportamento condicional cujo campo está `tbd`/vazio =
⚡ (variação inventada — viola a regra de ouro do ED).

---

## Camadas Documento (D1–D2) — Modo 2

### D1 — Metadados e capa
Código do projeto consistente em todas as ocorrências (capa, rodapé, objetivo,
aprovação). Local do CD e sistema do cliente batendo entre capa, objetivo e
corpo. Tabela de revisões: datas crescentes, responsáveis preenchidos, descrição
da Rev coerente. Página de aprovação citando revisão e data corretas. Sumário
batendo com o corpo. Qualquer número/data/código divergente = ⚠️ (⚡ se for o
código do projeto ou a revisão da aprovação).

### D2 — Prontidão para o cliente
Leia como o aprovador do cliente (operação, não dev): trecho tecnicamente correto
mas que um operacional entenderia errado = ⚠️ com reescrita; promessa de
funcionalidade que o Go Live não entrega, sem ressalva = ⚡; parágrafo denso que
precisa virar lista para a reunião = 📝; referência a projeto interno da Invent
(BP, CDSK, NavePark...) vazada no texto = ⚡ (remover antes do envio, sempre).

---

## Auditoria de Aditivo (ramo do Modo 1 quando `g4 = additive`)

Além de todas as camadas U + K, quando o projeto é aditivo, verifique:
- **Cobertura do escopo aditivo:** o escopo declarado em `g4a` está inteiramente
  coberto pelos capítulos gerados? Módulo do aditivo sem capítulo = ⚡ `[DECISÃO]`.
- **Não re-especificar o sistema-base:** nenhuma funcionalidade já implantada no
  sistema-base foi re-descrita como se fosse nova (erro comum em aditivo) = ⚠️.
- **Referência cruzada ao documento-base:** onde o aditivo toca um módulo
  existente, há referência ao documento-base? Ausência = 📝.
- **Nota de escopo aditivo presente** (parágrafo do Objetivo com `g4a`) = ✅ se
  presente, ⚡ se ausente.

---

## Formatos de relatório

### Modo 1 — Relatório de GAPs (pré-emissão)
Entregue ANTES do `input_json`. Se houver achados `[DECISÃO]`, o JSON só sai
depois de todas as decisões — nunca parcialmente.

```markdown
# Relatório de GAPs — [Nome do Projeto]

> Auditoria executada sobre [N] capítulos gerados para o projeto [CÓDIGO].
> Encontrados: [X] ⚡ críticos · [Y] ⚠️ atenção · [Z] 📝 melhorias.
> **Responda cada item [DECISÃO] antes de receber o JSON final.**

## ⚡ Achados críticos com decisão obrigatória
### GAP-01 — [U5/K1/...] [Título curto]
**Problema:** [2–4 linhas. Citar capítulos, campos do kickoff (ex: `st7`) e seção do JSON.]
**Opção A:** [o que muda no JSON]
**Opção B:** [o que muda no JSON]
**Sua decisão:** ___

## ⚠️ Achados com proposta padrão
> O ED propõe a Opção A. "aceito todas as propostas padrão" aplica todas as A.
### AT-01 — [U9/...] [Título curto]
**Observação:** [1–3 linhas.]
**Proposta (A — padrão):** [...]  ·  **Alternativa (B):** [...]
**Sua decisão:** ___ (A / B / texto)

## 📝 Melhorias (aplicadas automaticamente, listadas para transparência)
- [Item] — [correção aplicada]

## ✅ Verificados
- [Ponto-chave conferido e correto — 1 linha cada]
```

Sem nenhum achado: declarar **"Auditoria concluída. Nenhum GAP identificado."**
(obrigatório mesmo vazio) antes de emitir o JSON. Após as decisões: regerar o
`input_json` **completo**, incorporando tudo de uma vez.

### Modo 2 — Relatório de Conferência de Documento
Ordem de entrega:
1. **SUMÁRIO EXECUTIVO** — contagem (⚡ N · ⚠️ N · 📝 N · ✅ N) + **veredito**
   (`pronto para envio` | `pronto após corrigir os N críticos` | `precisa de
   nova rodada`) + 2–4 linhas sobre os temas dominantes.
2. **ACHADOS NUMERADOS por camada** — cada um com localização (seção + "Ctrl+F:
   trecho"), classificação, problema, correção "de → para". Achados `[DECISÃO]`
   no formato A/B do Modo 1.
3. **LISTA CONSOLIDADA DE PENDÊNCIAS** — tabela `# | Pendência | Origem (seção) |
   Quem resolve (Invent/WMS/Cliente) | Bloqueia?`.
4. **MATRIZ CAMPO × INTEGRAÇÃO** (evidência da U2).

### Modo 3 — Validação de Retorno
Para cada ponto do relatório anterior, classificar: **✔ Atendido** (com
evidência: seção + trecho), **◐ Parcial** (dizer o que falta), **✘ Não atendido /
regrediu**. Entregar placar + pendentes para a próxima rodada + novos achados (se
a revisão introduziu problema, rodar U2/U8 sobre os trechos alterados). Ponto que
volta limpo é entrega válida — a evidência de que já está correto É o resultado.

---

## Regras de ouro

- **Diferença proposital não é gap.** Omissão alinhada com o cliente é
  intencional — registre como ✅ com a justificativa, não como achado.
- **Reporte TODOS os achados** — não filtre por importância; a escala existe para
  isso. Dúvidas leves também entram (separadas).
- **Não invente problema onde não há** — mas marque ✅ nos pontos-chave para
  provar cobertura.
- **Integrações são o maior foco de GAP** — U2 e U5 são as camadas mais valiosas;
  dê a elas o maior esforço.
- **Master Data manda.** Contradição com o Master Data é sempre ⚡ e nunca passa.
- **Multi-ocorrência:** ao achar um problema de nome/termo/responsabilidade,
  varra o documento INTEIRO — não pare na primeira ocorrência.
- **Nunca decida sozinho um `[DECISÃO]`** — 2 opções e aguarde.
- **Não vazar referência a outros projetos** (BP, CDSK, NavePark...) em texto que
  vá para documento de cliente.
