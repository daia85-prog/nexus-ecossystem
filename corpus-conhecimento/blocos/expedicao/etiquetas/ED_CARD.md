# ED_CARD — etiquetas

**Tópico:** etiquetas · **Bloco:** expedicao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `et_r = wcs` (capítulo completo); `et_r = wms_only` → capítulo enxuto

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{resp_etiqueta}}` | `et_r` | select | `wcs`=WCS responsável pelas etiquetas · `wms_only`=Cliente/WMS responsável |
| `{{total_impressoras}}` | `et1` | texto | *(total de impressoras no CD)* |
| `{{dist_impressoras}}` | `et_dist` | texto | *(distribuição das impressoras, ex: "2 no PBL, 1 no Packing, 1 no OS")* |

## Condicionais (regra → ação)

- **`et_r = wcs`** → Emitir capítulo completo com todos os sub-capítulos descritos no esqueleto abaixo.
- **`et_r = wms_only`** → Emitir somente o capítulo enxuto "Etiquetas de responsabilidade do cliente" (sem detalhamento técnico de layout, impressoras, reimpressão, leitura no sorter). Suprimir todos os demais sub-capítulos.
- **`et1` preenchido** → Registrar "{{total_impressoras}} impressoras no CD" na visão geral (somente se `et_r = wcs`).
- **`et_dist` preenchido** → Descrever distribuição "{{dist_impressoras}}" na seção de Infraestrutura de Impressão (somente se `et_r = wcs`).

## Esqueleto de Capítulos (emitir nesta ordem)

```
─── RAMO A: et_r = wcs (capítulo completo) ───────────────────────────────────

[nivel 1] "Etiquetas"
  conteudo: visão geral — o WCS imprime as etiquetas de volume (picking, full case, expedição)
            geradas a partir da cubagem; {{total_impressoras}} impressoras no CD distribuídas
            em {{dist_impressoras}}; etiqueta de produção (do produto) é responsabilidade do
            cliente salvo exceção contratual.

[nivel 2] "Numeração e Layout"
  conteudo: numeração do volume = pedido + volume, formato X/Y (ex.: 0001/0003); etiqueta
            final de expedição impressa na conferência/packing em layout padrão ou especial
            (a especial acrescenta item, lote, nome, quantidade); sequencial fixo por tipo
            de caixa permite reuso das etiquetas do Picking Cart/Coletor.

[nivel 2] "Infraestrutura de Impressão"
  conteudo: {{total_impressoras}} impressoras no CD; distribuição: {{dist_impressoras}};
            comunicação por ZPL/TCP-IP; especificação mínima para etiquetas no sorter:
            Code128 (0,38mm × 21mm mín.), DataMatrix (1mm), ANSI A/B.

[nivel 2] "Fluxo de Impressão"
  conteudo: (1) cubagem define o número de volumes e dispara impressão (1 etiqueta/volume);
            (2) operador fixa a etiqueta na caixa e induz na linha;
            (3) conferência/packing imprime etiqueta final de expedição;
            (4) etiqueta lida no portal do sorter (prioridade por nº de caracteres:
                10 → 22 → 18) e no PTL para alocação.

[nivel 2] "Reimpressão de Etiquetas"
  conteudo: acesso restrito a perfil de liderança (supervisor/coordenador/gerente) com
            autenticação por login/senha; filtros por pedido, código do volume e data;
            registra usuário e motivo; bloqueio a partir da 2ª via com mensagem de orientação.

[nivel 2] "Etiqueta de Produção (DataMatrix)"
  conteudo: responsabilidade do cliente; códigos identificadores — Material (90), Lote (10),
            Quantidade (30, não usado), UC (92, enviado ao WMS); WCS filtra e busca produto+lote.

[nivel 2] "Romaneio"  ← incluir somente se [[paletizacao]].pt9 = yes
  conteudo: tela de Impressão de Romaneio — após todos os volumes do romaneio finalizados,
            imprime a nível de pedido indicando em quais pallets/gaiolas cada volume está alocado.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]; RN-01 a RN-09 do DOSSIE filtradas pelas condicionais.

[nivel 2] "Integrações"
  [tipo tabela] headers ["Sistema","Tipo","Descrição"]; tabela do DOSSIE.

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; tabela do DOSSIE.

─── RAMO B: et_r = wms_only (capítulo enxuto) ────────────────────────────────

[nivel 1] "Etiquetas"
  [nivel 2] "Etiquetas de responsabilidade do cliente"
    conteudo: as etiquetas de volume e expedição são geradas e gerenciadas pelo cliente/WMS;
              o WCS não realiza impressão, reimpressão nem controle de layout de etiquetas
              neste projeto; leitura das etiquetas no sorter e PTL permanece funcional
              (o WCS consome, não produz).
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[cubagem]] (origem das etiquetas de volume) · [[paletizacao]] (etiqueta master/RG, romaneio) · [[sorter-mapa-rota]] (leitura no portal) · [[ptl-alocacao]] (leitura na alocação PTL) · [[ptm]] (cadastro de impressoras).
