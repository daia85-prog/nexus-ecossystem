# picking-pbl — Dossiê Técnico

**Bloco:** separacao | **Tópico:** picking-pbl (Picking By Light)
**Seções analisadas:** 85 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Picking By Light (PBL / Pick-by-Light)** é a separação **fracionada guiada por LEDs** em **flow racks**. A caixa de separação percorre a **linha expressa**; ao passar pelo leitor de uma estação, se houver itens a coletar, é **desviada** para o posto correspondente, onde os **LEDs acendem** indicando posição e quantidade. O operador separa, **confirma pressionando o botão** (a posição apaga) e segue até concluir; ao final, induz a caixa de volta à linha rumo à próxima estação.

A estrutura típica é uma **estação com 2 postos**, cada posto com posições de **frente** (alto giro, curva A/B) e **costas/nichos** (médio giro, curva C), com **display de 3 dígitos + botão LED** por posição e um **display de 6 dígitos** mostrando o número da caixa atual.

## Fluxo do Processo

1. **Login obrigatório** do operador no PDV do posto (rastreabilidade). Sem operador logado, a caixa não inicia e os LEDs acendem **laranja** (pendência).
2. A caixa é lida no início da linha → segue pela **linha expressa** → no leitor da estação, o WCS verifica se há itens a separar naquele posto.
3. Havendo itens, a caixa é **desviada** ao posto; as posições acendem:
   - **Azul** = separar (display mostra a quantidade);
   - **Rosa** = há também separação nas **costas/nichos**;
4. O operador separa a quantidade, **pressiona o botão** (posição apaga), repete até todas as posições.
5. **Verde** em todas as posições = posto concluído → o operador **induz a caixa** na linha expressa → próxima estação (ou expedição).
6. Casos especiais: **Pede Caixa** (item não cabe → gera novo volume), **ShortPicking** (botão "menor" decrementa a quantidade), **Pendência** (ruptura → ajusta + lê endereço + motivo).

## Telas e Funcionalidades

### Posto de PBL (flow rack + PDV)
- **Sinalização (cores):** azul (separar), verde (concluído), rosa (separação nas costas), laranja (sem login/pendência).
- **Displays:** 3 dígitos (quantidade por posição da frente), 10 dígitos (endereço+quantidade nos nichos/costas), 6 dígitos (número da caixa atual).
- **Botões:** confirmar separação (apaga a posição), "menor" (shortpicking), gerar novo volume (Pede Caixa).

### Tela de Endereços
- **Comportamento:** visualizar/gerenciar localizações dentro e fora do flow rack (Picking Fundo, Geladeiras, Controlados, Polícia Federal, Museu, Transfer); criar/excluir endereços fora do flow rack (restrito a liderança); filtros por setor/status/tipo; controle de saldo (picking + pulmão) com limite de segurança para reabastecimento.

### Monitoramento de LED sem Coleta (BRF)
- **Comportamento:** timer por LED aceso; se ultrapassar o limite sem confirmação, a linha do posto fica **vermelha** no dashboard, sinalizando anomalia para atuação rápida.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | **Login no posto é obrigatório** antes de qualquer coleta; caixa sem operador logado não inicia (LEDs laranja). |
| RN-02 | A caixa só é desviada ao posto se houver itens a separar naquele posto; senão segue na linha expressa. |
| RN-03 | **Cores dos LEDs:** azul = separar, verde = concluído, rosa = há separação nas costas, laranja = pendência/sem login. |
| RN-04 | Cada separação é confirmada **pressionando o botão** da posição (que apaga); ao concluir, todas acendem verde. |
| RN-05 | **(FDBR)** O WCS **não** valida lote no PBL nem no picking cart; a validação de lote ocorre só na **conferência**. |
| RN-06 | **(Pede Caixa)** Se os itens não couberem na caixa solicitada pelo WMS, um botão gera um **novo volume** (próximo a liberar no Order Start). |
| RN-07 | **ShortPicking:** botão "menor" na posição decrementa a quantidade conforme o disponível; o WMS gera reabastecimento. |
| RN-08 | **(Esperança)** Em ruptura, o operador ajusta a quantidade + **lê o endereço** + seleciona o **motivo**; o WCS registra na **Tabela de Pendências do WMS (Winthor)**; o operador **não** decide o corte, só registra. |
| RN-09 | **(BRF)** Os LEDs acendem por **ordem de prioridade**; produtos **PVAR** têm sempre a primeira prioridade; só acendem LEDs das tarefas do operador. |
| RN-10 | **(BRF)** Monitoramento de LED por timer; estouro do tempo → alerta visual (vermelho) no dashboard. |
| RN-11 | Permite-se **uma ou mais posições com o mesmo SKU** (Peter). |
| RN-12 | **(Guatemala)** O volume é estruturado para ser separado **inteiramente em uma única estação** (segregação física e sistêmica); estações distinguidas por cores alternadas. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I23.1412** (FDBR) | 8 estações × 2 postos (16 postos), 52 posições/posto (36 frente + 16 costas); cores azul/verde/rosa; sem validação de lote. |
| **I25.9043** (Beleza) | 10 estações frente+costas; "volume" tratado como "tarefa"; tela de endereços (Museu/FlowRack/Transfer). |
| **I23.3502** (Peter 2) | Linhas A2/A3, alto giro (curva A/B) na frente, médio giro (curva C) nas costas; 2 Order Starts; Pede Caixa; ShortPicking por botão. |
| **I25.3515** (Esperança) | Registro de **pendência** na tabela do WMS (Winthor) com motivo; operador não corta. |
| **I22.120** (BRF) | Controle de LEDs por prioridade (PVAR primeiro); monitoramento de LED sem coleta com dashboard. |
| **I25.138** (Guatemala) | Volume separado em estação única; estações por cores alternadas; trilíngue. |
| **I22.2213** (Reverse) | Variante **FlowHack** (baixo giro / logística reversa) por MAC Address, com tratamento de **anomalias**. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **WMS** | Recebimento | Envia pedidos cubados, quantidade/tipo de caixas; recebe shortpicking → gera reabastecimento. |
| **Tabela de Pendências do WMS (Winthor)** | Envio | Recebe registros de ruptura/corte (SKU, posição, qtd, motivo) — Esperança. |
| **CLP / LEDs** | Comando | Acionamento das luzes das posições conforme as tarefas do operador. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **PBL (Picking By Light)** | Separação fracionada guiada por LEDs nas posições de flow rack. |
| **Estação / Posto** | Conjunto de posições de picking; uma estação tem múltiplos postos (frente/costas). |
| **Flow rack** | Estante de picking dinâmico na frente do operador. |
| **Nicho (costas)** | Posições atrás do operador, sinalizadas quando o flow rack da frente acende rosa. |
| **Display 3 / 6 / 10 dígitos** | Quantidade por posição / número da caixa atual / endereço+quantidade nos nichos. |
| **Curva A/B/C** | Classificação de giro que define alto giro (frente) × médio giro (costas). |
| **Pede Caixa** | Geração de novo volume quando os itens não cabem na caixa. |
| **PVAR** | Tipo de produto com prioridade máxima de coleta (BRF). |
| **FlowHack** | Variante de PBL para baixo giro / logística reversa (Reverse). |
| **Pendência** | Registro de ruptura/corte enviado ao WMS para tratamento centralizado. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 85 seções*
