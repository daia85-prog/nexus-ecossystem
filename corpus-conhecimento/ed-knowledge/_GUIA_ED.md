# Guia do Especialista Documentador (ED)

Este guia instrui o ED (IA) a gerar o `input_json` da Especificação de Software (ES) a partir das **respostas do kickoff** + dos **dossiês minerados**. O objetivo é produzir documentos **completos, consistentes e rastreáveis**, escolhendo as variações **pelos dados do projeto** — não por adivinhação.

## Arquitetura (visão geral)

```
Kickoff (respostas)  ──┐
                       ├──►  ED  ──►  input_json  ──►  docxBuilder  ──►  .docx
Dossiês + Cards + Router ┘
```

- **Kickoff** = fonte das **variáveis e condicionais** (quais áreas o projeto tem + como cada uma se comporta). É um dicionário plano `{ id_pergunta: valor }`; multi-select separa valores por `|||`; `tbd` = a definir.
- **`_ROUTER.json`** = manifesto: liga cada `gate`/campo do kickoff a um tópico, define a **ordem dos capítulos** e as **regras globais**.
- **`blocos/{bloco}/{sub}/DOSSIE.md`** = conhecimento canônico do tópico (fonte de verdade, rastreável).
- **`blocos/{bloco}/{sub}/ED_CARD.md`** = versão enxuta pronta-para-geração: variáveis, condicionais e esqueleto de capítulos com slots.

> **Por que NÃO um super-MD:** um documento usa só os tópicos que o projeto tem (gates). Carregar os 30+ dossiês a cada geração desperdiça contexto e mistura conteúdo irrelevante. O ED carrega **apenas os cards dos tópicos em escopo**.

## Procedimento do ED (passo a passo)

1. **Receber** as respostas do kickoff (`a`) + meta do projeto.
2. **Resolver o escopo** lendo `_ROUTER.json`:
   - Para cada tópico, avaliar o `gate`. Se `gate.valor` casa com `a[gate.campo]` → tópico **EM ESCOPO**. Gate `null` → usar `trigger_heuristico`.
   - `gate = '*'` → sempre em escopo. Gate com `'a|b'` → casa se o valor for `a` **ou** `b`.
   - Gate `= 'no'` ou campo ausente → **pular** o tópico inteiro.
3. **Montar a lista ordenada** de tópicos em escopo seguindo `ordem_capitulos`.
4. **Para cada tópico em escopo**, carregar seu `ED_CARD.md` e:
   - Preencher as **variáveis** com os valores do kickoff (mapear código→texto, ex.: `conf_blind` → "Conferência cega (Blind Check)").
   - Aplicar as **condicionais**: incluir/omitir subseções conforme o dado (ex.: `cf_t2` contém `conf_weight` → incluir a seção de Check Weight).
   - Emitir os **blocos de capítulo** (headings, parágrafos, tabelas, json_block, warning) com os slots preenchidos.
   - Em dúvida de profundidade, consultar o `DOSSIE.md` do tópico (referência completa).
5. **Aplicar regras globais** (`regras_globais` do router):
   - `tbd`/"a definir" → **não emitir** a seção (o docxBuilder também remove, mas o ED deve evitar gerá-la).
   - **NÃO** gerar o capítulo "Métodos de Autenticação" (injetado byte-a-byte do template antes de "Integrações").
   - Anotações de revisão podem usar `[OBS INTERNA]` / `[ATENÇÃO CRÍTICA]` (removidas do .docx).
6. **Emitir o `input_json`**: `{ meta, capa, capitulos[] }` na ordem do router.

## Formato do `input_json` (contrato do docxBuilder)

```jsonc
{
  "meta":  { "projeto": "...", "codinome": "...", "codigo": "...", "fase": "ES", "revisao": "01" },
  "capa":  { "nome_cliente": "...", "descricao_revisao": "Emissão inicial", ... },
  "capitulos": [
    { "nivel": 1, "titulo": "Conferência", "conteudo": "parágrafo...\n\noutro parágrafo" },
    { "nivel": 2, "titulo": "Fluxo do Processo", "conteudo": "..." },
    { "tipo": "tabela", "headers": ["#","Regra"], "rows": [["RN-01","..."]] },
    { "tipo": "json_block", "linhas": ["{", "  \"sku\": \"...\"", "}"] },
    { "tipo": "warning", "texto": "Item desviado para conferência quando o peso..." }
  ]
}
```

Regras de renderização úteis (já no docxBuilder):
- **Heading** `nivel` 1–5 (estilo Título{n}). Parágrafos separados por `\n\n`; quebras simples por `\n`.
- **`tipo: "tabela"`** — cabeçalho amarelo, larguras automáticas. Tabela de stakeholders recebe o usuário logado na 1ª linha.
- **`tipo: "json_block"`** — bloco escuro com syntax highlight; precedido por "Exemplo Payload (JSON):". Se vier antes de uma tabela, o builder reordena para o JSON vir primeiro.
- **`tipo: "warning"`** — caixa amarela; um aviso idêntico consecutivo é deduplicado.
- **`Direção: X → Y`** num parágrafo vira linha em **negrito** (usar para sentido de integração).
- **Quebra de página inteligente** é automática — não inserir quebras manuais.

## Princípios de qualidade

- **Variação vem do dado.** Nunca escolher uma variação que o kickoff não suporta. Se faltar dado, usar o padrão mais comum do dossiê e marcar `[OBS INTERNA] confirmar com a operação`.
- **Consistência.** Mesmo kickoff → mesma estrutura de capítulos. O dossiê padroniza terminologia (usar o glossário do tópico).
- **Completude por escopo.** Incluir todos os tópicos em escopo e todas as subseções cujas condicionais batem — nada a mais, nada a menos.
- **Rastreabilidade.** Cada capítulo tem origem num tópico/dossiê; regras de negócio reusam o texto canônico (RN-xx) do DOSSIE.

## Mapas de código→texto (kickoff)

Use o glossário de cada `ED_CARD.md` para traduzir os códigos de opção. Exemplos transversais:
- Responsabilidade: `wcs`=WCS, `wms_only`=WMS, `both_wms_wcs`=WMS+WCS.
- Fornecimento: `FN` (Invent/Cliente/...).
- Integração `in1`: `rest`=REST, `idoc`=IDOC SAP, `dblink`=DBLink, `excel`=Excel, `json_api`/`json_pasta`=JSON.
- `tbd` = a definir → omitir.

---
*Estrutura proposta na análise do ED (2026-06-24). Cards por tópico em `blocos/**/ED_CARD.md`. Roteamento em `_ED/_ROUTER.json`.*
