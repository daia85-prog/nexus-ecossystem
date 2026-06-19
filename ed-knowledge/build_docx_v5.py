#!/usr/bin/env python3
"""
build_docx_v5.py - Motor de geracao de ES (Especificacao de Software) no padrao Invent.

ABORDAGEM (v7): ABRE o template binario ES_PLACEHOLDER_v7.docx e INJETA o corpo
gerado ENTRE as ancoras {{INICIO_CORPO}} e {{FIM_CORPO}}. NUNCA cria documento do
zero. Capa (paginas 1-2), cabecalho/rodape (logo + regua amarela) e pagina de
APROVACAO DA PROPOSTA pertencem ao template e sao PRESERVADOS intactos.

USO:
    python build_docx_v5.py input.json

FORMATO DO JSON DE ENTRADA:
    {
        "meta": {
            "projeto":  "Barbecue",
            "codigo":   "I25.2934",
            "fase":     "ES",
            "revisao":  "2"
        },
        "capa": {
            "nome_responsavel":    "Joao Silva",
            "email":               "joao@invent-corp.com",
            "departamento":        "Engenharia de Software",
            "telefone":            "+55 11 2833-0005",
            "data_revisao":        "10/06/2026",
            "descricao_revisao":   "Emissao inicial",
            "responsavel_revisao": "Joao Silva",
            "nome_cliente":        "Lojas Renner",
            "data_aprovacao":      "10/06/2026"
        },
        "capitulos": [
            {"nivel": 1, "titulo": "Objetivo do documento", "conteudo": "Texto..."},
            {"nivel": 2, "titulo": "Escopo",                "conteudo": "Texto..."},
            {"tipo": "tabela",
             "headers": ["Campo", "Tipo", "Obrigatorio", "Exemplo", "Descricao"],
             "rows":    [["nroPedido", "string", "Sim", "SP-001", "Numero do pedido"]]},
            {"tipo": "json_block",
             "linhas": ["{", "  \"nroPedido\": \"SP-001\",", "  \"qtde\": 547204", "}"]},
            {"tipo": "warning",
             "texto": "Esta etapa depende da validacao do cliente."}
        ]
    }

    IMPORTANTE: o JSON NAO deve conter capa, branding, cabecalho/rodape nem pagina
    de aprovacao -- esses elementos vivem no template e sao imutaveis.
    Os titulos NAO devem conter numero ("1. Objetivo") -- a numeracao (1., 1.1.)
    e automatica via o estilo Ttulo* (lista multinivel numId 2 do template).

ESTILOS APLICADOS (medidos no binario - Anexo A do plano de correcao):
    nivel 1/2/3/4/5 -> estilos Ttulo1..Ttulo5 (Arial, FFC000, negrito, sem regua,
                       numeracao automatica)
    texto simples   -> estilo Normal (Arial 12pt, justificado)
    tabela          -> estilo Tabelacomgrade; header FFC000 bold centralizado;
                       corpo branco Arial 10pt
    json_block      -> paragrafos fundo 1F1F1F, Consolas 8pt, com syntax highlight
                       (VS Code Dark+): chave 9CDCFE, string CE9178, numero B5CEA8,
                       true/false/null 569CD6, pontuacao CCCCCC
    warning         -> fundo FFF3CD, Arial 12pt, prefixo de aviso

FILTRO ANTI-VAZAMENTO:
    Blocos cujo texto contenha [OBS INTERNA] ou [ATENCAO CRITICA] NAO sao
    renderizados no documento do cliente. Sao listados no relatorio do console.

OUTPUT:
    ./output/{CODIGO} - {PROJETO} - Especificacao de Software - Rev {REVISAO}.docx
    ex: I25.2934 - Barbecue - Especificacao de Software - Rev 2.docx
    (pasta output/ criada no mesmo diretorio do script se nao existir)

DEPENDENCIAS: apenas stdlib (zipfile, json, re, shutil, pathlib)
"""

import json
import re
import sys
import shutil
import zipfile
from pathlib import Path


# --- Caminhos ----------------------------------------------------------------

SCRIPT_DIR = Path(__file__).parent
TEMPLATE   = SCRIPT_DIR / 'ES_PLACEHOLDER_v7.docx'
OUTPUT_DIR = SCRIPT_DIR / 'output'

ANCHOR_START = '{{INICIO_CORPO}}'
ANCHOR_END   = '{{FIM_CORPO}}'

# Blocos internos que nunca devem aparecer no documento do cliente.
INTERNAL_RE = re.compile(
    r'\[\s*(OBS\s+INTERNA|ATEN[CÇ][AÃ]O\s+CR[IÍ]TICA)\s*\]',
    re.IGNORECASE,
)


# --- Utilitarios XML ---------------------------------------------------------

def xe(text) -> str:
    """Escapa caracteres especiais XML."""
    return (str(text)
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;'))


def collapse_split_vars(xml: str) -> str:
    """
    O Word as vezes fragmenta {{VARIAVEL}} em multiplos runs. Dois casos:
    1) Tags XML dentro de {{...}} — remove as tags internas.
    2) O proprio {{ ou }} dividido entre runs — colapsa { <tags> { em {{ e } <tags> } em }}.
    """
    xml = re.sub(r'\{(<[^>]*>)+\{', '{{', xml)
    xml = re.sub(r'\}(<[^>]*>)+\}', '}}', xml)
    def strip_tags(m):
        return re.sub(r'<[^>]+>', '', m.group(0))
    return re.sub(r'\{\{[^{}]{1,60}\}\}', strip_tags, xml)


def replace_vars(xml: str, variables: dict) -> str:
    """Substitui todos os {{CHAVE}} pelo valor correspondente."""
    xml = collapse_split_vars(xml)
    for key, val in variables.items():
        xml = xml.replace('{{' + key + '}}', xe(str(val) if val is not None else ''))
    return xml


# --- Builders de XML do Word -------------------------------------------------

def xml_heading(titulo: str, nivel: int) -> str:
    """Paragrafo com estilo Ttulo1..Ttulo5. A numeracao e automatica (numId 2)."""
    nivel = max(1, min(5, int(nivel)))
    style = f'Ttulo{nivel}'
    return (
        '<w:p>'
          f'<w:pPr><w:pStyle w:val="{style}"/></w:pPr>'
          f'<w:r><w:t xml:space="preserve">{xe(titulo)}</w:t></w:r>'
        '</w:p>'
    )


def xml_body(texto: str) -> str:
    """Paragrafo de corpo: estilo Normal (Arial 12pt justificado). \\n vira quebra."""
    rpr = (
        '<w:rPr>'
          '<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>'
          '<w:sz w:val="24"/><w:szCs w:val="24"/>'
        '</w:rPr>'
    )
    ppr = (
        '<w:pPr>'
          '<w:pStyle w:val="Normal"/>'
          '<w:jc w:val="both"/>'
          '<w:spacing w:after="120"/>'
        '</w:pPr>'
    )
    runs = []
    for i, line in enumerate(texto.split('\n')):
        if i > 0:
            runs.append('<w:r><w:br/></w:r>')
        if line.strip():
            runs.append(f'<w:r>{rpr}<w:t xml:space="preserve">{xe(line)}</w:t></w:r>')
    return f'<w:p>{ppr}{"".join(runs)}</w:p>'


def xml_table(headers: list, rows: list) -> str:
    """
    Tabela padrao Invent:
    - estilo Tabelacomgrade (bordas finas)
    - cabecalho: fundo FFC000, negrito, centralizado, Arial 10pt
    - corpo: branco, Arial 10pt
    - larguras em DXA somando 8504 (largura util do corpo)
    """
    ncols = max(1, len(headers) if headers else (len(rows[0]) if rows else 1))
    total = 8504
    base  = total // ncols
    widths = [base] * ncols
    widths[-1] = total - base * (ncols - 1)

    def cell(text, width, fill=None, bold=False, center=False):
        shd = (f'<w:shd w:val="clear" w:color="auto" w:fill="{fill}"/>' if fill else '')
        b   = '<w:b/><w:bCs/>' if bold else ''
        jc  = '<w:jc w:val="center"/>' if center else '<w:jc w:val="left"/>'
        return (
            '<w:tc>'
              '<w:tcPr>'
                f'<w:tcW w:w="{width}" w:type="dxa"/>'
                f'{shd}'
                '<w:tcMar>'
                  '<w:top w:w="80" w:type="dxa"/><w:bottom w:w="80" w:type="dxa"/>'
                  '<w:left w:w="120" w:type="dxa"/><w:right w:w="120" w:type="dxa"/>'
                '</w:tcMar>'
              '</w:tcPr>'
              '<w:p>'
                f'<w:pPr><w:spacing w:after="0"/>{jc}</w:pPr>'
                '<w:r>'
                  '<w:rPr>'
                    f'{b}'
                    '<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>'
                    '<w:sz w:val="20"/><w:szCs w:val="20"/>'
                  '</w:rPr>'
                  f'<w:t xml:space="preserve">{xe(str(text))}</w:t>'
                '</w:r>'
              '</w:p>'
            '</w:tc>'
        )

    grid = '<w:tblGrid>' + ''.join(f'<w:gridCol w:w="{w}"/>' for w in widths) + '</w:tblGrid>'

    header_row = '<w:tr>' + ''.join(
        cell(h, widths[i], fill='FFC000', bold=True, center=True)
        for i, h in enumerate(headers)
    ) + '</w:tr>'

    data_rows = []
    for row in rows:
        cells = ''.join(
            cell(v, widths[i] if i < ncols else widths[-1])
            for i, v in enumerate(row)
        )
        data_rows.append('<w:tr>' + cells + '</w:tr>')

    tbl_pr = (
        '<w:tblPr>'
          '<w:tblStyle w:val="Tabelacomgrade"/>'
          f'<w:tblW w:w="{total}" w:type="dxa"/>'
          '<w:tblBorders>'
            '<w:top    w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>'
            '<w:left   w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>'
            '<w:bottom w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>'
            '<w:right  w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>'
            '<w:insideH w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>'
            '<w:insideV w:val="single" w:sz="4" w:space="0" w:color="CCCCCC"/>'
          '</w:tblBorders>'
        '</w:tblPr>'
    )
    return f'<w:tbl>{tbl_pr}{grid}{header_row}{"".join(data_rows)}</w:tbl>'


# --- Bloco JSON com syntax highlight (VS Code Dark+) -------------------------

JSON_TOKEN_RE = re.compile(
    r'(?P<ws>\s+)'
    r'|(?P<str>"(?:\\.|[^"\\])*"?)'
    r'|(?P<num>-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)'
    r'|(?P<kw>true|false|null)'
    r'|(?P<punct>[{}\[\],:])'
    r'|(?P<other>[^\s"{}\[\],:]+)'
)

JSON_COLORS = {
    'punct': 'CCCCCC',
    'num':   'B5CEA8',
    'kw':    '569CD6',
    'other': 'CCCCCC',
    'ws':    'CCCCCC',
}
JSON_KEY_COLOR = '9CDCFE'
JSON_STR_COLOR = 'CE9178'


def _json_runs(line: str):
    """Quebra uma linha JSON em (texto, cor) para syntax highlight."""
    runs = []
    for m in JSON_TOKEN_RE.finditer(line):
        kind = m.lastgroup
        text = m.group()
        if kind == 'str':
            rest = line[m.end():].lstrip()
            color = JSON_KEY_COLOR if rest.startswith(':') else JSON_STR_COLOR
        else:
            color = JSON_COLORS.get(kind, 'CCCCCC')
        runs.append((text, color))
    return runs


def xml_json_block(linhas: list) -> str:
    """Bloco de codigo: fundo 1F1F1F, Consolas 8pt, syntax highlight. 1 linha = 1 paragrafo."""
    base_rpr = (
        '<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas" w:cs="Consolas"/>'
        '<w:sz w:val="16"/><w:szCs w:val="16"/>'
    )
    parts = []
    for linha in linhas:
        ppr = (
            '<w:pPr>'
              '<w:shd w:val="clear" w:color="auto" w:fill="1F1F1F"/>'
              '<w:spacing w:after="0" w:line="210" w:lineRule="atLeast"/>'
              '<w:jc w:val="left"/>'
              f'<w:rPr>{base_rpr}<w:color w:val="CCCCCC"/></w:rPr>'
            '</w:pPr>'
        )
        runs = []
        for text, color in _json_runs(linha):
            runs.append(
                '<w:r>'
                  f'<w:rPr>{base_rpr}<w:color w:val="{color}"/></w:rPr>'
                  f'<w:t xml:space="preserve">{xe(text)}</w:t>'
                '</w:r>'
            )
        if not runs:
            runs.append(
                '<w:r>'
                  f'<w:rPr>{base_rpr}<w:color w:val="CCCCCC"/></w:rPr>'
                  '<w:t xml:space="preserve"> </w:t>'
                '</w:r>'
            )
        parts.append(f'<w:p>{ppr}{"".join(runs)}</w:p>')
    return ''.join(parts)


def xml_warning(texto: str) -> str:
    """Callout de negocio legitimo: fundo FFF3CD, Arial 12pt, indent 360, prefixo de aviso."""
    texto = texto.strip()
    if not texto.startswith('!'):
        texto = '! ' + texto
    return (
        '<w:p>'
          '<w:pPr>'
            '<w:ind w:left="360"/>'
            '<w:shd w:val="clear" w:color="auto" w:fill="FFF3CD"/>'
            '<w:spacing w:after="120"/>'
            '<w:rPr>'
              '<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>'
              '<w:sz w:val="24"/><w:szCs w:val="24"/>'
            '</w:rPr>'
          '</w:pPr>'
          '<w:r>'
            '<w:rPr>'
              '<w:b/><w:bCs/>'
              '<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>'
              '<w:sz w:val="24"/><w:szCs w:val="24"/>'
            '</w:rPr>'
            f'<w:t xml:space="preserve">{xe(texto)}</w:t>'
          '</w:r>'
        '</w:p>'
    )


def xml_page_break() -> str:
    """Paragrafo com quebra de pagina (usado antes da pagina de Aprovacao)."""
    return '<w:p><w:r><w:br w:type="page"/></w:r></w:p>'


# --- Montagem dos capitulos --------------------------------------------------

def build_body_xml(capitulos: list):
    """
    Converte a lista de capitulos do JSON em XML do Word.
    Retorna (xml, internas_removidas). Blocos internos sao filtrados e dedup.
    """
    parts = []
    internas = []
    last_warning = None

    for cap in capitulos:
        nivel = cap.get('nivel')
        tipo  = cap.get('tipo')

        if nivel in (1, 2, 3, 4, 5):
            parts.append(xml_heading(cap.get('titulo', ''), nivel))
            conteudo = (cap.get('conteudo') or '').strip()
            if conteudo:
                for bloco in conteudo.split('\n\n'):
                    bloco = bloco.strip()
                    if not bloco:
                        continue
                    if INTERNAL_RE.search(bloco):
                        internas.append(bloco)
                        continue
                    parts.append(xml_body(bloco))

        elif tipo == 'tabela':
            parts.append(xml_table(cap.get('headers', []), cap.get('rows', [])))

        elif tipo == 'json_block':
            parts.append(xml_json_block(cap.get('linhas', [])))

        elif tipo == 'warning':
            texto = (cap.get('texto') or '').strip()
            if INTERNAL_RE.search(texto):
                internas.append(texto)
                continue
            if texto and texto != last_warning:   # dedup consecutivo
                parts.append(xml_warning(texto))
                last_warning = texto

        else:
            texto = (cap.get('conteudo') or cap.get('texto') or '').strip()
            if not texto:
                continue
            if INTERNAL_RE.search(texto):
                internas.append(texto)
                continue
            parts.append(xml_body(texto))

    return ''.join(parts), internas


# --- Injecao por ancora ------------------------------------------------------

def _para_bounds(xml: str, marker: str):
    """Retorna (start, end) do paragrafo <w:p>...</w:p> que contem o marker."""
    idx = xml.find(marker)
    if idx == -1:
        return None
    start = max(xml.rfind('<w:p>', 0, idx), xml.rfind('<w:p ', 0, idx))
    end   = xml.find('</w:p>', idx)
    if start == -1 or end == -1:
        return None
    return start, end + len('</w:p>')


def inject_body(doc_xml: str, body_xml: str) -> str:
    """Substitui tudo entre as ancoras (inclusive) pelo corpo gerado."""
    doc_xml = collapse_split_vars(doc_xml)
    ini = _para_bounds(doc_xml, ANCHOR_START)
    fim = _para_bounds(doc_xml, ANCHOR_END)
    if not ini or not fim:
        sys.exit(f'Erro: ancoras {ANCHOR_START}/{ANCHOR_END} nao encontradas no template.')
    if not (ini[0] < fim[0]):
        sys.exit('Erro: ordem das ancoras invalida no template.')
    return doc_xml[:ini[0]] + body_xml + doc_xml[fim[1]:]


def _titulo1_headings(xml: str):
    """Lista (p_start, texto) de cada paragrafo com estilo Ttulo1."""
    out = []
    for m in re.finditer(r'<w:pStyle w:val="Ttulo1"\s*/>', xml):
        p_start = max(xml.rfind('<w:p ', 0, m.start()), xml.rfind('<w:p>', 0, m.start()))
        p_end   = xml.find('</w:p>', m.start())
        if p_start == -1 or p_end == -1:
            continue
        seg  = xml[p_start:p_end]
        text = ''.join(re.findall(r'<w:t[^>]*>(.*?)</w:t>', seg))
        out.append((p_start, text))
    return out


def extract_auth_block(doc_xml: str) -> str:
    """
    Extrai byte-a-byte o capitulo "Metodos de Autenticacao" do template: do
    paragrafo Ttulo1 com "Autentica" ate (exclusive) o proximo Ttulo1 com
    "Integra". Retorna '' se nao encontrar.
    """
    headings = _titulo1_headings(doc_xml)
    for i, (ps, txt) in enumerate(headings):
        if re.search(r'autentica', txt, re.IGNORECASE):
            for ps2, txt2 in headings[i + 1:]:
                if re.search(r'integra', txt2, re.IGNORECASE):
                    return doc_xml[ps:ps2]
            break
    return ''


def inject_auth_before_integrations(body_xml: str, auth_xml: str) -> str:
    """Insere auth_xml imediatamente antes do Ttulo1 de Integracoes no corpo."""
    for ps, txt in _titulo1_headings(body_xml):
        if re.search(r'integra', txt, re.IGNORECASE):
            return body_xml[:ps] + auth_xml + body_xml[ps:]
    return body_xml + auth_xml


def strip_auth_chapters(capitulos, auth_re, integr_re):
    """
    Remove do JSON o bloco inteiro de autenticacao: do capitulo cujo titulo casa
    com auth_re ate (exclusive) o capitulo de Integracoes. Elimina o heading E as
    tabelas/warnings/subtopicos filhos.

    NAO depende de 'nivel': o ED (IA) gera o JSON de forma nao-deterministica e o
    campo 'nivel' do heading de auth varia entre execucoes (as vezes ausente).
    Delimitar por titulo (autentica -> integra) e robusto a essa variacao.
    """
    start = next((i for i, c in enumerate(capitulos)
                  if auth_re.search(c.get('titulo') or '')), None)
    if start is None:
        return capitulos
    end = next((j for j in range(start + 1, len(capitulos))
                if integr_re.search(capitulos[j].get('titulo') or '')), None)
    if end is None:
        # Sem capitulo de Integracoes: remove ate o proximo heading nao-auth.
        end = next((j for j in range(start + 1, len(capitulos))
                    if (capitulos[j].get('titulo') or '')
                    and not auth_re.search(capitulos[j].get('titulo') or '')),
                   len(capitulos))
    return capitulos[:start] + capitulos[end:]


# --- Main --------------------------------------------------------------------

def main():
    if len(sys.argv) < 2:
        print('Uso: python build_docx_v5.py input.json')
        sys.exit(1)

    input_path = Path(sys.argv[1])
    if not input_path.exists():
        print(f'Erro: input nao encontrado: {input_path}')
        sys.exit(1)

    if not TEMPLATE.exists():
        print(f'Erro: template nao encontrado: {TEMPLATE}')
        sys.exit(1)

    with open(input_path, encoding='utf-8') as f:
        data = json.load(f)

    meta      = data.get('meta', {})
    capa      = data.get('capa', {})
    capitulos = data.get('capitulos', [])

    variables = {
        'NOME_PROJETO':              meta.get('projeto', ''),
        'CODIGO_PROJETO':            meta.get('codigo', ''),
        'FASE':                      meta.get('fase', 'ES'),
        'REVISAO':                   meta.get('revisao', '01'),
        'NOME_RESPONSAVEL':          capa.get('nome_responsavel', ''),
        'EMAIL_RESPONSAVEL':         capa.get('email', ''),
        'DEPARTAMENTO_RESPONSAVEL':  capa.get('departamento', ''),
        'TELEFONE_RESPONSAVEL':      capa.get('telefone', ''),
        'DATA_REVISAO':              capa.get('data_revisao', ''),
        'DESCRICAO_REVISAO':         capa.get('descricao_revisao', 'Emissao inicial'),
        'RESPONSAVEL_REVISAO':       capa.get('responsavel_revisao',
                                              capa.get('nome_responsavel', '')),
        'NOME_CLIENTE':              capa.get('nome_cliente', ''),
        'DATA_APROVACAO':            capa.get('data_aprovacao', ''),
    }

    # Nome do arquivo de saida - padrao Invent
    def safe_name(s):
        return re.sub(r'[\\/:*?"<>|]', '', str(s)).strip()
    codigo  = safe_name(meta.get('codigo',  'PROJ'))
    projeto = safe_name(meta.get('projeto', 'Projeto'))
    rev     = safe_name(meta.get('revisao', '01'))
    output_name = f'{codigo} - {projeto} - Especificacao de Software - Rev {rev}.docx'

    OUTPUT_DIR.mkdir(exist_ok=True)
    output_path = OUTPUT_DIR / output_name
    tmp_path    = output_path.with_suffix('.tmp.docx')

    shutil.copy2(TEMPLATE, tmp_path)

    with zipfile.ZipFile(tmp_path, 'r') as zin:
        all_names = zin.namelist()
        files     = {name: zin.read(name) for name in all_names}

    doc_xml = files['word/document.xml'].decode('utf-8')

    # 1. Preenche {{VARIAVEIS}} da capa, revisao e aprovacao.
    doc_xml = replace_vars(doc_xml, variables)

    # 2. Extrai o capitulo de Metodos de Autenticacao byte-a-byte do template
    #    (preserva formatacao exata do Word). Remove do JSON o BLOCO inteiro de
    #    autenticacao (heading + tabelas/warnings ate o capitulo de Integracoes)
    #    para nao duplicar nem deixar tabelas orfas coladas no capitulo anterior.
    AUTH_RE    = re.compile(r'autentica', re.IGNORECASE)
    INTEGR_RE  = re.compile(r'integra',   re.IGNORECASE)
    auth_block = extract_auth_block(doc_xml)
    capitulos  = strip_auth_chapters(capitulos, AUTH_RE, INTEGR_RE)

    # 3. Monta o corpo, injeta a auth antes de Integracoes e injeta tudo no template.
    body_xml, internas = build_body_xml(capitulos)
    if auth_block:
        body_xml = inject_auth_before_integrations(body_xml, auth_block)
    doc_xml = inject_body(doc_xml, body_xml)

    files['word/document.xml'] = doc_xml.encode('utf-8')

    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zout:
        for name, content in files.items():
            zout.writestr(name, content)

    tmp_path.unlink(missing_ok=True)

    # --- Relatorio ------------------------------------------------------------
    pendentes = sorted(set(re.findall(r'\{\{[A-Z0-9_]{2,60}\}\}', doc_xml)))

    print(f'\n  Documento gerado: {output_path}')
    print(f'  Capitulos inseridos: {len(capitulos)}')

    if internas:
        print(f'\n  Blocos internos removidos do .docx do cliente ({len(internas)}):')
        for t in internas:
            preview = re.sub(r'\s+', ' ', t)[:90]
            print(f'    - {preview}')

    if pendentes:
        print(f'\n  Variaveis pendentes nao substituidas ({len(pendentes)}):')
        for v in pendentes:
            print(f'    {v}')
    else:
        print('  Todas as variaveis da capa/aprovacao foram substituidas.')

    print()
    print('  Lembrete: abra o .docx no Word, pressione Ctrl+A -> F9')
    print('  e selecione "Atualizar o sumario inteiro" para gerar')
    print('  os numeros de pagina corretos.')


if __name__ == '__main__':
    main()
