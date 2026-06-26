# _AUDITORIA.md — Relatório da auditoria criteriosa

Seções auditadas: **2550**

## Decisões por critério

- `semantico`: 1728
- `json-no-corpo`: 385
- `estrutural`: 305
- `sinal-integracao-forte`: 132

## Distribuição final por tópico

- order-start: 155
- cubagem: 89
- picking-cart: 16
- shortpicking: 5
- conferencia: 188
- packing: 69
- sorter: 357
- ptl-alocacao: 107
- etiquetas: 171
- reabastecimento: 118
- inventario: 42
- integracao: 928
- **INBOX (novos)**: 305

## Movimentações propostas (de → para)

- cubagem → **integracao**: 12
- ptl-alocacao → **integracao**: 10
- sorter → **integracao**: 9
- etiquetas → **integracao**: 8
- reabastecimento → **integracao**: 6
- order-start → **integracao**: 5
- conferencia → **integracao**: 4
- packing → **integracao**: 2
- shortpicking → **integracao**: 1

## VIOLAÇÕES DA REGRA JSON (JSON fora de integracao): 55

- [order-start] *Tarefa Venus (Recebimento Venus)* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20.docx`
- [order-start] *Tarefa Venus (Recebimento Venus)* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV1.docx`
- [order-start] *Tarefa Venus (Recebimento Venus)* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV2.docx`
- [cubagem] *Deleta Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20.docx`
- [cubagem] *Pausar Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20.docx`
- [cubagem] *Continuar Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20.docx`
- [cubagem] *Deleta Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV1.docx`
- [cubagem] *Pausar Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV1.docx`
- [cubagem] *Continuar Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV1.docx`
- [cubagem] *Deleta Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV2.docx`
- [cubagem] *Pausar Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV2.docx`
- [cubagem] *Continuar Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV2.docx`
- [cubagem] *Deleta Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`
- [cubagem] *Pausar Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`
- [cubagem] *Continuar Production Order Pollux* — `I21.177 - ESPECIFICAÇÃO INTEGRACAO - PTL20 - REV3.docx`
- [shortpicking] *Shortpicking / Avarias* — `- ESPECIFICACAO DE SOFTWARE - PROJETO ESCOPO CDSK.docx`
- [conferencia] *Conferência* — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9.docx`
- [conferencia] *Conferência* — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9_Old.docx`
- [conferencia] *Solicitação Conferência* — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 2.docx`
- [conferencia] *Confirmação de Conferência* — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 2.docx`
- [packing] *Exemplo de Json* — `ESPECIFICAÇÃO DE INTEGRACOES - PTL RJ.docx`
- [packing] *Exemplo de Json* — `ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-RJ - Rev.8.docx`
- [sorter] *Retorno Volumes* — `I24.117 - ESPECIFICACAO DE SOFTWARE - PROJETO Barbecue B2B.docx`
- [sorter] *Onda* — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV.docx`
- [sorter] *PTM – Put To Monitor* — `I21.177 - ESPECIFICAÇÃO DE SOFTWARE - Reab.docx`
- [sorter] *PTM – Put To Monitor* — `I21.177 - ESPECIFICAÇÃO (Reabastecimento - PTW - PTM).docx`
- [sorter] *Informações* — `I21.165-3 - PROJETO JADLOG - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev_1.docx`
- [sorter] *Pedidos (Order)* — `I23.1409 - PROJETO CANCUN - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE - Rev_5.docx`
- [sorter] *Sorter* — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9.docx`
- [sorter] *Sorter* — `I23.1412 - ESPECIFICACAO DE SOFTWARE - PROJETO FDBR - Rev 9_Old.docx`
- [sorter] *Resposta* — `I25.8049 - ESPECIFICACAO DE SOFTWARE - PROJETO TITANO REV. 1.docx`
- [ptl-alocacao] *Aloca PTL* — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.1.docx`
- [ptl-alocacao] *Aloca PTL* — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.2.docx`
- [ptl-alocacao] *Aloca PTL* — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.3.docx`
- [ptl-alocacao] *Aloca PTL* — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`
- [ptl-alocacao] *Aloca PTL* — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`
- [ptl-alocacao] *Aloca PTL* — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`
- [ptl-alocacao] *Aloca PTL* — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.7.docx`
- [ptl-alocacao] *Aloca PTL* — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.8.docx`
- [ptl-alocacao] *Aloca PTL* — `I22.2241 -  PROJETO EURO - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.9.docx`
- [ptl-alocacao] *Confirmação Finalização Pedido B2C MONO* — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR_B2C REV. 1.docx`
- [etiquetas] *MTR - Mata Trabalhos Romaneio* — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJ BP.docx`
- [etiquetas] *MTR - Mata Trabalhos Romaneio* — `I24.215 - ESPECIFICACAO DE SOFTWARE - PROJETO BP REV .2.docx`
- [etiquetas] *Modelo Json* — `- Layout Novo - I21.165 - ESPECIFICACAO DE SOFTWARE - Jad Small - JadLogREV.1.docx`
- [etiquetas] *Modelo Json* — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0-.docx`
- [etiquetas] *Modelo Json* — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.0.docx`
- [etiquetas] *Modelo Json* — `I21.165 - ESPECIFICACAO DE SOFTWARE - REV.1.docx`
- [etiquetas] *MTR - Mata Trabalhos Romaneio* — `- ESPECIFICACAO DE SOFTWARE - PROJETO FLOWER .docx`
- [etiquetas] *Portal Etiquetas* — `ESPECIFICACAO DE SOFTWARE - ADITIVO - Portal Kognex.docx`
- [reabastecimento] *Retorno Reabastecimento* — `I25.4378 - PROJETO BR - ESPECIFICAO DE SOFTWARE -.docx`
- [reabastecimento] *Reabastecimento dos Fracionados* — `I24.203 - Especificação de Software - Projeto Beta_REV......docx`
- [reabastecimento] *Pick Map – Cadastro de endereço* — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.4.docx`
- [reabastecimento] *Pick Map – Cadastro de endereço* — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.5.docx`
- [reabastecimento] *Pick Map – Cadastro de endereço* — `I22.2505 - PROJETO AUTOMATIZE - ESPECIFICAÇÃO DE SOFTWARE E HARDWARE-Rev.6.docx`
- [reabastecimento] *Reabastecimento* — `I24.210 - ESPECIFICACAO DE SOFTWARE - PROJETO COUGAR REV. 1.docx`