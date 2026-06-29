import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { ROLES } from '../components/Sidebar';
import type { Role } from '../components/Sidebar';
import type { RoleFeature } from '../lib/featureRegistry';
import { loadFeatures, saveFeature } from '../lib/featuresStore';
import { PAGE_CATEGORIES, getCategoryColor, getCategoryLabel } from '../lib/pageCategories';
import { loadLista, toggleListaItem, removeFromLista } from '../lib/listaStore';
import type { ListaItem } from '../lib/listaStore';
import { SugestoesPage } from './SugestoesPage';

export const ROLE_COLOR: Record<Role, string> = {
  gestao:          '#6366f1',
  engenharia:      '#0ea5e9',
  documentacao:    '#8b5cf6',
  pmo:             '#ffc500',
  desenvolvimento: '#22c55e',
  eletrica:        '#f59e0b',
  adm:             '#ef4444',
};

// ─── ConfigPage: Sugestões para todos ────────────────────────────────────────

export function ConfigPage({ role, userName }: { role?: Role; userName?: string }) {
  return <SugestoesPage role={role ?? 'gestao'} userName={userName ?? ''} />;
}

// ─── FeatureCard ─────────────────────────────────────────────────────────────

export function FeatureCard({ feature, onSave, isAdm }: { feature: RoleFeature; onSave: (f: RoleFeature) => void; isAdm?: boolean }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<RoleFeature>({ ...feature });

  const handleEdit = () => { setDraft({ ...feature }); setEditing(true); };
  const handleSave = () => {
    if (!draft.title.trim()) return;
    onSave({ ...draft, title: draft.title.trim(), description: draft.description.trim() });
    setEditing(false);
  };
  const toggleRole = (r: Role) => {
    setDraft(d => ({ ...d, roles: d.roles.includes(r) ? d.roles.filter(x => x !== r) : [...d.roles, r] }));
  };

  if (editing) {
    return (
      <Paper elevation={0} sx={{ p: '16px', display: 'flex', flexDirection: 'column', gap: 2, border: '1px solid', borderColor: 'primary.main' }}>
        <TextField label="Título" size="small" fullWidth value={draft.title}
          onChange={e => setDraft(d => ({ ...d, title: e.target.value }))}
          sx={{ '& .MuiInputBase-root': { fontSize: 13 } }} />
        <TextField label="Descrição" size="small" fullWidth multiline minRows={2} value={draft.description}
          onChange={e => setDraft(d => ({ ...d, description: e.target.value }))}
          sx={{ '& .MuiInputBase-root': { fontSize: 13 } }} />
        <Box>
          <Typography sx={{ fontSize: 11, color: 'text.disabled', mb: '6px' }}>Página</Typography>
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
            {PAGE_CATEGORIES.map(c => {
              const selected = draft.page === c.label;
              return (
                <Chip key={c.value} label={c.label} size="small" onClick={() => setDraft(d => ({ ...d, page: c.label }))}
                  sx={{ fontSize: 10, height: 20, fontWeight: 600, bgcolor: selected ? `${c.color}22` : 'transparent', borderColor: selected ? c.color : 'divider', color: selected ? c.color : 'text.disabled', border: '1px solid', '&:hover': { borderColor: c.color, color: c.color } }} />
              );
            })}
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 11, color: 'text.disabled', mb: '6px' }}>
            Funções
            {draft.roles.length === ROLES.length && <Box component="span" sx={{ color: '#22c55e', ml: '6px' }}>· Todas selecionadas</Box>}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
            {ROLES.map(r => {
              const selected = draft.roles.includes(r.value);
              return (
                <Chip key={r.value} label={r.label} size="small" onClick={() => toggleRole(r.value)}
                  sx={{ fontSize: 10, height: 20, fontWeight: 600, bgcolor: selected ? `${ROLE_COLOR[r.value]}22` : 'transparent', borderColor: selected ? ROLE_COLOR[r.value] : 'divider', color: selected ? ROLE_COLOR[r.value] : 'text.disabled', border: '1px solid', '&:hover': { borderColor: ROLE_COLOR[r.value], color: ROLE_COLOR[r.value] } }} />
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>Status:</Typography>
          <Chip label={draft.implemented ? 'Implementado' : 'Planejado'} size="small"
            onClick={() => setDraft(d => ({ ...d, implemented: !d.implemented }))}
            sx={{ fontSize: 11, fontWeight: 600, cursor: 'pointer', bgcolor: draft.implemented ? 'rgba(34,197,94,0.1)' : 'rgba(255,197,0,0.06)', color: draft.implemented ? '#22c55e' : '#ffc500', border: `1px solid ${draft.implemented ? 'rgba(34,197,94,0.3)' : 'rgba(255,197,0,0.2)'}` }} />
        </Box>
        {isAdm && (
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '6px' }}>
              <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>KPIs <Box component="span" sx={{ color: '#ef4444', ml: '4px', fontSize: 10 }}>ADM</Box></Typography>
              <Button size="small" variant="text" onClick={() => setDraft(d => ({ ...d, kpis: [...(d.kpis ?? []), { label: '', value: '', unit: '' }] }))}
                sx={{ fontSize: 11, p: '2px 6px', minWidth: 0, color: 'text.disabled', '&:hover': { color: 'primary.main' } }}>
                + KPI
              </Button>
            </Box>
            {(draft.kpis ?? []).length === 0 && <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>Nenhum KPI cadastrado.</Typography>}
            {(draft.kpis ?? []).map((k, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 0.75, mb: 0.75, alignItems: 'center' }}>
                <TextField size="small" placeholder="Métrica" value={k.label}
                  onChange={e => setDraft(d => ({ ...d, kpis: (d.kpis ?? []).map((x, j) => j === i ? { ...x, label: e.target.value } : x) }))}
                  sx={{ flex: 2, '& .MuiInputBase-root': { fontSize: 12 } }} />
                <TextField size="small" placeholder="Valor" value={k.value}
                  onChange={e => setDraft(d => ({ ...d, kpis: (d.kpis ?? []).map((x, j) => j === i ? { ...x, value: e.target.value } : x) }))}
                  sx={{ flex: 1, '& .MuiInputBase-root': { fontSize: 12 } }} />
                <TextField size="small" placeholder="Unid." value={k.unit ?? ''}
                  onChange={e => setDraft(d => ({ ...d, kpis: (d.kpis ?? []).map((x, j) => j === i ? { ...x, unit: e.target.value } : x) }))}
                  sx={{ width: 64, '& .MuiInputBase-root': { fontSize: 12 } }} />
                <IconButton size="small" onClick={() => setDraft(d => ({ ...d, kpis: (d.kpis ?? []).filter((_, j) => j !== i) }))}
                  sx={{ color: 'text.disabled', '&:hover': { color: '#ef4444' }, flexShrink: 0 }}>
                  <DeleteRoundedIcon sx={{ fontSize: 14 }} />
                </IconButton>
              </Box>
            ))}
          </Box>
        )}
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
          <Button size="small" variant="outlined" onClick={() => setEditing(false)} sx={{ fontSize: 12, textTransform: 'none' }}>Cancelar</Button>
          <Button size="small" variant="contained" onClick={handleSave} disabled={!draft.title.trim()} sx={{ fontSize: 12, textTransform: 'none' }}>Salvar</Button>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper elevation={0} sx={{ p: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: 2 }}>
      <Box sx={{ mt: '2px', flexShrink: 0 }}>
        {feature.implemented
          ? <CheckCircleRoundedIcon sx={{ fontSize: 16, color: '#22c55e' }} />
          : <RadioButtonUncheckedRoundedIcon sx={{ fontSize: 16, color: 'text.disabled' }} />}
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: '4px' }}>
          <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'text.primary' }}>{feature.title}</Typography>
          <Chip label={feature.page} size="small" sx={{ fontSize: 10, height: 16, bgcolor: 'rgba(255,255,255,0.05)', color: 'text.disabled', border: 'none' }} />
          {!feature.implemented && <Chip label="Planejado" size="small" sx={{ fontSize: 10, height: 16, bgcolor: 'rgba(255,197,0,0.06)', color: 'rgba(255,197,0,0.5)', border: '1px solid rgba(255,197,0,0.15)' }} />}
        </Box>
        <Typography sx={{ fontSize: 12, color: 'text.secondary', lineHeight: 1.6 }}>{feature.description}</Typography>
        {(feature.kpis?.length ?? 0) > 0 && (
          <Box sx={{ mt: 1, pt: 1, borderTop: '1px solid', borderColor: 'divider' }}>
            <Typography sx={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.25)', mb: '6px' }}>KPIs</Typography>
            {feature.kpis!.map((k, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '3px' }}>
                <Typography sx={{ fontSize: 12, color: 'text.secondary', flex: 1 }}>{k.label}</Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'primary.main', fontFamily: 'monospace' }}>{k.value}{k.unit ? ` ${k.unit}` : ''}</Typography>
              </Box>
            ))}
          </Box>
        )}
        <Box sx={{ display: 'flex', gap: 0.75, mt: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          {feature.roles.map(r => {
            const rl = ROLES.find(x => x.value === r)?.label ?? r;
            return <Chip key={r} label={rl} size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${ROLE_COLOR[r]}18`, color: ROLE_COLOR[r], border: `1px solid ${ROLE_COLOR[r]}44` }} />;
          })}
          <Typography sx={{ fontSize: 10, color: 'text.disabled', ml: 'auto' }}>
            {new Date(feature.addedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
          </Typography>
        </Box>
      </Box>
      <Tooltip title="Editar">
        <IconButton size="small" onClick={handleEdit} sx={{ color: 'text.disabled', '&:hover': { color: 'text.primary' }, flexShrink: 0, mt: '2px' }}>
          <EditRoundedIcon sx={{ fontSize: 14 }} />
        </IconButton>
      </Tooltip>
    </Paper>
  );
}

// ─── FeaturesAdminTab ─────────────────────────────────────────────────────────

export function FeaturesAdminTab() {
  const [features, setFeatures] = useState<RoleFeature[]>(() => loadFeatures());
  const [roleFilter, setRoleFilter] = useState<Role | 'all'>('all');
  const [pageFilter, setPageFilter] = useState<string | 'all'>('all');

  const refreshFeatures = () => setFeatures(loadFeatures());
  const handleSaveFeature = (updated: RoleFeature) => { saveFeature(updated); refreshFeatures(); };

  const usedPages = new Set(features.map(f => f.page));
  const pagePages = PAGE_CATEGORIES.filter(c => usedPages.has(c.label));
  const filtered = features.filter(f => {
    const matchRole = roleFilter === 'all' || f.roles.includes(roleFilter);
    const matchPage = pageFilter === 'all' || f.page === pageFilter;
    return matchRole && matchPage;
  });
  const byRole = ROLES.map(r => ({ ...r, features: features.filter(f => f.roles.includes(r.value)) })).filter(r => r.features.length > 0);

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1.5 }}>
        <Box>
          <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>Funcionalidades por Função</Typography>
          <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>Lista de recursos exclusivos ou diferenciados por setor. Clique em editar para ajustar.</Typography>
        </Box>
        <Chip label={`${features.filter(f => f.implemented).length} / ${features.length} implementadas`} size="small"
          sx={{ bgcolor: 'rgba(255,197,0,0.08)', color: '#ffc500', border: '1px solid rgba(255,197,0,0.2)', fontSize: 11, fontWeight: 600 }} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Função:</Typography>
          <Chip label="Todas" size="small" onClick={() => setRoleFilter('all')}
            sx={{ fontSize: 11, fontWeight: 600, bgcolor: roleFilter === 'all' ? 'rgba(255,255,255,0.1)' : 'transparent', borderColor: roleFilter === 'all' ? 'rgba(255,255,255,0.3)' : 'divider', color: roleFilter === 'all' ? 'text.primary' : 'text.disabled', border: '1px solid' }} />
          {ROLES.map(r => (
            <Chip key={r.value} label={r.label} size="small" onClick={() => setRoleFilter(roleFilter === r.value ? 'all' : r.value)}
              sx={{ fontSize: 11, fontWeight: 600, bgcolor: roleFilter === r.value ? `${ROLE_COLOR[r.value]}22` : 'transparent', borderColor: roleFilter === r.value ? ROLE_COLOR[r.value] : 'divider', color: roleFilter === r.value ? ROLE_COLOR[r.value] : 'text.disabled', border: '1px solid', '&:hover': { borderColor: ROLE_COLOR[r.value], color: ROLE_COLOR[r.value] } }} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Categoria:</Typography>
          <Chip label="Todas" size="small" onClick={() => setPageFilter('all')}
            sx={{ fontSize: 11, bgcolor: pageFilter === 'all' ? 'rgba(255,255,255,0.07)' : 'transparent', borderColor: pageFilter === 'all' ? 'rgba(255,255,255,0.2)' : 'divider', color: pageFilter === 'all' ? 'text.secondary' : 'text.disabled', border: '1px solid' }} />
          {pagePages.map(cat => (
            <Chip key={cat.value} label={cat.label} size="small" onClick={() => setPageFilter(pageFilter === cat.label ? 'all' : cat.label)}
              sx={{ fontSize: 11, fontWeight: 600, bgcolor: pageFilter === cat.label ? `${cat.color}20` : 'transparent', borderColor: pageFilter === cat.label ? cat.color : 'divider', color: pageFilter === cat.label ? cat.color : 'text.disabled', border: '1px solid', '&:hover': { borderColor: cat.color, color: cat.color } }} />
          ))}
        </Box>
      </Box>

      {filtered.length === 0 ? (
        <Typography sx={{ fontSize: 13, color: 'text.disabled', fontStyle: 'italic' }}>Nenhuma funcionalidade encontrada para os filtros selecionados.</Typography>
      ) : roleFilter === 'all' ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {byRole.filter(r => pageFilter === 'all' || r.features.some(f => f.page === pageFilter)).map(r => (
            <Box key={r.value}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: ROLE_COLOR[r.value], flexShrink: 0 }} />
                <Typography sx={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: ROLE_COLOR[r.value] }}>{r.label}</Typography>
                <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>· {r.features.filter(f => pageFilter === 'all' || f.page === pageFilter).length} item(s)</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {r.features.filter(f => pageFilter === 'all' || f.page === pageFilter).map(f => <FeatureCard key={f.id} feature={f} onSave={handleSaveFeature} isAdm={true} />)}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {filtered.map(f => <FeatureCard key={f.id} feature={f} onSave={handleSaveFeature} isAdm={true} />)}
        </Box>
      )}
    </Box>
  );
}

// ─── PendenciasTab ────────────────────────────────────────────────────────────

export function PendenciasTab() {
  const [lista, setLista] = useState<ListaItem[]>(() => loadLista());
  const [listaRoleFilter, setListaRoleFilter] = useState<Role | 'all'>('all');
  const [listaCatFilter, setListaCatFilter] = useState<string | 'all'>('all');

  const refreshLista = () => setLista(loadLista());

  const listaFiltrada = lista.filter(i => {
    const matchRole = listaRoleFilter === 'all' || i.role === listaRoleFilter;
    const matchCat = listaCatFilter === 'all' || i.categoria === listaCatFilter;
    return matchRole && matchCat;
  });
  const listaUsedCategories = PAGE_CATEGORIES.filter(c => lista.some(i => i.categoria === c.value));
  const listaRolesUsed = ROLES.filter(r => lista.some(i => i.role === r.value));
  const donePct = lista.length > 0 ? Math.round((lista.filter(i => i.done).length / lista.length) * 100) : 0;

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1.5 }}>
        <Box>
          <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>Backlog de Pendências</Typography>
          <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>Sugestões marcadas para acompanhamento. Marque como concluídas conforme forem implementadas.</Typography>
        </Box>
        {lista.length > 0 && (
          <Chip label={`${lista.filter(i => i.done).length} / ${lista.length} concluídas (${donePct}%)`} size="small"
            sx={{ bgcolor: 'rgba(34,197,94,0.08)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)', fontSize: 11, fontWeight: 600 }} />
        )}
      </Box>

      {lista.length > 0 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Função:</Typography>
            <Chip label={`Todas (${lista.length})`} size="small" onClick={() => setListaRoleFilter('all')}
              sx={{ fontSize: 11, fontWeight: 600, bgcolor: listaRoleFilter === 'all' ? 'rgba(255,255,255,0.1)' : 'transparent', borderColor: listaRoleFilter === 'all' ? 'rgba(255,255,255,0.25)' : 'divider', color: listaRoleFilter === 'all' ? 'text.primary' : 'text.disabled', border: '1px solid' }} />
            {listaRolesUsed.map(r => (
              <Chip key={r.value} label={`${r.label} (${lista.filter(i => i.role === r.value).length})`} size="small"
                onClick={() => setListaRoleFilter(listaRoleFilter === r.value ? 'all' : r.value)}
                sx={{ fontSize: 11, fontWeight: 600, bgcolor: listaRoleFilter === r.value ? `${ROLE_COLOR[r.value]}20` : 'transparent', borderColor: listaRoleFilter === r.value ? ROLE_COLOR[r.value] : 'divider', color: listaRoleFilter === r.value ? ROLE_COLOR[r.value] : 'text.disabled', border: '1px solid', '&:hover': { borderColor: ROLE_COLOR[r.value], color: ROLE_COLOR[r.value] } }} />
            ))}
          </Box>
          {listaUsedCategories.length > 0 && (
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px', minWidth: 60 }}>Categoria:</Typography>
              <Chip label="Todas" size="small" onClick={() => setListaCatFilter('all')}
                sx={{ fontSize: 11, bgcolor: listaCatFilter === 'all' ? 'rgba(255,255,255,0.07)' : 'transparent', borderColor: listaCatFilter === 'all' ? 'rgba(255,255,255,0.2)' : 'divider', color: listaCatFilter === 'all' ? 'text.secondary' : 'text.disabled', border: '1px solid' }} />
              {listaUsedCategories.map(c => (
                <Chip key={c.value} label={c.label} size="small" onClick={() => setListaCatFilter(listaCatFilter === c.value ? 'all' : c.value)}
                  sx={{ fontSize: 11, fontWeight: 600, bgcolor: listaCatFilter === c.value ? `${c.color}20` : 'transparent', borderColor: listaCatFilter === c.value ? c.color : 'divider', color: listaCatFilter === c.value ? c.color : 'text.disabled', border: '1px solid', '&:hover': { borderColor: c.color, color: c.color } }} />
              ))}
            </Box>
          )}
        </Box>
      )}

      {listaFiltrada.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <FormatListBulletedRoundedIcon sx={{ fontSize: 36, color: 'text.disabled', mb: 1.5, opacity: 0.4 }} />
          <Typography sx={{ fontSize: 13, color: 'text.disabled' }}>
            {lista.length === 0 ? 'Nenhuma pendência ainda. Marque sugestões com o bookmark na aba Sugestões.' : 'Nenhum item para esse filtro.'}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {listaFiltrada.map(item => {
            const rl = ROLES.find(r => r.value === item.role);
            const catColor = item.categoria ? getCategoryColor(item.categoria) : null;
            const catLabel = item.categoria ? getCategoryLabel(item.categoria) : null;
            const date = new Date(item.addedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
            return (
              <Paper key={item.id} elevation={0} sx={{ p: '12px 16px', display: 'flex', gap: 1.5, alignItems: 'flex-start', opacity: item.done ? 0.5 : 1, transition: 'opacity .2s' }}>
                <Checkbox checked={item.done} onChange={() => { toggleListaItem(item.id); refreshLista(); }} size="small"
                  sx={{ p: '2px', mt: '1px', flexShrink: 0, color: 'text.disabled', '&.Mui-checked': { color: '#22c55e' } }} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  {item.title && (
                    <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'text.primary', mb: '4px', textDecoration: item.done ? 'line-through' : 'none' }}>
                      {item.title}
                    </Typography>
                  )}
                  <Typography sx={{ fontSize: 13, color: item.title ? 'text.secondary' : 'text.primary', lineHeight: 1.7, whiteSpace: 'pre-wrap', wordBreak: 'break-word', textDecoration: item.done ? 'line-through' : 'none' }}>
                    {item.texto}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: '6px', flexWrap: 'wrap' }}>
                    <Chip label={rl?.label ?? item.role} size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${ROLE_COLOR[item.role]}18`, color: ROLE_COLOR[item.role], border: `1px solid ${ROLE_COLOR[item.role]}44`, fontWeight: 600 }} />
                    {catLabel && catColor && <Chip label={catLabel} size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${catColor}18`, color: catColor, border: `1px solid ${catColor}44`, fontWeight: 600 }} />}
                    {item.userName && <Typography sx={{ fontSize: 11, fontWeight: 600, color: 'text.secondary' }}>{item.userName}</Typography>}
                    <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>{date}</Typography>
                  </Box>
                </Box>
                <Tooltip title="Remover da lista">
                  <IconButton size="small" onClick={() => { removeFromLista(item.id); refreshLista(); }} sx={{ color: 'text.disabled', '&:hover': { color: '#ef4444' }, flexShrink: 0, mt: '2px' }}>
                    <DeleteRoundedIcon sx={{ fontSize: 15 }} />
                  </IconButton>
                </Tooltip>
              </Paper>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
