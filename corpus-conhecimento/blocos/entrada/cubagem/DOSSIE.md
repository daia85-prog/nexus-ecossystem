# cubagem — Dossiê Técnico

**Bloco:** entrada | **Tópico:** cubagem
**Seções analisadas:** 120 | **Fonte:** análise direta do RAW (chat)

## Visão Geral

A **Cubagem** é o cálculo do **volume total dos itens** de um pedido/missão para determinar **quantas e quais caixas** são necessárias para a separação. É a base do dimensionamento de volumes do WCS: a partir das dimensões e peso dos produtos (do cadastro), o sistema gera os volumes, sugere a caixa e imprime as etiquetas.

A **responsabilidade** pelo cálculo varia: **WCS** (Flower, FDBR, Beta, Beleza, NavePark) ou **WMS** (Peter, Master). E há três modelos de seleção de caixa: **caixa plástica padrão única**, **seleção automática da melhor caixa** entre tipos cadastrados, e **algoritmo tridimensional** que calcula a quantidade ideal de caixas.

## Fluxo do Processo

1. O WCS (ou WMS) recebe os **itens do pedido** (Linha × SKU × Quantidade) com **dimensões e peso** (do cadastro de produtos/embalagens).
2. Calcula a **cubagem total** e determina os **volumes** e a **caixa** de cada volume.
3. No **Order Start**, informa quantas caixas e tamanhos são necessários; o operador imprime e fixa as etiquetas.
4. Os itens são separados na **caixa plástica** (padronizada para o picking); na **conferência/packing**, há a **cubagem de expedição** (transbordo para a caixa de papelão).

## Modelos de Cubagem

| Modelo | Como funciona | Projetos |
|--------|---------------|----------|
| **Caixa plástica padrão única** | O WCS aloca o volume sempre na mesma caixa padrão (sem escolher tipo). | FDBR, Beleza |
| **Seleção automática da melhor caixa** | O WCS escolhe entre os tipos de caixa cadastrados a mais adequada à missão. | Beta, Beta-Esteio |
| **Algoritmo tridimensional** | Recebe itens soltos e calcula a quantidade ideal de caixas de transporte. | NavePark |
| **Cubagem pelo WMS** | O WMS calcula e define caixas/volumes; o WCS apenas executa. | Peter, Master |

## Telas e Funcionalidades

### Validação de Dimensões e Cubagem (parâmetro — Beta)
- **Ativo:** valida se alguma dimensão do item/missão (A/L/C) **excede** a caixa, além da cubagem total (m³); se exceder, seleciona **caixa alternativa** compatível.
- **Inativo:** considera **exclusivamente** a cubagem total (m³), ignorando as dimensões individuais.

### Cubagem de Caixas de Expedição (FDBR)
- **Comportamento:** define o melhor **transbordo** da caixa plástica (picking) para a caixa de papelão (packing), buscando alocar tudo em **uma única caixa**; quando há **laudo por volume**, considera a relação **1:1** com a caixa plástica.

### Consolidação Multi / Galeia (Flower)
- **Comportamento:** pedidos com poucos itens (abaixo da **ocupação mínima**) são agrupados na mesma caixa (**galeia**) e separados no **PTW** (método multi), **se** houver posição disponível no PTW; parâmetro de **ocupação máxima** evita compactação excessiva (não 100%).

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | A cubagem usa **dimensões e peso** dos produtos (cadastro) para gerar volumes e definir caixas. |
| RN-02 | A **responsabilidade** pelo cálculo é do **WCS** ou do **WMS**, conforme o projeto. |
| RN-03 | **(Validação dimensional ativa)** Se uma dimensão (A/L/C) excede a caixa, o WCS troca por uma **caixa alternativa**; **inativa**, considera só a cubagem m³. |
| RN-04 | **(Flower)** Pedidos abaixo da **ocupação mínima** são **consolidados** em galeia (multi) e separados no PTW — só se houver posição no PTW. |
| RN-05 | **(Flower)** A **ocupação máxima** não deve ser 100% (evita compactação que comprometa produtos/manuseio). |
| RN-06 | **(Flower — inconformes)** Item é alocável a um carrinho se **2 dimensões** couberem; a 3ª excedente é **capada** (maior dimensão do carrinho) para o cálculo. |
| RN-07 | **(FDBR)** Na expedição, o WCS busca **transbordo para uma única caixa de papelão**; com laudo por volume, mantém **1:1** com a caixa plástica. |
| RN-08 | **(Master)** Produtos de **famílias diferentes** (higiene/alimentício/hospitalar) **não** podem ir na mesma caixa; o WMS segrega em volumes distintos. |
| RN-09 | Cada caixa deve ter **apenas um código de barras visível** para leitura correta no sorter. |
| RN-10 | **(NavePark — Matriz de Fragilidade)** Algoritmo de cubagem graduado **1 a 9** (9 = pesado/base, 1 = leve/topo); o Velox solicita os pallets na **matriz decrescente** para montar a base sólida primeiro; a matriz da **integração de pedidos** sobrescreve a do cadastro. |
| RN-11 | A etiqueta de picking traz produto/quantidade/lotes da cubagem + **código da caixa sugerida** + DataMatrix do volume. |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) | Cubagem pelo WCS; consolidação multi/galeia no PTW; cubagem de carrinhos inconformes (C1–C4) com regra de capar dimensão. |
| **I23.1412** (FDBR) | Caixa plástica padrão única no picking; cubagem de **caixas de expedição** (transbordo otimizado, 1:1 com laudo). |
| **I24.203 / I25.136** (Beta) | **Seleção automática** da melhor caixa; parâmetro de validação dimensional ativo/inativo. |
| **I25.9043** (Beleza) | Caixa plástica padrão única (medidas cadastradas pelo cliente). |
| **I23.3502** (Peter) / **I23.3502 Master** | Cubagem pelo **WMS**; WCS recebe volumes prontos; caixa = embalagem final; segregação por família. |
| **I25.4066** (NavePark) | WCS detém a cubagem com **algoritmo tridimensional**; **Matriz de Fragilidade 1–9** ordenando a montagem do pallet. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **WMS** | Recebimento | Envia itens do pedido (e, em alguns projetos, a cubagem já pronta + caixas + matriz de fragilidade). |
| **Cadastro de produtos e embalagens** | Recebimento | Fornece dimensões, peso e cubagem por embalagem (ver [[integracao-cadastros]]). |
| **Order Start** | Saída | Recebe a definição de quantas caixas/tamanhos imprimir. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **Cubagem** | Cálculo do volume dos itens para dimensionar caixas e volumes. |
| **Galeia** | Caixa que consolida múltiplos pedidos pequenos (método multi). |
| **Ocupação mínima/máxima** | Parâmetros que regem a consolidação e o limite de preenchimento da caixa. |
| **Caixa plástica padrão** | Caixa única usada no picking, trocada por caixa de papelão na expedição. |
| **Transbordo** | Transferência otimizada dos itens da caixa plástica para a de expedição. |
| **Validação dimensional** | Parâmetro que checa dimensões individuais (A/L/C) além da cubagem m³. |
| **Matriz de Fragilidade (1–9)** | Escala de densidade que ordena a montagem do pallet (pesado→leve). |
| **Item inconforme** | Item fora do padrão da esteira, cubado em carrinhos com regra de capar dimensão. |
| **DataMatrix do volume** | Código lido pelo operador para separar os itens alocados ao volume. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 120 seções*
