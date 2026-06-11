import type { Role } from '../components/Sidebar';

export interface Sugestao {
  id: string;
  title?: string;
  texto: string;
  role: Role;
  userName: string;
  categoria?: string;
  createdAt: string;
}

const KEY = 'nexus_sugestoes';

export function loadSugestoes(): Sugestao[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]');
  } catch {
    return [];
  }
}

export function saveSugestao(s: Omit<Sugestao, 'id' | 'createdAt'>): Sugestao {
  const list = loadSugestoes();
  const nova: Sugestao = {
    ...s,
    id: Math.random().toString(36).slice(2),
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(KEY, JSON.stringify([nova, ...list]));
  return nova;
}

export function deleteSugestao(id: string): void {
  const list = loadSugestoes().filter(s => s.id !== id);
  localStorage.setItem(KEY, JSON.stringify(list));
}
