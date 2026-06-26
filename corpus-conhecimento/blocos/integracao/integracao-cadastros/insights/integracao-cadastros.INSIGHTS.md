# integracao-cadastros — Insights

## Padrões Identificados

- **Produto (POST) é o contrato-rei:** quase metade das seções é alguma variante de "Produto (POST) WMS→WCS". Em todos, o WCS aceita cadastro por integração **e** edição manual pelo operador — padrão consistente de "integração com override manual".
- **Tela Endereço congelada no tempo:** o projeto I21.177 repete a mesma especificação de tela Endereço em ~10 revisões, todas idênticas (Número Endereço, Tipo, Posto, Concentrador, LED). Estabilidade total.
- **Rebranding Invent → Velox visível no cadastro:** os payloads antigos dizem "WCS"; o "BELEZA_Escopo" (2025) já usa "WMS→VELOX" e "cadastrar no Velox". Mesma evolução de nome vista em [[sorter-inducao]].
- **Cubagem nasce no cadastro:** dimensões, peso e `cubagem_m3` por embalagem vêm desta integração — é a fonte de dados de [[cubagem]].

## Variações Significativas

- **Três formatos incompatíveis de Produto (POST):**
  - **FDBR:** lista achatada em inglês (`sku/ean/length/packingQty`), regra de full case por cápsula.
  - **BP:** arrays para multi-embalagem (`comprimento[]`, `qtdMinimaposicaoPicking[]`) + flags (`refrigerado`, `ptlExclusivo`, `excecao`).
  - **Beleza:** hierarquia mercadológica completa (`div/dept/subDept/class/classCod`) + limites de estoque.
  Implementar exige mapeamento por cliente; não há contrato único.
- **Caso "sem integração" (I21.131):** cadastro 100% manual no MFC e SAP — extremo oposto dos demais, importante para não assumir que a integração sempre existe.
- **Conversão para Full Case tem dois gatilhos:** por **quantidade** (packingQty) ou por **cubagem** (metragem cúbica), dependendo da revisão do FDBR.
- **PTL Pollux × Vênus:** duas controladoras com APIs semelhantes mas distintas (Vênus tem cadastro de lotes/batch; Pollux não aparece com batch). Atributos de transportadora incluem rotas IATA (operação aérea?).

## Lacunas e Inconsistências

- **JSONs com erros de sintaxe:** vírgulas finais sobrando (`"unit": "string",`), aspas com espaços (`" products "`), `"tipo": "Aerosol"` sem vírgula, `tipo_codigo` "DUN" vs "DUN14". Os exemplos não são válidos para parse direto.
- **Capas de documento viraram seção:** duas seções "[SEM TÍTULO]" do COUGAR são apenas a **capa institucional** ("Por que Invent?") — ruído puro, devem ser descartadas.
- **Seções de processo roteadas para cá (candidatos a desvio/Fase 2):**
  - **separacao / picking-cart:** "Separação Invent" (Peter), "Costas" (Hydra), "Coletor de Dados" (FDBR).
  - **expedicao / paletizacao:** "RF6 Gestão de congestionamento", "Saída de material" (BRF).
  - **estoque:** "Considerações Finais" (movimentação forçada), "Abastecimento de Insumos AMR" (NavePark).
  - **dashboards-relatorios:** "Relatório Pedido x CX Plástica", "Visibilidade da Categoria do Produto".
- **Imagens ausentes:** tela Endereço e Gerenciamento de Faixas referenciam "figura"/"imagem abaixo" não capturadas.

## Inferências

- **Inferência:** O modelo de cadastro de produto deve ser desenhado como um **superset flexível** (campos opcionais), pois cada cliente envia um subconjunto diferente de atributos.
  - **Confiabilidade:** alta
  - **Base:** os três formatos observados (FDBR/BP/Beleza) divergem fortemente em campos e cardinalidade.

- **Inferência:** A regra de full case por cápsula (FDBR) é específica de farma/cápsulas e não deve ser generalizada para outros segmentos.
  - **Confiabilidade:** média
  - **Base:** a condição "só quando categoria = cápsulas" é explícita e aparece apenas no FDBR.

- **Inferência:** O `fator_conversao` e a `cubagem_m3` por embalagem são pré-requisito para os tópicos [[cubagem]] e decisão de Full Case; sem cadastro completo, esses processos degradam.
  - **Confiabilidade:** alta
  - **Base:** o próprio cadastro de embalagens declara que serve para "cálculo de cubagem e regras operacionais".

---
*Gerado em 2026-06-24*
