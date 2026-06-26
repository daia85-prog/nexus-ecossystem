# ED_CARD — cross-check

**Tópico:** cross-check · **Bloco:** conferencia · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `st7 = yes` (Cross-Check ativo no portal do sorter)

> [REVISAR COBERTURA] Tópico AUTO-DETECTADO na Fase 2. Consolidado de desvios em conferencia, sorter-rejeito e sorter-inducao. Rastrear RAWs de origem antes de fechar a ES.

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{cross_check_ativo}}` | `st7` | boolean | `yes`=Cross-Check ativo no portal · `no`=Cross-Check inativo |
| `{{ia_sorter}}` | `st11` | boolean | `yes`=IA no sorter (câmera de topo / CDSK) · `no`=Sem IA |

## Condicionais (regra → ação)

- **`st7 = no`** → NÃO emitir este tópico; mencionar apenas que Cross-Check está desabilitado nesta operação.
- **`st7 = yes`** → emitir tópico completo com as duas verificações (Destino + Cross-Check).
- **`st11 = yes`** → incluir subseção "CrossCheck por IA (CDSK)": câmera de topo, exigência de etiqueta na face superior, registro de "Suspeita de Divergência" para auditoria/KPI; referenciar RN-07.
- **`st11 = no`** → emitir apenas fluxo padrão de câmera de portal (3 faces).
- **Modelo FULLCASE ativo (`fc1 = yes`)** → nota: em algumas operações o Cross-Check se aplica exclusivamente ao modelo Full Case (RN-05); confirmar escopo com a operação.
- **Cross-Check inativável** → incluir nota de configuração: a função pode ser ativada/inativada por parâmetro de operação (RN-04).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Cross-Check"
  conteudo: O Cross-Check é a validação automática, em tempo real, do conteúdo do volume
  contra o pedido, executada no portal de leitura do sorter. A câmera captura o SKU/DUN/EAN
  do produto e cruza com os itens esperados na nota/pedido, decidindo se o volume segue ao
  destino ou vai ao rejeito. É a forma de conferência sem operador preferida em operações de
  alto volume. {{se st11=yes}} Variante com IA usa câmera de topo (CDSK).

[nivel 2] "Fluxo do Processo"
  conteudo: 1. Volume passa pelo portal de 3 faces; câmera captura etiquetaOp + SKU/DUN/EAN.
  2. Verificação 1 (Destino): valida o pedido associado à etiquetaOp.
  3. Verificação 2 (Cross-Check): cruza código lido com itens esperados do pedido/nota.
  4. Sucesso → instrução ao PLC com rampa de destino.
     Falha → rampa de rejeito com motivo "Produto Incorreto / SKU Divergente".
  5. Tratativa no rejeito: operador bipa ambos os códigos; correto → WCS ignora double check
     na reindução.

[nivel 2] "CrossCheck por IA (CDSK)"  {{emitir apenas se st11=yes}}
  conteudo: Câmera de topo exige etiqueta na face superior do volume para leitura.
  Ocorrências duvidosas geram registro de "Suspeita de Divergência" para auditoria e KPI,
  sem necessariamente desviar o volume.

[nivel 2] "Configuração e Escopo"
  conteudo: A função Cross-Check pode ser ativada/inativada por parâmetro de operação.
  {{se fc1=yes}} Confirmar se o Cross-Check se aplica exclusivamente a pedidos Full Case
  ou a todos os modelos de separação.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE filtradas pelas condicionais: RN-01, RN-02, RN-03, RN-04, RN-06 sempre (se st7=yes);
  RN-05 se fc1=yes; RN-07 se st11=yes.

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; termos do DOSSIE relevantes ao escopo emitido.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md` (AUTO-DETECTADO — REVISAR contra RAWs de origem).
- Cruza com: [[conferencia]], [[sorter]], [[picking-fullcase]].
