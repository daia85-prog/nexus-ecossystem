# sorter — Dossiê Técnico

**Bloco:** expedicao | **Tópico:** sorter
**Seções analisadas:** 548 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Sorter** é o equipamento de **classificação automatizada** que recebe os volumes, **lê** seu código no portal, **valida** o destino contra o mapa ativo e **desvia** cada volume para a rampa/saída correta (onde ocorre a alocação em PTL). É o coração da expedição automatizada.

Este tópico é o **guarda-chuva do sorter** — os processos específicos têm tópicos próprios: **indução** ([[sorter-inducao]]), **mapa/rota** ([[sorter-mapa-rota]]), **rejeito** ([[sorter-rejeito]]) e **alocação PTL** ([[ptl-alocacao]]). Aqui ficam a **arquitetura do equipamento**, a comunicação com o **PLC**, regras de **contingência**, **faturamento por leitura** (autoBilling/Container Completo) e o **cancelamento de volumes**.

## Arquitetura do Sorter

| Componente | Descrição |
|------------|-----------|
| **Rampas de indução** | Pontos de entrada do volume na esteira (1–2 por projeto). |
| **Portal de leitura** | 1+ scanners (3 faces) que leem o código; em alguns projetos sem balança/dimensionador. |
| **Saídas / rampas** | Transporte (por transportadora/rota/loja) + rejeito + especiais (ex.: **PIN**). |
| **Posições PTL** | Nas saídas, onde os volumes são alocados em pallets (ex.: Octopus 18 rampas / 54 PTL). |
| **PLC / servidor local** | Executa o desvio físico; comunicação em rede local (sem nuvem) para velocidade. |

## Fluxo do Processo

1. O volume é **induzido** na esteira (ver [[sorter-inducao]]).
2. O **portal** lê o código de barras; o WCS valida contra o **mapa ativo** (ver [[sorter-mapa-rota]]).
3. O WCS comanda o **PLC** a **desviar** o volume para a rampa de destino (ou rejeito, ver [[sorter-rejeito]]).
4. Na saída, o volume é alocado em **PTL** (ver [[ptl-alocacao]]).
5. **Faturamento (autoBilling):** lidos todos os volumes do pedido, o WCS envia **"Container Completo"** (mensagem de status + qtd) ao ERP para faturar; se `autoBilling = false`, o pedido vai a uma saída específica.

## Telas e Funcionalidades

### Saída PIN
- **Comportamento:** destino para pedidos que exigem **aprovação ou documentação adicional** (não processáveis automaticamente).

### Regras de Contingência do Sorter
- **Desconsiderar checagem de peso** (por SKU/RG/todos): valida só a leitura, mas **guarda o peso** para consulta — usado em falha de balança.
- **Destino manual:** override do mapa, definindo manualmente a rampa de um transporte (reentrega/decisão operacional). **Irreversível** após acionado (ajustes só manuais).
- **Log obrigatório:** usuário, data de ativação/desativação; cada volume liberado por contingência é marcado como **"manual"** + usuário.

### Cancelamento de Volumes (esperados nas saídas)
- **Comportamento:** tela para **excluir** volumes esperados (avaria, falha de leitura, divergência de peso); o item é devolvido ao estoque; **sem** integração com o SAP.

### Tela de Agrupamento para Expedição
- **Comportamento:** após o desvio, lê-se a caixa → o primeiro volume do pedido **define a posição**; os demais vão automaticamente para a mesma; **sem validação** da posição (responsabilidade do cliente).

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O sorter desvia conforme o **mapa ativo**; todo volume induzido deve estar **integrado** no WCS ou etiquetado. |
| RN-02 | **autoBilling = false:** os volumes do pedido vão a uma **saída específica** cadastrada no mapa; lidos todos os volumes, o WCS envia **"Container Completo"** + quantidade ao ERP para faturar. |
| RN-03 | **Saída PIN:** pedidos com necessidade de aprovação/documento são desviados para a rampa PIN. |
| RN-04 | **Cadenciamento:** mesmo SKU para várias lojas → desvios cadenciados para não sobrecarregar uma rampa. |
| RN-05 | **Contingência de peso:** pode-se desconsiderar a checagem de peso (por SKU/RG/todos), mas o peso é **guardado** para consulta. |
| RN-06 | **Contingência de destino:** override manual da rampa é **irreversível** após acionado; exige log de usuário/data; volume marcado como "manual". |
| RN-07 | **Cancelamento de volume** nas saídas devolve o item ao estoque **sem** integração com o SAP. |
| RN-08 | **Agrupamento na saída:** o primeiro volume do pedido define a posição; o WCS **não** valida a posição informada. |
| RN-09 | A comunicação equipamento ↔ servidor ↔ PLC é **ida e volta** em rede local (sem internet/nuvem) para garantir velocidade. |
| RN-10 | O mapa aceita **ROTAS** (fracionado) e **LOJAS** (fullcase); a unidade de carga (pallet/routainer) por posição é informada para o cálculo de cubagem. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I23.1412** (FDBR) | 1 portal (sem balança), 6 saídas (4 transporte + **PIN** + rejeito); **autoBilling** → "Container Completo"; tela de agrupamento para expedição. |
| **I24.117** (Barbecue) | **Regras de contingência** (peso/destino) com log; cancelamento de volumes nas saídas. |
| **I25.9022** (Octopus) | 2 rampas indução, portal com 3 leitores, 18 rampas/54 PTL; mapa com ROTAS/LOJAS e unidade de carga; **retorno por tabelas DBLINK** (status induzido, montagem de paletes). |
| **I22.120** (BRF) | Sorter **crossbelt** orquestrado pelo WCS Velox. |
| **I22.2213** (Reverse) | Operação de logística reversa (triagem por nota fiscal/MAC), com leitores/PDVs/Zebra por célula. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **PLC / CLP** | Comando | Executa o desvio físico comandado pelo WCS via servidor local. |
| **ERP/WMS** | Envio | Recebe "Container Completo" (autoBilling) para faturamento; tabelas DBLINK de retorno (Octopus). |
| **Portal de leitura** | Hardware | Lê o código; origem dos eventos de leitura/NoRead/MultiRead. |
| **Mapa do sorter** | Configuração | Define o destino do desvio (ver [[sorter-mapa-rota]]). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Sorter** | Equipamento de classificação automatizada de volumes (ex.: crossbelt). |
| **Portal de leitura** | Conjunto de scanners que lê o código do volume na entrada. |
| **Saída / Rampa** | Destino físico do desvio (transporte, rejeito, PIN). |
| **PIN** | Saída para pedidos que exigem aprovação/documentação adicional. |
| **autoBilling** | Campo que indica faturamento automático; controla a saída e o "Container Completo". |
| **Container Completo** | Mensagem ao ERP quando todos os volumes do pedido foram lidos, disparando o faturamento. |
| **Contingência** | Regras de exceção (ignorar peso, forçar destino) com log e marcação manual. |
| **Cadenciamento** | Distribuição de desvios entre rampas para evitar sobrecarga. |
| **PLC** | Controlador que executa o desvio físico. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 548 seções (guarda-chuva do sorter; processos específicos em [[sorter-inducao]], [[sorter-mapa-rota]], [[sorter-rejeito]], [[ptl-alocacao]])*
