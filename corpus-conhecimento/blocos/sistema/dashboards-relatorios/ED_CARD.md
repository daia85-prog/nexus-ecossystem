# ED_CARD — dashboards-relatorios

**Tópico:** dashboards-relatorios · **Bloco:** sistema · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `null` — catálogo opcional; incluir relatórios e dashboards conforme áreas em escopo do projeto.

> Card de geração: o ED não usa variáveis diretas de kickoff — o conteúdo varia pelo escopo de áreas ativas. Aplicar as condicionais abaixo para determinar quais seções emitir.

## Variáveis (kickoff → slots)

*Nenhuma variável direta de kickoff neste tópico. O conteúdo é derivado das áreas em escopo.*

## Condicionais (regra → ação)

- **Picking ativo no projeto** (qualquer modalidade: PTL, picking cart, coletor) → incluir relatórios de produtividade por estação/posto, por operador (login), por Picking Cart; incluir Dashboard de Shortpicking (atualização a cada 1 minuto).
- **Sorter ativo no projeto** → incluir Dashboard de Saídas do Sorter (esperados × tratados por saída/rampa); incluir Dashboard Rampa Cheia / Saturação (KPIs: eventos de rampa cheia, rampa crítica, tempo total bloqueado, eficiência, volumes impactados, previsão por rampa).
- **Estoque gerenciado pelo WCS** (`pk_es = wcs` ou `es1 = yes`) → incluir relatório de Controle de Estoque (foto em tempo real), níveis por posição, produtos por posição.
- **Curva ABC ativa** (`es7 = yes`) → incluir relatório de Curva ABC (classificação por giro); filtro por range de dias `{{curvaABCRange}}`.
- **Inventário ativo** (`es4 = yes`) → incluir relatório de Conciliação de Inventário (contagens × saldo sistêmico; divergência consolidada; operadores responsáveis); exportação Excel/PDF.
- **Conferência ativa no projeto** → incluir relatório de conferência (shortpicking/corte, anomalias, liberação manual com usuário).
- **Recall ativo** (`es5 = yes`) → incluir relatório de Recall (itens retirados por SKU/lote/container).
- **PTL / Chutes ativos** → incluir Painel de Chutes (volumes pendentes por chute, segmentados por matriz de fragilidade/cores).
- **Indução BK25 ativa** → incluir Dashboard Indução BK25 (paletes de maior urgência por cor: corte/onda/preparada/capacidade).
- **Devolução/cancelamento de volumes** → incluir Relatório de Pedidos Cancelados (volumes por pedido e localização na automação).
- **Sempre** → incluir relatório de Rastreabilidade (por RG do volume, por pedido, por carga; data/hora de cada ação); Backlog de Separação (ondas em processamento: Não Iniciado / Em Separação / Em Indução / Sorter / Alocado / % Conclusão); relatório de produção (integrados × separados × pendentes); Dashboard de Coleta (status por posto; LED não atendido → linha vermelha).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Dashboards e Relatórios"
  conteudo: visão geral — camada de visibilidade do WCS; agrega o que os demais processos geram
            em forma de indicadores de produtividade, rastreabilidade, estoque e exceções.
            Padrão: catálogo-base ajustado por cliente na implementação (RN-01);
            relatórios são exportáveis (Excel/PDF/CSV) e filtráveis por data/hora (RN-02);
            dashboards são de apoio, sem ações diretas (RN-03).

[nivel 2] "Dashboards (Tempo Real)"
  [condicional picking ativo] subseção "Dashboard de Coleta"
    conteudo: status por posto; LED não atendido no tempo → linha vermelha (anomalia); sem ações diretas.
  [condicional picking ativo] subseção "Dashboard de Shortpicking"
    conteudo: atualiza a cada 1 minuto; colunas: posto, endereço, caixa, produto, operador,
              quantidade solicitada × coletada; apoio operacional, sem interação (RN-03).
  [condicional sorter ativo] subseção "Dashboard de Saídas do Sorter"
    conteudo: valores esperados × tratados por saída/rampa; sem interação.
  [condicional sorter ativo] subseção "Dashboard Rampa Cheia / Saturação"
    conteudo: KPIs — eventos de rampa cheia, rampa crítica, tempo total bloqueado, eficiência,
              volumes impactados, previsão de volumes por rampa.
              Filtro por período histórico (RN-08).
  [condicional PTL/chutes ativos] subseção "Painel de Chutes"
    conteudo: volumes pendentes por chute, segmentados por matriz de fragilidade (cores).
  [condicional indução BK25 ativa] subseção "Dashboard Indução BK25"
    conteudo: paletes de maior urgência por cor (corte / onda / preparada / capacidade).

[nivel 2] "Relatórios de Produtividade"
  [condicional picking ativo]
    [tipo tabela] headers ["Relatório","Filtros Principais","Exportação"];
    linhas:
      Produtividade por Estação/Posto / período, posto / Excel, PDF, CSV;
      Produtividade por Operador (login) / período, operador / Excel, PDF, CSV;
      Produtividade por Picking Cart / período, cart / Excel, PDF, CSV.
  [condicional sorter ativo]
    linha: Produtividade por Rampa/Sorter / período, rampa / Excel, PDF, CSV.

[nivel 2] "Relatórios de Produção"
  [tipo tabela] headers ["Relatório","Descrição","Exportação"];
  linhas:
    Produção Geral / integrados × separados × pendentes; por tipo (controlados/não/full case) / Excel;
    Backlog de Separação / ondas em processamento: Não Iniciado / Em Separação / Em Indução /
      Sorter / Alocado / % Conclusão / Excel.

[nivel 2] "Relatórios de Rastreabilidade"
  [tipo tabela] headers ["Relatório","Filtros Principais","Exportação"];
  linhas:
    Rastreabilidade por Volume (RG) / RG do volume / Excel, PDF;
    Rastreabilidade por Pedido / num_pedido / Excel, PDF;
    Rastreabilidade por Carga / carga / Excel, PDF;
    Log de Leituras Erradas / período, posto / CSV;
    Operadores nos Postos / período, operador / Excel.
  campos comuns (RN-04): data/hora de cada ação (separação, conferência, erro).

[nivel 2] "Relatórios de Estoque"
  [condicional estoque gerenciado pelo WCS]
    [tipo tabela] headers ["Relatório","Descrição","Exportação"];
    linhas:
      Controle de Estoque / foto em tempo real por posição / Excel, CSV;
      Níveis por Posição / saldo atual por endereço / Excel;
      Produtos por Posição / mapa de alocação / Excel.
  [condicional es7=yes] linha: Curva ABC / classificação A/B/C por giro (últimos {{curvaABCRange}} dias) / Excel.

[nivel 2] "Relatórios de Inventário"
  [condicional es4=yes]
    [tipo tabela] headers ["Relatório","Descrição","Exportação"];
    linhas:
      Conciliação de Inventário / resultado por contagem; físico × sistêmico; divergência consolidada;
        operadores responsáveis / Excel, PDF;
      Relatório de Ajuste / delta (físico − sistêmico) enviado ao WMS / Excel.

[nivel 2] "Relatórios de Exceções"
  [tipo tabela] headers ["Relatório","Descrição","Exportação"];
  linhas:
    Shortpicking / cortes e itens não coletados / Excel, PDF;
    Anomalias por SKU/Posição / ocorrências de leitura e alocação / Excel;
    Read/NoRead (Sorter) / volumes não lidos na indução / CSV.
  [condicional conferência ativa] linha: Liberação Manual / pedidos liberados fora do fluxo + usuário responsável / Excel.
  [condicional es5=yes] linha: Recall / itens retirados por SKU/lote/container / Excel.

[nivel 2] "Relatório de Pedidos Cancelados"
  [condicional devolução/cancelamento ativo]
    conteudo: operador informa o código do pedido; sistema lista todos os volumes associados
              e em qual local da automação cada um está alocado.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE: RN-01 a RN-08 (todas).

[nivel 2] "Padrão de Exportação"
  conteudo: todos os relatórios devem suportar exportação em Excel e PDF (mínimo obrigatório — RN-02);
            relatórios de alto volume (log, estoque) suportam também CSV;
            filtros mínimos obrigatórios: data início / data fim.
            Campos de auditoria presentes em todos os relatórios: data/hora da ação, operador responsável.

[nivel 2] "Integrações Relacionadas"
  conteudo: [[picking-pbl]] (produtividade por estação/posto);
            [[sorter]] (saturação de rampa, saídas do sorter);
            [[inventario]] (relatório de conciliação — es4=yes);
            [[conferencia]] (shortpicking, liberação manual);
            [[reabastecimento]] e [[integracao-wcs-wms]] (eventos de estoque para relatório de Controle).
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[picking-pbl]] (produtividade por posto/operador), [[sorter]] (dashboards de rampa e sorter), [[inventario]] (conciliação — es4=yes, Curva ABC — es7=yes), [[conferencia]] (shortpicking, anomalias), [[reabastecimento]] (eventos de movimentação nos relatórios de estoque), [[cadastros-acessos]] (rastreabilidade por e-mail SSO do operador).
