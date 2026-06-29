# Paletizacao-PTL — Dossiê Técnico

**Bloco:** Expedição | **Tópico:** Paletização via PTL
**Seções analisadas:** 5 | **Fonte:** Sintetizado a partir de dossiês de PTL-Alocação e Paletização (2026-06-29)

## Visão Geral

A paletização via PTL (Put To Light) é a modalidade de formação de pallet onde displays LED guiam o operador para a posição correta de deposição, sem necessidade de leitura de etiqueta de pallet pelo operador. O operador lê apenas o código do volume (caixa) e o PTL indica a posição (rampa/slot) onde deve depositar. É usada principalmente na expedição de entregas de última milha (transportadora "Própria"), onde a separação por rota precisa de precisão e velocidade.

## Fluxo do Processo

1. Operador pega o volume na esteira (saída do sorter-rampas ou picking direto)
2. Operador lê o código do volume no coletor/pistola
3. WCS consulta agrupamento de romaneio/transportadora para o volume
4. Display PTL da posição correta acende (cor + número de volumes)
5. Operador deposita o volume na posição indicada e confirma (botão no display)
6. WCS contabiliza o volume na UC do pallet; display atualiza contador
7. Ao atingir a quantidade do romaneio → WCS fecha o pallet e emite etiqueta master + romaneio

## Telas e Funcionalidades

| Tela | Função |
|------|--------|
| pt9 — Tela de Romaneios | Liberação e controle de posições PTL por romaneio |
| Monitor PTL | Visualização em tempo real do status de todos os displays LED |
| Fechamento de Pallet | Acionado ao completar o romaneio; emite etiqueta + dispara Aloca Pallet |

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O agrupador padrão para posições PTL é o Romaneio (transportadora "Própria") |
| RN-02 | Cada posição PTL comporta exatamente um pallet ativo por vez |
| RN-03 | O display exibe: código da posição, quantidade já depositada, quantidade total esperada |
| RN-04 | Volume lido que não pertence a nenhuma posição PTL ativa gera alerta no coletor |
| RN-05 | Fechamento do pallet é automático ao atingir qtd máxima do romaneio |
| RN-06 | Operador pode fechar pallet manualmente (pallet cheio por volume/peso antes de completar romaneio) |
| RN-07 | Após fechamento, a posição PTL é liberada para próximo romaneio |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| Transportadora "Própria" (padrão) | Agrupador = Romaneio; PTL controla posições por rota |
| BP (Barcode Put) | Variante sem display LED; operador lê etiqueta do pallet na posição para confirmar |
| Sem PTL | Paletização manual com supervisor indicando posições (processo verbal) |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| WMS | Consulta | Romaneios e transportadoras por pedido/pallet |
| PLC / Controlador PTL | Comando | WCS envia acende/apaga e atualização de contador ao display |
| [[aloca-pallet]] | Disparo | Ao fechar pallet, WCS dispara integração de Aloca Pallet ao WMS |
| [[romaneio]] | Agrupador | Romaneio define quais volumes pertencem a cada posição PTL |
| [[etiquetas]] | Emissão | Etiqueta master de UC emitida ao fechar o pallet |

## Terminologia

| Termo | Definição |
|-------|-----------|
| PTL | Put To Light — sistema de displays LED para guiar deposição |
| BP | Barcode Put — variante do PTL sem display, confirmação por leitura de código |
| Posição PTL | Slot físico no rack de pallet, identificado por display LED |
| Romaneio | Documento/agrupador que lista todos os volumes de um pallet destino |
| UC | Unidade de Carga — o pallet físico sendo formado |
| Aloca Pallet | Integração WCS→WMS que registra o conteúdo fechado da UC |

---
*Gerado em 2026-06-29 · síntese a partir de dossiês de PTL-Alocação e Paletização*
