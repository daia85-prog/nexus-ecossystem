# ED_CARD — ptm

**Tópico:** ptm · **Bloco:** expedicao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `pt_ptm = yes`

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.
> Este tópico é sub-capítulo de [[paletizacao]] — emitir somente quando `pt1 = ptm_opt`.
>
> **AVISO DE RAW:** o dossiê foi construído sobre ~15 seções efetivas de PTM; ~20 seções do RAW
> original descrevem "Estação de Supervisório" (hardware/sistema não relacionado a Put-To-Monitor)
> e foram descartadas. O ED deve manter o foco exclusivo no fluxo PTM real: monitor central
> (TV/tela) indicando, por cor, a posição de pallet ao operador na rampa do sorter.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{ptm_qtd}}` | `pt_ptm_qtd` | texto | *(quantidade de monitores/TVs PTM instalados)* |
| `{{criterio_agrup}}` | `pt_ag` | texto | *(critério de agrupamento de volumes no pallet, ex: rota/transportadora, loja)* |

## Condicionais (regra → ação)

- **`pt_ptm_qtd` preenchido** → Registrar "{{ptm_qtd}} monitores PTM instalados" na visão geral e em Infraestrutura.
- **`pt_ag` preenchido** → Usar "{{criterio_agrup}}" como critério de vinculação posição ↔ pedido; descrever como o agrupamento é refletido nas cores do monitor.
- **`pt_ag` inclui "loja" ou "tipo_volume"** → Incluir nota de segregação (ex: full case × fracionado no mesmo pallet proibido — cada tipo em pallet separado).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "PTM — Put-To-Monitor"
  conteudo: visão geral — montagem de pallets na saída do sorter guiada por monitor/TV +
            scanner de mão; {{ptm_qtd}} monitores instalados; o Velox indica por sistema de
            cores em qual posição de pallet o volume deve ser depositado, espelhando marcações
            físicas no chão; agrupamento por {{criterio_agrup}}.

[nivel 2] "Abertura de Posições PTM"
  conteudo: antes da operação, o operador abre as posições que vai usar — lê etiqueta de
            abertura, identifica-se e lê o código do pallet; somente operadores cadastrados
            podem abrir posições.

[nivel 2] "Vínculo Pedido ↔ Posição"
  conteudo: dois modos —
            (1) Automático: conforme volumes passam no portal do sorter, Velox identifica
                transportadora/rampa e atrela o pedido à posição PTM;
            (2) Manual: supervisor insere o pedido diretamente numa posição via mapa do sorter
                (1 pedido por posição, prioridade máxima de saída).

[nivel 2] "Fluxo de Alocação"
  conteudo: (1) login na rampa obrigatório;
            (2) operador lê código de barras (Full Case) ou QR Code (fracionado) do volume;
            (3) monitor indica por cor a posição correspondente;
            (4) operador deposita o volume na posição indicada;
            (5) volume fora da rua/posição → PTM avisa e operador encaminha à estação de rejeito.
  conteudo estados das posições (cores): fechado/sem pallet (borda cinza); aberto (cor da
            marcação de chão); alocado aguardando abertura (borda em evidência); aguardando
            alocação (quadrado preenchido); finalizado (preenchido e piscando).

[nivel 2] "Fechamento de Posição PTM"
  conteudo: três modos —
            (1) Manual: ler código de comando (ex.: FPP001); posição pisca aguardando leitura
                da etiqueta do pallet (obrigatoriamente 6 dígitos);
            (2) Automático: ao alocar o último volume esperado do pedido, fecha sem ação do
                operador;
            (3) Forçado: cubagem/peso atinge o limite definido pela operação.
  conteudo: ao fechar, o sistema abre automaticamente nova posição.

[nivel 2] "Liberação Condicionada à Disponibilidade"
  conteudo: a separação só é liberada conforme há posições PTM disponíveis; pedidos excedentes
            aguardam em fila até um PTM fechar (ex.: 10 pedidos, 8 posições → 8 simultâneos,
            2 em espera).

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]; RN-01 a RN-13 do DOSSIE filtradas pelas condicionais
  (suprimir RN-08/09 se cliente não for modelo Promofarma; suprimir RN-10 se não for modelo Heart;
   suprimir RN-11 se parâmetro não aplicável ao projeto).

[nivel 2] "Integrações"
  [tipo tabela] headers ["Sistema","Tipo","Descrição"]; tabela do DOSSIE.

[nivel 2] "Terminologia"
  [tipo tabela] headers ["Termo","Definição"]; tabela do DOSSIE (excluir "PTP" e "tipo_volume"
  se não aplicáveis ao projeto).
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md` (~15 seções efetivas; ignorar contaminação de "Estação de Supervisório").
- Parte de: [[paletizacao]] (pt1=ptm_opt).
- Cruza com: [[etiquetas]] (etiqueta de pallet 6 dígitos, etiqueta de abertura) · [[sorter-mapa-rota]] (portal de leitura, vínculo automático).
