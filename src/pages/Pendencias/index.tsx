import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import type { NexusProject, Pendencia } from '../../lib/projectStore';
import { loadProjects, upsertProject, generateId } from '../../lib/projectStore';
import { SECTION_MAP } from '../../lib/sectionMeta';

function getADefinirBySection(answers: Record<string, string>): Array<{ sectionId: string; sectionName: string; count: number }> {
  const counts: Record<string, number> = {};

  Object.entries(answers).forEach(([key, val]) => {
    if (val !== 'tbd') return;
    let secId = 'ge';
    if (key.startsWith('os')) secId = 'os';
    else if (key.startsWith('p') && !key.startsWith('pt') && !key.startsWith('pk')) secId = 'pb';
    else if (key.startsWith('ct') || key === 's1c' || key === 's2c') secId = 'ct';
    else if (key.startsWith('fc')) secId = 'fc';
    else if (key.startsWith('es')) secId = 'es';
    else if (key.startsWith('st') || key.startsWith('so')) secId = 'so';
    else if (key.startsWith('cf')) secId = 'cf';
    else if (key.startsWith('pk')) secId = 'pk';
    else if (key.startsWith('pt')) secId = 'pt';
    else if (key.startsWith('et')) secId = 'et';
    else if (key.startsWith('in')) secId = 'in';
    else if (key.startsWith('if')) secId = 'if';
    else if (key.startsWith('l')) secId = 'la';
    else if (key.startsWith('c') && !key.startsWith('ct') && !key.startsWith('cf')) secId = 'cu';
    else if (key.startsWith('g')) secId = 'ge';

    counts[secId] = (counts[secId] || 0) + 1;
  });

  return Object.entries(counts).map(([id, count]) => ({
    sectionId: id,
    sectionName: SECTION_MAP[id] || id,
    count,
  })).sort((a, b) => b.count - a.count);
}

interface DeleteTarget {
  projectId: string;
  pendencia: Pendencia;
}

export function PendenciasPage() {
  const [projects, setProjects] = useState<NexusProject[]>([]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [addingTo, setAddingTo] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget | null>(null);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => setProjects(loadProjects());

  const toggle = (id: string) => setExpanded(e => ({ ...e, [id]: !e[id] }));

  const addPendencia = (projectId: string) => {
    if (!newTitle.trim()) return;
    const p = projects.find(x => x.id === projectId);
    if (!p) return;
    const updated = { ...p, pendencias: [...(p.pendencias ?? []), { id: generateId(), titulo: newTitle.trim(), feito: false }], updatedAt: new Date().toISOString() };
    upsertProject(updated);
    refresh();
    setAddingTo(null);
    setNewTitle('');
  };

  const toggleDone = (projectId: string, pendenciaId: string) => {
    const p = projects.find(x => x.id === projectId);
    if (!p) return;
    const updated = { ...p, pendencias: (p.pendencias ?? []).map(pend => pend.id === pendenciaId ? { ...pend, feito: !pend.feito } : pend), updatedAt: new Date().toISOString() };
    upsertProject(updated);
    refresh();
  };

  const deletePendencia = () => {
    if (!deleteTarget) return;
    const p = projects.find(x => x.id === deleteTarget.projectId);
    if (!p) return;
    const updated = { ...p, pendencias: (p.pendencias ?? []).filter(pend => pend.id !== deleteTarget.pendencia.id), updatedAt: new Date().toISOString() };
    upsertProject(updated);
    refresh();
    setDeleteTarget(null);
  };

  const totalADef = projects.reduce((n, p) => n + Object.values(p.answers).filter(v => v === 'tbd').length, 0);
  const totalPend = projects.reduce((n, p) => n + (p.pendencias?.filter(x => !x.feito).length ?? 0), 0);

  return (
    <Box className="page-enter" sx={{ p: 3, maxWidth: 760, flex: 1 }}>

      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: 11, color: 'text.disabled', fontFamily: 'monospace', mb: '4px' }}>
          NEXUS · PENDÊNCIAS
        </Typography>
        <Typography sx={{ fontSize: 20, fontWeight: 800, color: 'text.primary', letterSpacing: '-.4px' }}>
          Pendências
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          {totalADef > 0 && (
            <Chip
              icon={<WarningAmberRoundedIcon sx={{ fontSize: '14px !important', color: '#f59e0b !important' }} />}
              label={`${totalADef} A Definir`}
              size="small"
              sx={{ bgcolor: 'rgba(245,158,11,0.10)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.25)', fontWeight: 600, fontSize: 11 }}
            />
          )}
          {totalPend > 0 && (
            <Chip
              label={`${totalPend} pendência${totalPend !== 1 ? 's' : ''} em aberto`}
              size="small"
              sx={{ bgcolor: 'rgba(255,197,0,0.08)', color: 'primary.main', border: '1px solid rgba(255,197,0,0.2)', fontWeight: 600, fontSize: 11 }}
            />
          )}
        </Box>
      </Box>

      {projects.length === 0 && (
        <Paper elevation={0} sx={{ p: 5, textAlign: 'center' }}>
          <FolderOpenRoundedIcon sx={{ fontSize: 40, color: 'primary.main', opacity: 0.4, mb: 1.5 }} />
          <Typography sx={{ color: 'text.secondary' }}>Nenhum projeto encontrado.</Typography>
        </Paper>
      )}

      {/* Projects accordion */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {projects.map(p => {
          const aDefs = getADefinirBySection(p.answers);
          const totalADef = aDefs.reduce((n, s) => n + s.count, 0);
          const pendencias = p.pendencias ?? [];
          const done = pendencias.filter(x => x.feito).length;
          const total = pendencias.length;
          const isOpen = !!expanded[p.id];

          return (
            <Paper key={p.id} elevation={0} sx={{ overflow: 'hidden' }}>
              {/* Project header row */}
              <Box
                component="button"
                onClick={() => toggle(p.id)}
                sx={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 1.5,
                  p: '12px 16px', bgcolor: 'transparent', border: 'none', cursor: 'pointer',
                  borderBottom: isOpen ? '1px solid' : 'none', borderColor: 'divider',
                  textAlign: 'left',
                }}
              >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '2px' }}>
                    <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'text.primary' }}>{p.client}</Typography>
                    <Chip label={p.code} size="small" sx={{ fontSize: 9, height: 16, fontFamily: 'monospace', bgcolor: '#383838', color: 'text.secondary', border: 'none' }} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {totalADef > 0 && (
                      <Typography sx={{ fontSize: 10, color: '#f59e0b' }}>{totalADef} A Definir</Typography>
                    )}
                    {total > 0 && (
                      <Typography sx={{ fontSize: 10, color: 'text.disabled' }}>{done}/{total} tarefas</Typography>
                    )}
                    {totalADef === 0 && total === 0 && (
                      <Typography sx={{ fontSize: 10, color: 'text.disabled' }}>Sem pendências</Typography>
                    )}
                  </Box>
                </Box>

                {/* Progress bar */}
                {total > 0 && (
                  <Box sx={{ width: 80, height: 4, borderRadius: '2px', bgcolor: '#383838', overflow: 'hidden', flexShrink: 0 }}>
                    <Box sx={{ height: 4, width: `${Math.round(done / total * 100)}%`, bgcolor: done === total ? '#22c55e' : '#ffc500', borderRadius: '2px', transition: 'width .4s' }} />
                  </Box>
                )}

                <KeyboardArrowDownRoundedIcon sx={{ fontSize: 16, color: 'text.disabled', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s', flexShrink: 0 }} />
              </Box>

              <Collapse in={isOpen}>
                <Box sx={{ p: '12px 16px', display: 'flex', flexDirection: 'column', gap: 1.5 }}>

                  {/* A Definir section */}
                  {aDefs.length > 0 && (
                    <Box>
                      <Typography sx={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#f59e0b', mb: 0.75 }}>
                        A Definir
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {aDefs.map(s => (
                          <Chip
                            key={s.sectionId}
                            label={`${s.sectionName} (${s.count})`}
                            size="small"
                            sx={{ fontSize: 10, height: 20, bgcolor: 'rgba(245,158,11,0.10)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)' }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {/* Custom pendências */}
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.75 }}>
                      <Typography sx={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'text.disabled' }}>
                        Tarefas
                      </Typography>
                      <Button size="small" variant="text" startIcon={<AddRoundedIcon />} onClick={() => { setAddingTo(p.id); setNewTitle(''); }} sx={{ fontSize: 11, py: 0 }}>
                        Nova
                      </Button>
                    </Box>

                    {/* Add task inline */}
                    {addingTo === p.id && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1 }}>
                        <TextField
                          size="small"
                          fullWidth
                          value={newTitle}
                          onChange={e => setNewTitle(e.target.value)}
                          placeholder="Título da tarefa..."
                          autoFocus
                          onKeyDown={e => { if (e.key === 'Enter') addPendencia(p.id); if (e.key === 'Escape') setAddingTo(null); }}
                          slotProps={{ input: { style: { fontSize: 12 } } }}
                        />
                        <Button size="small" variant="contained" color="primary" onClick={() => addPendencia(p.id)} sx={{ flexShrink: 0 }}>Ok</Button>
                        <IconButton size="small" onClick={() => setAddingTo(null)}><CloseRoundedIcon sx={{ fontSize: 14 }} /></IconButton>
                      </Box>
                    )}

                    {pendencias.length === 0 && addingTo !== p.id && (
                      <Typography sx={{ fontSize: 11, color: 'text.disabled', fontStyle: 'italic' }}>Nenhuma tarefa. Clique em Nova para adicionar.</Typography>
                    )}

                    {pendencias.map(pend => (
                      <Box
                        key={pend.id}
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, py: '5px', borderBottom: '1px solid rgba(58,58,58,0.3)' }}
                      >
                        <IconButton size="small" onClick={() => toggleDone(p.id, pend.id)} sx={{ color: pend.feito ? '#22c55e' : 'text.disabled', p: '2px' }}>
                          {pend.feito
                            ? <CheckCircleRoundedIcon sx={{ fontSize: 16 }} />
                            : <RadioButtonUncheckedRoundedIcon sx={{ fontSize: 16 }} />
                          }
                        </IconButton>
                        <Typography sx={{ flex: 1, fontSize: 12, color: pend.feito ? 'text.disabled' : 'text.primary', textDecoration: pend.feito ? 'line-through' : 'none' }}>
                          {pend.titulo}
                        </Typography>
                        <Tooltip title="Excluir tarefa">
                          <IconButton size="small" onClick={() => setDeleteTarget({ projectId: p.id, pendencia: pend })} sx={{ color: 'text.disabled', '&:hover': { color: 'error.main' } }}>
                            <DeleteRoundedIcon sx={{ fontSize: 13 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Collapse>
            </Paper>
          );
        })}
      </Box>

      {/* Delete pendência confirmation */}
      <Dialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Excluir tarefa
          <IconButton size="small" onClick={() => setDeleteTarget(null)}><CloseRoundedIcon fontSize="small" /></IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: 14, color: 'text.primary', lineHeight: 1.6 }}>
            Excluir a tarefa <Box component="span" sx={{ fontWeight: 700, color: 'primary.main' }}>"{deleteTarget?.pendencia.titulo}"</Box>?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteTarget(null)} color="inherit" size="small">Cancelar</Button>
          <Button onClick={deletePendencia} variant="contained" color="error" size="small">Excluir</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
