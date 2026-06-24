# ED_CARD — recebimento-armazenagem

**Tópico:** recebimento-armazenagem · **Bloco:** entrada · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `es1 = yes` (sem gate próprio — gatilho: gestão de estoque ativa ou mezanino presente; se `no`/`tbd` → avaliar se mezanino `l3=yes` justifica emissão parcial)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{tem_mezanino}}` | `l3` | select | `yes`=Sim · `no`=Não |
| `{{niveis_mezanino}}` | `l5` | texto (só se l3=yes) | quantidade de níveis do mezanino |
| `{{tem_amr}}` | `l6` | select | `yes`=Sim · `no`=Não |
| `{{wcs_estoque}}` | `es1` | select | `yes`=Sim · `no`=Não |

## Condicionais (regra → ação)

- **`es1 = yes`** → emitir capítulo completo: recebimento de pallets, consumo/validação, armazenagem controlada pelo WCS, movimentação interna.
- **`es1 = no`** → emitir aviso: WCS não gerencia estoque; armazenagem e controle de pallets são responsabilidade do WMS; suprimir subseções de consumo e movimentação interna.
- **`l3 = yes`** → incluir subseção "Armazenagem em Mezanino" com `{{niveis_mezanino}}` níveis; cruzar com [[order-start]] (campo `os5=yes` confirma OS por nível).
- **`l3 = no`** → suprimir subseção de mezanino.
- **`l6 = yes`** → incluir subseção "AMR (Robôs Móveis Autônomos)": descrever que os AMRs executam movimentações de pallet entre posições de armazenagem e reabastecimento; emitir warning sobre necessidade de mapear zonas de atuação dos robôs.
- **`l6 = no`** → suprimir subseção de AMR.
- **`es1 = yes` + `l6 = yes`** → cruzar com [[reabastecimento]]: AMRs podem atuar também no reabastecimento do picking.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Recebimento e Armazenagem"
  conteudo: Este capítulo descreve a entrada de materiais no WCS e seu armazenamento. (condicional: es1=yes) O WCS gerencia o estoque: controla o recebimento dos pallets, valida os dados contra a base integrada do WMS, direciona a armazenagem e permite movimentação interna de itens entre posições. (condicional: es1=no) O controle de estoque e armazenagem é responsabilidade do WMS; o WCS atua apenas na execução das ordens de movimentação recebidas.

[nivel 2] "Recebimento de Pallets"
  conteudo: (condicional: es1=yes) O WMS insere os dados do pallet (via integração ou tabela intermediária) antes da chegada física. O operador confirma o recebimento no WCS lendo o identificador do pallet e o endereço de destino; o WCS valida os dados e confirma o recebimento ao WMS.
  [tipo warning] (condicional: es1=yes) "Se o WMS não tiver inserido os dados do pallet antes da leitura, o WCS retorna 'Pallet não encontrado' (RN-01). Garantir a sequência de integração com o cliente."
  [tipo warning] (condicional: es1=no) "O recebimento físico ocorre fora do escopo do WCS. Documentar o fluxo de integração WMS→WCS para rastreio de disponibilidade de pallet no picking."

[nivel 2] "Armazenagem em Mezanino"
  conteudo: (condicional: l3=yes) O armazém possui mezanino com {{niveis_mezanino}} nível(is). A armazenagem é segmentada por andar; cada nível possui endereços próprios e fluxo de reabastecimento independente.
  [tipo warning] (condicional: l3=yes) "Confirmar com [[order-start]] (campo os5) se há Order Start por nível de mezanino para garantir a indução de caixas no andar correto."

[nivel 2] "AMR — Robôs Móveis Autônomos"
  conteudo: (condicional: l6=yes) O projeto conta com AMRs para movimentação de pallets entre as posições de armazenagem e o picking. Os robôs recebem ordens do WCS e confirmam a execução, reduzindo o transporte manual.
  [tipo warning] (condicional: l6=yes) "Mapear as zonas de atuação dos AMRs e os tipos de posição atendidos (armazenagem, reabastecimento) antes da especificação das telas de movimentação. Cruzar com [[reabastecimento]]."

[nivel 2] "Movimentação Interna"
  conteudo: (condicional: es1=yes) O WCS permite a realocação manual de itens entre posições: o operador informa a posição de origem, o SKU e a posição de destino. A tarefa gerada recebe um prefixo identificando a movimentação manual, diferenciando-a das movimentações automáticas.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]
  RN-01: O recebimento exige que o WMS tenha inserido os dados do pallet antes; sem isso, o consumo retorna "Pallet não encontrado".
  RN-02: (condicional: es1=yes) Não é permitido alocar mais de um pallet no mesmo endereço; endereços novos podem ser criados na leitura (sem validação prévia de existência).
  RN-03: As rotinas do WCS só processam quando todas as colunas da tabela intermediária estão populadas; chaves únicas evitam duplicação; o WMS não deleta registros.
  RN-04: Pallets do mesmo pedido são alocados em endereços próximos no stage; a liberação é manual e exige a leitura de todos os pallets do pedido.
  RN-05: Se houver pallet do pedido ainda no PTL, a liberação do stage é bloqueada com "Pedido incompleto".
  RN-06: (condicional: es1=yes) Movimentação interna: lê origem → SKU → destino; a tarefa recebe prefixo de movimentação manual.
```

## Notas de rastreabilidade

- Conteúdo canônico e todas as RN: `./DOSSIE.md`.
- Cruza com: [[order-start]], [[reabastecimento]], [[integracao-pedidos]], [[cadastros-acessos]].
