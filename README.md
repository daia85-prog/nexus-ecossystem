# NEXUS — Plataforma de Gestão de Projetos WCS

> Sistema interno da **Invent** para digitalizar, padronizar e acelerar o ciclo completo de implantação de projetos WCS — do kickoff inicial até a geração automática da Especificação de Software.

---

## O problema que resolve

Antes do NEXUS, cada kickoff era um caos controlado: planilhas Excel, anotações manuais, e-mails avulsos e 2–3 reuniões extras só para alinhar informações que poderiam ter sido capturadas na primeira conversa. A documentação técnica levava horas para ser montada manualmente a cada projeto.

Hoje: o gestor abre o NEXUS, preenche o formulário estruturado uma vez, exporta o JSON — e 80% da Especificação de Software se escreve sozinha.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | React 19 + TypeScript |
| UI | Material UI v9 (tema dark + amarelo Invent) |
| Build | Vite 8 |
| Dados | `localStorage` (Supabase planejado para Fase 1) |
| Geração de documentos | JSZip (manipulação de .docx 100% no browser) |
| Hosting planejado | Netlify |

Sem backend por enquanto — 100% client-side.

---

## Módulos

### Kickoff WCS `v1.1`

Formulário estruturado com **14 seções** cobrindo todo o ciclo de um projeto WCS:

| # | Seção | Descrição |
|---|---|---|
| 1 | Info Gerais | Código, cliente, codinome, responsáveis, Go-Live, layout de referência |
| 2 | Layout | Dimensões, mezanino com detalhamento por nível |
| 3 | Cubagem | Volumes, UMs, características de produto |
| 4 | Integração | ERP, APIs, protocolos, mapeamento de mensagens |
| 5 | Order Start | Estações, dispositivos, configurações individuais |
| 6 | PBL / FlowRack | Múltiplas linhas independentes com configuração individual |
| 7 | Picking Cart | Tipo, capacidade, integração |
| 8 | Full Case | Picking de caixa fechada, paletes |
| 9 | Gestão de Estoque | Endereçamento, inventário, regras de negócio |
| 10 | Sorter | Modelo, capacidade, destinos, IA, recirculação |
| 11 | Packing | Estações de embalagem, etiquetagem de saída |
| 12 | PTL / PTM | Pick-to-light e put-to-light |
| 13 | Etiquetas | Editor dinâmico com campos configuráveis e código de barras |
| 14 | Infraestrutura | Servidores, rede, acesso remoto |

**Destaques:**
- **Gate questions** — "Não tem Sorter?" → seção inteira marcada 100% e ocultada automaticamente
- **Auto-save** com debounce de 1s — nenhum dado perdido
- **Progresso em tempo real** — barra por seção e porcentagem geral
- **Painel "A Definir"** — lista clicável de todos os campos TBD; detecta automaticamente texto com "definir" como pendência
- **Busca global** — encontra qualquer pergunta no formulário em segundos
- **Exportação** em JSON estruturado e Markdown formatado
- **Gestão de contatos** por projeto com cópia de lista de e-mails em um clique
- **Pendências** — TBDs automáticos + tarefas manuais integradas na Visão Geral do projeto
- **Header contextual** — nome do cliente e codinome visíveis no topo de cada seção do formulário
- **Scratchpad** — notas rápidas no painel esquerdo do kickoff, com auto-save por projeto
- **Motor de regras de dependência** — IA ativa no Sorter exige presença de TV e IVT/Etiqueta; inconsistências sinalizadas automaticamente
- **Versionamento de `input.json`** — histórico de versões por projeto; cada versão pode ser baixada, usada para gerar o `.docx` ou excluída individualmente
- **Link do SharePoint** — campo no Overview do projeto para acesso direto à pasta no SharePoint
- **Painel ADM** — KPIs editáveis por funcionalidade na aba Administração (papel `adm`)

---

### Documentação `v1.2`

Módulo exclusivo para o papel **Documentação**. Aparece na sidebar apenas para quem tem esse papel atribuído.

#### Pipeline completo

```
Gestor preenche o Kickoff no NEXUS
             ↓
       Exporta o JSON
             ↓
  Especialista Documentador
  alimenta a IA com o JSON
             ↓
      Gera o input.json
             ↓
  Upload do input.json no NEXUS
  + seleção do projeto vinculado
             ↓
   Clique em "Gerar e Baixar"
             ↓
  .docx gerado no browser e
  baixado automaticamente —
  sem Python, sem servidor
```

#### Sub-abas

| Sub-aba | Status |
|---|---|
| Gerar Documento | ✅ Implementado |
| Apontamento de Horas | 🔧 Em desenvolvimento |

#### Gerar Documento

**Fluxo:**
1. Seleciona o projeto existente no NEXUS
2. Faz upload do `input.json` gerado pelo Especialista Documentador
3. Clica em "Gerar e Baixar" — o `.docx` é montado via JSZip no browser e baixado automaticamente

**Nome do arquivo gerado:**
```
{CODIGO} - {PROJETO} - Especificacao de Software - Rev {REVISAO}.docx
```

**O que o motor preserva do template Invent:**
- Capa (páginas 1–2) com logotipo, dados do projeto e responsável
- Cabeçalho e rodapé com logo + régua amarela em todas as páginas
- Página de Aprovação da Proposta ao final

**O que é gerado a partir do `input.json`:**
- Títulos com numeração automática por estilo (níveis 1–5)
- Parágrafos de corpo (Arial 12pt, justificado)
- Tabelas no padrão Invent (cabeçalho amarelo FFC000, bordas CCCCCC)
- Blocos de código JSON com syntax highlight estilo VS Code Dark+
- Callouts de aviso (fundo amarelo claro, prefixo `!`)
- **Filtro anti-vazamento** — blocos com `[OBS INTERNA]` ou `[ATENÇÃO CRÍTICA]` são removidos automaticamente antes de gerar o documento do cliente

---

---

### FlowFire — Gestão Pessoal de Tarefas *(Ferramenta Satélite)*

Sistema de gestão de tarefas hiper-focado, desenvolvido como ferramenta de produtividade pessoal paralela ao ecossistema. Localizado em `../flowfire/` — fora do NEXUS, na raiz do projeto.

**Stack:** Vanilla JS + CSS puro, sem framework, sem dependências externas. Funciona diretamente via `file://`.

**Conceito central:** Duas camadas — *Backstage* (configuração e criação de tarefas) e *Palco* (execução). O Palco exibe apenas a próxima tarefa ideal calculada pelo algoritmo, eliminando fadiga de decisão e lista mental.

**Funcionalidades v1.1 (produção):**
- Algoritmo de priorização multi-critério com 8 dimensões ponderadas: prioridade, categoria × horário, prazo, energia, recorrência, penalidade de skip, bônus de idade, quick-win
- Time-Lock — janelas de horário configuráveis por tarefa
- Recorrência — diária, semanal, mensal
- Motor de gamificação: streak, multiplicadores ×1→×5, modo "On Fire" com animação de chamas
- Timer circular SVG com countdown visual (depleta do cheio ao vazio)
- Confetti canvas-puro, sons 8-bit via Web Audio API, haptic feedback mobile
- Atalhos de teclado (`Space` = concluir, `S` = skip, `Enter` = iniciar, `B` = backstage)
- Swipe gestures: ↑ = concluir, ← = pular
- Rotina configurável: horário de trabalho, padrão de energia por período, projetos/subcategorias
- Focus Sprint Mode — empacotamento automático de tarefas por tempo disponível
- 100% offline, dados em `localStorage`, sem instalação

**Roadmap completo:** [`../flowfire/ROADMAP.md`](../flowfire/ROADMAP.md)

---

### VEX AI *(Planejado — v6)*

Módulo voltado à democratização do acesso à informação técnica através de linguagem natural corporativa. Consome o servidor LLM próprio da Invent (v7) — sem dependência de APIs externas, sem custo por requisição.

- **Pesquisa Conversacional:** chat semântico aberto para qualquer colaborador autorizado consultar a base histórica agregada de todos os projetos (documentos, JSONs, histórico de kickoffs, dossiês minerados do SharePoint)
- **Agentes Especialistas:** agentes focados por vertical técnica ou cliente — ex: agente de Integração ERP, agente de Picking Fracionado — para extração de relatórios e insights específicos
- **Insights Preditivos:** durante a revisão de respostas pela equipe humana, a I.A. gera automaticamente sugestões de aprofundamento e perguntas complementares
- **Base Vetorial (RAG):** busca semântica sobre o corpus de projetos, alimentada pelo pipeline de mineração de documentos do SharePoint (`corpus-conhecimento/`)

---

### O Auge *(Planejado — v9)*

Pipeline end-to-end que reduz em até 90% o trabalho braçal de documentação, concentrando o foco humano no que realmente importa: condução técnica de reuniões, análise crítica e validação conceitual.

**Fluxo do pipeline:**

```
[Nexus Kickoff]
      ↓
[Especialista Documentador (ED)]
      ↓
[Gerar Documento — Revisão 1]
      ↓
[Revisão Humana]
      ↓
[Cowork: Envio Automático de E-mail + Agenda ao Cliente]
      ↓
[Primeira Reunião de Alinhamento]
      ↓
[Skill Reunião Doc Análise: Transcrição + Extração de Pontos-Chave]
      ↓
[Skill Alterações Inteligentes Automatizadas no Documento]
      ↓
[I.A. Gomes: Análise Crítica Intermediária]
      ↓
[Revisão Humana Final]
      ↓
[Cowork: Próxima Revisão com Resumo de Alterações]
```

**Pilares do pipeline automatizado:**
- **Cowork:** envio automático de e-mail institucional com documento + sugestão de agenda ao cliente, após revisão humana aprovada (via Azure Graph API)
- **Skill Reunião Doc Análise:** transcrição automática de reuniões + extração de pontos-chave e decisões técnicas em JSON estruturado de alterações propostas
- **Skill Alterações Inteligentes:** aplicação automatizada das mudanças extraídas da reunião diretamente no documento; gera nova revisão do `.docx` com log de alterações
- **I.A. Gomes:** etapa de análise crítica intermediária antes do envio da próxima revisão ao cliente; confirmada pelo analista via reunião ou e-mail
- **Documento Modular Vivo:** qualquer dado alterado no Nexus gera tarefa de atualização automática no documento vinculado no SharePoint; confirmado pelo analista → aplicado em tempo real + PDF gerado
- **Versionamento Semântico Rev [A].[B].[C]:** A = escopo/tecnologia macro, B = impacto de outras áreas, C = micro-ajustes textuais; gerado automaticamente pelo sistema
- **Motor Evolutivo SUPER_MD:** cada correção humana nas Skills alimenta treinamento supervisionado — o Nexus aprende organicamente a cada projeto executado

---

## Sistema de papéis

| Papel | Acesso |
|---|---|
| `gestao` | Kickoff, Projetos, Dashboard, Ferramentas I.A, Sugestões |
| `engenharia` | Kickoff, Projetos, Sugestões |
| `pmo` | Kickoff, Projetos + painel de controle *(em breve)* |
| `documentacao` | Kickoff, Projetos + **aba Documentação** |
| `desenvolvimento` | Kickoff, Projetos, Sugestões |
| `eletrica` | Kickoff, Projetos, Sugestões |
| `comercial` | Kickoff (campos de escopo comercial), Projetos *(em breve)* |
| `operacional` | Kickoff + campos técnicos exclusivos por especialidade *(em breve)* |

Funcionalidades exclusivas por papel são registradas em `src/lib/featureRegistry.ts` e aparecem automaticamente em **Configurações → Administração** — sem precisar alterar a UI.

---

## Estrutura de arquivos

```
nexus/
├── public/
│   ├── nexus-logo.png
│   ├── nexus-icon.png
│   └── ES_PLACEHOLDER_v6.docx        # template do documento Invent (asset estático)
│
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx               # navegação + seletor de papel
│   │   ├── ProjectPickerModal.tsx    # busca e seleção de projeto existente
│   │   └── NewKickoffModal.tsx       # criação de novo projeto
│   │
│   ├── pages/
│   │   ├── Projetos/                 # listagem, visão geral e pendências
│   │   ├── KickoffPage/              # formulário completo (15 seções)
│   │   ├── Documentacao/
│   │   │   ├── index.tsx             # sub-abas da aba Documentação
│   │   │   └── GerarDocumento.tsx    # upload + geração do .docx
│   │   ├── ConfigPage/               # configurações + administração de papéis
│   │   └── SugestoesPage/            # canal de sugestões interno
│   │
│   └── lib/
│       ├── projectStore.ts           # CRUD de projetos no localStorage
│       ├── featureRegistry.ts        # registro de funcionalidades por papel
│       └── docxBuilder.ts            # motor de geração de .docx (port do Python)
│
└── ed-knowledge/
    ├── build_docx_v5.py              # script Python original (referência canônica)
    ├── ES_PLACEHOLDER_v6.docx        # template original
    └── input.json                    # exemplo de input para o gerador
```

---

## Como rodar

```bash
# Instala as dependências
npm install

# Sobe o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`.

**Login:** qualquer nome (2+ chars) + e-mail válido + senha (6+ chars). A autenticação é fake enquanto não há backend — qualquer credencial válida entra.

---

## Formato do `input.json`

```json
{
  "meta": {
    "projeto":  "Nome do Projeto",
    "codigo":   "I25.0001",
    "fase":     "ES",
    "revisao":  "01"
  },
  "capa": {
    "nome_responsavel":    "Fulano de Tal",
    "email":               "fulano@invent-corp.com",
    "departamento":        "Engenharia de Software",
    "telefone":            "+55 11 2833-0005",
    "data_revisao":        "10/06/2026",
    "descricao_revisao":   "Emissão inicial",
    "responsavel_revisao": "Fulano de Tal",
    "nome_cliente":        "Empresa Cliente S.A.",
    "data_aprovacao":      "10/06/2026"
  },
  "capitulos": [
    { "nivel": 1, "titulo": "Objetivo do documento", "conteudo": "Descreva o propósito aqui." },
    { "nivel": 2, "titulo": "Escopo", "conteudo": "Delimite o escopo do projeto." },
    {
      "tipo": "tabela",
      "headers": ["Campo", "Tipo", "Obrigatório", "Exemplo", "Descrição"],
      "rows": [
        ["nroPedido", "string", "Sim", "SP-001", "Número do pedido de separação"]
      ]
    },
    {
      "tipo": "json_block",
      "linhas": ["{", "  \"nroPedido\": \"SP-001\",", "  \"qtde\": 547204", "}"]
    },
    {
      "tipo": "warning",
      "texto": "Esta etapa depende de validação do cliente antes de prosseguir."
    }
  ]
}
```

> Blocos com `[OBS INTERNA]` ou `[ATENÇÃO CRÍTICA]` no campo `conteudo` ou `texto` são filtrados automaticamente e nunca aparecem no documento entregue ao cliente.

---

## Roadmap

| Versão | Módulo | Status |
|---|---|---|
| **v1.0** | Kickoff WCS — 14 seções, features core: gate questions, auto-save, exportação JSON/MD, contatos, pendências, busca global | ✅ Produção |
| **v1.1** | Kickoff WCS — refinamentos: scratchpad, Go-Live, motor de regras de dependência, versionamento de input.json, SharePoint link, painel ADM | ✅ Produção |
| **v1.2** | Módulo Documentação — Gerar Documento .docx no browser, sem Python, sem servidor | ✅ Produção |
| **v1.3** | Módulo Documentação — Apontamento de Horas | 🔧 Em desenvolvimento |
| **v2** | Backend Supabase + SSO Invent (Azure AD) + RBAC real; projetos na nuvem, multi-usuário, audit log, backup automático | 📋 Planejado |
| **v3** | Integração SharePoint/OneDrive — upload automático de documentos, abertura nativa, pipeline .docx→SharePoint direto do NEXUS | 📋 Planejado |
| **v4** | IA Integrada — chat contextual por projeto via LLM própria, geração automática de ES a partir do kickoff, pipeline completo kickoff→LLM→.docx→SharePoint | 📋 Planejado |
| **v5** | Kickoff Segmentado — formulários por papel (Gestor, Engenharia, Documentação, Infra); cada setor complementa o projeto com suas perguntas; JSON unificado | 📋 Planejado |
| **v6** | VEX AI — pesquisa semântica sobre base histórica, agentes especialistas por vertical, insights preditivos (powered by LLM On-Premise) | 📋 Planejado |
| **v7** | LLM On-Premise — servidor LLM open-source próprio da Invent (Llama / Mistral), base vetorial de projetos com RAG (pgvector), Módulo de Arenas, fine-tuning supervisionado com SUPER_MD | 📋 Planejado |
| **v8** | Expansão Multi-Setor — módulos PMO, Implantação e Pós-Vendas; migração de planilhas para CRUDs no NEXUS; transcrição de kickoff → IA preenche formulário automaticamente; MCP Server | 📋 Planejado |
| **v9** | O Auge — pipeline end-to-end: Cowork, Skill Reunião, Skill Alterações Inteligentes, I.A. Gomes, Documento Modular Vivo, Rev A.B.C, SUPER_MD | 📋 Planejado |

---

## Registro de features

O histórico completo de features entregues, KPIs mapeados e hipóteses de impacto está documentado em [`NEXUS_FEATURES.md`](NEXUS_FEATURES.md).

**Resumo atual:** 27 features registradas · 39 KPIs mapeados · features v1.1 pendentes de registro em `NEXUS_FEATURES.md`

---

*Desenvolvido por **Raphael Cerri Caveagna** · Invent Corp*
