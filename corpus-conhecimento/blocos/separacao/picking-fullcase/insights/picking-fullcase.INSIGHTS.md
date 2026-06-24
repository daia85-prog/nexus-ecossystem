# picking-fullcase — Insights

## Padrões Identificados

- **Dois modelos irreconciliáveis sob o mesmo nome:** "Full Case" significa coisas diferentes. No modelo Invent há Order Start, coleta guiada e Picking Confirm; no modelo Cliente não há nada disso — só integração + desvio. Confundir os dois na implementação quebra o fluxo.
- **Texto-base de coleta altamente replicado:** o parágrafo "Após a realização do Order Start Full Case... operador se desloca até a rua selecionada" aparece quase idêntico em 8+ projetos (Flower, BP ×3, Beta, FOX, Dolce Gusto). É o bloco canônico do tópico.
- **"Etiqueta na face superior" é regra universal do modelo Cliente:** todos os projetos de caixa fechada exigem a etiqueta no topo para leitura no portal — requisito físico inegociável.
- **Corte sempre via leitura das etiquetas não coletadas:** o mecanismo "Finalizar Coleta → ler o que não foi pego → cortar" é consistente entre projetos.

## Variações Significativas

- **Confirmação por produto vs por DUN+quantidade:** o modelo clássico lê o produto uma vez por unidade; o modelo Beta lê o DUN uma vez e informa quantidade (com possibilidade de reduzir). Diferença relevante de UX e de contagem.
- **Lista unificada Full Case + Reabastecimento (Beta):** inovação que trata os dois como a mesma coleta, separando só na destinação pós-indução — não existe nos projetos mais antigos.
- **Full Case nas "costas" (NavePark):** introduz Full Case fora da esteira dedicada, em posições de picking — 1 SKU auto-empilhado por posição, sem diferenciação de tamanho. Caso atípico.
- **Order Start orientado por impressora (Automatize):** a ordenação da coleta (crescente/decrescente) é uma propriedade da impressora do posto — acoplamento incomum entre hardware de impressão e roteirização.
- **Restrição a Cápsulas (FDBR):** único projeto que limita Full Case a um grupo de produto específico.

## Lacunas e Inconsistências

- **Layouts de etiqueta ausentes:** "Picking Fullcase e Exceção", "Picking Fullcase Perigoso" e "Etiqueta Picking Full Case" referenciam layouts/imagens não capturados no RAW.
- **Responsabilidade do cliente recorrente:** separação, impressão e fixação de etiqueta no modelo Cliente são "responsabilidade do cliente" — fronteira de escopo que precisa ficar explícita em cada projeto.
- **Seções de outros tópicos roteadas para cá (candidatos a desvio/Fase 2):**
  - **picking-cart / separacao:** "Separações" e "Separação Invent" (Peter), "Estações de Separação" (BIZ), "Separação (Coleta)" PBL (BRF).
  - **order-start / picking-cart:** "Picking Túnel" (TOTE/cubagem — Virtual, NavePark).
  - **conferencia:** "Conferência e Fechamento das Caixas" (Toca da Raposa).
  - **dashboards-relatorios:** "Conceito – Picking Full Case e Tarefas" (dashboard de previsão Esperança).
  - **order-start:** "Produtos de Curva A/B/C" (Automatize — desvio por posto).
- **Numeração de tópicos órfã:** referências a "tópico 7.7", "7.11", "seção 8.2" (Skip Zone) apontam para seções de outros documentos não presentes aqui.

## Inferências

- **Inferência:** A implementação deve tratar "Full Case" como dois fluxos distintos selecionados por um flag de origem (separação interna × cliente), não como um fluxo com exceções.
  - **Confiabilidade:** alta
  - **Base:** a ausência de Order Start e Picking Confirm no modelo Cliente é estrutural e repetida em vários projetos.

- **Inferência:** O modelo de lista unificada Full Case + Reabastecimento (Beta) tende a se espalhar, por reduzir deslocamento do operador.
  - **Confiabilidade:** média
  - **Base:** aparece nos projetos Beta mais recentes (2025–2026) com justificativa explícita de eficiência; ausente nos antigos.

- **Inferência:** A coleta Full Case depende fortemente do cadastro de embalagens (DUN, quantidade padrão, cubagem) descrito em [[integracao-cadastros]].
  - **Confiabilidade:** alta
  - **Base:** as regras de "atingir a embalagem padrão" e "leitura do DUN" só funcionam com o cadastro de embalagem completo.

---
*Gerado em 2026-06-24*
