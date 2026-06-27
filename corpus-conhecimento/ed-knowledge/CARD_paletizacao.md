# ED_CARD — paletizacao

**Tópico:** paletizacao · **Bloco:** expedicao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `pt_gate = yes`

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{tipo_saida}}` | `pt1` | select | `no_pal`=Sem paletização · `ptl_opt`=PTL · `ptm_opt`=PTM · `aloca_opt`=Aloca Pallet |
| `{{posicoes_pallet}}` | `pt3` | texto | *(número de posições de pallet na área de expedição)* |
| `{{fragil_ativo}}` | `pt_frag` | select | `yes`=Matriz de fragilidade ativa · `no`=Sem restrição de fragilidade |
| `{{criterio_agrup}}` | `pt_ag` | texto | *(critério de agrupamento de volumes no pallet, ex: rota, transportadora, romaneio)* |
| `{{itens_perigosos}}` | `pt8` | select | `yes`=Itens perigosos (químicos/inflamáveis) · `no`=Sem itens perigosos |
| `{{romaneio}}` | `pt9` | select | `yes`=Gera romaneio · `no`=Sem romaneio |

## Condicionais (regra → ação)

- **`pt1 = no_pal`** → Gate não atendido; suprimir capítulo de paletização inteiramente.
- **`pt1 = ptl_opt`** → Incluir capítulo "Alocação PTL" + referenciar sub-tópico [[ptl-alocacao]].
- **`pt1 = ptm_opt`** → Incluir capítulo "Put-To-Monitor (PTM)" + referenciar sub-tópico [[ptm]].
- **`pt1 = aloca_opt`** → Descrever fluxo de Aloca Pallet via coletor Android / TV da rampa sem PTL nem PTM.
- **`pt_frag = yes`** → Incluir seção "Matriz de Fragilidade": pesados embaixo, frágeis em cima; referenciar regras de sequência de empilhamento.
- **`pt8 = yes`** → Incluir seção "Itens Perigosos": pallet exclusivo segregado, programado para ser o último a carregar; requer tratamento especial (químicos, inflamáveis).
- **`pt9 = yes`** → Incluir seção "Romaneio": impressão da lista de conteúdo do pallet após fechamento; referenciar [[etiquetas]] (Tela de Impressão de Romaneio).
- **`pt3` preenchido** → Incluir informação de capacidade ("{{posicoes_pallet}} posições de pallet na área de expedição") na visão geral.
- **`pt_ag` preenchido** → Aplicar critério "{{criterio_agrup}}" nas regras de agrupamento de volumes.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Paletização"
  conteudo: visão geral do processo — agrupamento de volumes em pallets por {{criterio_agrup}};
            o WCS controla cubagem (m³) e peso (kg); {{posicoes_pallet}} posições na expedição.

[nivel 2] "Cubagem de Pallet"
  conteudo: cadastro dos limites máximos e de segurança (m³ e kg); cálculo em tempo real com
            dimensões/peso vindos do sorter ou do Cadastro de Produtos; notificação LED/coletor
            ao atingir segurança; bloqueio de novas alocações ao atingir o limite.

[nivel 2] "Aloca Pallet"
  conteudo: agrupamento por {{criterio_agrup}}; guiado por {{tipo_saida}} (coletor Android /
            TV da rampa / LED PTL / monitor PTM); desvio no sorter não obrigatório desde que
            volumes estejam integrados.
  [condicional: pt1=ptl_opt] → incluir sub-seção remetendo a [[ptl-alocacao]].
  [condicional: pt1=ptm_opt] → incluir sub-seção remetendo a [[ptm]].

[nivel 2] "Fechamento de Pallet"
  conteudo: três modos — Automático (cubagem/peso atinge limite), Lógico (fim de volumes
            previstos para rota/cliente), Manual (leitura do código de posição 3 vezes + etiqueta
            master/RG); ao fechar: WCS envia integração "Pallet Montado" ao WMS e libera posição.

[nivel 2] "Matriz de Fragilidade"  ← emitir somente se pt_frag = yes
  conteudo: regra de empilhamento — itens pesados embaixo, frágeis em cima; sequência de
            alocação controlada pelo WCS.

[nivel 2] "Itens Perigosos"  ← emitir somente se pt8 = yes
  conteudo: volumes perigosos (químicos, inflamáveis) alocados em pallet exclusivo segregado;
            pallet programado para ser o último a carregar; requer tratamento especial.

[nivel 2] "Romaneio"  ← emitir somente se pt9 = yes
  conteudo: impressão da lista de conteúdo do pallet após fechamento; ver [[etiquetas]] para
            detalhes da tela de impressão.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]; RN-01 a RN-10 do DOSSIE filtradas pelas condicionais
  (suprimir RN-09 se pt1 ≠ aloca_opt/ptl_opt; suprimir RN-10 se projeto ≠ CDSK).

[nivel 2] "Integrações"
  [tipo tabela] headers ["Sistema","Tipo","Descrição"]; tabela do DOSSIE.

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; tabela do DOSSIE.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Sub-tópicos condicionais: [[ptl-alocacao]] (pt1=ptl_opt) · [[ptm]] (pt1=ptm_opt).
- Cruza com: [[etiquetas]] (romaneio, etiqueta master) · [[sorter-mapa-rota]] (desvio de volumes).
