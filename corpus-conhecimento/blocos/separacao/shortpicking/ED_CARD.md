# ED_CARD — shortpicking

**Tópico:** shortpicking · **Bloco:** separacao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `null` — **Trigger heurístico:** qualquer picking ativo (p1=yes OU ct1=yes OU fc1=yes)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{supervisor_pbl}}` | `s1p` | boolean | `yes`=Corte exige aprovação de supervisor no PBL · `no`=Sem supervisor |
| `{{supervisor_cart}}` | `s1c` | boolean | `yes`=Corte exige aprovação de supervisor no Cart · `no`=Sem supervisor |
| `{{motivo_obrigatorio}}` | `s3p` | boolean | `yes`=Motivo do corte obrigatório · `no`=Motivo opcional |

## Condicionais (regra → ação)

- **`s1p = yes` OU `s1c = yes`** → incluir subseção "Auditoria de Corte" (autenticação de supervisor por senha/crachá); referenciar RN-08 do DOSSIE; cruzar com [[conferencia]] (fluxo de corte na conferência manual).
- **`s1p = no` E `s1c = no`** → omitir subseção de auditoria; manter fluxo padrão de decremento direto.
- **`s3p = yes`** → incluir campo obrigatório de motivo no pop-up de corte (ex.: Dano / Falta); listar opções de motivo disponíveis.
- **`s3p = no`** → corte sem campo de motivo.
- **`fc1 = yes`** → incluir parágrafo "Finalizar Coleta Parcial" (invalida etiquetas de volumes não coletados; envia confirmação parcial com status `parcial`); referenciar RN-10.
- **Operação proíbe shortpicking** (ex.: cliente Cristal) → emitir WARNING: *"Shortpicking desabilitado — falta física aciona [[cancelamento-pedidos]]"*; omitir fluxo de decremento e substitui pelo fluxo de cancelamento.
- **Operação liga/desliga shortpicking por parâmetro** (ex.: Toca da Raposa) → incluir nota de configuração administrativa; referenciar RN-03.
- **Separação multi-lote ativa** → incluir RN-13; mencionar priorização por menor prioridade logística + FIFO (RN-12).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Shortpicking (Corte)"
  conteudo: O shortpicking ocorre quando a quantidade física disponível na posição é inferior à
  solicitada. O operador decrementa a quantidade no dispositivo, separa o disponível e confirma,
  disparando a integração de shortpicking ao WMS. O volume com corte é automaticamente desviado
  para conferência/auditagem. {{se operação proíbe: WARNING de desabilitação.}}

[nivel 2] "Fluxo do Processo"
  conteudo: Passo a passo — identificação da falta → decremento → confirmação → desvio ao
  ponto de decisão → conferência (Completar / Encerrar) → coleta posterior do item cortado →
  reimpressão automática da etiqueta do volume.

[nivel 2] "Métodos de Corte"
  [tipo tabela] headers ["Método","Dispositivo","Comportamento"];
  linhas: LED sem conf. / PDV com conf. / Picking Cart / Coletor / Order Start (se fc1=yes).

[nivel 2] "Auditoria de Corte"  {{emitir apenas se s1p=yes OU s1c=yes}}
  conteudo: O corte só é efetivado após autenticação de supervisor (senha/crachá).
  Sem aprovação, o volume fica pendente. O WCS envia confirmação parcial ao WMS e gera
  tarefa automática de inventário/auditoria.
  {{se s3p=yes}} O operador deve informar o motivo do corte (Dano / Falta) antes da autenticação.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE filtradas pelas condicionais: RN-01 sempre; RN-02 se proíbe short;
  RN-03 se liga/desliga; RN-04, RN-06, RN-07 sempre; RN-08/RN-09 se s1p=yes ou s1c=yes;
  RN-10 se fc1=yes; RN-12/RN-13 se multi-lote.

[nivel 2] "Integração de Shortpicking"
  conteudo: O WCS envia ao WMS as quantidades separadas e faltantes (Confirmação de Coleta /
  ShortIndicator por item). O WMS decide reabastecer, gerar nova onda ou faturar parcial.
  {{se Guatemala}} mencionar WMTOCO (E1LTCOH/E1LTCOI).

[nivel 2] "Relatório de Shortpicking"
  conteudo: Tela dedicada que lista remessas com ocorrência de corte, filtrável por data.

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; termos do DOSSIE relevantes ao escopo emitido.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[conferencia]], [[conferencia-manual]], [[cancelamento-pedidos]], [[picking-pbl]], [[picking-cart]], [[picking-fullcase]], [[order-start]].
