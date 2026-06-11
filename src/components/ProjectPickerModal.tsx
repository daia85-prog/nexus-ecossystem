import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import type { NexusProject } from '../lib/projectStore';
import { loadProjects, getProgress } from '../lib/projectStore';

interface Props {
  open: boolean;
  onClose: () => void;
  onSelect: (project: NexusProject) => void;
}

export function ProjectPickerModal({ open, onClose, onSelect }: Props) {
  const [projects, setProjects] = useState<NexusProject[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (open) { setProjects(loadProjects()); setSearch(''); }
  }, [open]);

  const q = search.trim().toLowerCase();
  const filtered = q
    ? projects.filter(p =>
        p.client.toLowerCase().includes(q) ||
        p.name?.toLowerCase().includes(q) ||
        (p.answers?.g2 || p.code).toLowerCase().includes(q) ||
        p.answers?.g_codinome?.toLowerCase().includes(q)
      )
    : projects;

  const handleSelect = (p: NexusProject) => { onSelect(p); onClose(); };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
        Selecionar Projeto
        <IconButton size="small" onClick={onClose}><CloseRoundedIcon fontSize="small" /></IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 0, pb: 2 }}>
        <TextField
          fullWidth size="small" autoFocus
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar por cliente, código, codinome..."
          sx={{ mb: 1.5 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon sx={{ fontSize: 16, color: search ? 'primary.main' : 'text.disabled' }} />
                </InputAdornment>
              ),
            },
          }}
        />

        {filtered.length === 0 && (
          <Typography sx={{ color: 'text.disabled', fontSize: 13, py: 3, textAlign: 'center' }}>
            Nenhum projeto encontrado.
          </Typography>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, maxHeight: 380, overflowY: 'auto' }}>
          {filtered.map(p => {
            const progress = getProgress(p);
            const progColor = progress === 100 ? '#22c55e' : progress > 0 ? '#ffc500' : '#666';
            const displayCode = p.answers?.g2 || p.code;
            return (
              <Paper
                key={p.id}
                elevation={0}
                onClick={() => handleSelect(p)}
                sx={{
                  p: '10px 14px', cursor: 'pointer', transition: '.15s',
                  '&:hover': { borderColor: 'rgba(255,197,0,0.35)', bgcolor: 'rgba(255,197,0,0.03)' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.5, flexWrap: 'wrap' }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'text.primary' }}>{p.client}</Typography>
                  <Chip label={displayCode} size="small" sx={{ fontSize: 10, height: 18, fontFamily: 'monospace', fontWeight: 700, bgcolor: '#383838', color: 'text.secondary', border: 'none' }} />
                  {p.answers?.g_codinome && (
                    <Chip label={p.answers.g_codinome} size="small" sx={{ fontSize: 10, height: 18, fontWeight: 600, bgcolor: 'rgba(255,197,0,0.1)', color: 'primary.main', border: '1px solid rgba(255,197,0,0.3)' }} />
                  )}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 80, height: 4, borderRadius: '2px', bgcolor: '#383838', overflow: 'hidden' }}>
                    <Box sx={{ height: 4, borderRadius: '2px', width: progress + '%', bgcolor: progColor, transition: 'width .4s' }} />
                  </Box>
                  <Typography sx={{ fontSize: 10, fontFamily: 'monospace', color: progColor, fontWeight: 600 }}>{progress}%</Typography>
                  <Typography sx={{ fontSize: 10, color: 'text.disabled' }}>
                    {new Date(p.updatedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                  </Typography>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
