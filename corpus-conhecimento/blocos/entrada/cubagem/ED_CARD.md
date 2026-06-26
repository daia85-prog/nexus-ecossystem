# ED_CARD — cubagem

**Tópico:** cubagem · **Bloco:** entrada · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `cu1 = yes` (se `no`/`tbd` → não emitir nada deste tópico)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{responsavel}}` | `c1` | select | `wcs`=WCS · `wms_only`=WMS |
| `{{multi_caixa}}` | `c2` | select | `yes`=Sim · `no`=Não |
| `{{tipo_caixa_unico}}` | `l1` | select (só se c2=no) | `tote_plastic`=Tote/Plástica · `cardboard`=Papelão · `fardo`=Fardo · `misto_box`=Misto |
| `{{tipos_caixa_multi}}` | `l1_m` | multi (só se c2=yes) | `tote_plastic`=Tote/Plástica · `cardboard`=Papelão · `fardo`=Fardo · `misto_box`=Misto |

## Condicionais (regra → ação)

- **`c1 = wcs`** → emitir seção "Modelos de Cubagem WCS" descrevendo seleção automática de caixa e algoritmo; cruzar com [[order-start]] (WCS processa os volumes que o OS vai induzir).
- **`c1 = wms_only`** → emitir aviso: cubagem calculada pelo WMS; o WCS recebe volumes prontos e não executa cálculo próprio; suprimir subseção de modelos WCS.
- **`c2 = no`** → emitir subseção "Caixa Única" com o valor de `{{tipo_caixa_unico}}`; mencionar RN-03 (inativa: considera só cubagem m³, sem validação dimensional).
- **`c2 = yes`** → emitir subseção "Múltiplos Tipos de Caixa" listando `{{tipos_caixa_multi}}`; mencionar RN-03 (ativa: valida dimensões A/L/C e troca por caixa alternativa se exceder).
- **`c2 = yes` + `tote_plastic` em `l1_m`** → incluir nota sobre caixa plástica no picking e cubagem de expedição (transbordo para papelão no packing).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Cubagem"
  conteudo: A cubagem é o cálculo do volume total dos itens do pedido para determinar quantas e quais caixas serão necessárias na separação. A responsabilidade pelo cálculo é do {{responsavel}}, que utiliza as dimensões e peso dos produtos (cadastro) para gerar os volumes e definir as caixas antes do Order Start.

[nivel 2] "Responsabilidade pelo Cálculo"
  conteudo: {{responsavel}} realiza a cubagem e determina os volumes.
  [tipo warning] (condicional: c1=wms_only) "O WCS não executa cubagem própria neste projeto: recebe os volumes prontos do WMS e os utiliza diretamente no Order Start."

[nivel 2] "Tipo(s) de Caixa Utilizado(s)"
  conteudo: (condicional: c2=no) O projeto utiliza tipo único de caixa: {{tipo_caixa_unico}}. (condicional: c2=yes) O projeto utiliza múltiplos tipos de caixa: {{tipos_caixa_multi}}.
  [tipo warning] (condicional: c2=yes) "Com múltiplos tipos, o WCS aplica validação dimensional (A/L/C): se um item excede as dimensões da caixa sugerida, o sistema seleciona automaticamente uma caixa alternativa compatível."
  [tipo warning] (condicional: c2=no) "Com tipo único, o WCS considera exclusivamente a cubagem volumétrica (m³), sem verificação de dimensões individuais."

[nivel 2] "Fluxo da Cubagem"
  conteudo: (condicional: c1=wcs) O WCS recebe os itens do pedido com dimensões e peso, calcula a cubagem total, determina os volumes e informa ao Order Start quantas caixas e de quais tamanhos são necessárias. O operador fixa as etiquetas e induz as caixas na esteira. (condicional: c1=wms_only) O WMS entrega ao WCS os volumes já dimensionados; o Order Start os utiliza diretamente para a indução.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]
  RN-01: A cubagem usa dimensões e peso dos produtos (cadastro) para gerar volumes e definir caixas.
  RN-02: A responsabilidade pelo cálculo é do {{responsavel}}, conforme configuração do projeto.
  RN-03: (condicional: c2=yes) Com validação dimensional ativa, se A/L/C excede a caixa sugerida, o WCS troca por caixa alternativa; (condicional: c2=no) com validação inativa, considera só a cubagem m³.
  RN-09: Cada caixa deve ter apenas um código de barras visível para leitura correta no sorter.
  RN-11: A etiqueta de picking inclui produto/quantidade/lotes + código da caixa sugerida + DataMatrix do volume.
```

## Notas de rastreabilidade

- Conteúdo canônico e todas as RN: `./DOSSIE.md`.
- Cruza com: [[order-start]], [[etiquetas]], [[integracao-pedidos]].
