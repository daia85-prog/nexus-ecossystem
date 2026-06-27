# ED_CARD — packing

**Tópico:** packing · **Bloco:** conferencia · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `pk1 = yes`

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{packing_auto}}` | `pk_auto` | boolean | `yes`=Packing automatizado (void fill, fechadora) · `no`=Packing manual |
| `{{tem_impressora}}` | `pk_imp` | boolean | `yes`=Há impressora no packing · `no`=Sem impressora |
| `{{impressora_forn}}` | `pk_imp_f` | select (se pk_imp=yes) | `invent`=Invent · `client`=Cliente · `both_resp`=Ambos |
| `{{impressora_disparo}}` | `pk_imp_t` | select (se pk_imp=yes) | `imp_manual`=Manual · `imp_auto`=Automática |
| `{{troca_caixa}}` | `pk_troca` | boolean | `yes`=Troca de caixa no packing · `no`=Sem troca de caixa |
| `{{troca_etiqueta}}` | `pk_etiq` | boolean | `yes`=Troca de etiqueta no packing · `no`=Sem troca de etiqueta |

## Condicionais (regra → ação)

- **`pk1 = no`** → NÃO emitir este tópico.
- **`pk_auto = yes`** → incluir subseção "Packing Automatizado": seladora automática acoplada à esteira, void fill; referenciar variação BR (Cetro).
- **`pk_imp = yes`** → incluir subseção "Impressão de Etiqueta Final": disparo {{pk_imp_t}} (Manual ou Automática); fornecimento {{pk_imp_f}}; emitir etiqueta final (identificação de expedição lida no sorter e PTL).
- **`pk_imp = no`** → emitir WARNING: *"Sem impressora no packing — confirmar se etiqueta é impressa em outra etapa ou se não há intervenção sistêmica do Velox."*; referenciar RN-08 (packing sem intervenção sistêmica).
- **`pk_imp_t = imp_auto`** → detalhar impressão automática ao ler a caixa plástica (sem ação manual do operador).
- **`pk_imp_t = imp_manual`** → detalhar ação do operador para disparar a impressão.
- **`pk_troca = yes`** → incluir subseção "Troca de Caixa": operador transfere itens da caixa plástica para caixa de expedição; caixa plástica retorna ao ciclo (RN-04); mencionar funcionalidade "Pede Caixa" se volume extra for necessário (RN-05).
- **`pk_troca = no`** → confirmar se o packing opera apenas com fechamento/lacre da caixa original.
- **`pk_etiq = yes`** → incluir subseção "Troca de Etiqueta": troca da etiqueta existente pela etiqueta final de expedição; detalhar layout conforme cliente.
- **`pk_etiq = no` E `pk_imp = no`** → emitir WARNING: *"Sem troca de etiqueta e sem impressora — verificar se o volume chega ao packing já etiquetado para expedição."*
- **Balança dinâmica presente** → incluir nota: packing só habilita impressão de volumes com peso positivo aprovado (RN-01, RN-02).
- **AMR presente** → mencionar transporte de caixas plásticas vazias de volta ao Order Start (RN-04 + variação NavePark).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Packing"
  conteudo: O Packing é a etapa de embalagem final do volume: {{se pk_troca=yes}} o operador
  transfere os itens da caixa plástica para a caixa de expedição; {{se pk_etiq=yes}} fixa a
  etiqueta final impressa pelo WCS; e reinduzo o volume na esteira rumo ao sorter. O WCS só
  permite imprimir a etiqueta final de volumes aprovados na validação de peso ou conferidos
  manualmente.

[nivel 2] "Fluxo do Processo"
  conteudo: 1. Após aprovação (peso positivo na balança ou conferência manual), volume é
  direcionado ao packing. 2. Operador acessa tela de packing e seleciona o posto.
  3. Lê a caixa plástica ("etiqueta burra").
  {{se pk_imp=yes E pk_imp_t=imp_auto}} 4. WCS imprime etiqueta final automaticamente.
  {{se pk_imp=yes E pk_imp_t=imp_manual}} 4. Operador aciona a impressão da etiqueta final.
  {{se pk_troca=yes}} 5. Transfere itens para caixa de expedição, fecha/lacra.
  {{se pk_auto=yes}} 5. Seladora automática lacra a caixa na esteira.
  6. Fixa a etiqueta final. 7. Reinduzo na esteira → sorter → PTL.
  {{se pk_troca=yes}} 8. Caixa plástica vazia retorna ao ciclo.

[nivel 2] "Impressão de Etiqueta Final"  {{emitir apenas se pk_imp=yes}}
  conteudo: Disparo: {{pk_imp_t}}. Fornecimento da impressora: {{pk_imp_forn}}.
  A etiqueta final é lida no sorter (desvio à rampa) e no PTL (alocação no destino).
  Layout conforme especificação do cliente. {{se pk_etiq=yes}} Troca de etiqueta inclui
  remoção da etiqueta anterior e fixação da etiqueta final de expedição.

[nivel 2] "Packing Automatizado"  {{emitir apenas se pk_auto=yes}}
  conteudo: Seladora automática (ex.: Cetro) acoplada à esteira realiza o lacre automatizado
  da caixa de expedição. Pode incluir void fill para preenchimento de espaço vazio.

[nivel 2] "Troca de Caixa e Pede Caixa"  {{emitir apenas se pk_troca=yes}}
  conteudo: O operador transfere os itens da caixa plástica (separação) para a caixa de
  expedição (papelão). A caixa plástica é reutilizável e retorna ao ciclo de separação.
  Quando uma caixa enche e o pedido precisa de volume extra ("Pede Caixa"), o WCS recalcula
  o total de volumes e reemite a numeração de todos os volumes ainda não impressos.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE filtradas pelas condicionais: RN-01, RN-02, RN-03 sempre;
  RN-04 se pk_troca=yes; RN-05 se pk_troca=yes (Pede Caixa);
  RN-07 se pós-auditoria/conferência; RN-08 se sem intervenção sistêmica; RN-10 (especificação de etiqueta sorter).

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; termos do DOSSIE relevantes ao escopo emitido.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[conferencia]], [[conferencia-manual]], [[packing-termolabil]], [[sorter]], [[put-to-wall]], [[order-start]].
