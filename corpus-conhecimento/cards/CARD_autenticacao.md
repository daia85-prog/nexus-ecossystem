# Autenticação — Knowledge Card

> CARD do tópico **Autenticação** (Fase 1 do Golden Standard, `JSON_DOCS.md` Seção 3). Até a v3.1 do ED este capítulo era **injetado fixo pelo docxBuilder**, extraído byte-a-byte do `.docx` template — sempre o mesmo conteúdo (Basic Auth → Bearer token da API do WCS), **independente do protocolo de integração real do projeto** (`in1`). Isso produzia um capítulo de autenticação REST em projetos que integram por IDoc SAP, DBLink ou arquivo — onde não existe handshake HTTP nenhum (achado CAT-06/A2 da revisão I26.4018/BR Supply). A partir da v3.2, o ED **gera este capítulo** como qualquer outro tópico, usando o Texto Padrão/Condicionais abaixo. O conteúdo da variante REST/JSON abaixo foi extraído fielmente do texto que estava no template — não é invenção nova, é o mesmo conteúdo testado, agora corretamente condicionado.

## Tags
`autenticacao` `login` `token` `basic-auth` `bearer-token` `sso` `active-directory` `ad`
`api-auth` `seguranca-integracao` `in1` `if8`

---

## Metadados
- **Bloco:** autenticacao (Fase 1 — entre os capítulos de abertura e a Fase 2/Integração)
- **Gate:** sempre presente (todo projeto WCS documenta como sistemas e operadores se autenticam)
- **Depende de:** nenhum
- **Influencia:** nenhum capítulo depende deste — é informativo, mas deve vir **antes** de [[integracao]] no documento (Fase 1 < Fase 2)
- **Cruza com:** [[integracao]] (o protocolo `in1` que define a variante deste capítulo é o mesmo que define o formato dos capítulos de integração)

---

## Variáveis (slot → campo do kickoff → opções)
| Slot | Campo | Tipo | Opções / Tradução |
|------|-------|------|-------------------|
| `{{in_tipo}}` | `in1` | select | `rest`=REST · `idoc`=IDoc · `dblink`=DBLink · `excel`=Excel · `json_api`=JSON via API · `json_pasta`=JSON em pasta · `outro`=Outro · `tbd`=A definir — **determina a variante inteira deste capítulo** |
| `{{in_endpoint}}` | `in_endpoint` | text | URL base do endpoint (ex: `https://wms.cliente.com.br/api/v1`) |
| `{{ad_sso}}` | `if8` | YN | `yes`=Tem AD/SSO · `no` — **governa se existe subseção de login do operador via AD/SSO**, adicional à autenticação de sistema-a-sistema |

> **Importante:** `in1` aqui descreve a autenticação da **API do WCS** (sistema-a-sistema, para quem consome/envia dados via integração). `if8` descreve a autenticação do **operador humano** ao logar nas estações do WCS. São dois mecanismos independentes — um projeto pode ter REST+Bearer para integração e AD/SSO para login de operador, ao mesmo tempo.

---

## Texto Padrão
*(Base mínima presente em todo projeto — a variante detalhada vem das Condicionais por `in1`.)*

Este capítulo descreve os mecanismos de autenticação do sistema {meta.projeto}: como sistemas externos autenticam chamadas de integração com o WCS e, quando aplicável, como o operador autentica seu acesso às estações de trabalho.

---

## Condicionais

### Por Protocolo de Integração — derivado de `in1`

---

#### SE `in1` = `rest` ou `in1` = `json_api` → Autenticação via Basic Auth + Bearer Token

**Como Autenticar**

**Obter Token de Acesso:**
Endpoint: `POST {{in_endpoint}}/autenticacao`

Envie suas credenciais usando Basic Authentication para receber um token de acesso.

**Headers Obrigatórios:**
- `Content-Type: application/json`
- `Authorization: Basic <suas_credenciais_em_base64>`

**Como Criar o Header Authorization:**
1. Combine seu usuário e senha: `usuario:senha`
2. Codifique em Base64: `dXN1YXJpbzpzZW5oYQ==`
3. Adicione "Basic" antes: `Basic dXN1YXJpbzpzZW5oYQ==`

**Resposta de Sucesso:**
```json
{
  "mensagem": "Autenticação realizada com sucesso.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Usar o Token nas Outras Requisições:**
Após obter o token, inclua-o no header `Authorization` de todas as outras requisições: `Authorization: Bearer <seu_token_aqui>`

**Possíveis Erros:**

| Status | Mensagem | Causa |
|--------|----------|-------|
| 403 | Autenticação básica é obrigatória. | Header Authorization ausente ou inválido |
| 403 | Usuário ou senha inválidos. | Credenciais incorretas |
| 400 | Erro ao processar a autenticação. | Erro interno do servidor |

**Resumo do Fluxo:**
1. Autenticar: Envie `POST {{in_endpoint}}/autenticacao` com Basic Auth.
2. Receber: Token na resposta JSON.
3. Usar: Inclua `Authorization: Bearer <token>` nas próximas requisições.

**Importante:** guarde o token com segurança — ele expira automaticamente em 24h.

> Exemplos práticos completos (JavaScript, cURL, Python) fazem parte do padrão consolidado deste fluxo e podem ser incluídos como `json_block` adicionais se o kickoff pedir exemplos de código no documento.

---

#### SE `in1` = `idoc` → Autenticação SAP (RFC/ALE)

Não existe endpoint HTTP nem token Bearer nesta variante. A comunicação entre SAP e WCS ocorre via mensagens IDoc, autenticadas pela configuração de conexão RFC (Remote Function Call) previamente estabelecida entre os dois sistemas.

O acesso é controlado por um **usuário técnico de conexão** (usuário de serviço configurado no SAP com permissões de ALE/ IDoc), não por credenciais de API expostas a cada chamada. A validação de origem ocorre no nível da configuração de parceiro ALE (partner profile), não em um header de requisição.

**RN:** a criação e manutenção do usuário técnico de conexão e do partner profile é responsabilidade conjunta Invent + time SAP do cliente — não é uma tela nem uma configuração exposta no WCS.

---

#### SE `in1` = `dblink` → Autenticação por Credencial de Banco de Dados

Não há autenticação de API neste modelo — o WCS acessa diretamente as views/tabelas compartilhadas do WMS usando uma credencial de conexão ao banco de dados (usuário/senha ou autenticação integrada do SGBD), configurada uma única vez na infraestrutura.

**RN:** a credencial de conexão ao banco deve ter permissão apenas de leitura (e, se aplicável, escrita restrita às tabelas de retorno) — nunca acesso administrativo ao banco do WMS.

---

#### SE `in1` = `excel` ou `in1` = `json_pasta` → Sem Autenticação de API

Não há handshake de autenticação de sistema — o acesso é controlado por **permissão de rede/pasta compartilhada** (ou upload manual autenticado pelo próprio login do operador no WCS). Não descrever endpoints, tokens ou headers para esta variante.

---

#### SE `in1 = tbd` → GAP

Gerar o capítulo com um GAP visível (`tipo: warning`, `texto: "GAP: protocolo de integração (in1) ainda não definido — a variante de autenticação de sistema-a-sistema depende dessa definição."`) em vez de assumir uma variante.

---

### Login do Operador — derivado de `if8`

#### SE `if8 = yes` → ADICIONA subseção "Login via Active Directory / SSO"

Além da autenticação de integração de sistemas (acima), o operador realiza login nas estações do WCS utilizando suas credenciais corporativas via Active Directory/SSO do cliente, sem necessidade de usuário/senha próprio do WCS.

#### SE `if8 = no` ou `tbd` → Login local do WCS

O operador realiza login nas estações do WCS com usuário e senha cadastrados localmente no sistema — ver [[cadastros-acessos]] para o cadastro de usuários e perfis.

---

## Observações Livres do Kickoff

- **`in_endpoint`** → preencher `{{in_endpoint}}` no endpoint de autenticação. Se vazio, usar `https://[wms-host]/api` como placeholder e sinalizar GAP.

---

## Regras de Negócio
- **RN-01** (REST/JSON): o token emitido expira em 24h — requisições após expiração devem reautenticar.
- **RN-02** (REST/JSON): falhas de autenticação retornam código HTTP e mensagem descritiva (403 credencial inválida/ausente, 400 erro de processamento) — nunca silenciosas.
- **RN-03** (todos): a autenticação de sistema-a-sistema (`in1`) e a autenticação de login do operador (`if8`) são mecanismos independentes — não descrever uma como se fosse a outra.
- **RN-04** (IDoc/SAP): a criação do usuário técnico de conexão RFC/ALE é pré-requisito para a integração funcionar — confirmar com o time SAP do cliente antes de considerar concluído.

---

## Insights e Padrões

### Padrões identificados
- **A variante REST/Basic→Bearer é o padrão histórico do WCS/Velox** — vinha injetada fixa em todo documento até a v3.1 do ED, o que a tornava incorreta sempre que `in1 != rest/json_api`.

### Lacunas conhecidas (candidatas a novo campo/trava no kickoff)
- Não há campo no kickoff distinguindo se o **cliente exige rotação/renovação de token** diferente de 24h — hoje o padrão de 24h é assumido para todos os projetos REST. Candidato a campo de texto livre.
- `if8` cobre "tem AD/SSO" de forma genérica — não distingue se o SSO é exigido para **todas** as estações ou só para telas administrativas.

---

## Dependências (grafo)
- **Entra antes de:** [[integracao]] (Fase 1 precede Fase 2 no Golden Standard) — mas não há dependência técnica real, apenas ordem documental.
- **Compartilha variável com:** [[integracao]], [[integracao-wcs-wms]], [[integracao-wms-erp]], [[integracao-cadastros]], [[integracao-pedidos]] (todos usam `in1` para determinar sua variante)
