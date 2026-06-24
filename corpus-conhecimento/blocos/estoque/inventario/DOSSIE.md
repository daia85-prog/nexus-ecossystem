# inventario — Dossiê Técnico

**Bloco:** estoque | **Tópico:** inventario
**Seções analisadas:** 56 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

O **Inventário/Auditoria de Estoque** garante a precisão das informações de estoque mantidas pelo WCS, confrontando a **contagem física** com o **saldo sistêmico** e gerando, ao final, uma **integração de ajuste** para o WMS com o *delta* de divergência.

O corpus revela **duas gerações de design**:

1. **Auditoria de Estoque** (projeto BP — I24.215): três modalidades — **Total**, **Parcial** e **Posições Vazias**. Divergência gera uma **tarefa de Ocorrência** para um segundo operador validar.
2. **Inventário de Estoque** (NavePark — I25.4066, e Beleza/Formulário — I25.9043): modalidades **Total** e **Cíclico**, com **contagem cega**, divisão do trabalho entre operadores, **até 3 contagens oficiais** (recontagem dos divergentes) e validação final direcionada. É a evolução mais robusta e auditável.

## Fluxo do Processo

### Geração 1 — Auditoria de Estoque (BP)
1. Operador loga no coletor Android e acessa a tela de auditoria.
2. Escolhe a modalidade: **Total** (todas as posições com itens), **Parcial** (itens/postos/endereços selecionados) ou **Endereços Vazios**.
3. Lê a posição → lê o **SKU** dos itens → conta a quantidade real → registra.
4. **Divergência →** o WCS cria uma **tarefa de Ocorrência** para um 2º operador validar.
5. Ao concluir, gera **relatório** das quantidades auditadas e endereços (com opção de impressão).

### Geração 2 — Inventário de Estoque (NavePark / Beleza)
1. **Supervisor** cria a tarefa de inventário (obrigatório) e define:
   - **Regra de bipagem:** bipar item a item **ou** informar a quantidade e bipar o item uma única vez;
   - **Número de operadores** → o WCS divide o inventário em **seções** distribuídas entre eles.
2. **1ª contagem (cega):** operador lê endereço → lê SKUs presentes → informa quantidade. O WCS **não exibe** SKU esperado nem saldo sistêmico (para não induzir). Posição vazia: **bipar o endereço 3 vezes**.
3. **Relatório de conciliação** (físico × sistêmico), com impressão e exportação em **Excel/PDF**.
4. **2ª contagem (recontagem):** somente endereços divergentes da 1ª.
5. **3ª contagem (última oficial):** somente os que permaneceram divergentes.
6. **Validação final direcionada (opcional):** o supervisor escolhe endereços específicos para auditoria adicional.
7. **Relatório consolidado:** resultados das 3 contagens (+ validação), endereços, **operadores responsáveis** por contagem e divergência consolidada.
8. **Aceite do supervisor →** o WCS envia ao WMS a **integração de ajuste** com o *delta* (físico − sistêmico).

> **Inventário Cíclico — regra de escopo:** se um endereço específico é selecionado, o sistema audita apenas a posição onde o processo iniciou; para as demais posições do mesmo item, considera o **saldo sistêmico atual** no envio do ajuste.

## Telas e Funcionalidades

### Tela de Auditoria (coletor Android — BP)
- **Abas:** Auditoria Total, Auditoria Parcial, Auditoria de Endereços Vazios.
- **Parcial:** lista itens/postos/endereços exibindo a **curva** do item, **data da última movimentação** e **última data de auditoria**, com busca. **Comportamento:** leitura de endereço + SKU + contagem; divergência gera ocorrência.

### Tela de Inventário de Estoque (coletor Android — NavePark/Beleza)
- **Abas:** Inventário Total, Inventário Cíclico.
- **Comportamento:** seleciona a auditoria criada pelo supervisor; contagem cega; controle de múltiplas contagens com pop-up de confirmação entre etapas.

### Tela de Relatório / Encerramento do Inventário
- **Comportamento:** exibe conciliação por contagem; permite imprimir e exportar (Excel/PDF); botão para o supervisor **aceitar/confirmar** e disparar o ajuste ao WMS.

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O objetivo é garantir a precisão do estoque comparando contagem física × saldo sistêmico. |
| RN-02 | **(BP)** Divergência na auditoria gera **tarefa de Ocorrência** para um segundo operador validar. |
| RN-03 | **(NavePark/Beleza)** A tarefa de inventário **só** pode ser criada por usuário com perfil de **supervisor**. |
| RN-04 | **Contagem cega:** o WCS não deve exibir SKU esperado nem quantidade sistêmica durante a contagem, para não induzir o operador. |
| RN-05 | **Posição vazia (geração 2):** bipar o endereço **3 vezes** para o sistema confirmar o aviso de posição vazia. |
| RN-06 | **Posição vazia (geração 1):** confirmar "Endereço Vazio" e reler o código do endereço para validar. |
| RN-07 | **Regra de bipagem (geração 2):** bipar item a item **ou** informar a quantidade e bipar o item uma única vez (escolha do supervisor). |
| RN-08 | O supervisor informa **quantos operadores** participarão; o WCS divide o inventário em **seções**. |
| RN-09 | **Recontagem incremental:** a 2ª contagem cobre só os endereços divergentes da 1ª; a 3ª, só os ainda divergentes após a 2ª. |
| RN-10 | A **3ª contagem** é a última oficial; após ela, o supervisor pode solicitar **validação final direcionada** em endereços específicos. |
| RN-11 | O ajuste só é enviado ao WMS após o **aceite/confirmação do supervisor**, contendo o **delta** (físico − sistêmico). |
| RN-12 | **Cíclico com endereço selecionado:** audita apenas a posição iniciada; demais posições do item usam o saldo sistêmico no ajuste. |
| RN-13 | O relatório consolidado deve registrar, no mínimo, resultados de cada contagem, endereços, **operadores responsáveis** e divergência consolidada. |
| RN-14 | Relatórios devem permitir impressão e exportação em **Excel e PDF**. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I24.215** (BP, 3 revisões) | **Auditoria de Estoque** com Total/Parcial/Posições Vazias; divergência → tarefa de Ocorrência validada por 2º operador; relatório imprimível. |
| **I25.4066** (NavePark) | **Inventário Total e Cíclico** com contagem cega, divisão por operadores, 1ª/2ª/3ª contagem, validação final, ajuste ao WMS com delta. |
| **I25.9043** (Beleza) | Auditoria exige criação prévia por **supervisor**; aditivo "Inventário – Formulário" replica o fluxo Total/Cíclico do NavePark (com nota de autor "Saldo Sistêmico pré-contagem"). |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **WMS** | Envio | Recebe a **integração de ajuste de inventário** com o delta de divergência (físico − sistêmico), após o aceite do supervisor. |
| **Tarefa de Ocorrência** | Interna (WCS) | Gerada na geração 1 quando há divergência; encaminhada a um 2º operador para validação. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Auditoria / Inventário de Estoque** | Processo de contagem física confrontada com o saldo sistêmico para garantir a acuracidade do estoque. |
| **Auditoria Total** | Verificação de todas as posições com itens alocados. |
| **Auditoria Parcial / Inventário Cíclico** | Verificação de itens, postos ou endereços selecionados. |
| **Auditoria de Posições Vazias** | Verificação de que endereços sem itens estão corretamente marcados como vazios. |
| **Contagem Cega** | Modo em que o sistema oculta SKU esperado e saldo sistêmico para não induzir a contagem. |
| **Tarefa de Ocorrência** | Tarefa criada na divergência (geração BP) para revalidação por um segundo operador. |
| **Conciliação** | Relatório que compara o resultado da contagem física com o saldo registrado no sistema. |
| **Validação Final Direcionada** | Auditoria adicional opcional, pós-3ª contagem, em endereços escolhidos pelo supervisor. |
| **Delta / Ajuste** | Diferença entre estoque físico e sistêmico, enviada ao WMS na integração de ajuste. |
| **Curva** | Classificação (curva ABC) do item, exibida na seleção da auditoria parcial. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 56 seções*
