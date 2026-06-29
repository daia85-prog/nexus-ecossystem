---
tags:
  - moc
  - wcs/sistema
  - mapa-de-conteudo
  - pendente/revisao-humana
data_criacao: 2026-06-29T10:00:00
---

# MOC - Sistema

> Mapa de Conteudo (MOC) — nó raiz da categoria. Nao duplica conteudo; use os links abaixo para navegar.

## Descricao

Mapa de Conteudo do bloco Sistema. Cobre configuracoes, cadastros mestres e infraestrutura que sustentam todos os outros blocos operacionais do WCS: dados de produtos, embalagens, acessos, dashboards e a plataforma de TI subjacente.

## Blocos desta Categoria

- [[cadastros-acessos]] — Cadastros e Acessos — usuarios, perfis, SSO, permissoes por funcao
- [[dashboards-relatorios]] — Dashboards e Relatorios — metricas operacionais, indicadores por turno, exportacoes
- [[infraestrutura]] — Infraestrutura — servidores, rede LAN/WiFi industrial, VPN, hardware (impressoras, PLCs, coletores)
- [[cadastro-produtos]] — Cadastro de Produtos — SKUs, dimensoes, peso, grau de fragilidade
- [[cadastro-caixas]] — Cadastro de Caixas — tipos de embalagem, dimensoes internas, tara

## Relacoes

- [[MOC-Integracao]] — Integracao alimenta os cadastros (WMS/ERP → WCS)
- [[MOC-Separacao]] — Separacao consome cadastros de produtos e caixas
- [[MOC-Conferencia]] — Conferencia usa cadastro de produtos para Check Weight
