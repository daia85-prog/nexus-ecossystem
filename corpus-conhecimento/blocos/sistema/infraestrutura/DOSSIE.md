# Infraestrutura — Dossiê Técnico

**Bloco:** Sistema | **Tópico:** Infraestrutura de TI
**Seções analisadas:** 3 | **Fonte:** Sintetizado a partir de dossiê de Cadastros-Acessos e seções INBOX de infra (2026-06-29)

## Visão Geral

A infraestrutura cobre todos os requisitos técnicos não funcionais que suportam o WCS em operação: servidores de aplicação, rede local industrial (LAN/WiFi), acesso remoto via VPN para suporte remoto Invent, integração de hardware (impressoras TCP/IP, coletores Android, portais de leitura, CLPs/PLCs), e gestão de identidade (Azure AD / SSO). É o "chão" sobre o qual todos os módulos do WCS operam.

## Fluxo do Processo

1. Cliente provisiona servidor de aplicação (físico ou VM) com especificações mínimas Invent
2. Invent configura aplicação WCS e banco de dados no servidor
3. Rede local é configurada (VLAN industrial separada, WiFi 5GHz para coletores)
4. Hardwares são cadastrados por IP (impressoras TCP/IP, portais de leitura, PLCs)
5. VPN Invent é instalada para acesso remoto de suporte
6. SSO (Azure AD) é configurado para autenticação centralizada (se cliente usa M365)
7. Go-live: validação de conectividade de todos os equipamentos antes da operação

## Telas e Funcionalidades

| Tela | Função |
|------|--------|
| Cadastro de Equipamentos | IP, porta, tipo de hardware (impressora, portal, coletor) por localização |
| Status de Hardware | Ping/status de conectividade de cada equipamento em tempo real |
| Log de VPN | Histórico de sessões de acesso remoto (auditoria) |
| Configuração SSO | Parâmetros do IdP (Azure AD / SAML endpoint, client_id) |

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | Servidor WCS deve ter IP fixo na rede local; sem DHCP para o servidor |
| RN-02 | Impressoras TCP/IP cadastradas por IP:Porta; WCS testa conectividade ao inicializar |
| RN-03 | Coletores Android conectam por WiFi 5GHz; 2.4GHz desaconselhado (interferência industrial) |
| RN-04 | PLCs comunicam via protocolo industrial (OPC-UA / Modbus TCP); sem acesso à internet |
| RN-05 | VPN Invent instalada no servidor WCS permite suporte remoto sem expor portas ao exterior |
| RN-06 | SSO via Azure AD/SAML: WCS delega autenticação ao IdP; sessão token com expiração configurável |
| RN-07 | Segmento de rede industrial (PLC/sorter) deve ser isolado do segmento corporativo |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| Cliente com Azure AD (M365) | SSO SAML integrado; usuários do WCS = usuários do AD corporativo |
| Cliente sem IdP corporativo | Autenticação local WCS com usuários cadastrados manualmente |
| Ambiente cloud (Azure/AWS) | Servidor WCS em VM cloud; VPN site-to-site com o armazém |
| Ambiente on-premises | Servidor físico no armazém; manutenção hardware pelo cliente |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| Azure AD / SAML IdP | Autenticação | SSO para login no WCS via credenciais corporativas |
| PLC / Sorter | Protocolo industrial | OPC-UA ou Modbus TCP na rede local industrial (VLAN isolada) |
| Impressoras TCP/IP | Impressão | Zebra ZPL, Datamax, etc. — endereço IP:porta cadastrado no WCS |
| VPN Invent | Acesso remoto | Túnel seguro para suporte e deploy remoto |
| [[cadastros-acessos]] | Dependência | SSO e criação de usuários dependem de rede e IdP estáveis |

## Terminologia

| Termo | Definição |
|-------|-----------|
| VLAN Industrial | Segmento de rede isolado para equipamentos de automação (PLC, sorter) |
| SSO | Single Sign-On — autenticação unificada via provedor de identidade corporativo |
| IdP | Identity Provider — servidor de identidade (ex.: Azure AD) que valida credenciais |
| OPC-UA | Protocolo de comunicação industrial (Open Platform Communications Unified Architecture) |
| VPN Invent | Client VPN instalado no servidor WCS para acesso remoto da equipe Invent |

---
*Gerado em 2026-06-29 · síntese a partir de dossiês de Cadastros-Acessos e seções INBOX de infra*
