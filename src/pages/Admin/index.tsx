import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';

import { ROLES } from '../../components/Sidebar';
import type { Role } from '../../components/Sidebar';

// ─── Types ───────────────────────────────────────────────────────────────────

type TagColor = 'gold' | 'blue' | 'green';

interface PSlide {
  id: string;
  tag: string;
  tagColor: TagColor;
  title: string;
  body: string;
}

interface PData {
  title: string;
  date: string;
  slides: PSlide[];
  missaoTag: string;
  missaoTitle: string;
  missaoBody: string;
}

// ─── Storage ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'nexus_presentation_v1';

const DEFAULT_DATA: PData = {
  title: 'NEXUS — Atualização de Sistema',
  date: 'Junho 2026',
  slides: [
    {
      id: '1', tag: 'Novas Skills', tagColor: 'gold',
      title: 'Inteligência Pós-Reunião: duas Skills que fecham o ciclo',
      body: 'Duas novas habilidades automatizam o ciclo pós-reunião. A primeira converte a transcrição em bullet points organizados; a segunda lê esses pontos com o documento atual e diz exatamente a ação a tomar — inserir, substituir ou excluir. Qualquer definição de reunião vira instrução precisa para o documento, sem margem para interpretação.',
    },
    {
      id: '2', tag: 'Motor de Documentos', tagColor: 'gold',
      title: 'Gerador de Docs: Métodos de Autenticação integrado com precisão cirúrgica',
      body: 'O capítulo de Métodos de Autenticação — com formatação rica, JSONs, tabelas e exemplos — agora é extraído diretamente do template e reinjetado na posição exata. Foi resolvido um problema técnico sofisticado: o Word fragmenta internamente os marcadores no XML, causando falhas silenciosas. O motor detecta e reconstrói esses fragmentos, garantindo saída idêntica ao template original.',
    },
    {
      id: '3', tag: 'Stakeholder', tagColor: 'blue',
      title: 'Arenas acessando o sistema direto do banco de dados',
      body: 'O Arenas já está operando diretamente contra o banco de dados do NEXUS, visualizando os dados que lhe competem de forma autônoma. A integração está ativa e funcional. A validação ainda está em curso — a cobrança aguarda o aval definitivo.',
    },
    {
      id: '4', tag: 'Integração', tagColor: 'blue',
      title: 'Azure + Microsoft 365: o NEXUS entra no ecossistema corporativo',
      body: 'Com o apoio do Gomes, o NEXUS começa a se conectar ao Azure — a camada de IA da Microsoft integrada ao e-mail, Teams, Planner e calendário corporativo. Um leque enorme de automações se abre dentro das ferramentas que a equipe já usa no dia a dia.',
    },
    {
      id: '5', tag: 'Próximo Grande Passo', tagColor: 'gold',
      title: 'O Scrapper: construindo a Bíblia Suprema do conhecimento operacional',
      body: 'O próximo passo é o Scrapper — sistema que coleta e organiza o conhecimento real dos processos. O Oráculo passa a responder perguntas das equipes com profundidade genuína. Os dados alimentam a versão definitiva da Base de Conhecimento: insights, problemas comuns por processo (como picking), padrões operacionais e variantes por cliente.',
    },
    {
      id: '6', tag: 'Produtividade', tagColor: 'gold',
      title: 'Automação de Apontamento de Horas',
      body: 'Em desenvolvimento junto com o Gu: automação que elimina o processo manual de apontamento. Registros de tempo passam a acontecer de forma automática ou semi-automática, integrados ao fluxo natural de trabalho.',
    },
    {
      id: '7', tag: 'Visão de Futuro', tagColor: 'gold',
      title: 'Especialista Documentador 3.0 — quando o Scrapper estiver rodando',
      body: 'Com o Scrapper maduro e a Base de Conhecimento completa, o Especialista Documentador evolui para sua versão mais poderosa. Alimentado por dados reais e variantes de clientes, ele deixa de ser um gerador de documentos e passa a ser um especialista genuíno — capaz de antecipar inconsistências e gerar especificações com precisão inédita.',
    },
  ],
  missaoTag: 'Próxima Missão — Infraestrutura',
  missaoTitle: 'Igor e o servidor da Invent: o ecossistema precisa de uma casa',
  missaoBody: 'Para que o NEXUS funcione de forma plena e independente, o próximo passo institucional é instalar o sistema, o banco de dados e o modelo de IA no servidor da Invent. O Igor precisa ser alinhado agora — quanto antes ele entender o escopo, mais rápido a infraestrutura fica disponível e o NEXUS opera com total autonomia dentro da empresa.',
};

function loadPData(): PData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<PData>;
      return { ...DEFAULT_DATA, ...parsed };
    }
  } catch { /* ignore */ }
  return { ...DEFAULT_DATA, slides: DEFAULT_DATA.slides.map(s => ({ ...s })) };
}

function savePData(d: PData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
}

function genId() {
  return Math.random().toString(36).slice(2, 9);
}

// ─── Presentation Overlay ─────────────────────────────────────────────────────

function PresentationOverlay({ data, onClose }: { data: PData; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const tagColor = (c: TagColor) =>
    c === 'gold' ? '#C98A22' : c === 'blue' ? '#3E87CF' : '#2DB87A';

  const borderColor = (c: TagColor) =>
    c === 'blue' ? '#2A5E96' : c === 'green' ? '#1A4033' : '#263347';

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#0F1520',
      zIndex: 9999,
      overflowY: 'auto',
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* ESC button */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: 16, right: 20,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 6, color: '#7A96B0',
          cursor: 'pointer', padding: '6px 14px',
          fontSize: 11.5, zIndex: 10000,
          letterSpacing: '0.06em',
        }}
      >
        ESC · Fechar
      </button>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '52px 36px 96px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 28, borderBottom: '1px solid #263347', marginBottom: 44 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C98A22' }}>NEXUS</div>
            <div style={{ fontSize: 12, color: '#7A96B0', letterSpacing: '0.04em', marginTop: 4 }}>Sistema de Inteligência Documental</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: 11.5, color: '#3E5268', letterSpacing: '0.06em', lineHeight: 1.8 }}>
            {data.title}<br />{data.date}
          </div>
        </div>

        {/* Lead */}
        <div style={{ borderLeft: '3px solid #C98A22', padding: '14px 18px', background: 'rgba(201,138,34,0.06)', borderRadius: '0 4px 4px 0', fontFamily: "Georgia, Cambria, serif", fontSize: 14, color: '#7A96B0', lineHeight: 1.8, marginBottom: 52 }}>
          Resumo das evoluções implementadas. Cada tópico cobre uma entrega ou avanço concreto — do motor de documentos às novas integrações e ao roadmap em andamento.
        </div>

        {/* Slides */}
        {data.slides.map((slide, i) => (
          <div key={slide.id} style={{ padding: '30px 0 30px 24px', borderLeft: `2px solid ${borderColor(slide.tagColor)}`, marginBottom: 4 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', color: '#3E5268', marginBottom: 4 }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: tagColor(slide.tagColor), marginBottom: 8 }}>
              {slide.tag}
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: '#DCE8F4', marginBottom: 14, letterSpacing: '-0.01em' }}>
              {slide.title}
            </h2>
            <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: 14.5, lineHeight: 1.82, color: '#A8BDD4', maxWidth: 620, margin: 0 }}>
              {slide.body}
            </p>
          </div>
        ))}

        {/* Missão callout */}
        <div style={{ marginTop: 48, background: 'linear-gradient(135deg, #0E1E18 0%, #0D1A22 100%)', border: '1px solid #1E3828', borderLeft: '4px solid #2DB87A', borderRadius: '0 8px 8px 0', padding: 28 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#2DB87A', marginBottom: 10 }}>
            {data.missaoTag || 'Próxima Missão'}
          </div>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#DCE8F4', marginBottom: 12, lineHeight: 1.3 }}>
            {data.missaoTitle}
          </h2>
          <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: 14, lineHeight: 1.85, color: '#7AADA0', margin: 0 }}>
            {data.missaoBody}
          </p>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 72, paddingTop: 24, borderTop: '1px solid #263347', fontSize: 11, color: '#3E5268', display: 'flex', justifyContent: 'space-between' }}>
          <span>NEXUS · Sistema de Inteligência Documental</span>
          <span>{data.date}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Slide Edit Card ──────────────────────────────────────────────────────────

const TAG_COLOR_OPTIONS: { value: TagColor; label: string; color: string }[] = [
  { value: 'gold',  label: 'Dourado',  color: '#C98A22' },
  { value: 'blue',  label: 'Azul',     color: '#3E87CF' },
  { value: 'green', label: 'Verde',    color: '#2DB87A' },
];

function SlideCard({
  slide, index, total,
  onUpdate, onDelete, onMoveUp, onMoveDown,
}: {
  slide: PSlide; index: number; total: number;
  onUpdate: (s: PSlide) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<PSlide>(slide);

  const handleSave = () => {
    onUpdate(draft);
    setOpen(false);
  };

  const accentColor = TAG_COLOR_OPTIONS.find(o => o.value === slide.tagColor)?.color ?? '#C98A22';

  return (
    <Paper elevation={0} sx={{ border: '1px solid', borderColor: open ? 'primary.main' : 'divider', borderLeft: `3px solid ${accentColor}`, transition: 'border-color .15s' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: '10px 12px', gap: 1 }}>
        <Typography sx={{ fontSize: 10, color: 'text.disabled', minWidth: 22, fontFamily: 'monospace', fontWeight: 600 }}>
          {String(index + 1).padStart(2, '0')}
        </Typography>
        <Chip
          label={slide.tag || '—'}
          size="small"
          sx={{ fontSize: 10, height: 18, bgcolor: `${accentColor}18`, color: accentColor, border: `1px solid ${accentColor}44`, fontWeight: 600 }}
        />
        <Typography sx={{ fontSize: 13, fontWeight: 600, color: 'text.primary', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {slide.title || <span style={{ color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>Sem título</span>}
        </Typography>
        <Box sx={{ display: 'flex', gap: '2px', flexShrink: 0 }}>
          <Tooltip title="Mover para cima"><span>
            <IconButton size="small" disabled={index === 0} onClick={onMoveUp} sx={{ color: 'text.disabled', '&:hover': { color: 'text.primary' }, p: '4px' }}>
              <ArrowUpwardRoundedIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </span></Tooltip>
          <Tooltip title="Mover para baixo"><span>
            <IconButton size="small" disabled={index === total - 1} onClick={onMoveDown} sx={{ color: 'text.disabled', '&:hover': { color: 'text.primary' }, p: '4px' }}>
              <ArrowDownwardRoundedIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </span></Tooltip>
          <Tooltip title={open ? 'Fechar' : 'Editar'}>
            <IconButton size="small" onClick={() => { setDraft({ ...slide }); setOpen(o => !o); }} sx={{ color: open ? 'primary.main' : 'text.disabled', '&:hover': { color: 'text.primary' }, p: '4px' }}>
              <EditRoundedIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Remover slide">
            <IconButton size="small" onClick={onDelete} sx={{ color: 'text.disabled', '&:hover': { color: '#ef4444' }, p: '4px' }}>
              <DeleteRoundedIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {open && (
        <Box sx={{ p: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              label="Tag" size="small" fullWidth
              value={draft.tag}
              onChange={e => setDraft(d => ({ ...d, tag: e.target.value }))}
              sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
            />
            <Select
              value={draft.tagColor} size="small"
              onChange={e => setDraft(d => ({ ...d, tagColor: e.target.value as TagColor }))}
              sx={{ fontSize: 13, minWidth: 110 }}
            >
              {TAG_COLOR_OPTIONS.map(o => (
                <MenuItem key={o.value} value={o.value} sx={{ fontSize: 12 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: o.color }} />
                    {o.label}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </Box>
          <TextField
            label="Título" size="small" fullWidth
            value={draft.title}
            onChange={e => setDraft(d => ({ ...d, title: e.target.value }))}
            sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
          />
          <TextField
            label="Texto" size="small" fullWidth multiline minRows={3}
            value={draft.body}
            onChange={e => setDraft(d => ({ ...d, body: e.target.value }))}
            sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
          />
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
            <Button size="small" variant="outlined" onClick={() => setOpen(false)} sx={{ fontSize: 12, textTransform: 'none' }}>Cancelar</Button>
            <Button size="small" variant="contained" onClick={handleSave} startIcon={<SaveRoundedIcon sx={{ fontSize: 14 }} />} sx={{ fontSize: 12, textTransform: 'none' }}>Salvar</Button>
          </Box>
        </Box>
      )}
    </Paper>
  );
}

// ─── AdminPage ────────────────────────────────────────────────────────────────

interface AdminPageProps {
  role: Role;
  onRoleChange: (r: Role) => void;
}

export function AdminPage({ role, onRoleChange }: AdminPageProps) {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState<PData>(loadPData);
  const [presenting, setPresenting] = useState(false);
  const [dirty, setDirty] = useState(false);

  const update = useCallback((updater: (d: PData) => PData) => {
    setData(d => { const next = updater(d); return next; });
    setDirty(true);
  }, []);

  const handleSave = () => {
    savePData(data);
    setDirty(false);
  };

  // ── Slide operations
  const addSlide = () => {
    update(d => ({
      ...d,
      slides: [...d.slides, { id: genId(), tag: 'Nova Feature', tagColor: 'gold', title: '', body: '' }],
    }));
  };

  const updateSlide = (id: string, s: PSlide) => {
    update(d => ({ ...d, slides: d.slides.map(x => x.id === id ? s : x) }));
  };

  const deleteSlide = (id: string) => {
    update(d => ({ ...d, slides: d.slides.filter(x => x.id !== id) }));
  };

  const moveSlide = (index: number, dir: -1 | 1) => {
    update(d => {
      const arr = [...d.slides];
      const target = index + dir;
      if (target < 0 || target >= arr.length) return d;
      [arr[index], arr[target]] = [arr[target], arr[index]];
      return { ...d, slides: arr };
    });
  };

  const ROLE_COLOR: Record<Role, string> = {
    gestao: '#6366f1', engenharia: '#0ea5e9', documentacao: '#8b5cf6',
    pmo: '#ffc500', desenvolvimento: '#22c55e', eletrica: '#f59e0b', adm: '#ef4444',
  };

  return (
    <>
      {presenting && <PresentationOverlay data={data} onClose={() => setPresenting(false)} />}

      <Box className="page-enter" sx={{ p: 3, flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: '4px', flexWrap: 'wrap', gap: 1 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: '4px' }}>
              <Typography sx={{ fontSize: 20, fontWeight: 800, color: 'text.primary', letterSpacing: '-.3px' }}>
                Administrador
              </Typography>
              <Chip label="ADM" size="small" sx={{ fontSize: 10, fontWeight: 700, bgcolor: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.25)', height: 18 }} />
            </Box>
            <Typography sx={{ fontSize: 13, color: 'text.disabled' }}>
              Acesso exclusivo · raphael.caveagna@invent-corp.com
            </Typography>
          </Box>
          {dirty && (
            <Button size="small" variant="contained" onClick={handleSave} startIcon={<SaveRoundedIcon sx={{ fontSize: 14 }} />} sx={{ fontSize: 12, textTransform: 'none', fontWeight: 700 }}>
              Salvar alterações
            </Button>
          )}
        </Box>

        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{
            borderBottom: '1px solid', borderColor: 'divider', mb: 3, mt: 2.5,
            '& .MuiTab-root': { fontSize: 12, fontWeight: 600, textTransform: 'none', minHeight: 40, px: 2 },
            '& .Mui-selected': { color: 'primary.main' },
            '& .MuiTabs-indicator': { bgcolor: 'primary.main' },
          }}
        >
          <Tab label="Apresentação" icon={<SlideshowRoundedIcon sx={{ fontSize: 16 }} />} iconPosition="start" />
          <Tab label="Papéis" />
        </Tabs>

        {/* ── Tab 0: Apresentação ── */}
        {tab === 0 && (
          <Box>
            {/* Header fields */}
            <Box sx={{ display: 'flex', gap: 1.5, mb: 3, flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <TextField
                label="Título da apresentação" size="small" sx={{ flex: 2, minWidth: 220, '& .MuiInputBase-root': { fontSize: 13 } }}
                value={data.title}
                onChange={e => update(d => ({ ...d, title: e.target.value }))}
              />
              <TextField
                label="Data / Contexto" size="small" sx={{ width: 160, '& .MuiInputBase-root': { fontSize: 13 } }}
                value={data.date}
                onChange={e => update(d => ({ ...d, date: e.target.value }))}
                placeholder="ex: Julho 2026"
              />
              <Button
                variant="contained" size="small"
                startIcon={<SlideshowRoundedIcon sx={{ fontSize: 16 }} />}
                onClick={() => setPresenting(true)}
                sx={{ fontSize: 13, fontWeight: 700, textTransform: 'none', px: 2.5, height: 40, bgcolor: '#C98A22', '&:hover': { bgcolor: '#B07718' }, flexShrink: 0 }}
              >
                Modo Apresentação
              </Button>
            </Box>

            {/* Slides */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
              <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Tópicos · {data.slides.length}
              </Typography>
              <Button size="small" startIcon={<AddRoundedIcon sx={{ fontSize: 14 }} />} onClick={addSlide} sx={{ fontSize: 12, textTransform: 'none', color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                Novo tópico
              </Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', mb: 3 }}>
              {data.slides.map((slide, i) => (
                <SlideCard
                  key={slide.id}
                  slide={slide}
                  index={i}
                  total={data.slides.length}
                  onUpdate={s => updateSlide(slide.id, s)}
                  onDelete={() => deleteSlide(slide.id)}
                  onMoveUp={() => moveSlide(i, -1)}
                  onMoveDown={() => moveSlide(i, 1)}
                />
              ))}
            </Box>

            {/* Próxima Missão */}
            <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 3, mt: 1 }}>
              <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#2DB87A', textTransform: 'uppercase', letterSpacing: '0.08em', mb: 1.5 }}>
                Próxima Missão (callout verde)
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 2, border: '1px solid rgba(45,184,122,0.2)', borderLeft: '3px solid #2DB87A', borderRadius: '0 6px 6px 0', bgcolor: 'rgba(45,184,122,0.04)' }}>
                <TextField
                  label="Label da missão" size="small" fullWidth
                  value={data.missaoTag}
                  onChange={e => update(d => ({ ...d, missaoTag: e.target.value }))}
                  sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
                  placeholder="ex: Próxima Missão — Infraestrutura"
                />
                <TextField
                  label="Título" size="small" fullWidth
                  value={data.missaoTitle}
                  onChange={e => update(d => ({ ...d, missaoTitle: e.target.value }))}
                  sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
                />
                <TextField
                  label="Texto" size="small" fullWidth multiline minRows={3}
                  value={data.missaoBody}
                  onChange={e => update(d => ({ ...d, missaoBody: e.target.value }))}
                  sx={{ '& .MuiInputBase-root': { fontSize: 13 } }}
                />
              </Box>
            </Box>
          </Box>
        )}

        {/* ── Tab 1: Papéis ── */}
        {tab === 1 && (
          <Box sx={{ maxWidth: 480 }}>
            <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>
              Papel atual da sessão
            </Typography>
            <Typography sx={{ fontSize: 12, color: 'text.disabled', mb: 2.5 }}>
              Apenas o administrador pode transitar entre funções. Útil para debugar a plataforma e visualizar o sistema como cada perfil.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {ROLES.map(r => {
                const active = role === r.value;
                return (
                  <Box
                    key={r.value}
                    component="button"
                    onClick={() => onRoleChange(r.value)}
                    sx={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: 1.5,
                      p: '10px 14px', border: '1px solid', borderRadius: 1.5, cursor: 'pointer',
                      bgcolor: active ? `${ROLE_COLOR[r.value]}12` : 'transparent',
                      borderColor: active ? ROLE_COLOR[r.value] : 'divider',
                      transition: '.15s',
                      '&:hover': { borderColor: ROLE_COLOR[r.value], bgcolor: `${ROLE_COLOR[r.value]}0A` },
                    }}
                  >
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: ROLE_COLOR[r.value], flexShrink: 0 }} />
                    <Typography sx={{ fontSize: 13, fontWeight: active ? 700 : 500, color: active ? ROLE_COLOR[r.value] : 'text.secondary', flex: 1, textAlign: 'left' }}>
                      {r.label}
                    </Typography>
                    {active && (
                      <Chip label="ativo" size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${ROLE_COLOR[r.value]}20`, color: ROLE_COLOR[r.value], border: `1px solid ${ROLE_COLOR[r.value]}44`, fontWeight: 700 }} />
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
