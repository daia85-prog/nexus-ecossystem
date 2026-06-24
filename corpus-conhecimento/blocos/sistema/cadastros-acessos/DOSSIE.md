# cadastros-acessos — Dossiê Técnico

**Bloco:** sistema | **Tópico:** cadastros-acessos
**Seções analisadas:** 428 | **Fonte:** análise direta do RAW (chat)

> **Aviso de cobertura:** o RAW está fortemente contaminado por processos de picking/expedição (Picking Exceção, Aloca Pallet, Validação na Rampa, Triagem). O dossiê foca no núcleo real de **cadastros** (endereços, impressoras, postos) e **acessos** (autenticação, perfis, permissões); os processos operacionais estão sinalizados nos insights como desvios para a Fase 2.

## Visão Geral

Este tópico cobre os **cadastros estruturais** do WCS (endereços/localizações, impressoras, postos de trabalho) e o **controle de acesso** (autenticação SSO, perfis e permissões, rastreabilidade do operador). É a camada de configuração e segurança que sustenta os demais processos: sem endereços cadastrados, sem impressoras vinculadas e sem usuários autenticados, a operação não roda.

O acesso é feito **exclusivamente por SSO** (Single Sign-On) contra o IdP corporativo (Azure AD / Microsoft Entra) via **SAML**, e ações sensíveis (corte, reimpressão, reabertura de nota) exigem **perfis elevados** (liderança/supervisor/MASTER).

## Telas e Funcionalidades

### Tela de Gestão de Endereços / Localizações
- **Comportamento:** consultar, cadastrar, alterar, excluir e **ativar/inativar** endereços. Só permite alterar o status de endereços **sem coleta prevista integrada** (senão exibe erro). Filtros por setor/tipo.
- **Classificações de endereço:** Pulmão, Fullcase, Fracionado, **Misto** (fullcase + fracionado), Stage de Pallets, Área de Recebimento, Área de Análise de Corte, Posições de Picking.
- **Prioridade:** o WCS prioriza coleta em posições de picking; manda ao pulmão só itens sem posição de picking.

### Autenticação e Acesso (SSO)
- **Fluxo:** ao acessar, o usuário é redirecionado ao **IdP** (Azure AD/Keycloak) → autentica → o IdP emite **token SAML** → o WCS valida e concede acesso conforme as permissões do diretório → o token é reutilizável em outros sistemas da mesma infraestrutura SSO.
- **Identificação do operador:** o e-mail do operador SSO é registrado em cada ação (conferência, coleta) para **rastreabilidade**.

### Cadastros Auxiliares (transversais)
- **Impressoras:** nome lógico, IP, porta, localização (posto), status; vínculo impressora↔posto restrito a supervisor/admin; comunicação TCP/IP em ZPL.
- **Postos de trabalho:** vínculo de colaboradores e impressora ao posto; regras de exclusividade (um colaborador/impressora por posto ativo).
- **Importações via Excel:** picking map, base de equipamentos, nota fiscal (alimentam validações/triagem).

## Regras de Negócio

| # | Regra |
|---|-------|
| RN-01 | O acesso é **exclusivamente por SSO**; a autenticação usa **Azure AD (Microsoft Entra) via SAML**. |
| RN-02 | Cada ação do operador registra o **e-mail SSO** para rastreabilidade (quem coletou/conferiu). |
| RN-03 | Um endereço só pode ter o status alterado (ativar/inativar) se **não** houver coleta prevista integrada. |
| RN-04 | Endereços têm **classificação** (Pulmão/Fullcase/Fracionado/Misto/Stage/Recebimento/Análise de Corte/Picking); a coleta prioriza picking sobre pulmão. |
| RN-05 | Ações sensíveis exigem **perfil elevado**: **MASTER** (reabrir notas finalizadas), **liderança** (corte, reimpressão), **supervisor/admin** (vínculo de impressoras, criação de inventário). |
| RN-06 | **Impressoras:** só impressoras **cadastradas e ativas** podem ser vinculadas a postos; um mesmo colaborador/impressora não pode estar em mais de um posto ativo. |
| RN-07 | **Importações (Excel):** picking map, base de equipamentos e nota fiscal são cargas que alimentam validações e triagem. |
| RN-08 | A movimentação interna e a criação de endereços podem ocorrer na leitura (alguns projetos não validam o endereço previamente). |

## Variações por Projeto

| Projeto | Variação |
|---------|----------|
| **I22.1732** (Flower) | Tela de endereços centralizando Stage, Recebimento, Análise de Corte e Picking, com filtros por setor. |
| **I23.1412** (FDBR) | Autenticação **Azure AD/SAML**; SSO obrigatório; identificação do operador por e-mail SSO; movimentação interna de itens/posições. |
| **I24.215** (BP) | Tela de gestão de endereços com ativar/inativar condicionado a coletas previstas; classificação Pulmão/Fullcase/Fracionado/Misto. |
| **I22.2213** (Reverse) | Importações via Excel (picking map, base CLARO de MAC Address, nota fiscal); perfil **MASTER** para reabrir notas. |
| **I22.120** (BRF) | Cadastro de postos de trabalho, impressoras (IP/porta/ZPL) e centros do SAP. |

## Integrações

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| **Azure AD / Microsoft Entra (SAML)** | Autenticação | Provedor de identidade do SSO; emite o token validado pelo WCS. |
| **IdP corporativo (Keycloak/outros)** | Autenticação | Alternativa de IdP conforme o cliente. |
| **Importação Excel** | Recebimento | Carga de picking map, base de equipamentos e notas fiscais. |
| **Impressoras (TCP/IP, ZPL)** | Saída | Recebem as etiquetas; cadastradas e vinculadas a postos. |

## Terminologia

| Termo | Definição |
|-------|-----------|
| **SSO (Single Sign-On)** | Autenticação centralizada única para acessar o WCS e sistemas integrados. |
| **SAML** | Protocolo de troca de token entre IdP e WCS. |
| **IdP (Identity Provider)** | Provedor de identidade (Azure AD, Keycloak) que autentica o usuário. |
| **Perfil MASTER / liderança / supervisor** | Níveis de permissão para ações sensíveis. |
| **Endereço / Localização** | Posição física cadastrada, com classificação por finalidade. |
| **Classificação de endereço** | Pulmão / Fullcase / Fracionado / Misto / Stage / Recebimento / Análise de Corte / Picking. |
| **Posto de trabalho** | Conjunto de posições + colaborador + impressora vinculados. |
| **Picking Map** | Planilha importada que define posições/itens por área. |

---
*Gerado em 2026-06-24 · análise direta do RAW · 428 seções (núcleo de cadastros/acessos; processos operacionais remetem aos tópicos de separação/expedição)*
