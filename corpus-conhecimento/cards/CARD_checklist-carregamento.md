# Checklist de Carregamento — Knowledge Card

> CARD do tópico **Checklist de Carregamento**. Fonte: auto-detectado a partir de `conferencia-manual` (1 evidência bruta, score —). O ED usa este arquivo para gerar o capítulo de Checklist de Carregamento do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`checklist-carregamento` `checklist` `carregamento` `loading` `dock` `doca`
`manifesto` `romaneio-carregamento` `minuta-carregamento` `lacre` `temperatura`
`check-list-vazio` `check-list-cheio` `checklist-caminhao` `evidencia-foto`
`paletizado` `estivado` `tipo-pallet` `idoc-sap` `placa-caminhao`
`fechamento-viagem` `liberacao-caminhao` `colaborador-carregamento`

## Metadados
- **Bloco:** carregamento
- **Gate:** sem gate específico no kickoff standard — presente na maioria dos projetos; inferido quando há módulo de carregamento/expedição.
- **Subtópicos com CARD próprio:** — (nenhum identificado)
- **Depende de:** [[paletizacao-ptl]] (separação concluída e pallets formados antes do início), [[order-start]] (viagem/carga criada), [[integracao-wcs-wms]] (recebimento de dados da carga e envio de confirmação de saída)
- **Influencia:** [[integracao-wcs-wms]] (disparo de IDOC/minuta ao SAP ao fechar carregamento), [[etiquetas]] (etiqueta de embarque impressa no fechamento)
- **Cruza com:** [[paletizacao-ptl]] (tipo de pallet: estivado × palletizado), [[integracao-pedidos]] (atualização automática de placa via IDOC SAP)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{chk_tem}}` | *(sem gate explícito)* | inferido | presente / ausente |
| `{{chk_tipo_pallet}}` | *(texto livre / obs)* | multi | `estivado`=Estivado · `palletizado`=Palletizado · `ambos`=Ambos · `tbd` |
| `{{chk_evidencia}}` | *(texto livre / obs)* | multi | `foto`=Foto · `motivo`=Motivo · `obs`=Observação · `tbd` |
| `{{chk_integracao}}` | `in1` / `in1b` | select | `idoc`=IDoc (SAP) · `rest`=REST · `json_api`=JSON API · outros |
| `{{chk_placa_auto}}` | *(texto livre / obs)* | YN | Atualização automática de placa via IDOC |
| `{{chk_temperatura}}` | *(texto livre / obs)* | YN | Campo de temperatura no checklist final |

> **Multi-select** usa `|||` como separador no kickoff. `tbd`/vazio → omitir a subseção correspondente.

---

## Texto Padrão
*(Base detalhada, presente em projetos com módulo de carregamento ativo. O ED parte daqui e aplica as condicionais.)*

O Checklist de Carregamento é a etapa final de controle operacional antes da liberação do caminhão. O WCS conduz o operador (conferente de doca) por dois momentos distintos — **Checklist Inicial (Caminhão Vazio)** e **Checklist Final (Caminhão Cheio)** — garantindo conformidade, rastreabilidade e disparo da documentação fiscal/logística ao ERP/WMS.

**Fluxo operacional padrão:**

1. **Abertura do Checklist Inicial — Caminhão Vazio.** Antes de qualquer carregamento, o operador acessa a tela de Checklist no WCS e identifica a viagem/carga (leitura de romaneio, placa ou código de carga). O WCS exibe o conjunto de perguntas configuradas para o checklist inicial, validando condições do veículo antes do início da operação (higiene, lacres de entrada, avarias visíveis, temperatura, etc.). *(A configuração das perguntas é realizada na **Tela de Configuração de Checklists**, acessível pela administração do WCS.)*

2. **Registro de evidências.** Para cada pergunta que exige comprovação, o operador pode registrar **foto**, **motivo** e/ou **observação** diretamente no WCS (via dispositivo com câmera ou upload). O sistema vincula cada evidência à viagem e ao operador responsável.

3. **Carregamento dos volumes/pallets.** Com o checklist inicial aprovado, a operação de carregamento é liberada. O WCS controla quais pallets/volumes estão associados à viagem e aplica regras de início de separação/carregamento conforme o **tipo de pallet** (estivado ou palletizado — ver **Condicionais**).

4. **Abertura do Checklist Final — Caminhão Cheio.** Após o carregamento de todos os volumes/pallets da carga, o operador aciona o checklist final. O WCS exibe um conjunto específico de perguntas de fechamento, podendo incluir: temperatura de carregamento, número do lacre aplicado, IDs dos colaboradores que realizaram o carregamento, quantidade e tipo de pallets carregados.

5. **Registro e validação final.** O operador preenche todos os campos obrigatórios do checklist final e confirma o fechamento. O WCS valida a completude dos dados antes de permitir a liberação.

6. **Disparo de minuta de carregamento e integração com ERP.** Após a aprovação do checklist final, o WCS dispara automaticamente a **minuta de carregamento** e envia o **IDOC** (ou equivalente na integração configurada) ao SAP/ERP, confirmando a saída da carga. A placa do veículo pode ser atualizada automaticamente via retorno do IDOC. → ver [[integracao-wcs-wms]].

7. **Impressão da etiqueta de embarque e liberação.** O WCS imprime a etiqueta de embarque do caminhão (quando configurado) e registra a liberação da doca. → ver [[etiquetas]].

---

## Condicionais

### Tipo de Pallet no Carregamento — derivado de `{{chk_tipo_pallet}}` / texto livre

#### SE tipo inclui `estivado` → ADICIONA subseção "Carregamento Estivado"
Pallets ou volumes são carregados **sem estrutura de pallet físico** (volumes empilhados diretamente no caminhão). O WCS aplica regras específicas de sequência de carregamento para otimizar o aproveitamento do espaço e preservar a integridade dos itens.

#### SE tipo inclui `palletizado` → ADICIONA subseção "Carregamento Palletizado"
Volumes são carregados sobre pallets físicos já formados e identificados. O WCS rastreia cada pallet pelo ID/etiqueta de pallet e registra sua posição no carregamento.

#### SE tipo inclui `ambos` → ADICIONA subseção "Carregamento Misto"
A operação pode ter pallets estivados e palletizados na mesma viagem. O WCS diferencia o tratamento conforme o tipo identificado no pallet/volume.

### Evidências Obrigatórias — derivado de `{{chk_evidencia}}`

#### SE evidência inclui `foto` → ADICIONA em "Registro de evidências"
O dispositivo do operador deve capturar foto do caminhão/condição em questão. O WCS bloqueia o avanço enquanto a foto não for registrada para as perguntas que exigem comprovação fotográfica.

#### SE evidência inclui `motivo` → ADICIONA em "Registro de evidências"
Perguntas com resposta negativa exigem preenchimento obrigatório do campo **Motivo**. O WCS bloqueia o avanço sem o preenchimento.

#### SE evidência inclui `obs` → ADICIONA em "Registro de evidências"
Campo de **Observação** livre disponível para o operador inserir comentários adicionais a qualquer pergunta.

### Integração com ERP — derivado de `{{chk_integracao}}`

#### SE integração = `idoc` (IDoc SAP) → SUBSTITUI "Disparo de minuta" por versão SAP
O fechamento do checklist final dispara um **IDoc** ao SAP confirmando a saída da NF/carga. A placa do veículo pode ser **atualizada automaticamente** pelo retorno do IDoc (campo de confirmação do SAP). → ver [[integracao-wcs-wms]].

#### SE integração = `rest` ou `json_api` → ADAPTA "Disparo de minuta"
O WCS envia uma chamada REST/JSON ao WMS/ERP ao fechar o checklist final, confirmando a saída. A estrutura do payload é definida na integração específica do projeto.

### Atualização Automática de Placa — derivado de `{{chk_placa_auto}}`

#### SE `{{chk_placa_auto}}` = yes → ADICIONA em "Disparo de minuta"
A placa do veículo exibida na tela de checklist é atualizada automaticamente quando o SAP/ERP envia o retorno do IDOC com os dados da NF/transportadora. O operador não precisa preencher a placa manualmente.

### Campo de Temperatura — derivado de `{{chk_temperatura}}`

#### SE `{{chk_temperatura}}` = yes → ADICIONA em "Checklist Final"
O checklist final inclui campo obrigatório de **temperatura de carregamento** (em °C), relevante para cargas com controle de cadeia de frio. O WCS registra o valor e o vincula ao fechamento da viagem.

### Gate de presença do módulo

#### SE módulo de carregamento não está em escopo → OMITE o capítulo inteiro de Checklist de Carregamento.

---

## Observações Livres do Kickoff
*(Sem campos dedicados no kickoff standard — capturar via texto livre / campo de observações gerais do bloco carregamento.)*

O ED deve:
- **Perguntas específicas do checklist** → listar as perguntas configuradas (inicial e final) na subseção correspondente, numeradas e com indicação de obrigatoriedade.
- **Regras de bloqueio de doca** (ex: checklist inicial não aprovado bloqueia início do carregamento) → registrar como RN adicional numerada.
- **Colaboradores e IDs** (ex: identificação biométrica, crachá, matrícula) → mencionar o método de identificação na subseção do checklist final.
- **Número de lacres** (ex: sequência de lacres, validação de faixa) → adicionar como subseção nomeada se houver regra específica, com `[OBS INTERNA]` se precisar de validação da operação.

---

## Regras de Negócio
- **RN-01** (todos): o **Checklist Inicial (Vazio)** deve ser aprovado antes de qualquer início de carregamento; o WCS bloqueia a operação enquanto o checklist não for concluído.
- **RN-02** (todos): o **Checklist Final (Cheio)** deve ser concluído com todos os campos obrigatórios preenchidos antes do disparo da minuta de carregamento e da integração com o ERP.
- **RN-03** (todos): cada conjunto de perguntas (inicial e final) é **configurável** pela administração do WCS — perguntas, obrigatoriedade e tipo de evidência podem variar por projeto/operação.
- **RN-04** (evidência com foto): o WCS bloqueia o avanço enquanto a foto obrigatória não for registrada para a pergunta correspondente.
- **RN-05** (integração IDoc/SAP): o disparo do IDOC ocorre **somente** após a aprovação completa do checklist final; não há disparo parcial.
- **RN-06** (placa automática): quando a atualização de placa é automática via IDOC, o campo de placa no WCS passa a ser somente leitura durante o checklist; qualquer divergência deve ser tratada no ERP.
- **RN-07** (tipo de pallet): as regras de início de separação/carregamento variam conforme o tipo de pallet (estivado × palletizado); o WCS aplica a regra correspondente ao tipo identificado na viagem.
- **RN-08** (lacre): o número do lacre registrado no checklist final é vinculado ao fechamento da viagem e integrado ao ERP; não é possível alterar após o disparo do IDOC.

## Insights e Padrões
### Padrões identificados
- O padrão **Vazio → Cheio** (checklist inicial antes do carregamento + checklist final antes da liberação) é o núcleo recorrente do módulo, presente em todas as evidências identificadas.
- A **tela de configuração de perguntas** separada do fluxo operacional é um indicador de que o módulo foi projetado para ser parametrizável por projeto, sem necessidade de desenvolvimento customizado para diferentes clientes.
- O vínculo entre **tipo de pallet** (estivado/palletizado) e as **regras de início de carregamento** sugere integração direta com o módulo de paletização.

### Variações significativas
- **Integração SAP via IDOC**: placa automática e disparo de minuta são específicos de projetos SAP — projetos com REST/JSON terão payload customizado.
- **Campos do checklist final** podem variar significativamente entre projetos (temperatura para cadeia de frio, IDs de colaboradores para rastreabilidade de RH, etc.).
- **Evidências fotográficas**: presentes em operações com maior exigência de compliance (ex: farma, alimentos regulados).

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há gate explícito no kickoff para "tem módulo de checklist de carregamento" — hoje inferido pela presença do bloco carregamento. Candidato a checkbox `chk_gate`.
- Não há campo para "**número e sequência de lacres**" — aparece em texto livre. Candidato a campo estruturado.
- "**Temperatura obrigatória**" não tem campo dedicado no kickoff — inferido pelo tipo de produto. Candidato a checkbox `chk_temperatura`.
- "**Atualização automática de placa via IDOC**" não tem campo dedicado — inferido pela integração SAP. Candidato a campo vinculado a `in1 = idoc`.

### Inferências
- **Inferência:** quando `in1 = idoc` (IDoc SAP), o projeto quase certamente tem disparo de IDOC no fechamento do checklist final. · **Confiabilidade:** alta · **Base:** evidência bruta + padrão SAP/WCS.
- **Inferência:** o módulo de checklist de carregamento pressupõe que a paletização/separação já está concluída — não faz sentido sem [[paletizacao-ptl]] ou equivalente em escopo. · **Confiabilidade:** alta · **Base:** sequência lógica do fluxo de carregamento.
- **Inferência:** evidências fotográficas obrigatórias indicam operação com controle regulatório (cadeia de frio, alimentos, farma). · **Confiabilidade:** média · **Base:** 1 evidência bruta; necessita confirmação em mais projetos.

## Dependências (grafo)
- **Entra depois de:** [[paletizacao-ptl]] / [[order-start]] (carga criada e separação concluída)
- **Sai para:** [[integracao-wcs-wms]] (disparo IDOC/minuta ao ERP) → [[etiquetas]] (etiqueta de embarque)
- **Consulta/alimenta:** [[integracao-pedidos]] (dados da NF, placa, transportadora), [[etiquetas]] (etiqueta de embarque do caminhão)
- **Sem variante paralela identificada** (1 evidência bruta — revisar com mais projetos)
