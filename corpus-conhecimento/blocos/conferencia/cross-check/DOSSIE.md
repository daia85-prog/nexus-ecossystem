# cross-check — Dossiê Técnico

**Bloco:** conferencia | **Tópico:** cross-check
**Seções analisadas:** 3 (consolidadas) | **Fonte:** Fase 2 — desvios de conferencia, sorter-rejeito, sorter-inducao

> **Tópico AUTO-DETECTADO na Fase 2.** Consolida o conceito de **Cross-Check** (validação automática SKU × pedido no portal), que aparecia repetido dentro de `conferencia` e referenciado em `sorter-rejeito`. É uma **conferência automática no sorter**, distinta da conferência manual.

## Visão Geral

O **Cross-Check** é a **validação automática, em tempo real, do conteúdo do volume contra o pedido**, executada no **portal de leitura do sorter**. Enquanto a conferência manual valida item a item numa estação, o Cross-Check usa a **câmera do portal** para cruzar o **SKU/DUN/EAN** lido no produto com os itens esperados para a nota/pedido — decidindo na hora se o volume segue ao destino ou vai ao **rejeito**.

É a forma de **conferência sem operador** preferida em operações de alto volume (especialmente **Full Case**), reduzindo a conferência manual a exceções. Pode ser **ativado/inativado** por operação.

## Fluxo do Processo

1. O volume passa pelo **portal de 3 faces**; a câmera captura a **etiquetaOp** + o **SKU/DUN/EAN** do produto.
2. **Verificação 1 (Destino):** o WCS valida o pedido associado à etiquetaOp.
3. **Verificação 2 (Cross-Check):** cruza o código lido com os **itens esperados** do pedido/nota (integração de Volumes/Remessas).
4. **Decisão:**
   - **Sucesso** (código pertence ao pedido) → instrução ao PLC com a **rampa de destino**.
   - **Falha** (não pertence / produto já separado / leitura incorreta) → **rampa de rejeito** com motivo **"Produto Incorreto / SKU Divergente"**.
5. **Tratativa no rejeito:** o operador bipa ambos os códigos manualmente; estando correto, o WCS **ignora o double check** na reindução (ou leva-se à rampa de destino manualmente).

## Telas e Funcionalidades

### Cross-Check no Portal (automático)
- **Comportamento:** validação em tempo real SKU × pedido; decide desvio/rejeito; **inativável** por parâmetro.

### CrossCheck por IA (CDSK — câmera de TOPO)
- **Comportamento:** exige etiquetas na **face superior** para leitura pela câmera de topo; "Suspeita de Divergência" é registrada sistemicamente para auditoria/KPI.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O Cross-Check valida o SKU/DUN/EAN do produto contra os itens esperados do pedido/nota, no portal. |
| RN-02 | São duas verificações: **Destino** (pedido da etiquetaOp) e **Cross-Check** (item × nota). |
| RN-03 | **Sucesso** → rampa de destino; **Falha** → rampa de rejeito com motivo **"Produto Incorreto / SKU Divergente"**. |
| RN-04 | A função pode ser **ativada/inativada** conforme a operação. |
| RN-05 | Em alguns projetos, aplica-se **exclusivamente** a pedidos do modelo **FULLCASE**. |
| RN-06 | **Tratativa de rejeito:** o operador bipa ambos os códigos; correto → o WCS **ignora o double check** na reindução. |
| RN-07 | **(IA/CDSK)** Exige etiqueta na **face superior** (câmera de topo); "Suspeita de Divergência" é registrada para auditoria. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I23.3503** (Eletro) | Cross-Check por SKU (código interno) × nota fiscal; falha → rejeito; função inativável. |
| **I24.203 / I25.111** (Beta) | Cross-Check por **DUN/EAN**, exclusivo do modelo **FULLCASE**. |
| **I25.3513** (CDSK) | **Crosscheck por IA** com câmera de topo; registro de "Suspeita de Divergência" para KPI. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Integração de Volumes/Remessas (WMS→WCS)** | Recebimento | Fornece os itens esperados do pedido para o cruzamento (ver [[integracao-pedidos]]). |
| **Portal de leitura / câmera** | Hardware | Captura etiquetaOp + SKU; câmera de topo no modo IA. |
| **PLC** | Comando | Recebe a instrução de desvio (destino ou rejeito). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Cross-Check** | Validação automática SKU × pedido no portal do sorter. |
| **etiquetaOp** | Etiqueta operacional do volume, base da verificação de destino. |
| **Verificação 1 / 2** | Destino (pedido) / Cross-Check (item × nota). |
| **SKU Divergente** | Falha quando o produto lido não pertence ao pedido. |
| **Double check** | Validação dupla; ignorada na reindução após correção manual. |
| **Câmera de TOPO** | Câmera superior usada no CrossCheck por IA (exige etiqueta na face superior). |
| **Suspeita de Divergência** | Ocorrência registrada para auditoria/KPI mesmo sem rejeito. |

---
*Gerado em 2026-06-24 · auto-detectado na Fase 2 · 3 seções consolidadas (REVISAR contra os RAWs de origem)*
