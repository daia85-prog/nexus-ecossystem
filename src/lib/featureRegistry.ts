import type { Role } from '../components/Sidebar';

export interface KpiEntry {
  label: string;
  value: string;
  unit?: string;
}

export interface RoleFeature {
  id: string;
  title: string;
  description: string;
  roles: Role[];
  page: string;
  addedAt: string;
  implemented: boolean;
  kpis?: KpiEntry[];
}

// ─── REGISTRO DE FUNCIONALIDADES POR FUNÇÃO ───────────────────────────────────
// Adicione aqui APENAS funcionalidades que se comportam de forma diferente
// para funções/setores específicos. Funcionalidades disponíveis para TODOS
// não devem aparecer aqui.
//
// Campos:
//   id          – slug único (kebab-case)
//   title       – nome curto da funcionalidade
//   description – o que essa função vê/pode fazer de diferente
//   roles       – array com os valores exatos de ROLES (gestao, pmo, etc.)
//   page        – em qual aba/página está
//   addedAt     – data no formato YYYY-MM-DD
//   implemented – true se já está no código, false se ainda é planejado

export const ROLE_FEATURES: RoleFeature[] = [
  {
    id: 'doc-aba-documentacao',
    title: 'Aba Documentação',
    description: 'Apenas a função Documentação enxerga a aba "Documentação" na sidebar, com sub-abas Gerar Documento e Apontamento de Horas.',
    roles: ['documentacao'],
    page: 'Documentação',
    addedAt: '2026-06-10',
    implemented: true,
  },
  {
    id: 'doc-apontamento-horas',
    title: 'Apontamento de Horas',
    description: 'Documentação lança atividades por dia da semana com pesos, distribui automaticamente em blocos de 30 min respeitando jornada e almoço, permite ajuste manual e exporta planilha Excel no formato padrão Invent (15 colunas, uma linha por bloco).',
    roles: ['documentacao'],
    page: 'Documentação',
    addedAt: '2026-06-19',
    implemented: true,
  },
  {
    id: 'doc-gerar-documento',
    title: 'Gerar Documento (Especificação de Software)',
    description: 'Documentação pode vincular um projeto existente, fazer upload de um input.json gerado pelo Especialista Documentador e baixar automaticamente o .docx de Especificação de Software no padrão Invent.',
    roles: ['documentacao'],
    page: 'Documentação',
    addedAt: '2026-06-10',
    implemented: true,
  },
  {
    id: 'doc-json-versions',
    title: 'Versionamento de input.json',
    description: 'Documentação vê no Overview de cada projeto um accordion com todas as versões de input.json geradas. Cada versão permite baixar o JSON, gerar o .docx diretamente ou excluir (com confirmação).',
    roles: ['documentacao'],
    page: 'Projetos',
    addedAt: '2026-06-11',
    implemented: true,
  },
  {
    id: 'doc-approval-date',
    title: 'Marcação de Data de Aprovação',
    description: 'Em cada projeto, Documentação pode registrar a data em que o documento foi aprovado pelo cliente.',
    roles: ['documentacao'],
    page: 'Projetos',
    addedAt: '2026-06-09',
    implemented: false,
  },
  {
    id: 'pmo-project-control',
    title: 'Painel de Controle de Projetos',
    description: 'PMO enxerga uma seção extra em cada projeto com indicadores de prazo, status e responsável.',
    roles: ['pmo'],
    page: 'Projetos',
    addedAt: '2026-06-09',
    implemented: false,
  },
  {
    id: 'pmo-ia-tools',
    title: 'Ferramentas I.A Avançadas',
    description: 'PMO tem acesso a assistentes de IA para geração de relatório executivo, análise de risco e resumo de kickoff.',
    roles: ['pmo'],
    page: 'Ferramentas I.A',
    addedAt: '2026-06-09',
    implemented: false,
  },
  {
    id: 'adm-easter-egg',
    title: 'Acesso Administrador (easter egg)',
    description: 'Clique 10x no logo NEXUS e pressione Y para ativar o modo Administrador. Desativa ao trocar para outro papel.',
    roles: ['adm'],
    page: 'Configurações',
    addedAt: '2026-06-11',
    implemented: true,
  },
  {
    id: 'adm-kpi-editor',
    title: 'Editor de KPIs por Funcionalidade',
    description: 'Administrador pode adicionar e editar valores de KPI (métricas de impacto) em cada funcionalidade listada no painel de Administração.',
    roles: ['adm'],
    page: 'Configurações',
    addedAt: '2026-06-11',
    implemented: true,
  },
];
