export interface PageCategory {
  value: string;
  label: string;
  color: string;
}

// Lista canônica de categorias/páginas do NEXUS.
// Usada tanto no registro de funcionalidades (featureRegistry.ts)
// quanto no formulário de sugestões. Adicione aqui ao criar novas seções.
export const PAGE_CATEGORIES: PageCategory[] = [
  { value: 'projetos',     label: 'Projetos',       color: '#6366f1' },
  { value: 'kickoff',      label: 'Kickoff',         color: '#0ea5e9' },
  { value: 'ferramentas',  label: 'Ferramentas I.A', color: '#a855f7' },
  { value: 'dashboard',    label: 'Dashboard',       color: '#22c55e' },
  { value: 'config',       label: 'Configurações',   color: '#f59e0b' },
  { value: 'sugestoes',    label: 'Sugestões',       color: '#ec4899' },
  { value: 'login',        label: 'Login / Acesso',  color: '#14b8a6' },
  { value: 'geral',        label: 'Geral',           color: '#94a3b8' },
];

export function getCategoryColor(value: string): string {
  return PAGE_CATEGORIES.find(c => c.value === value)?.color ?? '#94a3b8';
}

export function getCategoryLabel(value: string): string {
  return PAGE_CATEGORIES.find(c => c.value === value)?.label ?? value;
}
