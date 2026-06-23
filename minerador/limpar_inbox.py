#!/usr/bin/env python3
"""
Limpa _inbox.jsonl removendo headings de infraestrutura de TI.
Mantém tudo que é WCS (AMR, sinaleiros, processos físicos, etc.).
"""
import json, re, unicodedata, pathlib, io, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

BASE  = pathlib.Path(r"c:\Users\Raphael.Caveagna\Desktop\Site Pessoal\nexus\corpus-conhecimento")
INBOX = BASE / "_inbox.jsonl"
MD    = BASE / "_INBOX_REVISAR.md"

# ── Normalização ─────────────────────────────────────────────────────────────
def norm(s: str) -> str:
    s = unicodedata.normalize("NFKD", s.lower().strip())
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"[_\-]+", " ", s)
    s = re.sub(r"\s+", " ", s)
    return s.strip()

# ── Headings EXATOS para remover (normalized) ────────────────────────────────
DROP_EXACT = {norm(h) for h in [
    # Lista do usuário
    "Especificação de Hardware",
    "Especificações de Hardware",
    "Servidores",
    "Servidor Aplicação + Banco de dados",
    "Servidor Aplicação + Banco de Dados",
    "Nuvem (Cloud)",
    "Servidor Nuvem (Cloud)",
    "Nuvem",
    "Requisitos",
    "Especificação de hardware de TI",
    "Especificações de hardware de TI",
    "Infra de alimentação rede elétrica trifásica",
    "Infra de alimentação rede elétrica trifásica",
    "VPN",
    "Rede de dados e infra de rede elétrica (Periféricos)",
    "Base de Equipamentos CLARO",
    # Adicionais claramente IT-infra
    "Equipamentos",
    "Arquitetura de Hardware",
    "Estação de Trabalho",
    "Estações de Trabalho",
    "Requisitos de Hardware",
    "Requisitos de Software",
    "Requisitos Mínimos",
    "Configuração de Hardware",
    "Configuração Mínima",
    "Servidor de Aplicação",
    "Servidor de Banco de Dados",
    "Banco de Dados",
    "Firewall",
    "Rede Elétrica",
    "Rede de Dados",
    "Infra de Rede",
    "Infraestrutura",
    "Infraestrutura de TI",
]}

# ── Prefixos para remover ────────────────────────────────────────────────────
DROP_PREFIX = (
    "servidor ",
    "servidores ",
    "especificacao de hardware",
    "especificacoes de hardware",
    "especificacao de software",      # requisitos de TI
    "infra de alimentacao",
    "infra de rede",
    "rede de dados e infra",
    "base de equipamentos",
    "arquitetura de hardware",
    "estacao de trabalho",
    "estacoes de trabalho",
    "configuracao de hardware",
    "configuracao minima",
    "requisitos de hardware",
    "requisitos minimos",
    "requisitos tecnicos",
    "banco de dados",
    "vpn ",
    "firewall",
    "rede eletrica",
    "infra eletrica",
    "alimentacao eletrica",
    "especificacoes tecnicas de hardware",
)

def should_drop(heading: str) -> bool:
    n = norm(heading)
    if n in DROP_EXACT:
        return True
    for p in DROP_PREFIX:
        if n.startswith(p):
            return True
    return False

# ── Leitura ──────────────────────────────────────────────────────────────────
entries = []
with open(INBOX, encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if line:
            entries.append(json.loads(line))

before = len(entries)

kept    = [e for e in entries if not should_drop(e.get("heading", ""))]
dropped = [e for e in entries if     should_drop(e.get("heading", ""))]

# ── Escrita do JSONL filtrado ────────────────────────────────────────────────
with open(INBOX, "w", encoding="utf-8") as f:
    for e in kept:
        f.write(json.dumps(e, ensure_ascii=False) + "\n")

# ── Regenera MD ──────────────────────────────────────────────────────────────
infra_kept  = [e for e in kept if e.get("motivo_inbox") == "infra-sem-topico"]
match_kept  = [e for e in kept if e.get("motivo_inbox") == "sem-match"]

lines = []
lines.append("# INBOX_REVISAR — Seções sem tópico definido\n\n")
lines.append(f"> **{len(kept)} seções** aguardando revisão  ")
lines.append(f"| {len(infra_kept)} infra-WCS  ")
lines.append(f"| {len(match_kept)} sem-match semântico\n\n")
lines.append("---\n\n")

for group_label, group in [
    ("## Infra / Hardware WCS (revisar — pode conter processos físicos)", infra_kept),
    ("## Sem correspondência semântica", match_kept),
]:
    if not group:
        continue
    lines.append(group_label + "\n\n")
    for e in group:
        heading = e.get("heading", "(sem heading)")
        arquivo = e.get("arquivo", "")
        projeto = e.get("projeto", "")
        texto   = e.get("texto", "")
        preview = texto[:250].replace("\n", " ").strip() if texto else ""
        lines.append(f"### {heading}\n")
        if projeto or arquivo:
            lines.append(f"*{projeto} — {arquivo}*\n\n")
        if preview:
            lines.append(f"{preview}…\n\n")
        lines.append("---\n\n")

with open(MD, "w", encoding="utf-8") as f:
    f.writelines(lines)

# ── Relatório ────────────────────────────────────────────────────────────────
print(f"Antes:    {before}")
print(f"Removidos (infra TI): {len(dropped)}")
print(f"Mantidos: {len(kept)}")
print(f"  infra-WCS:  {len(infra_kept)}")
print(f"  sem-match:  {len(match_kept)}")
print()
print("Headings removidos:")
seen = set()
for e in dropped:
    h = e.get("heading", "?")
    if h not in seen:
        seen.add(h)
        print(f"  DROP  {h}")
