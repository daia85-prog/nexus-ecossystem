# Cadastros e Acessos — Knowledge Card

> CARD abrangente do tópico **Cadastros e Acessos**. Fonte: Top 10 (TITANO, BP, BRF Salvador, BELEZA, Market Chile, Market Peru) + complementares (Guatemala, Payless, Reverse). O ED usa este arquivo para gerar o capítulo de Cadastros e Acessos do `input_json`: parte do **Texto Padrão**, aplica as **Condicionais** conforme o kickoff e absorve as **Observações Livres**.

## Tags
`cadastros` `acessos` `ad` `sso` `ldap` `autenticacao` `login` `usuarios` `operadores`
`perfis` `permissoes` `produto` `sku` `endereco` `posicao` `gestao-enderecos`
`cadastro-produto` `cadastro-usuario` `controle-acesso` `sessao` `token` `bearer`
`openid-connect` `oidc` `ping-federate` `mfa` `autenticacao-local` `importacao-cadastros`
`integracao-cadastros` `wms-cadastros` `rbac` `supervisor` `permissao-master`

## Metadados
- **Bloco:** sistema
- **Gate autenticação:** `if8 = yes` (AD/SSO) — seção de autenticação SSO ativa; `if8 = no` → autenticação local/nativa do Velox
- **Cadastros (produtos, endereços, usuários, operadores):** universais — presentes em todos os projetos independentemente de `if8`
- **Subtópicos com CARD próprio:** *(nenhum no momento — integrações de cadastro tratadas em [[integracao-cadastros]])*
- **Depende de:** [[infraestrutura]] (rede/VPN para acesso SSO), [[integracao-cadastros]] (origem dos cadastros de produtos/endereços quando `g5` fornece via API)
- **Influencia:** todos os blocos operacionais (picking, conferência, packing, sorter, paletização) dependem de cadastros corretos de produto e endereço; [[order-start]] (posto de trabalho vinculado ao usuário)
- **Cruza com:** [[infraestrutura]] (`if8`, `if4` VPN, `if3` VLAN), [[integracao-cadastros]] (`g5` WMS como fonte de cadastros)

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{auth_sso}}` | `if8` | select | yes=AD/SSO · no=Autenticação local · tbd |
| `{{wms_sistema}}` | `g5` | text | Nome do WMS/sistema do cliente (ex: SAP WM, Manhattan, Totvs) |
| `{{cliente}}` | `g1` | text | Nome do cliente |
| `{{vpn}}` | `if4` | YN | yes=VPN presente · no |
| `{{tipo_integracao}}` | `in1` | select | rest · idoc · dblink · excel · json_api · json_pasta · outro · tbd |

> `tbd`/vazio → omitir a subseção correspondente. `if8 = tbd` → descrever autenticação local com nota de validação pendente.

---

## Texto Padrão
*(Base detalhada presente em praticamente todo projeto. O ED parte daqui e aplica as condicionais.)*

O WCS Velox exige a configuração prévia de cadastros base antes do início da operação. Esses cadastros dividem-se em quatro categorias principais: **produtos (SKUs)**, **endereços/posições**, **usuários e operadores**, e **perfis de acesso (permissões)**. O capítulo descreve como cada categoria é mantida e como o acesso ao sistema é controlado.

---

### 1. Cadastro de Produtos (SKUs)

O WCS mantém uma base interna de produtos com os atributos necessários para a operação: código SKU, descrição, unidade de medida, peso unitário, dimensões (para cubagem, quando aplicável), e eventuais flags de controle (produto frágil, perigoso, PVAR, PFIX, etc.).

Os cadastros de produto podem ser originados de duas formas:

- **Integração com WMS (`g5`):** o WMS envia os dados de produto ao WCS via integração (REST, IDoc, DBLink ou outro — ver `in1`). Nesse cenário, o WCS consome o cadastro do WMS sem necessidade de manutenção manual rotineira. → ver [[integracao-cadastros]].
- **Cadastro manual / importação local:** quando não há integração de produtos, a equipe responsável alimenta os dados diretamente no Velox, podendo utilizar importação via planilha (Excel) ou interface de gestão.

> **Atenção ao cadastro incompleto:** volumes cujo SKU não possui cadastro completo no WCS (ex: peso ausente, dimensão não informada) são automaticamente direcionados para o rejeito ao passarem pelo portal do sorter, quando o sorter está em escopo. O WCS exibe alerta no início da onda informando os SKUs com cadastro pendente.

Para projetos com **SKUs de fornecedores terceiros** (ex: BRF Salvador), o WCS disponibiliza uma tela de cadastro específica para associar o código do SKU/DUN14 à regra de formação de lote do fornecedor, permitindo a composição correta do lote no recebimento.

---

### 2. Cadastro de Endereços / Posições

O WCS disponibiliza uma tela de **Gestão de Endereços** destinada ao cadastro, alteração e exclusão de posições de armazenagem e picking. As funcionalidades incluem:

- **Criação e edição de endereços:** inclusão de novos endereços com seus atributos (classificação, capacidade, tipo de produto compatível).
- **Ativação/inativação de endereços:** o operador (com permissão adequada) pode ativar ou inativar um endereço conforme a necessidade operacional. O WCS **não permite** alterar o status de endereços que possuam coleta prevista já integrada — nesse caso, o sistema exibe mensagem de erro informando a existência de coletas pendentes.
- **Classificação de endereços:** os endereços são classificados por tipo (ex: Pulmão, Fullcase, Fracionado, Misto). O WCS prioriza a coleta em endereços de picking; o pulmão é utilizado apenas para itens sem posição de picking disponível na linha de fracionados.

---

### 3. Cadastro de Usuários e Operadores

Todo acesso ao WCS exige um usuário previamente cadastrado no sistema. O cadastro de usuários é realizado pela equipe responsável (geralmente TI/operação do cliente ou equipe Invent durante a implantação) diretamente na interface administrativa do Velox.

**Atributos do cadastro de usuário:**
- Login (nome de usuário ou e-mail corporativo, conforme o modo de autenticação)
- Perfil de acesso (ver seção 4)
- Vínculo com posto de trabalho (quando aplicável — ex: impressora e posto associados ao usuário)

**Operadores de coletor Android** também são cadastrados no WCS; seu login é realizado diretamente no aplicativo do coletor com as credenciais do sistema.

---

### 4. Perfis de Acesso e Permissões

O WCS adota um modelo de **controle de acesso baseado em perfis (RBAC)**. Os perfis são criados e configurados diretamente no Velox, permitindo total flexibilidade na definição de níveis de acesso conforme a necessidade da operação.

Exemplos típicos de perfis:
- **Operador:** acesso às telas operacionais (picking, conferência, reabastecimento). Não acessa configurações ou telas de gestão.
- **Supervisor:** acesso às telas operacionais e de gestão (autorização de corte, validação de ajustes de estoque, criação de tarefas de recall/movimentação forçada). Algumas ações exigem autenticação de supervisor mesmo quando o operador está logado (ex: corte de item, item órfão).
- **Administrador / MASTER:** acesso completo, incluindo configurações de parâmetros, gestão de cadastros, reabertura de processos já finalizados (ex: nota fiscal no projeto Reverse).
- **Perfis customizados:** criados conforme necessidade da operação (ex: perfil para auditoria, para etiquetagem, para gestão de estoque exclusivamente).

> Os perfis e permissões detalhados são definidos em conjunto entre Invent e o cliente durante a fase de implantação.

---

### 5. Autenticação — Acesso ao WCS

O acesso à interface web do WCS (Velox) é controlado por autenticação. O modo de autenticação depende da configuração do campo `if8` no kickoff (ver **Condicionais**).

**Independente do modo de autenticação**, o WCS aplica as seguintes regras de sessão:
- **Sessão única por usuário:** cada usuário mantém apenas 1 sessão ativa simultaneamente. Um novo login encerra automaticamente a sessão anterior.
- **Duração máxima de sessão:** configurável por projeto (referência: 9 horas de atividade — visto em TITANO).
- **Logs de autenticação:** o WCS registra data/hora de login/logout, identificação do usuário, tentativas com falha e sucesso, e encerramento de sessões duplicadas.

---

## Condicionais

### Autenticação — derivado de `if8`

#### SE `if8 = yes` (AD/SSO) → SUBSTITUI a seção 5 pela subseção SSO

O acesso ao WCS é realizado via **SSO (Single Sign-On)**, integrado ao provedor de identidade corporativo do cliente. O protocolo utilizado é definido em conjunto com o cliente durante a implantação (exemplos: **OpenID Connect / OIDC** via Ping Federate — TITANO/Stellantis; **LDAP/AD** corporativo).

**Fluxo de autenticação SSO (padrão OIDC):**
1. O usuário acessa a interface web do WCS (Velox);
2. O sistema redireciona para a tela de autenticação do provedor de identidade corporativo;
3. O usuário realiza o login com suas credenciais corporativas (MFA gerenciado pelo provedor, não pelo WCS);
4. O provedor valida as credenciais e retorna um token de autenticação ao WCS;
5. O WCS valida o token, identifica o usuário e libera o acesso conforme o **perfil de acesso previamente cadastrado no Velox**.

> **Importante:** o provedor de identidade (AD/SSO) atua exclusivamente como camada de **autenticação**. O gerenciamento de perfis, permissões e níveis de acesso é realizado **internamente no WCS (Velox)** — o SSO não substitui o cadastro de usuário no Velox nem a definição de perfis. Os usuários devem ser cadastrados manualmente no WCS pela equipe responsável, com os perfis de acesso configurados diretamente no sistema.

O acesso ao WCS é realizado pela rede interna (VPN/LAN). Acesso via internet pode ser habilitado mediante requerimento do cliente.

#### SE `if8 = no` (Autenticação local) → MANTÉM a seção 5 padrão

O WCS utiliza **autenticação nativa** (login/senha gerenciados diretamente no Velox). O usuário acessa a interface web com as credenciais cadastradas no sistema. Não há integração com diretório externo.

Para **integrações REST** que exigem autenticação entre sistemas (ex: WMS → WCS), o WCS adota o padrão de autenticação por **Bearer Token**: o sistema externo autentica via `POST /autenticacao` com Basic Auth e recebe um token JWT válido por 24 horas, que deve ser incluído como `Authorization: Bearer <token>` nas requisições subsequentes.

Erros comuns de autenticação de integração:
- `401` / `403` — Header Authorization ausente ou inválido
- `401` / `403` — Usuário ou senha inválidos
- `400` — Requisição malformada / JSON inválido

#### SE `if8 = tbd` → DESCREVER autenticação local com nota `[VALIDAR COM CLIENTE]`

### Origem dos Cadastros de Produto — derivado de `g5` e `in1`

#### SE `g5` preenchido E `in1 != tbd` → ADICIONA subseção "Integração de Cadastros de Produto"
Os cadastros de produto são originados do **`{{wms_sistema}}`** via integração `{{tipo_integracao}}`. O WCS consome os dados do WMS, dispensando manutenção manual da base de SKUs para cadastros correntes. Novos produtos ou alterações de atributos devem ser enviados pelo WMS antes de entrar em operação. → ver [[integracao-cadastros]].

#### SE `g5` vazio OU `in1 = excel` → ADICIONA nota sobre carga manual
Os cadastros de produto são mantidos manualmente no Velox, podendo ser carregados via importação de planilha (Excel) ou inserção direta pela interface administrativa. A equipe responsável pela acurácia dos dados é definida no projeto (Invent ou cliente).

### Ações que exigem autenticação de supervisor (independente de `if8`)

Determinadas ações críticas exigem autenticação adicional de um usuário com perfil Supervisor, mesmo que o operador já esteja logado no sistema:
- Corte de item na conferência (quando configurado — `s1p`/`s1c`)
- Validação e autorização de ajuste de estoque pós-auditoria
- Operação com item órfão identificado em posição de picking (NavePark)
- Criação de tarefas de recall e movimentação forçada (perfil Supervisor ou superior)

---

## Observações Livres do Kickoff

O ED deve considerar os seguintes pontos ao redigir o capítulo:

- **`g1` (cliente):** mencionar o nome do cliente ao descrever o provedor de identidade SSO (ex: "provedor de identidade corporativo da {{cliente}}").
- **`if8 = yes` + `if4 = yes` (VPN):** reforçar que o acesso SSO ocorre pela rede interna/VPN; acesso externo depende de requerimento do cliente.
- **`g5` preenchido:** mencionar o sistema do cliente como fonte primária dos cadastros de produto na subseção de integração.
- **Observação que restringe escopo de cadastro** (ex: "cadastro de produto é 100% responsabilidade do WMS") → SUBSTITUIR a subseção de cadastro manual pelo cenário exclusivo de integração, omitindo referências à manutenção manual.
- **Observação sobre perfis específicos** (ex: perfis customizados por área) → ADICIONAR como subseção nomeada na seção de Perfis de Acesso, com `[OBS INTERNA]` se precisar de validação.
- **Observação sobre workflow de solicitação de acesso** (ex: IdentityMe da Stellantis) → ADICIONAR nota informativa ao final da seção de Cadastro de Usuários.

---

## Regras de Negócio

- **RN-01** (todos): todo acesso ao WCS exige usuário previamente cadastrado no Velox com perfil de acesso definido.
- **RN-02** (todos): o WCS mantém sessão única por usuário — novo login encerra a sessão anterior automaticamente.
- **RN-03** (todos): o WCS registra logs de autenticação (login, logout, falhas) para fins de auditoria.
- **RN-04** (`if8 = yes`): o provedor SSO autentica o usuário, mas o gerenciamento de perfis e permissões é realizado exclusivamente no Velox — o SSO não substitui o cadastro interno de usuários.
- **RN-05** (todos): endereços com coleta prevista integrada não podem ter o status alterado (ativação/inativação) pelo WCS; o sistema exibe mensagem de erro.
- **RN-06** (todos): SKUs com cadastro incompleto (ex: peso ausente) geram rejeito automático no sorter e alerta no início da onda.
- **RN-07** (`g5` com integração): novos SKUs ou alterações de atributos devem ser enviados pelo WMS antes de entrar em operação; o WCS não cria produtos que não existam na base integrada.
- **RN-08** (projetos com SKU terceiro — BRF Salvador): o WCS mantém tela de cadastro para associar SKU/DUN14 de fornecedores terceiros à regra de formação de lote; a acurácia desses dados é responsabilidade da operação do cliente.
- **RN-09** (autenticação REST — integrações): o token de autenticação gerado via `POST /autenticacao` expira em 24 horas; sistemas integrados devem renovar o token periodicamente.
- **RN-10** (todos): ações críticas (corte com supervisor, ajuste de estoque, item órfão) exigem autenticação adicional de usuário com perfil Supervisor, independentemente do usuário logado na sessão ativa.
- **RN-11** (todos): o WCS não permite compartilhamento de estoque entre empresas distintas operando no mesmo ambiente (BP) — o cadastro de produtos e posições respeita a segregação por empresa.

---

## Insights e Padrões

### Padrões identificados
- O **cadastro de endereços com ativação/inativação e trava por coleta prevista** aparece como padrão consolidado (BP), sendo o comportamento esperado na tela de Gestão de Endereços do Velox.
- **Autenticação de supervisor para ações críticas** é recorrente (corte, auditoria, itens órfãos) e independe do modo de autenticação SSO/local — é uma camada de controle operacional, não de autenticação de acesso.
- **SSO/OIDC via Ping Federate** foi documentado explicitamente em TITANO (Stellantis) — é o caso mais detalhado de `if8 = yes` nos Top 10. Outros projetos Top 10 não documentam SSO explicitamente, sugerindo que a maioria dos projetos usa autenticação local.
- **Bearer Token para APIs de integração** é o padrão adotado nos projetos Market Chile e Payless (ambos Tottus) para autenticação entre WMS e WCS via REST — indica padronização para a família de projetos REST.

### Variações significativas
- **TITANO (Stellantis):** SSO via Ping Federate + OIDC, MFA gerenciado pelo provedor, sessão máxima de 9h, workflow de solicitação de acesso via IdentityMe da Stellantis. Caso mais completo de `if8 = yes`.
- **BP (Basso Pancotte):** foco no cadastro de endereços com classificação Pulmão/Fullcase/Fracionado/Misto e trava por coleta prevista. Também tem controle de estoque por empresa (dois clientes no mesmo CD).
- **BRF Salvador:** cadastro de SKU terceiro para regra de formação de lote — funcionalidade específica para operações com fornecedores externos; acurácia é responsabilidade da operação do cliente.
- **Guatemala:** autenticação por usuário/senha para ações específicas (reimpressão de etiqueta pós-confirmação) — evidência de controle de acesso granular mesmo sem SSO.
- **Reverse:** usuários com permissão MASTER podem reabrir notas fiscais já finalizadas — evidência de perfil especial com capacidade de desfazer operações concluídas.
- **Market Chile / Payless:** autenticação REST com Bearer Token de 24h para integração WMS→WCS — padrão para projetos Tottus.

### Lacunas conhecidas (candidatas a novo campo no kickoff)
- Não há campo no kickoff para **"protocolo SSO específico"** (OIDC, SAML, LDAP simples) — hoje inferido em texto livre. Candidato a select em `if8`.
- Não há campo para **"duração de sessão"** — hoje aparece apenas em TITANO (9h). Candidato a campo numérico `if_session_h`.
- **"Workflow de solicitação de acesso"** (ex: IdentityMe, ServiceNow) não tem campo no kickoff — aparece em texto livre. Candidato a campo `if_access_workflow`.
- Não há distinção no kickoff entre **"SSO para interface web"** e **"autenticação para coletor Android"** — coletores podem usar autenticação local mesmo quando a web usa SSO.

### Inferências
- **Inferência:** quando `if8 = yes`, o projeto quase sempre é de grande porte ou tem cliente corporativo com diretório consolidado (ex: multinacional, varejo de grande escala). · **Confiabilidade:** média · **Base:** TITANO (Stellantis) é o único caso Top 10 documentado; ausência em projetos menores.
- **Inferência:** quando `in1 = rest` E `g5` está preenchido, é altamente provável que a autenticação de integração use Bearer Token de 24h. · **Confiabilidade:** alta · **Base:** Market Chile, Payless (ambos REST + Tottus).
- **Inferência:** a tela de Gestão de Endereços (com ativação/inativação e trava por coleta) é funcionalidade padrão do Velox presente em todos os projetos, independentemente do escopo. · **Confiabilidade:** alta · **Base:** BP, comportamento consistente com outros projetos.

---

## Dependências (grafo)

- **Entra antes de:** todos os módulos operacionais — cadastros devem estar configurados antes do início da operação
- **Depende de (infra):** [[infraestrutura]] → `if8` (AD/SSO), `if4` (VPN), `if3` (VLAN), `if1` (SO), `if2` (BD)
- **Depende de (integração):** [[integracao-cadastros]] → importação de SKUs, endereços e usuários via API quando `g5` + `in1` ativos
- **Alimenta:** [[order-start]] (posto/usuário vinculado), [[picking-pbl]] / [[picking-fullcase]] / [[picking-cart]] (operadores com perfil de coleta), [[conferencia]] (autenticação de supervisor para corte), [[gestao-estoque]] (supervisor para ajuste/auditoria), [[etiquetas]] (controle de acesso para reimpressão)
- **Cruza com:** [[infraestrutura]] (configuração de rede/servidor para SSO), [[integracao-cadastros]] (fluxo de dados de produto e endereço vindo do WMS)
