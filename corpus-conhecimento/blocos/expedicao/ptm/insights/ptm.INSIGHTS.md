# ptm — Insights

## Padrões Identificados

- **PTM = guiar por cor:** o conceito central, repetido entre Heart, Gala, Promofarma e Automatize, é o monitor que indica a posição do pallet por cor, espelhando marcações físicas no chão. O scanner valida; a TV orienta.
- **Ciclo Abertura → Alocação → Fechamento:** todos os projetos seguem essa tríade; só muda o gatilho do fechamento e o critério de vínculo.
- **Vínculo dirigido pela transportadora/rota:** a posição PTM quase sempre representa uma transportadora/rota/loja — o PTM é, no fundo, uma consolidação por destino de expedição.
- **Liberação acoplada à capacidade:** Gala e Beta condicionam a liberação de pedidos à existência de PTM livre, com fila FIFO — o PTM funciona como recurso limitado que regula o ritmo da separação.

## Variações Significativas

- **Fechamento tem 2 ou 3 cenários:** Gala usa manual + automático; Master adiciona o **forçado** (por cubagem/peso). Implementar deve suportar os três.
- **Segregação por tipo de volume (Promofarma):** caso único que proíbe misturar full case e fracionado no mesmo pallet, dobrando as posições por loja.
- **Capacidade muito variável:** Heart abre até 16 pallets/saída; Gala trabalha com 4–8 posições por transportadora; Automatize com 10 posições/rua. Parametrização obrigatória.
- **Wild Fork é outro animal:** o "PTP" com safety lock por matriz de fragilidade (pesado→leve) é conceitualmente diferente do PTM por transportadora — pode merecer tópico próprio se o material crescer.
- **Obrigatoriedade de leitura do pallet é parametrizável (Gala):** alguns clientes exigem confirmar a posição lendo o pallet; outros não.

## Lacunas e Inconsistências

- **RAW severamente contaminado — candidatos a desvio/Fase 2:**
  - **sistema / hardware:** ~20 seções "Estação de Supervisório" (supervisório SIEMENS, LED no painel) — ruído dominante, nada têm de PTM.
  - **put-to-wall:** duas seções "PTW – Put To Wall" (40 posições) — pertencem ao tópico [[put-to-wall]].
  - **estoque / inventario:** "Criação da Tarefa de Auditoria", "Movimentação Forçada", "Controle das posições de picking".
  - **order-start / cadastros:** "Gestão de Posto de Trabalho" (BRF), "Edição de Categorias".
  - **cadastros-acessos:** "Operador com Múltiplas Rampas".
  - **paletizacao / estoque:** "Listagem de pallets", "Gerenciamento de depósito padrão" (BRF).
  - **ptl-alocacao:** "Layout de configuração" e "Operação atual" (PTL Diamante).
  - **etiquetas:** "Tela com log de Reimpressão", contingência/reimpressão.
- **2ª via de etiqueta de PTM não existe (Heart):** se a etiqueta da posição danifica, não há rotina de reemissão — lacuna operacional reconhecida.
- **PTM × PTL × PTW confundidos:** o próprio material de I24.101 anexa o "Descritivo Fluxo Sorter" do PTL "só para entendimento", alertando que PTL não está no escopo — sinal de que os três conceitos se misturam na documentação-fonte.
- **Imagens/telas ausentes:** "Segue esboços da tela", "PTP Screen Example", "Tela exemplo" não capturados.

## Inferências

- **Inferência:** PTM, PTL e PTW são três estratégias do mesmo problema (consolidar volumes por destino) e provavelmente compartilham boa parte do motor de alocação no Velox.
  - **Confiabilidade:** média
  - **Base:** o próprio material de Gala afirma que "o conceito de PTL é muito semelhante ao PTM"; diferem no dispositivo de sinalização (monitor × luz × parede).

- **Inferência:** O vínculo automático pedido↔PTM pelo portal do sorter é o modelo preferencial; a inserção manual é exceção para priorização.
  - **Confiabilidade:** alta
  - **Base:** a maioria dos projetos descreve o vínculo automático como fluxo principal; o manual aparece como recurso de prioridade máxima.

- **Inferência:** A contaminação massiva por "Estação de Supervisório" sugere falha do roteador na classificação — essas seções deveriam ter ido para um tópico de infraestrutura/hardware inexistente.
  - **Confiabilidade:** alta
  - **Base:** 20+ seções idênticas sobre supervisório SIEMENS, sem qualquer relação com Put-To-Monitor.

---
*Gerado em 2026-06-24*
