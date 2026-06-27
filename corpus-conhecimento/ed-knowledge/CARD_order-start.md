# ED_CARD — order-start

**Tópico:** order-start · **Bloco:** entrada · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `os_gate = yes` (se `no`/`tbd` → não emitir nada deste tópico)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{os_responsavel}}` | `os_r` | select | `wcs`=WCS · `wms_only`=WMS · `both_wms_wcs`=Ambos |
| `{{os_estacoes}}` | `os1` | texto | número de estações de Order Start |
| `{{os_imprime_etq}}` | `os_imp_etq` | select | `yes`=Sim · `no`=Não |
| `{{os_vinculo}}` | `os4` | select | `scan_fix`=Scanner fixo · `scan_man`=Coletor manual |
| `{{os_por_nivel}}` | `os5` | select | `yes`=Sim · `no`=Não |

## Condicionais (regra → ação)

- **`os_r = wcs`** → descrever Order Start WCS completo: fila, cubagem, geração de volumes, impressão de etiquetas e indução; cruzar com [[cubagem]] (campo `c1=wcs` define que o WCS processa a cubagem antes do OS).
- **`os_r = wms_only`** → emitir aviso: responsabilidade de gerar volumes e definir caixas é do WMS; o WCS apenas recebe e exibe a fila; suprimir detalhes de cubagem no OS.
- **`os_r = both_wms_wcs`** → descrever divisão de responsabilidades; indicar que o WMS pode gerar parte dos volumes (ex.: full case) e o WCS os demais.
- **`os_imp_etq = yes`** → incluir subseção "Impressão de Etiquetas no Order Start"; mencionar RN-03 (etiqueta gerada a partir da cubagem) e cruzar com [[etiquetas]].
- **`os_imp_etq = no`** → emitir warning: etiquetas não são impressas no OS; descrever onde ocorre a impressão (etapa posterior).
- **`os4 = scan_fix`** → descrever vinculação via scanner fixo na bancada; operador posiciona a caixa e o leitor captura o código automaticamente.
- **`os4 = scan_man`** → descrever vinculação via coletor portátil; operador lê manualmente o DataMatrix/código de barras da caixa.
- **`os5 = yes`** → incluir subseção "Order Start por Nível de Mezanino": um OS por andar; cruzar com [[recebimento-armazenagem]] (campo `l3=yes` confirma mezanino presente).
- **`os5 = no`** → suprimir subseção de mezanino.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Order Start"
  conteudo: O Order Start é o ponto de disparo da separação: após a integração da onda, o {{os_responsavel}} ordena os pedidos em fila, gera os volumes (a partir da cubagem), imprime as etiquetas e o operador induz as caixas na linha. O projeto conta com {{os_estacoes}} estação(ões) de Order Start.

[nivel 2] "Responsabilidade e Fila de Pedidos"
  conteudo: O {{os_responsavel}} recebe os pedidos da onda, organiza a fila por ordem de integração (FIFO) e permite ajuste manual de prioridade quando necessário.
  [tipo warning] (condicional: os_r=wms_only) "O WCS não executa cubagem nem geração de volumes neste fluxo: recebe do WMS os volumes já prontos e os exibe na fila do Order Start."

[nivel 2] "Impressão de Etiquetas"
  conteudo: (condicional: os_imp_etq=yes) As etiquetas de picking são impressas no Order Start a partir dos volumes gerados pela cubagem. Cada etiqueta inclui produto, quantidade, lote, código da caixa sugerida e DataMatrix do volume. (condicional: os_imp_etq=no) A impressão de etiquetas não ocorre no Order Start deste projeto; ocorre em etapa posterior.
  [tipo warning] (condicional: os_imp_etq=no) "Confirmar em qual etapa as etiquetas serão emitidas antes da finalização da ES."

[nivel 2] "Método de Vinculação de Caixa"
  conteudo: O vínculo entre a etiqueta e a caixa física é feito por {{os_vinculo}}. (condicional: os4=scan_fix) O scanner fixo na bancada captura o código da caixa automaticamente quando o operador a posiciona. (condicional: os4=scan_man) O operador utiliza coletor portátil para ler o DataMatrix/código de barras da caixa.

[nivel 2] "Order Start por Nível de Mezanino"
  conteudo: (condicional: os5=yes) O projeto conta com Order Start segregado por andar do mezanino: cada nível possui sua própria estação, garantindo que os volumes sejam induzidos no andar correto.
  [tipo warning] (condicional: os5=yes) "Confirmar com [[recebimento-armazenagem]] a quantidade de níveis (campo l5) para mapear o número exato de estações por andar."

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]
  RN-01: O Order Start inicia após a integração da onda; o {{os_responsavel}} gera a fila de pedidos/volumes a separar.
  RN-02: Priorização conforme a integração; ajuste manual quando necessário; empate por FIFO.
  RN-03: (condicional: os_imp_etq=yes) O WCS gera os volumes a partir da cubagem e imprime as etiquetas no OS.
  RN-04: O Order Start Padrão não exibe pedidos/volumes de postos de exceção (e vice-versa).
  RN-07: (condicional: os4=scan_fix ou os4=scan_man) O mapeamento vincula caixa à posição; a mesma caixa não pode ocupar 2 posições simultaneamente.
  RN-08: A reclassificação de endereço para exceção (prefixo) ocorre antes do Order Start; pedido com item comum não vira exceção; a confirmação ao WMS usa o endereço original.
```

## Notas de rastreabilidade

- Conteúdo canônico e todas as RN: `./DOSSIE.md`.
- Cruza com: [[cubagem]], [[etiquetas]], [[integracao-pedidos]], [[picking-pbl]], [[picking-cart]], [[picking-fullcase]], [[recebimento-armazenagem]].
