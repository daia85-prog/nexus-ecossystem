# NEXUS — Registro de Features e Métricas do Ecossistema

> **Para qualquer chat (IA) lendo este arquivo:**
> Este documento é o registro vivo de tudo que foi construído no Ecossistema NEXUS.
> **Regra obrigatória:** A cada nova feature implementada, atualize este arquivo antes de encerrar o trabalho.
> Instruções detalhadas de como fazer isso estão na seção [Como Registrar uma Nova Feature](#como-registrar-uma-nova-feature).

---

## Índice

1. [O que é o Ecossistema NEXUS](#o-que-é-o-ecossistema-nexus)
2. [Mapa de Versões e Módulos](#mapa-de-versões-e-módulos)
3. [Como Registrar uma Nova Feature](#como-registrar-uma-nova-feature)
4. [Definição dos KPIs](#definição-dos-kpis)
5. [Registro de Features — NEXUS v1 (Módulo Kickoff)](#registro-de-features--nexus-v1-módulo-kickoff)
6. [Métricas Consolidadas por Versão](#métricas-consolidadas-por-versão)

---

## O que é o Ecossistema NEXUS

NEXUS é uma plataforma SaaS interna da **Invent** para gestão de projetos WCS (Warehouse Control System). O objetivo central é digitalizar, padronizar e acelerar todo o ciclo de vida de um projeto de implantação — desde o kickoff inicial até a entrega final.

**Princípio de medição:** Cada feature adicionada deve ter impacto mensurável. Este arquivo armazena os parâmetros de medição para que, quando dados reais forem coletados, seja possível:
- Calcular horas economizadas por feature
- Precificar o valor agregado de cada módulo
- Identificar o que ficou obsoleto
- Justificar investimento em novas features com dados históricos

---

## Mapa de Versões e Módulos

| Versão | Módulo | Status | Início |
|--------|--------|--------|--------|
| **v1** | Kickoff WCS | ✅ Produção | 2024 |
| v2 | Dashboard de Projetos | 🔧 Em desenvolvimento | — |
| v3 | Pendências e Follow-up | 🔧 Em desenvolvimento | — |
| v4 | Integração WMS / API | 📋 Planejado | — |
| v5 | Relatórios e BI | 📋 Planejado | — |

> **NEXUS v1** substitui definitivamente o que antes era chamado de "App Kickoff v3.4". A nomenclatura correta e histórica é **NEXUS v1 — Módulo Kickoff**.

---

## Como Registrar uma Nova Feature

> **IA: leia esta seção antes de adicionar qualquer entry.**

### 1. Quando registrar
- Ao implementar qualquer feature nova, melhoria significativa ou remoção de funcionalidade obsoleta
- Não registrar: correções de bug menores de tipagem/build, ajustes de cor isolados

### 2. Formato do entry

```markdown
### [ID] Nome da Feature
**Versão:** vX.Y  
**Módulo:** Nome do módulo  
**Tipo:** `nova-feature` | `melhoria` | `remoção` | `refactor`  
**Data:** YYYY-MM-DD  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Descrição objetiva do que foi implementado e por que.

**Problema resolvido / dor eliminada:**
O que acontecia antes e o que muda com isso.

**KPIs relevantes para esta feature:**  
*(IA: analise se esta feature tem impacto mensurável e liste os KPIs abaixo. Se não for relevante metrificar, escreva "Baixa relevância métrica")*

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| Nome do KPI | [BASELINE] | [META] | — | [VALOR_REAL] |

**Observações e hipóteses:**
O que você espera que esta feature mude no processo. Será verificado quando dados reais forem inseridos.
```

### 3. Numeração dos IDs
- Formato: `K-XXX` para módulo Kickoff, `D-XXX` para Dashboard, `P-XXX` para Pendências, etc.
- Incrementar sequencialmente dentro de cada módulo.

### 4. Instruções para a IA ao adicionar uma feature
1. **Identifique o ID** sequencial correto para o módulo
2. **Analise o impacto**: esta feature elimina trabalho manual? reduz erros? acelera processo? Se sim, vale metrificar
3. **Sugira os KPIs** mais relevantes para aquela feature específica (ex: uma feature de "copiar e-mails" tem KPI de "tempo para montar lista de destinatários"; uma feature de exportação tem KPI de "tempo para gerar documentação")
4. **Coloque placeholders** no formato `[PARAMETRO_EM_CAPS]` para todos os valores ainda não coletados
5. **Nunca apague** entries anteriores — use `status: obsoleto` se necessário
6. Após registrar, atualize a seção [Métricas Consolidadas por Versão](#métricas-consolidadas-por-versão)

---

## Definição dos KPIs

> Estes são os KPIs padrão do ecossistema NEXUS. Use estes nomes para consistência entre features.

| KPI | Unidade | Como medir | Quem coleta |
|-----|---------|------------|-------------|
| `HORAS_ECONOMIZADAS_POR_KICKOFF` | horas/kickoff | Tempo médio do processo antes vs depois | Raphael |
| `REDUCAO_RETRABALHO` | % | Quantidade de idas e vindas por kickoff antes vs depois | Raphael |
| `TEMPO_ONBOARDING_NOVO_MEMBRO` | horas | Tempo até membro novo conseguir fazer um kickoff sozinho | Raphael |
| `ERROS_PREENCHIMENTO_EVITADOS` | erros/kickoff | Erros de dados capturados antes de chegar ao dev | Equipe |
| `TAXA_COMPLETUDE_KICKOFF` | % | % médio de preenchimento nos kickoffs salvos | Sistema |
| `HORAS_DOCUMENTACAO` | horas/projeto | Tempo para gerar documentação após kickoff | Raphael |
| `TEMPO_MONTAR_LISTA_CONTATOS` | minutos | Tempo para reunir e-mails dos responsáveis | Raphael |
| `QUALIDADE_REQUISITOS` | escala 1-5 | Avaliação subjetiva de clareza dos requisitos coletados | Equipe |
| `REDUCAO_REUNIOES_ALINHAMENTO` | reuniões/projeto | Reuniões extras necessárias por falta de info | Raphael |
| `TEMPO_PARA_EXPORT` | minutos | Tempo para gerar e distribuir documentação | Raphael |

---

## Registro de Features — NEXUS v1 (Módulo Kickoff)

> **Baseline histórico (pré-NEXUS):** Kickoff era feito em planilha Excel + e-mails avulsos + reuniões extras para alinhar requisitos. Estimativa de tempo médio por kickoff completo: `[HORAS_BASELINE_EXCEL]` horas.

---

### K-001 Estrutura Base do Módulo Kickoff
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Criação do formulário de kickoff com 15 seções cobrindo todo o fluxo de um projeto WCS: Info Gerais, Layout, Cubagem, Order Start, PBL/FlowRack, Picking Cart, Full Case, Gestão de Estoque, Sorter, Conferência, Packing, PTL/PTM, Etiquetas, Integração e Infraestrutura. Cada seção tem perguntas obrigatórias e opcionais, com sistema de `gate questions` (perguntas que, ao ser respondidas com "Não", marcam a seção como 100% completa e ocultam perguntas irrelevantes).

**Problema resolvido / dor eliminada:**
Antes, as informações de kickoff eram coletadas de forma desestruturada (Excel, e-mail, anotações manuais). Isso gerava inconsistências, falta de padronização entre projetos e necessidade de reuniões extras para alinhar requisitos que poderiam ter sido capturados no primeiro contato.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| `HORAS_ECONOMIZADAS_POR_KICKOFF` | `[HORAS_BASELINE_EXCEL]` h | Reduzir em `[REDUCAO_ESTIMADA_K001]`% | — | `[HORAS_REAIS_K001]` |
| `REDUCAO_REUNIOES_ALINHAMENTO` | `[REUNIOES_BASELINE]` reuniões/projeto | 0 reuniões extras por falta de info | — | `[REUNIOES_REAIS_K001]` |
| `QUALIDADE_REQUISITOS` | `[QUALIDADE_BASELINE]`/5 | ≥ 4/5 | — | `[QUALIDADE_REAL_K001]` |
| `TAXA_COMPLETUDE_KICKOFF` | — | ≥ 80% | — | `[COMPLETUDE_REAL_K001]` |

**Observações e hipóteses:**
Hipótese: ter um formulário estruturado com perguntas corretas reduz em pelo menos 2 reuniões de alinhamento por projeto. Se um projeto tem média de 5 pessoas em cada reunião de 1h, isso representa ~10 horas economizadas por projeto só nesta feature.

---

### K-002 Persistência em LocalStorage e Auto-save
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Sistema de persistência dos kickoffs em localStorage com auto-save com debounce de 1 segundo. Dados salvos incluem respostas, notas por seção, linhas PBL, dispositivos OS, detalhes de mezanino, etiquetas customizadas e detalhes de OS. Código de projeto gerado automaticamente.

**Problema resolvido / dor eliminada:**
Sem persistência, qualquer refresh ou fechamento da aba perdia o trabalho. Com auto-save, o preenchimento pode ser feito em múltiplas sessões sem risco de perda de dados.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| Perda de dados por sessão | `[PERDAS_BASELINE]` vezes/mês | 0 | — | `[PERDAS_REAIS_K002]` |
| Tempo para retomar kickoff pausado | `[TEMPO_RETOMADA_BASELINE]` min | < 1 min | — | `[TEMPO_RETOMADA_REAL_K002]` |

**Observações e hipóteses:**
Auto-save elimina ansiedade ao preencher dados longos. Feature de baixo impacto mérico isolada, mas viabilizadora de todas as outras.

---

### K-003 Sistema de Exportação (JSON + Markdown)
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Exportação do kickoff em dois formatos: JSON estruturado (com sections, notes, pbl_lines, os_devices, mez_details, etiquetas) e Markdown formatado. Exportação disponível para o kickoff completo, por seção individual, e para pendências (itens não preenchidos como checklist). Import de JSON também suportado para retomar ou migrar kickoffs.

**Problema resolvido / dor eliminada:**
Antes, gerar documentação de um projeto demandava compilar manualmente dados de várias fontes. Agora um clique gera um documento estruturado pronto para distribuir ao time ou ao cliente.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| `HORAS_DOCUMENTACAO` | `[HORAS_DOC_BASELINE]` h/projeto | < 0.5h | — | `[HORAS_DOC_REAL_K003]` |
| `TEMPO_PARA_EXPORT` | `[TEMPO_EXPORT_BASELINE]` min | < 1 min | — | `[TEMPO_EXPORT_REAL_K003]` |
| Retrabalho de formatação de docs | `[RETRABALHO_DOC_BASELINE]` h | 0h | — | `[RETRABALHO_DOC_REAL_K003]` |

**Observações e hipóteses:**
Se antes gerava documentação manualmente em ~3h por projeto, e a empresa tem X projetos/mês, o impacto anual é `X * 3h * [CUSTO_HORA]`. A ser preenchido com dados reais.

---

### K-004 Sidebar com Selector de Perfil/Papel
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Sidebar colapsável com navegação entre módulos do NEXUS. Selector de papel (role) com opções: Gestão, Engenharia, PMO, Documentação, Desenvolvimento, Elétrica. Quando colapsado, exibe apenas ícones com tooltip. Logo troca para ícone ao colapsar.

**Problema resolvido / dor eliminada:**
Preparação para lógica de visibilidade por papel. Um engenheiro e um gestor precisam ver perspectivas diferentes do mesmo kickoff. A estrutura de papéis já está criada para quando a filtragem por papel for implementada.

**KPIs relevantes para esta feature:**
Baixa relevância métrica isolada — é infraestrutura para features futuras de personalização por papel.

---

### K-005 Sistema de Gate Questions e Progresso por Seção
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Implementação do sistema de gate questions: seções que começam com uma pergunta de existência (ex: "Tem Sorter?"). Se respondida "Não", a seção é automaticamente marcada como 100% completa e todas as sub-perguntas são ocultadas. Sistema de progresso (`gp()`/`gv()`) calcula completude considerando apenas perguntas visíveis e relevantes.

**Problema resolvido / dor eliminada:**
Sem este sistema, o preenchidor seria obrigado a responder perguntas irrelevantes para o projeto (ex: detalhes de Sorter para um projeto que não tem Sorter). Isso gerava confusão e artificialmente baixava o percentual de progresso.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| `ERROS_PREENCHIMENTO_EVITADOS` | `[ERROS_BASELINE]` erros/kickoff | ~0 erros por seção irrelevante | — | `[ERROS_REAIS_K005]` |
| Tempo perdido em perguntas irrelevantes | `[TEMPO_IRRELEVANTE_BASELINE]` min/kickoff | 0 | — | `[TEMPO_IRRELEVANTE_REAL_K005]` |

**Observações e hipóteses:**
Um kickoff típico tem ~3 seções de tecnologias não presentes no projeto. Sem gate questions, o preenchidor perde tempo e fica confuso. Estimativa de `[MIN_ECONOMIZADOS_K005]` minutos economizados por kickoff.

---

### K-006 Componente PBLCard — Configuração de Linhas PBL/FlowRack
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Componente dedicado para configuração de linhas PBL (Pick by Light) / FlowRack. Suporte a múltiplas linhas independentes, cada uma com suas próprias perguntas (capacidade, número de posições, tipo de picking, etc.). Opcionais expansíveis por linha. Confirmação ao remover linha.

**Problema resolvido / dor eliminada:**
Projetos com múltiplos módulos PBL precisam configurar cada linha separadamente. Sem este componente, as informações seriam misturadas ou precisariam ser descritas em texto livre, aumentando chance de ambiguidade.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| `ERROS_PREENCHIMENTO_EVITADOS` para PBL | `[ERROS_PBL_BASELINE]` | ~0 ambiguidades por linha | — | `[ERROS_PBL_REAL_K006]` |
| Tempo para documentar config PBL | `[TEMPO_PBL_BASELINE]` min | < `[META_TEMPO_PBL_K006]` min | — | `[TEMPO_PBL_REAL_K006]` |

---

### K-007 Componente OSDevices — Rastreio de Dispositivos/Equipamentos
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Componente para listagem de dispositivos e equipamentos do projeto (impressoras, coletores, etc.). Cada dispositivo tem: tipo/modelo, quantidade, responsável pela compra (Invent/Cliente/Ambos). Remoção com confirmação. Botão X movido para linha do equipamento (sem sobreposição com input).

**Problema resolvido / dor eliminada:**
Sem um inventário estruturado de dispositivos, há riscos de um equipamento chegar sem saber quem é o responsável pela compra, ou de quantidades divergentes entre o que o cliente entendeu e o que foi especificado.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| Divergências de equipamentos (descobertas na entrega) | `[DIVERGENCIAS_EQUIP_BASELINE]` /projeto | 0 | — | `[DIVERGENCIAS_EQUIP_REAL_K007]` |
| Tempo para fazer inventário de equipamentos | `[TEMPO_INVENTARIO_BASELINE]` min | < `[META_INVENTARIO_K007]` min | — | `[TEMPO_INVENTARIO_REAL_K007]` |

---

### K-008 Componente EtiquetasEditor — Configuração de Etiquetas Customizadas
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Editor de etiquetas customizadas com suporte a múltiplas etiquetas por projeto. Cada etiqueta tem: nome, tamanho (ex: 50x100mm) e campos configuráveis (com suporte a campo de código de barras EAN/CODE128). Confirmação ao remover etiqueta ou campo.

**Problema resolvido / dor eliminada:**
Configuração de etiquetas é crítica em projetos WCS e variava completamente entre clientes. Sem este editor, as especificações ficavam em e-mails avulsos e muitas vezes chegavam incompletas ao time de impressão.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| Retrabalho em config de etiquetas | `[RETRABALHO_ETIQUETA_BASELINE]` h/projeto | 0h | — | `[RETRABALHO_ETIQUETA_REAL_K008]` |
| Ciclos de aprovação de layout de etiqueta | `[CICLOS_ETIQUETA_BASELINE]` | < `[META_CICLOS_K008]` | — | `[CICLOS_ETIQUETA_REAL_K008]` |

---

### K-009 Componente MezDetails — Detalhamento de Níveis de Mezanino
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Quando a seção de Layout indica mezanino e informa a quantidade de níveis, o sistema exibe automaticamente N campos de texto para descrever cada nível individualmente. O número de campos é dinâmico e varia com a resposta da pergunta "Quantos níveis?".

**Problema resolvido / dor eliminada:**
Projetos com mezanino têm características únicas por nível (endereçamento, tipo de produto, acesso). Sem detalhamento por nível, informações importantes ficavam implícitas.

**KPIs relevantes para esta feature:**
Baixa relevância métrica isolada — componente de detalhe.

---

### K-010 Componente OsDetails — Detalhamento de Order Starts
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Análogo ao MezDetails para Order Starts. Quando informada a quantidade de OS (Order Starts), o sistema exibe N campos para descrever cada estação individualmente (localização, tipo, observações).

**Problema resolvido / dor eliminada:**
Projetos com múltiplos Order Starts têm configurações distintas por estação. Sem este detalhamento, diferenças entre as estações eram perdidas no preenchimento genérico.

**KPIs relevantes para esta feature:**
Baixa relevância métrica isolada — componente de detalhe.

---

### K-011 Página de Projetos (ProjetosPage)
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Lista de todos os projetos salvos com cards mostrando: cliente, código do projeto (g2), codinome, barra de progresso, percentual de completude, quantidade de respostas e data de atualização. Ações: abrir overview, editar kickoff diretamente, excluir com confirmação.

**Problema resolvido / dor eliminada:**
Sem uma página de projetos, não havia visibilidade do portfólio. Cada kickoff era um documento isolado sem relação com os outros.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| Tempo para encontrar dados de um projeto | `[TEMPO_BUSCA_PROJETO_BASELINE]` min | < 30s | — | `[TEMPO_BUSCA_REAL_K011]` |
| Visibilidade simultânea de projetos | 1 (arquivo Excel por vez) | Todos | — | — |

---

### K-012 Página de Visão Geral do Projeto (ProjectOverview)
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Página intermediária entre a lista de projetos e o formulário de kickoff. Exibe: progresso geral, contagem de "A Definir" (itens marcados como TBD), e gerenciamento de contatos do projeto (add/edit/delete). Código do projeto exibido no chip é o código real (g2, ex: I24.001), não o código interno.

**Problema resolvido / dor eliminada:**
Antes de entrar no kickoff, não havia uma visão consolidada do estado do projeto. Passava-se direto para o formulário sem contexto.

**KPIs relevantes para esta feature:**
Baixa relevância métrica direta — é uma página de transição que melhora UX.

---

### K-013 Gestão de Contatos por Projeto
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Cada projeto tem uma lista de contatos (cargo + e-mail). Funções: adicionar, editar, remover (com confirmação). Botão de copiar e-mail individual no formato `"Cargo <email>"`. Botão "Copiar todos" copia todos os e-mails no formato `"Cargo1 <email1>; Cargo2 <email2>"` — pronto para colar no campo Para/CC de qualquer cliente de e-mail.

**Problema resolvido / dor eliminada:**
Antes, reunir os e-mails dos responsáveis de um projeto exigia consultar agendas, conversas de WhatsApp, planilhas separadas. Colocava-se o e-mail errado ou faltava alguém na thread.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| `TEMPO_MONTAR_LISTA_CONTATOS` | `[TEMPO_CONTATOS_BASELINE]` min | < 10s | — | `[TEMPO_CONTATOS_REAL_K013]` |
| E-mails errados/esquecidos por projeto | `[ERROS_CONTATO_BASELINE]` /projeto | 0 | — | `[ERROS_CONTATO_REAL_K013]` |
| Satisfação ao distribuir comunicação | `[SATISFACAO_BASELINE]`/5 | ≥ 4.5/5 | — | `[SATISFACAO_REAL_K013]` |

**Observações e hipóteses:**
Feature de alto impacto para comunicação. Se antes levava `[TEMPO_CONTATOS_BASELINE]` minutos para montar a lista de um projeto com ~5 contatos, e há `[PROJETOS_MES]` projetos/mês com `[EMAILS_POR_PROJETO]` e-mails enviados por projeto, a economia anual é considerável.

---

### K-014 Página de Pendências (PendenciasPage)
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Página dedicada a pendências de todos os projetos. Dois tipos de pendências: (1) "A Definir" — perguntas do kickoff respondidas com TBD, agrupadas por seção; (2) Tarefas manuais — criadas pelo usuário, com toggle done/undone e delete com confirmação. Barra de progresso de tarefas por projeto. Stats globais no topo.

**Problema resolvido / dor eliminada:**
Acompanhar o que ainda faltava definir em cada projeto exigia revisitar cada kickoff manualmente. Sem visão consolidada de pendências, itens TBD ficavam perdidos e podiam chegar ao desenvolvimento sem definição.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| Itens TBD que chegaram ao desenvolvimento | `[TBD_DEV_BASELINE]` /projeto | 0 | — | `[TBD_DEV_REAL_K014]` |
| Tempo para identificar todas as pendências de um projeto | `[TEMPO_PEND_BASELINE]` min | < 1 min | — | `[TEMPO_PEND_REAL_K014]` |
| Taxa de resolução de pendências | — | ≥ 90% antes do kickoff ser enviado | — | `[TAXA_RESOLUCAO_K014]` |

---

### K-015 Barra de Pesquisa no Kickoff
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Campo de busca na navegação lateral do kickoff. Filtra seções e perguntas em tempo real pelo texto digitado. Ícone com cor adaptada ao estado do campo.

**Problema resolvido / dor eliminada:**
Com 15 seções e ~80 perguntas, encontrar uma pergunta específica para atualizar exigia navegar manualmente por seções. A busca elimina esse atrito.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| Tempo para encontrar pergunta específica | `[TEMPO_BUSCA_PERGUNTA_BASELINE]` seg | < 5 seg | — | `[TEMPO_BUSCA_PERGUNTA_REAL_K015]` |

---

### K-016 Painel Direito Colapsável com "A Definir"
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Painel direito do kickoff com: (1) barra de prontidão geral, (2) progresso por fase, (3) seções com progresso individual, (4) accordion "A Definir" — lista todas as perguntas respondidas como TBD, clicáveis para navegar à seção. Painel é colapsável para dar mais espaço ao formulário.

**A Definir substitui "Ações Automáticas"** — a lógica anterior de triggers automáticos foi substituída por esta visão focada no que ainda precisa ser decidido.

**Problema resolvido / dor eliminada:**
Sem visão consolidada de TBDs no kickoff, o preenchidor não sabia o que ainda faltava definir. Agora tem uma lista clicável que leva direto ao item.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| `TAXA_COMPLETUDE_KICKOFF` | `[COMPLETUDE_BASELINE]`% | ≥ 85% | — | `[COMPLETUDE_REAL_K016]` |
| TBDs esquecidos por kickoff | `[TBD_ESQUECIDOS_BASELINE]` | 0 | — | `[TBD_ESQUECIDOS_REAL_K016]` |

---

### K-017 Exportação de Pendências como JSON Estruturado
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `melhoria`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
O botão "Pendências" no painel de exportação agora gera um JSON estruturado com todos os campos não preenchidos, organizados com: `secao`, `secao_id`, `questao_id`, `questao`, `obrigatoria`. Antes, exportava o Markdown envolto em um objeto JSON (dado inútil).

**Problema resolvido / dor eliminada:**
JSON de pendências pode ser consumido por outras ferramentas (sistema de tarefas, relatórios automáticos) sem precisar parsear Markdown.

**KPIs relevantes para esta feature:**
Baixa relevância métrica isolada — é uma correção de qualidade de dados para uso futuro.

---

### K-018 Inputs Numéricos com type="number"
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `melhoria`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Campos que esperam valor numérico (quantidades de OS, estações, capacidades, etc.) foram configurados com `type="number"`, evitando entrada de texto onde só faz sentido número. Campos afetados: `os1, ct_qc, ct2, l5, st2, st3, st_cap, st4, st5, st6, cf2, fc_qe, p2, p_pf, p_pc, pt_ptm_qtd, pt_tvs_ptl, pk_tp, et1, if5`.

**Problema resolvido / dor eliminada:**
Evita dados do tipo "cinco" onde esperava-se "5". Reduz validações extras no processo downstream.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| `ERROS_PREENCHIMENTO_EVITADOS` (tipo errado) | `[ERROS_TIPO_BASELINE]` /kickoff | 0 | — | `[ERROS_TIPO_REAL_K018]` |

---

### K-019 Botão "Ver Opcionais" Estilo Accordion
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `melhoria`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
O botão de perguntas opcionais foi redesenhado como um botão accordion (borda completa, largura total, seta rotativa). Renomeado de "Opcionais (N)" para "Ver Opcionais (N)". Disponível tanto nas seções do formulário quanto nas linhas PBL.

**Problema resolvido / dor eliminada:**
O botão anterior era texto simples, pouco visível e não comunicava que havia conteúdo expansível abaixo.

**KPIs relevantes para esta feature:**
Baixa relevância métrica — melhoria de UX.

---

### K-020 Confirmação em Todas as Ações de Exclusão
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `melhoria`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Adicionado Dialog de confirmação em: remover dispositivo (OSDevices), remover etiqueta, remover campo de etiqueta, remover linha PBL, excluir projeto, excluir tarefa de pendência, remover contato.

**Problema resolvido / dor eliminada:**
Cliques acidentais em ações destrutivas podiam apagar dados de preenchimento sem possibilidade de recuperação (não há undo no localStorage).

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| Exclusões acidentais reportadas | `[EXCLUSOES_ACIDENTAIS_BASELINE]` /mês | 0 | — | `[EXCLUSOES_REAIS_K020]` |

---

### K-021 Campo "Codinome do Projeto" em Info Gerais
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `nova-feature`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Novo campo `g_codinome` na seção Info Gerais para registrar o codinome interno do projeto (ex: "Projeto Colibri"). Exibido como chip dourado no overview e nos cards de projeto da lista.

**Problema resolvido / dor eliminada:**
Projetos WCS sempre têm um codinome interno para identificação rápida entre a equipe. Sem este campo, o codinome vivia apenas nas cabeças das pessoas ou em e-mails perdidos.

**KPIs relevantes para esta feature:**
Baixa relevância métrica direta — qualidade de dados e identificação.

---

### K-022 Página Landing da Aba Kickoff
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `melhoria`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Ao clicar em "Kickoff" na sidebar sem um projeto ativo, o usuário vê uma tela com 2 opções claras: "Novo Kickoff" (botão principal em destaque) e "Abrir projeto existente" (botão secundário). Elimina a confusão de entrar num formulário vazio sem saber o que fazer.

**Problema resolvido / dor eliminada:**
Antes, clicar em "Kickoff" abria um formulário em branco sem contexto. Novos usuários ficavam perdidos.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| `TEMPO_ONBOARDING_NOVO_MEMBRO` | `[ONBOARDING_BASELINE]` h | < `[META_ONBOARDING_K022]` h | — | `[ONBOARDING_REAL_K022]` |

---

### K-023 MUI Dark Theme — Migração de Infraestrutura de UI
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `refactor`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Migração completa de styles inline/Tailwind para MUI v9 com tema dark centralizado. Tokens: `primary=#ffc500`, `background.default=#1a1a1a`, `background.paper=#242424`. ThemeProvider, CssBaseline, overrides de componentes. Licença MUI X Pro configurada via variável de ambiente.

**Problema resolvido / dor eliminada:**
Sem um sistema de design consistente, cada componente tinha estilos duplicados e inconsistentes. Manutenção de visual era O(n) mudanças para cada ajuste de cor/espaçamento.

**KPIs relevantes para esta feature:**
Baixa relevância métrica para o usuário final — é infraestrutura técnica. Relevante para velocidade de desenvolvimento futuro.

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| Tempo para implementar novo componente | `[TEMPO_COMPONENTE_BASELINE]` h | < `[META_COMPONENTE_K023]` h | — | `[TEMPO_COMPONENTE_REAL_K023]` |

---

### K-024 Localização Completa para Português (BR)
**Versão:** v1.0  
**Módulo:** Kickoff WCS  
**Tipo:** `melhoria`  
**Data:** 2024  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Correção de ~35+ strings com caracteres especiais do português: ç, ã, é, ó, etc. Afetou labels de perguntas, labels de opções, textos de UI (Seção, Revisão, Prontidão, etc.), placeholders e mensagens de confirmação.

**Problema resolvido / dor eliminada:**
Interface com caracteres errados passa uma imagem de falta de cuidado e pode gerar confusão semântica em labels de perguntas técnicas.

**KPIs relevantes para esta feature:**
Baixa relevância métrica — qualidade e profissionalismo.

---

### K-025 Pendências Integradas no Visão Geral do Projeto
**Versão:** v1.1  
**Módulo:** Kickoff WCS  
**Tipo:** `melhoria`  
**Data:** 2026-06-05  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
A seção de Pendências foi integrada diretamente na página de Visão Geral do projeto (ProjectOverview), eliminando a necessidade de ir para a aba lateral "Pendências" para ver ou gerenciar pendências de um projeto específico. Na Visão Geral agora aparecem: (1) "A Definir no Kickoff" — chips clicáveis por seção com contagem, que levam direto para o kickoff; (2) Tarefas manuais — lista com checkbox de conclusão, add inline, e exclusão com confirmação. A aba global "Pendências" na sidebar continua existindo para visão cruzada de todos os projetos.

**Problema resolvido / dor eliminada:**
O usuário tinha que navegar até a aba "Pendências" e depois identificar o projeto para ver as pendências de um projeto específico. Agora, ao clicar em um projeto e ver sua Visão Geral, as pendências já estão visíveis e gerenciáveis no mesmo contexto — sem troca de aba.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| Cliques para ver pendências de um projeto | `[CLIQUES_PEND_BASELINE]` | 1 (na própria visão geral) | — | `[CLIQUES_PEND_REAL_K025]` |
| Tempo para identificar e adicionar tarefa em projeto | `[TEMPO_ADD_TAREFA_BASELINE]` seg | < 10 seg | — | `[TEMPO_ADD_TAREFA_REAL_K025]` |
| Taxa de uso da aba Pendências global vs. por projeto | — | Maioria via visão geral (contexto) | — | `[USO_PENDENCIAS_K025]` |

**Observações e hipóteses:**
Contexto reduz atrito. Ver as pendências onde está o contexto do projeto (não numa aba separada) deve aumentar a frequência de atualização das tarefas. Hipótese: tarefas marcadas como concluídas/mês aumentam após esta mudança.

---

---

## Registro de Features — Módulo Documentação

> Prefixo de ID: `DOC-XXX`

---

### DOC-001 Aba Documentação (visível apenas para o papel Documentação)
**Versão:** v1.2  
**Módulo:** Documentação  
**Tipo:** `nova-feature`  
**Data:** 2026-06-10  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Nova aba "Documentação" adicionada à sidebar, visível exclusivamente para usuários com o papel `documentacao`. Contém duas sub-abas: "Gerar Documento" (implementada) e "Apontamento de Horas" (em breve).

**Problema resolvido / dor eliminada:**
Usuários de outros papéis não precisam ver ferramentas de documentação que não fazem parte do seu fluxo. Isola as funcionalidades de documentação em um espaço dedicado e controlado por papel.

**KPIs relevantes para esta feature:**
Baixa relevância métrica isolada — é infraestrutura de acesso por papel.

---

### DOC-002 Gerar Documento (Especificação de Software)
**Versão:** v1.2  
**Módulo:** Documentação  
**Tipo:** `nova-feature`  
**Data:** 2026-06-10  
**Responsável:** Raphael Caveagna  

**O que foi feito:**
Ferramenta no browser que replica 100% a lógica do `build_docx_v5.py` em TypeScript. O usuário de Documentação: (1) vincula um projeto existente do NEXUS; (2) faz upload do `input.json` gerado pelo Especialista Documentador (alimentado com o JSON do kickoff); (3) clica em "Gerar e Baixar" — o `.docx` é montado no browser usando JSZip e baixado automaticamente com o nome no padrão Invent (`{CODIGO} - {PROJETO} - Especificacao de Software - Rev {REV}.docx`). Funcionalidades preservadas: cabeçalho/rodape do template, capa, substituição de variáveis, títulos com numeração automática, tabelas com estilo Invent, blocos JSON com syntax highlight, warnings, filtro anti-vazamento de blocos internos.

**Problema resolvido / dor eliminada:**
Antes, gerar a Especificação de Software exigia ter Python instalado, rodar o script manualmente, transferir arquivos entre máquinas. Agora qualquer membro da equipe de Documentação gera o `.docx` diretamente do browser sem instalar nada.

**KPIs relevantes para esta feature:**

| KPI | Baseline (antes) | Meta / Estimativa | Valor real | Placeholder |
|-----|-----------------|-------------------|------------|-------------|
| `HORAS_DOCUMENTACAO` | `[HORAS_DOC_BASELINE_DOC002]` h/projeto | < 5 min | — | `[HORAS_DOC_REAL_DOC002]` |
| Dependência de ambiente Python local | Sim (100% dos casos) | Eliminada | — | — |
| Erros de nome de arquivo fora do padrão | `[ERROS_NOME_BASELINE]` /mês | 0 | — | `[ERROS_NOME_REAL_DOC002]` |

**Observações e hipóteses:**
O pipeline completo é: kickoff no NEXUS → exporta JSON → Especialista Documentador alimenta com o JSON → gera input.json → upload aqui → download do .docx final. A etapa "rodar Python" foi eliminada do fluxo.

---

## Métricas Consolidadas por Versão

> IA: atualize esta tabela sempre que adicionar um novo entry acima.

### NEXUS v1 — Módulo Kickoff

| Categoria | Features | KPIs mapeados | Dados reais coletados |
|-----------|----------|---------------|----------------------|
| Core Infrastructure | K-001, K-002, K-023 | 6 | 0 |
| Export & Import | K-003, K-017 | 4 | 0 |
| Data Components | K-006, K-007, K-008, K-009, K-010 | 6 | 0 |
| Project Management | K-011, K-012, K-013, K-014, K-025 | 11 | 0 |
| UX & Navigation | K-004, K-005, K-015, K-016, K-019, K-022 | 6 | 0 |
| Quality & Polish | K-018, K-020, K-021, K-024 | 3 | 0 |
| **Total** | **25 features** | **36 KPIs** | **0** |

### NEXUS v1.2 — Módulo Documentação

| Categoria | Features | KPIs mapeados | Dados reais coletados |
|-----------|----------|---------------|----------------------|
| Access Control | DOC-001 | 0 | 0 |
| Document Generation | DOC-002 | 3 | 0 |
| **Total** | **2 features** | **3 KPIs** | **0** |

### Potencial de Impacto Total Estimado (v1)
*(Preencher com dados reais quando disponíveis)*

| Métrica | Estimativa conservadora | Estimativa otimista | Valor real |
|---------|------------------------|---------------------|------------|
| Horas economizadas por kickoff | `[HORAS_CONS_TOTAL]` h | `[HORAS_OTI_TOTAL]` h | — |
| Redução de retrabalho | `[RETRABALHO_CONS]`% | `[RETRABALHO_OTI]`% | — |
| Projetos simultâneos gerenciáveis | `[PROJ_CONS]` | `[PROJ_OTI]` | — |
| Tempo de onboarding novo membro | `[ONBOARDING_CONS]` h | `[ONBOARDING_OTI]` h | — |

---

*Arquivo mantido pelo Ecossistema NEXUS. Última atualização: 2026-06-10.*  
*Para registrar uma nova feature, siga as instruções na seção [Como Registrar uma Nova Feature](#como-registrar-uma-nova-feature).*
