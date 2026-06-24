# cadastros-acessos — Insights

## Padrões Identificados

- **SSO/SAML é o padrão de acesso:** o login exclusivamente por SSO contra Azure AD/Entra (SAML) é a regra; a identidade do operador (e-mail SSO) é gravada em cada ação para rastreabilidade.
- **Permissão escalonada por ação:** corte, reimpressão e reabertura de nota exigem liderança/MASTER/supervisor. O controle de acesso é por ação sensível, não só por tela.
- **Endereço é a entidade-mãe dos cadastros:** quase todos os cadastros giram em torno de posições/localizações classificadas por finalidade.
- **Status protegido por dependência:** não se inativa um endereço com coleta prevista — o cadastro respeita o estado operacional.

## Variações Significativas

- **Classificação de endereço varia:** alguns projetos têm Pulmão/Fullcase/Fracionado/Misto; outros acrescentam Stage/Recebimento/Análise de Corte. A taxonomia depende do layout do CD.
- **IdP configurável:** Azure AD é o default, mas o material admite Keycloak/outros — flexibilidade de provedor.
- **Importação por Excel (Reverse):** picking map, base de equipamentos e nota fiscal entram por planilha — modelo de carga manual, distinto da integração por mensagem.
- **Endereço criado na leitura:** alguns projetos não validam endereço previamente (cria na hora); outros bloqueiam — política oposta.

## Lacunas e Inconsistências

- **Contaminação severa do RAW (428 seções, ~maioria desvio):** grande parte descreve processos de separação/expedição, não cadastros/acessos.
- **Seções candidatas a desvio / Fase 2:**
  - **picking-fullcase / separacao:** "Processo de Picking Exceção" (Beta) — coleta manual.
  - **paletizacao / ptl-alocacao:** "Aloca Pallet", "Se a Transportadora Realiza Paletização", "Alocação de Volumes no Pallet".
  - **sorter / conferencia:** "Validação na Rampa" (sinaleiro verde/vermelho).
  - **picking-pbl / conferencia:** "Triagem dos itens" (Reverse — MAC Address/QR).
  - **integracao-cadastros:** "Tela de endereços" e cadastro de produtos quando aparecem.
- **"Tela de endereços" duplicada:** aparece aqui e em [[integracao-cadastros]] e [[picking-pbl]] — o conceito de gestão de localizações está espalhado por vários tópicos.

## Inferências

- **Inferência:** "cadastros-acessos" é um tópico de **camada de plataforma** (configuração + segurança) que o roteador encheu com processos de chão de fábrica; o núcleo real é pequeno (endereços, auth, perfis, impressoras, postos).
  - **Confiabilidade:** alta
  - **Base:** a maioria das seções descreve picking/expedição; só uma minoria trata de cadastro/acesso propriamente.

- **Inferência:** O controle de acesso por ação sensível (corte/reimpressão/reabertura) indica requisito de compliance e auditoria — ações que alteram saldo/expedição precisam de autoria identificada.
  - **Confiabilidade:** média
  - **Base:** as ações que exigem liderança/MASTER são justamente as que afetam estoque/faturamento; a motivação é inferida.

- **Inferência:** A gestão de endereços é o cadastro mais crítico — alimenta reabastecimento, picking, mapa do sorter e PTL; um endereço mal classificado degrada todos esses fluxos.
  - **Confiabilidade:** alta
  - **Base:** a classificação do endereço determina prioridade de coleta, elegibilidade de reabastecimento e roteamento.

---
*Gerado em 2026-06-24*
