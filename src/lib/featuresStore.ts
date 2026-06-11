import { ROLE_FEATURES } from './featureRegistry';
import type { RoleFeature } from './featureRegistry';

const KEY = 'nexus_features';

export function loadFeatures(): RoleFeature[] {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored) {
      const list: RoleFeature[] = JSON.parse(stored);
      // Merge any new static entries not yet stored
      const storedIds = new Set(list.map(f => f.id));
      const newStatic = ROLE_FEATURES.filter(f => !storedIds.has(f.id));
      if (newStatic.length > 0) {
        const merged = [...list, ...newStatic];
        localStorage.setItem(KEY, JSON.stringify(merged));
        return merged;
      }
      return list;
    }
  } catch { /* fall through */ }
  const list = [...ROLE_FEATURES];
  localStorage.setItem(KEY, JSON.stringify(list));
  return list;
}

export function saveFeature(feature: RoleFeature): void {
  const list = loadFeatures().map(f => f.id === feature.id ? feature : f);
  localStorage.setItem(KEY, JSON.stringify(list));
}
