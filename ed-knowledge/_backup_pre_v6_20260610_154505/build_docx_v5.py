#!/usr/bin/env python3
"""
build_docx_v5.py — Motor de geração de ES (Especificação de Software) no padrão Invent.

Transforma o conteúdo aprovado pelo Especialista Documentador em arquivo .docx
usando ES_PLACEHOLDER_v5.docx como template de design.

USO:
    python build_docx_v5.py input.json

FORMATO DO JSON DE ENTRADA:
    {
        "meta": {
            "projeto":  "Nome do Projeto",
            "codigo":   "WCS-2026-001",
            "fase":     "ES",
            "revisao":  "01"
        },
        "capa": {
            "nome_responsavel":        "João Silva",
            "email":                   "joao@invent.com",
            "departamento":            "Engenharia de Software",
            "telefone":                "(51) 99999-9999",
            "data_revisao":            "10/06/2026",
            "descricao_revisao":       "Emissão inicial",
            "responsavel_revisao":     "João Silva",
            "nome_cliente":            "Lojas Renner",
            "data_aprovacao":          "10/06/2026"
        },
        "capitulos": [
            {"nivel": 1, "titulo": "Objetivo do documento", "conteudo": "Texto..."},
            {"nivel": 2, "titulo": "Escopo",                "conteudo": "Texto..."},
            {"nivel": 3, "titulo": "Definições",            "conteudo": "Texto..."},
            {"tipo": "tabela",
             "headers": ["Campo", "Descrição", "Valor"],
             "rows":    [["g1", "Cliente", "Renner"]]},
            {"tipo": "json_block",
             "linhas": ["{", "  \"campo\": \"valor\"", "}"]},
            {"tipo": "warning",
             "texto": "[OBS INTERNA]: Pendente de validação com o cliente."}
        ]
    }

ESTILOS APLICADOS:
    nivel 1/2/3   → estilos Ttulo1 / Ttulo2 / Ttulo3 do template
    texto simples → Tahoma sz=20, justificado (jc=both)
    tabela        → header FFC000 bold centralizado Tahoma sz=16,
                    linhas alternadas F5F5F5 / FFFFFF
    json_block    → fundo 1F1F1F, Consolas sz=16, cor CCCCCC
    warning       → fundo FFF3CD, Arial sz=20, indent 360

OUTPUT:
    ./output/{CODIGO} - {PROJETO} - Especificação de Software - Rev {REVISAO}.docx
    ex: I25.2934 - Barbecue - Especificação de Software - Rev 2.docx
    (pasta output/ criada no mesmo diretório do script se não existir)

ABORDAGEM:
    String surgery direta no XML interno do .docx (ZIP), sem reescrita via
    ElementTree, preservando todos os namespaces e atributos originais do Word.

DEPENDÊNCIAS: apenas stdlib (zipfile, json, re, shutil, pathlib)
"""

import json
import os
import re
import sys
import shutil
import zipfile
from pathlib import Path


# ─── Caminhos ─────────────────────────────────────────────────────────────────

SCRIPT_DIR  = Path(__file__).parent
TEMPLATE    = SCRIPT_DIR / 'ES_PLACEHOLDER_v5.docx'
OUTPUT_DIR  = SCRIPT_DIR / 'output'


# ─── Utilitários XML ──────────────────────────────────────────────────────────

def xe(text: str) -> str:
    """Escapa caracteres especiais XML."""
    return (str(text)
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;'))


def collapse_split_vars(xml: str) -> str:
    """
    Word às vezes fragmenta {{VARIAVEL}} em múltiplos runs ao digitar.
    Este passo remove tags XML intercaladas dentro de {{ ... }} para que
    o regex de substituição encontre o placeholder como string contígua.
    """
    def strip_tags(m):
        return re.sub(r'<[^>]+>', '', m.group(0))
    return re.sub(r'\{\{[^{}]{1,60}\}\}', strip_tags, xml)


def replace_vars(xml: str, variables: dict) -> str:
    """Substitui todos os {{CHAVE}} pelo valor correspondente."""
    xml = collapse_split_vars(xml)
    for key, val in variables.items():
        xml = xml.replace('{{' + key + '}}', xe(str(val) if val is not None else ''))
    return xml


# ─── Builders de XML do Word ──────────────────────────────────────────────────

def xml_heading(titulo: str, nivel: int) -> str:
    """Parágrafo com estilo Ttulo1/Ttulo2/Ttulo3."""
    style = f'Ttulo{nivel}'
    return (
        '<w:p>'
          f'<w:pPr><w:pStyle w:val="{style}"/></w:pPr>'
          f'<w:r><w:t xml:space="preserve">{xe(titulo)}</w:t></w:r>'
        '</w:p>'
    )


def xml_body(texto: str) -> str:
    """Parágrafo de corpo: Tahoma sz=20, justificado. Suporta \\n como quebra de linha."""
    rpr = (
        '<w:rPr>'
          '<w:rFonts w:ascii="Tahoma" w:hAnsi="Tahoma" w:cs="Tahoma"/>'
          '<w:sz w:val="20"/><w:szCs w:val="20"/>'
        '</w:rPr>'
    )
    ppr = (
        '<w:pPr>'
          '<w:jc w:val="both"/>'
          '<w:rPr>'
            '<w:rFonts w:ascii="Tahoma" w:hAnsi="Tahoma" w:cs="Tahoma"/>'
            '<w:sz w:val="20"/><w:szCs w:val="20"/>'
          '</w:rPr>'
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
    Tabela com:
    - Header: fundo FFC000, bold, centralizado, Tahoma sz=16
    - Linhas: alternadas F5F5F5 / FFFFFF, Tahoma sz=16
    - Bordas: simples CCCCCC em todos os lados
    """
    def cell(text, fill=None, bold=False, center=False):
        shd = (f'<w:shd w:val="clear" w:color="auto" w:fill="{fill}"/>'
               if fill else '')
        b   = '<w:b/><w:bCs/>' if bold else ''
        jc  = '<w:jc w:val="center"/>' if center else ''
        return (
            '<w:tc>'
              '<w:tcPr>'
                f'{shd}'
                '<w:tcBorders>'
                  '<w:top    w:val="single" w:sz="4" w:color="CCCCCC"/>'
                  '<w:left   w:val="single" w:sz="4" w:color="CCCCCC"/>'
                  '<w:bottom w:val="single" w:sz="4" w:color="CCCCCC"/>'
                  '<w:right  w:val="single" w:sz="4" w:color="CCCCCC"/>'
                '</w:tcBorders>'
              '</w:tcPr>'
              '<w:p>'
                f'<w:pPr>{jc}</w:pPr>'
                '<w:r>'
                  '<w:rPr>'
                    f'{b}'
                    '<w:rFonts w:ascii="Tahoma" w:hAnsi="Tahoma" w:cs="Tahoma"/>'
                    '<w:sz w:val="16"/><w:szCs w:val="16"/>'
                  '</w:rPr>'
                  f'<w:t xml:space="preserve">{xe(str(text))}</w:t>'
                '</w:r>'
              '</w:p>'
            '</w:tc>'
        )

    header_row = '<w:tr>' + ''.join(
        cell(h, fill='FFC000', bold=True, center=True) for h in headers
    ) + '</w:tr>'

    data_rows = []
    for i, row in enumerate(rows):
        fill = 'F5F5F5' if i % 2 == 0 else 'FFFFFF'
        data_rows.append(
            '<w:tr>' + ''.join(cell(v, fill=fill) for v in row) + '</w:tr>'
        )

    tbl_pr = (
        '<w:tblPr>'
          '<w:tblW w:w="0" w:type="auto"/>'
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
    return f'<w:tbl>{tbl_pr}{header_row}{"".join(data_rows)}</w:tbl>'


def xml_json_block(linhas: list) -> str:
    """Bloco de código: fundo 1F1F1F, Consolas sz=16, cor CCCCCC. Uma linha = um parágrafo."""
    parts = []
    for linha in linhas:
        parts.append(
            '<w:p>'
              '<w:pPr>'
                '<w:shd w:val="clear" w:color="auto" w:fill="1F1F1F"/>'
                '<w:rPr>'
                  '<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas" w:cs="Consolas"/>'
                  '<w:color w:val="CCCCCC"/>'
                  '<w:sz w:val="16"/><w:szCs w:val="16"/>'
                '</w:rPr>'
              '</w:pPr>'
              '<w:r>'
                '<w:rPr>'
                  '<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas" w:cs="Consolas"/>'
                  '<w:color w:val="CCCCCC"/>'
                  '<w:sz w:val="16"/><w:szCs w:val="16"/>'
                '</w:rPr>'
                f'<w:t xml:space="preserve">{xe(linha)}</w:t>'
              '</w:r>'
            '</w:p>'
        )
    return ''.join(parts)


def xml_warning(texto: str) -> str:
    """Warning / OBS INTERNA: fundo FFF3CD, Arial sz=20, indent 360."""
    return (
        '<w:p>'
          '<w:pPr>'
            '<w:ind w:left="360"/>'
            '<w:shd w:val="clear" w:color="auto" w:fill="FFF3CD"/>'
            '<w:rPr>'
              '<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>'
              '<w:sz w:val="20"/><w:szCs w:val="20"/>'
            '</w:rPr>'
          '</w:pPr>'
          '<w:r>'
            '<w:rPr>'
              '<w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>'
              '<w:sz w:val="20"/><w:szCs w:val="20"/>'
            '</w:rPr>'
            f'<w:t xml:space="preserve">{xe(texto)}</w:t>'
          '</w:r>'
        '</w:p>'
    )


# ─── Montagem dos capítulos ────────────────────────────────────────────────────

def build_body_xml(capitulos: list) -> str:
    """
    Converte a lista de capítulos do JSON em XML do Word.
    Parágrafos de conteúdo separados por \\n\\n geram parágrafos distintos.
    """
    parts = []
    for cap in capitulos:
        nivel = cap.get('nivel')
        tipo  = cap.get('tipo')

        if nivel in (1, 2, 3):
            parts.append(xml_heading(cap.get('titulo', ''), nivel))
            conteudo = cap.get('conteudo', '').strip()
            if conteudo:
                for bloco in conteudo.split('\n\n'):
                    bloco = bloco.strip()
                    if bloco:
                        parts.append(xml_body(bloco))

        elif tipo == 'tabela':
            parts.append(xml_table(cap.get('headers', []), cap.get('rows', [])))

        elif tipo == 'json_block':
            parts.append(xml_json_block(cap.get('linhas', [])))

        elif tipo == 'warning':
            parts.append(xml_warning(cap.get('texto', '')))

        else:
            # Fallback: parágrafo de corpo com qualquer texto presente
            texto = (cap.get('conteudo') or cap.get('texto') or '').strip()
            if texto:
                parts.append(xml_body(texto))

    return ''.join(parts)


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) < 2:
        print('Uso: python build_docx_v5.py input.json')
        sys.exit(1)

    input_path = Path(sys.argv[1])
    if not input_path.exists():
        print(f'Erro: input não encontrado: {input_path}')
        sys.exit(1)

    if not TEMPLATE.exists():
        print(f'Erro: template não encontrado: {TEMPLATE}')
        sys.exit(1)

    # Carrega o JSON de entrada
    with open(input_path, encoding='utf-8') as f:
        data = json.load(f)

    meta      = data.get('meta', {})
    capa      = data.get('capa', {})
    capitulos = data.get('capitulos', [])

    # Dicionário de variáveis para substituição na capa
    variables = {
        'NOME_PROJETO':              meta.get('projeto', ''),
        'CODIGO_PROJETO':            meta.get('codigo', ''),
        'FASE':                      meta.get('fase', ''),
        'REVISAO':                   meta.get('revisao', ''),
        'NOME_RESPONSAVEL':          capa.get('nome_responsavel', ''),
        'EMAIL_RESPONSAVEL':         capa.get('email', ''),
        'DEPARTAMENTO_RESPONSAVEL':  capa.get('departamento', ''),
        'TELEFONE_RESPONSAVEL':      capa.get('telefone', ''),
        'DATA_REVISAO':              capa.get('data_revisao', ''),
        'DESCRICAO_REVISAO':         capa.get('descricao_revisao', ''),
        'RESPONSAVEL_REVISAO':       capa.get('responsavel_revisao', ''),
        'NOME_CLIENTE':              capa.get('nome_cliente', ''),
        'DATA_APROVACAO':            capa.get('data_aprovacao', ''),
    }

    # Nome do arquivo de saída — padrão Invent
    def safe_name(s): return re.sub(r'[\\/:*?"<>|]', '', str(s)).strip()
    codigo  = safe_name(meta.get('codigo',  'PROJ'))
    projeto = safe_name(meta.get('projeto', 'Projeto'))
    rev     = safe_name(meta.get('revisao', '01'))
    output_name = f'{codigo} - {projeto} - Especificação de Software - Rev {rev}.docx'

    OUTPUT_DIR.mkdir(exist_ok=True)
    output_path = OUTPUT_DIR / output_name
    tmp_path    = output_path.with_suffix('.tmp.docx')

    # Copia o template para não modificar o original
    shutil.copy2(TEMPLATE, tmp_path)

    # Lê todos os arquivos internos do .docx (ZIP)
    with zipfile.ZipFile(tmp_path, 'r') as zin:
        all_names = zin.namelist()
        files     = {name: zin.read(name) for name in all_names}

    # ── Processa word/document.xml ────────────────────────────────────────────
    doc_xml = files['word/document.xml'].decode('utf-8')

    # 1. Substitui {{VARIAVEIS}} na capa
    doc_xml = replace_vars(doc_xml, variables)

    # 2. Monta o XML dos capítulos
    body_xml = build_body_xml(capitulos)

    # 3. Localiza o <w:sectPr> final do body e insere o conteúdo antes dele.
    #    sectPr contém os atributos de página (margens, tamanho) — deve ficar no fim.
    sectpr_m = re.search(r'<w:sectPr[ >]', doc_xml)
    if sectpr_m:
        pos = sectpr_m.start()
        doc_xml = doc_xml[:pos] + body_xml + doc_xml[pos:]
    else:
        # Fallback: insere antes do fechamento do body
        doc_xml = doc_xml.replace('</w:body>', body_xml + '</w:body>', 1)

    files['word/document.xml'] = doc_xml.encode('utf-8')

    # ── Escreve o .docx final ─────────────────────────────────────────────────
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zout:
        for name, content in files.items():
            zout.writestr(name, content)

    tmp_path.unlink(missing_ok=True)

    # ── Relatório ─────────────────────────────────────────────────────────────
    pendentes = sorted(set(re.findall(r'\{\{[A-Z_]{2,60}\}\}', doc_xml)))

    print(f'\n  Documento gerado: {output_path}')
    print(f'  Capitulos inseridos: {len(capitulos)}')

    if pendentes:
        print(f'\n  Variaveis pendentes nao substituidas ({len(pendentes)}):')
        for v in pendentes:
            print(f'    {v}')
    else:
        print('  Todas as variaveis foram substituidas.')

    print()
    print('  Lembrete: abra o .docx no Word, pressione Ctrl+A -> F9')
    print('  e selecione "Atualizar o sumario inteiro" para gerar')
    print('  os numeros de pagina corretos.')


if __name__ == '__main__':
    main()
