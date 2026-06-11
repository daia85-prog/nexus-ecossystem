import type { Role } from '../components/Sidebar';

export interface ListaItem {
  id: string;
  title?: string;
  texto: string;
  role: Role;
  userName: string;
  categoria?: string;
  sourceId: string;
  addedAt: string;
  done: boolean;
}

const KEY = 'nexus_lista';

export function loadLista(): ListaItem[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]'); }
  catch { return []; }
}

function saveLista(list: ListaItem[]): void {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addToLista(item: Omit<ListaItem, 'id' | 'addedAt' | 'done'>): ListaItem {
  const list = loadLista();
  const nova: ListaItem = {
    ...item,
    id: Math.random().toString(36).slice(2),
    addedAt: new Date().toISOString(),
    done: false,
  };
  saveLista([nova, ...list]);
  return nova;
}

export function toggleListaItem(id: string): void {
  saveLista(loadLista().map(i => i.id === id ? { ...i, done: !i.done } : i));
}

export function removeFromLista(id: string): void {
  saveLista(loadLista().filter(i => i.id !== id));
}

export function removeFromListaBySourceId(sourceId: string): void {
  saveLista(loadLista().filter(i => i.sourceId !== sourceId));
}
