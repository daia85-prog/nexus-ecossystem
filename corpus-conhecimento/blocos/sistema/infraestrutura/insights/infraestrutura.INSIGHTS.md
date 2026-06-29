# Infraestrutura — Insights

## Padrões Identificados

- Problemas de rede são a categoria mais frequente de chamados de suporte remoto — latência alta ou perda de pacotes na LAN industrial impacta diretamente a comunicação WCS↔PLC e a resposta dos coletores
- A separação de VLANs (corporativa vs. industrial) é recomendada mas raramente implementada pelo cliente desde o início; projetos que não segmentam enfrentam interferência de tráfego corporativo nas comunicações PLC
- VPN Invent instalada no servidor WCS é o canal padrão de suporte — projetos sem VPN configurada exigem RDP via credentials do cliente, criando dependência e atraso no atendimento

## Variações Significativas

- Clientes M365 com Azure AD permitem SSO imediato; clientes sem IdP exigem gestão manual de usuários no WCS — dobra o esforço de onboarding e manutenção de acessos
- Ambientes on-premises têm latência mais baixa (LAN local) mas exigem suporte físico presencial para hardware; ambientes cloud têm latência de rede WAN mas mais flexibilidade de manutenção
- WiFi 5GHz industrial com certificação IP (access points em áreas de armazém com forklift) é um requisito diferente de WiFi de escritório — projetos que subestimam isso têm problemas crônicos de desconexão de coletores

## Lacunas e Inconsistências

- Não há documentação de especificações mínimas de servidor (CPU, RAM, disco) por tamanho de operação (volumes/dia) — isso levou a subprovisionamento em projetos com crescimento inesperado
- O processo de atualização de versão WCS em produção (deploy, rollback) não está documentado no corpus de infraestrutura
- Não há checklist de pré-go-live de infraestrutura documentado: quais testes de rede, hardware e conectividade devem ser executados antes de liberar operação

## Inferências

**Inferência 1:** O INBOX com ~35 seções de infra sem tópico contém principalmente dúvidas sobre VPN, cabeamento e configuração de impressoras — esses são os pontos mais variáveis por projeto e os que geram mais dúvidas na equipe.
- Confiabilidade: alta
- Base: observação direta das tags [infra-sem-topico] no corpus

**Inferência 2:** A criação deste tópico de Infraestrutura vai resolver uma parte significativa das seções INBOX orphan — muitas delas provavelmente têm conteúdo que pode ser sintetizado aqui após roteamento pelo sintetizador.
- Confiabilidade: alta
- Base: INBOX orphan é sintoma de ausência de tópico de destino, não de conteúdo irrelevante

---
*Gerado em 2026-06-29*
