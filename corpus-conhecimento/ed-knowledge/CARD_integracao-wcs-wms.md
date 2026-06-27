# ED_CARD — integracao-wcs-wms

**Tópico:** integracao-wcs-wms · **Bloco:** integracao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `in1 = rest | json_api | json_pasta` (integração REST/JSON com WMS — e-commerce/varejo)

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{protocolo}}` | `in1` | select | `rest`=REST · `json_api`=JSON via API · `json_pasta`=JSON em pasta |
| `{{endpointBase}}` | `in_endpoint` | texto | URL base da API REST/JSON |
| `{{timeoutMs}}` | `in3` | texto | Timeout em ms (ex: 5000) |

## Condicionais (regra → ação)

- **`in1 = rest` ou `in1 = json_api`** → documentar contrato REST: endpoint `{{endpointBase}}`, método POST, content-type application/json, timeout `{{timeoutMs}}` ms; incluir subseção de autenticação (Bearer/API Key).
- **`in1 = json_pasta`** → documentar monitoramento de pasta: diretório, polling/trigger, mecanismo anti-reprocessamento.
- **Sempre** → incluir ciclo completo: Snap Shot, Inbound Sync, Picking Confirm, Retorno Reabastecimento.
- **Sempre** → incluir processos de exceção: Devolução de Cancelados, Cancelamento de Volumes Fracionados, Retorno Reindução.
- **Recall referenciado em [[inventario]]** → incluir contrato de Recall apenas se `es5 = yes`; caso contrário, registrar como "não aplicável neste projeto".

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Integração WCS–WMS"
  conteudo: visão geral — contratos de sincronização entre o WCS (Velox) e o WMS do cliente;
            protocolo {{protocolo}} sobre {{endpointBase}}; timeout {{timeoutMs}} ms.
            Princípio: o WMS é a fonte de verdade do estoque; o WCS espelha e devolve movimentações
            em tempo quase real.

[nivel 2] "Protocolo de Comunicação"
  [condicional in1=rest|json_api] conteudo: REST/JSON — POST para {{endpointBase}};
    content-type: application/json; timeout: {{timeoutMs}} ms; autenticação (Bearer/API Key — preencher).
  [condicional in1=json_pasta] conteudo: JSON em pasta — diretório monitorado; mecanismo anti-reprocessamento.

[nivel 2] "Snap Shot (WMS → WCS)"
  conteudo: envia a foto inicial do estoque de todas as posições no startup/carga;
            pode ser reenviado sob demanda por divergência (sem frequência fixa — RN-07).
            Campos: codInterno, qtd, endColeta, lote/loteItem, validade, codEmpresa.
  regras: RN-05 (baixa exclusiva pelos dados recebidos; posição vazia no payload = desocupada),
          RN-06 (qtd=0 ou codInterno=null → esvaziar posição e liberar para novas alocações),
          RN-08 (codInterno e endColeta devem estar cadastrados no WCS ou a integração é rejeitada).

[nivel 2] "Inbound Sync (WCS → WMS)"
  conteudo: dispara a cada movimentação em porta-pallets (pulmão) e entre porta-pallets;
            considera recebimentos da CET (Confirmação Entrada no Transfer) e saídas (RN-09).
  variante: envio consolidado por item (soma de saldo em todos os endereços) quando exigido pelo WMS (RN-10).

[nivel 2] "Confirmação de Separação / Picking Confirm (WCS → WMS)"
  [tipo tabela] headers ["Tipo de Volume","Momento do Disparo"];
  linhas:
    Fracionado / ao finalizar a remessa por completo (RN-01);
    Full Case / na confirmação da finalização completa da remessa; sem cod_caixa (RN-02);
    Exceção (Picking Cart) / ao finalizar a remessa do volume no Picking Cart (RN-03);
    Picking Cart / somente após o ponto de decisão no fim da linha ou após conferência — não imediato (RN-04).

[nivel 2] "Retorno de Reabastecimento (WCS ⇄ WMS)"
  conteudo: enviado quando o operador finaliza a alocação na posição final de picking (RN-11);
            em variantes com PLC, quando o desvio é confirmado pelo PLC.
  payload-chave: empresa, centro, codDeposito, reabastecimentos[] (tarefa, pos_destino, sku, dun,
                 qt_sug, qt_reab).

[nivel 2] "Devolução de Volumes Cancelados"
  conteudo: WCS identifica volume cancelado → cria tarefa de devolução por volume →
            operador (coletor Android) lê volume → vai ao endereço indicado →
            lê endereço + quantidade + código do item → repete por todos os itens →
            WCS confirma devolução → envia integração de confirmação ao WMS.
  restrição: WCS não devolve itens ao Transfer — somente a posições de picking ou pulmão (RN-13).

[nivel 2] "Cancelamento de Volumes Fracionados"
  conteudo: só cancela volumes ainda não enviados na Confirmação de Picking;
            em cargas parciais, cancela só os pendentes e mantém os confirmados (RN-12).

[nivel 2] "Retorno de Reindução"
  conteudo: WMS responde se um volume pode ser reinduzido na esteira —
            status: "todo" (permitido) ou "blocked" (bloqueado — WCS informa ao operador — RN-18).
            A mesma caixa pode receber a integração mais de uma vez; o WCS considera sempre a última (RN-17).

[nivel 2] "Recall"
  conteudo: consolidação de itens retirados da linha (item, lote, container, quantidade) enviada ao WMS.
  referenciar [[inventario]] (es5=yes) para fluxo completo do Recall no coletor.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE: RN-01 a RN-18 (todas).

[nivel 2] "Telas de Apoio"
  subseção "Tela de Devolução de Volumes Cancelados (Coletor Android)"
    conteudo: lista itens a devolver com quantidade e endereço; leitura: volume → endereço → item;
              encerra com mensagem de conclusão.
  subseção "Relatório 'Pedidos Cancelados'"
    conteudo: operador informa código do pedido; sistema lista volumes e local na automação.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[integracao-pedidos]] (Wave de entrada), [[reabastecimento]] (Retorno Reabastecimento), [[inventario]] (Recall e integração de ajuste), [[sorter]] (Retorno Reindução), [[conferencia]] (momento do Picking Confirm para Picking Cart).
