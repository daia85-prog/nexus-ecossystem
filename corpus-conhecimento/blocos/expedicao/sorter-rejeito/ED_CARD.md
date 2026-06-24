# ED_CARD — sorter-rejeito

**Tópico:** sorter-rejeito · **Bloco:** expedicao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `st1 = yes` (se `no`/`tbd` → não emitir nada deste tópico)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{n_rampas_rejeito}}` | `st3` | texto | número de rampas de rejeito (ex.: "1", "2") |
| `{{sinaleiro}}` | `st10` | select | `yes`=Sinaleiro (semáforo) nas rampas · `no`=Sem sinaleiro |
| `{{recirculacao}}` | `st_rc` | select | `yes`=Recirculação ativa · `no`=Sem recirculação |

## Condicionais (regra → ação)

- **`st10 = yes`** → incluir subseção "Sinaleiro nas Rampas" com comportamento de sinaleiro: amarelo pulsante = rampa cheia (integrado ao fluxo de recirculação quando `st_rc = yes`).
- **`st10 = no`** → omitir subseção de sinaleiro; manter apenas a lógica de rejeito por rampa cheia sem sinalização visual automatizada.
- **`st_rc = yes`** → incluir subseção "Recirculação" com número parametrizável de voltas (padrão 3) antes do rejeito definitivo; detalhar integração com rampa cheia e perda de tracking.
- **`st_rc = no`** → volumes com rampa cheia ou perda de tracking vão diretamente ao rejeito (sem recirculação); incluir warning sobre necessidade de monitoramento ativo das rampas.
- **`st11 = yes`** (herdado do sorter) → incluir motivo de rejeito "Falha de IA" e contingência IVT+DUN na tabela de motivos.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Rejeito no Sorter"
  conteudo: a rampa de rejeito ({{n_rampas_rejeito}} rampa(s)) é o ponto de
            auditagem e tratativa de volumes que não puderam ser desviados.
            O rejeito não encerra o ciclo do volume — é uma etapa de recuperação
            com reindução ou condução manual à rampa de destino.

[nivel 2] "Motivos de Rejeito"
  [tipo tabela] headers ["Motivo","Causa","Tratativa"];
    NoRead: câmera não lê o código ou caixa sem etiqueta →
            corrigir/adicionar etiqueta e reinduzir antes do portal.
    MultiRead: mais de um código visível à câmera →
               remover código extra e reinduzir.
    Sem Rota: código lido mas WCS não acha destino na base →
              tratar/cadastrar a rota e reinduzir (→ [[sorter-mapa-rota]]).
    Sem Mapa: rota existe mas sem rampa vinculada no mapa →
              vincular a rota à rampa e reinduzir (→ [[sorter-mapa-rota]]).
    Rampa Cheia: sensor de acúmulo acionado na rampa de destino →
                 recircula (se st_rc = yes) até o limite; depois rejeito.
    Cancelamento: OS cancelada pelo WMS →
                  tratar; NÃO retorna ao sorter.
    Perda de Tracking: PLC perde referência física do volume →
                       recircula/rejeito; reinduzir quando aplicável.
    Produto Incorreto / SKU Divergente: SKU lido ≠ esperado para a nota →
                       operador bipa ambos os códigos; WCS ignora double check
                       na reindução (→ [[cross-check]] se st7 = yes).
    [condicional: st11 = yes] Falha de IA: câmera não reconhece o volume →
                       etiqueta IVT+DUN impressa; sorter tria pelo DUN.

[nivel 2] "Recirculação"
  condicional: emitir apenas se st_rc = yes
  conteudo: volumes com rampa cheia ou perda de tracking voltam a circular
            na esteira sem reindução antes do portal. Número de voltas
            parametrizável (padrão: 3). Esgotado o limite, o volume é
            enviado à rampa de rejeito para tratativa.
  [tipo warning] "Limite de recirculação (NoRead contínuo) deve ser configurado
                para evitar looping indefinido na esteira."

[nivel 2] "Sinaleiro nas Rampas"
  condicional: emitir apenas se st10 = yes
  conteudo: semáforo luminoso em cada rampa indica o status de ocupação.
            Amarelo pulsante = rampa cheia (acionado simultaneamente ao
            início da recirculação, quando st_rc = yes).
            Sinaleiro orienta o operador a liberar a rampa antes de novos
            desvios serem tentados.

[nivel 2] "Fluxo de Tratativa na Estação de Rejeito"
  conteudo: 1. WCS/PLC classifica o motivo do rejeito.
            2. [se st_rc = yes] Recirculação: volta à esteira até N voltas.
            3. Esgotado o limite (ou motivo não recirculável): volume à
               rampa de rejeito ({{n_rampas_rejeito}} rampa(s)).
            4. Operador consulta o motivo na tela de rejeito (desktop +
               leitor de código de barras + impressora).
            5. Recuperação:
               (a) Reinduzir o volume antes do portal, ou
               (b) Levar à rampa de destino + ler no scanner fixo
                   → status "Na Rampa" + atualização de dashboard/integração.
  [tipo warning] "Volumes de OS cancelada (motivo Cancelamento) NÃO devem
                retornar ao sorter. Encaminhar para tratativa fora do fluxo."

[nivel 2] "Contingência IVT+DUN"
  condicional: emitir apenas se st11 = yes (herdado do sorter)
  conteudo: caixas com falha de triagem pela IA recebem etiqueta composta
            "IVT + DUN" impressa pelo WMS na estação de rejeito.
            Ao reinduzir, o sorter ignora os demais códigos e tria
            exclusivamente pelo DUN impresso na etiqueta IVT.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
    RN-01: rampa de rejeito é ponto de auditagem e tratativa, não fim de ciclo.
    RN-02: [se st_rc = yes] rampa cheia/perda de tracking → recirculação sem
           reindução por N voltas (parametrizável, padrão 3); depois, rejeito.
    RN-03: cliente pode definir limite de NoReads/recirculações para evitar
           looping; atingido, vai ao rejeito.
    RN-04: cancelamento — volume de OS cancelada vai ao rejeito e NÃO retorna
           ao sorter.
    RN-05: volume sem check-out de peso vai ao rejeito para coleta de peso
           (salvo Contingência ativa no [[sorter]]).
    RN-06: SKU Divergente — operador bipa ambos os códigos; estando correto,
           WCS ignora double check na reindução.
    RN-07: após correção e releitura, status muda para "Na Rampa" e operador
           é informado da rampa de destino.
    RN-08: tratativa pode ser reindução antes do portal ou condução à rampa
           + leitura no scanner fixo (ambos atualizam dashboard/integração).
    RN-09: [se st11 = yes] contingência IVT+DUN — etiqueta impressa pelo WMS;
           sorter tria pelo DUN; demais códigos ignorados.
    RN-10: WCS registra e armazena todos os motivos de rejeito para auditoria.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[sorter]] (fluxo geral e contingências de peso/destino), [[sorter-inducao]] (NoRead/MultiRead na leitura do portal e contingência IVT+DUN), [[sorter-mapa-rota]] (motivos "SEM ROTA" e "SEM MAPA"), [[cross-check]] (motivo "Produto Incorreto/SKU Divergente", se `st7 = yes`).
