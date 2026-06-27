# ED_CARD — inventario

**Tópico:** inventario · **Bloco:** estoque · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `es4 = yes`

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{inventarioCiclico}}` | `es4` | select yes/no | `yes`=Inventário rotativo/cíclico ativo · `no`=Sem inventário cíclico |
| `{{recall}}` | `es5` | select yes/no | `yes`=Recall (bloqueio de lotes com problemas) ativo · `no`=Sem Recall |
| `{{movForcada}}` | `es6` | select yes/no | `yes`=Movimentação Forçada (fora do fluxo normal) ativa · `no`=Sem Movimentação Forçada |
| `{{curvaABC}}` | `es7` | select yes/no | `yes`=Curva ABC ativa (classificação por giro) · `no`=Sem Curva ABC |
| `{{curvaABCRange}}` | `es8` | texto (se es7=yes) | Range em dias para cálculo da curva (ex: 30, 60, 90) |
| `{{doubleCheck}}` | `es10` | select yes/no | `yes`=Double Check (dupla conferência independente) ativo · `no`=Sem Double Check |

## Condicionais (regra → ação)

- **`es4 = yes`** → incluir aba/modalidade "Inventário Cíclico" no coletor e na especificação de fluxo (escopo parcial — endereços/itens selecionados).
- **`es4 = no`** → documentar somente modalidade "Inventário Total"; omitir aba Cíclico.
- **`es5 = yes`** → incluir seção "Recall" com tela de coletor: campos SKU (obrigatório) + lote (opcional); exibição de posições onde o lote/SKU está alocado; leitura endereço + container + quantidade retirada; restrição de lotes diferentes no mesmo container. Referenciar [[integracao-wcs-wms]] (integração Recall → WMS).
- **`es5 = no`** → omitir seção Recall.
- **`es6 = yes`** → incluir seção "Movimentação Forçada": permite movimentar itens fora do fluxo normal; exige perfil elevado (liderança/supervisor); registrar rastreabilidade do operador.
- **`es6 = no`** → omitir seção Movimentação Forçada.
- **`es7 = yes`** → incluir subseção "Curva ABC" com parâmetro `{{curvaABCRange}}` dias; exibir classificação (A/B/C) na tela de auditoria parcial/cíclica e nos relatórios de estoque.
- **`es7 = no`** → omitir Curva ABC das telas e relatórios.
- **`es10 = yes`** → incluir seção "Double Check": segunda contagem independente por operador diferente; o WCS só aceita o resultado quando as duas contagens concordam (ou aciona recontagem se divergentes).
- **`es10 = no`** → omitir seção Double Check.

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Inventário / Auditoria de Estoque"
  conteudo: visão geral — garantir a precisão do estoque confrontando contagem física × saldo sistêmico;
            gerar integração de ajuste ao WMS com o delta (físico − sistêmico) após aceite do supervisor.

[nivel 2] "Modalidades"
  subseção "Inventário Total"
    conteudo: verificação de todas as posições com itens; criação obrigatória por supervisor;
              contagem cega (WCS não exibe SKU esperado nem saldo sistêmico — RN-04).
  [condicional es4=yes] subseção "Inventário Cíclico"
    conteudo: escopo parcial — endereços/itens selecionados; regra: ao selecionar endereço específico,
              audita só a posição iniciada; demais posições do item usam saldo sistêmico no ajuste (RN-12).

[nivel 2] "Fluxo de Contagem"
  conteudo: criação da tarefa (supervisor) → definição de regra de bipagem e número de operadores →
            divisão em seções → 1ª contagem cega → relatório de conciliação →
            2ª contagem (somente divergentes) → 3ª contagem (somente ainda divergentes) →
            validação final direcionada (opcional) → aceite do supervisor → integração de ajuste ao WMS.
  [tipo tabela] headers ["Etapa","Escopo","Observação"];
  linhas: 1ª Contagem / todos, 2ª Contagem / divergentes da 1ª, 3ª Contagem / divergentes da 2ª,
          Validação Final / endereços escolhidos pelo supervisor (opcional).

[nivel 2] "Regras de Bipagem"
  conteudo: supervisor define no ato da criação — bipar item a item OU informar quantidade + bipar uma vez.
            Posição vazia: bipar o endereço 3 vezes (RN-05).

[nivel 2] "Double Check"
  [condicional es10=yes]
    conteudo: segunda contagem independente realizada por operador diferente do primeiro;
              resultado aceito somente quando as duas contagens concordam; divergência aciona recontagem.
  [condicional es10=no] — omitir seção.

[nivel 2] "Curva ABC"
  [condicional es7=yes]
    conteudo: classificação de itens por giro calculada sobre os últimos {{curvaABCRange}} dias;
              exibida na seleção da auditoria parcial/cíclica (ao lado da data da última movimentação
              e da última data de auditoria); alimenta relatórios de estoque.
  [condicional es7=no] — omitir seção.

[nivel 2] "Recall"
  [condicional es5=yes]
    conteudo: tela no coletor Android — campo SKU (obrigatório) + lote (opcional; se omitido abrange
              todos os itens do SKU — RN-14); exibe posições onde lote/SKU está alocado; operador lê
              endereço + container + informa quantidade retirada; WCS valida reuso de container e
              impede lotes diferentes no mesmo container (RN-16).
              Integração de consolidação Recall → WMS: item, lote, container, quantidade.
              Restrição no Transfer: só recolhe se a tarefa de recebimento estiver concluída (RN-15).
  [condicional es5=no] — omitir seção.

[nivel 2] "Movimentação Forçada"
  [condicional es6=yes]
    conteudo: permite mover itens fora do fluxo normal (ajustes, segregação, transferências manuais);
              exige perfil elevado (liderança/supervisor); toda movimentação registra operador + data/hora
              para rastreabilidade.
  [condicional es6=no] — omitir seção.

[nivel 2] "Relatórios e Exportação"
  conteudo: relatório de conciliação por contagem (física × sistêmica); resultados das 3 contagens;
            endereços e operadores responsáveis; divergência consolidada; delta (físico − sistêmico).
            Exportação em Excel e PDF (RN-14). Impressão disponível.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN filtradas do DOSSIE: RN-01 a RN-14 (aplicar todas; sinalizar RN-02 como específica do modelo BP
  e RN-03 a RN-14 como modelo NavePark/Beleza).

[nivel 2] "Integração de Ajuste ao WMS"
  conteudo: disparada somente após aceite/confirmação do supervisor; payload contém o delta
            (físico − sistêmico) por posição/item/lote.
            Referenciar [[integracao-wcs-wms]].
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[integracao-wcs-wms]] (integração de ajuste e Recall), [[reabastecimento]] (movimentações de posição que afetam o saldo), [[dashboards-relatorios]] (Curva ABC em relatórios de estoque), [[cadastros-acessos]] (perfil supervisor para criar inventário).
