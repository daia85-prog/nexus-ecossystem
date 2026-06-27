# ED_CARD — reabastecimento

**Tópico:** reabastecimento · **Bloco:** estoque · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `es1 = yes`

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{reabasteceAuto}}` | `es2` | select yes/no | `yes`=Reabastecimento automático ativo · `no`=Somente manual |
| `{{reabasteceSorter}}` | `es3` | select yes/no | `yes`=Inbound direto ao picking via Sorter · `no`=Sem fluxo Sorter |
| `{{gestaoEstoquePicking}}` | `pk_es` | select | `wcs`=WCS gerencia estoque de picking · `wms_only`=WMS centraliza estoque de picking |

## Condicionais (regra → ação)

- **`es2 = yes`** → incluir seção "Geração Automática de Tarefas" (gatilhos: saldo abaixo do mínimo operacional, previsão de consumo de ondas liberadas).
- **`es2 = no`** → incluir somente seção "Reabastecimento Manual" (tela dedicada + manual preventivo por % mínima).
- **`es2 = yes` E `es2 = yes` (ambos)** → incluir ambas as seções (automático + manual).
- **`es3 = yes`** → incluir seção "Reabastecimento por Sorter (Inbound Direto)" — fluxo Transfer → Picking via linha de indução; registrar que o WCS aloca o produto na posição de picking após descida do Sorter.
- **`es3 = no`** → omitir seção Sorter.
- **`pk_es = wcs`** → o WCS emite tarefas de reabastecimento e executa via coletor Android; incluir subseção de execução no coletor (leitura origem → item → destino → confirmação de quantidade).
- **`pk_es = wms_only`** → o WMS é responsável pelas tarefas; o WCS apenas recebe confirmação; incluir nota de responsabilidade e referência a [[integracao-wcs-wms]].

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Reabastecimento"
  conteudo: visão geral do processo — mover produtos de Transfer ou Buffer/Pulmão para posições de picking,
            mantendo o estoque adequado para a separação. Citar responsabilidade (WCS ou WMS/cliente)
            conforme {{gestaoEstoquePicking}}.

[nivel 2] "Tipos de Movimentação"
  [tipo tabela] headers ["Movimentação","Quando","Observações"];
  linhas fixas: Transfer→Picking, Buffer/Pulmão→Picking, Transfer→Buffer.

[nivel 2] "Geração de Tarefas"
  [condicional es2=yes] subseção "Geração Automática"
    conteudo: gatilhos — saldo abaixo do mínimo operacional OU previsão de consumo de ondas liberadas.
  [condicional sempre] subseção "Geração Manual"
    conteudo: tela dedicada para demandas pontuais/emergenciais;
              manual preventivo (seleciona rua/nível + % mínima → WCS monitora → gera tarefas até nível máximo).

[nivel 2] "Execução no Coletor Android"
  [condicional pk_es=wcs]
    conteudo: operador inicia tarefa → lê posição de origem → lê item (SKU/codInterno) →
              lê posição de destino → confirma quantidade alocada.
    nota: endereço sugerido pelo WCS; operador pode escolher outro, com validação de elegibilidade
          + pop-up de confirmação (RN-06).
  [condicional pk_es=wms_only]
    conteudo: execução e controle sob responsabilidade do WMS/cliente; o WCS recebe confirmação.
              Ver [[integracao-wcs-wms]].

[nivel 2] "Reabastecimento por Sorter (Inbound Direto)"
  [condicional es3=yes]
    conteudo: produto desce do Sorter diretamente para a posição de picking sem movimentação manual;
              o WCS registra a alocação na posição ao receber confirmação do equipamento.
  [condicional es3=no] — omitir seção.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN filtradas do DOSSIE: RN-01, RN-02, RN-03, RN-04 (não mistura de lotes), RN-05 (segregação por empresa),
  RN-06 (validação de endereço alternativo), RN-07 (compatibilidade), RN-08 (Transfer→Buffer buffer mais próximo).
  [condicional pk_es=wms_only] incluir RN-10 (responsabilidade variável).
  [condicional pk_es=wcs] incluir RN-09 (worktype "PICK" — se aplicável ao projeto).

[nivel 2] "Telas e Funcionalidades"
  subseção "Tela de Reabastecimentos Pendentes (Coletor)"
    conteudo: exibe SKU/codInterno, lote, quantidade, endereço de destino; leitura sequencial;
              visualização de tarefas abertas e fechadas.
  [condicional es2=no ou es2=yes] subseção "Reabastecimento Manual Preventivo"
    conteudo: seleção de rua/nível + % mínima; WCS monitora e gera tarefas até nível máximo.

[nivel 2] "Integrações Relacionadas"
  conteudo: referências a [[integracao-wcs-wms]] (retorno de reabastecimento, Inbound Sync)
            e [[cadastros-acessos]] (cadastro de posições — mínimos/máximos/compatibilidade).
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[integracao-wcs-wms]] (Retorno Reabastecimento, Snap Shot), [[picking-pbl]] (mínimos operacionais por posição), [[sorter]] (se es3=yes), [[cadastros-acessos]] (posições e mínimos).
