# ED_CARD — conferencia-manual

**Tópico:** conferencia-manual · **Bloco:** conferencia · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `null` — **Trigger heurístico:** `cf_t2` contém `conf_sample` (Amostragem/Sorteio de Qualidade) → auditoria por exceção; ou desvio por balança dinâmica ativo

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| *(sem variáveis diretas)* | — | — | Sub-processo da conferência; parâmetros herdados de [[conferencia]] (cf_t1, cf_t2) e da operação. |

## Condicionais (regra → ação)

- **`cf_t2` contém `conf_sample`** → emitir subseção "Sorteio de Qualidade": seleção por amostragem de volumes para conferência manual de auditoria; referenciar RN-02.
- **Balança dinâmica presente** → emitir subseção "Desvio por Divergência de Peso": volumes com peso fora da tolerância são desviados à estação manual; incluir parâmetros de peso unitário SKU, tara de caixa e tolerância configurável.
- **`cf_t1` contém `conf_blind`** → confirmar que o processo adota Conferência Cega (Blind Check — sem exibição de quantidades esperadas); referenciar RN-03.
- **Supervisor obrigatório para corte** → incluir subseção de autenticação de supervisor (senha/crachá) para efetivar o corte; referenciar RN-06; cruzar com [[shortpicking]] (Auditoria de Corte).
- **ERP D365 F&O presente** → incluir subseção "Impressão de Laudos": automática por volume, baseada no acompanhamento de laudo indicado pelo ERP; referenciar RN-01.
- **Clientes Especiais (KIT SKU) confirmados** → incluir subseção completa do fluxo de Kit SKU (campo `especial`=TRUE, etiqueta layout Spark, bipagem obrigatória do saquinho); referenciar RN-09 a RN-12.
- **`conf_sample` ausente E balança ausente** → emitir WARNING: *"Conferência manual não possui gatilho de desvio configurado — confirmar com a operação."*

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Conferência Manual"
  conteudo: A conferência manual valida a integridade dos volumes antes do encaminhamento ao
  packing. Recebe exclusivamente volumes desviados pela balança dinâmica (divergência de peso)
  ou selecionados pelo Sorteio de Qualidade (auditoria). O processo é baseado em Conferência
  Cega (Blind Check): sem exibição de quantidades esperadas — todos os produtos devem ser bipados.

[nivel 2] "Gatilhos de Desvio"
  [tipo tabela] headers ["Motivo","Descrição"];
  linhas: Divergência de Peso (se balança) / Auditoria de Qualidade / Sorteio de Qualidade
  (se conf_sample) / Shortpicking (cruzar com [[shortpicking]]).

[nivel 2] "Fluxo do Processo"
  conteudo: 1. Operador lê o LPN; sistema exibe motivo do desvio. 2. Conferência cega item a item.
  3. Tratamento de sobra (retirar excedente) e falta (Completar / Cortar / Coletar em novo volume).
  4. Corte aprovado com autenticação de supervisor → WCS registra e envia ao WMS.
  5. Impressão automática de laudos (se D365 F&O). 6. Volume segue ao packing.

[nivel 2] "Sorteio de Qualidade (Amostragem)"  {{emitir apenas se conf_sample}}
  conteudo: Seleção por amostragem de volumes para conferência manual de auditoria.
  O sistema seleciona automaticamente os volumes conforme o percentual configurado.

[nivel 2] "Impressão Automática de Laudos"  {{emitir apenas se D365 F&O presente}}
  conteudo: Ao término da checagem do item/volume, o sistema imprime automaticamente os laudos
  na impressora vinculada à estação, por volume (caixa), conforme os lotes. Sem ação manual
  do operador. Obrigatória para os volumes indicados pelo ERP D365 F&O.

[nivel 2] "Fluxo — Clientes Especiais (KIT SKU)"  {{emitir apenas se KIT SKU confirmado}}
  conteudo: Pedido identificado pelo campo `especial`=TRUE na integração. Conferência cega.
  Ao atingir a quantidade total exata do SKU, imprime a etiqueta do kit (layout Spark).
  Operador deve bipar obrigatoriamente a etiqueta colada no saquinho. Corte via INT-08.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE filtradas pelas condicionais: RN-02, RN-03, RN-04, RN-05, RN-06, RN-07,
  RN-08 sempre; RN-01 se D365 F&O; RN-09 a RN-12 se KIT SKU.

[nivel 2] "Parâmetros de Peso"
  conteudo: O WCS é alimentado com: peso unitário do SKU (gramas); peso das caixas (tara) por
  modelo; tolerância de peso configurável (gramas ou percentual).

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; termos do DOSSIE relevantes ao escopo emitido.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[conferencia]], [[shortpicking]], [[packing]], [[sorter]].
