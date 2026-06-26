# sorter-inducao — Insights

## Padrões Identificados

- **"Integrar antes de induzir" é lei universal:** ao menos 8 projetos (Octopus, Market Peru, Market Chile, DIA, Consinco, Flower, Beta-Esteio, NSR) repetem quase literalmente que o volume precisa estar integrado no WCS/Velox antes da leitura no portal. É o invariante mais forte do tópico.
- **Bloco de arquitetura reutilizado:** o parágrafo "Para o correto funcionamento da automação, é necessária uma aplicação responsável pelo gerenciamento das informações dos volumes triados..." aparece idêntico em BP (4 revisões), Flower e Peter — texto-padrão de proposta (DB dedicado, interface Web HTTPS, Chrome).
- **Full Case sem código legível é recorrente:** o projeto Maravilha repete em 6+ revisões que a etiqueta Full Case não tem código de barras lível no portal e precisa ser readequada pelo cliente — risco operacional conhecido.
- **Decisão de desvio é sempre do WCS:** em todos os cenários, o WCS valida e comanda o CLP/PLC; o hardware apenas executa.

## Variações Significativas

- **Renomeação Invent → Velox:** projetos mais antigos (2021–2024) dizem "sistema WCS"/"WCS Invent"; projetos de 2025–2026 (Market Peru/Chile, DIA, Titano) dizem "Velox". Indício de rebranding do produto.
- **Identificação arqueável por software (Promofarma):** caso único em que o desvio é forçado por característica física do volume (`tipo_volume`), sobrepondo a rota do pedido — regra de segurança da arqueadora.
- **Aptidão ao WMS/Reply (Titano):** introduz uma confirmação síncrona pós-leitura que os demais projetos não têm.
- **Capacidades e topologias divergem:** Esperança cita 6.000 vol/h e rampas esquerda/direita; ST cita 40 bicas; Esperança (outro aditivo) cita 20 chutes. Cada cliente tem layout próprio.

## Lacunas e Inconsistências

- **Conteúdo de outros tópicos roteado para cá (candidatos a desvio/Fase 2):**
  - **dashboards-relatorios:** "Painel de Chutes", "Relatório de Saturação das Rampas", "Produtividade por balanças", "Produtividade portal de leitura", "Induzidos x desviados" (todos do bloco de relatórios/dashboards).
  - **sorter-rejeito:** "Rejeitos" (BRF), "Volumes Não Tratáveis", "Tela de Rejeito" (Diamante).
  - **picking-cart:** "Coleta de Múltiplos Volumes na Mesma Posição" (Beta-Esteio e aditivo Beta).
  - **cubagem:** "Alterações na Box Cubo / Cubômetro" (GALA).
  - **order-start / cadenciamento:** "Objetivo do Controle" (distribuição balanceada entre rampas) e "Matriz de Fragilidade — Campos da Tela".
  - **conferencia/sorter:** "Conferência de Pallets" (timer ACKN) e "Monitoramento de Leitura nas Bicas" (ST) — tratam de conferência pós-desvio, não de indução.
- **Imagens ausentes:** várias seções terminam em "Exemplo de caixa com mais de um código de barras:" / "Conforme a imagem acima" — as imagens não foram capturadas no RAW.
- **Dependência de hardware de terceiros:** o caso Diamante depende de avaliação da Toledo sobre a capacidade do equipamento ler o lote — pendência externa não resolvida na especificação.

## Inferências

- **Inferência:** A regra de leitura/desvio é independente do cliente; o que varia é o **mapa do sorter** e a topologia (rampas/bicas/chutes). A implementação deve parametrizar topologia, não recodificar o fluxo.
  - **Confiabilidade:** alta
  - **Base:** o fluxo "integrar → ler portal → validar mapa → acionar CLP" é idêntico entre projetos; só mudam números de rampas/capacidade.

- **Inferência:** O tópico `sorter-inducao` ficaria mais limpo movendo ~10 seções de relatórios/rejeito para seus blocos corretos, restando ~15 seções genuínas de indução.
  - **Confiabilidade:** alta
  - **Base:** as seções de dashboard/rejeito têm heading e conteúdo explicitamente de outro domínio.

- **Inferência:** A "aptidão ao WMS" (Titano) tende a virar padrão onde o WMS precisa de validação em tempo real antes do desvio, especialmente em operações com bloqueio de lote/validade.
  - **Confiabilidade:** baixa
  - **Base:** aparece em um único projeto; é uma extrapolação de tendência, não um padrão observado.

---
*Gerado em 2026-06-24*
