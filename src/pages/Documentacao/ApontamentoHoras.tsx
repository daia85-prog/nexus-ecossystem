import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';
import ExcelJS from 'exceljs';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// ─── Types ────────────────────────────────────────────────────────────────────
interface ApontProfile {
  nome: string;
  recurso: string;
  atividade: string;
  faseControladora: string;
}

interface ApontProject {
  id: number;
  nome: string;
  ativo: boolean;
}

interface Bloco { ini: number; fim: number; }

interface Atividade {
  id: number;
  projetoId: number;
  descricao: string;
  peso: number;
  ordem: number;
  blocos: Bloco[];
  ajustada: boolean;
}

type DayTipo = 'NORMAL' | 'FERIADO' | 'FERIAS' | 'ATESTADO' | 'FOLGA' | 'CUSTOM';

interface DayData {
  tipo: DayTipo;
  cargaCustom?: number;
  atividades: Atividade[];
}

interface ApontState {
  profile: ApontProfile;
  projects: ApontProject[];
  nextProjId: number;
  nextActId: number;
  days: Record<string, DayData>;
  exports: Record<string, string>;
}

interface ApontHistoryEntry {
  id: string;
  userName: string;
  weekKey: string;
  weekNum: number;
  weekYear: number;
  mondayISO: string;
  weekLabel: string;
  exportedAt: string;
  contentHash: string;
  daysSnapshot: Record<string, DayData>;
  projectsSnapshot: ApontProject[];
  profile: ApontProfile;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const LUNCH = { ini: 11.5 * 60, fim: 12.5 * 60 };
const JORNADA: Record<number, { ini: number; fim: number }> = {
  1: { ini: 480, fim: 1080 }, 2: { ini: 480, fim: 1080 },
  3: { ini: 480, fim: 1080 }, 4: { ini: 480, fim: 1080 },
  5: { ini: 480, fim: 1020 },
};
const GRAN = 30;
const TIPOS_OFF: DayTipo[] = ['FERIADO', 'FERIAS', 'ATESTADO', 'FOLGA'];
const TIPO_LABEL: Record<string, string> = {
  FERIADO: 'Feriado', FERIAS: 'Férias', ATESTADO: 'Atestado',
  FOLGA: 'Folga', CUSTOM: 'Jornada customizada',
};
const DOW_SHORT = ['SEG', 'TER', 'QUA', 'QUI', 'SEX'];
const DOW_FULL = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'];

const PROJ_COLORS: [string, string][] = [
  ['rgba(47,93,138,0.20)', '#7EB3E0'],
  ['rgba(46,125,91,0.20)', '#6DCCA0'],
  ['rgba(255,197,0,0.15)', '#FFC500'],
  ['rgba(138,61,105,0.20)', '#E090C0'],
  ['rgba(87,79,160,0.20)', '#A89FE0'],
  ['rgba(92,102,80,0.20)', '#A0B090'],
  ['rgba(161,78,44,0.20)', '#E09070'],
  ['rgba(34,112,122,0.20)', '#70C0CA'],
];

const STATUS_DOT: Record<string, string> = {
  vazio: '#555', rascunho: '#FFC500', distribuido: '#6DCCA0', ajustado: '#7EB3E0',
};

// ─── Date helpers ─────────────────────────────────────────────────────────────
function mondayOf(d: Date): Date {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  x.setDate(x.getDate() - (x.getDay() + 6) % 7);
  return x;
}

function isoWeek(d: Date): { week: number; year: number } {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - day + 3);
  const firstThu = new Date(Date.UTC(date.getUTCFullYear(), 0, 4));
  firstThu.setUTCDate(firstThu.getUTCDate() - (firstThu.getUTCDay() + 6) % 7 + 3);
  return { week: 1 + Math.round((date.getTime() - firstThu.getTime()) / (7 * 864e5)), year: date.getUTCFullYear() };
}

function fmtKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function addDays(d: Date, n: number): Date {
  const x = new Date(d); x.setDate(x.getDate() + n); return x;
}

function fmtBR(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

function fmtShort(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function hm(min: number): string {
  return `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
}

function hms(min: number): string { return hm(min) + ':00'; }

function durFmt(min: number): string {
  const h = Math.floor(min / 60), m = min % 60;
  return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`;
}

function getInitials(name: string): string {
  const p = name.trim().split(/\s+/);
  return p.length === 1 ? p[0].slice(0, 2).toUpperCase() : (p[0][0] + '.' + p[p.length - 1][0]).toUpperCase();
}

function weekDates(monday: Date): Date[] { return [0, 1, 2, 3, 4].map(i => addDays(monday, i)); }
function wkKey(monday: Date): string { const w = isoWeek(monday); return `${w.year}-S${w.week}`; }

// ─── Domain helpers ───────────────────────────────────────────────────────────
function cargaMin(dateObj: Date, day: DayData): number {
  if (TIPOS_OFF.includes(day.tipo)) return 0;
  if (day.tipo === 'CUSTOM' && day.cargaCustom) return Math.round(day.cargaCustom * 60);
  const dw = ((dateObj.getDay() + 6) % 7) + 1;
  if (dw > 5) return 0;
  return JORNADA[dw].fim - JORNADA[dw].ini - (LUNCH.fim - LUNCH.ini);
}

function jornadaFim(dateObj: Date, day: DayData): number {
  const dw = ((dateObj.getDay() + 6) % 7) + 1;
  if (day.tipo === 'CUSTOM' && day.cargaCustom) {
    const total = Math.round(day.cargaCustom * 60);
    const fim = JORNADA[1].ini + total;
    return fim > LUNCH.ini ? fim + (LUNCH.fim - LUNCH.ini) : fim;
  }
  return dw <= 5 ? JORNADA[dw].fim : 18 * 60;
}

function dayStatus(day: DayData): { cls: string; label: string } {
  if (!day.atividades.length) return { cls: 'vazio', label: 'Vazio' };
  if (day.atividades.some(a => a.ajustada)) return { cls: 'ajustado', label: 'Ajustado' };
  if (day.atividades.every(a => a.blocos.length)) return { cls: 'distribuido', label: 'Distribuído' };
  return { cls: 'rascunho', label: 'Rascunho' };
}

function projColor(id: number): [string, string] { return PROJ_COLORS[id % PROJ_COLORS.length]; }

// ─── Brazilian national holidays ──────────────────────────────────────────────
// Meeus/Jones/Butcher algorithm — works for Gregorian calendar (1583+)
function easterDate(year: number): Date {
  const a = year % 19, b = Math.floor(year / 100), c = year % 100;
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function brazilianHolidays(year: number): Set<string> {
  const s = new Set<string>();
  const add = (m: number, d: number) => s.add(fmtKey(new Date(year, m - 1, d)));
  // Fixed national holidays
  add(1, 1);   // Confraternização Universal
  add(4, 21);  // Tiradentes
  add(5, 1);   // Dia do Trabalho
  add(9, 7);   // Independência do Brasil
  add(10, 12); // Nossa Senhora Aparecida
  add(11, 2);  // Finados
  add(11, 15); // Proclamação da República
  add(11, 20); // Consciência Negra (nacional desde 2024)
  add(12, 25); // Natal
  // Mobile holidays based on Easter (Páscoa)
  const easter = easterDate(year);
  const mobile = (offset: number) => {
    const d = new Date(easter); d.setDate(d.getDate() + offset); s.add(fmtKey(d));
  };
  mobile(-2);  // Sexta-feira Santa (Good Friday)
  mobile(60);  // Corpus Christi
  return s;
}

// ─── Distribution algorithm ───────────────────────────────────────────────────
function distributeActivities(
  acts: Atividade[], dateObj: Date, day: DayData,
  lunch: { ini: number; fim: number } = LUNCH,
): { ok: boolean; error?: string; result: Atividade[] } {
  if (TIPOS_OFF.includes(day.tipo)) return { ok: true, result: acts };
  const carga = cargaMin(dateObj, day);
  const slots = Math.round(carga / GRAN);
  if (acts.length > slots) return { ok: false, error: `Há mais atividades (${acts.length}) do que blocos de 30 min (${slots}). Consolide atividades.`, result: acts };

  const sorted = [...acts].sort((a, b) => a.ordem - b.ordem);
  const somaPesos = sorted.reduce((s, a) => s + Number(a.peso || 1), 0);
  const raw = sorted.map(a => (Number(a.peso || 1) / somaPesos) * slots);
  const base = raw.map(r => Math.max(1, Math.floor(r)));
  let rem = slots - base.reduce((s, b) => s + b, 0);

  if (rem > 0) {
    const order = raw.map((r, i) => ({ i, frac: r - Math.floor(r), peso: sorted[i].peso }))
      .sort((a, b) => b.frac - a.frac || b.peso - a.peso);
    let k = 0;
    while (rem > 0) { base[order[k % order.length].i]++; rem--; k++; }
  } else {
    while (rem < 0) {
      let idx = -1, best = -1;
      base.forEach((b, i) => { if (b > 1 && b > best) { best = b; idx = i; } });
      if (idx < 0) break;
      base[idx]--; rem++;
    }
  }

  const fimJ = jornadaFim(dateObj, day);
  let cursor = JORNADA[1].ini;

  const newActs = sorted.map((a, i) => {
    let restante = base[i] * GRAN;
    const blocos: Bloco[] = [];
    while (restante > 0 && cursor < fimJ) {
      if (cursor >= lunch.ini && cursor < lunch.fim) cursor = lunch.fim;
      const limite = cursor < lunch.ini && lunch.ini < fimJ ? Math.min(lunch.ini, fimJ) : fimJ;
      const segFim = Math.min(cursor + restante, limite);
      if (segFim > cursor) { blocos.push({ ini: cursor, fim: segFim }); restante -= segFim - cursor; cursor = segFim; }
      else break;
    }
    return { ...a, blocos, ajustada: false };
  });

  return { ok: true, result: newActs.sort((a, b) => a.ordem - b.ordem) };
}

// ─── Excel builder (shared between live export and history re-export) ─────────
// Only first + last name in the Colaborador column regardless of how many names the user has
function twoNames(name: string): string {
  const p = name.trim().split(/\s+/);
  return p.length <= 2 ? name.trim() : `${p[0]} ${p[p.length - 1]}`;
}

function buildExcelRows(
  monday: Date,
  days: Record<string, DayData>,
  profile: ApontProfile,
  w: { week: number; year: number },
  projects: ApontProject[],
): (string | number)[][] {
  const header = ['Colaborador', 'Projeto', 'Data', 'Dia da semana', 'Semana', 'Hora de Início', 'Hora Termino', 'Horas', 'Horas Decimais', 'Fase', 'Atividade', 'Observacao', 'Fase Controladora', 'Setor', 'Recurso'];
  const rows: (string | number)[][] = [header];
  weekDates(monday).forEach((d, i) => {
    const day = getDay(days, fmtKey(d));
    if (TIPOS_OFF.includes(day.tipo)) return;
    [...day.atividades].sort((a, b) => a.ordem - b.ordem).forEach(a => {
      const p = projects.find(x => x.id === a.projetoId);
      [...a.blocos].sort((x, y) => x.ini - y.ini).forEach(b => {
        const dur = b.fim - b.ini;
        rows.push([
          twoNames(profile.nome), p?.nome ?? '?', fmtBR(d), DOW_FULL[i], w.week,
          hms(b.ini), hms(b.fim), hms(dur),
          Number((dur / 60).toFixed(2)),
          '', profile.atividade, a.descricao, profile.faseControladora,
          'Documentação', profile.recurso,
        ]);
      });
    });
  });
  return rows;
}

async function writeExcel(rows: (string | number)[][], filename: string): Promise<void> {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('SISTEMAS');

  // Column widths (chars)
  const colWidths = [18, 26, 12, 16, 9, 13, 13, 11, 15, 9, 12, 55, 24, 14, 10];
  ws.columns = colWidths.map(width => ({ width }));

  // "HH:MM:SS" string → fraction of day (Excel time serial)
  const toFrac = (v: string | number): number => {
    const p = String(v).split(':').map(Number);
    return (p[0] * 3600 + (p[1] || 0) * 60 + (p[2] || 0)) / 86400;
  };

  // Header row — gold background, WHITE bold Calibri 11, centered
  const headerRow = ws.addRow(rows[0] as string[]);
  headerRow.height = 35.27;
  headerRow.eachCell(cell => {
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFC000' } };
    cell.font = { name: 'Calibri', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
  });

  // Data rows — alternating white / light gray, centered
  // Columns with special handling (0-indexed):
  //   2  Data           → real Date value   (dd/mm/yyyy)
  //   4  Semana         → formula WEEKNUM   (0)
  //   5  Hora de Início → time fraction     (hh:mm:ss)
  //   6  Hora Termino   → time fraction     (hh:mm:ss)
  //   7  Horas          → formula G-F       ([h]:mm:ss)
  //   8  Horas Decimais → formula HOUR+MIN  (0.00)
  rows.slice(1).forEach((row, i) => {
    const r = i + 2; // 1-indexed Excel row (row 1 = header)
    const wsRow = ws.addRow([]);
    const bg = i % 2 === 0 ? 'FFFFFFFF' : 'FFF2F2F2';

    const sc = (ci: number, numFmt?: string) => {
      const c = wsRow.getCell(ci + 1);
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
      c.font = { name: 'Calibri', size: 10, color: { argb: 'FF000000' } };
      c.alignment = { horizontal: 'center', vertical: 'middle' };
      if (numFmt) c.numFmt = numFmt;
      return c;
    };

    row.forEach((val, ci) => {
      switch (ci) {
        case 2: { // Data — real date value so WEEKNUM formula works
          const [dd, mm, yy] = String(val).split('/').map(Number);
          sc(ci, 'dd/mm/yyyy').value = new Date(yy, mm - 1, dd);
          break;
        }
        case 4: // Semana — WEEKNUM formula (type 1 = week starts Sunday, as per original)
          sc(ci, '0').value = { formula: `IF(C${r}="","",WEEKNUM(C${r},1))`, result: Number(val) };
          break;
        case 5: // Hora de Início — real time serial
        case 6: // Hora Termino
          sc(ci, 'hh:mm:ss').value = toFrac(val);
          break;
        case 7: // Horas — formula: Hora Termino − Hora de Início
          sc(ci, '[h]:mm:ss').value = { formula: `G${r}-F${r}`, result: toFrac(val) };
          break;
        case 8: // Horas Decimais — formula: HOUR(Horas)+MINUTE(Horas)/60
          sc(ci, '0.00').value = { formula: `HOUR(H${r})+MINUTE(H${r})/60`, result: Number(val) };
          break;
        default:
          sc(ci).value = val === '' ? null : val;
      }
    });

    wsRow.height = 35.27; // ExcelJS scales by 18/23 before writing; 35.27 × (18/23) ≈ 27.6 in Excel
  });

  // Auto-filter dropdowns on header
  const lastColLetter = String.fromCharCode(64 + (rows[0].length));
  ws.autoFilter = `A1:${lastColLetter}1`;

  // Download
  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename + '.xlsx';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ─── Persistence ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'nexus_apontamento_v1';
const HISTORY_KEY = 'nexus_apontamento_history_v1';

function loadApontState(): ApontState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw) as ApontState;
      // If nome is still the default placeholder, sync from active session
      if (saved.profile.nome === 'Colaborador') {
        try {
          const s = JSON.parse(localStorage.getItem('nexus_session') ?? 'null') as { name?: string } | null;
          if (s?.name) { saved.profile.nome = s.name; saved.profile.recurso = getInitials(s.name); }
        } catch { /* empty */ }
      }
      return saved;
    }
  } catch { /* empty */ }
  return mkInitialState();
}

function mkInitialState(): ApontState {
  let nome = 'Colaborador';
  try {
    const s = JSON.parse(localStorage.getItem('nexus_session') ?? 'null') as { name?: string } | null;
    if (s?.name) nome = s.name;
  } catch { /* empty */ }
  return {
    profile: { nome, recurso: getInitials(nome), atividade: 'Execução', faseControladora: 'Fase 09 - Documentação' },
    projects: [{ id: 1, nome: 'INTERNO', ativo: true }, { id: 2, nome: 'NEXUS', ativo: true }],
    nextProjId: 3, nextActId: 10,
    days: {}, exports: {},
  };
}

function getDay(days: Record<string, DayData>, key: string): DayData {
  return days[key] ?? { tipo: 'NORMAL', atividades: [] };
}

function weekHash(monday: Date, days: Record<string, DayData>): string {
  return JSON.stringify(weekDates(monday).map(d => {
    const day = getDay(days, fmtKey(d));
    return [day.tipo, day.cargaCustom ?? 0, day.atividades.map(a => [a.projetoId, a.descricao, a.peso, a.ordem, a.blocos])];
  }));
}

function loadHistory(userName: string): ApontHistoryEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const all: ApontHistoryEntry[] = raw ? (JSON.parse(raw) as ApontHistoryEntry[]) : [];
    return all.filter(e => e.userName === userName);
  } catch { return []; }
}

function upsertHistoryEntry(entry: ApontHistoryEntry): void {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const all: ApontHistoryEntry[] = raw ? (JSON.parse(raw) as ApontHistoryEntry[]) : [];
    // Same week + same content = update date only (dedup)
    const dupIdx = all.findIndex(e => e.userName === entry.userName && e.weekKey === entry.weekKey && e.contentHash === entry.contentHash);
    if (dupIdx >= 0) {
      all[dupIdx].exportedAt = entry.exportedAt;
    } else {
      all.push(entry);
    }
    localStorage.setItem(HISTORY_KEY, JSON.stringify(all));
  } catch { /* empty */ }
}

function deleteHistoryById(id: string): void {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const all: ApontHistoryEntry[] = raw ? (JSON.parse(raw) as ApontHistoryEntry[]) : [];
    localStorage.setItem(HISTORY_KEY, JSON.stringify(all.filter(e => e.id !== id)));
  } catch { /* empty */ }
}

// ─── Profile Modal ────────────────────────────────────────────────────────────
function ProfileModal({ open, profile, onClose, onSave }: {
  open: boolean; profile: ApontProfile;
  onClose: () => void; onSave: (p: ApontProfile) => void;
}) {
  const [f, setF] = useState(profile);
  useEffect(() => { if (open) setF(profile); }, [open, profile]);
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Perfil de apontamento</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '16px !important' }}>
        <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
          Estes valores preenchem as colunas fixas do Excel. Configure uma vez.
        </Typography>
        <TextField label="Colaborador" value={f.nome} onChange={e => setF(x => ({ ...x, nome: e.target.value }))} />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <TextField label="Recurso (sigla)" value={f.recurso} onChange={e => setF(x => ({ ...x, recurso: e.target.value }))} helperText='Ex: "R.C"' />
          <TextField label="Atividade" value={f.atividade} onChange={e => setF(x => ({ ...x, atividade: e.target.value }))} helperText='Padrão: "Execução"' />
        </Box>
        <TextField label="Fase Controladora" value={f.faseControladora} onChange={e => setF(x => ({ ...x, faseControladora: e.target.value }))} helperText='Ex: "Fase 09 - Documentação"' />
        <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>Setor: <strong>Documentação</strong> · preenchido automaticamente</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">Cancelar</Button>
        <Button variant="contained" onClick={() => onSave(f)}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}

// ─── Projects Modal ───────────────────────────────────────────────────────────
function ProjectsModal({ open, projects, onClose, onAdd, onToggle }: {
  open: boolean; projects: ApontProject[];
  onClose: () => void; onAdd: (nome: string) => void; onToggle: (id: number) => void;
}) {
  const [newNome, setNewNome] = useState('');
  const handleAdd = () => {
    const nome = newNome.trim();
    if (!nome) return;
    if (projects.some(p => p.nome.toLowerCase() === nome.toLowerCase())) { alert('Já existe um projeto com este nome.'); return; }
    onAdd(nome); setNewNome('');
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Projetos</DialogTitle>
      <DialogContent sx={{ pt: '8px !important' }}>
        <Typography sx={{ fontSize: 12, color: 'text.secondary', mb: 2 }}>
          Projetos inativos não aparecem em novos apontamentos, mas permanecem no histórico.
        </Typography>
        <Paper sx={{ maxHeight: 280, overflow: 'auto', mb: 2 }}>
          {projects.map(p => (
            <Box key={p.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1.25, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { borderBottom: 'none' } }}>
              <Typography sx={{ fontSize: 13, fontWeight: 600, color: p.ativo ? 'text.primary' : 'text.disabled', textDecoration: p.ativo ? 'none' : 'line-through' }}>
                {p.nome}
              </Typography>
              <Button size="small" color="inherit" onClick={() => onToggle(p.id)} sx={{ fontSize: 11, minWidth: 0 }}>
                {p.ativo ? 'Inativar' : 'Reativar'}
              </Button>
            </Box>
          ))}
        </Paper>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField size="small" fullWidth placeholder='Ex.: I25.201 - NOVO CLIENTE' value={newNome}
            onChange={e => setNewNome(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') handleAdd(); }} />
          <Button variant="contained" onClick={handleAdd} sx={{ whiteSpace: 'nowrap' }}>Adicionar</Button>
        </Box>
      </DialogContent>
      <DialogActions><Button onClick={onClose} color="inherit">Fechar</Button></DialogActions>
    </Dialog>
  );
}

// ─── DayType Modal ────────────────────────────────────────────────────────────
function DayTypeModal({ open, dayKey, tipo, cargaCustom, onClose, onSave }: {
  open: boolean; dayKey: string; tipo: DayTipo; cargaCustom?: number;
  onClose: () => void; onSave: (tipo: DayTipo, cargaCustom?: number) => void;
}) {
  const [selTipo, setSelTipo] = useState<DayTipo>(tipo);
  const [selCarga, setSelCarga] = useState(cargaCustom ?? 4);
  useEffect(() => { if (open) { setSelTipo(tipo); setSelCarga(cargaCustom ?? 4); } }, [open, tipo, cargaCustom]);
  const d = new Date(dayKey + 'T12:00:00');
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Tipo de dia · {DOW_FULL[(d.getDay() + 6) % 7]} {fmtShort(d)}</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '16px !important' }}>
        <FormControl fullWidth size="small">
          <InputLabel>Tipo</InputLabel>
          <Select label="Tipo" value={selTipo} onChange={e => setSelTipo(e.target.value as DayTipo)}>
            <MenuItem value="NORMAL">Normal (jornada padrão)</MenuItem>
            <MenuItem value="FERIADO">Feriado</MenuItem>
            <MenuItem value="FERIAS">Férias</MenuItem>
            <MenuItem value="ATESTADO">Atestado</MenuItem>
            <MenuItem value="FOLGA">Folga</MenuItem>
            <MenuItem value="CUSTOM">Jornada customizada</MenuItem>
          </Select>
        </FormControl>
        {selTipo === 'CUSTOM' && (
          <TextField label="Carga líquida do dia (horas)" type="number" size="small" value={selCarga}
            onChange={e => setSelCarga(Number(e.target.value))} inputProps={{ min: 0.5, max: 14, step: 0.5 }}
            helperText="Começa às 08:00, respeita almoço se necessário" />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">Cancelar</Button>
        <Button variant="contained" onClick={() => onSave(selTipo, selTipo === 'CUSTOM' ? selCarga : undefined)}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}

// ─── Adjust Modal ─────────────────────────────────────────────────────────────
interface AdjRow { actId: number; nome: string; desc: string; ini: number; fim: number; }

const LUNCH_OPTIONS = [
  { label: '11:00', ini: 11 * 60 },
  { label: '11:30', ini: 11 * 60 + 30 },
  { label: '12:00', ini: 12 * 60 },
  { label: '12:30', ini: 12 * 60 + 30 },
  { label: '13:00', ini: 13 * 60 },
];

function AdjustModal({ open, dayKey, day, projects, onClose, onSave }: {
  open: boolean; dayKey: string; day: DayData; projects: ApontProject[];
  onClose: () => void; onSave: (updated: Atividade[]) => void;
}) {
  const [rows, setRows] = useState<AdjRow[]>([]);
  const [lunchIni, setLunchIni] = useState(LUNCH.ini);

  useEffect(() => {
    if (!open) return;
    setLunchIni(LUNCH.ini);
    const r: AdjRow[] = [];
    [...day.atividades].sort((a, b) => a.ordem - b.ordem).forEach(a => {
      const p = projects.find(x => x.id === a.projetoId);
      a.blocos.forEach(b => r.push({ actId: a.id, nome: p?.nome ?? '?', desc: a.descricao, ini: b.ini, fim: b.fim }));
    });
    setRows(r);
  }, [open, day, projects]);

  const d = new Date(dayKey + 'T12:00:00');
  const carga = cargaMin(d, day);
  const lunchFim = lunchIni + 60;
  const customLunch = { ini: lunchIni, fim: lunchFim };

  const sorted = [...rows].sort((a, b) => a.ini - b.ini);
  const total = rows.reduce((s, r) => s + Math.max(0, r.fim - r.ini), 0);

  const errs = new Set<string>();
  sorted.forEach((r, i) => {
    if (r.fim <= r.ini) errs.add('Bloco com término antes do início.');
    if (r.ini < JORNADA[1].ini) errs.add('Bloco antes das 08:00.');
    if (r.ini < lunchFim && r.fim > lunchIni) errs.add(`Bloco sobrepõe o almoço (${hm(lunchIni)}–${hm(lunchFim)}).`);
    if (i > 0 && r.ini < sorted[i - 1].fim) errs.add('Blocos sobrepostos.');
  });
  const hasErr = errs.size > 0;

  const setField = (origIdx: number, field: 'ini' | 'fim', val: string) => {
    const [h, m] = val.split(':').map(Number);
    const min = Math.round((h * 60 + m) / GRAN) * GRAN;
    setRows(prev => prev.map((r, i) => i === origIdx ? { ...r, [field]: min } : r));
  };

  const handleRedistribute = () => {
    const { ok, error, result } = distributeActivities(day.atividades, d, day, customLunch);
    if (!ok) { alert(error); return; }
    const r: AdjRow[] = [];
    [...result].sort((a, b) => a.ordem - b.ordem).forEach(a => {
      const p = projects.find(x => x.id === a.projetoId);
      a.blocos.forEach(b => r.push({ actId: a.id, nome: p?.nome ?? '?', desc: a.descricao, ini: b.ini, fim: b.fim }));
    });
    setRows(r);
  };

  const handleSave = () => {
    if (hasErr) return;
    if (total !== carga && !confirm(`Total alocado (${durFmt(total)}) difere da carga (${durFmt(carga)}). Pode ser hora extra. Salvar?`)) return;
    const updated = day.atividades.map(a => {
      const aRows = rows.filter(r => r.actId === a.id).sort((x, y) => x.ini - y.ini);
      return aRows.length ? { ...a, blocos: aRows.map(r => ({ ini: r.ini, fim: r.fim })), ajustada: true } : a;
    });
    onSave(updated);
  };

  const timeInput = (val: number, onChange: (v: string) => void) => (
    <input type="time" step={1800} value={hm(val)} onChange={e => onChange(e.target.value)}
      style={{ fontFamily: 'monospace', fontSize: 12, padding: '4px 6px', background: '#1a1a1a', border: '1px solid #3a3a3a', borderRadius: 6, color: '#e0e0e0', width: '100%' }} />
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Ajustar horas · {DOW_FULL[(d.getDay() + 6) % 7]} {fmtShort(d)}</DialogTitle>
      <DialogContent sx={{ pt: '8px !important' }}>
        {/* Lunch time picker */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, p: 1.25, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 1.5, border: '1px solid', borderColor: 'divider' }}>
          <Typography sx={{ fontSize: 12, color: 'text.secondary', flexShrink: 0 }}>Horário do almoço:</Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {LUNCH_OPTIONS.map(opt => (
              <Button key={opt.ini} size="small" variant={lunchIni === opt.ini ? 'contained' : 'outlined'}
                color={lunchIni === opt.ini ? 'primary' : 'inherit'}
                onClick={() => setLunchIni(opt.ini)}
                sx={{ fontSize: 11, py: 0.3, px: 1, minWidth: 0 }}>
                {opt.label}
              </Button>
            ))}
          </Box>
          <Button size="small" variant="outlined" color="primary" onClick={handleRedistribute}
            sx={{ fontSize: 11, py: 0.3, ml: 'auto', whiteSpace: 'nowrap' }}>
            Redistribuir
          </Button>
        </Box>

        <Typography sx={{ fontSize: 12, color: 'text.secondary', mb: 1.5 }}>
          Passos de 30 min. Almoço ({hm(lunchIni)}–{hm(lunchFim)}) bloqueado.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {sorted.map((r, i) => {
            const origIdx = rows.indexOf(r);
            const showLunch = r.ini >= lunchFim && (i === 0 || sorted[i - 1].ini < lunchFim);
            const hasRowErr = r.fim <= r.ini || r.ini < JORNADA[1].ini || (r.ini < lunchFim && r.fim > lunchIni) || (i > 0 && r.ini < sorted[i - 1].fim);
            return (
              <Box key={origIdx}>
                {showLunch && (
                  <Box sx={{ textAlign: 'center', fontSize: 11, color: 'text.disabled', py: 0.5, mb: 0.75, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 1 }}>
                    Almoço · {hm(lunchIni)} – {hm(lunchFim)}
                  </Box>
                )}
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 88px auto 88px 52px', gap: 1, alignItems: 'center', p: 1, border: '1px solid', borderColor: hasRowErr ? 'error.main' : 'divider', borderRadius: 1.5, bgcolor: hasRowErr ? 'rgba(220,38,38,0.06)' : 'transparent' }}>
                  <Box sx={{ overflow: 'hidden' }}>
                    <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.primary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.nome}</Typography>
                    <Typography sx={{ fontSize: 10, color: 'text.disabled', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.desc}</Typography>
                  </Box>
                  {timeInput(r.ini, v => setField(origIdx, 'ini', v))}
                  <Typography sx={{ fontSize: 11, color: 'text.disabled', textAlign: 'center' }}>→</Typography>
                  {timeInput(r.fim, v => setField(origIdx, 'fim', v))}
                  <Typography sx={{ fontSize: 11, color: 'text.secondary', textAlign: 'right', fontFamily: 'monospace' }}>
                    {durFmt(Math.max(0, r.fim - r.ini))}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: 12, color: total !== carga ? 'warning.main' : 'text.secondary' }}>Total alocado</Typography>
          <Typography sx={{ fontSize: 13, fontFamily: 'monospace', color: total !== carga ? 'warning.main' : 'success.main', fontWeight: 700 }}>
            {durFmt(total)} / {durFmt(carga)} {total !== carga ? '⚠' : '✓'}
          </Typography>
        </Box>
        {[...errs].map((e, i) => <Alert key={i} severity="error" sx={{ mt: 1, fontSize: 11 }}>{e}</Alert>)}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">Cancelar</Button>
        <Button variant="contained" disabled={hasErr} onClick={handleSave}>Salvar ajustes</Button>
      </DialogActions>
    </Dialog>
  );
}

// ─── History Modal ────────────────────────────────────────────────────────────
function HistoryModal({ open, userName, onClose }: {
  open: boolean; userName: string; onClose: () => void;
}) {
  const [entries, setEntries] = useState<ApontHistoryEntry[]>([]);

  useEffect(() => {
    if (open) {
      setEntries(
        loadHistory(userName).sort((a, b) => b.exportedAt.localeCompare(a.exportedAt))
      );
    }
  }, [open, userName]);

  const handleDelete = (id: string) => {
    if (!confirm('Excluir esta entrada do histórico?')) return;
    deleteHistoryById(id);
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const handleDownloadExcel = async (entry: ApontHistoryEntry) => {
    const monday = new Date(entry.mondayISO + 'T12:00:00');
    const w = { week: entry.weekNum, year: entry.weekYear };
    const rows = buildExcelRows(monday, entry.daysSnapshot, entry.profile, w, entry.projectsSnapshot);
    if (rows.length <= 1) { alert('Esta entrada não tem blocos distribuídos.'); return; }
    const fname = `Apontamento de Horas - Semana ${entry.weekNum} - ${entry.profile.nome} - ${entry.weekYear}`;
    await writeExcel(rows, fname);
  };

  const handleDownloadJSON = (entry: ApontHistoryEntry) => {
    const data = { weekKey: entry.weekKey, exportedAt: entry.exportedAt, profile: entry.profile, days: entry.daysSnapshot };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Apontamento_S${entry.weekNum}_${entry.weekYear}_${entry.profile.nome.replace(/\s+/g, '')}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  };

  const btnSx = { p: 0.75, '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' } };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <HistoryRoundedIcon sx={{ fontSize: 20, color: 'primary.main' }} />
        Histórico de Exportações
        <Box component="span" sx={{ ml: 'auto', fontSize: 11, fontWeight: 700, bgcolor: 'primary.main', color: '#1a1a1a', px: 1, py: 0.25, borderRadius: 1 }}>
          {entries.length}
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 0 }}>
        {entries.length === 0 ? (
          <Typography sx={{ color: 'text.disabled', fontSize: 13, textAlign: 'center', py: 5 }}>
            Nenhuma exportação registrada ainda.<br />
            <span style={{ fontSize: 11 }}>As exportações aparecem aqui automaticamente ao clicar em "Exportar Excel".</span>
          </Typography>
        ) : (
          <Box>
            {entries.map((entry, i) => (
              <Box key={entry.id} sx={{
                display: 'flex', alignItems: 'center', gap: 1,
                px: 2.5, py: 1.5,
                borderBottom: i < entries.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' },
              }}>
                <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: 'rgba(255,197,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <TableChartRoundedIcon sx={{ fontSize: 17, color: 'primary.main' }} />
                </Box>
                <Box sx={{ flex: 1, overflow: 'hidden', ml: 0.5 }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 600, color: 'text.primary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {entry.weekLabel}
                  </Typography>
                  <Typography sx={{ fontSize: 11, color: 'text.disabled' }}>
                    {new Date(entry.exportedAt).toLocaleString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    {' · '}{entry.profile.nome}
                  </Typography>
                </Box>
                <Tooltip title="Baixar Excel (.xlsx)">
                  <IconButton size="small" onClick={() => handleDownloadExcel(entry)} sx={btnSx}>
                    <FileDownloadRoundedIcon sx={{ fontSize: 17, color: 'success.main' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Baixar dados em JSON">
                  <IconButton size="small" onClick={() => handleDownloadJSON(entry)} sx={btnSx}>
                    <CodeRoundedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Excluir do histórico">
                  <IconButton size="small" onClick={() => handleDelete(entry.id)} sx={{ ...btnSx, '&:hover': { bgcolor: 'rgba(220,38,38,0.1)' } }}>
                    <DeleteRoundedIcon sx={{ fontSize: 16, color: 'error.main' }} />
                  </IconButton>
                </Tooltip>
              </Box>
            ))}
          </Box>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 2.5 }}>
        <Typography sx={{ flex: 1, fontSize: 11, color: 'text.disabled' }}>
          Exportações com o mesmo conteúdo atualizam a data em vez de criar duplicatas.
        </Typography>
        <Button onClick={onClose} color="inherit">Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}

// ─── Activity Form ────────────────────────────────────────────────────────────
function ActivityForm({ projects, initial, onSave, onCancel }: {
  projects: ApontProject[]; initial?: Atividade;
  onSave: (projetoId: number, descricao: string, peso: number) => void;
  onCancel: () => void;
}) {
  const activeProjs = projects.filter(p => p.ativo || p.id === initial?.projetoId);
  const [projetoId, setProjetoId] = useState(initial?.projetoId ?? activeProjs[0]?.id ?? 0);
  const [descricao, setDescricao] = useState(initial?.descricao ?? '');
  const [peso, setPeso] = useState(initial?.peso ?? 1);

  const handleSave = () => {
    if (!projetoId) { alert('Selecione um projeto.'); return; }
    if (!descricao.trim()) { alert('A descrição é obrigatória — vira a coluna Observação do Excel.'); return; }
    if (!(peso > 0)) { alert('O peso deve ser maior que zero.'); return; }
    onSave(projetoId, descricao.trim(), peso);
  };

  const infoTip = (title: string) => (
    <Tooltip title={title} placement="top">
      <InfoOutlinedIcon sx={{ fontSize: 12, color: 'text.disabled', cursor: 'help', flexShrink: 0 }} />
    </Tooltip>
  );
  const fsm = { '& .MuiInputLabel-root': { fontSize: 11 }, '& .MuiInputBase-input': { fontSize: 12 } };

  return (
    <Paper sx={{ p: 1.25, border: '1px solid', borderColor: 'primary.main', bgcolor: 'rgba(255,197,0,0.03)', display: 'flex', flexDirection: 'column', gap: 1.25 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <FormControl fullWidth size="small" sx={fsm}>
          <InputLabel sx={{ fontSize: 11 }}>Projeto</InputLabel>
          <Select label="Projeto" value={projetoId} onChange={e => setProjetoId(Number(e.target.value))}
            sx={{ fontSize: 12 }}>
            {activeProjs.map(p => <MenuItem key={p.id} value={p.id} sx={{ fontSize: 12 }}>{p.nome}{p.ativo ? '' : ' (inativo)'}</MenuItem>)}
          </Select>
        </FormControl>
        {infoTip('Projeto que receberá o apontamento no Excel.')}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
        <TextField label="Descrição" size="small" fullWidth multiline rows={1}
          value={descricao} onChange={e => setDescricao(e.target.value)} autoFocus
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSave(); } }}
          sx={fsm} />
        <Box sx={{ mt: 1 }}>{infoTip('Vira a coluna Observação no Excel. Descreva a atividade realizada.')}</Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <TextField label="Peso" type="number" size="small" value={peso}
          onChange={e => setPeso(Number(e.target.value))} inputProps={{ min: 0.5, step: 0.5 }}
          sx={{ width: 68, ...fsm }} />
        {infoTip('Peso relativo de tempo. Peso 2 recebe o dobro de blocos que peso 1.')}
      </Box>
      <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end' }}>
        <Button size="small" color="inherit" onClick={onCancel} sx={{ fontSize: 11, py: 0.3 }}>Cancelar</Button>
        <Button size="small" variant="contained" onClick={handleSave} sx={{ fontSize: 11, py: 0.3 }}>{initial ? 'Salvar' : 'Adicionar'}</Button>
      </Box>
    </Paper>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function ApontamentoHoras() {
  const [state, setState] = useState<ApontState>(() => loadApontState());
  const [monday, setMonday] = useState<Date>(() => mondayOf(new Date()));
  const [editing, setEditing] = useState<{ dayKey: string; actId: number | null } | null>(null);
  const [snack, setSnack] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [dayTypeKey, setDayTypeKey] = useState<string | null>(null);
  const [adjustKey, setAdjustKey] = useState<string | null>(null);

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }, [state]);

  // Auto-mark Brazilian national holidays on first visit to a week
  // Only triggers when the day key doesn't yet exist in state (never touched by user)
  useEffect(() => {
    const wd = weekDates(monday);
    const years = new Set(wd.map(d => d.getFullYear()));
    const holidays = new Set<string>();
    years.forEach(y => brazilianHolidays(y).forEach(k => holidays.add(k)));
    setState(prev => {
      let changed = false;
      const newDays = { ...prev.days };
      wd.forEach(d => {
        const key = fmtKey(d);
        if (holidays.has(key) && !prev.days[key]) {
          newDays[key] = { tipo: 'FERIADO', atividades: [] };
          changed = true;
        }
      });
      return changed ? { ...prev, days: newDays } : prev;
    });
  }, [monday]); // eslint-disable-line react-hooks/exhaustive-deps

  const toast = (msg: string) => setSnack(msg);
  const dates = weekDates(monday);
  const todayKey = fmtKey(new Date());
  const w = isoWeek(monday);
  const isDirty = (() => { const exp = state.exports[wkKey(monday)]; return exp ? exp !== weekHash(monday, state.days) : false; })();

  const projById = (id: number) => state.projects.find(p => p.id === id);

  const updateDay = (key: string, updater: (d: DayData) => DayData) => {
    setState(prev => ({ ...prev, days: { ...prev.days, [key]: updater(getDay(prev.days, key)) } }));
  };

  // ── Navigation
  const shiftWeek = (n: number) => { setEditing(null); setMonday(d => addDays(d, n * 7)); };
  const goToday = () => { setEditing(null); setMonday(mondayOf(new Date())); };

  // ── Distribution
  const distributeDaySafe = (key: string, dateObj: Date) => {
    const day = getDay(state.days, key);
    if (day.atividades.some(a => a.ajustada) && !confirm('Este dia tem ajustes manuais. Redistribuir descarta os ajustes. Continuar?')) return;
    const { ok, error, result } = distributeActivities(day.atividades, dateObj, day);
    if (!ok) { alert(error); return; }
    updateDay(key, () => ({ ...day, atividades: result }));
    toast('Dia distribuído.');
  };

  const distributeWeek = () => {
    const hasManual = dates.some(d => getDay(state.days, fmtKey(d)).atividades.some(a => a.ajustada));
    if (hasManual && !confirm('Há dias com ajustes manuais. Redistribuir descarta os ajustes. Continuar?')) return;
    const newDays = { ...state.days };
    let ok = true;
    dates.forEach(d => {
      const key = fmtKey(d);
      const day = getDay(newDays, key);
      if (TIPOS_OFF.includes(day.tipo) || !day.atividades.length) return;
      const { ok: dayOk, error, result } = distributeActivities(day.atividades, d, day);
      if (!dayOk) { alert(error); ok = false; return; }
      newDays[key] = { ...day, atividades: result };
    });
    setState(prev => ({ ...prev, days: newDays }));
    if (ok) toast('Semana distribuída.');
  };

  // ── Copy prev week
  const copyPrevWeek = () => {
    const prev = addDays(monday, -7);
    let copied = 0;
    let nextId = state.nextActId;
    const newDays = { ...state.days };
    for (let i = 0; i < 5; i++) {
      const srcKey = fmtKey(addDays(prev, i));
      const dstKey = fmtKey(addDays(monday, i));
      const src = newDays[srcKey];
      const dst = getDay(newDays, dstKey);
      if (!src?.atividades.length || dst.atividades.length) continue;
      newDays[dstKey] = { ...dst, atividades: src.atividades.map(a => ({ ...a, id: nextId++, blocos: [], ajustada: false })) };
      copied += src.atividades.length;
    }
    setState(prev => ({ ...prev, days: newDays, nextActId: nextId }));
    toast(copied ? `${copied} atividade(s) copiada(s). Revise e distribua.` : 'Nada para copiar.');
  };

  // ── Activity CRUD
  const addActivity = (key: string, projetoId: number, descricao: string, peso: number) => {
    setState(prev => {
      const day = getDay(prev.days, key);
      const newAct: Atividade = { id: prev.nextActId, projetoId, descricao, peso, ordem: day.atividades.length, blocos: [], ajustada: false };
      return { ...prev, nextActId: prev.nextActId + 1, days: { ...prev.days, [key]: { ...day, atividades: [...day.atividades.map(a => ({ ...a, blocos: [], ajustada: false })), newAct] } } };
    });
    setEditing(null);
  };

  const editActivity = (key: string, actId: number, projetoId: number, descricao: string, peso: number) => {
    updateDay(key, day => ({
      ...day,
      atividades: day.atividades.map(a =>
        a.id === actId ? { ...a, projetoId, descricao, peso, blocos: [], ajustada: false } : { ...a, blocos: [], ajustada: false }
      ),
    }));
    setEditing(null);
  };

  const deleteActivity = (key: string, actId: number) => {
    updateDay(key, day => ({
      ...day,
      atividades: day.atividades.filter(a => a.id !== actId)
        .sort((a, b) => a.ordem - b.ordem)
        .map((a, i) => ({ ...a, ordem: i, blocos: [], ajustada: false })),
    }));
  };

  const duplicateActivity = (key: string, actId: number) => {
    setState(prev => {
      const day = getDay(prev.days, key);
      const a = day.atividades.find(x => x.id === actId);
      if (!a) return prev;
      const newAct: Atividade = { ...a, id: prev.nextActId, ordem: day.atividades.length, blocos: [], ajustada: false };
      return { ...prev, nextActId: prev.nextActId + 1, days: { ...prev.days, [key]: { ...day, atividades: [...day.atividades.map(x => ({ ...x, blocos: [], ajustada: false })), newAct] } } };
    });
  };

  const moveActivity = (key: string, actId: number, dir: -1 | 1) => {
    updateDay(key, day => {
      const sorted = [...day.atividades].sort((a, b) => a.ordem - b.ordem);
      const i = sorted.findIndex(a => a.id === actId);
      const j = i + dir;
      if (j < 0 || j >= sorted.length) return day;
      [sorted[i].ordem, sorted[j].ordem] = [sorted[j].ordem, sorted[i].ordem];
      return { ...day, atividades: sorted.map(a => ({ ...a, blocos: [], ajustada: false })) };
    });
  };

  // ── Profile / Projects
  const saveProfile = (p: ApontProfile) => { setState(prev => ({ ...prev, profile: p })); setProfileOpen(false); toast('Perfil salvo.'); };
  const addProject = (nome: string) => setState(prev => ({ ...prev, projects: [...prev.projects, { id: prev.nextProjId, nome, ativo: true }], nextProjId: prev.nextProjId + 1 }));
  const toggleProject = (id: number) => setState(prev => ({ ...prev, projects: prev.projects.map(p => p.id === id ? { ...p, ativo: !p.ativo } : p) }));

  // ── Day type
  const saveDayType = (key: string, tipo: DayTipo, cargaCustom?: number) => {
    const day = getDay(state.days, key);
    if (TIPOS_OFF.includes(tipo) && day.atividades.length && !confirm(`Marcar como ${TIPO_LABEL[tipo]} remove as atividades do dia. Continuar?`)) return;
    updateDay(key, () => ({
      tipo, cargaCustom,
      atividades: TIPOS_OFF.includes(tipo) ? [] : day.atividades.map(a => ({ ...a, blocos: [], ajustada: false })),
    }));
    setDayTypeKey(null);
  };

  // ── Adjust
  const saveAdjust = (key: string, updated: Atividade[]) => {
    updateDay(key, day => ({ ...day, atividades: updated }));
    setAdjustKey(null);
    toast('Ajustes salvos.');
  };

  // ── Export Excel + save to history
  const exportExcel = async () => {
    // Auto-distribute any day in 'rascunho' state (has activities but no blocks yet)
    let workingDays = { ...state.days };
    let didAutoDistribute = false;
    const distErrors: string[] = [];
    dates.forEach((d, i) => {
      const key = fmtKey(d);
      const day = getDay(workingDays, key);
      if (TIPOS_OFF.includes(day.tipo) || !day.atividades.length) return;
      const { cls } = dayStatus(day);
      if (cls !== 'rascunho') return; // already distributed or manually adjusted — leave it
      const { ok, error: distErr, result } = distributeActivities(day.atividades, d, day);
      if (!ok) { distErrors.push(`${DOW_SHORT[i]} ${fmtShort(d)}: ${distErr ?? 'Erro'}`); return; }
      workingDays[key] = { ...day, atividades: result };
      didAutoDistribute = true;
    });
    if (distErrors.length) {
      alert('Não foi possível distribuir automaticamente:\n\n' + distErrors.join('\n'));
      return;
    }
    if (didAutoDistribute) {
      setState(prev => ({ ...prev, days: workingDays }));
      toast('Distribuição automática aplicada antes de exportar.');
    }

    // Warn about completely empty days (no activities at all)
    const vazios: string[] = [];
    dates.forEach((d, i) => {
      const day = getDay(workingDays, fmtKey(d));
      if (TIPOS_OFF.includes(day.tipo)) return;
      if (!day.atividades.length) vazios.push(`${DOW_SHORT[i]} ${fmtShort(d)} (sem atividades)`);
    });
    if (vazios.length && !confirm(`Atenção — dias sem atividades:\n\n${vazios.join('\n')}\n\nExportar mesmo assim?`)) return;

    const rows = buildExcelRows(monday, workingDays, state.profile, w, state.projects);
    if (rows.length === 1) { alert('Nada a exportar: a semana não tem blocos distribuídos.'); return; }

    const fname = `Apontamento de Horas - Semana ${w.week} - ${state.profile.nome} - ${w.year}`;
    await writeExcel(rows, fname);

    // Build days snapshot using the (possibly auto-distributed) workingDays
    const daysSnapshot: Record<string, DayData> = {};
    dates.forEach(d => { const k = fmtKey(d); daysSnapshot[k] = getDay(workingDays, k); });

    const hash = weekHash(monday, workingDays);
    const mondayISO = fmtKey(monday);
    const weekLabel = `Semana ${w.week} · ${fmtShort(dates[0])}–${fmtBR(dates[4])}`;

    const entry: ApontHistoryEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      userName: state.profile.nome,
      weekKey: wkKey(monday),
      weekNum: w.week,
      weekYear: w.year,
      mondayISO,
      weekLabel,
      exportedAt: new Date().toISOString(),
      contentHash: hash,
      daysSnapshot,
      projectsSnapshot: state.projects,
      profile: state.profile,
    };
    upsertHistoryEntry(entry);

    setState(prev => ({ ...prev, exports: { ...prev.exports, [wkKey(monday)]: hash } }));
    toast(`Exportado: ${fname}.xlsx · salvo no histórico.`);
  };

  // ── Render
  const adjustDay = adjustKey ? getDay(state.days, adjustKey) : null;
  const dayTypeDay = dayTypeKey ? getDay(state.days, dayTypeKey) : null;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>

      {/* Top bar */}
      <Box sx={{ px: 2.5, py: 1.5, borderBottom: '1px solid', borderColor: 'divider', flexShrink: 0, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1.5, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton size="small" onClick={() => shiftWeek(-1)}><ChevronLeftRoundedIcon fontSize="small" /></IconButton>
          <Box sx={{ px: 1.5, minWidth: 210, textAlign: 'center' }}>
            <Typography sx={{ fontSize: 15, fontWeight: 700, letterSpacing: 0.3 }}>SEMANA {w.week}</Typography>
            <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>{fmtShort(dates[0])} – {fmtBR(dates[4])}</Typography>
          </Box>
          <IconButton size="small" onClick={() => shiftWeek(1)}><ChevronRightRoundedIcon fontSize="small" /></IconButton>
          <Button size="small" color="inherit" onClick={goToday} sx={{ fontSize: 11, ml: 0.5 }}>Hoje</Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          {isDirty && (
            <Typography sx={{ fontSize: 11, color: 'warning.main', bgcolor: 'rgba(255,197,0,0.08)', px: 1.5, py: 0.5, borderRadius: 1, border: '1px solid rgba(255,197,0,0.2)' }}>
              ⚠ Semana alterada após exportação
            </Typography>
          )}
          <Button size="small" color="inherit" startIcon={<ContentCopyRoundedIcon sx={{ fontSize: '15px !important' }} />} onClick={copyPrevWeek}>Copiar semana anterior</Button>
          <Button size="small" color="inherit" startIcon={<FolderRoundedIcon sx={{ fontSize: '15px !important' }} />} onClick={() => setProjectsOpen(true)}>Projetos</Button>
          <Button size="small" color="inherit" startIcon={<PersonRoundedIcon sx={{ fontSize: '15px !important' }} />} onClick={() => setProfileOpen(true)}>Perfil</Button>
          <Button size="small" color="inherit" startIcon={<HistoryRoundedIcon sx={{ fontSize: '15px !important' }} />} onClick={() => setHistoryOpen(true)}>Histórico</Button>
          <Button size="small" variant="outlined" color="inherit" startIcon={<AutoFixHighRoundedIcon sx={{ fontSize: '15px !important' }} />} onClick={distributeWeek}>Distribuir semana</Button>
          <Button size="small" variant="contained" startIcon={<FileDownloadRoundedIcon sx={{ fontSize: '15px !important' }} />} onClick={exportExcel}>Exportar Excel</Button>
        </Box>
      </Box>

      {/* Week grid */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(220px, 1fr))', gap: 1.5, minWidth: 1160 }}>
          {dates.map((d, i) => {
            const key = fmtKey(d);
            const day = getDay(state.days, key);
            const off = TIPOS_OFF.includes(day.tipo);
            const carga = cargaMin(d, day);
            const { cls, label } = dayStatus(day);
            const aloc = day.atividades.reduce((s, a) => s + a.blocos.reduce((x, b) => x + b.fim - b.ini, 0), 0);
            const fimJ = off ? 18 * 60 : jornadaFim(d, day);
            const span = fimJ - JORNADA[1].ini;
            const pct = (m: number) => ((m - JORNADA[1].ini) / span * 100);
            const isToday = key === todayKey;
            const sorted = [...day.atividades].sort((a, b) => a.ordem - b.ordem);
            const hasDistributed = sorted.some(a => a.blocos.length > 0);
            const isEditingDay = editing?.dayKey === key;

            return (
              <Paper key={key} sx={{
                display: 'flex', flexDirection: 'column', minHeight: 380,
                borderColor: isToday ? 'primary.main' : 'divider',
                boxShadow: isToday ? '0 0 0 1px rgba(255,197,0,0.25)' : 'none',
                bgcolor: off ? 'rgba(255,255,255,0.01)' : 'background.paper',
              }}>
                {/* Day header */}
                <Box sx={{ px: 1.5, pt: 1.25, pb: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', mb: 0.75 }}>
                    <Typography sx={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: isToday ? 'primary.main' : 'text.primary' }}>
                      {DOW_SHORT[i]}
                    </Typography>
                    <Typography sx={{ fontSize: 11, color: 'text.disabled', fontFamily: 'monospace' }}>{fmtShort(d)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: off ? '#444' : STATUS_DOT[cls] }} />
                      <Typography sx={{ fontSize: 10.5, color: 'text.secondary' }}>{off ? TIPO_LABEL[day.tipo] : label}</Typography>
                    </Box>
                    {!off && (
                      <Typography sx={{ fontSize: 10.5, color: 'text.secondary', fontFamily: 'monospace' }}>
                        <Box component="span" sx={{ color: aloc > 0 && aloc === carga ? 'success.main' : 'text.primary', fontWeight: 700 }}>{durFmt(aloc)}</Box>
                        /{durFmt(carga)}
                      </Typography>
                    )}
                  </Box>
                  {!off && (
                    <Box>
                      <Box sx={{ height: 7, borderRadius: 1, bgcolor: '#2a2a2a', position: 'relative', overflow: 'hidden', border: '1px solid #333' }}>
                        {fimJ > LUNCH.ini && (
                          <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: `${pct(LUNCH.ini)}%`, width: `${pct(LUNCH.fim) - pct(LUNCH.ini)}%`, backgroundImage: 'repeating-linear-gradient(45deg, #3a3a3a 0 2px, transparent 2px 5px)' }} />
                        )}
                        {sorted.flatMap(a => a.blocos.map((b, bi) => {
                          const [, fg] = projColor(a.projetoId);
                          return <Box key={`${a.id}-${bi}`} sx={{ position: 'absolute', top: 0, bottom: 0, left: `${pct(b.ini)}%`, width: `${pct(b.fim) - pct(b.ini)}%`, bgcolor: fg, opacity: a.ajustada ? 1 : 0.72 }} />;
                        }))}
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.25 }}>
                        <Typography sx={{ fontSize: 8.5, color: '#555', fontFamily: 'monospace' }}>08:00</Typography>
                        <Typography sx={{ fontSize: 8.5, color: '#555', fontFamily: 'monospace' }}>{hm(fimJ)}</Typography>
                      </Box>
                    </Box>
                  )}
                </Box>

                {/* Day controls — right below progress bar, before activities */}
                <Box sx={{ px: 0.75, pt: 0.5, pb: 0.25, display: 'flex', gap: 0.5, borderBottom: '1px solid', borderColor: 'divider' }}>
                  <Button size="small" color="inherit" fullWidth sx={{ fontSize: 10, py: 0.4 }} onClick={() => setDayTypeKey(key)}>Tipo de dia</Button>
                  <Button size="small" color="inherit" fullWidth sx={{ fontSize: 10, py: 0.4 }} disabled={off || !sorted.length} onClick={() => distributeDaySafe(key, d)}>Distribuir</Button>
                  <Button size="small" color="inherit" fullWidth sx={{ fontSize: 10, py: 0.4 }} disabled={off || !hasDistributed} onClick={() => setAdjustKey(key)}>Ajustar</Button>
                </Box>

                {/* Day body */}
                <Box sx={{ flex: 1, p: 1, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                  {off ? (
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed', borderColor: 'divider', borderRadius: 1.5 }}>
                      <Typography sx={{ fontSize: 12, color: 'text.disabled', textAlign: 'center' }}>
                        {TIPO_LABEL[day.tipo]}<br /><span style={{ fontSize: 10 }}>sem apontamentos</span>
                      </Typography>
                    </Box>
                  ) : (
                    <>
                      {sorted.map((a, idx) => {
                        const p = projById(a.projetoId);
                        const [bg, fg] = projColor(a.projetoId);
                        if (isEditingDay && editing!.actId === a.id) {
                          return (
                            <ActivityForm key={a.id} projects={state.projects} initial={a}
                              onSave={(pId, desc, peso) => editActivity(key, a.id, pId, desc, peso)}
                              onCancel={() => setEditing(null)} />
                          );
                        }
                        return (
                          <Box key={a.id} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1.5, p: 1, bgcolor: 'rgba(255,255,255,0.02)', '&:hover .act-actions': { opacity: 1 } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 0.5, mb: 0.5 }}>
                              <Box sx={{ fontSize: 10.5, fontWeight: 700, px: 1, py: 0.25, borderRadius: 10, bgcolor: bg, color: fg, maxWidth: 130, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={p?.nome}>
                                {p?.nome ?? '?'}
                              </Box>
                              <Typography sx={{ fontSize: 10, color: 'rgba(255,197,0,0.7)', fontFamily: 'monospace', bgcolor: 'rgba(255,197,0,0.07)', px: 0.75, py: 0.2, borderRadius: 0.75, border: '1px solid rgba(255,197,0,0.12)' }}>
                                p{a.peso}
                              </Typography>
                            </Box>
                            <Typography sx={{ fontSize: 11.5, color: 'text.secondary', wordBreak: 'break-word', mb: a.blocos.length ? 0.5 : 0 }}>
                              {a.descricao}
                            </Typography>
                            {a.blocos.length > 0 && (
                              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.15 }}>
                                {a.blocos.map((b, bi) => (
                                  <Typography key={bi} sx={{ fontSize: 10.5, fontFamily: 'monospace', color: a.ajustada ? 'warning.main' : '#7EB3E0' }}>
                                    {hm(b.ini)} – {hm(b.fim)}
                                  </Typography>
                                ))}
                              </Box>
                            )}
                            <Box className="act-actions" sx={{ display: 'flex', gap: 0.25, mt: 0.75, opacity: 0, transition: 'opacity .12s' }}>
                              <Tooltip title="Mover para cima"><span>
                                <IconButton size="small" disabled={idx === 0} onClick={() => moveActivity(key, a.id, -1)} sx={{ p: 0.4 }}>
                                  <KeyboardArrowUpRoundedIcon sx={{ fontSize: 14 }} />
                                </IconButton>
                              </span></Tooltip>
                              <Tooltip title="Mover para baixo"><span>
                                <IconButton size="small" disabled={idx === sorted.length - 1} onClick={() => moveActivity(key, a.id, 1)} sx={{ p: 0.4 }}>
                                  <KeyboardArrowDownRoundedIcon sx={{ fontSize: 14 }} />
                                </IconButton>
                              </span></Tooltip>
                              <Tooltip title="Editar">
                                <IconButton size="small" onClick={() => setEditing({ dayKey: key, actId: a.id })} sx={{ p: 0.4 }}>
                                  <EditRoundedIcon sx={{ fontSize: 13 }} />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Duplicar">
                                <IconButton size="small" onClick={() => duplicateActivity(key, a.id)} sx={{ p: 0.4 }}>
                                  <ContentCopyRoundedIcon sx={{ fontSize: 13 }} />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Excluir">
                                <IconButton size="small" color="error" onClick={() => deleteActivity(key, a.id)} sx={{ p: 0.4 }}>
                                  <DeleteRoundedIcon sx={{ fontSize: 13 }} />
                                </IconButton>
                              </Tooltip>
                            </Box>
                          </Box>
                        );
                      })}

                      {isEditingDay && editing!.actId === null ? (
                        <ActivityForm projects={state.projects}
                          onSave={(pId, desc, peso) => addActivity(key, pId, desc, peso)}
                          onCancel={() => setEditing(null)} />
                      ) : (
                        <Button size="small" color="inherit"
                          startIcon={<AddRoundedIcon sx={{ fontSize: '15px !important' }} />}
                          onClick={() => setEditing({ dayKey: key, actId: null })}
                          sx={{ justifyContent: 'flex-start', fontSize: 11.5, color: 'text.disabled', border: '1px dashed', borderColor: 'divider', borderRadius: 1.5, py: 0.75, '&:hover': { borderColor: 'primary.main', color: 'primary.main', bgcolor: 'rgba(255,197,0,0.04)' } }}>
                          Atividade
                        </Button>
                      )}
                    </>
                  )}
                </Box>

              </Paper>
            );
          })}
        </Box>
      </Box>

      {/* Modals */}
      <ProfileModal open={profileOpen} profile={state.profile} onClose={() => setProfileOpen(false)} onSave={saveProfile} />
      <ProjectsModal open={projectsOpen} projects={state.projects} onClose={() => setProjectsOpen(false)} onAdd={addProject} onToggle={toggleProject} />
      <HistoryModal open={historyOpen} userName={state.profile.nome} onClose={() => setHistoryOpen(false)} />
      {dayTypeKey && dayTypeDay && (
        <DayTypeModal open={!!dayTypeKey} dayKey={dayTypeKey} tipo={dayTypeDay.tipo} cargaCustom={dayTypeDay.cargaCustom}
          onClose={() => setDayTypeKey(null)} onSave={(tipo, cargaCustom) => saveDayType(dayTypeKey, tipo, cargaCustom)} />
      )}
      {adjustKey && adjustDay && (
        <AdjustModal open={!!adjustKey} dayKey={adjustKey} day={adjustDay} projects={state.projects}
          onClose={() => setAdjustKey(null)} onSave={updated => saveAdjust(adjustKey, updated)} />
      )}

      <Snackbar open={!!snack} autoHideDuration={2800} onClose={() => setSnack(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} message={snack} />
    </Box>
  );
}
