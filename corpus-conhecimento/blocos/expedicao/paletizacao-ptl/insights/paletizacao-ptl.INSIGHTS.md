# Paletizacao-PTL — Insights

## Padrões Identificados

- O agrupador "Romaneio" é o padrão para PTL em entregas próprias; agrupadores alternativos (pedido, NF, rota) aparecem como exceção em projetos específicos
- A distinção BP (Barcode Put) vs. PTL (Put To Light) segue o custo de hardware: BP usa pistola/coletor já existente sem display adicional; PTL requer módulo de displays — ambos são suportados pelo mesmo módulo WCS
- Operadores experientes tendem a "adivinhar" a posição pelo volume sem olhar o display, gerando erros silenciosos que passam despercebidos até o carregamento

## Variações Significativas

- Número de posições PTL ativas simultaneamente varia muito: de 8 a 64+ posições dependendo do layout físico e volume de transportadoras ativas
- Alguns projetos operam PTL em modo "fila": quando todas as posições estão ocupadas, novos romaneios ficam pendentes na pt9 e só são ativados ao liberar uma posição
- Projetos com alto giro de rota (muitas entregas pequenas por transportadora) tendem a usar BP para simplificar; PTL com display vale mais para rotas grandes com muitos volumes

## Lacunas e Inconsistências

- O comportamento ao escanear o mesmo volume duas vezes em posições diferentes não está documentado — WCS rejeita? Move? Alerta silencioso?
- Não há mapeamento claro de como o WCS trata posições PTL que ficam "presas" (volume mal colocado fisicamente que impede fechamento do romaneio)
- A tela pt9 não está descrita em detalhe suficiente para treinamento: campos, filtros, ações disponíveis por perfil de usuário

## Inferências

**Inferência 1:** O limite de posições PTL ativas simultâneas é uma restrição de hardware (número físico de displays instalados), não de software — o WCS suporta quantas posições forem cadastradas.
- Confiabilidade: alta
- Base: arquitetura do módulo WCS não impõe limite lógico; restrição é o controlador de displays

**Inferência 2:** Projetos que evoluem de BP para PTL (adicionando displays) provavelmente reutilizam o mesmo módulo WCS com mudança apenas de configuração de hardware, sem refatoração de processo.
- Confiabilidade: média
- Base: a abstração BP/PTL no módulo sugere isso; não confirmado em dossiê

---
*Gerado em 2026-06-29*
