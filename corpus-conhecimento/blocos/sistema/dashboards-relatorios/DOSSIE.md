# dashboards-relatorios — Dossiê Técnico

**Bloco:** sistema | **Tópico:** dashboards-relatorios
**Seções analisadas:** 480 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

Este tópico cataloga os **relatórios** (consultas estáticas/históricas, exportáveis) e os **dashboards** (painéis em tempo real, de apoio operacional) do WCS. É um tópico de **camada de visibilidade**: agrega o que os demais processos geram em forma de indicadores de produtividade, rastreabilidade, estoque e exceções.

Um padrão recorrente: "as telas de relatório serão **discutidas e alinhadas na implementação**" — ou seja, o WCS oferece um conjunto-base e os campos finais são definidos por cliente. Quase todos os relatórios são **exportáveis (Excel/PDF/CSV)** e **filtráveis por data/hora**.

## Categorias de Relatórios

| Categoria | Exemplos |
|-----------|----------|
| **Produtividade** | por estação/posto, por operador (login), por Picking Cart, por rampa, por sorter, por balança, por portal de leitura, por período. |
| **Rastreabilidade** | por RG do volume, por pedido, por carga; logs de leituras erradas; operadores nos postos; data/hora de cada ação. |
| **Estoque** | Controle de Estoque (foto em tempo real), níveis por posição, **Curva ABC**, produtos por posição. |
| **Exceções** | rejeito, Read/NoRead, shortpicking/corte, anomalias. |
| **Produção** | integrados × separados × pendentes; por tipo (controlados/não/full case); pallets de expedição por onda/pedido. |

## Dashboards (tempo real)

| Dashboard | Função |
|-----------|--------|
| **Dashboard de Shortpicking** | Atualiza a cada minuto; mostra posto, endereço, caixa, produto, operador, qtd solicitada × coletada; **apoio, sem interação**. |
| **Dashboard de Saídas do Sorter** | Valores esperados × tratados por saída/rampa. |
| **Dashboard Rampa Cheia / Saturação** | KPIs de eventos de rampa cheia, rampa crítica, tempo total bloqueado, eficiência, volumes impactados; previsão de volumes por rampa. |
| **Painel de Chutes** | Volumes pendentes por chute, segmentados por matriz de fragilidade (cores). |
| **Dashboard de Coleta** | Status por posto; LED não atendido no tempo → linha **vermelha** (anomalia). |
| **Relatório de Backlog de Separação** | Ondas em processamento: Não Iniciado / Em Separação / Em Indução / Sorter / Alocado / % Conclusão. |
| **Dashboard Indução BK25** | Paletes de maior urgência por cor (corte/onda/preparada/capacidade). |

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O conjunto de relatórios é um **catálogo-base** ajustado por cliente na implementação. |
| RN-02 | Relatórios são **exportáveis** (Excel/PDF/CSV) e **filtráveis por data/hora** (e por RG/pedido/carga/nota/setor conforme o caso). |
| RN-03 | **Dashboards são de apoio**, sem ações diretas (não interativos) — o de shortpicking atualiza a cada minuto. |
| RN-04 | Toda ação (separação, conferência, erro) é registrada com **data e hora** para auditoria/rastreabilidade. |
| RN-05 | **Campos comuns** dos relatórios (Barbecue): RG, pedido, data/hora, SKU/descrição, peso planejado × registrado, liberação manual (sim/não) + usuário. |
| RN-06 | **(Reverse)** O Relatório de Nota Fiscal lista MAC Address esperados × conferidos e o status do SimCard (conforme/diferente/ausente); filtros por nota e destino. |
| RN-07 | A **Curva ABC** e o **Backlog** apoiam decisão de rebalanceamento e priorização. |
| RN-08 | KPIs de saturação (tempo bloqueado, recirculações) dependem do **histórico do período filtrado**. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) / **I23.125** (Cristal) | Catálogo de produtividade (cart/operador/conferência), rejeito, caixas utilizadas, produção (integrados × separados). |
| **I23.1412** (FDBR) | Produtividade por período/estação, status de pedidos, estoque por posição, **rastreabilidade de operadores**, Curva ABC, logs de leitura errada; export CSV. |
| **I24.117** (Barbecue) | Rastreio por RG/pedido/carga; Read/NoRead; campos padronizados; export Excel/PDF; **Dashboard Rampa Cheia** com KPIs. |
| **I25.9022** (Octopus) | **Dashboard de Shortpicking** (1 min) e **Dashboard de saídas do sorter**. |
| **I22.2213** (Reverse) | Relatórios de produtividade por login/PLT, **anomalias por SKU/posição**, **Relatório de Nota Fiscal** (MAC/SimCard). |
| **I25.3515** (Esperança) | Painel de Chutes (por matriz/cor), Saturação de Rampas, Backlog de Separação. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Base do WCS** | Origem | Todos os relatórios/dashboards consomem os eventos registrados (coleta, conferência, sorter, PTL). |
| **Exportação Excel/PDF/CSV** | Saída | Mecanismo comum de extração dos relatórios. |
| **SAP GET (Consulta Volumes)** | Envio | Em alguns projetos, o SAP consulta o diagnóstico dos volumes ao WCS. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Relatório** | Consulta histórica/estática, exportável e filtrável. |
| **Dashboard** | Painel em tempo real de apoio operacional, sem ações diretas. |
| **Backlog de Separação** | Visão consolidada das ondas em processamento e % de conclusão. |
| **Saturação de rampa** | Quantidade de recirculações por rampa cheia. |
| **Painel de Chutes** | Visualização de volumes pendentes por chute e matriz de fragilidade. |
| **Curva ABC** | Classificação de giro usada em relatórios de alocação/estoque. |
| **RG do volume** | Identificador do volume usado em rastreio. |
| **Liberação manual** | Ação registrada (com usuário) quando um pedido é liberado fora do fluxo automático. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 480 seções (catálogo de relatórios/dashboards; muitos vieram roteados de outros tópicos)*
