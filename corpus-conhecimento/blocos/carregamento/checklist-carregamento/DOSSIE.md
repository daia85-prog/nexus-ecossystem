# checklist-carregamento — Dossiê Técnico

**Bloco:** carregamento | **Tópico:** checklist-carregamento
**Seções analisadas:** 1 (auto-detectado) | **Fonte:** desvio extraído de `conferencia-manual` (Fase 2)

> **Tópico AUTO-DETECTADO na Fase 2.** Originou-se de uma seção ("Check List Vazio/Cheio") que estava roteada para `conferencia-manual` mas descreve um processo de **carregamento de caminhão**, distinto da conferência de volumes. Cobertura mínima — requer reforço de fontes antes de tratar como completo.

## Visão Geral

O **Checklist de Carregamento** é a inspeção do **caminhão** nos momentos de **início (vazio)** e **fim (cheio)** do carregamento, com registro de evidências e disparo de integrações ao SAP. É um processo de **expedição/carregamento** — fronteira final do fluxo logístico, após o pallet sair do PTL/Stage — e não tem relação com a conferência de volumes (onde foi originalmente roteado).

## Fluxo do Processo

1. **Checklist inicial (caminhão vazio):** antes de iniciar o carregamento, o operador responde às perguntas configuradas (estado do veículo, limpeza, etc.).
2. **Início condicionado:** as regras de início de separação/carregamento dependem do **tipo de pallet** (estivado / palletizado).
3. **Registro de evidências:** foto, motivo e observação são registrados ao longo do processo.
4. **Atualização de placa:** a placa do veículo é atualizada automaticamente via **IDOC SAP**.
5. **Checklist final (caminhão cheio):** ao concluir, registram-se temperatura, IDs dos colaboradores, quantidade/tipo de pallet e lacre.
6. **Encerramento:** o sistema dispara a **minuta de carregamento** e um **IDOC** ao SAP.

## Telas e Funcionalidades

### Tela de Configuração de Checklists
- **Comportamento:** permite cadastrar as perguntas dos checklists **inicial** e **final** de caminhão.

### Checklist Final
- **Campos:** temperatura, IDs de colaboradores, quantidade e tipo de pallet, lacre.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O carregamento exige checklist **inicial** (caminhão vazio) e **final** (caminhão cheio). |
| RN-02 | As regras de início de separação/carregamento dependem do **tipo de pallet** (estivado/palletizado). |
| RN-03 | Evidências (foto, motivo, observação) são **registradas** no processo. |
| RN-04 | A **placa** do veículo é atualizada automaticamente via **IDOC SAP**. |
| RN-05 | O checklist final captura **temperatura, IDs de colaboradores, quantidade/tipo de pallet e lacre**. |
| RN-06 | Ao encerrar, o sistema dispara a **minuta de carregamento** e um **IDOC** ao SAP. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| *(fonte: conferencia-manual / projeto a confirmar)* | Único registro disponível; demais projetos a mapear na revisão. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **SAP (IDOC)** | Envio/Recebimento | Atualização automática de placa; disparo da minuta de carregamento e IDOC de encerramento. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Checklist Vazio/Cheio** | Inspeção do caminhão no início (vazio) e no fim (cheio) do carregamento. |
| **Minuta de carregamento** | Documento disparado ao encerrar o carregamento. |
| **Estivado / Palletizado** | Tipos de carga que condicionam as regras de início. |
| **Lacre** | Selo de segurança registrado no checklist final. |

---
*Gerado em 2026-06-24 · auto-detectado na Fase 2 · 1 seção (REVISAR / reforçar fontes)*
