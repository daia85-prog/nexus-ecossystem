# ED_CARD — sorter-inducao

**Tópico:** sorter-inducao · **Bloco:** expedicao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `st1 = yes` (se `no`/`tbd` → não emitir nada deste tópico)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{estacoes_inducao}}` | `st5` | texto | tipo e número de estações de indução (ex.: "2 rampas de indução laterais") |
| `{{faces_portal}}` | `st6` | texto | número de faces do leitor no portal (ex.: "3 faces — superior e laterais") |
| `{{ia_integrada}}` | `st11` | select | `yes`=IA integrada (câmera de leitura) · `no`=Sem IA |
| `{{qtd_tvs_ia}}` | `st11_tvs` | texto (se st11=yes) | quantidade de TVs para monitoramento da IA |

## Condicionais (regra → ação)

- **`st11 = yes`** → incluir subseção "Leitura por IA (Câmera)" com `{{qtd_tvs_ia}}` TVs; detalhar o fluxo de contingência IVT+DUN para volumes não lidos; mencionar integração com [[sorter-rejeito]].
- **`st11 = no`** → portal funciona exclusivamente por scanner convencional (EAN/DUN-14); omitir subseção de IA.
- **Presença de fracionados** (escopo do projeto) → incluir RN sobre etiquetagem pelo operador no ponto de indução.
- **Presença de Full Case** (escopo do projeto) → incluir RN sobre etiqueta de origem e readequação se ilegível no portal (responsabilidade do cliente).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Indução no Sorter"
  conteudo: visão geral da etapa de indução — o volume entra na esteira via
            {{estacoes_inducao}}, é lido no portal de {{faces_portal}} e o WCS
            valida o destino para acionar o PLC (→ [[sorter]] para fluxo geral).
            Princípio fundamental: o volume deve estar integrado no WCS antes
            da leitura no portal.

[nivel 2] "Pré-requisito: Integração do Volume"
  conteudo: o volume só é processado corretamente se estiver integrado no
            WCS/Velox com as informações de destino. Sem integração, o portal
            gera NoRead ou Sem Rota (→ [[sorter-rejeito]]).
  [tipo warning] "Volumes não integrados no WCS antes da indução resultam em
                rejeito imediato. Garantir integração prévia via ERP/WMS."

[nivel 2] "Estações de Indução"
  conteudo: {{estacoes_inducao}}. Posicionamento do volume na esteira com
            etiqueta voltada para cima para leitura correta no portal.
            Indução unitária (1 volume por vez) quando aplicável ao projeto.

[nivel 2] "Portal de Leitura"
  conteudo: portal com {{faces_portal}} — captura código de barras EAN ou DUN-14.
            Em caixas com mais de um código, o código integrado no WCS é o
            validado. O WCS aciona o CLP conforme o mapa do sorter ativo
            (→ [[sorter-mapa-rota]]).

[nivel 2] "Leitura por IA (Câmera)"
  condicional: emitir apenas se st11 = yes
  conteudo: câmera de IA integrada ao portal lê volumes sem código de barras
            convencional legível. {{qtd_tvs_ia}} TV(s) para monitoramento em
            tempo real do operador.
            Fluxo de contingência: volumes não reconhecidos pela IA são
            direcionados ao rejeito e recebem etiqueta IVT+DUN para reindução
            (→ [[sorter-rejeito]]).

[nivel 2] "Tipos de Volume na Indução"
  conteudo: tabela com Fracionados (etiquetados pelo operador no ponto de
            indução) × Full Case (etiquetados na origem).
  [tipo warning] (Full Case) "Se a etiqueta de origem não contiver código
                legível no portal, é necessária readequação — responsabilidade
                do cliente."

[nivel 2] "Falhas de Leitura: NOREAD e MULTIREAD"
  conteudo: NoRead = nenhum código capturado (etiqueta ausente, danificada ou
            posicionada incorretamente). MultiRead = mais de um código visível
            à câmera. Ambos geram desvio para rejeito (→ [[sorter-rejeito]]).
            Contingência: impressão de etiqueta IVT+DUN na estação de rejeito.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
    RN-01: volume integrado no WCS é pré-requisito para leitura válida no portal.
    RN-02: etiqueta voltada para cima no ponto de indução.
    RN-03: portal captura EAN ou DUN-14; WCS valida e aciona CLP conforme mapa ativo.
    RN-04: caixas com múltiplos códigos — o integrado no WCS é o validado.
    RN-05: Full Case etiquetados na origem; readequação de etiqueta é responsabilidade
            do cliente se ilegível no portal.
    RN-06: contingência de leitura — volumes com falha recorrente recebem
            etiqueta IVT+DUN na área de rejeito.
    [condicional: st11 = yes] RN-07: IA de câmera lê volumes sem código legível;
            falha na leitura pela IA → etiqueta IVT+DUN + reindução.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[sorter]] (fluxo geral), [[sorter-mapa-rota]] (mapa ativo que guia o desvio), [[sorter-rejeito]] (tratativa de NoRead/MultiRead e contingência IVT+DUN).
