export interface SectionMeta {
  id: string;
  n: string;
  t: string;
  phase: string;
}

export const SECTION_META: SectionMeta[] = [
  { id: 'ge', n: '1',   t: 'Info Gerais',         phase: 'Dados do Projeto' },
  { id: 'la', n: '2',   t: 'Layout e Caixas',      phase: 'Dados do Projeto' },
  { id: 'cu', n: '3',   t: 'Cubagem',              phase: 'Dados do Projeto' },
  { id: 'os', n: '4',   t: 'Order Start',          phase: 'Dados do Projeto' },
  { id: 'pb', n: '5a',  t: 'PBL / FlowRack',       phase: 'Picking & Sorter' },
  { id: 'ct', n: '5b',  t: 'Picking Cart',         phase: 'Picking & Sorter' },
  { id: 'fc', n: '5c',  t: 'Full Case',            phase: 'Picking & Sorter' },
  { id: 'es', n: '6',   t: 'Gestão de Estoque',    phase: 'Picking & Sorter' },
  { id: 'so', n: '9',   t: 'Sorter',               phase: 'Picking & Sorter' },
  { id: 'cf', n: '7',   t: 'Conferência',          phase: 'Pós-Picking' },
  { id: 'pk', n: '8',   t: 'Packing',              phase: 'Pós-Picking' },
  { id: 'pt', n: '10',  t: 'PTL / PTM',            phase: 'Pós-Picking' },
  { id: 'et', n: '11',  t: 'Etiquetas',            phase: 'Gestão e Infraestrutura' },
  { id: 'in', n: '12',  t: 'Integração',           phase: 'Gestão e Infraestrutura' },
  { id: 'if', n: '13',  t: 'Infraestrutura',       phase: 'Gestão e Infraestrutura' },
];

export const SECTION_MAP: Record<string, string> = Object.fromEntries(
  SECTION_META.map(s => [s.id, s.t])
);
