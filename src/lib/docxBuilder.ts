import JSZip from 'jszip';

// ─── Input types ──────────────────────────────────────────────────────────────

export interface InputMeta {
  projeto: string;
  codigo: string;
  fase?: string;
  revisao?: string;
}

export interface InputCapa {
  nome_responsavel?: string;
  email?: string;
  departamento?: string;
  telefone?: string;
  data_revisao?: string;
  descricao_revisao?: string;
  responsavel_revisao?: string;
  nome_cliente?: string;
  data_aprovacao?: string;
}

export type Capitulo =
  | { nivel: 1 | 2 | 3 | 4 | 5; titulo: string; conteudo?: string }
  | { tipo: 'tabela'; headers: string[]; rows: string[][] }
  | { tipo: 'json_block'; linhas: string[] }
  | { tipo: 'warning'; texto: string }
  | { tipo?: string; conteudo?: string; texto?: string };

export interface InputJson {
  meta: InputMeta;
  capa: InputCapa;
  capitulos: Capitulo[];
}

export interface GenerateResult {
  blob: Blob;
  filename: string;
  internalBlocksRemoved: string[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

const ANCHOR_START = '{{INICIO_CORPO}}';
const ANCHOR_END   = '{{FIM_CORPO}}';
const INTERNAL_RE  = /\[\s*(OBS\s+INTERNA|ATEN[CÇ][AÃ]O\s+CR[IÍ]TICA)\s*\]/i;

// ─── XML utilities ────────────────────────────────────────────────────────────

function xe(text: unknown): string {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function collapseSplitVars(xml: string): string {
  return xml.replace(/\{\{[^{}]{1,60}\}\}/g, (m) => m.replace(/<[^>]+>/g, ''));
}

function replaceVars(xml: string, vars: Record<string, string>): string {
  xml = collapseSplitVars(xml);
  for (const [key, val] of Object.entries(vars)) {
    xml = xml.split('{{' + key + '}}').join(xe(val));
  }
  return xml;
}

// ─── XML builders ─────────────────────────────────────────────────────────────

function xmlHeading(titulo: string, nivel: number): string {
  const n = Math.max(1, Math.min(5, nivel));
  return (
    `<w:p><w:pPr><w:pStyle w:val="Ttulo${n}"/></w:pPr>` +
    `<w:r><w:t xml:space="preserve">${xe(titulo)}</w:t></w:r></w:p>`
  );
}

function xmlBody(texto: string): string {
  const rpr =
    '<w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>' +
    '<w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>';
  const ppr =
    '<w:pPr><w:pStyle w:val="Normal"/><w:jc w:val="both"/>' +
    '<w:spacing w:after="120"/></w:pPr>';
  const runs: string[] = [];
  texto.split('\n').forEach((line, i) => {
    if (i > 0) runs.push('<w:r><w:br/></w:r>');
    if (line.trim())
      runs.push(`<w:r>${rpr}<w:t xml:space="preserve">${xe(line)}</w:t></w:r>`);
  });
  return `<w:p>${ppr}${runs.join('')}</w:p>`;
}

function xmlCell(
  text: string, width: number,
  fill?: string, bold?: boolean, center?: boolean,
): string {
  const shd  = fill   ? `<w:shd w:val="clear" w:color="auto" w:fill="${fill}"/>` : '';
  const b    = bold   ? '<w:b/><w:bCs/>' : '';
  const jc   = center ? '<w:jc w:val="center"/>' : '<w:jc w:val="left"/>';
  return (
    `<w:tc><w:tcPr><w:tcW w:w="${width}" w:type="dxa"/>${shd}` +
    `<w:tcMar><w:top w:w="80" w:type="dxa"/><w:bottom w:w="80" w:type="dxa"/>` +
    `<w:left w:w="120" w:type="dxa"/><w:right w:w="120" w:type="dxa"/></w:tcMar></w:tcPr>` +
    `<w:p><w:pPr><w:spacing w:after="0"/>${jc}</w:pPr>` +
    `<w:r><w:rPr>${b}<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>` +
    `<w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr>` +
    `<w:t xml:space="preserve">${xe(text)}</w:t></w:r></w:p></w:tc>`
  );
}

function xmlTable(headers: string[], rows: string[][]): string {
  const ncols  = Math.max(1, headers.length || rows[0]?.length || 1);
  const total  = 8504;
  const base   = Math.floor(total / ncols);
  const widths = Array.from({ length: ncols }, (_, i) =>
    i < ncols - 1 ? base : total - base * (ncols - 1),
  );

  const grid      = '<w:tblGrid>' + widths.map(w => `<w:gridCol w:w="${w}"/>`).join('') + '</w:tblGrid>';
  const headerRow = '<w:tr>' + headers.map((h, i) => xmlCell(h, widths[i], 'FFC000', true, true)).join('') + '</w:tr>';
  const dataRows  = rows.map(row =>
    '<w:tr>' + row.map((v, i) => xmlCell(String(v ?? ''), widths[i] ?? widths[widths.length - 1])).join('') + '</w:tr>',
  ).join('');

  const tblPr =
    `<w:tblPr><w:tblStyle w:val="Tabelacomgrade"/><w:tblW w:w="${total}" w:type="dxa"/>` +
    `<w:tblBorders>` +
    `<w:top    w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>` +
    `<w:left   w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>` +
    `<w:bottom w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>` +
    `<w:right  w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>` +
    `<w:insideH w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>` +
    `<w:insideV w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>` +
    `</w:tblBorders></w:tblPr>`;

  return `<w:tbl>${tblPr}${grid}${headerRow}${dataRows}</w:tbl>`;
}

// JSON syntax highlight — VS Code Dark+ palette
const JSON_TOKEN_RE =
  /(\s+)|("(?:\\.|[^"\\])*"?)|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|(true|false|null)|([{}\[\],:])|([^\s"{}\[\],:]+)/g;

function jsonRuns(line: string): Array<[string, string]> {
  const re = new RegExp(JSON_TOKEN_RE.source, 'g');
  const runs: Array<[string, string]> = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(line)) !== null) {
    const text = m[0];
    let color: string;
    if      (m[1] !== undefined) { color = 'CCCCCC'; }
    else if (m[2] !== undefined) {
      const rest = line.slice(re.lastIndex).trimStart();
      color = rest.startsWith(':') ? '9CDCFE' : 'CE9178';
    }
    else if (m[3] !== undefined) { color = 'B5CEA8'; }
    else if (m[4] !== undefined) { color = '569CD6'; }
    else                         { color = 'CCCCCC'; }
    runs.push([text, color]);
  }
  return runs;
}

function xmlJsonBlock(linhas: string[]): string {
  const base =
    '<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas" w:cs="Consolas"/>' +
    '<w:sz w:val="16"/><w:szCs w:val="16"/>';
  return linhas.map(linha => {
    const ppr =
      `<w:pPr><w:shd w:val="clear" w:color="auto" w:fill="1F1F1F"/>` +
      `<w:spacing w:after="0" w:line="210" w:lineRule="atLeast"/>` +
      `<w:jc w:val="left"/><w:rPr>${base}<w:color w:val="CCCCCC"/></w:rPr></w:pPr>`;
    let runs = jsonRuns(linha)
      .map(([t, c]) =>
        `<w:r><w:rPr>${base}<w:color w:val="${c}"/></w:rPr>` +
        `<w:t xml:space="preserve">${xe(t)}</w:t></w:r>`,
      )
      .join('');
    if (!runs)
      runs = `<w:r><w:rPr>${base}<w:color w:val="CCCCCC"/></w:rPr><w:t xml:space="preserve"> </w:t></w:r>`;
    return `<w:p>${ppr}${runs}</w:p>`;
  }).join('');
}

function xmlWarning(texto: string): string {
  const t = texto.trim().startsWith('!') ? texto.trim() : '! ' + texto.trim();
  return (
    `<w:p><w:pPr><w:ind w:left="360"/>` +
    `<w:shd w:val="clear" w:color="auto" w:fill="FFF3CD"/>` +
    `<w:spacing w:after="120"/>` +
    `<w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>` +
    `<w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr></w:pPr>` +
    `<w:r><w:rPr><w:b/><w:bCs/>` +
    `<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>` +
    `<w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>` +
    `<w:t xml:space="preserve">${xe(t)}</w:t></w:r></w:p>`
  );
}

function xmlPageBreak(): string {
  return '<w:p><w:r><w:br w:type="page"/></w:r></w:p>';
}

// ─── Body builder ─────────────────────────────────────────────────────────────

function buildBodyXml(capitulos: Capitulo[]): { bodyXml: string; internalsRemoved: string[] } {
  const parts: string[]    = [];
  const internals: string[] = [];
  let lastWarning: string | null = null;

  for (const cap of capitulos) {
    const c = cap as Record<string, unknown>;
    const nivel = c.nivel as number | undefined;
    const tipo  = c.tipo  as string | undefined;

    if (nivel != null && [1, 2, 3, 4, 5].includes(nivel)) {
      parts.push(xmlHeading(String(c.titulo ?? ''), nivel));
      const conteudo = String(c.conteudo ?? '').trim();
      if (conteudo) {
        for (const bloco of conteudo.split('\n\n')) {
          const b = bloco.trim();
          if (!b) continue;
          if (INTERNAL_RE.test(b)) { internals.push(b); continue; }
          parts.push(xmlBody(b));
        }
      }
    } else if (tipo === 'tabela') {
      parts.push(xmlTable(c.headers as string[], c.rows as string[][]));
    } else if (tipo === 'json_block') {
      parts.push(xmlJsonBlock(c.linhas as string[]));
    } else if (tipo === 'warning') {
      const texto = String(c.texto ?? '').trim();
      if (INTERNAL_RE.test(texto)) { internals.push(texto); continue; }
      if (texto && texto !== lastWarning) {
        parts.push(xmlWarning(texto));
        lastWarning = texto;
      }
    } else {
      const texto = String(c.conteudo ?? c.texto ?? '').trim();
      if (!texto) continue;
      if (INTERNAL_RE.test(texto)) { internals.push(texto); continue; }
      parts.push(xmlBody(texto));
    }
  }

  return { bodyXml: parts.join(''), internalsRemoved: [...new Set(internals)] };
}

// ─── Injection ────────────────────────────────────────────────────────────────

function paraBounds(xml: string, marker: string): [number, number] | null {
  const idx = xml.indexOf(marker);
  if (idx === -1) return null;
  const s1    = xml.lastIndexOf('<w:p>', idx);
  const s2    = xml.lastIndexOf('<w:p ', idx);
  const start = Math.max(s1, s2);
  const end   = xml.indexOf('</w:p>', idx);
  if (start === -1 || end === -1) return null;
  return [start, end + '</w:p>'.length];
}

function injectBody(docXml: string, bodyXml: string): string {
  docXml = collapseSplitVars(docXml);
  const ini = paraBounds(docXml, ANCHOR_START);
  const fim = paraBounds(docXml, ANCHOR_END);
  if (!ini || !fim) throw new Error(`Âncoras ${ANCHOR_START}/${ANCHOR_END} não encontradas no template.`);
  if (ini[0] >= fim[0]) throw new Error('Ordem das âncoras inválida no template.');
  return docXml.slice(0, ini[0]) + bodyXml + xmlPageBreak() + docXml.slice(fim[1]);
}

// ─── Public API ───────────────────────────────────────────────────────────────

function safeName(s: string): string {
  return s.replace(/[\\/:*?"<>|]/g, '').trim();
}

export async function generateDocx(
  templateBytes: ArrayBuffer,
  inputJson: InputJson,
): Promise<GenerateResult> {
  const { meta, capa, capitulos } = inputJson;

  const variables: Record<string, string> = {
    NOME_PROJETO:             meta.projeto  ?? '',
    CODIGO_PROJETO:           meta.codigo   ?? '',
    FASE:                     meta.fase     ?? 'ES',
    REVISAO:                  meta.revisao  ?? '01',
    NOME_RESPONSAVEL:         capa.nome_responsavel  ?? '',
    EMAIL_RESPONSAVEL:        capa.email             ?? '',
    DEPARTAMENTO_RESPONSAVEL: capa.departamento      ?? '',
    TELEFONE_RESPONSAVEL:     capa.telefone          ?? '',
    DATA_REVISAO:             capa.data_revisao      ?? '',
    DESCRICAO_REVISAO:        capa.descricao_revisao ?? 'Emissão inicial',
    RESPONSAVEL_REVISAO:      capa.responsavel_revisao ?? capa.nome_responsavel ?? '',
    NOME_CLIENTE:             capa.nome_cliente    ?? '',
    DATA_APROVACAO:           capa.data_aprovacao  ?? '',
  };

  const codigo  = safeName(meta.codigo  ?? 'PROJ');
  const projeto = safeName(meta.projeto ?? 'Projeto');
  const rev     = safeName(meta.revisao ?? '01');
  const filename = `${codigo} - ${projeto} - Especificacao de Software - Rev ${rev}.docx`;

  const zip = await JSZip.loadAsync(templateBytes);
  const docFile = zip.file('word/document.xml');
  if (!docFile) throw new Error('Template inválido: word/document.xml não encontrado.');

  let docXml = await docFile.async('string');
  docXml = replaceVars(docXml, variables);

  const { bodyXml, internalsRemoved } = buildBodyXml(capitulos);
  docXml = injectBody(docXml, bodyXml);

  zip.file('word/document.xml', docXml);
  const blob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });

  return { blob, filename, internalBlocksRemoved: internalsRemoved };
}
