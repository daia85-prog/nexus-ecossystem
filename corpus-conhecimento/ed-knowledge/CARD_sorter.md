# ED_CARD — sorter

**Tópico:** sorter · **Bloco:** expedicao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `st1 = yes` (se `no`/`tbd` → não emitir nada deste tópico)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{n_rampas_saida}}` | `st2` | texto | número de rampas de saída (ex.: "18") |
| `{{n_rampas_rejeito}}` | `st3` | texto | número de rampas de rejeito (ex.: "2") |
| `{{capacidade}}` | `st_cap` | texto | capacidade em volumes/hora (ex.: "6.000 vol/h") |
| `{{sla_hpd}}` | `st4` | texto | SLA portal → primeiro HPD em minutos/segundos |
| `{{faces_portal}}` | `st6` | texto | número de faces do leitor no portal (1 a 6) |
| `{{sinaleiro}}` | `st10` | select | `yes`=Sinaleiro (semáforo) nas rampas · `no`=Sem sinaleiro |
| `{{ia_integrada}}` | `st11` | select | `yes`=IA integrada ao sorter (câmera) · `no`=Sem IA |
| `{{qtd_tvs_ia}}` | `st11_tvs` | texto (se st11=yes) | quantidade de TVs para exibição da IA |
| `{{recirculacao}}` | `st_rc` | select | `yes`=Recirculação ativa · `no`=Sem recirculação |

## Condicionais (regra → ação)

- **`st10 = yes`** → incluir subseção "Sinaleiro nas Rampas" descrevendo o semáforo luminoso (amarelo = rampa cheia; integração com recirculação).
- **`st11 = yes`** → incluir subseção "IA Integrada ao Portal" com `{{qtd_tvs_ia}}` TVs; mencionar contingência IVT+DUN para volumes não lidos pela câmera.
- **`st_rc = yes`** → incluir subseção "Recirculação" (volumes voltam à esteira antes do rejeito; N voltas parametrizável, padrão 3); cruzar com [[sorter-rejeito]].
- **`st7 = yes`** → incluir cruzamento explícito com [[cross-check]] nas Regras de Negócio (validação de SKU/divergência de produto no desvio).
- **`autoBilling = false`** (campo do escopo do projeto) → incluir RN-02 (saída específica no mapa + "Container Completo" ao ERP).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Sorter — Classificação Automatizada"
  conteudo: visão geral do equipamento: {{n_rampas_saida}} rampas de saída,
            {{n_rampas_rejeito}} rampa(s) de rejeito, capacidade de {{capacidade}}.
            O Sorter lê o volume no portal ({{faces_portal}} face(s)), valida contra
            o mapa ativo e comanda o PLC para desviar à rampa de destino.
            Sub-tópicos: [[sorter-inducao]], [[sorter-mapa-rota]], [[sorter-rejeito]].

[nivel 2] "Arquitetura do Equipamento"
  conteudo: tabela com componentes (rampas de indução, portal de leitura
            com {{faces_portal}} faces, {{n_rampas_saida}} saídas/rampas,
            posições PTL nas saídas, PLC/servidor local).
            Comunicação equipamento ↔ servidor ↔ PLC em rede local (sem nuvem).

[nivel 2] "Fluxo do Processo"
  conteudo: 1. Indução (→ [[sorter-inducao]]).
            2. Leitura no portal + validação contra mapa ativo (→ [[sorter-mapa-rota]]).
            3. Desvio via PLC à rampa de destino.
            4. Alocação em PTL na saída (→ [[ptl-alocacao]]).
            5. autoBilling: envio de "Container Completo" ao ERP ao concluir todos os
               volumes do pedido.
  [tipo warning] (condicional: st_rc = yes) "Volumes com rampa cheia ou perda de
                tracking recirculam na esteira antes de ir ao rejeito (→ [[sorter-rejeito]])."

[nivel 2] "Sinaleiro nas Rampas"
  condicional: emitir apenas se st10 = yes
  conteudo: semáforo luminoso em cada rampa indica status de ocupação.
            Amarelo pulsante = rampa cheia (integrado com recirculação).

[nivel 2] "IA Integrada ao Portal"
  condicional: emitir apenas se st11 = yes
  conteudo: câmera de IA lê volumes sem código de barras legível.
            {{qtd_tvs_ia}} TV(s) para monitoramento em tempo real.
            Contingência: volumes não lidos pela IA recebem etiqueta IVT+DUN
            para reindução (ver [[sorter-rejeito]]).

[nivel 2] "Saídas Especiais"
  conteudo: Saída PIN (pedidos com aprovação/documentação adicional pendente).
            Rampas de rejeito: {{n_rampas_rejeito}} (ver [[sorter-rejeito]]).

[nivel 2] "Contingências Operacionais"
  conteudo: 1. Desconsiderar checagem de peso (por SKU/RG/todos): WCS valida
               só a leitura, mas guarda o peso para consulta.
            2. Destino manual (override de rampa): irreversível após acionado;
               exige log de usuário/data; volume marcado como "manual".
  [tipo warning] "Override de destino manual é irreversível. Registrar log
                 com usuário e data de ativação."

[nivel 2] "Cancelamento de Volumes nas Saídas"
  conteudo: tela para excluir volumes esperados (avaria, falha de leitura,
            divergência de peso). Item devolvido ao estoque. Sem integração SAP.

[nivel 2] "Agrupamento para Expedição"
  conteudo: o primeiro volume do pedido define a posição PTL; os demais são
            direcionados automaticamente. O WCS não valida a posição informada
            (responsabilidade do cliente). SLA portal → primeiro HPD: {{sla_hpd}}.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
    RN-01: desvio conforme mapa ativo; volume deve estar integrado no WCS.
    RN-02: autoBilling → "Container Completo" + quantidade ao ERP ao concluir pedido.
    RN-03: Saída PIN para pedidos com aprovação/documentação pendente.
    RN-04: cadenciamento de desvios para mesmo SKU em múltiplas rampas.
    RN-05: contingência de peso — ignora checagem, mas guarda peso.
    RN-06: contingência de destino — override irreversível, log obrigatório,
            volume marcado "manual".
    RN-07: cancelamento de volume devolve ao estoque sem integração SAP.
    RN-08: agrupamento — primeiro volume define posição; WCS não valida posição.
    RN-09: comunicação PLC em rede local (sem internet/nuvem).
    RN-10: mapa aceita ROTAS (fracionado) e LOJAS (fullcase).
    [condicional: st7 = yes] RN-XX: cross-check de SKU ativo — divergência entre
            SKU lido e esperado gera rejeito com motivo "Produto Incorreto"
            (ver [[cross-check]]).
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[sorter-inducao]], [[sorter-mapa-rota]], [[sorter-rejeito]], [[ptl-alocacao]], [[cross-check]] (se `st7 = yes`).
