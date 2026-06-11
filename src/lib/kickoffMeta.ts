// IDs de perguntas obrigatórias do kickoff (4º argumento = 1 na função Q()).
// Opcionais (4º arg = 0) são excluídas da contagem de progresso.
export const REQUIRED_FIELDS = new Set([
  // Info Gerais
  'g1','g2','g3','g4','g5',
  // Layout
  'l1','l3','l5',
  // Cubagem
  'cu1','c1','c2',
  // Order Start
  'os_r','os1','os4',
  // PBL (gate)
  'p1',
  // Picking Cart
  'ct1','ct_r','ct_qc','ct2','ct_d','ct_df','ct6','s1c','s2c',
  // Full Case
  'fc1','fc_r','fc2','fc2b','fc_i','fc_if','fc_re',
  // Conferência
  'cf_t1','cf2','cf_t2',
  // Packing
  'pk1',
  // Sorter
  'st1','st2','st3','st4',
  // PTL/PTM
  'pt1','pt3',
  // Gestão de Estoque
  'es1','es2',
  // Etiquetas
  'et_r','et1',
  // Integração
  'in1',
  // Infraestrutura
  'if_titul','if_ambiente','if_s','if1','if2','if3','if4','if5','if6',
]);
