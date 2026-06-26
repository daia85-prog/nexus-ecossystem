# ED_CARD — put-to-wall

**Tópico:** put-to-wall · **Bloco:** separacao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `null` — **Trigger heurístico:** consolidação de pedidos pequenos (cf_t1 contém `conf_multi`) OU PTW físico confirmado com a operação

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| *(sem variáveis diretas)* | — | — | Conteúdo é operacional; gatilho vem de `cf_t1` e confirmação física da operação. |

## Condicionais (regra → ação)

- **`cf_t1` contém `conf_multi`** → confirmar se a consolidação é via PTW físico; se sim, emitir tópico completo; se não, mencionar apenas como ponto de atenção de configuração.
- **PTW confirmado (Flower/NavePark)** → emitir fluxo completo com LEDs, fechamento de nicho e encaminhamento.
- **Variante NavePark** → incluir subseção "Consolidação pré-indução": o PTW é ponto de passagem antes da indução no Order Start da esteira Fullcase; referenciar RN-07.
- **Variante Wild Fork (PTP)** → renomear para "Put-To-Pallet (PTP)" e ajustar descrição de módulo.
- **Paredes conformes/inconformes** → incluir nota sobre parede dedicada a inconformes (RN-06).
- **Integração define destino** → incluir parágrafo sobre a integração que decide conferência vs. packing pós-fechamento de nicho (RN-05); cruzar com [[conferencia]] e [[packing]].

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Put To Wall (PTW)"
  conteudo: O Put To Wall é uma parede de nichos usada para consolidar pedidos com poucas
  unidades ou múltiplas caixas. O WCS cuba os pedidos para alocar nichos grandes ou pequenos.
  Cada nicho recebe um pedido; o operador é guiado por LEDs para depositar os itens corretos.
  {{se PTP/Wild Fork}} O conceito é chamado de Put-To-Pallet (PTP) nesta operação.

[nivel 2] "Fluxo do Processo"
  conteudo: 1. Sistema vincula pedidos ao nicho. 2. Operador bipa EAN → LED azul indica nicho
  e quantidade. 3. Deposita itens. 4. Pedido completo → LED traseiro verde. 5. Confirma LED
  + bipa endereço do nicho + bipa caixa. 6. Integração define destino (conferência ou packing).
  {{se NavePark}} Incluir subseção de consolidação pré-indução (picking cart → PTW → Order Start).

[nivel 2] "Estrutura Física"
  conteudo: Descrever nichos (grandes/pequenos), dimensões e paredes de conformes/inconformes
  conforme confirmado com a operação. Referência Flower: 50 nichos/parede. NavePark: 30 nichos.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE sempre: RN-01, RN-02, RN-03, RN-04, RN-05.
  RN-06 se houver paredes conformes/inconformes.
  RN-07 se NavePark.

[nivel 2] "Integração e Destino Pós-Fechamento"
  conteudo: Após o fechamento do nicho, a integração WMS determina se o volume segue à
  conferência ou direto ao packing. Cruzar com [[conferencia]] e [[packing]].

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; termos do DOSSIE relevantes ao escopo emitido.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[conferencia]], [[packing]], [[picking-cart]], [[order-start]], [[sorter]].
