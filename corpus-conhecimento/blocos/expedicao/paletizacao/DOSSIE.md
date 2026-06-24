# paletizacao — Dossiê Técnico

**Bloco:** expedicao | **Tópico:** paletizacao
**Seções analisadas:** 74 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

A **Paletização** (Aloca Pallet) é o processo de **agrupar os volumes desviados nas rampas do sorter em pallets**, organizados por **rota e transportadora**, para a expedição. O WCS controla a **cubagem** do pallet (volume m³ e peso kg), notifica e fecha o pallet ao atingir os limites, e ao final envia ao WMS a **integração com todos os volumes** do pallet, liberando a posição para um novo.

Os três eixos do tópico são:
1. **Cubagem de Pallet** — cálculo de ocupação e limites (cubagem/peso de segurança e máximo).
2. **Aloca Pallet** — alocação dos volumes ao pallet por rota/transportadora (coletor Android ou TV da rampa).
3. **Fechamento de Pallet** — encerramento (automático, lógico ou manual) com leitura da **etiqueta master (RG)**.

## Fluxo do Processo

1. **Cadastro:** o operador cadastra previamente a **cubagem (m³)** e o **peso (kg)** máximos do pallet/Routainer + valores de **segurança**.
2. **Aloca Pallet:** após o desvio dos volumes nas rampas, o WCS agrupa os volumes por rota/transportadora; a alocação é guiada por coletor Android ou pela TV da rampa.
3. **Cubagem em tempo real:** o WCS calcula a ocupação com as dimensões/peso dos volumes (recebidos via integração ou cadastro de produtos); ao atingir o valor de **segurança**, **notifica via LED**.
4. **Solicitação de fechamento:** ao atingir o **limite**, o WCS solicita o fechamento e **bloqueia** novas alocações.
5. **Fechamento** (ver modos abaixo) → **leitura da etiqueta master (RG)** → o WCS envia ao WMS a integração com **todos os volumes** do pallet → **abre o próximo pallet / libera a posição PTL**.

## Telas e Funcionalidades

### Aloca Pallet (coletor Android / TV da rampa)
- **Comportamento:** agrupa volumes por rota/transportadora; o desvio no sorter **não** é obrigatório desde que os volumes estejam integrados e vinculados ao pallet.

### Fechamento de Pallet — modos
- **Automático (Físico/Cubagem):** peso/cubagem atinge o limite → fecha solicitando a leitura da etiqueta.
- **Lógico (Fim de transporte/pedido):** não há mais volumes previstos para aquela rota/cliente.
- **Manual (Forçado):** leitura do código da posição (ex.: **FPP001**) **3 vezes** → leitura da etiqueta **master (RG)**.

### Conferência Final de Palete (aditivo Automatize)
- **Comportamento:** valida via coletor se todos os volumes foram alocados; lê a posição (vinculada à loja) + etiqueta de cada volume; valida **loja de destino**, **etiquetas duplicadas** e **pallet correto**; volumes inválidos são bloqueados para tratativa.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O operador cadastra **cubagem (m³)** e **peso (kg)** máximos do pallet, além de valores de **segurança**. |
| RN-02 | Ao atingir a **cubagem/peso de segurança**, o WCS notifica (via LED/coletor) que o pallet se aproxima do limite. |
| RN-03 | Ao atingir o **limite** (ex.: 1 m³ ou 80% no Octopus), o WCS solicita o fechamento e **não permite** alocar volumes sobressalentes. |
| RN-04 | O cálculo de cubagem/peso usa as **dimensões e o peso dos volumes** (via integração do sorter ou Cadastro de Produtos). |
| RN-05 | **Fechamento manual:** ler o código da posição (ex.: FPP001) **3 vezes** + ler a etiqueta **master (RG)**. |
| RN-06 | Ao fechar, o WCS envia ao WMS a integração com **todos os volumes** do pallet e libera a posição para um novo. |
| RN-07 | A **impressão da etiqueta master** é responsabilidade da operação/WMS na maioria; em alguns projetos o WCS imprime na impressora dedicada do PTL (ex.: BR → Zebra ZT230). |
| RN-08 | O **desvio no sorter não é obrigatório** para paletizar, desde que os volumes estejam integrados e vinculados ao pallet. |
| RN-09 | **(Conferência final)** O sistema valida loja de destino, etiquetas duplicadas e pallet correto; bloqueia volumes que não pertencem ao destino. |
| RN-10 | **(CDSK)** O fechamento pode ocorrer de 4 formas: cubagem, peso, tela de fechamento (forçado) e diretamente nas rampas (forçado). |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I24.203 / I25.111** (Beta) | Cubagem + Aloca Pallet + Fechamento manual/automático com master (RG); coletor Android ou TV da rampa. |
| **I25.9022** (Octopus MS) | Cubagem de Pallet **e Routainer**; fechamento ao atingir **80%** de ocupação; notificação via LED. |
| **I25.3513** (CDSK) | Fechamento em **4 formas**; master impresso pelo WMS; "Pallet Montado" enviado ao WMS. |
| **I25.163** (Market Chile) | Modo **manual** (sem bloqueio) × **automático** por cubagem/peso; cálculo via Cadastro de Produtos. |
| **I25.4066** (NavePark) | Fechamento Automático/Lógico/Manual; imprime **Etiqueta Master**, cola no stretch e libera à doca. |
| **I25.4378** (BR) | Fechamento Automático/Lógico/Manual; WCS imprime master (Zebra ZT230) e integra com **WMS Spark**. |
| **I26 Mustard** | Gatilhos de fechamento Físico (cubagem) e Lógico (fim de pedido por rota/cliente). |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Sorter (integração de volumes)** | Recebimento | Fornece dimensões/peso dos volumes induzidos para o cálculo de cubagem. |
| **Cadastro de Produtos** | Recebimento | Fonte alternativa das dimensões/peso (Market Chile). |
| **WMS / WMS Spark** | Envio | Recebe a integração de fechamento com todos os volumes do pallet (Pallet Montado / expedição). |
| **PLC / TV da rampa** | Hardware | Sinalização e apoio à alocação na rampa. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Paletização / Aloca Pallet** | Agrupamento dos volumes desviados em pallets por rota/transportadora. |
| **Cubagem de Pallet** | Cálculo de ocupação volumétrica/peso do pallet contra limites cadastrados. |
| **Cubagem de segurança** | Valor que dispara a notificação de que o pallet se aproxima do limite. |
| **Etiqueta Master / RG** | Identificador único do pallet, lido no fechamento para rastreabilidade. |
| **Fechamento Físico / Lógico / Manual** | Encerramento por limite de cubagem-peso / por fim de volumes previstos / por ação do operador. |
| **Routainer** | Tipo de unidade de carga (além do pallet) com cubagem própria (Octopus). |
| **FPP001** | Exemplo de código de comando de fechamento de posição. |
| **Pallet Montado** | Mensagem enviada ao WMS com o conteúdo consolidado do pallet. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 74 seções*
