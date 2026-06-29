# NEXUS — Plano de Produto
> Documento vivo. Atualizar a cada mudança de rota ou decisão arquitetural.
> Criado em: 2026-06-03 | Stack: React + Vite + Supabase + Netlify

---

## CONTEXTO

**NEXUS** é uma plataforma interna da Invent para coleta estruturada de dados em projetos WCS (Warehouse Control System). Substitui o "App Kickoff v3.4".

- ~28 projetos/ano, projetos de alto valor
- O JSON exportado alimenta uma IA que gera 80% da Especificação de Software automaticamente
- Dois perfis de usuário: **Gestor** (conduz o kickoff) e **Time Operacional** (complementa dados técnicos)
- Futuro: integração com Claude AI (projetos RAG via API) e MCP

---

## STACK DEFINIDA

| Camada | Tecnologia | Motivo |
|---|---|---|
| Frontend | React + TypeScript (Vite) + MUI | Padrão da Invent (skill `gerar-tela`). Tema dark+amarelo em `src/theme.ts`. |
| Hosting | Netlify | Deploy simples, CI/CD via git push |
| Banco de dados | Supabase (PostgreSQL) | Auth, realtime, storage, REST API — tudo em um |
| Auth (fase 2) | Supabase Auth | E-mail + senha, depois OAuth Google |
| AI (fase 4) | LLM On-Premise (servidor próprio Invent) | LLM open-source (Llama / Mistral) rodando em servidor dedicado; sem custo por requisição, sem dependência externa |
| MCP (fase 4) | MCP Server customizado | Expõe dados do NEXUS como ferramentas para IAs externas (`get_project`, `list_projects`, `search_projects`) |

---

## ARQUITETURA DE DADOS (Supabase)

```
projects
  id          uuid PK
  code        varchar(8) UNIQUE  -- ex: "WCS-X7K2", gerado automaticamente
  name        text               -- nome do projeto
  client      text               -- nome do cliente
  created_at  timestamptz
  updated_at  timestamptz

project_data
  id          uuid PK
  project_id  uuid FK → projects.id
  role        enum('gestor', 'time', 'shared')
  data        jsonb              -- respostas do formulário
  notes       jsonb              -- observações por seção
  updated_at  timestamptz

audit_log
  id          uuid PK
  project_id  uuid FK → projects.id
  field_key   text               -- ex: "g1", "p_r"
  old_value   text
  new_value   text
  role        enum('gestor', 'time')
  session_id  text               -- identifica quem alterou (pré-auth)
  created_at  timestamptz

backups
  id          uuid PK
  project_id  uuid FK → projects.id
  snapshot    jsonb              -- dump completo do projeto
  trigger     enum('auto', 'manual')
  created_at  timestamptz
```

**Regra de visibilidade:**
- Gestor: vê e edita `role = 'gestor'` + `role = 'shared'`
- Time: vê (leitura) `role = 'gestor'`, edita `role = 'time'` + `role = 'shared'`
- Os campos exclusivos do time NÃO aparecem na view do gestor

---

## FLUXO DE UM PROJETO

```
Gestor abre NEXUS
  → seleciona "Gestor" na tela de entrada
  → cria novo projeto → recebe código único (ex: WCS-X7K2)
  → preenche formulário de kickoff
  → salva → dados gravados no Supabase
  → exporta JSON/MD se quiser

Time Operacional abre NEXUS
  → seleciona "Time" na tela de entrada
  → digita o código do projeto (WCS-X7K2)
  → vê as respostas do gestor (somente leitura nas seções do gestor)
  → preenche seus campos exclusivos
  → salva → dados complementam o projeto no Supabase
```

---

## FASES DE EXECUÇÃO

---

### FASE 0 — Agora (features pendentes + rebranding)
> Sem banco de dados ainda. App local/Netlify estático. Completar o produto antes de conectar infra.

#### 0.1 Rebranding para NEXUS
- [ ] Renomear o app de "Checklist Kickoff WCS" para **NEXUS**
- [ ] Criar logo SVG simples (marca geométrica + wordmark "nexus" + "by invent")
- [ ] Atualizar título, favicon e meta tags no `index.html`

#### 0.2 Features pendentes do spec (full-spec.md)
- [ ] **Mezanino detalhe por nível** — após informar N níveis, aparecem N inputs de detalhe
- [ ] **Order Start — lista dinâmica de dispositivos** — botão "+" cria itens com tipo/qtd/responsável; substitui perguntas fixas de equipamentos
- [ ] **PBL — múltiplas linhas de picking** — botão "+ Linha" cria sub-cards PBL completos e independentes (crítico)
- [ ] **Editor dinâmico de etiquetas** — botão "+" cria etiquetas com nome, tamanho, campos internos (nome, é código, tipo do código)
- [ ] **Botão "Salvar Seção"** — no rodapé de cada card, abre modal com JSON/MD apenas daquela seção
- [ ] **Modal de confirmação** — para "Limpar tudo" e "Resetar seção" (evitar perda acidental)
- [ ] **Aba "Revisar"** — toggle entre Formulário e Revisão, mostrando só o que foi preenchido com botão "Editar" por seção
- [ ] **Import de MD** — aceitar .md no carregar/drag-and-drop, além de .json
- [ ] Ajustar export JSON para incluir `pbl_lines`, `os_devices`, `mez_details`, `etiquetas_custom` como arrays no root
- [ ] Ajustar import de JSON para popular todos os dados dinâmicos

#### 0.3 Ajustes gerais
- [ ] Renomear arquivo de `App Kickoff v39.tsx` para `App.tsx` definitivo
- [ ] Adicionar `date` no `meta` do JSON exportado (ISO 8601)
- [ ] Testar import/export completo com dados dinâmicos

---

### FASE 1 — Curto prazo (infraestrutura SaaS)
> Conectar ao Supabase. Projetos salvos na nuvem. Deploy no Netlify.

#### 1.1 Setup inicial
- [ ] Criar projeto no Supabase
- [ ] Criar projeto no Netlify conectado ao repositório git
- [ ] Configurar variáveis de ambiente (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)
- [ ] Instalar `@supabase/supabase-js`
- [ ] Criar as tabelas no Supabase (schema acima)

#### 1.2 Tela de entrada — seleção de perfil (sem senha)
- [ ] Tela inicial: logo NEXUS + dois botões "Gestor" e "Time Operacional"
- [ ] Sessão local com `sessionStorage` (role persiste durante a sessão)
- [ ] Se Time: campo para digitar código do projeto

#### 1.3 Persistência de projetos
- [ ] Ao salvar (botão "Salvar Kickoff"), gravar no Supabase em vez de só exportar
- [ ] Gerar código único de 8 chars (ex: `WCS-X7K2`) ao criar novo projeto
- [ ] Mostrar o código do projeto de forma destacada na UI
- [ ] Botão "Copiar código" para compartilhar com o time

#### 1.4 Lista de projetos
- [ ] Aba/tela "Projetos" listando todos os projetos salvos
- [ ] Card por projeto com: nome, cliente, código, data, progresso de preenchimento
- [ ] Botão "Abrir" carrega o projeto no formulário
- [ ] Botão "Novo Projeto" limpa e inicia formulário vazio

#### 1.5 Auto-save e backup
- [ ] Auto-save a cada 60 segundos se houver alterações não salvas
- [ ] Indicador visual de status ("Salvo", "Salvando...", "Alterações pendentes")
- [ ] Backup automático a cada 30 minutos na tabela `backups`
- [ ] Backup manual via botão na tela de projeto

#### 1.6 Audit log
- [ ] A cada alteração de campo, registrar na tabela `audit_log` com old/new value
- [ ] Tela simples de "Histórico" por projeto (lista as alterações cronologicamente)
- [ ] Exportar histórico como CSV ou MD

---

### FASE 2 — Médio prazo (multi-role + campos exclusivos)
> Gestor e time com views separadas no mesmo projeto.

#### 2.1 View do Gestor
- [ ] Formulário atual = view do gestor
- [ ] Indicação visual de quais seções o time já preencheu ("Time: 3/8 campos")

#### 2.2 View do Time Operacional
- [ ] Seções do gestor aparecem como cards somente-leitura (colapsados por padrão, expansíveis)
- [ ] Seções exclusivas do time aparecem editáveis abaixo
- [ ] Definir quais seções/perguntas são exclusivas do time (a definir com equipe)
- [ ] Campos compartilhados (visíveis e editáveis por ambos) marcados com ícone especial

#### 2.3 Merging de dados
- [ ] JSON exportado "completo" une dados do gestor + time + shared em uma estrutura única
- [ ] MD exportado tem seções separadas por `## Gestor` e `## Time`

#### 2.4 Notificações simples
- [ ] Quando time preenche campos, projeto na lista do gestor mostra badge "Atualizado"
- [ ] Sem push notification por enquanto — apenas indicador visual ao abrir o app

---

### FASE 3 — Login real (Supabase Auth)
> Substituir seleção simples por autenticação real.

- [ ] Tela de login com e-mail + senha (Supabase Auth)
- [ ] Cada usuário tem `role` associado no perfil (gestor / time / admin)
- [ ] Remover seleção manual de cargo — role vem do JWT
- [ ] RLS (Row Level Security) no Supabase para garantir que cada role só acessa o que deve
- [ ] Convite de usuários por e-mail (gestor convida membros do time para um projeto)
- [ ] Histórico de alterações com nome do usuário (não mais session_id anônimo)

---

### FASE 4 — IA e MCP (longo prazo)
> Integração com os projetos Claude já criados.

#### 4.1 Claude API + RAG
- [ ] Botão "Gerar Especificação" no projeto → envia JSON completo para Claude API
- [ ] Claude gera ~80% da Especificação de Software com base nos dados do NEXUS
- [ ] Output aparece em modal com opção de baixar como MD ou DOCX
- [ ] Conectar aos projetos RAG já existentes via `project_id` do Claude

#### 4.2 MCP Server
- [ ] Criar MCP server que expõe os dados do NEXUS como ferramentas
- [ ] Ferramentas: `get_project(code)`, `list_projects()`, `get_audit_log(code)`, `search_projects(query)`
- [ ] Permite que IAs externas consultem e atualizem projetos NEXUS
- [ ] Documentar schema MCP para uso nos prompts dos projetos Claude

#### 4.3 Futuro (v5+)
- [ ] Banco de dados dedicado (sair do plano free do Supabase)
- [ ] Domínio próprio (nexus.invent.com.br ou similar)
- [ ] Áreas por especialidade: Engenharia, Documentação, Infra, Comercial
- [ ] Upload do PDF da Dai (infra) integrado ao projeto
- [ ] Auto-preenchimento entre seções (ex: IA no Sorter → preenche Servidor IA na Infra)
- [ ] Disparo de e-mail (quando gestor salva, notifica Dai com campos de infra)
- [ ] Edição colaborativa em tempo real (Supabase Realtime)
- [ ] App mobile (React Native ou PWA)

---

## REGRAS PERMANENTES DE IMPLEMENTAÇÃO

1. **MUI como biblioteca de UI obrigatória.** Todos os componentes usam `@mui/material` (Box, Stack, Paper, Button, TextField, Dialog, Chip, etc.). Supabase client e React são as únicas outras dependências relevantes.
2. **Tema centralizado em `src/theme.ts`.** Cores, tipografia, border-radius e overrides de componente ficam todos no tema MUI. Proibido hardcodar hex de cores fora do tema, exceto para cores semânticas eventuais (success/warning/info). Sem Tailwind ou inline styles.
3. **Sem emojis** na UI do app.
4. **Fornecimento sempre específico**: "Quem fornece o PDV?", não "Quem fornece equip?".
5. **Dados dinâmicos** (`pbl_lines`, `os_devices`, `mez_details`, `etiquetas_custom`) são arrays no root do JSON, não dentro de `sections`.
6. **Audit log** em toda alteração de campo — nunca pular.
7. **Backup antes de qualquer reset** — salvar snapshot antes de limpar dados.
8. **Código do projeto** sempre visível e copiável na UI enquanto o projeto estiver aberto.

---

## STATUS ATUAL

- **Versão do código:** 3.4 (single file TSX)
- **Hosting:** local (Vite dev server)
- **Banco:** nenhum (dados apenas em memória)
- **Fase atual:** 0 (features pendentes + rebranding)
- **Próxima ação:** rebranding NEXUS + logo, depois PBL múltiplas linhas (feature mais crítica)
