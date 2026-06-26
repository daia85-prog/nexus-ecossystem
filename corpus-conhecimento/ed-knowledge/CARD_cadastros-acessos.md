# ED_CARD — cadastros-acessos

**Tópico:** cadastros-acessos · **Bloco:** sistema · **Dossiê (referência):** ./DOSSIE.md
**Gate:** `if8 = yes` (AD/SSO ativo — bloco de autenticação SSO/SAML)

> Card de geração: o ED preenche as **variáveis**, aplica as **condicionais** e emite os **blocos de capítulo**.
> **Nota:** cadastros de endereços e perfis de usuário são sempre incluídos (independem do gate). O gate `if8 = yes` adiciona o bloco de SSO/SAML.

## Variáveis (kickoff → slots)

| Slot | Campo kickoff | Tipo | Tradução (código → texto) |
|------|---------------|------|---------------------------|
| `{{ssoAtivo}}` | `if8` | select yes/no | `yes`=Integração com Active Directory/SSO ativa · `no`=Autenticação local (sem SSO) |
| `{{respInfra}}` | `if_resp_infra` | select | `srv_invent`=Invent · `srv_client`=Cliente · `srv_shared`=Compartilhada |
| `{{qtdEstacoes}}` | `if5` | texto | Número de estações de trabalho que acessam o WCS |

## Condicionais (regra → ação)

- **`if8 = yes`** → incluir seção completa de "Autenticação SSO" (Azure AD / Microsoft Entra via SAML ou Keycloak); documentar fluxo de redirecionamento ao IdP, emissão do token SAML, validação pelo WCS, rastreabilidade por e-mail SSO; incluir subseção de infraestrutura com responsável {{respInfra}} e capacidade {{qtdEstacoes}} estações.
- **`if8 = no`** → incluir nota de "Autenticação Local": credenciais gerenciadas no próprio WCS; sem SSO; documentar política de senhas e gestão de usuários; omitir fluxo SAML.
- **Sempre** → incluir seção de "Gestão de Endereços/Localizações" (cadastro estrutural obrigatório).
- **Sempre** → incluir seção de "Perfis e Permissões" (MASTER, liderança, supervisor, operador).
- **Sempre** → incluir seção de "Cadastros Auxiliares" (impressoras, postos de trabalho).
- **`if_resp_infra = srv_invent`** → Invent é responsável pela infraestrutura (servidores, rede, certificados).
- **`if_resp_infra = srv_client`** → Cliente é responsável pela infraestrutura; Invent fornece os requisitos técnicos.
- **`if_resp_infra = srv_shared`** → responsabilidade compartilhada; documentar divisão (ex: cliente provê servidores, Invent provê aplicação).

## Esqueleto de Capítulos (emitir nesta ordem)

```
[nivel 1] "Cadastros e Acessos"
  conteudo: visão geral — camada de configuração e segurança do WCS;
            cobre cadastros estruturais (endereços, impressoras, postos) e controle de acesso
            (autenticação, perfis, permissões, rastreabilidade).
            Infraestrutura: responsabilidade {{respInfra}}; {{qtdEstacoes}} estações de trabalho.

[nivel 2] "Autenticação e Acesso"
  [condicional if8=yes] subseção "SSO (Single Sign-On)"
    conteudo: acesso exclusivamente por SSO (RN-01); protocolo SAML contra IdP corporativo
              (Azure AD / Microsoft Entra ou Keycloak conforme o cliente).
    fluxo: usuário acessa WCS → redirecionado ao IdP → autentica → IdP emite token SAML →
           WCS valida e concede acesso conforme permissões do diretório →
           token reutilizável em outros sistemas da mesma infraestrutura SSO.
    rastreabilidade: e-mail do operador SSO registrado em cada ação (conferência, coleta) — RN-02.
  [condicional if8=no] subseção "Autenticação Local"
    conteudo: credenciais gerenciadas no WCS; política de senhas; gestão de usuários pelo administrador;
              rastreabilidade por login local.

[nivel 2] "Infraestrutura"
  conteudo: responsável pela infraestrutura — {{respInfra}};
            número de estações de trabalho — {{qtdEstacoes}};
  [condicional if_resp_infra=srv_invent] Invent provê servidores, rede e certificados.
  [condicional if_resp_infra=srv_client] Cliente provê infraestrutura; Invent fornece requisitos técnicos
    (OS, banco de dados, portas, certificados).
  [condicional if_resp_infra=srv_shared] divisão de responsabilidades: preencher na implementação
    (ex: cliente — servidores físicos/VM; Invent — aplicação, configuração, certificados).

[nivel 2] "Perfis e Permissões"
  [tipo tabela] headers ["Perfil","Ações Permitidas"];
  linhas:
    Operador / coleta, conferência, reabastecimento (fluxos operacionais padrão);
    Liderança / corte, reimpressão de etiquetas, visualização de relatórios avançados (RN-05);
    Supervisor / vínculo de impressoras a postos, criação de inventário, validação final (RN-05);
    MASTER / reabertura de notas finalizadas + todas as ações de supervisor/liderança (RN-05).
  conteudo adicional: ações sensíveis exigem perfil elevado — corte (liderança), criação de inventário
                      (supervisor), reabrir notas finalizadas (MASTER).

[nivel 2] "Gestão de Endereços / Localizações"
  conteudo: consultar, cadastrar, alterar, excluir e ativar/inativar endereços físicos do armazém.
            Só permite alterar status de endereços sem coleta prevista integrada — senão exibe erro (RN-03).
  [tipo tabela] headers ["Classificação","Descrição"];
  linhas: Pulmão / estoque de retaguarda; Fullcase / caixas fechadas; Fracionado / unidades avulsas;
          Misto / fullcase + fracionado; Stage de Pallets / área de agrupamento;
          Recebimento / entrada de mercadoria; Análise de Corte / área de decisão de corte; Picking / coleta.
  prioridade: WCS prioriza coleta em posições de picking; encaminha ao pulmão só itens sem posição de picking.
  filtros: por setor / tipo de endereço.
  referenciar [[integracao-cadastros]] para cadastro de endereços via integração.

[nivel 2] "Impressoras"
  conteudo: cadastro com nome lógico, IP, porta, localização (posto), status;
            comunicação TCP/IP em ZPL (RN-06).
  regras: só impressoras cadastradas e ativas podem ser vinculadas a postos;
          vínculo impressora↔posto restrito a supervisor/admin;
          um mesmo colaborador/impressora não pode estar em mais de um posto ativo (RN-06).

[nivel 2] "Postos de Trabalho"
  conteudo: vínculo de colaboradores e impressora ao posto; regra de exclusividade:
            um colaborador e uma impressora por posto ativo.
  gestão: supervisor/admin vincula colaborador + impressora ao posto; histórico de vínculos.

[nivel 2] "Importações via Excel"
  conteudo: cargas estruturais via planilha que alimentam validações e triagem (RN-07):
  [tipo tabela] headers ["Planilha","Conteúdo","Efeito"];
  linhas: Picking Map / posições e itens por área / alimenta separação e validação de endereços;
          Base de Equipamentos / MAC Address, dados de ativo / usada na triagem de conferência;
          Nota Fiscal / dados da NF / alimenta triagem de validação.

[nivel 2] "Regras de Negócio"
  [tipo tabela] headers ["#","Regra"];
  RN do DOSSIE: RN-01 (SSO obrigatório — condicional if8=yes), RN-02, RN-03, RN-04, RN-05,
                RN-06 (impressoras), RN-07 (importações Excel), RN-08.

[nivel 2] "Integrações Relacionadas"
  conteudo: [[integracao-cadastros]] (endereços e produtos cadastrados via integração);
            [[inventario]] (perfil supervisor para criar inventário);
            [[dashboards-relatorios]] (rastreabilidade por operador em relatórios);
            [[conferencia]] (e-mail SSO registrado em ações de conferência).
```

## Notas de rastreabilidade

- Conteúdo canônico: `./DOSSIE.md`.
- Cruza com: [[integracao-cadastros]] (endereços cadastrados — tela e integração), [[inventario]] (perfil supervisor — es4=yes), [[dashboards-relatorios]] (rastreabilidade de operador), [[conferencia]] (ações registradas com e-mail SSO), [[picking-pbl]] (postos de trabalho e impressoras por posto).
