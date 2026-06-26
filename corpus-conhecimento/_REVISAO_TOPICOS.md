# Revisão de Tópicos — Fase 2

**Gerado em:** 2026-06-24 · **Origem:** consolidação dos desvios anotados nos 29 insights (síntese manual no chat).

Este relatório reúne os **desvios de roteamento** detectados durante a geração dos dossiês: seções que estavam no RAW de um tópico mas pertencem a outro, oportunidades de **novos tópicos**, **fusões** e **problemas de qualidade do roteador**. O tópico `integracao` (1081 seções) foi excluído desta análise por decisão do usuário.

---

## 1. Tópicos NOVOS criados nesta Fase 2

| Tópico | Bloco | Origem (desvios) | Status |
|--------|-------|------------------|--------|
| **checklist-carregamento** | `carregamento` (bloco novo) | conferencia-manual | ✅ Criado (RAW auto + DOSSIE + insights). Detectado pelo script. Cobertura mínima — reforçar fontes. |
| **cancelamento-pedidos** | `separacao` | put-to-wall, integracao-wcs-wms, integracao-wms-erp, cubagem, packing | ✅ Criado. Cluster grande e coerente (cenários por estágio, devolução, CATO, granular). |
| **cross-check** | `conferencia` | conferencia, sorter-rejeito, sorter-inducao | ✅ Criado. Conferência automática SKU×pedido no portal. |

> Os três foram adicionados ao `topicos.json` com `auto_detectado: true`. Os RAWs são **sintéticos** (montados das análises, não de re-extração) e marcados **REVISAR** — validar contra os documentos originais antes de considerar definitivos.

## 2. Tópico NOVO recomendado (NÃO criado — requer re-extração)

| Tópico sugerido | Bloco | Origem | Por quê |
|-----------------|-------|--------|---------|
| **logistica-reversa / flowhack** | `separacao` ou bloco novo `reversa` | picking-pbl, cadastros-acessos, sorter (projeto Reverse I22.2213) | Triagem reversa por MAC Address, FlowHack (baixo giro), anomalias, leitura por nota fiscal/QR. Processo distinto da separação de saída. **Fonte única (Reverse)** — não criei para não fabricar de fonte única; recomendo extração dedicada do RAW do Reverse. |

## 3. Realocações por tópico de origem (seções que pertencem a outro lugar)

### sorter-inducao → 
- **dashboards-relatorios:** Painel de Chutes, Relatório de Saturação das Rampas, Produtividade por balanças, Produtividade portal de leitura, Induzidos × desviados.
- **sorter-rejeito:** Rejeitos (BRF), Volumes Não Tratáveis, Tela de Rejeito (Diamante).
- **picking-cart:** Coleta de Múltiplos Volumes na Mesma Posição.
- **cubagem:** Box Cubo / Cubômetro (GALA).
- **order-start:** Objetivo do Controle (cadenciamento), Matriz de Fragilidade — Campos da Tela.

### ptm → (RAW muito contaminado)
- **sistema/infra:** ~20 seções "Estação de Supervisório" (supervisório SIEMENS, LED no painel) — **ruído dominante**.
- **put-to-wall:** "PTW – Put To Wall" (2 seções).
- **inventario/estoque:** Criação de Tarefa de Auditoria, Movimentação Forçada, Controle das posições de picking.
- **order-start/cadastros:** Gestão de Posto de Trabalho.
- **cadastros-acessos:** Operador com Múltiplas Rampas.
- **paletizacao/estoque:** Listagem de pallets, Gerenciamento de depósito padrão.
- **ptl-alocacao:** Layout de configuração / Operação atual (PTL Diamante).
- **etiquetas:** Tela com log de Reimpressão.

### put-to-wall →
- **cancelamento-pedidos** (✅ extraído): ~10 seções de Cancelamento de Pedidos/Missão/OT.
- **conferencia:** Posto Virtual C1/C2 (PMB).
- **etiquetas/order-start:** Etiqueta Virtual (FDBR).
- **dashboards-relatorios:** Relatório de Backlog de Separação, Exportação, Dashboard Rampa Cheia.

### packing →
- **shortpicking:** Análise de Corte (Flower, ×5), Corte de Coleta (BRF).
- **reabastecimento:** Repostaje / Solicitação de Reposição (Guatemala).
- **integracao:** Pedidos Sem Confirmação de Picking, Múltiplas Confirmações Pollux (Gemini), Tela gerar volumes Flag Automação/Manual (Zenatur).
- **order-start:** By-Pass Picking.
- **paletizacao/expedicao:** Abertura e fechamento de gaiola + integração "Ship" (Cancun).

### shortpicking →
- **conferencia:** Processo de Conferência, Categorias de Conferência, Conferencia–Checkout (Reisado), Registro de Divergências (CDSK).
- **etiquetas/conferencia:** Arquivos laudos (FDBR).
- **reabastecimento/estoque:** Posição de Compra de Palete Vazio (BRF).
- **sistema:** Alta disponibilidade (Octopus).

### integracao-cadastros →
- **separacao/picking-cart:** Separação Invent (Peter), Costas (Hydra), Coletor de Dados (FDBR).
- **expedicao/paletizacao:** RF6 Gestão de congestionamento, Saída de material (BRF).
- **estoque:** Considerações Finais (movimentação forçada), Abastecimento de Insumos AMR.
- **(ruído):** capas "[SEM TÍTULO]" do COUGAR (institucional).

### picking-pbl →
- **logistica-reversa:** FlowHack (Baixo Giro), Anomalias (Reverse).
- **integracao-cadastros:** Tela de endereços.
- **reabastecimento/estoque:** Limpeza de Canal de Buffer, Aplicação do FEFO (BRF).
- **picking-fullcase:** Conclusão da Remessa (Full Case + PTL).

### inventario / reabastecimento / cubagem / ptl-alocacao / sorter-rejeito → 
- Diversos (ver insights de cada tópico): Curva ABC/slotting (ptl-alocacao→estoque), Matriz de Fragilidade (cubagem↔paletizacao), KPIs/Rampa Cheia (→dashboards), Cadastro de impressoras (→cadastros), etc.

## 4. Fusões sugeridas

| Tópicos | Recomendação |
|---------|--------------|
| **packing-termolabil → packing** | packing-termolabil tem só ~1 seção de conteúdo próprio (etiqueta); o resto é separação por temperatura (desvio). Avaliar fundir em packing como uma seção, mantendo o tópico só se o material crescer. |
| **conferencia + packing + shortpicking** | Compartilham o mesmo fluxo de "fim de linha" (corte/tratativa/etiqueta). Não fundir, mas **ler em conjunto**; blocos de texto idênticos circulam entre os três. |
| **sorter + sorter-inducao + sorter-mapa-rota + sorter-rejeito** | `sorter` é guarda-chuva; os três sub-tópicos cobrem indução/mapa/rejeito. Manter separados, tratar `sorter` como índice + núcleo (equipamento/contingência/autoBilling). |
| **ptm + ptl-alocacao + paletizacao** | Três facetas da consolidação de saída (luz/monitor/cubagem). Considerar um subsistema comum; hoje há sobreposição de fechamento/master/cubagem. |

## 5. Problemas de qualidade do roteador (recomendações)

- **`ptm` severamente contaminado:** maioria das seções não é Put-To-Monitor (supervisório, PTW, auditoria). Reclassificar com urgência.
- **"Estação de Supervisório" sem tópico-destino:** ~20+ seções idênticas (SIEMENS/LED) precisam de um tópico de **infraestrutura/hardware** que não existe. Sugerir bloco `sistema/infraestrutura`.
- **Capas institucionais como seção:** "[SEM TÍTULO]" (COUGAR "Por que Invent?") são capas de documento — deveriam ser descartadas na extração.
- **Duplicação por revisões:** muitos RAWs inflam a contagem com o mesmo texto em várias revisões do mesmo projeto (BP, Eletro, Cristal, BRF). A contagem de seções **não** reflete volume de conteúdo único.
- **Layouts/imagens ausentes:** tópicos visuais (etiquetas, dashboards, telas) perderam as imagens na extração — lacuna transversal.

## 6. Próximos passos sugeridos

1. **Validar os 3 novos tópicos** contra os documentos originais (os RAWs são sintéticos/REVISAR).
2. **Extrair `logistica-reversa`** do projeto Reverse (fonte única, não fabricado aqui).
3. **Reclassificar `ptm`** e criar um tópico/bloco de **infraestrutura** para o supervisório.
4. **Re-rotear** as seções listadas na seção 3 para seus tópicos corretos (idealmente no `reclassifier.py`).
5. **Avaliar a fusão** packing-termolabil → packing.
6. Quando houver orçamento de API, rodar o `sintetizador.py` para reprocessar os tópicos afetados pelas realocações.

---
*Relatório gerado na Fase 2 · síntese manual · base: insights dos 29 dossiês.*
