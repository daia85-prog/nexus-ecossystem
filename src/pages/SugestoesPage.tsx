import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import { ROLES } from '../components/Sidebar';
import type { Role } from '../components/Sidebar';
import { loadSugestoes, saveSugestao, deleteSugestao } from '../lib/sugestoesStore';
import type { Sugestao } from '../lib/sugestoesStore';
import { loadLista, addToLista, removeFromListaBySourceId } from '../lib/listaStore';
import { PAGE_CATEGORIES, getCategoryColor, getCategoryLabel } from '../lib/pageCategories';

const ROLE_COLOR: Record<Role, string> = {
  gestao:          '#6366f1',
  engenharia:      '#0ea5e9',
  documentacao:    '#8b5cf6',
  pmo:             '#ffc500',
  desenvolvimento: '#22c55e',
  eletrica:        '#f59e0b',
};

interface Props {
  role: Role;
  userName: string;
}

export function SugestoesPage({ role, userName }: Props) {
  const [sugestoes, setSugestoes] = useState<Sugestao[]>([]);
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [categoria, setCategoria] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<Role | 'all'>('all');
  const [filtroCategoria, setFiltroCategoria] = useState<string | 'all'>('all');
  const [enviado, setEnviado] = useState(false);
  // Set of sourceIds currently in lista — TODO: restringir ao ADM
  const [listaIds, setListaIds] = useState<Set<string>>(() =>
    new Set(loadLista().map(i => i.sourceId))
  );

  useEffect(() => {
    setSugestoes(loadSugestoes());
  }, []);

  const refreshLista = () => setListaIds(new Set(loadLista().map(i => i.sourceId)));

  const handleEnviar = () => {
    if (!texto.trim()) return;
    saveSugestao({ title: titulo.trim() || undefined, texto: texto.trim(), role, userName, categoria: categoria ?? undefined });
    setSugestoes(loadSugestoes());
    setTitulo('');
    setTexto('');
    setCategoria(null);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 2500);
  };

  const handleDelete = (id: string) => {
    deleteSugestao(id);
    removeFromListaBySourceId(id);
    setSugestoes(loadSugestoes());
    refreshLista();
  };

  const handleToggleLista = (s: Sugestao) => {
    if (listaIds.has(s.id)) {
      removeFromListaBySourceId(s.id);
    } else {
      addToLista({ title: s.title, texto: s.texto, role: s.role, userName: s.userName, categoria: s.categoria, sourceId: s.id });
    }
    refreshLista();
  };

  const roleLabel = ROLES.find(r => r.value === role)?.label ?? role;

  const filtradas = sugestoes.filter(s => {
    const matchRole = filtro === 'all' || s.role === filtro;
    const matchCat = filtroCategoria === 'all' || s.categoria === filtroCategoria;
    return matchRole && matchCat;
  });

  const contagemPorRole = (r: Role) => sugestoes.filter(s => s.role === r).length;
  const usedCategories = PAGE_CATEGORIES.filter(c => sugestoes.some(s => s.categoria === c.value));

  return (
    <Box className="page-enter" sx={{ p: 3, flex: 1 }}>

      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: '6px' }}>
        <TipsAndUpdatesRoundedIcon sx={{ fontSize: 22, color: 'primary.main' }} />
        <Typography sx={{ fontSize: 20, fontWeight: 800, color: 'text.primary', letterSpacing: '-.3px' }}>
          Sugestões
        </Typography>
      </Box>
      <Typography sx={{ fontSize: 13, color: 'text.disabled', mb: 3, lineHeight: 1.6 }}>
        Compartilhe ideias para melhorar o NEXUS. Tudo aqui é salvo localmente e visível para a equipe.
      </Typography>

      {/* Input card */}
      <Paper elevation={0} sx={{ p: 2.5, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.secondary' }}>
            Nova sugestão
          </Typography>
          <Chip
            label={roleLabel}
            size="small"
            sx={{
              fontSize: 10, height: 18,
              bgcolor: `${ROLE_COLOR[role]}18`,
              color: ROLE_COLOR[role],
              border: `1px solid ${ROLE_COLOR[role]}44`,
              fontWeight: 600,
            }}
          />
          <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>
            (enviando como <strong style={{ color: 'rgba(255,255,255,0.5)' }}>{userName || roleLabel}</strong>)
          </Typography>
        </Box>

        <TextField
          fullWidth
          placeholder="Título (opcional)"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
          inputProps={{ maxLength: 120 }}
          sx={{
            mb: 1,
            '& .MuiOutlinedInput-root': {
              fontSize: 13, fontWeight: 600,
              '& fieldset': { borderColor: 'divider' },
              '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
              '&.Mui-focused fieldset': { borderColor: 'primary.main' },
            },
          }}
        />

        <TextField
          fullWidth
          multiline
          minRows={3}
          maxRows={8}
          placeholder="Descreva sua ideia ou sugestão de melhoria para o NEXUS…"
          value={texto}
          onChange={e => setTexto(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleEnviar(); }}
          inputProps={{ maxLength: 1000 }}
          sx={{
            '& .MuiOutlinedInput-root': {
              fontSize: 13,
              '& fieldset': { borderColor: 'divider' },
              '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
              '&.Mui-focused fieldset': { borderColor: 'primary.main' },
            },
          }}
        />

        {/* Category selector */}
        <Box sx={{ mt: 1.25, mb: 0.5 }}>
          <Typography sx={{ fontSize: 10, color: 'text.disabled', mb: '6px', textTransform: 'uppercase', letterSpacing: '.5px' }}>
            Categoria (opcional)
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
            {PAGE_CATEGORIES.map(c => {
              const selected = categoria === c.value;
              return (
                <Chip
                  key={c.value}
                  label={c.label}
                  size="small"
                  onClick={() => setCategoria(selected ? null : c.value)}
                  sx={{
                    fontSize: 10, height: 20, fontWeight: 600,
                    bgcolor: selected ? `${c.color}22` : 'transparent',
                    borderColor: selected ? c.color : 'divider',
                    color: selected ? c.color : 'text.disabled',
                    border: '1px solid',
                    transition: '.15s',
                    '&:hover': { borderColor: c.color, color: c.color },
                  }}
                />
              );
            })}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1.5 }}>
          <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>
            {texto.length > 0 ? `${texto.length}/1000` : 'Ctrl+Enter para enviar'}
          </Typography>
          <Button
            variant="contained"
            size="small"
            disabled={!texto.trim()}
            onClick={handleEnviar}
            startIcon={<SendRoundedIcon sx={{ fontSize: '15px !important' }} />}
            sx={{
              fontWeight: 700,
              fontSize: 12,
              bgcolor: enviado ? '#22c55e' : undefined,
              '&:hover': { bgcolor: enviado ? '#22c55e' : undefined },
              transition: 'background .3s',
            }}
          >
            {enviado ? 'Enviado!' : 'Enviar sugestão'}
          </Button>
        </Box>
      </Paper>

      {/* Filters */}
      {sugestoes.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1, alignItems: 'center' }}>
            <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px' }}>Função:</Typography>
            <Chip
              label={`Todas (${sugestoes.length})`}
              size="small"
              onClick={() => setFiltro('all')}
              sx={{
                fontSize: 11, fontWeight: 600,
                bgcolor: filtro === 'all' ? 'rgba(255,255,255,0.1)' : 'transparent',
                borderColor: filtro === 'all' ? 'rgba(255,255,255,0.25)' : 'divider',
                color: filtro === 'all' ? 'text.primary' : 'text.disabled',
                border: '1px solid',
              }}
            />
            {ROLES.filter(r => contagemPorRole(r.value) > 0).map(r => (
              <Chip
                key={r.value}
                label={`${r.label} (${contagemPorRole(r.value)})`}
                size="small"
                onClick={() => setFiltro(filtro === r.value ? 'all' : r.value)}
                sx={{
                  fontSize: 11, fontWeight: 600,
                  bgcolor: filtro === r.value ? `${ROLE_COLOR[r.value]}20` : 'transparent',
                  borderColor: filtro === r.value ? ROLE_COLOR[r.value] : 'divider',
                  color: filtro === r.value ? ROLE_COLOR[r.value] : 'text.disabled',
                  border: '1px solid',
                  '&:hover': { borderColor: ROLE_COLOR[r.value], color: ROLE_COLOR[r.value] },
                }}
              />
            ))}
          </Box>

          {usedCategories.length > 0 && (
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 11, color: 'text.disabled', mr: '2px' }}>Categoria:</Typography>
              <Chip
                label="Todas"
                size="small"
                onClick={() => setFiltroCategoria('all')}
                sx={{
                  fontSize: 11,
                  bgcolor: filtroCategoria === 'all' ? 'rgba(255,255,255,0.07)' : 'transparent',
                  borderColor: filtroCategoria === 'all' ? 'rgba(255,255,255,0.2)' : 'divider',
                  color: filtroCategoria === 'all' ? 'text.secondary' : 'text.disabled',
                  border: '1px solid',
                }}
              />
              {usedCategories.map(c => (
                <Chip
                  key={c.value}
                  label={c.label}
                  size="small"
                  onClick={() => setFiltroCategoria(filtroCategoria === c.value ? 'all' : c.value)}
                  sx={{
                    fontSize: 11, fontWeight: 600,
                    bgcolor: filtroCategoria === c.value ? `${c.color}20` : 'transparent',
                    borderColor: filtroCategoria === c.value ? c.color : 'divider',
                    color: filtroCategoria === c.value ? c.color : 'text.disabled',
                    border: '1px solid',
                    '&:hover': { borderColor: c.color, color: c.color },
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      )}

      {/* List */}
      {filtradas.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <TipsAndUpdatesRoundedIcon sx={{ fontSize: 36, color: 'text.disabled', mb: 1.5, opacity: 0.4 }} />
          <Typography sx={{ fontSize: 13, color: 'text.disabled' }}>
            {sugestoes.length === 0
              ? 'Nenhuma sugestão ainda. Seja o primeiro!'
              : 'Nenhuma sugestão para esse filtro.'}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {filtradas.map(s => {
            const rl = ROLES.find(r => r.value === s.role);
            const date = new Date(s.createdAt).toLocaleDateString('pt-BR', {
              day: '2-digit', month: 'short', year: 'numeric',
              hour: '2-digit', minute: '2-digit',
            });
            const catColor = s.categoria ? getCategoryColor(s.categoria) : null;
            const catLabel = s.categoria ? getCategoryLabel(s.categoria) : null;
            const inLista = listaIds.has(s.id);
            return (
              <Paper key={s.id} elevation={0} sx={{ p: '14px 16px', display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <Box
                  sx={{
                    mt: '3px', width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                    bgcolor: ROLE_COLOR[s.role],
                    boxShadow: `0 0 6px ${ROLE_COLOR[s.role]}66`,
                  }}
                />

                <Box sx={{ flex: 1, minWidth: 0 }}>
                  {s.title && (
                    <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'text.primary', mb: '4px' }}>
                      {s.title}
                    </Typography>
                  )}
                  <Typography sx={{ fontSize: 13, color: s.title ? 'text.secondary' : 'text.primary', lineHeight: 1.7, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {s.texto}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: '8px', flexWrap: 'wrap' }}>
                    <Chip
                      label={rl?.label ?? s.role}
                      size="small"
                      sx={{
                        fontSize: 10, height: 18,
                        bgcolor: `${ROLE_COLOR[s.role]}18`,
                        color: ROLE_COLOR[s.role],
                        border: `1px solid ${ROLE_COLOR[s.role]}44`,
                        fontWeight: 600,
                      }}
                    />
                    {catLabel && catColor && (
                      <Chip
                        label={catLabel}
                        size="small"
                        sx={{
                          fontSize: 10, height: 18,
                          bgcolor: `${catColor}18`,
                          color: catColor,
                          border: `1px solid ${catColor}44`,
                          fontWeight: 600,
                        }}
                      />
                    )}
                    {s.userName && (
                      <Typography sx={{ fontSize: 11, fontWeight: 600, color: 'text.secondary' }}>
                        {s.userName}
                      </Typography>
                    )}
                    <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>{date}</Typography>
                  </Box>
                </Box>

                {/* Bookmark — TODO: restringir ao ADM */}
                <Tooltip title={inLista ? 'Remover da lista de pendências' : 'Adicionar à lista de pendências'} placement="top">
                  <IconButton
                    size="small"
                    onClick={() => handleToggleLista(s)}
                    sx={{
                      color: inLista ? 'primary.main' : 'text.disabled',
                      '&:hover': { color: inLista ? '#e6b000' : 'rgba(255,255,255,0.6)' },
                      flexShrink: 0,
                    }}
                  >
                    {inLista
                      ? <BookmarkRoundedIcon sx={{ fontSize: 15 }} />
                      : <BookmarkBorderRoundedIcon sx={{ fontSize: 15 }} />
                    }
                  </IconButton>
                </Tooltip>

                <IconButton
                  size="small"
                  onClick={() => handleDelete(s.id)}
                  sx={{ color: 'text.disabled', '&:hover': { color: '#ef4444' }, flexShrink: 0 }}
                >
                  <DeleteRoundedIcon sx={{ fontSize: 15 }} />
                </IconButton>
              </Paper>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
