# ED_CARD — ptl-alocacao

**Tópico:** ptl-alocacao · **Bloco:** expedicao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `pt_tem_ptl = yes` (displays PTL ativos)

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.
> Este tópico é sub-capítulo de [[paletizacao]] — emitir somente quando `pt1 = ptl_opt`.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{tipo_display}}` | `pt_tipo_disp` | select | `ptl_hw`=PTL (displays físicos com LED por posição) · `tablet_ptl`=Tablet |
| `{{tvs_ptl}}` | `pt_tvs_ptl` | texto | *(quantidade de TVs/displays PTL instalados)* |
| `{{criterio_agrup}}` | `pt_ag` | texto | *(critério de agrupamento, ex: romaneio, subárea, rota/transportadora)* |
| `{{itens_perigosos}}` | `pt8` | select | `yes`=Itens perigosos · `no`=Sem itens perigosos |
| `{{romaneio}}` | `pt9` | select | `yes`=Gera romaneio · `no`=Sem romaneio |

## Condicionais (regra → ação)

- **`pt_tipo_disp = ptl_hw`** → Descrever fluxo com display físico LED por posição: LED acende ao ler o volume, confirmação por botão, LED laranja sinaliza fechamento.
- **`pt_tipo_disp = tablet_ptl`** → Descrever fluxo com tablet substituindo o display físico; adaptar descrição de confirmação para toque em tela.
- **`pt_tvs_ptl` preenchido** → Registrar "{{tvs_ptl}} displays PTL instalados" na visão geral e em Infraestrutura.
- **`pt_ag` preenchido** → Aplicar "{{criterio_agrup}}" como critério de vinculação posição ↔ pedido; se `pt_ag` incluir "subárea" → incluir nota sobre agrupamento por subárea quando transportadora ≠ "Própria".
- **`pt8 = yes`** → Incluir seção "Pallet de Itens Perigosos": pallet exclusivo segregado, programado para ser o último a carregar.
- **`pt9 = yes`** → Incluir menção ao romaneio no fechamento; remeter a [[etiquetas]] (Tela de Impressão de Romaneio).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "PTL — Put To Light"
  conteudo: visão geral — alocação de volumes em posições de pallet guiada por {{tipo_display}};
            gestão dinâmica das posições (iniciam vazias, vinculadas a 1 pedido por vez);
            {{tvs_ptl}} displays instalados; agrupamento por {{criterio_agrup}}.

[nivel 2] "Abertura e Vinculação de Posições"
  conteudo: integração da onda → WCS abre e vincula posição ao pedido automaticamente;
            critério de prioridade; empate resolvido por FIFO; reserva antecipada da posição
            antes do volume chegar à rampa (sequência de entrega).

[nivel 2] "Fluxo de Alocação"
  conteudo: (1) login na rampa obrigatório (rastreabilidade por operador);
            (2) operador lê QR Code do volume → display da posição acende ({{tipo_display}});
            (3) operador deposita o volume e confirma (botão / toque no tablet);
            (4) WCS registra quantidade conferida.
  [condicional: pt_tipo_disp=ptl_hw] → detalhar LED por posição e confirmação por botão.
  [condicional: pt_tipo_disp=tablet_ptl] → detalhar confirmação por toque no tablet.

[nivel 2] "Fechamento de Posição PTL"
  conteudo: automático ao alocar o último volume (LED laranja); manual forçado pelo operador;
            leitura da etiqueta master → posição volta a livre → WCS envia integração de
            expedição ao WMS para faturamento.
  [condicional: pt9=yes] → após fechamento, impressão de romaneio; ver [[etiquetas]].

[nivel 2] "Pallet de Itens Perigosos"  ← emitir somente se pt8 = yes
  conteudo: volumes com flag "perigoso" alocados em pallet exclusivo segregado;
            pallet programado para ser o último a carregar; requer tratamento especial.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]; RN-01 a RN-11 do DOSSIE filtradas pelas condicionais
  (suprimir RN-07 se projeto não for Octopus; suprimir RN-08/09/10/11 se não aplicáveis ao cliente).

[nivel 2] "Integrações"
  [tipo tabela] headers ["Sistema","Tipo","Descrição"]; tabela do DOSSIE.

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; tabela do DOSSIE.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Parte de: [[paletizacao]] (pt1=ptl_opt).
- Cruza com: [[etiquetas]] (etiqueta master, romaneio) · [[sorter-mapa-rota]] (desvio às rampas PTL) · [[integracao-pedidos]] (abertura de posições).
