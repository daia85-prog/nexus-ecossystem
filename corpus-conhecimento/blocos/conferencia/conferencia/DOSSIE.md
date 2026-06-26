# conferencia — Dossiê Técnico

**Bloco:** conferencia | **Tópico:** conferencia
**Seções analisadas:** 95 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

A **Conferência** valida o conteúdo do volume antes da expedição, confrontando o que foi separado com o pedido. Nem todo volume é conferido: o WCS **desvia para a conferência** apenas os volumes que se enquadram em um conjunto de **critérios de desvio** (shortpicking, peso fora da tolerância, amostragem, flag por cliente, cliente novo, categoria, RFID divergente). Os demais seguem direto para packing/sorter.

A conferência tem **modos de rigor configuráveis** (de "aprovar sem ler" até "leitura item a item") e culmina na **definição da caixa de expedição** + **impressão da etiqueta final**. A responsabilidade pode ser do **WCS** (maioria) ou do **WMS** (ex.: Octopus). Em paralelo, alguns projetos usam o **Cross-Check** no portal do sorter como validação automática SKU × pedido.

## Fluxo do Processo

1. **Desvio para conferência:** no ponto de decisão (após picking/balança), o WCS avalia os critérios e desvia o volume à conferência/auditagem.
2. **Abertura:** o operador acessa a tela de conferência (desktop) e **lê a etiqueta da caixa**; o WCS exibe a **lista de itens**, o **operador que coletou** (a nível de item) e a **caixa de expedição sugerida**.
3. **Validação dos itens** (conforme o modo): aprovar sem ler / bipar SKU + quantidade / **item a item** / uma unidade por SKU. O operador pode **consolidar** vários volumes do mesmo pedido em uma caixa final.
4. **Tratativa de divergência:**
   - **Completar** (item faltante disponível);
   - **Coletar** (cria volume para coletar os faltantes);
   - **Encerrar Conferência** com **corte** (itens não lidos = cortados; exige supervisor em alguns projetos).
5. **Fechar Volume:** seleciona/identifica a caixa de expedição (sugerida, reutilizável ou personalizada), registra **peso e dimensões**.
6. **Finalização:** impressão da **etiqueta de packing/final**; o volume é reinduzido com destino aos **PTLs/sorter**.

## Telas e Funcionalidades

### Tela de Conferência (WCS desktop)
- **Exibe:** itens (item/nome/lote/UM/qtd conferida), operador da coleta, caixa de expedição sugerida, marcação de obrigatoriedade de **laudo**.
- **Modos:** flag no cadastro do usuário alterna para **leitura item a item** (conferência minuciosa).
- **Ações:** Completar, Coletar, Encerrar Conferência (corte), Fechar Volume, impressão/reimpressão de laudo.

### Balança Dinâmica / Check Weight
- **Comportamento:** pesa o volume em movimento; compara **peso real × peso esperado** (soma dos pesos cadastrais + tara) com **tolerância** configurável; fora da tolerância → desvia para conferência.

### Cross-Check (Validação SKU × Pedido) — no portal
- **Comportamento:** no portal de 3 faces, a câmera captura a `etiquetaOp` + o SKU/DUN/EAN; o WCS cruza com os itens do pedido. **OK** → rampa de destino; **falha** → rampa de **rejeito** com motivo "Produto Incorreto / SKU Divergente". Pode ser **inativado**.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Critérios de desvio para conferência: **shortpicking**, **peso fora da tolerância**, **percentual de amostragem** (randômico, só fracionados), **flag por cliente** (`conferencia="Y"`), **100% cliente novo** (`cliente_novo="Y"`), **categoria** parametrizada, **RFID divergente**, **Pede Caixa**, **coleta pendente**. |
| RN-02 | Modos de conferência: aprovar sem ler / bipar SKU + quantidade / **item a item** (flag no usuário) / uma unidade por SKU. |
| RN-03 | O WCS **sugere automaticamente** a caixa de expedição (cadastro); aceita caixas reutilizáveis e **dimensões personalizadas** para caixas adaptadas. |
| RN-04 | **(FDBR)** O WCS **não permite troca de lote** na conferência. |
| RN-05 | **Encerrar Conferência → corte:** itens não lidos são cortados; em alguns projetos (Beleza) o corte exige **autenticação de supervisor**. |
| RN-06 | A conferência finaliza **obrigatoriamente** com a impressão da **etiqueta de packing/final**, que consolida os volumes do mesmo pedido. |
| RN-07 | **(FDBR)** Falhas (qtd divergente, lote diferente, item fora do pedido, código não lido) exigem **liberação por senha de liderança**. |
| RN-08 | **(Check Weight)** O peso esperado vem do cadastro de produtos (`peso_item`) + tara; tolerância configurável (ex.: BR 260g a múltiplos de 20g; NavePark ±5%/50g). |
| RN-09 | **(Cross-Check)** Falha de SKU × pedido envia o volume à rampa de rejeito; a função pode ser ativada/inativada por operação. |
| RN-10 | **(Octopus)** Quando a conferência é responsabilidade do **WMS**, **não** há confirmação por volume e o fluxo **não é interrompido** por falha de conferência. |
| RN-11 | O WCS **registra os operadores** que realizaram cada conferência (rastreabilidade). |
| RN-12 | **(FDBR)** Cadastro de impressoras (nome lógico, IP, posto, status) com vínculo impressora↔posto restrito a supervisor/admin. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) | Três tipos (frágeis/não frágeis/inconformes); peso só informado ao WMS (WCS não valida); caixa sugerida + reutilizável + dimensões personalizadas; "Fechar Volume". |
| **I23.1412** (FDBR) | ~29 estações; conferência item a item com DataMatrix; sem troca de lote; laudos; liberação por senha de liderança; cadastro de impressoras. |
| **I23.3502** (Peter 2) | Desvio por short/flag cliente/cliente novo/%/check weight; Completar ou Coletar no Encerrar Conferência. |
| **I23.3503 / I24.203 / I25.111** (Eletro/Beta) | **Cross-Check** SKU/DUN/EAN × pedido no portal; falha → rejeito; função inativável. |
| **I25.9043** (Beleza) | **Portal RFID** detecta itens na caixa; corte exige supervisor; registra conferentes. |
| **I25.138** (Guatemala) | Conferência/Packing flexível (aprovar sem ler / item a item / 1 por SKU); consolida volumes; finaliza com etiqueta de packing. |
| **I25.4066** (NavePark) | Balança dinâmica como 1º filtro; aprovado segue sem intervenção; reprovado (com flag) → estação de tratativa manual. |
| **I25.4378** (BR) | Balança dinâmica com tolerância 260g (resolução 20g). |
| **I25.9022** (Octopus) | Conferência de responsabilidade do **WMS**; sem confirmação por volume; fluxo não interrompido. |
| **I25.3513** (CDSK) | Conferência de **pallet** opcional, não integra resultado, não vinculada a sorter/PTL; conferência aleatória. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **WMS** | Recebimento/Envio | Envia flags de conferência (cliente/cliente_novo), peso dos itens; recebe a relação conferida; em alguns projetos é o responsável pela conferência. |
| **Balança dinâmica** | Hardware | Fornece o peso real para o Check Weight. |
| **Portal de leitura / câmera / antena RFID** | Hardware | Captura SKU/etiqueta para Cross-Check; RFID detecta itens na caixa. |
| **Cadastro de produtos e embalagens** | Recebimento | Fonte do peso esperado e das caixas de expedição. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Conferência** | Validação do conteúdo do volume antes da expedição. |
| **Check Weight** | Aferição de peso real × esperado com tolerância para decidir o desvio. |
| **Cross-Check** | Validação automática SKU × pedido no portal do sorter. |
| **etiquetaOp** | Etiqueta operacional do volume lida no portal. |
| **Conferência cega / item a item** | Modos de rigor; item a item obriga leitura individual de cada unidade. |
| **Fechar Volume** | Ação que define a caixa de expedição e registra peso/dimensões. |
| **Flag de conferência / cliente novo** | Atributos da integração Wave que forçam o desvio para conferência. |
| **Laudo** | Documento impresso na conferência para volumes que o exigem. |
| **Tratativa manual** | Estação onde volumes reprovados são corrigidos. |
| **Tara** | Peso da caixa, somado aos pesos cadastrais no cálculo do esperado. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 95 seções*
