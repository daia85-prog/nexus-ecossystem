# ED_CARD — checklist-carregamento

**Tópico:** checklist-carregamento · **Bloco:** carregamento · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `null` — AUTO-DETECTADO na Fase 2 (trigger: operação tem checklist de doca/embarque de caminhão)

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.
>
> **REVISAR cobertura mínima.** Este tópico foi auto-detectado na Fase 2 a partir de 1 única seção
> ("Check List Vazio/Cheio") desviada de `conferencia-manual`. Os dados são suficientes para a
> estrutura básica, mas podem existir variações não mapeadas. Confirmar com a operação antes de
> finalizar a especificação.

## Variáveis (kickoff → slots)

> Nenhuma variável de kickoff mapeada diretamente para este tópico.
> O ED deve **confirmar com a operação** os seguintes pontos antes de redigir:

| Ponto a confirmar | Descrição |
|-------------------|-----------|
| Perguntas do checklist inicial | Quais itens de inspeção do caminhão vazio (estado do veículo, limpeza, lacre anterior, etc.) |
| Perguntas do checklist final | Confirmar campos além de temperatura, IDs de colaboradores, quantidade/tipo de pallet e lacre |
| Tipos de carga aceitos | Estivado, palletizado ou ambos (condiciona regras de início) |
| Integração SAP ativa | Confirmar se o IDOC de placa e minuta estão no escopo do projeto |
| Responsável pelo preenchimento | Operador de doca, supervisor ou ambos |

## Condicionais (regra → ação)

- **Operação com SAP ativo** → Incluir seção "Integração SAP": atualização automática de placa via IDOC; disparo de minuta de carregamento e IDOC de encerramento.
- **Operação sem SAP** → Suprimir seção "Integração SAP"; descrever encerramento manual ou integração alternativa.
- **Tipos de carga: somente estivado** → Adaptar regras de início para carga estivada.
- **Tipos de carga: somente palletizado** → Adaptar regras de início para carga palletizada.
- **Tipos de carga: ambos** → Incluir tabela de regras de início diferenciadas por tipo.
- **Cobertura insuficiente confirmada** → Marcar capítulo com aviso "REVISAR — aguardando levantamento complementar".

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Checklist de Carregamento"
  conteudo: visão geral — inspeção do caminhão nos momentos de início (vazio) e fim (cheio)
            do carregamento, com registro de evidências e disparo de integrações; fronteira
            final do fluxo logístico, após o pallet sair do PTL/Stage.
  [aviso se cobertura mínima] → incluir nota "REVISAR — cobertura baseada em 1 seção;
            confirmar com a operação".

[nivel 2] "Checklist Inicial (Caminhão Vazio)"
  conteudo: antes de iniciar o carregamento, o operador responde às perguntas configuradas
            (estado do veículo, limpeza, etc.); perguntas cadastradas na Tela de Configuração
            de Checklists; carregamento só inicia após conclusão do checklist.

[nivel 2] "Regras de Início de Carregamento"
  conteudo: as regras dependem do tipo de pallet (estivado / palletizado); detalhar conforme
            confirmação da operação.
  [tipo tabela] headers ["Tipo de Carga","Regra de Início"] — preencher após confirmação.

[nivel 2] "Registro de Evidências"
  conteudo: ao longo do processo, o operador registra foto, motivo e observação para cada
            não conformidade ou evento relevante.

[nivel 2] "Checklist Final (Caminhão Cheio)"
  conteudo: ao concluir o carregamento, registrar:
            - temperatura do compartimento de carga;
            - IDs dos colaboradores envolvidos;
            - quantidade e tipo de pallet carregado;
            - lacre aplicado no veículo.

[nivel 2] "Integração SAP"  ← emitir somente se SAP ativo no projeto
  conteudo: atualização automática da placa do veículo via IDOC SAP; ao encerrar o
            checklist final, o sistema dispara a minuta de carregamento e um IDOC de
            encerramento ao SAP.

[nivel 2] "Configuração de Checklists"
  conteudo: tela de configuração permite cadastrar e editar as perguntas dos checklists
            inicial e final; acesso restrito a perfil de administração/supervisão.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]; RN-01 a RN-06 do DOSSIE; acrescentar RNs
  identificadas na confirmação com a operação.

[nivel 2] "Integrações"
  [tipo tabela] headers ["Sistema","Tipo","Descrição"]; tabela do DOSSIE
  (suprimir SAP se não aplicável ao projeto).

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; tabela do DOSSIE.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md` (REVISAR — 1 seção auto-detectada; reforçar fontes).
- Origem: seção "Check List Vazio/Cheio" desviada de `conferencia-manual` na Fase 2.
- Cruza com: [[paletizacao]] (pallet no stage antes do carregamento) · [[ptl-alocacao]] (fechamento de pallet libera para carregamento).
