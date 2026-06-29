---
aliases:
  - "Infraestrutura"
  - "Infra"
  - "Rede"
  - "VPN"
  - "Servidores"
tags:
  - wcs/bloco
  - wcs/sistema
  - wcs/infraestrutura
  - processo-operacional
  - pendente/revisao-humana
data_criacao: 2026-06-29T10:00:00
---

Roteamento Conceptual: [[MOC-Sistema]]

# Infraestrutura

> Nó de roteamento — infraestrutura de TI que suporta o WCS: servidores, rede, VPN, acesso remoto e integrações de hardware.

## Contexto Latente e Inferencia Inicial

A infraestrutura cobre os requisitos técnicos não funcionais do WCS: configuração de servidores de aplicação, rede local (LAN/WiFi industrial), acesso remoto via VPN para suporte, cabeamento e switches para equipamentos (coletores Android, impressoras TCP/IP, portais de leitura, PLC). É referenciada por [[cadastros-acessos]] (SSO via Azure AD exige rede estável e rota ao IdP corporativo), e por praticamente todos os módulos de hardware (impressoras, portais, PLCs). O INBOX do corpus tem ~35 seções de VPN, rede elétrica e hardware aguardando esse tópico.

## Documentacao Tecnica

- [[DOSSIE]] -- Dossiê técnico completo
- [[insights/infraestrutura.INSIGHTS]] -- Análise de padrões e lacunas

## Relacoes no Grafo

- [[MOC-Sistema]] -- Mapa de Conteúdo da categoria sistema
- [[cadastros-acessos]] -- SSO (Azure AD/SAML) depende de rede e VPN
- [[integracao-wcs-wms]] -- Comunicação WCS ↔ WMS passa pela rede
- [[sorter]] -- PLC do sorter comunica via rede local (sem internet)
- [[dashboards-relatorios]] -- Acesso remoto ao painel operacional
