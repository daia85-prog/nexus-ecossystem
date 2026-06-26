# ED_CARD — sorter-mapa-rota

**Tópico:** sorter-mapa-rota · **Bloco:** expedicao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `st1 = yes` (se `no`/`tbd` → não emitir nada deste tópico)

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{criterio_desvio}}` | `st_criterio` | select | `regiao`=Região · `transp`=Transportadora · `filial`=Filial/Destino · `outro`=Outro |
| `{{criterio_agrupamento}}` | `st_ag` | texto | critério de agrupamento dentro de uma rampa (ex.: "por NF", "por pedido", "por transportadora") |

## Condicionais (regra → ação)

- **`st_criterio = regiao`** → agrupador é Região geográfica; incluir nota sobre layouts por turno/cliente/tipo de carga.
- **`st_criterio = transp`** → agrupador é Transportadora; incluir RN sobre unicidade (1:1) ou múltiplas rampas por transportadora (N:N com cadenciamento); verificar se atributo PA (Posto Avançado) é aplicável ao projeto.
- **`st_criterio = filial`** → agrupador é Loja/Filial/Destino; incluir RN sobre bloqueio de desvio se loja sem rampa vinculada; troca de mapa vale a partir do próximo volume.
- **`st_criterio = outro`** → descrever o critério livre informado em `st_ag`; mapear para a regra de negócio mais próxima do DOSSIE.
- **Agrupador 1:1 (por projeto)** → incluir RN-04 (revinculação automática desfaz vínculo anterior; trocar com operação parada).
- **Agrupador N:N (por projeto)** → incluir RN-05 (cadenciamento entre rampas para o mesmo agrupador).
- **Volumes sem agrupador vinculado** → sempre incluir RN sobre rejeito com motivo "SEM ROTA" (→ [[sorter-rejeito]]).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Mapa de Sorter — Configuração de Rotas e Rampas"
  conteudo: o Mapa de Sorter vincula rampas (ou PTLs) ao agrupador
            {{criterio_desvio}}, definindo para onde cada volume é desviado.
            O agrupamento dentro de cada rampa segue o critério: {{criterio_agrupamento}}.
            Permite criar layouts pré-definidos e alterná-los rapidamente conforme
            a necessidade operacional, com acesso restrito por permissão.

[nivel 2] "Fluxo de Configuração do Mapa"
  conteudo: 1. A Invent realiza o cadastro inicial de rampas e layout base.
            2. A operação vincula cada {{criterio_desvio}} à rampa ou PTL de destino.
            3. O WCS aplica o layout ativo; volumes induzidos são desviados conforme
               o vínculo configurado.
            4. Volumes cujo {{criterio_desvio}} não está vinculado a nenhuma rampa
               são enviados ao rejeito com motivo "SEM ROTA" (→ [[sorter-rejeito]]).
            5. Alterações posteriores ao cadastro inicial são responsabilidade
               do cliente/operação.
  [tipo warning] "Trocar o layout com volumes pendentes no sorter pode gerar
                desvios incorretos. Recomendado trocar com a operação parada."

[nivel 2] "Tela de Configuração do Mapa de Sorter"
  conteudo: criar/editar layouts; vincular {{criterio_desvio}} a rampas/PTLs;
            alternar entre layouts salvos. Acesso restrito a usuários com permissão.
            Agrupamento interno de rampa por: {{criterio_agrupamento}}.

[nivel 2] "Regras de Vínculo Agrupador × Rampa"
  conteudo: descrever o modelo de vínculo conforme o projeto.
  [condicional: agrupador 1:1]
    conteudo: cada {{criterio_desvio}} pode estar vinculado a apenas uma rampa.
              Ao revincular, o vínculo anterior é desfeito automaticamente.
  [condicional: agrupador N:N]
    conteudo: um {{criterio_desvio}} pode estar vinculado a múltiplas rampas;
              o WCS cadencia os volumes entre elas para evitar sobrecarga.

[nivel 2] "Layouts Pré-definidos"
  conteudo: o sistema suporta múltiplos layouts salvos (ex.: por turno, tipo de
            carga, cliente), alternáveis conforme a operação. Cada layout define
            um conjunto completo de vínculos {{criterio_desvio}} → rampa.

[nivel 2] "Volumes Sem Rota Vinculada"
  conteudo: se o {{criterio_desvio}} do volume não estiver mapeado a nenhuma
            rampa, o WCS pode: (a) enviar o volume ao rejeito com motivo
            "SEM ROTA"; (b) sinalizar a pendência e bloquear o desvio automático
            até configuração (conforme definição do projeto).
            Em ambos os casos, o operador deve vincular o agrupador e reinduzir
            o volume (→ [[sorter-rejeito]]).

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
    RN-01: o mapa vincula rampas/PTLs ao agrupador {{criterio_desvio}};
           o agrupador define o destino do desvio de cada volume.
    RN-02: o sistema suporta múltiplos layouts pré-definidos, alternáveis
           conforme a operação.
    RN-03: acesso à tela de mapa restrito a usuários com permissão.
    RN-04: [1:1] agrupador vinculado a apenas uma rampa; revinculação
           desfaz o vínculo anterior automaticamente; trocar com operação parada.
    RN-05: [N:N] agrupador pode estar vinculado a múltiplas rampas;
           WCS cadencia volumes entre elas.
    RN-06: agrupador sem rampa vinculada → rejeito "SEM ROTA" ou bloqueio
           de desvio até configuração.
    RN-07: agrupamento interno de rampa por {{criterio_agrupamento}}.
    RN-08: troca de mapa com volumes em trânsito vale a partir do próximo
           volume induzido.
    RN-09: cadastro inicial de rampas/mapa feito pela Invent; alterações
           subsequentes são responsabilidade do cliente.
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[sorter]] (fluxo geral do equipamento), [[sorter-inducao]] (origem dos volumes que chegam ao mapa), [[sorter-rejeito]] (destino dos volumes "SEM ROTA"/"SEM MAPA"), [[ptl-alocacao]] (rampas com PTLs vinculados).
