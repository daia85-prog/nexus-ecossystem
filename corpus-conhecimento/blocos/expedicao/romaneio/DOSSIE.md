# Romaneio — Dossiê Técnico

**Bloco:** Expedição | **Tópico:** Romaneio
**Seções analisadas:** 3 | **Fonte:** Sintetizado a partir de dossiê de PTL-Alocação e Picking-Pallet (2026-06-29)

## Visão Geral

O Romaneio é o manifesto de carga gerado ao fechar uma Unidade de Carga (pallet). Funciona simultaneamente como (1) documento de acompanhamento físico do pallet na expedição e (2) agrupador lógico que define quais posições PTL são atribuídas a um destino específico. No contexto PTL, o agrupador "Romaneio" é o padrão para pallets de transportadora "Própria". A tela pt9 controla a liberação e gestão de posições PTL por romaneio.

## Fluxo do Processo

1. WMS (ou WCS) gera o romaneio com a relação de volumes/pedidos a montar em determinado pallet
2. WCS recebe o romaneio e cria a posição PTL correspondente (ou posição convencional)
3. Operador vai depositando volumes na posição indicada (PTL guia por display)
4. Ao completar todos os volumes do romaneio → WCS fecha o pallet e emite documento/etiqueta de romaneio
5. Romaneio acompanha o pallet físico (impresso ou QR) durante staging e carregamento
6. No [[checklist-carregamento]], o romaneio é conferido contra o manifesto de carga do caminhão

## Telas e Funcionalidades

| Tela | Função |
|------|--------|
| pt9 — Tela de Romaneios | Listagem e liberação de romaneios para posições PTL; status de cada romaneio |
| Impressão de Romaneio | Emissão do documento físico do romaneio (PDF/etiqueta) ao fechar o pallet |
| Consulta de Romaneio | Busca de romaneio por número, transportadora, status |

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Um romaneio corresponde a exatamente uma UC (pallet) de destino |
| RN-02 | Romaneio agrupa volumes por transportadora/rota (padrão = "Própria") |
| RN-03 | WCS só libera posição PTL após romaneio ser ativado na pt9 |
| RN-04 | Ao completar todos os volumes, WCS fecha romaneio e emite etiqueta + documento |
| RN-05 | Romaneio com divergência (volume faltando) pode ser fechado parcialmente mediante autorização |
| RN-06 | Número de romaneio é único no sistema; gerado pelo WMS ou sequencial WCS |
| RN-07 | Pallet fechado sem romaneio completo fica bloqueado para carregamento até aprovação |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| Transportadora "Própria" (padrão) | Romaneio = agrupador PTL; pt9 gerencia liberação de posições |
| Transportadora terceira (TRC) | Romaneio gerado pelo WMS; WCS apenas imprime e acompanha |
| Picking-Pallet | Romaneio gerado ao encerrar montagem do pallet; sem uso de PTL |
| Sem WMS integrado | Romaneio gerado inteiramente pelo WCS com base nas ordens de separação |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| WMS | Recebimento | Romaneios recebidos do WMS com lista de volumes/pedidos |
| [[paletizacao-ptl]] | Consome | PTL usa romaneio como agrupador para atribuir posições |
| [[aloca-pallet]] | Upstream | Fechamento do romaneio dispara integração Aloca Pallet |
| [[picking-pallet]] | Gera | WCS gera romaneio ao encerrar montagem de pallet de picking |
| [[etiquetas]] | Emite | Etiqueta de romaneio emitida ao fechar a UC |

## Terminologia

| Termo | Definição |
|-------|-----------|
| Romaneio | Manifesto de carga listando todos os volumes de uma UC |
| pt9 | Tela WCS de controle de romaneios e posições PTL |
| UC | Unidade de Carga — pallet físico sendo formado |
| Transportadora "Própria" | Frota própria do cliente; agrupamento padrão por romaneio no PTL |
| Manifesto de Carga | Documento consolidado do caminhão (pode conter múltiplos romaneios) |

---
*Gerado em 2026-06-29 · síntese a partir de dossiês de PTL-Alocação e Picking-Pallet*
