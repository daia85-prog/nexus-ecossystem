# ED_CARD — picking-pallet

**Tópico:** picking-pallet · **Bloco:** separacao · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `null` — trigger heurístico: incluir quando o cliente separa SKU em grande volume por remessa (subcaso de fullcase) ou usa matriz de fragilidade (`pt_frag = yes`). Sem campo direto no kickoff.

> Card de geração: o ED preenche as **variáveis** com as respostas do kickoff, aplica as **condicionais** e emite os **blocos de capítulo**. Conteúdo canônico completo está no DOSSIE.md.
> **Atenção:** este tópico não tem gate direto no kickoff. O ED deve ativá-lo por inferência — se o fluxo Full Case está em escopo (`fc1 = yes`) e os volumes ou perfil de pedido indicam separação direta em pallet, ou se `pt_frag = yes`.

## Variáveis (kickoff → slots)

Não há variáveis diretas no kickoff para este tópico. O conteúdo é derivado do contexto do [[picking-fullcase]] e do módulo de [[paletizacao]].

| Slot | Fonte de inferência | Tipo | Observação |
|------|---------------------|------|------------|
| `{{variante_pallet}}` | inferência pelo perfil do projeto | texto | "Direto" (derivado do Fullcase) · "Exceção" (derivado do Picking Exceção) · "Por Onda" (matriz de fragilidade) |
| `{{usa_matriz_fragilidade}}` | `pt_frag` (se existir no kickoff) | select | `yes`=Sim · `no`=Não |
| `{{paletizacao_transportadora}}` | parâmetro de configuração | select | `yes`=Ativo · `no`=Inativo |

## Condicionais (regra → ação)

- **`variante = Direto`** (derivado do Fullcase) → descrever aba exclusiva de Picking Pallet dentro da tela de Picking Fullcase; fluxo: endereço → etiqueta → produto → UC do pallet; pallet vai direto à expedição sem sorter (RN-02).
- **`variante = Exceção`** (derivado do Picking Exceção) → descrever aba exclusiva de Picking Pallet Exceção; tarefa aparece ao atingir quantidade mínima de pallet cadastrada (RN-04); WCS gera etiqueta única de pallet (RN-03); bypass do PTL (RN-02).
- **`variante = Por Onda`** → descrever separação por onda dividida em até 3 matrizes de fragilidade (1=frágil, 2=médio, 3=pesado); rota otimizada por peso e cubagem (RN-07, RN-08); stage liberado quando todos os itens são removidos (RN-09).
- **`paletizacao_transportadora = yes`** → incluir RN-05: operador não executa Aloca Pallet; lê UC no PRIX fixo no final da rampa; WCS considera todos os volumes expedidos e integra etiquetas vinculadas à UC.
- **`paletizacao_transportadora = no`** → incluir RN-06: operador informado no coletor que Aloca Pallet não é necessário; lê UC do pallet no PRIX; WCS considera volumes expedidos.
- Sempre cruzar com [[picking-fullcase]] e [[paletizacao]].

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Picking Pallet"
  conteudo: modalidade de separação para itens com quantidade elevada de um mesmo SKU destinados a uma única remessa/pedido. Em vez de coletar caixa a caixa, o operador monta diretamente um pallet. Em todas as variações, o pallet vai direto para a área de expedição (rampa/stage), sem passar pelo sorter nem pelo PTL (RN-02). Variante identificada: {{variante_pallet}}.

[nivel 2] "Variante de Operação"
  [condicional: variante = Direto]
    conteudo: Picking Pallet Direto — aba exclusiva dentro da tela de Picking Fullcase. O operador seleciona o tipo de picking de forma independente. Fluxo: leitura do endereço de picking → coleta dos itens → etiquetagem de todos os volumes → confirmação de quantidade → leitura da UC do pallet. Pallet direcionado diretamente à expedição sem sorter. Ver [[picking-fullcase]].

  [condicional: variante = Exceção]
    conteudo: Picking Pallet Exceção — aba exclusiva dentro da tela de Picking Exceção. A tarefa só aparece quando atinge a quantidade mínima de pallet cadastrada (RN-04). O WCS gera uma única etiqueta por pallet contendo: endereço de alocação, número de caixas, ordem no carregamento e área de expedição de destino (RN-03). Fluxo: leitura do endereço → leitura da etiqueta de pallet → leitura do código de produto → coleta conforme quantidade orientada. O PTL é dispensado; o coletor informa ao operador que o pallet segue para o stage diretamente.

  [condicional: variante = Por Onda]
    conteudo: Picking Pallet por Onda — paradigma baseado em onda de pedidos (não por pedido individual). A onda é dividida em até 3 tarefas de picking por matriz de fragilidade, uma por operador: (1) classe 3 — pesados; (2) classe 2 — médios; (3) classe 1 — frágeis (RN-07). O Velox calcula a melhor rota/sequência de picking por produtividade e cubagem (RN-08). O operador percorre cada posição bipando os itens na tela do Velox. Ao concluir, leva o pallet ao stage da respectiva matriz. A posição de stage só é liberada quando todos os itens nela são removidos (RN-09).
    [condicional: usa_matriz_fragilidade = yes] → incluir tabela de classes: 1=Frágil · 2=Médio · 3=Pesado.

[nivel 2] "Expedição e Paletização"
  conteudo: Ao final da coleta, o pallet é conduzido à rampa/área de expedição (PTP/stage). A UC do pallet é lida no PRIX fixo no final da rampa.
  [condicional: paletizacao_transportadora = yes]
    conteudo: Parâmetro "Paletização por Transportadora" ATIVO — operador não executa Aloca Pallet; realiza apenas a leitura da UC no PRIX; o WCS considera todos os volumes como expedidos e integra as etiquetas vinculadas à UC (RN-05).
  [condicional: paletizacao_transportadora = no]
    conteudo: Parâmetro "Paletização por Transportadora" INATIVO — operador é informado no coletor que Aloca Pallet não é necessário; lê a UC do pallet no PRIX; WCS considera volumes expedidos e atualiza o dashboard (RN-06).
  cruzar com: [[paletizacao]]

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"]; incluir:
    - RN-01 (aplica-se a itens com quantidade elevada de um mesmo SKU para uma remessa)
    - RN-02 (pallet vai direto à expedição — sem sorter nem PTL, em todas as variantes)
    - RN-03 (Exceção: etiqueta única de pallet com endereço, nº caixas, ordem, área de expedição)
    - RN-04 (Exceção: tarefa aparece apenas ao atingir quantidade mínima de pallet cadastrada)
    - RN-05 (Paletização por Transportadora ATIVO: sem Aloca Pallet; leitura da UC no PRIX)
    - RN-06 (Paletização por Transportadora INATIVO: sem Aloca Pallet; leitura da UC no PRIX)
    - RN-07 (Por Onda: até 3 matrizes de fragilidade, 1 operador por matriz)
    - RN-08 (Por Onda: rota calculada por peso e cubagem)
    - RN-09 (Por Onda: stage liberado apenas quando todos os itens são removidos)

[nivel 2] "Integrações"
  conteudo: Integração de tarefas de picking (recebimento das tarefas de Picking Pallet — variantes Direto/Exceção). Integração de Aloca Pallet (envio quando paletização por transportadora está ativa: WCS integra todas as etiquetas vinculadas à UC). Integração de ondas de pedidos (variante Por Onda: Velox recebe as ondas). Cadastro de produtos/WMS (variante Por Onda: fornece localização dos itens para cálculo de rota).
```

## Notas de rastreabilidade

- Conteúdo canônico e todas as RN: `./DOSSIE.md`.
- Cruza com: [[picking-fullcase]], [[paletizacao]].
