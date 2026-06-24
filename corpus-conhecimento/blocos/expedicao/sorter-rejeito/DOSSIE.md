# sorter-rejeito — Dossiê Técnico

**Bloco:** expedicao | **Tópico:** sorter-rejeito
**Seções analisadas:** 140 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Rejeito no Sorter** é o tratamento dos volumes que **não puderam ser desviados** para a rampa de destino. A **rampa de rejeito** ao final do sorter funciona como **ponto de auditagem e tratativa**: o volume é separado do fluxo, o operador identifica o **motivo do rejeito** (em uma tela dedicada) e o **reinduz** no sorter (antes do portal) ou o leva manualmente à rampa de destino, lendo-o no scanner fixo. O rejeito **não encerra** o ciclo do volume — é uma etapa de recuperação.

Antes do rejeito definitivo, há a **recirculação**: volumes com rampa cheia ou perda de tracking voltam a circular na esteira (sem reindução) por um número **parametrizável** de voltas (padrão **3**); esgotado o limite, vão ao rejeito.

## Motivos de Rejeito

| Motivo | Causa | Tratativa |
|--------|-------|-----------|
| **Sem Leitura (NoRead)** | Câmera não lê o código ou caixa sem etiqueta. | Corrigir/adicionar etiqueta (com rota) e reinduzir antes do portal. |
| **Sem Rota** | Código lido, mas o WCS não acha o destino na base. | Tratar/cadastrar a rota e reinduzir. |
| **Sem Mapa** *(Beta)* | Rota existe, mas sem rampa vinculada no mapa do sorter. | Vincular a rota à rampa e reinduzir. |
| **MultiRead** | Mais de um código visível à câmera. | Remover o código extra e reinduzir. |
| **Rampa Cheia** | Sensor de acúmulo na rampa de destino. | Recircula (até o limite); sinaleiro pisca amarelo; depois rejeito. |
| **Cancelamento** | OS cancelada pelo WMS. | Tratar; **não** retorna ao sorter. |
| **Perda de Tracking** | PLC perde a referência física do volume (enrosco/fora de spec). | Recircula/rejeito; reinduzir quando aplicável. |
| **Produto Incorreto / SKU Divergente** | SKU lido ≠ esperado para a nota (cross-check). | Operador bipa ambos os códigos; o WCS ignora o double check ao reinduzir. |

## Fluxo do Processo

1. O WCS/PLC detecta a impossibilidade de desvio e classifica o **motivo**.
2. **Recirculação** (rampa cheia / perda de tracking): o volume volta a circular sem reindução; o sinaleiro pisca **amarelo** na rampa cheia.
3. Esgotado o limite de recirculação (parametrizável, padrão 3), o volume é enviado à **rampa de rejeito**.
4. Na **estação de rejeito** (desktop + leitor + impressora), o operador consulta o **motivo** na tela de rejeito e trata o volume.
5. **Recuperação:** reinduz o volume antes do portal **ou** leva manualmente à rampa de destino e lê no **scanner fixo** (atualiza dashboard / envia integração). Status → **"Na Rampa"**.

## Telas e Funcionalidades

### Tela de Rejeito
- **Comportamento:** lista os volumes rejeitados com o **motivo**; o operador trata e direciona o volume à rampa correta. O WCS **guarda os motivos** de rejeito para auditoria/relatório.

### Estação de Rejeito (hardware)
- 1 desktop + 1 leitor de código de barras (ex.: Honeywell 1470g) + (em alguns) 1 impressora de etiquetas — fornecidos pelo cliente.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A rampa de rejeito recebe volumes não processados corretamente; é ponto de **auditagem e tratativa**, não fim de ciclo. |
| RN-02 | **Recirculação:** rampa cheia/perda de tracking → recircula sem reindução por N voltas (**parametrizável**, padrão 3); depois, rejeito. |
| RN-03 | **NoRead contínuo:** o cliente pode definir um limite de NoReads/recirculações para evitar looping; atingido, vai ao rejeito. |
| RN-04 | **Cancelamento:** volume de OS cancelada vai ao rejeito e **não** deve retornar ao sorter. |
| RN-05 | Após a leitura no portal, todo volume **sem check-out de peso** deve ir ao rejeito para coleta das informações de peso (salvo Contingência). |
| RN-06 | **SKU Divergente:** o operador bipa ambos os códigos manualmente; estando correto, o WCS **ignora o double check** na reindução. |
| RN-07 | Ao corrigir e reler corretamente, o status do volume muda para **"Na Rampa"** e o operador é informado da rampa de destino. |
| RN-08 | A tratativa pode ser **reinduzir antes do portal** ou **levar à rampa de destino + ler no scanner fixo** (atualiza dashboard/integração). |
| RN-09 | **Contingência (IA / IVT+DUN):** caixas com falha de triagem por IA recebem etiqueta **"IVT" + DUN**; o sorter ignora os demais códigos e tria pelo DUN; impressão pelo WMS. |
| RN-10 | O WCS **registra/armazena** todos os motivos de rejeito na tela de rejeito. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I23.3502** (Peter 2) | 6 motivos: NoRead, Sem Rota, MultiRead, Cancelamento, Rampa Cheia, Perda de Tracking. |
| **I23.3503** (Eletro) | 6 motivos incl. **Produto Incorreto/SKU Divergente**; rampa cheia/tracking vão para **recirculação** (sinaleiro amarelo); limite parametrizável (Britânia). |
| **I24.203** (Beta) | **8 motivos** (acrescenta **Sem Mapa**); tratativa dupla (reinduzir × scanner fixo na rampa); status "Na Rampa". |
| **I24.215** (BP) | 6 motivos por QR Code; CLP envia o motivo ao Velox. |
| **I24.117** (Barbecue) | Recirculação até 3× por rampa cheia; limite de NoRead; itens sem check-out de peso → rejeito. |
| **I25.9022** (Octopus) | **Contingência IA** com etiqueta IVT+DUN para códigos de má qualidade. |
| **I23.1412** (FDBR) | Estação de rejeito dedicada (Fagron) para verificação de motivos e tratativa. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **PLC / CLP** | Evento | Informa NoRead/MultiRead/perda de tracking/rampa cheia ao WCS. |
| **WMS** | Recebimento | Cancelamento de OS que gera rejeito; impressão de etiqueta de contingência (IVT+DUN). |
| **Scanner fixo na rampa** | Hardware | Leitura manual do volume levado à rampa de destino (atualiza dashboard/integração). |
| **Mapa do sorter** | Configuração | "Sem Rota"/"Sem Mapa" derivam da ausência de vínculo no mapa (ver [[sorter-mapa-rota]]). |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Rejeito** | Tratamento de volumes que não puderam ser desviados corretamente. |
| **Recirculação** | Volta do volume à esteira (sem reindução) aguardando liberação da rampa, até um limite parametrizável. |
| **NoRead / MultiRead** | Falha de leitura (nenhuma / múltiplos códigos) no portal. |
| **Sem Rota / Sem Mapa** | Código não encontrado na base / rota sem rampa vinculada. |
| **Perda de Tracking** | Perda da referência física do volume pelo PLC. |
| **SKU Divergente** | Produto lido não corresponde ao esperado para a nota (falha de cross-check). |
| **Contingência IVT+DUN** | Etiqueta de recuperação que faz o sorter triar pelo DUN. |
| **Sinaleiro** | Sinal luminoso que pisca (amarelo) indicando rampa cheia. |
| **"Na Rampa"** | Status do volume após correção e leitura bem-sucedida. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 140 seções*
