# packing-termolabil — Dossiê Técnico

**Bloco:** conferencia | **Tópico:** packing-termolabil
**Seções analisadas:** 5 | **Fonte:** análise direta do RAW (chat)

> **Aviso de cobertura:** este tópico tem evidência escassa no corpus. Quatro das cinco seções são repetições do mesmo enunciado (layout de etiqueta), e o conteúdo substantivo vem de uma única seção sobre separação por temperatura. Recomenda-se reforço de material antes de tratar este dossiê como completo.

## Visão Geral

O **Packing Termolábil** é a etapa de embalagem aplicada a volumes provenientes do **Picking Fracionado** e do **Picking Termolábil** — isto é, produtos sensíveis à temperatura (congelados e resfriados). O material disponível indica dois pontos principais:

1. Os volumes que passam pelo packing após o Picking Fracionado/Termolábil utilizam um **layout de etiqueta específico** (recorrente em quatro projetos distintos).
2. O processo está acoplado a uma lógica de **separação por temperatura** que define a ordem de coleta (congelado antes de resfriado) por meio de **multiplicadores de prioridade** e da seleção de **docas auxiliares por temperatura**.

## Fluxo do Processo

1. A separação ocorre conforme o **tipo de separação** parametrizado:
   - **Padrão:** todos os materiais **congelados** são separados primeiro; os **resfriados** depois (exceção: se houver reabastecimento em andamento, o resfriado pode ser iniciado).
   - **Mista:** congelado e resfriado têm a **mesma prioridade** de separação, independentemente da temperatura.
2. O WCS aplica **multiplicadores por temperatura** para refletir essa prioridade (ver Regras de Negócio).
3. Após a seleção do tipo de separação, faz-se a **seleção de docas auxiliares por temperatura**.
4. Os volumes separados seguem para o **packing**, onde recebem o **layout de etiqueta** específico do Picking Fracionado/Termolábil.

## Telas e Funcionalidades

### Seleção de Tipo de Separação e Docas
- **Comportamento:** permite escolher entre separação **padrão** e **mista** e selecionar as **docas auxiliares por temperatura**. As **docas principais** sempre vêm no IDOC de remessa (TPSDLS – ZSDDAREM) e recebem os volumes separados; as **docas auxiliares** podem ser escolhidas livremente no WCS, mas uma doca em uso **bloqueia o início da onda**.

### Etiqueta de Packing Termolábil
- **Comportamento:** layout de etiqueta específico aplicado aos volumes pós Picking Fracionado/Termolábil. *(O layout em si não está presente no material-fonte.)*

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Existem dois tipos de separação: **padrão** e **mista**. |
| RN-02 | Na separação **padrão**, congelados são separados antes dos resfriados — salvo se houver **reabastecimento em andamento**, situação em que o resfriado pode ser iniciado. |
| RN-03 | Na separação **mista**, congelados e resfriados têm prioridade igual. |
| RN-04 | **Multiplicadores por temperatura:** separação padrão → congelado = 1, resfriado = 2; separação mista → ambos = 1. |
| RN-05 | As **docas principais** sempre vêm no IDOC de remessa (TPSDLS – ZSDDAREM) e são usadas para receber os volumes separados. |
| RN-06 | As **docas auxiliares** podem ser escolhidas diretamente no WCS sem restrição em relação a outros transportes/ondas, **mas** uma doca auxiliar em uso impede o início da onda. |
| RN-07 | Volumes pós Picking Fracionado e Picking Termolábil usam um **layout de etiqueta** específico no packing. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I24.215** (BP, 3 revisões) | Layout de etiqueta para volumes pós Picking Fracionado/Termolábil. |
| **I22.1732** (Flower) | Mesmo layout de etiqueta para Packing Fracionado/Termolábil. |
| **I22.120** (BRF – Salvador) | Define os tipos de separação (padrão/mista), multiplicadores por temperatura e regra de docas principais × auxiliares. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **IDOC de remessa (TPSDLS – ZSDDAREM)** | Recebimento | Define as docas principais que recebem os volumes separados. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Termolábil** | Produto sensível à temperatura (congelado ou resfriado), que exige controle térmico na separação e embalagem. |
| **Separação Padrão** | Modo em que congelados são separados antes dos resfriados. |
| **Separação Mista** | Modo em que congelados e resfriados têm a mesma prioridade de separação. |
| **Multiplicador de Temperatura** | Fator de prioridade aplicado por temperatura (congelado=1/resfriado=2 no padrão; ambos=1 no misto). |
| **Doca Principal** | Doca que sempre consta no IDOC de remessa e recebe os volumes separados. |
| **Doca Auxiliar** | Doca selecionável livremente no WCS; se estiver em uso, bloqueia o início da onda. |
| **Picking Fracionado** | Separação fracionada que antecede o packing termolábil. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 5 seções*
