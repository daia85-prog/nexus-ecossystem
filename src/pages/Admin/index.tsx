import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
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
import { FeaturesAdminTab, ROLE_COLOR } from '../ConfigPage';

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

// ─── Corpus Knowledge Map ────────────────────────────────────────────────────

interface TopicCard {
  n: number;
  slug: string;
  desc: string;
  approx?: boolean;
  badge?: 'NOVO' | 'SPLIT';
  wide?: boolean;
  ghost?: boolean;
}

interface BlockSub {
  label: string;
  topics: TopicCard[];
}

interface CorpusBlock {
  seq: string;
  label: string;
  total: string;
  sys?: boolean;
  topics?: TopicCard[];
  sub?: BlockSub[];
}

const CORPUS_UPDATED = '23 Jun 2026';
const CORPUS_TOTAL   = 6626;
const CORPUS_ROUTED  = 5200;

const CORPUS_BLOCKS: CorpusBlock[] = [
  {
    seq: '01', label: 'Entrada', total: '~910',
    topics: [
      { n: 348, slug: 'order-start',           desc: 'ondas, priorização, cancelamentos, cargas do dia' },
      { n: 160, slug: 'cubagem',                desc: 'dimensionamento, peso, matrizes de fragilidade' },
      { n: 402, slug: 'recebimento-armazenagem',desc: 'portais, crossdocking, transelevadores (ASRS), putaway' },
    ],
  },
  {
    seq: '02', label: 'Separação', total: '~418',
    sub: [
      {
        label: 'Por tipo de mercadoria',
        topics: [
          { n: 120, slug: 'picking-cart',      desc: 'picking fracionado via cart+tablet — processo padrão', approx: true },
          { n: 87,  slug: 'picking-pbl',       desc: 'picking via flowrack + LEDs (Pick by Light)', badge: 'NOVO' },
          { n: 50,  slug: 'picking-fullcase',  desc: 'caixas fechadas, picking tunnel, fullcase perigoso', approx: true, badge: 'SPLIT' },
          { n: 20,  slug: 'picking-pallet',    desc: 'pallets inteiros, pallet direto, exceção pallet', approx: true, badge: 'SPLIT' },
        ],
      },
      {
        label: 'Pós-picking e exceções',
        topics: [
          { n: 72, slug: 'put-to-wall',  desc: 'mural de consolidação, posições por pedido', badge: 'NOVO' },
          { n: 69, slug: 'shortpicking', desc: 'ruptura de estoque, corte, divergência' },
        ],
      },
    ],
  },
  {
    seq: '03', label: 'Conferência', total: '~200',
    topics: [
      { n: 105, slug: 'conferencia',        desc: 'scanner automático, auditoria, checkout, peso dinâmico', approx: true },
      { n: 20,  slug: 'conferencia-manual', desc: 'clientes especiais, Kit SKU, laudo manual, sem scanner', approx: true, badge: 'SPLIT' },
      { n: 83,  slug: 'packing',            desc: 'embalagem, fechamento de caixa, plástico bolha' },
    ],
  },
  {
    seq: '04', label: 'Expedição', total: '~1.249',
    topics: [
      { n: 790, slug: 'sorter',       desc: 'classificador automático, PLC, câmeras, balança de linha' },
      { n: 172, slug: 'ptl-alocacao', desc: 'put-to-light, alocação por luz, put-to-pallet' },
      { n: 70,  slug: 'ptm',          desc: 'put-to-monitor, supervisório, alocação por tela', badge: 'NOVO' },
      { n: 217, slug: 'etiquetas',    desc: 'SSCC, impressão, etiqueta de pallet e produto' },
    ],
  },
  {
    seq: '05', label: 'Estoque', total: '~184',
    topics: [
      { n: 124, slug: 'reabastecimento', desc: 'abastecimento de posições, replenishment, gatilhos' },
      { n: 60,  slug: 'inventario',      desc: 'contagem rotativa, rastreabilidade, FEFO, auditoria' },
    ],
  },
  {
    seq: '06', label: 'Integração', total: '~1.238', sys: true,
    topics: [
      { n: 1238, slug: 'integracao', wide: true, desc: 'WMS ↔ WCS · SAP WM (WMTORD / TOCO / CATO) · APIs REST · JSON, XML, YAML · tabelas compartilhadas · mensageria EWM / ERP' },
    ],
  },
  {
    seq: '07', label: 'Sistema', total: '~968', sys: true,
    topics: [
      { n: 470, slug: 'cadastros-acessos',     desc: 'login, SSO, usuários, grupos, níveis de acesso, token, master data' },
      { n: 498, slug: 'dashboards-relatorios', desc: 'KPIs, produtividade, relatórios, telas de monitoramento' },
    ],
  },
];

const CORPUS_INBOX: TopicCard[] = [
  { n: 7,   slug: 'infra-WCS',  desc: 'hardware físico WCS (AMR, sinaleiros, etc.) — revisar se algum tem conteúdo de processo', ghost: true },
  { n: 168, slug: 'sem-match',  desc: 'conteúdo sem similaridade semântica confiável — revisão manual pendente' },
];

const CORPUS_CSS = `
@keyframes corpus-convey {
  0%   { top: -8px; opacity: 0; }
  4%   { opacity: 1; }
  88%  { opacity: 0.7; }
  100% { top: calc(100% + 8px); opacity: 0; }
}
.corpus-dot { animation: corpus-convey 3.6s linear infinite; }
.corpus-dot:nth-child(2) { animation-delay: -1.2s; }
.corpus-dot:nth-child(3) { animation-delay: -2.4s; }
`;

function CorpusTopicCard({ t }: { t: TopicCard }) {
  const badgeColor  = t.badge === 'NOVO' ? '#F59D00' : '#22C55E';
  const badgeBg     = t.badge === 'NOVO' ? 'rgba(245,157,0,0.1)' : 'rgba(34,197,94,0.1)';
  const badgeBorder = t.badge === 'NOVO' ? 'rgba(245,157,0,0.25)' : 'rgba(34,197,94,0.25)';
  const cardBorder  = t.badge === 'SPLIT' ? 'rgba(34,197,94,0.25)' :
                      t.badge === 'NOVO'  ? 'rgba(245,157,0,0.28)' : '#1F3550';
  const cardBg      = t.badge === 'SPLIT' ? 'linear-gradient(135deg,#152233 0%,rgba(34,197,94,0.04) 100%)' :
                      t.badge === 'NOVO'  ? 'linear-gradient(135deg,#152233 0%,rgba(245,157,0,0.04) 100%)' :
                      '#152233';
  const countColor  = t.ghost ? '#2E4A68' : t.approx ? '#A36A00' : '#E2EBF5';
  const slugColor   = t.ghost ? '#3A5A70' : '#4A9EFF';

  return (
    <div style={{
      background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: 5,
      padding: '13px 15px', flex: t.wide ? '1 1 280px' : '1 1 130px',
      maxWidth: t.wide ? 460 : 210, minWidth: 115, position: 'relative',
    }}>
      {t.badge && (
        <span style={{
          position: 'absolute', top: 7, right: 7,
          fontSize: 7.5, fontWeight: 800, letterSpacing: '0.18em',
          color: badgeColor, background: badgeBg, border: `1px solid ${badgeBorder}`,
          borderRadius: 2, padding: '1px 5px',
        }}>{t.badge}</span>
      )}
      <div style={{
        fontFamily: "ui-monospace,'Cascadia Code','JetBrains Mono',monospace",
        fontSize: 28, fontWeight: 700, letterSpacing: '-0.04em',
        lineHeight: 1, color: countColor, marginBottom: 5,
      }}>
        {t.approx ? '~' : ''}{t.n.toLocaleString('pt-BR')}
      </div>
      <div style={{
        fontFamily: 'ui-monospace,monospace', fontSize: 10.5, fontWeight: 700,
        color: slugColor, marginBottom: 5, letterSpacing: '0.03em',
      }}>{t.slug}</div>
      <div style={{ fontSize: 11, color: '#5A7A95', lineHeight: 1.45 }}>{t.desc}</div>
    </div>
  );
}

function CorpusKnowledgeTab() {
  const coverage = Math.round((CORPUS_ROUTED / CORPUS_TOTAL) * 100);

  return (
    <div style={{
      background: '#0D1B2A', borderRadius: 8, overflow: 'hidden',
      border: '1px solid #1F3550',
      fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif",
    }}>
      <style>{CORPUS_CSS}</style>

      {/* ── Hero Stats ── */}
      <div style={{ padding: '28px 28px 24px 60px', borderBottom: '1px solid #1F3550', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: '#F59D00' }} />

        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#F59D00', marginBottom: 8 }}>
          Invent Smart · Nexus WCS · {CORPUS_UPDATED}
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#E2EBF5', lineHeight: 1.1, marginBottom: 20 }}>
          Corpus<span style={{ color: '#F59D00' }}>-</span>Conhecimento{' '}
          <span style={{ color: '#A3BACF', fontWeight: 400 }}>WMS / WCS</span>
        </div>

        {/* Big numbers */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 32px', marginBottom: 20 }}>
          {([
            { n: CORPUS_TOTAL.toLocaleString('pt-BR'), label: 'seções mineradas',    color: '#E2EBF5' },
            { n: `~${CORPUS_ROUTED.toLocaleString('pt-BR')}`, label: 'roteadas em tópicos', color: '#F59D00', note: `${coverage}% cobertura` },
            { n: '21 tópicos',  label: '7 blocos temáticos',  color: '#4A9EFF' },
            { n: '175',         label: 'em quarentena',        color: '#E2EBF5' },
            { n: '757',         label: 'boilerplate descartado', color: '#5A7A95' },
          ] as { n: string; label: string; color: string; note?: string }[]).map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <div style={{
                fontFamily: "ui-monospace,'Cascadia Code','JetBrains Mono',monospace",
                fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: s.color,
              }}>{s.n}</div>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5A7A95' }}>
                {s.label}
              </div>
              {s.note && (
                <div style={{ fontSize: 9, color: '#F59D00', fontWeight: 700, letterSpacing: '0.08em' }}>{s.note}</div>
              )}
            </div>
          ))}
        </div>

        {/* Coverage bar */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 9.5, color: '#5A7A95', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
              Cobertura do corpus
            </span>
            <span style={{ fontSize: 9.5, color: '#F59D00', fontWeight: 700, fontFamily: 'monospace' }}>
              {coverage}% · {CORPUS_ROUTED.toLocaleString('pt-BR')} / {CORPUS_TOTAL.toLocaleString('pt-BR')} seções
            </span>
          </div>
          <div style={{ height: 5, background: '#1F3550', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: `${coverage}%`,
              background: 'linear-gradient(90deg,#F59D00 0%,#4A9EFF 100%)',
              borderRadius: 3,
            }} />
          </div>
        </div>
      </div>

      {/* ── Blocks ── */}
      <div style={{ position: 'relative', padding: '0 28px 28px 60px' }}>
        {/* Animated left track */}
        <div style={{
          position: 'absolute', left: 28, top: 0, bottom: 40, width: 2, overflow: 'hidden',
          background: 'linear-gradient(to bottom,#F59D00 0%,#A36A00 55%,#2E4A68 85%,transparent 100%)',
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} className="corpus-dot" style={{
              position: 'absolute', left: '50%', transform: 'translateX(-50%)',
              width: 7, height: 7, borderRadius: '50%',
              background: '#F59D00', boxShadow: '0 0 8px 3px rgba(245,157,0,0.55)',
            }} />
          ))}
        </div>

        {CORPUS_BLOCKS.map(block => (
          <div key={block.seq} style={{ paddingTop: 24, paddingBottom: 4 }}>
            {/* Block header */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: 'ui-monospace,monospace', fontSize: 10, fontWeight: 700,
                color: block.sys ? '#4A9EFF' : '#F59D00', letterSpacing: '0.1em',
                border: `1px solid ${block.sys ? 'rgba(74,158,255,0.4)' : '#A36A00'}`,
                borderRadius: 3, padding: '1px 6px', lineHeight: 1.6,
              }}>{block.seq}</span>
              <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E2EBF5' }}>
                {block.label}
              </span>
              <span style={{ marginLeft: 'auto', fontFamily: 'ui-monospace,monospace', fontSize: 11, color: '#5A7A95' }}>
                {block.total} seções
              </span>
            </div>
            <div style={{ height: 1, background: '#1F3550', marginBottom: 12 }} />

            {block.sub ? block.sub.map((sub, si) => (
              <div key={si}>
                <div style={{
                  fontSize: 9.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: '#5A7A95', margin: si > 0 ? '14px 0 8px' : '0 0 8px',
                  paddingBottom: 4, borderBottom: '1px dashed #1F3550',
                }}>{sub.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                  {sub.topics.map((t, ti) => <CorpusTopicCard key={ti} t={t} />)}
                </div>
              </div>
            )) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                {block.topics?.map((t, ti) => <CorpusTopicCard key={ti} t={t} />)}
              </div>
            )}
          </div>
        ))}

        {/* ── INBOX ── */}
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px dashed #1F3550' }}>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#5A7A95', marginBottom: 12,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            Quarentena — INBOX
            <span style={{ fontFamily: 'ui-monospace,monospace', letterSpacing: 0, color: '#2E4A68' }}>
              175 seções
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
            {CORPUS_INBOX.map((t, i) => <CorpusTopicCard key={i} t={t} />)}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center',
        padding: '14px 28px', borderTop: '1px solid #1F3550',
        background: 'rgba(255,255,255,0.015)',
      }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F59D00', marginBottom: 3 }}>
            Próxima fase
          </div>
          <div style={{ fontSize: 12, color: '#5A7A95' }}>
            Geração de <strong style={{ color: '#E2EBF5' }}>DOSSIE</strong> + insights por tópico ·{' '}
            modelo <strong style={{ color: '#E2EBF5' }}>Claude Opus</strong>
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          {([
            { badge: 'NOVO',  label: 'novo MD',      color: '#F59D00', bg: 'rgba(245,157,0,0.1)',   border: 'rgba(245,157,0,0.25)' },
            { badge: 'SPLIT', label: 'desmembrado',  color: '#22C55E', bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.25)' },
          ] as { badge: string; label: string; color: string; bg: string; border: string }[]).map(l => (
            <div key={l.badge} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: '#5A7A95' }}>
              <span style={{
                fontSize: 7.5, fontWeight: 800, letterSpacing: '0.15em', borderRadius: 2, padding: '1px 5px',
                color: l.color, background: l.bg, border: `1px solid ${l.border}`,
              }}>{l.badge}</span>
              {l.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Backlog ──────────────────────────────────────────────────────────────────

type BStatus = 'done' | 'pending' | 'unclear';
type BPriority = 'high' | 'medium' | 'low';

interface BItem {
  id: string;
  desc: string;
  priority: BPriority;
  status: BStatus;
  notes?: string;
}

interface BPhase {
  id: string;
  label: string;
  sub: string;
  color: string;
  items: BItem[];
}

type BItemExt = BItem & { phaseId: string; phaseColor: string };

const BSTATUS_META: Record<BStatus, { label: string; color: string; bg: string }> = {
  done:    { label: 'Entregue',   color: '#22c55e', bg: 'rgba(34,197,94,0.1)'  },
  pending: { label: 'Pendente',   color: '#5A7A95', bg: 'rgba(90,122,149,0.1)' },
  unclear: { label: 'Aguardando', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
};

const BPRIO_META: Record<BPriority, { label: string; color: string }> = {
  high:   { label: '🔴 Alta',  color: '#ef4444' },
  medium: { label: '🟡 Média', color: '#f59e0b' },
  low:    { label: '🟢 Baixa', color: '#22c55e' },
};

const BACKLOG_PHASES: BPhase[] = [
  {
    id: 'F1', label: 'Fase 1 — Curto prazo', sub: 'Sem backend — melhorias no app atual com localStorage', color: '#22c55e',
    items: [
      { id: 'F1-01', desc: 'Nome do cliente e projeto aparecer preenchido no header do kickoff', priority: 'high', status: 'done', notes: 'Strip com cliente + codinome no topo de cada seção; pre-fill automático ao abrir' },
      { id: 'F1-02', desc: 'Campo "Go-Live" nas Infos Gerais do projeto', priority: 'high', status: 'done', notes: 'Campo g_golive com máscara de data' },
      { id: 'F1-03', desc: 'Campo "Layout do Projeto Semelhante ao:" nas Infos Gerais', priority: 'medium', status: 'done', notes: 'Campo g_layout_ref adicionado após GoLive' },
      { id: 'F1-04', desc: 'Retirar validação numérica dos campos de quantidade — aceitar texto livre', priority: 'high', status: 'done' },
      { id: 'F1-05', desc: 'IA no kickoff não deve ser pergunta opcional', priority: 'high', status: 'done', notes: 'st11 obrigatório dentro do Sorter' },
      { id: 'F1-06', desc: 'Recirculação e IA no Sorter não devem ser perguntas opcionais', priority: 'medium', status: 'done' },
      { id: 'F1-07', desc: 'Remover seção Conferência inteira do kickoff', priority: 'high', status: 'done' },
      { id: 'F1-08', desc: 'Dependências entre funcionalidades: se tem IA → sempre tem TV e IVT/etiqueta', priority: 'medium', status: 'done', notes: 'Trigger laranja se IA=Sim e Etiquetas=Não' },
      { id: 'F1-09', desc: 'PTM/IA: gerar campos de TV da IA ou TV do PTM e quantidade', priority: 'medium', status: 'done' },
      { id: 'F1-10', desc: 'Revisar campos fixos padrão: torná-los invisíveis na UI mas manter no JSON', priority: 'medium', status: 'unclear', notes: 'Aguardando definição — quais campos especificamente?' },
      { id: 'F1-11', desc: 'Integração mover para o início do formulário', priority: 'medium', status: 'done', notes: 'Seção in movida para Phase 0, antes de Order Start' },
      { id: 'F1-12', desc: 'Notas rápidas (bloco de texto livre) visível no lado esquerdo do kickoff', priority: 'medium', status: 'done', notes: 'Scratchpad no painel esquerdo, auto-save no projeto' },
      { id: 'F1-13', desc: 'Conta ADM: easter egg — 10 cliques no logo NEXUS + Y para acessar', priority: 'low', status: 'done' },
      { id: 'F1-14', desc: 'KPIs linkados e visíveis na seção Administração do Config', priority: 'medium', status: 'done' },
      { id: 'F1-15', desc: 'ADM pode editar os valores de KPI de cada funcionalidade no painel Config', priority: 'medium', status: 'done' },
      { id: 'F1-16', desc: 'Separar "Nome do Projeto" (codinome) de "Nome do Cliente" como campos distintos', priority: 'high', status: 'done' },
      { id: 'F1-17', desc: 'Texto com "definir" em qualquer campo → tratado como [A DEFINIR]', priority: 'medium', status: 'done', notes: 'isADefinir() detecta campos com "definir" em texto livre' },
      { id: 'F1-18', desc: 'Versionamento de input.json por projeto: accordion no Overview, baixar/excluir/gerar por versão', priority: 'high', status: 'done', notes: 'Visível só para papel documentacao; confirmação "ALERTA, TEM CERTEZA?"' },
    ],
  },
  {
    id: 'F2', label: 'Fase 2 — Médio prazo', sub: 'Requer backend Supabase + autenticação real + integrações externas', color: '#3E87CF',
    items: [
      { id: 'F2-01', desc: 'Login automático se já autenticado naquele navegador (session persistente)', priority: 'high', status: 'pending', notes: 'Supabase Auth + localStorage token' },
      { id: 'F2-02', desc: 'Registro via código enviado por e-mail (magic link / OTP)', priority: 'high', status: 'pending', notes: 'Login não precisa de código, só o registro' },
      { id: 'F2-03', desc: 'Upload de documentos no projeto: Layout Mecânico, Elétrico, Docs aprovados', priority: 'high', status: 'pending', notes: 'Supabase Storage; vincular ao projeto' },
      { id: 'F2-04', desc: 'Link do SharePoint por projeto (campo + abertura direta)', priority: 'medium', status: 'done', notes: 'Implementado em localStorage — campo de URL no Overview com botão "Abrir no SharePoint"' },
      { id: 'F2-05', desc: 'Último Layout Aprovado e Último Documento Aprovado por projeto', priority: 'medium', status: 'pending', notes: 'Requer banco + upload' },
      { id: 'F2-06', desc: 'Apontamento de Horas: horário inteligente, associação de cliente, export Excel', priority: 'high', status: 'pending', notes: 'Sub-aba já existe como Coming Soon no módulo Documentação' },
      { id: 'F2-07', desc: 'Aba de Relatório — visualizar lacunas do kickoff e taxa de completude por projeto', priority: 'medium', status: 'pending', notes: 'Ex: campos sem preenchimento, projetos com mais TBDs, seções com menor completude' },
      { id: 'F2-08', desc: 'Alerta de passagem de bastão entre etapas (Kickoff→Documentação→Implantação→Pós-Vendas)', priority: 'medium', status: 'pending', notes: 'Notificação automática com pendências críticas em cada transição; requer backend' },
      { id: 'F2-09', desc: 'Dividir perguntas do kickoff: GESTOR vs OPERACIONAL por setor', priority: 'high', status: 'pending', notes: 'Cada setor complementa o projeto com suas próprias perguntas; JSON unificado' },
      { id: 'F2-10', desc: 'Onboarding novo formato: simples, rápido, contextual por papel', priority: 'medium', status: 'pending', notes: 'Substituir intro screen atual por guia interativo' },
      { id: 'F2-11', desc: 'Chat por projeto: painel flutuante com Claude API + contexto do JSON do kickoff', priority: 'high', status: 'pending' },
      { id: 'F2-12', desc: 'Integração com Claude API — usuário traz sua própria API key', priority: 'high', status: 'pending', notes: 'Não aceitar plano gratuito; configurar na tela de config' },
      { id: 'F2-13', desc: 'Visibilidade de tokens consumidos em tempo real durante uso da IA', priority: 'medium', status: 'pending' },
      { id: 'F2-14', desc: 'Seletor de provedor IA: LLM On-Premise (gratuita) vs Claude API (alta performance)', priority: 'medium', status: 'pending', notes: 'LLM local elimina custo variável; Claude reservado para tarefas críticas. Depende de F3-01' },
      { id: 'F2-15', desc: 'Botão "Enviar para revisão" → manda JSON/doc por e-mail para revisor específico', priority: 'medium', status: 'unclear', notes: 'Aguardando definição do fluxo de revisão e do revisor' },
      { id: 'F2-16', desc: 'NEXUS + Especialista Documentador: botão Gerar Doc puxa JSON kickoff + dados de todos setores', priority: 'high', status: 'pending', notes: 'Unificação total do pipeline de documentação' },
      { id: 'F2-17', desc: 'DEV precisa ver pontos de decisão e layout do projeto', priority: 'medium', status: 'unclear', notes: 'View específica para o papel Desenvolvimento com decisões técnicas e layouts' },
      { id: 'F2-18', desc: 'RASTREAR e mapear acesso por papel: quais abas, IAs e cards cada papel vê', priority: 'high', status: 'pending', notes: 'Expansão do featureRegistry para controle granular de UI' },
      { id: 'F2-19', desc: 'Cards Situacionais por papel: blocos de info contextuais que aparecem só para quem precisa', priority: 'medium', status: 'unclear', notes: 'Ex: PMO vê "Projetos atrasados", Implantação vê "Checklist de comissionamento"' },
      { id: 'F2-20', desc: 'Ao gerar doc: Claude gera input.json, NEXUS monta .docx e salva no SharePoint automaticamente', priority: 'high', status: 'pending', notes: 'Pipeline totalmente automatizado; download local fica opcional. Requer F2-12 + F2-04' },
      { id: 'F2-21', desc: 'SSO Invent + login automático via Azure AD (Microsoft Entra ID)', priority: 'high', status: 'unclear', notes: 'Requer chamado ao Jonathan (Infra) para liberação de credenciais Azure AD' },
      { id: 'F2-22', desc: 'Alerta de Conclusão de Implantação: notificar Pós-Vendas automaticamente no encerramento da fase', priority: 'medium', status: 'pending' },
      { id: 'F2-23', desc: 'Upload automático do .docx gerado para SharePoint no diretório parametrizado do projeto', priority: 'high', status: 'pending', notes: 'Requer integração SharePoint + F2-04; download local fica secundário' },
      { id: 'F2-24', desc: 'Abertura imediata do arquivo no OneDrive após conclusão do upload no SharePoint', priority: 'medium', status: 'pending', notes: 'Usa vínculo nativo do OneDrive; depende de F2-23' },
      { id: 'F2-25', desc: 'Hard rule: projetos com PBL (Pick-to-Light) → sem coletor de dados na funcionalidade Fullcase', priority: 'medium', status: 'pending', notes: 'Validação automática no motor de regras, análoga a F1-08' },
      { id: 'F2-26', desc: 'Paletização Multi-Tipo: aceitar mais de um modelo de paletização no mesmo projeto simultaneamente', priority: 'medium', status: 'pending', notes: 'Ex: PTL + PTM combinados; hoje o sistema aceita apenas um tipo por vez' },
      { id: 'F2-27', desc: 'Substituição por Sugestão Inteligente: motor sugere paletização e fluxo PTL otimizados com base nos dados', priority: 'medium', status: 'pending' },
      { id: 'F2-28', desc: 'Uploads por projeto: vídeos de reuniões, Master-Data (MD), planilhas operacionais e cronogramas', priority: 'medium', status: 'pending', notes: 'Complementa F2-03; Supabase Storage ou SharePoint como destino' },
    ],
  },
  {
    id: 'F3', label: 'Fase 3 — Longo prazo', sub: 'IA avançada, infraestrutura própria, expansão multi-setor', color: '#C98A22',
    items: [
      { id: 'F3-01', desc: 'IA própria no servidor da empresa (LLM open-source On-Premise)', priority: 'high', status: 'pending', notes: 'Ex: Llama, Mistral rodando em servidor dedicado Invent; uso ilimitado sem custo por chamada' },
      { id: 'F3-02', desc: 'Base de conhecimento vetorial por projeto: "Obsidian que aprende sozinho"', priority: 'high', status: 'pending', notes: 'Vector DB (ex: Qdrant, Pinecone) alimentado pelos JSONs e docs de cada projeto' },
      { id: 'F3-03', desc: 'MD de roteamento: IA identifica quais fontes de conhecimento consultar e economiza tokens', priority: 'medium', status: 'pending', notes: 'Sistema de RAG com routing — IA decide qual especialista MD chamar' },
      { id: 'F3-04', desc: 'Sistema de refinamento por peso: IA aprende com resultados aprovados e refina o próprio MD guia', priority: 'medium', status: 'pending', notes: 'Feedback loop — resultados aprovados aumentam peso de certos padrões' },
      { id: 'F3-05', desc: 'Transcript do kickoff → IA preenche o formulário automaticamente', priority: 'high', status: 'pending', notes: 'Upload de áudio/texto → IA preenche → compara com preenchimento humano → aponta divergências' },
      { id: 'F3-06', desc: 'Expansão multi-setor: PMO, Implantação e Pós-vendas com IAs especializadas', priority: 'high', status: 'pending', notes: 'Cada setor com suas perguntas específicas alimentando a IA de forma centralizada' },
      { id: 'F3-07', desc: 'Intensivão por setor: mapear processos, identificar planilhas existentes e migrar para NEXUS', priority: 'medium', status: 'pending', notes: 'Entrevista setor → mapeia dor → constrói módulo' },
      { id: 'F3-08', desc: 'Transformar planilhas de controle de cada setor em CRUDs dentro do NEXUS com IA específica', priority: 'medium', status: 'pending' },
      { id: 'F3-09', desc: 'MCP Server: expor dados do NEXUS como ferramentas para IAs externas', priority: 'medium', status: 'pending', notes: 'get_project(code), list_projects(), search_projects(query)' },
      { id: 'F3-10', desc: 'Domínio próprio: nexus.invent.com.br', priority: 'medium', status: 'pending', notes: 'Requer Netlify/VPS + configuração DNS' },
      { id: 'F3-11', desc: 'Edição colaborativa em tempo real (Supabase Realtime)', priority: 'low', status: 'pending', notes: 'Múltiplos usuários editando o mesmo projeto simultaneamente' },
      { id: 'F3-12', desc: 'VEX AI: pesquisa conversacional semântica na base histórica de todos os projetos', priority: 'high', status: 'pending', notes: 'Chat aberto para colaboradores autorizados; busca sobre dados históricos, documentos e JSONs' },
      { id: 'F3-13', desc: 'VEX AI: Agentes Especialistas por vertical técnica ou cliente', priority: 'medium', status: 'pending', notes: 'Ex: agente de Integração ERP, agente de Picking; relatórios segmentados por área' },
      { id: 'F3-14', desc: 'VEX AI: Insights preditivos e sugestões de perguntas complementares gerados automaticamente', priority: 'medium', status: 'pending' },
      { id: 'F3-15', desc: 'Módulo de Arenas: revisão crítica de docs gerados pela LLM + loop de feedback contínuo', priority: 'high', status: 'pending', notes: 'Correções humanas alimentam input.json de feedback → refinamento automático do modelo' },
      { id: 'F3-16', desc: 'Auditoria de segurança FABLE de todo o ecossistema antes do ganho de escala comercial', priority: 'high', status: 'pending', notes: 'Validação contra vazamento de dados corporativos e vulnerabilidades em nível de código' },
    ],
  },
  {
    id: 'F4', label: 'Fase 4 — O Auge', sub: 'Automação end-to-end — reduzir até 90% do trabalho braçal de documentação', color: '#8b5cf6',
    items: [
      { id: 'F4-01', desc: 'Cowork: envio automático de e-mail institucional com documento + sugestão de agenda após revisão aprovada', priority: 'high', status: 'pending', notes: 'Requer Azure Graph API (F2-21); e-mail enviado pelo NEXUS em nome do responsável' },
      { id: 'F4-02', desc: 'Skill Reunião Doc Análise: transcrição automática + extração de pontos-chave e decisões', priority: 'high', status: 'pending', notes: 'Input: gravação ou transcript; Output: JSON estruturado de alterações propostas ao documento' },
      { id: 'F4-03', desc: 'Skill Alterações Inteligentes: aplicar automaticamente mudanças extraídas da reunião ao documento', priority: 'high', status: 'pending', notes: 'Gera nova revisão do .docx com log de alterações; depende de F4-02' },
      { id: 'F4-04', desc: 'Documento Modular Vivo: qualquer alteração em campo do Nexus gera tarefa automática de atualização no doc vinculado', priority: 'medium', status: 'pending', notes: 'Ex: engenharia muda nº de posições → alerta → confirmado → aplica no SharePoint + gera PDF' },
      { id: 'F4-05', desc: 'Versionamento Semântico Rev [A].[B].[C] gerado automaticamente com base no tipo de alteração', priority: 'medium', status: 'pending', notes: 'A = escopo/tecnologia macro; B = impacto de outras áreas; C = micro-ajustes textuais. Ex: Rev 7.1.3' },
      { id: 'F4-06', desc: 'Motor Evolutivo SUPER_MD: cada correção humana alimenta treinamento supervisionado do ecossistema', priority: 'high', status: 'pending', notes: 'NEXUS aprende organicamente a cada projeto; regras do Especialista Documentador se refinam automaticamente' },
      { id: 'F4-07', desc: 'Etapa de Análise Crítica I.A. Gomes no pipeline de revisão antes do envio da próxima revisão ao cliente', priority: 'medium', status: 'pending', notes: 'Etapa intermediária após alterações aplicadas; aguarda confirmação do analista' },
    ],
  },
];

const BCHECK_KEY = 'nexus_backlog_checks_v1';
const BDEL_KEY   = 'nexus_backlog_deleted_v1';

function loadSet(key: string): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(key) ?? '[]') as string[]); }
  catch { return new Set(); }
}
function saveSet(key: string, s: Set<string>): void {
  localStorage.setItem(key, JSON.stringify([...s]));
}

function BacklogItemRow({
  item, phaseColor, checked, onToggle, onDelete,
}: {
  item: BItem; phaseColor: string; checked: boolean;
  onToggle: () => void; onDelete: () => void;
}) {
  const [confirmDel, setConfirmDel] = useState(false);
  const prio = BPRIO_META[item.priority];
  const borderColor = checked ? '#22c55e' : item.status === 'unclear' ? '#f59e0b' : phaseColor;

  return (
    <Paper elevation={0} sx={{ borderLeft: `3px solid ${borderColor}`, transition: 'border-color .15s' }}>
      <Box sx={{ p: '8px 10px', display: 'flex', gap: 1, alignItems: 'flex-start' }}>
        <Checkbox checked={checked} onChange={onToggle} size="small"
          sx={{ p: '2px', mt: '1px', flexShrink: 0, color: 'text.disabled', '&.Mui-checked': { color: '#22c55e' } }} />
        <Typography sx={{ fontSize: 9.5, fontFamily: 'monospace', fontWeight: 700, color: 'text.disabled', minWidth: 38, pt: '4px', flexShrink: 0 }}>
          {item.id}
        </Typography>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: 'text.primary', lineHeight: 1.5 }}>
            {item.desc}
          </Typography>
          {item.notes && (
            <Typography sx={{ fontSize: 11.5, color: 'text.disabled', mt: '3px', lineHeight: 1.45 }}>
              {item.notes}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', gap: 0.75, flexShrink: 0, alignItems: 'center', pt: '4px' }}>
          <Chip label={prio.label} size="small"
            sx={{ fontSize: 9.5, height: 18, bgcolor: `${prio.color}14`, color: prio.color, border: `1px solid ${prio.color}35`, fontWeight: 600 }} />
          {item.status === 'unclear' && (
            <Chip label="Aguardando" size="small"
              sx={{ fontSize: 9.5, height: 18, bgcolor: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.35)', fontWeight: 600 }} />
          )}
          <Tooltip title="Remover item">
            <IconButton size="small" onClick={() => setConfirmDel(true)}
              sx={{ p: '3px', color: 'text.disabled', '&:hover': { color: '#ef4444' } }}>
              <DeleteRoundedIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      {confirmDel && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2, py: '8px', borderTop: '1px solid', borderColor: 'divider', bgcolor: 'rgba(239,68,68,0.04)' }}>
          <Typography sx={{ fontSize: 12, color: '#ef4444', flex: 1 }}>Remover este item do backlog?</Typography>
          <Button size="small" onClick={() => setConfirmDel(false)}
            sx={{ fontSize: 11, textTransform: 'none', color: 'text.disabled', minWidth: 0, px: 1.5 }}>
            Cancelar
          </Button>
          <Button size="small" variant="contained" onClick={onDelete}
            sx={{ fontSize: 11, textTransform: 'none', bgcolor: '#ef4444', '&:hover': { bgcolor: '#dc2626' }, minWidth: 0, px: 1.5 }}>
            Confirmar
          </Button>
        </Box>
      )}
    </Paper>
  );
}

function BacklogAdminTab() {
  const [phaseFilter, setPhaseFilter] = useState<string>('all');
  const [prioFilter,  setPrioFilter]  = useState<BPriority | 'all'>('all');
  const [checks,  setChecks]  = useState<Set<string>>(() => loadSet(BCHECK_KEY));
  const [deleted, setDeleted] = useState<Set<string>>(() => loadSet(BDEL_KEY));
  const [showDone, setShowDone] = useState(false);

  const allItems: BItemExt[] = BACKLOG_PHASES.flatMap(p => p.items.map(i => ({ ...i, phaseId: p.id, phaseColor: p.color })));
  const alive = allItems.filter(i => !deleted.has(i.id));

  const isDone = (item: BItem) => item.status === 'done' || checks.has(item.id);

  const toggleCheck = (id: string) => {
    setChecks(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      saveSet(BCHECK_KEY, next);
      return next;
    });
  };

  const deleteItem = (id: string) => {
    setDeleted(prev => {
      const next = new Set(prev);
      next.add(id);
      saveSet(BDEL_KEY, next);
      return next;
    });
  };

  const doneCount    = alive.filter(isDone).length;
  const pendingCount = alive.filter(i => !isDone(i) && i.status !== 'unclear').length;
  const unclearCount = alive.filter(i => !isDone(i) && i.status === 'unclear').length;

  const visible = alive.filter(i => {
    if (!showDone && isDone(i)) return false;
    const matchPhase = phaseFilter === 'all' || i.phaseId  === phaseFilter;
    const matchPrio  = prioFilter  === 'all' || i.priority === prioFilter;
    return matchPhase && matchPrio;
  });

  const grouped = phaseFilter === 'all'
    ? BACKLOG_PHASES.map(p => ({ phase: p, items: visible.filter(i => i.phaseId === p.id) })).filter(g => g.items.length > 0)
    : null;

  const currentPhase = phaseFilter !== 'all' ? BACKLOG_PHASES.find(p => p.id === phaseFilter) : null;

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5, flexWrap: 'wrap', gap: 1.5 }}>
        <Box>
          <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>Backlog NEXUS</Typography>
          <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>
            Marque itens como concluídos para ocultá-los. Use o botão de excluir para remover o que não se aplica.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          <Chip label={`◌ ${pendingCount} pendentes`} size="small"
            sx={{ fontSize: 11, fontWeight: 600, bgcolor: 'rgba(90,122,149,0.1)', color: '#7A96B0', border: '1px solid rgba(90,122,149,0.25)' }} />
          {unclearCount > 0 && (
            <Chip label={`? ${unclearCount} aguardando`} size="small"
              sx={{ fontSize: 11, fontWeight: 600, bgcolor: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.25)' }} />
          )}
          <Chip
            label={showDone ? `✓ ${doneCount} entregues · ocultar` : `✓ ${doneCount} entregues`}
            size="small" onClick={() => setShowDone(v => !v)}
            sx={{ fontSize: 11, fontWeight: 600, cursor: 'pointer', bgcolor: showDone ? 'rgba(34,197,94,0.12)' : 'rgba(34,197,94,0.05)', color: '#22c55e', border: `1px solid ${showDone ? 'rgba(34,197,94,0.4)' : 'rgba(34,197,94,0.2)'}`, '&:hover': { bgcolor: 'rgba(34,197,94,0.15)' } }} />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography sx={{ fontSize: 11, color: 'text.disabled', minWidth: 60 }}>Fase:</Typography>
          <Chip label="Todas" size="small" onClick={() => setPhaseFilter('all')}
            sx={{ fontSize: 11, fontWeight: 600, bgcolor: phaseFilter === 'all' ? 'rgba(255,255,255,0.1)' : 'transparent', borderColor: phaseFilter === 'all' ? 'rgba(255,255,255,0.25)' : 'divider', color: phaseFilter === 'all' ? 'text.primary' : 'text.disabled', border: '1px solid' }} />
          {BACKLOG_PHASES.map(p => (
            <Chip key={p.id} label={p.id} size="small" onClick={() => setPhaseFilter(phaseFilter === p.id ? 'all' : p.id)}
              sx={{ fontSize: 11, fontWeight: 700, bgcolor: phaseFilter === p.id ? `${p.color}22` : 'transparent', borderColor: phaseFilter === p.id ? p.color : 'divider', color: phaseFilter === p.id ? p.color : 'text.disabled', border: '1px solid', '&:hover': { borderColor: p.color, color: p.color } }} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography sx={{ fontSize: 11, color: 'text.disabled', minWidth: 60 }}>Prioridade:</Typography>
          <Chip label="Todas" size="small" onClick={() => setPrioFilter('all')}
            sx={{ fontSize: 11, bgcolor: prioFilter === 'all' ? 'rgba(255,255,255,0.07)' : 'transparent', borderColor: prioFilter === 'all' ? 'rgba(255,255,255,0.2)' : 'divider', color: prioFilter === 'all' ? 'text.secondary' : 'text.disabled', border: '1px solid' }} />
          {(['high', 'medium', 'low'] as BPriority[]).map(p => (
            <Chip key={p} label={BPRIO_META[p].label} size="small" onClick={() => setPrioFilter(prioFilter === p ? 'all' : p)}
              sx={{ fontSize: 11, fontWeight: 600, bgcolor: prioFilter === p ? `${BPRIO_META[p].color}18` : 'transparent', borderColor: prioFilter === p ? BPRIO_META[p].color : 'divider', color: prioFilter === p ? BPRIO_META[p].color : 'text.disabled', border: '1px solid', '&:hover': { borderColor: BPRIO_META[p].color, color: BPRIO_META[p].color } }} />
          ))}
        </Box>
      </Box>

      {visible.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 5 }}>
          <Typography sx={{ fontSize: 13, color: 'text.disabled' }}>
            {!showDone && doneCount > 0
              ? `Todos os itens visíveis foram entregues. Clique em "✓ ${doneCount} entregues" para exibi-los.`
              : 'Nenhum item para os filtros selecionados.'}
          </Typography>
        </Box>
      ) : grouped ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {grouped.map(({ phase, items }) => (
            <Box key={phase.id}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: phase.color, flexShrink: 0, mt: '4px' }} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography sx={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: phase.color, lineHeight: 1.4 }}>
                    {phase.label}
                  </Typography>
                  <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>{phase.sub}</Typography>
                </Box>
                <Typography sx={{ fontSize: 10, color: 'text.disabled', fontFamily: 'monospace', flexShrink: 0 }}>
                  {items.length} visível{items.length !== 1 ? 'is' : ''}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {items.map(item => (
                  <BacklogItemRow key={item.id} item={item} phaseColor={phase.color}
                    checked={isDone(item)} onToggle={() => toggleCheck(item.id)} onDelete={() => deleteItem(item.id)} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box>
          {currentPhase && (
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: currentPhase.color, flexShrink: 0, mt: '4px' }} />
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: currentPhase.color }}>
                  {currentPhase.label}
                </Typography>
                <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>{currentPhase.sub}</Typography>
              </Box>
            </Box>
          )}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {visible.map(item => (
              <BacklogItemRow key={item.id} item={item} phaseColor={item.phaseColor}
                checked={isDone(item)} onToggle={() => toggleCheck(item.id)} onDelete={() => deleteItem(item.id)} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
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
            '& .Mui-selected': { color: tab === 4 ? '#F59D00 !important' : 'primary.main' },
            '& .MuiTabs-indicator': { bgcolor: tab === 4 ? '#F59D00' : 'primary.main' },
          }}
        >
          <Tab label="Papéis" />
          <Tab label="Apresentação" icon={<SlideshowRoundedIcon sx={{ fontSize: 16 }} />} iconPosition="start" />
          <Tab label="Funcionalidades" />
          <Tab label="Backlog" />
          <Tab label="Corpus · IA" sx={{ color: tab === 4 ? '#F59D00 !important' : undefined }} />
        </Tabs>

        {/* ── Tab 0: Papéis ── */}
        {tab === 0 && (
          <Box sx={{ maxWidth: 480 }}>
            <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.primary', mb: '4px' }}>Papel atual da sessão</Typography>
            <Typography sx={{ fontSize: 12, color: 'text.disabled', mb: 2.5 }}>
              Apenas o administrador pode transitar entre funções. Útil para debugar a plataforma e visualizar o sistema como cada perfil.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {ROLES.map(r => {
                const active = role === r.value;
                return (
                  <Box key={r.value} component="button" onClick={() => onRoleChange(r.value)}
                    sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1.5, p: '10px 14px', border: '1px solid', borderRadius: 1.5, cursor: 'pointer', bgcolor: active ? `${ROLE_COLOR[r.value]}12` : 'transparent', borderColor: active ? ROLE_COLOR[r.value] : 'divider', transition: '.15s', '&:hover': { borderColor: ROLE_COLOR[r.value], bgcolor: `${ROLE_COLOR[r.value]}0A` } }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: ROLE_COLOR[r.value], flexShrink: 0 }} />
                    <Typography sx={{ fontSize: 13, fontWeight: active ? 700 : 500, color: active ? ROLE_COLOR[r.value] : 'text.secondary', flex: 1, textAlign: 'left' }}>{r.label}</Typography>
                    {active && <Chip label="ativo" size="small" sx={{ fontSize: 10, height: 18, bgcolor: `${ROLE_COLOR[r.value]}20`, color: ROLE_COLOR[r.value], border: `1px solid ${ROLE_COLOR[r.value]}44`, fontWeight: 700 }} />}
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}

        {/* ── Tab 1: Apresentação ── */}
        {tab === 1 && (
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

        {/* ── Tab 2: Funcionalidades ── */}
        {tab === 2 && <FeaturesAdminTab />}

        {/* ── Tab 3: Backlog ── */}
        {tab === 3 && <BacklogAdminTab />}

        {/* ── Tab 4: Corpus · IA ── */}
        {tab === 4 && (
          <Box sx={{ pb: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: 13, fontWeight: 700, color: 'text.primary', mb: '2px' }}>
                Base de Conhecimento WMS / WCS
              </Typography>
              <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>
                Mapa vivo do corpus minerado — atualizado diretamente no código a cada nova sessão de mineração.
              </Typography>
            </Box>
            <CorpusKnowledgeTab />
          </Box>
        )}
      </Box>
    </>
  );
}
