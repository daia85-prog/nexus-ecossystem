# cross-check — Insights

## Padrões Identificados

- **Conferência sem operador:** o Cross-Check é a automação da conferência — valida no portal o que a estação manual faria item a item. Tendência clara de reduzir toque humano.
- **Duas verificações sempre:** destino (etiquetaOp→pedido) + conteúdo (SKU→nota). Estrutura idêntica entre Eletro e Beta.
- **Falha vira rejeito rastreável:** "Produto Incorreto / SKU Divergente" é o motivo padrão que liga Cross-Check a [[sorter-rejeito]].
- **Inativável:** em todos os projetos a função pode ser desligada — não é obrigatória.

## Variações Significativas

- **SKU × DUN/EAN:** Eletro usa SKU/código interno; Beta usa DUN/EAN. O identificador cruzado muda por projeto.
- **Exclusivo de Full Case (Beta):** restringe o Cross-Check ao modelo FULLCASE — em fracionado a conferência é outra.
- **IA com câmera de topo (CDSK):** evolução que dispensa leitura lateral mas exige etiqueta no topo; adiciona registro de "Suspeita de Divergência" para KPI.

## Lacunas e Inconsistências

- **Conteúdo sintetizado, não re-extraído:** o RAW foi montado das análises de [[conferencia]] e [[sorter-rejeito]]; validar contra os documentos originais.
- **Fronteira com [[conferencia]] e [[sorter-rejeito]]:** o Cross-Check é citado nos três; este tópico centraliza o conceito, mas as referências cruzadas devem ser mantidas.
- **Imagens ausentes:** layouts de câmera/portal e exemplos não capturados.

## Inferências

- **Inferência:** O Cross-Check é o "gate de qualidade automático" do sorter — desloca a conferência da estação para o portal, reservando o humano para exceções.
  - **Confiabilidade:** alta
  - **Base:** sucesso → segue; falha → rejeito; a conferência manual só trata o que cai no rejeito.

- **Inferência:** Cross-Check depende criticamente da integração de pedidos trazer os itens esperados corretos — sem isso, todo volume vira "SKU Divergente" (falso positivo).
  - **Confiabilidade:** alta
  - **Base:** a verificação 2 cruza contra "itens que deveriam compor o pedido", vindos da integração.

- **Inferência:** A versão IA (câmera de topo) tende a substituir a leitura multi-face onde a etiquetagem superior é viável — menos hardware, mais dependência de padronização da etiqueta.
  - **Confiabilidade:** média
  - **Base:** CDSK adota topo + IA; exige etiqueta superior padronizada (mesma exigência vista em [[etiquetas]]/[[sorter-inducao]]).

---
*Gerado em 2026-06-24 · auto-detectado na Fase 2*
