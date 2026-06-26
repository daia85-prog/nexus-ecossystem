# NEXUS — Backlog de Melhorias

> Documento vivo. Toda nova ideia entra aqui primeiro.
> Após triagem: cada item recebe fase, prioridade e status.
> Atualizado em: 2026-06-26

---

## Legenda

| Símbolo | Significado |
|---|---|
| 🔴 | Alta prioridade — bloqueia ou impacta muito |
| 🟡 | Média prioridade — melhoria relevante |
| 🟢 | Baixa prioridade — nice-to-have |
| 🔧 | Em andamento |
| ✅ | Entregue |
| ❓ | Aguardando esclarecimento |

---

## Fase 1 — Curto prazo (sem backend, melhorias no app atual)

> Tudo que pode ser feito hoje com localStorage, sem mudar a infraestrutura.

| # | Descrição | Prioridade | Status | Observações |
|---|---|---|---|---|
| F1-01 | Nome do cliente e projeto aparecer preenchido no header do kickoff | 🔴 | ✅ | Strip com cliente + codinome no topo de cada seção; pre-fill automático ao abrir |
| F1-02 | Campo "Go-Live" (texto livre) nas Infos Gerais do projeto | 🔴 | ✅ | Campo `g_golive` já existia com máscara de data |
| F1-03 | Campo "Layout do Projeto Semelhante ao:" nas Infos Gerais | 🟡 | ✅ | Campo `g_layout_ref` adicionado após GoLive |
| F1-04 | Retirar validação numérica dos campos de quantidade — aceitar texto | 🔴 | ✅ | NUM_FIELDS esvaziado; todos os campos aceitam texto livre |
| F1-05 | IA no kickoff não deve ser pergunta opcional | 🔴 | ✅ | `st11` obrigatório dentro do Sorter (gate st1 continua existindo) |
| F1-06 | Recirculação e IA no Sorter não devem ser perguntas opcionais | 🟡 | ✅ | `st11` e `st_rc` agora required=1 + adicionados ao kickoffMeta |
| F1-07 | Remover seção Conferência inteira do kickoff | 🔴 | ✅ | Seção `cf` removida do SEC, PHASES, sectionMeta e kickoffMeta |
| F1-08 | Dependências entre funcionalidades: se tem IA → sempre tem TV e IVT/etiqueta | 🟡 | ✅ | Campo `st11_tvs` obrigatório quando IA=Sim; trigger laranja se IA=Sim e Etiquetas=Não |
| F1-09 | PTM/IA: gerar campos de TV da IA ou TV do PTM e quantidade | 🟡 | ✅ | `pt_tvs_ptl` e `pt_ptm_qtd` já existiam; `st11_tvs` adicionado para IA — C2 resolvida |
| F1-10 | Revisar campos fixos padrão: torná-los invisíveis na UI mas manter no JSON | 🟡 | ❓ | Ver dúvida C3 abaixo — quais campos especificamente? |
| F1-11 | Integração mover para o início do formulário | 🟡 | ✅ | Seção `in` movida para Phase 0 (Dados do Projeto), antes de Order Start |
| F1-12 | Notas rápidas (bloco de texto livre) visível no lado esquerdo do kickoff | 🟡 | ✅ | Scratchpad no painel esquerdo, auto-save no projeto; oculto durante busca |
| F1-13 | Conta ADM: easter egg (clicar 10x em local secreto + botão Y para acessar) | 🟢 | ✅ | 10 cliques no logo NEXUS → badge "PRESSIONE Y" → role = adm; oculto no Select |
| F1-14 | KPIs linkados e visíveis na seção Administração do Config | 🟡 | ✅ | KpiEntry[] no RoleFeature; exibidos abaixo da descrição em cada card |
| F1-15 | ADM pode editar os valores de KPI de cada funcionalidade no painel Config | 🟡 | ✅ | Editor inline (+ KPI, campos label/valor/unidade) visível só para role=adm |
| F1-16 | Separar "Nome do Projeto" (codinome) de "Nome do Cliente" como campos distintos | 🔴 | ✅ | Modal renomeado; `g_codinome` pre-preenche ao abrir; project.name sincroniza com codinome |
| F1-17 | Texto com "definir" (qualquer case) em qualquer campo → tratado como [A DEFINIR] | 🟡 | ✅ | `isADefinir()` adicionado; painel A Definir detecta campos com "definir" em texto livre |
| F1-18 | Versionamento de input.json por projeto: accordion no Overview, baixar/excluir/gerar por versão | 🔴 | ✅ | localStorage; visível só para `documentacao`; botões baixar/gerar/excluir; confirmação "ALERTA, TEM CERTEZA?" |

---

## Fase 2 — Médio prazo (requer backend Supabase + autenticação real)

> Funcionalidades que dependem de dados na nuvem, multi-usuário ou integrações externas.

| # | Descrição | Prioridade | Status | Observações |
|---|---|---|---|---|
| F2-01 | Login automático se já autenticado naquele navegador (session persistente) | 🔴 | — | Supabase Auth + localStorage token |
| F2-02 | Registro via código enviado por e-mail (magic link / OTP) | 🔴 | — | Login não precisa de código, só o registro |
| F2-03 | Upload de documentos no projeto: Layout Mecânico, Layout Elétrico, Docs aprovados | 🔴 | — | Supabase Storage; vincular ao projeto |
| F2-04 | Link do SharePoint por projeto (campo + abertura direta) | 🟡 | ✅ | Implementado em localStorage — campo de URL no Overview com botão "Abrir no SharePoint" |
| F2-05 | Último Layout Aprovado e Último Documento Aprovado por projeto | 🟡 | — | Requer banco + upload |
| F2-06 | Apontamento de Horas: horário inteligente, associação de cliente, export Excel no formato correto | 🔴 | — | Sub-aba já existe como Coming Soon no módulo Documentação |
| F2-07 | Aba de Relatório — campos a definir — visualizar lacunas do kickoff por projeto | 🟡 | — | Ver dúvida C5 abaixo |
| F2-08 | Alerta de passagem de bastão entre etapas (Kickoff→Documentação→Implantação→Pós-Vendas) | 🟡 | — | Notificação automática com pendências críticas em cada transição de responsabilidade entre equipes; requer backend. Ver F2-22 para alerta de conclusão de implantação |
| F2-09 | Dividir perguntas do kickoff: GESTOR vs OPERACIONAL (doc, infra, engenharia, etc.) | 🔴 | — | Cada setor complementa o projeto com suas próprias perguntas; JSON unificado |
| F2-10 | Onboarding novo formato: simples, rápido, contextual por papel | 🟡 | — | Substituir intro screen atual por guia interativo |
| F2-11 | Chat por projeto: painel esquerdo flutuante na aba de projetos para interagir via chat com arquivos vinculados ou JSON do kickoff | 🔴 | — | Usa Claude API com contexto do projeto específico; ver F2-13 e F2-14 |
| F2-12 | Integração com Claude API pelo usuário (user traz sua própria key) | 🔴 | — | Não aceitar plano gratuito; configurar na tela de config |
| F2-13 | Visibilidade de tokens consumidos em tempo real | 🟡 | — | Contador de tokens na interface durante uso da IA |
| F2-14 | Seletor de provedor IA: alternar entre LLM Interna On-Premise (gratuita/ilimitada) e Claude API (alta performance) na interface | 🟡 | — | Opção local elimina custos variáveis de API; Claude reservado para tarefas críticas. Depende de F3-01 |
| F2-15 | Botão "Enviar para revisão" → manda JSON/doc por e-mail para revisor específico | 🟡 | ❓ | Ver dúvida C7 abaixo (quem é "Gomes"?) |
| F2-16 | NEXUS + Especialista Documentador conectados: botão Gerar Doc puxa JSON kickoff + dados de todos setores | 🔴 | — | Unificação total do pipeline de documentação |
| F2-17 | DEV precisa ver pontos de decisão e layout do projeto | 🟡 | ❓ | Ver dúvida C8 abaixo — é uma view/aba ou notificação? |
| F2-18 | RASTREAR e mapear acesso por papel: quais abas, IAs e cards cada papel vê | 🔴 | — | Expansão do featureRegistry para controle granular de UI |
| F2-19 | Cards Situacionais por papel: blocos de info contextuais que aparecem só para quem precisa | 🟡 | ❓ | Ver dúvida C9 abaixo |
| F2-20 | Ao gerar doc: sistema envia JSON do kickoff para Claude, Claude gera input.json, NEXUS monta o .docx e salva automaticamente no SharePoint (fluxo principal); download local fica opcional | 🔴 | — | Pipeline totalmente automatizado; requer F2-12 + F2-04. Ver F2-23 e F2-24 |
| F2-21 | SSO Invent + login automático via Azure AD (Microsoft Entra ID) | 🔴 | ❓ | Requer chamado ao Jonathan (Infra) para liberação de credenciais Azure AD + permissões de Graph API |
| F2-22 | Alerta de Conclusão de Implantação: ao detectar encerramento da fase, notificar automaticamente equipe Pós-Vendas para início imediato do suporte | 🟡 | — | Complementa F2-08; gatilho diferente — encerramento de fase, não transição de bastão |
| F2-23 | Upload automático do .docx gerado para SharePoint no diretório parametrizado do projeto (fluxo principal); download local fica secundário | 🔴 | — | Requer integração SharePoint + F2-04; complementa F2-20 |
| F2-24 | Abertura imediata do arquivo no OneDrive/browser logo após conclusão do upload no SharePoint | 🟡 | — | Usa vínculo nativo do OneDrive habilitado; depende de F2-23 |
| F2-25 | Hard rule: projetos com PBL (Pick-to-Light / Put-to-Light) → sem coletor de dados na funcionalidade Fullcase | 🟡 | — | Regra de dependência, análoga a F1-08 (IA→TV+IVT); validação automática no motor de regras |
| F2-26 | Paletização Multi-Tipo: aceitar configuração simultânea de mais de um modelo de paletização no mesmo projeto (ex: PTL + PTM combinados) | 🟡 | — | Hoje o sistema aceita apenas um tipo por vez |
| F2-27 | Substituição por Sugestão Inteligente: motor do Nexus sugere paletização e fluxo PTL otimizados com base nos dados do projeto | 🟡 | — | Substitui lógicas padrão de paletização quando motor IA disponível |
| F2-28 | Uploads por projeto: vídeos de reuniões de alinhamento, arquivos de Master-Data (MD), planilhas operacionais e cronogramas | 🟡 | — | Complementa F2-03 (Layouts + Docs aprovados); Supabase Storage ou SharePoint como destino |

---

## Fase 3 — Longo prazo (IA avançada, infra própria, expansão)

> Funcionalidades de alto impacto que requerem infraestrutura dedicada, LLM próprio ou expansão para outros setores.

| # | Descrição | Prioridade | Status | Observações |
|---|---|---|---|---|
| F3-01 | IA própria no servidor da empresa (sem depender do Claude) — para uso ilimitado no chat | 🔴 | — | LLM open-source (ex: Llama, Mistral) rodando em servidor dedicado Invent |
| F3-02 | Base de conhecimento vetorial por projeto: "Obsidian que aprende sozinho" | 🔴 | — | Vector DB (ex: Qdrant, Pinecone) alimentado pelos JSONs e docs de cada projeto |
| F3-03 | MD de roteamento: IA identifica quais fontes de conhecimento consultar e economiza tokens | 🟡 | — | Sistema de RAG com routing — IA decide qual especialista MD chamar |
| F3-04 | Sistema de refinamento por peso: IA aprende com os resultados e refina seu próprio MD guia | 🟡 | — | Feedback loop — resultados aprovados aumentam peso de certos padrões |
| F3-05 | Transcript do kickoff → IA preenche o formulário automaticamente | 🔴 | — | Upload de transcript (áudio/texto) → IA preenche → compara com preenchimento humano → aponta divergências |
| F3-06 | Expansão multi-setor: PMO (dashboards KPI), Implantação (IAs de suporte técnico), Pós-vendas (alertas) | 🔴 | — | Cada setor com suas perguntas específicas no projeto, todas alimentando a IA |
| F3-07 | Intensivão por setor: mapear processos, identificar planilhas existentes e migrar para NEXUS com IAs | 🟡 | — | Processo de adoção — entrevista setor, mapeia dor, constrói módulo |
| F3-08 | Transformar planilhas de controle de cada setor em CRUDs dentro do NEXUS | 🟡 | — | Conectados à IA específica daquele setor |
| F3-09 | MCP Server: expor dados do NEXUS como ferramentas para IAs externas | 🟡 | — | `get_project(code)`, `list_projects()`, `search_projects(query)` |
| F3-10 | Domínio próprio: nexus.invent.com.br | 🟡 | — | Requer Netlify/VPS + configuração DNS |
| F3-11 | Edição colaborativa em tempo real (Supabase Realtime) | 🟢 | — | Múltiplos usuários editando o mesmo projeto simultaneamente |
| F3-12 | VEX AI: Pesquisa conversacional semântica na base histórica agregada de todos os projetos | 🔴 | — | Chat aberto para colaboradores autorizados; busca sobre dados históricos, documentos e JSONs |
| F3-13 | VEX AI: Agentes Especialistas por vertical técnica ou cliente (ex: agente de Integração ERP, agente de Picking) | 🟡 | — | Extração de dados, relatórios e insights segmentados por área |
| F3-14 | VEX AI: Insights preditivos e sugestões de perguntas complementares gerados automaticamente durante revisão humana | 🟡 | — | IA gera sugestões de aprofundamento na fase de revisão de respostas |
| F3-15 | Módulo de Arenas: ambiente de revisão crítica de documentos gerados pela LLM + loop de feedback contínuo | 🔴 | — | Correções humanas nos pontos marcados como imprecisos alimentam input.json de feedback → refinamento automático do modelo |
| F3-16 | Auditoria de segurança FABLE de todo o ecossistema antes do ganho de escala comercial | 🔴 | — | Validação de blindagem contra vazamento de dados corporativos e vulnerabilidades em nível de código |

---

## Fase 4 — O Auge (automação end-to-end)

> Reduzir em até 90% o trabalho braçal de documentação, mantendo o foco humano no Know-How estratégico: condução técnica de reuniões, análise crítica e validação conceitual.

```
[Nexus Kickoff Manual]
         ↓
[Especialista Documentador (ED)]
         ↓
[Gerador de Documento (Revisão 1)]
         ↓
[Revisão Humana] ──(Validação Rápida)
         ↓
[Cowork: Envio Automático de E-mail c/ Documento + Sugestão de Agenda]
         ↓
[Primeira Reunião de Alinhamento]
         ↓
[Skill: Reunião Doc Análise (Transcrição e Extração de Pontos Chave)]
         ↓
[Skill: Alterações Inteligentes Automatizadas no Documento]
         ↓
[Análise Crítica: I.A. Gomes]
         ↓
[Revisão Humana Final]
         ↓
[Cowork: Envio Automático da Próxima Revisão] ──(Inclui Agenda + Resumo de Alterações)
```

| # | Descrição | Prioridade | Status | Observações |
|---|---|---|---|---|
| F4-01 | Cowork: envio automático de e-mail institucional com documento + sugestão de agenda após revisão humana aprovada | 🔴 | — | Requer integração Azure Graph API (F2-21); e-mail enviado pelo NEXUS em nome do responsável |
| F4-02 | Skill Reunião Doc Análise: transcrição automática de reunião + extração de pontos-chave e decisões | 🔴 | — | Input: gravação ou transcript de texto; Output: JSON estruturado de alterações propostas ao documento |
| F4-03 | Skill Alterações Inteligentes: aplicar automaticamente as mudanças extraídas da reunião ao documento | 🔴 | — | Gera nova revisão do .docx com log de alterações; depende de F4-02 |
| F4-04 | Documento Modular Vivo: qualquer alteração em campo do Nexus gera tarefa automática de atualização no documento vinculado | 🟡 | — | Ex: engenharia muda nº de posições no picking → sistema cria alerta de atualização; confirmado pelo analista → aplica no SharePoint em tempo real + gera PDF |
| F4-05 | Versionamento Semântico Rev [A].[B].[C]: A = escopo/tecnologia macro, B = impacto de outras áreas, C = micro-ajustes textuais | 🟡 | — | Substitui versionamento manual; ex: `Rev 7.1.3`; gerado automaticamente pelo sistema com base no tipo de alteração |
| F4-06 | Motor Evolutivo SUPER_MD: cada correção humana nas Skills alimenta treinamento supervisionado do ecossistema | 🔴 | — | NEXUS aprende organicamente a cada projeto; registros armazenados e processados pelo SUPER_MD; regras do ED se refinam automaticamente |
| F4-07 | Etapa de Análise Crítica I.A. Gomes no pipeline de revisão antes do envio da próxima revisão ao cliente | 🟡 | — | Etapa intermediária; alteração aplicada ao arquivo no SharePoint após confirmação do analista por reunião ou e-mail |

---

## Aguardando esclarecimento

Preciso das suas respostas para fechar a triagem desses itens:

| # | Dúvida | Item relacionado |
|---|---|---|
| C1 | ~~"CONFERÊNCIA não tem"~~ — **Resolvido:** remover a seção inteira. | F1-07 |
| C2 | ~~Resolvida:~~ `pt_tvs_ptl` (TVs PTL), `pt_ptm_qtd` (TVs PTM) já existiam; `st11_tvs` (TVs câmera IA) adicionado. | F1-09 |
| C3 | "Campos fixos padrão invisíveis" — quais campos você tem em mente? Ex: campos que sempre têm o mesmo valor e não precisam aparecer no form mas devem ir no JSON? | F1-10 |
| C4 | Integração no início — é mover a seção de Integração (ERP, APIs) para antes das outras no formulário, ou é criar um campo de integração nas Infos Gerais como contexto inicial? | F1-11 |
| C5 | Aba de Relatório — o que aparece lá? Ex: "campos que ninguém preencheu essa semana", "projetos com mais TBDs", "seções com menor taxa de completude"? | F2-07 |
| C6 | ~~Resolvida:~~ Sequência confirmada — Kickoff → Documentação → Implantação → Pós-Vendas. Alerta automático em cada transição com pendências críticas. Conclusão da Implantação aciona Pós-Vendas imediatamente. Ver F2-08 e F2-22. | F2-08 |
| C7 | "Botão enviar pro Gomes" — Gomes é uma pessoa específica da empresa com um processo de revisão? O botão seria configurável (qualquer e-mail de revisor) ou fixo para ele? | F2-15 |
| C8 | "DEV precisa saber pontos de decisão e layout" — é uma view específica para o papel Desenvolvimento dentro do projeto, mostrando só o que é relevante pra eles (decisões técnicas, layouts)? | F2-17 |
| C9 | "Cards Situacionais" — pode me dar um exemplo concreto? Ex: PMO vê um card de "Projetos atrasados esta semana", Implantação vê um card de "Checklist de comissionamento", etc? | F2-19 |

---

## Histórico — Entregue

| Versão | Feature | Data |
|---|---|---|
| v1.0 | Formulário Kickoff WCS — 15 seções completas | 2024 |
| v1.0 | Auto-save + localStorage | 2024 |
| v1.0 | Exportação JSON + Markdown | 2024 |
| v1.0 | Gestão de contatos por projeto | 2024 |
| v1.0 | Gate questions + progresso por seção | 2024 |
| v1.0 | PBL com múltiplas linhas | 2024 |
| v1.0 | Editor de etiquetas dinâmico | 2024 |
| v1.0 | Pendências (TBDs + tarefas manuais) | 2024 |
| v1.0 | Página de Projetos com busca | 2024 |
| v1.0 | Project Overview + contatos | 2024 |
| v1.0 | Sidebar colapsável + seletor de papel | 2024 |
| v1.0 | Busca global no kickoff | 2024 |
| v1.0 | Painel "A Definir" colapsável | 2024 |
| v1.2 | Módulo Documentação — aba exclusiva por papel | 2026-06-10 |
| v1.2 | Gerar Documento .docx no browser sem Python (docxBuilder.ts + JSZip) | 2026-06-10 |
