# ED_CARD — integracao-wms-erp

**Tópico:** integracao-wms-erp · **Bloco:** integracao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `in1 = idoc | dblink` (integração SAP via IDoc ou DBLink direto no banco)

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{protocolo}}` | `in1` | select | `idoc`=IDoc (SAP) · `dblink`=DBLink (banco direto) |

## Condicionais (regra → ação)

- **`in1 = idoc`** → documentar ciclo completo de IDocs SAP (WMTORD/WMTOCO/WMCATO); transporte XML/SOAP sobre HTTP com SSL/TLS; detalhes de campos TRART, NLTYP, VLTYP; incluir subseções WMTORD, WMTOCO, WMCATO, IDOC de Remessas (TPSDLS/ZSDDAREM), criação/deleção de ondas e gestão de estoque do AC.
- **`in1 = dblink`** → documentar integração via banco de dados: views/procedures compartilhadas, chave de controle de reprocessamento, responsabilidades de escrita/leitura por lado (WMS grava, WCS lê ou vice-versa); incluir subseção de estrutura das tabelas/views e mecanismo de sincronização.
- **`in1 = idoc`** → incluir seção "Encerramento de Onda" com job de 5 minutos, status NARAMPA vs ENCERRADO e envio de ZSDDAREM com QUANT e ZSEP_PARCIAL.
- **`in1 = idoc`** → incluir seção "Gestão/Espelho de Estoque do AC": filtros de consulta, exportação CSV, sugestão de esvaziamento de canal.
- **`in1 = dblink`** → incluir seção "Views e Procedures": listar objetos de banco compartilhados, senso de tráfego de cada objeto e política de lock/transação.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Integração WMS/ERP"
  conteudo: visão geral — integração do WCS (Velox) com o SAP WM/ERP; protocolo {{protocolo}};
            contexto típico: armazém automatizado com transelevador (HB).
            Diferencial frente a [[integracao-wcs-wms]]: aqui o transporte é {{protocolo}},
            não REST/JSON.

[nivel 2] "Protocolo de Comunicação"
  [condicional in1=idoc]
    conteudo: IDOCs em XML/SOAP sobre HTTP com SSL/TLS (RN-01); autenticação e certificados
              definidos na implementação.
  [condicional in1=dblink]
    conteudo: DBLink sobre banco de dados compartilhado; string de conexão, schema e permissões
              definidos na implementação; política de lock e transação.

[nivel 2] "Ciclo da Ordem de Transporte (OT)"
  [condicional in1=idoc]
    [tipo tabela] headers ["IDOC","Sentido","Descrição","Campo-chave"];
    linhas:
      WMTORD (TORD) / SAP→WCS / Criação da OT (armazenar ou retirar) / TRART='E';
      WMTOCO (TOCO/ZWMTOCO) / WCS→SAP / Confirmação da OT; distingue local SAP × área WCS / NLTYP, VLTYP;
      WMCATO (CATO) / SAP⇄WCS / Cancelamento/estorno da OT / condicionado à TAG do transelevador.
    subseção "Criação da OT (WMTORD)"
      conteudo: SAP envia OT de armazenagem ou retirada ao WCS; para reabastecimento, o WCS pode
                solicitar a OT ao SAP.
    subseção "Confirmação da OT (WMTOCO)"
      conteudo: WCS confirma ao SAP o movimento do transelevador; múltiplos cenários
                (HB→SAP, SAP→HB, HB→HB com 1ª e 2ª confirmação) distinguidos por NLTYP × VLTYP.
    subseção "Cancelamento da OT (WMCATO)"
      conteudo: executável somente se o cancelamento chegar antes da alteração de TAG que dispara
                a retirada ao transelevador; WCS sempre responde se é possível cancelar (RN-04).
  [condicional in1=dblink]
    conteudo: sem ciclo IDOC; descrever o fluxo equivalente de armazenagem/retirada via
              procedure/view compartilhada; incluir campos-chave e mecanismo de confirmação.

[nivel 2] "IDOC de Remessas (TPSDLS / ZSDDAREM)"
  [condicional in1=idoc]
    conteudo: SAP envia as remessas ao WCS; reutilizado no encerramento de onda com
              campos QUANT e ZSEP_PARCIAL.
  [condicional in1=dblink] — omitir seção ou documentar equivalente via tabela de pedidos.

[nivel 2] "Encerramento de Onda"
  [condicional in1=idoc]
    conteudo: aplicável a onda EM ANDAMENTO; interrompe coletas e apaga LEDs;
              job de 5 minutos aguarda desvio dos volumes ainda no Sorter →
              desviados = NARAMPA (atendidos); demais = ENCERRADO (RN-06).
              Envia ao SAP o IDOC ZSDDAREM com QUANT (quantidade atendida, pode ser 0)
              e ZSEP_PARCIAL="X" para atendimento parcial; SAP trata o não atendido.
  [condicional in1=dblink] — omitir ou adaptar conforme equivalente.

[nivel 2] "Exclusão de Onda"
  conteudo: permitida somente para ondas com status criada/preparada;
            transportes voltam para vínculo; saldos reservados retornam a PENDENTE (RN-07).

[nivel 2] "Gestão / Espelho de Estoque do AC"
  [condicional in1=idoc]
    conteudo: WCS espelha posições do AC a partir de IDOCs do SAP a cada movimento
              (armazenagem, DE×PARA, housekeeping, bloqueios/desbloqueios, confirmações de OT — RN-08).
    tela: filtros por posição/canal, SKU, lote, UMB, palete/UD, %shelf, validade, temperatura,
          faixa de cor, depósito, centro, nível; exportação CSV para conciliação com SAP.
    funcionalidade "Esvaziar Canal": sugestão por IA; bloqueia ressuprimento até confirmação
                   de retirada via LED (código especial, ex: 999).
  [condicional in1=dblink] — documentar mecanismo equivalente de espelho de estoque via banco.

[nivel 2] "Abastecimento FEFO"
  [condicional in1=idoc]
    conteudo: WCS escolhe a melhor posição varrendo AA (Buffer/Pulmão) e AC pelo lote mais velho,
              priorizando o Buffer; SAP gera a OT e devolve os dados (RN-09).
  [condicional in1=dblink] — documentar regra FEFO equivalente.

[nivel 2] "Confirmação de Entrada no Armazém (RF1.1)"
  [condicional in1=idoc]
    conteudo: confirmar ao SAP WM apenas pallets vindos da fábrica (nível superior);
              transferência/devolução (nível inferior) não são confirmados (RN-05).

[nivel 2] "Views e Procedures (DBLink)"
  [condicional in1=dblink]
    [tipo tabela] headers ["Objeto","Tipo","Sentido","Descrição"];
    preencher na implementação com objetos reais do banco compartilhado.
  [condicional in1=idoc] — omitir seção.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  [condicional in1=idoc] RN do DOSSIE: RN-01 a RN-11 (todas aplicáveis ao IDoc).
  [condicional in1=dblink] RN do DOSSIE: RN-01 (adaptar protocolo), RN-04 a RN-11 (lógica de negócio).

[nivel 2] "Integrações Relacionadas"
  conteudo: [[integracao-pedidos]] (remessas recebidas pelo WCS);
            [[reabastecimento]] (OT de reabastecimento via WMTORD);
            [[sorter]] (encerramento de onda e status NARAMPA/ENCERRADO);
            [[dashboards-relatorios]] (SKUs pendentes, backlog de separação).
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[integracao-pedidos]] (in1=idoc — remessas via ZSDDAREM), [[reabastecimento]] (OT de reabastecimento), [[sorter]] (encerramento de onda), [[dashboards-relatorios]] (gestão de estoque AC e SKUs pendentes).
