# sorter-mapa-rota — Dossiê Técnico

**Bloco:** expedicao | **Tópico:** sorter-mapa-rota
**Seções analisadas:** 76 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Mapa de Sorter** é a funcionalidade do WCS que **vincula rampas (ou PTLs) a agrupadores** — definindo para onde cada volume é desviado na expedição. O agrupador varia por projeto: **transportadora, romaneio, loja, categoria de produto, tipo de embalagem, rota ou cliente**. A funcionalidade permite criar **layouts pré-definidos** e **alterná-los rapidamente** conforme a necessidade operacional (por turno, cliente, tipo de carga), com **autonomia do cliente** e **acesso restrito por permissão**.

É a peça que torna o desvio do sorter configurável sem desenvolvimento: todas as interações com o sorter e os PTLs seguem o **mapa ativo**.

## Fluxo do Processo

1. A **Invent** faz o cadastro inicial das rampas/mapa; alterações posteriores ficam a cargo do **cliente/operação**.
2. A operação **vincula** cada agrupador (transportadora/loja/rota/etc.) a uma rampa ou PTL.
3. O WCS aplica o **layout ativo**; cada volume induzido é desviado para a rampa do seu agrupador.
4. Volumes cujo agrupador **não está vinculado** a nenhuma rampa vão para **rejeito** com motivo **"SEM ROTA"** (ou o sistema sinaliza a pendência, impedindo o desvio).
5. A **troca de layout** deve, idealmente, ocorrer com a **operação parada** (sem volumes pendentes no sorter) para evitar desvios incorretos.

## Telas e Funcionalidades

### Tela de Configuração do Mapa de Sorter
- **Comportamento:** criar/editar layouts; vincular agrupadores a rampas/PTLs; alternar entre layouts. **Acesso restrito** a usuários com permissão.
- **Agrupadores suportados (por projeto):** transportadora, romaneio, loja, categoria de produto, tipo de embalagem (caixa/fardo), rota, cliente, destino.

### Docas Virtuais / Sorter Map (Mustard/Wild Fork)
- **Comportamento:** o supervisor vincula **dinamicamente** uma Rota ou Cliente a uma **Posição Física (QR Code)** — ex.: "hoje a Posição 01 monta a Rota Zona Sul".

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O mapa vincula rampas/PTLs a um **agrupador**; o agrupador define o destino do desvio. |
| RN-02 | O sistema permite **múltiplos layouts** pré-definidos, alternáveis conforme a operação. |
| RN-03 | A tela de mapa tem **acesso restrito** a usuários com permissão. |
| RN-04 | **(Eletro)** Um agrupador **não** pode estar vinculado a mais de uma rampa; ao revincular, o anterior é **desvinculado automaticamente**; a troca deve ocorrer **sem volumes pendentes** (senão vão a rejeito "SEM ROTA"). |
| RN-05 | **(CDSK / Market)** Um agrupador **pode** estar vinculado a mais de uma rampa/PTL; nesse caso o WCS **cadencia** os volumes entre as rampas para não sobrecarregar uma única. |
| RN-06 | **(BP)** Romaneio não alocado a uma rampa → o WCS aloca **automaticamente**; só é possível alocar romaneios **não iniciados**. |
| RN-07 | **(Automatize)** Loja não alocada → o WCS **sinaliza a pendência** e impede o desvio automático até configurar; alterar o mapa para lojas já induzidas vale a partir do **próximo volume**. |
| RN-08 | **(Eletro)** Uma rampa pode ser marcada como **PA (Posto Avançado)**; o atributo PA é retornado ao WMS na integração de Desvio no Sorter, permitindo destinos distintos para a mesma loja (ex.: "BRASPRESS" e "BRASPRESS PA"). |
| RN-09 | A Invent orienta trocar o mapa com a **operação parada** para garantir a viabilidade dos desvios. |
| RN-10 | **(Titano)** O desvio pode ser **dinâmico**: a etiqueta passa a usar o **número do volume**, e o sorter consulta a **rota no WMS** em vez de um código fixo de rampa. |
| RN-11 | O primeiro cadastro de rampas/mapa é feito pela **Invent**; alterações posteriores são responsabilidade do cliente. |

## Variações por Projeto

| Projeto | Agrupador / Variação |
|---------|----------------------|
| **I23.3502** (Peter 2) | Transportadora, pedido ou destino (loja/cidade); layouts alternáveis. |
| **I23.3503** (Eletro) | Transportadora; rampa como **PA**; agrupador 1:1 com rampa; rejeito "SEM ROTA". |
| **I24.215** (BP) | Transportadora ou **romaneio**; alocação automática de romaneios não iniciados. |
| **I25.3513** (CDSK) | Loja + categoria + tipo de embalagem; agrupador N:N com **cadenciamento**. |
| **I25.115 / I25.163** (Market Peru/Chile) | Vincula **PTLs** (não rampas) a loja/tipo de produto/embalagem; cadenciamento entre PTLs; trilíngue (PT/ES). |
| **I25.3515** (Esperança) | Destinos (rotas/clientes) → rampas; cadastro inicial Invent, alterações pelo cliente; mapa rege sorter e PTLs. |
| **I23.144** (Automatize) | Agrupador = **Loja**; 4 rampas; loja sem rampa bloqueia desvio; troca vale para o próximo volume. |
| **I25.8049** (Titano) | Desvio **dinâmico** via consulta de rota ao WMS pelo número do volume. |
| **I26 Mustard / Wild Fork** | "Sorter Map" de **docas virtuais**: rota/cliente → posição física (QR Code), vínculo dinâmico pelo supervisor. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **WMS** | Recebimento/Envio | Fornece a rota/transportadora do volume; recebe o atributo **PA** na integração de Desvio no Sorter; no modo dinâmico (Titano), responde a rota pelo número do volume. |
| **CLP / Sorter** | Comando | Executa o desvio físico conforme o mapa ativo. |
| **Integração de Desvio no Sorter (ex.: 6.2)** | WCS → WMS | Informa o volume desviado e se foi para Posto Avançado (PA). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Mapa de Sorter** | Configuração que vincula rampas/PTLs a agrupadores, definindo os desvios. |
| **Agrupador** | Dimensão pela qual os volumes são agrupados para uma rampa (transportadora, loja, rota, categoria, etc.). |
| **Layout pré-definido** | Configuração salva do mapa, alternável conforme a operação. |
| **Rampa / Chute / PTL** | Saída física/lógica do sorter onde o volume é desviado. |
| **PA (Posto Avançado)** | Marcação de rampa que indica destino avançado, retornada ao WMS. |
| **SEM ROTA** | Motivo de rejeito quando o agrupador do volume não está vinculado a uma rampa. |
| **Cadenciamento** | Distribuição de volumes entre múltiplas rampas vinculadas ao mesmo agrupador, para evitar sobrecarga. |
| **Doca virtual (QR Code)** | Posição física associada dinamicamente a uma rota/cliente (Mustard/Wild Fork). |
| **Desvio dinâmico** | Modelo em que a rampa é consultada no WMS em tempo real (Titano), em vez de fixa na etiqueta. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 76 seções*
