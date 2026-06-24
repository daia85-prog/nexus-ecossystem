# ptl-alocacao — Dossiê Técnico

**Bloco:** expedicao | **Tópico:** ptl-alocacao (Put To Light)
**Seções analisadas:** 166 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **PTL (Put To Light)** é a **alocação dos volumes em posições de pallet na expedição**, guiada por **luz (LED)**. Diferente do PTM (monitor/TV), o PTL usa um **display/LED por posição** que acende ao ler o volume, indicando onde alocá-lo. A gestão das posições é **dinâmica**: elas começam vazias e, ao integrar a onda, o WCS **vincula cada pedido a uma posição livre** (1 pedido por posição), respeitando **prioridade** e, no empate, **FIFO**.

O WCS reserva o lugar de cada volume no pallet **antes** dele chegar à rampa (respeitando a sequência de entrega), cuba o pallet, controla o fechamento e, ao fechar, envia a **integração de expedição** ao WMS para faturamento.

## Fluxo do Processo

1. **Abertura:** pedido integrado → o WCS abre automaticamente uma posição de PTL e a vincula ao pedido até todos os volumes serem alocados/confirmados.
2. **Login na rampa/zona:** o operador escaneia o código de identificação; sem login, não aloca (rastreabilidade).
3. **Alocação:** o operador lê o **QR Code** da etiqueta do volume → o **display da posição acende** → posiciona o volume → **confirma pressionando o botão**. O WCS registra a quantidade conferida. (Um LED pode atender dois endereços, exibindo o final do código.)
4. **Fechamento:** ao alocar o **último volume**, fecha automaticamente (**LED laranja**); ou o operador força o fechamento. Lê-se a **etiqueta master** do pallet → a posição volta a **livre** → o WCS envia a **integração de expedição** (conteúdo do pallet) ao WMS.

## Telas e Funcionalidades

### Posição de PTL (rampa)
- **Comportamento:** LED por posição acende ao ler o volume; confirma por botão; LED laranja sinaliza fechamento. Capacidade típica: 24 posições/rampa (BP, total 192) ou 28 (Flower).

### Sugestão de Alocação Curva ABC (FDBR — slotting)
- **Comportamento:** sugere o posicionamento dos produtos nas posições de picking por curva (A perto da saída, C distante), por **PEGA**, com range de data configurável; é **sugestão** — a decisão é da operação. *(Slotting de entrada, ver desvios.)*

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | As posições de PTL são **dinâmicas**: iniciam vazias e são vinculadas a um pedido por vez ao integrar a onda. |
| RN-02 | A vinculação respeita a **prioridade**; no empate, **FIFO** por pedido da onda. |
| RN-03 | **Login na rampa é obrigatório** para alocar (rastreabilidade por operador). |
| RN-04 | O WCS **reserva** a posição de cada volume no pallet **antes** da chegada, respeitando a sequência de entrega. |
| RN-05 | **Fechamento** por peso/cubagem atingida ou totalidade do pedido; manual permitido; o WCS **não** deixa fechar com volumes pendentes (parametrizado), evitando pallet subocupado. |
| RN-06 | Ao fechar, lê-se a **etiqueta master**, a posição volta a livre e o WCS envia a **integração de expedição** ao WMS para faturamento. |
| RN-07 | **(Octopus)** Se a posição de PTL tem **ROTA vinculada**, cuba/aloca normalmente, mas ao fechar **não** envia integração ao WMS. |
| RN-08 | **(BP)** Agrupamento por **romaneio** (padrão); quando transportadora ≠ "Própria", agrupa por **subárea** (cada subárea = entidade independente com posição PTL própria). |
| RN-09 | **(BP)** Itens **perigosos** vão em pallet exclusivo, segregado, programado para ser o **último** a carregar. |
| RN-10 | **(BP)** **PTL Exclusivo** (flag no produto): reserva posição exclusiva; pallet programado como **penúltimo** a carregar; cubagem mínima se exceder dimensões. |
| RN-11 | **(BP)** **Picking Exceção:** itens fora da automação são coletados manualmente e **alocados manualmente no PTL** por rampa do sorter. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) | Gestão 100% dinâmica; 28 posições; abertura automática; fechamento normal (laranja) ou forçado; pallet concluído → stage. |
| **I24.215** (BP) | 24 posições/rampa (192); reserva antecipada por sequência de entrega; agrupamento por romaneio/**subárea**; pallet exclusivo de perigosos e **PTL Exclusivo** por flag; Picking Exceção manual. |
| **I25.9022** (Octopus) | Login na rampa; fechamento por cubagem (LED laranja) + master; **PTL com rota vinculada não integra** ao WMS. |
| **I23.1412** (FDBR) | **Sugestão de alocação curva ABC** (slotting por PEGA) — estratégia de posicionamento, não alocação de saída. |
| **I23.125** (Cristal) | **Balanceamento 1×1**: mesmo item em N estações → cadencia 1 volume por posto. |
| **I22.2213** (Reverse) | PTL de alto giro: 6 posições (carrinho/pallet), picking map define SKUs por posição. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Integração de pedidos (onda)** | Recebimento | Dispara a abertura e vinculação das posições de PTL (ver [[integracao-pedidos]]). |
| **Integração de expedição** | Envio | Enviada ao fechar o pallet, informando o conteúdo ao WMS para faturamento. |
| **Integração de Trabalhos – Work (subárea)** | Recebimento | Fornece a `subArea` usada como agrupador quando a transportadora ≠ "Própria". |
| **Sorter** | Entrada | Desvia os volumes às rampas onde estão as posições de PTL (ver [[sorter-mapa-rota]]). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **PTL (Put To Light)** | Alocação de volumes em posições de pallet guiada por LED na expedição. |
| **Posição de PTL** | Endereço de pallet vinculado dinamicamente a um pedido. |
| **Etiqueta master** | Identificador do pallet lido no fechamento. |
| **Romaneio** | Agrupador logístico padrão dos pallets no PTL. |
| **Subárea** | Agrupador alternativo (transportadoras parceiras) que cria posições PTL próprias. |
| **PTL Exclusivo** | Flag do produto que reserva posição PTL segregada. |
| **Reserva antecipada** | Atribuição da posição do volume no pallet antes da sua chegada, por sequência de entrega. |
| **Curva ABC (slotting)** | Sugestão de posicionamento dos produtos no picking por giro (estratégia de entrada). |
| **Balanceamento 1×1** | Cadenciamento de 1 volume por posto quando o item está em várias estações. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 166 seções*
