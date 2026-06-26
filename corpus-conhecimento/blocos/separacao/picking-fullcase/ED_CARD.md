# ED_CARD — picking-fullcase

**Tópico:** picking-fullcase · **Bloco:** separacao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `fc1 = yes` (se `no`/`tbd` → não emitir nada deste tópico)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{responsabilidade}}` | `fc_r` | select | `wcs`=WCS · `wms_only`=WMS · `both_wms_wcs`=Ambos |
| `{{metodo_coleta}}` | `fc2` / `fc2b` | select (condicional) | `fc_coletor`=Coletor · `fc_etiq_led`=Etiqueta+LED · `fc_etiq`=Etiqueta |
| `{{tem_impressora}}` | `fc_i` | select | `yes`=Sim · `no`=Não |
| `{{forn_impressora}}` | `fc_if` | select (condicional) | `invent`=Invent · `client`=Cliente · `both_resp`=Ambos |
| `{{tem_conferencia}}` | `fc_conf` | select | `yes`=Sim · `no`=Não |
| `{{hw_conferencia}}` | `fc_conf_hw` | select (condicional) | `fc_hw_col`=Coletor Android · `fc_hw_pdv`=PDV + Scanner de Mão |
| `{{forn_coletor}}` | `fc_conf_forn` | select (condicional) | `invent`=Invent · `client`=Cliente · `both_resp`=Ambos |

## Condicionais (regra → ação)

- **`fc_r = wcs`** → usar `fc2` como campo de método; emitir fluxo Modelo Invent (coleta guiada com Order Start Full Case).
- **`fc_r = both_wms_wcs`** → usar `fc2b` como campo de método; emitir fluxo Modelo Invent com nota de responsabilidade compartilhada.
- **`fc_r = wms_only`** → emitir fluxo Modelo Cliente (caixas fechadas, sem Order Start, sem Picking Confirm); warning "Full Case não passa por Order Start nem gera Picking Confirm no WCS — apenas integrado via Wave para desvio no sorter (RN-07)."
- **`fc2` ou `fc2b` = `fc_coletor`** → descrever coleta com coletor Android: endereço → etiqueta → código de produto (uma leitura por unidade).
- **`fc2` ou `fc2b` = `fc_etiq_led`** → descrever coleta com Etiqueta+LED; mencionar posto de impressão e ordem de coleta vinculada à impressora selecionada (RN-12, variante Automatize).
- **`fc2` ou `fc2b` = `fc_etiq`** → descrever coleta apenas por etiqueta; sem LED.
- **`fc_i = yes`** → incluir subseção "Impressão de Etiquetas" com fornecimento `{{forn_impressora}}`; mencionar Order Start Full Case como etapa de impressão (modelo Invent); layouts distintos para Full Case padrão e Full Case Perigoso (RN-13).
- **`fc_i = no`** → omitir subseção de impressão.
- **`fc_conf = yes`** → incluir subseção "Conferência Full Case" com hardware `{{hw_conferencia}}`; descrever fluxo de validação.
- **`fc_conf = no`** → incluir nota sobre fornecimento do coletor (`{{forn_coletor}}`); mencionar que conferência não está configurada neste projeto.
- **`fc_conf_hw = fc_hw_col`** → conferência com coletor Android; descrever leitura de endereço + produto.
- **`fc_conf_hw = fc_hw_pdv`** → conferência com PDV + Scanner de mão; descrever fluxo correspondente.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Picking Full Case"
  conteudo: separação de caixas/volumes fechados (embalagens inteiras de um SKU). Responsabilidade: {{responsabilidade}}. Método de coleta: {{metodo_coleta}}. Após a coleta, o volume segue via sorter para a rampa de destino da transportadora/rota.

[nivel 2] "Modelo de Operação"
  [condicional: fc_r = wcs ou fc_r = both_wms_wcs]
    conteudo: Modelo Invent — coleta guiada pelo WCS. Após o Order Start Full Case, o WCS abre a tela de coleta; o operador vai à rua selecionada e coleta os itens conforme a lista (endereço, produto, quantidade). O Picking Confirm é gerado ao final da coleta.
  [condicional: fc_r = wms_only]
    conteudo: Modelo Cliente — caixas fechadas separadas pelo cliente/WMS (ex.: voice picking) e etiquetadas (etiqueta na face superior, RN-08). Os volumes são integrados no Velox via Wave sem Order Start e sem Picking Confirm (RN-07). As caixas são induzidas no sorter e desviadas conforme o mapa; caixas fora da onda atual seguem para rejeito (RN-09).
    [tipo warning] "Full Case não passa por Order Start nem gera Picking Confirm — apenas integrado via Wave para desvio no sorter."

[nivel 2] "Fluxo de Coleta"
  [condicional: fc2 ou fc2b = fc_coletor]
    conteudo: (1) Order Start Full Case: operador seleciona rua; WCS imprime etiqueta. (2) Coletor Android exibe lista: endereço, produto, quantidade. (3) Leitura do endereço → leitura da etiqueta → leitura do código de produto (uma leitura por unidade, RN-01). (4) Troca de endereço se faltar produto. (5) "Finalizar Coleta": operador lê etiquetas dos itens não coletados → WCS os corta (RN-02).
  [condicional: fc2 ou fc2b = fc_etiq_led]
    conteudo: (1) Order Start: operador escolhe posto de impressão e rua; WCS imprime etiqueta antes da coleta. (2) Ordem de coleta (crescente/decrescente) definida pela impressora selecionada (RN-12). (3) Leitura de endereço → etiqueta → produto. (4) Finalizar Coleta com leitura das etiquetas de itens não coletados.
  [condicional: fc2 ou fc2b = fc_etiq]
    conteudo: (1) Order Start: etiqueta impressa. (2) Coleta por leitura de endereço → etiqueta. (3) Finalizar Coleta.

[nivel 2] "Impressão de Etiquetas"
  [condicional: fc_i = yes]
    conteudo: Impressora presente (fornecimento: {{forn_impressora}}). Etiqueta impressa no Order Start Full Case. Layouts distintos para: (a) Picking Fullcase padrão; (b) Picking Fullcase Perigoso (produtos perigosos, RN-13).
  [condicional: fc_i = no]
    conteudo: Sem impressora configurada neste projeto.

[nivel 2] "Conferência Full Case"
  [condicional: fc_conf = yes]
    conteudo: Conferência habilitada. Hardware: {{hw_conferencia}}. O operador valida os volumes Full Case após a coleta antes da indução no sorter.
  [condicional: fc_conf = no]
    conteudo: Conferência não configurada neste projeto. Fornecimento do coletor: {{forn_coletor}}.

[nivel 2] "Corte e Finalização"
  conteudo: Em falta de produto, "Finalizar Coleta" abre tela para leitura das etiquetas dos itens não coletados — o WCS os corta (RN-02). Reabastecimentos cortados não geram nova tarefa de reabastecimento; o sistema registra a ocorrência (RN-04). Após a coleta, volume Full Case → sorter → rampa da transportadora/rota.
  cruzar com: [[picking-pallet]] (quando volume justifica alocação direta em pallet)

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]; incluir:
    - RN-01 (leitura por unidade coletada — modelo Invent, condicional fc_r=wcs/both)
    - RN-02 (Finalizar Coleta: ler etiquetas dos não coletados → WCS corta)
    - RN-04 (reabastecimento cortado não gera nova tarefa)
    - RN-07 (modelo Cliente: sem Order Start, sem Picking Confirm, condicional fc_r=wms_only)
    - RN-08 (etiqueta na face superior — responsabilidade do cliente, condicional fc_r=wms_only)
    - RN-09 (caixa fora da onda atual → rejeito no sorter)
    - RN-12 (ordem de coleta definida pela impressora selecionada, condicional fc_etiq_led)
    - RN-13 (layouts distintos para Full Case padrão e Perigoso, condicional fc_i=yes)

[nivel 2] "Integrações"
  conteudo: Wave (recebimento de tarefas/volumes Full Case; modelo Cliente: único vínculo com o WCS). Picking Confirm (envio após coleta — apenas modelo Invent). Sorter/mapa de rotas (desvio do volume à rampa de destino).
```

## Notas de rastreabilidade

- Conteúdo canônico e todas as RN: `./DOSSIE.md`.
- Cruza com: [[picking-pallet]], [[conferencia]], [[order-start]], [[packing]].
