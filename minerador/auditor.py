#!/usr/bin/env python3
"""
auditor.py — Auditoria criteriosa final do corpus de conhecimento.

Faz o que o reclassifier NÃO faz: análise no CORPO da seção (não só no heading).

Critérios (ordem de prioridade):
  1. REGRA DURA — JSON no corpo  → integracao (só lá pode haver JSON).
  2. Sinal forte de integração   → integracao (EWM/SAP/ERP/webservice/payload/EDI...).
  3. Conteúdo estrutural/proposta → INBOX (Sumário, Objetivo, proposta comercial, sem título).
  4. Roteamento semântico        → embedding + fuzzy (reusa reclassifier.rotear).
  5. Sem match confiável         → INBOX.

Uso:
    python auditor.py                # RELATÓRIO (não muta nada)
    python auditor.py --apply        # aplica: reescreve RAWs + INBOX limpo
    python auditor.py --triage-inbox # só dedup + categoriza o INBOX (relatório)
"""

import argparse
import json
import re
from collections import defaultdict
from pathlib import Path

from rapidfuzz import fuzz
from sentence_transformers import SentenceTransformer, util
from tqdm import tqdm

import reclassifier as rc

RAIZ_COFRE   = rc.RAIZ_COFRE
TOPICOS_JSON = rc.TOPICOS_JSON
INBOX_PATH   = rc.INBOX_PATH
RELATORIO_PATH = RAIZ_COFRE / "_AUDITORIA.md"

# ─── Critério 1: detecção de JSON no corpo ──────────────────────────────────────

def detectar_json(texto: str) -> bool:
    if re.search(r"```\s*json", texto, re.I):
        return True
    # template payload {{user}} / {{password}}
    if "{{" in texto and "}}" in texto and ":" in texto:
        return True
    # "campo": [ ou "campo": {  → início de array/objeto
    if re.search(r'"[^"\n]{1,40}"\s*:\s*[\[{]', texto):
        return True
    # >= 2 chaves no formato "campo":
    if len(re.findall(r'"[^"\n]{1,40}"\s*:', texto)) >= 2:
        return True
    # bloco { ... } com aspas e dois-pontos
    for m in re.finditer(r"\{[^{}]{0,3000}\}", texto, re.S):
        c = m.group(0)
        if c.count('"') >= 3 and ":" in c:
            return True
    return False

# ─── Guarda: infra / hardware → INBOX (infra não é tópico, decisão Raphael) ──────

_INFRA_EXACT = {
    "vpn", "servidor", "servidores", "infraestrutura", "responsabilidades", "hardware",
    "rede de dados", "rede elétrica", "rede eletrica",
    "estação de trabalho", "estacão de trabalho",
    "estações de trabalho", "estacoes de trabalho",
    "equipamentos", "arquitetura de hardware",
    "construir banco de dados", "construir o banco de dados",
    "iniciar serviço no mfc", "iniciar servico no mfc",
    "conexão e acesso remoto", "conexao e acesso remoto",
    "homologação", "homologacao",
    "execução de atividades no servidor novo", "execucao de atividades no servidor novo",
}
_INFRA_PREFIX = (
    "vpn ", "vpn e acesso", "acesso remoto", "infra de alimenta", "rede de dados",
    "rede elétrica", "rede eletrica", "especificação de hardware", "especificacao de hardware",
    "arquitetura de hardware", "requisitos de hardware", "requisitos – hardware",
    "itens incluídos no fornec", "itens incluidos no fornec", "servidor ", "servidores ",
    "servidor  ", "requisitos – servidor", "requisitos - servidor",
    "estação de trabalho", "estacão de trabalho",
    "estações de trabalho", "estacoes de trabalho",
    "especificações de hardware", "especificacoes de hardware",
    "base de equipamentos",
    "construir banco de dados",
    "iniciar servic",
    "execucao de atividades no servidor",
    "execução de atividades no servidor",
    "testes funcionais (novo server",
    "por que precisamos dessas permis",
    "falha na escrita de dados",
    "falha na leitura de dados",
)

def eh_infra(heading: str) -> bool:
    h = _norm_head(heading)
    if h in _INFRA_EXACT:
        return True
    return any(h.startswith(p) for p in _INFRA_PREFIX)

# ─── Override por nome-de-tópico (heading literal = nome do tópico) ──────────────
# Pin de alta precisão: heading exatamente "Conferência" → conferencia, etc.
# Corrige desempates ruins do embedding nos tópicos só-embedding.

_NOME_TOPICO = {
    # conferencia
    "conferência": "conferencia", "conferencia": "conferencia",
    # packing
    "packing": "packing", "embalagem": "packing",
    # packing-termolabil
    "packing termolábil": "packing-termolabil", "packing termolabil": "packing-termolabil",
    "packing fracionado e packing termolábil": "packing-termolabil",
    "packing fracionado e packing termolabil": "packing-termolabil",
    # sorter (genérico)
    "sorter": "sorter",
    "balança": "sorter", "balanca": "sorter",
    "orientação de indução": "sorter", "orientacao de inducao": "sorter",
    "inducción de volúmenes": "sorter", "induccion de volumenes": "sorter",
    # sorter-rejeito
    "rejeito": "sorter-rejeito",
    "rejeito do sorter": "sorter-rejeito", "rejeito no sorter": "sorter-rejeito",
    "rejeito sorter": "sorter-rejeito",
    "motivos de rejeito do sorter": "sorter-rejeito",
    "recirculação": "sorter-rejeito", "recirculacao": "sorter-rejeito",
    "recirculação de volumes no sorter": "sorter-rejeito",
    "recirculacao de volumes no sorter": "sorter-rejeito",
    "contingência do sorter": "sorter-rejeito", "contingencia do sorter": "sorter-rejeito",
    "contingência do sorter (ia)": "sorter-rejeito", "contingencia do sorter (ia)": "sorter-rejeito",
    "rampa de rejeito": "sorter-rejeito", "terminal de rejeito": "sorter-rejeito",
    "trata rejeito": "sorter-rejeito",
    "estação de rejeito no wcs": "sorter-rejeito", "estacao de rejeito no wcs": "sorter-rejeito",
    "tratativa de rejeito (no-read e cancelados)": "sorter-rejeito",
    # sorter-inducao
    "indução no sorter": "sorter-inducao", "inducao no sorter": "sorter-inducao",
    "indução volumes – expedição": "sorter-inducao",
    "inducao volumes – expedicao": "sorter-inducao",
    "área de stage para indução no sorter": "sorter-inducao",
    "area de stage para inducao no sorter": "sorter-inducao",
    # sorter-mapa-rota
    "mapa de rota": "sorter-mapa-rota",
    "mapa de sorter": "sorter-mapa-rota", "mapa do sorter": "sorter-mapa-rota",
    "mapa sorter": "sorter-mapa-rota", "sorter map": "sorter-mapa-rota",
    "funcionalidade de mapa de sorter no wcs": "sorter-mapa-rota",
    "funcionalidad de mapas del sorter en wcs": "sorter-mapa-rota",
    "funcionalidad del mapa del sorter en wcs": "sorter-mapa-rota",
    "rampas": "sorter-mapa-rota", "rampas do sorter": "sorter-mapa-rota",
    # paletizacao
    "fechamento do pallet": "paletizacao", "fechamento de pallet": "paletizacao",
    "fechamento do palete": "paletizacao", "fechamento de palete": "paletizacao",
    "gatilhos de fechamento de pallet": "paletizacao",
    "cubagem de pallet": "paletizacao",
    "cubagem de pallet (fora do escopo do projeto)": "paletizacao",
    "cubagem de pallet/routeiner": "paletizacao",
    "aloca pallet": "paletizacao",
    # cubagem
    "cubagem": "cubagem",
    # inventario
    "inventário": "inventario", "inventario": "inventario",
    "rastreabilidade do estoque": "inventario",
    "contagem das posições": "inventario", "contagem das posicoes": "inventario",
    # reabastecimento
    "reabastecimento": "reabastecimento", "replenishment": "reabastecimento",
    # shortpicking
    "shortpicking": "shortpicking", "short picking": "shortpicking",
    # picking-cart
    "picking": "picking-cart", "picking cart": "picking-cart", "picking map": "picking-cart",
    # picking-fullcase
    "picking full case":                "picking-fullcase",
    "picking fullcase":                 "picking-fullcase",
    "picking fullcase perigoso":        "picking-fullcase",
    "picking de caixas fullcase":       "picking-fullcase",
    "picking tunnel":                   "picking-fullcase",
    "picking túnel":                    "picking-fullcase",
    "picking tunnel – separação de full case": "picking-fullcase",
    "picking tunnel - separacao de full case": "picking-fullcase",
    "conceito – picking full case e tarefas": "picking-fullcase",
    "conceito - picking full case e tarefas": "picking-fullcase",
    # picking-pallet
    "picking pallet":                   "picking-pallet",
    "picking pallet direto":            "picking-pallet",
    "picking pallet exceção":           "picking-pallet",
    "picking pallet excecao":           "picking-pallet",
    # conferencia-manual
    "conferência manual":               "conferencia-manual",
    "conferencia manual":               "conferencia-manual",
    "conferência manual padrão":        "conferencia-manual",
    "conferencia manual padrao":        "conferencia-manual",
    "conferência manual (auditoria e clientes especiais)": "conferencia-manual",
    "conferencia manual (auditoria e clientes especiais)": "conferencia-manual",
    "conferência clientes especiais (kit sku)": "conferencia-manual",
    "conferencia clientes especiais (kit sku)": "conferencia-manual",
    # picking-pbl
    "pbl": "picking-pbl", "pick by light": "picking-pbl", "picking by light": "picking-pbl",
    "separação pbl": "picking-pbl", "separacao pbl": "picking-pbl",
    "pbl adicional": "picking-pbl", "consulta pbl": "picking-pbl",
    "botão led": "picking-pbl", "botao led": "picking-pbl",
    "flowrack": "picking-pbl", "flow rack": "picking-pbl",
    # put-to-wall
    "put to wall": "put-to-wall", "ptw": "put-to-wall", "put-to-wall": "put-to-wall",
    # ptm
    "ptm": "ptm", "put to monitor": "ptm", "put-to-monitor": "ptm",
    # ptl-alocacao
    "ptl": "ptl-alocacao", "put to light": "ptl-alocacao",
    "put to pallet": "ptl-alocacao", "put-to-pallet": "ptl-alocacao",
    "sinaleiros": "ptl-alocacao",
    # order-start
    "order start": "order-start",
    "priorização manual": "order-start", "priorizacao manual": "order-start",
    "contingência": "order-start", "contingencia": "order-start",
    "cancelamento de pedido": "order-start", "cancelamento de remessa": "order-start",
    "cancelacion del pedido": "order-start", "cancelación del pedido": "order-start",
    "cierre del palé": "order-start", "cierre del pale": "order-start",
    # recebimento-armazenagem
    "recebimento": "recebimento-armazenagem", "armazenagem": "recebimento-armazenagem",
    "crossdocking": "recebimento-armazenagem",
    "stage de pallets": "recebimento-armazenagem", "decanting": "recebimento-armazenagem",
    # integracao sub-tópicos (nomes exatos)
    "wmtord": "integracao-wms-erp", "wmtoco": "integracao-wms-erp",
    "wmcato": "integracao-wms-erp",
    "snap shot": "integracao-wcs-wms", "inbound sync": "integracao-wcs-wms",
    "pedidos (post)": "integracao-pedidos",
    "produto (post)": "integracao-cadastros",
    # integracao genérico
    "xml": "integracao", "yaml": "integracao", "csv": "integracao",
    # etiquetas
    "etiquetas": "etiquetas", "etiqueta": "etiquetas",
    "impressão": "etiquetas", "impressao": "etiquetas",
    # dashboards-relatorios
    "dashboard": "dashboards-relatorios", "dashboards": "dashboards-relatorios",
    "relatórios": "dashboards-relatorios", "relatorios": "dashboards-relatorios",
    "relatório": "dashboards-relatorios", "relatorio": "dashboards-relatorios",
    # cadastros-acessos
    "login": "cadastros-acessos", "usuários": "cadastros-acessos",
    "usuarios": "cadastros-acessos", "cadastro de usuários": "cadastros-acessos",
    "cadastros": "cadastros-acessos", "nível de acesso": "cadastros-acessos",
    "níveis de acesso": "cadastros-acessos",
    "obtenção do token": "cadastros-acessos", "obtencao do token": "cadastros-acessos",
}

# Prefixos de heading → tópico (complementa o exact lookup acima)
_NOME_PREFIX = (
    # picking-pbl — antes de picking-cart para capturar variações PBL
    ("separação pbl",        "picking-pbl"),
    ("separacao pbl",        "picking-pbl"),
    ("pick by light",        "picking-pbl"),
    ("picking by light",     "picking-pbl"),
    ("flowrack",             "picking-pbl"),
    ("flow rack",            "picking-pbl"),
    ("fracionados a (pbl",   "picking-pbl"),
    ("fracionados a2",       "picking-pbl"),
    ("fracionados a3",       "picking-pbl"),
    ("monitoramento de led", "picking-pbl"),
    ("ajuste no abastecimento do pbl", "picking-pbl"),
    # packing-termolabil — antes de genérico packing
    ("packing termolábil",                             "packing-termolabil"),
    ("packing termolabil",                             "packing-termolabil"),
    ("packing fracionado e packing termolábil",        "packing-termolabil"),
    ("packing fracionado e packing termolabil",        "packing-termolabil"),
    # picking-fullcase — antes de picking-cart
    ("picking full case",    "picking-fullcase"),
    ("picking fullcase",     "picking-fullcase"),
    ("picking tunnel",       "picking-fullcase"),
    ("picking túnel",        "picking-fullcase"),
    # picking-pallet — antes de picking-cart
    ("picking pallet",       "picking-pallet"),
    # picking-cart — todos "Picking X" que não se encaixarem acima
    ("picking",              "picking-cart"),
    # put-to-wall
    ("put to wall",          "put-to-wall"),
    ("put-to-wall",          "put-to-wall"),
    # ptm
    ("put to monitor",       "ptm"),
    ("put-to-monitor",       "ptm"),
    # paletizacao
    ("fechamento do pallet",                           "paletizacao"),
    ("fechamento de pallet",                           "paletizacao"),
    ("fechamento do palete",                           "paletizacao"),
    ("fechamento de palete",                           "paletizacao"),
    ("gatilhos de fechamento de pallet",               "paletizacao"),
    ("cubagem de pallet",                              "paletizacao"),
    ("aloca pallet",                                   "paletizacao"),
    # sorter sub-tópicos — antes das entradas genéricas de sorter
    ("rejeito do sorter",                              "sorter-rejeito"),
    ("rejeito no sorter",                              "sorter-rejeito"),
    ("rejeito sorter",                                 "sorter-rejeito"),
    ("motivos de rejeito do sorter",                   "sorter-rejeito"),
    ("contingência do sorter",                         "sorter-rejeito"),
    ("contingencia do sorter",                         "sorter-rejeito"),
    ("recirculação de volumes no sorter",              "sorter-rejeito"),
    ("recirculacao de volumes no sorter",              "sorter-rejeito"),
    ("tratativa de rejeito",                           "sorter-rejeito"),
    ("noread nas linhas",                              "sorter-rejeito"),
    ("rejeito –",                                      "sorter-rejeito"),
    ("rejeito -",                                      "sorter-rejeito"),
    ("indução no sorter",                              "sorter-inducao"),
    ("inducao no sorter",                              "sorter-inducao"),
    ("indução volumes – expedição",                    "sorter-inducao"),
    ("inducao volumes – expedicao",                    "sorter-inducao"),
    ("área de stage para indução no sorter",           "sorter-inducao"),
    ("area de stage para inducao no sorter",           "sorter-inducao"),
    ("especificação de volumes induzidos no sorter",   "sorter-inducao"),
    ("especificacao de volumes induzidos no sorter",   "sorter-inducao"),
    ("mapa de sorter",                                 "sorter-mapa-rota"),
    ("mapa do sorter",                                 "sorter-mapa-rota"),
    ("mapa sorter",                                    "sorter-mapa-rota"),
    ("funcionalidade de mapa de sorter",               "sorter-mapa-rota"),
    ("funcionalidad de mapas del sorter",              "sorter-mapa-rota"),
    ("rampas do sorter",                               "sorter-mapa-rota"),
    # sorter genérico
    ("fluxo de comunicação do equipamento",            "sorter"),
    ("fluxo de comunicacao do equipamento",            "sorter"),
    ("balanceamento entre rampas",                     "sorter"),
    ("balanceamento entre transportadoras",            "sorter"),
    ("regra de contingência para volumes em esteira",  "sorter"),
    ("status dos transportadores",                     "sorter"),
    # cubagem
    ("cubing intelligence",                            "cubagem"),
    ("fragility matrix",                               "cubagem"),
    ("matriz de fragilidade",                          "cubagem"),
    ("visualização das matrizes",                      "cubagem"),
    ("visualizacao das matrizes",                      "cubagem"),
    ("resultados do cubômetro",                        "cubagem"),
    ("resultados do cubometro",                        "cubagem"),
    ("configuração da matriz de fragilidade",          "cubagem"),
    ("volumes com ocorrência não bloqueiam",           "cubagem"),
    # inventario
    ("rastreabilidade",                                "inventario"),
    ("auditoria de estoque",                           "inventario"),
    ("controle de posições",                           "inventario"),
    # order-start
    ("nova priorização manual",                        "order-start"),
    ("nova priorizacao manual",                        "order-start"),
    ("contingência pallet",                            "order-start"),
    ("contingencia pallet",                            "order-start"),
    ("cadastro das cargas do dia",                     "order-start"),
    ("consulta de cargas do dia",                      "order-start"),
    ("consulta de cargas rejeitadas",                  "order-start"),
    ("registro de cargas rejeitadas",                  "order-start"),
    # etiquetas
    ("layout de impressão",                            "etiquetas"),
    ("layout de impressao",                            "etiquetas"),
    ("pesagem e etiquetagem",                          "etiquetas"),
    ("etiqueta de pallet",                             "etiquetas"),
    ("etiqueta de produto",                            "etiquetas"),
    # integracao sub-tópicos — antes do genérico integracao
    ("wmtord",                                         "integracao-wms-erp"),
    ("wmtoco",                                         "integracao-wms-erp"),
    ("wmcato",                                         "integracao-wms-erp"),
    ("idoc - criação",                                 "integracao-wms-erp"),
    ("idoc - criacao",                                 "integracao-wms-erp"),
    ("idoc - remessa",                                 "integracao-wms-erp"),
    ("cato - estorno",                                 "integracao-wms-erp"),
    ("snap shot",                                      "integracao-wcs-wms"),
    ("inbound sync",                                   "integracao-wcs-wms"),
    ("confirmação de separação – wcs",                 "integracao-wcs-wms"),
    ("confirmacao de separacao – wcs",                 "integracao-wcs-wms"),
    ("retorno reabastecimento",                        "integracao-wcs-wms"),
    ("retorno reinducao",                              "integracao-wcs-wms"),
    ("retorno reindução",                              "integracao-wcs-wms"),
    ("pedidos (post)",                                 "integracao-pedidos"),
    ("order (pedidos",                                 "integracao-pedidos"),
    ("interface orders",                               "integracao-pedidos"),
    ("waves (wms",                                     "integracao-pedidos"),
    ("importação de pedidos",                          "integracao-pedidos"),
    ("importacao de pedidos",                          "integracao-pedidos"),
    ("integração de remessa",                          "integracao-pedidos"),
    ("integracao de remessa",                          "integracao-pedidos"),
    ("produto (post)",                                 "integracao-cadastros"),
    ("cadastrar produtos",                             "integracao-cadastros"),
    ("deletar produtos",                               "integracao-cadastros"),
    ("integração de cadastro de produtos",             "integracao-cadastros"),
    ("integracao de cadastro de produtos",             "integracao-cadastros"),
    ("cadastrar lotes",                                "integracao-cadastros"),
    ("deletar lotes",                                  "integracao-cadastros"),
    ("cadastrar transportadoras",                      "integracao-cadastros"),
    ("deletar transportadoras",                        "integracao-cadastros"),
    # integracao genérico
    ("inicialização da comunicação",                   "integracao"),
    ("inicializacao da comunicacao",                   "integracao"),
    ("informações da mensagem de checkout",            "integracao"),
    ("tabela: ",                                       "integracao"),
    # conferencia-manual — antes de conferencia genérico
    ("conferência manual",                             "conferencia-manual"),
    ("conferencia manual",                             "conferencia-manual"),
    ("conferência clientes especiais",                 "conferencia-manual"),
    ("conferencia clientes especiais",                 "conferencia-manual"),
    # conferencia (automática / scanner)
    ("conferência peso",                               "conferencia"),
    ("conferencia peso",                               "conferencia"),
    ("parametrização de conferência",                  "conferencia"),
    ("parametrizacao de conferencia",                  "conferencia"),
    # dashboards-relatorios
    ("relatório conferência",                          "dashboards-relatorios"),
    ("relatorio conferencia",                          "dashboards-relatorios"),
    ("ocupação do armazém",                            "dashboards-relatorios"),
    ("producao por rampa",                             "dashboards-relatorios"),
    ("produção por rampa",                             "dashboards-relatorios"),
)

def override_nome(heading: str) -> str | None:
    h = _norm_head(heading)
    if h in _NOME_TOPICO:
        return _NOME_TOPICO[h]
    for prefix, slug in _NOME_PREFIX:
        if h.startswith(prefix):
            return slug
    return None

# ─── Critério 2: densidade de sinal de integração ──────────────────────────────

_INT_MARKERS = [
    r"via integra[çc][ãa]o", r"da integra[çc][ãa]o", r"de integra[çc][ãa]o",
    r"envi[oa][^.]{0,20}integra", r"receb[^.]{0,20}integra",
    r"\bEWM\b", r"\bSAP\b", r"\bERP\b", r"\bWMS\b",
    r"web\s?service", r"\bendpoint\b", r"\bAPI\b", r"payload",
    r"mensageria", r"\bEDI\b", r"layout de integra", r"mapeamento de campo",
    r"estrutura da mensagem", r"\bJSON\b", r"\bXML\b",
]
_INT_RE = [re.compile(p, re.I) for p in _INT_MARKERS]

def sinal_integracao(texto: str) -> int:
    return sum(1 for r in _INT_RE if r.search(texto))

# ─── Critério 3: boilerplate documental → DROP (apagar, sem rastro) ──────────────
# Decisão 23/06/2026: cabeçalho de documento não é conhecimento de processo.

_BP_EXACT = {
    "objetivo", "objetivos", "objective", "objetivo do documento", "objetivo deste documento",
    "objetivo do aditivo", "escopo", "escopo do documento", "escopo do projeto",
    "introdução", "introducao", "introduction", "sumário", "sumario", "índice", "indice",
    "glossário", "glossario", "definições e siglas", "definicoes e siglas",
    "lista de figuras", "lista de tabelas", "termo de aceite", "termo de aceitação",
    "critérios de aceite", "criterios de aceite", "critérios de aceitação",
    "requisitos de qualidade", "requisitos mínimos", "requisitos minimos",
    "considerações gerais", "consideracoes gerais",
    "aprovação", "aprovacao", "aprovação do documento", "aprovação da proposta",
    "assinatura", "assinaturas",
}
_BP_PREFIX = (
    "aprovação da proposta", "aprovacao da proposta", "aprobación de la propuesta",
    "aprobacion de la propuesta", "proposal approval", "proposal acceptance",
    "etapas da especificação", "etapas da especificacao", "pasos de la especificación",
    "histórico de revis", "historico de revis", "controle de versã", "controle de versa",
    "requisitos – servidor", "requisitos - servidor", "requisitos do servidor",
    "requisitos servidor",
)

def _norm_head(h: str) -> str:
    h = re.sub(r"^[\d.\s]+", "", h.strip().lower())   # tira numeração à esquerda
    return h.strip()

def eh_boilerplate(heading: str, texto: str) -> bool:
    h = _norm_head(heading)
    if h in _BP_EXACT:
        return True
    if any(h.startswith(p) for p in _BP_PREFIX):
        return True
    # proposta comercial pura no corpo
    if re.search(r"condi[çc][õo]es gerais de fornec|apresentamos.{0,40}proposta",
                 texto[:300], re.I):
        return True
    return False

# ─── Decisão final de roteamento ────────────────────────────────────────────────

LIMIAR_SINAL_INT = 4   # densidade mínima de marcadores p/ forçar integracao

def decidir(secao: dict, termos_dict, embeddings_dict, model) -> tuple[str | None, str]:
    """Retorna (slug | None, motivo).
    motivo == 'boilerplate' → DROP (apagar). slug None c/ outro motivo → INBOX."""
    texto   = secao["texto"]
    heading = secao["heading"]

    # 1 — Boilerplate documental → DROP
    if eh_boilerplate(heading, texto):
        return None, "boilerplate"

    # 2 — REGRA DURA: JSON só em integracao (heading pode refinar para sub-tópico)
    if detectar_json(texto):
        nome = override_nome(heading)
        if nome and nome.startswith("integracao"):
            return nome, "json-no-corpo"
        return "integracao", "json-no-corpo"

    # 3 — Sinal forte de integração no corpo
    if sinal_integracao(texto) >= LIMIAR_SINAL_INT:
        return "integracao", "sinal-integracao-forte"

    # 4 — Infra / hardware → INBOX (infra não virou tópico)
    if eh_infra(heading):
        return None, "infra-sem-topico"

    # 5 — Override por nome-de-tópico (heading literal = nome do tópico)
    nome = override_nome(heading)
    if nome:
        return nome, "nome-topico"

    # 6 — Roteamento semântico (reusa rotear do reclassifier)
    slug = rc.rotear(secao, termos_dict, embeddings_dict, model)
    if slug:
        return slug, "semantico"

    # 7 — sem match → INBOX
    return None, "sem-match"

# ─── Parser do INBOX (formato diferente do RAW) ─────────────────────────────────

_RE_INBOX = re.compile(
    r"(?:\[(?P<data>[\d-]+)\]|\[RECLASSIFY\])\s+\[(?P<proj>[^\]]+)\]\s+`(?P<arq>[^`]+)`\s*\n"
    r"Heading:\s*\*(?P<heading>.*?)\*\s*\|\s*(?:score:\s*(?P<score>[\d.]+)\s*\|\s*)?motivo:\s*(?P<motivo>[^\n]+)\n"
    r">\s*(?P<trecho>.*?)(?=\n\[|\Z)",
    re.S,
)

def parse_inbox() -> list[dict]:
    if not INBOX_PATH.exists():
        return []
    conteudo = INBOX_PATH.read_text(encoding="utf-8")
    out = []
    for m in _RE_INBOX.finditer(conteudo):
        out.append({
            "proj":    m.group("proj").strip(),
            "arq":     m.group("arq").strip(),
            "heading": m.group("heading").strip(),
            "motivo":  m.group("motivo").strip(),
            "trecho":  m.group("trecho").strip(),
        })
    return out

# ─── Carga de modelo + vocabulário ──────────────────────────────────────────────

def carregar(config):
    print("Carregando modelo e vocabulários...")
    model = SentenceTransformer("paraphrase-multilingual-MiniLM-L12-v2")
    termos_dict, embeddings_dict = {}, {}
    for slug in config:
        vpath = RAIZ_COFRE / "vocabulario" / f"{slug}.txt"
        if vpath.exists():
            t = rc.carregar_vocabulario(vpath)
            if t:
                termos_dict[slug] = t
                embeddings_dict[slug] = model.encode(t, convert_to_tensor=True)
    return model, termos_dict, embeddings_dict

# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true", help="aplica as mudanças")
    ap.add_argument("--triage-inbox", action="store_true", help="só categoriza o INBOX")
    args = ap.parse_args()

    config = json.loads(TOPICOS_JSON.read_text(encoding="utf-8"))["topicos"]

    # ===== Triagem do INBOX =====
    inbox = parse_inbox()
    vistos = set()
    inbox_unico = []
    for e in inbox:
        chave = (e["heading"], e["arq"], e["trecho"][:60])
        if chave not in vistos:
            vistos.add(chave)
            inbox_unico.append(e)

    print(f"\n{'='*55}")
    print(f"INBOX: {len(inbox)} entradas brutas → {len(inbox_unico)} únicas (dedup)")
    print(f"{'='*55}")
    por_motivo = defaultdict(int)
    for e in inbox_unico:
        por_motivo[e["motivo"]] += 1
    for motivo, n in sorted(por_motivo.items(), key=lambda x: -x[1]):
        print(f"  {motivo:25s}: {n:5d}")

    if args.triage_inbox:
        return

    # ===== Auditoria dos RAWs =====
    model, termos_dict, embeddings_dict = carregar(config)

    todas = []
    for slug in config:
        path = rc.raw_path_para(slug, config)
        if not path.exists():
            continue
        for s in rc.parse_raw(path):
            s["slug_atual"] = slug
            todas.append(s)

    # dedup
    vistas, unicas = set(), []
    for s in todas:
        chave = (s["heading"], s["origem_arquivo"], s["texto"][:80])
        if chave not in vistas:
            vistas.add(chave)
            unicas.append(s)
    n_dup = len(todas) - len(unicas)
    todas = unicas
    print(f"\nSeções nos RAWs: {len(todas)} (removidas {n_dup} duplicatas)\n")

    destinos = defaultdict(list)
    mov = defaultdict(int)          # (de, para) -> n
    inbox_novos = []
    json_violacoes = []             # (slug_atual, origem, heading)
    motivos = defaultdict(int)

    for s in tqdm(todas, desc="Auditando", unit="seç"):
        novo, motivo = decidir(s, termos_dict, embeddings_dict, model)
        motivos[motivo] += 1
        atual = s["slug_atual"]

        if motivo == "json-no-corpo" and atual != "integracao":
            json_violacoes.append((atual, s["origem_arquivo"], s["heading"]))

        if novo is None:
            inbox_novos.append((s, motivo))
        else:
            destinos[novo].append(s)
            if novo != atual:
                mov[(atual, novo)] += 1

    # ── Relatório ──
    linhas = ["# _AUDITORIA.md — Relatório da auditoria criteriosa\n"]
    linhas.append(f"Seções auditadas: **{len(todas)}**\n")
    linhas.append("## Decisões por critério\n")
    for m, n in sorted(motivos.items(), key=lambda x: -x[1]):
        linhas.append(f"- `{m}`: {n}")
    linhas.append("\n## Distribuição final por tópico\n")
    for slug in config:
        linhas.append(f"- {slug}: {len(destinos.get(slug, []))}")
    linhas.append(f"- **INBOX (novos)**: {len(inbox_novos)}")
    linhas.append("\n## Movimentações propostas (de → para)\n")
    for (de, para), n in sorted(mov.items(), key=lambda x: -x[1]):
        linhas.append(f"- {de} → **{para}**: {n}")
    linhas.append(f"\n## VIOLAÇÕES DA REGRA JSON (JSON fora de integracao): {len(json_violacoes)}\n")
    for atual, origem, heading in json_violacoes[:60]:
        linhas.append(f"- [{atual}] *{heading[:50]}* — `{origem}`")
    if len(json_violacoes) > 60:
        linhas.append(f"- ... +{len(json_violacoes)-60} mais")

    print("\n".join(linhas[:80]))

    if not args.apply:
        RELATORIO_PATH.write_text("\n".join(linhas), encoding="utf-8")
        print(f"\n[RELATÓRIO salvo em {RELATORIO_PATH.name}] — nada foi alterado. Rode --apply para aplicar.")
        return

    # ── Aplicar ──
    print("\nReescrevendo RAWs...")
    slugs_afetados = set(destinos) | {s["slug_atual"] for s in todas}
    for slug in slugs_afetados:
        path = rc.raw_path_para(slug, config)
        rc.garantir_raw(path, slug)
        secoes = destinos.get(slug, [])
        with path.open("w", encoding="utf-8") as f:
            f.write(f"# {config[slug]['sub']}.RAW — Evidência Bruta\n\n")
            f.write("<!-- APPEND-ONLY — gerado pelo minerador | auditado -->\n")
            for s in secoes:
                f.write(f"\n{s['raw_block']}\n")
        print(f"  {slug:20s}: {len(secoes):4d} seções")

    # INBOX limpo: dedup do antigo + novos da auditoria
    print("\nReescrevendo INBOX (deduplicado)...")
    with INBOX_PATH.open("w", encoding="utf-8") as f:
        f.write("# _INBOX_REVISAR.md — Quarentena (auditado)\n\n")
        f.write("> Matches sem tópico confiável + conteúdo estrutural. Revisão manual.\n\n")
        for s, motivo in inbox_novos:
            trecho = s["texto"][:200].replace("\n", " ")
            f.write(f"\n[AUDIT:{motivo}] [{s['origem_proj']}] `{s['origem_arquivo']}`  \n")
            f.write(f"Heading: *{s['heading']}* | de: {s['slug_atual']}  \n")
            f.write(f"> {trecho}...\n")
    print(f"  INBOX: {len(inbox_novos)} entradas (era {len(inbox)} brutas)")
    print("\nAuditoria aplicada.")


if __name__ == "__main__":
    main()
