# integracao-wms-erp — Dossiê Técnico

**Bloco:** integracao | **Tópico:** integracao-wms-erp
**Seções analisadas:** 71 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

Este tópico cobre a **integração do WCS (Velox) com o SAP WM/ERP via IDOC**, predominante em operações de **armazém automatizado de pallets** (transelevador, HB) — fortemente representada pelos projetos **BRF** (Salvador, Embu, Uberlândia, Jundiaí). Diferente da [[integracao-wcs-wms]] (REST/JSON com WMS de e-commerce), aqui o transporte é **IDOC-SAP em XML/SOAP sobre HTTP (SSL/TLS)**.

As integrações centrais formam o ciclo de **Ordem de Transporte (OT)**:
- **WMTORD / TORD** — criação da OT (armazenar/retirar);
- **WMTOCO / TOCO** — confirmação da OT (sincroniza o estado entre SAP e WCS);
- **WMCATO / CATO** — cancelamento/estorno da OT.

Complementam: **IDOC de Remessas** (TPSDLS - ZSDDAREM), **criação/deleção de ondas**, **gestão/espelho de estoque do AC**, e **confirmação de entrada no armazém**.

## Fluxo do Processo (ciclo da OT)

1. **Criação (WMTORD/TORD):** o SAP envia a OT de **armazenagem** ou **retirada** ao WCS (campo `TRART = 'E'`); para reabastecimento, o WCS pode solicitar a OT ao SAP.
2. **Execução:** o transelevador move o pallet entre o local SAP e a área WCS (HB).
3. **Confirmação (WMTOCO/TOCO):** ao mover/armazenar, o WCS envia a confirmação ao SAP, sincronizando o estado da OT. Há múltiplos cenários (HB→SAP, SAP→HB, HB→HB com 1ª e 2ª confirmação), distinguidos por `NLTYP` (destino) × `VLTYP` (origem).
4. **Cancelamento (WMCATO/CATO):** o SAP solicita cancelamento e o WCS responde se é possível — **só** executável se o cancelamento chegar **antes** do comando (alteração de TAG) que envia a retirada ao transelevador.

### Encerramento de onda (BRF Salvador)
- Aplicável a onda **EM ANDAMENTO**: interrompe coletas, apaga LEDs, marca volumes como **ENCERRADO**.
- Inicia um **job de 5 minutos** aguardando o desvio dos volumes ainda no sorter → desviados viram **NARAMPA** (atendidos); os demais, **ENCERRADO**.
- Envia ao SAP o IDOC **TPSDLS - ZSDDAREM** com a quantidade atendida em `<QUANT>` (pode ser 0) e a tag `<ZSEP_PARCIAL> = "X"` para parciais — o SAP trata o não atendido (cancela faturamento, reprocessa ou retorna ao estoque).

## Telas e Funcionalidades

### Gestão/Espelho de Estoque do AC (BRF Salvador)
- **Comportamento:** o WCS espelha as posições do AC; o SAP envia IDOC a cada movimento (armazenagem, DE×PARA, housekeeping, bloqueios/desbloqueios, confirmações de OT).
- **Consulta:** filtros por posição/canal, SKU, lote, UMB, palete/UD, %shelf, validade, temperatura, faixa de cor, depósito, centro, nível; exporta **CSV** para conciliação com o SAP.
- **Esvaziar canal:** sugestão por IA de canais a esvaziar; bloqueia ressuprimento até o operador confirmar a retirada via LED (código especial, ex.: **999**).

### Skus Pendentes (BRF Salvador)
- **Comportamento:** lista unidades pendentes de coleta na onda (onda, transporte, remessa, SKU, qtd solicitada/atendida, status); o botão **Acionar** gera tarefa de coleta para todos os SKUs pendentes (mesma prioridade, casos de corte).

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A integração com o SAP usa **IDOC em XML/SOAP** sobre HTTP com SSL/TLS. |
| RN-02 | **WMTORD** é a principal integração SAP→WCS para armazenagem e retirada (`TRART = 'E'`). |
| RN-03 | **WMTOCO** confirma ao SAP o movimento do transelevador; `NLTYP` (destino) e `VLTYP` (origem) identificam local SAP × área WCS. |
| RN-04 | **WMCATO** só executa o cancelamento se chegar **antes** da alteração de TAG que dispara a retirada ao transelevador; o WCS sempre responde se o cancelamento é possível. |
| RN-05 | **Confirmação de entrada (RF1.1):** confirmar ao SAP WM apenas pallets vindos da **fábrica** (nível superior); transferência/devolução (nível inferior) **não** são confirmados. |
| RN-06 | **Encerramento de onda:** job de 5 min aguarda desvios; volumes desviados = NARAMPA (atendidos), demais = ENCERRADO; envia ZSDDAREM com `<QUANT>` e `<ZSEP_PARCIAL>`. |
| RN-07 | **Exclusão de onda:** permitida só com status **criada/preparada**; transportes voltam para vínculo e saldos reservados retornam a PENDENTE. |
| RN-08 | **Gestão de Estoque:** o WCS espelha o AC a partir de IDOCs do SAP a cada movimento; conciliação via exportação CSV. |
| RN-09 | **Abastecimento (FEFO):** o WCS escolhe a melhor posição varrendo AA (Buffer/Pulmão) e AC pelo **lote mais velho**, priorizando o Buffer; o SAP gera a OT e devolve os dados. |
| RN-10 | **Cancelamento de Romaneios (Promofarma):** integração do WMS irreversível; volumes não iniciados são cancelados/ocultados no Order Start; volumes já no sorter não sofrem ação. |
| RN-11 | **SKU (Swift):** o SAP aceita **1 informação por SKU** (1 para 1); dimensões enviadas em cm. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.128 / I22.170 / I23.190 / I23.199** (BRF — Salvador, Embu, Uberlândia, Jundiaí) | Ciclo WMTORD/WMTOCO/WMCATO para armazém automatizado com transelevador; confirmações múltiplas HB; especificações quase idênticas entre sites. |
| **I22.120** (BRF Salvador, sprints) | Detalha TORD/TOCO/CATO, IDOC de Remessas, criação/deleção de ondas, encerramento de onda com job de 5 min, gestão de estoque do AC e abastecimento FEFO. |
| **I20.1053** (Swift) | GAP de envio de SKU (SAP→MFC), criação de caixas com numeração SAP, conferência por balança OK/NOK. |
| **I24.205** (Promofarma) | Cancelamento de Romaneios via integração WMS irreversível. |

## Integrações

| IDOC / Integração | Sentido | Descrição |
|-------------------|---------|-----------|
| **WMTORD (Armazena/Retira) / TORD** | SAP ⇄ WCS | Criação da Ordem de Transporte (armazenagem, retirada, reabastecimento). |
| **WMTOCO / TOCO / ZWMTOCO** | WCS ⇄ SAP | Confirmação da OT; sincroniza estado; ZWMTOCO "zera canal". |
| **WMCATO / CATO** | SAP ⇄ WCS | Cancelamento/estorno da OT, condicionado à TAG do transelevador. |
| **IDOC Remessas (TPSDLS - ZSDDAREM)** | SAP → WCS | Envia as remessas ao WCS; usado também no encerramento de onda com `<QUANT>`/`<ZSEP_PARCIAL>`. |
| **IDOC Criação/Deleção de Ondas** | WCS → SAP | Informa ondas criadas/deletadas no WCS. |
| **Gestão de Estoque (espelho AC)** | SAP → WCS | Atualiza posições a cada movimento (armazenagem, DE×PARA, housekeeping, bloqueios). |
| **Confirmação de entrada (RF1.1)** | WCS → SAP WM | Confirma entrada de pallet vindo da fábrica. |
| **Conferência balança (OK/NOK)** | WCS → SAP | Resultado da conferência por peso (Swift). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **IDOC** | Intermediate Document — formato padrão SAP de troca de dados, aqui em XML/SOAP. |
| **OT (Ordem de Transporte)** | Instrução de movimentação de pallet entre posições. |
| **WMTORD / TORD** | IDOC de criação da OT (armazena/retira). |
| **WMTOCO / TOCO** | IDOC de confirmação da OT. |
| **WMCATO / CATO** | IDOC de cancelamento/estorno da OT. |
| **TRART** | Campo do WMTORD que indica o tipo de transporte (`'E'`). |
| **NLTYP / VLTYP** | Tipo de local de destino / origem (distinguem local SAP × área WCS). |
| **HB** | Área de armazenagem automatizada (transelevador). |
| **AC / AA** | Área de Coleta / Área de Armazenagem (Buffer/Pulmão) — origem do abastecimento FEFO. |
| **ZSDDAREM / TPSDLS** | Mensagem IDOC de remessa. |
| **ZSEP_PARCIAL** | Tag que sinaliza atendimento parcial de uma remessa. |
| **Transelevador** | Equipamento que move pallets no armazém automatizado. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 71 seções*
