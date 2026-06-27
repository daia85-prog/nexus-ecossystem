# ED_CARD — cancelamento-pedidos

**Tópico:** cancelamento-pedidos · **Bloco:** separacao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `null` — **Trigger heurístico:** transversal — qualquer picking ativo (p1=yes OU ct1=yes OU fc1=yes)

> [REVISAR COBERTURA] Tópico AUTO-DETECTADO na Fase 2. Seções originais dispersas em vários RAWs (notadamente put-to-wall). Rastrear RAWs de origem antes de fechar a ES.

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| *(sem variáveis diretas)* | — | — | Processo transversal; parâmetros herdados de picking, sorter e integração WMS. |

## Condicionais (regra → ação)

- **`p1 = yes` OU `ct1 = yes` OU `fc1 = yes`** → emitir tópico completo com tabela de tratativa por estágio.
- **Sorter presente** → incluir estágio "Indução" (volumes induzidos desviados ao rejeito com motivo cancelamento); cruzar com [[sorter]].
- **PTL presente** → incluir estágio "Na rampa" (LEDs azuis sinalizando cancelamento) e estágio "Alocado" (só WMS trata); referenciar RN-08.
- **`ct1 = yes` (Picking Cart)** → incluir estágio "Após Order Start — Picking Cart": volumes em separação seguem à conferência ao fim da coleta; cruzar com [[picking-cart]].
- **Integração SAP/CATO presente** → incluir regra RN-06 (cancelamento de OT só em status Pendente); cruzar com integracao-wms-erp.
- **Cancelamento granular confirmado** → incluir subseção "Gestão de Volumes" (cancelar volumes específicos sem cancelar o pedido inteiro; RETORNO AO PICKING); referenciar RN — NavePark.
- **Coletas parciais** → incluir nota sobre localização "ANÁLISE" (RN-03); itens já coletados bloqueiam novas coletas.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Cancelamento de Pedidos / Missão"
  conteudo: O cancelamento retira um volume/pedido/missão do fluxo. A tratativa depende do
  estágio em que o item se encontra — quanto mais avançado, mais restrito. Exige autorização
  de supervisão (senha). Em coletas parciais, itens já coletados vão à localização "ANÁLISE".

[nivel 2] "Tratativa por Estágio"
  [tipo tabela] headers ["Estágio","Tratativa"];
  linhas: Antes do Order Start / Disponível / Após Order Start (FlowRack) / Após Order Start
  (Cart, se ct1=yes) / Indução (se sorter) / Na rampa (se PTL) / Alocado (se PTL).
  Filtrar linhas pelas condicionais.

[nivel 2] "Devolução de Volumes Cancelados"
  conteudo: O WCS cria tarefa de devolução por volume. Operador lê volume → endereço → item.
  Não devolve ao Transfer — apenas a posições de picking (ou pulmão). A tarefa não finaliza
  sem posição disponível. Ao fim, integração informa a devolução ao WMS.

[nivel 2] "Cancelamento Granular de Volumes"  {{emitir apenas se confirmado na operação}}
  conteudo: Permite cancelar volumes específicos de um pedido sem cancelar o todo.
  Volumes cancelados viram "RETORNO AO PICKING" (estorno interno, sem NF de devolução).

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE filtradas pelas condicionais: RN-01, RN-02, RN-03, RN-04, RN-05 sempre;
  RN-06 se SAP/CATO; RN-07 se tabela compartilhada; RN-08 se PTL; RN-09 se BCP/PTLSP;
  RN-10 se sorter.

[nivel 2] "Telas Relacionadas"
  conteudo: Tela de Cancelamento (por pedido/missão — senha de supervisão; pop-up no PDV/coletor).
  Tela de Devolução de Volumes Cancelados (coletor — leitura sequencial volume → endereço → item).
  {{se granular}} Tela de Gestão de Volumes.

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; termos do DOSSIE relevantes ao escopo emitido.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md` (AUTO-DETECTADO — REVISAR contra RAWs de origem).
- Cruza com: [[shortpicking]], [[picking-pbl]], [[picking-cart]], [[picking-fullcase]], [[sorter]], [[put-to-wall]], [[order-start]].
